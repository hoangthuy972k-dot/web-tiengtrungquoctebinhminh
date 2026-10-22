// ══════════════════════════════════════════
// DATA — HSK6 Bài 4: 完美的胜利 (Chiến thắng hoàn hảo)
// 第一单元 生活点滴 · Nguồn: HSK标准教程6上 (tr. 44–52)
// 课文 750 chữ · 48 từ mới (* 厌倦 là từ ngoài đề cương)
// Ôn xoáy ốc: ví dụ và bài tập lồng từ bài 1–3 HSK 6 + ngữ pháp HSK 4–5
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'厌倦',py:'yànjuàn',pos:'Động từ',vn:'chán ngán, chán ngấy',hv:'yếm quyện',em:'😩',lesson:1,
   explain:['Chán ngấy, mệt mỏi với một việc hay một cuộc sống đã lặp đi lặp lại quá lâu, không còn hứng thú.','Từ ngoài đề cương (sách đánh dấu *), sắc thái văn viết; khẩu ngữ hay nói 腻了 / 烦了.'],
   usage:'厌倦了 + danh từ / động từ: 厌倦了这种生活. 对……感到厌倦. Thường có 了 phía sau.',
   collo:['厌倦了生活','感到厌倦','对工作厌倦','厌倦了等待'],
   ex_zh:'老鼠厌倦了宠物的生活，于是向山神请假。',ex_py:'Lǎoshǔ yànjuànle chǒngwù de shēnghuó, yúshì xiàng shānshén qǐngjià.',ex_vn:'Chuột đã chán ngán cuộc sống làm thú cưng, bèn xin phép thần núi.',
   exList:[
     {zh:'老鼠厌倦了宠物的生活，于是向山神请假。',py:'Lǎoshǔ yànjuànle chǒngwù de shēnghuó, yúshì xiàng shānshén qǐngjià.',vn:'Chuột đã chán ngán cuộc sống làm thú cưng, bèn xin phép thần núi.'},
     {zh:'每天都做同样的事，谁都会感到厌倦。',py:'Měi tiān dōu zuò tóngyàng de shì, shéi dōu huì gǎndào yànjuàn.',vn:'Ngày nào cũng làm cùng một việc thì ai cũng sẽ thấy chán.'},
     {zh:'他厌倦了城市里忙碌的生活，打算搬到乡下去住。',py:'Tā yànjuànle chéngshì li mánglù de shēnghuó, dǎsuan bāndào xiāngxia qù zhù.',vn:'Anh ấy chán cuộc sống bận rộn ở thành phố, định chuyển về quê sống.'}
   ],
   colloFull:[
     {zh:'厌倦了生活',py:'yànjuànle shēnghuó',vn:'chán cuộc sống'},
     {zh:'感到厌倦',py:'gǎndào yànjuàn',vn:'cảm thấy chán ngán'},
     {zh:'对工作厌倦',py:'duì gōngzuò yànjuàn',vn:'chán công việc'},
     {zh:'厌倦了等待',py:'yànjuànle děngdài',vn:'chán phải chờ đợi'},
     {zh:'令人厌倦',py:'lìng rén yànjuàn',vn:'khiến người ta chán ngấy'}
   ],
   patterns:[
     {s:'Chủ ngữ + 厌倦了 + N / V',m:'Chán ngấy điều gì đã kéo dài quá lâu'},
     {s:'对…… + 感到厌倦',m:'Cảm thấy chán ngán với…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chán công việc hiện tại nên đã xin nghỉ việc.',answer:'他厌倦了现在的工作，于是辞职了。',answerPy:'Tā yànjuànle xiànzài de gōngzuò, yúshì cízhí le.',
      note:'厌倦了 + tân ngữ; 于是 nối hành động xảy ra tiếp theo do nguyên nhân trước.',pair:'于是'},
     {promptLang:'vi',prompt:'Dù thích đến mấy, ngày nào cũng ăn một món thì cũng sẽ chán.',answer:'不管多喜欢，每天都吃同一道菜也会厌倦的。',answerPy:'Bùguǎn duō xǐhuan, měi tiān dōu chī tóng yí dào cài yě huì yànjuàn de.',
      note:'不管 + 多 + tính từ/động từ tâm lý, vế sau dùng 也/都; 会……的 khẳng định khả năng.',pair:'不管……也……'}
   ]},

  {n:2,zh:'厌恶',py:'yànwù',pos:'Động từ',vn:'chán ghét, ghê tởm',hv:'yếm ố',em:'🤢',lesson:1,
   explain:['Ghét cay ghét đắng, ghê tởm — mức độ mạnh hơn 讨厌 nhiều, thường là ghét về mặt tình cảm, đạo đức.','Văn viết; tân ngữ có thể là người, việc, hành vi: 厌恶战争, 厌恶这种人. Chú ý: 恶 ở đây đọc wù (giống 可恶 kěwù), không đọc è như trong 恶劣.'],
   usage:'厌恶 + N; 对……感到厌恶 / 令人厌恶. Đi được với 很, 非常: 很厌恶.',
   collo:['厌恶这个角色','令人厌恶','感到厌恶','厌恶战争'],
   ex_zh:'老鼠也很厌恶宠物这个角色。',ex_py:'Lǎoshǔ yě hěn yànwù chǒngwù zhège juésè.',ex_vn:'Chuột cũng rất chán ghét vai trò thú cưng.',
   exList:[
     {zh:'老鼠也很厌恶宠物这个角色。',py:'Lǎoshǔ yě hěn yànwù chǒngwù zhège juésè.',vn:'Chuột cũng rất chán ghét vai trò thú cưng.'},
     {zh:'他说谎的样子真让人厌恶。',py:'Tā shuōhuǎng de yàngzi zhēn ràng rén yànwù.',vn:'Cái vẻ nói dối của hắn thật khiến người ta ghê tởm.'},
     {zh:'我从小就厌恶不守时的人，所以自己从来不迟到。',py:'Wǒ cóngxiǎo jiù yànwù bù shǒushí de rén, suǒyǐ zìjǐ cónglái bù chídào.',vn:'Từ nhỏ tôi đã ghét người không đúng giờ, nên bản thân chưa bao giờ đến muộn.'}
   ],
   colloFull:[
     {zh:'厌恶这个角色',py:'yànwù zhège juésè',vn:'ghét vai trò này'},
     {zh:'令人厌恶',py:'lìng rén yànwù',vn:'khiến người ta ghê tởm'},
     {zh:'感到厌恶',py:'gǎndào yànwù',vn:'cảm thấy chán ghét'},
     {zh:'厌恶战争',py:'yànwù zhànzhēng',vn:'ghét chiến tranh'},
     {zh:'厌恶的表情',py:'yànwù de biǎoqíng',vn:'vẻ mặt chán ghét'}
   ],
   patterns:[
     {s:'(很) 厌恶 + N / V',m:'Ghét cay ghét đắng…'},
     {s:'令人 / 让人 + 厌恶',m:'Khiến người ta ghê tởm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy ghét nhất là những người nói xấu sau lưng người khác.',answer:'她最厌恶在背后说别人坏话的人。',answerPy:'Tā zuì yànwù zài bèihòu shuō biérén huàihuà de rén.',
      note:'Định ngữ dài (在背后说别人坏话) + 的 + 人 đặt trước danh từ, khác trật tự tiếng Việt.',pair:'định ngữ dài + 的'},
     {promptLang:'vi',prompt:'Cách làm của anh ta không những không giúp được gì mà còn khiến người ta chán ghét.',answer:'他的做法不但没帮上忙，反而让人厌恶。',answerPy:'Tā de zuòfǎ búdàn méi bāngshang máng, fǎn\'ér ràng rén yànwù.',
      note:'不但没……，反而…… = không những không… mà ngược lại còn…; 反而 đứng trước vị ngữ.',pair:'不但不/没……反而……'}
   ]},

  {n:3,zh:'倘若',py:'tǎngruò',pos:'Liên từ',vn:'nếu như',hv:'thảng nhược',em:'🤔',lesson:1,
   explain:['Liên từ giả thiết = 如果, 假如 nhưng mang sắc thái VĂN VIẾT.','Vế sau thường có 就, 便, 那么, 必须, 否则 hô ứng.'],
   usage:'倘若 + giả thiết，(那么) + 就 / 便 + kết quả. Đứng trước hoặc sau chủ ngữ đều được.',
   collo:['倘若你还想回来','倘若……就……','倘若……那么……','倘若有机会'],
   ex_zh:'倘若你还想回来，必须战胜大象。',ex_py:'Tǎngruò nǐ hái xiǎng huílái, bìxū zhànshèng dàxiàng.',ex_vn:'Nếu như ngươi còn muốn quay về thì phải thắng được voi.',
   exList:[
     {zh:'倘若你还想回来，必须战胜大象。',py:'Tǎngruò nǐ hái xiǎng huílái, bìxū zhànshèng dàxiàng.',vn:'Nếu như ngươi còn muốn quay về thì phải thắng được voi.'},
     {zh:'倘若明天下雨，比赛就推迟到下周。',py:'Tǎngruò míngtiān xià yǔ, bǐsài jiù tuīchí dào xià zhōu.',vn:'Nếu mai trời mưa thì trận đấu sẽ lùi sang tuần sau.'},
     {zh:'倘若你对这份工作毫无兴趣，那么再高的工资也留不住你。',py:'Tǎngruò nǐ duì zhè fèn gōngzuò háowú xìngqù, nàme zài gāo de gōngzī yě liú bu zhù nǐ.',vn:'Nếu như bạn chẳng có chút hứng thú nào với công việc này thì lương cao mấy cũng không giữ chân được bạn.'}
   ],
   colloFull:[
     {zh:'倘若你还想回来',py:'tǎngruò nǐ hái xiǎng huílái',vn:'nếu ngươi còn muốn về'},
     {zh:'倘若……就……',py:'tǎngruò……jiù……',vn:'nếu… thì…'},
     {zh:'倘若……那么……',py:'tǎngruò……nàme……',vn:'nếu… thì (trang trọng)'},
     {zh:'倘若有机会',py:'tǎngruò yǒu jīhuì',vn:'nếu có dịp'},
     {zh:'倘若……否则……',py:'tǎngruò……fǒuzé……',vn:'nếu… (phải…), nếu không thì…'}
   ],
   patterns:[
     {s:'倘若 + giả thiết，就 / 便 / 那么 + kết quả',m:'Nếu như… thì… (văn viết)'},
     {s:'倘若……，必须……，否则……',m:'Nếu muốn… thì phải…, nếu không thì… (cấu trúc lời thần núi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu như em còn có thắc mắc gì thì cứ đến tìm cô.',answer:'倘若你还有什么问题，就来找我。',answerPy:'Tǎngruò nǐ hái yǒu shénme wèntí, jiù lái zhǎo wǒ.',
      note:'倘若 = 如果 (văn viết), vế sau dùng 就; 什么 ở đây là phiếm chỉ "gì đó".',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Nếu như không có sự giúp đỡ của mọi người thì tôi không thể nào hoàn thành nhiệm vụ này.',answer:'倘若没有大家的帮助，我是不可能完成这个任务的。',answerPy:'Tǎngruò méiyǒu dàjiā de bāngzhù, wǒ shì bù kěnéng wánchéng zhège rènwu de.',
      note:'是……的 bọc lấy vị ngữ để khẳng định chắc chắn (语气).',pair:'是……的 (khẳng định)'}
   ]},

  {n:4,zh:'发觉',py:'fājué',pos:'Động từ',vn:'phát hiện, nhận ra',hv:'phát giác',em:'💡',lesson:1,
   explain:['Nhận ra, phát hiện ra (thường là điều trước đó chưa để ý, hay điều không hay).','So với 发现: 发觉 thiên về CẢM NHẬN ra trong lòng; 发现 còn dùng cho phát hiện khoa học (发现新星), 发觉 thì không.'],
   usage:'发觉 + mệnh đề / N: 发觉自己错了. Hay đi với 才, 便, 一……就 / 便.',
   collo:['发觉错误','没有发觉','突然发觉','才发觉'],
   ex_zh:'老鼠一来到动物界，便发觉它对山神的承诺是多么草率。',ex_py:'Lǎoshǔ yì láidào dòngwùjiè, biàn fājué tā duì shānshén de chéngnuò shì duōme cǎoshuài.',ex_vn:'Chuột vừa đến thế giới động vật đã nhận ra lời hứa của mình với thần núi thật quá khinh suất.',
   exList:[
     {zh:'老鼠一来到动物界，便发觉它对山神的承诺是多么草率。',py:'Lǎoshǔ yì láidào dòngwùjiè, biàn fājué tā duì shānshén de chéngnuò shì duōme cǎoshuài.',vn:'Chuột vừa đến thế giới động vật đã nhận ra lời hứa của mình với thần núi thật quá khinh suất.'},
     {zh:'走出教室以后，我才发觉手机忘在桌子上了。',py:'Zǒuchū jiàoshì yǐhòu, wǒ cái fājué shǒujī wàng zài zhuōzi shang le.',vn:'Ra khỏi lớp rồi tôi mới nhận ra đã để quên điện thoại trên bàn.'},
     {zh:'他一直在说谎，可是大家都没有发觉。',py:'Tā yìzhí zài shuōhuǎng, kěshì dàjiā dōu méiyǒu fājué.',vn:'Anh ta nói dối suốt mà mọi người đều không nhận ra.'}
   ],
   colloFull:[
     {zh:'发觉错误',py:'fājué cuòwù',vn:'nhận ra lỗi sai'},
     {zh:'没有发觉',py:'méiyǒu fājué',vn:'không nhận ra'},
     {zh:'突然发觉',py:'tūrán fājué',vn:'chợt nhận ra'},
     {zh:'才发觉',py:'cái fājué',vn:'mới nhận ra'},
     {zh:'及时发觉',py:'jíshí fājué',vn:'phát hiện kịp thời'}
   ],
   patterns:[
     {s:'(一……) 便 / 才 + 发觉 + mệnh đề',m:'(Vừa…) đã / mới nhận ra rằng…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về đến nhà tôi mới nhận ra là đã cầm nhầm ô của người khác.',answer:'回到家我才发觉拿错了别人的雨伞。',answerPy:'Huídào jiā wǒ cái fājué nácuòle biérén de yǔsǎn.',
      note:'才 + động từ: việc xảy ra muộn hơn mong đợi; 拿错 là động từ + bổ ngữ kết quả.',pair:'才 (muộn)'},
     {promptLang:'vi',prompt:'Cô ấy vừa bước vào phòng đã nhận ra có người từng vào đây.',answer:'她一走进房间，就发觉有人来过。',answerPy:'Tā yì zǒujìn fángjiān, jiù fājué yǒu rén láiguo.',
      note:'一……就…… nối hai việc xảy ra liền nhau; 来过 = đã từng đến.',pair:'一……就……'}
   ]},

  {n:5,zh:'承诺',py:'chéngnuò',pos:'Động từ',vn:'hứa, cam kết; lời hứa',hv:'thừa nặc',em:'🤝',lesson:1,
   explain:['Động từ: hứa, cam kết sẽ làm việc gì (trang trọng hơn 答应).','Danh từ: lời hứa, lời cam kết — 做出承诺, 遵守承诺, 实现承诺.'],
   usage:'承诺 + V (承诺按时交货); 对……的承诺; 做出 / 遵守 / 实现 + 承诺.',
   collo:['遵守承诺','做出承诺','对山神的承诺','实现承诺'],
   ex_zh:'它对山神的承诺是多么草率啊！',ex_py:'Tā duì shānshén de chéngnuò shì duōme cǎoshuài a!',ex_vn:'Lời hứa của nó với thần núi mới khinh suất làm sao!',
   exList:[
     {zh:'它对山神的承诺是多么草率啊！',py:'Tā duì shānshén de chéngnuò shì duōme cǎoshuài a!',vn:'Lời hứa của nó với thần núi mới khinh suất làm sao!'},
     {zh:'公司承诺三天之内给我们答复。',py:'Gōngsī chéngnuò sān tiān zhī nèi gěi wǒmen dáfù.',vn:'Công ty cam kết trong vòng ba ngày sẽ trả lời chúng tôi.'},
     {zh:'既然你做出了承诺，就一定要遵守。',py:'Jìrán nǐ zuòchūle chéngnuò, jiù yídìng yào zūnshǒu.',vn:'Đã hứa rồi thì nhất định phải giữ lời.'}
   ],
   colloFull:[
     {zh:'遵守承诺',py:'zūnshǒu chéngnuò',vn:'giữ lời hứa'},
     {zh:'做出承诺',py:'zuòchū chéngnuò',vn:'đưa ra cam kết'},
     {zh:'对山神的承诺',py:'duì shānshén de chéngnuò',vn:'lời hứa với thần núi'},
     {zh:'实现承诺',py:'shíxiàn chéngnuò',vn:'thực hiện lời hứa'},
     {zh:'郑重承诺',py:'zhèngzhòng chéngnuò',vn:'trịnh trọng cam kết'}
   ],
   patterns:[
     {s:'做出 / 遵守 / 实现 + 承诺',m:'Danh từ: đưa ra / giữ / thực hiện lời hứa'},
     {s:'承诺 + V',m:'Động từ: cam kết sẽ làm…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã hứa với bố mẹ rồi thì con nhất định phải làm được.',answer:'既然对父母做出了承诺，你就一定要做到。',answerPy:'Jìrán duì fùmǔ zuòchūle chéngnuò, nǐ jiù yídìng yào zuòdào.',
      note:'既然 + sự thật đã có，就 + kết luận/lời khuyên. "Hứa với ai" = 对 + ai + 做出承诺.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ thất hứa, vì vậy mọi người đều rất tin anh.',answer:'他从来没有违背过自己的承诺，因此大家都很信任他。',answerPy:'Tā cónglái méiyǒu wéibèiguo zìjǐ de chéngnuò, yīncǐ dàjiā dōu hěn xìnrèn tā.',
      note:'从来没(有) + V + 过 = chưa từng bao giờ; 因此 dẫn ra kết quả.',pair:'从来没……过'}
   ]},

  {n:6,zh:'草率',py:'cǎoshuài',pos:'Tính từ',vn:'qua loa, cẩu thả, khinh suất',hv:'thảo suất',em:'🙈',lesson:1,
   explain:['Làm việc qua loa, không suy nghĩ kỹ, vội vàng quyết định.','Thường nói về quyết định, thái độ, cách làm: 草率的决定, 草率行事.'],
   usage:'(很 / 太) 草率; 草率地 + V; 草率的 + N. Hay đi với 不能 / 别: 不能草率.',
   collo:['草率的决定','草率行事','太草率了','草率地答应'],
   ex_zh:'它发觉自己对山神的承诺是多么草率。',ex_py:'Tā fājué zìjǐ duì shānshén de chéngnuò shì duōme cǎoshuài.',ex_vn:'Nó nhận ra lời hứa của mình với thần núi khinh suất biết bao.',
   exList:[
     {zh:'它发觉自己对山神的承诺是多么草率。',py:'Tā fājué zìjǐ duì shānshén de chéngnuò shì duōme cǎoshuài.',vn:'Nó nhận ra lời hứa của mình với thần núi khinh suất biết bao.'},
     {zh:'选专业是大事，千万不能草率决定。',py:'Xuǎn zhuānyè shì dàshì, qiānwàn bù néng cǎoshuài juédìng.',vn:'Chọn ngành là chuyện lớn, tuyệt đối không được quyết định vội vàng.'},
     {zh:'这篇作文写得太草率了，连错别字都没改。',py:'Zhè piān zuòwén xiě de tài cǎoshuài le, lián cuòbiézì dōu méi gǎi.',vn:'Bài văn này viết quá cẩu thả, đến lỗi chính tả cũng không sửa.'}
   ],
   colloFull:[
     {zh:'草率的决定',py:'cǎoshuài de juédìng',vn:'quyết định vội vàng'},
     {zh:'草率行事',py:'cǎoshuài xíngshì',vn:'làm việc qua loa'},
     {zh:'太草率了',py:'tài cǎoshuài le',vn:'quá khinh suất'},
     {zh:'草率地答应',py:'cǎoshuài de dāying',vn:'vội vàng nhận lời'},
     {zh:'草率结婚',py:'cǎoshuài jiéhūn',vn:'cưới vội'}
   ],
   patterns:[
     {s:'草率地 + V / 草率 + V',m:'Làm… một cách vội vàng, thiếu cân nhắc'},
     {s:'……得太草率了',m:'Làm… quá qua loa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện quan trọng như thế này, chúng ta tuyệt đối không được quyết định vội vàng.',answer:'这么重要的事，我们千万不能草率决定。',answerPy:'Zhème zhòngyào de shì, wǒmen qiānwàn bù néng cǎoshuài juédìng.',
      note:'千万 + 不能 / 别 = tuyệt đối đừng; chủ đề (这么重要的事) đưa lên đầu câu.',pair:'千万 + 别/不能'},
     {promptLang:'vi',prompt:'Anh ấy làm việc quá qua loa, đến tên khách hàng cũng viết sai.',answer:'他做事太草率了，连客户的名字都写错了。',answerPy:'Tā zuò shì tài cǎoshuài le, lián kèhù de míngzi dōu xiěcuò le.',
      note:'连……都…… nhấn mạnh trường hợp cực đoan nhất.',pair:'连……都……'}
   ]},

  {n:7,zh:'对抗',py:'duìkàng',pos:'Động từ',vn:'đối chọi, chống lại',hv:'đối kháng',em:'⚔️',lesson:1,
   explain:['Hai bên chống đối, đối đầu nhau; chống lại một thế lực.','Hay đi với 力量, 能力 hoặc làm danh từ: 激烈的对抗.'],
   usage:'A 跟 / 和 B 对抗; 对抗 + N (对抗疾病); 对抗……的力量.',
   collo:['对抗大象','对抗的力量','跟猫对抗','激烈对抗'],
   ex_zh:'它是那么弱小，丝毫没有对抗大象的力量。',ex_py:'Tā shì nàme ruòxiǎo, sīháo méiyǒu duìkàng dàxiàng de lìliang.',ex_vn:'Nó nhỏ yếu đến thế, chẳng có chút sức lực nào để chống lại voi.',
   exList:[
     {zh:'它是那么弱小，丝毫没有对抗大象的力量。',py:'Tā shì nàme ruòxiǎo, sīháo méiyǒu duìkàng dàxiàng de lìliang.',vn:'Nó nhỏ yếu đến thế, chẳng có chút sức lực nào để chống lại voi.'},
     {zh:'《猫和老鼠》讲了一只聪明的老鼠跟猫对抗的故事。',py:'"Māo hé Lǎoshǔ" jiǎngle yì zhī cōngming de lǎoshǔ gēn māo duìkàng de gùshi.',vn:'"Tom và Jerry" kể câu chuyện một chú chuột thông minh đối đầu với mèo.'},
     {zh:'两支球队实力差不多，比赛中对抗非常激烈。',py:'Liǎng zhī qiúduì shílì chàbuduō, bǐsài zhōng duìkàng fēicháng jīliè.',vn:'Hai đội bóng thực lực ngang nhau, trong trận đấu đối đầu rất quyết liệt.'}
   ],
   colloFull:[
     {zh:'对抗大象',py:'duìkàng dàxiàng',vn:'chống lại voi'},
     {zh:'对抗的力量',py:'duìkàng de lìliang',vn:'sức để chống lại'},
     {zh:'跟猫对抗',py:'gēn māo duìkàng',vn:'đối đầu với mèo'},
     {zh:'激烈对抗',py:'jīliè duìkàng',vn:'đối đầu quyết liệt'},
     {zh:'对抗疾病',py:'duìkàng jíbìng',vn:'chống lại bệnh tật'}
   ],
   patterns:[
     {s:'A + 跟 / 和 + B + 对抗',m:'A đối đầu với B'},
     {s:'对抗 + N (的力量 / 能力)',m:'(Sức lực, khả năng) chống lại…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ dựa vào một mình cậu thì không thể nào đối đầu với cả nhóm của họ.',answer:'只靠你一个人，是没办法跟他们整个小组对抗的。',answerPy:'Zhǐ kào nǐ yí ge rén, shì méi bànfǎ gēn tāmen zhěnggè xiǎozǔ duìkàng de.',
      note:'是……的 khẳng định nhận định của người nói; 跟 + đối phương + 对抗.',pair:'是……的 (khẳng định)'},
     {promptLang:'vi',prompt:'Thường xuyên tập thể dục có thể giúp cơ thể chống lại bệnh tật.',answer:'经常锻炼可以帮助身体对抗疾病。',answerPy:'Jīngcháng duànliàn kěyǐ bāngzhù shēntǐ duìkàng jíbìng.',
      note:'帮助 + đối tượng + động từ (câu kiêm ngữ).',pair:'帮助 + O + V'}
   ]},

  {n:8,zh:'尝试',py:'chángshì',pos:'Động từ',vn:'thử',hv:'thường thí',em:'🧪',lesson:1,
   explain:['Thử làm (việc chưa làm bao giờ, chưa chắc thành công). Cũng là danh từ: 一次尝试.','Trang trọng hơn 试; hay nói 尝试一下, 大胆尝试, 新的尝试.'],
   usage:'尝试 + V / N; 尝试一下; 做一次尝试. Lặp được: 尝试尝试.',
   collo:['尝试一下','大胆尝试','第一次尝试','新的尝试'],
   ex_zh:'老鼠还是决定尝试一下。',ex_py:'Lǎoshǔ háishi juédìng chángshì yíxià.',ex_vn:'Chuột vẫn quyết định thử một phen.',
   exList:[
     {zh:'老鼠还是决定尝试一下。',py:'Lǎoshǔ háishi juédìng chángshì yíxià.',vn:'Chuột vẫn quyết định thử một phen.'},
     {zh:'不要害怕失败，年轻人应该大胆尝试。',py:'Búyào hàipà shībài, niánqīngrén yīnggāi dàdǎn chángshì.',vn:'Đừng sợ thất bại, người trẻ nên mạnh dạn thử.'},
     {zh:'我第一次尝试自己做月饼，没想到味道还不错。',py:'Wǒ dì-yī cì chángshì zìjǐ zuò yuèbing, méi xiǎngdào wèidao hái búcuò.',vn:'Lần đầu tôi thử tự làm bánh trung thu, không ngờ vị cũng khá ngon.'}
   ],
   colloFull:[
     {zh:'尝试一下',py:'chángshì yíxià',vn:'thử một chút'},
     {zh:'大胆尝试',py:'dàdǎn chángshì',vn:'mạnh dạn thử'},
     {zh:'第一次尝试',py:'dì-yī cì chángshì',vn:'lần thử đầu tiên'},
     {zh:'新的尝试',py:'xīn de chángshì',vn:'thử nghiệm mới'},
     {zh:'尝试失败',py:'chángshì shībài',vn:'thử không thành'}
   ],
   patterns:[
     {s:'尝试 + V (新方法 / 自己做……)',m:'Thử làm…'},
     {s:'做一次 + 尝试',m:'Danh từ: một lần thử'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chưa từng học vẽ bao giờ nhưng em vẫn muốn thử một lần.',answer:'虽然我从来没学过画画，但还是想尝试一下。',answerPy:'Suīrán wǒ cónglái méi xuéguo huà huà, dàn háishi xiǎng chángshì yíxià.',
      note:'虽然……但(是)……还是…… = tuy… nhưng vẫn…; 尝试一下 làm nhẹ giọng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cách này tôi đã thử rồi, hiệu quả không tốt lắm.',answer:'这个方法我已经尝试过了，效果不太好。',answerPy:'Zhège fāngfǎ wǒ yǐjīng chángshìguo le, xiàoguǒ bú tài hǎo.',
      note:'V + 过 diễn tả kinh nghiệm đã từng; tân ngữ 这个方法 đưa lên đầu câu làm chủ đề.',pair:'V + 过'}
   ]},

  {n:9,zh:'盲目',py:'mángmù',pos:'Tính từ',vn:'mù quáng',hv:'manh mục',em:'🦯',lesson:1,
   explain:['Mù quáng: làm mà không có mục đích rõ ràng, không nhận thức đúng, không suy tính.','Thường làm trạng ngữ: 盲目行动, 盲目跟风, 盲目相信.'],
   usage:'盲目 + V; 盲目地 + V; 太盲目了.',
   collo:['盲目行动','盲目相信','盲目跟风','盲目乐观'],
   ex_zh:'我太小了，不可以盲目行动。',ex_py:'Wǒ tài xiǎo le, bù kěyǐ mángmù xíngdòng.',ex_vn:'Mình nhỏ quá, không được hành động mù quáng.',
   exList:[
     {zh:'我太小了，不可以盲目行动。',py:'Wǒ tài xiǎo le, bù kěyǐ mángmù xíngdòng.',vn:'Mình nhỏ quá, không được hành động mù quáng.'},
     {zh:'买东西不能盲目跟风，要看自己需不需要。',py:'Mǎi dōngxi bù néng mángmù gēnfēng, yào kàn zìjǐ xū bu xūyào.',vn:'Mua đồ không được chạy theo trào lưu mù quáng, phải xem mình có cần hay không.'},
     {zh:'网上的消息不一定都是真的，千万别盲目相信。',py:'Wǎng shang de xiāoxi bù yídìng dōu shì zhēn de, qiānwàn bié mángmù xiāngxìn.',vn:'Tin trên mạng chưa chắc đã thật, tuyệt đối đừng tin mù quáng.'}
   ],
   colloFull:[
     {zh:'盲目行动',py:'mángmù xíngdòng',vn:'hành động mù quáng'},
     {zh:'盲目相信',py:'mángmù xiāngxìn',vn:'tin mù quáng'},
     {zh:'盲目跟风',py:'mángmù gēnfēng',vn:'a dua theo trào lưu'},
     {zh:'盲目乐观',py:'mángmù lèguān',vn:'lạc quan mù quáng'},
     {zh:'盲目崇拜',py:'mángmù chóngbài',vn:'sùng bái mù quáng'}
   ],
   patterns:[
     {s:'(不能 / 别) + 盲目 + V',m:'(Đừng) làm… một cách mù quáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chọn trường đại học không nên chạy theo người khác một cách mù quáng mà phải xem sở thích của mình.',answer:'选大学不应该盲目跟着别人，而要看自己的兴趣。',answerPy:'Xuǎn dàxué bù yīnggāi mángmù gēnzhe biérén, ér yào kàn zìjǐ de xìngqù.',
      note:'不……，而…… = không… mà…; 而 nối vế đối lập, đứng đầu vế sau.',pair:'不……而……'},
     {promptLang:'vi',prompt:'Trước khi tìm hiểu rõ tình hình, tốt nhất chúng ta đừng hành động mù quáng.',answer:'在了解清楚情况以前，我们最好别盲目行动。',answerPy:'Zài liǎojiě qīngchu qíngkuàng yǐqián, wǒmen zuìhǎo bié mángmù xíngdòng.',
      note:'在……以前 làm trạng ngữ thời gian; 最好 + 别 + V = tốt nhất đừng.',pair:'最好'}
   ]},

  {n:10,zh:'乘',py:'chéng',pos:'Giới từ',vn:'nhân (lúc), thừa (dịp)',hv:'thừa',em:'🎯',lesson:1,
   explain:['Giới từ: nhân lúc, thừa dịp — lợi dụng thời cơ, điều kiện để làm việc gì; gần với 趁 nhưng văn viết hơn.','Còn là động từ "đi (xe, tàu, máy bay)": 乘车, 乘飞机; và "nhân" trong phép tính: 三乘五. Trong bài dùng nghĩa giới từ: 乘大象不注意.','乘机 (nhân cơ hội) ghép từ 乘 + 机 — xem điểm ngữ pháp 1.'],
   usage:'乘 + (ai) + 不注意 / 这个机会 / 天还没亮 + V. 乘机 + V.',
   collo:['乘大象不注意','乘机','乘此机会','乘车'],
   ex_zh:'我可以乘大象不注意，进到大象鼻子里去。',ex_py:'Wǒ kěyǐ chéng dàxiàng bú zhùyì, jìndào dàxiàng bízi li qù.',ex_vn:'Mình có thể nhân lúc voi không để ý mà chui vào vòi của nó.',
   exList:[
     {zh:'我可以乘大象不注意，进到大象鼻子里去。',py:'Wǒ kěyǐ chéng dàxiàng bú zhùyì, jìndào dàxiàng bízi li qù.',vn:'Mình có thể nhân lúc voi không để ý mà chui vào vòi của nó.'},
     {zh:'小偷乘她不注意，偷走了她的钱包。',py:'Xiǎotōu chéng tā bú zhùyì, tōuzǒule tā de qiánbāo.',vn:'Tên trộm nhân lúc cô ấy không để ý đã lấy mất ví của cô.'},
     {zh:'我想乘这次出差的机会，去看看在上海的老同学。',py:'Wǒ xiǎng chéng zhè cì chūchāi de jīhuì, qù kànkan zài Shànghǎi de lǎo tóngxué.',vn:'Tôi muốn nhân dịp đi công tác lần này ghé thăm bạn học cũ ở Thượng Hải.'}
   ],
   colloFull:[
     {zh:'乘大象不注意',py:'chéng dàxiàng bú zhùyì',vn:'nhân lúc voi không để ý'},
     {zh:'乘机',py:'chéngjī',vn:'nhân cơ hội'},
     {zh:'乘此机会',py:'chéng cǐ jīhuì',vn:'nhân dịp này'},
     {zh:'乘车',py:'chéng chē',vn:'đi xe'},
     {zh:'乘人不备',py:'chéng rén bú bèi',vn:'nhân lúc người ta không phòng bị'}
   ],
   patterns:[
     {s:'乘 + ai + 不注意 / ……的机会 + V',m:'Nhân lúc… / nhân dịp… để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân lúc mẹ không để ý, em trai lén ăn mất hai cái kẹo.',answer:'弟弟乘妈妈不注意，偷偷吃了两块糖。',answerPy:'Dìdi chéng māma bú zhùyì, tōutōu chīle liǎng kuài táng.',
      note:'乘 + mệnh đề ngắn làm trạng ngữ; 偷偷 + V = lén lút làm.',pair:'偷偷 + V'},
     {promptLang:'vi',prompt:'Nhân dịp nghỉ hè, em muốn đi làm thêm để tích lũy chút kinh nghiệm.',answer:'我想乘放暑假的机会去打工，积累一些经验。',answerPy:'Wǒ xiǎng chéng fàng shǔjià de jīhuì qù dǎgōng, jīlěi yìxiē jīngyàn.',
      note:'乘……的机会 + V; 去 + V chỉ mục đích.',pair:'去 + V (mục đích)'}
   ]},

  {n:11,zh:'喘气',py:'chuǎn qì',pos:'Động từ',vn:'thở, thở dốc',hv:'suyễn khí',em:'😮‍💨',lesson:1,
   explain:['Thở, hít thở (thường là thở mạnh, thở dốc sau khi vận động).','Động từ li hợp: 喘了一口气, 喘不过气来. Nghĩa bóng: nghỉ lấy hơi (让我喘口气).'],
   usage:'喘气; 喘口气; 喘不过气(来); 大口大口地喘气.',
   collo:['不能喘气','喘口气','喘不过气来','大口喘气'],
   ex_zh:'大象不能喘气了，就得请求我饶恕。',ex_py:'Dàxiàng bù néng chuǎn qì le, jiù děi qǐngqiú wǒ ráoshù.',ex_vn:'Voi không thở được thì phải cầu xin mình tha thứ.',
   exList:[
     {zh:'大象不能喘气了，就得请求我饶恕。',py:'Dàxiàng bù néng chuǎn qì le, jiù děi qǐngqiú wǒ ráoshù.',vn:'Voi không thở được thì phải cầu xin mình tha thứ.'},
     {zh:'他一口气跑上了十楼，站在门口直喘气。',py:'Tā yìkǒuqì pǎoshàngle shí lóu, zhàn zài ménkǒu zhí chuǎn qì.',vn:'Anh ấy chạy một mạch lên tầng mười, đứng ở cửa thở dốc mãi.'},
     {zh:'作业太多了，压得我喘不过气来，先让我喘口气吧。',py:'Zuòyè tài duō le, yā de wǒ chuǎn bu guò qì lái, xiān ràng wǒ chuǎn kǒu qì ba.',vn:'Bài tập nhiều quá, đè đến mức tôi không thở nổi, cho tôi nghỉ lấy hơi chút đã.'}
   ],
   colloFull:[
     {zh:'不能喘气',py:'bù néng chuǎn qì',vn:'không thở được'},
     {zh:'喘口气',py:'chuǎn kǒu qì',vn:'thở một hơi, nghỉ lấy hơi'},
     {zh:'喘不过气来',py:'chuǎn bu guò qì lái',vn:'thở không ra hơi'},
     {zh:'大口喘气',py:'dà kǒu chuǎn qì',vn:'thở hổn hển'},
     {zh:'直喘气',py:'zhí chuǎn qì',vn:'thở dốc mãi'}
   ],
   patterns:[
     {s:'喘 + (一)口 + 气',m:'Li hợp: chen lượng từ vào giữa'},
     {s:'……压得 + ai + 喘不过气来',m:'Áp lực đến mức nghẹt thở'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Leo lên đến đỉnh núi, ai nấy đều mệt đến thở không ra hơi.',answer:'爬到山顶，大家都累得喘不过气来。',answerPy:'Pá dào shāndǐng, dàjiā dōu lèi de chuǎn bu guò qì lái.',
      note:'Tính từ + 得 + bổ ngữ trình độ (喘不过气来 là bổ ngữ khả năng dạng phủ định).',pair:'Adj + 得 + bổ ngữ'},
     {promptLang:'vi',prompt:'Đợi tôi nghỉ lấy hơi một chút rồi hãy đi tiếp nhé.',answer:'等我喘口气再继续走吧。',answerPy:'Děng wǒ chuǎn kǒu qì zài jìxù zǒu ba.',
      note:'等…… + 再 + V = đợi… xong rồi mới…',pair:'等……再……'}
   ]},

  {n:12,zh:'饶恕',py:'ráoshù',pos:'Động từ',vn:'tha thứ, bỏ qua',hv:'nhiêu thứ',em:'🙏',lesson:1,
   explain:['Tha, không trách phạt người có lỗi — mức độ nặng, trang trọng hơn 原谅 (bài 2).','Hay gặp: 请求饶恕, 不可饶恕, 饶恕别人.'],
   usage:'饶恕 + người; 请求 + ai + 饶恕; 不可饶恕的错误.',
   collo:['请求饶恕','不可饶恕','饶恕他','饶恕别人'],
   ex_zh:'大象就得请求我饶恕，我就可以强迫它认输。',ex_py:'Dàxiàng jiù děi qǐngqiú wǒ ráoshù, wǒ jiù kěyǐ qiǎngpò tā rènshū.',ex_vn:'Voi sẽ phải xin mình tha, và mình có thể buộc nó chịu thua.',
   exList:[
     {zh:'大象就得请求我饶恕，我就可以强迫它认输。',py:'Dàxiàng jiù děi qǐngqiú wǒ ráoshù, wǒ jiù kěyǐ qiǎngpò tā rènshū.',vn:'Voi sẽ phải xin mình tha, và mình có thể buộc nó chịu thua.'},
     {zh:'他犯的是不可饶恕的错误。',py:'Tā fàn de shì bù kě ráoshù de cuòwù.',vn:'Cái anh ta phạm phải là lỗi lầm không thể tha thứ.'},
     {zh:'孩子已经认识到错误了，你就饶恕他这一次吧。',py:'Háizi yǐjīng rènshi dào cuòwù le, nǐ jiù ráoshù tā zhè yí cì ba.',vn:'Thằng bé đã nhận ra lỗi rồi, anh tha cho nó lần này đi.'}
   ],
   colloFull:[
     {zh:'请求饶恕',py:'qǐngqiú ráoshù',vn:'cầu xin tha thứ'},
     {zh:'不可饶恕',py:'bù kě ráoshù',vn:'không thể tha thứ'},
     {zh:'饶恕他',py:'ráoshù tā',vn:'tha cho anh ta'},
     {zh:'饶恕别人',py:'ráoshù biérén',vn:'tha thứ cho người khác'},
     {zh:'得到饶恕',py:'dédào ráoshù',vn:'được tha thứ'}
   ],
   patterns:[
     {s:'请求 + ai + 饶恕',m:'Cầu xin ai tha thứ'},
     {s:'不可饶恕的 + 错误 / 罪行',m:'Lỗi lầm không thể tha thứ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn ấy đã biết lỗi rồi, cậu tha cho bạn ấy đi.',answer:'他已经知道错了，你就饶恕他吧。',answerPy:'Tā yǐjīng zhīdào cuò le, nǐ jiù ráoshù tā ba.',
      note:'就……吧 làm lời khuyên mềm mỏng; 已经……了 báo sự việc đã xảy ra.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Hết lần này đến lần khác lừa dối bố mẹ là điều không thể tha thứ.',answer:'一次又一次地欺骗父母，是不可饶恕的。',answerPy:'Yí cì yòu yí cì de qīpiàn fùmǔ, shì bù kě ráoshù de.',
      note:'一次又一次地 + V = hết lần này đến lần khác; 是……的 khẳng định đánh giá.',pair:'一……又一……'}
   ]},

  {n:13,zh:'强迫',py:'qiǎngpò',pos:'Động từ',vn:'ép buộc, bắt buộc',hv:'cưỡng bách',em:'✊',lesson:1,
   explain:['Dùng sức ép, quyền lực bắt người khác làm việc họ không muốn.','Chú ý đọc qiǎngpò (强 thanh 3), không đọc qiáng.'],
   usage:'强迫 + ai + V (câu kiêm ngữ); 被……强迫; 强迫自己 + V.',
   collo:['强迫它认输','强迫别人','被强迫','强迫自己'],
   ex_zh:'我就可以强迫它认输。',ex_py:'Wǒ jiù kěyǐ qiǎngpò tā rènshū.',ex_vn:'Thế là mình có thể ép nó chịu thua.',
   exList:[
     {zh:'我就可以强迫它认输。',py:'Wǒ jiù kěyǐ qiǎngpò tā rènshū.',vn:'Thế là mình có thể ép nó chịu thua.'},
     {zh:'倘若你对一件事毫无兴趣，那么有人强迫你做时，你会觉得痛苦。',py:'Tǎngruò nǐ duì yí jiàn shì háowú xìngqù, nàme yǒu rén qiǎngpò nǐ zuò shí, nǐ huì juéde tòngkǔ.',vn:'Nếu bạn chẳng hứng thú gì với một việc thì khi có người ép bạn làm, bạn sẽ thấy khổ sở.'},
     {zh:'父母不应该强迫孩子学自己不喜欢的专业。',py:'Fùmǔ bù yīnggāi qiǎngpò háizi xué zìjǐ bù xǐhuan de zhuānyè.',vn:'Bố mẹ không nên ép con học ngành mà con không thích.'}
   ],
   colloFull:[
     {zh:'强迫它认输',py:'qiǎngpò tā rènshū',vn:'ép nó chịu thua'},
     {zh:'强迫别人',py:'qiǎngpò biérén',vn:'ép buộc người khác'},
     {zh:'被强迫',py:'bèi qiǎngpò',vn:'bị ép buộc'},
     {zh:'强迫自己',py:'qiǎngpò zìjǐ',vn:'tự ép mình'},
     {zh:'强迫命令',py:'qiǎngpò mìnglìng',vn:'cưỡng ép ra lệnh'}
   ],
   patterns:[
     {s:'强迫 + ai + V',m:'Ép ai làm gì (câu kiêm ngữ)'},
     {s:'强迫自己 + V',m:'Tự ép bản thân làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giảm cân, ngày nào cô ấy cũng tự ép mình chạy năm cây số.',answer:'为了减肥，她每天都强迫自己跑五公里。',answerPy:'Wèile jiǎnféi, tā měi tiān dōu qiǎngpò zìjǐ pǎo wǔ gōnglǐ.',
      note:'为了 + mục đích đặt đầu câu; 强迫自己 + V.',pair:'为了'},
     {promptLang:'vi',prompt:'Nếu cậu ấy không muốn đi thì đừng ép cậu ấy nữa.',answer:'要是他不想去，就别强迫他了。',answerPy:'Yàoshi tā bù xiǎng qù, jiù bié qiǎngpò tā le.',
      note:'要是……就…… = nếu… thì…; 别……了 = đừng… nữa.',pair:'要是……就……'}
   ]},

  {n:14,zh:'实施',py:'shíshī',pos:'Động từ',vn:'thực hiện, thực thi',hv:'thực thi',em:'📋',lesson:1,
   explain:['Đưa kế hoạch, chính sách, biện pháp, luật lệ vào thực tế.','Tân ngữ là những từ trừu tượng, trang trọng: 计划, 方案, 政策, 法律. Không nói 实施作业.'],
   usage:'实施 + 计划 / 方案 / 政策; 开始实施; 正式实施.',
   collo:['实施计划','开始实施','正式实施','实施方案'],
   ex_zh:'老鼠乘机跑进大象的鼻子中，准备实施它的计划。',ex_py:'Lǎoshǔ chéngjī pǎojìn dàxiàng de bízi zhōng, zhǔnbèi shíshī tā de jìhuà.',ex_vn:'Chuột nhân cơ hội chạy vào vòi voi, chuẩn bị thực hiện kế hoạch của nó.',
   exList:[
     {zh:'老鼠乘机跑进大象的鼻子中，准备实施它的计划。',py:'Lǎoshǔ chéngjī pǎojìn dàxiàng de bízi zhōng, zhǔnbèi shíshī tā de jìhuà.',vn:'Chuột nhân cơ hội chạy vào vòi voi, chuẩn bị thực hiện kế hoạch của nó.'},
     {zh:'新的交通规定从下个月起正式实施。',py:'Xīn de jiāotōng guīdìng cóng xià ge yuè qǐ zhèngshì shíshī.',vn:'Quy định giao thông mới chính thức có hiệu lực từ tháng sau.'},
     {zh:'计划制订得再好，不认真实施也没有用。',py:'Jìhuà zhìdìng de zài hǎo, bú rènzhēn shíshī yě méiyǒu yòng.',vn:'Kế hoạch lập ra dù hay đến mấy mà không nghiêm túc thực hiện thì cũng vô ích.'}
   ],
   colloFull:[
     {zh:'实施计划',py:'shíshī jìhuà',vn:'thực hiện kế hoạch'},
     {zh:'开始实施',py:'kāishǐ shíshī',vn:'bắt đầu thực hiện'},
     {zh:'正式实施',py:'zhèngshì shíshī',vn:'chính thức thực thi'},
     {zh:'实施方案',py:'shíshī fāng\'àn',vn:'thực hiện phương án'},
     {zh:'实施政策',py:'shíshī zhèngcè',vn:'thực thi chính sách'}
   ],
   patterns:[
     {s:'实施 + 计划 / 方案 / 政策',m:'Đưa kế hoạch… vào thực tế'},
     {s:'从…… + 起 + 正式实施',m:'Chính thức thực thi từ…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch ôn thi này bắt đầu thực hiện từ thứ Hai tuần sau.',answer:'这个复习计划从下星期一开始实施。',answerPy:'Zhège fùxí jìhuà cóng xià xīngqīyī kāishǐ shíshī.',
      note:'从 + thời điểm + 开始 + V; chủ ngữ là kế hoạch (bị động ý nghĩa).',pair:'从……开始'},
     {promptLang:'vi',prompt:'Kế hoạch còn chưa thực hiện đã bị mọi người phản đối.',answer:'计划还没实施，就被大家反对了。',answerPy:'Jìhuà hái méi shíshī, jiù bèi dàjiā fǎnduì le.',
      note:'还没……就…… = chưa… đã…; 被 + người + V (câu bị động).',pair:'被'}
   ]},

  {n:15,zh:'不料',py:'búliào',pos:'Liên từ',vn:'không ngờ, chẳng dè',hv:'bất liệu',em:'😲',lesson:1,
   explain:['Liên từ = 没想到: vế trước nói điều dự tính, vế sau dùng 不料 dẫn ra tình huống bất ngờ.','Hay đi với 却, 竟, 竟然, 倒, 还 — xem điểm ngữ pháp 2. Đọc búliào (不 biến điệu vì 料 thanh 4).'],
   usage:'Vế 1 (dự tính)，不料 + (chủ ngữ) + 却 / 竟然 + điều bất ngờ.',
   collo:['不料……却……','不料……竟……','不料刚进去','不料下起雨来'],
   ex_zh:'老鼠准备实施它的计划。不料，刚进去，大象痒得难受，猛烈地打起了喷嚏。',ex_py:'Lǎoshǔ zhǔnbèi shíshī tā de jìhuà. Búliào, gāng jìnqu, dàxiàng yǎng de nánshòu, měngliè de dǎqǐle pēntì.',ex_vn:'Chuột chuẩn bị thực hiện kế hoạch. Chẳng ngờ vừa vào, voi ngứa không chịu nổi, hắt hơi dữ dội.',
   exList:[
     {zh:'老鼠准备实施它的计划。不料，刚进去，大象痒得难受，猛烈地打起了喷嚏。',py:'Lǎoshǔ zhǔnbèi shíshī tā de jìhuà. Búliào, gāng jìnqu, dàxiàng yǎng de nánshòu, měngliè de dǎqǐle pēntì.',vn:'Chuột chuẩn bị thực hiện kế hoạch. Chẳng ngờ vừa vào, voi ngứa không chịu nổi, hắt hơi dữ dội.'},
     {zh:'我只想和她开个玩笑，不料她却生气了。',py:'Wǒ zhǐ xiǎng hé tā kāi ge wánxiào, búliào tā què shēngqì le.',vn:'Tôi chỉ muốn đùa với cô ấy một chút, không ngờ cô ấy lại giận.'},
     {zh:'我们做好了一切准备，下个星期就去旅行，不料他竟病倒了。',py:'Wǒmen zuòhǎole yíqiè zhǔnbèi, xià ge xīngqī jiù qù lǚxíng, búliào tā jìng bìngdǎo le.',vn:'Chúng tôi đã chuẩn bị xong xuôi, tuần sau là đi du lịch, chẳng ngờ anh ấy lại đổ bệnh.'}
   ],
   colloFull:[
     {zh:'不料……却……',py:'búliào……què……',vn:'không ngờ… lại…'},
     {zh:'不料……竟……',py:'búliào……jìng……',vn:'chẳng dè… lại…'},
     {zh:'不料刚进去',py:'búliào gāng jìnqu',vn:'không ngờ vừa vào'},
     {zh:'不料下起雨来',py:'búliào xiàqǐ yǔ lái',vn:'không ngờ trời đổ mưa'},
     {zh:'不料竟然',py:'búliào jìngrán',vn:'không ngờ lại'}
   ],
   patterns:[
     {s:'……，不料 + chủ ngữ + 却 / 竟(然) + V',m:'Dự tính một đằng, không ngờ lại xảy ra một nẻo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tưởng bài thi sẽ rất khó, không ngờ lại dễ như vậy.',answer:'我以为考试会很难，不料竟然这么容易。',answerPy:'Wǒ yǐwéi kǎoshì huì hěn nán, búliào jìngrán zhème róngyì.',
      note:'以为 = tưởng (mà sai); 不料 + 竟然 nhấn mạnh sự bất ngờ.',pair:'以为'},
     {promptLang:'vi',prompt:'Anh ấy đã định xin lỗi, không ngờ cô ấy lại đi mất rồi.',answer:'他本来打算道歉，不料她却已经走了。',answerPy:'Tā běnlái dǎsuan dàoqiàn, búliào tā què yǐjīng zǒu le.',
      note:'本来 = vốn định (sau đó thay đổi); 却 đứng sau chủ ngữ vế 2.',pair:'本来'}
   ]},

  {n:16,zh:'猛烈',py:'měngliè',pos:'Tính từ',vn:'mãnh liệt, dữ dội',hv:'mãnh liệt',em:'💥',lesson:1,
   explain:['Sức mạnh lớn, thế dữ dội (gió, lửa, tấn công, động tác…).','Thường làm định ngữ hoặc trạng ngữ: 猛烈的大风, 猛烈地攻击. Khác 热烈 (sôi nổi, nhiệt liệt — dùng cho không khí, vỗ tay).'],
   usage:'猛烈的 + N; 猛烈地 + V; (风 / 火 / 攻击) + 很猛烈.',
   collo:['猛烈地打喷嚏','猛烈的大风','猛烈攻击','炮火猛烈'],
   ex_zh:'大象痒得难受，猛烈地打起了喷嚏。',ex_py:'Dàxiàng yǎng de nánshòu, měngliè de dǎqǐle pēntì.',ex_vn:'Voi ngứa không chịu nổi, hắt hơi dữ dội.',
   exList:[
     {zh:'大象痒得难受，猛烈地打起了喷嚏。',py:'Dàxiàng yǎng de nánshòu, měngliè de dǎqǐle pēntì.',vn:'Voi ngứa không chịu nổi, hắt hơi dữ dội.'},
     {zh:'一阵猛烈的大风把路边的树都吹倒了。',py:'Yí zhèn měngliè de dàfēng bǎ lù biān de shù dōu chuīdǎo le.',vn:'Một trận gió dữ dội thổi đổ hết cây bên đường.'},
     {zh:'下半场我们发起了猛烈的进攻，终于攻入了一球。',py:'Xià bàn chǎng wǒmen fāqǐle měngliè de jìngōng, zhōngyú gōngrùle yì qiú.',vn:'Hiệp hai chúng tôi tấn công dồn dập, cuối cùng cũng ghi được một bàn.'}
   ],
   colloFull:[
     {zh:'猛烈地打喷嚏',py:'měngliè de dǎ pēntì',vn:'hắt hơi dữ dội'},
     {zh:'猛烈的大风',py:'měngliè de dàfēng',vn:'gió to dữ dội'},
     {zh:'猛烈攻击',py:'měngliè gōngjī',vn:'tấn công mãnh liệt'},
     {zh:'炮火猛烈',py:'pàohuǒ měngliè',vn:'hỏa lực dữ dội'},
     {zh:'猛烈的进攻',py:'měngliè de jìngōng',vn:'đợt tấn công dồn dập'}
   ],
   patterns:[
     {s:'猛烈地 + V',m:'Làm… một cách dữ dội'},
     {s:'猛烈的 + 风 / 火 / 进攻',m:'(Gió, lửa, tấn công) dữ dội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trận bão dữ dội này làm hư hại hơn một trăm ngôi nhà.',answer:'这场猛烈的台风把一百多座房子都损坏了。',answerPy:'Zhè chǎng měngliè de táifēng bǎ yìbǎi duō zuò fángzi dōu sǔnhuài le.',
      note:'把 + tân ngữ + V + kết quả; 一百多 = hơn một trăm.',pair:'把'},
     {promptLang:'vi',prompt:'Mưa càng lúc càng to, gió cũng càng lúc càng dữ.',answer:'雨越下越大，风也越来越猛烈了。',answerPy:'Yǔ yuè xià yuè dà, fēng yě yuè lái yuè měngliè le.',
      note:'越 V 越 Adj / 越来越 + Adj diễn tả mức độ tăng dần.',pair:'越……越……'}
   ]},

  {n:17,zh:'子弹',py:'zǐdàn',pos:'Danh từ',vn:'viên đạn',hv:'tử đạn',em:'🔫',lesson:1,
   explain:['Viên đạn (của súng). Lượng từ: 颗, 发.','Trong bài dùng để so sánh tốc độ: 像子弹一样 = nhanh như đạn bắn.'],
   usage:'一颗 / 一发子弹; 像子弹一样 + V; 子弹打中了……',
   collo:['像子弹一样','一颗子弹','子弹打中','子弹头'],
   ex_zh:'老鼠像子弹一样被射了出来。',ex_py:'Lǎoshǔ xiàng zǐdàn yíyàng bèi shèle chūlái.',ex_vn:'Chuột bị bắn văng ra như một viên đạn.',
   exList:[
     {zh:'老鼠像子弹一样被射了出来。',py:'Lǎoshǔ xiàng zǐdàn yíyàng bèi shèle chūlái.',vn:'Chuột bị bắn văng ra như một viên đạn.'},
     {zh:'警察在现场找到了一颗子弹。',py:'Jǐngchá zài xiànchǎng zhǎodàole yì kē zǐdàn.',vn:'Cảnh sát tìm thấy một viên đạn tại hiện trường.'},
     {zh:'时间就像射出去的子弹，永远不会回头。',py:'Shíjiān jiù xiàng shè chūqu de zǐdàn, yǒngyuǎn bú huì huítóu.',vn:'Thời gian giống như viên đạn đã bắn ra, mãi mãi không quay đầu lại.'}
   ],
   colloFull:[
     {zh:'像子弹一样',py:'xiàng zǐdàn yíyàng',vn:'như viên đạn'},
     {zh:'一颗子弹',py:'yì kē zǐdàn',vn:'một viên đạn'},
     {zh:'子弹打中',py:'zǐdàn dǎzhòng',vn:'đạn bắn trúng'},
     {zh:'子弹头',py:'zǐdàntóu',vn:'đầu đạn'},
     {zh:'子弹列车',py:'zǐdàn lièchē',vn:'tàu cao tốc "viên đạn"'}
   ],
   patterns:[
     {s:'像子弹一样 + V',m:'So sánh: nhanh như đạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe lao vút qua trước mặt tôi như một viên đạn.',answer:'那辆车像子弹一样从我面前冲了过去。',answerPy:'Nà liàng chē xiàng zǐdàn yíyàng cóng wǒ miànqián chōngle guòqu.',
      note:'像……一样 + V: so sánh cách thức; 从……面前 + V + 过去: bổ ngữ xu hướng.',pair:'像……一样'},
     {promptLang:'vi',prompt:'Viên đạn này bị cảnh sát tìm thấy ở dưới gầm xe.',answer:'这颗子弹是警察在车底下找到的。',answerPy:'Zhè kē zǐdàn shì jǐngchá zài chē dǐxia zhǎodào de.',
      note:'是……的 nhấn mạnh người làm và nơi chốn của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:18,zh:'蔑视',py:'mièshì',pos:'Động từ',vn:'miệt thị, coi thường',hv:'miệt thị',em:'😒',lesson:1,
   explain:['Coi thường, khinh bỉ, không để vào mắt — mức độ mạnh hơn 看不起.','Hay làm định ngữ: 蔑视的眼光, 蔑视的态度.'],
   usage:'蔑视 + ai / điều gì; 用蔑视的眼光看……; 受到蔑视.',
   collo:['蔑视的眼光','蔑视别人','受到蔑视','蔑视困难'],
   ex_zh:'大象用蔑视的眼光盯着它。',ex_py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā.',ex_vn:'Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt.',
   exList:[
     {zh:'大象用蔑视的眼光盯着它。',py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā.',vn:'Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt.'},
     {zh:'不要蔑视任何一个对手，哪怕他看起来很弱小。',py:'Búyào mièshì rènhé yí ge duìshǒu, nǎpà tā kàn qǐlai hěn ruòxiǎo.',vn:'Đừng coi thường bất kỳ đối thủ nào, cho dù họ trông có vẻ nhỏ yếu.'},
     {zh:'他成绩不好，却从来没有受到过老师的蔑视。',py:'Tā chéngjì bù hǎo, què cónglái méiyǒu shòudàoguo lǎoshī de mièshì.',vn:'Cậu ấy học không giỏi nhưng chưa bao giờ bị thầy cô coi thường.'}
   ],
   colloFull:[
     {zh:'蔑视的眼光',py:'mièshì de yǎnguāng',vn:'ánh mắt khinh miệt'},
     {zh:'蔑视别人',py:'mièshì biérén',vn:'coi thường người khác'},
     {zh:'受到蔑视',py:'shòudào mièshì',vn:'bị khinh miệt'},
     {zh:'蔑视困难',py:'mièshì kùnnan',vn:'coi thường khó khăn'},
     {zh:'蔑视的态度',py:'mièshì de tàidu',vn:'thái độ khinh thường'}
   ],
   patterns:[
     {s:'用蔑视的眼光 + 看 / 盯着 + ai',m:'Nhìn ai bằng ánh mắt khinh miệt'},
     {s:'不要蔑视 + ai',m:'Đừng coi thường ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù đối thủ yếu hơn mình, chúng ta cũng không được coi thường họ.',answer:'哪怕对手比我们弱，我们也不能蔑视他们。',answerPy:'Nǎpà duìshǒu bǐ wǒmen ruò, wǒmen yě bù néng mièshì tāmen.',
      note:'哪怕……也…… = cho dù… cũng…; A 比 B + tính từ.',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Ánh mắt khinh miệt của anh ta khiến tôi rất khó chịu.',answer:'他那蔑视的眼光让我很不舒服。',answerPy:'Tā nà mièshì de yǎnguāng ràng wǒ hěn bù shūfu.',
      note:'让 + ai + cảm giác (câu kiêm ngữ gây khiến).',pair:'让 (gây khiến)'}
   ]},

  {n:19,zh:'眼光',py:'yǎnguāng',pos:'Danh từ',vn:'ánh mắt; tầm nhìn, con mắt',hv:'nhãn quang',em:'👀',lesson:1,
   explain:['Ánh mắt, cái nhìn: 蔑视的眼光, 羡慕的眼光.','Nghĩa mở rộng: con mắt nhận xét, tầm nhìn — 有眼光 (tinh mắt, có tầm nhìn), 眼光长远.'],
   usage:'用……的眼光看 / 盯着; (很) 有眼光; 眼光长远 / 独特.',
   collo:['蔑视的眼光','有眼光','眼光长远','羡慕的眼光'],
   ex_zh:'大象用蔑视的眼光盯着它，愤怒地说……',ex_py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā, fènnù de shuō……',ex_vn:'Voi nhìn chằm chằm nó bằng ánh mắt khinh miệt, giận dữ nói…',
   exList:[
     {zh:'大象用蔑视的眼光盯着它，愤怒地说……',py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā, fènnù de shuō……',vn:'Voi nhìn chằm chằm nó bằng ánh mắt khinh miệt, giận dữ nói…'},
     {zh:'你买的这件衣服真漂亮，你真有眼光！',py:'Nǐ mǎi de zhè jiàn yīfu zhēn piàoliang, nǐ zhēn yǒu yǎnguāng!',vn:'Cái áo bạn mua đẹp thật, bạn đúng là tinh mắt!'},
     {zh:'做生意要把眼光放长远一些，不能只看眼前的利益。',py:'Zuò shēngyi yào bǎ yǎnguāng fàng chángyuǎn yìxiē, bù néng zhǐ kàn yǎnqián de lìyì.',vn:'Làm ăn phải nhìn xa trông rộng, không được chỉ thấy cái lợi trước mắt.'}
   ],
   colloFull:[
     {zh:'蔑视的眼光',py:'mièshì de yǎnguāng',vn:'ánh mắt khinh miệt'},
     {zh:'有眼光',py:'yǒu yǎnguāng',vn:'tinh mắt, có tầm nhìn'},
     {zh:'眼光长远',py:'yǎnguāng chángyuǎn',vn:'tầm nhìn xa'},
     {zh:'羡慕的眼光',py:'xiànmù de yǎnguāng',vn:'ánh mắt ngưỡng mộ'},
     {zh:'别人的眼光',py:'biérén de yǎnguāng',vn:'cái nhìn của người khác'}
   ],
   patterns:[
     {s:'用 + ……的眼光 + 看 + ai / điều gì',m:'Nhìn ai bằng ánh mắt / quan điểm…'},
     {s:'(很 / 真) 有眼光',m:'Tinh mắt, có con mắt nhận xét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc mình thích thì không cần quá để ý đến cái nhìn của người khác.',answer:'做自己喜欢的事，不必太在乎别人的眼光。',answerPy:'Zuò zìjǐ xǐhuan de shì, búbì tài zàihu biérén de yǎnguāng.',
      note:'不必 = không cần (phủ định của 必须); 在乎 + tân ngữ = để ý, bận tâm.',pair:'不必'},
     {promptLang:'vi',prompt:'Mọi người đều nhìn cậu ấy bằng ánh mắt ngưỡng mộ.',answer:'大家都用羡慕的眼光看着他。',answerPy:'Dàjiā dōu yòng xiànmù de yǎnguāng kànzhe tā.',
      note:'用 + phương tiện + V; V + 着 diễn tả trạng thái đang kéo dài.',pair:'V + 着'}
   ]},

  {n:20,zh:'盯',py:'dīng',pos:'Động từ',vn:'nhìn chằm chằm',hv:'đinh',em:'👁️',lesson:1,
   explain:['Nhìn chăm chú, không rời mắt vào một chỗ.','Mở rộng: theo dõi sát, giám sát (盯着孩子写作业). Thường có 着 hoặc bổ ngữ: 盯着, 盯住, 盯了半天.'],
   usage:'盯着 + ai / cái gì; 盯住; 紧紧地盯着; 盯着……看.',
   collo:['盯着它','盯着屏幕','紧紧盯住','盯着看'],
   ex_zh:'大象用蔑视的眼光盯着它。',ex_py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā.',ex_vn:'Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt.',
   exList:[
     {zh:'大象用蔑视的眼光盯着它。',py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā.',vn:'Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt.'},
     {zh:'他一整天都盯着电脑屏幕，眼睛都红了。',py:'Tā yì zhěng tiān dōu dīngzhe diànnǎo píngmù, yǎnjing dōu hóng le.',vn:'Cả ngày anh ấy dán mắt vào màn hình máy tính, mắt đỏ hết cả lên.'},
     {zh:'妈妈每天盯着我写作业，我一点儿偷懒的机会都没有。',py:'Māma měi tiān dīngzhe wǒ xiě zuòyè, wǒ yìdiǎnr tōulǎn de jīhuì dōu méiyǒu.',vn:'Ngày nào mẹ cũng kè kè canh tôi làm bài, tôi chẳng có chút cơ hội nào để lười.'}
   ],
   colloFull:[
     {zh:'盯着它',py:'dīngzhe tā',vn:'nhìn chằm chằm vào nó'},
     {zh:'盯着屏幕',py:'dīngzhe píngmù',vn:'dán mắt vào màn hình'},
     {zh:'紧紧盯住',py:'jǐnjǐn dīngzhù',vn:'bám sát không rời'},
     {zh:'盯着看',py:'dīngzhe kàn',vn:'nhìn chăm chăm'},
     {zh:'盯着孩子',py:'dīngzhe háizi',vn:'canh chừng con'}
   ],
   patterns:[
     {s:'盯着 + ai / cái gì (+ 看)',m:'Nhìn chằm chằm vào…'},
     {s:'盯着 + ai + V',m:'Theo dõi, giám sát ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người đàn ông kia cứ nhìn chằm chằm vào tôi, làm tôi sợ chết khiếp.',answer:'那个男人一直盯着我看，把我吓坏了。',answerPy:'Nà ge nánrén yìzhí dīngzhe wǒ kàn, bǎ wǒ xiàhuài le.',
      note:'盯着 + ai + 看; 把 + ai + 吓坏了 (bổ ngữ kết quả chỉ mức độ).',pair:'把……V坏了'},
     {promptLang:'vi',prompt:'Đừng cứ dán mắt vào điện thoại mãi, thỉnh thoảng cũng nên để mắt nghỉ ngơi.',answer:'别老盯着手机，偶尔也要让眼睛休息休息。',answerPy:'Bié lǎo dīngzhe shǒujī, ǒu\'ěr yě yào ràng yǎnjing xiūxi xiūxi.',
      note:'别老 + V = đừng cứ mãi…; động từ lặp 休息休息 làm nhẹ giọng.',pair:'lặp động từ ABAB'}
   ]},

  {n:21,zh:'愤怒',py:'fènnù',pos:'Tính từ',vn:'phẫn nộ, tức giận',hv:'phẫn nộ',em:'😡',lesson:1,
   explain:['Tức giận đến cực điểm — mạnh và trang trọng hơn 生气.','Làm trạng ngữ (愤怒地说), vị ngữ (他很愤怒), định ngữ (愤怒的人群); cũng làm danh từ: 心中的愤怒.'],
   usage:'愤怒地 + V; 感到愤怒; 非常愤怒; 引起……的愤怒.',
   collo:['愤怒地说','感到愤怒','非常愤怒','愤怒的表情'],
   ex_zh:'大象愤怒地说：“你这个愚蠢的家伙，太可恶了！”',ex_py:'Dàxiàng fènnù de shuō: "Nǐ zhège yúchǔn de jiāhuo, tài kěwù le!"',ex_vn:'Voi giận dữ nói: "Cái đồ ngu ngốc nhà ngươi, thật đáng ghét!"',
   exList:[
     {zh:'大象愤怒地说：“你这个愚蠢的家伙，太可恶了！”',py:'Dàxiàng fènnù de shuō: "Nǐ zhège yúchǔn de jiāhuo, tài kěwù le!"',vn:'Voi giận dữ nói: "Cái đồ ngu ngốc nhà ngươi, thật đáng ghét!"'},
     {zh:'猫虽然很愤怒，却也没有办法。',py:'Māo suīrán hěn fènnù, què yě méiyǒu bànfǎ.',vn:'Mèo tuy vô cùng tức giận nhưng cũng đành bó tay.'},
     {zh:'听说有人虐待小动物，网友们都感到十分愤怒。',py:'Tīngshuō yǒu rén nüèdài xiǎo dòngwù, wǎngyǒumen dōu gǎndào shífēn fènnù.',vn:'Nghe tin có người ngược đãi động vật nhỏ, cư dân mạng đều vô cùng phẫn nộ.'}
   ],
   colloFull:[
     {zh:'愤怒地说',py:'fènnù de shuō',vn:'giận dữ nói'},
     {zh:'感到愤怒',py:'gǎndào fènnù',vn:'cảm thấy phẫn nộ'},
     {zh:'非常愤怒',py:'fēicháng fènnù',vn:'vô cùng tức giận'},
     {zh:'愤怒的表情',py:'fènnù de biǎoqíng',vn:'vẻ mặt giận dữ'},
     {zh:'引起愤怒',py:'yǐnqǐ fènnù',vn:'gây phẫn nộ'}
   ],
   patterns:[
     {s:'愤怒地 + V',m:'Giận dữ làm gì'},
     {s:'对…… + 感到愤怒',m:'Phẫn nộ trước việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy trong lòng rất giận nhưng anh ấy vẫn bình tĩnh giải thích với khách hàng.',answer:'虽然心里很愤怒，但他还是冷静地向客户解释。',answerPy:'Suīrán xīnli hěn fènnù, dàn tā háishi lěngjìng de xiàng kèhù jiěshì.',
      note:'虽然……但……还是……; 向 + ai + 解释.',pair:'虽然……但是……还是'},
     {promptLang:'vi',prompt:'Hành vi này đã gây nên sự phẫn nộ của rất nhiều người.',answer:'这种行为引起了很多人的愤怒。',answerPy:'Zhè zhǒng xíngwéi yǐnqǐle hěn duō rén de fènnù.',
      note:'引起 + (ai 的) + 注意 / 愤怒 / 兴趣: gây nên, khơi dậy.',pair:'引起'}
   ]},

  {n:22,zh:'愚蠢',py:'yúchǔn',pos:'Tính từ',vn:'ngu đần, ngu xuẩn',hv:'ngu xuẩn',em:'🤪',lesson:1,
   explain:['Ngu, kém thông minh — nặng hơn 笨, hay dùng để mắng hoặc tự trách (愚蠢的决定).','Trái nghĩa: 聪明, 智慧.'],
   usage:'愚蠢的 + N (家伙 / 想法 / 错误); 太愚蠢了; 愚蠢地 + V.',
   collo:['愚蠢的家伙','愚蠢的想法','愚蠢的错误','太愚蠢了'],
   ex_zh:'你这个愚蠢的家伙，太可恶了！',ex_py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le!',ex_vn:'Cái đồ ngu ngốc nhà ngươi, thật đáng ghét!',
   exList:[
     {zh:'你这个愚蠢的家伙，太可恶了！',py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le!',vn:'Cái đồ ngu ngốc nhà ngươi, thật đáng ghét!'},
     {zh:'小老鼠用自己的智慧战胜了愚蠢的猫。',py:'Xiǎo lǎoshǔ yòng zìjǐ de zhìhuì zhànshèngle yúchǔn de māo.',vn:'Chú chuột nhỏ dùng trí thông minh của mình đánh bại con mèo ngu ngốc.'},
     {zh:'我竟然把钥匙锁在了车里，真是太愚蠢了。',py:'Wǒ jìngrán bǎ yàoshi suǒ zài le chē li, zhēn shì tài yúchǔn le.',vn:'Tôi lại khóa chìa khóa trong xe, đúng là ngốc hết chỗ nói.'}
   ],
   colloFull:[
     {zh:'愚蠢的家伙',py:'yúchǔn de jiāhuo',vn:'đồ ngu ngốc'},
     {zh:'愚蠢的想法',py:'yúchǔn de xiǎngfǎ',vn:'ý nghĩ ngu xuẩn'},
     {zh:'愚蠢的错误',py:'yúchǔn de cuòwù',vn:'lỗi ngớ ngẩn'},
     {zh:'太愚蠢了',py:'tài yúchǔn le',vn:'ngu quá'},
     {zh:'愚蠢的行为',py:'yúchǔn de xíngwéi',vn:'hành vi ngu xuẩn'}
   ],
   patterns:[
     {s:'愚蠢的 + N',m:'… ngu xuẩn'},
     {s:'……，真是太愚蠢了',m:'Tự trách / đánh giá: thật ngu ngốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ vì một chuyện nhỏ mà cãi nhau với bạn thân, bây giờ nghĩ lại thấy thật ngốc.',answer:'因为一件小事就跟好朋友吵架，现在想起来真是太愚蠢了。',answerPy:'Yīnwèi yí jiàn xiǎoshì jiù gēn hǎo péngyou chǎojià, xiànzài xiǎng qǐlai zhēn shì tài yúchǔn le.',
      note:'V + 起来 = khi thử làm/nhìn lại (想起来); 因为……就…… nhấn mạnh nguyên nhân nhỏ.',pair:'V + 起来'},
     {promptLang:'vi',prompt:'Đừng phạm lại cái lỗi ngớ ngẩn như vậy nữa.',answer:'别再犯这么愚蠢的错误了。',answerPy:'Bié zài fàn zhème yúchǔn de cuòwù le.',
      note:'别再……了 = đừng… nữa; 犯错误 (phạm lỗi) là cụm cố định.',pair:'别再……了'}
   ]},

  {n:23,zh:'家伙',py:'jiāhuo',pos:'Danh từ',vn:'thằng, gã, thằng cha; con vật',hv:'gia hỏa',em:'🧔',lesson:1,
   explain:['Khẩu ngữ, chỉ người với sắc thái coi thường hoặc đùa thân mật: 你这个家伙, 小家伙 (nhóc con).','Cũng chỉ con vật (这家伙真聪明) hoặc đồ vật, dụng cụ.'],
   usage:'(你) 这个 + (tính từ) + 家伙; 小家伙; 这家伙.',
   collo:['愚蠢的家伙','小家伙','这个家伙','聪明的家伙'],
   ex_zh:'你这个愚蠢的家伙，太可恶了。',ex_py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le.',ex_vn:'Cái thằng ngu ngốc nhà ngươi, thật đáng ghét.',
   exList:[
     {zh:'你这个愚蠢的家伙，太可恶了。',py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le.',vn:'Cái thằng ngu ngốc nhà ngươi, thật đáng ghét.'},
     {zh:'这个小家伙才三岁，就会背二十首唐诗了。',py:'Zhège xiǎo jiāhuo cái sān suì, jiù huì bèi èrshí shǒu Tángshī le.',vn:'Nhóc con này mới ba tuổi mà đã thuộc hai mươi bài thơ Đường.'},
     {zh:'那个家伙又迟到了，真拿他没办法。',py:'Nà ge jiāhuo yòu chídào le, zhēn ná tā méi bànfǎ.',vn:'Gã đó lại đến muộn rồi, đúng là hết cách với hắn.'}
   ],
   colloFull:[
     {zh:'愚蠢的家伙',py:'yúchǔn de jiāhuo',vn:'thằng ngu'},
     {zh:'小家伙',py:'xiǎo jiāhuo',vn:'nhóc con'},
     {zh:'这个家伙',py:'zhège jiāhuo',vn:'gã này, thằng này'},
     {zh:'聪明的家伙',py:'cōngming de jiāhuo',vn:'tên láu cá'},
     {zh:'可恶的家伙',py:'kěwù de jiāhuo',vn:'tên đáng ghét'}
   ],
   patterns:[
     {s:'你这个 + Adj + 的 + 家伙',m:'Mắng / trêu ai đó'},
     {s:'小家伙',m:'Gọi trìu mến trẻ nhỏ, con vật nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhóc con này thông minh lắm, dạy một lần là nhớ ngay.',answer:'这个小家伙聪明得很，教一遍就记住了。',answerPy:'Zhège xiǎo jiāhuo cōngming de hěn, jiāo yí biàn jiù jìzhù le.',
      note:'Adj + 得很 = rất (khẩu ngữ); động lượng từ 遍 (lượt từ đầu đến cuối).',pair:'Adj + 得很'},
     {promptLang:'vi',prompt:'Tên đó lại lấy mất bút của tớ rồi, tức chết đi được.',answer:'那个家伙又把我的笔拿走了，气死我了。',answerPy:'Nà ge jiāhuo yòu bǎ wǒ de bǐ názǒu le, qìsǐ wǒ le.',
      note:'又 = lại (việc đã lặp lại); 把 + tân ngữ + 拿走.',pair:'又'}
   ]},

  {n:24,zh:'可恶',py:'kěwù',pos:'Tính từ',vn:'đáng ghét, đáng giận',hv:'khả ố',em:'👿',lesson:1,
   explain:['Khiến người ta căm ghét, bực tức.','Chú ý đọc kěwù (恶 = wù), không đọc kě\'è. Hay dùng trong câu cảm thán: 太可恶了!'],
   usage:'(太 / 真) 可恶 (了); 可恶的 + N.',
   collo:['太可恶了','可恶的家伙','真可恶','可恶的小偷'],
   ex_zh:'你这个愚蠢的家伙，太可恶了。',ex_py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le.',ex_vn:'Cái đồ ngu ngốc nhà ngươi, thật đáng ghét.',
   exList:[
     {zh:'你这个愚蠢的家伙，太可恶了。',py:'Nǐ zhège yúchǔn de jiāhuo, tài kěwù le.',vn:'Cái đồ ngu ngốc nhà ngươi, thật đáng ghét.'},
     {zh:'可恶的小偷，把我刚买的自行车偷走了！',py:'Kěwù de xiǎotōu, bǎ wǒ gāng mǎi de zìxíngchē tōuzǒu le!',vn:'Tên trộm đáng ghét, trộm mất chiếc xe đạp tôi vừa mua!'},
     {zh:'他骗了老人那么多钱，真是太可恶了。',py:'Tā piànle lǎorén nàme duō qián, zhēn shì tài kěwù le.',vn:'Hắn lừa của người già nhiều tiền đến thế, thật quá đáng ghét.'}
   ],
   colloFull:[
     {zh:'太可恶了',py:'tài kěwù le',vn:'đáng ghét quá'},
     {zh:'可恶的家伙',py:'kěwù de jiāhuo',vn:'tên đáng ghét'},
     {zh:'真可恶',py:'zhēn kěwù',vn:'thật đáng ghét'},
     {zh:'可恶的小偷',py:'kěwù de xiǎotōu',vn:'tên trộm đáng ghét'},
     {zh:'可恶至极',py:'kěwù zhì jí',vn:'đáng ghét tột cùng'}
   ],
   patterns:[
     {s:'(真是) 太可恶了',m:'Câu cảm thán bày tỏ sự căm ghét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muỗi đáng ghét quá, cắn tôi cả đêm không ngủ được.',answer:'蚊子太可恶了，咬得我一晚上都没睡着。',answerPy:'Wénzi tài kěwù le, yǎo de wǒ yì wǎnshang dōu méi shuìzháo.',
      note:'V + 得 + ai + kết quả (bổ ngữ trạng thái); 睡着 zháo = ngủ được.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Kẻ lừa đảo đó không chỉ lừa tiền mà còn lừa cả lòng tin của mọi người, thật đáng ghét.',answer:'那个骗子不但骗钱，而且骗了大家的信任，真可恶。',answerPy:'Nà ge piànzi búdàn piàn qián, érqiě piànle dàjiā de xìnrèn, zhēn kěwù.',
      note:'不但……而且…… nối hai ý tăng tiến.',pair:'不但……而且……'}
   ]},

  {n:25,zh:'耍',py:'shuǎ',pos:'Động từ',vn:'giở (trò), chơi, đùa',hv:'sái',em:'🃏',lesson:1,
   explain:['Giở, bày ra (thủ đoạn, thói xấu) — nghĩa xấu: 耍流氓, 耍花招, 耍脾气, 耍小聪明.','Khẩu ngữ còn có nghĩa "chơi, đùa, trêu": 别耍我了 (đừng trêu tôi nữa).'],
   usage:'耍 + 流氓 / 花招 / 脾气 / 小聪明 / 赖; 别耍……',
   collo:['耍流氓','耍脾气','耍花招','耍小聪明'],
   ex_zh:'下次再耍流氓，我一定踩扁了你。',ex_py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',ex_vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.',
   exList:[
     {zh:'下次再耍流氓，我一定踩扁了你。',py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.'},
     {zh:'他一不高兴就耍脾气，大家都不愿意跟他合作。',py:'Tā yí bù gāoxìng jiù shuǎ píqi, dàjiā dōu bú yuànyì gēn tā hézuò.',vn:'Anh ta hễ không vui là giở tính khí, mọi người đều không muốn hợp tác với anh ta.'},
     {zh:'考试的时候别耍小聪明，老老实实地做题吧。',py:'Kǎoshì de shíhou bié shuǎ xiǎo cōngming, lǎolǎoshíshí de zuò tí ba.',vn:'Lúc thi đừng giở trò khôn vặt, cứ thật thà mà làm bài đi.'}
   ],
   colloFull:[
     {zh:'耍流氓',py:'shuǎ liúmáng',vn:'giở trò lưu manh'},
     {zh:'耍脾气',py:'shuǎ píqi',vn:'giở tính khí, dỗi'},
     {zh:'耍花招',py:'shuǎ huāzhāo',vn:'giở mánh khóe'},
     {zh:'耍小聪明',py:'shuǎ xiǎo cōngming',vn:'giở trò khôn vặt'},
     {zh:'耍赖',py:'shuǎlài',vn:'chơi ăn gian, cãi cố'}
   ],
   patterns:[
     {s:'耍 + 流氓 / 脾气 / 花招 / 小聪明',m:'Giở (trò xấu, thói xấu)'},
     {s:'别 + 耍 + ……',m:'Khuyên / cảnh cáo đừng giở trò'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con bé cứ hễ không được mua đồ chơi là lại giở tính dỗi.',answer:'这孩子一不给她买玩具，就耍脾气。',answerPy:'Zhè háizi yí bù gěi tā mǎi wánjù, jiù shuǎ píqi.',
      note:'一……就…… = hễ… là…, diễn tả phản ứng lặp lại.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Anh đừng giở mánh khóe nữa, chúng tôi đã biết hết sự thật rồi.',answer:'你别再耍花招了，我们已经知道真相了。',answerPy:'Nǐ bié zài shuǎ huāzhāo le, wǒmen yǐjīng zhīdào zhēnxiàng le.',
      note:'别再……了 = đừng… nữa; 已经……了.',pair:'别再……了'}
   ]},

  {n:26,zh:'流氓',py:'liúmáng',pos:'Danh từ',vn:'lưu manh; hành vi lưu manh',hv:'lưu manh',em:'😈',lesson:1,
   explain:['Kẻ lưu manh, côn đồ; cũng chỉ hành vi vô lại, quấy rối.','耍流氓 = giở trò lưu manh, cư xử vô lại. Chú ý đọc liúmáng (氓 thanh 2).'],
   usage:'(一个 / 一群) 流氓; 耍流氓; 流氓行为.',
   collo:['耍流氓','一群流氓','流氓行为','小流氓'],
   ex_zh:'下次再耍流氓，我一定踩扁了你。',ex_py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',ex_vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.',
   exList:[
     {zh:'下次再耍流氓，我一定踩扁了你。',py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.'},
     {zh:'几个小流氓在路口欺负学生，被警察带走了。',py:'Jǐ ge xiǎo liúmáng zài lùkǒu qīfu xuésheng, bèi jǐngchá dàizǒu le.',vn:'Mấy tên lưu manh vặt bắt nạt học sinh ở ngã tư, đã bị cảnh sát đưa đi.'},
     {zh:'在网上随便骂人，也是一种流氓行为。',py:'Zài wǎng shang suíbiàn mà rén, yě shì yì zhǒng liúmáng xíngwéi.',vn:'Tùy tiện chửi người khác trên mạng cũng là một kiểu hành vi côn đồ.'}
   ],
   colloFull:[
     {zh:'耍流氓',py:'shuǎ liúmáng',vn:'giở trò lưu manh'},
     {zh:'一群流氓',py:'yì qún liúmáng',vn:'một đám côn đồ'},
     {zh:'流氓行为',py:'liúmáng xíngwéi',vn:'hành vi lưu manh'},
     {zh:'小流氓',py:'xiǎo liúmáng',vn:'lưu manh vặt'},
     {zh:'网络流氓',py:'wǎngluò liúmáng',vn:'kẻ côn đồ trên mạng'}
   ],
   patterns:[
     {s:'耍流氓',m:'Giở trò lưu manh, cư xử vô lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu gặp lưu manh thì phải lập tức báo cảnh sát.',answer:'如果遇到流氓，要马上报警。',answerPy:'Rúguǒ yùdào liúmáng, yào mǎshàng bàojǐng.',
      note:'如果……，(就)要……; 报警 = báo cảnh sát.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Hành vi lưu manh đó đã bị người qua đường quay video lại.',answer:'那种流氓行为被路人拍了下来。',answerPy:'Nà zhǒng liúmáng xíngwéi bèi lùrén pāile xiàlái.',
      note:'被 + người làm + V + 下来 (bổ ngữ xu hướng: ghi lại, giữ lại).',pair:'被 + V + 下来'}
   ]},

  {n:27,zh:'扁',py:'biǎn',pos:'Tính từ',vn:'dẹp, bẹp',hv:'biển',em:'🥞',lesson:1,
   explain:['Dẹt, bẹp (vật thể mỏng, rộng, không phồng).','Hay làm bổ ngữ kết quả: 踩扁, 压扁, 打扁. Khẩu ngữ: 别把人看扁了 = đừng xem thường người khác.'],
   usage:'V + 扁 (踩扁 / 压扁); 扁扁的; 把……看扁了.',
   collo:['踩扁','压扁','扁扁的','看扁'],
   ex_zh:'下次再耍流氓，我一定踩扁了你。',ex_py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',ex_vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.',
   exList:[
     {zh:'下次再耍流氓，我一定踩扁了你。',py:'Xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ.',vn:'Lần sau còn giở trò lưu manh thì ta nhất định giẫm bẹp ngươi.'},
     {zh:'书包里的面包被压扁了。',py:'Shūbāo li de miànbāo bèi yābiǎn le.',vn:'Cái bánh mì trong cặp bị đè bẹp rồi.'},
     {zh:'别把人看扁了，我一定能考上好大学。',py:'Bié bǎ rén kànbiǎn le, wǒ yídìng néng kǎoshàng hǎo dàxué.',vn:'Đừng coi thường người ta, tôi nhất định sẽ đỗ đại học tốt.'}
   ],
   colloFull:[
     {zh:'踩扁',py:'cǎibiǎn',vn:'giẫm bẹp'},
     {zh:'压扁',py:'yābiǎn',vn:'đè bẹp'},
     {zh:'扁扁的',py:'biǎnbiǎn de',vn:'dẹt dẹt'},
     {zh:'看扁',py:'kànbiǎn',vn:'coi thường, xem nhẹ'},
     {zh:'扁平',py:'biǎnpíng',vn:'dẹt, phẳng'}
   ],
   patterns:[
     {s:'V + 扁 (踩扁 / 压扁 / 打扁)',m:'Làm cho bẹp (bổ ngữ kết quả)'},
     {s:'别把 + ai + 看扁了',m:'Đừng xem thường ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hộp bánh trung thu bị em trai ngồi đè lên, bẹp dí cả rồi.',answer:'月饼盒被弟弟坐扁了。',answerPy:'Yuèbing hé bèi dìdi zuòbiǎn le.',
      note:'Câu 被 với bổ ngữ kết quả: 被 + ai + V + 扁 + 了.',pair:'被 + V + bổ ngữ kết quả'},
     {promptLang:'vi',prompt:'Đừng coi thường cậu ấy, cậu ấy giỏi hơn cậu nghĩ nhiều.',answer:'你别把他看扁了，他比你想的厉害多了。',answerPy:'Nǐ bié bǎ tā kànbiǎn le, tā bǐ nǐ xiǎng de lìhai duō le.',
      note:'A 比 B + Adj + 多了 = hơn nhiều.',pair:'比……Adj + 多了'}
   ]},

  {n:28,zh:'夕阳',py:'xīyáng',pos:'Danh từ',vn:'mặt trời chiều, hoàng hôn',hv:'tịch dương',em:'🌇',lesson:1,
   explain:['Mặt trời lúc sắp lặn; văn chương hay dùng để tả cảnh chiều tà.','Nghĩa bóng: tuổi già (夕阳红 = tuổi già vẫn tươi đẹp).'],
   usage:'夕阳西下; 夕阳将落; 在夕阳下; 夕阳红.',
   collo:['夕阳将落','夕阳西下','在夕阳下','美丽的夕阳'],
   ex_zh:'那是一个夕阳将落的傍晚。',ex_py:'Nà shì yí ge xīyáng jiāng luò de bàngwǎn.',ex_vn:'Đó là một buổi chiều khi mặt trời sắp lặn.',
   exList:[
     {zh:'那是一个夕阳将落的傍晚。',py:'Nà shì yí ge xīyáng jiāng luò de bàngwǎn.',vn:'Đó là một buổi chiều khi mặt trời sắp lặn.'},
     {zh:'我们坐在海边，静静地看着夕阳慢慢落下。',py:'Wǒmen zuò zài hǎibiān, jìngjìng de kànzhe xīyáng mànmàn luòxià.',vn:'Chúng tôi ngồi bên bờ biển, lặng lẽ ngắm mặt trời chiều từ từ lặn xuống.'},
     {zh:'在夕阳下散步的老人们，脸上都带着满足的笑容。',py:'Zài xīyáng xià sànbù de lǎorénmen, liǎn shang dōu dàizhe mǎnzú de xiàoróng.',vn:'Những cụ già tản bộ dưới ánh hoàng hôn, trên mặt ai cũng nở nụ cười mãn nguyện.'}
   ],
   colloFull:[
     {zh:'夕阳将落',py:'xīyáng jiāng luò',vn:'mặt trời sắp lặn'},
     {zh:'夕阳西下',py:'xīyáng xī xià',vn:'mặt trời lặn về tây'},
     {zh:'在夕阳下',py:'zài xīyáng xià',vn:'dưới ánh hoàng hôn'},
     {zh:'美丽的夕阳',py:'měilì de xīyáng',vn:'hoàng hôn đẹp'},
     {zh:'夕阳红',py:'xīyáng hóng',vn:'tuổi già tươi đẹp'}
   ],
   patterns:[
     {s:'一个夕阳将落的傍晚',m:'Mở đầu đoạn văn tả cảnh chiều'},
     {s:'在夕阳下 + V',m:'Làm gì dưới ánh chiều tà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi khi mặt trời lặn, ông nội lại dắt chó ra công viên đi dạo.',answer:'每当夕阳西下的时候，爷爷就带着狗去公园散步。',answerPy:'Měi dāng xīyáng xī xià de shíhou, yéye jiù dàizhe gǒu qù gōngyuán sànbù.',
      note:'每当……的时候，就…… = mỗi khi… thì…; V1 着 + V2 (带着狗去).',pair:'每当……就……'},
     {promptLang:'vi',prompt:'Hoàng hôn trên biển đẹp đến nỗi làm tôi quên cả chụp ảnh.',answer:'海上的夕阳美得让我忘了拍照。',answerPy:'Hǎi shang de xīyáng měi de ràng wǒ wàngle pāizhào.',
      note:'Adj + 得 + 让 + ai + V: đẹp đến mức khiến…',pair:'Adj + 得 + 让……'}
   ]},

  {n:29,zh:'留神',py:'liú shén',pos:'Động từ',vn:'chú ý, coi chừng',hv:'lưu thần',em:'⚠️',lesson:1,
   explain:['Để ý, cẩn thận đề phòng (khẩu ngữ, gần 小心, 注意).','Động từ li hợp; hay dùng dạng phủ định: 不留神 / 一不留神 = sơ ý một chút, lơ đễnh một chút.'],
   usage:'留神 + (V); 不留神; 一不留神 + (hậu quả); 留点儿神.',
   collo:['不留神','一不留神','留神脚下','留点儿神'],
   ex_zh:'大象不留神落入了打猎者设下的巨网中。',ex_py:'Dàxiàng bù liú shén luòrùle dǎlièzhě shèxià de jù wǎng zhōng.',ex_vn:'Voi sơ ý sa vào tấm lưới lớn mà thợ săn giăng sẵn.',
   exList:[
     {zh:'大象不留神落入了打猎者设下的巨网中。',py:'Dàxiàng bù liú shén luòrùle dǎlièzhě shèxià de jù wǎng zhōng.',vn:'Voi sơ ý sa vào tấm lưới lớn mà thợ săn giăng sẵn.'},
     {zh:'一不留神，猫还会上老鼠的当。',py:'Yí bù liú shén, māo hái huì shàng lǎoshǔ de dàng.',vn:'Lơ đễnh một chút là mèo còn bị chuột lừa nữa.'},
     {zh:'路上有冰，大家走路要留神。',py:'Lù shang yǒu bīng, dàjiā zǒulù yào liú shén.',vn:'Đường có băng, mọi người đi đứng phải coi chừng.'}
   ],
   colloFull:[
     {zh:'不留神',py:'bù liú shén',vn:'sơ ý, không để ý'},
     {zh:'一不留神',py:'yí bù liú shén',vn:'lơ đễnh một chút'},
     {zh:'留神脚下',py:'liú shén jiǎoxià',vn:'coi chừng dưới chân'},
     {zh:'留点儿神',py:'liú diǎnr shén',vn:'để ý một chút'},
     {zh:'多留神',py:'duō liú shén',vn:'chú ý nhiều hơn'}
   ],
   patterns:[
     {s:'一不留神，……',m:'Sơ ý một chút là… (hậu quả xấu)'},
     {s:'留神 + V / N',m:'Coi chừng, để ý…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sơ ý một chút là tôi đã làm đổ cốc nước lên bàn phím.',answer:'我一不留神，就把水杯打翻在键盘上了。',answerPy:'Wǒ yí bù liú shén, jiù bǎ shuǐbēi dǎfān zài jiànpán shang le.',
      note:'一不留神，就…… (một chút sơ ý là…); 把 + tân ngữ + V + 在 + nơi chốn.',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Chỗ này đông người, cậu phải coi chừng ví tiền.',answer:'这儿人多，你得留神自己的钱包。',answerPy:'Zhèr rén duō, nǐ děi liú shén zìjǐ de qiánbāo.',
      note:'得 (děi) = phải (khẩu ngữ); 留神 + tân ngữ.',pair:'得 (děi)'}
   ]},

  {n:30,zh:'打猎',py:'dǎ liè',pos:'Động từ',vn:'đi săn',hv:'đả liệp',em:'🏹',lesson:1,
   explain:['Săn bắt thú rừng (đã gặp ở HSK 5 bài 7 — truyện Lý Quảng).','Động từ li hợp; 打猎者 / 猎人 = thợ săn.'],
   usage:'去 / 上山 + 打猎; 打猎者; 打了一天猎.',
   collo:['打猎者','上山打猎','去打猎','打猎的季节'],
   ex_zh:'大象落入了打猎者设下的巨网中。',ex_py:'Dàxiàng luòrùle dǎlièzhě shèxià de jù wǎng zhōng.',ex_vn:'Voi sa vào tấm lưới lớn thợ săn giăng sẵn.',
   exList:[
     {zh:'大象落入了打猎者设下的巨网中。',py:'Dàxiàng luòrùle dǎlièzhě shèxià de jù wǎng zhōng.',vn:'Voi sa vào tấm lưới lớn thợ săn giăng sẵn.'},
     {zh:'一天傍晚，将军正带着士兵们在山中打猎。',py:'Yì tiān bàngwǎn, jiāngjūn zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè.',vn:'Một chiều nọ, vị tướng đang dẫn binh lính đi săn trong núi.'},
     {zh:'为了保护野生动物，这里已经禁止打猎了。',py:'Wèile bǎohù yěshēng dòngwù, zhèlǐ yǐjīng jìnzhǐ dǎ liè le.',vn:'Để bảo vệ động vật hoang dã, ở đây đã cấm săn bắt.'}
   ],
   colloFull:[
     {zh:'打猎者',py:'dǎlièzhě',vn:'thợ săn'},
     {zh:'上山打猎',py:'shàng shān dǎ liè',vn:'lên núi đi săn'},
     {zh:'去打猎',py:'qù dǎ liè',vn:'đi săn'},
     {zh:'打猎的季节',py:'dǎ liè de jìjié',vn:'mùa săn'},
     {zh:'禁止打猎',py:'jìnzhǐ dǎ liè',vn:'cấm săn bắt'}
   ],
   patterns:[
     {s:'(去 / 上山) + 打猎',m:'Đi săn'},
     {s:'打了 + thời lượng + 猎',m:'Li hợp: chen thời lượng vào giữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họ đi săn cả một ngày mà chẳng bắt được gì.',answer:'他们打了一天猎，什么也没打到。',answerPy:'Tāmen dǎle yì tiān liè, shénme yě méi dǎdào.',
      note:'Li hợp từ: 打 + 了 + thời lượng + 猎; 什么也没…… = chẳng… gì cả.',pair:'什么也没……'},
     {promptLang:'vi',prompt:'Ngày xưa người dân ở đây sống nhờ săn bắn.',answer:'以前这里的人是靠打猎生活的。',answerPy:'Yǐqián zhèlǐ de rén shì kào dǎ liè shēnghuó de.',
      note:'靠 + N/V + 生活 = sống nhờ vào…; 是……的 nhấn mạnh cách thức.',pair:'靠'}
   ]},

  {n:31,zh:'不顾',py:'búgù',pos:'Động từ',vn:'bất chấp, không đếm xỉa',hv:'bất cố',em:'🏃',lesson:1,
   explain:['Không đoái hoài, không màng tới (nguy hiểm, người khác, hậu quả…).','不顾一切 = bất chấp tất cả. Đọc búgù (不 biến điệu).'],
   usage:'不顾 + N (危险 / 反对 / 别人的感受); 不顾一切地 + V.',
   collo:['不顾一切','不顾危险','不顾别人','不顾家人反对'],
   ex_zh:'它不顾一切地用力挣扎，往外乱窜。',ex_py:'Tā búgù yíqiè de yònglì zhēngzhá, wǎng wài luàn cuàn.',ex_vn:'Nó bất chấp tất cả, ra sức vùng vẫy, lao loạn ra ngoài.',
   exList:[
     {zh:'它不顾一切地用力挣扎，往外乱窜。',py:'Tā búgù yíqiè de yònglì zhēngzhá, wǎng wài luàn cuàn.',vn:'Nó bất chấp tất cả, ra sức vùng vẫy, lao loạn ra ngoài.'},
     {zh:'他不顾危险，跳进河里救起了落水的孩子。',py:'Tā búgù wēixiǎn, tiàojìn hé li jiùqǐle luò shuǐ de háizi.',vn:'Anh ấy bất chấp nguy hiểm nhảy xuống sông cứu đứa trẻ bị đuối nước.'},
     {zh:'你不能只顾自己，不顾别人的感受。',py:'Nǐ bù néng zhǐ gù zìjǐ, búgù biérén de gǎnshòu.',vn:'Cậu không thể chỉ nghĩ cho mình mà không đếm xỉa đến cảm nhận của người khác.'}
   ],
   colloFull:[
     {zh:'不顾一切',py:'búgù yíqiè',vn:'bất chấp tất cả'},
     {zh:'不顾危险',py:'búgù wēixiǎn',vn:'bất chấp nguy hiểm'},
     {zh:'不顾别人',py:'búgù biérén',vn:'không nghĩ đến người khác'},
     {zh:'不顾家人反对',py:'búgù jiārén fǎnduì',vn:'bất chấp gia đình phản đối'},
     {zh:'不顾后果',py:'búgù hòuguǒ',vn:'không màng hậu quả'}
   ],
   patterns:[
     {s:'不顾一切地 + V',m:'Bất chấp tất cả mà…'},
     {s:'只顾 A，不顾 B',m:'Chỉ lo A, chẳng màng B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất chấp bố mẹ phản đối, cô ấy vẫn chọn ngành mỹ thuật.',answer:'她不顾父母的反对，还是选择了美术专业。',answerPy:'Tā búgù fùmǔ de fǎnduì, háishi xuǎnzéle měishù zhuānyè.',
      note:'不顾 + (ai 的) + 反对; 还是 = vẫn (giữ lựa chọn).',pair:'还是 (vẫn)'},
     {promptLang:'vi',prompt:'Vì muốn thắng trận, cậu ta bất chấp cả sức khỏe của mình.',answer:'为了赢得比赛，他连自己的身体都不顾了。',answerPy:'Wèile yíngdé bǐsài, tā lián zìjǐ de shēntǐ dōu búgù le.',
      note:'连……都不顾 = đến… cũng mặc kệ (nhấn mạnh).',pair:'连……都……'}
   ]},

  {n:32,zh:'挣扎',py:'zhēngzhá',pos:'Động từ',vn:'vùng vẫy, giãy giụa',hv:'tranh trát',em:'🕸️',lesson:1,
   explain:['Dùng hết sức vùng vẫy để thoát ra (khỏi tay ai, lưới, nước…).','Nghĩa bóng: cố gắng chống chọi trong hoàn cảnh khó khăn (在生活中挣扎). Đọc zhēngzhá (挣 thanh 1 ở từ này).'],
   usage:'用力 / 拼命 + 挣扎; 挣扎着 + V; 在……中挣扎.',
   collo:['用力挣扎','拼命挣扎','挣扎着站起来','在困难中挣扎'],
   ex_zh:'它不顾一切地用力挣扎，想摆脱巨网。',ex_py:'Tā búgù yíqiè de yònglì zhēngzhá, xiǎng bǎituō jù wǎng.',ex_vn:'Nó bất chấp tất cả ra sức vùng vẫy, muốn thoát khỏi tấm lưới lớn.',
   exList:[
     {zh:'它不顾一切地用力挣扎，想摆脱巨网。',py:'Tā búgù yíqiè de yònglì zhēngzhá, xiǎng bǎituō jù wǎng.',vn:'Nó bất chấp tất cả ra sức vùng vẫy, muốn thoát khỏi tấm lưới lớn.'},
     {zh:'小鸟在网里拼命挣扎，可怎么也飞不出去。',py:'Xiǎoniǎo zài wǎng li pīnmìng zhēngzhá, kě zěnme yě fēi bu chūqu.',vn:'Chú chim nhỏ giãy giụa trong lưới, nhưng thế nào cũng không bay ra được.'},
     {zh:'他摔倒以后，挣扎着站了起来，继续往前跑。',py:'Tā shuāidǎo yǐhòu, zhēngzházhe zhànle qǐlai, jìxù wǎng qián pǎo.',vn:'Ngã xong, cậu ấy gượng đứng dậy, tiếp tục chạy về phía trước.'}
   ],
   colloFull:[
     {zh:'用力挣扎',py:'yònglì zhēngzhá',vn:'ra sức vùng vẫy'},
     {zh:'拼命挣扎',py:'pīnmìng zhēngzhá',vn:'giãy giụa hết sức'},
     {zh:'挣扎着站起来',py:'zhēngzházhe zhàn qǐlai',vn:'gượng đứng dậy'},
     {zh:'在困难中挣扎',py:'zài kùnnan zhōng zhēngzhá',vn:'chống chọi trong khó khăn'},
     {zh:'垂死挣扎',py:'chuísǐ zhēngzhá',vn:'giãy chết'}
   ],
   patterns:[
     {s:'用力 / 拼命 + 挣扎',m:'Vùng vẫy hết sức'},
     {s:'挣扎着 + V',m:'Gắng gượng làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đã rất mệt nhưng anh ấy vẫn gắng gượng chạy đến đích.',answer:'尽管已经很累了，他还是挣扎着跑到了终点。',answerPy:'Jǐnguǎn yǐjīng hěn lèi le, tā háishi zhēngzházhe pǎodàole zhōngdiǎn.',
      note:'尽管……还是…… = dù… vẫn…; V1 着 + V2: cách thức của hành động.',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Con cá bị bắt lên bờ, giãy giụa mãi không thôi.',answer:'鱼被抓上岸以后，一直不停地挣扎。',answerPy:'Yú bèi zhuā shàng àn yǐhòu, yìzhí bù tíng de zhēngzhá.',
      note:'被 + V + 上岸; 不停地 + V = không ngừng.',pair:'被'}
   ]},

  {n:33,zh:'窜',py:'cuàn',pos:'Động từ',vn:'chạy tán loạn, tháo chạy',hv:'thoán',em:'🐀',lesson:1,
   explain:['Chạy loạn, lao vụt đi (thường nói về động vật, kẻ gian — sắc thái xấu).','Hay đi với 乱, 逃: 乱窜, 逃窜, 东窜西跑.'],
   usage:'(往……) 乱窜; 逃窜; 窜出来 / 窜进去.',
   collo:['往外乱窜','到处乱窜','窜出来','逃窜'],
   ex_zh:'它不顾一切地用力挣扎，往外乱窜。',ex_py:'Tā búgù yíqiè de yònglì zhēngzhá, wǎng wài luàn cuàn.',ex_vn:'Nó bất chấp tất cả ra sức vùng vẫy, lao loạn ra ngoài.',
   exList:[
     {zh:'它不顾一切地用力挣扎，往外乱窜。',py:'Tā búgù yíqiè de yònglì zhēngzhá, wǎng wài luàn cuàn.',vn:'Nó bất chấp tất cả ra sức vùng vẫy, lao loạn ra ngoài.'},
     {zh:'一只老鼠突然从厨房里窜了出来。',py:'Yì zhī lǎoshǔ tūrán cóng chúfáng li cuànle chūlái.',vn:'Một con chuột bất thình lình lao vụt ra từ trong bếp.'},
     {zh:'小狗在院子里到处乱窜，把花都踩坏了。',py:'Xiǎogǒu zài yuànzi li dàochù luàn cuàn, bǎ huā dōu cǎihuài le.',vn:'Con chó con chạy lung tung khắp sân, giẫm nát hết hoa.'}
   ],
   colloFull:[
     {zh:'往外乱窜',py:'wǎng wài luàn cuàn',vn:'lao loạn ra ngoài'},
     {zh:'到处乱窜',py:'dàochù luàn cuàn',vn:'chạy lung tung khắp nơi'},
     {zh:'窜出来',py:'cuàn chūlái',vn:'lao vụt ra'},
     {zh:'逃窜',py:'táocuàn',vn:'chạy trốn tán loạn'},
     {zh:'东窜西跑',py:'dōng cuàn xī pǎo',vn:'chạy tán loạn khắp nơi'}
   ],
   patterns:[
     {s:'往 + hướng + 乱窜',m:'Lao loạn về phía…'},
     {s:'从…… + 窜 + 出来 / 进去',m:'Lao vụt ra / vào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tên trộm vừa thấy cảnh sát liền chạy biến vào con ngõ nhỏ.',answer:'小偷一看见警察，就窜进了小胡同。',answerPy:'Xiǎotōu yí kànjiàn jǐngchá, jiù cuànjìnle xiǎo hútòng.',
      note:'一……就……; 窜 + 进 (bổ ngữ xu hướng) + nơi chốn.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đừng để con mèo chạy lung tung trong nhà.',answer:'别让猫在屋里乱窜。',answerPy:'Bié ràng māo zài wū li luàn cuàn.',
      note:'别让 + ai/con gì + V: đừng để…',pair:'让 (cho phép)'}
   ]},

  {n:34,zh:'摆脱',py:'bǎituō',pos:'Động từ',vn:'thoát khỏi, thoát ra',hv:'bãi thoát',em:'🔓',lesson:1,
   explain:['Thoát khỏi thứ đang trói buộc, bám theo, gây khó khăn: 摆脱困境, 摆脱贫困, 摆脱追赶.','So với 脱离 (bài 2): 摆脱 nhấn mạnh CHỦ ĐỘNG vùng ra khỏi điều bất lợi; 脱离 là rời khỏi, tách khỏi một môi trường, quan hệ (脱离危险, 脱离家庭).'],
   usage:'摆脱 + 困境 / 贫困 / 追赶 / 束缚 / 巨网; 摆脱不了; 无法摆脱.',
   collo:['摆脱巨网','摆脱困境','摆脱贫困','摆脱追赶'],
   ex_zh:'它往外乱窜，想摆脱巨网。',ex_py:'Tā wǎng wài luàn cuàn, xiǎng bǎituō jù wǎng.',ex_vn:'Nó lao loạn ra ngoài, muốn thoát khỏi tấm lưới lớn.',
   exList:[
     {zh:'它往外乱窜，想摆脱巨网。',py:'Tā wǎng wài luàn cuàn, xiǎng bǎituō jù wǎng.',vn:'Nó lao loạn ra ngoài, muốn thoát khỏi tấm lưới lớn.'},
     {zh:'每次小老鼠都能摆脱猫的追赶。',py:'Měi cì xiǎo lǎoshǔ dōu néng bǎituō māo de zhuīgǎn.',vn:'Lần nào chú chuột nhỏ cũng thoát khỏi sự truy đuổi của mèo.'},
     {zh:'经过全家人的努力，他们终于摆脱了贫困。',py:'Jīngguò quán jiā rén de nǔlì, tāmen zhōngyú bǎituōle pínkùn.',vn:'Nhờ sự cố gắng của cả nhà, họ cuối cùng đã thoát nghèo.'}
   ],
   colloFull:[
     {zh:'摆脱巨网',py:'bǎituō jù wǎng',vn:'thoát khỏi tấm lưới lớn'},
     {zh:'摆脱困境',py:'bǎituō kùnjìng',vn:'thoát khỏi cảnh khó khăn'},
     {zh:'摆脱贫困',py:'bǎituō pínkùn',vn:'thoát nghèo'},
     {zh:'摆脱追赶',py:'bǎituō zhuīgǎn',vn:'thoát khỏi truy đuổi'},
     {zh:'无法摆脱',py:'wúfǎ bǎituō',vn:'không sao thoát được'}
   ],
   patterns:[
     {s:'摆脱 + 困境 / 贫困 / 追赶',m:'Thoát khỏi điều bất lợi'},
     {s:'摆脱不了 / 无法摆脱 + ……',m:'Không thoát ra được…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có thay đổi thói quen xấu thì em mới có thể thoát khỏi áp lực học tập.',answer:'只有改掉坏习惯，你才能摆脱学习的压力。',answerPy:'Zhǐyǒu gǎidiào huài xíguàn, nǐ cái néng bǎituō xuéxí de yālì.',
      note:'只有……才…… = chỉ có… mới…; 改掉 = sửa bỏ.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Anh ấy dùng hết sức cũng không thoát được bàn tay của người kia.',answer:'他用尽了力气，也没能摆脱那个人的手。',answerPy:'Tā yòngjìnle lìqi, yě méi néng bǎituō nà ge rén de shǒu.',
      note:'没能 + V = đã không thể (việc đã qua); 也 nối kết quả trái mong đợi.',pair:'没能'}
   ]},

  {n:35,zh:'死亡',py:'sǐwáng',pos:'Động từ',vn:'chết, tử vong; cái chết',hv:'tử vong',em:'💀',lesson:1,
   explain:['Chết, mất mạng — từ trang trọng, dùng trong văn viết, tin tức, y học. Cũng làm danh từ: 面对死亡.','Khẩu ngữ nói 死; trang trọng, kính trọng nói 去世, 逝世.'],
   usage:'死亡人数 / 死亡率; 面对死亡; 造成……死亡; 死亡越来越近.',
   collo:['死亡越来越近','面对死亡','死亡人数','造成死亡'],
   ex_zh:'大象又悲伤又害怕，它觉得死亡越来越近了。',ex_py:'Dàxiàng yòu bēishāng yòu hàipà, tā juéde sǐwáng yuè lái yuè jìn le.',ex_vn:'Voi vừa đau buồn vừa sợ hãi, nó cảm thấy cái chết mỗi lúc một gần.',
   exList:[
     {zh:'大象又悲伤又害怕，它觉得死亡越来越近了。',py:'Dàxiàng yòu bēishāng yòu hàipà, tā juéde sǐwáng yuè lái yuè jìn le.',vn:'Voi vừa đau buồn vừa sợ hãi, nó cảm thấy cái chết mỗi lúc một gần.'},
     {zh:'这次交通事故没有造成人员死亡。',py:'Zhè cì jiāotōng shìgù méiyǒu zàochéng rényuán sǐwáng.',vn:'Vụ tai nạn giao thông lần này không gây thiệt hại về người.'},
     {zh:'面对死亡，他一点儿也不害怕。',py:'Miànduì sǐwáng, tā yìdiǎnr yě bú hàipà.',vn:'Đối mặt với cái chết, ông ấy không hề sợ hãi.'}
   ],
   colloFull:[
     {zh:'死亡越来越近',py:'sǐwáng yuè lái yuè jìn',vn:'cái chết ngày càng gần'},
     {zh:'面对死亡',py:'miànduì sǐwáng',vn:'đối mặt cái chết'},
     {zh:'死亡人数',py:'sǐwáng rénshù',vn:'số người tử vong'},
     {zh:'造成死亡',py:'zàochéng sǐwáng',vn:'gây tử vong'},
     {zh:'死亡率',py:'sǐwánglǜ',vn:'tỉ lệ tử vong'}
   ],
   patterns:[
     {s:'造成 + (人员) + 死亡',m:'Gây ra tử vong (văn tin tức)'},
     {s:'面对死亡',m:'Đối mặt với cái chết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ được cứu chữa kịp thời nên tỉ lệ tử vong đã giảm rõ rệt.',answer:'由于得到了及时的救治，死亡率明显下降了。',answerPy:'Yóuyú dédàole jíshí de jiùzhì, sǐwánglǜ míngxiǎn xiàjiàng le.',
      note:'由于 = vì (trang trọng); 明显 + V: một cách rõ rệt.',pair:'由于'},
     {promptLang:'vi',prompt:'Hút thuốc không những hại sức khỏe mà thậm chí còn có thể dẫn đến tử vong.',answer:'吸烟不仅伤害身体，甚至可能导致死亡。',answerPy:'Xīyān bùjǐn shānghài shēntǐ, shènzhì kěnéng dǎozhì sǐwáng.',
      note:'不仅……甚至…… = không chỉ… thậm chí còn…; 导致 + hậu quả xấu.',pair:'不仅……甚至……'}
   ]},

  {n:36,zh:'恰巧',py:'qiàqiǎo',pos:'Phó từ',vn:'đúng lúc, vừa khéo, tình cờ',hv:'kháp xảo',em:'🍀',lesson:1,
   explain:['Phó từ: vừa khéo, tình cờ trùng hợp (về thời gian, điều kiện) — nhấn mạnh sự NGẪU NHIÊN.','Chỉ là phó từ, không đứng một mình, không làm vị ngữ (khác 正好 — xem phần 词语辨析).'],
   usage:'恰巧 + V / mệnh đề; 恰巧, …… (đầu câu). Không nói *时间恰巧.',
   collo:['恰巧看到','恰巧碰上','恰巧出差','恰巧路过'],
   ex_zh:'恰巧，老鼠看到了这一切。',ex_py:'Qiàqiǎo, lǎoshǔ kàndàole zhè yíqiè.',ex_vn:'Đúng lúc đó, chuột nhìn thấy tất cả.',
   exList:[
     {zh:'恰巧，老鼠看到了这一切。',py:'Qiàqiǎo, lǎoshǔ kàndàole zhè yíqiè.',vn:'Đúng lúc đó, chuột nhìn thấy tất cả.'},
     {zh:'我赶到上海找他时，他却恰巧出差了。',py:'Wǒ gǎndào Shànghǎi zhǎo tā shí, tā què qiàqiǎo chūchāi le.',vn:'Khi tôi vội đến Thượng Hải tìm anh ấy thì anh ấy lại vừa khéo đi công tác.'},
     {zh:'我正愁没人帮忙，恰巧老王来了。',py:'Wǒ zhèng chóu méi rén bāngmáng, qiàqiǎo Lǎo Wáng lái le.',vn:'Tôi đang lo không có ai giúp thì vừa khéo anh Vương đến.'}
   ],
   colloFull:[
     {zh:'恰巧看到',py:'qiàqiǎo kàndào',vn:'tình cờ nhìn thấy'},
     {zh:'恰巧碰上',py:'qiàqiǎo pèngshang',vn:'tình cờ gặp đúng'},
     {zh:'恰巧出差',py:'qiàqiǎo chūchāi',vn:'vừa khéo đi công tác'},
     {zh:'恰巧路过',py:'qiàqiǎo lùguò',vn:'vừa hay đi ngang qua'},
     {zh:'恰巧是',py:'qiàqiǎo shì',vn:'đúng lúc là, trùng là'}
   ],
   patterns:[
     {s:'……，恰巧 + mệnh đề',m:'Đúng lúc đó (ngẫu nhiên) lại…'},
     {s:'chủ ngữ + 恰巧 + V',m:'Tình cờ, vừa khéo làm…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đến thư viện trả sách thì vừa khéo gặp cô giáo chủ nhiệm.',answer:'我去图书馆还书，恰巧碰上了班主任。',answerPy:'Wǒ qù túshūguǎn huán shū, qiàqiǎo pèngshangle bānzhǔrèn.',
      note:'恰巧 đứng trước động từ vế sau; 碰上 = gặp phải (tình cờ).',pair:'V + 上 (bổ ngữ kết quả)'},
     {promptLang:'vi',prompt:'Tôi gọi điện cho anh ấy, nhưng vừa khéo anh ấy đang họp.',answer:'我给他打电话，可他恰巧在开会。',answerPy:'Wǒ gěi tā dǎ diànhuà, kě tā qiàqiǎo zài kāihuì.',
      note:'恰巧 + 在 + V: vừa khéo đang làm gì; 可 = nhưng (khẩu ngữ).',pair:'在 + V (đang)'}
   ]},

  {n:37,zh:'毫无',py:'háo wú',pos:'Động từ',vn:'không một chút, hoàn toàn không có',hv:'hào vô',em:'🚫',lesson:1,
   explain:['= 一点儿也没有: hoàn toàn không có chút nào. 毫 = sợi lông tơ, cực nhỏ.','Tân ngữ thường là danh từ trừu tượng hai âm tiết: 毫无兴趣, 毫无办法, 毫无抵抗能力, 毫无疑问. Không nói *毫无钱.'],
   usage:'毫无 + N trừu tượng (2 âm tiết); 对…… + 毫无 + 兴趣.',
   collo:['毫无抵抗能力','毫无兴趣','毫无办法','毫无疑问'],
   ex_zh:'大象现在毫无抵抗能力。',ex_py:'Dàxiàng xiànzài háo wú dǐkàng nénglì.',ex_vn:'Bây giờ voi hoàn toàn không có khả năng chống cự.',
   exList:[
     {zh:'大象现在毫无抵抗能力。',py:'Dàxiàng xiànzài háo wú dǐkàng nénglì.',vn:'Bây giờ voi hoàn toàn không có khả năng chống cự.'},
     {zh:'倘若你对一件事毫无兴趣，就很难把它做好。',py:'Tǎngruò nǐ duì yí jiàn shì háo wú xìngqù, jiù hěn nán bǎ tā zuòhǎo.',vn:'Nếu bạn chẳng có chút hứng thú nào với một việc thì rất khó làm tốt nó.'},
     {zh:'毫无疑问，这是他写得最好的一部小说。',py:'Háo wú yíwèn, zhè shì tā xiě de zuì hǎo de yí bù xiǎoshuō.',vn:'Không còn nghi ngờ gì nữa, đây là cuốn tiểu thuyết hay nhất anh ấy từng viết.'}
   ],
   colloFull:[
     {zh:'毫无抵抗能力',py:'háo wú dǐkàng nénglì',vn:'hoàn toàn không có sức chống cự'},
     {zh:'毫无兴趣',py:'háo wú xìngqù',vn:'không chút hứng thú'},
     {zh:'毫无办法',py:'háo wú bànfǎ',vn:'hoàn toàn bó tay'},
     {zh:'毫无疑问',py:'háo wú yíwèn',vn:'không nghi ngờ gì'},
     {zh:'毫无意义',py:'háo wú yìyì',vn:'chẳng có ý nghĩa gì'}
   ],
   patterns:[
     {s:'毫无 + N (2 âm tiết, trừu tượng)',m:'Không có chút… nào'},
     {s:'毫无疑问，……',m:'Không nghi ngờ gì, … (đầu câu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với chuyện này, tôi thật sự hoàn toàn bó tay.',answer:'对这件事，我真的毫无办法。',answerPy:'Duì zhè jiàn shì, wǒ zhēn de háo wú bànfǎ.',
      note:'对 + đối tượng đặt đầu câu làm trạng ngữ; 毫无 + 办法.',pair:'对……'},
     {promptLang:'vi',prompt:'Làm như thế chẳng có ý nghĩa gì, chi bằng nghỉ ngơi cho khỏe.',answer:'这样做毫无意义，还不如好好休息一下。',answerPy:'Zhèyàng zuò háo wú yìyì, hái bùrú hǎohǎo xiūxi yíxià.',
      note:'还不如 = chi bằng, còn hơn (so sánh chọn lựa).',pair:'不如'}
   ]},

  {n:38,zh:'抵抗',py:'dǐkàng',pos:'Động từ',vn:'chống cự, chống lại',hv:'để kháng',em:'🛡️',lesson:1,
   explain:['Dùng sức chống lại sự tấn công, xâm hại.','Hay gặp: 抵抗能力 / 抵抗力 (sức đề kháng của cơ thể), 抵抗敌人, 奋力抵抗.'],
   usage:'抵抗 + N (敌人 / 诱惑 / 疾病); 抵抗力; 毫无抵抗能力.',
   collo:['抵抗能力','抵抗力','抵抗敌人','奋力抵抗'],
   ex_zh:'大象现在毫无抵抗能力。',ex_py:'Dàxiàng xiànzài háo wú dǐkàng nénglì.',ex_vn:'Bây giờ voi hoàn toàn không có khả năng chống cự.',
   exList:[
     {zh:'大象现在毫无抵抗能力。',py:'Dàxiàng xiànzài háo wú dǐkàng nénglì.',vn:'Bây giờ voi hoàn toàn không có khả năng chống cự.'},
     {zh:'当人抵抗力下降的时候，病毒就会乘机进入人的身体。',py:'Dāng rén dǐkànglì xiàjiàng de shíhou, bìngdú jiù huì chéngjī jìnrù rén de shēntǐ.',vn:'Khi sức đề kháng của con người giảm sút, virus sẽ nhân cơ hội xâm nhập vào cơ thể.'},
     {zh:'面对美食的诱惑，我实在抵抗不了。',py:'Miànduì měishí de yòuhuò, wǒ shízài dǐkàng bu liǎo.',vn:'Trước sự cám dỗ của đồ ăn ngon, tôi thật sự không cưỡng lại được.'}
   ],
   colloFull:[
     {zh:'抵抗能力',py:'dǐkàng nénglì',vn:'khả năng chống cự'},
     {zh:'抵抗力',py:'dǐkànglì',vn:'sức đề kháng'},
     {zh:'抵抗敌人',py:'dǐkàng dírén',vn:'chống lại kẻ thù'},
     {zh:'奋力抵抗',py:'fènlì dǐkàng',vn:'ra sức chống cự'},
     {zh:'抵抗诱惑',py:'dǐkàng yòuhuò',vn:'cưỡng lại cám dỗ'}
   ],
   patterns:[
     {s:'抵抗 + 敌人 / 诱惑 / 疾病',m:'Chống lại…'},
     {s:'抵抗不了 + N',m:'Không cưỡng lại / chống lại được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tập thể dục mỗi ngày có thể nâng cao sức đề kháng, nhờ đó ít bị ốm hơn.',answer:'每天锻炼可以提高抵抗力，从而减少生病。',answerPy:'Měi tiān duànliàn kěyǐ tígāo dǐkànglì, cóng\'ér jiǎnshǎo shēngbìng.',
      note:'从而 = nhờ đó mà, từ đó (nối kết quả, văn viết).',pair:'从而'},
     {promptLang:'vi',prompt:'Kẻ địch quá mạnh, nhưng người dân vẫn ra sức chống cự.',answer:'敌人非常强大，但是人们仍然奋力抵抗。',answerPy:'Dírén fēicháng qiángdà, dànshì rénmen réngrán fènlì dǐkàng.',
      note:'仍然 = vẫn (văn viết, như 仍旧 bài 3).',pair:'仍然'}
   ]},

  {n:39,zh:'部位',py:'bùwèi',pos:'Danh từ',vn:'bộ phận, vị trí (trên cơ thể)',hv:'bộ vị',em:'🫀',lesson:1,
   explain:['Vị trí, bộ phận — chủ yếu nói về cơ thể người, động vật: 受伤部位, 重要部位.','Khác 部分 (một phần của tổng thể).'],
   usage:'身体的 + (重要) + 部位; 受伤的部位; 哪个部位.',
   collo:['重要部位','受伤部位','身体部位','疼痛部位'],
   ex_zh:'只要我在它身体的重要部位咬几个洞，它就没命了。',ex_py:'Zhǐyào wǒ zài tā shēntǐ de zhòngyào bùwèi yǎo jǐ ge dòng, tā jiù méi mìng le.',ex_vn:'Chỉ cần mình cắn vài lỗ vào chỗ hiểm trên người nó là nó mất mạng.',
   exList:[
     {zh:'只要我在它身体的重要部位咬几个洞，它就没命了。',py:'Zhǐyào wǒ zài tā shēntǐ de zhòngyào bùwèi yǎo jǐ ge dòng, tā jiù méi mìng le.',vn:'Chỉ cần mình cắn vài lỗ vào chỗ hiểm trên người nó là nó mất mạng.'},
     {zh:'医生问我哪个部位疼，我说是右腿。',py:'Yīshēng wèn wǒ nǎge bùwèi téng, wǒ shuō shì yòu tuǐ.',vn:'Bác sĩ hỏi tôi đau ở chỗ nào, tôi nói là chân phải.'},
     {zh:'打篮球时要保护好膝盖这个容易受伤的部位。',py:'Dǎ lánqiú shí yào bǎohù hǎo xīgài zhège róngyì shòushāng de bùwèi.',vn:'Khi chơi bóng rổ phải bảo vệ tốt đầu gối — bộ phận dễ bị thương.'}
   ],
   colloFull:[
     {zh:'重要部位',py:'zhòngyào bùwèi',vn:'bộ phận quan trọng, chỗ hiểm'},
     {zh:'受伤部位',py:'shòushāng bùwèi',vn:'chỗ bị thương'},
     {zh:'身体部位',py:'shēntǐ bùwèi',vn:'bộ phận cơ thể'},
     {zh:'疼痛部位',py:'téngtòng bùwèi',vn:'chỗ đau'},
     {zh:'哪个部位',py:'nǎge bùwèi',vn:'chỗ nào'}
   ],
   patterns:[
     {s:'(身体的) + Adj + 部位',m:'Bộ phận… trên cơ thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi cứu người phải cẩn thận, đừng chạm vào chỗ bị thương của họ.',answer:'救人的时候要小心，不要碰到他受伤的部位。',answerPy:'Jiù rén de shíhou yào xiǎoxīn, búyào pèngdào tā shòushāng de bùwèi.',
      note:'……的时候; 碰到 = chạm phải (bổ ngữ kết quả 到).',pair:'V + 到'},
     {promptLang:'vi',prompt:'Bộ phận nào trên cơ thể cũng quan trọng như nhau.',answer:'身体的每个部位都一样重要。',answerPy:'Shēntǐ de měi ge bùwèi dōu yíyàng zhòngyào.',
      note:'每 + lượng từ + N + 都……; 一样 + Adj.',pair:'每……都……'}
   ]},

  {n:40,zh:'悲惨',py:'bēicǎn',pos:'Tính từ',vn:'bi thảm, thảm thương',hv:'bi thảm',em:'😢',lesson:1,
   explain:['Hoàn cảnh cực kỳ đau khổ, đáng thương.','Hay làm định ngữ: 悲惨的样子, 悲惨的遭遇, 悲惨的命运.'],
   usage:'悲惨的 + 样子 / 遭遇 / 命运 / 生活; (很 / 十分) 悲惨.',
   collo:['悲惨的样子','悲惨的遭遇','悲惨的命运','十分悲惨'],
   ex_zh:'看到大象悲惨的样子，老鼠不忍下手。',ex_py:'Kàndào dàxiàng bēicǎn de yàngzi, lǎoshǔ bù rěn xiàshǒu.',ex_vn:'Nhìn thấy dáng vẻ thảm thương của voi, chuột không nỡ ra tay.',
   exList:[
     {zh:'看到大象悲惨的样子，老鼠不忍下手。',py:'Kàndào dàxiàng bēicǎn de yàngzi, lǎoshǔ bù rěn xiàshǒu.',vn:'Nhìn thấy dáng vẻ thảm thương của voi, chuột không nỡ ra tay.'},
     {zh:'听了她悲惨的遭遇，大家都流下了眼泪。',py:'Tīngle tā bēicǎn de zāoyù, dàjiā dōu liúxiàle yǎnlèi.',vn:'Nghe cảnh ngộ bi thảm của cô ấy, ai nấy đều rơi nước mắt.'},
     {zh:'战争给那里的人们带来了十分悲惨的生活。',py:'Zhànzhēng gěi nàlǐ de rénmen dàiláile shífēn bēicǎn de shēnghuó.',vn:'Chiến tranh mang đến cho người dân nơi đó cuộc sống vô cùng bi thảm.'}
   ],
   colloFull:[
     {zh:'悲惨的样子',py:'bēicǎn de yàngzi',vn:'dáng vẻ thảm thương'},
     {zh:'悲惨的遭遇',py:'bēicǎn de zāoyù',vn:'cảnh ngộ bi thảm'},
     {zh:'悲惨的命运',py:'bēicǎn de mìngyùn',vn:'số phận bi thảm'},
     {zh:'十分悲惨',py:'shífēn bēicǎn',vn:'vô cùng thảm thương'},
     {zh:'悲惨的故事',py:'bēicǎn de gùshi',vn:'câu chuyện bi thảm'}
   ],
   patterns:[
     {s:'悲惨的 + 样子 / 遭遇 / 命运',m:'… bi thảm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này kết thúc bi thảm quá, tôi không muốn xem lại nữa.',answer:'这个故事的结局太悲惨了，我不想再看了。',answerPy:'Zhège gùshi de jiéjú tài bēicǎn le, wǒ bù xiǎng zài kàn le.',
      note:'太……了; 不想再……了 = không muốn… nữa.',pair:'太……了'},
     {promptLang:'vi',prompt:'Dù cảnh ngộ bi thảm, ông ấy chưa bao giờ oán trách ai.',answer:'尽管遭遇十分悲惨，他却从来没有埋怨过谁。',answerPy:'Jǐnguǎn zāoyù shífēn bēicǎn, tā què cónglái méiyǒu mányuànguo shéi.',
      note:'尽管……却…… = dù… nhưng lại…; 埋怨 (bài 2) = oán trách.',pair:'尽管……却……'}
   ]},

  {n:41,zh:'未免',py:'wèimiǎn',pos:'Phó từ',vn:'có hơi, có phần (quá)',hv:'vị miễn',em:'🤨',lesson:1,
   explain:['Phó từ: biểu thị người nói KHÔNG TÁN THÀNH, chỉ có thể nói là… (nhận xét nhẹ nhàng, uyển chuyển).','Thường bổ nghĩa cho tính từ mang nghĩa tiêu cực, hay đi với 太, 过于, 有些, 不大, 一点儿, 一些 — xem điểm ngữ pháp 3.'],
   usage:'未免 + 太 / 过于 / 有些 + Adj (tiêu cực); 未免 + Adj + 了一点儿 / 一些.',
   collo:['未免太残忍','未免太贵了','未免少了一些','未免有些过分'],
   ex_zh:'它觉得那样未免太过残忍。',ex_py:'Tā juéde nàyàng wèimiǎn tài guò cánrěn.',ex_vn:'Nó cảm thấy làm như vậy thì có phần quá tàn nhẫn.',
   exList:[
     {zh:'它觉得那样未免太过残忍。',py:'Tā juéde nàyàng wèimiǎn tài guò cánrěn.',vn:'Nó cảm thấy làm như vậy thì có phần quá tàn nhẫn.'},
     {zh:'他这个人也未免太不会关心人了。',py:'Tā zhège rén yě wèimiǎn tài bú huì guānxīn rén le.',vn:'Con người anh ta cũng có hơi quá vô tâm với người khác.'},
     {zh:'举办展览的想法是不错，只是现在能够展出的展品未免少了一些。',py:'Jǔbàn zhǎnlǎn de xiǎngfǎ shì búcuò, zhǐshì xiànzài nénggòu zhǎnchū de zhǎnpǐn wèimiǎn shǎole yìxiē.',vn:'Ý tưởng tổ chức triển lãm thì hay, có điều hiện giờ hiện vật có thể trưng bày hơi ít.'}
   ],
   colloFull:[
     {zh:'未免太残忍',py:'wèimiǎn tài cánrěn',vn:'có phần quá tàn nhẫn'},
     {zh:'未免太贵了',py:'wèimiǎn tài guì le',vn:'hơi đắt quá'},
     {zh:'未免少了一些',py:'wèimiǎn shǎole yìxiē',vn:'có hơi ít'},
     {zh:'未免有些过分',py:'wèimiǎn yǒuxiē guòfèn',vn:'có phần hơi quá đáng'},
     {zh:'未免过于',py:'wèimiǎn guòyú',vn:'có phần quá mức'}
   ],
   patterns:[
     {s:'未免 + 太 / 过于 / 有些 + Adj',m:'Có phần quá… (chê nhẹ, uyển chuyển)'},
     {s:'未免 + Adj + 了一点儿 / 一些',m:'Có hơi… một chút'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ vì một lần thi trượt mà cậu định bỏ cuộc thì có hơi quá dễ dàng đấy.',answer:'只因为一次考试没通过就想放弃，你未免太容易放弃了。',answerPy:'Zhǐ yīnwèi yí cì kǎoshì méi tōngguò jiù xiǎng fàngqì, nǐ wèimiǎn tài róngyì fàngqì le.',
      note:'只因为……就…… = chỉ vì… mà đã…; 未免太……了 chê nhẹ nhàng.',pair:'因为……就……'},
     {promptLang:'vi',prompt:'Anh ta nói như vậy trước mặt mọi người thì có phần hơi quá đáng.',answer:'他当着大家的面这么说，未免有些过分。',answerPy:'Tā dāngzhe dàjiā de miàn zhème shuō, wèimiǎn yǒuxiē guòfèn.',
      note:'当着 + ai + 的面 = trước mặt ai; 未免有些 + Adj.',pair:'当着……的面'}
   ]},

  {n:42,zh:'残忍',py:'cánrěn',pos:'Tính từ',vn:'tàn nhẫn',hv:'tàn nhẫn',em:'💔',lesson:1,
   explain:['Độc ác, nhẫn tâm, không có lòng thương.','Trùng khít với Hán–Việt "tàn nhẫn". Hay đi với 太, 未免, 对……很残忍.'],
   usage:'(太 / 过于) 残忍; 对 + ai + 很残忍; 残忍的 + 手段 / 行为.',
   collo:['太过残忍','残忍的行为','对动物残忍','残忍的手段'],
   ex_zh:'它觉得那样未免太过残忍。',ex_py:'Tā juéde nàyàng wèimiǎn tài guò cánrěn.',ex_vn:'Nó cảm thấy làm như vậy có phần quá tàn nhẫn.',
   exList:[
     {zh:'它觉得那样未免太过残忍。',py:'Tā juéde nàyàng wèimiǎn tài guò cánrěn.',vn:'Nó cảm thấy làm như vậy có phần quá tàn nhẫn.'},
     {zh:'把小狗扔在路边不管，这种行为太残忍了。',py:'Bǎ xiǎogǒu rēng zài lù biān bù guǎn, zhè zhǒng xíngwéi tài cánrěn le.',vn:'Vứt chó con bên đường mặc kệ, hành vi này thật quá tàn nhẫn.'},
     {zh:'把真相告诉她未免有点儿残忍，可是不告诉她又不行。',py:'Bǎ zhēnxiàng gàosu tā wèimiǎn yǒudiǎnr cánrěn, kěshì bú gàosu tā yòu bù xíng.',vn:'Nói sự thật với cô ấy thì có hơi tàn nhẫn, nhưng không nói thì lại không được.'}
   ],
   colloFull:[
     {zh:'太过残忍',py:'tài guò cánrěn',vn:'quá tàn nhẫn'},
     {zh:'残忍的行为',py:'cánrěn de xíngwéi',vn:'hành vi tàn nhẫn'},
     {zh:'对动物残忍',py:'duì dòngwù cánrěn',vn:'tàn nhẫn với động vật'},
     {zh:'残忍的手段',py:'cánrěn de shǒuduàn',vn:'thủ đoạn tàn độc'},
     {zh:'残忍地拒绝',py:'cánrěn de jùjué',vn:'từ chối phũ phàng'}
   ],
   patterns:[
     {s:'对 + ai + (很 / 太) 残忍',m:'Tàn nhẫn với ai'},
     {s:'未免 + 太(过) + 残忍',m:'Có phần quá tàn nhẫn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh không thể tàn nhẫn với chính mình như vậy, ngày nào cũng chỉ ngủ bốn tiếng.',answer:'你不能对自己这么残忍，每天只睡四个小时。',answerPy:'Nǐ bù néng duì zìjǐ zhème cánrěn, měi tiān zhǐ shuì sì ge xiǎoshí.',
      note:'对 + ai + 这么 + Adj; 只 + V + thời lượng.',pair:'对……'},
     {promptLang:'vi',prompt:'Dù cậu ta đã làm sai, đối xử với cậu ta như thế vẫn quá tàn nhẫn.',answer:'即使他做错了，这样对待他也太残忍了。',answerPy:'Jíshǐ tā zuòcuò le, zhèyàng duìdài tā yě tài cánrěn le.',
      note:'即使……也…… = cho dù… cũng…',pair:'即使……也……'}
   ]},

  {n:43,zh:'良心',py:'liángxīn',pos:'Danh từ',vn:'lương tâm',hv:'lương tâm',em:'🫶',lesson:1,
   explain:['Lương tâm: ý thức phân biệt thiện ác trong lòng mỗi người.','Hay gặp: 良心告诉我…, 有良心 / 没良心, 凭良心说, 良心不安.'],
   usage:'良心告诉 + ai; (没) 有良心; 凭良心 + V; 良心不安.',
   collo:['良心告诉它','没良心','凭良心说','良心不安'],
   ex_zh:'良心告诉它，应该救大象。',ex_py:'Liángxīn gàosu tā, yīnggāi jiù dàxiàng.',ex_vn:'Lương tâm mách bảo nó rằng nên cứu voi.',
   exList:[
     {zh:'良心告诉它，应该救大象。',py:'Liángxīn gàosu tā, yīnggāi jiù dàxiàng.',vn:'Lương tâm mách bảo nó rằng nên cứu voi.'},
     {zh:'凭良心说，这件事我也有责任。',py:'Píng liángxīn shuō, zhè jiàn shì wǒ yě yǒu zérèn.',vn:'Nói thật lòng, chuyện này tôi cũng có trách nhiệm.'},
     {zh:'他捡到钱包没有还给失主，一直良心不安。',py:'Tā jiǎndào qiánbāo méiyǒu huán gěi shīzhǔ, yìzhí liángxīn bù\'ān.',vn:'Nhặt được ví mà không trả cho người mất, anh ấy cứ day dứt lương tâm mãi.'}
   ],
   colloFull:[
     {zh:'良心告诉它',py:'liángxīn gàosu tā',vn:'lương tâm mách bảo nó'},
     {zh:'没良心',py:'méi liángxīn',vn:'vô lương tâm'},
     {zh:'凭良心说',py:'píng liángxīn shuō',vn:'nói thật lòng'},
     {zh:'良心不安',py:'liángxīn bù\'ān',vn:'lương tâm cắn rứt'},
     {zh:'有良心',py:'yǒu liángxīn',vn:'có lương tâm'}
   ],
   patterns:[
     {s:'良心告诉 + ai，……',m:'Lương tâm mách bảo ai rằng…'},
     {s:'凭良心 + 说 / 做',m:'Nói / làm theo lương tâm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ vất vả nuôi con khôn lớn, con không thể vô lương tâm như vậy.',answer:'父母辛辛苦苦把你养大，你不能这么没良心。',answerPy:'Fùmǔ xīnxīnkǔkǔ bǎ nǐ yǎngdà, nǐ bù néng zhème méi liángxīn.',
      note:'辛辛苦苦 (láy AABB) làm trạng ngữ; 把 + ai + 养大.',pair:'把'},
     {promptLang:'vi',prompt:'Làm việc gì cũng phải theo lương tâm, như vậy mới không hối hận.',answer:'做什么事都要凭良心，这样才不会后悔。',answerPy:'Zuò shénme shì dōu yào píng liángxīn, zhèyàng cái bú huì hòuhuǐ.',
      note:'什么……都…… (phiếm chỉ toàn bộ); 这样才…… = như thế mới…',pair:'什么……都……'}
   ]},

  {n:44,zh:'锋利',py:'fēnglì',pos:'Tính từ',vn:'sắc bén, sắc',hv:'phong lợi',em:'🔪',lesson:1,
   explain:['Sắc, bén (dao, răng, móng vuốt…).','Nghĩa bóng: lời lẽ, ngòi bút sắc sảo (锋利的语言).'],
   usage:'锋利的 + 牙齿 / 刀 / 爪子; 很锋利.',
   collo:['锋利的牙齿','锋利的刀','非常锋利','锋利的爪子'],
   ex_zh:'它开始用锋利的牙齿咬缠绕着大象的网和绳子。',ex_py:'Tā kāishǐ yòng fēnglì de yáchǐ yǎo chánràozhe dàxiàng de wǎng hé shéngzi.',ex_vn:'Nó bắt đầu dùng hàm răng sắc bén gặm tấm lưới và dây thừng đang quấn quanh voi.',
   exList:[
     {zh:'它开始用锋利的牙齿咬缠绕着大象的网和绳子。',py:'Tā kāishǐ yòng fēnglì de yáchǐ yǎo chánràozhe dàxiàng de wǎng hé shéngzi.',vn:'Nó bắt đầu dùng hàm răng sắc bén gặm tấm lưới và dây thừng đang quấn quanh voi.'},
     {zh:'这把刀非常锋利，用的时候要小心。',py:'Zhè bǎ dāo fēicháng fēnglì, yòng de shíhou yào xiǎoxīn.',vn:'Con dao này rất sắc, khi dùng phải cẩn thận.'},
     {zh:'老虎的爪子又尖又锋利。',py:'Lǎohǔ de zhuǎzi yòu jiān yòu fēnglì.',vn:'Móng vuốt của hổ vừa nhọn vừa sắc.'}
   ],
   colloFull:[
     {zh:'锋利的牙齿',py:'fēnglì de yáchǐ',vn:'hàm răng sắc bén'},
     {zh:'锋利的刀',py:'fēnglì de dāo',vn:'con dao sắc'},
     {zh:'非常锋利',py:'fēicháng fēnglì',vn:'rất sắc'},
     {zh:'锋利的爪子',py:'fēnglì de zhuǎzi',vn:'móng vuốt sắc'},
     {zh:'锋利的语言',py:'fēnglì de yǔyán',vn:'lời lẽ sắc sảo'}
   ],
   patterns:[
     {s:'用锋利的 + 牙齿 / 刀 + V',m:'Dùng (răng, dao) sắc để…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con dao này tuy nhỏ nhưng rất sắc, trẻ con không được chạm vào.',answer:'这把刀虽然小，但是很锋利，孩子不能碰。',answerPy:'Zhè bǎ dāo suīrán xiǎo, dànshì hěn fēnglì, háizi bù néng pèng.',
      note:'虽然……但是……; lượng từ 把 cho dao.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Răng của chuột sắc đến mức có thể cắn đứt cả dây điện.',answer:'老鼠的牙齿锋利得连电线都能咬断。',answerPy:'Lǎoshǔ de yáchǐ fēnglì de lián diànxiàn dōu néng yǎoduàn.',
      note:'Adj + 得 + 连……都…… (mức độ đến nỗi); 咬断 = cắn đứt.',pair:'得 + 连……都……'}
   ]},

  {n:45,zh:'缠绕',py:'chánrào',pos:'Động từ',vn:'quấn quanh, vấn vít',hv:'triền nhiễu',em:'🧶',lesson:1,
   explain:['Quấn, cuốn quanh một vật (dây, lưới, dây leo…).','Nghĩa bóng: (phiền muộn, bệnh tật) đeo bám, quấy nhiễu: 被烦恼缠绕.'],
   usage:'缠绕着 + N; 被……缠绕; 缠绕在……上.',
   collo:['缠绕着大象','缠绕在树上','被绳子缠绕','互相缠绕'],
   ex_zh:'它用锋利的牙齿咬缠绕着大象的网和绳子。',ex_py:'Tā yòng fēnglì de yáchǐ yǎo chánràozhe dàxiàng de wǎng hé shéngzi.',ex_vn:'Nó dùng răng sắc gặm tấm lưới và dây thừng đang quấn quanh voi.',
   exList:[
     {zh:'它用锋利的牙齿咬缠绕着大象的网和绳子。',py:'Tā yòng fēnglì de yáchǐ yǎo chánràozhe dàxiàng de wǎng hé shéngzi.',vn:'Nó dùng răng sắc gặm tấm lưới và dây thừng đang quấn quanh voi.'},
     {zh:'老房子的墙上缠绕着很多绿色的植物。',py:'Lǎo fángzi de qiáng shang chánràozhe hěn duō lǜsè de zhíwù.',vn:'Trên tường ngôi nhà cổ quấn đầy những cây leo xanh.'},
     {zh:'耳机线缠绕在一起了，我解了半天也没解开。',py:'Ěrjī xiàn chánrào zài yìqǐ le, wǒ jiěle bàntiān yě méi jiěkāi.',vn:'Dây tai nghe quấn vào nhau, tôi gỡ mãi mà không gỡ ra được.'}
   ],
   colloFull:[
     {zh:'缠绕着大象',py:'chánràozhe dàxiàng',vn:'quấn quanh voi'},
     {zh:'缠绕在树上',py:'chánrào zài shù shang',vn:'quấn trên cây'},
     {zh:'被绳子缠绕',py:'bèi shéngzi chánrào',vn:'bị dây quấn'},
     {zh:'互相缠绕',py:'hùxiāng chánrào',vn:'quấn vào nhau'},
     {zh:'被烦恼缠绕',py:'bèi fánnǎo chánrào',vn:'bị phiền muộn đeo bám'}
   ],
   patterns:[
     {s:'缠绕着 + N (的 + N)',m:'Đang quấn quanh… (làm định ngữ)'},
     {s:'缠绕在 + nơi chốn + 上 / 一起',m:'Quấn vào…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dây diều bị quấn vào cành cây, làm cách nào cũng không lấy xuống được.',answer:'风筝线缠绕在树枝上，怎么也拿不下来。',answerPy:'Fēngzheng xiàn chánrào zài shùzhī shang, zěnme yě ná bu xiàlái.',
      note:'怎么也 + bổ ngữ khả năng phủ định = thế nào cũng không… được.',pair:'怎么也……不……'},
     {promptLang:'vi',prompt:'Mấy ngày nay cô ấy cứ bị đủ thứ chuyện phiền muộn đeo bám.',answer:'这几天她一直被各种烦恼缠绕着。',answerPy:'Zhè jǐ tiān tā yìzhí bèi gè zhǒng fánnǎo chánràozhe.',
      note:'被 + tác nhân + V + 着: trạng thái bị động kéo dài.',pair:'被……V着'}
   ]},

  {n:46,zh:'耗费',py:'hàofèi',pos:'Động từ',vn:'hao tốn, tiêu tốn',hv:'hao phí',em:'⏳',lesson:1,
   explain:['Tiêu hao, dùng mất (sức lực, thời gian, tiền bạc, tài nguyên), thường là nhiều.','Trang trọng hơn 花; tân ngữ: 力气, 精力, 时间, 金钱, 能源.'],
   usage:'耗费 + 力气 / 精力 / 时间 / 金钱; 耗费了大量……',
   collo:['耗费力气','耗费时间','耗费精力','耗费大量资金'],
   ex_zh:'老鼠几乎耗费了全部力气，绳子终于被咬断了。',ex_py:'Lǎoshǔ jīhū hàofèile quánbù lìqi, shéngzi zhōngyú bèi yǎoduàn le.',ex_vn:'Chuột gần như đã dùng hết sức lực, cuối cùng dây thừng cũng bị cắn đứt.',
   exList:[
     {zh:'老鼠几乎耗费了全部力气，绳子终于被咬断了。',py:'Lǎoshǔ jīhū hàofèile quánbù lìqi, shéngzi zhōngyú bèi yǎoduàn le.',vn:'Chuột gần như đã dùng hết sức lực, cuối cùng dây thừng cũng bị cắn đứt.'},
     {zh:'如果是你感兴趣的事情，无论耗费多少时间和精力，心里也都是快乐的。',py:'Rúguǒ shì nǐ gǎn xìngqù de shìqing, wúlùn hàofèi duōshao shíjiān hé jīnglì, xīnli yě dōu shì kuàilè de.',vn:'Nếu là việc bạn hứng thú thì dù tốn bao nhiêu thời gian và công sức, trong lòng vẫn vui vẻ.'},
     {zh:'修这座大桥耗费了大量的资金。',py:'Xiū zhè zuò dà qiáo hàofèile dàliàng de zījīn.',vn:'Xây cây cầu lớn này đã tiêu tốn một khoản vốn khổng lồ.'}
   ],
   colloFull:[
     {zh:'耗费力气',py:'hàofèi lìqi',vn:'tốn sức'},
     {zh:'耗费时间',py:'hàofèi shíjiān',vn:'tốn thời gian'},
     {zh:'耗费精力',py:'hàofèi jīnglì',vn:'hao tổn tinh lực'},
     {zh:'耗费大量资金',py:'hàofèi dàliàng zījīn',vn:'tốn rất nhiều vốn'},
     {zh:'耗费能源',py:'hàofèi néngyuán',vn:'tiêu tốn năng lượng'}
   ],
   patterns:[
     {s:'耗费 + (了) + (大量 / 全部) + 力气 / 时间 / 精力',m:'Tiêu tốn (nhiều)…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để chuẩn bị cho buổi biểu diễn này, cả lớp đã tốn rất nhiều thời gian và công sức.',answer:'为了准备这次演出，全班同学耗费了很多时间和精力。',answerPy:'Wèile zhǔnbèi zhè cì yǎnchū, quán bān tóngxué hàofèile hěn duō shíjiān hé jīnglì.',
      note:'为了 + mục đích đặt đầu câu; 耗费 + 时间和精力.',pair:'为了'},
     {promptLang:'vi',prompt:'Chơi game không những tốn thời gian mà còn ảnh hưởng đến thị lực.',answer:'玩游戏不但耗费时间，而且影响视力。',answerPy:'Wán yóuxì búdàn hàofèi shíjiān, érqiě yǐngxiǎng shìlì.',
      note:'不但……而且…… (tăng tiến).',pair:'不但……而且……'}
   ]},

  {n:47,zh:'缺口',py:'quēkǒu',pos:'Danh từ',vn:'lỗ hổng, chỗ hở; thiếu hụt',hv:'khuyết khẩu',em:'🕳️',lesson:1,
   explain:['Chỗ bị hở, bị thủng, bị sứt mẻ trên một vật (lưới, tường, bát…).','Nghĩa bóng: phần thiếu hụt (资金缺口 = khoản vốn thiếu).'],
   usage:'出现 / 打开 + 一个缺口; 网 / 墙上的缺口; 资金缺口.',
   collo:['出现缺口','一个大缺口','打开缺口','资金缺口'],
   ex_zh:'巨网出现了一个大缺口，大象猛地一用力，脱离了巨网。',ex_py:'Jù wǎng chūxiànle yí ge dà quēkǒu, dàxiàng měng de yí yònglì, tuōlíle jù wǎng.',ex_vn:'Tấm lưới lớn thủng một lỗ to, voi dồn sức một cái, thoát ra khỏi lưới.',
   exList:[
     {zh:'巨网出现了一个大缺口，大象猛地一用力，脱离了巨网。',py:'Jù wǎng chūxiànle yí ge dà quēkǒu, dàxiàng měng de yí yònglì, tuōlíle jù wǎng.',vn:'Tấm lưới lớn thủng một lỗ to, voi dồn sức một cái, thoát ra khỏi lưới.'},
     {zh:'这只碗有个缺口，别用了，小心划破嘴。',py:'Zhè zhī wǎn yǒu ge quēkǒu, bié yòng le, xiǎoxīn huápò zuǐ.',vn:'Cái bát này bị mẻ, đừng dùng nữa, coi chừng cứa rách miệng.'},
     {zh:'羊从篱笆的缺口跑了出去。',py:'Yáng cóng líba de quēkǒu pǎole chūqu.',vn:'Con dê chạy ra ngoài qua chỗ hở của hàng rào.'}
   ],
   colloFull:[
     {zh:'出现缺口',py:'chūxiàn quēkǒu',vn:'xuất hiện chỗ hở'},
     {zh:'一个大缺口',py:'yí ge dà quēkǒu',vn:'một lỗ hổng lớn'},
     {zh:'打开缺口',py:'dǎkāi quēkǒu',vn:'mở ra lỗ hổng, tạo đột phá'},
     {zh:'资金缺口',py:'zījīn quēkǒu',vn:'khoản vốn thiếu hụt'},
     {zh:'墙上的缺口',py:'qiáng shang de quēkǒu',vn:'chỗ thủng trên tường'}
   ],
   patterns:[
     {s:'(N) + 出现了 + 一个缺口',m:'… bị thủng / hở một chỗ'},
     {s:'从 + ……的缺口 + V',m:'Đi qua chỗ hở của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước sông tràn qua chỗ hở của con đê và chảy vào làng.',answer:'河水从堤坝的缺口流进了村子。',answerPy:'Héshuǐ cóng dībà de quēkǒu liújìnle cūnzi.',
      note:'从 + nơi xuất phát + V + 进 + nơi đến (bổ ngữ xu hướng).',pair:'从……V进……'},
     {promptLang:'vi',prompt:'Bức tường này đã có một chỗ thủng, phải nhanh chóng sửa lại.',answer:'这面墙已经出现了一个缺口，得赶紧修好。',answerPy:'Zhè miàn qiáng yǐjīng chūxiànle yí ge quēkǒu, děi gǎnjǐn xiūhǎo.',
      note:'赶紧 + V = nhanh chóng làm ngay; 修好 (bổ ngữ kết quả).',pair:'赶紧'}
   ]},

  {n:48,zh:'举世瞩目',py:'jǔshì zhǔmù',pos:'Thành ngữ',vn:'thu hút sự chú ý của cả thế giới',hv:'cử thế chúc mục',em:'🌍',lesson:1,
   explain:['Cả thế giới đều chú ý, dõi theo — dùng cho thành tựu, sự kiện rất lớn.','Hay làm định ngữ: 举世瞩目的成就 / 成绩 / 大事. 举世 = toàn thế giới, 瞩目 = dõi mắt nhìn.'],
   usage:'举世瞩目的 + 成就 / 成绩 / 事件; 取得 / 创造 + 举世瞩目的成就.',
   collo:['举世瞩目的成就','取得举世瞩目的成绩','举世瞩目的大事','创造举世瞩目的成就'],
   ex_zh:'你化敌为友，创造了举世瞩目的成就。',ex_py:'Nǐ huà dí wéi yǒu, chuàngzàole jǔshì zhǔmù de chéngjiù.',ex_vn:'Ngươi đã biến kẻ thù thành bạn, làm nên thành tựu khiến cả thế giới phải chú ý.',
   exList:[
     {zh:'你化敌为友，创造了举世瞩目的成就。',py:'Nǐ huà dí wéi yǒu, chuàngzàole jǔshì zhǔmù de chéngjiù.',vn:'Ngươi đã biến kẻ thù thành bạn, làm nên thành tựu khiến cả thế giới phải chú ý.'},
     {zh:'经过几十年的改革开放，中国经济取得了举世瞩目的成就。',py:'Jīngguò jǐshí nián de gǎigé kāifàng, Zhōngguó jīngjì qǔdéle jǔshì zhǔmù de chéngjiù.',vn:'Trải qua mấy chục năm cải cách mở cửa, kinh tế Trung Quốc đã đạt được thành tựu thế giới phải chú ý.'},
     {zh:'奥运会是一件举世瞩目的体育盛事。',py:'Àoyùnhuì shì yí jiàn jǔshì zhǔmù de tǐyù shèngshì.',vn:'Thế vận hội là một sự kiện thể thao trọng đại được cả thế giới dõi theo.'}
   ],
   colloFull:[
     {zh:'举世瞩目的成就',py:'jǔshì zhǔmù de chéngjiù',vn:'thành tựu cả thế giới chú ý'},
     {zh:'取得举世瞩目的成绩',py:'qǔdé jǔshì zhǔmù de chéngjì',vn:'đạt thành tích nổi bật toàn cầu'},
     {zh:'举世瞩目的大事',py:'jǔshì zhǔmù de dàshì',vn:'sự kiện cả thế giới quan tâm'},
     {zh:'创造举世瞩目的成就',py:'chuàngzào jǔshì zhǔmù de chéngjiù',vn:'làm nên thành tựu vang dội'},
     {zh:'举世闻名',py:'jǔshì wénmíng',vn:'nổi tiếng khắp thế giới (thành ngữ gần)'}
   ],
   patterns:[
     {s:'取得 / 创造 + 举世瞩目的 + 成就',m:'Đạt được thành tựu cả thế giới chú ý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có không ngừng đổi mới thì một đất nước mới có thể đạt được những thành tựu cả thế giới chú ý.',answer:'只有不断创新，一个国家才能取得举世瞩目的成就。',answerPy:'Zhǐyǒu búduàn chuàngxīn, yí ge guójiā cái néng qǔdé jǔshì zhǔmù de chéngjiù.',
      note:'只有……才…… (điều kiện duy nhất); 不断 + V = không ngừng.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Tuy đạt được thành tích vang dội, anh ấy vẫn rất khiêm tốn.',answer:'虽然取得了举世瞩目的成绩，他却仍然很谦虚。',answerPy:'Suīrán qǔdéle jǔshì zhǔmù de chéngjì, tā què réngrán hěn qiānxū.',
      note:'虽然……却…… ; 却 đứng sau chủ ngữ vế sau.',pair:'虽然……却……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 · 完美的胜利 (750 chữ, tr. 45–46) — chép nguyên văn, mỗi đoạn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 完美的胜利',
   preQuiz:[
     {q:'老鼠原来是谁的宠物？',opts:['山神的宠物','大象的宠物','打猎者的宠物'],ans:0},
     {q:'老鼠为什么向山神请假？',opts:['它生病了，想休息','它厌倦了宠物的生活，想证明自己的实力','它想去找大象做朋友'],ans:1},
     {q:'山神说，老鼠想回来必须做到什么？',opts:['找到很多朋友','战胜大象','在动物世界住一年'],ans:1},
     {q:'老鼠一来到动物界就发觉了什么？',opts:['自己的承诺太草率了','大象很友好','动物世界很无聊'],ans:0},
     {q:'老鼠的第一个计划是什么？',opts:['在大象身上咬几个洞','乘大象不注意，进到大象鼻子里去','请猫帮忙对付大象'],ans:1},
     {q:'老鼠跑进大象鼻子以后发生了什么？',opts:['大象认输了','大象打了个喷嚏，把老鼠射了出来','大象不能喘气，请求饶恕'],ans:1},
     {q:'大象是用什么样的眼光盯着老鼠的？',opts:['羡慕的眼光','感激的眼光','蔑视的眼光'],ans:2},
     {q:'第一次失败以后，老鼠怎么样了？',opts:['再也不敢挑战大象了','马上又尝试了一次','回到了山神身边'],ans:0},
     {q:'大象后来遇到了什么危险？',opts:['被老虎追赶','落入了打猎者设下的巨网','掉进了河里'],ans:1},
     {q:'老鼠看到大象悲惨的样子，为什么没有下手？',opts:['它害怕大象','它觉得那样太过残忍，良心告诉它应该救大象','山神不让它下手'],ans:1},
     {q:'老鼠是怎么救大象的？',opts:['去找其他动物帮忙','用锋利的牙齿咬断了网和绳子','把打猎者赶走了'],ans:1},
     {q:'山神为什么说老鼠取得了“完美的胜利”？',opts:['因为老鼠化敌为友','因为老鼠打败了大象','因为老鼠回到了山神身边'],ans:0}
   ],
   lines:[
    {sp:0,zh:'老鼠是山神的宠物，它厌倦了宠物的生活，也很厌恶宠物这个角色，于是向山神请假，要求到动物世界走一回，心想一定要找机会证明一下自己的实力。山神说：“动物世界中，大象是最强大的，倘若你还想回来，必须战胜大象，否则，你就永远留在动物世界吧。”老鼠答应了山神的条件，并暗自把挑战目标定为了大象。',
     py:'Lǎoshǔ shì shānshén de chǒngwù, tā yànjuànle chǒngwù de shēnghuó, yě hěn yànwù chǒngwù zhège juésè, yúshì xiàng shānshén qǐngjià, yāoqiú dào dòngwù shìjiè zǒu yì huí, xīn xiǎng yídìng yào zhǎo jīhuì zhèngmíng yíxià zìjǐ de shílì. Shānshén shuō: "Dòngwù shìjiè zhōng, dàxiàng shì zuì qiángdà de, tǎngruò nǐ hái xiǎng huílái, bìxū zhànshèng dàxiàng, fǒuzé, nǐ jiù yǒngyuǎn liú zài dòngwù shìjiè ba." Lǎoshǔ dāyingle shānshén de tiáojiàn, bìng ànzì bǎ tiǎozhàn mùbiāo dìngwéile dàxiàng.',
     vn:'Chuột là thú cưng của thần núi. Nó đã chán ngán cuộc sống làm thú cưng, cũng rất ghét cái vai thú cưng này, bèn xin phép thần núi cho đến thế giới động vật một chuyến, trong bụng nghĩ nhất định phải tìm cơ hội chứng minh thực lực của mình. Thần núi nói: "Trong thế giới động vật, voi là kẻ mạnh nhất. Nếu ngươi còn muốn quay về thì phải thắng được voi; nếu không, ngươi cứ ở lại thế giới động vật mãi mãi đi." Chuột nhận lời điều kiện của thần núi, và âm thầm chọn voi làm mục tiêu thách đấu.'},
    {sp:0,zh:'老鼠一来到动物界，便发觉它对山神的承诺是多么草率，它是那么弱小，丝毫没有对抗大象的力量，但老鼠还是决定尝试一下。它想，我太小了，不可以盲目行动，但我可以乘大象不注意，进到大象鼻子里去，大象不能喘气了，就得请求我饶恕，我就可以强迫它认输。',
     py:'Lǎoshǔ yì láidào dòngwùjiè, biàn fājué tā duì shānshén de chéngnuò shì duōme cǎoshuài, tā shì nàme ruòxiǎo, sīháo méiyǒu duìkàng dàxiàng de lìliang, dàn lǎoshǔ háishi juédìng chángshì yíxià. Tā xiǎng, wǒ tài xiǎo le, bù kěyǐ mángmù xíngdòng, dàn wǒ kěyǐ chéng dàxiàng bú zhùyì, jìndào dàxiàng bízi li qù, dàxiàng bù néng chuǎn qì le, jiù děi qǐngqiú wǒ ráoshù, wǒ jiù kěyǐ qiǎngpò tā rènshū.',
     vn:'Vừa đến thế giới động vật, chuột đã nhận ra lời hứa của mình với thần núi thật khinh suất biết bao: nó nhỏ yếu đến thế, chẳng có chút sức lực nào để chống lại voi. Nhưng chuột vẫn quyết định thử một phen. Nó nghĩ: mình bé quá, không được hành động mù quáng, nhưng mình có thể nhân lúc voi không để ý mà chui vào trong vòi nó. Voi không thở được thì sẽ phải cầu xin mình tha, lúc đó mình có thể ép nó chịu thua.'},
    {sp:0,zh:'这天，大象正在吃树叶，老鼠乘机跑进大象的鼻子中，准备实施它的计划。不料，刚进去，大象痒得难受，猛烈地打起了喷嚏，老鼠像子弹一样被射了出来。大象用蔑视的眼光盯着它，愤怒地说：“你这个愚蠢的家伙，太可恶了，下次再耍流氓，我一定踩扁了你。”从此老鼠再也不敢挑战大象了。',
     py:'Zhè tiān, dàxiàng zhèngzài chī shùyè, lǎoshǔ chéngjī pǎojìn dàxiàng de bízi zhōng, zhǔnbèi shíshī tā de jìhuà. Búliào, gāng jìnqu, dàxiàng yǎng de nánshòu, měngliè de dǎqǐle pēntì, lǎoshǔ xiàng zǐdàn yíyàng bèi shèle chūlái. Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā, fènnù de shuō: "Nǐ zhège yúchǔn de jiāhuo, tài kěwù le, xià cì zài shuǎ liúmáng, wǒ yídìng cǎibiǎnle nǐ." Cóngcǐ lǎoshǔ zài yě bù gǎn tiǎozhàn dàxiàng le.',
     vn:'Hôm ấy, voi đang ăn lá cây, chuột nhân cơ hội chạy vào trong vòi voi, chuẩn bị thực hiện kế hoạch. Chẳng ngờ vừa vào, voi ngứa ngáy khó chịu, hắt hơi một cái thật mạnh, chuột bị bắn văng ra ngoài như một viên đạn. Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt, giận dữ nói: "Đồ ngu ngốc nhà ngươi, thật đáng ghét! Lần sau còn giở trò lưu manh, ta nhất định giẫm bẹp ngươi." Từ đó chuột không bao giờ dám thách đấu voi nữa.'},
    {sp:0,zh:'那是一个夕阳将落的傍晚，大象不留神落入了打猎者设下的巨网中。它不顾一切地用力挣扎，往外乱窜，想摆脱巨网，可是，它的一切努力都没用。大象又悲伤又害怕，它觉得死亡越来越近了。恰巧，老鼠看到了这一切，它想，大象现在毫无抵抗能力，只要我在它身体的重要部位咬几个洞，它就没命了，我不就战胜大象了吗？然而，看到大象悲惨的样子，老鼠不忍下手，它觉得那样未免太过残忍，良心告诉它，应该救大象，于是，它开始用锋利的牙齿咬缠绕着大象的网和绳子。不知过了多久，老鼠几乎耗费了全部力气，绳子终于被咬断了，巨网出现了一个大缺口，大象猛地一用力，脱离了巨网。',
     py:'Nà shì yí ge xīyáng jiāng luò de bàngwǎn, dàxiàng bù liú shén luòrùle dǎlièzhě shèxià de jù wǎng zhōng. Tā búgù yíqiè de yònglì zhēngzhá, wǎng wài luàn cuàn, xiǎng bǎituō jù wǎng, kěshì, tā de yíqiè nǔlì dōu méi yòng. Dàxiàng yòu bēishāng yòu hàipà, tā juéde sǐwáng yuè lái yuè jìn le. Qiàqiǎo, lǎoshǔ kàndàole zhè yíqiè, tā xiǎng, dàxiàng xiànzài háo wú dǐkàng nénglì, zhǐyào wǒ zài tā shēntǐ de zhòngyào bùwèi yǎo jǐ ge dòng, tā jiù méi mìng le, wǒ bú jiù zhànshèng dàxiàng le ma? Rán\'ér, kàndào dàxiàng bēicǎn de yàngzi, lǎoshǔ bù rěn xiàshǒu, tā juéde nàyàng wèimiǎn tài guò cánrěn, liángxīn gàosu tā, yīnggāi jiù dàxiàng, yúshì, tā kāishǐ yòng fēnglì de yáchǐ yǎo chánràozhe dàxiàng de wǎng hé shéngzi. Bù zhī guòle duō jiǔ, lǎoshǔ jīhū hàofèile quánbù lìqi, shéngzi zhōngyú bèi yǎoduàn le, jù wǎng chūxiànle yí ge dà quēkǒu, dàxiàng měng de yí yònglì, tuōlíle jù wǎng.',
     vn:'Đó là một buổi chiều khi mặt trời sắp lặn, voi sơ ý sa vào tấm lưới lớn mà thợ săn giăng sẵn. Nó bất chấp tất cả ra sức vùng vẫy, lao loạn ra ngoài, muốn thoát khỏi tấm lưới, nhưng mọi cố gắng đều vô ích. Voi vừa đau buồn vừa sợ hãi, cảm thấy cái chết mỗi lúc một gần. Đúng lúc ấy, chuột nhìn thấy tất cả. Nó nghĩ: bây giờ voi hoàn toàn không có sức chống cự, chỉ cần mình cắn vài lỗ vào chỗ hiểm trên người nó là nó mất mạng, như thế chẳng phải mình đã thắng voi rồi sao? Thế nhưng, nhìn dáng vẻ thảm thương của voi, chuột không nỡ ra tay. Nó thấy làm vậy thì có phần quá tàn nhẫn; lương tâm mách bảo nó nên cứu voi. Thế là nó bắt đầu dùng hàm răng sắc bén gặm tấm lưới và dây thừng đang quấn quanh voi. Chẳng biết đã qua bao lâu, chuột gần như dùng hết sức lực, dây thừng cuối cùng cũng bị cắn đứt, tấm lưới lớn thủng một lỗ to, voi dồn sức một cái, thoát ra khỏi lưới.'},
    {sp:0,zh:'从此，老鼠和大象成了好朋友。',
     py:'Cóngcǐ, lǎoshǔ hé dàxiàng chéngle hǎo péngyou.',
     vn:'Từ đó, chuột và voi trở thành đôi bạn tốt.'},
    {sp:0,zh:'不久，山神找到了老鼠，要它回到自己身边。老鼠说：“这大概不可能了，我无法战胜大象。”山神说：“你化敌为友，创造了举世瞩目的成就，世界上还有比这更完美的胜利吗？”',
     py:'Bùjiǔ, shānshén zhǎodàole lǎoshǔ, yào tā huídào zìjǐ shēnbiān. Lǎoshǔ shuō: "Zhè dàgài bù kěnéng le, wǒ wúfǎ zhànshèng dàxiàng." Shānshén shuō: "Nǐ huà dí wéi yǒu, chuàngzàole jǔshì zhǔmù de chéngjiù, shìjiè shang hái yǒu bǐ zhè gèng wánměi de shènglì ma?"',
     vn:'Không lâu sau, thần núi tìm gặp chuột, bảo nó quay về bên mình. Chuột thưa: "E là không được nữa rồi, con không thể thắng được voi." Thần núi nói: "Con đã biến kẻ thù thành bạn, làm nên một thành tựu khiến cả thế gian phải chú ý. Trên đời này còn chiến thắng nào hoàn hảo hơn thế nữa chăng?"'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 恰巧—正好 lấy từ sách (tr. 48–49, 做一做 dạng đúng/sai); 发觉—发现, 摆脱—脱离 (ôn bài 2) tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'恰巧 — 正好',
   same:'Đều là phó từ, biểu thị thời gian vừa khớp, điều kiện trùng hợp đúng lúc. Ở vị trí phó từ trước động từ/mệnh đề thì thường thay nhau được.',
   sameEx:{zh:'我离开北京那一天，恰巧／正好是他到达北京的日子。',vn:'Ngày tôi rời Bắc Kinh cũng vừa khéo là ngày anh ấy đến Bắc Kinh.'},
   items:[
     {word:'恰巧',points:[
       'CHỈ là phó từ, nhấn mạnh sự NGẪU NHIÊN, tình cờ trùng hợp (về thời gian, điều kiện).',
       'Không đứng một mình, không làm vị ngữ, không làm bổ ngữ: không nói *我去的时间恰巧, *下得恰巧.',
       'Chỗ dùng 恰巧 đều thay được bằng 正好.'
     ],ex:[{zh:'我赶到上海找他时，他却恰巧出差了。',vn:'Khi tôi vội đến Thượng Hải tìm anh ấy thì anh ấy lại vừa khéo đi công tác.'},
          {zh:'我正愁没人帮忙，恰巧老王来了。',vn:'Tôi đang lo không có ai giúp thì vừa khéo anh Vương đến.'}]},
     {word:'正好',points:[
       'Phó từ: ngoài thời gian, điều kiện còn chỉ sự vừa khít về KHÔNG GIAN, THỂ TÍCH, SỐ LƯỢNG — nhấn mạnh sự VỪA VẶN, thích hợp.',
       'Còn là TÍNH TỪ: đứng một mình trả lời được (正好。), làm vị ngữ, làm bổ ngữ sau 得 (来得正好).'
     ],ex:[{zh:'交了房租剩下的钱正好留着交学费。',vn:'Trả tiền nhà xong, số tiền còn lại vừa đủ để dành đóng học phí.'},
          {zh:'两个人一间，我们十个人，正好是五个房间。',vn:'Hai người một phòng, chúng ta mười người, vừa đúng năm phòng.'},
          {zh:'你来得正好，我们刚开始吃饭。',vn:'Cậu đến đúng lúc lắm, bọn mình vừa bắt đầu ăn.'}]}
   ],
   quiz:[
     {sentence:'我去找他的时候，他＿＿不在家。',options:['恰巧','正好'],answer:0,both:true,
      why:'Phó từ trước động từ, chỉ thời gian trùng hợp ngẫu nhiên — cả hai đều được.'},
     {sentence:'这双鞋我穿着＿＿，不大也不小。',options:['恰巧','正好'],answer:1,
      why:'Làm vị ngữ, chỉ kích cỡ vừa vặn — chỉ tính từ 正好.'},
     {sentence:'我们一共八个人，＿＿坐满两张桌子。',options:['恰巧','正好'],answer:1,
      why:'Số lượng vừa khít (tám người = hai bàn) — nghĩa "vừa vặn" chỉ 正好 có.'},
     {sentence:'你来得＿＿，快帮我搬一下这个箱子。',options:['恰巧','正好'],answer:1,
      why:'Làm bổ ngữ sau 得 — 恰巧 không làm bổ ngữ được.'}
   ],
   sgk:{
     chung:{t:'都可以表示时间刚好吻合，某个条件碰巧一致。',vn:'Đều có thể biểu thị thời gian vừa khớp, một điều kiện nào đó trùng hợp đúng lúc.',vd:'我离开北京那一天，恰巧／正好是他到达北京的日子。',vdVn:'Ngày tôi rời Bắc Kinh cũng vừa khéo là ngày anh ấy đến Bắc Kinh.'},
     khac:[
       {a:{t:'副词，侧重指时间、条件，重在偶然凑巧。（可以替换成“正好”）',vn:'Phó từ, thiên về thời gian, điều kiện, nhấn mạnh sự ngẫu nhiên tình cờ (thay được bằng 正好).',vd:'①我赶到上海找他时，他却恰巧出差了。　②我正愁没人帮忙，恰巧老王来了。',vdVn:'① Khi tôi vội đến Thượng Hải tìm anh ấy thì anh ấy lại vừa khéo đi công tác. ② Tôi đang lo không có ai giúp thì vừa khéo anh Vương đến.'},
        b:{t:'副词，除了时间、条件以外，还可以指空间、体积、数量等的巧合，重在合宜。',vn:'Phó từ, ngoài thời gian, điều kiện còn chỉ sự vừa khít về không gian, thể tích, số lượng…, nhấn mạnh sự vừa vặn.',vd:'①交了房租剩下的钱正好留着交学费。　②两个人一间，我们十个人，正好是五个房间。',vdVn:'① Trả tiền nhà xong, số tiền còn lại vừa đủ để dành đóng học phí. ② Hai người một phòng, chúng ta mười người, vừa đúng năm phòng.'}},
       {a:{t:'只能是副词，不能单说或单独做谓语。',vn:'Chỉ là phó từ, không nói đứng một mình, không làm vị ngữ độc lập.',vd:'*我去的时间恰巧。（×）',vdVn:'Không nói: 我去的时间恰巧 (sai).'},
        b:{t:'还是形容词，可以单说或单独做谓语。',vn:'Còn là tính từ, có thể đứng một mình hoặc làm vị ngữ độc lập.',vd:'①你来得正好，我们刚开始吃饭。　②A：这件衣服你穿怎么样？B：正好。',vdVn:'① Cậu đến đúng lúc lắm, bọn mình vừa bắt đầu ăn. ② A: Cái áo này cậu mặc thế nào? B: Vừa khít.'}}
     ],
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'这块布正好够做一件衬衫，一点儿都不浪费。',dap:[true,false],
        giai:'ĐÚNG. 正好 chỉ số lượng vừa khít (miếng vải vừa đủ may một chiếc áo) — nghĩa "vừa vặn" của 正好.'},
       {s:'这场雨下得恰巧，及时缓解了土地的干旱问题。',dap:[false,true],
        giai:'SAI. 恰巧 chỉ là phó từ, không làm bổ ngữ sau 得. Sửa: 这场雨下得正好.'},
       {s:'朋友来北京看我，可我恰巧没空儿，真遗憾。',dap:[true,false],
        giai:'ĐÚNG. 恰巧 là phó từ đứng trước vị ngữ, nhấn mạnh sự trùng hợp ngẫu nhiên về thời gian.'},
       {s:'A：你觉得水温怎么样，合适吗？　B：正好，不冷也不热。',dap:[true,false],
        giai:'ĐÚNG. 正好 là tính từ, đứng một mình làm câu trả lời được (nước ấm vừa phải).'}
     ]
   }},

  {pair:'发觉 — 发现',
   same:'Đều là động từ, nghĩa "nhận ra, phát hiện ra" điều trước đó chưa biết; tân ngữ có thể là mệnh đề. Khi nói về việc nhận ra trong đời thường thì thay nhau được.',
   sameEx:{zh:'走出教室以后，我才发觉／发现手机忘在桌子上了。',vn:'Ra khỏi lớp rồi tôi mới nhận ra đã để quên điện thoại trên bàn.'},
   items:[
     {word:'发觉',points:[
       'Thiên về CẢM NHẬN, ý thức ra trong lòng (thường là điều trước đó không để ý, điều không hay).',
       'Không dùng cho phát hiện khoa học, phát hiện ra vật mới: không nói *发觉新星.',
       'Không làm danh từ.'
     ],ex:[{zh:'老鼠一来到动物界，便发觉它对山神的承诺是多么草率。',vn:'Chuột vừa đến thế giới động vật đã nhận ra lời hứa của mình với thần núi thật khinh suất.'}]},
     {word:'发现',points:[
       'Phạm vi rộng hơn: nhìn thấy, tìm thấy, nhận ra — cả điều cụ thể lẫn trừu tượng.',
       'Dùng cho phát hiện khoa học: 发现新星, 发现了一种新的植物.',
       'Còn làm DANH TỪ: 一个重大发现 (một phát hiện lớn).'
     ],ex:[{zh:'科学家发现了一种新的植物。',vn:'Các nhà khoa học đã phát hiện ra một loài thực vật mới.'},
          {zh:'这是考古学上的一个重大发现。',vn:'Đây là một phát hiện lớn của ngành khảo cổ.'}]}
   ],
   quiz:[
     {sentence:'他一直在说谎，可是大家都没有＿＿。',options:['发觉','发现'],answer:0,both:true,
      why:'Nhận ra một điều trước đó không để ý — cả hai đều được.'},
     {sentence:'这是今年最重要的科学＿＿。',options:['发觉','发现'],answer:1,
      why:'Làm DANH TỪ (một phát hiện) — chỉ 发现.'},
     {sentence:'考古学家在这里＿＿了一座两千年前的古墓。',options:['发觉','发现'],answer:1,
      why:'Tìm thấy vật cụ thể qua khảo sát — dùng 发现, không dùng 发觉.'},
     {sentence:'聊了半天，我才＿＿自己说错话了，脸一下子红了。',options:['发觉','发现'],answer:0,both:true,
      why:'Tự ý thức ra lỗi của mình — cả hai đều được, 发觉 nhấn mạnh cảm nhận trong lòng.'}
   ]},

  {pair:'摆脱 — 脱离',
   same:'Đều có nghĩa "rời ra, thoát khỏi" một hoàn cảnh, một vật; tân ngữ thường là danh từ trừu tượng.',
   sameEx:{zh:'大象终于摆脱／脱离了巨网。',vn:'Voi cuối cùng cũng thoát khỏi tấm lưới lớn.'},
   items:[
     {word:'摆脱',points:[
       'Nhấn mạnh CHỦ ĐỘNG vùng ra khỏi thứ BẤT LỢI đang trói buộc, bám theo.',
       'Tân ngữ mang nghĩa xấu: 困境, 贫困, 追赶, 束缚, 烦恼, 压力.',
       'Hay dùng 摆脱不了 / 无法摆脱.'
     ],ex:[{zh:'每次小老鼠都能摆脱猫的追赶。',vn:'Lần nào chú chuột nhỏ cũng thoát khỏi sự truy đuổi của mèo.'},
          {zh:'经过全家人的努力，他们终于摆脱了贫困。',vn:'Nhờ sự cố gắng của cả nhà, họ cuối cùng đã thoát nghèo.'}]},
     {word:'脱离',points:[
       'Rời khỏi, tách khỏi một môi trường, một mối quan hệ, một trạng thái (từ của bài 2).',
       'Tân ngữ không nhất thiết là điều xấu: 脱离家庭, 脱离实际, 脱离群众.',
       'Cụm cố định: 脱离危险 (qua cơn nguy hiểm).'
     ],ex:[{zh:'经过抢救，病人已经脱离了危险。',vn:'Sau khi cấp cứu, bệnh nhân đã qua cơn nguy kịch.'},
          {zh:'写文章不能脱离实际。',vn:'Viết văn không được xa rời thực tế.'}]}
   ],
   quiz:[
     {sentence:'经过医生的抢救，他终于＿＿了危险。',options:['摆脱','脱离'],answer:1,
      why:'Cụm cố định 脱离危险 = qua cơn nguy hiểm.'},
     {sentence:'他想了很多办法，还是＿＿不了心里的烦恼。',options:['摆脱','脱离'],answer:0,
      why:'Chủ động vùng ra khỏi điều bất lợi đang đeo bám (烦恼) — 摆脱.'},
     {sentence:'学习理论不能＿＿实际。',options:['摆脱','脱离'],answer:1,
      why:'Tách rời khỏi thực tế — 脱离实际 (thực tế không phải điều xấu cần thoát).'},
     {sentence:'只有发展经济，这个地区才能真正＿＿贫困。',options:['摆脱','脱离'],answer:0,both:true,
      why:'摆脱贫困 là cách nói thường gặp nhất; 脱离贫困 cũng dùng được.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'残忍',hv:'tàn nhẫn',vn:'tàn nhẫn',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'良心',hv:'lương tâm',vn:'lương tâm',note:'Trùng khít — 良心不安 = lương tâm cắn rứt.'},
    {zh:'死亡',hv:'tử vong',vn:'chết, tử vong',note:'Trùng khít, cùng sắc thái trang trọng (tin tức, y học).'},
    {zh:'愤怒',hv:'phẫn nộ',vn:'phẫn nộ, tức giận',note:'Trùng khít.'},
    {zh:'愚蠢',hv:'ngu xuẩn',vn:'ngu ngốc',note:'Trùng khít — tiếng Việt "ngu xuẩn" cũng nặng như tiếng Trung.'},
    {zh:'蔑视',hv:'miệt thị',vn:'coi thường, khinh miệt',note:'Trùng khít.'},
    {zh:'悲惨',hv:'bi thảm',vn:'bi thảm, thảm thương',note:'Trùng khít.'},
    {zh:'猛烈',hv:'mãnh liệt',vn:'dữ dội',note:'Gần khít. Tiếng Việt "mãnh liệt" hay dùng cho tình cảm; tiếng Trung 猛烈 chủ yếu cho gió, lửa, tấn công, động tác.'},
    {zh:'实施',hv:'thực thi',vn:'thực hiện, thi hành',note:'Trùng khít — 实施计划 = thực thi kế hoạch.'},
    {zh:'对抗',hv:'đối kháng',vn:'đối đầu, chống lại',note:'Trùng khít.'},
    {zh:'抵抗',hv:'để kháng',vn:'chống cự',note:'Nhớ qua "sức đề kháng" (抵抗力) — chữ 抵 đọc Hán–Việt là "để".'},
    {zh:'流氓',hv:'lưu manh',vn:'lưu manh, côn đồ',note:'Trùng khít.'},
    {zh:'盲目',hv:'manh mục',vn:'mù quáng',note:'"Manh" = mù (như 盲人 manh nhân), "mục" = mắt → mắt mù → mù quáng.'}
  ],
  idiom:[
    {zh:'举世瞩目',hv:'cử thế chúc mục',vn:'cả thế giới chú ý',note:'"Cử thế" = toàn thế giới, "chúc mục" = dõi mắt nhìn. Gần với "vang danh bốn bể".'},
    {zh:'化敌为友',hv:'hóa địch vi hữu',vn:'biến kẻ thù thành bạn',note:'"Hóa" = biến thành, "vi" = làm → dịch sát từng chữ là hiểu.'},
    {zh:'不顾一切',hv:'bất cố nhất thiết',vn:'bất chấp tất cả',note:'"Bất cố" = không đoái hoài, "nhất thiết" = hết thảy.'}
  ],
  trap:[
    {zh:'发觉',hv:'phát giác',vn:'nhận ra, phát hiện ra',
     warn:'BẪY: tiếng Việt "phát giác" hay mang nghĩa tố giác, lật tẩy việc xấu. 发觉 tiếng Trung chỉ là "nhận ra" (我才发觉手机忘带了), không có nghĩa tố cáo.'},
    {zh:'草率',hv:'thảo suất',vn:'qua loa, khinh suất',
     warn:'草 ở đây không phải "cỏ" mà là "sơ sài, nháp" (như 草稿 = bản nháp). 草率 = làm qua loa, vội vàng.'},
    {zh:'家伙',hv:'gia hỏa',vn:'thằng, gã, thằng cha',
     warn:'Không liên quan "nhà" hay "lửa". Là từ khẩu ngữ chỉ người (coi thường hoặc đùa thân), 小家伙 = nhóc con.'},
    {zh:'可恶',hv:'khả ố',vn:'đáng ghét',
     warn:'Tiếng Việt "khả ố" rất nặng (ghê tởm). 可恶 tiếng Trung nhẹ hơn nhiều — còn dùng để trêu đùa (这只蚊子真可恶). Đọc kěwù, không đọc kě\'è.'},
    {zh:'未免',hv:'vị miễn',vn:'có hơi, có phần (quá)',
     warn:'Không phải "chưa được miễn". Là phó từ biểu thị chê nhẹ nhàng: 未免太贵了 = có hơi đắt quá.'},
    {zh:'盯',hv:'đinh',vn:'nhìn chằm chằm',
     warn:'Đừng nhầm với 钉 (cái đinh) — bộ 目 (mắt) cho biết 盯 là động tác của mắt.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá + 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'厌倦了',right:'宠物的生活'},
  {left:'证明',right:'自己的实力'},
  {left:'答应',right:'山神的条件'},
  {left:'实施',right:'计划'},
  {left:'乘',right:'大象不注意'},
  {left:'猛烈地',right:'打喷嚏'},
  {left:'用蔑视的眼光',right:'盯着它'},
  {left:'愚蠢的',right:'家伙'},
  {left:'耍',right:'流氓'},
  {left:'落入',right:'巨网'},
  {left:'不顾',right:'一切'},
  {left:'摆脱',right:'困境'},
  {left:'毫无',right:'抵抗能力'},
  {left:'重要',right:'部位'},
  {left:'悲惨的',right:'样子'},
  {left:'锋利的',right:'牙齿'},
  {left:'耗费',right:'力气'},
  {left:'创造',right:'举世瞩目的成就'},
  {left:'化敌',right:'为友'},
  {left:'遵守',right:'承诺'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'老鼠',blank:'厌倦',post:'了宠物的生活，于是向山神请假。',hint:'(chán ngán)',ans:'厌倦'},
  {pre:'他总是在背后说别人坏话，同学们都很',blank:'厌恶',post:'他。',hint:'(chán ghét)',ans:'厌恶'},
  {pre:'',blank:'倘若',post:'你还想回来，必须战胜大象，否则，你就永远留在动物世界吧。',hint:'(nếu như — văn viết)',ans:'倘若'},
  {pre:'走出教室以后，我才',blank:'发觉',post:'手机忘在桌子上了。',hint:'(nhận ra)',ans:'发觉'},
  {pre:'他一向说话算数，从来没有违背过自己的',blank:'承诺',post:'。',hint:'(lời hứa)',ans:'承诺'},
  {pre:'选专业是大事，千万不能',blank:'草率',post:'决定。',hint:'(vội vàng, qua loa)',ans:'草率'},
  {pre:'它是那么弱小，丝毫没有',blank:'对抗',post:'大象的力量。',hint:'(chống lại, đối đầu)',ans:'对抗'},
  {pre:'这道拿手菜我是第一次',blank:'尝试',post:'，没想到大家都说好吃。',hint:'(thử)',ans:'尝试'},
  {pre:'网上的消息不一定都是真的，千万别',blank:'盲目',post:'相信。',hint:'(mù quáng)',ans:'盲目'},
  {pre:'我可以',blank:'乘',post:'大象不注意，进到大象鼻子里去。',hint:'(nhân lúc)',ans:'乘'},
  {pre:'他一口气跑上了十楼，站在门口直',blank:'喘气',post:'。',hint:'(thở dốc)',ans:'喘气'},
  {pre:'孩子已经认识到错误了，你就',blank:'饶恕',post:'他这一次吧。',hint:'(tha thứ)',ans:'饶恕'},
  {pre:'倘若你对一件事毫无兴趣，那么有人',blank:'强迫',post:'你做时，你会觉得痛苦。',hint:'(ép buộc)',ans:'强迫'},
  {pre:'新的交通规定从下个月起正式',blank:'实施',post:'。',hint:'(thực thi)',ans:'实施'},
  {pre:'我只想和她开个玩笑，',blank:'不料',post:'她却生气了。',hint:'(không ngờ)',ans:'不料'},
  {pre:'下半场我们发起了',blank:'猛烈',post:'的进攻，终于攻入了一球。',hint:'(dữ dội)',ans:'猛烈'},
  {pre:'老鼠像',blank:'子弹',post:'一样被射了出来。',hint:'(viên đạn)',ans:'子弹'},
  {pre:'不要',blank:'蔑视',post:'任何一个对手，哪怕他看起来很弱小。',hint:'(coi thường)',ans:'蔑视'},
  {pre:'你买的这件衣服真漂亮，你真有',blank:'眼光',post:'！',hint:'(con mắt, tầm nhìn)',ans:'眼光'},
  {pre:'他一整天都',blank:'盯',post:'着电脑屏幕，眼睛都红了。',hint:'(nhìn chằm chằm)',ans:'盯'},
  {pre:'听说有人虐待小动物，网友们都感到十分',blank:'愤怒',post:'。',hint:'(phẫn nộ)',ans:'愤怒'},
  {pre:'我竟然把钥匙锁在了车里，真是太',blank:'愚蠢',post:'了。',hint:'(ngu ngốc)',ans:'愚蠢'},
  {pre:'这个小',blank:'家伙',post:'才三岁，就会背二十首唐诗了。',hint:'(nhóc, thằng — khẩu ngữ)',ans:'家伙'},
  {pre:'他骗了老人那么多钱，真是太',blank:'可恶',post:'了。',hint:'(đáng ghét)',ans:'可恶'},
  {pre:'他一不高兴就',blank:'耍',post:'脾气，大家都不愿意跟他合作。',hint:'(giở — tính khí, trò)',ans:'耍'},
  {pre:'几个小',blank:'流氓',post:'在路口欺负学生，被警察带走了。',hint:'(lưu manh)',ans:'流氓'},
  {pre:'书包里的面包被压',blank:'扁',post:'了。',hint:'(bẹp)',ans:'扁'},
  {pre:'我们坐在海边，静静地看着',blank:'夕阳',post:'慢慢落下。',hint:'(mặt trời chiều)',ans:'夕阳'},
  {pre:'一不',blank:'留神',post:'，猫还会上老鼠的当。',hint:'(chú ý, coi chừng)',ans:'留神'},
  {pre:'为了保护野生动物，这里已经禁止',blank:'打猎',post:'了。',hint:'(đi săn)',ans:'打猎'},
  {pre:'他',blank:'不顾',post:'危险，跳进河里救起了落水的孩子。',hint:'(bất chấp)',ans:'不顾'},
  {pre:'小鸟在网里拼命',blank:'挣扎',post:'，可怎么也飞不出去。',hint:'(vùng vẫy)',ans:'挣扎'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (乘机 · 不料 · 未免) ≥ 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['老鼠','乘机','跑进了','大象的','鼻子中','。'],ans:'老鼠乘机跑进了大象的鼻子中。',audio:'老鼠乘机跑进了大象的鼻子中。'},
  {words:['对方守门员','救球脱手','，','我们','乘机','攻入一球','。'],ans:'对方守门员救球脱手，我们乘机攻入一球。',audio:'对方守门员救球脱手，我们乘机攻入一球。'},
  {words:['妈妈不在家','，','孩子','乘机','玩起了','电脑游戏','。'],ans:'妈妈不在家，孩子乘机玩起了电脑游戏。',audio:'妈妈不在家，孩子乘机玩起了电脑游戏。'},
  {words:['我只想','和她开个玩笑','，','不料','她却','生气了','。'],ans:'我只想和她开个玩笑，不料她却生气了。',audio:'我只想和她开个玩笑，不料她却生气了。'},
  {words:['早上天气','还是好好的','，','不料','中午','下起了大雨','。'],ans:'早上天气还是好好的，不料中午下起了大雨。',audio:'早上天气还是好好的，不料中午下起了大雨。'},
  {words:['它觉得','那样','未免','太过残忍','。'],ans:'它觉得那样未免太过残忍。',audio:'它觉得那样未免太过残忍。'},
  {words:['这么小的屋子','一个月房租4500','，','价格','未免','太贵了','。'],ans:'这么小的屋子一个月房租4500，价格未免太贵了。',audio:'这么小的屋子一个月房租4500，价格未免太贵了。'},
  {words:['大象','用蔑视的眼光','盯着','它','。'],ans:'大象用蔑视的眼光盯着它。',audio:'大象用蔑视的眼光盯着它。'},
  {words:['它','不顾一切地','用力','挣扎','。'],ans:'它不顾一切地用力挣扎。',audio:'它不顾一切地用力挣扎。'},
  {words:['大象现在','毫无','抵抗能力','。'],ans:'大象现在毫无抵抗能力。',audio:'大象现在毫无抵抗能力。'},
  {words:['老鼠','几乎','耗费了','全部力气','。'],ans:'老鼠几乎耗费了全部力气。',audio:'老鼠几乎耗费了全部力气。'},
  {words:['你化敌为友','，','创造了','举世瞩目的','成就','。'],ans:'你化敌为友，创造了举世瞩目的成就。',audio:'你化敌为友，创造了举世瞩目的成就。'},
  {words:['恰巧','，','老鼠','看到了','这一切','。'],ans:'恰巧，老鼠看到了这一切。',audio:'恰巧，老鼠看到了这一切。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ ĐÚNG
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'一只老鼠突然从厨房里____了出来。',opts:['窜','盯','耍','乘'],ans:0,
   exp:'Lao vụt ra (động vật chạy nhanh, lén lút) → 窜出来. 盯 là nhìn chằm chằm, 耍 là giở trò, 乘 là nhân lúc — không đi với 出来 theo nghĩa này.'},
  {wrong:'每次小老鼠都能____猫的追赶。',opts:['摆脱','对抗','抵抗','饶恕'],ans:0,
   exp:'Thoát khỏi sự truy đuổi → 摆脱追赶 (练习3 của sách). 对抗/抵抗 là chống lại (không nói 抵抗追赶), 饶恕 là tha thứ.'},
  {wrong:'大象又悲伤又害怕，它觉得____越来越近了。',opts:['死亡','缺口','部位','良心'],ans:0,
   exp:'Cái chết mỗi lúc một gần → 死亡越来越近. Các từ còn lại (lỗ hổng, bộ phận, lương tâm) không hợp nghĩa.'},
  {wrong:'我正愁没人帮忙，____老王来了。',opts:['恰巧','未免','毫无','盲目'],ans:0,
   exp:'Vừa khéo, tình cờ đúng lúc → 恰巧 (ví dụ trong phần 词语辨析). 未免 là chê nhẹ, 毫无 là hoàn toàn không có, 盲目 là mù quáng.'},
  {wrong:'大象现在____抵抗能力，只要我咬几个洞，它就没命了。',opts:['毫无','未免','不顾','恰巧'],ans:0,
   exp:'毫无 + danh từ trừu tượng = không có chút… nào: 毫无抵抗能力. 不顾 là bất chấp (không hợp nghĩa), 未免/恰巧 là phó từ.'},
  {wrong:'当人____力下降的时候，病毒就会乘机进入人的身体。',opts:['抵抗','对抗','挣扎','实施'],ans:0,
   exp:'抵抗力 = sức đề kháng (cụm cố định). Không có từ *对抗力, *挣扎力, *实施力.'},
  {wrong:'医生问我哪个____疼，我说是右腿。',opts:['部位','缺口','眼光','角色'],ans:0,
   exp:'Chỗ nào trên cơ thể → 部位. 缺口 là chỗ thủng của đồ vật, 眼光 là ánh mắt, 角色 là vai trò.'},
  {wrong:'听了她____的遭遇，大家都流下了眼泪。',opts:['悲惨','锋利','猛烈','草率'],ans:0,
   exp:'Cảnh ngộ bi thảm → 悲惨的遭遇. 锋利 (sắc), 猛烈 (dữ dội), 草率 (qua loa) không đi với 遭遇.'},
  {wrong:'这么小的屋子一个月房租4500，价格____太贵了。',opts:['未免','恰巧','毫无','不料'],ans:0,
   exp:'Chê nhẹ nhàng "có hơi quá đắt" → 未免太贵了 (练一练 của sách). 恰巧 chỉ sự trùng hợp, 不料 là liên từ đứng đầu vế sau.'},
  {wrong:'把小狗扔在路边不管，这种行为太____了。',opts:['残忍','锋利','盲目','扁'],ans:0,
   exp:'Hành vi nhẫn tâm → 残忍. 锋利 nói về dao/răng, 盲目 là mù quáng, 扁 là bẹp.'},
  {wrong:'____告诉它，应该救大象。',opts:['良心','眼光','部位','子弹'],ans:0,
   exp:'Lương tâm mách bảo → 良心告诉…… (nguyên văn bài khoá).'},
  {wrong:'这把刀非常____，用的时候要小心。',opts:['锋利','猛烈','悲惨','愤怒'],ans:0,
   exp:'Dao sắc → 锋利. 猛烈 dùng cho gió, lửa, tấn công; 悲惨, 愤怒 là trạng thái con người.'},
  {wrong:'老房子的墙上____着很多绿色的植物。',opts:['缠绕','挣扎','盯','窜'],ans:0,
   exp:'Cây leo quấn trên tường → 缠绕着. Các động từ khác (vùng vẫy, nhìn chằm chằm, lao vụt) không hợp.'},
  {wrong:'如果是你感兴趣的事情，无论____多少时间和精力，心里也都是快乐的。',opts:['耗费','摆脱','实施','饶恕'],ans:0,
   exp:'Tốn thời gian, công sức → 耗费时间和精力 (练习3 của sách).'},
  {wrong:'巨网出现了一个大____，大象猛地一用力，脱离了巨网。',opts:['缺口','部位','子弹','夕阳'],ans:0,
   exp:'Lưới thủng một lỗ → 出现了一个大缺口 (nguyên văn bài khoá).'},
  {wrong:'经过几十年的改革开放，中国经济取得了____的成就。',opts:['举世瞩目','不顾一切','化敌为友','滔滔不绝'],ans:0,
   exp:'Thành tựu cả thế giới chú ý → 举世瞩目的成就. 不顾一切 là bất chấp tất cả, 化敌为友 là biến thù thành bạn, 滔滔不绝 (bài 1) là nói thao thao.'},
  {wrong:'我们做好了一切准备，下个星期就去旅行，____他竟病倒了。',opts:['不料','恰巧','倘若','乘机'],ans:0,
   exp:'Vế sau xảy ra điều ngoài dự tính, có 竟 hô ứng → 不料……竟…… (ví dụ sách). 倘若 là giả thiết, 乘机 là nhân cơ hội.'},
  {wrong:'这么重要的事，我们千万不能____决定。',opts:['草率','猛烈','锋利','悲惨'],ans:0,
   exp:'Quyết định vội vàng, thiếu cân nhắc → 草率决定.'},
  {wrong:'科学家在这片森林里____了一种新的植物。',opts:['发现','发觉','发明','发展'],ans:0,
   exp:'Phát hiện khoa học (tìm thấy vật mới) chỉ dùng 发现; 发觉 thiên về cảm nhận ra trong lòng. 发明 là phát minh (tạo ra cái chưa có), 发展 là phát triển.'}
];

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu ghép, dùng từ bài 4 + ôn bài 1–3 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi vốn định nhân lúc bố mẹ không có nhà chơi game một lúc, không ngờ vừa mở máy tính thì mẹ đã về.',zh:'我本来想乘父母不在家玩一会儿游戏，不料刚打开电脑，妈妈就回来了。',py:'Wǒ běnlái xiǎng chéng fùmǔ bú zài jiā wán yíhuìr yóuxì, búliào gāng dǎkāi diànnǎo, māma jiù huílái le.',goiY:['乘','不料','刚……就……'],giai:'乘 + mệnh đề ngắn = nhân lúc…; 不料 dẫn ra điều ngoài dự tính, 刚……就…… nối hai việc xảy ra sát nhau. Không dịch "không ngờ" thành 不想.'},
  {vi:'Chỉ vì một lần thi không tốt mà đã muốn bỏ học tiếng Trung thì cậu có phần quá khinh suất rồi.',zh:'只因为一次考试没考好就想放弃学汉语，你未免太草率了。',py:'Zhǐ yīnwèi yí cì kǎoshì méi kǎohǎo jiù xiǎng fàngqì xué Hànyǔ, nǐ wèimiǎn tài cǎoshuài le.',goiY:['因为……就……','未免','草率'],giai:'(只)因为……就…… nhấn mạnh nguyên nhân quá nhỏ; 未免太 + tính từ tiêu cực + 了 = chê nhẹ nhàng "có phần quá…".'},
  {vi:'Nếu cậu đã hứa với bạn bè rồi thì nhất định phải giữ lời, nếu không là phụ lòng tin của bạn đấy.',zh:'倘若你已经对朋友做出了承诺，就必须遵守，否则就辜负了朋友的信任。',py:'Tǎngruò nǐ yǐjīng duì péngyou zuòchūle chéngnuò, jiù bìxū zūnshǒu, fǒuzé jiù gūfùle péngyou de xìnrèn.',goiY:['倘若……就……','承诺','否则','辜负'],giai:'倘若……就……，否则…… = nếu… thì…, nếu không thì… (giống lời thần núi trong bài); 辜负 (bài 3) = phụ lòng.'},
  {vi:'Tuy cô giáo nhìn chằm chằm vào cậu ấy bằng ánh mắt nghiêm khắc, cậu ấy vẫn thao thao bất tuyệt trình bày kế hoạch của mình.',zh:'虽然老师用严厉的眼光盯着他，但他仍旧滔滔不绝地讲着自己的计划。',py:'Suīrán lǎoshī yòng yánlì de yǎnguāng dīngzhe tā, dàn tā réngjiù tāotāo bù jué de jiǎngzhe zìjǐ de jìhuà.',goiY:['虽然……但……','眼光','盯着','滔滔不绝'],giai:'用 + ……的眼光 + 盯着 + ai = nhìn chằm chằm ai bằng ánh mắt…; 仍旧 (bài 3) = vẫn; 滔滔不绝 (bài 1) làm trạng ngữ cần 地.'},
  {vi:'Dù có tốn bao nhiêu thời gian và công sức, chỉ cần là việc mình thích thì mình đều thấy vô cùng vui, chưa bao giờ thấy chán.',zh:'无论耗费多少时间和精力，只要是自己喜欢的事，我都会觉得无比快乐，从来不会厌倦。',py:'Wúlùn hàofèi duōshao shíjiān hé jīnglì, zhǐyào shì zìjǐ xǐhuan de shì, wǒ dōu huì juéde wúbǐ kuàilè, cónglái bú huì yànjuàn.',goiY:['无论……都……','耗费','无比','厌倦'],giai:'无论 + từ nghi vấn (多少) …… 都 = bất kể… đều…; 无比 (bài 2) đứng trước tính từ = vô cùng.'},
  {vi:'Tôi muốn nhân dịp nghỉ lễ về quê thử nấu cho ông bà vài món sở trường, vì ông bà lúc nào cũng nhớ tôi.',zh:'我想乘放假回老家的机会，尝试给爷爷奶奶做几道拿手菜，因为他们一直惦记着我。',py:'Wǒ xiǎng chéng fàngjià huí lǎojiā de jīhuì, chángshì gěi yéye nǎinai zuò jǐ dào náshǒu cài, yīnwèi tāmen yìzhí diànjìzhe wǒ.',goiY:['乘……的机会','尝试','拿手菜','惦记'],giai:'乘 + ……的机会 = nhân dịp…; 拿手 (bài 1) = sở trường, 惦记 (bài 3) = nhớ, lo cho. Vế 因为 đặt sau để giải thích lý do.'},
  {vi:'Thay vì phí tiền vào việc chạy theo trào lưu một cách mù quáng, chi bằng để dành tiền đi du lịch cùng gia đình.',zh:'与其把钱耗费在盲目跟风上，不如存起来和家人一起去旅行。',py:'Yǔqí bǎ qián hàofèi zài mángmù gēnfēng shang, bùrú cún qǐlai hé jiārén yìqǐ qù lǚxíng.',goiY:['与其……不如……','耗费','盲目'],giai:'与其 A，不如 B = thay vì A thì chi bằng B (chọn B); 把钱耗费在…上 = phí tiền vào…'},
  {vi:'Tuy lần trước hai cậu cãi nhau to, nhưng cậu ấy đã thành thật xin lỗi rồi, cậu tha thứ cho cậu ấy đi, dù sao cứ đối đầu nhau mãi cũng chẳng có ý nghĩa gì.',zh:'虽然上次你们吵得很厉害，但他已经真诚地道歉了，你就原谅他吧，毕竟一直对抗下去毫无意义。',py:'Suīrán shàng cì nǐmen chǎo de hěn lìhai, dàn tā yǐjīng zhēnchéng de dàoqiàn le, nǐ jiù yuánliàng tā ba, bìjìng yìzhí duìkàng xiàqu háo wú yìyì.',goiY:['虽然……但……','毕竟','对抗','毫无'],giai:'毕竟 = dù sao thì (nêu lý do cốt lõi); 对抗下去 = cứ đối đầu tiếp; 毫无意义 = chẳng có ý nghĩa gì. Chuyện bạn bè dùng 原谅 (bài 2), không dùng 饶恕 (quá nặng).'},
  {vi:'Tôi cứ tưởng bài thuyết trình của mình sẽ bị các bạn coi thường, không ngờ mọi người không những không cười mà ngược lại còn vỗ tay nhiệt liệt.',zh:'我本以为自己的演讲会受到同学们的蔑视，不料大家不但没有笑，反而热烈地鼓起掌来。',py:'Wǒ běn yǐwéi zìjǐ de yǎnjiǎng huì shòudào tóngxuémen de mièshì, búliào dàjiā búdàn méiyǒu xiào, fǎn\'ér rèliè de gǔqǐ zhǎng lái.',goiY:['蔑视','不料','不但没有……反而……'],giai:'本以为……，不料…… = cứ tưởng…, không ngờ…; 不但没有……反而…… = không những không… mà ngược lại còn…; 鼓起掌来: 起来 tách đôi với li hợp từ 鼓掌.'},
  {vi:'Với những bạn từng bắt nạt mình, cứ ôm hận mãi trong lòng thì có phần mệt mỏi quá; nếu có thể biến thù thành bạn, chẳng phải đó mới là chiến thắng hoàn hảo nhất sao?',zh:'对于曾经欺负过自己的同学，一直怀恨在心未免太累了；倘若能化敌为友，那不就是最完美的胜利吗？',py:'Duìyú céngjīng qīfuguo zìjǐ de tóngxué, yìzhí huái hèn zài xīn wèimiǎn tài lèi le; tǎngruò néng huà dí wéi yǒu, nà bú jiù shì zuì wánměi de shènglì ma?',goiY:['未免','倘若','不就……吗'],giai:'对于 + đối tượng đặt đầu câu; 未免太…了 chê nhẹ; câu hỏi tu từ 不就是……吗 = chẳng phải là… sao (khẳng định mạnh) — dịch đúng giọng phản vấn, không dịch thành câu hỏi thật.'}
];

var translateDataRev = [
  {vi:'Chuột vừa chán ngán cuộc sống làm thú cưng, vừa ghét cái vai thú cưng, thế là xin phép thần núi đến thế giới động vật.',zh:'老鼠既厌倦了宠物的生活，又厌恶宠物这个角色，于是向山神请假去动物世界。',py:'Lǎoshǔ jì yànjuànle chǒngwù de shēnghuó, yòu yànwù chǒngwù zhège juésè, yúshì xiàng shānshén qǐngjià qù dòngwù shìjiè.',goiY:['既……又…… = vừa… vừa…','厌倦 = chán ngán','厌恶 = chán ghét','于是 = thế là, bèn'],giai:'既……又…… nối hai lý do song song; 于是 dẫn hành động xảy ra tiếp theo — dịch "thế là / bèn".'},
  {vi:'Chuột chỉ mong sao được đến thế giới động vật sớm một chút, nên đã khinh suất nhận lời thần núi: nếu muốn quay về thì trước hết phải thắng được voi.',zh:'老鼠巴不得早点儿去动物世界，于是草率地答应了山神：倘若想回来，就必须先战胜大象。',py:'Lǎoshǔ bābudé zǎo diǎnr qù dòngwù shìjiè, yúshì cǎoshuài de dāyingle shānshén: tǎngruò xiǎng huílái, jiù bìxū xiān zhànshèng dàxiàng.',goiY:['巴不得 = mong sao cho','草率 = khinh suất','倘若……就…… = nếu… thì…'],giai:'巴不得 (bài 1) = mong sao cho (mong mỏi mãnh liệt); 草率地 + V = làm vội vàng, thiếu suy nghĩ.'},
  {vi:'Chuột nhận ra mình không hề có chút sức lực nào để chống lại voi, nhưng nó vẫn quyết định thử một phen.',zh:'老鼠发觉自己丝毫没有对抗大象的力量，但它还是决定尝试一下。',py:'Lǎoshǔ fājué zìjǐ sīháo méiyǒu duìkàng dàxiàng de lìliang, dàn tā háishi juédìng chángshì yíxià.',goiY:['发觉 = nhận ra','丝毫没有 = không hề có chút nào','但……还是…… = nhưng vẫn'],giai:'对抗大象的力量: cụm động–tân làm định ngữ cho 力量 — dịch "sức lực để chống lại voi"; 还是 ở đây = vẫn (không phải "hay là").'},
  {vi:'Voi đang ăn lá cây thì chuột nhân cơ hội chạy vào vòi nó, chẳng ngờ voi hắt hơi một cái thật mạnh.',zh:'大象正在吃树叶，老鼠乘机跑进它的鼻子，不料大象猛烈地打了个喷嚏。',py:'Dàxiàng zhèngzài chī shùyè, lǎoshǔ chéngjī pǎojìn tā de bízi, búliào dàxiàng měngliè de dǎle ge pēntì.',goiY:['乘机 = nhân cơ hội','不料 = chẳng ngờ','猛烈 = dữ dội'],giai:'正在……，乘机…… = đang… thì nhân cơ hội…; 鼻子 của voi dịch là "vòi", không dịch "mũi".'},
  {vi:'Voi nhìn chằm chằm vào chuột bằng ánh mắt khinh miệt, giận dữ cảnh cáo nó lần sau còn giở trò lưu manh thì sẽ giẫm bẹp nó.',zh:'大象用蔑视的眼光盯着老鼠，愤怒地警告它下次再耍流氓就踩扁它。',py:'Dàxiàng yòng mièshì de yǎnguāng dīngzhe lǎoshǔ, fènnù de jǐnggào tā xià cì zài shuǎ liúmáng jiù cǎibiǎn tā.',goiY:['蔑视的眼光 = ánh mắt khinh miệt','盯着 = nhìn chằm chằm','耍流氓 = giở trò lưu manh','再……就…… = còn… thì…'],giai:'再……就…… diễn tả điều kiện – hậu quả (lời đe doạ); 踩扁 = giẫm + bẹp (bổ ngữ kết quả).'},
  {vi:'Voi sơ ý sa vào tấm lưới lớn; tuy nó bất chấp tất cả mà vùng vẫy, nhưng thế nào cũng không thoát ra được.',zh:'大象不留神落入了巨网，虽然它不顾一切地挣扎，却怎么也摆脱不了。',py:'Dàxiàng bù liú shén luòrùle jù wǎng, suīrán tā búgù yíqiè de zhēngzhá, què zěnme yě bǎituō bu liǎo.',goiY:['不留神 = sơ ý','不顾一切 = bất chấp tất cả','虽然……却…… = tuy… nhưng…','摆脱不了 = không thoát ra được'],giai:'虽然……却……: 却 đứng sau chủ ngữ (ở đây chủ ngữ ẩn); 怎么也 + bổ ngữ khả năng phủ định = thế nào cũng không…'},
  {vi:'Chuột vốn có thể nhân cơ hội cắn chết voi, thế nhưng nhìn dáng vẻ thảm thương của voi, nó bỗng mềm lòng, cảm thấy làm vậy thì có phần quá tàn nhẫn.',zh:'老鼠本来可以乘机咬死大象，然而看到大象悲惨的样子，它不由得心软了，觉得那样做未免太残忍了。',py:'Lǎoshǔ běnlái kěyǐ chéngjī yǎosǐ dàxiàng, rán\'ér kàndào dàxiàng bēicǎn de yàngzi, tā bùyóude xīnruǎn le, juéde nàyàng zuò wèimiǎn tài cánrěn le.',goiY:['本来 = vốn dĩ','乘机 = nhân cơ hội','不由得 = không kìm được','未免太…… = có phần quá…'],giai:'本来……，然而…… = vốn… thế nhưng…; 不由得 (bài 2) = bất giác, không kìm được; 未免 dịch "có phần / hơi quá".'},
  {vi:'Chú chuột vừa khéo đi ngang qua đã nghe theo tiếng gọi của lương tâm, không những không làm hại voi mà ngược lại còn dùng hàm răng sắc bén cắn đứt lưới.',zh:'恰巧路过的老鼠听从了良心的声音，不但没有伤害大象，反而用锋利的牙齿咬断了网绳。',py:'Qiàqiǎo lùguò de lǎoshǔ tīngcóngle liángxīn de shēngyīn, búdàn méiyǒu shānghài dàxiàng, fǎn\'ér yòng fēnglì de yáchǐ yǎoduànle wǎngshéng.',goiY:['恰巧 = vừa khéo','良心 = lương tâm','不但没有……反而…… = không những không… mà ngược lại còn…'],giai:'恰巧路过的 là định ngữ cho 老鼠 — dịch "chú chuột vừa khéo đi ngang qua"; 反而 chỉ kết quả trái ngược hẳn với dự đoán.'},
  {vi:'Dù chuột đã gần như dùng hết sức lực, nó vẫn không bỏ cuộc; mãi đến khi tấm lưới thủng một lỗ lớn, voi mới thoát khỏi nguy hiểm.',zh:'尽管老鼠几乎耗费了全部力气，它仍旧没有放弃，直到巨网出现了一个大缺口，大象才脱离了危险。',py:'Jǐnguǎn lǎoshǔ jīhū hàofèile quánbù lìqi, tā réngjiù méiyǒu fàngqì, zhídào jù wǎng chūxiànle yí ge dà quēkǒu, dàxiàng cái tuōlíle wēixiǎn.',goiY:['尽管……仍旧…… = dù… vẫn…','耗费 = tiêu tốn','直到……才…… = mãi đến… mới…','缺口 = lỗ hổng'],giai:'Câu ba vế: 尽管……仍旧…… (nhượng bộ) + 直到……才…… (thời điểm muộn); 脱离危险 (bài 2) = thoát khỏi nguy hiểm.'},
  {vi:'Thần núi cho rằng chuột sở dĩ giành được chiến thắng hoàn hảo không phải vì nó đã thắng một con voi hoàn toàn không còn sức chống cự, mà là vì nó đã biến kẻ thù thành bạn.',zh:'山神认为，老鼠之所以取得了完美的胜利，不是因为它战胜了毫无抵抗能力的大象，而是因为它化敌为友。',py:'Shānshén rènwéi, lǎoshǔ zhī suǒyǐ qǔdéle wánměi de shènglì, bú shì yīnwèi tā zhànshèngle háo wú dǐkàng nénglì de dàxiàng, ér shì yīnwèi tā huà dí wéi yǒu.',goiY:['之所以…… = sở dĩ…','不是……而是…… = không phải… mà là…','毫无抵抗能力 = hoàn toàn không có sức chống cự'],giai:'之所以 A，是因为 B được mở rộng thành 之所以 A，不是因为 B，而是因为 C — dịch "sở dĩ… không phải vì… mà là vì…"; định ngữ dài 毫无抵抗能力的 đặt sau danh từ khi dịch.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 51): 缩写课文 300 字
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'这篇小故事告诉我们一个道理：化敌为友，就是最大的胜利。请参考练习5，把课文缩写成300字左右的短文。缩写时注意写清楚故事发生的起因、经过、结果，最后要点明这个故事告诉我们的道理。',
  prompt:'Câu chuyện nhỏ này cho chúng ta một đạo lý: biến kẻ thù thành bạn chính là chiến thắng lớn nhất. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành đoạn văn khoảng 300 chữ. Khi tóm tắt, chú ý viết rõ nguyên nhân, diễn biến và kết quả của câu chuyện; cuối bài phải nêu rõ đạo lý mà câu chuyện muốn nói.',
  dan:[
    {hoi:'老鼠想当普通的动物，山神对老鼠提出了什么条件？',goiY:'①倘若……战胜大象 ②否则……'},
    {hoi:'老鼠的第一次尝试成功了吗？它是怎么做的？',goiY:'进入大象鼻子、打喷嚏、像子弹一样被射出来'},
    {hoi:'大象的反应是什么？',goiY:'蔑视、愤怒、愚蠢、可恶、踩扁'},
    {hoi:'当大象落入打猎者的巨网时，老鼠是怎么做的？',goiY:'①大象（挣扎、窜、摆脱、悲伤、害怕）②老鼠想（毫无抵抗力、咬几个洞、战胜、不忍下手、太过残忍）③老鼠（锋利、咬断）'},
    {hoi:'山神为什么说老鼠胜利了？',goiY:'化敌为友、举世瞩目'}
  ],
  tuNen:['倘若……否则……','乘','不料','蔑视','挣扎','毫无','未免','锋利','举世瞩目','化敌为友'],
  cauTruc:[
    {ten:'……，于是……', nhan:'于是', vd:'老鼠厌倦了宠物的生活，于是向山神请假，想去动物世界证明自己。', khi:'Câu MỞ — nêu NGUYÊN NHÂN (起因) của câu chuyện.'},
    {ten:'倘若……，就……，否则……', nhan:'倘若', vd:'倘若它还想回来，就必须战胜大象，否则只能永远留在动物世界。', khi:'Tóm tắt điều kiện của thần núi (dòng 1 bảng 练习5).'},
    {ten:'一天，……乘……', nhan:'乘', vd:'一天，它乘大象吃树叶的时候跑进了大象的鼻子。', khi:'Mở đầu phần DIỄN BIẾN (经过) — lần thử thứ nhất.'},
    {ten:'……。不料，……', nhan:'不料', vd:'不料，大象猛烈地打了个喷嚏，老鼠像子弹一样被射了出来。', khi:'Chuyển sang tình huống ngoài dự tính.'},
    {ten:'后来，……', nhan:'后来', vd:'后来，大象不留神落入了打猎者的巨网。', khi:'Nối sang sự kiện thứ hai theo trình tự thời gian.'},
    {ten:'可是……，……未免太……', nhan:'未免', vd:'可是看到大象悲惨的样子，老鼠觉得那样未免太残忍了。', khi:'Bước ngoặt trong suy nghĩ của nhân vật.'},
    {ten:'从此，…… / 这个故事告诉我们……', nhan:'从此', vd:'从此，它们成了好朋友。这个故事告诉我们：化敌为友，就是最大的胜利。', khi:'KẾT QUẢ (结果) + nêu ĐẠO LÝ ở câu cuối — đề bắt buộc.'}
  ],
  checklist:[
    'Đã viết đủ 起因 (vì sao chuột đến thế giới động vật) – 经过 (hai lần gặp voi) – 结果 (thành bạn) chưa?',
    'Có đủ 5 ý trong bảng 练习5 không (điều kiện của thần núi, lần thử đầu, phản ứng của voi, chuột cứu voi, lời thần núi)?',
    'Độ dài khoảng 300 chữ (250–350) chưa? Là TÓM TẮT bằng lời mình, không chép nguyên cả đoạn bài khoá.',
    'Đã dùng ít nhất 5 từ/cấu trúc của bài (倘若……否则, 乘, 不料, 未免, 毫无, 锋利…) chưa?',
    'Câu cuối có nêu rõ đạo lý "化敌为友，就是最大的胜利" chưa? Mở đoạn lùi 2 ô, dấu câu chiếm một ô?'
  ],
  model:{
    zh:'老鼠是山神的宠物，它厌倦了这种生活，想去动物世界证明自己的实力。山神提出了一个条件：倘若它还想回来，就必须战胜最强大的大象，否则就只能永远留在动物世界。老鼠一到动物世界，就发觉自己太弱小了，但它还是决定试一试。一天，它乘大象吃树叶的时候跑进了大象的鼻子。不料，大象猛烈地打了个喷嚏，老鼠像子弹一样被射了出来。大象用蔑视的眼光盯着它，愤怒地骂它是愚蠢、可恶的家伙，还说下次要踩扁它。后来，大象不留神落入了打猎者的巨网，它拼命挣扎，却怎么也摆脱不了。老鼠看到了这一切，心想大象现在毫无抵抗力，只要咬它几口，自己就胜利了。可是看到大象悲惨的样子，老鼠觉得那样未免太残忍了。于是，它用锋利的牙齿咬断了绳子，救出了大象。从此，它们成了好朋友。山神知道后说，老鼠化敌为友，创造了举世瞩目的成就，这就是最完美的胜利。这个故事告诉我们：化敌为友，就是最大的胜利。',
    py:'Lǎoshǔ shì shānshén de chǒngwù, tā yànjuànle zhè zhǒng shēnghuó, xiǎng qù dòngwù shìjiè zhèngmíng zìjǐ de shílì. Shānshén tíchūle yí ge tiáojiàn: tǎngruò tā hái xiǎng huílái, jiù bìxū zhànshèng zuì qiángdà de dàxiàng, fǒuzé jiù zhǐ néng yǒngyuǎn liú zài dòngwù shìjiè.Lǎoshǔ yí dào dòngwù shìjiè, jiù fājué zìjǐ tài ruòxiǎo le, dàn tā háishi juédìng shì yi shì. Yì tiān, tā chéng dàxiàng chī shùyè de shíhou pǎojìnle dàxiàng de bízi. Búliào, dàxiàng měngliè de dǎle ge pēntì, lǎoshǔ xiàng zǐdàn yíyàng bèi shèle chūlái. Dàxiàng yòng mièshì de yǎnguāng dīngzhe tā, fènnù de mà tā shì yúchǔn, kěwù de jiāhuo, hái shuō xià cì yào cǎibiǎn tā.Hòulái, dàxiàng bù liú shén luòrùle dǎlièzhě de jù wǎng, tā pīnmìng zhēngzhá, què zěnme yě bǎituō bu liǎo. Lǎoshǔ kàndàole zhè yíqiè, xīn xiǎng dàxiàng xiànzài háo wú dǐkànglì, zhǐyào yǎo tā jǐ kǒu, zìjǐ jiù shènglì le. Kěshì kàndào dàxiàng bēicǎn de yàngzi, lǎoshǔ juéde nàyàng wèimiǎn tài cánrěn le. Yúshì, tā yòng fēnglì de yáchǐ yǎoduànle shéngzi, jiùchūle dàxiàng. Cóngcǐ, tāmen chéngle hǎo péngyou.Shānshén zhīdào hòu shuō, lǎoshǔ huà dí wéi yǒu, chuàngzàole jǔshì zhǔmù de chéngjiù, zhè jiù shì zuì wánměi de shènglì. Zhège gùshi gàosu wǒmen: huà dí wéi yǒu, jiù shì zuì dà de shènglì.',
    vn:'Chuột là thú cưng của thần núi. Nó chán cuộc sống ấy, muốn đến thế giới động vật để chứng minh thực lực của mình. Thần núi đưa ra một điều kiện: nếu nó còn muốn quay về thì phải thắng được con voi mạnh nhất, nếu không thì chỉ có thể ở lại thế giới động vật mãi mãi.Vừa đến thế giới động vật, chuột đã nhận ra mình quá nhỏ yếu, nhưng nó vẫn quyết định thử. Một hôm, nó nhân lúc voi đang ăn lá cây chạy vào vòi voi. Chẳng ngờ voi hắt hơi một cái thật mạnh, chuột bị bắn văng ra như viên đạn. Voi nhìn chằm chằm vào nó bằng ánh mắt khinh miệt, giận dữ mắng nó là đồ ngu ngốc, đáng ghét, còn nói lần sau sẽ giẫm bẹp nó.Về sau, voi sơ ý sa vào tấm lưới lớn của thợ săn. Nó ra sức vùng vẫy nhưng thế nào cũng không thoát ra được. Chuột thấy hết mọi chuyện, nghĩ bụng bây giờ voi hoàn toàn không có sức chống cự, chỉ cần cắn nó mấy cái là mình thắng. Nhưng nhìn dáng vẻ thảm thương của voi, chuột thấy làm như vậy thì quá tàn nhẫn. Thế là nó dùng hàm răng sắc bén cắn đứt dây, cứu voi ra. Từ đó, hai con trở thành bạn tốt.Thần núi biết chuyện liền nói: chuột đã biến kẻ thù thành bạn, làm nên thành tựu khiến cả thế gian chú ý, đó chính là chiến thắng hoàn hảo nhất. Câu chuyện cho chúng ta biết: biến kẻ thù thành bạn chính là chiến thắng lớn nhất.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 「根据提示，简述课文主要内容」 (tr. 51)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Năm câu hỏi lấy đúng bảng <b>练习5 · 根据提示，简述课文主要内容</b> của sách. Bấm loa nghe câu hỏi, nhìn cột gợi ý rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Nói xong cả 5 câu là em đã kể lại được toàn bộ bài khoá.',
  questions:[
    {q_zh:'老鼠想当普通的动物，山神对老鼠提出了什么条件？',
     q_vn:'Chuột muốn làm một con vật bình thường, thần núi đã đưa ra điều kiện gì với chuột?',
     hint:'①倘若……战胜大象 ②否则……',
     sample:'山神对老鼠说，倘若它还想回来，就必须战胜大象。否则，它就只能永远留在动物世界了。',
     sample_vn:'Thần núi nói với chuột rằng nếu nó còn muốn quay về thì phải thắng được voi. Nếu không thì nó chỉ có thể ở lại thế giới động vật mãi mãi.',
     note:'Nói trọn cấu trúc ba vế 倘若……，就必须……，否则…… — đây chính là cấu trúc 练习4 ① của sách.'},
    {q_zh:'老鼠的第一次尝试成功了吗？它是怎么做的？',
     q_vn:'Lần thử đầu tiên của chuột có thành công không? Nó đã làm thế nào?',
     hint:'进入大象鼻子、打喷嚏、像子弹一样被射出来',
     sample:'没有成功。老鼠乘大象吃树叶的时候进入了大象的鼻子，想让它喘不过气来。不料大象打了个喷嚏，老鼠像子弹一样被射了出来。',
     sample_vn:'Không thành công. Chuột nhân lúc voi đang ăn lá cây chui vào vòi voi, định làm voi không thở được. Chẳng ngờ voi hắt hơi một cái, chuột bị bắn văng ra như viên đạn.',
     note:'Trả lời CÓ/KHÔNG trước, rồi mới kể cách làm. Dùng 乘……的时候 và 不料 cho mạch lạc.'},
    {q_zh:'大象的反应是什么？',
     q_vn:'Phản ứng của voi thế nào?',
     hint:'蔑视、愤怒、愚蠢、可恶、踩扁',
     sample:'大象用蔑视的眼光盯着老鼠，愤怒地说它是个愚蠢的家伙，太可恶了，下次再这样就踩扁它。',
     sample_vn:'Voi nhìn chằm chằm vào chuột bằng ánh mắt khinh miệt, giận dữ nói nó là đồ ngu ngốc, thật đáng ghét, lần sau còn như thế thì sẽ giẫm bẹp nó.',
     note:'Chuyển lời trực tiếp thành lời kể: 你这个愚蠢的家伙 → 说它是个愚蠢的家伙.'},
    {q_zh:'当大象落入打猎者的巨网时，老鼠是怎么做的？',
     q_vn:'Khi voi sa vào tấm lưới lớn của thợ săn, chuột đã làm gì?',
     hint:'①大象（挣扎、窜、摆脱、悲伤、害怕）②老鼠想（毫无抵抗力、咬几个洞、战胜、不忍下手、太过残忍）③老鼠（锋利、咬断）',
     sample:'大象拼命挣扎，往外乱窜，却摆脱不了巨网，又悲伤又害怕。老鼠想，大象现在毫无抵抗力，只要咬几个洞就能战胜它。可是它不忍下手，觉得那样太过残忍，于是用锋利的牙齿咬断了绳子。',
     sample_vn:'Voi ra sức vùng vẫy, lao loạn ra ngoài nhưng không thoát khỏi tấm lưới, vừa đau buồn vừa sợ hãi. Chuột nghĩ, bây giờ voi hoàn toàn không có sức chống cự, chỉ cần cắn vài lỗ là thắng được nó. Nhưng nó không nỡ ra tay, thấy làm vậy quá tàn nhẫn, thế là dùng hàm răng sắc bén cắn đứt dây thừng.',
     note:'Gợi ý có 3 phần ①②③ — nói lần lượt: voi thế nào → chuột nghĩ gì → chuột làm gì. Nối bằng 可是, 于是.'},
    {q_zh:'山神为什么说老鼠胜利了？',
     q_vn:'Vì sao thần núi nói chuột đã chiến thắng?',
     hint:'化敌为友、举世瞩目',
     sample:'因为老鼠化敌为友，创造了举世瞩目的成就。山神认为，世界上没有比这更完美的胜利了。',
     sample_vn:'Vì chuột đã biến kẻ thù thành bạn, làm nên thành tựu khiến cả thế gian chú ý. Thần núi cho rằng trên đời không có chiến thắng nào hoàn hảo hơn thế.',
     note:'Câu hỏi 为什么 → mở đầu bằng 因为. Có thể thêm một câu nêu đạo lý của riêng em.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói ngắn)
// Sách HSK 6 không có sách bài tập nghe: 8 câu tự soạn theo dạng đề, dùng từ + chủ đề bài 4.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 4',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么又在看手机？作业写完了吗？'},
            {sp:'男',zh:'妈，您别老盯着我，我就休息五分钟，马上就写。'}],
     q:'男的是什么意思？',qvn:'Ý của người nam là gì?',
     opts:['他想休息一会儿再写作业','作业已经写完了','他不想写作业了','他在用手机查资料'],ans:0,
     why:'我就休息五分钟，马上就写 = chỉ nghỉ năm phút rồi viết ngay → nghỉ một lát rồi mới làm bài. 别老盯着我 = đừng cứ nhìn chằm chằm (giám sát) con.',
     words:['盯']},
    {n:2,
     lines:[{sp:'男',zh:'听说你把工作辞了？是不是太草率了？'},
            {sp:'女',zh:'我考虑了很久，实在厌倦了每天加班的生活，想尝试一下自己创业。'}],
     q:'女的为什么辞职？',qvn:'Vì sao người nữ nghỉ việc?',
     opts:['公司让她走','她厌倦了每天加班','她要出国留学','工资太低'],ans:1,
     why:'实在厌倦了每天加班的生活 = thật sự chán cảnh ngày nào cũng tăng ca. 草率 là lời người nam lo lắng, người nữ khẳng định đã suy nghĩ lâu.',
     words:['草率','厌倦','尝试']},
    {n:3,
     lines:[{sp:'女',zh:'小王今天怎么没来参加比赛？'},
            {sp:'男',zh:'别提了，他本来准备得挺充分的，不料昨天打篮球时扭伤了脚。'}],
     q:'小王为什么没来参加比赛？',qvn:'Vì sao Tiểu Vương không đến thi đấu?',
     opts:['他忘了时间','他准备得不充分','他的脚受伤了','他去打篮球了'],ans:2,
     why:'不料 dẫn ra điều bất ngờ: 扭伤了脚 = bị trẹo chân → chân bị thương. Chú ý 本来准备得挺充分 (vốn chuẩn bị rất kỹ) loại đáp án B.',
     words:['不料']},
    {n:4,
     lines:[{sp:'男',zh:'这家餐厅一碗面要八十块，未免太贵了吧？'},
            {sp:'女',zh:'贵是贵了点儿，不过味道确实是一流的。'}],
     q:'关于这家餐厅，可以知道什么？',qvn:'Về nhà hàng này, có thể biết điều gì?',
     opts:['面很便宜','面的味道很好','女的不喜欢这家餐厅','他们还没吃饭'],ans:1,
     why:'贵是贵了点儿，不过…… = đắt thì có đắt, nhưng…; 味道一流 (một từ của bài 3) = vị hạng nhất → món mì ngon.',
     words:['未免']},
    {n:5,
     lines:[{sp:'女',zh:'路上有冰，你开车千万要留神。'},
            {sp:'男',zh:'放心吧，我会慢慢开的，到了就给你打电话。'}],
     q:'女的提醒男的什么？',qvn:'Người nữ nhắc người nam điều gì?',
     opts:['别忘了打电话','开车要小心','早点儿出发','路上别停车'],ans:1,
     why:'留神 = coi chừng, cẩn thận. "Gọi điện" là lời hứa của người nam, không phải lời nhắc của người nữ.',
     words:['留神']},
    {n:6,
     lines:[{sp:'男',zh:'很多人以为，要战胜对手，就必须比对手更强大。其实不然。一个人倘若能放下仇恨，把对手变成朋友，他得到的将远远多于一次比赛的胜利。化敌为友，才是最完美的胜利。'}],
     q:'说话人认为什么是最完美的胜利？',qvn:'Người nói cho rằng thế nào là chiến thắng hoàn hảo nhất?',
     opts:['比对手更强大','赢得一次比赛','化敌为友','永远不犯错'],ans:2,
     why:'Câu kết của đoạn: 化敌为友，才是最完美的胜利. 其实不然 (thực ra không phải vậy) phủ định quan điểm "phải mạnh hơn đối thủ".',
     words:['倘若']},
    {n:7,
     lines:[{sp:'男',zh:'昨天你们班跟三班的足球赛怎么样？'},
            {sp:'女',zh:'上半场我们一直输一个球，下半场对方守门员救球脱手，我们乘机攻入一球，最后打成了平局。'}],
     q:'比赛结果怎么样？',qvn:'Kết quả trận đấu thế nào?',
     opts:['女的班赢了','三班赢了','两个班打平了','比赛没有结束'],ans:2,
     why:'打成了平局 = hòa. Đang thua một bàn, nhân cơ hội (乘机) ghi một bàn → hòa.',
     words:['乘']},
    {n:8,
     lines:[{sp:'女',zh:'那个小偷被抓住以后，一直请求大家饶恕他。'},
            {sp:'男',zh:'他偷的是一位老人的救命钱，这种行为太可恶了，不能轻易原谅。'}],
     q:'男的对小偷是什么态度？',qvn:'Người nam có thái độ thế nào với tên trộm?',
     opts:['同情他','觉得应该饶恕他','很愤怒，不想原谅他','不关心这件事'],ans:2,
     why:'太可恶了，不能轻易原谅 = quá đáng ghét, không thể dễ dàng tha thứ → phẫn nộ, không muốn tha. 请求饶恕 là việc của tên trộm.',
     words:['饶恕','可恶','愤怒']}
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG — đáp lời bắt buộc dùng từ / cấu trúc của bài
// ══════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp định bỏ học thêm môn Toán chỉ vì một lần thi kém.',
     a:{sp:'Bạn',zh:'我这次数学又没考好，干脆不学了。',vn:'Lần này tớ lại thi Toán không tốt, thôi bỏ luôn không học nữa.'},
     need:['Dùng 未免','Khuyên bạn thêm một câu'],
     sample:'就因为一次没考好就放弃，未免太草率了吧？再坚持一下试试。',
     samplePy:'Jiù yīnwèi yí cì méi kǎohǎo jiù fàngqì, wèimiǎn tài cǎoshuài le ba? Zài jiānchí yíxià shìshi.',
     sampleVn:'Chỉ vì một lần thi không tốt mà bỏ thì có hơi vội vàng quá không? Cố thêm chút nữa xem sao.',
     tip:'未免 chê nhẹ nhàng, lịch sự — hợp khi góp ý bạn bè. Sau 未免 thường là 太 / 有些 + tính từ tiêu cực.'},

    {scene:'Bạn hỏi vì sao hôm qua em không đi dã ngoại cùng lớp.',
     a:{sp:'Bạn',zh:'昨天的郊游你怎么没来？大家都在找你。',vn:'Chuyến dã ngoại hôm qua sao cậu không đến? Mọi người đều tìm cậu.'},
     need:['Dùng 不料','Kể điều bất ngờ đã xảy ra'],
     sample:'我本来都准备好了，不料早上突然发烧了，只好在家休息。',
     samplePy:'Wǒ běnlái dōu zhǔnbèi hǎo le, búliào zǎoshang tūrán fāshāo le, zhǐhǎo zài jiā xiūxi.',
     sampleVn:'Tớ vốn đã chuẩn bị xong hết rồi, chẳng ngờ sáng ra bỗng bị sốt, đành ở nhà nghỉ.',
     tip:'Vế trước nói điều dự tính (本来……), vế sau mới dùng 不料. 不料 không đứng ở vế đầu câu chuyện.'},

    {scene:'Bố mẹ vừa ra ngoài, em trai rủ em xem ti vi thay vì làm bài.',
     a:{sp:'Em trai',zh:'爸妈都出去了，我们看会儿电视吧！',vn:'Bố mẹ đi ra ngoài hết rồi, mình xem ti vi một lát đi!'},
     need:['Dùng 乘 hoặc 乘机','Từ chối khéo, đưa ra đề nghị khác'],
     sample:'别乘爸妈不在家就偷懒，先把作业写完再看吧。',
     samplePy:'Bié chéng bà mā bú zài jiā jiù tōulǎn, xiān bǎ zuòyè xiěwán zài kàn ba.',
     sampleVn:'Đừng nhân lúc bố mẹ vắng nhà mà lười, làm xong bài rồi hẵng xem.',
     tip:'乘 + mệnh đề (爸妈不在家) = nhân lúc…; 乘机 thì đứng ngay trước động từ: 乘机偷懒.'},

    {scene:'Bạn thân tức giận vì một bạn khác nói xấu sau lưng, muốn trả đũa.',
     a:{sp:'Bạn',zh:'他在背后说我坏话，我一定要让他好看！',vn:'Nó nói xấu tớ sau lưng, tớ nhất định phải cho nó biết tay!'},
     need:['Dùng 毫无 + 倘若','Khuyên bạn bình tĩnh, nhắc tới bài học của câu chuyện'],
     sample:'你别冲动，报复他也毫无意义。倘若能化敌为友，那才是真正的胜利。',
     samplePy:'Nǐ bié chōngdòng, bàofù tā yě háo wú yìyì. Tǎngruò néng huà dí wéi yǒu, nà cái shì zhēnzhèng de shènglì.',
     sampleVn:'Cậu đừng nóng, trả đũa nó cũng chẳng có ý nghĩa gì. Nếu biến được kẻ thù thành bạn thì đó mới là chiến thắng thật sự.',
     tip:'毫无 + danh từ trừu tượng hai âm tiết (意义, 办法, 兴趣); 倘若 là văn viết, nói chuyện dùng cũng được khi muốn trang trọng, nhấn mạnh.'},

    {scene:'Bạn đang ôm một chồng sách nặng, than không có ai giúp.',
     a:{sp:'Bạn',zh:'我正愁没人帮我搬书呢！',vn:'Tớ đang lo không có ai giúp tớ bê sách đây!'},
     need:['Dùng 恰巧 hoặc 正好','Nhận lời giúp'],
     sample:'我恰巧没事，来，我帮你搬吧。',
     samplePy:'Wǒ qiàqiǎo méi shì, lái, wǒ bāng nǐ bān ba.',
     sampleVn:'Tớ vừa khéo đang rảnh, nào, tớ bê giúp cậu.',
     tip:'恰巧 là phó từ, đứng trước vị ngữ. Muốn nói "đến đúng lúc" thì dùng 我来得正好, KHÔNG nói *来得恰巧.'}
  ]
};

// ══════════════════════════════════════════
// CHỌN CÁCH NÓI HỢP HOÀN CẢNH — cả hai câu đều đúng ngữ pháp
// ══════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Lên HSK 6, cái khó không còn là đúng/sai, mà là chọn được lời văn hợp với người nghe, hợp với văn nói hay văn viết.',
  items: [
    {scene:'Em viết bài tóm tắt (缩写) câu chuyện để nộp cho cô giáo.',
     a:'倘若你还想回来，必须战胜大象。',b:'要是你还想回来，得打赢大象。',better:'a',
     why:'倘若, 必须, 战胜 là từ văn viết, hợp với bài văn nộp cô. Câu b dùng 要是, 得, 打赢 là khẩu ngữ, nói chuyện thì hợp hơn.'},

    {scene:'Em than với bạn thân về con muỗi cắn cả đêm.',
     a:'这只蚊子真可恶，咬了我好几口！',b:'这只蚊子的行为令人厌恶，严重影响了我的休息。',better:'a',
     why:'可恶 dùng được với giọng đùa, rất tự nhiên khi nói với bạn. Câu b trịnh trọng như văn bản, nói với bạn nghe buồn cười.'},

    {scene:'Em đọc bản tin về một vụ tai nạn trên đài phát thanh của trường.',
     a:'这次事故没有造成人员死亡。',b:'这次事故没有人死。',better:'a',
     why:'Bản tin dùng 造成人员死亡 — trang trọng, khách quan. 没有人死 là khẩu ngữ, đọc trên đài nghe thiếu nghiêm túc.'},

    {scene:'Trong giờ thảo luận, em góp ý bài viết của một bạn.',
     a:'你的文章写得太长了，不好。',b:'你的文章写得不错，只是未免长了一些。',better:'b',
     why:'未免 + 长了一些 là lời chê uyển chuyển, khen trước chê sau — lịch sự, bạn dễ tiếp nhận. Câu a quá thẳng.'},

    {scene:'Em kể với bạn cùng lớp chuyện hôm qua đi tìm bạn ấy.',
     a:'我本来想去找你，不料你恰巧出门了。',b:'我本来想去找你，没想到你正好出门了。',better:'b',
     why:'Nói chuyện hằng ngày người ta hay dùng 没想到, 正好. 不料, 恰巧 sắc thái văn viết — đúng nhưng hơi "sách vở" khi nói.'},

    {scene:'Em viết thư xin lỗi thầy hiệu trưởng vì đã vi phạm nội quy.',
     a:'请您饶恕我这一次吧。',b:'恳请您原谅我这一次的过错。',better:'b',
     why:'饶恕 nặng nề như xin tha tội lớn. Thư xin lỗi thầy dùng 恳请……原谅 vừa trang trọng vừa đúng mức.'}
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI — theo đúng bảng 练习5 của sách
// ══════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể lại câu chuyện bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi, gợi ý và từ khoá của từng dòng bảng, bấm ghi âm rồi kể cả câu chuyện trong khoảng 2 phút.',
  outline: [
    {step:'老鼠想当普通的动物，山神对老鼠提出了什么条件？', cue:'①倘若……战胜大象 ②否则……', words:['厌倦','厌恶','倘若','承诺','草率']},
    {step:'老鼠的第一次尝试成功了吗？它是怎么做的？', cue:'进入大象鼻子、打喷嚏、像子弹一样被射出来', words:['尝试','乘','实施','不料','猛烈','子弹']},
    {step:'大象的反应是什么？', cue:'蔑视、愤怒、愚蠢、可恶、踩扁', words:['蔑视','眼光','盯','愤怒','愚蠢','家伙','可恶','扁']},
    {step:'当大象落入打猎者的巨网时，老鼠是怎么做的？', cue:'①大象（挣扎、窜、摆脱、悲伤、害怕）②老鼠想（毫无抵抗力、咬几个洞、战胜、不忍下手、太过残忍）③老鼠（锋利、咬断）', words:['留神','挣扎','窜','摆脱','毫无','抵抗','部位','未免','残忍','锋利','缠绕','耗费']},
    {step:'山神为什么说老鼠胜利了？', cue:'化敌为友、举世瞩目', words:['举世瞩目']}
  ],
  checklist: [
    'Kể đủ 5 ý theo 5 dòng của bảng 练习5 chưa, hay bỏ mất phần nào?',
    'Có nói rõ điều kiện của thần núi bằng 倘若……否则…… không?',
    'Lần thử đầu có dùng 乘 / 不料 để kể mạch lạc không?',
    'Đoạn cứu voi có đủ ba phần: voi vùng vẫy → chuột nghĩ gì → chuột cắn đứt lưới không?',
    'Câu cuối có nói được ĐẠO LÝ 化敌为友 không? Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 49–50) — đáp án theo sách giáo viên
// 练习1 模仿例子 (mr) · 练习2 用所给词语完成句子 (gx — sách không có đáp án cố định, câu mẫu tự soạn)
// 练习3 选词填空 hai đoạn (kho) · 练习4 模仿造句 (mp)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Theo mẫu, viết thêm nhiều từ khác (chứa chữ có dấu chấm, cùng nghĩa với chữ đó)',
   vd:{tu:'毫无', chu:'毫', ds:['毫不','毫厘','丝毫','分毫']},
   cau:[
     {tu:'发觉', chu:'觉', dap:['感觉','觉醒','觉悟','觉察'], them:['知觉','视觉','听觉','味觉','错觉','直觉','察觉'],
      giai:'觉 (jué) ở đây nghĩa là "cảm nhận, nhận biết bằng giác quan hay trong lòng" — 发觉 = nhận ra. Chú ý: 睡觉 đọc jiào, nghĩa khác, không tính.'},
     {tu:'猛烈', chu:'烈', dap:['热烈','激烈','剧烈','强烈'], them:['烈日','烈火','烈酒','惨烈','壮烈'],
      giai:'烈 nghĩa là "mạnh, dữ, gay gắt" — 猛烈 = dữ dội. 热烈 (sôi nổi), 激烈 (quyết liệt), 剧烈 (dữ dội — đau, vận động), 强烈 (mạnh mẽ).'},
     {tu:'眼光', chu:'眼', dap:['眼镜','眼睛','眼神','眼色'], them:['眼泪','眼前','亲眼','眨眼','眼熟','眼红'],
      giai:'眼 nghĩa là "con mắt" — 眼光 = ánh mắt. 眼神 (ánh mắt, thần sắc), 眼色 (ra hiệu bằng mắt), 眼镜 (kính đeo mắt).'},
     {tu:'夕阳', chu:'阳', dap:['太阳','阳光','阳台','阳历'], them:['朝阳','骄阳','向阳','斜阳','遮阳'],
      giai:'阳 nghĩa là "mặt trời" — 夕阳 = mặt trời chiều. 阳台 (ban công — chỗ có nắng), 阳历 (dương lịch — lịch theo mặt trời).'}
   ]},
  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (sách không có đáp án cố định — dưới đây là câu mẫu, em viết khác mà đúng từ, đúng nghĩa vẫn được)',
   cau:[
     {s:'我准备去图书馆好好复习功课，＿＿。', tu:'不料', dap:'我准备去图书馆好好复习功课，不料图书馆今天却不开门。',
      giai:'Vế trước là dự tính (định đến thư viện ôn bài), vế sau dùng 不料 + (却) nêu điều không ngờ.'},
     {s:'普普通通一顿饭花了这么多钱，＿＿。', tu:'未免', dap:'普普通通一顿饭花了这么多钱，未免太贵了。',
      giai:'未免 + 太 + tính từ tiêu cực + 了: nhận xét chê nhẹ "có hơi đắt quá".'},
     {s:'没吃早饭，正饿得不得了时，＿＿。', tu:'恰巧', dap:'没吃早饭，正饿得不得了时，恰巧同屋给我带回来两个包子。',
      giai:'恰巧 nhấn mạnh sự trùng hợp đúng lúc (đang đói thì vừa khéo có đồ ăn).'},
     {s:'＿＿，我将无比感激。', tu:'倘若', dap:'倘若您能帮我这个忙，我将无比感激。',
      giai:'倘若 + giả thiết đứng ở vế đầu; 将, 无比 (bài 2) đều là từ văn viết — cả câu hợp giọng trang trọng.'},
     {s:'妈妈不在家，孩子＿＿。', tu:'乘机', dap:'妈妈不在家，孩子乘机玩了一下午游戏。',
      giai:'乘机 là phó từ, đứng ngay sau chủ ngữ, trước động từ: 孩子乘机 + V.'},
     {s:'经过几十年的改革开放，中国经济＿＿。', tu:'举世瞩目', dap:'经过几十年的改革开放，中国经济取得了举世瞩目的成就。',
      giai:'举世瞩目 làm định ngữ: 取得了举世瞩目的成就 (cụm cố định).'}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ①)', tu:['愤怒','留神','摆脱','对抗','愚蠢'],
   cau:[
     {s:'《猫和老鼠》是很多小朋友都喜欢看的动画片，它讲了一只聪明的老鼠跟猫＿＿的故事。每次小老鼠都能＿＿猫的追赶，一不＿＿，猫还会上老鼠的当，被老鼠笑话一番，猫虽然很＿＿，却也没有办法。小老鼠用自己的智慧战胜了＿＿的猫。', dap:['对抗','摆脱','留神','愤怒','愚蠢']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ②)', tu:['毫无','强迫','倘若','耗费','厌恶'],
   cau:[
     {s:'我们的态度会决定做事情的心情。＿＿你对一件事＿＿兴趣，那么有人＿＿你做时，你会觉得痛苦和＿＿。而如果是你感兴趣的事情，无论＿＿多少时间和精力，心里也都是快乐的。', dap:['倘若','毫无','强迫','厌恶','耗费']}
   ]},
  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong sách được bọc trong 【】)',
   cau:[
     {mau:'动物世界中，大象是最强大的，【倘若】你还想回来，【必须】战胜大象，【否则】，你就永远留在动物世界吧。',
      khung:'没有人轻轻松松就能取得成功，倘若＿＿，必须＿＿，否则，＿＿。',
      dap:['你想实现自己的梦想','付出比别人更多的努力','你只能羡慕别人的成功'],
      giai:'倘若 + điều kiện/mong muốn，必须 + việc bắt buộc phải làm，否则 + hậu quả nếu không làm. Ba vế phải cùng nói về một chuyện.'},
     {mau:'它想，大象现在毫无抵抗能力，【只要】我在它身体的重要部位咬几个洞，它【就】没命了，我【不就】战胜大象了【吗】？【然而】，看到大象悲惨的样子，老鼠不忍下手，它觉得那样【未免】太过残忍，良心告诉它，应该救大象。',
      khung:'地上有个很大的钱包，周围也没有别人，只要＿＿，钱包就＿＿，我不就＿＿了吗？然而，想到丢钱包的人着急的样子，我觉得那样做未免太＿＿了，良心告诉我，应该把它还给它的主人。',
      dap:['我把它捡起来','是我的了','发财','自私'],
      giai:'只要……就…… (điều kiện đủ) + câu phản vấn 不就……了吗 (chẳng phải là… sao) + 然而 (bước ngoặt) + 未免太…… (tự đánh giá hành động là quá mức).'}
   ]}
];
