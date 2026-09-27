// ══════════════════════════════════════════
// DATA — HSK5 Bài 12: 海外用户玩儿微信 (Người dùng WeChat ở nước ngoài)
// Unit 4 走近科学 · Nguồn: HSK标准教程5上 (tr. 109–115) + 练习册 bài 12
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'用户',py:'yònghù',pos:'Danh từ',vn:'người dùng',hv:'dụng hộ',em:'👤',lesson:1,
   explain:['Người sử dụng một sản phẩm, dịch vụ (điện thoại, mạng, ứng dụng, điện nước…).'],
   usage:'Hay đi với: 注册用户, 手机用户, 老用户 / 新用户. Nói số lượng: 用户已经超过7000万, 用户数量.',
   collo:['注册用户','手机用户','用户数量','新用户'],
   ex_zh:'微信在海外注册用户已经超过7000万。',ex_py:'Wēixìn zài hǎiwài zhùcè yònghù yǐjīng chāoguò qīqiān wàn.',ex_vn:'Số người dùng đăng ký WeChat ở nước ngoài đã vượt 70 triệu.',
   exList:[
     {zh:'微信在海外注册用户已经超过7000万。',py:'Wēixìn zài hǎiwài zhùcè yònghù yǐjīng chāoguò qīqiān wàn.',vn:'Số người dùng đăng ký WeChat ở nước ngoài đã vượt 70 triệu.'},
     {zh:'这个应用的用户越来越多，连我奶奶都在用。',py:'Zhège yìngyòng de yònghù yuè lái yuè duō, lián wǒ nǎinai dōu zài yòng.',vn:'Người dùng ứng dụng này ngày càng nhiều, đến bà tôi cũng đang dùng.'},
     {zh:'公司很重视老用户的意见。',py:'Gōngsī hěn zhòngshì lǎo yònghù de yìjiàn.',vn:'Công ty rất coi trọng ý kiến của người dùng lâu năm.'}
   ],
   colloFull:[
     {zh:'注册用户',py:'zhùcè yònghù',vn:'người dùng đã đăng ký'},
     {zh:'手机用户',py:'shǒujī yònghù',vn:'người dùng điện thoại'},
     {zh:'用户数量',py:'yònghù shùliàng',vn:'số lượng người dùng'},
     {zh:'新用户',py:'xīn yònghù',vn:'người dùng mới'},
     {zh:'海外用户',py:'hǎiwài yònghù',vn:'người dùng ở nước ngoài'}
   ],
   patterns:[
     {s:'……的用户 + 越来越多',m:'Người dùng của … ngày càng nhiều'},
     {s:'用户 + 超过 + số lượng',m:'Số người dùng vượt quá …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người dùng ứng dụng này ngày càng nhiều.',answer:'这个应用的用户越来越多。',answerPy:'Zhège yìngyòng de yònghù yuè lái yuè duō.',
      note:'越来越 + tính từ đứng sau chủ ngữ 用户: 用户越来越多.',pair:'越来越'},
     {promptLang:'vi',prompt:'Chỉ cần đăng ký là bạn sẽ trở thành người dùng của chúng tôi.',answer:'只要注册，你就能成为我们的用户。',answerPy:'Zhǐyào zhùcè, nǐ jiù néng chéngwéi wǒmen de yònghù.',
      note:'成为 + N: trở thành …; 就 đứng sau chủ ngữ 你 ở vế sau.',pair:'只要……就……'}
   ]},

  {n:2,zh:'颠球',py:'diān qiú',pos:'Động từ',vn:'tâng bóng',hv:'điên cầu',em:'⚽',lesson:1,
   explain:['Dùng chân, đầu… tâng quả bóng liên tục cho nó không rơi xuống đất — kỹ thuật cơ bản của bóng đá.','颠 = làm nảy lên, 球 = bóng. Là cụm động–tân nên tách ra được: 颠着球.'],
   usage:'Động–tân, chen được 着 / 了 vào giữa: 边颠着球边拍. Làm định ngữ: 颠球技术, 颠球比赛.',
   collo:['颠球技术','边颠着球边拍','会颠球','连续颠球'],
   ex_zh:'梅西用微信直播自己的颠球技术。',ex_py:'Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',ex_vn:'Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.',
   exList:[
     {zh:'梅西用微信直播自己的颠球技术。',py:'Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',vn:'Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.'},
     {zh:'他举着手机，边颠着球边拍。',py:'Tā jǔzhe shǒujī, biān diānzhe qiú biān pāi.',vn:'Anh ấy giơ điện thoại lên, vừa tâng bóng vừa quay.'},
     {zh:'我弟弟练了一个月，现在能连续颠球五十下。',py:'Wǒ dìdi liànle yí ge yuè, xiànzài néng liánxù diān qiú wǔshí xià.',vn:'Em trai tôi tập một tháng, giờ đã tâng bóng liên tục được năm mươi lần.'}
   ],
   colloFull:[
     {zh:'颠球技术',py:'diān qiú jìshù',vn:'kỹ thuật tâng bóng'},
     {zh:'边颠着球边拍',py:'biān diānzhe qiú biān pāi',vn:'vừa tâng bóng vừa quay'},
     {zh:'会颠球',py:'huì diān qiú',vn:'biết tâng bóng'},
     {zh:'连续颠球',py:'liánxù diān qiú',vn:'tâng bóng liên tục'}
   ],
   patterns:[
     {s:'边 + 颠着球 + 边 + V',m:'Vừa tâng bóng vừa làm gì'},
     {s:'颠球 + số + 下',m:'Tâng bóng được bao nhiêu lần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Messi vừa tâng bóng vừa quay video bằng điện thoại.',answer:'梅西一边颠着球一边用手机拍视频。',answerPy:'Méixī yìbiān diānzhe qiú yìbiān yòng shǒujī pāi shìpín.',
      note:'Hai hành động cùng lúc: 一边……一边……; 着 chen vào giữa 颠 và 球.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Kỹ thuật tâng bóng của cậu ấy giỏi đến mức ngay cả huấn luyện viên cũng giật mình.',answer:'他的颠球技术好得连教练都吃了一惊。',answerPy:'Tā de diān qiú jìshù hǎo de lián jiàoliàn dōu chīle yì jīng.',
      note:'Bổ ngữ trạng thái 好得 + 连……都…… để nhấn mạnh mức độ.',pair:'连……都……'}
   ]},

  {n:3,zh:'明星',py:'míngxīng',pos:'Danh từ',vn:'ngôi sao (người nổi tiếng)',hv:'minh tinh',em:'🌟',lesson:1,
   explain:['Người rất nổi tiếng trong một lĩnh vực: điện ảnh, ca nhạc, thể thao…'],
   usage:'Ghép với lĩnh vực: 足球明星, 电影明星, 体育明星; 当地明星. Lượng từ: 位 / 个.',
   collo:['足球明星','电影明星','当地明星','追明星'],
   ex_zh:'国际足球明星梅西用微信直播自己的颠球技术。',ex_py:'Guójì zúqiú míngxīng Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',ex_vn:'Ngôi sao bóng đá quốc tế Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.',
   exList:[
     {zh:'国际足球明星梅西用微信直播自己的颠球技术。',py:'Guójì zúqiú míngxīng Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',vn:'Ngôi sao bóng đá quốc tế Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.'},
     {zh:'微信邀请当地明星和名人代言。',py:'Wēixìn yāoqǐng dāngdì míngxīng hé míngrén dàiyán.',vn:'WeChat mời ngôi sao và người nổi tiếng bản địa làm đại diện.'},
     {zh:'我妹妹特别喜欢追明星，房间里贴满了他们的照片。',py:'Wǒ mèimei tèbié xǐhuan zhuī míngxīng, fángjiān li tiēmǎnle tāmen de zhàopiàn.',vn:'Em gái tôi rất mê thần tượng, phòng dán đầy ảnh của họ.'}
   ],
   colloFull:[
     {zh:'足球明星',py:'zúqiú míngxīng',vn:'ngôi sao bóng đá'},
     {zh:'电影明星',py:'diànyǐng míngxīng',vn:'ngôi sao điện ảnh'},
     {zh:'当地明星',py:'dāngdì míngxīng',vn:'ngôi sao bản địa'},
     {zh:'追明星',py:'zhuī míngxīng',vn:'hâm mộ, “đu” thần tượng'},
     {zh:'一位明星',py:'yí wèi míngxīng',vn:'một ngôi sao'}
   ],
   patterns:[
     {s:'lĩnh vực + 明星',m:'Ngôi sao của lĩnh vực nào (足球明星, 电影明星)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngôi sao bóng đá này không những đá hay mà còn rất khiêm tốn.',answer:'这位足球明星不但踢得好，而且很谦虚。',answerPy:'Zhè wèi zúqiú míngxīng búdàn tī de hǎo, érqiě hěn qiānxū.',
      note:'Lượng từ lịch sự cho người: 位. 不但……而且…… nối hai ý tăng tiến.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Cậu ấy được mọi người gọi là ngôi sao bóng rổ của trường.',answer:'他被大家称为学校的篮球明星。',answerPy:'Tā bèi dàjiā chēngwéi xuéxiào de lánqiú míngxīng.',
      note:'被 + người + 称为 + danh xưng: được ai gọi là … (giống 被称为“微信之父” trong bài).',pair:'被'}
   ]},

  {n:4,zh:'直播',py:'zhíbō',pos:'Động từ',vn:'phát sóng trực tiếp',hv:'trực bá',em:'📡',lesson:1,
   explain:['Phát hình ảnh, âm thanh ngay lúc sự việc đang diễn ra (trên TV, trên mạng). Ngày nay còn chỉ việc “livestream”.'],
   usage:'Mang tân ngữ: 直播比赛, 直播晚会. Làm định ngữ: 直播节目. Khẩu ngữ mạng: 看直播, 开直播.',
   collo:['直播比赛','现场直播','看直播','网上直播'],
   ex_zh:'今晚电视台会直播这场足球比赛。',ex_py:'Jīn wǎn diànshìtái huì zhíbō zhè chǎng zúqiú bǐsài.',ex_vn:'Tối nay đài truyền hình sẽ phát trực tiếp trận bóng đá này.',
   exList:[
     {zh:'今晚电视台会直播这场足球比赛。',py:'Jīn wǎn diànshìtái huì zhíbō zhè chǎng zúqiú bǐsài.',vn:'Tối nay đài truyền hình sẽ phát trực tiếp trận bóng đá này.'},
     {zh:'梅西用微信直播自己的颠球技术。',py:'Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',vn:'Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.'},
     {zh:'现在很多人在网上直播卖东西。',py:'Xiànzài hěn duō rén zài wǎng shang zhíbō mài dōngxi.',vn:'Bây giờ nhiều người livestream bán hàng trên mạng.'}
   ],
   colloFull:[
     {zh:'直播比赛',py:'zhíbō bǐsài',vn:'phát trực tiếp trận đấu'},
     {zh:'现场直播',py:'xiànchǎng zhíbō',vn:'truyền hình trực tiếp tại hiện trường'},
     {zh:'看直播',py:'kàn zhíbō',vn:'xem trực tiếp, xem livestream'},
     {zh:'网上直播',py:'wǎng shang zhíbō',vn:'phát trực tiếp trên mạng'},
     {zh:'直播节目',py:'zhíbō jiémù',vn:'chương trình trực tiếp'}
   ],
   patterns:[
     {s:'用 + công cụ + 直播 + N',m:'Dùng … để phát trực tiếp cái gì'},
     {s:'现场 / 网上 + 直播',m:'Phát trực tiếp tại hiện trường / trên mạng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trận đấu này được phát trực tiếp trên mạng.',answer:'这场比赛是在网上直播的。',answerPy:'Zhè chǎng bǐsài shì zài wǎng shang zhíbō de.',
      note:'Nhấn mạnh NƠI của việc đã xảy ra: 是 + 在网上 + 直播 + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vừa bắt đầu phát trực tiếp là đã có mười nghìn người vào xem.',answer:'直播一开始，就有一万人进来看了。',answerPy:'Zhíbō yì kāishǐ, jiù yǒu yíwàn rén jìnlái kàn le.',
      note:'一 + V1，就 + V2: vừa … là …; 一万 đọc yíwàn.',pair:'一……就……'}
   ]},

  {n:5,zh:'宝贝',py:'bǎobèi',pos:'Danh từ',vn:'cục cưng, bé yêu; bảo bối',hv:'bảo bối',em:'👶',lesson:1,
   explain:['① Vật quý giá. ② Cách gọi yêu trẻ nhỏ (hoặc người yêu): 小宝贝, 宝贝儿.'],
   usage:'Gọi trẻ con: 小宝贝, 宝贝女儿. Nói đồ quý: 这些邮票是他的宝贝. Mẫu 把……当宝贝 = coi như báu vật.',
   collo:['小宝贝','宝贝女儿','当宝贝'],
   ex_zh:'梅西把手机另一头一个正在哭的小宝贝逗笑了。',ex_py:'Méixī bǎ shǒujī lìng yì tóu yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào le.',ex_vn:'Messi chọc cho em bé đang khóc ở đầu bên kia điện thoại bật cười.',
   exList:[
     {zh:'梅西把手机另一头一个正在哭的小宝贝逗笑了。',py:'Méixī bǎ shǒujī lìng yì tóu yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào le.',vn:'Messi chọc cho em bé đang khóc ở đầu bên kia điện thoại bật cười.'},
     {zh:'这些旧邮票是爷爷的宝贝，谁都不能碰。',py:'Zhèxiē jiù yóupiào shì yéye de bǎobèi, shéi dōu bù néng pèng.',vn:'Mấy con tem cũ này là bảo bối của ông, ai cũng không được động vào.'},
     {zh:'妈妈把我当宝贝一样照顾。',py:'Māma bǎ wǒ dàng bǎobèi yíyàng zhàogù.',vn:'Mẹ chăm sóc tôi như báu vật.'}
   ],
   colloFull:[
     {zh:'小宝贝',py:'xiǎo bǎobèi',vn:'bé cưng'},
     {zh:'宝贝女儿',py:'bǎobèi nǚ\'ér',vn:'con gái cưng'},
     {zh:'当宝贝',py:'dàng bǎobèi',vn:'coi như báu vật'},
     {zh:'我的宝贝',py:'wǒ de bǎobèi',vn:'bảo bối của tôi'}
   ],
   patterns:[
     {s:'把 + A + 当宝贝',m:'Coi A như báu vật'},
     {s:'小宝贝 / 宝贝儿',m:'Cách gọi yêu trẻ nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà coi cái đồng hồ cũ này như báu vật.',answer:'奶奶把这块旧手表当宝贝。',answerPy:'Nǎinai bǎ zhè kuài jiù shǒubiǎo dàng bǎobèi.',
      note:'把 + tân ngữ + 当 + N: coi cái gì là gì. Lượng từ của 手表 là 块.',pair:'把'},
     {promptLang:'vi',prompt:'Bé cưng vừa nhìn thấy mẹ là cười ngay.',answer:'小宝贝一看见妈妈就笑了。',answerPy:'Xiǎo bǎobèi yí kànjiàn māma jiù xiào le.',
      note:'一 + V1 + 就 + V2; 一 trước thanh 4 (看) đọc yí.',pair:'一……就……'}
   ]},

  {n:6,zh:'逗',py:'dòu',pos:'Động từ',vn:'trêu, chọc cười',hv:'đậu',em:'😆',lesson:1,
   explain:['Dùng lời nói, hành động làm người khác (thường là trẻ con) vui, bật cười.','Khẩu ngữ còn dùng như tính từ: 这人真逗 (người này hài thật).'],
   usage:'Hay gặp: 逗 + người + 笑 / 开心; 把 + người + 逗笑 / 逗哭. 逗孩子 = chơi đùa với trẻ.',
   collo:['逗笑','逗孩子','逗……开心','真逗'],
   ex_zh:'他把一个正在哭的小宝贝逗笑了。',ex_py:'Tā bǎ yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào le.',ex_vn:'Anh ấy chọc cho một em bé đang khóc bật cười.',
   exList:[
     {zh:'他把一个正在哭的小宝贝逗笑了。',py:'Tā bǎ yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào le.',vn:'Anh ấy chọc cho một em bé đang khóc bật cười.'},
     {zh:'你做这么多事，难道只是为了逗女朋友开心？',py:'Nǐ zuò zhème duō shì, nándào zhǐshì wèile dòu nǚpéngyou kāixīn?',vn:'Cậu làm bao nhiêu chuyện thế, lẽ nào chỉ để chọc bạn gái vui?'},
     {zh:'这个演员说话真逗，大家都笑得停不下来。',py:'Zhège yǎnyuán shuōhuà zhēn dòu, dàjiā dōu xiào de tíng bú xiàlái.',vn:'Diễn viên này nói chuyện hài thật, mọi người cười không dừng được.'}
   ],
   colloFull:[
     {zh:'逗笑',py:'dòuxiào',vn:'chọc cười'},
     {zh:'逗孩子',py:'dòu háizi',vn:'chơi đùa, trêu trẻ con'},
     {zh:'逗……开心',py:'dòu……kāixīn',vn:'làm ai vui'},
     {zh:'真逗',py:'zhēn dòu',vn:'hài thật, buồn cười thật'},
     {zh:'逗大家笑',py:'dòu dàjiā xiào',vn:'chọc mọi người cười'}
   ],
   patterns:[
     {s:'把 + người + 逗笑 / 逗哭',m:'Chọc ai cười / trêu ai khóc'},
     {s:'逗 + người + 开心',m:'Làm ai vui'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em trai trêu em gái đến phát khóc.',answer:'弟弟把妹妹逗哭了。',answerPy:'Dìdi bǎ mèimei dòukū le.',
      note:'把 + người + 逗 + kết quả (哭 / 笑) + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Để chọc mẹ vui, tôi đã học nấu một món ăn.',answer:'为了逗妈妈开心，我学做了一个菜。',answerPy:'Wèile dòu māma kāixīn, wǒ xué zuòle yí ge cài.',
      note:'为了 + mục đích đặt đầu câu; 逗 + người + 开心.',pair:'为了'}
   ]},

  {n:7,zh:'宣传',py:'xuānchuán',pos:'Động từ',vn:'tuyên truyền, quảng bá',hv:'tuyên truyền',em:'📢',lesson:1,
   explain:['Giới thiệu, giải thích rộng rãi để nhiều người biết, hiểu và làm theo.'],
   usage:'Ghép: 宣传片 (phim quảng bá), 宣传活动, 做宣传. Tân ngữ: tư tưởng, chính sách, kiến thức, việc tốt, sản phẩm.',
   collo:['广告宣传片','做宣传','宣传活动','宣传环保知识'],
   ex_zh:'这条30秒的全新广告宣传片在全球15个国家和地区同步上线。',ex_py:'Zhè tiáo sānshí miǎo de quánxīn guǎnggào xuānchuánpiàn zài quánqiú shíwǔ ge guójiā hé dìqū tóngbù shàngxiàn.',ex_vn:'Đoạn phim quảng cáo hoàn toàn mới dài 30 giây này đồng loạt ra mắt ở 15 quốc gia và khu vực trên toàn cầu.',
   exList:[
     {zh:'这条30秒的全新广告宣传片在全球15个国家和地区同步上线。',py:'Zhè tiáo sānshí miǎo de quánxīn guǎnggào xuānchuánpiàn zài quánqiú shíwǔ ge guójiā hé dìqū tóngbù shàngxiàn.',vn:'Đoạn phim quảng cáo hoàn toàn mới dài 30 giây này đồng loạt ra mắt ở 15 quốc gia và khu vực trên toàn cầu.'},
     {zh:'为了推广这项新产品，公司做了很多宣传。',py:'Wèile tuīguǎng zhè xiàng xīn chǎnpǐn, gōngsī zuòle hěn duō xuānchuán.',vn:'Để phổ biến sản phẩm mới này, công ty đã quảng bá rất nhiều.'},
     {zh:'学校举办了一次宣传活动，让同学们了解环保知识。',py:'Xuéxiào jǔbànle yí cì xuānchuán huódòng, ràng tóngxuémen liǎojiě huánbǎo zhīshi.',vn:'Trường tổ chức một buổi tuyên truyền để học sinh hiểu kiến thức bảo vệ môi trường.'}
   ],
   colloFull:[
     {zh:'广告宣传片',py:'guǎnggào xuānchuánpiàn',vn:'phim quảng cáo'},
     {zh:'做宣传',py:'zuò xuānchuán',vn:'làm quảng bá'},
     {zh:'宣传活动',py:'xuānchuán huódòng',vn:'hoạt động tuyên truyền'},
     {zh:'宣传环保知识',py:'xuānchuán huánbǎo zhīshi',vn:'tuyên truyền kiến thức môi trường'},
     {zh:'重点宣传',py:'zhòngdiǎn xuānchuán',vn:'tập trung tuyên truyền'}
   ],
   patterns:[
     {s:'为 / 给 + N + 做宣传',m:'Quảng bá cho …'},
     {s:'宣传 + nội dung',m:'Tuyên truyền điều gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để quảng bá cho buổi biểu diễn, chúng tôi đã dán rất nhiều áp phích.',answer:'为了给演出做宣传，我们贴了很多海报。',answerPy:'Wèile gěi yǎnchū zuò xuānchuán, wǒmen tiēle hěn duō hǎibào.',
      note:'给 + N + 做宣传 = quảng bá cho …; 为了 nêu mục đích.',pair:'为了'},
     {promptLang:'vi',prompt:'Nhờ quảng bá, sản phẩm này ngày càng nổi tiếng.',answer:'经过宣传，这个产品越来越有名了。',answerPy:'Jīngguò xuānchuán, zhège chǎnpǐn yuè lái yuè yǒumíng le.',
      note:'经过 + quá trình: trải qua …; 越来越 + tính từ + 了.',pair:'越来越'}
   ]},

  {n:8,zh:'手笔',py:'shǒubǐ',pos:'Danh từ',vn:'sự mạnh tay, sự chịu chi',hv:'thủ bút',em:'💰',lesson:1,
   explain:['Nghĩa trong bài: quy mô, độ “chịu chi” khi làm một việc. 大手笔 = cú chi tiêu / việc làm quy mô rất lớn.','(Nghĩa gốc: chữ viết, tác phẩm do chính tay ai làm — ít gặp.)'],
   usage:'Gần như luôn dùng trong cụm 大手笔: 如此大手笔的推广; 真是大手笔. Cũng nói 手笔很大 / 手笔不小.',
   collo:['大手笔','如此大手笔的推广','手笔很大'],
   ex_zh:'如此大手笔的推广，腾讯自有其底气所在。',ex_py:'Rúcǐ dà shǒubǐ de tuīguǎng, Téngxùn zì yǒu qí dǐqì suǒzài.',ex_vn:'Quảng bá mạnh tay đến vậy, Tencent tất có chỗ dựa vững chắc của mình.',
   exList:[
     {zh:'如此大手笔的推广，腾讯自有其底气所在。',py:'Rúcǐ dà shǒubǐ de tuīguǎng, Téngxùn zì yǒu qí dǐqì suǒzài.',vn:'Quảng bá mạnh tay đến vậy, Tencent tất có chỗ dựa vững chắc của mình.'},
     {zh:'这家公司花一个亿请明星代言，真是大手笔。',py:'Zhè jiā gōngsī huā yí ge yì qǐng míngxīng dàiyán, zhēn shì dà shǒubǐ.',vn:'Công ty này bỏ một trăm triệu tệ mời ngôi sao làm đại diện, đúng là chơi lớn.'},
     {zh:'他请全班同学吃饭，手笔可真不小。',py:'Tā qǐng quán bān tóngxué chīfàn, shǒubǐ kě zhēn bù xiǎo.',vn:'Cậu ấy mời cả lớp đi ăn, chịu chi thật đấy.'}
   ],
   colloFull:[
     {zh:'大手笔',py:'dà shǒubǐ',vn:'chơi lớn, mạnh tay'},
     {zh:'如此大手笔的推广',py:'rúcǐ dà shǒubǐ de tuīguǎng',vn:'quảng bá mạnh tay đến vậy'},
     {zh:'手笔很大',py:'shǒubǐ hěn dà',vn:'rất mạnh tay, rất chịu chi'},
     {zh:'手笔不小',py:'shǒubǐ bù xiǎo',vn:'chịu chi không ít'}
   ],
   patterns:[
     {s:'(真是 / 如此) + 大手笔',m:'(Thật là) một cú chơi lớn'},
     {s:'手笔 + 很大 / 不小',m:'Rất mạnh tay, rất chịu chi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này tuy mới thành lập nhưng làm quảng cáo rất mạnh tay.',answer:'这家公司虽然刚成立，但是做广告的手笔很大。',answerPy:'Zhè jiā gōngsī suīrán gāng chénglì, dànshì zuò guǎnggào de shǒubǐ hěn dà.',
      note:'手笔很大 = rất chịu chi; 虽然……但是…… nêu ý trái ngược.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Mời cả trường xem phim, cú chơi lớn này khiến mọi người đều giật mình.',answer:'请全校看电影，这个大手笔让大家都吃了一惊。',answerPy:'Qǐng quán xiào kàn diànyǐng, zhège dà shǒubǐ ràng dàjiā dōu chīle yì jīng.',
      note:'大手笔 dùng như danh từ làm chủ ngữ; 让 + người + V: khiến ai ….',pair:'让 (câu kiêm ngữ)'}
   ]},

  {n:9,zh:'推广',py:'tuīguǎng',pos:'Động từ',vn:'phổ biến, mở rộng',hv:'thôi quảng',em:'📈',lesson:1,
   explain:['Mở rộng phạm vi sử dụng, áp dụng của một thứ (sản phẩm, kỹ thuật, kinh nghiệm, ngôn ngữ) để nhiều nơi, nhiều người dùng.'],
   usage:'Theo bảng 词语搭配: 推广 + 汉语普通话 / 新技术 / 产品 / 经验. Dùng như danh từ: 大手笔的推广, 推广工作.',
   collo:['推广普通话','推广新技术','推广产品','推广经验'],
   ex_zh:'为了推广这项新产品，公司做了很多宣传。',ex_py:'Wèile tuīguǎng zhè xiàng xīn chǎnpǐn, gōngsī zuòle hěn duō xuānchuán.',ex_vn:'Để phổ biến sản phẩm mới này, công ty đã quảng bá rất nhiều.',
   exList:[
     {zh:'为了推广这项新产品，公司做了很多宣传。',py:'Wèile tuīguǎng zhè xiàng xīn chǎnpǐn, gōngsī zuòle hěn duō xuānchuán.',vn:'Để phổ biến sản phẩm mới này, công ty đã quảng bá rất nhiều.'},
     {zh:'学校正在推广这位老师的教学经验。',py:'Xuéxiào zhèngzài tuīguǎng zhè wèi lǎoshī de jiàoxué jīngyàn.',vn:'Nhà trường đang phổ biến kinh nghiệm giảng dạy của thầy giáo này.'},
     {zh:'这种新技术已经在农村推广开了。',py:'Zhè zhǒng xīn jìshù yǐjīng zài nóngcūn tuīguǎng kāi le.',vn:'Kỹ thuật mới này đã được phổ biến rộng ở nông thôn.'}
   ],
   colloFull:[
     {zh:'推广普通话',py:'tuīguǎng pǔtōnghuà',vn:'phổ biến tiếng phổ thông'},
     {zh:'推广新技术',py:'tuīguǎng xīn jìshù',vn:'phổ biến kỹ thuật mới'},
     {zh:'推广产品',py:'tuīguǎng chǎnpǐn',vn:'quảng bá sản phẩm'},
     {zh:'推广经验',py:'tuīguǎng jīngyàn',vn:'phổ biến kinh nghiệm'},
     {zh:'推广工作',py:'tuīguǎng gōngzuò',vn:'công tác phổ biến'}
   ],
   patterns:[
     {s:'推广 + 普通话 / 新技术 / 产品 / 经验',m:'Phổ biến cái gì (bảng 词语搭配 của sách)'},
     {s:'在 + nơi + 推广(开)',m:'Được phổ biến rộng ở đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kinh nghiệm này rất hữu ích, đáng được phổ biến.',answer:'这个经验很有用，值得推广。',answerPy:'Zhège jīngyàn hěn yǒuyòng, zhíde tuīguǎng.',
      note:'值得 + V: đáng để làm gì — không cần thêm 被.',pair:'值得'},
     {promptLang:'vi',prompt:'Tiếng phổ thông đã được phổ biến ra khắp cả nước.',answer:'普通话已经被推广到了全国。',answerPy:'Pǔtōnghuà yǐjīng bèi tuīguǎng dàole quánguó.',
      note:'Câu bị động 被 + V + 到 + phạm vi.',pair:'被'}
   ]},

  {n:10,zh:'注册',py:'zhùcè',pos:'Động từ',vn:'đăng ký',hv:'chú sách',em:'📝',lesson:1,
   explain:['Ghi tên vào hệ thống / cơ quan có thẩm quyền để có tư cách sử dụng hoặc hoạt động: đăng ký tài khoản, đăng ký thành lập công ty.'],
   usage:'Theo bảng 词语搭配: 注册 + 公司 / 邮箱 / 会员. 注册用户 = người dùng đã đăng ký. Đăng ký dự thi, dự lớp thì dùng 报名.',
   collo:['注册公司','注册邮箱','注册会员','短信注册'],
   ex_zh:'要想在这个网站购物，你必须先注册一个它的邮箱。',ex_py:'Yào xiǎng zài zhège wǎngzhàn gòuwù, nǐ bìxū xiān zhùcè yí ge tā de yóuxiāng.',ex_vn:'Muốn mua hàng trên trang này, bạn phải đăng ký một hộp thư của nó trước.',
   exList:[
     {zh:'要想在这个网站购物，你必须先注册一个它的邮箱。',py:'Yào xiǎng zài zhège wǎngzhàn gòuwù, nǐ bìxū xiān zhùcè yí ge tā de yóuxiāng.',vn:'Muốn mua hàng trên trang này, bạn phải đăng ký một hộp thư của nó trước.'},
     {zh:'2011年12月，微信实现支持全球100个国家的短信注册。',py:'Èr líng yī yī nián shí\'èr yuè, Wēixìn shíxiàn zhīchí quánqiú yìbǎi ge guójiā de duǎnxìn zhùcè.',vn:'Tháng 12/2011, WeChat cho phép đăng ký bằng tin nhắn ở 100 quốc gia trên toàn cầu.'},
     {zh:'我哥哥大学毕业后注册了一家小公司。',py:'Wǒ gēge dàxué bìyè hòu zhùcèle yì jiā xiǎo gōngsī.',vn:'Anh tôi tốt nghiệp đại học xong thì đăng ký thành lập một công ty nhỏ.'}
   ],
   colloFull:[
     {zh:'注册公司',py:'zhùcè gōngsī',vn:'đăng ký thành lập công ty'},
     {zh:'注册邮箱',py:'zhùcè yóuxiāng',vn:'đăng ký hộp thư'},
     {zh:'注册会员',py:'zhùcè huìyuán',vn:'đăng ký hội viên'},
     {zh:'短信注册',py:'duǎnxìn zhùcè',vn:'đăng ký bằng tin nhắn'},
     {zh:'注册用户',py:'zhùcè yònghù',vn:'người dùng đã đăng ký'}
   ],
   patterns:[
     {s:'注册 + 公司 / 邮箱 / 会员',m:'Đăng ký cái gì (bảng 词语搭配)'},
     {s:'先注册，然后 / 再 + V',m:'Đăng ký trước rồi mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn phải đăng ký hội viên trước rồi mới mua được.',answer:'你得先注册会员，然后才能购买。',answerPy:'Nǐ děi xiān zhùcè huìyuán, ránhòu cái néng gòumǎi.',
      note:'先……然后…… nêu thứ tự; 得 đọc děi (phải).',pair:'先……然后……'},
     {promptLang:'vi',prompt:'Chỉ cần có số điện thoại là đăng ký được WeChat.',answer:'只要有手机号，就能注册微信。',answerPy:'Zhǐyào yǒu shǒujīhào, jiù néng zhùcè Wēixìn.',
      note:'只要 + điều kiện, 就 + kết quả.',pair:'只要……就……'}
   ]},

  {n:11,zh:'召开',py:'zhàokāi',pos:'Động từ',vn:'triệu tập, tổ chức (hội nghị)',hv:'triệu khai',em:'🏛️',lesson:1,
   explain:['Tập hợp mọi người lại để mở một cuộc họp, hội nghị. Chỉ dùng với 会: 会议, 大会, 座谈会.'],
   usage:'Theo bảng 词语搭配: 按时 / 顺利 / 成功 (地) + 召开. Hay làm định ngữ: 在北京召开的大会.',
   collo:['召开会议','召开大会','顺利召开','按时召开'],
   ex_zh:'会议将在下周一按时召开。',ex_py:'Huìyì jiāng zài xià zhōuyī ànshí zhàokāi.',ex_vn:'Hội nghị sẽ được tổ chức đúng giờ vào thứ Hai tuần sau.',
   exList:[
     {zh:'会议将在下周一按时召开。',py:'Huìyì jiāng zài xià zhōuyī ànshí zhàokāi.',vn:'Hội nghị sẽ được tổ chức đúng giờ vào thứ Hai tuần sau.'},
     {zh:'原本定在周三上午召开的会议改时间了。',py:'Yuánběn dìng zài zhōusān shàngwǔ zhàokāi de huìyì gǎi shíjiān le.',vn:'Cuộc họp vốn định tổ chức sáng thứ Tư đã đổi giờ.'},
     {zh:'在北京召开的2013腾讯合作伙伴大会上，腾讯总裁言语间充满了骄傲。',py:'Zài Běijīng zhàokāi de èr líng yī sān Téngxùn hézuò huǒbàn dàhuì shang, Téngxùn zǒngcái yányǔ jiān chōngmǎnle jiāo\'ào.',vn:'Tại Đại hội đối tác Tencent 2013 tổ chức ở Bắc Kinh, lời lẽ của chủ tịch Tencent tràn đầy tự hào.'}
   ],
   colloFull:[
     {zh:'召开会议',py:'zhàokāi huìyì',vn:'tổ chức hội nghị'},
     {zh:'召开大会',py:'zhàokāi dàhuì',vn:'mở đại hội'},
     {zh:'顺利召开',py:'shùnlì zhàokāi',vn:'được tổ chức thuận lợi'},
     {zh:'按时召开',py:'ànshí zhàokāi',vn:'tổ chức đúng giờ'},
     {zh:'成功召开',py:'chénggōng zhàokāi',vn:'tổ chức thành công'}
   ],
   patterns:[
     {s:'按时 / 顺利 / 成功 (地) + 召开',m:'Tổ chức đúng hạn / thuận lợi / thành công (bảng 词语搭配)'},
     {s:'在 + nơi + 召开的 + 会议',m:'Cuộc họp tổ chức ở đâu (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trời mưa to nên đại hội không thể tổ chức đúng giờ.',answer:'因为下大雨，所以大会没能按时召开。',answerPy:'Yīnwèi xià dàyǔ, suǒyǐ dàhuì méi néng ànshí zhàokāi.',
      note:'Phủ định khả năng đã xảy ra: 没能 + V; trạng ngữ 按时 đứng trước 召开.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Cuộc họp lẽ ra tổ chức hôm qua đã bị hoãn lại.',answer:'本来应该昨天召开的会议被推迟了。',answerPy:'Běnlái yīnggāi zuótiān zhàokāi de huìyì bèi tuīchí le.',
      note:'Cả cụm 本来应该昨天召开的 làm định ngữ cho 会议; 被推迟 = bị hoãn.',pair:'被'}
   ]},

  {n:12,zh:'合作',py:'hézuò',pos:'Động từ',vn:'hợp tác',hv:'hợp tác',em:'🤝',lesson:1,
   explain:['Cùng nhau làm một việc, cùng hướng tới một mục tiêu.'],
   usage:'A 跟 / 和 / 与 B 合作. Làm định ngữ theo sách: 合作 + 伙伴 / 公司 / 精神. Nội động từ: KHÔNG nói 合作这家公司.',
   collo:['跟……合作','合作伙伴','合作公司','合作精神'],
   ex_zh:'我们跟这家公司合作过两次，很愉快。',ex_py:'Wǒmen gēn zhè jiā gōngsī hézuòguo liǎng cì, hěn yúkuài.',ex_vn:'Chúng tôi đã hợp tác với công ty này hai lần, rất vui vẻ.',
   exList:[
     {zh:'我们跟这家公司合作过两次，很愉快。',py:'Wǒmen gēn zhè jiā gōngsī hézuòguo liǎng cì, hěn yúkuài.',vn:'Chúng tôi đã hợp tác với công ty này hai lần, rất vui vẻ.'},
     {zh:'这次小组作业需要大家的合作精神。',py:'Zhè cì xiǎozǔ zuòyè xūyào dàjiā de hézuò jīngshén.',vn:'Bài tập nhóm lần này cần tinh thần hợp tác của mọi người.'},
     {zh:'两家企业决定在手机应用方面进行合作。',py:'Liǎng jiā qǐyè juédìng zài shǒujī yìngyòng fāngmiàn jìnxíng hézuò.',vn:'Hai doanh nghiệp quyết định hợp tác trong lĩnh vực ứng dụng di động.'}
   ],
   colloFull:[
     {zh:'跟……合作',py:'gēn……hézuò',vn:'hợp tác với …'},
     {zh:'合作伙伴',py:'hézuò huǒbàn',vn:'đối tác hợp tác'},
     {zh:'合作公司',py:'hézuò gōngsī',vn:'công ty hợp tác'},
     {zh:'合作精神',py:'hézuò jīngshén',vn:'tinh thần hợp tác'},
     {zh:'进行合作',py:'jìnxíng hézuò',vn:'tiến hành hợp tác'}
   ],
   patterns:[
     {s:'A + 跟 / 和 / 与 + B + 合作',m:'A hợp tác với B'},
     {s:'合作 + 伙伴 / 公司 / 精神',m:'Đối tác / công ty / tinh thần hợp tác (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi chưa từng hợp tác với công ty đó.',answer:'我们从来没跟那家公司合作过。',answerPy:'Wǒmen cónglái méi gēn nà jiā gōngsī hézuòguo.',
      note:'合作 là nội động từ: đối tượng đưa lên trước bằng 跟; 从来没 + V + 过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người hợp tác tốt thì nhất định sẽ thành công.',answer:'只要大家好好合作，就一定能成功。',answerPy:'Zhǐyào dàjiā hǎohǎo hézuò, jiù yídìng néng chénggōng.',
      note:'好好 + V: làm cho tử tế; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:13,zh:'伙伴',py:'huǒbàn',pos:'Danh từ',vn:'bạn đồng hành, đối tác',hv:'hỏa bạn',em:'👥',lesson:1,
   explain:['Người cùng tham gia một việc, cùng chơi, cùng làm với mình.'],
   usage:'Ghép: 合作伙伴 (đối tác), 小伙伴 (bạn nhỏ cùng chơi), 好伙伴, 生意伙伴.',
   collo:['合作伙伴','小伙伴','好伙伴'],
   ex_zh:'腾讯每年都会召开合作伙伴大会。',ex_py:'Téngxùn měi nián dōu huì zhàokāi hézuò huǒbàn dàhuì.',ex_vn:'Năm nào Tencent cũng tổ chức đại hội đối tác.',
   exList:[
     {zh:'腾讯每年都会召开合作伙伴大会。',py:'Téngxùn měi nián dōu huì zhàokāi hézuò huǒbàn dàhuì.',vn:'Năm nào Tencent cũng tổ chức đại hội đối tác.'},
     {zh:'小时候，他是我最好的伙伴。',py:'Xiǎoshíhou, tā shì wǒ zuì hǎo de huǒbàn.',vn:'Hồi nhỏ, cậu ấy là bạn chơi thân nhất của tôi.'},
     {zh:'在学习上，我们既是对手，也是伙伴。',py:'Zài xuéxí shang, wǒmen jì shì duìshǒu, yě shì huǒbàn.',vn:'Trong học tập, chúng tôi vừa là đối thủ vừa là bạn đồng hành.'}
   ],
   colloFull:[
     {zh:'合作伙伴',py:'hézuò huǒbàn',vn:'đối tác hợp tác'},
     {zh:'小伙伴',py:'xiǎo huǒbàn',vn:'bạn nhỏ cùng chơi'},
     {zh:'好伙伴',py:'hǎo huǒbàn',vn:'bạn đồng hành tốt'},
     {zh:'生意伙伴',py:'shēngyi huǒbàn',vn:'đối tác làm ăn'}
   ],
   patterns:[
     {s:'A 是 B 的 (合作)伙伴',m:'A là đối tác / bạn đồng hành của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chúng tôi là đối thủ nhưng cũng là bạn đồng hành tốt.',answer:'虽然我们是对手，但是也是好伙伴。',answerPy:'Suīrán wǒmen shì duìshǒu, dànshì yě shì hǎo huǒbàn.',
      note:'虽然……但是……, vế sau có 也 nhấn mạnh “đồng thời cũng”.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Bọn trẻ vừa tan học là đi tìm bạn cùng chơi.',answer:'孩子们一放学就去找小伙伴玩儿。',answerPy:'Háizimen yí fàngxué jiù qù zhǎo xiǎo huǒbàn wánr.',
      note:'小伙伴 = bạn nhỏ cùng chơi; 一……就…….',pair:'一……就……'}
   ]},

  {n:14,zh:'总裁',py:'zǒngcái',pos:'Danh từ',vn:'chủ tịch, tổng giám đốc',hv:'tổng tài',em:'👔',lesson:1,
   explain:['Người đứng đầu, điều hành cao nhất của một tập đoàn, công ty lớn (tương đương “president”).'],
   usage:'副总裁 (phó chủ tịch), 高级副总裁 (phó chủ tịch cấp cao). Chức danh đứng TRƯỚC tên: 腾讯总裁刘炽平.',
   collo:['公司总裁','副总裁','高级副总裁'],
   ex_zh:'腾讯总裁刘炽平言语间充满了骄傲。',ex_py:'Téngxùn zǒngcái Liú Chìpíng yányǔ jiān chōngmǎnle jiāo\'ào.',ex_vn:'Lời lẽ của chủ tịch Tencent Lưu Sí Bình tràn đầy tự hào.',
   exList:[
     {zh:'腾讯总裁刘炽平言语间充满了骄傲。',py:'Téngxùn zǒngcái Liú Chìpíng yányǔ jiān chōngmǎnle jiāo\'ào.',vn:'Lời lẽ của chủ tịch Tencent Lưu Sí Bình tràn đầy tự hào.'},
     {zh:'张小龙是腾讯公司的高级副总裁。',py:'Zhāng Xiǎolóng shì Téngxùn gōngsī de gāojí fù zǒngcái.',vn:'Trương Tiểu Long là phó chủ tịch cấp cao của công ty Tencent.'},
     {zh:'他从普通职员做起，十年后当上了公司总裁。',py:'Tā cóng pǔtōng zhíyuán zuòqǐ, shí nián hòu dāngshàngle gōngsī zǒngcái.',vn:'Anh ấy bắt đầu từ nhân viên bình thường, mười năm sau lên làm chủ tịch công ty.'}
   ],
   colloFull:[
     {zh:'公司总裁',py:'gōngsī zǒngcái',vn:'chủ tịch công ty'},
     {zh:'副总裁',py:'fù zǒngcái',vn:'phó chủ tịch'},
     {zh:'高级副总裁',py:'gāojí fù zǒngcái',vn:'phó chủ tịch cấp cao'},
     {zh:'当上总裁',py:'dāngshàng zǒngcái',vn:'lên làm chủ tịch'}
   ],
   patterns:[
     {s:'tên công ty + 总裁 + tên người',m:'Chủ tịch công ty … tên là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vị chủ tịch này được mọi người gọi là “cha đẻ của WeChat”.',answer:'这位总裁被大家称为“微信之父”。',answerPy:'Zhè wèi zǒngcái bèi dàjiā chēngwéi “Wēixìn zhī fù”.',
      note:'被 + người + 称为 + danh xưng.',pair:'被'},
     {promptLang:'vi',prompt:'Ngay cả chủ tịch cũng đến dự cuộc họp.',answer:'连总裁都来参加会议了。',answerPy:'Lián zǒngcái dōu lái cānjiā huìyì le.',
      note:'连 + người “khó ngờ nhất” + 都 + V: nhấn mạnh.',pair:'连……都……'}
   ]},

  {n:15,zh:'实现',py:'shíxiàn',pos:'Động từ',vn:'thực hiện, biến thành hiện thực',hv:'thực hiện',em:'✅',lesson:1,
   explain:['Làm cho ước mơ, kế hoạch, mục tiêu trở thành sự thật.','Chú ý đảo chữ: 实现 (động từ – thực hiện) ≠ 现实 (danh từ – hiện thực).'],
   usage:'Tân ngữ: 愿望, 梦想, 理想, 目标, 计划. Trong bài còn gặp 实现支持……注册 (đã làm được việc hỗ trợ …).',
   collo:['实现愿望','实现梦想','实现目标','终于实现了'],
   ex_zh:'过了这么多年，我的愿望终于实现了！',ex_py:'Guòle zhème duō nián, wǒ de yuànwàng zhōngyú shíxiàn le!',ex_vn:'Bao nhiêu năm trôi qua, ước nguyện của tôi cuối cùng đã thành hiện thực!',
   exList:[
     {zh:'过了这么多年，我的愿望终于实现了！',py:'Guòle zhème duō nián, wǒ de yuànwàng zhōngyú shíxiàn le!',vn:'Bao nhiêu năm trôi qua, ước nguyện của tôi cuối cùng đã thành hiện thực!'},
     {zh:'请给我一次实现愿望的机会。',py:'Qǐng gěi wǒ yí cì shíxiàn yuànwàng de jīhuì.',vn:'Xin hãy cho tôi một cơ hội để thực hiện ước nguyện.'},
     {zh:'为了实现当医生的梦想，她每天学习到很晚。',py:'Wèile shíxiàn dāng yīshēng de mèngxiǎng, tā měi tiān xuéxí dào hěn wǎn.',vn:'Để thực hiện ước mơ làm bác sĩ, ngày nào cô ấy cũng học đến khuya.'}
   ],
   colloFull:[
     {zh:'实现愿望',py:'shíxiàn yuànwàng',vn:'thực hiện ước nguyện'},
     {zh:'实现梦想',py:'shíxiàn mèngxiǎng',vn:'biến ước mơ thành hiện thực'},
     {zh:'实现目标',py:'shíxiàn mùbiāo',vn:'đạt được mục tiêu'},
     {zh:'终于实现了',py:'zhōngyú shíxiàn le',vn:'cuối cùng đã thành hiện thực'},
     {zh:'实现理想',py:'shíxiàn lǐxiǎng',vn:'thực hiện lý tưởng'}
   ],
   patterns:[
     {s:'实现 + 愿望 / 梦想 / 目标',m:'Biến … thành hiện thực'},
     {s:'N + 终于实现了',m:'… cuối cùng đã thành sự thật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì thì ước mơ sẽ có ngày thành hiện thực.',answer:'只要坚持下去，梦想就会有实现的一天。',answerPy:'Zhǐyào jiānchí xiàqù, mèngxiǎng jiù huì yǒu shíxiàn de yì tiān.',
      note:'有实现的一天 = sẽ có ngày thành hiện thực; 就 đứng sau chủ ngữ 梦想.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Để thực hiện mục tiêu này, cả lớp đều rất cố gắng.',answer:'为了实现这个目标，全班同学都很努力。',answerPy:'Wèile shíxiàn zhège mùbiāo, quán bān tóngxué dōu hěn nǔlì.',
      note:'为了 + 实现 + mục tiêu, đặt đầu câu.',pair:'为了'}
   ]},

  {n:16,zh:'覆盖',py:'fùgài',pos:'Động từ',vn:'bao trùm, phủ (sóng, phạm vi)',hv:'phúc cái',em:'🌐',lesson:1,
   explain:['① Che phủ lên trên: 大雪覆盖了整座山. ② Nghĩa trong bài: phạm vi hoạt động, dịch vụ, sóng mạng trải tới đâu.'],
   usage:'Chủ ngữ là dịch vụ / mạng / tín hiệu: 微信覆盖了200多个国家. Ghép: 覆盖范围, 网络覆盖, 覆盖面.',
   collo:['覆盖全国','覆盖范围','网络覆盖','被大雪覆盖'],
   ex_zh:'微信已经覆盖了200多个国家和地区。',ex_py:'Wēixìn yǐjīng fùgàile èrbǎi duō ge guójiā hé dìqū.',ex_vn:'WeChat đã phủ hơn 200 quốc gia và khu vực.',
   exList:[
     {zh:'微信已经覆盖了200多个国家和地区。',py:'Wēixìn yǐjīng fùgàile èrbǎi duō ge guójiā hé dìqū.',vn:'WeChat đã phủ hơn 200 quốc gia và khu vực.'},
     {zh:'现在连山区也有了网络覆盖。',py:'Xiànzài lián shānqū yě yǒule wǎngluò fùgài.',vn:'Giờ đến vùng núi cũng đã được phủ sóng mạng.'},
     {zh:'一夜之间，整个城市都被大雪覆盖了。',py:'Yí yè zhī jiān, zhěnggè chéngshì dōu bèi dàxuě fùgài le.',vn:'Chỉ sau một đêm, cả thành phố đã bị tuyết phủ trắng.'}
   ],
   colloFull:[
     {zh:'覆盖全国',py:'fùgài quánguó',vn:'phủ khắp cả nước'},
     {zh:'覆盖范围',py:'fùgài fànwéi',vn:'phạm vi phủ sóng'},
     {zh:'网络覆盖',py:'wǎngluò fùgài',vn:'phủ sóng mạng'},
     {zh:'被大雪覆盖',py:'bèi dàxuě fùgài',vn:'bị tuyết phủ kín'},
     {zh:'覆盖面',py:'fùgàimiàn',vn:'diện bao phủ'}
   ],
   patterns:[
     {s:'A + 覆盖(了) + phạm vi',m:'A phủ tới đâu'},
     {s:'被 + N + 覆盖',m:'Bị … che phủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cả ngọn núi bị tuyết trắng che phủ.',answer:'整座山都被白雪覆盖了。',answerPy:'Zhěng zuò shān dōu bèi báixuě fùgài le.',
      note:'Lượng từ của 山 là 座; 被 + tác nhân + 覆盖 + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Các thành phố được mạng 5G phủ sóng ngày càng nhiều.',answer:'5G网络覆盖的城市越来越多了。',answerPy:'5G wǎngluò fùgài de chéngshì yuè lái yuè duō le.',
      note:'Cụm 5G网络覆盖的 làm định ngữ cho 城市; 越来越多了.',pair:'越来越'}
   ]},

  {n:17,zh:'移动',py:'yídòng',pos:'Động từ',vn:'di động, di chuyển',hv:'di động',em:'📱',lesson:1,
   explain:['① Thay đổi vị trí: 向前移动. ② Làm định ngữ: mang theo được, dùng được khi di chuyển — 移动电话, 移动互联网, 移动支付.'],
   usage:'Nghĩa công nghệ rất hay gặp: 移动互联网, 移动通信, 移动支付. Chuyển nhà thì nói 搬家, không dùng 移动.',
   collo:['移动互联网','移动通信','移动支付','向前移动'],
   ex_zh:'移动互联网是一个重新开始的机会。',ex_py:'Yídòng hùliánwǎng shì yí ge chóngxīn kāishǐ de jīhuì.',ex_vn:'Internet di động là một cơ hội để bắt đầu lại.',
   exList:[
     {zh:'移动互联网是一个重新开始的机会。',py:'Yídòng hùliánwǎng shì yí ge chóngxīn kāishǐ de jīhuì.',vn:'Internet di động là một cơ hội để bắt đầu lại.'},
     {zh:'现在很多人出门不带钱包，都用移动支付。',py:'Xiànzài hěn duō rén chūmén bú dài qiánbāo, dōu yòng yídòng zhīfù.',vn:'Bây giờ nhiều người ra ngoài không mang ví, toàn thanh toán di động.'},
     {zh:'请大家慢慢地向前移动，不要挤。',py:'Qǐng dàjiā mànmàn de xiàng qián yídòng, búyào jǐ.',vn:'Mọi người từ từ di chuyển lên phía trước, đừng chen lấn.'}
   ],
   colloFull:[
     {zh:'移动互联网',py:'yídòng hùliánwǎng',vn:'Internet di động'},
     {zh:'移动通信',py:'yídòng tōngxìn',vn:'thông tin di động'},
     {zh:'移动支付',py:'yídòng zhīfù',vn:'thanh toán di động'},
     {zh:'向前移动',py:'xiàng qián yídòng',vn:'di chuyển về phía trước'},
     {zh:'移动电话',py:'yídòng diànhuà',vn:'điện thoại di động'}
   ],
   patterns:[
     {s:'移动 + 互联网 / 通信 / 支付',m:'… di động (làm định ngữ)'},
     {s:'向 + hướng + 移动',m:'Di chuyển về hướng nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có thanh toán di động, đi mua đồ không cần mang tiền mặt nữa.',answer:'自从有了移动支付，出去买东西就不用带现金了。',answerPy:'Zìcóng yǒule yídòng zhīfù, chūqù mǎi dōngxi jiù búyòng dài xiànjīn le.',
      note:'自从 + mốc thời gian / sự kiện: kể từ khi …; 不用……了 = không cần … nữa.',pair:'自从'},
     {promptLang:'vi',prompt:'Internet di động làm cho cuộc sống ngày càng tiện lợi.',answer:'移动互联网让生活越来越方便了。',answerPy:'Yídòng hùliánwǎng ràng shēnghuó yuè lái yuè fāngbiàn le.',
      note:'让 + N + 越来越 + tính từ.',pair:'越来越'}
   ]},

  {n:18,zh:'通信',py:'tōngxìn',pos:'Danh từ / Động từ',vn:'thông tin liên lạc; liên lạc',hv:'thông tín',em:'📶',lesson:1,
   explain:['① Động từ: liên lạc với nhau bằng thư từ. ② Danh từ: việc truyền tin qua điện thoại, mạng — ngành viễn thông.','Chú ý: 通信 ≠ 信息 (“thông tin” = tin tức, dữ liệu).'],
   usage:'Danh từ hay làm định ngữ: 通信技术, 通信工具, 移动通信, 通信公司. Động từ: 跟……通信; tách được: 通了三年信.',
   collo:['移动通信','通信工具','通信技术','跟……通信'],
   ex_zh:'微信是全球使用人数最多的移动通信应用。',ex_py:'Wēixìn shì quánqiú shǐyòng rénshù zuì duō de yídòng tōngxìn yìngyòng.',ex_vn:'WeChat là ứng dụng liên lạc di động có nhiều người dùng nhất thế giới.',
   exList:[
     {zh:'微信是全球使用人数最多的移动通信应用。',py:'Wēixìn shì quánqiú shǐyòng rénshù zuì duō de yídòng tōngxìn yìngyòng.',vn:'WeChat là ứng dụng liên lạc di động có nhiều người dùng nhất thế giới.'},
     {zh:'手机已经成了人们最重要的通信工具。',py:'Shǒujī yǐjīng chéngle rénmen zuì zhòngyào de tōngxìn gōngjù.',vn:'Điện thoại đã trở thành công cụ liên lạc quan trọng nhất của mọi người.'},
     {zh:'上中学的时候，我跟一个中国朋友通了三年信。',py:'Shàng zhōngxué de shíhou, wǒ gēn yí ge Zhōngguó péngyou tōngle sān nián xìn.',vn:'Hồi cấp hai, tôi viết thư qua lại với một người bạn Trung Quốc suốt ba năm.'}
   ],
   colloFull:[
     {zh:'移动通信',py:'yídòng tōngxìn',vn:'thông tin di động'},
     {zh:'通信工具',py:'tōngxìn gōngjù',vn:'công cụ liên lạc'},
     {zh:'通信技术',py:'tōngxìn jìshù',vn:'công nghệ viễn thông'},
     {zh:'跟……通信',py:'gēn……tōngxìn',vn:'thư từ qua lại với …'},
     {zh:'通信公司',py:'tōngxìn gōngsī',vn:'công ty viễn thông'}
   ],
   patterns:[
     {s:'通信 + 工具 / 技术 / 公司',m:'Công cụ liên lạc / công nghệ / công ty viễn thông'},
     {s:'A 跟 B 通信',m:'A và B liên lạc (bằng thư)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy ở cách nhau rất xa nhưng hai người vẫn thường xuyên liên lạc.',answer:'虽然离得很远，但是他们俩还经常通信。',answerPy:'Suīrán lí de hěn yuǎn, dànshì tāmen liǎ hái jīngcháng tōngxìn.',
      note:'通信 dùng như nội động từ; 离得很远 = ở cách xa.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Công nghệ viễn thông phát triển ngày càng nhanh.',answer:'通信技术发展得越来越快。',answerPy:'Tōngxìn jìshù fāzhǎn de yuè lái yuè kuài.',
      note:'Bổ ngữ trạng thái: V + 得 + 越来越 + tính từ.',pair:'越来越'}
   ]},

  {n:19,zh:'应用',py:'yìngyòng',pos:'Danh từ / Động từ',vn:'ứng dụng; (tin học) app',hv:'ứng dụng',em:'📲',lesson:1,
   explain:['① Động từ: đem lý thuyết, kiến thức, kỹ thuật dùng vào thực tế. ② Danh từ: ứng dụng (app) trên điện thoại, máy tính.','Dùng đồ vật cụ thể hằng ngày (đũa, bút, điện thoại) thì nói 使用 / 用, không nói 应用.'],
   usage:'Theo bảng 词语搭配: 普遍 / 大量 (地) + 应用. Danh từ: 手机应用, 安装应用, 一个应用. Mẫu: 把 A 应用到 B 中.',
   collo:['普遍应用','大量应用','手机应用','安装应用'],
   ex_zh:'这种新技术已经被普遍应用了。',ex_py:'Zhè zhǒng xīn jìshù yǐjīng bèi pǔbiàn yìngyòng le.',ex_vn:'Kỹ thuật mới này đã được ứng dụng rộng rãi.',
   exList:[
     {zh:'这种新技术已经被普遍应用了。',py:'Zhè zhǒng xīn jìshù yǐjīng bèi pǔbiàn yìngyòng le.',vn:'Kỹ thuật mới này đã được ứng dụng rộng rãi.'},
     {zh:'我手机里安装了很多学汉语的应用。',py:'Wǒ shǒujī li ānzhuāngle hěn duō xué Hànyǔ de yìngyòng.',vn:'Trong điện thoại tôi cài rất nhiều ứng dụng học tiếng Trung.'},
     {zh:'学了知识，还要学会把它应用到生活中。',py:'Xuéle zhīshi, hái yào xuéhuì bǎ tā yìngyòng dào shēnghuó zhōng.',vn:'Học kiến thức rồi còn phải biết đem nó ứng dụng vào cuộc sống.'}
   ],
   colloFull:[
     {zh:'普遍应用',py:'pǔbiàn yìngyòng',vn:'ứng dụng rộng rãi'},
     {zh:'大量应用',py:'dàliàng yìngyòng',vn:'ứng dụng với số lượng lớn'},
     {zh:'手机应用',py:'shǒujī yìngyòng',vn:'ứng dụng điện thoại'},
     {zh:'安装应用',py:'ānzhuāng yìngyòng',vn:'cài ứng dụng'},
     {zh:'应用到生活中',py:'yìngyòng dào shēnghuó zhōng',vn:'ứng dụng vào cuộc sống'}
   ],
   patterns:[
     {s:'普遍 / 大量 (地) + 应用',m:'Được ứng dụng rộng rãi / nhiều (bảng 词语搭配)'},
     {s:'把 + A + 应用到 + B (中)',m:'Đem A ứng dụng vào B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta phải đem kiến thức đã học ứng dụng vào thực tế.',answer:'我们要把学到的知识应用到实际中。',answerPy:'Wǒmen yào bǎ xuédào de zhīshi yìngyòng dào shíjì zhōng.',
      note:'把 + tân ngữ + 应用到 + nơi / lĩnh vực.',pair:'把'},
     {promptLang:'vi',prompt:'Ứng dụng này không những miễn phí mà còn rất dễ dùng.',answer:'这个应用不但免费，而且很好用。',answerPy:'Zhège yìngyòng búdàn miǎnfèi, érqiě hěn hǎoyòng.',
      note:'应用 ở đây là danh từ (app); 不但 đọc búdàn.',pair:'不但……而且……'}
   ]},

  {n:20,zh:'企业',py:'qǐyè',pos:'Danh từ',vn:'doanh nghiệp, công ty',hv:'xí nghiệp',em:'🏢',lesson:1,
   explain:['Đơn vị sản xuất, kinh doanh nói chung: công ty, nhà máy, tập đoàn.','Tiếng Việt “xí nghiệp” thường chỉ nhà máy; 企业 tiếng Trung rộng hơn — mọi doanh nghiệp.'],
   usage:'Lượng từ 家: 一家企业 (bảng 词语搭配). Ghép: 互联网企业, 大企业, 中小企业, 企业文化.',
   collo:['一家企业','互联网企业','大企业','企业文化'],
   ex_zh:'我叔叔在一家大企业工作。',ex_py:'Wǒ shūshu zài yì jiā dà qǐyè gōngzuò.',ex_vn:'Chú tôi làm việc ở một doanh nghiệp lớn.',
   exList:[
     {zh:'我叔叔在一家大企业工作。',py:'Wǒ shūshu zài yì jiā dà qǐyè gōngzuò.',vn:'Chú tôi làm việc ở một doanh nghiệp lớn.'},
     {zh:'在美国互联网企业“称霸”全球的背景下，微信的出现自然吸引了更多的关注。',py:'Zài Měiguó hùliánwǎng qǐyè “chēngbà” quánqiú de bèijǐng xià, Wēixìn de chūxiàn zìrán xīyǐnle gèng duō de guānzhù.',vn:'Trong bối cảnh các doanh nghiệp Internet Mỹ “xưng bá” toàn cầu, sự xuất hiện của WeChat đương nhiên thu hút nhiều chú ý hơn.'},
     {zh:'每个企业都有自己的企业文化。',py:'Měi ge qǐyè dōu yǒu zìjǐ de qǐyè wénhuà.',vn:'Mỗi doanh nghiệp đều có văn hoá doanh nghiệp riêng.'}
   ],
   colloFull:[
     {zh:'一家企业',py:'yì jiā qǐyè',vn:'một doanh nghiệp'},
     {zh:'互联网企业',py:'hùliánwǎng qǐyè',vn:'doanh nghiệp Internet'},
     {zh:'大企业',py:'dà qǐyè',vn:'doanh nghiệp lớn'},
     {zh:'企业文化',py:'qǐyè wénhuà',vn:'văn hoá doanh nghiệp'},
     {zh:'中小企业',py:'zhōng-xiǎo qǐyè',vn:'doanh nghiệp vừa và nhỏ'}
   ],
   patterns:[
     {s:'一家 + (lĩnh vực) + 企业',m:'Một doanh nghiệp (ngành) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả doanh nghiệp lớn cũng có lúc gặp khó khăn.',answer:'连大企业也有遇到困难的时候。',answerPy:'Lián dà qǐyè yě yǒu yùdào kùnnan de shíhou.',
      note:'连……也……: nhấn mạnh trường hợp “khó ngờ nhất”.',pair:'连……也……'},
     {promptLang:'vi',prompt:'Doanh nghiệp này tuy không lớn nhưng rất coi trọng người trẻ.',answer:'这家企业虽然不大，但是很重视年轻人。',answerPy:'Zhè jiā qǐyè suīrán bú dà, dànshì hěn zhòngshì niánqīngrén.',
      note:'Lượng từ của 企业 là 家; 不 trước thanh 4 (大) đọc bú.',pair:'虽然……但是……'}
   ]},

  {n:21,zh:'称霸',py:'chēngbà',pos:'Động từ',vn:'xưng bá, thống trị',hv:'xưng bá',em:'👑',lesson:1,
   explain:['Dựa vào sức mạnh để đứng đầu, khống chế một lĩnh vực / khu vực. Trong bài đặt trong ngoặc kép → nghĩa bóng: chiếm vị trí số một.'],
   usage:'称霸 + phạm vi: 称霸全球, 称霸世界, 称霸市场. Sắc thái mạnh, thiên về văn viết.',
   collo:['称霸全球','称霸市场','称霸一方'],
   ex_zh:'美国互联网企业曾经“称霸”全球。',ex_py:'Měiguó hùliánwǎng qǐyè céngjīng “chēngbà” quánqiú.',ex_vn:'Các doanh nghiệp Internet Mỹ từng “xưng bá” toàn cầu.',
   exList:[
     {zh:'美国互联网企业曾经“称霸”全球。',py:'Měiguó hùliánwǎng qǐyè céngjīng “chēngbà” quánqiú.',vn:'Các doanh nghiệp Internet Mỹ từng “xưng bá” toàn cầu.'},
     {zh:'这支球队连续五年称霸全国比赛。',py:'Zhè zhī qiúduì liánxù wǔ nián chēngbà quánguó bǐsài.',vn:'Đội bóng này thống trị giải toàn quốc suốt năm năm liền.'},
     {zh:'没有一家公司能永远称霸市场。',py:'Méiyǒu yì jiā gōngsī néng yǒngyuǎn chēngbà shìchǎng.',vn:'Không có công ty nào có thể thống trị thị trường mãi mãi.'}
   ],
   colloFull:[
     {zh:'称霸全球',py:'chēngbà quánqiú',vn:'xưng bá toàn cầu'},
     {zh:'称霸市场',py:'chēngbà shìchǎng',vn:'thống trị thị trường'},
     {zh:'称霸一方',py:'chēngbà yì fāng',vn:'xưng bá một vùng'},
     {zh:'称霸世界',py:'chēngbà shìjiè',vn:'xưng bá thế giới'}
   ],
   patterns:[
     {s:'称霸 + 全球 / 世界 / 市场',m:'Thống trị phạm vi nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội chúng tôi đã thống trị giải bóng rổ của trường ba năm liền rồi.',answer:'我们队已经连续三年称霸学校篮球比赛了。',answerPy:'Wǒmen duì yǐjīng liánxù sān nián chēngbà xuéxiào lánqiú bǐsài le.',
      note:'已经……了: sự việc kéo dài đến hiện tại; 连续 + thời gian đứng trước động từ.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Tuy công ty đó từng thống trị thị trường nhưng cuối cùng vẫn thất bại.',answer:'虽然那家公司曾经称霸市场，但是最后还是失败了。',answerPy:'Suīrán nà jiā gōngsī céngjīng chēngbà shìchǎng, dànshì zuìhòu háishi shībài le.',
      note:'曾经 = từng; 还是 = vẫn (kết quả không đổi).',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'背景',py:'bèijǐng',pos:'Danh từ',vn:'bối cảnh; phông nền',hv:'bối cảnh',em:'🖼️',lesson:1,
   explain:['① Hoàn cảnh lịch sử, xã hội nơi sự việc xảy ra. ② Phần cảnh phía sau trong ảnh, trên sân khấu.'],
   usage:'Cấu trúc trong bài: 在……的背景下 (trong bối cảnh …). Ghép: 历史背景, 社会背景, 家庭背景, 背景音乐.',
   collo:['在……的背景下','历史背景','社会背景','家庭背景'],
   ex_zh:'这个问题是在什么样的背景下提出来的？',ex_py:'Zhège wèntí shì zài shénmeyàng de bèijǐng xià tí chūlái de?',ex_vn:'Vấn đề này được đưa ra trong bối cảnh như thế nào?',
   exList:[
     {zh:'这个问题是在什么样的背景下提出来的？',py:'Zhège wèntí shì zài shénmeyàng de bèijǐng xià tí chūlái de?',vn:'Vấn đề này được đưa ra trong bối cảnh như thế nào?'},
     {zh:'在美国互联网企业“称霸”全球的背景下，微信的出现吸引了更多的关注。',py:'Zài Měiguó hùliánwǎng qǐyè “chēngbà” quánqiú de bèijǐng xià, Wēixìn de chūxiàn xīyǐnle gèng duō de guānzhù.',vn:'Trong bối cảnh doanh nghiệp Internet Mỹ “xưng bá” toàn cầu, sự xuất hiện của WeChat thu hút nhiều chú ý hơn.'},
     {zh:'这张照片的背景是长城。',py:'Zhè zhāng zhàopiàn de bèijǐng shì Chángchéng.',vn:'Phông nền tấm ảnh này là Vạn Lý Trường Thành.'}
   ],
   colloFull:[
     {zh:'在……的背景下',py:'zài……de bèijǐng xià',vn:'trong bối cảnh …'},
     {zh:'历史背景',py:'lìshǐ bèijǐng',vn:'bối cảnh lịch sử'},
     {zh:'社会背景',py:'shèhuì bèijǐng',vn:'bối cảnh xã hội'},
     {zh:'家庭背景',py:'jiātíng bèijǐng',vn:'hoàn cảnh gia đình'},
     {zh:'背景音乐',py:'bèijǐng yīnyuè',vn:'nhạc nền'}
   ],
   patterns:[
     {s:'在 + ……的背景下',m:'Trong bối cảnh …'},
     {s:'……的背景 + 是 + N',m:'Phông nền / bối cảnh của … là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có hiểu bối cảnh lịch sử thì mới đọc hiểu được bài văn này.',answer:'只有了解历史背景，才能读懂这篇文章。',answerPy:'Zhǐyǒu liǎojiě lìshǐ bèijǐng, cái néng dúdǒng zhè piān wénzhāng.',
      note:'只有 + điều kiện duy nhất, 才 + kết quả.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nhạc nền của video này là do chính tôi chọn.',answer:'这个视频的背景音乐是我自己选的。',answerPy:'Zhège shìpín de bèijǐng yīnyuè shì wǒ zìjǐ xuǎn de.',
      note:'Nhấn mạnh người làm: 是 + 我自己 + 选 + 的.',pair:'是……的'}
   ]},

  {n:23,zh:'高级',py:'gāojí',pos:'Tính từ',vn:'cao cấp',hv:'cao cấp',em:'🎖️',lesson:1,
   explain:['(Cấp bậc, trình độ, chất lượng) ở mức cao, vượt mức thông thường.'],
   usage:'Làm định ngữ: 高级副总裁, 高级工程师, 高级宾馆, 高级班. Làm vị ngữ: 这家饭店很高级.',
   collo:['高级副总裁','高级宾馆','高级班','很高级'],
   ex_zh:'张小龙是腾讯公司高级副总裁。',ex_py:'Zhāng Xiǎolóng shì Téngxùn gōngsī gāojí fù zǒngcái.',ex_vn:'Trương Tiểu Long là phó chủ tịch cấp cao của công ty Tencent.',
   exList:[
     {zh:'张小龙是腾讯公司高级副总裁。',py:'Zhāng Xiǎolóng shì Téngxùn gōngsī gāojí fù zǒngcái.',vn:'Trương Tiểu Long là phó chủ tịch cấp cao của công ty Tencent.'},
     {zh:'学完这本书，你就可以上高级班了。',py:'Xuéwán zhè běn shū, nǐ jiù kěyǐ shàng gāojí bān le.',vn:'Học xong cuốn này, em có thể lên lớp cao cấp.'},
     {zh:'这家宾馆看起来很高级，价格一定不便宜。',py:'Zhè jiā bīnguǎn kàn qǐlái hěn gāojí, jiàgé yídìng bù piányi.',vn:'Khách sạn này trông rất sang, giá chắc chắn không rẻ.'}
   ],
   colloFull:[
     {zh:'高级副总裁',py:'gāojí fù zǒngcái',vn:'phó chủ tịch cấp cao'},
     {zh:'高级宾馆',py:'gāojí bīnguǎn',vn:'khách sạn cao cấp'},
     {zh:'高级班',py:'gāojí bān',vn:'lớp cao cấp'},
     {zh:'很高级',py:'hěn gāojí',vn:'rất cao cấp, rất sang'},
     {zh:'高级工程师',py:'gāojí gōngchéngshī',vn:'kỹ sư cao cấp'}
   ],
   patterns:[
     {s:'高级 + chức danh / N',m:'… cao cấp (làm định ngữ)'},
     {s:'看起来很高级',m:'Trông rất sang, rất cao cấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại này trông rất cao cấp, nhưng thật ra không đắt.',answer:'这部手机看起来很高级，其实并不贵。',answerPy:'Zhè bù shǒujī kàn qǐlái hěn gāojí, qíshí bìng bú guì.',
      note:'看起来 = trông có vẻ; 其实 + 并不 lật lại ấn tượng ban đầu.',pair:'看起来'},
     {promptLang:'vi',prompt:'Chỉ cần thi đạt là em có thể lên lớp cao cấp.',answer:'只要考试通过了，你就能上高级班。',answerPy:'Zhǐyào kǎoshì tōngguò le, nǐ jiù néng shàng gāojí bān.',
      note:'高级 làm định ngữ trực tiếp, không cần 的: 高级班.',pair:'只要……就……'}
   ]},

  {n:24,zh:'副',py:'fù',pos:'Tính từ',vn:'phó, phụ',hv:'phó',em:'🥈',lesson:1,
   explain:['Đứng trước chức vụ: cấp phó, hỗ trợ người đứng đầu (副总裁, 副校长, 副班长). Còn nghĩa “phụ, thứ yếu”: 副作用.','(副 còn là lượng từ: 一副眼镜 — khác nghĩa trong bài.)'],
   usage:'副 + chức danh: 副总裁, 副经理, 副校长, 副班长. Đối lập với 正 (chính).',
   collo:['副总裁','副校长','副班长','副作用'],
   ex_zh:'被称为“微信之父”的张小龙是腾讯公司高级副总裁。',ex_py:'Bèi chēngwéi “Wēixìn zhī fù” de Zhāng Xiǎolóng shì Téngxùn gōngsī gāojí fù zǒngcái.',ex_vn:'Trương Tiểu Long, người được gọi là “cha đẻ WeChat”, là phó chủ tịch cấp cao của Tencent.',
   exList:[
     {zh:'被称为“微信之父”的张小龙是腾讯公司高级副总裁。',py:'Bèi chēngwéi “Wēixìn zhī fù” de Zhāng Xiǎolóng shì Téngxùn gōngsī gāojí fù zǒngcái.',vn:'Trương Tiểu Long, người được gọi là “cha đẻ WeChat”, là phó chủ tịch cấp cao của Tencent.'},
     {zh:'我在班里当副班长，帮班长管理班级的事情。',py:'Wǒ zài bān li dāng fù bānzhǎng, bāng bānzhǎng guǎnlǐ bānjí de shìqing.',vn:'Tôi làm lớp phó, giúp lớp trưởng quản lý việc của lớp.'},
     {zh:'这种药效果不错，但是有一点儿副作用。',py:'Zhè zhǒng yào xiàoguǒ búcuò, dànshì yǒu yìdiǎnr fùzuòyòng.',vn:'Thuốc này hiệu quả khá tốt nhưng có chút tác dụng phụ.'}
   ],
   colloFull:[
     {zh:'副总裁',py:'fù zǒngcái',vn:'phó chủ tịch'},
     {zh:'副校长',py:'fù xiàozhǎng',vn:'phó hiệu trưởng'},
     {zh:'副班长',py:'fù bānzhǎng',vn:'lớp phó'},
     {zh:'副作用',py:'fùzuòyòng',vn:'tác dụng phụ'},
     {zh:'副经理',py:'fù jīnglǐ',vn:'phó giám đốc'}
   ],
   patterns:[
     {s:'副 + chức danh',m:'Phó … (副校长, 副经理)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay ngay cả phó hiệu trưởng cũng đến xem chúng tôi biểu diễn.',answer:'今天连副校长都来看我们的演出了。',answerPy:'Jīntiān lián fù xiàozhǎng dōu lái kàn wǒmen de yǎnchū le.',
      note:'连 + người + 都 + V: nhấn mạnh.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cô ấy được cả lớp bầu làm lớp phó.',answer:'她被全班同学选为副班长。',answerPy:'Tā bèi quán bān tóngxué xuǎnwéi fù bānzhǎng.',
      note:'被 + người + 选为 + chức vụ.',pair:'被'}
   ]},

  {n:25,zh:'开发',py:'kāifā',pos:'Động từ',vn:'khai thác; nghiên cứu phát triển (sản phẩm)',hv:'khai phát',em:'🛠️',lesson:1,
   explain:['① Khai thác tài nguyên, vùng đất: 开发山区. ② Nghiên cứu làm ra sản phẩm, kỹ thuật mới: 开发新产品, 开发软件.'],
   usage:'Theo bảng 词语搭配: 开发 + 出(来) / 成功. Danh từ ghép: 研究开发 = 研发 (研发中心).',
   collo:['开发新产品','开发出来','开发成功','研究开发'],
   ex_zh:'公司新开发出的产品很受消费者欢迎。',ex_py:'Gōngsī xīn kāifā chū de chǎnpǐn hěn shòu xiāofèizhě huānyíng.',ex_vn:'Sản phẩm công ty mới phát triển ra rất được người tiêu dùng ưa chuộng.',
   exList:[
     {zh:'公司新开发出的产品很受消费者欢迎。',py:'Gōngsī xīn kāifā chū de chǎnpǐn hěn shòu xiāofèizhě huānyíng.',vn:'Sản phẩm công ty mới phát triển ra rất được người tiêu dùng ưa chuộng.'},
     {zh:'微信的研究开发工作开展得很早。',py:'Wēixìn de yánjiū kāifā gōngzuò kāizhǎn de hěn zǎo.',vn:'Công việc nghiên cứu phát triển WeChat được triển khai từ rất sớm.'},
     {zh:'他们花了两年时间，终于把这个应用开发成功了。',py:'Tāmen huāle liǎng nián shíjiān, zhōngyú bǎ zhège yìngyòng kāifā chénggōng le.',vn:'Họ mất hai năm, cuối cùng đã phát triển thành công ứng dụng này.'}
   ],
   colloFull:[
     {zh:'开发新产品',py:'kāifā xīn chǎnpǐn',vn:'phát triển sản phẩm mới'},
     {zh:'开发出来',py:'kāifā chūlái',vn:'phát triển ra được'},
     {zh:'开发成功',py:'kāifā chénggōng',vn:'phát triển thành công'},
     {zh:'研究开发',py:'yánjiū kāifā',vn:'nghiên cứu phát triển'},
     {zh:'开发软件',py:'kāifā ruǎnjiàn',vn:'phát triển phần mềm'}
   ],
   patterns:[
     {s:'开发 + 出(来) / 成功',m:'Phát triển ra / phát triển thành công (bảng 词语搭配)'},
     {s:'把 + N + 开发出来 / 开发成功',m:'Phát triển xong cái gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuối cùng họ đã phát triển xong phần mềm này.',answer:'他们终于把这个软件开发出来了。',answerPy:'Tāmen zhōngyú bǎ zhège ruǎnjiàn kāifā chūlái le.',
      note:'Câu 把 bắt buộc có bổ ngữ phía sau động từ: 开发 + 出来.',pair:'把'},
     {promptLang:'vi',prompt:'Sản phẩm mới vừa được phát triển ra là đã bán rất chạy.',answer:'新产品一开发出来就卖得特别好。',answerPy:'Xīn chǎnpǐn yì kāifā chūlái jiù mài de tèbié hǎo.',
      note:'一 + 开发出来 + 就 + kết quả; 一 trước thanh 1 đọc yì.',pair:'一……就……'}
   ]},

  {n:26,zh:'中心',py:'zhōngxīn',pos:'Danh từ',vn:'trung tâm',hv:'trung tâm',em:'🎯',lesson:1,
   explain:['① Điểm chính giữa. ② Nơi / cơ quan giữ vai trò chính trong một lĩnh vực: 研发中心, 购物中心, 经济中心.'],
   usage:'Theo bảng 词语搭配: 城市 / 政治 / 经济 / 工作 / 研发 + 中心. Cũng nói 以……为中心.',
   collo:['研发中心','城市中心','经济中心','购物中心'],
   ex_zh:'腾讯广州产品研发中心开始考虑相关业务。',ex_py:'Téngxùn Guǎngzhōu chǎnpǐn yánfā zhōngxīn kāishǐ kǎolǜ xiāngguān yèwù.',ex_vn:'Trung tâm nghiên cứu phát triển sản phẩm của Tencent ở Quảng Châu bắt đầu tính đến mảng kinh doanh liên quan.',
   exList:[
     {zh:'腾讯广州产品研发中心开始考虑相关业务。',py:'Téngxùn Guǎngzhōu chǎnpǐn yánfā zhōngxīn kāishǐ kǎolǜ xiāngguān yèwù.',vn:'Trung tâm nghiên cứu phát triển sản phẩm của Tencent ở Quảng Châu bắt đầu tính đến mảng kinh doanh liên quan.'},
     {zh:'上海是中国的经济中心。',py:'Shànghǎi shì Zhōngguó de jīngjì zhōngxīn.',vn:'Thượng Hải là trung tâm kinh tế của Trung Quốc.'},
     {zh:'我家住在城市中心，去哪儿都很方便。',py:'Wǒ jiā zhù zài chéngshì zhōngxīn, qù nǎr dōu hěn fāngbiàn.',vn:'Nhà tôi ở trung tâm thành phố, đi đâu cũng tiện.'}
   ],
   colloFull:[
     {zh:'研发中心',py:'yánfā zhōngxīn',vn:'trung tâm nghiên cứu phát triển'},
     {zh:'城市中心',py:'chéngshì zhōngxīn',vn:'trung tâm thành phố'},
     {zh:'经济中心',py:'jīngjì zhōngxīn',vn:'trung tâm kinh tế'},
     {zh:'购物中心',py:'gòuwù zhōngxīn',vn:'trung tâm mua sắm'},
     {zh:'政治中心',py:'zhèngzhì zhōngxīn',vn:'trung tâm chính trị'}
   ],
   patterns:[
     {s:'城市 / 政治 / 经济 / 工作 / 研发 + 中心',m:'Trung tâm … (bảng 词语搭配)'},
     {s:'以 + A + 为中心',m:'Lấy A làm trung tâm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hà Nội không những là trung tâm chính trị mà còn là trung tâm văn hoá.',answer:'河内不仅是政治中心，而且是文化中心。',answerPy:'Hénèi bùjǐn shì zhèngzhì zhōngxīn, érqiě shì wénhuà zhōngxīn.',
      note:'不仅……而且…… nối hai vị ngữ 是 + N.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Trung tâm mua sắm mới vừa mở cửa là đã có rất nhiều người đến.',answer:'新的购物中心一开门就来了很多人。',answerPy:'Xīn de gòuwù zhōngxīn yì kāimén jiù láile hěn duō rén.',
      note:'Câu tồn hiện: 来了 + 很多人 (người xuất hiện đứng sau động từ).',pair:'一……就……'}
   ]},

  {n:27,zh:'相关',py:'xiāngguān',pos:'Động từ',vn:'liên quan, tương quan',hv:'tương quan',em:'🔗',lesson:1,
   explain:['Có quan hệ với nhau, dính dáng tới nhau.'],
   usage:'Làm định ngữ: 相关业务, 相关部门, 相关知识. Làm vị ngữ: A 与 / 和 B (密切)相关.',
   collo:['相关业务','相关部门','与……相关','密切相关'],
   ex_zh:'健康和生活习惯密切相关。',ex_py:'Jiànkāng hé shēnghuó xíguàn mìqiè xiāngguān.',ex_vn:'Sức khoẻ liên quan mật thiết đến thói quen sinh hoạt.',
   exList:[
     {zh:'健康和生活习惯密切相关。',py:'Jiànkāng hé shēnghuó xíguàn mìqiè xiāngguān.',vn:'Sức khoẻ liên quan mật thiết đến thói quen sinh hoạt.'},
     {zh:'2010年底，腾讯广州产品研发中心就开始考虑相关业务。',py:'Èr líng yī líng nián dǐ, Téngxùn Guǎngzhōu chǎnpǐn yánfā zhōngxīn jiù kāishǐ kǎolǜ xiāngguān yèwù.',vn:'Cuối năm 2010, trung tâm nghiên cứu phát triển sản phẩm của Tencent ở Quảng Châu đã bắt đầu tính đến mảng kinh doanh liên quan.'},
     {zh:'有问题的话，请联系相关部门。',py:'Yǒu wèntí dehuà, qǐng liánxì xiāngguān bùmén.',vn:'Nếu có vấn đề, xin liên hệ bộ phận liên quan.'}
   ],
   colloFull:[
     {zh:'相关业务',py:'xiāngguān yèwù',vn:'mảng kinh doanh liên quan'},
     {zh:'相关部门',py:'xiāngguān bùmén',vn:'bộ phận liên quan'},
     {zh:'与……相关',py:'yǔ……xiāngguān',vn:'liên quan đến …'},
     {zh:'密切相关',py:'mìqiè xiāngguān',vn:'liên quan mật thiết'},
     {zh:'相关知识',py:'xiāngguān zhīshi',vn:'kiến thức liên quan'}
   ],
   patterns:[
     {s:'A + 与 / 和 + B + (密切)相关',m:'A liên quan (mật thiết) đến B'},
     {s:'相关 + 业务 / 部门 / 知识',m:'… liên quan (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần là sách liên quan đến máy tính là cậu ấy thích đọc.',answer:'只要是跟电脑相关的书，他就喜欢看。',answerPy:'Zhǐyào shì gēn diànnǎo xiāngguān de shū, tā jiù xǐhuan kàn.',
      note:'跟……相关的 + N: … liên quan đến ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Những vấn đề liên quan này đều đã được giải quyết.',answer:'这些相关的问题都已经被解决了。',answerPy:'Zhèxiē xiāngguān de wèntí dōu yǐjīng bèi jiějué le.',
      note:'相关 làm định ngữ; chủ ngữ là vật chịu tác động → câu 被.',pair:'被'}
   ]},

  {n:28,zh:'业务',py:'yèwù',pos:'Danh từ',vn:'nghiệp vụ; mảng kinh doanh, phi vụ làm ăn',hv:'nghiệp vụ',em:'💼',lesson:1,
   explain:['① Công việc chuyên môn của một ngành, một đơn vị: 业务能力, 相关业务. ② Hợp đồng / phi vụ làm ăn: 做成三笔大业务.','Khác “nghiệp vụ” tiếng Việt (chủ yếu = kỹ năng chuyên môn): 业务 còn là mảng kinh doanh, phi vụ làm ăn.'],
   usage:'Theo bảng 词语搭配: 一笔 / 一项 + 业务. Ghép: 业务能力, 业务范围, 开展业务.',
   collo:['一笔业务','一项业务','业务能力','开展业务'],
   ex_zh:'那个新来的销售员这个月做成了三笔大业务，真厉害！',ex_py:'Nàge xīn lái de xiāoshòuyuán zhège yuè zuòchéngle sān bǐ dà yèwù, zhēn lìhai!',ex_vn:'Nhân viên bán hàng mới đến tháng này chốt được ba hợp đồng lớn, giỏi thật!',
   exList:[
     {zh:'那个新来的销售员这个月做成了三笔大业务，真厉害！',py:'Nàge xīn lái de xiāoshòuyuán zhège yuè zuòchéngle sān bǐ dà yèwù, zhēn lìhai!',vn:'Nhân viên bán hàng mới đến tháng này chốt được ba hợp đồng lớn, giỏi thật!'},
     {zh:'他业务能力很强，很快就当上了经理。',py:'Tā yèwù nénglì hěn qiáng, hěn kuài jiù dāngshàngle jīnglǐ.',vn:'Anh ấy năng lực chuyên môn rất tốt, chẳng mấy chốc đã lên làm giám đốc.'},
     {zh:'公司今年开始在越南开展业务。',py:'Gōngsī jīnnián kāishǐ zài Yuènán kāizhǎn yèwù.',vn:'Năm nay công ty bắt đầu triển khai kinh doanh ở Việt Nam.'}
   ],
   colloFull:[
     {zh:'一笔业务',py:'yì bǐ yèwù',vn:'một phi vụ làm ăn'},
     {zh:'一项业务',py:'yí xiàng yèwù',vn:'một mảng nghiệp vụ'},
     {zh:'业务能力',py:'yèwù nénglì',vn:'năng lực chuyên môn'},
     {zh:'开展业务',py:'kāizhǎn yèwù',vn:'triển khai kinh doanh'},
     {zh:'相关业务',py:'xiāngguān yèwù',vn:'mảng kinh doanh liên quan'}
   ],
   patterns:[
     {s:'一笔 / 一项 + 业务',m:'Một phi vụ / một mảng nghiệp vụ (bảng 词语搭配)'},
     {s:'业务 + 能力 / 范围',m:'Năng lực / phạm vi chuyên môn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô ấy mới đến chưa lâu nhưng năng lực chuyên môn rất tốt.',answer:'虽然她刚来不久，但是业务能力很强。',answerPy:'Suīrán tā gāng lái bù jiǔ, dànshì yèwù nénglì hěn qiáng.',
      note:'Năng lực mạnh / yếu dùng 强 / 弱: 业务能力很强.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Anh ấy chốt được một phi vụ lớn, được sếp khen.',answer:'他做成了一笔大业务，被老板表扬了。',answerPy:'Tā zuòchéngle yì bǐ dà yèwù, bèi lǎobǎn biǎoyáng le.',
      note:'Lượng từ của 业务 là 笔 / 项; 被 + người + V.',pair:'被'}
   ]},

  {n:29,zh:'现实',py:'xiànshí',pos:'Danh từ',vn:'hiện thực, thực tế',hv:'hiện thực',em:'🌍',lesson:1,
   explain:['Những gì đang thật sự tồn tại, sự thật trước mắt. Còn dùng như tính từ: thực tế, hợp thực tế (这个计划不太现实).','Đảo chữ thành 实现 là động từ “thực hiện” — đừng nhầm.'],
   usage:'Cụm: 面对现实, 认识到……的现实, 现实生活, 变成现实; tính từ: 很现实, 不太现实.',
   collo:['面对现实','现实生活','认识到……的现实','不太现实'],
   ex_zh:'他们清楚地认识到了这样的现实。',ex_py:'Tāmen qīngchu de rènshi dàole zhèyàng de xiànshí.',ex_vn:'Họ nhận thức rõ một thực tế như thế này.',
   exList:[
     {zh:'他们清楚地认识到了这样的现实。',py:'Tāmen qīngchu de rènshi dàole zhèyàng de xiànshí.',vn:'Họ nhận thức rõ một thực tế như thế này.'},
     {zh:'考试没考好，你得面对现实，下次再努力。',py:'Kǎoshì méi kǎohǎo, nǐ děi miànduì xiànshí, xià cì zài nǔlì.',vn:'Thi không tốt thì em phải đối mặt với thực tế, lần sau cố gắng hơn.'},
     {zh:'一个月学会汉语？这个计划不太现实。',py:'Yí ge yuè xuéhuì Hànyǔ? Zhège jìhuà bú tài xiànshí.',vn:'Một tháng học xong tiếng Trung? Kế hoạch này không thực tế lắm.'}
   ],
   colloFull:[
     {zh:'面对现实',py:'miànduì xiànshí',vn:'đối mặt với thực tế'},
     {zh:'现实生活',py:'xiànshí shēnghuó',vn:'cuộc sống thực'},
     {zh:'认识到……的现实',py:'rènshi dào……de xiànshí',vn:'nhận thức được thực tế …'},
     {zh:'不太现实',py:'bú tài xiànshí',vn:'không thực tế lắm'},
     {zh:'变成现实',py:'biànchéng xiànshí',vn:'trở thành hiện thực'}
   ],
   patterns:[
     {s:'面对 / 接受 + 现实',m:'Đối mặt / chấp nhận thực tế'},
     {s:'梦想 + 变成(了)现实',m:'Giấc mơ trở thành hiện thực (= 梦想实现了)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có đối mặt với thực tế thì mới giải quyết được vấn đề.',answer:'只有面对现实，才能解决问题。',answerPy:'Zhǐyǒu miànduì xiànshí, cái néng jiějué wèntí.',
      note:'面对现实 là cụm cố định; 只有……才…….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Ước mơ của tôi cuối cùng đã trở thành hiện thực.',answer:'我的梦想终于变成了现实。',answerPy:'Wǒ de mèngxiǎng zhōngyú biànchéngle xiànshí.',
      note:'V + 成 (bổ ngữ kết quả): 变成现实. Cũng có thể nói 我的梦想终于实现了.',pair:'V + 成 (bổ ngữ kết quả)'}
   ]},

  {n:30,zh:'个人',py:'gèrén',pos:'Danh từ',vn:'cá nhân',hv:'cá nhân',em:'🙋',lesson:1,
   explain:['Một người riêng lẻ (đối lập với tập thể); cũng dùng để chỉ bản thân người nói: 我个人认为…'],
   usage:'Làm định ngữ trực tiếp, không cần 的: 个人爱好, 个人计算机, 个人信息. 我个人 = bản thân tôi. Khác 自己 (đại từ “tự mình, chính mình”).',
   collo:['个人爱好','个人计算机','我个人认为','个人信息'],
   ex_zh:'这是我的个人爱好，跟我学什么专业没有关系。',ex_py:'Zhè shì wǒ de gèrén àihào, gēn wǒ xué shénme zhuānyè méiyǒu guānxi.',ex_vn:'Đây là sở thích cá nhân của tôi, không liên quan đến việc tôi học chuyên ngành gì.',
   exList:[
     {zh:'这是我的个人爱好，跟我学什么专业没有关系。',py:'Zhè shì wǒ de gèrén àihào, gēn wǒ xué shénme zhuānyè méiyǒu guānxi.',vn:'Đây là sở thích cá nhân của tôi, không liên quan đến việc tôi học chuyên ngành gì.'},
     {zh:'在个人计算机时代，中国在产品创新上难有领导地位。',py:'Zài gèrén jìsuànjī shídài, Zhōngguó zài chǎnpǐn chuàngxīn shang nán yǒu lǐngdǎo dìwèi.',vn:'Trong thời đại máy tính cá nhân, Trung Quốc khó giữ vị trí dẫn đầu về đổi mới sản phẩm.'},
     {zh:'我个人认为，中学生用手机应该有时间限制。',py:'Wǒ gèrén rènwéi, zhōngxuéshēng yòng shǒujī yīnggāi yǒu shíjiān xiànzhì.',vn:'Cá nhân tôi cho rằng học sinh trung học dùng điện thoại nên có giới hạn thời gian.'}
   ],
   colloFull:[
     {zh:'个人爱好',py:'gèrén àihào',vn:'sở thích cá nhân'},
     {zh:'个人计算机',py:'gèrén jìsuànjī',vn:'máy tính cá nhân'},
     {zh:'我个人认为',py:'wǒ gèrén rènwéi',vn:'cá nhân tôi cho rằng'},
     {zh:'个人信息',py:'gèrén xìnxī',vn:'thông tin cá nhân'},
     {zh:'个人问题',py:'gèrén wèntí',vn:'vấn đề cá nhân'}
   ],
   patterns:[
     {s:'个人 + N (không cần 的)',m:'… cá nhân (个人爱好, 个人信息)'},
     {s:'我个人 + 认为 / 觉得',m:'Cá nhân tôi cho rằng … (nêu ý kiến riêng một cách khiêm tốn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên mạng đừng tuỳ tiện nói thông tin cá nhân cho người khác.',answer:'在网上不要随便把个人信息告诉别人。',answerPy:'Zài wǎng shang búyào suíbiàn bǎ gèrén xìnxī gàosu biérén.',
      note:'把 + 个人信息 + 告诉 + người.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy đây là chuyện cá nhân của cậu ấy nhưng chúng ta cũng nên quan tâm một chút.',answer:'虽然这是他的个人问题，但是我们也应该关心一下。',answerPy:'Suīrán zhè shì tā de gèrén wèntí, dànshì wǒmen yě yīnggāi guānxīn yíxià.',
      note:'个人问题 = chuyện riêng; V + 一下 làm nhẹ giọng.',pair:'虽然……但是……'}
   ]},

  {n:31,zh:'以及',py:'yǐjí',pos:'Liên từ',vn:'và, cùng với, cũng như',hv:'dĩ cập',em:'➕',lesson:1,
   explain:['Nối các từ / cụm từ NGANG HÀNG; phần trước 以及 thường là chính hoặc xảy ra trước, phần sau là phụ hoặc xảy ra sau. Sắc thái VĂN VIẾT. Đây là điểm ngữ pháp trọng tâm của bài.'],
   usage:'A、B 以及 C: đặt trước thành phần CUỐI của chuỗi liệt kê. Không nối hai tính từ làm vị ngữ (không nói 他聪明以及努力).',
   collo:['A、B以及C','以及其他','用户数量以及市场成熟程度'],
   ex_zh:'吃饭时不要用筷子敲打碗、盘子以及桌面。',ex_py:'Chīfàn shí búyào yòng kuàizi qiāodǎ wǎn, pánzi yǐjí zhuōmiàn.',ex_vn:'Khi ăn đừng dùng đũa gõ vào bát, đĩa và mặt bàn.',
   exList:[
     {zh:'吃饭时不要用筷子敲打碗、盘子以及桌面。',py:'Chīfàn shí búyào yòng kuàizi qiāodǎ wǎn, pánzi yǐjí zhuōmiàn.',vn:'Khi ăn đừng dùng đũa gõ vào bát, đĩa và mặt bàn.'},
     {zh:'学校的领导、教师以及一些学生代表观看了演出。',py:'Xuéxiào de lǐngdǎo, jiàoshī yǐjí yìxiē xuésheng dàibiǎo guānkànle yǎnchū.',vn:'Lãnh đạo nhà trường, giáo viên cùng một số đại diện học sinh đã xem buổi biểu diễn.'},
     {zh:'本店销售电视、冰箱、洗衣机以及其他电器。',py:'Běn diàn xiāoshòu diànshì, bīngxiāng, xǐyījī yǐjí qítā diànqì.',vn:'Cửa hàng chúng tôi bán tivi, tủ lạnh, máy giặt và các đồ điện khác.'}
   ],
   colloFull:[
     {zh:'A、B以及C',py:'A, B yǐjí C',vn:'A, B và C'},
     {zh:'以及其他',py:'yǐjí qítā',vn:'và những … khác'},
     {zh:'用户数量以及市场成熟程度',py:'yònghù shùliàng yǐjí shìchǎng chéngshú chéngdù',vn:'số người dùng cũng như mức độ trưởng thành của thị trường'},
     {zh:'老师以及同学们',py:'lǎoshī yǐjí tóngxuémen',vn:'thầy cô cùng các bạn'}
   ],
   patterns:[
     {s:'A、B + 以及 + C',m:'A, B và C (C thường là phần phụ / xếp sau)'},
     {s:'…… + 以及 + 其他 + N',m:'… và các … khác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ hỏi tôi thời tiết Bắc Kinh thế nào, ăn có quen không và khi nào về nhà.',answer:'妈妈问我北京的天气怎么样，吃饭习惯不习惯，以及什么时候回家。',answerPy:'Māma wèn wǒ Běijīng de tiānqì zěnmeyàng, chīfàn xíguàn bù xíguàn, yǐjí shénme shíhou huí jiā.',
      note:'以及 đứng trước ý CUỐI cùng của chuỗi; 习惯不习惯 là câu hỏi chính phản.',pair:'câu hỏi chính phản (V不V)'},
     {promptLang:'vi',prompt:'Hiệu trưởng, giáo viên và phụ huynh đều được mời.',answer:'校长、老师以及家长都被邀请了。',answerPy:'Xiàozhǎng, lǎoshī yǐjí jiāzhǎng dōu bèi yāoqǐng le.',
      note:'Liệt kê bằng dấu 、, chỉ dùng 以及 một lần trước thành phần cuối.',pair:'被'}
   ]},

  {n:32,zh:'程度',py:'chéngdù',pos:'Danh từ',vn:'mức độ, trình độ',hv:'trình độ',em:'📊',lesson:1,
   explain:['Mức, tầng bậc mà một mặt nào đó đạt tới (成熟程度, 严重的程度, 文化程度). Điểm ngữ pháp trọng tâm của bài.','Tiếng Việt “trình độ” hay chỉ năng lực (trình độ tiếng Anh); tiếng Trung nói năng lực ngoại ngữ thường dùng 水平.'],
   usage:'Cụm hay gặp: ……到了……的程度 (đến mức …); 在很大程度上 (ở mức độ lớn); N + 程度 (成熟程度, 重视程度, 文化程度).',
   collo:['……的程度','在很大程度上','成熟程度','文化程度'],
   ex_zh:'问题已经发展到了十分严重的程度。',ex_py:'Wèntí yǐjīng fāzhǎn dàole shífēn yánzhòng de chéngdù.',ex_vn:'Vấn đề đã phát triển đến mức hết sức nghiêm trọng.',
   exList:[
     {zh:'问题已经发展到了十分严重的程度。',py:'Wèntí yǐjīng fāzhǎn dàole shífēn yánzhòng de chéngdù.',vn:'Vấn đề đã phát triển đến mức hết sức nghiêm trọng.'},
     {zh:'在很大程度上，一个人的未来取决于他所受的教育。',py:'Zài hěn dà chéngdù shang, yí ge rén de wèilái qǔjué yú tā suǒ shòu de jiàoyù.',vn:'Ở mức độ lớn, tương lai của một người phụ thuộc vào nền giáo dục mà người đó nhận được.'},
     {zh:'他玩手机已经到了不吃饭的程度。',py:'Tā wán shǒujī yǐjīng dàole bù chīfàn de chéngdù.',vn:'Cậu ta chơi điện thoại đến mức bỏ cả ăn.'}
   ],
   colloFull:[
     {zh:'……的程度',py:'……de chéngdù',vn:'đến mức …'},
     {zh:'在很大程度上',py:'zài hěn dà chéngdù shang',vn:'ở mức độ lớn'},
     {zh:'成熟程度',py:'chéngshú chéngdù',vn:'mức độ trưởng thành'},
     {zh:'文化程度',py:'wénhuà chéngdù',vn:'trình độ học vấn'},
     {zh:'严重的程度',py:'yánzhòng de chéngdù',vn:'mức độ nghiêm trọng'}
   ],
   patterns:[
     {s:'(V / Adj) + 到了 + ……的程度',m:'Đến mức …'},
     {s:'在很大程度上 / 在一定程度上',m:'Ở mức độ lớn / ở một mức độ nhất định'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy mệt đến mức vừa nằm xuống là ngủ ngay.',answer:'他累到了一躺下就睡着的程度。',answerPy:'Tā lèi dàole yì tǎngxià jiù shuìzháo de chéngdù.',
      note:'Cả cụm 一躺下就睡着 làm định ngữ cho 程度.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Bệnh của ông đã nặng đến mức phải nằm viện.',answer:'爷爷的病已经严重到了必须住院的程度。',answerPy:'Yéye de bìng yǐjīng yánzhòng dàole bìxū zhùyuàn de chéngdù.',
      note:'Tính từ + 到了 + ……的程度; 到 là bổ ngữ kết quả.',pair:'V + 到 (bổ ngữ kết quả)'}
   ]},

  {n:33,zh:'发达',py:'fādá',pos:'Tính từ',vn:'phát triển (ở trình độ cao)',hv:'phát đạt',em:'🏙️',lesson:1,
   explain:['Đã phát triển ở mức cao: 发达国家, 经济发达, 交通发达. Là TÍNH TỪ, không mang tân ngữ.','Khác 发展 (động từ — phát triển, biến đổi): nói 发展经济, không nói 发达经济. Tiếng Việt “phát đạt” chỉ làm ăn thịnh vượng — nghĩa hẹp hơn.'],
   usage:'很 / 不太 / 最 + 发达; 发达国家 / 发达地区; 大脑很发达.',
   collo:['发达国家','经济发达','交通发达','很发达'],
   ex_zh:'这个城市的经济不太发达。',ex_py:'Zhège chéngshì de jīngjì bú tài fādá.',ex_vn:'Kinh tế thành phố này không phát triển lắm.',
   exList:[
     {zh:'这个城市的经济不太发达。',py:'Zhège chéngshì de jīngjì bú tài fādá.',vn:'Kinh tế thành phố này không phát triển lắm.'},
     {zh:'中国互联网的用户数量以及市场成熟程度等都低于发达国家。',py:'Zhōngguó hùliánwǎng de yònghù shùliàng yǐjí shìchǎng chéngshú chéngdù děng dōu dīyú fādá guójiā.',vn:'Số người dùng Internet cũng như mức độ trưởng thành của thị trường Trung Quốc đều thấp hơn các nước phát triển.'},
     {zh:'四川是茶馆文化最发达的地区之一。',py:'Sìchuān shì cháguǎn wénhuà zuì fādá de dìqū zhī yī.',vn:'Tứ Xuyên là một trong những vùng có văn hoá quán trà phát triển nhất.'}
   ],
   colloFull:[
     {zh:'发达国家',py:'fādá guójiā',vn:'nước phát triển'},
     {zh:'经济发达',py:'jīngjì fādá',vn:'kinh tế phát triển'},
     {zh:'交通发达',py:'jiāotōng fādá',vn:'giao thông phát triển'},
     {zh:'很发达',py:'hěn fādá',vn:'rất phát triển'},
     {zh:'大脑很发达',py:'dànǎo hěn fādá',vn:'bộ não rất phát triển'}
   ],
   patterns:[
     {s:'N + (很 / 不太 / 最) + 发达',m:'… (rất / không mấy / nhất) phát triển'},
     {s:'发达 + 国家 / 地区',m:'Nước / vùng phát triển'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giao thông ở đây ngày càng phát triển.',answer:'这里的交通越来越发达了。',answerPy:'Zhèlǐ de jiāotōng yuè lái yuè fādá le.',
      note:'发达 là tính từ nên đứng sau 越来越 được.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy kinh tế ở quê tôi không phát triển lắm nhưng phong cảnh rất đẹp.',answer:'虽然我老家的经济不太发达，但是风景很美。',answerPy:'Suīrán wǒ lǎojiā de jīngjì bú tài fādá, dànshì fēngjǐng hěn měi.',
      note:'不太 + tính từ: không … lắm; 不 trước thanh 4 (太) đọc bú.',pair:'虽然……但是……'}
   ]},

  {n:34,zh:'创新',py:'chuàngxīn',pos:'Động từ',vn:'sáng tạo cái mới, đổi mới',hv:'sáng tân',em:'💡',lesson:1,
   explain:['Bỏ cái cũ, tạo ra cái mới (sản phẩm, cách làm, kỹ thuật). Vừa là động từ vừa dùng như danh từ.'],
   usage:'Cụm: 产品创新, 技术创新, 在……上创新, 不断创新, 创新精神.',
   collo:['产品创新','技术创新','不断创新','创新精神'],
   ex_zh:'一家企业如果不创新，很快就会被市场淘汰。',ex_py:'Yì jiā qǐyè rúguǒ bú chuàngxīn, hěn kuài jiù huì bèi shìchǎng táotài.',ex_vn:'Một doanh nghiệp nếu không đổi mới thì sẽ nhanh chóng bị thị trường đào thải.',
   exList:[
     {zh:'一家企业如果不创新，很快就会被市场淘汰。',py:'Yì jiā qǐyè rúguǒ bú chuàngxīn, hěn kuài jiù huì bèi shìchǎng táotài.',vn:'Một doanh nghiệp nếu không đổi mới thì sẽ nhanh chóng bị thị trường đào thải.'},
     {zh:'中国在产品创新上难有领导地位。',py:'Zhōngguó zài chǎnpǐn chuàngxīn shang nán yǒu lǐngdǎo dìwèi.',vn:'Trung Quốc khó giữ vị trí dẫn đầu về đổi mới sản phẩm.'},
     {zh:'老师鼓励我们在学习方法上大胆创新。',py:'Lǎoshī gǔlì wǒmen zài xuéxí fāngfǎ shang dàdǎn chuàngxīn.',vn:'Thầy cô khuyến khích chúng tôi mạnh dạn đổi mới phương pháp học.'}
   ],
   colloFull:[
     {zh:'产品创新',py:'chǎnpǐn chuàngxīn',vn:'đổi mới sản phẩm'},
     {zh:'技术创新',py:'jìshù chuàngxīn',vn:'đổi mới công nghệ'},
     {zh:'不断创新',py:'búduàn chuàngxīn',vn:'không ngừng đổi mới'},
     {zh:'创新精神',py:'chuàngxīn jīngshén',vn:'tinh thần sáng tạo'},
     {zh:'在……上创新',py:'zài……shang chuàngxīn',vn:'đổi mới về mặt …'}
   ],
   patterns:[
     {s:'在 + phương diện + 上 + 创新',m:'Đổi mới ở mặt nào'},
     {s:'不断 + 创新',m:'Không ngừng đổi mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có không ngừng đổi mới thì doanh nghiệp mới phát triển được.',answer:'只有不断创新，企业才能发展。',answerPy:'Zhǐyǒu búduàn chuàngxīn, qǐyè cái néng fāzhǎn.',
      note:'只有……才……: điều kiện duy nhất; 才 đứng sau chủ ngữ 企业.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Nếu không đổi mới thì sẽ bị đối thủ vượt qua.',answer:'如果不创新，就会被对手超过。',answerPy:'Rúguǒ bú chuàngxīn, jiù huì bèi duìshǒu chāoguò.',
      note:'如果……就……; 被 + đối thủ + 超过.',pair:'被'}
   ]},

  {n:35,zh:'领导',py:'lǐngdǎo',pos:'Danh từ',vn:'lãnh đạo; dẫn đầu',hv:'lĩnh đạo',em:'🧭',lesson:1,
   explain:['① Người lãnh đạo, cấp trên: 学校领导, 公司领导. ② (động từ) dẫn dắt, chỉ huy. ③ Làm định ngữ: 领导地位 = vị trí dẫn đầu.'],
   usage:'Trong bài: 领导地位 (vị trí dẫn đầu). Hay gặp: 学校的领导, 向领导汇报, 在……的领导下.',
   collo:['领导地位','学校领导','在……的领导下'],
   ex_zh:'这家公司在手机市场上一直处于领导地位。',ex_py:'Zhè jiā gōngsī zài shǒujī shìchǎng shang yìzhí chǔyú lǐngdǎo dìwèi.',ex_vn:'Công ty này luôn ở vị trí dẫn đầu trên thị trường điện thoại.',
   exList:[
     {zh:'这家公司在手机市场上一直处于领导地位。',py:'Zhè jiā gōngsī zài shǒujī shìchǎng shang yìzhí chǔyú lǐngdǎo dìwèi.',vn:'Công ty này luôn ở vị trí dẫn đầu trên thị trường điện thoại.'},
     {zh:'学校的领导、教师以及一些学生代表观看了演出。',py:'Xuéxiào de lǐngdǎo, jiàoshī yǐjí yìxiē xuésheng dàibiǎo guānkànle yǎnchū.',vn:'Lãnh đạo nhà trường, giáo viên cùng một số đại diện học sinh đã xem buổi biểu diễn.'},
     {zh:'在班长的领导下，我们班得了第一名。',py:'Zài bānzhǎng de lǐngdǎo xià, wǒmen bān déle dì-yī míng.',vn:'Dưới sự dẫn dắt của lớp trưởng, lớp chúng tôi đạt giải nhất.'}
   ],
   colloFull:[
     {zh:'领导地位',py:'lǐngdǎo dìwèi',vn:'vị trí dẫn đầu'},
     {zh:'学校领导',py:'xuéxiào lǐngdǎo',vn:'lãnh đạo nhà trường'},
     {zh:'在……的领导下',py:'zài……de lǐngdǎo xià',vn:'dưới sự lãnh đạo của …'},
     {zh:'公司领导',py:'gōngsī lǐngdǎo',vn:'lãnh đạo công ty'}
   ],
   patterns:[
     {s:'处于 / 有 + 领导地位',m:'Ở vị trí dẫn đầu'},
     {s:'在 + người + 的领导下',m:'Dưới sự lãnh đạo, dẫn dắt của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã nộp báo cáo cho lãnh đạo rồi.',answer:'我已经把报告交给领导了。',answerPy:'Wǒ yǐjīng bǎ bàogào jiāo gěi lǐngdǎo le.',
      note:'把 + tân ngữ + 交给 + người.',pair:'把'},
     {promptLang:'vi',prompt:'Dưới sự dẫn dắt của thầy giáo, đội chúng tôi ngày càng mạnh.',answer:'在老师的领导下，我们队越来越强了。',answerPy:'Zài lǎoshī de lǐngdǎo xià, wǒmen duì yuè lái yuè qiáng le.',
      note:'在……的领导下 đứng đầu câu làm trạng ngữ.',pair:'越来越'}
   ]},

  {n:36,zh:'地位',py:'dìwèi',pos:'Danh từ',vn:'địa vị, vị trí',hv:'địa vị',em:'🏆',lesson:1,
   explain:['Vị trí của người, tổ chức, sự vật trong xã hội hoặc trong một lĩnh vực.'],
   usage:'Cụm: 领导地位, 社会地位, 重要地位, 占有……地位, 地位很高.',
   collo:['领导地位','社会地位','重要地位','地位很高'],
   ex_zh:'手机在我们的生活中占有非常重要的地位。',ex_py:'Shǒujī zài wǒmen de shēnghuó zhōng zhànyǒu fēicháng zhòngyào de dìwèi.',ex_vn:'Điện thoại giữ vị trí vô cùng quan trọng trong cuộc sống của chúng ta.',
   exList:[
     {zh:'手机在我们的生活中占有非常重要的地位。',py:'Shǒujī zài wǒmen de shēnghuó zhōng zhànyǒu fēicháng zhòngyào de dìwèi.',vn:'Điện thoại giữ vị trí vô cùng quan trọng trong cuộc sống của chúng ta.'},
     {zh:'在个人计算机时代，中国企业在产品创新上难有领导地位。',py:'Zài gèrén jìsuànjī shídài, Zhōngguó qǐyè zài chǎnpǐn chuàngxīn shang nán yǒu lǐngdǎo dìwèi.',vn:'Trong thời đại máy tính cá nhân, doanh nghiệp Trung Quốc khó giữ vị trí dẫn đầu về đổi mới sản phẩm.'},
     {zh:'在古代，女人的社会地位比较低。',py:'Zài gǔdài, nǚrén de shèhuì dìwèi bǐjiào dī.',vn:'Thời xưa, địa vị xã hội của phụ nữ khá thấp.'}
   ],
   colloFull:[
     {zh:'领导地位',py:'lǐngdǎo dìwèi',vn:'vị trí dẫn đầu'},
     {zh:'社会地位',py:'shèhuì dìwèi',vn:'địa vị xã hội'},
     {zh:'重要地位',py:'zhòngyào dìwèi',vn:'vị trí quan trọng'},
     {zh:'地位很高',py:'dìwèi hěn gāo',vn:'địa vị rất cao'},
     {zh:'占有……地位',py:'zhànyǒu……dìwèi',vn:'giữ vị trí …'}
   ],
   patterns:[
     {s:'在 + phạm vi + 中 + 占有 + ……的地位',m:'Giữ vị trí … trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Địa vị của phụ nữ ngày càng cao.',answer:'女性的地位越来越高了。',answerPy:'Nǚxìng de dìwèi yuè lái yuè gāo le.',
      note:'地位 đi với 高 / 低.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy địa vị rất cao nhưng ông ấy luôn rất khiêm tốn.',answer:'虽然他地位很高，但是一直很谦虚。',answerPy:'Suīrán tā dìwèi hěn gāo, dànshì yìzhí hěn qiānxū.',
      note:'Câu chủ–vị làm vị ngữ: 他 + 地位很高.',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'经营',py:'jīngyíng',pos:'Động từ',vn:'kinh doanh, điều hành',hv:'kinh doanh',em:'🏪',lesson:1,
   explain:['Lập kế hoạch, tổ chức và quản lý một cửa hàng, công ty, việc làm ăn.'],
   usage:'Mang tân ngữ: 经营 + 饭馆 / 商店 / 公司; bổ ngữ: 经营得很好. Trong bài: 在经营销售上 (về mặt kinh doanh tiêu thụ).',
   collo:['经营饭馆','经营公司','经营得很好','经营销售'],
   ex_zh:'我父母在老家经营一家小饭馆。',ex_py:'Wǒ fùmǔ zài lǎojiā jīngyíng yì jiā xiǎo fànguǎn.',ex_vn:'Bố mẹ tôi kinh doanh một quán ăn nhỏ ở quê.',
   exList:[
     {zh:'我父母在老家经营一家小饭馆。',py:'Wǒ fùmǔ zài lǎojiā jīngyíng yì jiā xiǎo fànguǎn.',vn:'Bố mẹ tôi kinh doanh một quán ăn nhỏ ở quê.'},
     {zh:'在经营销售上，微信针对不同的国家和地区，推出了不同的广告片。',py:'Zài jīngyíng xiāoshòu shang, Wēixìn zhēnduì bùtóng de guójiā hé dìqū, tuīchūle bùtóng de guǎnggàopiàn.',vn:'Về kinh doanh tiêu thụ, WeChat nhắm vào từng quốc gia, khu vực khác nhau mà tung ra các đoạn quảng cáo khác nhau.'},
     {zh:'这家书店经营得不错，每天都有很多顾客。',py:'Zhè jiā shūdiàn jīngyíng de búcuò, měi tiān dōu yǒu hěn duō gùkè.',vn:'Hiệu sách này kinh doanh khá tốt, ngày nào cũng đông khách.'}
   ],
   colloFull:[
     {zh:'经营饭馆',py:'jīngyíng fànguǎn',vn:'kinh doanh quán ăn'},
     {zh:'经营公司',py:'jīngyíng gōngsī',vn:'điều hành công ty'},
     {zh:'经营得很好',py:'jīngyíng de hěn hǎo',vn:'kinh doanh rất tốt'},
     {zh:'经营销售',py:'jīngyíng xiāoshòu',vn:'kinh doanh tiêu thụ'},
     {zh:'经营方式',py:'jīngyíng fāngshì',vn:'phương thức kinh doanh'}
   ],
   patterns:[
     {s:'经营 + 饭馆 / 商店 / 公司',m:'Kinh doanh, điều hành …'},
     {s:'经营得 + 好 / 不错',m:'Kinh doanh tốt (bổ ngữ trạng thái)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cửa hàng này kinh doanh ngày càng tốt.',answer:'这家商店经营得越来越好了。',answerPy:'Zhè jiā shāngdiàn jīngyíng de yuè lái yuè hǎo le.',
      note:'V + 得 + 越来越 + tính từ.',pair:'越来越'},
     {promptLang:'vi',prompt:'Quán ăn do chị ấy điều hành không những ngon mà còn rẻ.',answer:'她经营的饭馆不但好吃，而且便宜。',answerPy:'Tā jīngyíng de fànguǎn búdàn hǎochī, érqiě piányi.',
      note:'她经营的 làm định ngữ cho 饭馆.',pair:'不但……而且……'}
   ]},

  {n:38,zh:'销售',py:'xiāoshòu',pos:'Động từ',vn:'bán, tiêu thụ (hàng hoá)',hv:'tiêu thụ',em:'🛒',lesson:1,
   explain:['Bán hàng hoá ra thị trường. Trang trọng hơn 卖.'],
   usage:'Theo bảng 词语搭配: 销售 + 得…… / 到……: 销售得很好, 销售到海外. Ghép: 销售员, 销售量, 本店销售…….',
   collo:['销售员','销售得很好','销售到海外','销售量'],
   ex_zh:'这种手机销售得很好，一上市就卖完了。',ex_py:'Zhè zhǒng shǒujī xiāoshòu de hěn hǎo, yí shàngshì jiù màiwán le.',ex_vn:'Loại điện thoại này bán rất chạy, vừa ra mắt đã hết hàng.',
   exList:[
     {zh:'这种手机销售得很好，一上市就卖完了。',py:'Zhè zhǒng shǒujī xiāoshòu de hěn hǎo, yí shàngshì jiù màiwán le.',vn:'Loại điện thoại này bán rất chạy, vừa ra mắt đã hết hàng.'},
     {zh:'那个新来的销售员这个月做成了三笔大业务。',py:'Nàge xīn lái de xiāoshòuyuán zhège yuè zuòchéngle sān bǐ dà yèwù.',vn:'Nhân viên bán hàng mới đến tháng này chốt được ba phi vụ lớn.'},
     {zh:'越南的咖啡已经销售到了世界各地。',py:'Yuènán de kāfēi yǐjīng xiāoshòu dàole shìjiè gè dì.',vn:'Cà phê Việt Nam đã được bán ra khắp nơi trên thế giới.'}
   ],
   colloFull:[
     {zh:'销售员',py:'xiāoshòuyuán',vn:'nhân viên bán hàng'},
     {zh:'销售得很好',py:'xiāoshòu de hěn hǎo',vn:'bán rất chạy'},
     {zh:'销售到海外',py:'xiāoshòu dào hǎiwài',vn:'bán ra nước ngoài'},
     {zh:'销售量',py:'xiāoshòuliàng',vn:'lượng tiêu thụ'},
     {zh:'经营销售',py:'jīngyíng xiāoshòu',vn:'kinh doanh tiêu thụ'}
   ],
   patterns:[
     {s:'销售 + 得…… / 到……',m:'Bán (thế nào) / bán tới (đâu) — bảng 词语搭配'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cà phê Việt Nam được bán ra hơn tám mươi quốc gia.',answer:'越南咖啡被销售到了八十多个国家。',answerPy:'Yuènán kāfēi bèi xiāoshòu dàole bāshí duō ge guójiā.',
      note:'销售 + 到 + nơi; 多 đứng sau số chẵn chục: 八十多个.',pair:'被'},
     {promptLang:'vi',prompt:'Sản phẩm mới vừa ra mắt đã bán rất chạy.',answer:'新产品一上市就销售得很好。',answerPy:'Xīn chǎnpǐn yí shàngshì jiù xiāoshòu de hěn hǎo.',
      note:'上市 = ra mắt thị trường; 一 trước thanh 4 đọc yí.',pair:'一……就……'}
   ]},

  {n:39,zh:'针对',py:'zhēnduì',pos:'Động từ',vn:'nhằm vào, hướng vào',hv:'châm đối',em:'🔎',lesson:1,
   explain:['Hướng thẳng vào một đối tượng, một vấn đề cụ thể (đưa ra biện pháp, lời nói… cho đúng đối tượng đó).'],
   usage:'针对 + đối tượng + V: 针对不同国家推出不同广告. Đứng được đầu câu: 针对这个问题，我们…… Danh từ: 针对性 (tính nhắm đúng đối tượng).',
   collo:['针对不同的国家','针对这个问题','针对留学生','有针对性'],
   ex_zh:'微信针对不同的国家和地区，推出了不同的广告片。',ex_py:'Wēixìn zhēnduì bùtóng de guójiā hé dìqū, tuīchūle bùtóng de guǎnggàopiàn.',ex_vn:'WeChat nhắm vào từng quốc gia, khu vực khác nhau mà tung ra các đoạn quảng cáo khác nhau.',
   exList:[
     {zh:'微信针对不同的国家和地区，推出了不同的广告片。',py:'Wēixìn zhēnduì bùtóng de guójiā hé dìqū, tuīchūle bùtóng de guǎnggàopiàn.',vn:'WeChat nhắm vào từng quốc gia, khu vực khác nhau mà tung ra các đoạn quảng cáo khác nhau.'},
     {zh:'针对这个问题，我们开会讨论了好几次。',py:'Zhēnduì zhège wèntí, wǒmen kāihuì tǎolùnle hǎo jǐ cì.',vn:'Về vấn đề này, chúng tôi đã họp bàn mấy lần.'},
     {zh:'我曾经针对留学生做过一项调查。',py:'Wǒ céngjīng zhēnduì liúxuéshēng zuòguo yí xiàng diàochá.',vn:'Tôi từng làm một cuộc khảo sát nhắm vào du học sinh.'}
   ],
   colloFull:[
     {zh:'针对不同的国家',py:'zhēnduì bùtóng de guójiā',vn:'nhắm vào các nước khác nhau'},
     {zh:'针对这个问题',py:'zhēnduì zhège wèntí',vn:'nhắm vào vấn đề này'},
     {zh:'针对留学生',py:'zhēnduì liúxuéshēng',vn:'nhắm vào du học sinh'},
     {zh:'有针对性',py:'yǒu zhēnduìxìng',vn:'có tính nhắm đúng đối tượng'},
     {zh:'不是针对你',py:'bú shì zhēnduì nǐ',vn:'không phải nhắm vào bạn'}
   ],
   patterns:[
     {s:'针对 + đối tượng / vấn đề，+ V',m:'Nhắm vào … mà làm gì (đứng được đầu câu)'},
     {s:'不是针对 + người',m:'Không phải nhắm vào ai (giải thích, xin lỗi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhắm vào vấn đề của học sinh, thầy giáo đã sửa lại kế hoạch ôn tập một chút.',answer:'针对学生的问题，老师把复习计划改了一下。',answerPy:'Zhēnduì xuésheng de wèntí, lǎoshī bǎ fùxí jìhuà gǎile yíxià.',
      note:'针对…… đứng đầu câu; vế sau là câu 把.',pair:'把'},
     {promptLang:'vi',prompt:'Cô giáo đã từng làm một cuộc khảo sát nhắm vào học sinh lớp 12.',answer:'老师曾经针对高三学生做过一项调查。',answerPy:'Lǎoshī céngjīng zhēnduì gāosān xuésheng zuòguo yí xiàng diàochá.',
      note:'曾经 + V + 过: đã từng; lượng từ của 调查 là 项.',pair:'V + 过'}
   ]},

  {n:40,zh:'当地',py:'dāngdì',pos:'Danh từ',vn:'bản địa, địa phương',hv:'đương địa',em:'📍',lesson:1,
   explain:['Chính nơi mà sự việc xảy ra, hoặc nơi đang được nhắc tới.'],
   usage:'Làm định ngữ trực tiếp: 当地人, 当地明星, 当地时间; có 的: 当地的风俗. Trạng ngữ: 在当地.',
   collo:['当地人','当地明星','当地时间','当地的风俗'],
   ex_zh:'微信邀请当地明星和名人代言，收效相当不错。',ex_py:'Wēixìn yāoqǐng dāngdì míngxīng hé míngrén dàiyán, shōuxiào xiāngdāng búcuò.',ex_vn:'WeChat mời ngôi sao và người nổi tiếng bản địa làm đại diện, hiệu quả khá tốt.',
   exList:[
     {zh:'微信邀请当地明星和名人代言，收效相当不错。',py:'Wēixìn yāoqǐng dāngdì míngxīng hé míngrén dàiyán, shōuxiào xiāngdāng búcuò.',vn:'WeChat mời ngôi sao và người nổi tiếng bản địa làm đại diện, hiệu quả khá tốt.'},
     {zh:'去旅游的时候，我喜欢尝尝当地的小吃。',py:'Qù lǚyóu de shíhou, wǒ xǐhuan chángchang dāngdì de xiǎochī.',vn:'Khi đi du lịch, tôi thích nếm thử đồ ăn vặt địa phương.'},
     {zh:'飞机将在当地时间下午三点到达。',py:'Fēijī jiāng zài dāngdì shíjiān xiàwǔ sān diǎn dàodá.',vn:'Máy bay sẽ hạ cánh lúc ba giờ chiều giờ địa phương.'}
   ],
   colloFull:[
     {zh:'当地人',py:'dāngdìrén',vn:'người địa phương'},
     {zh:'当地明星',py:'dāngdì míngxīng',vn:'ngôi sao bản địa'},
     {zh:'当地时间',py:'dāngdì shíjiān',vn:'giờ địa phương'},
     {zh:'当地的风俗',py:'dāngdì de fēngsú',vn:'phong tục địa phương'},
     {zh:'当地的小吃',py:'dāngdì de xiǎochī',vn:'đồ ăn vặt địa phương'}
   ],
   patterns:[
     {s:'当地 + N',m:'… địa phương (当地人, 当地时间)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần hỏi người địa phương là tìm được quán ăn ngon nhất.',answer:'只要问问当地人，就能找到最好吃的饭馆。',answerPy:'Zhǐyào wènwen dāngdìrén, jiù néng zhǎodào zuì hǎochī de fànguǎn.',
      note:'Lặp động từ 问问 làm nhẹ giọng; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Món này là do một người bạn địa phương giới thiệu cho tôi.',answer:'这个菜是一个当地朋友给我介绍的。',answerPy:'Zhège cài shì yí ge dāngdì péngyou gěi wǒ jièshào de.',
      note:'Nhấn mạnh người giới thiệu: 是 + người + 给我介绍 + 的.',pair:'是……的'}
   ]},

  {n:41,zh:'代言',py:'dàiyán',pos:'Động từ',vn:'làm đại diện (quảng cáo), phát ngôn thay',hv:'đại ngôn',em:'🎤',lesson:1,
   explain:['Thay mặt một sản phẩm, thương hiệu, tổ chức để giới thiệu, quảng bá — thường là ngôi sao làm “gương mặt đại diện”.'],
   usage:'Cấu trúc: 为 / 给 + thương hiệu + 代言; 请 + người + 代言; 代言人 (người đại diện).',
   collo:['为……代言','代言人','请明星代言','形象代言'],
   ex_zh:'这位歌手为一家手机公司代言。',ex_py:'Zhè wèi gēshǒu wèi yì jiā shǒujī gōngsī dàiyán.',ex_vn:'Ca sĩ này làm đại diện cho một hãng điện thoại.',
   exList:[
     {zh:'这位歌手为一家手机公司代言。',py:'Zhè wèi gēshǒu wèi yì jiā shǒujī gōngsī dàiyán.',vn:'Ca sĩ này làm đại diện cho một hãng điện thoại.'},
     {zh:'微信邀请当地明星和名人代言。',py:'Wēixìn yāoqǐng dāngdì míngxīng hé míngrén dàiyán.',vn:'WeChat mời ngôi sao và người nổi tiếng bản địa làm đại diện.'},
     {zh:'很多人买东西是因为喜欢它的代言人。',py:'Hěn duō rén mǎi dōngxi shì yīnwèi xǐhuan tā de dàiyánrén.',vn:'Nhiều người mua đồ là vì thích người đại diện của nó.'}
   ],
   colloFull:[
     {zh:'为……代言',py:'wèi……dàiyán',vn:'làm đại diện cho …'},
     {zh:'代言人',py:'dàiyánrén',vn:'người đại diện'},
     {zh:'请明星代言',py:'qǐng míngxīng dàiyán',vn:'mời ngôi sao làm đại diện'},
     {zh:'形象代言',py:'xíngxiàng dàiyán',vn:'đại diện hình ảnh'}
   ],
   patterns:[
     {s:'为 / 给 + thương hiệu + 代言',m:'Làm đại diện cho thương hiệu nào'},
     {s:'请 / 邀请 + người + 代言',m:'Mời ai làm đại diện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này đã mời một cầu thủ nổi tiếng đến làm đại diện.',answer:'这家公司请了一位有名的球员来代言。',answerPy:'Zhè jiā gōngsī qǐngle yí wèi yǒumíng de qiúyuán lái dàiyán.',
      note:'Câu kiêm ngữ: 请 + người + (来) + V.',pair:'câu kiêm ngữ 请 / 让'},
     {promptLang:'vi',prompt:'Vì cô ấy làm đại diện nên sản phẩm này bán rất chạy.',answer:'因为她代言，所以这个产品卖得特别好。',answerPy:'Yīnwèi tā dàiyán, suǒyǐ zhège chǎnpǐn mài de tèbié hǎo.',
      note:'代言 là nội động từ, không cần tân ngữ.',pair:'因为……所以……'}
   ]},

  {n:42,zh:'华裔',py:'huáyì',pos:'Danh từ',vn:'người gốc Hoa',hv:'hoa duệ',em:'🧧',lesson:1,
   explain:['Người mang quốc tịch nước khác nhưng tổ tiên là người Trung Quốc (con cháu Hoa kiều).'],
   usage:'Làm định ngữ: 华裔美国人, 华裔学生, 华裔青年. Khác 华侨 (người Trung Quốc định cư ở nước ngoài, vẫn giữ quốc tịch Trung Quốc).',
   collo:['华裔美国人','华裔学生','海外华裔'],
   ex_zh:'海外用户群中不仅有华裔和新移民，还出现了更多的外国人。',ex_py:'Hǎiwài yònghù qún zhōng bùjǐn yǒu huáyì hé xīn yímín, hái chūxiànle gèng duō de wàiguórén.',ex_vn:'Trong nhóm người dùng ở nước ngoài không chỉ có người gốc Hoa và dân di cư mới, mà còn xuất hiện nhiều người nước ngoài hơn.',
   exList:[
     {zh:'海外用户群中不仅有华裔和新移民，还出现了更多的外国人。',py:'Hǎiwài yònghù qún zhōng bùjǐn yǒu huáyì hé xīn yímín, hái chūxiànle gèng duō de wàiguórén.',vn:'Trong nhóm người dùng ở nước ngoài không chỉ có người gốc Hoa và dân di cư mới, mà còn xuất hiện nhiều người nước ngoài hơn.'},
     {zh:'我们班有一个华裔学生，他的爷爷是广东人。',py:'Wǒmen bān yǒu yí ge huáyì xuésheng, tā de yéye shì Guǎngdōng rén.',vn:'Lớp tôi có một bạn gốc Hoa, ông nội bạn ấy là người Quảng Đông.'},
     {zh:'这位华裔科学家虽然在美国长大，但是汉语说得很好。',py:'Zhè wèi huáyì kēxuéjiā suīrán zài Měiguó zhǎngdà, dànshì Hànyǔ shuō de hěn hǎo.',vn:'Nhà khoa học gốc Hoa này tuy lớn lên ở Mỹ nhưng nói tiếng Trung rất giỏi.'}
   ],
   colloFull:[
     {zh:'华裔美国人',py:'huáyì Měiguórén',vn:'người Mỹ gốc Hoa'},
     {zh:'华裔学生',py:'huáyì xuésheng',vn:'học sinh gốc Hoa'},
     {zh:'海外华裔',py:'hǎiwài huáyì',vn:'người gốc Hoa ở hải ngoại'},
     {zh:'华裔青年',py:'huáyì qīngnián',vn:'thanh niên gốc Hoa'}
   ],
   patterns:[
     {s:'华裔 + quốc tịch / nghề nghiệp',m:'… gốc Hoa (华裔美国人, 华裔作家)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy là người gốc Hoa nhưng cô ấy chưa từng đến Trung Quốc.',answer:'虽然她是华裔，但是从来没去过中国。',answerPy:'Suīrán tā shì huáyì, dànshì cónglái méi qùguo Zhōngguó.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Không chỉ người gốc Hoa, ngay cả người nước ngoài cũng thích dùng WeChat.',answer:'不仅华裔，连外国人也喜欢用微信。',answerPy:'Bùjǐn huáyì, lián wàiguórén yě xǐhuan yòng Wēixìn.',
      note:'不仅 A，连 B 也……: mở rộng đối tượng rồi nhấn mạnh.',pair:'连……也……'}
   ]},

  {n:43,zh:'移民',py:'yímín',pos:'Danh từ',vn:'dân di cư',hv:'di dân',em:'✈️',lesson:1,
   explain:['① (danh từ) Người chuyển đến sống lâu dài ở nước / vùng khác: 新移民. ② (động từ) chuyển đến định cư: 移民到加拿大.'],
   usage:'Danh từ: 新移民, 移民家庭. Động từ: 移民 + 到 / 去 + nơi.',
   collo:['新移民','移民家庭','移民到……'],
   ex_zh:'他们一家十年前移民到了澳大利亚。',ex_py:'Tāmen yì jiā shí nián qián yímín dàole Àodàlìyà.',ex_vn:'Cả nhà họ di cư sang Úc từ mười năm trước.',
   exList:[
     {zh:'他们一家十年前移民到了澳大利亚。',py:'Tāmen yì jiā shí nián qián yímín dàole Àodàlìyà.',vn:'Cả nhà họ di cư sang Úc từ mười năm trước.'},
     {zh:'海外用户群中不仅有华裔和新移民，还出现了更多的外国人。',py:'Hǎiwài yònghù qún zhōng bùjǐn yǒu huáyì hé xīn yímín, hái chūxiànle gèng duō de wàiguórén.',vn:'Trong nhóm người dùng ở nước ngoài không chỉ có người gốc Hoa và dân di cư mới, mà còn xuất hiện nhiều người nước ngoài hơn.'},
     {zh:'作为新移民，他花了很长时间才适应当地的生活。',py:'Zuòwéi xīn yímín, tā huāle hěn cháng shíjiān cái shìyìng dāngdì de shēnghuó.',vn:'Là dân di cư mới, anh ấy mất rất lâu mới quen với cuộc sống ở đó.'}
   ],
   colloFull:[
     {zh:'新移民',py:'xīn yímín',vn:'dân di cư mới'},
     {zh:'移民家庭',py:'yímín jiātíng',vn:'gia đình di cư'},
     {zh:'移民到……',py:'yímín dào……',vn:'di cư đến …'},
     {zh:'移民国外',py:'yímín guówài',vn:'di cư ra nước ngoài'}
   ],
   patterns:[
     {s:'移民 + 到 + nơi',m:'Di cư đến đâu'},
     {s:'作为 + 新移民，……',m:'Là người di cư mới thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy nhà họ đã di cư sang Mỹ nhưng vẫn ăn Tết Nguyên đán.',answer:'虽然他们家已经移民到了美国，但是还过春节。',answerPy:'Suīrán tāmen jiā yǐjīng yímín dàole Měiguó, dànshì hái guò Chūnjié.',
      note:'移民 dùng như động từ: 移民到了 + nơi.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Là dân di cư mới, anh ấy phải học được ngôn ngữ địa phương trước.',answer:'作为新移民，他得先学会当地的语言。',answerPy:'Zuòwéi xīn yímín, tā děi xiān xuéhuì dāngdì de yǔyán.',
      note:'作为 + thân phận, đặt đầu câu.',pair:'作为'}
   ]},

  {n:44,zh:'微信',py:'Wēixìn',pos:'Danh từ riêng',vn:'WeChat (tên ứng dụng)',hv:'Vi Tín',em:'💬',lesson:1,
   explain:['Ứng dụng nhắn tin, gọi điện, thanh toán của công ty Tencent (Trung Quốc), ra mắt tháng 1/2011; tên tiếng Anh là WeChat.'],
   usage:'Cụm hay dùng: 用微信, 加微信 (kết bạn WeChat), 发微信 (gửi tin WeChat), 微信号 (ID WeChat), 微信支付.',
   collo:['加微信','发微信','微信号','微信支付'],
   ex_zh:'你有微信吗？我们可以用它联系，很方便。',ex_py:'Nǐ yǒu Wēixìn ma? Wǒmen kěyǐ yòng tā liánxì, hěn fāngbiàn.',ex_vn:'Bạn có WeChat không? Chúng mình có thể dùng nó để liên lạc, tiện lắm.',
   exList:[
     {zh:'你有微信吗？我们可以用它联系，很方便。',py:'Nǐ yǒu Wēixìn ma? Wǒmen kěyǐ yòng tā liánxì, hěn fāngbiàn.',vn:'Bạn có WeChat không? Chúng mình có thể dùng nó để liên lạc, tiện lắm.'},
     {zh:'告诉我你的微信号，我搜索一下。',py:'Gàosu wǒ nǐ de Wēixìnhào, wǒ sōusuǒ yíxià.',vn:'Cho mình ID WeChat của bạn, mình tìm thử.'},
     {zh:'在中国买东西，很多人都用微信支付。',py:'Zài Zhōngguó mǎi dōngxi, hěn duō rén dōu yòng Wēixìn zhīfù.',vn:'Ở Trung Quốc mua đồ, rất nhiều người thanh toán bằng WeChat.'}
   ],
   colloFull:[
     {zh:'加微信',py:'jiā Wēixìn',vn:'kết bạn WeChat'},
     {zh:'发微信',py:'fā Wēixìn',vn:'gửi tin nhắn WeChat'},
     {zh:'微信号',py:'Wēixìnhào',vn:'ID WeChat'},
     {zh:'微信支付',py:'Wēixìn zhīfù',vn:'thanh toán bằng WeChat'},
     {zh:'用微信聊天',py:'yòng Wēixìn liáotiān',vn:'nhắn tin bằng WeChat'}
   ],
   patterns:[
     {s:'加 / 发 / 用 + 微信',m:'Kết bạn / gửi tin / dùng WeChat'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi là sau khi đến Trung Quốc mới bắt đầu dùng WeChat.',answer:'我是到了中国以后才开始用微信的。',answerPy:'Wǒ shì dàole Zhōngguó yǐhòu cái kāishǐ yòng Wēixìn de.',
      note:'Nhấn mạnh THỜI ĐIỂM: 是 + 到了中国以后 + 才 + V + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Bà tôi vừa học được cách gửi tin WeChat là ngày nào cũng nhắn cho tôi.',answer:'奶奶一学会发微信，就天天给我发。',answerPy:'Nǎinai yì xuéhuì fā Wēixìn, jiù tiāntiān gěi wǒ fā.',
      note:'一 + V1，就 + V2; 天天 = ngày nào cũng.',pair:'一……就……'}
   ]},

  {n:45,zh:'梅西',py:'Méixī',pos:'Danh từ riêng',vn:'Messi (Lionel Messi, cầu thủ bóng đá)',hv:'Mai Tây',em:'🏅',lesson:1,
   explain:['Lionel Messi — ngôi sao bóng đá người Argentina. Trong bài, anh xuất hiện trong phim quảng cáo của WeChat.'],
   usage:'Tên người nước ngoài được phiên âm bằng chữ Hán: 梅西 Méixī. Hay đi với: 足球明星梅西, 梅西的球迷, 像梅西一样.',
   collo:['足球明星梅西','梅西的球迷','像梅西一样'],
   ex_zh:'国际足球明星梅西用微信直播自己的颠球技术。',ex_py:'Guójì zúqiú míngxīng Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',ex_vn:'Ngôi sao bóng đá quốc tế Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.',
   exList:[
     {zh:'国际足球明星梅西用微信直播自己的颠球技术。',py:'Guójì zúqiú míngxīng Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.',vn:'Ngôi sao bóng đá quốc tế Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình.'},
     {zh:'我弟弟是梅西的球迷，他的房间里贴满了梅西的照片。',py:'Wǒ dìdi shì Méixī de qiúmí, tā de fángjiān li tiēmǎnle Méixī de zhàopiàn.',vn:'Em trai tôi là fan của Messi, phòng em dán đầy ảnh Messi.'},
     {zh:'他从小就希望能像梅西一样踢球。',py:'Tā cóngxiǎo jiù xīwàng néng xiàng Méixī yíyàng tī qiú.',vn:'Từ nhỏ cậu ấy đã mong đá bóng được như Messi.'}
   ],
   colloFull:[
     {zh:'足球明星梅西',py:'zúqiú míngxīng Méixī',vn:'ngôi sao bóng đá Messi'},
     {zh:'梅西的球迷',py:'Méixī de qiúmí',vn:'người hâm mộ Messi'},
     {zh:'像梅西一样',py:'xiàng Méixī yíyàng',vn:'giống như Messi'},
     {zh:'梅西的广告',py:'Méixī de guǎnggào',vn:'quảng cáo có Messi'}
   ],
   patterns:[
     {s:'像 + 梅西 + 一样 + V / Adj',m:'… giống như Messi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỹ thuật đá bóng của cậu ấy giỏi như Messi vậy.',answer:'他踢球的技术跟梅西一样好。',answerPy:'Tā tī qiú de jìshù gēn Méixī yíyàng hǎo.',
      note:'A 跟 B 一样 + tính từ: A … như B.',pair:'A 跟 B 一样'},
     {promptLang:'vi',prompt:'Trong quảng cáo, Messi chọc một em bé đang khóc bật cười.',answer:'在广告里，梅西把一个正在哭的小宝贝逗笑了。',answerPy:'Zài guǎnggào li, Méixī bǎ yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào le.',
      note:'把 + người + 逗笑 + 了.',pair:'把'}
   ]},

  {n:46,zh:'腾讯',py:'Téngxùn',pos:'Danh từ riêng',vn:'Tencent (tên công ty)',hv:'Đằng Tấn',em:'🐧',lesson:1,
   explain:['Tập đoàn Internet lớn của Trung Quốc, trụ sở ở Thâm Quyến; sản phẩm nổi tiếng: QQ, WeChat (微信).'],
   usage:'Hay đi với: 腾讯公司, 腾讯总裁, 腾讯的产品, 腾讯合作伙伴大会.',
   collo:['腾讯公司','腾讯总裁','腾讯的产品'],
   ex_zh:'如此大手笔的推广，腾讯自有其底气所在。',ex_py:'Rúcǐ dà shǒubǐ de tuīguǎng, Téngxùn zì yǒu qí dǐqì suǒzài.',ex_vn:'Quảng bá mạnh tay đến vậy, Tencent tất có chỗ dựa vững chắc của mình.',
   exList:[
     {zh:'如此大手笔的推广，腾讯自有其底气所在。',py:'Rúcǐ dà shǒubǐ de tuīguǎng, Téngxùn zì yǒu qí dǐqì suǒzài.',vn:'Quảng bá mạnh tay đến vậy, Tencent tất có chỗ dựa vững chắc của mình.'},
     {zh:'微信是腾讯公司开发的移动通信应用。',py:'Wēixìn shì Téngxùn gōngsī kāifā de yídòng tōngxìn yìngyòng.',vn:'WeChat là ứng dụng liên lạc di động do công ty Tencent phát triển.'},
     {zh:'我表哥大学毕业后进了腾讯，做软件开发。',py:'Wǒ biǎogē dàxué bìyè hòu jìnle Téngxùn, zuò ruǎnjiàn kāifā.',vn:'Anh họ tôi tốt nghiệp đại học xong vào Tencent làm phát triển phần mềm.'}
   ],
   colloFull:[
     {zh:'腾讯公司',py:'Téngxùn gōngsī',vn:'công ty Tencent'},
     {zh:'腾讯总裁',py:'Téngxùn zǒngcái',vn:'chủ tịch Tencent'},
     {zh:'腾讯的产品',py:'Téngxùn de chǎnpǐn',vn:'sản phẩm của Tencent'},
     {zh:'腾讯合作伙伴大会',py:'Téngxùn hézuò huǒbàn dàhuì',vn:'Đại hội đối tác Tencent'}
   ],
   patterns:[
     {s:'腾讯 + 公司 / 总裁 / 的产品',m:'Công ty / chủ tịch / sản phẩm của Tencent'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'WeChat là do Tencent phát triển.',answer:'微信是腾讯开发的。',answerPy:'Wēixìn shì Téngxùn kāifā de.',
      note:'Nhấn mạnh CHỦ THỂ làm ra: 是 + 腾讯 + 开发 + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Sản phẩm của Tencent không chỉ ở Trung Quốc, ở nước ngoài cũng có rất nhiều người dùng.',answer:'腾讯的产品不仅在中国，在海外也有很多用户。',answerPy:'Téngxùn de chǎnpǐn bùjǐn zài Zhōngguó, zài hǎiwài yě yǒu hěn duō yònghù.',
      note:'不仅……也……: vế sau có 也 đứng trước động từ.',pair:'不仅……也……'}
   ]},

  {n:47,zh:'刘炽平',py:'Liú Chìpíng',pos:'Danh từ riêng',vn:'Lưu Sí Bình (chủ tịch Tencent)',hv:'Lưu Sí Bình',em:'🧑‍💼',lesson:1,
   explain:['Lưu Sí Bình (Martin Lau) — chủ tịch (总裁) Tencent; trong bài, ông phát biểu tại Đại hội đối tác Tencent 2013.'],
   usage:'Tên người: họ 刘 + tên 炽平. Chức danh đứng TRƯỚC tên: 腾讯总裁刘炽平.',
   collo:['腾讯总裁刘炽平','刘炽平说','刘炽平的讲话'],
   ex_zh:'腾讯总裁刘炽平言语间充满了骄傲。',ex_py:'Téngxùn zǒngcái Liú Chìpíng yányǔ jiān chōngmǎnle jiāo\'ào.',ex_vn:'Lời lẽ của chủ tịch Tencent Lưu Sí Bình tràn đầy tự hào.',
   exList:[
     {zh:'腾讯总裁刘炽平言语间充满了骄傲。',py:'Téngxùn zǒngcái Liú Chìpíng yányǔ jiān chōngmǎnle jiāo\'ào.',vn:'Lời lẽ của chủ tịch Tencent Lưu Sí Bình tràn đầy tự hào.'},
     {zh:'在2013腾讯合作伙伴大会上，刘炽平介绍了微信在海外的用户数量。',py:'Zài èr líng yī sān Téngxùn hézuò huǒbàn dàhuì shang, Liú Chìpíng jièshàole Wēixìn zài hǎiwài de yònghù shùliàng.',vn:'Tại Đại hội đối tác Tencent 2013, Lưu Sí Bình giới thiệu số người dùng WeChat ở nước ngoài.'},
     {zh:'刘炽平说，微信在海外的注册用户已经超过了7000万。',py:'Liú Chìpíng shuō, Wēixìn zài hǎiwài de zhùcè yònghù yǐjīng chāoguòle qīqiān wàn.',vn:'Lưu Sí Bình nói, số người dùng đăng ký WeChat ở nước ngoài đã vượt 70 triệu.'}
   ],
   colloFull:[
     {zh:'腾讯总裁刘炽平',py:'Téngxùn zǒngcái Liú Chìpíng',vn:'chủ tịch Tencent Lưu Sí Bình'},
     {zh:'刘炽平说',py:'Liú Chìpíng shuō',vn:'Lưu Sí Bình nói'},
     {zh:'刘炽平的讲话',py:'Liú Chìpíng de jiǎnghuà',vn:'bài phát biểu của Lưu Sí Bình'},
     {zh:'总裁刘炽平',py:'zǒngcái Liú Chìpíng',vn:'chủ tịch Lưu Sí Bình'}
   ],
   patterns:[
     {s:'chức danh + 刘炽平',m:'Chức danh đứng TRƯỚC tên người (腾讯总裁刘炽平)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi Lưu Sí Bình nói về WeChat, lời lẽ tràn đầy tự hào.',answer:'刘炽平谈到微信的时候，言语间充满了骄傲。',answerPy:'Liú Chìpíng tándào Wēixìn de shíhou, yányǔ jiān chōngmǎnle jiāo\'ào.',
      note:'……的时候 làm trạng ngữ thời gian; 充满了 + cảm xúc.',pair:'……的时候'},
     {promptLang:'vi',prompt:'Bài phát biểu của Lưu Sí Bình được rất nhiều báo đưa tin.',answer:'刘炽平的讲话被很多报纸报道了。',answerPy:'Liú Chìpíng de jiǎnghuà bèi hěn duō bàozhǐ bàodào le.',
      note:'被 + tác nhân + 报道 + 了.',pair:'被'}
   ]},

  {n:48,zh:'张小龙',py:'Zhāng Xiǎolóng',pos:'Danh từ riêng',vn:'Trương Tiểu Long (phó chủ tịch Tencent)',hv:'Trương Tiểu Long',em:'👨‍💻',lesson:1,
   explain:['Trương Tiểu Long — phó chủ tịch cấp cao của Tencent, được gọi là “微信之父” (cha đẻ của WeChat).'],
   usage:'Chức danh đứng trước tên: 腾讯公司高级副总裁张小龙. Biệt danh: 微信之父.',
   collo:['微信之父张小龙','高级副总裁张小龙','张小龙介绍'],
   ex_zh:'被称为“微信之父”的腾讯公司高级副总裁张小龙介绍了微信的发展过程。',ex_py:'Bèi chēngwéi “Wēixìn zhī fù” de Téngxùn gōngsī gāojí fù zǒngcái Zhāng Xiǎolóng jièshàole Wēixìn de fāzhǎn guòchéng.',ex_vn:'Trương Tiểu Long, phó chủ tịch cấp cao của Tencent, người được gọi là “cha đẻ WeChat”, đã giới thiệu quá trình phát triển của WeChat.',
   exList:[
     {zh:'被称为“微信之父”的腾讯公司高级副总裁张小龙介绍了微信的发展过程。',py:'Bèi chēngwéi “Wēixìn zhī fù” de Téngxùn gōngsī gāojí fù zǒngcái Zhāng Xiǎolóng jièshàole Wēixìn de fāzhǎn guòchéng.',vn:'Trương Tiểu Long, phó chủ tịch cấp cao của Tencent, người được gọi là “cha đẻ WeChat”, đã giới thiệu quá trình phát triển của WeChat.'},
     {zh:'张小龙带领团队只用了很短的时间就开发出了微信。',py:'Zhāng Xiǎolóng dàilǐng tuánduì zhǐ yòngle hěn duǎn de shíjiān jiù kāifā chūle Wēixìn.',vn:'Trương Tiểu Long dẫn dắt đội ngũ, chỉ trong thời gian rất ngắn đã phát triển ra WeChat.'},
     {zh:'很多年轻人把张小龙当作学习的榜样。',py:'Hěn duō niánqīngrén bǎ Zhāng Xiǎolóng dàngzuò xuéxí de bǎngyàng.',vn:'Nhiều bạn trẻ coi Trương Tiểu Long là tấm gương để học hỏi.'}
   ],
   colloFull:[
     {zh:'微信之父张小龙',py:'Wēixìn zhī fù Zhāng Xiǎolóng',vn:'“cha đẻ WeChat” Trương Tiểu Long'},
     {zh:'高级副总裁张小龙',py:'gāojí fù zǒngcái Zhāng Xiǎolóng',vn:'phó chủ tịch cấp cao Trương Tiểu Long'},
     {zh:'张小龙介绍',py:'Zhāng Xiǎolóng jièshào',vn:'Trương Tiểu Long giới thiệu'},
     {zh:'张小龙的团队',py:'Zhāng Xiǎolóng de tuánduì',vn:'đội ngũ của Trương Tiểu Long'}
   ],
   patterns:[
     {s:'被称为 + “……” + 的 + người',m:'Người được gọi là “…”'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trương Tiểu Long được gọi là “cha đẻ của WeChat”.',answer:'张小龙被称为“微信之父”。',answerPy:'Zhāng Xiǎolóng bèi chēngwéi “Wēixìn zhī fù”.',
      note:'被称为 = được gọi là; 之 là trợ từ văn viết (= 的).',pair:'被'},
     {promptLang:'vi',prompt:'Quá trình phát triển của WeChat là do Trương Tiểu Long giới thiệu tại đại hội.',answer:'微信的发展过程是张小龙在大会上介绍的。',answerPy:'Wēixìn de fāzhǎn guòchéng shì Zhāng Xiǎolóng zài dàhuì shang jièshào de.',
      note:'Nhấn mạnh người làm và nơi làm: 是 + 张小龙 + 在大会上 + 介绍 + 的.',pair:'是……的'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (562 chữ), mỗi đoạn văn của sách một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 海外用户玩儿微信',
  preQuiz:[
    {q:'广告片里，梅西用微信做什么？',opts:['直播自己的颠球技术','介绍微信的功能','教孩子踢足球'],ans:0},
    {q:'手机另一头的小宝贝后来怎么样了？',opts:['睡着了','被逗笑了','哭得更厉害了'],ans:1},
    {q:'这条广告宣传片在多少个国家和地区同步上线？',opts:['30个','100个','15个'],ans:2},
    {q:'2013年7月，微信在海外的注册用户有多少？',opts:['超过7000万','刚过100万','不到1000万'],ans:0},
    {q:'2013腾讯合作伙伴大会是在哪儿召开的？',opts:['广州','北京','上海'],ans:1},
    {q:'微信是什么时候以英文名WeChat进入国际市场的？',opts:['2011年1月','2012年底','2011年4月'],ans:2},
    {q:'如今，微信支持多少种外语？',opts:['16种','100种','200多种'],ans:0},
    {q:'微信的出现为什么吸引了更多的关注？',opts:['因为它是美国的产品','因为它是中国自己的移动互联网产品','因为它的广告最多'],ans:1},
    {q:'被称为“微信之父”的是谁？',opts:['刘炽平','梅西','张小龙'],ans:2},
    {q:'腾讯是从什么时候开始考虑相关业务的？',opts:['2010年底','2011年1月','2013年7月'],ans:0},
    {q:'在个人计算机时代，中国企业为什么在产品创新上难有领导地位？',opts:['因为缺少资金','因为用户数量和市场成熟程度都低于发达国家','因为没有好的人才'],ans:1},
    {q:'在经营销售上，微信是怎么做的？',opts:['所有国家都用同一个广告','只在中国做广告','针对不同国家和地区推出不同的广告片'],ans:2},
    {q:'现在的海外用户群中出现了什么变化？',opts:['出现了更多的外国人','只剩下华裔','新移民越来越少'],ans:0}
  ],
  lines:[
    {sp:0,zh:'举着手机，边颠着球边拍……国际足球明星梅西用微信直播自己的颠球技术，把手机另一头一个正在哭的小宝贝逗笑。这条30秒的全新广告宣传片在全球15个国家和地区同步上线。',
     py:'Jǔzhe shǒujī, biān diānzhe qiú biān pāi…… Guójì zúqiú míngxīng Méixī yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù, bǎ shǒujī lìng yì tóu yí ge zhèngzài kū de xiǎo bǎobèi dòuxiào. Zhè tiáo sānshí miǎo de quánxīn guǎnggào xuānchuánpiàn zài quánqiú shíwǔ ge guójiā hé dìqū tóngbù shàngxiàn.',
     vn:'Giơ điện thoại lên, vừa tâng bóng vừa quay… Ngôi sao bóng đá quốc tế Messi dùng WeChat phát trực tiếp kỹ thuật tâng bóng của mình, chọc cho một em bé đang khóc ở đầu bên kia điện thoại bật cười. Đoạn phim quảng cáo hoàn toàn mới dài 30 giây này được đồng loạt tung ra ở 15 quốc gia và khu vực trên toàn cầu.'},
    {sp:0,zh:'如此大手笔的推广，腾讯自有其底气所在。微信“在海外注册用户已经超过7000万，且在快速增长当中”。7月3日，在北京召开的2013腾讯合作伙伴大会上，腾讯总裁刘炽平言语间充满了骄傲。',
     py:'Rúcǐ dà shǒubǐ de tuīguǎng, Téngxùn zì yǒu qí dǐqì suǒzài. Wēixìn “zài hǎiwài zhùcè yònghù yǐjīng chāoguò qīqiān wàn, qiě zài kuàisù zēngzhǎng dāngzhōng”. Qī yuè sān rì, zài Běijīng zhàokāi de èr líng yī sān Téngxùn hézuò huǒbàn dàhuì shang, Téngxùn zǒngcái Liú Chìpíng yányǔ jiān chōngmǎnle jiāo\'ào.',
     vn:'Quảng bá mạnh tay đến vậy, Tencent tất có chỗ dựa vững chắc của mình. WeChat “ở nước ngoài đã có hơn 70 triệu người dùng đăng ký, và vẫn đang tăng nhanh”. Ngày 3 tháng 7, tại Đại hội đối tác Tencent 2013 tổ chức ở Bắc Kinh, lời lẽ của chủ tịch Tencent Lưu Sí Bình tràn đầy tự hào.'},
    {sp:0,zh:'2011年1月，微信上线；同年4月，以英文名WeChat正式进入国际市场；2011年12月，实现支持全球100个国家的短信注册；2012年底，覆盖国家和地区超过100个。如今，微信已经覆盖了200多个国家和地区、支持16种外语，是全球使用人数最多的移动通信应用。',
     py:'Èr líng yī yī nián yī yuè, Wēixìn shàngxiàn; tóng nián sì yuè, yǐ Yīngwén míng WeChat zhèngshì jìnrù guójì shìchǎng; èr líng yī yī nián shí\'èr yuè, shíxiàn zhīchí quánqiú yìbǎi ge guójiā de duǎnxìn zhùcè; èr líng yī èr nián dǐ, fùgài guójiā hé dìqū chāoguò yìbǎi ge. Rújīn, Wēixìn yǐjīng fùgàile èrbǎi duō ge guójiā hé dìqū, zhīchí shíliù zhǒng wàiyǔ, shì quánqiú shǐyòng rénshù zuì duō de yídòng tōngxìn yìngyòng.',
     vn:'Tháng 1 năm 2011, WeChat ra mắt; tháng 4 cùng năm, chính thức bước vào thị trường quốc tế với tên tiếng Anh WeChat; tháng 12 năm 2011, hỗ trợ đăng ký bằng tin nhắn ở 100 quốc gia trên toàn cầu; cuối năm 2012, số quốc gia và khu vực được phủ sóng vượt quá 100. Ngày nay, WeChat đã phủ hơn 200 quốc gia và khu vực, hỗ trợ 16 ngoại ngữ, là ứng dụng liên lạc di động có nhiều người dùng nhất thế giới.'},
    {sp:0,zh:'在美国互联网企业“称霸”全球的背景下，作为中国自己的移动互联网产品，微信的出现，自然吸引了更多的关注。',
     py:'Zài Měiguó hùliánwǎng qǐyè “chēngbà” quánqiú de bèijǐng xià, zuòwéi Zhōngguó zìjǐ de yídòng hùliánwǎng chǎnpǐn, Wēixìn de chūxiàn, zìrán xīyǐnle gèng duō de guānzhù.',
     vn:'Trong bối cảnh các doanh nghiệp Internet Mỹ “xưng bá” toàn cầu, là sản phẩm Internet di động của chính Trung Quốc, sự xuất hiện của WeChat đương nhiên thu hút nhiều sự chú ý hơn.'},
    {sp:0,zh:'被称为“微信之父”的腾讯公司高级副总裁张小龙介绍了微信的发展过程：微信的研究开发工作开展得很早，2010年底，移动互联网刚起步，腾讯广州产品研发中心就开始考虑相关业务。他们清楚地认识到了这样的现实——在个人计算机时代，由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位，而移动互联网是一个重新开始的机会。',
     py:'Bèi chēngwéi “Wēixìn zhī fù” de Téngxùn gōngsī gāojí fù zǒngcái Zhāng Xiǎolóng jièshàole Wēixìn de fāzhǎn guòchéng: Wēixìn de yánjiū kāifā gōngzuò kāizhǎn de hěn zǎo, èr líng yī líng nián dǐ, yídòng hùliánwǎng gāng qǐbù, Téngxùn Guǎngzhōu chǎnpǐn yánfā zhōngxīn jiù kāishǐ kǎolǜ xiāngguān yèwù. Tāmen qīngchu de rènshi dàole zhèyàng de xiànshí —— zài gèrén jìsuànjī shídài, yóuyú Zhōngguó hùliánwǎng de yònghù shùliàng yǐjí shìchǎng chéngshú chéngdù děng dōu dīyú fādá guójiā, zài chǎnpǐn chuàngxīn shang nán yǒu lǐngdǎo dìwèi, ér yídòng hùliánwǎng shì yí ge chóngxīn kāishǐ de jīhuì.',
     vn:'Trương Tiểu Long, phó chủ tịch cấp cao của công ty Tencent, người được gọi là “cha đẻ của WeChat”, đã giới thiệu quá trình phát triển của WeChat: việc nghiên cứu phát triển WeChat được triển khai từ rất sớm; cuối năm 2010, khi Internet di động vừa chập chững, trung tâm nghiên cứu phát triển sản phẩm của Tencent ở Quảng Châu đã bắt đầu tính đến mảng kinh doanh liên quan. Họ nhận thức rõ một thực tế: trong thời đại máy tính cá nhân, do số người dùng Internet cũng như mức độ trưởng thành của thị trường Trung Quốc đều thấp hơn các nước phát triển, nên khó giành vị trí dẫn đầu về đổi mới sản phẩm, còn Internet di động là một cơ hội để bắt đầu lại.'},
    {sp:0,zh:'在经营销售上，微信针对不同的国家和地区，推出了不同的广告片，邀请当地明星和名人代言，收效相当不错。海外用户群中不仅有华裔和新移民，还出现了更多的外国人。',
     py:'Zài jīngyíng xiāoshòu shang, Wēixìn zhēnduì bùtóng de guójiā hé dìqū, tuīchūle bùtóng de guǎnggàopiàn, yāoqǐng dāngdì míngxīng hé míngrén dàiyán, shōuxiào xiāngdāng búcuò. Hǎiwài yònghù qún zhōng bùjǐn yǒu huáyì hé xīn yímín, hái chūxiànle gèng duō de wàiguórén.',
     vn:'Về kinh doanh và tiêu thụ, WeChat nhắm vào từng quốc gia, khu vực khác nhau mà tung ra những đoạn quảng cáo khác nhau, mời ngôi sao và người nổi tiếng bản địa làm đại diện, hiệu quả khá tốt. Trong nhóm người dùng ở nước ngoài không chỉ có người gốc Hoa và dân di cư mới, mà còn xuất hiện nhiều người nước ngoài hơn.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — cặp 发达—发展 lấy từ sách (tr. 113)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'发达 — 发展',
   same:'Nghĩa có liên quan (đều nói về “phát triển”) nhưng thường KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'这个城市的经济很发达。／这个城市正在大力发展经济。',vn:'Kinh tế thành phố này rất phát triển. / Thành phố này đang ra sức phát triển kinh tế.'},
   items:[
     {word:'发达',points:[
       'TÍNH TỪ — đi sau 很 / 不太 / 最, không mang tân ngữ.',
       'Tả TRÌNH ĐỘ phát triển đã cao (kết quả): 发达国家, 交通发达.'
     ],ex:[{zh:'这个城市的经济不太发达。',vn:'Kinh tế thành phố này không phát triển lắm.'},
          {zh:'由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位。',vn:'Do số người dùng Internet cũng như mức độ trưởng thành thị trường của Trung Quốc đều thấp hơn các nước phát triển, nên khó giành vị trí dẫn đầu về đổi mới sản phẩm.'}]},
     {word:'发展',points:[
       'ĐỘNG TỪ — mang được tân ngữ (发展经济), nhận bổ ngữ (发展得很快).',
       'Chỉ QUÁ TRÌNH biến đổi của sự vật: 发展中国家 (nước đang phát triển).'
     ],ex:[{zh:'这个城市正在大力发展经济。',vn:'Thành phố này đang ra sức phát triển kinh tế.'},
          {zh:'中国还是一个发展中国家。',vn:'Trung Quốc vẫn là một nước đang phát triển.'}]}
   ],
   quiz:[
     {sentence:'四川是茶馆文化最＿＿的地区之一。',options:['发达','发展'],answer:0,
      why:'最 + tính từ, tả trình độ đã cao → 发达. 发展 là động từ, không đứng sau 最 kiểu này.'},
     {sentence:'人们常说这种动物不聪明，其实它的大脑很＿＿。',options:['发达','发展'],answer:0,
      why:'很 + tính từ: 大脑很发达 (não phát triển). 发展 không dùng sau 很 như tính từ.'},
     {sentence:'方便的交通是＿＿经济的基础。',options:['发达','发展'],answer:1,
      why:'Cần động từ mang tân ngữ 经济 → 发展经济. 发达 không mang tân ngữ.'},
     {sentence:'她的病情＿＿得比我们想象的还要快。',options:['发达','发展'],answer:1,
      why:'Có bổ ngữ 得……快, nói về QUÁ TRÌNH biến đổi của bệnh → 发展.'}
   ],
   sgk:{
     chung:{t:'意思有关联，但一般不能换用。',vn:'Nghĩa có liên quan, nhưng thường không thay cho nhau được.'},
     khac:[
       {a:{t:'形容词。',vn:'Tính từ.',vd:'这个城市的经济不太发达。',vdVn:'Kinh tế thành phố này không phát triển lắm.'},
        b:{t:'动词。',vn:'Động từ.',vd:'这个城市正在大力发展经济。',vdVn:'Thành phố này đang ra sức phát triển kinh tế.'}},
       {a:{t:'形容发展水平很高。',vn:'Tả trình độ phát triển rất cao.',vd:'由于中国互联网的用户数量以及市场成熟程度等都低于发达国家，在产品创新上难有领导地位。',vdVn:'Do số người dùng Internet cũng như mức độ trưởng thành thị trường của Trung Quốc đều thấp hơn các nước phát triển, nên khó giành vị trí dẫn đầu về đổi mới sản phẩm.'},
        b:{t:'指事物的变化。',vn:'Chỉ sự biến đổi của sự vật.',vd:'中国还是一个发展中国家。',vdVn:'Trung Quốc vẫn là một nước đang phát triển.'}}
     ],
     lamThu:[
       {s:'四川是茶馆文化最＿＿的地区之一。',dap:[true,false],mau:true,
        giai:'最 + tính từ tả trình độ đã cao → chỉ 发达.'},
       {s:'人们常说这种动物不聪明，其实它的大脑很＿＿。',dap:[true,false],
        giai:'很 + tính từ: 大脑很发达. 发展 là động từ, không làm vị ngữ sau 很 kiểu này.'},
       {s:'方便的交通是＿＿经济的基础。',dap:[false,true],
        giai:'Cần động từ mang tân ngữ 经济 → 发展经济. 发达 không mang tân ngữ.'},
       {s:'她的病情＿＿得比我们想象的还要快。',dap:[false,true],
        giai:'Động từ + 得 + bổ ngữ, nói quá trình biến đổi → 发展.'}
     ]
   }},

  {pair:'宣传 — 推广',
   same:'Đều là động từ, đều có nghĩa làm cho nhiều người biết đến / dùng đến một thứ gì đó.',
   sameEx:{zh:'公司正在宣传／推广这个新产品。',vn:'Công ty đang quảng bá sản phẩm mới này.'},
   items:[
     {word:'宣传',points:[
       'Nhấn mạnh TRUYỀN ĐẠT THÔNG TIN: giới thiệu, giải thích để người khác biết, hiểu, tin theo.',
       'Đối tượng: tư tưởng, chính sách, kiến thức, việc tốt, sản phẩm.',
       'Có từ ghép 宣传片, 宣传活动, 做宣传.'
     ],ex:[{zh:'像这样能够给全社会信心与快乐的事情，我们应该重点宣传。',vn:'Những việc đem lại niềm tin và niềm vui cho toàn xã hội như thế này, chúng ta nên tập trung tuyên truyền.'}]},
     {word:'推广',points:[
       'Nhấn mạnh MỞ RỘNG PHẠM VI ÁP DỤNG để nhiều nơi, nhiều người dùng.',
       'Đối tượng: kỹ thuật, kinh nghiệm, sản phẩm, tiếng phổ thông.',
       'Không có từ “推广片”; muốn cho mọi người biết một việc tốt thì dùng 宣传.'
     ],ex:[{zh:'这种新技术已经在农村推广开了。',vn:'Kỹ thuật mới này đã được phổ biến rộng ở nông thôn.'}]}
   ],
   quiz:[
     {sentence:'像这样能够给全社会信心与快乐的事情，我们应该重点＿＿。',options:['宣传','推广'],answer:0,
      why:'Việc tốt cần được nhiều người BIẾT đến → 宣传. 推广 dùng cho kỹ thuật, kinh nghiệm cần được áp dụng rộng.'},
     {sentence:'国家一直在＿＿普通话。',options:['宣传','推广'],answer:1,
      why:'推广普通话 là kết hợp cố định (bảng 词语搭配): mở rộng phạm vi dùng tiếng phổ thông.'},
     {sentence:'这条30秒的广告＿＿片在全球同步上线。',options:['宣传','推广'],answer:0,
      why:'宣传片 là từ ghép cố định (phim quảng bá).'},
     {sentence:'为了＿＿这项新产品，公司做了很多宣传。',options:['宣传','推广'],answer:1,
      why:'Mục đích là để sản phẩm được dùng rộng rãi → 推广; phía sau đã có 做了很多宣传, dùng 宣传 sẽ lặp.'}
   ]},

  {pair:'应用 — 使用',
   same:'Đều là động từ, đều có nghĩa là “dùng”.',
   sameEx:{zh:'这种新技术已经被普遍应用／使用了。',vn:'Kỹ thuật mới này đã được dùng rộng rãi.'},
   items:[
     {word:'应用',points:[
       'Đem LÝ THUYẾT, KIẾN THỨC, KỸ THUẬT dùng vào thực tế.',
       'Còn là DANH TỪ: ứng dụng (app) — 手机应用.',
       'Không dùng cho đồ vật cụ thể hằng ngày.'
     ],ex:[{zh:'我们要把学到的知识应用到实际中。',vn:'Chúng ta phải đem kiến thức đã học ứng dụng vào thực tế.'},
          {zh:'我手机里安装了很多学汉语的应用。',vn:'Trong điện thoại tôi cài rất nhiều ứng dụng học tiếng Trung.'}]},
     {word:'使用',points:[
       'Dùng người, đồ vật, tiền bạc, thời gian… cụ thể cho một mục đích.',
       'Đối tượng: 筷子, 电脑, 手机, 词典, 时间.',
       'Khẩu ngữ thường chỉ nói 用.'
     ],ex:[{zh:'要吃中国菜，你首先要学会使用筷子。',vn:'Muốn ăn món Trung Quốc, trước hết bạn phải học cách dùng đũa.'}]}
   ],
   quiz:[
     {sentence:'要吃中国菜，你首先要学会＿＿筷子。',options:['应用','使用'],answer:1,
      why:'Đũa là đồ vật cụ thể → 使用.'},
     {sentence:'我们要把学到的知识＿＿到实际中。',options:['应用','使用'],answer:0,
      why:'Đem kiến thức vào thực tế → 应用.'},
     {sentence:'这种新技术已经被普遍＿＿了。',options:['应用','使用'],answer:0,both:true,
      why:'Với kỹ thuật thì cả hai đều được; 普遍应用 là cụm trong bảng 词语搭配 nên tự nhiên hơn.'},
     {sentence:'考试的时候不能＿＿手机。',options:['应用','使用'],answer:1,
      why:'Điện thoại là đồ vật cụ thể → 使用.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'明星',hv:'minh tinh',vn:'ngôi sao',note:'“Minh tinh màn bạc” — tiếng Việt dùng y nguyên.'},
    {zh:'宣传',hv:'tuyên truyền',vn:'tuyên truyền, quảng bá',note:'Trùng khít.'},
    {zh:'合作',hv:'hợp tác',vn:'hợp tác',note:'Trùng khít.'},
    {zh:'实现',hv:'thực hiện',vn:'thực hiện',note:'Trùng khít — nhưng nhớ đừng đảo thành 现实.'},
    {zh:'移动',hv:'di động',vn:'di động',note:'Điện thoại di động = 移动电话.'},
    {zh:'应用',hv:'ứng dụng',vn:'ứng dụng',note:'Trùng khít, kể cả nghĩa “app”.'},
    {zh:'背景',hv:'bối cảnh',vn:'bối cảnh',note:'Trùng khít.'},
    {zh:'高级',hv:'cao cấp',vn:'cao cấp',note:'Trùng khít.'},
    {zh:'中心',hv:'trung tâm',vn:'trung tâm',note:'Trùng khít.'},
    {zh:'个人',hv:'cá nhân',vn:'cá nhân',note:'Trùng khít.'},
    {zh:'领导',hv:'lĩnh đạo',vn:'lãnh đạo',note:'“Lĩnh” đọc chệch thành “lãnh” — nghe là nhận ra.'},
    {zh:'地位',hv:'địa vị',vn:'địa vị',note:'Trùng khít.'},
    {zh:'经营',hv:'kinh doanh',vn:'kinh doanh',note:'营 đọc là “doanh” — chính là “kinh doanh” của tiếng Việt.'},
    {zh:'移民',hv:'di dân',vn:'dân di cư',note:'“Di dân” tiếng Việt cũng dùng.'},
    {zh:'相关',hv:'tương quan',vn:'liên quan',note:'“Tương quan” — có quan hệ với nhau.'},
    {zh:'称霸',hv:'xưng bá',vn:'xưng bá',note:'“Xưng bá thiên hạ” — tiếng Việt dùng y nguyên.'},
    {zh:'创新',hv:'sáng tân',vn:'đổi mới, sáng tạo',note:'“Tân” = mới, như trong “cách tân”.'}
  ],
  idiom:[],
  trap:[
    {zh:'手笔',hv:'thủ bút',vn:'sự mạnh tay, chịu chi',
     warn:'BẪY: “thủ bút” tiếng Việt là chữ viết tay. Trong bài, 大手笔 là “chơi lớn, chi mạnh tay”.'},
    {zh:'业务',hv:'nghiệp vụ',vn:'mảng kinh doanh; phi vụ làm ăn',
     warn:'“Nghiệp vụ” tiếng Việt thiên về kỹ năng chuyên môn. 业务 còn là hợp đồng, phi vụ: 三笔大业务 = ba hợp đồng lớn.'},
    {zh:'程度',hv:'trình độ',vn:'mức độ',
     warn:'BẪY: “trình độ tiếng Trung” KHÔNG nói 汉语程度 mà nói 汉语水平. 程度 là MỨC ĐỘ: 严重的程度, 成熟程度.'},
    {zh:'发达',hv:'phát đạt',vn:'phát triển (trình độ cao)',
     warn:'“Phát đạt” tiếng Việt là làm ăn thịnh vượng. 发达 là “phát triển” — 发达国家 = nước phát triển, 大脑发达 = não phát triển.'},
    {zh:'通信',hv:'thông tín',vn:'liên lạc, viễn thông',
     warn:'BẪY: đọc giống “thông tin” nhưng KHÔNG phải. “Thông tin” = 信息; 通信 = liên lạc, viễn thông.'},
    {zh:'企业',hv:'xí nghiệp',vn:'doanh nghiệp',
     warn:'“Xí nghiệp” tiếng Việt thường là nhà máy; 企业 là mọi doanh nghiệp, kể cả công ty Internet.'},
    {zh:'宝贝',hv:'bảo bối',vn:'bé cưng; vật quý',
     warn:'Ngoài “bảo bối” (vật quý), 宝贝 còn là cách gọi yêu trẻ con: 小宝贝 = em bé.'},
    {zh:'现实',hv:'hiện thực',vn:'hiện thực, thực tế',
     warn:'Đảo chữ thành 实现 (thực hiện) là nghĩa khác hẳn. 现实 là danh từ / tính từ, 实现 là động từ.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy theo bảng 词语搭配 của giáo trình (tr. 112–113)
// ══════════════════════════════════════════
var matchData = [
  {left:'推广',right:'新技术'},
  {left:'注册',right:'邮箱'},
  {left:'合作',right:'伙伴'},
  {left:'研发',right:'中心'},
  {left:'顺利地',right:'召开'},
  {left:'普遍地',right:'应用'},
  {left:'开发',right:'成功'},
  {left:'销售',right:'到海外'},
  {left:'一家',right:'企业'},
  {left:'一笔',right:'业务'},
  {left:'足球',right:'明星'},
  {left:'现场',right:'直播'},
  {left:'面对',right:'现实'},
  {left:'实现',right:'愿望'},
  {left:'社会',right:'地位'},
  {left:'当地',right:'时间'},
  {left:'产品',right:'创新'},
  {left:'历史',right:'背景'},
  {left:'经营',right:'饭馆'},
  {left:'移动',right:'支付'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这个应用的',blank:'用户',post:'越来越多，连我奶奶都在用。',hint:'(người dùng)',ans:'用户'},
  {pre:'我弟弟练了一个月，现在能连续',blank:'颠球',post:'五十下了。',hint:'(tâng bóng)',ans:'颠球'},
  {pre:'国际足球',blank:'明星',post:'梅西用微信直播自己的颠球技术。',hint:'(ngôi sao)',ans:'明星'},
  {pre:'今晚电视台会',blank:'直播',post:'这场足球比赛，我们一起看吧！',hint:'(phát trực tiếp)',ans:'直播'},
  {pre:'梅西把手机另一头一个正在哭的小',blank:'宝贝',post:'逗笑了。',hint:'(bé cưng)',ans:'宝贝'},
  {pre:'这个演员说话真',blank:'逗',post:'，大家都笑得停不下来。',hint:'(hài, gây cười)',ans:'逗'},
  {pre:'请全校同学看电影？这可真是大',blank:'手笔',post:'！',hint:'(sự mạnh tay, chịu chi)',ans:'手笔'},
  {pre:'只要有手机号，就能',blank:'注册',post:'微信。',hint:'(đăng ký)',ans:'注册'},
  {pre:'因为下大雨，大会没能按时',blank:'召开',post:'。',hint:'(tổ chức hội nghị)',ans:'召开'},
  {pre:'我们公司和他们是多年的合作',blank:'伙伴',post:'了。',hint:'(đối tác)',ans:'伙伴'},
  {pre:'腾讯',blank:'总裁',post:'刘炽平言语间充满了骄傲。',hint:'(chủ tịch)',ans:'总裁'},
  {pre:'如今，微信已经',blank:'覆盖',post:'了200多个国家和地区。',hint:'(phủ, bao trùm)',ans:'覆盖'},
  {pre:'现在很多人出门不带钱包，都用',blank:'移动',post:'支付。',hint:'(di động)',ans:'移动'},
  {pre:'手机已经成了人们最重要的',blank:'通信',post:'工具。',hint:'(liên lạc, viễn thông)',ans:'通信'},
  {pre:'我叔叔在一家大',blank:'企业',post:'工作，经常出差。',hint:'(doanh nghiệp)',ans:'企业'},
  {pre:'这支球队已经连续五年',blank:'称霸',post:'全国比赛了。',hint:'(xưng bá, thống trị)',ans:'称霸'},
  {pre:'这个问题是在什么样的',blank:'背景',post:'下提出来的？',hint:'(bối cảnh)',ans:'背景'},
  {pre:'学完这本书，你就可以上',blank:'高级',post:'班了。',hint:'(cao cấp)',ans:'高级'},
  {pre:'我在班里当',blank:'副',post:'班长，帮班长管理班级的事情。',hint:'(phó)',ans:'副'},
  {pre:'他们花了两年时间，终于把这个应用',blank:'开发',post:'成功了。',hint:'(nghiên cứu phát triển)',ans:'开发'},
  {pre:'上海是中国的经济',blank:'中心',post:'。',hint:'(trung tâm)',ans:'中心'},
  {pre:'有问题的话，请联系',blank:'相关',post:'部门。',hint:'(liên quan)',ans:'相关'},
  {pre:'他',blank:'业务',post:'能力很强，很快就当上了经理。',hint:'(chuyên môn, nghiệp vụ)',ans:'业务'},
  {pre:'学校的领导、教师',blank:'以及',post:'一些学生代表观看了演出。',hint:'(và, cùng với — văn viết)',ans:'以及'},
  {pre:'问题已经发展到了十分严重的',blank:'程度',post:'。',hint:'(mức độ)',ans:'程度'},
  {pre:'一家企业如果不',blank:'创新',post:'，很快就会被市场淘汰。',hint:'(đổi mới)',ans:'创新'},
  {pre:'这家公司在手机市场上一直处于',blank:'领导',post:'地位。',hint:'(dẫn đầu)',ans:'领导'},
  {pre:'手机在我们的生活中占有非常重要的',blank:'地位',post:'。',hint:'(vị trí, địa vị)',ans:'地位'},
  {pre:'去旅游的时候，我喜欢尝尝',blank:'当地',post:'的小吃。',hint:'(địa phương)',ans:'当地'},
  {pre:'这家公司花了很多钱请明星来',blank:'代言',post:'。',hint:'(làm đại diện)',ans:'代言'},
  {pre:'他是',blank:'华裔',post:'美国人，爷爷奶奶都是广东人。',hint:'(người gốc Hoa)',ans:'华裔'},
  {pre:'他们一家十年前',blank:'移民',post:'到了澳大利亚。',hint:'(di cư)',ans:'移民'},
  {pre:'本店销售电视、冰箱、洗衣机',blank:'以及',post:'其他电器。',hint:'(và — đứng trước thành phần cuối)',ans:'以及'},
  {pre:'在很大',blank:'程度',post:'上，一个人的未来取决于他所受的教育。',hint:'(mức độ)',ans:'程度'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (以及, 程度) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['本店','销售','电视、冰箱、洗衣机','以及','其他电器','。'],ans:'本店销售电视、冰箱、洗衣机以及其他电器。',audio:'本店销售电视、冰箱、洗衣机以及其他电器。'},
  {words:['吃饭时','不要','用筷子','敲打','碗、盘子','以及','桌面','。'],ans:'吃饭时不要用筷子敲打碗、盘子以及桌面。',audio:'吃饭时不要用筷子敲打碗、盘子以及桌面。'},
  {words:['学校的领导、','教师','以及','一些学生代表','观看了','演出','。'],ans:'学校的领导、教师以及一些学生代表观看了演出。',audio:'学校的领导、教师以及一些学生代表观看了演出。'},
  {words:['问题','已经','发展到了','十分严重的','程度','。'],ans:'问题已经发展到了十分严重的程度。',audio:'问题已经发展到了十分严重的程度。'},
  {words:['他','玩手机','已经','到了','不吃饭的','程度','。'],ans:'他玩手机已经到了不吃饭的程度。',audio:'他玩手机已经到了不吃饭的程度。'},
  {words:['这个市场的','成熟程度','还','比较','低','。'],ans:'这个市场的成熟程度还比较低。',audio:'这个市场的成熟程度还比较低。'},
  {words:['微信','已经','覆盖了','200多个','国家和地区','。'],ans:'微信已经覆盖了200多个国家和地区。',audio:'微信已经覆盖了200多个国家和地区。'},
  {words:['梅西','用微信','直播','自己的','颠球技术','。'],ans:'梅西用微信直播自己的颠球技术。',audio:'梅西用微信直播自己的颠球技术。'},
  {words:['他','把','一个正在哭的','小宝贝','逗笑了','。'],ans:'他把一个正在哭的小宝贝逗笑了。',audio:'他把一个正在哭的小宝贝逗笑了。'},
  {words:['我们','跟','这家公司','合作','过','两次','。'],ans:'我们跟这家公司合作过两次。',audio:'我们跟这家公司合作过两次。'},
  {words:['我的','愿望','终于','实现','了','！'],ans:'我的愿望终于实现了！',audio:'我的愿望终于实现了！'},
  {words:['要想','在这个网站购物','，','你','必须','先','注册','一个邮箱','。'],ans:'要想在这个网站购物，你必须先注册一个邮箱。',audio:'要想在这个网站购物，你必须先注册一个邮箱。'},
  {words:['张小龙','被','大家','称为','“微信之父”','。'],ans:'张小龙被大家称为“微信之父”。',audio:'张小龙被大家称为“微信之父”。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'学校正在____节约用水的重要性。',opts:['宣传','推广','开发','代言'],ans:0,
   exp:'Làm cho mọi người HIỂU một điều (tầm quan trọng của việc tiết kiệm nước) → 宣传. 推广 cần tân ngữ là thứ được đem ra áp dụng (技术, 经验, 产品); 开发 là phát triển sản phẩm; 代言 không mang tân ngữ kiểu này.'},
  {wrong:'这种新技术很有用，应该在全国____。',opts:['推广','宣传','销售','覆盖'],ans:0,
   exp:'Mở rộng phạm vi áp dụng một kỹ thuật → 推广 (推广新技术 trong bảng 词语搭配). 宣传 thiên về truyền bá thông tin; 销售 là bán hàng; 覆盖 là bao phủ, không mang nghĩa đem kỹ thuật ra áp dụng.'},
  {wrong:'这次小组作业需要大家的____精神。',opts:['合作','伙伴','相关','代言'],ans:0,
   exp:'合作精神 = tinh thần hợp tác (bảng 词语搭配). 伙伴 là người, không đi với 精神; 相关 là “liên quan”; 代言 là làm đại diện quảng cáo.'},
  {wrong:'为了____当医生的梦想，她每天都学习到很晚。',opts:['实现','现实','发现','表现'],ans:0,
   exp:'Động từ mang tân ngữ 梦想 → 实现梦想. 现实 là danh từ (hiện thực) — chỉ đảo chữ nhưng khác từ loại; 发现 là phát hiện; 表现 là thể hiện.'},
  {wrong:'一个月学会汉语？这个计划不太____。',opts:['现实','实现','发达','相关'],ans:0,
   exp:'现实 dùng như tính từ: 不太现实 = không thực tế lắm. 实现 là động từ, không đứng sau 不太 để tả kế hoạch; 发达, 相关 không hợp nghĩa.'},
  {wrong:'学了知识，还要学会把它____到生活中。',opts:['应用','使用','移动','开发'],ans:0,
   exp:'Đem KIẾN THỨC dùng vào thực tế → 应用到……中. 使用 dùng cho đồ vật cụ thể (使用筷子); 移动 là di chuyển; 开发 là phát triển sản phẩm.'},
  {wrong:'在网上不要随便告诉别人你的____信息。',opts:['个人','自己','人们','大家'],ans:0,
   exp:'个人信息 = thông tin cá nhân, 个人 làm định ngữ trực tiếp. 自己 là đại từ, phải nói 你自己的信息; 人们, 大家 sai nghĩa.'},
  {wrong:'这个城市的交通很____，去哪儿都很方便。',opts:['发达','发展','开发','创新'],ans:0,
   exp:'很 + TÍNH TỪ tả trình độ cao → 发达. 发展 là động từ (发展交通 / 交通发展得很快); 开发, 创新 không đi với 交通很…….'},
  {wrong:'我父母在老家____一家小饭馆。',opts:['经营','销售','召开','开发'],ans:0,
   exp:'Điều hành, kinh doanh một cửa hàng → 经营饭馆. 销售 là bán hàng hoá; 召开 chỉ dùng cho hội nghị; 开发 là phát triển sản phẩm, khai thác.'},
  {wrong:'这种手机____得很好，一上市就卖完了。',opts:['销售','经营','覆盖','召开'],ans:0,
   exp:'Hàng bán chạy → 销售得很好 (bảng 词语搭配: 销售得……). 经营得很好 nói về cả cửa hàng / công ty, không nói về một món hàng; 覆盖, 召开 sai nghĩa.'},
  {wrong:'老师____每个学生的特点，制定了不同的学习计划。',opts:['针对','相关','覆盖','代言'],ans:0,
   exp:'Nhắm đúng vào đối tượng cụ thể rồi đưa ra biện pháp → 针对 + đối tượng. 相关 là “liên quan”, không mang tân ngữ như vậy; 覆盖, 代言 sai nghĩa.'},
  {wrong:'我没有他的电话，不过我们加了____好友，可以在上面聊天。',opts:['微信','腾讯','梅西','应用'],ans:0,
   exp:'加微信好友 = kết bạn WeChat. 腾讯 là tên công ty; 梅西 là cầu thủ; 应用 là danh từ chung, không nói 加应用好友.'},
  {wrong:'在这条广告片里，国际足球明星____用微信直播自己的颠球技术。',opts:['梅西','张小龙','刘炽平','腾讯'],ans:0,
   exp:'Theo bài đọc, ngôi sao bóng đá trong quảng cáo là 梅西 (Messi). 张小龙, 刘炽平 là lãnh đạo Tencent; 腾讯 là tên công ty.'},
  {wrong:'微信是____公司开发的移动通信应用。',opts:['腾讯','微信','梅西','华裔'],ans:0,
   exp:'Công ty phát triển WeChat là 腾讯 (Tencent). Các phương án khác không phải tên công ty.'},
  {wrong:'在2013腾讯合作伙伴大会上，腾讯总裁____言语间充满了骄傲。',opts:['刘炽平','张小龙','梅西','腾讯'],ans:0,
   exp:'Chủ tịch (总裁) Tencent phát biểu ở đại hội là 刘炽平. 张小龙 là PHÓ chủ tịch cấp cao (高级副总裁), “cha đẻ WeChat”.'},
  {wrong:'被称为“微信之父”的是腾讯公司高级副总裁____。',opts:['张小龙','刘炽平','梅西','华裔'],ans:0,
   exp:'“微信之父” (cha đẻ WeChat) là 张小龙, phó chủ tịch cấp cao của Tencent. 刘炽平 là chủ tịch.'},
  {wrong:'他不但聪明，____非常努力。',opts:['而且','以及','和','跟'],ans:0,
   exp:'Nối hai vế câu tăng tiến: 不但……而且……. 以及, 和, 跟 chỉ nối từ / cụm từ ngang hàng, KHÔNG nối hai vị ngữ tính từ hay hai vế câu.'},
  {wrong:'他的汉语____很高，已经能看中文电影了。',opts:['水平','程度','地位','背景'],ans:0,
   exp:'Nói năng lực ngôn ngữ dùng 水平: 汉语水平. 程度 là MỨC ĐỘ (严重的程度, 成熟程度) — bẫy vì tiếng Việt nói “trình độ”; 地位, 背景 sai nghĩa.'},
  {wrong:'他玩手机已经到了不吃饭的____。',opts:['程度','水平','地位','中心'],ans:0,
   exp:'到了……的程度 = đến mức …. 水平 là trình độ năng lực, không dùng trong mẫu này; 地位, 中心 sai nghĩa.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chỉ cần đăng ký một tài khoản trên điện thoại là bạn có thể xem trực tiếp các trận bóng đá của trường bất cứ lúc nào.', zh:'只要在手机上注册一个账号，你就可以随时收看学校足球比赛的直播。', py:'Zhǐyào zài shǒujī shang zhùcè yí ge zhànghào, nǐ jiù kěyǐ suíshí shōukàn xuéxiào zúqiú bǐsài de zhíbō.', goiY:['只要……就……','注册','直播','随时'], giai:'只要……就…… nêu điều kiện đủ; 随时 (bất cứ lúc nào) đứng trước động từ 收看, không đặt cuối câu như tiếng Việt.'},
  {vi:'Lớp trưởng không chỉ lo tuyên truyền cho hoạt động lần này mà còn đích thân liên hệ với mấy doanh nghiệp địa phương.', zh:'班长不但负责宣传这次活动，而且亲自联系了当地的几家企业。', py:'Bānzhǎng búdàn fùzé xuānchuán zhè cì huódòng, érqiě qīnzì liánxìle dāngdì de jǐ jiā qǐyè.', goiY:['不但……而且……','宣传','亲自','企业'], giai:'不但……而且…… nối hai việc theo mức tăng dần; hai vế cùng chủ ngữ nên 不但 đứng SAU chủ ngữ 班长. 当地 làm định ngữ cần 的 (当地的企业).'},
  {vi:'Tuy lúc đầu cậu ấy chỉ dùng ứng dụng này xem livestream cho vui, nhưng bây giờ đã đến mức một ngày không xem là thấy bứt rứt.', zh:'虽然他一开始只是用这个应用随便看看直播，但现在已经到了一天不看就难受的程度。', py:'Suīrán tā yì kāishǐ zhǐshì yòng zhège yìngyòng suíbiàn kànkan zhíbō, dàn xiànzài yǐjīng dàole yì tiān bú kàn jiù nánshòu de chéngdù.', goiY:['虽然……但……','应用','到了……的程度'], giai:'"Đến mức…" = 到了……的程度: phần mô tả mức độ đặt GIỮA 到了 và 的程度, ngược trật tự tiếng Việt; 虽然……但…… nối sự thật với diễn biến trái chiều.'},
  {vi:'Nếu trường đã định phát triển phần mềm học tập của riêng mình thì nên hỏi ý kiến học sinh, phụ huynh và cả thầy cô trước.', zh:'既然学校打算开发自己的学习软件，就应该先征求学生、家长以及老师们的意见。', py:'Jìrán xuéxiào dǎsuàn kāifā zìjǐ de xuéxí ruǎnjiàn, jiù yīnggāi xiān zhēngqiú xuésheng, jiāzhǎng yǐjí lǎoshīmen de yìjiàn.', goiY:['既然……就……','开发','以及'], giai:'既然 nêu một việc đã xác định rồi rút ra kết luận ở vế 就; 以及 chỉ đặt trước thành phần CUỐI của chuỗi liệt kê (学生、家长以及老师), không lặp giữa các thành phần.'},
  {vi:'Thay vì suốt ngày than phiền rằng thực tế bất công với mình, chi bằng bình tâm lại nghĩ xem làm thế nào để từng bước thực hiện mục tiêu của bản thân.', zh:'与其整天抱怨现实对自己不公平，不如静下心来想想怎样一步一步实现自己的目标。', py:'Yǔqí zhěngtiān bàoyuàn xiànshí duì zìjǐ bù gōngpíng, bùrú jìng xià xīn lai xiǎngxiang zěnyàng yí bù yí bù shíxiàn zìjǐ de mùbiāo.', goiY:['与其……不如……','抱怨','现实','实现'], giai:'与其 A，不如 B = "thay vì A, chi bằng B" (chọn B); đừng nhầm 现实 (thực tế — danh từ) với 实现 (thực hiện — động từ).'},
  {vi:'Khi làm bài tập nhóm, một khi người cộng tác không có trách nhiệm thì những người khác phải làm thay phần việc liên quan của người đó, từ đó ảnh hưởng đến tiến độ của cả nhóm.', zh:'做小组作业时，一旦合作伙伴不负责任，其他人就得替他完成相关的部分，从而影响整个小组的进度。', py:'Zuò xiǎozǔ zuòyè shí, yídàn hézuò huǒbàn bú fù zérèn, qítā rén jiù děi tì tā wánchéng xiāngguān de bùfen, cóng’ér yǐngxiǎng zhěnggè xiǎozǔ de jìndù.', goiY:['一旦……就……','从而','合作伙伴','相关'], giai:'一旦 nêu giả thiết về một việc xấu có thể xảy ra, vế sau dùng 就; 从而 (từ đó) mở đầu vế cuối nêu kết quả kéo theo.'},
  {vi:'Một thành phố phát triển hay không không phải nhìn vào việc nó có bao nhiêu nhà cao tầng, mà là nhìn vào mức sống cũng như trình độ học vấn của người dân bình thường.', zh:'一个城市发达不发达，不是看它有多少高楼，而是看普通人的生活水平以及受教育的程度。', py:'Yí ge chéngshì fādá bu fādá, bú shì kàn tā yǒu duōshao gāolóu, ér shì kàn pǔtōngrén de shēnghuó shuǐpíng yǐjí shòu jiàoyù de chéngdù.', goiY:['不是……而是……','发达','以及','程度'], giai:'不是 A，而是 B phủ định A để khẳng định B; "trình độ học vấn" = 受教育的程度 (cụm từ + 程度), không dịch thành 学问程度.'},
  {vi:'Sở dĩ phần mềm học tập này nhanh chóng thu hút được vài triệu người dùng là vì đội ngũ làm ra nó không ngừng đổi mới, nhắm đúng nhu cầu của học sinh trung học, chứ không phải nhờ mời người nổi tiếng làm đại diện.', zh:'这款学习软件之所以很快吸引了几百万用户，是因为团队针对中学生的需求不断创新，而不是靠明星代言。', py:'Zhè kuǎn xuéxí ruǎnjiàn zhīsuǒyǐ hěn kuài xīyǐnle jǐ bǎi wàn yònghù, shì yīnwèi tuánduì zhēnduì zhōngxuéshēng de xūqiú búduàn chuàngxīn, ér bú shì kào míngxīng dàiyán.', goiY:['之所以……是因为……','针对','创新','代言'], giai:'之所以 A，是因为 B nêu kết quả trước, nguyên nhân sau (= "sở dĩ… là vì…"); 针对 + đối tượng (nhắm vào) đặt trước động từ 创新.'},
  {vi:'Cho dù mạng di động đã phủ sóng gần như mọi ngóc ngách, mẹ vẫn không cho tôi mang điện thoại khi ở nội trú, để tránh việc tối đến tôi trốn trong chăn thức khuya lướt video.', zh:'即使移动网络已经覆盖了几乎每一个角落，妈妈也不许我带手机去住校，以免我晚上躲在被子里熬夜刷视频。', py:'Jíshǐ yídòng wǎngluò yǐjīng fùgàile jīhū měi yí ge jiǎoluò, māma yě bù xǔ wǒ dài shǒujī qù zhùxiào, yǐmiǎn wǒ wǎnshang duǒ zài bèizi li áoyè shuā shìpín.', goiY:['即使……也……','以免','覆盖','熬夜'], giai:'即使 + giả thiết/nhượng bộ, 也 + kết quả không đổi (也 đứng sau chủ ngữ 妈妈); 以免 (để khỏi) mở đầu vế cuối, nói điều muốn tránh.'},
  {vi:'Dù là quảng bá hoạt động trên mạng hay bàn chuyện hợp tác với doanh nghiệp địa phương, câu lạc bộ đều không thể thiếu sự nỗ lực của toàn thể thành viên; chỉ khi đồng lòng đoàn kết thì mới điều hành được nó tốt.', zh:'社团无论在网上推广活动，还是跟当地企业谈合作，都离不开全体成员的努力，只有团结一致，才能把它经营好。', py:'Shètuán wúlùn zài wǎng shang tuīguǎng huódòng, háishi gēn dāngdì qǐyè tán hézuò, dōu lí bu kāi quántǐ chéngyuán de nǔlì, zhǐyǒu tuánjié yízhì, cái néng bǎ tā jīngyíng hǎo.', goiY:['无论……还是……都……','只有……才……','推广','经营'], giai:'无论 A 还是 B，都…… = "dù là A hay B đều…" (vế sau bắt buộc có 都); 只有……才…… là điều kiện duy nhất — không thay bằng 只要……就…… (điều kiện đủ).'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Tencent không chỉ mời ngôi sao bóng đá Messi quay phim quảng bá cho WeChat mà còn để anh ấy dùng WeChat livestream kỹ thuật tâng bóng của mình.', zh:'腾讯不仅请足球明星梅西为微信拍宣传片，而且让他用微信直播自己的颠球技术。', py:'Téngxùn bùjǐn qǐng zúqiú míngxīng Méixī wèi Wēixìn pāi xuānchuánpiàn, érqiě ràng tā yòng Wēixìn zhíbō zìjǐ de diān qiú jìshù.', goiY:['不仅……而且…… = không chỉ… mà còn…','宣传 = quảng bá, tuyên truyền','颠球 = tâng bóng'], giai:'不仅……而且…… nối hai việc theo mức tăng dần; 宣传片 là "phim quảng bá", 直播 là "phát trực tiếp / livestream".'},
  {vi:'Đoạn phim quảng bá này được tung ra đồng loạt ở 15 quốc gia và khu vực trên toàn cầu, đủ thấy Tencent coi trọng đợt quảng bá ra nước ngoài lần này đến mức nào.', zh:'这条宣传片在全球十五个国家和地区同步上线，可见腾讯对这次海外推广有多重视。', py:'Zhè tiáo xuānchuánpiàn zài quánqiú shíwǔ ge guójiā hé dìqū tóngbù shàngxiàn, kějiàn Téngxùn duì zhè cì hǎiwài tuīguǎng yǒu duō zhòngshì.', goiY:['可见 = đủ thấy, có thể thấy','同步 = đồng loạt, cùng lúc','推广 = quảng bá, mở rộng'], giai:'可见 mở đầu vế sau, rút ra kết luận từ sự việc ở vế trước; 有多 + động từ/tính từ = "… đến mức nào".'},
  {vi:'Ngày nay số người dùng đăng ký WeChat ở nước ngoài đã vượt 70 triệu, hơn nữa WeChat đã phủ tới hơn 200 quốc gia và khu vực.', zh:'如今微信在海外的注册用户已经超过七千万，而且覆盖了二百多个国家和地区。', py:'Rújīn Wēixìn zài hǎiwài de zhùcè yònghù yǐjīng chāoguò qīqiān wàn, érqiě fùgàile èrbǎi duō ge guójiā hé dìqū.', goiY:['而且 = hơn nữa, mà còn','注册用户 = người dùng đăng ký','覆盖 = phủ, bao phủ'], giai:'七千万 = 70 triệu (万 = 10.000), cẩn thận khi đổi đơn vị; 而且 nối thêm một thông tin cùng chiều.'},
  {vi:'Trong số người dùng ở nước ngoài, ngoài người gốc Hoa và người mới di cư ra, còn có ngày càng nhiều người nước ngoài; điều đó cho thấy WeChat đang dần bước ra khỏi cộng đồng người Hoa.', zh:'在海外用户中，除了华裔和新移民以外，还有越来越多的外国人，这说明微信正在逐渐走出华人的圈子。', py:'Zài hǎiwài yònghù zhōng, chúle huáyì hé xīn yímín yǐwài, hái yǒu yuè lái yuè duō de wàiguórén, zhè shuōmíng Wēixìn zhèngzài zhújiàn zǒuchū huárén de quānzi.', goiY:['除了……以外，还…… = ngoài… ra, còn…','华裔 = người gốc Hoa','移民 = người di cư','逐渐 = dần dần'], giai:'除了……以外，还…… là "ngoài… ra còn…" (bao gồm cả), khác 除了……以外，都…… (loại trừ); 越来越多 dịch "ngày càng nhiều".'},
  {vi:'WeChat tung ra những quảng cáo khác nhau cho từng quốc gia, khu vực khác nhau, đồng thời mời ngôi sao bản địa làm người đại diện, vì thế hiệu quả thu được khá tốt.', zh:'微信针对不同的国家和地区推出了不同的广告，并且邀请当地明星代言，因此收效相当不错。', py:'Wēixìn zhēnduì bùtóng de guójiā hé dìqū tuīchūle bùtóng de guǎnggào, bìngqiě yāoqǐng dāngdì míngxīng dàiyán, yīncǐ shōuxiào xiāngdāng búcuò.', goiY:['针对 = nhắm vào, dành cho','并且 = đồng thời, và','代言 = làm người đại diện (quảng cáo)'], giai:'针对 + đối tượng đặt trước động từ, dịch "dành riêng cho / nhắm vào…"; 收效 là "hiệu quả thu được", 相当 ở đây là phó từ = "khá".'},
  {vi:'WeChat do Phó Tổng giám đốc cấp cao của Tencent là Trương Tiểu Long dẫn dắt đội ngũ phát triển; sở dĩ nó được ưa chuộng là vì chức năng liên lạc đơn giản, dễ dùng, lại hoàn toàn miễn phí.', zh:'微信由腾讯高级副总裁张小龙带领团队开发，它之所以受欢迎，是因为其通信功能简单好用，而且完全免费。', py:'Wēixìn yóu Téngxùn gāojí fù zǒngcái Zhāng Xiǎolóng dàilǐng tuánduì kāifā, tā zhīsuǒyǐ shòu huānyíng, shì yīnwèi qí tōngxìn gōngnéng jiǎndān hǎoyòng, érqiě wánquán miǎnfèi.', goiY:['之所以……是因为…… = sở dĩ… là vì…','高级副总裁 = phó tổng giám đốc cấp cao','通信 = liên lạc, truyền tin'], giai:'由 + người + V = "do ai làm"; 之所以……是因为…… nêu kết quả trước, nguyên nhân sau — dịch "sở dĩ… là vì…"; 其 = 它的.'},
  {vi:'Tại buổi họp báo, Tencent cho biết từ nay sẽ tìm thêm nhiều đối tác ở nước ngoài để có thể phát triển các mảng dịch vụ liên quan phù hợp với thói quen của người dùng bản địa.', zh:'腾讯在召开发布会时表示，今后将寻找更多海外合作伙伴，以便针对当地用户的习惯开发相关业务。', py:'Téngxùn zài zhàokāi fābùhuì shí biǎoshì, jīnhòu jiāng xúnzhǎo gèng duō hǎiwài hézuò huǒbàn, yǐbiàn zhēnduì dāngdì yònghù de xíguàn kāifā xiāngguān yèwù.', goiY:['以便 = để, nhằm (dễ bề)','召开 = tổ chức, triệu tập (hội nghị)','合作伙伴 = đối tác','业务 = mảng kinh doanh, dịch vụ'], giai:'以便 đứng đầu vế sau nêu mục đích (= "để tiện…"); 召开 chỉ dùng với hội nghị, cuộc họp — dịch "tổ chức/ triệu tập", không dịch "mở".'},
  {vi:'Tổng giám đốc Tencent Lưu Sí Bình cho rằng Internet di động là một cơ hội để bắt đầu lại; chỉ cần nắm bắt được nó, doanh nghiệp Trung Quốc sẽ có khả năng làm bá chủ thị trường toàn cầu.', zh:'腾讯总裁刘炽平认为，移动互联网是一个重新开始的机会，只要抓住它，中国企业就有可能称霸全球市场。', py:'Téngxùn zǒngcái Liú Chìpíng rènwéi, yídòng hùliánwǎng shì yí ge chóngxīn kāishǐ de jīhuì, zhǐyào zhuāzhù tā, Zhōngguó qǐyè jiù yǒu kěnéng chēngbà quánqiú shìchǎng.', goiY:['只要……就…… = chỉ cần… thì…','移动互联网 = Internet di động','称霸 = xưng bá, thống trị'], giai:'只要 nêu điều kiện đủ; 就 đứng SAU chủ ngữ của vế sau (中国企业就……), không đứng trước chủ ngữ.'},
  {vi:'Do số lượng người dùng Internet cũng như mức độ trưởng thành của thị trường Trung Quốc đều không bằng các nước phát triển, nên doanh nghiệp Trung Quốc khó giành vị trí dẫn đầu về đổi mới sáng tạo.', zh:'由于中国互联网的用户数量以及市场成熟程度都不如发达国家，中国企业很难在创新上占据领导地位。', py:'Yóuyú Zhōngguó hùliánwǎng de yònghù shùliàng yǐjí shìchǎng chéngshú chéngdù dōu bùrú fādá guójiā, Zhōngguó qǐyè hěn nán zài chuàngxīn shang zhànjù lǐngdǎo dìwèi.', goiY:['由于 = do, bởi vì','以及 = cùng với, cũng như','成熟程度 = mức độ trưởng thành','领导地位 = vị trí dẫn đầu'], giai:'由于 nêu nguyên nhân ở vế đầu, vế sau nêu kết quả; 以及 nối hai thành phần ngang hàng — dịch "cũng như"; N + 程度 dịch là "mức độ…".'},
  {vi:'Tuy ở trong nước WeChat đã phát triển đến mức ai ai cũng dùng, nhưng ở nước ngoài nó hoàn toàn không có chỗ dựa gì, vì vậy Tencent phải bắt đầu lại từ đầu cả về quảng bá lẫn kinh doanh.', zh:'尽管微信在国内发展到了人人都在用的程度，但在海外毫无背景，所以腾讯必须在宣传以及经营上重新开始。', py:'Jǐnguǎn Wēixìn zài guónèi fāzhǎn dàole rénrén dōu zài yòng de chéngdù, dàn zài hǎiwài háo wú bèijǐng, suǒyǐ Téngxùn bìxū zài xuānchuán yǐjí jīngyíng shang chóngxīn kāishǐ.', goiY:['尽管……但…… = mặc dù… nhưng…','到了……的程度 = đến mức…','背景 = bối cảnh, chỗ dựa','以及 = và, cùng với'], giai:'到了……的程度 dịch "đến mức…" và đảo phần mức độ ra sau; 毫无背景 = "hoàn toàn không có chỗ dựa/ tên tuổi gì", không dịch cứng là "không có bối cảnh".'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// (chủ đề theo 命题写作 của sách: “××（网络、手机等）改变我的生活”)
// ══════════════════════════════════════════
var writingData = {
  words:['移动','应用','以及','程度','实现'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể điện thoại / Internet đã thay đổi cuộc sống của em như thế nào.',
  outline:[
    'Câu mở: Internet di động đã đi vào cuộc sống (dùng 移动).',
    'Thân 1: em dùng những ứng dụng gì, để làm gì (dùng 应用 + liệt kê bằng 以及).',
    'Thân 2: một điều tốt nó mang lại — ước mơ / mong muốn đã thành hiện thực (dùng 实现).',
    'Kết: mặt trái và cách em tự điều chỉnh (dùng 在很大程度上 / ……的程度).'
  ],
  model:{
    zh:'现在，移动互联网已经走进了每个人的生活。我的手机里有很多应用，聊天、购物以及学习都离不开它们。有了这些应用，我在家就能跟外国朋友视频聊天，实现了多年的愿望。不过，我也发现自己在很大程度上依赖手机，所以我给自己定了一个规定：每天玩手机不超过两个小时。',
    py:'Xiànzài, yídòng hùliánwǎng yǐjīng zǒujìnle měi ge rén de shēnghuó. Wǒ de shǒujī li yǒu hěn duō yìngyòng, liáotiān, gòuwù yǐjí xuéxí dōu lí bu kāi tāmen. Yǒule zhèxiē yìngyòng, wǒ zài jiā jiù néng gēn wàiguó péngyou shìpín liáotiān, shíxiànle duō nián de yuànwàng. Búguò, wǒ yě fāxiàn zìjǐ zài hěn dà chéngdù shang yīlài shǒujī, suǒyǐ wǒ gěi zìjǐ dìngle yí ge guīdìng: měi tiān wán shǒujī bù chāoguò liǎng ge xiǎoshí.',
    vn:'Bây giờ, Internet di động đã đi vào cuộc sống của mỗi người. Trong điện thoại tôi có rất nhiều ứng dụng; nhắn tin, mua sắm và học tập đều không thể thiếu chúng. Có những ứng dụng này, ở nhà tôi cũng gọi video được với bạn bè nước ngoài, thực hiện được mong muốn nhiều năm của mình. Nhưng tôi cũng nhận ra mình phụ thuộc vào điện thoại ở mức độ lớn, nên tôi tự đặt ra một quy định: mỗi ngày chơi điện thoại không quá hai tiếng.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có một câu liệt kê dùng 以及 đúng chỗ (trước thành phần CUỐI) chưa?',
    'Có nêu cả mặt tốt lẫn mặt chưa tốt, và một câu kết rút ra cách làm của em chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈手机或网络怎样改变了你的生活。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'移动', loai:'động từ (hay làm định ngữ)', cach:'移动互联网 · 移动支付 · 向前移动',
     sai:[{re:'(很|非常|特别|十分)移动', sua:'移动互联网 / 很方便', giai:'移动 là động từ (di chuyển) hoặc định ngữ (移动互联网), không đi sau 很 như tính từ.'},
          {re:'移动(了)?(到)?(新)?(家|宿舍|房子)', sua:'搬家', giai:'Chuyển nhà nói 搬家, không dùng 移动.'}]},
    {tu:'应用', loai:'danh từ / động từ', cach:'手机里的应用 · 把知识应用到生活中',
     sai:[{re:'应用(筷子|电脑|手机|词典|钱)', sua:'使用 / 用 + đồ vật', giai:'Dùng đồ vật cụ thể nói 使用 / 用. 应用 dành cho kiến thức, kỹ thuật, hoặc là danh từ “app”.'}]},
    {tu:'以及', loai:'liên từ', cach:'A、B以及C (以及 đứng trước thành phần cuối)',
     sai:[{re:'(聪明|漂亮|认真|努力|高兴|方便|好看|有意思)以及', sua:'又……又…… / 而且', giai:'以及 nối danh từ / cụm từ ngang hàng, KHÔNG nối hai tính từ làm vị ngữ.'},
          {re:'以及[^。！？]*以及', sua:'A、B、C以及D', giai:'Trong một chuỗi liệt kê chỉ dùng 以及 MỘT lần, trước thành phần cuối; các phần trước ngăn bằng dấu 、.', nhe:true}]},
    {tu:'程度', loai:'danh từ', cach:'在很大程度上 · 到了……的程度',
     sai:[{re:'在很大程度(?!上)', sua:'在很大程度上', giai:'Cụm cố định là 在很大程度上 — không bỏ 上.'},
          {re:'(汉语|中文|英语|外语)程度', sua:'汉语水平', giai:'Năng lực ngôn ngữ dùng 水平 (汉语水平), không dùng 程度.'}]},
    {tu:'实现', loai:'động từ', cach:'实现愿望 · 梦想实现了',
     sai:[{re:'现实(了|我的|梦想|愿望|理想|目标)', sua:'实现', giai:'Đảo chữ nhầm: “thực hiện” là 实现; 现实 là danh từ “hiện thực”.'},
          {re:'(很|非常|十分)实现', sua:'终于实现了', giai:'实现 là động từ, không đi sau 很.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'A、B + 以及 + C', nhan:'以及', vd:'聊天、购物以及学习都离不开手机。', khi:'Liệt kê nhiều việc / đối tượng — giọng văn viết.'},
    {ten:'在很大程度上 / 到了……的程度', nhan:'程度', vd:'我在很大程度上依赖手机。', khi:'Nói mức độ ảnh hưởng — hợp đoạn nhận xét.'},
    {ten:'由于……，(所以)……', nhan:'由于', vd:'由于有了移动互联网，我在家就能上网课。', khi:'Nêu nguyên nhân theo lối văn viết (như câu trong bài đọc).'},
    {ten:'不仅……，还……', nhan:'不仅', vd:'手机不仅方便了联系，还改变了我的学习方式。', khi:'Nối hai lợi ích tăng tiến.'},
    {ten:'针对……，……', nhan:'针对', vd:'针对这个问题，我给自己定了一个规定。', khi:'Đưa ra biện pháp nhắm đúng vấn đề — câu kết.'},
    {ten:'把 + A + 应用到 + B 中', nhan:'把', vd:'我把在网上学到的知识应用到生活中。', khi:'Câu 把 (HSK 3–4) kết hợp từ mới 应用.'},
    {ten:'越来越……', nhan:'越来越', vd:'手机的应用越来越广。', khi:'Mở đoạn — nói xu hướng thay đổi.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (3 câu đầu là câu 29–31 của sách bài tập)
  sapXep:[
    {manh:['做过一项调查','我曾经','针对','留学生'],
     dap:'我曾经针对留学生做过一项调查。',
     vn:'Tôi từng làm một cuộc khảo sát nhắm vào du học sinh.',
     giai:'Chủ ngữ 我 → phó từ 曾经 → 针对 + đối tượng → động từ 做过 + 一项调查. 针对…… đứng trước động từ chính như một trạng ngữ.'},
    {manh:['实现愿望的','请给我','机会','一次'],
     dap:'请给我一次实现愿望的机会。',
     vn:'Xin hãy cho tôi một cơ hội để thực hiện ước nguyện.',
     giai:'给 + người + số lượng (一次) + định ngữ (实现愿望的) + danh từ (机会). Số lượng từ đứng TRƯỚC định ngữ có 的.'},
    {manh:['以及桌面','你不要用筷子','敲打碗、','盘子'],
     dap:'你不要用筷子敲打碗、盘子以及桌面。',
     vn:'Bạn đừng dùng đũa gõ vào bát, đĩa và mặt bàn.',
     giai:'Chuỗi liệt kê: 碗、盘子 ngăn bằng dấu 、, 以及 đứng trước thành phần CUỐI (桌面).'},
    {manh:['已经覆盖了','微信','两百多个','国家和地区'],
     dap:'微信已经覆盖了两百多个国家和地区。',
     vn:'WeChat đã phủ hơn hai trăm quốc gia và khu vực.',
     giai:'Chủ ngữ 微信 → 已经 + động từ 覆盖了 → tân ngữ (số lượng + danh từ).'},
    {manh:['达到了','问题','十分严重的程度','已经'],
     dap:'问题已经达到了十分严重的程度。',
     vn:'Vấn đề đã đến mức hết sức nghiêm trọng.',
     giai:'Mẫu của bài: 达到 / 发展到 + ……的程度. 已经 đứng trước động từ.'},
    {manh:['推出了','公司','针对年轻人','一款新应用'],
     dap:'公司针对年轻人推出了一款新应用。',
     vn:'Công ty đã tung ra một ứng dụng mới nhắm vào giới trẻ.',
     giai:'Chủ ngữ 公司 → 针对 + đối tượng → động từ 推出了 → tân ngữ. Lượng từ của 应用 / 产品 là 款.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 讨论话题 của sách: 科技对生活的影响
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề <b>科技对生活的影响</b> (ảnh hưởng của công nghệ đến cuộc sống). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 应用 · 用户 · 以及 · 程度 · 针对 · 实现 · 开发.',
  questions:[
    {q_zh:'你是从什么时候开始使用聊天应用的？你觉得它在你的生活中重要吗？',
     q_vn:'Em bắt đầu dùng ứng dụng nhắn tin từ khi nào? Em thấy nó có quan trọng trong cuộc sống của em không?',
     hint:'Dùng 是……的 để nói thời điểm + 占有……的地位',
     sample:'我是上初中的时候开始用Zalo的。它在我的生活中占有很重要的地位，我跟同学、老师以及家人都用它联系。',
     sample_vn:'Tôi bắt đầu dùng Zalo từ hồi lên cấp hai. Nó giữ vị trí rất quan trọng trong cuộc sống của tôi, tôi liên lạc với bạn bè, thầy cô và gia đình đều bằng nó.',
     note:'Câu hỏi “từ khi nào” → trả lời bằng 是……的 nhấn mạnh thời điểm, đúng ngữ pháp HSK 3–4.'},
    {q_zh:'手机应用给你带来了哪些好处？',
     q_vn:'Các ứng dụng điện thoại đem lại cho em những lợi ích gì?',
     hint:'Liệt kê bằng A、B 以及 C',
     sample:'手机应用让我的生活方便多了：我可以用它查词典、听中文歌以及跟外国朋友聊天。',
     sample_vn:'Ứng dụng điện thoại làm cuộc sống tôi tiện hơn nhiều: tôi có thể dùng nó tra từ điển, nghe nhạc tiếng Trung và nhắn tin với bạn nước ngoài.',
     note:'Liệt kê từ 3 ý trở lên thì 以及 đặt trước ý CUỐI — nghe rất “HSK 5”.'},
    {q_zh:'手机对你的生活有什么不好的影响吗？',
     q_vn:'Điện thoại có ảnh hưởng không tốt nào đến cuộc sống của em không?',
     hint:'Dùng 在一定程度上 / 到了……的程度',
     sample:'有。有时候我玩手机玩到很晚，在一定程度上影响了第二天的学习。',
     sample_vn:'Có. Đôi khi tôi chơi điện thoại đến khuya, ở một mức độ nào đó đã ảnh hưởng đến việc học ngày hôm sau.',
     note:'Nói mặt trái một cách chừng mực — 在一定程度上 giúp câu trả lời khách quan, không cực đoan.'},
    {q_zh:'如果你能开发一个应用，你想针对什么样的用户？为什么？',
     q_vn:'Nếu em có thể phát triển một ứng dụng, em muốn nhắm vào người dùng nào? Vì sao?',
     hint:'Dùng 针对 + 开发 + lý do 因为……',
     sample:'我想针对中学生开发一个学汉语的应用，因为很多同学觉得记生词太难了，用游戏的方式学会更有意思。',
     sample_vn:'Tôi muốn phát triển một ứng dụng học tiếng Trung nhắm vào học sinh trung học, vì nhiều bạn thấy nhớ từ mới quá khó, học bằng trò chơi sẽ thú vị hơn.',
     note:'Câu hỏi giả định “nếu…” — phải nói rõ ĐỐI TƯỢNG và LÝ DO, đừng chỉ nói tên ứng dụng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 12 (câu 1–8).
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án:
// 1–6 CDCCBB, 7–8 AB).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第12课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'北京队踢得真棒！看来今天肯定能赢。'},
            {sp:'女',zh:'是，只要继续保持这种状态，冠军肯定是我们的！'}],
     q:'关于北京队，可以知道什么？',qvn:'Về đội Bắc Kinh, có thể biết được điều gì?',
     opts:['已经输了比赛','换了新教练','表现很好','队员受伤了'],ans:2,
     why:'踢得真棒 + 保持这种状态 = đội đang đá rất hay. Câu 只要……就…… của người phụ nữ là DỰ ĐOÁN, chưa phải kết quả, nên không chọn “đã vô địch” hay “đã thua”.',
     words:[]},

    {n:2,
     lines:[{sp:'女',zh:'小李，我买了台打印机，你能帮我安装一下吗？'},
            {sp:'男',zh:'没问题，其实很简单，连上数据线，按电脑上显示的步骤，装上驱动程序就好了。'}],
     q:'女的请小李帮忙做什么？',qvn:'Người phụ nữ nhờ Tiểu Lý giúp việc gì?',
     opts:['买打印机','修电脑','打印材料','安装打印机'],ans:3,
     why:'Câu đầu đã nói rõ: 你能帮我安装一下吗 — nhờ cài đặt máy in. 买 là việc cô ấy ĐÃ làm (我买了台打印机), không phải việc nhờ.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'你坐这把不是挺好的吗？那把电脑椅滑来滑去，不好写字吧？'},
            {sp:'女',zh:'这把椅子低，那把椅子高。'}],
     q:'男的觉得那把电脑椅怎么样？',qvn:'Người đàn ông thấy chiếc ghế máy tính kia thế nào?',
     opts:['太高了','太贵了','不方便写字','坐着很舒服'],ans:2,
     why:'Người đàn ông nói 滑来滑去，不好写字 — trượt tới trượt lui, khó viết. 太高 là ý của NGƯỜI PHỤ NỮ (那把椅子高), bẫy vì câu hỏi về ý kiến của người đàn ông.',
     words:[]},

    {n:4,
     lines:[{sp:'女',zh:'我手机里也安装了这个应用，怎么没有你说的这个功能？'},
            {sp:'男',zh:'我这是最新的版本，你回去升一下级就行了。'}],
     q:'男的让女的做什么？',qvn:'Người đàn ông bảo người phụ nữ làm gì?',
     opts:['换一部新手机','删除这个应用','给应用升级','重新注册'],ans:2,
     why:'升一下级 = nâng cấp (升级 là động từ li hợp, 一下 chen vào giữa). Ứng dụng của anh là bản mới nhất nên có chức năng đó.',
     words:['应用']},

    {n:5,
     lines:[{sp:'男',zh:'你的邮件我收到了，可是没有看到你的广告计划书呀？'},
            {sp:'女',zh:'没有？怎么可能？我立刻看一下，是我忘了粘贴附件吗？'}],
     q:'接下来，女的马上会怎么做？',qvn:'Tiếp theo, người phụ nữ sẽ lập tức làm gì?',
     opts:['重新写计划书','检查邮件的附件','给男的打电话','去男的办公室'],ans:1,
     why:'我立刻看一下，是我忘了粘贴附件吗 — cô sẽ kiểm tra ngay xem có quên đính kèm tệp không. 立刻 = 马上, đúng với câu hỏi.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'你为什么让我把笔记本电脑的电池拆下来？'},
            {sp:'男',zh:'在家时插上充电器使用，这样可以延长电池的使用寿命。'}],
     q:'男的为什么建议拆下电池？',qvn:'Vì sao người đàn ông khuyên tháo pin ra?',
     opts:['电池已经坏了','能让电池用得更久','电脑太重了','充电太慢了'],ans:1,
     why:'延长电池的使用寿命 = kéo dài tuổi thọ của pin, tức là pin dùng được lâu hơn. 充电器 (sạc) là từ trong phần 扩展 của bài.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'爸，您这台电脑太旧了，显示器占这么大地方，我给您换换吧？'},
            {sp:'男',zh:'我这不是才用了四五年吗？挺好用的。'},
            {sp:'女',zh:'现在都是液晶显示器了，很省空间。'},
            {sp:'男',zh:'我习惯了，没觉得不方便。'}],
     q:'女的觉得爸爸的电脑怎么了？',qvn:'Người con gái thấy máy tính của bố làm sao?',
     opts:['太旧了','太慢了','经常出问题','声音太小'],ans:0,
     why:'Câu đầu tiên: 您这台电脑太旧了. Phần sau chỉ là lời giải thích (màn hình chiếm chỗ). “Chậm” hay “hỏng” không được nhắc đến.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'你有微信吗？我们可以用它联系，很方便。'},
            {sp:'女',zh:'有。不过，我不太会添加联系人。'},
            {sp:'男',zh:'告诉我你的微信号，我搜索一下。'},
            {sp:'女',zh:'我听说有一个“扫一扫”的功能，你知道怎么用吗？'}],
     q:'男的正在用手机做什么？',qvn:'Người đàn ông đang dùng điện thoại làm gì?',
     opts:['给女的打电话','添加联系人','下载微信','发短信'],ans:1,
     why:'Anh hỏi ID WeChat để 搜索一下 — tìm rồi thêm cô vào danh bạ (添加联系人). Cả hai đều đã có WeChat nên không phải 下载微信.',
     words:['微信']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng bàn hỏi em về điện thoại.',
     a:{sp:'Bạn',zh:'你手机里最常用的应用是什么？',vn:'Ứng dụng cậu dùng nhiều nhất trong điện thoại là gì?'},
     need:['Dùng 应用','Liệt kê người em liên lạc bằng 以及'],
     sample:'我最常用的应用是Zalo，因为我跟同学、老师以及家人都用它联系。',
     samplePy:'Wǒ zuì cháng yòng de yìngyòng shì Zalo, yīnwèi wǒ gēn tóngxué, lǎoshī yǐjí jiārén dōu yòng tā liánxì.',
     sampleVn:'Ứng dụng tôi dùng nhiều nhất là Zalo, vì tôi liên lạc với bạn bè, thầy cô và gia đình đều bằng nó.',
     tip:'以及 chỉ đặt MỘT lần, trước người cuối cùng trong chuỗi; các phần trước ngăn bằng dấu 、.'},

    {scene:'Bạn em tải một ứng dụng học tiếng Trung nhưng không dùng được.',
     a:{sp:'Bạn',zh:'这个学汉语的应用怎么用啊？我下载了还是打不开。',vn:'Ứng dụng học tiếng Trung này dùng thế nào vậy? Tớ tải về rồi mà vẫn không mở được.'},
     need:['Dùng 注册','Hướng dẫn theo thứ tự 先……然后……'],
     sample:'你得先用手机号注册一个账号，然后登录，就能用了。',
     samplePy:'Nǐ děi xiān yòng shǒujīhào zhùcè yí ge zhànghào, ránhòu dēnglù, jiù néng yòng le.',
     sampleVn:'Cậu phải đăng ký một tài khoản bằng số điện thoại trước, sau đó đăng nhập là dùng được.',
     tip:'注册 là đăng ký TÀI KHOẢN; đăng ký dự thi, dự lớp thì dùng 报名 — đừng nhầm.'},

    {scene:'Mẹ lo em dùng điện thoại quá nhiều.',
     a:{sp:'Mẹ',zh:'你每天玩那么久手机，已经影响学习了吧？',vn:'Ngày nào con cũng chơi điện thoại lâu thế, chắc ảnh hưởng đến việc học rồi phải không?'},
     need:['Dùng 程度','Giải thích nhẹ nhàng, có con số cụ thể'],
     sample:'妈妈，我知道玩太多不好，不过还没到影响学习的程度，我每天只玩一个小时。',
     samplePy:'Māma, wǒ zhīdào wán tài duō bù hǎo, búguò hái méi dào yǐngxiǎng xuéxí de chéngdù, wǒ měi tiān zhǐ wán yí ge xiǎoshí.',
     sampleVn:'Mẹ ơi, con biết chơi nhiều không tốt, nhưng chưa đến mức ảnh hưởng đến việc học đâu, mỗi ngày con chỉ chơi một tiếng.',
     tip:'还没到……的程度 = chưa đến mức …. Nói với người lớn nên mở đầu bằng việc thừa nhận ý của mẹ.'},

    {scene:'Trường sắp tổ chức ngày hội tiếng Trung, bạn hỏi kế hoạch quảng bá.',
     a:{sp:'Bạn',zh:'听说你们要办中文节，打算怎么宣传？',vn:'Nghe nói các cậu sắp tổ chức ngày hội tiếng Trung, định quảng bá thế nào?'},
     need:['Dùng 针对','Dùng 宣传 hoặc 推广'],
     sample:'我们打算针对高一新生拍一个宣传片，再在学校的网站上推广。',
     samplePy:'Wǒmen dǎsuàn zhēnduì gāoyī xīnshēng pāi yí ge xuānchuánpiàn, zài zài xuéxiào de wǎngzhàn shang tuīguǎng.',
     sampleVn:'Chúng tớ định làm một đoạn phim giới thiệu nhắm vào học sinh lớp 10 mới vào, rồi quảng bá trên trang web của trường.',
     tip:'针对 + đối tượng đứng TRƯỚC động từ chính (拍). Đây chính là cách WeChat làm trong bài đọc.'},

    {scene:'Thầy chủ nhiệm hỏi về ước mơ của em.',
     a:{sp:'Thầy',zh:'你长大以后想做什么？',vn:'Lớn lên em muốn làm gì?'},
     need:['Dùng 实现','Nói em đang làm gì để đạt được'],
     sample:'我想当一名软件工程师。为了实现这个梦想，我现在要好好学习数学以及英语。',
     samplePy:'Wǒ xiǎng dāng yì míng ruǎnjiàn gōngchéngshī. Wèile shíxiàn zhège mèngxiǎng, wǒ xiànzài yào hǎohǎo xuéxí shùxué yǐjí Yīngyǔ.',
     sampleVn:'Em muốn làm kỹ sư phần mềm. Để thực hiện ước mơ này, bây giờ em phải học thật tốt môn Toán và tiếng Anh.',
     tip:'实现 (động từ) + 梦想; đừng viết nhầm thành 现实梦想.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bản kế hoạch học tập nộp cho nhà trường.',
     a:'本学期我将重点复习语文、数学以及英语。',b:'这学期我要好好复习语文、数学跟英语。',better:'a',
     why:'Văn bản nộp nhà trường là VĂN VIẾT: 本学期, 将, 以及 trang trọng hơn. Câu b đúng nhưng mang giọng nói chuyện.'},

    {scene:'Em nhắn tin cho bạn thân rủ đi mua sắm.',
     a:'周末我要去买衣服、鞋以及书包。',b:'周末我要去买衣服、鞋，还有书包。',better:'b',
     why:'以及 thiên về văn viết, dùng khi nhắn tin bạn thân nghe cứng. Khẩu ngữ thường nói ……，还有…….'},

    {scene:'Em thuyết trình trước lớp về một ứng dụng.',
     a:'我觉得微信挺好用的。',b:'我个人认为，微信是一款非常实用的应用。',better:'b',
     why:'Thuyết trình cần giọng khách quan, trang trọng: 我个人认为 + 一款……的应用. Câu a hợp khi tán gẫu hơn.'},

    {scene:'Em rủ bạn cùng chơi một trò chơi trên điện thoại.',
     a:'你赶快注册一个账号，咱们一起玩儿！',b:'请您先注册账号，然后再使用。',better:'a',
     why:'Câu b là giọng THÔNG BÁO của công ty (请您……然后再……). Nói với bạn bè thì dùng câu a tự nhiên, thân mật.'},

    {scene:'Thông báo trên trang web của một cửa hàng.',
     a:'你先注册一下，然后再买吧。',b:'请您先注册会员，然后再购买。',better:'b',
     why:'Ngược lại với câu trên: thông báo chính thức phải dùng 请您 và 购买 thay cho 买.'},

    {scene:'Em phát biểu trong buổi họp của câu lạc bộ về tình trạng thành viên hay đến muộn.',
     a:'这个问题已经严重到了影响活动的程度。',b:'这个问题太严重了，都影响活动了。',better:'a',
     why:'Phát biểu trong cuộc họp: ……到了……的程度 chặt chẽ, trang trọng. Câu b đúng nhưng mang cảm xúc, hợp khi than phiền với bạn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Bài tập 4 của sách: 根据下面的提示词复述课文内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong sách: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1 phút.',
  outline: [
    {step:'Quảng cáo', cue:'梅西用微信…… 把一个小宝贝……', words:['明星','颠球','直播','逗','宣传']},
    {step:'Chỗ dựa của Tencent', cue:'如此大手笔的推广…… 在北京召开的大会上……', words:['手笔','推广','注册','用户','召开','总裁']},
    {step:'Quá trình phát triển', cue:'2011年1月上线…… 如今已经覆盖了……', words:['实现','覆盖','移动','通信','应用']},
    {step:'Bối cảnh', cue:'在美国互联网企业称霸全球的背景下……', words:['企业','称霸','背景']},
    {step:'Nghiên cứu phát triển', cue:'张小龙介绍…… 研发中心…… 在个人计算机时代……', words:['开发','中心','相关','业务','以及','程度','发达','创新','地位']},
    {step:'Kinh doanh', cue:'在经营销售上，微信针对……', words:['经营','销售','针对','当地','代言','华裔','移民']}
  ],
  checklist: [
    'Kể đủ sáu ý trên chưa, hay bỏ mất phần nghiên cứu phát triển?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng 以及 và 程度 đúng như trong bài không?',
    'Các mốc thời gian (2011, 2012, 2013…) có nói đúng thứ tự không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 114) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['逗','合作','推广','业务','召开','注册'],
   cau:[
     {s:'为了＿＿这项新产品，公司做了很多宣传。', dap:['推广']},
     {s:'原本定在周三上午＿＿的会议改时间了。', dap:['召开']},
     {s:'你做这么多事，难道只是为了＿＿女朋友开心？', dap:['逗']},
     {s:'要想在这个网站购物，你必须先＿＿一个它的邮箱。', dap:['注册']},
     {s:'那个新来的销售员这个月做成了三笔大＿＿，真厉害！', dap:['业务']},
     {s:'我们跟这家公司＿＿过两次，很愉快。', dap:['合作']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'像这样能够给全社会信心与快乐的事情，我们应该重点＿＿。', opts:['宣传','推广'], ans:0, giai:'Việc tốt cần làm cho nhiều người BIẾT đến → 宣传. 推广 dùng cho kỹ thuật, sản phẩm, kinh nghiệm cần mở rộng phạm vi áp dụng.'},
     {s:'要吃中国菜，你首先要学会＿＿筷子。', opts:['应用','使用'], ans:1, giai:'Đũa là đồ vật cụ thể → 使用. 应用 dùng cho kiến thức, kỹ thuật.'},
     {s:'过了这么多年，我的愿望终于＿＿了！', opts:['现实','实现'], ans:1, giai:'Cần động từ “thành hiện thực” → 实现. 现实 là danh từ (hiện thực).'},
     {s:'这是我的＿＿爱好，跟我学什么专业没有关系。', opts:['个人','自己'], ans:0, giai:'个人 làm định ngữ trực tiếp: 个人爱好 (sở thích cá nhân). 自己 là đại từ, không nói 我的自己爱好.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'这个问题A是在什么样的背景B提C出D来的？', tu:'下', ans:'B', giai:'Cấu trúc cố định 在……的背景下: 在什么样的背景下提出来的.'},
     {s:'公司A新B开发C的产品很受D消费者欢迎。', tu:'出', ans:'C', giai:'开发 + 出 (bổ ngữ kết quả, bảng 词语搭配): 新开发出的产品.'},
     {s:'本店销售A电视、B冰箱、C洗衣机D其他电器。', tu:'以及', ans:'D', giai:'以及 đứng trước thành phần CUỐI của chuỗi liệt kê, thường là phần phụ / khái quát: ……洗衣机以及其他电器.'},
     {s:'A这个问题，B我们C开会讨论了D好几次。', tu:'针对', ans:'A', giai:'针对 + đối tượng đứng đầu câu: 针对这个问题，我们开会讨论了好几次.'}
   ]}
];
