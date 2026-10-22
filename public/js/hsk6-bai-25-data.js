// ══════════════════════════════════════════
// DATA — HSK6 Bài 25: 草船借箭 (Thuyền cỏ mượn tên)
// 第七单元 经典阅读 · Nguồn: HSK标准教程6下 (tr. 52–61)
// Bài khoá: 草船借箭 (1141 chữ) — trích cải biên từ 《三国演义》
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'服气',py:'fúqì',pos:'Động từ / Tính từ',vn:'chịu phục, phục, chịu thua (trong lòng)',hv:'phục khí',em:'😤',lesson:1,
   explain:['Trong lòng thật sự công nhận người khác giỏi hơn mình, chịu thua: 服 = phục, 气 = khí (tâm trạng). Hay dùng ở dạng phủ định: 不服气 = không phục, còn ấm ức.','Có thể làm vị ngữ (他不服气), bổ ngữ (说得我服气了) hoặc đi sau 让 / 令 (让人服气). Khẩu ngữ lẫn văn viết.'],
   usage:'(心里) + 不服气; 让 / 令 + 人 + 服气; 对…… + 不服气; 说得 / 赢得 + (人) + 服气. Bài khoá: 却总比不过诸葛亮，心里一直不服气.',
   collo:['心里不服气','不服气','让人服气','服气了'],
   ex_zh:'周瑜觉得自己很有才，却总比不过诸葛亮，心里一直不服气。',ex_py:'Zhōu Yú juéde zìjǐ hěn yǒu cái, què zǒng bǐ bu guò Zhūgě Liàng, xīnli yìzhí bù fúqì.',ex_vn:'Chu Du cho rằng mình rất có tài, vậy mà lúc nào cũng không bằng Gia Cát Lượng, trong lòng mãi không phục.',
   exList:[
     {zh:'周瑜觉得自己很有才，却总比不过诸葛亮，心里一直不服气。',py:'Zhōu Yú juéde zìjǐ hěn yǒu cái, què zǒng bǐ bu guò Zhūgě Liàng, xīnli yìzhí bù fúqì.',vn:'Chu Du cho rằng mình rất có tài, vậy mà lúc nào cũng không bằng Gia Cát Lượng, trong lòng mãi không phục.'},
     {zh:'比赛输了以后，他很不服气，非要再比一次不可。',py:'Bǐsài shūle yǐhòu, tā hěn bù fúqì, fēi yào zài bǐ yí cì bùkě.',vn:'Thua trận xong, cậu ấy rất không phục, nhất định đòi đấu lại một lần nữa.'},
     {zh:'他讲得有理有据，连一向爱挑毛病的老王也服气了。',py:'Tā jiǎng de yǒu lǐ yǒu jù, lián yíxiàng ài tiāo máobìng de Lǎo Wáng yě fúqì le.',vn:'Anh ấy nói có lý có cứ, đến cả ông Vương xưa nay thích bắt bẻ cũng phải chịu phục.'}
   ],
   colloFull:[
     {zh:'心里不服气',py:'xīnli bù fúqì',vn:'trong lòng không phục'},
     {zh:'不服气',py:'bù fúqì',vn:'không phục, còn ấm ức'},
     {zh:'让人服气',py:'ràng rén fúqì',vn:'khiến người ta tâm phục'},
     {zh:'服气了',py:'fúqì le',vn:'chịu phục rồi'},
     {zh:'对结果不服气',py:'duì jiéguǒ bù fúqì',vn:'không phục kết quả'}
   ],
   patterns:[
     {s:'（心里）+ 不服气',m:'Trong lòng không chịu thua, còn ấm ức'},
     {s:'让 / 令 + 人 + 服气',m:'Khiến người khác tâm phục khẩu phục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thua trận, nhưng trong lòng cậu ấy vẫn không phục, quyết định năm sau thi lại.',answer:'虽然输了比赛，但他心里还是不服气，决定明年再比。',answerPy:'Suīrán shūle bǐsài, dàn tā xīnli háishi bù fúqì, juédìng míngnián zài bǐ.',
      note:'虽然……但……还是……; 不服气 làm vị ngữ (ôn HSK 4).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Cô ấy không những hát hay mà còn chăm chỉ, thật khiến người ta tâm phục.',answer:'她不但唱得好，而且非常努力，真让人服气。',answerPy:'Tā búdàn chàng de hǎo, érqiě fēicháng nǔlì, zhēn ràng rén fúqì.',
      note:'不但……而且…… tăng tiến; 让人服气 (ôn HSK 4).',pair:'不但……而且……'}
   ]},

  {n:2,zh:'军队',py:'jūnduì',pos:'Danh từ',vn:'quân đội, đội quân',hv:'quân đội',em:'🪖',lesson:1,
   explain:['Lực lượng vũ trang có tổ chức của một nước, một tập đoàn chính trị: 军 = quân, 队 = đội. Lượng từ: 支 (一支军队).','Hay đi với 派出 / 调动 / 驻扎 / 率领 (dẫn dắt). Bài khoá: 我们就要跟曹操的军队打仗了.'],
   usage:'一支 + 军队; 派出 / 调动 / 率领 + 军队; 军队 + 驻扎在…… / 打仗; 跟……的军队 + 打仗 / 作战.',
   collo:['曹操的军队','一支军队','派出军队','军队驻扎'],
   ex_zh:'我们就要跟曹操的军队打仗了。',ex_py:'Wǒmen jiù yào gēn Cáo Cāo de jūnduì dǎzhàng le.',ex_vn:'Chúng ta sắp đánh nhau với quân đội của Tào Tháo rồi.',
   exList:[
     {zh:'一天，周瑜请来了诸葛亮，说：“我们就要跟曹操的军队打仗了。”',py:'Yì tiān, Zhōu Yú qǐngláile Zhūgě Liàng, shuō: “Wǒmen jiù yào gēn Cáo Cāo de jūnduì dǎzhàng le.”',vn:'Một hôm, Chu Du mời Gia Cát Lượng tới, nói: "Chúng ta sắp giao chiến với quân của Tào Tháo rồi."'},
     {zh:'洪水发生以后，政府立即派出军队帮助群众转移。',py:'Hóngshuǐ fāshēng yǐhòu, zhèngfǔ lìjí pàichū jūnduì bāngzhù qúnzhòng zhuǎnyí.',vn:'Sau khi lũ lụt xảy ra, chính phủ lập tức điều quân đội giúp người dân sơ tán.'},
     {zh:'我爷爷年轻时在军队里当过兵，到现在还保持着早起的习惯。',py:'Wǒ yéye niánqīng shí zài jūnduì li dāngguo bīng, dào xiànzài hái bǎochízhe zǎo qǐ de xíguàn.',vn:'Hồi trẻ ông tôi từng đi lính trong quân đội, đến giờ vẫn giữ thói quen dậy sớm.'}
   ],
   colloFull:[
     {zh:'曹操的军队',py:'Cáo Cāo de jūnduì',vn:'quân đội của Tào Tháo'},
     {zh:'一支军队',py:'yì zhī jūnduì',vn:'một đội quân'},
     {zh:'派出军队',py:'pàichū jūnduì',vn:'điều quân, phái quân'},
     {zh:'军队驻扎',py:'jūnduì zhùzhā',vn:'quân đội đóng quân'},
     {zh:'在军队里当兵',py:'zài jūnduì li dāng bīng',vn:'đi lính trong quân đội'}
   ],
   patterns:[
     {s:'跟 + ……的军队 + 打仗 / 作战',m:'Giao chiến với quân đội của …'},
     {s:'派出 / 调动 + 军队',m:'Điều động quân đội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì đường bị lũ cuốn trôi, quân đội đành phải đi bộ vào làng.',answer:'由于道路被洪水冲断了，军队只好步行进村。',answerPy:'Yóuyú dàolù bèi hóngshuǐ chōngduàn le, jūnduì zhǐhǎo bùxíng jìn cūn.',
      note:'由于…… nêu nguyên nhân; câu bị động 被 + V + bổ ngữ kết quả (ôn HSK 4).',pair:'被'},
     {promptLang:'vi',prompt:'Nghe nói quân địch sắp đến, cả thành phố đều căng thẳng lên.',answer:'听说敌人的军队就要来了，整个城市都紧张起来了。',answerPy:'Tīngshuō dírén de jūnduì jiù yào lái le, zhěnggè chéngshì dōu jǐnzhāng qǐlai le.',
      note:'就要……了 = sắp; Adj + 起来 (bắt đầu trở nên, ôn HSK 4).',pair:'就要……了'}
   ]},

  {n:3,zh:'武器',py:'wǔqì',pos:'Danh từ',vn:'vũ khí',hv:'vũ khí',em:'🏹',lesson:1,
   explain:['Công cụ dùng để đánh nhau, tấn công hoặc phòng vệ: 弓箭, 矛, 盾, 枪 đều là 武器. Lượng từ: 件 / 种.','Nghĩa bóng: công cụ, phương tiện để đấu tranh, đạt mục đích: 知识是我们最好的武器, 秘密武器 (vũ khí bí mật).'],
   usage:'用 + 什么 / 某种 + 武器; 武器 + 装备; 放下武器 (đầu hàng); 秘密武器; ……是……的武器 (nghĩa bóng).',
   collo:['用什么武器','秘密武器','放下武器','先进的武器'],
   ex_zh:'水上作战，用什么武器最好？',ex_py:'Shuǐ shang zuòzhàn, yòng shénme wǔqì zuì hǎo?',ex_vn:'Đánh trận trên sông nước thì dùng vũ khí gì là tốt nhất?',
   exList:[
     {zh:'周瑜问：“水上作战，用什么武器最好？”诸葛亮说：“弓箭。”',py:'Zhōu Yú wèn: “Shuǐ shang zuòzhàn, yòng shénme wǔqì zuì hǎo?” Zhūgě Liàng shuō: “Gōngjiàn.”',vn:'Chu Du hỏi: "Đánh trận trên sông nước, dùng vũ khí gì là tốt nhất?" Gia Cát Lượng đáp: "Cung tên."'},
     {zh:'博物馆里陈列着许多古代的武器，比如弓箭、矛和盾。',py:'Bówùguǎn li chénlièzhe xǔduō gǔdài de wǔqì, bǐrú gōngjiàn, máo hé dùn.',vn:'Trong viện bảo tàng trưng bày rất nhiều vũ khí cổ đại, chẳng hạn cung tên, giáo và khiên.'},
     {zh:'对我来说，微笑是交朋友最有效的秘密武器。',py:'Duì wǒ lái shuō, wēixiào shì jiāo péngyou zuì yǒuxiào de mìmì wǔqì.',vn:'Với tôi, nụ cười là vũ khí bí mật hữu hiệu nhất để kết bạn.'}
   ],
   colloFull:[
     {zh:'用什么武器',py:'yòng shénme wǔqì',vn:'dùng vũ khí gì'},
     {zh:'秘密武器',py:'mìmì wǔqì',vn:'vũ khí bí mật'},
     {zh:'放下武器',py:'fàngxià wǔqì',vn:'hạ vũ khí (đầu hàng)'},
     {zh:'先进的武器',py:'xiānjìn de wǔqì',vn:'vũ khí tiên tiến'},
     {zh:'古代的武器',py:'gǔdài de wǔqì',vn:'vũ khí cổ đại'}
   ],
   patterns:[
     {s:'用 + 什么武器 + 最好 / 最合适',m:'Dùng vũ khí gì là tốt nhất'},
     {s:'……是……的（秘密）武器',m:'… là vũ khí (bí mật) của … (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với học sinh, kiến thức chính là vũ khí mạnh nhất.',answer:'对学生来说，知识就是最有力的武器。',answerPy:'Duì xuésheng lái shuō, zhīshi jiù shì zuì yǒulì de wǔqì.',
      note:'对……来说 = đối với … mà nói (ôn HSK 4); 就是 nhấn mạnh.',pair:'对……来说'},
     {promptLang:'vi',prompt:'Kẻ địch thấy không đánh lại được, đành phải hạ vũ khí.',answer:'敌人见打不过，只好放下了武器。',answerPy:'Dírén jiàn dǎ bu guò, zhǐhǎo fàngxiàle wǔqì.',
      note:'Bổ ngữ khả năng V + 不过 (không thắng nổi); 只好 = đành phải (ôn HSK 4).',pair:'V不过'}
   ]},

  {n:4,zh:'当务之急',py:'dāngwùzhījí',pos:'Thành ngữ',vn:'việc cấp bách trước mắt, việc cần làm gấp nhất lúc này',hv:'đương vụ chi cấp',em:'🚨',lesson:1,
   explain:['Việc cần phải làm GẤP NHẤT trong hiện tại: 当 = hiện tại, 务 = việc phải làm, 急 = gấp. Thường làm chủ ngữ hoặc tân ngữ: 当务之急是……','Văn viết, trang trọng; hay gặp trong phát biểu, báo chí. Không nói 很当务之急. Bài khoá: 当务之急是赶造十万支箭.'],
   usage:'当务之急 + 是 + V / 把……V (当务之急是赶造十万支箭); 成为 / 是 + ……的当务之急; 眼下的当务之急.',
   collo:['当务之急是……','眼下的当务之急','目前的当务之急','成为当务之急'],
   ex_zh:'可现在我们缺箭，当务之急是赶造十万支箭。',ex_py:'Kě xiànzài wǒmen quē jiàn, dāngwùzhījí shì gǎnzào shíwàn zhī jiàn.',ex_vn:'Nhưng bây giờ chúng ta thiếu tên, việc cấp bách nhất là gấp rút làm mười vạn mũi tên.',
   exList:[
     {zh:'这话不假。可现在我们缺箭，当务之急是赶造十万支箭。',py:'Zhè huà bù jiǎ. Kě xiànzài wǒmen quē jiàn, dāngwùzhījí shì gǎnzào shíwàn zhī jiàn.',vn:'Lời này không sai. Nhưng hiện giờ ta thiếu tên, việc gấp nhất là khẩn trương làm mười vạn mũi tên.'},
     {zh:'在发言中，市长指出：“当务之急是把经济搞上去。”',py:'Zài fāyán zhōng, shìzhǎng zhǐchū: “Dāngwùzhījí shì bǎ jīngjì gǎo shàngqu.”',vn:'Trong bài phát biểu, thị trưởng chỉ rõ: "Việc cấp bách trước mắt là đưa kinh tế đi lên."'},
     {zh:'离高考只剩一个月了，眼下的当务之急是把错题整理一遍。',py:'Lí gāokǎo zhǐ shèng yí ge yuè le, yǎnxià de dāngwùzhījí shì bǎ cuòtí zhěnglǐ yí biàn.',vn:'Chỉ còn một tháng nữa là thi đại học, việc cần làm gấp nhất bây giờ là hệ thống lại các câu làm sai.'}
   ],
   colloFull:[
     {zh:'当务之急是……',py:'dāngwùzhījí shì……',vn:'việc cấp bách nhất là …'},
     {zh:'眼下的当务之急',py:'yǎnxià de dāngwùzhījí',vn:'việc cấp bách trước mắt'},
     {zh:'目前的当务之急',py:'mùqián de dāngwùzhījí',vn:'việc cần làm gấp hiện nay'},
     {zh:'成为当务之急',py:'chéngwéi dāngwùzhījí',vn:'trở thành việc cấp bách'},
     {zh:'当务之急是赶造十万支箭',py:'dāngwùzhījí shì gǎnzào shíwàn zhī jiàn',vn:'việc gấp nhất là làm gấp mười vạn mũi tên'}
   ],
   patterns:[
     {s:'当务之急 + 是 + V……',m:'Việc gấp nhất lúc này là …'},
     {s:'……成为……的当务之急',m:'… trở thành việc cấp bách của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước sông đang dâng lên, việc cấp bách trước mắt là sơ tán dân làng đến nơi an toàn.',answer:'河水正在上涨，当务之急是把村民转移到安全的地方。',answerPy:'Héshuǐ zhèngzài shàngzhǎng, dāngwùzhījí shì bǎ cūnmín zhuǎnyí dào ānquán de dìfang.',
      note:'Câu 把 + V + 到 + nơi chốn (ôn HSK 4); 正在 tiếp diễn.',pair:'把……V到……'},
     {promptLang:'vi',prompt:'Nếu muốn sang năm thi đỗ, việc gấp nhất bây giờ là nâng cao điểm môn toán.',answer:'要想明年考上，现在的当务之急就是提高数学成绩。',answerPy:'Yào xiǎng míngnián kǎoshang, xiànzài de dāngwùzhījí jiù shì tígāo shùxué chéngjì.',
      note:'要想……就…… điều kiện – mục đích; V + 上 (đạt được, ôn HSK 4).',pair:'要想……就……'}
   ]},

  {n:5,zh:'承办',py:'chéngbàn',pos:'Động từ',vn:'đảm nhận, đảm trách (tổ chức, làm một việc)',hv:'thừa biện',em:'📋',lesson:1,
   explain:['Nhận lấy và lo liệu một công việc, sự kiện: 承 = nhận, gánh vác; 办 = làm, lo liệu. Tân ngữ thường là việc lớn, chính thức: 承办比赛 / 展览 / 会议 / 奥运会.','Hay dùng cấu trúc 由 + người / đơn vị + 承办 (do … đảm nhận). Phân biệt: 主办 = đứng ra tổ chức (đơn vị chủ trì), 承办 = đơn vị trực tiếp thực hiện.'],
   usage:'承办 + 比赛 / 展览 / 会议 / 活动; 由……承办; ……的事就由您承办吧 (bài khoá).',
   collo:['承办比赛','由您承办','承办会议','承办单位'],
   ex_zh:'造箭的事就由您承办吧。',ex_py:'Zào jiàn de shì jiù yóu nín chéngbàn ba.',ex_vn:'Việc làm tên xin giao cho ngài đảm nhận vậy.',
   exList:[
     {zh:'当务之急是赶造十万支箭，造箭的事就由您承办吧。',py:'Dāngwùzhījí shì gǎnzào shíwàn zhī jiàn, zào jiàn de shì jiù yóu nín chéngbàn ba.',vn:'Việc gấp nhất là làm gấp mười vạn mũi tên, việc làm tên xin giao cho ngài đảm nhận vậy.'},
     {zh:'今年的全市中学生运动会由我们学校承办。',py:'Jīnnián de quán shì zhōngxuéshēng yùndònghuì yóu wǒmen xuéxiào chéngbàn.',vn:'Hội khoẻ học sinh trung học toàn thành phố năm nay do trường chúng tôi đảm nhận tổ chức.'},
     {zh:'这家公司承办过好几次国际会议，经验非常丰富。',py:'Zhè jiā gōngsī chéngbànguo hǎo jǐ cì guójì huìyì, jīngyàn fēicháng fēngfù.',vn:'Công ty này đã từng đảm nhận tổ chức mấy lần hội nghị quốc tế, kinh nghiệm rất phong phú.'}
   ],
   colloFull:[
     {zh:'承办比赛',py:'chéngbàn bǐsài',vn:'đảm nhận tổ chức cuộc thi'},
     {zh:'由您承办',py:'yóu nín chéngbàn',vn:'do ngài đảm nhận'},
     {zh:'承办会议',py:'chéngbàn huìyì',vn:'đảm nhận tổ chức hội nghị'},
     {zh:'承办单位',py:'chéngbàn dānwèi',vn:'đơn vị thực hiện, đơn vị đăng cai'},
     {zh:'承办展览',py:'chéngbàn zhǎnlǎn',vn:'đảm nhận tổ chức triển lãm'}
   ],
   patterns:[
     {s:'由 + người / đơn vị + 承办',m:'Do … đảm nhận (thực hiện)'},
     {s:'承办 + 比赛 / 会议 / 展览',m:'Đảm nhận tổ chức cuộc thi / hội nghị / triển lãm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì năm ngoái tổ chức rất thành công, năm nay cuộc thi vẫn do trường chúng tôi đảm nhận.',answer:'因为去年办得很成功，所以今年的比赛仍然由我们学校承办。',answerPy:'Yīnwèi qùnián bàn de hěn chénggōng, suǒyǐ jīnnián de bǐsài réngrán yóu wǒmen xuéxiào chéngbàn.',
      note:'因为……所以……; 仍然 = vẫn (ôn HSK 4); 由……承办.',pair:'由'},
     {promptLang:'vi',prompt:'Nếu công ty các anh đảm nhận hội nghị lần này, chúng tôi sẽ yên tâm hơn nhiều.',answer:'要是这次会议由你们公司承办，我们就放心多了。',answerPy:'Yàoshi zhè cì huìyì yóu nǐmen gōngsī chéngbàn, wǒmen jiù fàngxīn duō le.',
      note:'要是……就…… giả thiết (khẩu ngữ); Adj + 多了 so sánh mức độ (ôn HSK 4).',pair:'要是……就……'}
   ]},

  {n:6,zh:'委托',py:'wěituō',pos:'Động từ',vn:'uỷ thác, nhờ (người khác làm thay)',hv:'uỷ thác',em:'🤝',lesson:1,
   explain:['Giao việc cho người khác làm thay mình: 委托 + người + V (委托律师处理). Cũng dùng như danh từ: 受……的委托 (được … uỷ thác).','Trang trọng hơn 托 / 请; thường là việc chính thức, cần tin tưởng. Bài khoá: 您委托的事，当然要办好.'],
   usage:'委托 + 某人 + (办 / 处理 / 生产……); 受 + ……(的) + 委托; ……委托的事; 委托书 (giấy uỷ quyền).',
   collo:['您委托的事','委托律师','受……委托','委托我们生产'],
   ex_zh:'您委托的事，当然要办好。',ex_py:'Nín wěituō de shì, dāngrán yào bànhǎo.',ex_vn:'Việc ngài đã giao phó, đương nhiên phải làm cho tốt.',
   exList:[
     {zh:'诸葛亮说：“您委托的事，当然要办好。箭什么时候用？”',py:'Zhūgě Liàng shuō: “Nín wěituō de shì, dāngrán yào bànhǎo. Jiàn shénme shíhou yòng?”',vn:'Gia Cát Lượng nói: "Việc ngài giao phó, đương nhiên phải làm cho tốt. Khi nào thì cần dùng tên?"'},
     {zh:'我们厂的一个大客户委托我们生产一批货，期限一周。',py:'Wǒmen chǎng de yí ge dà kèhù wěituō wǒmen shēngchǎn yì pī huò, qīxiàn yì zhōu.',vn:'Một khách hàng lớn của xưởng chúng tôi uỷ thác cho chúng tôi sản xuất một lô hàng, thời hạn một tuần.'},
     {zh:'受朋友委托，我特地来机场接他的女儿。',py:'Shòu péngyou wěituō, wǒ tèdì lái jīchǎng jiē tā de nǚ\'ér.',vn:'Được bạn nhờ, tôi đặc biệt ra sân bay đón con gái anh ấy.'}
   ],
   colloFull:[
     {zh:'您委托的事',py:'nín wěituō de shì',vn:'việc ngài giao phó'},
     {zh:'委托律师',py:'wěituō lǜshī',vn:'uỷ thác cho luật sư'},
     {zh:'受……委托',py:'shòu……wěituō',vn:'được … uỷ thác'},
     {zh:'委托我们生产',py:'wěituō wǒmen shēngchǎn',vn:'uỷ thác cho chúng tôi sản xuất'},
     {zh:'委托书',py:'wěituōshū',vn:'giấy uỷ quyền, giấy uỷ thác'}
   ],
   patterns:[
     {s:'委托 + 某人 + V',m:'Uỷ thác, nhờ ai làm việc gì'},
     {s:'受 + 某人 + (的) + 委托',m:'Được ai uỷ thác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc cậu nhờ tôi, dù khó đến mấy tôi cũng sẽ cố gắng làm cho tốt.',answer:'你委托我的事，无论多难，我都会尽力办好。',answerPy:'Nǐ wěituō wǒ de shì, wúlùn duō nán, wǒ dōu huì jìnlì bànhǎo.',
      note:'无论……都…… (ôn HSK 4); 委托 làm định ngữ (……委托的事).',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Ông ấy bận quá không đi được, nên đã uỷ thác luật sư thay mặt mình tham dự.',answer:'他忙得走不开，就委托律师代表自己出席。',answerPy:'Tā máng de zǒu bu kāi, jiù wěituō lǜshī dàibiǎo zìjǐ chūxí.',
      note:'Adj + 得 + bổ ngữ khả năng 走不开 (ôn HSK 5); 委托 + người + V.',pair:'V不开'}
   ]},

  {n:7,zh:'即将',py:'jíjiāng',pos:'Phó từ',vn:'sắp, sắp sửa (văn viết)',hv:'tức tương',em:'⏳',lesson:1,
   explain:['Phó từ, biểu thị việc SẮP xảy ra, sắp đến — nghĩa như 将要 / 就要, nhưng dùng nhiều trong văn viết, thông báo, tin tức. Điểm ngữ pháp 1 của bài.','Đứng trước động từ: 即将交战 / 到达 / 开始 / 毕业; có thể làm định ngữ cùng 的: 即将开始的冬眠. Khác 就要……了 (khẩu ngữ, cuối câu có 了): câu dùng 即将 thường không cần 了.'],
   usage:'即将 + V (到达 / 开始 / 结束 / 毕业 / 起飞); 即将 + V + 的 + N (即将开始的新生活).',
   collo:['即将交战','即将到达','即将开始','即将毕业'],
   ex_zh:'即将交战，十天怎么样？',ex_py:'Jíjiāng jiāozhàn, shí tiān zěnmeyàng?',ex_vn:'Sắp giao chiến rồi, mười ngày thì thế nào?',
   exList:[
     {zh:'周瑜说：“即将交战，十天怎么样？”',py:'Zhōu Yú shuō: “Jíjiāng jiāozhàn, shí tiān zěnmeyàng?”',vn:'Chu Du nói: "Sắp giao chiến rồi, mười ngày thì thế nào?"'},
     {zh:'各位乘客，飞机即将起飞，请大家系好安全带。',py:'Gèwèi chéngkè, fēijī jíjiāng qǐfēi, qǐng dàjiā jìhǎo ānquándài.',vn:'Kính thưa quý hành khách, máy bay sắp cất cánh, xin mọi người thắt dây an toàn.'},
     {zh:'我们已经完成了学业，即将走上工作岗位，开始人生新的一页。',py:'Wǒmen yǐjīng wánchéngle xuéyè, jíjiāng zǒushang gōngzuò gǎngwèi, kāishǐ rénshēng xīn de yí yè.',vn:'Chúng tôi đã hoàn thành việc học, sắp bước vào vị trí công tác, mở ra trang mới của cuộc đời.'}
   ],
   colloFull:[
     {zh:'即将交战',py:'jíjiāng jiāozhàn',vn:'sắp giao chiến'},
     {zh:'即将到达',py:'jíjiāng dàodá',vn:'sắp đến nơi'},
     {zh:'即将开始',py:'jíjiāng kāishǐ',vn:'sắp bắt đầu'},
     {zh:'即将毕业',py:'jíjiāng bìyè',vn:'sắp tốt nghiệp'},
     {zh:'即将开始的新生活',py:'jíjiāng kāishǐ de xīn shēnghuó',vn:'cuộc sống mới sắp bắt đầu'}
   ],
   patterns:[
     {s:'即将 + V',m:'Sắp làm gì / sắp xảy ra (văn viết)'},
     {s:'即将 + V + 的 + N',m:'… sắp (xảy ra) — làm định ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỳ thi đại học sắp bắt đầu, các học sinh lớp 12 ai nấy đều đang ôn tập căng thẳng.',answer:'高考即将开始，高三学生个个都在紧张地复习。',answerPy:'Gāokǎo jíjiāng kāishǐ, gāosān xuésheng gègè dōu zài jǐnzhāng de fùxí.',
      note:'Lượng từ lặp 个个 = ai nấy (ôn HSK 5); Adj + 地 + V.',pair:'个个'},
     {promptLang:'vi',prompt:'Đoàn tàu sắp đến ga cuối, xin hành khách mang theo đồ đạc của mình.',answer:'列车即将到达终点，请乘客带好自己的行李。',answerPy:'Lièchē jíjiāng dàodá zhōngdiǎn, qǐng chéngkè dàihǎo zìjǐ de xíngli.',
      note:'Lời thông báo văn viết dùng 即将; V + 好 (bổ ngữ kết quả, ôn HSK 4).',pair:'V好'}
   ]},

  {n:8,zh:'紧迫',py:'jǐnpò',pos:'Tính từ',vn:'cấp bách, gấp gáp (thời gian ít, không thể chậm trễ)',hv:'khẩn bách',em:'⏰',lesson:1,
   explain:['Rất gấp, không cho phép trì hoãn: 紧 = chặt, căng; 迫 = ép, sát. Chủ ngữ thường là 时间 / 任务 / 形势 (tình thế).','Hay làm vị ngữ (时间紧迫) hoặc trong cụm 紧迫感 (cảm giác cấp bách). Khác 紧张 (căng thẳng — cả tâm trạng): 紧迫 chỉ tính chất gấp của sự việc.'],
   usage:'时间 / 任务 / 形势 + 紧迫; 紧迫的任务; 有紧迫感; 时间紧迫，……也行.',
   collo:['时间紧迫','紧迫的任务','形势紧迫','紧迫感'],
   ex_zh:'时间紧迫，三天也行。',ex_py:'Shíjiān jǐnpò, sān tiān yě xíng.',ex_vn:'Thời gian cấp bách, ba ngày cũng được.',
   exList:[
     {zh:'诸葛亮说：“时间紧迫，三天也行。”',py:'Zhūgě Liàng shuō: “Shíjiān jǐnpò, sān tiān yě xíng.”',vn:'Gia Cát Lượng nói: "Thời gian gấp gáp, ba ngày cũng được."'},
     {zh:'时间紧迫，老板再三叮嘱我们，一定要抓紧生产，按时交货。',py:'Shíjiān jǐnpò, lǎobǎn zàisān dīngzhǔ wǒmen, yídìng yào zhuājǐn shēngchǎn, ànshí jiāo huò.',vn:'Thời gian gấp gáp, ông chủ dặn đi dặn lại chúng tôi nhất định phải khẩn trương sản xuất, giao hàng đúng hạn.'},
     {zh:'离比赛只有一周了，大家都有了一种紧迫感。',py:'Lí bǐsài zhǐ yǒu yì zhōu le, dàjiā dōu yǒule yì zhǒng jǐnpògǎn.',vn:'Chỉ còn một tuần là đến cuộc thi, mọi người đều có cảm giác gấp gáp.'}
   ],
   colloFull:[
     {zh:'时间紧迫',py:'shíjiān jǐnpò',vn:'thời gian cấp bách'},
     {zh:'紧迫的任务',py:'jǐnpò de rènwu',vn:'nhiệm vụ cấp bách'},
     {zh:'形势紧迫',py:'xíngshì jǐnpò',vn:'tình thế cấp bách'},
     {zh:'紧迫感',py:'jǐnpògǎn',vn:'cảm giác cấp bách'},
     {zh:'非常紧迫',py:'fēicháng jǐnpò',vn:'vô cùng gấp gáp'}
   ],
   patterns:[
     {s:'时间 / 任务 + 紧迫',m:'Thời gian / nhiệm vụ gấp gáp'},
     {s:'有 + 紧迫感',m:'Có cảm giác cấp bách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thời gian rất gấp, nhưng chúng tôi vẫn hoàn thành nhiệm vụ đúng hạn.',answer:'尽管时间很紧迫，我们还是按时完成了任务。',answerPy:'Jǐnguǎn shíjiān hěn jǐnpò, wǒmen háishi ànshí wánchéngle rènwu.',
      note:'尽管……还是…… nhượng bộ (ôn HSK 4).',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Thời gian gấp gáp như vậy, chúng ta chỉ có thể chia nhau ra làm.',answer:'时间这么紧迫，我们只能分头去做了。',answerPy:'Shíjiān zhème jǐnpò, wǒmen zhǐ néng fēntóu qù zuò le.',
      note:'这么 + Adj; 只能 = chỉ có thể (ôn HSK 4); 分头 = chia nhau.',pair:'只能'}
   ]},

  {n:9,zh:'公务',py:'gōngwù',pos:'Danh từ',vn:'việc công, công vụ, việc nhà nước',hv:'công vụ',em:'🏛️',lesson:1,
   explain:['Việc chung, việc của nhà nước, cơ quan, tập thể — đối lập với 私事 (việc riêng). 公 = công, chung; 务 = việc.','Hay gặp: 公务员 (công chức), 办理公务, 公务在身 (đang bận việc công), 因公务出差. Bài khoá: 这是公务，可不能开玩笑 — việc quân quốc, không phải chuyện đùa.'],
   usage:'这是公务; 办理 / 处理 + 公务; 因公务 + V (出差 / 出国); 公务员; 公务在身.',
   collo:['这是公务','处理公务','公务员','因公务出差'],
   ex_zh:'这是公务，可不能开玩笑。',ex_py:'Zhè shì gōngwù, kě bù néng kāi wánxiào.',ex_vn:'Đây là việc công, không được đùa đâu đấy.',
   exList:[
     {zh:'周瑜说：“这是公务，可不能开玩笑。”',py:'Zhōu Yú shuō: “Zhè shì gōngwù, kě bù néng kāi wánxiào.”',vn:'Chu Du nói: "Đây là việc công, không được đùa đâu đấy."'},
     {zh:'他因公务去了上海，下个星期才能回来。',py:'Tā yīn gōngwù qùle Shànghǎi, xià ge xīngqī cái néng huílai.',vn:'Anh ấy đi Thượng Hải vì việc công, tuần sau mới về được.'},
     {zh:'我姐姐大学毕业后考上了公务员，每天忙着处理各种公务。',py:'Wǒ jiějie dàxué bìyè hòu kǎoshangle gōngwùyuán, měi tiān mángzhe chǔlǐ gè zhǒng gōngwù.',vn:'Chị tôi tốt nghiệp đại học xong thì thi đỗ công chức, ngày nào cũng bận xử lý đủ loại việc công.'}
   ],
   colloFull:[
     {zh:'这是公务',py:'zhè shì gōngwù',vn:'đây là việc công'},
     {zh:'处理公务',py:'chǔlǐ gōngwù',vn:'xử lý việc công'},
     {zh:'公务员',py:'gōngwùyuán',vn:'công chức'},
     {zh:'因公务出差',py:'yīn gōngwù chūchāi',vn:'đi công tác vì việc công'},
     {zh:'公务在身',py:'gōngwù zài shēn',vn:'đang bận việc công'}
   ],
   patterns:[
     {s:'这是公务，可不能……',m:'Đây là việc công, không thể …'},
     {s:'因 + 公务 + V',m:'Vì việc công mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là việc công chứ không phải việc riêng của cậu, không thể muốn làm thế nào thì làm.',answer:'这是公务，而不是你的私事，不能想怎么做就怎么做。',answerPy:'Zhè shì gōngwù, ér bú shì nǐ de sīshì, bù néng xiǎng zěnme zuò jiù zěnme zuò.',
      note:'是……而不是……; đại từ nghi vấn phiếm chỉ 怎么……就怎么…… (ôn HSK 5).',pair:'怎么……就怎么……'},
     {promptLang:'vi',prompt:'Giám đốc Vương vì bận việc công nên không thể đến dự lễ cưới của chúng tôi.',answer:'王经理因为公务在身，没能来参加我们的婚礼。',answerPy:'Wáng jīnglǐ yīnwèi gōngwù zài shēn, méi néng lái cānjiā wǒmen de hūnlǐ.',
      note:'没能 + V = đã không thể (ôn HSK 4).',pair:'没能'}
   ]},

  {n:10,zh:'款待',py:'kuǎndài',pos:'Động từ',vn:'khoản đãi, thết đãi, tiếp đãi hậu hĩnh',hv:'khoản đãi',em:'🍽️',lesson:1,
   explain:['Tiếp đãi khách một cách nhiệt tình, chu đáo (thường có ăn uống): 款 = thành khẩn, 待 = đối đãi. Văn viết, trang trọng.','Hay gặp: 设宴款待 (mở tiệc khoản đãi), 热情款待, 盛情款待; 款待 + khách / người. Cảm ơn: 谢谢您的热情款待.'],
   usage:'(设宴 / 热情 / 盛情) + 款待 + 某人; 用……款待……; 谢谢……的款待.',
   collo:['设宴款待','热情款待','款待客人','盛情款待'],
   ex_zh:'周瑜很高兴，设宴款待诸葛亮。',ex_py:'Zhōu Yú hěn gāoxìng, shè yàn kuǎndài Zhūgě Liàng.',ex_vn:'Chu Du rất vui, mở tiệc khoản đãi Gia Cát Lượng.',
   exList:[
     {zh:'诸葛亮说“三天造不好箭，愿受惩罚”，周瑜很高兴，设宴款待诸葛亮。',py:'Zhūgě Liàng shuō “sān tiān zào bu hǎo jiàn, yuàn shòu chéngfá”, Zhōu Yú hěn gāoxìng, shè yàn kuǎndài Zhūgě Liàng.',vn:'Gia Cát Lượng nói "ba ngày không làm xong tên, xin chịu phạt", Chu Du rất vui, mở tiệc thết đãi Gia Cát Lượng.'},
     {zh:'见面寒暄以后，我做了一桌饭菜款待他。',py:'Jiàn miàn hánxuān yǐhòu, wǒ zuòle yì zhuō fàncài kuǎndài tā.',vn:'Gặp mặt hỏi han xong, tôi nấu một mâm cơm thết đãi anh ấy.'},
     {zh:'谢谢你们一家的热情款待，下次你们来越南，一定要到我家做客。',py:'Xièxie nǐmen yì jiā de rèqíng kuǎndài, xià cì nǐmen lái Yuènán, yídìng yào dào wǒ jiā zuò kè.',vn:'Cảm ơn cả nhà đã tiếp đãi nhiệt tình, lần sau mọi người sang Việt Nam nhất định phải đến nhà tôi chơi.'}
   ],
   colloFull:[
     {zh:'设宴款待',py:'shè yàn kuǎndài',vn:'mở tiệc khoản đãi'},
     {zh:'热情款待',py:'rèqíng kuǎndài',vn:'tiếp đãi nhiệt tình'},
     {zh:'款待客人',py:'kuǎndài kèrén',vn:'thết đãi khách'},
     {zh:'盛情款待',py:'shèngqíng kuǎndài',vn:'tiếp đãi hết sức nồng hậu'},
     {zh:'做了一桌饭菜款待他',py:'zuòle yì zhuō fàncài kuǎndài tā',vn:'nấu một mâm cơm thết đãi anh ấy'}
   ],
   patterns:[
     {s:'设宴 / 热情 + 款待 + 某人',m:'Mở tiệc / nhiệt tình thết đãi ai'},
     {s:'谢谢 + ……的（热情）款待',m:'Cảm ơn sự tiếp đãi (nhiệt tình) của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để thết đãi khách từ xa đến, bà nội đã bận rộn trong bếp cả buổi sáng.',answer:'为了款待远道而来的客人，奶奶在厨房里忙了一上午。',answerPy:'Wèile kuǎndài yuǎndào ér lái de kèrén, nǎinai zài chúfáng li mángle yí shàngwǔ.',
      note:'为了…… chỉ mục đích (ôn HSK 4); V + 了 + thời lượng.',pair:'为了'},
     {promptLang:'vi',prompt:'Chúng tôi không chỉ được tiếp đãi nhiệt tình, mà còn được tặng rất nhiều đặc sản.',answer:'我们不仅受到了热情款待，还收到了很多特产。',answerPy:'Wǒmen bùjǐn shòudàole rèqíng kuǎndài, hái shōudàole hěn duō tèchǎn.',
      note:'不仅……还…… tăng tiến; 受到 + 款待 / 欢迎 (ôn HSK 5).',pair:'不仅……还……'}
   ]},

  {n:11,zh:'叮嘱',py:'dīngzhǔ',pos:'Động từ',vn:'dặn dò, dặn đi dặn lại',hv:'đinh chúc',em:'🗣️',lesson:1,
   explain:['Dặn đi dặn lại nhiều lần cho người khác nhớ (thường là điều quan trọng, lời quan tâm): 叮 = dặn kỹ, 嘱 = dặn. Hay đi với 再三 / 反复 / 一再.','Cấu trúc: 叮嘱 + người + (要 / 别 / 一定) + V hoặc 叮嘱 + người + lời dặn trong ngoặc kép. Gần nghĩa 嘱咐 (từ 40 của bài).'],
   usage:'(再三 / 反复) + 叮嘱 + 某人 + ……; 临走时叮嘱……; 叮嘱 + 某人：“……”.',
   collo:['再三叮嘱','临走时叮嘱','反复叮嘱','妈妈的叮嘱'],
   ex_zh:'诸葛亮临走时叮嘱周瑜：“三天以后，请派人到江边来搬箭。”',ex_py:'Zhūgě Liàng lín zǒu shí dīngzhǔ Zhōu Yú: “Sān tiān yǐhòu, qǐng pài rén dào jiāngbiān lái bān jiàn.”',ex_vn:'Lúc sắp đi, Gia Cát Lượng dặn Chu Du: "Ba ngày sau, xin cho người ra bờ sông khuân tên."',
   exList:[
     {zh:'诸葛亮临走时叮嘱周瑜：“三天以后，请派人到江边来搬箭。”',py:'Zhūgě Liàng lín zǒu shí dīngzhǔ Zhōu Yú: “Sān tiān yǐhòu, qǐng pài rén dào jiāngbiān lái bān jiàn.”',vn:'Lúc sắp đi, Gia Cát Lượng dặn Chu Du: "Ba ngày sau, xin cho người ra bờ sông khuân tên."'},
     {zh:'临行前，妈妈再三叮嘱我：“出门一定要注意安全。”',py:'Línxíng qián, māma zàisān dīngzhǔ wǒ: “Chūmén yídìng yào zhùyì ānquán.”',vn:'Trước lúc lên đường, mẹ dặn đi dặn lại tôi: "Ra ngoài nhất định phải chú ý an toàn."'},
     {zh:'医生反复叮嘱他，出院以后一个月内不能做剧烈运动。',py:'Yīshēng fǎnfù dīngzhǔ tā, chūyuàn yǐhòu yí ge yuè nèi bù néng zuò jùliè yùndòng.',vn:'Bác sĩ dặn đi dặn lại anh ấy, sau khi xuất viện trong vòng một tháng không được vận động mạnh.'}
   ],
   colloFull:[
     {zh:'再三叮嘱',py:'zàisān dīngzhǔ',vn:'dặn đi dặn lại'},
     {zh:'临走时叮嘱',py:'lín zǒu shí dīngzhǔ',vn:'dặn lúc sắp đi'},
     {zh:'反复叮嘱',py:'fǎnfù dīngzhǔ',vn:'dặn dò nhiều lần'},
     {zh:'妈妈的叮嘱',py:'māma de dīngzhǔ',vn:'lời dặn của mẹ'},
     {zh:'叮嘱我注意安全',py:'dīngzhǔ wǒ zhùyì ānquán',vn:'dặn tôi chú ý an toàn'}
   ],
   patterns:[
     {s:'再三 / 反复 + 叮嘱 + 某人 + ……',m:'Dặn đi dặn lại ai điều gì'},
     {s:'临走时 / 临行前 + 叮嘱',m:'Dặn dò lúc sắp đi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi mãi mãi không quên được lời dặn của bà nội trước khi mất.',answer:'我永远也忘不了奶奶去世前的叮嘱。',answerPy:'Wǒ yǒngyuǎn yě wàng bu liǎo nǎinai qùshì qián de dīngzhǔ.',
      note:'Bổ ngữ khả năng V + 不了; 永远也…… (ôn HSK 4); 叮嘱 dùng như danh từ.',pair:'V不了'},
     {promptLang:'vi',prompt:'Thầy giáo dặn chúng tôi đi thi nhất định phải mang giấy báo dự thi, kẻo không được vào phòng thi.',answer:'老师叮嘱我们考试时一定要带准考证，以免进不了考场。',answerPy:'Lǎoshī dīngzhǔ wǒmen kǎoshì shí yídìng yào dài zhǔnkǎozhèng, yǐmiǎn jìn bu liǎo kǎochǎng.',
      note:'以免 + điều không mong muốn (ôn HSK 6 bài 21).',pair:'以免'}
   ]},

  {n:12,zh:'算数',py:'suàn shù',pos:'Động từ (li hợp)',vn:'giữ lời, có giá trị, được tính (lời nói đã nói ra)',hv:'toán số',em:'🤞',lesson:1,
   explain:['Nghĩa trong bài: lời đã nói thì PHẢI THỰC HIỆN, có hiệu lực: 说话算数 = nói là giữ lời; 说话不算数 = nói không giữ lời, nuốt lời.','Cũng có nghĩa "được tính, được công nhận": 这次考试不算数 (lần thi này không tính). Là từ li hợp nhưng thường dùng nguyên khối: 说话算数, 说了算数.'],
   usage:'(说话 / 说的话) + 算数 / 不算数; 说了算数; ……算不算数?',
   collo:['说话算数','说话不算数','说了算数','不算数'],
   ex_zh:'诸葛亮不会说话不算数吧？',ex_py:'Zhūgě Liàng bú huì shuōhuà bú suàn shù ba?',ex_vn:'Gia Cát Lượng sẽ không nói mà không giữ lời chứ?',
   exList:[
     {zh:'鲁肃对周瑜说：“十万支箭，三天怎么造得成？诸葛亮不会说话不算数吧？”',py:'Lǔ Sù duì Zhōu Yú shuō: “Shíwàn zhī jiàn, sān tiān zěnme zào de chéng? Zhūgě Liàng bú huì shuōhuà bú suàn shù ba?”',vn:'Lỗ Túc nói với Chu Du: "Mười vạn mũi tên, ba ngày làm sao làm nổi? Gia Cát Lượng không nuốt lời đấy chứ?"'},
     {zh:'爸爸说话一向算数，答应带我去海边，就一定会带我去。',py:'Bàba shuōhuà yíxiàng suàn shù, dāying dài wǒ qù hǎibiān, jiù yídìng huì dài wǒ qù.',vn:'Bố tôi xưa nay nói là giữ lời, đã hứa đưa tôi ra biển thì nhất định sẽ đưa đi.'},
     {zh:'刚才那一局是练习，不算数，我们重新比吧。',py:'Gāngcái nà yì jú shì liànxí, bú suàn shù, wǒmen chóngxīn bǐ ba.',vn:'Ván vừa rồi là tập thôi, không tính, chúng ta đấu lại nhé.'}
   ],
   colloFull:[
     {zh:'说话算数',py:'shuōhuà suàn shù',vn:'nói là giữ lời'},
     {zh:'说话不算数',py:'shuōhuà bú suàn shù',vn:'nói không giữ lời, nuốt lời'},
     {zh:'说了算数',py:'shuōle suàn shù',vn:'đã nói là tính'},
     {zh:'不算数',py:'bú suàn shù',vn:'không tính, không có giá trị'},
     {zh:'这话算不算数',py:'zhè huà suàn bu suàn shù',vn:'lời này có giữ không'}
   ],
   patterns:[
     {s:'（某人）说话 + 算数 / 不算数',m:'Ai đó nói là giữ lời / không giữ lời'},
     {s:'……不算数',m:'… không được tính, không có giá trị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã hứa với trẻ con thì phải giữ lời, nếu không chúng sẽ không tin cậu nữa.',answer:'答应孩子的事就要说话算数，否则他们就不再相信你了。',answerPy:'Dāying háizi de shì jiù yào shuōhuà suàn shù, fǒuzé tāmen jiù bú zài xiāngxìn nǐ le.',
      note:'否则 = nếu không thì (ôn HSK 5); 不再……了 = không còn … nữa.',pair:'否则'},
     {promptLang:'vi',prompt:'Anh ấy hay nuốt lời như vậy, sao cậu lại vẫn tin anh ấy?',answer:'他总是说话不算数，你怎么还相信他呢？',answerPy:'Tā zǒngshì shuōhuà bú suàn shù, nǐ zěnme hái xiāngxìn tā ne?',
      note:'Câu hỏi 怎么还……呢 tỏ ý ngạc nhiên, trách (ôn HSK 4).',pair:'怎么还……呢'}
   ]},

  {n:13,zh:'逼迫',py:'bīpò',pos:'Động từ',vn:'ép buộc, bức ép',hv:'bức bách',em:'✋',lesson:1,
   explain:['Dùng áp lực, sức mạnh buộc người khác phải làm điều họ không muốn: 逼 = ép, 迫 = bức. Cấu trúc: 逼迫 + người + V (逼迫他答应).','Văn viết hơn 逼; bị động: 被逼迫 / 被……逼迫. Bài khoá: 我又没有逼迫他，是他自己说的 — 又 nhấn mạnh phủ định để thanh minh.'],
   usage:'逼迫 + 某人 + V; 被（某人）逼迫 + V; 没有逼迫……，是……自己…….',
   collo:['逼迫他','被逼迫','逼迫孩子学习','没有逼迫'],
   ex_zh:'我又没有逼迫他，是他自己说的。',ex_py:'Wǒ yòu méiyǒu bīpò tā, shì tā zìjǐ shuō de.',ex_vn:'Tôi có ép anh ta đâu, là anh ta tự nói đấy chứ.',
   exList:[
     {zh:'周瑜说：“我又没有逼迫他，是他自己说的。”',py:'Zhōu Yú shuō: “Wǒ yòu méiyǒu bīpò tā, shì tā zìjǐ shuō de.”',vn:'Chu Du nói: "Ta có ép hắn đâu, là hắn tự nói đấy chứ."'},
     {zh:'父母不应该逼迫孩子学他们不感兴趣的东西。',py:'Fùmǔ bù yīnggāi bīpò háizi xué tāmen bù gǎn xìngqù de dōngxi.',vn:'Cha mẹ không nên ép con học những thứ chúng không hứng thú.'},
     {zh:'他是被生活逼迫着，才不得不离开家乡去城里打工的。',py:'Tā shì bèi shēnghuó bīpòzhe, cái bùdébù líkāi jiāxiāng qù chéng li dǎgōng de.',vn:'Anh ấy vì bị cuộc sống bức bách mới buộc phải rời quê lên thành phố làm thuê.'}
   ],
   colloFull:[
     {zh:'逼迫他',py:'bīpò tā',vn:'ép anh ta'},
     {zh:'被逼迫',py:'bèi bīpò',vn:'bị ép buộc'},
     {zh:'逼迫孩子学习',py:'bīpò háizi xuéxí',vn:'ép con học'},
     {zh:'没有逼迫',py:'méiyǒu bīpò',vn:'không ép buộc'},
     {zh:'被生活逼迫',py:'bèi shēnghuó bīpò',vn:'bị cuộc sống bức bách'}
   ],
   patterns:[
     {s:'逼迫 + 某人 + V',m:'Ép ai làm gì'},
     {s:'我又没有逼迫……，是……自己……',m:'Tôi có ép đâu, là … tự … (thanh minh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai ép cậu cả, là chính cậu muốn tham gia cuộc thi này.',answer:'谁也没有逼迫你，是你自己要参加这个比赛的。',answerPy:'Shéi yě méiyǒu bīpò nǐ, shì nǐ zìjǐ yào cānjiā zhège bǐsài de.',
      note:'谁也没有…… phủ định toàn bộ (ôn HSK 4); 是……的 nhấn mạnh.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thay vì ép con học đàn, chi bằng để con tự chọn sở thích của mình.',answer:'与其逼迫孩子学钢琴，不如让他自己选择爱好。',answerPy:'Yǔqí bīpò háizi xué gāngqín, bùrú ràng tā zìjǐ xuǎnzé àihào.',
      note:'与其……不如…… (ôn HSK 5) — so sánh lựa chọn.',pair:'与其……不如……'}
   ]},

  {n:14,zh:'吩咐',py:'fēnfù',pos:'Động từ',vn:'căn dặn, sai bảo, dặn (người dưới làm việc)',hv:'phân phó',em:'👉',lesson:1,
   explain:['Người trên bảo, dặn người dưới làm việc (mang tính ra lệnh nhẹ): 吩咐 + người + V. Cũng dùng như danh từ: 听您的吩咐 (nghe theo lời ngài sai bảo).','Trong khẩu ngữ đọc fēnfu. Phân biệt: 吩咐 thiên về SAI BẢO làm việc; 叮嘱 / 嘱咐 thiên về DẶN DÒ cho nhớ, có ý quan tâm.'],
   usage:'吩咐 + 某人 + V; 吩咐 + 下属 / 手下; 按照 / 听 + ……的吩咐; 有什么吩咐?',
   collo:['吩咐下属','按照吩咐','有什么吩咐','吩咐用绳索'],
   ex_zh:'我得吩咐下属，造箭用的材料，不要给他准备齐全。',ex_py:'Wǒ děi fēnfù xiàshǔ, zào jiàn yòng de cáiliào, búyào gěi tā zhǔnbèi qíquán.',ex_vn:'Ta phải dặn cấp dưới, vật liệu làm tên không được chuẩn bị đầy đủ cho hắn.',
   exList:[
     {zh:'我得吩咐下属，造箭用的材料，不要给他准备齐全。',py:'Wǒ děi fēnfù xiàshǔ, zào jiàn yòng de cáiliào, búyào gěi tā zhǔnbèi qíquán.',vn:'Ta phải dặn cấp dưới, vật liệu làm tên không được chuẩn bị đầy đủ cho hắn.'},
     {zh:'之后诸葛亮吩咐用绳索把船连在一起，朝曹操占领的北岸开去。',py:'Zhīhòu Zhūgě Liàng fēnfù yòng shéngsuǒ bǎ chuán lián zài yìqǐ, cháo Cáo Cāo zhànlǐng de běi\'àn kāiqu.',vn:'Sau đó Gia Cát Lượng sai dùng dây thừng nối các thuyền lại với nhau, tiến về bờ bắc do Tào Tháo chiếm giữ.'},
     {zh:'经理，您还有什么吩咐？我马上去办。',py:'Jīnglǐ, nín hái yǒu shénme fēnfù? Wǒ mǎshàng qù bàn.',vn:'Thưa giám đốc, ngài còn dặn gì nữa không ạ? Tôi đi làm ngay.'}
   ],
   colloFull:[
     {zh:'吩咐下属',py:'fēnfù xiàshǔ',vn:'sai bảo cấp dưới'},
     {zh:'按照吩咐',py:'ànzhào fēnfù',vn:'theo lời dặn'},
     {zh:'有什么吩咐',py:'yǒu shénme fēnfù',vn:'có gì sai bảo'},
     {zh:'吩咐用绳索',py:'fēnfù yòng shéngsuǒ',vn:'sai dùng dây thừng'},
     {zh:'听您的吩咐',py:'tīng nín de fēnfù',vn:'nghe theo lời ngài dặn'}
   ],
   patterns:[
     {s:'吩咐 + 某人 + V',m:'Sai bảo ai làm gì'},
     {s:'按照 / 听 + ……的吩咐',m:'Làm theo lời sai bảo của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo lời dặn của giám đốc, chúng tôi đã chuẩn bị xong tài liệu từ trước.',answer:'按照经理的吩咐，我们提前把材料准备好了。',answerPy:'Ànzhào jīnglǐ de fēnfù, wǒmen tíqián bǎ cáiliào zhǔnbèi hǎo le.',
      note:'按照…… (ôn HSK 4); câu 把 + V + 好.',pair:'按照'},
     {promptLang:'vi',prompt:'Ông chủ vừa sai bảo xong, mọi người liền bận rộn hẳn lên.',answer:'老板刚吩咐完，大家就忙了起来。',answerPy:'Lǎobǎn gāng fēnfù wán, dàjiā jiù mángle qǐlai.',
      note:'刚……就…… (vừa … liền …); V + 起来 bắt đầu (ôn HSK 4).',pair:'刚……就……'}
   ]},

  {n:15,zh:'下属',py:'xiàshǔ',pos:'Danh từ',vn:'cấp dưới, thuộc hạ',hv:'hạ thuộc',em:'👥',lesson:1,
   explain:['Người hoặc đơn vị ở cấp thấp hơn, chịu sự quản lý: 下 = dưới, 属 = thuộc. Đối lập: 上级 / 领导 (cấp trên).','Dùng cho quan hệ công việc, quân đội, cơ quan: 吩咐下属, 关心下属, 下属单位. Bài khoá: 吩咐下属 / 嘱咐下属.'],
   usage:'吩咐 / 嘱咐 / 批评 / 关心 + 下属; ……的下属; 下属 + 单位 / 部门.',
   collo:['吩咐下属','关心下属','下属单位','他的下属'],
   ex_zh:'曹操嘱咐下属：“江上大雾茫茫，我们弄不清情况，不要轻易出兵。”',ex_py:'Cáo Cāo zhǔfù xiàshǔ: “Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.”',ex_vn:'Tào Tháo dặn thuộc hạ: "Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân."',
   exList:[
     {zh:'曹操嘱咐下属：“江上大雾茫茫，我们弄不清情况，不要轻易出兵。”',py:'Cáo Cāo zhǔfù xiàshǔ: “Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.”',vn:'Tào Tháo dặn thuộc hạ: "Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân."'},
     {zh:'好的领导不但要求严格，而且懂得关心下属。',py:'Hǎo de lǐngdǎo búdàn yāoqiú yángé, érqiě dǒngde guānxīn xiàshǔ.',vn:'Người lãnh đạo tốt không những yêu cầu nghiêm khắc mà còn biết quan tâm cấp dưới.'},
     {zh:'他在公司是我的上级，在家里却是我的弟弟，这让他的下属都觉得很有意思。',py:'Tā zài gōngsī shì wǒ de shàngjí, zài jiāli què shì wǒ de dìdi, zhè ràng tā de xiàshǔ dōu juéde hěn yǒu yìsi.',vn:'Ở công ty anh ấy là cấp trên của tôi, ở nhà lại là em trai tôi, điều này khiến cấp dưới của anh ấy thấy rất thú vị.'}
   ],
   colloFull:[
     {zh:'吩咐下属',py:'fēnfù xiàshǔ',vn:'sai bảo cấp dưới'},
     {zh:'关心下属',py:'guānxīn xiàshǔ',vn:'quan tâm cấp dưới'},
     {zh:'下属单位',py:'xiàshǔ dānwèi',vn:'đơn vị trực thuộc'},
     {zh:'他的下属',py:'tā de xiàshǔ',vn:'cấp dưới của anh ấy'},
     {zh:'嘱咐下属',py:'zhǔfù xiàshǔ',vn:'dặn dò thuộc hạ'}
   ],
   patterns:[
     {s:'吩咐 / 嘱咐 + 下属 + ……',m:'Sai bảo / dặn cấp dưới …'},
     {s:'上级 ↔ 下属',m:'Cấp trên ↔ cấp dưới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đối xử với cấp dưới rất khách khí, chưa bao giờ nổi nóng với họ.',answer:'他对下属很客气，从来没对他们发过脾气。',answerPy:'Tā duì xiàshǔ hěn kèqi, cónglái méi duì tāmen fāguo píqi.',
      note:'对 + người + Adj; 从来没 + V过 (ôn HSK 4).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cấp dưới làm sai việc thì người làm lãnh đạo cũng phải chịu trách nhiệm.',answer:'下属做错了事，当领导的也要负责任。',answerPy:'Xiàshǔ zuòcuòle shì, dāng lǐngdǎo de yě yào fù zérèn.',
      note:'当 + chức vụ + 的 = người làm …; 负责任 (ôn HSK 4).',pair:'负责任'}
   ]},

  {n:16,zh:'充足',py:'chōngzú',pos:'Tính từ',vn:'đầy đủ, dồi dào (số lượng đủ đáp ứng nhu cầu)',hv:'sung túc',em:'💧',lesson:1,
   explain:['Nhiều đến mức hoàn toàn đủ dùng: 充 = đầy, 足 = đủ. Chủ ngữ thường là thứ đếm được về lượng: 时间 / 资金 / 经费 / 阳光 / 雨水 / 睡眠 / 理由 + 充足.','Khác 充分 (đầy đủ về mức độ, thường cho trừu tượng: 充分理解, 充分准备) và 充满 (tràn đầy, động từ). Bẫy Hán–Việt: "sung túc" tiếng Việt chỉ đời sống no đủ; 充足 chỉ lượng dồi dào.'],
   usage:'(时间 / 阳光 / 经费 / 睡眠) + 充足; 供应充足; 充足的 + 理由 / 准备 / 水分.',
   collo:['供应充足','阳光充足','经费充足','充足的睡眠'],
   ex_zh:'造箭用的材料，不要给他准备齐全，也不能供应充足。',ex_py:'Zào jiàn yòng de cáiliào, búyào gěi tā zhǔnbèi qíquán, yě bù néng gōngyìng chōngzú.',ex_vn:'Vật liệu làm tên không được chuẩn bị đầy đủ cho hắn, cũng không được cung cấp dồi dào.',
   exList:[
     {zh:'造箭用的材料，不要给他准备齐全，也不能供应充足。',py:'Zào jiàn yòng de cáiliào, búyào gěi tā zhǔnbèi qíquán, yě bù néng gōngyìng chōngzú.',vn:'Vật liệu làm tên không được chuẩn bị đầy đủ cho hắn, cũng không được cung cấp dồi dào.'},
     {zh:'我们的科研经费充足，请大家不要为此担心。',py:'Wǒmen de kēyán jīngfèi chōngzú, qǐng dàjiā búyào wèi cǐ dānxīn.',vn:'Kinh phí nghiên cứu của chúng ta dồi dào, xin mọi người đừng lo về chuyện này.'},
     {zh:'考试前一天晚上一定要保证充足的睡眠，别熬夜。',py:'Kǎoshì qián yì tiān wǎnshang yídìng yào bǎozhèng chōngzú de shuìmián, bié áoyè.',vn:'Tối hôm trước ngày thi nhất định phải đảm bảo ngủ đủ giấc, đừng thức khuya.'}
   ],
   colloFull:[
     {zh:'供应充足',py:'gōngyìng chōngzú',vn:'cung cấp dồi dào'},
     {zh:'阳光充足',py:'yángguāng chōngzú',vn:'nắng đầy đủ, nhiều nắng'},
     {zh:'经费充足',py:'jīngfèi chōngzú',vn:'kinh phí dồi dào'},
     {zh:'充足的睡眠',py:'chōngzú de shuìmián',vn:'giấc ngủ đầy đủ'},
     {zh:'理由充足',py:'lǐyóu chōngzú',vn:'lý do xác đáng, đầy đủ'}
   ],
   patterns:[
     {s:'N (时间 / 经费 / 阳光) + 充足',m:'… dồi dào, đầy đủ'},
     {s:'保证 + 充足的 + N',m:'Đảm bảo … đầy đủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng này hướng nam, ánh nắng dồi dào, rất hợp để trồng hoa.',answer:'这个房间朝南，阳光充足，非常适合养花。',answerPy:'Zhège fángjiān cháo nán, yángguāng chōngzú, fēicháng shìhé yǎng huā.',
      note:'朝 + hướng; 适合 + V (ôn HSK 4).',pair:'适合'},
     {promptLang:'vi',prompt:'Chỉ cần thời gian đầy đủ, tôi tin là chúng ta hoàn toàn có thể làm xong.',answer:'只要时间充足，我相信我们完全能做完。',answerPy:'Zhǐyào shíjiān chōngzú, wǒ xiāngxìn wǒmen wánquán néng zuòwán.',
      note:'只要……(就)…… điều kiện đủ (ôn HSK 4).',pair:'只要……就……'}
   ]},

  {n:17,zh:'拖延',py:'tuōyán',pos:'Động từ',vn:'kéo dài, trì hoãn, dây dưa',hv:'tha diên',em:'🐌',lesson:1,
   explain:['Kéo dài thời gian, không làm ngay hoặc không kết thúc đúng hạn: 拖 = kéo, 延 = kéo dài. Tân ngữ thường là 时间 / 工期 / 交货; cũng làm vị ngữ độc lập: 不能拖延.','Nghĩa xấu (cố tình trì hoãn): 故意拖延时间; 拖延症 = bệnh trì hoãn. Phân biệt 延长 (kéo dài, trung tính: 延长假期).'],
   usage:'拖延 + 时间 / 工期; 故意拖延; 不能 / 不要 + 拖延; 一拖再拖.',
   collo:['拖延时间','故意拖延','不能拖延','拖延症'],
   ex_zh:'故意给他拖延时间。',ex_py:'Gùyì gěi tā tuōyán shíjiān.',ex_vn:'Cố tình làm chậm trễ thời gian của hắn.',
   exList:[
     {zh:'造箭用的材料……也不能供应充足，故意给他拖延时间。',py:'Zào jiàn yòng de cáiliào…… yě bù néng gōngyìng chōngzú, gùyì gěi tā tuōyán shíjiān.',vn:'Vật liệu làm tên … cũng không được cung cấp đủ, cố tình kéo dài thời gian của hắn.'},
     {zh:'这批货期限一周，不能拖延，到期交不了货，就要受罚。',py:'Zhè pī huò qīxiàn yì zhōu, bù néng tuōyán, dàoqī jiāo bu liǎo huò, jiù yào shòu fá.',vn:'Lô hàng này thời hạn một tuần, không được chậm trễ, đến hạn không giao được hàng thì sẽ bị phạt.'},
     {zh:'作业越拖延越多，还不如现在就开始做。',py:'Zuòyè yuè tuōyán yuè duō, hái bùrú xiànzài jiù kāishǐ zuò.',vn:'Bài tập càng dây dưa càng nhiều, chẳng thà bắt đầu làm ngay bây giờ.'}
   ],
   colloFull:[
     {zh:'拖延时间',py:'tuōyán shíjiān',vn:'kéo dài thời gian'},
     {zh:'故意拖延',py:'gùyì tuōyán',vn:'cố tình trì hoãn'},
     {zh:'不能拖延',py:'bù néng tuōyán',vn:'không được chậm trễ'},
     {zh:'拖延症',py:'tuōyánzhèng',vn:'bệnh trì hoãn'},
     {zh:'一拖再拖',py:'yì tuō zài tuō',vn:'hết lần này đến lần khác trì hoãn'}
   ],
   patterns:[
     {s:'（故意）+ 拖延 + 时间',m:'(Cố tình) kéo dài thời gian'},
     {s:'……，不能拖延',m:'…, không được chậm trễ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này càng kéo dài càng khó giải quyết, chúng ta phải xử lý ngay.',answer:'这件事越拖延越难解决，我们必须马上处理。',answerPy:'Zhè jiàn shì yuè tuōyán yuè nán jiějué, wǒmen bìxū mǎshàng chǔlǐ.',
      note:'越……越…… (ôn HSK 4); 必须 + V.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Anh ta cố tình kéo dài thời gian, chẳng qua là muốn đợi giá tăng mà thôi.',answer:'他故意拖延时间，无非是想等价格上涨而已。',answerPy:'Tā gùyì tuōyán shíjiān, wúfēi shì xiǎng děng jiàgé shàngzhǎng éryǐ.',
      note:'无非……而已 = chẳng qua chỉ là (ôn HSK 6 bài 5).',pair:'无非……而已'}
   ]},

  {n:18,zh:'期限',py:'qīxiàn',pos:'Danh từ',vn:'kỳ hạn, thời hạn (cuối cùng)',hv:'kỳ hạn',em:'📅',lesson:1,
   explain:['Khoảng thời gian được quy định, hoặc mốc cuối cùng của khoảng thời gian đó: 期 = kỳ, 限 = giới hạn. 到期限 = đến hạn; 超过期限 = quá hạn.','Hay đi với 规定 / 延长 / 超过 / 到 + 期限; cũng làm vị ngữ kiểu 期限一周 (thời hạn một tuần).'],
   usage:'到期限; 规定的期限; 延长 / 超过 + 期限; 期限 + (是) + thời lượng; 在……期限内.',
   collo:['到期限','规定的期限','延长期限','期限一周'],
   ex_zh:'到期限造不出箭，他就活该受罚了。',ex_py:'Dào qīxiàn zào bu chū jiàn, tā jiù huógāi shòu fá le.',ex_vn:'Đến hạn mà không làm ra được tên, thì hắn đáng bị phạt.',
   exList:[
     {zh:'到期限造不出箭，他就活该受罚了。',py:'Dào qīxiàn zào bu chū jiàn, tā jiù huógāi shòu fá le.',vn:'Đến hạn mà không làm ra được tên, thì hắn đáng bị phạt.'},
     {zh:'图书馆的书借阅期限是一个月，超过期限要交罚款。',py:'Túshūguǎn de shū jièyuè qīxiàn shì yí ge yuè, chāoguò qīxiàn yào jiāo fákuǎn.',vn:'Thời hạn mượn sách thư viện là một tháng, quá hạn phải nộp tiền phạt.'},
     {zh:'老师同意把交论文的期限延长到下周五。',py:'Lǎoshī tóngyì bǎ jiāo lùnwén de qīxiàn yáncháng dào xià zhōuwǔ.',vn:'Thầy đồng ý gia hạn thời hạn nộp luận văn đến thứ Sáu tuần sau.'}
   ],
   colloFull:[
     {zh:'到期限',py:'dào qīxiàn',vn:'đến hạn'},
     {zh:'规定的期限',py:'guīdìng de qīxiàn',vn:'thời hạn quy định'},
     {zh:'延长期限',py:'yáncháng qīxiàn',vn:'gia hạn'},
     {zh:'期限一周',py:'qīxiàn yì zhōu',vn:'thời hạn một tuần'},
     {zh:'超过期限',py:'chāoguò qīxiàn',vn:'quá hạn'}
   ],
   patterns:[
     {s:'在规定的期限内 + V',m:'Làm … trong thời hạn quy định'},
     {s:'把期限 + 延长到……',m:'Gia hạn đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không thể hoàn thành trong thời hạn quy định, chúng ta phải báo trước cho khách hàng.',answer:'如果不能在规定的期限内完成，我们得提前告诉客户。',answerPy:'Rúguǒ bù néng zài guīdìng de qīxiàn nèi wánchéng, wǒmen děi tíqián gàosu kèhù.',
      note:'在……内 = trong vòng; 得 (děi) = phải (ôn HSK 4).',pair:'在……内'},
     {promptLang:'vi',prompt:'Hộ chiếu của tôi sắp hết hạn, phải đi làm lại gấp.',answer:'我的护照快到期限了，得赶紧去重新办。',answerPy:'Wǒ de hùzhào kuài dào qīxiàn le, děi gǎnjǐn qù chóngxīn bàn.',
      note:'快……了 = sắp; 赶紧 = mau chóng (ôn HSK 5).',pair:'快……了'}
   ]},

  {n:19,zh:'活该',py:'huógāi',pos:'Động từ',vn:'đáng, đáng đời (tự chuốc lấy, không đáng thương)',hv:'hoạt cai',em:'🙄',lesson:1,
   explain:['Khẩu ngữ: cho rằng ai đó chịu điều xấu là ĐÁNG, do tự mình gây ra, không đáng thương hại. Có thể đứng một mình như lời cảm thán (活该！) hoặc đứng trước động từ: 活该受罚.','Mang sắc thái chê trách, hả hê — nói với người thân thì dễ bị coi là vô duyên, cần cẩn thận. Bài khoá: 他就活该受罚了 — lời Chu Du lộ rõ ý đồ.'],
   usage:'活该 + V (受罚 / 挨骂 / 倒霉); ……，活该！; 真是活该.',
   collo:['活该受罚','活该挨骂','真是活该','活该倒霉'],
   ex_zh:'到期限造不出箭，他就活该受罚了。',ex_py:'Dào qīxiàn zào bu chū jiàn, tā jiù huógāi shòu fá le.',ex_vn:'Đến hạn mà không làm ra được tên, thì hắn đáng bị phạt.',
   exList:[
     {zh:'周瑜说：“到期限造不出箭，他就活该受罚了。”',py:'Zhōu Yú shuō: “Dào qīxiàn zào bu chū jiàn, tā jiù huógāi shòu fá le.”',vn:'Chu Du nói: "Đến hạn không làm ra được tên, thì hắn đáng bị phạt."'},
     {zh:'跟你说了多少遍要带伞，你偏偏不听，被雨淋了，活该！',py:'Gēn nǐ shuōle duōshao biàn yào dài sǎn, nǐ piānpiān bù tīng, bèi yǔ lín le, huógāi!',vn:'Đã bảo cậu bao nhiêu lần là mang ô, cậu cứ nhất quyết không nghe, bị mưa ướt, đáng đời!'},
     {zh:'他考试作弊被发现了，大家都说他活该挨批评。',py:'Tā kǎoshì zuòbì bèi fāxiàn le, dàjiā dōu shuō tā huógāi ái pīpíng.',vn:'Cậu ta gian lận trong thi cử bị phát hiện, ai cũng bảo cậu ta đáng bị phê bình.'}
   ],
   colloFull:[
     {zh:'活该受罚',py:'huógāi shòu fá',vn:'đáng bị phạt'},
     {zh:'活该挨骂',py:'huógāi ái mà',vn:'đáng bị mắng'},
     {zh:'真是活该',py:'zhēn shì huógāi',vn:'thật là đáng đời'},
     {zh:'活该倒霉',py:'huógāi dǎoméi',vn:'đáng bị xui xẻo'},
     {zh:'活该挨批评',py:'huógāi ái pīpíng',vn:'đáng bị phê bình'}
   ],
   patterns:[
     {s:'（某人）+ 活该 + V',m:'Ai đó đáng bị … (tự chuốc lấy)'},
     {s:'……，活该！',m:'…, đáng đời! (cảm thán)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai bảo cậu tối qua thức khuya chơi game, hôm nay đi muộn bị phạt là đáng lắm.',answer:'谁让你昨晚熬夜打游戏，今天迟到被罚，活该！',answerPy:'Shéi ràng nǐ zuówǎn áoyè dǎ yóuxì, jīntiān chídào bèi fá, huógāi!',
      note:'谁让……: câu phản vấn quy trách nhiệm (ôn HSK 5); 被罚 bị động.',pair:'谁让……'},
     {promptLang:'vi',prompt:'Tuy cậu ta sai thật, nhưng cậu cũng đừng nói "đáng đời" trước mặt cậu ta.',answer:'虽然他确实错了，但你也别当着他的面说“活该”。',answerPy:'Suīrán tā quèshí cuò le, dàn nǐ yě bié dāngzhe tā de miàn shuō “huógāi”.',
      note:'当着……的面 = trước mặt ai (ôn HSK 5).',pair:'当着……的面'}
   ]},

  {n:20,zh:'探听',py:'tàntīng',pos:'Động từ',vn:'thám thính, dò hỏi, dò la',hv:'thám thính',em:'🕵️',lesson:1,
   explain:['Tìm cách dò hỏi để biết tin tức, tình hình (thường là điều người khác không công khai): 探 = dò, 听 = nghe. Có thể lặp lại: 探听探听 (dò la thử xem).','Tân ngữ: 消息 / 情况 / 虚实 (thực hư) / 秘密. Trung tính hoặc hơi xấu (dò la bí mật). Từ đánh dấu * trong sách (từ vượt cấp).'],
   usage:'探听 + 消息 / 情况 / 虚实; 去探听探听; 探听到……; 向……探听…….',
   collo:['探听消息','探听探听','探听情况','探听虚实'],
   ex_zh:'你去探听探听，他是怎么打算的，回来向我汇报。',ex_py:'Nǐ qù tàntīng tàntīng, tā shì zěnme dǎsuan de, huílai xiàng wǒ huìbào.',ex_vn:'Ông đi dò la xem hắn tính toán thế nào, về báo lại cho ta.',
   exList:[
     {zh:'你去探听探听，他是怎么打算的，回来向我汇报。',py:'Nǐ qù tàntīng tàntīng, tā shì zěnme dǎsuan de, huílai xiàng wǒ huìbào.',vn:'Ông đi dò la xem hắn tính toán thế nào, về báo lại cho ta.'},
     {zh:'他四处探听那家公司的消息，想知道自己有没有被录取。',py:'Tā sìchù tàntīng nà jiā gōngsī de xiāoxi, xiǎng zhīdào zìjǐ yǒu méiyǒu bèi lùqǔ.',vn:'Anh ấy khắp nơi dò hỏi tin tức về công ty đó, muốn biết mình có được tuyển không.'},
     {zh:'别人的隐私，我们不应该随便去探听。',py:'Biérén de yǐnsī, wǒmen bù yīnggāi suíbiàn qù tàntīng.',vn:'Chuyện riêng tư của người khác, chúng ta không nên tuỳ tiện dò la.'}
   ],
   colloFull:[
     {zh:'探听消息',py:'tàntīng xiāoxi',vn:'dò la tin tức'},
     {zh:'探听探听',py:'tàntīng tàntīng',vn:'dò la thử xem'},
     {zh:'探听情况',py:'tàntīng qíngkuàng',vn:'thám thính tình hình'},
     {zh:'探听虚实',py:'tàntīng xūshí',vn:'dò xét thực hư'},
     {zh:'四处探听',py:'sìchù tàntīng',vn:'dò hỏi khắp nơi'}
   ],
   patterns:[
     {s:'去 + 探听探听 + ……',m:'Đi dò la thử xem …'},
     {s:'探听 + 消息 / 情况 / 虚实',m:'Dò la tin tức / tình hình / thực hư'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu đi dò hỏi xem kỳ thi năm nay rốt cuộc thi những gì.',answer:'你去探听探听，今年的考试究竟考些什么。',answerPy:'Nǐ qù tàntīng tàntīng, jīnnián de kǎoshì jiūjìng kǎo xiē shénme.',
      note:'Động từ lặp lại 探听探听 (thử làm); 究竟 = rốt cuộc (ôn HSK 4).',pair:'究竟'},
     {promptLang:'vi',prompt:'Dò la mãi nửa ngày, cuối cùng cậu ấy cũng biết được nhà cô giáo ở đâu.',answer:'探听了半天，他终于知道了老师家住在哪儿。',answerPy:'Tàntīngle bàntiān, tā zhōngyú zhīdàole lǎoshī jiā zhù zài nǎr.',
      note:'V + 了 + 半天 (thời lượng); 终于 = cuối cùng (ôn HSK 4).',pair:'终于'}
   ]},

  {n:21,zh:'汇报',py:'huìbào',pos:'Động từ',vn:'báo cáo (với cấp trên, tập thể)',hv:'hối báo',em:'📊',lesson:1,
   explain:['Tổng hợp tình hình rồi báo cáo lên cấp trên hoặc trước tập thể: 汇 = gom lại, 报 = báo. Cấu trúc: 向 + người + 汇报 (+ 情况 / 工作).','Cũng là danh từ: 工作汇报, 做汇报. Gần 报告 (từ bài khoá: 回来报告周瑜); 汇报 nhấn tổng hợp và thường là người dưới với người trên.'],
   usage:'向 + 某人 + 汇报 (+ 情况 / 工作 / 结果); 汇报工作; 做 + 汇报; 回来向我汇报.',
   collo:['向我汇报','汇报工作','汇报情况','工作汇报'],
   ex_zh:'你去探听探听，他是怎么打算的，回来向我汇报。',ex_py:'Nǐ qù tàntīng tàntīng, tā shì zěnme dǎsuan de, huílai xiàng wǒ huìbào.',ex_vn:'Ông đi dò la xem hắn tính toán thế nào, về báo lại cho ta.',
   exList:[
     {zh:'周瑜吩咐鲁肃：“你去探听探听，他是怎么打算的，回来向我汇报。”',py:'Zhōu Yú fēnfù Lǔ Sù: “Nǐ qù tàntīng tàntīng, tā shì zěnme dǎsuan de, huílai xiàng wǒ huìbào.”',vn:'Chu Du sai Lỗ Túc: "Ông đi dò la xem hắn tính thế nào, về báo lại cho ta."'},
     {zh:'每周一上午，各部门经理都要向总经理汇报工作。',py:'Měi zhōuyī shàngwǔ, gè bùmén jīnglǐ dōu yào xiàng zǒngjīnglǐ huìbào gōngzuò.',vn:'Sáng thứ Hai hằng tuần, giám đốc các bộ phận đều phải báo cáo công việc với tổng giám đốc.'},
     {zh:'调查结束以后，我们小组在课上向全班同学做了汇报。',py:'Diàochá jiéshù yǐhòu, wǒmen xiǎozǔ zài kè shang xiàng quán bān tóngxué zuòle huìbào.',vn:'Sau khi kết thúc khảo sát, nhóm chúng tôi đã báo cáo trước cả lớp trong giờ học.'}
   ],
   colloFull:[
     {zh:'向我汇报',py:'xiàng wǒ huìbào',vn:'báo cáo với tôi'},
     {zh:'汇报工作',py:'huìbào gōngzuò',vn:'báo cáo công việc'},
     {zh:'汇报情况',py:'huìbào qíngkuàng',vn:'báo cáo tình hình'},
     {zh:'工作汇报',py:'gōngzuò huìbào',vn:'bản báo cáo công việc'},
     {zh:'做汇报',py:'zuò huìbào',vn:'làm báo cáo, trình bày báo cáo'}
   ],
   patterns:[
     {s:'向 + 某人 + 汇报 + ……',m:'Báo cáo … với ai'},
     {s:'（在……上）+ 做汇报',m:'Trình bày báo cáo (tại …)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có tình hình gì thì cậu phải kịp thời báo cáo với tôi, đừng tự mình quyết định.',answer:'有什么情况你要及时向我汇报，别自己做决定。',answerPy:'Yǒu shénme qíngkuàng nǐ yào jíshí xiàng wǒ huìbào, bié zìjǐ zuò juédìng.',
      note:'Đại từ phiếm chỉ 有什么……; 及时 = kịp thời (ôn HSK 4).',pair:'及时'},
     {promptLang:'vi',prompt:'Sau khi về nước, anh ấy lập tức báo cáo kết quả chuyến khảo sát với lãnh đạo.',answer:'回国以后，他立即向领导汇报了这次考察的结果。',answerPy:'Huí guó yǐhòu, tā lìjí xiàng lǐngdǎo huìbàole zhè cì kǎochá de jiéguǒ.',
      note:'立即 = lập tức (văn viết, ôn HSK 5); 向……汇报.',pair:'立即'}
   ]},

  {n:22,zh:'探望',py:'tànwàng',pos:'Động từ',vn:'thăm, thăm hỏi (thăm người)',hv:'thám vọng',em:'💐',lesson:1,
   explain:['Đến thăm, hỏi han người khác (thường là người ốm, người già, người ở xa): 探望病人, 探望老师. Trang trọng hơn 看望 / 看.','Nghĩa khác (ít dùng): nhìn quanh để tìm (四处探望). Bài khoá: 鲁肃去探望诸葛亮 — thực ra là đi dò la, nhưng danh nghĩa là "đến thăm".'],
   usage:'探望 + 病人 / 老人 / 老师 / 朋友; 去 / 来 + 探望 + 某人; 回家探望父母.',
   collo:['探望诸葛亮','探望病人','回家探望父母','去医院探望'],
   ex_zh:'鲁肃去探望诸葛亮，见面寒暄过后，诸葛亮说……',ex_py:'Lǔ Sù qù tànwàng Zhūgě Liàng, jiàn miàn hánxuān guòhòu, Zhūgě Liàng shuō……',ex_vn:'Lỗ Túc đến thăm Gia Cát Lượng, gặp mặt chào hỏi xong, Gia Cát Lượng nói …',
   exList:[
     {zh:'鲁肃去探望诸葛亮，见面寒暄过后，诸葛亮说：“三天，要十万支箭，你得帮帮我。”',py:'Lǔ Sù qù tànwàng Zhūgě Liàng, jiàn miàn hánxuān guòhòu, Zhūgě Liàng shuō: “Sān tiān, yào shíwàn zhī jiàn, nǐ děi bāngbang wǒ.”',vn:'Lỗ Túc đến thăm Gia Cát Lượng, gặp mặt hàn huyên xong, Gia Cát Lượng nói: "Ba ngày mà cần mười vạn mũi tên, ông phải giúp tôi."'},
     {zh:'听说班主任住院了，我们几个同学买了一束花去医院探望她。',py:'Tīngshuō bānzhǔrèn zhùyuàn le, wǒmen jǐ ge tóngxué mǎile yí shù huā qù yīyuàn tànwàng tā.',vn:'Nghe nói cô chủ nhiệm nằm viện, mấy đứa chúng tôi mua một bó hoa đến bệnh viện thăm cô.'},
     {zh:'他在外地工作，每年春节都一定要回家探望父母。',py:'Tā zài wàidì gōngzuò, měi nián Chūnjié dōu yídìng yào huí jiā tànwàng fùmǔ.',vn:'Anh ấy làm việc ở tỉnh khác, Tết năm nào cũng nhất định về nhà thăm bố mẹ.'}
   ],
   colloFull:[
     {zh:'探望诸葛亮',py:'tànwàng Zhūgě Liàng',vn:'đến thăm Gia Cát Lượng'},
     {zh:'探望病人',py:'tànwàng bìngrén',vn:'thăm người bệnh'},
     {zh:'回家探望父母',py:'huí jiā tànwàng fùmǔ',vn:'về nhà thăm bố mẹ'},
     {zh:'去医院探望',py:'qù yīyuàn tànwàng',vn:'vào viện thăm'},
     {zh:'探望老师',py:'tànwàng lǎoshī',vn:'thăm thầy cô'}
   ],
   patterns:[
     {s:'去 / 来 + (地方) + 探望 + 某人',m:'Đến (đâu) thăm ai'},
     {s:'探望 + 病人 / 父母 / 老人',m:'Thăm người bệnh / bố mẹ / người già'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi ốm đã lâu, họ hàng bạn bè lần lượt đến thăm ông.',answer:'爷爷病了很久，亲戚朋友们陆续来探望他。',answerPy:'Yéye bìngle hěn jiǔ, qīnqi péngyoumen lùxù lái tànwàng tā.',
      note:'陆续 = lần lượt (ôn HSK 5); 来 + V (mục đích).',pair:'陆续'},
     {promptLang:'vi',prompt:'Bận đến mấy, tháng nào cô ấy cũng dành thời gian về quê thăm bà ngoại.',answer:'不管多忙，她每个月都抽时间回老家探望外婆。',answerPy:'Bùguǎn duō máng, tā měi ge yuè dōu chōu shíjiān huí lǎojiā tànwàng wàipó.',
      note:'不管……都…… (ôn HSK 4); 抽时间 = dành thời gian.',pair:'不管……都……'}
   ]},

  {n:23,zh:'寒暄',py:'hánxuān',pos:'Động từ',vn:'hàn huyên, chào hỏi xã giao',hv:'hàn huyên',em:'👋',lesson:1,
   explain:['Gặp mặt hỏi han chuyện thời tiết, sức khoẻ… cho có lễ, trước khi vào chuyện chính: 寒 = lạnh, 暄 = ấm → hỏi "nóng lạnh". Là động từ nội động, không mang tân ngữ.','Hay gặp: 见面寒暄 / 寒暄过后 / 寒暄几句 / 互相寒暄. Lưu ý: tiếng Việt "hàn huyên" thường là trò chuyện tâm tình lâu; 寒暄 tiếng Trung chỉ là chào hỏi XÃ GIAO vài câu.'],
   usage:'(见面) + 寒暄 + (几句 / 一番); 寒暄过后 / 以后 + vào chuyện chính; 跟 / 和 + 某人 + 寒暄.',
   collo:['见面寒暄','寒暄过后','寒暄几句','互相寒暄'],
   ex_zh:'鲁肃去探望诸葛亮，见面寒暄过后，诸葛亮说……',ex_py:'Lǔ Sù qù tànwàng Zhūgě Liàng, jiàn miàn hánxuān guòhòu, Zhūgě Liàng shuō……',ex_vn:'Lỗ Túc đến thăm Gia Cát Lượng, gặp mặt chào hỏi xong, Gia Cát Lượng nói …',
   exList:[
     {zh:'鲁肃去探望诸葛亮，见面寒暄过后，诸葛亮说：“三天，要十万支箭，你得帮帮我。”',py:'Lǔ Sù qù tànwàng Zhūgě Liàng, jiàn miàn hánxuān guòhòu, Zhūgě Liàng shuō: “Sān tiān, yào shíwàn zhī jiàn, nǐ děi bāngbang wǒ.”',vn:'Lỗ Túc đến thăm Gia Cát Lượng, gặp mặt chào hỏi xong, Gia Cát Lượng nói: "Ba ngày mà cần mười vạn mũi tên, ông phải giúp tôi."'},
     {zh:'一个好久没联系的亲戚昨天来拜访我，见面寒暄以后，我做了一桌饭菜款待他。',py:'Yí ge hǎojiǔ méi liánxì de qīnqi zuótiān lái bàifǎng wǒ, jiàn miàn hánxuān yǐhòu, wǒ zuòle yì zhuō fàncài kuǎndài tā.',vn:'Hôm qua một người họ hàng lâu không liên lạc đến thăm tôi, gặp mặt chào hỏi xong, tôi nấu một mâm cơm thết đãi anh ấy.'},
     {zh:'两人寒暄了几句，就开始谈合作的事了。',py:'Liǎng rén hánxuānle jǐ jù, jiù kāishǐ tán hézuò de shì le.',vn:'Hai người chào hỏi vài câu rồi bắt đầu bàn chuyện hợp tác.'}
   ],
   colloFull:[
     {zh:'见面寒暄',py:'jiàn miàn hánxuān',vn:'gặp mặt chào hỏi'},
     {zh:'寒暄过后',py:'hánxuān guòhòu',vn:'sau khi chào hỏi xong'},
     {zh:'寒暄几句',py:'hánxuān jǐ jù',vn:'chào hỏi vài câu'},
     {zh:'互相寒暄',py:'hùxiāng hánxuān',vn:'chào hỏi lẫn nhau'},
     {zh:'寒暄了一番',py:'hánxuānle yì fān',vn:'hàn huyên một hồi'}
   ],
   patterns:[
     {s:'见面寒暄过后 / 以后，……',m:'Gặp mặt chào hỏi xong thì … (vào chuyện chính)'},
     {s:'跟 + 某人 + 寒暄 + 几句',m:'Chào hỏi ai vài câu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chào hỏi vài câu xong, anh ấy liền nói rõ mục đích đến thăm.',answer:'寒暄了几句以后，他就说明了来访的目的。',answerPy:'Hánxuānle jǐ jù yǐhòu, tā jiù shuōmíngle láifǎng de mùdì.',
      note:'……以后，……就…… nối tiếp hành động (ôn HSK 4).',pair:'……以后，就……'},
     {promptLang:'vi',prompt:'Tuy chỉ là chào hỏi xã giao, nhưng bà ấy vẫn khiến tôi cảm thấy rất ấm áp.',answer:'虽然只是简单的寒暄，但她还是让我觉得很温暖。',answerPy:'Suīrán zhǐ shì jiǎndān de hánxuān, dàn tā háishi ràng wǒ juéde hěn wēnnuǎn.',
      note:'虽然……但……还是……; 寒暄 dùng như danh từ.',pair:'虽然……但……'}
   ]},

  {n:24,zh:'为难',py:'wéinán',pos:'Động từ / Tính từ',vn:'làm khó, gây khó dễ; khó xử',hv:'vi nan',em:'😣',lesson:1,
   explain:['Động từ: cố ý gây khó khăn cho người khác: 为难 + người (你不要为难我). Tính từ: cảm thấy khó xử, không biết làm sao: 让我很为难, 为难的样子.','为 đọc wéi (không phải wèi). Gần nghĩa 刁难 (cố tình làm khó, nghĩa xấu hơn — xuất hiện trong đề 写一写).'],
   usage:'为难 + 某人; 别 / 不要 + 为难 + 某人; 让 / 使 + 某人 + 很为难; 感到为难; 为难的事.',
   collo:['为难我','让我很为难','感到为难','不要为难'],
   ex_zh:'你不要为难我，我怎么帮得了你？',ex_py:'Nǐ búyào wéinán wǒ, wǒ zěnme bāng de liǎo nǐ?',ex_vn:'Ông đừng làm khó tôi, tôi làm sao giúp nổi ông?',
   exList:[
     {zh:'鲁肃说：“你不要为难我，我怎么帮得了你？”',py:'Lǔ Sù shuō: “Nǐ búyào wéinán wǒ, wǒ zěnme bāng de liǎo nǐ?”',vn:'Lỗ Túc nói: "Ông đừng làm khó tôi, tôi làm sao giúp nổi ông?"'},
     {zh:'最近经济不景气，公司不需要那么多人，这件事让我很为难。',py:'Zuìjìn jīngjì bù jǐngqì, gōngsī bù xūyào nàme duō rén, zhè jiàn shì ràng wǒ hěn wéinán.',vn:'Gần đây kinh tế khó khăn, công ty không cần nhiều người như vậy, việc này làm tôi rất khó xử.'},
     {zh:'看他一脸为难的样子，我就没再追问下去。',py:'Kàn tā yì liǎn wéinán de yàngzi, wǒ jiù méi zài zhuīwèn xiàqu.',vn:'Thấy vẻ mặt khó xử của anh ấy, tôi không hỏi dồn nữa.'}
   ],
   colloFull:[
     {zh:'为难我',py:'wéinán wǒ',vn:'làm khó tôi'},
     {zh:'让我很为难',py:'ràng wǒ hěn wéinán',vn:'khiến tôi rất khó xử'},
     {zh:'感到为难',py:'gǎndào wéinán',vn:'cảm thấy khó xử'},
     {zh:'不要为难',py:'búyào wéinán',vn:'đừng làm khó'},
     {zh:'为难的样子',py:'wéinán de yàngzi',vn:'vẻ khó xử'}
   ],
   patterns:[
     {s:'（别 / 不要）+ 为难 + 某人',m:'(Đừng) làm khó ai'},
     {s:'……让 + 某人 + 很为难',m:'… khiến ai rất khó xử'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một bên là bố, một bên là mẹ, giúp ai cũng khiến tôi khó xử.',answer:'一边是爸爸，一边是妈妈，帮谁都让我很为难。',answerPy:'Yìbiān shì bàba, yìbiān shì māma, bāng shéi dōu ràng wǒ hěn wéinán.',
      note:'Đại từ phiếm chỉ 谁……都…… (ôn HSK 5).',pair:'谁……都……'},
     {promptLang:'vi',prompt:'Nếu anh thật sự không muốn đi thì tôi cũng không làm khó anh.',answer:'如果你实在不想去，我也就不为难你了。',answerPy:'Rúguǒ nǐ shízài bù xiǎng qù, wǒ yě jiù bù wéinán nǐ le.',
      note:'实在 = thật sự (ôn HSK 4); 也就……了 nhượng bộ.',pair:'实在'}
   ]},

  {n:25,zh:'严密',py:'yánmì',pos:'Tính từ',vn:'kín, chặt chẽ, nghiêm mật (không có kẽ hở)',hv:'nghiêm mật',em:'🔒',lesson:1,
   explain:['Nghĩa 1 (cụ thể): kín mít, không có khe hở: 遮挡严密 (che chắn kín). Nghĩa 2 (trừu tượng): chặt chẽ, chu toàn, không sơ hở: 组织严密, 逻辑严密, 严密监视.','Có thể làm trạng ngữ: 严密地 + V (严密地监视, 严密封锁). Khác 严格 (nghiêm khắc về yêu cầu, quy định).'],
   usage:'遮挡 / 封锁 + 严密; 严密地 + 监视 / 防守; 组织 / 逻辑 / 结构 + 严密.',
   collo:['遮挡严密','严密监视','逻辑严密','组织严密'],
   ex_zh:'船用黑布遮挡严密，再把草捆成捆儿。',ex_py:'Chuán yòng hēi bù zhēdǎng yánmì, zài bǎ cǎo kǔnchéng kǔnr.',ex_vn:'Thuyền phải dùng vải đen che kín, rồi bó cỏ thành từng bó.',
   exList:[
     {zh:'你借给我二十条船，每条船上要三十名士兵。船用黑布遮挡严密。',py:'Nǐ jiègěi wǒ èrshí tiáo chuán, měi tiáo chuán shang yào sānshí míng shìbīng. Chuán yòng hēi bù zhēdǎng yánmì.',vn:'Ông cho tôi mượn hai mươi chiếc thuyền, mỗi thuyền cần ba mươi binh sĩ. Thuyền dùng vải đen che kín.'},
     {zh:'这篇论文逻辑严密，数据充足，得到了专家的好评。',py:'Zhè piān lùnwén luójí yánmì, shùjù chōngzú, dédàole zhuānjiā de hǎopíng.',vn:'Bài luận văn này lập luận chặt chẽ, số liệu đầy đủ, được chuyên gia đánh giá cao.'},
     {zh:'警察对这个地区进行了严密的监视。',py:'Jǐngchá duì zhège dìqū jìnxíngle yánmì de jiānshì.',vn:'Cảnh sát đã giám sát chặt chẽ khu vực này.'}
   ],
   colloFull:[
     {zh:'遮挡严密',py:'zhēdǎng yánmì',vn:'che chắn kín mít'},
     {zh:'严密监视',py:'yánmì jiānshì',vn:'giám sát chặt chẽ'},
     {zh:'逻辑严密',py:'luójí yánmì',vn:'lập luận chặt chẽ'},
     {zh:'组织严密',py:'zǔzhī yánmì',vn:'tổ chức chặt chẽ'},
     {zh:'严密的计划',py:'yánmì de jìhuà',vn:'kế hoạch chu toàn'}
   ],
   patterns:[
     {s:'V（遮挡 / 包 / 封）+ 得 + 很严密',m:'… kín mít'},
     {s:'严密地 / 严密的 + 监视 / 防守',m:'Giám sát / phòng thủ chặt chẽ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch của họ chặt chẽ đến thế, sao có thể thất bại được chứ?',answer:'他们的计划这么严密，怎么会失败呢？',answerPy:'Tāmen de jìhuà zhème yánmì, zěnme huì shībài ne?',
      note:'Câu phản vấn 怎么会……呢 = không thể nào (ôn HSK 5).',pair:'怎么会……呢'},
     {promptLang:'vi',prompt:'Cửa sổ đóng kín mít, một chút gió cũng không lọt vào.',answer:'窗户关得很严密，一点儿风都进不来。',answerPy:'Chuānghu guān de hěn yánmì, yìdiǎnr fēng dōu jìn bu lái.',
      note:'一点儿……都…… phủ định tuyệt đối; bổ ngữ khả năng 进不来 (ôn HSK 4).',pair:'一点儿……都……'}
   ]},

  {n:26,zh:'侧面',py:'cèmiàn',pos:'Danh từ',vn:'mặt bên, mặt hông; khía cạnh; (từ) phía bên (gián tiếp)',hv:'trắc diện',em:'↔️',lesson:1,
   explain:['Nghĩa cụ thể: phía bên, mặt bên của vật (không phải mặt trước hay sau): 船的侧面, 大楼的侧面. Đối lập 正面 (mặt chính).','Nghĩa trừu tượng: một khía cạnh; hoặc cách làm gián tiếp: 从侧面了解 (tìm hiểu gián tiếp), 反映了社会生活的一个侧面.'],
   usage:'……的侧面; 排在 / 挂在 + ……的侧面; 从侧面 + 了解 / 打听; 一个侧面.',
   collo:['船的侧面','从侧面了解','一个侧面','侧面照'],
   ex_zh:'再把草捆成捆儿，共要一千个，排在船的侧面，我有用。',ex_py:'Zài bǎ cǎo kǔnchéng kǔnr, gòng yào yìqiān ge, pái zài chuán de cèmiàn, wǒ yǒu yòng.',ex_vn:'Lại bó cỏ thành từng bó, tổng cộng một nghìn bó, xếp ở hai bên mạn thuyền, tôi có việc cần dùng.',
   exList:[
     {zh:'再把草捆成捆儿，共要一千个，排在船的侧面，我有用。',py:'Zài bǎ cǎo kǔnchéng kǔnr, gòng yào yìqiān ge, pái zài chuán de cèmiàn, wǒ yǒu yòng.',vn:'Lại bó cỏ thành từng bó, tổng cộng một nghìn bó, xếp ở mạn thuyền, tôi có việc cần dùng.'},
     {zh:'我不好意思直接问她，就从侧面了解了一下她的想法。',py:'Wǒ bù hǎoyìsi zhíjiē wèn tā, jiù cóng cèmiàn liǎojiěle yíxià tā de xiǎngfǎ.',vn:'Tôi ngại hỏi thẳng cô ấy, nên đã tìm hiểu gián tiếp suy nghĩ của cô ấy.'},
     {zh:'这部电影从一个侧面反映了普通人的生活。',py:'Zhè bù diànyǐng cóng yí ge cèmiàn fǎnyìngle pǔtōngrén de shēnghuó.',vn:'Bộ phim này phản ánh cuộc sống của người bình thường từ một khía cạnh.'}
   ],
   colloFull:[
     {zh:'船的侧面',py:'chuán de cèmiàn',vn:'mạn thuyền, mặt bên thuyền'},
     {zh:'从侧面了解',py:'cóng cèmiàn liǎojiě',vn:'tìm hiểu gián tiếp'},
     {zh:'一个侧面',py:'yí ge cèmiàn',vn:'một khía cạnh'},
     {zh:'侧面照',py:'cèmiànzhào',vn:'ảnh chụp nghiêng'},
     {zh:'大楼的侧面',py:'dàlóu de cèmiàn',vn:'mặt hông toà nhà'}
   ],
   patterns:[
     {s:'排在 / 挂在 + ……的侧面',m:'Xếp / treo ở mặt bên của …'},
     {s:'从侧面 + 了解 / 打听',m:'Tìm hiểu / dò hỏi gián tiếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lối vào bãi đỗ xe ở mặt hông toà nhà, rất khó tìm.',answer:'停车场的入口在大楼的侧面，很不好找。',answerPy:'Tíngchēchǎng de rùkǒu zài dàlóu de cèmiàn, hěn bù hǎo zhǎo.',
      note:'在 + nơi chốn; 不好 + V = khó … (ôn HSK 4).',pair:'不好 + V'},
     {promptLang:'vi',prompt:'Thay vì hỏi thẳng, chi bằng tìm hiểu gián tiếp qua bạn bè của anh ấy.',answer:'与其直接问他，不如通过他的朋友从侧面了解一下。',answerPy:'Yǔqí zhíjiē wèn tā, bùrú tōngguò tā de péngyou cóng cèmiàn liǎojiě yíxià.',
      note:'与其……不如…… (ôn HSK 5); 通过 = thông qua.',pair:'与其……不如……'}
   ]},

  {n:27,zh:'机密',py:'jīmì',pos:'Danh từ / Tính từ',vn:'cơ mật, việc bí mật quan trọng',hv:'cơ mật',em:'🗝️',lesson:1,
   explain:['Danh từ: việc bí mật quan trọng (quân sự, chính trị, kinh doanh): 这是机密, 商业机密, 泄露机密. Tính từ: tuyệt mật, cơ mật: 机密文件.','Mức độ trang trọng, quan trọng cao hơn 秘密. Bài khoá: 不过这是机密，你得替我保密.'],
   usage:'这是机密; 商业 / 军事 / 国家 + 机密; 泄露 / 走漏 + 机密; 机密 + 文件 / 情报.',
   collo:['这是机密','商业机密','机密文件','泄露机密'],
   ex_zh:'不过这是机密，你得替我保密。',ex_py:'Búguò zhè shì jīmì, nǐ děi tì wǒ bǎo mì.',ex_vn:'Có điều đây là việc cơ mật, ông phải giữ bí mật giúp tôi.',
   exList:[
     {zh:'不过这是机密，你得替我保密，不要走漏消息，否则我性命难保。',py:'Búguò zhè shì jīmì, nǐ děi tì wǒ bǎo mì, búyào zǒulòu xiāoxi, fǒuzé wǒ xìngmìng nán bǎo.',vn:'Có điều đây là việc cơ mật, ông phải giữ bí mật giúp tôi, đừng để lộ tin, nếu không tính mạng tôi khó giữ.'},
     {zh:'公司规定，员工不得把商业机密告诉任何人。',py:'Gōngsī guīdìng, yuángōng bùdé bǎ shāngyè jīmì gàosu rènhé rén.',vn:'Công ty quy định nhân viên không được nói bí mật kinh doanh cho bất kỳ ai.'},
     {zh:'这些机密文件必须锁在保险柜里。',py:'Zhèxiē jīmì wénjiàn bìxū suǒ zài bǎoxiǎnguì li.',vn:'Những tài liệu mật này phải khoá trong két sắt.'}
   ],
   colloFull:[
     {zh:'这是机密',py:'zhè shì jīmì',vn:'đây là việc cơ mật'},
     {zh:'商业机密',py:'shāngyè jīmì',vn:'bí mật kinh doanh'},
     {zh:'机密文件',py:'jīmì wénjiàn',vn:'tài liệu mật'},
     {zh:'泄露机密',py:'xièlòu jīmì',vn:'tiết lộ cơ mật'},
     {zh:'军事机密',py:'jūnshì jīmì',vn:'bí mật quân sự'}
   ],
   patterns:[
     {s:'这是机密，……得 + 保密',m:'Đây là cơ mật, … phải giữ kín'},
     {s:'商业 / 军事 + 机密',m:'Bí mật kinh doanh / quân sự'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là bí mật của công ty, dù là người nhà cũng không được nói.',answer:'这是公司的机密，即使是家里人也不能说。',answerPy:'Zhè shì gōngsī de jīmì, jíshǐ shì jiālirén yě bù néng shuō.',
      note:'即使……也…… giả thiết nhượng bộ (ôn HSK 5).',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Anh ta vì làm lộ bí mật kinh doanh mà bị công ty đuổi việc.',answer:'他因为泄露商业机密被公司开除了。',answerPy:'Tā yīnwèi xièlòu shāngyè jīmì bèi gōngsī kāichú le.',
      note:'因为…… + câu bị động 被 (ôn HSK 4).',pair:'被'}
   ]},

  {n:28,zh:'保密',py:'bǎo mì',pos:'Động từ (li hợp)',vn:'giữ bí mật',hv:'bảo mật',em:'🤫',lesson:1,
   explain:['Giữ kín, không để lộ điều bí mật: 保 = giữ, 密 = bí mật. Là động từ li hợp, KHÔNG mang tân ngữ trực tiếp: nói 替 / 为 / 给 + người + 保密 hoặc 对……保密 (giữ bí mật với ai).','Bẫy: tiếng Việt "bảo mật" còn chỉ an ninh dữ liệu (安全, 加密); tiếng Trung 保密 chủ yếu là giữ kín thông tin, và không nói 保密这件事.'],
   usage:'替 / 为 + 某人 + 保密; 对 + 某人 + 保密; 保密工作; ……要保密 / 是保密的.',
   collo:['替我保密','对外保密','保密工作','严格保密'],
   ex_zh:'不过这是机密，你得替我保密。',ex_py:'Búguò zhè shì jīmì, nǐ děi tì wǒ bǎo mì.',ex_vn:'Có điều đây là việc cơ mật, ông phải giữ bí mật giúp tôi.',
   exList:[
     {zh:'不过这是机密，你得替我保密，不要走漏消息。',py:'Búguò zhè shì jīmì, nǐ děi tì wǒ bǎo mì, búyào zǒulòu xiāoxi.',vn:'Có điều đây là việc cơ mật, ông phải giữ bí mật giúp tôi, đừng để lộ tin.'},
     {zh:'我们准备给老师一个惊喜，大家一定要对她保密。',py:'Wǒmen zhǔnbèi gěi lǎoshī yí ge jīngxǐ, dàjiā yídìng yào duì tā bǎo mì.',vn:'Chúng ta chuẩn bị tạo bất ngờ cho cô giáo, mọi người nhất định phải giữ kín với cô.'},
     {zh:'新产品的价格目前还是保密的，下周发布会上才公布。',py:'Xīn chǎnpǐn de jiàgé mùqián háishi bǎomì de, xià zhōu fābùhuì shang cái gōngbù.',vn:'Giá sản phẩm mới hiện vẫn được giữ kín, đến buổi ra mắt tuần sau mới công bố.'}
   ],
   colloFull:[
     {zh:'替我保密',py:'tì wǒ bǎo mì',vn:'giữ bí mật giúp tôi'},
     {zh:'对外保密',py:'duì wài bǎo mì',vn:'giữ kín với bên ngoài'},
     {zh:'保密工作',py:'bǎomì gōngzuò',vn:'công tác bảo mật'},
     {zh:'严格保密',py:'yángé bǎo mì',vn:'giữ bí mật tuyệt đối'},
     {zh:'对她保密',py:'duì tā bǎo mì',vn:'giữ kín với cô ấy'}
   ],
   patterns:[
     {s:'替 / 为 + 某人 + 保密',m:'Giữ bí mật giúp ai'},
     {s:'对 + 某人 + 保密',m:'Giữ kín (không cho ai biết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này tôi chỉ nói với mình cậu thôi, cậu nhất định phải giữ bí mật giúp tôi nhé.',answer:'这件事我只告诉你一个人，你一定要替我保密啊。',answerPy:'Zhè jiàn shì wǒ zhǐ gàosu nǐ yí ge rén, nǐ yídìng yào tì wǒ bǎo mì a.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề (这件事……); 保密 không mang tân ngữ.',pair:'替……V'},
     {promptLang:'vi',prompt:'Để giữ bí mật, họ ngay cả người nhà cũng không nói cho biết.',answer:'为了保密，他们连家里人都没告诉。',answerPy:'Wèile bǎo mì, tāmen lián jiālirén dōu méi gàosu.',
      note:'连……都…… nhấn mạnh (ôn HSK 4).',pair:'连……都……'}
   ]},

  {n:29,zh:'走漏',py:'zǒulòu',pos:'Động từ',vn:'để lộ, tiết lộ, rò rỉ (tin tức)',hv:'tẩu lậu',em:'💧',lesson:1,
   explain:['Để tin tức, bí mật lọt ra ngoài (thường là không cố ý hoặc do sơ suất): 走 = đi, 漏 = rò. Tân ngữ gần như luôn là 消息 / 风声 (tin đồn) / 秘密.','Phân biệt 泄露 (tiết lộ — cả cố ý, văn viết, tân ngữ rộng hơn: 泄露机密 / 个人信息). Bẫy: "tẩu lậu" (buôn lậu) tiếng Việt khác hẳn.'],
   usage:'走漏 + 消息 / 风声 / 秘密; 不要走漏消息; 消息走漏了.',
   collo:['走漏消息','走漏风声','消息走漏','不要走漏'],
   ex_zh:'你得替我保密，不要走漏消息，否则我性命难保。',ex_py:'Nǐ děi tì wǒ bǎo mì, búyào zǒulòu xiāoxi, fǒuzé wǒ xìngmìng nán bǎo.',ex_vn:'Ông phải giữ bí mật giúp tôi, đừng để lộ tin, nếu không tính mạng tôi khó giữ.',
   exList:[
     {zh:'你得替我保密，不要走漏消息，否则我性命难保。',py:'Nǐ děi tì wǒ bǎo mì, búyào zǒulòu xiāoxi, fǒuzé wǒ xìngmìng nán bǎo.',vn:'Ông phải giữ bí mật giúp tôi, đừng để lộ tin, nếu không tính mạng tôi khó giữ.'},
     {zh:'不知道是谁走漏了风声，生日派对的秘密被她提前知道了。',py:'Bù zhīdào shì shéi zǒulòule fēngshēng, shēngrì pàiduì de mìmì bèi tā tíqián zhīdào le.',vn:'Chẳng biết ai để lộ tin, bí mật về bữa tiệc sinh nhật đã bị cô ấy biết trước mất rồi.'},
     {zh:'消息一旦走漏，我们的计划就全完了。',py:'Xiāoxi yídàn zǒulòu, wǒmen de jìhuà jiù quán wán le.',vn:'Tin tức một khi bị lộ thì kế hoạch của chúng ta coi như xong.'}
   ],
   colloFull:[
     {zh:'走漏消息',py:'zǒulòu xiāoxi',vn:'để lộ tin tức'},
     {zh:'走漏风声',py:'zǒulòu fēngshēng',vn:'lộ tin, lộ phong thanh'},
     {zh:'消息走漏',py:'xiāoxi zǒulòu',vn:'tin bị lộ'},
     {zh:'不要走漏',py:'búyào zǒulòu',vn:'đừng để lộ'},
     {zh:'走漏了秘密',py:'zǒulòule mìmì',vn:'đã để lộ bí mật'}
   ],
   patterns:[
     {s:'不要 / 别 + 走漏 + 消息 / 风声',m:'Đừng để lộ tin'},
     {s:'消息一旦走漏，……就……',m:'Tin một khi bị lộ thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này tuyệt đối không được để lộ, nếu không cả nhóm sẽ gặp rắc rối.',answer:'这件事千万不能走漏消息，否则整个小组都会有麻烦。',answerPy:'Zhè jiàn shì qiānwàn bù néng zǒulòu xiāoxi, fǒuzé zhěnggè xiǎozǔ dōu huì yǒu máfan.',
      note:'千万不能 = tuyệt đối không được; 否则 (ôn HSK 5).',pair:'否则'},
     {promptLang:'vi',prompt:'Hoá ra là chính cậu ấy vô ý để lộ tin tức.',answer:'原来是他自己不小心走漏了消息。',answerPy:'Yuánlái shì tā zìjǐ bù xiǎoxīn zǒulòule xiāoxi.',
      note:'原来 = hoá ra (ôn HSK 4); 不小心 + V.',pair:'原来'}
   ]},

  {n:30,zh:'沉思',py:'chénsī',pos:'Động từ',vn:'trầm tư, lặng im suy nghĩ',hv:'trầm tư',em:'🤔',lesson:1,
   explain:['Suy nghĩ sâu, im lặng tập trung một lúc lâu: 沉 = chìm, sâu; 思 = nghĩ. Thường không mang tân ngữ; hay đi với 良久 (hồi lâu), 陷入 (rơi vào).','Văn viết, dùng nhiều trong văn tự sự: 周瑜沉思良久; 陷入沉思 (chìm vào suy tư). Khác 思考 (suy nghĩ, có thể mang tân ngữ: 思考问题).'],
   usage:'沉思 + 良久 / 片刻 / 了一会儿; 陷入沉思; 沉思的样子; 低头沉思.',
   collo:['沉思良久','陷入沉思','低头沉思','沉思了一会儿'],
   ex_zh:'周瑜沉思良久，猜不出诸葛亮的意图，只好等着。',ex_py:'Zhōu Yú chénsī liángjiǔ, cāi bu chū Zhūgě Liàng de yìtú, zhǐhǎo děngzhe.',ex_vn:'Chu Du trầm ngâm hồi lâu, đoán không ra ý đồ của Gia Cát Lượng, đành chờ xem.',
   exList:[
     {zh:'周瑜沉思良久，猜不出诸葛亮的意图，只好等着。',py:'Zhōu Yú chénsī liángjiǔ, cāi bu chū Zhūgě Liàng de yìtú, zhǐhǎo děngzhe.',vn:'Chu Du trầm ngâm hồi lâu, đoán không ra ý đồ của Gia Cát Lượng, đành chờ xem.'},
     {zh:'听完我的问题，老师沉思了一会儿，才慢慢地回答。',py:'Tīngwán wǒ de wèntí, lǎoshī chénsīle yíhuìr, cái mànmàn de huídá.',vn:'Nghe xong câu hỏi của tôi, thầy trầm ngâm một lúc rồi mới chậm rãi trả lời.'},
     {zh:'看着窗外的雨，她不禁陷入了沉思。',py:'Kànzhe chuāng wài de yǔ, tā bùjīn xiànrùle chénsī.',vn:'Nhìn mưa ngoài cửa sổ, cô ấy bất giác chìm vào suy tư.'}
   ],
   colloFull:[
     {zh:'沉思良久',py:'chénsī liángjiǔ',vn:'trầm ngâm hồi lâu'},
     {zh:'陷入沉思',py:'xiànrù chénsī',vn:'chìm vào suy tư'},
     {zh:'低头沉思',py:'dī tóu chénsī',vn:'cúi đầu suy nghĩ'},
     {zh:'沉思了一会儿',py:'chénsīle yíhuìr',vn:'trầm ngâm một lúc'},
     {zh:'沉思的样子',py:'chénsī de yàngzi',vn:'dáng vẻ trầm tư'}
   ],
   patterns:[
     {s:'（某人）+ 沉思良久 / 沉思了一会儿',m:'Ai đó trầm ngâm hồi lâu / một lúc'},
     {s:'陷入 + 沉思',m:'Chìm vào suy tư'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông lão trầm ngâm hồi lâu, cuối cùng gật đầu đồng ý.',answer:'老人沉思良久，最后点头答应了。',answerPy:'Lǎorén chénsī liángjiǔ, zuìhòu diǎn tóu dāying le.',
      note:'良久 = hồi lâu (văn viết); chuỗi hành động nối tiếp.',pair:'最后'},
     {promptLang:'vi',prompt:'Đọc xong bức thư này, tôi bất giác chìm vào suy tư.',answer:'读完这封信，我不禁陷入了沉思。',answerPy:'Dúwán zhè fēng xìn, wǒ bùjīn xiànrùle chénsī.',
      note:'不禁 = bất giác (ôn HSK 6 bài 15).',pair:'不禁'}
   ]},

  {n:31,zh:'意图',py:'yìtú',pos:'Danh từ',vn:'ý đồ, ý định (mục đích muốn đạt được)',hv:'ý đồ',em:'🎯',lesson:1,
   explain:['Điều mà người ta dự định, mong muốn đạt được: 意 = ý, 图 = mưu tính. Trung tính (không nhất thiết xấu như "ý đồ" tiếng Việt): 来访的意图 = mục đích chuyến thăm; 设计意图 = ý tưởng thiết kế.','Hay đi với 猜 / 看出 / 说明 / 明白 + ……的意图; 真实意图 (ý định thật).'],
   usage:'猜不出 / 看出 / 明白 + ……的意图; 说明 + 来访的意图; 真实 / 设计 + 意图; 有……的意图.',
   collo:['猜不出……的意图','来访的意图','真实意图','说明意图'],
   ex_zh:'周瑜沉思良久，猜不出诸葛亮的意图。',ex_py:'Zhōu Yú chénsī liángjiǔ, cāi bu chū Zhūgě Liàng de yìtú.',ex_vn:'Chu Du trầm ngâm hồi lâu, đoán không ra ý đồ của Gia Cát Lượng.',
   exList:[
     {zh:'周瑜沉思良久，猜不出诸葛亮的意图，只好等着。',py:'Zhōu Yú chénsī liángjiǔ, cāi bu chū Zhūgě Liàng de yìtú, zhǐhǎo děngzhe.',vn:'Chu Du trầm ngâm hồi lâu, đoán không ra ý đồ của Gia Cát Lượng, đành chờ xem.'},
     {zh:'闲聊中，他说明了自己来访的意图，是想请我帮他找个工作。',py:'Xiánliáo zhōng, tā shuōmíngle zìjǐ láifǎng de yìtú, shì xiǎng qǐng wǒ bāng tā zhǎo ge gōngzuò.',vn:'Trong lúc tán gẫu, anh ấy nói rõ mục đích đến thăm, là muốn nhờ tôi tìm giúp một việc làm.'},
     {zh:'这位设计师的意图是让建筑和周围的自然环境融为一体。',py:'Zhè wèi shèjìshī de yìtú shì ràng jiànzhù hé zhōuwéi de zìrán huánjìng róng wéi yìtǐ.',vn:'Ý tưởng của nhà thiết kế là làm cho công trình hoà làm một với môi trường tự nhiên xung quanh.'}
   ],
   colloFull:[
     {zh:'猜不出……的意图',py:'cāi bu chū……de yìtú',vn:'đoán không ra ý đồ của …'},
     {zh:'来访的意图',py:'láifǎng de yìtú',vn:'mục đích đến thăm'},
     {zh:'真实意图',py:'zhēnshí yìtú',vn:'ý định thật sự'},
     {zh:'说明意图',py:'shuōmíng yìtú',vn:'nói rõ ý định'},
     {zh:'设计意图',py:'shèjì yìtú',vn:'ý tưởng thiết kế'}
   ],
   patterns:[
     {s:'猜不出 / 看不出 + ……的意图',m:'Không đoán ra / không nhìn ra ý định của …'},
     {s:'说明 + 来访的意图',m:'Nói rõ mục đích đến thăm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta nói vòng vo mãi, rốt cuộc ý định thật sự là gì?',answer:'他绕来绕去说了半天，真实意图究竟是什么？',answerPy:'Tā rào lái rào qù shuōle bàntiān, zhēnshí yìtú jiūjìng shì shénme?',
      note:'V来V去 (lặp đi lặp lại, ôn HSK 5); 究竟 = rốt cuộc.',pair:'V来V去'},
     {promptLang:'vi',prompt:'Chỉ cần nói rõ ý định của mình, mọi người sẽ hiểu cho cậu.',answer:'只要说明你的意图，大家就会理解你的。',answerPy:'Zhǐyào shuōmíng nǐ de yìtú, dàjiā jiù huì lǐjiě nǐ de.',
      note:'只要……就…… (ôn HSK 4); 会……的 khẳng định.',pair:'只要……就……'}
   ]},

  {n:32,zh:'私自',py:'sīzì',pos:'Phó từ',vn:'tự ý, lén (làm mà không được phép)',hv:'tư tự',em:'🙊',lesson:1,
   explain:['Tự mình làm mà KHÔNG được cho phép, không báo cho người có trách nhiệm biết (thường là việc không hợp quy định): 私 = riêng tư, 自 = tự. Đứng trước động từ: 私自决定, 私自离开.','Sắc thái phê phán. Trong bài: 鲁肃私自弄来二十条快船 — Lỗ Túc tự ý (không báo Chu Du) kiếm thuyền.'],
   usage:'私自 + V (决定 / 离开 / 使用 / 拿 / 弄来); 不得 / 不许 + 私自 + V.',
   collo:['私自弄来','私自决定','私自离开','不得私自'],
   ex_zh:'鲁肃私自弄来二十条快船，按诸葛亮说的安排妥当。',ex_py:'Lǔ Sù sīzì nònglái èrshí tiáo kuài chuán, àn Zhūgě Liàng shuō de ānpái tuǒdàng.',ex_vn:'Lỗ Túc tự ý kiếm hai mươi chiếc thuyền nhanh, sắp xếp đâu vào đấy theo lời Gia Cát Lượng.',
   exList:[
     {zh:'鲁肃私自弄来二十条快船，按诸葛亮说的安排妥当。',py:'Lǔ Sù sīzì nònglái èrshí tiáo kuài chuán, àn Zhūgě Liàng shuō de ānpái tuǒdàng.',vn:'Lỗ Túc tự ý kiếm hai mươi chiếc thuyền nhanh, sắp xếp đâu vào đấy theo lời Gia Cát Lượng.'},
     {zh:'学校规定，住校生不得私自离开学校。',py:'Xuéxiào guīdìng, zhùxiàoshēng bùdé sīzì líkāi xuéxiào.',vn:'Nhà trường quy định học sinh nội trú không được tự ý rời trường.'},
     {zh:'这么大的事，你怎么能私自决定，也不跟家里商量一下？',py:'Zhème dà de shì, nǐ zěnme néng sīzì juédìng, yě bù gēn jiāli shāngliang yíxià?',vn:'Chuyện lớn như vậy, sao con có thể tự ý quyết định, cũng không bàn với gia đình một chút?'}
   ],
   colloFull:[
     {zh:'私自弄来',py:'sīzì nònglái',vn:'tự ý kiếm về'},
     {zh:'私自决定',py:'sīzì juédìng',vn:'tự ý quyết định'},
     {zh:'私自离开',py:'sīzì líkāi',vn:'tự ý rời đi'},
     {zh:'不得私自',py:'bùdé sīzì',vn:'không được tự ý'},
     {zh:'私自使用',py:'sīzì shǐyòng',vn:'tự ý sử dụng'}
   ],
   patterns:[
     {s:'私自 + V',m:'Tự ý làm gì (không được phép)'},
     {s:'不得 / 不许 + 私自 + V',m:'Không được tự ý …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chưa được sự đồng ý của người khác thì không được tự ý dùng đồ của họ.',answer:'没有经过别人的同意，不能私自使用别人的东西。',answerPy:'Méiyǒu jīngguò biérén de tóngyì, bù néng sīzì shǐyòng biérén de dōngxi.',
      note:'经过……的同意 = được … đồng ý (ôn HSK 4).',pair:'经过'},
     {promptLang:'vi',prompt:'Cậu ấy tự ý rời vị trí, suýt nữa gây ra tai nạn.',answer:'他私自离开了岗位，差点儿造成事故。',answerPy:'Tā sīzì líkāile gǎngwèi, chàdiǎnr zàochéng shìgù.',
      note:'差点儿 = suýt nữa (ôn HSK 4); 造成 + hậu quả.',pair:'差点儿'}
   ]},

  {n:33,zh:'妥当',py:'tuǒdàng',pos:'Tính từ',vn:'thoả đáng, ổn thoả, đâu vào đấy',hv:'thoả đáng',em:'👌',lesson:1,
   explain:['Thích hợp, chu đáo, không có vấn đề gì: 安排妥当 (sắp xếp ổn thoả), 处理得很妥当, 不太妥当 (không hay lắm).','Hay làm bổ ngữ sau 安排 / 处理 / 准备, hoặc vị ngữ. Trong khẩu ngữ đọc tuǒdang. Gần 恰当 (thích đáng, về lời nói, cách dùng từ).'],
   usage:'安排 / 处理 / 准备 + (得) + 妥当; ……不太妥当; 妥当的办法.',
   collo:['安排妥当','处理得很妥当','不太妥当','妥当的办法'],
   ex_zh:'鲁肃私自弄来二十条快船，按诸葛亮说的安排妥当。',ex_py:'Lǔ Sù sīzì nònglái èrshí tiáo kuài chuán, àn Zhūgě Liàng shuō de ānpái tuǒdàng.',ex_vn:'Lỗ Túc tự ý kiếm hai mươi chiếc thuyền nhanh, sắp xếp đâu vào đấy theo lời Gia Cát Lượng.',
   exList:[
     {zh:'鲁肃私自弄来二十条快船，按诸葛亮说的安排妥当。',py:'Lǔ Sù sīzì nònglái èrshí tiáo kuài chuán, àn Zhūgě Liàng shuō de ānpái tuǒdàng.',vn:'Lỗ Túc tự ý kiếm hai mươi chiếc thuyền nhanh, sắp xếp đâu vào đấy theo lời Gia Cát Lượng.'},
     {zh:'出发前，导游已经把住宿和交通都安排妥当了。',py:'Chūfā qián, dǎoyóu yǐjīng bǎ zhùsù hé jiāotōng dōu ānpái tuǒdàng le.',vn:'Trước khi xuất phát, hướng dẫn viên đã sắp xếp chỗ ở và đi lại đâu vào đấy.'},
     {zh:'在这种场合开这样的玩笑，恐怕不太妥当吧？',py:'Zài zhè zhǒng chǎnghé kāi zhèyàng de wánxiào, kǒngpà bú tài tuǒdàng ba?',vn:'Đùa kiểu này trong dịp như thế này, e là không ổn lắm nhỉ?'}
   ],
   colloFull:[
     {zh:'安排妥当',py:'ānpái tuǒdàng',vn:'sắp xếp ổn thoả'},
     {zh:'处理得很妥当',py:'chǔlǐ de hěn tuǒdàng',vn:'xử lý rất thoả đáng'},
     {zh:'不太妥当',py:'bú tài tuǒdàng',vn:'không ổn lắm'},
     {zh:'妥当的办法',py:'tuǒdàng de bànfǎ',vn:'cách làm thoả đáng'},
     {zh:'准备妥当',py:'zhǔnbèi tuǒdàng',vn:'chuẩn bị chu đáo'}
   ],
   patterns:[
     {s:'把……安排 / 准备 + 妥当',m:'Sắp xếp / chuẩn bị … đâu vào đấy'},
     {s:'……恐怕不太妥当',m:'… e là không ổn lắm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi việc đều đã chuẩn bị chu đáo, chỉ còn chờ khách đến thôi.',answer:'一切都准备妥当了，就等客人来了。',answerPy:'Yíqiè dōu zhǔnbèi tuǒdàng le, jiù děng kèrén lái le.',
      note:'就等……了 = chỉ còn chờ …; 一切都…….',pair:'就……了'},
     {promptLang:'vi',prompt:'Tôi thấy làm như vậy không ổn lắm, hay là chúng ta bàn thêm đã.',answer:'我觉得这样做不太妥当，我们还是再商量商量吧。',answerPy:'Wǒ juéde zhèyàng zuò bú tài tuǒdàng, wǒmen háishi zài shāngliang shāngliang ba.',
      note:'还是……吧 = tốt hơn là (ôn HSK 4); động từ lặp 商量商量.',pair:'还是……吧'}
   ]},

  {n:34,zh:'占领',py:'zhànlǐng',pos:'Động từ',vn:'chiếm lĩnh, chiếm đóng, chiếm giữ',hv:'chiếm lĩnh',em:'🚩',lesson:1,
   explain:['Dùng vũ lực chiếm lấy và giữ một vùng đất, vị trí: 占领城市, 占领阵地. Nghĩa bóng (kinh tế): chiếm lĩnh thị trường — 占领市场.','Khác 占 (chiếm nói chung, khẩu ngữ: 占座位) và 占据 (chiếm cứ, văn viết). Bài khoá: 朝曹操占领的北岸开去 — 占领 làm định ngữ.'],
   usage:'占领 + 城市 / 阵地 / 地区 / 市场; ……占领的 + nơi chốn; 被……占领.',
   collo:['曹操占领的北岸','占领市场','占领城市','被敌人占领'],
   ex_zh:'之后吩咐用绳索把船连在一起，朝曹操占领的北岸开去。',ex_py:'Zhīhòu fēnfù yòng shéngsuǒ bǎ chuán lián zài yìqǐ, cháo Cáo Cāo zhànlǐng de běi\'àn kāiqu.',ex_vn:'Sau đó sai dùng dây thừng nối các thuyền lại, tiến về bờ bắc do Tào Tháo chiếm giữ.',
   exList:[
     {zh:'之后吩咐用绳索把船连在一起，朝曹操占领的北岸开去。',py:'Zhīhòu fēnfù yòng shéngsuǒ bǎ chuán lián zài yìqǐ, cháo Cáo Cāo zhànlǐng de běi\'àn kāiqu.',vn:'Sau đó sai dùng dây thừng nối các thuyền lại, tiến về bờ bắc do Tào Tháo chiếm giữ.'},
     {zh:'这家公司的新产品价格低、质量好，很快就占领了国内市场。',py:'Zhè jiā gōngsī de xīn chǎnpǐn jiàgé dī, zhìliàng hǎo, hěn kuài jiù zhànlǐngle guónèi shìchǎng.',vn:'Sản phẩm mới của công ty này giá rẻ, chất lượng tốt, chẳng mấy chốc đã chiếm lĩnh thị trường trong nước.'},
     {zh:'这座古城历史上曾经几次被敌人占领。',py:'Zhè zuò gǔchéng lìshǐ shang céngjīng jǐ cì bèi dírén zhànlǐng.',vn:'Toà thành cổ này trong lịch sử từng mấy lần bị kẻ địch chiếm đóng.'}
   ],
   colloFull:[
     {zh:'曹操占领的北岸',py:'Cáo Cāo zhànlǐng de běi\'àn',vn:'bờ bắc do Tào Tháo chiếm giữ'},
     {zh:'占领市场',py:'zhànlǐng shìchǎng',vn:'chiếm lĩnh thị trường'},
     {zh:'占领城市',py:'zhànlǐng chéngshì',vn:'chiếm đóng thành phố'},
     {zh:'被敌人占领',py:'bèi dírén zhànlǐng',vn:'bị kẻ địch chiếm đóng'},
     {zh:'占领阵地',py:'zhànlǐng zhèndì',vn:'chiếm giữ trận địa'}
   ],
   patterns:[
     {s:'……占领的 + nơi chốn',m:'Nơi do … chiếm giữ'},
     {s:'（很快就）占领了 + 市场',m:'(Nhanh chóng) chiếm lĩnh thị trường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn chiếm lĩnh thị trường, không những phải có sản phẩm tốt mà còn phải có dịch vụ tốt.',answer:'要想占领市场，不但要有好产品，还要有好服务。',answerPy:'Yào xiǎng zhànlǐng shìchǎng, búdàn yào yǒu hǎo chǎnpǐn, hái yào yǒu hǎo fúwù.',
      note:'要想……; 不但……还…… tăng tiến (ôn HSK 4).',pair:'不但……还……'},
     {promptLang:'vi',prompt:'Thành phố này sau khi bị chiếm đóng, rất nhiều người buộc phải rời bỏ quê hương.',answer:'这座城市被占领以后，很多人不得不离开了家乡。',answerPy:'Zhè zuò chéngshì bèi zhànlǐng yǐhòu, hěn duō rén bùdébù líkāile jiāxiāng.',
      note:'被 + V (không nêu tác nhân); 不得不 = buộc phải (ôn HSK 4).',pair:'不得不'}
   ]},

  {n:35,zh:'封锁',py:'fēngsuǒ',pos:'Động từ',vn:'phong toả, bao vây, chặn (không cho qua lại)',hv:'phong toả',em:'🚧',lesson:1,
   explain:['Dùng biện pháp chặn lại, không cho người, xe, tin tức qua lại: 封锁道路 / 现场 / 消息. Nghĩa trong bài (văn học): sương mù dày đặc như bao trùm, "khoá kín" mặt sông: 大雾封锁了江面.','Hay gặp: 封锁消息 (bưng bít tin), 经济封锁 (cấm vận kinh tế), 被封锁.'],
   usage:'封锁 + 道路 / 现场 / 边境 / 消息; 大雾 + 封锁了 + ……; 被……封锁; 经济封锁.',
   collo:['封锁了江面','封锁现场','封锁消息','封锁道路'],
   ex_zh:'此时，大雾封锁了江面，不远处什么都看不清。',ex_py:'Cǐshí, dà wù fēngsuǒle jiāngmiàn, bù yuǎn chù shénme dōu kàn bu qīng.',ex_vn:'Lúc này, sương mù dày đặc bao phủ kín mặt sông, chỗ không xa lắm cũng chẳng nhìn rõ gì.',
   exList:[
     {zh:'此时，大雾封锁了江面，不远处什么都看不清，船悄悄地靠近了曹操的驻扎地。',py:'Cǐshí, dà wù fēngsuǒle jiāngmiàn, bù yuǎn chù shénme dōu kàn bu qīng, chuán qiāoqiāo de kàojìnle Cáo Cāo de zhùzhādì.',vn:'Lúc này, sương mù dày đặc phủ kín mặt sông, chỗ gần cũng chẳng nhìn rõ gì, thuyền lặng lẽ áp sát nơi đóng quân của Tào Tháo.'},
     {zh:'事故发生以后，警察马上封锁了现场。',py:'Shìgù fāshēng yǐhòu, jǐngchá mǎshàng fēngsuǒle xiànchǎng.',vn:'Sau khi tai nạn xảy ra, cảnh sát lập tức phong toả hiện trường.'},
     {zh:'因为大雪，通往山区的公路被封锁了三天。',py:'Yīnwèi dà xuě, tōngwǎng shānqū de gōnglù bèi fēngsuǒle sān tiān.',vn:'Vì tuyết lớn, con đường dẫn lên vùng núi bị phong toả ba ngày.'}
   ],
   colloFull:[
     {zh:'封锁了江面',py:'fēngsuǒle jiāngmiàn',vn:'phủ kín mặt sông'},
     {zh:'封锁现场',py:'fēngsuǒ xiànchǎng',vn:'phong toả hiện trường'},
     {zh:'封锁消息',py:'fēngsuǒ xiāoxi',vn:'bưng bít tin tức'},
     {zh:'封锁道路',py:'fēngsuǒ dàolù',vn:'chặn đường'},
     {zh:'经济封锁',py:'jīngjì fēngsuǒ',vn:'cấm vận kinh tế'}
   ],
   patterns:[
     {s:'（大雾 / 大雪）+ 封锁了 + ……',m:'(Sương / tuyết) phủ kín, chặn …'},
     {s:'……被封锁了 + thời lượng',m:'… bị phong toả (bao lâu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công ty cố bưng bít tin tức, nhưng chuyện này vẫn truyền ra ngoài.',answer:'尽管公司极力封锁消息，这件事还是传了出去。',answerPy:'Jǐnguǎn gōngsī jílì fēngsuǒ xiāoxi, zhè jiàn shì háishi chuánle chūqu.',
      note:'尽管……还是…… (ôn HSK 4); bổ ngữ xu hướng 传出去.',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Sương mù dày đặc phủ kín đường cao tốc, xe cộ đành phải dừng lại chờ.',answer:'大雾封锁了高速公路，车辆只好停下来等待。',answerPy:'Dà wù fēngsuǒle gāosù gōnglù, chēliàng zhǐhǎo tíng xiàlai děngdài.',
      note:'只好 = đành phải; 停下来 (bổ ngữ xu hướng, ôn HSK 4).',pair:'只好'}
   ]},

  {n:36,zh:'驻扎',py:'zhùzhā',pos:'Động từ',vn:'đóng quân, đồn trú',hv:'trú trát',em:'⛺',lesson:1,
   explain:['(Quân đội) dừng lại ở một nơi trong một thời gian: 军队驻扎在城外. Chủ ngữ thường là 军队 / 部队 / 士兵; nơi chốn đứng sau 在.','驻扎地 = nơi đóng quân (bài khoá: 靠近了曹操的驻扎地). Nghĩa mở rộng (khẩu ngữ): đoàn làm việc, công ty "đóng" ở một nơi.'],
   usage:'（军队 / 部队）+ 驻扎在 + nơi chốn; ……的驻扎地; 长期驻扎.',
   collo:['驻扎地','驻扎在城外','军队驻扎','长期驻扎'],
   ex_zh:'船悄悄地靠近了曹操的驻扎地。',ex_py:'Chuán qiāoqiāo de kàojìnle Cáo Cāo de zhùzhādì.',ex_vn:'Thuyền lặng lẽ áp sát nơi đóng quân của Tào Tháo.',
   exList:[
     {zh:'不远处什么都看不清，船悄悄地靠近了曹操的驻扎地。',py:'Bù yuǎn chù shénme dōu kàn bu qīng, chuán qiāoqiāo de kàojìnle Cáo Cāo de zhùzhādì.',vn:'Chỗ gần cũng chẳng nhìn rõ gì, thuyền lặng lẽ áp sát nơi đóng quân của Tào Tháo.'},
     {zh:'当年红军曾经在这个小村子里驻扎过半个月。',py:'Dāngnián Hóngjūn céngjīng zài zhège xiǎo cūnzi li zhùzhāguo bàn ge yuè.',vn:'Năm đó Hồng quân từng đóng quân nửa tháng ở ngôi làng nhỏ này.'},
     {zh:'这支部队长期驻扎在边境地区，保护着当地百姓的安全。',py:'Zhè zhī bùduì chángqī zhùzhā zài biānjìng dìqū, bǎohùzhe dāngdì bǎixìng de ānquán.',vn:'Đơn vị này đóng quân lâu dài ở vùng biên giới, bảo vệ an toàn cho người dân địa phương.'}
   ],
   colloFull:[
     {zh:'驻扎地',py:'zhùzhādì',vn:'nơi đóng quân'},
     {zh:'驻扎在城外',py:'zhùzhā zài chéng wài',vn:'đóng quân ngoài thành'},
     {zh:'军队驻扎',py:'jūnduì zhùzhā',vn:'quân đội đóng quân'},
     {zh:'长期驻扎',py:'chángqī zhùzhā',vn:'đóng quân lâu dài'},
     {zh:'曹操的驻扎地',py:'Cáo Cāo de zhùzhādì',vn:'nơi đóng quân của Tào Tháo'}
   ],
   patterns:[
     {s:'N (军队 / 部队) + 驻扎在 + nơi chốn',m:'Quân đội đóng quân ở …'},
     {s:'……的驻扎地',m:'Nơi đóng quân của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói quân địch đóng quân ngay bên kia sông, dân làng đều rất lo lắng.',answer:'听说敌人的军队就驻扎在河对岸，村民们都很担心。',answerPy:'Tīngshuō dírén de jūnduì jiù zhùzhā zài hé duì\'àn, cūnmínmen dōu hěn dānxīn.',
      note:'听说……; 就 nhấn mạnh vị trí (ngay ở).',pair:'听说'},
     {promptLang:'vi',prompt:'Quân đội đóng ở đây vừa giữ gìn trật tự, vừa giúp dân gặt lúa.',answer:'驻扎在这里的部队既维持秩序，又帮老百姓收稻子。',answerPy:'Zhùzhā zài zhèli de bùduì jì wéichí zhìxù, yòu bāng lǎobǎixìng shōu dàozi.',
      note:'既……又…… (ôn HSK 4); cụm động từ làm định ngữ (驻扎在这里的部队).',pair:'既……又……'}
   ]},

  {n:37,zh:'指定',py:'zhǐdìng',pos:'Động từ',vn:'chỉ định, ấn định (định rõ người, nơi, thời gian)',hv:'chỉ định',em:'📍',lesson:1,
   explain:['Xác định cụ thể người, nơi chốn, thời gian để làm việc gì: 指定地点 / 时间 / 人选. Thường làm định ngữ: 在指定的地点, 指定的网站.','Cấu trúc: 指定 + người + V (老师指定他当组长). Bài khoá: 士兵在诸葛亮指定的地点……一字排开.'],
   usage:'（某人）指定的 + 地点 / 时间 / 网站; 指定 + 某人 + V / 当……; 在指定……内 / 前.',
   collo:['指定的地点','指定时间','指定人选','指定他当组长'],
   ex_zh:'士兵在诸葛亮指定的地点，将船头朝西，船尾朝东，一字排开。',ex_py:'Shìbīng zài Zhūgě Liàng zhǐdìng de dìdiǎn, jiāng chuántóu cháo xī, chuánwěi cháo dōng, yízì páikāi.',ex_vn:'Binh sĩ ở chỗ Gia Cát Lượng đã chỉ định, cho đầu thuyền quay về tây, đuôi thuyền quay về đông, xếp thành một hàng ngang.',
   exList:[
     {zh:'士兵在诸葛亮指定的地点，将船头朝西，船尾朝东，一字排开。',py:'Shìbīng zài Zhūgě Liàng zhǐdìng de dìdiǎn, jiāng chuántóu cháo xī, chuánwěi cháo dōng, yízì páikāi.',vn:'Binh sĩ ở chỗ Gia Cát Lượng đã chỉ định, cho đầu thuyền quay về tây, đuôi thuyền quay về đông, dàn thành một hàng ngang.'},
     {zh:'请大家在指定的时间内交卷，迟交的试卷一律无效。',py:'Qǐng dàjiā zài zhǐdìng de shíjiān nèi jiāo juàn, chí jiāo de shìjuàn yílǜ wúxiào.',vn:'Mời mọi người nộp bài trong thời gian quy định, bài nộp muộn đều không có hiệu lực.'},
     {zh:'老师指定小李当我们小组的组长。',py:'Lǎoshī zhǐdìng Xiǎo Lǐ dāng wǒmen xiǎozǔ de zǔzhǎng.',vn:'Thầy chỉ định Tiểu Lý làm nhóm trưởng nhóm chúng tôi.'}
   ],
   colloFull:[
     {zh:'指定的地点',py:'zhǐdìng de dìdiǎn',vn:'địa điểm chỉ định'},
     {zh:'指定时间',py:'zhǐdìng shíjiān',vn:'ấn định thời gian'},
     {zh:'指定人选',py:'zhǐdìng rénxuǎn',vn:'chỉ định người'},
     {zh:'指定他当组长',py:'zhǐdìng tā dāng zǔzhǎng',vn:'chỉ định anh ấy làm nhóm trưởng'},
     {zh:'在指定的时间内',py:'zài zhǐdìng de shíjiān nèi',vn:'trong thời gian quy định'}
   ],
   patterns:[
     {s:'在 + （某人）指定的 + 地点 / 时间 + V',m:'Làm … tại nơi / giờ đã được chỉ định'},
     {s:'指定 + 某人 + 当 / V……',m:'Chỉ định ai làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rác phải vứt ở chỗ quy định, nếu không sẽ bị phạt tiền.',answer:'垃圾要扔在指定的地点，否则会被罚款。',answerPy:'Lājī yào rēng zài zhǐdìng de dìdiǎn, fǒuzé huì bèi fákuǎn.',
      note:'V + 在 + nơi chốn; 否则 (ôn HSK 5).',pair:'否则'},
     {promptLang:'vi',prompt:'Chưa đến giờ quy định mà các thí sinh đã đến đông đủ cả rồi.',answer:'还没到指定的时间，考生们就已经到齐了。',answerPy:'Hái méi dào zhǐdìng de shíjiān, kǎoshēngmen jiù yǐjīng dàoqí le.',
      note:'还没……就已经…… (sớm hơn dự kiến); 到齐 = đến đủ.',pair:'还没……就……'}
   ]},

  {n:38,zh:'响亮',py:'xiǎngliàng',pos:'Tính từ',vn:'vang dội, vang rền, to và rõ',hv:'hưởng lượng',em:'📢',lesson:1,
   explain:['(Âm thanh) to, rõ, vang xa: 响 = vang, 亮 = rõ, sáng. Chủ ngữ: 声音 / 口号 / 掌声 / 回答. Có thể lặp: 响响亮亮.','Nghĩa bóng: (tên tuổi, danh tiếng) nổi, kêu: 名字很响亮 (cái tên kêu, dễ nhớ). Bài khoá: 声音能多响亮就多响亮 — cấu trúc 能A就A.'],
   usage:'声音 / 回答 / 掌声 + 响亮; 响亮的 + 口号 / 名字; 能多响亮就多响亮.',
   collo:['声音响亮','响亮的口号','响亮地回答','名字很响亮'],
   ex_zh:'船上的士兵奋力敲鼓，齐声高喊，声音能多响亮就多响亮。',ex_py:'Chuán shang de shìbīng fènlì qiāo gǔ, qíshēng gāo hǎn, shēngyīn néng duō xiǎngliàng jiù duō xiǎngliàng.',ex_vn:'Binh sĩ trên thuyền ra sức đánh trống, đồng thanh hò hét, tiếng vang được đến đâu thì làm vang đến đó.',
   exList:[
     {zh:'船上的士兵奋力敲鼓，齐声高喊，声音能多响亮就多响亮。',py:'Chuán shang de shìbīng fènlì qiāo gǔ, qíshēng gāo hǎn, shēngyīn néng duō xiǎngliàng jiù duō xiǎngliàng.',vn:'Binh sĩ trên thuyền ra sức đánh trống, đồng thanh hò hét, tiếng càng vang dội càng tốt.'},
     {zh:'老师点到他的名字，他响亮地回答了一声“到”。',py:'Lǎoshī diǎndào tā de míngzi, tā xiǎngliàng de huídále yì shēng “dào”.',vn:'Thầy gọi đến tên, cậu ấy dõng dạc đáp một tiếng "Có".'},
     {zh:'公司想给新产品起一个既响亮又好记的名字。',py:'Gōngsī xiǎng gěi xīn chǎnpǐn qǐ yí ge jì xiǎngliàng yòu hǎo jì de míngzi.',vn:'Công ty muốn đặt cho sản phẩm mới một cái tên vừa kêu vừa dễ nhớ.'}
   ],
   colloFull:[
     {zh:'声音响亮',py:'shēngyīn xiǎngliàng',vn:'giọng vang, tiếng to'},
     {zh:'响亮的口号',py:'xiǎngliàng de kǒuhào',vn:'khẩu hiệu vang dội'},
     {zh:'响亮地回答',py:'xiǎngliàng de huídá',vn:'trả lời dõng dạc'},
     {zh:'名字很响亮',py:'míngzi hěn xiǎngliàng',vn:'cái tên rất kêu'},
     {zh:'响亮的掌声',py:'xiǎngliàng de zhǎngshēng',vn:'tràng pháo tay vang dội'}
   ],
   patterns:[
     {s:'声音 + 能多响亮就多响亮',m:'Tiếng vang được bao nhiêu thì vang bấy nhiêu'},
     {s:'响亮地 + 回答 / 喊',m:'Trả lời / hô dõng dạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng cậu bé tuy nhỏ tuổi nhưng hát vang và rõ, khán giả vỗ tay không ngớt.',answer:'这个小男孩年纪虽小，歌声却很响亮，观众掌声不断。',answerPy:'Zhège xiǎo nánhái niánjì suī xiǎo, gēshēng què hěn xiǎngliàng, guānzhòng zhǎngshēng búduàn.',
      note:'虽……却…… (văn viết, ôn HSK 5).',pair:'虽……却……'},
     {promptLang:'vi',prompt:'Khi hô khẩu hiệu, tiếng của mọi người càng vang dội càng tốt.',answer:'喊口号的时候，大家的声音能多响亮就多响亮。',answerPy:'Hǎn kǒuhào de shíhou, dàjiā de shēngyīn néng duō xiǎngliàng jiù duō xiǎngliàng.',
      note:'能多A就多A — điểm ngữ pháp 2 của bài (能A就A).',pair:'能A就A'}
   ]},

  {n:39,zh:'舱',py:'cāng',pos:'Danh từ',vn:'khoang (thuyền hoặc máy bay)',hv:'thương',em:'🛶',lesson:1,
   explain:['Khoảng không gian bên trong thuyền, máy bay, tàu vũ trụ để chở người hoặc hàng: 船舱, 机舱, 客舱, 货舱.','Hay ghép: 头等舱 (khoang hạng nhất), 经济舱 (khoang phổ thông), 舱门 (cửa khoang). Bài khoá: 看到舱中已摆下酒菜.'],
   usage:'船舱 / 机舱 / 客舱 / 货舱; 舱中 / 舱里 + ……; 头等舱 / 经济舱.',
   collo:['舱中','船舱','经济舱','头等舱'],
   ex_zh:'看到舱中已摆下酒菜，只得心神不定地与诸葛亮饮酒。',ex_py:'Kàndào cāng zhōng yǐ bǎixià jiǔcài, zhǐdé xīnshén-búdìng de yǔ Zhūgě Liàng yǐn jiǔ.',ex_vn:'Thấy trong khoang thuyền đã bày sẵn rượu thịt, đành bồn chồn ngồi uống rượu với Gia Cát Lượng.',
   exList:[
     {zh:'鲁肃跟诸葛亮来到船上，看到舱中已摆下酒菜，只得心神不定地与诸葛亮饮酒。',py:'Lǔ Sù gēn Zhūgě Liàng láidào chuán shang, kàndào cāng zhōng yǐ bǎixià jiǔcài, zhǐdé xīnshén-búdìng de yǔ Zhūgě Liàng yǐn jiǔ.',vn:'Lỗ Túc theo Gia Cát Lượng lên thuyền, thấy trong khoang đã bày sẵn rượu thịt, đành bồn chồn ngồi uống rượu với Gia Cát Lượng.'},
     {zh:'为了省钱，我们买的都是经济舱的机票。',py:'Wèile shěng qián, wǒmen mǎi de dōu shì jīngjìcāng de jīpiào.',vn:'Để tiết kiệm tiền, vé máy bay chúng tôi mua đều là hạng phổ thông.'},
     {zh:'风浪太大，船长让乘客都回到船舱里去。',py:'Fēnglàng tài dà, chuánzhǎng ràng chéngkè dōu huídào chuáncāng li qu.',vn:'Sóng gió quá lớn, thuyền trưởng bảo hành khách đều vào trong khoang thuyền.'}
   ],
   colloFull:[
     {zh:'舱中',py:'cāng zhōng',vn:'trong khoang'},
     {zh:'船舱',py:'chuáncāng',vn:'khoang thuyền'},
     {zh:'经济舱',py:'jīngjìcāng',vn:'khoang phổ thông'},
     {zh:'头等舱',py:'tóuděngcāng',vn:'khoang hạng nhất'},
     {zh:'机舱',py:'jīcāng',vn:'khoang máy bay'}
   ],
   patterns:[
     {s:'舱中 / 船舱里 + 已 + V（摆下 / 坐满）',m:'Trong khoang đã …'},
     {s:'经济舱 / 头等舱 + 的 + 机票',m:'Vé hạng phổ thông / hạng nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy bay sắp hạ cánh, xin hành khách ở khoang phổ thông trở về chỗ ngồi.',answer:'飞机即将降落，请经济舱的乘客回到座位上。',answerPy:'Fēijī jíjiāng jiàngluò, qǐng jīngjìcāng de chéngkè huídào zuòwèi shang.',
      note:'即将 + V — điểm ngữ pháp 1 của bài; 回到 + nơi chốn.',pair:'即将'},
     {promptLang:'vi',prompt:'Vừa bước vào khoang thuyền, tôi liền ngửi thấy một mùi cá tanh.',answer:'一走进船舱，我就闻到了一股鱼腥味。',answerPy:'Yì zǒujìn chuáncāng, wǒ jiù wéndàole yì gǔ yú xīng wèir.',
      note:'一……就…… (ôn HSK 4); 腥 (ôn HSK 6 bài 21).',pair:'一……就……'}
   ]},

  {n:40,zh:'嘱咐',py:'zhǔfù',pos:'Động từ',vn:'dặn dò, căn dặn',hv:'chúc phó',em:'📝',lesson:1,
   explain:['Dặn người khác nhớ làm hay không làm điều gì (người trên với người dưới, người thân): 嘱咐 + người + V; cũng làm danh từ: 妈妈的嘱咐. Khẩu ngữ đọc zhǔfu.','Gần như đồng nghĩa với 叮嘱 (từ 11): 叮嘱 nhấn DẶN ĐI DẶN LẠI, rất ân cần; 嘱咐 dùng rộng hơn, có thể chỉ dặn một lần, gần với 吩咐 (sai bảo). Bài khoá: 曹操……嘱咐下属.'],
   usage:'嘱咐 + 某人 + (要 / 别 / 不要) + V; 临终 / 临走 + 嘱咐; 记住……的嘱咐.',
   collo:['嘱咐下属','再三嘱咐','临走时嘱咐','父母的嘱咐'],
   ex_zh:'曹操嘱咐下属：“不要轻易出兵。”',ex_py:'Cáo Cāo zhǔfù xiàshǔ: “Búyào qīngyì chū bīng.”',ex_vn:'Tào Tháo dặn thuộc hạ: "Không được tuỳ tiện xuất quân."',
   exList:[
     {zh:'曹操听到鼓声和叫喊声响成一片，嘱咐下属：“江上大雾茫茫，我们弄不清情况，不要轻易出兵。”',py:'Cáo Cāo tīngdào gǔshēng hé jiàohǎnshēng xiǎngchéng yí piàn, zhǔfù xiàshǔ: “Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.”',vn:'Tào Tháo nghe tiếng trống và tiếng hò hét vang lên dậy trời, dặn thuộc hạ: "Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân."'},
     {zh:'出国前，奶奶嘱咐我要按时吃饭，别太累了。',py:'Chū guó qián, nǎinai zhǔfù wǒ yào ànshí chī fàn, bié tài lèi le.',vn:'Trước khi ra nước ngoài, bà dặn tôi phải ăn uống đúng giờ, đừng làm việc quá sức.'},
     {zh:'我一直记着父亲的嘱咐：做人要诚实。',py:'Wǒ yìzhí jìzhe fùqin de zhǔfù: zuò rén yào chéngshí.',vn:'Tôi luôn ghi nhớ lời dặn của cha: làm người phải trung thực.'}
   ],
   colloFull:[
     {zh:'嘱咐下属',py:'zhǔfù xiàshǔ',vn:'dặn dò thuộc hạ'},
     {zh:'再三嘱咐',py:'zàisān zhǔfù',vn:'dặn đi dặn lại'},
     {zh:'临走时嘱咐',py:'lín zǒu shí zhǔfù',vn:'dặn lúc sắp đi'},
     {zh:'父母的嘱咐',py:'fùmǔ de zhǔfù',vn:'lời dặn của bố mẹ'},
     {zh:'嘱咐我按时吃饭',py:'zhǔfù wǒ ànshí chī fàn',vn:'dặn tôi ăn uống đúng giờ'}
   ],
   patterns:[
     {s:'嘱咐 + 某人 + 要 / 别 + V',m:'Dặn ai phải / đừng làm gì'},
     {s:'记着 / 记住 + ……的嘱咐',m:'Ghi nhớ lời dặn của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời mẹ dặn tôi luôn ghi nhớ trong lòng, chưa bao giờ quên.',answer:'妈妈的嘱咐我一直记在心里，从来没忘过。',answerPy:'Māma de zhǔfù wǒ yìzhí jì zài xīnli, cónglái méi wàngguo.',
      note:'Tân ngữ đưa lên đầu câu; 从来没 + V过 (ôn HSK 4).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Bác sĩ dặn ông tôi không những phải bỏ thuốc lá mà còn phải bỏ cả rượu.',answer:'医生嘱咐爷爷不但要戒烟，而且连酒也要戒掉。',answerPy:'Yīshēng zhǔfù yéye búdàn yào jiè yān, érqiě lián jiǔ yě yào jièdiào.',
      note:'不但……而且连……也…… (tăng tiến, ôn HSK 4–5).',pair:'连……也……'}
   ]},

  {n:41,zh:'茫茫',py:'mángmáng',pos:'Tính từ',vn:'mênh mông, mịt mù (rộng lớn, không nhìn rõ)',hv:'mang mang',em:'🌫️',lesson:1,
   explain:['Rộng lớn bao la, mờ mịt không thấy giới hạn hoặc không nhìn rõ: 大雾茫茫, 茫茫大海, 茫茫人海 (biển người mênh mông). Tính từ lặp, không thêm 很.','Văn viết, giàu hình ảnh. Có thể làm vị ngữ (大雾茫茫) hoặc định ngữ không cần 的 (茫茫草原). Liên hệ 渺茫 (mờ mịt — hy vọng).'],
   usage:'大雾 / 大海 / 白雪 + 茫茫; 茫茫 + 大海 / 草原 / 人海 / 黑夜.',
   collo:['大雾茫茫','茫茫大海','茫茫人海','白茫茫'],
   ex_zh:'江上大雾茫茫，我们弄不清情况，不要轻易出兵。',ex_py:'Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.',ex_vn:'Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân.',
   exList:[
     {zh:'江上大雾茫茫，我们弄不清情况，不要轻易出兵。',py:'Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.',vn:'Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân.'},
     {zh:'在茫茫人海中，我们能成为好朋友，真是一种缘分。',py:'Zài mángmáng rénhǎi zhōng, wǒmen néng chéngwéi hǎo péngyou, zhēn shì yì zhǒng yuánfèn.',vn:'Giữa biển người mênh mông, chúng ta có thể trở thành bạn thân, thật là một cái duyên.'},
     {zh:'一夜大雪过后，窗外白茫茫的一片。',py:'Yí yè dà xuě guòhòu, chuāng wài báimángmáng de yí piàn.',vn:'Sau một đêm tuyết lớn, ngoài cửa sổ trắng xoá một vùng.'}
   ],
   colloFull:[
     {zh:'大雾茫茫',py:'dà wù mángmáng',vn:'sương mù mịt mùng'},
     {zh:'茫茫大海',py:'mángmáng dàhǎi',vn:'biển cả mênh mông'},
     {zh:'茫茫人海',py:'mángmáng rénhǎi',vn:'biển người mênh mông'},
     {zh:'白茫茫',py:'báimángmáng',vn:'trắng xoá'},
     {zh:'茫茫草原',py:'mángmáng cǎoyuán',vn:'thảo nguyên bát ngát'}
   ],
   patterns:[
     {s:'N (大雾 / 大海) + 茫茫',m:'… mênh mông, mịt mù'},
     {s:'在茫茫 + N + 中',m:'Giữa … mênh mông'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giữa biển cả mênh mông, con thuyền nhỏ trông như một chiếc lá.',answer:'在茫茫大海中，那条小船看起来就像一片树叶。',answerPy:'Zài mángmáng dàhǎi zhōng, nà tiáo xiǎo chuán kàn qǐlai jiù xiàng yí piàn shùyè.',
      note:'看起来 = trông có vẻ; 像…… so sánh (ôn HSK 4).',pair:'看起来'},
     {promptLang:'vi',prompt:'Trên đường cao tốc sương mù mịt mùng, lái xe nhất định phải chậm lại một chút.',answer:'高速公路上大雾茫茫，开车一定要慢一点儿。',answerPy:'Gāosù gōnglù shang dà wù mángmáng, kāi chē yídìng yào màn yìdiǎnr.',
      note:'Adj + 一点儿 (so sánh nhẹ, ôn HSK 4).',pair:'Adj + 一点儿'}
   ]},

  {n:42,zh:'调动',py:'diàodòng',pos:'Động từ',vn:'điều động, huy động; khơi dậy',hv:'điều động',em:'🔄',lesson:1,
   explain:['Nghĩa 1: chuyển, điều người, quân, vật tư đến nơi cần: 调动军队 / 人员 / 工作. 调 ở đây đọc diào (không phải tiáo).','Nghĩa 2 (trừu tượng): khơi dậy, phát huy: 调动积极性 (khơi dậy tính tích cực), 调动气氛. Bài khoá: 调动了上万名弓箭手.'],
   usage:'调动 + 军队 / 人员 / 弓箭手; 调动 + 积极性 / 热情; 工作调动 (chuyển công tác).',
   collo:['调动军队','调动积极性','工作调动','调动了上万名弓箭手'],
   ex_zh:'于是，调动了上万名弓箭手一齐朝传来鼓声的方位放箭。',ex_py:'Yúshì, diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',ex_vn:'Thế là (Tào Tháo) điều động hơn một vạn cung thủ đồng loạt bắn tên về phía có tiếng trống vọng tới.',
   exList:[
     {zh:'于是，调动了上万名弓箭手一齐朝传来鼓声的方位放箭。',py:'Yúshì, diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',vn:'Thế là điều động hơn một vạn cung thủ đồng loạt bắn tên về phía có tiếng trống vọng tới.'},
     {zh:'好老师善于调动学生的积极性，让每个人都愿意开口。',py:'Hǎo lǎoshī shànyú diàodòng xuésheng de jījíxìng, ràng měi ge rén dōu yuànyì kāi kǒu.',vn:'Giáo viên giỏi biết cách khơi dậy tính tích cực của học sinh, khiến ai cũng muốn mở lời.'},
     {zh:'因为工作调动，他们全家搬到了南方。',py:'Yīnwèi gōngzuò diàodòng, tāmen quán jiā bāndàole nánfāng.',vn:'Vì chuyển công tác, cả nhà họ dọn vào miền Nam.'}
   ],
   colloFull:[
     {zh:'调动军队',py:'diàodòng jūnduì',vn:'điều động quân đội'},
     {zh:'调动积极性',py:'diàodòng jījíxìng',vn:'khơi dậy tính tích cực'},
     {zh:'工作调动',py:'gōngzuò diàodòng',vn:'chuyển công tác'},
     {zh:'调动了上万名弓箭手',py:'diàodòngle shàng wàn míng gōngjiànshǒu',vn:'điều động hơn một vạn cung thủ'},
     {zh:'调动气氛',py:'diàodòng qìfēn',vn:'khuấy động không khí'}
   ],
   patterns:[
     {s:'调动 + 人员 / 军队 + V',m:'Điều động người / quân làm gì'},
     {s:'调动 + 某人 + 的 + 积极性',m:'Khơi dậy tính tích cực của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để cứu người, thành phố đã điều động mấy trăm chiếc xe cứu thương trong một đêm.',answer:'为了救人，市里一夜之间调动了几百辆救护车。',answerPy:'Wèile jiù rén, shì li yí yè zhī jiān diàodòngle jǐ bǎi liàng jiùhùchē.',
      note:'为了……; ……之间 = trong vòng (ôn HSK 5).',pair:'为了'},
     {promptLang:'vi',prompt:'Chỉ khi khơi dậy được tính tích cực của mọi người thì công việc mới làm tốt được.',answer:'只有调动大家的积极性，工作才能做好。',answerPy:'Zhǐyǒu diàodòng dàjiā de jījíxìng, gōngzuò cái néng zuòhǎo.',
      note:'只有……才…… điều kiện cần (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:43,zh:'一齐',py:'yìqí',pos:'Phó từ',vn:'cùng lúc, đồng loạt, đồng thời',hv:'nhất tề',em:'🎯',lesson:1,
   explain:['Nhấn mạnh nhiều người / sự việc làm CÙNG MỘT LÚC: 一齐放箭, 一齐鼓掌. Đứng trước động từ; chủ ngữ phải là số nhiều.','Phân biệt: 一起 (cùng nhau — nhấn cùng NƠI, cùng làm; có thể 跟……一起), 一齐 nhấn cùng THỜI ĐIỂM, không nói 跟他一齐. Từ đánh dấu * trong sách.'],
   usage:'（大家 / 上万名弓箭手）+ 一齐 + V (放箭 / 鼓掌 / 喊 / 站起来).',
   collo:['一齐放箭','一齐鼓掌','一齐站起来','一齐喊'],
   ex_zh:'调动了上万名弓箭手一齐朝传来鼓声的方位放箭。',ex_py:'Diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',ex_vn:'Điều động hơn một vạn cung thủ đồng loạt bắn tên về phía có tiếng trống vọng tới.',
   exList:[
     {zh:'于是，调动了上万名弓箭手一齐朝传来鼓声的方位放箭，箭像雨点一样落在船上。',py:'Yúshì, diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn, jiàn xiàng yǔdiǎn yíyàng luò zài chuán shang.',vn:'Thế là điều động hơn một vạn cung thủ đồng loạt bắn về phía có tiếng trống, tên rơi xuống thuyền như mưa.'},
     {zh:'演出结束了，观众们一齐站起来鼓掌。',py:'Yǎnchū jiéshù le, guānzhòngmen yìqí zhàn qǐlai gǔzhǎng.',vn:'Buổi biểu diễn kết thúc, khán giả đồng loạt đứng dậy vỗ tay.'},
     {zh:'老师一问“谁愿意试试”，好几个同学一齐举起了手。',py:'Lǎoshī yí wèn “shéi yuànyì shìshi”, hǎo jǐ ge tóngxué yìqí jǔqǐle shǒu.',vn:'Thầy vừa hỏi "Ai muốn thử?", mấy bạn liền đồng loạt giơ tay.'}
   ],
   colloFull:[
     {zh:'一齐放箭',py:'yìqí fàng jiàn',vn:'đồng loạt bắn tên'},
     {zh:'一齐鼓掌',py:'yìqí gǔzhǎng',vn:'đồng loạt vỗ tay'},
     {zh:'一齐站起来',py:'yìqí zhàn qǐlai',vn:'cùng đứng dậy'},
     {zh:'一齐喊',py:'yìqí hǎn',vn:'cùng hô lên'},
     {zh:'一齐举起了手',py:'yìqí jǔqǐle shǒu',vn:'đồng loạt giơ tay'}
   ],
   patterns:[
     {s:'（số nhiều）+ 一齐 + V',m:'Đồng loạt làm gì (cùng một lúc)'},
     {s:'一齐 ≠ 跟……一起',m:'一齐 không đi với 跟 như 一起'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe thấy tiếng chuông, học sinh các lớp đồng loạt chạy ra sân.',answer:'听到铃声，各班的学生一齐跑向操场。',answerPy:'Tīngdào língshēng, gè bān de xuésheng yìqí pǎoxiàng cāochǎng.',
      note:'V + 向 + nơi chốn (hướng tới, ôn HSK 5).',pair:'V向'},
     {promptLang:'vi',prompt:'Mọi người đồng thanh hô "Cố lên", ngay cả đội bạn cũng ngây người ra.',answer:'大家一齐喊“加油”，连对手都愣住了。',answerPy:'Dàjiā yìqí hǎn “jiāyóu”, lián duìshǒu dōu lèngzhù le.',
      note:'连……都…… (ôn HSK 4); V + 住 (bổ ngữ kết quả).',pair:'连……都……'}
   ]},

  {n:44,zh:'方位',py:'fāngwèi',pos:'Danh từ',vn:'hướng, phía, phương vị (vị trí theo hướng)',hv:'phương vị',em:'🧭',lesson:1,
   explain:['Hướng và vị trí: đông, tây, nam, bắc, trên, dưới, trước, sau…: 方 = phương, hướng; 位 = vị trí. 方位词 = từ chỉ phương vị (上, 里, 旁边…).','Hay đi với 判断 / 辨别 (phân biệt) / 确定 + 方位; 朝……的方位 + V. Bài khoá: 朝传来鼓声的方位放箭.'],
   usage:'朝 / 向 + ……的方位 + V; 判断 / 辨别 / 确定 + 方位; 方位词.',
   collo:['传来鼓声的方位','辨别方位','确定方位','方位词'],
   ex_zh:'弓箭手一齐朝传来鼓声的方位放箭。',ex_py:'Gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',ex_vn:'Cung thủ đồng loạt bắn tên về phía có tiếng trống vọng tới.',
   exList:[
     {zh:'调动了上万名弓箭手一齐朝传来鼓声的方位放箭。',py:'Diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',vn:'Điều động hơn một vạn cung thủ đồng loạt bắn tên về hướng có tiếng trống vọng tới.'},
     {zh:'在森林里迷路时，可以根据太阳的位置来辨别方位。',py:'Zài sēnlín li mílù shí, kěyǐ gēnjù tàiyáng de wèizhi lái biànbié fāngwèi.',vn:'Khi lạc trong rừng, có thể dựa vào vị trí mặt trời để phân biệt phương hướng.'},
     {zh:'“上、下、里、外”这些词在语法上叫方位词。',py:'“Shàng, xià, lǐ, wài” zhèxiē cí zài yǔfǎ shang jiào fāngwèicí.',vn:'Các từ như "trên, dưới, trong, ngoài" trong ngữ pháp gọi là phương vị từ.'}
   ],
   colloFull:[
     {zh:'传来鼓声的方位',py:'chuánlái gǔshēng de fāngwèi',vn:'hướng tiếng trống vọng tới'},
     {zh:'辨别方位',py:'biànbié fāngwèi',vn:'phân biệt phương hướng'},
     {zh:'确定方位',py:'quèdìng fāngwèi',vn:'xác định phương vị'},
     {zh:'方位词',py:'fāngwèicí',vn:'từ chỉ phương vị'},
     {zh:'判断方位',py:'pànduàn fāngwèi',vn:'phán đoán phương hướng'}
   ],
   patterns:[
     {s:'朝 + ……的方位 + V',m:'Làm gì về hướng …'},
     {s:'根据……来 + 辨别 / 判断 + 方位',m:'Dựa vào … để xác định phương hướng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà tôi không phân biệt được phương hướng, ra khỏi nhà là dễ bị lạc.',answer:'我奶奶辨别不了方位，一出门就容易迷路。',answerPy:'Wǒ nǎinai biànbié bu liǎo fāngwèi, yì chūmén jiù róngyì mílù.',
      note:'V + 不了; 一……就…… (ôn HSK 4).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhờ có điện thoại định vị, dù ở đâu chúng ta cũng xác định được vị trí của mình.',answer:'有了手机定位，无论在哪儿，我们都能确定自己的方位。',answerPy:'Yǒule shǒujī dìngwèi, wúlùn zài nǎr, wǒmen dōu néng quèdìng zìjǐ de fāngwèi.',
      note:'无论……都…… (ôn HSK 4).',pair:'无论……都……'}
   ]},

  {n:45,zh:'高涨',py:'gāozhǎng',pos:'Tính từ / Động từ',vn:'dâng cao, lên cao, hừng hực (tinh thần, giá cả)',hv:'cao trướng',em:'🔥',lesson:1,
   explain:['Nghĩa gốc: nước dâng cao. Nghĩa thường dùng: (tinh thần, cảm xúc, phong trào) lên cao, sôi sục: 情绪高涨, 热情高涨, 士气高涨; (giá cả) tăng vọt: 物价高涨.','涨 đọc zhǎng (tăng). Chủ ngữ là danh từ trừu tượng; không nói 人高涨. Bài khoá: 士兵们情绪高涨.'],
   usage:'情绪 / 热情 / 士气 / 物价 + 高涨; 高涨的 + 热情; 日益高涨.',
   collo:['情绪高涨','热情高涨','物价高涨','士气高涨'],
   ex_zh:'士兵们情绪高涨，依旧敲鼓高喊，逼近曹军去受箭。',ex_py:'Shìbīngmen qíngxù gāozhǎng, yījiù qiāo gǔ gāo hǎn, bījìn Cáo jūn qù shòu jiàn.',ex_vn:'Binh sĩ khí thế hừng hực, vẫn đánh trống hò hét, áp sát quân Tào để hứng tên.',
   exList:[
     {zh:'一会儿，诸葛亮下令把船掉过来。士兵们情绪高涨，依旧敲鼓高喊，逼近曹军去受箭。',py:'Yíhuìr, Zhūgě Liàng xià lìng bǎ chuán diào guòlai. Shìbīngmen qíngxù gāozhǎng, yījiù qiāo gǔ gāo hǎn, bījìn Cáo jūn qù shòu jiàn.',vn:'Một lát sau, Gia Cát Lượng ra lệnh quay thuyền lại. Binh sĩ khí thế hừng hực, vẫn đánh trống hò hét, áp sát quân Tào để hứng tên.'},
     {zh:'听说要去海边春游，同学们的热情一下子高涨起来。',py:'Tīngshuō yào qù hǎibiān chūnyóu, tóngxuémen de rèqíng yíxiàzi gāozhǎng qǐlai.',vn:'Nghe nói sẽ đi dã ngoại ở biển, nhiệt tình của cả lớp lập tức dâng cao.'},
     {zh:'这几年房价不断高涨，年轻人买房越来越难了。',py:'Zhè jǐ nián fángjià búduàn gāozhǎng, niánqīngrén mǎi fáng yuè lái yuè nán le.',vn:'Mấy năm nay giá nhà liên tục tăng cao, người trẻ mua nhà ngày càng khó.'}
   ],
   colloFull:[
     {zh:'情绪高涨',py:'qíngxù gāozhǎng',vn:'khí thế hừng hực, hưng phấn'},
     {zh:'热情高涨',py:'rèqíng gāozhǎng',vn:'nhiệt tình dâng cao'},
     {zh:'物价高涨',py:'wùjià gāozhǎng',vn:'giá cả tăng vọt'},
     {zh:'士气高涨',py:'shìqì gāozhǎng',vn:'sĩ khí lên cao'},
     {zh:'高涨起来',py:'gāozhǎng qǐlai',vn:'dâng cao lên'}
   ],
   patterns:[
     {s:'情绪 / 热情 / 士气 + 高涨',m:'Tinh thần / nhiệt tình / sĩ khí lên cao'},
     {s:'（一下子）+ 高涨起来',m:'(Bỗng chốc) dâng cao lên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội nhà vừa ghi bàn, khán giả trên sân lập tức sôi sục hẳn lên.',answer:'主队刚进了一个球，场上观众的情绪马上高涨起来。',answerPy:'Zhǔduì gāng jìnle yí ge qiú, chǎng shang guānzhòng de qíngxù mǎshàng gāozhǎng qǐlai.',
      note:'刚……, 马上……; Adj + 起来 (bắt đầu, ôn HSK 4).',pair:'Adj + 起来'},
     {promptLang:'vi',prompt:'Theo đà giá cả tăng cao, cuộc sống của nhiều gia đình ngày càng khó khăn.',answer:'随着物价高涨，很多家庭的生活越来越困难了。',answerPy:'Suízhe wùjià gāozhǎng, hěn duō jiātíng de shēnghuó yuè lái yuè kùnnan le.',
      note:'随着…… (ôn HSK 4); 越来越…….',pair:'随着'}
   ]},

  {n:46,zh:'凌晨',py:'língchén',pos:'Danh từ',vn:'rạng sáng, lúc tờ mờ sáng (khoảng sau nửa đêm đến trước khi trời sáng)',hv:'lăng thần',em:'🌅',lesson:1,
   explain:['Khoảng thời gian từ sau nửa đêm đến trước bình minh: 凌晨两点 = 2 giờ sáng. Khác 早上 / 清晨 (sáng sớm, trời đã sáng).','Làm trạng ngữ chỉ thời gian ở đầu câu: 凌晨，雾还笼罩着江面. Hay đi với giờ cụ thể: 凌晨三点, 凌晨时分.'],
   usage:'凌晨 + giờ (凌晨三点); 凌晨，……; 凌晨时分; 直到凌晨.',
   collo:['凌晨三点','凌晨时分','直到凌晨','凌晨出发'],
   ex_zh:'凌晨，雾还笼罩着江面，船两边的草捆儿上插满了箭。',ex_py:'Língchén, wù hái lǒngzhàozhe jiāngmiàn, chuán liǎngbiān de cǎokǔnr shang chāmǎnle jiàn.',ex_vn:'Rạng sáng, sương mù vẫn còn bao phủ mặt sông, những bó cỏ hai bên thuyền đã cắm đầy tên.',
   exList:[
     {zh:'凌晨，雾还笼罩着江面，船两边的草捆儿上插满了箭。',py:'Língchén, wù hái lǒngzhàozhe jiāngmiàn, chuán liǎngbiān de cǎokǔnr shang chāmǎnle jiàn.',vn:'Rạng sáng, sương mù vẫn còn bao phủ mặt sông, những bó cỏ hai bên thuyền đã cắm đầy tên.'},
     {zh:'凌晨三点，天还没亮，他们就启程了。',py:'Língchén sān diǎn, tiān hái méi liàng, tāmen jiù qǐchéng le.',vn:'Ba giờ sáng, trời còn chưa sáng, họ đã lên đường rồi.'},
     {zh:'为了赶作业，他昨天一直忙到凌晨才睡。',py:'Wèile gǎn zuòyè, tā zuótiān yìzhí mángdào língchén cái shuì.',vn:'Để làm cho kịp bài tập, hôm qua cậu ấy bận đến tận rạng sáng mới ngủ.'}
   ],
   colloFull:[
     {zh:'凌晨三点',py:'língchén sān diǎn',vn:'ba giờ sáng'},
     {zh:'凌晨时分',py:'língchén shífēn',vn:'lúc rạng sáng'},
     {zh:'直到凌晨',py:'zhídào língchén',vn:'mãi đến rạng sáng'},
     {zh:'凌晨出发',py:'língchén chūfā',vn:'xuất phát lúc rạng sáng'},
     {zh:'忙到凌晨',py:'mángdào língchén',vn:'bận đến rạng sáng'}
   ],
   patterns:[
     {s:'凌晨 + giờ + ……就……',m:'Mới … giờ sáng đã …'},
     {s:'V + 到凌晨 + 才……',m:'Làm đến tận rạng sáng mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để xem mặt trời mọc, chúng tôi ba giờ sáng đã bắt đầu leo núi.',answer:'为了看日出，我们凌晨三点就开始爬山了。',answerPy:'Wèile kàn rìchū, wǒmen língchén sān diǎn jiù kāishǐ pá shān le.',
      note:'就 nhấn mạnh sớm (ôn HSK 4).',pair:'就 (sớm)'},
     {promptLang:'vi',prompt:'Anh ấy làm thêm đến tận rạng sáng mới về nhà, hèn chi hôm nay trông rất mệt.',answer:'他加班加到凌晨才回家，难怪今天看起来很累。',answerPy:'Tā jiā bān jiādào língchén cái huí jiā, nánguài jīntiān kàn qǐlai hěn lèi.',
      note:'才 nhấn mạnh muộn; 难怪 = hèn chi (ôn HSK 4).',pair:'难怪'}
   ]},

  {n:47,zh:'笼罩',py:'lǒngzhào',pos:'Động từ',vn:'bao phủ, che phủ, bao trùm',hv:'lung tráo',em:'🌁',lesson:1,
   explain:['Như một cái lồng (笼) chụp (罩) lên trên, phủ kín toàn bộ: 雾笼罩着江面, 夜色笼罩着城市. Nghĩa bóng: không khí, cảm xúc bao trùm: 笼罩在悲伤之中.','Hay dùng với 着 (trạng thái kéo dài) hoặc cấu trúc 被……笼罩 / 笼罩在……中. 笼 ở đây đọc lǒng.'],
   usage:'（雾 / 夜色 / 乌云）+ 笼罩着 + nơi chốn; 被……笼罩; 笼罩在……之中.',
   collo:['笼罩着江面','被大雾笼罩','笼罩在……之中','夜色笼罩'],
   ex_zh:'凌晨，雾还笼罩着江面。',ex_py:'Língchén, wù hái lǒngzhàozhe jiāngmiàn.',ex_vn:'Rạng sáng, sương mù vẫn còn bao phủ mặt sông.',
   exList:[
     {zh:'凌晨，雾还笼罩着江面，船两边的草捆儿上插满了箭。',py:'Língchén, wù hái lǒngzhàozhe jiāngmiàn, chuán liǎngbiān de cǎokǔnr shang chāmǎnle jiàn.',vn:'Rạng sáng, sương mù vẫn còn bao phủ mặt sông, những bó cỏ hai bên thuyền đã cắm đầy tên.'},
     {zh:'早上起来一看，整座城市都被大雾笼罩了。',py:'Zǎoshang qǐlai yí kàn, zhěng zuò chéngshì dōu bèi dà wù lǒngzhào le.',vn:'Sáng dậy nhìn ra, cả thành phố đều bị sương mù dày đặc bao phủ.'},
     {zh:'听到这个坏消息，全家都笼罩在悲伤之中。',py:'Tīngdào zhège huài xiāoxi, quán jiā dōu lǒngzhào zài bēishāng zhī zhōng.',vn:'Nghe tin dữ này, cả nhà chìm trong nỗi buồn.'}
   ],
   colloFull:[
     {zh:'笼罩着江面',py:'lǒngzhàozhe jiāngmiàn',vn:'bao phủ mặt sông'},
     {zh:'被大雾笼罩',py:'bèi dà wù lǒngzhào',vn:'bị sương mù bao phủ'},
     {zh:'笼罩在……之中',py:'lǒngzhào zài……zhī zhōng',vn:'chìm trong …'},
     {zh:'夜色笼罩',py:'yèsè lǒngzhào',vn:'màn đêm bao trùm'},
     {zh:'乌云笼罩',py:'wūyún lǒngzhào',vn:'mây đen bao phủ'}
   ],
   patterns:[
     {s:'N (雾 / 夜色) + 笼罩着 + nơi chốn',m:'… bao phủ …'},
     {s:'笼罩在 + (悲伤 / 恐惧) + 之中',m:'Chìm trong (nỗi buồn / sợ hãi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mây đen bao phủ bầu trời, xem ra sắp mưa to rồi.',answer:'乌云笼罩着天空，看样子要下大雨了。',answerPy:'Wūyún lǒngzhàozhe tiānkōng, kàn yàngzi yào xià dà yǔ le.',
      note:'看样子 = xem ra; 要……了 = sắp (ôn HSK 4).',pair:'要……了'},
     {promptLang:'vi',prompt:'Tuy cả thành phố chìm trong màn đêm, nhưng con phố đi bộ vẫn náo nhiệt vô cùng.',answer:'虽然整座城市都笼罩在夜色之中，步行街上却依然热闹非凡。',answerPy:'Suīrán zhěng zuò chéngshì dōu lǒngzhào zài yèsè zhī zhōng, bùxíngjiē shang què yīrán rènao fēifán.',
      note:'虽然……却……; 依然 = vẫn (văn viết, ôn HSK 5).',pair:'虽然……却……'}
   ]},

  {n:48,zh:'启程',py:'qǐchéng',pos:'Động từ',vn:'khởi hành, lên đường',hv:'khải trình',em:'🚢',lesson:1,
   explain:['Bắt đầu chuyến đi, lên đường: 启 = bắt đầu, mở; 程 = đường đi. Văn viết, trang trọng hơn 出发 / 动身. Không mang tân ngữ chỉ nơi đến; dùng 启程去 / 前往 / 返回 + nơi chốn.','Bài khoá: 诸葛亮命令士兵启程返航 (lên đường quay về). Trái nghĩa: 抵达 / 到达.'],
   usage:'（某时）+ 启程; 启程 + 返航 / 回国 / 前往……; 命令……启程; 即将启程.',
   collo:['启程返航','即将启程','凌晨启程','启程回国'],
   ex_zh:'诸葛亮命令士兵启程返航。',ex_py:'Zhūgě Liàng mìnglìng shìbīng qǐchéng fǎnháng.',ex_vn:'Gia Cát Lượng ra lệnh cho binh sĩ lên đường quay về.',
   exList:[
     {zh:'诸葛亮命令士兵启程返航。曹操知道上当了，可诸葛亮的船已经走远了。',py:'Zhūgě Liàng mìnglìng shìbīng qǐchéng fǎnháng. Cáo Cāo zhīdào shàngdàng le, kě Zhūgě Liàng de chuán yǐjīng zǒuyuǎn le.',vn:'Gia Cát Lượng ra lệnh binh sĩ lên đường trở về. Tào Tháo biết mình mắc lừa, nhưng thuyền của Gia Cát Lượng đã đi xa rồi.'},
     {zh:'凌晨三点，天还没亮，他们就启程了。',py:'Língchén sān diǎn, tiān hái méi liàng, tāmen jiù qǐchéng le.',vn:'Ba giờ sáng, trời còn chưa sáng, họ đã khởi hành.'},
     {zh:'代表团明天上午启程前往北京参加会议。',py:'Dàibiǎotuán míngtiān shàngwǔ qǐchéng qiánwǎng Běijīng cānjiā huìyì.',vn:'Sáng mai đoàn đại biểu lên đường đi Bắc Kinh dự hội nghị.'}
   ],
   colloFull:[
     {zh:'启程返航',py:'qǐchéng fǎnháng',vn:'lên đường quay về'},
     {zh:'即将启程',py:'jíjiāng qǐchéng',vn:'sắp khởi hành'},
     {zh:'凌晨启程',py:'língchén qǐchéng',vn:'khởi hành lúc rạng sáng'},
     {zh:'启程回国',py:'qǐchéng huí guó',vn:'lên đường về nước'},
     {zh:'启程前往北京',py:'qǐchéng qiánwǎng Běijīng',vn:'lên đường đi Bắc Kinh'}
   ],
   patterns:[
     {s:'启程 + 前往 / 返回 + nơi chốn',m:'Lên đường đi / về …'},
     {s:'命令 + 某人 + 启程',m:'Ra lệnh cho ai lên đường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đoàn du lịch sắp khởi hành, xin các vị kiểm tra lại hộ chiếu.',answer:'旅游团即将启程，请各位再检查一下护照。',answerPy:'Lǚyóutuán jíjiāng qǐchéng, qǐng gèwèi zài jiǎnchá yíxià hùzhào.',
      note:'即将 + V (điểm ngữ pháp 1); V + 一下.',pair:'即将'},
     {promptLang:'vi',prompt:'Họ vừa kết thúc chuyến khảo sát liền lập tức lên đường về nước.',answer:'他们一结束考察，就立即启程回国了。',answerPy:'Tāmen yì jiéshù kǎochá, jiù lìjí qǐchéng huí guó le.',
      note:'一……就…… (ôn HSK 4); 立即 = lập tức.',pair:'一……就……'}
   ]},

  {n:49,zh:'大致',py:'dàzhì',pos:'Phó từ / Tính từ',vn:'đại khái, khoảng chừng; sơ lược',hv:'đại trí',em:'📐',lesson:1,
   explain:['Phó từ: (1) nói về tình hình chủ yếu, phần lớn: 大家的经历大致相同; (2) đại khái, không kỹ: 大致算了算; (3) ước lượng không thật chính xác: 大致得三个月. Tính từ: 大致的想法 / 情况 (ý chung, tình hình sơ bộ).','Phân biệt với 大体 (xem phần 词语辨析): 大体 KHÔNG dùng cho ước lượng số lượng và KHÔNG làm tính từ. Bài khoá: 大致算了算，船上的箭共有十万多支.'],
   usage:'大致 + 相同 / 了解 / 算了算; 大致 + (得 / 需要) + số lượng; 大致的 + 想法 / 情况 / 内容.',
   collo:['大致算了算','大致相同','大致的想法','大致了解'],
   ex_zh:'大致算了算，船上的箭共有十万多支。',ex_py:'Dàzhì suànle suàn, chuán shang de jiàn gòng yǒu shíwàn duō zhī.',ex_vn:'Tính sơ qua, tên trên thuyền có tất cả hơn mười vạn mũi.',
   exList:[
     {zh:'大致算了算，船上的箭共有十万多支，诸葛亮圆满完成了任务。',py:'Dàzhì suànle suàn, chuán shang de jiàn gòng yǒu shíwàn duō zhī, Zhūgě Liàng yuánmǎn wánchéngle rènwu.',vn:'Tính sơ qua, tên trên thuyền có tất cả hơn mười vạn mũi, Gia Cát Lượng đã hoàn thành trọn vẹn nhiệm vụ.'},
     {zh:'要完成这项艰巨的工作，大致得三个月。',py:'Yào wánchéng zhè xiàng jiānjù de gōngzuò, dàzhì děi sān ge yuè.',vn:'Để hoàn thành công việc gian nan này, ước chừng phải mất ba tháng.'},
     {zh:'这只是一个大致的想法，具体怎么做我们还要再商量。',py:'Zhè zhǐ shì yí ge dàzhì de xiǎngfǎ, jùtǐ zěnme zuò wǒmen hái yào zài shāngliang.',vn:'Đây mới chỉ là ý tưởng sơ bộ, cụ thể làm thế nào chúng ta còn phải bàn thêm.'}
   ],
   colloFull:[
     {zh:'大致算了算',py:'dàzhì suànle suàn',vn:'tính sơ qua'},
     {zh:'大致相同',py:'dàzhì xiāngtóng',vn:'đại khái giống nhau'},
     {zh:'大致的想法',py:'dàzhì de xiǎngfǎ',vn:'ý tưởng sơ bộ'},
     {zh:'大致了解',py:'dàzhì liǎojiě',vn:'hiểu đại khái'},
     {zh:'大致得三个月',py:'dàzhì děi sān ge yuè',vn:'ước chừng mất ba tháng'}
   ],
   patterns:[
     {s:'大致 + V（算了算 / 了解了一下）',m:'Làm gì một cách sơ qua'},
     {s:'大致 + (得 / 需要) + số lượng',m:'Ước chừng cần bao nhiêu (大体 không dùng được)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tính sơ qua, chuyến du lịch này phải tiêu khoảng năm nghìn tệ.',answer:'我大致算了算，这次旅行得花五千块钱左右。',answerPy:'Wǒ dàzhì suànle suàn, zhè cì lǚxíng děi huā wǔqiān kuài qián zuǒyòu.',
      note:'Động từ lặp 算了算; 得 (děi) + V + số tiền (ôn HSK 4).',pair:'得 (děi)'},
     {promptLang:'vi',prompt:'Tuy mỗi người nói một kiểu, nhưng ý của mọi người đại khái giống nhau.',answer:'虽然每个人的说法不一样，但大家的意思大致相同。',answerPy:'Suīrán měi ge rén de shuōfǎ bù yíyàng, dàn dàjiā de yìsi dàzhì xiāngtóng.',
      note:'虽然……但……; 大致相同 = 大体相同 (điểm chung).',pair:'虽然……但……'}
   ]},

  {n:50,zh:'圆满',py:'yuánmǎn',pos:'Tính từ',vn:'viên mãn, trọn vẹn, tốt đẹp (không thiếu sót)',hv:'viên mãn',em:'✅',lesson:1,
   explain:['Đầy đủ, trọn vẹn, làm người ta hài lòng: 圆 = tròn, 满 = đầy. Hay làm trạng ngữ: 圆满完成 (hoàn thành trọn vẹn), 圆满结束, 圆满解决.','Cũng làm vị ngữ / định ngữ: 结局很圆满, 圆满的答案. Lời chúc: 祝会议圆满成功.'],
   usage:'圆满 + 完成 / 结束 / 解决 / 成功; ……的结局很圆满; 圆满的 + 答复 / 结果.',
   collo:['圆满完成','圆满结束','圆满成功','圆满的结局'],
   ex_zh:'诸葛亮圆满完成了任务。',ex_py:'Zhūgě Liàng yuánmǎn wánchéngle rènwu.',ex_vn:'Gia Cát Lượng đã hoàn thành nhiệm vụ một cách trọn vẹn.',
   exList:[
     {zh:'大致算了算，船上的箭共有十万多支，诸葛亮圆满完成了任务。',py:'Dàzhì suànle suàn, chuán shang de jiàn gòng yǒu shíwàn duō zhī, Zhūgě Liàng yuánmǎn wánchéngle rènwu.',vn:'Tính sơ qua, tên trên thuyền có hơn mười vạn mũi, Gia Cát Lượng đã hoàn thành nhiệm vụ trọn vẹn.'},
     {zh:'经过三天的讨论，这次国际会议圆满结束了。',py:'Jīngguò sān tiān de tǎolùn, zhè cì guójì huìyì yuánmǎn jiéshù le.',vn:'Trải qua ba ngày thảo luận, hội nghị quốc tế lần này đã kết thúc tốt đẹp.'},
     {zh:'这个故事的结局很圆满，有情人终成眷属。',py:'Zhège gùshi de jiéjú hěn yuánmǎn, yǒuqíngrén zhōng chéng juànshǔ.',vn:'Cái kết của câu chuyện này rất viên mãn, những người yêu nhau cuối cùng đã thành quyến thuộc.'}
   ],
   colloFull:[
     {zh:'圆满完成',py:'yuánmǎn wánchéng',vn:'hoàn thành trọn vẹn'},
     {zh:'圆满结束',py:'yuánmǎn jiéshù',vn:'kết thúc tốt đẹp'},
     {zh:'圆满成功',py:'yuánmǎn chénggōng',vn:'thành công tốt đẹp'},
     {zh:'圆满的结局',py:'yuánmǎn de jiéjú',vn:'cái kết viên mãn'},
     {zh:'圆满解决',py:'yuánmǎn jiějué',vn:'giải quyết ổn thoả'}
   ],
   patterns:[
     {s:'圆满 + 完成 / 结束 / 解决 + ……',m:'Hoàn thành / kết thúc / giải quyết trọn vẹn'},
     {s:'祝 + ……+ 圆满成功',m:'Chúc … thành công tốt đẹp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ sự nỗ lực của mọi người, hoạt động lần này đã kết thúc tốt đẹp.',answer:'在大家的努力下，这次活动圆满结束了。',answerPy:'Zài dàjiā de nǔlì xià, zhè cì huódòng yuánmǎn jiéshù le.',
      note:'在……下 = dưới (sự) … (ôn HSK 5).',pair:'在……下'},
     {promptLang:'vi',prompt:'Chỉ khi mọi người đồng lòng hợp sức, chúng ta mới có thể hoàn thành nhiệm vụ trọn vẹn.',answer:'只有大家齐心协力，我们才能圆满完成任务。',answerPy:'Zhǐyǒu dàjiā qíxīn-xiélì, wǒmen cái néng yuánmǎn wánchéng rènwu.',
      note:'只有……才…… (ôn HSK 4); 齐心协力 (ôn HSK 5).',pair:'只有……才……'}
   ]},

  {n:51,zh:'叹气',py:'tàn qì',pos:'Động từ (li hợp)',vn:'thở dài',hv:'thán khí',em:'😮‍💨',lesson:1,
   explain:['Thở ra một hơi dài vì buồn, thất vọng, bất lực hoặc bực bội: 叹 = than, 气 = hơi. Li hợp: 叹了一口气, 叹着气 (vừa thở dài vừa …).','Hay làm trạng thái đi kèm: 叹着气说 (thở dài nói). Bài khoá: 周瑜叹着气说：“唉，他真是天才……”.'],
   usage:'叹了一口气; 叹着气 + 说 / 摇头; 直叹气; 唉声叹气 (thở ngắn than dài).',
   collo:['叹着气说','叹了一口气','直叹气','唉声叹气'],
   ex_zh:'周瑜叹着气说：“唉，他真是天才，确实比我高明！”',ex_py:'Zhōu Yú tànzhe qì shuō: “Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!”',ex_vn:'Chu Du thở dài nói: "Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!"',
   exList:[
     {zh:'鲁肃见了周瑜，告诉他借箭的经过。周瑜叹着气说：“唉，他真是天才，确实比我高明！”',py:'Lǔ Sù jiànle Zhōu Yú, gàosu tā jiè jiàn de jīngguò. Zhōu Yú tànzhe qì shuō: “Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!”',vn:'Lỗ Túc gặp Chu Du, kể lại đầu đuôi chuyện mượn tên. Chu Du thở dài nói: "Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!"'},
     {zh:'这件事可真不好办，我叹着气说：“我实在帮不了你。”',py:'Zhè jiàn shì kě zhēn bù hǎo bàn, wǒ tànzhe qì shuō: “Wǒ shízài bāng bu liǎo nǐ.”',vn:'Việc này thật khó làm, tôi thở dài nói: "Tôi thật sự không giúp được anh."'},
     {zh:'看着考试成绩，他深深地叹了一口气。',py:'Kànzhe kǎoshì chéngjì, tā shēnshēn de tànle yì kǒu qì.',vn:'Nhìn điểm thi, cậu ấy thở dài một hơi thật sâu.'}
   ],
   colloFull:[
     {zh:'叹着气说',py:'tànzhe qì shuō',vn:'thở dài nói'},
     {zh:'叹了一口气',py:'tànle yì kǒu qì',vn:'thở dài một hơi'},
     {zh:'直叹气',py:'zhí tàn qì',vn:'thở dài liên tục'},
     {zh:'唉声叹气',py:'āishēng-tànqì',vn:'thở ngắn than dài'},
     {zh:'深深地叹了一口气',py:'shēnshēn de tànle yì kǒu qì',vn:'thở dài thườn thượt'}
   ],
   patterns:[
     {s:'叹着气 + 说 / 摇头',m:'Vừa thở dài vừa nói / lắc đầu'},
     {s:'叹了一口气',m:'Thở dài một hơi (li hợp: 叹 + 了 + 一口 + 气)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thở ngắn than dài cũng vô ích, chi bằng nghĩ xem nên giải quyết thế nào.',answer:'唉声叹气也没用，还不如想想怎么解决。',answerPy:'Āishēng-tànqì yě méi yòng, hái bùrú xiǎngxiang zěnme jiějué.',
      note:'还不如…… = chi bằng (ôn HSK 5; 倒不如 ôn HSK 6 bài 20).',pair:'不如'},
     {promptLang:'vi',prompt:'Mẹ nhìn căn phòng bừa bộn, không kìm được thở dài một hơi.',answer:'妈妈看着乱七八糟的房间，忍不住叹了一口气。',answerPy:'Māma kànzhe luànqībāzāo de fángjiān, rěn bu zhù tànle yì kǒu qì.',
      note:'忍不住 + V = không nhịn được (ôn HSK 4); V着 + V (đồng thời).',pair:'忍不住'}
   ]},

  {n:52,zh:'天才',py:'tiāncái',pos:'Danh từ',vn:'thiên tài; tài năng thiên bẩm',hv:'thiên tài',em:'🌟',lesson:1,
   explain:['Người có tài năng, trí tuệ xuất chúng bẩm sinh: 他真是天才. Cũng chỉ bản thân tài năng thiên bẩm: 音乐天才 / 有语言天才.','Có thể làm định ngữ trực tiếp: 天才少年, 天才画家. Câu nổi tiếng: 天才是百分之一的灵感加百分之九十九的汗水.'],
   usage:'……真是（个）天才; 音乐 / 数学 + 天才; 天才 + 少年 / 画家; 有……的天才.',
   collo:['真是天才','数学天才','天才少年','音乐天才'],
   ex_zh:'唉，他真是天才，确实比我高明！',ex_py:'Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!',ex_vn:'Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!',
   exList:[
     {zh:'周瑜叹着气说：“唉，他真是天才，确实比我高明！”',py:'Zhōu Yú tànzhe qì shuō: “Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!”',vn:'Chu Du thở dài nói: "Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!"'},
     {zh:'这个十岁的孩子就上了大学，大家都叫他“天才少年”。',py:'Zhège shí suì de háizi jiù shàngle dàxué, dàjiā dōu jiào tā “tiāncái shàonián”.',vn:'Đứa trẻ mười tuổi này đã vào đại học, mọi người đều gọi em là "thần đồng".'},
     {zh:'天才是百分之一的灵感加百分之九十九的汗水。',py:'Tiāncái shì bǎi fēn zhī yī de línggǎn jiā bǎi fēn zhī jiǔshíjiǔ de hànshuǐ.',vn:'Thiên tài là một phần trăm cảm hứng cộng với chín mươi chín phần trăm mồ hôi.'}
   ],
   colloFull:[
     {zh:'真是天才',py:'zhēn shì tiāncái',vn:'đúng là thiên tài'},
     {zh:'数学天才',py:'shùxué tiāncái',vn:'thiên tài toán học'},
     {zh:'天才少年',py:'tiāncái shàonián',vn:'thần đồng, thiếu niên thiên tài'},
     {zh:'音乐天才',py:'yīnyuè tiāncái',vn:'thiên tài âm nhạc'},
     {zh:'有语言天才',py:'yǒu yǔyán tiāncái',vn:'có năng khiếu ngôn ngữ bẩm sinh'}
   ],
   patterns:[
     {s:'某人 + 真是（个）天才',m:'Ai đó đúng là thiên tài'},
     {s:'N (音乐 / 数学) + 天才',m:'Thiên tài về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù là thiên tài, không nỗ lực thì cũng không thể thành công.',answer:'即使是天才，不努力也不可能成功。',answerPy:'Jíshǐ shì tiāncái, bù nǔlì yě bù kěnéng chénggōng.',
      note:'即使……也…… (ôn HSK 5).',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Cậu ấy chưa học đàn bao giờ mà nghe một lần đã đánh được, đúng là thiên tài âm nhạc.',answer:'他从来没学过钢琴，听一遍就会弹，真是个音乐天才。',answerPy:'Tā cónglái méi xuéguo gāngqín, tīng yí biàn jiù huì tán, zhēn shì ge yīnyuè tiāncái.',
      note:'从来没……过; V + 一遍就…… (ôn HSK 4).',pair:'从来没……过'}
   ]},

  {n:53,zh:'高明',py:'gāomíng',pos:'Tính từ',vn:'cao minh, tài giỏi, cao tay (hiểu biết, kỹ năng hơn người)',hv:'cao minh',em:'🧠',lesson:1,
   explain:['(Kiến thức, kỹ năng, cách làm) cao siêu, giỏi hơn người thường: 医术高明, 办法高明, 比我高明. Có thể dùng như danh từ chỉ người giỏi: 另请高明 (mời người giỏi hơn — lời từ chối khiêm tốn).','Hay dùng trong so sánh: A 比 B 高明. Bài khoá: 他真是天才，确实比我高明.'],
   usage:'A + 比 + B + 高明; (医术 / 手段 / 办法) + 高明; 高明的 + 医生 / 主意; 另请高明.',
   collo:['比我高明','医术高明','高明的主意','另请高明'],
   ex_zh:'他真是天才，确实比我高明！',ex_py:'Tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!',ex_vn:'Hắn đúng là thiên tài, quả thật cao minh hơn ta!',
   exList:[
     {zh:'周瑜叹着气说：“唉，他真是天才，确实比我高明！”',py:'Zhōu Yú tànzhe qì shuō: “Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!”',vn:'Chu Du thở dài nói: "Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!"'},
     {zh:'这位老中医医术高明，很多病人从外地专门来找他看病。',py:'Zhè wèi lǎo zhōngyī yīshù gāomíng, hěn duō bìngrén cóng wàidì zhuānmén lái zhǎo tā kàn bìng.',vn:'Vị lương y già này y thuật cao minh, nhiều bệnh nhân từ nơi khác cất công đến tìm ông khám bệnh.'},
     {zh:'这件事我实在办不了，您还是另请高明吧。',py:'Zhè jiàn shì wǒ shízài bàn bu liǎo, nín háishi lìng qǐng gāomíng ba.',vn:'Việc này tôi thật sự không làm nổi, ngài nên mời người giỏi hơn thì hơn.'}
   ],
   colloFull:[
     {zh:'比我高明',py:'bǐ wǒ gāomíng',vn:'giỏi hơn tôi'},
     {zh:'医术高明',py:'yīshù gāomíng',vn:'y thuật cao minh'},
     {zh:'高明的主意',py:'gāomíng de zhǔyi',vn:'ý kiến cao tay'},
     {zh:'另请高明',py:'lìng qǐng gāomíng',vn:'mời người giỏi hơn'},
     {zh:'手段高明',py:'shǒuduàn gāomíng',vn:'thủ đoạn cao tay'}
   ],
   patterns:[
     {s:'A + 比 + B + 高明',m:'A giỏi hơn, cao tay hơn B'},
     {s:'（您）还是另请高明吧',m:'Ngài nên mời người giỏi hơn (lời từ chối lịch sự)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cách này của cậu cao tay hơn của tôi nhiều, cứ làm theo cách của cậu đi.',answer:'你这个办法比我的高明多了，就按你说的做吧。',answerPy:'Nǐ zhège bànfǎ bǐ wǒ de gāomíng duō le, jiù àn nǐ shuō de zuò ba.',
      note:'A 比 B + Adj + 多了 (ôn HSK 4); 按……做.',pair:'比……多了'},
     {promptLang:'vi',prompt:'Bác sĩ dù có cao tay đến mấy cũng không chữa được tất cả các bệnh.',answer:'医生的医术再高明，也不可能治好所有的病。',answerPy:'Yīshēng de yīshù zài gāomíng, yě bù kěnéng zhìhǎo suǒyǒu de bìng.',
      note:'再……也…… = dù … đến mấy cũng (ôn HSK 5).',pair:'再……也……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 53–55), mỗi đoạn văn một dòng
// Chú thích ① của sách (三国): 公元220年～280年，曹魏、蜀汉、东吴三个政权并立……
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 草船借箭',
   preQuiz:[
     {q:'周瑜为什么心里一直不服气？',opts:['他觉得自己很有才，却总比不过诸葛亮','诸葛亮不愿意帮他打仗','曹操的军队比他的强'],ans:0},
     {q:'周瑜认为，现在的当务之急是什么？',opts:['多派一些士兵','赶造十万支箭','向曹操借船'],ans:1},
     {q:'诸葛亮答应几天造好十万支箭？',opts:['十天','五天','三天'],ans:2},
     {q:'周瑜打算吩咐下属怎么做？',opts:['帮诸葛亮把材料准备齐全','不给诸葛亮准备齐全材料，故意拖延时间','派人去江边帮诸葛亮造箭'],ans:1},
     {q:'诸葛亮请鲁肃帮什么忙？',opts:['借给他二十条船、士兵，并且替他保密','帮他一起造箭','向周瑜汇报他的打算'],ans:0},
     {q:'鲁肃回来报告周瑜时，没有提什么事？',opts:['造箭的材料','诸葛亮的身体','借船的事'],ans:2},
     {q:'头两天，诸葛亮那儿怎么样？',opts:['大家忙着造箭','毫无动静','天天设宴款待鲁肃'],ans:1},
     {q:'诸葛亮什么时候把鲁肃请到船上？',opts:['第一天中午','第二天晚上','第三天过了午夜'],ans:2},
     {q:'船靠近曹操的驻扎地以后，士兵们做了什么？',opts:['奋力敲鼓，齐声高喊','悄悄地躲在舱里','朝曹军放箭'],ans:0},
     {q:'曹操为什么不轻易出兵？',opts:['他的士兵都睡着了','江上大雾茫茫，他弄不清情况','他想和诸葛亮联合'],ans:1},
     {q:'诸葛亮下令把船掉过来，是为了什么？',opts:['让船的另一边也插满箭','马上返航','躲开曹操的军队'],ans:0},
     {q:'听了借箭的经过，周瑜说了什么？',opts:['诸葛亮活该受罚','还要再请诸葛亮造箭','诸葛亮真是天才，确实比自己高明'],ans:2}
   ],
   lines:[
    {sp:0,zh:'三国时期，东吴大将周瑜觉得自己很有才，却总比不过诸葛亮，心里一直不服气。一天，周瑜请来了诸葛亮，说：“我们就要跟曹操的军队打仗了。水上作战，用什么武器最好？”诸葛亮说：“弓箭。”周瑜说：“这话不假。可现在我们缺箭，当务之急是赶造十万支箭，造箭的事就由您承办吧。”诸葛亮说：“您委托的事，当然要办好。箭什么时候用？”周瑜说：“即将交战，十天怎么样？”诸葛亮说：“时间紧迫，三天也行。”周瑜说：“这是公务，可不能开玩笑。”诸葛亮说：“三天造不好箭，愿受惩罚。”周瑜很高兴，设宴款待诸葛亮。诸葛亮临走时叮嘱周瑜：“三天以后，请派人到江边来搬箭。”',
     py:'Sānguó shíqī, Dōng Wú dàjiàng Zhōu Yú juéde zìjǐ hěn yǒu cái, què zǒng bǐ bu guò Zhūgě Liàng, xīnli yìzhí bù fúqì. Yì tiān, Zhōu Yú qǐngláile Zhūgě Liàng, shuō: “Wǒmen jiù yào gēn Cáo Cāo de jūnduì dǎzhàng le. Shuǐ shang zuòzhàn, yòng shénme wǔqì zuì hǎo?” Zhūgě Liàng shuō: “Gōngjiàn.” Zhōu Yú shuō: “Zhè huà bù jiǎ. Kě xiànzài wǒmen quē jiàn, dāngwùzhījí shì gǎnzào shíwàn zhī jiàn, zào jiàn de shì jiù yóu nín chéngbàn ba.” Zhūgě Liàng shuō: “Nín wěituō de shì, dāngrán yào bànhǎo. Jiàn shénme shíhou yòng?” Zhōu Yú shuō: “Jíjiāng jiāozhàn, shí tiān zěnmeyàng?” Zhūgě Liàng shuō: “Shíjiān jǐnpò, sān tiān yě xíng.” Zhōu Yú shuō: “Zhè shì gōngwù, kě bù néng kāi wánxiào.” Zhūgě Liàng shuō: “Sān tiān zào bu hǎo jiàn, yuàn shòu chéngfá.” Zhōu Yú hěn gāoxìng, shè yàn kuǎndài Zhūgě Liàng. Zhūgě Liàng lín zǒu shí dīngzhǔ Zhōu Yú: “Sān tiān yǐhòu, qǐng pài rén dào jiāngbiān lái bān jiàn.”',
     vn:'Thời Tam Quốc, đại tướng Chu Du của Đông Ngô cho rằng mình rất có tài, vậy mà lúc nào cũng không bằng Gia Cát Lượng, trong lòng mãi không phục. Một hôm, Chu Du mời Gia Cát Lượng tới, nói: "Chúng ta sắp giao chiến với quân đội của Tào Tháo rồi. Đánh trận trên sông nước thì dùng vũ khí gì là tốt nhất?" Gia Cát Lượng đáp: "Cung tên." Chu Du nói: "Lời này không sai. Nhưng bây giờ chúng ta thiếu tên, việc cấp bách trước mắt là gấp rút làm mười vạn mũi tên, việc làm tên xin giao cho ngài đảm nhận vậy." Gia Cát Lượng nói: "Việc ngài giao phó, đương nhiên phải làm cho tốt. Khi nào thì cần dùng tên?" Chu Du nói: "Sắp giao chiến rồi, mười ngày thì thế nào?" Gia Cát Lượng nói: "Thời gian gấp gáp, ba ngày cũng được." Chu Du nói: "Đây là việc quân, không được đùa đâu đấy." Gia Cát Lượng nói: "Ba ngày không làm xong tên, xin chịu trừng phạt." Chu Du rất vui, mở tiệc khoản đãi Gia Cát Lượng. Lúc sắp đi, Gia Cát Lượng dặn Chu Du: "Ba ngày sau, xin cho người ra bờ sông khuân tên."'},
    {sp:0,zh:'鲁肃对周瑜说：“十万支箭，三天怎么造得成？诸葛亮不会说话不算数吧？”周瑜说：“我又没有逼迫他，是他自己说的。我得吩咐下属，造箭用的材料，不要给他准备齐全，也不能供应充足，故意给他拖延时间。到期限造不出箭，他就活该受罚了。你去探听探听，他是怎么打算的，回来向我汇报。”',
     py:'Lǔ Sù duì Zhōu Yú shuō: “Shíwàn zhī jiàn, sān tiān zěnme zào de chéng? Zhūgě Liàng bú huì shuōhuà bú suàn shù ba?” Zhōu Yú shuō: “Wǒ yòu méiyǒu bīpò tā, shì tā zìjǐ shuō de. Wǒ děi fēnfù xiàshǔ, zào jiàn yòng de cáiliào, búyào gěi tā zhǔnbèi qíquán, yě bù néng gōngyìng chōngzú, gùyì gěi tā tuōyán shíjiān. Dào qīxiàn zào bu chū jiàn, tā jiù huógāi shòu fá le. Nǐ qù tàntīng tàntīng, tā shì zěnme dǎsuan de, huílai xiàng wǒ huìbào.”',
     vn:'Lỗ Túc nói với Chu Du: "Mười vạn mũi tên, ba ngày làm sao làm nổi? Gia Cát Lượng không nói mà không giữ lời đấy chứ?" Chu Du nói: "Ta có ép hắn đâu, là hắn tự nói đấy chứ. Ta phải dặn cấp dưới, vật liệu làm tên không được chuẩn bị đầy đủ cho hắn, cũng không được cung cấp dồi dào, cố tình làm chậm trễ thời gian của hắn. Đến hạn mà không làm ra được tên, thì hắn đáng bị phạt. Ông đi dò la xem hắn tính toán thế nào, về báo lại cho ta."'},
    {sp:0,zh:'鲁肃去探望诸葛亮，见面寒暄过后，诸葛亮说：“三天，要十万支箭，你得帮帮我。”鲁肃说：“你不要为难我，我怎么帮得了你？”诸葛亮说：“你借给我二十条船，每条船上要三十名士兵。船用黑布遮挡严密，再把草捆成捆儿，共要一千个，排在船的侧面，我有用。不过这是机密，你得替我保密，不要走漏消息，否则我性命难保。”',
     py:'Lǔ Sù qù tànwàng Zhūgě Liàng, jiàn miàn hánxuān guòhòu, Zhūgě Liàng shuō: “Sān tiān, yào shíwàn zhī jiàn, nǐ děi bāngbang wǒ.” Lǔ Sù shuō: “Nǐ búyào wéinán wǒ, wǒ zěnme bāng de liǎo nǐ?” Zhūgě Liàng shuō: “Nǐ jiègěi wǒ èrshí tiáo chuán, měi tiáo chuán shang yào sānshí míng shìbīng. Chuán yòng hēi bù zhēdǎng yánmì, zài bǎ cǎo kǔnchéng kǔnr, gòng yào yìqiān ge, pái zài chuán de cèmiàn, wǒ yǒu yòng. Búguò zhè shì jīmì, nǐ děi tì wǒ bǎo mì, búyào zǒulòu xiāoxi, fǒuzé wǒ xìngmìng nán bǎo.”',
     vn:'Lỗ Túc đến thăm Gia Cát Lượng, gặp mặt chào hỏi xong, Gia Cát Lượng nói: "Ba ngày mà cần mười vạn mũi tên, ông phải giúp tôi." Lỗ Túc nói: "Ông đừng làm khó tôi, tôi làm sao giúp nổi ông?" Gia Cát Lượng nói: "Ông cho tôi mượn hai mươi chiếc thuyền, mỗi thuyền cần ba mươi binh sĩ. Thuyền phải dùng vải đen che kín, rồi bó cỏ thành từng bó, tổng cộng một nghìn bó, xếp ở hai bên mạn thuyền, tôi có việc cần dùng. Có điều đây là việc cơ mật, ông phải giữ bí mật giúp tôi, đừng để lộ tin tức, nếu không tính mạng tôi khó giữ."'},
    {sp:0,zh:'鲁肃答应了，回来报告周瑜，果然没提借船的事，只说造箭的材料诸葛亮都不用。周瑜沉思良久，猜不出诸葛亮的意图，只好等着。',
     py:'Lǔ Sù dāying le, huílai bàogào Zhōu Yú, guǒrán méi tí jiè chuán de shì, zhǐ shuō zào jiàn de cáiliào Zhūgě Liàng dōu bú yòng. Zhōu Yú chénsī liángjiǔ, cāi bu chū Zhūgě Liàng de yìtú, zhǐhǎo děngzhe.',
     vn:'Lỗ Túc nhận lời, về báo với Chu Du, quả nhiên không nhắc đến chuyện mượn thuyền, chỉ nói vật liệu làm tên Gia Cát Lượng đều không dùng. Chu Du trầm ngâm hồi lâu, đoán không ra ý đồ của Gia Cát Lượng, đành chờ xem.'},
    {sp:0,zh:'鲁肃私自弄来二十条快船，按诸葛亮说的安排妥当。头两天，诸葛亮那儿毫无动静，第三天过了午夜，诸葛亮把鲁肃请到船上，说：“和我一起去取箭。”之后吩咐用绳索把船连在一起，朝曹操占领的北岸开去。',
     py:'Lǔ Sù sīzì nònglái èrshí tiáo kuài chuán, àn Zhūgě Liàng shuō de ānpái tuǒdàng. Tóu liǎng tiān, Zhūgě Liàng nàr háowú dòngjing, dì-sān tiān guòle wǔyè, Zhūgě Liàng bǎ Lǔ Sù qǐngdào chuán shang, shuō: “Hé wǒ yìqǐ qù qǔ jiàn.” Zhīhòu fēnfù yòng shéngsuǒ bǎ chuán lián zài yìqǐ, cháo Cáo Cāo zhànlǐng de běi\'àn kāiqu.',
     vn:'Lỗ Túc tự ý kiếm hai mươi chiếc thuyền nhanh, sắp xếp đâu vào đấy theo lời Gia Cát Lượng. Hai ngày đầu, bên Gia Cát Lượng chẳng có động tĩnh gì; ngày thứ ba, quá nửa đêm, Gia Cát Lượng mời Lỗ Túc lên thuyền, nói: "Cùng tôi đi lấy tên." Sau đó sai dùng dây thừng nối các thuyền lại với nhau, tiến về bờ bắc do Tào Tháo chiếm giữ.'},
    {sp:0,zh:'此时，大雾封锁了江面，不远处什么都看不清，船悄悄地靠近了曹操的驻扎地。士兵在诸葛亮指定的地点，将船头朝西，船尾朝东，一字排开。船上的士兵奋力敲鼓，齐声高喊，声音能多响亮就多响亮。鲁肃吃惊地说：“曹兵出来怎么办？”诸葛亮笑答：“雾这么大，曹操不敢派兵出来。”鲁肃跟诸葛亮来到船上，看到舱中已摆下酒菜，只得心神不定地与诸葛亮饮酒。',
     py:'Cǐshí, dà wù fēngsuǒle jiāngmiàn, bù yuǎn chù shénme dōu kàn bu qīng, chuán qiāoqiāo de kàojìnle Cáo Cāo de zhùzhādì. Shìbīng zài Zhūgě Liàng zhǐdìng de dìdiǎn, jiāng chuántóu cháo xī, chuánwěi cháo dōng, yízì páikāi. Chuán shang de shìbīng fènlì qiāo gǔ, qíshēng gāo hǎn, shēngyīn néng duō xiǎngliàng jiù duō xiǎngliàng. Lǔ Sù chījīng de shuō: “Cáo bīng chūlai zěnme bàn?” Zhūgě Liàng xiào dá: “Wù zhème dà, Cáo Cāo bù gǎn pài bīng chūlai.” Lǔ Sù gēn Zhūgě Liàng láidào chuán shang, kàndào cāng zhōng yǐ bǎixià jiǔcài, zhǐdé xīnshén-búdìng de yǔ Zhūgě Liàng yǐn jiǔ.',
     vn:'Lúc này, sương mù dày đặc phủ kín mặt sông, chỗ không xa lắm cũng chẳng nhìn rõ gì, thuyền lặng lẽ áp sát nơi đóng quân của Tào Tháo. Tại địa điểm Gia Cát Lượng đã chỉ định, binh sĩ cho đầu thuyền quay về hướng tây, đuôi thuyền quay về hướng đông, dàn thành một hàng ngang. Binh sĩ trên thuyền ra sức đánh trống, đồng thanh hò hét, tiếng càng vang dội càng tốt. Lỗ Túc hoảng hốt nói: "Quân Tào kéo ra thì làm sao?" Gia Cát Lượng cười đáp: "Sương mù dày thế này, Tào Tháo không dám cho quân ra đâu." Lỗ Túc theo Gia Cát Lượng lên thuyền, thấy trong khoang đã bày sẵn rượu thịt, đành bồn chồn không yên ngồi uống rượu với Gia Cát Lượng.'},
    {sp:0,zh:'曹操听到鼓声和叫喊声响成一片，嘱咐下属：“江上大雾茫茫，我们弄不清情况，不要轻易出兵。”于是，调动了上万名弓箭手一齐朝传来鼓声的方位放箭，箭像雨点一样落在船上。一会儿，诸葛亮下令把船掉过来，船头朝东，船尾朝西。士兵们情绪高涨，依旧敲鼓高喊，逼近曹军去受箭。',
     py:'Cáo Cāo tīngdào gǔshēng hé jiàohǎnshēng xiǎngchéng yí piàn, zhǔfù xiàshǔ: “Jiāng shang dà wù mángmáng, wǒmen nòng bu qīng qíngkuàng, búyào qīngyì chū bīng.” Yúshì, diàodòngle shàng wàn míng gōngjiànshǒu yìqí cháo chuánlái gǔshēng de fāngwèi fàng jiàn, jiàn xiàng yǔdiǎn yíyàng luò zài chuán shang. Yíhuìr, Zhūgě Liàng xià lìng bǎ chuán diào guòlai, chuántóu cháo dōng, chuánwěi cháo xī. Shìbīngmen qíngxù gāozhǎng, yījiù qiāo gǔ gāo hǎn, bījìn Cáo jūn qù shòu jiàn.',
     vn:'Tào Tháo nghe tiếng trống và tiếng hò hét vang dậy một vùng, bèn dặn thuộc hạ: "Trên sông sương mù mịt mùng, ta không nắm rõ tình hình, không được tuỳ tiện xuất quân." Thế là (Tào Tháo) điều động hơn một vạn cung thủ đồng loạt bắn tên về phía có tiếng trống vọng tới, tên rơi xuống thuyền như mưa. Một lát sau, Gia Cát Lượng ra lệnh quay thuyền lại, đầu thuyền hướng đông, đuôi thuyền hướng tây. Binh sĩ khí thế hừng hực, vẫn đánh trống hò hét, áp sát quân Tào để hứng tên.'},
    {sp:0,zh:'凌晨，雾还笼罩着江面，船两边的草捆儿上插满了箭。诸葛亮命令士兵启程返航。曹操知道上当了，可诸葛亮的船已经走远了。',
     py:'Língchén, wù hái lǒngzhàozhe jiāngmiàn, chuán liǎngbiān de cǎokǔnr shang chāmǎnle jiàn. Zhūgě Liàng mìnglìng shìbīng qǐchéng fǎnháng. Cáo Cāo zhīdào shàngdàng le, kě Zhūgě Liàng de chuán yǐjīng zǒuyuǎn le.',
     vn:'Rạng sáng, sương mù vẫn còn bao phủ mặt sông, những bó cỏ hai bên thuyền đã cắm đầy tên. Gia Cát Lượng ra lệnh cho binh sĩ lên đường quay về. Tào Tháo biết mình mắc lừa, nhưng thuyền của Gia Cát Lượng đã đi xa rồi.'},
    {sp:0,zh:'二十条船靠岸的时候，周瑜派来搬箭的人也到了。大致算了算，船上的箭共有十万多支，诸葛亮圆满完成了任务。',
     py:'Èrshí tiáo chuán kào àn de shíhou, Zhōu Yú pàilái bān jiàn de rén yě dào le. Dàzhì suànle suàn, chuán shang de jiàn gòng yǒu shíwàn duō zhī, Zhūgě Liàng yuánmǎn wánchéngle rènwu.',
     vn:'Lúc hai mươi chiếc thuyền cập bờ, người Chu Du phái đến khuân tên cũng vừa tới. Tính sơ qua, tên trên thuyền có tất cả hơn mười vạn mũi, Gia Cát Lượng đã hoàn thành nhiệm vụ một cách trọn vẹn.'},
    {sp:0,zh:'鲁肃见了周瑜，告诉他借箭的经过。周瑜叹着气说：“唉，他真是天才，确实比我高明！”',
     py:'Lǔ Sù jiànle Zhōu Yú, gàosu tā jiè jiàn de jīngguò. Zhōu Yú tànzhe qì shuō: “Ài, tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng!”',
     vn:'Lỗ Túc gặp Chu Du, kể lại đầu đuôi chuyện mượn tên. Chu Du thở dài nói: "Chao ôi, hắn đúng là thiên tài, quả thật cao minh hơn ta!" (Chú thích của sách: Thời Tam Quốc (220–280), ba chính quyền Tào Nguỵ, Thục Hán, Đông Ngô cùng tồn tại. Trong trận Xích Bích, Tào Tháo bị liên quân Tôn – Lưu đánh bại, đặt nền cho thế chân vạc. "Thuyền cỏ mượn tên" là một phần của 《Tam Quốc diễn nghĩa》, xảy ra trong thời gian trận Xích Bích; Chu Du — đại tướng Đông Ngô — ghen tài Gia Cát Lượng, quân sư của Lưu Bị sang liên minh chống Tào.)'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 大致—大体 lấy từ sách (tr. 57, 做一做: 选择“大致”或“大体”改写句子); 叮嘱—吩咐, 充足—充分 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'大致 — 大体',
   same:'Đều nói về tình hình CHỦ YẾU, phần lớn (大家的经历大致／大体相同); đều có nghĩa "sơ qua, không thật chi tiết" (我跟他大致／大体说了一下).',
   sameEx:{zh:'大家的经历大致／大体相同。',vn:'Trải nghiệm của mọi người đại khái giống nhau.'},
   items:[
     {word:'大致',points:[
       'Ngoài hai nghĩa chung, còn dùng để ƯỚC LƯỢNG không thật chính xác (thời gian, số lượng): 我大致得在那儿待三个月 ✓.',
       'Còn làm TÍNH TỪ: 大致的想法 / 情况 / 内容 (ý sơ bộ, tình hình khái quát).',
       'Bài khoá: 大致算了算，船上的箭共有十万多支.'
     ],ex:[{zh:'要完成这项艰巨的工作，大致得三个月。',vn:'Để hoàn thành công việc gian nan này, ước chừng phải mất ba tháng.'},
          {zh:'这只是一个大致的想法。',vn:'Đây mới chỉ là một ý tưởng sơ bộ.'}]},
     {word:'大体',points:[
       'Chỉ có hai nghĩa chung: phần lớn, về cơ bản (大体相同 / 大体上) và sơ qua (大体说了一下).',
       'KHÔNG dùng để ước lượng số lượng: *我大体得在那儿待三个月 ✗.',
       'KHÔNG làm tính từ: không nói *大体的想法. (Danh từ 识大体 = hiểu lẽ lớn là nghĩa khác.)'
     ],ex:[{zh:'我大体了解了一下，没几个人参与这件事。',vn:'Tôi tìm hiểu sơ qua, chẳng mấy người tham gia chuyện này.'}]}
   ],
   quiz:[
     {sentence:'从北京坐高铁到上海，＿＿需要五个小时。',options:['大致','大体'],answer:0,
      why:'Ước lượng thời gian không chính xác → chỉ 大致; 大体 không dùng cho ước lượng số lượng.'},
     {sentence:'你先把会议的＿＿情况跟大家说一说。',options:['大致','大体'],answer:0,
      why:'Làm định ngữ (……的情况) → 大致 dùng như tính từ; 大体 không có cách dùng này.'},
     {sentence:'这两篇文章的观点＿＿相同，只是例子不一样。',options:['大致','大体'],answer:1,both:true,
      why:'Nói về tình hình chủ yếu (quan điểm cơ bản giống nhau) → dùng được cả hai.'},
     {sentence:'我＿＿看了一遍，没发现什么大问题。',options:['大致','大体'],answer:1,both:true,
      why:'Nghĩa "sơ qua, không kỹ" → cả 大致 lẫn 大体 đều được.'}
   ],
   sgk:{
     chung:{t:'1. 表示说的是主要情况，多数情况。　2. 表示粗略地、不十分详尽地。',vn:'1. Biểu thị điều nói tới là tình hình chủ yếu, phần lớn. 2. Biểu thị (làm gì) một cách sơ lược, không thật chi tiết.',vd:'大家的经历大致／大体相同。　我跟他大致／大体说了一下。',vdVn:'Trải nghiệm của mọi người đại khái giống nhau. — Tôi đã nói sơ qua với anh ấy.'},
     khac:[
       {a:{t:'表示不十分准确的估计。',vn:'Biểu thị sự ước lượng không thật chính xác.',vd:'我大致得在那儿待三个月。（√）',vdVn:'Tôi ước chừng phải ở đó ba tháng. — Đúng.'},
        b:{t:'没有左边这个用法。',vn:'Không có cách dùng như bên trái.',vd:'*我大体得在那儿待三个月。（×）',vdVn:'Sai: 大体 không dùng để ước lượng.'}},
       {a:{t:'“大致”还可以做形容词。',vn:'"大致" còn có thể làm tính từ.',vd:'这只是一个大致的想法。',vdVn:'Đây chỉ là một ý tưởng sơ bộ.'},
        b:{t:'没有左边这个用法。',vn:'Không có cách dùng như bên trái.',vd:''}}
     ],
     deLam:'选择“大致”或“大体”改写句子 — Tích vào từ dùng được để viết lại câu (có câu dùng được cả hai)',
     lamThu:[
       {s:'据我了解，茶叶的种类＿＿可以分为三种。（原句：……主要可以分为三种）',dap:[true,true],
        giai:'"主要" = nói tình hình chủ yếu → dùng được cả hai (đáp án sách: 大致／大体): 据我了解，茶叶的种类大致／大体可以分为三种。'},
       {s:'我＿＿了解了一下，没几个人参与这件事。（原句：我大概了解了一下……）',dap:[true,true],
        giai:'"大概了解了一下" = tìm hiểu sơ qua, không kỹ → cả hai đều được (đáp án sách: 大体／大致).'},
       {s:'要完成这项艰巨的工作，＿＿得三个月。（原句：……差不多得三个月）',dap:[true,false],
        giai:'"差不多得三个月" là ƯỚC LƯỢNG thời gian → chỉ 大致: 要完成这项艰巨的工作，大致得三个月。'},
       {s:'我＿＿算了算，一个月得花不少钱呢。（原句：我粗略地算了算……）',dap:[true,false],
        giai:'Đáp án sách chỉ cho 大致: 我大致算了算，一个月得花不少钱呢。 "算了算" là tính ước lượng một khoản tiền — trùng với cách dùng ước lượng của 大致 (như bài khoá: 大致算了算，船上的箭共有十万多支).'}
     ]
   }},

  {pair:'叮嘱 — 吩咐',
   same:'Đều là động từ, đều là nói với người khác để họ làm (hoặc đừng làm) việc gì; cấu trúc giống nhau: 叮嘱／吩咐 + người + V.',
   sameEx:{zh:'临走前，他叮嘱／吩咐秘书把文件整理好。',vn:'Trước khi đi, ông ấy dặn thư ký sắp xếp tài liệu cho gọn.'},
   items:[
     {word:'叮嘱',points:[
       'Nhấn DẶN ĐI DẶN LẠI cho nhớ, xuất phát từ sự quan tâm, lo lắng; hay đi với 再三 / 反复 / 一再.',
       'Quan hệ đa dạng: cha mẹ – con cái, bạn bè, cả người dưới dặn người trên (诸葛亮叮嘱周瑜).',
       'Nội dung thường là lời khuyên, lời nhắc: 注意安全, 按时吃药.'
     ],ex:[{zh:'临行前，妈妈再三叮嘱我：“出门一定要注意安全。”',vn:'Trước lúc lên đường, mẹ dặn đi dặn lại tôi: "Ra ngoài nhất định phải chú ý an toàn."'}]},
     {word:'吩咐',points:[
       'Nhấn SAI BẢO, giao việc — mang tính mệnh lệnh nhẹ.',
       'Thường là NGƯỜI TRÊN nói với NGƯỜI DƯỚI: 吩咐下属 / 手下 / 服务员.',
       'Dùng như danh từ trong lời lịch sự: 您有什么吩咐？(Ngài có gì sai bảo?)'
     ],ex:[{zh:'我得吩咐下属，造箭用的材料，不要给他准备齐全。',vn:'Ta phải sai bảo cấp dưới, vật liệu làm tên không được chuẩn bị đầy đủ cho hắn.'}]}
   ],
   quiz:[
     {sentence:'经理，您还有什么＿＿？我马上去办。',options:['叮嘱','吩咐'],answer:1,
      why:'Nhân viên hỏi cấp trên có gì SAI BẢO → 吩咐 (cụm lịch sự 有什么吩咐).'},
     {sentence:'医生再三＿＿他：出院以后要按时吃药。',options:['叮嘱','吩咐'],answer:0,
      why:'再三 + dặn nhớ, xuất phát từ quan tâm sức khoẻ → 叮嘱.'},
     {sentence:'周瑜＿＿下属，故意给诸葛亮拖延时间。',options:['叮嘱','吩咐'],answer:1,
      why:'Người trên giao việc (ra lệnh) cho cấp dưới → 吩咐 (bài khoá).'},
     {sentence:'奶奶一再＿＿我，天冷了要多穿衣服。',options:['叮嘱','吩咐'],answer:0,
      why:'Lời dặn ân cần, lặp lại (一再) → 叮嘱; 吩咐 mang ý sai bảo, không hợp.'}
   ]},

  {pair:'充足 — 充分',
   same:'Đều là tính từ, đều có nghĩa "đầy đủ"; đều đi được với 理由: 理由充足／充分.',
   sameEx:{zh:'他的理由很充足／充分，大家都被说服了。',vn:'Lý do của anh ấy rất xác đáng, mọi người đều bị thuyết phục.'},
   items:[
     {word:'充足',points:[
       'Nói về SỐ LƯỢNG đủ, dồi dào, thường là vật cụ thể: 阳光 / 雨水 / 资金 / 经费 / 时间 / 睡眠 + 充足.',
       'Chủ yếu làm vị ngữ hoặc định ngữ; ít làm trạng ngữ.',
       'Bài khoá: 也不能供应充足.'
     ],ex:[{zh:'我们的科研经费充足，请大家不要为此担心。',vn:'Kinh phí nghiên cứu của chúng ta dồi dào, xin mọi người đừng lo.'}]},
     {word:'充分',points:[
       'Nói về MỨC ĐỘ đầy đủ, trọn vẹn, thường là điều trừu tượng: 准备 / 理由 / 证据 / 条件 + 充分.',
       'Hay làm TRẠNG NGỮ: 充分发挥 / 充分利用 / 充分理解 / 充分准备.',
       'Không nói 阳光充分, 经费充分.'
     ],ex:[{zh:'我们要充分利用课余时间多读书。',vn:'Chúng ta phải tận dụng triệt để thời gian ngoài giờ học để đọc nhiều sách.'}]}
   ],
   quiz:[
     {sentence:'这间教室阳光＿＿，同学们都喜欢在这儿自习。',options:['充足','充分'],answer:0,
      why:'Ánh nắng — thứ có LƯỢNG → 充足; không nói 阳光充分.'},
     {sentence:'比赛前我们做了＿＿的准备，所以一点儿也不紧张。',options:['充足','充分'],answer:1,
      why:'准备 là việc trừu tượng, nói về mức độ chu đáo → 充分的准备.'},
     {sentence:'老师鼓励我们＿＿发挥自己的想象力。',options:['充足','充分'],answer:1,
      why:'Làm trạng ngữ trước động từ (充分发挥) → chỉ 充分.'},
     {sentence:'考试前一天晚上，一定要保证＿＿的睡眠。',options:['充足','充分'],answer:0,
      why:'Giấc ngủ — nói về lượng thời gian ngủ đủ → 充足的睡眠.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'军队',hv:'quân đội',vn:'quân đội',note:'Trùng khít; lượng từ 支: 一支军队.'},
    {zh:'武器',hv:'vũ khí',vn:'vũ khí',note:'Trùng khít; nghĩa bóng giống tiếng Việt: 秘密武器 = vũ khí bí mật.'},
    {zh:'委托',hv:'uỷ thác',vn:'uỷ thác, nhờ',note:'Trùng khít; dùng rộng hơn tiếng Việt, cả việc nhờ vả thường ngày (受朋友委托).'},
    {zh:'公务',hv:'công vụ',vn:'việc công',note:'Trùng khít; 公务员 = công vụ viên → công chức.'},
    {zh:'期限',hv:'kỳ hạn',vn:'kỳ hạn, thời hạn',note:'Trùng khít: 到期限 = đến hạn.'},
    {zh:'机密',hv:'cơ mật',vn:'cơ mật',note:'Trùng khít: 军事机密 = cơ mật quân sự.'},
    {zh:'沉思',hv:'trầm tư',vn:'trầm tư',note:'Trùng khít: 陷入沉思 = chìm vào trầm tư.'},
    {zh:'占领',hv:'chiếm lĩnh',vn:'chiếm lĩnh, chiếm đóng',note:'Trùng khít, cả nghĩa bóng: 占领市场 = chiếm lĩnh thị trường.'},
    {zh:'封锁',hv:'phong toả',vn:'phong toả',note:'Trùng khít: 封锁现场 = phong toả hiện trường.'},
    {zh:'指定',hv:'chỉ định',vn:'chỉ định',note:'Trùng khít: 指定的地点 = địa điểm chỉ định.'},
    {zh:'调动',hv:'điều động',vn:'điều động',note:'Trùng khít; thêm nghĩa "khơi dậy": 调动积极性.'},
    {zh:'圆满',hv:'viên mãn',vn:'viên mãn, trọn vẹn',note:'Trùng khít; 圆满完成 = hoàn thành viên mãn.'},
    {zh:'天才',hv:'thiên tài',vn:'thiên tài',note:'Trùng khít.'},
    {zh:'款待',hv:'khoản đãi',vn:'khoản đãi',note:'Trùng khít: 设宴款待 = mở tiệc khoản đãi.'},
    {zh:'妥当',hv:'thoả đáng',vn:'thoả đáng, ổn thoả',note:'Gần trùng khít; 安排妥当 dịch "sắp xếp ổn thoả / đâu vào đấy" tự nhiên hơn.'},
    {zh:'高明',hv:'cao minh',vn:'cao minh, giỏi',note:'Trùng khít: 比我高明 = cao minh hơn tôi.'}
  ],
  idiom:[
    {zh:'当务之急',hv:'đương vụ chi cấp',vn:'việc cấp bách trước mắt',note:'"Đương" = hiện tại, "vụ" = việc, "cấp" = gấp → việc gấp nhất của hiện tại.'},
    {zh:'心神不定',hv:'tâm thần bất định',vn:'bồn chồn, không yên lòng',note:'Tiếng Việt có đúng thành ngữ "tâm thần bất định" — nghĩa y hệt (bài khoá: 心神不定地与诸葛亮饮酒).'},
    {zh:'唉声叹气',hv:'ai thanh thán khí',vn:'thở ngắn than dài',note:'"Thán khí" = thở dài (叹气) → than vãn, thở dài liên tục.'},
    {zh:'聪明才智',hv:'thông minh tài trí',vn:'thông minh tài trí',note:'Xuất hiện trong đề 写一写: 以自己的聪明才智胜出.'}
  ],
  trap:[
    {zh:'寒暄',hv:'hàn huyên',vn:'chào hỏi xã giao',
     warn:'BẪY: "hàn huyên" tiếng Việt là trò chuyện tâm tình lâu. 寒暄 chỉ là CHÀO HỎI XÃ GIAO vài câu (hỏi nóng lạnh) trước khi vào chuyện chính.'},
    {zh:'充足',hv:'sung túc',vn:'đầy đủ, dồi dào',
     warn:'"Sung túc" tiếng Việt chỉ đời sống no đủ, khá giả. 充足 = LƯỢNG DỒI DÀO: 阳光充足, 经费充足 — không dịch "nắng sung túc".'},
    {zh:'保密',hv:'bảo mật',vn:'giữ bí mật',
     warn:'"Bảo mật" tiếng Việt hay dùng cho an ninh dữ liệu. 保密 là li hợp từ, không mang tân ngữ: 替我保密 / 对他保密, không nói *保密这件事.'},
    {zh:'走漏',hv:'tẩu lậu',vn:'để lộ (tin)',
     warn:'"Tẩu lậu" (buôn lậu) tiếng Việt khác hẳn. 走漏 = để LỘ tin: 走漏消息 / 走漏风声.'},
    {zh:'探望',hv:'thám vọng',vn:'thăm, thăm hỏi',
     warn:'Đừng nhầm với "tham vọng" (野心). 探望 = đi THĂM người: 探望病人.'},
    {zh:'意图',hv:'ý đồ',vn:'ý định, mục đích',
     warn:'"Ý đồ" tiếng Việt thường mang nghĩa xấu. 意图 trung tính: 来访的意图 = mục đích chuyến thăm, 设计意图 = ý tưởng thiết kế.'},
    {zh:'下属',hv:'hạ thuộc',vn:'cấp dưới, thuộc hạ',
     warn:'Tiếng Việt nói ngược "thuộc hạ". 下属 dùng cả trong công sở hiện đại = cấp dưới.'},
    {zh:'私自',hv:'tư tự',vn:'tự ý',
     warn:'Không có "tư tự" trong tiếng Việt; dịch "tự ý, lén" — luôn mang ý không được phép.'},
    {zh:'活该',hv:'hoạt cai',vn:'đáng đời, đáng',
     warn:'Không dịch từng chữ ("sống nên"). 活该 = ĐÁNG ĐỜI, khẩu ngữ, sắc thái chê trách.'},
    {zh:'算数',hv:'toán số',vn:'giữ lời, có giá trị',
     warn:'"Toán số" gợi môn số học, nhưng 说话算数 = NÓI LÀ GIỮ LỜI; 不算数 = không tính.'},
    {zh:'为难',hv:'vi nan',vn:'làm khó; khó xử',
     warn:'为 đọc wéi. 为难 = LÀM KHÓ ai (为难我) hoặc KHÓ XỬ (让我很为难) — không phải "vì khó khăn".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'心里一直',right:'不服气'},
  {left:'跟曹操的',right:'军队打仗'},
  {left:'赶造',right:'十万支箭'},
  {left:'造箭的事就由您',right:'承办'},
  {left:'设宴',right:'款待'},
  {left:'临走时',right:'叮嘱周瑜'},
  {left:'说话',right:'不算数'},
  {left:'供应',right:'充足'},
  {left:'故意给他',right:'拖延时间'},
  {left:'活该',right:'受罚'},
  {left:'见面',right:'寒暄'},
  {left:'用黑布遮挡',right:'严密'},
  {left:'排在船的',right:'侧面'},
  {left:'不要走漏',right:'消息'},
  {left:'沉思',right:'良久'},
  {left:'猜不出诸葛亮的',right:'意图'},
  {left:'安排',right:'妥当'},
  {left:'大雾封锁了',right:'江面'},
  {left:'靠近了曹操的',right:'驻扎地'},
  {left:'大雾',right:'茫茫'},
  {left:'士兵们情绪',right:'高涨'},
  {left:'启程',right:'返航'},
  {left:'圆满',right:'完成了任务'},
  {left:'叹着气',right:'说'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu (fill + chọn từ)
// ══════════════════════════════════════════
var fillData = [
  {pre:'这次比赛输给了他们，大家心里都不',blank:'服气',post:'，决定明年再比一次。',hint:'(chịu phục)',ans:'服气'},
  {pre:'洪水发生以后，政府立即派出',blank:'军队',post:'帮助群众转移。',hint:'(quân đội)',ans:'军队'},
  {pre:'博物馆里陈列着许多古代的',blank:'武器',post:'，比如弓箭、矛和盾。',hint:'(vũ khí)',ans:'武器'},
  {pre:'离高考只剩一个月了，眼下的',blank:'当务之急',post:'是把错题整理一遍。',hint:'(việc cấp bách trước mắt)',ans:'当务之急'},
  {pre:'今年的全市中学生运动会由我们学校',blank:'承办',post:'。',hint:'(đảm nhận tổ chức)',ans:'承办'},
  {pre:'我们厂的一个大客户',blank:'委托',post:'我们生产一批货，期限一周。',hint:'(uỷ thác)',ans:'委托'},
  {pre:'离比赛只有一周了，时间',blank:'紧迫',post:'，大家每天都练到很晚。',hint:'(cấp bách)',ans:'紧迫'},
  {pre:'他因',blank:'公务',post:'去了上海，下个星期才能回来。',hint:'(việc công)',ans:'公务'},
  {pre:'见面寒暄以后，我做了一桌饭菜',blank:'款待',post:'他。',hint:'(thết đãi)',ans:'款待'},
  {pre:'临行前，妈妈再三',blank:'叮嘱',post:'我：“出门一定要注意安全。”',hint:'(dặn đi dặn lại)',ans:'叮嘱'},
  {pre:'爸爸说话一向',blank:'算数',post:'，答应带我去海边，就一定会带我去。',hint:'(giữ lời)',ans:'算数'},
  {pre:'父母不应该',blank:'逼迫',post:'孩子学他们不感兴趣的东西。',hint:'(ép buộc)',ans:'逼迫'},
  {pre:'经理，您还有什么',blank:'吩咐',post:'？我马上去办。',hint:'(sai bảo)',ans:'吩咐'},
  {pre:'好的领导不但要求严格，而且懂得关心',blank:'下属',post:'。',hint:'(cấp dưới)',ans:'下属'},
  {pre:'这批货期限一周，不能',blank:'拖延',post:'，到期交不了货，就要受罚。',hint:'(trì hoãn)',ans:'拖延'},
  {pre:'图书馆的书借阅',blank:'期限',post:'是一个月，超过了要交罚款。',hint:'(thời hạn)',ans:'期限'},
  {pre:'跟你说了多少遍要带伞，你偏偏不听，被雨淋了，',blank:'活该',post:'！',hint:'(đáng đời)',ans:'活该'},
  {pre:'你去',blank:'探听',post:'探听，今年的考试究竟考些什么。',hint:'(dò la)',ans:'探听'},
  {pre:'每周一上午，各部门经理都要向总经理',blank:'汇报',post:'工作。',hint:'(báo cáo)',ans:'汇报'},
  {pre:'听说班主任住院了，我们买了一束花去医院',blank:'探望',post:'她。',hint:'(thăm)',ans:'探望'},
  {pre:'这篇论文逻辑',blank:'严密',post:'，数据充足，得到了专家的好评。',hint:'(chặt chẽ)',ans:'严密'},
  {pre:'我不好意思直接问她，就从',blank:'侧面',post:'了解了一下她的想法。',hint:'(gián tiếp, mặt bên)',ans:'侧面'},
  {pre:'公司规定，员工不得把商业',blank:'机密',post:'告诉任何人。',hint:'(bí mật quan trọng)',ans:'机密'},
  {pre:'不知道是谁',blank:'走漏',post:'了风声，生日派对的秘密被她提前知道了。',hint:'(để lộ)',ans:'走漏'},
  {pre:'听完我的问题，老师',blank:'沉思',post:'了一会儿，才慢慢地回答。',hint:'(trầm ngâm)',ans:'沉思'},
  {pre:'学校规定，住校生不得',blank:'私自',post:'离开学校。',hint:'(tự ý)',ans:'私自'},
  {pre:'这家公司的新产品价格低、质量好，很快就',blank:'占领',post:'了国内市场。',hint:'(chiếm lĩnh)',ans:'占领'},
  {pre:'这支部队长期',blank:'驻扎',post:'在边境地区，保护着当地百姓的安全。',hint:'(đóng quân)',ans:'驻扎'},
  {pre:'请大家在',blank:'指定',post:'的时间内交卷，迟交的试卷一律无效。',hint:'(quy định, chỉ định)',ans:'指定'},
  {pre:'风浪太大，船长让乘客都回到船',blank:'舱',post:'里去。',hint:'(khoang)',ans:'舱'},
  {pre:'在',blank:'茫茫',post:'人海中，我们能成为好朋友，真是一种缘分。',hint:'(mênh mông)',ans:'茫茫'},
  {pre:'演出结束了，观众们',blank:'一齐',post:'站起来鼓掌。',hint:'(đồng loạt)',ans:'一齐'},
  {pre:'在森林里迷路时，可以根据太阳的位置来辨别',blank:'方位',post:'。',hint:'(phương hướng)',ans:'方位'},
  {pre:'为了赶作业，他昨天一直忙到',blank:'凌晨',post:'才睡。',hint:'(rạng sáng)',ans:'凌晨'},
  {pre:'早上起来一看，整座城市都被大雾',blank:'笼罩',post:'了。',hint:'(bao phủ)',ans:'笼罩'},
  {pre:'代表团明天上午',blank:'启程',post:'前往北京参加会议。',hint:'(lên đường)',ans:'启程'},
  {pre:'经过三天的讨论，这次国际会议',blank:'圆满',post:'结束了。',hint:'(tốt đẹp, trọn vẹn)',ans:'圆满'},
  {pre:'看着乱七八糟的房间，妈妈忍不住直',blank:'叹气',post:'。',hint:'(thở dài)',ans:'叹气'},
  {pre:'这个十岁的孩子就上了大学，大家都叫他“',blank:'天才',post:'少年”。',hint:'(thiên tài)',ans:'天才'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (即将 · 能A就A · 替代) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['周瑜','说','：','“','即将','交战','，','十天','怎么样','？','”'],ans:'周瑜说：“即将交战，十天怎么样？”',audio:'周瑜说：“即将交战，十天怎么样？”'},
  {words:['各位乘客','，','飞机','即将','起飞','，','请大家','系好安全带','。'],ans:'各位乘客，飞机即将起飞，请大家系好安全带。',audio:'各位乘客，飞机即将起飞，请大家系好安全带。'},
  {words:['我们','即将','走上','工作岗位','，','开始','人生新的一页','。'],ans:'我们即将走上工作岗位，开始人生新的一页。',audio:'我们即将走上工作岗位，开始人生新的一页。'},
  {words:['船上的士兵','奋力敲鼓','，','声音','能多响亮','就多响亮','。'],ans:'船上的士兵奋力敲鼓，声音能多响亮就多响亮。',audio:'船上的士兵奋力敲鼓，声音能多响亮就多响亮。'},
  {words:['这个手机','没用多久','，','能修','就修','，','尽量别换新的','。'],ans:'这个手机没用多久，能修就修，尽量别换新的。',audio:'这个手机没用多久，能修就修，尽量别换新的。'},
  {words:['做任何事情','我们','都不要浪费','，','能省一点','就省一点','。'],ans:'做任何事情我们都不要浪费，能省一点就省一点。',audio:'做任何事情我们都不要浪费，能省一点就省一点。'},
  {words:['我','喜欢','《红楼梦》和《三国演义》','，','尤其是','前者','。'],ans:'我喜欢《红楼梦》和《三国演义》，尤其是前者。',audio:'我喜欢《红楼梦》和《三国演义》，尤其是前者。'},
  {words:['你','得','替我保密','，','不要走漏消息','，','否则','我性命难保','。'],ans:'你得替我保密，不要走漏消息，否则我性命难保。',audio:'你得替我保密，不要走漏消息，否则我性命难保。'},
  {words:['周瑜','沉思良久','，','猜不出','诸葛亮的','意图','。'],ans:'周瑜沉思良久，猜不出诸葛亮的意图。',audio:'周瑜沉思良久，猜不出诸葛亮的意图。'},
  {words:['当务之急','是','赶造','十万支箭','。'],ans:'当务之急是赶造十万支箭。',audio:'当务之急是赶造十万支箭。'},
  {words:['凌晨','，','雾','还','笼罩着','江面','。'],ans:'凌晨，雾还笼罩着江面。',audio:'凌晨，雾还笼罩着江面。'},
  {words:['诸葛亮','圆满','完成了','任务','。'],ans:'诸葛亮圆满完成了任务。',audio:'诸葛亮圆满完成了任务。'},
  {words:['他','真是','天才','，','确实','比我','高明','！'],ans:'他真是天才，确实比我高明！',audio:'他真是天才，确实比我高明！'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'8点40分，列车____到达终点，请乘客带好自己的行李。',opts:['即将','曾经','已经','刚刚'],ans:0,
   exp:'Thông báo việc SẮP xảy ra, văn viết → 即将. 曾经, 已经, 刚刚 đều chỉ việc đã xảy ra.'},
  {wrong:'这间教室阳光____，同学们都喜欢在这儿自习。',opts:['充分','充足','充满','丰富'],ans:1,
   exp:'阳光充足 = nhiều nắng (lượng dồi dào). 充分 cho điều trừu tượng (准备充分); 充满 là động từ cần tân ngữ; 丰富 không đi với 阳光.'},
  {wrong:'两人见面____了几句，就开始谈合作的事了。',opts:['商量','讨论','寒暄','汇报'],ans:2,
   exp:'Chào hỏi xã giao vài câu trước chuyện chính → 寒暄. 商量, 讨论 là bàn bạc nội dung; 汇报 là báo cáo lên cấp trên.'},
  {wrong:'公司不需要那么多人，这件事让我很____，我实在帮不了你。',opts:['为难','困难','难过','难得'],ans:0,
   exp:'让我很为难 = khiến tôi khó xử. 困难 chỉ hoàn cảnh khó khăn (không nói 让我很困难); 难过 = buồn; 难得 = hiếm có.'},
  {wrong:'这件事我只告诉你一个人，你一定要替我____。',opts:['秘密','机密','保密','密切'],ans:2,
   exp:'替 + người + 保密 = giữ bí mật giúp ai (động từ li hợp). 秘密, 机密 là danh từ; 密切 = mật thiết.'},
  {wrong:'闲聊中，他说明了自己来访的____，是想请我帮他找个工作。',opts:['意见','意图','意思','意义'],ans:1,
   exp:'来访的意图 = mục đích chuyến thăm (điều định làm). 意见 = ý kiến; 意思 = nghĩa / ý; 意义 = ý nghĩa.'},
  {wrong:'出发前，导游已经把住宿和交通都安排____了。',opts:['妥当','适当','恰当','稳当'],ans:0,
   exp:'安排妥当 = sắp xếp ổn thoả (cụm cố định, bài khoá). 适当 = vừa phải; 恰当 = thích đáng (lời nói, từ ngữ); 稳当 = vững vàng.'},
  {wrong:'事故发生以后，警察马上____了现场。',opts:['封闭','关闭','封锁','锁定'],ans:2,
   exp:'封锁现场 = phong toả hiện trường, không cho ra vào. 关闭 = đóng (cửa, nhà máy); 封闭 = khép kín (thường tính từ); 锁定 = khoá chặt mục tiêu.'},
  {wrong:'老师点到他的名字，他____地回答了一声“到”。',opts:['明亮','响亮','漂亮','光亮'],ans:1,
   exp:'响亮 dùng cho ÂM THANH (to, rõ). 明亮, 光亮 dùng cho ánh sáng; 漂亮 = đẹp.'},
  {wrong:'出国前，奶奶____我要按时吃饭，别太累了。',opts:['嘱咐','告别','答应','拜托'],ans:0,
   exp:'嘱咐 + người + V = dặn ai làm gì. 告别 = chia tay; 答应 = đồng ý; 拜托 = nhờ (người nói nhờ người khác, không phải dặn).'},
  {wrong:'好老师善于____学生的积极性，让每个人都愿意开口。',opts:['调查','调整','调动','移动'],ans:2,
   exp:'调动积极性 = khơi dậy tính tích cực (cụm cố định). 调查 = điều tra; 调整 = điều chỉnh; 移动 = di chuyển.'},
  {wrong:'听说要去海边春游，同学们的热情一下子____起来。',opts:['增长','高涨','提高','上升'],ans:1,
   exp:'热情高涨 = nhiệt tình dâng cao (cảm xúc). 增长, 上升 thường cho số liệu; 提高 cần tân ngữ hoặc dùng cho trình độ.'},
  {wrong:'要完成这项艰巨的工作，____得三个月。',opts:['大体','大量','大致','大约是'],ans:2,
   exp:'Ước lượng thời gian bằng phó từ đứng trước 得 → 大致 (đáp án sách). 大体 không dùng để ước lượng; 大量 = số lượng lớn; 大约是 thừa 是 trước 得.'},
  {wrong:'看着考试成绩，他深深地____了一口气。',opts:['生','喘','吸','叹'],ans:3,
   exp:'叹了一口气 = thở dài một hơi (buồn, thất vọng). 生气 = giận; 喘气 = thở hổn hển; 吸了一口气 = hít một hơi (không có nghĩa buồn).'},
  {wrong:'这位老中医医术____，很多病人从外地专门来找他看病。',opts:['高大','高级','高兴','高明'],ans:3,
   exp:'医术高明 = y thuật cao minh. 高大 = to cao; 高级 = cao cấp; 高兴 = vui.'},
  {wrong:'老师一问“谁愿意试试”，好几个同学____举起了手。',opts:['一起','一共','一向','一齐'],ans:3,
   exp:'Nhấn CÙNG MỘT LÚC giơ tay → 一齐. 一起 nhấn cùng nhau (thường 跟……一起); 一共 = tổng cộng; 一向 = xưa nay.'},
  {wrong:'周瑜____下属：造箭用的材料，不要给他准备齐全。',opts:['吩咐','拜访','请求','探望'],ans:0,
   exp:'Người trên sai bảo cấp dưới → 吩咐. 拜访, 探望 = thăm; 请求 = thỉnh cầu (người dưới với người trên).'},
  {wrong:'我们的科研经费____，请大家不要为此担心。',opts:['充分','满足','足够的','充足'],ans:3,
   exp:'经费充足 = kinh phí dồi dào (练习2 của sách). 充分 dùng cho điều trừu tượng; 满足 là động từ; 足够的 cần danh từ đi sau.'},
  {wrong:'我们即将毕业，今天特地回学校____教过我们的老师。',opts:['探听','探望','探索','寻找'],ans:1,
   exp:'探望 + người = đến thăm. 探听 = dò la tin tức; 探索 = khám phá; 寻找 = tìm kiếm.'},
  {wrong:'十万支箭，三天怎么造得成？诸葛亮不会说话不____吧？',opts:['算了','算账','打算','算数'],ans:3,
   exp:'说话不算数 = nói không giữ lời (bài khoá). 算了 = thôi bỏ qua; 算账 = tính sổ; 打算 = dự định.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 25 + ôn từ HSK 6 bài 1–21 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Kỳ thi cuối kỳ sắp bắt đầu rồi, việc cấp bách trước mắt là đem những câu làm sai ôn lại một lượt.',zh:'期末考试即将开始，当务之急是把做错的题再复习一遍。',py:'Qīmò kǎoshì jíjiāng kāishǐ, dāngwùzhījí shì bǎ zuòcuò de tí zài fùxí yí biàn.',goiY:['即将','当务之急','把……'],giai:'即将 + V (văn viết) = sắp; 当务之急是 + câu 把 nêu việc gấp nhất. "Ôn lại một lượt" = 再复习一遍, không nói 复习一次.'},
  {vi:'Việc cô chủ nhiệm đã giao phó, thời gian có gấp đến mấy thì chúng tôi cũng phải làm cho thật tốt.',zh:'班主任委托的事，时间再紧迫，我们也要把它办好。',py:'Bānzhǔrèn wěituō de shì, shíjiān zài jǐnpò, wǒmen yě yào bǎ tā bànhǎo.',goiY:['委托','紧迫','再……也……'],giai:'再 + Adj，也…… = dù … đến mấy cũng … (nhượng bộ giả thiết); 委托的事 làm chủ đề đặt đầu câu, sau đó dùng 它 thay thế (篇章: 替代).'},
  {vi:'Thầy dặn chúng tôi: lỗi chính tả trong bài văn sửa được chỗ nào thì sửa chỗ ấy, còn hạn nộp bài thì tuyệt đối đừng trì hoãn.',zh:'老师叮嘱我们，作文里的错别字能改就改，交作业的期限千万别拖延。',py:'Lǎoshī dīngzhǔ wǒmen, zuòwén li de cuòbiézì néng gǎi jiù gǎi, jiāo zuòyè de qīxiàn qiānwàn bié tuōyán.',goiY:['叮嘱','能改就改','期限','拖延'],giai:'能A就A = cố hết mức (được thì làm) — điểm ngữ pháp 2; 千万别 = tuyệt đối đừng. Không dịch "sửa được chỗ nào" thành 哪儿能改.'},
  {vi:'Kế hoạch tổ chức sinh nhật cho cô giáo là bí mật, các cậu phải giữ kín giúp tớ, đừng để lộ tin, nếu không thì bất ngờ sẽ chẳng còn gì nữa.',zh:'给老师过生日的计划是个机密，你们得替我保密，千万别走漏消息，否则惊喜就没了。',py:'Gěi lǎoshī guò shēngrì de jìhuà shì ge jīmì, nǐmen děi tì wǒ bǎo mì, qiānwàn bié zǒulòu xiāoxi, fǒuzé jīngxǐ jiù méi le.',goiY:['机密','保密','走漏','否则'],giai:'替 + người + 保密 (保密 không mang tân ngữ); 否则 = nếu không thì — chính là cách "替代" một vế giả thiết (如果走漏了消息) như sách phân tích.'},
  {vi:'Ngoài miệng tuy cậu ấy thừa nhận đối thủ giỏi hơn mình, nhưng trong lòng vẫn không phục, chỉ mong trận sau thắng lại ngay.',zh:'他嘴上虽然承认对手比自己高明，心里却一直不服气，巴不得下次比赛就赢回来。',py:'Tā zuǐ shang suīrán chéngrèn duìshǒu bǐ zìjǐ gāomíng, xīnli què yìzhí bù fúqì, bābude xià cì bǐsài jiù yíng huílai.',goiY:['虽然……却……','高明','服气','巴不得'],giai:'虽然……却…… đối lập miệng – lòng; 巴不得 (ôn HSK 6 bài 1) = chỉ mong; A 比 B 高明 = A giỏi hơn B.'},
  {vi:'Lớp trưởng tự ý quyết định thời gian đi dã ngoại mà không bàn với mọi người, chuyện này khiến cả cô chủ nhiệm cũng rất khó xử.',zh:'班长私自决定了春游的时间，也没跟大家商量，这让班主任也很为难。',py:'Bānzhǎng sīzì juédìngle chūnyóu de shíjiān, yě méi gēn dàjiā shāngliang, zhè ràng bānzhǔrèn yě hěn wéinán.',goiY:['私自','为难','这让……'],giai:'这 thay cho cả sự việc ở hai vế trước (篇章: 替代) — tránh lặp lại; 让 + người + 很为难 = khiến ai khó xử.'},
  {vi:'Ba giờ sáng trời còn chưa sáng, chúng tôi đã lên đường leo núi, vì hướng dẫn viên dặn mọi người nhất định phải lên tới đỉnh trước khi mặt trời mọc.',zh:'凌晨三点天还没亮，我们就启程爬山了，因为导游嘱咐大家一定要在日出前到达山顶。',py:'Língchén sān diǎn tiān hái méi liàng, wǒmen jiù qǐchéng pá shān le, yīnwèi dǎoyóu zhǔfù dàjiā yídìng yào zài rìchū qián dàodá shāndǐng.',goiY:['凌晨','启程','嘱咐','因为'],giai:'还没……就…… nhấn mạnh sớm; vế nguyên nhân 因为 đặt SAU để giải thích (tiếng Trung văn nói cho phép); 嘱咐 + người + V.'},
  {vi:'Để hoàn thành trọn vẹn hoạt động lần này, lớp trưởng huy động cả lớp, việc gì làm trước được thì làm trước, tuyệt đối không để dồn đến phút cuối.',zh:'为了圆满完成这次活动，班长调动了全班同学，什么事能提前做就提前做，绝不留到最后一刻。',py:'Wèile yuánmǎn wánchéng zhè cì huódòng, bānzhǎng diàodòngle quán bān tóngxué, shénme shì néng tíqián zuò jiù tíqián zuò, jué bù liú dào zuìhòu yí kè.',goiY:['圆满','调动','能提前做就提前做'],giai:'为了…… mục đích; 能A就A với A là cụm động từ (提前做) — hai A phải giống hệt nhau; 调动 + người = huy động.'},
  {vi:'Sương mù dày đặc bao phủ cả thành phố, chuyến bay buổi sáng cứ bị hoãn mãi; điều khiến người ta sốt ruột hơn là sân bay mãi vẫn chưa ấn định giờ cất cánh mới.',zh:'大雾笼罩着整座城市，上午的航班一再拖延；更让人着急的是，机场一直没有指定新的起飞时间。',py:'Dà wù lǒngzhàozhe zhěng zuò chéngshì, shàngwǔ de hángbān yízài tuōyán; gèng ràng rén zháojí de shì, jīchǎng yìzhí méiyǒu zhǐdìng xīn de qǐfēi shíjiān.',goiY:['笼罩','拖延','指定','更……的是'],giai:'更让人……的是 = điều khiến người ta … hơn là (tăng tiến); 一再 = hết lần này đến lần khác; 指定 + thời gian = ấn định.'},
  {vi:'Cha mẹ không nên ép con cái; thay vì cứ sai con làm cái này cái kia, chi bằng trước hết tìm hiểu ý định thật sự của con, như vậy vấn đề mới giải quyết ổn thoả được.',zh:'父母不应该逼迫孩子，与其一味地吩咐他做这做那，不如先了解他的真实意图，这样问题才能妥当解决。',py:'Fùmǔ bù yīnggāi bīpò háizi, yǔqí yíwèi de fēnfù tā zuò zhè zuò nà, bùrú xiān liǎojiě tā de zhēnshí yìtú, zhèyàng wèntí cái néng tuǒdàng jiějué.',goiY:['逼迫','与其……不如……','意图','妥当'],giai:'与其 A 不如 B = thay vì A chi bằng B (chọn B); 这样 thay cho cả vế trước (替代); 这样……才…… = như vậy … mới ….'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Chu Du cho rằng mình là một thiên tài, vậy mà lúc nào cũng thua Gia Cát Lượng, vì thế trong lòng mãi không phục.',zh:'周瑜觉得自己是个天才，却总比不过诸葛亮，所以心里一直不服气。',py:'Zhōu Yú juéde zìjǐ shì ge tiāncái, què zǒng bǐ bu guò Zhūgě Liàng, suǒyǐ xīnli yìzhí bù fúqì.',goiY:['却 = vậy mà','比不过 = không bằng, thua','服气 = chịu phục'],giai:'却 chuyển ý bất ngờ; 比不过 là bổ ngữ khả năng (không so bì nổi) → dịch "thua"; 不服气 = "không phục".'},
  {vi:'Đã sắp giao chiến thì việc gấp nhất là làm gấp mười vạn mũi tên, việc này chỉ có thể giao cho Gia Cát Lượng đảm nhận.',zh:'既然即将交战，当务之急就是赶造十万支箭，这件事只能委托诸葛亮承办。',py:'Jìrán jíjiāng jiāozhàn, dāngwùzhījí jiù shì gǎnzào shíwàn zhī jiàn, zhè jiàn shì zhǐ néng wěituō Zhūgě Liàng chéngbàn.',goiY:['既然……就…… = đã … thì …','即将 = sắp','当务之急 = việc gấp nhất','承办 = đảm nhận'],giai:'既然……就…… suy luận từ sự thật đã biết; 这件事 thay cho 赶造十万支箭 (替代). 委托……承办 = giao cho … đảm nhận.'},
  {vi:'Chu Du sai cấp dưới không chuẩn bị đủ vật liệu cho Gia Cát Lượng, mục đích là cố tình kéo dài thời gian, để đến hạn ông ta không làm ra được tên.',zh:'周瑜吩咐下属不给诸葛亮准备齐全材料，目的是故意拖延时间，让他到期限造不出箭。',py:'Zhōu Yú fēnfù xiàshǔ bù gěi Zhūgě Liàng zhǔnbèi qíquán cáiliào, mùdì shì gùyì tuōyán shíjiān, ràng tā dào qīxiàn zào bu chū jiàn.',goiY:['吩咐 = sai bảo','拖延 = kéo dài','期限 = kỳ hạn'],giai:'……，目的是…… nêu mục đích; 造不出 là bổ ngữ khả năng → "không làm ra được". 吩咐下属 dịch "sai cấp dưới".'},
  {vi:'Gia Cát Lượng nhờ Lỗ Túc giữ bí mật giúp, vì đây là việc cơ mật, một khi để lộ tin thì tính mạng ông khó giữ.',zh:'诸葛亮请鲁肃替他保密，因为这是机密，一旦走漏消息，他就性命难保。',py:'Zhūgě Liàng qǐng Lǔ Sù tì tā bǎo mì, yīnwèi zhè shì jīmì, yídàn zǒulòu xiāoxi, tā jiù xìngmìng nán bǎo.',goiY:['保密 = giữ bí mật','机密 = cơ mật','一旦……就…… = một khi … thì …','走漏 = để lộ'],giai:'一旦……就…… giả thiết điều xấu có thể xảy ra; 性命难保 = "tính mạng khó giữ" (văn viết, 4 chữ).'},
  {vi:'Lỗ Túc về báo lại, quả nhiên không nhắc chuyện mượn thuyền; Chu Du trầm ngâm hồi lâu mà vẫn đoán không ra ý đồ của Gia Cát Lượng.',zh:'鲁肃回来报告时果然没提借船的事，周瑜沉思良久也猜不出诸葛亮的意图。',py:'Lǔ Sù huílai bàogào shí guǒrán méi tí jiè chuán de shì, Zhōu Yú chénsī liángjiǔ yě cāi bu chū Zhūgě Liàng de yìtú.',goiY:['果然 = quả nhiên','沉思良久 = trầm ngâm hồi lâu','意图 = ý đồ'],giai:'也 ở vế sau mang ý "mà vẫn" (nhượng bộ ngầm); 猜不出 = đoán không ra.'},
  {vi:'Vì sương mù dày đặc phủ kín mặt sông, Tào Tháo không nắm rõ tình hình, đành điều động cung thủ bắn tên về phía có tiếng trống.',zh:'由于大雾封锁了江面，曹操弄不清情况，只好调动弓箭手朝传来鼓声的方位放箭。',py:'Yóuyú dà wù fēngsuǒle jiāngmiàn, Cáo Cāo nòng bu qīng qíngkuàng, zhǐhǎo diàodòng gōngjiànshǒu cháo chuánlái gǔshēng de fāngwèi fàng jiàn.',goiY:['由于 = do, vì','封锁 = phủ kín','调动 = điều động','方位 = hướng'],giai:'由于 (văn viết) nêu nguyên nhân; 封锁 ở đây là nghĩa văn học "phủ kín"; 朝……的方位 = về phía ….'},
  {vi:'Binh sĩ dàn hàng ngang tại chỗ đã được chỉ định, vừa đánh trống vừa hò hét, tiếng càng vang dội càng tốt.',zh:'士兵们在指定的地点一字排开，一边敲鼓一边高喊，声音能多响亮就多响亮。',py:'Shìbīngmen zài zhǐdìng de dìdiǎn yízì páikāi, yìbiān qiāo gǔ yìbiān gāo hǎn, shēngyīn néng duō xiǎngliàng jiù duō xiǎngliàng.',goiY:['指定 = chỉ định','一边……一边…… = vừa … vừa …','能多响亮就多响亮 = càng vang càng tốt'],giai:'能多 A 就多 A = cố làm cho A đến mức cao nhất; tiếng Việt dịch "càng … càng tốt" hoặc "… được bao nhiêu thì … bấy nhiêu".'},
  {vi:'Gia Cát Lượng ra lệnh quay thuyền lại để hứng tên, binh sĩ khí thế hừng hực; mãi đến rạng sáng, họ mới nhân lúc sương mù lên đường quay về.',zh:'诸葛亮下令把船掉过来受箭，士兵们情绪高涨；直到凌晨，他们才趁着大雾启程返航。',py:'Zhūgě Liàng xià lìng bǎ chuán diào guòlai shòu jiàn, shìbīngmen qíngxù gāozhǎng; zhídào língchén, tāmen cái chènzhe dà wù qǐchéng fǎnháng.',goiY:['高涨 = dâng cao','直到……才…… = mãi đến … mới …','启程 = lên đường'],giai:'直到……才…… nhấn thời điểm muộn; 趁着 = nhân lúc; 情绪高涨 dịch "khí thế hừng hực".'},
  {vi:'Sau khi hai mươi chiếc thuyền cập bờ, tính sơ qua thì trên thuyền có hơn mười vạn mũi tên, đủ thấy Gia Cát Lượng đã hoàn thành nhiệm vụ trọn vẹn.',zh:'二十条船靠岸以后，大致算了算，船上的箭有十万多支，可见诸葛亮圆满完成了任务。',py:'Èrshí tiáo chuán kào àn yǐhòu, dàzhì suànle suàn, chuán shang de jiàn yǒu shíwàn duō zhī, kějiàn Zhūgě Liàng yuánmǎn wánchéngle rènwu.',goiY:['大致 = sơ qua','可见 = đủ thấy','圆满 = trọn vẹn'],giai:'可见 rút ra kết luận từ sự thật trước; 十万多支 = "hơn mười vạn" (多 đứng sau số tròn).'},
  {vi:'Chu Du vốn định để Gia Cát Lượng đến hạn phải chịu phạt, không ngờ trái lại còn giúp đối phương lập công, đành thở dài thừa nhận: "Hắn đúng là thiên tài, quả thật cao minh hơn ta."',zh:'周瑜本想让诸葛亮到期受罚，没想到反而成全了对方，只好叹着气承认：“他真是天才，确实比我高明。”',py:'Zhōu Yú běn xiǎng ràng Zhūgě Liàng dàoqī shòu fá, méi xiǎngdào fǎn\'ér chéngquánle duìfāng, zhǐhǎo tànzhe qì chéngrèn: “Tā zhēn shì tiāncái, quèshí bǐ wǒ gāomíng.”',goiY:['没想到……反而…… = không ngờ … trái lại','叹着气 = thở dài','高明 = cao minh'],giai:'本想……，没想到反而…… = kết quả ngược với dự định; 成全 = giúp người khác đạt được (ở đây mỉa mai: giúp đối phương lập công).'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 61): viết truyện dân gian "智慧的……" ≥ 400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'《草船借箭》是在中国广为流传的一个故事，三国时期魏、蜀、吴三个政权有战争有联合，周瑜嫉妒诸葛亮的才华，故意刁难诸葛亮，最后诸葛亮以自己的聪明才智胜出。在你们国家一定也有许多这样的智慧小故事，请以“智慧的……”为题写一个你们国家的民间故事，字数不少于400字。',
  prompt:'"Thuyền cỏ mượn tên" là câu chuyện được lưu truyền rộng rãi ở Trung Quốc: thời Tam Quốc, ba chính quyền Nguỵ, Thục, Ngô vừa đánh nhau vừa liên minh; Chu Du ghen tài Gia Cát Lượng, cố tình làm khó ông, cuối cùng Gia Cát Lượng thắng nhờ sự thông minh tài trí của mình. Ở nước em chắc chắn cũng có nhiều câu chuyện nhỏ về trí tuệ như vậy. Hãy lấy "智慧的……" (… thông minh / trí tuệ) làm nhan đề, viết một câu chuyện dân gian của nước em, không ít hơn 400 chữ.',
  dan:[
    {hoi:'题目：智慧的……（故事的主人公是谁？）',goiY:'①题目：智慧的…… ②开头：在我们国家，几乎人人都听过……的故事'},
    {hoi:'故事背景：什么时候？在哪儿？主人公有什么特点？',goiY:'①时间、地点 ②主人公从小就聪明过人，尤其擅长……'},
    {hoi:'难题：谁出了什么难题？为什么？',goiY:'①有人心里不服气，故意刁难／为难…… ②期限紧迫，大家都想不出办法'},
    {hoi:'经过：主人公怎样用聪明才智解决难题？',goiY:'①先…… ②然后…… ③最后……（按顺序写清楚经过）'},
    {hoi:'结果：难题解决了吗？对方的反应怎么样？',goiY:'①圆满解决 ②对方沉思良久，不得不叹着气说……'},
    {hoi:'启示：这个故事告诉我们什么？',goiY:'这个故事告诉我们：……'}
  ],
  tuNen:['不服气','为难','期限','委托','承办','吩咐','侧面','大致','沉思','叹着气','高明','圆满'],
  cauTruc:[
    {ten:'以“智慧的……”为题', nhan:'Nhan đề', vd:'（题目：智慧的梁世荣）', khi:'Đặt đúng nhan đề đề bài yêu cầu, ghi ở dòng đầu; chỗ …… là tên nhân vật (hoặc 智慧的小孩 / 智慧的农民…).'},
    {ten:'在……，几乎人人都听过……的故事', nhan:'Mở bài', vd:'在越南，几乎人人都听过梁世荣的故事。', khi:'Giới thiệu câu chuyện nổi tiếng và nhân vật chính ngay câu đầu.'},
    {ten:'……心里不服气，想故意为难……', nhan:'Xung đột', vd:'这位使臣心里有些不服气，想故意为难一下越南的官员。', khi:'Nêu người ra đề khó và lý do — giống Chu Du ghen tài Gia Cát Lượng trong bài khoá.'},
    {ten:'期限是……，时间紧迫，谁也……', nhan:'Tạo kịch tính', vd:'期限是一天，时间紧迫，官员们谁也想不出办法。', khi:'Nhấn áp lực thời gian, như "三天造十万支箭".'},
    {ten:'先……，然后……，最后……', nhan:'Trình tự', vd:'他先……，然后……，最后……', khi:'Kể cách giải quyết theo từng bước rõ ràng (phần quan trọng nhất của truyện trí tuệ).'},
    {ten:'……沉思良久，不得不叹着气说：“……”', nhan:'Kết quả', vd:'使臣沉思良久，不得不叹着气说：“梁世荣确实高明！”', khi:'Phản ứng của đối phương — bắt chước câu kết của bài khoá (周瑜叹着气说……).'},
    {ten:'这个故事告诉我们：与其……，不如……', nhan:'Kết bài', vd:'这个故事告诉我们：遇到难题时，与其着急，不如冷静下来多动脑筋。', khi:'Rút ra bài học, khép lại câu chuyện.'}
  ],
  checklist:[
    'Đã đặt nhan đề dạng "智慧的……" và kể một câu chuyện DÂN GIAN của nước mình (không kể lại chuyện Trung Quốc) chưa?',
    'Đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Câu chuyện có đủ các phần: bối cảnh – nhân vật → ai ra đề khó, vì sao → cách giải quyết từng bước → kết quả, phản ứng của đối phương → bài học chưa?',
    'Phần "cách giải quyết" có kể theo trình tự rõ ràng (先……然后……最后……) để người đọc hiểu được mẹo thông minh chưa?',
    'Đã dùng ít nhất 6 từ mới của bài (不服气, 为难, 期限, 委托, 吩咐, 大致, 沉思, 叹气, 高明, 圆满…) và dùng đúng 即将 / 能A就A hoặc từ thay thế (这, 此, 前者…) chưa?'
  ],
  model:{
    zh:'（题目：智慧的梁世荣）在越南，几乎人人都听过梁世荣的故事。梁世荣是十五世纪越南有名的状元，他从小就聪明过人，尤其擅长算术，大家都叫他“算术状元”。有一年，中国派来了一位使臣。这位使臣早就听说越南人才很多，心里有些不服气，想故意为难一下越南的官员。他指着一头大象说：“你们谁能说出这头大象有多重？期限是一天。”那时候根本没有那么大的秤，时间又紧迫，官员们你看看我，我看看你，谁也想不出办法。国王只好把梁世荣请来，委托他承办这件事。梁世荣一点儿也不着急，笑着说：“这件事不难，请大家跟我到江边去。”他先吩咐士兵把大象牵到一条大船上，等船停稳以后，在船的侧面水到达的地方画了一条线。然后，他让人把大象牵下来，往船上一筐一筐地装石头，直到船沉到刚才画线的地方。最后，他让人把这些石头分别称一称，再把重量加在一起，大致就是大象的重量了。使臣看到这个方法，沉思良久，不得不叹着气说：“越南真是人才辈出，梁状元确实高明！”从此，他再也不敢小看越南人了。这个故事告诉我们：遇到难题时，与其着急，不如冷静下来多动脑筋，再难的问题也能圆满解决。',
    py:'(Tímù: Zhìhuì de Liáng Shìróng) Zài Yuènán, jīhū rénrén dōu tīngguo Liáng Shìróng de gùshi. Liáng Shìróng shì shíwǔ shìjì Yuènán yǒumíng de zhuàngyuan, tā cóng xiǎo jiù cōngming guò rén, yóuqí shàncháng suànshù, dàjiā dōu jiào tā “suànshù zhuàngyuan”. Yǒu yì nián, Zhōngguó pàiláile yí wèi shǐchén. Zhè wèi shǐchén zǎo jiù tīngshuō Yuènán réncái hěn duō, xīnli yǒuxiē bù fúqì, xiǎng gùyì wéinán yíxià Yuènán de guānyuán. Tā zhǐzhe yì tóu dàxiàng shuō: “Nǐmen shéi néng shuōchū zhè tóu dàxiàng yǒu duō zhòng? Qīxiàn shì yì tiān.” Nà shíhou gēnběn méiyǒu nàme dà de chèng, shíjiān yòu jǐnpò, guānyuánmen nǐ kànkan wǒ, wǒ kànkan nǐ, shéi yě xiǎng bu chū bànfǎ. Guówáng zhǐhǎo bǎ Liáng Shìróng qǐnglái, wěituō tā chéngbàn zhè jiàn shì. Liáng Shìróng yìdiǎnr yě bù zháojí, xiàozhe shuō: “Zhè jiàn shì bù nán, qǐng dàjiā gēn wǒ dào jiāngbiān qù.” Tā xiān fēnfù shìbīng bǎ dàxiàng qiāndào yì tiáo dà chuán shang, děng chuán tíngwěn yǐhòu, zài chuán de cèmiàn shuǐ dàodá de dìfang huàle yì tiáo xiàn. Ránhòu, tā ràng rén bǎ dàxiàng qiān xiàlai, wǎng chuán shang yì kuāng yì kuāng de zhuāng shítou, zhídào chuán chéndào gāngcái huà xiàn de dìfang. Zuìhòu, tā ràng rén bǎ zhèxiē shítou fēnbié chēng yi chēng, zài bǎ zhòngliàng jiā zài yìqǐ, dàzhì jiù shì dàxiàng de zhòngliàng le. Shǐchén kàndào zhège fāngfǎ, chénsī liángjiǔ, bùdébù tànzhe qì shuō: “Yuènán zhēn shì réncái bèi chū, Liáng zhuàngyuan quèshí gāomíng!” Cóngcǐ, tā zài yě bù gǎn xiǎokàn Yuènánrén le. Zhège gùshi gàosu wǒmen: yùdào nántí shí, yǔqí zháojí, bùrú lěngjìng xiàlai duō dòng nǎojīn, zài nán de wèntí yě néng yuánmǎn jiějué.',
    vn:'(Nhan đề: Lương Thế Vinh thông minh) Ở Việt Nam, hầu như ai cũng từng nghe câu chuyện về Lương Thế Vinh. Lương Thế Vinh là vị trạng nguyên nổi tiếng của Việt Nam thế kỷ XV, từ nhỏ đã thông minh hơn người, đặc biệt giỏi toán, mọi người đều gọi ông là "Trạng Lường" (trạng nguyên toán học). Có một năm, Trung Quốc cử sang một vị sứ thần. Vị sứ thần này từ lâu đã nghe nói Việt Nam có nhiều nhân tài, trong lòng có phần không phục, muốn cố ý làm khó các quan lại Việt Nam. Ông ta chỉ vào một con voi và nói: "Các ông ai nói được con voi này nặng bao nhiêu? Thời hạn là một ngày." Thời đó hoàn toàn không có cái cân nào to như vậy, thời gian lại gấp, các quan anh nhìn tôi, tôi nhìn anh, không ai nghĩ ra cách. Nhà vua đành mời Lương Thế Vinh đến, giao cho ông đảm nhận việc này. Lương Thế Vinh chẳng hề sốt ruột, cười nói: "Việc này không khó, mời mọi người theo tôi ra bờ sông." Trước tiên, ông sai binh lính dắt voi lên một chiếc thuyền lớn, đợi thuyền đứng yên rồi vạch một đường ở mạn thuyền, chỗ mực nước dâng tới. Sau đó, ông cho người dắt voi xuống, chất đá lên thuyền từng sọt một, cho đến khi thuyền chìm xuống đúng vạch vừa vẽ. Cuối cùng, ông cho người cân riêng từng phần số đá ấy rồi cộng lại, đại khái đó chính là trọng lượng của con voi. Sứ thần thấy cách làm này, trầm ngâm hồi lâu, đành thở dài nói: "Việt Nam quả là nhân tài lớp lớp, Trạng Lương đúng là cao minh!" Từ đó, ông ta không dám coi thường người Việt nữa. Câu chuyện này cho chúng ta biết: gặp bài toán khó, thay vì cuống lên, chi bằng bình tĩnh động não nhiều hơn, vấn đề khó mấy cũng có thể giải quyết trọn vẹn.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 当务之急 · 委托 · 即将 · 吩咐 · 拖延 · 保密 · 能A就A · 高涨 · 圆满 · 高明.',
  questions:[
    {q_zh:'周瑜委托给诸葛亮什么事情？',
     q_vn:'Chu Du giao phó cho Gia Cát Lượng việc gì?',
     hint:'①造箭原因　②造箭时间　③造箭数量',
     sample:'周瑜说，他们即将跟曹操的军队打仗，水上作战用弓箭最好，可是现在缺箭，所以当务之急是赶造箭。周瑜本来说十天，诸葛亮却说三天就行。周瑜委托诸葛亮造十万支箭。',
     sample_vn:'Chu Du nói họ sắp giao chiến với quân Tào, đánh trên sông nước dùng cung tên là tốt nhất, nhưng bây giờ thiếu tên, nên việc gấp nhất là làm gấp tên. Chu Du vốn nói mười ngày, Gia Cát Lượng lại bảo ba ngày là được. Chu Du giao cho Gia Cát Lượng làm mười vạn mũi tên.',
     note:'Đi đủ 3 ý ①原因 (即将交战、缺箭) ②时间 (十天 → 三天) ③数量 (十万支); dùng 当务之急, 委托.'},
    {q_zh:'周瑜给诸葛亮制造了什么困难？',
     q_vn:'Chu Du gây khó khăn gì cho Gia Cát Lượng?',
     hint:'①材料准备　②拖延时间',
     sample:'周瑜吩咐下属，造箭用的材料不要给诸葛亮准备齐全，也不能供应充足。他还故意给诸葛亮拖延时间，想让他到期限造不出箭，好让他受罚。',
     sample_vn:'Chu Du sai cấp dưới không chuẩn bị đủ vật liệu làm tên cho Gia Cát Lượng, cũng không cung cấp dồi dào. Ông ta còn cố tình kéo dài thời gian, muốn Gia Cát Lượng đến hạn không làm ra tên để bị phạt.',
     note:'吩咐 + người + V; 不要……也不能……; kết bằng mục đích 想让他…….'},
    {q_zh:'诸葛亮请鲁肃帮什么忙？',
     q_vn:'Gia Cát Lượng nhờ Lỗ Túc giúp gì?',
     hint:'船、士兵、黑布、草捆儿、保密',
     sample:'诸葛亮请鲁肃借给他二十条船，每条船上要三十名士兵。船要用黑布遮挡严密，还要一千个草捆儿，排在船的侧面。他还请鲁肃替他保密，不要走漏消息。',
     sample_vn:'Gia Cát Lượng nhờ Lỗ Túc cho mượn hai mươi chiếc thuyền, mỗi thuyền ba mươi binh sĩ. Thuyền phải che kín bằng vải đen, còn cần một nghìn bó cỏ xếp ở mạn thuyền. Ông còn nhờ Lỗ Túc giữ bí mật giúp, đừng để lộ tin.',
     note:'Nhắc đủ 5 thứ theo gợi ý; 替 + người + 保密; 不要走漏消息.'},
    {q_zh:'诸葛亮的计谋是什么？',
     q_vn:'Mưu kế của Gia Cát Lượng là gì?',
     hint:'①诸葛亮一方：大雾、敲鼓、船一字摆开　②曹操一方：放箭　③结果：插满了箭',
     sample:'诸葛亮趁着大雾把船开到曹操的驻扎地，让船一字摆开，士兵们敲鼓高喊，声音能多响亮就多响亮。曹操弄不清情况，不敢出兵，只好调动弓箭手一齐放箭。结果，船两边的草捆儿上插满了箭。',
     sample_vn:'Gia Cát Lượng nhân lúc sương mù dày đưa thuyền đến nơi đóng quân của Tào Tháo, cho thuyền dàn hàng ngang, binh sĩ đánh trống hò hét, càng vang càng tốt. Tào Tháo không nắm được tình hình, không dám xuất quân, đành điều cung thủ đồng loạt bắn tên. Kết quả, những bó cỏ hai bên thuyền cắm đầy tên.',
     note:'Kể 3 ý theo hai phía: 诸葛亮一方 → 曹操一方 → 结果; dùng 能多响亮就多响亮, 调动, 一齐.'},
    {q_zh:'诸葛亮完成任务了吗？周瑜的反应是什么？',
     q_vn:'Gia Cát Lượng có hoàn thành nhiệm vụ không? Chu Du phản ứng thế nào?',
     hint:'①圆满完成　②叹着气说',
     sample:'诸葛亮圆满完成了任务，大致算了算，船上的箭有十万多支。鲁肃把借箭的经过告诉了周瑜，周瑜叹着气说：“他真是天才，确实比我高明！”',
     sample_vn:'Gia Cát Lượng đã hoàn thành nhiệm vụ trọn vẹn, tính sơ qua trên thuyền có hơn mười vạn mũi tên. Lỗ Túc kể lại chuyện mượn tên cho Chu Du, Chu Du thở dài nói: "Hắn đúng là thiên tài, quả thật cao minh hơn ta!"',
     note:'圆满完成了任务; 大致算了算; kết bằng câu nói trực tiếp của Chu Du (叹着气说).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 25.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 25',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么还不睡？都凌晨一点了。'},
            {sp:'男',zh:'明天就是交论文的期限了，我还有最后一部分没写完。'}],
     q:'男的为什么还不睡？',qvn:'Vì sao người đàn ông vẫn chưa ngủ?',
     opts:['论文还没写完','在看球赛','心里很紧张','在等朋友的电话'],ans:0,
     why:'明天就是交论文的期限了，我还有最后一部分没写完 → luận văn chưa viết xong. 凌晨一点 chỉ là thời điểm.',
     words:['凌晨','期限']},

    {n:2,
     lines:[{sp:'男',zh:'下周的活动，就委托你来安排吧。'},
            {sp:'女',zh:'你委托的事我当然会尽力，不过时间这么紧迫，我只能保证能做多好就做多好。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['不愿意帮忙','会尽力，但时间很紧','已经安排好了','时间很充足'],ans:1,
     why:'当然会尽力，不过时间这么紧迫 → sẽ cố hết sức nhưng thời gian gấp. 能做多好就做多好 = làm tốt được đến đâu thì làm (能A就A).',
     words:['委托','紧迫']},

    {n:3,
     lines:[{sp:'女',zh:'小王怎么一脸不高兴？'},
            {sp:'男',zh:'比赛输了呗。他嘴上说对手比他高明，其实心里一直不服气呢。'}],
     q:'关于小王，可以知道什么？',qvn:'Về Tiểu Vương, có thể biết điều gì?',
     opts:['赢了比赛','很佩服对手','心里不服气','不想再参加比赛了'],ans:2,
     why:'其实心里一直不服气 → trong lòng không phục. 嘴上说对手比他高明 chỉ là ngoài miệng, nên "rất khâm phục đối thủ" sai.',
     words:['高明','服气']},

    {n:4,
     lines:[{sp:'男',zh:'出门前妈妈再三叮嘱我，一定要把护照放好。'},
            {sp:'女',zh:'那你还不赶紧检查一下包？别到了机场才发现没带。'}],
     q:'女的让男的做什么？',qvn:'Người phụ nữ bảo người đàn ông làm gì?',
     opts:['给妈妈打电话','马上去机场','重新办护照','检查包里的护照'],ans:3,
     why:'那你还不赶紧检查一下包？ — câu hỏi phản vấn = mau kiểm tra túi (xem có hộ chiếu không).',
     words:['叮嘱']},

    {n:5,
     lines:[{sp:'女',zh:'听说这次国际会议是你们公司承办的？'},
            {sp:'男',zh:'是啊，会议圆满结束了，老板一高兴，给大家放了三天假。'}],
     q:'关于男的公司，下列哪项正确？',qvn:'Về công ty của người đàn ông, điều nào đúng?',
     opts:['会议被推迟了','员工放了三天假','老板很不满意','还要承办下一次会议'],ans:1,
     why:'老板一高兴，给大家放了三天假 → nhân viên được nghỉ ba ngày. 圆满结束 → hội nghị không bị hoãn.',
     words:['承办','圆满']},

    {n:6,
     lines:[{sp:'男',zh:'这件事千万别告诉小李，我们准备给他一个惊喜。'},
            {sp:'女',zh:'放心吧，我一定替你保密，不会走漏消息的。'}],
     q:'女的会怎么做？',qvn:'Người phụ nữ sẽ làm gì?',
     opts:['替男的保密','马上告诉小李','帮男的准备礼物','给小李打电话'],ans:0,
     why:'我一定替你保密，不会走漏消息的 → giữ bí mật giúp. Không nhắc đến việc chuẩn bị quà.',
     words:['保密','走漏']},

    {n:7,
     lines:[{sp:'女',zh:'天气预报说明天早上有大雾，航班可能会拖延。'},
            {sp:'男',zh:'那我们能早走就早走，今天晚上就启程，到机场附近住一晚吧。'}],
     q:'男的打算怎么做？',qvn:'Người đàn ông định làm thế nào?',
     opts:['推迟出发','改坐火车','明天凌晨再出发','今晚就去机场附近住'],ans:3,
     why:'今天晚上就启程，到机场附近住一晚 → tối nay lên đường, ngủ gần sân bay. 能早走就早走 = đi sớm được bao nhiêu thì đi.',
     words:['拖延','启程']},

    {n:8,
     lines:[{sp:'男',zh:'《三国演义》是中国古代四大名著之一。书中的诸葛亮被看作智慧的化身，“草船借箭”就是其中最有名的故事之一：他利用大雾天气和曹操多疑的性格，只用了三天就“借”到了十万多支箭。直到今天，人们还常用“诸葛亮”来称赞那些聪明、有计谋的人。'}],
     q:'人们常用“诸葛亮”来称赞什么样的人？',qvn:'Người ta thường dùng "Gia Cát Lượng" để khen người như thế nào?',
     opts:['身体强壮的人','说话算数的人','聪明、有计谋的人','会造武器的人'],ans:2,
     why:'Câu cuối: 人们还常用“诸葛亮”来称赞那些聪明、有计谋的人.',
     words:['武器','算数']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng nhóm nhắn tin: bài thuyết trình nhóm ngày mai phải nộp mà vẫn còn nhiều phần chưa làm.',
     a:{sp:'Bạn cùng nhóm',zh:'明天就要交了，还有好多没做完，怎么办啊？',vn:'Mai phải nộp rồi mà còn nhiều phần chưa làm xong, làm sao đây?'},
     need:['Dùng 期限 hoặc 紧迫','Dùng 能A就A'],
     sample:'时间是紧迫了点儿，不过期限是明天下午，还来得及。今天晚上我们能多做就多做，明天早上再检查一遍。',
     samplePy:'Shíjiān shì jǐnpòle diǎnr, búguò qīxiàn shì míngtiān xiàwǔ, hái láidejí. Jīntiān wǎnshang wǒmen néng duō zuò jiù duō zuò, míngtiān zǎoshang zài jiǎnchá yí biàn.',
     sampleVn:'Thời gian hơi gấp thật, nhưng hạn là chiều mai, vẫn kịp. Tối nay làm được bao nhiêu thì làm bấy nhiêu, sáng mai kiểm tra lại một lượt.',
     tip:'能多V就多V = cố làm càng nhiều càng tốt; 来得及 = còn kịp (ôn HSK 4).'},

    {scene:'Em họ làm vỡ bình hoa của bà, xin em đừng nói với ai.',
     a:{sp:'Em họ',zh:'姐，花瓶是我不小心打碎的，你千万别告诉奶奶！',vn:'Chị ơi, bình hoa là em lỡ tay làm vỡ, chị đừng nói với bà nhé!'},
     need:['Dùng 保密 hoặc 走漏','Khuyên em tự nhận lỗi'],
     sample:'我可以替你保密，不过纸包不住火，与其等奶奶发现，不如你自己去跟她说清楚。',
     samplePy:'Wǒ kěyǐ tì nǐ bǎo mì, búguò zhǐ bāo bu zhù huǒ, yǔqí děng nǎinai fāxiàn, bùrú nǐ zìjǐ qù gēn tā shuō qīngchu.',
     sampleVn:'Chị có thể giữ bí mật giúp em, nhưng giấy không gói được lửa; thay vì đợi bà phát hiện, chi bằng em tự đi nói rõ với bà.',
     tip:'替 + người + 保密; 纸包不住火 = giấy không gói được lửa; 与其……不如…….'},

    {scene:'Cô giáo hỏi lớp trưởng (em) việc chuẩn bị cho lễ hội văn nghệ của trường sắp diễn ra.',
     a:{sp:'Cô giáo',zh:'学校的文艺晚会下周就要开始了，你们班准备得怎么样了？',vn:'Tuần sau đêm văn nghệ của trường bắt đầu rồi, lớp em chuẩn bị đến đâu rồi?'},
     need:['Dùng 即将','Dùng 当务之急'],
     sample:'晚会即将开始，节目我们已经排好了。现在的当务之急是准备演出服装，我已经委托小张去办了。',
     samplePy:'Wǎnhuì jíjiāng kāishǐ, jiémù wǒmen yǐjīng páihǎo le. Xiànzài de dāngwùzhījí shì zhǔnbèi yǎnchū fúzhuāng, wǒ yǐjīng wěituō Xiǎo Zhāng qù bàn le.',
     sampleVn:'Đêm văn nghệ sắp bắt đầu, tiết mục chúng em đã tập xong. Việc gấp nhất bây giờ là chuẩn bị trang phục biểu diễn, em đã nhờ Tiểu Trương lo rồi ạ.',
     tip:'即将 + V (trang trọng, hợp nói với thầy cô); 当务之急是……; 委托 + người + V.'},

    {scene:'Bạn em vừa thua một ván cờ, cứ nói "Chắc tại cậu ấy may thôi".',
     a:{sp:'Bạn',zh:'他就是运气好，要是再下一盘，我肯定能赢！',vn:'Cậu ta chỉ là may thôi, đánh ván nữa chắc chắn tớ thắng!'},
     need:['Dùng 服气 hoặc 高明','Khuyên bạn'],
     sample:'你别不服气了，人家的棋确实比你高明。与其说运气，不如回去好好研究研究。',
     samplePy:'Nǐ bié bù fúqì le, rénjia de qí quèshí bǐ nǐ gāomíng. Yǔqí shuō yùnqi, bùrú huíqu hǎohǎo yánjiū yánjiū.',
     sampleVn:'Cậu đừng không phục nữa, cờ của người ta đúng là cao tay hơn cậu. Thay vì nói chuyện may rủi, chi bằng về nghiên cứu cho kỹ.',
     tip:'别不服气了 = đừng cay cú nữa; A 比 B 高明; 人家 = người ta (ôn HSK 5).'},

    {scene:'Cuối tuần ông bà từ quê lên chơi, mẹ gọi điện hỏi em đã chuẩn bị xong chưa.',
     a:{sp:'Mẹ',zh:'爷爷奶奶十一点就到了，家里都准备好了吗？',vn:'Mười một giờ ông bà đến rồi, ở nhà chuẩn bị xong hết chưa con?'},
     need:['Dùng 妥当','Dùng 款待'],
     sample:'妈，您放心吧，房间收拾好了，饭菜也安排妥当了，我们一定好好款待爷爷奶奶。',
     samplePy:'Mā, nín fàngxīn ba, fángjiān shōushi hǎo le, fàncài yě ānpái tuǒdàng le, wǒmen yídìng hǎohǎo kuǎndài yéye nǎinai.',
     sampleVn:'Mẹ yên tâm ạ, phòng đã dọn xong, cơm nước cũng sắp xếp đâu vào đấy rồi, chúng con nhất định sẽ tiếp đãi ông bà thật chu đáo.',
     tip:'安排妥当 = sắp xếp ổn thoả; 款待 trang trọng, dùng cho khách quý / người lớn đến chơi.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Thông báo phát thanh trên tàu hoả.',
     a:'各位旅客，列车即将到达终点站，请带好您的随身物品。',b:'大家快到了啊，东西别忘了拿！',better:'a',
     why:'Thông báo nơi công cộng cần trang trọng: 各位旅客, 即将到达, 随身物品. Câu b là lời nói miệng thân mật.'},

    {scene:'Em nhắn tin nhờ bạn thân giữ bí mật chuyện riêng.',
     a:'这事儿你可别说出去啊，就咱俩知道。',b:'此事属于机密，望阁下严格保密。',better:'a',
     why:'Nhắn tin với bạn thân dùng khẩu ngữ (这事儿, 咱俩). Câu b (此事, 属于机密, 阁下) như công văn, nghe rất buồn cười.'},

    {scene:'Nhân viên báo cáo kết quả công việc với giám đốc.',
     a:'经理，这事儿我搞定了，没啥问题。',b:'经理，我向您汇报一下，这项工作已经圆满完成了。',better:'b',
     why:'Báo cáo với cấp trên nên dùng 向您汇报, 圆满完成 — lịch sự, rõ ràng. Câu a (搞定, 没啥) quá suồng sã.'},

    {scene:'Em viết một bài kể lại chuyện "Thuyền cỏ mượn tên" cho tạp chí văn học của trường.',
     a:'周瑜沉思良久，猜不出诸葛亮的意图，只好等着。',b:'周瑜想了老半天，也没弄明白诸葛亮到底想干吗。',better:'a',
     why:'Văn tự sự trên tạp chí nên dùng từ ngữ văn viết: 沉思良久, 意图. Câu b (老半天, 干吗) là khẩu ngữ, hợp kể miệng với bạn bè.'},

    {scene:'Một bác lớn tuổi nhờ em một việc em thật sự không làm được.',
     a:'这事我办不了，您找别人吧。',b:'真不好意思，这件事我实在能力有限，您还是另请高明吧。',better:'b',
     why:'Từ chối người lớn tuổi cần mềm mỏng, khiêm tốn: 真不好意思, 能力有限, 另请高明. Câu a cộc lốc, dễ gây mất lòng.'},

    {scene:'Ăn cơm xong ở nhà thầy giáo, em chào ra về.',
     a:'谢谢您和师母的热情款待，饭菜太好吃了！',b:'吃饱了，走了啊。',better:'a',
     why:'Khách chào chủ nhà (lại là thầy cô) phải cảm ơn: 谢谢……的热情款待. Câu b thiếu lễ phép.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'周瑜委托给诸葛亮什么事情？', cue:'①造箭原因　②造箭时间　③造箭数量', words:['服气','军队','武器','当务之急','承办','委托','即将','紧迫','公务','款待','叮嘱']},
    {step:'周瑜给诸葛亮制造了什么困难？', cue:'①材料准备　②拖延时间', words:['算数','逼迫','吩咐','下属','充足','拖延','期限','活该','探听','汇报']},
    {step:'诸葛亮请鲁肃帮什么忙？', cue:'船、士兵、黑布、草捆儿、保密', words:['探望','寒暄','为难','严密','侧面','机密','保密','走漏','沉思','意图']},
    {step:'诸葛亮的计谋是什么？', cue:'①诸葛亮一方：大雾、敲鼓、船一字摆开　②曹操一方：放箭　③结果：插满了箭', words:['私自','妥当','占领','封锁','驻扎','指定','响亮','舱','嘱咐','茫茫','调动','一齐','方位','高涨','凌晨','笼罩','启程']},
    {step:'诸葛亮完成任务了吗？周瑜的反应是什么？', cue:'①圆满完成　②叹着气说', words:['大致','圆满','叹气','天才','高明']}
  ],
  checklist: [
    'Kể đủ 5 ý theo đúng thứ tự bảng chưa (việc được giao → khó khăn Chu Du gây ra → nhờ Lỗ Túc → mưu kế → kết quả và phản ứng của Chu Du)?',
    'Ý 1 có nêu đủ nguyên nhân (即将交战、缺箭), thời gian (十天 → 三天) và số lượng (十万支) không?',
    'Ý 3 có kể đủ 5 thứ Gia Cát Lượng nhờ (船、士兵、黑布、草捆儿、保密) không?',
    'Ý 4 có kể theo hai phía (诸葛亮一方 → 曹操一方) rồi mới nói kết quả, dùng được 能多响亮就多响亮 không?',
    'Có kết bằng câu của Chu Du (叹着气说：“他真是天才，确实比我高明！”) và kể bằng LỜI MÌNH không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 56–61) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“即将”完成句子（注释1 · 练一练）', vn:'Dùng 即将 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'他＿＿，参加在多伦多举行的国际摄影展。', tu:'即将', dap:'他即将去加拿大，参加在多伦多举行的国际摄影展。',
      giai:'Toronto (多伦多) ở Canada → 即将去加拿大 = sắp đi Canada. 即将 + V chỉ việc sắp xảy ra (văn viết).'},
     {s:'8点40分，列车＿＿终点。', tu:'即将', dap:'8点40分，列车即将到达终点。',
      giai:'Thông báo kiểu nhà ga: 即将到达终点 = sắp đến ga cuối.'},
     {s:'大学毕业那一年，她扔掉了所有的旧东西，不管是衣物还是书，没有丝毫的留恋，只有＿＿新生活的兴奋与希望。', tu:'即将', dap:'大学毕业那一年，她扔掉了所有的旧东西，不管是衣物还是书，没有丝毫的留恋，只有即将开始新生活的兴奋与希望。',
      giai:'即将 + V + 的 + N làm định ngữ: 即将开始新生活的兴奋 = niềm hân hoan vì cuộc sống mới sắp bắt đầu.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用“能A就A”改写句子（注释2 · 练一练）', vn:'Dùng 能A就A viết lại câu (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'这是你自己的事，你尽量自己做吧。', tu:'能A就A', dap:'这是你自己的事，能自己做就自己做吧。',
      giai:'尽量 + A → 能A就A, A = 自己做 (cụm động từ); hai A phải giống hệt nhau.'},
     {s:'他是个追求完美的人，什么事都尽量做到最好。', tu:'能A就A', dap:'他是个追求完美的人，什么事能做到最好就做到最好。',
      giai:'A = 做到最好. Bỏ 都 và 尽量, đặt 能……就…… trước hai lần A.'},
     {s:'那时候，我就想离开家，而且希望尽量走得远一点。', tu:'能A就A', dap:'那时候，我就想离开家，而且希望能走多远就走多远。',
      giai:'Với tính từ chỉ mức độ dùng dạng 能 + V + 多 + Adj + 就 + V + 多 + Adj: 能走多远就走多远 = đi được xa bao nhiêu thì đi bấy nhiêu.'}
   ]},

  {kieu:'ab', de:'篇章修辞 · 篇章（3）替代 · 练一练：指出下列句子中标有下划线的替代形式替代了哪些具体内容', vn:'Tu từ văn bản · Thay thế (3) · Luyện tập: chỉ ra hình thức thay thế được gạch chân (ở đây đặt trong 【】) thay cho nội dung cụ thể nào — đáp án theo sách',
   cau:[
     {s:'“大数据”全在于发现和理解信息内容及信息与信息之间的关系，然而，直到最近，我们对【此】似乎还是难以把握。（“此”替代的是：＿＿）',
      opts:['“大数据”','信息内容','最近','我们'], ans:0,
      giai:'Đáp án sách: 此 = 大数据. 对此 = đối với "dữ liệu lớn" (điều vừa nêu ở vế trước) — 此 là đại từ văn viết thay cho sự vật đã nói.'},
     {s:'1949年8月他离开生活了45年的中国，【从此】再也没有踏上中国的土地。（“从此”替代的是：＿＿）',
      opts:['从45年前','从1949年8月','从他出生那年','从踏上中国土地时'], ans:1,
      giai:'Đáp án sách: 从此 = 从1949年8月. 从此 = "từ đó", thay cho mốc thời gian đã nêu ở đầu câu.'},
     {s:'东芝公司在中国曾有【这样】一句广告语：“东芝，东芝，大家的东芝。”在翻译时，前两个“东芝”按日语“Toshiba”发音，于是整句被年轻人开玩笑地用谐音的办法念成“偷去吧，偷去吧，大家的东西。”使其严肃性大降。（“这样”替代的是：＿＿）',
      opts:['“偷去吧，偷去吧，大家的东西。”','东芝公司','“东芝，东芝，大家的东芝。”','日语“Toshiba”'], ans:2,
      giai:'Đáp án sách: 这样 = “东芝，东芝，大家的东芝。” 这样 đứng TRƯỚC, thay cho câu quảng cáo được nêu ngay sau dấu hai chấm (thay thế hướng về phía sau).'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'承办', chu:'办', ds:['主办','举办','办理','办事']},
   cau:[
     {tu:'款待', chu:'待', dap:['对待','亏待','等待','待命'], them:['接待','招待','优待','看待','待遇','善待'],
      giai:'待 trong 款待 = đối đãi, tiếp đãi (对待, 亏待 = bạc đãi, 接待, 招待). Đáp án sách còn có 等待, 待命 với nghĩa khác của 待: chờ đợi.'},
     {tu:'充足', chu:'足', dap:['知足','足够','足球','心满意足'], them:['满足','富足','十足','不足','丰衣足食','自给自足'],
      giai:'足 trong 充足 = đủ, đầy đủ (足够, 知足 = biết đủ, 心满意足). 足球 trong đáp án sách mang nghĩa gốc khác của 足: chân.'},
     {tu:'拖延', chu:'延', dap:['延期','延长','延后','延续'], them:['延迟','延误','顺延','推延','延伸','蔓延'],
      giai:'延 = kéo dài, lùi lại (延期 = hoãn kỳ hạn, 延长 = kéo dài, 延后 = lùi lại, 延续 = kéo dài tiếp).'},
     {tu:'机密', chu:'密', dap:['秘密','密室','缜密','稠密'], them:['保密','泄密','密码','密信','告密','密谋'],
      giai:'密 trong 机密 = bí mật, kín (秘密, 密室 = phòng kín, 保密, 密码 = mật mã). 缜密 (chu đáo, kỹ), 稠密 (dày đặc) trong đáp án sách dùng nghĩa "dày, sát" của 密.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'在发言中，市长指出：“现在最重要的是把经济搞上去。”', tu:'当务之急', dap:'在发言中，市长指出：“当务之急是把经济搞上去。”',
      giai:'现在最重要的是 → 当务之急是 (việc cấp bách trước mắt là) — gọn và trang trọng hơn.'},
     {s:'各位乘客，飞机马上就要起飞了，请大家系好安全带。', tu:'即将', dap:'各位乘客，飞机即将起飞，请大家系好安全带。',
      giai:'马上就要……了 (khẩu ngữ) → 即将 + V (văn viết, thông báo); bỏ 了 cuối câu.'},
     {s:'临行前，妈妈再三对我说：“出门一定要注意安全。”', tu:'叮嘱', dap:'临行前，妈妈再三叮嘱我：“出门一定要注意安全。”',
      giai:'再三对我说 → 再三叮嘱我: 叮嘱 mang tân ngữ chỉ người trực tiếp, không cần 对.'},
     {s:'我们的科研经费足够了，请大家不要为此担心。', tu:'充足', dap:'我们的科研经费充足，请大家不要为此担心。',
      giai:'足够了 → 充足 (dồi dào). Lưu ý 为此: 此 thay cho việc kinh phí (替代).'},
     {s:'做任何事情我们都不要浪费，尽量节省一些。', tu:'能A就A', dap:'做任何事情我们都不要浪费，能省一点就省一点。',
      giai:'尽量节省一些 → 能省一点就省一点 (A = 省一点).'},
     {s:'凌晨三点，天还没亮，他们就开始出发了。', tu:'启程', dap:'凌晨三点，天还没亮，他们就启程了。',
      giai:'开始出发 → 启程 (khởi hành, văn viết); 启程 đã bao hàm "bắt đầu" nên bỏ 开始.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['拖延','委托','紧迫','期限','叮嘱'],
   cau:[
     {s:'我们厂的一个大客户＿＿我们生产一批货，＿＿一周，不能＿＿，到期交不了货，就要受罚。时间＿＿，老板再三＿＿我们，一定要抓紧生产，按时交货。',
      dap:['委托','期限','拖延','紧迫','叮嘱']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['意图','款待','叹着气','为难','寒暄'],
   cau:[
     {s:'一个好久没联系的亲戚昨天来拜访我，见面＿＿以后，我做了一桌饭菜＿＿他，闲聊中，他说明了自己来访的＿＿，是想请我帮他在我们公司找个工作。这件事可真不好办，我＿＿说：“最近经济不景气，公司不需要那么多人，这件事让我很＿＿，我实在帮不了你。”',
      dap:['寒暄','款待','意图','叹着气','为难']}
   ]},

  {kieu:'ab', de:'请说出下列语段中的画线部分替代了什么内容', vn:'Hãy nói phần gạch chân (ở đây đặt trong 【】) trong các đoạn văn dưới đây thay thế cho nội dung gì (bài tập 4) — đáp án theo sách',
   cau:[
     {s:'这里大山环绕，交通不便，连一条像样儿的路都没有，村子里的老人甚至从来没去过城里。尽管【如此】，这儿的优美风景还是吸引了不少游客的目光。（“如此”替代的是：＿＿）',
      opts:['这儿的优美风景','不少游客的目光','城里','这里大山环绕，交通不便，连一条像样儿的路都没有，村子里的老人甚至从来没去过城里'], ans:3,
      giai:'Đáp án sách: 如此 thay cho toàn bộ câu trước (núi bao quanh, giao thông bất tiện…). 尽管如此 = dù vậy.'},
     {s:'他们的产品质优价廉，不仅耐用，还很美观，因【此】，销售到了世界一百多个国家和地区。（“此”替代的是：＿＿）',
      opts:['世界一百多个国家和地区','他们的产品质优价廉，不仅耐用，还很美观','他们','销售'], ans:1,
      giai:'Đáp án sách: 此 = 他们的产品质优价廉，不仅耐用，还很美观. 因此 = vì điều đó (nguyên nhân nêu ở trước).'},
     {s:'去年八月他们离婚了，【当时】他没要任何东西，净身出户了。（“当时”替代的是：＿＿）',
      opts:['去年','去年八月','离婚以后很多年','现在'], ans:1,
      giai:'Đáp án sách: 当时 = 去年八月. 当时 (lúc đó) thay cho mốc thời gian đã nêu ở vế trước.'}
   ]}
];
