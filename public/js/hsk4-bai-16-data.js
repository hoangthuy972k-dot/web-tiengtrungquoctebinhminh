// ══════════════════════════════════════════
// DATA — HSK4 Bài 16: 生活可以更美好 (Cuộc sống có thể tốt đẹp hơn)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'博士',py:'bóshì',pos:'Danh từ',vn:'tiến sĩ',em:'🎓',lesson:1,
   explain:['Học vị cao nhất. 读博士 = học tiến sĩ; 硕士 (Bài 9) = thạc sĩ.'],
   usage:'读博士, 博士毕业, 博士生.',
   collo:['出国读博士','博士毕业','读博士的机会'],
   ex_zh:'我想出国读博士，一直在准备办签证需要的材料。',ex_py:'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.',ex_vn:'Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị tài liệu cần để làm visa.',
   exList:[
     {zh:'我想出国读博士，一直在准备办签证需要的材料。',py:'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.',vn:'Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị tài liệu cần để làm visa.'},
     {zh:'你刚刚得到读博士的机会，同时也通过了工作面试，公司通知你去上班。',py:'Nǐ gānggāng dédào dú bóshì de jīhuì, tóngshí yě tōngguòle gōngzuò miànshì, gōngsī tōngzhī nǐ qù shàng bān.',vn:'Bạn vừa có cơ hội học tiến sĩ, đồng thời cũng đỗ phỏng vấn, công ty thông báo đi làm.'},
     {zh:'马上就要硕士毕业了，我打算出国读博士。',py:'Mǎshàng jiù yào shuòshì bì yè le, wǒ dǎsuàn chū guó dú bóshì.',vn:'Sắp tốt nghiệp thạc sĩ rồi, tôi định ra nước ngoài học tiến sĩ.'},
   ],
   hanzi:[
     {c:'博',p:'bó',type:'左右结构 · Trái-phải',st:12,ord:'十 trái → 尃 phải',rad:'十 (thập)',mean:'rộng',
      tip:'十 (nhiều) + 尃 → kiến thức RỘNG → BÁC (uyên bác). 博士 = bác sĩ (học vị tiến sĩ), 博物馆 = bảo tàng.',
      cf:'搏 (bó – vật lộn)',w:'博士 / 博物馆'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn vừa có cơ hội học tiến sĩ, đồng thời cũng đỗ phỏng vấn công việc.',answer:'你刚刚得到读博士的机会，同时也通过了工作面试。',answerPy:'Nǐ gānggāng dédào dú bóshì de jīhuì, tóngshí yě tōngguòle gōngzuò miànshì.',
      note:'同时 (Bài 11), 通过 (Bài 9), 面试 (Bài 10).'},
   ]},

  {n:2,zh:'签证',py:'qiānzhèng',pos:'Danh từ',vn:'thị thực, visa',em:'🛂',lesson:1,
   explain:['Giấy phép nhập cảnh. 办签证 = làm visa; 签证材料.'],
   usage:'办签证, 签证材料, 申请签证.',
   collo:['办签证','签证需要的材料','去使馆办签证'],
   ex_zh:'下个星期我就要去使馆办签证了，这可怎么办？',ex_py:'Xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?',ex_vn:'Tuần sau tôi phải đến sứ quán làm visa rồi, thế này biết làm sao?',
   exList:[
     {zh:'下个星期我就要去使馆办签证了，这可怎么办？',py:'Xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?',vn:'Tuần sau tôi phải đến sứ quán làm visa rồi, thế này biết làm sao?'},
     {zh:'我想出国读博士，一直在准备办签证需要的材料。',py:'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.',vn:'Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị tài liệu cần để làm visa.'},
     {zh:'办签证大概需要两个星期左右，你得提前申请。',py:'Bàn qiānzhèng dàgài xūyào liǎng ge xīngqī zuǒyòu, nǐ děi tíqián shēnqǐng.',vn:'Làm visa đại khái cần khoảng hai tuần, bạn phải xin trước.'},
   ],
   hanzi:[
     {c:'签',p:'qiān',type:'上下结构 · Trên-dưới',st:13,ord:'⺮ trên → 佥 dưới',rad:'⺮ (trúc)',mean:'ký',
      tip:'Trúc ⺮ + 佥 → thẻ tre để ghi → KÝ (tên). 签证 = giấy chứng nhận có ký = visa; 签名 = ký tên.',
      cf:'检 (jiǎn – kiểm)',w:'签证 / 签名 / 签字'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm visa đại khái cần khoảng hai tuần, bạn phải xin trước.',answer:'办签证大概需要两个星期左右，你得提前申请。',answerPy:'Bàn qiānzhèng dàgài xūyào liǎng ge xīngqī zuǒyòu, nǐ děi tíqián shēnqǐng.',
      note:'大概 (Bài 13), 左右 (Bài 15), 申请 (Bài 13).'},
   ]},

  {n:3,zh:'报名',py:'bào míng',pos:'Động từ',vn:'ghi danh, đăng ký',em:'📝',lesson:1,
   explain:['Đăng ký tham gia. Động từ ly hợp: 报了名, 报名参加. 报名表格 = phiếu đăng ký.'],
   usage:'报名参加, 填写报名表格, 报名的最后一天.',
   collo:['报名表格','报名参加比赛','报名的最后一天'],
   ex_zh:'还跟国外的大学取得了联系，填写了报名表格。',ex_py:'Hái gēn guówài de dàxué qǔdéle liánxì, tiánxiěle bào míng biǎogé.',ex_vn:'Còn liên hệ được với trường đại học nước ngoài, đã điền phiếu đăng ký.',
   exList:[
     {zh:'成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。',py:'Chéngjì zhèngmíng hé hùzhào yǐjīng zhǔnbèi hǎo le, lìngwài, hái gēn guówài de dàxué qǔdéle liánxì, tiánxiěle bào míng biǎogé.',vn:'Bảng điểm và hộ chiếu đã chuẩn bị xong, ngoài ra còn liên hệ được với đại học nước ngoài, đã điền phiếu đăng ký.'},
     {zh:'A：我想报名参加一万米长跑比赛，你参加不参加？B：恐怕不行，我下星期要考试了。',py:'A: Wǒ xiǎng bào míng cānjiā yí wàn mǐ chángpǎo bǐsài, nǐ cānjiā bu cānjiā? B: Kǒngpà bù xíng, wǒ xià xīngqī yào kǎoshì le.',vn:'A: Tôi muốn đăng ký thi chạy 10.000 mét, bạn có tham gia không? B: E là không được, tuần sau tôi thi rồi.'},
     {zh:'明天就是报名的最后一天了，你到底参加不参加？',py:'Míngtiān jiù shì bào míng de zuìhòu yì tiān le, nǐ dàodǐ cānjiā bu cānjiā?',vn:'Mai là ngày cuối đăng ký rồi, rốt cuộc bạn có tham gia không?'},
   ],
   hanzi:[
     {c:'报',p:'bào',type:'左右结构 · Trái-phải',st:7,ord:'扌 trái → 𠬝 phải',rad:'扌 (thủ)',mean:'báo',
      tip:'Tay 扌 + 𠬝 → BÁO cáo, thông báo. 报名 = báo tên = đăng ký; 报纸 = báo; 报道 = đưa tin.',
      cf:'服 (fú – phục)',w:'报名 / 报纸 / 报道 / 预报'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mai là ngày cuối đăng ký rồi, rốt cuộc bạn có tham gia không?',answer:'明天就是报名的最后一天了，你到底参加不参加？',answerPy:'Míngtiān jiù shì bào míng de zuìhòu yì tiān le, nǐ dàodǐ cānjiā bu cānjiā?',
      note:'到底 (ngữ pháp bài) + câu hỏi chính phản.'},
   ]},

  {n:4,zh:'表格',py:'biǎogé',pos:'Danh từ',vn:'bản kê khai, mẫu đơn',em:'📄',lesson:1,
   explain:['Mẫu đơn, biểu mẫu cần điền. 填写表格 = điền mẫu đơn; 报名表格.'],
   usage:'填写表格, 报名表格, 一张表格.',
   collo:['填写报名表格','把表格填好','一张表格'],
   ex_zh:'填写了报名表格。',ex_py:'Tiánxiěle bào míng biǎogé.',ex_vn:'Đã điền phiếu đăng ký.',
   exList:[
     {zh:'还跟国外的大学取得了联系，填写了报名表格。',py:'Hái gēn guówài de dàxué qǔdéle liánxì, tiánxiěle bào míng biǎogé.',vn:'Còn liên hệ được với đại học nước ngoài, đã điền phiếu đăng ký.'},
     {zh:'办法可简单了，把报名表格填好给我就可以了。',py:'Bànfǎ kě jiǎndān le, bǎ bào míng biǎogé tiánhǎo gěi wǒ jiù kěyǐ le.',vn:'Cách đơn giản lắm, điền xong phiếu đăng ký đưa tôi là được.'},
     {zh:'这张表格要用黑色的笔填写，千万别写错了。',py:'Zhè zhāng biǎogé yào yòng hēisè de bǐ tiánxiě, qiānwàn bié xiěcuò le.',vn:'Mẫu đơn này phải điền bằng bút đen, tuyệt đối đừng viết sai.'},
   ],
   hanzi:[
     {c:'格',p:'gé',type:'左右结构 · Trái-phải',st:10,ord:'木 trái → 各 phải',rad:'木 (mộc)',mean:'ô, khung',
      tip:'Gỗ 木 + 各 → khung gỗ chia Ô → CÁCH, ô kẻ. 表格 = bảng có ô = mẫu đơn; 性格 = tính cách (Bài 8); 严格 (Bài 12).',
      cf:'各 (gè – mỗi)',w:'表格 / 性格 / 严格 / 价格'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẫu đơn này phải điền bằng bút đen, tuyệt đối đừng viết sai.',answer:'这张表格要用黑色的笔填写，千万别写错了。',answerPy:'Zhè zhāng biǎogé yào yòng hēisè de bǐ tiánxiě, qiānwàn bié xiěcuò le.',
      note:'千万别 ôn lại Bài 15, 填写.'},
   ]},

  {n:5,zh:'传真',py:'chuánzhēn',pos:'Động từ',vn:'gửi fax',em:'📠',lesson:1,
   explain:['Gửi tài liệu qua máy fax. Cũng làm danh từ: 一份传真, 发传真.'],
   usage:'把……传真给……, 发传真, 收到传真.',
   collo:['把邀请信传真给你','发传真','收到传真'],
   ex_zh:'还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？',ex_py:'Hái yīnggāi yǒu guówài dàxué gěi nǐ de yāoqǐngxìn ba? Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?',ex_vn:'Còn phải có thư mời của trường đại học nước ngoài chứ? Họ đã fax thư mời cho bạn chưa?',
   exList:[
     {zh:'还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？',py:'Hái yīnggāi yǒu guówài dàxué gěi nǐ de yāoqǐngxìn ba? Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?',vn:'Còn phải có thư mời của trường đại học nước ngoài chứ? Họ đã fax thư mời cho bạn chưa?'},
     {zh:'请把合同传真给我们公司，传真号码是……',py:'Qǐng bǎ hétong chuánzhēn gěi wǒmen gōngsī, chuánzhēn hàomǎ shì……',vn:'Xin fax hợp đồng cho công ty chúng tôi, số fax là…'},
     {zh:'现在很少有人用传真了，大家都发电子邮件。',py:'Xiànzài hěn shǎo yǒu rén yòng chuánzhēn le, dàjiā dōu fā diànzǐ yóujiàn.',vn:'Bây giờ rất ít người dùng fax, mọi người đều gửi email.'},
   ],
   hanzi:[
     {c:'传',p:'chuán',type:'左右结构 · Trái-phải',st:6,ord:'亻 trái → 专 phải',rad:'亻 (nhân)',mean:'truyền',
      tip:'Người 亻 + 专 → người TRUYỀN đi. 传真 = truyền bản thật = fax; 传统 = truyền thống (Bài 9). Đọc zhuàn = truyện.',
      cf:'转 (zhuǎn – chuyển, bộ 车)',w:'传真 / 传统 / 传染'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họ đã fax thư mời cho bạn chưa?',answer:'他们把邀请信传真给你了吗？',answerPy:'Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?',
      note:'把……传真给 (câu chữ 把, Bài 2), 邀请 (Bài 6).'},
   ]},

  {n:6,zh:'号码',py:'hàomǎ',pos:'Danh từ',vn:'số',em:'🔢',lesson:1,
   explain:['Số (điện thoại, phòng, xe…). 电话号码, 手机号码, 房间号码.'],
   usage:'电话号码, 查号码, 记号码.',
   collo:['学校的电话号码','手机号码','写下号码'],
   ex_zh:'我帮你查一下学校的电话号码，你打电话问一下吧。',ex_py:'Wǒ bāng nǐ chá yíxià xuéxiào de diànhuà hàomǎ, nǐ dǎ diànhuà wèn yíxià ba.',ex_vn:'Tôi giúp bạn tra số điện thoại của trường, bạn gọi điện hỏi thử đi.',
   exList:[
     {zh:'这可是个大问题，我也不太清楚。我帮你查一下学校的电话号码，你打电话问一下吧。',py:'Zhè kě shì ge dà wèntí, wǒ yě bú tài qīngchu. Wǒ bāng nǐ chá yíxià xuéxiào de diànhuà hàomǎ, nǐ dǎ diànhuà wèn yíxià ba.',vn:'Đây đúng là vấn đề lớn, tôi cũng không rõ lắm. Tôi giúp bạn tra số điện thoại của trường, bạn gọi hỏi thử đi.'},
     {zh:'A：我记得上次关教授把他的手机号码给我了，可是不知道写哪儿了。B：你当时好像写在本子上了。',py:'A: Wǒ jìde shàng cì Guān jiàoshòu bǎ tā de shǒujī hàomǎ gěi wǒ le, kěshì bù zhīdào xiě nǎr le. B: Nǐ dāngshí hǎoxiàng xiě zài běnzi shang le.',vn:'A: Tôi nhớ lần trước giáo sư Quan đưa số điện thoại rồi, nhưng không biết ghi ở đâu. B: Lúc đó hình như bạn ghi vào sổ.'},
     {zh:'请留下您的联系电话和房间号码。',py:'Qǐng liúxià nín de liánxì diànhuà hé fángjiān hàomǎ.',vn:'Xin để lại số điện thoại liên lạc và số phòng của ngài.'},
   ],
   hanzi:[
     {c:'码',p:'mǎ',type:'左右结构 · Trái-phải',st:8,ord:'石 trái → 马 phải',rad:'石 (thạch)',mean:'mã, số',
      tip:'Đá 石 + 马(biểu âm) → viên đá dùng để đếm → MÃ SỐ. 号码 = số hiệu; 密码 = mật mã.',
      cf:'妈 (mā – mẹ)',w:'号码 / 密码 / 数码'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi nhớ lần trước giáo sư Quan đưa số điện thoại rồi, nhưng không biết ghi ở đâu.',answer:'我记得上次关教授把他的手机号码给我了，可是不知道写哪儿了。',answerPy:'Wǒ jìde shàng cì Guān jiàoshòu bǎ tā de shǒujī hàomǎ gěi wǒ le, kěshì bù zhīdào xiě nǎr le.',
      note:'教授 (Bài 12), câu chữ 把.'},
   ]},

  {n:7,zh:'参观',py:'cānguān',pos:'Động từ',vn:'tham quan, đi thăm',em:'🏛️',lesson:2,
   explain:['Đi xem (công ty, bảo tàng, trường học…). Phân biệt 旅游 (du lịch), 访问 (thăm hỏi).'],
   usage:'参观公司, 参观博物馆, 带……参观.',
   collo:['带我参观您的公司','参观博物馆','参观过程中'],
   ex_zh:'谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。',ex_py:'Xièxie nín dài wǒ cānguān nín de gōngsī. Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.',ex_vn:'Cảm ơn ngài đã dẫn tôi tham quan công ty. Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.',
   exList:[
     {zh:'谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。',py:'Xièxie nín dài wǒ cānguān nín de gōngsī. Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.',vn:'Cảm ơn ngài đã dẫn tôi tham quan công ty. Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.'},
     {zh:'各位朋友大家好！欢迎来到美丽的海南，这几天就由我带着大家参观。',py:'Gèwèi péngyou dàjiā hǎo! Huānyíng láidào měilì de Hǎinán, zhè jǐ tiān jiù yóu wǒ dàizhe dàjiā cānguān.',vn:'Chào các bạn! Hoan nghênh đến Hải Nam xinh đẹp, mấy ngày này sẽ do tôi dẫn mọi người tham quan.'},
     {zh:'学校组织我们去参观了一家很有名的博物馆。',py:'Xuéxiào zǔzhī wǒmen qù cānguānle yì jiā hěn yǒumíng de bówùguǎn.',vn:'Trường tổ chức cho chúng tôi đi tham quan một bảo tàng rất nổi tiếng.'},
   ],
   hanzi:[
     {c:'观',p:'guān',type:'左右结构 · Trái-phải',st:6,ord:'又 trái → 见 phải',rad:'见 (kiến)',mean:'xem',
      tip:'又 + 见(nhìn) → NHÌN, QUAN SÁT. 参观 = tham quan; 观众 = khán giả (Bài 13).',
      cf:'现 (xiàn – hiện)',w:'参观 / 观众 / 观点'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoan nghênh đến Hải Nam xinh đẹp, mấy ngày này sẽ do tôi dẫn mọi người tham quan.',answer:'欢迎来到美丽的海南，这几天就由我带着大家参观。',answerPy:'Huānyíng láidào měilì de Hǎinán, zhè jǐ tiān jiù yóu wǒ dàizhe dàjiā cānguān.',
      note:'由 (Bài 13), 美丽 (Bài 14), 着 (Bài 2).'},
   ]},

  {n:8,zh:'激动',py:'jīdòng',pos:'Tính từ',vn:'cảm động, xúc động',em:'🤩',lesson:2,
   explain:['Tâm trạng bị kích động mạnh (vui, hồi hộp). 很激动, 激动得……, 激动的心情.'],
   usage:'很激动, 激动得哭了, 激动的样子.',
   collo:['我很激动','大家都很激动','激动得哭了'],
   ex_zh:'在参观过程中我很激动，有个问题一直想问您。',ex_py:'Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.',ex_vn:'Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.',
   exList:[
     {zh:'在参观过程中我很激动，有个问题一直想问您。',py:'Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.',vn:'Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.'},
     {zh:'那是1994年的冬天，那场雪下得特别大。大家都很激动，于是都跑到外面去玩儿雪了。',py:'Nà shì yī jiǔ jiǔ sì nián de dōngtiān, nà cháng xuě xià de tèbié dà. Dàjiā dōu hěn jīdòng, yúshì dōu pǎodào wàimiàn qù wánr xuě le.',vn:'Đó là mùa đông năm 1994, trận tuyết ấy rơi rất lớn. Mọi người đều rất phấn khích, thế là chạy ra ngoài chơi tuyết.'},
     {zh:'听到自己通过了面试，她激动得哭了起来。',py:'Tīngdào zìjǐ tōngguòle miànshì, tā jīdòng de kūle qǐlai.',vn:'Nghe tin mình đỗ phỏng vấn, cô ấy xúc động bật khóc.'},
   ],
   hanzi:[
     {c:'激',p:'jī',type:'左右结构 · Trái-phải',st:16,ord:'氵 trái → 敫 phải',rad:'氵 (thủy)',mean:'kích',
      tip:'Nước 氵 + 敫 → nước bắn tung lên → KÍCH động. 激动 = xúc động; 刺激 = kích thích.',
      cf:'敫 (jiǎo)',w:'激动 / 刺激 / 激烈'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe tin mình đỗ phỏng vấn, cô ấy xúc động bật khóc.',answer:'听到自己通过了面试，她激动得哭了起来。',answerPy:'Tīngdào zìjǐ tōngguòle miànshì, tā jīdòng de kūle qǐlai.',
      note:'起来 (Bài 15), 面试 (Bài 10), bổ ngữ trạng thái 得.'},
   ]},

  {n:9,zh:'小伙子',py:'xiǎohuǒzi',pos:'Danh từ',vn:'chàng trai',em:'👨',lesson:2,
   explain:['Cách gọi thân mật người thanh niên nam. Nữ: 姑娘 (Bài 3).'],
   usage:'小伙子, 这个小伙子, 好小伙子.',
   collo:['好啊！小伙子','一个年轻的小伙子','这个小伙子很能干'],
   ex_zh:'好啊！小伙子，咱们一边吃西瓜，一边聊。',ex_py:'Hǎo a! Xiǎohuǒzi, zánmen yìbiān chī xīguā, yìbiān liáo.',ex_vn:'Được! Chàng trai, chúng ta vừa ăn dưa hấu vừa nói chuyện.',
   exList:[
     {zh:'好啊！小伙子，咱们一边吃西瓜，一边聊。',py:'Hǎo a! Xiǎohuǒzi, zánmen yìbiān chī xīguā, yìbiān liáo.',vn:'Được! Chàng trai, chúng ta vừa ăn dưa hấu vừa nói chuyện.'},
     {zh:'这个小伙子既有礼貌又诚实，大家都很喜欢他。',py:'Zhège xiǎohuǒzi jì yǒu lǐmào yòu chéngshí, dàjiā dōu hěn xǐhuan tā.',vn:'Chàng trai này vừa lễ phép vừa thành thật, mọi người đều quý.'},
     {zh:'那个帮我抬箱子的小伙子真热情。',py:'Nàge bāng wǒ tái xiāngzi de xiǎohuǒzi zhēn rèqíng.',vn:'Chàng trai giúp tôi khiêng vali thật nhiệt tình.'},
   ],
   hanzi:[
     {c:'伙',p:'huǒ',type:'左右结构 · Trái-phải',st:6,ord:'亻 trái → 火 phải',rad:'亻 (nhân)',mean:'bạn, nhóm',
      tip:'Người 亻 + lửa 火 → những người cùng nấu ăn bên bếp lửa → BẠN, NHÓM. 小伙子 = chàng trai; 伙伴 = bạn đồng hành.',
      cf:'火 (huǒ – lửa)',w:'小伙子 / 伙伴 / 大伙儿'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chàng trai này vừa lễ phép vừa thành thật, mọi người đều quý.',answer:'这个小伙子既有礼貌又诚实，大家都很喜欢他。',answerPy:'Zhège xiǎohuǒzi jì yǒu lǐmào yòu chéngshí, dàjiā dōu hěn xǐhuan tā.',
      note:'既……又 (Bài 7), 诚实 (Bài 10).'},
   ]},

  {n:10,zh:'记者',py:'jìzhě',pos:'Danh từ',vn:'phóng viên, nhà báo',em:'📰',lesson:2,
   explain:['Người đưa tin, viết báo. 当记者 = làm phóng viên; 一位记者.'],
   usage:'一个记者, 当记者, 记者问过我.',
   collo:['一个记者问过我','当记者','著名的记者'],
   ex_zh:'这个问题以前一个记者也问过我。',ex_py:'Zhège wèntí yǐqián yí ge jìzhě yě wènguo wǒ.',ex_vn:'Câu hỏi này trước đây một phóng viên cũng từng hỏi tôi.',
   exList:[
     {zh:'这个问题以前一个记者也问过我。做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。',py:'Zhège wèntí yǐqián yí ge jìzhě yě wènguo wǒ. Zuò shēngyi shí suīrán huì yùdào gè zhǒng yālì hé kùnnan, dànshì dàjiā de jīhuì dōu shì xiāngtóng de.',vn:'Câu hỏi này trước đây một phóng viên cũng từng hỏi tôi. Làm ăn tuy gặp đủ loại áp lực và khó khăn, nhưng cơ hội của mọi người đều như nhau.'},
     {zh:'记者总是需要到处调查，用事实来说话。',py:'Jìzhě zǒngshì xūyào dàochù diàochá, yòng shìshí lái shuō huà.',vn:'Phóng viên luôn cần điều tra khắp nơi, dùng sự thật để nói.'},
     {zh:'他是一位著名的记者，五年里去了亚洲许多国家。',py:'Tā shì yí wèi zhùmíng de jìzhě, wǔ nián li qùle Yàzhōu xǔduō guójiā.',vn:'Anh ấy là phóng viên nổi tiếng, trong 5 năm đi nhiều nước châu Á.'},
   ],
   hanzi:[
     {c:'者',p:'zhě',type:'上下结构 · Trên-dưới',st:8,ord:'耂 trên → 日 dưới',rad:'耂 (lão)',mean:'người (làm gì)',
      tip:'Hậu tố chỉ NGƯỜI làm việc gì: 记者 (người ghi chép), 作者 (tác giả), 读者 (độc giả), 或者.',
      cf:'都 (dōu – đều)',w:'记者 / 作者 / 读者 / 或者'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phóng viên luôn cần điều tra khắp nơi, dùng sự thật để nói.',answer:'记者总是需要到处调查，用事实来说话。',answerPy:'Jìzhě zǒngshì xūyào dàochù diàochá, yòng shìshí lái shuō huà.',
      note:'用……来 (Bài 15), 到处 (Bài 8), 调查 (Bài 6).'},
   ]},

  {n:11,zh:'代表',py:'dàibiǎo',pos:'Động từ',vn:'đại diện, thay mặt',em:'🎗️',lesson:2,
   explain:['(1) Thay mặt, tượng trưng cho: A 代表 B. (2) Danh từ: người đại diện.'],
   usage:'用……代表……, 代表公司, 代表大家.',
   collo:['用西瓜的大小代表钱的多少','代表公司','代表大家发言'],
   ex_zh:'我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？',ex_py:'Wǒmen yòng xīguā de dàxiǎo dàibiǎo qián de duōshǎo, yàoshi wǒmen yìqǐ kāishǐ chī, nǐ huì xiān xuǎn nǎ kuài?',ex_vn:'Chúng ta lấy kích thước dưa hấu tượng trưng cho số tiền, nếu cùng bắt đầu ăn, cậu sẽ chọn miếng nào trước?',
   exList:[
     {zh:'这里有三块大小不同的西瓜，我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？',py:'Zhèlǐ yǒu sān kuài dàxiǎo bù tóng de xīguā, wǒmen yòng xīguā de dàxiǎo dàibiǎo qián de duōshǎo, yàoshi wǒmen yìqǐ kāishǐ chī, nǐ huì xiān xuǎn nǎ kuài?',vn:'Ở đây có ba miếng dưa hấu to nhỏ khác nhau, ta lấy kích thước dưa tượng trưng cho số tiền, nếu cùng bắt đầu ăn, cậu sẽ chọn miếng nào trước?'},
     {zh:'我代表公司感谢大家的支持。',py:'Wǒ dàibiǎo gōngsī gǎnxiè dàjiā de zhīchí.',vn:'Tôi thay mặt công ty cảm ơn sự ủng hộ của mọi người.'},
     {zh:'在中国，红色往往代表幸福和好运。',py:'Zài Zhōngguó, hóngsè wǎngwǎng dàibiǎo xìngfú hé hǎoyùn.',vn:'Ở Trung Quốc, màu đỏ thường tượng trưng cho hạnh phúc và may mắn.'},
   ],
   hanzi:[
     {c:'代',p:'dài',type:'左右结构 · Trái-phải',st:5,ord:'亻 trái → 弋 phải',rad:'亻 (nhân)',mean:'thay',
      tip:'Người 亻 + 弋 → người THAY THẾ → ĐẠI (thay). 代表 = thay mặt; 现代 = hiện đại; 年代 = niên đại.',
      cf:'伐 (fá – chặt)',w:'代表 / 现代 / 年代 / 代替'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thay mặt công ty cảm ơn sự ủng hộ của mọi người.',answer:'我代表公司感谢大家的支持。',answerPy:'Wǒ dàibiǎo gōngsī gǎnxiè dàjiā de zhīchí.',
      note:'感谢 (Bài 6), 支持 (Bài 11).'},
   ]},

  {n:12,zh:'恐怕',py:'kǒngpà',pos:'Phó từ',vn:'e rằng, có lẽ',em:'😟',lesson:2,
   explain:['(1) Động từ: lo lắng (= 担心). (2) Phó từ: ước đoán kèm chút lo (e là) hoặc phỏng đoán (có lẽ = 大概/也许). Ngữ pháp trọng tâm: 恐怕 vs 怕.'],
   usage:'恐怕不行, 恐怕……了, 恐怕来不及.',
   collo:['恐怕你已经知道','恐怕不行','恐怕来不及了'],
   ex_zh:'听完我的回答，恐怕你已经知道我的答案了吧。',ex_py:'Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.',ex_vn:'Nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án của tôi rồi.',
   exList:[
     {zh:'听完我的回答，恐怕你已经知道我的答案了吧。',py:'Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.',vn:'Nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án của tôi rồi.'},
     {zh:'我的工作经验还比较少，那份工作我恐怕完成不了。',py:'Wǒ de gōngzuò jīngyàn hái bǐjiào shǎo, nà fèn gōngzuò wǒ kǒngpà wánchéng bu liǎo.',vn:'Kinh nghiệm làm việc của tôi còn ít, công việc đó e là tôi không hoàn thành nổi.'},
     {zh:'这个会议室的座位恐怕不够，还是换到旁边那个大的吧。',py:'Zhège huìyìshì de zuòwèi kǒngpà bú gòu, háishi huàndào pángbiān nàge dà de ba.',vn:'Chỗ ngồi phòng họp này e là không đủ, vẫn nên đổi sang phòng lớn bên cạnh.'},
   ],
   hanzi:[
     {c:'恐',p:'kǒng',type:'上下结构 · Trên-dưới',st:10,ord:'巩 trên → 心 dưới',rad:'心 (tâm)',mean:'sợ',
      tip:'巩 + 心(tim) → trong lòng SỢ HÃI → KHỦNG. 恐怕 = sợ rằng = e rằng.',
      cf:'巩 (gǒng – củng cố)',w:'恐怕 / 恐怖'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kinh nghiệm làm việc của tôi còn ít, công việc đó e là tôi không hoàn thành nổi.',answer:'我的工作经验还比较少，那份工作我恐怕完成不了。',answerPy:'Wǒ de gōngzuò jīngyàn hái bǐjiào shǎo, nà fèn gōngzuò wǒ kǒngpà wánchéng bu liǎo.',
      note:'经验 (Bài 8), bổ ngữ khả năng 完成不了 (Bài 5), lượng từ 份 (Bài 10).'},
     {promptLang:'vi',prompt:'Chỗ ngồi phòng họp này e là không đủ, vẫn nên đổi sang phòng lớn bên cạnh.',answer:'这个会议室的座位恐怕不够，还是换到旁边那个大的吧。',answerPy:'Zhège huìyìshì de zuòwèi kǒngpà bú gòu, háishi huàndào pángbiān nàge dà de ba.',
      note:'够 (Bài 14), 座位 (Bài 3), 还是……吧 (Bài 1).'},
   ]},

  {n:13,zh:'失望',py:'shīwàng',pos:'Động từ',vn:'thất vọng',em:'😞',lesson:3,
   explain:['Mất hy vọng, buồn vì không được như mong đợi. 对……失望, 让……失望.'],
   usage:'父母又要失望了, 对……失望, 别让我失望.',
   collo:['父母又要失望了','对他很失望','让人失望'],
   ex_zh:'今年放假我又回不了家了，这次我父母又要失望了。',ex_py:'Jīnnián fàng jià wǒ yòu huí bu liǎo jiā le, zhè cì wǒ fùmǔ yòu yào shīwàng le.',ex_vn:'Năm nay nghỉ lễ tôi lại không về nhà được, lần này bố mẹ tôi lại thất vọng rồi.',
   exList:[
     {zh:'今年放假我又回不了家了，这次我父母又要失望了。你有什么计划？',py:'Jīnnián fàng jià wǒ yòu huí bu liǎo jiā le, zhè cì wǒ fùmǔ yòu yào shīwàng le. Nǐ yǒu shénme jìhuà?',vn:'Năm nay nghỉ lễ tôi lại không về nhà được, lần này bố mẹ lại thất vọng rồi. Bạn có kế hoạch gì?'},
     {zh:'她一直都很重视这个机会，最后竟然放弃了，这让我们非常失望。',py:'Tā yìzhí dōu hěn zhòngshì zhège jīhuì, zuìhòu jìngrán fàngqì le, zhè ràng wǒmen fēicháng shīwàng.',vn:'Cô ấy luôn coi trọng cơ hội này, cuối cùng lại bỏ, khiến chúng tôi rất thất vọng.'},
     {zh:'失败了别失望，只要你努力，成功就离你越来越近。',py:'Shībàile bié shīwàng, zhǐyào nǐ nǔlì, chénggōng jiù lí nǐ yuè lái yuè jìn.',vn:'Thất bại đừng thất vọng, chỉ cần nỗ lực, thành công sẽ ngày càng gần bạn.'},
   ],
   hanzi:[
     {c:'望',p:'wàng',type:'上下结构 · Trên-dưới',st:11,ord:'亡月 trên → 王 dưới',rad:'月 (nguyệt)',mean:'trông mong',
      tip:'亡 + 月(trăng) + 王 → người đứng trông trăng → TRÔNG MONG, VỌNG. 失望 = mất hy vọng; 希望 = hy vọng.',
      cf:'忘 (wàng – quên)',w:'失望 / 希望 / 愿望'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy luôn coi trọng cơ hội này, cuối cùng lại bỏ, khiến chúng tôi rất thất vọng.',answer:'她一直都很重视这个机会，最后竟然放弃了，这让我们非常失望。',answerPy:'Tā yìzhí dōu hěn zhòngshì zhège jīhuì, zuìhòu jìngrán fàngqì le, zhè ràng wǒmen fēicháng shīwàng.',
      note:'重视 (từ mới), 竟然 (Bài 6), 放弃 (Bài 9).'},
   ]},

  {n:14,zh:'郊区',py:'jiāoqū',pos:'Danh từ',vn:'vùng ngoại ô',em:'🏡',lesson:3,
   explain:['Khu vực ngoài thành phố. 去郊区, 住在郊区, 郊区的房子.'],
   usage:'去郊区住, 到郊区过周末, 郊区的空气.',
   collo:['去郊区住一个月','到郊区过周末','郊区的房子'],
   ex_zh:'我计划去郊区住一个月。',ex_py:'Wǒ jìhuà qù jiāoqū zhù yí ge yuè.',ex_vn:'Tôi định đến ngoại ô ở một tháng.',
   exList:[
     {zh:'我计划去郊区住一个月。你不是已经买好火车票了吗？你到底怎么打算的呀？',py:'Wǒ jìhuà qù jiāoqū zhù yí ge yuè. Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?',vn:'Tôi định đến ngoại ô ở một tháng. Chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?'},
     {zh:'现在城市里越来越多的人喜欢到郊区过周末。他们想找一个空气新鲜、安静的地方好好放松一下。',py:'Xiànzài chéngshì li yuè lái yuè duō de rén xǐhuan dào jiāoqū guò zhōumò. Tāmen xiǎng zhǎo yí ge kōngqì xīnxiān, ānjìng de dìfang hǎohāo fàngsōng yíxià.',vn:'Bây giờ ngày càng nhiều người thành phố thích ra ngoại ô cuối tuần. Họ muốn tìm nơi không khí trong lành, yên tĩnh để thư giãn.'},
     {zh:'郊区的房子虽然便宜，但是离公司太远，上班不方便。',py:'Jiāoqū de fángzi suīrán piányi, dànshì lí gōngsī tài yuǎn, shàng bān bù fāngbiàn.',vn:'Nhà ngoại ô tuy rẻ, nhưng cách công ty quá xa, đi làm không tiện.'},
   ],
   hanzi:[
     {c:'郊',p:'jiāo',type:'左右结构 · Trái-phải',st:8,ord:'交 trái → 阝 phải',rad:'阝 (ấp)',mean:'ngoại ô',
      tip:'交(giao) + 阝(ấp, thành) → nơi giao giữa thành và nông thôn → NGOẠI Ô (giao). Phân biệt 阝 phải = ấp, 阝 trái = phụ (núi).',
      cf:'较 (jiào – so sánh)',w:'郊区 / 郊外'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ ngày càng nhiều người thành phố thích ra ngoại ô cuối tuần.',answer:'现在城市里越来越多的人喜欢到郊区过周末。',answerPy:'Xiànzài chéngshì li yuè lái yuè duō de rén xǐhuan dào jiāoqū guò zhōumò.',
      note:'越来越 (Bài 1), 周末.'},
   ]},

  {n:15,zh:'到底',py:'dàodǐ',pos:'Phó từ',vn:'rốt cuộc',em:'❓',lesson:3,
   explain:['(1) Động từ: đến cùng (坚持到底, 逛到底). (2) Phó từ trong câu hỏi có đại từ nghi vấn: rốt cuộc (không dùng với 吗). Ngữ pháp trọng tâm.'],
   usage:'到底怎么……？, 到底是谁？, 坚持到底.',
   collo:['你到底怎么打算的','到底是怎么回事','坚持到底'],
   ex_zh:'你不是已经买好火车票了吗？你到底怎么打算的呀？',ex_py:'Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?',ex_vn:'Chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?',
   exList:[
     {zh:'你不是已经买好火车票了吗？你到底怎么打算的呀？',py:'Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?',vn:'Chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?'},
     {zh:'我给他打了好几次电话了，可是一直没人接，也不知道他到底是怎么回事。',py:'Wǒ gěi tā dǎle hǎo jǐ cì diànhuà le, kěshì yìzhí méi rén jiē, yě bù zhīdào tā dàodǐ shì zěnme huí shì.',vn:'Tôi gọi anh ấy mấy lần rồi, nhưng không ai nghe, cũng không biết rốt cuộc anh ấy có chuyện gì.'},
     {zh:'今天我一定陪你逛街逛到底，保证让你买到合适的衣服。',py:'Jīntiān wǒ yídìng péi nǐ guàng jiē guàng dàodǐ, bǎozhèng ràng nǐ mǎidào héshì de yīfu.',vn:'Hôm nay tôi nhất định dạo phố cùng bạn đến cùng, đảm bảo bạn mua được bộ đồ hợp.'},
   ],
   hanzi:[
     {c:'底',p:'dǐ',type:'半包围结构 · Nửa bao quanh',st:8,ord:'广 bao → 氐 trong',rad:'广 (nghiễm)',mean:'đáy',
      tip:'Mái 广 + 氐(thấp) → phần thấp nhất → ĐÁY. 到底 = đến đáy = đến cùng / rốt cuộc; 月底 = cuối tháng (Bài 11).',
      cf:'低 (dī – thấp)',w:'到底 / 月底 / 年底 / 底下'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi gọi anh ấy mấy lần rồi, nhưng không ai nghe, cũng không biết rốt cuộc anh ấy có chuyện gì.',answer:'我给他打了好几次电话了，可是一直没人接，也不知道他到底是怎么回事。',answerPy:'Wǒ gěi tā dǎle hǎo jǐ cì diànhuà le, kěshì yìzhí méi rén jiē, yě bù zhīdào tā dàodǐ shì zěnme huí shì.',
      note:'好几 (Bài 11), 接 (Bài 4), 怎么回事.'},
   ]},

  {n:16,zh:'呀',py:'ya',pos:'Trợ từ',vn:'à, nhỉ (biến thể của 啊)',em:'💬',lesson:3,
   explain:['Biến thể của thán từ 啊 sau âm a, e, i, o, ü; dùng cuối câu hỏi để giọng điệu nhẹ nhàng hơn.'],
   usage:'……的呀？, 是谁呀？, 好呀！',
   collo:['怎么打算的呀','是谁呀','快来呀'],
   ex_zh:'你到底怎么打算的呀？',ex_py:'Nǐ dàodǐ zěnme dǎsuàn de ya?',ex_vn:'Rốt cuộc bạn tính thế nào vậy?',
   exList:[
     {zh:'你到底怎么打算的呀？',py:'Nǐ dàodǐ zěnme dǎsuàn de ya?',vn:'Rốt cuộc bạn tính thế nào vậy?'},
     {zh:'这么晚了，你去哪儿呀？',py:'Zhème wǎn le, nǐ qù nǎr ya?',vn:'Muộn thế này rồi, bạn đi đâu vậy?'},
     {zh:'好呀！咱们一边吃西瓜，一边聊。',py:'Hǎo ya! Zánmen yìbiān chī xīguā, yìbiān liáo.',vn:'Được nhỉ! Chúng ta vừa ăn dưa hấu vừa nói chuyện.'},
   ],
   hanzi:[
     {c:'呀',p:'ya',type:'左右结构 · Trái-phải',st:7,ord:'口 trái → 牙 phải',rad:'口 (khẩu)',mean:'trợ từ',
      tip:'Miệng 口 + 牙(biểu âm) → tiếng thốt ra "ya". 啊 → 呀 khi âm trước kết thúc bằng a/e/i/o/ü (的呀, 谁呀).',
      cf:'牙 (yá – răng)',w:'呀 / 哎呀'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muộn thế này rồi, bạn đi đâu vậy?',answer:'这么晚了，你去哪儿呀？',answerPy:'Zhème wǎn le, nǐ qù nǎr ya?',
      note:'呀 sau 儿 (âm r/i).'},
   ]},

  {n:17,zh:'导游',py:'dǎoyóu',pos:'Danh từ',vn:'hướng dẫn viên du lịch',em:'🧭',lesson:3,
   explain:['Người dẫn đoàn du lịch. 当导游 = làm hướng dẫn viên.'],
   usage:'当导游, 一位导游, 让我当导游.',
   collo:['让我当导游','当导游','导游带着大家参观'],
   ex_zh:'昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。',ex_py:'Zuótiān yí ge wàidì de hǎo péngyou dǎ diànhuà shuō yào lái lǚyóu, ràng wǒ dāng dǎoyóu, wǒ shízài bù hǎoyìsi jùjué.',ex_vn:'Hôm qua một người bạn thân ở nơi khác gọi điện nói muốn đến du lịch, nhờ tôi làm hướng dẫn viên, tôi thật sự ngại từ chối.',
   exList:[
     {zh:'昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。',py:'Zuótiān yí ge wàidì de hǎo péngyou dǎ diànhuà shuō yào lái lǚyóu, ràng wǒ dāng dǎoyóu, wǒ shízài bù hǎoyìsi jùjué.',vn:'Hôm qua một người bạn thân ở nơi khác gọi điện nói muốn đến du lịch, nhờ tôi làm hướng dẫn viên, tôi thật sự ngại từ chối.'},
     {zh:'各位朋友大家好！欢迎来到美丽的海南，这几天就由我带着大家参观。',py:'Gèwèi péngyou dàjiā hǎo! Huānyíng láidào měilì de Hǎinán, zhè jǐ tiān jiù yóu wǒ dàizhe dàjiā cānguān.',vn:'Chào các bạn! Hoan nghênh đến Hải Nam xinh đẹp, mấy ngày này do tôi dẫn mọi người tham quan.'},
     {zh:'当导游不仅要熟悉当地的历史文化，还要会说外语。',py:'Dāng dǎoyóu bùjǐn yào shúxī dāngdì de lìshǐ wénhuà, hái yào huì shuō wàiyǔ.',vn:'Làm hướng dẫn viên không chỉ phải quen lịch sử văn hóa địa phương, còn phải biết ngoại ngữ.'},
   ],
   hanzi:[
     {c:'导',p:'dǎo',type:'上下结构 · Trên-dưới',st:6,ord:'巳 trên → 寸 dưới',rad:'寸 (thốn)',mean:'dẫn',
      tip:'Giản thể của 導 (đường 道 + tay 寸 dẫn đi) → DẪN ĐƯỜNG, HƯỚNG DẪN. 导游 = dẫn du lịch; 领导 = lãnh đạo.',
      cf:'异 (yì – khác)',w:'导游 / 领导 / 导演'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua một người bạn thân gọi điện nói muốn đến du lịch, nhờ tôi làm hướng dẫn viên.',answer:'昨天一个好朋友打电话说要来旅游，让我当导游。',answerPy:'Zuótiān yí ge hǎo péngyou dǎ diànhuà shuō yào lái lǚyóu, ràng wǒ dāng dǎoyóu.',
      note:'Câu kiêm ngữ 让 + 当 (Bài 10).'},
   ]},

  {n:18,zh:'礼貌',py:'lǐmào',pos:'Tính từ',vn:'lễ phép, lịch sự',em:'🙏',lesson:3,
   explain:['Có phép tắc, lịch sự. Cũng làm danh từ: 有礼貌, 对客人的尊重和礼貌.'],
   usage:'有礼貌, 礼貌的方法, 没礼貌.',
   collo:['既合适又礼貌的方法','有礼貌','很没礼貌'],
   ex_zh:'如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',ex_py:'Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.',ex_vn:'Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ cho bạn.',
   exList:[
     {zh:'别担心！如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',py:'Bié dānxīn! Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.',vn:'Đừng lo! Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ cho bạn.'},
     {zh:'他的优点是有礼貌、诚实，能吃苦。',py:'Tā de yōudiǎn shì yǒu lǐmào, chéngshí, néng chī kǔ.',vn:'Ưu điểm của anh ấy là lễ phép, thành thật, chịu khổ được.'},
     {zh:'进别人房间前先敲门，这是最基本的礼貌。',py:'Jìn biérén fángjiān qián xiān qiāo mén, zhè shì zuì jīběn de lǐmào.',vn:'Trước khi vào phòng người khác nên gõ cửa, đây là phép lịch sự cơ bản nhất.'},
   ],
   hanzi:[
     {c:'貌',p:'mào',type:'左右结构 · Trái-phải',st:14,ord:'豸 trái → 皃 phải',rad:'豸 (trãi)',mean:'dáng vẻ',
      tip:'豸 + 皃(khuôn mặt) → DÁNG VẺ, MẠO. 礼貌 = dáng vẻ có lễ = lịch sự.',
      cf:'猫 (māo – mèo)',w:'礼貌 / 外貌'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ cho bạn.',answer:'如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',answerPy:'Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.',
      note:'既……又 (Bài 7), 合适 (Bài 15), 一定 (Bài 15).'},
   ]},

  {n:19,zh:'原谅',py:'yuánliàng',pos:'Động từ',vn:'tha thứ',em:'🤝',lesson:3,
   explain:['Bỏ qua lỗi của người khác. 原谅我, 请原谅, 得到原谅.'],
   usage:'原谅你, 请原谅, 得到别人的原谅.',
   collo:['他一定会原谅你的','请原谅我','得到原谅'],
   ex_zh:'他一定会原谅你的。',ex_py:'Tā yídìng huì yuánliàng nǐ de.',ex_vn:'Anh ấy nhất định sẽ tha thứ cho bạn.',
   exList:[
     {zh:'如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',py:'Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.',vn:'Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ cho bạn.'},
     {zh:'虽然得到别人的原谅很容易，但要重新让别人再相信你却很难。',py:'Suīrán dédào biérén de yuánliàng hěn róngyì, dàn yào chóngxīn ràng biérén zài xiāngxìn nǐ què hěn nán.',vn:'Tuy được người khác tha thứ rất dễ, nhưng để người ta tin lại bạn thì rất khó.'},
     {zh:'实在抱歉，我不是故意的，请原谅我。',py:'Shízài bàoqiàn, wǒ bú shì gùyì de, qǐng yuánliàng wǒ.',vn:'Thật sự xin lỗi, tôi không cố ý, xin tha thứ cho tôi.'},
   ],
   hanzi:[
     {c:'谅',p:'liàng',type:'左右结构 · Trái-phải',st:10,ord:'讠 trái → 京 phải',rad:'讠 (ngôn)',mean:'lượng thứ',
      tip:'Lời nói 讠 + 京 → lời nói thông cảm → LƯỢNG (thứ). 原谅 = nguyên lượng = tha thứ.',
      cf:'凉 (liáng – mát)',w:'原谅 / 谅解'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy được người khác tha thứ rất dễ, nhưng để người ta tin lại bạn thì rất khó.',answer:'虽然得到别人的原谅很容易，但要重新让别人再相信你却很难。',answerPy:'Suīrán dédào biérén de yuánliàng hěn róngyì, dàn yào chóngxīn ràng biérén zài xiāngxìn nǐ què hěn nán.',
      note:'重新 (Bài 8), 却 (Bài 2), 相信 (Bài 4).'},
   ]},

  {n:20,zh:'挂',py:'guà',pos:'Động từ',vn:'treo, móc',em:'🖼️',lesson:4,
   explain:['Treo lên. 挂在墙上, 挂在嘴边 (luôn nói đến), 挂电话 (cúp máy).'],
   usage:'把……挂在嘴边, 挂在墙上, 挂电话.',
   collo:['把"明天"挂在嘴边','挂在墙上','先别挂电话'],
   ex_zh:'有些同学经常把"明天"和"将来"挂在嘴边，常说作业明天再完成。',ex_py:'Yǒuxiē tóngxué jīngcháng bǎ "míngtiān" hé "jiānglái" guà zài zuǐ biān, cháng shuō zuòyè míngtiān zài wánchéng.',ex_vn:'Có bạn thường treo "ngày mai" và "tương lai" trên miệng, hay nói bài tập mai làm tiếp.',
   exList:[
     {zh:'有些同学经常把"明天"和"将来"挂在嘴边，常说作业明天再完成，下次考试一定好好儿复习，等等。',py:'Yǒuxiē tóngxué jīngcháng bǎ "míngtiān" hé "jiānglái" guà zài zuǐ biān, cháng shuō zuòyè míngtiān zài wánchéng, xià cì kǎoshì yídìng hǎohāor fùxí, děngděng.',vn:'Có bạn thường treo "ngày mai" và "tương lai" trên miệng, hay nói bài tập mai làm tiếp, lần sau thi nhất định ôn kỹ, vân vân.'},
     {zh:'把这张照片挂在客厅的墙上吧，很好看。',py:'Bǎ zhè zhāng zhàopiàn guà zài kètīng de qiáng shang ba, hěn hǎokàn.',vn:'Treo tấm ảnh này lên tường phòng khách đi, rất đẹp.'},
     {zh:'先别挂电话，我还有一件事要跟你说。',py:'Xiān bié guà diànhuà, wǒ hái yǒu yí jiàn shì yào gēn nǐ shuō.',vn:'Khoan cúp máy, tôi còn một việc muốn nói với bạn.'},
   ],
   hanzi:[
     {c:'挂',p:'guà',type:'左右结构 · Trái-phải',st:9,ord:'扌 trái → 圭 phải',rad:'扌 (thủ)',mean:'treo',
      tip:'Tay 扌 + 圭(hai chữ 土 chồng lên) → dùng tay TREO lên. 挂号 = lấy số khám bệnh.',
      cf:'桂 (guì – quế)',w:'挂 / 挂号 / 挂电话'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Treo tấm ảnh này lên tường phòng khách đi, rất đẹp.',answer:'把这张照片挂在客厅的墙上吧，很好看。',answerPy:'Bǎ zhè zhāng zhàopiàn guà zài kètīng de qiáng shang ba, hěn hǎokàn.',
      note:'把……挂在 (câu chữ 把 + 在), 客厅 (Bài 11).'},
   ]},

  {n:21,zh:'同情',py:'tóngqíng',pos:'Động từ',vn:'thông cảm, đồng tình',em:'💗',lesson:4,
   explain:['Thương cảm, cảm thông với người gặp khó khăn. 同情心 = lòng thương người; 得到同情.'],
   usage:'同情他, 得不到别人的同情, 有同情心.',
   collo:['得不到别人的同情','同情心','值得同情'],
   ex_zh:'这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。',ex_py:'Zhè zhǒng tàidu huì làngfèi shíjiān, búdàn huì ràng nǐ dào zuìhòu shénme shìqing dōu zuòbuchéng, érqiě hái débudào biérén de tóngqíng.',ex_vn:'Thái độ này lãng phí thời gian, không những khiến cuối cùng bạn chẳng làm được việc gì, mà còn không nhận được sự thông cảm của người khác.',
   exList:[
     {zh:'这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。',py:'Zhè zhǒng tàidu huì làngfèi shíjiān, búdàn huì ràng nǐ dào zuìhòu shénme shìqing dōu zuòbuchéng, érqiě hái débudào biérén de tóngqíng.',vn:'Thái độ này lãng phí thời gian, không những khiến cuối cùng bạn chẳng làm được việc gì, mà còn không nhận được sự thông cảm của người khác.'},
     {zh:'爱批评人或者没有同情心的人是最不受欢迎的，这样的人即使很成功，朋友也很少。',py:'Ài pīpíng rén huòzhě méiyǒu tóngqíngxīn de rén shì zuì bú shòu huānyíng de, zhèyàng de rén jíshǐ hěn chénggōng, péngyou yě hěn shǎo.',vn:'Người thích phê bình hoặc không có lòng thương người là không được hoan nghênh nhất, dù thành công bạn bè cũng ít.'},
     {zh:'我很同情他的经历，但是这不是他撒谎的理由。',py:'Wǒ hěn tóngqíng tā de jīnglì, dànshì zhè bú shì tā sāhuǎng de lǐyóu.',vn:'Tôi rất thông cảm với trải nghiệm của anh ấy, nhưng đó không phải lý do để nói dối.'},
   ],
   hanzi:[
     {c:'情',p:'qíng',type:'左右结构 · Trái-phải',st:11,ord:'忄 trái → 青 phải',rad:'忄 (tâm)',mean:'tình',
      tip:'Tâm 忄 + 青 → TÌNH cảm. 同情 = cùng cảm xúc = thông cảm; 感情 (Bài 8), 心情 (Bài 8), 爱情.',
      cf:'请 (qǐng – mời)',w:'同情 / 感情 / 心情 / 爱情'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người thích phê bình hoặc không có lòng thương người là không được hoan nghênh nhất.',answer:'爱批评人或者没有同情心的人是最不受欢迎的。',answerPy:'Ài pīpíng rén huòzhě méiyǒu tóngqíngxīn de rén shì zuì bú shòu huānyíng de.',
      note:'批评 (Bài 15), 受欢迎 (Bài 8).'},
   ]},

  {n:22,zh:'推',py:'tuī',pos:'Động từ',vn:'hoãn lại, đẩy, triển khai',em:'🚪',lesson:4,
   explain:['(1) Đẩy (推门, 推车) — trái nghĩa 拉. (2) Hoãn: 推到明天. (3) Đưa ra: 推出活动.'],
   usage:'推到明天, 推出活动, 推门.',
   collo:['把事情推到"明天"','推出了……的活动','推开门'],
   ex_zh:'所以不要把什么事情都推到"明天"，一切从现在做起。',ex_py:'Suǒyǐ búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ.',ex_vn:'Vì vậy đừng đẩy mọi việc sang "ngày mai", tất cả hãy bắt đầu từ bây giờ.',
   exList:[
     {zh:'所以不要把什么事情都推到"明天"，一切从现在做起。',py:'Suǒyǐ búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ.',vn:'Vì vậy đừng đẩy mọi việc sang "ngày mai", tất cả hãy bắt đầu từ bây giờ.'},
     {zh:'A：你们这个月空调卖得怎么样？B：不错，我们现在推出了"以旧换新"的活动，吸引了不少顾客。',py:'A: Nǐmen zhège yuè kōngtiáo mài de zěnmeyàng? B: Búcuò, wǒmen xiànzài tuīchūle "yǐ jiù huàn xīn" de huódòng, xīyǐnle bù shǎo gùkè.',vn:'A: Tháng này điều hòa của các bạn bán thế nào? B: Không tệ, chúng tôi vừa tung ra chương trình "đổi cũ lấy mới", thu hút nhiều khách.'},
     {zh:'这个门是推的，不是拉的。',py:'Zhège mén shì tuī de, bú shì lā de.',vn:'Cửa này là đẩy, không phải kéo.'},
   ],
   hanzi:[
     {c:'推',p:'tuī',type:'左右结构 · Trái-phải',st:11,ord:'扌 trái → 隹 phải',rad:'扌 (thủ)',mean:'đẩy',
      tip:'Tay 扌 + 隹(chim) → dùng tay ĐẨY. 推迟 = hoãn; 推出 = tung ra; 推荐 = giới thiệu.',
      cf:'堆 (duī – đống)',w:'推 / 推迟 / 推出 / 推荐'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng đẩy mọi việc sang "ngày mai", tất cả hãy bắt đầu từ bây giờ.',answer:'不要把什么事情都推到"明天"，一切从现在做起。',answerPy:'Búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ.',
      note:'什么……都 (Bài 3), 一切 (Bài 11), 从……做起 (Bài 14).'},
   ]},

  {n:23,zh:'预习',py:'yùxí',pos:'Động từ',vn:'chuẩn bị bài',em:'📖',lesson:4,
   explain:['Xem bài trước khi lên lớp. Trái với 复习 (ôn tập). 课前预习.'],
   usage:'课前预习, 预习课文, 预习的习惯.',
   collo:['注意课前预习','预习完课文','有预习的习惯'],
   ex_zh:'首先要注意课前预习，找出第二天要学习的重点。',ex_py:'Shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn.',ex_vn:'Trước hết phải chú ý chuẩn bị bài trước, tìm ra trọng điểm sẽ học ngày hôm sau.',
   exList:[
     {zh:'就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点。',py:'Jiù ná xué Hànyǔ lái shuō ba, shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn.',vn:'Lấy việc học tiếng Trung mà nói, trước hết phải chú ý chuẩn bị bài, tìm ra trọng điểm sẽ học hôm sau.'},
     {zh:'A：他什么时候能和我玩儿？B：等他预习完课文再跟你玩儿，奶奶先陪你做游戏吧。',py:'A: Tā shénme shíhou néng hé wǒ wánr? B: Děng tā yùxí wán kèwén zài gēn nǐ wánr, nǎinai xiān péi nǐ zuò yóuxì ba.',vn:'A: Khi nào anh ấy chơi với cháu được? B: Đợi anh chuẩn bị xong bài rồi chơi, bà chơi trò chơi với cháu trước nhé.'},
     {zh:'上课前，你有预习的习惯吗？',py:'Shàng kè qián, nǐ yǒu yùxí de xíguàn ma?',vn:'Trước khi lên lớp, bạn có thói quen chuẩn bị bài không?'},
   ],
   hanzi:[
     {c:'预',p:'yù',type:'左右结构 · Trái-phải',st:10,ord:'予 trái → 页 phải',rad:'页 (hiệt)',mean:'trước, dự',
      tip:'予 + 页 → DỰ trước. 预习 = học trước; 预报 = dự báo (Bài 1); 预订 = đặt trước.',
      cf:'预 vs 顶 (dǐng – đỉnh)',w:'预习 / 预报 / 预订 / 预习'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đợi anh chuẩn bị xong bài rồi chơi với cháu, bà chơi trò chơi với cháu trước nhé.',answer:'等他预习完课文再跟你玩儿，奶奶先陪你做游戏吧。',answerPy:'Děng tā yùxí wán kèwén zài gēn nǐ wánr, nǎinai xiān péi nǐ zuò yóuxì ba.',
      note:'等……再 (Bài 3), 陪 (Bài 3), 游戏 (Bài 6).'},
   ]},

  {n:24,zh:'重点',py:'zhòngdiǎn',pos:'Danh từ',vn:'trọng điểm, trọng tâm',em:'🎯',lesson:4,
   explain:['Phần quan trọng nhất. 找出重点, 讲重点, 重点内容.'],
   usage:'找出重点, 先讲重点, 学习的重点.',
   collo:['找出第二天要学习的重点','讲话应先讲重点','重点内容'],
   ex_zh:'找出第二天要学习的重点。',ex_py:'Zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn.',ex_vn:'Tìm ra trọng điểm sẽ học ngày hôm sau.',
   exList:[
     {zh:'首先要注意课前预习，找出第二天要学习的重点。',py:'Shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn.',vn:'Trước hết phải chú ý chuẩn bị bài, tìm ra trọng điểm sẽ học hôm sau.'},
     {zh:'讲话应先讲重点，这样才能使别人更快地了解你想说的意思。',py:'Jiǎng huà yīng xiān jiǎng zhòngdiǎn, zhèyàng cái néng shǐ biérén gèng kuài de liǎojiě nǐ xiǎng shuō de yìsi.',vn:'Nói chuyện nên nói trọng điểm trước, như vậy người khác mới nhanh hiểu ý bạn.'},
     {zh:'解决这个任务没有那么困难，但关键是我们要弄清楚工作的主要目的，找到重点。',py:'Jiějué zhège rènwu méiyǒu nàme kùnnan, dàn guānjiàn shì wǒmen yào nòng qīngchu gōngzuò de zhǔyào mùdì, zhǎodào zhòngdiǎn.',vn:'Giải quyết nhiệm vụ này không khó lắm, nhưng then chốt là phải làm rõ mục đích chính của công việc, tìm ra trọng điểm.'},
   ],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占 trên → 灬 dưới',rad:'灬 (hỏa)',mean:'điểm',
      tip:'占 + 灬(lửa) → chấm nhỏ → ĐIỂM. 重点 = điểm quan trọng; 优点/缺点 (Bài 8); 地点.',
      cf:'店 (diàn – cửa hàng)',w:'重点 / 优点 / 缺点 / 地点'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói chuyện nên nói trọng điểm trước, như vậy người khác mới nhanh hiểu ý bạn.',answer:'讲话应先讲重点，这样才能使别人更快地了解你想说的意思。',answerPy:'Jiǎng huà yīng xiān jiǎng zhòngdiǎn, zhèyàng cái néng shǐ biérén gèng kuài de liǎojiě nǐ xiǎng shuō de yìsi.',
      note:'使 (Bài 10), 了解 (Bài 3), 才能.'},
   ]},

  {n:25,zh:'马虎',py:'mǎhu',pos:'Tính từ',vn:'cẩu thả, lơ đễnh',em:'🙃',lesson:4,
   explain:['Qua loa, không cẩn thận (≈ 粗心 Bài 15). 不能马虎, 马马虎虎 = tàm tạm.'],
   usage:'不能马虎, 太马虎了, 马马虎虎.',
   collo:['上课时不能马虎','做事太马虎','马马虎虎'],
   ex_zh:'其次，上课时要认真听，不能马虎；最后，课后要记得复习。',ex_py:'Qícì, shàng kè shí yào rènzhēn tīng, bù néng mǎhu; zuìhòu, kè hòu yào jìde fùxí.',ex_vn:'Thứ hai, trên lớp phải nghe nghiêm túc, không được lơ đễnh; cuối cùng, sau giờ học nhớ ôn tập.',
   exList:[
     {zh:'其次，上课时要认真听，不能马虎；最后，课后要记得复习。',py:'Qícì, shàng kè shí yào rènzhēn tīng, bù néng mǎhu; zuìhòu, kè hòu yào jìde fùxí.',vn:'Thứ hai, trên lớp phải nghe nghiêm túc, không được lơ đễnh; cuối cùng, sau giờ học nhớ ôn tập.'},
     {zh:'填写签证材料时千万不能马虎，写错一个字都可能有麻烦。',py:'Tiánxiě qiānzhèng cáiliào shí qiānwàn bù néng mǎhu, xiěcuò yí ge zì dōu kěnéng yǒu máfan.',vn:'Điền tài liệu visa tuyệt đối không được cẩu thả, viết sai một chữ cũng có thể rắc rối.'},
     {zh:'A：你的汉语怎么样？B：马马虎虎，还得继续努力。',py:'A: Nǐ de Hànyǔ zěnmeyàng? B: Mǎmǎhūhū, hái děi jìxù nǔlì.',vn:'A: Tiếng Trung của bạn thế nào? B: Tàm tạm, vẫn phải tiếp tục cố gắng.'},
   ],
   hanzi:[
     {c:'虎',p:'hǔ',type:'半包围结构 · Nửa bao quanh',st:8,ord:'虍 bao → 几 trong',rad:'虍 (hổ)',mean:'hổ',
      tip:'Tượng hình con HỔ. 马虎 = "ngựa hổ" — truyền thuyết họa sĩ vẽ lẫn ngựa và hổ → CẨU THẢ.',
      cf:'虚 (xū – hư)',w:'马虎 / 老虎 / 马马虎虎'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điền tài liệu visa tuyệt đối không được cẩu thả, viết sai một chữ cũng có thể rắc rối.',answer:'填写签证材料时千万不能马虎，写错一个字都可能有麻烦。',answerPy:'Tiánxiě qiānzhèng cáiliào shí qiānwàn bù néng mǎhu, xiěcuò yí ge zì dōu kěnéng yǒu máfan.',
      note:'千万不能 (Bài 15), 材料 (Bài 4), 麻烦 (Bài 3).'},
   ]},

  {n:26,zh:'自信',py:'zìxìn',pos:'Tính từ',vn:'tự tin',em:'💪',lesson:4,
   explain:['Tin vào bản thân. 很自信, 越说越自信, 有自信. Danh từ 信心 (Bài 9).'],
   usage:'越说越自信, 很自信, 自信的人.',
   collo:['越说越自信','自信的年轻人','对自己有自信'],
   ex_zh:'只要这样，汉语就能越学越好，越说越自信。',ex_py:'Zhǐyào zhèyàng, Hànyǔ jiù néng yuè xué yuè hǎo, yuè shuō yuè zìxìn.',ex_vn:'Chỉ cần như vậy, tiếng Trung sẽ càng học càng giỏi, càng nói càng tự tin.',
   exList:[
     {zh:'只要这样，汉语就能越学越好，越说越自信。',py:'Zhǐyào zhèyàng, Hànyǔ jiù néng yuè xué yuè hǎo, yuè shuō yuè zìxìn.',vn:'Chỉ cần như vậy, tiếng Trung sẽ càng học càng giỏi, càng nói càng tự tin.'},
     {zh:'面试的时候要自信一点儿，别害羞。',py:'Miànshì de shíhou yào zìxìn yìdiǎnr, bié hàixiū.',vn:'Lúc phỏng vấn phải tự tin một chút, đừng ngượng.'},
     {zh:'他是一个既自信又谦虚的小伙子。',py:'Tā shì yí ge jì zìxìn yòu qiānxū de xiǎohuǒzi.',vn:'Anh ấy là chàng trai vừa tự tin vừa khiêm tốn.'},
   ],
   hanzi:[
     {c:'信',p:'xìn',type:'左右结构 · Trái-phải',st:9,ord:'亻 trái → 言 phải',rad:'亻 (nhân)',mean:'tin',
      tip:'Người 亻 + lời 言 → lời người nói đáng TIN → TÍN. 自信 = tự tin; 相信 (Bài 4); 信心 (Bài 9); 信 = thư.',
      cf:'言 (yán – lời)',w:'自信 / 相信 / 信心 / 信'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc phỏng vấn phải tự tin một chút, đừng ngượng.',answer:'面试的时候要自信一点儿，别害羞。',answerPy:'Miànshì de shíhou yào zìxìn yìdiǎnr, bié hàixiū.',
      note:'面试 (Bài 10), 害羞 (Bài 15).'},
   ]},

  {n:27,zh:'冷静',py:'lěngjìng',pos:'Tính từ',vn:'bình tĩnh, điềm tĩnh',em:'🧊',lesson:5,
   explain:['Không nóng vội, giữ được lý trí. 要冷静, 冷静下来, 冷静地.'],
   usage:'千万要冷静, 冷静下来, 冷静地考虑.',
   collo:['千万要冷静','冷静下来','冷静地处理'],
   ex_zh:'当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。',ex_py:'Dāng nǐ rènwéi zìjǐ zài nǎ fāngmiàn hěn yōuxiù shí, qiānwàn yào lěngjìng, búyào jiāo\'ào.',ex_vn:'Khi bạn cho rằng mình xuất sắc ở mặt nào đó, tuyệt đối phải bình tĩnh, đừng kiêu ngạo.',
   exList:[
     {zh:'当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。',py:'Dāng nǐ rènwéi zìjǐ zài nǎ fāngmiàn hěn yōuxiù shí, qiānwàn yào lěngjìng, búyào jiāo\'ào.',vn:'Khi bạn cho rằng mình xuất sắc ở mặt nào đó, tuyệt đối phải bình tĩnh, đừng kiêu ngạo.'},
     {zh:'遇到问题时别着急，先冷静下来，然后想办法解决。',py:'Yùdào wèntí shí bié zháojí, xiān lěngjìng xiàlai, ránhòu xiǎng bànfǎ jiějué.',vn:'Gặp vấn đề đừng vội, bình tĩnh lại trước, rồi nghĩ cách giải quyết.'},
     {zh:'他做事一向很冷静，从不因为一点儿小事生气。',py:'Tā zuò shì yíxiàng hěn lěngjìng, cóng bù yīnwèi yìdiǎnr xiǎo shì shēng qì.',vn:'Anh ấy làm việc luôn điềm tĩnh, không bao giờ vì việc nhỏ mà nổi giận.'},
   ],
   hanzi:[
     {c:'静',p:'jìng',type:'左右结构 · Trái-phải',st:14,ord:'青 trái → 争 phải',rad:'青 (thanh)',mean:'yên tĩnh',
      tip:'青 + 争 → TĨNH lặng. 冷静 = lạnh và tĩnh = bình tĩnh; 安静 = yên tĩnh (Bài 2).',
      cf:'净 (jìng – sạch)',w:'冷静 / 安静 / 平静'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp vấn đề đừng vội, bình tĩnh lại trước, rồi nghĩ cách giải quyết.',answer:'遇到问题时别着急，先冷静下来，然后想办法解决。',answerPy:'Yùdào wèntí shí bié zháojí, xiān lěngjìng xiàlai, ránhòu xiǎng bànfǎ jiějué.',
      note:'下来 (bổ ngữ xu hướng), 先……然后 (Bài 3), 解决 (Bài 3).'},
   ]},

  {n:28,zh:'输',py:'shū',pos:'Động từ',vn:'thua',em:'🏳️',lesson:5,
   explain:['Thất bại trong thi đấu/cá cược. Trái nghĩa: 赢 (Bài 9). 输了比赛, 输给他.'],
   usage:'输了, 输给……, 不管是输是赢.',
   collo:['没有人会永远输','输给对手','不管输赢'],
   ex_zh:'就像比赛一样，没有人会永远输，也没有人会一直赢。',ex_py:'Jiù xiàng bǐsài yíyàng, méiyǒu rén huì yǒngyuǎn shū, yě méiyǒu rén huì yìzhí yíng.',ex_vn:'Giống như thi đấu, không ai thua mãi, cũng không ai thắng mãi.',
   exList:[
     {zh:'就像比赛一样，没有人会永远输，也没有人会一直赢。',py:'Jiù xiàng bǐsài yíyàng, méiyǒu rén huì yǒngyuǎn shū, yě méiyǒu rén huì yìzhí yíng.',vn:'Giống như thi đấu, không ai thua mãi, cũng không ai thắng mãi.'},
     {zh:'生活的关键就是：只要你努力做了，不管是输是赢，都一样精彩。',py:'Shēnghuó de guānjiàn jiù shì: zhǐyào nǐ nǔlì zuò le, bùguǎn shì shū shì yíng, dōu yíyàng jīngcǎi.',vn:'Then chốt của cuộc sống là: chỉ cần bạn nỗ lực, bất kể thua hay thắng, đều đặc sắc như nhau.'},
     {zh:'昨天的足球比赛我们输了，不过大家都踢得很努力。',py:'Zuótiān de zúqiú bǐsài wǒmen shū le, búguò dàjiā dōu tī de hěn nǔlì.',vn:'Trận bóng hôm qua chúng tôi thua, nhưng mọi người đều đá rất cố gắng.'},
   ],
   hanzi:[
     {c:'输',p:'shū',type:'左右结构 · Trái-phải',st:13,ord:'车 trái → 俞 phải',rad:'车 (xa)',mean:'thua; chở',
      tip:'Xe 车 + 俞 → nghĩa gốc là VẬN CHUYỂN (运输), mở rộng thành THUA (đưa tiền đi). Trái nghĩa 赢.',
      cf:'愉 (yú – vui, Bài 8)',w:'输 / 运输 / 输入'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn nỗ lực, bất kể thua hay thắng, đều đặc sắc như nhau.',answer:'只要你努力做了，不管是输是赢，都一样精彩。',answerPy:'Zhǐyào nǐ nǔlì zuò le, bùguǎn shì shū shì yíng, dōu yíyàng jīngcǎi.',
      note:'只要 (Bài 8), 不管……都 (Bài 3), 精彩 (Bài 11).'},
   ]},

  {n:29,zh:'重视',py:'zhòngshì',pos:'Động từ',vn:'xem trọng, chú trọng',em:'⭐',lesson:5,
   explain:['Coi là quan trọng. 重视平时的积累, 重视教育, 引起重视.'],
   usage:'重视……, 引起重视, 很重视这个机会.',
   collo:['重视平时的积累','引起重视','很重视教育'],
   ex_zh:'我们应该重视平时的积累，多向周围的人学习。',ex_py:'Wǒmen yīnggāi zhòngshì píngshí de jīlěi, duō xiàng zhōuwéi de rén xuéxí.',ex_vn:'Chúng ta nên chú trọng tích lũy thường ngày, học hỏi nhiều từ những người xung quanh.',
   exList:[
     {zh:'我们应该重视平时的积累，多向周围的人学习。',py:'Wǒmen yīnggāi zhòngshì píngshí de jīlěi, duō xiàng zhōuwéi de rén xuéxí.',vn:'Chúng ta nên chú trọng tích lũy thường ngày, học hỏi nhiều từ những người xung quanh.'},
     {zh:'有些问题虽然看起来很小，但是如果没有引起重视，很可能会发展成大麻烦。',py:'Yǒuxiē wèntí suīrán kàn qilai hěn xiǎo, dànshì rúguǒ méiyǒu yǐnqǐ zhòngshì, hěn kěnéng huì fāzhǎn chéng dà máfan.',vn:'Có vấn đề tuy trông nhỏ, nhưng nếu không được chú ý, rất có thể phát triển thành rắc rối lớn.'},
     {zh:'随着经济的发展，环境保护问题也越来越引起人们的重视。',py:'Suízhe jīngjì de fāzhǎn, huánjìng bǎohù wèntí yě yuè lái yuè yǐnqǐ rénmen de zhòngshì.',vn:'Cùng với kinh tế phát triển, vấn đề bảo vệ môi trường ngày càng được mọi người chú trọng.'},
   ],
   hanzi:[
     {c:'视',p:'shì',type:'左右结构 · Trái-phải',st:8,ord:'礻 trái → 见 phải',rad:'见 (kiến)',mean:'nhìn',
      tip:'礻 + 见(nhìn) → NHÌN, THỊ. 重视 = nhìn nặng = coi trọng; 电视 = TV.',
      cf:'现 (xiàn – hiện)',w:'重视 / 电视 / 视频'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có vấn đề tuy trông nhỏ, nhưng nếu không được chú ý, rất có thể phát triển thành rắc rối lớn.',answer:'有些问题虽然看起来很小，但是如果没有引起重视，很可能会发展成大麻烦。',answerPy:'Yǒuxiē wèntí suīrán kàn qilai hěn xiǎo, dànshì rúguǒ méiyǒu yǐnqǐ zhòngshì, hěn kěnéng huì fāzhǎn chéng dà máfan.',
      note:'看起来 (Bài 15), 引起 (Bài 12), 发展 (Bài 10).'},
   ]},

  {n:30,zh:'敢',py:'gǎn',pos:'Động từ năng nguyện',vn:'dám',em:'🦁',lesson:5,
   explain:['Có gan làm gì. 敢说真话, 不敢 + động từ. Ngữ pháp trọng tâm.'],
   usage:'敢说真话, 不敢再……, 敢不敢？',
   collo:['敢说真话的人','不敢再躺着看书','你敢不敢'],
   ex_zh:'如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差。',ex_py:'Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, bìng bù shuōmíng zìjǐ bǐ biérén chà.',ex_vn:'Nếu bạn dám thành thật nói ra mình không hiểu mặt nào, không hề chứng tỏ bạn kém người khác.',
   exList:[
     {zh:'如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。',py:'Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, bìng bù shuōmíng zìjǐ bǐ biérén chà, xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.',vn:'Nếu bạn dám thành thật nói ra mình không hiểu mặt nào, không hề chứng tỏ bạn kém người khác, ngược lại, làm vậy càng được người khác tôn trọng.'},
     {zh:'我们应该把那些敢说真话的人当成"镜子"，这样才能及时发现自己的缺点。',py:'Wǒmen yīnggāi bǎ nàxiē gǎn shuō zhēnhuà de rén dàngchéng "jìngzi", zhèyàng cái néng jíshí fāxiàn zìjǐ de quēdiǎn.',vn:'Chúng ta nên coi những người dám nói thật là "tấm gương", như vậy mới kịp thời phát hiện khuyết điểm.'},
     {zh:'小时候我总喜欢躺在床上看书，结果眼睛越来越不好，所以从那儿以后我就不敢再躺着看书了。',py:'Xiǎoshíhou wǒ zǒng xǐhuan tǎng zài chuáng shang kàn shū, jiéguǒ yǎnjing yuè lái yuè bù hǎo, suǒyǐ cóng nàr yǐhòu wǒ jiù bù gǎn zài tǎngzhe kàn shū le.',vn:'Hồi nhỏ tôi hay nằm trên giường đọc sách, kết quả mắt ngày càng kém, từ đó tôi không dám nằm đọc sách nữa.'},
   ],
   hanzi:[
     {c:'敢',p:'gǎn',type:'左右结构 · Trái-phải',st:11,ord:'𠂉⺕ trái → 攵 phải',rad:'攵 (phộc)',mean:'dám',
      tip:'Hình tay cầm vũ khí tiến lên → DÁM, CẢM. 勇敢 = dũng cảm (Bài 9).',
      cf:'感 (gǎn – cảm, có 心)',w:'敢 / 勇敢 / 不敢'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ đó tôi không dám nằm đọc sách nữa.',answer:'从那儿以后我就不敢再躺着看书了。',answerPy:'Cóng nàr yǐhòu wǒ jiù bù gǎn zài tǎngzhe kàn shū le.',
      note:'不敢再 + 躺着 (Bài 7, 着 Bài 2).'},
   ]},

  {n:31,zh:'尊重',py:'zūnzhòng',pos:'Động từ',vn:'tôn trọng',em:'🙇‍♂️',lesson:5,
   explain:['Coi trọng, kính trọng người khác. 尊重别人, 得到尊重, 对客人的尊重.'],
   usage:'尊重别人, 得到别人的尊重, 互相尊重.',
   collo:['得到别人的尊重','尊重别人的意见','互相尊重'],
   ex_zh:'相反，这样做更能得到别人的尊重。',ex_py:'Xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.',ex_vn:'Ngược lại, làm vậy càng được người khác tôn trọng.',
   exList:[
     {zh:'相反，这样做更能得到别人的尊重。',py:'Xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.',vn:'Ngược lại, làm vậy càng được người khác tôn trọng.'},
     {zh:'A：我考虑了很久，还是决定离开现在的公司。B：既然这样，那我们尊重你的选择。',py:'A: Wǒ kǎolǜle hěn jiǔ, háishi juédìng líkāi xiànzài de gōngsī. B: Jìrán zhèyàng, nà wǒmen zūnzhòng nǐ de xuǎnzé.',vn:'A: Tôi suy nghĩ rất lâu, vẫn quyết định rời công ty. B: Đã vậy thì chúng tôi tôn trọng lựa chọn của bạn.'},
     {zh:'他这些年做生意赚了不少钱，还拿出很大一部分去帮助那些经济有困难的人，所以获得了大家的尊重。',py:'Tā zhèxiē nián zuò shēngyi zhuànle bù shǎo qián, hái náchū hěn dà yí bùfen qù bāngzhù nàxiē jīngjì yǒu kùnnan de rén, suǒyǐ huòdéle dàjiā de zūnzhòng.',vn:'Mấy năm nay anh ấy làm ăn kiếm được nhiều tiền, còn bỏ ra phần lớn giúp người khó khăn, nên được mọi người tôn trọng.'},
   ],
   hanzi:[
     {c:'尊',p:'zūn',type:'上下结构 · Trên-dưới',st:12,ord:'酋 trên → 寸 dưới',rad:'寸 (thốn)',mean:'tôn',
      tip:'酋(bình rượu) + 寸(tay) → hai tay dâng rượu → TÔN kính. 尊重 = tôn trọng; 尊敬 = tôn kính.',
      cf:'遵 (zūn – tuân theo)',w:'尊重 / 尊敬'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã vậy thì chúng tôi tôn trọng lựa chọn của bạn.',answer:'既然这样，那我们尊重你的选择。',answerPy:'Jìrán zhèyàng, nà wǒmen zūnzhòng nǐ de xuǎnzé.',
      note:'既然 (Bài 14), 选择 (Bài 5).'},
   ]},
];

var wuData = [
  {img:'🤩',label:'激动',py:'jīdòng',letter:'A'},
  {img:'🏛️',label:'参观',py:'cānguān',letter:'B'},
  {img:'😞',label:'失望',py:'shīwàng',letter:'C'},
  {img:'🖼️',label:'挂',py:'guà',letter:'D'},
  {img:'🚪',label:'推',py:'tuī',letter:'E'},
  {img:'📰',label:'记者',py:'jìzhě',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 小夏出国留学遇到了问题',
   preQuiz:[{q:'小夏还缺什么材料？',opts:['成绩证明','护照','国外大学的邀请信'],ans:2}],
   lines:[
     {sp:0,zh:'你马上就要硕士毕业了吧？将来有什么打算？',py:'Nǐ mǎshàng jiù yào shuòshì bì yè le ba? Jiānglái yǒu shénme dǎsuàn?',vn:'Bạn sắp tốt nghiệp thạc sĩ rồi nhỉ? Tương lai có dự định gì?'},
     {sp:1,zh:'我想出国读博士，一直在准备办签证需要的材料。',py:'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.',vn:'Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị tài liệu cần để làm visa.'},
     {sp:0,zh:'现在材料准备得怎么样了？',py:'Xiànzài cáiliào zhǔnbèi de zěnmeyàng le?',vn:'Bây giờ tài liệu chuẩn bị đến đâu rồi?'},
     {sp:1,zh:'成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。',py:'Chéngjì zhèngmíng hé hùzhào yǐjīng zhǔnbèi hǎo le, lìngwài, hái gēn guówài de dàxué qǔdéle liánxì, tiánxiěle bào míng biǎogé.',vn:'Bảng điểm và hộ chiếu đã chuẩn bị xong, ngoài ra còn liên hệ được với đại học nước ngoài, đã điền phiếu đăng ký.'},
     {sp:0,zh:'还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？',py:'Hái yīnggāi yǒu guówài dàxué gěi nǐ de yāoqǐngxìn ba? Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?',vn:'Còn phải có thư mời của trường đại học nước ngoài chứ? Họ đã fax thư mời cho bạn chưa?'},
     {sp:1,zh:'没有啊，下个星期我就要去使馆办签证了，这可怎么办？',py:'Méiyǒu a, xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?',vn:'Chưa, tuần sau tôi phải đến sứ quán làm visa rồi, thế này biết làm sao?'},
     {sp:0,zh:'这可是个大问题，我也不太清楚。我帮你查一下学校的电话号码，你打电话问一下吧。',py:'Zhè kě shì ge dà wèntí, wǒ yě bú tài qīngchu. Wǒ bāng nǐ chá yíxià xuéxiào de diànhuà hàomǎ, nǐ dǎ diànhuà wèn yíxià ba.',vn:'Đây đúng là vấn đề lớn, tôi cũng không rõ lắm. Tôi giúp bạn tra số điện thoại của trường, bạn gọi hỏi thử đi.'},
   ]},
  {scene:'课文2 · 王老板告诉李进自己成功的经验',
   preQuiz:[{q:'王老板会先吃哪块西瓜？为什么？',opts:['最大的，因为好吃','最小的，因为这样最后吃得更多','中间的'],ans:1}],
   lines:[
     {sp:0,zh:'谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。',py:'Xièxie nín dài wǒ cānguān nín de gōngsī. Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.',vn:'Cảm ơn ngài đã dẫn tôi tham quan công ty. Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.'},
     {sp:1,zh:'好啊！小伙子，咱们一边吃西瓜，一边聊。',py:'Hǎo a! Xiǎohuǒzi, zánmen yìbiān chī xīguā, yìbiān liáo.',vn:'Được! Chàng trai, chúng ta vừa ăn dưa hấu vừa nói chuyện.'},
     {sp:0,zh:'您从大学毕业开始工作，到现在才十年时间，怎么给公司赚了这么多钱？这让我非常吃惊。我想向您学习一下成功的经验。',py:'Nín cóng dàxué bì yè kāishǐ gōngzuò, dào xiànzài cái shí nián shíjiān, zěnme gěi gōngsī zhuànle zhème duō qián? Zhè ràng wǒ fēicháng chī jīng. Wǒ xiǎng xiàng nín xuéxí yíxià chénggōng de jīngyàn.',vn:'Ngài đi làm từ khi tốt nghiệp, đến nay mới mười năm, sao kiếm được nhiều tiền cho công ty vậy? Điều này khiến tôi rất ngạc nhiên. Tôi muốn học kinh nghiệm thành công của ngài.'},
     {sp:1,zh:'这个问题以前一个记者也问过我。做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。你看，这里有三块大小不同的西瓜，我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？',py:'Zhège wèntí yǐqián yí ge jìzhě yě wènguo wǒ. Zuò shēngyi shí suīrán huì yùdào gè zhǒng yālì hé kùnnan, dànshì dàjiā de jīhuì dōu shì xiāngtóng de. Nǐ kàn, zhèlǐ yǒu sān kuài dàxiǎo bù tóng de xīguā, wǒmen yòng xīguā de dàxiǎo dàibiǎo qián de duōshǎo, yàoshi wǒmen yìqǐ kāishǐ chī, nǐ huì xiān xuǎn nǎ kuài?',vn:'Câu này trước đây một phóng viên cũng hỏi tôi. Làm ăn tuy gặp đủ áp lực và khó khăn, nhưng cơ hội của mọi người như nhau. Cậu xem, ở đây có ba miếng dưa to nhỏ khác nhau, ta lấy kích thước dưa tượng trưng cho số tiền, nếu cùng bắt đầu ăn, cậu chọn miếng nào trước?'},
     {sp:0,zh:'我肯定先吃最大的一块了，难道您会先吃小的，放弃吃大块的机会吗？',py:'Wǒ kěndìng xiān chī zuì dà de yí kuài le, nándào nín huì xiān chī xiǎo de, fàngqì chī dà kuài de jīhuì ma?',vn:'Tôi chắc chắn ăn miếng to nhất trước, chẳng lẽ ngài ăn miếng nhỏ trước, bỏ cơ hội ăn miếng to?'},
     {sp:1,zh:'我会先吃最小的一块，因为在你没吃完最大的那块时，我还有时间再多吃一块，最后一定比你吃的西瓜多。听完我的回答，恐怕你已经知道我的答案了吧。',py:'Wǒ huì xiān chī zuì xiǎo de yí kuài, yīnwèi zài nǐ méi chīwán zuì dà de nà kuài shí, wǒ hái yǒu shíjiān zài duō chī yí kuài, zuìhòu yídìng bǐ nǐ chī de xīguā duō. Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.',vn:'Tôi sẽ ăn miếng nhỏ nhất trước, vì khi cậu chưa ăn xong miếng to, tôi còn thời gian ăn thêm một miếng, cuối cùng chắc chắn ăn nhiều hơn cậu. Nghe xong, có lẽ cậu đã biết đáp án của tôi rồi.'},
   ]},
  {scene:'课文3 · 小林不好意思拒绝朋友',
   preQuiz:[{q:'小李认为拒绝朋友说明什么？',opts:['不愿意帮忙','对朋友和父母负责','没有礼貌'],ans:1}],
   lines:[
     {sp:0,zh:'今年放假我又回不了家了，这次我父母又要失望了。你有什么计划？',py:'Jīnnián fàng jià wǒ yòu huí bu liǎo jiā le, zhè cì wǒ fùmǔ yòu yào shīwàng le. Nǐ yǒu shénme jìhuà?',vn:'Năm nay nghỉ lễ tôi lại không về nhà được, lần này bố mẹ lại thất vọng. Bạn có kế hoạch gì?'},
     {sp:1,zh:'我计划去郊区住一个月。你不是已经买好火车票了吗？你到底怎么打算的呀？',py:'Wǒ jìhuà qù jiāoqū zhù yí ge yuè. Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?',vn:'Tôi định đến ngoại ô ở một tháng. Chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?'},
     {sp:0,zh:'昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。',py:'Zuótiān yí ge wàidì de hǎo péngyou dǎ diànhuà shuō yào lái lǚyóu, ràng wǒ dāng dǎoyóu, wǒ shízài bù hǎoyìsi jùjué.',vn:'Hôm qua một người bạn thân ở nơi khác gọi điện nói muốn đến du lịch, nhờ tôi làm hướng dẫn viên, tôi thật ngại từ chối.'},
     {sp:1,zh:'其实拒绝并不表示不愿意帮忙。遇到解决不了的问题或者无法完成的任务时，拒绝正好说明你对朋友负责。这也是对你父母负责的态度。',py:'Qíshí jùjué bìng bù biǎoshì bú yuànyì bāng máng. Yùdào jiějué bu liǎo de wèntí huòzhě wúfǎ wánchéng de rènwu shí, jùjué zhènghǎo shuōmíng nǐ duì péngyou fùzé. Zhè yě shì duì nǐ fùmǔ fùzé de tàidu.',vn:'Thực ra từ chối không có nghĩa là không muốn giúp. Khi gặp vấn đề không giải quyết được hoặc nhiệm vụ không thể hoàn thành, từ chối chính là thể hiện bạn có trách nhiệm với bạn bè. Đó cũng là thái độ có trách nhiệm với bố mẹ.'},
     {sp:0,zh:'既然别人找我帮忙，说明他真的很需要我的帮助。我担心要是说"不"的话，会让他误会和伤心。',py:'Jìrán biérén zhǎo wǒ bāng máng, shuōmíng tā zhēn de hěn xūyào wǒ de bāngzhù. Wǒ dānxīn yàoshi shuō "bù" dehuà, huì ràng tā wùhuì hé shāngxīn.',vn:'Đã có người tìm tôi giúp, chứng tỏ họ thật sự cần. Tôi lo nếu nói "không", sẽ khiến họ hiểu lầm và buồn.'},
     {sp:1,zh:'别担心！如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',py:'Bié dānxīn! Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.',vn:'Đừng lo! Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ.'},
   ]},
  {scene:'课文4 · Đừng đẩy mọi việc sang "ngày mai"',
   preQuiz:[{q:'theo bài đọc, học tiếng Trung trước hết cần chú ý gì?',opts:['làm nhiều bài tập','chuẩn bị bài trước khi lên lớp','nói chuyện với người Trung Quốc'],ans:1}],
   lines:[
     {sp:0,zh:'有些同学经常把"明天"和"将来"挂在嘴边，常说作业明天再完成，下次考试一定好好儿复习，等等。这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。',py:'Yǒuxiē tóngxué jīngcháng bǎ "míngtiān" hé "jiānglái" guà zài zuǐ biān, cháng shuō zuòyè míngtiān zài wánchéng, xià cì kǎoshì yídìng hǎohāor fùxí, děngděng. Zhè zhǒng tàidu huì làngfèi shíjiān, búdàn huì ràng nǐ dào zuìhòu shénme shìqing dōu zuòbuchéng, érqiě hái débudào biérén de tóngqíng.',vn:'Có bạn thường treo "ngày mai" và "tương lai" trên miệng, hay nói bài tập mai làm, lần sau thi nhất định ôn kỹ, vân vân. Thái độ này lãng phí thời gian, không những khiến cuối cùng chẳng làm được việc gì, mà còn không được ai thông cảm.'},
     {sp:0,zh:'所以不要把什么事情都推到"明天"，一切从现在做起。',py:'Suǒyǐ búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ.',vn:'Vì vậy đừng đẩy mọi việc sang "ngày mai", tất cả hãy bắt đầu từ bây giờ.'},
     {sp:0,zh:'就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点；其次，上课时要认真听，不能马虎；最后，课后要记得复习。只要这样，汉语就能越学越好，越说越自信。',py:'Jiù ná xué Hànyǔ lái shuō ba, shǒuxiān yào zhùyì kè qián yùxí, zhǎochū dì-èr tiān yào xuéxí de zhòngdiǎn; qícì, shàng kè shí yào rènzhēn tīng, bù néng mǎhu; zuìhòu, kè hòu yào jìde fùxí. Zhǐyào zhèyàng, Hànyǔ jiù néng yuè xué yuè hǎo, yuè shuō yuè zìxìn.',vn:'Lấy việc học tiếng Trung mà nói, trước hết chú ý chuẩn bị bài, tìm trọng điểm hôm sau; thứ hai, trên lớp nghe nghiêm túc, không lơ đễnh; cuối cùng, sau giờ học nhớ ôn tập. Chỉ cần vậy, tiếng Trung càng học càng giỏi, càng nói càng tự tin.'},
   ]},
  {scene:'课文5 · 天外有天，人外有人',
   preQuiz:[{q:'dám thành thật nói mình không hiểu điều gì thì sao?',opts:['chứng tỏ mình kém','càng được người khác tôn trọng','bị người khác cười'],ans:1}],
   lines:[
     {sp:0,zh:'当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。因为这个世界很大，"天外有天，人外有人"，很可能有人在这方面比你更厉害。你现在是第一，并不表示你永远都是第一。',py:'Dāng nǐ rènwéi zìjǐ zài nǎ fāngmiàn hěn yōuxiù shí, qiānwàn yào lěngjìng, búyào jiāo\'ào. Yīnwèi zhège shìjiè hěn dà, "tiān wài yǒu tiān, rén wài yǒu rén", hěn kěnéng yǒu rén zài zhè fāngmiàn bǐ nǐ gèng lìhai. Nǐ xiànzài shì dì-yī, bìng bù biǎoshì nǐ yǒngyuǎn dōu shì dì-yī.',vn:'Khi bạn cho rằng mình xuất sắc ở mặt nào, tuyệt đối phải bình tĩnh, đừng kiêu ngạo. Vì thế giới rất rộng, "ngoài trời còn có trời, ngoài người còn có người", rất có thể có người giỏi hơn bạn. Bạn hiện là số một, không có nghĩa mãi là số một.'},
     {sp:0,zh:'就像比赛一样，没有人会永远输，也没有人会一直赢。我们知道的越多，就会发现自己不懂的也越多。我们应该重视平时的积累，多向周围的人学习。',py:'Jiù xiàng bǐsài yíyàng, méiyǒu rén huì yǒngyuǎn shū, yě méiyǒu rén huì yìzhí yíng. Wǒmen zhīdào de yuè duō, jiù huì fāxiàn zìjǐ bù dǒng de yě yuè duō. Wǒmen yīnggāi zhòngshì píngshí de jīlěi, duō xiàng zhōuwéi de rén xuéxí.',vn:'Giống như thi đấu, không ai thua mãi, cũng không ai thắng mãi. Biết càng nhiều, càng phát hiện mình không hiểu càng nhiều. Chúng ta nên chú trọng tích lũy thường ngày, học hỏi người xung quanh.'},
     {sp:0,zh:'如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。',py:'Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, bìng bù shuōmíng zìjǐ bǐ biérén chà, xiāngfǎn, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.',vn:'Nếu bạn dám thành thật nói ra mình không hiểu mặt nào, không hề chứng tỏ bạn kém người khác, ngược lại, làm vậy càng được người khác tôn trọng.'},
   ]},
];

var matchData = [
  {left:'办',right:'办签证'},
  {left:'填写',right:'填写报名表格'},
  {left:'取得',right:'取得联系'},
  {left:'参观',right:'参观公司'},
  {left:'代表',right:'代表钱的多少'},
  {left:'当',right:'当导游'},
  {left:'挂在',right:'挂在嘴边'},
  {left:'推到',right:'推到"明天"'},
  {left:'找出',right:'找出重点'},
  {left:'得到',right:'得到别人的尊重'},
];

var fillData = [
  {pre:'我想出国读',blank:'',post:'，一直在准备办签证需要的材料。',hint:'bóshì',ans:'博士'},
  {pre:'下个星期我就要去使馆办',blank:'',post:'了，这可怎么办？',hint:'qiānzhèng',ans:'签证'},
  {pre:'还跟国外的大学取得了联系，填写了',blank:'',post:'表格。',hint:'bào míng',ans:'报名'},
  {pre:'他们把邀请信',blank:'',post:'给你了吗？',hint:'chuánzhēn',ans:'传真'},
  {pre:'谢谢您带我',blank:'',post:'您的公司。',hint:'cānguān',ans:'参观'},
  {pre:'这个问题以前一个',blank:'',post:'也问过我。',hint:'jìzhě',ans:'记者'},
  {pre:'我们用西瓜的大小',blank:'',post:'钱的多少。',hint:'dàibiǎo',ans:'代表'},
  {pre:'听完我的回答，',blank:'',post:'你已经知道我的答案了吧。',hint:'kǒngpà',ans:'恐怕'},
  {pre:'这次我父母又要',blank:'',post:'了。',hint:'shīwàng',ans:'失望'},
  {pre:'你',blank:'',post:'怎么打算的呀？',hint:'dàodǐ',ans:'到底'},
  {pre:'让我当',blank:'',post:'，我实在不好意思拒绝。',hint:'dǎoyóu',ans:'导游'},
  {pre:'他一定会',blank:'',post:'你的。',hint:'yuánliàng',ans:'原谅'},
  {pre:'不要把什么事情都',blank:'',post:'到"明天"。',hint:'tuī',ans:'推'},
  {pre:'首先要注意课前',blank:'',post:'。',hint:'yùxí',ans:'预习'},
  {pre:'千万要',blank:'',post:'，不要骄傲。',hint:'lěngjìng',ans:'冷静'},
];

var sortData = [
  {words:['你','马上','就','要','硕士','毕业','了','吧','？'],ans:'你马上就要硕士毕业了吧？',audio:'/audio/hsk4-bai-16/sort-1.mp3'},
  {words:['这','可','是','个','大','问题','，','我','也','不太','清楚'],ans:'这可是个大问题，我也不太清楚',audio:'/audio/hsk4-bai-16/sort-2.mp3'},
  {words:['咱们','一边','吃','西瓜','，','一边','聊'],ans:'咱们一边吃西瓜，一边聊',audio:'/audio/hsk4-bai-16/sort-3.mp3'},
  {words:['恐怕','你','已经','知道','我','的','答案','了','吧'],ans:'恐怕你已经知道我的答案了吧',audio:'/audio/hsk4-bai-16/sort-4.mp3'},
  {words:['你','到底','怎么','打算','的','呀','？'],ans:'你到底怎么打算的呀？',audio:'/audio/hsk4-bai-16/sort-5.mp3'},
  {words:['拒绝','并','不','表示','不','愿意','帮忙'],ans:'拒绝并不表示不愿意帮忙',audio:'/audio/hsk4-bai-16/sort-6.mp3'},
  {words:['就','拿','学','汉语','来说','吧','，','首先','要','注意','课前','预习'],ans:'就拿学汉语来说吧，首先要注意课前预习',audio:'/audio/hsk4-bai-16/sort-7.mp3'},
  {words:['没有','人','会','永远','输','，','也','没有','人','会','一直','赢'],ans:'没有人会永远输，也没有人会一直赢',audio:'/audio/hsk4-bai-16/sort-8.mp3'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'虽然得到别人的____很容易，但要重新让别人再相信你却很难。',
   opts:['同情','参观','原谅','郊区'],ans:2,
   exp:'原谅 (tha thứ) — 得到别人的原谅. Câu có 重新 (Bài 8), 却 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'爱批评人或者没有____心的人是最不受欢迎的，这样的人即使很成功，朋友也很少。',
   opts:['同情','参观','输','原谅'],ans:0,
   exp:'同情 (thông cảm) — 同情心 = lòng thương người. Câu có 批评 (Bài 15), 即使 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'各位朋友大家好！欢迎来到美丽的海南，这几天就由我带着大家____。',
   opts:['同情','参观','输','郊区'],ans:1,
   exp:'参观 (tham quan) — 带着大家参观. Câu có 由 (Bài 13), 美丽 (Bài 14). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'现在城市里越来越多的人喜欢到____过周末。他们想找一个空气新鲜、安静的地方好好放松一下。',
   opts:['参观','输','郊区','原谅'],ans:2,
   exp:'郊区 (ngoại ô) — 到郊区过周末. Câu có 越来越 (Bài 1), 放松 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'生活的关键就是：只要你努力做了，不管是____是赢，都一样精彩。',
   opts:['同情','参观','输','郊区'],ans:2,
   exp:'输 (thua) — 是输是赢. Câu có 关键 (Bài 10), 只要 (Bài 8), 不管……都 (Bài 3), 精彩 (Bài 11). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你们这个月空调卖得怎么样？B：不错，我们现在____出了"以旧换新"的活动，吸引了不少顾客。',
   opts:['报名','预习','推','号码'],ans:2,
   exp:'推 (tung ra) — 推出活动. Câu có 以……换 (Bài 14), 吸引 (Bài 6), 顾客 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：他什么时候能和我玩儿？B：等他____完课文再跟你玩儿，奶奶先陪你做游戏吧。',
   opts:['报名','预习','尊重','推'],ans:1,
   exp:'预习 (chuẩn bị bài) — 预习完课文. Câu có 等……再 (Bài 3), 陪 (Bài 3). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：我考虑了很久，还是决定离开现在的公司。B：既然这样，那我们____你的选择。',
   opts:['报名','预习','尊重','号码'],ans:2,
   exp:'尊重 (tôn trọng) — 尊重你的选择. Câu có 考虑 (Bài 3), 既然 (Bài 14). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：我记得上次关教授把他的手机____给我了，可是不知道写哪儿了。B：你当时好像写在本子上了，你看看上面有没有。',
   opts:['报名','预习','推','号码'],ans:3,
   exp:'号码 (số) — 手机号码. Câu có 教授 (Bài 12), 当时 (Bài 7). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：我想____参加一万米长跑比赛，你参加不参加？B：恐怕不行，我下星期要考试了。',
   opts:['报名','预习','尊重','推'],ans:0,
   exp:'报名 (đăng ký) — 报名参加比赛. Câu có 恐怕 (ngữ pháp bài). Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  intro:'Hãy dùng từ vựng và ngữ pháp của Bài 16 (kết hợp ngữ pháp các bài trước) để nói về kế hoạch, cơ hội và cách từ chối.',
  questions:[
    {q_zh:'上课前，你有预习的习惯吗？预习的时候一般会预习哪些内容？',q_vn:'Trước khi lên lớp bạn có thói quen chuẩn bị bài không? Thường chuẩn bị nội dung gì?',
     hint:'拿……来说；首先……其次……',
     sample:'有。拿学汉语来说，首先我会看生词，找出重点；其次读一遍课文；这样上课时就不会马虎了。',sample_vn:'Có. Lấy tiếng Trung mà nói, trước hết tôi xem từ mới, tìm trọng điểm; sau đó đọc bài khóa một lượt; như vậy lên lớp sẽ không lơ đễnh.',
     note:'拿……来说 (bài mới) + 首先/其次 (Bài 10) + 遍 (Bài 13).'},
    {q_zh:'你认为机会和努力，哪个对成功更重要？',q_vn:'Bạn cho rằng cơ hội và nỗ lực, cái nào quan trọng hơn với thành công?',
     hint:'恐怕……；只有……才……',
     sample:'我觉得努力更重要。没有努力，恐怕有机会也抓不住。只有重视平时的积累，机会来了才敢去试。',sample_vn:'Tôi thấy nỗ lực quan trọng hơn. Không nỗ lực, e rằng có cơ hội cũng không nắm được. Chỉ khi chú trọng tích lũy, cơ hội đến mới dám thử.',
     note:'恐怕/敢/重视 (bài mới) + 只有……才 (Bài 9).'},
    {q_zh:'你的好朋友向你借钱，可是你正准备结婚买房子，你会拒绝吗？',q_vn:'Bạn thân hỏi vay tiền nhưng bạn đang chuẩn bị cưới mua nhà, bạn có từ chối không?',
     hint:'既……又……；他一定会原谅……',
     sample:'我会用一个既合适又礼貌的方法告诉他我的困难。既然是好朋友，他一定会原谅我的。',sample_vn:'Tôi sẽ dùng cách vừa thích hợp vừa lịch sự nói với bạn về khó khăn của mình. Đã là bạn thân, họ nhất định sẽ thông cảm.',
     note:'礼貌/原谅 (bài mới) + 既……又 (Bài 7) + 既然 (Bài 14) + 合适 (Bài 15).'},
    {q_zh:'你到底想毕业后工作还是继续读书？为什么？',q_vn:'Rốt cuộc bạn muốn đi làm sau tốt nghiệp hay học tiếp? Vì sao?',
     hint:'到底……；先……然后再……',
     sample:'我到底想先工作两年，然后再读硕士。因为我想先积累一些经验，这样读书时重点更清楚。',sample_vn:'Rốt cuộc tôi muốn đi làm hai năm trước, rồi mới học thạc sĩ. Vì muốn tích lũy kinh nghiệm, như vậy khi học trọng điểm rõ hơn.',
     note:'到底/重点 (bài mới) + 先……然后再 (Bài 3) + 硕士 (Bài 9).'},
    {q_zh:'要是别人问你问题，可是你不会，你会觉得不好意思吗？',q_vn:'Nếu người khác hỏi mà bạn không biết, bạn có ngại không?',
     hint:'敢……；并不……，相反……',
     sample:'不会。我敢诚实地说"我不知道"。这并不说明我比别人差，相反，这样更能得到别人的尊重。',sample_vn:'Không. Tôi dám thành thật nói "tôi không biết". Điều này không chứng tỏ tôi kém, ngược lại, càng được tôn trọng.',
     note:'敢/尊重 (bài mới) + 并不 (Bài 4) + 相反 (Bài 12) + 诚实 (Bài 10).'},
  ]
};

var translateData = [
  {vi:'Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị tài liệu cần để làm visa.',zh:'我想出国读博士，一直在准备办签证需要的材料。',py:'Wǒ xiǎng chū guó dú bóshì, yìzhí zài zhǔnbèi bàn qiānzhèng xūyào de cáiliào.'},
  {vi:'Tuần sau tôi phải đến sứ quán làm visa rồi, thế này biết làm sao?',zh:'下个星期我就要去使馆办签证了，这可怎么办？',py:'Xià ge xīngqī wǒ jiù yào qù shǐguǎn bàn qiānzhèng le, zhè kě zěnme bàn?'},
  {vi:'Làm ăn tuy gặp đủ loại áp lực và khó khăn, nhưng cơ hội của mọi người đều như nhau.',zh:'做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。',py:'Zuò shēngyi shí suīrán huì yùdào gè zhǒng yālì hé kùnnan, dànshì dàjiā de jīhuì dōu shì xiāngtóng de.'},
  {vi:'Nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án của tôi rồi.',zh:'听完我的回答，恐怕你已经知道我的答案了吧。',py:'Tīngwán wǒ de huídá, kǒngpà nǐ yǐjīng zhīdào wǒ de dá\'àn le ba.'},
  {vi:'Thực ra từ chối không có nghĩa là không muốn giúp.',zh:'其实拒绝并不表示不愿意帮忙。',py:'Qíshí jùjué bìng bù biǎoshì bú yuànyì bāng máng.'},
  {vi:'Đừng đẩy mọi việc sang "ngày mai", tất cả hãy bắt đầu từ bây giờ.',zh:'不要把什么事情都推到"明天"，一切从现在做起。',py:'Búyào bǎ shénme shìqing dōu tuīdào "míngtiān", yíqiè cóng xiànzài zuòqǐ.'},
  {vi:'Chỉ cần như vậy, tiếng Trung sẽ càng học càng giỏi, càng nói càng tự tin.',zh:'只要这样，汉语就能越学越好，越说越自信。',py:'Zhǐyào zhèyàng, Hànyǔ jiù néng yuè xué yuè hǎo, yuè shuō yuè zìxìn.'},
  {vi:'Khi bạn cho rằng mình xuất sắc ở mặt nào đó, tuyệt đối phải bình tĩnh, đừng kiêu ngạo.',zh:'当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。',py:'Dāng nǐ rènwéi zìjǐ zài nǎ fāngmiàn hěn yōuxiù shí, qiānwàn yào lěngjìng, búyào jiāo\'ào.'},
];
var translateDataRev = [
  {vi:'Còn phải có thư mời của trường đại học nước ngoài chứ? Họ đã fax thư mời cho bạn chưa?',zh:'还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？',py:'Hái yīnggāi yǒu guówài dàxué gěi nǐ de yāoqǐngxìn ba? Tāmen bǎ yāoqǐngxìn chuánzhēn gěi nǐ le ma?'},
  {vi:'Trong quá trình tham quan tôi rất xúc động, có một câu hỏi luôn muốn hỏi ngài.',zh:'在参观过程中我很激动，有个问题一直想问您。',py:'Zài cānguān guòchéng zhōng wǒ hěn jīdòng, yǒu ge wèntí yìzhí xiǎng wèn nín.'},
  {vi:'Chúng ta lấy kích thước dưa hấu tượng trưng cho số tiền.',zh:'我们用西瓜的大小代表钱的多少。',py:'Wǒmen yòng xīguā de dàxiǎo dàibiǎo qián de duōshǎo.'},
  {vi:'Chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?',zh:'你不是已经买好火车票了吗？你到底怎么打算的呀？',py:'Nǐ bú shì yǐjīng mǎihǎo huǒchēpiào le ma? Nǐ dàodǐ zěnme dǎsuàn de ya?'},
  {vi:'Nếu bạn dùng cách vừa thích hợp vừa lịch sự nói với bạn bè, họ nhất định sẽ tha thứ cho bạn.',zh:'如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。',py:'Rúguǒ nǐ yòng yí ge jì héshì yòu lǐmào de fāngfǎ gàosu péngyou, tā yídìng huì yuánliàng nǐ de.'},
  {vi:'Có bạn thường treo "ngày mai" và "tương lai" trên miệng.',zh:'有些同学经常把"明天"和"将来"挂在嘴边。',py:'Yǒuxiē tóngxué jīngcháng bǎ "míngtiān" hé "jiānglái" guà zài zuǐ biān.'},
  {vi:'Giống như thi đấu, không ai thua mãi, cũng không ai thắng mãi.',zh:'就像比赛一样，没有人会永远输，也没有人会一直赢。',py:'Jiù xiàng bǐsài yíyàng, méiyǒu rén huì yǒngyuǎn shū, yě méiyǒu rén huì yìzhí yíng.'},
  {vi:'Nếu bạn dám thành thật nói ra mình không hiểu mặt nào, làm vậy càng được người khác tôn trọng.',zh:'如果你敢诚实地说出自己对哪方面不了解，这样做更能得到别人的尊重。',py:'Rúguǒ nǐ gǎn chéngshí de shuōchū zìjǐ duì nǎ fāngmiàn bù liǎojiě, zhèyàng zuò gèng néng dédào biérén de zūnzhòng.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-16/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-16/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-16/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'他知道怎么办签证。', judge:false, lines:[
      {pre:'办签证需要准备哪些材料，', blank:'我也不太清楚', post:'，不过我有大使馆的电话号码，我可以帮你问一下。',
       py:'Bàn qiānzhèng xūyào zhǔnbèi nǎxiē cáiliào, wǒ yě bú tài qīngchu, búguò wǒ yǒu dàshǐguǎn de diànhuà hàomǎ, wǒ kěyǐ bāng nǐ wèn yíxià.',
       vn:'Làm visa cần chuẩn bị những giấy tờ gì, tôi cũng không rõ lắm, nhưng tôi có số điện thoại của đại sứ quán, tôi có thể hỏi giúp bạn.'}]},
    {num:2, stmt:'护士工作前要通过考试。', judge:true, lines:[
      {pre:'', blank:'只有通过了考试，完全符合要求后', post:'，护士才能正式开始工作。医院对护士这一职业的要求是：专业、负责、尊重生命。',
       py:'Zhǐyǒu tōngguòle kǎoshì, wánquán fúhé yāoqiú hòu, hùshi cái néng zhèngshì kāishǐ gōngzuò. Yīyuàn duì hùshi zhè yì zhíyè de yāoqiú shì: zhuānyè, fùzé, zūnzhòng shēngmìng.',
       vn:'Chỉ khi thi đỗ, hoàn toàn đáp ứng yêu cầu, y tá mới được chính thức bắt đầu làm việc. Yêu cầu của bệnh viện với nghề y tá là: chuyên nghiệp, có trách nhiệm, tôn trọng sinh mệnh.'}]},
    {num:3, stmt:'他第一次见女朋友时很放松。', judge:false, lines:[
      {pre:'第一次跟女朋友见面的时候，', blank:'他紧张极了', post:'，脸和耳朵都红了，几乎不敢看女朋友的眼睛。',
       py:'Dì-yī cì gēn nǚpéngyou jiànmiàn de shíhou, tā jǐnzhāng jí le, liǎn hé ěrduo dōu hóng le, jīhū bù gǎn kàn nǚpéngyou de yǎnjing.',
       vn:'Lần đầu gặp bạn gái, anh ấy căng thẳng cực độ, mặt và tai đều đỏ lên, gần như không dám nhìn vào mắt bạn gái.'}]},
    {num:4, stmt:'那篇文章写得很精彩。', judge:false, lines:[
      {pre:'这篇文章你还得拿回去好好改改，', blank:'主要是内容有点儿乱，重点不够清楚', post:'，另外，有几个句子还有语法问题。',
       py:'Zhè piān wénzhāng nǐ hái děi ná huíqu hǎohāo gǎigai, zhǔyào shì nèiróng yǒudiǎnr luàn, zhòngdiǎn bú gòu qīngchu, lìngwài, yǒu jǐ ge jùzi hái yǒu yǔfǎ wèntí.',
       vn:'Bài viết này cậu phải mang về sửa lại cho kỹ, chủ yếu là nội dung hơi lộn xộn, trọng điểm chưa rõ, ngoài ra có vài câu còn lỗi ngữ pháp.'}]},
    {num:5, stmt:'做得不好时别失望。', judge:true, lines:[
      {pre:'受到批评时，也别伤心失望，', blank:'谁都有做错事或者做得不够好的时候', post:'。只要不放弃努力，你就仍然有希望。',
       py:'Shòudào pīpíng shí, yě bié shāngxīn shīwàng, shéi dōu yǒu zuòcuò shì huòzhě zuò de bú gòu hǎo de shíhou. Zhǐyào bú fàngqì nǔlì, nǐ jiù réngrán yǒu xīwàng.',
       vn:'Khi bị phê bình cũng đừng đau lòng thất vọng, ai cũng có lúc làm sai hoặc làm chưa đủ tốt. Chỉ cần không từ bỏ nỗ lực, bạn vẫn còn hy vọng.'}]}
  ],
  mc: [
    {num:6, options:['杂志','成绩单','报名表','传真'], ans:1, q:'男的找到什么了？',
     lines:[
       {speaker:'男', pre:'喂，姐，', blank:'我找到你的成绩单了', post:'，给你寄过去吗？', py:'Wèi, jiě, wǒ zhǎodào nǐ de chéngjìdān le, gěi nǐ jì guòqu ma?', vn:'Alô, chị, em tìm thấy bảng điểm của chị rồi, gửi qua cho chị nhé?'},
       {speaker:'女', pre:'你还是', blank:'发传真吧', post:'，我现在就要。', py:'Nǐ háishi fā chuánzhēn ba, wǒ xiànzài jiù yào.', vn:'Em gửi fax đi, chị cần ngay bây giờ.'}
     ],
     explain:'问：男的找到什么了？ "我找到你的成绩单了" → B 成绩单. 传真 chỉ là cách gửi.'},
    {num:7, options:['害怕失败','弹得不好','没有报名','没有时间'], ans:2, q:'女的为什么没参加比赛？',
     lines:[
       {speaker:'男', pre:'你钢琴弹得这么好，', blank:'怎么没去参加比赛呢', post:'？', py:'Nǐ gāngqín tán de zhème hǎo, zěnme méi qù cānjiā bǐsài ne?', vn:'Cậu chơi piano giỏi thế, sao không đi thi?'},
       {speaker:'女', pre:'', blank:'我错过了报名时间', post:'，只能等下次了。', py:'Wǒ cuòguòle bàomíng shíjiān, zhǐ néng děng xià cì le.', vn:'Tôi bỏ lỡ thời gian đăng ký rồi, đành đợi lần sau.'}
     ],
     explain:'问：女的为什么没参加比赛？ "错过了报名时间" → C 没有报名.'},
    {num:8, options:['睡不着','还有工作','在等人','在看小说'], ans:3, q:'女的为什么还不睡？',
     lines:[
       {speaker:'男', pre:'已经两点了，', blank:'你怎么还不睡觉', post:'？', py:'Yǐjīng liǎng diǎn le, nǐ zěnme hái bú shuìjiào?', vn:'Hai giờ rồi, sao em vẫn chưa ngủ?'},
       {speaker:'女', pre:'', blank:'这本小说还有几页', post:'，我想看看最后到底怎么样了。', py:'Zhè běn xiǎoshuō hái yǒu jǐ yè, wǒ xiǎng kànkan zuìhòu dàodǐ zěnmeyàng le.', vn:'Cuốn tiểu thuyết này còn vài trang, em muốn xem cuối cùng ra sao.'}
     ],
     explain:'问：女的为什么还不睡？ "这本小说还有几页" → D 在看小说.'},
    {num:9, options:['来宾馆','填表格','说很满意','写总结'], ans:1, q:'女的请男的做什么？',
     lines:[
       {speaker:'女', pre:'我们想了解一下客人对我们宾馆的服务是不是满意，', blank:'您只需要填个表格就行', post:'。', py:'Wǒmen xiǎng liǎojiě yíxià kèrén duì wǒmen bīnguǎn de fúwù shì bu shì mǎnyì, nín zhǐ xūyào tián ge biǎogé jiù xíng.', vn:'Chúng tôi muốn tìm hiểu khách có hài lòng với dịch vụ của khách sạn không, ông chỉ cần điền một biểu mẫu là được.'},
       {speaker:'男', pre:'好的，没问题，', blank:'希望表格不要太复杂', post:'。', py:'Hǎo de, méi wèntí, xīwàng biǎogé bú yào tài fùzá.', vn:'Được, không vấn đề, mong là biểu mẫu đừng quá phức tạp.'}
     ],
     explain:'问：女的请男的做什么？ "您只需要填个表格" → B 填表格.'},
    {num:10, options:['商店','学校','公司','饭馆'], ans:2, q:'对话最可能发生在哪儿？',
     lines:[
       {speaker:'女', pre:'小刘，', blank:'帮我把公司的这两页材料传真给李记者', post:'，他下周的一篇新闻里要用这些数字。', py:'Xiǎo Liú, bāng wǒ bǎ gōngsī de zhè liǎng yè cáiliào chuánzhēn gěi Lǐ jìzhě, tā xià zhōu de yì piān xīnwén li yào yòng zhèxiē shùzì.', vn:'Tiểu Lưu, fax giúp tôi hai trang tài liệu này của công ty cho phóng viên Lý, bài báo tuần sau của anh ấy cần dùng những số liệu này.'},
       {speaker:'男', pre:'好，我马上去。', blank:'他的传真号码是多少', post:'？', py:'Hǎo, wǒ mǎshàng qù. Tā de chuánzhēn hàomǎ shì duōshao?', vn:'Vâng, tôi đi ngay. Số fax của anh ấy là bao nhiêu?'}
     ],
     explain:'问：对话最可能发生在哪儿？ "公司的这两页材料" và việc fax tài liệu → C 公司.'},
    {num:11, options:['经历丰富','非常可怜','更会打扮','都很聪明'], ans:0, q:'十几岁就工作的人怎么样？',
     lines:[
       {speaker:'男', pre:'现在有的人二十多岁了还没学会照顾自己，', blank:'而有的人十几岁就开始工作，赚钱养家', post:'。', py:'Xiànzài yǒu de rén èrshí duō suì le hái méi xuéhuì zhàogù zìjǐ, ér yǒu de rén shí jǐ suì jiù kāishǐ gōngzuò, zhuàn qián yǎng jiā.', vn:'Bây giờ có người ngoài hai mươi vẫn chưa biết tự chăm sóc mình, còn có người mười mấy tuổi đã đi làm kiếm tiền nuôi gia đình.'},
       {speaker:'女', pre:'年龄大并不一定代表有能力，穷人的孩子早当家，他们也许没有很多钱，', blank:'却可能比富人家的孩子经历得更多', post:'。', py:'Niánlíng dà bìng bù yídìng dàibiǎo yǒu nénglì, qióngrén de háizi zǎo dāngjiā, tāmen yěxǔ méiyǒu hěn duō qián, què kěnéng bǐ fùrén jiā de háizi jīnglì de gèng duō.', vn:'Tuổi lớn không nhất định là có năng lực, con nhà nghèo sớm biết lo toan, họ có thể không nhiều tiền nhưng lại trải nghiệm nhiều hơn con nhà giàu.'}
     ],
     explain:'问：十几岁就工作的人怎么样？ "可能比富人家的孩子经历得更多" → A 经历丰富.'},
    {num:12, options:['力气很大','爱看小说','现在是记者','去过很多地方'], ans:3, q:'根据对话，可以知道女的的叔叔怎么样？',
     lines:[
       {speaker:'男', pre:'你叔叔太厉害了，他的书里写了那么多地方的景色，', blank:'这些地方他都去过吗', post:'？', py:'Nǐ shūshu tài lìhai le, tā de shū li xiěle nàme duō dìfang de jǐngsè, zhèxiē dìfang tā dōu qùguo ma?', vn:'Chú của cậu giỏi thật, sách của ông viết về cảnh sắc bao nhiêu nơi, những nơi đó ông đều đi qua rồi à?'},
       {speaker:'女', pre:'我叔叔以前是记者，因为职业的关系，', blank:'他几乎走遍了中国所有的地方', post:'，看到了很多美丽的景色，也认识了许多朋友，后来他就把自己的经历写成了一本书。', py:'Wǒ shūshu yǐqián shì jìzhě, yīnwèi zhíyè de guānxi, tā jīhū zǒubiànle Zhōngguó suǒyǒu de dìfang, kàndàole hěn duō měilì de jǐngsè, yě rènshile xǔduō péngyou, hòulái tā jiù bǎ zìjǐ de jīnglì xiěchéngle yì běn shū.', vn:'Chú tôi trước là phóng viên, vì nghề nghiệp nên gần như đi khắp Trung Quốc, thấy nhiều cảnh đẹp, quen nhiều bạn, sau đó ông viết trải nghiệm của mình thành một cuốn sách.'}
     ],
     explain:'问：可以知道女的的叔叔怎么样？ "几乎走遍了中国所有的地方" → D 去过很多地方. C sai vì "以前是记者".'},
    {num:13, options:['正在排队','忘了号码','没有带笔','要填表格'], ans:3, q:'关于男的，可以知道什么？',
     lines:[
       {speaker:'男', pre:'您好，', blank:'我想办一张信用卡', post:'。', py:'Nín hǎo, wǒ xiǎng bàn yì zhāng xìnyòngkǎ.', vn:'Chào cô, tôi muốn làm một thẻ tín dụng.'},
       {speaker:'女', pre:'办信用卡的话，', blank:'您得先填一下这张表格', post:'。', py:'Bàn xìnyòngkǎ de huà, nín děi xiān tián yíxià zhè zhāng biǎogé.', vn:'Làm thẻ tín dụng thì ông phải điền biểu mẫu này trước.'},
       {speaker:'男', pre:'好的，', blank:'填完以后是交给您吗', post:'？', py:'Hǎo de, tiánwán yǐhòu shì jiāo gěi nín ma?', vn:'Được, điền xong thì nộp cho cô à?'},
       {speaker:'女', pre:'不，填好后，', blank:'请到三号窗口排队就可以了', post:'。', py:'Bù, tiánhǎo hòu, qǐng dào sān hào chuāngkǒu páiduì jiù kěyǐ le.', vn:'Không, điền xong xin đến quầy số ba xếp hàng là được.'}
     ],
     explain:'问：关于男的，可以知道什么？ "您得先填一下这张表格" → D 要填表格. A sai vì chưa xếp hàng, mới được hướng dẫn.'},
    {num:14, options:['办公室','书房','厨房','门上'], ans:1, q:'男的想把画儿挂在哪儿？',
     lines:[
       {speaker:'女', pre:'', blank:'这是女儿专门给我们画的', post:'。', py:'Zhè shì nǚ\'ér zhuānmén gěi wǒmen huà de.', vn:'Đây là bức con gái vẽ riêng tặng chúng ta.'},
       {speaker:'男', pre:'这张画儿的景色实在太漂亮了！你看，', blank:'花草画得像真的一样', post:'。', py:'Zhè zhāng huàr de jǐngsè shízài tài piàoliang le! Nǐ kàn, huācǎo huà de xiàng zhēn de yíyàng.', vn:'Cảnh trong bức tranh đẹp thật! Em xem, hoa cỏ vẽ như thật.'},
       {speaker:'女', pre:'', blank:'我想把它挂起来', post:'，天天看。', py:'Wǒ xiǎng bǎ tā guà qilai, tiāntiān kàn.', vn:'Em muốn treo nó lên, ngày nào cũng ngắm.'},
       {speaker:'男', pre:'好主意，', blank:'就挂在书房的墙上吧', post:'。', py:'Hǎo zhǔyi, jiù guà zài shūfáng de qiáng shang ba.', vn:'Ý hay, treo lên tường phòng đọc sách đi.'}
     ],
     explain:'问：男的想把画儿挂在哪儿？ "挂在书房的墙上" → B 书房.'},
    {num:15, options:['坐地铁','坐出租车','自己开车','坐公共汽车'], ans:0, q:'男的打算怎么去机场？',
     lines:[
       {speaker:'女', pre:'我们', blank:'坐出租车去机场', post:'吧？', py:'Wǒmen zuò chūzūchē qù jīchǎng ba?', vn:'Mình đi taxi ra sân bay nhé?'},
       {speaker:'男', pre:'现在正是上下班时间，路上可堵了，', blank:'坐出租车去恐怕时间来不及', post:'。', py:'Xiànzài zhèng shì shàng xiàbān shíjiān, lù shang kě dǔ le, zuò chūzūchē qù kǒngpà shíjiān láibují.', vn:'Bây giờ đúng giờ đi làm tan làm, đường tắc lắm, đi taxi e là không kịp.'},
       {speaker:'女', pre:'那怎么办？', blank:'坐地铁去', post:'？', py:'Nà zěnme bàn? Zuò dìtiě qù?', vn:'Vậy làm sao? Đi tàu điện ngầm à?'},
       {speaker:'男', pre:'坐地铁应该来得及，', blank:'飞机还有两个半小时才起飞', post:'。', py:'Zuò dìtiě yīnggāi láidejí, fēijī hái yǒu liǎng ge bàn xiǎoshí cái qǐfēi.', vn:'Đi tàu điện ngầm chắc kịp, máy bay còn hai tiếng rưỡi nữa mới cất cánh.'}
     ],
     explain:'问：男的打算怎么去机场？ "坐地铁应该来得及" → A 坐地铁.'},
    {num:16, options:['裤子脏了','手机坏了','比赛输了','足球丢了'], ans:2, q:'男的为什么不高兴？',
     lines:[
       {speaker:'女', pre:'你怎么了？', blank:'什么事让你不高兴', post:'？', py:'Nǐ zěnme le? Shénme shì ràng nǐ bù gāoxìng?', vn:'Anh sao thế? Chuyện gì làm anh không vui?'},
       {speaker:'男', pre:'下午的足球比赛', blank:'我们班输了', post:'。', py:'Xiàwǔ de zúqiú bǐsài wǒmen bān shū le.', vn:'Trận bóng đá chiều nay lớp anh thua rồi.'},
       {speaker:'女', pre:'比赛总是有输有赢，', blank:'下次再努力', post:'。', py:'Bǐsài zǒngshì yǒu shū yǒu yíng, xià cì zài nǔlì.', vn:'Thi đấu có thua có thắng, lần sau cố gắng tiếp.'},
       {speaker:'男', pre:'就差一个球，', blank:'实在太可惜了', post:'。', py:'Jiù chà yí ge qiú, shízài tài kěxī le.', vn:'Chỉ kém một bàn, tiếc thật.'}
     ],
     explain:'问：男的为什么不高兴？ "我们班输了" → C 比赛输了.'},
    {num:17, options:['包','钥匙','塑料袋','书'], ans:1, q:'他们最可能在找什么？',
     lines:[
       {speaker:'男', pre:'你的包里没有？', blank:'是不是忘办公室了', post:'？', py:'Nǐ de bāo li méiyǒu? Shì bu shì wàng bàngōngshì le?', vn:'Trong túi em không có à? Có phải để quên ở văn phòng không?'},
       {speaker:'女', pre:'不会，', blank:'刚才是我开的门', post:'。', py:'Bú huì, gāngcái shì wǒ kāi de mén.', vn:'Không đâu, lúc nãy là em mở cửa mà.'},
       {speaker:'男', pre:'那你到底放哪儿了？', blank:'你再仔细找找', post:'。', py:'Nà nǐ dàodǐ fàng nǎr le? Nǐ zài zǐxì zhǎozhao.', vn:'Vậy rốt cuộc em để đâu? Tìm kỹ lại xem.'},
       {speaker:'女', pre:'我去门口看看，', blank:'是不是掉那儿了', post:'。', py:'Wǒ qù ménkǒu kànkan, shì bu shì diào nàr le.', vn:'Em ra cửa xem, có phải rơi ở đó không.'}
     ],
     explain:'问：他们最可能在找什么？ "刚才是我开的门…去门口看看" → thứ dùng để mở cửa là chìa khoá, đáp án B 钥匙.'},
    {num:18, options:['语言学','经济学','国际关系','环境科学'], ans:1, q:'女的读哪个专业？',
     lines:[
       {speaker:'男', pre:'见到你真高兴！', blank:'你已经硕士毕业了吧', post:'？', py:'Jiàndào nǐ zhēn gāoxìng! Nǐ yǐjīng shuòshì bìyè le ba?', vn:'Gặp cậu vui thật! Cậu tốt nghiệp thạc sĩ rồi phải không?'},
       {speaker:'女', pre:'是的，我去年就毕业了，但还没参加工作呢，', blank:'毕业后直接读博士了', post:'。', py:'Shì de, wǒ qùnián jiù bìyè le, dàn hái méi cānjiā gōngzuò ne, bìyè hòu zhíjiē dú bóshì le.', vn:'Đúng, năm ngoái tôi tốt nghiệp rồi, nhưng chưa đi làm, tốt nghiệp xong học thẳng tiến sĩ.'},
       {speaker:'男', pre:'还是', blank:'读经济学吗', post:'？', py:'Háishi dú jīngjìxué ma?', vn:'Vẫn học kinh tế học à?'},
       {speaker:'女', pre:'对，', blank:'研究方向是国际经济', post:'。', py:'Duì, yánjiū fāngxiàng shì guójì jīngjì.', vn:'Đúng, hướng nghiên cứu là kinh tế quốc tế.'}
     ],
     explain:'问：女的读哪个专业？ "还是读经济学吗？— 对" → B 经济学. C 国际关系 là bẫy gần với 国际经济.'},
    {num:19, options:['冰箱质量','买洗衣机','修理汽车','选择丈夫'], ans:3, q:'她们在谈什么？',
     lines:[
       {speaker:'旁白', pre:'母亲对女儿说："', blank:'选丈夫不能马虎，一定要考虑清楚', post:'。你看你爸，什么都会修，冰箱、洗衣机，连汽车坏了他都能修……"', py:'Mǔqīn duì nǚ\'ér shuō: "Xuǎn zhàngfu bù néng mǎhu, yídìng yào kǎolǜ qīngchu. Nǐ kàn nǐ bà, shénme dōu huì xiū, bīngxiāng, xǐyījī, lián qìchē huài le tā dōu néng xiū……"', vn:'Mẹ nói với con gái: "Chọn chồng không được qua loa, nhất định phải suy nghĩ kỹ. Con xem bố con, cái gì cũng biết sửa, tủ lạnh, máy giặt, đến ô tô hỏng ông ấy cũng sửa được…"'},
       {speaker:'旁白', pre:'没等母亲说完，女儿就说："我明白了！"没想到母亲接着说"你明白什么啊！', blank:'如果你也找个像你爸这样的丈夫，就别想用上新东西了', post:'。"', py:'Méi děng mǔqīn shuōwán, nǚ\'ér jiù shuō: "Wǒ míngbai le!" Méi xiǎngdào mǔqīn jiēzhe shuō "Nǐ míngbai shénme a! Rúguǒ nǐ yě zhǎo ge xiàng nǐ bà zhèyàng de zhàngfu, jiù bié xiǎng yòngshàng xīn dōngxi le."', vn:'Chưa đợi mẹ nói xong, con gái đã nói: "Con hiểu rồi!" Không ngờ mẹ nói tiếp: "Con hiểu gì chứ! Nếu con cũng lấy một người chồng như bố con, thì đừng mong được dùng đồ mới."'}
     ],
     explain:'问：她们在谈什么？ "选丈夫不能马虎" → D 选择丈夫. Sửa đồ chỉ là ví dụ minh hoạ.'},
    {num:20, options:['非常担心','爱修东西','不爱逛街','性格很好'], ans:1, q:'关于女孩儿的爸爸，可以知道什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）你看你爸，', blank:'什么都会修，冰箱、洗衣机，连汽车坏了他都能修', post:'……', py:'(Tóng yí duàn huà) Nǐ kàn nǐ bà, shénme dōu huì xiū, bīngxiāng, xǐyījī, lián qìchē huài le tā dōu néng xiū……', vn:'(Cùng đoạn văn) Con xem bố con, cái gì cũng biết sửa, tủ lạnh, máy giặt, đến ô tô hỏng cũng sửa được…'}
     ],
     explain:'问：关于女孩儿的爸爸，可以知道什么？ "什么都会修" → B 爱修东西.'},
    {num:21, options:['上五年级','不爱学习','成绩很好','在写作业'], ans:1, q:'关于王小帅，可以知道什么？',
     lines:[
       {speaker:'旁白', pre:'我弟弟叫王小帅，今年四年级。', blank:'他最大的特点是不爱学习', post:'，课前不预习，考前不复习，几乎没按时完成过作业。', py:'Wǒ dìdi jiào Wáng Xiǎoshuài, jīnnián sì niánjí. Tā zuì dà de tèdiǎn shì bú ài xuéxí, kè qián bú yùxí, kǎo qián bú fùxí, jīhū méi ànshí wánchéngguo zuòyè.', vn:'Em trai tôi tên Vương Tiểu Soái, năm nay lớp bốn. Đặc điểm lớn nhất của nó là không thích học, trước giờ học không xem bài, trước thi không ôn, hầu như chưa bao giờ làm bài tập đúng hạn.'},
       {speaker:'旁白', pre:'一天，他骄傲地对我说："哥，今天老师问了个问题，除了我，谁也答不出来！"我都不敢相信自己的耳朵，问他是什么问题，他说："', blank:'老师问：\'谁没交作业？\'', post:'"', py:'Yì tiān, tā jiāo\'ào de duì wǒ shuō: "Gē, jīntiān lǎoshī wènle ge wèntí, chúle wǒ, shéi yě dábuchūlái!" Wǒ dōu bù gǎn xiāngxìn zìjǐ de ěrduo, wèn tā shì shénme wèntí, tā shuō: "Lǎoshī wèn: \'Shéi méi jiāo zuòyè?\'"', vn:'Một hôm nó tự hào nói với tôi: "Anh ơi, hôm nay cô hỏi một câu, ngoài em ra chẳng ai trả lời được!" Tôi không dám tin vào tai mình, hỏi là câu gì, nó nói: "Cô hỏi: \'Ai chưa nộp bài tập?\'"'}
     ],
     explain:'问：关于王小帅，可以知道什么？ "他最大的特点是不爱学习" → B. A sai vì học lớp bốn.'},
    {num:22, options:['很怀疑','太吵了','被骗了','明白了'], ans:0, q:'说话人说"不敢相信自己的耳朵"是什么意思？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）"哥，今天老师问了个问题，除了我，谁也答不出来！"', blank:'我都不敢相信自己的耳朵', post:'，问他是什么问题。', py:'(Tóng yí duàn huà) "Gē, jīntiān lǎoshī wènle ge wèntí, chúle wǒ, shéi yě dábuchūlái!" Wǒ dōu bù gǎn xiāngxìn zìjǐ de ěrduo, wèn tā shì shénme wèntí.', vn:'(Cùng đoạn văn) "Anh ơi, hôm nay cô hỏi một câu, ngoài em ra chẳng ai trả lời được!" Tôi không dám tin vào tai mình, hỏi nó là câu gì.'}
     ],
     explain:'问："不敢相信自己的耳朵"是什么意思？ Nghe điều khó tin nên nghi ngờ → A 很怀疑.'}
  ]
};
