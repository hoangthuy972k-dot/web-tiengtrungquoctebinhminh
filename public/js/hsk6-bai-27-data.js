// ══════════════════════════════════════════
// DATA — HSK6 Bài 27: 完璧归赵 (Trả ngọc nguyên vẹn cho nước Triệu)
// 第七单元 经典阅读 · Nguồn: HSK标准教程6下 (tr. 71–80) + đáp án sách
// Bài khoá: 完璧归赵 (1114字) · 50 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'玉',py:'yù',pos:'Danh từ',vn:'ngọc, ngọc thạch',hv:'ngọc',em:'💎',lesson:1,
   explain:['Loại đá quý có vân đẹp, sáng bóng, dùng làm đồ trang sức hoặc đồ mỹ nghệ. Người Trung Quốc xưa rất quý ngọc, coi ngọc là biểu tượng của phẩm chất cao quý.','Lượng từ: 一块玉. Hay ghép: 宝玉 (ngọc quý), 玉器 (đồ ngọc), 玉石, 玉镯 (vòng ngọc). 璧 (bì) trong 和氏璧 là một loại ngọc dẹt, tròn, giữa có lỗ.'],
   usage:'一块 + 玉; 玉 + 器 / 石 / 镯子; 以城换玉; 宝玉; 温润如玉 (hiền hoà như ngọc — khen người).',
   collo:['一块玉','宝玉','玉器','以城换玉'],
   ex_zh:'秦以十五座城换一块玉，也算慷慨，并未亏待赵国。',ex_py:'Qín yǐ shíwǔ zuò chéng huàn yí kuài yù, yě suàn kāngkǎi, bìng wèi kuīdài Zhào guó.',ex_vn:'Nước Tần lấy mười lăm toà thành đổi một miếng ngọc, cũng coi như hào phóng, hoàn toàn không bạc đãi nước Triệu.',
   exList:[
     {zh:'不就是一块玉嘛，秦赵两国总不能为这点儿小事闹出隔阂，再起争端。',py:'Bú jiù shì yí kuài yù ma, Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān.',vn:'Chẳng qua chỉ là một miếng ngọc thôi mà, hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh ra bất hoà, lại gây tranh chấp.'},
     {zh:'奶奶手上那只玉镯子是外婆留给她的，她戴了几十年，一直舍不得摘下来。',py:'Nǎinai shǒu shang nà zhī yù zhuózi shì wàipó liú gěi tā de, tā dàile jǐ shí nián, yìzhí shěbude zhāi xiàlái.',vn:'Chiếc vòng ngọc trên tay bà nội là của cụ ngoại để lại cho bà, bà đeo mấy chục năm rồi mà vẫn không nỡ tháo ra.'},
     {zh:'中国人自古爱玉，常用“温润如玉”来形容一个人品格高尚。',py:'Zhōngguórén zìgǔ ài yù, cháng yòng "wēnrùn rú yù" lái xíngróng yí ge rén pǐngé gāoshàng.',vn:'Người Trung Quốc từ xưa đã yêu ngọc, thường dùng câu "hiền hoà như ngọc" để khen một người có phẩm cách cao quý.'}
   ],
   colloFull:[
     {zh:'一块玉',py:'yí kuài yù',vn:'một miếng ngọc'},
     {zh:'宝玉',py:'bǎoyù',vn:'ngọc quý'},
     {zh:'玉器',py:'yùqì',vn:'đồ ngọc'},
     {zh:'以城换玉',py:'yǐ chéng huàn yù',vn:'lấy thành đổi ngọc'},
     {zh:'玉镯子',py:'yù zhuózi',vn:'vòng tay ngọc'}
   ],
   patterns:[
     {s:'以 + A + 换 + 一块玉',m:'Lấy A đổi một miếng ngọc'},
     {s:'（温润）如玉',m:'(Hiền hoà) như ngọc — khen phẩm chất con người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc vòng ngọc này tuy không đắt, nhưng đối với bà nội lại vô cùng quý giá.',answer:'这只玉镯子虽然不贵，但是对奶奶来说却非常珍贵。',answerPy:'Zhè zhī yù zhuózi suīrán bú guì, dànshì duì nǎinai lái shuō què fēicháng zhēnguì.',
      note:'虽然……但是……却……: tuy … nhưng … lại …; 对……来说 = đối với … mà nói.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nước Tần muốn lấy mười lăm toà thành để đổi lấy miếng ngọc đó.',answer:'秦国想用十五座城来换那块玉。',answerPy:'Qín guó xiǎng yòng shíwǔ zuò chéng lái huàn nà kuài yù.',
      note:'用 + N + 来 + V = dùng … để …; 座 là lượng từ của thành, núi, cầu.',pair:'用……来……'}
   ]},

  {n:2,zh:'答复',py:'dáfù',pos:'Động từ',vn:'trả lời, phúc đáp',hv:'đáp phục',em:'📨',lesson:1,
   explain:['Trả lời (thường bằng văn bản hoặc chính thức) đối với câu hỏi, yêu cầu, đề nghị của người khác — trang trọng hơn 回答.','Vừa là động từ (答复秦王, 答复他们) vừa là danh từ (给我一个答复, 满意的答复). Dùng nhiều trong công việc, giao tiếp giữa tổ chức, nước với nước.'],
   usage:'答复 + người / yêu cầu; 给（某人）+ 一个答复; 立即 / 尽快 + 答复; 满意的答复; 书面答复.',
   collo:['答复秦王','立即答复','给个答复','满意的答复'],
   ex_zh:'赵王左右为难，不知如何答复秦王。',ex_py:'Zhào wáng zuǒyòu wéinán, bù zhī rúhé dáfù Qín wáng.',ex_vn:'Triệu vương tiến thoái lưỡng nan, không biết nên trả lời vua Tần thế nào.',
   exList:[
     {zh:'我没有立即答复他们，决定慎重地考虑考虑再说。',py:'Wǒ méiyǒu lìjí dáfù tāmen, juédìng shènzhòng de kǎolǜ kǎolǜ zài shuō.',vn:'Tôi không trả lời họ ngay, mà quyết định cân nhắc thận trọng rồi hẵng tính.'},
     {zh:'你提的建议学校已经收到了，下周会给你一个答复。',py:'Nǐ tí de jiànyì xuéxiào yǐjīng shōudào le, xià zhōu huì gěi nǐ yí ge dáfù.',vn:'Đề xuất em đưa ra nhà trường đã nhận được rồi, tuần sau sẽ trả lời em.'},
     {zh:'对于顾客的投诉，公司必须尽快答复，以免影响信誉。',py:'Duìyú gùkè de tóusù, gōngsī bìxū jǐnkuài dáfù, yǐmiǎn yǐngxiǎng xìnyù.',vn:'Đối với khiếu nại của khách hàng, công ty phải trả lời càng sớm càng tốt, để tránh ảnh hưởng đến uy tín.'}
   ],
   colloFull:[
     {zh:'答复秦王',py:'dáfù Qín wáng',vn:'trả lời vua Tần'},
     {zh:'立即答复',py:'lìjí dáfù',vn:'trả lời ngay'},
     {zh:'给个答复',py:'gěi ge dáfù',vn:'cho một câu trả lời'},
     {zh:'满意的答复',py:'mǎnyì de dáfù',vn:'câu trả lời thoả đáng'},
     {zh:'书面答复',py:'shūmiàn dáfù',vn:'trả lời bằng văn bản'}
   ],
   patterns:[
     {s:'不知（道）如何 + 答复 + 某人',m:'Không biết trả lời ai đó ra sao'},
     {s:'给 + 某人 + 一个（满意的）答复',m:'Cho ai đó một câu trả lời (thoả đáng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này tôi không thể trả lời bạn ngay được, đợi tôi bàn với bố mẹ đã.',answer:'这件事我不能马上答复你，等我跟父母商量商量再说。',answerPy:'Zhè jiàn shì wǒ bù néng mǎshàng dáfù nǐ, děng wǒ gēn fùmǔ shāngliang shāngliang zài shuō.',
      note:'……再说 = … rồi hẵng tính; động từ song âm lặp ABAB (商量商量) làm giọng nhẹ nhàng.',pair:'……再说'},
     {promptLang:'vi',prompt:'Chỉ cần bạn gửi thư xin, công ty sẽ trả lời trong vòng ba ngày.',answer:'只要你把申请寄过来，公司就会在三天之内答复你。',answerPy:'Zhǐyào nǐ bǎ shēnqǐng jì guòlái, gōngsī jiù huì zài sān tiān zhī nèi dáfù nǐ.',
      note:'只要……就……: chỉ cần … là …; 在……之内 = trong vòng ….',pair:'只要……就……'}
   ]},

  {n:3,zh:'得罪',py:'dézuì',pos:'Động từ',vn:'đắc tội, làm mất lòng, xúc phạm',hv:'đắc tội',em:'😬',lesson:1,
   explain:['Làm cho người khác không vui, bực mình, oán giận mình (thường do lời nói, việc làm không khéo) — có thể là vô tình.','Tân ngữ là người / tổ chức / nước: 得罪人, 得罪老板, 得罪秦国. Hay đi với 怕, 不敢, 不想, 生怕; cụm 得罪不起 = không dám động vào.'],
   usage:'得罪 + 人 / 某人; 怕 / 不敢 + 得罪 + 某人; 得罪了……; 得罪不起.',
   collo:['得罪秦国','得罪人','怕得罪','得罪不起'],
   ex_zh:'答应吧，怕上当受骗；不答应吧，又怕得罪秦国。',ex_py:'Dāying ba, pà shàngdàng shòupiàn; bù dāying ba, yòu pà dézuì Qín guó.',ex_vn:'Đồng ý thì sợ mắc lừa; không đồng ý thì lại sợ đắc tội với nước Tần.',
   exList:[
     {zh:'赵王不知如何答复秦王：不答应吧，又怕得罪秦国。',py:'Zhào wáng bù zhī rúhé dáfù Qín wáng: bù dāying ba, yòu pà dézuì Qín guó.',vn:'Triệu vương không biết trả lời vua Tần thế nào: không đồng ý thì lại sợ đắc tội với nước Tần.'},
     {zh:'他说话太直，不知不觉就得罪了不少人。',py:'Tā shuōhuà tài zhí, bùzhī-bùjué jiù dézuìle bù shǎo rén.',vn:'Anh ấy nói năng quá thẳng, bất giác đã làm mất lòng không ít người.'},
     {zh:'她生怕得罪同学，别人请她帮忙，她从来不好意思拒绝。',py:'Tā shēngpà dézuì tóngxué, biérén qǐng tā bāngmáng, tā cónglái bù hǎoyìsi jùjué.',vn:'Cô ấy rất sợ làm mất lòng bạn học, ai nhờ giúp việc gì cô ấy cũng chưa bao giờ dám từ chối.'}
   ],
   colloFull:[
     {zh:'得罪秦国',py:'dézuì Qín guó',vn:'đắc tội với nước Tần'},
     {zh:'得罪人',py:'dézuì rén',vn:'làm mất lòng người khác'},
     {zh:'怕得罪',py:'pà dézuì',vn:'sợ làm mất lòng'},
     {zh:'得罪不起',py:'dézuì bu qǐ',vn:'không dám đắc tội'},
     {zh:'得罪了老板',py:'dézuìle lǎobǎn',vn:'làm mất lòng sếp'}
   ],
   patterns:[
     {s:'怕 / 不敢 / 生怕 + 得罪 + 某人',m:'Sợ / không dám làm mất lòng ai'},
     {s:'V……吧，怕……；不V……吧，又怕得罪……',m:'Làm thì sợ …, không làm thì lại sợ mất lòng … (tiến thoái lưỡng nan)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói thật thì sợ làm bạn buồn, không nói thật thì lại thấy có lỗi với bạn.',answer:'说实话吧，怕得罪朋友；不说实话吧，又觉得对不起朋友。',answerPy:'Shuō shíhuà ba, pà dézuì péngyou; bù shuō shíhuà ba, yòu juéde duìbuqǐ péngyou.',
      note:'V吧，……；不V吧，又…… : diễn tả thế khó xử — y như câu bài khoá.',pair:'……吧，……；不……吧，又……'},
     {promptLang:'vi',prompt:'Tuy đã làm mất lòng thầy, nhưng cậu ấy không hề hối hận.',answer:'虽然得罪了老师，但是他一点儿也不后悔。',answerPy:'Suīrán dézuìle lǎoshī, dànshì tā yìdiǎnr yě bú hòuhuǐ.',
      note:'一点儿也不 + Adj/V = không … chút nào; 一 đọc yì trước diǎnr.',pair:'一点儿也不……'}
   ]},

  {n:4,zh:'大臣',py:'dàchén',pos:'Danh từ',vn:'đại thần, quan lớn trong triều',hv:'đại thần',em:'🧑‍⚖️',lesson:1,
   explain:['Quan chức cấp cao trong triều đình thời phong kiến, giúp vua bàn việc nước.','Hay đi với 召集 (triệu tập), 商议 (bàn bạc), 率领众臣. 众臣 = các đại thần. Hiện nay chỉ dùng khi kể chuyện lịch sử; thời nay nói 部长, 官员.'],
   usage:'召集 + 大臣; 大臣们 + 商议 / 提议; 命 + 大臣 + V; 朝中大臣.',
   collo:['召集大臣','朝中大臣','大臣们','命大臣'],
   ex_zh:'于是，赶忙召集大臣商议对策。',ex_py:'Yúshì, gǎnmáng zhàojí dàchén shāngyì duìcè.',ex_vn:'Thế là vội vàng triệu tập các đại thần bàn bạc đối sách.',
   exList:[
     {zh:'大臣们也没有好办法。有人提议，蔺相如见多识广，有勇有谋，可以听听他怎么说。',py:'Dàchénmen yě méiyǒu hǎo bànfǎ. Yǒu rén tíyì, Lìn Xiàngrú jiànduō-shíguǎng, yǒu yǒng yǒu móu, kěyǐ tīngting tā zěnme shuō.',vn:'Các đại thần cũng không có cách gì hay. Có người đề nghị: Lạn Tương Như hiểu biết rộng, có dũng có mưu, có thể nghe xem ông ấy nói thế nào.'},
     {zh:'秦王连忙说“别误会”，忙命大臣拿出地图。',py:'Qín wáng liánmáng shuō "bié wùhuì", máng mìng dàchén náchū dìtú.',vn:'Vua Tần vội vàng nói "đừng hiểu lầm", vội sai đại thần mang bản đồ ra.'},
     {zh:'在这部历史剧里，他演一位敢说真话的大臣，演得十分出色。',py:'Zài zhè bù lìshǐjù li, tā yǎn yí wèi gǎn shuō zhēnhuà de dàchén, yǎn de shífēn chūsè.',vn:'Trong bộ phim lịch sử này, anh ấy đóng vai một vị đại thần dám nói thẳng, diễn rất xuất sắc.'}
   ],
   colloFull:[
     {zh:'召集大臣',py:'zhàojí dàchén',vn:'triệu tập đại thần'},
     {zh:'朝中大臣',py:'cháo zhōng dàchén',vn:'đại thần trong triều'},
     {zh:'大臣们',py:'dàchénmen',vn:'các đại thần'},
     {zh:'命大臣',py:'mìng dàchén',vn:'sai / ra lệnh cho đại thần'},
     {zh:'一位大臣',py:'yí wèi dàchén',vn:'một vị đại thần'}
   ],
   patterns:[
     {s:'召集 + 大臣 + 商议 + 对策',m:'Triệu tập đại thần bàn đối sách'},
     {s:'（忙）命 + 大臣 + V',m:'(Vội) sai đại thần làm việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà vua triệu tập các đại thần, hỏi họ có cách gì hay không.',answer:'国王召集了大臣们，问他们有没有什么好办法。',answerPy:'Guówáng zhàojíle dàchénmen, wèn tāmen yǒu méiyǒu shénme hǎo bànfǎ.',
      note:'Câu hỏi chính phản (有没有) làm tân ngữ của 问 — không thêm 吗 ở cuối.',pair:'有没有 (câu hỏi chính phản)'},
     {promptLang:'vi',prompt:'Ngay cả các đại thần cũng không nghĩ ra được đối sách.',answer:'连大臣们也想不出对策来。',answerPy:'Lián dàchénmen yě xiǎng bu chū duìcè lái.',
      note:'连……也……: ngay cả … cũng …; 想不出……来 = bổ ngữ khả năng + xu hướng, tân ngữ chen giữa 出 và 来.',pair:'连……也……'}
   ]},

  {n:5,zh:'对策',py:'duìcè',pos:'Danh từ',vn:'đối sách, biện pháp đối phó',hv:'đối sách',em:'🧩',lesson:1,
   explain:['Cách, biện pháp dùng để đối phó với một tình huống, vấn đề hoặc đối thủ cụ thể.','Hay đi với 商议 / 研究 / 想出 / 制定 + 对策; 应对的对策. Khác 办法 ở chỗ 对策 luôn hướng tới "đối phó" một khó khăn cụ thể, sắc thái trang trọng hơn.'],
   usage:'商议 / 研究 / 想出 / 找到 + 对策; 有效的对策; 针对……的对策; 上有政策，下有对策 (tục ngữ).',
   collo:['商议对策','想出对策','有效的对策','研究对策'],
   ex_zh:'于是，赶忙召集大臣商议对策。',ex_py:'Yúshì, gǎnmáng zhàojí dàchén shāngyì duìcè.',ex_vn:'Thế là vội vàng triệu tập các đại thần bàn bạc đối sách.',
   exList:[
     {zh:'赵王左右为难，于是赶忙召集大臣商议对策。',py:'Zhào wáng zuǒyòu wéinán, yúshì gǎnmáng zhàojí dàchén shāngyì duìcè.',vn:'Triệu vương tiến thoái lưỡng nan, bèn vội vàng triệu tập đại thần bàn đối sách.'},
     {zh:'对手突然改变了打法，教练叫了暂停，和队员们一起研究对策。',py:'Duìshǒu tūrán gǎibiànle dǎfǎ, jiàoliàn jiàole zàntíng, hé duìyuánmen yìqǐ yánjiū duìcè.',vn:'Đối thủ đột nhiên thay đổi lối chơi, huấn luyện viên xin hội ý, cùng các cầu thủ nghiên cứu cách đối phó.'},
     {zh:'面对越来越严重的空气污染，政府必须尽快找到有效的对策。',py:'Miànduì yuè lái yuè yánzhòng de kōngqì wūrǎn, zhèngfǔ bìxū jǐnkuài zhǎodào yǒuxiào de duìcè.',vn:'Trước tình trạng ô nhiễm không khí ngày càng nghiêm trọng, chính phủ phải sớm tìm ra biện pháp đối phó hiệu quả.'}
   ],
   colloFull:[
     {zh:'商议对策',py:'shāngyì duìcè',vn:'bàn bạc đối sách'},
     {zh:'想出对策',py:'xiǎngchū duìcè',vn:'nghĩ ra cách đối phó'},
     {zh:'有效的对策',py:'yǒuxiào de duìcè',vn:'đối sách hiệu quả'},
     {zh:'研究对策',py:'yánjiū duìcè',vn:'nghiên cứu đối sách'},
     {zh:'应对的对策',py:'yìngduì de duìcè',vn:'biện pháp ứng phó'}
   ],
   patterns:[
     {s:'商议 / 研究 + 对策',m:'Bàn bạc / nghiên cứu cách đối phó'},
     {s:'针对 + 问题 + 制定 + 对策',m:'Đề ra đối sách nhắm vào vấn đề …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi tìm ra nguyên nhân thì mới có thể nghĩ ra đối sách hiệu quả.',answer:'只有找到原因，才能想出有效的对策。',answerPy:'Zhǐyǒu zhǎodào yuányīn, cái néng xiǎngchū yǒuxiào de duìcè.',
      note:'只有……才……: chỉ có … mới … (điều kiện duy nhất).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Trước kỳ thi, chúng tôi đã cùng nhau bàn cách đối phó với những đề khó.',answer:'考试前，我们一起商议了应对难题的对策。',answerPy:'Kǎoshì qián, wǒmen yìqǐ shāngyìle yìngduì nántí de duìcè.',
      note:'Định ngữ dài (应对难题的) đứng trước danh từ 对策 — tiếng Việt đảo ra sau.',pair:'Định ngữ + 的 + N'}
   ]},

  {n:6,zh:'提议',py:'tíyì',pos:'Động từ',vn:'đề nghị, đề xuất',hv:'đề nghị',em:'🙋',lesson:1,
   explain:['Đưa ra ý kiến, phương án để mọi người cùng bàn bạc, thảo luận (thường trong hội họp, tập thể).','Vừa là động từ (有人提议……) vừa là danh từ (大家同意了他的提议). Gần nghĩa 建议 nhưng 提议 nhấn việc "nêu ra để tập thể bàn / biểu quyết", hay dùng trong họp hành; 建议 dùng rộng hơn, cả lời khuyên cá nhân.'],
   usage:'（有人）提议 + 小句; 提议 + V (提议举杯); 某人的提议; 同意 / 接受 / 否决 + 提议.',
   collo:['有人提议','接受提议','他的提议','提议举杯'],
   ex_zh:'有人提议，蔺相如见多识广，有勇有谋，可以听听他怎么说。',ex_py:'Yǒu rén tíyì, Lìn Xiàngrú jiànduō-shíguǎng, yǒu yǒng yǒu móu, kěyǐ tīngting tā zěnme shuō.',ex_vn:'Có người đề nghị: Lạn Tương Như hiểu biết rộng, có dũng có mưu, có thể nghe xem ông ấy nói thế nào.',
   exList:[
     {zh:'为提高工作效率，小王提议把两个部门合并起来。',py:'Wèi tígāo gōngzuò xiàolǜ, Xiǎo Wáng tíyì bǎ liǎng ge bùmén hébìng qǐlái.',vn:'Để nâng cao hiệu suất làm việc, Tiểu Vương đề xuất sáp nhập hai phòng ban lại.'},
     {zh:'班长提议周末去爬山，全班同学都举手赞成。',py:'Bānzhǎng tíyì zhōumò qù páshān, quán bān tóngxué dōu jǔshǒu zànchéng.',vn:'Lớp trưởng đề nghị cuối tuần đi leo núi, cả lớp đều giơ tay tán thành.'},
     {zh:'他的提议虽然有道理，但是实施起来难度太大，最后被否决了。',py:'Tā de tíyì suīrán yǒu dàolǐ, dànshì shíshī qǐlái nándù tài dà, zuìhòu bèi fǒujué le.',vn:'Đề xuất của anh ấy tuy có lý nhưng khi thực hiện thì quá khó, cuối cùng đã bị bác bỏ.'}
   ],
   colloFull:[
     {zh:'有人提议',py:'yǒu rén tíyì',vn:'có người đề nghị'},
     {zh:'接受提议',py:'jiēshòu tíyì',vn:'chấp nhận đề nghị'},
     {zh:'他的提议',py:'tā de tíyì',vn:'đề nghị của anh ấy'},
     {zh:'提议举杯',py:'tíyì jǔbēi',vn:'đề nghị nâng ly'},
     {zh:'否决提议',py:'fǒujué tíyì',vn:'bác bỏ đề nghị'}
   ],
   patterns:[
     {s:'某人 + 提议 + 小句 / V',m:'Ai đó đề nghị (làm gì)'},
     {s:'同意 / 接受 / 否决 + 某人的提议',m:'Đồng ý / chấp nhận / bác bỏ đề nghị của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người đề nghị hoãn cuộc họp, nhưng thầy hiệu trưởng không đồng ý.',answer:'有人提议把会议推迟，可是校长不同意。',answerPy:'Yǒu rén tíyì bǎ huìyì tuīchí, kěshì xiàozhǎng bù tóngyì.',
      note:'Câu 把: 把 + tân ngữ + V + thành phần khác (推迟); 可是 nối ý chuyển.',pair:'把 + O + V'},
     {promptLang:'vi',prompt:'Đề nghị của cậu ấy được mọi người nhất trí thông qua.',answer:'他的提议被大家一致通过了。',answerPy:'Tā de tíyì bèi dàjiā yízhì tōngguò le.',
      note:'Câu bị động 被: chủ ngữ (提议) + 被 + người thực hiện + V + 了.',pair:'被 (câu bị động)'}
   ]},

  {n:7,zh:'请教',py:'qǐngjiào',pos:'Động từ',vn:'thỉnh giáo, xin chỉ bảo, hỏi ý kiến',hv:'thỉnh giáo',em:'🙏',lesson:1,
   explain:['Khiêm tốn hỏi người khác để xin chỉ dẫn, học hỏi — thể hiện sự tôn trọng người được hỏi.','Cấu trúc: 向 + người + 请教 (+ vấn đề); 请教 + người + vấn đề. Lời mở đầu lịch sự: 我想请教您一个问题. Không dùng cho người ít tuổi / kém hơn mình.'],
   usage:'向 + 某人 + 请教; 请教 + 某人 + 一个问题; 虚心请教; 亲自 + 请教.',
   collo:['向他请教','虚心请教','请教问题','亲自请教'],
   ex_zh:'赵王请来了蔺相如，并亲自向他请教。',ex_py:'Zhào wáng qǐngláile Lìn Xiàngrú, bìng qīnzì xiàng tā qǐngjiào.',ex_vn:'Triệu vương mời Lạn Tương Như đến và đích thân hỏi ý kiến ông.',
   exList:[
     {zh:'赵王请来了蔺相如，并亲自向他请教，蔺相如说：“秦强赵弱，凭实力，我们不答应不行。”',py:'Zhào wáng qǐngláile Lìn Xiàngrú, bìng qīnzì xiàng tā qǐngjiào, Lìn Xiàngrú shuō: "Qín qiáng Zhào ruò, píng shílì, wǒmen bù dāying bù xíng."',vn:'Triệu vương mời Lạn Tương Như đến, đích thân hỏi ý kiến ông. Lạn Tương Như nói: "Tần mạnh Triệu yếu, xét về thực lực, chúng ta không đồng ý không được."'},
     {zh:'这道题我想了半天也没想明白，只好去请教数学老师。',py:'Zhè dào tí wǒ xiǎngle bàntiān yě méi xiǎng míngbai, zhǐhǎo qù qǐngjiào shùxué lǎoshī.',vn:'Bài này tôi nghĩ mãi vẫn không hiểu, đành phải đi hỏi thầy dạy Toán.'},
     {zh:'他虽然已经是有名的厨师了，却仍然虚心向老前辈请教。',py:'Tā suīrán yǐjīng shì yǒumíng de chúshī le, què réngrán xūxīn xiàng lǎo qiánbèi qǐngjiào.',vn:'Tuy đã là đầu bếp nổi tiếng, anh ấy vẫn khiêm tốn học hỏi các bậc tiền bối.'}
   ],
   colloFull:[
     {zh:'向他请教',py:'xiàng tā qǐngjiào',vn:'xin ông ấy chỉ bảo'},
     {zh:'虚心请教',py:'xūxīn qǐngjiào',vn:'khiêm tốn thỉnh giáo'},
     {zh:'请教问题',py:'qǐngjiào wèntí',vn:'hỏi (xin chỉ giáo) vấn đề'},
     {zh:'亲自请教',py:'qīnzì qǐngjiào',vn:'đích thân hỏi ý kiến'},
     {zh:'请教老师',py:'qǐngjiào lǎoshī',vn:'hỏi thầy cô'}
   ],
   patterns:[
     {s:'向 + 某人 + 请教（+ 问题）',m:'Xin ai chỉ bảo (về vấn đề …)'},
     {s:'我想请教您一个问题',m:'Tôi muốn hỏi ông / bà một vấn đề (mở lời lịch sự)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp chỗ không hiểu, bạn nên khiêm tốn hỏi thầy cô, chứ đừng giả vờ hiểu.',answer:'遇到不懂的地方，你应该虚心向老师请教，而不要不懂装懂。',answerPy:'Yùdào bù dǒng de dìfang, nǐ yīnggāi xūxīn xiàng lǎoshī qǐngjiào, ér bú yào bù dǒng zhuāng dǒng.',
      note:'……，而不要…… = … chứ đừng …; 不懂装懂 = không hiểu mà làm ra vẻ hiểu.',pair:'……，而不是 / 而不要……'},
     {promptLang:'vi',prompt:'Bà ơi, cháu muốn hỏi bà một chuyện: món này nấu thế nào ạ?',answer:'奶奶，我想请教您一个问题：这道菜是怎么做的？',answerPy:'Nǎinai, wǒ xiǎng qǐngjiào nín yí ge wèntí: zhè dào cài shì zěnme zuò de?',
      note:'是……的 nhấn mạnh cách thức (怎么做的); dùng 您 khi nói với người lớn.',pair:'是……的'}
   ]},

  {n:8,zh:'实力',py:'shílì',pos:'Danh từ',vn:'thực lực, sức mạnh thực tế',hv:'thực lực',em:'💪',lesson:1,
   explain:['Sức mạnh, năng lực thực tế (về kinh tế, quân sự, kỹ thuật, trình độ…) của một người, một tổ chức hay một quốc gia.','Hay đi với: 凭 / 靠 + 实力; 实力雄厚 (thực lực hùng hậu); 经济实力, 军事实力; 实力相当 (ngang tài ngang sức); 有实力.'],
   usage:'凭 / 靠 + 实力 + V; 实力 + 雄厚 / 强 / 相当; 经济 / 军事 + 实力; 增强实力.',
   collo:['凭实力','实力雄厚','经济实力','实力相当'],
   ex_zh:'秦强赵弱，凭实力，我们不答应不行。',ex_py:'Qín qiáng Zhào ruò, píng shílì, wǒmen bù dāying bù xíng.',ex_vn:'Tần mạnh Triệu yếu, xét về thực lực, chúng ta không đồng ý không được.',
   exList:[
     {zh:'来人劝我说：“凭你的实力，几年之内，一定能升到副总的职位。”',py:'Lái rén quàn wǒ shuō: "Píng nǐ de shílì, jǐ nián zhī nèi, yídìng néng shēngdào fùzǒng de zhíwèi."',vn:'Người được cử đến khuyên tôi: "Với thực lực của anh, trong vòng vài năm chắc chắn có thể lên được chức phó tổng."'},
     {zh:'两支球队实力相当，比赛进行到最后一分钟才分出胜负。',py:'Liǎng zhī qiúduì shílì xiāngdāng, bǐsài jìnxíng dào zuìhòu yì fēnzhōng cái fēnchū shèngfù.',vn:'Hai đội bóng ngang tài ngang sức, trận đấu diễn ra đến phút cuối cùng mới phân thắng bại.'},
     {zh:'他不靠关系，完全是凭自己的实力考上这所名牌大学的。',py:'Tā bú kào guānxi, wánquán shì píng zìjǐ de shílì kǎoshàng zhè suǒ míngpái dàxué de.',vn:'Cậu ấy không dựa vào quan hệ, hoàn toàn bằng thực lực của mình mà đỗ vào trường đại học danh tiếng này.'}
   ],
   colloFull:[
     {zh:'凭实力',py:'píng shílì',vn:'dựa vào thực lực'},
     {zh:'实力雄厚',py:'shílì xiónghòu',vn:'thực lực hùng hậu'},
     {zh:'经济实力',py:'jīngjì shílì',vn:'sức mạnh kinh tế'},
     {zh:'实力相当',py:'shílì xiāngdāng',vn:'ngang tài ngang sức'},
     {zh:'增强实力',py:'zēngqiáng shílì',vn:'tăng cường thực lực'}
   ],
   patterns:[
     {s:'凭 / 靠 + （自己的）实力 + V',m:'Dựa vào thực lực (của mình) mà …'},
     {s:'A 和 B + 实力相当',m:'A và B ngang tài ngang sức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Với thực lực của cậu, chỉ cần bình tĩnh thì nhất định sẽ thi tốt.',answer:'凭你的实力，只要不紧张，就一定能考好。',answerPy:'Píng nǐ de shílì, zhǐyào bù jǐnzhāng, jiù yídìng néng kǎohǎo.',
      note:'凭 + N đặt đầu câu = dựa vào …; 只要……就…… = chỉ cần … là ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy đội họ thực lực mạnh hơn, nhưng chúng ta chưa chắc đã thua.',answer:'虽然他们队实力更强，但我们不一定会输。',answerPy:'Suīrán tāmen duì shílì gèng qiáng, dàn wǒmen bù yídìng huì shū.',
      note:'不一定 = chưa chắc; biến điệu: bù yídìng (一 trước thanh 4 đọc yí).',pair:'不一定'}
   ]},

  {n:9,zh:'慷慨',py:'kāngkǎi',pos:'Tính từ',vn:'hào phóng, rộng rãi; khảng khái',hv:'khảng khái',em:'🎁',lesson:1,
   explain:['Nghĩa 1 (trong bài): sẵn lòng đem tiền của cho người khác, không keo kiệt — "hào phóng, rộng rãi" (慷慨大方, 慷慨解囊).','Nghĩa 2: (lời nói, tinh thần) hăng hái, đầy nhiệt huyết chính nghĩa: 慷慨激昂 (hùng hồn), 慷慨陈词. Chú ý: "khảng khái" trong tiếng Việt thường là "cứng cỏi, không nhận ơn" — khác nghĩa 1.'],
   usage:'（很 / 也算）慷慨; 慷慨大方; 慷慨解囊 (hào phóng móc hầu bao giúp người); 对……很慷慨; 慷慨激昂.',
   collo:['也算慷慨','慷慨大方','慷慨解囊','对人慷慨'],
   ex_zh:'秦以十五座城换一块玉，也算慷慨，并未亏待赵国。',ex_py:'Qín yǐ shíwǔ zuò chéng huàn yí kuài yù, yě suàn kāngkǎi, bìng wèi kuīdài Zhào guó.',ex_vn:'Tần lấy mười lăm toà thành đổi một miếng ngọc, cũng coi như hào phóng, hoàn toàn không bạc đãi nước Triệu.',
   exList:[
     {zh:'而且我们老板很慷慨，一定不会亏待你。',py:'Érqiě wǒmen lǎobǎn hěn kāngkǎi, yídìng bú huì kuīdài nǐ.',vn:'Hơn nữa sếp chúng tôi rất hào phóng, nhất định sẽ không bạc đãi anh.'},
     {zh:'他自己过得很节俭，对需要帮助的人却十分慷慨。',py:'Tā zìjǐ guò de hěn jiéjiǎn, duì xūyào bāngzhù de rén què shífēn kāngkǎi.',vn:'Bản thân ông ấy sống rất tằn tiện, nhưng với những người cần giúp đỡ lại vô cùng hào phóng.'},
     {zh:'听说灾区缺水缺粮，许多市民慷慨解囊，一天就捐了上百万元。',py:'Tīngshuō zāiqū quē shuǐ quē liáng, xǔduō shìmín kāngkǎi jiěnáng, yì tiān jiù juānle shàng bǎi wàn yuán.',vn:'Nghe nói vùng thiên tai thiếu nước thiếu lương thực, nhiều người dân đã hào phóng quyên góp, chỉ một ngày đã góp hơn một triệu tệ.'}
   ],
   colloFull:[
     {zh:'也算慷慨',py:'yě suàn kāngkǎi',vn:'cũng coi là hào phóng'},
     {zh:'慷慨大方',py:'kāngkǎi dàfang',vn:'rộng rãi hào phóng'},
     {zh:'慷慨解囊',py:'kāngkǎi jiěnáng',vn:'hào phóng giúp đỡ tiền bạc'},
     {zh:'对人慷慨',py:'duì rén kāngkǎi',vn:'hào phóng với người khác'},
     {zh:'慷慨激昂',py:'kāngkǎi jī\'áng',vn:'hùng hồn, sục sôi'}
   ],
   patterns:[
     {s:'对 + 某人 + 很慷慨',m:'Hào phóng với ai'},
     {s:'……，也算慷慨',m:'…, cũng coi như hào phóng rồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông chủ không những trả lương cao mà còn đối xử rất hào phóng với nhân viên.',answer:'老板不但工资给得高，而且对员工十分慷慨。',answerPy:'Lǎobǎn búdàn gōngzī gěi de gāo, érqiě duì yuángōng shífēn kāngkǎi.',
      note:'不但……而且……: không những … mà còn …; bổ ngữ trạng thái V + 得 + Adj (给得高).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Cậu ta hào phóng như vậy, chẳng trách bạn bè ai cũng quý.',answer:'他这么慷慨，难怪朋友们都喜欢他。',answerPy:'Tā zhème kāngkǎi, nánguài péngyoumen dōu xǐhuan tā.',
      note:'难怪 = thảo nào, chẳng trách (đã hiểu ra nguyên nhân).',pair:'难怪'}
   ]},

  {n:10,zh:'亏待',py:'kuīdài',pos:'Động từ',vn:'bạc đãi, đối xử tệ, thiệt thòi cho',hv:'khuy đãi',em:'😞',lesson:1,
   explain:['Đối xử với người khác không công bằng, kém hơn mức đáng được hưởng — làm cho người ta chịu thiệt.','Hầu như luôn dùng ở dạng PHỦ ĐỊNH hoặc hứa hẹn: 不会亏待你, 并未亏待, 决不亏待. Hay nói trong lời hứa của cấp trên, người nhờ việc.'],
   usage:'（一定）不会 / 并未 / 决不 + 亏待 + 某人; 亏待不了 (không để thiệt được); 亏待自己.',
   collo:['不会亏待你','并未亏待','亏待自己','决不亏待'],
   ex_zh:'秦以十五座城换一块玉，也算慷慨，并未亏待赵国。',ex_py:'Qín yǐ shíwǔ zuò chéng huàn yí kuài yù, yě suàn kāngkǎi, bìng wèi kuīdài Zhào guó.',ex_vn:'Tần lấy mười lăm toà thành đổi một miếng ngọc, cũng coi như hào phóng, hoàn toàn không bạc đãi nước Triệu.',
   exList:[
     {zh:'而且我们老板很慷慨，一定不会亏待你。',py:'Érqiě wǒmen lǎobǎn hěn kāngkǎi, yídìng bú huì kuīdài nǐ.',vn:'Hơn nữa sếp chúng tôi rất hào phóng, nhất định sẽ không bạc đãi anh.'},
     {zh:'你帮了我这么大的忙，我怎么会亏待你呢？',py:'Nǐ bāngle wǒ zhème dà de máng, wǒ zěnme huì kuīdài nǐ ne?',vn:'Cậu giúp tớ một việc lớn thế này, sao tớ có thể để cậu chịu thiệt được?'},
     {zh:'工作再忙也要按时吃饭，千万别亏待了自己的身体。',py:'Gōngzuò zài máng yě yào ànshí chīfàn, qiānwàn bié kuīdàile zìjǐ de shēntǐ.',vn:'Công việc bận đến mấy cũng phải ăn uống đúng giờ, đừng bao giờ bạc đãi cơ thể mình.'}
   ],
   colloFull:[
     {zh:'不会亏待你',py:'bú huì kuīdài nǐ',vn:'sẽ không bạc đãi bạn'},
     {zh:'并未亏待',py:'bìng wèi kuīdài',vn:'hoàn toàn không bạc đãi'},
     {zh:'亏待自己',py:'kuīdài zìjǐ',vn:'bạc đãi bản thân'},
     {zh:'决不亏待',py:'jué bù kuīdài',vn:'quyết không bạc đãi'},
     {zh:'亏待不了',py:'kuīdài bu liǎo',vn:'không thể để thiệt được'}
   ],
   patterns:[
     {s:'（一定）不会 + 亏待 + 某人',m:'Chắc chắn không bạc đãi ai (lời hứa)'},
     {s:'再……也 + 别亏待 + 自己',m:'Dù … đến đâu cũng đừng bạc đãi bản thân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần các bạn làm việc chăm chỉ, công ty tuyệt đối sẽ không bạc đãi các bạn.',answer:'只要你们认真工作，公司绝对不会亏待你们。',answerPy:'Zhǐyào nǐmen rènzhēn gōngzuò, gōngsī juéduì bú huì kuīdài nǐmen.',
      note:'只要……就…… (ở đây 就 có thể lược); 绝对不会 = tuyệt đối không.',pair:'只要……（就）……'},
     {promptLang:'vi',prompt:'Dù bận đến mấy, cậu cũng đừng bạc đãi bản thân.',answer:'不管多忙，你都别亏待自己。',answerPy:'Bùguǎn duō máng, nǐ dōu bié kuīdài zìjǐ.',
      note:'不管 + 多 + Adj，都…… = dù … đến mấy cũng ….',pair:'不管……都……'}
   ]},

  {n:11,zh:'动身',py:'dòng shēn',pos:'Động từ',vn:'khởi hành, lên đường',hv:'động thân',em:'🧳',lesson:1,
   explain:['Bắt đầu rời đi để đến một nơi xa; lên đường (đi đường xa).','Là động từ LI HỢP (动 + 身): không mang tân ngữ trực tiếp — không nói 动身北京; nói 动身去北京 / 动身前往…. Có thể tách: 动了身, 动不了身. Hay đi với 即刻 / 马上 / 明天 + 动身.'],
   usage:'（即刻 / 马上）动身 + 去 / 前往 + nơi chốn; 什么时候动身?; 动身前 / 动身以后.',
   collo:['即刻动身','动身前往','明天动身','动身之前'],
   ex_zh:'那就请先生即刻动身前去磋商。',ex_py:'Nà jiù qǐng xiānsheng jíkè dòng shēn qiánqù cuōshāng.',ex_vn:'Vậy xin tiên sinh lập tức lên đường đến đó bàn bạc.',
   exList:[
     {zh:'赵王说：“那就请先生即刻动身前去磋商。”',py:'Zhào wáng shuō: "Nà jiù qǐng xiānsheng jíkè dòng shēn qiánqù cuōshāng."',vn:'Triệu vương nói: "Vậy xin tiên sinh lập tức lên đường sang đó bàn bạc."'},
     {zh:'我们明天一早就动身，争取中午以前赶到山顶。',py:'Wǒmen míngtiān yìzǎo jiù dòng shēn, zhēngqǔ zhōngwǔ yǐqián gǎndào shāndǐng.',vn:'Sáng sớm mai chúng ta lên đường, cố gắng trước trưa đến được đỉnh núi.'},
     {zh:'动身之前，妈妈一遍又一遍地嘱咐我路上要注意安全。',py:'Dòng shēn zhīqián, māma yí biàn yòu yí biàn de zhǔfù wǒ lùshang yào zhùyì ānquán.',vn:'Trước khi lên đường, mẹ dặn đi dặn lại tôi phải chú ý an toàn trên đường.'}
   ],
   colloFull:[
     {zh:'即刻动身',py:'jíkè dòng shēn',vn:'lập tức lên đường'},
     {zh:'动身前往',py:'dòng shēn qiánwǎng',vn:'lên đường đến'},
     {zh:'明天动身',py:'míngtiān dòng shēn',vn:'ngày mai khởi hành'},
     {zh:'动身之前',py:'dòng shēn zhīqián',vn:'trước khi lên đường'},
     {zh:'动不了身',py:'dòng bu liǎo shēn',vn:'không đi được'}
   ],
   patterns:[
     {s:'（即刻）动身 + 去 / 前往 + nơi chốn',m:'(Lập tức) lên đường đi …'},
     {s:'动身之前 / 以后，……',m:'Trước / sau khi lên đường, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu sáng mai trời mưa, chúng ta sẽ lên đường muộn một chút.',answer:'如果明天早上下雨，我们就晚一点儿动身。',answerPy:'Rúguǒ míngtiān zǎoshang xià yǔ, wǒmen jiù wǎn yìdiǎnr dòng shēn.',
      note:'如果……就……; Adj + 一点儿 + V = làm gì … hơn một chút (晚一点儿动身).',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Nhận được tin, anh ấy liền lập tức lên đường về quê.',answer:'一接到消息，他就马上动身回老家了。',answerPy:'Yì jiēdào xiāoxi, tā jiù mǎshàng dòng shēn huí lǎojiā le.',
      note:'一……就……: vừa … là …; 动身 không mang tân ngữ nơi chốn trực tiếp → 动身回老家.',pair:'一……就……'}
   ]},

  {n:12,zh:'磋商',py:'cuōshāng',pos:'Động từ',vn:'bàn bạc, trao đổi, đàm phán',hv:'tha thương',em:'🤝',lesson:1,
   explain:['Bàn bạc đi bàn bạc lại, trao đổi kỹ lưỡng để đi đến thống nhất — thường giữa hai bên (nước, công ty, tổ chức) về việc quan trọng.','Trang trọng hơn 商量 rất nhiều; hay dùng trong ngoại giao, kinh tế: 经过多次磋商, 与……进行磋商, 友好磋商. Không dùng cho việc vặt hằng ngày (không nói 我们磋商一下吃什么).'],
   usage:'与 / 同 + 某方 + 磋商; 就 + 问题 + 进行磋商; 经过（多次）磋商; 前去磋商; 友好磋商.',
   collo:['前去磋商','进行磋商','经过磋商','友好磋商'],
   ex_zh:'那就请先生即刻动身前去磋商。',ex_py:'Nà jiù qǐng xiānsheng jíkè dòng shēn qiánqù cuōshāng.',ex_vn:'Vậy xin tiên sinh lập tức lên đường đến đó bàn bạc.',
   exList:[
     {zh:'赵王请蔺相如即刻动身，前去秦国磋商。',py:'Zhào wáng qǐng Lìn Xiàngrú jíkè dòng shēn, qiánqù Qín guó cuōshāng.',vn:'Triệu vương mời Lạn Tương Như lập tức lên đường sang nước Tần đàm phán.'},
     {zh:'经过三个月的反复磋商，两家公司终于达成了合作协议。',py:'Jīngguò sān ge yuè de fǎnfù cuōshāng, liǎng jiā gōngsī zhōngyú dáchéngle hézuò xiéyì.',vn:'Sau ba tháng đàm phán đi đàm phán lại, hai công ty cuối cùng đã đạt được thoả thuận hợp tác.'},
     {zh:'两国领导人就边境问题进行了友好磋商。',py:'Liǎng guó lǐngdǎorén jiù biānjìng wèntí jìnxíngle yǒuhǎo cuōshāng.',vn:'Lãnh đạo hai nước đã tiến hành trao đổi hữu nghị về vấn đề biên giới.'}
   ],
   colloFull:[
     {zh:'前去磋商',py:'qiánqù cuōshāng',vn:'đến đó bàn bạc'},
     {zh:'进行磋商',py:'jìnxíng cuōshāng',vn:'tiến hành đàm phán'},
     {zh:'经过磋商',py:'jīngguò cuōshāng',vn:'qua bàn bạc'},
     {zh:'友好磋商',py:'yǒuhǎo cuōshāng',vn:'trao đổi hữu nghị'},
     {zh:'反复磋商',py:'fǎnfù cuōshāng',vn:'bàn đi bàn lại'}
   ],
   patterns:[
     {s:'A 与 B + 就 + 问题 + 进行磋商',m:'A và B tiến hành bàn bạc về vấn đề …'},
     {s:'经过（多次）磋商，……',m:'Qua (nhiều lần) đàm phán, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua nhiều lần bàn bạc, hai bên cuối cùng đã đạt được sự nhất trí.',answer:'经过多次磋商，双方终于达成了一致。',answerPy:'Jīngguò duō cì cuōshāng, shuāngfāng zhōngyú dáchéngle yízhì.',
      note:'经过 + quá trình，…… = trải qua …; 达成一致 = đạt được sự nhất trí (达成 — bài 5).',pair:'经过……，终于……'},
     {promptLang:'vi',prompt:'Việc này rất quan trọng, chúng ta phải bàn bạc với nhà trường rồi mới quyết định.',answer:'这件事很重要，我们得跟学校磋商以后再决定。',answerPy:'Zhè jiàn shì hěn zhòngyào, wǒmen děi gēn xuéxiào cuōshāng yǐhòu zài juédìng.',
      note:'……以后再…… = … rồi mới …; 得 đọc děi = phải.',pair:'……以后再……'}
   ]},

  {n:13,zh:'荣幸',py:'róngxìng',pos:'Tính từ',vn:'vinh dự, vinh hạnh, hân hạnh',hv:'vinh hạnh',em:'🏅',lesson:1,
   explain:['Cảm thấy vẻ vang, may mắn vì được nhận một việc, một cơ hội mà mình coi trọng — thường nói khiêm tốn về bản thân.','Mẫu hay dùng: 是我的荣幸; 很荣幸 + V (很荣幸认识您); 感到荣幸; 深感荣幸. Lời xã giao lịch sự, trang trọng.'],
   usage:'是 + 某人 + 的荣幸; （很 / 非常）荣幸 + V; 感到 / 深感 + 荣幸; 能……，我感到非常荣幸.',
   collo:['是我的荣幸','很荣幸','感到荣幸','深感荣幸'],
   ex_zh:'大王派我去，是我的荣幸。',ex_py:'Dàwáng pài wǒ qù, shì wǒ de róngxìng.',ex_vn:'Đại vương cử thần đi là vinh hạnh của thần.',
   exList:[
     {zh:'蔺相如说：“大王派我去，是我的荣幸。此去秦国，秦若是交了城，我便把璧留下。”',py:'Lìn Xiàngrú shuō: "Dàwáng pài wǒ qù, shì wǒ de róngxìng. Cǐ qù Qín guó, Qín ruòshì jiāole chéng, wǒ biàn bǎ bì liúxià."',vn:'Lạn Tương Như nói: "Đại vương cử thần đi là vinh hạnh của thần. Chuyến này sang Tần, nếu Tần giao thành, thần sẽ để ngọc lại."'},
     {zh:'很荣幸能代表全校同学在毕业典礼上发言。',py:'Hěn róngxìng néng dàibiǎo quán xiào tóngxué zài bìyè diǎnlǐ shang fāyán.',vn:'Em rất vinh dự được thay mặt toàn thể học sinh trong trường phát biểu tại lễ tốt nghiệp.'},
     {zh:'能和这么多优秀的人一起工作，我感到非常荣幸。',py:'Néng hé zhème duō yōuxiù de rén yìqǐ gōngzuò, wǒ gǎndào fēicháng róngxìng.',vn:'Được làm việc cùng nhiều người xuất sắc như vậy, tôi cảm thấy vô cùng vinh hạnh.'}
   ],
   colloFull:[
     {zh:'是我的荣幸',py:'shì wǒ de róngxìng',vn:'là vinh hạnh của tôi'},
     {zh:'很荣幸',py:'hěn róngxìng',vn:'rất vinh dự'},
     {zh:'感到荣幸',py:'gǎndào róngxìng',vn:'cảm thấy vinh dự'},
     {zh:'深感荣幸',py:'shēn gǎn róngxìng',vn:'vô cùng vinh hạnh'},
     {zh:'荣幸之至',py:'róngxìng zhī zhì',vn:'vinh hạnh vô cùng'}
   ],
   patterns:[
     {s:'能 + V……，是我的荣幸 / 我感到很荣幸',m:'Được làm …, là vinh hạnh của tôi'},
     {s:'很荣幸 + V（认识您 / 参加……）',m:'Rất hân hạnh được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rất hân hạnh được quen biết ông, mong sau này ông chỉ bảo nhiều hơn.',answer:'很荣幸认识您，希望以后您多多指教。',answerPy:'Hěn róngxìng rènshi nín, xīwàng yǐhòu nín duōduō zhǐjiào.',
      note:'Lời xã giao: 很荣幸认识您 / 多多指教 (xin chỉ giáo nhiều).',pair:'希望 + 小句'},
     {promptLang:'vi',prompt:'Được chọn làm đại biểu, cậu ấy vừa vinh dự vừa căng thẳng.',answer:'被选为代表，他既感到荣幸，又有点儿紧张。',answerPy:'Bèi xuǎnwéi dàibiǎo, tā jì gǎndào róngxìng, yòu yǒudiǎnr jǐnzhāng.',
      note:'既……又……: vừa … vừa …; 被选为 = được chọn làm.',pair:'既……又……'}
   ]},

  {n:14,zh:'转达',py:'zhuǎndá',pos:'Động từ',vn:'chuyển lời, chuyển đạt, chuyển giúp',hv:'chuyển đạt',em:'📣',lesson:1,
   explain:['Chuyển lời, ý kiến, lời hỏi thăm của một người đến người khác (mình làm trung gian).','Tân ngữ thường là 问候 / 意见 / 谢意 / 邀请: 转达问候, 转达谢意. Cấu trúc: 把……转达给 + 某人; 替 / 代 + 某人 + 转达. Trang trọng hơn 转告.'],
   usage:'转达 + 问候 / 意见 / 谢意; 把 + N + 转达给 + 某人; 替 + 某人 + 转达; 请代我转达…….',
   collo:['转达问候','转达给他','代为转达','转达谢意'],
   ex_zh:'蔺相如带着和氏璧到了秦国，转达了赵王的问候，把玉献给了秦王。',ex_py:'Lìn Xiàngrú dàizhe Héshì bì dàole Qín guó, zhuǎndále Zhào wáng de wènhòu, bǎ yù xiàn gěile Qín wáng.',ex_vn:'Lạn Tương Như mang ngọc họ Hoà đến nước Tần, chuyển lời hỏi thăm của Triệu vương, rồi dâng ngọc cho vua Tần.',
   exList:[
     {zh:'你对他诚挚的问候，我一定转达给他。',py:'Nǐ duì tā chéngzhì de wènhòu, wǒ yídìng zhuǎndá gěi tā.',vn:'Lời hỏi thăm chân thành của anh dành cho ông ấy, tôi nhất định sẽ chuyển tới ông ấy.'},
     {zh:'来人先转达了总经理的问候，然后又开始劝说。',py:'Lái rén xiān zhuǎndále zǒngjīnglǐ de wènhòu, ránhòu yòu kāishǐ quànshuō.',vn:'Người được cử đến trước hết chuyển lời hỏi thăm của tổng giám đốc, sau đó bắt đầu thuyết phục.'},
     {zh:'请代我向你父母转达我的谢意，谢谢他们这几天的照顾。',py:'Qǐng dài wǒ xiàng nǐ fùmǔ zhuǎndá wǒ de xièyì, xièxie tāmen zhè jǐ tiān de zhàogù.',vn:'Nhờ cậu chuyển lời cảm ơn của tớ tới bố mẹ cậu, cảm ơn hai bác đã chăm sóc mấy ngày qua.'}
   ],
   colloFull:[
     {zh:'转达问候',py:'zhuǎndá wènhòu',vn:'chuyển lời hỏi thăm'},
     {zh:'转达给他',py:'zhuǎndá gěi tā',vn:'chuyển tới anh ấy'},
     {zh:'代为转达',py:'dàiwéi zhuǎndá',vn:'thay mặt chuyển lời'},
     {zh:'转达谢意',py:'zhuǎndá xièyì',vn:'chuyển lời cảm ơn'},
     {zh:'转达意见',py:'zhuǎndá yìjiàn',vn:'chuyển ý kiến'}
   ],
   patterns:[
     {s:'把 + N + 转达给 + 某人',m:'Chuyển … tới ai'},
     {s:'请代我向 + 某人 + 转达 + 问候 / 谢意',m:'Nhờ chuyển giúp lời hỏi thăm / cảm ơn tới ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ý kiến của các bạn, tôi sẽ chuyển nguyên văn tới thầy hiệu trưởng.',answer:'你们的意见，我会原原本本地转达给校长。',answerPy:'Nǐmen de yìjiàn, wǒ huì yuányuánběnběn de zhuǎndá gěi xiàozhǎng.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề; 原原本本地 = nguyên vẹn, đầy đủ.',pair:'Câu chủ đề (tân ngữ lên đầu)'},
     {promptLang:'vi',prompt:'Nếu gặp cô Vương, nhờ bạn chuyển lời hỏi thăm của mình tới cô.',answer:'要是见到王老师，请替我向她转达问候。',answerPy:'Yàoshi jiàndào Wáng lǎoshī, qǐng tì wǒ xiàng tā zhuǎndá wènhòu.',
      note:'要是……（就）……: nếu … (khẩu ngữ); 替 + người = thay cho ai.',pair:'要是……'}
   ]},

  {n:15,zh:'爱不释手',py:'àibúshìshǒu',pos:'Thành ngữ',vn:'yêu thích đến mức cầm mãi không muốn buông',hv:'ái bất thích thủ',em:'🤲',lesson:1,
   explain:['爱 = yêu thích, 释 = buông ra, 手 = tay → thích quá, cầm trong tay mãi không nỡ buông. Dùng cho ĐỒ VẬT (sách, đồ chơi, quà, ngọc…), không dùng cho người.','Làm vị ngữ (对……爱不释手), trạng thái sau 得 (喜欢得爱不释手), hoặc sau chuỗi hành động (左看右看，爱不释手). Pinyin: 不 đọc bú vì đứng trước 释 (thanh 4).'],
   usage:'对 + N + 爱不释手; 看 / 拿 / 玩 + 得 + 爱不释手; 左看右看，爱不释手; 令人爱不释手.',
   collo:['对它爱不释手','让人爱不释手','拿在手里爱不释手','左看右看，爱不释手'],
   ex_zh:'秦王对着和氏璧左看右看，爱不释手。',ex_py:'Qín wáng duìzhe Héshì bì zuǒ kàn yòu kàn, àibúshìshǒu.',ex_vn:'Vua Tần cầm ngọc họ Hoà ngắm tới ngắm lui, thích quá không nỡ buông tay.',
   exList:[
     {zh:'秦王对着和氏璧左看右看，爱不释手，半天也不提换城之事。',py:'Qín wáng duìzhe Héshì bì zuǒ kàn yòu kàn, àibúshìshǒu, bàntiān yě bù tí huàn chéng zhī shì.',vn:'Vua Tần cầm ngọc họ Hoà ngắm tới ngắm lui, mê không rời tay, hồi lâu cũng không nhắc gì đến chuyện đổi thành.'},
     {zh:'这本漫画书太有意思了，弟弟拿到以后爱不释手，连吃饭都舍不得放下。',py:'Zhè běn mànhuàshū tài yǒu yìsi le, dìdi nádào yǐhòu àibúshìshǒu, lián chīfàn dōu shěbude fàngxià.',vn:'Cuốn truyện tranh này hay quá, em trai cầm được rồi thì mê tít không rời tay, ngay cả lúc ăn cơm cũng không nỡ đặt xuống.'},
     {zh:'妈妈对女儿亲手做的生日卡片爱不释手，一直放在床头。',py:'Māma duì nǚ\'ér qīnshǒu zuò de shēngrì kǎpiàn àibúshìshǒu, yìzhí fàng zài chuángtóu.',vn:'Mẹ quý tấm thiệp sinh nhật con gái tự tay làm đến mức cầm mãi không rời, luôn để ở đầu giường.'}
   ],
   colloFull:[
     {zh:'对它爱不释手',py:'duì tā àibúshìshǒu',vn:'thích nó đến mức không rời tay'},
     {zh:'让人爱不释手',py:'ràng rén àibúshìshǒu',vn:'khiến người ta mê không rời tay'},
     {zh:'拿在手里爱不释手',py:'ná zài shǒu li àibúshìshǒu',vn:'cầm trong tay không nỡ buông'},
     {zh:'左看右看，爱不释手',py:'zuǒ kàn yòu kàn, àibúshìshǒu',vn:'ngắm tới ngắm lui, không nỡ buông'},
     {zh:'喜欢得爱不释手',py:'xǐhuan de àibúshìshǒu',vn:'thích đến mức không rời tay'}
   ],
   patterns:[
     {s:'某人 + 对 + 物 + 爱不释手',m:'Ai đó thích vật gì đến mức không rời tay'},
     {s:'左看右看，爱不释手',m:'Ngắm tới ngắm lui, không nỡ buông (kết hợp điểm ngữ pháp 左……右……)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại mới vừa mua về, em gái đã mê không rời tay, ngắm tới ngắm lui.',answer:'新手机刚买回来，妹妹就爱不释手，左看看右看看。',answerPy:'Xīn shǒujī gāng mǎi huílái, mèimei jiù àibúshìshǒu, zuǒ kànkan yòu kànkan.',
      note:'刚……就……: vừa … đã …; 左看看右看看 = điểm ngữ pháp 左……右…… (练一练 ③).',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Món quà này đẹp đến mức khiến ai nhìn thấy cũng mê không rời tay.',answer:'这件礼物漂亮得让每个看到的人都爱不释手。',answerPy:'Zhè jiàn lǐwù piàoliang de ràng měi ge kàndào de rén dōu àibúshìshǒu.',
      note:'Adj + 得 + 让 + người + … : … đến mức khiến ai ….',pair:'Adj + 得 + 让……'}
   ]},

  {n:16,zh:'圈套',py:'quāntào',pos:'Danh từ',vn:'cái bẫy, mưu kế lừa người',hv:'khuyên sáo',em:'🪤',lesson:1,
   explain:['Nghĩa đen: vòng dây thòng lọng để bẫy; nghĩa thường dùng: mưu kế được bày sẵn để lừa người khác mắc vào.','Hay đi với: 设（下）圈套 (giăng bẫy), 中了圈套 / 落入圈套 / 钻进圈套 (mắc bẫy), 识破圈套 (nhìn thấu bẫy); 是个圈套.'],
   usage:'设（下）+ 圈套; 中（zhòng）/ 落入 / 钻进 + 圈套; 识破 + 圈套; ……果然是个圈套.',
   collo:['是个圈套','设下圈套','中了圈套','识破圈套'],
   ex_zh:'蔺相如等了半天不见秦王提换城之事，心想果然是个圈套。',ex_py:'Lìn Xiàngrú děngle bàntiān bú jiàn Qín wáng tí huàn chéng zhī shì, xīn xiǎng guǒrán shì ge quāntào.',ex_vn:'Lạn Tương Như đợi hồi lâu không thấy vua Tần nhắc chuyện đổi thành, trong lòng nghĩ quả nhiên là một cái bẫy.',
   exList:[
     {zh:'蔺相如心想果然是个圈套，可璧在秦王手里，怎么把璧拿回来呢？',py:'Lìn Xiàngrú xīn xiǎng guǒrán shì ge quāntào, kě bì zài Qín wáng shǒu li, zěnme bǎ bì ná huílái ne?',vn:'Lạn Tương Như nghĩ thầm quả nhiên là một cái bẫy, nhưng ngọc đang ở trong tay vua Tần, làm thế nào lấy lại được đây?'},
     {zh:'“中奖”短信其实是骗子设下的圈套，千万别点里面的链接。',py:'"Zhòngjiǎng" duǎnxìn qíshí shì piànzi shèxià de quāntào, qiānwàn bié diǎn lǐmiàn de liànjiē.',vn:'Tin nhắn "trúng thưởng" thực ra là cái bẫy do kẻ lừa đảo giăng ra, tuyệt đối đừng bấm vào đường link bên trong.'},
     {zh:'幸亏他头脑冷静，及时识破了对方的圈套，才没有上当。',py:'Xìngkuī tā tóunǎo lěngjìng, jíshí shípòle duìfāng de quāntào, cái méiyǒu shàngdàng.',vn:'May mà anh ấy đầu óc tỉnh táo, kịp thời nhìn thấu cái bẫy của đối phương, nên mới không bị mắc lừa.'}
   ],
   colloFull:[
     {zh:'是个圈套',py:'shì ge quāntào',vn:'là một cái bẫy'},
     {zh:'设下圈套',py:'shèxià quāntào',vn:'giăng bẫy'},
     {zh:'中了圈套',py:'zhòngle quāntào',vn:'mắc bẫy'},
     {zh:'识破圈套',py:'shípò quāntào',vn:'nhìn thấu cái bẫy'},
     {zh:'落入圈套',py:'luòrù quāntào',vn:'rơi vào bẫy'}
   ],
   patterns:[
     {s:'某人 + 设下圈套 + 骗 + 某人',m:'Ai giăng bẫy lừa ai'},
     {s:'（果然）是个圈套',m:'(Quả nhiên) là một cái bẫy'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'May mà cậu nhắc tớ, nếu không tớ đã mắc bẫy của bọn lừa đảo rồi.',answer:'幸亏你提醒我，要不然我就中了骗子的圈套了。',answerPy:'Xìngkuī nǐ tíxǐng wǒ, yàobùrán wǒ jiù zhòngle piànzi de quāntào le.',
      note:'幸亏……，要不然…… = may mà …, nếu không thì …; 中 đọc zhòng (trúng, mắc).',pair:'幸亏……，要不然……'},
     {promptLang:'vi',prompt:'Chẳng lẽ đây lại là một cái bẫy sao?',answer:'莫非这又是一个圈套不成？',answerPy:'Mòfēi zhè yòu shì yí ge quāntào bùchéng?',
      note:'莫非……不成? = chẳng lẽ … sao? (điểm ngữ pháp 2 của bài: 不成 cuối câu).',pair:'莫非……不成'}
   ]},

  {n:17,zh:'归还',py:'guīhuán',pos:'Động từ',vn:'trả lại, hoàn trả',hv:'quy hoàn',em:'↩️',lesson:1,
   explain:['Trả lại đồ vật, tiền bạc đã mượn hoặc đã lấy cho chủ cũ — trang trọng hơn 还 (huán).','Cấu trúc: 把 + N + 归还给 + 某人; 归还于 + 某人 (văn viết cổ, như trong bài: 归还于我); 按时归还, 如数归还 (trả đủ số), 物归原主.'],
   usage:'把 + N + 归还给 / 于 + 某人; 按时 / 如数 + 归还; 归还 + 图书 / 借款 / 失物.',
   collo:['归还于我','按时归还','如数归还','归还失物'],
   ex_zh:'这璧有点儿小毛病，请大王把璧归还于我，我指给大王看。',ex_py:'Zhè bì yǒudiǎnr xiǎo máobìng, qǐng dàwáng bǎ bì guīhuán yú wǒ, wǒ zhǐ gěi dàwáng kàn.',ex_vn:'Miếng ngọc này có chút tì vết nhỏ, xin đại vương trả ngọc lại cho thần, thần chỉ cho đại vương xem.',
   exList:[
     {zh:'左思右想之后，他对秦王说：“这璧有点儿小毛病，请大王把璧归还于我，我指给大王看。”',py:'Zuǒ sī yòu xiǎng zhīhòu, tā duì Qín wáng shuō: "Zhè bì yǒudiǎnr xiǎo máobìng, qǐng dàwáng bǎ bì guīhuán yú wǒ, wǒ zhǐ gěi dàwáng kàn."',vn:'Sau khi nghĩ tới nghĩ lui, ông nói với vua Tần: "Miếng ngọc này có chút tì vết nhỏ, xin đại vương đưa lại cho thần, thần chỉ cho đại vương xem."'},
     {zh:'从图书馆借的书，请在两周之内按时归还。',py:'Cóng túshūguǎn jiè de shū, qǐng zài liǎng zhōu zhī nèi ànshí guīhuán.',vn:'Sách mượn từ thư viện, xin hãy trả đúng hạn trong vòng hai tuần.'},
     {zh:'他在公交车上捡到一个钱包，想方设法找到失主，把钱包如数归还了。',py:'Tā zài gōngjiāochē shang jiǎndào yí ge qiánbāo, xiǎngfāng-shèfǎ zhǎodào shīzhǔ, bǎ qiánbāo rúshù guīhuán le.',vn:'Anh ấy nhặt được một chiếc ví trên xe buýt, tìm mọi cách tìm ra người đánh mất và trả lại chiếc ví không thiếu một đồng.'}
   ],
   colloFull:[
     {zh:'归还于我',py:'guīhuán yú wǒ',vn:'trả lại cho tôi'},
     {zh:'按时归还',py:'ànshí guīhuán',vn:'trả đúng hạn'},
     {zh:'如数归还',py:'rúshù guīhuán',vn:'trả lại đủ số'},
     {zh:'归还失物',py:'guīhuán shīwù',vn:'trả lại đồ đánh rơi'},
     {zh:'归还给主人',py:'guīhuán gěi zhǔrén',vn:'trả lại cho chủ'}
   ],
   patterns:[
     {s:'把 + N + 归还给 / 于 + 某人',m:'Trả … lại cho ai'},
     {s:'按时 / 如数 + 归还',m:'Trả đúng hạn / trả đủ số'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ô mượn của bạn, tớ phải trả lại cho bạn trước thứ Sáu.',answer:'借你的伞，我得在星期五以前归还给你。',answerPy:'Jiè nǐ de sǎn, wǒ děi zài xīngqīwǔ yǐqián guīhuán gěi nǐ.',
      note:'在 + thời điểm + 以前 = trước …; 得 (děi) = phải.',pair:'在……以前'},
     {promptLang:'vi',prompt:'Nếu không trả sách đúng hạn, bạn sẽ không được mượn sách nữa.',answer:'如果不按时归还图书，你就不能再借书了。',answerPy:'Rúguǒ bú ànshí guīhuán túshū, nǐ jiù bù néng zài jiè shū le.',
      note:'如果……就……; 不能再……了 = không được … nữa.',pair:'如果……就……'}
   ]},


  {n:18,zh:'从容',py:'cóngróng',pos:'Tính từ',vn:'ung dung, điềm tĩnh, thong thả',hv:'thung dung',em:'🧘',lesson:1,
   explain:['Nghĩa 1: bình tĩnh, không vội vàng, không hoảng hốt (dù gặp tình huống căng thẳng): 从容不迫, 从容地站在殿中央, 从容应对.','Nghĩa 2: (thời gian, tiền bạc) dư dả, không gấp: 时间很从容. Hay làm trạng ngữ + 地: 从容地 + V.'],
   usage:'从容 + 地 + V; 从容不迫 (thong dong không vội); 从容应对; 神态从容; 时间 / 手头 + 从容.',
   collo:['从容地站着','从容不迫','从容应对','时间从容'],
   ex_zh:'蔺相如从容地站在殿中央，手抱和氏璧。',ex_py:'Lìn Xiàngrú cóngróng de zhàn zài diàn zhōngyāng, shǒu bào Héshì bì.',ex_vn:'Lạn Tương Như ung dung đứng giữa đại điện, tay ôm ngọc họ Hoà.',
   exList:[
     {zh:'秦王把璧递给蔺相如。蔺相如从容地站在殿中央，手抱和氏璧说话。',py:'Qín wáng bǎ bì dì gěi Lìn Xiàngrú. Lìn Xiàngrú cóngróng de zhàn zài diàn zhōngyāng, shǒu bào Héshì bì shuōhuà.',vn:'Vua Tần đưa ngọc cho Lạn Tương Như. Lạn Tương Như ung dung đứng giữa đại điện, tay ôm ngọc họ Hoà mà nói.'},
     {zh:'面对评委的提问，她一点儿也不紧张，从容不迫地一一作了回答。',py:'Miànduì píngwěi de tíwèn, tā yìdiǎnr yě bù jǐnzhāng, cóngróng-búpò de yīyī zuòle huídá.',vn:'Trước câu hỏi của ban giám khảo, cô ấy không hề căng thẳng, ung dung trả lời từng câu một.'},
     {zh:'早点儿出门吧，时间从容一些，路上就不用那么着急了。',py:'Zǎodiǎnr chūmén ba, shíjiān cóngróng yìxiē, lùshang jiù búyòng nàme zháojí le.',vn:'Ra khỏi nhà sớm một chút đi, thời gian dư dả một chút thì trên đường không phải vội vàng như thế.'}
   ],
   colloFull:[
     {zh:'从容地站着',py:'cóngróng de zhànzhe',vn:'ung dung đứng'},
     {zh:'从容不迫',py:'cóngróng-búpò',vn:'thong dong không vội'},
     {zh:'从容应对',py:'cóngróng yìngduì',vn:'bình tĩnh ứng phó'},
     {zh:'时间从容',py:'shíjiān cóngróng',vn:'thời gian dư dả'},
     {zh:'神态从容',py:'shéntài cóngróng',vn:'vẻ mặt điềm tĩnh'}
   ],
   patterns:[
     {s:'从容（不迫）+ 地 + V',m:'Ung dung (không vội) làm gì'},
     {s:'面对……，从容应对',m:'Trước …, bình tĩnh ứng phó'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp phải câu hỏi khó đến đâu, cậu ấy cũng đều bình tĩnh ứng phó.',answer:'无论遇到多难的问题，他都能从容应对。',answerPy:'Wúlùn yùdào duō nán de wèntí, tā dōu néng cóngróng yìngduì.',
      note:'无论 + 多 + Adj……，都…… = dù … đến đâu cũng ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Chỉ khi chuẩn bị đầy đủ, lúc thi mới có thể ung dung được.',answer:'只有准备充分，考试的时候才能从容不迫。',answerPy:'Zhǐyǒu zhǔnbèi chōngfèn, kǎoshì de shíhou cái néng cóngróng-búpò.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'}
   ]},

  {n:19,zh:'中央',py:'zhōngyāng',pos:'Danh từ',vn:'giữa, trung tâm; trung ương',hv:'trung ương',em:'🎯',lesson:1,
   explain:['Nghĩa 1 (trong bài): vị trí chính giữa: 殿中央 (giữa đại điện), 广场中央, 湖中央.','Nghĩa 2: cơ quan lãnh đạo cao nhất của nhà nước / tổ chức: 中央政府, 中央电视台. Khác 中间: 中央 chỉ "chính giữa một không gian", trang trọng hơn; 中间 dùng rộng (giữa hai vật, giữa thời gian).'],
   usage:'（在）+ 地方 + 中央; 站在 / 位于 + ……中央; 中央 + 政府 / 电视台 / 银行.',
   collo:['殿中央','广场中央','站在中央','中央政府'],
   ex_zh:'蔺相如从容地站在殿中央，手抱和氏璧说……',ex_py:'Lìn Xiàngrú cóngróng de zhàn zài diàn zhōngyāng, shǒu bào Héshì bì shuō……',ex_vn:'Lạn Tương Như ung dung đứng giữa đại điện, tay ôm ngọc họ Hoà mà nói…',
   exList:[
     {zh:'蔺相如从容地站在殿中央，手抱和氏璧说：“大王派人到赵国，说用十五座城换赵国的璧。”',py:'Lìn Xiàngrú cóngróng de zhàn zài diàn zhōngyāng, shǒu bào Héshì bì shuō: "Dàwáng pài rén dào Zhào guó, shuō yòng shíwǔ zuò chéng huàn Zhào guó de bì."',vn:'Lạn Tương Như ung dung đứng giữa đại điện, tay ôm ngọc họ Hoà nói: "Đại vương sai người đến nước Triệu, nói dùng mười lăm toà thành đổi ngọc của nước Triệu."'},
     {zh:'广场中央有一座高大的雕塑，是这座城市的标志。',py:'Guǎngchǎng zhōngyāng yǒu yí zuò gāodà de diāosù, shì zhè zuò chéngshì de biāozhì.',vn:'Giữa quảng trường có một bức tượng cao lớn, là biểu tượng của thành phố này.'},
     {zh:'湖中央有一个小岛，只有坐船才能过去。',py:'Hú zhōngyāng yǒu yí ge xiǎo dǎo, zhǐyǒu zuò chuán cái néng guòqù.',vn:'Giữa hồ có một hòn đảo nhỏ, chỉ có đi thuyền mới sang được.'}
   ],
   colloFull:[
     {zh:'殿中央',py:'diàn zhōngyāng',vn:'giữa đại điện'},
     {zh:'广场中央',py:'guǎngchǎng zhōngyāng',vn:'giữa quảng trường'},
     {zh:'站在中央',py:'zhàn zài zhōngyāng',vn:'đứng ở chính giữa'},
     {zh:'中央政府',py:'zhōngyāng zhèngfǔ',vn:'chính phủ trung ương'},
     {zh:'舞台中央',py:'wǔtái zhōngyāng',vn:'giữa sân khấu'}
   ],
   patterns:[
     {s:'（站 / 坐 / 位于）+ 在 + 地方 + 中央',m:'(Đứng / ngồi / nằm) ở chính giữa …'},
     {s:'地方 + 中央 + 有 + N',m:'Chính giữa … có … (câu tồn hiện)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính giữa sân trường có một cây cổ thụ, nghe nói đã hơn một trăm năm tuổi.',answer:'校园中央有一棵老树，听说已经一百多岁了。',answerPy:'Xiàoyuán zhōngyāng yǒu yì kē lǎo shù, tīngshuō yǐjīng yìbǎi duō suì le.',
      note:'Câu tồn hiện: nơi chốn + 有 + N; 一百多 = hơn một trăm.',pair:'Câu tồn hiện 有'},
     {promptLang:'vi',prompt:'Cô ấy đứng giữa sân khấu, vừa hát vừa nhảy.',answer:'她站在舞台中央，一边唱一边跳。',answerPy:'Tā zhàn zài wǔtái zhōngyāng, yìbiān chàng yìbiān tiào.',
      note:'V + 在 + nơi chốn; 一边……一边…… = vừa … vừa ….',pair:'一边……一边……'}
   ]},

  {n:20,zh:'兑现',py:'duìxiàn',pos:'Động từ',vn:'thực hiện (lời hứa), giữ lời; đổi thành tiền mặt',hv:'đoái hiện',em:'✅',lesson:1,
   explain:['Nghĩa 1 (trong bài): biến lời hứa thành sự thật — 兑现承诺 / 诺言 / 保证. Nghĩa gốc: đổi séc, phiếu thành tiền mặt (支票兑现).','Có thể làm định ngữ: 兑现的诚意 (thành ý thực hiện). Đối lập: 说话不算数, 食言 (nuốt lời). Ôn: 承诺 (bài 4), 履行 (bài này).'],
   usage:'兑现 + 承诺 / 诺言 / 保证; 无法 / 终于 + 兑现; 说到做到，及时兑现; 兑现的诚意.',
   collo:['兑现承诺','兑现诺言','兑现的诚意','终于兑现'],
   ex_zh:'可大王您好像并没有兑现的诚意。',ex_py:'Kě dàwáng nín hǎoxiàng bìng méiyǒu duìxiàn de chéngyì.',ex_vn:'Nhưng đại vương hình như chẳng hề có thành ý thực hiện lời hứa.',
   exList:[
     {zh:'赵王派我将璧送来，可大王您好像并没有兑现的诚意。',py:'Zhào wáng pài wǒ jiāng bì sònglái, kě dàwáng nín hǎoxiàng bìng méiyǒu duìxiàn de chéngyì.',vn:'Triệu vương sai thần mang ngọc tới, nhưng đại vương hình như chẳng hề có thành ý giữ lời.'},
     {zh:'我终于兑现了若干年前对你的承诺。',py:'Wǒ zhōngyú duìxiànle ruògān nián qián duì nǐ de chéngnuò.',vn:'Cuối cùng anh đã thực hiện được lời hứa với em từ nhiều năm trước.'},
     {zh:'他答应考完试就带我去海边，结果到现在也没兑现。',py:'Tā dāying kǎowán shì jiù dài wǒ qù hǎibiān, jiéguǒ dào xiànzài yě méi duìxiàn.',vn:'Anh ấy hứa thi xong sẽ đưa tôi đi biển, kết quả đến giờ vẫn chưa thực hiện.'}
   ],
   colloFull:[
     {zh:'兑现承诺',py:'duìxiàn chéngnuò',vn:'thực hiện lời hứa'},
     {zh:'兑现诺言',py:'duìxiàn nuòyán',vn:'giữ lời hứa'},
     {zh:'兑现的诚意',py:'duìxiàn de chéngyì',vn:'thành ý thực hiện'},
     {zh:'终于兑现',py:'zhōngyú duìxiàn',vn:'cuối cùng đã thực hiện'},
     {zh:'支票兑现',py:'zhīpiào duìxiàn',vn:'đổi séc ra tiền mặt'}
   ],
   patterns:[
     {s:'兑现 + （对某人的）承诺 / 诺言',m:'Thực hiện lời hứa (với ai)'},
     {s:'没有兑现的诚意',m:'Không có thành ý thực hiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã hứa với bọn trẻ rồi thì nhất định phải giữ lời.',answer:'既然答应了孩子们，就一定要兑现。',answerPy:'Jìrán dāyingle háizimen, jiù yídìng yào duìxiàn.',
      note:'既然……就……: đã … thì … (suy luận từ sự thật đã có).',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Anh ấy không những không giữ lời hứa mà còn trách người khác.',answer:'他不但没有兑现承诺，反而还埋怨别人。',answerPy:'Tā búdàn méiyǒu duìxiàn chéngnuò, fǎn\'ér hái mányuàn biérén.',
      note:'不但不 / 没……，反而…… = không những không … mà ngược lại còn …; 埋怨 (bài 2).',pair:'不但……反而……'}
   ]},

  {n:21,zh:'妄想',py:'wàngxiǎng',pos:'Danh từ',vn:'ảo tưởng, vọng tưởng, mơ hão',hv:'vọng tưởng',em:'💭',lesson:1,
   explain:['Danh từ: ý nghĩ viển vông, không thể thực hiện được (thường mang nghĩa xấu, chê): 那是妄想, 痴心妄想 (mơ tưởng hão huyền).','Cũng làm động từ: 妄想 + V (mơ hão muốn làm …): 妄想不劳而获. Khác 梦想 / 理想 (ước mơ tốt đẹp), 妄想 luôn mang ý phê phán.'],
   usage:'（那 / 这）是妄想; 痴心妄想; 妄想 + V (妄想一步登天); 打消 + 妄想.',
   collo:['那是妄想','痴心妄想','妄想不劳而获','打消妄想'],
   ex_zh:'如今璧在我手里，想不交城拿走璧，那是妄想。',ex_py:'Rújīn bì zài wǒ shǒu li, xiǎng bù jiāo chéng ná zǒu bì, nà shì wàngxiǎng.',ex_vn:'Giờ đây ngọc đang ở trong tay thần, muốn không giao thành mà lấy được ngọc thì đó là mơ hão.',
   exList:[
     {zh:'蔺相如说：“如今璧在我手里，想不交城拿走璧，那是妄想。”',py:'Lìn Xiàngrú shuō: "Rújīn bì zài wǒ shǒu li, xiǎng bù jiāo chéng ná zǒu bì, nà shì wàngxiǎng."',vn:'Lạn Tương Như nói: "Giờ ngọc đang ở trong tay thần, muốn không giao thành mà lấy ngọc đi thì đúng là mơ hão."'},
     {zh:'平时不努力，却想考第一名，这简直是妄想。',py:'Píngshí bù nǔlì, què xiǎng kǎo dì yī míng, zhè jiǎnzhí shì wàngxiǎng.',vn:'Bình thường không cố gắng mà lại muốn thi đứng đầu, đó đúng là mơ hão.'},
     {zh:'他妄想靠买彩票一夜暴富，结果把工资都花光了。',py:'Tā wàngxiǎng kào mǎi cǎipiào yí yè bàofù, jiéguǒ bǎ gōngzī dōu huāguāng le.',vn:'Anh ta mơ hão dựa vào mua vé số để giàu lên sau một đêm, kết quả tiêu sạch cả tiền lương.'}
   ],
   colloFull:[
     {zh:'那是妄想',py:'nà shì wàngxiǎng',vn:'đó là mơ hão'},
     {zh:'痴心妄想',py:'chīxīn wàngxiǎng',vn:'mơ tưởng hão huyền'},
     {zh:'妄想不劳而获',py:'wàngxiǎng bù láo ér huò',vn:'mơ hão không làm mà có ăn'},
     {zh:'打消妄想',py:'dǎxiāo wàngxiǎng',vn:'dẹp bỏ ảo tưởng'},
     {zh:'简直是妄想',py:'jiǎnzhí shì wàngxiǎng',vn:'đúng là mơ hão'}
   ],
   patterns:[
     {s:'想……，那（简直）是妄想',m:'Muốn … thì đó (đúng) là mơ hão'},
     {s:'某人 + 妄想 + V',m:'Ai đó mơ hão muốn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn không học mà vẫn đỗ đại học thì đúng là mơ hão.',answer:'想不学习就考上大学，那简直是妄想。',answerPy:'Xiǎng bù xuéxí jiù kǎoshàng dàxué, nà jiǎnzhí shì wàngxiǎng.',
      note:'Mẫu câu bài khoá: 想……，那是妄想; 简直 = quả thực, đúng là (nhấn mạnh).',pair:'简直'},
     {promptLang:'vi',prompt:'Chỉ có dẹp bỏ ảo tưởng thì anh ta mới chịu cố gắng một cách thực tế.',answer:'只有打消了妄想，他才会踏踏实实地努力。',answerPy:'Zhǐyǒu dǎxiāole wàngxiǎng, tā cái huì tātāshíshí de nǔlì.',
      note:'只有……才……; 踏踏实实 (bài 9: 踏实) = chắc chắn, thực tế.',pair:'只有……才……'}
   ]},

  {n:22,zh:'发誓',py:'fā shì',pos:'Động từ',vn:'thề, xin thề',hv:'phát thệ',em:'✋',lesson:1,
   explain:['Nói lời thề, cam kết chắc chắn sẽ làm (hoặc không làm) việc gì — thể hiện quyết tâm rất lớn.','Là động từ LI HỢP: 发了誓, 发过誓, 发个誓; theo sau thường là một mệnh đề: 发誓 + 一定 / 再也不…….'],
   usage:'发誓 + 小句 (一定 / 再也不 / 绝不……); 向 + 某人 + 发誓; 发了个誓; 对天发誓.',
   collo:['发誓一定','发誓再也不','对天发誓','向他发誓'],
   ex_zh:'蔺相如发誓，如若逼他，就将自己的头和璧一起撞碎在柱子上。',ex_py:'Lìn Xiàngrú fā shì, rúruò bī tā, jiù jiāng zìjǐ de tóu hé bì yìqǐ zhuàngsuì zài zhùzi shang.',ex_vn:'Lạn Tương Như thề rằng nếu bị ép, ông sẽ đập đầu mình cùng viên ngọc vỡ nát vào cột.',
   exList:[
     {zh:'蔺相如发誓，如若逼他，就将自己的头和璧一起撞碎在柱子上，秦王看到的将是他的尸体和破碎的玉。',py:'Lìn Xiàngrú fā shì, rúruò bī tā, jiù jiāng zìjǐ de tóu hé bì yìqǐ zhuàngsuì zài zhùzi shang, Qín wáng kàndào de jiāng shì tā de shītǐ hé pòsuì de yù.',vn:'Lạn Tương Như thề rằng nếu bị ép, ông sẽ đập đầu mình cùng viên ngọc vỡ nát vào cột, thứ vua Tần nhìn thấy sẽ là thi thể ông và miếng ngọc vỡ vụn.'},
     {zh:'这次考砸以后，他发誓再也不玩游戏到半夜了。',py:'Zhè cì kǎozá yǐhòu, tā fā shì zài yě bù wán yóuxì dào bànyè le.',vn:'Sau lần thi hỏng này, cậu ấy thề sẽ không bao giờ chơi game đến nửa đêm nữa.'},
     {zh:'我向你发誓，这件事我绝对没有告诉别人。',py:'Wǒ xiàng nǐ fā shì, zhè jiàn shì wǒ juéduì méiyǒu gàosu biérén.',vn:'Tớ thề với cậu, chuyện này tớ tuyệt đối không nói với ai cả.'}
   ],
   colloFull:[
     {zh:'发誓一定',py:'fā shì yídìng',vn:'thề nhất định'},
     {zh:'发誓再也不',py:'fā shì zài yě bù',vn:'thề không bao giờ … nữa'},
     {zh:'对天发誓',py:'duì tiān fā shì',vn:'thề với trời'},
     {zh:'向他发誓',py:'xiàng tā fā shì',vn:'thề với anh ấy'},
     {zh:'发了个誓',py:'fāle ge shì',vn:'đã thề một lời'}
   ],
   patterns:[
     {s:'（向 + 某人）发誓 + 一定 / 绝不 + V',m:'Thề (với ai) nhất định / quyết không …'},
     {s:'发誓 + 再也不 + V + 了',m:'Thề không bao giờ … nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy thề rằng dù khó khăn đến đâu cũng nhất định phải học xong đại học.',answer:'她发誓，不管有多困难，也一定要读完大学。',answerPy:'Tā fā shì, bùguǎn yǒu duō kùnnan, yě yídìng yào dúwán dàxué.',
      note:'不管……也 / 都……: dù … cũng …; mệnh đề sau 发誓 là nội dung lời thề.',pair:'不管……也……'},
     {promptLang:'vi',prompt:'Từ lần đó trở đi, cậu ấy thề sẽ không bao giờ nói dối nữa.',answer:'从那次以后，他发誓再也不撒谎了。',answerPy:'Cóng nà cì yǐhòu, tā fā shì zài yě bù sā huǎng le.',
      note:'再也不……了 = không bao giờ … nữa; 撒谎 (từ của bài).',pair:'再也不……了'}
   ]},

  {n:23,zh:'尸体',py:'shītǐ',pos:'Danh từ',vn:'thi thể, xác chết',hv:'thi thể',em:'⚰️',lesson:1,
   explain:['Thân thể của người hoặc động vật sau khi chết.','Lượng từ: 一具尸体. Từ trung tính, dùng trong văn viết, tin tức, pháp y; khẩu ngữ thân mật tránh dùng, thường nói 遗体 khi tỏ lòng tôn kính (瞻仰遗体).'],
   usage:'一具 + 尸体; 发现 + 尸体; 尸体 + 被…… ; 动物的尸体; 遗体 (kính trọng).',
   collo:['他的尸体','一具尸体','发现尸体','动物尸体'],
   ex_zh:'秦王看到的将是他的尸体和破碎的玉。',ex_py:'Qín wáng kàndào de jiāng shì tā de shītǐ hé pòsuì de yù.',ex_vn:'Thứ vua Tần nhìn thấy sẽ là thi thể của ông và miếng ngọc vỡ vụn.',
   exList:[
     {zh:'蔺相如发誓，如若逼他，秦王看到的将是他的尸体和破碎的玉。',py:'Lìn Xiàngrú fā shì, rúruò bī tā, Qín wáng kàndào de jiāng shì tā de shītǐ hé pòsuì de yù.',vn:'Lạn Tương Như thề rằng nếu bị ép, thứ vua Tần nhìn thấy sẽ là thi thể của ông và miếng ngọc vỡ vụn.'},
     {zh:'警察在河边发现了一具尸体，正在调查死者的身份。',py:'Jǐngchá zài hébiān fāxiànle yí jù shītǐ, zhèngzài diàochá sǐzhě de shēnfèn.',vn:'Cảnh sát phát hiện một thi thể bên bờ sông, đang điều tra danh tính người chết.'},
     {zh:'海滩上出现了许多死鱼的尸体，专家怀疑是水质受到了污染。',py:'Hǎitān shang chūxiànle xǔduō sǐ yú de shītǐ, zhuānjiā huáiyí shì shuǐzhì shòudàole wūrǎn.',vn:'Trên bãi biển xuất hiện rất nhiều xác cá chết, chuyên gia nghi là chất lượng nước bị ô nhiễm.'}
   ],
   colloFull:[
     {zh:'他的尸体',py:'tā de shītǐ',vn:'thi thể của ông ấy'},
     {zh:'一具尸体',py:'yí jù shītǐ',vn:'một cái xác'},
     {zh:'发现尸体',py:'fāxiàn shītǐ',vn:'phát hiện thi thể'},
     {zh:'动物尸体',py:'dòngwù shītǐ',vn:'xác động vật'},
     {zh:'尸体和破碎的玉',py:'shītǐ hé pòsuì de yù',vn:'thi thể và ngọc vỡ'}
   ],
   patterns:[
     {s:'……看到的将是 + 尸体……',m:'Thứ … nhìn thấy sẽ là thi thể …'},
     {s:'在 + 地方 + 发现了一具尸体',m:'Phát hiện một thi thể ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau trận lũ, trên cánh đồng có rất nhiều xác động vật, người dân lo lắng sẽ phát sinh dịch bệnh.',answer:'洪水过后，田里有很多动物的尸体，村民们担心会发生疾病。',answerPy:'Hóngshuǐ guòhòu, tián li yǒu hěn duō dòngwù de shītǐ, cūnmínmen dānxīn huì fāshēng jíbìng.',
      note:'……过后 = sau khi … qua đi; 担心会…… = lo là sẽ ….',pair:'……过后'},
     {promptLang:'vi',prompt:'Ông thề: nếu bị ép, thứ vua Tần nhận được chỉ có thể là thi thể của ông và miếng ngọc vỡ.',answer:'他发誓：如果被逼，秦王得到的只能是他的尸体和破碎的玉。',answerPy:'Tā fā shì: rúguǒ bèi bī, Qín wáng dédào de zhǐ néng shì tā de shītǐ hé pòsuì de yù.',
      note:'如果……，…… nêu giả thiết; V + 的 (得到的) làm chủ ngữ = thứ nhận được.',pair:'如果……'}
   ]},

  {n:24,zh:'撒谎',py:'sā huǎng',pos:'Động từ',vn:'nói dối, bịa chuyện',hv:'tát hoang',em:'🤥',lesson:1,
   explain:['Cố ý nói điều không đúng sự thật để lừa người khác.','Là động từ LI HỢP: 撒了谎, 撒过谎, 撒了一个谎. Đồng nghĩa khẩu ngữ: 说谎, 说假话. Không mang tân ngữ chỉ người: nói 对 / 跟 + người + 撒谎 (không nói 撒谎他).'],
   usage:'（对 / 跟 + 某人）撒谎; 撒了一个谎; 从来不撒谎; 撒谎成性 (quen thói nói dối).',
   collo:['撒谎呢','对他撒谎','撒了一个谎','从来不撒谎'],
   ex_zh:'别误会，我怎么会撒谎呢？',ex_py:'Bié wùhuì, wǒ zěnme huì sā huǎng ne?',ex_vn:'Đừng hiểu lầm, ta sao lại nói dối được chứ?',
   exList:[
     {zh:'秦王连忙说：“别误会，我怎么会撒谎呢？”忙命大臣拿出地图。',py:'Qín wáng liánmáng shuō: "Bié wùhuì, wǒ zěnme huì sā huǎng ne?" Máng mìng dàchén náchū dìtú.',vn:'Vua Tần vội nói: "Đừng hiểu lầm, ta sao lại nói dối được chứ?" rồi vội sai đại thần mang bản đồ ra.'},
     {zh:'不但欺负同学，还冒犯老师、撒谎、不讲信用……',py:'Búdàn qīfu tóngxué, hái màofàn lǎoshī, sā huǎng, bù jiǎng xìnyòng……',vn:'Không những bắt nạt bạn học, còn xúc phạm thầy cô, nói dối, không giữ chữ tín…'},
     {zh:'为了不让妈妈担心，他撒了一个谎，说自己已经吃过饭了。',py:'Wèile bú ràng māma dānxīn, tā sāle yí ge huǎng, shuō zìjǐ yǐjīng chīguo fàn le.',vn:'Để mẹ không lo, cậu ấy nói dối rằng mình đã ăn cơm rồi.'}
   ],
   colloFull:[
     {zh:'撒谎呢',py:'sā huǎng ne',vn:'nói dối đấy à'},
     {zh:'对他撒谎',py:'duì tā sā huǎng',vn:'nói dối anh ấy'},
     {zh:'撒了一个谎',py:'sāle yí ge huǎng',vn:'đã nói dối một lần'},
     {zh:'从来不撒谎',py:'cónglái bù sā huǎng',vn:'chưa bao giờ nói dối'},
     {zh:'撒谎成性',py:'sā huǎng chéng xìng',vn:'quen thói nói dối'}
   ],
   patterns:[
     {s:'（对 / 跟 + 某人）撒谎',m:'Nói dối (ai)'},
     {s:'撒了一个谎，说……',m:'Nói dối một câu rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thà bị phạt, cậu ấy cũng không chịu nói dối thầy giáo.',answer:'宁可受罚，他也不愿意对老师撒谎。',answerPy:'Nìngkě shòu fá, tā yě bú yuànyì duì lǎoshī sā huǎng.',
      note:'宁可……也不…… = thà … cũng không …; 撒谎 li hợp: đối tượng đưa lên trước bằng 对.',pair:'宁可……也不……'},
     {promptLang:'vi',prompt:'Nếu cậu nói dối, sớm muộn gì cũng sẽ bị phát hiện.',answer:'如果你撒谎，早晚会被发现的。',answerPy:'Rúguǒ nǐ sā huǎng, zǎowǎn huì bèi fāxiàn de.',
      note:'会……的 = chắc chắn sẽ …; 早晚 = sớm muộn.',pair:'会……的'}
   ]},

  {n:25,zh:'隆重',py:'lóngzhòng',pos:'Tính từ',vn:'long trọng, trọng thể',hv:'long trọng',em:'🎊',lesson:1,
   explain:['(Nghi lễ, buổi lễ, sự kiện) quy mô lớn, trang nghiêm, được tổ chức rất trịnh trọng.','Hay đi với: 仪式, 典礼, 庆祝, 欢迎, 开幕; làm trạng ngữ: 隆重举行 / 隆重开幕 / 隆重纪念. Không dùng tả người (không nói 他很隆重).'],
   usage:'隆重的 + 仪式 / 典礼; 隆重 + 举行 / 开幕 / 庆祝; 场面隆重; 隆重欢迎.',
   collo:['隆重的仪式','隆重举行','隆重庆祝','场面隆重'],
   ex_zh:'赵王送璧之前，举行了隆重的仪式。',ex_py:'Zhào wáng sòng bì zhīqián, jǔxíngle lóngzhòng de yíshì.',ex_vn:'Trước khi gửi ngọc, Triệu vương đã cử hành một nghi lễ long trọng.',
   exList:[
     {zh:'蔺相如说：“赵王送璧之前，举行了隆重的仪式：沐浴更衣，戒掉荤腥，只吃素食，以示庄严。”',py:'Lìn Xiàngrú shuō: "Zhào wáng sòng bì zhīqián, jǔxíngle lóngzhòng de yíshì: mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán."',vn:'Lạn Tương Như nói: "Trước khi gửi ngọc, Triệu vương đã cử hành nghi lễ long trọng: tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm."'},
     {zh:'学校为建校一百周年举行了隆重的庆祝活动。',py:'Xuéxiào wèi jiàn xiào yìbǎi zhōunián jǔxíngle lóngzhòng de qìngzhù huódòng.',vn:'Nhà trường đã tổ chức hoạt động kỷ niệm long trọng nhân dịp 100 năm thành lập trường.'},
     {zh:'第二十届电影节昨晚在上海隆重开幕。',py:'Dì èrshí jiè diànyǐngjié zuó wǎn zài Shànghǎi lóngzhòng kāimù.',vn:'Liên hoan phim lần thứ 20 đã long trọng khai mạc tối qua tại Thượng Hải.'}
   ],
   colloFull:[
     {zh:'隆重的仪式',py:'lóngzhòng de yíshì',vn:'nghi lễ long trọng'},
     {zh:'隆重举行',py:'lóngzhòng jǔxíng',vn:'long trọng tổ chức'},
     {zh:'隆重庆祝',py:'lóngzhòng qìngzhù',vn:'long trọng chào mừng'},
     {zh:'场面隆重',py:'chǎngmiàn lóngzhòng',vn:'quang cảnh long trọng'},
     {zh:'隆重开幕',py:'lóngzhòng kāimù',vn:'long trọng khai mạc'}
   ],
   patterns:[
     {s:'举行 + 隆重的 + 仪式 / 典礼',m:'Cử hành nghi lễ / buổi lễ long trọng'},
     {s:'……+ 隆重 + 举行 / 开幕',m:'… được long trọng tổ chức / khai mạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lễ tốt nghiệp năm nay không những long trọng mà còn rất ấm áp.',answer:'今年的毕业典礼不仅很隆重，而且很温馨。',answerPy:'Jīnnián de bìyè diǎnlǐ bùjǐn hěn lóngzhòng, érqiě hěn wēnxīn.',
      note:'不仅……而且……: không chỉ … mà còn ….',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Để chào đón các vị khách, trường đã chuẩn bị một nghi thức long trọng.',answer:'为了欢迎客人们，学校准备了一个隆重的仪式。',answerPy:'Wèile huānyíng kèrénmen, xuéxiào zhǔnbèile yí ge lóngzhòng de yíshì.',
      note:'为了……，…… = để … (mục đích đặt đầu câu).',pair:'为了……'}
   ]},

  {n:26,zh:'仪式',py:'yíshì',pos:'Danh từ',vn:'nghi thức, nghi lễ',hv:'nghi thức',em:'🎎',lesson:1,
   explain:['Trình tự, hình thức cố định được tiến hành trong những dịp trang trọng: lễ cưới, lễ khai giảng, lễ ký kết, lễ chào cờ…','Động từ đi kèm: 举行 (cử hành); cụm: 签字仪式, 升旗仪式, 开幕仪式, 结婚仪式; 仪式感 (cảm giác nghi thức — từ thịnh hành).'],
   usage:'举行 + 仪式; 隆重 / 同样的 + 仪式; 签字 / 升旗 / 开幕 / 结婚 + 仪式; 仪式感.',
   collo:['举行仪式','同样的仪式','升旗仪式','签字仪式'],
   ex_zh:'大王如真心换璧，亦请举行同样的仪式，我才敢把璧献给您。',ex_py:'Dàwáng rú zhēnxīn huàn bì, yì qǐng jǔxíng tóngyàng de yíshì, wǒ cái gǎn bǎ bì xiàn gěi nín.',ex_vn:'Đại vương nếu thật lòng muốn đổi ngọc, cũng xin cử hành nghi lễ giống như vậy, thần mới dám dâng ngọc cho người.',
   exList:[
     {zh:'赵王送璧之前，举行了隆重的仪式：沐浴更衣，戒掉荤腥，只吃素食，以示庄严。',py:'Zhào wáng sòng bì zhīqián, jǔxíngle lóngzhòng de yíshì: mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán.',vn:'Trước khi gửi ngọc, Triệu vương đã cử hành nghi lễ long trọng: tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm.'},
     {zh:'每周一早上，全校师生都要在操场上参加升旗仪式。',py:'Měi zhōuyī zǎoshang, quán xiào shīshēng dōu yào zài cāochǎng shang cānjiā shēngqí yíshì.',vn:'Sáng thứ Hai hằng tuần, toàn thể thầy trò đều phải dự lễ chào cờ trên sân trường.'},
     {zh:'两家公司在北京举行了合作协议的签字仪式。',py:'Liǎng jiā gōngsī zài Běijīng jǔxíngle hézuò xiéyì de qiānzì yíshì.',vn:'Hai công ty đã tổ chức lễ ký kết thoả thuận hợp tác tại Bắc Kinh.'}
   ],
   colloFull:[
     {zh:'举行仪式',py:'jǔxíng yíshì',vn:'cử hành nghi lễ'},
     {zh:'同样的仪式',py:'tóngyàng de yíshì',vn:'nghi lễ giống như vậy'},
     {zh:'升旗仪式',py:'shēngqí yíshì',vn:'lễ chào cờ'},
     {zh:'签字仪式',py:'qiānzì yíshì',vn:'lễ ký kết'},
     {zh:'仪式感',py:'yíshìgǎn',vn:'cảm giác nghi thức'}
   ],
   patterns:[
     {s:'（为……）举行 + ……仪式',m:'Cử hành lễ … (vì …)'},
     {s:'参加 + ……仪式',m:'Tham dự lễ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy nghi lễ rất đơn giản, nhưng mọi người đều cảm thấy vô cùng xúc động.',answer:'虽然仪式很简单，但是大家都觉得非常感动。',answerPy:'Suīrán yíshì hěn jiǎndān, dànshì dàjiā dōu juéde fēicháng gǎndòng.',
      note:'虽然……但是……: tuy … nhưng ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lễ khai giảng sẽ được tổ chức vào sáng mai, học sinh phải có mặt trước bảy giờ.',answer:'开学仪式将在明天上午举行，学生们必须在七点以前到。',answerPy:'Kāixué yíshì jiāng zài míngtiān shàngwǔ jǔxíng, xuéshengmen bìxū zài qī diǎn yǐqián dào.',
      note:'将 + V = sẽ (văn viết); 必须 = bắt buộc phải.',pair:'将……'}
   ]},

  {n:27,zh:'沐浴',py:'mùyù',pos:'Động từ',vn:'tắm gội; đắm mình (trong)',hv:'mộc dục',em:'🛁',lesson:1,
   explain:['Nghĩa 1 (trong bài): tắm rửa, gội đầu — từ văn viết, trang trọng (khẩu ngữ: 洗澡). 沐浴更衣 = tắm gội thay áo, thường làm trước nghi lễ để tỏ lòng thành kính.','Nghĩa 2 (bóng): đắm mình trong, được bao phủ bởi: 沐浴着阳光 / 春风 (tắm mình trong nắng / gió xuân).'],
   usage:'沐浴更衣; 沐浴 + 着 + 阳光 / 春风; 沐浴露 (sữa tắm).',
   collo:['沐浴更衣','沐浴着阳光','沐浴在春风里','沐浴露'],
   ex_zh:'赵王送璧之前，举行了隆重的仪式：沐浴更衣，戒掉荤腥，只吃素食，以示庄严。',ex_py:'Zhào wáng sòng bì zhīqián, jǔxíngle lóngzhòng de yíshì: mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán.',ex_vn:'Trước khi gửi ngọc, Triệu vương đã cử hành nghi lễ long trọng: tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm.',
   exList:[
     {zh:'古人在祭祀之前，一定要先沐浴更衣，表示对祖先的尊敬。',py:'Gǔrén zài jìsì zhīqián, yídìng yào xiān mùyù gēngyī, biǎoshì duì zǔxiān de zūnjìng.',vn:'Người xưa trước khi cúng tế nhất định phải tắm gội thay áo trước, để tỏ lòng tôn kính tổ tiên.'},
     {zh:'孩子们沐浴着春天的阳光，在草地上开心地奔跑。',py:'Háizimen mùyùzhe chūntiān de yángguāng, zài cǎodì shang kāixīn de bēnpǎo.',vn:'Bọn trẻ tắm mình trong nắng xuân, vui vẻ chạy nhảy trên bãi cỏ.'},
     {zh:'这家酒店的每个房间都准备了洗发水和沐浴露。',py:'Zhè jiā jiǔdiàn de měi ge fángjiān dōu zhǔnbèile xǐfàshuǐ hé mùyùlù.',vn:'Mỗi phòng của khách sạn này đều chuẩn bị sẵn dầu gội và sữa tắm.'}
   ],
   colloFull:[
     {zh:'沐浴更衣',py:'mùyù gēngyī',vn:'tắm gội thay áo'},
     {zh:'沐浴着阳光',py:'mùyùzhe yángguāng',vn:'tắm mình trong nắng'},
     {zh:'沐浴在春风里',py:'mùyù zài chūnfēng li',vn:'đắm mình trong gió xuân'},
     {zh:'沐浴露',py:'mùyùlù',vn:'sữa tắm'},
     {zh:'先沐浴',py:'xiān mùyù',vn:'tắm gội trước'}
   ],
   patterns:[
     {s:'……之前，先沐浴更衣',m:'Trước khi …, tắm gội thay áo trước'},
     {s:'沐浴着 + 阳光 / 春风，……',m:'Đắm mình trong nắng / gió xuân, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo phong tục, trước đêm giao thừa cả nhà phải tắm gội thay quần áo mới.',answer:'按照习俗，除夕之前全家人都要沐浴更衣，换上新衣服。',answerPy:'Ànzhào xísú, chúxī zhīqián quán jiā rén dōu yào mùyù gēngyī, huànshàng xīn yīfu.',
      note:'按照 + 规定 / 习俗 = theo …; 习俗 (bài 13).',pair:'按照……'},
     {promptLang:'vi',prompt:'Tắm mình trong nắng mai, ông nội vừa đi dạo vừa hát.',answer:'沐浴着早晨的阳光，爷爷一边散步一边唱歌。',answerPy:'Mùyùzhe zǎochen de yángguāng, yéye yìbiān sànbù yìbiān chànggē.',
      note:'V + 着 + O đặt đầu câu làm trạng ngữ chỉ trạng thái đi kèm.',pair:'V着……，……'}
   ]},

  {n:28,zh:'荤',py:'hūn',pos:'Danh từ',vn:'đồ mặn (thịt, cá)',hv:'huân',em:'🍖',lesson:1,
   explain:['Món ăn có thịt, cá, trứng (đồ mặn) — đối lập với 素 (đồ chay).','Cụm hay dùng: 荤菜 / 素菜, 荤腥 (thịt cá nói chung), 戒荤 / 开荤 (kiêng mặn / ăn mặn trở lại), 不吃荤, 一荤一素 (một món mặn một món chay).'],
   usage:'荤菜; 荤腥; 戒掉荤腥; 不吃荤; 一荤一素; 荤素搭配.',
   collo:['戒掉荤腥','荤菜','不吃荤','荤素搭配'],
   ex_zh:'沐浴更衣，戒掉荤腥，只吃素食，以示庄严。',ex_py:'Mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán.',ex_vn:'Tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm.',
   exList:[
     {zh:'赵王送璧之前，戒掉荤腥，只吃素食，以示庄严。',py:'Zhào wáng sòng bì zhīqián, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán.',vn:'Trước khi gửi ngọc, Triệu vương kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm.'},
     {zh:'学校食堂每顿饭都有两荤两素，营养搭配得很合理。',py:'Xuéxiào shítáng měi dùn fàn dōu yǒu liǎng hūn liǎng sù, yíngyǎng dāpèi de hěn hélǐ.',vn:'Bữa nào căng tin trường cũng có hai món mặn hai món chay, dinh dưỡng phối hợp rất hợp lý.'},
     {zh:'奶奶每个月初一、十五不吃荤，这是她多年的习惯。',py:'Nǎinai měi ge yuè chūyī, shíwǔ bù chī hūn, zhè shì tā duō nián de xíguàn.',vn:'Mùng một và ngày rằm hằng tháng bà nội ăn chay, đó là thói quen nhiều năm của bà.'}
   ],
   colloFull:[
     {zh:'戒掉荤腥',py:'jièdiào hūnxīng',vn:'kiêng đồ mặn'},
     {zh:'荤菜',py:'hūncài',vn:'món mặn'},
     {zh:'不吃荤',py:'bù chī hūn',vn:'không ăn mặn'},
     {zh:'荤素搭配',py:'hūn sù dāpèi',vn:'phối hợp mặn chay'},
     {zh:'一荤一素',py:'yì hūn yí sù',vn:'một món mặn một món chay'}
   ],
   patterns:[
     {s:'戒掉荤腥，只吃素食',m:'Kiêng đồ mặn, chỉ ăn chay'},
     {s:'荤素搭配 + 得 + 合理',m:'Phối hợp mặn chay hợp lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ăn uống phải phối hợp mặn chay, đừng chỉ ăn thịt mà không ăn rau.',answer:'吃饭要荤素搭配，不要光吃肉不吃菜。',answerPy:'Chīfàn yào hūn sù dāpèi, bú yào guāng chī ròu bù chī cài.',
      note:'光 + V = chỉ … (khẩu ngữ); 不要……不…… = đừng … mà không ….',pair:'光……'},
     {promptLang:'vi',prompt:'Từ khi bị bệnh, ông nội dù thích đồ mặn đến mấy cũng phải ăn ít đi.',answer:'自从生病以后，爷爷再爱吃荤菜也得少吃了。',answerPy:'Zìcóng shēngbìng yǐhòu, yéye zài ài chī hūncài yě děi shǎo chī le.',
      note:'自从……以后 = từ khi …; 再……也…… = dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:29,zh:'庄严',py:'zhuāngyán',pos:'Tính từ',vn:'trang nghiêm',hv:'trang nghiêm',em:'🏛️',lesson:1,
   explain:['Nghiêm trang, trịnh trọng, khiến người ta phải kính cẩn — dùng cho nghi lễ, không khí, công trình, lời hứa, thái độ.','Hay đi với: 庄严的仪式 / 宣誓 / 承诺, 气氛庄严, 庄严肃穆. Phân biệt: 庄重 (bài 9) tả cử chỉ, lời nói của người (稳重, không cợt nhả); 庄严 nhấn không khí / sự việc uy nghiêm.'],
   usage:'以示庄严; 庄严的 + 仪式 / 时刻 / 承诺; 气氛 + 庄严; 庄严肃穆.',
   collo:['以示庄严','庄严的时刻','气氛庄严','庄严肃穆'],
   ex_zh:'沐浴更衣，戒掉荤腥，只吃素食，以示庄严。',ex_py:'Mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán.',ex_vn:'Tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm.',
   exList:[
     {zh:'赵王送璧之前沐浴更衣，只吃素食，以示庄严。',py:'Zhào wáng sòng bì zhīqián mùyù gēngyī, zhǐ chī sùshí, yǐ shì zhuāngyán.',vn:'Trước khi gửi ngọc, Triệu vương tắm gội thay áo, chỉ ăn chay, để tỏ lòng trang nghiêm.'},
     {zh:'国歌响起的那一刻，全场气氛十分庄严，大家都站得笔直。',py:'Guógē xiǎngqǐ de nà yí kè, quán chǎng qìfēn shífēn zhuāngyán, dàjiā dōu zhàn de bǐzhí.',vn:'Khoảnh khắc quốc ca vang lên, không khí cả hội trường vô cùng trang nghiêm, mọi người đều đứng thẳng tắp.'},
     {zh:'新郎新娘在亲友面前许下了庄严的承诺。',py:'Xīnláng xīnniáng zài qīnyǒu miànqián xǔxiàle zhuāngyán de chéngnuò.',vn:'Cô dâu chú rể đã trao nhau lời hứa trang nghiêm trước mặt người thân bạn bè.'}
   ],
   colloFull:[
     {zh:'以示庄严',py:'yǐ shì zhuāngyán',vn:'để tỏ sự trang nghiêm'},
     {zh:'庄严的时刻',py:'zhuāngyán de shíkè',vn:'thời khắc trang nghiêm'},
     {zh:'气氛庄严',py:'qìfēn zhuāngyán',vn:'không khí trang nghiêm'},
     {zh:'庄严肃穆',py:'zhuāngyán sùmù',vn:'trang nghiêm tĩnh mịch'},
     {zh:'庄严的承诺',py:'zhuāngyán de chéngnuò',vn:'lời hứa trang nghiêm'}
   ],
   patterns:[
     {s:'V……，以示庄严 / 尊重',m:'Làm … để tỏ sự trang nghiêm / tôn trọng'},
     {s:'气氛 + （十分）庄严',m:'Không khí (vô cùng) trang nghiêm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong buổi lễ trang nghiêm như thế này, đừng cười đùa nữa.',answer:'在这么庄严的仪式上，你们别再说笑了。',answerPy:'Zài zhème zhuāngyán de yíshì shang, nǐmen bié zài shuōxiào le.',
      note:'在……上 = trong (dịp, buổi) …; 别再……了 = đừng … nữa.',pair:'别再……了'},
     {promptLang:'vi',prompt:'Họ mặc áo dài truyền thống để tỏ sự trang nghiêm.',answer:'他们穿上了传统的长衫，以示庄严。',answerPy:'Tāmen chuānshàngle chuántǒng de chángshān, yǐ shì zhuāngyán.',
      note:'以示 + N/Adj = để tỏ … (văn viết), đứng cuối câu nêu mục đích.',pair:'……，以示……'}
   ]},

  {n:30,zh:'无理取闹',py:'wúlǐ-qǔnào',pos:'Thành ngữ',vn:'cố tình gây sự, kiếm chuyện vô cớ',hv:'vô lý thủ náo',em:'😤',lesson:1,
   explain:['无理 = không có lý, 取闹 = gây rối → vô cớ gây sự, làm ầm ĩ khi không có lý do chính đáng.','Làm vị ngữ: 他常常无理取闹; hay nói phủ định để thanh minh: 我并非无理取闹 (tôi không phải vô cớ gây sự). Mang nghĩa chê.'],
   usage:'（常常）无理取闹; 并非 / 不是 + 无理取闹; 别 + 无理取闹 + 了; 对……无理取闹.',
   collo:['并非无理取闹','常常无理取闹','别无理取闹','无理取闹的人'],
   ex_zh:'我并非无理取闹，也不是冒犯大王。',ex_py:'Wǒ bìng fēi wúlǐ-qǔnào, yě bú shì màofàn dàwáng.',ex_vn:'Thần không phải vô cớ gây sự, cũng không phải xúc phạm đại vương.',
   exList:[
     {zh:'蔺相如说：“我并非无理取闹，也不是冒犯大王。大王如真心换璧，亦请举行同样的仪式。”',py:'Lìn Xiàngrú shuō: "Wǒ bìng fēi wúlǐ-qǔnào, yě bú shì màofàn dàwáng. Dàwáng rú zhēnxīn huàn bì, yì qǐng jǔxíng tóngyàng de yíshì."',vn:'Lạn Tương Như nói: "Thần không phải vô cớ gây sự, cũng không phải xúc phạm đại vương. Đại vương nếu thật lòng đổi ngọc, cũng xin cử hành nghi lễ như vậy."'},
     {zh:'他仗着家里资金雄厚，常常无理取闹。',py:'Tā zhàngzhe jiāli zījīn xiónghòu, chángcháng wúlǐ-qǔnào.',vn:'Cậu ta cậy nhà giàu có, thường xuyên kiếm chuyện gây sự.'},
     {zh:'你要是有道理就好好说，别在这儿无理取闹。',py:'Nǐ yàoshi yǒu dàolǐ jiù hǎohāo shuō, bié zài zhèr wúlǐ-qǔnào.',vn:'Nếu cậu có lý thì cứ nói đàng hoàng, đừng ở đây vô cớ làm ầm lên.'}
   ],
   colloFull:[
     {zh:'并非无理取闹',py:'bìng fēi wúlǐ-qǔnào',vn:'không phải vô cớ gây sự'},
     {zh:'常常无理取闹',py:'chángcháng wúlǐ-qǔnào',vn:'thường xuyên kiếm chuyện'},
     {zh:'别无理取闹',py:'bié wúlǐ-qǔnào',vn:'đừng vô cớ gây sự'},
     {zh:'无理取闹的人',py:'wúlǐ-qǔnào de rén',vn:'người hay kiếm chuyện'},
     {zh:'对顾客无理取闹',py:'duì gùkè wúlǐ-qǔnào',vn:'gây sự với khách hàng'}
   ],
   patterns:[
     {s:'我并非 / 不是 + 无理取闹',m:'Tôi không phải vô cớ gây sự (thanh minh)'},
     {s:'仗着……，（常常）无理取闹',m:'Cậy vào …, (thường) kiếm chuyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không phải vô cớ gây sự, mà là thật sự bị đối xử không công bằng.',answer:'我不是无理取闹，而是真的受到了不公平的对待。',answerPy:'Wǒ bú shì wúlǐ-qǔnào, ér shì zhēn de shòudàole bù gōngpíng de duìdài.',
      note:'不是……，而是……: không phải … mà là ….',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Gặp những vị khách vô cớ gây sự, nhân viên phục vụ vẫn phải giữ bình tĩnh.',answer:'遇到无理取闹的顾客，服务员也要保持冷静。',answerPy:'Yùdào wúlǐ-qǔnào de gùkè, fúwùyuán yě yào bǎochí lěngjìng.',
      note:'Thành ngữ làm định ngữ + 的 + N.',pair:'Thành ngữ + 的 + N'}
   ]},

  {n:31,zh:'冒犯',py:'màofàn',pos:'Động từ',vn:'xúc phạm, mạo phạm',hv:'mạo phạm',em:'🙊',lesson:1,
   explain:['Dùng lời nói, hành động không đúng mực làm tổn thương, xúc phạm người khác (thường là người trên, người đáng tôn trọng) hoặc phong tục, điều cấm kỵ.','Tân ngữ: người (冒犯大王 / 老师), 尊严, 禁忌, 习俗. Lời xin lỗi lịch sự: 如有冒犯，请多包涵 (nếu có gì mạo phạm, xin bỏ qua). Nặng và trang trọng hơn 得罪.'],
   usage:'冒犯 + 某人 / 尊严 / 禁忌; 有所冒犯; 如有冒犯，请多包涵; 不是故意冒犯.',
   collo:['冒犯大王','冒犯老师','如有冒犯','冒犯禁忌'],
   ex_zh:'我并非无理取闹，也不是冒犯大王。',ex_py:'Wǒ bìng fēi wúlǐ-qǔnào, yě bú shì màofàn dàwáng.',ex_vn:'Thần không phải vô cớ gây sự, cũng không phải xúc phạm đại vương.',
   exList:[
     {zh:'不但欺负同学，还冒犯老师、撒谎、不讲信用……劣迹太多，无法一一列举了。',py:'Búdàn qīfu tóngxué, hái màofàn lǎoshī, sā huǎng, bù jiǎng xìnyòng…… lièjì tài duō, wúfǎ yīyī lièjǔ le.',vn:'Không những bắt nạt bạn học, còn xúc phạm thầy cô, nói dối, không giữ chữ tín… việc xấu nhiều quá, không thể kể ra hết được.'},
     {zh:'刚才的话如有冒犯，请您多多包涵。',py:'Gāngcái de huà rú yǒu màofàn, qǐng nín duōduō bāohán.',vn:'Những lời vừa rồi nếu có gì mạo phạm, xin ông / bà rộng lòng bỏ qua cho.'},
     {zh:'到别的国家旅行，要先了解当地的习俗，以免冒犯别人的禁忌。',py:'Dào bié de guójiā lǚxíng, yào xiān liǎojiě dāngdì de xísú, yǐmiǎn màofàn biérén de jìnjì.',vn:'Đi du lịch nước khác, phải tìm hiểu phong tục địa phương trước, để tránh phạm vào điều kiêng kỵ của người ta.'}
   ],
   colloFull:[
     {zh:'冒犯大王',py:'màofàn dàwáng',vn:'mạo phạm đại vương'},
     {zh:'冒犯老师',py:'màofàn lǎoshī',vn:'xúc phạm thầy cô'},
     {zh:'如有冒犯',py:'rú yǒu màofàn',vn:'nếu có gì mạo phạm'},
     {zh:'冒犯禁忌',py:'màofàn jìnjì',vn:'phạm điều kiêng kỵ'},
     {zh:'不是故意冒犯',py:'bú shì gùyì màofàn',vn:'không cố ý xúc phạm'}
   ],
   patterns:[
     {s:'如有冒犯，请（多）包涵',m:'Nếu có gì mạo phạm, xin bỏ qua (lời lịch sự)'},
     {s:'以免 + 冒犯 + ……',m:'Để tránh xúc phạm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không cố ý xúc phạm anh, mong anh đừng để bụng.',answer:'我不是故意冒犯你的，希望你别往心里去。',answerPy:'Wǒ bú shì gùyì màofàn nǐ de, xīwàng nǐ bié wǎng xīn li qù.',
      note:'是……的 nhấn mạnh (不是故意……的); 别往心里去 = đừng để bụng.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nói chuyện với người lớn phải chú ý lời lẽ, để tránh vô tình xúc phạm họ.',answer:'跟长辈说话要注意用词，以免无意中冒犯他们。',answerPy:'Gēn zhǎngbèi shuōhuà yào zhùyì yòngcí, yǐmiǎn wúyì zhōng màofàn tāmen.',
      note:'以免 (bài 21) = để tránh, đứng đầu vế sau.',pair:'以免'}
   ]},

  {n:32,zh:'亦',py:'yì',pos:'Phó từ',vn:'cũng (văn viết)',hv:'diệc',em:'➕',lesson:1,
   explain:['Phó từ văn ngôn = 也 (cũng). Dùng trong văn viết trang trọng, thành ngữ, lời văn cổ: 亦请, 亦称, 亦可, 亦步亦趋, 不亦乐乎.','Vị trí giống 也: đứng sau chủ ngữ, trước động từ. Không dùng trong khẩu ngữ thường ngày (không nói 我亦去).'],
   usage:'亦 + V (亦请 / 亦称 / 亦可 / 亦是); 人云亦云 (người nói sao nói vậy); 不亦乐乎 (vui biết bao).',
   collo:['亦请','亦称','亦可','人云亦云'],
   ex_zh:'大王如真心换璧，亦请举行同样的仪式。',ex_py:'Dàwáng rú zhēnxīn huàn bì, yì qǐng jǔxíng tóngyàng de yíshì.',ex_vn:'Đại vương nếu thật lòng đổi ngọc, cũng xin cử hành nghi lễ giống như vậy.',
   exList:[
     {zh:'民族素质指国内各民族全体成员个体和群体的素质，亦称国民素质。',py:'Mínzú sùzhì zhǐ guónèi gè mínzú quántǐ chéngyuán gètǐ hé qúntǐ de sùzhì, yì chēng guómín sùzhì.',vn:'Tố chất dân tộc chỉ tố chất cá nhân và tập thể của toàn thể thành viên các dân tộc trong nước, cũng gọi là tố chất quốc dân.'},
     {zh:'这道题用两种方法亦可解答，你选择自己熟悉的就行。',py:'Zhè dào tí yòng liǎng zhǒng fāngfǎ yì kě jiědá, nǐ xuǎnzé zìjǐ shúxī de jiù xíng.',vn:'Bài này dùng cả hai cách cũng đều giải được, em chọn cách mình quen là được.'},
     {zh:'做学问要有自己的见解，不能人云亦云。',py:'Zuò xuéwen yào yǒu zìjǐ de jiànjiě, bù néng rényún-yìyún.',vn:'Làm học vấn phải có kiến giải riêng, không thể người ta nói sao mình nói vậy.'}
   ],
   colloFull:[
     {zh:'亦请',py:'yì qǐng',vn:'cũng xin'},
     {zh:'亦称',py:'yì chēng',vn:'cũng gọi là'},
     {zh:'亦可',py:'yì kě',vn:'cũng được'},
     {zh:'人云亦云',py:'rényún-yìyún',vn:'người nói sao nói vậy'},
     {zh:'不亦乐乎',py:'bú yì lè hū',vn:'vui biết bao; (làm) túi bụi'}
   ],
   patterns:[
     {s:'A，亦称 B',m:'A, cũng gọi là B (định nghĩa, thuật ngữ)'},
     {s:'（如）……，亦请 + V',m:'(Nếu) …, cũng xin … (văn trang trọng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết Trung thu, cũng gọi là Tết Đoàn viên, là ngày cả nhà đoàn tụ.',answer:'中秋节亦称团圆节，是全家人团聚的日子。',answerPy:'Zhōngqiū Jié yì chēng Tuányuán Jié, shì quán jiā rén tuánjù de rìzi.',
      note:'亦称 = 也叫 (văn viết); 团圆 (bài 2).',pair:'A 亦称 B'},
     {promptLang:'vi',prompt:'Chúng ta phải có suy nghĩ độc lập, chứ không được người ta nói sao mình nói vậy.',answer:'我们要有独立的思考，而不能人云亦云。',answerPy:'Wǒmen yào yǒu dúlì de sīkǎo, ér bù néng rényún-yìyún.',
      note:'……，而不能…… = … chứ không được ….',pair:'……，而不……'}
   ]},

  {n:33,zh:'边境',py:'biānjìng',pos:'Danh từ',vn:'biên giới, vùng biên',hv:'biên cảnh',em:'🛂',lesson:1,
   explain:['Vùng đất sát đường ranh giới giữa hai nước.','Hay đi với: 越过边境, 边境地区, 边境线, 边境贸易 (mậu dịch biên giới), 边境口岸 (cửa khẩu). Khác 边界 (đường ranh giới) — 边境 nhấn cả vùng đất ven biên.'],
   usage:'越过 + 边境; 边境 + 地区 / 线 / 贸易 / 口岸; 在……边境; 边境问题.',
   collo:['越过边境','边境地区','边境贸易','边境问题'],
   ex_zh:'蔺相如立刻派人打扮成商人的模样，偷偷越过边境，把璧送回了赵国。',ex_py:'Lìn Xiàngrú lìkè pài rén dǎban chéng shāngrén de múyàng, tōutōu yuèguò biānjìng, bǎ bì sònghuíle Zhào guó.',ex_vn:'Lạn Tương Như lập tức sai người cải trang thành thương nhân, lén vượt qua biên giới, đưa ngọc về nước Triệu.',
   exList:[
     {zh:'蔺相如回到住处，立刻派人打扮成商人的模样，偷偷越过边境，把璧送回了赵国。',py:'Lìn Xiàngrú huídào zhùchù, lìkè pài rén dǎban chéng shāngrén de múyàng, tōutōu yuèguò biānjìng, bǎ bì sònghuíle Zhào guó.',vn:'Lạn Tương Như về đến chỗ ở, lập tức sai người cải trang thành thương nhân, lén vượt biên giới, đưa ngọc về nước Triệu.'},
     {zh:'老街是越中边境上的一个城市，边境贸易非常发达。',py:'Lǎojiē shì Yuè-Zhōng biānjìng shang de yí ge chéngshì, biānjìng màoyì fēicháng fādá.',vn:'Lào Cai là một thành phố trên biên giới Việt – Trung, mậu dịch biên giới rất phát triển.'},
     {zh:'两国通过友好磋商，和平解决了边境问题。',py:'Liǎng guó tōngguò yǒuhǎo cuōshāng, hépíng jiějuéle biānjìng wèntí.',vn:'Hai nước thông qua đàm phán hữu nghị, đã giải quyết hoà bình vấn đề biên giới.'}
   ],
   colloFull:[
     {zh:'越过边境',py:'yuèguò biānjìng',vn:'vượt qua biên giới'},
     {zh:'边境地区',py:'biānjìng dìqū',vn:'khu vực biên giới'},
     {zh:'边境贸易',py:'biānjìng màoyì',vn:'mậu dịch biên giới'},
     {zh:'边境问题',py:'biānjìng wèntí',vn:'vấn đề biên giới'},
     {zh:'边境口岸',py:'biānjìng kǒu\'àn',vn:'cửa khẩu biên giới'}
   ],
   patterns:[
     {s:'（偷偷）越过边境',m:'(Lén) vượt qua biên giới'},
     {s:'A 国和 B 国的边境 / A–B 边境',m:'Biên giới giữa nước A và B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì gần biên giới nên ở đây rất nhiều người biết nói cả tiếng Việt lẫn tiếng Trung.',answer:'因为靠近边境，所以这里很多人既会说越南语，也会说汉语。',answerPy:'Yīnwèi kàojìn biānjìng, suǒyǐ zhèli hěn duō rén jì huì shuō Yuènányǔ, yě huì shuō Hànyǔ.',
      note:'既……也……: vừa … cũng …; 因为……所以…….',pair:'既……也……'},
     {promptLang:'vi',prompt:'Muốn qua biên giới, trước hết phải làm thủ tục ở cửa khẩu.',answer:'要想越过边境，首先得在口岸办手续。',answerPy:'Yào xiǎng yuèguò biānjìng, shǒuxiān děi zài kǒu\'àn bàn shǒuxù.',
      note:'要想……，首先得…… = muốn … thì trước hết phải ….',pair:'要想……，首先……'}
   ]},

  {n:34,zh:'泄露',py:'xièlòu',pos:'Động từ',vn:'tiết lộ, làm lộ (bí mật)',hv:'tiết lộ',em:'🔓',lesson:1,
   explain:['Để lộ ra điều lẽ ra phải giữ kín (bí mật, thông tin, đề thi…) — thường là việc không nên làm hoặc do sơ suất.','Tân ngữ: 秘密, 消息, 隐私, 个人信息, 考题, 天机. Khác 透露 (hé lộ, có chủ ý, trung tính): 泄露 thường mang nghĩa tiêu cực.'],
   usage:'泄露 + 秘密 / 消息 / 信息 / 隐私; 不可 / 严禁 + 泄露; 被泄露; 泄露出去.',
   collo:['泄露秘密','不可泄露','泄露信息','泄露出去'],
   ex_zh:'并嘱咐身边的人，不可泄露秘密。',ex_py:'Bìng zhǔfù shēnbiān de rén, bù kě xièlòu mìmì.',ex_vn:'Đồng thời dặn người bên cạnh không được tiết lộ bí mật.',
   exList:[
     {zh:'蔺相如把璧送回了赵国，并嘱咐身边的人，不可泄露秘密。',py:'Lìn Xiàngrú bǎ bì sònghuíle Zhào guó, bìng zhǔfù shēnbiān de rén, bù kě xièlòu mìmì.',vn:'Lạn Tương Như đưa ngọc về nước Triệu, đồng thời dặn người bên cạnh không được tiết lộ bí mật.'},
     {zh:'这家网站泄露了大量用户的个人信息，引起了人们的愤怒。',py:'Zhè jiā wǎngzhàn xièlòule dàliàng yònghù de gèrén xìnxī, yǐnqǐle rénmen de fènnù.',vn:'Trang web này để lộ thông tin cá nhân của một lượng lớn người dùng, khiến mọi người phẫn nộ.'},
     {zh:'这是我们俩的秘密，你千万别泄露出去。',py:'Zhè shì wǒmen liǎ de mìmì, nǐ qiānwàn bié xièlòu chūqù.',vn:'Đây là bí mật của hai đứa mình, cậu tuyệt đối đừng để lộ ra ngoài.'}
   ],
   colloFull:[
     {zh:'泄露秘密',py:'xièlòu mìmì',vn:'tiết lộ bí mật'},
     {zh:'不可泄露',py:'bù kě xièlòu',vn:'không được tiết lộ'},
     {zh:'泄露信息',py:'xièlòu xìnxī',vn:'làm lộ thông tin'},
     {zh:'泄露出去',py:'xièlòu chūqù',vn:'lộ ra ngoài'},
     {zh:'泄露隐私',py:'xièlòu yǐnsī',vn:'để lộ đời tư'}
   ],
   patterns:[
     {s:'嘱咐 + 某人 + 不可泄露秘密',m:'Dặn ai không được tiết lộ bí mật'},
     {s:'千万别 + 泄露出去',m:'Tuyệt đối đừng để lộ ra ngoài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu để lộ đề thi, người đó sẽ bị xử phạt nghiêm khắc.',answer:'要是泄露了考题，那个人就会受到严厉的惩罚。',answerPy:'Yàoshi xièlòule kǎotí, nàge rén jiù huì shòudào yánlì de chéngfá.',
      note:'要是……就……; 受到惩罚 = bị phạt (惩罚 — bài 8, 严厉 — bài 1).',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Để tránh lộ thông tin cá nhân, đừng tuỳ tiện đăng ảnh lên mạng.',answer:'为了避免泄露个人信息，不要随便把照片发到网上。',answerPy:'Wèile bìmiǎn xièlòu gèrén xìnxī, bú yào suíbiàn bǎ zhàopiàn fādào wǎng shang.',
      note:'为了避免…… = để tránh …; 把 + O + 发到 + nơi chốn.',pair:'为了……'}
   ]},


  {n:35,zh:'率领',py:'shuàilǐng',pos:'Động từ',vn:'dẫn đầu, chỉ huy, dẫn dắt',hv:'suất lĩnh',em:'🚩',lesson:1,
   explain:['Đi đầu dẫn một nhóm người (đoàn, đội quân, đội tuyển…) đi làm việc gì.','Cấu trúc: 率领 + 队伍 / 代表团 / 众臣 / 军队 (+ V); bị động: 在……的率领下. Trang trọng hơn 带领; 率 ở đây đọc shuài (khác 效率 lǜ).'],
   usage:'率领 + 众臣 / 代表团 / 球队 + V; 在 + 某人 + 的率领下，……; 亲自率领.',
   collo:['率领众臣','率领代表团','在……的率领下','亲自率领'],
   ex_zh:'五天后，秦王率领众臣，准备接收和氏璧。',ex_py:'Wǔ tiān hòu, Qín wáng shuàilǐng zhòng chén, zhǔnbèi jiēshōu Héshì bì.',ex_vn:'Năm ngày sau, vua Tần dẫn các đại thần, chuẩn bị nhận ngọc họ Hoà.',
   exList:[
     {zh:'五天后，秦王率领众臣，准备接收和氏璧。蔺相如镇静地对秦王说……',py:'Wǔ tiān hòu, Qín wáng shuàilǐng zhòng chén, zhǔnbèi jiēshōu Héshì bì. Lìn Xiàngrú zhènjìng de duì Qín wáng shuō……',vn:'Năm ngày sau, vua Tần dẫn các đại thần, chuẩn bị nhận ngọc họ Hoà. Lạn Tương Như điềm tĩnh nói với vua Tần…'},
     {zh:'校长亲自率领代表团去国外参加比赛。',py:'Xiàozhǎng qīnzì shuàilǐng dàibiǎotuán qù guówài cānjiā bǐsài.',vn:'Thầy hiệu trưởng đích thân dẫn đoàn đại biểu ra nước ngoài dự thi.'},
     {zh:'在新教练的率领下，这支球队一年之内就从最后一名打进了前三名。',py:'Zài xīn jiàoliàn de shuàilǐng xià, zhè zhī qiúduì yì nián zhī nèi jiù cóng zuìhòu yì míng dǎjìnle qián sān míng.',vn:'Dưới sự dẫn dắt của huấn luyện viên mới, đội bóng này trong vòng một năm đã từ vị trí bét lọt vào tốp ba.'}
   ],
   colloFull:[
     {zh:'率领众臣',py:'shuàilǐng zhòng chén',vn:'dẫn các đại thần'},
     {zh:'率领代表团',py:'shuàilǐng dàibiǎotuán',vn:'dẫn đầu đoàn đại biểu'},
     {zh:'在……的率领下',py:'zài…… de shuàilǐng xià',vn:'dưới sự dẫn dắt của …'},
     {zh:'亲自率领',py:'qīnzì shuàilǐng',vn:'đích thân dẫn đầu'},
     {zh:'率领军队',py:'shuàilǐng jūnduì',vn:'chỉ huy quân đội'}
   ],
   patterns:[
     {s:'某人 + 率领 + 团体 + V',m:'Ai dẫn đầu nhóm nào đi làm gì'},
     {s:'在 + 某人 + 的率领下，……',m:'Dưới sự dẫn dắt của ai, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dưới sự dẫn dắt của lớp trưởng, cả lớp đã hoàn thành nhiệm vụ trước thời hạn.',answer:'在班长的率领下，全班同学提前完成了任务。',answerPy:'Zài bānzhǎng de shuàilǐng xià, quán bān tóngxué tíqián wánchéngle rènwu.',
      note:'在……下 làm trạng ngữ điều kiện; 提前 + V = làm trước thời hạn.',pair:'在……下'},
     {promptLang:'vi',prompt:'Ông ấy không những dẫn đầu đội ngũ, mà còn luôn xông lên phía trước nhất.',answer:'他不但率领队伍，而且总是冲在最前面。',answerPy:'Tā búdàn shuàilǐng duìwu, érqiě zǒngshì chōng zài zuì qiánmiàn.',
      note:'不但……而且……; 队伍 (bài 16).',pair:'不但……而且……'}
   ]},

  {n:36,zh:'镇静',py:'zhènjìng',pos:'Tính từ',vn:'bình tĩnh, trấn tĩnh',hv:'trấn tĩnh',em:'😌',lesson:1,
   explain:['(Khi gặp chuyện gấp, nguy hiểm, căng thẳng) giữ được tâm trạng bình ổn, không hoảng loạn.','Hay làm trạng ngữ: 镇静地说; vị ngữ: 保持镇静, 显得很镇静; động từ: 镇静下来. Gần nghĩa 冷静 (tỉnh táo, lý trí) và 从容 (ung dung) — 镇静 nhấn việc "trấn áp được sự hoảng hốt".'],
   usage:'镇静 + 地 + V; 保持 + 镇静; 镇静下来; 故作镇静 (giả vờ bình tĩnh); 神色镇静.',
   collo:['镇静地说','保持镇静','镇静下来','故作镇静'],
   ex_zh:'蔺相如镇静地对秦王说……',ex_py:'Lìn Xiàngrú zhènjìng de duì Qín wáng shuō……',ex_vn:'Lạn Tương Như bình tĩnh nói với vua Tần…',
   exList:[
     {zh:'秦王率领众臣，准备接收和氏璧。蔺相如镇静地对秦王说：“今天，我怕大王您不履行承诺，已经把璧送回了赵国。”',py:'Qín wáng shuàilǐng zhòng chén, zhǔnbèi jiēshōu Héshì bì. Lìn Xiàngrú zhènjìng de duì Qín wáng shuō: "Jīntiān, wǒ pà dàwáng nín bù lǚxíng chéngnuò, yǐjīng bǎ bì sònghuíle Zhào guó."',vn:'Vua Tần dẫn các đại thần, chuẩn bị nhận ngọc họ Hoà. Lạn Tương Như bình tĩnh nói với vua Tần: "Hôm nay, thần sợ đại vương không giữ lời hứa, nên đã đưa ngọc về nước Triệu rồi."'},
     {zh:'发生地震时，一定要保持镇静，按照老师的指挥有序撤离。',py:'Fāshēng dìzhèn shí, yídìng yào bǎochí zhènjìng, ànzhào lǎoshī de zhǐhuī yǒuxù chèlí.',vn:'Khi xảy ra động đất, nhất định phải giữ bình tĩnh, theo sự chỉ huy của thầy cô sơ tán có trật tự.'},
     {zh:'听到这个坏消息，她虽然故作镇静，手却一直在发抖。',py:'Tīngdào zhège huài xiāoxi, tā suīrán gùzuò zhènjìng, shǒu què yìzhí zài fādǒu.',vn:'Nghe tin xấu này, tuy cô ấy cố tỏ ra bình tĩnh nhưng tay thì cứ run lên.'}
   ],
   colloFull:[
     {zh:'镇静地说',py:'zhènjìng de shuō',vn:'bình tĩnh nói'},
     {zh:'保持镇静',py:'bǎochí zhènjìng',vn:'giữ bình tĩnh'},
     {zh:'镇静下来',py:'zhènjìng xiàlái',vn:'bình tĩnh lại'},
     {zh:'故作镇静',py:'gùzuò zhènjìng',vn:'cố tỏ ra bình tĩnh'},
     {zh:'神色镇静',py:'shénsè zhènjìng',vn:'nét mặt bình tĩnh'}
   ],
   patterns:[
     {s:'镇静 + 地 + 对 + 某人 + 说',m:'Bình tĩnh nói với ai'},
     {s:'（遇到……时）要保持镇静',m:'(Khi gặp …) phải giữ bình tĩnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng gặp nguy hiểm thì càng phải giữ bình tĩnh.',answer:'越是遇到危险，越要保持镇静。',answerPy:'Yuè shì yùdào wēixiǎn, yuè yào bǎochí zhènjìng.',
      note:'越是……越…… = càng … càng … (nhấn điều kiện).',pair:'越……越……'},
     {promptLang:'vi',prompt:'Hít thở sâu vài lần, cậu sẽ bình tĩnh lại ngay.',answer:'深呼吸几次，你马上就会镇静下来的。',answerPy:'Shēn hūxī jǐ cì, nǐ mǎshàng jiù huì zhènjìng xiàlái de.',
      note:'Adj + 下来 = trạng thái từ động chuyển sang tĩnh; 会……的 = chắc chắn sẽ.',pair:'……下来'}
   ]},

  {n:37,zh:'雄厚',py:'xiónghòu',pos:'Tính từ',vn:'hùng hậu, dồi dào (thực lực, vốn)',hv:'hùng hậu',em:'🏦',lesson:1,
   explain:['(Thực lực, nhân lực, vật lực, vốn liếng, nền tảng) đầy đủ, dồi dào, mạnh.','Chủ ngữ thường là: 实力, 国力, 资金, 财力, 基础, 技术力量. Không dùng tả người hay đồ vật cụ thể (không nói 他很雄厚).'],
   usage:'实力 / 国力 / 资金 / 财力 / 基础 + 雄厚; 雄厚的 + 实力 / 资金; 仗着……雄厚.',
   collo:['国力雄厚','资金雄厚','实力雄厚','雄厚的基础'],
   ex_zh:'秦国仗着国力雄厚，一贯霸道，不讲信用。',ex_py:'Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng.',ex_vn:'Nước Tần cậy quốc lực hùng hậu, xưa nay vẫn ngang ngược, không giữ chữ tín.',
   exList:[
     {zh:'蔺相如镇静地对秦王说：“秦国仗着国力雄厚，一贯霸道，不讲信用，声誉不好。”',py:'Lìn Xiàngrú zhènjìng de duì Qín wáng shuō: "Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng, shēngyù bù hǎo."',vn:'Lạn Tương Như bình tĩnh nói với vua Tần: "Nước Tần cậy quốc lực hùng hậu, xưa nay ngang ngược, không giữ chữ tín, tiếng tăm không tốt."'},
     {zh:'他仗着家里资金雄厚，常常无理取闹。',py:'Tā zhàngzhe jiāli zījīn xiónghòu, chángcháng wúlǐ-qǔnào.',vn:'Cậu ta cậy nhà có tiền của dồi dào, thường xuyên kiếm chuyện gây sự.'},
     {zh:'这家公司技术力量雄厚，几年之内就成为了行业的领头人。',py:'Zhè jiā gōngsī jìshù lìliàng xiónghòu, jǐ nián zhī nèi jiù chéngwéile hángyè de lǐngtóurén.',vn:'Công ty này có lực lượng kỹ thuật hùng hậu, chỉ trong vài năm đã trở thành người dẫn đầu ngành.'}
   ],
   colloFull:[
     {zh:'国力雄厚',py:'guólì xiónghòu',vn:'quốc lực hùng hậu'},
     {zh:'资金雄厚',py:'zījīn xiónghòu',vn:'vốn dồi dào'},
     {zh:'实力雄厚',py:'shílì xiónghòu',vn:'thực lực hùng hậu'},
     {zh:'雄厚的基础',py:'xiónghòu de jīchǔ',vn:'nền tảng vững mạnh'},
     {zh:'财力雄厚',py:'cáilì xiónghòu',vn:'tài lực dồi dào'}
   ],
   patterns:[
     {s:'仗着 + 实力 / 资金 + 雄厚，……',m:'Cậy vào thực lực / vốn hùng hậu mà …'},
     {s:'N + 实力雄厚',m:'… có thực lực hùng hậu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đối thủ có vốn dồi dào, nhưng sản phẩm của chúng ta sáng tạo hơn.',answer:'尽管对手资金雄厚，但是我们的产品更有创意。',answerPy:'Jǐnguǎn duìshǒu zījīn xiónghòu, dànshì wǒmen de chǎnpǐn gèng yǒu chuàngyì.',
      note:'尽管……但是…… = mặc dù … nhưng ….',pair:'尽管……但是……'},
     {promptLang:'vi',prompt:'Chính vì nền tảng vững chắc, cậu ấy mới học lên HSK 6 nhanh như vậy.',answer:'正因为基础雄厚，他才能这么快学到HSK六级。',answerPy:'Zhèng yīnwèi jīchǔ xiónghòu, tā cái néng zhème kuài xuédào HSK liù jí.',
      note:'正因为……，才…… = chính vì … nên mới ….',pair:'正因为……才……'}
   ]},

  {n:38,zh:'一贯',py:'yíguàn',pos:'Tính từ',vn:'nhất quán, trước sau như một, xưa nay vẫn thế',hv:'nhất quán',em:'📏',lesson:1,
   explain:['(Tư tưởng, tác phong, thái độ, chủ trương) từ trước đến nay vẫn luôn như vậy, chưa hề thay đổi. Là TÍNH TỪ: có thể bổ nghĩa cho danh từ (一贯的作风 / 态度 / 手段) và làm trạng ngữ (一贯霸道, 一贯谦虚).','Phân biệt với 一直 (xem 词语辨析): 一贯 không biểu thị động tác kéo dài (不说 雨一贯下了三天), không dùng cho tương lai (不说 一贯坚持下去). Pinyin: yíguàn (一 trước thanh 4).'],
   usage:'一贯 + 的 + 作风 / 态度 / 手段 / 主张; 一贯 + Adj/V (一贯霸道 / 一贯为人谦虚); 一贯如此.',
   collo:['一贯霸道','一贯的作风','一贯的态度','一贯如此'],
   ex_zh:'秦国仗着国力雄厚，一贯霸道，不讲信用，声誉不好。',ex_py:'Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng, shēngyù bù hǎo.',ex_vn:'Nước Tần cậy quốc lực hùng hậu, xưa nay vẫn ngang ngược, không giữ chữ tín, tiếng tăm không tốt.',
   exList:[
     {zh:'说实话，欺上瞒下是他一贯的手段。',py:'Shuō shíhuà, qīshàng-mánxià shì tā yíguàn de shǒuduàn.',vn:'Nói thật, lừa trên dối dưới là thủ đoạn quen dùng xưa nay của hắn.'},
     {zh:'爷爷一贯为人谦虚热情，是个公认的好人。',py:'Yéye yíguàn wéirén qiānxū rèqíng, shì ge gōngrèn de hǎorén.',vn:'Ông nội xưa nay vẫn sống khiêm tốn, nhiệt tình, là người tốt được mọi người công nhận.'},
     {zh:'谦虚、朴素是他一贯的作风，当了经理以后也没有变。',py:'Qiānxū, pǔsù shì tā yíguàn de zuòfēng, dāngle jīnglǐ yǐhòu yě méiyǒu biàn.',vn:'Khiêm tốn, giản dị là tác phong trước sau như một của anh ấy, làm giám đốc rồi cũng không thay đổi.'}
   ],
   colloFull:[
     {zh:'一贯霸道',py:'yíguàn bàdào',vn:'xưa nay ngang ngược'},
     {zh:'一贯的作风',py:'yíguàn de zuòfēng',vn:'tác phong nhất quán'},
     {zh:'一贯的态度',py:'yíguàn de tàidu',vn:'thái độ trước sau như một'},
     {zh:'一贯如此',py:'yíguàn rúcǐ',vn:'xưa nay vẫn vậy'},
     {zh:'一贯的手段',py:'yíguàn de shǒuduàn',vn:'thủ đoạn quen dùng'}
   ],
   patterns:[
     {s:'……是 + 某人 + 一贯的 + 作风 / 态度',m:'… là tác phong / thái độ xưa nay của ai'},
     {s:'某人 + 一贯 + Adj / V',m:'Ai đó xưa nay vẫn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc nghiêm túc là tác phong trước sau như một của cô ấy, vì vậy ai cũng tin tưởng cô ấy.',answer:'做事认真是她一贯的作风，所以大家都很信任她。',answerPy:'Zuòshì rènzhēn shì tā yíguàn de zuòfēng, suǒyǐ dàjiā dōu hěn xìnrèn tā.',
      note:'一贯 là tính từ → 一贯的 + N (一直 không làm được thế).',pair:'……，所以……'},
     {promptLang:'vi',prompt:'Anh ta xưa nay vẫn ngang ngược, chẳng trách không ai muốn làm việc cùng anh ta.',answer:'他一贯霸道，难怪没有人愿意跟他合作。',answerPy:'Tā yíguàn bàdào, nánguài méiyǒu rén yuànyì gēn tā hézuò.',
      note:'难怪 = chẳng trách; 一贯 + Adj làm vị ngữ.',pair:'难怪'}
   ]},

  {n:39,zh:'霸道',py:'bàdào',pos:'Tính từ',vn:'ngang ngược, hống hách, độc đoán',hv:'bá đạo',em:'👊',lesson:1,
   explain:['(Người, nước) cậy mạnh, cậy thế, không nói lý, bắt người khác phải theo ý mình.','Hay đi với: 一贯霸道, 很霸道的学生, 霸道的作风; 横行霸道 (hoành hành ngang ngược). Chú ý: "bá đạo" trong tiếng Việt hiện đại (tiếng lóng) có thể mang nghĩa khen "đỉnh, ngầu" — tiếng Trung 霸道 nghĩa chê.'],
   usage:'（一贯 / 很）霸道; 霸道的 + 人 / 作风; 对……很霸道; 横行霸道.',
   collo:['一贯霸道','很霸道','霸道的作风','横行霸道'],
   ex_zh:'秦国仗着国力雄厚，一贯霸道，不讲信用。',ex_py:'Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng.',ex_vn:'Nước Tần cậy quốc lực hùng hậu, xưa nay vẫn ngang ngược, không giữ chữ tín.',
   exList:[
     {zh:'班里有个很霸道的学生，大家都讨厌他。',py:'Bān li yǒu ge hěn bàdào de xuésheng, dàjiā dōu tǎoyàn tā.',vn:'Trong lớp có một học sinh rất ngang ngược, mọi người đều ghét cậu ta.'},
     {zh:'他在家里很霸道，什么事都得听他的。',py:'Tā zài jiāli hěn bàdào, shénme shì dōu děi tīng tā de.',vn:'Ở nhà anh ta rất độc đoán, việc gì cũng phải nghe theo anh ta.'},
     {zh:'一个国家再强大，如果横行霸道，也得不到别国的尊重。',py:'Yí ge guójiā zài qiángdà, rúguǒ héngxíng-bàdào, yě dé bu dào biéguó de zūnzhòng.',vn:'Một quốc gia dù mạnh đến đâu, nếu hoành hành ngang ngược thì cũng không nhận được sự tôn trọng của nước khác.'}
   ],
   colloFull:[
     {zh:'一贯霸道',py:'yíguàn bàdào',vn:'xưa nay ngang ngược'},
     {zh:'很霸道',py:'hěn bàdào',vn:'rất hống hách'},
     {zh:'霸道的作风',py:'bàdào de zuòfēng',vn:'tác phong độc đoán'},
     {zh:'横行霸道',py:'héngxíng-bàdào',vn:'hoành hành ngang ngược'},
     {zh:'霸道的学生',py:'bàdào de xuésheng',vn:'học sinh ngang ngược'}
   ],
   patterns:[
     {s:'仗着……，一贯霸道',m:'Cậy …, xưa nay ngang ngược'},
     {s:'某人 + 在 / 对 + ……很霸道',m:'Ai đó rất độc đoán ở / với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù cậu có lý đến mấy cũng không được hống hách như vậy.',answer:'就算你再有理，也不能这么霸道。',answerPy:'Jiùsuàn nǐ zài yǒu lǐ, yě bù néng zhème bàdào.',
      note:'就算……也…… = cho dù … cũng … (giả thiết nhượng bộ).',pair:'就算……也……'},
     {promptLang:'vi',prompt:'Anh ta ngang ngược đến mức ngay cả bạn thân cũng xa lánh anh ta.',answer:'他霸道得连好朋友都疏远他了。',answerPy:'Tā bàdào de lián hǎo péngyou dōu shūyuǎn tā le.',
      note:'Adj + 得 + 连……都…… = … đến mức ngay cả … cũng ….',pair:'连……都……'}
   ]},

  {n:40,zh:'声誉',py:'shēngyù',pos:'Danh từ',vn:'danh tiếng, tiếng tăm, uy tín',hv:'thanh dự',em:'📢',lesson:1,
   explain:['Tiếng tăm, danh dự của một người / tổ chức / quốc gia trong mắt xã hội.','Hay đi với: 声誉 + 好 / 不好 / 很高; 享有声誉 (có danh tiếng), 损害 / 影响 + 声誉, 国际声誉. Gần 名声, 信誉 (bài 3: uy tín, nhấn chữ tín trong làm ăn).'],
   usage:'声誉 + 好 / 不好 / 很高; 享有（很高的）声誉; 损害 / 影响 / 提高 + 声誉; 国际声誉.',
   collo:['声誉不好','享有声誉','损害声誉','国际声誉'],
   ex_zh:'秦国一贯霸道，不讲信用，声誉不好。',ex_py:'Qín guó yíguàn bàdào, bù jiǎng xìnyòng, shēngyù bù hǎo.',ex_vn:'Nước Tần xưa nay ngang ngược, không giữ chữ tín, tiếng tăm không tốt.',
   exList:[
     {zh:'秦国仗着国力雄厚，一贯霸道，不讲信用，声誉不好，事情我就不一一列举了。',py:'Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng, shēngyù bù hǎo, shìqing wǒ jiù bù yīyī lièjǔ le.',vn:'Nước Tần cậy quốc lực hùng hậu, xưa nay ngang ngược, không giữ chữ tín, tiếng tăm không tốt, những việc ấy thần không kể ra từng việc nữa.'},
     {zh:'这所大学历史悠久，在国内外都享有很高的声誉。',py:'Zhè suǒ dàxué lìshǐ yōujiǔ, zài guónèiwài dōu xiǎngyǒu hěn gāo de shēngyù.',vn:'Trường đại học này có lịch sử lâu đời, được hưởng danh tiếng rất cao cả trong và ngoài nước.'},
     {zh:'一次质量问题就可能严重损害公司多年建立的声誉。',py:'Yí cì zhìliàng wèntí jiù kěnéng yánzhòng sǔnhài gōngsī duō nián jiànlì de shēngyù.',vn:'Chỉ một lần có vấn đề chất lượng cũng có thể làm tổn hại nghiêm trọng danh tiếng công ty gây dựng bao năm.'}
   ],
   colloFull:[
     {zh:'声誉不好',py:'shēngyù bù hǎo',vn:'tiếng tăm không tốt'},
     {zh:'享有声誉',py:'xiǎngyǒu shēngyù',vn:'có danh tiếng'},
     {zh:'损害声誉',py:'sǔnhài shēngyù',vn:'tổn hại danh tiếng'},
     {zh:'国际声誉',py:'guójì shēngyù',vn:'danh tiếng quốc tế'},
     {zh:'声誉很高',py:'shēngyù hěn gāo',vn:'danh tiếng rất cao'}
   ],
   patterns:[
     {s:'在……享有（很高的）声誉',m:'Có danh tiếng (cao) ở …'},
     {s:'损害 / 影响 + ……的声誉',m:'Làm tổn hại / ảnh hưởng danh tiếng của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi mất đi danh tiếng thì rất khó lấy lại.',answer:'声誉一旦失去，就很难再挽回了。',answerPy:'Shēngyù yídàn shīqù, jiù hěn nán zài wǎnhuí le.',
      note:'一旦……就…… = một khi … thì ….',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Để giữ gìn danh tiếng của trường, chúng ta phải tuân thủ nội quy.',answer:'为了维护学校的声誉，我们必须遵守校规。',answerPy:'Wèile wéihù xuéxiào de shēngyù, wǒmen bìxū zūnshǒu xiàoguī.',
      note:'维护 (bài 23) + 声誉 / 利益 / 秩序.',pair:'为了……'}
   ]},

  {n:41,zh:'列举',py:'lièjǔ',pos:'Động từ',vn:'liệt kê, kể ra, nêu ra',hv:'liệt cử',em:'📋',lesson:1,
   explain:['Nêu ra từng cái một (ví dụ, sự việc, lý do, số liệu).','Hay dùng: 一一列举 (kể ra từng cái), 无法一一列举 / 不一一列举了 (không kể hết), 列举 + 例子 / 事实 / 原因. Văn viết, dùng nhiều trong bài luận.'],
   usage:'（一一）列举 + 例子 / 事实 / 原因; 不一一列举了; 无法一一列举; 列举出来.',
   collo:['一一列举','列举例子','无法一一列举','列举事实'],
   ex_zh:'事情我就不一一列举了。',ex_py:'Shìqing wǒ jiù bù yīyī lièjǔ le.',ex_vn:'Những việc ấy thần sẽ không kể ra từng việc nữa.',
   exList:[
     {zh:'不但欺负同学，还冒犯老师、撒谎、不讲信用……劣迹太多，无法一一列举了。',py:'Búdàn qīfu tóngxué, hái màofàn lǎoshī, sā huǎng, bù jiǎng xìnyòng…… lièjì tài duō, wúfǎ yīyī lièjǔ le.',vn:'Không những bắt nạt bạn học, còn xúc phạm thầy cô, nói dối, không giữ chữ tín… việc xấu quá nhiều, không thể kể ra hết.'},
     {zh:'写议论文时，要列举具体的例子来支持自己的观点。',py:'Xiě yìlùnwén shí, yào lièjǔ jùtǐ de lìzi lái zhīchí zìjǐ de guāndiǎn.',vn:'Khi viết văn nghị luận, phải nêu ra ví dụ cụ thể để làm chỗ dựa cho quan điểm của mình.'},
     {zh:'他列举了大量事实，证明这种说法是错误的。',py:'Tā lièjǔle dàliàng shìshí, zhèngmíng zhè zhǒng shuōfǎ shì cuòwù de.',vn:'Anh ấy đã nêu ra rất nhiều sự thật, chứng minh cách nói này là sai.'}
   ],
   colloFull:[
     {zh:'一一列举',py:'yīyī lièjǔ',vn:'kể ra từng cái'},
     {zh:'列举例子',py:'lièjǔ lìzi',vn:'nêu ví dụ'},
     {zh:'无法一一列举',py:'wúfǎ yīyī lièjǔ',vn:'không thể kể hết'},
     {zh:'列举事实',py:'lièjǔ shìshí',vn:'nêu sự thật'},
     {zh:'列举原因',py:'lièjǔ yuányīn',vn:'kể ra nguyên nhân'}
   ],
   patterns:[
     {s:'……太多，无法一一列举',m:'… nhiều quá, không thể kể hết'},
     {s:'列举 + 例子 / 事实 + 来 + 证明 / 说明',m:'Nêu ví dụ / sự thật để chứng minh / giải thích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lợi ích của việc đọc sách nhiều quá, tôi không kể ra từng cái một nữa.',answer:'读书的好处太多了，我就不一一列举了。',answerPy:'Dúshū de hǎochù tài duō le, wǒ jiù bù yīyī lièjǔ le.',
      note:'一一 đọc yīyī (giữ thanh 1 khi đứng liền nhau); 不……了 = không … nữa.',pair:'太……了'},
     {promptLang:'vi',prompt:'Ngoài việc nêu ví dụ, bạn còn cần phân tích nguyên nhân.',answer:'除了列举例子以外，你还需要分析原因。',answerPy:'Chúle lièjǔ lìzi yǐwài, nǐ hái xūyào fēnxī yuányīn.',
      note:'除了……以外，还…… = ngoài … ra, còn ….',pair:'除了……以外，还……'}
   ]},

  {n:42,zh:'履行',py:'lǚxíng',pos:'Động từ',vn:'thực hiện, thực thi (lời hứa, nghĩa vụ)',hv:'lý hành',em:'📜',lesson:1,
   explain:['Làm đúng những gì đã hứa hoặc những gì phải làm theo trách nhiệm.','Tân ngữ: 承诺, 诺言, 义务, 职责, 合同, 手续. Phân biệt: 兑现 nhấn "biến lời hứa thành hiện thực" (hay dùng với 承诺 / 诺言 / 支票); 履行 dùng rộng hơn cho nghĩa vụ, hợp đồng, chức trách — văn viết, trang trọng.'],
   usage:'履行 + 承诺 / 义务 / 职责 / 合同; 认真 / 按时 + 履行; 不履行 + ……; 履行手续.',
   collo:['履行承诺','履行义务','履行职责','履行合同'],
   ex_zh:'今天，我怕大王您不履行承诺，已经把璧送回了赵国。',ex_py:'Jīntiān, wǒ pà dàwáng nín bù lǚxíng chéngnuò, yǐjīng bǎ bì sònghuíle Zhào guó.',ex_vn:'Hôm nay, thần sợ đại vương không thực hiện lời hứa, nên đã đưa ngọc về nước Triệu rồi.',
   exList:[
     {zh:'蔺相如镇静地说：“今天，我怕大王您不履行承诺，已经把璧送回了赵国。”',py:'Lìn Xiàngrú zhènjìng de shuō: "Jīntiān, wǒ pà dàwáng nín bù lǚxíng chéngnuò, yǐjīng bǎ bì sònghuíle Zhào guó."',vn:'Lạn Tương Như bình tĩnh nói: "Hôm nay, thần sợ đại vương không giữ lời hứa, nên đã đưa ngọc về nước Triệu rồi."'},
     {zh:'每个公民都应该履行纳税的义务。',py:'Měi ge gōngmín dōu yīnggāi lǚxíng nàshuì de yìwù.',vn:'Mỗi công dân đều nên thực hiện nghĩa vụ nộp thuế.'},
     {zh:'如果对方不履行合同，我们有权要求赔偿。',py:'Rúguǒ duìfāng bù lǚxíng hétong, wǒmen yǒu quán yāoqiú péicháng.',vn:'Nếu phía bên kia không thực hiện hợp đồng, chúng tôi có quyền yêu cầu bồi thường.'}
   ],
   colloFull:[
     {zh:'履行承诺',py:'lǚxíng chéngnuò',vn:'thực hiện lời hứa'},
     {zh:'履行义务',py:'lǚxíng yìwù',vn:'thực hiện nghĩa vụ'},
     {zh:'履行职责',py:'lǚxíng zhízé',vn:'thực thi chức trách'},
     {zh:'履行合同',py:'lǚxíng hétong',vn:'thực hiện hợp đồng'},
     {zh:'履行手续',py:'lǚxíng shǒuxù',vn:'làm thủ tục'}
   ],
   patterns:[
     {s:'（认真 / 按时）履行 + 承诺 / 义务',m:'(Nghiêm túc / đúng hạn) thực hiện lời hứa / nghĩa vụ'},
     {s:'怕 + 某人 + 不履行承诺',m:'Sợ ai không giữ lời hứa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã nhận lời làm lớp trưởng thì phải thực hiện tốt chức trách của lớp trưởng.',answer:'既然答应当班长，就要履行好班长的职责。',answerPy:'Jìrán dāying dāng bānzhǎng, jiù yào lǚxíng hǎo bānzhǎng de zhízé.',
      note:'既然……就…… = đã … thì …; 履行好 = bổ ngữ kết quả.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Chỉ khi thực hiện lời hứa, người khác mới tin tưởng bạn.',answer:'只有履行承诺，别人才会信任你。',answerPy:'Zhǐyǒu lǚxíng chéngnuò, biérén cái huì xìnrèn nǐ.',
      note:'只有……才……; 才 đứng sau chủ ngữ của vế sau.',pair:'只有……才……'}
   ]},

  {n:43,zh:'歪曲',py:'wāiqū',pos:'Động từ',vn:'xuyên tạc, bóp méo',hv:'oai khúc',em:'🌀',lesson:1,
   explain:['Cố ý làm sai lệch, bóp méo sự thật, ý nghĩa, lời nói của người khác.','Tân ngữ: 意思, 事实, 历史, 真相, 原意. Hay dùng trong câu hỏi phản vấn chỉ trích: 你这不是歪曲我的意思吗? Mang nghĩa xấu.'],
   usage:'歪曲 + 意思 / 事实 / 历史 / 真相; 故意 / 恶意 + 歪曲; 被歪曲; 你这不是歪曲……吗?',
   collo:['歪曲我的意思','歪曲事实','歪曲历史','故意歪曲'],
   ex_zh:'你这不是歪曲我的意思吗？',ex_py:'Nǐ zhè bú shì wāiqū wǒ de yìsi ma?',ex_vn:'Như thế chẳng phải ngươi đang xuyên tạc ý của ta sao?',
   exList:[
     {zh:'秦王听后大怒，说：“我堂堂秦王，还会骗你不成？你这不是歪曲我的意思吗？”',py:'Qín wáng tīng hòu dà nù, shuō: "Wǒ tángtáng Qín wáng, hái huì piàn nǐ bùchéng? Nǐ zhè bú shì wāiqū wǒ de yìsi ma?"',vn:'Vua Tần nghe xong nổi giận, nói: "Ta đường đường là vua Tần, lẽ nào lại lừa ngươi? Như thế chẳng phải ngươi xuyên tạc ý của ta sao?"'},
     {zh:'有些网络文章故意歪曲事实，读者一定要学会分辨。',py:'Yǒuxiē wǎngluò wénzhāng gùyì wāiqū shìshí, dúzhě yídìng yào xuéhuì fēnbiàn.',vn:'Một số bài viết trên mạng cố tình bóp méo sự thật, người đọc nhất định phải học cách phân biệt.'},
     {zh:'我说的话被他歪曲了，现在大家都误会我了。',py:'Wǒ shuō de huà bèi tā wāiqū le, xiànzài dàjiā dōu wùhuì wǒ le.',vn:'Lời tôi nói đã bị anh ta xuyên tạc, giờ mọi người đều hiểu lầm tôi rồi.'}
   ],
   colloFull:[
     {zh:'歪曲我的意思',py:'wāiqū wǒ de yìsi',vn:'xuyên tạc ý tôi'},
     {zh:'歪曲事实',py:'wāiqū shìshí',vn:'bóp méo sự thật'},
     {zh:'歪曲历史',py:'wāiqū lìshǐ',vn:'xuyên tạc lịch sử'},
     {zh:'故意歪曲',py:'gùyì wāiqū',vn:'cố ý xuyên tạc'},
     {zh:'被歪曲',py:'bèi wāiqū',vn:'bị bóp méo'}
   ],
   patterns:[
     {s:'你这不是歪曲 + ……吗？',m:'Như thế chẳng phải là xuyên tạc … sao? (phản vấn)'},
     {s:'（故意）歪曲 + 事实 / 真相',m:'(Cố ý) bóp méo sự thật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không nói như vậy, cậu đừng xuyên tạc ý của tôi.',answer:'我不是这么说的，你别歪曲我的意思。',answerPy:'Wǒ bú shì zhème shuō de, nǐ bié wāiqū wǒ de yìsi.',
      note:'不是……的 phủ định cách thức; 别 + V = đừng.',pair:'是……的'},
     {promptLang:'vi',prompt:'Sự thật có thể bị bóp méo nhất thời, nhưng không thể bị che giấu mãi mãi.',answer:'事实可以被歪曲一时，但不可能被永远掩盖。',answerPy:'Shìshí kěyǐ bèi wāiqū yìshí, dàn bù kěnéng bèi yǒngyuǎn yǎngài.',
      note:'Bị động 被 + V; 掩盖 (bài 8) = che giấu.',pair:'被 (bị động)'}
   ]},

  {n:44,zh:'理直气壮',py:'lǐzhí-qìzhuàng',pos:'Thành ngữ',vn:'lý lẽ vững vàng, khí thế hùng hồn; dõng dạc',hv:'lý trực khí tráng',em:'🗣️',lesson:1,
   explain:['理直 = lý lẽ đúng đắn, 气壮 = khí thế mạnh mẽ → vì mình có lý nên nói năng, hành động tự tin, mạnh mẽ, không e sợ.','Hay làm trạng ngữ: 理直气壮地说 / 回答 / 反驳. Đôi khi dùng mỉa người sai mà vẫn tỏ ra mạnh miệng: 他做错了事，还理直气壮的.'],
   usage:'理直气壮 + 地 + 说 / 回答 / 反驳 / 要求; 说得理直气壮; 还理直气壮的 (mỉa).',
   collo:['理直气壮地说','理直气壮地反驳','说得理直气壮','理直气壮地要求'],
   ex_zh:'蔺相如理直气壮地说：“众所周知，秦强赵弱。”',ex_py:'Lìn Xiàngrú lǐzhí-qìzhuàng de shuō: "Zhòngsuǒzhōuzhī, Qín qiáng Zhào ruò."',ex_vn:'Lạn Tương Như dõng dạc nói: "Ai cũng biết Tần mạnh Triệu yếu."',
   exList:[
     {zh:'蔺相如理直气壮地说：“众所周知，秦强赵弱。天下只可能强国欺负弱国，不可能弱国压迫强国。”',py:'Lìn Xiàngrú lǐzhí-qìzhuàng de shuō: "Zhòngsuǒzhōuzhī, Qín qiáng Zhào ruò. Tiānxià zhǐ kěnéng qiángguó qīfu ruòguó, bù kěnéng ruòguó yāpò qiángguó."',vn:'Lạn Tương Như dõng dạc nói: "Ai cũng biết Tần mạnh Triệu yếu. Thiên hạ chỉ có thể là nước mạnh bắt nạt nước yếu, không thể có chuyện nước yếu áp bức nước mạnh."'},
     {zh:'我又没做错什么，当然可以理直气壮地说出自己的想法。',py:'Wǒ yòu méi zuòcuò shénme, dāngrán kěyǐ lǐzhí-qìzhuàng de shuōchū zìjǐ de xiǎngfǎ.',vn:'Tôi có làm sai gì đâu, đương nhiên có thể dõng dạc nói ra suy nghĩ của mình.'},
     {zh:'他明明迟到了，却还理直气壮地说是闹钟坏了。',py:'Tā míngmíng chídào le, què hái lǐzhí-qìzhuàng de shuō shì nàozhōng huài le.',vn:'Rõ ràng cậu ta đến muộn, vậy mà vẫn mạnh miệng bảo là do đồng hồ báo thức hỏng.'}
   ],
   colloFull:[
     {zh:'理直气壮地说',py:'lǐzhí-qìzhuàng de shuō',vn:'dõng dạc nói'},
     {zh:'理直气壮地反驳',py:'lǐzhí-qìzhuàng de fǎnbó',vn:'hùng hồn phản bác'},
     {zh:'说得理直气壮',py:'shuō de lǐzhí-qìzhuàng',vn:'nói đầy lý lẽ, tự tin'},
     {zh:'理直气壮地要求',py:'lǐzhí-qìzhuàng de yāoqiú',vn:'đường hoàng yêu cầu'},
     {zh:'理直气壮地回答',py:'lǐzhí-qìzhuàng de huídá',vn:'tự tin trả lời'}
   ],
   patterns:[
     {s:'理直气壮 + 地 + 说 / 反驳 / 要求',m:'Dõng dạc / đường hoàng nói / phản bác / yêu cầu'},
     {s:'明明……，却还理直气壮地……',m:'Rõ ràng …, vậy mà vẫn mạnh miệng … (mỉa)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cậu làm đúng, thì cứ đường hoàng nói ra, đừng sợ.',answer:'只要你做得对，就理直气壮地说出来，别害怕。',answerPy:'Zhǐyào nǐ zuò de duì, jiù lǐzhí-qìzhuàng de shuō chūlái, bié hàipà.',
      note:'只要……就……; thành ngữ + 地 làm trạng ngữ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Rõ ràng là cậu ta sai, vậy mà còn nói năng hùng hồn như vậy.',answer:'明明是他错了，他却说得那么理直气壮。',answerPy:'Míngmíng shì tā cuò le, tā què shuō de nàme lǐzhí-qìzhuàng.',
      note:'明明 (bài 6) … 却 … = rõ ràng … vậy mà …; bổ ngữ trạng thái V + 得.',pair:'明明……却……'}
   ]},

  {n:45,zh:'压迫',py:'yāpò',pos:'Động từ',vn:'áp bức, đè nén; chèn ép',hv:'áp bách',em:'⛓️',lesson:1,
   explain:['Nghĩa 1 (trong bài): dùng quyền lực, sức mạnh để chèn ép, bắt người khác (nước khác) phải phục tùng: 强国压迫弱国, 受压迫, 反抗压迫.','Nghĩa 2: đè nặng lên (vật lý): 肿瘤压迫神经 (khối u chèn ép dây thần kinh); 压迫感 = cảm giác ngột ngạt, bị đè nén.'],
   usage:'A + 压迫 + B; 受（到）压迫; 反抗 + 压迫; 压迫 + 神经 / 血管; 压迫感.',
   collo:['压迫强国','受压迫','反抗压迫','压迫感'],
   ex_zh:'天下只可能强国欺负弱国，不可能弱国压迫强国。',ex_py:'Tiānxià zhǐ kěnéng qiángguó qīfu ruòguó, bù kěnéng ruòguó yāpò qiángguó.',ex_vn:'Thiên hạ chỉ có thể là nước mạnh bắt nạt nước yếu, không thể có chuyện nước yếu áp bức nước mạnh.',
   exList:[
     {zh:'蔺相如说：“天下只可能强国欺负弱国，不可能弱国压迫强国。”',py:'Lìn Xiàngrú shuō: "Tiānxià zhǐ kěnéng qiángguó qīfu ruòguó, bù kěnéng ruòguó yāpò qiángguó."',vn:'Lạn Tương Như nói: "Thiên hạ chỉ có thể là nước mạnh bắt nạt nước yếu, không thể có chuyện nước yếu áp bức nước mạnh."'},
     {zh:'历史上，受压迫的人民一次又一次地起来反抗。',py:'Lìshǐ shang, shòu yāpò de rénmín yí cì yòu yí cì de qǐlái fǎnkàng.',vn:'Trong lịch sử, những người dân bị áp bức đã hết lần này đến lần khác đứng lên phản kháng.'},
     {zh:'医生说，他腰疼是因为骨头压迫了神经。',py:'Yīshēng shuō, tā yāo téng shì yīnwèi gǔtou yāpòle shénjīng.',vn:'Bác sĩ nói anh ấy đau lưng là vì xương chèn ép dây thần kinh.'}
   ],
   colloFull:[
     {zh:'压迫强国',py:'yāpò qiángguó',vn:'áp bức nước mạnh'},
     {zh:'受压迫',py:'shòu yāpò',vn:'bị áp bức'},
     {zh:'反抗压迫',py:'fǎnkàng yāpò',vn:'phản kháng áp bức'},
     {zh:'压迫感',py:'yāpògǎn',vn:'cảm giác bị đè nén'},
     {zh:'压迫神经',py:'yāpò shénjīng',vn:'chèn ép dây thần kinh'}
   ],
   patterns:[
     {s:'只可能 A 欺负 B，不可能 B 压迫 A',m:'Chỉ có thể A bắt nạt B, không thể B áp bức A'},
     {s:'受（到）+ ……的压迫',m:'Bị … áp bức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở đâu có áp bức, ở đó có đấu tranh.',answer:'哪里有压迫，哪里就有反抗。',answerPy:'Nǎli yǒu yāpò, nǎli jiù yǒu fǎnkàng.',
      note:'Đại từ nghi vấn dùng phiếm chỉ: 哪里……，哪里就…… = ở đâu … thì ở đó ….',pair:'哪里……哪里就……'},
     {promptLang:'vi',prompt:'Căn phòng này thấp quá, đứng bên trong có cảm giác ngột ngạt.',answer:'这个房间太低了，站在里面有一种压迫感。',answerPy:'Zhège fángjiān tài dī le, zhàn zài lǐmiàn yǒu yì zhǒng yāpògǎn.',
      note:'有一种……感 = có một cảm giác ….',pair:'有一种……'}
   ]},

  {n:46,zh:'口头',py:'kǒutóu',pos:'Tính từ',vn:'bằng lời nói, ngoài miệng',hv:'khẩu đầu',em:'👄',lesson:1,
   explain:['Bằng lời nói (không phải văn bản) — đối lập với 书面 (bằng văn bản). Thường làm định ngữ hoặc trạng ngữ: 口头通知, 口头表达, 口头协议, 口头上说.','Nghĩa phê phán: chỉ nói suông ngoài miệng, không làm thật: 光口头说, 口头上答应. Cụm cố định: 口头禅 (câu cửa miệng).'],
   usage:'（光）口头 + 说 / 答应; 口头 + 通知 / 表达 / 协议 / 作业; 口头上……; 口头禅.',
   collo:['光口头说','口头通知','口头表达','口头禅'],
   ex_zh:'大王真要那块璧的话，不要光口头说，请先把十五座城割让给赵国。',ex_py:'Dàwáng zhēn yào nà kuài bì dehuà, bú yào guāng kǒutóu shuō, qǐng xiān bǎ shíwǔ zuò chéng gēràng gěi Zhào guó.',ex_vn:'Đại vương thật sự muốn miếng ngọc ấy thì đừng chỉ nói suông ngoài miệng, xin hãy cắt nhượng mười lăm toà thành cho nước Triệu trước.',
   exList:[
     {zh:'大王真要那块璧的话，不要光口头说，请先把十五座城割让给赵国，赵得到十五座城，绝不敢不把璧交出来。',py:'Dàwáng zhēn yào nà kuài bì dehuà, bú yào guāng kǒutóu shuō, qǐng xiān bǎ shíwǔ zuò chéng gēràng gěi Zhào guó, Zhào dédào shíwǔ zuò chéng, jué bù gǎn bù bǎ bì jiāo chūlái.',vn:'Đại vương thật muốn miếng ngọc ấy thì đừng chỉ nói miệng, xin hãy cắt mười lăm toà thành cho nước Triệu trước; Triệu nhận được mười lăm toà thành thì tuyệt đối không dám không giao ngọc ra.'},
     {zh:'这次比赛不仅考书面写作，还考口头表达能力。',py:'Zhè cì bǐsài bùjǐn kǎo shūmiàn xiězuò, hái kǎo kǒutóu biǎodá nénglì.',vn:'Cuộc thi lần này không chỉ thi viết mà còn thi khả năng diễn đạt bằng lời nói.'},
     {zh:'他口头上答应得好好的，可到现在一点儿行动也没有。',py:'Tā kǒutóu shang dāying de hǎohāo de, kě dào xiànzài yìdiǎnr xíngdòng yě méiyǒu.',vn:'Ngoài miệng anh ta nhận lời rất ngon lành, nhưng đến giờ chẳng có chút hành động nào.'}
   ],
   colloFull:[
     {zh:'光口头说',py:'guāng kǒutóu shuō',vn:'chỉ nói suông'},
     {zh:'口头通知',py:'kǒutóu tōngzhī',vn:'thông báo miệng'},
     {zh:'口头表达',py:'kǒutóu biǎodá',vn:'diễn đạt bằng lời'},
     {zh:'口头禅',py:'kǒutóuchán',vn:'câu cửa miệng'},
     {zh:'口头协议',py:'kǒutóu xiéyì',vn:'thoả thuận miệng'}
   ],
   patterns:[
     {s:'不要光口头说，要……',m:'Đừng chỉ nói suông, phải …'},
     {s:'口头上 + V……，可 / 却……',m:'Ngoài miệng thì …, nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cậu thật sự muốn thay đổi, thì đừng chỉ nói ngoài miệng mà hãy hành động ngay.',answer:'如果你真想改变，就不要光口头说，要马上行动。',answerPy:'Rúguǒ nǐ zhēn xiǎng gǎibiàn, jiù bú yào guāng kǒutóu shuō, yào mǎshàng xíngdòng.',
      note:'Bắt chước câu bài khoá: 不要光口头说，…….',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Câu cửa miệng của thầy chủ nhiệm là "Không sao, cứ từ từ".',answer:'班主任的口头禅是“没关系，慢慢来”。',answerPy:'Bānzhǔrèn de kǒutóuchán shì "méi guānxi, mànmàn lái".',
      note:'口头禅 = câu cửa miệng (từ ghép với 口头).',pair:'A 是 B'}
   ]},

  {n:47,zh:'副',py:'fù',pos:'Lượng từ',vn:'(lượng từ) bộ, đôi; vẻ (mặt), bộ dạng',hv:'phó',em:'🎭',lesson:1,
   explain:['Lượng từ cho vật đi thành bộ, thành đôi: 一副眼镜 / 手套 / 耳环 / 扑克 / 对联.','Lượng từ cho nét mặt, dáng vẻ, thái độ (thường với số từ 一): 一副笑脸, 一副高姿态, 一副无所谓的样子. (副 còn là tính từ "phó": 副总, 副校长.)'],
   usage:'一副 + 眼镜 / 手套 / 对联 / 扑克; 一副 + 笑脸 / 高姿态 / ……的样子; 装出一副……',
   collo:['一副高姿态','一副眼镜','一副手套','一副……的样子'],
   ex_zh:'秦王听蔺相如说得在理，只得装出一副高姿态。',ex_py:'Qín wáng tīng Lìn Xiàngrú shuō de zài lǐ, zhǐdé zhuāngchū yí fù gāo zītài.',ex_vn:'Vua Tần thấy Lạn Tương Như nói có lý, đành làm ra vẻ rộng lượng.',
   exList:[
     {zh:'秦王听蔺相如说得在理，只得装出一副高姿态说：“不就是一块玉嘛。”',py:'Qín wáng tīng Lìn Xiàngrú shuō de zài lǐ, zhǐdé zhuāngchū yí fù gāo zītài shuō: "Bú jiù shì yí kuài yù ma."',vn:'Vua Tần thấy Lạn Tương Như nói có lý, đành làm ra vẻ rộng lượng mà nói: "Chẳng qua chỉ là một miếng ngọc thôi mà."'},
     {zh:'爷爷戴上一副老花镜，认认真真地看起报纸来。',py:'Yéye dàishàng yí fù lǎohuājìng, rènrenzhēnzhēn de kànqǐ bàozhǐ lái.',vn:'Ông nội đeo cặp kính lão, chăm chú đọc báo.'},
     {zh:'快考试了，他还是一副无所谓的样子，真让人着急。',py:'Kuài kǎoshì le, tā háishi yí fù wúsuǒwèi de yàngzi, zhēn ràng rén zháojí.',vn:'Sắp thi đến nơi rồi mà cậu ta vẫn một vẻ bất cần, thật khiến người ta sốt ruột.'}
   ],
   colloFull:[
     {zh:'一副高姿态',py:'yí fù gāo zītài',vn:'một vẻ rộng lượng'},
     {zh:'一副眼镜',py:'yí fù yǎnjìng',vn:'một cặp kính'},
     {zh:'一副手套',py:'yí fù shǒutào',vn:'một đôi găng tay'},
     {zh:'一副……的样子',py:'yí fù …… de yàngzi',vn:'một bộ dạng …'},
     {zh:'一副对联',py:'yí fù duìlián',vn:'một đôi câu đối'}
   ],
   patterns:[
     {s:'装出 + 一副 + ……的样子 / 高姿态',m:'Làm ra vẻ …'},
     {s:'一副 + 眼镜 / 手套 / 对联',m:'Một cặp kính / đôi găng / đôi câu đối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng trong lòng rất lo, vậy mà cô ấy lại làm ra vẻ không có chuyện gì.',answer:'她心里明明很着急，却装出一副没事的样子。',answerPy:'Tā xīn li míngmíng hěn zháojí, què zhuāngchū yí fù méi shì de yàngzi.',
      note:'明明……却…… = rõ ràng … vậy mà …; 一 trước 副 (thanh 4) đọc yí.',pair:'明明……却……'},
     {promptLang:'vi',prompt:'Tết đến, nhà nào cũng dán một đôi câu đối đỏ trước cửa.',answer:'过年的时候，家家户户都在门口贴上一副红对联。',answerPy:'Guònián de shíhou, jiājiāhùhù dōu zài ménkǒu tiēshàng yí fù hóng duìlián.',
      note:'家家户户 = nhà nhà; V + 上 = bổ ngữ kết quả (dán lên).',pair:'……的时候'}
   ]},

  {n:48,zh:'姿态',py:'zītài',pos:'Danh từ',vn:'dáng vẻ, tư thế; thái độ, lập trường',hv:'tư thái',em:'🦢',lesson:1,
   explain:['Nghĩa 1: dáng vẻ, tư thế của cơ thể: 优美的姿态 (dáng vẻ uyển chuyển), 舞蹈姿态.','Nghĩa 2 (trong bài): thái độ, lập trường thể hiện ra ngoài: 高姿态 (thái độ rộng lượng, nhún nhường — đôi khi chỉ là làm ra vẻ), 以……的姿态 (với tư thế …), 低姿态 (khiêm nhường).'],
   usage:'（装出）一副高姿态; 以 + ……的姿态 + V; 姿态 + 优美 / 端正; 放低姿态.',
   collo:['高姿态','姿态优美','以……的姿态','放低姿态'],
   ex_zh:'秦王只得装出一副高姿态说：“不就是一块玉嘛。”',ex_py:'Qín wáng zhǐdé zhuāngchū yí fù gāo zītài shuō: "Bú jiù shì yí kuài yù ma."',ex_vn:'Vua Tần đành làm ra vẻ rộng lượng mà nói: "Chẳng qua chỉ là một miếng ngọc thôi mà."',
   exList:[
     {zh:'秦王听蔺相如说得在理，只得装出一副高姿态说：“秦赵两国总不能为这点儿小事闹出隔阂。”',py:'Qín wáng tīng Lìn Xiàngrú shuō de zài lǐ, zhǐdé zhuāngchū yí fù gāo zītài shuō: "Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé."',vn:'Vua Tần thấy Lạn Tương Như nói có lý, đành làm ra vẻ rộng lượng nói: "Hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà."'},
     {zh:'天鹅在湖面上游来游去，姿态十分优美。',py:'Tiān\'é zài húmiàn shang yóu lái yóu qù, zītài shífēn yōuměi.',vn:'Thiên nga bơi qua bơi lại trên mặt hồ, dáng vẻ vô cùng duyên dáng.'},
     {zh:'这位新同学以开放的姿态和大家交流，很快就交到了朋友。',py:'Zhè wèi xīn tóngxué yǐ kāifàng de zītài hé dàjiā jiāoliú, hěn kuài jiù jiāodàole péngyou.',vn:'Bạn học mới này giao lưu với mọi người bằng thái độ cởi mở, nên chẳng mấy chốc đã có bạn.'}
   ],
   colloFull:[
     {zh:'高姿态',py:'gāo zītài',vn:'thái độ rộng lượng'},
     {zh:'姿态优美',py:'zītài yōuměi',vn:'dáng vẻ duyên dáng'},
     {zh:'以……的姿态',py:'yǐ …… de zītài',vn:'với tư thế / thái độ …'},
     {zh:'放低姿态',py:'fàngdī zītài',vn:'hạ mình, khiêm nhường'},
     {zh:'装出高姿态',py:'zhuāngchū gāo zītài',vn:'làm ra vẻ rộng lượng'}
   ],
   patterns:[
     {s:'只得装出一副高姿态',m:'Đành làm ra vẻ rộng lượng'},
     {s:'以 + ……的姿态 + V',m:'Làm gì với thái độ / tư thế …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn giải quyết mâu thuẫn, đôi khi phải biết hạ mình trước.',answer:'要想解决矛盾，有时候得学会先放低姿态。',answerPy:'Yào xiǎng jiějué máodùn, yǒu shíhou děi xuéhuì xiān fàngdī zītài.',
      note:'要想……，得…… = muốn … thì phải ….',pair:'要想……，得……'},
     {promptLang:'vi',prompt:'Việt Nam đang hội nhập với thế giới bằng một tư thế tự tin.',answer:'越南正以自信的姿态融入世界。',answerPy:'Yuènán zhèng yǐ zìxìn de zītài róngrù shìjiè.',
      note:'以 + ……的姿态 + V; 正 + V = đang.',pair:'以……的姿态'}
   ]},

  {n:49,zh:'隔阂',py:'géhé',pos:'Danh từ',vn:'sự ngăn cách, sự bất hoà, khoảng cách (tình cảm)',hv:'cách ngại',em:'🧱',lesson:1,
   explain:['Khoảng cách, sự xa cách về tình cảm, tư tưởng giữa người với người, nước với nước (do hiểu lầm, bất đồng, khác biệt…).','Động từ đi kèm: 有 / 产生 / 闹出 + 隔阂; 消除 + 隔阂 (xoá bỏ khoảng cách); 之间的隔阂; 语言隔阂 (rào cản ngôn ngữ).'],
   usage:'（A 和 B 之间）有 / 产生 + 隔阂; 闹出隔阂; 消除 + 隔阂; 语言 / 文化 + 隔阂.',
   collo:['闹出隔阂','产生隔阂','消除隔阂','语言隔阂'],
   ex_zh:'秦赵两国总不能为这点儿小事闹出隔阂，再起争端。',ex_py:'Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān.',ex_vn:'Hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà, lại gây tranh chấp.',
   exList:[
     {zh:'秦王说：“不就是一块玉嘛，秦赵两国总不能为这点儿小事闹出隔阂，再起争端。”',py:'Qín wáng shuō: "Bú jiù shì yí kuài yù ma, Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān."',vn:'Vua Tần nói: "Chẳng qua chỉ là một miếng ngọc thôi mà, hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà, lại gây tranh chấp."'},
     {zh:'父母和孩子之间要多沟通，才能消除隔阂。',py:'Fùmǔ hé háizi zhījiān yào duō gōutōng, cái néng xiāochú géhé.',vn:'Giữa bố mẹ và con cái phải trò chuyện nhiều thì mới xoá bỏ được khoảng cách.'},
     {zh:'刚到国外时，因为语言隔阂，她常常觉得很孤独。',py:'Gāng dào guówài shí, yīnwèi yǔyán géhé, tā chángcháng juéde hěn gūdú.',vn:'Hồi mới ra nước ngoài, vì rào cản ngôn ngữ nên cô ấy thường cảm thấy rất cô đơn.'}
   ],
   colloFull:[
     {zh:'闹出隔阂',py:'nàochū géhé',vn:'sinh ra bất hoà'},
     {zh:'产生隔阂',py:'chǎnshēng géhé',vn:'nảy sinh khoảng cách'},
     {zh:'消除隔阂',py:'xiāochú géhé',vn:'xoá bỏ khoảng cách'},
     {zh:'语言隔阂',py:'yǔyán géhé',vn:'rào cản ngôn ngữ'},
     {zh:'之间的隔阂',py:'zhījiān de géhé',vn:'khoảng cách giữa …'}
   ],
   patterns:[
     {s:'A 和 B 之间 + 有 / 产生了 + 隔阂',m:'Giữa A và B có / nảy sinh khoảng cách'},
     {s:'多沟通，才能消除隔阂',m:'Trò chuyện nhiều mới xoá được khoảng cách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ sau lần cãi nhau đó, giữa hai người họ đã nảy sinh khoảng cách.',answer:'自从那次吵架以后，他们俩之间就产生了隔阂。',answerPy:'Zìcóng nà cì chǎojià yǐhòu, tāmen liǎ zhījiān jiù chǎnshēngle géhé.',
      note:'自从……以后 = từ sau khi …; 俩 = hai người.',pair:'自从……以后'},
     {promptLang:'vi',prompt:'Dù có rào cản ngôn ngữ, chúng tôi vẫn trở thành bạn tốt.',answer:'尽管有语言隔阂，我们还是成了好朋友。',answerPy:'Jǐnguǎn yǒu yǔyán géhé, wǒmen háishi chéngle hǎo péngyou.',
      note:'尽管……还是…… = mặc dù … vẫn ….',pair:'尽管……还是……'}
   ]},

  {n:50,zh:'争端',py:'zhēngduān',pos:'Danh từ',vn:'sự tranh chấp, xung đột',hv:'tranh đoan',em:'⚔️',lesson:1,
   explain:['Sự việc gây ra tranh cãi, xung đột giữa các bên (thường là nước với nước, tổ chức với tổ chức).','Động từ đi kèm: 引起 / 挑起 / 再起 + 争端 (gây ra), 解决 / 平息 + 争端 (giải quyết, dập tắt); 国际争端, 贸易争端, 边境争端. Trang trọng, văn viết.'],
   usage:'引起 / 挑起 / 再起 + 争端; 解决 / 平息 + 争端; 国际 / 贸易 / 边境 + 争端; 和平解决争端.',
   collo:['再起争端','解决争端','贸易争端','挑起争端'],
   ex_zh:'秦赵两国总不能为这点儿小事闹出隔阂，再起争端。',ex_py:'Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān.',ex_vn:'Hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà, lại gây tranh chấp.',
   exList:[
     {zh:'不就是一块玉嘛，秦赵两国总不能为这点儿小事闹出隔阂，再起争端。',py:'Bú jiù shì yí kuài yù ma, Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān.',vn:'Chẳng qua chỉ là một miếng ngọc thôi mà, hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà, lại gây tranh chấp.'},
     {zh:'国与国之间的争端，应该通过和平谈判来解决。',py:'Guó yǔ guó zhījiān de zhēngduān, yīnggāi tōngguò hépíng tánpàn lái jiějué.',vn:'Tranh chấp giữa các nước nên được giải quyết thông qua đàm phán hoà bình.'},
     {zh:'两家公司因为商标问题引起了争端，最后闹上了法庭。',py:'Liǎng jiā gōngsī yīnwèi shāngbiāo wèntí yǐnqǐle zhēngduān, zuìhòu nàoshàngle fǎtíng.',vn:'Hai công ty xảy ra tranh chấp vì vấn đề nhãn hiệu, cuối cùng đưa nhau ra toà.'}
   ],
   colloFull:[
     {zh:'再起争端',py:'zài qǐ zhēngduān',vn:'lại gây tranh chấp'},
     {zh:'解决争端',py:'jiějué zhēngduān',vn:'giải quyết tranh chấp'},
     {zh:'贸易争端',py:'màoyì zhēngduān',vn:'tranh chấp thương mại'},
     {zh:'挑起争端',py:'tiǎoqǐ zhēngduān',vn:'khơi mào xung đột'},
     {zh:'国际争端',py:'guójì zhēngduān',vn:'tranh chấp quốc tế'}
   ],
   patterns:[
     {s:'通过 + 谈判 / 磋商 + 解决争端',m:'Giải quyết tranh chấp bằng đàm phán / bàn bạc'},
     {s:'为（了）……（而）引起争端',m:'Vì … mà gây ra tranh chấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai nước không nên vì chút lợi ích nhỏ mà gây ra tranh chấp.',answer:'两国不应该为了一点儿小利益而引起争端。',answerPy:'Liǎng guó bù yīnggāi wèile yìdiǎnr xiǎo lìyì ér yǐnqǐ zhēngduān.',
      note:'为了……而…… = vì … mà … (văn viết).',pair:'为了……而……'},
     {promptLang:'vi',prompt:'Chỉ cần hai bên chịu nhường nhau một bước, tranh chấp sẽ được giải quyết.',answer:'只要双方都肯退一步，争端就能得到解决。',answerPy:'Zhǐyào shuāngfāng dōu kěn tuì yí bù, zhēngduān jiù néng dédào jiějué.',
      note:'只要……就……; 得到解决 = được giải quyết (bị động ý nghĩa).',pair:'只要……就……'}
   ]}
];


var dialogData = [
  {scene:'课文 · 完璧归赵',
   preQuiz:[
     {q:'战国后期，哪个国家最强？',opts:['赵国','秦国','楚国'],ans:1},
     {q:'秦王说愿意用什么换和氏璧？',opts:['十五座城','五座城','一块宝玉'],ans:0},
     {q:'赵王为什么左右为难？',opts:['和氏璧丢了','大臣们的意见不同','答应怕上当，不答应又怕得罪秦国'],ans:2},
     {q:'是谁提议请蔺相如来的？',opts:['赵王自己','秦国派来的人','大臣中的一个人'],ans:2},
     {q:'蔺相如认为赵国应该怎么做？',opts:['把和氏璧送到秦国去','拒绝秦国的要求','把和氏璧藏起来'],ans:0},
     {q:'秦王拿到和氏璧以后怎么样？',opts:['马上交出了十五座城','左看右看，爱不释手','把璧还给了蔺相如'],ans:1},
     {q:'蔺相如用什么办法把璧拿了回来？',opts:['说璧有点儿小毛病，要指给秦王看','说要举行隆重的仪式','趁秦王不注意偷偷拿走'],ans:0},
     {q:'拿回璧以后，蔺相如发誓，如果被逼就会怎么做？',opts:['马上离开秦国','把璧送给秦国的大臣','把自己的头和璧一起撞碎在柱子上'],ans:2},
     {q:'蔺相如要求秦王先做什么，才肯献璧？',opts:['写一封信给赵王','举行同样隆重的仪式','派兵保护赵国'],ans:1},
     {q:'蔺相如回到住处以后做了什么？',opts:['派人打扮成商人，偷偷把璧送回赵国','连夜一个人逃回了赵国','把璧交给了秦国大臣'],ans:0},
     {q:'蔺相如认为，秦王真要那块璧的话，应该先怎么做？',opts:['举行更隆重的仪式','口头答应赵王','把十五座城割让给赵国'],ans:2},
     {q:'故事的结果怎么样？',opts:['秦国出兵攻打赵国','秦国再也没有提过以城换玉的事','赵国最后把璧送给了秦国'],ans:1}
   ],
   lines:[
    {sp:0,zh:'战国后期，秦国最强。秦王得知赵王得到一块叫“和氏璧”的宝玉，传话给赵王，说愿用十五座城换和氏璧。赵王左右为难，不知如何答复秦王：答应吧，怕上当受骗——给了和氏璧，拿不到城；不答应吧，又怕得罪秦国。于是，赶忙召集大臣商议对策。',
     py:'Zhànguó hòuqī, Qín guó zuì qiáng. Qín wáng dézhī Zhào wáng dédào yí kuài jiào "Héshì bì" de bǎoyù, chuánhuà gěi Zhào wáng, shuō yuàn yòng shíwǔ zuò chéng huàn Héshì bì. Zhào wáng zuǒyòu wéinán, bù zhī rúhé dáfù Qín wáng: dāying ba, pà shàngdàng shòupiàn —— gěile Héshì bì, ná bu dào chéng; bù dāying ba, yòu pà dézuì Qín guó. Yúshì, gǎnmáng zhàojí dàchén shāngyì duìcè.',
     vn:'Cuối thời Chiến Quốc, nước Tần mạnh nhất. Vua Tần biết tin Triệu vương có được một viên ngọc quý tên là "ngọc họ Hoà" (Hoà thị bích), bèn truyền lời cho Triệu vương, nói muốn lấy mười lăm toà thành để đổi ngọc họ Hoà. Triệu vương tiến thoái lưỡng nan, không biết trả lời vua Tần thế nào: đồng ý thì sợ mắc lừa — đưa ngọc rồi mà không lấy được thành; không đồng ý thì lại sợ đắc tội với nước Tần. Thế là vội vàng triệu tập các đại thần bàn bạc đối sách.'},
    {sp:0,zh:'大臣们也没有好办法。有人提议，蔺相如见多识广，有勇有谋，可以听听他怎么说。赵王请来了蔺相如，并亲自向他请教。蔺相如说：“秦强赵弱，凭实力，我们不答应不行；秦以十五座城换一块玉，也算慷慨，并未亏待赵国，若不答应，过错在赵；若将和氏璧送去，秦不交出城来，那么错就在秦了，因此我们只有送和氏璧。”赵王说：“那就请先生即刻动身前去磋商。”蔺相如说：“大王派我去，是我的荣幸。此去秦国，秦若是交了城，我便把璧留下；不交城，我一定完璧归赵。”',
     py:'Dàchénmen yě méiyǒu hǎo bànfǎ. Yǒu rén tíyì, Lìn Xiàngrú jiànduō-shíguǎng, yǒu yǒng yǒu móu, kěyǐ tīngting tā zěnme shuō. Zhào wáng qǐngláile Lìn Xiàngrú, bìng qīnzì xiàng tā qǐngjiào. Lìn Xiàngrú shuō: "Qín qiáng Zhào ruò, píng shílì, wǒmen bù dāying bù xíng; Qín yǐ shíwǔ zuò chéng huàn yí kuài yù, yě suàn kāngkǎi, bìng wèi kuīdài Zhào guó, ruò bù dāying, guòcuò zài Zhào; ruò jiāng Héshì bì sòngqù, Qín bù jiāochū chéng lái, nàme cuò jiù zài Qín le, yīncǐ wǒmen zhǐ yǒu sòng Héshì bì." Zhào wáng shuō: "Nà jiù qǐng xiānsheng jíkè dòng shēn qiánqù cuōshāng." Lìn Xiàngrú shuō: "Dàwáng pài wǒ qù, shì wǒ de róngxìng. Cǐ qù Qín guó, Qín ruòshì jiāole chéng, wǒ biàn bǎ bì liúxià; bù jiāo chéng, wǒ yídìng wán bì guī Zhào."',
     vn:'Các đại thần cũng không có cách gì hay. Có người đề nghị: Lạn Tương Như hiểu biết rộng, có dũng có mưu, có thể nghe xem ông ấy nói thế nào. Triệu vương mời Lạn Tương Như đến, đích thân hỏi ý kiến ông. Lạn Tương Như nói: "Tần mạnh Triệu yếu, xét về thực lực, chúng ta không đồng ý không được; Tần lấy mười lăm toà thành đổi một miếng ngọc, cũng coi như hào phóng, hoàn toàn không bạc đãi nước Triệu, nếu không đồng ý thì lỗi ở Triệu; nếu đem ngọc họ Hoà sang mà Tần không giao thành thì lỗi lại ở Tần. Vì vậy chúng ta chỉ còn cách gửi ngọc đi." Triệu vương nói: "Vậy xin tiên sinh lập tức lên đường sang đó bàn bạc." Lạn Tương Như nói: "Đại vương cử thần đi là vinh hạnh của thần. Chuyến này sang Tần, nếu Tần giao thành, thần sẽ để ngọc lại; nếu không giao thành, thần nhất định mang ngọc nguyên vẹn trở về nước Triệu."'},
    {sp:0,zh:'蔺相如带着和氏璧到了秦国，转达了赵王的问候，把玉献给了秦王。秦王对着和氏璧左看右看，爱不释手。蔺相如等了半天不见秦王提换城之事，心想果然是个圈套，可璧在秦王手里，怎么把璧拿回来呢？左思右想之后，他对秦王说：“这璧有点儿小毛病，请大王把璧归还于我，我指给大王看。”秦王把璧递给蔺相如。蔺相如从容地站在殿中央，手抱和氏璧说：“大王派人到赵国，说用十五座城换赵国的璧。赵王派我将璧送来。可大王您好像并没有兑现的诚意。如今璧在我手里，想不交城拿走璧，那是妄想。”蔺相如发誓，如若逼他，就将自己的头和璧一起撞碎在柱子上，秦王看到的将是他的尸体和破碎的玉。秦王连忙说：“别误会，我怎么会撒谎呢？”忙命大臣拿出地图，把十五座城指给蔺相如看。蔺相如还是不敢相信秦王，说：“赵王送璧之前，举行了隆重的仪式：沐浴更衣，戒掉荤腥，只吃素食，以示庄严。我并非无理取闹，也不是冒犯大王。大王如真心换璧，亦请举行同样的仪式，我才敢把璧献给您。”',
     py:'Lìn Xiàngrú dàizhe Héshì bì dàole Qín guó, zhuǎndále Zhào wáng de wènhòu, bǎ yù xiàn gěile Qín wáng. Qín wáng duìzhe Héshì bì zuǒ kàn yòu kàn, àibúshìshǒu. Lìn Xiàngrú děngle bàntiān bú jiàn Qín wáng tí huàn chéng zhī shì, xīn xiǎng guǒrán shì ge quāntào, kě bì zài Qín wáng shǒu li, zěnme bǎ bì ná huílái ne? Zuǒ sī yòu xiǎng zhīhòu, tā duì Qín wáng shuō: "Zhè bì yǒudiǎnr xiǎo máobìng, qǐng dàwáng bǎ bì guīhuán yú wǒ, wǒ zhǐ gěi dàwáng kàn." Qín wáng bǎ bì dì gěi Lìn Xiàngrú. Lìn Xiàngrú cóngróng de zhàn zài diàn zhōngyāng, shǒu bào Héshì bì shuō: "Dàwáng pài rén dào Zhào guó, shuō yòng shíwǔ zuò chéng huàn Zhào guó de bì. Zhào wáng pài wǒ jiāng bì sònglái. Kě dàwáng nín hǎoxiàng bìng méiyǒu duìxiàn de chéngyì. Rújīn bì zài wǒ shǒu li, xiǎng bù jiāo chéng ná zǒu bì, nà shì wàngxiǎng." Lìn Xiàngrú fā shì, rúruò bī tā, jiù jiāng zìjǐ de tóu hé bì yìqǐ zhuàngsuì zài zhùzi shang, Qín wáng kàndào de jiāng shì tā de shītǐ hé pòsuì de yù. Qín wáng liánmáng shuō: "Bié wùhuì, wǒ zěnme huì sā huǎng ne?" Máng mìng dàchén náchū dìtú, bǎ shíwǔ zuò chéng zhǐ gěi Lìn Xiàngrú kàn. Lìn Xiàngrú háishi bù gǎn xiāngxìn Qín wáng, shuō: "Zhào wáng sòng bì zhīqián, jǔxíngle lóngzhòng de yíshì: mùyù gēngyī, jièdiào hūnxīng, zhǐ chī sùshí, yǐ shì zhuāngyán. Wǒ bìng fēi wúlǐ-qǔnào, yě bú shì màofàn dàwáng. Dàwáng rú zhēnxīn huàn bì, yì qǐng jǔxíng tóngyàng de yíshì, wǒ cái gǎn bǎ bì xiàn gěi nín."',
     vn:'Lạn Tương Như mang ngọc họ Hoà đến nước Tần, chuyển lời hỏi thăm của Triệu vương, rồi dâng ngọc cho vua Tần. Vua Tần cầm ngọc ngắm tới ngắm lui, thích quá không nỡ buông tay. Lạn Tương Như đợi hồi lâu không thấy vua Tần nhắc đến chuyện đổi thành, trong bụng nghĩ quả nhiên là một cái bẫy, nhưng ngọc đang ở trong tay vua Tần, làm sao lấy lại được đây? Nghĩ tới nghĩ lui, ông nói với vua Tần: "Miếng ngọc này có chút tì vết nhỏ, xin đại vương đưa ngọc lại cho thần, thần chỉ cho đại vương xem." Vua Tần đưa ngọc cho Lạn Tương Như. Lạn Tương Như ung dung đứng giữa đại điện, tay ôm ngọc họ Hoà nói: "Đại vương sai người đến nước Triệu, nói dùng mười lăm toà thành đổi ngọc của nước Triệu. Triệu vương sai thần mang ngọc tới. Nhưng đại vương hình như chẳng hề có thành ý giữ lời. Nay ngọc đang ở trong tay thần, muốn không giao thành mà lấy ngọc đi thì đó là mơ hão." Lạn Tương Như thề rằng nếu bị ép, ông sẽ đập đầu mình cùng viên ngọc vỡ nát vào cột, thứ vua Tần nhìn thấy sẽ là thi thể của ông và miếng ngọc vỡ vụn. Vua Tần vội nói: "Đừng hiểu lầm, ta sao lại nói dối được chứ?" rồi vội sai đại thần mang bản đồ ra, chỉ mười lăm toà thành cho Lạn Tương Như xem. Lạn Tương Như vẫn không dám tin vua Tần, nói: "Trước khi gửi ngọc, Triệu vương đã cử hành nghi lễ long trọng: tắm gội thay áo, kiêng đồ mặn, chỉ ăn chay, để tỏ lòng trang nghiêm. Thần không phải vô cớ gây sự, cũng không phải mạo phạm đại vương. Đại vương nếu thật lòng muốn đổi ngọc, cũng xin cử hành nghi lễ giống như vậy, thần mới dám dâng ngọc cho người."'},
    {sp:0,zh:'秦王想，璧都到了我这儿，我还怕他跑了不成？就说：“好，就依你。”蔺相如回到住处，立刻派人打扮成商人的模样，偷偷越过边境，把璧送回了赵国，并嘱咐身边的人，不可泄露秘密。五天后，秦王率领众臣，准备接收和氏璧。蔺相如镇静地对秦王说：“秦国仗着国力雄厚，一贯霸道，不讲信用，声誉不好，事情我就不一一列举了，今天，我怕大王您不履行承诺，已经把璧送回了赵国。”秦王听后大怒，说：“我堂堂秦王，还会骗你不成？你这不是歪曲我的意思吗？”',
     py:'Qín wáng xiǎng, bì dōu dàole wǒ zhèr, wǒ hái pà tā pǎole bùchéng? Jiù shuō: "Hǎo, jiù yī nǐ." Lìn Xiàngrú huídào zhùchù, lìkè pài rén dǎban chéng shāngrén de múyàng, tōutōu yuèguò biānjìng, bǎ bì sònghuíle Zhào guó, bìng zhǔfù shēnbiān de rén, bù kě xièlòu mìmì. Wǔ tiān hòu, Qín wáng shuàilǐng zhòng chén, zhǔnbèi jiēshōu Héshì bì. Lìn Xiàngrú zhènjìng de duì Qín wáng shuō: "Qín guó zhàngzhe guólì xiónghòu, yíguàn bàdào, bù jiǎng xìnyòng, shēngyù bù hǎo, shìqing wǒ jiù bù yīyī lièjǔ le, jīntiān, wǒ pà dàwáng nín bù lǚxíng chéngnuò, yǐjīng bǎ bì sònghuíle Zhào guó." Qín wáng tīng hòu dà nù, shuō: "Wǒ tángtáng Qín wáng, hái huì piàn nǐ bùchéng? Nǐ zhè bú shì wāiqū wǒ de yìsi ma?"',
     vn:'Vua Tần nghĩ: ngọc đã đến tay ta rồi, lẽ nào ta còn sợ hắn chạy mất sao? Bèn nói: "Được, theo ý ngươi." Lạn Tương Như về đến chỗ ở, lập tức sai người cải trang thành thương nhân, lén vượt qua biên giới, đưa ngọc về nước Triệu, đồng thời dặn người bên cạnh không được tiết lộ bí mật. Năm ngày sau, vua Tần dẫn các đại thần, chuẩn bị nhận ngọc họ Hoà. Lạn Tương Như bình tĩnh nói với vua Tần: "Nước Tần cậy quốc lực hùng hậu, xưa nay vẫn ngang ngược, không giữ chữ tín, tiếng tăm không tốt, những chuyện ấy thần không kể ra từng việc nữa. Hôm nay, thần sợ đại vương không thực hiện lời hứa, nên đã đưa ngọc về nước Triệu rồi." Vua Tần nghe xong nổi giận đùng đùng, nói: "Ta đường đường là vua Tần, lẽ nào lại lừa ngươi? Như thế chẳng phải ngươi đang xuyên tạc ý của ta sao?"'},
    {sp:0,zh:'蔺相如理直气壮地说：“众所周知，秦强赵弱。天下只可能强国欺负弱国，不可能弱国压迫强国。大王真要那块璧的话，不要光口头说，请先把十五座城割让给赵国，赵得到十五座城，绝不敢不把璧交出来。”',
     py:'Lìn Xiàngrú lǐzhí-qìzhuàng de shuō: "Zhòngsuǒzhōuzhī, Qín qiáng Zhào ruò. Tiānxià zhǐ kěnéng qiángguó qīfu ruòguó, bù kěnéng ruòguó yāpò qiángguó. Dàwáng zhēn yào nà kuài bì dehuà, bú yào guāng kǒutóu shuō, qǐng xiān bǎ shíwǔ zuò chéng gēràng gěi Zhào guó, Zhào dédào shíwǔ zuò chéng, jué bù gǎn bù bǎ bì jiāo chūlái."',
     vn:'Lạn Tương Như dõng dạc nói: "Ai cũng biết Tần mạnh Triệu yếu. Thiên hạ chỉ có thể là nước mạnh bắt nạt nước yếu, không thể có chuyện nước yếu áp bức nước mạnh. Đại vương thật sự muốn miếng ngọc ấy thì đừng chỉ nói suông ngoài miệng, xin hãy cắt nhượng mười lăm toà thành cho nước Triệu trước; Triệu nhận được mười lăm toà thành rồi thì tuyệt đối không dám không giao ngọc ra."'},
    {sp:0,zh:'秦王听蔺相如说得在理，只得装出一副高姿态说：“不就是一块玉嘛，秦赵两国总不能为这点儿小事闹出隔阂，再起争端。”',
     py:'Qín wáng tīng Lìn Xiàngrú shuō de zài lǐ, zhǐdé zhuāngchū yí fù gāo zītài shuō: "Bú jiù shì yí kuài yù ma, Qín Zhào liǎng guó zǒng bù néng wèi zhè diǎnr xiǎoshì nàochū géhé, zài qǐ zhēngduān."',
     vn:'Vua Tần thấy Lạn Tương Như nói có lý, đành làm ra vẻ rộng lượng mà nói: "Chẳng qua chỉ là một miếng ngọc thôi mà, hai nước Tần, Triệu đâu thể vì chuyện nhỏ này mà sinh bất hoà, lại gây tranh chấp."'},
    {sp:0,zh:'蔺相如归赵以后，秦国再也没有提过以城换玉的事情。',
     py:'Lìn Xiàngrú guī Zhào yǐhòu, Qín guó zài yě méiyǒu tíguo yǐ chéng huàn yù de shìqing.',
     vn:'Sau khi Lạn Tương Như trở về nước Triệu, nước Tần không bao giờ nhắc lại chuyện lấy thành đổi ngọc nữa.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 一贯—一直 lấy từ sách (tr. 76, 做一做 chọn từ điền trống theo đáp án sách); 得罪—冒犯, 从容—镇静 tự thêm (đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'一贯 — 一直',
   same:'Đều có nghĩa "xưa nay vẫn như thế, chưa hề thay đổi" (一向如此，从未改变).',
   sameEx:{zh:'他干活儿一贯／一直很卖力。',vn:'Anh ấy làm việc xưa nay vẫn luôn rất hăng hái.'},
   items:[
     {word:'一贯',points:[
       'Nhấn TƯ TƯỞNG, TÁC PHONG, THÁI ĐỘ xưa nay vẫn vậy; thường KHÔNG biểu thị một động tác kéo dài liên tục (không nói 雨一贯下了三天).',
       'Chỉ hành vi từ quá khứ đến hiện tại, KHÔNG dùng cho tương lai (không nói 一贯坚持下去).',
       'Là TÍNH TỪ → bổ nghĩa được cho danh từ: 一贯的作风 / 态度 / 手段.'
     ],ex:[{zh:'谦虚、朴素是他一贯的作风。',vn:'Khiêm tốn, giản dị là tác phong trước sau như một của anh ấy.'},
          {zh:'秦国仗着国力雄厚，一贯霸道。',vn:'Nước Tần cậy quốc lực hùng hậu, xưa nay vẫn ngang ngược.'}]},
     {word:'一直',points:[
       'Biểu thị động tác liên tục KHÔNG GIÁN ĐOẠN, hoặc trạng thái trước sau không đổi: 雨一直下了三天, 他一直是这个样子.',
       'Dùng được cho TƯƠNG LAI: 要把这种作风一直坚持下去.',
       'Là PHÓ TỪ → không bổ nghĩa cho danh từ (không nói 一直的态度). Còn có nghĩa "thẳng một mạch": 一直往前走.'
     ],ex:[{zh:'雨一直下了三天。',vn:'Mưa rơi liền ba ngày.'},
          {zh:'要把这种作风一直坚持下去。',vn:'Phải giữ vững tác phong này mãi về sau.'}]}
   ],
   quiz:[
     {sentence:'热情好客是这里的人＿＿的传统。',options:['一贯','一直'],answer:0,why:'Đứng trước 的 + danh từ (传统) → cần tính từ 一贯; 一直 là phó từ, không bổ nghĩa cho danh từ.'},
     {sentence:'不管遇到什么困难，我都会＿＿支持你。',options:['一贯','一直'],answer:1,why:'Nói về tương lai (会支持) → chỉ dùng 一直.'},
     {sentence:'从早上到现在，他＿＿在图书馆里复习。',options:['一贯','一直'],answer:1,why:'Động tác kéo dài liên tục không gián đoạn (在复习) → 一直.'},
     {sentence:'他做事＿＿认真负责，这次也不例外。',options:['一贯','一直'],answer:0,both:true,why:'Nói về tác phong xưa nay (认真负责) → cả hai đều được; 一贯 nhấn "tác phong trước sau như một", hợp hơn.'}
   ],
   sgk:{
     chung:{t:'都有“一向如此，从未改变”的意思。',vn:'Đều có nghĩa "xưa nay vẫn như vậy, chưa từng thay đổi".',vd:'他干活儿一贯／一直很卖力。',vdVn:'Anh ấy làm việc xưa nay vẫn luôn rất hăng hái.'},
     khac:[
       {a:{t:'侧重于思想、作风、态度等方面一向如此。一般不表示动作的持续。',vn:'Nhấn mạnh tư tưởng, tác phong, thái độ… xưa nay vẫn thế. Thường không biểu thị sự kéo dài của động tác.',vd:'谦虚、朴素是他一贯的作风。（✓）　雨一贯下了三天。（×）',vdVn:'Khiêm tốn, giản dị là tác phong xưa nay của anh ấy. (đúng) — "Mưa 一贯 rơi ba ngày" là sai.'},
        b:{t:'可以表示动作始终不间断，也可以表示状态始终不变。',vn:'Có thể biểu thị động tác liên tục không gián đoạn, cũng có thể biểu thị trạng thái trước sau không đổi.',vd:'雨一直下了三天。（✓）　他一直是这个样子。（✓）',vdVn:'Mưa rơi liền ba ngày. (đúng) — Anh ấy lúc nào cũng như vậy. (đúng)'}},
       {a:{t:'指从过去到现在的行为，不能用于未来。',vn:'Chỉ hành vi từ quá khứ đến hiện tại, không dùng cho tương lai.',vd:'要把这种作风一贯坚持下去。（×）',vdVn:'"Phải 一贯 giữ vững tác phong này" là sai.'},
        b:{t:'可以用于未来。',vn:'Có thể dùng cho tương lai.',vd:'要把这种作风一直坚持下去。（✓）',vdVn:'Phải giữ vững tác phong này mãi về sau. (đúng)'}},
       {a:{t:'是形容词，可以修饰名词。',vn:'Là tính từ, có thể bổ nghĩa cho danh từ.',vd:'这是他一贯的态度。（✓）',vdVn:'Đây là thái độ trước sau như một của anh ấy. (đúng)'},
        b:{t:'是副词，不能修饰名词。',vn:'Là phó từ, không thể bổ nghĩa cho danh từ.',vd:'这是他一直的态度。（×）',vdVn:'"一直的态度" là sai.'}}
     ],
     deLam:'选择“一贯”或“一直”填空 — Chọn 一贯 hay 一直 điền vào chỗ trống',
     lamThu:[
       {s:'自从昨天晚上听到这个不幸的消息，她就＿＿在哭。',dap:[false,true],
        giai:'一直 (đáp án sách): động tác 哭 kéo dài liên tục từ tối qua đến giờ → 一直; 一贯 không biểu thị động tác kéo dài.'},
       {s:'说实话，欺上瞒下是他＿＿的手段。',dap:[true,false],
        giai:'一贯 (đáp án sách): đứng trước 的 + danh từ (手段) → cần tính từ 一贯; 一直 là phó từ, không bổ nghĩa cho danh từ.'},
       {s:'爷爷＿＿为人谦虚热情，是个公认的好人。',dap:[true,false],
        giai:'一贯 (đáp án sách): nói về cách sống, tác phong (为人谦虚热情) xưa nay vẫn thế → 一贯.'},
       {s:'凝视着男友英俊的面庞，小文暗想：“多希望能＿＿陪他走下去啊！”',dap:[false,true],
        giai:'一直 (đáp án sách): điều mong muốn ở TƯƠNG LAI (陪他走下去) → chỉ dùng 一直.'}
     ]
   }},

  {pair:'得罪 — 冒犯',
   same:'Đều là động từ, đều là (do lời nói, việc làm) khiến người khác phật ý, bị tổn thương.',
   sameEx:{zh:'我说话太直，可能得罪／冒犯了您，请您原谅。',vn:'Tôi nói năng thẳng quá, có thể đã làm phật lòng ông, mong ông thứ lỗi.'},
   items:[
     {word:'得罪',points:[
       'Dùng rộng, cả khẩu ngữ; có thể VÔ TÌNH. Nhấn KẾT QUẢ: người kia không vui, oán giận mình.',
       'Đối tượng là người / tổ chức / nước: 得罪人, 得罪老板, 得罪秦国; hay đi với 怕, 不敢, 生怕, 得罪不起.'
     ],ex:[{zh:'不答应吧，又怕得罪秦国。',vn:'Không đồng ý thì lại sợ đắc tội với nước Tần.'},
          {zh:'他说话太直，得罪了不少人。',vn:'Anh ấy nói năng quá thẳng, làm mất lòng không ít người.'}]},
     {word:'冒犯',points:[
       'Trang trọng, nặng hơn; nhấn HÀNH VI vô lễ, vượt quá giới hạn — thường với người bề trên, người đáng kính.',
       'Đối tượng còn là thứ trừu tượng: 尊严, 禁忌, 习俗; lời xin lỗi cố định: 如有冒犯，请多包涵.'
     ],ex:[{zh:'我并非无理取闹，也不是冒犯大王。',vn:'Thần không phải vô cớ gây sự, cũng không phải mạo phạm đại vương.'},
          {zh:'到了别的地方，不要冒犯当地的禁忌。',vn:'Đến nơi khác, đừng phạm vào điều kiêng kỵ của địa phương.'}]}
   ],
   quiz:[
     {sentence:'这件事如果处理不好，会＿＿很多人的。',options:['得罪','冒犯'],answer:0,why:'Nói về kết quả khiến nhiều người phật ý, oán giận → 得罪 (dùng rộng, khẩu ngữ).'},
     {sentence:'到了少数民族地区，要尊重当地的习俗，不要＿＿人家的禁忌。',options:['得罪','冒犯'],answer:1,why:'Đối tượng là 禁忌 (điều kiêng kỵ) — thứ trừu tượng → 冒犯; 得罪 chỉ đi với người / tổ chức.'},
     {sentence:'他是公司最大的客户，咱们可＿＿不起。',options:['得罪','冒犯'],answer:0,why:'Cụm cố định 得罪不起 = không dám động vào, không dám làm phật lòng.'},
     {sentence:'刚才的话如有＿＿，请您多多包涵。',options:['得罪','冒犯'],answer:1,why:'Lời xin lỗi trang trọng cố định: 如有冒犯，请多包涵.'}
   ]},

  {pair:'从容 — 镇静',
   same:'Đều là tính từ, đều tả trạng thái bình tĩnh, không hoảng hốt; đều làm trạng ngữ được: 从容地 / 镇静地 + V.',
   sameEx:{zh:'面对记者的提问，他从容／镇静地作了回答。',vn:'Trước câu hỏi của phóng viên, anh ấy bình tĩnh trả lời.'},
   items:[
     {word:'从容',points:[
       'Nhấn vẻ UNG DUNG, thong thả, không vội vã, tự tin: 从容不迫, 从容应对.',
       'Còn có nghĩa (thời gian, tiền bạc) DƯ DẢ: 时间很从容 — 镇静 không có nghĩa này.'
     ],ex:[{zh:'蔺相如从容地站在殿中央。',vn:'Lạn Tương Như ung dung đứng giữa đại điện.'},
          {zh:'早点儿出发，时间从容一些。',vn:'Xuất phát sớm một chút cho thời gian dư dả.'}]},
     {word:'镇静',points:[
       'Nhấn việc TRẤN ÁP được sự hoảng sợ khi gặp chuyện nguy cấp, bất ngờ, căng thẳng.',
       'Hay đi với 保持镇静, 镇静下来, 故作镇静; y học: 镇静剂 (thuốc an thần).'
     ],ex:[{zh:'蔺相如镇静地对秦王说……',vn:'Lạn Tương Như bình tĩnh nói với vua Tần…'},
          {zh:'发生火灾时，一定要保持镇静。',vn:'Khi xảy ra hoả hoạn, nhất định phải giữ bình tĩnh.'}]}
   ],
   quiz:[
     {sentence:'别着急，离开车还有一个小时，时间很＿＿。',options:['从容','镇静'],answer:0,why:'Nghĩa "thời gian dư dả" → chỉ 从容 có.'},
     {sentence:'着火了！大家一定要保持＿＿，不要乱跑。',options:['从容','镇静'],answer:1,why:'Tình huống nguy cấp, cần trấn áp hoảng loạn → 保持镇静.'},
     {sentence:'医生给病人打了一针，他才慢慢＿＿下来。',options:['从容','镇静'],answer:1,why:'镇静下来 = bình tĩnh lại (từ trạng thái kích động); 从容 không đi với 下来 như vậy.'},
     {sentence:'她＿＿不迫地走上舞台，一点儿也看不出紧张。',options:['从容','镇静'],answer:0,why:'Thành ngữ cố định 从容不迫 = thong dong không vội.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'大臣',hv:'đại thần',vn:'đại thần',note:'Trùng khít; 众臣 = các đại thần.'},
    {zh:'对策',hv:'đối sách',vn:'đối sách',note:'Trùng khít; 商议对策 = bàn đối sách.'},
    {zh:'实力',hv:'thực lực',vn:'thực lực',note:'Trùng khít; 凭实力 = dựa vào thực lực.'},
    {zh:'荣幸',hv:'vinh hạnh',vn:'vinh hạnh, vinh dự',note:'Trùng khít; 是我的荣幸 = là vinh hạnh của tôi.'},
    {zh:'中央',hv:'trung ương',vn:'chính giữa; trung ương',note:'Tiếng Việt "trung ương" chủ yếu là cơ quan lãnh đạo; tiếng Trung còn là "chính giữa": 殿中央 = giữa đại điện.'},
    {zh:'尸体',hv:'thi thể',vn:'thi thể',note:'Trùng khít.'},
    {zh:'隆重',hv:'long trọng',vn:'long trọng',note:'Trùng khít; 隆重的仪式 = nghi lễ long trọng.'},
    {zh:'仪式',hv:'nghi thức',vn:'nghi thức, nghi lễ',note:'Trùng khít; 举行仪式 = cử hành nghi lễ.'},
    {zh:'庄严',hv:'trang nghiêm',vn:'trang nghiêm',note:'Trùng khít.'},
    {zh:'泄露',hv:'tiết lộ',vn:'tiết lộ, làm lộ',note:'Trùng khít, nhưng 泄露 thường mang ý tiêu cực (để lộ điều phải giữ kín).'},
    {zh:'雄厚',hv:'hùng hậu',vn:'hùng hậu, dồi dào',note:'Trùng khít; 实力雄厚 = thực lực hùng hậu.'},
    {zh:'压迫',hv:'áp bách',vn:'áp bức',note:'"Áp bách" là âm Hán Việt gốc, tiếng Việt quen nói "áp bức".'},
    {zh:'妄想',hv:'vọng tưởng',vn:'vọng tưởng, mơ hão',note:'Trùng khít; 痴心妄想 = si tâm vọng tưởng.'},
    {zh:'镇静',hv:'trấn tĩnh',vn:'bình tĩnh, trấn tĩnh',note:'Trùng khít; 保持镇静 = giữ bình tĩnh.'},
    {zh:'转达',hv:'chuyển đạt',vn:'chuyển lời',note:'"Chuyển đạt" ít dùng, nghĩa là chuyển lời tới người khác.'},
    {zh:'从容',hv:'thung dung',vn:'ung dung',note:'从 ở đây đọc Hán Việt "thung" → "thung dung" = "ung dung" tiếng Việt.'},
    {zh:'边境',hv:'biên cảnh',vn:'biên giới, vùng biên',note:'境 = cảnh (cõi, vùng đất) → biên cảnh = vùng biên giới.'},
    {zh:'请教',hv:'thỉnh giáo',vn:'xin chỉ bảo',note:'Trùng khít; tiếng Việt cũng nói "xin thỉnh giáo".'}
  ],
  idiom:[
    {zh:'完璧归赵',hv:'hoàn bích quy Triệu',vn:'trả nguyên vẹn cho chủ cũ',note:'完 = nguyên vẹn, 璧 = ngọc bích, 归 = trở về, 赵 = nước Triệu → mang ngọc nguyên vẹn về nước Triệu; nay ví việc trả lại đồ vật nguyên vẹn cho chủ.'},
    {zh:'爱不释手',hv:'ái bất thích thủ',vn:'thích đến không rời tay',note:'释 = buông → yêu đến mức không buông tay.'},
    {zh:'无理取闹',hv:'vô lý thủ náo',vn:'vô cớ gây sự',note:'无理 = không có lý, 取闹 = gây ầm ĩ.'},
    {zh:'理直气壮',hv:'lý trực khí tráng',vn:'lý lẽ vững, khí thế mạnh',note:'理直 = lý thẳng (đúng), 气壮 = khí mạnh → có lý nên nói năng mạnh mẽ.'},
    {zh:'左右为难',hv:'tả hữu vi nan',vn:'tiến thoái lưỡng nan',note:'Bên trái cũng khó, bên phải cũng khó → làm thế nào cũng không ổn (ví dụ tu từ 引用 của bài).'},
    {zh:'众所周知',hv:'chúng sở chu tri',vn:'ai cũng biết',note:'众 = mọi người, 周知 = đều biết (ôn bài 19).'}
  ],
  trap:[
    {zh:'慷慨',hv:'khảng khái',vn:'hào phóng, rộng rãi',
     warn:'"Khảng khái" tiếng Việt = cứng cỏi, không chịu luồn cúi, không nhận ơn. 慷慨 tiếng Trung chủ yếu nghĩa "HÀO PHÓNG": 老板很慷慨 = sếp rất hào phóng; 慷慨解囊 = hào phóng giúp tiền.'},
    {zh:'得罪',hv:'đắc tội',vn:'làm mất lòng',
     warn:'"Đắc tội" tiếng Việt nghe nặng (phạm tội với ai). 得罪 rất thường ngày: 说话太直，得罪人 = nói thẳng quá, làm mất lòng người ta. "Phạm tội" (theo luật) là 犯罪.'},
    {zh:'一贯',hv:'nhất quán',vn:'xưa nay vẫn thế',
     warn:'"Nhất quán" tiếng Việt thường là logic thống nhất, không mâu thuẫn (lập luận nhất quán = 前后一致). 一贯 là "trước sau như một, xưa nay vẫn vậy": 一贯霸道 = xưa nay vẫn ngang ngược.'},
    {zh:'霸道',hv:'bá đạo',vn:'ngang ngược, hống hách',
     warn:'Tiếng lóng Việt "bá đạo" có khi là khen (đỉnh, ngầu). 霸道 tiếng Trung luôn là chê: cậy mạnh, không nói lý.'},
    {zh:'提议',hv:'đề nghị',vn:'đề xuất (để mọi người bàn)',
     warn:'"Đề nghị" tiếng Việt hay mang nghĩa YÊU CẦU (đề nghị giữ trật tự = 请保持安静). 提议 chỉ là "nêu ý kiến ra để bàn": 有人提议…… Muốn yêu cầu thì dùng 请 / 要求.'},
    {zh:'声誉',hv:'thanh dự',vn:'danh tiếng',
     warn:'Không dịch "danh dự" (danh dự = 名誉 / 荣誉, 尊严). 声誉 = tiếng tăm, uy tín trong xã hội: 声誉不好 = tiếng tăm không tốt.'},
    {zh:'答复',hv:'đáp phục',vn:'trả lời, phúc đáp',
     warn:'复 ở đây là "trả lời" (như 回复), không phải "phục hồi". Tiếng Việt quen nói "phúc đáp" (đảo trật tự).'},
    {zh:'副',hv:'phó',vn:'(lượng từ) bộ, đôi; vẻ',
     warn:'"Phó" tiếng Việt là cấp phó (副校长 = phó hiệu trưởng). Nhưng 副 còn là LƯỢNG TỪ: 一副眼镜 = một cặp kính, 一副高姿态 = một vẻ rộng lượng.'}
  ]
};


// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'履行',right:'义务'},
  {left:'泄露',right:'秘密'},
  {left:'转达',right:'大家的意见'},
  {left:'隆重的',right:'仪式'},
  {left:'实力',right:'雄厚'},
  {left:'歪曲',right:'真相'},
  {left:'列举',right:'例子'},
  {left:'理直',right:'气壮'},
  {left:'消除',right:'隔阂'},
  {left:'率领',right:'球队'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — câu mới (không chép bài khoá / SGK), mỗi câu một tình huống; ôn xoáy ốc từ + ngữ pháp các bài trước
// ══════════════════════════════════════════
var fillData = [
  {pre:'我向公司提出了申请，可是一个月过去了，还没有收到',blank:'答复',post:'。',hint:'(trả lời chính thức)',ans:'答复',exp:'答复 = trả lời chính thức một đề nghị, đơn từ, thư (收到答复, 给予答复). 回答 dùng cho câu hỏi (回答问题).'},
  {pre:'她怕',blank:'得罪',post:'领导，有意见也不敢说出来。',hint:'(làm mất lòng)',ans:'得罪',exp:'怕得罪 + người = sợ làm ai phật lòng (khẩu ngữ, dùng rộng). 冒犯 trang trọng, nặng hơn, nhấn hành vi vô lễ.'},
  {pre:'遇到问题光着急没用，得冷静下来想想',blank:'对策',post:'。',hint:'(cách đối phó)',ans:'对策',exp:'想对策 / 商量对策 = nghĩ cách đối phó với tình huống cụ thể. Đừng nhầm với "chính sách" của nhà nước (chỉ khác một chữ Hán).'},
  {pre:'这个问题我想不明白，只好去',blank:'请教',post:'王老师。',hint:'(xin chỉ bảo)',ans:'请教',exp:'请教 + người = khiêm tốn hỏi ý kiến người giỏi hơn. 请问 chỉ dùng để mở đầu câu hỏi, không mang tân ngữ chỉ người như vậy.'},
  {pre:'他对朋友非常',blank:'慷慨',post:'，自己却舍不得买一件新衣服。',hint:'(hào phóng)',ans:'慷慨',exp:'对 + người + 慷慨 = hào phóng với ai; vế sau 却 tạo đối lập. Ở đây không hiểu theo Hán-Việt "khảng khái".'},
  {pre:'你在公司干了十年，老板从来没有',blank:'亏待',post:'过你。',hint:'(bạc đãi)',ans:'亏待',exp:'亏待 + người = đối xử tệ, để ai chịu thiệt; hay dùng ở dạng phủ định (没有亏待过 / 不会亏待).'},
  {pre:'明天早上六点就要',blank:'动身',post:'，晚上早点儿睡吧。',hint:'(khởi hành)',ans:'动身',exp:'动身 = lên đường (li hợp, không mang tân ngữ: không nói ×动身北京, mà nói 动身去北京).'},
  {pre:'能和您一起工作，我感到非常',blank:'荣幸',post:'。',hint:'(vinh hạnh)',ans:'荣幸',exp:'感到荣幸 = thấy vinh hạnh (lời lịch sự với người trên). 幸福 là hạnh phúc trong cuộc sống, không dùng ở đây.'},
  {pre:'他',blank:'发誓',post:'以后再也不喝酒了。',hint:'(thề)',ans:'发誓',exp:'发誓 + 小句 = thề sẽ…; là động từ li hợp nên không mang tân ngữ danh từ trực tiếp.'},
  {pre:'这孩子一',blank:'撒谎',post:'就脸红。',hint:'(nói dối)',ans:'撒谎',exp:'撒谎 = nói dối (khẩu ngữ, động từ li hợp). Ôn 一……就……: hễ … là ….'},
  {pre:'我最近在减肥，晚饭只吃素，不吃',blank:'荤',post:'。',hint:'(đồ mặn: thịt, cá)',ans:'荤',exp:'荤 = đồ mặn (thịt, cá), trái với 吃素 (ăn chay). Không dùng 咸 (vị mặn của muối) cho nghĩa này.'},
  {pre:'在那个年代，穷人受到',blank:'压迫',post:'，日子过得很苦。',hint:'(áp bức)',ans:'压迫',exp:'受到压迫 = bị áp bức (bởi kẻ có quyền thế). 压力 là áp lực (danh từ, 有压力), không đi với 受到 theo nghĩa này.'},
  {pre:'我在车站左',blank:'等',post:'右等，汽车就是不来。',hint:'(chờ)',ans:'等',exp:'左 + V + 右 + V (左等右等) = chờ mãi, chờ đi chờ lại mà vẫn không có kết quả; hai động từ giống nhau.'},
  {pre:'我又不是小孩子，还会走丢',blank:'不成',post:'？',hint:'(… hay sao?)',ans:'不成',exp:'Câu phản vấn …… + 不成? = lẽ nào … sao? Ý thật là phủ định: tôi không thể đi lạc. Đặt ở cuối câu.'},
  {pre:'他把桌子搬到了房间的',blank:'中央',post:'。',hint:'(chính giữa)',ans:'中央',exp:'……的中央 = chính giữa (không gian); 中间 dùng rộng hơn, còn 中央 nhấn đúng tâm điểm. 中心 thường chỉ trung tâm trừu tượng (市中心, 中心思想).'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — câu mới, chỉ một trật tự đúng
// ══════════════════════════════════════════
var sortData = [
  {words:['他','把','借来的书','归还','给了','图书馆','。'],ans:'他把借来的书归还给了图书馆。',audio:'他把借来的书归还给了图书馆。'},
  {words:['他','装出','一副','很生气的','样子','。'],ans:'他装出一副很生气的样子。',audio:'他装出一副很生气的样子。'},
  {words:['他','率领','球队','获得了','冠军','。'],ans:'他率领球队获得了冠军。',audio:'他率领球队获得了冠军。'},
  {words:['他','左一口','右一口','地','吃完了','一大碗面','。'],ans:'他左一口右一口地吃完了一大碗面。',audio:'他左一口右一口地吃完了一大碗面。'},
  {words:['你','还想','骗我','一辈子','不成','？'],ans:'你还想骗我一辈子不成？',audio:'你还想骗我一辈子不成？'},
  {words:['他的话','冒犯了','在场的','每一个人','。'],ans:'他的话冒犯了在场的每一个人。',audio:'他的话冒犯了在场的每一个人。'},
  {words:['他','从容地','回答了','记者的','问题','。'],ans:'他从容地回答了记者的问题。',audio:'他从容地回答了记者的问题。'},
  {words:['两国','在','边境问题上','发生了','争端','。'],ans:'两国在边境问题上发生了争端。',audio:'两国在边境问题上发生了争端。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'雨____下到半夜才停。',opts:['一直','一贯','一向','从来'],ans:0,exp:'Động tác kéo dài liên tục (mưa đến nửa đêm) → 一直. 一贯 / 一向 chỉ tác phong, thói quen xưa nay; 从来 thường đi với phủ định.'},
  {wrong:'随便迟到可不是他____的作风，今天一定是出了什么事。',opts:['一贯','一直','一时','一再'],ans:0,exp:'Đứng trước 的 + danh từ cần tính từ 一贯 (tác phong xưa nay). 一直 là phó từ, không đứng trước 的 + danh từ; 一时 = nhất thời; 一再 = hết lần này đến lần khác.'},
  {wrong:'我只是说了几句实话，没想到就把老板____了。',opts:['得罪','冒犯','亏待','欺负'],ans:0,exp:'Vô tình làm sếp phật lòng (nhấn kết quả) → 得罪. 冒犯 là cố ý vô lễ, rất trang trọng; 亏待 là bạc đãi (người trên với người dưới); 欺负 là bắt nạt kẻ yếu.'},
  {wrong:'我们七点就到机场了，时间还很____，可以先去吃点儿东西。',opts:['从容','镇静','冷静','安静'],ans:0,exp:'Thời gian dư dả → chỉ 从容 có nghĩa này. 镇静 / 冷静 tả tâm trạng; 安静 là yên tĩnh (không ồn).'},
  {wrong:'天气这么好，我____大家下午一起去公园走走。',opts:['提议','答复','请教','转达'],ans:0,exp:'Nêu ý kiến cho mọi người cùng làm → 提议. 答复 là trả lời; 请教 là xin chỉ bảo; 转达 là chuyển lời.'},
  {wrong:'这么便宜的房子，小心是个____。',opts:['圈套','对策','仪式','姿态'],ans:0,exp:'Cái bẫy để lừa người → 圈套 (上了圈套 = mắc bẫy). Các từ còn lại không hợp nghĩa "cẩn thận kẻo …".'},
  {wrong:'他一天书都不看，还想考第一，简直是____。',opts:['妄想','理想','思想','感想'],ans:0,exp:'Điều viển vông, không thể thành → 妄想 (nghĩa xấu). 理想 là ước mơ chính đáng; 思想 = tư tưởng; 感想 = cảm nghĩ.'},
  {wrong:'这本画册太漂亮了，女儿拿到以后____。',opts:['爱不释手','无理取闹','理直气壮','左右为难'],ans:0,exp:'Thích đến mức cầm mãi không buông → 爱不释手. 无理取闹 = gây sự vô cớ; 理直气壮 = lý lẽ hùng hồn; 左右为难 = tiến thoái lưỡng nan.'},
  {wrong:'学校为新同学举行了____的欢迎仪式。',opts:['隆重','雄厚','慷慨','从容'],ans:0,exp:'隆重的仪式 = nghi lễ long trọng (quy mô lớn, trang trọng). 雄厚 tả thực lực, vốn; 慷慨 tả người hào phóng; 从容 tả dáng vẻ.'},
  {wrong:'纪念馆里气氛很____，没有一个人大声说话。',opts:['庄严','热闹','霸道','荣幸'],ans:0,exp:'气氛庄严 = không khí trang nghiêm (nơi tưởng niệm, nghi lễ). 热闹 trái nghĩa; 霸道 tả người ngang ngược; 荣幸 là cảm giác vinh hạnh.'},
  {wrong:'这么重要的事，光____答应可不行，得写下来。',opts:['口头','口语','口气','口音'],ans:0,exp:'口头答应 = hứa bằng miệng (đối lập với viết thành văn bản). 口语 = khẩu ngữ; 口气 = giọng điệu; 口音 = giọng địa phương.'},
  {wrong:'你都三十岁了，____还要父母养你一辈子不成？',opts:['难道','怎么','为什么','是不是'],ans:0,exp:'Khung phản vấn 难道……不成? (lẽ nào … sao). 怎么 / 为什么 / 是不是 không hô ứng với 不成 ở cuối câu.'},
  {wrong:'这件衣服她____看右看，还是拿不定主意。',opts:['左','东','前','上'],ans:0,exp:'左看右看 = ngắm tới ngắm lui (左 V 右 V). Đừng lẫn với 东张西望 (bài 17): 东 đi với 西, không đi với 右.'},
  {wrong:'早上，整个城市都____在温暖的阳光里。',opts:['沐浴','洗澡','游泳','浸泡'],ans:0,exp:'沐浴在阳光里 = tắm mình trong nắng (nghĩa bóng, văn viết). 洗澡 chỉ tắm thật bằng nước; 游泳 = bơi.'}
];



// ══════════════════════════════════════════
// DỊCH Việt → Trung — câu mới, dùng từ của bài + ôn ngữ pháp các bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cậu đã hứa với bọn trẻ thì phải thực hiện lời hứa, chẳng lẽ lúc trước cậu nói dối sao?',zh:'你既然答应了孩子们，就要履行承诺，难道你当初是在撒谎不成？',py:'Nǐ jìrán dāyingle háizimen, jiù yào lǚxíng chéngnuò, nándào nǐ dāngchū shì zài sā huǎng bùchéng?',goiY:['既然……就……','履行承诺','难道……不成'],giai:'难道……不成? là câu phản vấn: 不成 đứng cuối câu, hô ứng với 难道; 当初 (bài 6) = lúc đầu, hồi đó.'},
  {vi:'Tuy thực lực của đội bạn hùng hậu hơn, nhưng chỉ cần chúng ta giữ được bình tĩnh thì chưa chắc đã thua.',zh:'虽然对方球队实力更雄厚，但只要我们保持镇静，就不一定会输。',py:'Suīrán duìfāng qiúduì shílì gèng xiónghòu, dàn zhǐyào wǒmen bǎochí zhènjìng, jiù bù yídìng huì shū.',goiY:['实力','雄厚','镇静','只要……就……'],giai:'虽然……但…… lồng 只要……就……; "chưa chắc" = 不一定 (bù yídìng).'},
  {vi:'Nghĩ tới nghĩ lui, cuối cùng cô ấy quyết định dõng dạc nói ra sự thật, chứ không để người khác tiếp tục xuyên tạc ý mình.',zh:'左思右想之后，她终于决定理直气壮地说出真相，而不是继续让别人歪曲自己的意思。',py:'Zuǒ sī yòu xiǎng zhīhòu, tā zhōngyú juédìng lǐzhí-qìzhuàng de shuōchū zhēnxiàng, ér bú shì jìxù ràng biérén wāiqū zìjǐ de yìsi.',goiY:['左思右想','理直气壮','而不是','歪曲'],giai:'左思右想 = 左 + V1 + 右 + V2 (hai động từ gần nghĩa) — "nghĩ tới nghĩ lui"; ……，而不是…… = … chứ không phải ….'},
  {vi:'Một khi để lộ thông tin cá nhân lên mạng, danh tiếng của cậu có thể bị tổn hại, đến lúc đó hối hận cũng không kịp.',zh:'一旦把个人信息泄露到网上，你的声誉就可能受到影响，到时候后悔也来不及了。',py:'Yídàn bǎ gèrén xìnxī xièlòu dào wǎng shang, nǐ de shēngyù jiù kěnéng shòudào yǐngxiǎng, dào shíhou hòuhuǐ yě láibují le.',goiY:['一旦……就……','泄露','声誉'],giai:'一旦……就…… = một khi … thì …; "danh tiếng" là 声誉 (tiếng tăm, uy tín trong mắt người khác).'},
  {vi:'Người xưa nói rất đúng: "có mượn có trả, lần sau mượn không khó"; mượn đồ của người khác thì phải trả đúng hạn.',zh:'老话说得好：“有借有还，再借不难。”借了别人的东西要按时还。',py:'Lǎohuà shuō de hǎo: "Yǒu jiè yǒu huán, zài jiè bù nán." Jièle biérén de dōngxi yào ànshí huán.',goiY:['老话说得好','有借有还，再借不难'],giai:'Dẫn tục ngữ để lời khuyên có sức thuyết phục: 老话说得好 / 俗话说 + câu tục ngữ trong ngoặc kép, rồi mới nói ý của mình.'},
  {vi:'Chẳng lẽ họ tưởng chúng ta không nhìn ra đây là một cái bẫy sao? Chỉ cần chúng ta ung dung một chút, ý đồ lừa chúng ta của họ chỉ là mơ hão.',zh:'难道他们以为我们看不出这是个圈套不成？只要我们从容一点儿，他们想骗我们的企图就只能是妄想。',py:'Nándào tāmen yǐwéi wǒmen kàn bu chū zhè shì ge quāntào bùchéng? Zhǐyào wǒmen cóngróng yìdiǎnr, tāmen xiǎng piàn wǒmen de qìtú jiù zhǐ néng shì wàngxiǎng.',goiY:['难道……不成','圈套','从容','妄想'],giai:'Mở đầu bằng câu phản vấn 难道……不成?; 企图 (bài 17) = ý đồ; 只能是妄想 = chỉ có thể là mơ hão.'}
];

// ══════════════════════════════════════════
// Dịch Trung → Việt — câu mới, không trùng chiều trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Giám đốc mới rất độc đoán, việc gì cũng một mình ông ta quyết.',zh:'新来的经理很霸道，什么事都是他一个人说了算。',py:'Xīn lái de jīnglǐ hěn bàdào, shénme shì dōu shì tā yí ge rén shuōle suàn.',goiY:['霸道 = ngang ngược, độc đoán','说了算 = có quyền quyết định'],giai:'霸道 nói về người dùng quyền lực áp đặt; 说了算 dịch "quyết", "nói là xong".'},
  {vi:'Luật sư nêu ra rất nhiều sự thật, chứng minh anh ấy không nói dối.',zh:'律师列举了大量事实，证明他没有撒谎。',py:'Lǜshī lièjǔle dàliàng shìshí, zhèngmíng tā méiyǒu sā huǎng.',goiY:['列举 = liệt kê, nêu ra','撒谎 = nói dối'],giai:'列举事实 dịch "nêu ra sự thật"; 证明 + 小句 = chứng minh rằng ….'},
  {vi:'Thua trận xong, anh ấy trả lời phỏng vấn với thái độ rất khiêm tốn.',zh:'输了比赛以后，他用很谦虚的姿态接受了采访。',py:'Shūle bǐsài yǐhòu, tā yòng hěn qiānxū de zītài jiēshòule cǎifǎng.',goiY:['姿态 = thái độ, tư thế','接受采访 = nhận phỏng vấn'],giai:'姿态 ở đây là "thái độ" (nghĩa bóng), không dịch "tư thế"; 接受采访 dịch "trả lời phỏng vấn".'},
  {vi:'Ông ấy vừa là thầy của tôi, cũng là bạn của tôi.',zh:'他既是我的老师，亦是我的朋友。',py:'Tā jì shì wǒ de lǎoshī, yì shì wǒ de péngyou.',goiY:['亦 = cũng (văn viết)','既……亦…… = vừa … cũng …'],giai:'亦 = 也 nhưng văn viết, trang trọng; 既……亦…… là dạng văn viết của 既……也…….'},
  {vi:'Vị đại thần ấy mất rồi, người ta đưa thi thể ông về chôn ở quê nhà.',zh:'这位大臣死后，人们把他的尸体埋在了家乡。',py:'Zhè wèi dàchén sǐ hòu, rénmen bǎ tā de shītǐ mái zài le jiāxiāng.',goiY:['大臣 = đại thần','尸体 = thi thể'],giai:'死后 = sau khi mất (văn viết, gọn); câu 把 + V在 + nơi chốn.'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 80): kể chuyện một nhà ngoại giao xuất sắc của nước mình, ≥400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'本课讲述了中国古代外交史上一个经典的案例，蔺相如利用自己的智谋和勇气，出色完成了出使秦国的任务，既保全了赵国，又在道义上让秦国无话可说。在你们国家的历史上一定也有这样的外交故事，请以“善于外交的……”为题写一个你们国家出色外交家的故事，字数不少于400字。',
  prompt:'Bài khoá kể về một trường hợp kinh điển trong lịch sử ngoại giao cổ đại Trung Quốc: Lạn Tương Như dùng mưu trí và lòng dũng cảm của mình hoàn thành xuất sắc nhiệm vụ đi sứ nước Tần, vừa giữ được nước Triệu an toàn, vừa khiến nước Tần không còn gì để nói về mặt đạo lý. Trong lịch sử nước em chắc chắn cũng có những câu chuyện ngoại giao như vậy. Hãy lấy "善于外交的……" (… giỏi ngoại giao) làm nhan đề, viết câu chuyện về một nhà ngoại giao xuất sắc của nước em, không dưới 400 chữ.',
  dan:[
    {hoi:'题目：善于外交的……（你要写哪一位外交家？）',goiY:'①题目：善于外交的+人名 ②开头：他是……时期的……，见多识广，有勇有谋'},
    {hoi:'背景：当时两国的情况怎么样？他为什么出使？',goiY:'①……实力雄厚，一贯霸道 ②……派他出使……'},
    {hoi:'经过：对方怎样为难他？他怎样用智谋和勇气应对？',goiY:'①对方设下圈套 / 故意为难他 ②他左思右想之后，从容 / 镇静地…… ③理直气壮地说：“难道……不成？”'},
    {hoi:'结果：他怎样保全了国家，让对方无话可说？',goiY:'①既保全了……，又让对方…… ②对方只得…… ③国家的声誉……'},
    {hoi:'评价：这个故事给你什么启示？',goiY:'①一个出色的外交家不仅要有……，还要有…… ②国家虽小，只要……，也……'}
  ],
  tuNen:['实力','霸道','圈套','左思右想','从容','冒犯','镇静','难道……不成','理直气壮','声誉'],
  cauTruc:[
    {ten:'以“善于外交的……”为题', nhan:'Nhan đề', vd:'（题目：善于外交的莫挺之）', khi:'Ghi đúng nhan đề đề bài yêu cầu ở dòng đầu; chỗ …… là tên nhà ngoại giao em chọn.'},
    {ten:'……是……时期的……，见多识广，有勇有谋', nhan:'Giới thiệu nhân vật', vd:'莫挺之是越南陈朝时期有名的状元，见多识广，有勇有谋。', khi:'Mở bài: thời đại, thân phận, phẩm chất — mượn cách bài khoá giới thiệu 蔺相如.'},
    {ten:'当时……实力雄厚，一贯霸道', nhan:'Bối cảnh', vd:'当时元朝实力雄厚，一贯霸道，常常故意为难小国的使者。', khi:'Nêu thế "nước lớn mạnh — nước mình nhỏ yếu" để làm nổi bật tài ngoại giao.'},
    {ten:'左思右想之后，他从容 / 镇静地……', nhan:'Cao trào · điểm ngữ pháp 1', vd:'这分明是个圈套，可他左思右想之后，从容地对出了下联。', khi:'Tả cách nhân vật xử lý tình huống khó — dùng 左……右…… của bài.'},
    {ten:'难道……不成？', nhan:'Lời lẽ sắc bén · điểm ngữ pháp 2', vd:'难道能让小人站在君子头上不成？', khi:'Đưa vào lời thoại của nhân vật một câu phản vấn 不成 để thể hiện khí thế 理直气壮.'},
    {ten:'既……，又……；对方只得……', nhan:'Kết quả', vd:'他既保全了国家的尊严，又让对方心服口服。', khi:'Bắt chước câu đề bài 既保全了赵国，又在道义上让秦国无话可说.'},
    {ten:'……不仅要有……，还要有……', nhan:'Kết bài · bài học', vd:'一个出色的外交家不仅要有智谋，还要有勇气。', khi:'Rút ra bài học chung, liên hệ bài khoá.'}
  ],
  checklist:[
    'Đã đặt nhan đề dạng "善于外交的……" chưa?',
    'Đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Câu chuyện có đủ bối cảnh — tình huống khó — cách giải quyết bằng mưu trí và dũng khí — kết quả — bài học không?',
    'Đã dùng cả 2 điểm ngữ pháp của bài (左……右…… / 不成) và ít nhất 6 từ mới chưa?',
    'Các chi tiết lịch sử có ghi rõ là truyền thuyết (传说 / 民间流传) khi không chắc chắn, và kể bằng lời của em thay vì chép nguyên văn không?'
  ],
  model:{
    zh:'（题目：善于外交的莫挺之）莫挺之是越南陈朝时期有名的才子，他个子矮小，却见多识广，有勇有谋。十四世纪，他被国家派到元朝去。当时元朝实力雄厚，一贯霸道，常常故意为难小国派去的人。关于他这次出使，流传着很多故事。传说莫挺之一行到达边境时，天已经黑了，守关的官员不愿意开门，还出了一个对子，说对得上才放他们进去。这分明是个圈套，可莫挺之一点儿也不紧张，左思右想之后，从容地对出了下一句，官员只得开门请他们进关。到了元朝的首都，一位大臣想让他丢脸，请他看一幅画着小鸟站在竹子上的画。莫挺之走上前去，一下子把画弄破了。大家都吓了一跳，以为他冒犯了主人。他却镇静地解释说：“古人常常用竹子比喻君子，小鸟却是小人。难道能让小人站在君子头上不成？我是替大人把小人除掉啊！”他说得理直气壮，那位大臣无话可说，只好向他道歉。后来，元朝的国王也被他的才能打动，称赞他是“两国第一才子”。莫挺之既没有让国家丢脸，又让对方真心佩服，大越的声誉也因此提高了。直到今天，越南人还常常讲起他的故事。这个故事告诉我们，一个出色的外交家不仅要有智慧，还要有勇气。国家即使很小，只要有这样的人才，也不会任人欺负。',
    py:'(Tímù: Shànyú wàijiāo de Mò Tǐngzhī) Mò Tǐngzhī shì Yuènán Chén cháo shíqī yǒumíng de cáizǐ, tā gèzi ǎixiǎo, què jiànduō-shíguǎng, yǒu yǒng yǒu móu. Shísì shìjì, tā bèi guójiā pài dào Yuán cháo qù. Dāngshí Yuán cháo shílì xiónghòu, yíguàn bàdào, chángcháng gùyì wéinán xiǎoguó pàiqù de rén. Guānyú tā zhè cì chūshǐ, liúchuánzhe hěn duō gùshi. Chuánshuō Mò Tǐngzhī yìxíng dàodá biānjìng shí, tiān yǐjīng hēi le, shǒu guān de guānyuán bú yuànyì kāi mén, hái chūle yí ge duìzi, shuō duì de shàng cái fàng tāmen jìnqù. Zhè fēnmíng shì ge quāntào, kě Mò Tǐngzhī yìdiǎnr yě bù jǐnzhāng, zuǒ sī yòu xiǎng zhīhòu, cóngróng de duìchūle xià yí jù, guānyuán zhǐdé kāi mén qǐng tāmen jìn guān. Dàole Yuán cháo de shǒudū, yí wèi dàchén xiǎng ràng tā diūliǎn, qǐng tā kàn yì fú huàzhe xiǎoniǎo zhàn zài zhúzi shang de huà. Mò Tǐngzhī zǒu shàngqián qù, yíxiàzi bǎ huà nòngpò le. Dàjiā dōu xiàle yí tiào, yǐwéi tā màofànle zhǔrén. Tā què zhènjìng de jiěshì shuō: "Gǔrén chángcháng yòng zhúzi bǐyù jūnzǐ, xiǎoniǎo què shì xiǎorén. Nándào néng ràng xiǎorén zhàn zài jūnzǐ tóu shang bùchéng? Wǒ shì tì dàren bǎ xiǎorén chúdiào a!" Tā shuō de lǐzhí-qìzhuàng, nà wèi dàchén wúhuà-kěshuō, zhǐhǎo xiàng tā dàoqiàn. Hòulái, Yuán cháo de guówáng yě bèi tā de cáinéng dǎdòng, chēngzàn tā shì "liǎng guó dì yī cáizǐ". Mò Tǐngzhī jì méiyǒu ràng guójiā diūliǎn, yòu ràng duìfāng zhēnxīn pèifú, Dà Yuè de shēngyù yě yīncǐ tígāo le. Zhídào jīntiān, Yuènánrén hái chángcháng jiǎngqǐ tā de gùshi. Zhège gùshi gàosu wǒmen, yí ge chūsè de wàijiāojiā bùjǐn yào yǒu zhìhuì, hái yào yǒu yǒngqì. Guójiā jíshǐ hěn xiǎo, zhǐyào yǒu zhèyàng de réncái, yě bú huì rèn rén qīfu.',
    vn:'(Nhan đề: Mạc Đĩnh Chi — người giỏi ngoại giao) Mạc Đĩnh Chi là bậc tài tử (vị trạng nguyên) nổi tiếng thời nhà Trần của Việt Nam. Ông người nhỏ bé nhưng hiểu biết rộng, có dũng có mưu. Thế kỷ XIV, ông được triều đình cử sang nhà Nguyên. Khi ấy nhà Nguyên thực lực hùng hậu, xưa nay vẫn ngang ngược, thường cố tình làm khó người các nước nhỏ cử sang. Về chuyến đi sứ này của ông, có rất nhiều câu chuyện được lưu truyền. Tương truyền khi đoàn của Mạc Đĩnh Chi đến biên giới thì trời đã tối, viên quan giữ ải không chịu mở cửa, lại ra một vế đối, nói đối được thì mới cho vào. Đây rõ ràng là một cái bẫy, nhưng Mạc Đĩnh Chi không hề căng thẳng, nghĩ tới nghĩ lui rồi ung dung đối lại câu sau, viên quan đành mở cửa mời họ qua ải. Đến kinh đô nhà Nguyên, một vị đại thần muốn làm ông mất mặt, mời ông xem một bức tranh vẽ con chim nhỏ đậu trên cành trúc. Mạc Đĩnh Chi bước lên, lập tức làm rách bức tranh. Mọi người giật mình, cho rằng ông đã xúc phạm chủ nhà. Ông lại bình tĩnh giải thích: "Người xưa thường ví cây trúc với người quân tử, còn chim nhỏ là kẻ tiểu nhân. Lẽ nào lại để kẻ tiểu nhân đứng trên đầu người quân tử sao? Tôi xé tranh là thay ngài trừ bỏ kẻ tiểu nhân đấy!" Ông nói đầy lý lẽ, vị đại thần kia không còn gì để nói, đành phải xin lỗi ông. Về sau, vua nhà Nguyên cũng cảm phục tài năng của ông, khen ông là "tài tử số một của hai nước" (Lưỡng quốc Trạng nguyên). Mạc Đĩnh Chi vừa không để đất nước mất mặt, vừa khiến đối phương thật lòng khâm phục, danh tiếng của Đại Việt nhờ đó cũng được nâng cao. Cho đến tận hôm nay, người Việt Nam vẫn thường kể lại câu chuyện về ông. Câu chuyện này cho chúng ta thấy, một nhà ngoại giao xuất sắc không chỉ cần có trí tuệ mà còn phải có lòng dũng cảm. Đất nước dù nhỏ, nhưng chỉ cần có những nhân tài như vậy thì cũng sẽ không để ai bắt nạt.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, trình bày ngắn gọn nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions: [
    {q_zh:'赵王因为什么事情发愁？',q_vn:'Triệu vương lo lắng vì chuyện gì?',hint:'和氏璧：答应……／不答应……',sample:'秦王想用十五座城换赵国的和氏璧，赵王左右为难，不知如何答复秦王：答应吧，怕上当受骗，给了和氏璧却拿不到城；不答应吧，又怕得罪秦国。于是他赶忙召集大臣商议对策。',sample_vn:'Vua Tần muốn dùng mười lăm toà thành đổi ngọc họ Hoà của nước Triệu, Triệu vương tiến thoái lưỡng nan, không biết trả lời vua Tần thế nào: đồng ý thì sợ mắc lừa, đưa ngọc rồi mà không lấy được thành; không đồng ý thì lại sợ đắc tội với nước Tần. Thế là ông vội vàng triệu tập đại thần bàn đối sách.',note:'Hai vế đối lập đúng gợi ý: 答应吧，怕……；不答应吧，又怕…… — giữ nguyên khung này là trả lời trọn ý.'},
    {q_zh:'赵王派谁去秦国磋商？为什么？',q_vn:'Triệu vương cử ai sang nước Tần bàn bạc? Vì sao?',hint:'①见多识广，足智多谋 ②蔺相如的分析：秦国……赵国……',sample:'赵王派蔺相如去秦国磋商。一是因为蔺相如见多识广，有勇有谋；二是因为他的分析很有道理：秦强赵弱，凭实力，赵国不答应不行。秦国用十五座城换一块玉，也算慷慨，如果赵国不答应，过错在赵国；如果赵国送去了和氏璧，秦国却不交城，那么错就在秦国了。',sample_vn:'Triệu vương cử Lạn Tương Như sang Tần bàn bạc. Một là vì Lạn Tương Như hiểu biết rộng, có dũng có mưu; hai là vì phân tích của ông rất có lý: Tần mạnh Triệu yếu, xét thực lực thì Triệu không đồng ý không được. Tần dùng mười lăm toà thành đổi một miếng ngọc cũng coi như hào phóng, nếu Triệu không đồng ý thì lỗi ở Triệu; nếu Triệu gửi ngọc đi mà Tần không giao thành thì lỗi lại ở Tần.',note:'Hai lý do → 一是……二是……; phần phân tích dùng cặp 如果……，过错在……；如果……，那么错就在…… cho rõ lập luận.'},
    {q_zh:'蔺相如出使秦国的经过',q_vn:'Diễn biến chuyến đi sứ nước Tần của Lạn Tương Như',hint:'①献玉 ②拿回玉 ③发誓 ④请秦王举行仪式 ⑤把玉偷偷送回赵国 ⑥跟秦王辩论',sample:'蔺相如到了秦国，先把玉献给秦王。秦王左看右看，爱不释手，却不提换城的事。蔺相如说璧有小毛病，把玉拿了回来，还发誓说，如果秦王逼他，就把头和璧一起撞碎在柱子上。接着，他请秦王像赵王一样举行隆重的仪式。回到住处以后，他派人把玉偷偷送回了赵国。最后，他跟秦王辩论，理直气壮地说：秦王真想要和氏璧，就先把十五座城割让给赵国。秦王只得装出一副高姿态，再也没有提过以城换玉的事。',sample_vn:'Lạn Tương Như đến nước Tần, trước tiên dâng ngọc cho vua Tần. Vua Tần ngắm tới ngắm lui, mê không rời tay nhưng không nhắc chuyện đổi thành. Lạn Tương Như nói ngọc có tì vết nhỏ, lấy lại được ngọc, còn thề rằng nếu vua Tần ép thì sẽ đập đầu mình cùng viên ngọc vỡ nát vào cột. Tiếp đó, ông xin vua Tần cử hành nghi lễ long trọng giống Triệu vương. Về đến chỗ ở, ông sai người lén đưa ngọc về nước Triệu. Cuối cùng, ông tranh luận với vua Tần, dõng dạc nói: vua Tần thật muốn ngọc thì hãy cắt mười lăm toà thành cho Triệu trước. Vua Tần đành làm ra vẻ rộng lượng, và không bao giờ nhắc lại chuyện lấy thành đổi ngọc nữa.',note:'Sáu bước ①–⑥ → nối bằng 先 / 接着 / 回到住处以后 / 最后 cho mạch lạc; lồng 左看右看 (điểm ngữ pháp 1).'}
  ]
};

// ══════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — câu tự soạn (sách HSK 6 không có sách bài tập nghe), mỗi câu một tình huống mới
// ══════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Tự soạn theo dạng đề HSK 6 · chủ đề bài 27',
  items: [
    {
      n: 1,
      lines: [
        {sp:'男',zh:'我左问右问，他就是不愿意说出真相。'},
        {sp:'女',zh:'他可能有自己的难处，过几天再问吧。'}
      ],
      q: '关于那个人，可以知道什么？',
      qvn: 'Về người kia, có thể biết điều gì?',
      opts: ['不愿意说实话','已经说了真相','生病了','忘了这件事'],
      ans: 0,
      why: '左问右问 = hỏi đi hỏi lại; 就是不愿意说出真相 → anh ta không chịu nói thật.',
      words: []
    },
    {
      n: 2,
      lines: [
        {sp:'男',zh:'听说你们公司要跟那家外国企业合作了？'},
        {sp:'女',zh:'双方磋商了三个月，对方条件太高，老板到现在还没答复他们。'}
      ],
      q: '关于合作，可以知道什么？',
      qvn: 'Về việc hợp tác, có thể biết điều gì?',
      opts: ['已经开始合作了','对方放弃了','还没有最后确定','老板很满意'],
      ans: 2,
      why: '磋商了三个月 + 老板到现在还没答复 → chưa quyết định cuối cùng.',
      words: ['磋商','答复']
    },
    {
      n: 3,
      lines: [
        {sp:'女',zh:'小王怎么不跟小李说话了？'},
        {sp:'男',zh:'小李把小王要出国的事泄露给了经理，两个人之间就有了隔阂。'}
      ],
      q: '两个人之间为什么有了隔阂？',
      qvn: 'Vì sao giữa hai người có khoảng cách?',
      opts: ['小李撒谎了','小李把他的事说出去了','小李要出国','小李得罪了经理'],
      ans: 1,
      why: '泄露给了经理 → Tiểu Lý làm lộ chuyện Tiểu Vương sắp ra nước ngoài; 隔阂 = khoảng cách, bất hoà.',
      words: ['泄露','隔阂']
    },
    {
      n: 4,
      lines: [
        {sp:'女',zh:'你觉得新来的经理怎么样？'},
        {sp:'男',zh:'挺慷慨的，第一个月就给大家发了奖金。不过他说要改善办公环境，到现在还没兑现。'}
      ],
      q: '男的对新经理有什么不满？',
      qvn: 'Người đàn ông không hài lòng điều gì ở giám đốc mới?',
      opts: ['太霸道了','不给大家发奖金','常常撒谎','说过的事还没做到'],
      ans: 3,
      why: '到现在还没兑现 → lời hứa chưa thực hiện; ông ấy đã phát thưởng nên B sai.',
      words: ['慷慨','兑现']
    },
    {
      n: 5,
      lines: [
        {sp:'男',zh:'那位顾客怎么在店里大喊大叫？'},
        {sp:'女',zh:'他的手机是自己摔坏的，非要我们免费换新的，这不是无理取闹吗？'}
      ],
      q: '女的认为那位顾客怎么样？',
      qvn: 'Người phụ nữ cho rằng vị khách đó thế nào?',
      opts: ['在无理取闹','说得很在理','手机质量有问题','态度很好'],
      ans: 0,
      why: '这不是无理取闹吗? (phản vấn) = đây chính là gây sự vô cớ — điện thoại do anh ta tự làm rơi hỏng.',
      words: ['无理取闹']
    },
    {
      n: 6,
      lines: [
        {sp:'男',zh:'小林，我们刚才还在说你呢，你就来了！'},
        {sp:'女',zh:'真是说曹操，曹操到啊。你们说我什么呢？'}
      ],
      q: '女的说“说曹操，曹操到”是什么意思？',
      qvn: 'Người phụ nữ nói "nhắc Tào Tháo, Tào Tháo đến" nghĩa là gì?',
      opts: ['她认识曹操','她来晚了','大家刚说到她，她就来了','她想听大家讲故事'],
      ans: 2,
      why: 'Câu tục ngữ được dẫn ra khi vừa nhắc đến ai thì người đó xuất hiện.',
      words: []
    },
    {
      n: 7,
      lines: [
        {sp:'女',zh:'这块玉是奶奶留给我的，我一直舍不得戴。'},
        {sp:'男',zh:'那你可要好好保管，丢了就再也找不回来了。'}
      ],
      q: '男的提醒女的什么？',
      qvn: 'Người đàn ông nhắc người phụ nữ điều gì?',
      opts: ['多戴戴这块玉','把玉送给别人','去问问奶奶','好好保管这块玉'],
      ans: 3,
      why: '那你可要好好保管 → giữ gìn cẩn thận (保管 ôn bài 21).',
      words: ['玉']
    }
  ]
};

// ══════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn trách em đã hứa mời đi ăn mà mãi chưa thấy đâu.',a:{sp:'Bạn',zh:'你不是说考完试就请我吃饭吗？怎么一直没动静？',vn:'Cậu chẳng bảo thi xong sẽ mời tớ đi ăn à? Sao mãi chẳng thấy động tĩnh gì?'},need:['Dùng 兑现'],sample:'别着急，我说话算话，这个周末就兑现承诺，请你吃火锅。',samplePy:'Bié zháojí, wǒ shuōhuà suànhuà, zhège zhōumò jiù duìxiàn chéngnuò, qǐng nǐ chī huǒguō.',sampleVn:'Đừng sốt ruột, tớ nói là làm, cuối tuần này sẽ thực hiện lời hứa, mời cậu ăn lẩu.',tip:'兑现 + 承诺 = thực hiện lời hứa; 说话算话 = nói lời giữ lời.'},
    {scene:'Bạn cùng lớp nghi em đã kể chuyện riêng của bạn ấy cho người khác.',a:{sp:'Bạn',zh:'是不是你把我的事告诉别人了？',vn:'Có phải cậu đem chuyện của tớ kể cho người khác không?'},need:['Dùng 不成','Dùng 泄露'],sample:'我们认识这么多年了，我还会泄露你的秘密不成？肯定是别人说出去的。',samplePy:'Wǒmen rènshi zhème duō nián le, wǒ hái huì xièlòu nǐ de mìmì bùchéng? Kěndìng shì biérén shuō chūqu de.',sampleVn:'Chúng mình quen nhau bao nhiêu năm rồi, lẽ nào tớ lại đi tiết lộ bí mật của cậu? Chắc chắn là người khác nói ra.',tip:'还会……不成? = lẽ nào lại … sao? (phản vấn, ý thật: tớ không làm thế).'},
    {scene:'Thầy chủ nhiệm mời em thay mặt lớp phát biểu trong lễ khai giảng.',a:{sp:'Thầy giáo',zh:'学校想请你代表全班在开学仪式上发言，你愿意吗？',vn:'Nhà trường muốn mời em thay mặt cả lớp phát biểu trong lễ khai giảng, em có đồng ý không?'},need:['Dùng 荣幸'],sample:'能代表全班发言是我的荣幸，我一定好好准备，不辜负大家的期望。',samplePy:'Néng dàibiǎo quán bān fāyán shì wǒ de róngxìng, wǒ yídìng hǎohāo zhǔnbèi, bù gūfù dàjiā de qīwàng.',sampleVn:'Được thay mặt cả lớp phát biểu là vinh dự của em, em nhất định sẽ chuẩn bị thật tốt, không phụ sự kỳ vọng của mọi người.',tip:'能……是我的荣幸 — lời nhận nhiệm vụ lịch sự; 辜负期望 (bài 3) = phụ kỳ vọng.'},
    {scene:'Bạn tức giận vì nhóm trưởng độc đoán, định đi tìm cậu ấy cãi cho ra nhẽ.',a:{sp:'Bạn',zh:'组长太霸道了，什么都他说了算，我要去找他说清楚！',vn:'Nhóm trưởng độc đoán quá, việc gì cũng cậu ta quyết, tớ phải đi nói cho rõ!'},need:['Dùng 镇静','Dùng 理直气壮'],sample:'你先镇静下来。只要你有道理，就理直气壮地跟他说，没必要吵起来。',samplePy:'Nǐ xiān zhènjìng xiàlai. Zhǐyào nǐ yǒu dàolǐ, jiù lǐzhí-qìzhuàng de gēn tā shuō, méi bìyào chǎo qǐlai.',sampleVn:'Cậu bình tĩnh lại đã. Chỉ cần cậu có lý thì cứ đường hoàng nói với cậu ấy, không cần phải cãi nhau.',tip:'镇静下来 = bình tĩnh lại; 理直气壮地 + V = đường hoàng, dõng dạc làm gì.'},
    {scene:'Bạn đã hẹn nghỉ hè cùng em đi một nơi rất đẹp, nhưng giờ lại nói xem ảnh trên mạng là đủ rồi.',a:{sp:'Bạn',zh:'听说那个地方特别美，不过网上看看照片就够了，不用专门去了吧。',vn:'Nghe nói chỗ đó đẹp lắm, nhưng lên mạng xem ảnh là đủ rồi, khỏi phải đi chuyên một chuyến nhỉ.'},need:['Dẫn một câu tục ngữ (老人们常说…… / 俗话说……)','Thuyết phục bạn vẫn đi'],sample:'老人们常说百闻不如一见，照片看得再多，也不如自己去一趟。我们还是一起去吧！',samplePy:'Lǎorénmen cháng shuō bǎi wén bùrú yí jiàn, zhàopiàn kàn de zài duō, yě bùrú zìjǐ qù yí tàng. Wǒmen háishi yìqǐ qù ba!',sampleVn:'Người già vẫn nói "trăm nghe không bằng một thấy", xem ảnh nhiều đến mấy cũng không bằng tự mình đi một chuyến. Mình cứ cùng nhau đi đi!',tip:'Dẫn tục ngữ trước rồi giải thích bằng lời của mình — lời khuyên nghe có sức nặng hơn; 再……也…… = dù … đến mấy cũng ….'}
  ]
};

// ══════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết bài văn nghị luận "Học ngoại ngữ cần kiên trì".',a:'学语言不能着急，只要每天坚持就一定能进步。',b:'学语言不能着急，“不怕慢，就怕站”，只要每天坚持就一定能进步。',better:'b',why:'Bài văn nghị luận dẫn một câu tục ngữ đúng chỗ làm lập luận sinh động, thuyết phục hơn. Câu a đúng nhưng khô.'},
    {scene:'Bạn lo lắng vì chuyện mình thi trượt đã bị cả lớp biết.',a:'真是好事不出门，坏事传千里，这下大家都知道了。',b:'别担心，大家很快就会忘的，下次考好就行了。',better:'b',why:'Dẫn tục ngữ không đúng lúc còn tệ hơn không dẫn: câu a như "đổ thêm dầu vào lửa". Bạn đang buồn cần lời an ủi như câu b.'},
    {scene:'Công ty viết thư trả lời một đối tác nước ngoài.',a:'贵公司的来信已收到，我方将尽快给予答复。',b:'你们的信我们看到了，回头再说吧。',better:'a',why:'Thư công vụ cần trang trọng: 贵公司, 我方, 给予答复. Câu b (回头再说吧) quá tuỳ tiện, thiếu tôn trọng đối tác.'},
    {scene:'Xin lỗi ông hàng xóm vì tối qua cả nhà làm ồn.',a:'如有冒犯，请您一定原谅，以后我方一定注意。',b:'爷爷，昨天晚上我们太吵了，真是对不起，以后一定注意。',better:'b',why:'Nói trực tiếp với ông hàng xóm cần chân thành, gần gũi. Câu a (如有冒犯, 我方) như văn bản chính thức, nghe gượng gạo.'},
    {scene:'Phát thanh viên đọc bản tin thời sự.',a:'两国外长就边境问题进行了友好磋商。',b:'两国外长坐在一起聊了聊边境那点儿事。',better:'a',why:'Bản tin dùng văn phong báo chí: 就……进行磋商. Câu b (聊了聊, 那点儿事) là khẩu ngữ, hạ thấp tính nghiêm túc của sự kiện.'},
    {scene:'Đòi em trai trả lại quyển truyện đã mượn.',a:'请你将此书归还于我。',b:'把我的书还给我，快点儿！',better:'b',why:'Nói với em nhỏ trong nhà dùng khẩu ngữ đơn giản. Câu a (将……归还于我) là văn viết cổ như lời Lạn Tương Như nói với vua Tần — dùng ở đây nghe buồn cười.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'赵王因为什么事情发愁？', cue:'和氏璧：答应……／不答应……', words:['玉','答复','得罪','大臣','对策']},
    {step:'赵王派谁去秦国磋商？为什么？', cue:'①见多识广，足智多谋 ②蔺相如的分析：秦国……赵国……', words:['提议','请教','实力','慷慨','亏待','动身','磋商','荣幸']},
    {step:'蔺相如出使秦国的经过', cue:'①献玉 ②拿回玉 ③发誓 ④请秦王举行仪式 ⑤把玉偷偷送回赵国 ⑥跟秦王辩论', words:['转达','爱不释手','圈套','归还','从容','中央','兑现','妄想','发誓','尸体','撒谎','隆重','仪式','沐浴','荤','庄严','无理取闹','冒犯','亦','边境','泄露','率领','镇静','雄厚','一贯','霸道','声誉','列举','履行','歪曲','理直气壮','压迫','口头','副','姿态','隔阂','争端']}
  ],
  checklist: [
    'Kể đủ 3 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có nêu đúng thế khó của Triệu vương: đồng ý thì sợ mắc lừa, không đồng ý thì sợ đắc tội với Tần không?',
    'Ý 2 có nói đủ hai lý do: phẩm chất của Lạn Tương Như và phân tích "Tần mạnh Triệu yếu — lỗi ở ai" không?',
    'Ý 3 có kể đủ 6 bước ①–⑥ (dâng ngọc → lấy lại ngọc → thề → xin cử hành nghi lễ → lén đưa ngọc về → tranh luận) không?',
    'Có dùng 左看右看 / 左思右想 và ít nhất một câu 不成 (vd: 我还怕他跑了不成?) khi kể không?'
  ]
};




// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 75–80) — đáp án theo đáp án sách
// (Quyển 下 có thêm 篇章修辞 · 修辞(4) 引用: 练一练 "把下列6个小句组合成3个连贯的语段" → dạng ab (cho sẵn câu đầu đoạn, chọn câu đi tiếp), như bài 22;
//  练习4 của bài này là 找出语段中引用的成分 (không phải 模仿造句) → dạng ab;
//  扩展 词汇: (1) 反义词 và (2) 学业 词语 chỉ để làm quen → chuyển thành kho; 热身 (thảo luận + nhóm từ 商/过/诚/众) không đưa vào; bài này không có 病句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“左……右……”完成句子（注释1 · 练一练）', vn:'Dùng 左……右…… hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'我＿＿地去了你家五六趟了，你怎么老不在家呀！', tu:'左……右……', dap:'我左一趟右一趟地去了你家五六趟了，你怎么老不在家呀！',
      giai:'Mẫu ② 左 + 一 + lượng từ + 右 + 一 + lượng từ (+ 地 + V): 左一趟右一趟 = hết chuyến này đến chuyến khác, nhấn việc đi lại nhiều lần.'},
     {s:'大家＿＿，总算把她说通了。', tu:'左……右……', dap:'大家左一句右一句，总算把她说通了。',
      giai:'左一句右一句 = người một câu, kẻ một câu (khuyên đi khuyên lại) — lượng từ 句 hợp với động tác "nói, khuyên".'},
     {s:'妈妈拿着女儿买的礼物，＿＿，越看越喜欢。', tu:'左……右……', dap:'妈妈拿着女儿买的礼物，左看看右看看，越看越喜欢。',
      giai:'Mẫu ① 左 + V1 + 右 + V2 (động từ giống nhau): 左看看右看看 = ngắm tới ngắm lui; hô ứng với 越看越喜欢.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'将疑问句改成带“不成”的反问句（注释2 · 练一练）', vn:'Đổi câu hỏi thành câu phản vấn có 不成 (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'到现在你都不说出实情，难道是想一直这样骗下去吗？', tu:'不成', dap:'到现在你都不说出实情，难道是想一直这样骗下去不成？',
      giai:'Thay 吗 bằng 不成 ở cuối câu; 难道 ở phía trước hô ứng → giọng phản vấn mạnh hơn: "chẳng lẽ định lừa mãi thế sao?"'},
     {s:'你们大家都不说话，事情就这么算了吗？', tu:'不成', dap:'你们大家都不说话，难道事情就这么算了不成？',
      giai:'Thêm 难道 trước vế hỏi và đổi 吗 thành 不成 — 难道……不成? là khung phản vấn thường gặp.'},
     {s:'咱们多少年的朋友了，难道我会害你吗？', tu:'不成', dap:'咱们多少年的朋友了，我会害你不成？',
      giai:'不成 tự nó đã mang ngữ khí phản vấn nên có thể lược 难道 (như câu 我还怕他跑了不成?); ý thật: "tôi không đời nào hại cậu".'}
   ]},

  {kieu:'ab', de:'篇章修辞 · 修辞（4）引用 · 练一练：把下列6个小句组合成3个连贯的语段', vn:'Tu từ văn bản · Tu từ (4) DẪN DỤNG (引用 — cố ý dẫn thành ngữ, thơ, cách ngôn, điển cố… để bày tỏ suy nghĩ, như 左右为难, 完璧归赵, 酒香不怕巷子深) · Luyện tập: ghép 6 câu nhỏ A–F thành 3 đoạn văn liền mạch. Mỗi câu hỏi cho sẵn câu đứng đầu đoạn — chọn câu đi tiếp theo. Đáp án sách: (1) A D　(2) E B　(3) C F',
   cau:[
     {s:'A　以前咱们讲究的是什么？童叟无欺；言而有信；君子一言，驷马难追；酒香不怕巷子深 → ？',
      opts:['B　近年来，失眠症发病率居高不下，美国的失眠发生率高达32%~50%，英国在10%~14%之间，中国也在30%以上','D　现在可好，做假广告的，卖假冒伪劣产品的，考试作弊的，什么都有','F　“少壮不努力，老大徒伤悲”，所以，人应该珍惜时间，从小努力'], ans:1,
      giai:'A dẫn một loạt thành ngữ, tục ngữ về chữ tín (童叟无欺, 言而有信, 君子一言驷马难追) để nói "ngày xưa", D mở bằng 现在可好 đối lập "bây giờ thì …" với đủ trò gian dối → A D (đáp án sách).'},
     {s:'E　世界卫生组织对14个国家的调查显示 → ？',
      opts:['B　近年来，失眠症发病率居高不下，美国的失眠发生率高达32%~50%，英国在10%~14%之间，中国也在30%以上','D　现在可好，做假广告的，卖假冒伪劣产品的，考试作弊的，什么都有','F　“少壮不努力，老大徒伤悲”，所以，人应该珍惜时间，从小努力'], ans:0,
      giai:'E "điều tra của WHO cho thấy" phải nối với nội dung kết quả điều tra — B dẫn số liệu về tỉ lệ mất ngủ (dẫn dụng số liệu) → E B (đáp án sách).'},
     {s:'C　从小我就常听妈妈说，“一寸光阴一寸金，寸金难买寸光阴” → ？',
      opts:['B　近年来，失眠症发病率居高不下，美国的失眠发生率高达32%~50%，英国在10%~14%之间，中国也在30%以上','D　现在可好，做假广告的，卖假冒伪劣产品的，考试作弊的，什么都有','F　“少壮不努力，老大徒伤悲”，所以，人应该珍惜时间，从小努力'], ans:2,
      giai:'C dẫn câu "một tấc thời gian một tấc vàng", F dẫn tiếp thơ cổ "少壮不努力，老大徒伤悲" rồi rút ra kết luận 珍惜时间 — cùng chủ đề quý trọng thời gian → C F (đáp án sách).'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'妄想', chu:'想', ds:['梦想','理想','空想','想法']},
   cau:[
     {tu:'答复', chu:'复', dap:['回复','复习','往复','复杂'], them:['复信','批复','函复','复电'],
      giai:'复 trong 答复 nghĩa là "đáp lại, trả lời" (回复, 复信 = thư trả lời, 批复 = phê duyệt trả lời). Đáp án sách còn lấy 复习 (ôn lại — "lặp lại"), 往复 (qua lại), 复杂 (phức tạp — "nhiều lớp"): cùng chữ 复 nhưng khác nghĩa.'},
     {tu:'荣幸', chu:'幸', dap:['幸亏','幸运','幸好','幸免'], them:['幸福','庆幸','有幸','不幸','侥幸','万幸'],
      giai:'幸 = may mắn, điều may (荣幸 = vinh dự và may mắn; 幸亏 / 幸好 = may mà; 幸免 = may mà thoát; 侥幸 — bài 20).'},
     {tu:'撒谎', chu:'谎', dap:['谎言','谎话','谎称','弥天大谎'], them:['说谎','谎报','扯谎'],
      giai:'谎 = lời nói dối (谎言 / 谎话 = lời nói dối; 谎称 = nói dối rằng; 弥天大谎 = lời nói dối tày trời; 谎报 = báo cáo sai sự thật).'},
     {tu:'边境', chu:'边', dap:['旁边','身边','边关','边缘'], them:['边界','边疆','海边','河边','周边','边防'],
      giai:'边 = mép, rìa, vùng giáp ranh (边境 / 边关 / 边疆 = vùng biên; 边缘 = mép, rìa — bài 6; 周边 = xung quanh — bài 17).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'我的手机铃声不断响起，让我有点儿烦。', tu:'左一……右一……', dap:'我的手机铃声不断响起，左一遍右一遍，让我有点儿烦。',
      giai:'不断响起 (vang lên liên tục) → thêm 左一遍右一遍 nhấn việc lặp đi lặp lại nhiều lần (điểm ngữ pháp 1, mẫu ②).'},
     {s:'为提高工作效率，小王建议把两个部门合并起来。', tu:'提议', dap:'为提高工作效率，小王提议把两个部门合并起来。',
      giai:'建议 → 提议: nêu phương án để tập thể bàn bạc (việc sáp nhập phòng ban trong công ty).'},
     {s:'你对他诚挚的问候，我一定当面转告。', tu:'转达', dap:'你对他诚挚的问候，我一定转达给他。',
      giai:'转告 → 转达: 转达 + 问候 là cụm cố định, trang trọng; cấu trúc 转达给 + người.'},
     {s:'我终于做到了若干年前对你的承诺。', tu:'兑现', dap:'我终于兑现了若干年前对你的承诺。',
      giai:'做到承诺 → 兑现承诺 (thực hiện lời hứa) — kết hợp chuẩn; 若干 (bài 13) = một số.'},
     {s:'民族素质指国内各民族全体成员个体和群体的素质，也称国民素质。', tu:'亦', dap:'民族素质指国内各民族全体成员个体和群体的素质，亦称国民素质。',
      giai:'也 → 亦 (văn viết): 亦称 = cũng gọi là, hợp giọng định nghĩa thuật ngữ.'},
     {s:'你刚答应我的事，转眼就改变主意了，难道你想反悔吗？', tu:'不成', dap:'你刚答应我的事，转眼就改变主意，你想反悔不成？',
      giai:'难道……吗? → ……不成? (phản vấn): bỏ 难道 và 吗, đặt 不成 cuối câu — "cậu định nuốt lời chắc?"'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['慷慨','答复','转达','实力','亏待'],
   cau:[
     {s:'一家公司想聘请我去工作，于是派人来说服我。来人先＿＿了总经理的问候，然后又开始劝说：“凭你的＿＿，几年之内，一定能升到副总的职位。而且我们老板很＿＿，一定不会＿＿你，……”我没有立即＿＿他们，决定慎重地考虑考虑再说。',
      dap:['转达','实力','慷慨','亏待','答复']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['列举','冒犯','雄厚','霸道','无理取闹'],
   cau:[
     {s:'班里有个很＿＿的学生，大家都讨厌他。他仗着家里资金＿＿，常常＿＿。不但欺负同学，还＿＿老师、撒谎、不讲信用……劣迹太多，无法一一＿＿了。',
      dap:['霸道','雄厚','无理取闹','冒犯','列举']}
   ]},

  {kieu:'ab', de:'请找出下列语段中引用的成分', vn:'Tìm thành phần DẪN DỤNG (引用) trong các đoạn văn sau (bài tập 4) — đáp án theo sách',
   cau:[
     {s:'俗话说：“不到长城非好汉！”今天我终于登上了长城。', opts:['今天','不到长城非好汉','登上了长城','俗话说'], ans:1,
      giai:'Dẫn câu nói nổi tiếng đã thành tục ngữ 不到长城非好汉 (chưa đến Trường Thành chưa phải hảo hán); 俗话说 chỉ là lời dẫn vào, không phải thành phần được dẫn.'},
     {s:'“只要功夫深，铁杵磨成针。”无论做什么事情，只要能坚持，有恒心，一定会成功的。', opts:['只要能坚持','有恒心','一定会成功的','只要功夫深，铁杵磨成针'], ans:3,
      giai:'Dẫn tục ngữ 只要功夫深，铁杵磨成针 (có công mài sắt có ngày nên kim) để mở đầu, sau đó giải thích đạo lý "kiên trì sẽ thành công".'},
     {s:'我看他是醉翁之意不在酒啊，你千万小心，别上了他的当。', opts:['醉翁之意不在酒','千万小心','上了他的当','我看他'], ans:0,
      giai:'Dẫn câu 醉翁之意不在酒 trong 《醉翁亭记》 của Âu Dương Tu: ý ông lão say không ở chén rượu → ý đồ thật nằm ở chỗ khác.'},
     {s:'刚开学时，老师记不住大家的名字，常常张冠李戴。', opts:['刚开学时','记不住','张冠李戴','大家的名字'], ans:2,
      giai:'Dẫn thành ngữ 张冠李戴 (mũ ông Trương đội lên đầu ông Lý) để nói việc gọi nhầm tên người này thành người kia.'}
   ]},

  {kieu:'kho', de:'熟悉下列反义词（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (1): các cặp từ trái nghĩa. Sách chỉ cho các cặp để làm quen — ở đây chuyển thành bài nối: chọn từ trái nghĩa cho mỗi từ (đáp án theo các cặp trong sách)', tu:['侵略','进攻','原告','和平','投标','民主','口头'],
   cau:[
     {s:'保卫（bảo vệ） ↔ ＿＿', dap:['侵略']},
     {s:'撤退（rút lui） ↔ ＿＿', dap:['进攻']},
     {s:'被告（bị cáo） ↔ ＿＿', dap:['原告']},
     {s:'暴力（bạo lực） ↔ ＿＿', dap:['和平']},
     {s:'招标（mời thầu） ↔ ＿＿', dap:['投标']},
     {s:'独裁（độc tài） ↔ ＿＿', dap:['民主']},
     {s:'书面（bằng văn bản） ↔ ＿＿', dap:['口头']}
   ]},

  {kieu:'kho', de:'阅读短文，熟悉下列学业方面的词语（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (2): đọc đoạn văn, làm quen với các từ về học tập. Sách gạch chân các từ để làm quen — ở đây chuyển thành bài điền: điền từ vào đúng chỗ trong đoạn văn của sách (摘要、注释 để sẵn vì có thể đổi chỗ với 标题)',
   tu:['文凭','科目','作弊','旷课','格式','标题','要点','刊登','刊物','答辩','典礼'],
   cau:[
     {s:'大学毕业生想拿到＿＿，首先得通过各＿＿的考试，考试时当然不能＿＿，平时也不能总是＿＿。除此以外，最重要的就是写好毕业论文了。论文＿＿要规范，＿＿、摘要、注释等部分都要按照规定的格式书写，此外，论文应该＿＿突出，论证严密。一篇好的毕业论文很有可能＿＿在专业＿＿上呢。论文完成以后，就要进行论文＿＿了。只要答辩通过，就可以愉快地参加毕业＿＿了。',
      dap:['文凭','科目','作弊','旷课','格式','标题','要点','刊登','刊物','答辩','典礼']}
   ]}
];
