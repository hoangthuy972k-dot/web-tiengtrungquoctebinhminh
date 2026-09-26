// ══════════════════════════════════════════
// DATA — HSK5 Bài 28: 最受欢迎的毕业生 (Người tốt nghiệp được hoan nghênh nhất)
// Unit 10 关注经济 · Nguồn: HSK标准教程5下 (tr. 88–95) + 练习册 bài 28
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'届',py:'jiè',pos:'Lượng từ',vn:'khoá, kỳ, lần (sự kiện định kỳ, lứa tốt nghiệp)',hv:'giới',em:'🎓',lesson:1,
   explain:['Lượng từ dùng cho kỳ hội nghị, đại hội, lứa học sinh tốt nghiệp…: 第一届, 一届学生.','应届 = đúng khoá năm nay: 应届毕业生 là sinh viên tốt nghiệp khoá năm nay.'],
   usage:'Đi với số thứ tự: 第十届运动会; 同届 = cùng khoá; 应届毕业生. Lượng từ này thường đứng trước 学生 / 会议 / 运动会.',
   collo:['应届毕业生','一届学生','第一届','同届'],
   ex_zh:'他叫刘辰，是一个年仅23岁的应届本科毕业生。',ex_py:'Tā jiào Liú Chén, shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng.',ex_vn:'Cậu ấy tên là Lưu Thần, một sinh viên đại học chính quy tốt nghiệp khoá năm nay, mới 23 tuổi.',
   exList:[
     {zh:'他叫刘辰，是一个年仅23岁的应届本科毕业生。',py:'Tā jiào Liú Chén, shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng.',vn:'Cậu ấy tên là Lưu Thần, một sinh viên đại học chính quy tốt nghiệp khoá năm nay, mới 23 tuổi.'},
     {zh:'我跟王林同届不同班，就是见面打个招呼的交情。',py:'Wǒ gēn Wáng Lín tóng jiè bù tóng bān, jiù shì jiànmiàn dǎ ge zhāohu de jiāoqing.',vn:'Tôi với Vương Lâm cùng khoá khác lớp, chỉ là quen biết gặp nhau chào một câu thôi.'},
     {zh:'我们学校第十届运动会下个月举行。',py:'Wǒmen xuéxiào dì-shí jiè yùndònghuì xià ge yuè jǔxíng.',vn:'Hội thao lần thứ mười của trường tôi sẽ tổ chức vào tháng sau.'}
   ],
   colloFull:[
     {zh:'应届毕业生',py:'yīngjiè bìyèshēng',vn:'sinh viên tốt nghiệp khoá năm nay'},
     {zh:'一届学生',py:'yí jiè xuésheng',vn:'một khoá học sinh'},
     {zh:'第一届',py:'dì-yī jiè',vn:'kỳ / khoá thứ nhất'},
     {zh:'同届',py:'tóng jiè',vn:'cùng khoá'},
     {zh:'一届会议',py:'yí jiè huìyì',vn:'một kỳ hội nghị'}
   ],
   patterns:[
     {s:'第 + số + 届 + N (运动会 / 会议)',m:'Kỳ / lần thứ … của một sự kiện định kỳ'},
     {s:'应届 + 毕业生',m:'Sinh viên tốt nghiệp đúng khoá năm nay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy là sinh viên tốt nghiệp khoá năm nay, vừa tốt nghiệp là đã tìm được việc.',answer:'他是应届毕业生，一毕业就找到了工作。',answerPy:'Tā shì yīngjiè bìyèshēng, yí bìyè jiù zhǎodàole gōngzuò.',
      note:'应届毕业生 là cụm cố định. 一 + V + 就: vừa … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đại hội thể thao lần thứ nhất được tổ chức ở Bắc Kinh.',answer:'第一届运动会是在北京举行的。',answerPy:'Dì-yī jiè yùndònghuì shì zài Běijīng jǔxíng de.',
      note:'第 + số + 届 đứng trước tên sự kiện. 是……的 nhấn mạnh nơi chốn của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:2,zh:'本科',py:'běnkē',pos:'Danh từ',vn:'đại học chính quy (hệ 4 năm)',hv:'bản khoa',em:'🏫',lesson:1,
   explain:['Hệ đại học chính quy (thường 4 năm), cao hơn 专科 (cao đẳng), thấp hơn 研究生 (sau đại học).'],
   usage:'本科生 (sinh viên đại học), 本科毕业, 读本科, 本科学历. Hay đứng trước 生 / 毕业生 / 学历.',
   collo:['本科毕业生','读本科','本科学历','本科生'],
   ex_zh:'他是一个年仅23岁的应届本科毕业生，再过一个月就要毕业了。',ex_py:'Tā shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng, zài guò yí ge yuè jiù yào bìyè le.',ex_vn:'Cậu ấy là sinh viên đại học chính quy khoá năm nay, mới 23 tuổi, chỉ một tháng nữa là tốt nghiệp.',
   exList:[
     {zh:'他是一个年仅23岁的应届本科毕业生，再过一个月就要毕业了。',py:'Tā shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng, zài guò yí ge yuè jiù yào bìyè le.',vn:'Cậu ấy là sinh viên đại học chính quy khoá năm nay, mới 23 tuổi, chỉ một tháng nữa là tốt nghiệp.'},
     {zh:'我姐姐在河内读本科，学的是国际贸易。',py:'Wǒ jiějie zài Hénèi dú běnkē, xué de shì guójì màoyì.',vn:'Chị tôi học đại học ở Hà Nội, ngành thương mại quốc tế.'},
     {zh:'这个职位要求本科以上学历。',py:'Zhège zhíwèi yāoqiú běnkē yǐshàng xuélì.',vn:'Vị trí này yêu cầu trình độ đại học trở lên.'}
   ],
   colloFull:[
     {zh:'本科毕业生',py:'běnkē bìyèshēng',vn:'sinh viên tốt nghiệp đại học'},
     {zh:'读本科',py:'dú běnkē',vn:'học đại học'},
     {zh:'本科学历',py:'běnkē xuélì',vn:'trình độ đại học'},
     {zh:'本科生',py:'běnkēshēng',vn:'sinh viên đại học (hệ chính quy)'},
     {zh:'本科以上',py:'běnkē yǐshàng',vn:'từ đại học trở lên'}
   ],
   patterns:[
     {s:'在 + nơi + 读本科',m:'Học đại học ở đâu'},
     {s:'要求 + 本科以上学历',m:'Yêu cầu trình độ đại học trở lên (tin tuyển dụng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chỉ có bằng đại học nhưng kinh nghiệm của anh ấy rất phong phú.',answer:'虽然他只有本科学历，但是经验很丰富。',answerPy:'Suīrán tā zhǐ yǒu běnkē xuélì, dànshì jīngyàn hěn fēngfù.',
      note:'本科学历 = trình độ đại học. 虽然……但是…… nêu ý đối lập.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Sinh viên đại học tìm việc càng ngày càng khó.',answer:'本科生找工作越来越难了。',answerPy:'Běnkēshēng zhǎo gōngzuò yuè lái yuè nán le.',
      note:'本科生 làm chủ ngữ. 越来越 + tính từ + 了: thay đổi dần.',pair:'越来越'}
   ]},

  {n:3,zh:'面对',py:'miànduì',pos:'Động từ',vn:'đối mặt, đương đầu',hv:'diện đối',em:'🧍',lesson:1,
   explain:['Đối mặt, đương đầu với một hoàn cảnh, vấn đề (thường là khó khăn): 面对困难, 面对现实.','Nghĩa gốc: quay mặt về phía: 面对大海.'],
   usage:'面对 + tân ngữ TRỰC TIẾP, không thêm 跟/和. Hay làm trạng ngữ đầu câu: 面对……，S + …….',
   collo:['面对困难','面对现实','面对压力','勇敢地面对'],
   ex_zh:'面对并不乐观的就业形势，他压力很大。',ex_py:'Miànduì bìng bú lèguān de jiùyè xíngshì, tā yālì hěn dà.',ex_vn:'Đối mặt với tình hình việc làm chẳng mấy lạc quan, cậu ấy chịu áp lực rất lớn.',
   exList:[
     {zh:'面对并不乐观的就业形势，他压力很大。',py:'Miànduì bìng bú lèguān de jiùyè xíngshì, tā yālì hěn dà.',vn:'Đối mặt với tình hình việc làm chẳng mấy lạc quan, cậu ấy chịu áp lực rất lớn.'},
     {zh:'不管遇到什么困难，都要乐观地面对生活。',py:'Bùguǎn yùdào shénme kùnnan, dōu yào lèguān de miànduì shēnghuó.',vn:'Dù gặp khó khăn gì cũng phải lạc quan đối mặt với cuộc sống.'},
     {zh:'面对这么多同学，她一点儿也不紧张。',py:'Miànduì zhème duō tóngxué, tā yìdiǎnr yě bù jǐnzhāng.',vn:'Đứng trước bao nhiêu bạn học như vậy, cô ấy chẳng hề căng thẳng.'}
   ],
   colloFull:[
     {zh:'面对困难',py:'miànduì kùnnan',vn:'đối mặt với khó khăn'},
     {zh:'面对现实',py:'miànduì xiànshí',vn:'đối mặt với thực tế'},
     {zh:'面对压力',py:'miànduì yālì',vn:'đối mặt với áp lực'},
     {zh:'勇敢地面对',py:'yǒnggǎn de miànduì',vn:'dũng cảm đối mặt'},
     {zh:'面对面',py:'miàn duì miàn',vn:'mặt đối mặt'}
   ],
   patterns:[
     {s:'面对 + N (困难 / 压力 / 现实)，S + ……',m:'Đứng trước / đối mặt với …, ai đó …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối mặt với khó khăn, chúng ta không chỉ phải dũng cảm mà còn phải lạc quan.',answer:'面对困难，我们不仅要勇敢，也要乐观。',answerPy:'Miànduì kùnnan, wǒmen bùjǐn yào yǒnggǎn, yě yào lèguān.',
      note:'面对 + tân ngữ trực tiếp, không nói 面对跟困难. 不仅……也…… nối hai yêu cầu.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tuy áp lực rất lớn nhưng cậu ấy vẫn dũng cảm đối mặt.',answer:'虽然压力很大，但是他还是勇敢地面对。',answerPy:'Suīrán yālì hěn dà, dànshì tā háishi yǒnggǎn de miànduì.',
      note:'Trạng ngữ chỉ cách thức + 地 + 面对.',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'乐观',py:'lèguān',pos:'Tính từ',vn:'lạc quan; (tình hình) khả quan',hv:'lạc quan',em:'😊',lesson:1,
   explain:['Tin tưởng vào tương lai, nhìn sự việc theo hướng tốt — trái nghĩa 悲观 (bi quan).','Cũng tả tình hình "khả quan": 形势不乐观 = tình hình không khả quan.'],
   usage:'很乐观, 乐观的态度, 对……很乐观. Làm trạng ngữ phải có 地: 乐观地面对生活.',
   collo:['乐观的态度','性格乐观','形势不乐观','乐观地面对'],
   ex_zh:'不管遇到什么困难，都要乐观地面对生活。',ex_py:'Bùguǎn yùdào shénme kùnnan, dōu yào lèguān de miànduì shēnghuó.',ex_vn:'Dù gặp khó khăn gì cũng phải lạc quan đối mặt với cuộc sống.',
   exList:[
     {zh:'不管遇到什么困难，都要乐观地面对生活。',py:'Bùguǎn yùdào shénme kùnnan, dōu yào lèguān de miànduì shēnghuó.',vn:'Dù gặp khó khăn gì cũng phải lạc quan đối mặt với cuộc sống.'},
     {zh:'我姐姐性格很乐观，从来不为小事发愁。',py:'Wǒ jiějie xìnggé hěn lèguān, cónglái bú wèi xiǎoshì fāchóu.',vn:'Chị tôi tính rất lạc quan, chưa bao giờ buồn phiền vì chuyện nhỏ.'},
     {zh:'医生说他的情况不太乐观。',py:'Yīshēng shuō tā de qíngkuàng bú tài lèguān.',vn:'Bác sĩ nói tình trạng của anh ấy không khả quan lắm.'}
   ],
   colloFull:[
     {zh:'乐观的态度',py:'lèguān de tàidu',vn:'thái độ lạc quan'},
     {zh:'性格乐观',py:'xìnggé lèguān',vn:'tính cách lạc quan'},
     {zh:'形势不乐观',py:'xíngshì bú lèguān',vn:'tình hình không khả quan'},
     {zh:'乐观地面对',py:'lèguān de miànduì',vn:'lạc quan đối mặt'},
     {zh:'对未来很乐观',py:'duì wèilái hěn lèguān',vn:'lạc quan về tương lai'}
   ],
   patterns:[
     {s:'乐观地 + V (面对 / 看待)',m:'Làm gì với thái độ lạc quan'},
     {s:'对 + N + 很乐观',m:'Lạc quan về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thi không tốt nhưng cậu ấy vẫn rất lạc quan.',answer:'虽然没考好，但是他还是很乐观。',answerPy:'Suīrán méi kǎo hǎo, dànshì tā háishi hěn lèguān.',
      note:'乐观 là tính từ, đứng sau 很 được.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần giữ thái độ lạc quan thì sẽ vượt qua được khó khăn.',answer:'只要保持乐观的态度，就能克服困难。',answerPy:'Zhǐyào bǎochí lèguān de tàidu, jiù néng kèfú kùnnan.',
      note:'乐观的 + danh từ (态度). 只要 vế trước, 就 trước động từ vế sau.',pair:'只要……就……'}
   ]},

  {n:5,zh:'就业',py:'jiù yè',pos:'Động từ',vn:'có việc làm, tìm được việc',hv:'tựu nghiệp',em:'💼',lesson:1,
   explain:['Có được việc làm, bước vào làm việc — từ trang trọng, hay gặp trên báo chí: 就业问题, 就业形势.','Trái nghĩa: 失业 (thất nghiệp).'],
   usage:'Thường dùng như danh từ trong cụm: 就业形势, 就业机会, 就业压力, 大学生就业. Khẩu ngữ hằng ngày hay nói 找工作.',
   collo:['就业形势','就业机会','大学生就业','就业压力'],
   ex_zh:'在中国，大学生就业是个很重大的问题。',ex_py:'Zài Zhōngguó, dàxuéshēng jiùyè shì ge hěn zhòngdà de wèntí.',ex_vn:'Ở Trung Quốc, việc làm của sinh viên là một vấn đề rất lớn.',
   exList:[
     {zh:'在中国，大学生就业是个很重大的问题。',py:'Zài Zhōngguó, dàxuéshēng jiùyè shì ge hěn zhòngdà de wèntí.',vn:'Ở Trung Quốc, việc làm của sinh viên là một vấn đề rất lớn.'},
     {zh:'面对并不乐观的就业形势，他压力很大。',py:'Miànduì bìng bú lèguān de jiùyè xíngshì, tā yālì hěn dà.',vn:'Đối mặt với tình hình việc làm chẳng mấy lạc quan, cậu ấy chịu áp lực rất lớn.'},
     {zh:'学好外语能给你带来更多的就业机会。',py:'Xuéhǎo wàiyǔ néng gěi nǐ dàilái gèng duō de jiùyè jīhuì.',vn:'Học giỏi ngoại ngữ có thể đem lại cho bạn nhiều cơ hội việc làm hơn.'}
   ],
   colloFull:[
     {zh:'就业形势',py:'jiùyè xíngshì',vn:'tình hình việc làm'},
     {zh:'就业机会',py:'jiùyè jīhuì',vn:'cơ hội việc làm'},
     {zh:'大学生就业',py:'dàxuéshēng jiùyè',vn:'việc làm của sinh viên'},
     {zh:'就业压力',py:'jiùyè yālì',vn:'áp lực việc làm'},
     {zh:'就业问题',py:'jiùyè wèntí',vn:'vấn đề việc làm'}
   ],
   patterns:[
     {s:'就业 + 形势 / 机会 / 压力 / 问题',m:'Dùng như định ngữ trước danh từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình hình việc làm năm nay càng ngày càng khó khăn.',answer:'今年的就业形势越来越困难了。',answerPy:'Jīnnián de jiùyè xíngshì yuè lái yuè kùnnan le.',
      note:'就业形势 là cụm hay gặp trên báo. 越来越 + tính từ + 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Ngay cả sinh viên trường danh tiếng cũng thấy áp lực việc làm rất lớn.',answer:'连名牌大学的学生都觉得就业压力很大。',answerPy:'Lián míngpái dàxué de xuésheng dōu juéde jiùyè yālì hěn dà.',
      note:'连 + đối tượng + 都: nhấn mạnh "ngay cả".',pair:'连……都……'}
   ]},

  {n:6,zh:'实话',py:'shíhuà',pos:'Danh từ',vn:'lời nói thật',hv:'thực thoại',em:'🗣️',lesson:1,
   explain:['Lời nói thật, lời thật lòng — trái nghĩa 假话 (lời nói dối).','说实话 = nói thật là …, thường đứng đầu câu để mở một ý thật lòng.'],
   usage:'Cụm hay gặp: 说实话 (nói thật), 讲实话, 实话实说 (có sao nói vậy).',
   collo:['说实话','实话实说','讲实话'],
   ex_zh:'说实话，我觉得自己实在没什么优势。',ex_py:'Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.',ex_vn:'Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.',
   exList:[
     {zh:'说实话，我觉得自己实在没什么优势。',py:'Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.',vn:'Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.'},
     {zh:'说实话，这次考试我一点儿也没准备。',py:'Shuō shíhuà, zhè cì kǎoshì wǒ yìdiǎnr yě méi zhǔnbèi.',vn:'Nói thật, kỳ thi này tôi chẳng chuẩn bị gì.'},
     {zh:'你就实话实说吧，我不会生气的。',py:'Nǐ jiù shíhuà shí shuō ba, wǒ bú huì shēngqì de.',vn:'Cậu cứ có sao nói vậy đi, tớ sẽ không giận đâu.'}
   ],
   colloFull:[
     {zh:'说实话',py:'shuō shíhuà',vn:'nói thật'},
     {zh:'实话实说',py:'shíhuà shí shuō',vn:'có sao nói vậy'},
     {zh:'讲实话',py:'jiǎng shíhuà',vn:'nói thật'},
     {zh:'一句实话',py:'yí jù shíhuà',vn:'một câu nói thật'}
   ],
   patterns:[
     {s:'说实话，……',m:'Nói thật là … (mở đầu một ý thật lòng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói thật, tôi chưa bao giờ đi máy bay.',answer:'说实话，我从来没坐过飞机。',answerPy:'Shuō shíhuà, wǒ cónglái méi zuòguo fēijī.',
      note:'说实话 đứng đầu câu, sau đó có dấu phẩy.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Nói thật, bài này ngay cả thầy giáo cũng thấy khó.',answer:'说实话，这道题连老师都觉得难。',answerPy:'Shuō shíhuà, zhè dào tí lián lǎoshī dōu juéde nán.',
      note:'连 + người + 都 + V: ngay cả … cũng ….',pair:'连……都……'}
   ]},

  {n:7,zh:'优势',py:'yōushì',pos:'Danh từ',vn:'ưu thế, điểm mạnh',hv:'ưu thế',em:'💪',lesson:1,
   explain:['Điểm mạnh vượt trội so với người khác / đối thủ; ưu thế.','Trái nghĩa: 劣势 (thế yếu).'],
   usage:'Động từ đi kèm: 有 / 占 / 突出 / 失去 + 优势 (bảng 词语搭配). Không nói 很优势 — phải nói 很有优势.',
   collo:['有优势','占优势','失去优势','突出优势'],
   ex_zh:'说实话，我觉得自己实在没什么优势。',ex_py:'Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.',ex_vn:'Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.',
   exList:[
     {zh:'说实话，我觉得自己实在没什么优势。',py:'Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.',vn:'Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.'},
     {zh:'这支球队个子高，在比赛中很占优势。',py:'Zhè zhī qiúduì gèzi gāo, zài bǐsài zhōng hěn zhàn yōushì.',vn:'Đội bóng này cao to, rất chiếm ưu thế trong trận đấu.'},
     {zh:'会说汉语是你找工作的一大优势。',py:'Huì shuō Hànyǔ shì nǐ zhǎo gōngzuò de yí dà yōushì.',vn:'Biết nói tiếng Trung là một ưu thế lớn khi bạn tìm việc.'}
   ],
   colloFull:[
     {zh:'有优势',py:'yǒu yōushì',vn:'có ưu thế'},
     {zh:'占优势',py:'zhàn yōushì',vn:'chiếm ưu thế'},
     {zh:'失去优势',py:'shīqù yōushì',vn:'mất ưu thế'},
     {zh:'突出优势',py:'tūchū yōushì',vn:'làm nổi bật ưu thế'},
     {zh:'发挥优势',py:'fāhuī yōushì',vn:'phát huy ưu thế'}
   ],
   patterns:[
     {s:'在 + phương diện + 上 + 有 / 占优势',m:'Có ưu thế về mặt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tôi không cao nhưng tôi có ưu thế về tốc độ.',answer:'虽然我个子不高，但是我在速度上有优势。',answerPy:'Suīrán wǒ gèzi bù gāo, dànshì wǒ zài sùdù shang yǒu yōushì.',
      note:'Nói 有优势, không nói 很优势.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần phát huy ưu thế của mình là có thể thắng.',answer:'只要发挥自己的优势，就能赢。',answerPy:'Zhǐyào fāhuī zìjǐ de yōushì, jiù néng yíng.',
      note:'发挥 + 优势 là cụm tự nhiên.',pair:'只要……就……'}
   ]},

  {n:8,zh:'简历',py:'jiǎnlì',pos:'Danh từ',vn:'sơ yếu lý lịch, CV',hv:'giản lịch',em:'📄',lesson:1,
   explain:['Bản tóm tắt quá trình học tập, làm việc của một người — sơ yếu lý lịch, CV.'],
   usage:'Lượng từ 份: 一份简历 (bảng 词语搭配). Động từ: 写简历, 投简历 (nộp CV), 看简历.',
   collo:['一份简历','写简历','投简历','个人简历'],
   ex_zh:'《非你莫属》节目组看了他的简历，接受了他的申请。',ex_py:'《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì, jiēshòule tā de shēnqǐng.',ex_vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" đã xem CV của cậu ấy và chấp nhận đơn đăng ký.',
   exList:[
     {zh:'《非你莫属》节目组看了他的简历，接受了他的申请。',py:'《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì, jiēshòule tā de shēnqǐng.',vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" đã xem CV của cậu ấy và chấp nhận đơn đăng ký.'},
     {zh:'毕业前，她给十几家公司投了简历。',py:'Bìyè qián, tā gěi shí jǐ jiā gōngsī tóule jiǎnlì.',vn:'Trước khi tốt nghiệp, cô ấy đã gửi CV cho hơn chục công ty.'},
     {zh:'写简历的时候，要把自己的优势写清楚。',py:'Xiě jiǎnlì de shíhou, yào bǎ zìjǐ de yōushì xiě qīngchu.',vn:'Khi viết CV phải viết rõ ưu thế của mình.'}
   ],
   colloFull:[
     {zh:'一份简历',py:'yí fèn jiǎnlì',vn:'một bản CV'},
     {zh:'写简历',py:'xiě jiǎnlì',vn:'viết CV'},
     {zh:'投简历',py:'tóu jiǎnlì',vn:'gửi / nộp CV'},
     {zh:'个人简历',py:'gèrén jiǎnlì',vn:'sơ yếu lý lịch cá nhân'},
     {zh:'看简历',py:'kàn jiǎnlì',vn:'xem CV'}
   ],
   patterns:[
     {s:'给 + công ty + 投简历',m:'Gửi CV cho công ty'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã gửi CV cho công ty đó rồi.',answer:'我已经把简历发给那家公司了。',answerPy:'Wǒ yǐjīng bǎ jiǎnlì fā gěi nà jiā gōngsī le.',
      note:'把 + 简历 + 发给 + người nhận: nhấn mạnh xử lý tân ngữ.',pair:'把'},
     {promptLang:'vi',prompt:'CV của cậu ấy đã được giám đốc xem rồi.',answer:'他的简历已经被经理看过了。',answerPy:'Tā de jiǎnlì yǐjīng bèi jīnglǐ kànguo le.',
      note:'Câu bị động 被 + người làm + V.',pair:'被'}
   ]},

  {n:9,zh:'现场',py:'xiànchǎng',pos:'Danh từ',vn:'hiện trường, nơi diễn ra; tại chỗ',hv:'hiện trường',em:'🎬',lesson:1,
   explain:['Nơi sự việc đang / đã xảy ra: 事故现场 (hiện trường tai nạn).','Nơi đang diễn ra hoạt động (chương trình, biểu diễn); làm trạng ngữ = ngay tại chỗ: 现场考他, 现场直播.'],
   usage:'到现场, 在现场, 节目现场, 现场直播; 现场 + V = làm ngay tại chỗ.',
   collo:['节目现场','现场直播','来到现场','事故现场'],
   ex_zh:'他可以到节目现场去求职。',ex_py:'Tā kěyǐ dào jiémù xiànchǎng qù qiúzhí.',ex_vn:'Cậu ấy có thể đến trường quay của chương trình để xin việc.',
   exList:[
     {zh:'他可以到节目现场去求职。',py:'Tā kěyǐ dào jiémù xiànchǎng qù qiúzhí.',vn:'Cậu ấy có thể đến trường quay của chương trình để xin việc.'},
     {zh:'主持人现场考他怎么乘车。',py:'Zhǔchírén xiànchǎng kǎo tā zěnme chéng chē.',vn:'Người dẫn chương trình kiểm tra cậu ấy ngay tại chỗ cách đi xe.'},
     {zh:'这场足球比赛电视台会现场直播。',py:'Zhè chǎng zúqiú bǐsài diànshìtái huì xiànchǎng zhíbō.',vn:'Trận bóng này đài truyền hình sẽ truyền hình trực tiếp.'}
   ],
   colloFull:[
     {zh:'节目现场',py:'jiémù xiànchǎng',vn:'trường quay chương trình'},
     {zh:'现场直播',py:'xiànchǎng zhíbō',vn:'truyền hình trực tiếp'},
     {zh:'来到现场',py:'láidào xiànchǎng',vn:'đến nơi diễn ra'},
     {zh:'事故现场',py:'shìgù xiànchǎng',vn:'hiện trường tai nạn'},
     {zh:'现场回答',py:'xiànchǎng huídá',vn:'trả lời tại chỗ'}
   ],
   patterns:[
     {s:'到 / 在 + (N) + 现场',m:'Đến / ở nơi diễn ra sự việc'},
     {s:'现场 + V',m:'Làm ngay tại chỗ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cảnh sát vừa đến hiện trường là bắt đầu điều tra.',answer:'警察一到现场就开始调查。',answerPy:'Jǐngchá yí dào xiànchǎng jiù kāishǐ diàochá.',
      note:'到现场 = đến hiện trường.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Buổi biểu diễn tối qua là tôi xem tại chỗ.',answer:'昨晚的演出我是在现场看的。',answerPy:'Zuó wǎn de yǎnchū wǒ shì zài xiànchǎng kàn de.',
      note:'是……的 nhấn mạnh nơi xem (tại chỗ, không phải trên TV).',pair:'是……的'}
   ]},

  {n:10,zh:'职位',py:'zhíwèi',pos:'Danh từ',vn:'chức vụ, vị trí công việc',hv:'chức vị',em:'🪑',lesson:1,
   explain:['Vị trí công việc, chức vụ trong một cơ quan, công ty.','Khác 职业 (nghề nghiệp nói chung): 旅游体验师 là một 职位 của công ty.'],
   usage:'适合的职位, 应聘……职位, 管理职位, 职位和待遇.',
   collo:['适合的职位','应聘职位','管理职位','职位和待遇'],
   ex_zh:'他发现，果然有一家公司有适合他的职位——旅游体验师。',ex_py:'Tā fāxiàn, guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi——lǚyóu tǐyànshī.',ex_vn:'Cậu ấy phát hiện quả nhiên có một công ty có vị trí phù hợp với mình — chuyên viên trải nghiệm du lịch.',
   exList:[
     {zh:'他发现，果然有一家公司有适合他的职位——旅游体验师。',py:'Tā fāxiàn, guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi——lǚyóu tǐyànshī.',vn:'Cậu ấy phát hiện quả nhiên có một công ty có vị trí phù hợp với mình — chuyên viên trải nghiệm du lịch.'},
     {zh:'你来应聘我们网站的编辑职位，有什么优势？',py:'Nǐ lái yìngpìn wǒmen wǎngzhàn de biānjí zhíwèi, yǒu shénme yōushì?',vn:'Bạn đến ứng tuyển vị trí biên tập của trang web chúng tôi, bạn có ưu thế gì?'},
     {zh:'老总们给他非常好的职位和待遇。',py:'Lǎozǒngmen gěi tā fēicháng hǎo de zhíwèi hé dàiyù.',vn:'Các vị sếp tổng đưa ra cho cậu ấy vị trí và đãi ngộ rất tốt.'}
   ],
   colloFull:[
     {zh:'适合的职位',py:'shìhé de zhíwèi',vn:'vị trí phù hợp'},
     {zh:'应聘职位',py:'yìngpìn zhíwèi',vn:'ứng tuyển vị trí'},
     {zh:'管理职位',py:'guǎnlǐ zhíwèi',vn:'vị trí quản lý'},
     {zh:'职位和待遇',py:'zhíwèi hé dàiyù',vn:'chức vị và đãi ngộ'},
     {zh:'编辑职位',py:'biānjí zhíwèi',vn:'vị trí biên tập'}
   ],
   patterns:[
     {s:'应聘 + công ty + 的 + ……职位',m:'Ứng tuyển vị trí … của công ty'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vị trí này là do giám đốc giới thiệu cho tôi.',answer:'这个职位是经理给我介绍的。',answerPy:'Zhège zhíwèi shì jīnglǐ gěi wǒ jièshào de.',
      note:'是……的 nhấn mạnh người thực hiện.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vị trí này không chỉ lương cao mà còn rất thú vị.',answer:'这个职位不仅工资高，也很有意思。',answerPy:'Zhège zhíwèi bùjǐn gōngzī gāo, yě hěn yǒu yìsi.',
      note:'不仅……也…… liệt kê hai ưu điểm của vị trí.',pair:'不仅……也……'}
   ]},

  {n:11,zh:'体验',py:'tǐyàn',pos:'Động từ / Danh từ',vn:'trải nghiệm, thể nghiệm',hv:'thể nghiệm',em:'🧳',lesson:1,
   explain:['Tự mình trải qua để cảm nhận: 体验生活.','Cũng làm danh từ: 一次难忘的体验. 体验师 = người làm nghề trải nghiệm (du lịch, sản phẩm) rồi đánh giá, giới thiệu.'],
   usage:'体验 + 生活 / 快乐 / 新产品 (bảng 词语搭配); 亲身体验 (tự mình trải nghiệm).',
   collo:['体验生活','体验快乐','体验新产品','旅游体验师'],
   ex_zh:'果然有一家公司有适合他的职位——旅游体验师。',ex_py:'Guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi——lǚyóu tǐyànshī.',ex_vn:'Quả nhiên có một công ty có vị trí phù hợp với cậu ấy — chuyên viên trải nghiệm du lịch.',
   exList:[
     {zh:'果然有一家公司有适合他的职位——旅游体验师。',py:'Guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi——lǚyóu tǐyànshī.',vn:'Quả nhiên có một công ty có vị trí phù hợp với cậu ấy — chuyên viên trải nghiệm du lịch.'},
     {zh:'这个暑假，我想去农村体验生活。',py:'Zhège shǔjià, wǒ xiǎng qù nóngcūn tǐyàn shēnghuó.',vn:'Kỳ nghỉ hè này, tôi muốn về nông thôn trải nghiệm cuộc sống.'},
     {zh:'很多商店让顾客免费体验新产品。',py:'Hěn duō shāngdiàn ràng gùkè miǎnfèi tǐyàn xīn chǎnpǐn.',vn:'Nhiều cửa hàng cho khách trải nghiệm miễn phí sản phẩm mới.'}
   ],
   colloFull:[
     {zh:'体验生活',py:'tǐyàn shēnghuó',vn:'trải nghiệm cuộc sống'},
     {zh:'体验快乐',py:'tǐyàn kuàilè',vn:'cảm nhận niềm vui'},
     {zh:'体验新产品',py:'tǐyàn xīn chǎnpǐn',vn:'trải nghiệm sản phẩm mới'},
     {zh:'旅游体验师',py:'lǚyóu tǐyànshī',vn:'chuyên viên trải nghiệm du lịch'},
     {zh:'亲身体验',py:'qīnshēn tǐyàn',vn:'tự mình trải nghiệm'}
   ],
   patterns:[
     {s:'体验 + N (生活 / 快乐 / 新产品)',m:'Trải nghiệm …'},
     {s:'一次 + ……的 + 体验',m:'Một trải nghiệm … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ trải nghiệm cuộc sống ở nông thôn.',answer:'我从来没体验过农村的生活。',answerPy:'Wǒ cónglái méi tǐyànguo nóngcūn de shēnghuó.',
      note:'过 đặt ngay sau động từ 体验.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Tôi càng ngày càng thích trải nghiệm những nền văn hoá khác nhau.',answer:'我越来越喜欢体验不同的文化了。',answerPy:'Wǒ yuè lái yuè xǐhuan tǐyàn bù tóng de wénhuà le.',
      note:'越来越 + động từ tâm lý (喜欢) + tân ngữ.',pair:'越来越'}
   ]},

  {n:12,zh:'从此',py:'cóngcǐ',pos:'Phó từ',vn:'từ đó (trở đi)',hv:'tòng thử',em:'➡️',lesson:1,
   explain:['Từ đó (trở đi), kể từ lúc ấy / lúc được nói đến: vế trước kể một sự việc làm MỐC, vế sau nêu sự thay đổi kéo dài sau đó.'],
   usage:'Đứng đầu vế sau, trước chủ ngữ hoặc động từ: ……，从此 (以后) + (S) + ……. Không đi với mốc thời gian cụ thể phía sau (muốn nói "từ lớp 6" dùng 从……起).',
   collo:['从此以后','从此爱上了','从此不再'],
   ex_zh:'因为小学六年级的时候，他迷上了公交车，从此，就一直关注公交线路。',ex_py:'Yīnwèi xiǎoxué liù niánjí de shíhou, tā míshangle gōngjiāochē, cóngcǐ, jiù yìzhí guānzhù gōngjiāo xiànlù.',ex_vn:'Số là hồi học lớp sáu, cậu ấy mê xe buýt, từ đó luôn để ý các tuyến xe buýt.',
   exList:[
     {zh:'因为小学六年级的时候，他迷上了公交车，从此，就一直关注公交线路。',py:'Yīnwèi xiǎoxué liù niánjí de shíhou, tā míshangle gōngjiāochē, cóngcǐ, jiù yìzhí guānzhù gōngjiāo xiànlù.',vn:'Số là hồi học lớp sáu, cậu ấy mê xe buýt, từ đó luôn để ý các tuyến xe buýt.'},
     {zh:'李白听了老婆婆的话，很受感动。从此他刻苦用功，最后成了一位伟大的诗人。',py:'Lǐ Bái tīngle lǎo pópo de huà, hěn shòu gǎndòng. Cóngcǐ tā kèkǔ yònggōng, zuìhòu chéngle yí wèi wěidà de shīrén.',vn:'Lý Bạch nghe lời bà cụ, rất cảm động. Từ đó ông chăm chỉ khổ luyện, cuối cùng trở thành một nhà thơ vĩ đại.'},
     {zh:'嫦娥自己吃下了不死药，结果她飞到了月亮上，从此与后羿分离。',py:'Cháng\'é zìjǐ chīxiàle bù sǐ yào, jiéguǒ tā fēidàole yuèliang shang, cóngcǐ yǔ Hòuyì fēnlí.',vn:'Hằng Nga tự mình uống thuốc trường sinh, kết quả bay lên cung trăng, từ đó chia lìa với Hậu Nghệ.'}
   ],
   colloFull:[
     {zh:'从此以后',py:'cóngcǐ yǐhòu',vn:'từ đó về sau'},
     {zh:'从此爱上了',py:'cóngcǐ àishangle',vn:'từ đó đem lòng yêu thích'},
     {zh:'从此不再',py:'cóngcǐ bú zài',vn:'từ đó không còn … nữa'},
     {zh:'从此开始',py:'cóngcǐ kāishǐ',vn:'bắt đầu từ đó'}
   ],
   patterns:[
     {s:'(Sự việc làm mốc)，从此 + (S) + ……',m:'Từ đó trở đi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Năm ngoái cậu ấy đọc một cuốn sách lịch sử, từ đó càng ngày càng thích lịch sử.',answer:'去年他看了一本历史书，从此越来越喜欢历史了。',answerPy:'Qùnián tā kànle yì běn lìshǐ shū, cóngcǐ yuè lái yuè xǐhuan lìshǐ le.',
      note:'Vế trước là sự việc làm mốc, 从此 mở đầu vế sau.',pair:'越来越'},
     {promptLang:'vi',prompt:'Hồi nhỏ cậu ấy bị chó cắn một lần, từ đó hễ thấy chó là sợ.',answer:'他小时候被狗咬过一次，从此一看见狗就害怕。',answerPy:'Tā xiǎoshíhou bèi gǒu yǎoguo yí cì, cóngcǐ yí kànjiàn gǒu jiù hàipà.',
      note:'从此 + 一……就……: từ đó hễ … là ….',pair:'一……就……'}
   ]},

  {n:13,zh:'范围',py:'fànwéi',pos:'Danh từ',vn:'phạm vi',hv:'phạm vi',em:'🗺️',lesson:1,
   explain:['Giới hạn, khu vực mà một sự việc bao trùm: 北京市范围内 = trong phạm vi thành phố Bắc Kinh.','Hay dùng trong cụm 在……范围内 (trong phạm vi …).'],
   usage:'在 + nơi / lĩnh vực + 范围内; động từ đi kèm: 划 / 限制 / 扩大 + 范围 (bảng 词语搭配).',
   collo:['划范围','限制范围','扩大范围','在……范围内'],
   ex_zh:'北京市范围内所有的公交线路他都了如指掌。',ex_py:'Běijīng Shì fànwéi nèi suǒyǒu de gōngjiāo xiànlù tā dōu liǎorú-zhǐzhǎng.',ex_vn:'Mọi tuyến xe buýt trong phạm vi thành phố Bắc Kinh cậu ấy đều thuộc như lòng bàn tay.',
   exList:[
     {zh:'北京市范围内所有的公交线路他都了如指掌。',py:'Běijīng Shì fànwéi nèi suǒyǒu de gōngjiāo xiànlù tā dōu liǎorú-zhǐzhǎng.',vn:'Mọi tuyến xe buýt trong phạm vi thành phố Bắc Kinh cậu ấy đều thuộc như lòng bàn tay.'},
     {zh:'这次比赛是在全国范围内举行的。',py:'Zhè cì bǐsài shì zài quánguó fànwéi nèi jǔxíng de.',vn:'Cuộc thi lần này được tổ chức trong phạm vi toàn quốc.'},
     {zh:'老师，期末考试的范围能不能划小一点儿？',py:'Lǎoshī, qīmò kǎoshì de fànwéi néng bu néng huà xiǎo yìdiǎnr?',vn:'Thầy ơi, phạm vi thi cuối kỳ có thể khoanh hẹp lại một chút không ạ?'}
   ],
   colloFull:[
     {zh:'划范围',py:'huà fànwéi',vn:'khoanh phạm vi'},
     {zh:'限制范围',py:'xiànzhì fànwéi',vn:'hạn chế phạm vi'},
     {zh:'扩大范围',py:'kuòdà fànwéi',vn:'mở rộng phạm vi'},
     {zh:'在……范围内',py:'zài……fànwéi nèi',vn:'trong phạm vi …'},
     {zh:'考试范围',py:'kǎoshì fànwéi',vn:'phạm vi thi'}
   ],
   patterns:[
     {s:'在 + 全国 / 北京市 + 范围内 + V',m:'Diễn ra trong phạm vi …'},
     {s:'扩大 / 限制 / 划 + (……的) 范围',m:'Mở rộng / hạn chế / khoanh phạm vi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phạm vi thi được thầy giáo khoanh rồi.',answer:'考试范围已经被老师划好了。',answerPy:'Kǎoshì fànwéi yǐjīng bèi lǎoshī huàhǎo le.',
      note:'划范围 = khoanh phạm vi (bảng 搭配 của sách).',pair:'被'},
     {promptLang:'vi',prompt:'Hoạt động này không chỉ có ở trường tôi, mà còn tổ chức trong phạm vi toàn thành phố.',answer:'这个活动不仅在我们学校有，也在全市范围内举行。',answerPy:'Zhège huódòng bùjǐn zài wǒmen xuéxiào yǒu, yě zài quánshì fànwéi nèi jǔxíng.',
      note:'在 + 全市 + 范围内 đứng trước động từ.',pair:'不仅……也……'}
   ]},

  {n:14,zh:'初中',py:'chūzhōng',pos:'Danh từ',vn:'trung học cơ sở, cấp hai',hv:'sơ trung',em:'🏫',lesson:1,
   explain:['Viết tắt của 初级中学 (chūjí zhōngxué) — trường trung học cơ sở. Ở Trung Quốc là lớp 7–9 (sau 6 năm tiểu học).','Đi cặp với 高中 (cao trung = trung học phổ thông, cấp ba).'],
   usage:'上初中 (học cấp hai), 初中生, 初中毕业, 初中同学; 从上初中起 = từ hồi lên cấp hai.',
   collo:['上初中','初中生','初中毕业','初中同学'],
   ex_zh:'从上初中起，他就是同学们的出行顾问。',ex_py:'Cóng shàng chūzhōng qǐ, tā jiù shì tóngxuémen de chūxíng gùwèn.',ex_vn:'Từ hồi lên cấp hai, cậu ấy đã là "cố vấn đi lại" của các bạn cùng lớp.',
   exList:[
     {zh:'从上初中起，他就是同学们的出行顾问。',py:'Cóng shàng chūzhōng qǐ, tā jiù shì tóngxuémen de chūxíng gùwèn.',vn:'Từ hồi lên cấp hai, cậu ấy đã là "cố vấn đi lại" của các bạn cùng lớp.'},
     {zh:'我和她是初中同学，已经认识六年了。',py:'Wǒ hé tā shì chūzhōng tóngxué, yǐjīng rènshi liù nián le.',vn:'Tôi và cô ấy là bạn học cấp hai, đã quen nhau sáu năm rồi.'},
     {zh:'我弟弟今年上初中了，学习越来越忙。',py:'Wǒ dìdi jīnnián shàng chūzhōng le, xuéxí yuè lái yuè máng.',vn:'Em trai tôi năm nay lên cấp hai rồi, việc học ngày càng bận.'}
   ],
   colloFull:[
     {zh:'上初中',py:'shàng chūzhōng',vn:'học cấp hai'},
     {zh:'初中生',py:'chūzhōngshēng',vn:'học sinh cấp hai'},
     {zh:'初中毕业',py:'chūzhōng bìyè',vn:'tốt nghiệp cấp hai'},
     {zh:'初中同学',py:'chūzhōng tóngxué',vn:'bạn học cấp hai'},
     {zh:'初中三年',py:'chūzhōng sān nián',vn:'ba năm cấp hai'}
   ],
   patterns:[
     {s:'从上初中起，……',m:'Từ hồi lên cấp hai, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em trai tôi năm ngoái mới lên cấp hai.',answer:'我弟弟是去年才上初中的。',answerPy:'Wǒ dìdi shì qùnián cái shàng chūzhōng de.',
      note:'上初中 = lên / học cấp hai. 是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cậu ấy vừa tốt nghiệp cấp hai là đi làm luôn.',answer:'他初中一毕业就去工作了。',answerPy:'Tā chūzhōng yí bìyè jiù qù gōngzuò le.',
      note:'初中 + 一毕业就……: vừa tốt nghiệp cấp hai là ….',pair:'一……就……'}
   ]},

  {n:15,zh:'顾问',py:'gùwèn',pos:'Danh từ',vn:'cố vấn, người tư vấn',hv:'cố vấn',em:'🧭',lesson:1,
   explain:['Người có chuyên môn, được mời để đưa ra ý kiến, lời khuyên: 法律顾问, 技术顾问.','Trong bài: 出行顾问 = "cố vấn đi lại" — người mà bạn bè hỏi đường, hỏi cách đi xe.'],
   usage:'当 / 做 + 顾问; lĩnh vực + 顾问 (法律顾问, 技术顾问); 请……当顾问.',
   collo:['出行顾问','法律顾问','当顾问','技术顾问'],
   ex_zh:'从上初中起，他就是同学们的出行顾问。',ex_py:'Cóng shàng chūzhōng qǐ, tā jiù shì tóngxuémen de chūxíng gùwèn.',ex_vn:'Từ hồi lên cấp hai, cậu ấy đã là "cố vấn đi lại" của các bạn cùng lớp.',
   exList:[
     {zh:'从上初中起，他就是同学们的出行顾问。',py:'Cóng shàng chūzhōng qǐ, tā jiù shì tóngxuémen de chūxíng gùwèn.',vn:'Từ hồi lên cấp hai, cậu ấy đã là "cố vấn đi lại" của các bạn cùng lớp.'},
     {zh:'公司请了一位律师当法律顾问。',py:'Gōngsī qǐngle yí wèi lǜshī dāng fǎlǜ gùwèn.',vn:'Công ty đã mời một luật sư làm cố vấn pháp luật.'},
     {zh:'买电脑的时候，我哥哥就是我的技术顾问。',py:'Mǎi diànnǎo de shíhou, wǒ gēge jiù shì wǒ de jìshù gùwèn.',vn:'Lúc mua máy tính, anh trai chính là cố vấn kỹ thuật của tôi.'}
   ],
   colloFull:[
     {zh:'出行顾问',py:'chūxíng gùwèn',vn:'cố vấn đi lại'},
     {zh:'法律顾问',py:'fǎlǜ gùwèn',vn:'cố vấn pháp luật'},
     {zh:'当顾问',py:'dāng gùwèn',vn:'làm cố vấn'},
     {zh:'技术顾问',py:'jìshù gùwèn',vn:'cố vấn kỹ thuật'},
     {zh:'请……当顾问',py:'qǐng……dāng gùwèn',vn:'mời … làm cố vấn'}
   ],
   patterns:[
     {s:'S + 是 + 某人 + 的 + ……顾问',m:'Ai là cố vấn … của ai'},
     {s:'请 + 某人 + 当 + ……顾问',m:'Mời ai làm cố vấn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty đã mời ông ấy về làm cố vấn pháp luật.',answer:'公司把他请来当法律顾问了。',answerPy:'Gōngsī bǎ tā qǐnglai dāng fǎlǜ gùwèn le.',
      note:'把 + người + 请来 + 当顾问.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần có vấn đề về máy tính, các bạn liền tìm "cố vấn kỹ thuật" của lớp.',answer:'只要电脑有问题，同学们就去找班里的技术顾问。',answerPy:'Zhǐyào diànnǎo yǒu wèntí, tóngxuémen jiù qù zhǎo bān li de jìshù gùwèn.',
      note:'技术顾问 dùng vui trong đời sống học sinh.',pair:'只要……就……'}
   ]},

  {n:16,zh:'参考',py:'cānkǎo',pos:'Động từ',vn:'tham khảo',hv:'tham khảo',em:'📚',lesson:1,
   explain:['Xem, dựa vào tài liệu hoặc ý kiến khác để giúp mình học tập, quyết định.','Cụm lịch sự: 仅供参考 = chỉ để tham khảo.'],
   usage:'参考 + tài liệu / ý kiến; 提供给……参考; 供……参考; 参考书 / 参考答案 / 参考资料.',
   collo:['仅供参考','提供给……参考','参考书','参考意见'],
   ex_zh:'他能很快地回答出最方便的路线，提供给同学们参考。',ex_py:'Tā néng hěn kuài de huídá chū zuì fāngbiàn de lùxiàn, tígōng gěi tóngxuémen cānkǎo.',ex_vn:'Cậu ấy có thể nhanh chóng trả lời tuyến đường thuận tiện nhất để các bạn tham khảo.',
   exList:[
     {zh:'他能很快地回答出最方便的路线，提供给同学们参考。',py:'Tā néng hěn kuài de huídá chū zuì fāngbiàn de lùxiàn, tígōng gěi tóngxuémen cānkǎo.',vn:'Cậu ấy có thể nhanh chóng trả lời tuyến đường thuận tiện nhất để các bạn tham khảo.'},
     {zh:'这只是我个人意见，仅供你参考。',py:'Zhè zhǐ shì wǒ gèrén yìjiàn, jǐn gōng nǐ cānkǎo.',vn:'Đây chỉ là ý kiến cá nhân tôi, chỉ để bạn tham khảo.'},
     {zh:'他的成长过程可以给你参考。',py:'Tā de chéngzhǎng guòchéng kěyǐ gěi nǐ cānkǎo.',vn:'Quá trình trưởng thành của anh ấy có thể cho bạn tham khảo.'}
   ],
   colloFull:[
     {zh:'仅供参考',py:'jǐn gōng cānkǎo',vn:'chỉ để tham khảo'},
     {zh:'提供给……参考',py:'tígōng gěi……cānkǎo',vn:'cung cấp cho … tham khảo'},
     {zh:'参考书',py:'cānkǎoshū',vn:'sách tham khảo'},
     {zh:'参考意见',py:'cānkǎo yìjiàn',vn:'ý kiến tham khảo'},
     {zh:'参考答案',py:'cānkǎo dá\'àn',vn:'đáp án tham khảo'}
   ],
   patterns:[
     {s:'(仅) 供 + 某人 + 参考',m:'(Chỉ) để ai tham khảo'},
     {s:'参考 + 资料 / 意见 + V',m:'Tham khảo … để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã đưa sách tham khảo cho bạn ấy rồi.',answer:'我已经把参考书给他了。',answerPy:'Wǒ yǐjīng bǎ cānkǎoshū gěi tā le.',
      note:'参考书 = sách tham khảo; câu 把.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy đây chỉ là ý kiến cá nhân, nhưng bạn có thể tham khảo.',answer:'虽然这只是我个人的意见，但是你可以参考一下。',answerPy:'Suīrán zhè zhǐ shì wǒ gèrén de yìjiàn, dànshì nǐ kěyǐ cānkǎo yíxià.',
      note:'参考一下 = tham khảo một chút.',pair:'虽然……但是……'}
   ]},

  {n:17,zh:'成长',py:'chéngzhǎng',pos:'Động từ',vn:'trưởng thành, lớn lên',hv:'thành trưởng',em:'🌱',lesson:1,
   explain:['Lớn lên, phát triển dần đến chín chắn (người, cây cối, doanh nghiệp).','Hay dùng như danh từ trong cụm: 成长过程, 成长经历.'],
   usage:'健康成长, 快速成长, 在……中成长; 成长过程 / 成长的烦恼. Không mang tân ngữ.',
   collo:['成长过程','健康成长','快速成长','成长经历'],
   ex_zh:'在他的成长过程中，公交就是他最好的伙伴。',ex_py:'Zài tā de chéngzhǎng guòchéng zhōng, gōngjiāo jiù shì tā zuì hǎo de huǒbàn.',ex_vn:'Trong quá trình trưởng thành của cậu ấy, xe buýt chính là người bạn đồng hành thân nhất.',
   exList:[
     {zh:'在他的成长过程中，公交就是他最好的伙伴。',py:'Zài tā de chéngzhǎng guòchéng zhōng, gōngjiāo jiù shì tā zuì hǎo de huǒbàn.',vn:'Trong quá trình trưởng thành của cậu ấy, xe buýt chính là người bạn đồng hành thân nhất.'},
     {zh:'父母都希望孩子能健康快乐地成长。',py:'Fùmǔ dōu xīwàng háizi néng jiànkāng kuàilè de chéngzhǎng.',vn:'Cha mẹ nào cũng mong con cái lớn lên khoẻ mạnh, vui vẻ.'},
     {zh:'我们将传授管理技能，助你快速成长。',py:'Wǒmen jiāng chuánshòu guǎnlǐ jìnéng, zhù nǐ kuàisù chéngzhǎng.',vn:'Chúng tôi sẽ truyền dạy kỹ năng quản lý, giúp bạn trưởng thành nhanh chóng.'}
   ],
   colloFull:[
     {zh:'成长过程',py:'chéngzhǎng guòchéng',vn:'quá trình trưởng thành'},
     {zh:'健康成长',py:'jiànkāng chéngzhǎng',vn:'lớn lên khoẻ mạnh'},
     {zh:'快速成长',py:'kuàisù chéngzhǎng',vn:'trưởng thành nhanh chóng'},
     {zh:'成长经历',py:'chéngzhǎng jīnglì',vn:'trải nghiệm trưởng thành'},
     {zh:'成长的烦恼',py:'chéngzhǎng de fánnǎo',vn:'nỗi phiền muộn tuổi lớn'}
   ],
   patterns:[
     {s:'在 + 某人 + 的成长过程中，……',m:'Trong quá trình trưởng thành của ai …'},
     {s:'(健康 / 快速) 地 + 成长',m:'Lớn lên thế nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong quá trình trưởng thành, cậu ấy chưa bao giờ từ bỏ ước mơ của mình.',answer:'在成长过程中，他从来没放弃过自己的梦想。',answerPy:'Zài chéngzhǎng guòchéng zhōng, tā cónglái méi fàngqìguo zìjǐ de mèngxiǎng.',
      note:'成长过程 làm danh từ trong 在……中.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Tham gia hoạt động tình nguyện làm tôi trưởng thành càng ngày càng nhanh.',answer:'参加志愿活动让我成长得越来越快。',answerPy:'Cānjiā zhìyuàn huódòng ràng wǒ chéngzhǎng de yuè lái yuè kuài.',
      note:'成长 + 得 + 越来越快 (bổ ngữ trình độ).',pair:'越来越'}
   ]},

  {n:18,zh:'制作',py:'zhìzuò',pos:'Động từ',vn:'chế tạo, làm ra (đồ vật, chương trình)',hv:'chế tác',em:'🛠️',lesson:1,
   explain:['Làm ra đồ vật tương đối nhỏ, thường bằng tay hoặc bằng kỹ thuật: 制作玩具, 制作乐器, 制作蛋糕.','Cũng dùng cho sản phẩm văn hoá: 制作节目, 制作电影. Khác 制造 (sản xuất công nghiệp quy mô lớn: 制造汽车).'],
   usage:'制作 + 玩具 / 乐器 / 节目 / 视频 (bảng 词语搭配); 亲手制作; 节目制作.',
   collo:['制作玩具','制作乐器','节目制作','亲手制作'],
   ex_zh:'节目制作时，电视台问他有什么才艺。',ex_py:'Jiémù zhìzuò shí, diànshìtái wèn tā yǒu shénme cáiyì.',ex_vn:'Khi làm chương trình, đài truyền hình hỏi cậu ấy có tài lẻ gì.',
   exList:[
     {zh:'节目制作时，电视台问他有什么才艺。',py:'Jiémù zhìzuò shí, diànshìtái wèn tā yǒu shénme cáiyì.',vn:'Khi làm chương trình, đài truyền hình hỏi cậu ấy có tài lẻ gì.'},
     {zh:'这个玩具是我爸爸亲手为我制作的。',py:'Zhège wánjù shì wǒ bàba qīnshǒu wèi wǒ zhìzuò de.',vn:'Món đồ chơi này là bố tôi tự tay làm cho tôi.'},
     {zh:'我们班用两个星期制作了一个介绍学校的视频。',py:'Wǒmen bān yòng liǎng ge xīngqī zhìzuòle yí ge jièshào xuéxiào de shìpín.',vn:'Lớp chúng tôi mất hai tuần để làm một video giới thiệu trường.'}
   ],
   colloFull:[
     {zh:'制作玩具',py:'zhìzuò wánjù',vn:'làm đồ chơi'},
     {zh:'制作乐器',py:'zhìzuò yuèqì',vn:'chế tác nhạc cụ'},
     {zh:'节目制作',py:'jiémù zhìzuò',vn:'sản xuất chương trình'},
     {zh:'亲手制作',py:'qīnshǒu zhìzuò',vn:'tự tay làm'},
     {zh:'制作视频',py:'zhìzuò shìpín',vn:'làm video'}
   ],
   patterns:[
     {s:'(亲手) 为 + 某人 + 制作 + 东西',m:'(Tự tay) làm cái gì cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái bánh sinh nhật này là mẹ tự tay làm.',answer:'这个生日蛋糕是妈妈亲手制作的。',answerPy:'Zhège shēngrì dàngāo shì māma qīnshǒu zhìzuò de.',
      note:'是……的 nhấn mạnh người làm; 亲手制作 = tự tay làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Món đồ chơi bị em trai làm hỏng, bố lại làm cho tôi một cái mới.',answer:'玩具被弟弟弄坏了，爸爸又给我制作了一个新的。',answerPy:'Wánjù bèi dìdi nònghuài le, bàba yòu gěi wǒ zhìzuòle yí ge xīn de.',
      note:'Vế 1 là câu 被; vế 2: 给 + người + 制作 + đồ vật.',pair:'被'}
   ]},

  {n:19,zh:'才艺',py:'cáiyì',pos:'Danh từ',vn:'tài nghệ, tài lẻ',hv:'tài nghệ',em:'🎤',lesson:1,
   explain:['Tài năng, kỹ năng đặc biệt (hát, múa, đàn, ảo thuật…) có thể biểu diễn cho người khác xem.'],
   usage:'有什么才艺, 才艺表演, 展示才艺, 多才多艺 (đa tài).',
   collo:['才艺表演','展示才艺','有才艺','多才多艺'],
   ex_zh:'节目制作时，电视台问他有什么才艺。',ex_py:'Jiémù zhìzuò shí, diànshìtái wèn tā yǒu shénme cáiyì.',ex_vn:'Khi làm chương trình, đài truyền hình hỏi cậu ấy có tài lẻ gì.',
   exList:[
     {zh:'节目制作时，电视台问他有什么才艺。',py:'Jiémù zhìzuò shí, diànshìtái wèn tā yǒu shénme cáiyì.',vn:'Khi làm chương trình, đài truyền hình hỏi cậu ấy có tài lẻ gì.'},
     {zh:'新年晚会上，同学们都展示了自己的才艺。',py:'Xīnnián wǎnhuì shang, tóngxuémen dōu zhǎnshìle zìjǐ de cáiyì.',vn:'Trong đêm hội năm mới, các bạn đều thể hiện tài lẻ của mình.'},
     {zh:'她会唱歌、跳舞，还会弹钢琴，真是多才多艺。',py:'Tā huì chàng gē, tiàowǔ, hái huì tán gāngqín, zhēn shì duōcái-duōyì.',vn:'Cô ấy biết hát, biết múa, còn biết đánh đàn piano, đúng là đa tài.'}
   ],
   colloFull:[
     {zh:'才艺表演',py:'cáiyì biǎoyǎn',vn:'biểu diễn tài năng'},
     {zh:'展示才艺',py:'zhǎnshì cáiyì',vn:'thể hiện tài lẻ'},
     {zh:'有才艺',py:'yǒu cáiyì',vn:'có tài lẻ'},
     {zh:'多才多艺',py:'duōcái-duōyì',vn:'đa tài đa nghệ'}
   ],
   patterns:[
     {s:'你有什么才艺？',m:'Bạn có tài lẻ gì? (câu hỏi phỏng vấn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả thầy giáo cũng lên sân khấu thể hiện tài lẻ.',answer:'连老师都上台展示才艺了。',answerPy:'Lián lǎoshī dōu shàngtái zhǎnshì cáiyì le.',
      note:'展示才艺 = thể hiện tài lẻ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy cô ấy không có tài lẻ gì đặc biệt, nhưng rất chăm chỉ.',answer:'虽然她没有什么特别的才艺，但是很努力。',answerPy:'Suīrán tā méiyǒu shénme tèbié de cáiyì, dànshì hěn nǔlì.',
      note:'没有什么 + 特别的 + 才艺.',pair:'虽然……但是……'}
   ]},

  {n:20,zh:'假设',py:'jiǎshè',pos:'Động từ / Danh từ',vn:'giả sử, giả định; giả thuyết',hv:'giả thiết',em:'🤔',lesson:1,
   explain:['Động từ: coi một tình huống nào đó như là thật để suy luận tiếp: 假设我要从国贸到鼓楼大街…….','Danh từ: tình huống được đặt ra, giả thuyết: 大胆的假设, 您当年的假设.'],
   usage:'Đầu câu: 假设 + tình huống，……? Danh từ: 一种假设, 大胆假设, 假设被证明是对的.',
   collo:['大胆假设','一种假设','假设被证明','假设……，……'],
   ex_zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',ex_py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',ex_vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?',
   exList:[
     {zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?'},
     {zh:'您当年的假设已经被证明是对的。',py:'Nín dāngnián de jiǎshè yǐjīng bèi zhèngmíng shì duì de.',vn:'Giả thuyết năm đó của ông đã được chứng minh là đúng.'},
     {zh:'这是一种大胆的假设，但不一定是科学的。',py:'Zhè shì yì zhǒng dàdǎn de jiǎshè, dàn bù yídìng shì kēxué de.',vn:'Đây là một giả thuyết táo bạo, nhưng chưa chắc đã khoa học.'}
   ],
   colloFull:[
     {zh:'大胆假设',py:'dàdǎn jiǎshè',vn:'mạnh dạn giả thuyết'},
     {zh:'一种假设',py:'yì zhǒng jiǎshè',vn:'một giả thuyết'},
     {zh:'假设被证明',py:'jiǎshè bèi zhèngmíng',vn:'giả thuyết được chứng minh'},
     {zh:'假设……，……',py:'jiǎshè……, ……',vn:'giả sử …, thì …'},
     {zh:'小心求证',py:'xiǎoxīn qiúzhèng',vn:'cẩn thận chứng minh (vế sau của 大胆假设)'}
   ],
   patterns:[
     {s:'假设 + tình huống，(那么) + ……？',m:'Giả sử …, thì … (đặt tình huống để hỏi / suy luận)'},
     {s:'……的假设 + 被证明 + 是对的',m:'Giả thuyết … được chứng minh là đúng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giả thuyết của ông ấy cuối cùng đã được chứng minh là đúng.',answer:'他的假设最后被证明是对的。',answerPy:'Tā de jiǎshè zuìhòu bèi zhèngmíng shì duì de.',
      note:'假设 làm danh từ, chủ ngữ của câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Giả sử ngày mai trời mưa, chỉ cần mọi người đến đông đủ thì chúng ta vẫn tổ chức.',answer:'假设明天下雨，只要大家都来，我们就照样举行。',answerPy:'Jiǎshè míngtiān xià yǔ, zhǐyào dàjiā dōu lái, wǒmen jiù zhàoyàng jǔxíng.',
      note:'假设 đặt tình huống ở đầu câu.',pair:'只要……就……'}
   ]},

  {n:21,zh:'乘',py:'chéng',pos:'Động từ',vn:'đi (xe, tàu, máy bay); nhân (toán)',hv:'thừa',em:'🚌',lesson:1,
   explain:['Đi phương tiện giao thông — trang trọng hơn 坐: 乘车, 乘飞机, 换乘.','Nghĩa khác: phép nhân — 二乘三等于六.'],
   usage:'乘 + phương tiện (车 / 公交车 / 地铁 / 飞机); 换乘 + số tuyến = đổi sang tuyến …. Văn viết, thông báo hay dùng 乘; khẩu ngữ dùng 坐.',
   collo:['乘车','换乘','乘飞机','乘地铁'],
   ex_zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',ex_py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',ex_vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.',
   exList:[
     {zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.'},
     {zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?'},
     {zh:'乘地铁的时候，请给老人让座。',py:'Chéng dìtiě de shíhou, qǐng gěi lǎorén ràngzuò.',vn:'Khi đi tàu điện ngầm, xin hãy nhường chỗ cho người già.'}
   ],
   colloFull:[
     {zh:'乘车',py:'chéng chē',vn:'đi xe'},
     {zh:'换乘',py:'huànchéng',vn:'đổi tuyến, chuyển xe'},
     {zh:'乘飞机',py:'chéng fēijī',vn:'đi máy bay'},
     {zh:'乘地铁',py:'chéng dìtiě',vn:'đi tàu điện ngầm'},
     {zh:'乘客',py:'chéngkè',vn:'hành khách'}
   ],
   patterns:[
     {s:'乘 + phương tiện + 去 + nơi',m:'Đi … đến đâu (văn viết)'},
     {s:'在 + trạm + 换乘 + tuyến',m:'Đổi sang tuyến … ở trạm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đi máy bay đến Thượng Hải.',answer:'他是乘飞机去上海的。',answerPy:'Tā shì chéng fēijī qù Shànghǎi de.',
      note:'是……的 nhấn mạnh phương tiện; 乘 trang trọng hơn 坐.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đi tàu điện ngầm ở Bắc Kinh.',answer:'我从来没在北京乘过地铁。',answerPy:'Wǒ cónglái méi zài Běijīng chéngguo dìtiě.',
      note:'过 đặt sau 乘.',pair:'从来没……过'}
   ]},

  {n:22,zh:'反应',py:'fǎnyìng',pos:'Động từ / Danh từ',vn:'phản ứng',hv:'phản ứng',em:'⚡',lesson:1,
   explain:['Động từ: có hành động hay thay đổi khi bị tác động từ bên ngoài: 他反应得非常快.','Danh từ: hành động, thay đổi đó: 有什么反应, 反应减慢. Không mang tân ngữ.'],
   usage:'反应 + 得 + 快 / 慢; 反应很快; 有反应 / 没反应; ……后是什么反应? Xem phân biệt với 反映.',
   collo:['反应很快','反应得快','有反应','过敏反应'],
   ex_zh:'他反应得非常快，马上回答说……',ex_py:'Tā fǎnyìng de fēicháng kuài, mǎshàng huídá shuō……',ex_vn:'Cậu ấy phản ứng cực nhanh, lập tức trả lời rằng …',
   exList:[
     {zh:'他反应得非常快，马上回答说……',py:'Tā fǎnyìng de fēicháng kuài, mǎshàng huídá shuō……',vn:'Cậu ấy phản ứng cực nhanh, lập tức trả lời rằng …'},
     {zh:'这次比赛让小李去参加怎么样？他反应比较快。',py:'Zhè cì bǐsài ràng Xiǎo Lǐ qù cānjiā zěnmeyàng? Tā fǎnyìng bǐjiào kuài.',vn:'Lần thi này để Tiểu Lý đi thì sao? Cậu ấy phản ứng khá nhanh.'},
     {zh:'她的反应是在正常范围内的。',py:'Tā de fǎnyìng shì zài zhèngcháng fànwéi nèi de.',vn:'Phản ứng của cô ấy nằm trong phạm vi bình thường.'}
   ],
   colloFull:[
     {zh:'反应很快',py:'fǎnyìng hěn kuài',vn:'phản ứng rất nhanh'},
     {zh:'反应得快',py:'fǎnyìng de kuài',vn:'phản ứng nhanh'},
     {zh:'有反应',py:'yǒu fǎnyìng',vn:'có phản ứng'},
     {zh:'过敏反应',py:'guòmǐn fǎnyìng',vn:'phản ứng dị ứng'},
     {zh:'什么反应',py:'shénme fǎnyìng',vn:'phản ứng thế nào'}
   ],
   patterns:[
     {s:'S + 反应 + 得 + 很快 / 很慢',m:'Ai đó phản ứng nhanh / chậm'},
     {s:'S + 听了 / 看了……后 + 有什么反应？',m:'Sau khi … thì có phản ứng gì?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy vừa nghe câu hỏi là phản ứng ngay.',answer:'她一听到问题就反应过来了。',answerPy:'Tā yì tīngdào wèntí jiù fǎnyìng guòlai le.',
      note:'反应过来 = kịp phản ứng, hiểu ra.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy anh ấy phản ứng nhanh, nhưng kỹ năng cơ bản không tốt bằng Tiểu Trương.',answer:'虽然他反应快，但是基本功没有小张好。',answerPy:'Suīrán tā fǎnyìng kuài, dànshì jīběngōng méiyǒu Xiǎo Zhāng hǎo.',
      note:'Câu nghe số 5; 没有……好 là so sánh kém.',pair:'虽然……但是……'}
   ]},

  {n:23,zh:'到达',py:'dàodá',pos:'Động từ',vn:'đến, tới (một nơi)',hv:'đáo đạt',em:'📍',lesson:1,
   explain:['Đến được một ĐỊA ĐIỂM nào đó — trang trọng hơn 到.','Khác 达到 (đạt tới một mục tiêu, mức độ, tiêu chuẩn): 达到目标, 达到要求.'],
   usage:'到达 + nơi chốn (目的地 / 北京 / 会场); 安全到达; 陆续到达; 到达时间.',
   collo:['到达目的地','安全到达','陆续到达','到达会场'],
   ex_zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',ex_py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',ex_vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.',
   exList:[
     {zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.'},
     {zh:'我们已经安全地到达目的地了。',py:'Wǒmen yǐjīng ānquán de dàodá mùdìdì le.',vn:'Chúng tôi đã đến nơi an toàn.'},
     {zh:'代表们已经陆续到达了会场。',py:'Dàibiǎomen yǐjīng lùxù dàodále huìchǎng.',vn:'Các đại biểu đã lần lượt đến hội trường.'}
   ],
   colloFull:[
     {zh:'到达目的地',py:'dàodá mùdìdì',vn:'đến nơi cần đến'},
     {zh:'安全到达',py:'ānquán dàodá',vn:'đến nơi an toàn'},
     {zh:'陆续到达',py:'lùxù dàodá',vn:'lần lượt đến'},
     {zh:'到达会场',py:'dàodá huìchǎng',vn:'đến hội trường'},
     {zh:'到达时间',py:'dàodá shíjiān',vn:'giờ đến'}
   ],
   patterns:[
     {s:'(安全地 / 陆续) + 到达 + nơi chốn',m:'Đến nơi nào (trang trọng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyến bay của chúng tôi đến Bắc Kinh lúc 8 giờ tối.',answer:'我们的飞机是晚上八点到达北京的。',answerPy:'Wǒmen de fēijī shì wǎnshang bā diǎn dàodá Běijīng de.',
      note:'是……的 nhấn mạnh thời gian; 到达 + nơi chốn.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vừa đến khách sạn là cô ấy gọi điện cho mẹ.',answer:'她一到达酒店就给妈妈打了电话。',answerPy:'Tā yí dàodá jiǔdiàn jiù gěi māma dǎle diànhuà.',
      note:'到达 + địa điểm (không dùng 达到 酒店).',pair:'一……就……'}
   ]},

  {n:24,zh:'老板',py:'lǎobǎn',pos:'Danh từ',vn:'ông chủ, bà chủ, sếp',hv:'lão bản',em:'👔',lesson:1,
   explain:['Chủ của một cửa hàng, công ty; người trả lương cho nhân viên.','Khẩu ngữ. Trong bài còn dùng 老总 (sếp tổng) cùng nghĩa, thân mật hơn.'],
   usage:'当老板 (làm chủ), 公司老板, 饭馆老板; 12位老板 (lượng từ tôn trọng 位).',
   collo:['当老板','公司老板','饭馆老板','大老板'],
   ex_zh:'他的回答让台上的12位老板都兴奋了起来。',ex_py:'Tā de huídá ràng tái shang de shí\'èr wèi lǎobǎn dōu xīngfènle qǐlai.',ex_vn:'Câu trả lời của cậu ấy khiến 12 vị ông chủ trên sân khấu đều phấn khích hẳn lên.',
   exList:[
     {zh:'他的回答让台上的12位老板都兴奋了起来。',py:'Tā de huídá ràng tái shang de shí\'èr wèi lǎobǎn dōu xīngfènle qǐlai.',vn:'Câu trả lời của cậu ấy khiến 12 vị ông chủ trên sân khấu đều phấn khích hẳn lên.'},
     {zh:'这家饭馆的老板对客人特别热情。',py:'Zhè jiā fànguǎn de lǎobǎn duì kèrén tèbié rèqíng.',vn:'Ông chủ quán ăn này đặc biệt nhiệt tình với khách.'},
     {zh:'他的理想是毕业以后自己当老板。',py:'Tā de lǐxiǎng shì bìyè yǐhòu zìjǐ dāng lǎobǎn.',vn:'Ước mơ của cậu ấy là sau khi tốt nghiệp tự mình làm chủ.'}
   ],
   colloFull:[
     {zh:'当老板',py:'dāng lǎobǎn',vn:'làm chủ'},
     {zh:'公司老板',py:'gōngsī lǎobǎn',vn:'chủ công ty'},
     {zh:'饭馆老板',py:'fànguǎn lǎobǎn',vn:'chủ quán ăn'},
     {zh:'大老板',py:'dà lǎobǎn',vn:'ông chủ lớn'},
     {zh:'老板娘',py:'lǎobǎnniáng',vn:'bà chủ (vợ ông chủ)'}
   ],
   patterns:[
     {s:'自己当老板',m:'Tự làm chủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa tốt nghiệp đã tự làm chủ.',answer:'他一毕业就自己当老板了。',answerPy:'Tā yí bìyè jiù zìjǐ dāng lǎobǎn le.',
      note:'当老板 = làm chủ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Kế hoạch của anh ấy đã được ông chủ đồng ý.',answer:'他的计划已经被老板同意了。',answerPy:'Tā de jìhuà yǐjīng bèi lǎobǎn tóngyì le.',
      note:'Câu bị động với 被 + 老板.',pair:'被'}
   ]},

  {n:25,zh:'陆续',py:'lùxù',pos:'Phó từ',vn:'lần lượt, liên tiếp',hv:'lục tục',em:'🚶',lesson:1,
   explain:['Trước sau nối tiếp nhau, lúc có lúc không, không cùng một lúc: 代表们陆续到达.','Dạng lặp: 陆陆续续 (nhấn mạnh kéo dài, rải rác).'],
   usage:'Đứng TRƯỚC động từ: 陆续 + 进来 / 回去 / 出来 / 出去 / 到达 (bảng 词语搭配); chủ ngữ thường là số nhiều. Có thể thêm 地: 陆陆续续地.',
   collo:['陆续进来','陆续回去','陆续到达','陆陆续续'],
   ex_zh:'他们开始陆续向他提问。',ex_py:'Tāmen kāishǐ lùxù xiàng tā tíwèn.',ex_vn:'Họ bắt đầu lần lượt đặt câu hỏi cho cậu ấy.',
   exList:[
     {zh:'他们开始陆续向他提问。',py:'Tāmen kāishǐ lùxù xiàng tā tíwèn.',vn:'Họ bắt đầu lần lượt đặt câu hỏi cho cậu ấy.'},
     {zh:'会议快要开始了，代表们陆续走进了会场。',py:'Huìyì kuàiyào kāishǐ le, dàibiǎomen lùxù zǒujìnle huìchǎng.',vn:'Cuộc họp sắp bắt đầu, các đại biểu lần lượt bước vào hội trường.'},
     {zh:'下课以后，同学们陆陆续续地回家了。',py:'Xiàkè yǐhòu, tóngxuémen lùlùxùxù de huí jiā le.',vn:'Tan học, các bạn lục tục ra về.'}
   ],
   colloFull:[
     {zh:'陆续进来',py:'lùxù jìnlai',vn:'lần lượt đi vào'},
     {zh:'陆续回去',py:'lùxù huíqu',vn:'lần lượt trở về'},
     {zh:'陆续到达',py:'lùxù dàodá',vn:'lần lượt đến'},
     {zh:'陆陆续续',py:'lùlùxùxù',vn:'lục tục, lác đác'},
     {zh:'陆续出来',py:'lùxù chūlai',vn:'lần lượt đi ra'}
   ],
   patterns:[
     {s:'S (số nhiều) + 陆续 + V',m:'Nhiều người / vật lần lượt làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khách vừa đến, các món ăn cũng lần lượt được mang lên.',answer:'客人一到，菜就陆续上来了。',answerPy:'Kèrén yí dào, cài jiù lùxù shànglai le.',
      note:'陆续 đứng trước động từ 上来.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Các bạn lần lượt tìm được việc, tôi càng ngày càng sốt ruột.',answer:'同学们陆续找到了工作，我越来越着急了。',answerPy:'Tóngxuémen lùxù zhǎodàole gōngzuò, wǒ yuè lái yuè zháojí le.',
      note:'陆续 + 找到; vế sau dùng 越来越.',pair:'越来越'}
   ]},

  {n:26,zh:'提问',py:'tíwèn',pos:'Động từ',vn:'đặt câu hỏi, hỏi',hv:'đề vấn',em:'🙋',lesson:1,
   explain:['Đưa ra câu hỏi (thường trong lớp học, cuộc họp, phỏng vấn): 向老师提问.','Cũng làm danh từ: 回答提问 (trả lời câu hỏi).'],
   usage:'向 + người + 提问; 提问 + người (gọi ai trả lời: 老师提问了我); 课堂提问. Nội dung câu hỏi không đặt sau 提问 — nói 提 + 问题.',
   collo:['向……提问','课堂提问','回答提问','开始提问'],
   ex_zh:'他们开始陆续向他提问。',ex_py:'Tāmen kāishǐ lùxù xiàng tā tíwèn.',ex_vn:'Họ bắt đầu lần lượt đặt câu hỏi cho cậu ấy.',
   exList:[
     {zh:'他们开始陆续向他提问。',py:'Tāmen kāishǐ lùxù xiàng tā tíwèn.',vn:'Họ bắt đầu lần lượt đặt câu hỏi cho cậu ấy.'},
     {zh:'上课的时候，老师提问了我两次。',py:'Shàngkè de shíhou, lǎoshī tíwènle wǒ liǎng cì.',vn:'Trong giờ học, thầy gọi tôi trả lời hai lần.'},
     {zh:'有不懂的地方，大家可以随时提问。',py:'Yǒu bù dǒng de dìfang, dàjiā kěyǐ suíshí tíwèn.',vn:'Có chỗ nào không hiểu, mọi người có thể hỏi bất cứ lúc nào.'}
   ],
   colloFull:[
     {zh:'向……提问',py:'xiàng……tíwèn',vn:'đặt câu hỏi cho …'},
     {zh:'课堂提问',py:'kètáng tíwèn',vn:'câu hỏi trên lớp'},
     {zh:'回答提问',py:'huídá tíwèn',vn:'trả lời câu hỏi'},
     {zh:'开始提问',py:'kāishǐ tíwèn',vn:'bắt đầu đặt câu hỏi'},
     {zh:'有问必答',py:'yǒu wèn bì dá',vn:'hỏi gì đáp nấy'}
   ],
   patterns:[
     {s:'向 + người + 提问',m:'Đặt câu hỏi cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay tôi bị thầy gọi hỏi, may mà trả lời được.',answer:'今天我被老师提问了，还好回答出来了。',answerPy:'Jīntiān wǒ bèi lǎoshī tíwèn le, háihǎo huídá chūlai le.',
      note:'被 + 老师 + 提问: bị gọi trả lời.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần có câu hỏi thì cứ hỏi thầy.',answer:'只要有问题，就向老师提问。',answerPy:'Zhǐyào yǒu wèntí, jiù xiàng lǎoshī tíwèn.',
      note:'向 + người + 提问, không nói 提问老师问题.',pair:'只要……就……'}
   ]},

  {n:27,zh:'堆',py:'duī',pos:'Lượng từ / Động từ / Danh từ',vn:'đống, đám, lô; chất đống; đống',hv:'đôi',em:'🧱',lesson:1,
   explain:['Lượng từ: dùng cho vật hoặc người tụ thành đống, đám (KHÔNG dùng cho người đáng kính): 一大堆名字, 一堆人.','Động từ: dùng tay / công cụ gom đồ vật vào một chỗ: 堆在这儿, 堆成山.','Danh từ: đống đồ chất lại: 建筑材料堆, 石头堆.'],
   usage:'一 (大) 堆 + N; 堆 + 在 + nơi / 堆成 + hình; N + 堆 (石头堆, 材料堆). Chú ý 一堆 đọc yì duī.',
   collo:['一大堆','一堆人','堆在','堆成山'],
   ex_zh:'他不但准确无误地按顺序报了一大堆公交车、地铁站的名字，……',ex_py:'Tā búdàn zhǔnquè wú wù de àn shùnxù bàole yí dà duī gōngjiāochē, dìtiězhàn de míngzi, ……',ex_vn:'Cậu ấy không những kể chính xác không sai một chữ, theo đúng thứ tự, cả một loạt tên xe buýt, ga tàu điện ngầm, …',
   exList:[
     {zh:'他不但准确无误地按顺序报了一大堆公交车、地铁站的名字，……',py:'Tā búdàn zhǔnquè wú wù de àn shùnxù bàole yí dà duī gōngjiāochē, dìtiězhàn de míngzi, ……',vn:'Cậu ấy không những kể chính xác không sai một chữ, theo đúng thứ tự, cả một loạt tên xe buýt, ga tàu điện ngầm, …'},
     {zh:'这些零件怎么都堆在这儿啊？',py:'Zhèxiē língjiàn zěnme dōu duī zài zhèr a?',vn:'Sao đống linh kiện này lại chất hết ở đây thế?'},
     {zh:'叔叔把手指上的金戒指取了下来，扔到石头堆里。',py:'Shūshu bǎ shǒuzhǐ shang de jīn jièzhi qǔle xiàlai, rēngdào shítou duī li.',vn:'Chú tháo chiếc nhẫn vàng trên ngón tay ra, ném vào đống đá.'}
   ],
   colloFull:[
     {zh:'一大堆',py:'yí dà duī',vn:'một đống lớn'},
     {zh:'一堆人',py:'yì duī rén',vn:'một đám người'},
     {zh:'堆在',py:'duī zài',vn:'chất ở'},
     {zh:'堆成山',py:'duīchéng shān',vn:'chất thành núi'},
     {zh:'石头堆',py:'shítou duī',vn:'đống đá'}
   ],
   patterns:[
     {s:'一 (大) 堆 + N',m:'Một đống / cả đống … (lượng từ)'},
     {s:'把 + N + 堆在 / 堆成 + ……',m:'Chất … ở đâu / thành gì (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ đã chất quần áo cũ ở trong góc rồi.',answer:'妈妈把旧衣服堆在角落里了。',answerPy:'Māma bǎ jiù yīfu duī zài jiǎoluò li le.',
      note:'把 + đồ vật + 堆在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy bài tập chất thành đống, nhưng cậu ấy vẫn đi đá bóng.',answer:'虽然作业有一大堆，但是他还是去踢球了。',answerPy:'Suīrán zuòyè yǒu yí dà duī, dànshì tā háishi qù tī qiú le.',
      note:'一大堆 đọc yí dà duī (一 trước thanh 4).',pair:'虽然……但是……'}
   ]},

  {n:28,zh:'情侣',py:'qínglǚ',pos:'Danh từ',vn:'tình nhân, cặp đôi yêu nhau',hv:'tình lữ',em:'💑',lesson:1,
   explain:['Đôi nam nữ đang yêu nhau. Lượng từ: 对 (một đôi).'],
   usage:'一对情侣, 年轻情侣, 情侣装 (áo đôi), 情侣座 (ghế đôi).',
   collo:['一对情侣','年轻情侣','情侣装'],
   ex_zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',ex_py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',ex_vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.',
   exList:[
     {zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.'},
     {zh:'公园里有很多年轻情侣在散步。',py:'Gōngyuán li yǒu hěn duō niánqīng qínglǚ zài sànbù.',vn:'Trong công viên có nhiều cặp đôi trẻ đang đi dạo.'},
     {zh:'他们俩穿着情侣装，一看就是一对情侣。',py:'Tāmen liǎ chuānzhe qínglǚzhuāng, yí kàn jiù shì yí duì qínglǚ.',vn:'Hai người họ mặc áo đôi, nhìn là biết một cặp.'}
   ],
   colloFull:[
     {zh:'一对情侣',py:'yí duì qínglǚ',vn:'một cặp tình nhân'},
     {zh:'年轻情侣',py:'niánqīng qínglǚ',vn:'cặp đôi trẻ'},
     {zh:'情侣装',py:'qínglǚzhuāng',vn:'áo đôi'},
     {zh:'情侣座',py:'qínglǚzuò',vn:'ghế đôi'}
   ],
   patterns:[
     {s:'一对 + 情侣',m:'Lượng từ 对 cho cặp đôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cặp đôi đó là quen nhau ở trường đại học.',answer:'那对情侣是在大学认识的。',answerPy:'Nà duì qínglǚ shì zài dàxué rènshi de.',
      note:'那对情侣: lượng từ 对.',pair:'是……的'},
     {promptLang:'vi',prompt:'Bức ảnh này được một cặp đôi chụp.',answer:'这张照片是被一对情侣拍的。',answerPy:'Zhè zhāng zhàopiàn shì bèi yí duì qínglǚ pāi de.',
      note:'被 + 一对情侣 + V.',pair:'被'}
   ]},

  {n:29,zh:'制订',py:'zhìdìng',pos:'Động từ',vn:'lập ra, vạch ra (kế hoạch, phương án)',hv:'chế đính',em:'📝',lesson:1,
   explain:['Nghĩ ra và soạn thảo (kế hoạch, phương án, quy định): 制订计划, 制订方案.','Phân biệt: 制定 (zhìdìng, cùng âm) nhấn mạnh quyết định chính thức: 制定法律, 制定政策. Đi với 计划 / 方案 cả hai đều gặp.'],
   usage:'制订 + 计划 / 方案 / 规则; 给 / 为 + ai + 制订……',
   collo:['制订计划','制订方案','制订规则','为……制订'],
   ex_zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',ex_py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',ex_vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.',
   exList:[
     {zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.'},
     {zh:'考试以前，我制订了一个详细的复习计划。',py:'Kǎoshì yǐqián, wǒ zhìdìngle yí ge xiángxì de fùxí jìhuà.',vn:'Trước kỳ thi, tôi đã lập một kế hoạch ôn tập chi tiết.'},
     {zh:'班长和同学们一起制订了班级规则。',py:'Bānzhǎng hé tóngxuémen yìqǐ zhìdìngle bānjí guīzé.',vn:'Lớp trưởng cùng các bạn đã đặt ra nội quy lớp.'}
   ],
   colloFull:[
     {zh:'制订计划',py:'zhìdìng jìhuà',vn:'lập kế hoạch'},
     {zh:'制订方案',py:'zhìdìng fāng\'àn',vn:'lập phương án'},
     {zh:'制订规则',py:'zhìdìng guīzé',vn:'đặt ra quy tắc'},
     {zh:'为……制订',py:'wèi……zhìdìng',vn:'lập ra cho …'},
     {zh:'制定法律',py:'zhìdìng fǎlǜ',vn:'ban hành luật (viết 制定)'}
   ],
   patterns:[
     {s:'给 / 为 + 某人 + 制订 + 计划 / 方案',m:'Lập kế hoạch / phương án cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch du lịch lần này là do tôi lập.',answer:'这次的旅游计划是我制订的。',answerPy:'Zhè cì de lǚyóu jìhuà shì wǒ zhìdìng de.',
      note:'是……的 nhấn mạnh người lập.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần lập được kế hoạch cụ thể thì sẽ không lãng phí thời gian.',answer:'只要制订具体的计划，就不会浪费时间。',answerPy:'Zhǐyào zhìdìng jùtǐ de jìhuà, jiù bú huì làngfèi shíjiān.',
      note:'制订 + 具体的计划.',pair:'只要……就……'}
   ]},

  {n:30,zh:'休闲',py:'xiūxián',pos:'Động từ',vn:'nghỉ ngơi và giải trí, thư giãn',hv:'hưu nhàn',em:'🏖️',lesson:1,
   explain:['Nghỉ ngơi, thư giãn, vui chơi lúc rảnh rỗi. Hay dùng làm định ngữ: 休闲活动, 休闲服装, 休闲一日游.'],
   usage:'休闲 + 活动 / 时间 / 服装 / 一日游; 去……休闲. Thường không mang tân ngữ.',
   collo:['休闲一日游','休闲活动','休闲服装','休闲时间'],
   ex_zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',ex_py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',ex_vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.',
   exList:[
     {zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.'},
     {zh:'周末我最喜欢的休闲活动是去公园骑自行车。',py:'Zhōumò wǒ zuì xǐhuan de xiūxián huódòng shì qù gōngyuán qí zìxíngchē.',vn:'Hoạt động giải trí cuối tuần tôi thích nhất là ra công viên đạp xe.'},
     {zh:'上班要穿正装，不能穿休闲服装。',py:'Shàngbān yào chuān zhèngzhuāng, bù néng chuān xiūxián fúzhuāng.',vn:'Đi làm phải mặc trang phục công sở, không được mặc đồ thường.'}
   ],
   colloFull:[
     {zh:'休闲一日游',py:'xiūxián yí rì yóu',vn:'một ngày du lịch thư giãn'},
     {zh:'休闲活动',py:'xiūxián huódòng',vn:'hoạt động giải trí'},
     {zh:'休闲服装',py:'xiūxián fúzhuāng',vn:'trang phục thường ngày'},
     {zh:'休闲时间',py:'xiūxián shíjiān',vn:'thời gian thư giãn'},
     {zh:'休闲娱乐',py:'xiūxián yúlè',vn:'nghỉ ngơi giải trí'}
   ],
   patterns:[
     {s:'休闲 + N (活动 / 服装 / 时间)',m:'… để thư giãn (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người trẻ càng ngày càng coi trọng thời gian thư giãn.',answer:'年轻人越来越重视休闲时间了。',answerPy:'Niánqīngrén yuè lái yuè zhòngshì xiūxián shíjiān le.',
      note:'休闲 làm định ngữ cho 时间.',pair:'越来越'},
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ có hoạt động giải trí nào, ngày nào cũng làm việc.',answer:'他从来没有过什么休闲活动，每天都在工作。',answerPy:'Tā cónglái méiyǒuguo shénme xiūxián huódòng, měi tiān dōu zài gōngzuò.',
      note:'没有过 + 休闲活动.',pair:'从来没……过'}
   ]},

  {n:31,zh:'具体',py:'jùtǐ',pos:'Tính từ',vn:'cụ thể, tỉ mỉ',hv:'cụ thể',em:'🔍',lesson:1,
   explain:['Rõ ràng, chi tiết, không chung chung — trái nghĩa 抽象 (trừu tượng), 笼统.'],
   usage:'具体 + N (方案 / 时间 / 情况); 很具体; 具体 (地) + 说 / 看 / 分析 (bảng 词语搭配).',
   collo:['具体方案','具体时间','具体地说','具体分析'],
   ex_zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',ex_py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',ex_vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.',
   exList:[
     {zh:'他还给一对情侣制订了北京休闲一日游的具体方案。',py:'Tā hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',vn:'Cậu ấy còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.'},
     {zh:'因为天气影响，我们的活动推迟了，具体时间再等通知。',py:'Yīnwèi tiānqì yǐngxiǎng, wǒmen de huódòng tuīchí le, jùtǐ shíjiān zài děng tōngzhī.',vn:'Do ảnh hưởng của thời tiết, hoạt động của chúng ta bị hoãn, thời gian cụ thể chờ thông báo sau.'},
     {zh:'你能具体说说那天发生了什么吗？',py:'Nǐ néng jùtǐ shuōshuo nà tiān fāshēngle shénme ma?',vn:'Bạn có thể kể cụ thể hôm đó đã xảy ra chuyện gì không?'}
   ],
   colloFull:[
     {zh:'具体方案',py:'jùtǐ fāng\'àn',vn:'phương án cụ thể'},
     {zh:'具体时间',py:'jùtǐ shíjiān',vn:'thời gian cụ thể'},
     {zh:'具体地说',py:'jùtǐ de shuō',vn:'nói cụ thể'},
     {zh:'具体分析',py:'jùtǐ fēnxī',vn:'phân tích cụ thể'},
     {zh:'具体看',py:'jùtǐ kàn',vn:'xem cụ thể'}
   ],
   patterns:[
     {s:'具体 (地) + 说 / 看 / 分析',m:'Nói / xem / phân tích cụ thể'},
     {s:'具体 + 的 + N',m:'… cụ thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời gian cụ thể đã được thầy giáo thông báo cho mọi người rồi.',answer:'具体时间已经被老师通知大家了。',answerPy:'Jùtǐ shíjiān yǐjīng bèi lǎoshī tōngzhī dàjiā le.',
      note:'具体 + 时间 làm chủ ngữ câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Kế hoạch này không chỉ cụ thể mà còn rất thực tế.',answer:'这个计划不仅很具体，也很实际。',answerPy:'Zhège jìhuà bùjǐn hěn jùtǐ, yě hěn shíjì.',
      note:'具体 là tính từ, có thể đứng sau 很.',pair:'不仅……也……'}
   ]},

  {n:32,zh:'专注',py:'zhuānzhù',pos:'Tính từ',vn:'chuyên chú, dồn hết tâm trí',hv:'chuyên chú',em:'🎯',lesson:1,
   explain:['Dồn hết tâm trí, sự chú ý vào một việc: 很专注, 专注地学习.','Làm danh từ: 这种专注 (sự chuyên chú này). Dạng văn viết: 专注于 + việc.'],
   usage:'很专注, 专注的人, 专注地 + V, 对……的专注, 专注于…….',
   collo:['专注的人','专注地听','这种专注','专注于'],
   ex_zh:'他对公交的这种专注显然为他的求职打开了大门。',ex_py:'Tā duì gōngjiāo de zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén.',ex_vn:'Sự chuyên chú này của cậu ấy đối với xe buýt rõ ràng đã mở cánh cửa cho việc tìm việc của cậu.',
   exList:[
     {zh:'他对公交的这种专注显然为他的求职打开了大门。',py:'Tā duì gōngjiāo de zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén.',vn:'Sự chuyên chú này của cậu ấy đối với xe buýt rõ ràng đã mở cánh cửa cho việc tìm việc của cậu.'},
     {zh:'无论在哪个行业，最缺乏的永远都是专注的人。',py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.',vn:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.'},
     {zh:'他看书的时候非常专注，连妈妈叫他都没听见。',py:'Tā kàn shū de shíhou fēicháng zhuānzhù, lián māma jiào tā dōu méi tīngjiàn.',vn:'Lúc đọc sách cậu ấy cực kỳ tập trung, ngay cả mẹ gọi cũng không nghe thấy.'}
   ],
   colloFull:[
     {zh:'专注的人',py:'zhuānzhù de rén',vn:'người chuyên tâm'},
     {zh:'专注地听',py:'zhuānzhù de tīng',vn:'chăm chú nghe'},
     {zh:'这种专注',py:'zhè zhǒng zhuānzhù',vn:'sự chuyên chú này'},
     {zh:'专注于',py:'zhuānzhù yú',vn:'chuyên chú vào'},
     {zh:'非常专注',py:'fēicháng zhuānzhù',vn:'rất tập trung'}
   ],
   patterns:[
     {s:'S + 对 + N + 的 + 专注',m:'Sự chuyên chú của ai vào …'},
     {s:'专注地 + V',m:'Chăm chú làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chuyên tâm vào một việc thì nhất định sẽ thành công.',answer:'只要专注地做一件事，就一定会成功。',answerPy:'Zhǐyào zhuānzhù de zuò yí jiàn shì, jiù yídìng huì chénggōng.',
      note:'专注地 + V (trạng ngữ có 地).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Lúc làm bài cậu ấy tập trung đến mức ngay cả điện thoại reo cũng không nghe thấy.',answer:'他做题的时候特别专注，连手机响了都没听见。',answerPy:'Tā zuò tí de shíhou tèbié zhuānzhù, lián shǒujī xiǎngle dōu méi tīngjiàn.',
      note:'Tính từ 专注 + 连……都…… để nhấn mạnh mức độ.',pair:'连……都……'}
   ]},

  {n:33,zh:'显然',py:'xiǎnrán',pos:'Tính từ',vn:'rõ ràng, hiển nhiên',hv:'hiển nhiên',em:'💡',lesson:1,
   explain:['Rất dễ nhận ra, rõ ràng — người nói dựa vào sự thật trước mắt để kết luận.','Thường đứng trước động từ, tính từ hoặc đầu câu (có thể thêm 很): 很显然，……'],
   usage:'S + 显然 + V / Adj; 很显然，……; 显然是……. Hay làm trạng ngữ; làm vị ngữ thì nói 很显然 / 是显然的.',
   collo:['很显然','显然是','显然不','显然已经'],
   ex_zh:'他对公交的这种专注显然为他的求职打开了大门。',ex_py:'Tā duì gōngjiāo de zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén.',ex_vn:'Sự chuyên chú này của cậu ấy đối với xe buýt rõ ràng đã mở cánh cửa cho việc tìm việc của cậu.',
   exList:[
     {zh:'他对公交的这种专注显然为他的求职打开了大门。',py:'Tā duì gōngjiāo de zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén.',vn:'Sự chuyên chú này của cậu ấy đối với xe buýt rõ ràng đã mở cánh cửa cho việc tìm việc của cậu.'},
     {zh:'前两局棋输给爸爸，他显然并不担心。',py:'Qián liǎng jú qí shū gěi bàba, tā xiǎnrán bìng bù dānxīn.',vn:'Thua bố hai ván cờ đầu, rõ ràng cậu ấy chẳng hề lo lắng.'},
     {zh:'很显然，他昨天晚上没睡好。',py:'Hěn xiǎnrán, tā zuótiān wǎnshang méi shuìhǎo.',vn:'Rõ ràng là tối qua cậu ấy ngủ không ngon.'}
   ],
   colloFull:[
     {zh:'很显然',py:'hěn xiǎnrán',vn:'rõ ràng là'},
     {zh:'显然是',py:'xiǎnrán shì',vn:'rõ ràng là'},
     {zh:'显然不',py:'xiǎnrán bù',vn:'rõ ràng không'},
     {zh:'显然已经',py:'xiǎnrán yǐjīng',vn:'rõ ràng đã'}
   ],
   patterns:[
     {s:'S + 显然 + V / Adj',m:'Rõ ràng ai đó …'},
     {s:'很显然，+ câu',m:'Rõ ràng là … (đầu câu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng là cái cốc bị em trai làm vỡ.',answer:'杯子显然是被弟弟打破的。',answerPy:'Bēizi xiǎnrán shì bèi dìdi dǎpò de.',
      note:'显然 đứng trước 是 + câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Rõ ràng cậu ấy chưa bao giờ học bài này.',answer:'他显然从来没学过这一课。',answerPy:'Tā xiǎnrán cónglái méi xuéguo zhè yí kè.',
      note:'显然 đứng trước cụm động từ.',pair:'从来没……过'}
   ]},

  {n:34,zh:'成立',py:'chénglì',pos:'Động từ',vn:'thành lập, lập nên; (lý lẽ) đứng vững',hv:'thành lập',em:'🏢',lesson:1,
   explain:['Lập nên tổ chức, cơ quan: 成立公司, 成立部门.','Nghĩa khác: (lý lẽ, luận điểm) có căn cứ, đứng vững: 这个理由不成立.'],
   usage:'成立 + 公司 / 部门 / 家庭 / 俱乐部; 为……成立……; ……成立了 + thời gian.',
   collo:['成立公司','成立部门','成立家庭','理由不成立'],
   ex_zh:'甚至要专门为他成立有关的部门，只为留住这个人才。',ex_py:'Shènzhì yào zhuānmén wèi tā chénglì yǒuguān de bùmén, zhǐ wèi liúzhù zhège réncái.',ex_vn:'Thậm chí còn muốn lập hẳn một bộ phận riêng cho cậu ấy, chỉ để giữ chân nhân tài này.',
   exList:[
     {zh:'甚至要专门为他成立有关的部门，只为留住这个人才。',py:'Shènzhì yào zhuānmén wèi tā chénglì yǒuguān de bùmén, zhǐ wèi liúzhù zhège réncái.',vn:'Thậm chí còn muốn lập hẳn một bộ phận riêng cho cậu ấy, chỉ để giữ chân nhân tài này.'},
     {zh:'毕业以后，他和两个同学一起成立了一家小公司。',py:'Bìyè yǐhòu, tā hé liǎng ge tóngxué yìqǐ chénglìle yì jiā xiǎo gōngsī.',vn:'Sau khi tốt nghiệp, anh ấy cùng hai người bạn thành lập một công ty nhỏ.'},
     {zh:'我们学校成立了一个汉语俱乐部。',py:'Wǒmen xuéxiào chénglìle yí ge Hànyǔ jùlèbù.',vn:'Trường chúng tôi đã thành lập một câu lạc bộ tiếng Trung.'}
   ],
   colloFull:[
     {zh:'成立公司',py:'chénglì gōngsī',vn:'thành lập công ty'},
     {zh:'成立部门',py:'chénglì bùmén',vn:'thành lập bộ phận'},
     {zh:'成立家庭',py:'chénglì jiātíng',vn:'lập gia đình'},
     {zh:'理由不成立',py:'lǐyóu bù chénglì',vn:'lý do không đứng vững'},
     {zh:'正式成立',py:'zhèngshì chénglì',vn:'chính thức thành lập'}
   ],
   patterns:[
     {s:'(专门) 为 + 某人 / 某事 + 成立 + 组织',m:'Lập riêng … cho ai / việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này được thành lập năm 2010.',answer:'这家公司是2010年成立的。',answerPy:'Zhè jiā gōngsī shì èr líng yī líng nián chénglì de.',
      note:'是……的 nhấn mạnh thời gian thành lập.',pair:'是……的'},
     {promptLang:'vi',prompt:'Công ty vừa thành lập là đã có nhiều khách hàng.',answer:'公司一成立就有了很多客户。',answerPy:'Gōngsī yì chénglì jiù yǒule hěn duō kèhù.',
      note:'一成立就…… = vừa thành lập đã ….',pair:'一……就……'}
   ]},

  {n:35,zh:'部门',py:'bùmén',pos:'Danh từ',vn:'bộ phận, ban, phòng (trong cơ quan)',hv:'bộ môn',em:'🗂️',lesson:1,
   explain:['Đơn vị nhỏ trong một cơ quan, công ty, chính phủ: 人事部门, 财务部门, 有关部门.','Chú ý: "bộ môn" tiếng Việt thường chỉ môn học — 部门 KHÔNG có nghĩa này.'],
   usage:'有关部门, 人事部门, 财务部 (门 có thể bỏ), 政府部门; 成立 / 负责 + 部门.',
   collo:['有关部门','人事部门','政府部门','成立部门'],
   ex_zh:'甚至要专门为他成立有关的部门，只为留住这个人才。',ex_py:'Shènzhì yào zhuānmén wèi tā chénglì yǒuguān de bùmén, zhǐ wèi liúzhù zhège réncái.',ex_vn:'Thậm chí còn muốn lập hẳn một bộ phận riêng cho cậu ấy, chỉ để giữ chân nhân tài này.',
   exList:[
     {zh:'甚至要专门为他成立有关的部门，只为留住这个人才。',py:'Shènzhì yào zhuānmén wèi tā chénglì yǒuguān de bùmén, zhǐ wèi liúzhù zhège réncái.',vn:'Thậm chí còn muốn lập hẳn một bộ phận riêng cho cậu ấy, chỉ để giữ chân nhân tài này.'},
     {zh:'我们决定录用你，请你下周一到人事部办理报到手续。',py:'Wǒmen juédìng lùyòng nǐ, qǐng nǐ xià zhōuyī dào rénshì bù bànlǐ bàodào shǒuxù.',vn:'Chúng tôi quyết định tuyển dụng bạn, mời bạn thứ Hai tuần sau đến phòng nhân sự làm thủ tục nhận việc.'},
     {zh:'这个问题我们会反映给有关部门。',py:'Zhège wèntí wǒmen huì fǎnyìng gěi yǒuguān bùmén.',vn:'Vấn đề này chúng tôi sẽ phản ánh lên các cơ quan liên quan.'}
   ],
   colloFull:[
     {zh:'有关部门',py:'yǒuguān bùmén',vn:'cơ quan / bộ phận liên quan'},
     {zh:'人事部门',py:'rénshì bùmén',vn:'phòng nhân sự'},
     {zh:'政府部门',py:'zhèngfǔ bùmén',vn:'cơ quan chính phủ'},
     {zh:'成立部门',py:'chénglì bùmén',vn:'thành lập bộ phận'},
     {zh:'财务部门',py:'cáiwù bùmén',vn:'phòng tài vụ'}
   ],
   patterns:[
     {s:'到 + ……部门 + 办理 / 报到',m:'Đến phòng … làm thủ tục / trình diện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã nộp CV cho phòng nhân sự rồi.',answer:'我已经把简历交给人事部门了。',answerPy:'Wǒ yǐjīng bǎ jiǎnlì jiāo gěi rénshì bùmén le.',
      note:'把 + 简历 + 交给 + 部门 (ôn 简历 số 8).',pair:'把'},
     {promptLang:'vi',prompt:'Vấn đề này đã được phản ánh lên cơ quan liên quan.',answer:'这个问题已经被反映给有关部门了。',answerPy:'Zhège wèntí yǐjīng bèi fǎnyìng gěi yǒuguān bùmén le.',
      note:'反映给 + 部门 (ôn 反映 phần 辨析).',pair:'被'}
   ]},

  {n:36,zh:'执着',py:'zhízhuó',pos:'Tính từ',vn:'bền bỉ, kiên trì theo đuổi',hv:'chấp trước',em:'🧗',lesson:1,
   explain:['Kiên trì theo đuổi một mục tiêu, không dễ bỏ cuộc — nghĩa tốt trong bài: 执着的人才.','Đôi khi mang nghĩa "cố chấp" nếu theo đuổi điều không đáng.'],
   usage:'很执着, 执着的人, 执着地 + 追求 / 坚持, 对……很执着, 执着于…….',
   collo:['执着的人','执着地追求','对……很执着','执着于'],
   ex_zh:'专业的、执着的、优秀的人才是无价的。',ex_py:'Zhuānyè de, zhízhuó de, yōuxiù de réncái shì wújià de.',ex_vn:'Nhân tài chuyên nghiệp, bền bỉ, xuất sắc là vô giá.',
   exList:[
     {zh:'专业的、执着的、优秀的人才是无价的。',py:'Zhuānyè de, zhízhuó de, yōuxiù de réncái shì wújià de.',vn:'Nhân tài chuyên nghiệp, bền bỉ, xuất sắc là vô giá.'},
     {zh:'她对音乐非常执着，练了十年钢琴从没放弃。',py:'Tā duì yīnyuè fēicháng zhízhuó, liànle shí nián gāngqín cóng méi fàngqì.',vn:'Cô ấy vô cùng kiên trì với âm nhạc, tập piano mười năm chưa từng bỏ cuộc.'},
     {zh:'他一直执着地追求自己的梦想。',py:'Tā yìzhí zhízhuó de zhuīqiú zìjǐ de mèngxiǎng.',vn:'Anh ấy luôn bền bỉ theo đuổi ước mơ của mình.'}
   ],
   colloFull:[
     {zh:'执着的人',py:'zhízhuó de rén',vn:'người kiên trì'},
     {zh:'执着地追求',py:'zhízhuó de zhuīqiú',vn:'bền bỉ theo đuổi'},
     {zh:'对……很执着',py:'duì……hěn zhízhuó',vn:'rất kiên trì với …'},
     {zh:'执着于',py:'zhízhuó yú',vn:'kiên trì với, bám lấy'},
     {zh:'执着的精神',py:'zhízhuó de jīngshén',vn:'tinh thần bền bỉ'}
   ],
   patterns:[
     {s:'对 + N + 很执着',m:'Rất kiên trì với …'},
     {s:'执着地 + 追求 / 坚持',m:'Bền bỉ theo đuổi / kiên trì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thất bại nhiều lần, nhưng anh ấy vẫn bền bỉ theo đuổi ước mơ.',answer:'虽然失败了很多次，但是他还是执着地追求梦想。',answerPy:'Suīrán shībàile hěn duō cì, dànshì tā háishi zhízhuó de zhuīqiú mèngxiǎng.',
      note:'执着地 + 追求.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cô ấy không chỉ thông minh mà còn rất kiên trì.',answer:'她不仅很聪明，也很执着。',answerPy:'Tā bùjǐn hěn cōngming, yě hěn zhízhuó.',
      note:'执着 là tính từ, đứng sau 很.',pair:'不仅……也……'}
   ]},

  {n:37,zh:'光明',py:'guāngmíng',pos:'Tính từ',vn:'sáng sủa, tươi sáng',hv:'quang minh',em:'🌅',lesson:1,
   explain:['Nghĩa bóng: tươi sáng, đầy hy vọng — hay đi với 前途 / 未来: 光明的前途.','Nghĩa gốc: có ánh sáng (danh từ: ánh sáng — 带来光明). Tả căn phòng, ánh đèn sáng thì dùng 明亮, không dùng 光明.'],
   usage:'光明的前途 / 未来; 前途一片光明; 带来光明. Khác 明亮 (sáng sủa về ánh sáng thật: 明亮的教室).',
   collo:['光明的前途','一片光明','光明的未来','带来光明'],
   ex_zh:'这样的人一定会有光明的前途。',ex_py:'Zhèyàng de rén yídìng huì yǒu guāngmíng de qiántú.',ex_vn:'Người như vậy nhất định sẽ có tiền đồ tươi sáng.',
   exList:[
     {zh:'这样的人一定会有光明的前途。',py:'Zhèyàng de rén yídìng huì yǒu guāngmíng de qiántú.',vn:'Người như vậy nhất định sẽ có tiền đồ tươi sáng.'},
     {zh:'来我们公司工作，你的前途一片光明！',py:'Lái wǒmen gōngsī gōngzuò, nǐ de qiántú yí piàn guāngmíng!',vn:'Đến công ty chúng tôi làm việc, tương lai của bạn sẽ rộng mở tươi sáng!'},
     {zh:'只要努力，我们的未来一定是光明的。',py:'Zhǐyào nǔlì, wǒmen de wèilái yídìng shì guāngmíng de.',vn:'Chỉ cần nỗ lực, tương lai của chúng ta nhất định tươi sáng.'}
   ],
   colloFull:[
     {zh:'光明的前途',py:'guāngmíng de qiántú',vn:'tiền đồ tươi sáng'},
     {zh:'一片光明',py:'yí piàn guāngmíng',vn:'rộng mở tươi sáng'},
     {zh:'光明的未来',py:'guāngmíng de wèilái',vn:'tương lai tươi sáng'},
     {zh:'带来光明',py:'dàilái guāngmíng',vn:'mang lại ánh sáng'}
   ],
   patterns:[
     {s:'……的前途 + 一片光明',m:'Tương lai của … rộng mở, tươi sáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chăm chỉ, tương lai của bạn sẽ tươi sáng.',answer:'只要你努力，前途就会一片光明。',answerPy:'Zhǐyào nǐ nǔlì, qiántú jiù huì yí piàn guāngmíng.',
      note:'一片光明: 一 đọc yí trước thanh 4.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy bây giờ rất vất vả, nhưng tương lai là tươi sáng.',answer:'虽然现在很辛苦，但是未来是光明的。',answerPy:'Suīrán xiànzài hěn xīnkǔ, dànshì wèilái shì guāngmíng de.',
      note:'是 + 光明 + 的: nhấn mạnh nhận định.',pair:'虽然……但是……'}
   ]},

  {n:38,zh:'前途',py:'qiántú',pos:'Danh từ',vn:'tiền đồ, tương lai, triển vọng',hv:'tiền đồ',em:'🛤️',lesson:1,
   explain:['Con đường phía trước — tương lai, triển vọng phát triển của một người hoặc một sự việc.'],
   usage:'有前途 / 没 (有) 前途; 光明的前途; 前途无量 (tiền đồ rộng mở); 为了……的前途.',
   collo:['有前途','光明的前途','前途无量','没前途'],
   ex_zh:'这样的人一定会有光明的前途。',ex_py:'Zhèyàng de rén yídìng huì yǒu guāngmíng de qiántú.',ex_vn:'Người như vậy nhất định sẽ có tiền đồ tươi sáng.',
   exList:[
     {zh:'这样的人一定会有光明的前途。',py:'Zhèyàng de rén yídìng huì yǒu guāngmíng de qiántú.',vn:'Người như vậy nhất định sẽ có tiền đồ tươi sáng.'},
     {zh:'很多人觉得这个专业很有前途。',py:'Hěn duō rén juéde zhège zhuānyè hěn yǒu qiántú.',vn:'Nhiều người thấy ngành học này rất có triển vọng.'},
     {zh:'这个年轻人又聪明又努力，前途无量。',py:'Zhège niánqīngrén yòu cōngming yòu nǔlì, qiántú wúliàng.',vn:'Chàng trai trẻ này vừa thông minh vừa chăm chỉ, tiền đồ rộng mở.'}
   ],
   colloFull:[
     {zh:'有前途',py:'yǒu qiántú',vn:'có tương lai'},
     {zh:'光明的前途',py:'guāngmíng de qiántú',vn:'tiền đồ tươi sáng'},
     {zh:'前途无量',py:'qiántú wúliàng',vn:'tiền đồ rộng mở'},
     {zh:'没前途',py:'méi qiántú',vn:'không có tương lai'}
   ],
   patterns:[
     {s:'S + 很有前途',m:'… rất có triển vọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghề này không chỉ có triển vọng mà còn rất thú vị.',answer:'这个职业不仅很有前途，也很有意思。',answerPy:'Zhège zhíyè bùjǐn hěn yǒu qiántú, yě hěn yǒu yìsi.',
      note:'很有前途: 前途 là danh từ nên cần 有.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ngành này càng ngày càng có triển vọng.',answer:'这个行业越来越有前途了。',answerPy:'Zhège hángyè yuè lái yuè yǒu qiántú le.',
      note:'越来越 + 有前途.',pair:'越来越'}
   ]},

  {n:39,zh:'行业',py:'hángyè',pos:'Danh từ',vn:'ngành, nghề',hv:'hàng nghiệp',em:'🏭',lesson:1,
   explain:['Ngành nghề trong xã hội, nền kinh tế (công nghiệp, dịch vụ, giáo dục…): 服务行业, 各行各业.','Chú ý 行 đọc háng (không phải xíng).'],
   usage:'哪个行业, 各行各业, 服务行业, 这个行业; 在……行业工作.',
   collo:['各行各业','服务行业','哪个行业','旅游行业'],
   ex_zh:'无论在哪个行业，最缺乏的永远都是专注的人。',ex_py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.',ex_vn:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.',
   exList:[
     {zh:'无论在哪个行业，最缺乏的永远都是专注的人。',py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.',vn:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.'},
     {zh:'各行各业都需要会说外语的人才。',py:'Gè háng gè yè dōu xūyào huì shuō wàiyǔ de réncái.',vn:'Ngành nghề nào cũng cần nhân tài biết ngoại ngữ.'},
     {zh:'我姐姐在旅游行业工作了五年。',py:'Wǒ jiějie zài lǚyóu hángyè gōngzuòle wǔ nián.',vn:'Chị tôi đã làm trong ngành du lịch năm năm.'}
   ],
   colloFull:[
     {zh:'各行各业',py:'gè háng gè yè',vn:'mọi ngành nghề'},
     {zh:'服务行业',py:'fúwù hángyè',vn:'ngành dịch vụ'},
     {zh:'哪个行业',py:'nǎge hángyè',vn:'ngành nào'},
     {zh:'旅游行业',py:'lǚyóu hángyè',vn:'ngành du lịch'},
     {zh:'行业经验',py:'hángyè jīngyàn',vn:'kinh nghiệm trong ngành'}
   ],
   patterns:[
     {s:'在 + ……行业 + 工作',m:'Làm việc trong ngành …'},
     {s:'无论 (在) 哪个行业，都……',m:'Dù ở ngành nào cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả ngành dịch vụ cũng cần nhân viên biết tiếng Trung.',answer:'连服务行业都需要会说汉语的员工。',answerPy:'Lián fúwù hángyè dōu xūyào huì shuō Hànyǔ de yuángōng.',
      note:'行业 đọc hángyè.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ làm việc trong ngành này.',answer:'我从来没在这个行业工作过。',answerPy:'Wǒ cónglái méi zài zhège hángyè gōngzuòguo.',
      note:'在 + 行业 + 工作过.',pair:'从来没……过'}
   ]},

  {n:40,zh:'缺乏',py:'quēfá',pos:'Động từ',vn:'thiếu, không có đủ',hv:'khuyết phạp',em:'🪫',lesson:1,
   explain:['Thiếu, không đủ những thứ cần thiết — thường là thứ TRỪU TƯỢNG: 缺乏经验, 缺乏信心, 缺乏锻炼.','Trang trọng hơn 缺 / 缺少. Không dùng cho người, đồ vật cụ thể đếm được (✗ 缺乏三个人 → 缺三个人).'],
   usage:'缺乏 + 锻炼 / 睡眠 / 信心 / 经验 / 人才 (bảng 词语搭配); 最缺乏的是…….',
   collo:['缺乏锻炼','缺乏睡眠','缺乏信心','缺乏经验'],
   ex_zh:'无论在哪个行业，最缺乏的永远都是专注的人。',ex_py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.',ex_vn:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.',
   exList:[
     {zh:'无论在哪个行业，最缺乏的永远都是专注的人。',py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.',vn:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.'},
     {zh:'你总是对别人缺乏信心。',py:'Nǐ zǒngshì duì biérén quēfá xìnxīn.',vn:'Anh lúc nào cũng thiếu tin tưởng vào người khác.'},
     {zh:'很多中学生学习压力大，缺乏锻炼和睡眠。',py:'Hěn duō zhōngxuéshēng xuéxí yālì dà, quēfá duànliàn hé shuìmián.',vn:'Nhiều học sinh trung học áp lực học tập lớn, thiếu vận động và giấc ngủ.'}
   ],
   colloFull:[
     {zh:'缺乏锻炼',py:'quēfá duànliàn',vn:'thiếu vận động'},
     {zh:'缺乏睡眠',py:'quēfá shuìmián',vn:'thiếu ngủ'},
     {zh:'缺乏信心',py:'quēfá xìnxīn',vn:'thiếu tự tin, thiếu lòng tin'},
     {zh:'缺乏经验',py:'quēfá jīngyàn',vn:'thiếu kinh nghiệm'},
     {zh:'缺乏人才',py:'quēfá réncái',vn:'thiếu nhân tài'}
   ],
   patterns:[
     {s:'对 + 某人 / 某事 + 缺乏信心',m:'Thiếu tin tưởng vào …'},
     {s:'最缺乏的 (永远) 是……',m:'Cái thiếu nhất là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy thiếu kinh nghiệm, nhưng học rất nhanh.',answer:'虽然他缺乏经验，但是学得很快。',answerPy:'Suīrán tā quēfá jīngyàn, dànshì xué de hěn kuài.',
      note:'缺乏 + 经验 (danh từ trừu tượng).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Người trẻ càng ngày càng thiếu vận động.',answer:'年轻人越来越缺乏锻炼了。',answerPy:'Niánqīngrén yuè lái yuè quēfá duànliàn le.',
      note:'缺乏锻炼 (bảng 搭配 của sách).',pair:'越来越'}
   ]},

  {n:41,zh:'刘辰',py:'Liú Chén',pos:'Danh từ riêng',vn:'Lưu Thần (tên người — nhân vật chính của bài)',hv:'Lưu Thần',em:'🧑‍🎓',lesson:1,
   explain:['Nhân vật chính: sinh viên 23 tuổi sắp tốt nghiệp, mê xe buýt, nhờ chương trình 《非你莫属》 mà tìm được việc.'],
   usage:'刘辰 / 小刘 (cách gọi thân: 小 + họ).',
   collo:['刘辰','小刘'],
   ex_zh:'他叫刘辰，是一个年仅23岁的应届本科毕业生。',ex_py:'Tā jiào Liú Chén, shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng.',ex_vn:'Cậu ấy tên là Lưu Thần, một sinh viên đại học chính quy tốt nghiệp khoá năm nay, mới 23 tuổi.',
   exList:[
     {zh:'他叫刘辰，是一个年仅23岁的应届本科毕业生。',py:'Tā jiào Liú Chén, shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng.',vn:'Cậu ấy tên là Lưu Thần, một sinh viên đại học chính quy tốt nghiệp khoá năm nay, mới 23 tuổi.'},
     {zh:'刘辰是个公交迷，对北京的公交线路了如指掌。',py:'Liú Chén shì ge gōngjiāomí, duì Běijīng de gōngjiāo xiànlù liǎorú-zhǐzhǎng.',vn:'Lưu Thần là người mê xe buýt, thuộc các tuyến xe buýt Bắc Kinh như lòng bàn tay.'}
   ],
   colloFull:[
     {zh:'刘辰',py:'Liú Chén',vn:'Lưu Thần'},
     {zh:'小刘',py:'Xiǎo Liú',vn:'Tiểu Lưu (gọi thân)'},
     {zh:'刘辰的简历',py:'Liú Chén de jiǎnlì',vn:'CV của Lưu Thần'}
   ],
   patterns:[
     {s:'他叫 + tên，是……',m:'Giới thiệu nhân vật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lưu Thần vừa trả lời xong, các ông chủ liền phấn khích.',answer:'刘辰一回答完，老板们就兴奋起来了。',answerPy:'Liú Chén yì huídá wán, lǎobǎnmen jiù xīngfèn qǐlai le.',
      note:'Ôn 老板 (số 24).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Lưu Thần là mê xe buýt từ hồi lớp sáu.',answer:'刘辰是从小学六年级开始迷上公交车的。',answerPy:'Liú Chén shì cóng xiǎoxué liù niánjí kāishǐ míshang gōngjiāochē de.',
      note:'是……的 nhấn mạnh thời điểm bắt đầu.',pair:'是……的'}
   ]},

  {n:42,zh:'天津卫视',py:'Tiānjīn Wèishì',pos:'Danh từ riêng',vn:'Kênh truyền hình Thiên Tân',hv:'Thiên Tân Vệ Thị',em:'📺',lesson:1,
   explain:['卫视 = 卫星电视 (truyền hình vệ tinh). 天津卫视 là kênh truyền hình vệ tinh của thành phố Thiên Tân.'],
   usage:'天津卫视的节目; 在天津卫视播出.',
   collo:['天津卫视的节目','天津卫视'],
   ex_zh:'天津卫视的《非你莫属》节目组看了他的简历。',ex_py:'Tiānjīn Wèishì de 《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì.',ex_vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" của đài Thiên Tân đã xem CV của cậu ấy.',
   exList:[
     {zh:'天津卫视的《非你莫属》节目组看了他的简历。',py:'Tiānjīn Wèishì de 《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì.',vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" của đài Thiên Tân đã xem CV của cậu ấy.'},
     {zh:'这个节目每周末在天津卫视播出。',py:'Zhège jiémù měi zhōumò zài Tiānjīn Wèishì bōchū.',vn:'Chương trình này phát sóng trên kênh Thiên Tân mỗi cuối tuần.'}
   ],
   colloFull:[
     {zh:'天津卫视',py:'Tiānjīn Wèishì',vn:'Kênh truyền hình Thiên Tân'},
     {zh:'天津卫视的节目',py:'Tiānjīn Wèishì de jiémù',vn:'chương trình của kênh Thiên Tân'},
     {zh:'在天津卫视播出',py:'zài Tiānjīn Wèishì bōchū',vn:'phát sóng trên kênh Thiên Tân'}
   ],
   patterns:[
     {s:'在 + 天津卫视 + 播出',m:'Phát sóng trên kênh …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chương trình này được kênh Thiên Tân phát sóng trực tiếp.',answer:'这个节目是天津卫视现场直播的。',answerPy:'Zhège jiémù shì Tiānjīn Wèishì xiànchǎng zhíbō de.',
      note:'Ôn 现场直播 (số 9).',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ xem chương trình của kênh Thiên Tân.',answer:'我从来没看过天津卫视的节目。',answerPy:'Wǒ cónglái méi kànguo Tiānjīn Wèishì de jiémù.',
      note:'看过 + 节目.',pair:'从来没……过'}
   ]},

  {n:43,zh:'非你莫属',py:'Fēinǐmòshǔ',pos:'Danh từ riêng',vn:'"Chỉ thuộc về bạn" (tên chương trình tìm việc trên truyền hình)',hv:'Phi nhĩ mạc thuộc',em:'🎬',lesson:1,
   explain:['Tên một chương trình truyền hình tìm việc nổi tiếng: người xin việc lên sân khấu, các ông chủ doanh nghiệp đặt câu hỏi và quyết định có tuyển hay không.','Nghĩa đen: "không phải bạn thì không ai xứng" — việc này chỉ có bạn làm được. Viết trong dấu 《》.'],
   usage:'《非你莫属》节目组, 参加《非你莫属》, 上《非你莫属》求职.',
   collo:['《非你莫属》节目组','参加《非你莫属》'],
   ex_zh:'天津卫视的《非你莫属》节目组看了他的简历，接受了他的申请。',ex_py:'Tiānjīn Wèishì de 《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì, jiēshòule tā de shēnqǐng.',ex_vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" của đài Thiên Tân đã xem CV của cậu ấy và chấp nhận đơn đăng ký.',
   exList:[
     {zh:'天津卫视的《非你莫属》节目组看了他的简历，接受了他的申请。',py:'Tiānjīn Wèishì de 《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì, jiēshòule tā de shēnqǐng.',vn:'Ê-kíp chương trình "Chỉ thuộc về bạn" của đài Thiên Tân đã xem CV của cậu ấy và chấp nhận đơn đăng ký.'},
     {zh:'很多毕业生通过《非你莫属》找到了工作。',py:'Hěn duō bìyèshēng tōngguò 《Fēinǐmòshǔ》 zhǎodàole gōngzuò.',vn:'Nhiều sinh viên tốt nghiệp đã tìm được việc qua chương trình "Chỉ thuộc về bạn".'}
   ],
   colloFull:[
     {zh:'《非你莫属》节目组',py:'《Fēinǐmòshǔ》 jiémùzǔ',vn:'ê-kíp chương trình "Chỉ thuộc về bạn"'},
     {zh:'参加《非你莫属》',py:'cānjiā 《Fēinǐmòshǔ》',vn:'tham gia "Chỉ thuộc về bạn"'},
     {zh:'非你莫属',py:'fēi nǐ mò shǔ',vn:'không ai khác ngoài bạn'}
   ],
   patterns:[
     {s:'这个位置 / 这个奖 + 非你莫属',m:'Vị trí / giải này chỉ có thể là của bạn (dùng như thành ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy là người được "Chỉ thuộc về bạn" mời đến trường quay.',answer:'他是被《非你莫属》请到现场的。',answerPy:'Tā shì bèi 《Fēinǐmòshǔ》 qǐngdào xiànchǎng de.',
      note:'被 + tên chương trình + 请到 + 现场.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần bạn cố gắng, giải nhất lần này chắc chắn thuộc về bạn.',answer:'只要你努力，这次的第一名就非你莫属。',answerPy:'Zhǐyào nǐ nǔlì, zhè cì de dì-yī míng jiù fēi nǐ mò shǔ.',
      note:'非你莫属 dùng như thành ngữ trong đời sống.',pair:'只要……就……'}
   ]},

  {n:44,zh:'国贸',py:'Guómào',pos:'Danh từ riêng',vn:'Quốc Mậu (khu trung tâm thương mại của Bắc Kinh)',hv:'Quốc Mậu',em:'🏙️',lesson:1,
   explain:['Viết tắt của 国际贸易中心 (Trung tâm Thương mại Quốc tế) — khu văn phòng, mua sắm sầm uất ở phía đông Bắc Kinh, có ga tàu điện ngầm cùng tên.'],
   usage:'在国贸 + V; 从国贸到……; 国贸站.',
   collo:['从国贸到','在国贸'],
   ex_zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',ex_py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',ex_vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?',
   exList:[
     {zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?'},
     {zh:'在国贸坐1路车，到天安门东。',py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng.',vn:'Ở Quốc Mậu đi xe tuyến 1 đến trạm Thiên An Môn Đông.'}
   ],
   colloFull:[
     {zh:'从国贸到',py:'cóng Guómào dào',vn:'từ Quốc Mậu đến'},
     {zh:'在国贸',py:'zài Guómào',vn:'ở Quốc Mậu'},
     {zh:'国贸站',py:'Guómào zhàn',vn:'ga Quốc Mậu'}
   ],
   patterns:[
     {s:'从 + 国贸 + 到 + nơi',m:'Từ Quốc Mậu đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty của chị tôi ở Quốc Mậu, tan làm là đi tàu điện ngầm về nhà.',answer:'我姐姐的公司在国贸，她一下班就坐地铁回家。',answerPy:'Wǒ jiějie de gōngsī zài Guómào, tā yí xiàbān jiù zuò dìtiě huí jiā.',
      note:'在 + 国贸: địa danh.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi là ở Quốc Mậu gặp anh ấy.',answer:'我是在国贸遇到他的。',answerPy:'Wǒ shì zài Guómào yùdào tā de.',
      note:'是……的 nhấn mạnh nơi chốn.',pair:'是……的'}
   ]},

  {n:45,zh:'鼓楼大街',py:'Gǔlóu Dàjiē',pos:'Danh từ riêng',vn:'Đường Cổ Lâu (Bắc Kinh)',hv:'Cổ Lâu đại nhai',em:'🥁',lesson:1,
   explain:['Con đường gần lầu trống 鼓楼 (Cổ Lâu — "lầu trống" báo giờ thời xưa) ở khu phố cổ Bắc Kinh; có ga tàu điện ngầm cùng tên.'],
   usage:'到鼓楼大街; 去鼓楼大街.',
   collo:['到鼓楼大街','去鼓楼大街'],
   ex_zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',ex_py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',ex_vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?',
   exList:[
     {zh:'假设我要从国贸到鼓楼大街，该怎么乘车？',py:'Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?',vn:'Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?'},
     {zh:'请问，我想去鼓楼大街，应该怎么坐车？',py:'Qǐngwèn, wǒ xiǎng qù Gǔlóu Dàjiē, yīnggāi zěnme zuò chē?',vn:'Xin hỏi, tôi muốn đến đường Cổ Lâu thì nên đi xe thế nào?'}
   ],
   colloFull:[
     {zh:'到鼓楼大街',py:'dào Gǔlóu Dàjiē',vn:'đến đường Cổ Lâu'},
     {zh:'去鼓楼大街',py:'qù Gǔlóu Dàjiē',vn:'đi đường Cổ Lâu'},
     {zh:'鼓楼大街站',py:'Gǔlóu Dàjiē zhàn',vn:'ga Đường Cổ Lâu'}
   ],
   patterns:[
     {s:'我想去 + 鼓楼大街，应该怎么坐车？',m:'Hỏi đường đi xe'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đến đường Cổ Lâu.',answer:'我从来没去过鼓楼大街。',answerPy:'Wǒ cónglái méi qùguo Gǔlóu Dàjiē.',
      note:'去过 + địa danh.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ cần đi tàu điện ngầm tuyến 2 là đến được đường Cổ Lâu.',answer:'只要坐地铁2号线，就能到鼓楼大街。',answerPy:'Zhǐyào zuò dìtiě èr hào xiàn, jiù néng dào Gǔlóu Dàjiē.',
      note:'到 + địa danh.',pair:'只要……就……'}
   ]},

  {n:46,zh:'天安门东',py:'Tiān\'ānmén Dōng',pos:'Danh từ riêng',vn:'Thiên An Môn Đông (trạm phía đông Thiên An Môn)',hv:'Thiên An Môn Đông',em:'🚏',lesson:1,
   explain:['Tên trạm xe buýt / ga tàu điện ngầm ở phía đông quảng trường Thiên An Môn, Bắc Kinh.','Chú ý pinyin có dấu cách âm: Tiān\'ānmén.'],
   usage:'到天安门东; 在天安门东换乘.',
   collo:['到天安门东','在天安门东换乘'],
   ex_zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',ex_py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',ex_vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.',
   exList:[
     {zh:'在国贸坐1路车，到天安门东，换乘82路，就可以到达。',py:'Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.',vn:'Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông đổi sang tuyến 82 là tới nơi.'},
     {zh:'在前面坐1路，到天安门东，然后换乘3路。',py:'Zài qiánmiàn zuò yī lù, dào Tiān\'ānmén Dōng, ránhòu huànchéng sān lù.',vn:'Đi tuyến 1 ở phía trước, đến Thiên An Môn Đông rồi đổi sang tuyến 3.'}
   ],
   colloFull:[
     {zh:'到天安门东',py:'dào Tiān\'ānmén Dōng',vn:'đến Thiên An Môn Đông'},
     {zh:'在天安门东换乘',py:'zài Tiān\'ānmén Dōng huànchéng',vn:'đổi tuyến ở Thiên An Môn Đông'},
     {zh:'天安门东站',py:'Tiān\'ānmén Dōng zhàn',vn:'trạm Thiên An Môn Đông'}
   ],
   patterns:[
     {s:'坐……路，到 + trạm，换乘……路',m:'Chỉ đường đi xe buýt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa đến Thiên An Môn Đông là tôi xuống xe.',answer:'一到天安门东，我就下车了。',answerPy:'Yí dào Tiān\'ānmén Dōng, wǒ jiù xià chē le.',
      note:'到 + tên trạm.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy phải đổi xe ở Thiên An Môn Đông, nhưng không mất nhiều thời gian.',answer:'虽然要在天安门东换乘，但是不用花很多时间。',answerPy:'Suīrán yào zài Tiān\'ānmén Dōng huànchéng, dànshì bú yòng huā hěn duō shíjiān.',
      note:'在 + trạm + 换乘 (ôn 乘 số 21).',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 28-1), 5 đoạn như sách (tr. 88–90)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 最受欢迎的毕业生',
  preQuiz:[
    {q:'刘辰是什么人？',opts:['应届本科毕业生','公司老板','电视台主持人'],ans:0},
    {q:'面对就业形势，刘辰觉得自己怎么样？',opts:['很有优势','没什么优势','一定能找到好工作'],ans:1},
    {q:'刘辰是通过什么机会去求职的？',opts:['朋友介绍','学校招聘会','《非你莫属》节目'],ans:2},
    {q:'节目现场，有一家公司有什么职位适合他？',opts:['旅游体验师','公交车司机','电视节目主持人'],ans:0},
    {q:'刘辰什么时候迷上了公交车？',opts:['上初中的时候','小学六年级的时候','上大学的时候'],ans:1},
    {q:'从上初中起，刘辰是同学们的什么？',opts:['班长','学习顾问','出行顾问'],ans:2},
    {q:'电视台问他有什么才艺，他怎么回答？',opts:['他是个公交迷','他会唱歌跳舞','他会说好几种外语'],ans:0},
    {q:'主持人考他从国贸到鼓楼大街怎么乘车，他的反应怎么样？',opts:['想了很久','非常快','没回答出来'],ans:1},
    {q:'刘辰给一对情侣制订了什么？',opts:['结婚计划','找工作的方案','北京休闲一日游的方案'],ans:2},
    {q:'老总们为了留住他，甚至愿意做什么？',opts:['专门为他成立部门','让他当老板','送他一辆公交车'],ans:0},
    {q:'老总认为什么样的人才是无价的？',opts:['学历高的','专业的、执着的、优秀的','会说话的'],ans:1},
    {q:'作者认为，无论哪个行业最缺乏什么人？',opts:['有钱的人','聪明的人','专注的人'],ans:2}
  ],
  lines:[
    {sp:0,zh:'他叫刘辰，是一个年仅23岁的应届本科毕业生，再过一个月就要毕业了。面对并不乐观的就业形势，他压力很大：“说实话，我觉得自己实在没什么优势。”',
     py:'Tā jiào Liú Chén, shì yí ge nián jǐn èrshísān suì de yīngjiè běnkē bìyèshēng, zài guò yí ge yuè jiù yào bìyè le. Miànduì bìng bú lèguān de jiùyè xíngshì, tā yālì hěn dà: “Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.”',
     vn:'Cậu ấy tên là Lưu Thần, một sinh viên đại học chính quy tốt nghiệp khoá năm nay, mới 23 tuổi, chỉ một tháng nữa là ra trường. Đối mặt với tình hình việc làm chẳng mấy lạc quan, cậu chịu áp lực rất lớn: “Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.”'},
    {sp:0,zh:'就在他为工作发愁时，机会来了。天津卫视的《非你莫属》节目组看了他的简历，接受了他的申请，他可以到节目现场去求职。来到现场，他发现，果然有一家公司有适合他的职位——旅游体验师。因为小学六年级的时候，他迷上了公交车，从此，就一直关注公交线路，北京市范围内所有的公交线路他都了如指掌。从上初中起，他就是同学们的出行顾问，无论谁想去哪里，他都能很快地回答出最方便的路线，提供给同学们参考。在他的成长过程中，公交就是他最好的伙伴。',
     py:'Jiù zài tā wèi gōngzuò fāchóu shí, jīhuì lái le. Tiānjīn Wèishì de 《Fēinǐmòshǔ》 jiémùzǔ kànle tā de jiǎnlì, jiēshòule tā de shēnqǐng, tā kěyǐ dào jiémù xiànchǎng qù qiúzhí. Láidào xiànchǎng, tā fāxiàn, guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi——lǚyóu tǐyànshī. Yīnwèi xiǎoxué liù niánjí de shíhou, tā míshangle gōngjiāochē, cóngcǐ, jiù yìzhí guānzhù gōngjiāo xiànlù, Běijīng Shì fànwéi nèi suǒyǒu de gōngjiāo xiànlù tā dōu liǎorú-zhǐzhǎng. Cóng shàng chūzhōng qǐ, tā jiù shì tóngxuémen de chūxíng gùwèn, wúlùn shéi xiǎng qù nǎli, tā dōu néng hěn kuài de huídá chū zuì fāngbiàn de lùxiàn, tígōng gěi tóngxuémen cānkǎo. Zài tā de chéngzhǎng guòchéng zhōng, gōngjiāo jiù shì tā zuì hǎo de huǒbàn.',
     vn:'Đúng lúc cậu đang rầu rĩ vì chuyện việc làm thì cơ hội đến. Ê-kíp chương trình “Chỉ thuộc về bạn” của đài truyền hình Thiên Tân đã xem CV của cậu, chấp nhận đơn đăng ký, và cậu có thể đến trường quay để xin việc. Đến trường quay, cậu phát hiện quả nhiên có một công ty có vị trí phù hợp với mình — chuyên viên trải nghiệm du lịch. Số là hồi học lớp sáu, cậu mê xe buýt, từ đó luôn để ý các tuyến xe buýt; mọi tuyến xe buýt trong phạm vi thành phố Bắc Kinh cậu đều thuộc như lòng bàn tay. Từ hồi lên cấp hai, cậu đã là “cố vấn đi lại” của các bạn: bất kể ai muốn đi đâu, cậu đều có thể nhanh chóng trả lời tuyến đường thuận tiện nhất để các bạn tham khảo. Trong quá trình trưởng thành của cậu, xe buýt chính là người bạn đồng hành thân nhất.'},
    {sp:0,zh:'节目制作时，电视台问他有什么才艺，他便说：“我是个公交迷，对北京市的公交、地铁线路都有一些研究。”主持人现场考他：“假设我要从国贸到鼓楼大街，该怎么乘车？”他反应得非常快，马上回答说：“在国贸坐1路车，到天安门东，换乘82路，就可以到达。”他的回答让台上的12位老板都兴奋了起来，他们开始陆续向他提问。他有问必答，不但准确无误地按顺序报了一大堆公交车、地铁站的名字，而且还给一对情侣制订了北京休闲一日游的具体方案。',
     py:'Jiémù zhìzuò shí, diànshìtái wèn tā yǒu shénme cáiyì, tā biàn shuō: “Wǒ shì ge gōngjiāomí, duì Běijīng Shì de gōngjiāo, dìtiě xiànlù dōu yǒu yìxiē yánjiū.” Zhǔchírén xiànchǎng kǎo tā: “Jiǎshè wǒ yào cóng Guómào dào Gǔlóu Dàjiē, gāi zěnme chéng chē?” Tā fǎnyìng de fēicháng kuài, mǎshàng huídá shuō: “Zài Guómào zuò yī lù chē, dào Tiān\'ānmén Dōng, huànchéng bāshí\'èr lù, jiù kěyǐ dàodá.” Tā de huídá ràng tái shang de shí\'èr wèi lǎobǎn dōu xīngfènle qǐlai, tāmen kāishǐ lùxù xiàng tā tíwèn. Tā yǒu wèn bì dá, búdàn zhǔnquè wú wù de àn shùnxù bàole yí dà duī gōngjiāochē, dìtiězhàn de míngzi, érqiě hái gěi yí duì qínglǚ zhìdìngle Běijīng xiūxián yí rì yóu de jùtǐ fāng\'àn.',
     vn:'Khi làm chương trình, đài truyền hình hỏi cậu có tài lẻ gì, cậu liền nói: “Tôi là người mê xe buýt, có chút nghiên cứu về các tuyến xe buýt, tàu điện ngầm của thành phố Bắc Kinh.” Người dẫn chương trình kiểm tra cậu ngay tại chỗ: “Giả sử tôi muốn đi từ Quốc Mậu đến đường Cổ Lâu, thì nên đi xe thế nào?” Cậu phản ứng cực nhanh, lập tức trả lời: “Ở Quốc Mậu đi xe tuyến 1, đến trạm Thiên An Môn Đông, đổi sang tuyến 82 là tới nơi.” Câu trả lời của cậu khiến 12 vị ông chủ trên sân khấu đều phấn khích hẳn lên, họ bắt đầu lần lượt đặt câu hỏi cho cậu. Cậu hỏi gì đáp nấy, không những đọc chính xác, không sai, theo đúng thứ tự cả một loạt tên tuyến xe buýt và ga tàu điện ngầm, mà còn lập cho một cặp đôi phương án cụ thể cho một ngày du lịch thư giãn ở Bắc Kinh.'},
    {sp:0,zh:'他对公交的这种专注显然为他的求职打开了大门。老总们向他发出了热情的邀请，给他非常好的职位和待遇，甚至要专门为他成立有关的部门，只为留住这个人才。最终，他选择了一家他感兴趣的单位。',
     py:'Tā duì gōngjiāo de zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén. Lǎozǒngmen xiàng tā fāchūle rèqíng de yāoqǐng, gěi tā fēicháng hǎo de zhíwèi hé dàiyù, shènzhì yào zhuānmén wèi tā chénglì yǒuguān de bùmén, zhǐ wèi liúzhù zhège réncái. Zuìzhōng, tā xuǎnzéle yì jiā tā gǎn xìngqù de dānwèi.',
     vn:'Sự chuyên chú này của cậu đối với xe buýt rõ ràng đã mở ra cánh cửa cho việc tìm việc của cậu. Các vị sếp tổng gửi tới cậu lời mời nhiệt tình, đưa ra vị trí và đãi ngộ rất tốt, thậm chí còn muốn lập hẳn một bộ phận riêng cho cậu, chỉ để giữ chân nhân tài này. Cuối cùng, cậu chọn một đơn vị mà mình thấy hứng thú.'},
    {sp:0,zh:'主持人问这家公司的老总：“你给的工资是不是太高了？”这个老总回答：“专业的、执着的、优秀的人才是无价的，这样的人一定会有光明的前途。”是的，无论在哪个行业，最缺乏的永远都是专注的人。专注的人永远不缺机会！',
     py:'Zhǔchírén wèn zhè jiā gōngsī de lǎozǒng: “Nǐ gěi de gōngzī shì bu shì tài gāo le?” Zhège lǎozǒng huídá: “Zhuānyè de, zhízhuó de, yōuxiù de réncái shì wújià de, zhèyàng de rén yídìng huì yǒu guāngmíng de qiántú.” Shì de, wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén. Zhuānzhù de rén yǒngyuǎn bù quē jīhuì!',
     vn:'Người dẫn chương trình hỏi vị sếp tổng của công ty này: “Mức lương anh đưa ra có phải cao quá không?” Vị sếp trả lời: “Nhân tài chuyên nghiệp, bền bỉ, xuất sắc là vô giá, người như vậy nhất định sẽ có tiền đồ tươi sáng.” Đúng vậy, dù ở ngành nào, thứ thiếu nhất mãi mãi vẫn là những người chuyên tâm. Người chuyên tâm thì không bao giờ thiếu cơ hội!'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 反应/反映 lấy từ sách (tr. 93)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'反应 — 反映',
   same:'Đồng âm (fǎnyìng), đều vừa làm động từ vừa làm danh từ.',
   sameEx:{zh:'同学们对这件事反应很大，我们已经把大家的意见反映给了学校。',vn:'Các bạn phản ứng rất mạnh về chuyện này, chúng tôi đã phản ánh ý kiến của mọi người lên nhà trường.'},
   items:[
     {word:'反应',points:[
       'Động từ: có hành động, thay đổi khi bị tác động từ bên ngoài; danh từ: chính những hành động, thay đổi đó.',
       'Không có nghĩa nào khác.',
       'KHÔNG mang tân ngữ: 反应得很快, 有什么反应.'
     ],ex:[{zh:'他反应得非常快，一点儿也不用思考。',vn:'Cậu ấy phản ứng cực nhanh, chẳng cần suy nghĩ chút nào.'},
          {zh:'这时人体精力下降，反应减慢。',vn:'Lúc này tinh lực cơ thể giảm, phản ứng chậm lại.'}]},
     {word:'反映',points:[
       'Báo cáo tình hình, ý kiến lên cấp trên: 把意见反映给学校.',
       'Thể hiện ra bản chất của sự vật: 谈话可以反映一个人的职业特点.',
       'CÓ THỂ mang tân ngữ: 反映了……的新变化.'
     ],ex:[{zh:'请放心，我会把你的意见反映给学校。',vn:'Yên tâm, tôi sẽ phản ánh ý kiến của bạn lên nhà trường.'},
          {zh:'这个电影反映了中国年轻一代的新变化。',vn:'Bộ phim này phản ánh những thay đổi mới của thế hệ trẻ Trung Quốc.'}]}
   ],
   quiz:[
     {sentence:'那两只羊看见青草后是什么＿＿？',options:['反应','反映'],answer:0,
      why:'Hành động khi bị tác động (thấy cỏ) → 反应 (câu mẫu của sách).'},
     {sentence:'他这么做，＿＿出他的思想还不太成熟。',options:['反应','反映'],answer:1,
      why:'Thể hiện ra bản chất (suy nghĩ chưa chín chắn) → 反映.'},
     {sentence:'他脑子＿＿得很快，马上找到了问题的关键。',options:['反应','反映'],answer:0,
      why:'反应 + 得很快: phản ứng nhanh, không mang tân ngữ.'},
     {sentence:'小王，大家＿＿你最近常迟到。家里有什么问题吗？',options:['反应','反映'],answer:1,
      why:'Mọi người báo cáo tình hình lên cấp trên → 反映; có tân ngữ là cả mệnh đề.'}
   ],
   sgk:{
     chung:{t:'同音，都既可做动词又可做名词。',vn:'Đồng âm, đều vừa có thể làm động từ vừa có thể làm danh từ.',vd:'同学们对这件事反应很大，我们已经把大家的意见反映给了学校。',vdVn:'Các bạn phản ứng rất mạnh về chuyện này, chúng tôi đã phản ánh ý kiến của mọi người lên nhà trường.'},
     khac:[
       {a:{t:'动词指受到外界刺激而做出行动或变化；名词指这些行动或变化。',vn:'Động từ chỉ việc chịu tác động từ bên ngoài mà có hành động hoặc thay đổi; danh từ chỉ những hành động, thay đổi ấy.',vd:'这时人体精力下降，反应减慢，情绪低下，利于人体进入甜美的梦乡。',vdVn:'Lúc này tinh lực cơ thể giảm, phản ứng chậm lại, cảm xúc lắng xuống, giúp cơ thể dễ chìm vào giấc ngủ ngon.'},
        b:{t:'把情况或意见报告给上级。',vn:'Báo cáo tình hình hoặc ý kiến lên cấp trên.',vd:'请放心，我会把你的意见反映给学校。',vdVn:'Yên tâm, tôi sẽ phản ánh ý kiến của bạn lên nhà trường.'}},
       {a:{t:'没有其他意思。',vn:'Không có nghĩa nào khác.'},
        b:{t:'还可以指把事物的本质表现出来。',vn:'Còn có thể chỉ việc thể hiện bản chất của sự vật ra bên ngoài.',vd:'谈话可以反映一个人的职业特点。',vdVn:'Cách nói chuyện có thể phản ánh đặc điểm nghề nghiệp của một người.'}},
       {a:{t:'不可搭配宾语。',vn:'Không thể mang tân ngữ.',vd:'他反应得非常快，一点儿也不用思考。',vdVn:'Cậu ấy phản ứng cực nhanh, chẳng cần suy nghĩ chút nào.'},
        b:{t:'可搭配宾语。',vn:'Có thể mang tân ngữ.',vd:'这个电影反映了中国年轻一代的新变化。',vdVn:'Bộ phim này phản ánh những thay đổi mới của thế hệ trẻ Trung Quốc.'}}
     ],
     lamThu:[
       {s:'那两只羊看见青草后是什么＿＿？',dap:[true,false],mau:true,
        giai:'Hành động khi thấy cỏ → 反应 (câu mẫu của sách).'},
       {s:'他这么做，＿＿出他的思想还不太成熟。',dap:[false,true],
        giai:'Thể hiện bản chất ra bên ngoài, có tân ngữ → 反映.'},
       {s:'他脑子＿＿得很快，马上找到了问题的关键。',dap:[true,false],
        giai:'反应 + 得很快, không mang tân ngữ → 反应.'},
       {s:'小王，大家＿＿你最近常迟到。家里有什么问题吗？',dap:[false,true],
        giai:'Mọi người báo cáo tình hình lên cấp trên → 反映.'}
     ]
   }},

  {pair:'到达 — 达到',
   same:'Hai từ cùng hai chữ 到 và 达, đảo vị trí; đều là động từ mang nghĩa "đến / đạt tới".',
   sameEx:{zh:'我们终于到达了山顶，也达到了这次旅行的目的。',vn:'Cuối cùng chúng tôi đã lên tới đỉnh núi, cũng đạt được mục đích của chuyến đi.'},
   items:[
     {word:'到达',points:[
       'Đến một ĐỊA ĐIỂM cụ thể: 到达北京, 到达目的地, 到达会场.',
       'Tân ngữ là nơi chốn.',
       'Văn viết, trang trọng hơn 到.'
     ],ex:[{zh:'我们已经安全地到达目的地了。',vn:'Chúng tôi đã đến nơi an toàn.'},
          {zh:'换乘82路，就可以到达。',vn:'Đổi sang tuyến 82 là tới nơi.'}]},
     {word:'达到',points:[
       'Đạt tới một MỤC TIÊU, MỨC ĐỘ, TIÊU CHUẨN (trừu tượng).',
       'Tân ngữ: 目的 / 目标 / 要求 / 标准 / 水平.',
       'Không dùng cho địa điểm.'
     ],ex:[{zh:'他的汉语已经达到了HSK五级的水平。',vn:'Tiếng Trung của cậu ấy đã đạt trình độ HSK 5.'},
          {zh:'这个产品达到了国家标准。',vn:'Sản phẩm này đã đạt tiêu chuẩn quốc gia.'}]}
   ],
   quiz:[
     {sentence:'我们已经安全地＿＿目的地了。',options:['到达','达到'],answer:0,
      why:'目的地 là địa điểm → 到达 (bài tập 2 của sách).'},
     {sentence:'只要努力，你一定能＿＿自己的目标。',options:['到达','达到'],answer:1,
      why:'目标 là mục tiêu trừu tượng → 达到.'},
     {sentence:'代表们已经陆续＿＿了会场。',options:['到达','达到'],answer:0,
      why:'会场 là địa điểm → 到达 (câu 30 sách bài tập).'},
     {sentence:'他的汉语水平已经＿＿了公司的要求。',options:['到达','达到'],answer:1,
      why:'要求 là tiêu chuẩn → 达到.'}
   ]},

  {pair:'制作 — 制造',
   same:'Đều là động từ, đều có nghĩa "làm ra" một sản phẩm.',
   sameEx:{zh:'这家工厂制作／制造各种家具。',vn:'Nhà máy này sản xuất đủ loại đồ gỗ.'},
   items:[
     {word:'制作',points:[
       'Làm ra đồ vật tương đối NHỎ, thường làm thủ công, tinh xảo: 制作玩具, 制作乐器, 亲手制作.',
       'Dùng cho sản phẩm văn hoá: 制作节目, 制作电影, 制作视频.',
       'Không mang nghĩa xấu.'
     ],ex:[{zh:'这个玩具是我爸爸亲手为我制作的。',vn:'Món đồ chơi này là bố tôi tự tay làm cho tôi.'},
          {zh:'节目制作时，电视台问他有什么才艺。',vn:'Khi làm chương trình, đài truyền hình hỏi cậu ấy có tài lẻ gì.'}]},
     {word:'制造',points:[
       'Sản xuất công nghiệp, quy mô lớn bằng máy móc: 制造汽车, 制造飞机, 中国制造.',
       'Nghĩa xấu: gây ra, tạo ra (chuyện không hay): 制造矛盾, 制造麻烦.',
       'Không dùng cho chương trình, phim ảnh.'
     ],ex:[{zh:'这家工厂每年制造几十万辆汽车。',vn:'Nhà máy này mỗi năm sản xuất mấy trăm nghìn chiếc ô tô.'},
          {zh:'你别再给大家制造麻烦了。',vn:'Cậu đừng gây thêm phiền phức cho mọi người nữa.'}]}
   ],
   quiz:[
     {sentence:'这个玩具是我爸爸亲手为我＿＿的。',options:['制作','制造'],answer:0,
      why:'Tự tay làm đồ chơi nhỏ → 制作 (bài tập 2 của sách).'},
     {sentence:'这家工厂每年＿＿几十万辆汽车。',options:['制作','制造'],answer:1,
      why:'Sản xuất ô tô bằng máy móc, quy mô lớn → 制造.'},
     {sentence:'我们班用两个星期＿＿了一个介绍学校的视频。',options:['制作','制造'],answer:0,
      why:'Sản phẩm văn hoá (video, chương trình) → 制作.'},
     {sentence:'你别再给大家＿＿麻烦了。',options:['制作','制造'],answer:1,
      why:'Nghĩa xấu "gây ra (phiền phức)" → chỉ 制造.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'优势',hv:'ưu thế',vn:'ưu thế',note:'Trùng khít. Nhớ nói 有优势, không nói 很优势.'},
    {zh:'乐观',hv:'lạc quan',vn:'lạc quan',note:'Trùng khít. Thêm nghĩa "khả quan": 形势不乐观.'},
    {zh:'范围',hv:'phạm vi',vn:'phạm vi',note:'Trùng khít: 在全国范围内 = trong phạm vi toàn quốc.'},
    {zh:'参考',hv:'tham khảo',vn:'tham khảo',note:'Trùng khít: 参考书 = sách tham khảo.'},
    {zh:'现场',hv:'hiện trường',vn:'hiện trường; tại chỗ',note:'Tiếng Việt hay dùng cho tai nạn; tiếng Trung còn dùng cho sân khấu, trường quay: 节目现场.'},
    {zh:'具体',hv:'cụ thể',vn:'cụ thể',note:'Trùng khít: 具体方案 = phương án cụ thể.'},
    {zh:'显然',hv:'hiển nhiên',vn:'rõ ràng, hiển nhiên',note:'Trùng khít.'},
    {zh:'成立',hv:'thành lập',vn:'thành lập',note:'Trùng khít. Thêm nghĩa "(lý lẽ) đứng vững": 理由不成立.'},
    {zh:'前途',hv:'tiền đồ',vn:'tiền đồ, tương lai',note:'Trùng khít: 前途光明 = tiền đồ sáng sủa.'},
    {zh:'光明',hv:'quang minh',vn:'sáng sủa, tươi sáng',note:'"Quang minh" có trong "quang minh chính đại"; nghĩa bóng như nhau.'},
    {zh:'顾问',hv:'cố vấn',vn:'cố vấn',note:'Trùng khít: 法律顾问 = cố vấn pháp luật.'},
    {zh:'反应',hv:'phản ứng',vn:'phản ứng',note:'Trùng khít. Phân biệt với 反映 (phản ánh) — cùng đọc fǎnyìng.'},
    {zh:'体验',hv:'thể nghiệm',vn:'trải nghiệm',note:'Tiếng Việt nay hay nói "trải nghiệm"; "thể nghiệm" vẫn dùng.'},
    {zh:'职位',hv:'chức vị',vn:'chức vụ, vị trí',note:'Gần nghĩa "chức vị"; trong tuyển dụng dịch là "vị trí".'}
  ],
  idiom:[
    {zh:'了如指掌',hv:'liễu như chỉ chưởng',vn:'rõ như lòng bàn tay',note:'Trong bài: 北京市范围内所有的公交线路他都了如指掌.'},
    {zh:'有问必答',hv:'hữu vấn tất đáp',vn:'hỏi gì đáp nấy',note:'Trong bài: 他有问必答.'},
    {zh:'准确无误',hv:'chuẩn xác vô ngộ',vn:'chính xác không sai',note:'Trong bài: 准确无误地按顺序报了一大堆……名字.'},
    {zh:'各行各业',hv:'các hàng các nghiệp',vn:'mọi ngành nghề',note:'Đi với 行业 (số 39).'},
    {zh:'非你莫属',hv:'phi nhĩ mạc thuộc',vn:'không ai khác ngoài bạn',note:'Tên chương trình trong bài; cũng dùng như thành ngữ.'}
  ],
  trap:[
    {zh:'成长',hv:'thành trưởng',vn:'trưởng thành, lớn lên',
     warn:'BẪY đảo chữ: tiếng Việt nói "trưởng thành" nhưng tiếng Trung là 成长. Đừng viết ✗ 长成 với nghĩa này.'},
    {zh:'部门',hv:'bộ môn',vn:'bộ phận, phòng ban',
     warn:'"Bộ môn" tiếng Việt là môn học / tổ chuyên môn. 部门 là PHÒNG BAN trong cơ quan: 人事部门 = phòng nhân sự.'},
    {zh:'老板',hv:'lão bản',vn:'ông chủ, sếp',
     warn:'Không liên quan đến "già" (老). 老板 = chủ, người trả lương — kể cả chủ trẻ tuổi.'},
    {zh:'执着',hv:'chấp trước',vn:'bền bỉ, kiên trì',
     warn:'"Chấp trước" tiếng Việt (nhà Phật) mang nghĩa XẤU — bám víu. Còn 执着 tiếng Trung chủ yếu là nghĩa TỐT: 执着的人才 = nhân tài bền bỉ.'},
    {zh:'就业',hv:'tựu nghiệp',vn:'có việc làm',
     warn:'"Tựu nghiệp" không dùng trong tiếng Việt. 就业 = có việc làm: 就业形势 = tình hình việc làm.'},
    {zh:'行业',hv:'hàng nghiệp',vn:'ngành nghề',
     warn:'行 ở đây đọc HÁNG (hàng — như "hàng" trong "ngân hàng" 银行), không đọc xíng.'},
    {zh:'乘',hv:'thừa',vn:'đi (xe); nhân (toán)',
     warn:'"Thừa" tiếng Việt là dư ra. 乘 là ĐI XE (乘车) hoặc phép NHÂN (二乘三).'},
    {zh:'假设',hv:'giả thiết',vn:'giả sử; giả thuyết',
     warn:'Làm động từ đầu câu dịch là "giả sử" (假设我要……); làm danh từ dịch "giả thuyết" (大胆的假设).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 92) + bài tập 3 (tr. 94) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'占',right:'优势'},
  {left:'体验',right:'新产品'},
  {left:'扩大',right:'范围'},
  {left:'制作',right:'乐器'},
  {left:'缺乏',right:'睡眠'},
  {left:'一届',right:'学生'},
  {left:'一份',right:'简历'},
  {left:'一堆',right:'垃圾'},
  {left:'制订',right:'具体方案'},
  {left:'成立',right:'公司'},
  {left:'制定',right:'法律'},
  {left:'光明的',right:'前途'},
  {left:'应届',right:'毕业生'},
  {left:'就业',right:'形势'},
  {left:'现场',right:'直播'},
  {left:'旅游',right:'体验师'},
  {left:'出行',right:'顾问'},
  {left:'休闲',right:'一日游'},
  {left:'各行',right:'各业'},
  {left:'面对',right:'困难'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'他是今年的应',blank:'届',post:'毕业生，下个月就毕业了。',hint:'(khoá)',ans:'届'},
  {pre:'这个职位要求',blank:'本科',post:'以上学历。',hint:'(đại học chính quy)',ans:'本科'},
  {pre:'',blank:'面对',post:'困难，我们不能放弃。',hint:'(đối mặt)',ans:'面对'},
  {pre:'不管遇到什么困难，都要',blank:'乐观',post:'地面对生活。',hint:'(lạc quan)',ans:'乐观'},
  {pre:'学好外语能给你带来更多的',blank:'就业',post:'机会。',hint:'(việc làm)',ans:'就业'},
  {pre:'说',blank:'实话',post:'，这次考试我一点儿也没准备。',hint:'(lời nói thật)',ans:'实话'},
  {pre:'会说汉语是你找工作的一大',blank:'优势',post:'。',hint:'(ưu thế)',ans:'优势'},
  {pre:'毕业前，她给十几家公司投了',blank:'简历',post:'。',hint:'(CV)',ans:'简历'},
  {pre:'这场足球比赛电视台会',blank:'现场',post:'直播。',hint:'(tại chỗ)',ans:'现场'},
  {pre:'你来应聘我们网站的编辑',blank:'职位',post:'，有什么优势？',hint:'(vị trí)',ans:'职位'},
  {pre:'这个暑假，我想去农村',blank:'体验',post:'生活。',hint:'(trải nghiệm)',ans:'体验'},
  {pre:'李白听了老婆婆的话，很受感动。',blank:'从此',post:'他刻苦用功。',hint:'(từ đó)',ans:'从此'},
  {pre:'这次比赛是在全国',blank:'范围',post:'内举行的。',hint:'(phạm vi)',ans:'范围'},
  {pre:'我和她是',blank:'初中',post:'同学，已经认识六年了。',hint:'(cấp hai)',ans:'初中'},
  {pre:'公司请了一位律师当法律',blank:'顾问',post:'。',hint:'(cố vấn)',ans:'顾问'},
  {pre:'这只是我个人意见，仅供你',blank:'参考',post:'。',hint:'(tham khảo)',ans:'参考'},
  {pre:'父母都希望孩子能健康快乐地',blank:'成长',post:'。',hint:'(lớn lên)',ans:'成长'},
  {pre:'这个玩具是我爸爸亲手为我',blank:'制作',post:'的。',hint:'(làm ra)',ans:'制作'},
  {pre:'新年晚会上，同学们都展示了自己的',blank:'才艺',post:'。',hint:'(tài lẻ)',ans:'才艺'},
  {pre:'',blank:'假设',post:'我要从国贸到鼓楼大街，该怎么乘车？',hint:'(giả sử)',ans:'假设'},
  {pre:'',blank:'乘',post:'地铁的时候，请给老人让座。',hint:'(đi — văn viết)',ans:'乘'},
  {pre:'我们已经安全地',blank:'到达',post:'目的地了。',hint:'(đến nơi)',ans:'到达'},
  {pre:'这家饭馆的',blank:'老板',post:'对客人特别热情。',hint:'(ông chủ)',ans:'老板'},
  {pre:'会议快要开始了，代表们',blank:'陆续',post:'走进了会场。',hint:'(lần lượt)',ans:'陆续'},
  {pre:'有不懂的地方，大家可以随时',blank:'提问',post:'。',hint:'(đặt câu hỏi)',ans:'提问'},
  {pre:'这些零件怎么都',blank:'堆',post:'在这儿啊？',hint:'(chất đống)',ans:'堆'},
  {pre:'公园里有很多年轻',blank:'情侣',post:'在散步。',hint:'(cặp đôi)',ans:'情侣'},
  {pre:'考试以前，我',blank:'制订',post:'了一个详细的复习计划。',hint:'(lập ra)',ans:'制订'},
  {pre:'周末我最喜欢的',blank:'休闲',post:'活动是去公园骑自行车。',hint:'(thư giãn)',ans:'休闲'},
  {pre:'因为天气影响，我们的活动推迟了，',blank:'具体',post:'时间再等通知。',hint:'(cụ thể)',ans:'具体'},
  {pre:'他看书的时候非常',blank:'专注',post:'，连妈妈叫他都没听见。',hint:'(tập trung)',ans:'专注'},
  {pre:'前两局棋输给爸爸，他',blank:'显然',post:'并不担心。',hint:'(rõ ràng)',ans:'显然'},
  {pre:'我们学校',blank:'成立',post:'了一个汉语俱乐部。',hint:'(thành lập)',ans:'成立'},
  {pre:'这个问题我们会反映给有关',blank:'部门',post:'。',hint:'(cơ quan, bộ phận)',ans:'部门'},
  {pre:'她对音乐非常',blank:'执着',post:'，练了十年钢琴从没放弃。',hint:'(bền bỉ)',ans:'执着'},
  {pre:'来我们公司工作，你的前途一片',blank:'光明',post:'！',hint:'(tươi sáng)',ans:'光明'},
  {pre:'很多人觉得这个专业很有',blank:'前途',post:'。',hint:'(triển vọng)',ans:'前途'},
  {pre:'我姐姐在旅游',blank:'行业',post:'工作了五年。',hint:'(ngành)',ans:'行业'},
  {pre:'很多中学生学习压力大，',blank:'缺乏',post:'锻炼和睡眠。',hint:'(thiếu)',ans:'缺乏'},
  {pre:'他叫',blank:'刘辰',post:'，是一个年仅23岁的应届本科毕业生。',hint:'(Lưu Thần)',ans:'刘辰'},
  {pre:'',blank:'天津卫视',post:'的《非你莫属》节目组看了他的简历。',hint:'(Kênh truyền hình Thiên Tân)',ans:'天津卫视'},
  {pre:'很多毕业生通过《',blank:'非你莫属',post:'》找到了工作。',hint:'("Chỉ thuộc về bạn")',ans:'非你莫属'},
  {pre:'在',blank:'国贸',post:'坐1路车，到天安门东，换乘82路。',hint:'(Quốc Mậu)',ans:'国贸'},
  {pre:'请问，我想去',blank:'鼓楼大街',post:'，应该怎么坐车？',hint:'(đường Cổ Lâu)',ans:'鼓楼大街'},
  {pre:'在前面坐1路，到',blank:'天安门东',post:'，然后换乘3路。',hint:'(trạm Thiên An Môn Đông)',ans:'天安门东'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (从此 · 假设 · 堆) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['小学六年级时，他','迷上了','公交车','，','从此','一直','关注','公交线路','。'],ans:'小学六年级时，他迷上了公交车，从此一直关注公交线路。',audio:'小学六年级时，他迷上了公交车，从此一直关注公交线路。'},
  {words:['他十年前','来到中国','，','从此','爱上了','中国菜','。'],ans:'他十年前来到中国，从此爱上了中国菜。',audio:'他十年前来到中国，从此爱上了中国菜。'},
  {words:['医生','让他','少吃肉','，','他从此','不再','吃','快餐','了','。'],ans:'医生让他少吃肉，他从此不再吃快餐了。',audio:'医生让他少吃肉，他从此不再吃快餐了。'},
  {words:['假设','明天','下雨','，','我们','怎么办','？'],ans:'假设明天下雨，我们怎么办？',audio:'假设明天下雨，我们怎么办？'},
  {words:['您','当年的','假设','已经','被','证明','是对的','。'],ans:'您当年的假设已经被证明是对的。',audio:'您当年的假设已经被证明是对的。'},
  {words:['这是','一种','大胆的','假设','，','但','不一定','是科学的','。'],ans:'这是一种大胆的假设，但不一定是科学的。',audio:'这是一种大胆的假设，但不一定是科学的。'},
  {words:['他','报了','一大堆','公交车','的','名字','。'],ans:'他报了一大堆公交车的名字。',audio:'他报了一大堆公交车的名字。'},
  {words:['这些','零件','怎么','都','堆在','这儿','啊','？'],ans:'这些零件怎么都堆在这儿啊？',audio:'这些零件怎么都堆在这儿啊？'},
  {words:['工厂','旁边','有','一个','建筑材料堆','。'],ans:'工厂旁边有一个建筑材料堆。',audio:'工厂旁边有一个建筑材料堆。'},
  {words:['她的','反应','是','在','正常范围内','的','。'],ans:'她的反应是在正常范围内的。',audio:'她的反应是在正常范围内的。'},
  {words:['代表们','已经','陆续','到达了','会场','。'],ans:'代表们已经陆续到达了会场。',audio:'代表们已经陆续到达了会场。'},
  {words:['他的','成长过程','可以','给你','参考','。'],ans:'他的成长过程可以给你参考。',audio:'他的成长过程可以给你参考。'},
  {words:['专注的人','永远','不缺','机会','！'],ans:'专注的人永远不缺机会！',audio:'专注的人永远不缺机会！'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'那两只羊看见青草后是什么____？',opts:['反映','反应','反对','反而'],ans:1,
   exp:'Hành động khi bị tác động → 反应 (câu mẫu phần 词语辨析 của sách).'},
  {wrong:'请放心，我会把你的意见____给学校。',opts:['反应','报告','反映','提问'],ans:2,
   exp:'Báo cáo ý kiến lên cấp trên → 反映给…… (câu của sách). 反应 không có nghĩa này.'},
  {wrong:'这个电影____了中国年轻一代的新变化。',opts:['反映','反应','体验','到达'],ans:0,
   exp:'Thể hiện bản chất, có tân ngữ → 反映. 反应 không mang tân ngữ.'},
  {wrong:'我们已经安全地____目的地了。',opts:['达到','到达','成立','制订'],ans:1,
   exp:'目的地 là địa điểm → 到达 (bài tập 2 của sách). 达到 dùng cho mục tiêu, tiêu chuẩn.'},
  {wrong:'只要努力，你一定能____自己的目标。',opts:['到达','达到','面对','参考'],ans:1,
   exp:'Mục tiêu trừu tượng → 达到.'},
  {wrong:'这个玩具是我爸爸亲手为我____的。',opts:['制作','制造','制订','成立'],ans:0,
   exp:'Tự tay làm đồ chơi → 制作 (bài tập 2 của sách). 制造 là sản xuất công nghiệp.'},
  {wrong:'我们____他明天9点能出发，那么10点可以到这儿。',opts:['假如','假设','如果','要是'],ans:1,
   exp:'Câu của sách (bài tập 2): 我们 + 假设 + mệnh đề — 假设 là động từ có chủ ngữ phía trước. 假如 / 如果 / 要是 là liên từ, không đứng sau chủ ngữ 我们 theo cách này.'},
  {wrong:'来我们公司工作，你的前途一片____！',opts:['明亮','光明','光亮','明白'],ans:1,
   exp:'前途一片光明 (bài tập 2 của sách). 明亮 tả ánh sáng thật (明亮的教室).'},
  {wrong:'说实话，我觉得自己实在没什么____。',opts:['优秀','优美','优势','优良'],ans:2,
   exp:'没什么优势 = không có ưu thế gì (câu trong bài). 优秀 là tính từ, không đứng sau 没什么 theo cách này.'},
  {wrong:'这个球队个子高，在比赛中很占____。',opts:['优势','位置','职位','范围'],ans:0,
   exp:'占优势 = chiếm ưu thế (bảng 搭配 của sách).'},
  {wrong:'学校要求每个学生都要多参加运动，因为很多同学____锻炼。',opts:['缺点','缺乏','缺席','缺口'],ans:1,
   exp:'缺乏锻炼 = thiếu vận động (bảng 搭配 của sách).'},
  {wrong:'他反应虽然快，但____功没有小张好。',opts:['基础','基本','根本','本科'],ans:1,
   exp:'基本功 = kỹ năng cơ bản (bài nghe số 5).'},
  {wrong:'他有问必答，准确无误地报了一大____公交车的名字。',opts:['堆','群','份','届'],ans:0,
   exp:'一大堆 + danh sách tên (đồ vật nhiều) → 堆 (注释 của sách).'},
  {wrong:'一个小师弟结婚才半年，就跑过来找我诉苦，说妻子每天都要挑出他一大____毛病。',opts:['份','堆','届','位'],ans:1,
   exp:'一大堆毛病 = cả đống tật xấu (注释 của sách).'},
  {wrong:'我们学校第十____运动会下个月举行。',opts:['位','届','份','堆'],ans:1,
   exp:'第 + số + 届 + sự kiện định kỳ (运动会, 会议).'},
  {wrong:'他是个公交迷，北京市所有的公交线路他都了如____。',opts:['指导','指出','指掌','手指'],ans:2,
   exp:'了如指掌 = rõ như lòng bàn tay (thành ngữ trong bài).'},
  {wrong:'老总们甚至要专门为他____有关的部门。',opts:['建设','成立','组成','制订'],ans:1,
   exp:'成立 + 部门 (câu trong bài). 建设 đi với 国家 / 家乡; 制订 đi với 计划 / 方案.'},
  {wrong:'你们给的工资是不是太高了？——专业的、____的、优秀的人才是无价的。',opts:['执着','乐观','显然','具体'],ans:0,
   exp:'Tả phẩm chất nhân tài: bền bỉ theo đuổi → 执着 (câu trong bài).'},
  {wrong:'他的回答让台上的12位____都兴奋了起来。',opts:['老师','老板','老人','老家'],ans:1,
   exp:'Người tuyển dụng trên sân khấu → 老板.'},
  {wrong:'从上初中起，他就是同学们的出行____。',opts:['顾客','顾问','提问','学问'],ans:1,
   exp:'出行顾问 = "cố vấn đi lại". 顾客 là khách hàng.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hồi lớp sáu cậu ấy mê xe buýt, từ đó luôn để ý các tuyến xe.',zh:'小学六年级时他迷上了公交车，从此一直关注公交线路。',py:'Xiǎoxué liù niánjí shí tā míshangle gōngjiāochē, cóngcǐ yìzhí guānzhù gōngjiāo xiànlù.'},
  {vi:'Anh ấy đến Việt Nam năm 2015, từ đó yêu thích phở.',zh:'他2015年来到越南，从此爱上了河粉。',py:'Tā èr líng yī wǔ nián láidào Yuènán, cóngcǐ àishangle héfěn.'},
  {vi:'Giả sử ngày mai trời mưa, chúng ta vẫn đi chứ?',zh:'假设明天下雨，我们还去吗？',py:'Jiǎshè míngtiān xià yǔ, wǒmen hái qù ma?'},
  {vi:'Giả thuyết của ông ấy đã được chứng minh là đúng.',zh:'他的假设已经被证明是对的。',py:'Tā de jiǎshè yǐjīng bèi zhèngmíng shì duì de.'},
  {vi:'Trên bàn của cậu ấy có cả một đống sách.',zh:'他的桌子上有一大堆书。',py:'Tā de zhuōzi shang yǒu yí dà duī shū.'},
  {vi:'Đừng chất đồ ở cửa.',zh:'别把东西堆在门口。',py:'Bié bǎ dōngxi duī zài ménkǒu.'},
  {vi:'Tuy tôi thiếu kinh nghiệm, nhưng tôi có ưu thế về ngoại ngữ.',zh:'虽然我缺乏经验，但是我在外语方面有优势。',py:'Suīrán wǒ quēfá jīngyàn, dànshì wǒ zài wàiyǔ fāngmiàn yǒu yōushì.'},
  {vi:'Khách mời đã lần lượt đến hội trường.',zh:'客人们已经陆续到达了会场。',py:'Kèrénmen yǐjīng lùxù dàodále huìchǎng.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Đối mặt với tình hình việc làm chẳng mấy lạc quan, cậu ấy chịu áp lực rất lớn.',zh:'面对并不乐观的就业形势，他压力很大。',py:'Miànduì bìng bú lèguān de jiùyè xíngshì, tā yālì hěn dà.'},
  {vi:'Nói thật, tôi thấy bản thân chẳng có ưu thế gì cả.',zh:'说实话，我觉得自己实在没什么优势。',py:'Shuō shíhuà, wǒ juéde zìjǐ shízài méi shénme yōushì.'},
  {vi:'Quả nhiên có một công ty có vị trí phù hợp với cậu ấy.',zh:'果然有一家公司有适合他的职位。',py:'Guǒrán yǒu yì jiā gōngsī yǒu shìhé tā de zhíwèi.'},
  {vi:'Trong quá trình trưởng thành của cậu ấy, xe buýt chính là người bạn thân nhất.',zh:'在他的成长过程中，公交就是他最好的伙伴。',py:'Zài tā de chéngzhǎng guòchéng zhōng, gōngjiāo jiù shì tā zuì hǎo de huǒbàn.'},
  {vi:'Cậu ấy phản ứng cực nhanh, lập tức trả lời.',zh:'他反应得非常快，马上回答了。',py:'Tā fǎnyìng de fēicháng kuài, mǎshàng huídá le.'},
  {vi:'Các ông chủ bắt đầu lần lượt đặt câu hỏi cho cậu ấy.',zh:'老板们开始陆续向他提问。',py:'Lǎobǎnmen kāishǐ lùxù xiàng tā tíwèn.'},
  {vi:'Sự chuyên chú này rõ ràng đã mở ra cánh cửa cho việc tìm việc của cậu.',zh:'这种专注显然为他的求职打开了大门。',py:'Zhè zhǒng zhuānzhù xiǎnrán wèi tā de qiúzhí dǎkāile dàmén.'},
  {vi:'Dù ở ngành nào, thứ thiếu nhất mãi mãi là những người chuyên tâm.',zh:'无论在哪个行业，最缺乏的永远都是专注的人。',py:'Wúlùn zài nǎge hángyè, zuì quēfá de yǒngyuǎn dōu shì zhuānzhù de rén.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 寻找自己的优势)
// ══════════════════════════════════════════
var writingData = {
  words:['优势','面对','乐观','缺乏','前途'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "寻找自己的优势" (tìm ra ưu thế của bản thân).',
  outline:[
    'Câu mở: ai cũng có ưu thế riêng, quan trọng là tìm ra nó (dùng 优势).',
    'Thân 1: thực trạng — đứng trước cạnh tranh, nhiều bạn thấy mình thiếu kinh nghiệm, mất tự tin (dùng 面对, 缺乏).',
    'Thân 2: cách tìm ưu thế — nghĩ kỹ sẽ thấy điểm mạnh, nhìn mình một cách lạc quan (dùng 只要……就……, 乐观).',
    'Kết: phát huy ưu thế thì tương lai sẽ tươi sáng (dùng 前途).'
  ],
  model:{
    zh:'每个人都有自己的优势，关键是要找到它。面对激烈的竞争，很多同学觉得自己缺乏经验，没有信心。其实，只要认真想一想，就会发现自己的长处：有的人反应快，有的人做事很专注。我们应该乐观地看待自己，发挥自己的优势。这样，我们一定会有光明的前途。',
    py:'Měi ge rén dōu yǒu zìjǐ de yōushì, guānjiàn shì yào zhǎodào tā. Miànduì jīliè de jìngzhēng, hěn duō tóngxué juéde zìjǐ quēfá jīngyàn, méiyǒu xìnxīn. Qíshí, zhǐyào rènzhēn xiǎng yi xiǎng, jiù huì fāxiàn zìjǐ de chángchu: yǒu de rén fǎnyìng kuài, yǒu de rén zuò shì hěn zhuānzhù. Wǒmen yīnggāi lèguān de kàndài zìjǐ, fāhuī zìjǐ de yōushì. Zhèyàng, wǒmen yídìng huì yǒu guāngmíng de qiántú.',
    vn:'Ai cũng có ưu thế riêng của mình, điều quan trọng là phải tìm ra nó. Đứng trước sự cạnh tranh gay gắt, nhiều bạn thấy mình thiếu kinh nghiệm, không tự tin. Thật ra, chỉ cần nghĩ kỹ một chút là sẽ phát hiện ra điểm mạnh của bản thân: có người phản ứng nhanh, có người làm việc rất tập trung. Chúng ta nên nhìn bản thân một cách lạc quan, phát huy ưu thế của mình. Như vậy, chúng ta nhất định sẽ có tương lai tươi sáng.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '优势 có đi với 有 / 发挥 / 占 không (không viết 很优势)?',
    '乐观 làm trạng ngữ đã có 地 chưa (乐观地看待)? 缺乏 có đi với danh từ trừu tượng (经验 / 信心 / 锻炼) không?',
    'Câu có 只要 đã có 就 ở vế sau chưa? Câu có 虽然 đã có 但是 chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈怎样寻找自己的优势。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'优势', loai:'danh từ', cach:'有 / 占 / 发挥 / 失去 + 优势 · 在……方面有优势 · ……是我的优势',
     sai:[{re:'(很|非常|十分|特别|比较)优势', sua:'很有优势', giai:'优势 là danh từ, không đứng ngay sau phó từ mức độ. Nói 很有优势 / 占优势.'}]},
    {tu:'面对', loai:'động từ', cach:'面对 + 困难 / 压力 / 竞争 / 现实 (tân ngữ trực tiếp)',
     sai:[{re:'面对(于|跟|和|与|着对)', sua:'面对困难', giai:'面对 mang tân ngữ TRỰC TIẾP, không thêm 于 / 跟 / 和 phía sau.'}]},
    {tu:'乐观', loai:'tính từ', cach:'很乐观 · 乐观地 + V · 乐观的态度 · 对……很乐观',
     sai:[{re:'乐观的(面对|看待|对待|生活下去)', sua:'乐观地面对 / 乐观地看待', giai:'Làm trạng ngữ trước động từ phải dùng 地, không dùng 的.'},
          {re:'(很|非常)乐观着', sua:'很乐观', giai:'乐观 là tính từ, không thêm 着.', nhe:true}]},
    {tu:'缺乏', loai:'động từ', cach:'缺乏 + 经验 / 信心 / 锻炼 / 睡眠 (danh từ trừu tượng)',
     sai:[{re:'缺乏(一|两|三|四|五|几)(个|本|件|位|张)', sua:'缺 / 少 + số lượng', giai:'缺乏 đi với thứ TRỪU TƯỢNG, không đi với số lượng cụ thể. "Thiếu hai quyển sách" nói 少两本书 / 缺两本书.'}]},
    {tu:'前途', loai:'danh từ', cach:'有前途 · 很有前途 · 光明的前途 · 前途一片光明',
     sai:[{re:'前途(很|非常)?(大|好|高)', sua:'很有前途 / 前途光明', giai:'前途 không đi với 大 / 好 / 高. Nói 很有前途, 前途光明.'},
          {re:'(很|非常|十分)前途', sua:'很有前途', giai:'前途 là danh từ, cần 有: 很有前途.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'……，从此……', nhan:'从此', vd:'上初中时我参加了演讲比赛，从此就不怕在别人面前说话了。', khi:'Kể một sự việc làm mốc thay đổi — thân đoạn.'},
    {ten:'假设……，……', nhan:'假设', vd:'假设你是老板，你会录用什么样的人？', khi:'Đặt tình huống để người đọc suy nghĩ — câu mở.'},
    {ten:'一大堆 + N', nhan:'堆', vd:'很多同学能说出一大堆自己的缺点，却说不出一个优点。', khi:'Nhấn mạnh số lượng nhiều — thân đoạn.'},
    {ten:'面对 + N，S + ……', nhan:'面对', vd:'面对找工作的压力，我们要乐观一些。', khi:'Nêu hoàn cảnh khó khăn.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要认真想一想，就会发现自己的优势。', khi:'Điều kiện đủ — đưa ra giải pháp.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然我缺乏经验，但是我学得很快。', khi:'Nhận điểm yếu rồi lật lại bằng điểm mạnh.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'专注的人不仅做事效率高，也更容易成功。', khi:'Nêu hai lợi ích cùng lúc — phần kết.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['是在','正常范围内的','她的反应'],
     dap:'她的反应是在正常范围内的。',
     vn:'Phản ứng của cô ấy nằm trong phạm vi bình thường.',
     giai:'Câu 29 sách bài tập. Chủ ngữ 她的反应 → 是在 + 正常范围内 + 的 (是……的 nhấn mạnh).'},
    {manh:['到达了','代表们','会场','已经陆续'],
     dap:'代表们已经陆续到达了会场。',
     vn:'Các đại biểu đã lần lượt đến hội trường.',
     giai:'Câu 30 sách bài tập. Chủ ngữ → 已经 + 陆续 (trạng ngữ) → 到达了 + 会场.'},
    {manh:['给你参考','他的','可以','成长过程'],
     dap:'他的成长过程可以给你参考。',
     vn:'Quá trình trưởng thành của anh ấy có thể cho bạn tham khảo.',
     giai:'Câu 31 sách bài tập. 他的成长过程 làm chủ ngữ → 可以 → 给你参考.'},
    {manh:['堆着','桌子上','作业','一大堆'],
     dap:'桌子上堆着一大堆作业。',
     vn:'Trên bàn chất cả một đống bài tập.',
     giai:'Câu tồn hiện: nơi chốn + 堆着 + 一大堆 + N.'},
    {manh:['已经','被证明','他的假设','是对的'],
     dap:'他的假设已经被证明是对的。',
     vn:'Giả thuyết của ông ấy đã được chứng minh là đúng.',
     giai:'假设 làm danh từ; câu 被: chủ ngữ + 已经 + 被证明 + 是对的.'},
    {manh:['为他的求职','这种专注','打开了大门','显然'],
     dap:'这种专注显然为他的求职打开了大门。',
     vn:'Sự chuyên chú này rõ ràng đã mở ra cánh cửa cho việc tìm việc của cậu.',
     giai:'Câu của bài khoá: chủ ngữ → 显然 → 为 + đối tượng → 打开了大门.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 找工作
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (找工作 · 寻找自己的优势). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 优势 · 面对 · 乐观 · 就业 · 简历 · 职位 · 缺乏 · 专注 · 执着 · 前途.',
  questions:[
    {q_zh:'你喜欢“分配工作”还是“双向选择”？为什么？',
     q_vn:'Em thích "được phân công việc làm" hay "hai bên cùng lựa chọn"? Vì sao?',
     hint:'Chọn một, nêu lý do, dùng 虽然……但是……',
     sample:'我喜欢双向选择。虽然分配工作比较稳定，但是双向选择能让我自己找到适合的职位，做自己感兴趣的事。',
     sample_vn:'Tôi thích hai bên cùng lựa chọn. Tuy được phân công việc thì ổn định hơn, nhưng hai bên cùng lựa chọn giúp tôi tự tìm được vị trí phù hợp, làm việc mình thích.',
     note:'Câu hỏi 还是 → trả lời thẳng lựa chọn của mình trước, rồi mới giải thích.'},
    {q_zh:'一般的用人单位对员工可能有什么样的要求？',
     q_vn:'Các đơn vị tuyển dụng thường có thể có những yêu cầu gì với nhân viên?',
     hint:'Liệt kê 2–3 yêu cầu, dùng 不仅……也……',
     sample:'一般的单位不仅要求员工有专业知识，也希望他们做事专注、执着，有团队精神，不缺乏责任心。',
     sample_vn:'Các đơn vị thường không chỉ yêu cầu nhân viên có kiến thức chuyên môn, mà còn mong họ làm việc chuyên tâm, bền bỉ, có tinh thần đồng đội, không thiếu tinh thần trách nhiệm.',
     note:'Ôn 专注, 执着 — hai phẩm chất được nhắc trong bài khoá.'},
    {q_zh:'你认为自己有什么优势？面对找工作的问题，你应该做哪些准备？',
     q_vn:'Em thấy mình có ưu thế gì? Đứng trước chuyện tìm việc, em nên chuẩn bị những gì?',
     hint:'Nói 1 ưu thế + 2 việc chuẩn bị, dùng 面对 và 只要……就……',
     sample:'我觉得我的优势是会说汉语，而且反应比较快。面对找工作的问题，我应该先写好简历，多参加实习。只要准备充分，就不怕没有机会。',
     sample_vn:'Tôi thấy ưu thế của mình là biết tiếng Trung, lại phản ứng khá nhanh. Trước chuyện tìm việc, tôi nên viết CV thật tốt trước, tham gia thực tập nhiều. Chỉ cần chuẩn bị đầy đủ thì không sợ thiếu cơ hội.',
     note:'Nói 我的优势是……, không nói 我很优势.'},
    {q_zh:'如果你参加《非你莫属》这样的节目，你会向老板们展示什么才艺？',
     q_vn:'Nếu em tham gia chương trình như "Chỉ thuộc về bạn", em sẽ thể hiện tài lẻ gì trước các ông chủ?',
     hint:'Kể tài lẻ và vì sao nó giúp em, dùng 从此',
     sample:'我会展示我画画的才艺。我小学的时候参加过一次画画比赛，从此就爱上了画画。我觉得这能证明我做事很专注。',
     sample_vn:'Tôi sẽ thể hiện tài vẽ tranh. Hồi tiểu học tôi từng tham gia một cuộc thi vẽ, từ đó yêu thích vẽ tranh. Tôi thấy điều này chứng minh tôi làm việc rất tập trung.',
     note:'Vế trước 从此 là sự việc làm mốc; vế sau nói sự thay đổi kéo dài.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 28.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第28课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'小刘，你今年就要毕业了，对找工作有什么想法？'},
            {sp:'男',zh:'说实话，我觉得从专业看，自己实在没有什么优势。'}],
     q:'男的觉得自己怎么样？',qvn:'Người đàn ông thấy bản thân thế nào?',
     opts:['专业很好','找工作很容易','已经有工作了','专业上没有优势'],ans:3,
     why:'从专业看，自己实在没有什么优势 = xét về chuyên ngành, bản thân chẳng có ưu thế gì.',
     words:['实话','优势']},

    {n:2,
     lines:[{sp:'男',zh:'请问，我想去鼓楼大街，应该怎么坐车？'},
            {sp:'女',zh:'在前面坐1路，到天安门东，然后换乘3路。'}],
     q:'从这里到鼓楼大街要换乘几次车？',qvn:'Từ đây đến đường Cổ Lâu phải đổi xe mấy lần?',
     opts:['一次','两次','三次','不用换乘'],ans:0,
     why:'Đi tuyến 1 → đến Thiên An Môn Đông → đổi sang tuyến 3: chỉ đổi xe MỘT lần. Đừng nhầm với số tuyến 1 và 3.',
     words:['鼓楼大街','天安门东','乘']},

    {n:3,
     lines:[{sp:'女',zh:'来应聘我们网站的编辑职位，你觉得自己有什么优势？'},
            {sp:'男',zh:'我的专业是计算机，电脑软件用得很熟练；另外，我也很爱好文学。'}],
     q:'男的觉得自己哪方面最强？',qvn:'Người đàn ông thấy mình mạnh nhất ở mặt nào?',
     opts:['文学','编辑','电脑软件','外语'],ans:2,
     why:'Chuyên ngành máy tính, dùng phần mềm rất thành thạo — đây là điểm mạnh chính; văn học chỉ là 另外 (thêm vào), 爱好.',
     words:['职位','优势']},

    {n:4,
     lines:[{sp:'男',zh:'昨天我才听说，你跟王林是同学。你们熟吗？'},
            {sp:'女',zh:'不算熟，同届不同班，就是在楼里见面打个招呼的交情。'}],
     q:'女的跟王林是什么关系？',qvn:'Người phụ nữ và Vương Lâm có quan hệ gì?',
     opts:['同班同学，很熟','同届不同班，不太熟','好朋友','不认识'],ans:1,
     why:'同届不同班 = cùng khoá khác lớp; 不算熟 = không thân lắm, chỉ chào nhau khi gặp.',
     words:['届']},

    {n:5,
     lines:[{sp:'女',zh:'这次比赛让小李去参加怎么样？他反应比较快。'},
            {sp:'男',zh:'小李反应虽然快，但基本功没有小张好。'}],
     q:'男的希望派谁去参加比赛？',qvn:'Người đàn ông muốn cử ai đi thi?',
     opts:['小张','小李','小刘','小王'],ans:0,
     why:'虽然……但…… — ý chính ở vế sau: kỹ năng cơ bản của Tiểu Lý không bằng Tiểu Trương → muốn cử Tiểu Trương.',
     words:['反应']},

    {n:6,
     lines:[{sp:'男',zh:'你们给的工资是不是太高了？'},
            {sp:'女',zh:'专业的、执着的、优秀的人才是无价的。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['工资确实太高了','工资应该降低','优秀人才值得高工资','公司没有钱'],ans:2,
     why:'人才是无价的 = nhân tài là vô giá → trả lương cao cho người giỏi là xứng đáng.',
     words:['执着']},

    {n:7,
     lines:[{sp:'女',zh:'明天就要开项目会了，你真的打算这次让小刘负责？'},
            {sp:'男',zh:'我们不是都说好了吗？小刘有什么不好？'},
            {sp:'女',zh:'她可还是个新人。'},
            {sp:'男',zh:'你总是对别人缺乏信心。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['小刘不适合负责','应该相信小刘','会议应该推迟','新人不能负责项目'],ans:1,
     why:'你总是对别人缺乏信心 = chị lúc nào cũng thiếu tin tưởng người khác → anh ấy tin Tiểu Lưu làm được.',
     words:['缺乏']},

    {n:8,
     lines:[{sp:'男',zh:'今年来找工作的毕业生里，有适合干办公室的人吗？'},
            {sp:'女',zh:'怎么了？小高不是挺好的吗？'},
            {sp:'男',zh:'她下个月就要辞职了，说是跟别人一起去开公司。'},
            {sp:'女',zh:'我帮你看看。'}],
     q:'关于小高，下列哪项正确？',qvn:'Về Tiểu Cao, điều nào sau đây đúng?',
     opts:['是今年的毕业生','下个月要辞职','不适合干办公室','要去读研究生'],ans:1,
     why:'她下个月就要辞职了 — cô ấy sắp nghỉ việc để cùng người khác mở công ty.',
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
    {scene:'Bạn em nói lo sau này không tìm được việc vì học lực chỉ trung bình.',
     a:{sp:'Bạn',zh:'我成绩一般，以后肯定找不到好工作。',vn:'Tớ học bình thường, sau này chắc chắn không tìm được việc tốt.'},
     need:['Dùng 优势','Chỉ ra một điểm mạnh của bạn để động viên'],
     sample:'别这么说，你篮球打得那么好，又会组织活动，这些都是你的优势啊！',
     samplePy:'Bié zhème shuō, nǐ lánqiú dǎ de nàme hǎo, yòu huì zǔzhī huódòng, zhèxiē dōu shì nǐ de yōushì a!',
     sampleVn:'Đừng nói thế, cậu chơi bóng rổ giỏi thế, lại biết tổ chức hoạt động, đó đều là ưu thế của cậu mà!',
     tip:'……是你的优势 / 你在……方面有优势.'},

    {scene:'Người nước ngoài hỏi em đường đến Hồ Gươm bằng xe buýt.',
     a:{sp:'Du khách',zh:'请问，去还剑湖应该怎么坐车？',vn:'Xin hỏi, đi Hồ Gươm thì đi xe thế nào?'},
     need:['Dùng 换乘 (乘)','Chỉ cách đi: tuyến nào, đổi ở đâu'],
     sample:'您在前面坐9路，到大剧院下车，然后换乘2路，就可以到达了。',
     samplePy:'Nín zài qiánmiàn zuò jiǔ lù, dào Dàjùyuàn xià chē, ránhòu huànchéng èr lù, jiù kěyǐ dàodá le.',
     sampleVn:'Ông đi tuyến 9 ở phía trước, đến Nhà hát Lớn thì xuống, sau đó đổi sang tuyến 2 là tới.',
     tip:'Mẫu chỉ đường trong bài: 坐……路，到……，换乘……路，就可以到达.'},

    {scene:'Cô giáo hỏi em tại sao từ lớp 8 em lại học tiếng Trung chăm như vậy.',
     a:{sp:'Cô',zh:'你为什么这么喜欢学汉语？',vn:'Sao em thích học tiếng Trung thế?'},
     need:['Dùng 从此','Kể một sự việc làm mốc'],
     sample:'初二的时候我看了一部中国电影，觉得特别有意思，从此就爱上了汉语。',
     samplePy:'Chū\'èr de shíhou wǒ kànle yí bù Zhōngguó diànyǐng, juéde tèbié yǒu yìsi, cóngcǐ jiù àishangle Hànyǔ.',
     sampleVn:'Hồi lớp 8 em xem một bộ phim Trung Quốc, thấy cực kỳ hay, từ đó em mê tiếng Trung luôn.',
     tip:'Vế trước là mốc, 从此 mở đầu vế sau. 初二 = năm hai cấp hai.'},

    {scene:'Bạn cùng nhóm đưa ra kế hoạch rất chung chung.',
     a:{sp:'Bạn',zh:'我们的计划就是：好好准备，争取拿第一。',vn:'Kế hoạch của bọn mình là: chuẩn bị thật tốt, cố giành giải nhất.'},
     need:['Dùng 具体','Đề nghị lập kế hoạch chi tiết hơn'],
     sample:'这样太笼统了，我们应该制订一个具体的计划，每个人负责什么都要写清楚。',
     samplePy:'Zhèyàng tài lǒngtǒng le, wǒmen yīnggāi zhìdìng yí ge jùtǐ de jìhuà, měi ge rén fùzé shénme dōu yào xiě qīngchu.',
     sampleVn:'Thế thì chung chung quá, bọn mình nên lập một kế hoạch cụ thể, ai phụ trách gì đều phải ghi rõ.',
     tip:'制订 + 具体的计划 (ôn 制订 số 29).'},

    {scene:'Em trai than thở vì bài tập nhiều quá.',
     a:{sp:'Em trai',zh:'今天的作业太多了，我不想写了！',vn:'Bài tập hôm nay nhiều quá, em không muốn làm nữa!'},
     need:['Dùng 一大堆','Khuyên em làm dần từng bài'],
     sample:'虽然作业有一大堆，但是一道一道地做，很快就能做完。',
     samplePy:'Suīrán zuòyè yǒu yí dà duī, dànshì yí dào yí dào de zuò, hěn kuài jiù néng zuòwán.',
     sampleVn:'Tuy bài tập cả đống, nhưng làm từng bài một thì chẳng mấy chốc là xong.',
     tip:'一大堆 đọc yí dà duī; ôn 虽然……但是…….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em trả lời nhà tuyển dụng trong buổi phỏng vấn: "Bạn có ưu thế gì?"',
     a:'我的专业是计算机，电脑软件用得很熟练，另外我也很爱好文学。',b:'我啥都会，电脑、写东西都行！',better:'a',
     why:'Phỏng vấn cần trang trọng, cụ thể: nêu chuyên ngành, kỹ năng (bài nghe số 3). Câu b (啥都会) quá khẩu ngữ, nghe khoác lác.'},

    {scene:'Thông báo tuyển dụng đăng trên website của khách sạn.',
     a:'我们要找个管钱的，会的快来！',b:'现酒店财务部需要招聘财务经理一名，要求相关专业研究生毕业。',better:'b',
     why:'Tin tuyển dụng dùng văn viết: 现……需要招聘……一名, 要求…… (bài nghe 13–14). Câu a như nói miệng.'},

    {scene:'Em hỏi đường một cô bán hàng ven đường.',
     a:'请问，去鼓楼大街应该怎么坐车？',b:'敬请告知前往鼓楼大街之乘车路线。',better:'a',
     why:'Hỏi đường thường ngày chỉ cần lịch sự, tự nhiên: 请问……怎么坐车? Câu b (敬请告知, 之) văn vẻ quá mức, nghe kỳ.'},

    {scene:'Em viết thư cảm ơn công ty dù không được tuyển.',
     a:'虽然没被录用，还是谢了啊！',b:'虽然贵公司没有录用我，但认真看过我的简历，也使我收获了面试经验，特此表示感谢。',better:'b',
     why:'Thư gửi công ty cần trang trọng: 贵公司, 特此表示感谢 (bài nghe 11–12). Câu a như tin nhắn cho bạn.'},

    {scene:'Em rủ bạn thân cuối tuần đi chơi.',
     a:'周末有空吗？咱们去西湖边转转吧！',b:'本周末将安排休闲一日游，欢迎参加。',better:'a',
     why:'Rủ bạn thân nói thân mật (咱们, 转转). Câu b là giọng thông báo của công ty du lịch.'},

    {scene:'Người dẫn chương trình truyền hình giới thiệu thí sinh.',
     a:'下面这位是刘辰，他是一名应届本科毕业生，让我们欢迎他！',b:'这哥们儿叫刘辰，刚毕业，大家鼓鼓掌呗。',better:'a',
     why:'MC trên truyền hình dùng lời trang trọng, lịch sự: 下面这位是……, 让我们欢迎他. Câu b (哥们儿, 呗) quá suồng sã.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 94)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Sách chia 4 phần: 刘辰的烦恼 → 刘辰的机会 → 节目现场 → 求职的结果. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'刘辰的烦恼', cue:'刘辰是……应届……，面对……的就业形势……', words:['刘辰','届','本科','面对','乐观','就业','实话','优势']},
    {step:'刘辰的机会', cue:'《非你莫属》节目组看了他的简历……', words:['天津卫视','非你莫属','简历','现场','职位','体验']},
    {step:'公交迷的成长', cue:'小学六年级……，从此……；从上初中起……', words:['从此','范围','初中','顾问','参考','成长']},
    {step:'节目现场', cue:'节目制作时……主持人现场考他：“假设……”', words:['制作','才艺','假设','国贸','鼓楼大街','乘','反应','天安门东','到达']},
    {step:'老板们提问', cue:'12位老板……陆续向他提问……', words:['老板','陆续','提问','堆','情侣','制订','休闲','具体']},
    {step:'求职的结果', cue:'这种专注显然……，甚至要专门为他成立……', words:['专注','显然','成立','部门']},
    {step:'老总的话', cue:'专业的、执着的、优秀的人才……无论在哪个行业……', words:['执着','光明','前途','行业','缺乏']}
  ],
  checklist: [
    'Kể đủ bốn phần của sách chưa: nỗi lo → cơ hội → trường quay → kết quả tìm việc?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có kể được vì sao Lưu Thần thuộc lòng các tuyến xe buýt (mê xe buýt từ lớp sáu) không?',
    'Có nhắc lại được câu nói của vị sếp tổng về nhân tài không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 93–94) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 3 画线连接 và bài 4 复述 không thuộc 3 dạng này — bài 3 đưa vào matchData, bài 4 vào retellData)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['参考','范围','具体','乐观','陆续','显然'],
   cau:[
     {s:'因为天气影响，我们的活动推迟了，＿＿时间再等通知。', dap:['具体']},
     {s:'会议快要开始了，代表们＿＿走进了会场。', dap:['陆续']},
     {s:'这次比赛是在全国＿＿内举行的。', dap:['范围']},
     {s:'前两局棋输给爸爸，他＿＿并不担心。', dap:['显然']},
     {s:'不管遇到什么困难，都要＿＿地面对生活。', dap:['乐观']},
     {s:'这只是我个人意见，仅供你＿＿。', dap:['参考']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'这个玩具是我爸爸亲手为我＿＿的。', opts:['制作','制造'], ans:0, giai:'Tự tay làm đồ vật nhỏ (đồ chơi) → 制作. 制造 là sản xuất công nghiệp quy mô lớn bằng máy móc (制造汽车).'},
     {s:'我们＿＿他明天9点能出发，那么10点可以到这儿。', opts:['假设','假如'], ans:0, giai:'Sau chủ ngữ 我们 cần một ĐỘNG TỪ: 我们假设…… = chúng ta giả sử …. 假如 là liên từ, chỉ đứng đầu vế câu (假如他明天9点出发……), không đứng sau chủ ngữ làm vị ngữ.'},
     {s:'我们已经安全地＿＿目的地了。', opts:['达到','到达'], ans:1, giai:'目的地 là ĐỊA ĐIỂM → 到达. 达到 đi với mục tiêu, tiêu chuẩn, mức độ (达到目标 / 要求).'},
     {s:'来我们公司工作，你的前途一片＿＿！', opts:['光明','明亮'], ans:0, giai:'Nghĩa bóng "tương lai tươi sáng" → 前途光明 / 一片光明. 明亮 chỉ ánh sáng thật (明亮的教室, 眼睛明亮).'}
   ]}
];
