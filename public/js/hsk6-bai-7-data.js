// ══════════════════════════════════════════
// DATA — HSK6 Bài 7: 我的人生我做主 (Tôi làm chủ cuộc đời tôi)
// 第二单元 不甘平庸 · Nguồn: HSK标准教程6上 (tr. 74–84) + đáp án sách
// Bài khoá: 我的人生我做主 (739字) · 45 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'做主',py:'zuò zhǔ',pos:'Động từ',vn:'làm chủ, tự quyết định',hv:'tố chủ',em:'🧭',lesson:1,
   explain:['Tự mình đưa ra quyết định, có quyền quyết định một việc (không phụ thuộc người khác).','Là động từ li hợp (做 + 主): có thể nói 做不了主, 做得了主, 替/为 + ai + 做主.'],
   usage:'Hay gặp: 自己做主, 我的人生我做主, 为/替……做主, 做不了主. Không mang tân ngữ trực tiếp phía sau: không nói 做主我的人生.',
   collo:['自己做主','为自己的人生做主','做不了主','替他做主'],
   ex_zh:'只有不断提升自己的决策能力，才能真正为自己的人生做主。',ex_py:'Zhǐyǒu búduàn tíshēng zìjǐ de juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',ex_vn:'Chỉ có không ngừng nâng cao năng lực ra quyết định của mình thì mới có thể thật sự làm chủ cuộc đời mình.',
   exList:[
     {zh:'只有不断提升自己的决策能力，才能真正为自己的人生做主。',py:'Zhǐyǒu búduàn tíshēng zìjǐ de juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',vn:'Chỉ có không ngừng nâng cao năng lực ra quyết định của mình thì mới có thể thật sự làm chủ cuộc đời mình.'},
     {zh:'这件事我做不了主，得问问我爸妈。',py:'Zhè jiàn shì wǒ zuò bu liǎo zhǔ, děi wènwen wǒ bà mā.',vn:'Việc này tớ không tự quyết được, phải hỏi bố mẹ tớ đã.'},
     {zh:'选什么专业是你自己的事，你自己做主吧。',py:'Xuǎn shénme zhuānyè shì nǐ zìjǐ de shì, nǐ zìjǐ zuò zhǔ ba.',vn:'Chọn ngành gì là chuyện của con, con tự quyết định đi.'}
   ],
   colloFull:[
     {zh:'自己做主',py:'zìjǐ zuò zhǔ',vn:'tự mình quyết định'},
     {zh:'为自己的人生做主',py:'wèi zìjǐ de rénshēng zuò zhǔ',vn:'làm chủ cuộc đời mình'},
     {zh:'做不了主',py:'zuò bu liǎo zhǔ',vn:'không quyết được'},
     {zh:'替他做主',py:'tì tā zuò zhǔ',vn:'quyết định thay anh ấy'},
     {zh:'当家做主',py:'dāng jiā zuò zhǔ',vn:'làm chủ (gia đình, đất nước)'}
   ],
   patterns:[
     {s:'为 / 替 + người/việc + 做主',m:'Làm chủ, quyết định thay cho …'},
     {s:'做得了主 / 做不了主',m:'Quyết được / không quyết được (bổ ngữ khả năng chen giữa)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện thi vào trường nào, bố mẹ để tôi tự quyết định.',answer:'考哪所大学的事，父母让我自己做主。',answerPy:'Kǎo nǎ suǒ dàxué de shì, fùmǔ ràng wǒ zìjǐ zuò zhǔ.',
      note:'Câu kiêm ngữ 让 + người + 自己做主; 做主 không mang tân ngữ phía sau.',pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi',prompt:'Việc lớn như vậy, một mình tôi không quyết được.',answer:'这么大的事，我一个人做不了主。',answerPy:'Zhème dà de shì, wǒ yí ge rén zuò bu liǎo zhǔ.',
      note:'Bổ ngữ khả năng 不了 chen vào giữa động từ li hợp: 做不了主.',pair:'Bổ ngữ khả năng V不了'}
   ]},

  {n:2,zh:'伤脑筋',py:'shāng nǎojīn',pos:'Cụm động từ (khẩu ngữ)',vn:'hao tổn tâm trí, đau đầu',hv:'thương não cân',em:'🤯',lesson:1,
   explain:['Khẩu ngữ: một việc khó giải quyết khiến người ta phải nghĩ ngợi nhiều, rất đau đầu.','Dùng như động từ (为……伤脑筋) hoặc như tính từ (真伤脑筋, 很伤脑筋的问题).'],
   usage:'Hay gặp: 为……伤脑筋, 真让人伤脑筋, 伤透了脑筋, 伤脑筋的事. Có thể tách: 伤透脑筋, 伤了不少脑筋.',
   collo:['为工作的事伤脑筋','真伤脑筋','伤透了脑筋','伤脑筋的问题'],
   ex_zh:'最近，小王正为工作的事伤脑筋。',ex_py:'Zuìjìn, Xiǎo Wáng zhèng wèi gōngzuò de shì shāng nǎojīn.',ex_vn:'Dạo gần đây, Tiểu Vương đang đau đầu vì chuyện công việc.',
   exList:[
     {zh:'最近，小王正为工作的事伤脑筋。',py:'Zuìjìn, Xiǎo Wáng zhèng wèi gōngzuò de shì shāng nǎojīn.',vn:'Dạo gần đây, Tiểu Vương đang đau đầu vì chuyện công việc.'},
     {zh:'为了选哪个专业，我伤透了脑筋，恨不得有人替我做主。',py:'Wèile xuǎn nǎge zhuānyè, wǒ shāngtòule nǎojīn, hènbude yǒu rén tì wǒ zuò zhǔ.',vn:'Để chọn ngành nào, tôi đau hết cả đầu, chỉ mong có ai đó quyết định thay mình.'},
     {zh:'弟弟成天玩游戏，真让妈妈伤脑筋。',py:'Dìdi chéngtiān wán yóuxì, zhēn ràng māma shāng nǎojīn.',vn:'Em trai suốt ngày chơi game, thật khiến mẹ đau đầu.'}
   ],
   colloFull:[
     {zh:'为工作的事伤脑筋',py:'wèi gōngzuò de shì shāng nǎojīn',vn:'đau đầu vì chuyện công việc'},
     {zh:'真伤脑筋',py:'zhēn shāng nǎojīn',vn:'thật đau đầu'},
     {zh:'伤透了脑筋',py:'shāngtòule nǎojīn',vn:'đau hết cả đầu'},
     {zh:'伤脑筋的问题',py:'shāng nǎojīn de wèntí',vn:'vấn đề nan giải'},
     {zh:'让人伤脑筋',py:'ràng rén shāng nǎojīn',vn:'khiến người ta đau đầu'}
   ],
   patterns:[
     {s:'为 + việc + 伤脑筋',m:'Đau đầu vì chuyện gì'},
     {s:'……真让人伤脑筋',m:'… thật khiến người ta đau đầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mấy hôm nay cô ấy đang đau đầu vì chuyện thuê nhà.',answer:'这几天她正为租房子的事伤脑筋。',answerPy:'Zhè jǐ tiān tā zhèng wèi zū fángzi de shì shāng nǎojīn.',
      note:'正 + 为……伤脑筋: đang (tiến hành). 为 + việc đặt TRƯỚC 伤脑筋.',pair:'正 + V (đang)'},
     {promptLang:'vi',prompt:'Không những bài toán này khó, mà thời gian cũng không đủ, thật khiến người ta đau đầu.',answer:'这道题不但很难，而且时间也不够，真让人伤脑筋。',answerPy:'Zhè dào tí búdàn hěn nán, érqiě shíjiān yě bú gòu, zhēn ràng rén shāng nǎojīn.',
      note:'不但……而且…… (tăng tiến); 让人伤脑筋 = khiến người ta đau đầu.',pair:'不但……而且……'}
   ]},

  {n:3,zh:'枯燥',py:'kūzào',pos:'Tính từ',vn:'khô khan, nhàm chán, đơn điệu',hv:'khô táo',em:'😑',lesson:1,
   explain:['Đơn điệu, không có gì thú vị, khiến người ta chán (nói về công việc, cuộc sống, bài giảng, văn chương…).','Nghĩa gốc: khô, khô héo; nay chủ yếu dùng nghĩa bóng.'],
   usage:'Hay gặp: 枯燥无味, 枯燥乏味, 工作枯燥, 内容枯燥, 枯燥而且压力大. Trái nghĩa: 有趣, 生动.',
   collo:['枯燥无味','工作枯燥','内容枯燥','枯燥的生活'],
   ex_zh:'他一直做会计，成天和数字打交道，枯燥而且压力大。',ex_py:'Tā yìzhí zuò kuàijì, chéngtiān hé shùzì dǎ jiāodao, kūzào érqiě yālì dà.',ex_vn:'Anh ấy làm kế toán suốt, cả ngày giao du với những con số, vừa nhàm chán vừa áp lực lớn.',
   exList:[
     {zh:'他一直做会计，成天和数字打交道，枯燥而且压力大。',py:'Tā yìzhí zuò kuàijì, chéngtiān hé shùzì dǎ jiāodao, kūzào érqiě yālì dà.',vn:'Anh ấy làm kế toán suốt, cả ngày giao du với những con số, vừa nhàm chán vừa áp lực lớn.'},
     {zh:'这本书的内容太枯燥了，我看了几页就睡着了。',py:'Zhè běn shū de nèiróng tài kūzào le, wǒ kànle jǐ yè jiù shuìzháo le.',vn:'Nội dung cuốn sách này khô khan quá, tôi đọc được vài trang đã ngủ mất.'},
     {zh:'背单词固然枯燥，可是不背就学不好外语。',py:'Bèi dāncí gùrán kūzào, kěshì bú bèi jiù xué bu hǎo wàiyǔ.',vn:'Học thuộc từ vựng quả là nhàm chán, nhưng không học thuộc thì không học tốt ngoại ngữ được.'}
   ],
   colloFull:[
     {zh:'枯燥无味',py:'kūzào wúwèi',vn:'khô khan vô vị'},
     {zh:'工作枯燥',py:'gōngzuò kūzào',vn:'công việc nhàm chán'},
     {zh:'内容枯燥',py:'nèiróng kūzào',vn:'nội dung khô khan'},
     {zh:'枯燥的生活',py:'kūzào de shēnghuó',vn:'cuộc sống đơn điệu'},
     {zh:'枯燥乏味',py:'kūzào fáwèi',vn:'tẻ nhạt'}
   ],
   patterns:[
     {s:'……枯燥而且……',m:'Vừa nhàm chán lại còn … (nối hai tính từ)'},
     {s:'A 固然枯燥，可是……',m:'A tuy nhàm chán thật, nhưng … (固然 bài 5)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc này tuy nhàm chán, nhưng lương khá cao.',answer:'这份工作虽然很枯燥，但是薪水挺高的。',answerPy:'Zhè fèn gōngzuò suīrán hěn kūzào, dànshì xīnshui tǐng gāo de.',
      note:'虽然……但是……; 薪水 là từ bài 5 HSK 6.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Thầy giảng sinh động đến mức một bài học khô khan cũng trở nên rất thú vị.',answer:'老师讲得那么生动，连枯燥的课也变得很有意思。',answerPy:'Lǎoshī jiǎng de nàme shēngdòng, lián kūzào de kè yě biàn de hěn yǒu yìsi.',
      note:'连……也……: ngay cả … cũng …; 枯燥 làm định ngữ + 的.',pair:'连……也……'}
   ]},

  {n:4,zh:'擅长',py:'shàncháng',pos:'Động từ',vn:'giỏi về, sở trường về',hv:'thiện trường',em:'🎯',lesson:1,
   explain:['Có sở trường, đặc biệt giỏi về một lĩnh vực, một kỹ năng nào đó.','Mang tân ngữ là danh từ hoặc động từ: 擅长数学, 擅长唱歌; có thể dùng 擅长于.'],
   usage:'Hay gặp: 擅长……, 不擅长……, 真正擅长什么, 最擅长的是…… Văn phong hơi trang trọng hơn 拿手 (bài 1).',
   collo:['擅长数学','擅长写作','不擅长交际','最擅长的'],
   ex_zh:'他不确定自己真正擅长什么。',ex_py:'Tā bú quèdìng zìjǐ zhēnzhèng shàncháng shénme.',ex_vn:'Anh ấy không chắc bản thân thật sự giỏi cái gì.',
   exList:[
     {zh:'他对艺术、心理学都感兴趣，可不确定自己真正擅长什么。',py:'Tā duì yìshù, xīnlǐxué dōu gǎn xìngqù, kě bú quèdìng zìjǐ zhēnzhèng shàncháng shénme.',vn:'Anh ấy đều hứng thú với nghệ thuật, tâm lý học, nhưng không chắc mình thật sự giỏi cái gì.'},
     {zh:'我不太擅长跟陌生人打交道，一说话就紧张。',py:'Wǒ bú tài shàncháng gēn mòshēngrén dǎ jiāodao, yì shuōhuà jiù jǐnzhāng.',vn:'Tôi không giỏi giao tiếp với người lạ lắm, hễ nói chuyện là căng thẳng.'},
     {zh:'妈妈最擅长做红烧鱼，那可是她的拿手菜。',py:'Māma zuì shàncháng zuò hóngshāoyú, nà kě shì tā de náshǒu cài.',vn:'Mẹ giỏi nhất là làm cá kho, đó chính là món sở trường của mẹ.'}
   ],
   colloFull:[
     {zh:'擅长数学',py:'shàncháng shùxué',vn:'giỏi toán'},
     {zh:'擅长写作',py:'shàncháng xiězuò',vn:'giỏi viết văn'},
     {zh:'不擅长交际',py:'bú shàncháng jiāojì',vn:'không giỏi giao tiếp'},
     {zh:'最擅长的',py:'zuì shàncháng de',vn:'sở trường nhất'},
     {zh:'擅长于绘画',py:'shàncháng yú huìhuà',vn:'giỏi hội hoạ'}
   ],
   patterns:[
     {s:'擅长 + N / V',m:'Giỏi về … (擅长英语 / 擅长唱歌)'},
     {s:'……最擅长的是……',m:'Điều … giỏi nhất là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không biết mình giỏi gì thì hãy thử nhiều việc khác nhau.',answer:'如果不知道自己擅长什么，就多尝试一些不同的事情。',answerPy:'Rúguǒ bù zhīdào zìjǐ shàncháng shénme, jiù duō chángshì yìxiē bùtóng de shìqing.',
      note:'如果……就……; 尝试 ôn bài 4 HSK 6.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Bạn ấy không những giỏi vẽ mà còn giỏi chơi đàn piano.',answer:'她不仅擅长画画，还擅长弹钢琴。',answerPy:'Tā bùjǐn shàncháng huà huà, hái shàncháng tán gāngqín.',
      note:'不仅……还……: không những … mà còn …; 擅长 + động từ.',pair:'不仅……还……'}
   ]},

  {n:5,zh:'成本',py:'chéngběn',pos:'Danh từ',vn:'giá thành, chi phí',hv:'thành bản',em:'💰',lesson:1,
   explain:['Toàn bộ chi phí bỏ ra để sản xuất một sản phẩm hoặc làm một việc gì.','Nghĩa mở rộng: cái giá phải trả (时间成本 = chi phí thời gian, 经济成本 = chi phí kinh tế).'],
   usage:'Hay gặp: 降低成本, 成本高/低, 生产成本, 时间成本, 付出……成本. Không nói 成本很贵 — nói 成本很高.',
   collo:['降低成本','成本太高','时间成本','生产成本'],
   ex_zh:'他怕万一选错了，要付出很大的时间成本和经济成本。',ex_py:'Tā pà wànyī xuǎncuò le, yào fùchū hěn dà de shíjiān chéngběn hé jīngjì chéngběn.',ex_vn:'Anh ấy sợ lỡ chọn sai thì phải trả giá lớn về thời gian và tiền bạc.',
   exList:[
     {zh:'他怕万一选错了，要付出很大的时间成本和经济成本。',py:'Tā pà wànyī xuǎncuò le, yào fùchū hěn dà de shíjiān chéngběn hé jīngjì chéngběn.',vn:'Anh ấy sợ lỡ chọn sai thì phải trả giá lớn về thời gian và tiền bạc.'},
     {zh:'工厂想方设法降低成本，产品价格才降了下来。',py:'Gōngchǎng xiǎngfāng-shèfǎ jiàngdī chéngběn, chǎnpǐn jiàgé cái jiàngle xiàlái.',vn:'Nhà máy tìm mọi cách hạ giá thành, giá sản phẩm mới giảm xuống được.'},
     {zh:'每天在路上花四个小时，时间成本太高了。',py:'Měi tiān zài lù shang huā sì ge xiǎoshí, shíjiān chéngběn tài gāo le.',vn:'Mỗi ngày mất bốn tiếng trên đường, chi phí thời gian quá cao.'}
   ],
   colloFull:[
     {zh:'降低成本',py:'jiàngdī chéngběn',vn:'hạ giá thành'},
     {zh:'成本太高',py:'chéngběn tài gāo',vn:'chi phí quá cao'},
     {zh:'时间成本',py:'shíjiān chéngběn',vn:'chi phí thời gian'},
     {zh:'生产成本',py:'shēngchǎn chéngběn',vn:'chi phí sản xuất'},
     {zh:'经济成本',py:'jīngjì chéngběn',vn:'chi phí kinh tế'}
   ],
   patterns:[
     {s:'降低 / 控制 + 成本',m:'Hạ / kiểm soát chi phí'},
     {s:'付出 + (很大的) + ……成本',m:'Trả một cái giá (lớn) về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi hạ được giá thành thì sản phẩm mới bán chạy được.',answer:'只有降低成本，产品才能卖得好。',answerPy:'Zhǐyǒu jiàngdī chéngběn, chǎnpǐn cái néng mài de hǎo.',
      note:'只有……才……: điều kiện duy nhất; động từ đi với 成本 là 降低.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nhà xa trường quá, chi phí thời gian mỗi ngày quá cao.',answer:'家离学校太远了，每天的时间成本太高了。',answerPy:'Jiā lí xuéxiào tài yuǎn le, měi tiān de shíjiān chéngběn tài gāo le.',
      note:'离 chỉ khoảng cách; 成本 dùng 高 / 低, không dùng 贵.',pair:'A 离 B + 远/近'}
   ]},

  {n:6,zh:'急躁',py:'jízào',pos:'Tính từ',vn:'nôn nóng, nóng nảy, bồn chồn',hv:'cấp táo',em:'😤',lesson:1,
   explain:['Gặp việc không vừa ý thì dễ bực bội, nóng nảy; hoặc muốn làm gấp mà không suy nghĩ kỹ.','Chỉ tính cách hoặc trạng thái tâm lý nhất thời.'],
   usage:'Hay gặp: 变得急躁, 性格急躁, 急躁的情绪, 别急躁, 急躁、紧张. Trái nghĩa: 冷静, 耐心.',
   collo:['变得急躁','性格急躁','急躁的情绪','不要急躁'],
   ex_zh:'为此他变得急躁、紧张、顾虑重重。',ex_py:'Wèi cǐ tā biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',ex_vn:'Vì thế anh ấy trở nên bồn chồn, căng thẳng, lo âu trăm bề.',
   exList:[
     {zh:'为此他变得急躁、紧张、顾虑重重。',py:'Wèi cǐ tā biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',vn:'Vì thế anh ấy trở nên bồn chồn, căng thẳng, lo âu trăm bề.'},
     {zh:'他性格急躁，一遇到不顺心的事就发脾气。',py:'Tā xìnggé jízào, yí yùdào bú shùnxīn de shì jiù fā píqi.',vn:'Anh ấy tính nóng nảy, hễ gặp chuyện không vừa ý là nổi cáu.'},
     {zh:'学外语不能急躁，得一步一步来。',py:'Xué wàiyǔ bù néng jízào, děi yí bù yí bù lái.',vn:'Học ngoại ngữ không được nôn nóng, phải từng bước một.'}
   ],
   colloFull:[
     {zh:'变得急躁',py:'biàn de jízào',vn:'trở nên nôn nóng'},
     {zh:'性格急躁',py:'xìnggé jízào',vn:'tính nóng nảy'},
     {zh:'急躁的情绪',py:'jízào de qíngxù',vn:'tâm trạng bồn chồn'},
     {zh:'不要急躁',py:'bú yào jízào',vn:'đừng nôn nóng'},
     {zh:'克服急躁',py:'kèfú jízào',vn:'khắc phục tính nóng vội'}
   ],
   patterns:[
     {s:'变得 + 急躁',m:'Trở nên nôn nóng'},
     {s:'……不能急躁，得……',m:'… không được nóng vội, phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng gần kỳ thi, cậu ấy càng trở nên nôn nóng.',answer:'离考试越近，他就变得越急躁。',answerPy:'Lí kǎoshì yuè jìn, tā jiù biàn de yuè jízào.',
      note:'越……越……: càng … càng …; 变得 + tính từ.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Gặp chuyện gì cũng đừng nóng vội, bình tĩnh lại rồi hãy quyết định.',answer:'遇到什么事都别急躁，冷静下来再做决定。',answerPy:'Yùdào shénme shì dōu bié jízào, lěngjìng xiàlái zài zuò juédìng.',
      note:'Đại từ nghi vấn + 都 (phiếm chỉ); 冷静下来 — bổ ngữ xu hướng nghĩa bóng.',pair:'什么……都……'}
   ]},

  {n:7,zh:'顾虑',py:'gùlǜ',pos:'Danh từ',vn:'nỗi lo âu, sự lo lắng',hv:'cố lự',em:'😟',lesson:1,
   explain:['Những lo lắng, e ngại (sợ bất lợi cho mình hoặc người khác) khiến người ta không dám nói, không dám làm.','Cũng dùng như động từ: 顾虑……(e ngại điều gì).'],
   usage:'Hay gặp: 顾虑重重, 有顾虑, 打消顾虑, 消除顾虑, 没有顾虑. 顾虑重重 = lo trước lo sau, băn khoăn trăm bề.',
   collo:['顾虑重重','打消顾虑','有顾虑','消除顾虑'],
   ex_zh:'为此他变得急躁、紧张、顾虑重重。',ex_py:'Wèi cǐ tā biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',ex_vn:'Vì thế anh ấy trở nên bồn chồn, căng thẳng, lo âu trăm bề.',
   exList:[
     {zh:'为此他变得急躁、紧张、顾虑重重。',py:'Wèi cǐ tā biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',vn:'Vì thế anh ấy trở nên bồn chồn, căng thẳng, lo âu trăm bề.'},
     {zh:'你有什么顾虑就说出来，别憋在心里。',py:'Nǐ yǒu shénme gùlǜ jiù shuō chūlái, bié biē zài xīn li.',vn:'Cậu có băn khoăn gì thì cứ nói ra, đừng giữ trong lòng.'},
     {zh:'老师的一番话打消了我的顾虑。',py:'Lǎoshī de yì fān huà dǎxiāole wǒ de gùlǜ.',vn:'Một phen trò chuyện của thầy đã xua tan nỗi lo của tôi.'}
   ],
   colloFull:[
     {zh:'顾虑重重',py:'gùlǜ chóngchóng',vn:'lo trước lo sau'},
     {zh:'打消顾虑',py:'dǎxiāo gùlǜ',vn:'xua tan băn khoăn'},
     {zh:'有顾虑',py:'yǒu gùlǜ',vn:'có điều e ngại'},
     {zh:'消除顾虑',py:'xiāochú gùlǜ',vn:'xoá bỏ lo lắng'},
     {zh:'毫无顾虑',py:'háowú gùlǜ',vn:'không chút e ngại'}
   ],
   patterns:[
     {s:'打消 / 消除 + ……的顾虑',m:'Xua tan / xoá bỏ nỗi lo của …'},
     {s:'顾虑重重',m:'Lo trước lo sau (làm vị ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cậu cứ lo trước lo sau mãi thì sẽ bỏ lỡ cơ hội.',answer:'如果你总是顾虑重重，就会错过机会。',answerPy:'Rúguǒ nǐ zǒngshì gùlǜ chóngchóng, jiù huì cuòguò jīhuì.',
      note:'如果……就……; 顾虑重重 làm vị ngữ, không cần 很.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Sau khi nghe bố giải thích, mọi băn khoăn của tôi đều tan biến.',answer:'听了爸爸的解释以后，我的顾虑都打消了。',answerPy:'Tīngle bàba de jiěshì yǐhòu, wǒ de gùlǜ dōu dǎxiāo le.',
      note:'Câu bị động ý nghĩa (không có 被): 顾虑 + 打消了.',pair:'Câu bị động ý nghĩa'}
   ]},

  {n:8,zh:'过度',py:'guòdù',pos:'Tính từ',vn:'quá mức, quá độ',hv:'quá độ',em:'⚠️',lesson:1,
   explain:['Vượt quá giới hạn thích hợp.','Thường làm trạng ngữ (过度悲观, 过度使用) hoặc định ngữ (过度的紧张).'],
   usage:'Hay gặp: 过度悲观, 过度紧张, 过度劳累, 过度使用手机, 饮酒过度. Phân biệt 过渡 (guòdù — quá độ, chuyển tiếp) — cùng âm, khác chữ.',
   collo:['过度悲观','过度劳累','过度紧张','过度使用'],
   ex_zh:'对自己缺乏信心，对未来过度悲观致使小王出现以上现象。',ex_py:'Duì zìjǐ quēfá xìnxīn, duì wèilái guòdù bēiguān zhìshǐ Xiǎo Wáng chūxiàn yǐshàng xiànxiàng.',ex_vn:'Thiếu tự tin vào bản thân, bi quan quá mức về tương lai đã khiến Tiểu Vương xuất hiện những hiện tượng trên.',
   exList:[
     {zh:'对自己缺乏信心，对未来过度悲观致使小王出现以上现象。',py:'Duì zìjǐ quēfá xìnxīn, duì wèilái guòdù bēiguān zhìshǐ Xiǎo Wáng chūxiàn yǐshàng xiànxiàng.',vn:'Thiếu tự tin vào bản thân, bi quan quá mức về tương lai đã khiến Tiểu Vương xuất hiện những hiện tượng trên.'},
     {zh:'他因为过度劳累病倒了。',py:'Tā yīnwèi guòdù láolèi bìngdǎo le.',vn:'Anh ấy ngã bệnh vì làm việc quá sức.'},
     {zh:'过度使用手机，对眼睛伤害很大。',py:'Guòdù shǐyòng shǒujī, duì yǎnjing shānghài hěn dà.',vn:'Dùng điện thoại quá mức gây hại rất lớn cho mắt.'}
   ],
   colloFull:[
     {zh:'过度悲观',py:'guòdù bēiguān',vn:'bi quan quá mức'},
     {zh:'过度劳累',py:'guòdù láolèi',vn:'làm việc quá sức'},
     {zh:'过度紧张',py:'guòdù jǐnzhāng',vn:'căng thẳng quá độ'},
     {zh:'过度使用',py:'guòdù shǐyòng',vn:'sử dụng quá mức'},
     {zh:'饮食过度',py:'yǐnshí guòdù',vn:'ăn uống quá độ'}
   ],
   patterns:[
     {s:'过度 + tính từ / động từ',m:'… quá mức (过度悲观 / 过度使用)'},
     {s:'因为过度…… + kết quả xấu',m:'Vì … quá mức mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì căng thẳng quá mức, cậu ấy thi không tốt.',answer:'由于过度紧张，他没考好。',answerPy:'Yóuyú guòdù jǐnzhāng, tā méi kǎohǎo.',
      note:'由于 + nguyên nhân (văn viết hơn 因为); 过度 đứng trước tính từ.',pair:'由于……'},
     {promptLang:'vi',prompt:'Không những không được lo lắng quá mức, mà còn phải học cách thư giãn.',answer:'不但不能过度担心，而且还要学会放松。',answerPy:'Búdàn bù néng guòdù dānxīn, érqiě hái yào xuéhuì fàngsōng.',
      note:'不但……而且……; 过度 + động từ tâm lý 担心.',pair:'不但……而且……'}
   ]},

  {n:9,zh:'致使',py:'zhìshǐ',pos:'Động từ / Liên từ',vn:'làm cho, khiến cho; đến nỗi, cho nên',hv:'trí sử',em:'➡️',lesson:1,
   explain:['Động từ: do nguyên nhân nào đó mà làm cho (một kết quả xảy ra): A 致使 B + V.','Liên từ: đứng đầu phân câu sau, nêu kết quả do nguyên nhân ở trên gây ra — kết quả thường TIÊU CỰC, không mong muốn. Văn viết.'],
   usage:'Hay gặp: (由于/因为)……，致使……; A 致使 B…… Không dùng cho kết quả tốt: không nói 致使成绩提高了.',
   collo:['致使失败','致使……出现','由于……，致使……','致使森林减少'],
   ex_zh:'因为地址不清楚，致使信件无法送达。',ex_py:'Yīnwèi dìzhǐ bù qīngchu, zhìshǐ xìnjiàn wúfǎ sòngdá.',ex_vn:'Vì địa chỉ không rõ ràng nên thư không thể gửi tới nơi.',
   exList:[
     {zh:'他的粗心致使试验失败。',py:'Tā de cūxīn zhìshǐ shìyàn shībài.',vn:'Sự cẩu thả của anh ấy khiến thí nghiệm thất bại.'},
     {zh:'由于新产品研发能力有限，致使企业逐渐失去竞争力。',py:'Yóuyú xīn chǎnpǐn yánfā nénglì yǒuxiàn, zhìshǐ qǐyè zhújiàn shīqù jìngzhēnglì.',vn:'Do năng lực nghiên cứu phát triển sản phẩm mới có hạn nên doanh nghiệp dần mất sức cạnh tranh.'},
     {zh:'因为地址不清楚，致使信件无法送达。',py:'Yīnwèi dìzhǐ bù qīngchu, zhìshǐ xìnjiàn wúfǎ sòngdá.',vn:'Vì địa chỉ không rõ ràng nên thư không thể gửi tới nơi.'}
   ],
   colloFull:[
     {zh:'致使失败',py:'zhìshǐ shībài',vn:'dẫn đến thất bại'},
     {zh:'致使……出现',py:'zhìshǐ …… chūxiàn',vn:'khiến … xuất hiện'},
     {zh:'由于……，致使……',py:'yóuyú ……, zhìshǐ ……',vn:'do … nên …'},
     {zh:'致使森林减少',py:'zhìshǐ sēnlín jiǎnshǎo',vn:'khiến rừng bị thu hẹp'},
     {zh:'致使交通中断',py:'zhìshǐ jiāotōng zhōngduàn',vn:'khiến giao thông bị gián đoạn'}
   ],
   patterns:[
     {s:'A（nguyên nhân）+ 致使 + B + kết quả',m:'A khiến B … (động từ)'},
     {s:'由于 / 因为……，致使……',m:'Do …, đến nỗi … (liên từ, kết quả xấu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do mưa lớn liên tục mấy ngày, nhiều chuyến bay bị huỷ.',answer:'由于连日大雨，致使很多航班被取消了。',answerPy:'Yóuyú liánrì dàyǔ, zhìshǐ hěn duō hángbān bèi qǔxiāo le.',
      note:'由于……，致使……: kết quả tiêu cực; 被 + V (bị động).',pair:'被 (câu bị động)'},
     {promptLang:'vi',prompt:'Chính vì cậu ấy quá tự mãn mà dẫn đến thua trận chung kết.',answer:'正是因为他太骄傲了，致使决赛输了。',answerPy:'Zhèng shì yīnwèi tā tài jiāo\'ào le, zhìshǐ juésài shū le.',
      note:'正是因为…… nhấn mạnh nguyên nhân; 致使 dẫn kết quả không mong muốn.',pair:'正是因为……'}
   ]},

  {n:10,zh:'终身',py:'zhōngshēn',pos:'Danh từ',vn:'cả đời, suốt đời',hv:'chung thân',em:'♾️',lesson:1,
   explain:['Cả cuộc đời, suốt đời (thường nói về bản thân một người).','Hay làm trạng ngữ hoặc định ngữ: 终身悔恨, 终身学习, 终身大事.'],
   usage:'Hay gặp: 终身悔恨, 终身难忘, 终身学习, 终身大事 (chuyện hôn nhân), 终身受益. Văn viết hơn 一辈子.',
   collo:['终身悔恨','终身难忘','终身学习','终身大事'],
   ex_zh:'一旦选错，终身悔恨，甚至会觉得人生都没有希望了。',ex_py:'Yídàn xuǎncuò, zhōngshēn huǐhèn, shènzhì huì juéde rénshēng dōu méiyǒu xīwàng le.',ex_vn:'Một khi chọn sai sẽ hối hận cả đời, thậm chí còn thấy cuộc đời chẳng còn hy vọng gì.',
   exList:[
     {zh:'一旦选错，终身悔恨，甚至会觉得人生都没有希望了。',py:'Yídàn xuǎncuò, zhōngshēn huǐhèn, shènzhì huì juéde rénshēng dōu méiyǒu xīwàng le.',vn:'Một khi chọn sai sẽ hối hận cả đời, thậm chí còn thấy cuộc đời chẳng còn hy vọng gì.'},
     {zh:'老师的那番话让我终身受益。',py:'Lǎoshī de nà fān huà ràng wǒ zhōngshēn shòuyì.',vn:'Lời dạy ấy của thầy khiến tôi được lợi suốt đời.'},
     {zh:'在知识更新这么快的时代，每个人都需要终身学习。',py:'Zài zhīshi gēngxīn zhème kuài de shídài, měi ge rén dōu xūyào zhōngshēn xuéxí.',vn:'Trong thời đại tri thức đổi mới nhanh như vậy, ai cũng cần học tập suốt đời.'}
   ],
   colloFull:[
     {zh:'终身悔恨',py:'zhōngshēn huǐhèn',vn:'hối hận cả đời'},
     {zh:'终身难忘',py:'zhōngshēn nánwàng',vn:'suốt đời khó quên'},
     {zh:'终身学习',py:'zhōngshēn xuéxí',vn:'học tập suốt đời'},
     {zh:'终身大事',py:'zhōngshēn dàshì',vn:'chuyện trăm năm (hôn nhân)'},
     {zh:'终身受益',py:'zhōngshēn shòuyì',vn:'được lợi cả đời'}
   ],
   patterns:[
     {s:'终身 + V (悔恨 / 难忘 / 学习)',m:'… suốt đời'},
     {s:'让 + người + 终身……',m:'Khiến ai … cả đời'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần gặp gỡ ấy khiến tôi suốt đời khó quên.',answer:'那次相遇让我终身难忘。',answerPy:'Nà cì xiāngyù ràng wǒ zhōngshēn nánwàng.',
      note:'Câu kiêm ngữ 让 + người + 终身难忘.',pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi',prompt:'Dù bận đến đâu cũng phải học tập suốt đời.',answer:'不管多忙，都要终身学习。',answerPy:'Bùguǎn duō máng, dōu yào zhōngshēn xuéxí.',
      note:'不管 + 多 + tính từ, 都……: dù … đến mấy cũng ….',pair:'不管……都……'}
   ]},

  {n:11,zh:'悔恨',py:'huǐhèn',pos:'Động từ',vn:'hối hận, ân hận',hv:'hối hận',em:'😣',lesson:1,
   explain:['Hối tiếc và tự trách mình rất nhiều vì việc đã làm sai.','Nặng và trang trọng hơn 后悔; thường đi với 终身, 万分, 不已.'],
   usage:'Hay gặp: 终身悔恨, 悔恨不已, 悔恨的泪水, 感到悔恨. Tiếng Việt "hối hận" = 后悔 (thường ngày); 悔恨 mức độ nặng hơn, văn viết.',
   collo:['终身悔恨','悔恨不已','悔恨的泪水','感到悔恨'],
   ex_zh:'一旦选错，终身悔恨。',ex_py:'Yídàn xuǎncuò, zhōngshēn huǐhèn.',ex_vn:'Một khi chọn sai sẽ hối hận cả đời.',
   exList:[
     {zh:'我无法承受这个结果；一旦选错，终身悔恨。',py:'Wǒ wúfǎ chéngshòu zhège jiéguǒ; yídàn xuǎncuò, zhōngshēn huǐhèn.',vn:'Tôi không chịu nổi kết quả này; một khi chọn sai sẽ hối hận cả đời.'},
     {zh:'想起当年对父母说的那些话，他悔恨不已。',py:'Xiǎngqǐ dāngnián duì fùmǔ shuō de nàxiē huà, tā huǐhèn bùyǐ.',vn:'Nhớ lại những lời năm ấy đã nói với bố mẹ, anh ấy ân hận khôn nguôi.'},
     {zh:'她流下了悔恨的泪水，决心重新开始。',py:'Tā liúxiàle huǐhèn de lèishuǐ, juéxīn chóngxīn kāishǐ.',vn:'Cô ấy rơi những giọt nước mắt ân hận, quyết tâm làm lại từ đầu.'}
   ],
   colloFull:[
     {zh:'终身悔恨',py:'zhōngshēn huǐhèn',vn:'hối hận cả đời'},
     {zh:'悔恨不已',py:'huǐhèn bùyǐ',vn:'ân hận khôn nguôi'},
     {zh:'悔恨的泪水',py:'huǐhèn de lèishuǐ',vn:'nước mắt ân hận'},
     {zh:'感到悔恨',py:'gǎndào huǐhèn',vn:'cảm thấy ân hận'},
     {zh:'无限悔恨',py:'wúxiàn huǐhèn',vn:'ân hận vô cùng'}
   ],
   patterns:[
     {s:'悔恨不已',m:'Ân hận khôn nguôi (不已 = không thôi)'},
     {s:'对 / 为 + việc + 感到悔恨',m:'Cảm thấy ân hận vì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giá mà lúc đầu nghe lời mẹ thì bây giờ đã không phải ân hận như thế.',answer:'要是当初听妈妈的话，现在就不会这么悔恨了。',answerPy:'Yàoshi dāngchū tīng māma de huà, xiànzài jiù bú huì zhème huǐhèn le.',
      note:'要是……就……: giả thiết trái sự thật; 当初 ôn bài 6.',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Anh ấy ân hận khôn nguôi vì đã không chăm sóc tốt cho ông bà.',answer:'他为没有照顾好爷爷奶奶而悔恨不已。',answerPy:'Tā wèi méiyǒu zhàogù hǎo yéye nǎinai ér huǐhèn bùyǐ.',
      note:'为……而……: vì … mà … (văn viết).',pair:'为……而……'}
   ]},

  {n:12,zh:'类似',py:'lèisì',pos:'Động từ',vn:'tương tự, giống',hv:'loại tự',em:'🟰',lesson:1,
   explain:['Gần giống, na ná nhau.','Hay làm định ngữ: 类似的问题, 类似小王这样的年轻人; không có dạng 很类似 nhiều như 相似.'],
   usage:'Hay gặp: 类似……的……, 类似的情况, 类似于……, 与……类似. Khác 相似 (thường làm vị ngữ: 两人长得很相似).',
   collo:['类似的情况','类似小王这样的人','与……类似','类似于'],
   ex_zh:'类似小王这样的年轻人并非少数。',ex_py:'Lèisì Xiǎo Wáng zhèyàng de niánqīngrén bìngfēi shǎoshù.',ex_vn:'Những người trẻ giống như Tiểu Vương không phải là số ít.',
   exList:[
     {zh:'其实，类似小王这样的年轻人并非少数。',py:'Qíshí, lèisì Xiǎo Wáng zhèyàng de niánqīngrén bìngfēi shǎoshù.',vn:'Thật ra, những người trẻ giống như Tiểu Vương không phải là số ít.'},
     {zh:'以后再遇到类似的问题，你就知道怎么办了。',py:'Yǐhòu zài yùdào lèisì de wèntí, nǐ jiù zhīdào zěnme bàn le.',vn:'Sau này gặp lại vấn đề tương tự, cậu sẽ biết phải làm thế nào.'},
     {zh:'越南的中秋节习俗与中国的类似。',py:'Yuènán de Zhōngqiū Jié xísú yǔ Zhōngguó de lèisì.',vn:'Phong tục Tết Trung thu của Việt Nam tương tự như của Trung Quốc.'}
   ],
   colloFull:[
     {zh:'类似的情况',py:'lèisì de qíngkuàng',vn:'tình huống tương tự'},
     {zh:'类似小王这样的人',py:'lèisì Xiǎo Wáng zhèyàng de rén',vn:'người giống như Tiểu Vương'},
     {zh:'与……类似',py:'yǔ …… lèisì',vn:'tương tự với …'},
     {zh:'类似于',py:'lèisì yú',vn:'tương tự như'},
     {zh:'类似的经历',py:'lèisì de jīnglì',vn:'trải nghiệm tương tự'}
   ],
   patterns:[
     {s:'类似 + N + 这样的 + N',m:'… giống như … (类似小王这样的年轻人)'},
     {s:'A 与 / 跟 B 类似',m:'A tương tự B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tránh xảy ra chuyện tương tự, trường đã đưa ra quy định mới.',answer:'为了避免发生类似的事情，学校出台了新的规定。',answerPy:'Wèile bìmiǎn fāshēng lèisì de shìqing, xuéxiào chūtáile xīn de guīdìng.',
      note:'为了 + mục đích đặt đầu câu; 类似 làm định ngữ + 的.',pair:'为了……'},
     {promptLang:'vi',prompt:'Nếu cậu cũng từng có trải nghiệm tương tự thì sẽ hiểu cảm giác của tớ.',answer:'如果你也有过类似的经历，就会明白我的感受。',answerPy:'Rúguǒ nǐ yě yǒuguo lèisì de jīnglì, jiù huì míngbai wǒ de gǎnshòu.',
      note:'V + 过 (đã từng); 如果……就…….',pair:'V + 过'}
   ]},

  {n:13,zh:'并非',py:'bìngfēi',pos:'Động từ',vn:'không phải (là), hoàn toàn không phải',hv:'tịnh phi',em:'🚫',lesson:1,
   explain:['Nghĩa là "并不是": 并 đứng trước từ phủ định 非 để TĂNG CƯỜNG ngữ khí phủ định.','Thường dùng để bác bỏ một cách nghĩ, một nhận định có sẵn; văn phong viết.'],
   usage:'Hay gặp: 并非少数, 并非坏事, 并非如此, 并非……而是……, 事实并非…… Không thêm 是 sau 并非 (không nói 并非是 trong văn chuẩn mực).',
   collo:['并非少数','并非坏事','并非如此','并非易事'],
   ex_zh:'犯些小错并非坏事，它会增加我们的心灵免疫力。',ex_py:'Fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì.',ex_vn:'Phạm vài lỗi nhỏ hoàn toàn không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta.',
   exList:[
     {zh:'类似小王这样的年轻人并非少数。',py:'Lèisì Xiǎo Wáng zhèyàng de niánqīngrén bìngfēi shǎoshù.',vn:'Những người trẻ giống như Tiểu Vương không phải là số ít.'},
     {zh:'原本英明的决定今天看来可能并非如此了。',py:'Yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',vn:'Quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.'},
     {zh:'真相其实并非跟你想象的一样。',py:'Zhēnxiàng qíshí bìngfēi gēn nǐ xiǎngxiàng de yíyàng.',vn:'Sự thật thực ra hoàn toàn không giống như cậu tưởng tượng.'}
   ],
   colloFull:[
     {zh:'并非少数',py:'bìngfēi shǎoshù',vn:'không phải số ít'},
     {zh:'并非坏事',py:'bìngfēi huàishì',vn:'không phải chuyện xấu'},
     {zh:'并非如此',py:'bìngfēi rúcǐ',vn:'không phải như vậy'},
     {zh:'并非易事',py:'bìngfēi yìshì',vn:'không phải việc dễ'},
     {zh:'并非……而是……',py:'bìngfēi …… ér shì ……',vn:'không phải … mà là …'}
   ],
   patterns:[
     {s:'A + 并非 + B',m:'A hoàn toàn không phải là B (bác bỏ)'},
     {s:'并非……，而是……',m:'Không phải … mà là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học giỏi tiếng Trung không phải việc dễ, nhưng chỉ cần kiên trì thì sẽ làm được.',answer:'学好汉语并非易事，但只要坚持，就能做到。',answerPy:'Xuéhǎo Hànyǔ bìngfēi yìshì, dàn zhǐyào jiānchí, jiù néng zuòdào.',
      note:'并非 + danh từ (易事); 只要……就…… (điều kiện đủ).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cậu ấy không phải không muốn giúp cậu, mà là thật sự không có thời gian.',answer:'他并非不想帮你，而是实在没有时间。',answerPy:'Tā bìngfēi bù xiǎng bāng nǐ, ér shì shízài méiyǒu shíjiān.',
      note:'并非……而是……: bác bỏ ý trước, khẳng định ý sau.',pair:'不是……而是……'}
   ]},

  {n:14,zh:'精确',py:'jīngquè',pos:'Tính từ',vn:'chính xác (đến từng chi tiết)',hv:'tinh xác',em:'🎯',lesson:1,
   explain:['Rất chính xác, tỉ mỉ, không sai lệch chút nào.','Mức độ cao hơn 准确; hay dùng với số liệu, đo đạc, tính toán, phán đoán.'],
   usage:'Hay gặp: 精确的判断力, 精确的数字, 精确计算, 精确到……. 精确到秒 = chính xác đến từng giây.',
   collo:['精确的判断力','精确计算','精确的数据','精确到小数点后两位'],
   ex_zh:'我的智慧来自精确的判断力。',ex_py:'Wǒ de zhìhuì láizì jīngquè de pànduànlì.',ex_vn:'Trí tuệ của tôi đến từ khả năng phán đoán chính xác.',
   exList:[
     {zh:'——你的智慧从哪里来？——来自精确的判断力。',py:'—— Nǐ de zhìhuì cóng nǎlǐ lái? —— Láizì jīngquè de pànduànlì.',vn:'— Trí tuệ của ông từ đâu mà có? — Từ khả năng phán đoán chính xác.'},
     {zh:'这次实验的数据必须精确，一点儿也不能马虎。',py:'Zhè cì shíyàn de shùjù bìxū jīngquè, yìdiǎnr yě bù néng mǎhu.',vn:'Số liệu của thí nghiệm lần này phải chính xác, không được qua loa chút nào.'},
     {zh:'这块表能精确到秒。',py:'Zhè kuài biǎo néng jīngquè dào miǎo.',vn:'Chiếc đồng hồ này có thể chính xác đến từng giây.'}
   ],
   colloFull:[
     {zh:'精确的判断力',py:'jīngquè de pànduànlì',vn:'khả năng phán đoán chính xác'},
     {zh:'精确计算',py:'jīngquè jìsuàn',vn:'tính toán chính xác'},
     {zh:'精确的数据',py:'jīngquè de shùjù',vn:'số liệu chính xác'},
     {zh:'精确到小数点后两位',py:'jīngquè dào xiǎoshùdiǎn hòu liǎng wèi',vn:'chính xác đến hai chữ số thập phân'},
     {zh:'非常精确',py:'fēicháng jīngquè',vn:'cực kỳ chính xác'}
   ],
   patterns:[
     {s:'精确 + 到 + đơn vị',m:'Chính xác đến … (精确到秒)'},
     {s:'精确的 + 判断 / 数据 / 计算',m:'… chính xác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn có khả năng phán đoán chính xác thì phải tích luỹ nhiều kinh nghiệm.',answer:'要想有精确的判断力，就得多积累经验。',answerPy:'Yào xiǎng yǒu jīngquè de pànduànlì, jiù děi duō jīlěi jīngyàn.',
      note:'要想……就得……: muốn … thì phải …; 多 + V (làm nhiều).',pair:'要想……就得……'},
     {promptLang:'vi',prompt:'Kết quả này tính toán chính xác hơn cái lúc nãy nhiều.',answer:'这个结果比刚才那个计算得精确多了。',answerPy:'Zhège jiéguǒ bǐ gāngcái nàge jìsuàn de jīngquè duō le.',
      note:'Câu so sánh 比 + bổ ngữ trình độ: A 比 B + V得 + adj + 多了.',pair:'比 + ……多了'}
   ]},

  {n:15,zh:'天生',py:'tiānshēng',pos:'Tính từ',vn:'bẩm sinh, trời sinh',hv:'thiên sinh',em:'👶',lesson:1,
   explain:['Sinh ra đã có, tự nhiên mà có, không phải do học tập hay rèn luyện.','Làm vị ngữ (是天生的), định ngữ (天生的……) hoặc trạng ngữ (天生就……).'],
   usage:'Hay gặp: 能力不是天生的, 天生就……, 天生的好嗓子, 天生我材必有用. Tiếng Việt "thiên sinh" ít dùng — nói "bẩm sinh, trời sinh".',
   collo:['不是天生的','天生就会','天生的','天生聪明'],
   ex_zh:'做决定是一种能力，而能力不是天生的。',ex_py:'Zuò juédìng shì yì zhǒng nénglì, ér nénglì bú shì tiānshēng de.',ex_vn:'Ra quyết định là một năng lực, mà năng lực thì không phải bẩm sinh.',
   exList:[
     {zh:'做决定是一种能力，而能力不是天生的，是通过实践和挫折得来的。',py:'Zuò juédìng shì yì zhǒng nénglì, ér nénglì bú shì tiānshēng de, shì tōngguò shíjiàn hé cuòzhé délái de.',vn:'Ra quyết định là một năng lực, mà năng lực không phải bẩm sinh, nó có được qua thực tiễn và vấp ngã.'},
     {zh:'谁也不是天生就会说话的，都是慢慢学会的。',py:'Shéi yě bú shì tiānshēng jiù huì shuōhuà de, dōu shì mànmàn xuéhuì de.',vn:'Chẳng ai sinh ra đã biết nói, đều là từ từ học được.'},
     {zh:'她天生一副好嗓子，一开口就把大家迷住了。',py:'Tā tiānshēng yí fù hǎo sǎngzi, yì kāikǒu jiù bǎ dàjiā mízhù le.',vn:'Cô ấy trời sinh một giọng hát hay, vừa cất tiếng đã làm mọi người mê mẩn.'}
   ],
   colloFull:[
     {zh:'不是天生的',py:'bú shì tiānshēng de',vn:'không phải bẩm sinh'},
     {zh:'天生就会',py:'tiānshēng jiù huì',vn:'sinh ra đã biết'},
     {zh:'天生的',py:'tiānshēng de',vn:'bẩm sinh'},
     {zh:'天生聪明',py:'tiānshēng cōngming',vn:'thông minh bẩm sinh'},
     {zh:'天生丽质',py:'tiānshēng lìzhì',vn:'đẹp tự nhiên'}
   ],
   patterns:[
     {s:'……是天生的 / 不是天生的',m:'… là / không phải bẩm sinh'},
     {s:'天生 + 就 + V',m:'Sinh ra đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tự tin không phải bẩm sinh mà là rèn luyện mà có.',answer:'自信不是天生的，而是锻炼出来的。',answerPy:'Zìxìn bú shì tiānshēng de, ér shì duànliàn chūlái de.',
      note:'不是……而是……; V + 出来 = tạo ra, rèn ra.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Dù cậu có năng khiếu bẩm sinh thì cũng phải cố gắng.',answer:'即使你有天生的才能，也得努力。',answerPy:'Jíshǐ nǐ yǒu tiānshēng de cáinéng, yě děi nǔlì.',
      note:'即使……也……: giả thiết nhượng bộ.',pair:'即使……也……'}
   ]},

  {n:16,zh:'挫折',py:'cuòzhé',pos:'Động từ',vn:'thất bại, vấp ngã, trắc trở',hv:'toả chiết',em:'🪨',lesson:1,
   explain:['Sách xếp là động từ (làm cho thất bại, cản trở), nhưng thực tế thường dùng như DANH TỪ: sự thất bại, vấp váp.','Hay đi với 遇到, 经历, 经受, 面对.'],
   usage:'Hay gặp: 遇到挫折, 经历挫折, 受到挫折, 不怕挫折, 实践和挫折. Nhẹ hơn 失败 — chỉ những trắc trở trên đường đi.',
   collo:['遇到挫折','经历挫折','不怕挫折','受到挫折'],
   ex_zh:'能力是通过实践和挫折得来的。',ex_py:'Nénglì shì tōngguò shíjiàn hé cuòzhé délái de.',ex_vn:'Năng lực có được qua thực tiễn và vấp ngã.',
   exList:[
     {zh:'能力不是天生的，是通过实践和挫折得来的。',py:'Nénglì bú shì tiānshēng de, shì tōngguò shíjiàn hé cuòzhé délái de.',vn:'Năng lực không phải bẩm sinh, nó có được qua thực tiễn và vấp ngã.'},
     {zh:'人的一生中总会遇到一些挫折。',py:'Rén de yìshēng zhōng zǒng huì yùdào yìxiē cuòzhé.',vn:'Trong đời người kiểu gì cũng gặp vài lần vấp ngã.'},
     {zh:'经历过这次挫折，他反而变得更成熟了。',py:'Jīnglìguo zhè cì cuòzhé, tā fǎn\'ér biàn de gèng chéngshú le.',vn:'Trải qua lần vấp ngã này, anh ấy ngược lại trở nên chín chắn hơn.'}
   ],
   colloFull:[
     {zh:'遇到挫折',py:'yùdào cuòzhé',vn:'gặp trắc trở'},
     {zh:'经历挫折',py:'jīnglì cuòzhé',vn:'trải qua vấp ngã'},
     {zh:'不怕挫折',py:'bú pà cuòzhé',vn:'không sợ thất bại'},
     {zh:'受到挫折',py:'shòudào cuòzhé',vn:'bị vấp ngã'},
     {zh:'挫折感',py:'cuòzhégǎn',vn:'cảm giác thất bại'}
   ],
   patterns:[
     {s:'遇到 / 经历 / 受到 + 挫折',m:'Gặp / trải qua / bị vấp ngã'},
     {s:'在挫折面前 + ……',m:'Trước thất bại, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp vấp ngã thì đừng nản lòng, cùng lắm thì làm lại từ đầu.',answer:'遇到挫折别灰心，大不了从头再来。',answerPy:'Yùdào cuòzhé bié huīxīn, dàbuliǎo cóngtóu zài lái.',
      note:'大不了 (bài 6): cùng lắm thì; 灰心 = nản lòng.',pair:'大不了'},
     {promptLang:'vi',prompt:'Chỉ có trải qua vấp ngã, con người mới thật sự trưởng thành.',answer:'只有经历过挫折，人才能真正成长。',answerPy:'Zhǐyǒu jīnglìguo cuòzhé, rén cái néng zhēnzhèng chéngzhǎng.',
      note:'只有……才……; chú ý 人才 ở đây là 人 + 才, không phải từ 人才.',pair:'只有……才……'}
   ]},

  {n:17,zh:'意志',py:'yìzhì',pos:'Danh từ',vn:'ý chí',hv:'ý chí',em:'💪',lesson:1,
   explain:['Quyết tâm tự giác đặt ra mục tiêu và vượt khó khăn để thực hiện.','Hay đi với 坚定, 坚强; 意志力 = sức mạnh ý chí.'],
   usage:'Hay gặp: 坚定的意志, 意志坚强, 意志力, 磨炼意志, 增强意志力. Trùng Hán–Việt "ý chí".',
   collo:['坚定的意志','意志坚强','意志力','磨炼意志'],
   ex_zh:'在这个过程中，人同时具有了坚定的意志力和敏锐的判断力。',ex_py:'Zài zhège guòchéng zhōng, rén tóngshí jùyǒule jiāndìng de yìzhìlì hé mǐnruì de pànduànlì.',ex_vn:'Trong quá trình ấy, con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén.',
   exList:[
     {zh:'在这个过程中，人同时具有了坚定的意志力和敏锐的判断力。',py:'Zài zhège guòchéng zhōng, rén tóngshí jùyǒule jiāndìng de yìzhìlì hé mǐnruì de pànduànlì.',vn:'Trong quá trình ấy, con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén.'},
     {zh:'跑马拉松不光靠体力，更要靠意志。',py:'Pǎo mǎlāsōng bù guāng kào tǐlì, gèng yào kào yìzhì.',vn:'Chạy marathon không chỉ dựa vào thể lực mà còn phải dựa vào ý chí.'},
     {zh:'军训虽然很苦，但能磨炼我们的意志。',py:'Jūnxùn suīrán hěn kǔ, dàn néng móliàn wǒmen de yìzhì.',vn:'Huấn luyện quân sự tuy vất vả nhưng có thể tôi luyện ý chí của chúng ta.'}
   ],
   colloFull:[
     {zh:'坚定的意志',py:'jiāndìng de yìzhì',vn:'ý chí kiên định'},
     {zh:'意志坚强',py:'yìzhì jiānqiáng',vn:'ý chí kiên cường'},
     {zh:'意志力',py:'yìzhìlì',vn:'sức mạnh ý chí'},
     {zh:'磨炼意志',py:'móliàn yìzhì',vn:'tôi luyện ý chí'},
     {zh:'增强意志力',py:'zēngqiáng yìzhìlì',vn:'tăng cường ý chí'}
   ],
   patterns:[
     {s:'磨炼 / 增强 + 意志(力)',m:'Tôi luyện / tăng cường ý chí'},
     {s:'靠意志 + V',m:'Dựa vào ý chí mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không những phải có mục tiêu, mà còn phải có ý chí kiên định.',answer:'不但要有目标，而且要有坚定的意志。',answerPy:'Búdàn yào yǒu mùbiāo, érqiě yào yǒu jiāndìng de yìzhì.',
      note:'不但……而且……; 坚定 là tính từ đi với 意志.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Chính nhờ ý chí kiên cường, cô ấy mới vượt qua được bệnh tật.',answer:'正是靠着坚强的意志，她才战胜了疾病。',answerPy:'Zhèng shì kàozhe jiānqiáng de yìzhì, tā cái zhànshèngle jíbìng.',
      note:'正是……才……: nhấn mạnh nguyên nhân duy nhất.',pair:'正是……才……'}
   ]},

  {n:18,zh:'敏锐',py:'mǐnruì',pos:'Tính từ',vn:'nhạy bén, sắc bén',hv:'mẫn nhuệ',em:'🦅',lesson:1,
   explain:['(Cảm giác, ánh mắt, tư duy) nhanh nhạy và sắc bén, nhận ra vấn đề rất nhanh.','Hay đi với 判断力, 眼光, 观察力, 嗅觉 (khứu giác — nghĩa bóng).'],
   usage:'Hay gặp: 敏锐的判断力, 眼光敏锐, 敏锐地发现, 思维敏锐. Khác 敏感 (nhạy cảm, dễ bị tác động).',
   collo:['敏锐的判断力','眼光敏锐','敏锐地发现','思维敏锐'],
   ex_zh:'人同时具有了坚定的意志力和敏锐的判断力。',ex_py:'Rén tóngshí jùyǒule jiāndìng de yìzhìlì hé mǐnruì de pànduànlì.',ex_vn:'Con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén.',
   exList:[
     {zh:'人同时具有了坚定的意志力和敏锐的判断力。',py:'Rén tóngshí jùyǒule jiāndìng de yìzhìlì hé mǐnruì de pànduànlì.',vn:'Con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén.'},
     {zh:'这位记者很敏锐，一下子就发现了问题所在。',py:'Zhè wèi jìzhě hěn mǐnruì, yíxiàzi jiù fāxiànle wèntí suǒzài.',vn:'Nhà báo này rất nhạy bén, lập tức phát hiện ra vấn đề nằm ở đâu.'},
     {zh:'做生意要有敏锐的眼光，及早抓住机遇。',py:'Zuò shēngyi yào yǒu mǐnruì de yǎnguāng, jízǎo zhuāzhù jīyù.',vn:'Làm ăn phải có con mắt nhạy bén, sớm nắm bắt thời cơ.'}
   ],
   colloFull:[
     {zh:'敏锐的判断力',py:'mǐnruì de pànduànlì',vn:'khả năng phán đoán nhạy bén'},
     {zh:'眼光敏锐',py:'yǎnguāng mǐnruì',vn:'con mắt sắc bén'},
     {zh:'敏锐地发现',py:'mǐnruì de fāxiàn',vn:'nhạy bén phát hiện'},
     {zh:'思维敏锐',py:'sīwéi mǐnruì',vn:'tư duy nhạy bén'},
     {zh:'敏锐的观察力',py:'mǐnruì de guānchálì',vn:'óc quan sát nhạy bén'}
   ],
   patterns:[
     {s:'敏锐的 + 判断力 / 眼光 / 观察力',m:'… nhạy bén'},
     {s:'敏锐地 + V (发现 / 察觉)',m:'Nhạy bén nhận ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo rất nhạy bén, vừa nhìn đã biết em có tâm sự.',answer:'老师很敏锐，一看就知道我有心事。',answerPy:'Lǎoshī hěn mǐnruì, yí kàn jiù zhīdào wǒ yǒu xīnshì.',
      note:'一……就……: vừa … đã …; chú ý biến điệu yí kàn.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tư duy của cậu ấy nhạy bén đến mức ngay cả giáo viên cũng khen ngợi.',answer:'他的思维敏锐得连老师都称赞他。',answerPy:'Tā de sīwéi mǐnruì de lián lǎoshī dōu chēngzàn tā.',
      note:'Bổ ngữ trình độ adj + 得 + 连……都……; 思维 ôn bài 5.',pair:'连……都……'}
   ]},

  {n:19,zh:'畏惧',py:'wèijù',pos:'Động từ',vn:'sợ, khiếp sợ, e sợ',hv:'uý cụ',em:'😨',lesson:1,
   explain:['Sợ hãi (điều gì), văn viết, trang trọng hơn 害怕 / 怕.','Mang tân ngữ: 畏惧困难, 畏惧失败; phủ định hay gặp: 不畏惧, 毫不畏惧, 无所畏惧.'],
   usage:'Hay gặp: 不畏惧付出和失败, 毫不畏惧, 无所畏惧, 畏惧心理. Trong khẩu ngữ hằng ngày nói 怕.',
   collo:['不畏惧失败','毫不畏惧','无所畏惧','畏惧困难'],
   ex_zh:'不畏惧付出和失败，勇于承担责任，这就是成长。',ex_py:'Bú wèijù fùchū hé shībài, yǒngyú chéngdān zérèn, zhè jiù shì chéngzhǎng.',ex_vn:'Không sợ bỏ công sức và thất bại, dám gánh vác trách nhiệm, đó chính là trưởng thành.',
   exList:[
     {zh:'不畏惧付出和失败，勇于承担责任，这就是成长。',py:'Bú wèijù fùchū hé shībài, yǒngyú chéngdān zérèn, zhè jiù shì chéngzhǎng.',vn:'Không sợ bỏ công sức và thất bại, dám gánh vác trách nhiệm, đó chính là trưởng thành.'},
     {zh:'面对强大的对手，他毫不畏惧。',py:'Miànduì qiángdà de duìshǒu, tā háobù wèijù.',vn:'Đối mặt với đối thủ mạnh, anh ấy không hề nao núng.'},
     {zh:'只有不畏惧失败，才会在实践中获得经验。',py:'Zhǐyǒu bú wèijù shībài, cái huì zài shíjiàn zhōng huòdé jīngyàn.',vn:'Chỉ có không sợ thất bại mới thu được kinh nghiệm trong thực tiễn.'}
   ],
   colloFull:[
     {zh:'不畏惧失败',py:'bú wèijù shībài',vn:'không sợ thất bại'},
     {zh:'毫不畏惧',py:'háobù wèijù',vn:'không hề sợ hãi'},
     {zh:'无所畏惧',py:'wúsuǒ wèijù',vn:'không sợ gì cả'},
     {zh:'畏惧困难',py:'wèijù kùnnan',vn:'sợ khó khăn'},
     {zh:'畏惧心理',py:'wèijù xīnlǐ',vn:'tâm lý e sợ'}
   ],
   patterns:[
     {s:'不 / 毫不 + 畏惧 + N',m:'Không (hề) sợ …'},
     {s:'面对……，毫不畏惧',m:'Đối mặt với … không hề sợ hãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù gặp phải khó khăn lớn đến đâu, anh ấy cũng không hề sợ hãi.',answer:'无论遇到多大的困难，他都毫不畏惧。',answerPy:'Wúlùn yùdào duō dà de kùnnan, tā dōu háobù wèijù.',
      note:'无论……都……; 毫不 + động từ hai âm tiết.',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Sở dĩ cô ấy thành công là vì cô ấy chưa bao giờ sợ thất bại.',answer:'她之所以成功，是因为她从来不畏惧失败。',answerPy:'Tā zhī suǒyǐ chénggōng, shì yīnwèi tā cónglái bú wèijù shībài.',
      note:'之所以……是因为……: kết quả trước, nguyên nhân sau.',pair:'之所以……是因为……'}
   ]},

  {n:20,zh:'勇于',py:'yǒngyú',pos:'Động từ',vn:'dám, dũng cảm (làm gì)',hv:'dũng vu',em:'🦁',lesson:1,
   explain:['Dũng cảm làm việc gì, không lùi bước; 于 ở đây = 在 (về mặt).','Chỉ mang tân ngữ là ĐỘNG TỪ / cụm động từ: 勇于承担, 勇于创新, 勇于面对.'],
   usage:'Hay gặp: 勇于承担责任, 勇于承认错误, 勇于创新, 勇于面对困难. Không nói 勇于困难 (thiếu động từ).',
   collo:['勇于承担责任','勇于承认错误','勇于创新','勇于面对'],
   ex_zh:'我们应该勇于承认自己的错误。',ex_py:'Wǒmen yīnggāi yǒngyú chéngrèn zìjǐ de cuòwù.',ex_vn:'Chúng ta nên dám thừa nhận sai lầm của mình.',
   exList:[
     {zh:'不畏惧付出和失败，勇于承担责任，这就是成长。',py:'Bú wèijù fùchū hé shībài, yǒngyú chéngdān zérèn, zhè jiù shì chéngzhǎng.',vn:'Không sợ bỏ công sức và thất bại, dám gánh vác trách nhiệm, đó chính là trưởng thành.'},
     {zh:'我们应该勇于承认自己的错误。',py:'Wǒmen yīnggāi yǒngyú chéngrèn zìjǐ de cuòwù.',vn:'Chúng ta nên dám thừa nhận sai lầm của mình.'},
     {zh:'年轻人要勇于创新，不要怕犯错。',py:'Niánqīngrén yào yǒngyú chuàngxīn, bú yào pà fàn cuò.',vn:'Người trẻ phải dám đổi mới, đừng sợ mắc lỗi.'}
   ],
   colloFull:[
     {zh:'勇于承担责任',py:'yǒngyú chéngdān zérèn',vn:'dám gánh vác trách nhiệm'},
     {zh:'勇于承认错误',py:'yǒngyú chéngrèn cuòwù',vn:'dám thừa nhận sai lầm'},
     {zh:'勇于创新',py:'yǒngyú chuàngxīn',vn:'dám đổi mới'},
     {zh:'勇于面对',py:'yǒngyú miànduì',vn:'dũng cảm đối mặt'},
     {zh:'勇于尝试',py:'yǒngyú chángshì',vn:'dám thử'}
   ],
   patterns:[
     {s:'勇于 + động từ',m:'Dám … (勇于面对 / 勇于承担)'},
     {s:'不畏惧……，勇于……',m:'Không sợ …, dám … (cặp song song trong bài)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm lớp trưởng thì phải dám gánh vác trách nhiệm.',answer:'当班长就要勇于承担责任。',answerPy:'Dāng bānzhǎng jiù yào yǒngyú chéngdān zérèn.',
      note:'Câu điều kiện ngầm: (既然)当班长，就要……; 勇于 + động từ.',pair:'……就要……'},
     {promptLang:'vi',prompt:'Thay vì che giấu sai lầm, chi bằng dũng cảm thừa nhận nó.',answer:'与其掩饰错误，不如勇于承认它。',answerPy:'Yǔqí yǎnshì cuòwù, bùrú yǒngyú chéngrèn tā.',
      note:'与其……不如……; 掩饰 ôn bài 2 HSK 6.',pair:'与其……不如……'}
   ]},

  {n:21,zh:'伴随',py:'bànsuí',pos:'Động từ',vn:'đi kèm, đi đôi với, theo cùng',hv:'bạn tuỳ',em:'👣',lesson:1,
   explain:['Đi theo, đi cùng; một sự việc xảy ra đồng thời với sự việc khác.','Hay dùng dạng 伴随着……, 伴随……而来; văn viết trang trọng hơn 随着.'],
   usage:'Hay gặp: 伴随着经济全球化, 伴随着……的发展, 伴随一生, 伴随……而来. 伴随着 đầu câu gần nghĩa 随着 nhưng nhấn mạnh "song hành".',
   collo:['伴随着经济全球化','伴随一生','伴随……而来','伴随着音乐'],
   ex_zh:'伴随着经济全球化，生活中的不确定因素日益增多。',ex_py:'Bànsuízhe jīngjì quánqiúhuà, shēnghuó zhōng de bú quèdìng yīnsù rìyì zēngduō.',ex_vn:'Cùng với toàn cầu hoá kinh tế, những yếu tố bất định trong cuộc sống ngày càng tăng.',
   exList:[
     {zh:'事实上，伴随着经济全球化，生活中的不确定因素日益增多。',py:'Shìshí shang, bànsuízhe jīngjì quánqiúhuà, shēnghuó zhōng de bú quèdìng yīnsù rìyì zēngduō.',vn:'Thực tế là, cùng với toàn cầu hoá kinh tế, những yếu tố bất định trong cuộc sống ngày càng tăng.'},
     {zh:'伴随着他的压力越来越大，他的精神越来越紧张。',py:'Bànsuízhe tā de yālì yuè lái yuè dà, tā de jīngshén yuè lái yuè jǐnzhāng.',vn:'Cùng với áp lực ngày một lớn, tinh thần anh ấy ngày càng căng thẳng.'},
     {zh:'这把小提琴伴随了爷爷一生。',py:'Zhè bǎ xiǎotíqín bànsuíle yéye yìshēng.',vn:'Cây vĩ cầm này đã theo ông suốt cả cuộc đời.'}
   ],
   colloFull:[
     {zh:'伴随着经济全球化',py:'bànsuízhe jīngjì quánqiúhuà',vn:'cùng với toàn cầu hoá kinh tế'},
     {zh:'伴随一生',py:'bànsuí yìshēng',vn:'theo suốt một đời'},
     {zh:'伴随……而来',py:'bànsuí …… ér lái',vn:'đến cùng với …'},
     {zh:'伴随着音乐',py:'bànsuízhe yīnyuè',vn:'theo tiếng nhạc'},
     {zh:'伴随着成长',py:'bànsuízhe chéngzhǎng',vn:'song hành với sự trưởng thành'}
   ],
   patterns:[
     {s:'伴随着 + N / mệnh đề，……',m:'Cùng với …, … (đầu câu)'},
     {s:'A 伴随 + người + 一生',m:'A theo ai suốt đời'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự phát triển của Internet, cách học của chúng ta cũng thay đổi.',answer:'伴随着互联网的发展，我们的学习方式也发生了变化。',answerPy:'Bànsuízhe hùliánwǎng de fāzhǎn, wǒmen de xuéxí fāngshì yě fāshēngle biànhuà.',
      note:'伴随着……，……也……: hai quá trình song hành; 发生变化 là cụm cố định.',pair:'随着……'},
     {promptLang:'vi',prompt:'Thành công thường đi kèm với vô số lần thất bại.',answer:'成功往往伴随着无数次失败。',answerPy:'Chénggōng wǎngwǎng bànsuízhe wúshù cì shībài.',
      note:'往往 = thường (quy luật); 伴随着 làm vị ngữ.',pair:'往往'}
   ]},

  {n:22,zh:'日益',py:'rìyì',pos:'Phó từ',vn:'ngày càng, ngày một',hv:'nhật ích',em:'📈',lesson:1,
   explain:['Ngày một hơn, mức độ tăng dần theo thời gian (văn viết).','Chỉ đi với động từ / tính từ HAI âm tiết: 日益增多, 日益严重; không nói 日益好, 日益多.'],
   usage:'Hay gặp: 日益增多, 日益严重, 日益提高, 日益密切, 日益改善. Khẩu ngữ dùng 越来越.',
   collo:['日益增多','日益严重','日益提高','日益密切'],
   ex_zh:'生活中的不确定因素日益增多。',ex_py:'Shēnghuó zhōng de bú quèdìng yīnsù rìyì zēngduō.',ex_vn:'Những yếu tố bất định trong cuộc sống ngày càng tăng.',
   exList:[
     {zh:'伴随着经济全球化，生活中的不确定因素日益增多。',py:'Bànsuízhe jīngjì quánqiúhuà, shēnghuó zhōng de bú quèdìng yīnsù rìyì zēngduō.',vn:'Cùng với toàn cầu hoá kinh tế, những yếu tố bất định trong cuộc sống ngày càng tăng.'},
     {zh:'最近几十年，人口问题日益严重。',py:'Zuìjìn jǐ shí nián, rénkǒu wèntí rìyì yánzhòng.',vn:'Mấy chục năm gần đây, vấn đề dân số ngày càng nghiêm trọng.'},
     {zh:'随着经济的发展，城市里汽车的数量日益增多。',py:'Suízhe jīngjì de fāzhǎn, chéngshì li qìchē de shùliàng rìyì zēngduō.',vn:'Cùng với sự phát triển kinh tế, số lượng ô tô trong thành phố ngày càng nhiều.'}
   ],
   colloFull:[
     {zh:'日益增多',py:'rìyì zēngduō',vn:'ngày càng tăng'},
     {zh:'日益严重',py:'rìyì yánzhòng',vn:'ngày càng nghiêm trọng'},
     {zh:'日益提高',py:'rìyì tígāo',vn:'ngày càng nâng cao'},
     {zh:'日益密切',py:'rìyì mìqiè',vn:'ngày càng mật thiết'},
     {zh:'日益改善',py:'rìyì gǎishàn',vn:'ngày càng cải thiện'}
   ],
   patterns:[
     {s:'日益 + động từ / tính từ hai âm tiết',m:'Ngày càng … (日益增多)'},
     {s:'随着……，……日益……',m:'Cùng với …, … ngày càng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự phát triển kinh tế, đời sống người dân ngày càng được cải thiện.',answer:'随着经济的发展，人们的生活日益改善。',answerPy:'Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó rìyì gǎishàn.',
      note:'随着……，……日益 + động từ hai âm tiết (không dùng 日益好).',pair:'随着……'},
     {promptLang:'vi',prompt:'Tuy ô nhiễm ngày càng nghiêm trọng, nhưng không ít người vẫn không coi trọng.',answer:'虽然污染日益严重，但不少人仍然不重视。',answerPy:'Suīrán wūrǎn rìyì yánzhòng, dàn bùshǎo rén réngrán bú zhòngshì.',
      note:'虽然……但……仍然……; 日益严重 là cụm cố định rất hay gặp.',pair:'虽然……但……仍然……'}
   ]},

  {n:23,zh:'昔日',py:'xīrì',pos:'Danh từ',vn:'ngày xưa, thời trước',hv:'tích nhật',em:'🕰️',lesson:1,
   explain:['Ngày trước, thời xưa (văn viết) = 往日, 从前.','Hay làm định ngữ đứng trước danh từ: 昔日的朋友, 昔日风光无限的企业.'],
   usage:'Hay gặp: 昔日的……, 昔日风光, 不复昔日, 昔日的辉煌. Khẩu ngữ nói 以前, 过去.',
   collo:['昔日的朋友','昔日风光无限','昔日的辉煌','不同于昔日'],
   ex_zh:'昔日风光无限的世界一流企业也会亏损，也会倒闭。',ex_py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',ex_vn:'Những doanh nghiệp hàng đầu thế giới từng một thời vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản.',
   exList:[
     {zh:'昔日风光无限的世界一流企业也会亏损，也会倒闭。',py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',vn:'Những doanh nghiệp hàng đầu thế giới từng một thời vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản.'},
     {zh:'昔日的小渔村，如今已经变成了热闹的旅游城市。',py:'Xīrì de xiǎo yúcūn, rújīn yǐjīng biànchéngle rènao de lǚyóu chéngshì.',vn:'Làng chài nhỏ ngày xưa nay đã trở thành một thành phố du lịch sầm uất.'},
     {zh:'毕业十年后再见，昔日的同学都变了模样。',py:'Bìyè shí nián hòu zài jiàn, xīrì de tóngxué dōu biànle múyàng.',vn:'Mười năm sau tốt nghiệp gặp lại, bạn học ngày xưa ai cũng đã khác.'}
   ],
   colloFull:[
     {zh:'昔日的朋友',py:'xīrì de péngyou',vn:'bạn cũ ngày xưa'},
     {zh:'昔日风光无限',py:'xīrì fēngguāng wúxiàn',vn:'ngày trước vẻ vang vô hạn'},
     {zh:'昔日的辉煌',py:'xīrì de huīhuáng',vn:'hào quang ngày xưa'},
     {zh:'不同于昔日',py:'bù tóng yú xīrì',vn:'khác với ngày trước'},
     {zh:'昔日的小村庄',py:'xīrì de xiǎo cūnzhuāng',vn:'ngôi làng nhỏ ngày xưa'}
   ],
   patterns:[
     {s:'昔日的 + N，如今……',m:'… ngày xưa, nay … (đối chiếu xưa – nay)'},
     {s:'不同于昔日',m:'Khác với ngày trước (于 = 与)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà máy ngày xưa từng vẻ vang một thời, nay đã đóng cửa rồi.',answer:'昔日风光一时的工厂，如今已经关门了。',answerPy:'Xīrì fēngguāng yìshí de gōngchǎng, rújīn yǐjīng guānmén le.',
      note:'昔日…… / 如今……: đối chiếu xưa và nay.',pair:'如今'},
     {promptLang:'vi',prompt:'Tuy bạn bè ngày xưa ở mỗi người một nơi, nhưng tình bạn vẫn không thay đổi.',answer:'虽然昔日的朋友各在一方，但友情依然没有改变。',answerPy:'Suīrán xīrì de péngyou gè zài yì fāng, dàn yǒuqíng yīrán méiyǒu gǎibiàn.',
      note:'虽然……但……依然……; 昔日的 + N làm định ngữ.',pair:'虽然……但……'}
   ]},

  {n:24,zh:'风光',py:'fēngguāng',pos:'Tính từ',vn:'vẻ vang, huy hoàng, nở mày nở mặt',hv:'phong quang',em:'✨',lesson:1,
   explain:['Tính từ (đọc fēngguang trong khẩu ngữ): vẻ vang, có thể diện, được nhiều người ngưỡng mộ.','Danh từ (fēngguāng): phong cảnh, cảnh sắc (风光秀丽). Bài này dùng nghĩa tính từ.'],
   usage:'Hay gặp: 风光无限, 风光一时, 很风光, 风光地……; danh từ: 北国风光, 风光秀丽.',
   collo:['风光无限','风光一时','办得很风光','风光秀丽'],
   ex_zh:'昔日风光无限的世界一流企业也会倒闭。',ex_py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì dǎobì.',ex_vn:'Những doanh nghiệp hàng đầu thế giới từng vẻ vang vô hạn cũng có thể phá sản.',
   exList:[
     {zh:'昔日风光无限的世界一流企业也会亏损，也会倒闭。',py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',vn:'Những doanh nghiệp hàng đầu thế giới từng một thời vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản.'},
     {zh:'他考上了名牌大学，全家人都觉得很风光。',py:'Tā kǎoshangle míngpái dàxué, quán jiā rén dōu juéde hěn fēngguāng.',vn:'Cậu ấy đỗ trường đại học danh tiếng, cả nhà đều thấy nở mày nở mặt.'},
     {zh:'这里风光秀丽，每年都吸引大批游客。',py:'Zhèlǐ fēngguāng xiùlì, měi nián dōu xīyǐn dàpī yóukè.',vn:'Nơi đây phong cảnh tươi đẹp, năm nào cũng thu hút đông đảo du khách.'}
   ],
   colloFull:[
     {zh:'风光无限',py:'fēngguāng wúxiàn',vn:'vẻ vang vô hạn'},
     {zh:'风光一时',py:'fēngguāng yìshí',vn:'vẻ vang một thời'},
     {zh:'办得很风光',py:'bàn de hěn fēngguāng',vn:'tổ chức rất linh đình'},
     {zh:'风光秀丽',py:'fēngguāng xiùlì',vn:'phong cảnh tươi đẹp'},
     {zh:'表面风光',py:'biǎomiàn fēngguāng',vn:'hào nhoáng bề ngoài'}
   ],
   patterns:[
     {s:'昔日 / 曾经 + 风光……的 + N',m:'… từng vẻ vang'},
     {s:'看起来很风光，其实……',m:'Trông thì vẻ vang, thực ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc của anh ấy trông thì vẻ vang, thực ra áp lực rất lớn.',answer:'他的工作看起来很风光，其实压力非常大。',answerPy:'Tā de gōngzuò kàn qǐlái hěn fēngguāng, qíshí yālì fēicháng dà.',
      note:'看起来……，其实……: bề ngoài … thực ra ….',pair:'看起来……，其实……'},
     {promptLang:'vi',prompt:'Ngay cả những công ty từng vẻ vang một thời cũng có thể phá sản.',answer:'连风光一时的公司也可能倒闭。',answerPy:'Lián fēngguāng yìshí de gōngsī yě kěnéng dǎobì.',
      note:'连……也……: nhấn mạnh trường hợp khó ngờ nhất.',pair:'连……也……'}
   ]},

  {n:25,zh:'亏损',py:'kuīsǔn',pos:'Động từ',vn:'thua lỗ, lỗ vốn',hv:'khuy tổn',em:'📉',lesson:1,
   explain:['(Doanh nghiệp, cửa hàng) chi nhiều hơn thu, làm ăn thua lỗ.','Cũng dùng như danh từ: 出现亏损, 扭亏为盈 (chuyển lỗ thành lãi). Trái nghĩa: 盈利.'],
   usage:'Hay gặp: 企业亏损, 亏损严重, 连年亏损, 亏损了一百万, 出现亏损. Khẩu ngữ: 亏了, 赔钱.',
   collo:['企业亏损','连年亏损','亏损严重','出现亏损'],
   ex_zh:'昔日风光无限的世界一流企业也会亏损。',ex_py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn.',ex_vn:'Những doanh nghiệp hàng đầu thế giới từng vẻ vang vô hạn cũng có thể thua lỗ.',
   exList:[
     {zh:'昔日风光无限的世界一流企业也会亏损，也会倒闭。',py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',vn:'Những doanh nghiệp hàng đầu thế giới từng vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản.'},
     {zh:'这家商店连年亏损，老板不得不把它卖了。',py:'Zhè jiā shāngdiàn liánnián kuīsǔn, lǎobǎn bùdébù bǎ tā mài le.',vn:'Cửa hàng này thua lỗ liên tục nhiều năm, ông chủ đành phải bán đi.'},
     {zh:'由于经营不善，公司今年亏损了五百万元。',py:'Yóuyú jīngyíng bú shàn, gōngsī jīnnián kuīsǔnle wǔbǎi wàn yuán.',vn:'Do kinh doanh không tốt, năm nay công ty lỗ năm triệu tệ.'}
   ],
   colloFull:[
     {zh:'企业亏损',py:'qǐyè kuīsǔn',vn:'doanh nghiệp thua lỗ'},
     {zh:'连年亏损',py:'liánnián kuīsǔn',vn:'lỗ liên tục nhiều năm'},
     {zh:'亏损严重',py:'kuīsǔn yánzhòng',vn:'lỗ nặng'},
     {zh:'出现亏损',py:'chūxiàn kuīsǔn',vn:'xuất hiện thua lỗ'},
     {zh:'扭亏为盈',py:'niǔ kuī wéi yíng',vn:'chuyển lỗ thành lãi'}
   ],
   patterns:[
     {s:'亏损 + 了 + số tiền',m:'Lỗ bao nhiêu tiền'},
     {s:'由于……，(企业)连年亏损',m:'Do …, (doanh nghiệp) lỗ liên tục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu tiếp tục thua lỗ thì công ty sẽ phải đóng cửa.',answer:'如果继续亏损下去，公司就得关门了。',answerPy:'Rúguǒ jìxù kuīsǔn xiàqu, gōngsī jiù děi guānmén le.',
      note:'V + 下去 = tiếp tục; 如果……就…….',pair:'V + 下去'},
     {promptLang:'vi',prompt:'Cửa hàng không những không có lãi mà ngược lại còn lỗ không ít tiền.',answer:'这家店不但没盈利，反而亏损了不少钱。',answerPy:'Zhè jiā diàn búdàn méi yínglì, fǎn\'ér kuīsǔnle bùshǎo qián.',
      note:'不但不/没……，反而……: không những không … mà ngược lại ….',pair:'不但……反而……'}
   ]},

  {n:26,zh:'倒闭',py:'dǎobì',pos:'Động từ',vn:'phá sản, sập tiệm, đóng cửa',hv:'đảo bế',em:'🏚️',lesson:1,
   explain:['(Doanh nghiệp, cửa hàng) vì làm ăn thua lỗ mà phải ngừng hoạt động, đóng cửa hẳn.','Không mang tân ngữ: 公司倒闭了; muốn nói "làm cho phá sản" thì dùng 使……倒闭.'],
   usage:'Hay gặp: 公司倒闭, 面临倒闭, 濒临倒闭, 倒闭了. 破产 là thuật ngữ pháp lý; 倒闭 dùng rộng hơn.',
   collo:['公司倒闭','面临倒闭','工厂倒闭','导致倒闭'],
   ex_zh:'世界一流企业也会亏损，也会倒闭。',ex_py:'Shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',ex_vn:'Doanh nghiệp hàng đầu thế giới cũng có thể thua lỗ, cũng có thể phá sản.',
   exList:[
     {zh:'昔日风光无限的世界一流企业也会亏损，也会倒闭。',py:'Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì.',vn:'Những doanh nghiệp hàng đầu thế giới từng vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản.'},
     {zh:'由于经营管理不善，致使这家工厂倒闭了。',py:'Yóuyú jīngyíng guǎnlǐ bú shàn, zhìshǐ zhè jiā gōngchǎng dǎobì le.',vn:'Do kinh doanh, quản lý kém nên nhà máy này đã phá sản.'},
     {zh:'学校门口那家书店面临倒闭，同学们都很舍不得。',py:'Xuéxiào ménkǒu nà jiā shūdiàn miànlín dǎobì, tóngxuémen dōu hěn shěbude.',vn:'Hiệu sách trước cổng trường sắp phải đóng cửa, các bạn đều rất tiếc.'}
   ],
   colloFull:[
     {zh:'公司倒闭',py:'gōngsī dǎobì',vn:'công ty phá sản'},
     {zh:'面临倒闭',py:'miànlín dǎobì',vn:'đứng trước nguy cơ phá sản'},
     {zh:'工厂倒闭',py:'gōngchǎng dǎobì',vn:'nhà máy đóng cửa'},
     {zh:'导致倒闭',py:'dǎozhì dǎobì',vn:'dẫn đến phá sản'},
     {zh:'濒临倒闭',py:'bīnlín dǎobì',vn:'bên bờ phá sản'}
   ],
   patterns:[
     {s:'N (企业/公司) + 倒闭了',m:'… phá sản rồi (không mang tân ngữ)'},
     {s:'面临 / 濒临 + 倒闭',m:'Đứng trước nguy cơ phá sản'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì không kịp thời đổi mới, công ty đó cuối cùng đã phá sản.',answer:'因为没有及时创新，那家公司最终倒闭了。',answerPy:'Yīnwèi méiyǒu jíshí chuàngxīn, nà jiā gōngsī zuìzhōng dǎobì le.',
      note:'因为……; 倒闭 là nội động từ + 了.',pair:'因为……'},
     {promptLang:'vi',prompt:'Không ngờ một công ty lớn như vậy mà cũng phá sản.',answer:'没想到这么大的公司居然也倒闭了。',answerPy:'Méi xiǎngdào zhème dà de gōngsī jūrán yě dǎobì le.',
      note:'没想到……居然……: không ngờ … vậy mà ….',pair:'居然'}
   ]},

  {n:27,zh:'金融',py:'jīnróng',pos:'Danh từ',vn:'tài chính, tiền tệ',hv:'kim dung',em:'🏦',lesson:1,
   explain:['Hoạt động lưu thông tiền tệ và tín dụng: ngân hàng, chứng khoán, bảo hiểm….','Hay làm định ngữ: 金融危机, 金融中心, 金融业, 金融专业.'],
   usage:'Hay gặp: 金融危机, 金融市场, 金融中心, 金融业, 学金融. Phân biệt 财务 (tài vụ của một đơn vị) và 财政 (tài chính nhà nước).',
   collo:['金融危机','金融中心','金融市场','金融专业'],
   ex_zh:'一次金融危机，就会使一些企业不得不裁员。',ex_py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē qǐyè bùdébù cáiyuán.',ex_vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp buộc phải cắt giảm nhân sự.',
   exList:[
     {zh:'一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán.',vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục nhiều năm, vận hành rất tốt buộc phải cắt giảm nhân sự.'},
     {zh:'上海是中国重要的金融中心之一。',py:'Shànghǎi shì Zhōngguó zhòngyào de jīnróng zhōngxīn zhī yī.',vn:'Thượng Hải là một trong những trung tâm tài chính quan trọng của Trung Quốc.'},
     {zh:'哥哥大学学的是金融专业，现在在银行工作。',py:'Gēge dàxué xué de shì jīnróng zhuānyè, xiànzài zài yínháng gōngzuò.',vn:'Anh trai học ngành tài chính ở đại học, giờ làm ở ngân hàng.'}
   ],
   colloFull:[
     {zh:'金融危机',py:'jīnróng wēijī',vn:'khủng hoảng tài chính'},
     {zh:'金融中心',py:'jīnróng zhōngxīn',vn:'trung tâm tài chính'},
     {zh:'金融市场',py:'jīnróng shìchǎng',vn:'thị trường tài chính'},
     {zh:'金融专业',py:'jīnróng zhuānyè',vn:'ngành tài chính'},
     {zh:'金融业',py:'jīnróngyè',vn:'ngành tài chính – ngân hàng'}
   ],
   patterns:[
     {s:'金融 + N (危机 / 中心 / 市场)',m:'… tài chính'},
     {s:'学 / 从事 + 金融',m:'Học / làm trong ngành tài chính'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngành tài chính tuy lương cao nhưng áp lực cũng rất lớn.',answer:'金融业虽然工资高，但压力也很大。',answerPy:'Jīnróngyè suīrán gōngzī gāo, dàn yālì yě hěn dà.',
      note:'Câu chủ vị làm vị ngữ: 金融业 + 工资高; 虽然……但…….',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Anh ấy chọn ngành tài chính là vì ngành này tương đối hot.',answer:'他选金融专业是因为这个专业比较热门。',answerPy:'Tā xuǎn jīnróng zhuānyè shì yīnwèi zhège zhuānyè bǐjiào rèmén.',
      note:'……是因为……: giải thích nguyên nhân; 热门 cũng là từ của bài.',pair:'……是因为……'}
   ]},

  {n:28,zh:'危机',py:'wēijī',pos:'Danh từ',vn:'khủng hoảng, nguy cơ',hv:'nguy cơ',em:'🚨',lesson:1,
   explain:['Tình trạng nguy hiểm nghiêm trọng, thời khắc then chốt nguy cấp (危机 = nguy + cơ hội).','Tiếng Việt "nguy cơ" = khả năng xảy ra điều xấu → tiếng Trung là 风险 / 威胁; 危机 thường dịch "khủng hoảng".'],
   usage:'Hay gặp: 金融危机, 经济危机, 能源危机, 危机感, 度过危机, 面临危机, 渡过难关.',
   collo:['金融危机','经济危机','度过危机','危机感'],
   ex_zh:'一次金融危机，就会使一些企业不得不裁员。',ex_py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē qǐyè bùdébù cáiyuán.',ex_vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp buộc phải cắt giảm nhân sự.',
   exList:[
     {zh:'一次金融危机，就会使一些连年盈利的企业不得不裁员。',py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì de qǐyè bùdébù cáiyuán.',vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục nhiều năm buộc phải cắt giảm nhân sự.'},
     {zh:'全家人齐心协力，终于度过了这次危机。',py:'Quán jiā rén qíxīn xiélì, zhōngyú dùguòle zhè cì wēijī.',vn:'Cả nhà đồng lòng hợp sức, cuối cùng cũng vượt qua được cơn khủng hoảng lần này.'},
     {zh:'看到同学们都那么努力，我突然有了危机感。',py:'Kàndào tóngxuémen dōu nàme nǔlì, wǒ tūrán yǒule wēijīgǎn.',vn:'Thấy các bạn đều chăm chỉ như vậy, tôi bỗng thấy lo mình bị bỏ lại.'}
   ],
   colloFull:[
     {zh:'金融危机',py:'jīnróng wēijī',vn:'khủng hoảng tài chính'},
     {zh:'经济危机',py:'jīngjì wēijī',vn:'khủng hoảng kinh tế'},
     {zh:'度过危机',py:'dùguò wēijī',vn:'vượt qua khủng hoảng'},
     {zh:'危机感',py:'wēijīgǎn',vn:'cảm giác nguy cơ'},
     {zh:'面临危机',py:'miànlín wēijī',vn:'đối mặt khủng hoảng'}
   ],
   patterns:[
     {s:'度过 / 面临 + 危机',m:'Vượt qua / đối mặt khủng hoảng'},
     {s:'有危机感',m:'Có ý thức về nguy cơ (sợ bị tụt lại)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người đồng lòng thì nhất định có thể vượt qua khủng hoảng.',answer:'只要大家齐心协力，就一定能度过危机。',answerPy:'Zhǐyào dàjiā qíxīn xiélì, jiù yídìng néng dùguò wēijī.',
      note:'只要……就……; 度过 (vượt qua quãng thời gian khó).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Khủng hoảng vừa là thử thách, vừa là cơ hội.',answer:'危机既是挑战，也是机遇。',answerPy:'Wēijī jì shì tiǎozhàn, yě shì jīyù.',
      note:'既……也……: vừa … vừa …; 机遇 cũng là từ bài này.',pair:'既……也……'}
   ]},

  {n:29,zh:'盈利',py:'yínglì',pos:'Động từ',vn:'thu lợi, có lãi',hv:'doanh lợi',em:'💹',lesson:1,
   explain:['(Doanh nghiệp) thu được lợi nhuận, làm ăn có lãi. Cũng viết 赢利.','Cũng dùng như danh từ: lợi nhuận (今年的盈利). Trái nghĩa: 亏损.'],
   usage:'Hay gặp: 连年盈利, 开始盈利, 盈利能力, 以营利为目的 (chú ý 营利 = kinh doanh vì lợi — khác chữ).',
   collo:['连年盈利','开始盈利','盈利能力','盈利一百万'],
   ex_zh:'一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',ex_py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán.',ex_vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục, vận hành rất tốt buộc phải cắt giảm nhân sự.',
   exList:[
     {zh:'一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán.',vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục, vận hành rất tốt buộc phải cắt giảm nhân sự.'},
     {zh:'这家小店开业半年就开始盈利了。',py:'Zhè jiā xiǎo diàn kāiyè bàn nián jiù kāishǐ yínglì le.',vn:'Cửa hàng nhỏ này khai trương nửa năm đã bắt đầu có lãi.'},
     {zh:'公司去年盈利三百万元，员工都拿到了奖金。',py:'Gōngsī qùnián yínglì sānbǎi wàn yuán, yuángōng dōu nádàole jiǎngjīn.',vn:'Năm ngoái công ty lãi ba triệu tệ, nhân viên đều được nhận thưởng.'}
   ],
   colloFull:[
     {zh:'连年盈利',py:'liánnián yínglì',vn:'có lãi liên tục nhiều năm'},
     {zh:'开始盈利',py:'kāishǐ yínglì',vn:'bắt đầu có lãi'},
     {zh:'盈利能力',py:'yínglì nénglì',vn:'khả năng sinh lời'},
     {zh:'盈利一百万',py:'yínglì yìbǎi wàn',vn:'lãi một triệu'},
     {zh:'扭亏为盈',py:'niǔ kuī wéi yíng',vn:'chuyển lỗ thành lãi'}
   ],
   patterns:[
     {s:'(企业) + 盈利 + số tiền',m:'Lãi bao nhiêu'},
     {s:'从亏损到盈利',m:'Từ lỗ đến lãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy năm nay công ty có lãi, nhưng lãi không nhiều như năm ngoái.',answer:'虽然公司今年盈利了，但是没有去年盈利多。',answerPy:'Suīrán gōngsī jīnnián yínglì le, dànshì méiyǒu qùnián yínglì duō.',
      note:'So sánh kém: A 没有 B + adj.',pair:'A 没有 B……'},
     {promptLang:'vi',prompt:'Nhờ đổi mới công nghệ, nhà máy này đã chuyển từ lỗ sang lãi.',answer:'由于技术创新，这家工厂从亏损变成了盈利。',answerPy:'Yóuyú jìshù chuàngxīn, zhè jiā gōngchǎng cóng kuīsǔn biànchéngle yínglì.',
      note:'从 A 变成 B: từ A thành B; hai từ trái nghĩa của bài.',pair:'从……变成……'}
   ]},

  {n:30,zh:'运行',py:'yùnxíng',pos:'Động từ',vn:'vận hành, hoạt động',hv:'vận hành',em:'⚙️',lesson:1,
   explain:['(Tàu xe, thiên thể, máy móc, hệ thống, tổ chức) chuyển động, hoạt động theo quỹ đạo, quy trình nhất định.','Nghĩa rộng: doanh nghiệp hoạt động (运行很好 / 运行正常).'],
   usage:'Hay gặp: 运行良好, 正常运行, 地铁运行, 运行速度, 运行时间. Trùng Hán–Việt "vận hành".',
   collo:['运行很好','正常运行','地铁运行时间','运行速度'],
   ex_zh:'一些连年盈利、运行很好的企业也不得不裁员。',ex_py:'Yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè yě bùdébù cáiyuán.',ex_vn:'Một số doanh nghiệp lãi liên tục, vận hành rất tốt cũng buộc phải cắt giảm nhân sự.',
   exList:[
     {zh:'一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán.',vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục, vận hành rất tốt buộc phải cắt giảm nhân sự.'},
     {zh:'地铁的运行时间是早上六点到晚上十一点。',py:'Dìtiě de yùnxíng shíjiān shì zǎoshang liù diǎn dào wǎnshang shíyī diǎn.',vn:'Thời gian vận hành tàu điện ngầm là từ sáu giờ sáng đến mười một giờ đêm.'},
     {zh:'电脑运行太慢了，可能是开的程序太多了。',py:'Diànnǎo yùnxíng tài màn le, kěnéng shì kāi de chéngxù tài duō le.',vn:'Máy tính chạy chậm quá, có lẽ vì mở quá nhiều chương trình.'}
   ],
   colloFull:[
     {zh:'运行很好',py:'yùnxíng hěn hǎo',vn:'vận hành rất tốt'},
     {zh:'正常运行',py:'zhèngcháng yùnxíng',vn:'vận hành bình thường'},
     {zh:'地铁运行时间',py:'dìtiě yùnxíng shíjiān',vn:'giờ chạy tàu điện ngầm'},
     {zh:'运行速度',py:'yùnxíng sùdù',vn:'tốc độ vận hành'},
     {zh:'运行良好',py:'yùnxíng liánghǎo',vn:'vận hành tốt'}
   ],
   patterns:[
     {s:'N + 运行 + 良好 / 正常 / 很慢',m:'… vận hành tốt / bình thường / chậm'},
     {s:'保证 + ……正常运行',m:'Đảm bảo … vận hành bình thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để đảm bảo hệ thống vận hành bình thường, kỹ sư phải kiểm tra mỗi ngày.',answer:'为了保证系统正常运行，工程师每天都要检查。',answerPy:'Wèile bǎozhèng xìtǒng zhèngcháng yùnxíng, gōngchéngshī měi tiān dōu yào jiǎnchá.',
      note:'为了 + mục đích; 正常 làm trạng ngữ trước 运行.',pair:'为了……'},
     {promptLang:'vi',prompt:'Máy tính chạy càng ngày càng chậm, tôi đành phải mua cái mới.',answer:'电脑运行得越来越慢，我只好买了一台新的。',answerPy:'Diànnǎo yùnxíng de yuè lái yuè màn, wǒ zhǐhǎo mǎile yì tái xīn de.',
      note:'Bổ ngữ trình độ V得 + 越来越 + adj; 只好 = đành phải.',pair:'越来越……'}
   ]},

  {n:31,zh:'裁员',py:'cáiyuán',pos:'Động từ',vn:'cắt giảm nhân sự, giảm biên chế',hv:'tài viên',em:'✂️',lesson:1,
   explain:['Cơ quan, doanh nghiệp giảm bớt số nhân viên.','Động từ li hợp (裁 + 员), không mang tân ngữ: không nói 裁员他; nói 他被裁了 / 被裁员了.'],
   usage:'Hay gặp: 不得不裁员, 大规模裁员, 裁员计划, 被裁员, 裁掉一百人.',
   collo:['不得不裁员','大规模裁员','裁员计划','被裁员'],
   ex_zh:'一次金融危机，就会使一些企业不得不裁员。',ex_py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē qǐyè bùdébù cáiyuán.',ex_vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp buộc phải cắt giảm nhân sự.',
   exList:[
     {zh:'一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',py:'Yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán.',vn:'Chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục, vận hành rất tốt buộc phải cắt giảm nhân sự.'},
     {zh:'听说公司要裁员，大家都人心惶惶。',py:'Tīngshuō gōngsī yào cáiyuán, dàjiā dōu rénxīn huánghuáng.',vn:'Nghe nói công ty sắp cắt giảm nhân sự, ai nấy đều hoang mang.'},
     {zh:'他在这次裁员中被裁掉了，只好重新找工作。',py:'Tā zài zhè cì cáiyuán zhōng bèi cáidiào le, zhǐhǎo chóngxīn zhǎo gōngzuò.',vn:'Anh ấy bị cắt trong đợt giảm nhân sự lần này, đành phải tìm việc lại từ đầu.'}
   ],
   colloFull:[
     {zh:'不得不裁员',py:'bùdébù cáiyuán',vn:'buộc phải cắt giảm nhân sự'},
     {zh:'大规模裁员',py:'dà guīmó cáiyuán',vn:'sa thải hàng loạt'},
     {zh:'裁员计划',py:'cáiyuán jìhuà',vn:'kế hoạch cắt giảm nhân sự'},
     {zh:'被裁员',py:'bèi cáiyuán',vn:'bị cắt giảm'},
     {zh:'裁员一千人',py:'cáiyuán yìqiān rén',vn:'cắt giảm một nghìn người'}
   ],
   patterns:[
     {s:'(企业) + 不得不 + 裁员',m:'(Doanh nghiệp) buộc phải cắt giảm nhân sự'},
     {s:'在……裁员中被裁掉',m:'Bị cắt trong đợt giảm biên chế …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì làm ăn thua lỗ nghiêm trọng, công ty buộc phải cắt giảm nhân sự.',answer:'因为亏损严重，公司不得不裁员。',answerPy:'Yīnwèi kuīsǔn yánzhòng, gōngsī bùdébù cáiyuán.',
      note:'不得不 = buộc phải (phủ định kép thành khẳng định).',pair:'不得不'},
     {promptLang:'vi',prompt:'Nghe nói sắp cắt giảm nhân sự, anh ấy lập tức lo lắng.',answer:'一听说要裁员，他顿时紧张起来。',answerPy:'Yì tīngshuō yào cáiyuán, tā dùnshí jǐnzhāng qǐlái.',
      note:'一……就/顿时……; 顿时 ôn bài 2; adj + 起来 = bắt đầu trở nên.',pair:'顿时'}
   ]},

  {n:32,zh:'意味着',py:'yìwèizhe',pos:'Động từ',vn:'có nghĩa là, nghĩa là, hàm ý',hv:'ý vị trước',em:'💡',lesson:1,
   explain:['Mang ý nghĩa là, hàm chứa ý là (một sự việc kéo theo ý nghĩa, hệ quả nào đó).','Tân ngữ thường là cụm động từ hoặc mệnh đề; không có dạng phủ định 不意味着 phổ biến ngoài cấu trúc 并不意味着.'],
   usage:'Hay gặp: 这意味着……, 并不意味着……, ……就意味着……. Trang trọng hơn 代表着 / 表示.',
   collo:['这意味着','并不意味着','就意味着','意味着失败'],
   ex_zh:'这意味着，原本英明的决定今天看来可能并非如此了。',ex_py:'Zhè yìwèizhe, yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',ex_vn:'Điều này có nghĩa là quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.',
   exList:[
     {zh:'这意味着，原本英明的决定今天看来可能并非如此了。',py:'Zhè yìwèizhe, yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',vn:'Điều này có nghĩa là quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.'},
     {zh:'满18岁就意味着成人了，要承担起成年人的义务和责任。',py:'Mǎn shíbā suì jiù yìwèizhe chéngrén le, yào chéngdān qǐ chéngniánrén de yìwù hé zérèn.',vn:'Đủ 18 tuổi nghĩa là đã thành người lớn, phải gánh vác nghĩa vụ và trách nhiệm của người trưởng thành.'},
     {zh:'一次考试没考好，并不意味着你不聪明。',py:'Yí cì kǎoshì méi kǎohǎo, bìng bú yìwèizhe nǐ bù cōngming.',vn:'Một lần thi không tốt hoàn toàn không có nghĩa là em không thông minh.'}
   ],
   colloFull:[
     {zh:'这意味着',py:'zhè yìwèizhe',vn:'điều này có nghĩa là'},
     {zh:'并不意味着',py:'bìng bú yìwèizhe',vn:'hoàn toàn không có nghĩa là'},
     {zh:'就意味着',py:'jiù yìwèizhe',vn:'thì có nghĩa là'},
     {zh:'意味着失败',py:'yìwèizhe shībài',vn:'đồng nghĩa với thất bại'},
     {zh:'意味着责任',py:'yìwèizhe zérèn',vn:'đồng nghĩa với trách nhiệm'}
   ],
   patterns:[
     {s:'A（就）意味着 B',m:'A (thì) có nghĩa là B'},
     {s:'A 并不意味着 B',m:'A hoàn toàn không có nghĩa là B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lên đại học không có nghĩa là có thể không cần học nữa.',answer:'上了大学并不意味着可以不学习了。',answerPy:'Shàngle dàxué bìng bú yìwèizhe kěyǐ bù xuéxí le.',
      note:'并不意味着: phủ định nhấn mạnh; 可以不 + V = có thể không ….',pair:'并 + 不/没 (nhấn mạnh phủ định)'},
     {promptLang:'vi',prompt:'Tự do không có nghĩa là muốn làm gì thì làm nấy.',answer:'自由并不意味着想做什么就做什么。',answerPy:'Zìyóu bìng bú yìwèizhe xiǎng zuò shénme jiù zuò shénme.',
      note:'Đại từ nghi vấn dùng hô ứng: 想做什么就做什么.',pair:'什么……什么 (hô ứng)'}
   ]},

  {n:33,zh:'英明',py:'yīngmíng',pos:'Tính từ',vn:'sáng suốt, anh minh',hv:'anh minh',em:'🌟',lesson:1,
   explain:['Sáng suốt, có tầm nhìn xa (thường khen quyết định, lãnh đạo).','Hay đi với 决定, 决策, 领导; văn viết, mang sắc thái trang trọng, đôi khi dùng đùa.'],
   usage:'Hay gặp: 英明的决定, 英明的决策, 英明的领导, 英明果断. Ngược nghĩa: 糊涂, 愚蠢.',
   collo:['英明的决定','英明的决策','英明的领导','英明果断'],
   ex_zh:'原本英明的决定今天看来可能并非如此了。',ex_py:'Yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',ex_vn:'Quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.',
   exList:[
     {zh:'这意味着，原本英明的决定今天看来可能并非如此了。',py:'Zhè yìwèizhe, yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',vn:'Điều này có nghĩa là quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.'},
     {zh:'事实证明，当初换专业是一个英明的决定。',py:'Shìshí zhèngmíng, dāngchū huàn zhuānyè shì yí ge yīngmíng de juédìng.',vn:'Thực tế chứng minh, hồi đó đổi ngành là một quyết định sáng suốt.'},
     {zh:'在老板英明果断的领导下，公司很快度过了危机。',py:'Zài lǎobǎn yīngmíng guǒduàn de lǐngdǎo xià, gōngsī hěn kuài dùguòle wēijī.',vn:'Dưới sự lãnh đạo sáng suốt, quyết đoán của ông chủ, công ty nhanh chóng vượt qua khủng hoảng.'}
   ],
   colloFull:[
     {zh:'英明的决定',py:'yīngmíng de juédìng',vn:'quyết định sáng suốt'},
     {zh:'英明的决策',py:'yīngmíng de juécè',vn:'quyết sách sáng suốt'},
     {zh:'英明的领导',py:'yīngmíng de lǐngdǎo',vn:'lãnh đạo anh minh'},
     {zh:'英明果断',py:'yīngmíng guǒduàn',vn:'sáng suốt quyết đoán'},
     {zh:'英明之举',py:'yīngmíng zhī jǔ',vn:'việc làm sáng suốt'}
   ],
   patterns:[
     {s:'……是一个英明的决定',m:'… là một quyết định sáng suốt'},
     {s:'在……英明的领导下',m:'Dưới sự lãnh đạo sáng suốt của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sự thật chứng minh, quyết định đi du học của cô ấy vô cùng sáng suốt.',answer:'事实证明，她出国留学的决定非常英明。',answerPy:'Shìshí zhèngmíng, tā chūguó liúxué de juédìng fēicháng yīngmíng.',
      note:'事实证明…… mở đầu câu kết luận; 英明 làm vị ngữ.',pair:'事实证明……'},
     {promptLang:'vi',prompt:'Dù quyết định có sáng suốt đến mấy cũng cần điều chỉnh theo tình hình.',answer:'再英明的决定，也需要根据情况进行调整。',answerPy:'Zài yīngmíng de juédìng, yě xūyào gēnjù qíngkuàng jìnxíng tiáozhěng.',
      note:'再 + adj + 的 + N，也……: dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:34,zh:'称心如意',py:'chènxīn rúyì',pos:'Thành ngữ',vn:'như ý muốn, vừa lòng hợp ý',hv:'xứng tâm như ý',em:'😊',lesson:1,
   explain:['Hoàn toàn đúng như mong muốn, rất vừa ý.','称 đọc chèn (= hợp với), không đọc chēng. Làm định ngữ (称心如意的工作) hoặc vị ngữ.'],
   usage:'Hay gặp: 称心如意的工作, 找到称心如意的……, 事事称心如意. Viết tắt: 称心 (很称心).',
   collo:['称心如意的工作','找到称心如意的房子','事事称心如意','过得称心如意'],
   ex_zh:'无论你怎么选择，都不太可能选一份称心如意的工作安安稳稳一辈子。',ex_py:'Wúlùn nǐ zěnme xuǎnzé, dōu bú tài kěnéng xuǎn yí fèn chènxīn rúyì de gōngzuò ān\'ānwěnwěn yíbèizi.',ex_vn:'Dù bạn chọn thế nào thì cũng khó có thể chọn được một công việc như ý rồi yên ổn cả đời.',
   exList:[
     {zh:'依我看，无论你怎么选择，都不太可能选一份称心如意的工作安安稳稳一辈子。',py:'Yī wǒ kàn, wúlùn nǐ zěnme xuǎnzé, dōu bú tài kěnéng xuǎn yí fèn chènxīn rúyì de gōngzuò ān\'ānwěnwěn yíbèizi.',vn:'Theo tôi, dù bạn chọn thế nào thì cũng khó có thể chọn được một công việc như ý rồi yên ổn cả đời.'},
     {zh:'现在想找一个称心如意的房子本来就很难。',py:'Xiànzài xiǎng zhǎo yí ge chènxīn rúyì de fángzi běnlái jiù hěn nán.',vn:'Bây giờ muốn tìm một căn nhà vừa ý vốn dĩ đã rất khó.'},
     {zh:'祝您新的一年事事称心如意！',py:'Zhù nín xīn de yì nián shìshì chènxīn rúyì!',vn:'Chúc bác năm mới mọi việc như ý!'}
   ],
   colloFull:[
     {zh:'称心如意的工作',py:'chènxīn rúyì de gōngzuò',vn:'công việc như ý'},
     {zh:'找到称心如意的房子',py:'zhǎodào chènxīn rúyì de fángzi',vn:'tìm được căn nhà vừa ý'},
     {zh:'事事称心如意',py:'shìshì chènxīn rúyì',vn:'mọi việc như ý'},
     {zh:'过得称心如意',py:'guò de chènxīn rúyì',vn:'sống vừa lòng'},
     {zh:'称心如意的礼物',py:'chènxīn rúyì de lǐwù',vn:'món quà ưng ý'}
   ],
   patterns:[
     {s:'称心如意的 + N',m:'… như ý (định ngữ)'},
     {s:'祝……事事称心如意',m:'Chúc … mọi việc như ý (lời chúc)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tìm cả tháng trời, cuối cùng tôi cũng mua được một món quà ưng ý.',answer:'找了整整一个月，我终于买到了一份称心如意的礼物。',answerPy:'Zhǎole zhěngzhěng yí ge yuè, wǒ zhōngyú mǎidàole yí fèn chènxīn rúyì de lǐwù.',
      note:'Bổ ngữ thời lượng sau V了; 终于 = cuối cùng thì.',pair:'Bổ ngữ thời lượng'},
     {promptLang:'vi',prompt:'Cuộc sống không thể nào mọi việc đều như ý được.',answer:'生活不可能事事都称心如意。',answerPy:'Shēnghuó bù kěnéng shìshì dōu chènxīn rúyì.',
      note:'Lượng từ / danh từ lặp (事事) + 都 = mọi ….',pair:'Danh từ lặp + 都'}
   ]},

  {n:35,zh:'除',py:'chú',pos:'Giới từ',vn:'ngoài … ra, trừ … ra',hv:'trừ',em:'➖',lesson:1,
   explain:['Giới từ (văn viết) = 除了: loại trừ hoặc bổ sung.','Hay dùng trong cụm cố định: 除此以外 / 除此之外 (ngoài điều này ra), 除……外.'],
   usage:'Hay gặp: 除此以外, 除此之外, 除……外，还/都……. 除……外 + 还/也 = bổ sung; 除……外 + 都 = loại trừ.',
   collo:['除此以外','除此之外','除周末外','除他以外'],
   ex_zh:'除此以外，由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',ex_py:'Chú cǐ yǐwài, yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',ex_vn:'Ngoài ra, do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.',
   exList:[
     {zh:'除此以外，由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Chú cǐ yǐwài, yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Ngoài ra, do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'图书馆除周一外，每天都开放。',py:'Túshūguǎn chú zhōuyī wài, měi tiān dōu kāifàng.',vn:'Thư viện ngoài thứ Hai ra thì ngày nào cũng mở cửa.'},
     {zh:'除他以外，班里还有三个同学报名参加了比赛。',py:'Chú tā yǐwài, bān li hái yǒu sān ge tóngxué bàomíng cānjiāle bǐsài.',vn:'Ngoài cậu ấy ra, trong lớp còn ba bạn nữa đăng ký tham gia cuộc thi.'}
   ],
   colloFull:[
     {zh:'除此以外',py:'chú cǐ yǐwài',vn:'ngoài ra'},
     {zh:'除此之外',py:'chú cǐ zhīwài',vn:'ngoài điều này ra'},
     {zh:'除周末外',py:'chú zhōumò wài',vn:'trừ cuối tuần ra'},
     {zh:'除他以外',py:'chú tā yǐwài',vn:'ngoài anh ấy ra'},
     {zh:'除……外，还……',py:'chú …… wài, hái ……',vn:'ngoài … ra còn …'}
   ],
   patterns:[
     {s:'除……（以）外，都……',m:'Trừ … ra, đều … (loại trừ)'},
     {s:'除……（以）外，还 / 也……',m:'Ngoài … ra còn … (bổ sung)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài tiếng Anh ra, cô ấy còn biết nói tiếng Trung và tiếng Nhật.',answer:'除英语以外，她还会说汉语和日语。',answerPy:'Chú Yīngyǔ yǐwài, tā hái huì shuō Hànyǔ hé Rìyǔ.',
      note:'除……以外，还……: bổ sung thêm.',pair:'除了……以外，还……'},
     {promptLang:'vi',prompt:'Trừ Tiểu Vương ra, cả lớp đều đồng ý đi leo núi.',answer:'除小王以外，全班同学都同意去爬山。',answerPy:'Chú Xiǎo Wáng yǐwài, quán bān tóngxué dōu tóngyì qù pá shān.',
      note:'除……以外，都……: loại trừ (Tiểu Vương không đồng ý).',pair:'除了……以外，都……'}
   ]},

  {n:36,zh:'争先恐后',py:'zhēngxiān-kǒnghòu',pos:'Thành ngữ',vn:'tranh nhau lên trước, sợ bị tụt lại sau',hv:'tranh tiên khủng hậu',em:'🏃',lesson:1,
   explain:['Tranh nhau đi trước, sợ bị tụt lại phía sau; ý nói nhiều người cùng hăng hái (hoặc chen lấn) làm một việc.','Thường làm trạng ngữ: 争先恐后地 + V.'],
   usage:'Hay gặp: 争先恐后地报名, 争先恐后地回答, 争先恐后报考热门专业. Có thể mang nghĩa tốt (hăng hái) hoặc hơi chê (a dua, chen lấn).',
   collo:['争先恐后地报名','争先恐后地回答','争先恐后地上车','争先恐后报考'],
   ex_zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',ex_py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',ex_vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.',
   exList:[
     {zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'老师一提问，同学们都争先恐后地举手回答。',py:'Lǎoshī yì tíwèn, tóngxuémen dōu zhēngxiān-kǒnghòu de jǔshǒu huídá.',vn:'Thầy vừa đặt câu hỏi, các bạn đã tranh nhau giơ tay trả lời.'},
     {zh:'车门一开，大家就争先恐后地往上挤。',py:'Chēmén yì kāi, dàjiā jiù zhēngxiān-kǒnghòu de wǎng shàng jǐ.',vn:'Cửa xe vừa mở, mọi người đã tranh nhau chen lên.'}
   ],
   colloFull:[
     {zh:'争先恐后地报名',py:'zhēngxiān-kǒnghòu de bàomíng',vn:'tranh nhau đăng ký'},
     {zh:'争先恐后地回答',py:'zhēngxiān-kǒnghòu de huídá',vn:'tranh nhau trả lời'},
     {zh:'争先恐后地上车',py:'zhēngxiān-kǒnghòu de shàng chē',vn:'tranh nhau lên xe'},
     {zh:'争先恐后报考',py:'zhēngxiān-kǒnghòu bàokǎo',vn:'tranh nhau đăng ký dự thi'},
     {zh:'争先恐后地发言',py:'zhēngxiān-kǒnghòu de fāyán',vn:'tranh nhau phát biểu'}
   ],
   patterns:[
     {s:'争先恐后(地) + V',m:'Tranh nhau …'},
     {s:'一……，大家就争先恐后地……',m:'Vừa …, mọi người đã tranh nhau …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói có hoạt động tình nguyện, các bạn đều tranh nhau đăng ký.',answer:'听说有志愿者活动，同学们都争先恐后地报名。',answerPy:'Tīngshuō yǒu zhìyuànzhě huódòng, tóngxuémen dōu zhēngxiān-kǒnghòu de bàomíng.',
      note:'Thành ngữ làm trạng ngữ + 地 + V.',pair:'Trạng ngữ + 地'},
     {promptLang:'vi',prompt:'Siêu thị vừa giảm giá, mọi người đã tranh nhau mua.',answer:'超市一打折，人们就争先恐后地抢购。',answerPy:'Chāoshì yì dǎzhé, rénmen jiù zhēngxiān-kǒnghòu de qiǎnggòu.',
      note:'一……就……; 抢购 = tranh mua.',pair:'一……就……'}
   ]},

  {n:37,zh:'热门',py:'rèmén',pos:'Danh từ',vn:'(ngành, thứ) được ưa chuộng, "hot"',hv:'nhiệt môn',em:'🔥',lesson:1,
   explain:['Thứ thu hút nhiều người quan tâm, được ưa chuộng (ngành học, nghề, chủ đề, điểm du lịch…).','Hay làm định ngữ: 热门专业, 热门话题. Trái nghĩa: 冷门.'],
   usage:'Hay gặp: 热门专业, 热门话题, 热门景点, 很热门, 成为热门. Khẩu ngữ tiếng Việt: "ngành hot".',
   collo:['热门专业','热门话题','热门景点','成为热门'],
   ex_zh:'由于人们争先恐后报考热门专业，以致人才饱和。',ex_py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé.',ex_vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà.',
   exList:[
     {zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'人工智能是现在最热门的话题之一。',py:'Réngōng zhìnéng shì xiànzài zuì rèmén de huàtí zhī yī.',vn:'Trí tuệ nhân tạo là một trong những chủ đề nóng nhất hiện nay.'},
     {zh:'选专业不能只看热门不热门，还要看自己擅长什么。',py:'Xuǎn zhuānyè bù néng zhǐ kàn rèmén bu rèmén, hái yào kàn zìjǐ shàncháng shénme.',vn:'Chọn ngành không thể chỉ nhìn xem có hot hay không, mà còn phải xem mình giỏi gì.'}
   ],
   colloFull:[
     {zh:'热门专业',py:'rèmén zhuānyè',vn:'ngành học hot'},
     {zh:'热门话题',py:'rèmén huàtí',vn:'chủ đề nóng'},
     {zh:'热门景点',py:'rèmén jǐngdiǎn',vn:'điểm du lịch hút khách'},
     {zh:'成为热门',py:'chéngwéi rèmén',vn:'trở nên hot'},
     {zh:'热门职业',py:'rèmén zhíyè',vn:'nghề đang được ưa chuộng'}
   ],
   patterns:[
     {s:'热门 + N (专业 / 话题 / 职业)',m:'… hot, được ưa chuộng'},
     {s:'热门 ↔ 冷门',m:'Được ưa chuộng ↔ ít người để ý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngành này bây giờ rất hot, nhưng bốn năm sau thì chưa chắc.',answer:'这个专业现在很热门，但是四年以后就不一定了。',answerPy:'Zhège zhuānyè xiànzài hěn rèmén, dànshì sì nián yǐhòu jiù bù yídìng le.',
      note:'不一定 = chưa chắc; 热门 có thể làm vị ngữ (很热门).',pair:'不一定'},
     {promptLang:'vi',prompt:'Thay vì chạy theo ngành hot, chi bằng chọn ngành mình thích.',answer:'与其追热门专业，不如选自己喜欢的专业。',answerPy:'Yǔqí zhuī rèmén zhuānyè, bùrú xuǎn zìjǐ xǐhuan de zhuānyè.',
      note:'与其……不如……: chọn phương án sau.',pair:'与其……不如……'}
   ]},

  {n:38,zh:'以致',py:'yǐzhì',pos:'Liên từ',vn:'cho nên, đến nỗi, dẫn đến',hv:'dĩ trí',em:'⤵️',lesson:1,
   explain:['Liên từ đứng đầu phân câu sau, nêu KẾT QUẢ do nguyên nhân phía trước gây ra.','Kết quả thường là điều không hay, không mong muốn (giống 致使 dạng liên từ).'],
   usage:'Hay gặp: ……，以致……; 由于……，以致……. Khác 以至 (thậm chí đến mức, chỉ mức độ). Văn viết.',
   collo:['以致人才饱和','以致失败','以致迟到','由于……，以致……'],
   ex_zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',ex_py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',ex_vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.',
   exList:[
     {zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'他平时不注意锻炼，以致一到冬天就感冒。',py:'Tā píngshí bú zhùyì duànliàn, yǐzhì yí dào dōngtiān jiù gǎnmào.',vn:'Bình thường cậu ấy không chú ý tập thể dục, đến nỗi cứ đến mùa đông là bị cảm.'},
     {zh:'她做事太草率，以致常常出错。',py:'Tā zuòshì tài cǎoshuài, yǐzhì chángcháng chūcuò.',vn:'Cô ấy làm việc quá qua loa, cho nên thường xuyên sai sót.'}
   ],
   colloFull:[
     {zh:'以致人才饱和',py:'yǐzhì réncái bǎohé',vn:'đến nỗi nhân lực bão hoà'},
     {zh:'以致失败',py:'yǐzhì shībài',vn:'dẫn đến thất bại'},
     {zh:'以致迟到',py:'yǐzhì chídào',vn:'đến nỗi bị muộn'},
     {zh:'由于……，以致……',py:'yóuyú ……, yǐzhì ……',vn:'do … nên …'},
     {zh:'以致出错',py:'yǐzhì chūcuò',vn:'cho nên sai sót'}
   ],
   patterns:[
     {s:'nguyên nhân，以致 + kết quả xấu',m:'…, đến nỗi …'},
     {s:'由于……，以致……',m:'Do …, cho nên … (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do chuẩn bị không đầy đủ, nên buổi thuyết trình của cậu ấy đã thất bại.',answer:'由于准备得不充分，以致他的演讲失败了。',answerPy:'Yóuyú zhǔnbèi de bù chōngfèn, yǐzhì tā de yǎnjiǎng shībài le.',
      note:'由于……，以致…… (kết quả xấu); bổ ngữ trình độ 准备得不充分.',pair:'由于……'},
     {promptLang:'vi',prompt:'Tối qua anh ấy thức khuya chơi game, đến nỗi sáng nay đến muộn.',answer:'他昨晚熬夜打游戏，以致今天早上迟到了。',answerPy:'Tā zuówǎn áoyè dǎ yóuxì, yǐzhì jīntiān zǎoshang chídào le.',
      note:'熬夜 ôn bài 2 (熬); 以致 đứng đầu vế kết quả.',pair:'Câu nhân quả'}
   ]},

  {n:39,zh:'饱和',py:'bǎohé',pos:'Động từ',vn:'bão hoà',hv:'bão hoà',em:'🫙',lesson:1,
   explain:['Thuật ngữ khoa học: dung dịch, không khí… chứa đến mức tối đa, không thể hoà thêm.','Nghĩa bóng: số lượng đã đạt đến mức tối đa, dư thừa (人才饱和, 市场饱和).'],
   usage:'Hay gặp: 人才饱和, 市场饱和, 已经饱和, 趋于饱和, 饱和状态. Trùng Hán–Việt "bão hoà".',
   collo:['人才饱和','市场饱和','已经饱和','趋于饱和'],
   ex_zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',ex_py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',ex_vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.',
   exList:[
     {zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'城市里的手机市场已经基本饱和了。',py:'Chéngshì li de shǒujī shìchǎng yǐjīng jīběn bǎohé le.',vn:'Thị trường điện thoại ở thành phố về cơ bản đã bão hoà.'},
     {zh:'这个行业的人才已经饱和，毕业生很难找到工作。',py:'Zhège hángyè de réncái yǐjīng bǎohé, bìyèshēng hěn nán zhǎodào gōngzuò.',vn:'Nhân lực ngành này đã bão hoà, sinh viên tốt nghiệp rất khó tìm việc.'}
   ],
   colloFull:[
     {zh:'人才饱和',py:'réncái bǎohé',vn:'nhân lực bão hoà'},
     {zh:'市场饱和',py:'shìchǎng bǎohé',vn:'thị trường bão hoà'},
     {zh:'已经饱和',py:'yǐjīng bǎohé',vn:'đã bão hoà'},
     {zh:'趋于饱和',py:'qūyú bǎohé',vn:'có xu hướng bão hoà'},
     {zh:'饱和状态',py:'bǎohé zhuàngtài',vn:'trạng thái bão hoà'}
   ],
   patterns:[
     {s:'N (市场 / 人才) + 饱和',m:'… bão hoà'},
     {s:'趋于饱和',m:'Dần bão hoà (于 = về phía)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu thị trường đã bão hoà thì phải tìm hướng đi mới.',answer:'如果市场已经饱和了，就要寻找新的方向。',answerPy:'Rúguǒ shìchǎng yǐjīng bǎohé le, jiù yào xúnzhǎo xīn de fāngxiàng.',
      note:'如果……就要……; 已经……了.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Chính vì ngành này nhân lực đã bão hoà nên tôi mới đổi sang ngành khác.',answer:'正因为这个行业人才饱和了，我才换了专业。',answerPy:'Zhèng yīnwèi zhège hángyè réncái bǎohé le, wǒ cái huànle zhuānyè.',
      note:'正因为……才……: nhấn mạnh nguyên nhân.',pair:'正因为……才……'}
   ]},

  {n:40,zh:'就业',py:'jiù yè',pos:'Động từ',vn:'có việc làm, tìm được việc',hv:'tựu nghiệp',em:'💼',lesson:1,
   explain:['Có được việc làm, tham gia lao động (thường nói về sinh viên, người lao động nói chung).','Động từ li hợp, không mang tân ngữ: 就业困难, 就业率; không nói 就业一家公司 (dùng 就职于).'],
   usage:'Hay gặp: 就业困难, 就业机会, 就业压力, 就业率, 毕业生就业, 促进就业. Trái nghĩa: 失业.',
   collo:['就业困难','就业机会','就业压力','就业率'],
   ex_zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',ex_py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',ex_vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.',
   exList:[
     {zh:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',py:'Yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan.',vn:'Do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc.'},
     {zh:'这所学校毕业生的就业率很高。',py:'Zhè suǒ xuéxiào bìyèshēng de jiùyèlǜ hěn gāo.',vn:'Tỷ lệ có việc làm của sinh viên tốt nghiệp trường này rất cao.'},
     {zh:'新工厂建成后，给当地提供了上千个就业机会。',py:'Xīn gōngchǎng jiànchéng hòu, gěi dāngdì tígōngle shàng qiān ge jiù yè jīhuì.',vn:'Nhà máy mới xây xong đã tạo ra hàng nghìn cơ hội việc làm cho địa phương.'}
   ],
   colloFull:[
     {zh:'就业困难',py:'jiù yè kùnnan',vn:'khó tìm việc'},
     {zh:'就业机会',py:'jiù yè jīhuì',vn:'cơ hội việc làm'},
     {zh:'就业压力',py:'jiù yè yālì',vn:'áp lực việc làm'},
     {zh:'就业率',py:'jiùyèlǜ',vn:'tỷ lệ có việc làm'},
     {zh:'促进就业',py:'cùjìn jiù yè',vn:'thúc đẩy việc làm'}
   ],
   patterns:[
     {s:'就业 + 困难 / 压力 / 机会',m:'… việc làm'},
     {s:'毕业生 + 就业',m:'Sinh viên tốt nghiệp tìm việc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Áp lực việc làm càng ngày càng lớn, vì vậy nhiều người chọn học lên cao.',answer:'就业压力越来越大，因此很多人选择继续读研究生。',answerPy:'Jiù yè yālì yuè lái yuè dà, yīncǐ hěn duō rén xuǎnzé jìxù dú yánjiūshēng.',
      note:'因此 = vì vậy (văn viết hơn 所以).',pair:'因此'},
     {promptLang:'vi',prompt:'Dù ngành này khó tìm việc, nhưng cô ấy vẫn kiên trì với ước mơ.',answer:'尽管这个专业就业困难，她还是坚持自己的梦想。',answerPy:'Jǐnguǎn zhège zhuānyè jiù yè kùnnan, tā háishi jiānchí zìjǐ de mèngxiǎng.',
      note:'尽管……还是……: tuy (sự thật) … vẫn ….',pair:'尽管……还是……'}
   ]},

  {n:41,zh:'及早',py:'jízǎo',pos:'Phó từ',vn:'sớm, nhanh chóng (kịp thời)',hv:'cập tảo',em:'⏰',lesson:1,
   explain:['Nhân lúc còn sớm (trước khi quá muộn, trước khi sự việc xấu đi).','Đứng trước động từ: 及早决定, 及早治疗, 及早抓住机会.'],
   usage:'Hay gặp: 及早决定, 及早治疗, 及早发现, 及早准备, 及早抓住机会. Khác 及时 (kịp thời, đúng lúc — có thể làm vị ngữ: 很及时).',
   collo:['及早决定','及早抓住机会','及早治疗','及早准备'],
   ex_zh:'谁能够及早抓住机会，谁就赢得了机遇。',ex_py:'Shéi nénggòu jízǎo zhuāzhù jīhuì, shéi jiù yíngdéle jīyù.',ex_vn:'Ai sớm nắm bắt được cơ hội thì người đó giành được thời cơ.',
   exList:[
     {zh:'谁能够及早抓住机会，谁就赢得了机遇。',py:'Shéi nénggòu jízǎo zhuāzhù jīhuì, shéi jiù yíngdéle jīyù.',vn:'Ai sớm nắm bắt được cơ hội thì người đó giành được thời cơ.'},
     {zh:'那个房子就不错，我看你还是及早决定吧，省得将来后悔。',py:'Nàge fángzi jiù búcuò, wǒ kàn nǐ háishi jízǎo juédìng ba, shěngde jiānglái hòuhuǐ.',vn:'Căn nhà đó được đấy, tớ thấy cậu nên sớm quyết định đi, kẻo sau này hối hận.'},
     {zh:'有病要及早治疗，千万别拖。',py:'Yǒu bìng yào jízǎo zhìliáo, qiānwàn bié tuō.',vn:'Có bệnh phải chữa sớm, nhất định đừng để lâu.'}
   ],
   colloFull:[
     {zh:'及早决定',py:'jízǎo juédìng',vn:'sớm quyết định'},
     {zh:'及早抓住机会',py:'jízǎo zhuāzhù jīhuì',vn:'sớm nắm lấy cơ hội'},
     {zh:'及早治疗',py:'jízǎo zhìliáo',vn:'chữa trị sớm'},
     {zh:'及早准备',py:'jízǎo zhǔnbèi',vn:'chuẩn bị sớm'},
     {zh:'及早发现',py:'jízǎo fāxiàn',vn:'phát hiện sớm'}
   ],
   patterns:[
     {s:'及早 + V',m:'Sớm … (trước khi quá muộn)'},
     {s:'及早……，省得 / 以免……',m:'Sớm … kẻo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nên sớm chuẩn bị, kẻo đến lúc đó lại cuống.',answer:'你应该及早准备，省得到时候着急。',answerPy:'Nǐ yīnggāi jízǎo zhǔnbèi, shěngde dào shíhou zháojí.',
      note:'省得 = kẻo, đỡ phải (khẩu ngữ, = 以免).',pair:'省得'},
     {promptLang:'vi',prompt:'Chỉ có phát hiện sớm thì mới có thể giải quyết vấn đề kịp thời.',answer:'只有及早发现，才能及时解决问题。',answerPy:'Zhǐyǒu jízǎo fāxiàn, cái néng jíshí jiějué wèntí.',
      note:'Phân biệt 及早 (sớm, trước) và 及时 (kịp lúc).',pair:'只有……才……'}
   ]},

  {n:42,zh:'机遇',py:'jīyù',pos:'Danh từ',vn:'cơ hội, thời cơ (tốt)',hv:'cơ ngộ',em:'🍀',lesson:1,
   explain:['Cơ hội tốt, dịp may (thường là cơ hội lớn, hiếm có).','Trang trọng hơn 机会; hay đi với 抓住, 赢得, 面临, 挑战与机遇.'],
   usage:'Hay gặp: 抓住机遇, 赢得机遇, 难得的机遇, 机遇与挑战, 错过机遇.',
   collo:['抓住机遇','赢得机遇','难得的机遇','机遇与挑战'],
   ex_zh:'谁能够及早抓住机会，谁就赢得了机遇。',ex_py:'Shéi nénggòu jízǎo zhuāzhù jīhuì, shéi jiù yíngdéle jīyù.',ex_vn:'Ai sớm nắm bắt được cơ hội thì người đó giành được thời cơ.',
   exList:[
     {zh:'而一些新职业的出现，需要新型人才的加入，谁能够及早抓住机会，谁就赢得了机遇。',py:'Ér yìxiē xīn zhíyè de chūxiàn, xūyào xīnxíng réncái de jiārù, shéi nénggòu jízǎo zhuāzhù jīhuì, shéi jiù yíngdéle jīyù.',vn:'Còn sự xuất hiện của một số nghề mới cần có nhân lực kiểu mới gia nhập, ai sớm nắm được cơ hội thì người đó giành được thời cơ.'},
     {zh:'只有不畏惧失败，才能抓住机遇，获得成功。',py:'Zhǐyǒu bú wèijù shībài, cái néng zhuāzhù jīyù, huòdé chénggōng.',vn:'Chỉ có không sợ thất bại mới nắm được thời cơ, giành được thành công.'},
     {zh:'这次出国交流是一次难得的机遇。',py:'Zhè cì chūguó jiāoliú shì yí cì nándé de jīyù.',vn:'Chuyến giao lưu nước ngoài lần này là một cơ hội hiếm có.'}
   ],
   colloFull:[
     {zh:'抓住机遇',py:'zhuāzhù jīyù',vn:'nắm bắt thời cơ'},
     {zh:'赢得机遇',py:'yíngdé jīyù',vn:'giành được thời cơ'},
     {zh:'难得的机遇',py:'nándé de jīyù',vn:'cơ hội hiếm có'},
     {zh:'机遇与挑战',py:'jīyù yǔ tiǎozhàn',vn:'thời cơ và thách thức'},
     {zh:'错过机遇',py:'cuòguò jīyù',vn:'bỏ lỡ thời cơ'}
   ],
   patterns:[
     {s:'抓住 / 赢得 / 错过 + 机遇',m:'Nắm / giành / bỏ lỡ thời cơ'},
     {s:'……既是挑战，也是机遇',m:'… vừa là thách thức, vừa là cơ hội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai nắm được thời cơ trước thì người đó sẽ thành công trước.',answer:'谁先抓住机遇，谁就先成功。',answerPy:'Shéi xiān zhuāzhù jīyù, shéi jiù xiān chénggōng.',
      note:'Đại từ nghi vấn hô ứng 谁……谁就…… (như bài khoá).',pair:'谁……谁就……'},
     {promptLang:'vi',prompt:'Cơ hội hiếm có như vậy, nếu bỏ lỡ thì quá đáng tiếc.',answer:'这么难得的机遇，要是错过了就太可惜了。',answerPy:'Zhème nándé de jīyù, yàoshi cuòguòle jiù tài kěxī le.',
      note:'要是……就……; 难得 ôn bài 2.',pair:'要是……就……'}
   ]},

  {n:43,zh:'心灵',py:'xīnlíng',pos:'Danh từ',vn:'tâm hồn, tâm linh',hv:'tâm linh',em:'💗',lesson:1,
   explain:['Tâm hồn, nội tâm, thế giới tinh thần của con người.','Tiếng Việt "tâm linh" thường chỉ tín ngưỡng thần bí; 心灵 tiếng Trung = tâm hồn (心灵美 = tâm hồn đẹp).'],
   usage:'Hay gặp: 心灵免疫力, 心灵手巧, 心灵美, 幼小的心灵, 心灵深处, 心灵的创伤.',
   collo:['心灵免疫力','心灵深处','幼小的心灵','心灵美'],
   ex_zh:'犯些小错并非坏事，它会增加我们的心灵免疫力。',ex_py:'Fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì.',ex_vn:'Phạm vài lỗi nhỏ không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta.',
   exList:[
     {zh:'犯些小错并非坏事，它会增加我们的心灵免疫力。',py:'Fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì.',vn:'Phạm vài lỗi nhỏ không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta.'},
     {zh:'父母吵架会伤害孩子幼小的心灵。',py:'Fùmǔ chǎojià huì shānghài háizi yòuxiǎo de xīnlíng.',vn:'Bố mẹ cãi nhau sẽ làm tổn thương tâm hồn non nớt của con trẻ.'},
     {zh:'老师的这句话一直留在我的心灵深处。',py:'Lǎoshī de zhè jù huà yìzhí liú zài wǒ de xīnlíng shēnchù.',vn:'Câu nói ấy của thầy luôn đọng lại nơi sâu thẳm tâm hồn tôi.'}
   ],
   colloFull:[
     {zh:'心灵免疫力',py:'xīnlíng miǎnyìlì',vn:'sức đề kháng tâm hồn'},
     {zh:'心灵深处',py:'xīnlíng shēnchù',vn:'sâu thẳm tâm hồn'},
     {zh:'幼小的心灵',py:'yòuxiǎo de xīnlíng',vn:'tâm hồn non nớt'},
     {zh:'心灵美',py:'xīnlíng měi',vn:'tâm hồn đẹp'},
     {zh:'心灵手巧',py:'xīnlíng shǒuqiǎo',vn:'khéo tay nhanh trí'}
   ],
   patterns:[
     {s:'伤害 / 温暖 + ……的心灵',m:'Làm tổn thương / sưởi ấm tâm hồn …'},
     {s:'在……的心灵深处',m:'Nơi sâu thẳm tâm hồn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một người không chỉ phải đẹp bề ngoài, mà quan trọng hơn là phải đẹp tâm hồn.',answer:'一个人不仅要外表美，更重要的是要心灵美。',answerPy:'Yí ge rén bùjǐn yào wàibiǎo měi, gèng zhòngyào de shì yào xīnlíng měi.',
      note:'不仅……更重要的是……: không chỉ … quan trọng hơn là ….',pair:'不仅……更……'},
     {promptLang:'vi',prompt:'Những lời nói ấy tuy đơn giản nhưng đã sưởi ấm tâm hồn tôi.',answer:'这些话虽然很简单，却温暖了我的心灵。',answerPy:'Zhèxiē huà suīrán hěn jiǎndān, què wēnnuǎnle wǒ de xīnlíng.',
      note:'虽然……却……; 温暖 dùng như động từ (sưởi ấm).',pair:'虽然……却……'}
   ]},

  {n:44,zh:'免疫',py:'miǎnyì',pos:'Động từ',vn:'miễn dịch',hv:'miễn dịch',em:'🛡️',lesson:1,
   explain:['Cơ thể có khả năng chống lại bệnh truyền nhiễm; nghĩa bóng: không còn bị ảnh hưởng bởi điều gì.','Hay gặp dạng 免疫力 (sức đề kháng), 对……免疫 (miễn nhiễm với …).'],
   usage:'Hay gặp: 免疫力, 提高免疫力, 增加免疫力, 免疫系统, 对……免疫. Chữ 疫 đọc yì (Hán Việt: dịch, như 防疫 = phòng dịch).',
   collo:['免疫力','提高免疫力','心灵免疫力','免疫系统'],
   ex_zh:'犯些小错并非坏事，它会增加我们的心灵免疫力。',ex_py:'Fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì.',ex_vn:'Phạm vài lỗi nhỏ không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta.',
   exList:[
     {zh:'犯些小错并非坏事，它会增加我们的心灵免疫力。',py:'Fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì.',vn:'Phạm vài lỗi nhỏ không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta.'},
     {zh:'经常锻炼身体可以提高免疫力。',py:'Jīngcháng duànliàn shēntǐ kěyǐ tígāo miǎnyìlì.',vn:'Thường xuyên tập thể dục có thể nâng cao sức đề kháng.'},
     {zh:'被批评多了，他好像对批评已经免疫了。',py:'Bèi pīpíng duō le, tā hǎoxiàng duì pīpíng yǐjīng miǎnyì le.',vn:'Bị phê bình nhiều rồi, cậu ta hình như đã "miễn nhiễm" với lời phê bình.'}
   ],
   colloFull:[
     {zh:'免疫力',py:'miǎnyìlì',vn:'sức đề kháng'},
     {zh:'提高免疫力',py:'tígāo miǎnyìlì',vn:'nâng cao sức đề kháng'},
     {zh:'心灵免疫力',py:'xīnlíng miǎnyìlì',vn:'sức đề kháng tâm hồn'},
     {zh:'免疫系统',py:'miǎnyì xìtǒng',vn:'hệ miễn dịch'},
     {zh:'对……免疫',py:'duì …… miǎnyì',vn:'miễn nhiễm với …'}
   ],
   patterns:[
     {s:'提高 / 增加 + 免疫力',m:'Nâng cao / tăng sức đề kháng'},
     {s:'对 + N + 免疫',m:'Miễn nhiễm với … (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần ăn uống điều độ, ngủ đủ giấc là có thể nâng cao sức đề kháng.',answer:'只要饮食有规律、睡眠充足，就能提高免疫力。',answerPy:'Zhǐyào yǐnshí yǒu guīlǜ, shuìmián chōngzú, jiù néng tígāo miǎnyìlì.',
      note:'只要……就……; 提高 đi với 免疫力.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Vì sức đề kháng kém, cứ trở trời là em gái bị cảm.',answer:'由于免疫力差，天气一变妹妹就感冒。',answerPy:'Yóuyú miǎnyìlì chà, tiānqì yí biàn mèimei jiù gǎnmào.',
      note:'一……就……: hễ … là …; 由于 nêu nguyên nhân.',pair:'一……就……'}
   ]},

  {n:45,zh:'决策',py:'juécè',pos:'Động từ',vn:'quyết sách, ra quyết định (chiến lược)',hv:'quyết sách',em:'🧠',lesson:1,
   explain:['Quyết định phương sách, chiến lược (thường cho việc lớn, quan trọng).','Cũng là danh từ: quyết sách, quyết định (做出决策, 正确的决策). 决策能力 = năng lực ra quyết định.'],
   usage:'Hay gặp: 决策能力, 做出决策, 正确的决策, 决策失误, 参与决策. Trang trọng hơn 决定.',
   collo:['决策能力','做出决策','正确的决策','决策失误'],
   ex_zh:'只有不断提升自己的决策能力，才能真正为自己的人生做主。',ex_py:'Zhǐyǒu búduàn tíshēng zìjǐ de juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',ex_vn:'Chỉ có không ngừng nâng cao năng lực ra quyết định của mình thì mới có thể thật sự làm chủ cuộc đời mình.',
   exList:[
     {zh:'不确定中充满成长的机会，只有不断提升自己的决策能力，才能真正为自己的人生做主。',py:'Bú quèdìng zhōng chōngmǎn chéngzhǎng de jīhuì, zhǐyǒu búduàn tíshēng zìjǐ de juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',vn:'Trong sự bất định đầy rẫy cơ hội trưởng thành, chỉ có không ngừng nâng cao năng lực ra quyết định thì mới thật sự làm chủ được cuộc đời mình.'},
     {zh:'由于决策失误，公司损失了一大笔钱。',py:'Yóuyú juécè shīwù, gōngsī sǔnshīle yí dà bǐ qián.',vn:'Do quyết sách sai lầm, công ty mất một khoản tiền lớn.'},
     {zh:'事实证明，这个决策是正确的。',py:'Shìshí zhèngmíng, zhège juécè shì zhèngquè de.',vn:'Thực tế chứng minh quyết định này là đúng đắn.'}
   ],
   colloFull:[
     {zh:'决策能力',py:'juécè nénglì',vn:'năng lực ra quyết định'},
     {zh:'做出决策',py:'zuòchū juécè',vn:'đưa ra quyết sách'},
     {zh:'正确的决策',py:'zhèngquè de juécè',vn:'quyết sách đúng đắn'},
     {zh:'决策失误',py:'juécè shīwù',vn:'quyết sách sai lầm'},
     {zh:'参与决策',py:'cānyù juécè',vn:'tham gia ra quyết định'}
   ],
   patterns:[
     {s:'提升 / 提高 + 决策能力',m:'Nâng cao năng lực ra quyết định'},
     {s:'做出 + (正确的) + 决策',m:'Đưa ra quyết sách (đúng đắn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi đưa ra quyết định quan trọng, nhất định phải cân nhắc kỹ lưỡng.',answer:'在做出重要决策之前，一定要仔细权衡。',answerPy:'Zài zuòchū zhòngyào juécè zhīqián, yídìng yào zǐxì quánhéng.',
      note:'在……之前: trước khi …; 权衡 ôn bài 5.',pair:'在……之前'},
     {promptLang:'vi',prompt:'Không ngừng thực hành, năng lực ra quyết định của cậu mới ngày càng mạnh.',answer:'只有不断实践，你的决策能力才会越来越强。',answerPy:'Zhǐyǒu búduàn shíjiàn, nǐ de juécè nénglì cái huì yuè lái yuè qiáng.',
      note:'只有……才……; 不断 + V (không ngừng).',pair:'只有……才……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng; đoạn đối thoại tách từng lượt lời)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 我的人生我做主',
   preQuiz:[
     {q:'小王毕业以后一直做什么工作？',opts:['老师','会计','心理专家'],ans:1},
     {q:'小王觉得现在的工作怎么样？',opts:['枯燥而且压力大','轻松又有意思','收入很低但很稳定'],ans:0},
     {q:'小王对什么感兴趣？',opts:['金融和数学','艺术和心理学','体育和音乐'],ans:1},
     {q:'小王为什么迟迟不敢换工作？',opts:['父母不同意','怕选错了要付出很大的成本','公司不让他走'],ans:1},
     {q:'心理专家认为，是什么致使小王急躁、紧张、顾虑重重？',opts:['工作太忙','对自己缺乏信心，对未来过度悲观','经济压力太大'],ans:1},
     {q:'乔布斯说，精确的判断力来自哪里？',opts:['天生的智慧','经验的积累','书本知识'],ans:1},
     {q:'乔布斯说，经验又来自哪里？',opts:['无数错误的判断','别人的建议','成功的经历'],ans:0},
     {q:'课文认为，做决定的能力是怎么得来的？',opts:['天生的','通过实践和挫折得来的','在学校里学到的'],ans:1},
     {q:'为什么说生活中的不确定因素日益增多？',opts:['因为年轻人越来越多','因为世界一流企业也会亏损、倒闭，金融危机会使企业裁员','因为人们越来越不喜欢工作'],ans:1},
     {q:'作者认为，现在人们一生中的职业选择会怎么样？',opts:['越来越少','要经历更多次','只有一次'],ans:1},
     {q:'人们争先恐后报考热门专业，结果怎么样？',opts:['人才饱和，就业困难','很容易找到工作','工资越来越高'],ans:0},
     {q:'作者怎么看待“犯些小错”？',opts:['是很危险的事','并非坏事，会增加心灵免疫力','应该尽量避免'],ans:1},
     {q:'怎样才能真正为自己的人生做主？',opts:['选一份安稳的工作','不断提升自己的决策能力','听从父母的安排'],ans:1}
   ],
   lines:[
    {sp:0,zh:'最近，小王正为工作的事伤脑筋。毕业于3年前的他，一直做会计，成天和数字打交道，枯燥而且压力大，他做梦都想换一份工作。小王对艺术、心理学都感兴趣，觉得当老师也不错，可他不确定自己真正擅长什么，怕万一选错了，要付出很大的时间成本和经济成本，为此他变得急躁、紧张、顾虑重重。',
     py:'Zuìjìn, Xiǎo Wáng zhèng wèi gōngzuò de shì shāng nǎojīn. Bìyè yú sān nián qián de tā, yìzhí zuò kuàijì, chéngtiān hé shùzì dǎ jiāodao, kūzào érqiě yālì dà, tā zuòmèng dōu xiǎng huàn yí fèn gōngzuò. Xiǎo Wáng duì yìshù, xīnlǐxué dōu gǎn xìngqù, juéde dāng lǎoshī yě búcuò, kě tā bú quèdìng zìjǐ zhēnzhèng shàncháng shénme, pà wànyī xuǎncuò le, yào fùchū hěn dà de shíjiān chéngběn hé jīngjì chéngběn, wèi cǐ tā biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',
     vn:'Dạo gần đây, Tiểu Vương đang đau đầu vì chuyện công việc. Tốt nghiệp từ ba năm trước, anh ấy làm kế toán suốt, cả ngày giao du với những con số, vừa nhàm chán vừa áp lực lớn, nằm mơ anh cũng muốn đổi một công việc khác. Tiểu Vương đều hứng thú với nghệ thuật và tâm lý học, thấy làm giáo viên cũng không tệ, nhưng anh không chắc bản thân thật sự giỏi cái gì, sợ lỡ chọn sai thì phải trả giá lớn về thời gian và tiền bạc, vì thế anh trở nên bồn chồn, căng thẳng, lo trước lo sau.'},
    {sp:0,zh:'心理专家认为，对自己缺乏信心，对未来过度悲观致使小王出现以上现象。悲观主要包括：我不敢想最坏的结果是什么；我无法承受这个结果；一旦选错，终身悔恨，甚至会觉得人生都没有希望了。其实，类似小王这样的年轻人并非少数，不知道小王们是否读过下面这段对话：',
     py:'Xīnlǐ zhuānjiā rènwéi, duì zìjǐ quēfá xìnxīn, duì wèilái guòdù bēiguān zhìshǐ Xiǎo Wáng chūxiàn yǐshàng xiànxiàng. Bēiguān zhǔyào bāokuò: wǒ bù gǎn xiǎng zuì huài de jiéguǒ shì shénme; wǒ wúfǎ chéngshòu zhège jiéguǒ; yídàn xuǎncuò, zhōngshēn huǐhèn, shènzhì huì juéde rénshēng dōu méiyǒu xīwàng le. Qíshí, lèisì Xiǎo Wáng zhèyàng de niánqīngrén bìngfēi shǎoshù, bù zhīdào Xiǎo Wángmen shìfǒu dúguo xiàmiàn zhè duàn duìhuà:',
     vn:'Chuyên gia tâm lý cho rằng, thiếu tự tin vào bản thân, bi quan quá mức về tương lai đã khiến Tiểu Vương xuất hiện những hiện tượng trên. Sự bi quan chủ yếu gồm: tôi không dám nghĩ kết quả tệ nhất là gì; tôi không chịu nổi kết quả ấy; một khi chọn sai sẽ hối hận cả đời, thậm chí còn thấy cuộc đời chẳng còn hy vọng gì. Thật ra, những người trẻ giống như Tiểu Vương không phải là số ít, không biết các "Tiểu Vương" đã từng đọc đoạn đối thoại dưới đây chưa:'},
    {sp:0,zh:'年轻人：你的智慧从哪里来？',py:'Niánqīngrén: Nǐ de zhìhuì cóng nǎlǐ lái?',vn:'Chàng trai trẻ: Trí tuệ của ông từ đâu mà có?'},
    {sp:0,zh:'乔布斯：来自精确的判断力。',py:'Qiáobùsī: Láizì jīngquè de pànduànlì.',vn:'Steve Jobs: Từ khả năng phán đoán chính xác.'},
    {sp:0,zh:'年轻人：精确的判断力从哪里来？',py:'Niánqīngrén: Jīngquè de pànduànlì cóng nǎlǐ lái?',vn:'Chàng trai trẻ: Khả năng phán đoán chính xác từ đâu mà có?'},
    {sp:0,zh:'乔布斯：来自经验的积累。',py:'Qiáobùsī: Láizì jīngyàn de jīlěi.',vn:'Steve Jobs: Từ sự tích luỹ kinh nghiệm.'},
    {sp:0,zh:'年轻人：那你的经验又从哪里来？',py:'Niánqīngrén: Nà nǐ de jīngyàn yòu cóng nǎlǐ lái?',vn:'Chàng trai trẻ: Vậy kinh nghiệm của ông lại từ đâu mà có?'},
    {sp:0,zh:'乔布斯：来自无数错误的判断。',py:'Qiáobùsī: Láizì wúshù cuòwù de pànduàn.',vn:'Steve Jobs: Từ vô số lần phán đoán sai lầm.'},
    {sp:0,zh:'做决定是一种能力，而能力不是天生的，是通过实践和挫折得来的，在这个过程中，人同时具有了坚定的意志力和敏锐的判断力，不畏惧付出和失败，勇于承担责任，这就是成长。',
     py:'Zuò juédìng shì yì zhǒng nénglì, ér nénglì bú shì tiānshēng de, shì tōngguò shíjiàn hé cuòzhé délái de, zài zhège guòchéng zhōng, rén tóngshí jùyǒule jiāndìng de yìzhìlì hé mǐnruì de pànduànlì, bú wèijù fùchū hé shībài, yǒngyú chéngdān zérèn, zhè jiù shì chéngzhǎng.',
     vn:'Ra quyết định là một năng lực, mà năng lực thì không phải bẩm sinh, nó có được qua thực tiễn và vấp ngã; trong quá trình ấy, con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén, không sợ bỏ công sức và thất bại, dám gánh vác trách nhiệm — đó chính là trưởng thành.'},
    {sp:0,zh:'事实上，伴随着经济全球化，生活中的不确定因素日益增多。昔日风光无限的世界一流企业也会亏损，也会倒闭；一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。这意味着，原本英明的决定今天看来可能并非如此了。',
     py:'Shìshí shang, bànsuízhe jīngjì quánqiúhuà, shēnghuó zhōng de bú quèdìng yīnsù rìyì zēngduō. Xīrì fēngguāng wúxiàn de shìjiè yīliú qǐyè yě huì kuīsǔn, yě huì dǎobì; yí cì jīnróng wēijī, jiù huì shǐ yìxiē liánnián yínglì, yùnxíng hěn hǎo de qǐyè bùdébù cáiyuán. Zhè yìwèizhe, yuánběn yīngmíng de juédìng jīntiān kànlái kěnéng bìngfēi rúcǐ le.',
     vn:'Thực tế là, cùng với toàn cầu hoá kinh tế, những yếu tố bất định trong cuộc sống ngày càng tăng. Những doanh nghiệp hàng đầu thế giới từng một thời vẻ vang vô hạn cũng có thể thua lỗ, cũng có thể phá sản; chỉ một cuộc khủng hoảng tài chính cũng khiến một số doanh nghiệp lãi liên tục nhiều năm, vận hành rất tốt buộc phải cắt giảm nhân sự. Điều này có nghĩa là, quyết định vốn sáng suốt, ngày nay nhìn lại có thể không còn như vậy nữa.'},
    {sp:0,zh:'依我看，无论你怎么选择，都不太可能选一份称心如意的工作安安稳稳一辈子，由于经济环境的不确定，企业的寿命越来越短，现在，人们要经历更多次的职业选择。除此以外，由于人们争先恐后报考热门专业，以致人才饱和，就业困难。而一些新职业的出现，需要新型人才的加入，谁能够及早抓住机会，谁就赢得了机遇。',
     py:'Yī wǒ kàn, wúlùn nǐ zěnme xuǎnzé, dōu bú tài kěnéng xuǎn yí fèn chènxīn rúyì de gōngzuò ān\'ānwěnwěn yíbèizi, yóuyú jīngjì huánjìng de bú quèdìng, qǐyè de shòumìng yuè lái yuè duǎn, xiànzài, rénmen yào jīnglì gèng duō cì de zhíyè xuǎnzé. Chú cǐ yǐwài, yóuyú rénmen zhēngxiān-kǒnghòu bàokǎo rèmén zhuānyè, yǐzhì réncái bǎohé, jiù yè kùnnan. Ér yìxiē xīn zhíyè de chūxiàn, xūyào xīnxíng réncái de jiārù, shéi nénggòu jízǎo zhuāzhù jīhuì, shéi jiù yíngdéle jīyù.',
     vn:'Theo tôi, dù bạn chọn thế nào thì cũng khó có thể chọn được một công việc như ý rồi yên ổn cả đời; do môi trường kinh tế bất định, tuổi thọ của doanh nghiệp ngày càng ngắn, ngày nay con người phải trải qua nhiều lần lựa chọn nghề nghiệp hơn. Ngoài ra, do mọi người tranh nhau thi vào các ngành hot nên nhân lực bão hoà, khó tìm việc. Còn sự xuất hiện của một số nghề mới lại cần có nhân lực kiểu mới gia nhập, ai sớm nắm được cơ hội thì người đó giành được thời cơ.'},
    {sp:0,zh:'不要怕犯错，不要害怕走弯路，犯些小错并非坏事，它会增加我们的心灵免疫力。不确定中充满成长的机会，只有不断提升自己的决策能力，才能真正为自己的人生做主。',
     py:'Bú yào pà fàn cuò, bú yào hàipà zǒu wānlù, fàn xiē xiǎo cuò bìngfēi huàishì, tā huì zēngjiā wǒmen de xīnlíng miǎnyìlì. Bú quèdìng zhōng chōngmǎn chéngzhǎng de jīhuì, zhǐyǒu búduàn tíshēng zìjǐ de juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',
     vn:'Đừng sợ mắc lỗi, đừng sợ đi đường vòng, phạm vài lỗi nhỏ hoàn toàn không phải chuyện xấu, nó sẽ tăng sức đề kháng cho tâm hồn chúng ta. Trong sự bất định đầy rẫy cơ hội trưởng thành, chỉ có không ngừng nâng cao năng lực ra quyết định của mình thì mới có thể thật sự làm chủ cuộc đời mình.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 日益—越来越 lấy từ sách (tr. 79, 做一做 theo đáp án sách); 致使—以致, 伴随—随着 tự thêm (致使, 以致, 伴随 đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'日益 — 越来越',
   same:'Đều biểu thị mức độ phát triển theo thời gian, ngày một hơn.',
   sameEx:{zh:'建立外交关系后，两国的往来日益／越来越密切。',vn:'Sau khi thiết lập quan hệ ngoại giao, sự qua lại giữa hai nước ngày càng mật thiết.'},
   items:[
     {word:'日益',points:[
       'Phó từ văn viết, chỉ đi với động từ HAI âm tiết (日益增多, 日益改善) — không đi với động từ một âm tiết.',
       'Chỉ đi với tính từ HAI âm tiết (日益严重, 日益密切) — không nói 日益好, 日益高, 日益多.',
       'Không cần 了 cuối câu; hay gặp trong báo chí, văn bản.'
     ],ex:[{zh:'改革开放后，人们的生活状况日益改善。',vn:'Sau cải cách mở cửa, đời sống của người dân ngày càng được cải thiện.'},
          {zh:'最近几十年，人口问题日益严重。',vn:'Mấy chục năm gần đây, vấn đề dân số ngày càng nghiêm trọng.'}]},
     {word:'越来越',points:[
       'Đi với rất ít động từ, chủ yếu là động từ tâm lý: 喜欢, 想, 希望, 盼望… (越来越喜欢).',
       'Đi được với tính từ bất kỳ số âm tiết: 越来越冷, 越来越寒冷.',
       'Dùng cả khẩu ngữ lẫn văn viết, cuối câu hay có 了.'
     ],ex:[{zh:'我越来越喜欢周末去郊区玩儿了。',vn:'Tôi ngày càng thích cuối tuần ra ngoại ô chơi.'},
          {zh:'天气越来越冷了。',vn:'Trời ngày càng lạnh.'}]}
   ],
   quiz:[
     {sentence:'随着年龄的增长，奶奶的身体＿＿差了。',options:['日益','越来越'],answer:1,why:'差 là tính từ MỘT âm tiết → chỉ dùng 越来越. 日益 cần tính từ hai âm tiết.'},
     {sentence:'伴随着经济全球化，生活中的不确定因素＿＿增多。',options:['日益','越来越'],answer:0,why:'增多 là động từ hai âm tiết, văn viết → 日益增多 (câu trong bài khoá). 越来越 rất ít đi với động từ thường.'},
     {sentence:'和他相处久了，我＿＿喜欢这个朋友了。',options:['日益','越来越'],answer:1,why:'喜欢 là động từ tâm lý → 越来越喜欢. 日益 không đi với động từ tâm lý kiểu này.'},
     {sentence:'两国之间的经济合作＿＿密切。',options:['日益','越来越'],answer:0,both:true,why:'密切 là tính từ hai âm tiết → cả hai đều được; văn phong trang trọng thường chọn 日益.'}
   ],
   sgk:{
     chung:{t:'都表示程度随着时间发展，一天比一天更。',vn:'Đều biểu thị mức độ phát triển theo thời gian, ngày một hơn.',vd:'建立外交关系后，两国的往来日益／越来越密切。',vdVn:'Sau khi thiết lập quan hệ ngoại giao, sự qua lại giữa hai nước ngày càng mật thiết.'},
     khac:[
       {a:{t:'“日益”后面可带双音节动词，不能带单音节动词。',vn:'Sau 日益 có thể là động từ hai âm tiết, không thể là động từ một âm tiết.',vd:'改革开放后，人们的生活状况日益改善。',vdVn:'Sau cải cách mở cửa, đời sống của người dân ngày càng được cải thiện.'},
        b:{t:'“越来越”后面可带的动词很少，大多是心理动词，如“喜欢、想、希望、盼望”等。',vn:'Sau 越来越 rất ít khi là động từ, phần lớn là động từ tâm lý như 喜欢, 想, 希望, 盼望….',vd:'①我越来越喜欢周末去郊区玩儿了。（√）　②人们的生活状况越来越改善。（×）',vdVn:'① Tôi ngày càng thích cuối tuần ra ngoại ô chơi. (đúng) ② 人们的生活状况越来越改善 (sai).'}},
       {a:{t:'“日益”后面可带双音节形容词，不能带单音节形容词。',vn:'Sau 日益 có thể là tính từ hai âm tiết, không thể là tính từ một âm tiết.',vd:'①最近几十年，人口问题日益严重。（√）　②我的汉语水平日益高了。（×）',vdVn:'① Mấy chục năm gần đây, vấn đề dân số ngày càng nghiêm trọng. (đúng) ② 我的汉语水平日益高了 (sai).'},
        b:{t:'“越来越”后面可带任何音节的形容词。',vn:'Sau 越来越 có thể là tính từ với số âm tiết bất kỳ.',vd:'①天气越来越寒冷了。　②天气越来越冷了。',vdVn:'① Trời ngày càng giá lạnh. ② Trời ngày càng lạnh.'}}
     ],
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'城乡人民的消费水平日益提高，消费结构也发生了变化。',dap:[true,false],
        giai:'ĐÚNG. 提高 là động từ hai âm tiết → 日益提高 đúng quy tắc.'},
       {s:'大家普遍认为市场上销售的产品种类越来越增加了。',dap:[false,true],
        giai:'SAI. 越来越 rất ít đi với động từ thường như 增加. Sửa: 日益增加 hoặc 越来越多了.'},
       {s:'最近的一项调查显示世界各国的经济形势日益好了。',dap:[false,true],
        giai:'SAI. 好 là tính từ một âm tiết, không đi với 日益. Sửa: 越来越好了 (hoặc 日益好转).'},
       {s:'受中国朋友的影响，我越来越喜欢东方文化了。',dap:[true,false],
        giai:'ĐÚNG. 喜欢 là động từ tâm lý → 越来越喜欢 đúng.'}
     ]
   }},

  {pair:'致使 — 以致',
   same:'Đều có thể đứng đầu phân câu sau, nêu KẾT QUẢ do nguyên nhân phía trước gây ra; kết quả thường là điều không hay. Đều là văn viết.',
   sameEx:{zh:'由于连日暴风雪，致使／以致几千名乘客滞留机场。',vn:'Do bão tuyết nhiều ngày liền, mấy nghìn hành khách bị kẹt lại ở sân bay.'},
   items:[
     {word:'致使',points:[
       'Vừa là ĐỘNG TỪ vừa là liên từ: có thể làm vị ngữ ngay sau chủ ngữ chỉ nguyên nhân: 他的粗心致使试验失败.',
       'Sau 致使 thường là một cụm "người/vật + hành động" (致使 + 小王 + 出现……).',
       'Nhấn mạnh "khiến cho, làm cho" — nghĩa gây khiến rõ.'
     ],ex:[{zh:'对未来过度悲观致使小王出现以上现象。',vn:'Bi quan quá mức về tương lai đã khiến Tiểu Vương xuất hiện những hiện tượng trên.'},
          {zh:'他的粗心致使试验失败。',vn:'Sự cẩu thả của anh ấy khiến thí nghiệm thất bại.'}]},
     {word:'以致',points:[
       'Chỉ là LIÊN TỪ, luôn đứng đầu phân câu sau (……，以致……).',
       'Không đứng ngay sau một danh từ chủ ngữ để làm vị ngữ: không nói 他的粗心以致试验失败 (nên dùng 致使 / 导致).',
       'Phía sau có thể là cụm động từ không cần chủ ngữ mới: ……，以致常常出错.'
     ],ex:[{zh:'人们争先恐后报考热门专业，以致人才饱和，就业困难。',vn:'Mọi người tranh nhau thi vào các ngành hot, đến nỗi nhân lực bão hoà, khó tìm việc.'},
          {zh:'她做事太草率，以致常常出错。',vn:'Cô ấy làm việc quá qua loa, đến nỗi thường xuyên sai sót.'}]}
   ],
   quiz:[
     {sentence:'他的粗心＿＿这次试验失败了。',options:['致使','以致'],answer:0,why:'Ngay sau chủ ngữ danh từ (他的粗心), cần ĐỘNG TỪ gây khiến → 致使. 以致 chỉ là liên từ đầu vế sau.'},
     {sentence:'他平时不注意锻炼，＿＿一到冬天就感冒。',options:['致使','以致'],answer:1,why:'Vế sau không có chủ ngữ mới, chỉ là cụm động từ → 以致. 致使 cần "người + hành động" phía sau.'},
     {sentence:'暖冬＿＿流感病人大量增加。',options:['致使','以致'],answer:0,why:'暖冬 là chủ ngữ, 致使 là động từ vị ngữ: 暖冬致使流感病人增加 (练一练 của sách).'},
     {sentence:'由于地址不清楚，＿＿信件无法送达。',options:['致使','以致'],answer:0,both:true,why:'Đầu vế sau, kết quả xấu → cả hai đều được (đáp án sách dùng 致使).'}
   ]},

  {pair:'伴随 — 随着',
   same:'Đều có thể đứng đầu câu, nêu một quá trình mà sự việc phía sau thay đổi theo: 伴随着 / 随着 + N / mệnh đề, …….',
   sameEx:{zh:'伴随着／随着经济全球化，生活中的不确定因素日益增多。',vn:'Cùng với toàn cầu hoá kinh tế, những yếu tố bất định trong cuộc sống ngày càng tăng.'},
   items:[
     {word:'伴随',points:[
       'Là ĐỘNG TỪ: làm vị ngữ được, mang 了 / 着, có tân ngữ: 这把琴伴随了他一生.',
       'Có dạng 伴随……而来 (đến cùng với …).',
       'Đầu câu thường dùng dạng 伴随着; văn phong trang trọng, nhấn mạnh "song hành, đi kèm".'
     ],ex:[{zh:'这把小提琴伴随了爷爷一生。',vn:'Cây vĩ cầm này đã theo ông suốt cả cuộc đời.'},
          {zh:'成功往往伴随着无数次失败。',vn:'Thành công thường đi kèm với vô số lần thất bại.'}]},
     {word:'随着',points:[
       'Chủ yếu là GIỚI TỪ: chỉ đứng đầu câu / trước vị ngữ, tạo cụm trạng ngữ 随着……，…….',
       'Không làm vị ngữ độc lập: không nói 这把琴随着了他一生.',
       'Dùng cả khẩu ngữ và văn viết; hay đi với 越来越 / 日益 ở vế sau.'
     ],ex:[{zh:'随着经济的发展，城市里汽车的数量日益增多。',vn:'Cùng với sự phát triển kinh tế, số lượng ô tô trong thành phố ngày càng nhiều.'},
          {zh:'随着年龄的增长，他变得越来越成熟了。',vn:'Cùng với tuổi tác tăng lên, cậu ấy ngày càng chín chắn.'}]}
   ],
   quiz:[
     {sentence:'这块手表＿＿了爷爷整整五十年。',options:['伴随','随着'],answer:0,why:'Làm vị ngữ, mang 了 và tân ngữ 爷爷 → chỉ động từ 伴随.'},
     {sentence:'＿＿年龄的增长，他变得越来越成熟了。',options:['伴随','随着'],answer:1,why:'Cụm trạng ngữ đầu câu với danh từ 年龄的增长, khẩu ngữ tự nhiên → 随着. (伴随 muốn dùng phải thêm 着.)'},
     {sentence:'成功往往＿＿着无数次失败。',options:['伴随','随着'],answer:0,why:'Làm vị ngữ "đi kèm với" → 伴随着. 随着 không làm vị ngữ.'},
     {sentence:'＿＿互联网的普及，网上购物的人日益增多。',options:['伴随','随着'],answer:1,why:'Đầu câu, giới từ nêu điều kiện thay đổi → 随着 (伴随 thì phải là 伴随着).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'意志',hv:'ý chí',vn:'ý chí',note:'Trùng khít. 意志力 = sức mạnh ý chí.'},
    {zh:'运行',hv:'vận hành',vn:'vận hành',note:'Trùng khít — máy móc, tàu xe, doanh nghiệp đều dùng được.'},
    {zh:'饱和',hv:'bão hoà',vn:'bão hoà',note:'Trùng khít cả nghĩa khoa học lẫn nghĩa bóng (thị trường bão hoà).'},
    {zh:'免疫',hv:'miễn dịch',vn:'miễn dịch',note:'Trùng khít. 免疫力 = sức đề kháng.'},
    {zh:'英明',hv:'anh minh',vn:'sáng suốt',note:'"Anh minh" trong tiếng Việt hơi cổ (vua anh minh); 英明的决定 dịch "quyết định sáng suốt".'},
    {zh:'决策',hv:'quyết sách',vn:'quyết sách, ra quyết định',note:'Trùng khít. 决策能力 = năng lực ra quyết định.'},
    {zh:'悔恨',hv:'hối hận',vn:'ân hận sâu sắc',note:'Cùng gốc "hối hận" nhưng nặng hơn 后悔 — dịch "ân hận, hối hận khôn nguôi".'},
    {zh:'天生',hv:'thiên sinh',vn:'bẩm sinh, trời sinh',note:'"Thiên sinh" ít dùng; nhớ qua "trời sinh".'},
    {zh:'精确',hv:'tinh xác',vn:'chính xác (tỉ mỉ)',note:'精 = tinh (tinh vi), 确 = xác (chính xác) → chính xác đến từng chi tiết.'},
    {zh:'畏惧',hv:'uý cụ',vn:'sợ hãi',note:'畏 như trong "kính uý", 惧 như trong "cụ" (sợ) → sợ hãi.'}
  ],
  idiom:[
    {zh:'称心如意',hv:'xứng tâm như ý',vn:'vừa lòng như ý',note:'"Như ý" ai cũng hiểu; chú ý 称 đọc chèn (hợp với), không đọc chēng.'},
    {zh:'争先恐后',hv:'tranh tiên khủng hậu',vn:'tranh nhau lên trước',note:'Tranh (争) đi trước (先), sợ (恐) ở sau (后).'},
    {zh:'顾虑重重',hv:'cố lự trùng trùng',vn:'lo trước lo sau',note:'"Trùng trùng" = chồng chất — nỗi lo chồng chất.'},
    {zh:'专心致志',hv:'chuyên tâm trí chí',vn:'một lòng một dạ',note:'Có trong đáp án 练习1 (chữ 致). Tương đương "chuyên tâm".'}
  ],
  trap:[
    {zh:'危机',hv:'nguy cơ',vn:'khủng hoảng',
     warn:'BẪY: "nguy cơ" tiếng Việt = khả năng xảy ra điều xấu (tiếng Trung: 风险 / 危险). 危机 tiếng Trung là cuộc KHỦNG HOẢNG đang xảy ra: 金融危机 = khủng hoảng tài chính.'},
    {zh:'心灵',hv:'tâm linh',vn:'tâm hồn',
     warn:'"Tâm linh" tiếng Việt nghiêng về tín ngưỡng, thế giới siêu nhiên. 心灵 chỉ là tâm hồn, nội tâm: 心灵美 = tâm hồn đẹp.'},
    {zh:'过度',hv:'quá độ',vn:'quá mức',
     warn:'"Thời kỳ quá độ" tiếng Việt là 过渡 (chuyển tiếp) — khác chữ. 过度 = quá mức: 过度悲观 = bi quan quá mức.'},
    {zh:'终身',hv:'chung thân',vn:'suốt đời',
     warn:'Tiếng Việt "chung thân" gần như chỉ dùng trong "tù chung thân". 终身 dùng rộng: 终身学习 = học tập suốt đời, 终身难忘 = suốt đời khó quên.'},
    {zh:'成本',hv:'thành bản',vn:'giá thành, chi phí',
     warn:'Không phải "bản thành" hay "vốn". 成本 = chi phí bỏ ra; 时间成本 = cái giá về thời gian. "Vốn" là 本钱 / 资本.'},
    {zh:'风光',hv:'phong quang',vn:'vẻ vang (tính từ)',
     warn:'Dễ hiểu nhầm là "phong cảnh" (nghĩa danh từ). Trong bài, 风光无限 = vẻ vang vô hạn, 很风光 = nở mày nở mặt.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'为工作的事',right:'伤脑筋'},
  {left:'时间',right:'成本'},
  {left:'顾虑',right:'重重'},
  {left:'过度',right:'悲观'},
  {left:'终身',right:'悔恨'},
  {left:'精确的',right:'判断力'},
  {left:'坚定的',right:'意志力'},
  {left:'勇于',right:'承担责任'},
  {left:'不畏惧',right:'失败'},
  {left:'经济',right:'全球化'},
  {left:'风光',right:'无限'},
  {left:'金融',right:'危机'},
  {left:'连年',right:'盈利'},
  {left:'不得不',right:'裁员'},
  {left:'英明的',right:'决定'},
  {left:'称心如意的',right:'工作'},
  {left:'报考热门',right:'专业'},
  {left:'人才',right:'饱和'},
  {left:'抓住',right:'机遇'},
  {left:'心灵',right:'免疫力'},
  {left:'决策',right:'能力'},
  {left:'走',right:'弯路'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'选什么专业是你自己的事，你自己',blank:'做主',post:'吧。',hint:'(tự quyết định)',ans:'做主'},
  {pre:'弟弟成天玩游戏，真让妈妈',blank:'伤脑筋',post:'。',hint:'(đau đầu)',ans:'伤脑筋'},
  {pre:'这本书的内容太',blank:'枯燥',post:'了，我看了几页就睡着了。',hint:'(khô khan, nhàm chán)',ans:'枯燥'},
  {pre:'我不太',blank:'擅长',post:'跟陌生人打交道，一说话就紧张。',hint:'(giỏi về)',ans:'擅长'},
  {pre:'工厂想方设法降低',blank:'成本',post:'，产品价格才降了下来。',hint:'(giá thành)',ans:'成本'},
  {pre:'学外语不能',blank:'急躁',post:'，得一步一步来。',hint:'(nôn nóng)',ans:'急躁'},
  {pre:'你有什么',blank:'顾虑',post:'就说出来，别憋在心里。',hint:'(băn khoăn, lo ngại)',ans:'顾虑'},
  {pre:'',blank:'过度',post:'使用手机，对眼睛伤害很大。',hint:'(quá mức)',ans:'过度'},
  {pre:'在知识更新这么快的时代，每个人都需要',blank:'终身',post:'学习。',hint:'(suốt đời)',ans:'终身'},
  {pre:'想起当年对父母说的那些话，他',blank:'悔恨',post:'不已。',hint:'(ân hận)',ans:'悔恨'},
  {pre:'以后再遇到',blank:'类似',post:'的问题，你就知道怎么办了。',hint:'(tương tự)',ans:'类似'},
  {pre:'这次实验的数据必须',blank:'精确',post:'，一点儿也不能马虎。',hint:'(chính xác tỉ mỉ)',ans:'精确'},
  {pre:'谁也不是',blank:'天生',post:'就会说话的，都是慢慢学会的。',hint:'(bẩm sinh)',ans:'天生'},
  {pre:'经历过这次',blank:'挫折',post:'，他反而变得更成熟了。',hint:'(vấp ngã)',ans:'挫折'},
  {pre:'军训虽然很苦，但能磨炼我们的',blank:'意志',post:'。',hint:'(ý chí)',ans:'意志'},
  {pre:'这位记者很',blank:'敏锐',post:'，一下子就发现了问题所在。',hint:'(nhạy bén)',ans:'敏锐'},
  {pre:'面对强大的对手，他毫不',blank:'畏惧',post:'。',hint:'(sợ hãi)',ans:'畏惧'},
  {pre:'这把小提琴',blank:'伴随',post:'了爷爷一生。',hint:'(đi theo, song hành)',ans:'伴随'},
  {pre:'',blank:'昔日',post:'的小渔村，如今已经变成了热闹的旅游城市。',hint:'(ngày xưa)',ans:'昔日'},
  {pre:'他考上了名牌大学，全家人都觉得很',blank:'风光',post:'。',hint:'(vẻ vang)',ans:'风光'},
  {pre:'这家商店连年',blank:'亏损',post:'，老板不得不把它卖了。',hint:'(thua lỗ)',ans:'亏损'},
  {pre:'学校门口那家书店面临',blank:'倒闭',post:'，同学们都很舍不得。',hint:'(phá sản, đóng cửa)',ans:'倒闭'},
  {pre:'上海是中国重要的',blank:'金融',post:'中心之一。',hint:'(tài chính)',ans:'金融'},
  {pre:'全家人齐心协力，终于度过了这次',blank:'危机',post:'。',hint:'(khủng hoảng)',ans:'危机'},
  {pre:'这家小店开业半年就开始',blank:'盈利',post:'了。',hint:'(có lãi)',ans:'盈利'},
  {pre:'地铁的',blank:'运行',post:'时间是早上六点到晚上十一点。',hint:'(vận hành)',ans:'运行'},
  {pre:'听说公司要',blank:'裁员',post:'，大家都人心惶惶。',hint:'(cắt giảm nhân sự)',ans:'裁员'},
  {pre:'事实证明，当初换专业是一个',blank:'英明',post:'的决定。',hint:'(sáng suốt)',ans:'英明'},
  {pre:'现在想找一个',blank:'称心如意',post:'的房子本来就很难。',hint:'(như ý)',ans:'称心如意'},
  {pre:'图书馆',blank:'除',post:'周一外，每天都开放。',hint:'(trừ … ra)',ans:'除'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (于 · 致使 · 并非) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['毕业','于','3年前的','他','，','一直','做会计','。'],ans:'毕业于3年前的他，一直做会计。',audio:'毕业于3年前的他，一直做会计。'},
  {words:['著名的','西湖龙井茶','产于','浙江省的','西湖一带','。'],ans:'著名的西湖龙井茶产于浙江省的西湖一带。',audio:'著名的西湖龙井茶产于浙江省的西湖一带。'},
  {words:['我','一直想','去旅行','，','只是','苦于','没有时间','。'],ans:'我一直想去旅行，只是苦于没有时间。',audio:'我一直想去旅行，只是苦于没有时间。'},
  {words:['他的','粗心','致使','试验','失败','。'],ans:'他的粗心致使试验失败。',audio:'他的粗心致使试验失败。'},
  {words:['因为','地址不清楚','，','致使','信件','无法送达','。'],ans:'因为地址不清楚，致使信件无法送达。',audio:'因为地址不清楚，致使信件无法送达。'},
  {words:['类似小王','这样的','年轻人','并非','少数','。'],ans:'类似小王这样的年轻人并非少数。',audio:'类似小王这样的年轻人并非少数。'},
  {words:['犯些','小错','并非','坏事','，','它会增加','我们的','心灵免疫力','。'],ans:'犯些小错并非坏事，它会增加我们的心灵免疫力。',audio:'犯些小错并非坏事，它会增加我们的心灵免疫力。'},
  {words:['真相','其实','并非','跟你想象的','一样','。'],ans:'真相其实并非跟你想象的一样。',audio:'真相其实并非跟你想象的一样。'},
  {words:['生活中的','不确定因素','日益','增多','。'],ans:'生活中的不确定因素日益增多。',audio:'生活中的不确定因素日益增多。'},
  {words:['我们','应该','勇于','承认','自己的','错误','。'],ans:'我们应该勇于承认自己的错误。',audio:'我们应该勇于承认自己的错误。'},
  {words:['满18岁','就','意味着','成人了','。'],ans:'满18岁就意味着成人了。',audio:'满18岁就意味着成人了。'},
  {words:['谁','能够','及早','抓住机会','，','谁','就','赢得了','机遇','。'],ans:'谁能够及早抓住机会，谁就赢得了机遇。',audio:'谁能够及早抓住机会，谁就赢得了机遇。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他的粗心____这次试验失败了。',opts:['致使','以致','因此','于是'],ans:0,
   exp:'Ngay sau chủ ngữ chỉ nguyên nhân (他的粗心) cần động từ gây khiến → 致使. 以致, 因此, 于是 là liên từ, phải đứng đầu vế sau, không làm vị ngữ.'},
  {wrong:'犯些小错____坏事，它会增加我们的心灵免疫力。',opts:['并非','并且','并存','无非'],ans:0,
   exp:'并非 = hoàn toàn không phải (bác bỏ). 并且 = và, hơn nữa; 并存 = cùng tồn tại; 无非 (bài 5) = chẳng qua là — nghĩa ngược lại.'},
  {wrong:'我们应该____承认自己的错误。',opts:['勇于','勇敢','勇气','乐于'],ans:0,
   exp:'勇于 + động từ = dám (dũng cảm) làm. 勇敢 là tính từ, muốn làm trạng ngữ phải là 勇敢地; 勇气 là danh từ (dũng khí); 乐于 = vui lòng làm (nghĩa khác).'},
  {wrong:'伴随着经济全球化，生活中的不确定因素____增多。',opts:['日益','越来越','日常','日期'],ans:0,
   exp:'增多 là động từ hai âm tiết, văn viết → 日益增多. 越来越 hầu như chỉ đi với động từ tâm lý (越来越喜欢); 日常 (thường ngày), 日期 (ngày tháng) không phải phó từ.'},
  {wrong:'受他的影响，我____喜欢京剧了。',opts:['越来越','日益','日常','逐年'],ans:0,
   exp:'喜欢 là động từ tâm lý → 越来越喜欢 (đúng như 做一做 ④). 日益 không đi với động từ tâm lý kiểu này; 逐年 = qua từng năm, không hợp.'},
  {wrong:'满18岁就____成人了，要承担起成年人的责任。',opts:['意味着','意见','意思','意识到'],ans:0,
   exp:'A 就意味着 B = A có nghĩa là B (đáp án 练习2 ②). 意见, 意思 là danh từ; 意识到 = nhận thức được (chủ thể là người).'},
  {wrong:'老师一提问，同学们都____地举手回答。',opts:['争先恐后','称心如意','顾虑重重','风光无限'],ans:0,
   exp:'Tranh nhau giơ tay trả lời → 争先恐后地 + V. Ba thành ngữ còn lại không làm trạng ngữ hành động được như vậy.'},
  {wrong:'人工智能是现在最____的话题之一。',opts:['热门','热心','热情','热闹'],ans:0,
   exp:'热门话题 = chủ đề nóng, được quan tâm. 热心 = nhiệt tình (người); 热情 = nồng nhiệt; 热闹 = náo nhiệt (nơi chốn).'},
  {wrong:'她做事太草率，____常常出错。',opts:['以致','致使','以免','以便'],ans:0,
   exp:'Vế sau là cụm động từ không có chủ ngữ mới, kết quả xấu → 以致. 致使 cần "người/vật + hành động" phía sau; 以免 = để tránh; 以便 = để tiện (mục đích).'},
  {wrong:'城市里的手机市场已经基本____了。',opts:['饱和','饱满','满足','充满'],ans:0,
   exp:'市场饱和 = thị trường bão hoà. 饱满 = đầy đặn (hạt, tinh thần); 满足 = thoả mãn; 充满 phải có tân ngữ.'},
  {wrong:'这所学校毕业生的____率很高。',opts:['就业','就职','职业','事业'],ans:0,
   exp:'就业率 = tỷ lệ có việc làm. 就职 (bài 6) = nhận chức ở đâu; 职业 = nghề nghiệp; 事业 = sự nghiệp — đều không ghép với 率 như vậy.'},
  {wrong:'有病要____治疗，千万别拖。',opts:['及早','早晚','早已','早上'],ans:0,
   exp:'及早 + V = sớm (trước khi muộn). 早晚 = sớm muộn gì; 早已 = từ lâu đã; 早上 = buổi sáng.'},
  {wrong:'只有不畏惧失败，才能抓住____，获得成功。',opts:['机遇','遭遇','待遇','相遇'],ans:0,
   exp:'抓住机遇 = nắm bắt thời cơ. 遭遇 = gặp phải (điều xấu); 待遇 = đãi ngộ; 相遇 = gặp gỡ nhau.'},
  {wrong:'父母吵架会伤害孩子幼小的____。',opts:['心灵','心情','心得','灵魂'],ans:0,
   exp:'幼小的心灵 = tâm hồn non nớt (cụm cố định). 心情 = tâm trạng (nhất thời); 心得 = điều tâm đắc; 灵魂 = linh hồn — ít dùng với 幼小.'},
  {wrong:'经常锻炼身体可以提高____力。',opts:['免疫','防疫','疫苗','预防'],ans:0,
   exp:'免疫力 = sức đề kháng. 防疫 = phòng dịch; 疫苗 = vắc-xin; 预防 = phòng ngừa — không ghép với 力.'},
  {wrong:'由于____失误，公司损失了一大笔钱。',opts:['决策','决心','对策','政策'],ans:0,
   exp:'决策失误 = quyết sách sai lầm. 决心 = quyết tâm; 对策 = đối sách (cách đối phó); 政策 = chính sách nhà nước.'},
  {wrong:'我不确定自己真正____什么。',opts:['擅长','善于','特长','长处'],ans:0,
   exp:'擅长 + tân ngữ danh từ / đại từ (什么). 善于 phải có động từ theo sau (善于交际); 特长, 长处 là danh từ, không làm động từ.'},
  {wrong:'老师的一番话打消了我的____。',opts:['顾虑','考虑','忧虑','焦虑'],ans:0,
   exp:'打消顾虑 = xua tan băn khoăn (cụm cố định). 考虑 = suy nghĩ cân nhắc; 忧虑, 焦虑 là trạng thái lo âu, không đi với 打消.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–6 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Môn nào cậu ấy cũng giỏi, chỉ riêng viết văn là đối với cậu ấy hoàn toàn không phải chuyện dễ.',zh:'各科他都很擅长，唯独写作文对他来说并非易事。',py:'Gè kē tā dōu hěn shàncháng, wéidú xiě zuòwén duì tā lái shuō bìngfēi yìshì.',goiY:['……都……，唯独……','擅长','并非易事'],giai:'……都……，唯独…… (bài 6) tách riêng một ngoại lệ; "hoàn toàn không phải chuyện dễ" = 并非易事 — 并 nhấn mạnh phủ định, không cần thêm 是.'},
  {vi:'Do quá căng thẳng trước kỳ thi, cô ấy làm sai cả những câu mình biết làm.',zh:'由于考前过度紧张，致使她连会做的题也做错了。',py:'Yóuyú kǎo qián guòdù jǐnzhāng, zhìshǐ tā lián huì zuò de tí yě zuòcuò le.',goiY:['由于……，致使……','过度','连……也……'],giai:'致使 đứng đầu vế sau nêu kết quả KHÔNG mong muốn; sau 致使 là "người + hành động" (她……做错了). "Quá căng thẳng" = 过度紧张, không dịch 太过紧张的.'},
  {vi:'Chuyện chọn ngành thật khiến tôi đau đầu, chỉ mong bố mẹ quyết thay mình, vậy mà họ lại bảo tôi tự quyết.',zh:'选专业的事真让我伤脑筋，恨不得爸妈替我做主，他们却让我自己决定。',py:'Xuǎn zhuānyè de shì zhēn ràng wǒ shāng nǎojīn, hènbude bà mā tì wǒ zuò zhǔ, tāmen què ràng wǒ zìjǐ juédìng.',goiY:['让……伤脑筋','恨不得','替……做主','却'],giai:'让 + người + 伤脑筋 = khiến ai đau đầu (có thể nói mạnh hơn: 伤透了脑筋); 恨不得 (bài 2) = chỉ mong; 替 + người + 做主 = quyết thay ai; 却 nối vế trái ngược mong đợi.'},
  {vi:'Thay vì lo trước lo sau, chần chừ mãi không dám đăng ký, chi bằng mạnh dạn thử, cùng lắm thì thất bại một lần.',zh:'与其顾虑重重、迟迟不敢报名，不如勇于尝试，大不了失败一次。',py:'Yǔqí gùlǜ chóngchóng, chíchí bù gǎn bàomíng, bùrú yǒngyú chángshì, dàbuliǎo shībài yí cì.',goiY:['与其……不如……','顾虑重重','勇于','大不了'],giai:'与其 A 不如 B: người nói chọn B; 勇于 + động từ (尝试, bài 4); 大不了 (bài 6) nêu phương án xấu nhất vẫn chấp nhận được.'},
  {vi:'Chỉ có không sợ vấp ngã mới tôi luyện được ý chí kiên định, nếu không thì hễ gặp khó khăn là sẽ muốn bỏ cuộc.',zh:'只有不畏惧挫折，才能磨炼出坚定的意志，否则一遇到困难就会想放弃。',py:'Zhǐyǒu bú wèijù cuòzhé, cái néng móliàn chū jiāndìng de yìzhì, fǒuzé yí yùdào kùnnan jiù huì xiǎng fàngqì.',goiY:['只有……才……','畏惧','挫折','否则'],giai:'只有……才…… (điều kiện duy nhất) + 否则 (nếu không thì) = ba vế; 畏惧 văn viết hơn 害怕, mang tân ngữ 挫折.'},
  {vi:'Dù trận đấu lần này gặp thất bại thì cũng hoàn toàn không có nghĩa là em kém, mấu chốt nằm ở chỗ có rút ra được bài học từ đó hay không.',zh:'即使这次比赛遭遇了挫折，也并不意味着你不行，关键在于能不能从中吸取教训。',py:'Jíshǐ zhè cì bǐsài zāoyùle cuòzhé, yě bìng bú yìwèizhe nǐ bù xíng, guānjiàn zàiyú néng bu néng cóng zhōng xīqǔ jiàoxun.',goiY:['即使……也……','并不意味着','在于'],giai:'即使……也…… (giả thiết nhượng bộ); 并不意味着 = hoàn toàn không có nghĩa là; 在于 (于 = 在, về mặt): "nằm ở chỗ".'},
  {vi:'Hiện nay nhiều bạn tranh nhau thi vào các ngành hot một cách mù quáng mà rất ít khi nghĩ xem mình thật sự giỏi gì, đến nỗi sau khi tốt nghiệp khó tìm việc.',zh:'现在许多同学争先恐后地盲目报考热门专业，却很少考虑自己真正擅长什么，以致毕业后就业困难。',py:'Xiànzài xǔduō tóngxué zhēngxiān-kǒnghòu de mángmù bàokǎo rèmén zhuānyè, què hěn shǎo kǎolǜ zìjǐ zhēnzhèng shàncháng shénme, yǐzhì bìyè hòu jiù yè kùnnan.',goiY:['争先恐后','盲目','以致','就业'],giai:'以致 đứng đầu vế cuối, nêu hệ quả xấu; hai trạng ngữ 争先恐后地 + 盲目 đứng trước 报考. 盲目 ôn bài 4.'},
  {vi:'Đã là chuyện chuyển trường cậu tự quyết rồi thì hãy sớm nói với bố mẹ đi, kẻo họ nghe từ người khác rồi trong lòng không vui.',zh:'既然转学的事你已经自己做主了，就及早告诉父母吧，省得他们从别人那里知道后心里不舒服。',py:'Jìrán zhuǎnxué de shì nǐ yǐjīng zìjǐ zuò zhǔ le, jiù jízǎo gàosu fùmǔ ba, shěngde tāmen cóng biérén nàlǐ zhīdào hòu xīnli bù shūfu.',goiY:['既然……就……','做主','及早','省得'],giai:'既然 + sự thật, 就 + lời khuyên; 及早 (sớm, trước khi muộn) đứng trước động từ; 省得 = kẻo, đỡ phải — vế mục đích tránh điều không hay.'},
  {vi:'Tốt nghiệp trường danh tiếng hoàn toàn không phải là sự bảo đảm cho thành công; nếu không không ngừng nâng cao năng lực của mình thì ưu thế ngày trước cũng sẽ dần biến mất.',zh:'毕业于名牌大学并非成功的保证，如果不能不断提升自己的能力，昔日的优势也会渐渐消失。',py:'Bìyè yú míngpái dàxué bìngfēi chénggōng de bǎozhèng, rúguǒ bù néng búduàn tíshēng zìjǐ de nénglì, xīrì de yōushì yě huì jiànjiàn xiāoshī.',goiY:['毕业于','并非','如果……也……','昔日'],giai:'毕业于 + nơi (于 = 在, văn viết); 并非 bác bỏ quan niệm "trường danh tiếng = thành công"; 如果……也…… nêu hệ quả dù có ưu thế.'},
  {vi:'Một người sở dĩ luôn do dự không quyết, không phải vì bẩm sinh thiếu khả năng phán đoán, mà là vì sợ mắc lỗi, không dám gánh vác trách nhiệm.',zh:'一个人之所以总是犹豫不决，并非因为他天生缺乏判断力，而是因为他害怕犯错，不敢承担责任。',py:'Yí ge rén zhī suǒyǐ zǒngshì yóuyù bù jué, bìngfēi yīnwèi tā tiānshēng quēfá pànduànlì, ér shì yīnwèi tā hàipà fàn cuò, bù gǎn chéngdān zérèn.',goiY:['之所以……','并非……而是……','天生'],giai:'之所以 (kết quả) + 并非因为……而是因为…… (bác bỏ nguyên nhân sai, nêu nguyên nhân đúng) — câu khó nhất: giữ đúng thứ tự kết quả trước, nguyên nhân sau.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Tiểu Vương tốt nghiệp từ ba năm trước, suốt ngày giao du với những con số, thấy công việc nhàm chán lại áp lực, đang đau đầu vì chuyện đổi việc.',zh:'毕业于三年前的小王成天和数字打交道，觉得工作枯燥又有压力，正为换工作的事伤脑筋。',py:'Bìyè yú sān nián qián de Xiǎo Wáng chéngtiān hé shùzì dǎ jiāodao, juéde gōngzuò kūzào yòu yǒu yālì, zhèng wèi huàn gōngzuò de shì shāng nǎojīn.',goiY:['毕业于 = tốt nghiệp (vào lúc)','成天 = suốt ngày','枯燥 = nhàm chán','伤脑筋 = đau đầu'],giai:'毕业于三年前的小王: cụm định ngữ dài đặt trước tên — tiếng Việt nên tách thành vế "Tiểu Vương tốt nghiệp từ ba năm trước"; 和……打交道 = giao du, tiếp xúc với.'},
  {vi:'Tiểu Vương không chắc mình giỏi gì, chỉ sợ lỡ chọn sai thì phải trả cái giá lớn về thời gian.',zh:'小王不确定自己擅长什么，生怕万一选错了，要付出很大的时间成本。',py:'Xiǎo Wáng bú quèdìng zìjǐ shàncháng shénme, shēngpà wànyī xuǎncuò le, yào fùchū hěn dà de shíjiān chéngběn.',goiY:['擅长 = giỏi về','生怕 = chỉ sợ','万一 = lỡ như','成本 = cái giá, chi phí'],giai:'时间成本 dịch "cái giá về thời gian / tốn thời gian", không dịch "giá thành thời gian"; 生怕 mạnh hơn 怕.'},
  {vi:'Chuyên gia tâm lý cho rằng việc bi quan quá mức về tương lai đã khiến Tiểu Vương trở nên bồn chồn, căng thẳng, lo trước lo sau.',zh:'心理专家认为，对未来过度悲观致使小王变得急躁、紧张、顾虑重重。',py:'Xīnlǐ zhuānjiā rènwéi, duì wèilái guòdù bēiguān zhìshǐ Xiǎo Wáng biàn de jízào, jǐnzhāng, gùlǜ chóngchóng.',goiY:['过度 = quá mức','致使 = khiến cho','急躁 = bồn chồn','顾虑重重 = lo trước lo sau'],giai:'Chủ ngữ của 致使 là cả cụm 对未来过度悲观 — dịch thêm "việc" cho tự nhiên: "việc bi quan quá mức … đã khiến …".'},
  {vi:'Anh ấy luôn lo một khi chọn sai sẽ hối hận cả đời, thật ra những người trẻ giống anh ấy không phải số ít.',zh:'他总担心一旦选错就会终身悔恨，其实类似他这样的年轻人并非少数。',py:'Tā zǒng dānxīn yídàn xuǎncuò jiù huì zhōngshēn huǐhèn, qíshí lèisì tā zhèyàng de niánqīngrén bìngfēi shǎoshù.',goiY:['一旦……就…… = một khi … thì …','终身悔恨 = hối hận cả đời','类似 = giống như','并非少数 = không phải số ít'],giai:'其实 chuyển ý "thật ra"; 类似他这样的年轻人 = những người trẻ giống như anh ấy; 并非少数 có thể dịch thoáng "không hề hiếm".'},
  {vi:'Jobs cho rằng khả năng phán đoán chính xác không phải bẩm sinh mà đến từ sự tích luỹ kinh nghiệm, còn kinh nghiệm lại đến từ vô số lần phán đoán sai.',zh:'乔布斯认为，精确的判断力并不是天生的，而是来自经验的积累，而经验又来自无数错误的判断。',py:'Qiáobùsī rènwéi, jīngquè de pànduànlì bìng bú shì tiānshēng de, ér shì láizì jīngyàn de jīlěi, ér jīngyàn yòu láizì wúshù cuòwù de pànduàn.',goiY:['精确 = chính xác','天生 = bẩm sinh','不是……而是…… = không phải … mà là …','来自 = đến từ'],giai:'Hai chữ 而 khác nhau: 而是 (mà là) trong cặp 不是……而是……, còn 而经验又…… = "còn kinh nghiệm thì lại …" (nối tiếp chuỗi nguyên nhân).'},
  {vi:'Con người chỉ có trong thực tiễn và vấp ngã mới có được ý chí kiên định, không sợ thất bại, dám gánh vác trách nhiệm.',zh:'人只有在实践和挫折中才能具有坚定的意志力，不畏惧失败，勇于承担责任。',py:'Rén zhǐyǒu zài shíjiàn hé cuòzhé zhōng cái néng jùyǒu jiāndìng de yìzhìlì, bú wèijù shībài, yǒngyú chéngdān zérèn.',goiY:['只有……才…… = chỉ có … mới …','挫折 = vấp ngã','畏惧 = sợ hãi','勇于 = dám'],giai:'只有 đặt trước cụm 在……中 (điều kiện), 才 trước động từ; 不畏惧……，勇于…… là hai vế song song — dịch "không sợ …, dám …".'},
  {vi:'Cùng với toàn cầu hoá kinh tế, ngay cả những doanh nghiệp hàng đầu từng một thời vẻ vang vô hạn cũng có thể thua lỗ, thậm chí phá sản.',zh:'伴随着经济全球化，就连昔日风光无限的一流企业也可能亏损甚至倒闭。',py:'Bànsuízhe jīngjì quánqiúhuà, jiù lián xīrì fēngguāng wúxiàn de yīliú qǐyè yě kěnéng kuīsǔn shènzhì dǎobì.',goiY:['伴随着 = cùng với','连……也…… = ngay cả … cũng …','风光无限 = vẻ vang vô hạn','亏损 = thua lỗ'],giai:'连……也…… nhấn mạnh trường hợp khó ngờ nhất; 甚至 tăng tiến (thua lỗ → thậm chí phá sản). 昔日 dịch "từng một thời / ngày trước".'},
  {vi:'Một cuộc khủng hoảng tài chính có thể khiến doanh nghiệp lãi nhiều năm liền buộc phải cắt giảm nhân sự; điều đó có nghĩa là quyết định dù sáng suốt đến mấy cũng có thể trở nên lỗi thời.',zh:'一场金融危机就可能使连年盈利的企业不得不裁员，这意味着再英明的决定也可能过时。',py:'Yì cháng jīnróng wēijī jiù kěnéng shǐ liánnián yínglì de qǐyè bùdébù cáiyuán, zhè yìwèizhe zài yīngmíng de juédìng yě kěnéng guòshí.',goiY:['使……不得不…… = khiến … buộc phải …','危机 = khủng hoảng','意味着 = có nghĩa là','再……也…… = dù … đến mấy cũng …'],giai:'危机 dịch "khủng hoảng" chứ không phải "nguy cơ"; 再 + adj + 的 + N + 也…… = dù … đến mấy cũng ….'},
  {vi:'Do mọi người tranh nhau thi vào các ngành hot, những ngành này thừa nhân lực, sinh viên tốt nghiệp ngày càng khó tìm việc.',zh:'由于大家争先恐后地报考热门专业，致使这些专业人才饱和，毕业生就业越来越难。',py:'Yóuyú dàjiā zhēngxiān-kǒnghòu de bàokǎo rèmén zhuānyè, zhìshǐ zhèxiē zhuānyè réncái bǎohé, bìyèshēng jiù yè yuè lái yuè nán.',goiY:['由于……，致使…… = do … nên …','争先恐后 = tranh nhau','热门 = hot, được ưa chuộng','饱和 = bão hoà'],giai:'由于……，致使…… nêu nguyên nhân – kết quả xấu; 人才饱和 dịch thoáng "thừa nhân lực" tự nhiên hơn "nhân tài bão hoà".'},
  {vi:'Phạm vài lỗi nhỏ hoàn toàn không phải chuyện xấu, ngược lại còn tăng sức đề kháng cho tâm hồn; chỉ có không ngừng nâng cao năng lực ra quyết định thì mới thật sự làm chủ được cuộc đời mình.',zh:'犯些小错并非坏事，反而能增强心灵免疫力；只有不断提升决策能力，才能真正为自己的人生做主。',py:'Fàn xiē xiǎo cuò bìngfēi huàishì, fǎn\'ér néng zēngqiáng xīnlíng miǎnyìlì; zhǐyǒu búduàn tíshēng juécè nénglì, cái néng zhēnzhèng wèi zìjǐ de rénshēng zuò zhǔ.',goiY:['并非 = hoàn toàn không phải','反而 = ngược lại','心灵免疫力 = sức đề kháng tâm hồn','只有……才…… = chỉ có … mới …'],giai:'Dấu ；chia câu thành hai ý lớn: (1) 并非……反而…… lật ngược cách nhìn về lỗi sai; (2) 只有……才…… nêu điều kiện. 心灵 dịch "tâm hồn", không dịch "tâm linh".'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 82)
// Đề không phải 缩写 mà là viết bài theo đề (判断力来自哪里): dàn ý = 5 câu hỏi gợi ý trong đề
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:300,
  de:'这篇课文告诉我们，敏锐的判断力来自实践和挫折。那么你是怎样在实践和挫折中提升自己的判断力的？请以“判断力来自哪里”为题，结合自己的实际经历写一篇不少于300字的文章。（提示：你在做什么事情时犹豫不决？什么因素促使你做出了决定？事实证明这个决策是否正确？通过这件事，你明白了什么道理？这件事是如何提升你的判断力的？）',
  prompt:'Bài khoá cho chúng ta biết: khả năng phán đoán nhạy bén đến từ thực tiễn và vấp ngã. Vậy em đã nâng cao khả năng phán đoán của mình trong thực tiễn và vấp ngã như thế nào? Hãy lấy "判断力来自哪里" (Khả năng phán đoán đến từ đâu) làm nhan đề, kết hợp trải nghiệm thực tế của bản thân, viết một bài văn không dưới 300 chữ. (Gợi ý: Em đã do dự không quyết khi làm việc gì? Yếu tố nào thúc đẩy em đưa ra quyết định? Thực tế chứng minh quyết định ấy có đúng không? Qua việc này em hiểu ra đạo lý gì? Việc này đã nâng cao khả năng phán đoán của em như thế nào?)',
  dan:[
    {hoi:'你在做什么事情时犹豫不决？',goiY:'①题目：判断力来自哪里 ②……时，我正为……的事伤脑筋 ③怕万一……，过度的担心致使我顾虑重重、犹豫不决'},
    {hoi:'什么因素促使你做出了决定？',goiY:'①……的话打消了我的顾虑：“……并非……” ②我又认真比较了……，发现…… ③这些因素促使我最终勇于为自己做主'},
    {hoi:'事实证明这个决策是否正确？',goiY:'①事实证明，这个决策是正确的 ②……日益提高 ③当然也遇到过挫折，可我没有灰心，而是……'},
    {hoi:'通过这件事，你明白了什么道理？',goiY:'①……固然重要，但…… ②精确的判断力不是天生的，而是在实践和挫折中得来的'},
    {hoi:'这件事是如何提升你的判断力的？',goiY:'①每做一次决定，我的判断力就…… ②以后遇到问题，我会及早……，不再……'}
  ],
  tuNen:['伤脑筋','顾虑重重','致使','并非','做主','决策','挫折','精确','天生','及早'],
  cauTruc:[
    {ten:'以“判断力来自哪里”为题', nhan:'Nhan đề', vd:'（题目：判断力来自哪里）', khi:'Đặt đúng nhan đề đề bài yêu cầu, ghi ở dòng đầu.'},
    {ten:'……时，我正为……的事伤脑筋', nhan:'Mở bài', vd:'高一快结束时，我正为选文科还是理科的事伤脑筋。', khi:'Nêu thời điểm và việc khiến em do dự (trả lời gợi ý 1).'},
    {ten:'过度的……致使……', nhan:'致使', vd:'过度的担心致使我顾虑重重，整整一个星期都犹豫不决。', khi:'Tả tâm trạng do dự — dùng điểm ngữ pháp 致使 (kết quả xấu).'},
    {ten:'……的话打消了我的顾虑 / ……并非……', nhan:'Bước ngoặt', vd:'班主任说：“热门的选择并非最适合你的选择。”她的话打消了我的顾虑。', khi:'Nêu yếu tố thúc đẩy em quyết định (gợi ý 2).'},
    {ten:'事实证明，……', nhan:'Kết quả', vd:'事实证明，这个决策是正确的。', khi:'Trả lời thẳng gợi ý 3: quyết định đúng hay sai.'},
    {ten:'通过这件事，我明白了一个道理：……不是天生的，而是……', nhan:'Bài học', vd:'精确的判断力不是天生的，而是在一次次实践和挫折中得来的。', khi:'Rút ra đạo lý, bám câu chủ đề của bài khoá (gợi ý 4).'},
    {ten:'每……一次，……就……一点儿', nhan:'Kết bài', vd:'每做一次决定，我的判断力就提高一点儿。', khi:'Trả lời gợi ý 5: việc này giúp nâng cao khả năng phán đoán thế nào.'}
  ],
  checklist:[
    'Đã đặt nhan đề "判断力来自哪里" chưa?',
    'Đủ ít nhất 300 chữ Hán chưa (không đếm dấu câu)?',
    'Có trả lời đủ 5 câu gợi ý của đề (do dự việc gì — vì sao quyết — kết quả — bài học — phán đoán tiến bộ ra sao) chưa?',
    'Đã dùng đúng 3 điểm ngữ pháp của bài (于 / 致使 / 并非) và ít nhất 6 từ mới chưa?',
    'Có kể trải nghiệm THẬT, cụ thể của mình (có thời gian, sự việc, chi tiết) thay vì nói chung chung không?'
  ],
  model:{
    zh:'（题目：判断力来自哪里）高一快结束时，我正为选文科还是理科的事伤脑筋。我擅长写作，对历史也很感兴趣，可身边的同学都争先恐后地选了理科，说理科将来就业机会多。我怕万一选错了，会终身悔恨。过度的担心致使我顾虑重重，整整一个星期都犹豫不决。后来，班主任对我说：“热门的选择并非最适合你的选择，你应该想一想自己真正擅长什么。”她的话打消了我的顾虑。我又认真比较了两科的成绩，发现我的文科成绩一直比理科好得多。这些因素促使我最终勇于为自己做主，选了文科。事实证明，这个决策是正确的。进了文科班以后，我学得越来越有兴趣，成绩也日益提高。当然，我也遇到过挫折，第一次月考就没考好，可我没有灰心，而是认真总结了原因。通过这件事，我明白了一个道理：别人的看法固然重要，但自己的人生要由自己做主。精确的判断力不是天生的，而是在一次次实践和挫折中得来的。每做一次决定，我的判断力就提高一点儿。以后再遇到问题，我会及早分析、果断选择，不再被过度的担心束缚。',
    py:'(Tímù: Pànduànlì láizì nǎlǐ) Gāo-yī kuài jiéshù shí, wǒ zhèng wèi xuǎn wénkē háishi lǐkē de shì shāng nǎojīn. Wǒ shàncháng xiězuò, duì lìshǐ yě hěn gǎn xìngqù, kě shēnbiān de tóngxué dōu zhēngxiān-kǒnghòu de xuǎnle lǐkē, shuō lǐkē jiānglái jiù yè jīhuì duō. Wǒ pà wànyī xuǎncuò le, huì zhōngshēn huǐhèn. Guòdù de dānxīn zhìshǐ wǒ gùlǜ chóngchóng, zhěngzhěng yí ge xīngqī dōu yóuyù bù jué. Hòulái, bānzhǔrèn duì wǒ shuō: "Rèmén de xuǎnzé bìngfēi zuì shìhé nǐ de xuǎnzé, nǐ yīnggāi xiǎng yi xiǎng zìjǐ zhēnzhèng shàncháng shénme." Tā de huà dǎxiāole wǒ de gùlǜ. Wǒ yòu rènzhēn bǐjiàole liǎng kē de chéngjì, fāxiàn wǒ de wénkē chéngjì yìzhí bǐ lǐkē hǎo de duō. Zhèxiē yīnsù cùshǐ wǒ zuìzhōng yǒngyú wèi zìjǐ zuò zhǔ, xuǎnle wénkē. Shìshí zhèngmíng, zhège juécè shì zhèngquè de. Jìnle wénkē bān yǐhòu, wǒ xué de yuè lái yuè yǒu xìngqù, chéngjì yě rìyì tígāo. Dāngrán, wǒ yě yùdàoguo cuòzhé, dì-yī cì yuèkǎo jiù méi kǎohǎo, kě wǒ méiyǒu huīxīn, ér shì rènzhēn zǒngjiéle yuányīn. Tōngguò zhè jiàn shì, wǒ míngbaile yí ge dàolǐ: biérén de kànfǎ gùrán zhòngyào, dàn zìjǐ de rénshēng yào yóu zìjǐ zuò zhǔ. Jīngquè de pànduànlì bú shì tiānshēng de, ér shì zài yí cìcì shíjiàn hé cuòzhé zhōng délái de. Měi zuò yí cì juédìng, wǒ de pànduànlì jiù tígāo yìdiǎnr. Yǐhòu zài yùdào wèntí, wǒ huì jízǎo fēnxī, guǒduàn xuǎnzé, bú zài bèi guòdù de dānxīn shùfù.',
    vn:'(Nhan đề: Khả năng phán đoán đến từ đâu) Lúc lớp 10 sắp kết thúc, tôi đang đau đầu vì chuyện chọn ban xã hội hay ban tự nhiên. Tôi giỏi viết văn, cũng rất thích lịch sử, nhưng bạn bè xung quanh đều tranh nhau chọn ban tự nhiên, bảo rằng sau này học tự nhiên dễ kiếm việc hơn. Tôi sợ lỡ chọn sai sẽ hối hận cả đời. Nỗi lo quá mức khiến tôi lo trước lo sau, suốt một tuần liền không quyết được. Sau đó, cô chủ nhiệm nói với tôi: "Lựa chọn đang hot hoàn toàn không phải là lựa chọn hợp với em nhất, em nên nghĩ xem mình thật sự giỏi gì." Lời cô đã xua tan băn khoăn của tôi. Tôi lại nghiêm túc so sánh điểm hai khối, phát hiện điểm các môn xã hội của tôi luôn tốt hơn hẳn môn tự nhiên. Những yếu tố ấy thúc đẩy tôi cuối cùng mạnh dạn tự quyết định, chọn ban xã hội. Thực tế chứng minh, quyết định này là đúng đắn. Vào lớp xã hội rồi, tôi học ngày càng hứng thú, thành tích cũng ngày một nâng cao. Đương nhiên, tôi cũng từng vấp ngã, ngay kỳ kiểm tra tháng đầu tiên đã làm bài không tốt, nhưng tôi không nản lòng mà nghiêm túc tổng kết nguyên nhân. Qua việc này, tôi hiểu ra một đạo lý: ý kiến của người khác tất nhiên quan trọng, nhưng cuộc đời mình phải do chính mình làm chủ. Khả năng phán đoán chính xác không phải bẩm sinh, mà có được qua hết lần thực tiễn và vấp ngã này đến lần khác. Mỗi lần ra một quyết định, khả năng phán đoán của tôi lại tiến bộ thêm một chút. Sau này gặp vấn đề, tôi sẽ sớm phân tích, quyết đoán lựa chọn, không để nỗi lo quá mức trói buộc mình nữa.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'为什么小王最近为工作的事伤脑筋？',
     q_vn:'Vì sao dạo này Tiểu Vương đau đầu vì chuyện công việc?',
     hint:'①目前的工作…… ②对……感兴趣，可……，怕……',
     sample:'小王目前的工作是会计，成天和数字打交道，枯燥而且压力大。他对艺术、心理学都感兴趣，可不确定自己真正擅长什么，怕万一选错了，要付出很大的时间成本和经济成本。',
     sample_vn:'Công việc hiện tại của Tiểu Vương là kế toán, suốt ngày làm với những con số, vừa nhàm chán vừa áp lực. Anh thích nghệ thuật và tâm lý học, nhưng không chắc mình thật sự giỏi gì, sợ lỡ chọn sai thì phải trả giá lớn về thời gian và tiền bạc.',
     note:'Hai ý: (1) công việc hiện tại 枯燥而且压力大; (2) muốn đổi nhưng sợ — dùng đủ khung 对……感兴趣，可……，怕…….'},
    {q_zh:'什么原因使小王出现急躁、紧张、顾虑重重的现象？',
     q_vn:'Nguyên nhân gì khiến Tiểu Vương xuất hiện hiện tượng bồn chồn, căng thẳng, lo trước lo sau?',
     hint:'①对……缺乏…… ②对……过度悲观：不敢想……；无法承受……；一旦选错，……',
     sample:'心理专家认为，是对自己缺乏信心，对未来过度悲观致使小王出现了这些现象。他不敢想最坏的结果是什么，也无法承受这个结果，觉得一旦选错，就会终身悔恨。',
     sample_vn:'Chuyên gia tâm lý cho rằng chính việc thiếu tự tin vào bản thân và bi quan quá mức về tương lai đã khiến Tiểu Vương như vậy. Anh không dám nghĩ kết quả tệ nhất là gì, cũng không chịu nổi kết quả ấy, cảm thấy một khi chọn sai sẽ hối hận cả đời.',
     note:'Dùng điểm ngữ pháp 致使 để nối nguyên nhân – kết quả; ba biểu hiện bi quan nói liền bằng 不敢……，也无法……，觉得一旦……就…….'},
    {q_zh:'乔布斯的智慧从哪里来？',
     q_vn:'Trí tuệ của Steve Jobs từ đâu mà có?',
     hint:'智慧←精确的判断力←经验的积累←无数错误的判断',
     sample:'乔布斯的智慧来自精确的判断力，精确的判断力来自经验的积累，而经验又来自无数错误的判断。',
     sample_vn:'Trí tuệ của Jobs đến từ khả năng phán đoán chính xác, khả năng phán đoán chính xác đến từ tích luỹ kinh nghiệm, còn kinh nghiệm lại đến từ vô số lần phán đoán sai.',
     note:'Nói theo chuỗi mũi tên bằng 来自; mắt xích cuối nối bằng 而……又来自…….'},
    {q_zh:'做决定的能力是怎么得来的？',
     q_vn:'Năng lực ra quyết định có được bằng cách nào?',
     hint:'通过……得来的，在这个过程中，人同时具有了……，不畏惧……，勇于……',
     sample:'做决定的能力不是天生的，是通过实践和挫折得来的。在这个过程中，人同时具有了坚定的意志力和敏锐的判断力，不畏惧付出和失败，勇于承担责任，这就是成长。',
     sample_vn:'Năng lực ra quyết định không phải bẩm sinh, mà có được qua thực tiễn và vấp ngã. Trong quá trình ấy, con người đồng thời có được ý chí kiên định và khả năng phán đoán nhạy bén, không sợ bỏ công sức và thất bại, dám gánh vác trách nhiệm — đó chính là trưởng thành.',
     note:'不是天生的，是通过……得来的; 不畏惧 + danh từ, 勇于 + động từ — hai vế song song.'},
    {q_zh:'为什么说生活中的不确定因素日益增多？',
     q_vn:'Vì sao nói những yếu tố bất định trong cuộc sống ngày càng tăng?',
     hint:'①世界一流企业也会…… ②金融危机使……不得不……',
     sample:'伴随着经济全球化，昔日风光无限的世界一流企业也会亏损，也会倒闭；一次金融危机，就会使一些连年盈利、运行很好的企业不得不裁员。',
     sample_vn:'Cùng với toàn cầu hoá kinh tế, những doanh nghiệp hàng đầu thế giới từng vẻ vang vô hạn cũng có thể thua lỗ, phá sản; chỉ một cuộc khủng hoảng tài chính cũng khiến những doanh nghiệp lãi liên tục, vận hành tốt buộc phải cắt giảm nhân sự.',
     note:'Mở bằng 伴随着经济全球化; 也会……，也会…… liệt kê; câu 使……不得不…… (gây khiến + buộc phải).'},
    {q_zh:'为什么说无论你怎么选择，都不太可能选一份称心如意的工作安安稳稳过一辈子？',
     q_vn:'Vì sao nói dù bạn chọn thế nào cũng khó chọn được một công việc như ý rồi yên ổn cả đời?',
     hint:'①经济环境……，企业寿命……，人们要经历…… ②……报考热门专业，以致…… ③新职业的出现，……',
     sample:'由于经济环境的不确定，企业的寿命越来越短，人们要经历更多次的职业选择。除此以外，人们争先恐后报考热门专业，以致人才饱和，就业困难。而新职业的出现，需要新型人才的加入，谁能够及早抓住机会，谁就赢得了机遇。',
     sample_vn:'Do môi trường kinh tế bất định, tuổi thọ doanh nghiệp ngày càng ngắn, con người phải trải qua nhiều lần chọn nghề hơn. Ngoài ra, mọi người tranh nhau thi vào ngành hot, đến nỗi nhân lực bão hoà, khó tìm việc. Còn nghề mới xuất hiện lại cần nhân lực kiểu mới, ai sớm nắm được cơ hội thì người đó giành được thời cơ.',
     note:'Ba ý nối bằng 由于……，除此以外……，而……; kết bằng câu hô ứng 谁……，谁就…….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 7',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你不是一直想换工作吗？怎么还没辞职？'},
            {sp:'男',zh:'我也想啊，可我不确定自己擅长什么，万一选错了，时间成本太高了。'}],
     q:'男的为什么还没换工作？',qvn:'Vì sao người đàn ông vẫn chưa đổi việc?',
     opts:['公司不让他走','他怕选错了代价太大','他很喜欢现在的工作','家人不同意'],ans:1,
     why:'万一选错了，时间成本太高了 → sợ chọn sai phải trả giá lớn. Không nhắc gì tới công ty hay gia đình.',
     words:['擅长','成本']},

    {n:2,
     lines:[{sp:'男',zh:'这次比赛输了，你是不是很难过？'},
            {sp:'女',zh:'有一点儿，不过失败并非坏事，至少我知道自己哪里还不够好。'}],
     q:'女的对失败是什么态度？',qvn:'Người phụ nữ có thái độ thế nào với thất bại?',
     opts:['非常难过','觉得是坏事','看得比较积极','打算放弃比赛'],ans:2,
     why:'失败并非坏事 + 至少我知道…… → nhìn nhận tích cực. 有一点儿 (hơi buồn) chứ không phải 非常难过.',
     words:['并非']},

    {n:3,
     lines:[{sp:'女',zh:'听说你们公司最近在裁员？'},
            {sp:'男',zh:'是啊，受金融危机的影响，连年盈利的公司今年也出现了亏损。'}],
     q:'男的公司为什么裁员？',qvn:'Vì sao công ty của người đàn ông cắt giảm nhân sự?',
     opts:['员工工作不认真','公司一直在亏损','受金融危机影响出现亏损','公司要搬到别的城市'],ans:2,
     why:'受金融危机的影响……今年也出现了亏损. "一直在亏损" sai vì công ty 连年盈利 (lãi nhiều năm liền), chỉ năm nay mới lỗ.',
     words:['裁员','金融','危机','盈利','亏损']},

    {n:4,
     lines:[{sp:'男',zh:'你儿子报的什么专业？'},
            {sp:'女',zh:'他自己做主报了考古。现在大家都争先恐后地报热门专业，我倒觉得冷门专业就业不一定难。'}],
     q:'关于女的儿子，可以知道什么？',qvn:'Về con trai người phụ nữ, có thể biết điều gì?',
     opts:['报了热门专业','专业是自己决定的','专业是妈妈选的','还没决定报什么'],ans:1,
     why:'他自己做主报了考古 → con tự quyết. 考古 là ngành ít người chọn (冷门), nên phương án "ngành hot" sai.',
     words:['做主','争先恐后','热门','就业']},

    {n:5,
     lines:[{sp:'女',zh:'这件事你得及早决定，再拖下去，机会就被别人抢走了。'},
            {sp:'男',zh:'我知道，可我还有些顾虑，让我再想一个晚上吧。'}],
     q:'男的现在是什么状态？',qvn:'Người đàn ông hiện đang ở trạng thái nào?',
     opts:['已经做好了决定','还在犹豫','不想要这个机会','机会已经被抢走了'],ans:1,
     why:'还有些顾虑 + 让我再想一个晚上 → vẫn đang do dự. Người phụ nữ mới chỉ khuyên 及早决定.',
     words:['及早','顾虑']},

    {n:6,
     lines:[{sp:'男',zh:'他才工作三年，怎么就能做出这么英明的决策？'},
            {sp:'女',zh:'判断力不是天生的。他这几年犯过不少错，每次都认真总结，经验就是这么积累起来的。'}],
     q:'女的认为那个人的判断力是怎么来的？',qvn:'Người phụ nữ cho rằng khả năng phán đoán của người kia từ đâu mà có?',
     opts:['天生就有','领导教的','从错误中积累的','读书学来的'],ans:2,
     why:'判断力不是天生的 + 犯过不少错，每次都认真总结 → tích luỹ từ sai lầm (đúng ý bài khoá). Nghe 天生 đầu câu dễ chọn nhầm phương án 1.',
     words:['英明','决策','天生']},

    {n:7,
     lines:[{sp:'女',zh:'很多年轻人在选择职业时顾虑重重，一旦选错就觉得终身悔恨。其实，随着经济环境的变化，人们一生中要经历多次职业选择，第一份工作并非最后一份工作。与其害怕犯错，不如在实践中不断提升自己的决策能力。'}],
     q:'说话人的主要观点是什么？',qvn:'Quan điểm chính của người nói là gì?',
     opts:['第一份工作最重要','选错职业会终身悔恨','不要怕选错，要在实践中提高决策能力','年轻人应该尽快换工作'],ans:2,
     why:'与其害怕犯错，不如在实践中不断提升决策能力 — ý chính nằm ở vế 不如. "终身悔恨" chỉ là nỗi lo của người trẻ mà người nói đang bác bỏ.',
     words:['顾虑','终身','悔恨','并非','决策']},

    {n:8,
     lines:[{sp:'男',zh:'最近几年，学计算机的人越来越多，这个行业的人才已经饱和了。由于大家都挤在同一条路上，致使不少毕业生找不到称心如意的工作。所以，选专业时，除了看是否热门以外，更要看自己真正擅长什么。'}],
     q:'说话人认为选专业时更应该考虑什么？',qvn:'Người nói cho rằng khi chọn ngành nên cân nhắc điều gì hơn cả?',
     opts:['专业是否热门','自己真正擅长什么','将来的工资','父母的意见'],ans:1,
     why:'除了看是否热门以外，更要看自己真正擅长什么 — 更要 đánh dấu ý được nhấn mạnh. 热门 chỉ là yếu tố phụ.',
     words:['饱和','致使','称心如意','热门','擅长']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân phân vân giữa ngành mình thích và ngành đang hot.',
     a:{sp:'Bạn',zh:'大家都说计算机专业热门，可我更喜欢历史，真不知道该怎么选。',vn:'Ai cũng bảo ngành máy tính đang hot, nhưng tớ thích lịch sử hơn, thật không biết nên chọn thế nào.'},
     need:['Dùng 并非','Khuyên bạn tự quyết (dùng 做主)'],
     sample:'热门的专业并非最适合你的专业，这是你自己的人生，还是你自己做主吧。',
     samplePy:'Rèmén de zhuānyè bìngfēi zuì shìhé nǐ de zhuānyè, zhè shì nǐ zìjǐ de rénshēng, háishi nǐ zìjǐ zuò zhǔ ba.',
     sampleVn:'Ngành hot hoàn toàn không phải là ngành hợp với cậu nhất, đây là cuộc đời của cậu, cậu tự quyết đi.',
     tip:'并非 bác bỏ quan niệm "hot = tốt"; 还是……吧 là lời khuyên nhẹ nhàng.'},

    {scene:'Em trai trách mình vì em thi trượt vòng loại.',
     a:{sp:'Em trai',zh:'都怪我没用，一到赛场就紧张，结果全乱了。',vn:'Tại em vô dụng, cứ vào thi là run, rốt cuộc rối hết cả.'},
     need:['Dùng 致使 để chỉ ra nguyên nhân thật','Động viên (dùng 挫折 hoặc 并不意味着)'],
     sample:'是过度紧张致使你没发挥好，这并不意味着你没用。遇到一点儿挫折很正常，下次放松点儿就行。',
     samplePy:'Shì guòdù jǐnzhāng zhìshǐ nǐ méi fāhuī hǎo, zhè bìng bú yìwèizhe nǐ méi yòng. Yùdào yìdiǎnr cuòzhé hěn zhèngcháng, xià cì fàngsōng diǎnr jiù xíng.',
     sampleVn:'Là do quá căng thẳng nên em không phát huy tốt, điều đó hoàn toàn không có nghĩa là em vô dụng. Gặp chút vấp ngã là bình thường, lần sau thả lỏng chút là được.',
     tip:'Câu nhấn mạnh 是……致使…… chỉ ra nguyên nhân thực sự; 并不意味着 bác bỏ kết luận tiêu cực của em.'},

    {scene:'Đồng nghiệp đang do dự có nên nhận lời mời làm việc ở công ty mới.',
     a:{sp:'Đồng nghiệp',zh:'那家公司给的机会挺好的，可我还想再考虑考虑。',vn:'Công ty đó cho cơ hội khá tốt, nhưng mình vẫn muốn cân nhắc thêm.'},
     need:['Dùng 及早','Dùng 机遇 hoặc 抓住'],
     sample:'这么难得的机遇，你还是及早决定吧，省得被别人抢先抓住了。',
     samplePy:'Zhème nándé de jīyù, nǐ háishi jízǎo juédìng ba, shěngde bèi biérén qiǎngxiān zhuāzhù le.',
     sampleVn:'Cơ hội hiếm có như vậy, cậu nên sớm quyết định đi, kẻo bị người khác nhanh chân giành mất.',
     tip:'及早 + động từ; 省得 = kẻo — y như lời người bạn trong 练习3 ①.'},

    {scene:'Bạn cùng lớp sợ phát biểu vì sợ nói sai.',
     a:{sp:'Bạn',zh:'我怕说错了被大家笑话，所以从来不敢举手发言。',vn:'Tớ sợ nói sai bị mọi người cười, nên chưa bao giờ dám giơ tay phát biểu.'},
     need:['Dùng 勇于','Dùng 并非坏事 hoặc 心灵免疫力'],
     sample:'说错几句并非坏事，反而能增加你的心灵免疫力。你要勇于表达自己的想法。',
     samplePy:'Shuōcuò jǐ jù bìngfēi huàishì, fǎn\'ér néng zēngjiā nǐ de xīnlíng miǎnyìlì. Nǐ yào yǒngyú biǎodá zìjǐ de xiǎngfǎ.',
     sampleVn:'Nói sai vài câu hoàn toàn không phải chuyện xấu, ngược lại còn tăng sức đề kháng tâm hồn cho cậu. Cậu phải dám bày tỏ suy nghĩ của mình.',
     tip:'Bắt chước câu cuối bài khoá: ……并非坏事，它会增加……心灵免疫力; 勇于 + động từ.'},

    {scene:'Chú của em kể công ty cũ nơi chú làm đã phá sản.',
     a:{sp:'Chú',zh:'我以前工作的那家公司，当年多风光啊，没想到去年倒闭了。',vn:'Công ty chú làm trước đây, hồi đó vẻ vang biết bao, không ngờ năm ngoái phá sản rồi.'},
     need:['Dùng 日益 hoặc 伴随着','Dùng 意味着'],
     sample:'现在市场变化日益加快，这意味着再大的公司也不能停止创新。',
     samplePy:'Xiànzài shìchǎng biànhuà rìyì jiākuài, zhè yìwèizhe zài dà de gōngsī yě bù néng tíngzhǐ chuàngxīn.',
     sampleVn:'Bây giờ thị trường thay đổi ngày càng nhanh, điều đó có nghĩa là công ty lớn đến mấy cũng không thể ngừng đổi mới.',
     tip:'日益 + động từ hai âm tiết (加快); 这意味着 + kết luận rút ra.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết báo cáo nghiên cứu về tình hình việc làm của sinh viên.',
     a:'因为大家都抢着去学热门专业，所以现在工作特别难找。',b:'由于人们争先恐后报考热门专业，以致人才饱和，就业困难。',better:'b',
     why:'Báo cáo cần văn viết: 由于……以致……, 争先恐后, 就业困难. Câu a (抢着, 特别难找) là khẩu ngữ.'},

    {scene:'Em nhắn tin động viên bạn thân vừa trượt phỏng vấn.',
     a:'没事儿，一次没过而已，下回肯定行！',b:'此次面试失利并非坏事，应当认真总结经验教训。',better:'a',
     why:'Với bạn thân, lời gần gũi (没事儿, 而已, 下回) ấm áp hơn. Câu b đúng nhưng giống lời tổng kết của cấp trên.'},

    {scene:'Phát biểu trong lễ khai giảng với tư cách đại diện học sinh.',
     a:'我们要勇于承担责任，不畏惧挫折，做自己人生的主人。',b:'咱们得敢干，别怕摔跟头，自己的事自己拿主意。',better:'a',
     why:'Diễn văn trang trọng dùng 勇于, 畏惧, 挫折. 敢干, 摔跟头, 拿主意 là khẩu ngữ, hợp khi nói chuyện riêng.'},

    {scene:'Em tâm sự với mẹ về chuyện chọn ngành.',
     a:'妈，选专业这事儿真让我伤脑筋。',b:'母亲，关于专业选择一事，我深感困扰。',better:'a',
     why:'Nói với mẹ dùng khẩu ngữ tự nhiên: 这事儿, 伤脑筋. Câu b (母亲, 一事, 深感困扰) quá trang trọng, nghe xa cách.'},

    {scene:'Bản tin kinh tế trên truyền hình.',
     a:'受金融危机影响，部分企业出现亏损，不得不裁员。',b:'经济不好，好多公司都赔钱了，只好让人走。',better:'a',
     why:'Bản tin dùng thuật ngữ: 金融危机, 亏损, 裁员. 赔钱, 让人走 là cách nói đời thường.'},

    {scene:'Em khen quyết định của lớp trưởng trong cuộc họp lớp.',
     a:'班长这个决定真英明，咱们就这么办！',b:'班长此项决策十分英明，本人表示完全赞同。',better:'a',
     why:'Họp lớp giữa bạn bè: 真英明 + 咱们就这么办 vừa đủ nhiệt tình, thân mật. Câu b (此项决策, 本人表示) giống văn bản hành chính.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2 phút.',
  outline: [
    {step:'为什么小王最近为工作的事伤脑筋？', cue:'①目前的工作…… ②对……感兴趣，可……，怕……', words:['伤脑筋','枯燥','擅长','成本']},
    {step:'什么原因使小王出现急躁、紧张、顾虑重重的现象？', cue:'①对……缺乏…… ②对……过度悲观：不敢想……；无法承受……；一旦选错，……', words:['急躁','顾虑','过度','致使','终身','悔恨']},
    {step:'乔布斯的智慧从哪里来？', cue:'智慧←精确的判断力←经验的积累←无数错误的判断', words:['精确']},
    {step:'做决定的能力是怎么得来的？', cue:'通过……得来的，在这个过程中，人同时具有了……，不畏惧……，勇于……', words:['天生','挫折','意志','敏锐','畏惧','勇于']},
    {step:'为什么说生活中的不确定因素日益增多？', cue:'①世界一流企业也会…… ②金融危机使……不得不……', words:['伴随','日益','昔日','风光','亏损','倒闭','金融','危机','盈利','运行','裁员']},
    {step:'为什么说无论你怎么选择，都不太可能选一份称心如意的工作安安稳稳过一辈子？', cue:'①经济环境……，企业寿命……，人们要经历…… ②……报考热门专业，以致…… ③新职业的出现，……', words:['称心如意','除','争先恐后','热门','以致','饱和','就业','及早','机遇']}
  ],
  checklist: [
    'Kể đủ 6 ý theo đúng thứ tự bảng chưa?',
    'Ý 2 có dùng được 致使 để nối nguyên nhân (缺乏信心、过度悲观) với kết quả không?',
    'Ý 3 có nói đúng chuỗi 智慧 ← 精确的判断力 ← 经验的积累 ← 无数错误的判断 không?',
    'Ý 6 có đủ 3 lý do (kinh tế bất định — ngành hot bão hoà — nghề mới) và câu 谁……，谁就…… không?',
    'Có kể bằng LỜI MÌNH (đổi thành 作者认为 / 课文说), và kết bằng ý "phải nâng cao năng lực ra quyết định để làm chủ cuộc đời" không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 78–83) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'vitri', de:'练一练：给“于”选择适当的位置', vn:'Luyện tập (chú thích 1): Chọn vị trí thích hợp cho 于',
   cau:[
     {s:'我已经A开始B写论文了，C最近正忙D收集资料。', tu:'于', ans:'D', giai:'忙于 + việc = bận vào việc gì (于 chỉ phương diện): 最近正忙于收集资料.'},
     {s:'A那时候，人们苦B长期C战乱，渴望D政治统一。', tu:'于', ans:'B', giai:'苦于 + nguyên nhân = khổ vì …: 人们苦于长期战乱.'},
     {s:'A第三届茅盾文学奖B获奖小说C《平凡的世界》出版D1986年。', tu:'于', ans:'D', giai:'V + 于 + thời gian (= 在): 出版于1986年.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'热门', chu:'门', ds:['冷门','专门','部门','门类']},
   cau:[
     {tu:'伤脑筋', chu:'伤', dap:['伤心','伤害','伤感','受伤'], them:['伤神','损伤','创伤','伤痛','伤身','负伤'],
      giai:'伤 = làm tổn hại, tổn thương (伤脑筋 = làm hao tổn đầu óc).'},
     {tu:'致使', chu:'致', dap:['致力','导致','精致','专心致志'], them:['以致','招致','致命','致富','致病','所致'],
      giai:'致 trong 致使 = gây ra, dẫn đến (导致, 以致). Đáp án sách mở rộng cả các nghĩa khác của 致: dồn sức (致力), tinh tế (精致).'},
     {tu:'类似', chu:'似', dap:['相似','似乎','胜似','似是而非'], them:['近似','好似','酷似','貌似','恰似','似的'],
      giai:'似 = giống, tựa như (相似 = giống nhau, 似乎 = dường như).'},
     {tu:'精确', chu:'确', dap:['准确','的确','正确','确实'], them:['明确','确定','确认','确切','确保','千真万确'],
      giai:'确 = chắc chắn, đúng thật (准确 = chính xác, 确实 = quả thật).'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn viết lại câu (đáp án theo sách)',
   cau:[
     {s:'因为地址不清楚，所以信件无法送达。', tu:'致使', dap:'因为地址不清楚，致使信件无法送达。',
      giai:'致使 thay cho 所以, đứng đầu vế sau nêu kết quả không mong muốn.'},
     {s:'满18岁就代表着成人了，要承担起成年人的义务和责任。', tu:'意味着', dap:'满18岁就意味着成人了，要承担起成年人的义务和责任。',
      giai:'代表着 → 意味着 (có nghĩa là): A 就意味着 B.'},
     {s:'真相其实跟你想象的完全不同。', tu:'并非', dap:'真相其实并非跟你想象的一样。',
      giai:'完全不同 = 并非……一样: 并非 phủ định mạnh, nên vế sau đổi thành 一样.'},
     {s:'我们应该勇敢地承认自己的错误。', tu:'勇于', dap:'我们应该勇于承认自己的错误。',
      giai:'勇敢地 + V → 勇于 + V (bỏ 地, 勇于 trực tiếp mang động từ).'},
     {s:'随着他的压力越来越大，他的精神越来越紧张。', tu:'伴随', dap:'伴随着他的压力越来越大，他的精神越来越紧张。',
      giai:'随着 → 伴随着 (đầu câu phải có 着): hai quá trình song hành.'},
     {s:'随着经济的发展，城市里汽车的数量越来越多。', tu:'日益', dap:'随着经济的发展，城市里汽车的数量日益增多。',
      giai:'日益 không đi với tính từ một âm tiết 多 → đổi thành động từ hai âm tiết 增多.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['成本','及早','顾虑','伤脑筋','称心如意'],
   cau:[
     {s:'最近，我在为租房子的事情＿＿，离单位近的吧，太贵了；便宜的吧，每天花在路上的时间要三四个小时，时间＿＿太高了。一个人住吧，不安全；跟别人合租吧，又怕有矛盾。见此情形，朋友劝我：“现在想找一个＿＿的房子本来就很难，如果你再＿＿重重，就更找不到房子了。你前两天看的那个房子就不错，我看你还是＿＿决定吧，省得将来后悔。”',
      dap:['伤脑筋','成本','称心如意','顾虑','及早']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['畏惧','意志','挫折','机遇','勇于'],
   cau:[
     {s:'人们常说：“失败是成功之母”。人的一生中总会遇到一些＿＿，只有不＿＿失败，＿＿面对困难，才会在实践中获得经验，增强＿＿力，进而抓住＿＿，获得成功。',
      dap:['挫折','畏惧','勇于','意志','机遇']}
   ]},

  {kieu:'mp', de:'课文中的“不要怕走弯路”是一种比喻的说法，阅读下列表示比喻的句子，并模仿造句', vn:'"Đừng sợ đi đường vòng" trong bài khoá là cách nói ví von. Đọc các câu so sánh ví von dưới đây và bắt chước đặt câu (phần ví von trong 【】; sách không có đáp án cố định — đây là câu gợi ý)',
   cau:[
     {mau:'男人【是山】，女人【是水】。',
      khung:'男人＿＿，女人＿＿。',
      dap:['是太阳','是月亮'],
      giai:'Ẩn dụ A 是 B: nói thẳng A "là" B (không dùng 像). Chọn hai hình ảnh đối nhau: 太阳 — 月亮.'},
     {mau:'漂亮的姑娘【像花儿一样】。',
      khung:'漂亮的姑娘＿＿。',
      dap:['像一幅美丽的画儿一样'],
      giai:'So sánh 像……一样: A giống như B.'},
     {mau:'月亮【像一个银色的盘子挂在天空上】。',
      khung:'月亮＿＿。',
      dap:['像一只弯弯的小船漂在云里'],
      giai:'像 + hình ảnh + động từ trạng thái (挂 / 漂): vừa so sánh hình dáng vừa tả tư thế.'},
     {mau:'一闪一闪的星星【像调皮的孩子眨着眼睛】。',
      khung:'星星＿＿。',
      dap:['像无数颗钻石撒在黑色的天空上'],
      giai:'Nhân hoá / so sánh sự vật với hình ảnh sinh động: 像 + N + V着/在…….'},
     {mau:'他急得【像热锅上的蚂蚁】。',
      khung:'他急得＿＿。',
      dap:['像一只找不到妈妈的小猫，在屋里转来转去'],
      giai:'Bổ ngữ trình độ V/adj + 得 + 像……: so sánh mức độ (急得像……).'}
   ]},

  {kieu:'bc', de:'病句类型：语序不当 · 例句', vn:'Loại câu sai: trật tự từ không đúng — các câu ví dụ trong sách (tr. 83), kèm phân tích của sách. Tìm chỗ sai rồi sửa.',
   cau:[
     {s:'你不必给我打电话，已经别人给我打了。', sai:'已经别人给我打了', loai:'状语位置不当',
      dap:'你不必给我打电话，别人已经给我打了。',
      giai:'"已经" và "给我" đều là trạng ngữ, phải đứng sau chủ ngữ 别人: 别人 + 已经 [phó từ] + 给我 [đối tượng] + 打了.'},
     {s:'地形图上的川藏线弯弯曲曲，像极了高原反应时极速抖动的心电图谱。', sai:'像极了高原反应时极速抖动的心电图谱', loai:'宾语位置不当',
      dap:'地形图上的川藏线弯弯曲曲，和高原反应时极速抖动的心电图谱像极了。',
      giai:'"像极了" không mang tân ngữ; đối tượng so sánh phải đưa lên trước bằng 和……像极了.'},
     {s:'郑晓龙执导的很多电视剧，对中国人是不陌生的。', sai:'郑晓龙执导的很多电视剧，对中国人', loai:'主语位置不当',
      dap:'中国人对郑晓龙执导的很多电视剧是不陌生的。',
      giai:'Chủ ngữ thật là 中国人 (người không xa lạ), đối tượng "phim truyền hình" đặt sau 对: 中国人对……是不陌生的.'},
     {s:'这事对她打击一定很大，她肯定会受不了，我把这事没告诉她。', sai:'我把这事没告诉她', loai:'“把”字句否定式语序错误',
      dap:'这事对她打击一定很大，她肯定会受不了，我没把这事告诉她。',
      giai:'Câu 把 phủ định: từ phủ định 没 phải đứng TRƯỚC 把: 没把这事告诉她.'},
     {s:'我们公司管理比较严格，没有特殊情况不准迟到早退，每两个星期一次开会。', sai:'一次开会', loai:'离合词与数量词搭配语序错误',
      dap:'我们公司管理比较严格，没有特殊情况不准迟到早退，每两个星期开一次会。',
      giai:'开会 là từ li hợp, số lượng từ chen vào giữa động từ và tân ngữ: 开一次会.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议（扩展1 · 练一练）', vn:'Chỉ ra lỗi sai trong các câu dưới đây và đề xuất cách sửa (Mở rộng 1 · Luyện tập).',
   cau:[
     {s:'想着想着，他发怒起来。', sai:'发怒起来', loai:'离合词语序错误',
      dap:'想着想着，他发起怒来。',
      giai:'发怒 là từ li hợp: bổ ngữ xu hướng kép 起来 phải tách ra, 起 sau động từ, 来 sau tân ngữ → 发起怒来.'},
     {s:'她不但说了那样，而且也做了那样。', sai:'说了那样，而且也做了那样', loai:'宾语位置不当',
      dap:'她不但那样说了，而且也那样做了。',
      giai:'那样 chỉ cách thức, phải đứng TRƯỚC động từ: 那样说了 / 那样做了, không đặt sau động từ như tân ngữ.'},
     {s:'她不是看书就是写文章，每天到深夜都忙。', sai:'每天到深夜都忙', loai:'补语位置不当',
      dap:'她不是看书就是写文章，每天都忙到深夜。',
      giai:'到深夜 là bổ ngữ chỉ thời gian kết thúc, đứng SAU động từ/tính từ: 忙到深夜.'},
     {s:'我想去一起喝茶和我的朋友。', sai:'去一起喝茶和我的朋友', loai:'状语位置不当',
      dap:'我想和我的朋友去一起喝茶。',
      giai:'Cụm giới từ 和我的朋友 là trạng ngữ, phải đứng trước động từ (đáp án sách). Nói tự nhiên nhất: 我想和我的朋友一起去喝茶.'},
     {s:'她很有绘画天赋，不光油画画得好，中国画也并比别人画得不差。', sai:'并比别人画得不差', loai:'比较句语序错误',
      dap:'她很有绘画天赋，不光油画画得好，中国画也并不比别人画得差。',
      giai:'Câu so sánh 比 phủ định: 不 đặt TRƯỚC 比 → 并不比别人画得差.'}
   ]}
];
