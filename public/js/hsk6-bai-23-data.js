// ══════════════════════════════════════════
// DATA — HSK6 Bài 23: 大数据时代 (Thời đại dữ liệu lớn)
// 第六单元 趣味世界 · Nguồn: HSK标准教程6下 (tr. 33–41) + đáp án sách
// Bài khoá: 大数据时代 (1061字) · 51 từ mới (mục 43 切切实实 kèm dạng gốc 切实)
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'通俗',py:'tōngsú',pos:'Tính từ',vn:'thông thường, phổ thông, dễ hiểu',hv:'thông tục',em:'🗣️',lesson:1,
   explain:['Dễ hiểu, gần gũi, phù hợp với trình độ của số đông người đọc / người nghe (không chuyên môn, không khô khan).','Hay đi với 例子, 语言, 读物, 歌曲; cụm cố định 通俗易懂 (dễ hiểu). Trái nghĩa: 深奥 (bài 17), 专业.'],
   usage:'以 / 用 + 通俗的例子 / 语言 + V; 通俗易懂; 通俗读物 (sách phổ thông); 通俗歌曲 (nhạc đại chúng).',
   collo:['通俗易懂','通俗的例子','通俗读物','语言通俗'],
   ex_zh:'有学者以通俗的例子这样告诉我们。',ex_py:'Yǒu xuézhě yǐ tōngsú de lìzi zhèyàng gàosu wǒmen.',ex_vn:'Có học giả đã dùng một ví dụ dễ hiểu để nói với chúng ta như thế này.',
   exList:[
     {zh:'枯燥的名词解释会让“科盲”们更加摸不着头脑，有学者以通俗的例子这样告诉我们。',py:'Kūzào de míngcí jiěshì huì ràng "kēmáng" men gèngjiā mō bu zháo tóunǎo, yǒu xuézhě yǐ tōngsú de lìzi zhèyàng gàosu wǒmen.',vn:'Lời giải thích thuật ngữ khô khan sẽ khiến những người "mù khoa học" càng không hiểu đầu đuôi, nên có học giả đã dùng một ví dụ dễ hiểu để nói với chúng ta.'},
     {zh:'这本科普书语言通俗易懂，连小学生都看得明白。',py:'Zhè běn kēpǔ shū yǔyán tōngsú yìdǒng, lián xiǎoxuéshēng dōu kàn de míngbai.',vn:'Cuốn sách phổ biến khoa học này ngôn ngữ dễ hiểu, ngay cả học sinh tiểu học cũng đọc hiểu được.'},
     {zh:'老师用通俗的语言把深奥的道理讲得清清楚楚。',py:'Lǎoshī yòng tōngsú de yǔyán bǎ shēn\'ào de dàolǐ jiǎng de qīngqingchǔchǔ.',vn:'Thầy giáo dùng lời lẽ bình dị giảng giải những đạo lý sâu xa một cách rõ ràng rành mạch.'}
   ],
   colloFull:[
     {zh:'通俗易懂',py:'tōngsú yìdǒng',vn:'dễ hiểu, bình dị'},
     {zh:'通俗的例子',py:'tōngsú de lìzi',vn:'ví dụ dễ hiểu'},
     {zh:'通俗读物',py:'tōngsú dúwù',vn:'sách đọc phổ thông'},
     {zh:'语言通俗',py:'yǔyán tōngsú',vn:'ngôn ngữ bình dị'},
     {zh:'通俗歌曲',py:'tōngsú gēqǔ',vn:'nhạc đại chúng'}
   ],
   patterns:[
     {s:'以 / 用 + 通俗的 + 例子 / 语言 + V',m:'Dùng ví dụ / lời lẽ dễ hiểu để …'},
     {s:'……写得 / 讲得 + 通俗易懂',m:'… viết / giảng dễ hiểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn sách này viết rất dễ hiểu, ngay cả người không hiểu khoa học cũng đọc được.',answer:'这本书写得很通俗，连不懂科学的人也看得懂。',answerPy:'Zhè běn shū xiě de hěn tōngsú, lián bù dǒng kēxué de rén yě kàn de dǒng.',
      note:'连……也……: ngay cả … cũng … (nhấn trường hợp cực đoan); V + 得懂 = bổ ngữ khả năng.',pair:'连……也……'},
     {promptLang:'vi',prompt:'Nếu thầy giải thích bằng ví dụ dễ hiểu thì chúng em sẽ không thấy khô khan nữa.',answer:'如果老师用通俗的例子来解释，我们就不会觉得枯燥了。',answerPy:'Rúguǒ lǎoshī yòng tōngsú de lìzi lái jiěshì, wǒmen jiù bú huì juéde kūzào le.',
      note:'如果……就……: nếu … thì …; 用 + N + 来 + V = dùng … để ….',pair:'如果……就……'}
   ]},

  {n:2,zh:'堆积',py:'duījī',pos:'Động từ',vn:'chồng chất, chất đống, dồn lại',hv:'đôi tích',em:'📚',lesson:1,
   explain:['Nhiều thứ (vật, việc) dồn lại, chất lên thành đống: 书、垃圾、雪、工作、问题 đều có thể 堆积.','Thành ngữ trong bài: 堆积如山 = chất cao như núi (rất nhiều). Nghĩa bóng: 问题 / 工作堆积 = việc tồn đọng.'],
   usage:'N + 堆积 + 如山 / 在…… / 起来; 越堆积越多; 大量堆积; 脂肪堆积 (tích mỡ).',
   collo:['堆积如山','堆积起来','大量堆积','越堆积越多'],
   ex_zh:'我们根据这些原始的、堆积如山的记录梳理出的航程设计方案，将是最卓越的。',ex_py:'Wǒmen gēnjù zhèxiē yuánshǐ de, duījī rú shān de jìlù shūlǐ chū de hángchéng shèjì fāng\'àn, jiāng shì zuì zhuóyuè de.',ex_vn:'Phương án thiết kế hành trình mà chúng ta sắp xếp ra từ những ghi chép gốc chất cao như núi này sẽ là phương án ưu việt nhất.',
   exList:[
     {zh:'这些原始的、堆积如山的记录，就是大数据。',py:'Zhèxiē yuánshǐ de, duījī rú shān de jìlù, jiù shì dà shùjù.',vn:'Những ghi chép gốc chất cao như núi này chính là dữ liệu lớn.'},
     {zh:'考试前一周，我的书桌上堆积着厚厚的复习资料。',py:'Kǎoshì qián yì zhōu, wǒ de shūzhuō shang duījīzhe hòuhòu de fùxí zīliào.',vn:'Một tuần trước kỳ thi, trên bàn học của tôi chất đống tài liệu ôn tập dày cộp.'},
     {zh:'问题要及时解决，否则会越堆积越多。',py:'Wèntí yào jíshí jiějué, fǒuzé huì yuè duījī yuè duō.',vn:'Vấn đề phải giải quyết kịp thời, nếu không sẽ càng dồn càng nhiều.'}
   ],
   colloFull:[
     {zh:'堆积如山',py:'duījī rú shān',vn:'chất cao như núi'},
     {zh:'堆积起来',py:'duījī qǐlái',vn:'chất đống lên, dồn lại'},
     {zh:'大量堆积',py:'dàliàng duījī',vn:'dồn lại với số lượng lớn'},
     {zh:'越堆积越多',py:'yuè duījī yuè duō',vn:'càng dồn càng nhiều'},
     {zh:'脂肪堆积',py:'zhīfáng duījī',vn:'tích tụ mỡ'}
   ],
   patterns:[
     {s:'N + 堆积如山',m:'… chất cao như núi (rất nhiều)'},
     {s:'（在）+ 地方 + 堆积着 + N',m:'Ở … chất đống …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu mỗi ngày không làm xong bài tập thì bài tập sẽ càng dồn càng nhiều.',answer:'如果每天不把作业做完，作业就会越堆积越多。',answerPy:'Rúguǒ měi tiān bù bǎ zuòyè zuòwán, zuòyè jiù huì yuè duījī yuè duō.',
      note:'越……越……: càng … càng …; câu 把 phủ định: 不 đứng trước 把.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Sau cơn bão, trên đường chất đống cành cây, xe cộ hoàn toàn không đi qua được.',answer:'台风过后，路上堆积着很多树枝，车辆根本过不去。',answerPy:'Táifēng guòhòu, lùshang duījīzhe hěn duō shùzhī, chēliàng gēnběn guò bu qù.',
      note:'Câu tồn hiện: nơi chốn + V着 + N; 根本 + phủ định = hoàn toàn không.',pair:'根本 + 不 / 没'}
   ]},

  {n:3,zh:'卓越',py:'zhuóyuè',pos:'Tính từ',vn:'nổi bật, lớn lao, xuất sắc',hv:'trác việt',em:'🏆',lesson:1,
   explain:['Vượt trội hẳn so với bình thường, xuất sắc hơn người — sắc thái khen, trang trọng, văn viết.','Hay đi với: 成就, 贡献, 才能, 表现, 人才. Mạnh hơn 优秀; không dùng cho đồ vật bình thường (không nói 卓越的衣服).'],
   usage:'卓越的 + 成就 / 贡献 / 才能 / 表现; 表现卓越; 如此卓越; 最卓越的方案.',
   collo:['卓越的成就','卓越的贡献','表现卓越','卓越的才能'],
   ex_zh:'这样梳理出的航程设计方案，将是最卓越的。',ex_py:'Zhèyàng shūlǐ chū de hángchéng shèjì fāng\'àn, jiāng shì zuì zhuóyuè de.',ex_vn:'Phương án thiết kế hành trình được sắp xếp ra như vậy sẽ là ưu việt nhất.',
   exList:[
     {zh:'该公司之所以取得如此卓越的成就，最重要的是与相关机构建立了战略合作伙伴关系。',py:'Gāi gōngsī zhīsuǒyǐ qǔdé rúcǐ zhuóyuè de chéngjiù, zuì zhòngyào de shì yǔ xiāngguān jīgòu jiànlìle zhànlüè hézuò huǒbàn guānxi.',vn:'Công ty này sở dĩ đạt được thành tựu xuất sắc như vậy, quan trọng nhất là đã thiết lập quan hệ đối tác hợp tác chiến lược với các cơ quan liên quan.'},
     {zh:'这位科学家为人类做出了卓越的贡献。',py:'Zhè wèi kēxuéjiā wèi rénlèi zuòchūle zhuóyuè de gòngxiàn.',vn:'Nhà khoa học này đã có những đóng góp to lớn cho nhân loại.'},
     {zh:'她在这次演讲比赛中表现卓越，获得了一等奖。',py:'Tā zài zhè cì yǎnjiǎng bǐsài zhōng biǎoxiàn zhuóyuè, huòdéle yī děng jiǎng.',vn:'Cô ấy thể hiện xuất sắc trong cuộc thi hùng biện lần này và giành giải nhất.'}
   ],
   colloFull:[
     {zh:'卓越的成就',py:'zhuóyuè de chéngjiù',vn:'thành tựu xuất sắc'},
     {zh:'卓越的贡献',py:'zhuóyuè de gòngxiàn',vn:'đóng góp to lớn'},
     {zh:'表现卓越',py:'biǎoxiàn zhuóyuè',vn:'thể hiện xuất sắc'},
     {zh:'卓越的才能',py:'zhuóyuè de cáinéng',vn:'tài năng kiệt xuất'},
     {zh:'卓越人才',py:'zhuóyuè réncái',vn:'nhân tài xuất chúng'}
   ],
   patterns:[
     {s:'取得 / 做出 + 卓越的 + 成就 / 贡献',m:'Đạt được thành tựu / có đóng góp xuất sắc'},
     {s:'N + 表现卓越',m:'… thể hiện xuất sắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy sở dĩ đạt được thành tựu xuất sắc như vậy là vì mấy chục năm nay luôn kiên trì không ngừng.',answer:'他之所以取得这么卓越的成就，是因为几十年来一直坚持不懈。',answerPy:'Tā zhīsuǒyǐ qǔdé zhème zhuóyuè de chéngjiù, shì yīnwèi jǐshí nián lái yìzhí jiānchí búxiè.',
      note:'之所以……是因为……: sở dĩ … là vì … (kết quả trước, nguyên nhân sau).',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Cho dù tài năng xuất chúng, nếu không cố gắng thì cũng khó mà thành công.',answer:'即使才能卓越，如果不努力，也很难成功。',answerPy:'Jíshǐ cáinéng zhuóyuè, rúguǒ bù nǔlì, yě hěn nán chénggōng.',
      note:'即使……也……: cho dù … cũng … (giả thiết nhượng bộ).',pair:'即使……也……'}
   ]},

  {n:4,zh:'预测',py:'yùcè',pos:'Động từ',vn:'dự đoán, dự báo',hv:'dự trắc',em:'🔮',lesson:1,
   explain:['Dựa vào số liệu, quy luật, phân tích khoa học mà đoán trước điều sẽ xảy ra.','Thiên về suy đoán CÓ CĂN CỨ (số liệu, mô hình); tân ngữ thường là 未来, 结果, 趋势, 天气, 发病时机. Phân biệt với 预料 (từ 27) — xem phần 词语辨析.'],
   usage:'准确预测 + N; 预测 + 未来 / 结果 / 趋势; 据……预测; 预测模型; 无法预测.',
   collo:['准确预测','预测未来','预测结果','预测模型'],
   ex_zh:'百度在2014年世界杯期间准确预测德国夺冠。',ex_py:'Bǎidù zài èr líng yī sì nián Shìjièbēi qījiān zhǔnquè yùcè Déguó duóguàn.',ex_vn:'Baidu đã dự đoán chính xác Đức vô địch trong thời gian diễn ra World Cup 2014.',
   exList:[
     {zh:'百度在世界杯期间准确预测德国夺冠，就是大数据的功劳。',py:'Bǎidù zài Shìjièbēi qījiān zhǔnquè yùcè Déguó duóguàn, jiù shì dà shùjù de gōngláo.',vn:'Baidu dự đoán chính xác Đức vô địch trong thời gian World Cup, đó chính là công lao của dữ liệu lớn.'},
     {zh:'拥有知识曾意味着掌握过去，现在它更意味着预测未来。',py:'Yōngyǒu zhīshi céng yìwèizhe zhǎngwò guòqù, xiànzài tā gèng yìwèizhe yùcè wèilái.',vn:'Sở hữu tri thức từng có nghĩa là nắm được quá khứ, còn bây giờ nó càng có nghĩa là dự đoán tương lai.'},
     {zh:'老师根据模拟考试的成绩预测，我们班今年的成绩会比去年好。',py:'Lǎoshī gēnjù mónǐ kǎoshì de chéngjì yùcè, wǒmen bān jīnnián de chéngjì huì bǐ qùnián hǎo.',vn:'Thầy dựa vào điểm thi thử dự đoán rằng năm nay thành tích của lớp chúng tôi sẽ tốt hơn năm ngoái.'}
   ],
   colloFull:[
     {zh:'准确预测',py:'zhǔnquè yùcè',vn:'dự đoán chính xác'},
     {zh:'预测未来',py:'yùcè wèilái',vn:'dự đoán tương lai'},
     {zh:'预测结果',py:'yùcè jiéguǒ',vn:'kết quả dự đoán; dự đoán kết quả'},
     {zh:'预测模型',py:'yùcè móxíng',vn:'mô hình dự báo'},
     {zh:'据专家预测',py:'jù zhuānjiā yùcè',vn:'theo dự đoán của chuyên gia'}
   ],
   patterns:[
     {s:'（准确）预测 + N / phân câu',m:'Dự đoán (chính xác) …'},
     {s:'据 + N + 预测，……',m:'Theo dự đoán của …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai có thể dự đoán chính xác tương lai, nhưng chúng ta có thể chuẩn bị thật tốt.',answer:'谁也不能准确地预测未来，但是我们可以做好准备。',answerPy:'Shéi yě bù néng zhǔnquè de yùcè wèilái, dànshì wǒmen kěyǐ zuòhǎo zhǔnbèi.',
      note:'谁也不……: không ai … (đại từ nghi vấn dùng với nghĩa phiếm chỉ).',pair:'谁也不……'},
     {promptLang:'vi',prompt:'Theo dự đoán của các chuyên gia, năm nay số người đi du lịch sẽ tăng lên rất nhiều.',answer:'据专家预测，今年出去旅游的人数将大大增加。',answerPy:'Jù zhuānjiā yùcè, jīnnián chūqù lǚyóu de rénshù jiāng dàdà zēngjiā.',
      note:'据……: theo …; 大大 + động từ hai âm tiết (điểm ngữ pháp 2 của bài).',pair:'据……'}
   ]},

  {n:5,zh:'功劳',py:'gōngláo',pos:'Danh từ',vn:'công lao, sự đóng góp',hv:'công lao',em:'🎖️',lesson:1,
   explain:['Đóng góp, cống hiến làm nên một kết quả tốt: 是……的功劳 = đó là công của ….','Thành ngữ khẩu ngữ: 没有功劳也有苦劳 (không có công thì cũng có sức). 抢功劳 = tranh công.'],
   usage:'（这）是 + N + 的功劳; 功劳很大 / 功劳不小; 抢 / 争 + 功劳; 没有功劳也有苦劳.',
   collo:['……的功劳','功劳很大','抢功劳','没有功劳也有苦劳'],
   ex_zh:'百度准确预测德国夺冠，就是大数据的功劳。',ex_py:'Bǎidù zhǔnquè yùcè Déguó duóguàn, jiù shì dà shùjù de gōngláo.',ex_vn:'Baidu dự đoán chính xác Đức vô địch, đó chính là công lao của dữ liệu lớn.',
   exList:[
     {zh:'大数据有什么用？举例来说，百度准确预测德国夺冠，就是大数据的功劳。',py:'Dà shùjù yǒu shénme yòng? Jǔlì lái shuō, Bǎidù zhǔnquè yùcè Déguó duóguàn, jiù shì dà shùjù de gōngláo.',vn:'Dữ liệu lớn có tác dụng gì? Lấy ví dụ, Baidu dự đoán chính xác Đức vô địch, đó chính là công lao của dữ liệu lớn.'},
     {zh:'这次比赛能赢，是全队的功劳，不是我一个人的。',py:'Zhè cì bǐsài néng yíng, shì quán duì de gōngláo, bú shì wǒ yí ge rén de.',vn:'Trận đấu lần này thắng được là công của cả đội, không phải của riêng mình tôi.'},
     {zh:'他在公司辛苦了这么多年，没有功劳也有苦劳。',py:'Tā zài gōngsī xīnkǔle zhème duō nián, méiyǒu gōngláo yě yǒu kǔláo.',vn:'Anh ấy vất vả ở công ty bao nhiêu năm, không có công thì cũng có sức.'}
   ],
   colloFull:[
     {zh:'……的功劳',py:'…… de gōngláo',vn:'công lao của …'},
     {zh:'功劳很大',py:'gōngláo hěn dà',vn:'công lao rất lớn'},
     {zh:'抢功劳',py:'qiǎng gōngláo',vn:'tranh công'},
     {zh:'没有功劳也有苦劳',py:'méiyǒu gōngláo yě yǒu kǔláo',vn:'không có công cũng có sức'},
     {zh:'全队的功劳',py:'quán duì de gōngláo',vn:'công lao của cả đội'}
   ],
   patterns:[
     {s:'……，（这）是 + N + 的功劳',m:'…, đó là công lao của …'},
     {s:'功劳 + 大 / 不小',m:'Công lao lớn / không nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành tích tiến bộ được không chỉ là công lao của thầy cô mà còn là kết quả nỗ lực của chính em.',answer:'成绩能提高，不仅是老师的功劳，而且是自己努力的结果。',answerPy:'Chéngjì néng tígāo, bùjǐn shì lǎoshī de gōngláo, érqiě shì zìjǐ nǔlì de jiéguǒ.',
      note:'不仅……而且……: không chỉ … mà còn ….',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Cậu ấy chưa bao giờ tranh công của người khác, vì thế mọi người đều rất tin cậu ấy.',answer:'他从来不抢别人的功劳，因此大家都很信任他。',answerPy:'Tā cónglái bù qiǎng biérén de gōngláo, yīncǐ dàjiā dōu hěn xìnrèn tā.',
      note:'从来不 + V: chưa bao giờ …; 因此: vì thế (văn viết hơn 所以).',pair:'从来不……'}
   ]},

  {n:6,zh:'派遣',py:'pàiqiǎn',pos:'Động từ',vn:'gửi đi, phái đi, cử đi',hv:'phái khiển',em:'✈️',lesson:1,
   explain:['Cơ quan, tổ chức cử người đi đâu đó làm nhiệm vụ — trang trọng, văn viết hơn 派.','Tân ngữ là người / nhóm người: 专家, 代表团, 医疗队, 留学生. Hay gặp 被派遣到……工作.'],
   usage:'派遣 + người + 去 / 到 + nơi + V; 派遣代表团 / 专家 / 医疗队; 被派遣到…….',
   collo:['派遣专家','派遣代表团','派遣医疗队','被派遣到国外'],
   ex_zh:'百度的做法是：派遣数据专家全面搜索5年来全世界987支球队3.7万场比赛的数据。',ex_py:'Bǎidù de zuòfǎ shì: pàiqiǎn shùjù zhuānjiā quánmiàn sōusuǒ wǔ nián lái quán shìjiè jiǔbǎi bāshíqī zhī qiúduì sān diǎn qī wàn chǎng bǐsài de shùjù.',ex_vn:'Cách làm của Baidu là: cử chuyên gia dữ liệu tìm kiếm toàn diện dữ liệu của 37.000 trận đấu của 987 đội bóng trên toàn thế giới trong 5 năm qua.',
   exList:[
     {zh:'百度派遣数据专家全面搜索了全世界几万场比赛的数据。',py:'Bǎidù pàiqiǎn shùjù zhuānjiā quánmiàn sōusuǒle quán shìjiè jǐ wàn chǎng bǐsài de shùjù.',vn:'Baidu cử chuyên gia dữ liệu tìm kiếm toàn diện dữ liệu của mấy vạn trận đấu trên toàn thế giới.'},
     {zh:'近期，我国政府将派遣代表团出访欧洲。',py:'Jìnqī, wǒ guó zhèngfǔ jiāng pàiqiǎn dàibiǎotuán chūfǎng Ōuzhōu.',vn:'Sắp tới, chính phủ nước ta sẽ cử đoàn đại biểu sang thăm châu Âu.'},
     {zh:'地震发生后，医院立即派遣医疗队赶往灾区。',py:'Dìzhèn fāshēng hòu, yīyuàn lìjí pàiqiǎn yīliáoduì gǎnwǎng zāiqū.',vn:'Sau khi động đất xảy ra, bệnh viện lập tức cử đội y tế tới vùng thiên tai.'}
   ],
   colloFull:[
     {zh:'派遣专家',py:'pàiqiǎn zhuānjiā',vn:'cử chuyên gia'},
     {zh:'派遣代表团',py:'pàiqiǎn dàibiǎotuán',vn:'cử đoàn đại biểu'},
     {zh:'派遣医疗队',py:'pàiqiǎn yīliáoduì',vn:'cử đội y tế'},
     {zh:'被派遣到国外',py:'bèi pàiqiǎn dào guówài',vn:'được cử ra nước ngoài'},
     {zh:'派遣留学生',py:'pàiqiǎn liúxuéshēng',vn:'cử lưu học sinh'}
   ],
   patterns:[
     {s:'派遣 + người + 去 / 到 + nơi + V',m:'Cử … đến … để …'},
     {s:'被（N）派遣到 + nơi + V',m:'Được (…) cử đến … làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giúp đỡ vùng bị thiên tai, bệnh viện đã cử hai mươi bác sĩ đến đó.',answer:'为了帮助灾区，医院派遣了二十名医生到那里。',answerPy:'Wèile bāngzhù zāiqū, yīyuàn pàiqiǎnle èrshí míng yīshēng dào nàli.',
      note:'为了……: để … (mục đích đặt đầu câu); 名 là lượng từ trang trọng cho người.',pair:'为了……'},
     {promptLang:'vi',prompt:'Anh ấy được công ty cử ra nước ngoài làm việc, vì vậy một năm chỉ về nhà một lần.',answer:'他被公司派遣到国外工作，所以一年只回一次家。',answerPy:'Tā bèi gōngsī pàiqiǎn dào guówài gōngzuò, suǒyǐ yì nián zhǐ huí yí cì jiā.',
      note:'Câu bị động 被 + tác nhân + V; 回一次家: số lần chen giữa động từ ly hợp.',pair:'被'}
   ]},

  {n:7,zh:'战略',py:'zhànlüè',pos:'Danh từ',vn:'chiến lược',hv:'chiến lược',em:'♟️',lesson:1,
   explain:['Kế hoạch, phương châm mang tính toàn cục, lâu dài (gốc là thuật ngữ quân sự).','Làm định ngữ không cần 的: 战略合作, 战略目标, 战略眼光. Khác 策略 (sách lược — cách làm cụ thể, linh hoạt).'],
   usage:'战略 + 合作 / 目标 / 眼光 / 意义; 发展战略; 制定战略; 战略合作伙伴关系.',
   collo:['战略合作','发展战略','战略眼光','战略目标'],
   ex_zh:'百度与彩票中心等相关机构建立战略合作伙伴关系。',ex_py:'Bǎidù yǔ cǎipiào zhōngxīn děng xiāngguān jīgòu jiànlì zhànlüè hézuò huǒbàn guānxi.',ex_vn:'Baidu thiết lập quan hệ đối tác hợp tác chiến lược với trung tâm xổ số và các cơ quan liên quan.',
   exList:[
     {zh:'百度与彩票中心等占有大量数据的相关机构建立战略合作伙伴关系。',py:'Bǎidù yǔ cǎipiào zhōngxīn děng zhànyǒu dàliàng shùjù de xiāngguān jīgòu jiànlì zhànlüè hézuò huǒbàn guānxi.',vn:'Baidu thiết lập quan hệ đối tác hợp tác chiến lược với trung tâm xổ số và các cơ quan liên quan nắm giữ lượng dữ liệu lớn.'},
     {zh:'学习也需要战略：先打好基础，再提高能力。',py:'Xuéxí yě xūyào zhànlüè: xiān dǎhǎo jīchǔ, zài tígāo nénglì.',vn:'Học tập cũng cần có chiến lược: trước hết xây nền tảng vững chắc, rồi mới nâng cao năng lực.'},
     {zh:'他是一位很有战略眼光的企业家。',py:'Tā shì yí wèi hěn yǒu zhànlüè yǎnguāng de qǐyèjiā.',vn:'Ông ấy là một doanh nhân rất có tầm nhìn chiến lược.'}
   ],
   colloFull:[
     {zh:'战略合作',py:'zhànlüè hézuò',vn:'hợp tác chiến lược'},
     {zh:'发展战略',py:'fāzhǎn zhànlüè',vn:'chiến lược phát triển'},
     {zh:'战略眼光',py:'zhànlüè yǎnguāng',vn:'tầm nhìn chiến lược'},
     {zh:'战略目标',py:'zhànlüè mùbiāo',vn:'mục tiêu chiến lược'},
     {zh:'制定战略',py:'zhìdìng zhànlüè',vn:'xây dựng chiến lược'}
   ],
   patterns:[
     {s:'与 + N + 建立战略合作伙伴关系',m:'Thiết lập quan hệ đối tác hợp tác chiến lược với …'},
     {s:'制定 + ……战略',m:'Xây dựng chiến lược …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai trường đại học đã ký thỏa thuận hợp tác chiến lược, từ đó sinh viên có thể sang trường kia học trao đổi.',answer:'两所大学签订了战略合作协议，从此学生可以互相交流学习。',answerPy:'Liǎng suǒ dàxué qiāndìngle zhànlüè hézuò xiéyì, cóngcǐ xuésheng kěyǐ hùxiāng jiāoliú xuéxí.',
      note:'从此: từ đó về sau (nối kết quả lâu dài của sự việc trước).',pair:'从此'},
     {promptLang:'vi',prompt:'Chỉ khi xây dựng chiến lược phát triển đúng đắn, doanh nghiệp mới có thể đứng vững trong cạnh tranh.',answer:'只有制定正确的发展战略，企业才能在竞争中站稳脚跟。',answerPy:'Zhǐyǒu zhìdìng zhèngquè de fāzhǎn zhànlüè, qǐyè cái néng zài jìngzhēng zhōng zhànwěn jiǎogēn.',
      note:'只有……才……: chỉ có … mới … (điều kiện duy nhất).',pair:'只有……才……'}
   ]},

  {n:8,zh:'模型',py:'móxíng',pos:'Danh từ',vn:'mô hình',hv:'mô hình',em:'🛩️',lesson:1,
   explain:['Vật mô phỏng hình dạng của vật thật theo tỉ lệ (飞机模型, 建筑模型).','Nghĩa khoa học: hệ thống công thức / dữ liệu mô phỏng một hiện tượng để phân tích, dự đoán: 预测模型, 数学模型. Chú ý 模 đọc mó (không đọc mú như 模样).'],
   usage:'建立 / 做 / 设计 + 模型; 预测模型; 数学模型; 飞机 / 汽车 / 建筑 + 模型; 融入模型中.',
   collo:['预测模型','建立模型','飞机模型','数学模型'],
   ex_zh:'将各类数据融入预测模型中。',ex_py:'Jiāng gè lèi shùjù róngrù yùcè móxíng zhōng.',ex_vn:'Đưa các loại dữ liệu vào mô hình dự báo.',
   exList:[
     {zh:'百度将各类数据融入预测模型中，准确预测了德国夺冠。',py:'Bǎidù jiāng gè lèi shùjù róngrù yùcè móxíng zhōng, zhǔnquè yùcèle Déguó duóguàn.',vn:'Baidu đưa các loại dữ liệu vào mô hình dự báo và đã dự đoán chính xác Đức vô địch.'},
     {zh:'弟弟花了一个星期，终于做好了一个飞机模型。',py:'Dìdi huāle yí ge xīngqī, zhōngyú zuòhǎole yí ge fēijī móxíng.',vn:'Em trai tôi mất cả một tuần, cuối cùng cũng làm xong một mô hình máy bay.'},
     {zh:'科学家们建立了新的数学模型来预测天气变化。',py:'Kēxuéjiāmen jiànlìle xīn de shùxué móxíng lái yùcè tiānqì biànhuà.',vn:'Các nhà khoa học đã xây dựng mô hình toán học mới để dự báo thay đổi thời tiết.'}
   ],
   colloFull:[
     {zh:'预测模型',py:'yùcè móxíng',vn:'mô hình dự báo'},
     {zh:'建立模型',py:'jiànlì móxíng',vn:'xây dựng mô hình'},
     {zh:'飞机模型',py:'fēijī móxíng',vn:'mô hình máy bay'},
     {zh:'数学模型',py:'shùxué móxíng',vn:'mô hình toán học'},
     {zh:'建筑模型',py:'jiànzhù móxíng',vn:'mô hình kiến trúc'}
   ],
   patterns:[
     {s:'将 / 把 + 数据 + 融入 / 输入 + 模型（中）',m:'Đưa dữ liệu vào mô hình'},
     {s:'建立 + ……模型 + 来 + V',m:'Xây dựng mô hình … để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần đưa dữ liệu vào mô hình, máy tính sẽ tự động tính ra kết quả.',answer:'只要把数据输入模型，电脑就会自动算出结果。',answerPy:'Zhǐyào bǎ shùjù shūrù móxíng, diànnǎo jiù huì zìdòng suànchū jiéguǒ.',
      note:'只要……就……: chỉ cần … là …; 把 + tân ngữ + V + nơi chốn.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Anh tôi mê nhất là lắp mô hình, trong phòng bày đầy đủ loại mô hình ô tô.',answer:'我哥哥最着迷的是拼模型，房间里摆满了各种汽车模型。',answerPy:'Wǒ gēge zuì zháomí de shì pīn móxíng, fángjiān li bǎimǎnle gè zhǒng qìchē móxíng.',
      note:'V + 满: bổ ngữ kết quả "đầy"; câu tồn hiện 房间里摆满了…….',pair:'V + 满'}
   ]},

  {n:9,zh:'共计',py:'gòngjì',pos:'Động từ',vn:'tổng cộng, tính gộp',hv:'cộng kế',em:'🧮',lesson:1,
   explain:['Cộng tất cả lại được bao nhiêu — nghĩa như 一共 / 总共 nhưng trang trọng, dùng trong văn viết, báo cáo, thống kê.','Sau 共计 thường là con số (+ lượng từ) hoặc động từ + con số: 共计涉及……, 共计花费…….'],
   usage:'共计 + số lượng; 共计 + 涉及 / 花费 / 有 + số lượng; 几项……共计…….',
   collo:['共计……元','共计……人','共计涉及','共计花费'],
   ex_zh:'这一海量数据库共计涉及19972名球员和1.12亿条相关数据。',ex_py:'Zhè yì hǎiliàng shùjùkù gòngjì shèjí yíwàn jiǔqiān jiǔbǎi qīshí\'èr míng qiúyuán hé yī diǎn yī\'èr yì tiáo xiāngguān shùjù.',ex_vn:'Kho dữ liệu khổng lồ này tổng cộng liên quan đến 19.972 cầu thủ và 112 triệu mẩu dữ liệu liên quan.',
   exList:[
     {zh:'几项支出共计是三千万元。',py:'Jǐ xiàng zhīchū gòngjì shì sānqiān wàn yuán.',vn:'Mấy khoản chi tổng cộng là ba mươi triệu tệ.'},
     {zh:'这次活动共计有三百多名学生参加。',py:'Zhè cì huódòng gòngjì yǒu sānbǎi duō míng xuésheng cānjiā.',vn:'Hoạt động lần này tổng cộng có hơn ba trăm học sinh tham gia.'},
     {zh:'这一海量数据库共计涉及近两万名球员。',py:'Zhè yì hǎiliàng shùjùkù gòngjì shèjí jìn liǎng wàn míng qiúyuán.',vn:'Kho dữ liệu khổng lồ này tổng cộng liên quan đến gần hai vạn cầu thủ.'}
   ],
   colloFull:[
     {zh:'共计……元',py:'gòngjì …… yuán',vn:'tổng cộng … tệ'},
     {zh:'共计……人',py:'gòngjì …… rén',vn:'tổng cộng … người'},
     {zh:'共计涉及',py:'gòngjì shèjí',vn:'tổng cộng liên quan đến'},
     {zh:'共计花费',py:'gòngjì huāfèi',vn:'tổng cộng tiêu tốn'},
     {zh:'共计支出',py:'gòngjì zhīchū',vn:'tổng chi'}
   ],
   patterns:[
     {s:'……共计 + số + lượng từ + N',m:'… tổng cộng …'},
     {s:'……共计 + V (涉及 / 花费) + số lượng',m:'… tổng cộng liên quan / tiêu tốn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyến du lịch lần này tổng cộng hết năm nghìn tệ, trung bình mỗi người khoảng một nghìn.',answer:'这次旅游共计花了五千元，平均每人一千元左右。',answerPy:'Zhè cì lǚyóu gòngjì huāle wǔqiān yuán, píngjūn měi rén yìqiān yuán zuǒyòu.',
      note:'……左右: khoảng … (đứng SAU con số).',pair:'……左右'},
     {promptLang:'vi',prompt:'Cuộc thi này tổng cộng có hơn hai trăm học sinh tham gia, trong đó ba mươi người vào chung kết.',answer:'这次比赛共计有两百多名学生参加，其中三十人进入了决赛。',answerPy:'Zhè cì bǐsài gòngjì yǒu liǎngbǎi duō míng xuésheng cānjiā, qízhōng sānshí rén jìnrùle juésài.',
      note:'其中: trong số đó (đứng đầu vế sau); 两百多 = hơn hai trăm.',pair:'其中'}
   ]},

  {n:10,zh:'验证',py:'yànzhèng',pos:'Động từ',vn:'nghiệm chứng, kiểm chứng',hv:'nghiệm chứng',em:'✅',lesson:1,
   explain:['Dùng thí nghiệm, số liệu, thực tế để kiểm tra xem một giả thuyết, kết quả có đúng không.','Có thể làm danh từ: 进行验证, 结果验证. Từ đời sống: 验证码 (mã xác nhận).'],
   usage:'验证 + 结果 / 理论 / 假说 / 判断; 对……进行验证; 得到验证; 通过……来验证; 验证码.',
   collo:['进行验证','验证结果','得到验证','验证码'],
   ex_zh:'百度对2006年和2010年世界杯的淘汰赛进行了结果验证。',ex_py:'Bǎidù duì èr líng líng liù nián hé èr líng yī líng nián Shìjièbēi de táotàisài jìnxíngle jiéguǒ yànzhèng.',ex_vn:'Baidu đã tiến hành kiểm chứng kết quả đối với vòng loại trực tiếp của World Cup 2006 và 2010.',
   exList:[
     {zh:'之后，百度对前两届世界杯的淘汰赛进行了结果验证，准确率接近75%。',py:'Zhīhòu, Bǎidù duì qián liǎng jiè Shìjièbēi de táotàisài jìnxíngle jiéguǒ yànzhèng, zhǔnquèlǜ jiējìn bǎi fēn zhī qīshíwǔ.',vn:'Sau đó, Baidu kiểm chứng kết quả với vòng loại trực tiếp của hai kỳ World Cup trước, tỉ lệ chính xác gần 75%.'},
     {zh:'这个假说还需要通过实验来验证。',py:'Zhège jiǎshuō hái xūyào tōngguò shíyàn lái yànzhèng.',vn:'Giả thuyết này vẫn cần thông qua thí nghiệm để kiểm chứng.'},
     {zh:'登录时，请输入手机收到的验证码。',py:'Dēnglù shí, qǐng shūrù shǒujī shōudào de yànzhèngmǎ.',vn:'Khi đăng nhập, vui lòng nhập mã xác nhận nhận được trên điện thoại.'}
   ],
   colloFull:[
     {zh:'进行验证',py:'jìnxíng yànzhèng',vn:'tiến hành kiểm chứng'},
     {zh:'验证结果',py:'yànzhèng jiéguǒ',vn:'kiểm chứng kết quả'},
     {zh:'得到验证',py:'dédào yànzhèng',vn:'được kiểm chứng'},
     {zh:'验证码',py:'yànzhèngmǎ',vn:'mã xác nhận'},
     {zh:'通过实验来验证',py:'tōngguò shíyàn lái yànzhèng',vn:'kiểm chứng bằng thí nghiệm'}
   ],
   patterns:[
     {s:'对 + N + 进行（结果）验证',m:'Tiến hành kiểm chứng (kết quả) đối với …'},
     {s:'通过 + N + 来验证 + ……',m:'Thông qua … để kiểm chứng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy giả thuyết này nghe rất có lý, nhưng vẫn cần thông qua thí nghiệm để kiểm chứng.',answer:'尽管这个假说听起来很有道理，但还需要通过实验来验证。',answerPy:'Jǐnguǎn zhège jiǎshuō tīng qǐlái hěn yǒu dàolǐ, dàn hái xūyào tōngguò shíyàn lái yànzhèng.',
      note:'尽管……但……: tuy … nhưng …; 假说 ôn bài 19; V + 起来 = nghe / xem ra.',pair:'尽管……但……'},
     {promptLang:'vi',prompt:'Thời gian sẽ kiểm chứng lựa chọn của cậu là đúng hay sai.',answer:'时间会验证你的选择是对还是错。',answerPy:'Shíjiān huì yànzhèng nǐ de xuǎnzé shì duì háishi cuò.',
      note:'是 A 还是 B: A hay B (câu hỏi lựa chọn làm tân ngữ).',pair:'是……还是……'}
   ]},

  {n:11,zh:'万分',py:'wànfēn',pos:'Phó từ',vn:'hết sức, vô cùng',hv:'vạn phân',em:'💯',lesson:1,
   explain:['Mức độ rất cao, "vô cùng" — mạnh hơn 十分; văn viết, trang trọng.','CHỈ bổ nghĩa cho tính từ / động từ chỉ TRẠNG THÁI TÂM LÝ (感激, 振奋, 焦急, 紧张, 抱歉, 悲痛, 惊讶); không nói 万分优美, 万分寒冷 (xem phần 词语辨析 万分—十分).'],
   usage:'万分 + 感激 / 振奋 / 焦急 / 紧张 / 抱歉 / 悲痛 / 惊讶; 令人万分…….',
   collo:['万分感激','万分振奋','万分焦急','万分抱歉'],
   ex_zh:'这一结果令大数据研究者万分振奋。',ex_py:'Zhè yì jiéguǒ lìng dà shùjù yánjiūzhě wànfēn zhènfèn.',ex_vn:'Kết quả này khiến các nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi.',
   exList:[
     {zh:'准确率接近75%，这一结果令大数据研究者万分振奋。',py:'Zhǔnquèlǜ jiējìn bǎi fēn zhī qīshíwǔ, zhè yì jiéguǒ lìng dà shùjù yánjiūzhě wànfēn zhènfèn.',vn:'Tỉ lệ chính xác gần 75%, kết quả này khiến các nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi.'},
     {zh:'对你的帮助，我万分感激。',py:'Duì nǐ de bāngzhù, wǒ wànfēn gǎnjī.',vn:'Đối với sự giúp đỡ của bạn, tôi vô cùng biết ơn.'},
     {zh:'孩子一夜没回家，父母万分焦急。',py:'Háizi yí yè méi huí jiā, fùmǔ wànfēn jiāojí.',vn:'Con cả đêm không về nhà, bố mẹ vô cùng sốt ruột.'}
   ],
   colloFull:[
     {zh:'万分感激',py:'wànfēn gǎnjī',vn:'vô cùng biết ơn'},
     {zh:'万分振奋',py:'wànfēn zhènfèn',vn:'vô cùng phấn khởi'},
     {zh:'万分焦急',py:'wànfēn jiāojí',vn:'vô cùng sốt ruột'},
     {zh:'万分抱歉',py:'wànfēn bàoqiàn',vn:'vô cùng xin lỗi'},
     {zh:'万分紧张',py:'wànfēn jǐnzhāng',vn:'hết sức căng thẳng'}
   ],
   patterns:[
     {s:'令 / 让 + người + 万分 + tính từ tâm lý',m:'Khiến … vô cùng …'},
     {s:'（对……）+ 万分感激 / 抱歉',m:'Vô cùng biết ơn / xin lỗi (về …)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhận được giấy báo trúng tuyển, cả nhà vô cùng phấn khởi, ngay cả ông nội cũng cười không khép được miệng.',answer:'收到录取通知书，全家人万分振奋，连爷爷都笑得合不拢嘴。',answerPy:'Shōudào lùqǔ tōngzhīshū, quán jiā rén wànfēn zhènfèn, lián yéye dōu xiào de hé bu lǒng zuǐ.',
      note:'连……都……: ngay cả … cũng …; 笑得合不拢嘴 = cười không khép được miệng.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Vô cùng xin lỗi, do tắc đường nên tôi đến muộn nửa tiếng.',answer:'万分抱歉，由于堵车，我迟到了半个小时。',answerPy:'Wànfēn bàoqiàn, yóuyú dǔchē, wǒ chídàole bàn ge xiǎoshí.',
      note:'由于……: do, bởi vì (văn viết); 万分抱歉 lịch sự, trang trọng.',pair:'由于……'}
   ]},

  {n:12,zh:'振奋',py:'zhènfèn',pos:'Tính từ',vn:'phấn chấn, phấn khởi',hv:'chấn phấn',em:'🎉',lesson:1,
   explain:['(Tính từ) tinh thần hăng hái, phấn khởi: 令人振奋 = khiến người ta phấn chấn.','(Động từ) làm cho phấn chấn: 振奋精神, 振奋人心. Trang trọng hơn 兴奋; 兴奋 thiên về cảm xúc kích động nhất thời.'],
   usage:'令人振奋的 + 消息 / 结果; 振奋人心; 振奋精神; 万分振奋; 精神振奋.',
   collo:['令人振奋','振奋人心','振奋精神','万分振奋'],
   ex_zh:'这一结果令大数据研究者万分振奋。',ex_py:'Zhè yì jiéguǒ lìng dà shùjù yánjiūzhě wànfēn zhènfèn.',ex_vn:'Kết quả này khiến các nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi.',
   exList:[
     {zh:'今天我在报纸上看到一则令人振奋的消息。',py:'Jīntiān wǒ zài bàozhǐ shang kàndào yì zé lìng rén zhènfèn de xiāoxi.',vn:'Hôm nay tôi đọc được trên báo một tin khiến người ta phấn khởi.'},
     {zh:'中国队夺冠的消息振奋人心。',py:'Zhōngguó duì duóguàn de xiāoxi zhènfèn rénxīn.',vn:'Tin đội Trung Quốc giành chức vô địch khiến lòng người phấn chấn.'},
     {zh:'老师的一番话振奋了大家的精神。',py:'Lǎoshī de yì fān huà zhènfènle dàjiā de jīngshén.',vn:'Một phen lời nói của thầy đã làm tinh thần mọi người phấn chấn hẳn lên.'}
   ],
   colloFull:[
     {zh:'令人振奋',py:'lìng rén zhènfèn',vn:'khiến người ta phấn chấn'},
     {zh:'振奋人心',py:'zhènfèn rénxīn',vn:'làm phấn chấn lòng người'},
     {zh:'振奋精神',py:'zhènfèn jīngshén',vn:'lên tinh thần'},
     {zh:'万分振奋',py:'wànfēn zhènfèn',vn:'vô cùng phấn khởi'},
     {zh:'精神振奋',py:'jīngshén zhènfèn',vn:'tinh thần phấn chấn'}
   ],
   patterns:[
     {s:'令人振奋的 + 消息 / 结果 / 成绩',m:'Tin tức / kết quả / thành tích khiến người ta phấn khởi'},
     {s:'振奋 + 精神 / 人心',m:'Làm phấn chấn tinh thần / lòng người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tin này khiến người ta phấn chấn, ai cũng tin rằng ước mơ nhất định sẽ thành hiện thực.',answer:'这个消息令人振奋，大家都相信梦想一定会实现。',answerPy:'Zhège xiāoxi lìng rén zhènfèn, dàjiā dōu xiāngxìn mèngxiǎng yídìng huì shíxiàn.',
      note:'令人 + tính từ: khiến người ta … (văn viết của 让人).',pair:'令人……'},
     {promptLang:'vi',prompt:'Cho dù gặp khó khăn, chúng ta cũng phải lên tinh thần, tiếp tục cố gắng.',answer:'即使遇到困难，我们也要振奋精神，继续努力。',answerPy:'Jíshǐ yùdào kùnnan, wǒmen yě yào zhènfèn jīngshén, jìxù nǔlì.',
      note:'即使……也……: cho dù … cũng …; 振奋 dùng như động từ.',pair:'即使……也……'}
   ]},

  {n:13,zh:'公认',py:'gōngrèn',pos:'Động từ',vn:'công nhận (mọi người đều thừa nhận)',hv:'công nhận',em:'🤝',lesson:1,
   explain:['MỌI NGƯỜI đều thừa nhận, đều cho là như vậy — nhấn "được số đông thừa nhận".','Hay dùng: 大家公认, 世界公认, 被公认为, 公认的事实 / 专家. Khác tiếng Việt "công nhận" (công nhận bằng cấp = 承认 / 认可).'],
   usage:'（大家 / 人们 / 世界）公认 + phân câu; 被公认为 + N; ……是大家公认的; 公认的 + 事实 / 专家.',
   collo:['大家公认','被公认为','公认的事实','世界公认'],
   ex_zh:'人们公认“医疗”和“健康”分属两个完全不同的领域。',ex_py:'Rénmen gōngrèn "yīliáo" hé "jiànkāng" fēnshǔ liǎng ge wánquán bù tóng de lǐngyù.',ex_vn:'Mọi người đều thừa nhận "y tế" và "sức khoẻ" thuộc hai lĩnh vực hoàn toàn khác nhau.',
   exList:[
     {zh:'人们公认“医疗”和“健康”分属两个完全不同的领域，有了大数据，它们却相通相融了。',py:'Rénmen gōngrèn "yīliáo" hé "jiànkāng" fēnshǔ liǎng ge wánquán bù tóng de lǐngyù, yǒule dà shùjù, tāmen què xiāngtōng xiāngróng le.',vn:'Mọi người đều thừa nhận "y tế" và "sức khoẻ" thuộc hai lĩnh vực hoàn toàn khác nhau, nhưng có dữ liệu lớn thì chúng lại thông nhau, hoà vào nhau.'},
     {zh:'在我们这家跨国公司里，他的敬业是大家公认的。',py:'Zài wǒmen zhè jiā kuàguó gōngsī li, tā de jìngyè shì dàjiā gōngrèn de.',vn:'Ở công ty đa quốc gia của chúng tôi, sự tận tâm với công việc của anh ấy ai cũng công nhận.'},
     {zh:'他被公认为我们班最有耐心的人。',py:'Tā bèi gōngrèn wéi wǒmen bān zuì yǒu nàixīn de rén.',vn:'Cậu ấy được mọi người công nhận là người kiên nhẫn nhất lớp tôi.'}
   ],
   colloFull:[
     {zh:'大家公认',py:'dàjiā gōngrèn',vn:'mọi người đều công nhận'},
     {zh:'被公认为',py:'bèi gōngrèn wéi',vn:'được công nhận là'},
     {zh:'公认的事实',py:'gōngrèn de shìshí',vn:'sự thật được mọi người thừa nhận'},
     {zh:'世界公认',py:'shìjiè gōngrèn',vn:'thế giới công nhận'},
     {zh:'公认的专家',py:'gōngrèn de zhuānjiā',vn:'chuyên gia được thừa nhận rộng rãi'}
   ],
   patterns:[
     {s:'……是大家公认的',m:'… là điều ai cũng công nhận'},
     {s:'N + 被公认为 + N',m:'… được công nhận là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người đều công nhận cô ấy là học sinh chăm chỉ nhất lớp, vậy mà cô ấy lại rất khiêm tốn.',answer:'大家公认她是班里最勤奋的学生，可她却非常谦虚。',answerPy:'Dàjiā gōngrèn tā shì bān li zuì qínfèn de xuésheng, kě tā què fēicháng qiānxū.',
      note:'可……却……: vậy mà … lại … (chuyển ý, nhấn sự trái ngược).',pair:'可……却……'},
     {promptLang:'vi',prompt:'Tiếng Trung được công nhận là một trong những ngôn ngữ khó học nhất thế giới.',answer:'汉语被公认为世界上最难学的语言之一。',answerPy:'Hànyǔ bèi gōngrèn wéi shìjiè shang zuì nán xué de yǔyán zhī yī.',
      note:'……之一: một trong những …; 被公认为 = được công nhận là.',pair:'……之一'}
   ]},

  {n:14,zh:'扭转',py:'niǔzhuǎn',pos:'Động từ',vn:'xoay chuyển, thay đổi, lật ngược',hv:'nữu chuyển',em:'🔄',lesson:1,
   explain:['Làm thay đổi hẳn hướng phát triển của một tình hình (thường từ xấu sang tốt).','Tân ngữ trừu tượng: 局面, 局势, 形势, 观念, 方式, 现状. Nghĩa đen: vặn, xoay (扭转身子). Hay đi với 彻底, 终于, 难以.'],
   usage:'扭转 + 局面 / 局势 / 观念 / 方式; 彻底扭转; 扭转……的局面; 难以扭转.',
   collo:['扭转局面','彻底扭转','扭转观念','扭转局势'],
   ex_zh:'有了大数据，还有可能彻底扭转先前陈旧而被动的有病治病方式。',ex_py:'Yǒule dà shùjù, hái yǒu kěnéng chèdǐ niǔzhuǎn xiānqián chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì.',ex_vn:'Có dữ liệu lớn, còn có khả năng thay đổi triệt để cách "có bệnh mới chữa" lỗi thời và bị động trước kia.',
   exList:[
     {zh:'该公司与相关机构建立了战略合作伙伴关系，扭转了过去单打独斗的局面。',py:'Gāi gōngsī yǔ xiāngguān jīgòu jiànlìle zhànlüè hézuò huǒbàn guānxi, niǔzhuǎnle guòqù dāndǎ-dúdòu de júmiàn.',vn:'Công ty đó thiết lập quan hệ đối tác chiến lược với các cơ quan liên quan, xoay chuyển cục diện đơn thương độc mã trước đây.'},
     {zh:'下半场我们连进两球，终于扭转了比赛的局面。',py:'Xià bànchǎng wǒmen lián jìn liǎng qiú, zhōngyú niǔzhuǎnle bǐsài de júmiàn.',vn:'Hiệp hai chúng tôi ghi liền hai bàn, cuối cùng đã lật ngược thế trận.'},
     {zh:'要改变孩子的学习习惯，首先要扭转家长的观念。',py:'Yào gǎibiàn háizi de xuéxí xíguàn, shǒuxiān yào niǔzhuǎn jiāzhǎng de guānniàn.',vn:'Muốn thay đổi thói quen học tập của con, trước hết phải xoay chuyển quan niệm của phụ huynh.'}
   ],
   colloFull:[
     {zh:'扭转局面',py:'niǔzhuǎn júmiàn',vn:'xoay chuyển cục diện'},
     {zh:'彻底扭转',py:'chèdǐ niǔzhuǎn',vn:'thay đổi triệt để'},
     {zh:'扭转观念',py:'niǔzhuǎn guānniàn',vn:'xoay chuyển quan niệm'},
     {zh:'扭转局势',py:'niǔzhuǎn júshì',vn:'xoay chuyển tình thế'},
     {zh:'难以扭转',py:'nányǐ niǔzhuǎn',vn:'khó mà xoay chuyển'}
   ],
   patterns:[
     {s:'（彻底 / 终于）扭转 + ……的局面',m:'(Triệt để / cuối cùng) xoay chuyển cục diện …'},
     {s:'扭转 + 观念 / 方式',m:'Thay đổi quan niệm / cách thức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người cùng cố gắng, cục diện khó khăn hiện nay nhất định có thể xoay chuyển.',answer:'只要大家一起努力，目前的困难局面就一定能扭转。',answerPy:'Zhǐyào dàjiā yìqǐ nǔlì, mùqián de kùnnan júmiàn jiù yídìng néng niǔzhuǎn.',
      note:'只要……就……: chỉ cần … thì …; tân ngữ 局面 đưa lên làm chủ đề.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nhờ sự nỗ lực của cả đội, thế trận cuối cùng đã được lật ngược.',answer:'在全队的努力下，比赛的局面终于被扭转了。',answerPy:'Zài quán duì de nǔlì xià, bǐsài de júmiàn zhōngyú bèi niǔzhuǎn le.',
      note:'在……下: nhờ / dưới (điều kiện) …; câu bị động 被 không cần nêu tác nhân.',pair:'在……下'}
   ]},

  {n:15,zh:'先前',py:'xiānqián',pos:'Danh từ',vn:'trước kia, trước',hv:'tiên tiền',em:'⏪',lesson:1,
   explain:['Danh từ chỉ thời gian: khoảng thời gian trước đây, trước thời điểm đang nói — gần nghĩa 以前, 从前 nhưng văn viết hơn.','Làm trạng ngữ đứng đầu câu (先前我……) hoặc định ngữ (先前的方式); hay đối ứng với 后来 / 现在.'],
   usage:'先前 + chủ ngữ + V, 后来……; 先前的 + N; 比先前 + Adj + 多了.',
   collo:['先前的','比先前','先前……后来……','先前的想法'],
   ex_zh:'还有可能彻底扭转先前陈旧而被动的有病治病方式。',ex_py:'Hái yǒu kěnéng chèdǐ niǔzhuǎn xiānqián chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì.',ex_vn:'Còn có thể thay đổi triệt để cách "có bệnh mới chữa" lỗi thời và bị động trước kia.',
   exList:[
     {zh:'先前我和他在一个单位共事，后来他跳槽走了。',py:'Xiānqián wǒ hé tā zài yí ge dānwèi gòngshì, hòulái tā tiàocáo zǒu le.',vn:'Trước kia tôi và anh ấy làm cùng một đơn vị, về sau anh ấy nhảy việc đi rồi.'},
     {zh:'他比先前瘦多了，精神却好多了。',py:'Tā bǐ xiānqián shòu duō le, jīngshén què hǎo duō le.',vn:'Anh ấy gầy hơn trước nhiều, nhưng tinh thần thì tốt hơn nhiều.'},
     {zh:'先前的计划有不少问题，所以我们重新做了一个。',py:'Xiānqián de jìhuà yǒu bù shǎo wèntí, suǒyǐ wǒmen chóngxīn zuòle yí ge.',vn:'Kế hoạch trước đó có không ít vấn đề, nên chúng tôi làm lại một kế hoạch mới.'}
   ],
   colloFull:[
     {zh:'先前的',py:'xiānqián de',vn:'… trước kia'},
     {zh:'比先前',py:'bǐ xiānqián',vn:'so với trước kia'},
     {zh:'先前……后来……',py:'xiānqián …… hòulái ……',vn:'trước kia … về sau …'},
     {zh:'先前的想法',py:'xiānqián de xiǎngfǎ',vn:'suy nghĩ trước đây'},
     {zh:'先前的方式',py:'xiānqián de fāngshì',vn:'cách thức trước kia'}
   ],
   patterns:[
     {s:'先前 + ……，后来 + ……',m:'Trước kia …, về sau …'},
     {s:'A + 比先前 + Adj + 多了',m:'A … hơn trước nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ cậu ấy nói tiếng Trung lưu loát hơn trước kia nhiều.',answer:'他现在说汉语比先前流利多了。',answerPy:'Tā xiànzài shuō Hànyǔ bǐ xiānqián liúlì duō le.',
      note:'A 比 B + Adj + 多了: A … hơn B nhiều (không dùng 很 trong câu 比).',pair:'比……多了'},
     {promptLang:'vi',prompt:'Trước kia tôi cứ tưởng tiếng Trung rất khó học, về sau mới phát hiện ra nó rất thú vị.',answer:'先前我以为汉语很难学，后来才发现它很有意思。',answerPy:'Xiānqián wǒ yǐwéi Hànyǔ hěn nán xué, hòulái cái fāxiàn tā hěn yǒu yìsi.',
      note:'以为: tưởng rằng (điều nghĩ sai với thực tế); 后来才……: về sau mới ….',pair:'以为'}
   ]},

  {n:16,zh:'陈旧',py:'chénjiù',pos:'Tính từ',vn:'lỗi thời, cũ kỹ',hv:'trần cựu',em:'🕰️',lesson:1,
   explain:['Cũ, lâu đời, không còn hợp thời: dùng cho đồ vật (设备, 家具) và cả cái trừu tượng (观念, 思想, 方式, 内容).','Mang sắc thái chê; trái nghĩa: 先进 (từ 37), 新颖. Khác 古老 (cổ xưa — trung tính, có khi khen).'],
   usage:'陈旧的 + 设备 / 观念 / 方式 / 内容; ……（太 / 有些）陈旧; 陈旧而被动.',
   collo:['陈旧的观念','设备陈旧','内容陈旧','陈旧的方式'],
   ex_zh:'……彻底扭转先前陈旧而被动的有病治病方式。',ex_py:'…… chèdǐ niǔzhuǎn xiānqián chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì.',ex_vn:'… thay đổi triệt để cách "có bệnh mới chữa" lỗi thời và bị động trước kia.',
   exList:[
     {zh:'有了大数据，陈旧而被动的有病治病方式有可能被彻底扭转。',py:'Yǒule dà shùjù, chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì yǒu kěnéng bèi chèdǐ niǔzhuǎn.',vn:'Có dữ liệu lớn, cách "có bệnh mới chữa" lỗi thời và bị động có thể bị thay đổi triệt để.'},
     {zh:'这家工厂的设备太陈旧了，早该换新的了。',py:'Zhè jiā gōngchǎng de shèbèi tài chénjiù le, zǎo gāi huàn xīn de le.',vn:'Thiết bị của nhà máy này quá cũ kỹ rồi, lẽ ra phải thay mới từ lâu.'},
     {zh:'这本教材的内容有些陈旧，已经跟不上时代了。',py:'Zhè běn jiàocái de nèiróng yǒuxiē chénjiù, yǐjīng gēn bu shàng shídài le.',vn:'Nội dung cuốn giáo trình này hơi lỗi thời, đã không theo kịp thời đại nữa.'}
   ],
   colloFull:[
     {zh:'陈旧的观念',py:'chénjiù de guānniàn',vn:'quan niệm lỗi thời'},
     {zh:'设备陈旧',py:'shèbèi chénjiù',vn:'thiết bị cũ kỹ'},
     {zh:'内容陈旧',py:'nèiróng chénjiù',vn:'nội dung lỗi thời'},
     {zh:'陈旧的方式',py:'chénjiù de fāngshì',vn:'cách thức lỗi thời'},
     {zh:'陈旧的家具',py:'chénjiù de jiājù',vn:'đồ đạc cũ kỹ'}
   ],
   patterns:[
     {s:'陈旧的 + 观念 / 设备 / 方式',m:'Quan niệm / thiết bị / cách thức lỗi thời'},
     {s:'N + 太 / 有些 + 陈旧了',m:'… quá / hơi lỗi thời'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì cứ dùng thiết bị cũ kỹ, chi bằng mua một bộ mới.',answer:'与其一直用陈旧的设备，不如买一套新的。',answerPy:'Yǔqí yìzhí yòng chénjiù de shèbèi, bùrú mǎi yí tào xīn de.',
      note:'与其 A，不如 B: thay vì A, chi bằng B (người nói chọn B).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Quan niệm lỗi thời này không những không giúp được con, ngược lại còn hại con.',answer:'这种陈旧的观念不但帮不了孩子，反而会害了孩子。',answerPy:'Zhè zhǒng chénjiù de guānniàn búdàn bāng bu liǎo háizi, fǎn\'ér huì hàile háizi.',
      note:'不但不……反而……: không những không … ngược lại còn … (kết quả trái mong đợi).',pair:'不但……反而……'}
   ]},

  {n:17,zh:'被动',py:'bèidòng',pos:'Tính từ',vn:'bị động, thụ động',hv:'bị động',em:'🪫',lesson:1,
   explain:['Không chủ động, phải chờ tác động từ bên ngoài mới hành động; hoặc rơi vào thế bất lợi, không làm chủ được tình hình.','Trái nghĩa: 主动. Cụm hay dùng: 变被动为主动, 陷入被动, 被动地接受. Trong ngữ pháp: 被动句 = câu bị động.'],
   usage:'（很 / 太）被动; 被动地 + V; 陷入被动; 变被动为主动; 陈旧而被动.',
   collo:['变被动为主动','陷入被动','被动地接受','被动的方式'],
   ex_zh:'……彻底扭转先前陈旧而被动的有病治病方式。',ex_py:'…… chèdǐ niǔzhuǎn xiānqián chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì.',ex_vn:'… thay đổi triệt để cách "có bệnh mới chữa" lỗi thời và bị động trước kia.',
   exList:[
     {zh:'这就可以变被动为主动，把疾病消灭在萌芽状态。',py:'Zhè jiù kěyǐ biàn bèidòng wéi zhǔdòng, bǎ jíbìng xiāomiè zài méngyá zhuàngtài.',vn:'Như vậy có thể biến bị động thành chủ động, tiêu diệt bệnh tật ngay từ trong trứng nước.'},
     {zh:'学习不能太被动，遇到问题要主动去问老师。',py:'Xuéxí bù néng tài bèidòng, yùdào wèntí yào zhǔdòng qù wèn lǎoshī.',vn:'Học tập không thể quá thụ động, gặp vấn đề phải chủ động đi hỏi thầy cô.'},
     {zh:'我们事先没做准备，结果在谈判中非常被动。',py:'Wǒmen shìxiān méi zuò zhǔnbèi, jiéguǒ zài tánpàn zhōng fēicháng bèidòng.',vn:'Chúng tôi không chuẩn bị trước, kết quả là rất bị động trong cuộc đàm phán.'}
   ],
   colloFull:[
     {zh:'变被动为主动',py:'biàn bèidòng wéi zhǔdòng',vn:'biến bị động thành chủ động'},
     {zh:'陷入被动',py:'xiànrù bèidòng',vn:'rơi vào thế bị động'},
     {zh:'被动地接受',py:'bèidòng de jiēshòu',vn:'tiếp nhận một cách thụ động'},
     {zh:'被动的方式',py:'bèidòng de fāngshì',vn:'cách thức bị động'},
     {zh:'非常被动',py:'fēicháng bèidòng',vn:'rất bị động'}
   ],
   patterns:[
     {s:'变被动为主动',m:'Biến bị động thành chủ động'},
     {s:'被动地 + V (接受 / 等待)',m:'… một cách thụ động'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cậu không chuẩn bị trước, đến lúc đó sẽ rất bị động.',answer:'如果你不提前做好准备，到时候就会很被动。',answerPy:'Rúguǒ nǐ bù tíqián zuòhǎo zhǔnbèi, dào shíhou jiù huì hěn bèidòng.',
      note:'如果……就……: nếu … thì …; 到时候 = đến lúc đó.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Chúng ta phải biến bị động thành chủ động, không thể lúc nào cũng chờ người khác sắp xếp.',answer:'我们要变被动为主动，不能总是等别人安排。',answerPy:'Wǒmen yào biàn bèidòng wéi zhǔdòng, bù néng zǒngshì děng biérén ānpái.',
      note:'变 A 为 B: biến A thành B (văn viết); 不能总是……: không thể lúc nào cũng ….',pair:'变……为……'}
   ]},


  {n:18,zh:'防治',py:'fángzhì',pos:'Động từ',vn:'phòng chống, phòng và chữa trị',hv:'phòng trị',em:'🩺',lesson:1,
   explain:['Vừa phòng ngừa vừa chữa trị (防 = phòng, 治 = trị): dùng cho bệnh tật, sâu bệnh, ô nhiễm, thiên tai.','Hay đi với 积极, 疾病, 污染, 近视. Khẩu hiệu quen thuộc: 预防为主，防治结合.'],
   usage:'防治 + 疾病 / 污染 / 近视 / 病虫害; 积极防治; 做好……的防治工作.',
   collo:['积极防治','防治疾病','防治污染','防治近视'],
   ex_zh:'……改为积极防治。',ex_py:'…… gǎi wéi jījí fángzhì.',ex_vn:'… chuyển sang tích cực phòng chống và chữa trị.',
   exList:[
     {zh:'有了大数据，人们有可能扭转有病治病的方式，改为积极防治。',py:'Yǒule dà shùjù, rénmen yǒu kěnéng niǔzhuǎn yǒu bìng zhì bìng de fāngshì, gǎi wéi jījí fángzhì.',vn:'Có dữ liệu lớn, con người có thể thay đổi cách "có bệnh mới chữa", chuyển sang tích cực phòng và chữa bệnh.'},
     {zh:'学校采取了很多措施来防治学生近视。',py:'Xuéxiào cǎiqǔle hěn duō cuòshī lái fángzhì xuésheng jìnshì.',vn:'Nhà trường đã áp dụng nhiều biện pháp để phòng chống cận thị cho học sinh.'},
     {zh:'防治空气污染需要每个人的努力。',py:'Fángzhì kōngqì wūrǎn xūyào měi ge rén de nǔlì.',vn:'Phòng chống ô nhiễm không khí cần sự nỗ lực của mỗi người.'}
   ],
   colloFull:[
     {zh:'积极防治',py:'jījí fángzhì',vn:'tích cực phòng chống'},
     {zh:'防治疾病',py:'fángzhì jíbìng',vn:'phòng chống bệnh tật'},
     {zh:'防治污染',py:'fángzhì wūrǎn',vn:'phòng chống ô nhiễm'},
     {zh:'防治近视',py:'fángzhì jìnshì',vn:'phòng chống cận thị'},
     {zh:'预防为主，防治结合',py:'yùfáng wéi zhǔ, fángzhì jiéhé',vn:'lấy phòng ngừa làm chính, kết hợp phòng và chữa'}
   ],
   patterns:[
     {s:'改为 / 做好 + 积极防治',m:'Chuyển sang / làm tốt việc tích cực phòng chống'},
     {s:'防治 + 疾病 / 污染 / 近视',m:'Phòng chống bệnh tật / ô nhiễm / cận thị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để phòng chống cận thị, nhà trường yêu cầu học sinh mỗi ngày ra ngoài trời hoạt động một tiếng.',answer:'为了防治近视，学校要求学生每天到户外活动一个小时。',answerPy:'Wèile fángzhì jìnshì, xuéxiào yāoqiú xuésheng měi tiān dào hùwài huódòng yí ge xiǎoshí.',
      note:'为了……: để … (nêu mục đích ở đầu câu); thời lượng 一个小时 đặt sau động từ.',pair:'为了……'},
     {promptLang:'vi',prompt:'Phòng và chữa bệnh mà chỉ dựa vào bác sĩ thì không đủ, bản thân mỗi người cũng phải chú ý.',answer:'防治疾病光靠医生是不够的，每个人自己也要注意。',answerPy:'Fángzhì jíbìng guāng kào yīshēng shì bú gòu de, měi ge rén zìjǐ yě yào zhùyì.',
      note:'光靠……是不够的: chỉ dựa vào … thì không đủ (光 = chỉ, khẩu ngữ).',pair:'光……'}
   ]},

  {n:19,zh:'消灭',py:'xiāomiè',pos:'Động từ',vn:'tiêu diệt, loại trừ',hv:'tiêu diệt',em:'🦟',lesson:1,
   explain:['Làm cho mất hẳn, không còn tồn tại: 消灭疾病, 消灭蚊子, 消灭敌人.','Cụm trong bài: 把疾病消灭在萌芽状态 = dập tắt bệnh tật ngay từ khi mới manh nha. So với 消除 (từ 28): 消灭 mạnh hơn, đối tượng thường là thứ có hại "sống" (bệnh, sâu bọ, kẻ thù) — xem 词语辨析.'],
   usage:'消灭 + 疾病 / 蚊子 / 害虫 / 敌人; 把……消灭在萌芽状态; 彻底消灭; 被消灭.',
   collo:['消灭疾病','彻底消灭','消灭蚊子','消灭在萌芽状态'],
   ex_zh:'甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。',ex_py:'Shènzhì bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bù xiǎnde huāngmiù le.',ex_vn:'Thậm chí ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.',
   exList:[
     {zh:'这就可以变被动为主动，把疾病消灭在萌芽状态。',py:'Zhè jiù kěyǐ biàn bèidòng wéi zhǔdòng, bǎ jíbìng xiāomiè zài méngyá zhuàngtài.',vn:'Như vậy có thể biến bị động thành chủ động, dập tắt bệnh tật ngay từ trong trứng nước.'},
     {zh:'夏天到了，我们得想办法消灭蚊子。',py:'Xiàtiān dào le, wǒmen děi xiǎng bànfǎ xiāomiè wénzi.',vn:'Mùa hè đến rồi, chúng ta phải nghĩ cách diệt muỗi.'},
     {zh:'天花是人类第一种被彻底消灭的传染病。',py:'Tiānhuā shì rénlèi dì-yī zhǒng bèi chèdǐ xiāomiè de chuánrǎnbìng.',vn:'Bệnh đậu mùa là bệnh truyền nhiễm đầu tiên bị loài người tiêu diệt hoàn toàn.'}
   ],
   colloFull:[
     {zh:'消灭疾病',py:'xiāomiè jíbìng',vn:'tiêu diệt bệnh tật'},
     {zh:'彻底消灭',py:'chèdǐ xiāomiè',vn:'tiêu diệt hoàn toàn'},
     {zh:'消灭蚊子',py:'xiāomiè wénzi',vn:'diệt muỗi'},
     {zh:'消灭在萌芽状态',py:'xiāomiè zài méngyá zhuàngtài',vn:'dập tắt ngay từ khi mới manh nha'},
     {zh:'消灭害虫',py:'xiāomiè hàichóng',vn:'diệt sâu bọ có hại'}
   ],
   patterns:[
     {s:'把 + N + 消灭在萌芽状态',m:'Dập tắt … ngay từ khi mới manh nha'},
     {s:'（彻底）消灭 + N',m:'Tiêu diệt (hoàn toàn) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phải dập tắt vấn đề ngay từ khi mới manh nha, đừng đợi nó lớn rồi mới đi giải quyết.',answer:'要把问题消灭在萌芽状态，别等它变大了才去解决。',answerPy:'Yào bǎ wèntí xiāomiè zài méngyá zhuàngtài, bié děng tā biàndà le cái qù jiějué.',
      note:'把 + N + V + 在 + nơi / trạng thái; 别等……才……: đừng đợi … mới ….',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người không để nước đọng, muỗi sẽ dần dần bị tiêu diệt.',answer:'只要大家不留积水，蚊子就会慢慢被消灭。',answerPy:'Zhǐyào dàjiā bù liú jīshuǐ, wénzi jiù huì mànmàn bèi xiāomiè.',
      note:'Câu bị động 被 + V (không nêu tác nhân); 只要……就……: chỉ cần … là ….',pair:'被'}
   ]},

  {n:20,zh:'萌芽',py:'méngyá',pos:'Động từ / Danh từ',vn:'mới nảy sinh, manh nha; mầm mống',hv:'manh nha',em:'🌱',lesson:1,
   explain:['(Động từ) cây bắt đầu nảy mầm; nghĩa bóng: sự vật mới bắt đầu nảy sinh.','(Danh từ) mầm mống, giai đoạn mới hình thành: 萌芽状态 / 萌芽阶段 = trạng thái / giai đoạn manh nha.'],
   usage:'处于萌芽阶段 / 状态; 把……消灭在萌芽状态; 开始萌芽; ……刚刚萌芽.',
   collo:['萌芽状态','萌芽阶段','开始萌芽','刚刚萌芽'],
   ex_zh:'甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。',ex_py:'Shènzhì bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bù xiǎnde huāngmiù le.',ex_vn:'Thậm chí ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.',
   exList:[
     {zh:'这就可以变被动为主动，把疾病消灭在萌芽状态。',py:'Zhè jiù kěyǐ biàn bèidòng wéi zhǔdòng, bǎ jíbìng xiāomiè zài méngyá zhuàngtài.',vn:'Như vậy có thể biến bị động thành chủ động, dập tắt bệnh tật ngay từ trong trứng nước.'},
     {zh:'春天到了，路边的小草开始萌芽了。',py:'Chūntiān dào le, lùbiān de xiǎocǎo kāishǐ méngyá le.',vn:'Mùa xuân đến rồi, cỏ bên đường bắt đầu nảy mầm.'},
     {zh:'这项技术目前还处于萌芽阶段。',py:'Zhè xiàng jìshù mùqián hái chǔyú méngyá jiēduàn.',vn:'Công nghệ này hiện vẫn đang ở giai đoạn manh nha.'}
   ],
   colloFull:[
     {zh:'萌芽状态',py:'méngyá zhuàngtài',vn:'trạng thái manh nha'},
     {zh:'萌芽阶段',py:'méngyá jiēduàn',vn:'giai đoạn manh nha'},
     {zh:'开始萌芽',py:'kāishǐ méngyá',vn:'bắt đầu nảy mầm'},
     {zh:'刚刚萌芽',py:'gānggāng méngyá',vn:'vừa mới nảy sinh'},
     {zh:'处于萌芽阶段',py:'chǔyú méngyá jiēduàn',vn:'ở giai đoạn manh nha'}
   ],
   patterns:[
     {s:'N + 处于萌芽阶段 / 状态',m:'… đang ở giai đoạn manh nha'},
     {s:'把 + N + 消灭在萌芽状态',m:'Dập tắt … từ trong trứng nước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Niềm yêu thích văn học của cậu ấy vừa mới nảy sinh, thầy giáo đã dành cho cậu rất nhiều khích lệ.',answer:'他对文学的热爱刚刚萌芽，老师就给了他很多鼓励。',answerPy:'Tā duì wénxué de rè\'ài gānggāng méngyá, lǎoshī jiù gěile tā hěn duō gǔlì.',
      note:'刚（刚）……就……: vừa mới … đã … (hai việc nối tiếp rất sát).',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Ngành này ở Việt Nam vẫn còn ở giai đoạn manh nha, nhưng triển vọng rất rộng mở.',answer:'这个行业在越南还处于萌芽阶段，但是前景十分广阔。',answerPy:'Zhège hángyè zài Yuènán hái chǔyú méngyá jiēduàn, dànshì qiánjǐng shífēn guǎngkuò.',
      note:'还……，但是……: vẫn còn …, nhưng …; 前景广阔 = triển vọng rộng mở (广阔 ôn bài 19).',pair:'……，但是……'}
   ]},

  {n:21,zh:'荒谬',py:'huāngmiù',pos:'Tính từ',vn:'hoang đường, phi lý',hv:'hoang mậu',em:'🤪',lesson:1,
   explain:['Hết sức sai lầm, vô lý, trái với lẽ thường đến mức buồn cười.','Dùng cho ý kiến, lời nói, suy nghĩ: 荒谬的想法 / 说法 / 观点; 荒谬可笑. Mạnh hơn 不合理, 错误.'],
   usage:'荒谬的 + 想法 / 说法 / 观点; ……（显得 / 太）荒谬; 荒谬可笑; 荒谬至极.',
   collo:['荒谬的想法','荒谬可笑','显得荒谬','荒谬的说法'],
   ex_zh:'甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。',ex_py:'Shènzhì bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bù xiǎnde huāngmiù le.',ex_vn:'Thậm chí ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.',
   exList:[
     {zh:'有了大数据，把疾病消灭在萌芽状态中的想法也不显得荒谬了。',py:'Yǒule dà shùjù, bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bù xiǎnde huāngmiù le.',vn:'Có dữ liệu lớn, ý tưởng dập tắt bệnh tật từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.'},
     {zh:'他的说法太荒谬了，谁也不会相信。',py:'Tā de shuōfǎ tài huāngmiù le, shéi yě bú huì xiāngxìn.',vn:'Cách nói của anh ta quá hoang đường, chẳng ai tin cả.'},
     {zh:'一百年前，在天上飞还被看作是荒谬的想法。',py:'Yìbǎi nián qián, zài tiān shang fēi hái bèi kànzuò shì huāngmiù de xiǎngfǎ.',vn:'Một trăm năm trước, bay trên trời vẫn còn bị coi là ý tưởng hoang đường.'}
   ],
   colloFull:[
     {zh:'荒谬的想法',py:'huāngmiù de xiǎngfǎ',vn:'ý tưởng hoang đường'},
     {zh:'荒谬可笑',py:'huāngmiù kěxiào',vn:'hoang đường nực cười'},
     {zh:'显得荒谬',py:'xiǎnde huāngmiù',vn:'có vẻ hoang đường'},
     {zh:'荒谬的说法',py:'huāngmiù de shuōfǎ',vn:'luận điệu phi lý'},
     {zh:'荒谬至极',py:'huāngmiù zhì jí',vn:'phi lý hết mức'}
   ],
   patterns:[
     {s:'……（不）显得荒谬',m:'… (không) có vẻ hoang đường'},
     {s:'荒谬的 + 想法 / 说法 / 观点',m:'Suy nghĩ / cách nói / quan điểm phi lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quan điểm này nghe có vẻ hoang đường, nhưng nghĩ kỹ thì lại có một phần đạo lý.',answer:'这个观点听起来很荒谬，可是仔细想想，却有一定的道理。',answerPy:'Zhège guāndiǎn tīng qǐlái hěn huāngmiù, kěshì zǐxì xiǎngxiang, què yǒu yídìng de dàolǐ.',
      note:'V + 起来: xét về mặt … thì (听起来 = nghe có vẻ); 可是……却……: nhưng … lại ….',pair:'V + 起来'},
     {promptLang:'vi',prompt:'Những suy nghĩ trước đây bị mọi người cho là hoang đường, bây giờ đã trở thành hiện thực.',answer:'以前被大家认为荒谬的想法，现在已经变成了现实。',answerPy:'Yǐqián bèi dàjiā rènwéi huāngmiù de xiǎngfǎ, xiànzài yǐjīng biànchéngle xiànshí.',
      note:'Cụm bị động làm định ngữ: 被 + người + V + 的 + N; 变成 = trở thành.',pair:'被……'}
   ]},

  {n:22,zh:'前提',py:'qiántí',pos:'Danh từ',vn:'điều kiện tiên quyết, tiền đề',hv:'tiền đề',em:'🧱',lesson:1,
   explain:['Điều kiện phải có trước thì việc khác mới xảy ra / mới bàn tiếp được.','Hay dùng: 在……的前提下 (với điều kiện …), 以……为前提, 前提条件, 大前提.'],
   usage:'在……的前提下; 以……为前提; ……是……的前提; 有一个前提; 前提条件.',
   collo:['在……的前提下','以……为前提','前提条件','大前提'],
   ex_zh:'做进一步讨论之前，有一个前提必须交代清楚。',ex_py:'Zuò jìn yí bù tǎolùn zhīqián, yǒu yí ge qiántí bìxū jiāodài qīngchu.',ex_vn:'Trước khi thảo luận sâu hơn, có một tiền đề cần phải nói rõ.',
   exList:[
     {zh:'有一个前提必须交代清楚：每一次疾病的发生都不是偶然的。',py:'Yǒu yí ge qiántí bìxū jiāodài qīngchu: měi yí cì jíbìng de fāshēng dōu bú shì ǒurán de.',vn:'Có một tiền đề cần phải nói rõ: mỗi lần bệnh tật phát sinh đều không phải ngẫu nhiên.'},
     {zh:'在保证质量的前提下，我们要尽量降低成本。',py:'Zài bǎozhèng zhìliàng de qiántí xià, wǒmen yào jǐnliàng jiàngdī chéngběn.',vn:'Với điều kiện đảm bảo chất lượng, chúng ta phải cố gắng hạ giá thành.'},
     {zh:'身体健康是做好一切事情的前提。',py:'Shēntǐ jiànkāng shì zuòhǎo yíqiè shìqing de qiántí.',vn:'Sức khoẻ tốt là tiền đề để làm tốt mọi việc.'}
   ],
   colloFull:[
     {zh:'在……的前提下',py:'zài …… de qiántí xià',vn:'với điều kiện …'},
     {zh:'以……为前提',py:'yǐ …… wéi qiántí',vn:'lấy … làm tiền đề'},
     {zh:'前提条件',py:'qiántí tiáojiàn',vn:'điều kiện tiên quyết'},
     {zh:'大前提',py:'dà qiántí',vn:'tiền đề lớn'},
     {zh:'交代前提',py:'jiāodài qiántí',vn:'nói rõ tiền đề'}
   ],
   patterns:[
     {s:'在 + ……的前提下，……',m:'Với điều kiện …, …'},
     {s:'以 + N + 为前提',m:'Lấy … làm tiền đề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Với điều kiện không ảnh hưởng đến việc học, bố mẹ đồng ý cho tôi đi làm thêm.',answer:'在不影响学习的前提下，父母同意我去打工。',answerPy:'Zài bù yǐngxiǎng xuéxí de qiántí xià, fùmǔ tóngyì wǒ qù dǎgōng.',
      note:'在……的前提下: với điều kiện … (khung giới từ đặt đầu câu).',pair:'在……下'},
     {promptLang:'vi',prompt:'Hợp tác phải lấy sự tin tưởng lẫn nhau làm tiền đề, nếu không thì rất khó thành công.',answer:'合作要以互相信任为前提，否则很难成功。',answerPy:'Hézuò yào yǐ hùxiāng xìnrèn wéi qiántí, fǒuzé hěn nán chénggōng.',
      note:'以 A 为 B: lấy A làm B (ôn bài 11); 否则: nếu không thì.',pair:'否则'}
   ]},

  {n:23,zh:'交代',py:'jiāodài',pos:'Động từ',vn:'nói rõ, giải thích rõ; dặn dò',hv:'giao đại',em:'📋',lesson:1,
   explain:['Nói rõ, giải thích cho rõ ràng (sự việc, tình hình, tiền đề): 交代清楚.','Còn nghĩa: dặn dò, giao việc (妈妈交代我……; 交代任务); ăn nói, chịu trách nhiệm với ai (怎么向父母交代?); thành khẩn khai ra (交代问题).'],
   usage:'把……交代清楚; 交代 + 任务 / 工作; A 交代 B + V; 向 + người + 交代.',
   collo:['交代清楚','交代任务','向……交代','交代问题'],
   ex_zh:'做进一步讨论之前，有一个前提必须交代清楚。',ex_py:'Zuò jìn yí bù tǎolùn zhīqián, yǒu yí ge qiántí bìxū jiāodài qīngchu.',ex_vn:'Trước khi thảo luận sâu hơn, có một tiền đề cần phải nói rõ.',
   exList:[
     {zh:'有一个前提必须交代清楚，否则后面的讨论就没有意义了。',py:'Yǒu yí ge qiántí bìxū jiāodài qīngchu, fǒuzé hòumiàn de tǎolùn jiù méiyǒu yìyì le.',vn:'Có một tiền đề cần phải nói rõ, nếu không thì phần thảo luận sau sẽ vô nghĩa.'},
     {zh:'妈妈出门前交代我一定要关好门窗。',py:'Māma chūmén qián jiāodài wǒ yídìng yào guānhǎo ménchuāng.',vn:'Mẹ trước khi ra ngoài dặn tôi nhất định phải đóng kỹ cửa.'},
     {zh:'你把钱都花光了，怎么向父母交代？',py:'Nǐ bǎ qián dōu huāguāng le, zěnme xiàng fùmǔ jiāodài?',vn:'Cậu tiêu sạch tiền rồi, biết ăn nói thế nào với bố mẹ?'}
   ],
   colloFull:[
     {zh:'交代清楚',py:'jiāodài qīngchu',vn:'nói rõ ràng'},
     {zh:'交代任务',py:'jiāodài rènwu',vn:'giao nhiệm vụ'},
     {zh:'向……交代',py:'xiàng …… jiāodài',vn:'ăn nói, giải thích với …'},
     {zh:'交代问题',py:'jiāodài wèntí',vn:'khai rõ vấn đề'},
     {zh:'交代一下',py:'jiāodài yíxià',vn:'dặn dò một chút'}
   ],
   patterns:[
     {s:'把 + N + 交代清楚',m:'Nói rõ …'},
     {s:'A + 交代 + B + V',m:'A dặn B làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi đi công tác, giám đốc đã dặn dò lại tất cả mọi việc cho tôi rất chi tiết.',answer:'出差以前，经理把所有的事情都详细地交代给了我。',answerPy:'Chūchāi yǐqián, jīnglǐ bǎ suǒyǒu de shìqing dōu xiángxì de jiāodài gěile wǒ.',
      note:'把 + N + V + 给 + người: giao / dặn … cho ai.',pair:'把……V给……'},
     {promptLang:'vi',prompt:'Nếu cậu không nói rõ đầu đuôi sự việc, mọi người sẽ hiểu lầm cậu đấy.',answer:'要是你不把事情的来龙去脉交代清楚，大家会误会你的。',answerPy:'Yàoshi nǐ bù bǎ shìqing de láilóng-qùmài jiāodài qīngchu, dàjiā huì wùhuì nǐ de.',
      note:'要是……: nếu … (khẩu ngữ); 会……的: khẳng định khả năng xảy ra.',pair:'要是……'}
   ]},

  {n:24,zh:'追究',py:'zhuījiū',pos:'Động từ',vn:'điều tra, nghiên cứu, xem xét kỹ; truy cứu',hv:'truy cứu',em:'🔍',lesson:1,
   explain:['Tìm hiểu tận gốc nguyên nhân, lai lịch của sự việc: 追究原因.','Hay gặp nghĩa "truy cứu (trách nhiệm)": 追究责任, 不再追究 — sắc thái nghiêm khắc, trang trọng.'],
   usage:'追究 + 原因 / 责任 / 根源; 追究到底; 不再追究; 被追究责任.',
   collo:['追究原因','追究责任','追究到底','不再追究'],
   ex_zh:'追究原因，无非是基因、遗传、环境、生活习惯等。',ex_py:'Zhuījiū yuányīn, wúfēi shì jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng.',ex_vn:'Truy nguyên nguyên nhân, chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt, v.v.',
   exList:[
     {zh:'每一次疾病的发生都不是偶然的，追究原因，无非是基因、遗传、环境、生活习惯等。',py:'Měi yí cì jíbìng de fāshēng dōu bú shì ǒurán de, zhuījiū yuányīn, wúfēi shì jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng.',vn:'Mỗi lần bệnh tật phát sinh đều không phải ngẫu nhiên; truy nguyên nguyên nhân, chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt, v.v.'},
     {zh:'出了问题，先要解决，再追究责任。',py:'Chūle wèntí, xiān yào jiějué, zài zhuījiū zérèn.',vn:'Có chuyện xảy ra thì trước tiên phải giải quyết, sau đó mới truy cứu trách nhiệm.'},
     {zh:'这次就算了，我不再追究了，下不为例。',py:'Zhè cì jiù suàn le, wǒ bú zài zhuījiū le, xià bù wéi lì.',vn:'Lần này thì bỏ qua, tôi không truy cứu nữa, lần sau không được như vậy.'}
   ],
   colloFull:[
     {zh:'追究原因',py:'zhuījiū yuányīn',vn:'truy tìm nguyên nhân'},
     {zh:'追究责任',py:'zhuījiū zérèn',vn:'truy cứu trách nhiệm'},
     {zh:'追究到底',py:'zhuījiū dàodǐ',vn:'truy cứu đến cùng'},
     {zh:'不再追究',py:'bú zài zhuījiū',vn:'không truy cứu nữa'},
     {zh:'追究根源',py:'zhuījiū gēnyuán',vn:'truy tìm cội nguồn'}
   ],
   patterns:[
     {s:'追究原因，（无非是）……',m:'Truy nguyên nguyên nhân, (chẳng qua là) …'},
     {s:'追究 + 某人 + 的责任',m:'Truy cứu trách nhiệm của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Truy nguyên nguyên nhân, không phải đề quá khó, mà là cậu ôn tập chưa đủ.',answer:'追究原因，不是题太难，而是你复习得不够。',answerPy:'Zhuījiū yuányīn, bú shì tí tài nán, ér shì nǐ fùxí de bú gòu.',
      note:'不是……而是……: không phải … mà là … (phủ định A, khẳng định B).',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Chuyện đã xảy ra rồi, bây giờ truy cứu trách nhiệm của ai cũng vô ích.',answer:'事情已经发生了，现在追究谁的责任都没有用。',answerPy:'Shìqing yǐjīng fāshēng le, xiànzài zhuījiū shéi de zérèn dōu méiyǒu yòng.',
      note:'Đại từ nghi vấn phiếm chỉ: 谁……都…… = bất kể ai … cũng ….',pair:'谁……都……'}
   ]},

  {n:25,zh:'基因',py:'jīyīn',pos:'Danh từ',vn:'gien',hv:'cơ nhân',em:'🧬',lesson:1,
   explain:['Gen — đơn vị di truyền quyết định đặc điểm của sinh vật (phiên âm + ý nghĩa từ "gene").','Hay đi với 遗传, 技术, 检测, 突变; nghĩa bóng: 文化基因 (gen văn hoá — nét cốt lõi truyền đời).'],
   usage:'基因 + 遗传 / 技术 / 检测 / 突变; 由基因决定; 优秀的基因.',
   collo:['基因技术','基因检测','由基因决定','基因突变'],
   ex_zh:'追究原因，无非是基因、遗传、环境、生活习惯等。',ex_py:'Zhuījiū yuányīn, wúfēi shì jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng.',ex_vn:'Truy nguyên nguyên nhân, chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt, v.v.',
   exList:[
     {zh:'疾病的发生无非与基因、遗传、环境、生活习惯等有关。',py:'Jíbìng de fāshēng wúfēi yǔ jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng yǒuguān.',vn:'Bệnh tật phát sinh chẳng qua là liên quan đến gen, di truyền, môi trường, thói quen sinh hoạt, v.v.'},
     {zh:'科学家发现，身高在很大程度上是由基因决定的。',py:'Kēxuéjiā fāxiàn, shēngāo zài hěn dà chéngdù shang shì yóu jīyīn juédìng de.',vn:'Các nhà khoa học phát hiện chiều cao phần lớn do gen quyết định.'},
     {zh:'基因技术的发展给治疗疾病带来了新的希望。',py:'Jīyīn jìshù de fāzhǎn gěi zhìliáo jíbìng dàiláile xīn de xīwàng.',vn:'Sự phát triển của công nghệ gen đã mang lại hy vọng mới cho việc chữa bệnh.'}
   ],
   colloFull:[
     {zh:'基因技术',py:'jīyīn jìshù',vn:'công nghệ gen'},
     {zh:'基因检测',py:'jīyīn jiǎncè',vn:'xét nghiệm gen'},
     {zh:'由基因决定',py:'yóu jīyīn juédìng',vn:'do gen quyết định'},
     {zh:'基因突变',py:'jīyīn tūbiàn',vn:'đột biến gen'},
     {zh:'优秀的基因',py:'yōuxiù de jīyīn',vn:'gen tốt'}
   ],
   patterns:[
     {s:'……是由基因决定的',m:'… là do gen quyết định'},
     {s:'基因 + 技术 / 检测',m:'Công nghệ / xét nghiệm gen'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chiều cao chịu ảnh hưởng của gen, nhưng dinh dưỡng và vận động cũng rất quan trọng.',answer:'虽然身高受基因的影响，但是营养和运动也很重要。',answerPy:'Suīrán shēngāo shòu jīyīn de yǐngxiǎng, dànshì yíngyǎng hé yùndòng yě hěn zhòngyào.',
      note:'虽然……但是……: tuy … nhưng …; 受……的影响 = chịu ảnh hưởng của ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Con người sở dĩ mỗi người một khác là vì gen của mỗi người không giống nhau.',answer:'人之所以各不相同，是因为每个人的基因都不一样。',answerPy:'Rén zhīsuǒyǐ gè bù xiāngtóng, shì yīnwèi měi ge rén de jīyīn dōu bù yíyàng.',
      note:'之所以……是因为……: sở dĩ … là vì ….',pair:'之所以……是因为……'}
   ]},

  {n:26,zh:'遗传',py:'yíchuán',pos:'Động từ',vn:'di truyền',hv:'di truyền',em:'👨‍👧',lesson:1,
   explain:['Đặc điểm (tính cách, thể chất, bệnh) của đời trước truyền sang đời sau.','Làm động từ (遗传给下一代, 从……那儿遗传来的) và danh từ (遗传因素, 遗传病).'],
   usage:'A 遗传给 B; 从 + người + 那儿遗传来的; 遗传病; 遗传因素; 会遗传.',
   collo:['遗传给','遗传病','遗传因素','家族遗传'],
   ex_zh:'追究原因，无非是基因、遗传、环境、生活习惯等。',ex_py:'Zhuījiū yuányīn, wúfēi shì jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng.',ex_vn:'Truy nguyên nguyên nhân, chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt, v.v.',
   exList:[
     {zh:'心脏病的发生和遗传有一定的关系。',py:'Xīnzàngbìng de fāshēng hé yíchuán yǒu yídìng de guānxi.',vn:'Việc mắc bệnh tim có liên quan nhất định đến di truyền.'},
     {zh:'他的好嗓子是从妈妈那儿遗传来的。',py:'Tā de hǎo sǎngzi shì cóng māma nàr yíchuán lái de.',vn:'Giọng hát hay của cậu ấy là được di truyền từ mẹ.'},
     {zh:'有些疾病会遗传给下一代。',py:'Yǒuxiē jíbìng huì yíchuán gěi xià yí dài.',vn:'Có một số bệnh sẽ di truyền sang thế hệ sau.'}
   ],
   colloFull:[
     {zh:'遗传给',py:'yíchuán gěi',vn:'di truyền cho'},
     {zh:'遗传病',py:'yíchuánbìng',vn:'bệnh di truyền'},
     {zh:'遗传因素',py:'yíchuán yīnsù',vn:'yếu tố di truyền'},
     {zh:'家族遗传',py:'jiāzú yíchuán',vn:'di truyền trong gia đình'},
     {zh:'遗传下来',py:'yíchuán xiàlái',vn:'di truyền lại'}
   ],
   patterns:[
     {s:'A + 遗传给 + B',m:'A di truyền sang B'},
     {s:'……是从 + người + 那儿遗传来的',m:'… là di truyền từ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói bệnh này có thể di truyền, vì vậy bác sĩ đề nghị cả nhà đều đi kiểm tra.',answer:'听说这种病会遗传，因此医生建议全家人都去检查。',answerPy:'Tīngshuō zhè zhǒng bìng huì yíchuán, yīncǐ yīshēng jiànyì quán jiā rén dōu qù jiǎnchá.',
      note:'因此: vì vậy (nối kết quả, văn viết); 建议 + người + V.',pair:'因此'},
     {promptLang:'vi',prompt:'Năng khiếu âm nhạc của cô ấy có lẽ là được di truyền từ bố.',answer:'她的音乐天赋可能是从爸爸那儿遗传来的。',answerPy:'Tā de yīnyuè tiānfù kěnéng shì cóng bàba nàr yíchuán lái de.',
      note:'是……的: nhấn mạnh nguồn gốc (从爸爸那儿); người + 那儿 = chỗ người đó.',pair:'是……的'}
   ]},

  {n:27,zh:'预料',py:'yùliào',pos:'Động từ / Danh từ',vn:'dự đoán, tính trước, dự liệu',hv:'dự liệu',em:'🤔',lesson:1,
   explain:['Đoán trước (theo cảm nhận, kinh nghiệm) sự việc sẽ diễn biến thế nào — thường nói về việc CÓ ĐÚNG HAY KHÔNG như mình nghĩ.','Hay dùng ở dạng phủ định / bất ngờ: 无法预料, 难以预料, 出乎预料, 在……预料之中. Khác 预测 (dự đoán có căn cứ khoa học, số liệu) — xem 词语辨析.'],
   usage:'无法 / 难以 + 预料; 出乎（……的）预料; 在（……的）预料之中; 预料到…….',
   collo:['无法预料','出乎预料','难以预料','预料之中'],
   ex_zh:'虽非偶然，却无法预料。',ex_py:'Suī fēi ǒurán, què wúfǎ yùliào.',ex_vn:'Tuy không phải ngẫu nhiên, nhưng lại không thể lường trước.',
   exList:[
     {zh:'疾病的发生虽非偶然，却无法预料，因此，传统医疗只能帮你治病。',py:'Jíbìng de fāshēng suī fēi ǒurán, què wúfǎ yùliào, yīncǐ, chuántǒng yīliáo zhǐ néng bāng nǐ zhì bìng.',vn:'Bệnh tật phát sinh tuy không phải ngẫu nhiên nhưng lại không thể lường trước, vì vậy y tế truyền thống chỉ có thể giúp bạn chữa bệnh.'},
     {zh:'比赛的结果出乎所有人的预料。',py:'Bǐsài de jiéguǒ chūhū suǒyǒu rén de yùliào.',vn:'Kết quả trận đấu nằm ngoài dự liệu của tất cả mọi người.'},
     {zh:'山里的天气难以预料，出门最好带把伞。',py:'Shān li de tiānqì nányǐ yùliào, chūmén zuìhǎo dài bǎ sǎn.',vn:'Thời tiết trên núi khó mà lường trước, ra ngoài tốt nhất nên mang theo ô.'}
   ],
   colloFull:[
     {zh:'无法预料',py:'wúfǎ yùliào',vn:'không thể lường trước'},
     {zh:'出乎预料',py:'chūhū yùliào',vn:'ngoài dự liệu'},
     {zh:'难以预料',py:'nányǐ yùliào',vn:'khó lường'},
     {zh:'预料之中',py:'yùliào zhī zhōng',vn:'trong dự liệu'},
     {zh:'预料到',py:'yùliào dào',vn:'lường trước được'}
   ],
   patterns:[
     {s:'……出乎 + người + 的预料',m:'… nằm ngoài dự liệu của …'},
     {s:'……（完全）在 + người + 的预料之中',m:'… (hoàn toàn) nằm trong dự liệu của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này hoàn toàn nằm ngoài dự liệu của tôi, tôi không ngờ anh ấy lại nghỉ việc.',answer:'这件事完全出乎我的预料，我没想到他竟然辞职了。',answerPy:'Zhè jiàn shì wánquán chūhū wǒ de yùliào, wǒ méi xiǎngdào tā jìngrán cízhí le.',
      note:'竟然: vậy mà, lại (ngoài dự đoán); 没想到 = không ngờ.',pair:'竟然'},
     {promptLang:'vi',prompt:'Tương lai tuy khó lường trước, nhưng chỉ cần cố gắng thì không cần phải sợ.',answer:'未来虽然难以预料，但只要努力，就不用害怕。',answerPy:'Wèilái suīrán nányǐ yùliào, dàn zhǐyào nǔlì, jiù búyòng hàipà.',
      note:'虽然……但……: tuy … nhưng …; 难以 + V ôn bài 14.',pair:'虽然……但……'}
   ]},

  {n:28,zh:'消除',py:'xiāochú',pos:'Động từ',vn:'loại trừ, loại bỏ, xoá bỏ',hv:'tiêu trừ',em:'🧽',lesson:1,
   explain:['Làm cho những thứ bất lợi mất đi: 隐患, 误会, 疲劳, 顾虑, 影响, 偏见.','Đối tượng thường trừu tượng, là trạng thái / cảm giác xấu; 消灭 (từ 19) mạnh hơn, đối tượng thường là thứ "sống" có hại (bệnh, muỗi, kẻ thù).'],
   usage:'消除 + 隐患 / 误会 / 疲劳 / 顾虑 / 影响; 彻底消除; 难以消除.',
   collo:['消除隐患','消除误会','消除疲劳','彻底消除'],
   ex_zh:'如果能找出病因呢？消除隐患就成为了可能。',ex_py:'Rúguǒ néng zhǎochū bìngyīn ne? Xiāochú yǐnhuàn jiù chéngwéile kěnéng.',ex_vn:'Nếu tìm ra được nguyên nhân gây bệnh thì sao? Việc loại bỏ hiểm hoạ tiềm ẩn sẽ trở thành có thể.',
   exList:[
     {zh:'对病人进行持续跟踪监测，可以消除疾病隐患，挽救患者生命。',py:'Duì bìngrén jìnxíng chíxù gēnzōng jiāncè, kěyǐ xiāochú jíbìng yǐnhuàn, wǎnjiù huànzhě shēngmìng.',vn:'Theo dõi giám sát bệnh nhân liên tục có thể loại bỏ hiểm hoạ bệnh tật, cứu sống người bệnh.'},
     {zh:'两人坐下来好好谈了一次，终于消除了误会。',py:'Liǎng rén zuò xiàlái hǎohāo tánle yí cì, zhōngyú xiāochúle wùhuì.',vn:'Hai người ngồi xuống nói chuyện đàng hoàng một lần, cuối cùng đã xoá bỏ hiểu lầm.'},
     {zh:'洗个热水澡可以消除一天的疲劳。',py:'Xǐ ge rèshuǐzǎo kěyǐ xiāochú yì tiān de píláo.',vn:'Tắm nước nóng có thể xua tan mệt mỏi của cả ngày.'}
   ],
   colloFull:[
     {zh:'消除隐患',py:'xiāochú yǐnhuàn',vn:'loại bỏ hiểm hoạ tiềm ẩn'},
     {zh:'消除误会',py:'xiāochú wùhuì',vn:'xoá bỏ hiểu lầm'},
     {zh:'消除疲劳',py:'xiāochú píláo',vn:'xua tan mệt mỏi'},
     {zh:'彻底消除',py:'chèdǐ xiāochú',vn:'loại bỏ triệt để'},
     {zh:'消除顾虑',py:'xiāochú gùlǜ',vn:'xoá bỏ băn khoăn'}
   ],
   patterns:[
     {s:'消除 + 隐患 / 误会 / 疲劳',m:'Loại bỏ hiểm hoạ / hiểu lầm / mệt mỏi'},
     {s:'……可以 / 有助于 + 消除 + N',m:'… có thể / giúp loại bỏ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần hai người chịu ngồi xuống nói chuyện thẳng thắn, hiểu lầm sẽ được xoá bỏ.',answer:'只要两个人肯坐下来坦率地谈一谈，误会就能消除。',answerPy:'Zhǐyào liǎng ge rén kěn zuò xiàlái tǎnshuài de tán yi tán, wùhuì jiù néng xiāochú.',
      note:'只要……就……: chỉ cần … là …; 肯 = chịu, bằng lòng; V一V = thử làm một chút.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Để loại bỏ hiểm hoạ an toàn, nhà trường đã kiểm tra lại toàn bộ thiết bị điện.',answer:'为了消除安全隐患，学校重新检查了所有的电器设备。',answerPy:'Wèile xiāochú ānquán yǐnhuàn, xuéxiào chóngxīn jiǎnchále suǒyǒu de diànqì shèbèi.',
      note:'为了……: để … (mục đích đặt đầu câu).',pair:'为了……'}
   ]},

  {n:29,zh:'隐患',py:'yǐnhuàn',pos:'Danh từ',vn:'tai hoạ ngầm, hiểm hoạ tiềm ẩn',hv:'ẩn hoạn',em:'⚠️',lesson:1,
   explain:['Mối nguy hiểm đang ẩn giấu, chưa lộ ra nhưng có thể gây hại về sau (隐 = ẩn, 患 = hoạ).','Hay đi với: 消除, 存在, 埋下, 排查; 安全隐患, 疾病隐患.'],
   usage:'消除 / 排查 + 隐患; 存在 + 隐患; 给……埋下隐患; 安全隐患; 疾病隐患.',
   collo:['安全隐患','消除隐患','埋下隐患','存在隐患'],
   ex_zh:'如果能找出病因呢？消除隐患就成为了可能。',ex_py:'Rúguǒ néng zhǎochū bìngyīn ne? Xiāochú yǐnhuàn jiù chéngwéile kěnéng.',ex_vn:'Nếu tìm ra được nguyên nhân gây bệnh thì sao? Việc loại bỏ hiểm hoạ tiềm ẩn sẽ trở thành có thể.',
   exList:[
     {zh:'对病人进行持续跟踪监测，可以消除疾病隐患。',py:'Duì bìngrén jìnxíng chíxù gēnzōng jiāncè, kěyǐ xiāochú jíbìng yǐnhuàn.',vn:'Theo dõi giám sát bệnh nhân liên tục có thể loại bỏ hiểm hoạ bệnh tật.'},
     {zh:'这栋楼的电线太旧了，存在很大的安全隐患。',py:'Zhè dòng lóu de diànxiàn tài jiù le, cúnzài hěn dà de ānquán yǐnhuàn.',vn:'Dây điện của toà nhà này quá cũ, tồn tại nguy cơ mất an toàn rất lớn.'},
     {zh:'小问题不及时解决，就会给以后埋下隐患。',py:'Xiǎo wèntí bù jíshí jiějué, jiù huì gěi yǐhòu máixià yǐnhuàn.',vn:'Vấn đề nhỏ không giải quyết kịp thời sẽ gieo mầm hiểm hoạ cho sau này.'}
   ],
   colloFull:[
     {zh:'安全隐患',py:'ānquán yǐnhuàn',vn:'nguy cơ mất an toàn'},
     {zh:'消除隐患',py:'xiāochú yǐnhuàn',vn:'loại bỏ hiểm hoạ'},
     {zh:'埋下隐患',py:'máixià yǐnhuàn',vn:'gieo mầm hiểm hoạ'},
     {zh:'存在隐患',py:'cúnzài yǐnhuàn',vn:'tồn tại hiểm hoạ'},
     {zh:'疾病隐患',py:'jíbìng yǐnhuàn',vn:'hiểm hoạ bệnh tật'}
   ],
   patterns:[
     {s:'N + 存在（很大的）+ 隐患',m:'… tồn tại hiểm hoạ (lớn)'},
     {s:'给 + N + 埋下隐患',m:'Gieo mầm hiểm hoạ cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không kịp thời phát hiện hiểm hoạ tiềm ẩn, hậu quả sẽ không thể tưởng tượng nổi.',answer:'要是不及时发现隐患，后果将不堪设想。',answerPy:'Yàoshi bù jíshí fāxiàn yǐnhuàn, hòuguǒ jiāng bùkān-shèxiǎng.',
      note:'要是……: nếu …; 不堪设想 = không thể tưởng tượng nổi (hậu quả xấu).',pair:'要是……'},
     {promptLang:'vi',prompt:'Không chỉ phải giải quyết vấn đề trước mắt, mà còn phải loại bỏ hiểm hoạ về lâu dài.',answer:'不仅要解决眼前的问题，还要消除长远的隐患。',answerPy:'Bùjǐn yào jiějué yǎnqián de wèntí, hái yào xiāochú chángyuǎn de yǐnhuàn.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:30,zh:'预兆',py:'yùzhào',pos:'Danh từ',vn:'điềm báo trước, điềm',hv:'dự triệu',em:'🌩️',lesson:1,
   explain:['Dấu hiệu xuất hiện trước khi sự việc xảy ra, báo trước điều sắp tới.','Hay dùng: 有预兆, 没有任何预兆, 地震的预兆, 不祥的预兆. Gần nghĩa 先兆 (trong bài: 零星先兆), 征兆.'],
   usage:'……是有预兆的; 没有（任何）预兆; ……的预兆; 一点儿预兆都没有.',
   collo:['有预兆','没有任何预兆','地震的预兆','不祥的预兆'],
   ex_zh:'比如心脏病，病人发病常常是有预兆的。',ex_py:'Bǐrú xīnzàngbìng, bìngrén fābìng chángcháng shì yǒu yùzhào de.',ex_vn:'Chẳng hạn như bệnh tim, bệnh nhân lên cơn thường là có điềm báo trước.',
   exList:[
     {zh:'病人发病常常是有预兆的，如果能及时发现，就可以提前治疗。',py:'Bìngrén fābìng chángcháng shì yǒu yùzhào de, rúguǒ néng jíshí fāxiàn, jiù kěyǐ tíqián zhìliáo.',vn:'Bệnh nhân lên cơn thường là có điềm báo trước, nếu phát hiện kịp thời thì có thể điều trị sớm.'},
     {zh:'地震发生前，有些动物会表现异常，这可能就是一种预兆。',py:'Dìzhèn fāshēng qián, yǒuxiē dòngwù huì biǎoxiàn yìcháng, zhè kěnéng jiù shì yì zhǒng yùzhào.',vn:'Trước khi động đất xảy ra, một số động vật sẽ có biểu hiện bất thường, đó có thể chính là một điềm báo.'},
     {zh:'那天下午，没有任何预兆，暴雨就来了。',py:'Nà tiān xiàwǔ, méiyǒu rènhé yùzhào, bàoyǔ jiù lái le.',vn:'Chiều hôm đó, không hề có dấu hiệu báo trước nào, cơn mưa lớn ập đến.'}
   ],
   colloFull:[
     {zh:'有预兆',py:'yǒu yùzhào',vn:'có điềm báo'},
     {zh:'没有任何预兆',py:'méiyǒu rènhé yùzhào',vn:'không có bất kỳ dấu hiệu báo trước nào'},
     {zh:'地震的预兆',py:'dìzhèn de yùzhào',vn:'điềm báo động đất'},
     {zh:'不祥的预兆',py:'bùxiáng de yùzhào',vn:'điềm gở'},
     {zh:'发病的预兆',py:'fābìng de yùzhào',vn:'dấu hiệu báo trước khi phát bệnh'}
   ],
   patterns:[
     {s:'……常常是有预兆的',m:'… thường là có điềm báo trước'},
     {s:'没有任何预兆，……就……',m:'Không hề báo trước, … đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi ốm, cơ thể thường có một số dấu hiệu báo trước, vì vậy nhất định đừng xem nhẹ chúng.',answer:'生病以前，身体往往会有一些预兆，所以千万别忽视它们。',answerPy:'Shēngbìng yǐqián, shēntǐ wǎngwǎng huì yǒu yìxiē yùzhào, suǒyǐ qiānwàn bié hūshì tāmen.',
      note:'往往: thường (theo quy luật); 千万别 + V: nhất định đừng ….',pair:'千万别……'},
     {promptLang:'vi',prompt:'Trận mưa lớn này đến mà chẳng có chút dấu hiệu báo trước nào.',answer:'这场大雨来得一点儿预兆都没有。',answerPy:'Zhè chǎng dàyǔ lái de yìdiǎnr yùzhào dōu méiyǒu.',
      note:'一点儿 + N + 都没有: không có chút … nào (phủ định tuyệt đối).',pair:'一点儿……都没有'}
   ]},

  {n:31,zh:'案例',py:'ànlì',pos:'Danh từ',vn:'trường hợp, ca',hv:'án lệ',em:'📁',lesson:1,
   explain:['Một trường hợp cụ thể, có thật, dùng làm ví dụ để phân tích, nghiên cứu (ca bệnh, vụ việc, trường hợp kinh doanh…).','Hay đi với: 典型, 成功, 真实; 案例分析. Khác tiếng Việt "án lệ" (bản án làm tiền lệ trong luật) — 案例 nghĩa rộng hơn nhiều.'],
   usage:'……的案例; 典型 / 成功 / 真实 + 案例; 分析案例; 案例分析.',
   collo:['典型案例','成功案例','案例分析','真实案例'],
   ex_zh:'对于心脏病突发致死的案例，如果能提前24小时监测到零星先兆，甚至可以挽救患者的生命。',ex_py:'Duìyú xīnzàngbìng tūfā zhìsǐ de ànlì, rúguǒ néng tíqián èrshísì xiǎoshí jiāncè dào língxīng xiānzhào, shènzhì kěyǐ wǎnjiù huànzhě de shēngmìng.',ex_vn:'Đối với những ca đột tử do bệnh tim, nếu có thể theo dõi phát hiện những dấu hiệu lẻ tẻ trước 24 giờ, thậm chí có thể cứu sống bệnh nhân.',
   exList:[
     {zh:'对于心脏病突发致死的案例，提前监测有可能挽救患者的生命。',py:'Duìyú xīnzàngbìng tūfā zhìsǐ de ànlì, tíqián jiāncè yǒu kěnéng wǎnjiù huànzhě de shēngmìng.',vn:'Đối với các ca đột tử do bệnh tim, theo dõi sớm có thể cứu sống bệnh nhân.'},
     {zh:'老师在课上分析了几个成功的案例。',py:'Lǎoshī zài kè shang fēnxīle jǐ ge chénggōng de ànlì.',vn:'Thầy phân tích mấy trường hợp thành công trong giờ học.'},
     {zh:'这是一个非常典型的案例，值得我们认真研究。',py:'Zhè shì yí ge fēicháng diǎnxíng de ànlì, zhíde wǒmen rènzhēn yánjiū.',vn:'Đây là một trường hợp rất điển hình, đáng để chúng ta nghiên cứu nghiêm túc.'}
   ],
   colloFull:[
     {zh:'典型案例',py:'diǎnxíng ànlì',vn:'trường hợp điển hình'},
     {zh:'成功案例',py:'chénggōng ànlì',vn:'trường hợp thành công'},
     {zh:'案例分析',py:'ànlì fēnxī',vn:'phân tích tình huống'},
     {zh:'真实案例',py:'zhēnshí ànlì',vn:'trường hợp có thật'},
     {zh:'……致死的案例',py:'…… zhìsǐ de ànlì',vn:'ca tử vong do …'}
   ],
   patterns:[
     {s:'对于 + ……的案例，……',m:'Đối với những trường hợp …, …'},
     {s:'分析 + 典型 / 成功 + 案例',m:'Phân tích trường hợp điển hình / thành công'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thông qua phân tích những trường hợp có thật này, chúng ta có thể rút ra nhiều bài học.',answer:'通过分析这些真实的案例，我们可以得到很多教训。',answerPy:'Tōngguò fēnxī zhèxiē zhēnshí de ànlì, wǒmen kěyǐ dédào hěn duō jiàoxun.',
      note:'通过……: thông qua … (phương thức, cách thức).',pair:'通过……'},
     {promptLang:'vi',prompt:'Trường hợp này tuy đặc biệt, nhưng cũng cho thấy tầm quan trọng của việc phát hiện sớm.',answer:'这个案例虽然特殊，却也说明了及早发现的重要性。',answerPy:'Zhège ànlì suīrán tèshū, què yě shuōmíngle jízǎo fāxiàn de zhòngyàoxìng.',
      note:'虽然……却……: tuy … nhưng lại … (却 là phó từ, đứng sau chủ ngữ).',pair:'虽然……却……'}
   ]},

  {n:32,zh:'零星',py:'língxīng',pos:'Tính từ',vn:'vụn vặt, nhỏ nhặt, lẻ tẻ',hv:'linh tinh',em:'✨',lesson:1,
   explain:['Ít ỏi, lẻ tẻ, rải rác, không tập trung: 零星先兆, 零星小雨, 零星的记忆.','Thường làm định ngữ. Cẩn thận: tiếng Việt "linh tinh" = lộn xộn, vớ vẩn — 零星 KHÔNG có nghĩa đó.'],
   usage:'零星的 + N; 零星小雨; 零星先兆; 零星几个 + N; 零零星星 (dạng lặp).',
   collo:['零星小雨','零星先兆','零星的记忆','零零星星'],
   ex_zh:'如果能提前24小时监测到零星先兆，甚至可以挽救患者的生命。',ex_py:'Rúguǒ néng tíqián èrshísì xiǎoshí jiāncè dào língxīng xiānzhào, shènzhì kěyǐ wǎnjiù huànzhě de shēngmìng.',ex_vn:'Nếu có thể theo dõi phát hiện những dấu hiệu lẻ tẻ trước 24 giờ, thậm chí có thể cứu sống bệnh nhân.',
   exList:[
     {zh:'零星先兆虽然不容易被发现，但大数据可以把它们找出来。',py:'Língxīng xiānzhào suīrán bù róngyì bèi fāxiàn, dàn dà shùjù kěyǐ bǎ tāmen zhǎo chūlái.',vn:'Những dấu hiệu lẻ tẻ tuy không dễ bị phát hiện, nhưng dữ liệu lớn có thể tìm ra chúng.'},
     {zh:'明天有零星小雨，出门记得带伞。',py:'Míngtiān yǒu língxīng xiǎoyǔ, chūmén jìde dài sǎn.',vn:'Ngày mai có mưa nhỏ rải rác, ra ngoài nhớ mang ô.'},
     {zh:'关于小时候的事，我只有一些零星的记忆。',py:'Guānyú xiǎoshíhou de shì, wǒ zhǐ yǒu yìxiē língxīng de jìyì.',vn:'Về chuyện hồi nhỏ, tôi chỉ còn vài mảnh ký ức vụn vặt.'}
   ],
   colloFull:[
     {zh:'零星小雨',py:'língxīng xiǎoyǔ',vn:'mưa nhỏ rải rác'},
     {zh:'零星先兆',py:'língxīng xiānzhào',vn:'dấu hiệu báo trước lẻ tẻ'},
     {zh:'零星的记忆',py:'língxīng de jìyì',vn:'ký ức vụn vặt'},
     {zh:'零零星星',py:'línglíngxīngxīng',vn:'lác đác, lẻ tẻ'},
     {zh:'零星几个',py:'língxīng jǐ ge',vn:'lác đác vài …'}
   ],
   patterns:[
     {s:'零星（的）+ N',m:'… lẻ tẻ, rải rác'},
     {s:'只有 + 零星几个 + N',m:'Chỉ có lác đác vài …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chỉ là mấy triệu chứng lẻ tẻ, nhưng bác sĩ vẫn rất coi trọng.',answer:'虽然只是一些零星的症状，但是医生仍然很重视。',answerPy:'Suīrán zhǐ shì yìxiē língxīng de zhèngzhuàng, dànshì yīshēng réngrán hěn zhòngshì.',
      note:'虽然……但是……仍然……: tuy … nhưng vẫn ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Dự báo thời tiết nói ngày mai có mưa nhỏ rải rác, cậu nhớ mang ô nhé.',answer:'天气预报说明天有零星小雨，你记得带伞。',answerPy:'Tiānqì yùbào shuō míngtiān yǒu língxīng xiǎoyǔ, nǐ jìde dài sǎn.',
      note:'记得 + V: nhớ làm … (lời dặn).',pair:'记得……'}
   ]},

  {n:33,zh:'挽救',py:'wǎnjiù',pos:'Động từ',vn:'cứu vãn, cứu vớt, cứu sống',hv:'vãn cứu',em:'🚑',lesson:1,
   explain:['Cứu khỏi tình trạng nguy hiểm, sắp mất: 挽救生命 (cứu sống), 挽救局面 (cứu vãn tình thế).','Đối tượng: 生命, 患者, 局面, 婚姻, 友谊…; hay đi với 无法 / 难以 khi không cứu được nữa.'],
   usage:'挽救 + 生命 / 患者 / 局面 / 友谊; 无法挽救; 及时挽救; 得到挽救.',
   collo:['挽救生命','挽救患者','无法挽救','挽救局面'],
   ex_zh:'甚至可以挽救患者的生命。',ex_py:'Shènzhì kěyǐ wǎnjiù huànzhě de shēngmìng.',ex_vn:'Thậm chí có thể cứu sống bệnh nhân.',
   exList:[
     {zh:'对病人进行持续跟踪监测，可以消除疾病隐患，挽救患者生命。',py:'Duì bìngrén jìnxíng chíxù gēnzōng jiāncè, kěyǐ xiāochú jíbìng yǐnhuàn, wǎnjiù huànzhě shēngmìng.',vn:'Theo dõi giám sát bệnh nhân liên tục có thể loại bỏ hiểm hoạ bệnh tật, cứu sống người bệnh.'},
     {zh:'医生们抢救了三个小时，终于挽救了他的生命。',py:'Yīshēngmen qiǎngjiùle sān ge xiǎoshí, zhōngyú wǎnjiùle tā de shēngmìng.',vn:'Các bác sĩ cấp cứu suốt ba tiếng, cuối cùng đã cứu sống anh ấy.'},
     {zh:'如果早一点儿道歉，这段友谊也许还能挽救。',py:'Rúguǒ zǎo yìdiǎnr dàoqiàn, zhè duàn yǒuyì yěxǔ hái néng wǎnjiù.',vn:'Nếu xin lỗi sớm hơn một chút, tình bạn này có lẽ vẫn còn cứu vãn được.'}
   ],
   colloFull:[
     {zh:'挽救生命',py:'wǎnjiù shēngmìng',vn:'cứu sống'},
     {zh:'挽救患者',py:'wǎnjiù huànzhě',vn:'cứu người bệnh'},
     {zh:'无法挽救',py:'wúfǎ wǎnjiù',vn:'không thể cứu vãn'},
     {zh:'挽救局面',py:'wǎnjiù júmiàn',vn:'cứu vãn tình thế'},
     {zh:'及时挽救',py:'jíshí wǎnjiù',vn:'cứu kịp thời'}
   ],
   patterns:[
     {s:'挽救 + （某人的）生命',m:'Cứu sống (ai đó)'},
     {s:'……已经无法挽救了',m:'… đã không thể cứu vãn được nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'May mà đưa đi viện kịp thời, tính mạng của ông cụ mới được cứu.',answer:'幸亏送医及时，老人的生命才被挽救了。',answerPy:'Xìngkuī sòng yī jíshí, lǎorén de shēngmìng cái bèi wǎnjiù le.',
      note:'幸亏……才……: may mà … nên mới … (nhờ điều kiện thuận lợi mà tránh được điều xấu).',pair:'幸亏……才……'},
     {promptLang:'vi',prompt:'Dù chỉ còn một tia hy vọng, các bác sĩ cũng sẽ dốc toàn lực cứu chữa bệnh nhân.',answer:'哪怕只有一线希望，医生们也会全力挽救病人。',answerPy:'Nǎpà zhǐ yǒu yí xiàn xīwàng, yīshēngmen yě huì quánlì wǎnjiù bìngrén.',
      note:'哪怕……也……: dù cho … cũng … (giả thiết nhượng bộ, khẩu ngữ hơn 即使).',pair:'哪怕……也……'}
   ]},

  {n:34,zh:'细致',py:'xìzhì',pos:'Tính từ',vn:'tỉ mỉ, kỹ lưỡng',hv:'tế trí',em:'🔬',lesson:1,
   explain:['Chu đáo, kỹ càng đến từng chi tiết nhỏ: dùng cho công việc, quan sát, phân tích và tính cách người làm việc.','Hay đi với: 监测, 观察, 分析, 工作, 周到; cụm 细致入微 (tỉ mỉ đến từng li). Gần nghĩa 仔细 (仔细 thiên về thái độ khi làm một việc).'],
   usage:'细致的 + 监测 / 观察 / 分析 / 工作; 细致地 + V; 工作细致; 细致入微; 细致周到.',
   collo:['细致的监测','细致地观察','工作细致','细致入微'],
   ex_zh:'利用大数据对一个病种进行细致的监测，意义是不言而喻的。',ex_py:'Lìyòng dà shùjù duì yí ge bìngzhǒng jìnxíng xìzhì de jiāncè, yìyì shì bùyán\'éryù de.',ex_vn:'Dùng dữ liệu lớn để giám sát tỉ mỉ một loại bệnh, ý nghĩa của việc đó không nói cũng hiểu.',
   exList:[
     {zh:'利用大数据对病种进行细致的监测，能够及早发现问题。',py:'Lìyòng dà shùjù duì bìngzhǒng jìnxíng xìzhì de jiāncè, nénggòu jízǎo fāxiàn wèntí.',vn:'Dùng dữ liệu lớn để giám sát tỉ mỉ các loại bệnh, có thể phát hiện vấn đề sớm.'},
     {zh:'她做事非常细致，从来不出差错。',py:'Tā zuò shì fēicháng xìzhì, cónglái bù chū chācuò.',vn:'Cô ấy làm việc rất tỉ mỉ, chưa bao giờ xảy ra sai sót.'},
     {zh:'老师细致地批改了每一篇作文。',py:'Lǎoshī xìzhì de pīgǎile měi yì piān zuòwén.',vn:'Thầy giáo chấm chữa từng bài văn một cách kỹ lưỡng.'}
   ],
   colloFull:[
     {zh:'细致的监测',py:'xìzhì de jiāncè',vn:'giám sát tỉ mỉ'},
     {zh:'细致地观察',py:'xìzhì de guānchá',vn:'quan sát kỹ lưỡng'},
     {zh:'工作细致',py:'gōngzuò xìzhì',vn:'làm việc tỉ mỉ'},
     {zh:'细致入微',py:'xìzhì rù wēi',vn:'tỉ mỉ đến từng li từng tí'},
     {zh:'细致周到',py:'xìzhì zhōudào',vn:'tỉ mỉ chu đáo'}
   ],
   patterns:[
     {s:'对 + N + 进行细致的 + 监测 / 分析',m:'Tiến hành giám sát / phân tích tỉ mỉ đối với …'},
     {s:'细致地 + V',m:'… một cách tỉ mỉ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy làm việc vô cùng tỉ mỉ, từ trước tới nay chưa từng xảy ra sai sót.',answer:'她工作非常细致，从来没有出过差错。',answerPy:'Tā gōngzuò fēicháng xìzhì, cónglái méiyǒu chūguo chācuò.',
      note:'从来没（有）+ V + 过: chưa từng bao giờ ….',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Nếu cậu quan sát tỉ mỉ hơn một chút thì đã không mắc lỗi như thế này.',answer:'要是你观察得再细致一点儿，就不会出这样的错了。',answerPy:'Yàoshi nǐ guānchá de zài xìzhì yìdiǎnr, jiù bú huì chū zhèyàng de cuò le.',
      note:'要是……就……: nếu … thì …; V + 得 + 再 + Adj + 一点儿 = … hơn chút nữa.',pair:'要是……就……'}
   ]},


  {n:35,zh:'不言而喻',py:'bùyán\'éryù',pos:'Thành ngữ',vn:'không nói cũng hiểu',hv:'bất ngôn nhi dụ',em:'🤐',lesson:1,
   explain:['Không cần nói ra cũng hiểu được (喻 = hiểu rõ) — điều quá rõ ràng.','Hay làm vị ngữ: ……是不言而喻的; ……不言而喻; hoặc định ngữ: 不言而喻的道理. Văn viết.'],
   usage:'……（的意义 / 重要性）是不言而喻的; ……不言而喻; 不言而喻的道理.',
   collo:['意义不言而喻','是不言而喻的','不言而喻的道理','重要性不言而喻'],
   ex_zh:'利用大数据对一个病种进行细致的监测，意义是不言而喻的。',ex_py:'Lìyòng dà shùjù duì yí ge bìngzhǒng jìnxíng xìzhì de jiāncè, yìyì shì bùyán\'éryù de.',ex_vn:'Dùng dữ liệu lớn để giám sát tỉ mỉ một loại bệnh, ý nghĩa của việc đó không nói cũng hiểu.',
   exList:[
     {zh:'利用大数据对病种进行细致的监测，意义是不言而喻的。',py:'Lìyòng dà shùjù duì bìngzhǒng jìnxíng xìzhì de jiāncè, yìyì shì bùyán\'éryù de.',vn:'Dùng dữ liệu lớn giám sát tỉ mỉ các loại bệnh, ý nghĩa của nó không nói cũng hiểu.'},
     {zh:'他为学校做出的贡献不言而喻，大家心里都清楚。',py:'Tā wèi xuéxiào zuòchū de gòngxiàn bùyán\'éryù, dàjiā xīnli dōu qīngchu.',vn:'Những đóng góp của thầy cho nhà trường không cần nói ra, mọi người trong lòng đều rõ.'},
     {zh:'健康的重要性是不言而喻的。',py:'Jiànkāng de zhòngyàoxìng shì bùyán\'éryù de.',vn:'Tầm quan trọng của sức khoẻ là điều không nói cũng hiểu.'}
   ],
   colloFull:[
     {zh:'意义不言而喻',py:'yìyì bùyán\'éryù',vn:'ý nghĩa không nói cũng hiểu'},
     {zh:'是不言而喻的',py:'shì bùyán\'éryù de',vn:'là điều hiển nhiên'},
     {zh:'不言而喻的道理',py:'bùyán\'éryù de dàolǐ',vn:'đạo lý hiển nhiên'},
     {zh:'重要性不言而喻',py:'zhòngyàoxìng bùyán\'éryù',vn:'tầm quan trọng không cần bàn cãi'},
     {zh:'贡献不言而喻',py:'gòngxiàn bùyán\'éryù',vn:'đóng góp ai cũng rõ'}
   ],
   patterns:[
     {s:'……的 + 意义 / 重要性 + 是不言而喻的',m:'Ý nghĩa / tầm quan trọng của … là điều hiển nhiên'},
     {s:'……不言而喻，……',m:'… không nói cũng hiểu, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tầm quan trọng của việc đọc sách là điều hiển nhiên, thế nhưng không ít người lại không dành thời gian đọc sách.',answer:'读书的重要性不言而喻，然而不少人却没有时间读书。',answerPy:'Dúshū de zhòngyàoxìng bùyán\'éryù, rán\'ér bù shǎo rén què méiyǒu shíjiān dúshū.',
      note:'然而……却……: thế nhưng … lại … (chuyển ý, văn viết).',pair:'然而……却……'},
     {promptLang:'vi',prompt:'Cậu ấy tuy không nói gì, nhưng ý của cậu ấy thì ai cũng hiểu.',answer:'他虽然什么也没说，但他的意思不言而喻。',answerPy:'Tā suīrán shénme yě méi shuō, dàn tā de yìsi bùyán\'éryù.',
      note:'什么也没 + V: không … gì cả (đại từ nghi vấn phiếm chỉ + 也 + phủ định).',pair:'什么也没……'}
   ]},

  {n:36,zh:'血压',py:'xuèyā',pos:'Danh từ',vn:'huyết áp',hv:'huyết áp',em:'🩸',lesson:1,
   explain:['Áp lực của máu lên thành mạch máu — chỉ số sức khoẻ quan trọng.','Hay gặp: 高血压 (cao huyết áp), 低血压, 量血压 (đo huyết áp), 血压高 / 正常. Chú ý 血 ở đây đọc xuè (khẩu ngữ đơn lẻ có khi đọc xiě: 流血了 liú xiě le).'],
   usage:'量血压; 血压 + 高 / 低 / 正常; 高血压患者; 控制血压.',
   collo:['高血压','量血压','血压正常','控制血压'],
   ex_zh:'中国血压有问题的人不在少数。',ex_py:'Zhōngguó xuèyā yǒu wèntí de rén bú zài shǎoshù.',ex_vn:'Ở Trung Quốc, số người có vấn đề về huyết áp không phải là ít.',
   exList:[
     {zh:'中国血压有问题的人不在少数，其中高血压患者有1亿人。',py:'Zhōngguó xuèyā yǒu wèntí de rén bú zài shǎoshù, qízhōng gāoxuèyā huànzhě yǒu yí yì rén.',vn:'Ở Trung Quốc số người có vấn đề về huyết áp không ít, trong đó bệnh nhân cao huyết áp có tới 100 triệu người.'},
     {zh:'奶奶每天早上都要量一次血压。',py:'Nǎinai měi tiān zǎoshang dōu yào liáng yí cì xuèyā.',vn:'Sáng nào bà cũng đo huyết áp một lần.'},
     {zh:'医生说他血压有点儿高，要少吃盐。',py:'Yīshēng shuō tā xuèyā yǒudiǎnr gāo, yào shǎo chī yán.',vn:'Bác sĩ nói huyết áp của ông hơi cao, phải ăn ít muối.'}
   ],
   colloFull:[
     {zh:'高血压',py:'gāoxuèyā',vn:'cao huyết áp'},
     {zh:'量血压',py:'liáng xuèyā',vn:'đo huyết áp'},
     {zh:'血压正常',py:'xuèyā zhèngcháng',vn:'huyết áp bình thường'},
     {zh:'控制血压',py:'kòngzhì xuèyā',vn:'kiểm soát huyết áp'},
     {zh:'高血压患者',py:'gāoxuèyā huànzhě',vn:'bệnh nhân cao huyết áp'}
   ],
   patterns:[
     {s:'量（一次）血压',m:'Đo huyết áp (một lần)'},
     {s:'血压 + 有点儿高 / 偏低 / 正常',m:'Huyết áp hơi cao / hơi thấp / bình thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để kiểm soát huyết áp, ông nội ngày nào cũng kiên trì đi bộ nửa tiếng.',answer:'为了控制血压，爷爷每天都坚持散步半个小时。',answerPy:'Wèile kòngzhì xuèyā, yéye měi tiān dōu jiānchí sànbù bàn ge xiǎoshí.',
      note:'坚持 + V: kiên trì làm …; thời lượng 半个小时 đứng sau động từ.',pair:'坚持 + V'},
     {promptLang:'vi',prompt:'Cao huyết áp nếu không chú ý thì có thể gây ra nhiều bệnh khác.',answer:'高血压如果不注意，可能会引起很多别的疾病。',answerPy:'Gāoxuèyā rúguǒ bú zhùyì, kěnéng huì yǐnqǐ hěn duō bié de jíbìng.',
      note:'Chủ đề + 如果……，可能会……: nếu … thì có thể …; 引起 = gây ra.',pair:'如果……'}
   ]},

  {n:37,zh:'先进',py:'xiānjìn',pos:'Tính từ',vn:'tiên tiến',hv:'tiên tiến',em:'🚀',lesson:1,
   explain:['Đi trước, ở trình độ cao hơn mức chung, đáng làm gương: 先进技术, 先进器材, 先进经验.','Còn làm danh từ: người / đơn vị tiên tiến (学习先进). Trái nghĩa: 落后, 陈旧 (từ 16).'],
   usage:'先进的 + 技术 / 器材 / 设备 / 经验; 先进水平; 学习先进; 世界先进水平.',
   collo:['先进器材','先进技术','先进经验','先进水平'],
   ex_zh:'如果这2亿人都能通过“高血压手表”或者什么先进器材进行监测……',ex_py:'Rúguǒ zhè liǎng yì rén dōu néng tōngguò "gāoxuèyā shǒubiǎo" huòzhě shénme xiānjìn qìcái jìnxíng jiāncè ……',ex_vn:'Nếu 200 triệu người này đều có thể được theo dõi qua "đồng hồ đo huyết áp" hoặc thiết bị tiên tiến nào đó …',
   exList:[
     {zh:'通过先进器材对病人进行监测，将会是非常有前景的尝试。',py:'Tōngguò xiānjìn qìcái duì bìngrén jìnxíng jiāncè, jiāng huì shì fēicháng yǒu qiánjǐng de chángshì.',vn:'Giám sát bệnh nhân bằng thiết bị tiên tiến sẽ là một thử nghiệm rất có triển vọng.'},
     {zh:'这家医院引进了很多先进的医疗设备。',py:'Zhè jiā yīyuàn yǐnjìnle hěn duō xiānjìn de yīliáo shèbèi.',vn:'Bệnh viện này đã nhập về nhiều thiết bị y tế tiên tiến.'},
     {zh:'我们应该虚心学习别人的先进经验。',py:'Wǒmen yīnggāi xūxīn xuéxí biérén de xiānjìn jīngyàn.',vn:'Chúng ta nên khiêm tốn học hỏi kinh nghiệm tiên tiến của người khác.'}
   ],
   colloFull:[
     {zh:'先进器材',py:'xiānjìn qìcái',vn:'thiết bị tiên tiến'},
     {zh:'先进技术',py:'xiānjìn jìshù',vn:'kỹ thuật tiên tiến'},
     {zh:'先进经验',py:'xiānjìn jīngyàn',vn:'kinh nghiệm tiên tiến'},
     {zh:'先进水平',py:'xiānjìn shuǐpíng',vn:'trình độ tiên tiến'},
     {zh:'学习先进',py:'xuéxí xiānjìn',vn:'học tập gương tiên tiến'}
   ],
   patterns:[
     {s:'先进的 + 技术 / 设备 / 经验',m:'Kỹ thuật / thiết bị / kinh nghiệm tiên tiến'},
     {s:'达到 + （世界）先进水平',m:'Đạt trình độ tiên tiến (của thế giới)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi không ngừng học hỏi kinh nghiệm tiên tiến, chúng ta mới có thể tiến bộ nhanh hơn.',answer:'只有不断学习先进经验，我们才能进步得更快。',answerPy:'Zhǐyǒu búduàn xuéxí xiānjìn jīngyàn, wǒmen cái néng jìnbù de gèng kuài.',
      note:'只有……才……: chỉ có … mới …; V + 得 + 更 + Adj.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Thiết bị dù tiên tiến đến mấy, nếu không biết dùng thì cũng chẳng có tác dụng gì.',answer:'设备再先进，如果不会用，也没有什么用。',answerPy:'Shèbèi zài xiānjìn, rúguǒ bú huì yòng, yě méiyǒu shénme yòng.',
      note:'再 + Adj，也……: dù … đến mấy cũng ….',pair:'再……也……'}
   ]},

  {n:38,zh:'器材',py:'qìcái',pos:'Danh từ',vn:'dụng cụ, thiết bị, khí tài',hv:'khí tài',em:'🏋️',lesson:1,
   explain:['Dụng cụ, thiết bị dùng cho một lĩnh vực (danh từ tập hợp, không đếm từng cái bằng 个).','Hay đi với: 体育器材, 医疗器材, 摄影器材, 先进器材. Lượng từ: 一批 / 一套 / 一些.'],
   usage:'体育 / 医疗 / 摄影 + 器材; 先进器材; 一批 / 一套 + 器材.',
   collo:['先进器材','体育器材','医疗器材','摄影器材'],
   ex_zh:'如果这2亿人都能通过“高血压手表”或者什么先进器材进行监测……',ex_py:'Rúguǒ zhè liǎng yì rén dōu néng tōngguò "gāoxuèyā shǒubiǎo" huòzhě shénme xiānjìn qìcái jìnxíng jiāncè ……',ex_vn:'Nếu 200 triệu người này đều có thể được theo dõi qua "đồng hồ đo huyết áp" hoặc thiết bị tiên tiến nào đó …',
   exList:[
     {zh:'病人可以通过“高血压手表”等先进器材进行监测。',py:'Bìngrén kěyǐ tōngguò "gāoxuèyā shǒubiǎo" děng xiānjìn qìcái jìnxíng jiāncè.',vn:'Bệnh nhân có thể được theo dõi qua "đồng hồ đo huyết áp" và các thiết bị tiên tiến khác.'},
     {zh:'学校新买了一批体育器材。',py:'Xuéxiào xīn mǎile yì pī tǐyù qìcái.',vn:'Nhà trường mới mua một lô dụng cụ thể thao.'},
     {zh:'他背着沉重的摄影器材，走遍了全国的自然保护区。',py:'Tā bēizhe chénzhòng de shèyǐng qìcái, zǒubiànle quánguó de zìrán bǎohùqū.',vn:'Anh ấy đeo trên lưng bộ thiết bị chụp ảnh nặng trĩu, đi khắp các khu bảo tồn thiên nhiên trong cả nước.'}
   ],
   colloFull:[
     {zh:'先进器材',py:'xiānjìn qìcái',vn:'thiết bị tiên tiến'},
     {zh:'体育器材',py:'tǐyù qìcái',vn:'dụng cụ thể thao'},
     {zh:'医疗器材',py:'yīliáo qìcái',vn:'thiết bị y tế'},
     {zh:'摄影器材',py:'shèyǐng qìcái',vn:'thiết bị chụp ảnh'},
     {zh:'一批器材',py:'yì pī qìcái',vn:'một lô thiết bị'}
   ],
   patterns:[
     {s:'通过 + ……器材 + 进行 + V',m:'Tiến hành … bằng thiết bị …'},
     {s:'一批 / 一套 + ……器材',m:'Một lô / một bộ thiết bị …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dùng xong dụng cụ thể thao, nhớ đặt lại chỗ cũ.',answer:'用完体育器材以后，记得放回原处。',answerPy:'Yòngwán tǐyù qìcái yǐhòu, jìde fànghuí yuánchù.',
      note:'V + 回 + nơi chốn: bổ ngữ xu hướng "về lại"; 记得 + V = nhớ làm ….',pair:'V + 回'},
     {promptLang:'vi',prompt:'Muốn chụp được ảnh đẹp thì không chỉ cần thiết bị tốt, mà còn cần sự kiên nhẫn.',answer:'要想拍出好照片，不仅需要好的器材，还需要耐心。',answerPy:'Yào xiǎng pāichū hǎo zhàopiàn, bùjǐn xūyào hǎo de qìcái, hái xūyào nàixīn.',
      note:'要想……: muốn … (nêu mục đích); 不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:39,zh:'人为',py:'rénwéi',pos:'Tính từ',vn:'nhân tạo, do con người làm ra',hv:'nhân vi',em:'👤',lesson:1,
   explain:['Do con người tạo ra, do con người tác động (đối lập với 自然 / 天然). Trong bài: 人为管理 = quản lý có sự can thiệp chủ động của con người.','Hay gặp: 人为因素, 人为破坏, ……是人为造成的 (thường nói về hậu quả xấu). Cẩn thận: 为 đọc wéi, không đọc wèi.'],
   usage:'人为 + 管理 / 因素 / 破坏; ……是人为造成的; 人为地 + V.',
   collo:['人为管理','人为因素','人为破坏','人为造成的'],
   ex_zh:'对他们的健康进行人为管理，将会是非常有前景的尝试。',ex_py:'Duì tāmen de jiànkāng jìnxíng rénwéi guǎnlǐ, jiāng huì shì fēicháng yǒu qiánjǐng de chángshì.',ex_vn:'Chủ động quản lý sức khoẻ của họ sẽ là một thử nghiệm rất có triển vọng.',
   exList:[
     {zh:'通过先进器材对病人的健康进行人为管理，将会是有前景的尝试。',py:'Tōngguò xiānjìn qìcái duì bìngrén de jiànkāng jìnxíng rénwéi guǎnlǐ, jiāng huì shì yǒu qiánjǐng de chángshì.',vn:'Dùng thiết bị tiên tiến để chủ động quản lý sức khoẻ bệnh nhân sẽ là một thử nghiệm có triển vọng.'},
     {zh:'这场火灾是人为造成的，不是意外。',py:'Zhè chǎng huǒzāi shì rénwéi zàochéng de, bú shì yìwài.',vn:'Vụ hoả hoạn này là do con người gây ra, không phải tai nạn.'},
     {zh:'很多环境问题都是由人为因素引起的。',py:'Hěn duō huánjìng wèntí dōu shì yóu rénwéi yīnsù yǐnqǐ de.',vn:'Nhiều vấn đề môi trường đều do yếu tố con người gây ra.'}
   ],
   colloFull:[
     {zh:'人为管理',py:'rénwéi guǎnlǐ',vn:'quản lý có can thiệp của con người'},
     {zh:'人为因素',py:'rénwéi yīnsù',vn:'yếu tố con người'},
     {zh:'人为破坏',py:'rénwéi pòhuài',vn:'con người phá hoại'},
     {zh:'人为造成的',py:'rénwéi zàochéng de',vn:'do con người gây ra'},
     {zh:'人为地制造',py:'rénwéi de zhìzào',vn:'cố tình tạo ra'}
   ],
   patterns:[
     {s:'……是人为造成的',m:'… là do con người gây ra'},
     {s:'对 + N + 进行人为管理',m:'Chủ động quản lý …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua điều tra, cảnh sát phát hiện vụ cháy rừng này là do con người gây ra.',answer:'经过调查，警方发现这场森林火灾是人为造成的。',answerPy:'Jīngguò diàochá, jǐngfāng fāxiàn zhè chǎng sēnlín huǒzāi shì rénwéi zàochéng de.',
      note:'经过 + quá trình: qua …; 是……的 nhấn mạnh nguyên nhân.',pair:'经过……'},
     {promptLang:'vi',prompt:'Nhiều loài động vật tuyệt chủng không phải vì thiên tai, mà là do con người phá hoại.',answer:'很多动物灭绝不是因为自然灾害，而是由于人为破坏。',answerPy:'Hěn duō dòngwù mièjué bú shì yīnwèi zìrán zāihài, ér shì yóuyú rénwéi pòhuài.',
      note:'不是……而是……: không phải … mà là ….',pair:'不是……而是……'}
   ]},

  {n:40,zh:'前景',py:'qiánjǐng',pos:'Danh từ',vn:'triển vọng, tiền đồ',hv:'tiền cảnh',em:'🌅',lesson:1,
   explain:['Viễn cảnh sẽ xuất hiện trong tương lai, khả năng phát triển: 发展前景, 前景广阔, 有前景.','Bẫy Hán–Việt: "tiền cảnh" tiếng Việt là cảnh phía trước (foreground); 前景 thường dùng nghĩa "triển vọng".'],
   usage:'（很 / 非常）有前景; 前景 + 广阔 / 美好 / 光明; 发展前景; 市场前景.',
   collo:['有前景','前景广阔','发展前景','前景美好'],
   ex_zh:'对他们的健康进行人为管理，将会是非常有前景的尝试。',ex_py:'Duì tāmen de jiànkāng jìnxíng rénwéi guǎnlǐ, jiāng huì shì fēicháng yǒu qiánjǐng de chángshì.',ex_vn:'Chủ động quản lý sức khoẻ của họ sẽ là một thử nghiệm rất có triển vọng.',
   exList:[
     {zh:'利用大数据管理高血压患者的健康，是非常有前景的尝试。',py:'Lìyòng dà shùjù guǎnlǐ gāoxuèyā huànzhě de jiànkāng, shì fēicháng yǒu qiánjǐng de chángshì.',vn:'Dùng dữ liệu lớn để quản lý sức khoẻ bệnh nhân cao huyết áp là một thử nghiệm rất có triển vọng.'},
     {zh:'人工智能的发展前景十分广阔。',py:'Réngōng zhìnéng de fāzhǎn qiánjǐng shífēn guǎngkuò.',vn:'Triển vọng phát triển của trí tuệ nhân tạo vô cùng rộng mở.'},
     {zh:'这个专业很有前景，毕业后比较好找工作。',py:'Zhège zhuānyè hěn yǒu qiánjǐng, bìyè hòu bǐjiào hǎo zhǎo gōngzuò.',vn:'Ngành này rất có triển vọng, tốt nghiệp xong khá dễ tìm việc.'}
   ],
   colloFull:[
     {zh:'有前景',py:'yǒu qiánjǐng',vn:'có triển vọng'},
     {zh:'前景广阔',py:'qiánjǐng guǎngkuò',vn:'triển vọng rộng mở'},
     {zh:'发展前景',py:'fāzhǎn qiánjǐng',vn:'triển vọng phát triển'},
     {zh:'前景美好',py:'qiánjǐng měihǎo',vn:'tương lai tươi đẹp'},
     {zh:'市场前景',py:'shìchǎng qiánjǐng',vn:'triển vọng thị trường'}
   ],
   patterns:[
     {s:'……（非常）有前景',m:'… (rất) có triển vọng'},
     {s:'……的发展前景 + 十分广阔',m:'Triển vọng phát triển của … rất rộng mở'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ mong tôi chọn một ngành có triển vọng, còn tôi chỉ muốn học điều mình thích.',answer:'父母希望我选一个有前景的专业，而我只想学自己喜欢的。',answerPy:'Fùmǔ xīwàng wǒ xuǎn yí ge yǒu qiánjǐng de zhuānyè, ér wǒ zhǐ xiǎng xué zìjǐ xǐhuan de.',
      note:'而: còn, trong khi đó (nối hai vế đối lập).',pair:'……，而……'},
     {promptLang:'vi',prompt:'Đứng trước viễn cảnh tươi đẹp như vậy, chúng ta càng phải nỗ lực gấp bội.',answer:'面对这么美好的前景，我们更要加倍努力。',answerPy:'Miànduì zhème měihǎo de qiánjǐng, wǒmen gèng yào jiābèi nǔlì.',
      note:'面对……: đối mặt với, đứng trước …; 更要 = càng phải.',pair:'面对……'}
   ]},

  {n:41,zh:'临床',py:'línchuáng',pos:'Động từ',vn:'chẩn đoán và chữa trị trực tiếp, lâm sàng',hv:'lâm sàng',em:'🏥',lesson:1,
   explain:['(Y học) trực tiếp khám và chữa bệnh cho người bệnh (临 = đến gần, 床 = giường bệnh).','Thường làm định ngữ: 临床经验, 临床医学, 临床试验, 临床医生; trong bài làm chủ ngữ: 临床会尽量减少对人的依赖.'],
   usage:'临床 + 经验 / 医学 / 试验 / 医生; 用于临床; 临床上…….',
   collo:['临床经验','临床医学','临床试验','临床医生'],
   ex_zh:'在未来医疗模式中，临床会尽量减少对人的依赖。',ex_py:'Zài wèilái yīliáo móshì zhōng, línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài.',ex_vn:'Trong mô hình y tế tương lai, việc khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người.',
   exList:[
     {zh:'临床会尽量减少对人的依赖，因为医生是切切实实的稀缺资源。',py:'Línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài, yīnwèi yīshēng shì qièqiè shíshí de xīquē zīyuán.',vn:'Khám chữa lâm sàng sẽ cố gắng giảm phụ thuộc vào con người, vì bác sĩ thực sự là nguồn lực khan hiếm.'},
     {zh:'这位医生有三十年的临床经验。',py:'Zhè wèi yīshēng yǒu sānshí nián de línchuáng jīngyàn.',vn:'Vị bác sĩ này có ba mươi năm kinh nghiệm lâm sàng.'},
     {zh:'这种新药还在进行临床试验。',py:'Zhè zhǒng xīnyào hái zài jìnxíng línchuáng shìyàn.',vn:'Loại thuốc mới này vẫn đang thử nghiệm lâm sàng.'}
   ],
   colloFull:[
     {zh:'临床经验',py:'línchuáng jīngyàn',vn:'kinh nghiệm lâm sàng'},
     {zh:'临床医学',py:'línchuáng yīxué',vn:'y học lâm sàng'},
     {zh:'临床试验',py:'línchuáng shìyàn',vn:'thử nghiệm lâm sàng'},
     {zh:'临床医生',py:'línchuáng yīshēng',vn:'bác sĩ lâm sàng'},
     {zh:'用于临床',py:'yòngyú línchuáng',vn:'ứng dụng vào lâm sàng'}
   ],
   patterns:[
     {s:'临床 + 经验 / 试验 / 医学',m:'Kinh nghiệm / thử nghiệm / y học lâm sàng'},
     {s:'N + 用于临床',m:'… được đưa vào ứng dụng lâm sàng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loại thuốc mới này chỉ khi thử nghiệm lâm sàng thành công mới có thể đưa ra thị trường.',answer:'这种新药只有经过临床试验成功，才能上市。',answerPy:'Zhè zhǒng xīnyào zhǐyǒu jīngguò línchuáng shìyàn chénggōng, cái néng shàngshì.',
      note:'只有……才……: chỉ khi … mới … (điều kiện bắt buộc).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Là một bác sĩ lâm sàng, mỗi ngày anh ấy phải khám cho hơn năm mươi bệnh nhân.',answer:'作为一名临床医生，他每天要看五十多个病人。',answerPy:'Zuòwéi yì míng línchuáng yīshēng, tā měi tiān yào kàn wǔshí duō ge bìngrén.',
      note:'作为……: với tư cách là …; 看病人 = khám bệnh nhân.',pair:'作为……'}
   ]},

  {n:42,zh:'依赖',py:'yīlài',pos:'Động từ',vn:'nương tựa, dựa vào, ỷ lại',hv:'y lại',em:'🧸',lesson:1,
   explain:['Dựa vào người / vật khác, không thể tự lập: 依赖父母, 依赖手机.','Làm danh từ: 对……的依赖. Sắc thái trung tính đến tiêu cực (过分依赖). Gần nghĩa 依靠 (trung tính, "nhờ vào" — 依靠自己的努力).'],
   usage:'依赖 + N; 对 + N + 的依赖; 过分 / 过度依赖; 减少 / 摆脱 + 依赖; 互相依赖.',
   collo:['依赖父母','对……的依赖','过分依赖','减少依赖'],
   ex_zh:'在未来医疗模式中，临床会尽量减少对人的依赖。',ex_py:'Zài wèilái yīliáo móshì zhōng, línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài.',ex_vn:'Trong mô hình y tế tương lai, việc khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người.',
   exList:[
     {zh:'成年以后要独立生活，不能再依赖父母了。',py:'Chéngnián yǐhòu yào dúlì shēnghuó, bù néng zài yīlài fùmǔ le.',vn:'Trưởng thành rồi thì phải sống tự lập, không thể dựa dẫm vào bố mẹ nữa.'},
     {zh:'现在很多学生过分依赖手机，一离开手机就不知道干什么。',py:'Xiànzài hěn duō xuésheng guòfèn yīlài shǒujī, yì líkāi shǒujī jiù bù zhīdào gàn shénme.',vn:'Bây giờ nhiều học sinh quá phụ thuộc vào điện thoại, hễ rời điện thoại là không biết làm gì.'},
     {zh:'临床会尽量减少对人的依赖。',py:'Línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài.',vn:'Khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người.'}
   ],
   colloFull:[
     {zh:'依赖父母',py:'yīlài fùmǔ',vn:'dựa dẫm bố mẹ'},
     {zh:'对……的依赖',py:'duì …… de yīlài',vn:'sự phụ thuộc vào …'},
     {zh:'过分依赖',py:'guòfèn yīlài',vn:'quá phụ thuộc'},
     {zh:'减少依赖',py:'jiǎnshǎo yīlài',vn:'giảm phụ thuộc'},
     {zh:'互相依赖',py:'hùxiāng yīlài',vn:'phụ thuộc lẫn nhau'}
   ],
   patterns:[
     {s:'不能（再）依赖 + N',m:'Không thể (còn) dựa dẫm vào …'},
     {s:'减少 / 摆脱 + 对 + N + 的依赖',m:'Giảm / thoát khỏi sự phụ thuộc vào …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu đã là sinh viên đại học rồi, không thể chuyện gì cũng dựa dẫm vào bố mẹ nữa.',answer:'你已经是大学生了，不能什么事都依赖父母了。',answerPy:'Nǐ yǐjīng shì dàxuéshēng le, bù néng shénme shì dōu yīlài fùmǔ le.',
      note:'什么 + N + 都……: bất cứ … nào cũng … (đại từ nghi vấn phiếm chỉ).',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Càng dựa vào máy tính, khả năng viết tay của chúng ta càng kém đi.',answer:'越依赖电脑，我们的书写能力就越差。',answerPy:'Yuè yīlài diànnǎo, wǒmen de shūxiě nénglì jiù yuè chà.',
      note:'越……（就）越……: càng … càng ….',pair:'越……越……'}
   ]},

  {n:43,zh:'切切实实',py:'qièqiè shíshí',pos:'Tính từ (dạng lặp)',vn:'thực sự, chắc chắn (dạng gốc 切实: thiết thực, thực sự)',hv:'thiết thiết thực thực',em:'🎯',lesson:1,
   explain:['Dạng lặp AABB của tính từ 切实 (qièshí — thiết thực, thực sự, sát với thực tế), nhấn mạnh hơn: "thực sự, rõ ràng không chút nghi ngờ". Chú ý 切 ở đây đọc qiè (không đọc qiē — cắt).','切实 hay đi với 可行 (切实可行 = thiết thực khả thi), 解决, 做到, 加强; 切切实实 hay làm định ngữ (切切实实的……) hoặc trạng ngữ (切切实实地 + V).'],
   usage:'切切实实的 + N; 切切实实地 + V; 切实可行; 切实 + 解决 / 做到 / 加强.',
   collo:['切切实实的','切切实实地','切实可行','切实解决'],
   ex_zh:'医生是切切实实的稀缺资源。',ex_py:'Yīshēng shì qièqiè shíshí de xīquē zīyuán.',ex_vn:'Bác sĩ thực sự là nguồn lực khan hiếm.',
   exList:[
     {zh:'临床会尽量减少对人的依赖，因为医生是切切实实的稀缺资源。',py:'Línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài, yīnwèi yīshēng shì qièqiè shíshí de xīquē zīyuán.',vn:'Khám chữa lâm sàng sẽ cố gắng giảm phụ thuộc vào con người, vì bác sĩ thực sự là nguồn lực khan hiếm.'},
     {zh:'在各方面人才的协助下，他们制定了切实可行的方案。',py:'Zài gè fāngmiàn réncái de xiézhù xià, tāmen zhìdìngle qièshí kěxíng de fāng\'àn.',vn:'Với sự hỗ trợ của nhân tài các mặt, họ đã xây dựng một phương án thiết thực, khả thi.'},
     {zh:'我们要切切实实地为同学们做几件好事。',py:'Wǒmen yào qièqiè shíshí de wèi tóngxuémen zuò jǐ jiàn hǎoshì.',vn:'Chúng ta phải thực sự làm vài việc tốt cho các bạn học.'}
   ],
   colloFull:[
     {zh:'切切实实的',py:'qièqiè shíshí de',vn:'… thực sự'},
     {zh:'切切实实地',py:'qièqiè shíshí de',vn:'một cách thực sự'},
     {zh:'切实可行',py:'qièshí kěxíng',vn:'thiết thực khả thi'},
     {zh:'切实解决',py:'qièshí jiějué',vn:'giải quyết thiết thực'},
     {zh:'切实做到',py:'qièshí zuòdào',vn:'thực sự làm được'}
   ],
   patterns:[
     {s:'N + 是切切实实的 + N',m:'… thực sự là …'},
     {s:'切实可行的 + 方案 / 计划 / 办法',m:'Phương án / kế hoạch / cách làm thiết thực khả thi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không thể chỉ nói suông, mà phải thực sự giải quyết vấn đề.',answer:'我们不能只说空话，而要切切实实地解决问题。',answerPy:'Wǒmen bù néng zhǐ shuō kōnghuà, ér yào qièqiè shíshí de jiějué wèntí.',
      note:'不能……，而要……: không thể …, mà phải …; tính từ lặp AABB + 地 làm trạng ngữ.',pair:'不能……而要……'},
     {promptLang:'vi',prompt:'Kế hoạch này tuy đơn giản nhưng thiết thực khả thi, tôi tán thành.',answer:'这个计划虽然简单，但是切实可行，我赞成。',answerPy:'Zhège jìhuà suīrán jiǎndān, dànshì qièshí kěxíng, wǒ zànchéng.',
      note:'虽然……但是……: tuy … nhưng …; 切实可行 là cụm cố định.',pair:'虽然……但是……'}
   ]},

  {n:44,zh:'优越',py:'yōuyuè',pos:'Tính từ',vn:'ưu việt, hơn hẳn',hv:'ưu việt',em:'🌟',lesson:1,
   explain:['Tốt hơn hẳn những cái khác cùng loại: 优越之处 (điểm ưu việt), 条件优越, 地理位置优越.','Cụm hay gặp: 优越感 (cảm giác mình hơn người — thường mang ý chê). Khác 优秀 (dùng khen người, thành tích).'],
   usage:'……的优越之处（就）在于……; 条件 / 位置 + 优越; 优越的条件; 优越感.',
   collo:['优越之处','条件优越','地理位置优越','优越感'],
   ex_zh:'大数据的优越之处就在于，能够大大提高医生的工作效率。',ex_py:'Dà shùjù de yōuyuè zhī chù jiù zàiyú, nénggòu dàdà tígāo yīshēng de gōngzuò xiàolǜ.',ex_vn:'Điểm ưu việt của dữ liệu lớn chính là ở chỗ có thể nâng cao đáng kể hiệu suất làm việc của bác sĩ.',
   exList:[
     {zh:'大数据的优越之处就在于，能够将医生的能量发挥到最大。',py:'Dà shùjù de yōuyuè zhī chù jiù zàiyú, nénggòu jiāng yīshēng de néngliàng fāhuī dào zuì dà.',vn:'Điểm ưu việt của dữ liệu lớn chính là có thể phát huy tối đa năng lực của bác sĩ.'},
     {zh:'这里地理位置优越，交通十分方便。',py:'Zhèli dìlǐ wèizhì yōuyuè, jiāotōng shífēn fāngbiàn.',vn:'Nơi đây vị trí địa lý thuận lợi, giao thông vô cùng tiện lợi.'},
     {zh:'他家条件优越，可他从来不在同学面前炫耀。',py:'Tā jiā tiáojiàn yōuyuè, kě tā cónglái bú zài tóngxué miànqián xuànyào.',vn:'Nhà cậu ấy điều kiện rất tốt, nhưng cậu ấy chưa bao giờ khoe khoang trước bạn bè.'}
   ],
   colloFull:[
     {zh:'优越之处',py:'yōuyuè zhī chù',vn:'điểm ưu việt'},
     {zh:'条件优越',py:'tiáojiàn yōuyuè',vn:'điều kiện ưu việt'},
     {zh:'地理位置优越',py:'dìlǐ wèizhì yōuyuè',vn:'vị trí địa lý thuận lợi'},
     {zh:'优越感',py:'yōuyuègǎn',vn:'cảm giác hơn người'},
     {zh:'优越的环境',py:'yōuyuè de huánjìng',vn:'môi trường tốt'}
   ],
   patterns:[
     {s:'N + 的优越之处（就）在于 + ……',m:'Điểm ưu việt của … là ở chỗ …'},
     {s:'N + 条件 / 位置 + 优越',m:'… có điều kiện / vị trí thuận lợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính vì vị trí địa lý thuận lợi mà thành phố này mới phát triển nhanh như vậy.',answer:'正因为地理位置优越，这座城市才发展得这么快。',answerPy:'Zhèng yīnwèi dìlǐ wèizhì yōuyuè, zhè zuò chéngshì cái fāzhǎn de zhème kuài.',
      note:'正因为……才……: chính vì … mới … (nhấn nguyên nhân).',pair:'正因为……才……'},
     {promptLang:'vi',prompt:'Cậu ấy chưa bao giờ vì gia đình có điều kiện mà coi thường người khác.',answer:'他从来不因为家庭条件优越而看不起别人。',answerPy:'Tā cónglái bù yīnwèi jiātíng tiáojiàn yōuyuè ér kàn bu qǐ biérén.',
      note:'因为……而……: vì … mà … (văn viết); phủ định 不 đặt trước 因为.',pair:'因为……而……'}
   ]},

  {n:45,zh:'维护',py:'wéihù',pos:'Động từ',vn:'giữ gìn, duy trì, bảo vệ',hv:'duy hộ',em:'🛡️',lesson:1,
   explain:['Giữ gìn, bảo vệ cho khỏi bị tổn hại: 维护健康, 维护秩序, 维护权益, 维护关系.','Còn nghĩa bảo trì (维护设备 / 网站). So với 维持 (bài 19 — giữ cho tiếp tục tồn tại): 维护 nhấn "bảo vệ khỏi bị phá hỏng".'],
   usage:'维护 + 健康 / 秩序 / 权益 / 关系 / 环境; 健康维护; 自觉维护.',
   collo:['健康维护','维护秩序','维护权益','维护关系'],
   ex_zh:'大数据的健康维护不是得了病之后再采集数据，而是平时就把人所有的生理数据攒起来。',ex_py:'Dà shùjù de jiànkāng wéihù bú shì déle bìng zhīhòu zài cǎijí shùjù, ér shì píngshí jiù bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái.',ex_vn:'Việc giữ gìn sức khoẻ bằng dữ liệu lớn không phải là đợi mắc bệnh rồi mới thu thập dữ liệu, mà là ngay lúc bình thường đã tích luỹ mọi dữ liệu sinh lý của con người.',
   exList:[
     {zh:'大数据的健康维护不是得了病之后再采集数据。',py:'Dà shùjù de jiànkāng wéihù bú shì déle bìng zhīhòu zài cǎijí shùjù.',vn:'Việc giữ gìn sức khoẻ bằng dữ liệu lớn không phải là mắc bệnh rồi mới thu thập dữ liệu.'},
     {zh:'大家都要自觉维护公共秩序。',py:'Dàjiā dōu yào zìjué wéihù gōnggòng zhìxù.',vn:'Mọi người đều phải tự giác giữ gìn trật tự công cộng.'},
     {zh:'消费者要学会维护自己的合法权益。',py:'Xiāofèizhě yào xuéhuì wéihù zìjǐ de héfǎ quányì.',vn:'Người tiêu dùng phải học cách bảo vệ quyền lợi hợp pháp của mình.'}
   ],
   colloFull:[
     {zh:'健康维护',py:'jiànkāng wéihù',vn:'giữ gìn sức khoẻ'},
     {zh:'维护秩序',py:'wéihù zhìxù',vn:'giữ gìn trật tự'},
     {zh:'维护权益',py:'wéihù quányì',vn:'bảo vệ quyền lợi'},
     {zh:'维护关系',py:'wéihù guānxi',vn:'giữ gìn mối quan hệ'},
     {zh:'维护环境',py:'wéihù huánjìng',vn:'giữ gìn môi trường'}
   ],
   patterns:[
     {s:'（自觉）维护 + 秩序 / 环境',m:'(Tự giác) giữ gìn trật tự / môi trường'},
     {s:'维护 + 自己的 + 权益 / 利益',m:'Bảo vệ quyền lợi / lợi ích của mình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giữ gìn tình bạn không phải chuyện của một người, mà cần cả hai bên cùng cố gắng.',answer:'维护友谊不是一个人的事，而是需要双方共同努力。',answerPy:'Wéihù yǒuyì bú shì yí ge rén de shì, ér shì xūyào shuāngfāng gòngtóng nǔlì.',
      note:'不是……而是……: không phải … mà là ….',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Để giữ gìn môi trường trường học, mỗi người chúng ta đều nên bắt đầu từ chính mình.',answer:'为了维护校园环境，我们每个人都应该从自己做起。',answerPy:'Wèile wéihù xiàoyuán huánjìng, wǒmen měi ge rén dōu yīnggāi cóng zìjǐ zuòqǐ.',
      note:'从……做起: bắt đầu làm từ …; 为了 nêu mục đích.',pair:'从……做起'}
   ]},

  {n:46,zh:'协助',py:'xiézhù',pos:'Động từ',vn:'giúp đỡ, trợ giúp, hỗ trợ',hv:'hiệp trợ',em:'🤲',lesson:1,
   explain:['Giúp đỡ, phối hợp để người khác (thường là người chủ trì) hoàn thành việc — trang trọng hơn 帮助, người được giúp giữ vai trò chính.','Hay dùng: 在……的协助下, 协助 + người + V, 协助警方 / 调查.'],
   usage:'在 + N + 的协助下; 协助 + người + V; 协助 + 调查 / 完成 / 处理.',
   collo:['在……的协助下','协助完成','协助调查','协助老师'],
   ex_zh:'平时就在一些特殊设备的协助下，把人所有的生理数据攒起来。',ex_py:'Píngshí jiù zài yìxiē tèshū shèbèi de xiézhù xià, bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái.',ex_vn:'Ngay lúc bình thường, nhờ sự hỗ trợ của một số thiết bị đặc biệt, tích luỹ toàn bộ dữ liệu sinh lý của con người.',
   exList:[
     {zh:'在各方面人才的协助下，他们制定了切实可行的方案。',py:'Zài gè fāngmiàn réncái de xiézhù xià, tāmen zhìdìngle qièshí kěxíng de fāng\'àn.',vn:'Với sự hỗ trợ của nhân tài các mặt, họ đã xây dựng một phương án thiết thực khả thi.'},
     {zh:'他协助老师完成了这次活动的组织工作。',py:'Tā xiézhù lǎoshī wánchéngle zhè cì huódòng de zǔzhī gōngzuò.',vn:'Cậu ấy đã hỗ trợ thầy giáo hoàn thành công tác tổ chức hoạt động lần này.'},
     {zh:'如果有线索，请及时协助警方调查。',py:'Rúguǒ yǒu xiànsuǒ, qǐng jíshí xiézhù jǐngfāng diàochá.',vn:'Nếu có manh mối, xin kịp thời hỗ trợ cảnh sát điều tra.'}
   ],
   colloFull:[
     {zh:'在……的协助下',py:'zài …… de xiézhù xià',vn:'với sự hỗ trợ của …'},
     {zh:'协助完成',py:'xiézhù wánchéng',vn:'hỗ trợ hoàn thành'},
     {zh:'协助调查',py:'xiézhù diàochá',vn:'hỗ trợ điều tra'},
     {zh:'协助老师',py:'xiézhù lǎoshī',vn:'giúp thầy cô'},
     {zh:'互相协助',py:'hùxiāng xiézhù',vn:'hỗ trợ lẫn nhau'}
   ],
   patterns:[
     {s:'在 + N + 的协助下，……',m:'Với sự hỗ trợ của …, …'},
     {s:'A + 协助 + B + V',m:'A giúp B làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Với sự giúp đỡ của các bạn cùng lớp, cậu ấy đã nhanh chóng theo kịp tiến độ học tập.',answer:'在同学们的协助下，他很快就跟上了学习进度。',answerPy:'Zài tóngxuémen de xiézhù xià, tā hěn kuài jiù gēnshàngle xuéxí jìndù.',
      note:'在……下: với / dưới (điều kiện) …; 跟上 = theo kịp.',pair:'在……下'},
     {promptLang:'vi',prompt:'Nếu cần tôi hỗ trợ, cậu cứ nói với tôi bất cứ lúc nào.',answer:'如果需要我协助，你随时告诉我。',answerPy:'Rúguǒ xūyào wǒ xiézhù, nǐ suíshí gàosu wǒ.',
      note:'随时: bất cứ lúc nào; 如果 nêu giả thiết.',pair:'随时'}
   ]},

  {n:47,zh:'生理',py:'shēnglǐ',pos:'Danh từ',vn:'sinh lý',hv:'sinh lý',em:'🫀',lesson:1,
   explain:['Các hoạt động sống, chức năng của cơ thể (hô hấp, tuần hoàn, tiêu hoá…); còn là môn sinh lý học.','Hay làm định ngữ: 生理数据, 生理结构 (bài 19), 生理需要; hay đi cặp với 心理: 生理和心理.'],
   usage:'生理 + 数据 / 结构 / 需要 / 特点 / 变化; 生理和心理; 在生理上…….',
   collo:['生理数据','生理结构','生理需要','生理和心理'],
   ex_zh:'在一些特殊设备的协助下，把人所有的生理数据攒起来。',ex_py:'Zài yìxiē tèshū shèbèi de xiézhù xià, bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái.',ex_vn:'Nhờ sự hỗ trợ của một số thiết bị đặc biệt, tích luỹ toàn bộ dữ liệu sinh lý của con người.',
   exList:[
     {zh:'把人所有的生理数据攒起来，分析处理后发给医生。',py:'Bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái, fēnxī chǔlǐ hòu fā gěi yīshēng.',vn:'Tích luỹ toàn bộ dữ liệu sinh lý của con người, phân tích xử lý xong thì gửi cho bác sĩ.'},
     {zh:'青春期的孩子在生理和心理上都会发生很大的变化。',py:'Qīngchūnqī de háizi zài shēnglǐ hé xīnlǐ shang dōu huì fāshēng hěn dà de biànhuà.',vn:'Trẻ ở tuổi dậy thì có những thay đổi lớn cả về sinh lý lẫn tâm lý.'},
     {zh:'吃饭、睡觉都是人最基本的生理需要。',py:'Chī fàn, shuìjiào dōu shì rén zuì jīběn de shēnglǐ xūyào.',vn:'Ăn và ngủ đều là nhu cầu sinh lý cơ bản nhất của con người.'}
   ],
   colloFull:[
     {zh:'生理数据',py:'shēnglǐ shùjù',vn:'dữ liệu sinh lý'},
     {zh:'生理结构',py:'shēnglǐ jiégòu',vn:'cấu tạo sinh lý'},
     {zh:'生理需要',py:'shēnglǐ xūyào',vn:'nhu cầu sinh lý'},
     {zh:'生理和心理',py:'shēnglǐ hé xīnlǐ',vn:'sinh lý và tâm lý'},
     {zh:'生理变化',py:'shēnglǐ biànhuà',vn:'thay đổi sinh lý'}
   ],
   patterns:[
     {s:'在生理和心理上 + ……',m:'Về mặt sinh lý và tâm lý …'},
     {s:'生理 + 数据 / 需要 / 变化',m:'Dữ liệu / nhu cầu / thay đổi sinh lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở tuổi dậy thì, không chỉ cơ thể mà tâm lý cũng thay đổi rất nhiều.',answer:'在青春期，不仅生理会发生变化，心理也会发生很大的变化。',answerPy:'Zài qīngchūnqī, bùjǐn shēnglǐ huì fāshēng biànhuà, xīnlǐ yě huì fāshēng hěn dà de biànhuà.',
      note:'不仅……也……: không chỉ … mà … cũng ….',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ngủ là nhu cầu sinh lý của con người, vì vậy đừng thức khuya nữa.',answer:'睡眠是人的生理需要，所以别再熬夜了。',answerPy:'Shuìmián shì rén de shēnglǐ xūyào, suǒyǐ bié zài áoyè le.',
      note:'别再……了: đừng … nữa (khuyên dừng một việc đang làm).',pair:'别再……了'}
   ]},

  {n:48,zh:'攒',py:'zǎn',pos:'Động từ',vn:'tích lũy, gom lại, dành dụm',hv:'toàn',em:'🐷',lesson:1,
   explain:['Gom góp dần dần từng ít một cho nhiều lên: 攒钱 (dành dụm tiền), 攒数据, 攒经验.','Khẩu ngữ; hay đi với bổ ngữ: 攒起来, 攒够, 攒下. Chú ý đọc zǎn (cuán là nghĩa khác: tụ tập).'],
   usage:'攒 + 钱 / 数据 / 经验; 把……攒起来; 攒够了……再……; 攒了 + thời gian + 的 + N.',
   collo:['攒钱','攒起来','攒够','攒经验'],
   ex_zh:'把人所有的生理数据攒起来。',ex_py:'Bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái.',ex_vn:'Tích luỹ toàn bộ dữ liệu sinh lý của con người.',
   exList:[
     {zh:'平时就在特殊设备的协助下，把人所有的生理数据攒起来。',py:'Píngshí jiù zài tèshū shèbèi de xiézhù xià, bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái.',vn:'Ngay lúc bình thường, nhờ thiết bị đặc biệt, tích luỹ toàn bộ dữ liệu sinh lý của con người.'},
     {zh:'他攒了半年的零花钱，给妈妈买了一件生日礼物。',py:'Tā zǎnle bàn nián de línghuāqián, gěi māma mǎile yí jiàn shēngrì lǐwù.',vn:'Cậu ấy dành dụm tiền tiêu vặt nửa năm, mua cho mẹ một món quà sinh nhật.'},
     {zh:'我把平时遇到的问题攒起来，周末一起问老师。',py:'Wǒ bǎ píngshí yùdào de wèntí zǎn qǐlái, zhōumò yìqǐ wèn lǎoshī.',vn:'Tôi gom những câu hỏi gặp phải ngày thường lại, cuối tuần hỏi thầy một thể.'}
   ],
   colloFull:[
     {zh:'攒钱',py:'zǎn qián',vn:'dành dụm tiền'},
     {zh:'攒起来',py:'zǎn qǐlái',vn:'gom lại, tích luỹ lại'},
     {zh:'攒够',py:'zǎngòu',vn:'dành dụm đủ'},
     {zh:'攒经验',py:'zǎn jīngyàn',vn:'tích luỹ kinh nghiệm'},
     {zh:'攒数据',py:'zǎn shùjù',vn:'gom dữ liệu'}
   ],
   patterns:[
     {s:'把 + N + 攒起来',m:'Gom / tích luỹ … lại'},
     {s:'攒够 + 钱 + 再 + V',m:'Dành dụm đủ tiền rồi mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi định dành dụm đủ tiền rồi mới đi du lịch Trung Quốc.',answer:'我打算把钱攒够了再去中国旅游。',answerPy:'Wǒ dǎsuàn bǎ qián zǎngòule zài qù Zhōngguó lǚyóu.',
      note:'V1 + 了 + 再 + V2: làm xong V1 rồi mới V2; câu 把 với bổ ngữ kết quả 够.',pair:'……了再……'},
     {promptLang:'vi',prompt:'Tuy tiền tiêu vặt không nhiều, cô ấy vẫn mỗi tháng để dành một ít.',answer:'尽管零花钱不多，她还是每个月都攒一点儿。',answerPy:'Jǐnguǎn línghuāqián bù duō, tā háishi měi ge yuè dōu zǎn yìdiǎnr.',
      note:'尽管……还是……: tuy … vẫn ….',pair:'尽管……还是……'}
   ]},

  {n:49,zh:'可行',py:'kěxíng',pos:'Tính từ',vn:'khả thi, có thể thực hiện được',hv:'khả hành',em:'👍',lesson:1,
   explain:['Có thể làm được, thực hiện được: dùng cho phương án, kế hoạch, cách làm, dịch vụ.','Hay gặp: 切实可行 (thiết thực khả thi), 是否可行, 可行性 (tính khả thi); phủ định: 不可行 / 行不通.'],
   usage:'（切实）可行的 + 方案 / 计划 / 办法; ……是否可行; 变得可行; 可行性.',
   collo:['切实可行','是否可行','可行性','可行的方案'],
   ex_zh:'远程医疗服务将会变得可行而且优质。',ex_py:'Yuǎnchéng yīliáo fúwù jiāng huì biàn de kěxíng érqiě yōuzhì.',ex_vn:'Dịch vụ y tế từ xa sẽ trở nên khả thi và chất lượng cao.',
   exList:[
     {zh:'把数据分析处理后发给医生，远程医疗服务将会变得可行而且优质。',py:'Bǎ shùjù fēnxī chǔlǐ hòu fā gěi yīshēng, yuǎnchéng yīliáo fúwù jiāng huì biàn de kěxíng érqiě yōuzhì.',vn:'Phân tích xử lý dữ liệu xong gửi cho bác sĩ, dịch vụ y tế từ xa sẽ trở nên khả thi và chất lượng cao.'},
     {zh:'这个方案切实可行，我同意。',py:'Zhège fāng\'àn qièshí kěxíng, wǒ tóngyì.',vn:'Phương án này thiết thực khả thi, tôi đồng ý.'},
     {zh:'我们先研究一下这个计划是否可行。',py:'Wǒmen xiān yánjiū yíxià zhège jìhuà shìfǒu kěxíng.',vn:'Chúng ta hãy nghiên cứu xem kế hoạch này có khả thi hay không đã.'}
   ],
   colloFull:[
     {zh:'切实可行',py:'qièshí kěxíng',vn:'thiết thực khả thi'},
     {zh:'是否可行',py:'shìfǒu kěxíng',vn:'có khả thi hay không'},
     {zh:'可行性',py:'kěxíngxìng',vn:'tính khả thi'},
     {zh:'可行的方案',py:'kěxíng de fāng\'àn',vn:'phương án khả thi'},
     {zh:'变得可行',py:'biàn de kěxíng',vn:'trở nên khả thi'}
   ],
   patterns:[
     {s:'N + 是否可行',m:'… có khả thi hay không'},
     {s:'制定 + 切实可行的 + 方案 / 计划',m:'Xây dựng phương án / kế hoạch thiết thực khả thi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi quyết định, chúng ta phải phân tích xem kế hoạch này có khả thi hay không.',answer:'做决定之前，我们得分析一下这个计划是否可行。',answerPy:'Zuò juédìng zhīqián, wǒmen děi fēnxī yíxià zhège jìhuà shìfǒu kěxíng.',
      note:'是否 = có … hay không (văn viết của 是不是); 得 đọc děi = phải.',pair:'是否'},
     {promptLang:'vi',prompt:'Phương án này nghe thì rất hay, nhưng trên thực tế lại không khả thi.',answer:'这个方案听起来很好，实际上却不可行。',answerPy:'Zhège fāng\'àn tīng qǐlái hěn hǎo, shíjìshang què bù kěxíng.',
      note:'听起来…… 实际上却……: nghe thì …, thực tế lại ….',pair:'实际上……却……'}
   ]},

  {n:50,zh:'实事求是',py:'shíshì-qiúshì',pos:'Thành ngữ',vn:'thiết thực tìm kiếm bản chất vấn đề từ những thứ xác thực, thực sự cầu thị',hv:'thực sự cầu thị',em:'⚖️',lesson:1,
   explain:['Xuất phát từ sự thật (实事) để tìm ra chân lý, quy luật (求是) — tôn trọng sự thật, nói và làm đúng thực tế, không thổi phồng.','Hay dùng: 实事求是地讲 / 说 (nói một cách khách quan), 实事求是的态度, 坚持实事求是.'],
   usage:'实事求是地 + 讲 / 说 / 评价; 实事求是的 + 态度 / 精神; 做事要实事求是.',
   collo:['实事求是地讲','实事求是的态度','坚持实事求是','实事求是地评价'],
   ex_zh:'实事求是地讲，即便仅仅做到这一点，大数据为人类做出的贡献也远远超出了我们的期盼。',ex_py:'Shíshì-qiúshì de jiǎng, jíbiàn jǐnjǐn zuòdào zhè yì diǎn, dà shùjù wèi rénlèi zuòchū de gòngxiàn yě yuǎnyuǎn chāochūle wǒmen de qīpàn.',ex_vn:'Nói một cách khách quan, cho dù chỉ làm được điều này thôi, đóng góp của dữ liệu lớn cho nhân loại cũng đã vượt xa sự mong đợi của chúng ta.',
   exList:[
     {zh:'实事求是地讲，大数据为人类做出的贡献远远超出了我们的期盼。',py:'Shíshì-qiúshì de jiǎng, dà shùjù wèi rénlèi zuòchū de gòngxiàn yuǎnyuǎn chāochūle wǒmen de qīpàn.',vn:'Nói một cách khách quan, đóng góp của dữ liệu lớn cho nhân loại đã vượt xa sự mong đợi của chúng ta.'},
     {zh:'做科学研究一定要实事求是，不能弄虚作假。',py:'Zuò kēxué yánjiū yídìng yào shíshì-qiúshì, bù néng nòngxū-zuòjiǎ.',vn:'Làm nghiên cứu khoa học nhất định phải tôn trọng sự thật, không được gian dối.'},
     {zh:'实事求是地说，这次考试我确实没有准备好。',py:'Shíshì-qiúshì de shuō, zhè cì kǎoshì wǒ quèshí méiyǒu zhǔnbèi hǎo.',vn:'Nói thật lòng thì kỳ thi này tôi quả thực chưa chuẩn bị tốt.'}
   ],
   colloFull:[
     {zh:'实事求是地讲',py:'shíshì-qiúshì de jiǎng',vn:'nói một cách khách quan'},
     {zh:'实事求是的态度',py:'shíshì-qiúshì de tàidu',vn:'thái độ tôn trọng sự thật'},
     {zh:'坚持实事求是',py:'jiānchí shíshì-qiúshì',vn:'kiên trì thực sự cầu thị'},
     {zh:'实事求是地评价',py:'shíshì-qiúshì de píngjià',vn:'đánh giá khách quan'},
     {zh:'做事实事求是',py:'zuò shì shíshì-qiúshì',vn:'làm việc đúng thực tế'}
   ],
   patterns:[
     {s:'实事求是地 + 讲 / 说，……',m:'Nói một cách khách quan, …'},
     {s:'……要实事求是，不能……',m:'… phải tôn trọng sự thật, không được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói một cách khách quan, bài văn của cậu ấy viết hay hơn của tớ.',answer:'实事求是地说，他的作文比我的写得好。',answerPy:'Shíshì-qiúshì de shuō, tā de zuòwén bǐ wǒ de xiě de hǎo.',
      note:'Câu 比 với bổ ngữ trạng thái: A 比 B + V得 + Adj.',pair:'比'},
     {promptLang:'vi',prompt:'Cho dù kết quả không như ý, chúng ta cũng phải báo cáo đúng sự thật.',answer:'即使结果不理想，我们也要实事求是地汇报。',answerPy:'Jíshǐ jiéguǒ bù lǐxiǎng, wǒmen yě yào shíshì-qiúshì de huìbào.',
      note:'即使……也……: cho dù … cũng ….',pair:'即使……也……'}
   ]},

  {n:51,zh:'展望',py:'zhǎnwàng',pos:'Động từ',vn:'nhìn về tương lai, nhìn ra xa, dự báo',hv:'triển vọng',em:'🔭',lesson:1,
   explain:['Nhìn về phía xa, nhìn về tương lai để hình dung, dự tính — trang trọng, hay dùng trong phát biểu, bài viết.','Cụm quen thuộc: 展望未来, 回顾过去，展望未来. Bẫy Hán–Việt: "triển vọng" tiếng Việt là danh từ (= 前景); 展望 là ĐỘNG TỪ "nhìn về".'],
   usage:'展望 + 未来 / 新的一年; 回顾过去，展望未来; 展望未来，…….',
   collo:['展望未来','回顾过去，展望未来','展望新年','向前展望'],
   ex_zh:'展望未来，大数据将会走进我们生活的各个领域。',ex_py:'Zhǎnwàng wèilái, dà shùjù jiāng huì zǒujìn wǒmen shēnghuó de gè ge lǐngyù.',ex_vn:'Nhìn về tương lai, dữ liệu lớn sẽ đi vào mọi lĩnh vực trong cuộc sống của chúng ta.',
   exList:[
     {zh:'展望未来，有人这样定位大数据时代的意义：“拥有知识曾意味着掌握过去，现在它更意味着预测未来。”',py:'Zhǎnwàng wèilái, yǒu rén zhèyàng dìngwèi dà shùjù shídài de yìyì: "Yōngyǒu zhīshi céng yìwèizhe zhǎngwò guòqù, xiànzài tā gèng yìwèizhe yùcè wèilái."',vn:'Nhìn về tương lai, có người định vị ý nghĩa của thời đại dữ liệu lớn như thế này: "Sở hữu tri thức từng có nghĩa là nắm được quá khứ, còn bây giờ nó càng có nghĩa là dự đoán tương lai."'},
     {zh:'回顾过去，展望未来，我们充满了信心。',py:'Huígù guòqù, zhǎnwàng wèilái, wǒmen chōngmǎnle xìnxīn.',vn:'Nhìn lại quá khứ, hướng tới tương lai, chúng ta tràn đầy niềm tin.'},
     {zh:'在毕业典礼上，校长和我们一起展望了未来。',py:'Zài bìyè diǎnlǐ shang, xiàozhǎng hé wǒmen yìqǐ zhǎnwàngle wèilái.',vn:'Tại lễ tốt nghiệp, thầy hiệu trưởng cùng chúng tôi hướng về tương lai.'}
   ],
   colloFull:[
     {zh:'展望未来',py:'zhǎnwàng wèilái',vn:'nhìn về tương lai'},
     {zh:'回顾过去，展望未来',py:'huígù guòqù, zhǎnwàng wèilái',vn:'nhìn lại quá khứ, hướng tới tương lai'},
     {zh:'展望新年',py:'zhǎnwàng xīnnián',vn:'hướng tới năm mới'},
     {zh:'向前展望',py:'xiàng qián zhǎnwàng',vn:'nhìn về phía trước'},
     {zh:'展望前景',py:'zhǎnwàng qiánjǐng',vn:'nhìn về triển vọng'}
   ],
   patterns:[
     {s:'展望未来，……',m:'Nhìn về tương lai, …'},
     {s:'回顾过去，展望未来',m:'Nhìn lại quá khứ, hướng tới tương lai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn lại quá khứ, chúng ta đã đạt nhiều thành tích; nhìn về tương lai, chúng ta còn phải nỗ lực hơn nữa.',answer:'回顾过去，我们取得了很多成绩；展望未来，我们还要更加努力。',answerPy:'Huígù guòqù, wǒmen qǔdéle hěn duō chéngjì; zhǎnwàng wèilái, wǒmen hái yào gèngjiā nǔlì.',
      note:'Hai vế song song ngăn bằng dấu ；; 更加 + Adj / V = càng thêm.',pair:'更加……'},
     {promptLang:'vi',prompt:'Nhìn về tương lai, trí tuệ nhân tạo sẽ ngày càng đi sâu vào cuộc sống của chúng ta.',answer:'展望未来，人工智能将越来越深入我们的生活。',answerPy:'Zhǎnwàng wèilái, réngōng zhìnéng jiāng yuè lái yuè shēnrù wǒmen de shēnghuó.',
      note:'越来越 + Adj / V: ngày càng …; 将 = sẽ (văn viết).',pair:'越来越……'}
   ]}
];


var dialogData = [
  {scene:'课文 · 大数据时代',
   preQuiz:[
     {q:'有学者用什么例子来解释大数据？',opts:['乘飞机时选择航线','去医院看病吃药','买彩票'],ans:0},
     {q:'百度在2014年世界杯期间准确预测了什么？',opts:['巴西夺冠','阿根廷进入决赛','德国夺冠'],ans:2},
     {q:'百度的海量数据库共计涉及多少名球员？',opts:['987名','19972名','3.7万名'],ans:1},
     {q:'百度对前两届世界杯的淘汰赛进行结果验证，准确率接近多少？',opts:['50%','75%','100%'],ans:1},
     {q:'课文以什么为例说明大数据如何连接未来？',opts:['大数据与健康','大数据与足球','大数据与旅游'],ans:0},
     {q:'有了大数据，“医疗”和“健康”会怎么样？',opts:['完全分开','没有什么变化','相通相融'],ans:2},
     {q:'课文认为疾病的发生是怎样的？',opts:['完全是偶然的','很容易预料','不是偶然的，却无法预料'],ans:2},
     {q:'“健康大数据”要做的是什么事？',opts:['只帮人治病','找出病因，消除隐患','生产新药'],ans:1},
     {q:'对于心脏病突发致死的案例，提前多长时间监测到零星先兆，就可能挽救患者的生命？',opts:['24小时','12小时','48小时'],ans:0},
     {q:'中国高血压患者和潜在患者一共大约有多少人？',opts:['2亿','1亿','5000万'],ans:0},
     {q:'为什么临床要尽量减少对人的依赖？',opts:['医生工作不认真','病人不相信医生','医生是稀缺资源'],ans:2},
     {q:'课文最后说，拥有知识现在更意味着什么？',opts:['掌握过去','预测未来','改变过去'],ans:1}
   ],
   lines:[
    {sp:0,zh:'什么是大数据？枯燥的名词解释会让“科盲”们更加摸不着头脑，有学者以通俗的例子这样告诉我们，“每个人乘飞机时，都是自己选择航线，这是人的智慧，当人们的选择结果反映到具体的航程中来，就会有大量的数据被记录下来。我们根据这些原始的、堆积如山的记录梳理出的航程设计方案，将是最卓越的。这就是大数据的方法。”',
     py:'Shénme shì dà shùjù? Kūzào de míngcí jiěshì huì ràng "kēmáng" men gèngjiā mō bu zháo tóunǎo, yǒu xuézhě yǐ tōngsú de lìzi zhèyàng gàosu wǒmen, "Měi ge rén chéng fēijī shí, dōu shì zìjǐ xuǎnzé hángxiàn, zhè shì rén de zhìhuì, dāng rénmen de xuǎnzé jiéguǒ fǎnyìng dào jùtǐ de hángchéng zhōng lái, jiù huì yǒu dàliàng de shùjù bèi jìlù xiàlái. Wǒmen gēnjù zhèxiē yuánshǐ de, duījī rú shān de jìlù shūlǐ chū de hángchéng shèjì fāng\'àn, jiāng shì zuì zhuóyuè de. Zhè jiù shì dà shùjù de fāngfǎ."',
     vn:'Dữ liệu lớn là gì? Lời giải thích thuật ngữ khô khan sẽ khiến những người "mù khoa học" càng không hiểu đầu đuôi ra sao, nên có học giả đã dùng một ví dụ dễ hiểu để nói với chúng ta: "Mỗi người khi đi máy bay đều tự chọn đường bay, đó là trí tuệ của con người; khi kết quả lựa chọn của mọi người phản ánh vào những hành trình cụ thể, sẽ có một lượng lớn dữ liệu được ghi lại. Phương án thiết kế hành trình mà chúng ta sắp xếp ra dựa trên những ghi chép gốc chất cao như núi này sẽ là phương án ưu việt nhất. Đó chính là phương pháp của dữ liệu lớn."'},
    {sp:0,zh:'大数据有什么用？举例来说，百度在2014年世界杯期间准确预测德国夺冠，就是大数据的功劳。百度的做法是：派遣数据专家全面搜索5年来全世界987支球队3.7万场比赛的数据，并与彩票中心等占有大量数据的相关机构建立战略合作伙伴关系，将各类数据融入预测模型中。这一海量数据库共计涉及19972名球员和1.12亿条相关数据。之后，百度对2006年和2010年世界杯的淘汰赛进行了结果验证，准确率接近75%，这一结果令大数据研究者万分振奋。',
     py:'Dà shùjù yǒu shénme yòng? Jǔlì lái shuō, Bǎidù zài èr líng yī sì nián Shìjièbēi qījiān zhǔnquè yùcè Déguó duóguàn, jiù shì dà shùjù de gōngláo. Bǎidù de zuòfǎ shì: pàiqiǎn shùjù zhuānjiā quánmiàn sōusuǒ wǔ nián lái quán shìjiè jiǔbǎi bāshíqī zhī qiúduì sān diǎn qī wàn chǎng bǐsài de shùjù, bìng yǔ cǎipiào zhōngxīn děng zhànyǒu dàliàng shùjù de xiāngguān jīgòu jiànlì zhànlüè hézuò huǒbàn guānxi, jiāng gè lèi shùjù róngrù yùcè móxíng zhōng. Zhè yì hǎiliàng shùjùkù gòngjì shèjí yíwàn jiǔqiān jiǔbǎi qīshí\'èr míng qiúyuán hé yī diǎn yī èr yì tiáo xiāngguān shùjù. Zhīhòu, Bǎidù duì èr líng líng liù nián hé èr líng yī líng nián Shìjièbēi de táotàisài jìnxíngle jiéguǒ yànzhèng, zhǔnquèlǜ jiējìn bǎi fēn zhī qīshíwǔ, zhè yì jiéguǒ lìng dà shùjù yánjiūzhě wànfēn zhènfèn.',
     vn:'Dữ liệu lớn có tác dụng gì? Lấy ví dụ, trong thời gian World Cup 2014, Baidu đã dự đoán chính xác đội Đức vô địch — đó chính là công lao của dữ liệu lớn. Cách làm của Baidu là: cử chuyên gia dữ liệu tìm kiếm toàn diện dữ liệu của 37.000 trận đấu của 987 đội bóng trên toàn thế giới trong 5 năm qua, đồng thời thiết lập quan hệ đối tác hợp tác chiến lược với trung tâm xổ số và các cơ quan liên quan đang nắm giữ lượng lớn dữ liệu, đưa mọi loại dữ liệu vào mô hình dự báo. Kho dữ liệu khổng lồ này tổng cộng liên quan đến 19.972 cầu thủ và 112 triệu mẩu dữ liệu liên quan. Sau đó, Baidu tiến hành kiểm chứng kết quả đối với vòng loại trực tiếp của World Cup 2006 và 2010, tỉ lệ chính xác gần 75% — kết quả này khiến các nhà nghiên cứu dữ liệu lớn vô cùng phấn khởi.'},
    {sp:0,zh:'那么，大数据如何连接未来？我们不妨以大数据与健康为例加以说明。人们公认“医疗”和“健康”分属两个完全不同的领域，有了大数据，它们不仅相通相融，还有可能彻底扭转先前陈旧而被动的有病治病方式，改为积极防治，甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。',
     py:'Nàme, dà shùjù rúhé liánjiē wèilái? Wǒmen bùfáng yǐ dà shùjù yǔ jiànkāng wéi lì jiāyǐ shuōmíng. Rénmen gōngrèn "yīliáo" hé "jiànkāng" fēnshǔ liǎng ge wánquán bù tóng de lǐngyù, yǒule dà shùjù, tāmen bùjǐn xiāngtōng xiāngróng, hái yǒu kěnéng chèdǐ niǔzhuǎn xiānqián chénjiù ér bèidòng de yǒu bìng zhì bìng fāngshì, gǎi wéi jījí fángzhì, shènzhì bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bù xiǎnde huāngmiù le.',
     vn:'Vậy thì, dữ liệu lớn kết nối với tương lai như thế nào? Chúng ta thử lấy dữ liệu lớn và sức khoẻ làm ví dụ để giải thích. Mọi người đều thừa nhận "y tế" và "sức khoẻ" thuộc về hai lĩnh vực hoàn toàn khác nhau; có dữ liệu lớn, chúng không chỉ thông nhau, hoà vào nhau, mà còn có thể thay đổi triệt để cách "có bệnh mới chữa" lỗi thời và bị động trước kia, chuyển sang tích cực phòng và chữa bệnh; thậm chí ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.'},
    {sp:0,zh:'做进一步讨论之前，有一个前提必须交代清楚：每一次疾病的发生都不是偶然的，追究原因，无非是基因、遗传、环境、生活习惯等。虽非偶然，却无法预料，因此，传统医疗只能帮你治病。如果能找出病因呢？消除隐患就成为了可能，“健康大数据”就是要做这件事。比如心脏病，病人发病常常是有预兆的，如果对患者的心跳数据有足够长时间的持续积累，就可能预测病人发病的时机；对于心脏病突发致死的案例，如果能提前24小时监测到零星先兆，甚至可以挽救患者的生命。',
     py:'Zuò jìn yí bù tǎolùn zhīqián, yǒu yí ge qiántí bìxū jiāodài qīngchu: měi yí cì jíbìng de fāshēng dōu bú shì ǒurán de, zhuījiū yuányīn, wúfēi shì jīyīn, yíchuán, huánjìng, shēnghuó xíguàn děng. Suī fēi ǒurán, què wúfǎ yùliào, yīncǐ, chuántǒng yīliáo zhǐ néng bāng nǐ zhì bìng. Rúguǒ néng zhǎochū bìngyīn ne? Xiāochú yǐnhuàn jiù chéngwéile kěnéng, "jiànkāng dà shùjù" jiù shì yào zuò zhè jiàn shì. Bǐrú xīnzàngbìng, bìngrén fābìng chángcháng shì yǒu yùzhào de, rúguǒ duì huànzhě de xīntiào shùjù yǒu zúgòu cháng shíjiān de chíxù jīlěi, jiù kěnéng yùcè bìngrén fābìng de shíjī; duìyú xīnzàngbìng tūfā zhìsǐ de ànlì, rúguǒ néng tíqián èrshísì xiǎoshí jiāncè dào língxīng xiānzhào, shènzhì kěyǐ wǎnjiù huànzhě de shēngmìng.',
     vn:'Trước khi thảo luận sâu hơn, có một tiền đề cần phải nói rõ: mỗi lần bệnh tật phát sinh đều không phải ngẫu nhiên; truy nguyên nguyên nhân, chẳng qua là gen, di truyền, môi trường, thói quen sinh hoạt, v.v. Tuy không phải ngẫu nhiên nhưng lại không thể lường trước, vì vậy y tế truyền thống chỉ có thể giúp bạn chữa bệnh. Nếu có thể tìm ra nguyên nhân gây bệnh thì sao? Việc loại bỏ hiểm hoạ tiềm ẩn sẽ trở thành có thể, và "dữ liệu lớn sức khoẻ" chính là để làm việc này. Chẳng hạn bệnh tim: bệnh nhân lên cơn thường là có điềm báo trước; nếu tích luỹ liên tục dữ liệu nhịp tim của bệnh nhân trong một thời gian đủ dài thì có thể dự đoán thời điểm bệnh nhân lên cơn; đối với những ca đột tử do bệnh tim, nếu có thể theo dõi phát hiện những dấu hiệu lẻ tẻ trước 24 giờ, thậm chí có thể cứu sống bệnh nhân.'},
    {sp:0,zh:'利用大数据对一个病种进行细致的监测，意义是不言而喻的。中国血压有问题的人不在少数，其中高血压患者有1亿人，潜在患者还有1亿人，如果这2亿人都能通过“高血压手表”或者什么先进器材进行监测，对他们的健康进行人为管理，将会是非常有前景的尝试。',
     py:'Lìyòng dà shùjù duì yí ge bìngzhǒng jìnxíng xìzhì de jiāncè, yìyì shì bùyán\'éryù de. Zhōngguó xuèyā yǒu wèntí de rén bú zài shǎoshù, qízhōng gāoxuèyā huànzhě yǒu yí yì rén, qiánzài huànzhě hái yǒu yí yì rén, rúguǒ zhè liǎng yì rén dōu néng tōngguò "gāoxuèyā shǒubiǎo" huòzhě shénme xiānjìn qìcái jìnxíng jiāncè, duì tāmen de jiànkāng jìnxíng rénwéi guǎnlǐ, jiāng huì shì fēicháng yǒu qiánjǐng de chángshì.',
     vn:'Dùng dữ liệu lớn để giám sát tỉ mỉ một loại bệnh, ý nghĩa của việc đó thì không nói cũng hiểu. Ở Trung Quốc, số người có vấn đề về huyết áp không phải là ít: trong đó bệnh nhân cao huyết áp có 100 triệu người, bệnh nhân tiềm ẩn còn có 100 triệu người nữa. Nếu 200 triệu người này đều có thể được theo dõi bằng "đồng hồ đo huyết áp" hay một thiết bị tiên tiến nào đó, sức khoẻ của họ được con người chủ động quản lý, thì đó sẽ là một thử nghiệm rất có triển vọng.'},
    {sp:0,zh:'在未来医疗模式中，临床会尽量减少对人的依赖，因为医生是切切实实的稀缺资源，大数据的优越之处就在于，能够大大提高医生的工作效率，将医生的能量发挥到最大。因为大数据的健康维护不是得了病之后再采集数据，而是平时就在一些特殊设备的协助下，把人所有的生理数据攒起来，对其进行分析处理后，发给医生，远程医疗服务将会变得可行而且优质。实事求是地讲，即便仅仅做到这一点，大数据为人类做出的贡献也远远超出了我们的期盼。',
     py:'Zài wèilái yīliáo móshì zhōng, línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài, yīnwèi yīshēng shì qièqiè shíshí de xīquē zīyuán, dà shùjù de yōuyuè zhī chù jiù zàiyú, nénggòu dàdà tígāo yīshēng de gōngzuò xiàolǜ, jiāng yīshēng de néngliàng fāhuī dào zuì dà. Yīnwèi dà shùjù de jiànkāng wéihù bú shì déle bìng zhīhòu zài cǎijí shùjù, ér shì píngshí jiù zài yìxiē tèshū shèbèi de xiézhù xià, bǎ rén suǒyǒu de shēnglǐ shùjù zǎn qǐlái, duì qí jìnxíng fēnxī chǔlǐ hòu, fā gěi yīshēng, yuǎnchéng yīliáo fúwù jiāng huì biàn de kěxíng érqiě yōuzhì. Shíshì-qiúshì de jiǎng, jíbiàn jǐnjǐn zuòdào zhè yì diǎn, dà shùjù wèi rénlèi zuòchū de gòngxiàn yě yuǎnyuǎn chāochūle wǒmen de qīpàn.',
     vn:'Trong mô hình y tế tương lai, việc khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người, vì bác sĩ thực sự là nguồn lực khan hiếm; điểm ưu việt của dữ liệu lớn chính là ở chỗ có thể nâng cao đáng kể hiệu suất làm việc của bác sĩ, phát huy tối đa năng lực của bác sĩ. Bởi vì việc giữ gìn sức khoẻ bằng dữ liệu lớn không phải là đợi mắc bệnh rồi mới thu thập dữ liệu, mà là ngay lúc bình thường, nhờ sự hỗ trợ của một số thiết bị đặc biệt, tích luỹ toàn bộ dữ liệu sinh lý của con người, phân tích xử lý xong thì gửi cho bác sĩ — dịch vụ y tế từ xa sẽ trở nên khả thi và chất lượng cao. Nói một cách khách quan, cho dù chỉ làm được điều này thôi, đóng góp của dữ liệu lớn cho nhân loại cũng đã vượt xa sự mong đợi của chúng ta.'},
    {sp:0,zh:'展望未来，大数据将会走进我们生活的各个领域，有人这样定位大数据时代的意义：“拥有知识曾意味着掌握过去，现在它更意味着预测未来。”',
     py:'Zhǎnwàng wèilái, dà shùjù jiāng huì zǒujìn wǒmen shēnghuó de gè ge lǐngyù, yǒu rén zhèyàng dìngwèi dà shùjù shídài de yìyì: "Yōngyǒu zhīshi céng yìwèizhe zhǎngwò guòqù, xiànzài tā gèng yìwèizhe yùcè wèilái."',
     vn:'Nhìn về tương lai, dữ liệu lớn sẽ đi vào mọi lĩnh vực trong cuộc sống của chúng ta. Có người đã định vị ý nghĩa của thời đại dữ liệu lớn như thế này: "Sở hữu tri thức từng có nghĩa là nắm được quá khứ, còn bây giờ nó càng có nghĩa là dự đoán tương lai."'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 万分—十分 lấy từ sách (tr. 38, 做一做 判断正误 theo đáp án sách); 预测—预料, 消除—消灭 tự thêm (đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'万分 — 十分',
   same:'Đều là phó từ chỉ mức độ cao, nghĩa là "rất, vô cùng" (非常).',
   sameEx:{zh:'听到这个消息，大家感到万分／十分惊讶。',vn:'Nghe tin này, mọi người đều vô cùng kinh ngạc.'},
   items:[
     {word:'万分',points:[
       'CHỈ bổ nghĩa cho tính từ / động từ chỉ TRẠNG THÁI TÂM LÝ: 感激, 悲痛, 紧张, 焦急, 振奋, 惊讶, 抱歉.',
       'Mức độ SÂU HƠN 十分 ("muôn phần").',
       'Văn viết, trang trọng; không nói 不万分.'
     ],ex:[{zh:'心情万分悲痛。',vn:'Tâm trạng vô cùng đau buồn.'},
          {zh:'对你的帮助我万分感激。',vn:'Tôi vô cùng biết ơn sự giúp đỡ của bạn.'}]},
     {word:'十分',points:[
       'KHÔNG bị giới hạn: bổ nghĩa được cho mọi tính từ / động từ chỉ mức độ: 十分寒冷, 十分优美, 十分重视.',
       'Mức độ nhẹ hơn 万分.',
       'Dùng cả khẩu ngữ lẫn văn viết; có thể nói 不十分 (không … lắm): 不十分满意.'
     ],ex:[{zh:'天气十分寒冷。',vn:'Thời tiết vô cùng lạnh giá.'},
          {zh:'对你的帮助我十分感激。',vn:'Tôi rất biết ơn sự giúp đỡ của bạn.'}]}
   ],
   quiz:[
     {sentence:'这里的风景＿＿优美，令人流连忘返。',options:['万分','十分'],answer:1,why:'优美 không phải trạng thái tâm lý → chỉ dùng 十分 (做一做 ③).'},
     {sentence:'这个方案我还不＿＿满意，需要再修改一下。',options:['万分','十分'],answer:1,why:'Chỉ 十分 có dạng phủ định 不十分 (không … lắm).'},
     {sentence:'对您的帮助，我们全家＿＿感激。',options:['万分','十分'],answer:0,both:true,why:'感激 là trạng thái tâm lý → cả hai đều được; 万分 biểu thị mức độ sâu hơn, trang trọng hơn.'},
     {sentence:'今天气温零下十度，天气＿＿寒冷。',options:['万分','十分'],answer:1,why:'寒冷 tả thời tiết, không phải tâm lý → 十分 (sách: 天气万分寒冷 ×).'}
   ],
   sgk:{
     chung:{t:'都表示程度深，“非常”的意思。',vn:'Đều biểu thị mức độ sâu, có nghĩa "rất, vô cùng".',vd:'听到这个消息，大家感到万分／十分惊讶。',vdVn:'Nghe tin này, mọi người đều vô cùng kinh ngạc.'},
     khac:[
       {a:{t:'“万分”只能修饰表示心理状态的形容词或动词。',vn:'"万分" chỉ có thể bổ nghĩa cho tính từ hoặc động từ biểu thị trạng thái tâm lý.',vd:'心情万分悲痛。（✓）　天气万分寒冷。（×）',vdVn:'Tâm trạng vô cùng đau buồn. (đúng) — "Thời tiết vô cùng lạnh" dùng 万分 là sai.'},
        b:{t:'“十分”没有这样的限制。',vn:'"十分" không có giới hạn này.',vd:'心情十分悲痛。（✓）　天气十分寒冷。（✓）',vdVn:'Tâm trạng rất đau buồn. (đúng) — Thời tiết rất lạnh. (đúng)'}},
       {a:{t:'“万分”表示的程度比“十分”更深。',vn:'Mức độ mà "万分" biểu thị sâu hơn "十分".',vd:'对你的帮助我万分感激。',vdVn:'Tôi vô cùng (muôn phần) biết ơn sự giúp đỡ của bạn.'},
        b:{t:'程度比“万分”浅一些。（“对你的帮助我万分感激”与“对你的帮助我十分感激”相比，前者所表达的程度更深。）',vn:'Mức độ nhẹ hơn "万分" (so hai câu, câu dùng 万分 biểu đạt mức độ sâu hơn).',vd:'对你的帮助我十分感激。',vdVn:'Tôi rất biết ơn sự giúp đỡ của bạn.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'把你这么珍贵的结婚纪念物弄丢了，我十分过意不去。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách). 十分 không bị giới hạn, bổ nghĩa được cho 过意不去 (áy náy).'},
       {s:'听到老板点到自己的名字，他万分紧张地看了我一眼。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách). 紧张 là trạng thái tâm lý → dùng được 万分.'},
       {s:'这里的风景万分优美，令人流连忘返。',dap:[false,true],
        giai:'SAI (đáp án sách). 优美 tả phong cảnh, không phải trạng thái tâm lý → không dùng 万分. Sửa: 这里的风景十分优美，令人流连忘返。'},
       {s:'远古时代，人与自然的关系万分和谐。',dap:[false,true],
        giai:'SAI (đáp án sách). 和谐 tả mối quan hệ, không phải tâm lý → không dùng 万分. Sửa: 远古时代，人与自然的关系十分和谐。'}
     ]
   }},

  {pair:'预测 — 预料',
   same:'Đều là động từ, đều là đoán trước sự việc chưa xảy ra.',
   sameEx:{zh:'谁也无法预测／预料明天会发生什么。',vn:'Không ai có thể đoán trước ngày mai sẽ xảy ra chuyện gì.'},
   items:[
     {word:'预测',points:[
       'Dự đoán dựa trên SỐ LIỆU, quy luật, phương pháp khoa học — mang tính chuyên môn.',
       'Tân ngữ: 未来, 结果, 趋势, 天气, 发病时机; hay đi với 准确, 科学; có danh từ ghép 预测模型.',
       'Ít dùng trong các cụm 出乎……, ……之中.'
     ],ex:[{zh:'百度在世界杯期间准确预测德国夺冠。',vn:'Baidu dự đoán chính xác Đức vô địch trong thời gian World Cup.'},
          {zh:'如果有足够的数据，就可能预测病人发病的时机。',vn:'Nếu có đủ dữ liệu thì có thể dự đoán thời điểm bệnh nhân lên cơn.'}]},
     {word:'预料',points:[
       'Đoán trước theo cảm nhận, kinh nghiệm — nhấn việc sự thật CÓ KHỚP với điều mình nghĩ hay không.',
       'Hay làm danh từ trong cụm cố định: 出乎预料, 在……预料之中; và 无法 / 难以预料.',
       'Không đi với 模型, 准确 kiểu thuật ngữ khoa học.'
     ],ex:[{zh:'虽非偶然，却无法预料。',vn:'Tuy không phải ngẫu nhiên nhưng lại không thể lường trước.'},
          {zh:'比赛的结果出乎所有人的预料。',vn:'Kết quả trận đấu nằm ngoài dự liệu của mọi người.'}]}
   ],
   quiz:[
     {sentence:'气象专家利用计算机模型＿＿明天的天气。',options:['预测','预料'],answer:0,why:'Dự đoán bằng mô hình máy tính, có căn cứ khoa học → 预测.'},
     {sentence:'这次考试的结果完全出乎老师的＿＿。',options:['预测','预料'],answer:1,why:'Cụm cố định 出乎……的预料 = nằm ngoài dự liệu.'},
     {sentence:'专家根据五年来的数据，＿＿明年的房价会继续上涨。',options:['预测','预料'],answer:0,why:'Dựa vào số liệu nhiều năm để đoán xu hướng → 预测.'},
     {sentence:'他会迟到，这早就在我的＿＿之中。',options:['预测','预料'],answer:1,why:'Cụm cố định 在……预料之中 = nằm trong dự liệu.'}
   ]},

  {pair:'消除 — 消灭',
   same:'Đều là động từ, đều là làm cho những thứ bất lợi mất đi.',
   sameEx:{zh:'要把事故隐患消除／消灭在萌芽状态。',vn:'Phải dập tắt nguy cơ sự cố ngay từ khi mới manh nha.'},
   items:[
     {word:'消除',points:[
       'Đối tượng thường TRỪU TƯỢNG, là trạng thái / cảm giác xấu: 隐患, 误会, 疲劳, 顾虑, 影响, 偏见.',
       'Mức độ nhẹ hơn: "xoá bỏ, loại bỏ, làm tan biến".'
     ],ex:[{zh:'如果能找出病因，消除隐患就成为了可能。',vn:'Nếu tìm ra nguyên nhân gây bệnh, việc loại bỏ hiểm hoạ tiềm ẩn sẽ trở thành có thể.'},
          {zh:'两人好好谈了一次，终于消除了误会。',vn:'Hai người nói chuyện đàng hoàng một lần, cuối cùng đã xoá bỏ hiểu lầm.'}]},
     {word:'消灭',points:[
       'Đối tượng thường là thứ CÓ HẠI "sống", hữu hình: 敌人, 害虫, 蚊子, 细菌, 疾病.',
       'Mức độ mạnh: "tiêu diệt, diệt sạch" — làm cho không còn tồn tại.'
     ],ex:[{zh:'甚至把疾病消灭在萌芽状态中的想法也不显得荒谬了。',vn:'Thậm chí ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.'},
          {zh:'夏天到了，我们得想办法消灭蚊子。',vn:'Mùa hè đến rồi, chúng ta phải nghĩ cách diệt muỗi.'}]}
   ],
   quiz:[
     {sentence:'洗个热水澡可以＿＿一天的疲劳。',options:['消除','消灭'],answer:0,why:'疲劳 là cảm giác, trừu tượng → 消除疲劳.'},
     {sentence:'这种药能有效＿＿细菌。',options:['消除','消灭'],answer:1,why:'细菌 là sinh vật có hại → 消灭.'},
     {sentence:'老师的一番话＿＿了他心中的顾虑。',options:['消除','消灭'],answer:0,why:'顾虑 (băn khoăn) là trạng thái tâm lý → 消除.'},
     {sentence:'天花是人类第一种被彻底＿＿的传染病。',options:['消除','消灭'],answer:1,why:'Bệnh truyền nhiễm bị diệt tận gốc → 彻底消灭 (mạnh, làm cho không còn tồn tại).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'战略',hv:'chiến lược',vn:'chiến lược',note:'Trùng khít; 战略合作伙伴 = đối tác chiến lược.'},
    {zh:'模型',hv:'mô hình',vn:'mô hình',note:'Trùng khít; 预测模型 = mô hình dự báo. Chú ý 模 đọc mó.'},
    {zh:'验证',hv:'nghiệm chứng',vn:'kiểm chứng',note:'"Nghiệm chứng" tiếng Việt ít dùng nhưng đúng nghĩa: thử nghiệm để chứng minh.'},
    {zh:'被动',hv:'bị động',vn:'bị động',note:'Trùng khít; 变被动为主动 = biến bị động thành chủ động.'},
    {zh:'遗传',hv:'di truyền',vn:'di truyền',note:'Trùng khít.'},
    {zh:'血压',hv:'huyết áp',vn:'huyết áp',note:'Trùng khít; 高血压 = cao huyết áp.'},
    {zh:'先进',hv:'tiên tiến',vn:'tiên tiến',note:'Trùng khít.'},
    {zh:'临床',hv:'lâm sàng',vn:'lâm sàng',note:'Trùng khít; 临床经验 = kinh nghiệm lâm sàng.'},
    {zh:'优越',hv:'ưu việt',vn:'ưu việt',note:'Trùng khít; 优越之处 = điểm ưu việt.'},
    {zh:'生理',hv:'sinh lý',vn:'sinh lý',note:'Trùng khít; 生理数据 = dữ liệu sinh lý.'},
    {zh:'追究',hv:'truy cứu',vn:'truy cứu, truy tìm',note:'Trùng khít; 追究责任 = truy cứu trách nhiệm.'},
    {zh:'消灭',hv:'tiêu diệt',vn:'tiêu diệt',note:'Trùng khít.'},
    {zh:'前提',hv:'tiền đề',vn:'tiền đề',note:'Trùng khít; 在……的前提下 = với tiền đề / điều kiện ….'},
    {zh:'功劳',hv:'công lao',vn:'công lao',note:'Trùng khít.'},
    {zh:'萌芽',hv:'manh nha',vn:'manh nha, nảy mầm',note:'Trùng khít; 萌芽状态 = giai đoạn manh nha.'},
    {zh:'预料',hv:'dự liệu',vn:'dự liệu, lường trước',note:'"Nằm ngoài dự liệu" = 出乎预料.'},
    {zh:'基因',hv:'cơ nhân',vn:'gien',note:'基因 vừa phiên âm "gene" vừa mang nghĩa "nhân tố cơ bản" (cơ nhân).'}
  ],
  idiom:[
    {zh:'不言而喻',hv:'bất ngôn nhi dụ',vn:'không nói cũng hiểu',note:'不言 = không nói, 而 = mà, 喻 = hiểu rõ → không nói mà ai cũng hiểu.'},
    {zh:'实事求是',hv:'thực sự cầu thị',vn:'tôn trọng sự thật',note:'实事 = sự việc có thật, 求是 = tìm cái đúng → "thực sự cầu thị" — thành ngữ quen thuộc cả trong tiếng Việt.'},
    {zh:'切切实实',hv:'thiết thiết thực thực',vn:'thực sự, chắc chắn',note:'Dạng lặp của 切实 (thiết thực) → nhấn mạnh "thực sự, không chút nghi ngờ".'},
    {zh:'堆积如山',hv:'đôi tích như sơn',vn:'chất cao như núi',note:'堆积 = chất đống, 如山 = như núi → rất nhiều (bài khoá: 堆积如山的记录).'},
    {zh:'单打独斗',hv:'đơn đả độc đấu',vn:'đơn thương độc mã',note:'Một mình chiến đấu, không hợp tác với ai (练习3: 扭转了过去单打独斗的局面).'}
  ],
  trap:[
    {zh:'前景',hv:'tiền cảnh',vn:'triển vọng, tiền đồ',
     warn:'"Tiền cảnh" tiếng Việt là cảnh phía trước (foreground trong ảnh). 前景 hay dùng nghĩa "triển vọng": 很有前景, 前景广阔. Tiếng Việt "triển vọng" (danh từ) = 前景, KHÔNG phải 展望.'},
    {zh:'展望',hv:'triển vọng',vn:'nhìn về tương lai',
     warn:'"Triển vọng" tiếng Việt là DANH TỪ (có triển vọng = 有前景). 展望 là ĐỘNG TỪ: 展望未来 = nhìn về tương lai. Đừng dịch "ngành này có triển vọng" thành 有展望.'},
    {zh:'零星',hv:'linh tinh',vn:'lẻ tẻ, rải rác',
     warn:'"Linh tinh" tiếng Việt = lộn xộn, vớ vẩn (nói linh tinh). 零星 chỉ là "ít ỏi, lẻ tẻ, rải rác": 零星小雨 = mưa nhỏ rải rác, 零星先兆 = dấu hiệu lẻ tẻ. "Nói linh tinh" là 胡说八道.'},
    {zh:'公认',hv:'công nhận',vn:'mọi người đều thừa nhận',
     warn:'"Công nhận" tiếng Việt thường là cơ quan chính thức công nhận (công nhận tốt nghiệp = 承认 / 认可). 公认 là "được SỐ ĐÔNG thừa nhận": 大家公认他是最好的老师.'},
    {zh:'案例',hv:'án lệ',vn:'trường hợp, ca',
     warn:'"Án lệ" tiếng Việt là thuật ngữ luật (bản án làm tiền lệ). 案例 nghĩa rộng: một trường hợp cụ thể — ca bệnh, tình huống kinh doanh, ví dụ thực tế: 成功案例, 典型案例.'},
    {zh:'依赖',hv:'y lại',vn:'dựa vào, phụ thuộc',
     warn:'"Ỷ lại" tiếng Việt luôn mang ý chê. 依赖 có thể trung tính: 临床会减少对人的依赖 = giảm sự phụ thuộc vào con người; 互相依赖 = phụ thuộc lẫn nhau.'},
    {zh:'人为',hv:'nhân vi',vn:'do con người làm ra',
     warn:'为 đọc wéi (làm), không phải wèi (vì) — không hiểu là "vì người". 人为管理 = quản lý có can thiệp chủ động của con người; ……是人为造成的 = do con người gây ra.'},
    {zh:'交代',hv:'giao đại',vn:'nói rõ; dặn dò',
     warn:'Không phải "giao lại" đồ vật. 交代清楚 = nói rõ; 交代任务 = giao việc, dặn dò; 怎么向父母交代 = ăn nói thế nào với bố mẹ.'}
  ]
};


// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'通俗的',right:'例子'},
  {left:'堆积',right:'如山'},
  {left:'卓越的',right:'成就'},
  {left:'减少对人的',right:'依赖'},
  {left:'大数据的',right:'功劳'},
  {left:'派遣',right:'数据专家'},
  {left:'战略',right:'合作伙伴关系'},
  {left:'预测',right:'模型'},
  {left:'结果',right:'验证'},
  {left:'万分',right:'振奋'},
  {left:'扭转',right:'局面'},
  {left:'积极',right:'防治'},
  {left:'萌芽',right:'状态'},
  {left:'交代',right:'清楚'},
  {left:'追究',right:'原因'},
  {left:'消除',right:'隐患'},
  {left:'零星',right:'先兆'},
  {left:'挽救',right:'生命'},
  {left:'细致的',right:'监测'},
  {left:'先进',right:'器材'},
  {left:'人为',right:'管理'},
  {left:'稀缺',right:'资源'},
  {left:'远程医疗',right:'服务'},
  {left:'展望',right:'未来'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这本科普书语言',blank:'通俗',post:'易懂，连小学生都能看明白。',hint:'(dễ hiểu, phổ thông)',ans:'通俗'},
  {pre:'考试前一周，我的书桌上',blank:'堆积',post:'着厚厚的复习资料。',hint:'(chồng chất)',ans:'堆积'},
  {pre:'谁也无法准确地',blank:'预测',post:'未来，我们能做的就是做好准备。',hint:'(dự đoán)',ans:'预测'},
  {pre:'这次比赛能拿冠军，是全队的',blank:'功劳',post:'，不是我一个人的。',hint:'(công lao)',ans:'功劳'},
  {pre:'地震发生后，医院立即',blank:'派遣',post:'医疗队赶往灾区。',hint:'(cử đi)',ans:'派遣'},
  {pre:'两家公司建立了',blank:'战略',post:'合作伙伴关系，打算共同开发新产品。',hint:'(chiến lược)',ans:'战略'},
  {pre:'弟弟花了一个星期，终于做好了一个飞机',blank:'模型',post:'。',hint:'(mô hình)',ans:'模型'},
  {pre:'这次活动',blank:'共计',post:'有三百多名学生参加。',hint:'(tổng cộng)',ans:'共计'},
  {pre:'这个假说还需要通过实验来',blank:'验证',post:'。',hint:'(kiểm chứng)',ans:'验证'},
  {pre:'中国队夺冠的消息',blank:'振奋',post:'人心，球迷们都走上了街头。',hint:'(làm phấn chấn)',ans:'振奋'},
  {pre:'他被',blank:'公认',post:'为我们班最有耐心的人。',hint:'(được mọi người thừa nhận)',ans:'公认'},
  {pre:'他比',blank:'先前',post:'瘦多了，精神却好多了。',hint:'(trước kia)',ans:'先前'},
  {pre:'这本教材的内容有些',blank:'陈旧',post:'，已经跟不上时代了。',hint:'(lỗi thời)',ans:'陈旧'},
  {pre:'学校采取了很多措施来',blank:'防治',post:'学生近视。',hint:'(phòng chống)',ans:'防治'},
  {pre:'春天到了，路边的小草开始',blank:'萌芽',post:'了。',hint:'(nảy mầm)',ans:'萌芽'},
  {pre:'他的说法太',blank:'荒谬',post:'了，谁也不会相信。',hint:'(hoang đường)',ans:'荒谬'},
  {pre:'在不影响学习的',blank:'前提',post:'下，父母同意我周末去打工。',hint:'(điều kiện tiên quyết)',ans:'前提'},
  {pre:'妈妈出门前',blank:'交代',post:'我一定要关好门窗。',hint:'(dặn dò)',ans:'交代'},
  {pre:'科学家发现，身高在很大程度上是由',blank:'基因',post:'决定的。',hint:'(gien)',ans:'基因'},
  {pre:'他的好嗓子是从妈妈那儿',blank:'遗传',post:'来的。',hint:'(di truyền)',ans:'遗传'},
  {pre:'这栋楼的电线太旧了，存在很大的安全',blank:'隐患',post:'。',hint:'(hiểm hoạ tiềm ẩn)',ans:'隐患'},
  {pre:'那天下午，没有任何',blank:'预兆',post:'，暴雨就来了。',hint:'(điềm báo trước)',ans:'预兆'},
  {pre:'老师在课上分析了几个成功的',blank:'案例',post:'，让我们很受启发。',hint:'(trường hợp)',ans:'案例'},
  {pre:'天气预报说明天有',blank:'零星',post:'小雨，出门记得带伞。',hint:'(rải rác, lẻ tẻ)',ans:'零星'},
  {pre:'她做事非常',blank:'细致',post:'，从来没有出过差错。',hint:'(tỉ mỉ)',ans:'细致'},
  {pre:'奶奶每天早上都要量一次',blank:'血压',post:'。',hint:'(huyết áp)',ans:'血压'},
  {pre:'学校新买了一批体育',blank:'器材',post:'，同学们别提多高兴了。',hint:'(dụng cụ)',ans:'器材'},
  {pre:'经过调查，这场森林火灾是',blank:'人为',post:'造成的，不是意外。',hint:'(do con người)',ans:'人为'},
  {pre:'这位医生有三十年的',blank:'临床',post:'经验，病人都很信任他。',hint:'(lâm sàng)',ans:'临床'},
  {pre:'我们不能只说空话，而要',blank:'切切实实',post:'地为同学们做几件好事。',hint:'(thực sự)',ans:'切切实实'},
  {pre:'青春期的孩子在',blank:'生理',post:'和心理上都会发生很大的变化。',hint:'(sinh lý)',ans:'生理'},
  {pre:'他',blank:'攒',post:'了半年的零花钱，给妈妈买了一件生日礼物。',hint:'(dành dụm)',ans:'攒'},
  {pre:'这个方案切实',blank:'可行',post:'，大家都同意。',hint:'(khả thi)',ans:'可行'},
  {pre:'回顾过去，',blank:'展望',post:'未来，我们充满了信心。',hint:'(nhìn về tương lai)',ans:'展望'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (加以 · 大大 / 远远) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['对于','你的','意见和建议','，','我们','会认真','加以','研究','。'],ans:'对于你的意见和建议，我们会认真加以研究。',audio:'对于你的意见和建议，我们会认真加以研究。'},
  {words:['我们','不妨','以大数据与健康','为例','加以','说明','。'],ans:'我们不妨以大数据与健康为例加以说明。',audio:'我们不妨以大数据与健康为例加以说明。'},
  {words:['下面','这些句子','都有问题','，','请','加以','改正','。'],ans:'下面这些句子都有问题，请加以改正。',audio:'下面这些句子都有问题，请加以改正。'},
  {words:['学校提供的','自习室','，','我们','应该','好好','加以','利用','。'],ans:'学校提供的自习室，我们应该好好加以利用。',audio:'学校提供的自习室，我们应该好好加以利用。'},
  {words:['大数据','能够','大大','提高','医生的','工作效率','。'],ans:'大数据能够大大提高医生的工作效率。',audio:'大数据能够大大提高医生的工作效率。'},
  {words:['散步时','身体挺直','，','能使','肺的换气量','大大','增加','。'],ans:'散步时身体挺直，能使肺的换气量大大增加。',audio:'散步时身体挺直，能使肺的换气量大大增加。'},
  {words:['大数据','为人类','做出的贡献','远远','超出了','我们的期盼','。'],ans:'大数据为人类做出的贡献远远超出了我们的期盼。',audio:'大数据为人类做出的贡献远远超出了我们的期盼。'},
  {words:['你现在的','知识和能力','都','远远','不能','胜任','这份工作','。'],ans:'你现在的知识和能力都远远不能胜任这份工作。',audio:'你现在的知识和能力都远远不能胜任这份工作。'},
  {words:['利用大数据','进行','细致的监测','，','意义','是','不言而喻','的','。'],ans:'利用大数据进行细致的监测，意义是不言而喻的。',audio:'利用大数据进行细致的监测，意义是不言而喻的。'},
  {words:['实事求是地说','，','这次考试','我','确实','没有','准备好','。'],ans:'实事求是地说，这次考试我确实没有准备好。',audio:'实事求是地说，这次考试我确实没有准备好。'},
  {words:['在','各方面人才的','协助','下','，','他们','制定了','切实可行的','方案','。'],ans:'在各方面人才的协助下，他们制定了切实可行的方案。',audio:'在各方面人才的协助下，他们制定了切实可行的方案。'},
  {words:['这一','海量数据库','共计','涉及','近两万名','球员','。'],ans:'这一海量数据库共计涉及近两万名球员。',audio:'这一海量数据库共计涉及近两万名球员。'},
  {words:['人们','公认','医疗和健康','分属','两个','不同的','领域','。'],ans:'人们公认医疗和健康分属两个不同的领域。',audio:'人们公认医疗和健康分属两个不同的领域。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这位科学家为人类做出了____的贡献。',opts:['卓越','优越','超越','越过'],ans:0,
   exp:'卓越的贡献 = đóng góp xuất sắc, to lớn. 优越 dùng cho điều kiện, vị trí (条件优越); 超越 / 越过 là động từ "vượt qua" (练习1: nhóm từ có 越).'},
  {wrong:'对大家的帮助，我____感激，不知道该怎么报答。',opts:['充分','万一','万分','十足'],ans:2,
   exp:'万分 + động từ tâm lý (感激) = vô cùng biết ơn (词语辨析). 充分 = đầy đủ (充分准备); 万一 = lỡ như; 十足 = trọn vẹn, đứng sau danh từ (信心十足).'},
  {wrong:'下半场我们连进两球，终于____了比赛的局面。',opts:['转动','扭转','旋转','转告'],ans:1,
   exp:'扭转局面 = lật ngược / xoay chuyển cục diện (cụm cố định). 转动, 旋转 = xoay tròn (vật lý); 转告 = nhắn lại.'},
  {wrong:'我们事先没做任何准备，结果在谈判中非常____。',opts:['主动','感动','被动','激动'],ans:2,
   exp:'Không chuẩn bị → rơi vào thế 被动 (bị động). 主动 ngược nghĩa; 感动 = cảm động; 激动 = xúc động.'},
  {wrong:'天花是人类第一种被彻底____的传染病。',opts:['消费','消灭','消化','消息'],ans:1,
   exp:'彻底消灭 + bệnh truyền nhiễm = tiêu diệt hoàn toàn. 消费 = tiêu dùng; 消化 = tiêu hoá; 消息 = tin tức (cùng nhóm chữ 消 ở 练习1).'},
  {wrong:'事情已经发生了，现在____谁的责任都没有用。',opts:['追求','研究','讲究','追究'],ans:3,
   exp:'追究责任 = truy cứu trách nhiệm. 追求 = theo đuổi (追求梦想); 研究 = nghiên cứu; 讲究 = cầu kỳ, chú trọng.'},
  {wrong:'比赛的结果完全出乎所有人的____。',opts:['预测','预料','预报','预订'],ans:1,
   exp:'出乎……的预料 = nằm ngoài dự liệu (cụm cố định, 词语辨析 预测—预料). 预报 = dự báo (天气预报); 预订 = đặt trước.'},
  {wrong:'两个人坐下来好好谈了一次，终于____了误会。',opts:['消灭','消失','消除','取消'],ans:2,
   exp:'消除误会 = xoá bỏ hiểu lầm (đối tượng trừu tượng). 消灭 dùng cho thứ có hại "sống" (蚊子, 疾病); 消失 là nội động từ, không mang tân ngữ; 取消 = huỷ bỏ (取消活动).'},
  {wrong:'如果能提前监测到零星先兆，甚至可以____患者的生命。',opts:['挽救','挽回','救济','救灾'],ans:0,
   exp:'挽救生命 = cứu sống. 挽回 + 损失 / 影响 / 面子 (vãn hồi); 救济 = cứu trợ vật chất; 救灾 = cứu trợ thiên tai.'},
  {wrong:'利用大数据对病种进行细致的监测，意义是____的。',opts:['有条不紊','实事求是','不言而喻','迫不及待'],ans:2,
   exp:'……是不言而喻的 = … là điều không nói cũng hiểu. 有条不紊 = đâu ra đấy (bài 19); 实事求是 = tôn trọng sự thật; 迫不及待 = nóng lòng.'},
  {wrong:'这家医院引进了一批世界____的医疗器材。',opts:['先前','前进','进步','先进'],ans:3,
   exp:'世界先进的器材 = thiết bị tiên tiến hàng đầu thế giới. 先前 = trước kia (danh từ thời gian); 前进 = tiến lên (động từ); 进步 = tiến bộ (nói về người, xã hội).'},
  {wrong:'人工智能是一个很有____的行业，吸引了很多年轻人。',opts:['前提','风景','背景','前景'],ans:3,
   exp:'很有前景 = rất có triển vọng. 前提 = tiền đề; 风景 = phong cảnh; 背景 = bối cảnh, hậu thuẫn.'},
  {wrong:'成年以后要独立生活，不能再____父母了。',opts:['依然','依照','依赖','信赖'],ans:2,
   exp:'依赖父母 = dựa dẫm vào bố mẹ (练习2 ⑥). 依然 = vẫn; 依照 = theo (依照规定); 信赖 = tin cậy — không hợp với "độc lập sống".'},
  {wrong:'这里地理位置____，交通十分方便。',opts:['优秀','优美','优惠','优越'],ans:3,
   exp:'地理位置优越 = vị trí địa lý thuận lợi. 优秀 khen người / thành tích; 优美 = đẹp (风景优美); 优惠 = ưu đãi (价格优惠).'},
  {wrong:'大家都要自觉____公共秩序，排队上车。',opts:['维修','保养','爱护','维护'],ans:3,
   exp:'维护秩序 = giữ gìn trật tự. 维修 / 保养 = sửa chữa / bảo dưỡng máy móc; 爱护 + 公物 / 眼睛 (yêu quý, giữ gìn đồ vật) — không đi với 秩序.'},
  {wrong:'在各方面人才的____下，他们制定了切实可行的方案。',opts:['协助','协调','协商','协议'],ans:0,
   exp:'在……的协助下 = với sự hỗ trợ của … (练习3). 协调 = điều phối; 协商 = bàn bạc; 协议 = thoả thuận.'},
  {wrong:'做科学研究一定要____，不能弄虚作假。',opts:['实事求是','不言而喻','堆积如山','单打独斗'],ans:0,
   exp:'实事求是 = tôn trọng sự thật, đối lập trực tiếp với 弄虚作假 (gian dối). Các thành ngữ còn lại không hợp nghĩa.'},
  {wrong:'对于你们提出的建议，我们会认真____研究。',opts:['以便','给以','加上','加以'],ans:3,
   exp:'加以 + động từ song âm tiết (研究) = tiến hành … (điểm ngữ pháp 1). 给以 dùng khi dành cho ai điều có lợi (给以帮助); 加上 = cộng thêm; 以便 = để (đầu vế sau).'},
  {wrong:'散步时身体挺直，能使肺的换气量____增加。',opts:['远远','大大','多多','高高'],ans:1,
   exp:'大大 + động từ song âm tiết (增加) = tăng lên đáng kể (điểm ngữ pháp 2, 练一练 ①). 远远 hay đi với 超出, 不能, 落后; 多多 / 高高 không bổ nghĩa cho 增加 như vậy.'}
];


// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–22 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nếu cậu thấy phương án này chưa khả thi, chúng ta có thể nghiên cứu tỉ mỉ rồi sửa lại.',zh:'如果你觉得这个方案不可行，我们可以细致地研究后再加以修改。',py:'Rúguǒ nǐ juéde zhège fāng\'àn bù kěxíng, wǒmen kěyǐ xìzhì de yánjiū hòu zài jiāyǐ xiūgǎi.',goiY:['可行','细致','加以','如果……'],giai:'加以 + động từ song âm tiết (修改) — không nói 加以改; 细致地 + V làm trạng ngữ, nhớ dùng 地.'},
  {vi:'Nhờ sự hỗ trợ của thầy cô, thành tích của tôi tiến bộ rõ rệt, cả nhà vô cùng phấn khởi.',zh:'在老师的协助下，我的成绩大大提高了，全家人都万分振奋。',py:'Zài lǎoshī de xiézhù xià, wǒ de chéngjì dàdà tígāo le, quán jiā rén dōu wànfēn zhènfèn.',goiY:['在……的协助下','大大','万分振奋'],giai:'大大 + động từ song âm tiết (提高) = tăng / nâng lên đáng kể; 万分 chỉ đi với trạng thái tâm lý (振奋) — không dùng 万分 cho 提高.'},
  {vi:'Nói một cách khách quan, hiện giờ tớ vẫn còn quá dựa dẫm vào người khác, còn lâu mới đảm đương được công việc của lớp trưởng.',zh:'实事求是地说，我现在还太依赖别人，远远不能胜任班长的工作。',py:'Shíshì-qiúshì de shuō, wǒ xiànzài hái tài yīlài biérén, yuǎnyuǎn bù néng shèngrèn bānzhǎng de gōngzuò.',goiY:['实事求是地说','依赖','远远不能'],giai:'远远 + 不能 / 不如 / 超出 = còn xa mới …; "còn lâu mới" dịch 远远不能, không dịch 还久.'},
  {vi:'Nếu có thể phát hiện điềm báo từ sớm, những hiểm hoạ an toàn trong trường có thể được dập tắt ngay từ khi mới manh nha.',zh:'如果能及早发现预兆，校园里的安全隐患就可以消灭在萌芽状态。',py:'Rúguǒ néng jízǎo fāxiàn yùzhào, xiàoyuán li de ānquán yǐnhuàn jiù kěyǐ xiāomiè zài méngyá zhuàngtài.',goiY:['预兆','隐患','如果……就……','消灭在萌芽状态'],giai:'如果……就…… nêu điều kiện – kết quả; 消灭在萌芽状态 là cụm cố định "dập tắt từ trong trứng nước".'},
  {vi:'Chúng ta thử lấy bạn Tiểu Minh làm ví dụ để giải thích: cậu ấy tuy không phải thiên tài, nhưng nhờ kinh nghiệm dành dụm từng chút một mà đạt được thành tích xuất sắc.',zh:'我们不妨以小明为例加以说明：他虽然不是天才，却靠平时一点一点攒下的经验取得了卓越的成绩。',py:'Wǒmen bùfáng yǐ Xiǎo Míng wéi lì jiāyǐ shuōmíng: tā suīrán bú shì tiāncái, què kào píngshí yìdiǎn yìdiǎn zǎnxià de jīngyàn qǔdéle zhuóyuè de chéngjì.',goiY:['不妨','以……为例加以说明','虽然……却……','卓越'],giai:'不妨 (bài 12) = cứ thử; 以……为例加以说明 là khung trong bài khoá; 虽然……却…… — 却 đứng sau chủ ngữ ẩn, trước động từ.'},
  {vi:'Tuy dữ liệu lớn có thể dự đoán kết quả trận đấu, nhưng thể thao sở dĩ hấp dẫn chính là vì kết quả khó mà lường trước.',zh:'虽然大数据能预测比赛结果，但体育之所以吸引人，正是因为结果难以预料。',py:'Suīrán dà shùjù néng yùcè bǐsài jiéguǒ, dàn tǐyù zhīsuǒyǐ xīyǐn rén, zhèng shì yīnwèi jiéguǒ nányǐ yùliào.',goiY:['预测','之所以……是因为……','难以预料'],giai:'预测 (dự đoán có số liệu) và 预料 (lường trước) đặt cạnh nhau cho thấy khác biệt; 之所以……正是因为…… nhấn mạnh nguyên nhân; 难以 ôn bài 14.'},
  {vi:'Bà nội bị cao huyết áp, vì vậy cả nhà đã mua cho bà một thiết bị tiên tiến, để có thể theo dõi sức khoẻ của bà bất cứ lúc nào.',zh:'奶奶有高血压，所以全家给她买了一台先进的器材，以便随时监测她的健康。',py:'Nǎinai yǒu gāoxuèyā, suǒyǐ quán jiā gěi tā mǎile yì tái xiānjìn de qìcái, yǐbiàn suíshí jiāncè tā de jiànkāng.',goiY:['血压','先进','器材','以便'],giai:'以便 (bài 16) đứng đầu vế cuối nêu mục đích; "bị cao huyết áp" dịch 有高血压, không dịch 被.'},
  {vi:'Muốn thay đổi triệt để thói quen học tập bị động trước kia, trước hết phải truy tìm nguyên nhân, sau đó mới đề ra phương án thiết thực khả thi.',zh:'要想彻底扭转先前被动的学习习惯，首先要追究原因，然后再制定切实可行的方案。',py:'Yào xiǎng chèdǐ niǔzhuǎn xiānqián bèidòng de xuéxí xíguàn, shǒuxiān yào zhuījiū yuányīn, ránhòu zài zhìdìng qièshí kěxíng de fāng\'àn.',goiY:['扭转','先前','首先……然后……','切实可行'],giai:'首先……然后再…… sắp xếp các bước; 扭转 + 习惯 / 局面 = thay đổi hẳn; "thiết thực khả thi" = 切实可行.'},
  {vi:'Dù quan niệm của bố mẹ có lỗi thời đến đâu, chúng ta cũng nên kiên nhẫn nói rõ suy nghĩ của mình với họ, chứ không phải đối đầu với họ.',zh:'不管父母的观念多么陈旧，我们都应该耐心地把自己的想法跟他们交代清楚，而不是跟他们对着干。',py:'Bùguǎn fùmǔ de guānniàn duōme chénjiù, wǒmen dōu yīnggāi nàixīn de bǎ zìjǐ de xiǎngfǎ gēn tāmen jiāodài qīngchu, ér bú shì gēn tāmen duìzhe gàn.',goiY:['不管……都……','陈旧','交代清楚','而不是'],giai:'不管 + 多么 + Adj，都…… = dù … đến đâu cũng …; ……，而不是…… = chứ không phải …; 对着干 = làm ngược lại, đối đầu (khẩu ngữ).'},
  {vi:'Cho dù chỉ giúp chúng ta tiết kiệm được một nửa thời gian, đóng góp của dữ liệu lớn cho việc học cũng đã vượt xa dự liệu của mọi người, ý nghĩa của nó không nói cũng hiểu.',zh:'即便只能帮我们节省一半的时间，大数据对学习的贡献也远远超出了大家的预料，其意义不言而喻。',py:'Jíbiàn zhǐ néng bāng wǒmen jiéshěng yíbàn de shíjiān, dà shùjù duì xuéxí de gòngxiàn yě yuǎnyuǎn chāochūle dàjiā de yùliào, qí yìyì bùyán\'éryù.',goiY:['即便……也……','远远超出','预料','不言而喻'],giai:'即便 (bài 10) = cho dù; 远远超出……的预料 = vượt xa dự liệu; 其 = của nó (văn viết), 不言而喻 làm vị ngữ ở cuối câu.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Baidu đã dự đoán chính xác Đức vô địch, kết quả này khiến các nhà nghiên cứu vô cùng phấn khởi.',zh:'百度准确预测了德国夺冠，这一结果令研究者万分振奋。',py:'Bǎidù zhǔnquè yùcèle Déguó duóguàn, zhè yì jiéguǒ lìng yánjiūzhě wànfēn zhènfèn.',goiY:['预测 = dự đoán','令……万分振奋 = khiến … vô cùng phấn khởi'],giai:'令 + người + tính từ tâm lý = khiến ai …; 这一结果 dịch "kết quả này" (一 không cần dịch).'},
  {vi:'Baidu cử chuyên gia dữ liệu tìm kiếm dữ liệu các trận đấu, đồng thời thiết lập quan hệ hợp tác chiến lược với các cơ quan liên quan.',zh:'百度派遣数据专家搜索比赛数据，并与相关机构建立了战略合作关系。',py:'Bǎidù pàiqiǎn shùjù zhuānjiā sōusuǒ bǐsài shùjù, bìng yǔ xiāngguān jīgòu jiànlìle zhànlüè hézuò guānxi.',goiY:['派遣 = cử','并 = đồng thời','战略合作 = hợp tác chiến lược'],giai:'并 nối hai hành động cùng chủ ngữ — dịch "đồng thời / và"; 与……建立关系 = thiết lập quan hệ với ….'},
  {vi:'Mọi người đều thừa nhận y tế và sức khoẻ thuộc hai lĩnh vực khác nhau, nhưng dữ liệu lớn lại có thể thay đổi triệt để cục diện này.',zh:'人们公认医疗和健康分属不同的领域，而大数据却可能彻底扭转这一局面。',py:'Rénmen gōngrèn yīliáo hé jiànkāng fēnshǔ bù tóng de lǐngyù, ér dà shùjù què kěnéng chèdǐ niǔzhuǎn zhè yì júmiàn.',goiY:['公认 = mọi người đều thừa nhận','而……却…… = nhưng … lại','扭转 = xoay chuyển'],giai:'公认 dịch "mọi người đều thừa nhận" chứ không dịch "công nhận"; 而……却…… tạo đối lập — dịch "nhưng … lại".'},
  {vi:'Bác sĩ thực sự là nguồn lực khan hiếm, vì vậy khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người.',zh:'医生是切切实实的稀缺资源，因此临床会尽量减少对人的依赖。',py:'Yīshēng shì qièqiè shíshí de xīquē zīyuán, yīncǐ línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài.',goiY:['切切实实 = thực sự','因此 = vì vậy','依赖 = sự phụ thuộc'],giai:'切切实实的 làm định ngữ nhấn mạnh — dịch thành trạng từ "thực sự" cho tự nhiên; 对人的依赖 = sự phụ thuộc vào con người.'},
  {vi:'Có dữ liệu lớn, ý tưởng dập tắt bệnh tật ngay từ khi mới manh nha cũng không còn có vẻ hoang đường nữa.',zh:'有了大数据，把疾病消灭在萌芽状态中的想法也不再显得荒谬了。',py:'Yǒule dà shùjù, bǎ jíbìng xiāomiè zài méngyá zhuàngtài zhōng de xiǎngfǎ yě bú zài xiǎnde huāngmiù le.',goiY:['消灭在萌芽状态 = dập tắt từ trong trứng nước','显得荒谬 = có vẻ hoang đường'],giai:'Định ngữ dài 把……中的 đứng trước 想法 — tiếng Việt đưa ra sau: "ý tưởng dập tắt …"; 不再……了 = không còn … nữa.'},
  {vi:'Truy nguyên nguyên nhân, bệnh tật phát sinh chẳng qua là liên quan đến gen, di truyền, môi trường và thói quen sinh hoạt; tuy không ngẫu nhiên nhưng lại không thể lường trước.',zh:'追究原因，疾病的发生无非与基因、遗传、环境和生活习惯有关，虽非偶然，却无法预料。',py:'Zhuījiū yuányīn, jíbìng de fāshēng wúfēi yǔ jīyīn, yíchuán, huánjìng hé shēnghuó xíguàn yǒuguān, suī fēi ǒurán, què wúfǎ yùliào.',goiY:['追究原因 = truy nguyên nguyên nhân','无非 = chẳng qua là','虽非……却…… = tuy không … nhưng lại …'],giai:'无非 (bài 5) = chẳng qua chỉ là; 虽非 = 虽然不是 (văn viết cổ) — dịch "tuy không phải".'},
  {vi:'Nếu có thể tích luỹ dữ liệu nhịp tim trong thời gian dài thì có thể nắm bắt được những điềm báo lẻ tẻ, từ đó cứu sống bệnh nhân.',zh:'如果能对心跳数据进行长时间的积累，就可能捕捉到零星的预兆，从而挽救患者的生命。',py:'Rúguǒ néng duì xīntiào shùjù jìnxíng cháng shíjiān de jīlěi, jiù kěnéng bǔzhuō dào língxīng de yùzhào, cóng\'ér wǎnjiù huànzhě de shēngmìng.',goiY:['如果……就…… = nếu … thì …','零星 = lẻ tẻ','从而 = từ đó','挽救 = cứu'],giai:'对……进行积累 là cách nói văn viết của 积累……; 从而 nêu kết quả đạt được — dịch "từ đó"; 零星 không dịch "linh tinh".'},
  {vi:'Ở Trung Quốc số người có vấn đề về huyết áp không phải là ít; nếu dùng thiết bị tiên tiến để chủ động quản lý sức khoẻ của họ thì sẽ là một thử nghiệm rất có triển vọng.',zh:'中国血压有问题的人不在少数，如果用先进器材对他们的健康进行人为管理，将是很有前景的尝试。',py:'Zhōngguó xuèyā yǒu wèntí de rén bú zài shǎoshù, rúguǒ yòng xiānjìn qìcái duì tāmen de jiànkāng jìnxíng rénwéi guǎnlǐ, jiāng shì hěn yǒu qiánjǐng de chángshì.',goiY:['不在少数 = không phải ít','人为管理 = chủ động quản lý','前景 = triển vọng'],giai:'不在少数 = nhiều (nói giảm); 人为管理 dịch "chủ động quản lý", không dịch "quản lý nhân tạo"; 有前景 = có triển vọng.'},
  {vi:'Nhờ sự hỗ trợ của các thiết bị đặc biệt, dữ liệu lớn có thể nâng cao đáng kể hiệu suất làm việc của bác sĩ, đó chính là điểm ưu việt của nó.',zh:'在特殊设备的协助下，大数据能大大提高医生的工作效率，这正是它的优越之处。',py:'Zài tèshū shèbèi de xiézhù xià, dà shùjù néng dàdà tígāo yīshēng de gōngzuò xiàolǜ, zhè zhèng shì tā de yōuyuè zhī chù.',goiY:['在……的协助下 = nhờ sự hỗ trợ của','大大 = đáng kể','优越之处 = điểm ưu việt'],giai:'大大 + 提高 dịch "nâng cao đáng kể / rất nhiều"; 之处 = chỗ, điểm (văn viết).'},
  {vi:'Nói một cách khách quan, cho dù chỉ làm được việc giữ gìn sức khoẻ thôi, đóng góp của dữ liệu lớn cho nhân loại cũng đã vượt xa sự mong đợi của chúng ta.',zh:'实事求是地讲，即便仅仅做到了健康维护这一点，大数据为人类做出的贡献也远远超出了我们的期盼。',py:'Shíshì-qiúshì de jiǎng, jíbiàn jǐnjǐn zuòdàole jiànkāng wéihù zhè yì diǎn, dà shùjù wèi rénlèi zuòchū de gòngxiàn yě yuǎnyuǎn chāochūle wǒmen de qīpàn.',goiY:['实事求是地讲 = nói một cách khách quan','即便……也…… = cho dù … cũng …','远远超出 = vượt xa'],giai:'即便……也…… = cho dù … cũng … (giả thiết nhượng bộ); 远远超出 dịch "vượt xa"; 仅仅 = chỉ … thôi.'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 41): 缩写 bài khoá ~350 chữ, tham khảo bảng 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:350,
  de:'这篇课文以具体的例子给我们介绍了大数据时代。什么是大数据？大数据有什么用？大数据如何连接未来？大数据时代有何意义？本文都给出了答案。请参考练习5，把课文缩写成350字左右的短文。',
  prompt:'Bài khoá dùng những ví dụ cụ thể để giới thiệu với chúng ta thời đại dữ liệu lớn. Dữ liệu lớn là gì? Dữ liệu lớn có tác dụng gì? Dữ liệu lớn kết nối với tương lai như thế nào? Thời đại dữ liệu lớn có ý nghĩa gì? Bài văn đều đã đưa ra câu trả lời. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 350 chữ.',
  dan:[
    {hoi:'什么是大数据？',goiY:'以通俗的例子……'},
    {hoi:'大数据有什么用？',goiY:'百度预测世界杯冠军的做法'},
    {hoi:'大数据如何连接未来？',goiY:'①让“医疗”和“健康”相通相融 ②消除疾病隐患 ③对病种进行细致的监测 ④临床减少对人的依赖'},
    {hoi:'大数据时代有何意义？',goiY:'预测未来'}
  ],
  tuNen:['通俗','堆积如山','卓越','预测','万分振奋','加以','扭转','消除隐患','不言而喻','大大','展望'],
  cauTruc:[
    {ten:'什么是……？有学者以……的例子告诉我们：……', nhan:'Mở bài · câu hỏi + ví dụ', vd:'什么是大数据？有学者以通俗的例子告诉我们：每个人乘飞机时都会自己选择航线。', khi:'Trả lời dòng 1 của bảng (以通俗的例子……): nêu câu hỏi rồi kể ngắn ví dụ đường bay.'},
    {ten:'……，这就是……', nhan:'Chốt định nghĩa', vd:'根据这些记录设计出的航程方案将是最卓越的，这就是大数据的方法。', khi:'Kết ý 1 bằng một câu định nghĩa ngắn gọn.'},
    {ten:'举例来说，……就是……的功劳。……的做法是：……', nhan:'Nêu ví dụ minh hoạ', vd:'举例来说，百度准确预测德国夺冠，就是大数据的功劳。', khi:'Trả lời dòng 2: giữ các bước 派遣专家 → 建立战略合作 → 融入预测模型 → 验证.'},
    {ten:'我们不妨以……为例加以说明', nhan:'Chuyển ý · dùng điểm ngữ pháp 加以', vd:'大数据如何连接未来？我们不妨以健康为例加以说明。', khi:'Mở đầu dòng 3 — dùng đúng điểm ngữ pháp 1 của bài.'},
    {ten:'不仅……，还……；比如……，就可能……', nhan:'Liệt kê các tác dụng', vd:'有了大数据，医疗和健康不仅相通相融，还可能扭转有病治病的被动方式。', khi:'Đi lần lượt 4 gợi ý ①②③④ của dòng 3, mỗi gợi ý 1–2 câu.'},
    {ten:'大大 / 远远 + V', nhan:'Nhấn mức độ · điểm ngữ pháp 2', vd:'大数据能够大大提高医生的工作效率。', khi:'Dùng khi nói về gợi ý ④ (临床减少对人的依赖).'},
    {ten:'展望未来，……', nhan:'Kết bài · ý nghĩa', vd:'展望未来，大数据将走进我们生活的各个领域。', khi:'Trả lời dòng 4 (预测未来), có thể dẫn nguyên câu kết của bài khoá.'}
  ],
  checklist:[
    'Đủ khoảng 350 chữ Hán chưa (khoảng 300–420, không đếm dấu câu và chữ số)?',
    'Có đủ 4 ý theo đúng thứ tự bảng bài tập 5 (dữ liệu lớn là gì — có tác dụng gì — kết nối tương lai thế nào — ý nghĩa của thời đại) chưa?',
    'Ý 3 có nói đủ 4 gợi ý: y tế và sức khoẻ thông nhau — loại bỏ hiểm hoạ bệnh tật — giám sát tỉ mỉ — lâm sàng giảm phụ thuộc vào con người không?',
    'Đã dùng đủ 2 điểm ngữ pháp của bài (加以 / 大大 hoặc 远远) và ít nhất 6 từ mới chưa?',
    'Có viết bằng lời của mình, lược bớt số liệu phụ (987 đội, 1,12 tỉ mẩu dữ liệu…) nhưng giữ đúng các số liệu chính (năm 2014, gần 75%, 24 giờ) không?'
  ],
  model:{
    zh:'什么是大数据？有学者以通俗的例子告诉我们：每个人乘飞机时都会自己选择航线，这些选择会留下大量的数据。根据这些堆积如山的原始记录设计出的航程方案，将是最卓越的，这就是大数据的方法。大数据有什么用？2014年世界杯期间，百度准确预测德国夺冠，就是大数据的功劳。百度派遣数据专家搜索了全世界几万场比赛的数据，并与相关机构建立了战略合作关系，把各类数据融入预测模型中。之后，百度用前两届世界杯的淘汰赛进行验证，准确率接近75%，这令研究者万分振奋。大数据如何连接未来？我们不妨以健康为例加以说明。有了大数据，“医疗”和“健康”变得相通相融，人们有可能扭转有病治病的被动方式，改为积极防治。大数据还能帮助人们找出病因，消除隐患，甚至挽救患者的生命。利用大数据对病种进行细致的监测，意义是不言而喻的。此外，临床会尽量减少对人的依赖，因为大数据能够大大提高医生的工作效率，让远程医疗变得可行。展望未来，大数据将走进我们生活的各个领域。拥有知识曾意味着掌握过去，现在它更意味着预测未来。',
    py:'Shénme shì dà shùjù? Yǒu xuézhě yǐ tōngsú de lìzi gàosu wǒmen: měi ge rén chéng fēijī shí dōu huì zìjǐ xuǎnzé hángxiàn, zhèxiē xuǎnzé huì liúxià dàliàng de shùjù. Gēnjù zhèxiē duījī rú shān de yuánshǐ jìlù shèjì chū de hángchéng fāng\'àn, jiāng shì zuì zhuóyuè de, zhè jiù shì dà shùjù de fāngfǎ. Dà shùjù yǒu shénme yòng? Èr líng yī sì nián Shìjièbēi qījiān, Bǎidù zhǔnquè yùcè Déguó duóguàn, jiù shì dà shùjù de gōngláo. Bǎidù pàiqiǎn shùjù zhuānjiā sōusuǒle quán shìjiè jǐ wàn chǎng bǐsài de shùjù, bìng yǔ xiāngguān jīgòu jiànlìle zhànlüè hézuò guānxi, bǎ gè lèi shùjù róngrù yùcè móxíng zhōng. Zhīhòu, Bǎidù yòng qián liǎng jiè Shìjièbēi de táotàisài jìnxíng yànzhèng, zhǔnquèlǜ jiējìn bǎi fēn zhī qīshíwǔ, zhè lìng yánjiūzhě wànfēn zhènfèn. Dà shùjù rúhé liánjiē wèilái? Wǒmen bùfáng yǐ jiànkāng wéi lì jiāyǐ shuōmíng. Yǒule dà shùjù, "yīliáo" hé "jiànkāng" biàn de xiāngtōng xiāngróng, rénmen yǒu kěnéng niǔzhuǎn yǒu bìng zhì bìng de bèidòng fāngshì, gǎi wéi jījí fángzhì. Dà shùjù hái néng bāngzhù rénmen zhǎochū bìngyīn, xiāochú yǐnhuàn, shènzhì wǎnjiù huànzhě de shēngmìng. Lìyòng dà shùjù duì bìngzhǒng jìnxíng xìzhì de jiāncè, yìyì shì bùyán\'éryù de. Cǐwài, línchuáng huì jǐnliàng jiǎnshǎo duì rén de yīlài, yīnwèi dà shùjù nénggòu dàdà tígāo yīshēng de gōngzuò xiàolǜ, ràng yuǎnchéng yīliáo biàn de kěxíng. Zhǎnwàng wèilái, dà shùjù jiāng zǒujìn wǒmen shēnghuó de gè ge lǐngyù. Yōngyǒu zhīshi céng yìwèizhe zhǎngwò guòqù, xiànzài tā gèng yìwèizhe yùcè wèilái.',
    vn:'Dữ liệu lớn là gì? Có học giả đã dùng một ví dụ dễ hiểu để nói với chúng ta: mỗi người khi đi máy bay đều tự chọn đường bay, những lựa chọn này để lại một lượng lớn dữ liệu. Phương án hành trình được thiết kế dựa trên những ghi chép gốc chất cao như núi này sẽ là ưu việt nhất — đó chính là phương pháp của dữ liệu lớn. Dữ liệu lớn có tác dụng gì? Trong World Cup 2014, Baidu dự đoán chính xác đội Đức vô địch, đó chính là công lao của dữ liệu lớn. Baidu cử chuyên gia dữ liệu tìm kiếm dữ liệu của mấy vạn trận đấu trên toàn thế giới, đồng thời thiết lập quan hệ hợp tác chiến lược với các cơ quan liên quan, đưa mọi loại dữ liệu vào mô hình dự báo. Sau đó, Baidu dùng vòng loại trực tiếp của hai kỳ World Cup trước để kiểm chứng, tỉ lệ chính xác gần 75%, điều này khiến các nhà nghiên cứu vô cùng phấn khởi. Dữ liệu lớn kết nối với tương lai như thế nào? Chúng ta thử lấy sức khoẻ làm ví dụ để giải thích. Có dữ liệu lớn, "y tế" và "sức khoẻ" trở nên thông nhau, hoà vào nhau; con người có thể thay đổi cách "có bệnh mới chữa" bị động, chuyển sang tích cực phòng và chữa bệnh. Dữ liệu lớn còn có thể giúp con người tìm ra nguyên nhân gây bệnh, loại bỏ hiểm hoạ tiềm ẩn, thậm chí cứu sống người bệnh. Dùng dữ liệu lớn để giám sát tỉ mỉ các loại bệnh, ý nghĩa của nó không nói cũng hiểu. Ngoài ra, khám chữa lâm sàng sẽ cố gắng giảm bớt sự phụ thuộc vào con người, vì dữ liệu lớn có thể nâng cao đáng kể hiệu suất làm việc của bác sĩ, khiến y tế từ xa trở nên khả thi. Nhìn về tương lai, dữ liệu lớn sẽ đi vào mọi lĩnh vực trong cuộc sống của chúng ta. Sở hữu tri thức từng có nghĩa là nắm được quá khứ, còn bây giờ nó càng có nghĩa là dự đoán tương lai.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, trình bày ngắn gọn nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'什么是大数据？',
     q_vn:'Dữ liệu lớn là gì?',
     hint:'以通俗的例子……',
     sample:'有学者以通俗的例子告诉我们：每个人乘飞机时都是自己选择航线，这些选择结果会留下大量的数据。根据这些堆积如山的原始记录梳理出的航程设计方案，将是最卓越的。这就是大数据的方法。',
     sample_vn:'Có học giả dùng một ví dụ dễ hiểu để nói với chúng ta: mỗi người khi đi máy bay đều tự chọn đường bay, những kết quả lựa chọn đó để lại một lượng lớn dữ liệu. Phương án thiết kế hành trình được sắp xếp từ những ghi chép gốc chất cao như núi này sẽ là ưu việt nhất. Đó chính là phương pháp của dữ liệu lớn.',
     note:'Mở bằng 以……的例子 (đúng gợi ý), kể ví dụ đường bay, kết bằng câu định nghĩa 这就是…….'},
    {q_zh:'大数据有什么用？',
     q_vn:'Dữ liệu lớn có tác dụng gì?',
     hint:'百度预测世界杯冠军的做法',
     sample:'举例来说，百度在2014年世界杯期间准确预测德国夺冠，就是大数据的功劳。百度派遣数据专家搜索了全世界几万场比赛的数据，并与相关机构建立了战略合作伙伴关系，把各类数据融入预测模型中。之后又用前两届世界杯进行验证，准确率接近75%。',
     sample_vn:'Lấy ví dụ, trong World Cup 2014 Baidu dự đoán chính xác Đức vô địch, đó chính là công lao của dữ liệu lớn. Baidu cử chuyên gia dữ liệu tìm kiếm dữ liệu mấy vạn trận đấu trên toàn thế giới, đồng thời thiết lập quan hệ đối tác chiến lược với các cơ quan liên quan, đưa mọi loại dữ liệu vào mô hình dự báo. Sau đó lại dùng hai kỳ World Cup trước để kiểm chứng, tỉ lệ chính xác gần 75%.',
     note:'Kể "cách làm" theo trình tự: 派遣专家 → 建立合作 → 融入模型 → 验证; dùng 举例来说 mở đầu.'},
    {q_zh:'大数据如何连接未来？',
     q_vn:'Dữ liệu lớn kết nối với tương lai như thế nào?',
     hint:'①让“医疗”和“健康”相通相融 ②消除疾病隐患 ③对病种进行细致的监测 ④临床减少对人的依赖',
     sample:'我们不妨以健康为例加以说明。首先，大数据让“医疗”和“健康”相通相融。其次，如果能找出病因，就可以消除疾病隐患，比如预测心脏病人发病的时机。再次，对病种进行细致的监测，意义不言而喻。最后，临床会减少对人的依赖，大数据能大大提高医生的工作效率。',
     sample_vn:'Chúng ta thử lấy sức khoẻ làm ví dụ để giải thích. Thứ nhất, dữ liệu lớn khiến "y tế" và "sức khoẻ" thông nhau, hoà vào nhau. Thứ hai, nếu tìm ra nguyên nhân gây bệnh thì có thể loại bỏ hiểm hoạ bệnh tật, chẳng hạn dự đoán thời điểm lên cơn của bệnh nhân tim. Thứ ba, giám sát tỉ mỉ các loại bệnh, ý nghĩa không nói cũng hiểu. Cuối cùng, lâm sàng sẽ giảm phụ thuộc vào con người, dữ liệu lớn có thể nâng cao đáng kể hiệu suất làm việc của bác sĩ.',
     note:'Bốn gợi ý ①②③④ → dùng 首先 / 其次 / 再次 / 最后 cho mạch lạc; lồng cả hai điểm ngữ pháp 加以 và 大大.'},
    {q_zh:'大数据时代有何意义？',
     q_vn:'Thời đại dữ liệu lớn có ý nghĩa gì?',
     hint:'预测未来',
     sample:'展望未来，大数据将会走进我们生活的各个领域。有人说：“拥有知识曾意味着掌握过去，现在它更意味着预测未来。”这就是大数据时代的意义。',
     sample_vn:'Nhìn về tương lai, dữ liệu lớn sẽ đi vào mọi lĩnh vực trong cuộc sống của chúng ta. Có người nói: "Sở hữu tri thức từng có nghĩa là nắm được quá khứ, còn bây giờ nó càng có nghĩa là dự đoán tương lai." Đó chính là ý nghĩa của thời đại dữ liệu lớn.',
     note:'Mở bằng 展望未来; đối lập 曾……，现在更…… (quá khứ — tương lai) để làm nổi ý "dự đoán tương lai".'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 23',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么突然对大数据这么感兴趣了？'},
            {sp:'男',zh:'我看了一篇文章，说百度用大数据准确预测了世界杯冠军，我觉得太神奇了，就想多了解一下。'}],
     q:'男的为什么对大数据感兴趣？',qvn:'Vì sao người đàn ông quan tâm đến dữ liệu lớn?',
     opts:['老师布置了作业','看了一篇关于大数据的文章','他特别喜欢踢足球','他想当数据专家'],ans:1,
     why:'我看了一篇文章，说百度用大数据准确预测了世界杯冠军 → vì đọc một bài viết về dữ liệu lớn.',
     words:['预测']},

    {n:2,
     lines:[{sp:'男',zh:'奶奶最近的血压怎么样？'},
            {sp:'女',zh:'比先前稳定多了。我们给她买了一块能监测血压的手表，数据会自动发给医生，医生在医院就能看到。'}],
     q:'关于奶奶，可以知道什么？',qvn:'Về bà nội, có thể biết điều gì?',
     opts:['住进了医院','不愿意戴手表','每天都去医院量血压','血压比以前稳定了'],ans:3,
     why:'比先前稳定多了 → huyết áp ổn định hơn trước nhiều; dữ liệu tự gửi cho bác sĩ nên bà không phải đến viện.',
     words:['血压','先前']},

    {n:3,
     lines:[{sp:'女',zh:'这次运动会你们班怎么拿了第一？'},
            {sp:'男',zh:'全靠班长。他把每个人的训练数据攒起来，细致地分析了一遍，再安排谁参加什么项目，大家的成绩一下子大大提高了。'}],
     q:'男的认为他们班获胜是谁的功劳？',qvn:'Người đàn ông cho rằng lớp họ thắng là công của ai?',
     opts:['班长','体育老师','全校同学','校长'],ans:0,
     why:'全靠班长 → hoàn toàn nhờ lớp trưởng: gom dữ liệu tập luyện, phân tích tỉ mỉ rồi sắp xếp người thi đấu.',
     words:['攒','细致']},

    {n:4,
     lines:[{sp:'男',zh:'你为什么选医学专业？'},
            {sp:'女',zh:'一是我觉得医学很有前景，二是我从小就想当一名临床医生，亲手挽救病人的生命。'}],
     q:'女的想做什么工作？',qvn:'Người phụ nữ muốn làm công việc gì?',
     opts:['数据专家','护士','临床医生','大学老师'],ans:2,
     why:'我从小就想当一名临床医生 → muốn làm bác sĩ lâm sàng.',
     words:['前景','临床','挽救']},

    {n:5,
     lines:[{sp:'女',zh:'听说学校要把体育馆的器材全部换掉？'},
            {sp:'男',zh:'对，那些器材太陈旧了，存在安全隐患。学校已经派人去买新的了，下个月就能用上。'}],
     q:'学校为什么要换体育器材？',qvn:'Vì sao nhà trường muốn thay dụng cụ thể thao?',
     opts:['学生不喜欢旧器材','器材的数量太少','旧器材有安全隐患','要举办运动会'],ans:2,
     why:'太陈旧了，存在安全隐患 → dụng cụ quá cũ, có nguy cơ mất an toàn.',
     words:['器材','陈旧','隐患']},

    {n:6,
     lines:[{sp:'男',zh:'这次作文比赛的结果真是出乎我的预料。'},
            {sp:'女',zh:'是啊，谁也没想到平时不爱说话的小李会拿一等奖。不过实事求是地说，她的作文确实写得最好。'}],
     q:'关于小李，下列哪项正确？',qvn:'Về Tiểu Lý, câu nào sau đây đúng?',
     opts:['获得了一等奖','平时很爱说话','没有参加比赛','作文写得不太好'],ans:0,
     why:'小李会拿一等奖 → giành giải nhất; 平时不爱说话 nên B sai; 她的作文确实写得最好 nên D sai.',
     words:['预料','实事求是']},

    {n:7,
     lines:[{sp:'女',zh:'众所周知，医生是切切实实的稀缺资源。在未来的医疗模式中，人们平时就在特殊设备的协助下把自己的生理数据攒起来，经过分析处理后再发给医生。这样，医生的工作效率会大大提高，远程医疗也会变得可行。'}],
     q:'这段话主要谈的是什么？',qvn:'Đoạn văn chủ yếu nói về điều gì?',
     opts:['医生的数量太少','怎样当一名好医生','如何购买医疗设备','大数据在未来医疗中的作用'],ans:3,
     why:'Cả đoạn nói về mô hình y tế tương lai: thu thập dữ liệu sinh lý → gửi bác sĩ → hiệu suất tăng, y tế từ xa khả thi, tức vai trò của dữ liệu lớn trong y tế tương lai.',
     words:['切切实实','协助','生理','攒','可行']},

    {n:8,
     lines:[{sp:'男',zh:'很多人以为疾病的发生都是偶然的，其实不然。追究原因，无非是基因、遗传、环境和生活习惯等。疾病虽然难以预料，但如果能及早发现预兆，就可以变被动为主动，把疾病消灭在萌芽状态。'}],
     q:'说话人认为怎样才能把疾病消灭在萌芽状态？',qvn:'Người nói cho rằng làm thế nào mới có thể dập tắt bệnh tật từ khi mới manh nha?',
     opts:['多吃一些药','及早发现预兆','改变自己的基因','经常去医院检查'],ans:1,
     why:'如果能及早发现预兆，就可以……把疾病消灭在萌芽状态 → phát hiện sớm điềm báo.',
     words:['追究','基因','遗传','预料','预兆','被动','消灭','萌芽']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn hỏi đề xuất tổ chức hoạt động của em gửi thầy chủ nhiệm có được chấp nhận không.',
     a:{sp:'Bạn',zh:'你给班主任提的那个建议，他怎么说？',vn:'Cái đề xuất cậu gửi thầy chủ nhiệm, thầy nói sao?'},
     need:['Dùng 加以'],
     sample:'老师说我的建议很有意思，他会认真加以考虑，下个星期给我答复。',
     samplePy:'Lǎoshī shuō wǒ de jiànyì hěn yǒu yìsi, tā huì rènzhēn jiāyǐ kǎolǜ, xià ge xīngqī gěi wǒ dáfù.',
     sampleVn:'Thầy nói đề xuất của tớ rất thú vị, thầy sẽ xem xét nghiêm túc, tuần sau trả lời tớ.',
     tip:'加以 + động từ song âm tiết (考虑 / 研究 / 说明); trước 加以 hay có 认真, 好好.'},

    {scene:'Em trai hỏi vì sao dạo này em chạy bộ lúc nào cũng đeo đồng hồ thông minh.',
     a:{sp:'Em trai',zh:'哥，你跑步为什么总戴着那块手表？',vn:'Anh ơi, sao anh chạy bộ lúc nào cũng đeo cái đồng hồ đó?'},
     need:['Dùng 大大','Dùng 数据'],
     sample:'这块手表能记录我的心跳数据，还能帮我安排训练计划，我跑步的效率大大提高了。',
     samplePy:'Zhè kuài shǒubiǎo néng jìlù wǒ de xīntiào shùjù, hái néng bāng wǒ ānpái xùnliàn jìhuà, wǒ pǎobù de xiàolǜ dàdà tígāo le.',
     sampleVn:'Chiếc đồng hồ này ghi lại được dữ liệu nhịp tim của anh, còn giúp anh sắp xếp kế hoạch tập luyện, hiệu quả chạy bộ của anh tăng lên rõ rệt.',
     tip:'大大 + 提高 / 增加 / 减少 (động từ song âm tiết) — điểm ngữ pháp 2.'},

    {scene:'Mẹ khuyên em đăng ký vào lớp chuyên Toán, nhưng em thấy mình chưa đủ sức.',
     a:{sp:'Mẹ',zh:'你去报名参加数学提高班吧，妈妈觉得你没问题。',vn:'Con đi đăng ký lớp nâng cao Toán đi, mẹ thấy con không có vấn đề gì đâu.'},
     need:['Dùng 远远','Dùng 实事求是'],
     sample:'妈妈，实事求是地说，我现在的水平还远远达不到那个班的要求，我想先把基础打好。',
     samplePy:'Māma, shíshì-qiúshì de shuō, wǒ xiànzài de shuǐpíng hái yuǎnyuǎn dá bu dào nàge bān de yāoqiú, wǒ xiǎng xiān bǎ jīchǔ dǎhǎo.',
     sampleVn:'Mẹ ơi, nói thật lòng thì trình độ hiện giờ của con còn lâu mới đạt yêu cầu của lớp đó, con muốn củng cố nền tảng trước đã.',
     tip:'远远 + 达不到 / 不能 / 不如 = còn xa mới …; 实事求是地说 mở đầu lời nhận xét khách quan.'},

    {scene:'Bạn hỏi ý kiến em về một ứng dụng học tập dùng dữ liệu lớn để gợi ý bài tập.',
     a:{sp:'Bạn',zh:'你觉得这个根据大数据推荐练习的学习软件怎么样？',vn:'Cậu thấy phần mềm học tập gợi ý bài tập dựa trên dữ liệu lớn này thế nào?'},
     need:['Dùng 不言而喻 hoặc 前景'],
     sample:'它能根据每个人的错题推荐练习，这对学习的帮助是不言而喻的，我觉得很有前景。',
     samplePy:'Tā néng gēnjù měi ge rén de cuòtí tuījiàn liànxí, zhè duì xuéxí de bāngzhù shì bùyán\'éryù de, wǒ juéde hěn yǒu qiánjǐng.',
     sampleVn:'Nó có thể gợi ý bài luyện theo những câu làm sai của từng người, tác dụng của nó với việc học thì khỏi phải nói, tớ thấy rất có triển vọng.',
     tip:'……是不言而喻的 = … là điều hiển nhiên; 很有前景 = rất có triển vọng (đừng nói 很有展望).'},

    {scene:'Thầy hỏi em nhận xét về kế hoạch hoạt động mà nhóm bạn vừa trình bày.',
     a:{sp:'Thầy giáo',zh:'你觉得第二组的活动计划怎么样？',vn:'Em thấy kế hoạch hoạt động của nhóm hai thế nào?'},
     need:['Dùng 细致','Dùng 可行'],
     sample:'我觉得他们的计划考虑得很细致，也切实可行，只是时间安排有点儿紧。',
     samplePy:'Wǒ juéde tāmen de jìhuà kǎolǜ de hěn xìzhì, yě qièshí kěxíng, zhǐshì shíjiān ānpái yǒudiǎnr jǐn.',
     sampleVn:'Em thấy kế hoạch của họ được cân nhắc rất tỉ mỉ, lại thiết thực khả thi, chỉ có điều thời gian sắp xếp hơi gấp.',
     tip:'Khen trước (细致, 切实可行) rồi góp ý nhẹ bằng 只是…… (chỉ có điều …).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Viết phần kết luận cho báo cáo nghiên cứu khoa học.',
     a:'研究表明，利用大数据对病种进行细致的监测，可大大提高疾病防治的效率。',b:'用大数据盯着病看，看病能快好多呢！',better:'a',
     why:'Báo cáo khoa học cần văn viết chính xác: 研究表明, 对……进行监测, 防治. Câu b (盯着, 好多呢) là khẩu ngữ, không hợp.'},

    {scene:'Nhắn tin cho bạn thân gửi tài liệu ôn thi.',
     a:'本人已将复习资料加以整理，现发送给你，请查收。',b:'复习资料我整理好了，发你了，快看看！',better:'b',
     why:'Với bạn thân dùng lời tự nhiên. Câu a (本人, 加以整理, 请查收) giống công văn, nghe xa cách.'},

    {scene:'Phát biểu tại lễ tốt nghiệp.',
     a:'回顾过去，展望未来，我们对明天充满信心。',b:'以前的事就不说了，以后会咋样谁知道呢。',better:'a',
     why:'Phát biểu trang trọng dùng cặp 回顾过去，展望未来. Câu b (咋样, 谁知道呢) quá tuỳ tiện, lại thiếu tích cực.'},

    {scene:'Giải thích cho bà nội cách dùng đồng hồ đo huyết áp.',
     a:'奶奶，这块手表能随时帮您量血压，有什么问题医生马上就知道。',b:'该器材可对使用者的血压进行实时监测，并将数据传输至医疗机构。',better:'a',
     why:'Nói với người già cần giản dị, gần gũi. Câu b (该器材, 实时监测, 传输至) là lời trong sách hướng dẫn, bà khó hiểu.'},

    {scene:'Phát thanh viên đọc tin kinh tế.',
     a:'据报道，该公司已与多家机构建立了战略合作伙伴关系。',b:'听说那家公司跟好多单位成了好朋友，一起干活儿。',better:'a',
     why:'Bản tin dùng văn phong báo chí: 据报道, 该公司, 建立战略合作伙伴关系. Câu b dùng khẩu ngữ, diễn đạt không chính xác.'},

    {scene:'Nói với thầy giáo khi nộp bài tập muộn.',
     a:'老师，真对不起，我的作业交晚了，下次一定注意。',b:'万分抱歉，鉴于本人时间安排欠妥，作业未能按时提交，特此致歉。',better:'a',
     why:'Nói trực tiếp với thầy chỉ cần lễ phép, chân thành. Câu b (鉴于, 本人, 特此致歉) như văn bản hành chính, quá trang trọng đến mức gượng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'什么是大数据？', cue:'以通俗的例子……', words:['通俗','堆积','卓越']},
    {step:'大数据有什么用？', cue:'百度预测世界杯冠军的做法', words:['预测','功劳','派遣','战略','模型','共计','验证','万分','振奋']},
    {step:'大数据如何连接未来？', cue:'①让“医疗”和“健康”相通相融 ②消除疾病隐患 ③对病种进行细致的监测 ④临床减少对人的依赖', words:['公认','扭转','先前','陈旧','被动','防治','消灭','萌芽','荒谬','前提','交代','追究','基因','遗传','预料','消除','隐患','预兆','案例','零星','挽救','细致','不言而喻','血压','先进','器材','人为','前景','临床','依赖','切切实实','优越','维护','协助','生理','攒','可行','实事求是']},
    {step:'大数据时代有何意义？', cue:'预测未来', words:['展望','预测']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có kể được ví dụ "chọn đường bay khi đi máy bay" và câu chốt 这就是大数据的方法 không?',
    'Ý 2 có nêu đúng: World Cup 2014 — Baidu dự đoán Đức vô địch — cách làm (cử chuyên gia, hợp tác chiến lược, mô hình dự báo) — kiểm chứng gần 75% không?',
    'Ý 3 có nói đủ 4 gợi ý ①②③④ và dùng 加以, 大大 không?',
    'Ý 4 có kết bằng câu "拥有知识曾意味着掌握过去，现在它更意味着预测未来" (hoặc diễn đạt lại đúng ý) không?'
  ]
};



// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 36–41) — đáp án theo đáp án sách
// (Quyển 下 có thêm 篇章修辞 · 修辞(1) 仿词: 练一练 "指出下列哪句没有使用仿词修辞手法" → dạng ab (đáp án sách để trống → đáp án tự giải: câu (1));
//  练习4 của bài này là 找出下列语段中的仿词 (không phải 模仿造句) → dạng ab;
//  热身 (nhóm từ 盲/航/票/量) và 扩展 词汇 (bảng 近义词 đã nối sẵn để làm quen, không có bài tập, không có 病句) không đưa vào)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'血压', chu:'压', ds:['气压','电压','高压','低压']},
   cau:[
     {tu:'卓越', chu:'越', dap:['飞越','越过','越发','越级'], them:['超越','跨越','穿越','逾越','越野','越界'],
      giai:'越 = vượt qua, vượt lên (卓越 = vượt trội hẳn; 越过 / 超越 / 跨越 = vượt qua; 越级 = vượt cấp). 越发 (càng thêm) là nghĩa mở rộng "vượt lên mức cũ" — có trong đáp án sách.'},
     {tu:'消灭', chu:'消', dap:['消化','消失','消息','消耗'], them:['消除','消退','消散','取消','打消','消亡'],
      giai:'消 = làm cho mất đi, tiêu tan, hao mòn (消灭 = diệt sạch; 消失 = biến mất; 消耗 = tiêu hao; 消化 = tiêu hoá — thức ăn "tan" đi).'},
     {tu:'前景', chu:'景', dap:['景色','景点','景物','景观'], them:['风景','美景','夜景','雪景','景象','背景'],
      giai:'景 = cảnh, cảnh tượng (前景 = cảnh phía trước → triển vọng; 景色 / 风景 = phong cảnh; 景点 = điểm tham quan).'},
     {tu:'维护', chu:'护', dap:['保护','修护','爱护','守护'], them:['防护','看护','救护','护理','呵护','护卫'],
      giai:'护 = che chở, bảo vệ, giữ gìn (维护 = giữ gìn; 保护 = bảo vệ; 爱护 = yêu quý giữ gìn; 守护 = canh giữ).'}
   ]},

  {kieu:'gx', de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (đáp án sách)', dapSgk:true,
   cau:[
     {s:'近期，我国政府将派代表团出访欧洲。', tu:'派遣', dap:'近期，我国政府将派遣代表团出访欧洲。',
      giai:'派 → 派遣: trang trọng hơn, hợp văn phong tin tức về chính phủ, đoàn đại biểu.'},
     {s:'几项支出合起来一共是三千万元。', tu:'共计', dap:'几项支出共计是三千万元。',
      giai:'合起来一共 → 共计 (tổng cộng): gọn và trang trọng, dùng trong số liệu, thống kê.'},
     {s:'在我们这家跨国公司里，大家一致认为他非常敬业。', tu:'公认', dap:'在我们这家跨国公司里，他的敬业是大家公认的。',
      giai:'大家一致认为 → ……是大家公认的: chuyển 敬业 thành chủ đề, 公认 = mọi người đều thừa nhận.'},
     {s:'以前我和他在一个单位共事，后来他跳槽走了。', tu:'先前', dap:'先前我和他在一个单位共事，后来他跳槽走了。',
      giai:'以前 → 先前 (trước kia, văn viết hơn); vẫn đối ứng với 后来.'},
     {s:'他为学校做出的贡献不用说，大家心里都清楚。', tu:'不言而喻', dap:'他为学校做出的贡献不言而喻，大家心里都清楚。',
      giai:'不用说 → 不言而喻 (không nói cũng hiểu) — thành ngữ văn viết làm vị ngữ.'},
     {s:'成年以后要独立生活，不能再依靠父母了。', tu:'依赖', dap:'成年以后要独立生活，不能再依赖父母了。',
      giai:'依靠 → 依赖: nhấn sự dựa dẫm, không tự lập (đối lập với 独立生活).'}
   ]},

  {kieu:'gx', de:'用“加以”完成句子（注释1 · 练一练）', vn:'Dùng 加以 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án sách', dapSgk:true,
   cau:[
     {s:'下面这些句子都有问题，请＿＿。', tu:'加以', dap:'下面这些句子都有问题，请加以改正。',
      giai:'加以 + động từ song âm tiết 改正: đối tượng (这些句子) đã nêu ở phía trước, 加以 chỉ là động từ hình thức.'},
     {s:'为什么男生没有学习健美操的兴趣？应采取什么措施＿＿。', tu:'加以', dap:'为什么男生没有学习健美操的兴趣？应采取什么措施加以培养。',
      giai:'采取措施加以培养 = áp dụng biện pháp để bồi dưỡng (hứng thú đã nói ở câu trước); 加以 + 培养.'},
     {s:'现在人们的读书生活更加多元化，大家都根据自身不同的需求＿＿，使读书进入真正的理性时代。', tu:'加以', dap:'现在人们的读书生活更加多元化，大家都根据自身不同的需求加以选择，使读书进入真正的理性时代。',
      giai:'根据需求加以选择 = chọn lựa theo nhu cầu; sau 加以 không mang thêm tân ngữ.'}
   ]},

  {kieu:'gx', de:'用“大大”或者“远远”完成句子（注释2 · 练一练）', vn:'Dùng 大大 hoặc 远远 hoàn thành câu (Chú thích 2 · Luyện tập) — đáp án sách', dapSgk:true,
   cau:[
     {s:'散步时，身体挺直，胳膊自由摆动，能使肺的换气量＿＿。', tu:'大大', dap:'散步时，身体挺直，胳膊自由摆动，能使肺的换气量大大增加。',
      giai:'大大 + động từ song âm tiết 增加 = tăng lên đáng kể (chỉ mức độ / số lượng lớn).'},
     {s:'我们之间的共同点＿＿分歧，我相信我们这次合作一定能够成功。', tu:'大大', dap:'我们之间的共同点大大避免了分歧，我相信我们这次合作一定能够成功。',
      giai:'大大避免了分歧 = tránh được rất nhiều bất đồng; 大大 bổ nghĩa cho cụm động từ 避免了分歧.'},
     {s:'随着经济的发展，来往物资的运输量＿＿，这条道路原有的运输能力已＿＿满足需求。', tu:'大大 / 远远', dap:'随着经济的发展，来往物资的运输量大大增加，这条道路原有的运输能力已远远不能满足需求。',
      giai:'Vế 1: 大大增加 (tăng mạnh); vế 2: 远远不能 = còn xa mới đáp ứng được — 远远 hay đi với 不能 / 超出 / 落后.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['萌芽','挽救','被动','振奋','隐患'],
   cau:[
     {s:'今天我在报纸上看到一则令人＿＿的消息。有关科学家经研究发现，对病人进行持续跟踪监测，可以预测病人发病的时机，消除疾病＿＿，＿＿患者生命。这就可以变＿＿为主动，把疾病消灭在＿＿状态。',
      dap:['振奋','隐患','挽救','被动','萌芽']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['切实','卓越','扭转','协助','战略'],
   cau:[
     {s:'该公司之所以取得如此＿＿的成就，最重要的是与相关机构建立了＿＿合作伙伴关系，＿＿了过去单打独斗的局面，在各方面人才的＿＿下，制定＿＿可行的方案。',
      dap:['卓越','战略','扭转','协助','切实']}
   ]},

  {kieu:'ab', de:'篇章修辞 · 修辞（1）仿词 · 练一练：指出下列哪句没有使用仿词修辞手法', vn:'Tu từ đoạn văn · Tu từ (1) PHỎNG TỪ (仿词 — thay một phần của từ có sẵn để tạm tạo ra từ mới, như 科盲 phỏng theo 文盲) · Luyện tập: chỉ ra câu nào KHÔNG dùng phép phỏng từ. (Đáp án sách để trống phần này — đáp án dưới đây do giáo viên soạn.)',
   cau:[
     {s:'下列哪句没有使用仿词修辞手法？', opts:[
        '如果你想过幸福的生活，就必须有安排好生活的智慧。',
        '我不知道上了多少级台阶，一级又一级，是乐趣也是苦趣，好像我出生以来就在登山似的，一直走到筋疲力尽，才算走到了山顶。',
        '正如“水感”特好的人有可能成为世界级游泳运动员一样，让有“球感”的人去打球踢球，有“生意感”的人去担任厂长经理，有“新闻感”的人去当记者，“群众感”特强的人当干部，这于本人于国家于事业都大有好处。'
      ], ans:0,
      giai:'Câu (1) chỉ dùng từ thông thường (幸福, 生活, 智慧), không có từ nào được tạo tạm thời → KHÔNG dùng phỏng từ. Câu (2): 苦趣 phỏng theo 乐趣 (đổi 乐 thành 苦). Câu (3): 水感、球感、生意感、新闻感、群众感 phỏng theo 语感 / 乐感 (đổi yếu tố đầu, giữ 感).'}
   ]},

  {kieu:'ab', de:'找出下列语段中的仿词', vn:'Tìm phỏng từ (仿词) trong các đoạn văn sau (đáp án sách)',
   cau:[
     {s:'有些天天喊大众化的人，连三句老百姓的话都讲不来，可见他就没有下过决心跟老百姓学，其实他的意思仍是小众化。', opts:['大众化','小众化','老百姓','下决心'], ans:1,
      giai:'小众化 phỏng theo 大众化 (đổi 大 thành 小) — tạm tạo từ mới để châm biếm: miệng nói "đại chúng hoá" mà thực ra chỉ dành cho số ít.'},
     {s:'自从有了酒吧以后，各种“吧”都冒出来了，什么水吧、氧吧、网吧、陶吧等。', opts:['水吧、氧吧、网吧、陶吧','酒吧','冒出来','各种“吧”'], ans:0,
      giai:'水吧、氧吧、网吧、陶吧 đều phỏng theo 酒吧 (giữ 吧, đổi yếu tố đầu). 酒吧 là từ gốc có sẵn, không phải phỏng từ.'},
     {s:'这种产品一个月也没卖出去一件，别的产品都在热销，我看这是在冷销。', opts:['热销','产品','冷销','卖出去'], ans:2,
      giai:'冷销 phỏng theo 热销 (bán chạy): đổi 热 thành 冷 để nói sản phẩm ế ẩm, không bán được.'}
   ]}
];
