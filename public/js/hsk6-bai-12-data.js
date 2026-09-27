// ══════════════════════════════════════════
// DATA — HSK6 Bài 12: 我们都爱白噪音。 (Chúng ta đều yêu tiếng ồn trắng)
// 第三单元 多彩社会 · Nguồn: HSK标准教程6上 (tr. 126–134) + đáp án sách
// Bài khoá: 我们都爱白噪音 (835字) · 44 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'白噪音',py:'bái zàoyīn',pos:'Danh từ',vn:'tiếng ồn trắng',hv:'bạch táo âm',em:'🌧️',lesson:1,
   explain:['Âm thanh đều đều, liên tục, trải trên mọi tần số — như tiếng mưa rơi, sóng vỗ, gió lùa qua lá, tiếng ồn ào lao xao trong phòng họp.','Thuật ngữ khoa học (白 = trắng, như "ánh sáng trắng" chứa mọi màu); trong bài là âm thanh nền khiến con người thấy an toàn.'],
   usage:'Hay gặp: 听白噪音, 白噪音减弱 / 减退, 用白噪音助眠, 白噪音的功效. Phân biệt với 噪音 (tiếng ồn nói chung, gây khó chịu).',
   collo:['听白噪音','白噪音减弱','白噪音的功效','用白噪音助眠'],
   ex_zh:'会议室里的嘈杂声就是白噪音，大量的白噪音暗示着安全。',ex_py:'Huìyìshì li de cáozá shēng jiù shì bái zàoyīn, dàliàng de bái zàoyīn ànshìzhe ānquán.',ex_vn:'Tiếng ồn ào trong phòng họp chính là tiếng ồn trắng, nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn.',
   exList:[
     {zh:'会议室里的嘈杂声就是白噪音，大量的白噪音暗示着安全。',py:'Huìyìshì li de cáozá shēng jiù shì bái zàoyīn, dàliàng de bái zàoyīn ànshìzhe ānquán.',vn:'Tiếng ồn ào trong phòng họp chính là tiếng ồn trắng, nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn.'},
     {zh:'我睡不着的时候，就打开手机听一会儿下雨的白噪音。',py:'Wǒ shuì bu zháo de shíhou, jiù dǎkāi shǒujī tīng yíhuìr xià yǔ de bái zàoyīn.',vn:'Những lúc không ngủ được, tôi mở điện thoại nghe một lúc tiếng ồn trắng của mưa rơi.'},
     {zh:'不少同学发现，学习时开着白噪音反而更容易集中注意力。',py:'Bùshǎo tóngxué fāxiàn, xuéxí shí kāizhe bái zàoyīn fǎn\'ér gèng róngyì jízhōng zhùyìlì.',vn:'Không ít bạn phát hiện ra, khi học mà bật tiếng ồn trắng thì ngược lại còn dễ tập trung hơn.'}
   ],
   colloFull:[
     {zh:'听白噪音',py:'tīng bái zàoyīn',vn:'nghe tiếng ồn trắng'},
     {zh:'白噪音减弱',py:'bái zàoyīn jiǎnruò',vn:'tiếng ồn trắng yếu đi'},
     {zh:'白噪音的功效',py:'bái zàoyīn de gōngxiào',vn:'công dụng của tiếng ồn trắng'},
     {zh:'用白噪音助眠',py:'yòng bái zàoyīn zhù mián',vn:'dùng tiếng ồn trắng hỗ trợ giấc ngủ'},
     {zh:'下雨的白噪音',py:'xià yǔ de bái zàoyīn',vn:'tiếng ồn trắng của mưa'}
   ],
   patterns:[
     {s:'……就是白噪音',m:'… chính là tiếng ồn trắng (định nghĩa bằng ví dụ)'},
     {s:'开着白噪音 + V',m:'Bật tiếng ồn trắng trong lúc làm gì (V着 + V)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng ồn trắng tuy nghe có vẻ hơi ồn, nhưng lại có thể giúp người ta thả lỏng.',answer:'白噪音虽然听上去有点儿吵，却能让人放松下来。',answerPy:'Bái zàoyīn suīrán tīng shàngqu yǒudiǎnr chǎo, què néng ràng rén fàngsōng xiàlái.',
      note:'虽然……却……: tuy … nhưng lại …; 听上去 = nghe có vẻ.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chỉ cần bật tiếng ồn trắng lên là tôi có thể ngủ rất nhanh.',answer:'只要打开白噪音，我就能很快睡着。',answerPy:'Zhǐyào dǎkāi bái zàoyīn, wǒ jiù néng hěn kuài shuìzháo.',
      note:'只要……就……: chỉ cần … là …',pair:'只要……就……'}
   ]},

  {n:2,zh:'嘈杂',py:'cáozá',pos:'Tính từ',vn:'ồn ào, huyên náo',hv:'tào tạp',em:'🗣️',lesson:1,
   explain:['Nhiều âm thanh lẫn lộn, ồn ào lộn xộn (tiếng người, tiếng xe…).','Là tính từ văn viết; thường tả môi trường: 环境嘈杂, 嘈杂的街道; 嘈杂声 = tiếng ồn ào.'],
   usage:'Hay gặp: 一片嘈杂, 嘈杂声, 环境嘈杂, 嘈杂的街道. Khẩu ngữ tương đương: 吵, 吵闹. Trái nghĩa: 安静, 寂静 (bài 2).',
   collo:['一片嘈杂','嘈杂声','环境嘈杂','嘈杂的街道'],
   ex_zh:'会还没开始，屋子里一片嘈杂。',ex_py:'Huì hái méi kāishǐ, wūzi li yí piàn cáozá.',ex_vn:'Cuộc họp còn chưa bắt đầu, trong phòng ồn ào cả lên.',
   exList:[
     {zh:'会还没开始，屋子里一片嘈杂。',py:'Huì hái méi kāishǐ, wūzi li yí piàn cáozá.',vn:'Cuộc họp còn chưa bắt đầu, trong phòng ồn ào cả lên.'},
     {zh:'车站里人来人往，十分嘈杂，我连广播都听不清。',py:'Chēzhàn li rénlái-rénwǎng, shífēn cáozá, wǒ lián guǎngbō dōu tīng bu qīng.',vn:'Trong nhà ga người qua kẻ lại, vô cùng ồn ào, tôi ngay cả loa thông báo cũng nghe không rõ.'},
     {zh:'这家咖啡馆环境嘈杂，根本不适合学习。',py:'Zhè jiā kāfēiguǎn huánjìng cáozá, gēnběn bú shìhé xuéxí.',vn:'Quán cà phê này ồn ào, hoàn toàn không hợp để học.'}
   ],
   colloFull:[
     {zh:'一片嘈杂',py:'yí piàn cáozá',vn:'ồn ào cả lên'},
     {zh:'嘈杂声',py:'cáozá shēng',vn:'tiếng ồn ào'},
     {zh:'环境嘈杂',py:'huánjìng cáozá',vn:'môi trường ồn ào'},
     {zh:'嘈杂的街道',py:'cáozá de jiēdào',vn:'con phố ồn ào'},
     {zh:'人声嘈杂',py:'rénshēng cáozá',vn:'tiếng người ồn ào'}
   ],
   patterns:[
     {s:'……一片嘈杂',m:'… ồn ào cả lên (一片 + tính từ tả cả không gian)'},
     {s:'环境嘈杂，……',m:'Môi trường ồn ào, … (nêu nguyên nhân)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỗ này ồn ào quá, chi bằng chúng ta đổi chỗ khác nói chuyện đi.',answer:'这里太嘈杂了，我们不如换个地方聊吧。',answerPy:'Zhèlǐ tài cáozá le, wǒmen bùrú huàn ge dìfang liáo ba.',
      note:'不如 = chi bằng (đề nghị); 太……了.',pair:'不如 (đề nghị)'},
     {promptLang:'vi',prompt:'Dù xung quanh ồn ào thế nào, cậu ấy vẫn có thể chăm chú đọc sách.',answer:'不管周围多么嘈杂，他都能专心看书。',answerPy:'Bùguǎn zhōuwéi duōme cáozá, tā dōu néng zhuānxīn kàn shū.',
      note:'不管……都……: dù … thế nào cũng ….',pair:'不管……都……'}
   ]},

  {n:3,zh:'莫名其妙',py:'mòmíng-qímiào',pos:'Thành ngữ',vn:'không hiểu ra sao, khó hiểu, vô cớ',hv:'mạc danh kỳ diệu',em:'🤔',lesson:1,
   explain:['Không ai nói rõ được điều kỳ diệu (lý do) của nó → sự việc kỳ lạ, không giải thích được.','Làm trạng ngữ (莫名其妙地 + V), định ngữ (莫名其妙的事) hoặc vị ngữ (让人莫名其妙, 感到莫名其妙).'],
   usage:'Hay gặp: 莫名其妙地……, 感到莫名其妙, 让人莫名其妙, 莫名其妙的问题. Khẩu ngữ có thể nói trống 莫名其妙! (thật vô lý!).',
   collo:['莫名其妙地安静下来','感到莫名其妙','让人莫名其妙','莫名其妙的问题'],
   ex_zh:'突然房间里莫名其妙地一片寂静。',ex_py:'Tūrán fángjiān li mòmíng-qímiào de yí piàn jìjìng.',ex_vn:'Đột nhiên trong phòng im phăng phắc một cách khó hiểu.',
   exList:[
     {zh:'突然房间里莫名其妙地一片寂静。',py:'Tūrán fángjiān li mòmíng-qímiào de yí piàn jìjìng.',vn:'Đột nhiên trong phòng im phăng phắc một cách khó hiểu.'},
     {zh:'他莫名其妙地冲我发了一通火，我到现在都不知道为什么。',py:'Tā mòmíng-qímiào de chòng wǒ fāle yí tòng huǒ, wǒ dào xiànzài dōu bù zhīdào wèi shénme.',vn:'Anh ấy vô cớ nổi giận với tôi một trận, đến giờ tôi vẫn không biết tại sao.'},
     {zh:'老师突然表扬了我，我感到莫名其妙。',py:'Lǎoshī tūrán biǎoyángle wǒ, wǒ gǎndào mòmíng-qímiào.',vn:'Thầy đột nhiên khen tôi, tôi thấy chẳng hiểu ra sao.'}
   ],
   colloFull:[
     {zh:'莫名其妙地安静下来',py:'mòmíng-qímiào de ānjìng xiàlái',vn:'tự dưng im bặt'},
     {zh:'感到莫名其妙',py:'gǎndào mòmíng-qímiào',vn:'thấy khó hiểu'},
     {zh:'让人莫名其妙',py:'ràng rén mòmíng-qímiào',vn:'khiến người ta khó hiểu'},
     {zh:'莫名其妙的问题',py:'mòmíng-qímiào de wèntí',vn:'câu hỏi kỳ quặc'},
     {zh:'莫名其妙地哭了',py:'mòmíng-qímiào de kū le',vn:'tự dưng bật khóc'}
   ],
   patterns:[
     {s:'莫名其妙地 + V',m:'Làm gì một cách khó hiểu, vô cớ'},
     {s:'让人 / 令人莫名其妙',m:'Khiến người ta không hiểu ra sao'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không biết vì sao, cô ấy tự dưng không thèm để ý tới tôi nữa.',answer:'不知道为什么，她莫名其妙地不理我了。',answerPy:'Bù zhīdào wèi shénme, tā mòmíng-qímiào de bù lǐ wǒ le.',
      note:'莫名其妙地 + V làm trạng ngữ; 不理 = không để ý tới.',pair:'Trạng ngữ + 地'},
     {promptLang:'vi',prompt:'Câu anh ta hỏi khiến người ta chẳng hiểu gì, cả lớp nhìn nhau.',answer:'他问的问题让人莫名其妙，全班同学你看看我，我看看你。',answerPy:'Tā wèn de wèntí ràng rén mòmíng-qímiào, quán bān tóngxué nǐ kànkan wǒ, wǒ kànkan nǐ.',
      note:'让人 + cảm giác (câu kiêm ngữ); 你看看我，我看看你 = nhìn nhau ngơ ngác.',pair:'让 (câu kiêm ngữ)'}
   ]},

  {n:4,zh:'淘汰',py:'táotài',pos:'Động từ',vn:'đào thải, loại bỏ',hv:'đào thải',em:'🗑️',lesson:1,
   explain:['Loại bỏ cái kém, cái không thích hợp, giữ lại cái tốt (trong thi đấu, thị trường, tự nhiên).','Hay dùng ở câu bị động: 被淘汰, 被……淘汰掉; 淘汰赛 = vòng đấu loại trực tiếp.'],
   usage:'Hay gặp: 被淘汰, 淘汰掉, 自然淘汰, 淘汰赛, 被市场淘汰. 淘汰 dùng cho người, đội, sản phẩm, công nghệ.',
   collo:['被淘汰','淘汰掉','淘汰赛','被市场淘汰'],
   ex_zh:'没有学会在白噪音减退时闭嘴的人，在自然界早已被淘汰掉了。',ex_py:'Méiyǒu xuéhuì zài bái zàoyīn jiǎntuì shí bì zuǐ de rén, zài zìránjiè zǎoyǐ bèi táotài diào le.',ex_vn:'Những người không học được cách im lặng khi tiếng ồn trắng giảm đi đã sớm bị đào thải khỏi giới tự nhiên.',
   exList:[
     {zh:'没有学会在白噪音减退时闭嘴的人，在自然界早已被淘汰掉了。',py:'Méiyǒu xuéhuì zài bái zàoyīn jiǎntuì shí bì zuǐ de rén, zài zìránjiè zǎoyǐ bèi táotài diào le.',vn:'Những người không học được cách im lặng khi tiếng ồn trắng giảm đi đã sớm bị đào thải khỏi giới tự nhiên.'},
     {zh:'我们班在第一轮比赛中就被淘汰了，大家都很失望。',py:'Wǒmen bān zài dì-yī lún bǐsài zhōng jiù bèi táotài le, dàjiā dōu hěn shīwàng.',vn:'Lớp chúng tôi bị loại ngay từ vòng đấu đầu tiên, mọi người đều rất thất vọng.'},
     {zh:'企业如果不创新，迟早会被市场淘汰。',py:'Qǐyè rúguǒ bú chuàngxīn, chízǎo huì bèi shìchǎng táotài.',vn:'Doanh nghiệp nếu không đổi mới, sớm muộn sẽ bị thị trường đào thải.'}
   ],
   colloFull:[
     {zh:'被淘汰',py:'bèi táotài',vn:'bị loại, bị đào thải'},
     {zh:'淘汰掉',py:'táotài diào',vn:'loại bỏ đi'},
     {zh:'淘汰赛',py:'táotàisài',vn:'vòng đấu loại'},
     {zh:'被市场淘汰',py:'bèi shìchǎng táotài',vn:'bị thị trường đào thải'},
     {zh:'自然淘汰',py:'zìrán táotài',vn:'đào thải tự nhiên'}
   ],
   patterns:[
     {s:'被 (+ ai / cái gì) + 淘汰(掉)',m:'Bị … đào thải, bị loại'},
     {s:'……迟早会被淘汰',m:'… sớm muộn sẽ bị đào thải'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không kiên trì học kiến thức mới, sớm muộn gì chúng ta cũng bị thời đại đào thải.',answer:'要是不坚持学习新知识，我们迟早会被时代淘汰。',answerPy:'Yàoshi bù jiānchí xuéxí xīn zhīshi, wǒmen chízǎo huì bèi shídài táotài.',
      note:'要是……: nếu …; câu bị động 被 + tác nhân + 淘汰.',pair:'Câu bị động 被'},
     {promptLang:'vi',prompt:'Đội chúng tôi tuy bị loại, nhưng mọi người đều đã cố gắng hết sức.',answer:'我们队虽然被淘汰了，但是大家都已经尽力了。',answerPy:'Wǒmen duì suīrán bèi táotài le, dànshì dàjiā dōu yǐjīng jìnlì le.',
      note:'虽然……但是……: tuy … nhưng ….',pair:'虽然……但是……'}
   ]},

  {n:5,zh:'不妨',py:'bùfáng',pos:'Phó từ',vn:'cứ thử, không ngại, tốt nhất là',hv:'bất phương',em:'💡',lesson:1,
   explain:['Biểu thị có thể làm như vậy, không có trở ngại gì; hàm ý người nói cho rằng làm thế thì TỐT HƠN.','Dùng khi khuyến khích, gợi ý: 不妨 + động từ (thường kèm 试试, 一下, V一V).'],
   usage:'Hay gặp: 不妨试试, 不妨直说, 不妨……一下, 你不妨……. Nhẹ nhàng, lịch sự hơn 应该 / 必须; không dùng để nói việc bắt buộc.',
   collo:['不妨试试','不妨直说','不妨描绘一下','不妨换个角度'],
   ex_zh:'什么是白噪音？我们不妨形象地描绘一下。',ex_py:'Shénme shì bái zàoyīn? Wǒmen bùfáng xíngxiàng de miáohuì yíxià.',ex_vn:'Tiếng ồn trắng là gì? Chúng ta thử miêu tả một cách hình ảnh xem.',
   exList:[
     {zh:'什么是白噪音？我们不妨形象地描绘一下。',py:'Shénme shì bái zàoyīn? Wǒmen bùfáng xíngxiàng de miáohuì yíxià.',vn:'Tiếng ồn trắng là gì? Chúng ta thử miêu tả một cách hình ảnh xem.'},
     {zh:'有什么意见，你不妨直说。',py:'Yǒu shénme yìjiàn, nǐ bùfáng zhí shuō.',vn:'Có ý kiến gì thì anh cứ nói thẳng.'},
     {zh:'改变人们的传统观念可能不容易，但我们不妨试一试。',py:'Gǎibiàn rénmen de chuántǒng guānniàn kěnéng bù róngyì, dàn wǒmen bùfáng shì yi shì.',vn:'Thay đổi quan niệm truyền thống của mọi người có thể không dễ, nhưng chúng ta cứ thử xem.'}
   ],
   colloFull:[
     {zh:'不妨试试',py:'bùfáng shìshi',vn:'cứ thử xem'},
     {zh:'不妨直说',py:'bùfáng zhí shuō',vn:'cứ nói thẳng'},
     {zh:'不妨描绘一下',py:'bùfáng miáohuì yíxià',vn:'thử miêu tả xem'},
     {zh:'不妨换个角度',py:'bùfáng huàn ge jiǎodù',vn:'thử đổi góc nhìn'},
     {zh:'不妨问问老师',py:'bùfáng wènwen lǎoshī',vn:'cứ hỏi thầy xem'}
   ],
   patterns:[
     {s:'不妨 + V + 一下 / 试试',m:'Cứ thử làm … xem (gợi ý nhẹ nhàng)'},
     {s:'如果……，不妨……',m:'Nếu …, thì cứ thử … (nêu hoàn cảnh rồi gợi ý)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu thấy học thuộc từ vựng nhàm chán, bạn cứ thử vừa nghe nhạc vừa học xem.',answer:'如果觉得背单词枯燥，你不妨一边听音乐一边学。',answerPy:'Rúguǒ juéde bèi dāncí kūzào, nǐ bùfáng yìbiān tīng yīnyuè yìbiān xué.',
      note:'不妨 + V: gợi ý; 枯燥 ôn bài 7; 一边……一边…….',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Phương pháp cô ấy nói có lẽ làm được, cậu cứ thử xem.',answer:'她说的方法也许可行，你不妨试试。',answerPy:'Tā shuō de fāngfǎ yěxǔ kěxíng, nǐ bùfáng shìshi.',
      note:'练一练 (1) của sách: 你试试也可以 → 你不妨试试; động từ lặp lại 试试.',pair:'Lặp lại động từ (试试)'}
   ]},

  {n:6,zh:'描绘',py:'miáohuì',pos:'Động từ',vn:'miêu tả, mô tả, vẽ ra',hv:'miêu hội',em:'🎨',lesson:1,
   explain:['Dùng lời văn hoặc hình vẽ thể hiện lại hình ảnh, cảnh vật, tâm trạng một cách sinh động.','Văn viết; tân ngữ: 风景, 场面, 生活, 心情, 未来, 蓝图….'],
   usage:'Hay gặp: 形象地描绘, 描绘出……, 描绘未来, 用文字描绘. Gần với 描写 (tả trong bài văn) nhưng 描绘 thiên về "vẽ lên" bức tranh sinh động.',
   collo:['形象地描绘','描绘未来','描绘出一幅画面','生动地描绘'],
   ex_zh:'我们不妨形象地描绘一下：白噪音听上去像下雨的声音。',ex_py:'Wǒmen bùfáng xíngxiàng de miáohuì yíxià: bái zàoyīn tīng shàngqu xiàng xià yǔ de shēngyīn.',ex_vn:'Chúng ta thử miêu tả một cách hình ảnh: tiếng ồn trắng nghe giống tiếng mưa rơi.',
   exList:[
     {zh:'我们不妨形象地描绘一下：白噪音听上去像下雨的声音。',py:'Wǒmen bùfáng xíngxiàng de miáohuì yíxià: bái zàoyīn tīng shàngqu xiàng xià yǔ de shēngyīn.',vn:'Chúng ta thử miêu tả một cách hình ảnh: tiếng ồn trắng nghe giống tiếng mưa rơi.'},
     {zh:'这篇文章生动地描绘了江南农村的风景。',py:'Zhè piān wénzhāng shēngdòng de miáohuìle Jiāngnán nóngcūn de fēngjǐng.',vn:'Bài văn này miêu tả sinh động phong cảnh nông thôn Giang Nam.'},
     {zh:'班会上，每个同学都描绘了自己十年后的样子。',py:'Bānhuì shang, měi ge tóngxué dōu miáohuìle zìjǐ shí nián hòu de yàngzi.',vn:'Trong buổi sinh hoạt lớp, mỗi bạn đều miêu tả hình ảnh của mình mười năm sau.'}
   ],
   colloFull:[
     {zh:'形象地描绘',py:'xíngxiàng de miáohuì',vn:'miêu tả một cách hình ảnh'},
     {zh:'描绘未来',py:'miáohuì wèilái',vn:'vẽ ra tương lai'},
     {zh:'描绘出一幅画面',py:'miáohuì chū yì fú huàmiàn',vn:'vẽ nên một bức tranh'},
     {zh:'生动地描绘',py:'shēngdòng de miáohuì',vn:'miêu tả sinh động'},
     {zh:'用文字描绘',py:'yòng wénzì miáohuì',vn:'miêu tả bằng chữ'}
   ],
   patterns:[
     {s:'……地描绘 + N',m:'Miêu tả … một cách … (trạng ngữ + 地)'},
     {s:'描绘出 + 画面 / 蓝图',m:'Vẽ nên bức tranh / viễn cảnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tâm trạng tôi lúc đó, ngôn ngữ nào cũng không miêu tả được.',answer:'当时我的心情，什么语言都描绘不出来。',answerPy:'Dāngshí wǒ de xīnqíng, shénme yǔyán dōu miáohuì bu chūlái.',
      note:'Đại từ nghi vấn phiếm chỉ 什么……都……; bổ ngữ khả năng V不出来.',pair:'什么……都…… (phiếm chỉ)'},
     {promptLang:'vi',prompt:'Ông ấy miêu tả sinh động đến thế, chúng tôi cứ như tận mắt thấy cảnh đó.',answer:'他描绘得那么生动，我们好像亲眼看到了那个场面。',answerPy:'Tā miáohuì de nàme shēngdòng, wǒmen hǎoxiàng qīnyǎn kàndàole nàge chǎngmiàn.',
      note:'Bổ ngữ trình độ V得 + 那么 + adj; 好像 = dường như.',pair:'Bổ ngữ trình độ V得……'}
   ]},

  {n:7,zh:'波浪',py:'bōlàng',pos:'Danh từ',vn:'sóng',hv:'ba lãng',em:'🌊',lesson:1,
   explain:['Làn sóng nhấp nhô trên mặt nước (biển, hồ, sông).','Cũng dùng để ví hình dạng nhấp nhô: 波浪形, 波浪般的卷发.'],
   usage:'Hay gặp: 波浪拍打岩石, 波浪起伏, 一阵阵波浪, 波浪声. Gần nghĩa: 浪, 海浪; 波浪 hay dùng trong văn miêu tả.',
   collo:['波浪拍打岩石','波浪起伏','一阵阵波浪','波浪声'],
   ex_zh:'白噪音听上去像波浪拍打岩石的声音。',ex_py:'Bái zàoyīn tīng shàngqu xiàng bōlàng pāidǎ yánshí de shēngyīn.',ex_vn:'Tiếng ồn trắng nghe giống tiếng sóng vỗ vào đá.',
   exList:[
     {zh:'白噪音听上去像波浪拍打岩石的声音。',py:'Bái zàoyīn tīng shàngqu xiàng bōlàng pāidǎ yánshí de shēngyīn.',vn:'Tiếng ồn trắng nghe giống tiếng sóng vỗ vào đá.'},
     {zh:'晚上躺在海边，听着一阵阵波浪声，我很快就睡着了。',py:'Wǎnshang tǎng zài hǎibiān, tīngzhe yí zhènzhèn bōlàng shēng, wǒ hěn kuài jiù shuìzháo le.',vn:'Buổi tối nằm bên bờ biển, nghe từng đợt tiếng sóng, tôi ngủ thiếp đi rất nhanh.'},
     {zh:'今天风很大，湖面上波浪起伏，游船都停了。',py:'Jīntiān fēng hěn dà, húmiàn shang bōlàng qǐfú, yóuchuán dōu tíng le.',vn:'Hôm nay gió to, mặt hồ sóng nhấp nhô, thuyền du lịch đều ngừng chạy.'}
   ],
   colloFull:[
     {zh:'波浪拍打岩石',py:'bōlàng pāidǎ yánshí',vn:'sóng vỗ vào đá'},
     {zh:'波浪起伏',py:'bōlàng qǐfú',vn:'sóng nhấp nhô'},
     {zh:'一阵阵波浪',py:'yí zhènzhèn bōlàng',vn:'từng đợt sóng'},
     {zh:'波浪声',py:'bōlàng shēng',vn:'tiếng sóng'},
     {zh:'波浪形',py:'bōlàng xíng',vn:'hình gợn sóng'}
   ],
   patterns:[
     {s:'波浪 + 拍打 + N',m:'Sóng vỗ vào …'},
     {s:'听着……声，……',m:'Nghe tiếng …, (thì) … (V着 làm bối cảnh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sóng càng lúc càng lớn, thuyền đánh cá buộc phải quay về cảng.',answer:'波浪越来越大，渔船不得不回到港口。',answerPy:'Bōlàng yuè lái yuè dà, yúchuán bùdébù huídào gǎngkǒu.',
      note:'越来越 + adj; 不得不 = buộc phải; 港口 ôn bài 3.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tôi thích nhất là ngồi bên bờ biển nghe tiếng sóng.',answer:'我最喜欢坐在海边听波浪的声音。',answerPy:'Wǒ zuì xǐhuan zuò zài hǎibiān tīng bōlàng de shēngyīn.',
      note:'Bổ ngữ nơi chốn V + 在 + nơi; hai động từ liên tiếp (坐……听……).',pair:'Câu liên động'}
   ]},

  {n:8,zh:'岩石',py:'yánshí',pos:'Danh từ',vn:'nham thạch, đá',hv:'nham thạch',em:'🪨',lesson:1,
   explain:['Đá — khối khoáng vật cứng tạo nên vỏ trái đất (đá núi, đá ven biển).','Là từ văn viết, khoa học; khẩu ngữ hay nói 石头. Lượng từ: 块.'],
   usage:'Hay gặp: 一块岩石, 坚硬的岩石, 拍打岩石, 岩石上. Khác 石头 (đá nói chung, khẩu ngữ).',
   collo:['一块岩石','坚硬的岩石','海边的岩石','岩石上'],
   ex_zh:'白噪音或者像波浪拍打岩石的声音。',ex_py:'Bái zàoyīn huòzhě xiàng bōlàng pāidǎ yánshí de shēngyīn.',ex_vn:'Tiếng ồn trắng hoặc giống tiếng sóng vỗ vào đá.',
   exList:[
     {zh:'白噪音或者像波浪拍打岩石的声音。',py:'Bái zàoyīn huòzhě xiàng bōlàng pāidǎ yánshí de shēngyīn.',vn:'Tiếng ồn trắng hoặc giống tiếng sóng vỗ vào đá.'},
     {zh:'一只小鸟站在岩石上，好奇地打量着我们。',py:'Yì zhī xiǎo niǎo zhàn zài yánshí shang, hàoqí de dǎliangzhe wǒmen.',vn:'Một con chim nhỏ đứng trên tảng đá, tò mò quan sát chúng tôi.'},
     {zh:'海水日日夜夜拍打着岩石，岩石的表面变得十分光滑。',py:'Hǎishuǐ rìrì-yèyè pāidǎzhe yánshí, yánshí de biǎomiàn biàn de shífēn guānghuá.',vn:'Nước biển ngày đêm vỗ vào đá, bề mặt đá trở nên vô cùng nhẵn.'}
   ],
   colloFull:[
     {zh:'一块岩石',py:'yí kuài yánshí',vn:'một tảng đá'},
     {zh:'坚硬的岩石',py:'jiānyìng de yánshí',vn:'đá rắn chắc'},
     {zh:'海边的岩石',py:'hǎibiān de yánshí',vn:'đá ven biển'},
     {zh:'岩石上',py:'yánshí shang',vn:'trên tảng đá'},
     {zh:'拍打岩石',py:'pāidǎ yánshí',vn:'vỗ vào đá'}
   ],
   patterns:[
     {s:'站 / 坐 + 在 + 岩石上',m:'Đứng / ngồi trên tảng đá'},
     {s:'……像岩石一样坚定 / 坚硬',m:'Vững / cứng như đá (so sánh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đá ở đây rất trơn, mọi người nhất định phải cẩn thận.',answer:'这里的岩石很滑，大家千万要小心。',answerPy:'Zhèlǐ de yánshí hěn huá, dàjiā qiānwàn yào xiǎoxīn.',
      note:'千万 + 要 / 别: nhất định (lời dặn dò).',pair:'千万 (dặn dò)'},
     {promptLang:'vi',prompt:'Ý chí của anh ấy vững như đá, không gì lay chuyển được.',answer:'他的意志像岩石一样坚定，什么也动摇不了。',answerPy:'Tā de yìzhì xiàng yánshí yíyàng jiāndìng, shénme yě dòngyáo bù liǎo.',
      note:'像……一样 + adj (so sánh); 意志 ôn bài 7.',pair:'像……一样'}
   ]},

  {n:9,zh:'抚摸',py:'fǔmō',pos:'Động từ',vn:'vuốt ve, xoa, vỗ về',hv:'phủ mô',em:'🤲',lesson:1,
   explain:['Dùng tay nhẹ nhàng xoa, vuốt qua lại (tóc, đầu, lưng, con vật…).','Văn viết cũng dùng để nhân hoá: 微风抚摸树叶 (làn gió nhẹ vuốt ve lá cây).'],
   usage:'Hay gặp: 抚摸着……的头, 轻轻地抚摸, 微风抚摸……. Sắc thái dịu dàng, âu yếm hơn 摸 (sờ).',
   collo:['轻轻地抚摸','抚摸孩子的头','微风抚摸树叶','抚摸小猫'],
   ex_zh:'白噪音或者像微风抚摸树叶时发出的沙沙声。',ex_py:'Bái zàoyīn huòzhě xiàng wēifēng fǔmō shùyè shí fāchū de shāshā shēng.',ex_vn:'Tiếng ồn trắng hoặc giống tiếng xào xạc phát ra khi làn gió nhẹ vuốt ve lá cây.',
   exList:[
     {zh:'白噪音或者像微风抚摸树叶时发出的沙沙声。',py:'Bái zàoyīn huòzhě xiàng wēifēng fǔmō shùyè shí fāchū de shāshā shēng.',vn:'Tiếng ồn trắng hoặc giống tiếng xào xạc phát ra khi làn gió nhẹ vuốt ve lá cây.'},
     {zh:'奶奶轻轻地抚摸着我的头，慈祥地笑了。',py:'Nǎinai qīngqīng de fǔmōzhe wǒ de tóu, cíxiáng de xiào le.',vn:'Bà nhẹ nhàng xoa đầu tôi, mỉm cười hiền từ.'},
     {zh:'小猫被主人抚摸得舒服极了，眯着眼睛睡着了。',py:'Xiǎo māo bèi zhǔrén fǔmō de shūfu jí le, mīzhe yǎnjing shuìzháo le.',vn:'Chú mèo được chủ vuốt ve dễ chịu vô cùng, lim dim mắt ngủ mất.'}
   ],
   colloFull:[
     {zh:'轻轻地抚摸',py:'qīngqīng de fǔmō',vn:'vuốt ve nhẹ nhàng'},
     {zh:'抚摸孩子的头',py:'fǔmō háizi de tóu',vn:'xoa đầu con'},
     {zh:'微风抚摸树叶',py:'wēifēng fǔmō shùyè',vn:'gió nhẹ vuốt ve lá cây'},
     {zh:'抚摸小猫',py:'fǔmō xiǎo māo',vn:'vuốt ve con mèo'},
     {zh:'温柔地抚摸',py:'wēnróu de fǔmō',vn:'vuốt ve dịu dàng'}
   ],
   patterns:[
     {s:'轻轻地 / 温柔地 + 抚摸着 + N',m:'Nhẹ nhàng / dịu dàng vuốt ve …'},
     {s:'微风 / 阳光 + 抚摸着 + N',m:'Nhân hoá: gió / nắng vuốt ve …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ vừa xoa lưng tôi vừa dịu dàng an ủi tôi.',answer:'妈妈一边抚摸着我的背，一边温柔地安慰我。',answerPy:'Māma yìbiān fǔmōzhe wǒ de bèi, yìbiān wēnróu de ānwèi wǒ.',
      note:'一边……一边……; V着 chỉ trạng thái kéo dài.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Gió xuân vuốt ve mặt tôi, dễ chịu hết chỗ nói.',answer:'春风抚摸着我的脸，别提多舒服了。',answerPy:'Chūnfēng fǔmōzhe wǒ de liǎn, biétí duō shūfu le.',
      note:'别提多……了 (bài 1 HSK 6) = … hết chỗ nói.',pair:'别提多……了'}
   ]},

  {n:10,zh:'务必',py:'wùbì',pos:'Phó từ',vn:'nhất thiết phải, nhất định phải',hv:'vụ tất',em:'❗',lesson:1,
   explain:['Biểu thị thái độ kiên quyết: nhất định phải, bắt buộc phải làm.','Tu sức động từ / cụm động từ; thường đi với 要: 务必要……; hay dùng trong lời dặn, thông báo.'],
   usage:'Hay gặp: 务必要……, 请务必……, 务必注意, 务必准时. Mạnh và trang trọng hơn 一定要.',
   collo:['务必要提高警惕','请务必准时','务必注意','务必参加'],
   ex_zh:'鸟叫停止，意味着有了险情，务必要提高警惕了。',ex_py:'Niǎo jiào tíngzhǐ, yìwèizhe yǒule xiǎnqíng, wùbì yào tígāo jǐngtì le.',ex_vn:'Chim ngừng hót có nghĩa là đã có nguy hiểm, nhất thiết phải nâng cao cảnh giác.',
   exList:[
     {zh:'鸟叫停止，意味着有了险情，务必要提高警惕了。',py:'Niǎo jiào tíngzhǐ, yìwèizhe yǒule xiǎnqíng, wùbì yào tígāo jǐngtì le.',vn:'Chim ngừng hót có nghĩa là đã có nguy hiểm, nhất thiết phải nâng cao cảnh giác.'},
     {zh:'明天的会非常重要，大家务必要参加。',py:'Míngtiān de huì fēicháng zhòngyào, dàjiā wùbì yào cānjiā.',vn:'Cuộc họp ngày mai rất quan trọng, mọi người nhất thiết phải tham gia.'},
     {zh:'考试时请务必带好身份证和准考证。',py:'Kǎoshì shí qǐng wùbì dàihǎo shēnfènzhèng hé zhǔnkǎozhèng.',vn:'Khi đi thi xin nhất định mang theo căn cước và thẻ dự thi.'}
   ],
   colloFull:[
     {zh:'务必要提高警惕',py:'wùbì yào tígāo jǐngtì',vn:'nhất định phải nâng cao cảnh giác'},
     {zh:'请务必准时',py:'qǐng wùbì zhǔnshí',vn:'xin nhất định đúng giờ'},
     {zh:'务必注意',py:'wùbì zhùyì',vn:'nhất thiết phải chú ý'},
     {zh:'务必参加',py:'wùbì cānjiā',vn:'nhất thiết phải tham gia'},
     {zh:'务必小心',py:'wùbì xiǎoxīn',vn:'nhất định phải cẩn thận'}
   ],
   patterns:[
     {s:'务必(要) + V',m:'Nhất thiết phải làm …'},
     {s:'请务必 + V',m:'Xin nhất định … (lời dặn lịch sự, trang trọng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi phát hiện có nguy hiểm, nhất thiết phải lập tức báo cho giáo viên.',answer:'一旦发现危险，务必马上告诉老师。',answerPy:'Yídàn fāxiàn wēixiǎn, wùbì mǎshàng gàosu lǎoshī.',
      note:'一旦……: một khi …; 务必 + V.',pair:'一旦……'},
     {promptLang:'vi',prompt:'Xin chuyển lời anh ấy, ngày mai nhất định phải dự họp.',answer:'请转告他，明天务必出席会议。',answerPy:'Qǐng zhuǎngào tā, míngtiān wùbì chūxí huìyì.',
      note:'练一练 (2) của sách; câu kiêm ngữ 请 + người + V.',pair:'请 (câu kiêm ngữ)'}
   ]},

  {n:11,zh:'警惕',py:'jǐngtì',pos:'Động từ',vn:'cảnh giác, đề phòng',hv:'cảnh dịch',em:'👀',lesson:1,
   explain:['Chú ý đề phòng những nguy hiểm, điều bất lợi có thể xảy ra.','Vừa là động từ (警惕危险, 要警惕) vừa dùng như danh từ trong cụm 提高警惕, 失去警惕.'],
   usage:'Hay gặp: 提高警惕, 保持警惕, 失去警惕, 警惕 + N (警惕网络诈骗). Văn viết, trang trọng hơn 小心.',
   collo:['提高警惕','保持警惕','失去警惕','警惕网络诈骗'],
   ex_zh:'当嘈杂声减弱时，提示大家要警惕，然后闭嘴、观察。',ex_py:'Dāng cáozá shēng jiǎnruò shí, tíshì dàjiā yào jǐngtì, ránhòu bì zuǐ, guānchá.',ex_vn:'Khi tiếng ồn ào yếu đi, nó nhắc mọi người phải cảnh giác, rồi im lặng, quan sát.',
   exList:[
     {zh:'当嘈杂声减弱时，提示大家要警惕，然后闭嘴、观察。',py:'Dāng cáozá shēng jiǎnruò shí, tíshì dàjiā yào jǐngtì, ránhòu bì zuǐ, guānchá.',vn:'Khi tiếng ồn ào yếu đi, nó nhắc mọi người phải cảnh giác, rồi im lặng, quan sát.'},
     {zh:'陌生人打电话让你转账，你一定要提高警惕。',py:'Mòshēngrén dǎ diànhuà ràng nǐ zhuǎnzhàng, nǐ yídìng yào tígāo jǐngtì.',vn:'Người lạ gọi điện bảo bạn chuyển khoản, bạn nhất định phải nâng cao cảnh giác.'},
     {zh:'成绩好了也不能骄傲，要时刻警惕自己退步。',py:'Chéngjì hǎo le yě bù néng jiāo\'ào, yào shíkè jǐngtì zìjǐ tuìbù.',vn:'Thành tích tốt rồi cũng không được kiêu ngạo, phải luôn đề phòng bản thân bị tụt lùi.'}
   ],
   colloFull:[
     {zh:'提高警惕',py:'tígāo jǐngtì',vn:'nâng cao cảnh giác'},
     {zh:'保持警惕',py:'bǎochí jǐngtì',vn:'giữ cảnh giác'},
     {zh:'失去警惕',py:'shīqù jǐngtì',vn:'mất cảnh giác'},
     {zh:'警惕网络诈骗',py:'jǐngtì wǎngluò zhàpiàn',vn:'cảnh giác lừa đảo qua mạng'},
     {zh:'时刻警惕',py:'shíkè jǐngtì',vn:'luôn luôn cảnh giác'}
   ],
   patterns:[
     {s:'提高 / 保持 + 警惕',m:'Nâng cao / giữ cảnh giác'},
     {s:'警惕 + N / mệnh đề',m:'Cảnh giác với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng là lúc thuận lợi, càng phải giữ cảnh giác.',answer:'越是顺利的时候，越要保持警惕。',answerPy:'Yuè shì shùnlì de shíhou, yuè yào bǎochí jǐngtì.',
      note:'越……越……: càng … càng ….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Vì mất cảnh giác, anh ấy bị kẻ lừa đảo lừa mất rất nhiều tiền.',answer:'由于失去了警惕，他被骗子骗走了很多钱。',answerPy:'Yóuyú shīqùle jǐngtì, tā bèi piànzi piànzǒule hěn duō qián.',
      note:'由于 (nguyên nhân); câu bị động 被 + tác nhân + V + bổ ngữ.',pair:'Câu bị động 被'}
   ]},

  {n:12,zh:'解除',py:'jiěchú',pos:'Động từ',vn:'huỷ bỏ, xoá bỏ, giải trừ',hv:'giải trừ',em:'🔓',lesson:1,
   explain:['Bỏ đi, gỡ bỏ, làm cho không còn nữa (cảnh báo, hợp đồng, lệnh cấm, nỗi lo…).','Văn viết, trang trọng; tân ngữ thường là danh từ trừu tượng: 警报, 合同, 顾虑, 痛苦, 职务.'],
   usage:'Hay gặp: 警报解除, 解除合同, 解除顾虑, 解除痛苦, 解除危险. Khác 消除 (loại bỏ dần: 消除误会) — 解除 thiên về gỡ bỏ một trạng thái đang có hiệu lực.',
   collo:['警报解除','解除合同','解除顾虑','解除痛苦'],
   ex_zh:'只有当鸟叫重新开始时，警报才会解除。',ex_py:'Zhǐyǒu dāng niǎo jiào chóngxīn kāishǐ shí, jǐngbào cái huì jiěchú.',ex_vn:'Chỉ khi tiếng chim hót bắt đầu lại, báo động mới được giải trừ.',
   exList:[
     {zh:'只有当鸟叫重新开始时，警报才会解除。',py:'Zhǐyǒu dāng niǎo jiào chóngxīn kāishǐ shí, jǐngbào cái huì jiěchú.',vn:'Chỉ khi tiếng chim hót bắt đầu lại, báo động mới được giải trừ.'},
     {zh:'当有人说“好安静啊”时，大家发现没有危险，于是，报警解除。',py:'Dāng yǒu rén shuō "hǎo ānjìng a" shí, dàjiā fāxiàn méiyǒu wēixiǎn, yúshì, bàojǐng jiěchú.',vn:'Khi có người nói "Yên tĩnh quá nhỉ", mọi người phát hiện không có nguy hiểm, thế là báo động được giải trừ.'},
     {zh:'老师耐心的解释解除了我的顾虑。',py:'Lǎoshī nàixīn de jiěshì jiěchúle wǒ de gùlǜ.',vn:'Lời giải thích kiên nhẫn của thầy đã xoá tan băn khoăn của tôi.'}
   ],
   colloFull:[
     {zh:'警报解除',py:'jǐngbào jiěchú',vn:'báo động được giải trừ'},
     {zh:'解除合同',py:'jiěchú hétong',vn:'huỷ hợp đồng'},
     {zh:'解除顾虑',py:'jiěchú gùlǜ',vn:'xoá bỏ băn khoăn'},
     {zh:'解除痛苦',py:'jiěchú tòngkǔ',vn:'giải thoát khỏi đau khổ'},
     {zh:'解除危险',py:'jiěchú wēixiǎn',vn:'loại bỏ nguy hiểm'}
   ],
   patterns:[
     {s:'解除 + 警报 / 合同 / 顾虑',m:'Giải trừ, huỷ bỏ …'},
     {s:'只有……，……才会解除',m:'Chỉ khi …, … mới được giải trừ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi xác định an toàn rồi, lệnh cấm mới được huỷ bỏ.',answer:'只有确定安全了，禁令才会解除。',answerPy:'Zhǐyǒu quèdìng ānquán le, jìnlìng cái huì jiěchú.',
      note:'只有……才……: chỉ khi … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nếu công ty không trả lương đúng hạn, nhân viên có quyền huỷ hợp đồng.',answer:'如果公司不按时发工资，员工有权解除合同。',answerPy:'Rúguǒ gōngsī bú ànshí fā gōngzī, yuángōng yǒu quán jiěchú hétong.',
      note:'如果……; 有权 + V = có quyền làm gì.',pair:'如果…… (giả thiết)'}
   ]},

  {n:13,zh:'不得已',py:'bùdéyǐ',pos:'Tính từ',vn:'bất đắc dĩ, buộc phải, không thể không như vậy',hv:'bất đắc dĩ',em:'😣',lesson:1,
   explain:['Không có cách nào khác, buộc phải làm như vậy (dù không muốn).','Là TÍNH TỪ: làm định ngữ (不得已的办法), vị ngữ (他也是不得已), đứng một mình thành phân câu, hoặc đứng sau 出于 / 由于 / 因为.'],
   usage:'Hay gặp: 不得已的办法, 实在是不得已, 出于不得已, 不得已而 + V, 迫不得已. Phân biệt với 不得不 (phó từ, chỉ đứng trước động từ) — xem phần phân biệt.',
   collo:['不得已的办法','实在是不得已','出于不得已','不得已而采取'],
   ex_zh:'其实不论是鸟叫，还是虫叫，都是寻求异性时，不得已而采取的危险举动。',ex_py:'Qíshí búlùn shì niǎo jiào, háishi chóng jiào, dōu shì xúnqiú yìxìng shí, bùdéyǐ ér cǎiqǔ de wēixiǎn jǔdòng.',ex_vn:'Thật ra dù là chim kêu hay côn trùng kêu, đều là hành động nguy hiểm bất đắc dĩ phải làm khi tìm bạn khác giới.',
   exList:[
     {zh:'其实不论是鸟叫，还是虫叫，都是寻求异性时，不得已而采取的危险举动。',py:'Qíshí búlùn shì niǎo jiào, háishi chóng jiào, dōu shì xúnqiú yìxìng shí, bùdéyǐ ér cǎiqǔ de wēixiǎn jǔdòng.',vn:'Thật ra dù là chim kêu hay côn trùng kêu, đều là hành động nguy hiểm bất đắc dĩ phải làm khi tìm bạn khác giới.'},
     {zh:'这也是不得已的办法，你试试吧。',py:'Zhè yě shì bùdéyǐ de bànfǎ, nǐ shìshi ba.',vn:'Đây cũng là cách bất đắc dĩ thôi, anh cứ thử xem.'},
     {zh:'屋里坐不下，不得已，我们只好站在外边。',py:'Wū li zuò bu xià, bùdéyǐ, wǒmen zhǐhǎo zhàn zài wàibian.',vn:'Trong nhà không đủ chỗ ngồi, bất đắc dĩ, chúng tôi đành đứng ở ngoài.'}
   ],
   colloFull:[
     {zh:'不得已的办法',py:'bùdéyǐ de bànfǎ',vn:'cách bất đắc dĩ'},
     {zh:'实在是不得已',py:'shízài shì bùdéyǐ',vn:'thật sự là bất đắc dĩ'},
     {zh:'出于不得已',py:'chūyú bùdéyǐ',vn:'vì bất đắc dĩ'},
     {zh:'不得已而采取',py:'bùdéyǐ ér cǎiqǔ',vn:'bất đắc dĩ mà áp dụng'},
     {zh:'迫不得已',py:'pòbùdéyǐ',vn:'vạn bất đắc dĩ'}
   ],
   patterns:[
     {s:'(主语 +) 是 + 不得已',m:'(Ai đó) làm vậy là bất đắc dĩ'},
     {s:'不得已而 + V',m:'Bất đắc dĩ mà phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy nửa đêm lên đường cũng là bất đắc dĩ thôi, cậu đừng trách anh ấy nữa.',answer:'他半夜动身也是不得已，你就别怪他了。',answerPy:'Tā bànyè dòngshēn yě shì bùdéyǐ, nǐ jiù bié guài tā le.',
      note:'主语 + 是 + 不得已 (không thay bằng 不得不 được); 别……了.',pair:'别……了'},
     {promptLang:'vi',prompt:'Vì thật sự không còn cách nào khác, họ bất đắc dĩ phải đi vay tiền người khác.',answer:'因为实在没有别的办法，他们不得已出去向别人借钱。',answerPy:'Yīnwèi shízài méiyǒu bié de bànfǎ, tāmen bùdéyǐ chūqu xiàng biérén jiè qián.',
      note:'练习2 ③ của sách; 向 + người + 借钱.',pair:'向 + người + V'}
   ]},

  {n:14,zh:'暴露',py:'bàolù',pos:'Động từ',vn:'bộc lộ, để lộ, phơi bày',hv:'bạo lộ',em:'🔦',lesson:1,
   explain:['Để lộ ra cái vốn bị che giấu (vị trí, bí mật, vấn đề, khuyết điểm…).','Hay mang nghĩa tiêu cực; 暴露在…… = phơi ra, tiếp xúc trực tiếp với (阳光, 空气, 危险).'],
   usage:'Hay gặp: 暴露目标, 暴露自己, 暴露问题, 暴露缺点, 暴露在阳光下. Chú ý đọc bàolù.',
   collo:['暴露了自己','暴露目标','暴露问题','暴露在阳光下'],
   ex_zh:'因为叫声暴露了自己，很容易惹祸。',ex_py:'Yīnwèi jiàoshēng bàolùle zìjǐ, hěn róngyì rě huò.',ex_vn:'Vì tiếng kêu làm lộ chính mình, rất dễ rước hoạ.',
   exList:[
     {zh:'因为叫声暴露了自己，很容易惹祸。',py:'Yīnwèi jiàoshēng bàolùle zìjǐ, hěn róngyì rě huò.',vn:'Vì tiếng kêu làm lộ chính mình, rất dễ rước hoạ.'},
     {zh:'这次考试暴露了我在语法方面的很多问题。',py:'Zhè cì kǎoshì bàolùle wǒ zài yǔfǎ fāngmiàn de hěn duō wèntí.',vn:'Kỳ thi lần này đã bộc lộ rất nhiều vấn đề của tôi về ngữ pháp.'},
     {zh:'皮肤长时间暴露在阳光下，很容易被晒伤。',py:'Pífū cháng shíjiān bàolù zài yángguāng xià, hěn róngyì bèi shàishāng.',vn:'Da phơi dưới nắng thời gian dài rất dễ bị cháy nắng.'}
   ],
   colloFull:[
     {zh:'暴露了自己',py:'bàolùle zìjǐ',vn:'để lộ bản thân'},
     {zh:'暴露目标',py:'bàolù mùbiāo',vn:'lộ mục tiêu'},
     {zh:'暴露问题',py:'bàolù wèntí',vn:'bộc lộ vấn đề'},
     {zh:'暴露在阳光下',py:'bàolù zài yángguāng xià',vn:'phơi dưới ánh nắng'},
     {zh:'暴露缺点',py:'bàolù quēdiǎn',vn:'để lộ khuyết điểm'}
   ],
   patterns:[
     {s:'……暴露了 + N (问题 / 缺点 / 自己)',m:'… làm lộ ra …'},
     {s:'暴露在 + nơi / hoàn cảnh + 下',m:'Phơi ra, tiếp xúc trực tiếp với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những thiếu sót trong công việc, bộc lộ càng sớm càng tốt.',answer:'工作中的不足，暴露得越早越好。',answerPy:'Gōngzuò zhōng de bùzú, bàolù de yuè zǎo yuè hǎo.',
      note:'越……越……; bổ ngữ trình độ V得.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Anh ta nói nhiều quá, suýt nữa để lộ bí mật.',answer:'他话太多，差点儿把秘密暴露了。',answerPy:'Tā huà tài duō, chàdiǎnr bǎ mìmì bàolù le.',
      note:'差点儿 = suýt nữa; câu 把 (把 + tân ngữ + V + 了).',pair:'Câu chữ 把'}
   ]},

  {n:15,zh:'惹祸',py:'rě huò',pos:'Động từ (li hợp)',vn:'gây hoạ, rước hoạ',hv:'nhạ hoạ',em:'💥',lesson:1,
   explain:['Gây ra tai hoạ, rắc rối cho bản thân hoặc người khác.','Là động từ li hợp (惹 + 祸): 惹了祸, 惹了大祸, 惹出祸来; không mang tân ngữ phía sau.'],
   usage:'Hay gặp: 很容易惹祸, 惹了大祸, 到处惹祸, 惹祸上身. Gần nghĩa: 闯祸 (khẩu ngữ, hay nói trẻ con nghịch ngợm gây chuyện).',
   collo:['很容易惹祸','惹了大祸','到处惹祸','惹祸上身'],
   ex_zh:'叫声暴露了自己，很容易惹祸。',ex_py:'Jiàoshēng bàolùle zìjǐ, hěn róngyì rě huò.',ex_vn:'Tiếng kêu làm lộ chính mình, rất dễ rước hoạ.',
   exList:[
     {zh:'叫声暴露了自己，很容易惹祸。',py:'Jiàoshēng bàolùle zìjǐ, hěn róngyì rě huò.',vn:'Tiếng kêu làm lộ chính mình, rất dễ rước hoạ.'},
     {zh:'弟弟又在学校惹祸了，妈妈被老师叫到了学校。',py:'Dìdi yòu zài xuéxiào rě huò le, māma bèi lǎoshī jiàodàole xuéxiào.',vn:'Em trai lại gây chuyện ở trường, mẹ bị cô giáo mời lên trường.'},
     {zh:'上网时说话要小心，一句话说不好也可能惹祸。',py:'Shàngwǎng shí shuōhuà yào xiǎoxīn, yí jù huà shuō bu hǎo yě kěnéng rě huò.',vn:'Lên mạng nói năng phải cẩn thận, một câu nói không khéo cũng có thể rước hoạ.'}
   ],
   colloFull:[
     {zh:'很容易惹祸',py:'hěn róngyì rě huò',vn:'rất dễ gây hoạ'},
     {zh:'惹了大祸',py:'rěle dà huò',vn:'gây hoạ lớn'},
     {zh:'到处惹祸',py:'dàochù rě huò',vn:'đi đâu cũng gây chuyện'},
     {zh:'惹祸上身',py:'rě huò shàng shēn',vn:'rước hoạ vào thân'},
     {zh:'惹出祸来',py:'rě chū huò lái',vn:'gây ra hoạ'}
   ],
   patterns:[
     {s:'惹了 + (大)祸',m:'Gây ra (đại) hoạ — động từ li hợp tách ra'},
     {s:'……很容易惹祸',m:'… rất dễ gây hoạ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu mà còn nghịch như vậy, sớm muộn sẽ gây ra đại hoạ.',answer:'你要是再这么调皮，迟早会惹出大祸来。',answerPy:'Nǐ yàoshi zài zhème tiáopí, chízǎo huì rě chū dà huò lái.',
      note:'要是……; li hợp tách: 惹出大祸来 (bổ ngữ xu hướng kép chèn tân ngữ).',pair:'Bổ ngữ xu hướng kép V出……来'},
     {promptLang:'vi',prompt:'Nó sợ gây hoạ nên chuyện gì cũng không dám làm.',answer:'他怕惹祸，所以什么事都不敢做。',answerPy:'Tā pà rě huò, suǒyǐ shénme shì dōu bù gǎn zuò.',
      note:'什么……都…… phiếm chỉ; 怕 + V.',pair:'什么……都……'}
   ]},

  {n:16,zh:'雌雄',py:'cíxióng',pos:'Danh từ',vn:'đực cái; (nghĩa bóng) thắng thua',hv:'thư hùng',em:'🐦',lesson:1,
   explain:['Giống cái (雌) và giống đực (雄) của động vật, thực vật.','Nghĩa bóng: thắng bại, cao thấp — 一决雌雄 = quyết một trận thư hùng.'],
   usage:'Hay gặp: 雌雄两性, 雌雄同体, 分辨雌雄, 一决雌雄. Chú ý thứ tự: tiếng Trung nói 雌雄 (cái trước), tiếng Việt nói "đực cái".',
   collo:['雌雄两性','分辨雌雄','雌雄同体','一决雌雄'],
   ex_zh:'倘若不叫，雌雄两性谁也发现不了对方。',ex_py:'Tǎngruò bú jiào, cíxióng liǎng xìng shéi yě fāxiàn bu liǎo duìfāng.',ex_vn:'Nếu không kêu, con đực và con cái chẳng con nào tìm ra được đối phương.',
   exList:[
     {zh:'倘若不叫，雌雄两性谁也发现不了对方。',py:'Tǎngruò bú jiào, cíxióng liǎng xìng shéi yě fāxiàn bu liǎo duìfāng.',vn:'Nếu không kêu, con đực và con cái chẳng con nào tìm ra được đối phương.'},
     {zh:'很多鸟类雌雄的羽毛颜色不一样，雄鸟往往更漂亮。',py:'Hěn duō niǎolèi cíxióng de yǔmáo yánsè bù yíyàng, xióngniǎo wǎngwǎng gèng piàoliang.',vn:'Ở nhiều loài chim, lông con đực và con cái có màu khác nhau, chim trống thường đẹp hơn.'},
     {zh:'两支球队实力相当，决赛上终于要一决雌雄了。',py:'Liǎng zhī qiúduì shílì xiāngdāng, juésài shang zhōngyú yào yì jué cíxióng le.',vn:'Hai đội thực lực ngang nhau, cuối cùng sẽ quyết một trận thư hùng ở trận chung kết.'}
   ],
   colloFull:[
     {zh:'雌雄两性',py:'cíxióng liǎng xìng',vn:'hai giới đực cái'},
     {zh:'分辨雌雄',py:'fēnbiàn cíxióng',vn:'phân biệt đực cái'},
     {zh:'雌雄同体',py:'cíxióng tóng tǐ',vn:'lưỡng tính (đực cái cùng một cơ thể)'},
     {zh:'一决雌雄',py:'yì jué cíxióng',vn:'quyết một trận thư hùng'},
     {zh:'雌雄难辨',py:'cíxióng nán biàn',vn:'khó phân biệt đực cái'}
   ],
   patterns:[
     {s:'雌雄两性 + 谁也……',m:'Cả con đực lẫn con cái đều không …'},
     {s:'(与……)一决雌雄',m:'Quyết một trận thắng thua (với …)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài chim này rất khó phân biệt đực cái, ngay cả chuyên gia cũng thường nhận nhầm.',answer:'这种鸟雌雄很难分辨，连专家也常常认错。',answerPy:'Zhè zhǒng niǎo cíxióng hěn nán fēnbiàn, lián zhuānjiā yě chángcháng rèncuò.',
      note:'连……也……: ngay cả … cũng ….',pair:'连……也……'},
     {promptLang:'vi',prompt:'Hai kỳ thủ hẹn nhau ngày mai quyết một trận thư hùng.',answer:'两位棋手约好明天一决雌雄。',answerPy:'Liǎng wèi qíshǒu yuēhǎo míngtiān yì jué cíxióng.',
      note:'约好 + thời gian + V (bổ ngữ kết quả 好).',pair:'Bổ ngữ kết quả 好'}
   ]},

  {n:17,zh:'祖先',py:'zǔxiān',pos:'Danh từ',vn:'tổ tiên, ông bà',hv:'tổ tiên',em:'🧬',lesson:1,
   explain:['Các thế hệ rất xa trước kia của một dòng họ, một dân tộc.','Cũng chỉ loài sinh vật cổ mà các loài hiện nay tiến hoá từ đó (人类的祖先, 狗的祖先).'],
   usage:'Hay gặp: 我们的祖先, 人类的祖先, 祖先留下的……, 祭拜祖先. Khẩu ngữ gần nghĩa: 老祖宗.',
   collo:['我们的祖先','人类的祖先','祖先留下的','祭拜祖先'],
   ex_zh:'原始社会之前，我们的祖先还没有进化成人类。',ex_py:'Yuánshǐ shèhuì zhīqián, wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi.',ex_vn:'Trước thời xã hội nguyên thuỷ, tổ tiên chúng ta còn chưa tiến hoá thành loài người.',
   exList:[
     {zh:'原始社会之前，我们的祖先还没有进化成人类。',py:'Yuánshǐ shèhuì zhīqián, wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi.',vn:'Trước thời xã hội nguyên thuỷ, tổ tiên chúng ta còn chưa tiến hoá thành loài người.'},
     {zh:'春节时，很多家庭都要祭拜祖先。',py:'Chūnjié shí, hěn duō jiātíng dōu yào jìbài zǔxiān.',vn:'Dịp Tết, nhiều gia đình đều cúng bái tổ tiên.'},
     {zh:'汉字是祖先留下的宝贵财富，我们应该好好珍惜。',py:'Hànzì shì zǔxiān liúxià de bǎoguì cáifù, wǒmen yīnggāi hǎohǎo zhēnxī.',vn:'Chữ Hán là tài sản quý báu tổ tiên để lại, chúng ta nên trân trọng.'}
   ],
   colloFull:[
     {zh:'我们的祖先',py:'wǒmen de zǔxiān',vn:'tổ tiên chúng ta'},
     {zh:'人类的祖先',py:'rénlèi de zǔxiān',vn:'tổ tiên loài người'},
     {zh:'祖先留下的',py:'zǔxiān liúxià de',vn:'do tổ tiên để lại'},
     {zh:'祭拜祖先',py:'jìbài zǔxiān',vn:'cúng bái tổ tiên'},
     {zh:'共同的祖先',py:'gòngtóng de zǔxiān',vn:'tổ tiên chung'}
   ],
   patterns:[
     {s:'祖先 + 遗留 / 留下 + 的 + N',m:'… do tổ tiên để lại'},
     {s:'A 的祖先是 B',m:'Tổ tiên của A là B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói tổ tiên của loài chó là sói.',answer:'据说狗的祖先是狼。',answerPy:'Jùshuō gǒu de zǔxiān shì láng.',
      note:'据说 = nghe nói, theo người ta nói.',pair:'据说'},
     {promptLang:'vi',prompt:'Phong tục này được truyền từ thời tổ tiên cho đến nay.',answer:'这个风俗是从祖先那时候一直传到现在的。',answerPy:'Zhège fēngsú shì cóng zǔxiān nà shíhou yìzhí chuándào xiànzài de.',
      note:'是……的 nhấn mạnh; 从……到…….',pair:'是……的 (nhấn mạnh)'}
   ]},

  {n:18,zh:'遗留',py:'yíliú',pos:'Động từ',vn:'để lại, truyền lại, lưu lại',hv:'di lưu',em:'📜',lesson:1,
   explain:['Để lại, còn lưu lại từ thời trước, từ giai đoạn trước (vật, vấn đề, phong tục, gen…).','Văn viết; hay dùng 遗留下(来)的, 历史遗留问题.'],
   usage:'Hay gặp: 遗留下的……, 遗留问题, 历史遗留, 遗留物品. Khác 留下 (để lại — khẩu ngữ, nghĩa rộng).',
   collo:['祖先遗留下的','遗留问题','历史遗留','遗留物品'],
   ex_zh:'那么，祖先遗留下的DNA怎么送给异性嘛。',ex_py:'Nàme, zǔxiān yíliú xià de DNA zěnme sòng gěi yìxìng ma.',ex_vn:'Như vậy thì DNA mà tổ tiên để lại làm sao trao cho con khác giới được chứ.',
   exList:[
     {zh:'那么，祖先遗留下的DNA怎么送给异性嘛。',py:'Nàme, zǔxiān yíliú xià de DNA zěnme sòng gěi yìxìng ma.',vn:'Như vậy thì DNA mà tổ tiên để lại làm sao trao cho con khác giới được chứ.'},
     {zh:'这是上一任经理遗留下来的问题，处理起来很麻烦。',py:'Zhè shì shàng yí rèn jīnglǐ yíliú xiàlái de wèntí, chǔlǐ qǐlái hěn máfan.',vn:'Đây là vấn đề do giám đốc tiền nhiệm để lại, xử lý rất phiền.'},
     {zh:'请乘客下车时检查好随身物品，不要遗留在车上。',py:'Qǐng chéngkè xià chē shí jiǎnchá hǎo suíshēn wùpǐn, bú yào yíliú zài chē shang.',vn:'Hành khách khi xuống xe xin kiểm tra kỹ đồ mang theo, đừng để quên trên xe.'}
   ],
   colloFull:[
     {zh:'祖先遗留下的',py:'zǔxiān yíliú xià de',vn:'do tổ tiên để lại'},
     {zh:'遗留问题',py:'yíliú wèntí',vn:'vấn đề tồn đọng'},
     {zh:'历史遗留',py:'lìshǐ yíliú',vn:'do lịch sử để lại'},
     {zh:'遗留物品',py:'yíliú wùpǐn',vn:'đồ bỏ quên'},
     {zh:'遗留下来',py:'yíliú xiàlái',vn:'lưu lại'}
   ],
   patterns:[
     {s:'N + 遗留下(来)的 + N',m:'… do ai / thời nào để lại'},
     {s:'遗留在 + nơi',m:'Để lại, bỏ quên ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những vấn đề do lịch sử để lại, không phải giải quyết ngay một lúc là xong.',answer:'历史遗留下来的问题，不是一下子就能解决的。',answerPy:'Lìshǐ yíliú xiàlái de wèntí, bú shì yíxiàzi jiù néng jiějué de.',
      note:'Câu 是……的 phủ định: 不是……的; 一下子 = ngay lập tức.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tục lệ này được lưu truyền từ thời nhà Minh.',answer:'这个习俗是从明朝遗留下来的。',answerPy:'Zhège xísú shì cóng Míngcháo yíliú xiàlái de.',
      note:'从 + thời điểm + V + 下来 (bổ ngữ xu hướng: từ xưa đến nay).',pair:'Bổ ngữ xu hướng 下来'}
   ]},

  {n:19,zh:'嘛',py:'ma',pos:'Trợ từ',vn:'mà, đi mà (biểu thị lý lẽ hiển nhiên)',hv:'ma',em:'💬',lesson:1,
   explain:['Trợ từ ngữ khí cuối câu, biểu thị điều nói ra là hiển nhiên, đương nhiên phải thế (… mà!).','Cũng dùng để khuyên nhủ, nài nỉ nhẹ nhàng (đi mà), hoặc đánh dấu chỗ ngừng giữa câu để nêu đề tài.'],
   usage:'Hay gặp: 本来就是嘛, 你别生气嘛, 有话好好说嘛, 学生嘛，……. Khác 吗 (hỏi có / không): 嘛 không dùng để hỏi.',
   collo:['本来就是嘛','你别生气嘛','有话好好说嘛','学生嘛'],
   ex_zh:'倘若不叫，“婚事”就更谈不上了，那么，祖先遗留下的DNA怎么送给异性嘛。',ex_py:'Tǎngruò bú jiào, "hūnshì" jiù gèng tán bu shàng le, nàme, zǔxiān yíliú xià de DNA zěnme sòng gěi yìxìng ma.',ex_vn:'Nếu không kêu thì "chuyện cưới xin" càng không thể nói tới, vậy thì DNA tổ tiên để lại làm sao trao cho con khác giới được chứ.',
   exList:[
     {zh:'倘若不叫，“婚事”就更谈不上了，那么，祖先遗留下的DNA怎么送给异性嘛。',py:'Tǎngruò bú jiào, "hūnshì" jiù gèng tán bu shàng le, nàme, zǔxiān yíliú xià de DNA zěnme sòng gěi yìxìng ma.',vn:'Nếu không kêu thì "chuyện cưới xin" càng không thể nói tới, vậy thì DNA tổ tiên để lại làm sao trao cho con khác giới được chứ.'},
     {zh:'你别生气嘛，我不是故意的。',py:'Nǐ bié shēngqì ma, wǒ bú shì gùyì de.',vn:'Cậu đừng giận mà, tớ không cố ý đâu.'},
     {zh:'学生嘛，最重要的任务当然是学习。',py:'Xuésheng ma, zuì zhòngyào de rènwu dāngrán shì xuéxí.',vn:'Học sinh mà, nhiệm vụ quan trọng nhất đương nhiên là học tập.'}
   ],
   colloFull:[
     {zh:'本来就是嘛',py:'běnlái jiù shì ma',vn:'vốn dĩ là thế mà'},
     {zh:'你别生气嘛',py:'nǐ bié shēngqì ma',vn:'đừng giận mà'},
     {zh:'有话好好说嘛',py:'yǒu huà hǎohǎo shuō ma',vn:'có gì thì nói tử tế mà'},
     {zh:'学生嘛',py:'xuésheng ma',vn:'học sinh mà (nêu đề tài)'},
     {zh:'快点儿嘛',py:'kuài diǎnr ma',vn:'nhanh lên đi mà'}
   ],
   patterns:[
     {s:'…… + 嘛。',m:'Cuối câu: … mà! (hiển nhiên, đương nhiên)'},
     {s:'N + 嘛，……',m:'Giữa câu: nêu đề tài — … thì mà, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con là học sinh, đương nhiên phải lấy việc học làm chính mà.',answer:'你是学生，当然应该以学习为主嘛。',answerPy:'Nǐ shì xuésheng, dāngrán yīnggāi yǐ xuéxí wéi zhǔ ma.',
      note:'以……为主 = lấy … làm chính; 嘛 cuối câu nhấn lý lẽ hiển nhiên.',pair:'以……为……'},
     {promptLang:'vi',prompt:'Đã là bạn bè rồi thì giúp đỡ nhau là chuyện nên làm mà.',answer:'既然是朋友，互相帮助是应该的嘛。',answerPy:'Jìrán shì péngyou, hùxiāng bāngzhù shì yīnggāi de ma.',
      note:'既然……: đã … thì …; 是……的 + 嘛.',pair:'既然……就……'}
   ]},

  {n:20,zh:'延续',py:'yánxù',pos:'Động từ',vn:'tiếp tục, kéo dài, nối tiếp',hv:'diên tục',em:'🔗',lesson:1,
   explain:['Tiếp tục duy trì theo tình trạng cũ, kéo dài không đứt đoạn.','Tân ngữ: 后代, 生命, 传统, 文化, 时间…; 延续下去 = tiếp tục duy trì.'],
   usage:'Hay gặp: 延续后代, 延续生命, 延续传统, 延续下去, 延续了……年. Khác 继续 (tiếp tục hành động đang dở) — 延续 nhấn "kéo dài, truyền nối".',
   collo:['延续后代','延续传统','延续下去','延续了几百年'],
   ex_zh:'既要延续后代，又要保护自己，那就只有用最大的声音，拼命呼唤。',ex_py:'Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ, nà jiù zhǐyǒu yòng zuì dà de shēngyīn, pīnmìng hūhuàn.',ex_vn:'Vừa phải duy trì nòi giống, lại vừa phải bảo vệ bản thân, thì chỉ còn cách dùng tiếng to nhất mà ra sức gọi.',
   exList:[
     {zh:'既要延续后代，又要保护自己，那就只有用最大的声音，拼命呼唤。',py:'Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ, nà jiù zhǐyǒu yòng zuì dà de shēngyīn, pīnmìng hūhuàn.',vn:'Vừa phải duy trì nòi giống, lại vừa phải bảo vệ bản thân, thì chỉ còn cách dùng tiếng to nhất mà ra sức gọi.'},
     {zh:'这个传统已经延续了几百年。',py:'Zhège chuántǒng yǐjīng yánxùle jǐ bǎi nián.',vn:'Truyền thống này đã kéo dài mấy trăm năm.'},
     {zh:'炎热的天气还将延续一个星期。',py:'Yánrè de tiānqì hái jiāng yánxù yí ge xīngqī.',vn:'Thời tiết nóng bức sẽ còn kéo dài một tuần nữa.'}
   ],
   colloFull:[
     {zh:'延续后代',py:'yánxù hòudài',vn:'duy trì nòi giống'},
     {zh:'延续传统',py:'yánxù chuántǒng',vn:'nối tiếp truyền thống'},
     {zh:'延续下去',py:'yánxù xiàqu',vn:'tiếp tục kéo dài'},
     {zh:'延续了几百年',py:'yánxùle jǐ bǎi nián',vn:'kéo dài mấy trăm năm'},
     {zh:'延续生命',py:'yánxù shēngmìng',vn:'kéo dài sự sống'}
   ],
   patterns:[
     {s:'延续 + 后代 / 传统 / 生命',m:'Nối tiếp, duy trì …'},
     {s:'……还将延续 + thời gian',m:'… sẽ còn kéo dài (bao lâu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không chỉ phải giữ gìn truyền thống mà còn phải làm cho nó được tiếp nối.',answer:'我们不仅要保护传统，还要让它延续下去。',answerPy:'Wǒmen bùjǐn yào bǎohù chuántǒng, hái yào ràng tā yánxù xiàqu.',
      note:'不仅……还……; 延续下去 (bổ ngữ xu hướng 下去: tiếp tục).',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Tình hữu nghị giữa hai trường đã kéo dài hơn hai mươi năm.',answer:'两所学校之间的友谊已经延续了二十多年。',answerPy:'Liǎng suǒ xuéxiào zhījiān de yǒuyì yǐjīng yánxùle èrshí duō nián.',
      note:'V + 了 + thời lượng; 多 chỉ số lẻ.',pair:'Bổ ngữ thời lượng'}
   ]},

  {n:21,zh:'后代',py:'hòudài',pos:'Danh từ',vn:'đời sau, thế hệ sau, con cháu',hv:'hậu đại',em:'👶',lesson:1,
   explain:['Con cháu, thế hệ sinh ra sau (của người hoặc động vật).','Cũng chỉ thời đại về sau, người đời sau: 为后代造福.'],
   usage:'Hay gặp: 延续后代, 子孙后代, 为后代着想, 留给后代. Gần nghĩa: 子孙, 下一代.',
   collo:['延续后代','子孙后代','为后代着想','留给后代'],
   ex_zh:'既要延续后代，又要保护自己。',ex_py:'Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ.',ex_vn:'Vừa phải duy trì nòi giống, lại phải bảo vệ bản thân.',
   exList:[
     {zh:'既要延续后代，又要保护自己。',py:'Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ.',vn:'Vừa phải duy trì nòi giống, lại phải bảo vệ bản thân.'},
     {zh:'保护环境，就是为子孙后代着想。',py:'Bǎohù huánjìng, jiù shì wèi zǐsūn hòudài zhuóxiǎng.',vn:'Bảo vệ môi trường chính là nghĩ cho con cháu đời sau.'},
     {zh:'我们应该给后代留下一个更美好的世界。',py:'Wǒmen yīnggāi gěi hòudài liúxià yí ge gèng měihǎo de shìjiè.',vn:'Chúng ta nên để lại cho thế hệ sau một thế giới tốt đẹp hơn.'}
   ],
   colloFull:[
     {zh:'延续后代',py:'yánxù hòudài',vn:'duy trì nòi giống'},
     {zh:'子孙后代',py:'zǐsūn hòudài',vn:'con cháu đời sau'},
     {zh:'为后代着想',py:'wèi hòudài zhuóxiǎng',vn:'nghĩ cho đời sau'},
     {zh:'留给后代',py:'liú gěi hòudài',vn:'để lại cho đời sau'},
     {zh:'名人的后代',py:'míngrén de hòudài',vn:'hậu duệ của người nổi tiếng'}
   ],
   patterns:[
     {s:'为(子孙)后代 + 着想 / 造福',m:'Nghĩ cho / mang phúc cho đời sau'},
     {s:'把……留给后代',m:'Để … lại cho đời sau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bây giờ không bảo vệ tài nguyên nước, con cháu đời sau sẽ không có nước sạch mà dùng.',answer:'如果现在不保护水资源，子孙后代就没有干净的水用了。',answerPy:'Rúguǒ xiànzài bù bǎohù shuǐ zīyuán, zǐsūn hòudài jiù méiyǒu gānjìng de shuǐ yòng le.',
      note:'如果……就……; 没有 + N + V (liên động).',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Ông cụ đem toàn bộ sách của mình để lại cho con cháu.',answer:'老人把自己所有的书都留给了后代。',answerPy:'Lǎorén bǎ zìjǐ suǒyǒu de shū dōu liú gěile hòudài.',
      note:'Câu 把: 把 + tân ngữ + V + 给 + người.',pair:'Câu chữ 把'}
   ]},

  {n:22,zh:'呼唤',py:'hūhuàn',pos:'Động từ',vn:'kêu gọi, gọi to',hv:'hô hoán',em:'📢',lesson:1,
   explain:['Gọi to, kêu to (gọi tên ai, gọi bạn đời, gọi nhau).','Nghĩa bóng: kêu gọi, mời gọi (时代的呼唤) — có thể dùng như danh từ.'],
   usage:'Hay gặp: 拼命呼唤, 呼唤……的名字, 大声呼唤, 时代的呼唤. Văn viết; khẩu ngữ: 喊, 叫.',
   collo:['拼命呼唤','呼唤他的名字','大声呼唤','时代的呼唤'],
   ex_zh:'那就只有用最大的声音，拼命呼唤，同时竖起耳朵，提高警惕。',ex_py:'Nà jiù zhǐyǒu yòng zuì dà de shēngyīn, pīnmìng hūhuàn, tóngshí shùqǐ ěrduo, tígāo jǐngtì.',ex_vn:'Thế thì chỉ còn cách dùng tiếng to nhất ra sức gọi nhau, đồng thời dỏng tai lên, nâng cao cảnh giác.',
   exList:[
     {zh:'那就只有用最大的声音，拼命呼唤，同时竖起耳朵，提高警惕。',py:'Nà jiù zhǐyǒu yòng zuì dà de shēngyīn, pīnmìng hūhuàn, tóngshí shùqǐ ěrduo, tígāo jǐngtì.',vn:'Thế thì chỉ còn cách dùng tiếng to nhất ra sức gọi nhau, đồng thời dỏng tai lên, nâng cao cảnh giác.'},
     {zh:'妈妈站在门口，大声呼唤着孩子的名字。',py:'Māma zhàn zài ménkǒu, dàshēng hūhuànzhe háizi de míngzi.',vn:'Mẹ đứng ở cửa, lớn tiếng gọi tên con.'},
     {zh:'保护地球是时代的呼唤，每个人都应该行动起来。',py:'Bǎohù dìqiú shì shídài de hūhuàn, měi ge rén dōu yīnggāi xíngdòng qǐlái.',vn:'Bảo vệ trái đất là tiếng gọi của thời đại, mỗi người đều nên hành động.'}
   ],
   colloFull:[
     {zh:'拼命呼唤',py:'pīnmìng hūhuàn',vn:'gọi hết sức'},
     {zh:'呼唤他的名字',py:'hūhuàn tā de míngzi',vn:'gọi tên anh ấy'},
     {zh:'大声呼唤',py:'dàshēng hūhuàn',vn:'gọi to'},
     {zh:'时代的呼唤',py:'shídài de hūhuàn',vn:'tiếng gọi của thời đại'},
     {zh:'听到呼唤',py:'tīngdào hūhuàn',vn:'nghe thấy tiếng gọi'}
   ],
   patterns:[
     {s:'大声 / 拼命 + 呼唤 + N',m:'Gọi to / ra sức gọi …'},
     {s:'……是……的呼唤',m:'… là tiếng gọi của … (danh từ hoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù chúng tôi gọi thế nào, cậu ấy cũng không quay đầu lại.',answer:'无论我们怎么呼唤，他都没有回头。',answerPy:'Wúlùn wǒmen zěnme hūhuàn, tā dōu méiyǒu huítóu.',
      note:'无论……都……: dù … thế nào cũng ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Nghe thấy tiếng mẹ gọi, đứa bé lập tức chạy lại.',answer:'听到妈妈的呼唤，孩子马上跑了过来。',answerPy:'Tīngdào māma de hūhuàn, háizi mǎshàng pǎole guòlái.',
      note:'Bổ ngữ xu hướng kép 跑过来; 呼唤 dùng như danh từ.',pair:'Bổ ngữ xu hướng kép'}
   ]},

  {n:23,zh:'竖',py:'shù',pos:'Động từ',vn:'dựng thẳng, dựng đứng',hv:'thụ',em:'👂',lesson:1,
   explain:['Dựng cho thẳng đứng lên (tai, ngón tay, cột, biển…).','Còn là tính từ "dọc, thẳng đứng" (竖着放) và danh từ "nét sổ" trong chữ Hán. Trái nghĩa: 横 (ngang).'],
   usage:'Hay gặp: 竖起耳朵 (dỏng tai nghe), 竖起大拇指 (giơ ngón cái khen), 竖着放, 竖一块牌子.',
   collo:['竖起耳朵','竖起大拇指','竖着放','竖一块牌子'],
   ex_zh:'同时竖起耳朵，提高警惕，有危险马上闭嘴。',ex_py:'Tóngshí shùqǐ ěrduo, tígāo jǐngtì, yǒu wēixiǎn mǎshàng bì zuǐ.',ex_vn:'Đồng thời dỏng tai lên, nâng cao cảnh giác, có nguy hiểm thì lập tức im bặt.',
   exList:[
     {zh:'同时竖起耳朵，提高警惕，有危险马上闭嘴。',py:'Tóngshí shùqǐ ěrduo, tígāo jǐngtì, yǒu wēixiǎn mǎshàng bì zuǐ.',vn:'Đồng thời dỏng tai lên, nâng cao cảnh giác, có nguy hiểm thì lập tức im bặt.'},
     {zh:'听完我的演讲，外国朋友向我竖起了大拇指。',py:'Tīngwán wǒ de yǎnjiǎng, wàiguó péngyou xiàng wǒ shùqǐle dàmǔzhǐ.',vn:'Nghe xong bài diễn thuyết của tôi, người bạn nước ngoài giơ ngón cái khen tôi.'},
     {zh:'一听到“考试”两个字，全班同学都竖起了耳朵。',py:'Yì tīngdào "kǎoshì" liǎng ge zì, quán bān tóngxué dōu shùqǐle ěrduo.',vn:'Vừa nghe thấy hai chữ "thi cử", cả lớp đều dỏng tai lên.'}
   ],
   colloFull:[
     {zh:'竖起耳朵',py:'shùqǐ ěrduo',vn:'dỏng tai lên'},
     {zh:'竖起大拇指',py:'shùqǐ dàmǔzhǐ',vn:'giơ ngón cái (khen)'},
     {zh:'竖着放',py:'shùzhe fàng',vn:'đặt dựng đứng'},
     {zh:'竖一块牌子',py:'shù yí kuài páizi',vn:'dựng một tấm biển'},
     {zh:'横竖',py:'héngshù',vn:'(ngang dọc) dù sao đi nữa'}
   ],
   patterns:[
     {s:'竖起 + 耳朵 / 大拇指',m:'Dỏng tai / giơ ngón cái'},
     {s:'向 + người + 竖起大拇指',m:'Giơ ngón cái khen ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe thấy tiếng động lạ, con chó lập tức dỏng tai lên.',answer:'一听到奇怪的声音，小狗马上竖起了耳朵。',answerPy:'Yì tīngdào qíguài de shēngyīn, xiǎo gǒu mǎshàng shùqǐle ěrduo.',
      note:'一……就 / 马上……: vừa … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mọi người đều giơ ngón cái khen món ăn mẹ nấu.',answer:'大家都对妈妈做的菜竖起了大拇指。',answerPy:'Dàjiā dōu duì māma zuò de cài shùqǐle dàmǔzhǐ.',
      note:'对 + N + V; 竖起大拇指 = khen ngợi.',pair:'对…… (giới từ đối tượng)'}
   ]},

  {n:24,zh:'原始',py:'yuánshǐ',pos:'Tính từ',vn:'nguyên thuỷ; ban đầu, gốc',hv:'nguyên thuỷ',em:'🗿',lesson:1,
   explain:['Thuộc về thời kỳ sơ khai nhất, chưa phát triển (原始社会, 原始森林).','Nghĩa khác: đầu tiên, gốc, chưa qua xử lý (原始资料, 原始数据).'],
   usage:'Hay gặp: 原始社会, 原始人, 原始森林 (rừng nguyên sinh), 原始资料 / 原始数据. Chủ yếu làm định ngữ đứng trước danh từ.',
   collo:['原始社会','原始森林','原始人','原始数据'],
   ex_zh:'原始社会之前，我们的祖先还没有进化成人类。',ex_py:'Yuánshǐ shèhuì zhīqián, wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi.',ex_vn:'Trước thời xã hội nguyên thuỷ, tổ tiên chúng ta còn chưa tiến hoá thành loài người.',
   exList:[
     {zh:'原始社会之前，我们的祖先还没有进化成人类。',py:'Yuánshǐ shèhuì zhīqián, wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi.',vn:'Trước thời xã hội nguyên thuỷ, tổ tiên chúng ta còn chưa tiến hoá thành loài người.'},
     {zh:'这片原始森林里生活着很多珍稀动物。',py:'Zhè piàn yuánshǐ sēnlín li shēnghuózhe hěn duō zhēnxī dòngwù.',vn:'Trong khu rừng nguyên sinh này có rất nhiều loài động vật quý hiếm sinh sống.'},
     {zh:'写论文时，一定要保留好原始数据。',py:'Xiě lùnwén shí, yídìng yào bǎoliú hǎo yuánshǐ shùjù.',vn:'Khi viết luận văn, nhất định phải lưu giữ cẩn thận dữ liệu gốc.'}
   ],
   colloFull:[
     {zh:'原始社会',py:'yuánshǐ shèhuì',vn:'xã hội nguyên thuỷ'},
     {zh:'原始森林',py:'yuánshǐ sēnlín',vn:'rừng nguyên sinh'},
     {zh:'原始人',py:'yuánshǐrén',vn:'người nguyên thuỷ'},
     {zh:'原始数据',py:'yuánshǐ shùjù',vn:'dữ liệu gốc'},
     {zh:'原始资料',py:'yuánshǐ zīliào',vn:'tư liệu gốc'}
   ],
   patterns:[
     {s:'原始 + N',m:'… nguyên thuỷ / gốc (làm định ngữ)'},
     {s:'……保持着原始的状态',m:'… vẫn giữ trạng thái nguyên sơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người nguyên thuỷ tuy không có công cụ tiên tiến, nhưng lại rất giỏi tận dụng thiên nhiên.',answer:'原始人虽然没有先进的工具，却很善于利用自然。',answerPy:'Yuánshǐrén suīrán méiyǒu xiānjìn de gōngjù, què hěn shànyú lìyòng zìrán.',
      note:'虽然……却……; 善于 + V = giỏi về ….',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Khu vực này đến nay vẫn giữ nguyên trạng thái nguyên sơ.',answer:'这个地区至今仍然保持着原始的状态。',answerPy:'Zhège dìqū zhìjīn réngrán bǎochízhe yuánshǐ de zhuàngtài.',
      note:'至今 = đến nay; 仍然 = vẫn; V着 chỉ trạng thái duy trì.',pair:'仍然 (vẫn)'}
   ]},

  {n:25,zh:'进化',py:'jìnhuà',pos:'Động từ',vn:'tiến hoá',hv:'tiến hoá',em:'🐒',lesson:1,
   explain:['Sinh vật dần biến đổi từ đơn giản thành phức tạp, từ bậc thấp lên bậc cao qua thời gian dài.','Cũng nói sự vật phát triển tiến lên. Hay dùng: 进化成……, 进化论, 进化的结果. Trái nghĩa: 退化.'],
   usage:'Hay gặp: 进化成人类, 进化论, 进化过程, 不断进化, 由……进化而来.',
   collo:['进化成人类','进化论','进化过程','不断进化'],
   ex_zh:'我们的祖先还没有进化成人类，他们最喜欢的事情，可能就是在鸟叫声中无忧无虑地睡大觉。',ex_py:'Wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi, tāmen zuì xǐhuan de shìqing, kěnéng jiù shì zài niǎo jiào shēng zhōng wúyōu-wúlǜ de shuì dà jiào.',ex_vn:'Khi tổ tiên chúng ta còn chưa tiến hoá thành loài người, việc họ thích nhất có lẽ là ngủ một giấc thật say, vô tư lự trong tiếng chim hót.',
   exList:[
     {zh:'我们的祖先还没有进化成人类，他们最喜欢的事情，可能就是在鸟叫声中无忧无虑地睡大觉。',py:'Wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi, tāmen zuì xǐhuan de shìqing, kěnéng jiù shì zài niǎo jiào shēng zhōng wúyōu-wúlǜ de shuì dà jiào.',vn:'Khi tổ tiên chúng ta còn chưa tiến hoá thành loài người, việc họ thích nhất có lẽ là ngủ một giấc thật say, vô tư lự trong tiếng chim hót.'},
     {zh:'达尔文提出了生物进化论。',py:'Dá\'ěrwén tíchūle shēngwù jìnhuàlùn.',vn:'Darwin đã đưa ra thuyết tiến hoá sinh vật.'},
     {zh:'经过几百万年的进化，人类的大脑变得越来越发达。',py:'Jīngguò jǐ bǎi wàn nián de jìnhuà, rénlèi de dànǎo biàn de yuè lái yuè fādá.',vn:'Trải qua mấy triệu năm tiến hoá, bộ não loài người ngày càng phát triển.'}
   ],
   colloFull:[
     {zh:'进化成人类',py:'jìnhuà chéng rénlèi',vn:'tiến hoá thành loài người'},
     {zh:'进化论',py:'jìnhuàlùn',vn:'thuyết tiến hoá'},
     {zh:'进化过程',py:'jìnhuà guòchéng',vn:'quá trình tiến hoá'},
     {zh:'不断进化',py:'búduàn jìnhuà',vn:'không ngừng tiến hoá'},
     {zh:'生物进化',py:'shēngwù jìnhuà',vn:'tiến hoá sinh vật'}
   ],
   patterns:[
     {s:'A + 进化成 + B',m:'A tiến hoá thành B'},
     {s:'经过……的进化，……',m:'Trải qua … tiến hoá, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các nhà khoa học cho rằng chim được tiến hoá từ khủng long mà thành.',answer:'科学家认为，鸟是由恐龙进化而来的。',answerPy:'Kēxuéjiā rènwéi, niǎo shì yóu kǒnglóng jìnhuà ér lái de.',
      note:'由……V而来 = từ … mà thành; 是……的 nhấn mạnh.',pair:'是……的 (nhấn mạnh)'},
     {promptLang:'vi',prompt:'Cùng với quá trình tiến hoá, một số cơ quan của con người dần trở nên vô dụng.',answer:'随着进化，人类的一些器官渐渐变得没有用了。',answerPy:'Suízhe jìnhuà, rénlèi de yìxiē qìguān jiànjiàn biàn de méiyǒu yòng le.',
      note:'随着……: cùng với …; 器官 ôn bài 8.',pair:'随着……'}
   ]},

  {n:26,zh:'靠拢',py:'kàolǒng',pos:'Động từ',vn:'xích lại gần, đến gần, áp sát',hv:'kháo lũng',em:'🚶',lesson:1,
   explain:['Tiến lại gần, xích lại sát nhau (về vị trí).','Nghĩa bóng: ngả theo, tiến gần về (tư tưởng, tiêu chuẩn, mục tiêu): 向……靠拢.'],
   usage:'Hay gặp: 向……靠拢, 危险正在靠拢, 往中间靠拢, 靠拢一点儿. Gần nghĩa: 靠近 (đến gần) — 靠拢 nhấn "xích lại sát nhau".',
   collo:['危险正在靠拢','向中间靠拢','向目标靠拢','靠拢一点儿'],
   ex_zh:'最焦虑的事情就是周围一片寂静，因为那说明危险正在靠拢。',ex_py:'Zuì jiāolǜ de shìqing jiù shì zhōuwéi yí piàn jìjìng, yīnwèi nà shuōmíng wēixiǎn zhèngzài kàolǒng.',ex_vn:'Điều lo âu nhất là xung quanh im phăng phắc, vì điều đó cho thấy nguy hiểm đang đến gần.',
   exList:[
     {zh:'最焦虑的事情就是周围一片寂静，因为那说明危险正在靠拢。',py:'Zuì jiāolǜ de shìqing jiù shì zhōuwéi yí piàn jìjìng, yīnwèi nà shuōmíng wēixiǎn zhèngzài kàolǒng.',vn:'Điều lo âu nhất là xung quanh im phăng phắc, vì điều đó cho thấy nguy hiểm đang đến gần.'},
     {zh:'照相的时候，大家往中间靠拢一点儿！',py:'Zhào xiàng de shíhou, dàjiā wǎng zhōngjiān kàolǒng yìdiǎnr!',vn:'Lúc chụp ảnh, mọi người xích vào giữa một chút nào!'},
     {zh:'他一直努力向优秀的同学靠拢。',py:'Tā yìzhí nǔlì xiàng yōuxiù de tóngxué kàolǒng.',vn:'Cậu ấy luôn cố gắng học theo, tiến gần tới những bạn xuất sắc.'}
   ],
   colloFull:[
     {zh:'危险正在靠拢',py:'wēixiǎn zhèngzài kàolǒng',vn:'nguy hiểm đang đến gần'},
     {zh:'向中间靠拢',py:'xiàng zhōngjiān kàolǒng',vn:'xích vào giữa'},
     {zh:'向目标靠拢',py:'xiàng mùbiāo kàolǒng',vn:'tiến gần mục tiêu'},
     {zh:'靠拢一点儿',py:'kàolǒng yìdiǎnr',vn:'xích lại gần chút'},
     {zh:'互相靠拢',py:'hùxiāng kàolǒng',vn:'xích lại gần nhau'}
   ],
   patterns:[
     {s:'向 / 往 + phương hướng + 靠拢',m:'Xích lại, tiến gần về phía …'},
     {s:'……正在靠拢',m:'… đang đến gần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy trời sắp mưa, đàn cừu đều xích lại gần nhau.',answer:'眼看要下雨了，羊群都互相靠拢在一起。',answerPy:'Yǎnkàn yào xià yǔ le, yángqún dōu hùxiāng kàolǒng zài yìqǐ.',
      note:'眼看 = thấy ngay sắp; 要……了 = sắp ….',pair:'要……了 (sắp)'},
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày tiến bộ một chút, bạn sẽ không ngừng tiến gần tới mục tiêu.',answer:'只要每天进步一点儿，你就能不断向目标靠拢。',answerPy:'Zhǐyào měi tiān jìnbù yìdiǎnr, nǐ jiù néng búduàn xiàng mùbiāo kàolǒng.',
      note:'只要……就……; 向 + 目标 + 靠拢.',pair:'只要……就……'}
   ]},

  {n:27,zh:'神经',py:'shénjīng',pos:'Danh từ',vn:'thần kinh',hv:'thần kinh',em:'🧠',lesson:1,
   explain:['Hệ thống truyền cảm giác và mệnh lệnh giữa não và các bộ phận cơ thể.','Khẩu ngữ: 神经紧张 = căng thẳng thần kinh; 神经病 = bệnh thần kinh / (câu chửi) "điên à" — tránh dùng bừa.'],
   usage:'Hay gặp: 紧张的神经, 神经系统, 神经紧张, 放松神经, 神经衰弱.',
   collo:['紧张的神经','神经系统','神经紧张','放松神经'],
   ex_zh:'我们喜欢听鸟的叫声，因为那会让紧张的神经放松下来。',ex_py:'Wǒmen xǐhuan tīng niǎo de jiàoshēng, yīnwèi nà huì ràng jǐnzhāng de shénjīng fàngsōng xiàlái.',ex_vn:'Chúng ta thích nghe tiếng chim hót, vì nó làm thần kinh căng thẳng dịu xuống.',
   exList:[
     {zh:'我们喜欢听鸟的叫声，因为那会让紧张的神经放松下来。',py:'Wǒmen xǐhuan tīng niǎo de jiàoshēng, yīnwèi nà huì ràng jǐnzhāng de shénjīng fàngsōng xiàlái.',vn:'Chúng ta thích nghe tiếng chim hót, vì nó làm thần kinh căng thẳng dịu xuống.'},
     {zh:'考试前一天，我的神经绷得紧紧的，怎么也睡不着。',py:'Kǎoshì qián yì tiān, wǒ de shénjīng bēng de jǐnjǐn de, zěnme yě shuì bu zháo.',vn:'Hôm trước kỳ thi, thần kinh tôi căng như dây đàn, thế nào cũng không ngủ được.'},
     {zh:'长期熬夜会损害人的神经系统。',py:'Chángqī áo yè huì sǔnhài rén de shénjīng xìtǒng.',vn:'Thức khuya lâu dài sẽ làm tổn hại hệ thần kinh.'}
   ],
   colloFull:[
     {zh:'紧张的神经',py:'jǐnzhāng de shénjīng',vn:'thần kinh căng thẳng'},
     {zh:'神经系统',py:'shénjīng xìtǒng',vn:'hệ thần kinh'},
     {zh:'神经紧张',py:'shénjīng jǐnzhāng',vn:'căng thẳng thần kinh'},
     {zh:'放松神经',py:'fàngsōng shénjīng',vn:'thư giãn thần kinh'},
     {zh:'神经衰弱',py:'shénjīng shuāiruò',vn:'suy nhược thần kinh'}
   ],
   patterns:[
     {s:'让 + 紧张的神经 + 放松下来',m:'Làm thần kinh căng thẳng dịu xuống'},
     {s:'神经 + 绷得紧紧的',m:'Thần kinh căng như dây đàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc xong nghe chút nhạc nhẹ có thể giúp thư giãn thần kinh.',answer:'工作之后听听轻音乐，可以放松一下神经。',answerPy:'Gōngzuò zhīhòu tīngting qīng yīnyuè, kěyǐ fàngsōng yíxià shénjīng.',
      note:'Lặp lại động từ 听听; V + 一下.',pair:'Lặp lại động từ'},
     {promptLang:'vi',prompt:'Càng gần kỳ thi, thần kinh cậu ấy càng căng thẳng.',answer:'离考试越近，他的神经就越紧张。',answerPy:'Lí kǎoshì yuè jìn, tā de shénjīng jiù yuè jǐnzhāng.',
      note:'越……越……; 离 + thời điểm + 近.',pair:'越……越……'}
   ]},

  {n:28,zh:'生物',py:'shēngwù',pos:'Danh từ',vn:'sinh vật; môn sinh học',hv:'sinh vật',em:'🦋',lesson:1,
   explain:['Mọi vật thể sống: động vật, thực vật, vi sinh vật.','Cũng là tên môn học 生物 (sinh học): 生物课, 生物老师.'],
   usage:'Hay gặp: 海洋生物, 各种生物, 生物课, 生物进化, 生物学家.',
   collo:['海洋生物','各种生物','生物课','生物进化'],
   ex_zh:'经过数千万年的自然选择，对白噪音减弱越敏感的生物，存活和找到配偶的可能性越大。',ex_py:'Jīngguò shù qiān wàn nián de zìrán xuǎnzé, duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng yuè dà.',ex_vn:'Qua hàng chục triệu năm chọn lọc tự nhiên, sinh vật nào càng nhạy với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn.',
   exList:[
     {zh:'经过数千万年的自然选择，对白噪音减弱越敏感的生物，存活和找到配偶的可能性越大。',py:'Jīngguò shù qiān wàn nián de zìrán xuǎnzé, duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng yuè dà.',vn:'Qua hàng chục triệu năm chọn lọc tự nhiên, sinh vật nào càng nhạy với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn.'},
     {zh:'海洋里生活着很多我们还不了解的生物。',py:'Hǎiyáng li shēnghuózhe hěn duō wǒmen hái bù liǎojiě de shēngwù.',vn:'Trong đại dương có rất nhiều sinh vật mà chúng ta còn chưa hiểu.'},
     {zh:'我最喜欢上生物课，因为可以做很多有意思的实验。',py:'Wǒ zuì xǐhuan shàng shēngwù kè, yīnwèi kěyǐ zuò hěn duō yǒu yìsi de shíyàn.',vn:'Tôi thích nhất là học môn sinh, vì được làm nhiều thí nghiệm thú vị.'}
   ],
   colloFull:[
     {zh:'海洋生物',py:'hǎiyáng shēngwù',vn:'sinh vật biển'},
     {zh:'各种生物',py:'gè zhǒng shēngwù',vn:'các loài sinh vật'},
     {zh:'生物课',py:'shēngwù kè',vn:'giờ sinh học'},
     {zh:'生物进化',py:'shēngwù jìnhuà',vn:'sự tiến hoá của sinh vật'},
     {zh:'生物学家',py:'shēngwùxuéjiā',vn:'nhà sinh vật học'}
   ],
   patterns:[
     {s:'……的生物',m:'Sinh vật … (định ngữ đặt trước)'},
     {s:'对……越敏感的生物，……越……',m:'Sinh vật càng nhạy với … thì … càng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có nước, bất kỳ sinh vật nào cũng không thể sống sót.',answer:'如果没有水，任何生物都无法生存。',answerPy:'Rúguǒ méiyǒu shuǐ, rènhé shēngwù dōu wúfǎ shēngcún.',
      note:'任何……都……: bất kỳ … nào cũng ….',pair:'任何……都……'},
     {promptLang:'vi',prompt:'Môn sinh học không những thú vị mà còn rất hữu ích.',answer:'生物这门课不但有意思，而且很有用。',answerPy:'Shēngwù zhè mén kè búdàn yǒu yìsi, érqiě hěn yǒuyòng.',
      note:'不但……而且……: không những … mà còn ….',pair:'不但……而且……'}
   ]},

  {n:29,zh:'配偶',py:'pèi\'ǒu',pos:'Danh từ',vn:'phối ngẫu, vợ / chồng, bạn đời',hv:'phối ngẫu',em:'💑',lesson:1,
   explain:['Người vợ hoặc người chồng (văn bản pháp lý, trang trọng).','Với động vật: con bạn đời, bạn giao phối (找到配偶).'],
   usage:'Hay gặp: 找到配偶, 寻找配偶, 选择配偶, 配偶姓名 (trên giấy tờ). Trang trọng; khẩu ngữ nói 老公 / 老婆 / 爱人.',
   collo:['找到配偶','寻找配偶','选择配偶','配偶姓名'],
   ex_zh:'对白噪音减弱越敏感的生物，存活和找到配偶的可能性越大。',ex_py:'Duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng yuè dà.',ex_vn:'Sinh vật càng nhạy với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn.',
   exList:[
     {zh:'对白噪音减弱越敏感的生物，存活和找到配偶的可能性越大。',py:'Duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng yuè dà.',vn:'Sinh vật càng nhạy với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn.'},
     {zh:'每到春天，很多鸟都会用歌声寻找配偶。',py:'Měi dào chūntiān, hěn duō niǎo dōu huì yòng gēshēng xúnzhǎo pèi\'ǒu.',vn:'Mỗi độ xuân về, nhiều loài chim dùng tiếng hót để tìm bạn đời.'},
     {zh:'填表时，已婚的人需要写上配偶的姓名。',py:'Tián biǎo shí, yǐ hūn de rén xūyào xiěshàng pèi\'ǒu de xìngmíng.',vn:'Khi điền tờ khai, người đã kết hôn cần ghi họ tên vợ / chồng.'}
   ],
   colloFull:[
     {zh:'找到配偶',py:'zhǎodào pèi\'ǒu',vn:'tìm được bạn đời'},
     {zh:'寻找配偶',py:'xúnzhǎo pèi\'ǒu',vn:'tìm kiếm bạn đời'},
     {zh:'选择配偶',py:'xuǎnzé pèi\'ǒu',vn:'chọn bạn đời'},
     {zh:'配偶姓名',py:'pèi\'ǒu xìngmíng',vn:'họ tên vợ / chồng'},
     {zh:'配偶双方',py:'pèi\'ǒu shuāngfāng',vn:'hai bên vợ chồng'}
   ],
   patterns:[
     {s:'寻找 / 找到 + 配偶',m:'Tìm / tìm được bạn đời'},
     {s:'……的配偶',m:'Vợ / chồng của … (văn bản)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chim trống dùng bộ lông đẹp để thu hút bạn đời.',answer:'雄鸟用漂亮的羽毛来吸引配偶。',answerPy:'Xióngniǎo yòng piàoliang de yǔmáo lái xīyǐn pèi\'ǒu.',
      note:'用 + phương tiện + 来 + V (mục đích).',pair:'用……来……'},
     {promptLang:'vi',prompt:'Khi chọn bạn đời, tính cách hợp nhau quan trọng hơn điều kiện kinh tế.',answer:'选择配偶时，性格合得来比经济条件更重要。',answerPy:'Xuǎnzé pèi\'ǒu shí, xìnggé hé de lái bǐ jīngjì tiáojiàn gèng zhòngyào.',
      note:'Câu so sánh A 比 B 更 + adj; 合得来 = hợp nhau.',pair:'Câu so sánh 比'}
   ]},

  {n:30,zh:'世代',py:'shìdài',pos:'Danh từ',vn:'nhiều đời, đời đời',hv:'thế đại',em:'🏡',lesson:1,
   explain:['Nhiều đời nối tiếp nhau (đời này qua đời khác).','Hay làm trạng ngữ: 世代相传, 世代居住; dạng lặp 世世代代 nhấn mạnh hơn.'],
   usage:'Hay gặp: 世代相传, 世世代代, 世代务农, 世代居住在……, 世代友好.',
   collo:['世代相传','世世代代','世代居住','世代务农'],
   ex_zh:'这种意识在DNA中保留下来，并且世代相传。',ex_py:'Zhè zhǒng yìshí zài DNA zhōng bǎoliú xiàlái, bìngqiě shìdài xiāngchuán.',ex_vn:'Ý thức này được lưu giữ trong DNA và truyền từ đời này sang đời khác.',
   exList:[
     {zh:'这种意识在DNA中保留下来，并且世代相传。',py:'Zhè zhǒng yìshí zài DNA zhōng bǎoliú xiàlái, bìngqiě shìdài xiāngchuán.',vn:'Ý thức này được lưu giữ trong DNA và truyền từ đời này sang đời khác.'},
     {zh:'他们一家世世代代都住在这个小村子里。',py:'Tāmen yì jiā shìshìdàidài dōu zhù zài zhège xiǎo cūnzi li.',vn:'Gia đình họ đời đời kiếp kiếp đều sống ở ngôi làng nhỏ này.'},
     {zh:'这门手艺在我们家族世代相传，已经有两百多年了。',py:'Zhè mén shǒuyì zài wǒmen jiāzú shìdài xiāngchuán, yǐjīng yǒu liǎng bǎi duō nián le.',vn:'Nghề thủ công này được truyền qua nhiều đời trong dòng họ tôi, đã hơn hai trăm năm rồi.'}
   ],
   colloFull:[
     {zh:'世代相传',py:'shìdài xiāngchuán',vn:'truyền từ đời này sang đời khác'},
     {zh:'世世代代',py:'shìshìdàidài',vn:'đời đời kiếp kiếp'},
     {zh:'世代居住',py:'shìdài jūzhù',vn:'sinh sống qua nhiều đời'},
     {zh:'世代务农',py:'shìdài wùnóng',vn:'nhiều đời làm nông'},
     {zh:'世代友好',py:'shìdài yǒuhǎo',vn:'đời đời hữu nghị'}
   ],
   patterns:[
     {s:'世代 + 相传 / 居住 / 务农',m:'Nhiều đời (truyền / sống / làm nông)'},
     {s:'世世代代 + 都……',m:'Đời đời kiếp kiếp đều …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy nhà nhiều đời làm nông, nhưng anh ấy lại quyết định lên thành phố khởi nghiệp.',answer:'虽然家里世代务农，他却决定到城市创业。',answerPy:'Suīrán jiā li shìdài wùnóng, tā què juédìng dào chéngshì chuàngyè.',
      note:'虽然……却……: tuy … nhưng lại ….',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chúng tôi hy vọng nhân dân hai nước đời đời hữu nghị.',answer:'我们希望两国人民世世代代友好下去。',answerPy:'Wǒmen xīwàng liǎng guó rénmín shìshìdàidài yǒuhǎo xiàqu.',
      note:'Bổ ngữ xu hướng 下去 = tiếp tục mãi.',pair:'Bổ ngữ xu hướng 下去'}
   ]},

  {n:31,zh:'暗示',py:'ànshì',pos:'Động từ',vn:'ngụ ý, ám thị, ra hiệu ngầm',hv:'ám thị',em:'😉',lesson:1,
   explain:['Không nói thẳng mà dùng lời bóng gió, cử chỉ, ánh mắt, âm thanh… để người khác tự hiểu ý.','Cũng là danh từ: 一种暗示, 心理暗示, 给……暗示; chủ ngữ có thể là sự vật, hiện tượng (乌云暗示着要下雨).'],
   usage:'Hay gặp: 暗示着……, 用眼神暗示, 心理暗示, 声音暗示. Khác 提示 (nhắc nhở công khai, gợi ý rõ ràng) — xem phần phân biệt.',
   collo:['暗示着安全','心理暗示','用眼神暗示','声音暗示'],
   ex_zh:'会议室里的嘈杂声就是白噪音，大量的白噪音暗示着安全。',ex_py:'Huìyìshì li de cáozá shēng jiù shì bái zàoyīn, dàliàng de bái zàoyīn ànshìzhe ānquán.',ex_vn:'Tiếng ồn ào trong phòng họp chính là tiếng ồn trắng, nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn.',
   exList:[
     {zh:'会议室里的嘈杂声就是白噪音，大量的白噪音暗示着安全。',py:'Huìyìshì li de cáozá shēng jiù shì bái zàoyīn, dàliàng de bái zàoyīn ànshìzhe ānquán.',vn:'Tiếng ồn ào trong phòng họp chính là tiếng ồn trắng, nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn.'},
     {zh:'他看了看手表，暗示我们该走了。',py:'Tā kànle kàn shǒubiǎo, ànshì wǒmen gāi zǒu le.',vn:'Anh ấy nhìn đồng hồ, ngầm ra hiệu chúng tôi nên đi rồi.'},
     {zh:'积极的心理暗示能让人更有信心。',py:'Jījí de xīnlǐ ànshì néng ràng rén gèng yǒu xìnxīn.',vn:'Ám thị tâm lý tích cực có thể khiến người ta tự tin hơn.'}
   ],
   colloFull:[
     {zh:'暗示着安全',py:'ànshìzhe ānquán',vn:'ngầm báo hiệu an toàn'},
     {zh:'心理暗示',py:'xīnlǐ ànshì',vn:'ám thị tâm lý'},
     {zh:'用眼神暗示',py:'yòng yǎnshén ànshì',vn:'ra hiệu bằng ánh mắt'},
     {zh:'声音暗示',py:'shēngyīn ànshì',vn:'ám hiệu bằng âm thanh'},
     {zh:'给他暗示',py:'gěi tā ànshì',vn:'ra hiệu cho anh ấy'}
   ],
   patterns:[
     {s:'A 暗示着 B',m:'A ngầm báo hiệu B'},
     {s:'用 + cử chỉ + 暗示 + người + V',m:'Dùng … ra hiệu cho ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo đưa mắt ra hiệu cho tôi đừng nói nữa.',answer:'老师用眼神暗示我别再说了。',answerPy:'Lǎoshī yòng yǎnshén ànshì wǒ bié zài shuō le.',
      note:'用 + phương tiện + V; 别再……了 = đừng … nữa.',pair:'别再……了'},
     {promptLang:'vi',prompt:'Trên trời mây đen dày đặc, ngầm báo một trận mưa lớn sắp đến.',answer:'天上乌云密布，暗示着一场大雨就要来了。',answerPy:'Tiān shang wūyún mìbù, ànshìzhe yì cháng dà yǔ jiù yào lái le.',
      note:'就要……了 = sắp …; chủ ngữ của 暗示 là hiện tượng.',pair:'就要……了'}
   ]},

  {n:32,zh:'提示',py:'tíshì',pos:'Động từ',vn:'nhắc nhở, gợi ý',hv:'đề thị',em:'🔔',lesson:1,
   explain:['Chỉ ra, nhắc cho người khác chú ý hoặc nghĩ ra điều gì — nói RÕ RÀNG, công khai.','Cũng là danh từ: 温馨提示 (lời nhắc thân thiện), 给个提示 (gợi ý một chút), 根据提示.'],
   usage:'Hay gặp: 提示大家……, 给个提示, 温馨提示, 根据提示. Khác 暗示 (ngầm, không nói thẳng).',
   collo:['提示大家','给个提示','温馨提示','根据提示'],
   ex_zh:'当嘈杂声减弱时，提示大家要警惕。',ex_py:'Dāng cáozá shēng jiǎnruò shí, tíshì dàjiā yào jǐngtì.',ex_vn:'Khi tiếng ồn ào yếu đi, nó nhắc mọi người phải cảnh giác.',
   exList:[
     {zh:'当嘈杂声减弱时，提示大家要警惕。',py:'Dāng cáozá shēng jiǎnruò shí, tíshì dàjiā yào jǐngtì.',vn:'Khi tiếng ồn ào yếu đi, nó nhắc mọi người phải cảnh giác.'},
     {zh:'这道题太难了，老师，您能给个提示吗？',py:'Zhè dào tí tài nán le, lǎoshī, nín néng gěi ge tíshì ma?',vn:'Câu này khó quá, thưa cô, cô có thể gợi ý một chút không ạ?'},
     {zh:'手机提示我电量不足，得赶紧充电了。',py:'Shǒujī tíshì wǒ diànliàng bùzú, děi gǎnjǐn chōngdiàn le.',vn:'Điện thoại báo tôi pin yếu, phải sạc ngay thôi.'}
   ],
   colloFull:[
     {zh:'提示大家',py:'tíshì dàjiā',vn:'nhắc mọi người'},
     {zh:'给个提示',py:'gěi ge tíshì',vn:'gợi ý một chút'},
     {zh:'温馨提示',py:'wēnxīn tíshì',vn:'lời nhắc thân thiện'},
     {zh:'根据提示',py:'gēnjù tíshì',vn:'dựa vào gợi ý'},
     {zh:'系统提示',py:'xìtǒng tíshì',vn:'hệ thống thông báo'}
   ],
   patterns:[
     {s:'提示 + người + V',m:'Nhắc ai làm gì'},
     {s:'根据提示，……',m:'Dựa vào gợi ý, … (đề bài 练习5)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dựa vào gợi ý, hãy thuật lại ngắn gọn nội dung chính của bài khoá.',answer:'根据提示，简述课文的主要内容。',answerPy:'Gēnjù tíshì, jiǎnshù kèwén de zhǔyào nèiróng.',
      note:'根据 + N (căn cứ vào); đây chính là đề bài tập 5 của sách.',pair:'根据……'},
     {promptLang:'vi',prompt:'Nếu không nhờ cô nhắc, tôi đã quên mang thẻ dự thi rồi.',answer:'要不是老师提示，我就忘了带准考证了。',answerPy:'Yàobúshì lǎoshī tíshì, wǒ jiù wàngle dài zhǔnkǎozhèng le.',
      note:'要不是……就…… = nếu không phải (nhờ) … thì đã ….',pair:'要不是……'}
   ]},

  {n:33,zh:'鉴于',py:'jiànyú',pos:'Liên từ / Giới từ',vn:'do, bởi vì, xét thấy',hv:'giám vu',em:'⚖️',lesson:1,
   explain:['Giới từ: nghĩa là "nhận thấy, xét đến" (觉察到、考虑到) — 鉴于 + tình hình.','Liên từ: đứng đầu phân câu TRƯỚC trong câu nhân quả, nêu căn cứ, nguyên nhân, lý do cho hành động ở vế sau. Dùng trong văn viết.'],
   usage:'Hay gặp: 鉴于……，(决定)……; 鉴于以上情况, 鉴于这种情况. Vế sau thường là quyết định, biện pháp. Không đặt ở vế sau, không dùng trong khẩu ngữ thân mật.',
   collo:['鉴于以上情况','鉴于这种情况','鉴于篇幅所限','鉴于他的表现'],
   ex_zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',ex_py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',ex_vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.',
   exList:[
     {zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.'},
     {zh:'鉴于农村教师严重缺乏，他决定大学毕业以后，到农村去当老师。',py:'Jiànyú nóngcūn jiàoshī yánzhòng quēfá, tā juédìng dàxué bìyè yǐhòu, dào nóngcūn qù dāng lǎoshī.',vn:'Xét thấy giáo viên nông thôn thiếu trầm trọng, anh ấy quyết định sau khi tốt nghiệp đại học sẽ về nông thôn dạy học.'},
     {zh:'鉴于他出色的表现，公司决定让他担任部门经理。',py:'Jiànyú tā chūsè de biǎoxiàn, gōngsī juédìng ràng tā dānrèn bùmén jīnglǐ.',vn:'Xét thấy biểu hiện xuất sắc của anh ấy, công ty quyết định để anh ấy làm trưởng phòng.'}
   ],
   colloFull:[
     {zh:'鉴于以上情况',py:'jiànyú yǐshàng qíngkuàng',vn:'xét tình hình nêu trên'},
     {zh:'鉴于这种情况',py:'jiànyú zhè zhǒng qíngkuàng',vn:'xét tình hình này'},
     {zh:'鉴于篇幅所限',py:'jiànyú piānfú suǒ xiàn',vn:'do khuôn khổ có hạn'},
     {zh:'鉴于他的表现',py:'jiànyú tā de biǎoxiàn',vn:'xét biểu hiện của anh ấy'},
     {zh:'鉴于天气原因',py:'jiànyú tiānqì yuányīn',vn:'do nguyên nhân thời tiết'}
   ],
   patterns:[
     {s:'鉴于 + tình hình / lý do，(chủ ngữ) + 决定……',m:'Xét thấy …, (ai) quyết định …'},
     {s:'鉴于以上情况，……',m:'Xét tình hình nêu trên, … (văn bản)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do thời tiết xấu, trận đấu được dời sang tuần sau.',answer:'鉴于天气恶劣，比赛推迟到下周举行。',answerPy:'Jiànyú tiānqì èliè, bǐsài tuīchí dào xià zhōu jǔxíng.',
      note:'鉴于 + nguyên nhân ở vế trước; bổ ngữ 到 + thời gian.',pair:'V + 到 + thời gian'},
     {promptLang:'vi',prompt:'Xét thấy nhiều học sinh phản ánh bài tập quá nhiều, nhà trường quyết định giảm bớt lượng bài tập.',answer:'鉴于很多学生反映作业太多，学校决定减少作业量。',answerPy:'Jiànyú hěn duō xuésheng fǎnyìng zuòyè tài duō, xuéxiào juédìng jiǎnshǎo zuòyè liàng.',
      note:'鉴于……，决定……: vế sau là quyết định / biện pháp.',pair:'Câu nhân quả (lý do – quyết định)'}
   ]},

  {n:34,zh:'功效',py:'gōngxiào',pos:'Danh từ',vn:'tác dụng, hiệu lực, công hiệu',hv:'công hiệu',em:'💊',lesson:1,
   explain:['Hiệu quả, tác dụng thực tế mà một vật, một phương pháp đem lại (thuốc, thực phẩm, liệu pháp…).','Văn viết; hay đi với 有……的功效, 发挥功效, 功效显著.'],
   usage:'Hay gặp: 有……的功效, 功效显著, 发挥功效, 神奇的功效. Gần nghĩa: 效果, 作用 — xem phần phân biệt 功效 — 效果.',
   collo:['有这样的功效','功效显著','发挥功效','神奇的功效'],
   ex_zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',ex_py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',ex_vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.',
   exList:[
     {zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.'},
     {zh:'绿茶有提神的功效，所以我晚上不敢多喝。',py:'Lǜchá yǒu tíshén de gōngxiào, suǒyǐ wǒ wǎnshang bù gǎn duō hē.',vn:'Trà xanh có tác dụng làm tỉnh táo, nên buổi tối tôi không dám uống nhiều.'},
     {zh:'这种新药的功效十分显著，很多患者用了都说好。',py:'Zhè zhǒng xīn yào de gōngxiào shífēn xiǎnzhù, hěn duō huànzhě yòngle dōu shuō hǎo.',vn:'Công hiệu của loại thuốc mới này rất rõ rệt, nhiều bệnh nhân dùng rồi đều khen.'}
   ],
   colloFull:[
     {zh:'有这样的功效',py:'yǒu zhèyàng de gōngxiào',vn:'có công hiệu như vậy'},
     {zh:'功效显著',py:'gōngxiào xiǎnzhù',vn:'hiệu quả rõ rệt'},
     {zh:'发挥功效',py:'fāhuī gōngxiào',vn:'phát huy tác dụng'},
     {zh:'神奇的功效',py:'shénqí de gōngxiào',vn:'công dụng thần kỳ'},
     {zh:'药物的功效',py:'yàowù de gōngxiào',vn:'công hiệu của thuốc'}
   ],
   patterns:[
     {s:'A 有 + V / adj + 的功效',m:'A có tác dụng …'},
     {s:'……的功效十分显著',m:'Hiệu quả của … rất rõ rệt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù quảng cáo nói công hiệu thần kỳ đến mấy, bạn cũng đừng tin bừa.',answer:'不管广告把功效说得多么神奇，你也别随便相信。',answerPy:'Bùguǎn guǎnggào bǎ gōngxiào shuō de duōme shénqí, nǐ yě bié suíbiàn xiāngxìn.',
      note:'不管……也……; 把……说得…… (câu 把 + bổ ngữ trình độ).',pair:'不管……都 / 也……'},
     {promptLang:'vi',prompt:'Nghe nói mật ong có tác dụng giảm ho.',answer:'据说蜂蜜有止咳的功效。',answerPy:'Jùshuō fēngmì yǒu zhǐ ké de gōngxiào.',
      note:'止咳 (热身 2: từ có chữ 止); 据说 = nghe nói.',pair:'据说'}
   ]},

  {n:35,zh:'理所当然',py:'lǐsuǒdāngrán',pos:'Thành ngữ',vn:'đương nhiên, lẽ dĩ nhiên',hv:'lý sở đương nhiên',em:'✅',lesson:1,
   explain:['Theo lẽ phải thì đương nhiên phải như vậy.','Làm vị ngữ (是理所当然的), định ngữ (理所当然的事), trạng ngữ (理所当然地 + V).'],
   usage:'Hay gặp: 是理所当然的, 理所当然地成了……, 视为理所当然, 把……当成理所当然. Lưu ý: 把帮助当成理所当然 = coi sự giúp đỡ là hiển nhiên (hàm ý không biết ơn).',
   collo:['理所当然的事','理所当然地成了','视为理所当然','是理所当然的'],
   ex_zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',ex_py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',ex_vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.',
   exList:[
     {zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。',py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu.',vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ.'},
     {zh:'孩子孝顺父母是理所当然的事情。',py:'Háizi xiàoshùn fùmǔ shì lǐsuǒdāngrán de shìqing.',vn:'Con cái hiếu thuận với cha mẹ là chuyện đương nhiên.'},
     {zh:'不要把父母的付出看成理所当然的。',py:'Bú yào bǎ fùmǔ de fùchū kànchéng lǐsuǒdāngrán de.',vn:'Đừng coi sự hy sinh của bố mẹ là điều hiển nhiên.'}
   ],
   colloFull:[
     {zh:'理所当然的事',py:'lǐsuǒdāngrán de shì',vn:'chuyện đương nhiên'},
     {zh:'理所当然地成了',py:'lǐsuǒdāngrán de chéngle',vn:'đương nhiên trở thành'},
     {zh:'视为理所当然',py:'shìwéi lǐsuǒdāngrán',vn:'coi là lẽ đương nhiên'},
     {zh:'是理所当然的',py:'shì lǐsuǒdāngrán de',vn:'là điều đương nhiên'},
     {zh:'看成理所当然',py:'kànchéng lǐsuǒdāngrán',vn:'coi là hiển nhiên'}
   ],
   patterns:[
     {s:'……是理所当然的',m:'… là điều đương nhiên'},
     {s:'把 A 看成 / 当成理所当然(的)',m:'Coi A là điều hiển nhiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy học giỏi nhất lớp, được bầu làm lớp trưởng là chuyện đương nhiên.',answer:'他是全班成绩最好的，被选为班长是理所当然的。',answerPy:'Tā shì quán bān chéngjì zuì hǎo de, bèi xuǎnwéi bānzhǎng shì lǐsuǒdāngrán de.',
      note:'Bị động 被选为; ……是理所当然的.',pair:'Câu bị động 被'},
     {promptLang:'vi',prompt:'Đừng coi sự giúp đỡ của người khác là điều hiển nhiên.',answer:'不要把别人的帮助当成理所当然的事。',answerPy:'Bú yào bǎ biérén de bāngzhù dàngchéng lǐsuǒdāngrán de shì.',
      note:'把 A 当成 B = coi A là B.',pair:'Câu chữ 把 (把……当成……)'}
   ]},

  {n:36,zh:'疾病',py:'jíbìng',pos:'Danh từ',vn:'bệnh tật',hv:'tật bệnh',em:'🏥',lesson:1,
   explain:['Bệnh (nói chung), văn viết, dùng trong y học, báo chí.','Khẩu ngữ nói 病; 疾病 thường là danh từ tập hợp, ít đi với lượng từ 场 / 次 như 病.'],
   usage:'Hay gặp: 神经系统疾病, 预防疾病, 治疗疾病, 慢性疾病, 传染性疾病.',
   collo:['神经系统疾病','预防疾病','治疗疾病','慢性疾病'],
   ex_zh:'人们利用它对神经系统疾病患者进行辅助性治疗。',ex_py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo.',ex_vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh.',
   exList:[
     {zh:'人们利用它对神经系统疾病患者进行辅助性治疗。',py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo.',vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh.'},
     {zh:'经常锻炼身体，可以预防很多疾病。',py:'Jīngcháng duànliàn shēntǐ, kěyǐ yùfáng hěn duō jíbìng.',vn:'Thường xuyên rèn luyện thân thể có thể phòng ngừa nhiều bệnh tật.'},
     {zh:'随着医学的发展，很多过去治不好的疾病现在都能治了。',py:'Suízhe yīxué de fāzhǎn, hěn duō guòqù zhì bu hǎo de jíbìng xiànzài dōu néng zhì le.',vn:'Cùng với sự phát triển của y học, nhiều bệnh trước kia không chữa được thì nay đều chữa được.'}
   ],
   colloFull:[
     {zh:'神经系统疾病',py:'shénjīng xìtǒng jíbìng',vn:'bệnh hệ thần kinh'},
     {zh:'预防疾病',py:'yùfáng jíbìng',vn:'phòng bệnh'},
     {zh:'治疗疾病',py:'zhìliáo jíbìng',vn:'chữa bệnh'},
     {zh:'慢性疾病',py:'mànxìng jíbìng',vn:'bệnh mãn tính'},
     {zh:'传染性疾病',py:'chuánrǎnxìng jíbìng',vn:'bệnh truyền nhiễm'}
   ],
   patterns:[
     {s:'预防 / 治疗 + 疾病',m:'Phòng / chữa bệnh'},
     {s:'……系统疾病',m:'Bệnh về hệ … (thần kinh, tiêu hoá…)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có ăn uống điều độ mới có thể phòng ngừa hiệu quả nhiều bệnh tật.',answer:'只有饮食规律，才能有效地预防很多疾病。',answerPy:'Zhǐyǒu yǐnshí guīlǜ, cái néng yǒuxiào de yùfáng hěn duō jíbìng.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Áp lực lớn kéo dài không chỉ ảnh hưởng tâm trạng mà còn có thể gây ra bệnh tật.',answer:'长期压力大不仅影响心情，还可能引起疾病。',answerPy:'Chángqī yālì dà bùjǐn yǐngxiǎng xīnqíng, hái kěnéng yǐnqǐ jíbìng.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:37,zh:'患者',py:'huànzhě',pos:'Danh từ',vn:'người bệnh, bệnh nhân',hv:'hoạn giả',em:'🤒',lesson:1,
   explain:['Người mắc bệnh (văn viết, y học).','Thường có định ngữ chỉ bệnh đứng trước: 心脏病患者, 疾病患者; 患儿 = bệnh nhi.'],
   usage:'Hay gặp: ……患者, 患者家属, 接待患者, 减轻患者的痛苦. Gần nghĩa: 病人 (khẩu ngữ).',
   collo:['疾病患者','患者家属','减轻患者的痛苦','心脏病患者'],
   ex_zh:'人们利用它对神经系统疾病患者进行辅助性治疗。',ex_py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo.',ex_vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh.',
   exList:[
     {zh:'人们利用它对神经系统疾病患者进行辅助性治疗。',py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo.',vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh.'},
     {zh:'医生应该耐心地倾听患者的描述。',py:'Yīshēng yīnggāi nàixīn de qīngtīng huànzhě de miáoshù.',vn:'Bác sĩ nên kiên nhẫn lắng nghe lời mô tả của bệnh nhân.'},
     {zh:'手术后，患者家属一直守在病房外面。',py:'Shǒushù hòu, huànzhě jiāshǔ yìzhí shǒu zài bìngfáng wàimian.',vn:'Sau ca mổ, người nhà bệnh nhân luôn túc trực ngoài phòng bệnh.'}
   ],
   colloFull:[
     {zh:'疾病患者',py:'jíbìng huànzhě',vn:'người mắc bệnh'},
     {zh:'患者家属',py:'huànzhě jiāshǔ',vn:'người nhà bệnh nhân'},
     {zh:'减轻患者的痛苦',py:'jiǎnqīng huànzhě de tòngkǔ',vn:'giảm đau đớn cho bệnh nhân'},
     {zh:'心脏病患者',py:'xīnzàngbìng huànzhě',vn:'người bệnh tim'},
     {zh:'接待患者',py:'jiēdài huànzhě',vn:'tiếp nhận bệnh nhân'}
   ],
   patterns:[
     {s:'Tên bệnh + 患者',m:'Người mắc bệnh …'},
     {s:'对……患者进行……治疗',m:'Tiến hành điều trị … cho bệnh nhân …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là bác sĩ thì phải coi mỗi bệnh nhân như người thân của mình.',answer:'作为医生，要把每一位患者当成自己的亲人。',answerPy:'Zuòwéi yīshēng, yào bǎ měi yí wèi huànzhě dàngchéng zìjǐ de qīnrén.',
      note:'作为 + thân phận; 把 A 当成 B.',pair:'作为……'},
     {promptLang:'vi',prompt:'Bệnh nhân tiểu đường không được ăn quá nhiều đồ ngọt.',answer:'糖尿病患者不能吃太多甜食。',answerPy:'Tángniàobìng huànzhě bù néng chī tài duō tiánshí.',
      note:'Tên bệnh + 患者; 不能 = không được.',pair:'能 / 不能'}
   ]},

  {n:38,zh:'辅助',py:'fǔzhù',pos:'Tính từ',vn:'phụ, bổ trợ, hỗ trợ',hv:'phụ trợ',em:'🩹',lesson:1,
   explain:['Tính từ: mang tính phụ, bổ trợ, không phải chính (辅助治疗, 辅助工具, 辅助性).','Cũng là động từ: giúp đỡ, hỗ trợ bên cạnh (辅助老师管理班级).'],
   usage:'Hay gặp: 辅助治疗, 辅助性治疗, 辅助工具, 起辅助作用, 辅助……工作.',
   collo:['辅助性治疗','辅助工具','起辅助作用','辅助治疗'],
   ex_zh:'人们利用它对神经系统疾病患者进行辅助性治疗，成功地减轻了病人的症状。',ex_py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo, chénggōng de jiǎnqīngle bìngrén de zhèngzhuàng.',ex_vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh, giảm nhẹ thành công các triệu chứng của người bệnh.',
   exList:[
     {zh:'人们利用它对神经系统疾病患者进行辅助性治疗，成功地减轻了病人的症状。',py:'Rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo, chénggōng de jiǎnqīngle bìngrén de zhèngzhuàng.',vn:'Người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh, giảm nhẹ thành công các triệu chứng của người bệnh.'},
     {zh:'词典只是学习的辅助工具，不能完全依靠它。',py:'Cídiǎn zhǐ shì xuéxí de fǔzhù gōngjù, bù néng wánquán yīkào tā.',vn:'Từ điển chỉ là công cụ hỗ trợ học tập, không thể hoàn toàn dựa vào nó.'},
     {zh:'音乐在治疗中只能起辅助作用，最重要的还是吃药。',py:'Yīnyuè zài zhìliáo zhōng zhǐ néng qǐ fǔzhù zuòyòng, zuì zhòngyào de háishi chī yào.',vn:'Âm nhạc trong điều trị chỉ có thể đóng vai trò hỗ trợ, quan trọng nhất vẫn là uống thuốc.'}
   ],
   colloFull:[
     {zh:'辅助性治疗',py:'fǔzhùxìng zhìliáo',vn:'điều trị bổ trợ'},
     {zh:'辅助工具',py:'fǔzhù gōngjù',vn:'công cụ hỗ trợ'},
     {zh:'起辅助作用',py:'qǐ fǔzhù zuòyòng',vn:'đóng vai trò hỗ trợ'},
     {zh:'辅助治疗',py:'fǔzhù zhìliáo',vn:'trị liệu hỗ trợ'},
     {zh:'辅助老师',py:'fǔzhù lǎoshī',vn:'hỗ trợ giáo viên'}
   ],
   patterns:[
     {s:'对……进行辅助性治疗',m:'Điều trị bổ trợ cho …'},
     {s:'……只能起辅助作用',m:'… chỉ đóng vai trò phụ trợ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy tính cầm tay tuy tiện lợi, nhưng chỉ là một công cụ hỗ trợ mà thôi.',answer:'计算器虽然方便，但只是一种辅助工具而已。',answerPy:'Jìsuànqì suīrán fāngbiàn, dàn zhǐ shì yì zhǒng fǔzhù gōngjù éryǐ.',
      note:'只是……而已 (而已 bài 5) = chỉ là … mà thôi.',pair:'只是……而已'},
     {promptLang:'vi',prompt:'Lớp trưởng hỗ trợ cô giáo quản lý lớp.',answer:'班长辅助老师管理班级。',answerPy:'Bānzhǎng fǔzhù lǎoshī guǎnlǐ bānjí.',
      note:'辅助 làm động từ + người + V (câu kiêm ngữ).',pair:'Câu kiêm ngữ'}
   ]},

  {n:39,zh:'症状',py:'zhèngzhuàng',pos:'Danh từ',vn:'triệu chứng',hv:'chứng trạng',em:'🌡️',lesson:1,
   explain:['Những biểu hiện bất thường của cơ thể khi bị bệnh (sốt, ho, đau đầu…).','Nghĩa rộng: biểu hiện của một vấn đề (社会问题的症状).'],
   usage:'Hay gặp: 减轻症状, 出现……症状, 感冒症状, 症状消失, 症状明显.',
   collo:['减轻症状','出现症状','感冒症状','症状消失'],
   ex_zh:'白噪音成功地减轻了病人的症状。',ex_py:'Bái zàoyīn chénggōng de jiǎnqīngle bìngrén de zhèngzhuàng.',ex_vn:'Tiếng ồn trắng đã giảm nhẹ thành công các triệu chứng của người bệnh.',
   exList:[
     {zh:'白噪音成功地减轻了病人的症状。',py:'Bái zàoyīn chénggōng de jiǎnqīngle bìngrén de zhèngzhuàng.',vn:'Tiếng ồn trắng đã giảm nhẹ thành công các triệu chứng của người bệnh.'},
     {zh:'如果出现发烧、咳嗽等症状，请马上去医院。',py:'Rúguǒ chūxiàn fāshāo, késou děng zhèngzhuàng, qǐng mǎshàng qù yīyuàn.',vn:'Nếu xuất hiện các triệu chứng như sốt, ho, xin lập tức đến bệnh viện.'},
     {zh:'吃了两天药，他的感冒症状基本消失了。',py:'Chīle liǎng tiān yào, tā de gǎnmào zhèngzhuàng jīběn xiāoshī le.',vn:'Uống thuốc hai ngày, triệu chứng cảm của anh ấy về cơ bản đã hết.'}
   ],
   colloFull:[
     {zh:'减轻症状',py:'jiǎnqīng zhèngzhuàng',vn:'giảm nhẹ triệu chứng'},
     {zh:'出现症状',py:'chūxiàn zhèngzhuàng',vn:'xuất hiện triệu chứng'},
     {zh:'感冒症状',py:'gǎnmào zhèngzhuàng',vn:'triệu chứng cảm'},
     {zh:'症状消失',py:'zhèngzhuàng xiāoshī',vn:'triệu chứng biến mất'},
     {zh:'症状明显',py:'zhèngzhuàng míngxiǎn',vn:'triệu chứng rõ rệt'}
   ],
   patterns:[
     {s:'出现 + ……等症状',m:'Xuất hiện các triệu chứng như …'},
     {s:'减轻 / 缓解 + 症状',m:'Giảm nhẹ / làm dịu triệu chứng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy triệu chứng đã giảm, nhưng bác sĩ dặn nhất định phải uống hết thuốc đúng giờ.',answer:'虽然症状减轻了，但医生嘱咐一定要按时吃完药。',answerPy:'Suīrán zhèngzhuàng jiǎnqīng le, dàn yīshēng zhǔfù yídìng yào ànshí chīwán yào.',
      note:'虽然……但……; 嘱咐 = dặn dò.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Một khi xuất hiện triệu chứng khó thở, phải lập tức gọi xe cấp cứu.',answer:'一旦出现呼吸困难的症状，就要马上叫救护车。',answerPy:'Yídàn chūxiàn hūxī kùnnan de zhèngzhuàng, jiù yào mǎshàng jiào jiùhùchē.',
      note:'一旦……就……: một khi … thì ….',pair:'一旦……就……'}
   ]},

  {n:40,zh:'愈',py:'yù',pos:'Tính từ',vn:'khỏi bệnh, hết bệnh',hv:'dũ',em:'💪',lesson:1,
   explain:['Khỏi bệnh, bệnh đã hết (văn viết): 病愈, 治愈, 痊愈.','Còn là phó từ trong 愈……愈…… = 越……越…… (càng … càng …), văn viết.'],
   usage:'Hay gặp: 治愈, 痊愈, 病愈出院, 久病不愈. Ít đứng một mình; khẩu ngữ nói 病好了.',
   collo:['治愈','痊愈','病愈出院','久病不愈'],
   ex_zh:'用它治愈了一些多动症患儿的精神集中能力障碍。',ex_py:'Yòng tā zhìyùle yìxiē duōdòngzhèng huàn\'ér de jīngshén jízhōng nénglì zhàng\'ài.',ex_vn:'Dùng nó chữa khỏi chứng khó tập trung ở một số bệnh nhi tăng động.',
   exList:[
     {zh:'用它治愈了一些多动症患儿的精神集中能力障碍。',py:'Yòng tā zhìyùle yìxiē duōdòngzhèng huàn\'ér de jīngshén jízhōng nénglì zhàng\'ài.',vn:'Dùng nó chữa khỏi chứng khó tập trung ở một số bệnh nhi tăng động.'},
     {zh:'他的病彻底治愈了，全家都非常高兴。',py:'Tā de bìng chèdǐ zhìyù le, quán jiā dōu fēicháng gāoxìng.',vn:'Bệnh của anh ấy đã được chữa khỏi hoàn toàn, cả nhà đều rất vui.'},
     {zh:'奶奶病愈出院那天，我们全家都去医院接她。',py:'Nǎinai bìng yù chūyuàn nà tiān, wǒmen quán jiā dōu qù yīyuàn jiē tā.',vn:'Hôm bà khỏi bệnh ra viện, cả nhà tôi đều đến bệnh viện đón bà.'}
   ],
   colloFull:[
     {zh:'治愈',py:'zhìyù',vn:'chữa khỏi'},
     {zh:'痊愈',py:'quányù',vn:'khỏi hẳn'},
     {zh:'病愈出院',py:'bìng yù chūyuàn',vn:'khỏi bệnh ra viện'},
     {zh:'久病不愈',py:'jiǔ bìng bú yù',vn:'bệnh lâu không khỏi'},
     {zh:'愈来愈好',py:'yù lái yù hǎo',vn:'ngày càng tốt'}
   ],
   patterns:[
     {s:'病 + 愈 / 治愈 / 痊愈',m:'Khỏi bệnh (văn viết)'},
     {s:'愈……愈……',m:'Càng … càng … (= 越……越……, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi bệnh được chữa khỏi hoàn toàn, bác sĩ mới cho anh ấy ra viện.',answer:'只有病彻底治愈了，医生才会让他出院。',answerPy:'Zhǐyǒu bìng chèdǐ zhìyù le, yīshēng cái huì ràng tā chūyuàn.',
      note:'只有……才……; 治愈 (愈 = khỏi).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Bà bị bệnh lâu không khỏi, cả nhà đều rất sốt ruột.',answer:'奶奶久病不愈，全家人都很着急。',answerPy:'Nǎinai jiǔ bìng bú yù, quán jiā rén dōu hěn zháojí.',
      note:'Cấu trúc bốn chữ văn viết 久病不愈; 不 trước thanh 4 đọc bú.',pair:'Biến điệu 不'}
   ]},

  {n:41,zh:'障碍',py:'zhàng\'ài',pos:'Danh từ',vn:'trở ngại, chướng ngại; (y học) rối loạn',hv:'chướng ngại',em:'🚧',lesson:1,
   explain:['Vật cản, điều gây trở ngại (vật chất hoặc tinh thần).','Trong y học: rối loạn chức năng — 睡眠障碍 (rối loạn giấc ngủ), 语言障碍, 能力障碍.'],
   usage:'Hay gặp: 克服障碍, 扫除障碍, 心理障碍, 睡眠障碍, 语言障碍, 障碍物.',
   collo:['克服障碍','心理障碍','睡眠障碍','语言障碍'],
   ex_zh:'用它治愈了一些多动症患儿的精神集中能力障碍。',ex_py:'Yòng tā zhìyùle yìxiē duōdòngzhèng huàn\'ér de jīngshén jízhōng nénglì zhàng\'ài.',ex_vn:'Dùng nó chữa khỏi chứng rối loạn khả năng tập trung ở một số bệnh nhi tăng động.',
   exList:[
     {zh:'用它治愈了一些多动症患儿的精神集中能力障碍。',py:'Yòng tā zhìyùle yìxiē duōdòngzhèng huàn\'ér de jīngshén jízhōng nénglì zhàng\'ài.',vn:'Dùng nó chữa khỏi chứng rối loạn khả năng tập trung ở một số bệnh nhi tăng động.'},
     {zh:'刚到中国时，语言障碍让我吃了不少苦。',py:'Gāng dào Zhōngguó shí, yǔyán zhàng\'ài ràng wǒ chīle bùshǎo kǔ.',vn:'Hồi mới đến Trung Quốc, rào cản ngôn ngữ khiến tôi khổ không ít.'},
     {zh:'只要下定决心，就没有克服不了的障碍。',py:'Zhǐyào xiàdìng juéxīn, jiù méiyǒu kèfú bù liǎo de zhàng\'ài.',vn:'Chỉ cần hạ quyết tâm thì không có trở ngại nào là không vượt qua được.'}
   ],
   colloFull:[
     {zh:'克服障碍',py:'kèfú zhàng\'ài',vn:'vượt qua trở ngại'},
     {zh:'心理障碍',py:'xīnlǐ zhàng\'ài',vn:'rào cản tâm lý'},
     {zh:'睡眠障碍',py:'shuìmián zhàng\'ài',vn:'rối loạn giấc ngủ'},
     {zh:'语言障碍',py:'yǔyán zhàng\'ài',vn:'rào cản ngôn ngữ'},
     {zh:'扫除障碍',py:'sǎochú zhàng\'ài',vn:'dẹp bỏ trở ngại'}
   ],
   patterns:[
     {s:'克服 / 扫除 + 障碍',m:'Vượt qua / dẹp bỏ trở ngại'},
     {s:'……障碍 (y học)',m:'Rối loạn …: 睡眠障碍, 语言障碍'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều người vì có rào cản tâm lý nên không dám nói tiếng Trung trước đám đông.',answer:'很多人因为有心理障碍，所以不敢当众说汉语。',answerPy:'Hěn duō rén yīnwèi yǒu xīnlǐ zhàng\'ài, suǒyǐ bù gǎn dāngzhòng shuō Hànyǔ.',
      note:'因为……所以……; 当众 = trước đám đông.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Chỉ cần dám đối mặt, trở ngại nào cũng vượt qua được.',answer:'只要勇于面对，什么障碍都能克服。',answerPy:'Zhǐyào yǒngyú miànduì, shénme zhàng\'ài dōu néng kèfú.',
      note:'只要……就……; 勇于 ôn bài 7; 什么……都…….',pair:'只要……就……'}
   ]},

  {n:42,zh:'噪音',py:'zàoyīn',pos:'Danh từ',vn:'tiếng ồn',hv:'táo âm',em:'🔊',lesson:1,
   explain:['Âm thanh hỗn loạn, khó chịu, ảnh hưởng đến sức khoẻ, học tập và công việc.','Cũng viết 噪声; 噪音污染 = ô nhiễm tiếng ồn.'],
   usage:'Hay gặp: 噪音污染, 环境噪音, 制造噪音, 减少噪音, 噪音很大. Khác 白噪音 (tiếng ồn trắng — đều đều, dễ chịu).',
   collo:['噪音污染','环境噪音','制造噪音','减少噪音'],
   ex_zh:'受到环境噪音污染的人群，也可用白噪音帮助恢复工作效率。',ex_py:'Shòudào huánjìng zàoyīn wūrǎn de rénqún, yě kě yòng bái zàoyīn bāngzhù huīfù gōngzuò xiàolǜ.',ex_vn:'Những người bị ô nhiễm tiếng ồn môi trường cũng có thể dùng tiếng ồn trắng để giúp khôi phục hiệu suất làm việc.',
   exList:[
     {zh:'受到环境噪音污染的人群，也可用白噪音帮助恢复工作效率。',py:'Shòudào huánjìng zàoyīn wūrǎn de rénqún, yě kě yòng bái zàoyīn bāngzhù huīfù gōngzuò xiàolǜ.',vn:'Những người bị ô nhiễm tiếng ồn môi trường cũng có thể dùng tiếng ồn trắng để giúp khôi phục hiệu suất làm việc.'},
     {zh:'楼上装修的噪音太大了，我根本没法儿复习。',py:'Lóu shang zhuāngxiū de zàoyīn tài dà le, wǒ gēnběn méi fǎr fùxí.',vn:'Tiếng ồn sửa nhà ở tầng trên to quá, tôi hoàn toàn không ôn bài được.'},
     {zh:'晚上十点以后，请不要在宿舍里制造噪音。',py:'Wǎnshang shí diǎn yǐhòu, qǐng bú yào zài sùshè li zhìzào zàoyīn.',vn:'Sau mười giờ tối, xin đừng gây ồn trong ký túc xá.'}
   ],
   colloFull:[
     {zh:'噪音污染',py:'zàoyīn wūrǎn',vn:'ô nhiễm tiếng ồn'},
     {zh:'环境噪音',py:'huánjìng zàoyīn',vn:'tiếng ồn môi trường'},
     {zh:'制造噪音',py:'zhìzào zàoyīn',vn:'gây ồn'},
     {zh:'减少噪音',py:'jiǎnshǎo zàoyīn',vn:'giảm tiếng ồn'},
     {zh:'噪音很大',py:'zàoyīn hěn dà',vn:'tiếng ồn rất lớn'}
   ],
   patterns:[
     {s:'受到噪音污染',m:'Bị ô nhiễm tiếng ồn'},
     {s:'……的噪音太大了',m:'Tiếng ồn của … lớn quá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng ồn ở đây lớn đến mức chúng tôi đành phải hét to mới nghe thấy nhau.',answer:'这里的噪音大得我们只好大声喊才能听见对方。',answerPy:'Zhèlǐ de zàoyīn dà de wǒmen zhǐhǎo dàshēng hǎn cái néng tīngjiàn duìfāng.',
      note:'Bổ ngữ trình độ adj + 得 + mệnh đề; 只好 = đành.',pair:'Bổ ngữ trình độ 得'},
     {promptLang:'vi',prompt:'Để giảm tiếng ồn, thành phố quy định không được bấm còi trong khu dân cư.',answer:'为了减少噪音，城市规定在居民区不许按喇叭。',answerPy:'Wèile jiǎnshǎo zàoyīn, chéngshì guīdìng zài jūmínqū bùxǔ àn lǎba.',
      note:'为了 + mục đích; 不许 = không cho phép.',pair:'为了……'}
   ]},

  {n:43,zh:'给予',py:'jǐyǔ',pos:'Động từ',vn:'cho, dành cho, trao cho',hv:'cấp dữ',em:'🎁',lesson:1,
   explain:['Cho, dành cho (văn viết, trang trọng) — tân ngữ thường là danh từ trừu tượng: 帮助, 支持, 关心, 鼓励, 表扬.','Chú ý đọc jǐyǔ (không đọc gěiyǔ). Cấu trúc: 给予 + người + N, hoặc 对 + người + 给予 + N.'],
   usage:'Hay gặp: 给予帮助, 给予支持, 给予关心, 给予表扬, ……给予我们的礼物. Khẩu ngữ dùng 给.',
   collo:['给予帮助','给予支持','给予表扬','大自然给予我们的'],
   ex_zh:'白噪音实际上是大自然给予我们的声音暗示。',ex_py:'Bái zàoyīn shíjì shang shì dà zìrán jǐyǔ wǒmen de shēngyīn ànshì.',ex_vn:'Tiếng ồn trắng thực chất là ám hiệu âm thanh mà thiên nhiên dành cho chúng ta.',
   exList:[
     {zh:'白噪音实际上是大自然给予我们的声音暗示。',py:'Bái zàoyīn shíjì shang shì dà zìrán jǐyǔ wǒmen de shēngyīn ànshì.',vn:'Tiếng ồn trắng thực chất là ám hiệu âm thanh mà thiên nhiên dành cho chúng ta.'},
     {zh:'感谢老师一直以来给予我的关心和帮助。',py:'Gǎnxiè lǎoshī yìzhí yǐlái jǐyǔ wǒ de guānxīn hé bāngzhù.',vn:'Cảm ơn thầy cô bấy lâu nay đã dành cho em sự quan tâm và giúp đỡ.'},
     {zh:'学校对这次比赛获奖的同学给予了表扬。',py:'Xuéxiào duì zhè cì bǐsài huò jiǎng de tóngxué jǐyǔle biǎoyáng.',vn:'Nhà trường đã tuyên dương những học sinh đoạt giải trong cuộc thi lần này.'}
   ],
   colloFull:[
     {zh:'给予帮助',py:'jǐyǔ bāngzhù',vn:'dành sự giúp đỡ'},
     {zh:'给予支持',py:'jǐyǔ zhīchí',vn:'dành sự ủng hộ'},
     {zh:'给予表扬',py:'jǐyǔ biǎoyáng',vn:'tuyên dương'},
     {zh:'大自然给予我们的',py:'dà zìrán jǐyǔ wǒmen de',vn:'thiên nhiên ban tặng cho chúng ta'},
     {zh:'给予关心',py:'jǐyǔ guānxīn',vn:'dành sự quan tâm'}
   ],
   patterns:[
     {s:'对 + người + 给予 + N (帮助 / 表扬)',m:'Dành cho ai … (văn viết)'},
     {s:'A 给予 B 的 + N',m:'… mà A dành cho B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi bạn bè gặp khó khăn, chúng ta nên dành cho họ sự ủng hộ.',answer:'朋友遇到困难时，我们应该给予他们支持。',answerPy:'Péngyou yùdào kùnnan shí, wǒmen yīnggāi jǐyǔ tāmen zhīchí.',
      note:'……时 = khi …; 给予 + người + N.',pair:'……时 (khi …)'},
     {promptLang:'vi',prompt:'Thiên nhiên đã ban cho chúng ta biết bao nhiêu món quà quý giá!',answer:'大自然给予了我们多少宝贵的礼物啊！',answerPy:'Dà zìrán jǐyǔle wǒmen duōshao bǎoguì de lǐwù a!',
      note:'Câu cảm thán 多少……啊!',pair:'Câu cảm thán'}
   ]},

  {n:44,zh:'嘿',py:'hēi',pos:'Thán từ',vn:'này, nè (gọi, nhắc)',hv:'hắc',em:'👋',lesson:1,
   explain:['Thán từ dùng để gọi, nhắc người khác chú ý (này!, nè!).','Cũng biểu thị ngạc nhiên, đắc ý: 嘿，真没想到! Khẩu ngữ, thân mật.'],
   usage:'Hay gặp: 嘿，你……, 嘿，快看!, 嘿嘿 (tiếng cười hì hì). Chỉ dùng với người quen; với người lạ nên dùng 你好 / 请问.',
   collo:['嘿，你好','嘿，快看','嘿，别走','嘿嘿地笑'],
   ex_zh:'它清晰地对我们说：“嘿，你可以放松精神，不必焦虑啦。”',ex_py:'Tā qīngxī de duì wǒmen shuō: "Hēi, nǐ kěyǐ fàngsōng jīngshén, búbì jiāolǜ la."',ex_vn:'Nó nói với chúng ta thật rõ ràng: "Này, bạn có thể thả lỏng tinh thần, không cần lo âu nữa đâu."',
   exList:[
     {zh:'它清晰地对我们说：“嘿，你可以放松精神，不必焦虑啦。”',py:'Tā qīngxī de duì wǒmen shuō: "Hēi, nǐ kěyǐ fàngsōng jīngshén, búbì jiāolǜ la."',vn:'Nó nói với chúng ta thật rõ ràng: "Này, bạn có thể thả lỏng tinh thần, không cần lo âu nữa đâu."'},
     {zh:'嘿，快看，天上有彩虹！',py:'Hēi, kuài kàn, tiān shang yǒu cǎihóng!',vn:'Này, nhìn nhanh lên, trên trời có cầu vồng!'},
     {zh:'嘿，小王，你的书忘拿了！',py:'Hēi, Xiǎo Wáng, nǐ de shū wàng ná le!',vn:'Này, Tiểu Vương, cậu quên cầm sách rồi!'}
   ],
   colloFull:[
     {zh:'嘿，你好',py:'hēi, nǐ hǎo',vn:'này, chào cậu'},
     {zh:'嘿，快看',py:'hēi, kuài kàn',vn:'này, nhìn kìa'},
     {zh:'嘿，别走',py:'hēi, bié zǒu',vn:'này, đừng đi'},
     {zh:'嘿嘿地笑',py:'hēihēi de xiào',vn:'cười hì hì'},
     {zh:'嘿，真没想到',py:'hēi, zhēn méi xiǎngdào',vn:'ồ, thật không ngờ'}
   ],
   patterns:[
     {s:'嘿，+ tên / 你 + ……',m:'Này, … (gọi người quen)'},
     {s:'嘿，真没想到……',m:'Ồ, thật không ngờ … (ngạc nhiên)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Này, khoan đi đã, tớ còn có chuyện muốn nói với cậu.',answer:'嘿，先别走，我还有话要跟你说。',answerPy:'Hēi, xiān bié zǒu, wǒ hái yǒu huà yào gēn nǐ shuō.',
      note:'先别……: khoan … đã; 有话要跟……说.',pair:'别 + V (khuyên ngăn)'},
     {promptLang:'vi',prompt:'Ồ, thật không ngờ cậu cũng thích nghe tiếng mưa để ngủ!',answer:'嘿，真没想到你也喜欢听着雨声睡觉！',answerPy:'Hēi, zhēn méi xiǎngdào nǐ yě xǐhuan tīngzhe yǔ shēng shuìjiào!',
      note:'V1着 + V2: làm V2 trong trạng thái V1.',pair:'V着 + V (trạng thái đi kèm)'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 我们都爱白噪音',
   preQuiz:[
     {q:'会还没开始时，屋子里怎么样？',opts:['一片寂静','一片嘈杂','一个人也没有'],ans:1},
     {q:'有人说了句“好安静啊”以后，大家怎么样？',opts:['都不说话了','马上又聊了起来','离开了房间'],ans:1},
     {q:'课文认为，屋子里突然安静下来的现象是什么的结果？',opts:['千万年自然选择','会议的规定','大家都累了'],ans:0},
     {q:'下面哪种声音课文没有提到？',opts:['下雨的声音','波浪拍打岩石的声音','汽车的喇叭声'],ans:2},
     {q:'在森林里，鸟叫停止意味着什么？',opts:['有了险情','天快黑了','鸟儿要睡觉了'],ans:0},
     {q:'森林里的警报什么时候才会解除？',opts:['所有动物都静下来时','鸟叫重新开始时','下雨的时候'],ans:1},
     {q:'为什么说鸟叫、虫叫是危险举动？',opts:['会吵醒别的动物','叫声暴露了自己，很容易惹祸','会让自己很累'],ans:1},
     {q:'鸟和虫为什么还是要叫？',opts:['为了寻求异性、延续后代','为了吓跑敌人','因为它们很快乐'],ans:0},
     {q:'我们的祖先最焦虑的事情是什么？',opts:['周围一片寂静','鸟叫声太大','找不到食物'],ans:0},
     {q:'对白噪音减弱越敏感的生物会怎么样？',opts:['越容易生病','存活和找到配偶的可能性越大','越不喜欢鸟叫'],ans:1},
     {q:'会议室里大量的白噪音暗示着什么？',opts:['危险','安全','会议要开始了'],ans:1},
     {q:'医生怎样利用白噪音？',opts:['用它代替所有的药','对神经系统疾病患者进行辅助性治疗','让病人整夜不睡觉'],ans:1},
     {q:'课文最后说，白噪音在告诉我们什么？',opts:['要马上提高警惕','可以放松精神，不必焦虑','要马上闭嘴'],ans:1}
   ],
   lines:[
    {sp:0,zh:'你有过这样的经验吗？会还没开始，屋子里一片嘈杂，突然房间里莫名其妙地一片寂静，有人说了句“好安静啊”，马上大家又聊了起来。这是什么现象？其实这是千万年自然选择的结果，没有学会在白噪音减退时闭嘴的人，在自然界早已被淘汰掉了。',
     py:'Nǐ yǒuguo zhèyàng de jīngyàn ma? Huì hái méi kāishǐ, wūzi li yí piàn cáozá, tūrán fángjiān li mòmíng-qímiào de yí piàn jìjìng, yǒu rén shuōle jù "hǎo ānjìng a", mǎshàng dàjiā yòu liáole qǐlái. Zhè shì shénme xiànxiàng? Qíshí zhè shì qiān wàn nián zìrán xuǎnzé de jiéguǒ, méiyǒu xuéhuì zài bái zàoyīn jiǎntuì shí bì zuǐ de rén, zài zìránjiè zǎoyǐ bèi táotài diào le.',
     vn:'Bạn đã từng có trải nghiệm như thế này chưa? Cuộc họp còn chưa bắt đầu, trong phòng ồn ào cả lên, đột nhiên cả căn phòng im phăng phắc một cách khó hiểu, có người nói một câu "Yên tĩnh quá nhỉ", thế là mọi người lập tức lại trò chuyện rôm rả. Đây là hiện tượng gì? Thật ra đây là kết quả của sự chọn lọc tự nhiên suốt hàng nghìn, hàng vạn năm: những ai không học được cách im lặng khi tiếng ồn trắng giảm đi thì đã sớm bị đào thải khỏi giới tự nhiên.'},
    {sp:0,zh:'什么是白噪音？我们不妨形象地描绘一下：白噪音听上去像下雨的声音，或者像波浪拍打岩石的声音，或者像微风抚摸树叶时发出的沙沙声。',
     py:'Shénme shì bái zàoyīn? Wǒmen bùfáng xíngxiàng de miáohuì yíxià: bái zàoyīn tīng shàngqu xiàng xià yǔ de shēngyīn, huòzhě xiàng bōlàng pāidǎ yánshí de shēngyīn, huòzhě xiàng wēifēng fǔmō shùyè shí fāchū de shāshā shēng.',
     vn:'Tiếng ồn trắng là gì? Chúng ta thử miêu tả một cách hình ảnh: tiếng ồn trắng nghe giống tiếng mưa rơi, hoặc giống tiếng sóng vỗ vào đá, hoặc giống tiếng xào xạc phát ra khi làn gió nhẹ vuốt ve lá cây.'},
    {sp:0,zh:'在森林里，鸟的叫声就是白噪音，也是天然的警报器。鸟在叫，说明没有危险，鸟叫停止，意味着有了险情，务必要提高警惕了，这时，所有动物都会静下来，只有当鸟叫重新开始时，警报才会解除。',
     py:'Zài sēnlín li, niǎo de jiàoshēng jiù shì bái zàoyīn, yě shì tiānrán de jǐngbàoqì. Niǎo zài jiào, shuōmíng méiyǒu wēixiǎn, niǎo jiào tíngzhǐ, yìwèizhe yǒule xiǎnqíng, wùbì yào tígāo jǐngtì le, zhè shí, suǒyǒu dòngwù dōu huì jìng xiàlái, zhǐyǒu dāng niǎo jiào chóngxīn kāishǐ shí, jǐngbào cái huì jiěchú.',
     vn:'Trong rừng, tiếng chim hót chính là tiếng ồn trắng, cũng là chiếc còi báo động tự nhiên. Chim còn hót nghĩa là không có nguy hiểm; chim ngừng hót có nghĩa là đã có biến, nhất thiết phải nâng cao cảnh giác; lúc này mọi con vật đều im lặng, chỉ khi tiếng chim hót bắt đầu trở lại, báo động mới được giải trừ.'},
    {sp:0,zh:'其实不论是鸟叫，还是虫叫，都是寻求异性时，不得已而采取的危险举动，因为叫声暴露了自己，很容易惹祸。倘若不叫，雌雄两性谁也发现不了对方，“婚事”就更谈不上了，那么，祖先遗留下的DNA怎么送给异性嘛。既要延续后代，又要保护自己，那就只有用最大的声音，拼命呼唤，同时竖起耳朵，提高警惕，有危险马上闭嘴。原始社会之前，我们的祖先还没有进化成人类，他们最喜欢的事情，可能就是在鸟叫声中无忧无虑地睡大觉。最焦虑的事情就是周围一片寂静，因为那说明危险正在靠拢。我们喜欢听鸟的叫声，因为那会让紧张的神经放松下来。经过数千万年的自然选择，对白噪音减弱越敏感的生物，存活和找到配偶的可能性越大，这种意识在DNA中保留下来，并且世代相传。',
     py:'Qíshí búlùn shì niǎo jiào, háishi chóng jiào, dōu shì xúnqiú yìxìng shí, bùdéyǐ ér cǎiqǔ de wēixiǎn jǔdòng, yīnwèi jiàoshēng bàolùle zìjǐ, hěn róngyì rě huò. Tǎngruò bú jiào, cíxióng liǎng xìng shéi yě fāxiàn bu liǎo duìfāng, "hūnshì" jiù gèng tán bu shàng le, nàme, zǔxiān yíliú xià de DNA zěnme sòng gěi yìxìng ma. Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ, nà jiù zhǐyǒu yòng zuì dà de shēngyīn, pīnmìng hūhuàn, tóngshí shùqǐ ěrduo, tígāo jǐngtì, yǒu wēixiǎn mǎshàng bì zuǐ. Yuánshǐ shèhuì zhīqián, wǒmen de zǔxiān hái méiyǒu jìnhuà chéng rénlèi, tāmen zuì xǐhuan de shìqing, kěnéng jiù shì zài niǎo jiào shēng zhōng wúyōu-wúlǜ de shuì dà jiào. Zuì jiāolǜ de shìqing jiù shì zhōuwéi yí piàn jìjìng, yīnwèi nà shuōmíng wēixiǎn zhèngzài kàolǒng. Wǒmen xǐhuan tīng niǎo de jiàoshēng, yīnwèi nà huì ràng jǐnzhāng de shénjīng fàngsōng xiàlái. Jīngguò shù qiān wàn nián de zìrán xuǎnzé, duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng yuè dà, zhè zhǒng yìshí zài DNA zhōng bǎoliú xiàlái, bìngqiě shìdài xiāngchuán.',
     vn:'Thật ra dù là chim kêu hay côn trùng kêu, đều là hành động nguy hiểm bất đắc dĩ phải làm khi tìm kiếm bạn khác giới, vì tiếng kêu làm lộ chính mình, rất dễ rước hoạ. Nhưng nếu không kêu thì con đực, con cái chẳng con nào tìm ra được đối phương, "chuyện cưới xin" lại càng không thể nói tới; như vậy, DNA mà tổ tiên để lại làm sao trao cho con khác giới được chứ. Vừa phải duy trì nòi giống, lại vừa phải bảo vệ bản thân, thì chỉ còn cách dùng tiếng to nhất ra sức gọi nhau, đồng thời dỏng tai lên, nâng cao cảnh giác, hễ có nguy hiểm là lập tức im bặt. Trước thời xã hội nguyên thuỷ, khi tổ tiên chúng ta còn chưa tiến hoá thành loài người, việc họ thích nhất có lẽ là ngủ một giấc thật say, vô tư lự trong tiếng chim hót. Điều khiến họ lo âu nhất là xung quanh im phăng phắc, vì điều đó cho thấy nguy hiểm đang đến gần. Chúng ta thích nghe tiếng chim hót, vì nó làm thần kinh căng thẳng dịu xuống. Qua hàng chục triệu năm chọn lọc tự nhiên, sinh vật nào càng nhạy cảm với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn; ý thức này được lưu giữ trong DNA và truyền từ đời này sang đời khác.'},
    {sp:0,zh:'会议室里的嘈杂声就是白噪音，大量的白噪音暗示着安全。当嘈杂声减弱时，提示大家要警惕，然后闭嘴、观察，这是人类大脑深处的预警意识。当有人说“好安静啊”时，大家发现没有危险，于是，报警解除。',
     py:'Huìyìshì li de cáozá shēng jiù shì bái zàoyīn, dàliàng de bái zàoyīn ànshìzhe ānquán. Dāng cáozá shēng jiǎnruò shí, tíshì dàjiā yào jǐngtì, ránhòu bì zuǐ, guānchá, zhè shì rénlèi dànǎo shēnchù de yùjǐng yìshí. Dāng yǒu rén shuō "hǎo ānjìng a" shí, dàjiā fāxiàn méiyǒu wēixiǎn, yúshì, bàojǐng jiěchú.',
     vn:'Tiếng ồn ào trong phòng họp chính là tiếng ồn trắng, nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn. Khi tiếng ồn ào yếu đi, nó nhắc mọi người phải cảnh giác, rồi im lặng, quan sát — đây là ý thức cảnh báo sớm nằm sâu trong não bộ con người. Khi có người nói "Yên tĩnh quá nhỉ", mọi người phát hiện ra không có nguy hiểm, thế là báo động được giải trừ.'},
    {sp:0,zh:'白噪音会让我们有安全感，从而放松身心。鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手：人们利用它对神经系统疾病患者进行辅助性治疗，成功地减轻了病人的症状；用它治愈了一些多动症患儿的精神集中能力障碍；受到环境噪音污染的人群，也可用白噪音帮助恢复工作效率……',
     py:'Bái zàoyīn huì ràng wǒmen yǒu ānquángǎn, cóng\'ér fàngsōng shēnxīn. Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu: rénmen lìyòng tā duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo, chénggōng de jiǎnqīngle bìngrén de zhèngzhuàng; yòng tā zhìyùle yìxiē duōdòngzhèng huàn\'ér de jīngshén jízhōng nénglì zhàng\'ài; shòudào huánjìng zàoyīn wūrǎn de rénqún, yě kě yòng bái zàoyīn bāngzhù huīfù gōngzuò xiàolǜ……',
     vn:'Tiếng ồn trắng khiến chúng ta có cảm giác an toàn, nhờ đó thư giãn cả thân lẫn tâm. Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ: người ta dùng nó để điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh, giảm nhẹ thành công các triệu chứng của người bệnh; dùng nó chữa khỏi chứng rối loạn khả năng tập trung ở một số bệnh nhi tăng động; những người bị ô nhiễm tiếng ồn môi trường cũng có thể dùng tiếng ồn trắng để giúp khôi phục hiệu suất làm việc…'},
    {sp:0,zh:'白噪音实际上是大自然给予我们的声音暗示，它清晰地对我们说：“嘿，你可以放松精神，不必焦虑啦。”',
     py:'Bái zàoyīn shíjì shang shì dà zìrán jǐyǔ wǒmen de shēngyīn ànshì, tā qīngxī de duì wǒmen shuō: "Hēi, nǐ kěyǐ fàngsōng jīngshén, búbì jiāolǜ la."',
     vn:'Tiếng ồn trắng thực chất là ám hiệu âm thanh mà thiên nhiên dành cho chúng ta, nó nói với chúng ta thật rõ ràng: "Này, bạn có thể thả lỏng tinh thần, không cần phải lo âu nữa đâu."'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 不得已—不得不 lấy từ sách (tr. 131, 做一做 theo đáp án sách); 暗示—提示, 功效—效果 tự thêm (暗示, 提示, 功效 đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'不得已 — 不得不',
   same:'Đều biểu thị không có cách nào, không thể không làm như vậy; đều có thể đứng trước động từ.',
   sameEx:{zh:'半路上车坏了，我们不得已／不得不又回来了。',vn:'Giữa đường xe hỏng, chúng tôi đành phải quay về.'},
   items:[
     {word:'不得已',points:[
       'Là TÍNH TỪ: làm định ngữ được — 不得已的办法 / 措施.',
       'Có dạng "chủ ngữ + 是 + 不得已", hoặc đứng một mình thành một phân câu: ……，不得已，…….',
       'Đứng được sau 由于 / 出于 / 因为: 出于不得已.'
     ],ex:[{zh:'这也是不得已的办法，你试试吧。',vn:'Đây cũng là cách bất đắc dĩ thôi, anh cứ thử xem.'},
          {zh:'出于不得已，我只好把孩子放在亲戚家里。',vn:'Vì bất đắc dĩ, tôi đành gửi con ở nhà họ hàng.'}]},
     {word:'不得不',points:[
       'Là PHÓ TỪ: chỉ đứng trước động từ — 不得不 + V.',
       'Không làm định ngữ (không nói 不得不的办法), không đứng sau 是 làm vị ngữ, không đứng một mình thành phân câu.',
       'Không dùng sau 由于 / 出于 / 因为.'
     ],ex:[{zh:'由于资金不足，这项工程不得不停止。',vn:'Do thiếu vốn, công trình này buộc phải dừng lại.'},
          {zh:'雨太大了，运动会不得不推迟。',vn:'Mưa to quá, hội thao buộc phải hoãn lại.'}]}
   ],
   quiz:[
     {sentence:'她这么做也是＿＿，你别怪她了。',options:['不得已','不得不'],answer:0,why:'Sau 是 làm vị ngữ, không có động từ theo sau → chỉ 不得已. 不得不 phải có động từ đi sau.'},
     {sentence:'裁员是公司＿＿的选择，谁都不愿意这样做。',options:['不得已','不得不'],answer:0,why:'Làm định ngữ trước 的选择 → tính từ 不得已. 不得不 là phó từ, không làm định ngữ. (裁员 ôn bài 7)'},
     {sentence:'车票卖完了，＿＿，我们只好坐第二天的火车。',options:['不得已','不得不'],answer:0,why:'Đứng một mình thành một phân câu → chỉ 不得已.'},
     {sentence:'雨下得太大，运动会＿＿推迟了。',options:['不得已','不得不'],answer:1,both:true,why:'Đứng trước động từ 推迟 → cả hai đều được (điểm chung); nói thường ngày hay dùng 不得不.'}
   ],
   sgk:{
     chung:{t:'都表示没有办法，不能不这样做，都可以修饰动词。',vn:'Đều biểu thị không có cách nào, không thể không làm như vậy; đều có thể bổ nghĩa cho động từ.',vd:'半路上车坏了，我们不得已／不得不又回来了。',vdVn:'Giữa đường xe hỏng, chúng tôi đành phải quay về.'},
     khac:[
       {a:{t:'形容词，可以修饰名词。',vn:'Là tính từ, có thể bổ nghĩa cho danh từ.',vd:'这也是不得已的办法，你试试吧。',vdVn:'Đây cũng là cách bất đắc dĩ thôi, anh cứ thử xem.'},
        b:{t:'只能修饰动词。',vn:'Chỉ có thể bổ nghĩa cho động từ.',vd:'由于资金不足，这项工程不得不停止。',vdVn:'Do thiếu vốn, công trình này buộc phải dừng lại.'}},
       {a:{t:'可以有“主语+是+不得已”的用法，“不得已”也可单独成为一个小句。',vn:'Có cách dùng "chủ ngữ + 是 + 不得已"; 不得已 cũng có thể đứng một mình thành một phân câu.',vd:'①他半夜动身也是不得已。　②屋里坐不下，不得已，我们只好站在外边。',vdVn:'① Anh ấy nửa đêm lên đường cũng là bất đắc dĩ. ② Trong nhà không đủ chỗ ngồi, bất đắc dĩ, chúng tôi đành đứng ở ngoài.'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.',vd:''}},
       {a:{t:'可以用在“由于/出于/因为”之后。',vn:'Có thể dùng sau 由于 / 出于 / 因为.',vd:'出于不得已，我只好把孩子放在亲戚家里。',vdVn:'Vì bất đắc dĩ, tôi đành gửi con ở nhà họ hàng.'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.',vd:''}}
     ],
     lamThu:[
       {s:'实在是＿＿，我把房子卖了。',dap:[true,false],
        giai:'Sau 是 làm vị ngữ, phía sau không có động từ → 不得已 (chủ ngữ + 是 + 不得已).'},
       {s:'父亲去世以后，他＿＿放弃学业，出去打工。',dap:[true,true],
        giai:'Đứng trước động từ 放弃 → cả hai đều được (điểm chung). Đáp án sách: 不得已 / 不得不.'},
       {s:'这是＿＿的措施，请大家谅解。',dap:[true,false],
        giai:'Làm định ngữ trước 的措施 → chỉ tính từ 不得已.'},
       {s:'这样安排也是出于＿＿，你就别抱怨了。',dap:[true,false],
        giai:'Sau 出于 → chỉ 不得已; 不得不 không đứng sau 出于.'}
     ]
   }},

  {pair:'暗示 — 提示',
   same:'Đều là động từ (cũng dùng như danh từ), đều có nghĩa làm cho người khác chú ý, hiểu ra điều gì.',
   sameEx:{zh:'嘈杂声突然减弱，提示／暗示大家可能有危险。',vn:'Tiếng ồn ào đột nhiên yếu đi, nhắc / ngầm báo mọi người có thể có nguy hiểm.'},
   items:[
     {word:'暗示',points:[
       'KHÔNG nói thẳng; dùng hàm ý, cử chỉ, ánh mắt, âm thanh để người khác tự hiểu (ngầm).',
       'Hay gặp: 暗示着……, 用眼神暗示, 心理暗示 (ám thị tâm lý).',
       'Chủ ngữ có thể là sự vật, hiện tượng: 乌云暗示着要下雨.'
     ],ex:[{zh:'大量的白噪音暗示着安全。',vn:'Nhiều tiếng ồn trắng ngầm báo hiệu sự an toàn.'},
          {zh:'他看了看手表，暗示我们该走了。',vn:'Anh ấy nhìn đồng hồ, ngầm ra hiệu chúng tôi nên đi rồi.'}]},
     {word:'提示',points:[
       'Nói ra, chỉ ra RÕ RÀNG để nhắc người khác chú ý, hoặc gợi ý cho người khác nghĩ ra.',
       'Hay gặp: 提示大家……, 给个提示, 温馨提示, 根据提示.',
       'Không mang nghĩa "ngầm, bóng gió"; không nói 心理提示 (phải là 心理暗示).'
     ],ex:[{zh:'老师提示我们：考试时要先做容易的题。',vn:'Cô nhắc chúng tôi: khi thi phải làm câu dễ trước.'},
          {zh:'根据提示，简述课文主要内容。',vn:'Dựa vào gợi ý, thuật lại ngắn gọn nội dung chính của bài khoá.'}]}
   ],
   quiz:[
     {sentence:'他不停地看手表，＿＿我们时间不早了。',options:['暗示','提示'],answer:0,why:'Chỉ nhìn đồng hồ, không nói ra → ra hiệu ngầm → 暗示.'},
     {sentence:'这道题太难了，老师给了我们一个＿＿。',options:['暗示','提示'],answer:1,why:'Gợi ý rõ ràng để học sinh nghĩ ra cách làm → 提示.'},
     {sentence:'积极的心理＿＿能让人更有信心。',options:['暗示','提示'],answer:0,why:'Cụm cố định 心理暗示 (ám thị tâm lý).'},
     {sentence:'温馨＿＿：请带好您的随身物品。',options:['暗示','提示'],answer:1,why:'Thông báo công khai 温馨提示 (lời nhắc thân thiện).'}
   ]},

  {pair:'功效 — 效果',
   same:'Đều là danh từ, chỉ kết quả tốt, tác dụng mà một việc, một vật mang lại.',
   sameEx:{zh:'这种药的功效／效果很好。',vn:'Thuốc này có hiệu quả rất tốt.'},
   items:[
     {word:'功效',points:[
       'Văn viết; nhấn TÁC DỤNG vốn có của một vật, một phương pháp (thuốc, thực phẩm, liệu pháp).',
       'Hay gặp: 有……的功效, 发挥功效, 功效显著.',
       'Ít dùng cho hoạt động, sự kiện: không nói 演出的功效, 宣传的功效.'
     ],ex:[{zh:'鉴于白噪音有这样的功效，它成了医生的好帮手。',vn:'Xét thấy tiếng ồn trắng có công hiệu như vậy, nó trở thành trợ thủ của bác sĩ.'},
          {zh:'绿茶有提神的功效。',vn:'Trà xanh có tác dụng làm tỉnh táo.'}]},
     {word:'效果',points:[
       'Dùng cả khẩu ngữ lẫn văn viết; chỉ KẾT QUẢ mà một hành động, một việc làm đạt được.',
       'Hay gặp: 学习效果, 效果很好 / 不理想, 取得效果.',
       'Dùng được cho hoạt động, sự kiện và hiệu ứng: 演出效果, 宣传效果, 音响效果, 特殊效果 — những chỗ này không dùng 功效.'
     ],ex:[{zh:'这种学习方法的效果不太理想。',vn:'Hiệu quả của phương pháp học này không lý tưởng lắm.'},
          {zh:'这个剧场的音响效果特别好。',vn:'Hiệu ứng âm thanh của nhà hát này đặc biệt tốt.'}]}
   ],
   quiz:[
     {sentence:'这次宣传活动的＿＿很不错，报名的人特别多。',options:['功效','效果'],answer:1,why:'Kết quả của một hoạt động → 效果. 功效 dùng cho tác dụng của thuốc, liệu pháp.'},
     {sentence:'中医认为，这种草药有止血的＿＿。',options:['功效','效果'],answer:0,both:true,why:'Tác dụng vốn có của vị thuốc → 功效 tự nhiên nhất (văn viết); 效果 cũng chấp nhận được.'},
     {sentence:'电影里的特殊＿＿非常逼真。',options:['功效','效果'],answer:1,why:'特殊效果 (hiệu ứng đặc biệt) là cụm cố định với 效果.'},
     {sentence:'他换了一种复习方法，＿＿马上就不一样了。',options:['功效','效果'],answer:1,why:'Kết quả của việc học → 效果 (khẩu ngữ, hoạt động).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'神经',hv:'thần kinh',vn:'thần kinh',note:'Trùng khít. 神经系统 = hệ thần kinh.'},
    {zh:'生物',hv:'sinh vật',vn:'sinh vật; môn sinh học',note:'Trùng khít; thêm nghĩa tên môn học 生物课.'},
    {zh:'进化',hv:'tiến hoá',vn:'tiến hoá',note:'Trùng khít. 进化论 = thuyết tiến hoá.'},
    {zh:'原始',hv:'nguyên thuỷ',vn:'nguyên thuỷ; gốc',note:'原始社会 = xã hội nguyên thuỷ; nhưng 原始森林 = rừng nguyên sinh, 原始数据 = dữ liệu gốc.'},
    {zh:'岩石',hv:'nham thạch',vn:'đá',note:'"Nham thạch" tiếng Việt hay nghĩ tới dung nham núi lửa; 岩石 chỉ là đá nói chung.'},
    {zh:'祖先',hv:'tổ tiên',vn:'tổ tiên',note:'Trùng khít.'},
    {zh:'配偶',hv:'phối ngẫu',vn:'vợ / chồng, bạn đời',note:'Trùng khít (văn bản pháp lý).'},
    {zh:'障碍',hv:'chướng ngại',vn:'trở ngại; rối loạn',note:'Cùng gốc "chướng ngại"; trong y học 睡眠障碍 = rối loạn giấc ngủ.'},
    {zh:'症状',hv:'chứng trạng',vn:'triệu chứng',note:'"Chứng trạng" ít dùng; tiếng Việt quen nói "triệu chứng" — nghĩa như nhau.'},
    {zh:'淘汰',hv:'đào thải',vn:'đào thải, loại',note:'Trùng khít. 被淘汰 = bị loại (thi đấu).'},
    {zh:'暗示',hv:'ám thị',vn:'ngụ ý, ra hiệu ngầm',note:'心理暗示 = ám thị tâm lý (trùng khít).'},
    {zh:'功效',hv:'công hiệu',vn:'công hiệu, tác dụng',note:'Trùng khít — "thuốc rất công hiệu".'}
  ],
  idiom:[
    {zh:'不得已',hv:'bất đắc dĩ',vn:'bất đắc dĩ',note:'Trùng khít cả âm lẫn nghĩa — nhớ nó là TÍNH TỪ (不得已的办法).'},
    {zh:'莫名其妙',hv:'mạc danh kỳ diệu',vn:'khó hiểu, vô cớ',note:'"Không ai gọi tên được cái diệu của nó" → chẳng hiểu ra sao.'},
    {zh:'理所当然',hv:'lý sở đương nhiên',vn:'đương nhiên',note:'"Lẽ dĩ nhiên phải thế" — "đương nhiên" dễ nhớ.'},
    {zh:'无忧无虑',hv:'vô ưu vô lự',vn:'vô tư lự',note:'Ôn bài 8; trong bài: 无忧无虑地睡大觉.'},
    {zh:'世代相传',hv:'thế đại tương truyền',vn:'truyền qua nhiều đời',note:'"Tương truyền" tiếng Việt cũng có nghĩa truyền lại.'}
  ],
  trap:[
    {zh:'暴露',hv:'bạo lộ',vn:'bộc lộ, để lộ',
     warn:'Đừng hiểu 暴 là "bạo lực". 暴露 = để lộ ra (thường là điều bất lợi): 暴露目标 = lộ mục tiêu, 暴露问题 = bộc lộ vấn đề.'},
    {zh:'给予',hv:'cấp dữ',vn:'cho, dành cho',
     warn:'给 ở đây đọc jǐ (không đọc gěi). Hán Việt "cấp" như trong "cung cấp"; 给予帮助 = dành sự giúp đỡ.'},
    {zh:'世代',hv:'thế đại',vn:'nhiều đời',
     warn:'Dễ nhầm là "thế hệ" (一代人). 世代 nhấn nhiều đời nối tiếp: 世代相传 = truyền qua nhiều đời.'},
    {zh:'雌雄',hv:'thư hùng',vn:'đực cái',
     warn:'Tiếng Việt "thư hùng" chỉ còn trong "trận thư hùng" (thắng thua). Nghĩa gốc 雌 = cái, 雄 = đực — chú ý thứ tự ngược tiếng Việt "đực cái".'},
    {zh:'靠拢',hv:'kháo lũng',vn:'xích lại gần',
     warn:'Âm Hán Việt không gợi nghĩa gì; nhớ 靠 = sát vào (靠近), 拢 = gom lại → xích lại gần.'},
    {zh:'噪音',hv:'táo âm',vn:'tiếng ồn',
     warn:'噪 (bộ 口 — tiếng ồn), 燥 (bộ 火 — khô, 干燥) và 躁 (bộ 足 — nóng nảy, 急躁 bài 7) đều đọc zào, đều âm "táo" — rất dễ viết nhầm.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'屋子里一片',right:'嘈杂'},
  {left:'波浪拍打',right:'岩石'},
  {left:'微风抚摸',right:'树叶'},
  {left:'提高',right:'警惕'},
  {left:'警报',right:'解除'},
  {left:'延续',right:'后代'},
  {left:'拼命',right:'呼唤'},
  {left:'竖起',right:'耳朵'},
  {left:'原始',right:'社会'},
  {left:'紧张的',right:'神经'},
  {left:'找到',right:'配偶'},
  {left:'世代',right:'相传'},
  {left:'神经系统',right:'疾病'},
  {left:'辅助性',right:'治疗'},
  {left:'减轻',right:'症状'},
  {left:'环境噪音',right:'污染'},
  {left:'恢复',right:'工作效率'},
  {left:'放松',right:'身心'},
  {left:'自然',right:'选择'},
  {left:'预警',right:'意识'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'睡不着的时候，我喜欢打开手机听一会儿下雨的',blank:'白噪音',post:'。',hint:'(tiếng ồn trắng)',ans:'白噪音'},
  {pre:'车站里人来人往，十分',blank:'嘈杂',post:'，我连广播都听不清。',hint:'(ồn ào)',ans:'嘈杂'},
  {pre:'他',blank:'莫名其妙',post:'地冲我发了一通火，我到现在都不知道为什么。',hint:'(khó hiểu, vô cớ)',ans:'莫名其妙'},
  {pre:'企业如果不创新，迟早会被市场',blank:'淘汰',post:'。',hint:'(đào thải)',ans:'淘汰'},
  {pre:'班会上，每个同学都',blank:'描绘',post:'了自己十年后的样子。',hint:'(miêu tả)',ans:'描绘'},
  {pre:'晚上躺在海边，听着一阵阵',blank:'波浪',post:'声，我很快就睡着了。',hint:'(sóng)',ans:'波浪'},
  {pre:'一只小鸟站在',blank:'岩石',post:'上，好奇地打量着我们。',hint:'(tảng đá)',ans:'岩石'},
  {pre:'奶奶轻轻地',blank:'抚摸',post:'着我的头，慈祥地笑了。',hint:'(vuốt ve, xoa)',ans:'抚摸'},
  {pre:'老师耐心的解释',blank:'解除',post:'了我的顾虑。',hint:'(xoá bỏ)',ans:'解除'},
  {pre:'这次考试',blank:'暴露',post:'了我在语法方面的很多问题。',hint:'(bộc lộ)',ans:'暴露'},
  {pre:'弟弟又在学校',blank:'惹祸',post:'了，妈妈被老师叫到了学校。',hint:'(gây chuyện, gây hoạ)',ans:'惹祸'},
  {pre:'这种鸟',blank:'雌雄',post:'很难分辨，连专家也常常认错。',hint:'(đực cái)',ans:'雌雄'},
  {pre:'据说狗的',blank:'祖先',post:'是狼。',hint:'(tổ tiên)',ans:'祖先'},
  {pre:'这是上一任经理',blank:'遗留',post:'下来的问题，处理起来很麻烦。',hint:'(để lại)',ans:'遗留'},
  {pre:'你别生气',blank:'嘛',post:'，我不是故意的。',hint:'(trợ từ: … mà)',ans:'嘛'},
  {pre:'这个传统已经',blank:'延续',post:'了几百年。',hint:'(kéo dài, tiếp nối)',ans:'延续'},
  {pre:'保护环境，就是为子孙',blank:'后代',post:'着想。',hint:'(đời sau)',ans:'后代'},
  {pre:'妈妈站在门口，大声',blank:'呼唤',post:'着孩子的名字。',hint:'(gọi to)',ans:'呼唤'},
  {pre:'一听到“考试”两个字，全班同学都',blank:'竖',post:'起了耳朵。',hint:'(dựng lên)',ans:'竖'},
  {pre:'这片',blank:'原始',post:'森林里生活着很多珍稀动物。',hint:'(nguyên sinh, nguyên thuỷ)',ans:'原始'},
  {pre:'经过几百万年的',blank:'进化',post:'，人类的大脑变得越来越发达。',hint:'(tiến hoá)',ans:'进化'},
  {pre:'照相的时候，大家往中间',blank:'靠拢',post:'一点儿！',hint:'(xích lại gần)',ans:'靠拢'},
  {pre:'长期熬夜会损害人的',blank:'神经',post:'系统。',hint:'(thần kinh)',ans:'神经'},
  {pre:'海洋里生活着很多我们还不了解的',blank:'生物',post:'。',hint:'(sinh vật)',ans:'生物'},
  {pre:'每到春天，很多鸟都会用歌声寻找',blank:'配偶',post:'。',hint:'(bạn đời)',ans:'配偶'},
  {pre:'他们一家',blank:'世代',post:'居住在这个小村子里。',hint:'(nhiều đời)',ans:'世代'},
  {pre:'经常锻炼身体，可以预防很多',blank:'疾病',post:'。',hint:'(bệnh tật)',ans:'疾病'},
  {pre:'医生应该耐心地倾听',blank:'患者',post:'的描述。',hint:'(bệnh nhân)',ans:'患者'},
  {pre:'他的病彻底治',blank:'愈',post:'了，全家都非常高兴。',hint:'(khỏi bệnh)',ans:'愈'},
  {pre:'',blank:'嘿',post:'，快看，天上有彩虹！',hint:'(thán từ: này!)',ans:'嘿'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (不妨 · 务必 · 鉴于) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','不妨','形象地','描绘','一下','。'],ans:'我们不妨形象地描绘一下。',audio:'我们不妨形象地描绘一下。'},
  {words:['有什么意见','，','你','不妨','直说','。'],ans:'有什么意见，你不妨直说。',audio:'有什么意见，你不妨直说。'},
  {words:['改变传统观念','可能不容易','，','但我们','不妨','试一试','。'],ans:'改变传统观念可能不容易，但我们不妨试一试。',audio:'改变传统观念可能不容易，但我们不妨试一试。'},
  {words:['明天的会','非常重要','，','大家','务必要','参加','。'],ans:'明天的会非常重要，大家务必要参加。',audio:'明天的会非常重要，大家务必要参加。'},
  {words:['危险来临的时候','，','大家','务必','保持','镇静','。'],ans:'危险来临的时候，大家务必保持镇静。',audio:'危险来临的时候，大家务必保持镇静。'},
  {words:['考试时','请','务必','带好','准考证','。'],ans:'考试时请务必带好准考证。',audio:'考试时请务必带好准考证。'},
  {words:['鉴于','白噪音','有这样的功效','，','它','成了','医生的好帮手','。'],ans:'鉴于白噪音有这样的功效，它成了医生的好帮手。',audio:'鉴于白噪音有这样的功效，它成了医生的好帮手。'},
  {words:['鉴于','天气恶劣','，','比赛','推迟到','下周举行','。'],ans:'鉴于天气恶劣，比赛推迟到下周举行。',audio:'鉴于天气恶劣，比赛推迟到下周举行。'},
  {words:['鉴于','他出色的表现','，','公司决定','让他','担任部门经理','。'],ans:'鉴于他出色的表现，公司决定让他担任部门经理。',audio:'鉴于他出色的表现，公司决定让他担任部门经理。'},
  {words:['这','也是','不得已','的办法','，','你试试吧','。'],ans:'这也是不得已的办法，你试试吧。',audio:'这也是不得已的办法，你试试吧。'},
  {words:['大量的','白噪音','暗示着','安全','。'],ans:'大量的白噪音暗示着安全。',audio:'大量的白噪音暗示着安全。'},
  {words:['孩子','孝顺父母','是','理所当然','的事情','。'],ans:'孩子孝顺父母是理所当然的事情。',audio:'孩子孝顺父母是理所当然的事情。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'有什么意见，你____当面提出来，不要在背后议论。',opts:['不妨','不必','不免','何必'],ans:0,
   exp:'不妨 + V = cứ … (gợi ý nên làm) — đáp án 练习2 ①. 不必 = không cần; 不免 = khó tránh khỏi; 何必 = hà tất (phản vấn) — đều ngược ý khuyến khích.'},
  {wrong:'明天的会非常重要，大家____要参加。',opts:['务必','未必','势必','何必'],ans:0,
   exp:'务必(要) + V = nhất thiết phải. 未必 = chưa chắc; 势必 = ắt sẽ (dự đoán); 何必 = hà tất.'},
  {wrong:'鸟叫停止，意味着有了险情，所有动物都会提高____。',opts:['警惕','警察','警告','提醒'],ans:0,
   exp:'提高警惕 = nâng cao cảnh giác (cụm cố định). 警察 = cảnh sát; 警告 = cảnh cáo (không đi với 提高); 提醒 là động từ "nhắc".'},
  {wrong:'这是____的措施，请大家谅解。',opts:['不得已','不得不','不由得','不见得'],ans:0,
   exp:'Làm định ngữ trước 的措施 → tính từ 不得已 (做一做 ③). 不得不 là phó từ; 不由得 (bài 2) = không kìm được; 不见得 = chưa chắc.'},
  {wrong:'____他出色的表现，公司决定让他担任部门经理。',opts:['鉴于','关于','对于','至于'],ans:0,
   exp:'鉴于 + lý do，vế sau là quyết định (练习2 ④). 关于 = về (chủ đề); 对于 = đối với; 至于 = còn về — không nêu nguyên nhân.'},
  {wrong:'绿茶有提神的____，所以我晚上不敢多喝。',opts:['功效','功劳','功夫','成功'],ans:0,
   exp:'有……的功效 = có tác dụng …. 功劳 = công lao; 功夫 = công phu, thời gian; 成功 = thành công (练习1: các từ có chữ 功).'},
  {wrong:'孩子孝顺父母是____的事情。',opts:['理所当然','莫名其妙','无忧无虑','兴致勃勃'],ans:0,
   exp:'理所当然 = đương nhiên (练习2 ⑥). 莫名其妙 = khó hiểu; 无忧无虑 (bài 8) = vô tư lự; 兴致勃勃 (bài 5) = hứng khởi.'},
  {wrong:'音乐在治疗中只能起____作用，最重要的还是吃药。',opts:['辅助','补助','协商','赞助'],ans:0,
   exp:'起辅助作用 = đóng vai trò hỗ trợ (cụm cố định). 补助 = trợ cấp (tiền); 协商 = bàn bạc; 赞助 = tài trợ.'},
  {wrong:'如果出现发烧、咳嗽等____，请马上去医院。',opts:['症状','状态','形状','现状'],ans:0,
   exp:'出现……等症状 = xuất hiện các triệu chứng như …. 状态 = trạng thái; 形状 = hình dạng; 现状 = hiện trạng.'},
  {wrong:'只要下定决心，就没有克服不了的____。',opts:['障碍','妨碍','阻止','保障'],ans:0,
   exp:'克服障碍 = vượt qua trở ngại (danh từ làm tân ngữ). 妨碍 là động từ (cản trở); 阻止 = ngăn cản (động từ); 保障 = bảo đảm.'},
  {wrong:'楼上装修的____太大了，我根本没法儿复习。',opts:['噪音','口音','声调','音乐'],ans:0,
   exp:'噪音 = tiếng ồn khó chịu. 口音 (bài 3) = giọng địa phương; 声调 = thanh điệu; 音乐 = âm nhạc.'},
  {wrong:'感谢老师一直以来____我的关心和帮助。',opts:['给予','赠送','交给','寄给'],ans:0,
   exp:'给予 + người + N trừu tượng (关心, 帮助) — văn viết. 赠送 = tặng (đồ vật); 交给 = giao cho; 寄给 = gửi (qua bưu điện).'},
  {wrong:'他看了看手表，____我们该走了。',opts:['暗示','提示','表演','显示'],ans:0,
   exp:'Không nói ra, chỉ ra hiệu ngầm → 暗示. 提示 = nhắc rõ ràng; 表演 = biểu diễn; 显示 = hiển thị (màn hình, số liệu).'},
  {wrong:'手机____我电量不足，得赶紧充电了。',opts:['提示','暗示','提问','提高'],ans:0,
   exp:'提示 = thông báo, nhắc rõ ràng (máy móc nhắc người dùng). 暗示 = ra hiệu ngầm; 提问 = đặt câu hỏi; 提高 = nâng cao.'},
  {wrong:'我们班在第一轮比赛中就被____了，大家都很失望。',opts:['淘汰','淘气','失败','放弃'],ans:0,
   exp:'被淘汰 = bị loại. 淘气 = nghịch ngợm; 失败 không dùng với 被; 被放弃 = bị bỏ rơi (nghĩa khác).'},
  {wrong:'周围一片寂静，说明危险正在____。',opts:['靠拢','依靠','集中','团结'],ans:0,
   exp:'靠拢 = đến gần, áp sát (nguy hiểm đang tới gần). 依靠 (bài 5) = dựa vào; 集中 = tập trung; 团结 = đoàn kết.'},
  {wrong:'皮肤长时间____在阳光下，很容易被晒伤。',opts:['暴露','露面','透露','表露'],ans:0,
   exp:'暴露在 + hoàn cảnh = phơi ra, tiếp xúc trực tiếp. 露面 = xuất hiện; 透露 = tiết lộ (tin tức); 表露 = bộc lộ (tình cảm).'},
  {wrong:'这篇文章生动地____了江南农村的风景。',opts:['描绘','画画','绘画','临摹'],ans:0,
   exp:'描绘 + N (phong cảnh) = miêu tả sinh động bằng lời. 画画 là động từ li hợp (vẽ tranh), không mang tân ngữ 风景; 绘画 chủ yếu là danh từ (hội hoạ); 临摹 = chép lại tranh mẫu.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–8 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nếu thấy học thuộc từ vựng nhàm chán, bạn cứ thử vừa nghe tiếng ồn trắng vừa học xem.',zh:'如果觉得背单词枯燥，你不妨一边听白噪音一边学。',py:'Rúguǒ juéde bèi dāncí kūzào, nǐ bùfáng yìbiān tīng bái zàoyīn yìbiān xué.',goiY:['如果……','不妨','一边……一边……','白噪音'],giai:'不妨 + V: lời gợi ý nhẹ nhàng "cứ thử"; 枯燥 ôn bài 7. Đừng dịch "cứ thử" thành 试试看 mà bỏ mất 不妨.'},
  {vi:'Đường núi nhiều đá, lái xe nhất thiết phải nâng cao cảnh giác, kẻo gây ra tai hoạ.',zh:'山路上岩石多，开车务必提高警惕，免得惹祸。',py:'Shānlù shang yánshí duō, kāi chē wùbì tígāo jǐngtì, miǎnde rě huò.',goiY:['务必','提高警惕','免得','惹祸'],giai:'务必 + V (nhất thiết phải) mạnh hơn 一定; 免得 = kẻo, để khỏi — đứng đầu vế sau nêu điều muốn tránh. 惹祸 là từ li hợp, không mang tân ngữ.'},
  {vi:'Xét thấy dạo này không ít bạn bị rối loạn giấc ngủ, cô chủ nhiệm quyết định tổ chức một buổi toạ đàm về sức khoẻ.',zh:'鉴于最近不少同学有睡眠障碍，班主任决定举办一次健康讲座。',py:'Jiànyú zuìjìn bùshǎo tóngxué yǒu shuìmián zhàng\'ài, bānzhǔrèn juédìng jǔbàn yí cì jiànkāng jiǎngzuò.',goiY:['鉴于……，决定……','睡眠障碍'],giai:'鉴于 đứng đầu vế TRƯỚC nêu căn cứ, vế sau là quyết định; "rối loạn giấc ngủ" = 睡眠障碍 (障碍 trong y học = rối loạn).'},
  {vi:'Chuyện bố mẹ chuyển nhà thật ra cũng là bất đắc dĩ, em đừng trách họ nữa, chuyển trường rồi cũng có thể kết bạn mới mà.',zh:'父母搬家其实也是不得已，你就别埋怨他们了，转学以后也能交到新朋友嘛。',py:'Fùmǔ bān jiā qíshí yě shì bùdéyǐ, nǐ jiù bié mányuàn tāmen le, zhuǎnxué yǐhòu yě néng jiāodào xīn péngyou ma.',goiY:['是不得已','别……了','埋怨','嘛'],giai:'Chủ ngữ + 是 + 不得已 — không thay bằng 不得不 vì phía sau không có động từ; 埋怨 ôn bài 2; 嘛 cuối câu nhấn lý lẽ hiển nhiên.'},
  {vi:'Dù xung quanh ồn ào thế nào, chỉ cần đeo tai nghe vào nghe tiếng mưa, thần kinh căng thẳng của tôi sẽ dịu xuống ngay.',zh:'不管周围多么嘈杂，只要戴上耳机听听雨声，我紧张的神经就会马上放松下来。',py:'Bùguǎn zhōuwéi duōme cáozá, zhǐyào dàishang ěrjī tīngting yǔ shēng, wǒ jǐnzhāng de shénjīng jiù huì mǎshàng fàngsōng xiàlái.',goiY:['不管……','只要……就……','嘈杂','神经'],giai:'Ba vế: 不管 (điều kiện nào cũng vậy) + 只要……就…… (điều kiện đủ); 放松下来 — bổ ngữ xu hướng 下来 chỉ trạng thái dịu dần.'},
  {vi:'Đừng coi sự quan tâm bố mẹ dành cho chúng ta là điều hiển nhiên, mà nên học cách biết ơn và đền đáp.',zh:'不要把父母给予我们的关心当成理所当然的，而应该学会感恩和回报。',py:'Bú yào bǎ fùmǔ jǐyǔ wǒmen de guānxīn dàngchéng lǐsuǒdāngrán de, ér yīnggāi xuéhuì gǎn\'ēn hé huíbào.',goiY:['把……当成……','给予','理所当然','而应该'],giai:'把 A 当成 B = coi A là B; 给予 đọc jǐyǔ, văn viết; 而应该…… nối vế đối lập "mà nên"; 回报 ôn bài 6.'},
  {vi:'Trước kỳ thi em lúc nào cũng uể oải, rối loạn giấc ngủ chữa mãi không khỏi; bác sĩ nói đó chẳng qua là triệu chứng do căng thẳng quá mức gây ra.',zh:'考前我总是无精打采，睡眠障碍久治不愈，医生说那只不过是过度紧张引起的症状。',py:'Kǎo qián wǒ zǒngshì wújīng-dǎcǎi, shuìmián zhàng\'ài jiǔ zhì bú yù, yīshēng shuō nà zhǐ búguò shì guòdù jǐnzhāng yǐnqǐ de zhèngzhuàng.',goiY:['无精打采','久治不愈','只不过是','症状'],giai:'久治不愈 (chữa lâu không khỏi) — 愈 văn viết; 只不过是 = chẳng qua chỉ là; 过度 ôn bài 7, 无精打采 ôn bài 2.'},
  {vi:'Tiếng ồn trắng tuy không thể thay thế thuốc men, nhưng với tư cách một phương pháp điều trị hỗ trợ thì công hiệu vẫn khá rõ rệt.',zh:'白噪音虽然不能代替药物，但是作为一种辅助性治疗方法，功效还是相当明显的。',py:'Bái zàoyīn suīrán bù néng dàitì yàowù, dànshì zuòwéi yì zhǒng fǔzhùxìng zhìliáo fāngfǎ, gōngxiào háishi xiāngdāng míngxiǎn de.',goiY:['虽然……但是……','作为','辅助性','功效'],giai:'作为 + vai trò (với tư cách là); 功效 văn viết, dùng cho tác dụng của liệu pháp, thuốc; 还是……的 = vẫn … (khẳng định nhẹ).'},
  {vi:'Em cứ thử nói thẳng khó khăn của mình với cô, cô nhất định sẽ giúp đỡ; ngược lại, nếu cứ giấu mãi thì sớm muộn vấn đề cũng sẽ lộ ra.',zh:'你不妨把困难直接告诉老师，老师一定会给予帮助；相反，如果一直隐瞒，问题迟早会暴露出来。',py:'Nǐ bùfáng bǎ kùnnan zhíjiē gàosu lǎoshī, lǎoshī yídìng huì jǐyǔ bāngzhù; xiāngfǎn, rúguǒ yìzhí yǐnmán, wèntí chízǎo huì bàolù chūlái.',goiY:['不妨','给予','相反，如果……','隐瞒','暴露'],giai:'不妨 + câu 把 (gợi ý); dấu ；ngăn hai hướng đối lập: 相反 mở vế giả thiết ngược; 隐瞒 ôn bài 2; 暴露出来 = lộ ra.'},
  {vi:'Xét thấy tiếng ồn tầng trên ảnh hưởng nghiêm trọng đến việc học của con, bố mẹ bất đắc dĩ phải sang nói chuyện với hàng xóm, mong họ có thể nghĩ cho người khác nhiều hơn.',zh:'鉴于楼上的噪音严重影响了孩子的学习，父母不得已去和邻居商量，希望他们能多为别人着想。',py:'Jiànyú lóu shang de zàoyīn yánzhòng yǐngxiǎngle háizi de xuéxí, fùmǔ bùdéyǐ qù hé línjū shāngliang, xīwàng tāmen néng duō wèi biérén zhuóxiǎng.',goiY:['鉴于……','噪音','不得已','为……着想'],giai:'Ba vế: 鉴于 (căn cứ) → 不得已 + V (hành động miễn cưỡng) → 希望 (mong muốn); 为……着想 ôn bài 5.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Cuộc họp còn chưa bắt đầu, trong phòng ồn ào cả lên, vậy mà bỗng nhiên mọi người lại im bặt một cách khó hiểu.',zh:'会议还没开始，屋子里一片嘈杂，突然大家却莫名其妙地安静了下来。',py:'Huìyì hái méi kāishǐ, wūzi li yí piàn cáozá, tūrán dàjiā què mòmíng-qímiào de ānjìng le xiàlái.',goiY:['一片嘈杂 = ồn ào cả lên','却 = vậy mà, lại','莫名其妙 = khó hiểu, vô cớ'],giai:'一片 + tính từ tả cả không gian — dịch "cả phòng ồn ào"; 莫名其妙地 dịch thành trạng ngữ "một cách khó hiểu" hoặc "tự dưng".'},
  {vi:'Tiếng ồn trắng nghe giống như tiếng mưa rơi, hoặc giống tiếng sóng vỗ vào đá.',zh:'白噪音听上去像下雨的声音，或者像波浪拍打岩石的声音。',py:'Bái zàoyīn tīng shàngqu xiàng xià yǔ de shēngyīn, huòzhě xiàng bōlàng pāidǎ yánshí de shēngyīn.',goiY:['听上去 = nghe có vẻ','或者 = hoặc','波浪 = sóng','岩石 = đá'],giai:'听上去像…… = nghe giống …; 或者 nối hai phương án so sánh — tiếng Việt lặp "giống" ở cả hai vế cho rõ.'},
  {vi:'Chim ngừng hót có nghĩa là đã có nguy hiểm, lúc này nhất thiết phải nâng cao cảnh giác.',zh:'鸟叫停止意味着有了险情，这时务必要提高警惕。',py:'Niǎo jiào tíngzhǐ yìwèizhe yǒule xiǎnqíng, zhè shí wùbì yào tígāo jǐngtì.',goiY:['意味着 = có nghĩa là','务必 = nhất thiết phải','警惕 = cảnh giác'],giai:'意味着 (bài 7) nối hiện tượng – ý nghĩa; 务必要 dịch "nhất thiết phải", mạnh hơn "nên".'},
  {vi:'Chỉ khi tiếng chim hót bắt đầu lại, báo động mới được giải trừ, những con vật đang dỏng tai nghe ngóng mới dám thả lỏng.',zh:'只有当鸟叫重新开始时，警报才会解除，竖起耳朵的动物们也才敢放松下来。',py:'Zhǐyǒu dāng niǎo jiào chóngxīn kāishǐ shí, jǐngbào cái huì jiěchú, shùqǐ ěrduo de dòngwùmen yě cái gǎn fàngsōng xiàlái.',goiY:['只有……才…… = chỉ khi … mới …','解除 = giải trừ','竖起耳朵 = dỏng tai'],giai:'只有 + điều kiện duy nhất, 才 đứng trước động từ ở cả hai vế sau; 竖起耳朵的动物们 — định ngữ dài, dịch thành "những con vật đang dỏng tai".'},
  {vi:'Chim kêu, côn trùng kêu đều là hành động bất đắc dĩ khi tìm bạn khác giới, vì tiếng kêu sẽ làm lộ bản thân, rất dễ rước hoạ.',zh:'鸟叫虫叫都是寻求异性时不得已而采取的举动，因为叫声会暴露自己，很容易惹祸。',py:'Niǎo jiào chóng jiào dōu shì xúnqiú yìxìng shí bùdéyǐ ér cǎiqǔ de jǔdòng, yīnwèi jiàoshēng huì bàolù zìjǐ, hěn róngyì rě huò.',goiY:['不得已而 + V = bất đắc dĩ mà …','暴露 = làm lộ','惹祸 = rước hoạ'],giai:'不得已而采取的举动 — cụm định ngữ dài, dịch gọn "hành động bất đắc dĩ"; 因为 đứng sau nêu nguyên nhân.'},
  {vi:'Nếu không kêu, con đực con cái chẳng con nào tìm ra đối phương, thì DNA tổ tiên để lại làm sao duy trì tiếp được?',zh:'倘若不叫，雌雄两性谁也发现不了对方，祖先遗留下的DNA又怎么延续下去呢？',py:'Tǎngruò bú jiào, cíxióng liǎng xìng shéi yě fāxiàn bu liǎo duìfāng, zǔxiān yíliú xià de DNA yòu zěnme yánxù xiàqu ne?',goiY:['倘若 = nếu như','雌雄 = đực cái','遗留 = để lại','延续 = duy trì, tiếp nối'],giai:'倘若 (bài 4) = 如果 văn viết; câu hỏi phản vấn 又怎么……呢 = làm sao … được (ý: không thể).'},
  {vi:'Vừa phải duy trì nòi giống, lại vừa phải tự bảo vệ, chim đành ra sức gọi bạn, đồng thời dỏng tai lên để cảnh giác.',zh:'既要延续后代，又要保护自己，鸟儿就只好拼命呼唤，同时竖起耳朵提高警惕。',py:'Jì yào yánxù hòudài, yòu yào bǎohù zìjǐ, niǎor jiù zhǐhǎo pīnmìng hūhuàn, tóngshí shùqǐ ěrduo tígāo jǐngtì.',goiY:['既要……又要…… = vừa phải … lại phải …','后代 = đời sau','拼命呼唤 = ra sức gọi'],giai:'既……又…… nêu hai yêu cầu cùng lúc; 延续后代 dịch "duy trì nòi giống" tự nhiên hơn "kéo dài đời sau"; 拼命 ôn bài 5.'},
  {vi:'Trải qua hàng chục triệu năm tiến hoá, sinh vật nào càng nhạy với sự suy giảm của tiếng ồn trắng thì khả năng sống sót và tìm được bạn đời càng lớn.',zh:'经过数千万年的进化，对白噪音减弱越敏感的生物，存活和找到配偶的可能性就越大。',py:'Jīngguò shù qiān wàn nián de jìnhuà, duì bái zàoyīn jiǎnruò yuè mǐngǎn de shēngwù, cúnhuó hé zhǎodào pèi\'ǒu de kěnéngxìng jiù yuè dà.',goiY:['越……越…… = càng … càng …','进化 = tiến hoá','生物 = sinh vật','配偶 = bạn đời'],giai:'越……(就)越…… tách ở hai vế, vế đầu nằm trong định ngữ 越敏感的生物 — dịch "sinh vật nào càng … thì … càng …"; 数千万年 = hàng chục triệu năm.'},
  {vi:'Xét thấy tiếng ồn trắng có công dụng như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ, có thể giúp bệnh nhân giảm nhẹ triệu chứng.',zh:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手，能帮助患者减轻症状。',py:'Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu, néng bāngzhù huànzhě jiǎnqīng zhèngzhuàng.',goiY:['鉴于 = xét thấy, do','功效 = công dụng','理所当然 = đương nhiên','患者 = bệnh nhân'],giai:'鉴于 nêu căn cứ; 理所当然地 làm trạng ngữ — dịch "đương nhiên"; 好帮手 = trợ thủ đắc lực (không dịch "người giúp tốt").'},
  {vi:'Tiếng ồn trắng không chỉ có thể hỗ trợ điều trị bệnh hệ thần kinh, mà còn chữa khỏi chứng rối loạn tập trung ở một số bệnh nhi; có thể thấy nó là món quà thiên nhiên ban tặng cho chúng ta.',zh:'白噪音不仅能辅助治疗神经系统疾病，还能治愈一些患儿的注意力障碍，可见它是大自然给予我们的礼物。',py:'Bái zàoyīn bùjǐn néng fǔzhù zhìliáo shénjīng xìtǒng jíbìng, hái néng zhìyù yìxiē huàn\'ér de zhùyìlì zhàng\'ài, kějiàn tā shì dà zìrán jǐyǔ wǒmen de lǐwù.',goiY:['不仅……还…… = không chỉ … mà còn …','辅助 = hỗ trợ','治愈 = chữa khỏi','可见 = có thể thấy','给予 = ban cho'],giai:'Ba vế: 不仅……还…… (tăng tiến) + 可见 (rút ra kết luận); 障碍 trong y học dịch "rối loạn", không dịch "chướng ngại vật".'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 134): 缩写 bài khoá ~300 chữ, tham khảo bảng 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:300,
  de:'这篇课文告诉我们什么是白噪音，大自然中有哪些白噪音，白噪音会带来什么样的暗示以及白噪音有哪些作用。请参考练习5，把课文缩写成300字左右的短文。',
  prompt:'Bài khoá cho chúng ta biết tiếng ồn trắng là gì, trong thiên nhiên có những tiếng ồn trắng nào, tiếng ồn trắng mang lại những ám hiệu gì và có những tác dụng gì. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 300 chữ.',
  dan:[
    {hoi:'文中提到了哪几种白噪音？',goiY:'①下雨的声音 ②波浪拍打岩石的声音 ③微风抚摸树叶的声音 ④鸟的叫声 ⑤会议室的嘈杂声'},
    {hoi:'白噪音给我们什么暗示？',goiY:'①安全 ②危险'},
    {hoi:'鸟儿为什么要叫？',goiY:'①寻找异性 ②延续后代'},
    {hoi:'白噪音有什么功效？',goiY:'①放松身心 ②治疗疾病（神经系统疾病、多动症患儿） ③恢复工作效率'}
  ],
  tuNen:['不妨','务必','鉴于','理所当然','暗示','警惕','不得已','延续后代','功效','辅助'],
  cauTruc:[
    {ten:'什么是……？……听上去像……，或者像……', nhan:'Mở bài · định nghĩa', vd:'什么是白噪音？白噪音听上去像下雨的声音，或者像波浪拍打岩石的声音。', khi:'Trả lời dòng 1 của bảng: liệt kê các loại tiếng ồn trắng.'},
    {ten:'……、……，也都是……', nhan:'Liệt kê thêm', vd:'森林里鸟的叫声、会议室里的嘈杂声，也都是白噪音。', khi:'Gom hai ví dụ còn lại (tiếng chim, phòng họp) vào một câu cho gọn.'},
    {ten:'A 暗示着……；B 则意味着……', nhan:'Đối lập hai ám hiệu', vd:'大量的白噪音暗示着安全；白噪音突然减弱，则意味着危险正在靠拢。', khi:'Trả lời dòng 2: an toàn — nguy hiểm, ngăn hai vế bằng dấu ；.'},
    {ten:'……是……时不得已而采取的……，因为……', nhan:'Giải thích nguyên nhân', vd:'鸟叫是寻找异性时不得已而采取的危险举动，因为叫声会暴露自己。', khi:'Trả lời dòng 3: vì sao chim phải kêu dù nguy hiểm.'},
    {ten:'既要……，又要……，只好……，同时……', nhan:'Hai yêu cầu → giải pháp', vd:'既要延续后代，又要保护自己，鸟儿只好拼命呼唤，同时竖起耳朵。', khi:'Bắt chước câu 练习4 ② để khép ý dòng 3.'},
    {ten:'鉴于……，……理所当然地……：……，……，还……', nhan:'Công dụng', vd:'鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手。', khi:'Trả lời dòng 4: dùng 鉴于 dẫn sang ba công dụng.'},
    {ten:'总之，……是……给予我们的……', nhan:'Kết bài', vd:'总之，白噪音是大自然给予我们的礼物。', khi:'Khép lại bằng ý chủ đề ở câu cuối bài khoá.'}
  ],
  checklist:[
    'Đủ khoảng 300 chữ Hán chưa (khoảng 270–350, không đếm dấu câu)?',
    'Có đủ 4 ý theo đúng thứ tự bảng bài tập 5 (các loại tiếng ồn trắng — ám hiệu — vì sao chim kêu — công dụng) chưa?',
    'Đã dùng ít nhất 2 trong 3 điểm ngữ pháp của bài (不妨 / 务必 / 鉴于) và ít nhất 6 từ mới chưa?',
    'Có viết bằng lời của mình (tóm tắt, bỏ chi tiết phụ) thay vì chép nguyên bài khoá không?',
    'Có câu kết nêu ý chính "tiếng ồn trắng là ám hiệu an toàn thiên nhiên dành cho con người" không?'
  ],
  model:{
    zh:'什么是白噪音？我们不妨形象地描绘一下：白噪音听上去像下雨的声音，或者像波浪拍打岩石的声音，或者像微风抚摸树叶的沙沙声。森林里鸟的叫声、会议室里的嘈杂声，也都是白噪音。白噪音会给我们两种暗示：大量的白噪音暗示着安全；白噪音突然减弱，则意味着危险正在靠拢，务必要提高警惕。鸟儿为什么要叫呢？其实鸟叫是寻找异性时不得已而采取的危险举动，因为叫声会暴露自己，很容易惹祸。可是既要延续后代，又要保护自己，鸟儿只好拼命呼唤，同时竖起耳朵，有危险马上闭嘴。这种意识经过自然选择保留了下来，世代相传。白噪音能让人有安全感，从而放松身心。鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手：可以对神经系统疾病患者进行辅助性治疗，可以治愈一些多动症患儿的注意力障碍，还可以帮助受噪音污染的人恢复工作效率。总之，白噪音是大自然给予我们的礼物，它告诉我们：可以放松，不必焦虑。',
    py:'Shénme shì bái zàoyīn? Wǒmen bùfáng xíngxiàng de miáohuì yíxià: bái zàoyīn tīng shàngqu xiàng xià yǔ de shēngyīn, huòzhě xiàng bōlàng pāidǎ yánshí de shēngyīn, huòzhě xiàng wēifēng fǔmō shùyè de shāshā shēng. Sēnlín li niǎo de jiàoshēng, huìyìshì li de cáozá shēng, yě dōu shì bái zàoyīn. Bái zàoyīn huì gěi wǒmen liǎng zhǒng ànshì: dàliàng de bái zàoyīn ànshìzhe ānquán; bái zàoyīn tūrán jiǎnruò, zé yìwèizhe wēixiǎn zhèngzài kàolǒng, wùbì yào tígāo jǐngtì. Niǎor wèi shénme yào jiào ne? Qíshí niǎo jiào shì xúnzhǎo yìxìng shí bùdéyǐ ér cǎiqǔ de wēixiǎn jǔdòng, yīnwèi jiàoshēng huì bàolù zìjǐ, hěn róngyì rě huò. Kěshì jì yào yánxù hòudài, yòu yào bǎohù zìjǐ, niǎor zhǐhǎo pīnmìng hūhuàn, tóngshí shùqǐ ěrduo, yǒu wēixiǎn mǎshàng bì zuǐ. Zhè zhǒng yìshí jīngguò zìrán xuǎnzé bǎoliúle xiàlái, shìdài xiāngchuán. Bái zàoyīn néng ràng rén yǒu ānquángǎn, cóng\'ér fàngsōng shēnxīn. Jiànyú bái zàoyīn yǒu zhèyàng de gōngxiào, tā lǐsuǒdāngrán de chéngle yīshēng de hǎo bāngshǒu: kěyǐ duì shénjīng xìtǒng jíbìng huànzhě jìnxíng fǔzhùxìng zhìliáo, kěyǐ zhìyù yìxiē duōdòngzhèng huàn\'ér de zhùyìlì zhàng\'ài, hái kěyǐ bāngzhù shòu zàoyīn wūrǎn de rén huīfù gōngzuò xiàolǜ. Zǒngzhī, bái zàoyīn shì dà zìrán jǐyǔ wǒmen de lǐwù, tā gàosu wǒmen: kěyǐ fàngsōng, búbì jiāolǜ.',
    vn:'Tiếng ồn trắng là gì? Chúng ta thử miêu tả một cách hình ảnh: tiếng ồn trắng nghe giống tiếng mưa rơi, hoặc giống tiếng sóng vỗ vào đá, hoặc giống tiếng xào xạc khi làn gió nhẹ vuốt ve lá cây. Tiếng chim hót trong rừng, tiếng ồn ào trong phòng họp cũng đều là tiếng ồn trắng. Tiếng ồn trắng mang đến cho chúng ta hai loại ám hiệu: nhiều tiếng ồn trắng ngầm báo an toàn; còn tiếng ồn trắng đột nhiên yếu đi thì có nghĩa là nguy hiểm đang đến gần, nhất thiết phải nâng cao cảnh giác. Vì sao chim phải kêu? Thật ra tiếng chim kêu là hành động nguy hiểm bất đắc dĩ khi tìm bạn khác giới, vì tiếng kêu sẽ làm lộ bản thân, rất dễ rước hoạ. Nhưng vừa phải duy trì nòi giống, lại vừa phải bảo vệ mình, chim đành ra sức gọi bạn, đồng thời dỏng tai lên, hễ có nguy hiểm là im bặt ngay. Ý thức này qua chọn lọc tự nhiên được giữ lại và truyền từ đời này sang đời khác. Tiếng ồn trắng khiến con người có cảm giác an toàn, nhờ đó thư giãn cả thân lẫn tâm. Xét thấy tiếng ồn trắng có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ: có thể điều trị bổ trợ cho bệnh nhân mắc bệnh hệ thần kinh, có thể chữa khỏi chứng rối loạn tập trung ở một số bệnh nhi tăng động, còn có thể giúp những người bị ô nhiễm tiếng ồn khôi phục hiệu suất làm việc. Tóm lại, tiếng ồn trắng là món quà thiên nhiên dành cho chúng ta, nó nói với chúng ta: có thể thả lỏng, không cần lo âu.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'文中提到了哪几种白噪音？',
     q_vn:'Bài khoá nhắc tới những loại tiếng ồn trắng nào?',
     hint:'①下雨的声音 ②波浪拍打岩石的声音 ③微风抚摸树叶的声音 ④鸟的叫声 ⑤会议室的嘈杂声',
     sample:'文中提到了五种白噪音：下雨的声音、波浪拍打岩石的声音、微风抚摸树叶的声音、森林里鸟的叫声，还有会议室里的嘈杂声。',
     sample_vn:'Bài khoá nhắc tới năm loại tiếng ồn trắng: tiếng mưa rơi, tiếng sóng vỗ vào đá, tiếng gió nhẹ vuốt ve lá cây, tiếng chim hót trong rừng, và tiếng ồn ào trong phòng họp.',
     note:'Liệt kê bằng dấu 、 và 还有 ở mục cuối; nhớ các cụm chủ–vị: 波浪拍打岩石, 微风抚摸树叶.'},
    {q_zh:'白噪音给我们什么暗示？',
     q_vn:'Tiếng ồn trắng ngầm báo cho chúng ta điều gì?',
     hint:'①安全 ②危险',
     sample:'白噪音给我们的暗示有两种。大量的白噪音暗示着安全，比如鸟在叫，说明没有危险；白噪音突然减弱，就意味着有了险情，务必要提高警惕。',
     sample_vn:'Tiếng ồn trắng cho chúng ta hai loại ám hiệu. Nhiều tiếng ồn trắng ngầm báo an toàn, ví dụ chim còn hót nghĩa là không có nguy hiểm; tiếng ồn trắng đột nhiên yếu đi thì có nghĩa là đã có biến, nhất thiết phải nâng cao cảnh giác.',
     note:'Đối lập hai vế bằng dấu ；: 暗示着安全 / 意味着有了险情; dùng 务必 (điểm ngữ pháp của bài).'},
    {q_zh:'鸟儿为什么要叫？',
     q_vn:'Vì sao chim phải kêu?',
     hint:'①寻找异性 ②延续后代',
     sample:'鸟叫是为了寻找异性、延续后代。虽然叫声会暴露自己，很容易惹祸，但是倘若不叫，雌雄两性谁也发现不了对方，所以这是不得已而采取的危险举动。',
     sample_vn:'Chim kêu là để tìm bạn khác giới, duy trì nòi giống. Tuy tiếng kêu sẽ làm lộ bản thân, rất dễ rước hoạ, nhưng nếu không kêu thì con đực con cái chẳng con nào tìm ra đối phương, cho nên đây là hành động nguy hiểm bất đắc dĩ.',
     note:'为了 + mục đích; 虽然……但是……; 倘若 (bài 4) = nếu; 不得已而 + V.'},
    {q_zh:'白噪音有什么功效？',
     q_vn:'Tiếng ồn trắng có những công dụng gì?',
     hint:'①放松身心 ②治疗疾病（神经系统疾病、多动症患儿） ③恢复工作效率',
     sample:'白噪音能让我们有安全感，从而放松身心。鉴于白噪音有这样的功效，它理所当然地成了医生的好帮手：可以辅助治疗神经系统疾病，还治愈了一些多动症患儿的精神集中能力障碍。另外，它还能帮助受到噪音污染的人恢复工作效率。',
     sample_vn:'Tiếng ồn trắng khiến chúng ta có cảm giác an toàn, nhờ đó thư giãn cả thân lẫn tâm. Xét thấy nó có công hiệu như vậy, nó đương nhiên trở thành trợ thủ đắc lực của bác sĩ: có thể hỗ trợ điều trị bệnh hệ thần kinh, còn chữa khỏi chứng rối loạn khả năng tập trung cho một số bệnh nhi tăng động. Ngoài ra, nó còn giúp những người bị ô nhiễm tiếng ồn khôi phục hiệu suất làm việc.',
     note:'Ba công dụng nối bằng 从而 / 鉴于……理所当然地…… / 另外; ý 2 có hai nhánh (bệnh thần kinh — trẻ tăng động).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  "intro": "Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.",
  "source": "Soạn theo dạng đề HSK 6 · chủ đề bài 12",
  "items": [
    {
      "n": 1,
      "lines": [
        {
          "sp": "女",
          "zh": "你怎么戴着耳机写作业？不吵吗？"
        },
        {
          "sp": "男",
          "zh": "我在听白噪音，是下雨的声音。周围太嘈杂的时候，听它反而更容易集中注意力。"
        }
      ],
      "q": "男的为什么听白噪音？",
      "qvn": "Vì sao người đàn ông nghe tiếng ồn trắng?",
      "opts": [
        "为了睡觉",
        "为了学习音乐",
        "为了集中注意力",
        "因为外面下雨了"
      ],
      "ans": 2,
      "why": "听它反而更容易集中注意力 → để tập trung. \"下雨的声音\" chỉ là loại tiếng ồn trắng anh ấy nghe, không phải trời đang mưa.",
      "words": [
        "白噪音",
        "嘈杂"
      ]
    },
    {
      "n": 2,
      "lines": [
        {
          "sp": "男",
          "zh": "刚才会议室里还吵吵闹闹的，怎么突然这么安静？"
        },
        {
          "sp": "女",
          "zh": "我也觉得莫名其妙。哦，原来是校长进来了。"
        }
      ],
      "q": "会议室为什么突然安静了？",
      "qvn": "Vì sao phòng họp đột nhiên yên tĩnh?",
      "opts": [
        "校长进来了",
        "大家都累了",
        "会议结束了",
        "有人说了句“好安静啊”"
      ],
      "ans": 0,
      "why": "原来是校长进来了 → hiệu trưởng bước vào. 莫名其妙 chỉ là cảm giác \"khó hiểu\" lúc đầu của người phụ nữ.",
      "words": [
        "莫名其妙"
      ]
    },
    {
      "n": 3,
      "lines": [
        {
          "sp": "女",
          "zh": "这种药真的能治好我的失眠吗？"
        },
        {
          "sp": "男",
          "zh": "它只能起辅助作用，减轻一些症状。要想彻底治愈，你还得改掉熬夜的习惯。"
        }
      ],
      "q": "关于这种药，可以知道什么？",
      "qvn": "Về loại thuốc này, có thể biết điều gì?",
      "opts": [
        "能彻底治好失眠",
        "要每天晚上吃两次",
        "副作用很大",
        "只能减轻症状"
      ],
      "ans": 3,
      "why": "只能起辅助作用，减轻一些症状 → chỉ giảm triệu chứng; muốn khỏi hẳn (治愈) phải bỏ thói quen thức khuya.",
      "words": [
        "辅助",
        "症状",
        "愈"
      ]
    },
    {
      "n": 4,
      "lines": [
        {
          "sp": "男",
          "zh": "明天去爬山，有什么要注意的吗？"
        },
        {
          "sp": "女",
          "zh": "山上岩石多，路很滑，大家务必穿运动鞋，千万别一个人走小路。"
        }
      ],
      "q": "女的提醒大家什么？",
      "qvn": "Người phụ nữ nhắc mọi người điều gì?",
      "opts": [
        "带足够的水",
        "务必穿运动鞋",
        "早点儿出发",
        "一个人走小路更安全"
      ],
      "ans": 1,
      "why": "大家务必穿运动鞋 — nhắc trực tiếp. \"一个人走小路\" là điều bị cấm (千万别).",
      "words": [
        "岩石",
        "务必"
      ]
    },
    {
      "n": 5,
      "lines": [
        {
          "sp": "女",
          "zh": "你为什么不当面跟他把话说清楚呢？"
        },
        {
          "sp": "男",
          "zh": "我也是不得已。他正在气头上，我说什么他都听不进去。"
        }
      ],
      "q": "男的为什么没有当面跟他说？",
      "qvn": "Vì sao người đàn ông không nói thẳng với anh kia?",
      "opts": [
        "他不认识那个人",
        "那个人正在生气",
        "他怕惹祸",
        "他忘记了"
      ],
      "ans": 1,
      "why": "他正在气头上 = anh kia đang giận → nói gì cũng không nghe. 我也是不得已 = tôi cũng bất đắc dĩ thôi.",
      "words": [
        "不得已"
      ]
    },
    {
      "n": 6,
      "lines": [
        {
          "sp": "男",
          "zh": "我们的新产品卖得不太好，你看怎么办？"
        },
        {
          "sp": "女",
          "zh": "鉴于目前的市场情况，我建议我们不妨先把价格降一降，看看效果再说。"
        }
      ],
      "q": "女的建议怎么做？",
      "qvn": "Người phụ nữ đề nghị làm gì?",
      "opts": [
        "马上停止生产",
        "换一个市场",
        "增加广告",
        "先降价试试"
      ],
      "ans": 3,
      "why": "不妨先把价格降一降，看看效果再说 → thử giảm giá trước. 不妨 = cứ thử.",
      "words": [
        "鉴于",
        "不妨"
      ]
    },
    {
      "n": 7,
      "lines": [
        {
          "sp": "女",
          "zh": "在森林里，鸟的叫声就是天然的警报器。鸟在叫，说明没有危险；鸟叫一旦停止，所有动物都会提高警惕，静下来观察。只有当鸟叫重新开始时，警报才会解除。"
        }
      ],
      "q": "鸟叫停止时，动物们会怎么样？",
      "qvn": "Khi chim ngừng hót, các con vật sẽ thế nào?",
      "opts": [
        "静下来，提高警惕",
        "大声呼唤",
        "马上逃走",
        "继续睡觉"
      ],
      "ans": 0,
      "why": "所有动物都会提高警惕，静下来观察. Không nhắc gì tới bỏ chạy; 呼唤 là việc chim làm khi tìm bạn.",
      "words": [
        "警惕",
        "解除"
      ]
    },
    {
      "n": 8,
      "lines": [
        {
          "sp": "男",
          "zh": "很多人以为，环境越安静越容易睡着，其实并非如此。完全的寂静反而会让人的神经紧张起来，而像雨声、波浪声这样的白噪音，却能暗示大脑“周围很安全”，帮助人们放松身心。"
        }
      ],
      "q": "说话人的观点是什么？",
      "qvn": "Quan điểm của người nói là gì?",
      "opts": [
        "环境越安静越好睡",
        "下雨天不适合睡觉",
        "适当的白噪音有助于放松",
        "白噪音是一种噪音污染"
      ],
      "ans": 2,
      "why": "其实并非如此 bác bỏ quan niệm \"càng yên càng dễ ngủ\"; ý chính ở vế 白噪音……帮助人们放松身心. (并非 ôn bài 7)",
      "words": [
        "神经",
        "波浪",
        "白噪音",
        "暗示"
      ]
    }
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng phòng than mất ngủ vì ngoài đường ồn.',
     a:{sp:'Bạn cùng phòng',zh:'外面太吵了，我已经两个晚上没睡好了。',vn:'Ngoài kia ồn quá, tớ đã hai đêm liền không ngủ ngon rồi.'},
     need:['Dùng 不妨','Nhắc tới 白噪音'],
     sample:'你不妨试试听白噪音，比如下雨的声音，说不定能帮你睡着。',
     samplePy:'Nǐ bùfáng shìshi tīng bái zàoyīn, bǐrú xià yǔ de shēngyīn, shuōbudìng néng bāng nǐ shuìzháo.',
     sampleVn:'Cậu cứ thử nghe tiếng ồn trắng xem, ví dụ tiếng mưa rơi, biết đâu giúp cậu ngủ được.',
     tip:'不妨 + 试试 + V: gợi ý nhẹ nhàng; 说不定 = biết đâu.'},

    {scene:'Cô giáo nhờ em (lớp trưởng) nhắc cả lớp trước buổi leo núi.',
     a:{sp:'Cô giáo',zh:'明天去爬山，你帮我提醒一下大家要注意什么。',vn:'Mai đi leo núi, em nhắc giúp cô mọi người cần chú ý gì nhé.'},
     need:['Dùng 务必','Dùng 警惕 hoặc 岩石'],
     sample:'大家听好：明天务必准时集合，山上岩石很滑，一定要提高警惕。',
     samplePy:'Dàjiā tīnghǎo: míngtiān wùbì zhǔnshí jíhé, shān shang yánshí hěn huá, yídìng yào tígāo jǐngtì.',
     sampleVn:'Mọi người nghe này: ngày mai nhất thiết phải tập trung đúng giờ, trên núi đá rất trơn, nhất định phải cảnh giác.',
     tip:'务必 + V dùng cho lời dặn quan trọng; 提高警惕 là cụm cố định.'},

    {scene:'Bạn thân trách em không đến dự sinh nhật.',
     a:{sp:'Bạn',zh:'昨天我生日，你怎么没来？我等了你半天。',vn:'Hôm qua sinh nhật tớ, sao cậu không đến? Tớ đợi cậu mãi.'},
     need:['Dùng 不得已','Dùng 嘛 hoặc 理所当然'],
     sample:'真对不起，我也是不得已，奶奶突然住院了，我得陪着她嘛。',
     samplePy:'Zhēn duìbuqǐ, wǒ yě shì bùdéyǐ, nǎinai tūrán zhù yuàn le, wǒ děi péizhe tā ma.',
     sampleVn:'Thật xin lỗi, tớ cũng bất đắc dĩ thôi, bà tớ đột nhiên nhập viện, tớ phải ở bên bà mà.',
     tip:'主语 + 是 + 不得已 (không dùng 不得不 ở đây); 嘛 cuối câu nhấn lý do hiển nhiên.'},

    {scene:'Đồng nghiệp hỏi vì sao công ty cho làm việc ở nhà.',
     a:{sp:'Đồng nghiệp',zh:'听说公司下个月开始可以在家办公了，为什么？',vn:'Nghe nói từ tháng sau công ty cho làm ở nhà, vì sao vậy?'},
     need:['Dùng 鉴于','Dùng 噪音'],
     sample:'鉴于办公楼旁边正在施工，噪音太大，公司决定让大家暂时在家办公。',
     samplePy:'Jiànyú bàngōnglóu pángbiān zhèngzài shīgōng, zàoyīn tài dà, gōngsī juédìng ràng dàjiā zànshí zài jiā bàngōng.',
     sampleVn:'Xét thấy bên cạnh toà văn phòng đang thi công, tiếng ồn quá lớn, công ty quyết định cho mọi người tạm thời làm việc ở nhà.',
     tip:'鉴于 + lý do (vế trước), vế sau là quyết định 决定…….'},

    {scene:'Em gái hỏi vì sao nghe tiếng mưa lại buồn ngủ.',
     a:{sp:'Em gái',zh:'为什么我一听下雨的声音就想睡觉？',vn:'Sao em cứ nghe tiếng mưa là buồn ngủ?'},
     need:['Dùng 暗示','Dùng 神经'],
     sample:'因为雨声是一种白噪音，它暗示大脑周围很安全，紧张的神经就放松下来了。',
     samplePy:'Yīnwèi yǔ shēng shì yì zhǒng bái zàoyīn, tā ànshì dànǎo zhōuwéi hěn ānquán, jǐnzhāng de shénjīng jiù fàngsōng xiàlái le.',
     sampleVn:'Vì tiếng mưa là một loại tiếng ồn trắng, nó ngầm báo cho não biết xung quanh rất an toàn, thần kinh căng thẳng liền dịu xuống.',
     tip:'Dùng lại ý bài khoá: 暗示 + ai + mệnh đề; 放松下来 (bổ ngữ 下来).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Thông báo chính thức của nhà trường dán trên bảng tin.',
     a:'明天的活动大家一定要来啊，别忘了！',b:'明日活动十分重要，请全体同学务必准时参加。',better:'b',
     why:'Thông báo chính thức dùng văn viết: 明日, 全体同学, 务必准时参加. Câu a (啊, 别忘了) là lời nhắc miệng giữa bạn bè.'},

    {scene:'Nhắn tin rủ bạn thân cuối tuần sang nhà chơi.',
     a:'周末没事儿的话，来我家玩儿嘛！',b:'鉴于周末无事，特邀请您光临寒舍。',better:'a',
     why:'Với bạn thân, lời gần gũi (没事儿, 玩儿, 嘛) tự nhiên. Câu b (鉴于, 光临寒舍) quá trang trọng, nghe như đùa.'},

    {scene:'Bác sĩ ghi vào bệnh án.',
     a:'患者症状明显减轻，建议继续进行辅助治疗。',b:'病人好多了，再听听音乐啥的就行。',better:'a',
     why:'Bệnh án cần thuật ngữ: 患者, 症状, 辅助治疗. Câu b (好多了, 啥的) là cách nói đời thường.'},

    {scene:'Mẹ dỗ đứa con nhỏ đang sợ tiếng mưa.',
     a:'宝贝，别怕，外面是下雨的声音，快睡吧。',b:'此声音系白噪音，暗示环境安全，请放心入睡。',better:'a',
     why:'Nói với trẻ nhỏ phải dịu dàng, đơn giản. Câu b (此, 系, 请放心入睡) giống văn bản khoa học.'},

    {scene:'Viết báo cáo khoa học về chọn lọc tự nhiên.',
     a:'对白噪音减弱越敏感的生物，存活的可能性越大，这种意识得以世代相传。',b:'哪种动物耳朵灵，哪种就活得长，一代传一代。',better:'a',
     why:'Báo cáo khoa học dùng văn viết chặt chẽ: 生物, 存活, 世代相传. Câu b (耳朵灵, 活得长) là cách nói dân dã.'},

    {scene:'Nhắn tin xin lỗi bạn vì đến muộn buổi hẹn đi xem phim.',
     a:'由于交通状况不佳，本人不得已迟到，特此致歉。',b:'路上堵死了，我也没办法，真不好意思啊！',better:'b',
     why:'Giữa bạn bè, lời xin lỗi thân mật (堵死了, 真不好意思啊) chân thành hơn. Câu a (本人, 特此致歉) là giọng công văn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2 phút.',
  outline: [
    {step:'文中提到了哪几种白噪音？', cue:'①下雨的声音 ②波浪拍打岩石的声音 ③微风抚摸树叶的声音 ④鸟的叫声 ⑤会议室的嘈杂声', words:['白噪音','不妨','描绘','波浪','岩石','抚摸','嘈杂']},
    {step:'白噪音给我们什么暗示？', cue:'①安全 ②危险', words:['暗示','务必','警惕','解除','提示','靠拢']},
    {step:'鸟儿为什么要叫？', cue:'①寻找异性 ②延续后代', words:['不得已','暴露','惹祸','雌雄','祖先','遗留','延续','后代','呼唤','竖','配偶','世代']},
    {step:'白噪音有什么功效？', cue:'①放松身心 ②治疗疾病（神经系统疾病、多动症患儿） ③恢复工作效率', words:['鉴于','功效','理所当然','神经','疾病','患者','辅助','症状','愈','障碍','噪音','给予']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có kể đủ 5 loại tiếng ồn trắng (mưa, sóng, gió, chim, phòng họp) không?',
    'Ý 2 có nói rõ hai ám hiệu đối lập (nhiều tiếng ồn trắng = an toàn; tiếng ồn trắng yếu đi = nguy hiểm) không?',
    'Ý 3 có giải thích vì sao kêu là "bất đắc dĩ" (dễ lộ mình — nhưng phải tìm bạn, duy trì nòi giống) không?',
    'Ý 4 có dùng 鉴于……，理所当然地…… để dẫn sang ba công dụng, và kết bằng ý "thiên nhiên nhắc ta thả lỏng" không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 129–133) — đáp án theo đáp án sách
// (练一练 của 注释 không có trong đáp án sách → câu tham khảo; 扩展 bài này chỉ có bảng 词汇 搭配, không có bài tập)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'解除', chu:'除', ds:['删除','免除','除掉','除去']},
   cau:[
     {tu:'务必', chu:'必', dap:['必然','必定','必要','必须'], them:['未必','势必','不必','何必','必需','必将'],
      giai:'必 = nhất định, tất yếu (务必 = nhất thiết phải; 必须 = bắt buộc phải).'},
     {tu:'延续', chu:'续', dap:['继续','连续','断断续续','持续'], them:['陆续','后续','续集','接续','续约','存续'],
      giai:'续 = nối tiếp, tiếp theo (延续 = kéo dài, nối tiếp; 持续 = kéo dài liên tục).'},
     {tu:'后代', chu:'代', dap:['代替','代表','代理','代沟'], them:['时代','现代','古代','年代','一代','下一代'],
      giai:'代 trong 后代 = đời, thế hệ; đáp án sách mở rộng cả nghĩa "thay thế" (代替, 代表, 代理). Các từ thêm giữ nghĩa "đời, thời đại".'},
     {tu:'功效', chu:'功', dap:['功能','功劳','功利','成功'], them:['功用','立功','功绩','有功','事半功倍','功不可没'],
      giai:'功 = công, công dụng, thành quả (功效 = công hiệu; 功能 = chức năng; 功劳 = công lao).'}
   ]},

  {kieu:'gx', de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (đáp án theo sách)', dapSgk:true,
   cau:[
     {s:'有什么意见，你可以当面提出来，不要在背后议论。', tu:'不妨', dap:'有什么意见，你不妨当面提出来，不要在背后议论。',
      giai:'可以 → 不妨: gợi ý "cứ …", hàm ý làm vậy thì tốt hơn.'},
     {s:'明天的会非常重要，大家一定要参加。', tu:'务必', dap:'明天的会非常重要，大家务必要参加。',
      giai:'一定要 → 务必要: nhấn mạnh tính bắt buộc, trang trọng.'},
     {s:'他们实在没有别的办法，只好出去向别人借钱。', tu:'不得已', dap:'他们实在没有别的办法，不得已出去向别人借钱。',
      giai:'只好 → 不得已 (tính từ, đứng trước động từ làm trạng ngữ): bất đắc dĩ phải ….'},
     {s:'考虑到他出色的表现，公司决定让他担任部门经理。', tu:'鉴于', dap:'鉴于他出色的表现，公司决定让他担任部门经理。',
      giai:'考虑到 → 鉴于 (= 觉察到、考虑到): đứng đầu vế trước nêu căn cứ.'},
     {s:'他的病彻底治好了，全家都非常高兴。', tu:'愈', dap:'他的病彻底治愈了，全家都非常高兴。',
      giai:'治好 → 治愈 (văn viết, 愈 = khỏi bệnh).'},
     {s:'孩子按道理应该孝顺父母。', tu:'理所当然', dap:'孩子孝顺父母是理所当然的事情。',
      giai:'按道理应该 → ……是理所当然的事情: đổi thành câu 是……的 với thành ngữ làm định ngữ.'}
   ]},

  {kieu:'gx', de:'用“不妨”“务必”改写句子，用“鉴于”完成句子（注释1–3 · 练一练）', vn:'Dùng 不妨, 务必 viết lại câu; dùng 鉴于 hoàn thành câu (Chú thích 1–3 · Luyện tập). Sách không in đáp án — dưới đây là câu gợi ý, em viết khác mà đúng cấu trúc, đúng nghĩa vẫn được.',
   cau:[
     {s:'她说的方法也许可行，你试试也可以。', tu:'不妨', dap:'她说的方法也许可行，你不妨试试。',
      giai:'……也可以 (làm cũng được) → 不妨 + V: gợi ý nhẹ nhàng, hàm ý làm vậy thì tốt.'},
     {s:'想接触社会、了解社会，你可以从做志愿者入手。', tu:'不妨', dap:'想接触社会、了解社会，你不妨从做志愿者入手。',
      giai:'可以 → 不妨: vẫn là lời gợi ý, nhưng khuyến khích rõ hơn.'},
     {s:'从目前我们掌握的证据来看，我们或许可以做这样的假设。', tu:'不妨', dap:'从目前我们掌握的证据来看，我们不妨做这样的假设。',
      giai:'或许可以 (có lẽ có thể) → 不妨: "cứ thử giả thiết như vậy".'},
     {s:'危险来临的时候，大家一定要镇静。', tu:'务必', dap:'危险来临的时候，大家务必要镇静。',
      giai:'一定要 → 务必(要): thái độ kiên quyết, trang trọng hơn.'},
     {s:'请转告他，明天一定要出席会议。', tu:'务必', dap:'请转告他，明天务必出席会议。',
      giai:'一定要 + V → 务必 + V (có thể bỏ 要).'},
     {s:'山路不好走，开车一定要小心。', tu:'务必', dap:'山路不好走，开车务必要小心。',
      giai:'一定要 → 务必要: lời dặn dò kiên quyết.'},
     {s:'鉴于近来生意清淡，大家讨论决定＿＿。', tu:'鉴于', dap:'鉴于近来生意清淡，大家讨论决定推出一些优惠活动来吸引顾客。',
      giai:'Vế sau của 鉴于 là quyết định / biện pháp dựa trên lý do ở vế trước (buôn bán ế ẩm → làm khuyến mãi).'},
     {s:'鉴于篇幅所限，本章仅＿＿。', tu:'鉴于', dap:'鉴于篇幅所限，本章仅讨论几个最主要的问题。',
      giai:'鉴于篇幅所限 = do khuôn khổ có hạn → vế sau: chỉ bàn / giới thiệu phần chính (仅 + V).'},
     {s:'鉴于＿＿，学校决定明天停课一天。', tu:'鉴于', dap:'鉴于台风即将到来，学校决定明天停课一天。',
      giai:'Điền lý do khách quan đủ nghiêm trọng để nhà trường cho nghỉ học (bão, dịch bệnh…).'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['波浪','抚摸','岩石','神经','给予'],
   cau:[
     {s:'人们喜欢在海边听＿＿拍打＿＿的声音，喜欢在森林里听鸟儿的叫声，也喜欢听微风＿＿树叶发出的沙沙声，因为这些声音可以让紧张的＿＿放松下来。这些声音是大自然＿＿人们的宝贵礼物，可以治疗很多神经系统疾病。',
      dap:['波浪','岩石','抚摸','神经','给予']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['患者','障碍','症状','功效','辅助'],
   cau:[
     {s:'对于有睡眠＿＿的人来说，除了去医院接受治疗以外，一些＿＿性治疗方法的＿＿也很不错，比如：睡前喝一杯牛奶，听一些轻柔的音乐，放松心情等等，都可以减轻＿＿的＿＿。',
      dap:['障碍','辅助','功效','患者','症状']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong 【】; sách không có đáp án cố định — đây là câu gợi ý)',
   cau:[
     {mau:'其实【不论】是鸟叫，【还是】虫叫，【都】是寻求异性时，不得已而采取的危险举动，【因为】叫声暴露了自己，很容易惹祸。',
      khung:'不论＿＿，还是＿＿，都喜欢吃烤鸭，因为＿＿。',
      dap:['是中国人','外国游客','北京烤鸭皮脆肉嫩，味道特别香'],
      giai:'不论 A，还是 B，都……，因为……: dù là A hay B thì đều …, vì … (kết quả không đổi trong mọi trường hợp + nêu nguyên nhân).'},
     {mau:'【既要】延续后代，【又要】保护自己，【那就只有】用最大的声音，拼命呼唤，【同时】竖起耳朵，提高警惕，有危险马上闭嘴。',
      khung:'学习汉语时，既要＿＿，又要＿＿，那就只有＿＿，同时＿＿。',
      dap:['记住大量的汉字','练好听说能力','每天坚持读写听说','多找机会跟中国人聊天'],
      giai:'既要 A，又要 B，那就只有 C，同时 D: vừa phải A lại phải B thì chỉ còn cách C, đồng thời D.'}
   ]}
];
