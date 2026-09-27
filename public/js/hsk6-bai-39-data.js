// ══════════════════════════════════════════
// DATA — HSK6 Bài 39: 互联网时代的生活 (Cuộc sống trong thời đại Internet)
// 第十单元 热点追踪 · Nguồn: HSK标准教程6下 (tr. 198–207)
// Bài khoá: 互联网时代的生活 (1441 chữ) — Internet thay đổi cuộc sống · gọi vốn cộng đồng (众筹) · mặt trái của Internet
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'日新月异',py:'rìxīn-yuèyì',pos:'Thành ngữ',vn:'thay đổi từng ngày, đổi mới không ngừng',hv:'nhật tân nguyệt dị',em:'🚀',lesson:1,
   explain:['Thành ngữ: mỗi ngày một mới (日新), mỗi tháng một khác (月异) — chỉ sự phát triển, tiến bộ rất nhanh. Chỉ dùng cho sự thay đổi TÍCH CỰC.','Thường làm định ngữ (日新月异的变化 / 发展) hoặc vị ngữ (科技日新月异). Không mang tân ngữ, không đi với 很 (không nói *很日新月异).'],
   usage:'A + 日新月异; 日新月异的 + 变化 / 发展 / 进步; 发生着日新月异的变化.',
   collo:['日新月异的变化','科技日新月异','日新月异的发展','城市面貌日新月异'],
   ex_zh:'日新月异的变化',ex_py:'rìxīn-yuèyì de biànhuà',ex_vn:'Sự thay đổi từng ngày',
   exList:[
     {zh:'互联网让我们实实在在地感受到生活正发生着日新月异的变化。',py:'Hùliánwǎng ràng wǒmen shíshízàizài de gǎnshòu dào shēnghuó zhèng fāshēngzhe rìxīn-yuèyì de biànhuà.',vn:'Internet khiến chúng ta cảm nhận một cách thiết thực rằng cuộc sống đang đổi thay từng ngày.'},
     {zh:'现代科技日新月异，手机几乎每年都要更新换代。',py:'Xiàndài kējì rìxīn-yuèyì, shǒujī jīhū měi nián dōu yào gēngxīn huàndài.',vn:'Khoa học công nghệ hiện đại thay đổi từng ngày, điện thoại gần như năm nào cũng ra thế hệ mới.'},
     {zh:'这几年家乡的面貌日新月异，高楼一座接一座地建了起来。',py:'Zhè jǐ nián jiāxiāng de miànmào rìxīn-yuèyì, gāolóu yí zuò jiē yí zuò de jiànle qǐlai.',vn:'Mấy năm nay diện mạo quê hương đổi mới từng ngày, nhà cao tầng lần lượt mọc lên.'}
   ],
   colloFull:[
     {zh:'日新月异的变化',py:'rìxīn-yuèyì de biànhuà',vn:'sự thay đổi từng ngày'},
     {zh:'科技日新月异',py:'kējì rìxīn-yuèyì',vn:'khoa học công nghệ đổi mới từng ngày'},
     {zh:'日新月异的发展',py:'rìxīn-yuèyì de fāzhǎn',vn:'sự phát triển nhanh chóng'},
     {zh:'城市面貌日新月异',py:'chéngshì miànmào rìxīn-yuèyì',vn:'diện mạo thành phố đổi mới từng ngày'}
   ],
   patterns:[
     {s:'……发生着日新月异的变化',m:'… đang thay đổi từng ngày'},
     {s:'A + 日新月异',m:'A phát triển, đổi mới rất nhanh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự phổ biến của Internet, cách chúng ta mua sắm thay đổi từng ngày.',answer:'随着互联网的普及，我们购物的方式日新月异。',answerPy:'Suízhe hùliánwǎng de pǔjí, wǒmen gòuwù de fāngshì rìxīn-yuèyì.',
      note:'随着……，…… (ôn HSK 5); 普及 — HSK 6 bài 30.',pair:'随着……'},
     {promptLang:'vi',prompt:'Khoa học kỹ thuật đổi mới từng ngày, nếu không học thì sẽ bị tụt hậu.',answer:'科学技术日新月异，如果不学习，就会落后。',answerPy:'Kēxué jìshù rìxīn-yuèyì, rúguǒ bù xuéxí, jiù huì luòhòu.',
      note:'如果……就…… (ôn HSK 3–4).',pair:'如果……就……'}
   ]},

  {n:2,zh:'沉闷',py:'chénmèn',pos:'Tính từ',vn:'buồn tẻ, nặng nề, ngột ngạt',hv:'trầm muộn',em:'😶',lesson:1,
   explain:['① (Bầu không khí, thời tiết) nặng nề, ngột ngạt, khiến người ta khó chịu: 会议气氛十分沉闷, 天气沉闷.','② (Cuộc sống, tính cách, âm thanh) buồn tẻ, thiếu sinh động; trầm lặng ít nói: 生活单调沉闷, 他性格沉闷. Hay đi đôi 单调沉闷. 闷 ở đây đọc mèn (thanh 4).'],
   usage:'气氛 / 天气 / 生活 + 沉闷; 单调沉闷; 打破 + ……的沉闷 / 沉闷的气氛.',
   collo:['气氛沉闷','单调沉闷','沉闷的生活','打破沉闷'],
   ex_zh:'气氛十分沉闷',ex_py:'qìfēn shífēn chénmèn',ex_vn:'Bầu không khí rất nặng nề',
   exList:[
     {zh:'它使我们的生活不再单调沉闷，每一天都变得浪漫、丰富和充实。',py:'Tā shǐ wǒmen de shēnghuó bú zài dāndiào chénmèn, měi yì tiān dōu biàn de làngmàn, fēngfù hé chōngshí.',vn:'Nó khiến cuộc sống của chúng ta không còn đơn điệu buồn tẻ, mỗi ngày đều trở nên lãng mạn, phong phú và đủ đầy.'},
     {zh:'屋子里坐满了人，谁也不发表意见，气氛十分沉闷。',py:'Wūzi li zuòmǎnle rén, shéi yě bù fābiǎo yìjiàn, qìfēn shífēn chénmèn.',vn:'Trong phòng ngồi kín người, chẳng ai phát biểu ý kiến, bầu không khí vô cùng nặng nề.'},
     {zh:'他讲了个笑话，一下子打破了会场沉闷的气氛。',py:'Tā jiǎngle ge xiàohua, yíxiàzi dǎpòle huìchǎng chénmèn de qìfēn.',vn:'Anh ấy kể một câu chuyện cười, lập tức phá tan bầu không khí nặng nề của hội trường.'}
   ],
   colloFull:[
     {zh:'气氛沉闷',py:'qìfēn chénmèn',vn:'bầu không khí nặng nề'},
     {zh:'单调沉闷',py:'dāndiào chénmèn',vn:'đơn điệu buồn tẻ'},
     {zh:'沉闷的生活',py:'chénmèn de shēnghuó',vn:'cuộc sống buồn tẻ'},
     {zh:'打破沉闷',py:'dǎpò chénmèn',vn:'phá vỡ sự nặng nề'},
     {zh:'天气沉闷',py:'tiānqì chénmèn',vn:'thời tiết oi bức, ngột ngạt'}
   ],
   patterns:[
     {s:'……的气氛十分沉闷',m:'Bầu không khí … rất nặng nề'},
     {s:'不再单调沉闷',m:'không còn đơn điệu, buồn tẻ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có con mèo này, cuộc sống của bà nội không còn buồn tẻ nữa.',answer:'自从有了这只猫，奶奶的生活就不再沉闷了。',answerPy:'Zìcóng yǒule zhè zhī māo, nǎinai de shēnghuó jiù bú zài chénmèn le.',
      note:'自从……就…… (ôn HSK 4); 不再……了 = không còn … nữa.',pair:'自从……'},
     {promptLang:'vi',prompt:'Trước cơn mưa, thời tiết ngột ngạt đến mức khiến người ta không thở nổi.',answer:'下雨之前，天气沉闷得让人喘不过气来。',answerPy:'Xià yǔ zhīqián, tiānqì chénmèn de ràng rén chuǎn bu guò qì lai.',
      note:'Adj + 得 + 让人…… (bổ ngữ trạng thái, ôn HSK 4).',pair:'……得让人……'}
   ]},

  {n:3,zh:'充实',py:'chōngshí',pos:'Tính từ / Động từ',vn:'dồi dào, phong phú, đầy đủ; làm phong phú',hv:'sung thực',em:'📚',lesson:1,
   explain:['Tính từ: (nội dung, cuộc sống, tinh thần) phong phú, đầy đủ, không trống rỗng: 生活很充实, 内容充实. Trái nghĩa 空虚.','Động từ: làm cho đầy đủ, tăng cường thêm: 充实自己 (bồi dưỡng bản thân), 充实内容, 充实力量.'],
   usage:'生活 / 内容 / 日子 + 充实; 过得很充实; 充实 + 自己 / 内容 / 队伍.',
   collo:['生活很充实','内容充实','充实自己','过得很充实'],
   ex_zh:'她生活得很充实',ex_py:'tā shēnghuó de hěn chōngshí',ex_vn:'Cô ấy sống rất đủ đầy',
   exList:[
     {zh:'她每天忙个不停，生活得很充实。',py:'Tā měi tiān máng ge bù tíng, shēnghuó de hěn chōngshí.',vn:'Ngày nào cô ấy cũng bận không ngơi tay, sống rất đủ đầy.'},
     {zh:'这篇文章内容充实，结构清楚，值得一读。',py:'Zhè piān wénzhāng nèiróng chōngshí, jiégòu qīngchu, zhíde yì dú.',vn:'Bài viết này nội dung phong phú, bố cục rõ ràng, đáng để đọc.'},
     {zh:'暑假里他报了两个培训班，想利用假期充实自己。',py:'Shǔjià li tā bàole liǎng ge péixùnbān, xiǎng lìyòng jiàqī chōngshí zìjǐ.',vn:'Kỳ nghỉ hè cậu ấy đăng ký hai lớp học, muốn tận dụng kỳ nghỉ để bồi dưỡng bản thân.'}
   ],
   colloFull:[
     {zh:'生活很充实',py:'shēnghuó hěn chōngshí',vn:'cuộc sống rất đủ đầy'},
     {zh:'内容充实',py:'nèiróng chōngshí',vn:'nội dung phong phú'},
     {zh:'充实自己',py:'chōngshí zìjǐ',vn:'bồi dưỡng bản thân'},
     {zh:'过得很充实',py:'guò de hěn chōngshí',vn:'sống rất có ý nghĩa'},
     {zh:'充实内容',py:'chōngshí nèiróng',vn:'làm phong phú nội dung'}
   ],
   patterns:[
     {s:'S + 过得 / 生活得 + 很充实',m:'sống rất đủ đầy, có ý nghĩa'},
     {s:'利用……充实自己',m:'tận dụng … để bồi dưỡng bản thân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công việc rất bận, nhưng anh ấy cảm thấy mỗi ngày đều rất đủ đầy.',answer:'虽然工作很忙，但是他觉得每一天都过得很充实。',answerPy:'Suīrán gōngzuò hěn máng, dànshì tā juéde měi yì tiān dōu guò de hěn chōngshí.',
      note:'虽然……但是…… (ôn HSK 4).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ khi không ngừng bồi dưỡng bản thân, bạn mới không bị thời đại đào thải.',answer:'只有不断充实自己，你才不会被时代淘汰。',answerPy:'Zhǐyǒu búduàn chōngshí zìjǐ, nǐ cái bú huì bèi shídài táotài.',
      note:'只有……才…… (ôn HSK 4); 淘汰 — HSK 5.',pair:'只有……才……'}
   ]},

  {n:4,zh:'交易',py:'jiāoyì',pos:'Động từ / Danh từ',vn:'mua bán, giao dịch',hv:'giao dịch',em:'🤝',lesson:1,
   explain:['Động từ: mua bán, trao đổi hàng hoá, tiền bạc: 网上交易, 进行交易. Danh từ: vụ giao dịch — 一笔交易, 股票交易.','Nghĩa bóng (xấu): trao đổi lợi ích mờ ám — 权钱交易 (đổi quyền lấy tiền), 做交易 (thoả thuận ngầm).'],
   usage:'进行 / 完成 + 交易; 一笔交易; 网上 / 股票 / 现金 + 交易; 交易市场.',
   collo:['网上交易','股票交易','一笔交易','进行交易'],
   ex_zh:'进行股票交易',ex_py:'jìnxíng gǔpiào jiāoyì',ex_vn:'Tiến hành giao dịch cổ phiếu',
   exList:[
     {zh:'它将异地购物、交易变为了可能。',py:'Tā jiāng yìdì gòuwù, jiāoyì biànwéile kěnéng.',vn:'Nó biến việc mua sắm, giao dịch ở nơi xa thành điều có thể.'},
     {zh:'现在用手机就可以随时随地进行股票交易。',py:'Xiànzài yòng shǒujī jiù kěyǐ suíshí-suídì jìnxíng gǔpiào jiāoyì.',vn:'Bây giờ dùng điện thoại là có thể giao dịch cổ phiếu mọi lúc mọi nơi.'},
     {zh:'双方谈了三个小时，终于完成了这笔交易。',py:'Shuāngfāng tánle sān ge xiǎoshí, zhōngyú wánchéngle zhè bǐ jiāoyì.',vn:'Hai bên bàn bạc ba tiếng đồng hồ, cuối cùng đã hoàn thành vụ giao dịch này.'}
   ],
   colloFull:[
     {zh:'网上交易',py:'wǎngshàng jiāoyì',vn:'giao dịch trên mạng'},
     {zh:'股票交易',py:'gǔpiào jiāoyì',vn:'giao dịch cổ phiếu'},
     {zh:'一笔交易',py:'yì bǐ jiāoyì',vn:'một vụ giao dịch'},
     {zh:'进行交易',py:'jìnxíng jiāoyì',vn:'tiến hành giao dịch'},
     {zh:'交易市场',py:'jiāoyì shìchǎng',vn:'chợ / sàn giao dịch'}
   ],
   patterns:[
     {s:'进行 + ……交易',m:'tiến hành giao dịch …'},
     {s:'完成一笔交易',m:'hoàn thành một vụ giao dịch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giao dịch trên mạng tuy tiện lợi, nhưng phải cẩn thận để tránh bị lừa.',answer:'网上交易虽然方便，但是要小心，以免上当受骗。',answerPy:'Wǎngshàng jiāoyì suīrán fāngbiàn, dànshì yào xiǎoxīn, yǐmiǎn shàngdàng shòupiàn.',
      note:'以免 — HSK 6 bài 21; 上当受骗 = mắc lừa.',pair:'以免……'},
     {promptLang:'vi',prompt:'Vụ giao dịch này một khi thành công, công ty sẽ kiếm được rất nhiều tiền.',answer:'这笔交易一旦成功，公司就能赚很多钱。',answerPy:'Zhè bǐ jiāoyì yídàn chénggōng, gōngsī jiù néng zhuàn hěn duō qián.',
      note:'一旦……就…… (ôn HSK 5).',pair:'一旦……就……'}
   ]},

  {n:5,zh:'任意',py:'rènyì',pos:'Phó từ',vn:'tùy ý, tha hồ, tùy tiện',hv:'nhậm ý',em:'🎯',lesson:1,
   explain:['Phó từ: muốn làm thế nào thì làm thế ấy, không bị ràng buộc, không bị hạn chế (想怎么做就怎么做，不受约束，不受限制). Đứng trước động từ: 任意挑选, 任意放大. Đây là điểm ngữ pháp 1 của bài.','Sắc thái: tích cực khi nói tự do lựa chọn (任意挑选商品); tiêu cực khi nói tuỳ tiện làm bừa (对自然任意改造, 不能任意反悔). Khác 任何 (đại từ, đứng trước danh từ: 任何人).'],
   usage:'任意 + V (挑选 / 选用 / 放大 / 改变 / 反悔); 不能任意 + V; 任意 + V + 一 + lượng từ.',
   collo:['任意挑选','任意放大','任意选用','不能任意改变'],
   ex_zh:'任意挑选商品',ex_py:'rènyì tiāoxuǎn shāngpǐn',ex_vn:'Tha hồ lựa chọn hàng hoá',
   exList:[
     {zh:'我们足不出户就能任意挑选欧洲、美洲的商品。',py:'Wǒmen zú bù chū hù jiù néng rènyì tiāoxuǎn Ōuzhōu, Měizhōu de shāngpǐn.',vn:'Không cần bước chân ra khỏi nhà, chúng ta vẫn có thể tha hồ chọn hàng hoá châu Âu, châu Mỹ.'},
     {zh:'合同一旦生效，任何一方都不能任意反悔了。',py:'Hétong yídàn shēngxiào, rènhé yì fāng dōu bù néng rènyì fǎnhuǐ le.',vn:'Hợp đồng một khi có hiệu lực thì không bên nào được tuỳ tiện nuốt lời nữa.'},
     {zh:'那个魔术师太神奇了，你任意抽一张纸牌，他都能猜出来。',py:'Nàge móshùshī tài shénqí le, nǐ rènyì chōu yì zhāng zhǐpái, tā dōu néng cāi chulai.',vn:'Ảo thuật gia ấy thần kỳ quá, bạn rút bừa một lá bài, ông ấy cũng đoán ra được.'}
   ],
   colloFull:[
     {zh:'任意挑选',py:'rènyì tiāoxuǎn',vn:'tha hồ lựa chọn'},
     {zh:'任意放大',py:'rènyì fàngdà',vn:'phóng to tuỳ ý'},
     {zh:'任意选用',py:'rènyì xuǎnyòng',vn:'tuỳ ý chọn dùng'},
     {zh:'不能任意改变',py:'bù néng rènyì gǎibiàn',vn:'không được tuỳ tiện thay đổi'},
     {zh:'任意反悔',py:'rènyì fǎnhuǐ',vn:'tuỳ tiện nuốt lời'}
   ],
   patterns:[
     {s:'可以 / 能 + 任意 + V',m:'có thể tuỳ ý làm gì'},
     {s:'不能 + 任意 + V',m:'không được tuỳ tiện làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong thư viện, sách trên giá bạn có thể tuỳ ý chọn đọc.',answer:'在图书馆里，书架上的书你可以任意挑选阅读。',answerPy:'Zài túshūguǎn li, shūjià shang de shū nǐ kěyǐ rènyì tiāoxuǎn yuèdú.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề (书架上的书你可以……).',pair:'chủ đề đầu câu'},
     {promptLang:'vi',prompt:'Kế hoạch đã định rồi thì không được tuỳ tiện thay đổi, trừ phi có tình huống đặc biệt.',answer:'计划已经定了，就不能任意改变，除非有特殊情况。',answerPy:'Jìhuà yǐjīng dìng le, jiù bù néng rènyì gǎibiàn, chúfēi yǒu tèshū qíngkuàng.',
      note:'除非 = trừ phi (ôn HSK 5).',pair:'除非……'}
   ]},

  {n:6,zh:'乐趣',py:'lèqù',pos:'Danh từ',vn:'niềm vui, điều thích thú, thú vị',hv:'lạc thú',em:'😄',lesson:1,
   explain:['Danh từ: niềm vui, sự thú vị khiến người ta vui sướng (使人感到快乐的趣味). Thường là cảm nhận KHI hoặc SAU khi tham gia một hoạt động: 工作中的乐趣, 读书的乐趣.','Hay đi với 感（觉）到、找到、成为、享受、带来: 享受生活的乐趣. Khác 兴趣 (sự yêu thích, hứng thú với sự vật — 对……感兴趣). Xem 词语辨析 của bài.'],
   usage:'……的乐趣; 找到 / 享受 / 感受到 + 乐趣; 给……带来乐趣; 乐趣无穷.',
   collo:['生活的乐趣','享受乐趣','找到乐趣','带来乐趣'],
   ex_zh:'享受生活的乐趣',ex_py:'xiǎngshòu shēnghuó de lèqù',ex_vn:'Tận hưởng niềm vui cuộc sống',
   exList:[
     {zh:'我们可以在网上学习，自由而不失乐趣。',py:'Wǒmen kěyǐ zài wǎngshàng xuéxí, zìyóu ér bù shī lèqù.',vn:'Chúng ta có thể học trên mạng, tự do mà vẫn không mất đi niềm vui.'},
     {zh:'只有乐观的人才能随时享受生活中的乐趣。',py:'Zhǐyǒu lèguān de rén cái néng suíshí xiǎngshòu shēnghuó zhōng de lèqù.',vn:'Chỉ người lạc quan mới có thể tận hưởng niềm vui trong cuộc sống bất cứ lúc nào.'},
     {zh:'他能在绘画中找到乐趣。',py:'Tā néng zài huìhuà zhōng zhǎodào lèqù.',vn:'Anh ấy có thể tìm thấy niềm vui trong hội hoạ.'}
   ],
   colloFull:[
     {zh:'生活的乐趣',py:'shēnghuó de lèqù',vn:'niềm vui cuộc sống'},
     {zh:'享受乐趣',py:'xiǎngshòu lèqù',vn:'tận hưởng niềm vui'},
     {zh:'找到乐趣',py:'zhǎodào lèqù',vn:'tìm thấy niềm vui'},
     {zh:'带来乐趣',py:'dàilái lèqù',vn:'mang lại niềm vui'},
     {zh:'乐趣无穷',py:'lèqù wúqióng',vn:'niềm vui vô tận'}
   ],
   patterns:[
     {s:'在……中找到乐趣',m:'tìm thấy niềm vui trong …'},
     {s:'给……带来……乐趣',m:'đem lại niềm vui cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nuôi một chú chó nhỏ đã mang lại cho cả nhà chúng tôi rất nhiều niềm vui.',answer:'养了一只小狗，给我们全家带来了很多乐趣。',answerPy:'Yǎngle yì zhī xiǎogǒu, gěi wǒmen quán jiā dàiláile hěn duō lèqù.',
      note:'给 + người + 带来 + N (ôn HSK 4).',pair:'给……带来……'},
     {promptLang:'vi',prompt:'Chỉ khi thật sự bỏ công sức, bạn mới cảm nhận được niềm vui trong công việc.',answer:'只有真正付出了努力，你才能感受到工作中的乐趣。',answerPy:'Zhǐyǒu zhēnzhèng fùchūle nǔlì, nǐ cái néng gǎnshòu dào gōngzuò zhōng de lèqù.',
      note:'只有……才…… (điều kiện duy nhất).',pair:'只有……才……'}
   ]},

  {n:7,zh:'设立',py:'shèlì',pos:'Động từ',vn:'thành lập, thiết lập, mở ra',hv:'thiết lập',em:'🏗️',lesson:1,
   explain:['Động từ: lập ra, đặt ra (cơ quan, tổ chức, giải thưởng, quỹ, trang web…): 设立办事处, 设立奖学金. Văn viết, trang trọng; luôn mang tân ngữ.','Trong bài: 设立个人网站 = lập trang web cá nhân. Khác 成立 (một tổ chức chính thức ra đời, thường không mang tân ngữ: 公司成立了) và 建立 (xây dựng quan hệ, chế độ). Xem 词语辨析.'],
   usage:'设立 + 机构 / 办事处 / 奖学金 / 基金 / 网站 / 专柜; 在……设立…….',
   collo:['设立个人网站','设立奖学金','设立办事处','设立基金'],
   ex_zh:'设立个人网站',ex_py:'shèlì gèrén wǎngzhàn',ex_vn:'Lập trang web cá nhân',
   exList:[
     {zh:'我们能设立个人网站，既能扩大你的朋友圈，又能让你小小的虚荣心得到满足。',py:'Wǒmen néng shèlì gèrén wǎngzhàn, jì néng kuòdà nǐ de péngyouquān, yòu néng ràng nǐ xiǎoxiǎo de xūróngxīn dédào mǎnzú.',vn:'Chúng ta có thể lập trang web cá nhân, vừa mở rộng vòng bạn bè của bạn, vừa thoả mãn chút hư vinh nho nhỏ của bạn.'},
     {zh:'这家公司在越南设立了办事处。',py:'Zhè jiā gōngsī zài Yuènán shèlìle bànshìchù.',vn:'Công ty này đã lập văn phòng đại diện ở Việt Nam.'},
     {zh:'学校设立了奖学金，专门奖励家庭困难的优秀学生。',py:'Xuéxiào shèlìle jiǎngxuéjīn, zhuānmén jiǎnglì jiātíng kùnnan de yōuxiù xuésheng.',vn:'Nhà trường lập quỹ học bổng, chuyên khen thưởng học sinh giỏi có hoàn cảnh khó khăn.'}
   ],
   colloFull:[
     {zh:'设立个人网站',py:'shèlì gèrén wǎngzhàn',vn:'lập trang web cá nhân'},
     {zh:'设立奖学金',py:'shèlì jiǎngxuéjīn',vn:'lập học bổng'},
     {zh:'设立办事处',py:'shèlì bànshìchù',vn:'lập văn phòng đại diện'},
     {zh:'设立基金',py:'shèlì jījīn',vn:'lập quỹ'},
     {zh:'设立专柜',py:'shèlì zhuānguì',vn:'mở quầy chuyên bán'}
   ],
   patterns:[
     {s:'在 + nơi chốn + 设立 + cơ quan',m:'lập cơ quan … ở …'},
     {s:'设立……，专门……',m:'lập ra … chuyên để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giúp đỡ trẻ em vùng núi, họ đã lập ra một quỹ từ thiện.',answer:'为了帮助山区的孩子，他们设立了一个慈善基金。',answerPy:'Wèile bāngzhù shānqū de háizi, tāmen shèlìle yí ge císhàn jījīn.',
      note:'为了…… (mục đích, ôn HSK 3); 慈善 — từ của bài.',pair:'为了……'},
     {promptLang:'vi',prompt:'Doanh nghiệp này không chỉ lập học bổng mà còn cung cấp cơ hội thực tập cho sinh viên.',answer:'这家企业不仅设立了奖学金，还为学生提供实习机会。',answerPy:'Zhè jiā qǐyè bùjǐn shèlìle jiǎngxuéjīn, hái wèi xuésheng tígōng shíxí jīhuì.',
      note:'不仅……还…… (ôn HSK 4–5).',pair:'不仅……还……'}
   ]},

  {n:8,zh:'虚荣',py:'xūróng',pos:'Danh từ / Tính từ',vn:'hư vinh, thói sĩ diện',hv:'hư vinh',em:'🪞',lesson:1,
   explain:['Danh từ: vinh dự bề ngoài, không thực chất; hay gặp trong 虚荣心 (lòng hư vinh — thích được khen, thích khoe). Tính từ: ham hư vinh — 她有点儿虚荣.','Mang sắc thái chê nhẹ. Trong bài: 让你小小的虚荣心得到满足 — "thoả mãn chút hư vinh nho nhỏ", giọng đùa vui chứ không nặng nề.'],
   usage:'虚荣心; 满足 + 虚荣心; 爱慕虚荣 (ham hư vinh); 为了虚荣而…….',
   collo:['虚荣心','满足虚荣心','爱慕虚荣','虚荣心很强'],
   ex_zh:'满足虚荣心',ex_py:'mǎnzú xūróngxīn',ex_vn:'Thoả mãn lòng hư vinh',
   exList:[
     {zh:'设立个人网站能让你小小的虚荣心得到满足。',py:'Shèlì gèrén wǎngzhàn néng ràng nǐ xiǎoxiǎo de xūróngxīn dédào mǎnzú.',vn:'Lập trang web cá nhân có thể thoả mãn chút hư vinh nho nhỏ của bạn.'},
     {zh:'为了满足自己的虚荣心，她借钱买了一个名牌包。',py:'Wèile mǎnzú zìjǐ de xūróngxīn, tā jiè qián mǎile yí ge míngpái bāo.',vn:'Để thoả mãn lòng hư vinh của mình, cô ấy vay tiền mua một chiếc túi hàng hiệu.'},
     {zh:'他这个人爱慕虚荣，总喜欢在朋友面前炫耀。',py:'Tā zhège rén àimù xūróng, zǒng xǐhuan zài péngyou miànqián xuànyào.',vn:'Anh ta là người ham hư vinh, lúc nào cũng thích khoe khoang trước mặt bạn bè.'}
   ],
   colloFull:[
     {zh:'虚荣心',py:'xūróngxīn',vn:'lòng hư vinh'},
     {zh:'满足虚荣心',py:'mǎnzú xūróngxīn',vn:'thoả mãn lòng hư vinh'},
     {zh:'爱慕虚荣',py:'àimù xūróng',vn:'ham hư vinh'},
     {zh:'虚荣心很强',py:'xūróngxīn hěn qiáng',vn:'rất sĩ diện'},
     {zh:'有点儿虚荣',py:'yǒudiǎnr xūróng',vn:'hơi sĩ diện'}
   ],
   patterns:[
     {s:'让……的虚荣心得到满足',m:'làm thoả mãn lòng hư vinh của …'},
     {s:'为了虚荣而……',m:'vì hư vinh mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai cũng có chút hư vinh, được người khác khen thì ai cũng vui.',answer:'人人都有一点儿虚荣心，被别人表扬了谁都高兴。',answerPy:'Rénrén dōu yǒu yìdiǎnr xūróngxīn, bèi biérén biǎoyángle shéi dōu gāoxìng.',
      note:'Câu bị động 被 + người + V; 谁都…… (đại từ nghi vấn phiếm chỉ, ôn HSK 4).',pair:'谁都……'},
     {promptLang:'vi',prompt:'Đừng vì hư vinh mà mua những thứ mình hoàn toàn không cần.',answer:'不要为了虚荣而买自己根本不需要的东西。',answerPy:'Búyào wèile xūróng ér mǎi zìjǐ gēnběn bù xūyào de dōngxi.',
      note:'为了……而…… (mục đích – hành động, văn viết).',pair:'为了……而……'}
   ]},

  {n:9,zh:'珍贵',py:'zhēnguì',pos:'Tính từ',vn:'quý báu, quý giá',hv:'trân quý',em:'💎',lesson:1,
   explain:['Tính từ: có giá trị lớn, hiếm có, đáng quý: 珍贵的礼物, 珍贵的文物, 珍贵的机会. Nhấn cả giá trị vật chất lẫn tinh thần.','Gần nghĩa 宝贵 (hay dùng cho thứ trừu tượng: 宝贵的时间, 宝贵的意见). 珍贵 hay đi với vật cụ thể hiếm có, kỷ niệm, tài liệu: 珍贵的照片, 珍贵动物. Khác 昂贵 (đắt đỏ — chỉ nói giá tiền).'],
   usage:'珍贵的 + 礼物 / 文物 / 资料 / 照片 / 机会; 十分 / 极其 + 珍贵.',
   collo:['珍贵的礼物','珍贵的文物','珍贵的照片','十分珍贵'],
   ex_zh:'珍贵的礼物',ex_py:'zhēnguì de lǐwù',ex_vn:'Món quà quý giá',
   exList:[
     {zh:'还可以设立你亲友的网站，作为赠送给他们的珍贵礼物。',py:'Hái kěyǐ shèlì nǐ qīnyǒu de wǎngzhàn, zuòwéi zèngsòng gěi tāmen de zhēnguì lǐwù.',vn:'Còn có thể lập trang web cho người thân, bạn bè, làm món quà quý giá tặng họ.'},
     {zh:'博物馆里收藏着许多珍贵的文物。',py:'Bówùguǎn li shōucángzhe xǔduō zhēnguì de wénwù.',vn:'Trong bảo tàng lưu giữ rất nhiều cổ vật quý giá.'},
     {zh:'这张老照片是爷爷留给我们的最珍贵的纪念。',py:'Zhè zhāng lǎo zhàopiàn shì yéye liú gěi wǒmen de zuì zhēnguì de jìniàn.',vn:'Tấm ảnh cũ này là kỷ vật quý giá nhất ông nội để lại cho chúng tôi.'}
   ],
   colloFull:[
     {zh:'珍贵的礼物',py:'zhēnguì de lǐwù',vn:'món quà quý giá'},
     {zh:'珍贵的文物',py:'zhēnguì de wénwù',vn:'cổ vật quý giá'},
     {zh:'珍贵的照片',py:'zhēnguì de zhàopiàn',vn:'bức ảnh quý giá'},
     {zh:'十分珍贵',py:'shífēn zhēnguì',vn:'vô cùng quý giá'},
     {zh:'珍贵的机会',py:'zhēnguì de jīhuì',vn:'cơ hội quý báu'}
   ],
   patterns:[
     {s:'作为……的珍贵礼物',m:'làm món quà quý giá …'},
     {s:'对……来说十分珍贵',m:'đối với … rất quý giá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với tôi, tình bạn này quý giá hơn bất cứ thứ gì.',answer:'对我来说，这份友谊比什么都珍贵。',answerPy:'Duì wǒ lái shuō, zhè fèn yǒuyì bǐ shénme dōu zhēnguì.',
      note:'对……来说; 比什么都 + Adj (ôn HSK 4).',pair:'比什么都……'},
     {promptLang:'vi',prompt:'Cơ hội du học quý giá như vậy, cậu tuyệt đối đừng bỏ lỡ.',answer:'这么珍贵的留学机会，你千万别错过。',answerPy:'Zhème zhēnguì de liúxué jīhuì, nǐ qiānwàn bié cuòguò.',
      note:'千万别…… (ôn HSK 4).',pair:'千万别……'}
   ]},

  {n:10,zh:'合伙',py:'héhuǒ',pos:'Động từ',vn:'hùn vốn, kết bè, chung vốn làm ăn',hv:'hợp hỏa',em:'👥',lesson:1,
   explain:['Động từ li hợp: nhiều người góp lại cùng làm một việc (thường là làm ăn, kinh doanh): 合伙做生意, 合伙开公司. Có thể tách: 合了伙. 伙 = bạn cùng hội (伙伴).','Danh từ phái sinh: 合伙人 (người cùng hùn vốn, đối tác). Khi làm việc xấu thì mang nghĩa "cấu kết": 合伙骗人.'],
   usage:'和 / 跟 + ai + 合伙 + V (做生意 / 开店 / 买房); 合伙人.',
   collo:['合伙做生意','合伙开公司','合伙人','跟朋友合伙'],
   ex_zh:'合伙做生意',ex_py:'héhuǒ zuò shēngyi',ex_vn:'Hùn vốn làm ăn',
   exList:[
     {zh:'最近又有人通过网络，和朋友、朋友的朋友合伙筹备资金买房。',py:'Zuìjìn yòu yǒu rén tōngguò wǎngluò, hé péngyou, péngyou de péngyou héhuǒ chóubèi zījīn mǎi fáng.',vn:'Gần đây lại có người thông qua mạng, cùng bạn bè và bạn của bạn bè hùn vốn gom tiền mua nhà.'},
     {zh:'大学毕业后，他跟两个同学合伙开了一家咖啡馆。',py:'Dàxué bìyè hòu, tā gēn liǎng ge tóngxué héhuǒ kāile yì jiā kāfēiguǎn.',vn:'Tốt nghiệp đại học xong, anh ấy cùng hai người bạn học hùn vốn mở một quán cà phê.'},
     {zh:'我跟合伙人一起筹备这个重大项目。',py:'Wǒ gēn héhuǒrén yìqǐ chóubèi zhège zhòngdà xiàngmù.',vn:'Tôi cùng đối tác chuẩn bị dự án quan trọng này.'}
   ],
   colloFull:[
     {zh:'合伙做生意',py:'héhuǒ zuò shēngyi',vn:'hùn vốn làm ăn'},
     {zh:'合伙开公司',py:'héhuǒ kāi gōngsī',vn:'hùn vốn mở công ty'},
     {zh:'合伙人',py:'héhuǒrén',vn:'người hùn vốn, đối tác'},
     {zh:'跟朋友合伙',py:'gēn péngyou héhuǒ',vn:'hùn vốn với bạn'},
     {zh:'合伙骗人',py:'héhuǒ piàn rén',vn:'cấu kết lừa người'}
   ],
   patterns:[
     {s:'A 跟 B 合伙 + V',m:'A cùng B hùn vốn làm …'},
     {s:'……的合伙人',m:'đối tác, người hùn vốn của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn bè hùn vốn làm ăn, nếu không nói rõ từ trước thì rất dễ nảy sinh mâu thuẫn.',answer:'朋友合伙做生意，如果事先不说清楚，很容易产生矛盾。',answerPy:'Péngyou héhuǒ zuò shēngyi, rúguǒ shìxiān bù shuō qīngchu, hěn róngyì chǎnshēng máodùn.',
      note:'如果……; 事先 = từ trước (ôn HSK 5).',pair:'如果……'},
     {promptLang:'vi',prompt:'Hai người bọn họ cấu kết lừa tiền của rất nhiều người già.',answer:'他们两个人合伙骗了很多老人的钱。',answerPy:'Tāmen liǎng ge rén héhuǒ piànle hěn duō lǎorén de qián.',
      note:'Nghĩa xấu của 合伙 = cấu kết; V了 + tân ngữ có định ngữ.',pair:'V了 + tân ngữ'}
   ]},

  {n:11,zh:'筹备',py:'chóubèi',pos:'Động từ',vn:'trù bị, chuẩn bị (trước khi tiến hành)',hv:'trù bị',em:'📋',lesson:1,
   explain:['Động từ: lên kế hoạch và chuẩn bị trước cho một việc lớn (thành lập tổ chức, hội nghị, sự kiện…): 筹备会议, 筹备婚礼. Văn viết, trang trọng hơn 准备.','筹 còn có nghĩa gom góp (tiền): 筹备资金 = gom, chuẩn bị vốn; 筹钱, 众筹 (gọi vốn cộng đồng) trong bài khoá.'],
   usage:'筹备 + 会议 / 婚礼 / 展览 / 项目 / 资金; 筹备工作; 正在筹备中.',
   collo:['筹备资金','筹备会议','筹备工作','筹备婚礼'],
   ex_zh:'筹备资金买房',ex_py:'chóubèi zījīn mǎi fáng',ex_vn:'Gom vốn mua nhà',
   exList:[
     {zh:'此次众筹买房，初步打算召集200人，筹备建立众筹家园小区。',py:'Cǐ cì zhòngchóu mǎi fáng, chūbù dǎsuan zhàojí èrbǎi rén, chóubèi jiànlì zhòngchóu jiāyuán xiǎoqū.',vn:'Lần gọi vốn cộng đồng mua nhà này, dự tính ban đầu tập hợp 200 người, chuẩn bị xây dựng khu dân cư "Ngôi nhà gọi vốn cộng đồng".'},
     {zh:'为了筹备这次展览，大家已经忙了整整一个月。',py:'Wèile chóubèi zhè cì zhǎnlǎn, dàjiā yǐjīng mángle zhěngzhěng yí ge yuè.',vn:'Để chuẩn bị cho cuộc triển lãm này, mọi người đã bận rộn suốt cả một tháng.'},
     {zh:'运动会的筹备工作正在紧张地进行着。',py:'Yùndònghuì de chóubèi gōngzuò zhèngzài jǐnzhāng de jìnxíngzhe.',vn:'Công tác chuẩn bị cho đại hội thể thao đang được tiến hành khẩn trương.'}
   ],
   colloFull:[
     {zh:'筹备资金',py:'chóubèi zījīn',vn:'gom vốn, chuẩn bị vốn'},
     {zh:'筹备会议',py:'chóubèi huìyì',vn:'chuẩn bị hội nghị'},
     {zh:'筹备工作',py:'chóubèi gōngzuò',vn:'công tác trù bị'},
     {zh:'筹备婚礼',py:'chóubèi hūnlǐ',vn:'chuẩn bị đám cưới'},
     {zh:'筹备展览',py:'chóubèi zhǎnlǎn',vn:'chuẩn bị triển lãm'}
   ],
   patterns:[
     {s:'筹备 + 会议 / 活动 / 项目',m:'chuẩn bị (tổ chức) …'},
     {s:'……的筹备工作',m:'công tác trù bị cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lễ kỷ niệm 50 năm thành lập trường sắp đến, công tác chuẩn bị đã bắt đầu từ ba tháng trước.',answer:'五十周年校庆快到了，筹备工作三个月前就开始了。',answerPy:'Wǔshí zhōunián xiàoqìng kuài dào le, chóubèi gōngzuò sān ge yuè qián jiù kāishǐ le.',
      note:'快……了 (ôn HSK 2–3); ……就…… nhấn việc diễn ra sớm.',pair:'快……了'},
     {promptLang:'vi',prompt:'Họ đang chuẩn bị đám cưới, bận đến nỗi không có cả thời gian ăn cơm.',answer:'他们正在筹备婚礼，忙得连吃饭的时间都没有。',answerPy:'Tāmen zhèngzài chóubèi hūnlǐ, máng de lián chī fàn de shíjiān dōu méiyǒu.',
      note:'连……都…… (ôn HSK 4).',pair:'连……都……'}
   ]},

  {n:12,zh:'成员',py:'chéngyuán',pos:'Danh từ',vn:'thành viên, hội viên',hv:'thành viên',em:'👨‍👩‍👧',lesson:1,
   explain:['Danh từ: người (hoặc đơn vị) thuộc một tập thể, tổ chức, gia đình: 家庭成员, 团队成员, 小组成员.','Nghĩa mở rộng: cái mới gia nhập một "họ" sự vật — bài khoá: 人们视这一创举为互联网金融下的新成员 (coi sáng kiến này là thành viên mới của tài chính Internet).'],
   usage:'家庭 / 团队 / 小组 / 俱乐部 + 成员; 成为……的成员; 新成员.',
   collo:['家庭成员','团队成员','新成员','小组成员'],
   ex_zh:'家庭成员',ex_py:'jiātíng chéngyuán',ex_vn:'Thành viên gia đình',
   exList:[
     {zh:'人们视这一创举为互联网金融下的新成员。',py:'Rénmen shì zhè yī chuàngjǔ wéi hùliánwǎng jīnróng xià de xīn chéngyuán.',vn:'Người ta coi sáng kiến này là một thành viên mới của tài chính Internet.'},
     {zh:'这只小狗已经成了我们家的一名新成员。',py:'Zhè zhī xiǎogǒu yǐjīng chéngle wǒmen jiā de yì míng xīn chéngyuán.',vn:'Chú chó nhỏ này đã trở thành một thành viên mới của nhà chúng tôi.'},
     {zh:'团队里的每个成员都有自己的分工。',py:'Tuánduì li de měi ge chéngyuán dōu yǒu zìjǐ de fēngōng.',vn:'Mỗi thành viên trong đội đều có phần việc của mình.'}
   ],
   colloFull:[
     {zh:'家庭成员',py:'jiātíng chéngyuán',vn:'thành viên gia đình'},
     {zh:'团队成员',py:'tuánduì chéngyuán',vn:'thành viên đội nhóm'},
     {zh:'新成员',py:'xīn chéngyuán',vn:'thành viên mới'},
     {zh:'小组成员',py:'xiǎozǔ chéngyuán',vn:'thành viên nhóm'},
     {zh:'俱乐部成员',py:'jùlèbù chéngyuán',vn:'thành viên câu lạc bộ'}
   ],
   patterns:[
     {s:'成为……的一名成员',m:'trở thành một thành viên của …'},
     {s:'视 A 为 B 的新成员',m:'coi A là thành viên mới của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi trở thành thành viên câu lạc bộ, cậu ấy tự tin hơn trước nhiều.',answer:'成为俱乐部的成员以后，他比以前自信多了。',answerPy:'Chéngwéi jùlèbù de chéngyuán yǐhòu, tā bǐ yǐqián zìxìn duō le.',
      note:'A 比 B + Adj + 多了 (so sánh, ôn HSK 3–4).',pair:'比……多了'},
     {promptLang:'vi',prompt:'Mỗi thành viên trong nhóm đều phải hoàn thành nhiệm vụ của mình, nếu không cả nhóm sẽ bị ảnh hưởng.',answer:'小组的每个成员都要完成自己的任务，否则整个小组都会受到影响。',answerPy:'Xiǎozǔ de měi ge chéngyuán dōu yào wánchéng zìjǐ de rènwu, fǒuzé zhěnggè xiǎozǔ dōu huì shòudào yǐngxiǎng.',
      note:'否则 = nếu không thì (ôn HSK 5).',pair:'否则……'}
   ]},

  {n:13,zh:'初步',py:'chūbù',pos:'Tính từ',vn:'ban đầu, lúc đầu, sơ bộ',hv:'sơ bộ',em:'🌱',lesson:1,
   explain:['Tính từ không làm vị ngữ (区别词): bước đầu, chưa phải cuối cùng hay hoàn chỉnh. Thường làm trạng ngữ trước động từ (初步打算, 初步了解, 初步形成) hoặc định ngữ (初步的结果, 初步意见).','Không nói *很初步. Trong bài: 初步打算召集200人 = dự tính ban đầu tập hợp 200 người.'],
   usage:'初步 + 打算 / 了解 / 掌握 / 形成 / 决定; 初步的 + 结果 / 方案 / 意见; 取得初步成果.',
   collo:['初步打算','初步了解','初步的结果','取得初步成果'],
   ex_zh:'初步打算',ex_py:'chūbù dǎsuan',ex_vn:'Dự tính ban đầu',
   exList:[
     {zh:'此次众筹买房，初步打算召集200人。',py:'Cǐ cì zhòngchóu mǎi fáng, chūbù dǎsuan zhàojí èrbǎi rén.',vn:'Lần gọi vốn cộng đồng mua nhà này, dự tính ban đầu tập hợp 200 người.'},
     {zh:'经过一个月的学习，我对这个软件已经有了初步的了解。',py:'Jīngguò yí ge yuè de xuéxí, wǒ duì zhège ruǎnjiàn yǐjīng yǒule chūbù de liǎojiě.',vn:'Sau một tháng học, tôi đã có hiểu biết bước đầu về phần mềm này.'},
     {zh:'检查的初步结果显示，他的身体没什么大问题。',py:'Jiǎnchá de chūbù jiéguǒ xiǎnshì, tā de shēntǐ méi shénme dà wèntí.',vn:'Kết quả kiểm tra sơ bộ cho thấy sức khoẻ của anh ấy không có vấn đề gì lớn.'}
   ],
   colloFull:[
     {zh:'初步打算',py:'chūbù dǎsuan',vn:'dự tính ban đầu'},
     {zh:'初步了解',py:'chūbù liǎojiě',vn:'bước đầu tìm hiểu'},
     {zh:'初步的结果',py:'chūbù de jiéguǒ',vn:'kết quả sơ bộ'},
     {zh:'取得初步成果',py:'qǔdé chūbù chéngguǒ',vn:'đạt thành quả bước đầu'},
     {zh:'初步方案',py:'chūbù fāng\'àn',vn:'phương án sơ bộ'}
   ],
   patterns:[
     {s:'初步 + V (打算 / 了解 / 掌握)',m:'bước đầu …'},
     {s:'有了初步的……',m:'đã có … bước đầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch ban đầu của chúng tôi là đi Hà Nội trước, rồi mới đi vịnh Hạ Long.',answer:'我们初步打算先去河内，再去下龙湾。',answerPy:'Wǒmen chūbù dǎsuan xiān qù Hénèi, zài qù Xiàlóng Wān.',
      note:'先……再…… (ôn HSK 3).',pair:'先……再……'},
     {promptLang:'vi',prompt:'Tuy thí nghiệm đã đạt kết quả bước đầu, nhưng vẫn còn rất nhiều vấn đề cần giải quyết.',answer:'虽然实验取得了初步成果，但是还有很多问题需要解决。',answerPy:'Suīrán shíyàn qǔdéle chūbù chéngguǒ, dànshì hái yǒu hěn duō wèntí xūyào jiějué.',
      note:'虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:14,zh:'合算',py:'hésuàn',pos:'Tính từ',vn:'có lợi, đáng giá, hời',hv:'hợp toán',em:'💰',lesson:1,
   explain:['Tính từ: bỏ ra ít mà được nhiều, có lợi, đáng tiền: 很合算, 不合算. Khẩu ngữ hay dùng 划算 (đồng nghĩa).','Còn là động từ (ít dùng): tính toán, cân nhắc — 合算一下成本. Trong bài: 无论是投资还是自住，都很合算.'],
   usage:'很 / 挺 / 不 + 合算; 这样 / 这么 + 做 + (不)合算; 还是 A 合算.',
   collo:['很合算','不合算','买得合算','挺合算的'],
   ex_zh:'价格很合算',ex_py:'jiàgé hěn hésuàn',ex_vn:'Giá rất hời',
   exList:[
     {zh:'众筹购房无论是投资还是自住，都很合算。',py:'Zhòngchóu gòufáng wúlùn shì tóuzī háishi zìzhù, dōu hěn hésuàn.',vn:'Gọi vốn cộng đồng mua nhà dù để đầu tư hay để ở đều rất có lợi.'},
     {zh:'打车去机场要两百块，坐地铁只要十块，还是坐地铁合算。',py:'Dǎchē qù jīchǎng yào liǎngbǎi kuài, zuò dìtiě zhǐ yào shí kuài, háishi zuò dìtiě hésuàn.',vn:'Đi taxi ra sân bay mất hai trăm tệ, đi tàu điện ngầm chỉ mười tệ, vẫn là đi tàu điện ngầm thì hời hơn.'},
     {zh:'为了省一点儿钱浪费半天时间，这么做可不合算。',py:'Wèile shěng yìdiǎnr qián làngfèi bàn tiān shíjiān, zhème zuò kě bù hésuàn.',vn:'Để tiết kiệm chút tiền mà mất nửa ngày trời, làm vậy chẳng đáng chút nào.'}
   ],
   colloFull:[
     {zh:'很合算',py:'hěn hésuàn',vn:'rất hời'},
     {zh:'不合算',py:'bù hésuàn',vn:'không đáng'},
     {zh:'买得合算',py:'mǎi de hésuàn',vn:'mua được giá hời'},
     {zh:'挺合算的',py:'tǐng hésuàn de',vn:'khá là hời'},
     {zh:'价格合算',py:'jiàgé hésuàn',vn:'giá cả phải chăng'}
   ],
   patterns:[
     {s:'还是 + A + 合算',m:'chọn A thì hời hơn'},
     {s:'这么做不合算',m:'làm vậy không đáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mua vé trước một tháng rẻ được gần một nửa, rất đáng.',answer:'提前一个月买票能便宜将近一半，很合算。',answerPy:'Tíqián yí ge yuè mǎi piào néng piányi jiāngjìn yíbàn, hěn hésuàn.',
      note:'提前 (ôn HSK 4); 将近 = gần (HSK 5).',pair:'提前……'},
     {promptLang:'vi',prompt:'Dù mua nhà hay thuê nhà, bạn đều phải tính xem cái nào có lợi hơn.',answer:'无论买房还是租房，你都要算一算哪个更合算。',answerPy:'Wúlùn mǎi fáng háishi zū fáng, nǐ dōu yào suàn yi suàn nǎge gèng hésuàn.',
      note:'无论……还是……都…… (ôn HSK 4–5).',pair:'无论……都……'}
   ]},

  {n:15,zh:'渠道',py:'qúdào',pos:'Danh từ',vn:'con đường, cửa ngõ, kênh',hv:'cừ đạo',em:'📡',lesson:1,
   explain:['Nghĩa gốc: mương dẫn nước (thuỷ lợi). Nghĩa thường dùng: con đường, kênh, phương thức để đạt được, truyền đạt cái gì: 沟通渠道, 信息渠道, 销售渠道.','Hay đi với 通过……渠道, 开辟 / 拓宽 + 渠道 (mở / mở rộng kênh). Trong bài: 微信是主要渠道. Khác 频道 (kênh truyền hình).'],
   usage:'通过 + ……渠道; 沟通 / 信息 / 销售 + 渠道; 开辟 / 拓宽 + 渠道; 主要渠道.',
   collo:['主要渠道','沟通渠道','开辟新的渠道','销售渠道'],
   ex_zh:'沟通的主要渠道',ex_py:'gōutōng de zhǔyào qúdào',ex_vn:'Kênh liên lạc chủ yếu',
   exList:[
     {zh:'项目沟通中，微信是主要渠道。',py:'Xiàngmù gōutōng zhōng, Wēixìn shì zhǔyào qúdào.',vn:'Trong quá trình trao đổi về dự án, WeChat là kênh chủ yếu.'},
     {zh:'手机为人们交友、聊天开辟了新的渠道。',py:'Shǒujī wèi rénmen jiāoyǒu, liáotiān kāipìle xīn de qúdào.',vn:'Điện thoại mở ra kênh mới cho việc kết bạn, trò chuyện của con người.'},
     {zh:'我们应该通过正规渠道了解信息，不要轻信网上的谣言。',py:'Wǒmen yīnggāi tōngguò zhèngguī qúdào liǎojiě xìnxī, búyào qīngxìn wǎngshàng de yáoyán.',vn:'Chúng ta nên tìm hiểu thông tin qua kênh chính thống, đừng dễ tin tin đồn trên mạng.'}
   ],
   colloFull:[
     {zh:'主要渠道',py:'zhǔyào qúdào',vn:'kênh chủ yếu'},
     {zh:'沟通渠道',py:'gōutōng qúdào',vn:'kênh liên lạc'},
     {zh:'开辟新的渠道',py:'kāipì xīn de qúdào',vn:'mở ra kênh mới'},
     {zh:'销售渠道',py:'xiāoshòu qúdào',vn:'kênh bán hàng'},
     {zh:'通过正规渠道',py:'tōngguò zhèngguī qúdào',vn:'qua kênh chính thống'}
   ],
   patterns:[
     {s:'通过……渠道 + V',m:'thông qua kênh … để …'},
     {s:'为……开辟了新的渠道',m:'mở ra kênh mới cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mạng xã hội đã trở thành kênh chủ yếu để người trẻ tiếp nhận tin tức.',answer:'社交网络已经成为年轻人获取新闻的主要渠道。',answerPy:'Shèjiāo wǎngluò yǐjīng chéngwéi niánqīngrén huòqǔ xīnwén de zhǔyào qúdào.',
      note:'成为 + N (ôn HSK 4).',pair:'成为……'},
     {promptLang:'vi',prompt:'Nếu có ý kiến gì, mọi người có thể phản ánh qua nhiều kênh khác nhau.',answer:'如果有什么意见，大家可以通过各种渠道反映。',answerPy:'Rúguǒ yǒu shénme yìjiàn, dàjiā kěyǐ tōngguò gè zhǒng qúdào fǎnyìng.',
      note:'什么 phiếm chỉ (có ý kiến gì); 反映 = phản ánh (HSK 5).',pair:'通过……'}
   ]},

  {n:16,zh:'审查',py:'shěnchá',pos:'Động từ',vn:'xem xét, xét duyệt, thẩm tra',hv:'thẩm tra',em:'🔍',lesson:1,
   explain:['Động từ: kiểm tra, xem xét kỹ lưỡng xem có đúng, có hợp lệ không (thường do cơ quan, người có thẩm quyền làm): 审查材料, 资格审查, 通过审查.','Văn viết, trang trọng. Khác 检查 (kiểm tra nói chung: 检查身体, 检查作业) — 审查 nhấn quyền hạn và việc phê duyệt.'],
   usage:'审查 + 材料 / 计划 / 资格 / 申请; 通过 / 接受 + 审查; 经过审查.',
   collo:['通过审查','审查材料','资格审查','接受审查'],
   ex_zh:'通过审查',ex_py:'tōngguò shěnchá',ex_vn:'Được xét duyệt thông qua',
   exList:[
     {zh:'申请人递交申请表、通过审查后，缴纳100元订金就可以进入购房微信群。',py:'Shēnqǐngrén dìjiāo shēnqǐngbiǎo, tōngguò shěnchá hòu, jiǎonà yìbǎi yuán dìngjīn jiù kěyǐ jìnrù gòufáng Wēixìn qún.',vn:'Người đăng ký nộp đơn, sau khi được xét duyệt, nộp 100 tệ tiền đặt cọc là có thể vào nhóm WeChat mua nhà.'},
     {zh:'你的申请材料我们正在审查，请耐心等待。',py:'Nǐ de shēnqǐng cáiliào wǒmen zhèngzài shěnchá, qǐng nàixīn děngdài.',vn:'Hồ sơ đăng ký của bạn chúng tôi đang xét duyệt, xin kiên nhẫn chờ đợi.'},
     {zh:'这部电影因为没有通过审查，所以不能上映。',py:'Zhè bù diànyǐng yīnwèi méiyǒu tōngguò shěnchá, suǒyǐ bù néng shàngyìng.',vn:'Bộ phim này vì không qua được kiểm duyệt nên không thể công chiếu.'}
   ],
   colloFull:[
     {zh:'通过审查',py:'tōngguò shěnchá',vn:'được xét duyệt thông qua'},
     {zh:'审查材料',py:'shěnchá cáiliào',vn:'xét duyệt hồ sơ'},
     {zh:'资格审查',py:'zīgé shěnchá',vn:'thẩm tra tư cách'},
     {zh:'接受审查',py:'jiēshòu shěnchá',vn:'chịu sự thẩm tra'},
     {zh:'严格审查',py:'yángé shěnchá',vn:'xét duyệt nghiêm ngặt'}
   ],
   patterns:[
     {s:'经过审查，……',m:'sau khi xét duyệt, …'},
     {s:'通过……的审查',m:'vượt qua sự xét duyệt của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi hồ sơ được xét duyệt thông qua, bạn mới có thể tham gia cuộc thi.',answer:'只有材料通过了审查，你才能参加比赛。',answerPy:'Zhǐyǒu cáiliào tōngguòle shěnchá, nǐ cái néng cānjiā bǐsài.',
      note:'只有……才…….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Kế hoạch này phải được lãnh đạo xét duyệt rồi mới có thể thực hiện.',answer:'这个计划必须经过领导审查以后才能执行。',answerPy:'Zhège jìhuà bìxū jīngguò lǐngdǎo shěnchá yǐhòu cái néng zhíxíng.',
      note:'……以后才…… (sau khi … mới …); 执行 — HSK 5.',pair:'……以后才……'}
   ]},

  {n:17,zh:'缴纳',py:'jiǎonà',pos:'Động từ',vn:'giao, nộp (tiền, thuế, phí)',hv:'chước nạp',em:'🧾',lesson:1,
   explain:['Động từ: nộp (tiền, thuế, phí…) theo quy định cho cơ quan, tổ chức: 缴纳学费, 缴纳税款, 缴纳订金. Văn viết, trang trọng; khẩu ngữ dùng 交.','Chú ý chữ 缴 (bộ 纟) đọc jiǎo, khác 交 jiāo. Cùng họ: 缴费 (nộp phí), 缴税 (nộp thuế). Khác 采纳 (tiếp thu ý kiến), 容纳 (chứa được).'],
   usage:'缴纳 + 学费 / 税款 / 订金 / 电费 / 罚款; 按时 / 按规定 + 缴纳.',
   collo:['缴纳学费','缴纳税款','缴纳订金','按时缴纳'],
   ex_zh:'缴纳100元订金',ex_py:'jiǎonà yìbǎi yuán dìngjīn',ex_vn:'Nộp 100 tệ tiền đặt cọc',
   exList:[
     {zh:'通过审查后，缴纳100元订金就可以进入购房微信群。',py:'Tōngguò shěnchá hòu, jiǎonà yìbǎi yuán dìngjīn jiù kěyǐ jìnrù gòufáng Wēixìn qún.',vn:'Sau khi được xét duyệt, nộp 100 tệ tiền đặt cọc là có thể vào nhóm WeChat mua nhà.'},
     {zh:'现在很多人都在网上缴纳各种费用，不用再去银行排队了。',py:'Xiànzài hěn duō rén dōu zài wǎngshàng jiǎonà gè zhǒng fèiyòng, búyòng zài qù yínháng páiduì le.',vn:'Bây giờ nhiều người nộp các loại phí trên mạng, không phải đến ngân hàng xếp hàng nữa.'},
     {zh:'每个公民都有依法缴纳税款的义务。',py:'Měi ge gōngmín dōu yǒu yīfǎ jiǎonà shuìkuǎn de yìwù.',vn:'Mỗi công dân đều có nghĩa vụ nộp thuế theo pháp luật.'}
   ],
   colloFull:[
     {zh:'缴纳学费',py:'jiǎonà xuéfèi',vn:'nộp học phí'},
     {zh:'缴纳税款',py:'jiǎonà shuìkuǎn',vn:'nộp thuế'},
     {zh:'缴纳订金',py:'jiǎonà dìngjīn',vn:'nộp tiền đặt cọc'},
     {zh:'按时缴纳',py:'ànshí jiǎonà',vn:'nộp đúng hạn'},
     {zh:'缴纳各种费用',py:'jiǎonà gè zhǒng fèiyòng',vn:'nộp các loại phí'}
   ],
   patterns:[
     {s:'按时缴纳 + phí',m:'nộp … đúng hạn'},
     {s:'在网上缴纳……',m:'nộp … trên mạng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học phí phải nộp trước ngày 10 tháng 9, nếu không sẽ không thể đăng ký học.',answer:'学费必须在九月十号以前缴纳，否则就不能注册。',answerPy:'Xuéfèi bìxū zài jiǔ yuè shí hào yǐqián jiǎonà, fǒuzé jiù bù néng zhùcè.',
      note:'否则…… (ôn HSK 5).',pair:'否则……'},
     {promptLang:'vi',prompt:'Có điện thoại rồi, việc nộp tiền điện nước tiện hơn trước nhiều.',answer:'有了手机以后，缴纳水电费比以前方便多了。',answerPy:'Yǒule shǒujī yǐhòu, jiǎonà shuǐdiànfèi bǐ yǐqián fāngbiàn duō le.',
      note:'比……多了 (so sánh).',pair:'比……多了'}
   ]},

  {n:18,zh:'摸索',py:'mōsuǒ',pos:'Động từ',vn:'mò mẫm, dò dẫm, tìm kiếm',hv:'mạc sách',em:'🕯️',lesson:1,
   explain:['Nghĩa gốc: mò mẫm tìm đường, tìm đồ (trong bóng tối): 在黑暗中摸索着前进.','Nghĩa bóng (thường dùng): tìm tòi, dò dẫm từng bước để tìm ra phương pháp, kinh nghiệm, quy luật: 摸索经验, 摸索出一套方法; 处于摸索阶段 = đang ở giai đoạn dò dẫm, thử nghiệm.'],
   usage:'摸索 + 经验 / 方法 / 规律; 摸索出 + ……; 处于摸索阶段; 在……中摸索.',
   collo:['摸索经验','摸索阶段','摸索出一套方法','在黑暗中摸索'],
   ex_zh:'处于摸索阶段',ex_py:'chǔyú mōsuǒ jiēduàn',ex_vn:'Đang ở giai đoạn dò dẫm',
   exList:[
     {zh:'众筹买房也还处于摸索阶段，因此必须慎重。',py:'Zhòngchóu mǎi fáng yě hái chǔyú mōsuǒ jiēduàn, yīncǐ bìxū shènzhòng.',vn:'Gọi vốn cộng đồng mua nhà vẫn còn ở giai đoạn dò dẫm, vì vậy phải thận trọng.'},
     {zh:'停电了，他在黑暗中摸索着找到了手电筒。',py:'Tíngdiàn le, tā zài hēi\'àn zhōng mōsuǒzhe zhǎodàole shǒudiàntǒng.',vn:'Mất điện, anh ấy mò mẫm trong bóng tối tìm được chiếc đèn pin.'},
     {zh:'经过几年的摸索，她终于找到了一套适合自己的学习方法。',py:'Jīngguò jǐ nián de mōsuǒ, tā zhōngyú zhǎodàole yí tào shìhé zìjǐ de xuéxí fāngfǎ.',vn:'Sau mấy năm tìm tòi, cô ấy cuối cùng đã tìm ra một phương pháp học phù hợp với mình.'}
   ],
   colloFull:[
     {zh:'摸索经验',py:'mōsuǒ jīngyàn',vn:'tìm tòi kinh nghiệm'},
     {zh:'摸索阶段',py:'mōsuǒ jiēduàn',vn:'giai đoạn dò dẫm'},
     {zh:'摸索出一套方法',py:'mōsuǒ chū yí tào fāngfǎ',vn:'tìm ra một phương pháp'},
     {zh:'在黑暗中摸索',py:'zài hēi\'àn zhōng mōsuǒ',vn:'mò mẫm trong bóng tối'},
     {zh:'不断摸索',py:'búduàn mōsuǒ',vn:'không ngừng tìm tòi'}
   ],
   patterns:[
     {s:'经过……的摸索，终于……',m:'sau … tìm tòi, cuối cùng …'},
     {s:'处于摸索阶段',m:'đang trong giai đoạn thử nghiệm, dò dẫm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không có ai dạy, anh ấy chỉ có thể tự mình mò mẫm, may mà cuối cùng cũng thành công.',answer:'没有人教，他只能自己摸索，好在最后终于成功了。',answerPy:'Méiyǒu rén jiāo, tā zhǐ néng zìjǐ mōsuǒ, hǎozài zuìhòu zhōngyú chénggōng le.',
      note:'好在 = may mà (ôn HSK 5).',pair:'好在……'},
     {promptLang:'vi',prompt:'Học ngoại ngữ không có đường tắt, mỗi người đều phải không ngừng tìm tòi phương pháp phù hợp với mình.',answer:'学外语没有捷径，每个人都要不断摸索适合自己的方法。',answerPy:'Xué wàiyǔ méiyǒu jiéjìng, měi ge rén dōu yào búduàn mōsuǒ shìhé zìjǐ de fāngfǎ.',
      note:'不断 + V (ôn HSK 5).',pair:'不断……'}
   ]},

  {n:19,zh:'层次',py:'céngcì',pos:'Danh từ',vn:'cấp độ, trình độ, cấp',hv:'tằng thứ',em:'📶',lesson:1,
   explain:['① Trình độ, đẳng cấp (học vấn, văn hoá, tiêu dùng…) cao thấp khác nhau: 层次较高, 文化层次, 高层次人才.','② Thứ tự trước sau, lớp lang (của bài viết, lời nói, màu sắc…): 文章层次分明 (bài văn mạch lạc, có lớp lang), 颜色很有层次.'],
   usage:'层次 + 高 / 低 / 较高; 不同层次的 + N; 层次分明; 提高……的层次.',
   collo:['层次较高','不同层次','层次分明','高层次人才'],
   ex_zh:'层次较高',ex_py:'céngcì jiào gāo',ex_vn:'Trình độ khá cao',
   exList:[
     {zh:'众筹的参与者层次较高，都有一定的经济基础。',py:'Zhòngchóu de cānyùzhě céngcì jiào gāo, dōu yǒu yídìng de jīngjì jīchǔ.',vn:'Những người tham gia gọi vốn cộng đồng có trình độ khá cao, đều có nền tảng kinh tế nhất định.'},
     {zh:'这所学校为不同层次的学生开设了不同的课程。',py:'Zhè suǒ xuéxiào wèi bù tóng céngcì de xuésheng kāishèle bù tóng de kèchéng.',vn:'Trường này mở các khoá học khác nhau cho học sinh ở các trình độ khác nhau.'},
     {zh:'这篇作文层次分明，读起来很清楚。',py:'Zhè piān zuòwén céngcì fēnmíng, dú qilai hěn qīngchu.',vn:'Bài văn này lớp lang rõ ràng, đọc lên rất mạch lạc.'}
   ],
   colloFull:[
     {zh:'层次较高',py:'céngcì jiào gāo',vn:'trình độ khá cao'},
     {zh:'不同层次',py:'bù tóng céngcì',vn:'các trình độ khác nhau'},
     {zh:'层次分明',py:'céngcì fēnmíng',vn:'lớp lang rõ ràng'},
     {zh:'高层次人才',py:'gāo céngcì réncái',vn:'nhân tài trình độ cao'},
     {zh:'文化层次',py:'wénhuà céngcì',vn:'trình độ văn hoá'}
   ],
   patterns:[
     {s:'不同层次的 + 人 / 读者 / 学生',m:'… ở các trình độ khác nhau'},
     {s:'……层次分明',m:'… mạch lạc, có lớp lang'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi viết văn, nếu lớp lang không rõ ràng thì người đọc sẽ đọc không hiểu.',answer:'写文章的时候，如果层次不分明，读者就会看不懂。',answerPy:'Xiě wénzhāng de shíhou, rúguǒ céngcì bù fēnmíng, dúzhě jiù huì kàn bu dǒng.',
      note:'Bổ ngữ khả năng 看不懂 (ôn HSK 3–4).',pair:'看不懂'},
     {promptLang:'vi',prompt:'Cuốn sách này độc giả ở mọi trình độ đều đọc hiểu được.',answer:'这本书不同层次的读者都能读懂。',answerPy:'Zhè běn shū bù tóng céngcì de dúzhě dōu néng dúdǒng.',
      note:'Tân ngữ lên đầu câu làm chủ đề.',pair:'chủ đề đầu câu'}
   ]},

  {n:20,zh:'阶层',py:'jiēcéng',pos:'Danh từ',vn:'tầng lớp / giai cấp trong xã hội',hv:'giai tầng',em:'🏛️',lesson:1,
   explain:['Danh từ: tầng lớp người trong xã hội có địa vị kinh tế, nghề nghiệp giống nhau: 中产阶层, 社会各阶层, 同一阶层.','Khác 层次 (trình độ, cấp độ — dùng cho người lẫn sự vật): 阶层 chỉ dùng cho nhóm người trong xã hội. Bài khoá: 他们层次较高……基本属于同一阶层.'],
   usage:'社会各阶层; 中产 / 管理 + 阶层; 属于……阶层; 不同阶层的人.',
   collo:['同一阶层','社会各阶层','中产阶层','不同阶层的人'],
   ex_zh:'属于同一阶层',ex_py:'shǔyú tóngyī jiēcéng',ex_vn:'Thuộc cùng một tầng lớp',
   exList:[
     {zh:'他们对新生事物有强烈好奇心，基本属于同一阶层。',py:'Tāmen duì xīnshēng shìwù yǒu qiángliè hàoqíxīn, jīběn shǔyú tóngyī jiēcéng.',vn:'Họ rất tò mò với những điều mới mẻ, về cơ bản thuộc cùng một tầng lớp.'},
     {zh:'这项政策得到了社会各阶层的支持。',py:'Zhè xiàng zhèngcè dédàole shèhuì gè jiēcéng de zhīchí.',vn:'Chính sách này nhận được sự ủng hộ của các tầng lớp xã hội.'},
     {zh:'随着经济的发展，中产阶层的人数越来越多。',py:'Suízhe jīngjì de fāzhǎn, zhōngchǎn jiēcéng de rénshù yuè lái yuè duō.',vn:'Cùng với sự phát triển kinh tế, số người thuộc tầng lớp trung lưu ngày càng nhiều.'}
   ],
   colloFull:[
     {zh:'同一阶层',py:'tóngyī jiēcéng',vn:'cùng một tầng lớp'},
     {zh:'社会各阶层',py:'shèhuì gè jiēcéng',vn:'các tầng lớp xã hội'},
     {zh:'中产阶层',py:'zhōngchǎn jiēcéng',vn:'tầng lớp trung lưu'},
     {zh:'不同阶层的人',py:'bù tóng jiēcéng de rén',vn:'người thuộc các tầng lớp khác nhau'},
     {zh:'管理阶层',py:'guǎnlǐ jiēcéng',vn:'tầng lớp quản lý'}
   ],
   patterns:[
     {s:'属于……阶层',m:'thuộc tầng lớp …'},
     {s:'社会各阶层的 + N',m:'… của các tầng lớp xã hội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thuộc tầng lớp nào, ai cũng có quyền được học hành.',answer:'不管属于哪个阶层，人人都有受教育的权利。',answerPy:'Bùguǎn shǔyú nǎge jiēcéng, rénrén dōu yǒu shòu jiàoyù de quánlì.',
      note:'不管……都…….',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Internet giúp những người thuộc các tầng lớp khác nhau có cơ hội giao lưu.',answer:'互联网让不同阶层的人有了交流的机会。',answerPy:'Hùliánwǎng ràng bù tóng jiēcéng de rén yǒule jiāoliú de jīhuì.',
      note:'让 + người + V (câu kiêm ngữ).',pair:'让……'}
   ]},

  {n:21,zh:'政策',py:'zhèngcè',pos:'Danh từ',vn:'chính sách',hv:'chính sách',em:'📜',lesson:1,
   explain:['Danh từ: chính sách — nguyên tắc, biện pháp hành động do nhà nước, chính đảng hoặc tổ chức đề ra: 国家的政策, 经济政策, 优惠政策.','Hay đi với 制定 (đề ra), 实行 / 执行 (thực hiện), 出台 (ban hành), 调整 (điều chỉnh). Lượng từ: 项 / 条.'],
   usage:'制定 / 实行 / 出台 / 调整 + 政策; 优惠 / 经济 / 教育 + 政策; 根据……政策.',
   collo:['国家的政策','制定政策','优惠政策','出台政策'],
   ex_zh:'对国家的政策怎么理解',ex_py:'duì guójiā de zhèngcè zěnme lǐjiě',ex_vn:'Hiểu chính sách nhà nước thế nào',
   exList:[
     {zh:'房子怎么设计、对国家的政策怎么理解、失败了怎么办？',py:'Fángzi zěnme shèjì, duì guójiā de zhèngcè zěnme lǐjiě, shībàile zěnme bàn?',vn:'Nhà thiết kế thế nào, hiểu chính sách nhà nước ra sao, thất bại thì làm thế nào?'},
     {zh:'为了吸引外资，当地政府出台了一系列优惠政策。',py:'Wèile xīyǐn wàizī, dāngdì zhèngfǔ chūtáile yíxìliè yōuhuì zhèngcè.',vn:'Để thu hút vốn nước ngoài, chính quyền địa phương đã ban hành một loạt chính sách ưu đãi.'},
     {zh:'学校根据新的教育政策调整了课程安排。',py:'Xuéxiào gēnjù xīn de jiàoyù zhèngcè tiáozhěngle kèchéng ānpái.',vn:'Nhà trường điều chỉnh sắp xếp chương trình học theo chính sách giáo dục mới.'}
   ],
   colloFull:[
     {zh:'国家的政策',py:'guójiā de zhèngcè',vn:'chính sách nhà nước'},
     {zh:'制定政策',py:'zhìdìng zhèngcè',vn:'đề ra chính sách'},
     {zh:'优惠政策',py:'yōuhuì zhèngcè',vn:'chính sách ưu đãi'},
     {zh:'出台政策',py:'chūtái zhèngcè',vn:'ban hành chính sách'},
     {zh:'教育政策',py:'jiàoyù zhèngcè',vn:'chính sách giáo dục'}
   ],
   patterns:[
     {s:'根据……政策，……',m:'căn cứ chính sách …'},
     {s:'出台 / 制定 + ……政策',m:'ban hành / đề ra chính sách …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi đề ra chính sách, nhất định phải lắng nghe ý kiến của người dân.',answer:'制定政策的时候，一定要听取老百姓的意见。',answerPy:'Zhìdìng zhèngcè de shíhou, yídìng yào tīngqǔ lǎobǎixìng de yìjiàn.',
      note:'……的时候; 一定要 (ôn HSK 3).',pair:'一定要……'},
     {promptLang:'vi',prompt:'Nhờ có chính sách ưu đãi, ngày càng nhiều người trẻ về quê khởi nghiệp.',answer:'由于有了优惠政策，越来越多的年轻人回家乡创业。',answerPy:'Yóuyú yǒule yōuhuì zhèngcè, yuè lái yuè duō de niánqīngrén huí jiāxiāng chuàngyè.',
      note:'由于…… (ôn HSK 4); 创业 — HSK 6 bài 34.',pair:'由于……'}
   ]},

  {n:22,zh:'欢乐',py:'huānlè',pos:'Tính từ',vn:'vui vẻ, vui sướng',hv:'hoan lạc',em:'🎉',lesson:1,
   explain:['Tính từ: vui vẻ, vui sướng (thường nói không khí, tiếng cười, ngày lễ của một tập thể): 欢乐的节日, 欢乐的笑声. Văn viết hơn 快乐.','Còn dùng như danh từ: 带来欢乐, 充满欢乐. Không dùng trong lời chúc cá nhân (không nói *生日欢乐 — nói 生日快乐).'],
   usage:'欢乐的 + 气氛 / 笑声 / 节日 / 时光; 充满欢乐; 给……带来欢乐; 忙碌而欢乐.',
   collo:['欢乐的气氛','欢乐的笑声','充满欢乐','忙碌而欢乐'],
   ex_zh:'忙碌而欢乐',ex_py:'mánglù ér huānlè',ex_vn:'Bận rộn mà vui vẻ',
   exList:[
     {zh:'大家每天在微信群你来我往，忙碌而欢乐。',py:'Dàjiā měi tiān zài Wēixìn qún nǐ lái wǒ wǎng, mánglù ér huānlè.',vn:'Mỗi ngày mọi người trao đổi qua lại trong nhóm WeChat, bận rộn mà vui vẻ.'},
     {zh:'春节晚会上，到处都是欢乐的笑声。',py:'Chūnjié wǎnhuì shang, dàochù dōu shì huānlè de xiàoshēng.',vn:'Trong đêm hội mừng xuân, khắp nơi rộn tiếng cười vui vẻ.'},
     {zh:'孩子们的到来给这个安静的小村子带来了很多欢乐。',py:'Háizimen de dàolái gěi zhège ānjìng de xiǎo cūnzi dàiláile hěn duō huānlè.',vn:'Sự xuất hiện của bọn trẻ mang lại nhiều niềm vui cho ngôi làng nhỏ yên tĩnh này.'}
   ],
   colloFull:[
     {zh:'欢乐的气氛',py:'huānlè de qìfēn',vn:'bầu không khí vui vẻ'},
     {zh:'欢乐的笑声',py:'huānlè de xiàoshēng',vn:'tiếng cười vui vẻ'},
     {zh:'充满欢乐',py:'chōngmǎn huānlè',vn:'tràn ngập niềm vui'},
     {zh:'忙碌而欢乐',py:'mánglù ér huānlè',vn:'bận rộn mà vui vẻ'},
     {zh:'带来欢乐',py:'dàilái huānlè',vn:'mang lại niềm vui'}
   ],
   patterns:[
     {s:'A 而 B (忙碌而欢乐)',m:'vừa A vừa B, A mà B'},
     {s:'充满欢乐的 + N',m:'… tràn ngập niềm vui'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những ngày tháng vui vẻ bao giờ cũng trôi qua rất nhanh.',answer:'欢乐的时光总是过得特别快。',answerPy:'Huānlè de shíguāng zǒngshì guò de tèbié kuài.',
      note:'V + 得 + Adj (bổ ngữ trạng thái).',pair:'过得……'},
     {promptLang:'vi',prompt:'Tuy bữa tối rất giản dị, nhưng cả nhà ngồi bên nhau, tràn ngập niềm vui.',answer:'虽然晚餐很简单，但是全家人坐在一起，充满了欢乐。',answerPy:'Suīrán wǎncān hěn jiǎndān, dànshì quán jiā rén zuò zài yìqǐ, chōngmǎnle huānlè.',
      note:'虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:23,zh:'上瘾',py:'shàng yǐn',pos:'Động từ',vn:'mê, nghiện',hv:'thượng ẩn',em:'📱',lesson:1,
   explain:['Động từ li hợp (上 + 瘾): mê, nghiện một thứ gì đó đến mức không bỏ được (thuốc lá, game, mạng…): 玩游戏上了瘾, 让人上瘾.','Dùng cả nghĩa tiêu cực (nghiện game, nghiện thuốc) lẫn nghĩa đùa vui tích cực (旅行是一件让人上瘾的事情). Có thể xen: 上了瘾.'],
   usage:'让人上瘾; V + 上了瘾; 容易上瘾; 上网上瘾.',
   collo:['让人上瘾','玩游戏上瘾','容易上瘾','上了瘾'],
   ex_zh:'很让人上瘾',ex_py:'hěn ràng rén shàngyǐn',ex_vn:'Rất gây nghiện',
   exList:[
     {zh:'这种共商大事的感觉也很让人上瘾。',py:'Zhè zhǒng gòng shāng dàshì de gǎnjué yě hěn ràng rén shàngyǐn.',vn:'Cảm giác cùng nhau bàn chuyện lớn này cũng rất khiến người ta "nghiện".'},
     {zh:'旅行带给我们的乐趣多多，所以它是一件让人上瘾的事情。',py:'Lǚxíng dài gěi wǒmen de lèqù duōduō, suǒyǐ tā shì yí jiàn ràng rén shàngyǐn de shìqing.',vn:'Du lịch mang lại cho chúng ta rất nhiều niềm vui, vì thế nó là việc khiến người ta mê.'},
     {zh:'他玩手机游戏上了瘾，每天晚上都玩到两三点。',py:'Tā wán shǒujī yóuxì shàngle yǐn, měi tiān wǎnshang dōu wán dào liǎng-sān diǎn.',vn:'Cậu ấy nghiện game điện thoại, tối nào cũng chơi đến hai ba giờ sáng.'}
   ],
   colloFull:[
     {zh:'让人上瘾',py:'ràng rén shàngyǐn',vn:'khiến người ta nghiện'},
     {zh:'玩游戏上瘾',py:'wán yóuxì shàngyǐn',vn:'nghiện chơi game'},
     {zh:'容易上瘾',py:'róngyì shàngyǐn',vn:'dễ nghiện'},
     {zh:'上了瘾',py:'shàngle yǐn',vn:'đã nghiện'},
     {zh:'上网上瘾',py:'shàngwǎng shàngyǐn',vn:'nghiện mạng'}
   ],
   patterns:[
     {s:'V + 上了瘾',m:'làm … đến mức nghiện'},
     {s:'……让人上瘾',m:'… khiến người ta nghiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Video ngắn rất dễ gây nghiện, xem một cái rồi lại muốn xem cái tiếp theo.',answer:'短视频很容易让人上瘾，看了一个又想看下一个。',answerPy:'Duǎn shìpín hěn róngyì ràng rén shàngyǐn, kànle yí ge yòu xiǎng kàn xià yí ge.',
      note:'视频 — HSK 6 bài 29; V了……又…… (vừa … lại …).',pair:'……又……'},
     {promptLang:'vi',prompt:'Nếu không kiểm soát thời gian, trẻ con rất dễ nghiện mạng.',answer:'如果不控制时间，孩子很容易上网上瘾。',answerPy:'Rúguǒ bú kòngzhì shíjiān, háizi hěn róngyì shàngwǎng shàngyǐn.',
      note:'如果……; 控制 — HSK 5.',pair:'如果……'}
   ]},

  {n:24,zh:'慈善',py:'císhàn',pos:'Tính từ',vn:'từ thiện',hv:'từ thiện',em:'❤️',lesson:1,
   explain:['Tính từ: có lòng thương người, hay giúp đỡ người khó khăn. Thường làm định ngữ: 慈善机构 (tổ chức từ thiện), 慈善事业, 慈善活动, 慈善晚会.','Làm danh từ chỉ lĩnh vực: 从慈善到图书出版 (từ lĩnh vực từ thiện đến xuất bản sách). "Làm từ thiện" tiếng Trung thường nói 做慈善 / 做公益.'],
   usage:'慈善 + 机构 / 事业 / 活动 / 基金 / 晚会; 做慈善; 热心慈善事业.',
   collo:['慈善机构','慈善事业','慈善活动','做慈善'],
   ex_zh:'慈善活动',ex_py:'císhàn huódòng',ex_vn:'Hoạt động từ thiện',
   exList:[
     {zh:'如今，从慈善到图书出版，从电影制作到创业项目，众筹几乎跨越了所有的领域。',py:'Rújīn, cóng císhàn dào túshū chūbǎn, cóng diànyǐng zhìzuò dào chuàngyè xiàngmù, zhòngchóu jīhū kuàyuèle suǒyǒu de lǐngyù.',vn:'Ngày nay, từ từ thiện đến xuất bản sách, từ làm phim đến dự án khởi nghiệp, gọi vốn cộng đồng gần như đã vươn tới mọi lĩnh vực.'},
     {zh:'这位歌手把演唱会的收入全部捐给了慈善机构。',py:'Zhè wèi gēshǒu bǎ yǎnchànghuì de shōurù quánbù juān gěile císhàn jīgòu.',vn:'Ca sĩ này quyên toàn bộ thu nhập từ buổi hoà nhạc cho tổ chức từ thiện.'},
     {zh:'学校每年都会举办慈善义卖，帮助贫困山区的孩子。',py:'Xuéxiào měi nián dōu huì jǔbàn císhàn yìmài, bāngzhù pínkùn shānqū de háizi.',vn:'Hằng năm trường đều tổ chức hội chợ bán hàng từ thiện, giúp đỡ trẻ em vùng núi nghèo.'}
   ],
   colloFull:[
     {zh:'慈善机构',py:'císhàn jīgòu',vn:'tổ chức từ thiện'},
     {zh:'慈善事业',py:'císhàn shìyè',vn:'sự nghiệp từ thiện'},
     {zh:'慈善活动',py:'císhàn huódòng',vn:'hoạt động từ thiện'},
     {zh:'做慈善',py:'zuò císhàn',vn:'làm từ thiện'},
     {zh:'慈善晚会',py:'císhàn wǎnhuì',vn:'đêm gala từ thiện'}
   ],
   patterns:[
     {s:'把……捐给慈善机构',m:'quyên … cho tổ chức từ thiện'},
     {s:'热心慈善事业',m:'nhiệt tình với sự nghiệp từ thiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy không chỉ là một doanh nhân thành đạt, mà còn luôn nhiệt tình với sự nghiệp từ thiện.',answer:'他不仅是一位成功的商人，而且一直热心慈善事业。',answerPy:'Tā bùjǐn shì yí wèi chénggōng de shāngrén, érqiě yìzhí rèxīn císhàn shìyè.',
      note:'不仅……而且…….',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Toàn bộ thu nhập của buổi hoà nhạc từ thiện sẽ được dùng để xây trường học.',answer:'慈善音乐会的全部收入将用来建学校。',answerPy:'Císhàn yīnyuèhuì de quánbù shōurù jiāng yònglái jiàn xuéxiào.',
      note:'将 = sẽ (văn viết); 用来 + V = dùng để.',pair:'用来……'}
   ]},

  {n:25,zh:'股份',py:'gǔfèn',pos:'Danh từ',vn:'cổ phần',hv:'cổ phần',em:'📊',lesson:1,
   explain:['Danh từ: cổ phần — phần vốn góp trong một công ty, chia thành các phần bằng nhau: 持有股份, 占……的股份, 股份公司.','股 còn là lượng từ: 每股1.2元, 认购100股. Người có cổ phần gọi là 股东; giấy chứng nhận cổ phần là 股票.'],
   usage:'持有 / 购买 / 出售 + 股份; 占 + 百分之…… + 的股份; 股份有限公司.',
   collo:['持有股份','购买股份','股份公司','占30%的股份'],
   ex_zh:'持有美微股份',ex_py:'chíyǒu Měiwēi gǔfèn',ex_vn:'Nắm giữ cổ phần của Mỹ Vi',
   exList:[
     {zh:'花120元就可以成为持有美微股份的股东。',py:'Huā yìbǎi èrshí yuán jiù kěyǐ chéngwéi chíyǒu Měiwēi gǔfèn de gǔdōng.',vn:'Bỏ ra 120 tệ là có thể trở thành cổ đông nắm giữ cổ phần của Mỹ Vi.'},
     {zh:'他在这家公司占百分之三十的股份。',py:'Tā zài zhè jiā gōngsī zhàn bǎi fēn zhī sānshí de gǔfèn.',vn:'Anh ấy nắm 30% cổ phần ở công ty này.'},
     {zh:'这家股份公司明年打算上市。',py:'Zhè jiā gǔfèn gōngsī míngnián dǎsuan shàngshì.',vn:'Công ty cổ phần này dự định năm sau niêm yết trên sàn.'}
   ],
   colloFull:[
     {zh:'持有股份',py:'chíyǒu gǔfèn',vn:'nắm giữ cổ phần'},
     {zh:'购买股份',py:'gòumǎi gǔfèn',vn:'mua cổ phần'},
     {zh:'股份公司',py:'gǔfèn gōngsī',vn:'công ty cổ phần'},
     {zh:'占30%的股份',py:'zhàn bǎi fēn zhī sānshí de gǔfèn',vn:'chiếm 30% cổ phần'},
     {zh:'出售股份',py:'chūshòu gǔfèn',vn:'bán cổ phần'}
   ],
   patterns:[
     {s:'在……占……的股份',m:'nắm … cổ phần ở …'},
     {s:'持有……的股份',m:'nắm giữ cổ phần của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã bán hết cổ phần trong tay, vì anh ấy không còn tin tưởng vào công ty nữa.',answer:'他把手里的股份全卖了，因为他对公司已经没有信心了。',answerPy:'Tā bǎ shǒu li de gǔfèn quán mài le, yīnwèi tā duì gōngsī yǐjīng méiyǒu xìnxīn le.',
      note:'Câu 把; 对……有 / 没有信心.',pair:'把……'},
     {promptLang:'vi',prompt:'Muốn trở thành cổ đông thì bạn phải mua cổ phần của công ty trước.',answer:'要想成为股东，你得先购买公司的股份。',answerPy:'Yào xiǎng chéngwéi gǔdōng, nǐ děi xiān gòumǎi gōngsī de gǔfèn.',
      note:'要想……得先…… (muốn … thì phải … trước).',pair:'要想……'}
   ]},

  {n:26,zh:'股东',py:'gǔdōng',pos:'Danh từ',vn:'cổ đông, người góp vốn',hv:'cổ đông',em:'🧑‍💼',lesson:1,
   explain:['Danh từ: cổ đông — người nắm giữ cổ phần của công ty, được chia lợi nhuận và có quyền biểu quyết: 大股东, 小股东, 股东大会.','Cùng họ chữ 股: 股份 (cổ phần), 股票 (cổ phiếu), 股民 (người chơi chứng khoán) — xem 练习1.'],
   usage:'成为股东; 大 / 小 + 股东; 股东大会; 作为股东…….',
   collo:['成为股东','大股东','股东大会','公司的股东'],
   ex_zh:'成为公司的股东',ex_py:'chéngwéi gōngsī de gǔdōng',ex_vn:'Trở thành cổ đông của công ty',
   exList:[
     {zh:'朱江的会员卡让很多普通人成为了公司的股东。',py:'Zhū Jiāng de huìyuánkǎ ràng hěn duō pǔtōng rén chéngwéile gōngsī de gǔdōng.',vn:'Chiếc thẻ hội viên của Chu Giang đã khiến nhiều người bình thường trở thành cổ đông của công ty.'},
     {zh:'公司每年都要召开一次股东大会。',py:'Gōngsī měi nián dōu yào zhàokāi yí cì gǔdōng dàhuì.',vn:'Mỗi năm công ty đều phải tổ chức một lần đại hội cổ đông.'},
     {zh:'作为最大的股东，他对公司的发展方向有很大的发言权。',py:'Zuòwéi zuì dà de gǔdōng, tā duì gōngsī de fāzhǎn fāngxiàng yǒu hěn dà de fāyánquán.',vn:'Là cổ đông lớn nhất, ông ấy có tiếng nói rất lớn đối với hướng phát triển của công ty.'}
   ],
   colloFull:[
     {zh:'成为股东',py:'chéngwéi gǔdōng',vn:'trở thành cổ đông'},
     {zh:'大股东',py:'dà gǔdōng',vn:'cổ đông lớn'},
     {zh:'股东大会',py:'gǔdōng dàhuì',vn:'đại hội cổ đông'},
     {zh:'公司的股东',py:'gōngsī de gǔdōng',vn:'cổ đông của công ty'},
     {zh:'小股东',py:'xiǎo gǔdōng',vn:'cổ đông nhỏ'}
   ],
   patterns:[
     {s:'作为……的股东，……',m:'với tư cách cổ đông của …'},
     {s:'召开股东大会',m:'họp đại hội cổ đông'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong cuộc họp, các cổ đông đều không đồng ý với kế hoạch này.',answer:'在会上，股东们都不同意这个计划。',answerPy:'Zài huì shang, gǔdōngmen dōu bù tóngyì zhège jìhuà.',
      note:'都不 = đều không (toàn phủ định).',pair:'都不……'},
     {promptLang:'vi',prompt:'Dù chỉ là một cổ đông nhỏ, anh ấy cũng rất quan tâm đến chuyện của công ty.',answer:'哪怕只是一个小股东，他也很关心公司的事情。',answerPy:'Nǎpà zhǐ shì yí ge xiǎo gǔdōng, tā yě hěn guānxīn gōngsī de shìqing.',
      note:'哪怕……也…… (ôn HSK 5).',pair:'哪怕……也……'}
   ]},

  {n:27,zh:'钞票',py:'chāopiào',pos:'Danh từ',vn:'tiền giấy, giấy bạc',hv:'sao phiếu',em:'💵',lesson:1,
   explain:['Danh từ: tiền giấy do ngân hàng phát hành (纸币). Khẩu ngữ hay dùng để chỉ tiền nói chung: 大把的钞票, 赚钞票.','Lượng từ: 张 (tờ), 叠 (xấp). Trong bài: 钞票源源不断流进来 — tiền cứ chảy vào không ngớt.'],
   usage:'一张 / 一叠 + 钞票; 假钞票 (tiền giả); 数钞票; 钞票源源不断…….',
   collo:['一叠钞票','数钞票','假钞票','一张钞票'],
   ex_zh:'一叠钞票',ex_py:'yì dié chāopiào',ex_vn:'Một xấp tiền giấy',
   exList:[
     {zh:'朱江回忆起当时钞票源源不断流进来的感觉，真的有种苦尽甘来的味道。',py:'Zhū Jiāng huíyì qǐ dāngshí chāopiào yuányuán-búduàn liú jìnlai de gǎnjué, zhēn de yǒu zhǒng kǔjìn-gānlái de wèidao.',vn:'Chu Giang nhớ lại cảm giác tiền cứ chảy vào không ngớt khi ấy, thật sự có vị khổ tận cam lai.'},
     {zh:'现在大家都用手机付款，很少有人带钞票出门了。',py:'Xiànzài dàjiā dōu yòng shǒujī fùkuǎn, hěn shǎo yǒu rén dài chāopiào chūmén le.',vn:'Bây giờ mọi người đều thanh toán bằng điện thoại, ít ai mang tiền giấy ra đường nữa.'},
     {zh:'收银员仔细检查了一下这张钞票，怕是假的。',py:'Shōuyínyuán zǐxì jiǎnchále yíxià zhè zhāng chāopiào, pà shì jiǎ de.',vn:'Nhân viên thu ngân kiểm tra kỹ tờ tiền này, sợ là tiền giả.'}
   ],
   colloFull:[
     {zh:'一叠钞票',py:'yì dié chāopiào',vn:'một xấp tiền giấy'},
     {zh:'数钞票',py:'shǔ chāopiào',vn:'đếm tiền'},
     {zh:'假钞票',py:'jiǎ chāopiào',vn:'tiền giả'},
     {zh:'一张钞票',py:'yì zhāng chāopiào',vn:'một tờ tiền'},
     {zh:'钞票源源不断',py:'chāopiào yuányuán-búduàn',vn:'tiền vào không ngớt'}
   ],
   patterns:[
     {s:'钞票源源不断地 + V',m:'tiền … không ngớt'},
     {s:'把钞票 + V (存 / 花 / 数)',m:'đem tiền đi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ví của anh ấy nhét đầy tiền giấy, vậy mà anh ấy chẳng vui chút nào.',answer:'他的钱包里塞满了钞票，可是他一点儿也不开心。',answerPy:'Tā de qiánbāo li sāimǎnle chāopiào, kěshì tā yìdiǎnr yě bù kāixīn.',
      note:'一点儿也不…… (ôn HSK 3–4).',pair:'一点儿也不……'},
     {promptLang:'vi',prompt:'Từ khi có thanh toán di động, nhiều người không còn mang tiền giấy nữa.',answer:'自从有了移动支付，很多人都不再带钞票了。',answerPy:'Zìcóng yǒule yídòng zhīfù, hěn duō rén dōu bú zài dài chāopiào le.',
      note:'自从……; 不再……了.',pair:'自从……'}
   ]},

  {n:28,zh:'苦尽甘来',py:'kǔjìn-gānlái',pos:'Thành ngữ',vn:'khổ tận cam lai, hết khổ đến sướng',hv:'khổ tận cam lai',em:'🍯',lesson:1,
   explain:['Thành ngữ: đắng (苦) hết thì ngọt (甘) tới — những ngày gian khổ đã qua, những ngày tốt đẹp đã đến.','Thường làm vị ngữ (终于苦尽甘来了), hoặc định ngữ trong 有种苦尽甘来的味道 / 感觉. Tiếng Việt có đúng thành ngữ "khổ tận cam lai".'],
   usage:'终于 / 总算 + 苦尽甘来; 有一种苦尽甘来的 + 感觉 / 味道; 苦尽甘来的一天.',
   collo:['终于苦尽甘来','苦尽甘来的味道','苦尽甘来的感觉','苦尽甘来的一天'],
   ex_zh:'有种苦尽甘来的味道',ex_py:'yǒu zhǒng kǔjìn-gānlái de wèidao',ex_vn:'Có vị khổ tận cam lai',
   exList:[
     {zh:'朱江回忆起当时的感觉，真的有种苦尽甘来的味道。',py:'Zhū Jiāng huíyì qǐ dāngshí de gǎnjué, zhēn de yǒu zhǒng kǔjìn-gānlái de wèidao.',vn:'Chu Giang nhớ lại cảm giác lúc ấy, thật sự có vị khổ tận cam lai.'},
     {zh:'父母辛苦了大半辈子，现在孩子们都工作了，他们终于苦尽甘来了。',py:'Fùmǔ xīnkǔle dà bàn bèizi, xiànzài háizimen dōu gōngzuò le, tāmen zhōngyú kǔjìn-gānlái le.',vn:'Bố mẹ vất vả hơn nửa đời người, giờ con cái đều đi làm cả rồi, cuối cùng họ cũng hết khổ đến sướng.'},
     {zh:'高三那一年特别累，但拿到录取通知书的时候，我觉得苦尽甘来。',py:'Gāosān nà yì nián tèbié lèi, dàn nádào lùqǔ tōngzhīshū de shíhou, wǒ juéde kǔjìn-gānlái.',vn:'Năm lớp 12 ấy vô cùng mệt mỏi, nhưng lúc cầm giấy báo trúng tuyển, tôi thấy đúng là khổ tận cam lai.'}
   ],
   colloFull:[
     {zh:'终于苦尽甘来',py:'zhōngyú kǔjìn-gānlái',vn:'cuối cùng cũng hết khổ đến sướng'},
     {zh:'苦尽甘来的味道',py:'kǔjìn-gānlái de wèidao',vn:'vị khổ tận cam lai'},
     {zh:'苦尽甘来的感觉',py:'kǔjìn-gānlái de gǎnjué',vn:'cảm giác khổ tận cam lai'},
     {zh:'苦尽甘来的一天',py:'kǔjìn-gānlái de yì tiān',vn:'ngày hết khổ đến sướng'},
     {zh:'总算苦尽甘来',py:'zǒngsuàn kǔjìn-gānlái',vn:'rốt cuộc cũng hết khổ'}
   ],
   patterns:[
     {s:'终于 / 总算 + 苦尽甘来了',m:'cuối cùng cũng hết khổ đến sướng'},
     {s:'有种苦尽甘来的 + 感觉 / 味道',m:'có cảm giác khổ tận cam lai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau mười năm khởi nghiệp gian khổ, cuối cùng anh ấy cũng hết khổ đến sướng.',answer:'经过十年艰苦的创业，他终于苦尽甘来了。',answerPy:'Jīngguò shí nián jiānkǔ de chuàngyè, tā zhōngyú kǔjìn-gānlái le.',
      note:'经过…… (ôn HSK 4); 创业 — bài 34.',pair:'经过……'},
     {promptLang:'vi',prompt:'Chỉ cần kiên trì, sớm muộn gì cũng sẽ có ngày khổ tận cam lai.',answer:'只要坚持下去，早晚会有苦尽甘来的一天。',answerPy:'Zhǐyào jiānchí xiàqu, zǎowǎn huì yǒu kǔjìn-gānlái de yì tiān.',
      note:'只要…… (điều kiện đủ); V + 下去 = tiếp tục.',pair:'只要……'}
   ]},

  {n:29,zh:'尴尬',py:'gāngà',pos:'Tính từ',vn:'lúng túng, khó xử, rắc rối',hv:'giam giới',em:'😅',lesson:1,
   explain:['Tính từ: ① (tình thế) khó xử, tiến thoái lưỡng nan: 处境尴尬, 尴尬的局面. ② (thần sắc, thái độ) ngượng ngùng, không tự nhiên: 他尴尬地笑了笑.','Hay đi với 处境, 局面, 场面; 感到尴尬; 尴尬地 + V. Đọc gāngà (thanh 1 + thanh 4).'],
   usage:'处境 / 局面 / 场面 + 尴尬; 感到尴尬; 尴尬地 + 笑 / 站; 让人很尴尬.',
   collo:['处境尴尬','感到尴尬','尴尬地笑了笑','尴尬的场面'],
   ex_zh:'处境尴尬',ex_py:'chǔjìng gāngà',ex_vn:'Tình cảnh khó xử',
   exList:[
     {zh:'时至今日，众筹项目有成功的，也有处境尴尬的。',py:'Shízhì jīnrì, zhòngchóu xiàngmù yǒu chénggōng de, yě yǒu chǔjìng gāngà de.',vn:'Cho đến hôm nay, các dự án gọi vốn cộng đồng có cái thành công, cũng có cái lâm vào tình cảnh khó xử.'},
     {zh:'我叫错了他的名字，他尴尬地笑了笑。',py:'Wǒ jiàocuòle tā de míngzi, tā gāngà de xiào le xiào.',vn:'Tôi gọi nhầm tên anh ấy, anh ấy cười gượng một cái.'},
     {zh:'当着那么多人的面被老师批评，他觉得非常尴尬。',py:'Dāngzhe nàme duō rén de miàn bèi lǎoshī pīpíng, tā juéde fēicháng gāngà.',vn:'Bị thầy phê bình trước mặt bao nhiêu người, cậu ấy thấy vô cùng ngượng.'}
   ],
   colloFull:[
     {zh:'处境尴尬',py:'chǔjìng gāngà',vn:'tình cảnh khó xử'},
     {zh:'感到尴尬',py:'gǎndào gāngà',vn:'cảm thấy ngượng'},
     {zh:'尴尬地笑了笑',py:'gāngà de xiào le xiào',vn:'cười gượng'},
     {zh:'尴尬的场面',py:'gāngà de chǎngmiàn',vn:'cảnh tượng khó xử'},
     {zh:'让人很尴尬',py:'ràng rén hěn gāngà',vn:'khiến người ta rất ngượng'}
   ],
   patterns:[
     {s:'……处境尴尬',m:'… lâm vào tình thế khó xử'},
     {s:'尴尬地 + V',m:'làm gì một cách ngượng ngùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nói xấu người ta xong thì người đó bước vào, cảnh tượng lúc ấy ngượng hết chỗ nói.',answer:'刚说完别人的坏话，那个人就走进来了，场面尴尬极了。',answerPy:'Gāng shuōwán biérén de huàihuà, nàge rén jiù zǒu jinlai le, chǎngmiàn gāngà jí le.',
      note:'刚……就…… (ôn HSK 4); Adj + 极了.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Để tránh khó xử, tốt nhất cậu nên hỏi trước xem anh ấy có rảnh không.',answer:'为了避免尴尬，你最好先问问他有没有空。',answerPy:'Wèile bìmiǎn gāngà, nǐ zuìhǎo xiān wènwen tā yǒu méiyǒu kòng.',
      note:'最好 = tốt nhất là (ôn HSK 4); 避免 — HSK 5.',pair:'最好……'}
   ]},

  {n:30,zh:'抛弃',py:'pāoqì',pos:'Động từ',vn:'vứt bỏ, từ bỏ',hv:'phao khí',em:'🗑️',lesson:1,
   explain:['Động từ: vứt bỏ, bỏ đi không cần nữa (đồ vật, quan niệm, người): 抛弃旧观念, 抛弃家庭. Sắc thái mạnh hơn 放弃, thường mang cảm xúc (bị bỏ rơi).','Trong bài: 点名时间三年以后却抛弃了“众筹”，改营其他 = bỏ hẳn mô hình gọi vốn cộng đồng. Phân biệt 放弃 (tự từ bỏ quyền lợi, cơ hội, ý định — 放弃机会). Xem 词语辨析.'],
   usage:'抛弃 + 旧观念 / 偏见 / 家人 / 宠物; 被……抛弃.',
   collo:['抛弃旧观念','抛弃宠物','被抛弃','抛弃偏见'],
   ex_zh:'抛弃了“众筹”',ex_py:'pāoqìle “zhòngchóu”',ex_vn:'Từ bỏ "gọi vốn cộng đồng"',
   exList:[
     {zh:'国内第一家众筹网站“点名时间”三年以后却抛弃了“众筹”，改营其他。',py:'Guónèi dì-yī jiā zhòngchóu wǎngzhàn “Diǎnmíng Shíjiān” sān nián yǐhòu què pāoqìle “zhòngchóu”, gǎi yíng qítā.',vn:'Trang web gọi vốn cộng đồng đầu tiên trong nước "Điểm danh thời gian" ba năm sau lại từ bỏ "gọi vốn cộng đồng", chuyển sang kinh doanh thứ khác.'},
     {zh:'我们应该抛弃那些不合时宜的旧观念。',py:'Wǒmen yīnggāi pāoqì nàxiē bù hé shíyí de jiù guānniàn.',vn:'Chúng ta nên vứt bỏ những quan niệm cũ không hợp thời ấy.'},
     {zh:'这只小狗被主人抛弃了，每天在街上流浪。',py:'Zhè zhī xiǎogǒu bèi zhǔrén pāoqì le, měi tiān zài jiē shang liúlàng.',vn:'Chú chó nhỏ này bị chủ vứt bỏ, ngày ngày lang thang ngoài phố.'}
   ],
   colloFull:[
     {zh:'抛弃旧观念',py:'pāoqì jiù guānniàn',vn:'vứt bỏ quan niệm cũ'},
     {zh:'抛弃宠物',py:'pāoqì chǒngwù',vn:'vứt bỏ thú cưng'},
     {zh:'被抛弃',py:'bèi pāoqì',vn:'bị ruồng bỏ'},
     {zh:'抛弃偏见',py:'pāoqì piānjiàn',vn:'vứt bỏ định kiến'},
     {zh:'抛弃家庭',py:'pāoqì jiātíng',vn:'bỏ rơi gia đình'}
   ],
   patterns:[
     {s:'被……抛弃',m:'bị … ruồng bỏ, vứt bỏ'},
     {s:'抛弃 + 旧的 + N',m:'vứt bỏ cái cũ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi vứt bỏ định kiến, chúng ta mới có thể thật sự hiểu người khác.',answer:'只有抛弃偏见，我们才能真正了解别人。',answerPy:'Zhǐyǒu pāoqì piānjiàn, wǒmen cái néng zhēnzhèng liǎojiě biérén.',
      note:'只有……才…….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nuôi thú cưng là một trách nhiệm, đã nuôi rồi thì đừng tuỳ tiện vứt bỏ nó.',answer:'养宠物是一种责任，既然养了，就不要随便抛弃它。',answerPy:'Yǎng chǒngwù shì yì zhǒng zérèn, jìrán yǎng le, jiù búyào suíbiàn pāoqì tā.',
      note:'既然……就…… (ôn HSK 4).',pair:'既然……就……'}
   ]},

  {n:31,zh:'坦白',py:'tǎnbái',pos:'Tính từ / Động từ',vn:'thẳng thắn, ngay thẳng; thú nhận',hv:'thản bạch',em:'🗣️',lesson:1,
   explain:['Tính từ: (lòng dạ, lời nói) ngay thẳng, thẳng thắn, không che giấu: 他为人很坦白. Cụm 坦白地说 / 坦白地讲 = nói thẳng ra, thành thật mà nói.','Động từ: thú nhận, khai thật (lỗi lầm, tội): 坦白自己的错误, 向警察坦白.'],
   usage:'坦白地说 / 讲，……; 坦白 + 错误 / 罪行; 向……坦白.',
   collo:['坦白地说','坦白地讲','坦白错误','向父母坦白'],
   ex_zh:'坦白地讲',ex_py:'tǎnbái de jiǎng',ex_vn:'Nói thẳng ra',
   exList:[
     {zh:'坦白地讲，国内用户与国外有很大区别。',py:'Tǎnbái de jiǎng, guónèi yònghù yǔ guówài yǒu hěn dà qūbié.',vn:'Nói thẳng ra, người dùng trong nước khác người dùng nước ngoài rất nhiều.'},
     {zh:'坦白地说，我们已经离不开手机了。',py:'Tǎnbái de shuō, wǒmen yǐjīng lí bu kāi shǒujī le.',vn:'Thành thật mà nói, chúng ta đã không thể rời xa điện thoại được nữa.'},
     {zh:'他终于鼓起勇气，向父母坦白了自己考试不及格的事。',py:'Tā zhōngyú gǔqǐ yǒngqì, xiàng fùmǔ tǎnbáile zìjǐ kǎoshì bù jígé de shì.',vn:'Cuối cùng cậu ấy lấy hết can đảm thú nhận với bố mẹ chuyện mình thi trượt.'}
   ],
   colloFull:[
     {zh:'坦白地说',py:'tǎnbái de shuō',vn:'thành thật mà nói'},
     {zh:'坦白地讲',py:'tǎnbái de jiǎng',vn:'nói thẳng ra'},
     {zh:'坦白错误',py:'tǎnbái cuòwù',vn:'thú nhận lỗi lầm'},
     {zh:'向父母坦白',py:'xiàng fùmǔ tǎnbái',vn:'thú nhận với bố mẹ'},
     {zh:'为人坦白',py:'wéirén tǎnbái',vn:'con người thẳng thắn'}
   ],
   patterns:[
     {s:'坦白地说，……',m:'thành thật mà nói, …'},
     {s:'向 + ai + 坦白 + việc',m:'thú nhận … với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành thật mà nói, bài văn này của cậu viết không hay bằng lần trước.',answer:'坦白地说，你这篇作文写得没有上次好。',answerPy:'Tǎnbái de shuō, nǐ zhè piān zuòwén xiě de méiyǒu shàng cì hǎo.',
      note:'A 没有 B + Adj (so sánh kém, ôn HSK 3–4).',pair:'A没有B……'},
     {promptLang:'vi',prompt:'Làm sai thì nên thú nhận ngay, đừng đợi người khác phát hiện.',answer:'做错了事就应该马上坦白，不要等别人发现。',answerPy:'Zuòcuòle shì jiù yīnggāi mǎshàng tǎnbái, búyào děng biérén fāxiàn.',
      note:'……就应该…… ; 不要等…….',pair:'不要……'}
   ]},

  {n:32,zh:'急功近利',py:'jígōng-jìnlì',pos:'Thành ngữ',vn:'chỉ lo lợi ích trước mắt, nóng vội cầu lợi',hv:'cấp công cận lợi',em:'⏩',lesson:1,
   explain:['Thành ngữ: nóng vội muốn thành công (急功), ham cái lợi trước mắt (近利), không tính chuyện lâu dài. Mang nghĩa chê.','Làm vị ngữ (有些急功近利), định ngữ (急功近利的心态 / 做法). Trái với 从长计议 (tính kế lâu dài).'],
   usage:'有些 / 太 + 急功近利; 急功近利的 + 心态 / 做法 / 思想; 不能急功近利.',
   collo:['急功近利的心态','有些急功近利','不能急功近利','急功近利的做法'],
   ex_zh:'有些急功近利',ex_py:'yǒuxiē jígōng-jìnlì',ex_vn:'Có phần nóng vội cầu lợi',
   exList:[
     {zh:'国内用户则希望尽快得到回报，甚至有些急功近利。',py:'Guónèi yònghù zé xīwàng jǐnkuài dédào huíbào, shènzhì yǒuxiē jígōng-jìnlì.',vn:'Người dùng trong nước thì mong nhanh chóng nhận được lợi nhuận, thậm chí có phần nóng vội cầu lợi.'},
     {zh:'学习不能急功近利，打好基础最重要。',py:'Xuéxí bù néng jígōng-jìnlì, dǎhǎo jīchǔ zuì zhòngyào.',vn:'Học tập không thể nóng vội cầu thành, xây chắc nền tảng là quan trọng nhất.'},
     {zh:'这种急功近利的做法，也许能赚一时的钱，但长远来看害处很大。',py:'Zhè zhǒng jígōng-jìnlì de zuòfǎ, yěxǔ néng zhuàn yìshí de qián, dàn chángyuǎn lái kàn hàichu hěn dà.',vn:'Cách làm chạy theo lợi trước mắt này có thể kiếm được tiền nhất thời, nhưng về lâu dài thì rất có hại.'}
   ],
   colloFull:[
     {zh:'急功近利的心态',py:'jígōng-jìnlì de xīntài',vn:'tâm lý nóng vội cầu lợi'},
     {zh:'有些急功近利',py:'yǒuxiē jígōng-jìnlì',vn:'có phần nóng vội cầu lợi'},
     {zh:'不能急功近利',py:'bù néng jígōng-jìnlì',vn:'không được nóng vội cầu lợi'},
     {zh:'急功近利的做法',py:'jígōng-jìnlì de zuòfǎ',vn:'cách làm chạy theo lợi trước mắt'},
     {zh:'太急功近利',py:'tài jígōng-jìnlì',vn:'quá hám lợi trước mắt'}
   ],
   patterns:[
     {s:'……不能急功近利',m:'… không được nóng vội cầu lợi'},
     {s:'急功近利的 + 心态 / 做法',m:'tâm lý / cách làm chạy theo lợi trước mắt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm ăn không được chỉ lo lợi trước mắt, nếu không sớm muộn cũng mất khách.',answer:'做生意不能急功近利，否则早晚会失去顾客。',answerPy:'Zuò shēngyi bù néng jígōng-jìnlì, fǒuzé zǎowǎn huì shīqù gùkè.',
      note:'否则…….',pair:'否则……'},
     {promptLang:'vi',prompt:'Chính vì tâm lý nóng vội cầu lợi mà nhiều người mới bị lừa.',answer:'正是因为急功近利的心态，很多人才上当受骗。',answerPy:'Zhèng shì yīnwèi jígōng-jìnlì de xīntài, hěn duō rén cái shàngdàng shòupiàn.',
      note:'正是因为……才…… (nhấn mạnh nguyên nhân); 心态 — bài 24.',pair:'正是因为……'}
   ]},

  {n:33,zh:'进展',py:'jìnzhǎn',pos:'Động từ / Danh từ',vn:'tiến triển, phát triển',hv:'tiến triển',em:'📈',lesson:1,
   explain:['Động từ: (sự việc, công việc) phát triển về phía trước: 工作进展得很顺利, 项目进展缓慢.','Danh từ: sự tiến triển — 取得进展, 有新的进展, 最新进展. Khác 进步 (tiến bộ — thường nói con người, trình độ tốt lên).'],
   usage:'进展 + 顺利 / 缓慢 / 得很快; 取得 + 进展; 有 + 新的 / 重大 + 进展.',
   collo:['进展顺利','取得进展','项目进展','新的进展'],
   ex_zh:'项目进展比计划的慢',ex_py:'xiàngmù jìnzhǎn bǐ jìhuà de màn',ex_vn:'Dự án tiến triển chậm hơn kế hoạch',
   exList:[
     {zh:'如果认为产品不符合预期，或是项目进展比计划的慢，就会发牢骚，有怨气。',py:'Rúguǒ rènwéi chǎnpǐn bù fúhé yùqī, huò shì xiàngmù jìnzhǎn bǐ jìhuà de màn, jiù huì fā láosāo, yǒu yuànqì.',vn:'Nếu cho rằng sản phẩm không đúng như kỳ vọng, hoặc dự án tiến triển chậm hơn kế hoạch, họ sẽ phàn nàn, oán trách.'},
     {zh:'经过一个月的调查，这个案件终于有了新的进展。',py:'Jīngguò yí ge yuè de diàochá, zhège ànjiàn zhōngyú yǒule xīn de jìnzhǎn.',vn:'Sau một tháng điều tra, vụ án này cuối cùng đã có tiến triển mới.'},
     {zh:'两国的谈判进展得很顺利。',py:'Liǎng guó de tánpàn jìnzhǎn de hěn shùnlì.',vn:'Cuộc đàm phán giữa hai nước tiến triển rất thuận lợi.'}
   ],
   colloFull:[
     {zh:'进展顺利',py:'jìnzhǎn shùnlì',vn:'tiến triển thuận lợi'},
     {zh:'取得进展',py:'qǔdé jìnzhǎn',vn:'đạt được tiến triển'},
     {zh:'项目进展',py:'xiàngmù jìnzhǎn',vn:'tiến độ dự án'},
     {zh:'新的进展',py:'xīn de jìnzhǎn',vn:'tiến triển mới'},
     {zh:'进展缓慢',py:'jìnzhǎn huǎnmàn',vn:'tiến triển chậm chạp'}
   ],
   patterns:[
     {s:'……进展得很顺利',m:'… tiến triển rất thuận lợi'},
     {s:'……有了新的进展',m:'… đã có tiến triển mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc tiến triển thế nào rồi? Có cần tôi giúp gì không?',answer:'工作进展得怎么样了？需要我帮忙吗？',answerPy:'Gōngzuò jìnzhǎn de zěnmeyàng le? Xūyào wǒ bāngmáng ma?',
      note:'V + 得 + 怎么样 (hỏi mức độ).',pair:'……得怎么样'},
     {promptLang:'vi',prompt:'Tuy nghiên cứu đã có tiến triển lớn, nhưng muốn áp dụng lâm sàng vẫn cần vài năm nữa.',answer:'虽然研究取得了很大的进展，但是要用于临床还需要几年时间。',answerPy:'Suīrán yánjiū qǔdéle hěn dà de jìnzhǎn, dànshì yào yòngyú línchuáng hái xūyào jǐ nián shíjiān.',
      note:'临床 — HSK 6 bài 23.',pair:'虽然……但是……'}
   ]},

  {n:34,zh:'牢骚',py:'láosāo',pos:'Danh từ',vn:'sự càu nhàu, sự phàn nàn',hv:'lao tao',em:'😤',lesson:1,
   explain:['Danh từ: lời phàn nàn, cằn nhằn vì bất mãn: 满腹牢骚 (đầy bụng bất mãn). Dùng chủ yếu trong 发牢骚 (phàn nàn, cằn nhằn).','发牢骚 có thể xen thành phần: 发了一通牢骚, 发什么牢骚. Khẩu ngữ gần 抱怨.'],
   usage:'发牢骚; 发了一通牢骚; 满腹牢骚; 别发牢骚了.',
   collo:['发牢骚','满腹牢骚','发了一通牢骚','别发牢骚了'],
   ex_zh:'发牢骚',ex_py:'fā láosāo',ex_vn:'Phàn nàn, cằn nhằn',
   exList:[
     {zh:'如果项目进展比计划的慢，他们就会发牢骚，有怨气。',py:'Rúguǒ xiàngmù jìnzhǎn bǐ jìhuà de màn, tāmen jiù huì fā láosāo, yǒu yuànqì.',vn:'Nếu dự án tiến triển chậm hơn kế hoạch, họ sẽ phàn nàn, oán trách.'},
     {zh:'光发牢骚解决不了问题，还是想想办法吧。',py:'Guāng fā láosāo jiějué bu liǎo wèntí, háishi xiǎngxiang bànfǎ ba.',vn:'Chỉ phàn nàn thì chẳng giải quyết được vấn đề, hãy nghĩ cách đi.'},
     {zh:'他一回家就对着妻子发了一通牢骚，说老板太不公平。',py:'Tā yì huí jiā jiù duìzhe qīzi fāle yí tòng láosāo, shuō lǎobǎn tài bù gōngpíng.',vn:'Vừa về đến nhà anh ấy đã càu nhàu với vợ một trận, nói ông chủ quá bất công.'}
   ],
   colloFull:[
     {zh:'发牢骚',py:'fā láosāo',vn:'phàn nàn, cằn nhằn'},
     {zh:'满腹牢骚',py:'mǎnfù láosāo',vn:'đầy bụng bất mãn'},
     {zh:'发了一通牢骚',py:'fāle yí tòng láosāo',vn:'càu nhàu một trận'},
     {zh:'别发牢骚了',py:'bié fā láosāo le',vn:'đừng cằn nhằn nữa'},
     {zh:'一肚子牢骚',py:'yí dùzi láosāo',vn:'một bụng bực tức'}
   ],
   patterns:[
     {s:'对 + ai + 发牢骚',m:'phàn nàn với ai'},
     {s:'光发牢骚 + V不了……',m:'chỉ phàn nàn thì chẳng … được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì ngồi đây phàn nàn, chi bằng nghĩ xem nên giải quyết thế nào.',answer:'与其在这儿发牢骚，不如想想怎么解决。',answerPy:'Yǔqí zài zhèr fā láosāo, bùrú xiǎngxiang zěnme jiějué.',
      note:'与其……不如…… (ôn HSK 5).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Lần nào thi xong cậu ấy cũng phàn nàn là đề khó quá.',answer:'每次考完试，他都发牢骚说题太难了。',answerPy:'Měi cì kǎowán shì, tā dōu fā láosāo shuō tí tài nán le.',
      note:'每次……都…….',pair:'每次……都……'}
   ]},

  {n:35,zh:'迄今为止',py:'qìjīn wéizhǐ',pos:'Cụm cố định',vn:'cho đến bây giờ, cho đến nay',hv:'hất kim vi chỉ',em:'⏳',lesson:1,
   explain:['Cụm cố định văn viết: tính đến thời điểm hiện nay (到现在为止). 迄 = đến; 今 = nay; 为止 = làm mốc dừng. Thường đứng đầu câu hoặc sau chủ ngữ làm trạng ngữ.','Hay đi với 还 / 仍 / 已经 / 最……: 迄今为止最大的…… (… lớn nhất từ trước đến nay).'],
   usage:'迄今为止，……; 迄今为止 + 最……的 + N; S + 迄今为止 + 还 / 仍…….',
   collo:['迄今为止','迄今为止最大的','迄今为止还没有','迄今为止已经'],
   ex_zh:'迄今为止最成功的项目',ex_py:'qìjīn wéizhǐ zuì chénggōng de xiàngmù',ex_vn:'Dự án thành công nhất từ trước đến nay',
   exList:[
     {zh:'迄今为止众筹在国内还是一个看起来很美、做起来吃力的事情。',py:'Qìjīn wéizhǐ zhòngchóu zài guónèi háishi yí ge kàn qilai hěn měi, zuò qilai chīlì de shìqing.',vn:'Cho đến nay, gọi vốn cộng đồng ở trong nước vẫn là việc nhìn thì đẹp, làm thì vất vả.'},
     {zh:'有数据显示，迄今为止，中国手机用户大约为12.4亿户。',py:'Yǒu shùjù xiǎnshì, qìjīn wéizhǐ, Zhōngguó shǒujī yònghù dàyuē wéi shí\'èr diǎn sì yì hù.',vn:'Có số liệu cho thấy, tính đến nay, người dùng điện thoại di động ở Trung Quốc khoảng 1,24 tỷ.'},
     {zh:'这是迄今为止人类发现的最大的恐龙化石。',py:'Zhè shì qìjīn wéizhǐ rénlèi fāxiàn de zuì dà de kǒnglóng huàshí.',vn:'Đây là hoá thạch khủng long lớn nhất mà loài người phát hiện được cho đến nay.'}
   ],
   colloFull:[
     {zh:'迄今为止',py:'qìjīn wéizhǐ',vn:'cho đến nay'},
     {zh:'迄今为止最大的',py:'qìjīn wéizhǐ zuì dà de',vn:'lớn nhất từ trước đến nay'},
     {zh:'迄今为止还没有',py:'qìjīn wéizhǐ hái méiyǒu',vn:'cho đến nay vẫn chưa có'},
     {zh:'迄今为止已经',py:'qìjīn wéizhǐ yǐjīng',vn:'tính đến nay đã'},
     {zh:'迄今为止仍然',py:'qìjīn wéizhǐ réngrán',vn:'cho đến nay vẫn'}
   ],
   patterns:[
     {s:'迄今为止，……还 / 仍……',m:'cho đến nay, … vẫn …'},
     {s:'迄今为止最 + Adj + 的 + N',m:'… nhất từ trước đến nay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho đến nay, bệnh này vẫn chưa có cách chữa hiệu quả.',answer:'迄今为止，这种病还没有有效的治疗方法。',answerPy:'Qìjīn wéizhǐ, zhè zhǒng bìng hái méiyǒu yǒuxiào de zhìliáo fāngfǎ.',
      note:'还没有 = vẫn chưa có.',pair:'还没有……'},
     {promptLang:'vi',prompt:'Đây là chuyến du lịch vui nhất của tôi từ trước đến nay.',answer:'这是迄今为止我最开心的一次旅行。',answerPy:'Zhè shì qìjīn wéizhǐ wǒ zuì kāixīn de yí cì lǚxíng.',
      note:'最 + Adj + 的 + 一次 + N.',pair:'最……的一次'}
   ]},

  {n:36,zh:'吃力',py:'chīlì',pos:'Tính từ',vn:'vất vả, khó nhọc',hv:'ngật lực',em:'😓',lesson:1,
   explain:['Tính từ: tốn nhiều sức, vất vả, chật vật: 学得很吃力, 走路很吃力. Nghĩa đen "ăn sức".','Hay dùng 看起来很美、做起来吃力; 吃力不讨好 (vất vả mà chẳng được lòng ai). Làm trạng ngữ: 吃力地 + V.'],
   usage:'……很吃力; V + 得 + 很吃力; 吃力地 + V; 吃力不讨好.',
   collo:['很吃力','学得很吃力','吃力地走','吃力不讨好'],
   ex_zh:'做起来吃力',ex_py:'zuò qilai chīlì',ex_vn:'Làm thì vất vả',
   exList:[
     {zh:'众筹在国内还是一个看起来很美、做起来吃力的事情。',py:'Zhòngchóu zài guónèi háishi yí ge kàn qilai hěn měi, zuò qilai chīlì de shìqing.',vn:'Gọi vốn cộng đồng ở trong nước vẫn là việc nhìn thì đẹp, làm thì vất vả.'},
     {zh:'爷爷年纪大了，上楼梯的时候有些吃力。',py:'Yéye niánjì dà le, shàng lóutī de shíhou yǒuxiē chīlì.',vn:'Ông nội tuổi đã cao, lúc leo cầu thang hơi chật vật.'},
     {zh:'他的汉语基础不好，上高级班学得很吃力。',py:'Tā de Hànyǔ jīchǔ bù hǎo, shàng gāojí bān xué de hěn chīlì.',vn:'Nền tảng tiếng Trung của cậu ấy không tốt, học lớp cao cấp rất vất vả.'}
   ],
   colloFull:[
     {zh:'很吃力',py:'hěn chīlì',vn:'rất vất vả'},
     {zh:'学得很吃力',py:'xué de hěn chīlì',vn:'học rất chật vật'},
     {zh:'吃力地走',py:'chīlì de zǒu',vn:'đi một cách khó nhọc'},
     {zh:'吃力不讨好',py:'chīlì bù tǎohǎo',vn:'vất vả mà chẳng được lòng ai'},
     {zh:'有些吃力',py:'yǒuxiē chīlì',vn:'hơi vất vả'}
   ],
   patterns:[
     {s:'V起来 + 吃力',m:'làm … thấy vất vả'},
     {s:'V得很吃力',m:'làm … rất chật vật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc vali nặng quá, cô ấy kéo rất vất vả.',answer:'箱子太重了，她拉得很吃力。',answerPy:'Xiāngzi tài zhòng le, tā lā de hěn chīlì.',
      note:'V + 得 + 很吃力 (bổ ngữ trạng thái).',pair:'V得……'},
     {promptLang:'vi',prompt:'Việc này nhìn thì dễ, làm rồi mới biết vất vả.',answer:'这件事看起来容易，做起来才知道吃力。',answerPy:'Zhè jiàn shì kàn qilai róngyì, zuò qilai cái zhīdào chīlì.',
      note:'V起来 (đánh giá khi làm thử).',pair:'V起来……'}
   ]},

  {n:37,zh:'家喻户晓',py:'jiāyù-hùxiǎo',pos:'Thành ngữ',vn:'mọi người đều biết, nhà nhà đều hay',hv:'gia dụ hộ hiểu',em:'📢',lesson:1,
   explain:['Thành ngữ: nhà nào cũng rõ, hộ nào cũng biết — cực kỳ phổ biến, ai ai cũng biết. 喻 = hiểu rõ; 晓 = biết.','Làm vị ngữ (这个故事家喻户晓), định ngữ (家喻户晓的明星), bổ ngữ (变得家喻户晓). Gần 众所周知 nhưng 家喻户晓 nhấn "phổ biến đến từng nhà".'],
   usage:'……家喻户晓; 家喻户晓的 + 人物 / 故事 / 明星; 变得 / 成为 + 家喻户晓.',
   collo:['家喻户晓的故事','变得家喻户晓','家喻户晓的明星','早已家喻户晓'],
   ex_zh:'变得家喻户晓',ex_py:'biàn de jiāyù-hùxiǎo',ex_vn:'Trở nên ai ai cũng biết',
   exList:[
     {zh:'互联网变得家喻户晓，给我们的生活带来了许许多多的方便和乐趣。',py:'Hùliánwǎng biàn de jiāyù-hùxiǎo, gěi wǒmen de shēnghuó dàiláile xǔxǔduōduō de fāngbiàn hé lèqù.',vn:'Internet trở nên ai ai cũng biết, mang lại cho cuộc sống của chúng ta biết bao tiện lợi và niềm vui.'},
     {zh:'《西游记》里孙悟空的故事在中国家喻户晓。',py:'《Xīyóu Jì》 li Sūn Wùkōng de gùshi zài Zhōngguó jiāyù-hùxiǎo.',vn:'Câu chuyện Tôn Ngộ Không trong "Tây Du Ký" ở Trung Quốc thì nhà nhà đều biết.'},
     {zh:'一部电视剧让这位年轻演员一夜之间成了家喻户晓的明星。',py:'Yí bù diànshìjù ràng zhè wèi niánqīng yǎnyuán yí yè zhījiān chéngle jiāyù-hùxiǎo de míngxīng.',vn:'Một bộ phim truyền hình đã khiến diễn viên trẻ này chỉ sau một đêm trở thành ngôi sao ai cũng biết.'}
   ],
   colloFull:[
     {zh:'家喻户晓的故事',py:'jiāyù-hùxiǎo de gùshi',vn:'câu chuyện ai cũng biết'},
     {zh:'变得家喻户晓',py:'biàn de jiāyù-hùxiǎo',vn:'trở nên ai ai cũng biết'},
     {zh:'家喻户晓的明星',py:'jiāyù-hùxiǎo de míngxīng',vn:'ngôi sao ai cũng biết'},
     {zh:'早已家喻户晓',py:'zǎo yǐ jiāyù-hùxiǎo',vn:'từ lâu đã ai ai cũng biết'},
     {zh:'家喻户晓的人物',py:'jiāyù-hùxiǎo de rénwù',vn:'nhân vật ai cũng biết'}
   ],
   patterns:[
     {s:'……在……家喻户晓',m:'… ở … nhà nhà đều biết'},
     {s:'成了家喻户晓的 + N',m:'trở thành … ai cũng biết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở Việt Nam, câu chuyện Thánh Gióng thì ai ai cũng biết.',answer:'在越南，扶董天王的故事家喻户晓。',answerPy:'Zài Yuènán, Fúdǒng Tiānwáng de gùshi jiāyù-hùxiǎo.',
      note:'Chủ ngữ + 家喻户晓 làm vị ngữ.',pair:'在……'},
     {promptLang:'vi',prompt:'Chỉ sau một đêm, đoạn video đã khiến anh ấy trở thành người ai cũng biết.',answer:'一夜之间，他的视频让他变得家喻户晓。',answerPy:'Yí yè zhījiān, tā de shìpín ràng tā biàn de jiāyù-hùxiǎo.',
      note:'让 + người + 变得 + Adj.',pair:'让……变得……'}
   ]},

  {n:38,zh:'无穷无尽',py:'wúqióng wújìn',pos:'Thành ngữ',vn:'vô tận, vô hạn, không bao giờ hết',hv:'vô cùng vô tận',em:'♾️',lesson:1,
   explain:['Thành ngữ: không có giới hạn, không bao giờ hết (穷 = 尽 = hết). Nhấn mạnh hơn 无穷 / 无尽.','Thường làm định ngữ: 无穷无尽的烦恼 / 快乐 / 力量 / 知识. Dùng được cho cả điều tốt lẫn điều xấu.'],
   usage:'无穷无尽的 + 快乐 / 烦恼 / 力量 / 宝藏; 带来 / 增添 + 无穷无尽的…….',
   collo:['无穷无尽的快乐','无穷无尽的烦恼','无穷无尽的力量','无穷无尽的知识'],
   ex_zh:'无穷无尽的烦恼',ex_py:'wúqióng wújìn de fánnǎo',ex_vn:'Nỗi phiền muộn vô tận',
   exList:[
     {zh:'互联网也给我们增添了无穷无尽的烦恼。',py:'Hùliánwǎng yě gěi wǒmen zēngtiānle wúqióng wújìn de fánnǎo.',vn:'Internet cũng thêm cho chúng ta vô vàn phiền muộn.'},
     {zh:'旅行中的各种见闻可以带给我们无穷无尽的快乐。',py:'Lǚxíng zhōng de gè zhǒng jiànwén kěyǐ dài gěi wǒmen wúqióng wújìn de kuàilè.',vn:'Những điều mắt thấy tai nghe khi du lịch có thể mang lại cho chúng ta niềm vui vô tận.'},
     {zh:'知识的海洋无穷无尽，我们要活到老，学到老。',py:'Zhīshi de hǎiyáng wúqióng wújìn, wǒmen yào huó dào lǎo, xué dào lǎo.',vn:'Biển kiến thức là vô tận, chúng ta phải học đến già.'}
   ],
   colloFull:[
     {zh:'无穷无尽的快乐',py:'wúqióng wújìn de kuàilè',vn:'niềm vui vô tận'},
     {zh:'无穷无尽的烦恼',py:'wúqióng wújìn de fánnǎo',vn:'phiền muộn vô tận'},
     {zh:'无穷无尽的力量',py:'wúqióng wújìn de lìliang',vn:'sức mạnh vô tận'},
     {zh:'无穷无尽的知识',py:'wúqióng wújìn de zhīshi',vn:'kiến thức vô tận'},
     {zh:'无穷无尽的宝藏',py:'wúqióng wújìn de bǎozàng',vn:'kho báu vô tận'}
   ],
   patterns:[
     {s:'带给……无穷无尽的 + N',m:'mang lại cho … … vô tận'},
     {s:'……是无穷无尽的',m:'… là vô tận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình yêu của mẹ dành cho con là vô tận.',answer:'母亲对孩子的爱是无穷无尽的。',answerPy:'Mǔqīn duì háizi de ài shì wúqióng wújìn de.',
      note:'是……的 nhấn mạnh sự đánh giá.',pair:'是……的'},
     {promptLang:'vi',prompt:'Đọc sách không chỉ mở mang kiến thức mà còn mang lại cho tôi niềm vui vô tận.',answer:'读书不仅能增长知识，还能带给我无穷无尽的快乐。',answerPy:'Dú shū bùjǐn néng zēngzhǎng zhīshi, hái néng dài gěi wǒ wúqióng wújìn de kuàilè.',
      note:'不仅……还…….',pair:'不仅……还……'}
   ]},

  {n:39,zh:'罪犯',py:'zuìfàn',pos:'Danh từ',vn:'tội phạm',hv:'tội phạm',em:'🚔',lesson:1,
   explain:['Danh từ: kẻ phạm tội (người đã phạm tội, bị pháp luật trừng trị). Lượng từ: 名 / 个.','Hay đi với 抓获 / 逮捕 (bắt giữ), 追捕 (truy bắt), 审判 (xét xử). Phân biệt 犯罪 (động từ: phạm tội) và 罪犯 (danh từ: kẻ phạm tội).'],
   usage:'抓获 / 逮捕 / 追捕 + 罪犯; 一名罪犯; 网络罪犯.',
   collo:['抓获罪犯','一名罪犯','网络罪犯','追捕罪犯'],
   ex_zh:'尚未查明身份的罪犯',ex_py:'shàngwèi chámíng shēnfen de zuìfàn',ex_vn:'Tội phạm chưa xác minh được danh tính',
   exList:[
     {zh:'据官方报道，尚未查明身份的罪犯盗窃了1800万个电子邮件账户及其密码。',py:'Jù guānfāng bàodào, shàngwèi chámíng shēnfen de zuìfàn dàoqièle yìqiān bābǎi wàn ge diànzǐ yóujiàn zhànghù jí qí mìmǎ.',vn:'Theo tin chính thức, những tên tội phạm chưa xác minh được danh tính đã đánh cắp 18 triệu tài khoản email cùng mật khẩu.'},
     {zh:'警方用了三天时间，终于抓获了那名罪犯。',py:'Jǐngfāng yòngle sān tiān shíjiān, zhōngyú zhuāhuòle nà míng zuìfàn.',vn:'Cảnh sát mất ba ngày, cuối cùng đã bắt được tên tội phạm đó.'},
     {zh:'网络罪犯常常冒充银行工作人员骗取钱财。',py:'Wǎngluò zuìfàn chángcháng màochōng yínháng gōngzuò rényuán piànqǔ qiáncái.',vn:'Tội phạm mạng thường giả danh nhân viên ngân hàng để lừa lấy tiền của.'}
   ],
   colloFull:[
     {zh:'抓获罪犯',py:'zhuāhuò zuìfàn',vn:'bắt được tội phạm'},
     {zh:'一名罪犯',py:'yì míng zuìfàn',vn:'một tên tội phạm'},
     {zh:'网络罪犯',py:'wǎngluò zuìfàn',vn:'tội phạm mạng'},
     {zh:'追捕罪犯',py:'zhuībǔ zuìfàn',vn:'truy bắt tội phạm'},
     {zh:'审判罪犯',py:'shěnpàn zuìfàn',vn:'xét xử tội phạm'}
   ],
   patterns:[
     {s:'抓获 / 逮捕 + 罪犯',m:'bắt giữ tội phạm'},
     {s:'尚未查明身份的罪犯',m:'tội phạm chưa rõ danh tính'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ có camera giám sát, cảnh sát đã nhanh chóng tìm ra tên tội phạm.',answer:'多亏了监控摄像头，警察很快就找到了罪犯。',answerPy:'Duōkuīle jiānkòng shèxiàngtóu, jǐngchá hěn kuài jiù zhǎodàole zuìfàn.',
      note:'多亏 = nhờ có (ôn HSK 5).',pair:'多亏……'},
     {promptLang:'vi',prompt:'Tên tội phạm tuy đã bỏ trốn, nhưng cuối cùng vẫn bị bắt.',answer:'罪犯虽然逃跑了，但最后还是被抓住了。',answerPy:'Zuìfàn suīrán táopǎo le, dàn zuìhòu háishi bèi zhuāzhù le.',
      note:'Câu bị động 被; 还是 = vẫn.',pair:'虽然……但……'}
   ]},

  {n:40,zh:'盗窃',py:'dàoqiè',pos:'Động từ',vn:'trộm cắp, đánh cắp',hv:'đạo thiết',em:'🕵️',lesson:1,
   explain:['Động từ: lấy trộm (tài sản, thông tin) một cách phi pháp: 盗窃财物, 盗窃密码, 盗窃罪. Văn viết, dùng trong pháp luật, báo chí; khẩu ngữ dùng 偷.','Đối tượng mở rộng sang thông tin, dữ liệu: 盗窃个人信息, 盗窃商业机密. Khác 抢劫 (cướp — dùng vũ lực công khai).'],
   usage:'盗窃 + 财物 / 信息 / 密码 / 机密; 盗窃案; 盗窃罪; 因盗窃被…….',
   collo:['盗窃财物','盗窃密码','盗窃案','盗窃个人信息'],
   ex_zh:'盗窃电子邮件账户',ex_py:'dàoqiè diànzǐ yóujiàn zhànghù',ex_vn:'Đánh cắp tài khoản email',
   exList:[
     {zh:'罪犯盗窃了1800万个电子邮件账户及其密码。',py:'Zuìfàn dàoqièle yìqiān bābǎi wàn ge diànzǐ yóujiàn zhànghù jí qí mìmǎ.',vn:'Tội phạm đã đánh cắp 18 triệu tài khoản email cùng mật khẩu.'},
     {zh:'最近小区里连续发生了几起盗窃案。',py:'Zuìjìn xiǎoqū li liánxù fāshēngle jǐ qǐ dàoqiè\'àn.',vn:'Gần đây trong khu chung cư liên tiếp xảy ra mấy vụ trộm.'},
     {zh:'黑客盗窃了公司的商业机密，造成了巨大的损失。',py:'Hēikè dàoqièle gōngsī de shāngyè jīmì, zàochéngle jùdà de sǔnshī.',vn:'Tin tặc đánh cắp bí mật kinh doanh của công ty, gây ra tổn thất to lớn.'}
   ],
   colloFull:[
     {zh:'盗窃财物',py:'dàoqiè cáiwù',vn:'trộm cắp tài sản'},
     {zh:'盗窃密码',py:'dàoqiè mìmǎ',vn:'đánh cắp mật khẩu'},
     {zh:'盗窃案',py:'dàoqiè\'àn',vn:'vụ trộm'},
     {zh:'盗窃个人信息',py:'dàoqiè gèrén xìnxī',vn:'đánh cắp thông tin cá nhân'},
     {zh:'盗窃商业机密',py:'dàoqiè shāngyè jīmì',vn:'đánh cắp bí mật kinh doanh'}
   ],
   patterns:[
     {s:'盗窃 + ……的 + 信息 / 财物',m:'đánh cắp … của …'},
     {s:'发生了一起盗窃案',m:'xảy ra một vụ trộm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta vì trộm cắp tài sản của người khác mà bị cảnh sát bắt.',answer:'他因为盗窃别人的财物被警察抓了。',answerPy:'Tā yīnwèi dàoqiè biérén de cáiwù bèi jǐngchá zhuā le.',
      note:'因为……被…….',pair:'因为……'},
     {promptLang:'vi',prompt:'Để đề phòng thông tin cá nhân bị đánh cắp, đừng tuỳ tiện bấm vào đường link lạ.',answer:'为了防止个人信息被盗窃，不要随便点击陌生的链接。',answerPy:'Wèile fángzhǐ gèrén xìnxī bèi dàoqiè, búyào suíbiàn diǎnjī mòshēng de liànjiē.',
      note:'为了防止……被…… (để đề phòng … bị …).',pair:'为了……'}
   ]},

  {n:41,zh:'公然',py:'gōngrán',pos:'Phó từ',vn:'ngang nhiên, công khai',hv:'công nhiên',em:'😠',lesson:1,
   explain:['Phó từ: công khai, trắng trợn, không kiêng nể gì — chỉ dùng cho việc XẤU, sai trái: 公然违反规定, 公然撒谎. Mang nghĩa chê.','Tiếng Việt "công nhiên" cũng mang sắc thái này. Khác 公开 (công khai — trung tính: 公开信, 公开道歉).'],
   usage:'公然 + 违反 / 撒谎 / 冒充 / 挑衅 / 作弊…….',
   collo:['公然冒充','公然违反规定','公然撒谎','公然作弊'],
   ex_zh:'公然冒充国家部门',ex_py:'gōngrán màochōng guójiā bùmén',ex_vn:'Ngang nhiên giả mạo cơ quan nhà nước',
   exList:[
     {zh:'仅有两三个人的皮包公司公然冒充国家部门开设了一家假网站。',py:'Jǐn yǒu liǎng-sān ge rén de píbāo gōngsī gōngrán màochōng guójiā bùmén kāishèle yì jiā jiǎ wǎngzhàn.',vn:'Một công ty "ma" chỉ có hai, ba người đã ngang nhiên giả mạo cơ quan nhà nước lập một trang web giả.'},
     {zh:'他竟然在考场上公然作弊，被老师当场抓住了。',py:'Tā jìngrán zài kǎochǎng shang gōngrán zuòbì, bèi lǎoshī dāngchǎng zhuāzhù le.',vn:'Cậu ta dám ngang nhiên gian lận trong phòng thi, bị thầy bắt quả tang tại chỗ.'},
     {zh:'这家工厂公然违反环保规定，把污水直接排进河里。',py:'Zhè jiā gōngchǎng gōngrán wéifǎn huánbǎo guīdìng, bǎ wūshuǐ zhíjiē pái jìn hé li.',vn:'Nhà máy này ngang nhiên vi phạm quy định bảo vệ môi trường, xả thẳng nước thải xuống sông.'}
   ],
   colloFull:[
     {zh:'公然冒充',py:'gōngrán màochōng',vn:'ngang nhiên giả mạo'},
     {zh:'公然违反规定',py:'gōngrán wéifǎn guīdìng',vn:'ngang nhiên vi phạm quy định'},
     {zh:'公然撒谎',py:'gōngrán sāhuǎng',vn:'ngang nhiên nói dối'},
     {zh:'公然作弊',py:'gōngrán zuòbì',vn:'ngang nhiên gian lận'},
     {zh:'公然挑衅',py:'gōngrán tiǎoxìn',vn:'ngang nhiên khiêu khích'}
   ],
   patterns:[
     {s:'公然 + V (việc xấu)',m:'ngang nhiên làm …'},
     {s:'竟然公然……',m:'lại dám ngang nhiên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hắn ngang nhiên nói dối ngay trước mặt mọi người, khiến ai cũng rất tức giận.',answer:'他当着大家的面公然撒谎，让每个人都很生气。',answerPy:'Tā dāngzhe dàjiā de miàn gōngrán sāhuǎng, ràng měi ge rén dōu hěn shēngqì.',
      note:'当着……的面 = ngay trước mặt …; 撒谎 — bài 27.',pair:'当着……的面'},
     {promptLang:'vi',prompt:'Có người ngang nhiên vượt đèn đỏ, cảnh sát lập tức chặn anh ta lại.',answer:'有人公然闯红灯，警察马上把他拦了下来。',answerPy:'Yǒu rén gōngrán chuǎng hóngdēng, jǐngchá mǎshàng bǎ tā lánle xiàlai.',
      note:'Câu 把 + V + bổ ngữ xu hướng 下来.',pair:'把……V下来'}
   ]},

  {n:42,zh:'冒充',py:'màochōng',pos:'Động từ',vn:'giả mạo, đội lốt',hv:'mạo sung',em:'🎭',lesson:1,
   explain:['Động từ: lấy cái giả thay cái thật, giả làm người khác / vật khác để lừa: 冒充警察, 冒充名牌, 以假冒充真.','Mang nghĩa xấu. Cấu trúc: A 冒充 B (A giả làm B); 用 A 冒充 B. Gần 假冒 (thường làm định ngữ: 假冒产品). Khác 扮演 (đóng vai — trong kịch, phim).'],
   usage:'冒充 + thân phận (警察 / 医生 / 客服 / 国家部门); 用 A 冒充 B; 被人冒充.',
   collo:['冒充警察','冒充国家部门','冒充名牌','冒充客服'],
   ex_zh:'冒充国家部门',ex_py:'màochōng guójiā bùmén',ex_vn:'Giả mạo cơ quan nhà nước',
   exList:[
     {zh:'皮包公司公然冒充国家部门开设了一家假网站，大肆进行诈骗。',py:'Píbāo gōngsī gōngrán màochōng guójiā bùmén kāishèle yì jiā jiǎ wǎngzhàn, dàsì jìnxíng zhàpiàn.',vn:'Công ty "ma" ngang nhiên giả mạo cơ quan nhà nước lập một trang web giả, trắng trợn lừa đảo.'},
     {zh:'有人冒充快递员给我打电话，想骗我的银行卡密码。',py:'Yǒu rén màochōng kuàidìyuán gěi wǒ dǎ diànhuà, xiǎng piàn wǒ de yínhángkǎ mìmǎ.',vn:'Có người giả làm nhân viên giao hàng gọi điện cho tôi, định lừa lấy mật khẩu thẻ ngân hàng.'},
     {zh:'这些商品是用便宜货冒充名牌的，千万别买。',py:'Zhèxiē shāngpǐn shì yòng piányi huò màochōng míngpái de, qiānwàn bié mǎi.',vn:'Những món hàng này là lấy hàng rẻ tiền giả làm hàng hiệu, tuyệt đối đừng mua.'}
   ],
   colloFull:[
     {zh:'冒充警察',py:'màochōng jǐngchá',vn:'giả danh cảnh sát'},
     {zh:'冒充国家部门',py:'màochōng guójiā bùmén',vn:'giả mạo cơ quan nhà nước'},
     {zh:'冒充名牌',py:'màochōng míngpái',vn:'giả làm hàng hiệu'},
     {zh:'冒充客服',py:'màochōng kèfú',vn:'giả danh nhân viên chăm sóc khách hàng'},
     {zh:'以假冒充真',py:'yǐ jiǎ màochōng zhēn',vn:'lấy giả làm thật'}
   ],
   patterns:[
     {s:'A 冒充 B',m:'A giả làm B'},
     {s:'用 A 冒充 B',m:'lấy A giả làm B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gần đây có kẻ giả danh nhân viên ngân hàng gọi điện lừa đảo, mọi người phải cẩn thận.',answer:'最近有人冒充银行职员打电话诈骗，大家要小心。',answerPy:'Zuìjìn yǒu rén màochōng yínháng zhíyuán dǎ diànhuà zhàpiàn, dàjiā yào xiǎoxīn.',
      note:'有人 + V (câu có chủ ngữ phiếm chỉ).',pair:'有人……'},
     {promptLang:'vi',prompt:'Hắn giả làm bác sĩ, vậy mà lừa được rất nhiều người.',answer:'他冒充医生，居然骗了很多人。',answerPy:'Tā màochōng yīshēng, jūrán piànle hěn duō rén.',
      note:'居然 = vậy mà (ôn HSK 5).',pair:'居然……'}
   ]},

  {n:43,zh:'大肆',py:'dàsì',pos:'Phó từ',vn:'trắng trợn, không kiêng nể',hv:'đại tứ',em:'💥',lesson:1,
   explain:['Phó từ: làm việc xấu một cách tuỳ tiện, không kiêng nể gì, quy mô lớn: 大肆诈骗, 大肆破坏, 大肆宣扬. Mang nghĩa chê, văn viết.','Chỉ đứng trước động từ (thường 2 âm tiết) chỉ hành vi xấu. 肆 = phóng túng, tuỳ tiện (như 肆无忌惮 — bài 29).'],
   usage:'大肆 + 进行 / 诈骗 / 破坏 / 捕杀 / 宣扬 / 挥霍…….',
   collo:['大肆进行诈骗','大肆捕杀','大肆破坏','大肆宣扬'],
   ex_zh:'大肆捕杀野生动物',ex_py:'dàsì bǔshā yěshēng dòngwù',ex_vn:'Trắng trợn săn giết động vật hoang dã',
   exList:[
     {zh:'皮包公司开设了一家假网站，大肆进行诈骗。',py:'Píbāo gōngsī kāishèle yì jiā jiǎ wǎngzhàn, dàsì jìnxíng zhàpiàn.',vn:'Công ty "ma" lập ra một trang web giả, trắng trợn lừa đảo.'},
     {zh:'他们这伙人大肆捕杀野生动物，引起了公愤。',py:'Tāmen zhè huǒ rén dàsì bǔshā yěshēng dòngwù, yǐnqǐle gōngfèn.',vn:'Bọn người này trắng trợn săn giết động vật hoang dã, gây nên sự phẫn nộ của mọi người.'},
     {zh:'他中了彩票以后大肆挥霍，不到一年就把钱花光了。',py:'Tā zhòngle cǎipiào yǐhòu dàsì huīhuò, bú dào yì nián jiù bǎ qián huāguāng le.',vn:'Trúng xổ số xong anh ta vung tay tiêu xài hoang phí, chưa đầy một năm đã tiêu sạch tiền.'}
   ],
   colloFull:[
     {zh:'大肆进行诈骗',py:'dàsì jìnxíng zhàpiàn',vn:'trắng trợn lừa đảo'},
     {zh:'大肆捕杀',py:'dàsì bǔshā',vn:'săn giết tràn lan'},
     {zh:'大肆破坏',py:'dàsì pòhuài',vn:'phá hoại trắng trợn'},
     {zh:'大肆宣扬',py:'dàsì xuānyáng',vn:'rêu rao rầm rộ'},
     {zh:'大肆挥霍',py:'dàsì huīhuò',vn:'tiêu xài hoang phí'}
   ],
   patterns:[
     {s:'大肆 + V (hành vi xấu)',m:'trắng trợn / rầm rộ làm …'},
     {s:'……大肆……，引起了公愤',m:'… trắng trợn …, gây phẫn nộ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người trắng trợn tung tin đồn trên mạng, gây ảnh hưởng rất xấu.',answer:'有人在网上大肆散布谣言，造成了很坏的影响。',answerPy:'Yǒu rén zài wǎngshàng dàsì sànbù yáoyán, zàochéngle hěn huài de yǐngxiǎng.',
      note:'造成 + ảnh hưởng / tổn thất (ôn HSK 5).',pair:'造成……'},
     {promptLang:'vi',prompt:'Vì bị chặt phá bừa bãi, rừng ở đây ngày càng ít.',answer:'由于被大肆砍伐，这里的森林越来越少了。',answerPy:'Yóuyú bèi dàsì kǎnfá, zhèlǐ de sēnlín yuè lái yuè shǎo le.',
      note:'砍伐 — bài 28; 由于…….',pair:'由于……'}
   ]},

  {n:44,zh:'诈骗',py:'zhàpiàn',pos:'Động từ',vn:'lừa dối, lừa gạt, lừa đảo',hv:'trá biển',em:'⚠️',lesson:1,
   explain:['Động từ: dùng thủ đoạn gian dối để chiếm đoạt tài sản: 诈骗钱财, 电信诈骗 (lừa đảo qua điện thoại), 网络诈骗. Thuật ngữ pháp luật, văn viết; khẩu ngữ dùng 骗.','Hay đi với 进行诈骗, 诈骗案, 诈骗犯, 诈骗罪; 防止 / 防范 + 诈骗.'],
   usage:'进行诈骗; 诈骗 + 钱财; 电信 / 网络 + 诈骗; 诈骗案 / 诈骗犯; 防范诈骗.',
   collo:['进行诈骗','网络诈骗','电信诈骗','诈骗钱财'],
   ex_zh:'大肆进行诈骗',ex_py:'dàsì jìnxíng zhàpiàn',ex_vn:'Trắng trợn lừa đảo',
   exList:[
     {zh:'皮包公司大肆进行诈骗，如今已被警方依法刑事拘留。',py:'Píbāo gōngsī dàsì jìnxíng zhàpiàn, rújīn yǐ bèi jǐngfāng yīfǎ xíngshì jūliú.',vn:'Công ty "ma" trắng trợn lừa đảo, nay đã bị cảnh sát tạm giữ hình sự theo pháp luật.'},
     {zh:'老年人最容易成为电信诈骗的对象。',py:'Lǎoniánrén zuì róngyì chéngwéi diànxìn zhàpiàn de duìxiàng.',vn:'Người cao tuổi dễ trở thành đối tượng của lừa đảo qua điện thoại nhất.'},
     {zh:'学校专门请来警察，给学生讲怎样防范网络诈骗。',py:'Xuéxiào zhuānmén qǐnglái jǐngchá, gěi xuésheng jiǎng zěnyàng fángfàn wǎngluò zhàpiàn.',vn:'Nhà trường đặc biệt mời cảnh sát đến nói cho học sinh cách phòng tránh lừa đảo qua mạng.'}
   ],
   colloFull:[
     {zh:'进行诈骗',py:'jìnxíng zhàpiàn',vn:'tiến hành lừa đảo'},
     {zh:'网络诈骗',py:'wǎngluò zhàpiàn',vn:'lừa đảo qua mạng'},
     {zh:'电信诈骗',py:'diànxìn zhàpiàn',vn:'lừa đảo qua điện thoại'},
     {zh:'诈骗钱财',py:'zhàpiàn qiáncái',vn:'lừa đảo chiếm đoạt tiền của'},
     {zh:'诈骗案',py:'zhàpiàn\'àn',vn:'vụ lừa đảo'}
   ],
   patterns:[
     {s:'防范 + ……诈骗',m:'phòng tránh lừa đảo …'},
     {s:'成为……诈骗的对象',m:'trở thành đối tượng của lừa đảo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có người lạ đòi mã xác nhận của bạn thì rất có thể là lừa đảo.',answer:'只要有陌生人向你要验证码，就很可能是诈骗。',answerPy:'Zhǐyào yǒu mòshēngrén xiàng nǐ yào yànzhèngmǎ, jiù hěn kěnéng shì zhàpiàn.',
      note:'只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Kẻ lừa đảo này đã lừa được hơn một triệu tệ, cuối cùng bị toà án tuyên mười năm tù.',answer:'这个诈骗犯骗了一百多万元，最后被法院判了十年。',answerPy:'Zhège zhàpiànfàn piànle yìbǎi duō wàn yuán, zuìhòu bèi fǎyuàn pànle shí nián.',
      note:'被 + cơ quan + V; 一百多万 = hơn một triệu.',pair:'被……'}
   ]},

  {n:45,zh:'拘留',py:'jūliú',pos:'Động từ',vn:'giam cầm, tạm giam',hv:'câu lưu',em:'🔒',lesson:1,
   explain:['Động từ: (công an) tạm giữ, tạm giam người vi phạm pháp luật trong thời gian ngắn: 刑事拘留 (tạm giữ hình sự), 行政拘留 (tạm giữ hành chính), 被拘留十五天.','Thường ở câu bị động: 被警方拘留. Tiếng Việt "câu lưu" cũng dùng (câu lưu tàu, câu lưu người).'],
   usage:'被 (警方) + 拘留; 刑事 / 行政 + 拘留; 拘留 + thời gian.',
   collo:['刑事拘留','被警方拘留','行政拘留','拘留十五天'],
   ex_zh:'依法刑事拘留',ex_py:'yīfǎ xíngshì jūliú',ex_vn:'Tạm giữ hình sự theo pháp luật',
   exList:[
     {zh:'那家皮包公司的人如今已被警方依法刑事拘留。',py:'Nà jiā píbāo gōngsī de rén rújīn yǐ bèi jǐngfāng yīfǎ xíngshì jūliú.',vn:'Người của công ty "ma" đó nay đã bị cảnh sát tạm giữ hình sự theo pháp luật.'},
     {zh:'他因为酒后开车，被拘留了十五天。',py:'Tā yīnwèi jiǔ hòu kāichē, bèi jūliúle shíwǔ tiān.',vn:'Anh ta vì lái xe sau khi uống rượu mà bị tạm giữ mười lăm ngày.'},
     {zh:'在网上造谣的那个人已经被警察拘留了。',py:'Zài wǎngshàng zàoyáo de nàge rén yǐjīng bèi jǐngchá jūliú le.',vn:'Người tung tin đồn nhảm trên mạng đã bị cảnh sát tạm giữ.'}
   ],
   colloFull:[
     {zh:'刑事拘留',py:'xíngshì jūliú',vn:'tạm giữ hình sự'},
     {zh:'被警方拘留',py:'bèi jǐngfāng jūliú',vn:'bị cảnh sát tạm giữ'},
     {zh:'行政拘留',py:'xíngzhèng jūliú',vn:'tạm giữ hành chính'},
     {zh:'拘留十五天',py:'jūliú shíwǔ tiān',vn:'tạm giữ mười lăm ngày'},
     {zh:'依法拘留',py:'yīfǎ jūliú',vn:'tạm giữ theo pháp luật'}
   ],
   patterns:[
     {s:'被警方依法拘留',m:'bị cảnh sát tạm giữ theo pháp luật'},
     {s:'因为……被拘留',m:'vì … mà bị tạm giữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta vì đánh nhau mà bị tạm giữ mười ngày, bây giờ hối hận vô cùng.',answer:'他因为打架被拘留了十天，现在后悔极了。',answerPy:'Tā yīnwèi dǎjià bèi jūliúle shí tiān, xiànzài hòuhuǐ jí le.',
      note:'因为……被……; Adj + 极了.',pair:'因为……'},
     {promptLang:'vi',prompt:'Một khi phát hiện hành vi lừa đảo, cảnh sát sẽ lập tức tạm giữ nghi phạm.',answer:'一旦发现诈骗行为，警方就会马上拘留嫌疑人。',answerPy:'Yídàn fāxiàn zhàpiàn xíngwéi, jǐngfāng jiù huì mǎshàng jūliú xiányírén.',
      note:'一旦……就…….',pair:'一旦……就……'}
   ]},

  {n:46,zh:'败坏',py:'bàihuài',pos:'Động từ',vn:'làm tổn hại, gây thiệt hại, làm mất',hv:'bại hoại',em:'🥀',lesson:1,
   explain:['Động từ: làm tổn hại, làm hỏng (thứ trừu tượng: danh dự, phong khí, đạo đức): 败坏名誉, 败坏风气, 败坏声誉. Nghĩa rất nặng.','Tính từ: (đạo đức) suy đồi — 道德败坏. Không dùng cho đồ vật cụ thể (đồ hỏng dùng 损坏 — bài 29).'],
   usage:'败坏 + 名誉 / 声誉 / 风气 / 名声; 道德败坏.',
   collo:['败坏名誉','败坏风气','道德败坏','败坏声誉'],
   ex_zh:'败坏互联网名誉',ex_py:'bàihuài hùliánwǎng míngyù',ex_vn:'Làm tổn hại danh tiếng của Internet',
   exList:[
     {zh:'每次类似这些败坏互联网名誉的事件一经曝光，就会使我们有触目惊心之感。',py:'Měi cì lèisì zhèxiē bàihuài hùliánwǎng míngyù de shìjiàn yì jīng bàoguāng, jiù huì shǐ wǒmen yǒu chùmù-jīngxīn zhī gǎn.',vn:'Mỗi lần những sự việc làm hoen ố danh tiếng Internet như thế này bị phơi bày, chúng ta lại có cảm giác giật mình kinh hãi.'},
     {zh:'个别商家卖假货，败坏了整个行业的声誉。',py:'Gèbié shāngjiā mài jiǎhuò, bàihuàile zhěnggè hángyè de shēngyù.',vn:'Một vài nhà buôn bán hàng giả đã làm mất uy tín của cả ngành.'},
     {zh:'考试作弊会败坏学校的风气。',py:'Kǎoshì zuòbì huì bàihuài xuéxiào de fēngqì.',vn:'Gian lận thi cử sẽ làm hư hỏng nề nếp của nhà trường.'}
   ],
   colloFull:[
     {zh:'败坏名誉',py:'bàihuài míngyù',vn:'làm tổn hại danh dự'},
     {zh:'败坏风气',py:'bàihuài fēngqì',vn:'làm hỏng nề nếp, phong khí'},
     {zh:'道德败坏',py:'dàodé bàihuài',vn:'đạo đức suy đồi'},
     {zh:'败坏声誉',py:'bàihuài shēngyù',vn:'làm mất uy tín'},
     {zh:'败坏名声',py:'bàihuài míngshēng',vn:'làm mất tiếng'}
   ],
   patterns:[
     {s:'败坏 + ……的 + 名誉 / 声誉',m:'làm tổn hại danh dự / uy tín của …'},
     {s:'道德败坏',m:'đạo đức suy đồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một vài bạn làm sai đã làm mất danh dự của cả lớp.',answer:'个别同学做错了事，败坏了整个班的名誉。',answerPy:'Gèbié tóngxué zuòcuòle shì, bàihuàile zhěnggè bān de míngyù.',
      note:'个别 = cá biệt, một vài (HSK 5).',pair:'个别……'},
     {promptLang:'vi',prompt:'Những tin đồn này không những sai sự thật, mà còn làm tổn hại danh dự của anh ấy.',answer:'这些谣言不但不是事实，而且败坏了他的名誉。',answerPy:'Zhèxiē yáoyán búdàn bú shì shìshí, érqiě bàihuàile tā de míngyù.',
      note:'不但……而且…….',pair:'不但……而且……'}
   ]},

  {n:47,zh:'名誉',py:'míngyù',pos:'Danh từ',vn:'danh dự, danh tiếng',hv:'danh dự',em:'🏅',lesson:1,
   explain:['Danh từ: danh dự, tiếng tốt của cá nhân hay tập thể: 个人名誉, 损害名誉, 恢复名誉.','Còn làm định ngữ nghĩa "danh dự" (không nắm thực quyền, để tôn vinh): 名誉校长, 名誉主席, 名誉博士.'],
   usage:'损害 / 败坏 / 维护 / 恢复 + 名誉; 名誉 + 校长 / 主席 / 博士.',
   collo:['维护名誉','损害名誉','个人名誉','名誉校长'],
   ex_zh:'维护自己的名誉',ex_py:'wéihù zìjǐ de míngyù',ex_vn:'Bảo vệ danh dự của mình',
   exList:[
     {zh:'这些败坏互联网名誉的事件使我们有触目惊心之感。',py:'Zhèxiē bàihuài hùliánwǎng míngyù de shìjiàn shǐ wǒmen yǒu chùmù-jīngxīn zhī gǎn.',vn:'Những sự việc làm hoen ố danh tiếng Internet này khiến chúng ta giật mình kinh hãi.'},
     {zh:'为了维护自己的名誉，他把造谣的人告上了法庭。',py:'Wèile wéihù zìjǐ de míngyù, tā bǎ zàoyáo de rén gào shàngle fǎtíng.',vn:'Để bảo vệ danh dự của mình, anh ấy đã kiện kẻ tung tin đồn nhảm ra toà.'},
     {zh:'这位著名科学家被聘为我们学校的名誉校长。',py:'Zhè wèi zhùmíng kēxuéjiā bèi pìn wéi wǒmen xuéxiào de míngyù xiàozhǎng.',vn:'Nhà khoa học nổi tiếng này được mời làm hiệu trưởng danh dự của trường chúng tôi.'}
   ],
   colloFull:[
     {zh:'维护名誉',py:'wéihù míngyù',vn:'bảo vệ danh dự'},
     {zh:'损害名誉',py:'sǔnhài míngyù',vn:'làm tổn hại danh dự'},
     {zh:'个人名誉',py:'gèrén míngyù',vn:'danh dự cá nhân'},
     {zh:'名誉校长',py:'míngyù xiàozhǎng',vn:'hiệu trưởng danh dự'},
     {zh:'恢复名誉',py:'huīfù míngyù',vn:'khôi phục danh dự'}
   ],
   patterns:[
     {s:'维护 / 损害 + ……的名誉',m:'bảo vệ / làm tổn hại danh dự của …'},
     {s:'被聘为名誉 + chức vụ',m:'được mời làm … danh dự'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với anh ấy, danh dự quan trọng hơn tiền bạc.',answer:'对他来说，名誉比金钱更重要。',answerPy:'Duì tā lái shuō, míngyù bǐ jīnqián gèng zhòngyào.',
      note:'对……来说; A 比 B 更…….',pair:'对……来说'},
     {promptLang:'vi',prompt:'Nói xấu người khác trên mạng là làm tổn hại danh dự người khác, có thể phải chịu trách nhiệm pháp lý.',answer:'在网上说别人坏话是损害别人名誉，可能要承担法律责任。',answerPy:'Zài wǎngshàng shuō biérén huàihuà shì sǔnhài biérén míngyù, kěnéng yào chéngdān fǎlǜ zérèn.',
      note:'承担责任 = chịu trách nhiệm (HSK 5).',pair:'承担……'}
   ]},

  {n:48,zh:'曝光',py:'bào guāng',pos:'Động từ',vn:'bóc trần, vạch trần, phơi bày ra',hv:'bộc quang',em:'📸',lesson:1,
   explain:['Động từ li hợp: ① (nhiếp ảnh) phơi sáng, lộ sáng: 胶卷曝光了. ② (thường dùng) việc bí mật, xấu xa bị đưa ra ánh sáng, bị phơi bày trước công chúng: 丑闻曝光, 被媒体曝光.','Chú ý 曝 đọc bào (không đọc pù như trong 一曝十寒). Hay dùng ở câu bị động (被曝光) và trong khung văn viết 一经曝光，就…….'],
   usage:'被 (媒体 / 记者) + 曝光; 事件 / 丑闻 + 曝光; 一经曝光，就……; 曝光率.',
   collo:['被曝光','一经曝光','被媒体曝光','丑闻曝光'],
   ex_zh:'一经曝光',ex_py:'yì jīng bàoguāng',ex_vn:'Một khi bị phơi bày',
   exList:[
     {zh:'类似这些事件一经曝光，就会使我们有触目惊心之感。',py:'Lèisì zhèxiē shìjiàn yì jīng bàoguāng, jiù huì shǐ wǒmen yǒu chùmù-jīngxīn zhī gǎn.',vn:'Những sự việc như thế này một khi bị phơi bày, chúng ta lại có cảm giác giật mình kinh hãi.'},
     {zh:'这家餐厅使用过期食品的事被记者曝光以后，再也没有人去吃了。',py:'Zhè jiā cāntīng shǐyòng guòqī shípǐn de shì bèi jìzhě bàoguāng yǐhòu, zài yě méiyǒu rén qù chī le.',vn:'Sau khi chuyện nhà hàng này dùng thực phẩm hết hạn bị phóng viên phanh phui, không còn ai đến ăn nữa.'},
     {zh:'这个明星的私人信息在网上被曝光了，让他非常苦恼。',py:'Zhège míngxīng de sīrén xìnxī zài wǎngshàng bèi bàoguāng le, ràng tā fēicháng kǔnǎo.',vn:'Thông tin cá nhân của ngôi sao này bị phơi bày trên mạng, khiến anh ấy vô cùng phiền não.'}
   ],
   colloFull:[
     {zh:'被曝光',py:'bèi bàoguāng',vn:'bị phơi bày'},
     {zh:'一经曝光',py:'yì jīng bàoguāng',vn:'một khi bị phơi bày'},
     {zh:'被媒体曝光',py:'bèi méitǐ bàoguāng',vn:'bị báo chí phanh phui'},
     {zh:'丑闻曝光',py:'chǒuwén bàoguāng',vn:'bê bối bị phanh phui'},
     {zh:'曝光率',py:'bàoguānglǜ',vn:'mức độ xuất hiện (trên truyền thông)'}
   ],
   patterns:[
     {s:'……被媒体曝光',m:'… bị báo chí phanh phui'},
     {s:'……一经曝光，就……',m:'… một khi bị phơi bày thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vụ bê bối này một khi bị phanh phui, danh tiếng của công ty sẽ bị ảnh hưởng nghiêm trọng.',answer:'这件丑闻一经曝光，公司的名誉就会受到严重影响。',answerPy:'Zhè jiàn chǒuwén yì jīng bàoguāng, gōngsī de míngyù jiù huì shòudào yánzhòng yǐngxiǎng.',
      note:'一经……就…… (văn viết, như câu bài khoá).',pair:'一经……就……'},
     {promptLang:'vi',prompt:'Sau khi chuyện lừa đảo bị báo chí vạch trần, nhiều người mới biết mình đã mắc lừa.',answer:'诈骗的事被媒体曝光以后，很多人才知道自己上当了。',answerPy:'Zhàpiàn de shì bèi méitǐ bàoguāng yǐhòu, hěn duō rén cái zhīdào zìjǐ shàngdàng le.',
      note:'……以后才…… (sau khi … mới …).',pair:'……以后才……'}
   ]}
];


// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 互联网时代的生活',
   preQuiz:[
     {q:'课文说，互联网让我们感受到生活发生着怎样的变化？',opts:['日新月异的变化','很慢的变化','不好的变化'],ans:0},
     {q:'课文说在网上学习怎么样？',opts:['很无聊，没意思','自由而不失乐趣','简单又高效'],ans:1},
     {q:'设立个人网站有什么好处？',opts:['能赚很多钱','能找到好工作','既能扩大朋友圈，又能满足虚荣心'],ans:2},
     {q:'众筹购房的好处在于什么？',opts:['价格上有明显优势','房子特别大','离市中心很近'],ans:0},
     {q:'申请人要进入购房微信群，需要做什么？',opts:['先交全部房款','通过审查后缴纳100元订金','去找发起人面谈'],ans:1},
     {q:'众筹的参与者有什么特点？',opts:['都是发起人的亲戚','大多是没有工作的年轻人','层次较高，基本属于同一阶层'],ans:2},
     {q:'用发起人的话说，众筹是在做什么？',opts:['凝聚人心','赚大钱','盖房子'],ans:0},
     {q:'广义的“众筹”指什么？',opts:['大家一起集资建房','创业者通过网络向众多素不相识的人争取资金支持','银行给创业者贷款'],ans:1},
     {q:'世界上第一个让初创公司梦想成真的众筹网站是哪个？',opts:['点名时间','淘宝网','美国的Kickstarter'],ans:2},
     {q:'花多少钱就可以成为美微的股东？',opts:['120元','1.2元','100元'],ans:0},
     {q:'国内用户和Kickstarter上的用户有什么不同？',opts:['国内用户购买时更感性','国内用户希望尽快得到回报','国内用户对产品质量要求不高'],ans:1},
     {q:'课文最后说，我们对互联网是什么态度？',opts:['只有喜爱','完全不信任','爱不释手，也心存担忧'],ans:2}
   ],
   lines:[
    {sp:0,zh:'互联网走进我们的生活没有多久，却让我们实实在在地感受到生活正发生着日新月异的变化：它能让我们自如地通话、视频、传递消息，哪怕你在天涯海角；它使我们的生活不再单调沉闷，每一天都变得浪漫、丰富和充实；它将异地购物、交易变为了可能——我们足不出户就能任意挑选欧洲、美洲的商品；我们可以在网上学习，自由而不失乐趣；我们可以在网上找工作，简单又高效；我们能设立个人网站，既能扩大你的朋友圈，又能让你小小的虚荣心得到满足，如果愿意，还可以设立你亲友的网站，作为赠送给他们的珍贵礼物。最近又有人通过网络，和朋友、朋友的朋友合伙筹备资金买房，人们视这一创举为互联网金融下的新成员。',
     py:'Hùliánwǎng zǒujìn wǒmen de shēnghuó méiyǒu duō jiǔ, què ràng wǒmen shíshízàizài de gǎnshòu dào shēnghuó zhèng fāshēngzhe rìxīn-yuèyì de biànhuà: tā néng ràng wǒmen zìrú de tōnghuà, shìpín, chuándì xiāoxi, nǎpà nǐ zài tiānyá-hǎijiǎo; tā shǐ wǒmen de shēnghuó bú zài dāndiào chénmèn, měi yì tiān dōu biàn de làngmàn, fēngfù hé chōngshí; tā jiāng yìdì gòuwù, jiāoyì biànwéile kěnéng — wǒmen zú bù chū hù jiù néng rènyì tiāoxuǎn Ōuzhōu, Měizhōu de shāngpǐn; wǒmen kěyǐ zài wǎngshàng xuéxí, zìyóu ér bù shī lèqù; wǒmen kěyǐ zài wǎngshàng zhǎo gōngzuò, jiǎndān yòu gāoxiào; wǒmen néng shèlì gèrén wǎngzhàn, jì néng kuòdà nǐ de péngyouquān, yòu néng ràng nǐ xiǎoxiǎo de xūróngxīn dédào mǎnzú, rúguǒ yuànyì, hái kěyǐ shèlì nǐ qīnyǒu de wǎngzhàn, zuòwéi zèngsòng gěi tāmen de zhēnguì lǐwù. Zuìjìn yòu yǒu rén tōngguò wǎngluò, hé péngyou, péngyou de péngyou héhuǒ chóubèi zījīn mǎi fáng, rénmen shì zhè yī chuàngjǔ wéi hùliánwǎng jīnróng xià de xīn chéngyuán.',
     vn:'Internet bước vào cuộc sống của chúng ta chưa được bao lâu, nhưng đã khiến chúng ta cảm nhận một cách thiết thực rằng cuộc sống đang đổi thay từng ngày: nó cho phép chúng ta thoải mái gọi điện, gọi video, gửi tin nhắn, dù bạn ở tận chân trời góc bể; nó khiến cuộc sống của chúng ta không còn đơn điệu buồn tẻ, mỗi ngày đều trở nên lãng mạn, phong phú và đủ đầy; nó biến việc mua sắm, giao dịch ở nơi xa thành điều có thể — không cần bước chân ra khỏi nhà, chúng ta vẫn tha hồ chọn lựa hàng hoá của châu Âu, châu Mỹ; chúng ta có thể học trên mạng, tự do mà vẫn không mất đi niềm vui; chúng ta có thể tìm việc trên mạng, đơn giản lại hiệu quả; chúng ta có thể lập trang web cá nhân, vừa mở rộng vòng bạn bè của bạn, vừa thoả mãn chút hư vinh nho nhỏ của bạn; nếu muốn, bạn còn có thể lập trang web cho người thân, bạn bè, làm món quà quý giá tặng họ. Gần đây lại có người thông qua mạng, cùng bạn bè và bạn của bạn bè hùn vốn gom tiền mua nhà; người ta coi sáng kiến này là một thành viên mới của tài chính Internet.'},
    {sp:0,zh:'据集资买房项目发起人介绍，此次众筹买房，初步打算召集200人，筹备建立众筹家园小区。众筹购房的好处在于价格上拥有明显优势，比市场价至少便宜30%，无论是投资还是自住，都很合算。项目沟通中，微信是主要渠道，申请人递交申请表、通过审查后，缴纳100元订金就可以进入购房微信群，项目的设计、户型、价格等，全部由大家商议决定。',
     py:'Jù jízī mǎi fáng xiàngmù fāqǐrén jièshào, cǐ cì zhòngchóu mǎi fáng, chūbù dǎsuan zhàojí èrbǎi rén, chóubèi jiànlì zhòngchóu jiāyuán xiǎoqū. Zhòngchóu gòufáng de hǎochù zàiyú jiàgé shang yōngyǒu míngxiǎn yōushì, bǐ shìchǎngjià zhìshǎo piányi bǎi fēn zhī sānshí, wúlùn shì tóuzī háishi zìzhù, dōu hěn hésuàn. Xiàngmù gōutōng zhōng, Wēixìn shì zhǔyào qúdào, shēnqǐngrén dìjiāo shēnqǐngbiǎo, tōngguò shěnchá hòu, jiǎonà yìbǎi yuán dìngjīn jiù kěyǐ jìnrù gòufáng Wēixìn qún, xiàngmù de shèjì, hùxíng, jiàgé děng, quánbù yóu dàjiā shāngyì juédìng.',
     vn:'Theo lời người khởi xướng dự án góp vốn mua nhà, lần gọi vốn cộng đồng mua nhà này, dự tính ban đầu sẽ tập hợp 200 người, chuẩn bị xây dựng khu dân cư "Ngôi nhà gọi vốn cộng đồng". Cái lợi của việc gọi vốn cộng đồng mua nhà nằm ở ưu thế rõ rệt về giá, rẻ hơn giá thị trường ít nhất 30%, dù để đầu tư hay để ở đều rất có lợi. Trong quá trình trao đổi về dự án, WeChat là kênh chủ yếu: người đăng ký nộp đơn, sau khi được xét duyệt, nộp 100 tệ tiền đặt cọc là có thể vào nhóm WeChat mua nhà; thiết kế, kiểu căn hộ, giá cả… của dự án đều do mọi người bàn bạc quyết định.'},
    {sp:0,zh:'大家深知买房对每个家庭都不是小事，众筹买房也还处于摸索阶段，因此必须慎重。众筹的参与者，都是发起人的朋友，或者朋友的朋友。他们层次较高，都有一定的经济基础，对新生事物有强烈好奇心，基本属于同一阶层。用发起人的话说，众筹不是在筹房子，而是在凝聚人心。房子怎么设计、对国家的政策怎么理解、失败了怎么办？大家每天在微信群你来我往，忙碌而欢乐，除了严肃的房价，这种共商大事的感觉也很让人上瘾。',
     py:'Dàjiā shēnzhī mǎi fáng duì měi ge jiātíng dōu bú shì xiǎoshì, zhòngchóu mǎi fáng yě hái chǔyú mōsuǒ jiēduàn, yīncǐ bìxū shènzhòng. Zhòngchóu de cānyùzhě, dōu shì fāqǐrén de péngyou, huòzhě péngyou de péngyou. Tāmen céngcì jiào gāo, dōu yǒu yídìng de jīngjì jīchǔ, duì xīnshēng shìwù yǒu qiángliè hàoqíxīn, jīběn shǔyú tóngyī jiēcéng. Yòng fāqǐrén de huà shuō, zhòngchóu bú shì zài chóu fángzi, ér shì zài níngjù rénxīn. Fángzi zěnme shèjì, duì guójiā de zhèngcè zěnme lǐjiě, shībàile zěnme bàn? Dàjiā měi tiān zài Wēixìn qún nǐ lái wǒ wǎng, mánglù ér huānlè, chúle yánsù de fángjià, zhè zhǒng gòng shāng dàshì de gǎnjué yě hěn ràng rén shàngyǐn.',
     vn:'Mọi người đều hiểu rõ mua nhà đối với gia đình nào cũng không phải chuyện nhỏ, việc gọi vốn cộng đồng mua nhà cũng vẫn đang ở giai đoạn dò dẫm, vì vậy phải thận trọng. Những người tham gia đều là bạn của người khởi xướng, hoặc bạn của bạn. Họ có trình độ khá cao, đều có nền tảng kinh tế nhất định, rất tò mò với những điều mới mẻ, về cơ bản thuộc cùng một tầng lớp. Theo lời người khởi xướng, gọi vốn cộng đồng không phải là gom nhà, mà là gom lòng người. Nhà thiết kế thế nào, hiểu chính sách nhà nước ra sao, thất bại thì làm thế nào? Ngày ngày mọi người trao đổi qua lại trong nhóm WeChat, bận rộn mà vui vẻ; ngoài chuyện giá nhà nghiêm túc ra, cảm giác cùng nhau bàn chuyện lớn này cũng rất khiến người ta "nghiện".'},
    {sp:0,zh:'什么是“众筹”？说白了，就是大家筹钱干一件事，上文所说的“众筹”更像是“集资建房”，广义的“众筹”则是互联网金融的产物，指创业者通过网络，向众多素不相识的人争取资金支持。',
     py:'Shénme shì “zhòngchóu”? Shuō bái le, jiù shì dàjiā chóu qián gàn yí jiàn shì, shàng wén suǒ shuō de “zhòngchóu” gèng xiàng shì “jízī jiàn fáng”, guǎngyì de “zhòngchóu” zé shì hùliánwǎng jīnróng de chǎnwù, zhǐ chuàngyèzhě tōngguò wǎngluò, xiàng zhòngduō sùbùxiāngshí de rén zhēngqǔ zījīn zhīchí.',
     vn:'"Gọi vốn cộng đồng" là gì? Nói trắng ra là mọi người góp tiền để làm một việc. "Gọi vốn cộng đồng" nói ở trên giống "góp vốn xây nhà" hơn, còn "gọi vốn cộng đồng" theo nghĩa rộng là sản phẩm của tài chính Internet, chỉ việc người khởi nghiệp thông qua mạng tìm kiếm sự hỗ trợ vốn từ rất nhiều người chưa từng quen biết.'},
    {sp:0,zh:'世界上第一个让初创公司梦想成真的众筹网站是美国的Kickstarter。2011年5月，中国国内首家众筹网站——点名时间，将Kickstarter的模式搬进了中国，之后众筹平台越来越多。如今，从慈善到图书出版，从电影制作到创业项目，众筹几乎跨越了所有的领域。',
     py:'Shìjiè shang dì-yī ge ràng chūchuàng gōngsī mèngxiǎng chéngzhēn de zhòngchóu wǎngzhàn shì Měiguó de Kickstarter. Èr líng yī yī nián wǔ yuè, Zhōngguó guónèi shǒu jiā zhòngchóu wǎngzhàn — Diǎnmíng Shíjiān, jiāng Kickstarter de móshì bānjìnle Zhōngguó, zhīhòu zhòngchóu píngtái yuè lái yuè duō. Rújīn, cóng císhàn dào túshū chūbǎn, cóng diànyǐng zhìzuò dào chuàngyè xiàngmù, zhòngchóu jīhū kuàyuèle suǒyǒu de lǐngyù.',
     vn:'Trang web gọi vốn cộng đồng đầu tiên trên thế giới giúp các công ty khởi nghiệp biến ước mơ thành hiện thực là Kickstarter của Mỹ. Tháng 5 năm 2011, trang web gọi vốn cộng đồng đầu tiên trong nước Trung Quốc — "Điểm danh thời gian" (点名时间) — đã đưa mô hình của Kickstarter vào Trung Quốc; sau đó các nền tảng gọi vốn cộng đồng ngày càng nhiều. Ngày nay, từ từ thiện đến xuất bản sách, từ làm phim đến dự án khởi nghiệp, gọi vốn cộng đồng gần như đã vươn tới mọi lĩnh vực.'},
    {sp:0,zh:'美微传媒CEO朱江做梦也没想到，他成了传说中的“中国众筹第一人”。那年，朱江开始在淘宝网出售美微会员卡，购买会员卡就是购买公司的原始股票，每股1.2元，最低认购100股，也就是说，花120元就可以成为持有美微股份的股东。朱江回忆起当时钞票源源不断流进来的感觉，真的有种苦尽甘来的味道。时至今日，众筹项目有成功的，也有处境尴尬的，而国内第一家众筹网站“点名时间”三年以后却抛弃了“众筹”，改营其他。坦白地讲，国内用户与国外有很大区别，比如，Kickstarter上聚集着一群理想主义者，他们心中充满向往，购买时感性因素超越了理性。国内用户则希望尽快得到回报，甚至有些急功近利，而用户的心态很大程度上决定了项目成功的可能性。再比如，国内用户对收获时间和产品质量要求较高，如果认为产品不符合预期，或是项目进展比计划的慢，就会发牢骚，有怨气。另外，大部分投资者对众筹还是持观望态度。因此，迄今为止众筹在国内还是一个看起来很美、做起来吃力的事情。',
     py:'Měiwēi Chuánméi CEO Zhū Jiāng zuò mèng yě méi xiǎngdào, tā chéngle chuánshuō zhōng de “Zhōngguó zhòngchóu dì-yī rén”. Nà nián, Zhū Jiāng kāishǐ zài Táobǎo Wǎng chūshòu Měiwēi huìyuánkǎ, gòumǎi huìyuánkǎ jiù shì gòumǎi gōngsī de yuánshǐ gǔpiào, měi gǔ yī diǎn èr yuán, zuì dī rèngòu yìbǎi gǔ, yě jiù shì shuō, huā yìbǎi èrshí yuán jiù kěyǐ chéngwéi chíyǒu Měiwēi gǔfèn de gǔdōng. Zhū Jiāng huíyì qǐ dāngshí chāopiào yuányuán-búduàn liú jìnlai de gǎnjué, zhēn de yǒu zhǒng kǔjìn-gānlái de wèidao. Shízhì jīnrì, zhòngchóu xiàngmù yǒu chénggōng de, yě yǒu chǔjìng gāngà de, ér guónèi dì-yī jiā zhòngchóu wǎngzhàn “Diǎnmíng Shíjiān” sān nián yǐhòu què pāoqìle “zhòngchóu”, gǎi yíng qítā. Tǎnbái de jiǎng, guónèi yònghù yǔ guówài yǒu hěn dà qūbié, bǐrú, Kickstarter shang jùjízhe yì qún lǐxiǎng zhǔyìzhě, tāmen xīn zhōng chōngmǎn xiàngwǎng, gòumǎi shí gǎnxìng yīnsù chāoyuèle lǐxìng. Guónèi yònghù zé xīwàng jǐnkuài dédào huíbào, shènzhì yǒuxiē jígōng-jìnlì, ér yònghù de xīntài hěn dà chéngdù shang juédìngle xiàngmù chénggōng de kěnéngxìng. Zài bǐrú, guónèi yònghù duì shōuhuò shíjiān hé chǎnpǐn zhìliàng yāoqiú jiào gāo, rúguǒ rènwéi chǎnpǐn bù fúhé yùqī, huò shì xiàngmù jìnzhǎn bǐ jìhuà de màn, jiù huì fā láosāo, yǒu yuànqì. Lìngwài, dà bùfen tóuzīzhě duì zhòngchóu háishi chí guānwàng tàidu. Yīncǐ, qìjīn wéizhǐ zhòngchóu zài guónèi háishi yí ge kàn qilai hěn měi, zuò qilai chīlì de shìqing.',
     vn:'Giám đốc điều hành (CEO) của Mỹ Vi Media là Chu Giang có nằm mơ cũng không ngờ mình lại trở thành "người gọi vốn cộng đồng đầu tiên của Trung Quốc" trong truyền thuyết. Năm ấy, Chu Giang bắt đầu bán thẻ hội viên Mỹ Vi trên Taobao; mua thẻ hội viên chính là mua cổ phiếu gốc của công ty, mỗi cổ phần 1,2 tệ, mua tối thiểu 100 cổ phần, tức là bỏ ra 120 tệ là có thể trở thành cổ đông nắm giữ cổ phần của Mỹ Vi. Chu Giang nhớ lại cảm giác tiền cứ chảy vào không ngớt khi ấy, thật sự có vị "khổ tận cam lai". Cho đến hôm nay, các dự án gọi vốn cộng đồng có cái thành công, cũng có cái rơi vào cảnh khó xử; còn trang web gọi vốn cộng đồng đầu tiên trong nước là "Điểm danh thời gian" thì ba năm sau lại từ bỏ "gọi vốn cộng đồng", chuyển sang kinh doanh thứ khác. Nói thẳng ra, người dùng trong nước khác người dùng nước ngoài rất nhiều. Chẳng hạn, trên Kickstarter tụ họp một nhóm người theo chủ nghĩa lý tưởng, trong lòng họ tràn đầy khát vọng, khi mua thì yếu tố cảm tính vượt lên trên lý tính. Người dùng trong nước thì lại mong nhanh chóng nhận được lợi nhuận, thậm chí có phần nóng vội cầu lợi, mà tâm lý người dùng ở mức độ rất lớn quyết định khả năng thành công của dự án. Lại chẳng hạn, người dùng trong nước yêu cầu khá cao về thời gian nhận thành quả và chất lượng sản phẩm; nếu cho rằng sản phẩm không đúng như kỳ vọng, hoặc dự án tiến triển chậm hơn kế hoạch, họ sẽ phàn nàn, oán trách. Ngoài ra, phần lớn nhà đầu tư vẫn giữ thái độ chờ xem đối với gọi vốn cộng đồng. Vì vậy, cho đến nay, gọi vốn cộng đồng ở trong nước vẫn là việc nhìn thì đẹp, làm thì vất vả. (Chú thích của sách: CEO — 首席执行官, viết tắt của Chief Executive Officer: giám đốc điều hành.)'},
    {sp:0,zh:'是啊，在互联网变得家喻户晓，给我们的生活带来许许多多的方便和乐趣的同时，也给我们增添了无穷无尽的烦恼，众筹平台上有，其他领域也有。据官方报道，尚未查明身份的罪犯盗窃了1800万个电子邮件账户及其密码；仅有两三个人的皮包公司公然冒充国家部门开设了一家假网站，大肆进行诈骗，如今已被警方依法刑事拘留；还有时时活跃着的网络黑客。每次类似这些败坏互联网名誉的事件一经曝光，就会使我们有触目惊心之感。',
     py:'Shì a, zài hùliánwǎng biàn de jiāyù-hùxiǎo, gěi wǒmen de shēnghuó dàilái xǔxǔduōduō de fāngbiàn hé lèqù de tóngshí, yě gěi wǒmen zēngtiānle wúqióng wújìn de fánnǎo, zhòngchóu píngtái shang yǒu, qítā lǐngyù yě yǒu. Jù guānfāng bàodào, shàngwèi chámíng shēnfen de zuìfàn dàoqièle yìqiān bābǎi wàn ge diànzǐ yóujiàn zhànghù jí qí mìmǎ; jǐn yǒu liǎng-sān ge rén de píbāo gōngsī gōngrán màochōng guójiā bùmén kāishèle yì jiā jiǎ wǎngzhàn, dàsì jìnxíng zhàpiàn, rújīn yǐ bèi jǐngfāng yīfǎ xíngshì jūliú; hái yǒu shíshí huóyuèzhe de wǎngluò hēikè. Měi cì lèisì zhèxiē bàihuài hùliánwǎng míngyù de shìjiàn yì jīng bàoguāng, jiù huì shǐ wǒmen yǒu chùmù-jīngxīn zhī gǎn.',
     vn:'Đúng vậy, cùng lúc Internet trở nên ai ai cũng biết, mang đến cho cuộc sống của chúng ta biết bao tiện lợi và niềm vui, thì nó cũng thêm cho chúng ta vô vàn phiền muộn — trên nền tảng gọi vốn cộng đồng có, ở các lĩnh vực khác cũng có. Theo tin chính thức, những tên tội phạm chưa xác minh được danh tính đã đánh cắp 18 triệu tài khoản email cùng mật khẩu; một công ty "ma" chỉ có hai, ba người đã ngang nhiên giả mạo cơ quan nhà nước lập ra một trang web giả, trắng trợn lừa đảo, nay đã bị cảnh sát tạm giữ hình sự theo pháp luật; lại còn có những tin tặc lúc nào cũng hoạt động trên mạng. Mỗi lần những sự việc làm hoen ố danh tiếng Internet như thế này bị phơi bày, chúng ta lại có cảm giác giật mình kinh hãi. (Chú thích của sách: 皮包公司 — công ty "túi da": chỉ cá nhân hoặc nhóm không có tài sản cố định, không có địa điểm kinh doanh và nhân viên cố định, chỉ xách một chiếc cặp da đi làm các hoạt động kinh tế, thường treo danh nghĩa công ty. 黑客 — tin tặc (hacker): người thông qua Internet xâm nhập trái phép hệ thống máy tính của người khác để xem, sửa, đánh cắp dữ liệu bí mật hoặc phá rối chương trình máy tính.)'},
    {sp:0,zh:'这就是互联网时代，在我们对它爱不释手的同时，也不免对它心存担忧。',
     py:'Zhè jiù shì hùliánwǎng shídài, zài wǒmen duì tā àibúshìshǒu de tóngshí, yě bùmiǎn duì tā xīn cún dānyōu.',
     vn:'Đó chính là thời đại Internet: trong khi chúng ta mê nó đến mức không rời tay, thì cũng khó tránh khỏi trong lòng lo lắng về nó.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 乐趣—兴趣 lấy từ sách (tr. 203–204, 做一做 chọn từ điền trống theo đáp án sách); 设立—成立, 抛弃—放弃 tự thêm (设立, 抛弃 là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'乐趣 — 兴趣',
   same:'Đều là danh từ, đều có thể biểu thị cảm xúc vui thích đối với sự vật, nhưng thông thường KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'他在音乐中找到了乐趣。／他对音乐很感兴趣。',vn:'Anh ấy tìm thấy niềm vui trong âm nhạc. / Anh ấy rất hứng thú với âm nhạc.'},
   items:[
     {word:'乐趣',points:[
       'Biểu thị sự thú vị khiến người ta cảm thấy vui (使人感到快乐的趣味): 工作中的乐趣是无穷的.',
       'Là cảm nhận KHI đang tham gia hoặc SAU KHI tham gia một hoạt động: 他能在绘画中找到乐趣.',
       'Hay đi với 感（觉）到、找到、成为、享受: 玩游戏已经成为了他生活中的乐趣.'
     ],ex:[{zh:'工作中的乐趣是无穷的。',vn:'Niềm vui trong công việc là vô tận.'},
          {zh:'玩游戏已经成为了他生活中的乐趣。',vn:'Chơi game đã trở thành niềm vui trong cuộc sống của cậu ấy.'}]},
     {word:'兴趣',points:[
       'Biểu thị một cảm xúc yêu thích, hứng thú (一种喜好的情绪): 这件事引起了我极大的兴趣.',
       'Là THÁI ĐỘ đối với sự vật, hoạt động — dùng được cả khi CHƯA tiếp xúc, chưa tham gia, lẫn trong khi tham gia: 我还没看那部电影，但它已经引起了我的兴趣.',
       'Hay đi với 感、引起、怀着、培养: 我对篮球不感兴趣; 对……感兴趣.'
     ],ex:[{zh:'这件事引起了我极大的兴趣。',vn:'Việc này khơi dậy sự hứng thú rất lớn ở tôi.'},
          {zh:'我对篮球不感兴趣。',vn:'Tôi không hứng thú với bóng rổ.'}]}
   ],
   quiz:[
     {sentence:'我从小就对画画儿很感＿＿。',options:['乐趣','兴趣'],answer:1,
      why:'Cụm cố định 对……感兴趣; 乐趣 không đi với 感.'},
     {sentence:'和朋友一起爬山，让我体会到了运动的＿＿。',options:['乐趣','兴趣'],answer:0,
      why:'Cảm nhận niềm vui khi / sau khi tham gia hoạt động (体会到……的乐趣) → 乐趣.'},
     {sentence:'老师想了很多办法培养学生学汉语的＿＿。',options:['乐趣','兴趣'],answer:1,
      why:'培养兴趣 = bồi dưỡng hứng thú (thái độ yêu thích) → 兴趣.'},
     {sentence:'钓鱼的＿＿不在于钓到多少鱼，而在于享受等待的过程。',options:['乐趣','兴趣'],answer:0,
      why:'Cái thú vị có được khi làm việc đó (享受……) → 乐趣.'}
   ],
   sgk:{
     chung:{t:'都是名词，都可以表示对事物怀有的愉快的情绪，但一般不能换用。',vn:'Đều là danh từ, đều có thể biểu thị cảm xúc vui vẻ đối với sự vật, nhưng thông thường không thể thay thế cho nhau.',vd:'① 他在音乐中找到了乐趣。② 他对音乐很感兴趣。',vdVn:'① Anh ấy tìm thấy niềm vui trong âm nhạc. ② Anh ấy rất hứng thú với âm nhạc.'},
     khac:[
       {a:{t:'表示使人感到快乐的趣味。',vn:'Biểu thị sự thú vị khiến người ta cảm thấy vui.',vd:'工作中的乐趣是无穷的。',vdVn:'Niềm vui trong công việc là vô tận.'},
        b:{t:'表示一种喜好的情绪。',vn:'Biểu thị một cảm xúc yêu thích.',vd:'这件事引起了我极大的兴趣。',vdVn:'Việc này khơi dậy sự hứng thú rất lớn ở tôi.'}},
       {a:{t:'用于参加某种活动时或参加活动后的感受。',vn:'Dùng cho cảm nhận khi đang tham gia hoặc sau khi tham gia một hoạt động nào đó.',vd:'他能在绘画中找到乐趣。',vdVn:'Anh ấy có thể tìm thấy niềm vui trong hội hoạ.'},
        b:{t:'用于对某种事物或活动的态度，可用在未接触或未参加时，也可用于参加过程中。',vn:'Dùng cho thái độ đối với một sự vật hay hoạt động nào đó; có thể dùng khi chưa tiếp xúc hay chưa tham gia, cũng có thể dùng trong quá trình tham gia.',vd:'我还没看那部电影，但它已经引起了我的兴趣。',vdVn:'Tôi vẫn chưa xem bộ phim đó, nhưng nó đã khơi gợi sự hứng thú của tôi.'}},
       {a:{t:'常常跟“感（觉）到、找到、成为、享受”等动词搭配。',vn:'Thường kết hợp với các động từ như 感（觉）到, 找到, 成为, 享受.',vd:'玩游戏已经成为了他生活中的乐趣。',vdVn:'Chơi game đã trở thành niềm vui trong cuộc sống của cậu ấy.'},
        b:{t:'常常跟“感、引起、怀着、培养”等动词搭配。',vn:'Thường kết hợp với các động từ như 感, 引起, 怀着, 培养.',vd:'我对篮球不感兴趣。',vdVn:'Tôi không hứng thú với bóng rổ.'}}
     ],
     deLam:'选择“乐趣”或“兴趣”填空 — Chọn 乐趣 hay 兴趣 điền vào chỗ trống',
     lamThu:[
       {s:'他那么喜欢下围棋，可我却感觉不到其中的＿＿。',dap:[true,false],
        giai:'乐趣 (đáp án sách): 感觉不到其中的乐趣 = không cảm nhận được cái thú vị trong việc chơi cờ vây — cảm nhận khi tham gia hoạt động, đi với 感觉到.'},
       {s:'＿＿是可以培养的，多接触接触就喜欢了。',dap:[false,true],
        giai:'兴趣 (đáp án sách): 兴趣 đi với 培养 (bồi dưỡng hứng thú); nói về thái độ yêu thích trước khi tiếp xúc nhiều.'},
       {s:'只有乐观的人才能随时享受生活中的＿＿。',dap:[true,false],
        giai:'乐趣 (đáp án sách): 享受……的乐趣 = tận hưởng niềm vui — 乐趣 đi với 享受.'},
       {s:'听说这本书极受年轻人的推崇，这引起了我的＿＿。',dap:[false,true],
        giai:'兴趣 (đáp án sách): 引起……的兴趣 — chưa đọc sách mà đã thấy hứng thú (dùng khi chưa tiếp xúc) → 兴趣.'}
     ]
   }},

  {pair:'设立 — 成立',
   same:'Đều là động từ, đều có nghĩa "lập ra, thành lập" (tổ chức, cơ quan).',
   sameEx:{zh:'这家公司在河内设立／成立了分公司。',vn:'Công ty này đã lập chi nhánh ở Hà Nội.'},
   items:[
     {word:'设立',points:[
       'Nhấn việc LẬP RA, ĐẶT RA — BẮT BUỘC mang tân ngữ: 设立奖学金, 设立个人网站.',
       'Đối tượng rộng: ngoài cơ quan, tổ chức còn có giải thưởng, quỹ, quầy, trạm, trang web: 设立专柜, 设立服务站.',
       'Văn viết, trang trọng.'
     ],ex:[{zh:'我们能设立个人网站。',vn:'Chúng ta có thể lập trang web cá nhân.'},
          {zh:'学校设立了奖学金。',vn:'Nhà trường đã lập quỹ học bổng.'}]},
     {word:'成立',points:[
       'Nhấn một TỔ CHỨC chính thức RA ĐỜI (công ty, câu lạc bộ, hội, nhà nước) — hay dùng KHÔNG tân ngữ, chủ ngữ là tổ chức: 公司成立了, 成立于1998年; nếu có tân ngữ thì cũng chỉ là tổ chức (成立委员会).',
       'Còn nghĩa "đứng vững, có căn cứ" (lý lẽ, quan điểm): 这个观点不能成立.',
       'Không dùng cho giải thưởng, quỹ, trang web (không nói *成立奖学金).'
     ],ex:[{zh:'我们学校的汉语俱乐部是去年成立的。',vn:'Câu lạc bộ tiếng Trung của trường chúng tôi được thành lập năm ngoái.'},
          {zh:'你的理由不能成立。',vn:'Lý do của cậu không đứng vững được.'}]}
   ],
   quiz:[
     {sentence:'这家公司＿＿于2005年，现在已经有一千多名员工了。',options:['设立','成立'],answer:1,
      why:'Tổ chức ra đời (chủ ngữ là công ty, không có tân ngữ) + 于 + năm → 成立; 设立 phải có tân ngữ.'},
     {sentence:'为了鼓励学生，学校＿＿了“进步奖”。',options:['设立','成立'],answer:0,
      why:'Đặt ra một giải thưởng (mang tân ngữ 进步奖) → 设立; không nói 成立奖.'},
     {sentence:'他的这个结论证据不足，不能＿＿。',options:['设立','成立'],answer:1,
      why:'成立 nghĩa "đứng vững, có căn cứ" (lý lẽ, kết luận).'},
     {sentence:'银行在大学里＿＿了一个自助服务点。',options:['设立','成立'],answer:0,
      why:'Lập một điểm phục vụ (mang tân ngữ, không phải tổ chức ra đời) → 设立.'}
   ]},

  {pair:'抛弃 — 放弃',
   same:'Đều là động từ, đều có nghĩa "bỏ, không giữ lại nữa".',
   sameEx:{zh:'我们要抛弃／放弃那些不切实际的想法。',vn:'Chúng ta phải bỏ đi những suy nghĩ viển vông ấy.'},
   items:[
     {word:'抛弃',points:[
       'VỨT BỎ HẲN thứ mình không cần nữa, coi là vô dụng, cũ kỹ, có hại: 抛弃旧观念, 抛弃偏见.',
       'Đối tượng có thể là NGƯỜI, động vật — sắc thái ruồng bỏ, rất nặng: 抛弃家庭, 被主人抛弃的小狗.',
       'Bài khoá: 点名时间三年以后却抛弃了“众筹” — bỏ hẳn mô hình cũ.'
     ],ex:[{zh:'这只小狗被主人抛弃了。',vn:'Chú chó nhỏ này bị chủ vứt bỏ.'},
          {zh:'我们应该抛弃旧观念。',vn:'Chúng ta nên vứt bỏ quan niệm cũ.'}]},
     {word:'放弃',points:[
       'TỪ BỎ cái vốn có hoặc đang theo đuổi (quyền lợi, cơ hội, ý định, kế hoạch) — thường tự nguyện, có khi tiếc nuối: 放弃机会, 放弃比赛.',
       'Đối tượng hầu như là thứ trừu tượng; không dùng cho người thân với nghĩa ruồng bỏ.',
       'Rất phổ biến trong khẩu ngữ: 别放弃! 我不会放弃的.'
     ],ex:[{zh:'他为了照顾生病的母亲，放弃了出国的机会。',vn:'Vì chăm mẹ ốm, anh ấy đã từ bỏ cơ hội ra nước ngoài.'},
          {zh:'不管多难，我都不会放弃。',vn:'Dù khó đến đâu, tôi cũng sẽ không bỏ cuộc.'}]}
   ],
   quiz:[
     {sentence:'只差最后一公里了，千万别＿＿！',options:['抛弃','放弃'],answer:1,
      why:'Bỏ cuộc giữa chừng việc đang theo đuổi → 放弃.'},
     {sentence:'他为了过上富裕的生活，竟然＿＿了自己的妻子和孩子。',options:['抛弃','放弃'],answer:0,
      why:'Ruồng bỏ vợ con (đối tượng là người) → 抛弃.'},
     {sentence:'她＿＿了高薪的工作，回老家当了一名乡村老师。',options:['抛弃','放弃'],answer:1,
      why:'Tự nguyện từ bỏ công việc lương cao (quyền lợi vốn có) → 放弃.'},
     {sentence:'要想进步，就必须＿＿“差不多就行”的旧思想。',options:['抛弃','放弃'],answer:0,both:true,
      why:'Vứt bỏ tư tưởng cũ có hại → 抛弃 (chuẩn nhất); 放弃 cũng nói được nhưng nhẹ hơn.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'交易',hv:'giao dịch',vn:'giao dịch, mua bán',note:'Trùng khít: 股票交易 = giao dịch cổ phiếu.'},
    {zh:'珍贵',hv:'trân quý',vn:'quý giá',note:'"Trân" = quý (trân trọng, trân châu); 珍贵的礼物 = món quà quý giá.'},
    {zh:'虚荣',hv:'hư vinh',vn:'hư vinh, sĩ diện',note:'Trùng khít: 虚荣心 = lòng hư vinh.'},
    {zh:'成员',hv:'thành viên',vn:'thành viên',note:'Trùng khít: 家庭成员 = thành viên gia đình.'},
    {zh:'初步',hv:'sơ bộ',vn:'bước đầu, sơ bộ',note:'Trùng khít: 初步结果 = kết quả sơ bộ.'},
    {zh:'审查',hv:'thẩm tra',vn:'xét duyệt, thẩm tra',note:'"Thẩm tra" tiếng Việt cũng = xem xét kỹ (thẩm tra hồ sơ).'},
    {zh:'政策',hv:'chính sách',vn:'chính sách',note:'Trùng khít.'},
    {zh:'慈善',hv:'từ thiện',vn:'từ thiện',note:'Trùng khít: 慈善机构 = tổ chức từ thiện.'},
    {zh:'股份',hv:'cổ phần',vn:'cổ phần',note:'Trùng khít: 股份公司 = công ty cổ phần.'},
    {zh:'股东',hv:'cổ đông',vn:'cổ đông',note:'Trùng khít: 股东大会 = đại hội cổ đông.'},
    {zh:'进展',hv:'tiến triển',vn:'tiến triển',note:'Trùng khít: 取得进展 = đạt được tiến triển.'},
    {zh:'罪犯',hv:'tội phạm',vn:'tội phạm',note:'Trùng khít. Chú ý thứ tự: 罪犯 (tội phạm, danh từ) ≠ 犯罪 (phạm tội, động từ).'},
    {zh:'公然',hv:'công nhiên',vn:'ngang nhiên',note:'"Công nhiên" tiếng Việt cũng mang nghĩa chê (công nhiên vi phạm).'},
    {zh:'名誉',hv:'danh dự',vn:'danh dự, danh tiếng',note:'Trùng khít: 名誉校长 = hiệu trưởng danh dự.'},
    {zh:'阶层',hv:'giai tầng',vn:'tầng lớp xã hội',note:'"Giai tầng" tiếng Việt = tầng lớp (giai tầng xã hội).'},
    {zh:'设立',hv:'thiết lập',vn:'lập ra, thành lập',note:'"Thiết lập" tiếng Việt gần nghĩa; 设立奖学金 dịch "lập học bổng".'},
    {zh:'欢乐',hv:'hoan lạc',vn:'vui vẻ',note:'"Hoan" như trong hoan hỉ, hân hoan; dịch tự nhiên là "vui vẻ".'},
    {zh:'拘留',hv:'câu lưu',vn:'tạm giữ, tạm giam',note:'Tiếng Việt có "câu lưu" (câu lưu tàu, câu lưu người) — trùng nghĩa.'},
    {zh:'盗窃',hv:'đạo thiết',vn:'trộm cắp',note:'"Đạo" = trộm (đạo tặc), "thiết" = lén lút; 盗窃罪 = tội trộm cắp.'}
  ],
  idiom:[
    {zh:'日新月异',hv:'nhật tân nguyệt dị',vn:'thay đổi từng ngày',note:'Ngày ngày mới, tháng tháng khác — chỉ sự phát triển rất nhanh.'},
    {zh:'苦尽甘来',hv:'khổ tận cam lai',vn:'hết khổ đến sướng',note:'Tiếng Việt dùng đúng câu "khổ tận cam lai".'},
    {zh:'急功近利',hv:'cấp công cận lợi',vn:'nóng vội cầu lợi',note:'"Cấp" = gấp, "cận lợi" = cái lợi gần trước mắt.'},
    {zh:'家喻户晓',hv:'gia dụ hộ hiểu',vn:'nhà nhà đều biết',note:'"Dụ" = hiểu rõ, "hiểu" = biết.'},
    {zh:'无穷无尽',hv:'vô cùng vô tận',vn:'vô tận',note:'Chú ý: "vô cùng" ở đây = không có điểm cuối, không phải phó từ "rất".'},
    {zh:'迄今为止',hv:'hất kim vi chỉ',vn:'cho đến nay',note:'"Hất" = đến; "kim" = nay; "vi chỉ" = làm điểm dừng.'},
    {zh:'爱不释手',hv:'ái bất thích thủ',vn:'thích không rời tay',note:'"Thích" (释) = buông ra: yêu đến mức không buông tay.'}
  ],
  trap:[
    {zh:'沉闷',hv:'trầm muộn',vn:'buồn tẻ, ngột ngạt',
     warn:'"Trầm muộn" không dùng trong tiếng Việt; đừng nhầm với "trầm mặc" (沉默 — im lặng). 沉闷 = BUỒN TẺ, NẶNG NỀ (气氛沉闷).'},
    {zh:'充实',hv:'sung thực',vn:'đủ đầy, phong phú',
     warn:'Không phải "sung túc" (giàu có — 富裕). 充实 = cuộc sống, nội dung ĐỦ ĐẦY, CÓ Ý NGHĨA (không trống rỗng).'},
    {zh:'合算',hv:'hợp toán',vn:'có lợi, hời',
     warn:'Không phải "tính gộp". 合算 là tính từ = CÓ LỢI, ĐÁNG TIỀN (很合算 = rất hời).'},
    {zh:'渠道',hv:'cừ đạo',vn:'kênh, con đường',
     warn:'"Cừ" = mương nước; nghĩa bóng = KÊNH (thông tin, bán hàng). Tiếng Việt cũng nói "kênh" cho 频道 (kênh truyền hình) — hai từ khác nhau!'},
    {zh:'上瘾',hv:'thượng ẩn',vn:'nghiện',
     warn:'"Thượng ẩn" vô nghĩa; 瘾 = cơn nghiện → 上瘾 = BỊ NGHIỆN, MÊ. Động từ li hợp: 上了瘾.'},
    {zh:'尴尬',hv:'giam giới',vn:'khó xử, ngượng',
     warn:'Âm Hán Việt không gợi nghĩa gì; nhớ thẳng 尴尬 = NGƯỢNG, KHÓ XỬ (处境尴尬).'},
    {zh:'坦白',hv:'thản bạch',vn:'thẳng thắn; thú nhận',
     warn:'Không phải "thản nhiên". 坦白 = THẲNG THẮN (坦白地说 = thành thật mà nói) hoặc THÚ NHẬN (坦白错误).'},
    {zh:'败坏',hv:'bại hoại',vn:'làm tổn hại, làm hoen ố',
     warn:'"Bại hoại" tiếng Việt là tính từ (đồi bại). 败坏 tiếng Trung chủ yếu là ĐỘNG TỪ = LÀM TỔN HẠI (败坏名誉); chỉ 道德败坏 mới gần nghĩa "đồi bại".'},
    {zh:'吃力',hv:'ngật lực',vn:'vất vả',
     warn:'吃 = ăn, 力 = sức → "ăn sức" = VẤT VẢ, KHÓ NHỌC. Không liên quan đến "có sức".'},
    {zh:'牢骚',hv:'lao tao',vn:'lời phàn nàn',
     warn:'"Lao tao" vô nghĩa với người Việt; 发牢骚 = PHÀN NÀN, CÀU NHÀU.'},
    {zh:'钞票',hv:'sao phiếu',vn:'tiền giấy',
     warn:'"Sao" (钞) = tiền giấy; không liên quan đến "ngôi sao". 钞票 = TIỀN GIẤY.'},
    {zh:'曝光',hv:'bộc quang',vn:'phơi bày, phanh phui',
     warn:'曝 đọc bào (không phải pù). "Bộc" = phơi ra (bộc lộ) → 曝光 = BỊ PHƠI BÀY, PHANH PHUI (việc xấu).'},
    {zh:'冒充',hv:'mạo sung',vn:'giả mạo, giả danh',
     warn:'Gần "mạo danh, mạo nhận" tiếng Việt; 充 ở đây = giả làm, không phải "sung" (đầy).'},
    {zh:'大肆',hv:'đại tứ',vn:'trắng trợn, tràn lan',
     warn:'Không có "đại tứ" trong tiếng Việt; 肆 = phóng túng (肆无忌惮) → 大肆 = LÀM VIỆC XẤU TRẮNG TRỢN.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'生活正发生着日新月异的',right:'变化'},
  {left:'生活不再单调',right:'沉闷'},
  {left:'每一天都变得浪漫、丰富和',right:'充实'},
  {left:'将异地购物、',right:'交易变为了可能'},
  {left:'足不出户就能任意',right:'挑选'},
  {left:'自由而不失',right:'乐趣'},
  {left:'设立个人',right:'网站'},
  {left:'让你小小的',right:'虚荣心得到满足'},
  {left:'赠送给他们的珍贵',right:'礼物'},
  {left:'合伙筹备',right:'资金'},
  {left:'互联网金融下的新',right:'成员'},
  {left:'初步打算召集',right:'200人'},
  {left:'递交申请表、通过',right:'审查'},
  {left:'缴纳100元',right:'订金'},
  {left:'众筹买房还处于',right:'摸索阶段'},
  {left:'基本属于同一',right:'阶层'},
  {left:'大家每天在微信群你来我往，忙碌而',right:'欢乐'},
  {left:'成为持有美微股份的',right:'股东'},
  {left:'钞票源源不断',right:'流进来'},
  {left:'众筹项目有处境',right:'尴尬的'},
  {left:'国内用户甚至有些',right:'急功近利'},
  {left:'就会发牢骚，',right:'有怨气'},
  {left:'看起来很美、做起来',right:'吃力'},
  {left:'给我们增添了无穷无尽的',right:'烦恼'},
  {left:'大肆进行',right:'诈骗'},
  {left:'被警方依法刑事',right:'拘留'},
  {left:'败坏互联网',right:'名誉'},
  {left:'使我们有触目惊心',right:'之感'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu (fill + chọn từ)
// ══════════════════════════════════════════
var fillData = [
  {pre:'这几年，我们城市的面貌',blank:'日新月异',post:'，到处都是新盖的高楼。',hint:'(thay đổi từng ngày)',ans:'日新月异'},
  {pre:'退休以后，奶奶参加了合唱团，生活过得很',blank:'充实',post:'。',hint:'(đủ đầy)',ans:'充实'},
  {pre:'双方谈了一个下午，终于完成了这笔',blank:'交易',post:'。',hint:'(giao dịch)',ans:'交易'},
  {pre:'这个软件可以把照片',blank:'任意',post:'放大或缩小。',hint:'(tuỳ ý)',ans:'任意'},
  {pre:'我不喜欢钓鱼，感觉不到其中的',blank:'乐趣',post:'。',hint:'(niềm vui, cái thú)',ans:'乐趣'},
  {pre:'为了满足自己的',blank:'虚荣',post:'心，他借钱买了一辆豪车。',hint:'(hư vinh)',ans:'虚荣'},
  {pre:'大学毕业后，他和两个同学',blank:'合伙',post:'开了一家网店。',hint:'(hùn vốn)',ans:'合伙'},
  {pre:'这只小狗已经成了我们家的新',blank:'成员',post:'。',hint:'(thành viên)',ans:'成员'},
  {pre:'我们',blank:'初步',post:'打算暑假去云南旅行，具体时间还没定。',hint:'(bước đầu, dự tính ban đầu)',ans:'初步'},
  {pre:'提前一个月订机票能便宜一半，很',blank:'合算',post:'。',hint:'(hời, có lợi)',ans:'合算'},
  {pre:'这篇文章',blank:'层次',post:'分明，读起来很清楚。',hint:'(lớp lang, trình độ)',ans:'层次'},
  {pre:'政府出台了一系列优惠',blank:'政策',post:'，鼓励年轻人创业。',hint:'(chính sách)',ans:'政策'},
  {pre:'春节联欢晚会上，到处都是',blank:'欢乐',post:'的笑声。',hint:'(vui vẻ)',ans:'欢乐'},
  {pre:'短视频很容易让人',blank:'上瘾',post:'，一看就是一两个小时。',hint:'(nghiện)',ans:'上瘾'},
  {pre:'这位歌手把演唱会的收入全部捐给了',blank:'慈善',post:'机构。',hint:'(từ thiện)',ans:'慈善'},
  {pre:'他在这家公司占百分之二十的',blank:'股份',post:'。',hint:'(cổ phần)',ans:'股份'},
  {pre:'公司每年召开一次',blank:'股东',post:'大会，讨论下一年的发展计划。',hint:'(cổ đông)',ans:'股东'},
  {pre:'现在大家都用手机付款，很少有人带',blank:'钞票',post:'出门了。',hint:'(tiền giấy)',ans:'钞票'},
  {pre:'父母辛苦了大半辈子，现在终于',blank:'苦尽甘来',post:'了。',hint:'(hết khổ đến sướng)',ans:'苦尽甘来'},
  {pre:'我叫错了他的名字，场面十分',blank:'尴尬',post:'。',hint:'(khó xử, ngượng)',ans:'尴尬'},
  {pre:'',blank:'坦白',post:'地说，我对这个结果并不满意。',hint:'(thẳng thắn)',ans:'坦白'},
  {pre:'学语言不能',blank:'急功近利',post:'，要一步一步地打好基础。',hint:'(nóng vội cầu lợi)',ans:'急功近利'},
  {pre:'光发',blank:'牢骚',post:'解决不了问题，还是想想办法吧。',hint:'(lời phàn nàn)',ans:'牢骚'},
  {pre:'',blank:'迄今为止',post:'，这种病还没有有效的治疗方法。',hint:'(cho đến nay)',ans:'迄今为止'},
  {pre:'爷爷年纪大了，爬楼梯有些',blank:'吃力',post:'。',hint:'(vất vả, chật vật)',ans:'吃力'},
  {pre:'孙悟空的故事在中国',blank:'家喻户晓',post:'，连小孩子都知道。',hint:'(ai ai cũng biết)',ans:'家喻户晓'},
  {pre:'读书可以带给我们',blank:'无穷无尽',post:'的快乐。',hint:'(vô tận)',ans:'无穷无尽'},
  {pre:'警方用了三天时间，终于抓获了那名',blank:'罪犯',post:'。',hint:'(tội phạm)',ans:'罪犯'},
  {pre:'这伙人',blank:'大肆',post:'捕杀野生动物，引起了公愤。',hint:'(trắng trợn)',ans:'大肆'},
  {pre:'老年人最容易成为电信',blank:'诈骗',post:'的对象。',hint:'(lừa đảo)',ans:'诈骗'},
  {pre:'他因为酒后开车，被警察',blank:'拘留',post:'了十五天。',hint:'(tạm giữ)',ans:'拘留'},
  {pre:'为了维护自己的',blank:'名誉',post:'，他把造谣的人告上了法庭。',hint:'(danh dự)',ans:'名誉'},
  {pre:'这家餐厅使用过期食品的事被记者',blank:'曝光',post:'了。',hint:'(phanh phui)',ans:'曝光'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (任意 · 尚未 · 夸张) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','足不出户','就能','任意','挑选','欧洲、美洲的','商品','。'],ans:'我们足不出户就能任意挑选欧洲、美洲的商品。',audio:'我们足不出户就能任意挑选欧洲、美洲的商品。'},
  {words:['合同','一旦生效','，','任何一方','都不能','任意','反悔了','。'],ans:'合同一旦生效，任何一方都不能任意反悔了。',audio:'合同一旦生效，任何一方都不能任意反悔了。'},
  {words:['你','任意','抽','一张纸牌','，','他','都能','猜出来','。'],ans:'你任意抽一张纸牌，他都能猜出来。',audio:'你任意抽一张纸牌，他都能猜出来。'},
  {words:['尚未','查明','身份的','罪犯','盗窃了','大量','电子邮件账户','。'],ans:'尚未查明身份的罪犯盗窃了大量电子邮件账户。',audio:'尚未查明身份的罪犯盗窃了大量电子邮件账户。'},
  {words:['在一些','偏远山区','，','网络','尚未','普及','。'],ans:'在一些偏远山区，网络尚未普及。',audio:'在一些偏远山区，网络尚未普及。'},
  {words:['由于','电视','尚未','出现','，','电影','便成了','最热门的娱乐','。'],ans:'由于电视尚未出现，电影便成了最热门的娱乐。',audio:'由于电视尚未出现，电影便成了最热门的娱乐。'},
  {words:['我住的','房间','，','只有','巴掌','这么大','。'],ans:'我住的房间，只有巴掌这么大。',audio:'我住的房间，只有巴掌这么大。'},
  {words:['整个礼堂','静得','连掉根针','都能','听见','。'],ans:'整个礼堂静得连掉根针都能听见。',audio:'整个礼堂静得连掉根针都能听见。'},
  {words:['天热得','像下火一样','，','柏油路','都','烤化了','。'],ans:'天热得像下火一样，柏油路都烤化了。',audio:'天热得像下火一样，柏油路都烤化了。'},
  {words:['众筹买房','还','处于','摸索阶段','，','因此','必须','慎重','。'],ans:'众筹买房还处于摸索阶段，因此必须慎重。',audio:'众筹买房还处于摸索阶段，因此必须慎重。'},
  {words:['坦白地说','，','我们','已经','离不开','手机','了','。'],ans:'坦白地说，我们已经离不开手机了。',audio:'坦白地说，我们已经离不开手机了。'},
  {words:['这类事件','一经','曝光','，','就会','使我们','有触目惊心之感','。'],ans:'这类事件一经曝光，就会使我们有触目惊心之感。',audio:'这类事件一经曝光，就会使我们有触目惊心之感。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'屋子里谁也不说话，气氛十分____。',opts:['沉闷','沉默','沉重','沉着'],ans:0,
   exp:'气氛沉闷 = bầu không khí nặng nề, ngột ngạt. 沉默 = im lặng (nói người: 他沉默了); 沉重 = nặng nề (gánh nặng, tâm trạng: 心情沉重); 沉着 = điềm tĩnh.'},
  {wrong:'退休以后，爷爷每天看书、种花，日子过得很____。',opts:['充足','充分','充满','充实'],ans:3,
   exp:'日子过得很充实 = sống rất đủ đầy, có ý nghĩa. 充足 = dồi dào (nước, ánh sáng, thời gian: 阳光充足); 充分 = đầy đủ, triệt để (理由充分); 充满 là động từ, phải có tân ngữ (充满希望).'},
  {wrong:'现在用手机就能随时进行股票____。',opts:['贸易','交换','交易','交流'],ans:2,
   exp:'股票交易 = giao dịch cổ phiếu (cụm cố định). 贸易 = thương mại (国际贸易); 交换 = trao đổi (đồ vật, ý kiến); 交流 = giao lưu.'},
  {wrong:'这家公司在胡志明市____了一个办事处。',opts:['成立','设立','建立','树立'],ans:1,
   exp:'设立 + 办事处 = lập văn phòng đại diện (đặt ra một cơ sở, bắt buộc có tân ngữ). 成立 nhấn tổ chức ra đời, hay không có tân ngữ (公司成立了); 建立 = xây dựng (quan hệ, chế độ); 树立 = xây dựng (hình tượng, tấm gương — bài 36).'},
  {wrong:'博物馆里收藏着许多____的文物。',opts:['昂贵','珍贵','高贵','贵族'],ans:1,
   exp:'珍贵的文物 = cổ vật quý giá (giá trị hiếm có). 昂贵 = đắt đỏ (chỉ giá tiền — bài 22); 高贵 = cao quý (phẩm chất, địa vị); 贵族 là danh từ (quý tộc — bài 33).'},
  {wrong:'为了____这次国际会议，大家忙了整整三个月。',opts:['筹备','预备','储备','具备'],ans:0,
   exp:'筹备会议 = trù bị, chuẩn bị tổ chức hội nghị (việc lớn). 预备 = dự bị, chuẩn bị sẵn (预备铃); 储备 = dự trữ (bài 21); 具备 = có đủ (điều kiện).'},
  {wrong:'申请材料要经过有关部门____，合格以后才能办理。',opts:['调查','检查','审查','观察'],ans:2,
   exp:'审查材料 = xét duyệt hồ sơ (do cơ quan có thẩm quyền). 检查 = kiểm tra nói chung (检查身体); 调查 = điều tra (sự việc); 观察 = quan sát.'},
  {wrong:'每个公民都应该依法____税款。',opts:['交换','缴纳','采纳','容纳'],ans:1,
   exp:'缴纳税款 = nộp thuế. 采纳 = tiếp thu (ý kiến); 容纳 = chứa được (bài 36); 交换 = trao đổi.'},
  {wrong:'我们应该通过正规____了解信息，不要轻信谣言。',opts:['渠道','轨道','跑道','频道'],ans:0,
   exp:'正规渠道 = kênh chính thống (con đường tiếp nhận thông tin). 轨道 = đường ray, quỹ đạo (bài 30); 跑道 = đường chạy; 频道 = kênh truyền hình — tiếng Việt đều gọi "kênh" nên rất dễ nhầm.'},
  {wrong:'经过几年的____，他终于找到了一套适合自己的学习方法。',opts:['探望','搜索','寻求','摸索'],ans:3,
   exp:'经过……的摸索 = sau … tìm tòi, dò dẫm (từng bước tìm ra cách). 探望 = thăm hỏi (bài 25); 搜索 = tìm kiếm (trên mạng); 寻求 = tìm kiếm (sự giúp đỡ, giải pháp), không đi với 经过……的.'},
  {wrong:'这项政策得到了社会各____的支持。',opts:['层次','阶层','阶段','台阶'],ans:1,
   exp:'社会各阶层 = các tầng lớp xã hội. 层次 = trình độ, cấp độ, lớp lang; 阶段 = giai đoạn; 台阶 = bậc thềm.'},
  {wrong:'这只小狗被主人____了，每天在街上流浪。',opts:['放弃','丢失','抛弃','废弃'],ans:2,
   exp:'被主人抛弃 = bị chủ ruồng bỏ (người, vật nuôi). 放弃 = từ bỏ (cơ hội, quyền lợi); 丢失 = đánh mất (vô ý); 废弃 = bỏ không dùng (đồ vật, công trình: 废弃的工厂).'},
  {wrong:'经过一个月的调查，这个案件终于有了新的____。',opts:['进步','进口','进攻','进展'],ans:3,
   exp:'有了新的进展 = có tiến triển mới (công việc, sự việc). 进步 = tiến bộ (người, học tập); 进口 = nhập khẩu; 进攻 = tấn công (bài 24).'},
  {wrong:'黑客____了公司的商业机密，造成了巨大的损失。',opts:['盗窃','窃听','偷看','抢劫'],ans:0,
   exp:'盗窃机密 = đánh cắp bí mật. 窃听 = nghe lén (điện thoại); 偷看 = nhìn trộm; 抢劫 = cướp (dùng vũ lực công khai).'},
  {wrong:'有人____快递员给我打电话，想骗我的银行卡密码。',opts:['充当','扮演','充满','冒充'],ans:3,
   exp:'冒充 + thân phận = giả danh để lừa. 充当 = đảm nhận vai trò (thật: 充当翻译); 扮演 = đóng vai (kịch, phim); 充满 = tràn đầy.'},
  {wrong:'这个人道德____，大家都看不起他。',opts:['败坏','损坏','破坏','坏处'],ans:0,
   exp:'道德败坏 = đạo đức suy đồi (cụm cố định). 损坏 = làm hỏng đồ vật (bài 29); 破坏 = phá hoại (động từ, cần tân ngữ); 坏处 = cái hại (danh từ).'},
  {wrong:'只有乐观的人才能随时享受生活中的____。',opts:['兴趣','爱好','乐趣','好奇'],ans:2,
   exp:'享受……的乐趣 = tận hưởng niềm vui (做一做 của sách). 兴趣 đi với 感 / 引起 / 培养; 爱好 = sở thích (không đi với 享受); 好奇 là tính từ.'},
  {wrong:'他竟然在考场上____作弊，被老师当场抓住了。',opts:['公开','公然','公平','公正'],ans:1,
   exp:'公然 + hành vi xấu = ngang nhiên (mang ý chê). 公开 = công khai (trung tính: 公开道歉); 公平 / 公正 = công bằng.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 39 + ôn từ HSK 6 bài 1–38 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Internet khiến cuộc sống của chúng ta thay đổi từng ngày; cho dù không bước chân ra khỏi nhà, ta vẫn có thể tha hồ chọn hàng hoá khắp thế giới.',zh:'互联网让我们的生活发生了日新月异的变化，就算足不出户，也能任意挑选世界各地的商品。',py:'Hùliánwǎng ràng wǒmen de shēnghuó fāshēngle rìxīn-yuèyì de biànhuà, jiùsuàn zú bù chū hù, yě néng rènyì tiāoxuǎn shìjiè gè dì de shāngpǐn.',goiY:['日新月异','就算……也……','任意'],giai:'就算……也…… = 即使……也…… (khẩu ngữ hơn) — giả thiết nhượng bộ. 任意 + V (điểm ngữ pháp 1) đứng sau động từ năng nguyện 能.'},
  {vi:'Từ khi tham gia câu lạc bộ từ thiện của trường, thời gian ngoài giờ học của tôi không còn buồn tẻ nữa, trái lại trở nên rất đủ đầy.',zh:'自从加入了学校的慈善社团，我的课余生活不再沉闷，反而变得很充实。',py:'Zìcóng jiārùle xuéxiào de císhàn shètuán, wǒ de kèyú shēnghuó bú zài chénmèn, fǎn\'ér biàn de hěn chōngshí.',goiY:['自从……','慈善','不再……反而……','充实'],giai:'自从 + mốc thời gian = từ khi …; 反而 = trái lại (kết quả ngược với điều người ta nghĩ) — đừng dịch "trái lại" thành 而且.'},
  {vi:'Thành thật mà nói, tớ đã nghiện game điện thoại rồi; thay vì cứ tiếp tục như thế, chi bằng nhờ cậu giúp tớ quản lý một chút.',zh:'坦白地说，我玩手机游戏已经上瘾了，与其这样下去，不如请你帮我管一管。',py:'Tǎnbái de shuō, wǒ wán shǒujī yóuxì yǐjīng shàngyǐn le, yǔqí zhèyàng xiàqu, bùrú qǐng nǐ bāng wǒ guǎn yi guǎn.',goiY:['坦白地说','上瘾','与其……不如……'],giai:'与其 A 不如 B = thay vì A chi bằng B (chọn B); 上瘾 là động từ li hợp nên 了 đặt cuối (上瘾了 / 上了瘾).'},
  {vi:'Công tác chuẩn bị cho hoạt động này còn chưa xong mà phương án sơ bộ đã bị người ta đăng lên mạng; lỡ có chuyện gì thì ai chịu trách nhiệm?',zh:'这个活动的筹备工作尚未完成，初步方案就被人发到了网上，万一出了问题，谁来负责？',py:'Zhège huódòng de chóubèi gōngzuò shàngwèi wánchéng, chūbù fāng\'àn jiù bèi rén fādàole wǎngshàng, wànyī chūle wèntí, shéi lái fùzé?',goiY:['筹备','尚未','初步','万一'],giai:'尚未 = 还没有 (văn viết, điểm ngữ pháp 2), không thêm 了 sau động từ; ……就…… nhấn sự việc xảy ra quá sớm; 万一 = lỡ như (giả thiết điều không mong muốn).'},
  {vi:'Giao dịch trên mạng tuy tiện lợi, nhưng nhất định phải thanh toán qua kênh chính thống để tránh bị lừa đảo.',zh:'网上交易虽然方便，但是一定要通过正规渠道付款，以免被人诈骗。',py:'Wǎngshàng jiāoyì suīrán fāngbiàn, dànshì yídìng yào tōngguò zhèngguī qúdào fùkuǎn, yǐmiǎn bèi rén zhàpiàn.',goiY:['交易','虽然……但是……','渠道','以免'],giai:'以免 (bài 21) đứng đầu vế cuối = để tránh; 诈骗 là từ pháp luật, ở đây dùng bị động 被人诈骗. Ba vế: nhượng bộ → yêu cầu → mục đích tránh.'},
  {vi:'Chỉ khi vứt bỏ tâm lý nóng vội cầu lợi, từng bước tìm tòi, em mới tìm được phương pháp học phù hợp với mình.',zh:'只有抛弃急功近利的心态，一步一步地摸索，你才能找到适合自己的学习方法。',py:'Zhǐyǒu pāoqì jígōng-jìnlì de xīntài, yí bù yí bù de mōsuǒ, nǐ cái néng zhǎodào shìhé zìjǐ de xuéxí fāngfǎ.',goiY:['只有……才……','抛弃','急功近利','摸索'],giai:'只有……才…… (điều kiện duy nhất); 心态 — bài 24; 一步一步地 làm trạng ngữ (biến điệu: yí bù yí bù).'},
  {vi:'Cô nói đề bài văn có thể tuỳ ý chọn, nhưng tôi nghĩ cả buổi tối vẫn chưa quyết định được, hôm sau không nộp nổi bài, rơi vào tình thế hết sức khó xử.',zh:'老师说作文题目可以任意选择，可我想了一晚上尚未决定，第二天交不出来，处境十分尴尬。',py:'Lǎoshī shuō zuòwén tímù kěyǐ rènyì xuǎnzé, kě wǒ xiǎngle yì wǎnshang shàngwèi juédìng, dì-èr tiān jiāo bu chūlai, chǔjìng shífēn gāngà.',goiY:['任意','尚未','尴尬'],giai:'任意 + V (tuỳ ý chọn); 尚未 + V (vẫn chưa…, văn viết) — trong lời nói có thể thay bằng 还没; 交不出来 = bổ ngữ khả năng phủ định.'},
  {vi:'Hắn giả danh giáo viên đăng thông báo trong nhóm lớp, bắt các bạn nộp tiền tài liệu; may mà lớp trưởng phát hiện kịp thời.',zh:'他冒充老师的身份在班级群里发通知，让同学们缴纳资料费，幸亏班长及时发现了。',py:'Tā màochōng lǎoshī de shēnfen zài bānjí qún li fā tōngzhī, ràng tóngxuémen jiǎonà zīliàofèi, xìngkuī bānzhǎng jíshí fāxiàn le.',goiY:['冒充','缴纳','幸亏'],giai:'Chuỗi hành động nối tiếp (冒充……发通知，让……缴纳……) + 幸亏 = may mà (kết quả tốt nhờ một điều kiện bất ngờ, ôn HSK 5).'},
  {vi:'Cho đến nay, lớp mình đã có ba bạn từng bị lừa trên mạng; đủ thấy ý thức phòng ngừa của mọi người vẫn chưa được nâng cao.',zh:'迄今为止，我们班已经有三个同学在网上被诈骗过，可见大家的防范意识尚未提高。',py:'Qìjīn wéizhǐ, wǒmen bān yǐjīng yǒu sān ge tóngxué zài wǎngshàng bèi zhàpiànguo, kějiàn dàjiā de fángfàn yìshi shàngwèi tígāo.',goiY:['迄今为止','诈骗','可见','尚未'],giai:'可见 = đủ thấy (rút ra kết luận từ sự thật vừa nêu); 被 + V + 过 = đã từng bị …; 尚未 phủ định sẵn, không thêm 了.'},
  {vi:'Có kẻ cố tình tung tin đồn tràn lan trên mạng, làm hoen ố danh dự của trường ta; một khi làm rõ được, nhà trường nhất định sẽ truy cứu trách nhiệm của hắn theo pháp luật.',zh:'有人故意在网上大肆散布谣言，败坏了我们学校的名誉，一经查明，学校就一定会依法追究他的责任。',py:'Yǒu rén gùyì zài wǎngshàng dàsì sànbù yáoyán, bàihuàile wǒmen xuéxiào de míngyù, yì jīng chámíng, xuéxiào jiù yídìng huì yīfǎ zhuījiū tā de zérèn.',goiY:['大肆','败坏','名誉','一经……就……'],giai:'一经……就…… (văn viết, như câu bài khoá: 一经曝光，就……) = hễ đã … là lập tức …; 追究责任 — bài 23.'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Nó khiến cuộc sống của chúng ta không còn đơn điệu buồn tẻ, ngày nào cũng trở nên lãng mạn, phong phú và đủ đầy.',zh:'它使我们的生活不再单调沉闷，每一天都变得浪漫、丰富和充实。',py:'Tā shǐ wǒmen de shēnghuó bú zài dāndiào chénmèn, měi yì tiān dōu biàn de làngmàn, fēngfù hé chōngshí.',goiY:['使 = khiến','沉闷 = buồn tẻ','充实 = đủ đầy'],giai:'Câu kiêm ngữ 使 + O + V; 不再 = không còn nữa. 充实 dịch "đủ đầy / có ý nghĩa", đừng dịch "sung túc".'},
  {vi:'Chúng ta có thể lập trang web cá nhân, vừa mở rộng vòng bạn bè, vừa thoả mãn chút hư vinh nho nhỏ của mình.',zh:'我们能设立个人网站，既能扩大朋友圈，又能让小小的虚荣心得到满足。',py:'Wǒmen néng shèlì gèrén wǎngzhàn, jì néng kuòdà péngyouquān, yòu néng ràng xiǎoxiǎo de xūróngxīn dédào mǎnzú.',goiY:['设立 = lập','既……又…… = vừa … vừa …','虚荣心 = lòng hư vinh'],giai:'既……又…… nối hai lợi ích song song; 让……得到满足 = làm cho … được thoả mãn.'},
  {vi:'Cái lợi của việc gọi vốn cộng đồng mua nhà nằm ở ưu thế rõ rệt về giá; dù để đầu tư hay để ở đều rất có lợi.',zh:'众筹购房的好处在于价格上拥有明显优势，无论是投资还是自住，都很合算。',py:'Zhòngchóu gòufáng de hǎochù zàiyú jiàgé shang yōngyǒu míngxiǎn yōushì, wúlùn shì tóuzī háishi zìzhù, dōu hěn hésuàn.',goiY:['在于 = nằm ở','无论……还是……都…… = dù … hay … đều','合算 = có lợi'],giai:'……的好处在于…… = cái lợi của … là ở chỗ …; 无论 A 还是 B 都 C (điều kiện nào kết quả cũng không đổi).'},
  {vi:'Người đăng ký sau khi được xét duyệt, nộp 100 tệ tiền đặt cọc là có thể vào nhóm WeChat mua nhà.',zh:'申请人通过审查后，缴纳100元订金，就可以进入购房微信群。',py:'Shēnqǐngrén tōngguò shěnchá hòu, jiǎonà yìbǎi yuán dìngjīn, jiù kěyǐ jìnrù gòufáng Wēixìn qún.',goiY:['审查 = xét duyệt','缴纳 = nộp','订金 = tiền đặt cọc'],giai:'Chuỗi điều kiện theo thứ tự: 通过……后 → 缴纳…… → 就可以…… (hễ đủ điều kiện thì …).'},
  {vi:'Những người tham gia gọi vốn cộng đồng có trình độ khá cao, rất tò mò với cái mới, về cơ bản thuộc cùng một tầng lớp.',zh:'众筹的参与者层次较高，对新生事物有强烈的好奇心，基本属于同一阶层。',py:'Zhòngchóu de cānyùzhě céngcì jiào gāo, duì xīnshēng shìwù yǒu qiángliè de hàoqíxīn, jīběn shǔyú tóngyī jiēcéng.',goiY:['层次 = trình độ','好奇心 = tính tò mò','阶层 = tầng lớp'],giai:'Ba vị ngữ nối tiếp cùng một chủ ngữ. Phân biệt 层次 (trình độ) và 阶层 (tầng lớp xã hội).'},
  {vi:'Ngày ngày mọi người trao đổi qua lại trong nhóm WeChat, bận rộn mà vui vẻ; cảm giác cùng nhau bàn chuyện lớn này rất khiến người ta "nghiện".',zh:'大家每天在微信群里你来我往，忙碌而欢乐，这种共商大事的感觉很让人上瘾。',py:'Dàjiā měi tiān zài Wēixìn qún li nǐ lái wǒ wǎng, mánglù ér huānlè, zhè zhǒng gòng shāng dàshì de gǎnjué hěn ràng rén shàngyǐn.',goiY:['你来我往 = qua lại','忙碌而欢乐 = bận rộn mà vui vẻ','上瘾 = nghiện'],giai:'A 而 B nối hai tính từ (bận mà vui); 上瘾 ở đây mang nghĩa đùa vui tích cực ("mê", "nghiện").'},
  {vi:'Chu Giang nhớ lại cảm giác tiền cứ chảy vào không ngớt lúc ấy, thật sự có vị khổ tận cam lai.',zh:'朱江回忆起当时钞票源源不断流进来的感觉，真的有种苦尽甘来的味道。',py:'Zhū Jiāng huíyì qǐ dāngshí chāopiào yuányuán-búduàn liú jìnlai de gǎnjué, zhēn de yǒu zhǒng kǔjìn-gānlái de wèidao.',goiY:['钞票 = tiền giấy','源源不断 = không ngớt','苦尽甘来 = khổ tận cam lai'],giai:'Định ngữ dài 当时钞票源源不断流进来的 bổ nghĩa cho 感觉; 有种 = 有一种.'},
  {vi:'Người dùng trong nước mong nhanh chóng nhận được lợi nhuận, thậm chí có phần nóng vội cầu lợi; nếu dự án tiến triển chậm hơn kế hoạch thì họ sẽ phàn nàn.',zh:'国内用户希望尽快得到回报，甚至有些急功近利，如果项目进展比计划的慢，就会发牢骚。',py:'Guónèi yònghù xīwàng jǐnkuài dédào huíbào, shènzhì yǒuxiē jígōng-jìnlì, rúguǒ xiàngmù jìnzhǎn bǐ jìhuà de màn, jiù huì fā láosāo.',goiY:['甚至 = thậm chí','急功近利 = nóng vội cầu lợi','进展 = tiến triển','发牢骚 = phàn nàn'],giai:'甚至 đẩy mức độ lên cao hơn; 如果……就…… (giả thiết – kết quả); A 比 B 的慢 = A chậm hơn B.'},
  {vi:'Theo tin chính thức, những tên tội phạm chưa xác minh được danh tính đã đánh cắp một lượng lớn tài khoản email cùng mật khẩu.',zh:'据官方报道，尚未查明身份的罪犯盗窃了大量电子邮件账户及其密码。',py:'Jù guānfāng bàodào, shàngwèi chámíng shēnfen de zuìfàn dàoqièle dàliàng diànzǐ yóujiàn zhànghù jí qí mìmǎ.',goiY:['据……报道 = theo … đưa tin','尚未 = vẫn chưa','盗窃 = đánh cắp','及其 = cùng với … của nó'],giai:'尚未查明身份的 là định ngữ của 罪犯 (尚未 = 还没有, điểm ngữ pháp 2); 及其 = 和它的.'},
  {vi:'Một công ty "ma" đã ngang nhiên giả mạo cơ quan nhà nước lập trang web giả, trắng trợn lừa đảo, nay đã bị cảnh sát tạm giữ hình sự theo pháp luật.',zh:'一家皮包公司公然冒充国家部门开设假网站，大肆进行诈骗，如今已被警方依法刑事拘留。',py:'Yì jiā píbāo gōngsī gōngrán màochōng guójiā bùmén kāishè jiǎ wǎngzhàn, dàsì jìnxíng zhàpiàn, rújīn yǐ bèi jǐngfāng yīfǎ xíngshì jūliú.',goiY:['公然 = ngang nhiên','冒充 = giả mạo','大肆 = trắng trợn','拘留 = tạm giữ'],giai:'Ba vế theo trình tự: hành vi (冒充……开设) → mức độ (大肆进行诈骗) → kết quả (已被……拘留). 皮包公司 = công ty "ma", không có tài sản, trụ sở thật.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 206): điều tra 5 người, viết báo cáo "互联网与我们" ≥ 400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'本课介绍了互联网时代的生活，有利也有弊。互联网在带给人们便捷的生活的同时，也给我们带来一些新的问题。互联网对你和你身边的人有什么影响呢。请寻找5个不同年龄、不同性别、不同职业的对象进行调查，将调查内容填入表中，将调查内容以“互联网与我们”为题写一篇不少于400字的调查报告。',
  prompt:'Bài khoá giới thiệu cuộc sống trong thời đại Internet, có lợi mà cũng có hại. Internet mang lại cho con người cuộc sống tiện lợi, đồng thời cũng đem đến cho chúng ta một số vấn đề mới. Internet có ảnh hưởng gì đến em và những người xung quanh em? Hãy tìm 5 người khác nhau về độ tuổi, giới tính, nghề nghiệp để điều tra, điền nội dung điều tra vào bảng (giới tính · tuổi · nghề nghiệp · mỗi ngày lên mạng bao lâu · lên mạng làm gì · quan điểm chính về Internet; sách cho sẵn dòng mẫu: nữ, 61 tuổi, giáo viên, 1 tiếng, xem tin tức và gửi nhận email, "tiện lợi nhưng đừng nghiện"), rồi dựa vào nội dung điều tra viết một bản báo cáo điều tra với nhan đề "互联网与我们" (Internet và chúng ta), không ít hơn 400 chữ.',
  dan:[
    {hoi:'调查对象（5人）：性别、年龄、职业',goiY:'①不同年龄：如 17岁、26岁、38岁、45岁、61岁…… ②不同性别：男、女都要有 ③不同职业：学生、公司职员、教师、司机、退休工人……（表中例子：女，61岁，教师）'},
    {hoi:'每天上网多长时间？',goiY:'①……每天上网……个小时左右 ②上网时间最长的是……，最短的是…… ③表中例子：1小时'},
    {hoi:'上网干什么？',goiY:'①看新闻、收发邮件（表中例子） ②网上购物、交易、缴纳各种费用 ③看电影、听音乐、玩游戏、视频聊天 ④在网上学习、找工作'},
    {hoi:'对互联网的主要看法',goiY:'①利：方便……，生活不再沉闷，变得充实…… ②弊：容易上瘾；遇到诈骗、密码被盗窃、假网站…… ③表中例子：方便，但不要上瘾'},
    {hoi:'调查结论：互联网与我们',goiY:'①通过这次调查，我发现…… ②互联网在带给我们……的同时，也…… ③我认为……（参考课文最后一段：在我们对它爱不释手的同时，也不免对它心存担忧）'}
  ],
  tuNen:['日新月异','任意','充实','乐趣','上瘾','交易','诈骗','坦白地说','迄今为止','尚未'],
  cauTruc:[
    {ten:'为了了解……，我调查了……', nhan:'Mở đầu — mục đích', vd:'为了了解互联网对人们生活的影响，我调查了五个不同年龄、不同性别、不同职业的人。', khi:'Câu MỞ ĐẦU báo cáo: nêu mục đích và đối tượng điều tra (đúng yêu cầu 5 người khác nhau của đề).'},
    {ten:'第一位是……，今年……岁，是……', nhan:'Giới thiệu đối tượng', vd:'第一位是我的奶奶，今年六十一岁，是一名退休教师。', khi:'Giới thiệu từng người theo đúng các cột của bảng: 性别 · 年龄 · 职业.'},
    {ten:'……每天上网……，主要用来……', nhan:'Thói quen lên mạng', vd:'她每天上网一个小时左右，主要用来看新闻、收发邮件。', khi:'Viết nội dung hai cột 每天上网多长时间 và 上网干什么.'},
    {ten:'在……看来，……', nhan:'Quan điểm của từng người', vd:'在她看来，互联网很方便，但千万不要上瘾。', khi:'Viết cột 对互联网的主要看法; có thể thay bằng ……说 / ……认为.'},
    {ten:'与……不同的是，……', nhan:'So sánh, đối chiếu', vd:'与奶奶不同的是，小林每天上网五个小时。', khi:'Làm báo cáo sinh động: so sánh các đối tượng với nhau thay vì liệt kê khô khan.'},
    {ten:'……在……的同时，也……', nhan:'Hai mặt lợi – hại', vd:'我们在享受互联网带来的方便的同时，也应该学会保护自己。', khi:'Cấu trúc của chính đề bài và đoạn cuối bài khoá — dùng ở phần kết luận.'},
    {ten:'通过这次调查，我发现……', nhan:'Kết luận', vd:'通过这次调查，我发现互联网已经成了每个人生活中不可缺少的一部分。', khi:'Câu KẾT: tổng hợp kết quả điều tra, rồi nêu ý kiến riêng.'}
  ],
  checklist:[
    'Đã có nhan đề "互联网与我们" và viết đủ ít nhất 400 chữ Hán chưa?',
    'Đã điều tra đủ 5 người, khác nhau về độ tuổi, giới tính và nghề nghiệp (có cả nam và nữ) chưa?',
    'Mỗi người có đủ thông tin của bảng: 性别 · 年龄 · 职业 · 每天上网多长时间 · 上网干什么 · 对互联网的主要看法 chưa?',
    'Có đoạn mở đầu nêu mục đích điều tra và đoạn kết luận nói cả hai mặt LỢI – HẠI của Internet (có ý kiến riêng) chưa?',
    'Đã dùng ít nhất 5 từ của bài (日新月异, 任意, 充实, 上瘾, 诈骗, 迄今为止…) và điểm ngữ pháp 任意 / 尚未 chưa?'
  ],
  model:{
    zh:'互联网与我们\n为了了解互联网对人们生活的影响，我调查了五个不同年龄、不同性别、不同职业的人。\n第一位是我的奶奶，今年六十一岁，是一名退休教师。她每天上网一个小时左右，主要用来看新闻、收发邮件。在她看来，互联网很方便，但千万不要上瘾。第二位是我爸爸，四十五岁，是一家公司的经理。他每天上网八个多小时，开会、交易、缴纳各种费用都离不开网络。他说，科技日新月异，不学习就会落后。第三位是开出租车的李叔叔，三十八岁。他每天用手机接单、导航，上网时间差不多有十个小时。他坦白地说，自己曾经在网上遇到过诈骗，差点儿损失了一个月的工资。第四位是在银行工作的王阿姨，二十六岁。她下班以后喜欢上网看电影、听音乐，还能任意挑选喜欢的衣服，生活一点儿也不沉闷。第五位是我的同学小林，十七岁。与奶奶不同的是，他每天上网五个小时，大部分时间用来在网上学习，他觉得这样既自由又充满乐趣，可是有时候也会玩游戏玩到半夜。\n通过这次调查，我发现互联网已经成了每个人生活中不可缺少的一部分，它让我们的生活变得更加充实。可是迄今为止，网络安全问题尚未完全解决，也有人因为上网影响了学习和健康。所以，我们在享受互联网带来的方便的同时，也应该学会保护自己，合理安排上网时间。',
    py:'Hùliánwǎng yǔ Wǒmen\nWèile liǎojiě hùliánwǎng duì rénmen shēnghuó de yǐngxiǎng, wǒ diàochále wǔ ge bù tóng niánlíng, bù tóng xìngbié, bù tóng zhíyè de rén.\nDì-yī wèi shì wǒ de nǎinai, jīnnián liùshíyī suì, shì yì míng tuìxiū jiàoshī. Tā měi tiān shàngwǎng yí ge xiǎoshí zuǒyòu, zhǔyào yònglái kàn xīnwén, shōufā yóujiàn. Zài tā kànlái, hùliánwǎng hěn fāngbiàn, dàn qiānwàn búyào shàngyǐn. Dì-èr wèi shì wǒ bàba, sìshíwǔ suì, shì yì jiā gōngsī de jīnglǐ. Tā měi tiān shàngwǎng bā ge duō xiǎoshí, kāihuì, jiāoyì, jiǎonà gè zhǒng fèiyòng dōu lí bu kāi wǎngluò. Tā shuō, kējì rìxīn-yuèyì, bù xuéxí jiù huì luòhòu. Dì-sān wèi shì kāi chūzūchē de Lǐ shūshu, sānshíbā suì. Tā měi tiān yòng shǒujī jiē dān, dǎoháng, shàngwǎng shíjiān chàbuduō yǒu shí ge xiǎoshí. Tā tǎnbái de shuō, zìjǐ céngjīng zài wǎngshàng yùdàoguo zhàpiàn, chàdiǎnr sǔnshīle yí ge yuè de gōngzī. Dì-sì wèi shì zài yínháng gōngzuò de Wáng āyí, èrshíliù suì. Tā xiàbān yǐhòu xǐhuan shàngwǎng kàn diànyǐng, tīng yīnyuè, hái néng rènyì tiāoxuǎn xǐhuan de yīfu, shēnghuó yìdiǎnr yě bù chénmèn. Dì-wǔ wèi shì wǒ de tóngxué Xiǎo Lín, shíqī suì. Yǔ nǎinai bù tóng de shì, tā měi tiān shàngwǎng wǔ ge xiǎoshí, dà bùfen shíjiān yònglái zài wǎngshàng xuéxí, tā juéde zhèyàng jì zìyóu yòu chōngmǎn lèqù, kěshì yǒu shíhou yě huì wán yóuxì wán dào bànyè.\nTōngguò zhè cì diàochá, wǒ fāxiàn hùliánwǎng yǐjīng chéngle měi ge rén shēnghuó zhōng bù kě quēshǎo de yí bùfen, tā ràng wǒmen de shēnghuó biàn de gèngjiā chōngshí. Kěshì qìjīn wéizhǐ, wǎngluò ānquán wèntí shàngwèi wánquán jiějué, yě yǒu rén yīnwèi shàngwǎng yǐngxiǎngle xuéxí hé jiànkāng. Suǒyǐ, wǒmen zài xiǎngshòu hùliánwǎng dàilái de fāngbiàn de tóngshí, yě yīnggāi xuéhuì bǎohù zìjǐ, hélǐ ānpái shàngwǎng shíjiān.',
    vn:'Internet và chúng ta\nĐể tìm hiểu ảnh hưởng của Internet đến cuộc sống của mọi người, tôi đã điều tra năm người khác nhau về độ tuổi, giới tính và nghề nghiệp.\nNgười thứ nhất là bà nội tôi, năm nay sáu mươi mốt tuổi, là giáo viên đã nghỉ hưu. Mỗi ngày bà lên mạng khoảng một tiếng, chủ yếu để xem tin tức, gửi và nhận email. Theo bà, Internet rất tiện lợi, nhưng tuyệt đối đừng để bị nghiện. Người thứ hai là bố tôi, bốn mươi lăm tuổi, là giám đốc một công ty. Mỗi ngày bố lên mạng hơn tám tiếng, họp hành, giao dịch, nộp các loại phí đều không thể thiếu mạng. Bố nói khoa học công nghệ thay đổi từng ngày, không học thì sẽ tụt hậu. Người thứ ba là chú Lý lái taxi, ba mươi tám tuổi. Mỗi ngày chú dùng điện thoại nhận cuốc xe, dẫn đường, thời gian lên mạng gần mười tiếng. Chú thành thật kể rằng mình từng gặp lừa đảo trên mạng, suýt nữa mất trắng một tháng lương. Người thứ tư là cô Vương làm ở ngân hàng, hai mươi sáu tuổi. Tan làm cô thích lên mạng xem phim, nghe nhạc, còn có thể tha hồ chọn quần áo mình thích, cuộc sống chẳng buồn tẻ chút nào. Người thứ năm là bạn cùng lớp tôi, Tiểu Lâm, mười bảy tuổi. Khác với bà nội, mỗi ngày cậu ấy lên mạng năm tiếng, phần lớn thời gian dùng để học trực tuyến; cậu thấy như vậy vừa tự do vừa đầy niềm vui, nhưng thỉnh thoảng cũng chơi game đến nửa đêm.\nQua cuộc điều tra này, tôi nhận thấy Internet đã trở thành một phần không thể thiếu trong cuộc sống của mỗi người, nó khiến cuộc sống của chúng ta đủ đầy hơn. Nhưng cho đến nay, vấn đề an ninh mạng vẫn chưa được giải quyết triệt để, cũng có người vì lên mạng mà ảnh hưởng đến việc học và sức khoẻ. Vì vậy, trong khi tận hưởng sự tiện lợi mà Internet mang lại, chúng ta cũng nên học cách tự bảo vệ mình, sắp xếp thời gian lên mạng một cách hợp lý.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (bảng 4 dòng). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 日新月异 · 沉闷 · 充实 · 任意 · 设立 · 合伙 · 筹备 · 合算 · 渠道 · 审查 · 缴纳 · 阶层 · 上瘾 · 急功近利 · 迄今为止 · 冒充 · 诈骗 · 盗窃.',
  questions:[
    {q_zh:'互联网走进我们的生活以后，生活发生了哪些变化？',
     q_vn:'Sau khi Internet bước vào cuộc sống của chúng ta, cuộc sống đã có những thay đổi gì?',
     hint:'①自如地…… ②生活不再单调…… ③将……变成了可能 ④网上学习、找工作、设立个人网站 ⑤合伙集资买房',
     sample:'互联网走进我们的生活以后，生活发生了日新月异的变化：我们能自如地通话、视频、传递消息；生活不再单调沉闷，变得丰富而充实；互联网将异地购物、交易变成了可能，我们足不出户就能任意挑选商品；我们还可以在网上学习、找工作、设立个人网站；最近甚至有人通过网络和朋友合伙集资买房。',
     sample_vn:'Sau khi Internet bước vào cuộc sống, cuộc sống đã thay đổi từng ngày: chúng ta có thể thoải mái gọi điện, gọi video, gửi tin nhắn; cuộc sống không còn đơn điệu buồn tẻ mà trở nên phong phú, đủ đầy; Internet biến việc mua sắm, giao dịch ở nơi xa thành điều có thể, không cần ra khỏi nhà vẫn tha hồ chọn hàng; chúng ta còn có thể học, tìm việc, lập trang web cá nhân trên mạng; gần đây thậm chí có người qua mạng cùng bạn bè hùn vốn góp tiền mua nhà.',
     note:'Đi đúng 5 ý của gợi ý, nối bằng dấu chấm phẩy như bài khoá; mở đầu bằng 发生了日新月异的变化 để tóm ý chung.'},
    {q_zh:'简述人们如何利用网络平台筹备买房？',
     q_vn:'Hãy kể tóm tắt người ta đã tận dụng nền tảng mạng để gom vốn mua nhà như thế nào?',
     hint:'①众筹购房的好处…… ②微信是众筹的主要渠道…… ③众筹的参与者…… ④大家在交流平台上谈……',
     sample:'众筹购房的好处在于价格有明显优势，比市场价至少便宜30%，无论投资还是自住都很合算。微信是众筹的主要渠道，申请人通过审查、缴纳100元订金后就能进群。众筹的参与者都是发起人的朋友或朋友的朋友，层次较高，基本属于同一阶层。大家每天在微信群里谈房子怎么设计、对政策怎么理解、失败了怎么办，忙碌而欢乐。',
     sample_vn:'Cái lợi của gọi vốn cộng đồng mua nhà là giá có ưu thế rõ rệt, rẻ hơn giá thị trường ít nhất 30%, dù đầu tư hay để ở đều có lợi. WeChat là kênh chủ yếu, người đăng ký sau khi được xét duyệt và nộp 100 tệ đặt cọc thì được vào nhóm. Người tham gia đều là bạn của người khởi xướng hoặc bạn của bạn, trình độ khá cao, về cơ bản cùng một tầng lớp. Hằng ngày mọi người bàn trong nhóm WeChat chuyện nhà thiết kế thế nào, hiểu chính sách ra sao, thất bại thì làm sao — bận rộn mà vui vẻ.',
     note:'Khung ……的好处在于……; 无论……还是……都……; nhớ các con số (30%, 100元) và từ 渠道 · 审查 · 缴纳 · 阶层.'},
    {q_zh:'众筹和众筹网站',
     q_vn:'Gọi vốn cộng đồng và các trang web gọi vốn cộng đồng',
     hint:'①什么是众筹？ ②众筹在中国的发展怎么样？',
     sample:'众筹说白了就是大家筹钱干一件事，广义的众筹指创业者通过网络向众多素不相识的人争取资金支持。2011年，中国第一家众筹网站“点名时间”把Kickstarter的模式搬进了中国，朱江也成了“中国众筹第一人”。不过，国内用户有些急功近利，项目进展一慢就发牢骚，所以迄今为止，众筹在国内还是一件看起来很美、做起来吃力的事情。',
     sample_vn:'Gọi vốn cộng đồng nói trắng ra là mọi người góp tiền làm một việc; theo nghĩa rộng là người khởi nghiệp qua mạng tìm sự hỗ trợ vốn từ rất nhiều người không quen biết. Năm 2011, trang gọi vốn cộng đồng đầu tiên của Trung Quốc là "Điểm danh thời gian" đưa mô hình Kickstarter vào Trung Quốc, Chu Giang cũng trở thành "người gọi vốn cộng đồng đầu tiên của Trung Quốc". Tuy nhiên, người dùng trong nước có phần nóng vội cầu lợi, dự án chậm một chút là phàn nàn, nên cho đến nay gọi vốn cộng đồng ở trong nước vẫn là việc nhìn thì đẹp, làm thì vất vả.',
     note:'Trả lời đủ HAI câu hỏi: định nghĩa (说白了，就是……) và tình hình phát triển (có mặt tốt — mặt khó); kết bằng 迄今为止……看起来很美、做起来吃力.'},
    {q_zh:'人们为什么对互联网也会心存担忧？',
     q_vn:'Vì sao con người cũng lo lắng về Internet?',
     hint:'①假网站 ②网络黑客',
     sample:'因为互联网在带给我们方便和乐趣的同时，也增添了无穷无尽的烦恼。比如，有的皮包公司公然冒充国家部门开设假网站，大肆进行诈骗；还有时时活跃着的网络黑客，尚未查明身份的罪犯盗窃了大量电子邮件账户和密码。这些败坏互联网名誉的事件一经曝光，就让人触目惊心。',
     sample_vn:'Vì Internet mang lại cho chúng ta tiện lợi và niềm vui, đồng thời cũng thêm vô vàn phiền muộn. Ví dụ, có công ty "ma" ngang nhiên giả mạo cơ quan nhà nước lập trang web giả, trắng trợn lừa đảo; lại có tin tặc lúc nào cũng hoạt động, những tên tội phạm chưa rõ danh tính đã đánh cắp lượng lớn tài khoản email và mật khẩu. Những sự việc làm hoen ố danh tiếng Internet này một khi bị phơi bày đều khiến người ta giật mình kinh hãi.',
     note:'Mở bằng ……在……的同时，也……; đưa đủ hai ví dụ (假网站, 黑客) và dùng 尚未 (điểm ngữ pháp 2).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 39.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 39',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'你每个月的水电费都是去银行交的吗？'},
            {sp:'女',zh:'早就不去了。现在在手机上就能缴纳，一分钟就搞定，还不用排队。'}],
     q:'女的是怎么交水电费的？',qvn:'Người phụ nữ nộp tiền điện nước bằng cách nào?',
     opts:['去银行交','让家人帮忙交','在手机上缴纳','去物业公司交'],ans:2,
     why:'现在在手机上就能缴纳 → nộp trên điện thoại. Cô ấy nói 早就不去了 (đã lâu không đến ngân hàng).',
     words:['缴纳']},

    {n:2,
     lines:[{sp:'女',zh:'听说你和几个同学合伙开了一家网店？'},
            {sp:'男',zh:'是啊。刚开始什么都不懂，只能一边做一边摸索，现在总算有点儿起色了。'}],
     q:'关于男的的网店，可以知道什么？',qvn:'Về cửa hàng online của người đàn ông, có thể biết điều gì?',
     opts:['是他一个人开的','一开始是边做边摸索','已经关门了','赚了很多钱'],ans:1,
     why:'一边做一边摸索 → vừa làm vừa mò mẫm. Cửa hàng do anh ấy cùng mấy bạn hùn vốn (合伙), mới "有点儿起色" (khá lên chút ít), chưa phải kiếm nhiều tiền.',
     words:['合伙','摸索']},

    {n:3,
     lines:[{sp:'男',zh:'小王，你怎么一脸尴尬？'},
            {sp:'女',zh:'别提了，我在群里发牢骚说老板太小气，结果发错群了，老板也在那个群里。'}],
     q:'女的为什么尴尬？',qvn:'Vì sao người phụ nữ ngượng?',
     opts:['把牢骚发到了有老板的群里','忘了老板的生日','工作中出了大错','被老板当面批评了'],ans:0,
     why:'发牢骚……结果发错群了，老板也在那个群里 → gửi lời phàn nàn nhầm vào nhóm có ông chủ.',
     words:['尴尬','牢骚']},

    {n:4,
     lines:[{sp:'女',zh:'这件衣服网上才卖一百块，商场里要三百多呢。'},
            {sp:'男',zh:'网上买是挺合算的，不过你得看清楚是不是正规渠道，别买到假货。'}],
     q:'男的提醒女的注意什么？',qvn:'Người đàn ông nhắc người phụ nữ chú ý điều gì?',
     opts:['别买太贵的衣服','衣服的颜色和大小','商场的打折活动','是不是正规渠道'],ans:3,
     why:'你得看清楚是不是正规渠道，别买到假货 → xem có phải kênh chính thống không.',
     words:['合算','渠道']},

    {n:5,
     lines:[{sp:'男',zh:'你昨天是不是接到一个自称银行客服的电话？'},
            {sp:'女',zh:'对，他说我的账户有问题，让我把验证码告诉他。我觉得不对劲，就挂了。'},
            {sp:'男',zh:'挂得好！那是冒充客服的诈骗电话。'}],
     q:'那个电话是什么电话？',qvn:'Cuộc điện thoại đó là cuộc gọi gì?',
     opts:['银行客服的电话','诈骗电话','朋友的电话','快递员的电话'],ans:1,
     why:'冒充客服的诈骗电话 → giả danh nhân viên ngân hàng để lừa đảo, không phải nhân viên thật.',
     words:['冒充','诈骗']},

    {n:6,
     lines:[{sp:'女',zh:'你儿子最近学习怎么样？'},
            {sp:'男',zh:'唉，他玩手机游戏上瘾了，每天玩到半夜，第二天上课没精神，成绩也下降了。'}],
     q:'男的的儿子怎么了？',qvn:'Con trai người đàn ông bị làm sao?',
     opts:['身体不太好','不想上学了','玩游戏上瘾了','换了一所学校'],ans:2,
     why:'玩手机游戏上瘾了 → nghiện game điện thoại, dẫn đến học sút.',
     words:['上瘾']},

    {n:7,
     lines:[{sp:'男',zh:'听说那个在网上大肆造谣的人被抓了？'},
            {sp:'女',zh:'是啊，他败坏了好几家公司的名誉，事情一曝光，就被警方依法拘留了。'}],
     q:'关于那个造谣的人，下列哪项正确？',qvn:'Về kẻ tung tin đồn, điều nào dưới đây đúng?',
     opts:['已经被拘留了','是一家公司的老板','是被冤枉的','还没有被发现'],ans:0,
     why:'事情一曝光，就被警方依法拘留了 → đã bị tạm giữ.',
     words:['大肆','败坏','名誉','曝光','拘留']},

    {n:8,
     lines:[{sp:'男',zh:'众筹，说白了就是大家一起筹钱干一件事。世界上第一个让初创公司梦想成真的众筹网站是美国的Kickstarter。2011年，众筹模式进入中国，之后众筹平台越来越多，从慈善到图书出版，几乎跨越了所有领域。不过，由于国内用户希望尽快得到回报，项目进展一慢就发牢骚，迄今为止，众筹在国内还是一件做起来很吃力的事情。'}],
     q:'这段话主要谈的是什么？',qvn:'Đoạn nói chủ yếu bàn về điều gì?',
     opts:['怎样开一家众筹网站','Kickstarter的历史','怎样做慈善','众筹的概念、发展和在国内遇到的困难'],ans:3,
     why:'Nói định nghĩa (说白了就是……) → phát triển (Kickstarter, 2011 vào Trung Quốc, mọi lĩnh vực) → khó khăn trong nước (迄今为止……很吃力). Kickstarter và từ thiện chỉ là chi tiết.',
     words:['慈善','进展','牢骚','迄今为止','吃力']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bà nội muốn học cách nộp tiền điện bằng điện thoại, nhưng lo không an toàn.',
     a:{sp:'Bà',zh:'用手机交电费安全吗？我怕被人骗。',vn:'Nộp tiền điện bằng điện thoại có an toàn không? Bà sợ bị lừa.'},
     need:['Dùng 缴纳','Dùng 渠道'],
     sample:'奶奶，只要通过正规的渠道缴纳，就很安全。您用银行的官方软件，别点陌生的链接就行。',
     samplePy:'Nǎinai, zhǐyào tōngguò zhèngguī de qúdào jiǎonà, jiù hěn ānquán. Nín yòng yínháng de guānfāng ruǎnjiàn, bié diǎn mòshēng de liànjiē jiù xíng.',
     sampleVn:'Bà ơi, chỉ cần nộp qua kênh chính thống là rất an toàn. Bà dùng phần mềm chính thức của ngân hàng, đừng bấm vào đường link lạ là được.',
     tip:'Trấn an người lớn: điều kiện (只要……就……) → hướng dẫn cụ thể (用……，别……就行).'},

    {scene:'Bạn thân rủ em cùng mở một cửa hàng online bán đồ handmade.',
     a:{sp:'Bạn',zh:'我们一起在网上开个小店吧，你觉得怎么样？',vn:'Mình cùng mở một cửa hàng nhỏ trên mạng đi, cậu thấy sao?'},
     need:['Dùng 合伙','Dùng 初步'],
     sample:'好主意！我们可以合伙开，初步打算先卖自己做的手链，看看效果再说。',
     samplePy:'Hǎo zhǔyi! Wǒmen kěyǐ héhuǒ kāi, chūbù dǎsuan xiān mài zìjǐ zuò de shǒuliàn, kànkan xiàoguǒ zài shuō.',
     sampleVn:'Ý hay đấy! Bọn mình có thể hùn vốn mở chung, dự tính ban đầu bán vòng tay tự làm trước, xem hiệu quả thế nào rồi tính tiếp.',
     tip:'Đồng ý + đề xuất: 合伙 + V; 初步打算 + 先……，……再说 (tính sau).'},

    {scene:'Em trai cả ngày ôm điện thoại chơi game, mẹ nhờ em khuyên.',
     a:{sp:'Em trai',zh:'我就再玩一会儿，玩完这局就睡。',vn:'Em chơi thêm tí nữa thôi, xong ván này là em đi ngủ.'},
     need:['Dùng 上瘾','Dùng 与其……不如……'],
     sample:'你每天都这么说，已经上瘾了。与其整天玩游戏，不如周末跟我去打打球，生活也会更充实。',
     samplePy:'Nǐ měi tiān dōu zhème shuō, yǐjīng shàngyǐn le. Yǔqí zhěngtiān wán yóuxì, bùrú zhōumò gēn wǒ qù dǎda qiú, shēnghuó yě huì gèng chōngshí.',
     sampleVn:'Ngày nào em cũng nói thế, nghiện rồi đấy. Thay vì chơi game cả ngày, chi bằng cuối tuần đi đánh bóng với chị, cuộc sống cũng sẽ đủ đầy hơn.',
     tip:'Khuyên nhủ: chỉ ra vấn đề (已经上瘾了) → đưa phương án thay thế (与其……不如……).'},

    {scene:'Trong nhóm lớp, một người lạ tự xưng là giáo viên chủ nhiệm, yêu cầu mọi người chuyển tiền quỹ lớp. Một bạn hỏi em có nên chuyển không.',
     a:{sp:'Bạn',zh:'有个“老师”让我们交班费，要不要转账？',vn:'Có một "cô giáo" bảo bọn mình nộp quỹ lớp, có nên chuyển khoản không?'},
     need:['Dùng 冒充','Dùng 尚未'],
     sample:'先别转！这个号码尚未确认是不是老师的，很可能是有人冒充老师诈骗。我们先打电话问问老师吧。',
     samplePy:'Xiān bié zhuǎn! Zhège hàomǎ shàngwèi quèrèn shì bu shì lǎoshī de, hěn kěnéng shì yǒu rén màochōng lǎoshī zhàpiàn. Wǒmen xiān dǎ diànhuà wènwen lǎoshī ba.',
     sampleVn:'Đừng chuyển vội! Số này vẫn chưa xác nhận có phải của cô không, rất có thể là có người giả danh cô để lừa đảo. Mình gọi điện hỏi cô trước đã.',
     tip:'Cảnh báo: can ngăn ngay (先别……!) → lý do (尚未确认, 冒充) → cách xử lý an toàn.'},

    {scene:'Thầy chủ nhiệm hỏi em cảm nhận thế nào về việc học trực tuyến.',
     a:{sp:'Thầy',zh:'你觉得在网上学习怎么样？',vn:'Em thấy học trực tuyến thế nào?'},
     need:['Dùng 坦白地说','Dùng 乐趣'],
     sample:'坦白地说，在网上学习很自由，也不失乐趣，不过需要很强的自制力，不然很容易分心。',
     samplePy:'Tǎnbái de shuō, zài wǎngshàng xuéxí hěn zìyóu, yě bù shī lèqù, búguò xūyào hěn qiáng de zìzhìlì, bùrán hěn róngyì fēnxīn.',
     sampleVn:'Thành thật mà nói, học trực tuyến rất tự do, cũng không mất đi niềm vui, nhưng cần sức tự chủ rất cao, nếu không rất dễ mất tập trung.',
     tip:'Nêu ý kiến hai mặt: 坦白地说 → mặt tốt (不失乐趣) → 不过 mặt khó → 不然 hậu quả.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Tấm biển cảnh báo của công an dán ở sảnh ngân hàng.',
     a:'小心啊，有人会假装银行的人骗你钱！',b:'警惕冒充银行工作人员的电信诈骗。',better:'b',
     why:'Biển cảnh báo nơi công cộng dùng văn viết ngắn gọn, trang trọng: 警惕, 冒充, 电信诈骗. Câu a (小心啊, 假装, 骗你钱) là lời nói miệng.'},

    {scene:'Em nhắn tin khoe với bạn thân đôi giày mua được giá rẻ.',
     a:'我在网上买的鞋才一百块，太合算了！',b:'本人于网上购得鞋一双，价格甚为合算。',better:'a',
     why:'Nhắn tin bạn bè dùng khẩu ngữ (才一百块, 太……了). Câu b (本人, 于, 购得, 甚为) như văn bản hành chính, rất gượng.'},

    {scene:'Bản tin thời sự trên truyền hình đưa tin về một vụ lừa đảo.',
     a:'有几个人弄了个假网站骗钱，现在被抓起来了。',b:'一家皮包公司冒充国家部门开设假网站，大肆进行诈骗，现已被警方依法刑事拘留。',better:'b',
     why:'Bản tin dùng văn viết chính xác, trang trọng như câu bài khoá: 冒充, 大肆进行诈骗, 依法刑事拘留. Câu a (弄了个, 被抓起来了) là kể chuyện miệng.'},

    {scene:'Bạn thân vừa bị lừa mất tiền khi mua hàng trên mạng, em an ủi bạn.',
     a:'别难过了，就当买个教训，以后我们一起小心点儿。',b:'请节哀顺变，望今后提高防范意识，谨防上当受骗。',better:'a',
     why:'An ủi bạn thân cần lời gần gũi (别难过了, 就当买个教训). Câu b quá khách sáo, lại dùng sai 节哀顺变 (chỉ dùng khi chia buồn có người mất).'},

    {scene:'Em viết báo cáo điều tra (bài 写一写) nộp cho cô giáo.',
     a:'我问了好多人，他们差不多都天天上网上好久。',b:'通过这次调查，我发现大部分人每天上网时间超过三个小时。',better:'b',
     why:'Báo cáo điều tra là văn viết, cần số liệu rõ ràng (超过三个小时) và câu kết luận (通过这次调查，我发现……). Câu a (好多人, 上好久) mơ hồ, khẩu ngữ.'},

    {scene:'Em nói chuyện với ông nội, người muốn học dùng WeChat.',
     a:'爷爷，我教您用微信吧，特别简单，以后您就能跟我视频了！',b:'爷爷，请您务必掌握微信的使用方法，以便日后进行视频通话。',better:'a',
     why:'Nói với ông trong nhà dùng lời thân mật, động viên (特别简单, 就能跟我视频了). Câu b (务必, 以便日后) nghe như ra lệnh, rất xa cách.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Bảng có 4 dòng: những thay đổi Internet mang lại → gọi vốn cộng đồng mua nhà → khái niệm và sự phát triển của 众筹 → vì sao người ta lo lắng. Bấm ghi âm rồi kể khoảng 3 phút.',
  outline: [
    {step:'互联网走进我们的生活以后，生活发生了哪些变化？', cue:'①自如地…… ②生活不再单调…… ③将……变成了可能 ④网上学习、找工作、设立个人网站 ⑤合伙集资买房', words:['日新月异','沉闷','充实','交易','任意','乐趣','设立','虚荣','珍贵','合伙','筹备','成员']},
    {step:'简述人们如何利用网络平台筹备买房？', cue:'①众筹购房的好处…… ②微信是众筹的主要渠道…… ③众筹的参与者…… ④大家在交流平台上谈……', words:['初步','合算','渠道','审查','缴纳','摸索','层次','阶层','政策','欢乐','上瘾']},
    {step:'众筹和众筹网站', cue:'①什么是众筹？ ②众筹在中国的发展怎么样？', words:['慈善','股份','股东','钞票','苦尽甘来','尴尬','抛弃','坦白','急功近利','进展','牢骚','迄今为止','吃力']},
    {step:'人们为什么对互联网也会心存担忧？', cue:'①假网站 ②网络黑客', words:['家喻户晓','无穷无尽','罪犯','盗窃','公然','冒充','大肆','诈骗','拘留','败坏','名誉','曝光']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa (thay đổi → gọi vốn mua nhà → khái niệm và phát triển của 众筹 → lo lắng)?',
    'Ý 1 có đủ 5 gợi ý (自如地通话…, 不再单调沉闷, 将……变成了可能, 学习·找工作·设立网站, 合伙集资买房) không?',
    'Ý 2 và ý 3 có nói được các con số quan trọng (rẻ hơn ít nhất 30%, đặt cọc 100 tệ, năm 2011, 120 tệ thành cổ đông) không?',
    'Ý 4 có nêu được hai ví dụ (trang web giả của công ty "ma", tin tặc đánh cắp tài khoản) và câu kết 爱不释手……心存担忧 không?',
    'Có dùng 任意 và 尚未 (hai điểm ngữ pháp) và kể bằng LỜI MÌNH (không đọc thuộc nguyên văn) không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 202–207) — đáp án theo đáp án sách
// (热身 không đưa vào; 练习5 đã thành luyện nói / kể lại; 写一写 = báo cáo điều tra → luyện viết;
//  注释2 · 练一练 "把6个小句组合成3个连贯的语段" → kho (cho sẵn vế đầu A/B/D, chọn vế đi tiếp C/E/F), như bài 31, 33;
//  篇章修辞 · 修辞(11) 夸张 · 练一练 "下列哪句没有使用夸张" → ab;
//  练习4 của bài này là 说一说语段中怎样使用夸张 (không phải 模仿造句) → mp với khung "把……夸张为……" theo đáp án sách, như bài 33;
//  扩展 · 词汇 (1) chọn từ pháp luật điền trống → kho; (2) chỉ là đoạn văn làm quen từ chính trị → chuyển thành kho điền 6 từ gạch chân;
//  bài này không có phần 病句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'参考提示词，用“任意”完成句子（注释1 · 练一练）', vn:'Tham khảo từ gợi ý, dùng 任意 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'利用GPS和电子地图可以实时显示出车辆的实际位置，并可＿＿，还可以还原、换图。（放大）', tu:'任意', dap:'利用GPS和电子地图可以实时显示出车辆的实际位置，并可任意放大，还可以还原、换图。',
      giai:'任意 + động từ gợi ý: 任意放大 = phóng to tuỳ ý (không bị giới hạn). 任意 là phó từ nên đứng ngay trước động từ, sau 可.'},
     {s:'联合国规定，官方正式使用的工作语言有六种，按英文字母排列顺序为：阿拉伯文、中文、英文、法文、俄文和西班牙文。六种语言同等有效，联大代表们发言时可以＿＿。（选用）', tu:'任意', dap:'联合国规定，官方正式使用的工作语言有六种，按英文字母排列顺序为：阿拉伯文、中文、英文、法文、俄文和西班牙文。六种语言同等有效，联大代表们发言时可以任意选用。',
      giai:'Sáu ngôn ngữ có hiệu lực như nhau → đại biểu có thể 任意选用 (tuỳ ý chọn dùng) một thứ tiếng. 任意 mang sắc thái tích cực: tự do, không bị hạn chế.'},
     {s:'把人视为自然界的主人，对自然＿＿，这种价值观念是绝对错误的。（改造）', tu:'任意', dap:'把人视为自然界的主人，对自然任意改造，这种价值观念是绝对错误的。',
      giai:'对自然任意改造 = tuỳ tiện cải tạo thiên nhiên — ở đây 任意 mang sắc thái tiêu cực (làm bừa, không theo quy luật). Cấu trúc 对 + đối tượng + 任意 + V.'}
   ]},

  {kieu:'kho', de:'请把下列6个小句组合成3个连贯的语段（注释2 · 尚未 · 练一练）', vn:'Ghép 6 câu nhỏ A–F thành 3 đoạn văn liền mạch (Chú thích 2 · 尚未 · Luyện tập). Mỗi đoạn cho sẵn câu đứng đầu (A, B, D) — chọn câu đi tiếp trong khung (C, E, F). Đáp án sách: (1) A E　(2) B C　(3) D F. Mẹo: A và E cùng khung 在于……（生活的全部意义在于……，在于……）; B và C nói về điện ảnh thời hậu chiến; D và F nói về sinh viên (大学阶段 → 大学生).',
   tu:['C 再差劲的电影都不必担心没有观众，这使制片公司和电影院老板笑逐颜开','E 在于不断地增加更多的知识','F 大学生即使谈恋爱成功率也不高'],
   cau:[
     {s:'A 生活的全部意义在于无穷地探索尚未知道的东西，＿＿。', dap:['E 在于不断地增加更多的知识']},
     {s:'B 战后，人们生活已有所好转，由于电视尚未出现，电影便成了当时最热门的娱乐，＿＿。', dap:['C 再差劲的电影都不必担心没有观众，这使制片公司和电影院老板笑逐颜开']},
     {s:'D 由于大学阶段学业尚未完成，事业尚未确立，经济上也尚未独立，＿＿。', dap:['F 大学生即使谈恋爱成功率也不高']}
   ]},

  {kieu:'ab', de:'下列哪句没有使用夸张修辞手法（篇章修辞 · 修辞（11）夸张 · 练一练）', vn:'Tu từ văn bản · Tu từ (11) KHOA TRƯƠNG / PHÓNG ĐẠI (夸张 — cố ý miêu tả sự vật to hơn hoặc nhỏ hơn thực tế để làm nổi bật bản chất, đặc điểm và gợi trí tưởng tượng; vd trong bài: 哪怕你在天涯海角). Luyện tập: câu nào dưới đây KHÔNG dùng phép phóng đại? — đáp án sách: (2)',
   cau:[
     {s:'下列哪句没有使用夸张修辞手法？',
      opts:['我们年轻的时候攒点儿钱多难呐，真是恨不得一分钱掰成两半花。','密密麻麻的雨点从天空噼里啪啦落了下来。','阿姨说张大夫医术高明，看见他，病就好了一半。'], ans:1,
      giai:'Đáp án sách: (2). Câu (2) chỉ tả thật cơn mưa bằng từ láy và từ tượng thanh (密密麻麻, 噼里啪啦), không phóng đại. Câu (1) phóng đại sự tằn tiện: một xu tiền "hận không thể bẻ làm đôi mà tiêu" (không thể bẻ đồng xu); câu (3) phóng đại tài của bác sĩ: vừa nhìn thấy ông ấy thì bệnh đã khỏi một nửa.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'沉闷', chu:'闷', ds:['烦闷','苦闷','郁闷','闷闷不乐']},
   cau:[
     {tu:'审查', chu:'审', dap:['审核','审阅','审美','审判'], them:['审批','审理','审议','审计','审问'],
      giai:'审 = xem xét kỹ, thẩm định (审核 = thẩm định, 审阅 = đọc duyệt, 审判 = xét xử, 审批 = xét duyệt phê chuẩn). 审美 (thẩm mỹ) cũng là 审 = đánh giá, thưởng thức cái đẹp.'},
     {tu:'缴纳', chu:'缴', dap:['缴费','收缴','缴获','缴税'], them:['缴款','上缴','补缴','缴清'],
      giai:'缴 = nộp, giao nộp (缴费 = nộp phí, 缴税 = nộp thuế, 上缴 = nộp lên cấp trên, 补缴 = nộp bù). Đáp án sách còn có 收缴, 缴获 (thu giữ, tịch thu — bắt đối phương phải nộp: 缴获武器).'},
     {tu:'股份', chu:'股', dap:['股东','股票','股民','勾股定理'], them:['股市','股价','炒股','控股','入股'],
      giai:'股 = cổ phần (股东 = cổ đông, 股票 = cổ phiếu, 股民 = nhà đầu tư chứng khoán, 炒股 = chơi chứng khoán). Riêng 勾股定理 (định lý Pythagore) thì 股 là cạnh góc vuông dài của tam giác vuông — cùng chữ, nghĩa khác, sách vẫn đưa vào.'},
     {tu:'诈骗', chu:'骗', dap:['欺骗','蒙骗','骗术','骗局'], them:['骗子','受骗','行骗','骗取','上当受骗'],
      giai:'骗 = lừa (欺骗 = lừa dối, 蒙骗 = lừa gạt, 骗术 = thủ đoạn lừa, 骗局 = trò lừa đảo, 骗子 = kẻ lừa đảo, 上当受骗 = mắc lừa).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'屋子里坐满了人，谁也不发表意见，＿＿。', tu:'沉闷', dap:'屋子里坐满了人，谁也不发表意见，气氛十分沉闷。',
      giai:'Không ai phát biểu → 气氛十分沉闷 (bầu không khí rất nặng nề). 沉闷 hay đi với 气氛.'},
     {s:'她每天忙个不停，＿＿。', tu:'充实', dap:'她每天忙个不停，生活得很充实。',
      giai:'Bận rộn cả ngày nhưng tích cực → 生活得很充实 (sống rất đủ đầy). Cấu trúc V + 得 + 很充实.'},
     {s:'那个魔术师太神奇了，你＿＿，他都能猜出来。', tu:'任意', dap:'那个魔术师太神奇了，你任意抽一张纸牌，他都能猜出来。',
      giai:'任意 + V + 一 + lượng từ + N (bất kỳ cái nào) … 都…… = dù rút lá nào ông ấy cũng đoán ra (điểm ngữ pháp 1).'},
     {s:'我跟合伙人一起＿＿。', tu:'筹备', dap:'我跟合伙人一起筹备这个重大项目。',
      giai:'筹备 + việc lớn (项目 / 会议 / 婚礼) = lên kế hoạch và chuẩn bị. 合伙人 = đối tác hùn vốn.'},
     {s:'在一些贫穷落后的偏远山区，＿＿。', tu:'尚未', dap:'在一些贫穷落后的偏远山区，网络尚未普及。',
      giai:'尚未 + V = vẫn chưa … (văn viết, điểm ngữ pháp 2): 网络尚未普及 = mạng vẫn chưa phổ biến. Không thêm 了 sau.'},
     {s:'他们这伙人＿＿，引起了公愤。', tu:'大肆', dap:'他们这伙人大肆捕杀野生动物，引起了公愤。',
      giai:'大肆 + hành vi xấu: 大肆捕杀野生动物 = trắng trợn săn giết động vật hoang dã → gây phẫn nộ của công chúng.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['充实','无穷无尽','上瘾','乐趣','沉闷'],
   cau:[
     {s:'旅游一改我们以往＿＿的生活，使它变得浪漫而＿＿；旅游不但可以让我们增长知识，旅行中的各种见闻还可以带给我们＿＿的快乐；因为旅行带给我们的＿＿多多，所以它是一件让人＿＿的事情。',
      dap:['沉闷','充实','无穷无尽','乐趣','上瘾']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['渠道','迄今为止','交易','缴纳','坦白'],
   cau:[
     {s:'有数据显示，＿＿，中国手机用户大约为12.4亿户，约占全国总人口的92%。手机在人们的生活中已经必不可少，如今打电话只是手机的多种功能之一，上网、看书、网上＿＿各种费用、用手机随时随地进行股票＿＿……，手机大大地方便了人们的生活。特别是有了微信以后，手机为人们交友、聊天开辟了新的＿＿，提供了新的方式。＿＿地说，我们已经离不开手机了。',
      dap:['迄今为止','缴纳','交易','渠道','坦白']}
   ]},

  {kieu:'mp', de:'请说一说下列语段中是怎样使用夸张的修辞方法的', vn:'Hãy nói xem các đoạn dưới đây dùng phép phóng đại (夸张) như thế nào — điền theo khung "把……夸张为……" (bài tập 4, đáp án theo sách). Phần 【】 là chỗ dùng 夸张.',
   cau:[
     {mau:'我住的房间，【只有巴掌这么大】。',khung:'把＿＿夸张为＿＿。',dap:['房间的面积小','巴掌的面积'],giai:'Phóng đại THU NHỎ: căn phòng nhỏ bị nói thành chỉ to bằng bàn tay. Đáp án sách: 把房间的面积小夸张为巴掌的面积。'},
     {mau:'他饿得【可以把一头大象吃下去】。',khung:'把＿＿夸张为＿＿。',dap:['他的饥饿程度','大象的体积'],giai:'Phóng đại PHÓNG TO: đói đến mức ăn được cả một con voi. Đáp án sách: 把他的饥饿程度夸张为大象的体积。'},
     {mau:'整个礼堂静得【连掉根针都能听见】。',khung:'把＿＿夸张为＿＿。',dap:['礼堂安静的程度','绣花针掉在地上的微小声音'],giai:'Khung Adj + 得 + 连……都…… để phóng đại mức độ yên tĩnh: nghe được cả tiếng kim thêu rơi xuống đất. Đáp án sách: 把礼堂安静的程度夸张为绣花针掉在地上的微小声音。'},
     {mau:'天热得【像下火一样】，柏油路都烤化了。',khung:'把＿＿夸张为＿＿。',dap:['天气炎热','下火'],giai:'Kết hợp so sánh (像……一样) với phóng đại: trời nóng như trút lửa, nhựa đường cũng chảy ra. Đáp án sách: 把天气炎热夸张为下火。'}
   ]},

  {kieu:'kho', de:'熟悉下列法律方面的词语，并选词填空（扩展 · 词汇 · 1）', vn:'Mở rộng · Từ vựng (1): làm quen các từ về PHÁP LUẬT rồi chọn từ điền vào chỗ trống — đáp án theo sách. 辩护 = bào chữa · 当事人 = đương sự · 诽谤 = phỉ báng, vu khống · 判决 = phán quyết · 宪法 = hiến pháp · 治安 = trị an, an ninh trật tự · 走私 = buôn lậu · 公证 = công chứng',
   tu:['辩护','当事人','诽谤','判决','宪法','治安','走私','公证'],
   cau:[
     {s:'现在很多年轻人在结婚前都要＿＿一下自己的婚前财产。', dap:['公证']},
     {s:'虽然他犯罪了，但他有权请律师为自己＿＿。', dap:['辩护']},
     {s:'你说的这些事完全是无中生有，这是对我的＿＿。', dap:['诽谤']},
     {s:'＿＿是国家的最高法，具有最高的法律效力，是其他立法工作的根据。', dap:['宪法']},
     {s:'他试图逃避海关检查，打算＿＿大批香烟入境。', dap:['走私']},
     {s:'案件审理结束，法官＿＿如下：甲方赔偿乙方的所有损失。', dap:['判决']},
     {s:'为了调查案情，警察走访了许多＿＿。', dap:['当事人']},
     {s:'这个区域的社会＿＿良好，从未发生过恶性案件。', dap:['治安']}
   ]},

  {kieu:'kho', de:'阅读语段，熟悉下列政治方面的词语（扩展 · 词汇 · 2）', vn:'Mở rộng · Từ vựng (2): đọc đoạn văn, làm quen các từ về CHÍNH TRỊ. Sách chỉ cho đoạn văn có gạch chân để làm quen (không có đáp án riêng) — ở đây chuyển thành bài điền lại đúng các từ gạch chân của sách. 政党 = chính đảng · 候选人 = ứng cử viên · 晋升 = thăng chức · 当选 = trúng cử · 行政 = hành chính · 任命 = bổ nhiệm',
   tu:['政党','候选人','晋升','当选','行政','任命'],
   cau:[
     {s:'在新一届总统选举中，两大＿＿各有一名＿＿，A党的候选人是刚刚＿＿为党主席的X先生，B党的候选人是一位女士，经过激烈的竞选，X先生＿＿为新一届总统，作为国家的最高＿＿长官，他＿＿了最高法院的院长。',
      dap:['政党','候选人','晋升','当选','行政','任命']}
   ]}
];
