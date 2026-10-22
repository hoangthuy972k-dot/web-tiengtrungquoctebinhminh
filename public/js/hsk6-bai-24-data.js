// ══════════════════════════════════════════
// DATA — HSK6 Bài 24: 体育明星们的离奇遭遇 (Cảnh ngộ ly kỳ của các ngôi sao thể thao)
// 第六单元 趣味世界 · Nguồn: HSK标准教程6下 (tr. 42–50)
// Bài khoá: 体育明星们的离奇遭遇 (1043 chữ) — 改编自《北京晚报》文章《体育明星们的“离奇伤害”》
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'离奇',py:'líqí',pos:'Tính từ',vn:'ly kỳ, lạ lùng, khác thường',hv:'ly kỳ',em:'🌀',lesson:1,
   explain:['Chỉ sự việc, câu chuyện KHÁC THƯỜNG, khó tin, không giống lẽ bình thường: 离 = rời xa, 奇 = lạ → xa rời lẽ thường. Hay dùng cho 事件, 经历, 案件, 故事, 情节, 遭遇.','Sắc thái văn viết, hay gặp trong tin tức, truyện trinh thám. Gần 奇怪 nhưng mạnh hơn và thường nói về cả một sự việc có diễn biến kỳ lạ (离奇的巧合, 离奇死亡).'],
   usage:'离奇的 + 遭遇 / 事件 / 经历 / 故事 / 巧合; (情节 / 经过) + 十分离奇; 离奇 + 地 + V (离奇地失踪).',
   collo:['离奇遭遇','离奇的巧合','情节离奇','离奇的经历'],
   ex_zh:'这是阴谋，还是离奇的巧合？',ex_py:'Zhè shì yīnmóu, háishi líqí de qiǎohé?',ex_vn:'Đây là âm mưu hay là một sự trùng hợp ly kỳ?',
   exList:[
     {zh:'明星们受伤的原因有时十分离奇，让人哭笑不得。',py:'Míngxīngmen shòushāng de yuányīn yǒushí shífēn líqí, ràng rén kūxiào-bùdé.',vn:'Nguyên nhân các ngôi sao bị thương đôi khi vô cùng ly kỳ, khiến người ta dở khóc dở cười.'},
     {zh:'这部侦探小说情节离奇，我一口气就读完了。',py:'Zhè bù zhēntàn xiǎoshuō qíngjié líqí, wǒ yìkǒuqì jiù dúwán le.',vn:'Cuốn tiểu thuyết trinh thám này tình tiết ly kỳ, tôi đọc một mạch là xong.'},
     {zh:'爷爷年轻时在海上的那段经历非常离奇，说出来谁都不信。',py:'Yéye niánqīng shí zài hǎi shang de nà duàn jīnglì fēicháng líqí, shuō chūlái shéi dōu bú xìn.',vn:'Trải nghiệm trên biển hồi ông nội còn trẻ vô cùng ly kỳ, kể ra chẳng ai tin.'}
   ],
   colloFull:[
     {zh:'离奇遭遇',py:'líqí zāoyù',vn:'cảnh ngộ ly kỳ'},
     {zh:'离奇的巧合',py:'líqí de qiǎohé',vn:'sự trùng hợp kỳ lạ'},
     {zh:'情节离奇',py:'qíngjié líqí',vn:'tình tiết ly kỳ'},
     {zh:'离奇的经历',py:'líqí de jīnglì',vn:'trải nghiệm kỳ lạ'},
     {zh:'离奇伤害',py:'líqí shānghài',vn:'chấn thương kỳ quặc'}
   ],
   patterns:[
     {s:'离奇的 + 遭遇 / 事件 / 巧合',m:'Cảnh ngộ / sự kiện / sự trùng hợp ly kỳ'},
     {s:'(情节 / 经过) + 十分离奇',m:'(Tình tiết / diễn biến) rất ly kỳ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này ly kỳ đến mức không ai tin cả.',answer:'这个故事离奇得谁都不相信。',answerPy:'Zhège gùshi líqí de shéi dōu bù xiāngxìn.',
      note:'Adj + 得 + bổ ngữ trình độ; 谁都不…… = không ai … (đại từ nghi vấn phiếm chỉ, ôn HSK 4).',pair:'谁都'},
     {promptLang:'vi',prompt:'Tuy tình tiết bộ phim rất ly kỳ, nhưng diễn viên diễn không hay lắm.',answer:'虽然这部电影情节很离奇，但是演员演得不太好。',answerPy:'Suīrán zhè bù diànyǐng qíngjié hěn líqí, dànshì yǎnyuán yǎn de bú tài hǎo.',
      note:'虽然……但是…… nhượng bộ (ôn HSK 4); câu chủ-vị làm vị ngữ (电影 + 情节很离奇).',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'崇拜',py:'chóngbài',pos:'Động từ',vn:'sùng bái, tôn sùng, hâm mộ (thần tượng)',hv:'sùng bái',em:'🤩',lesson:1,
   explain:['Kính phục, ngưỡng mộ đến mức coi ai đó (hoặc cái gì đó) là thần tượng: 崇 = cao, tôn; 拜 = lạy. Đối tượng thường là người (明星, 英雄, 科学家) hoặc vật được thần thánh hoá (崇拜太阳).','Mạnh hơn 佩服 (khâm phục) và 喜欢. Danh từ đi kèm: 崇拜者 (người hâm mộ), 偶像崇拜 (sùng bái thần tượng).'],
   usage:'崇拜 + 人 (明星 / 英雄 / 偶像); 对 + 人 + 十分崇拜; 被……所崇拜; 崇拜的对象 / 偶像.',
   collo:['崇拜明星','崇拜英雄','盲目崇拜','崇拜的偶像'],
   ex_zh:'每次看到我们崇拜的体育明星在赛场上冲击奖牌，大家都深信……',ex_py:'Měi cì kàndào wǒmen chóngbài de tǐyù míngxīng zài sàichǎng shang chōngjī jiǎngpái, dàjiā dōu shēnxìn……',ex_vn:'Mỗi lần thấy ngôi sao thể thao mà chúng ta hâm mộ tranh huy chương trên sân đấu, mọi người đều tin chắc rằng…',
   exList:[
     {zh:'他从小就崇拜那位足球明星，房间里贴满了他的照片。',py:'Tā cóngxiǎo jiù chóngbài nà wèi zúqiú míngxīng, fángjiān li tiēmǎnle tā de zhàopiàn.',vn:'Từ nhỏ cậu ấy đã hâm mộ ngôi sao bóng đá đó, trong phòng dán kín ảnh của anh ta.'},
     {zh:'古代的人崇拜太阳，认为它能带来丰收。',py:'Gǔdài de rén chóngbài tàiyáng, rènwéi tā néng dàilái fēngshōu.',vn:'Người xưa sùng bái mặt trời, cho rằng nó có thể mang lại mùa màng bội thu.'},
     {zh:'崇拜偶像没什么不好，但千万不能盲目崇拜。',py:'Chóngbài ǒuxiàng méi shénme bù hǎo, dàn qiānwàn bù néng mángmù chóngbài.',vn:'Hâm mộ thần tượng không có gì xấu, nhưng tuyệt đối đừng hâm mộ mù quáng.'}
   ],
   colloFull:[
     {zh:'崇拜明星',py:'chóngbài míngxīng',vn:'hâm mộ ngôi sao'},
     {zh:'崇拜英雄',py:'chóngbài yīngxióng',vn:'tôn sùng anh hùng'},
     {zh:'盲目崇拜',py:'mángmù chóngbài',vn:'sùng bái mù quáng'},
     {zh:'崇拜的偶像',py:'chóngbài de ǒuxiàng',vn:'thần tượng được tôn sùng'},
     {zh:'对他十分崇拜',py:'duì tā shífēn chóngbài',vn:'vô cùng ngưỡng mộ anh ấy'}
   ],
   patterns:[
     {s:'崇拜 + người / vật',m:'Tôn sùng, hâm mộ ai / cái gì'},
     {s:'对 + người + 十分崇拜',m:'Vô cùng ngưỡng mộ ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người mà em gái tôi hâm mộ nhất không phải ca sĩ mà là một nhà khoa học.',answer:'我妹妹最崇拜的人不是歌手，而是一位科学家。',answerPy:'Wǒ mèimei zuì chóngbài de rén bú shì gēshǒu, ér shì yí wèi kēxuéjiā.',
      note:'不是……而是…… phủ định A khẳng định B (ôn HSK 5).',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Chính vì hâm mộ thầy ấy nên cậu ấy mới quyết định học ngành vật lý.',answer:'正是因为崇拜那位老师，他才决定学物理专业。',answerPy:'Zhèng shì yīnwèi chóngbài nà wèi lǎoshī, tā cái juédìng xué wùlǐ zhuānyè.',
      note:'正是因为……才…… nhấn mạnh nguyên nhân (ôn HSK 5).',pair:'正是因为……才……'}
   ]},

  {n:3,zh:'冲击',py:'chōngjī',pos:'Động từ',vn:'xông lên giành, nhắm tới (thành tích); tác động mạnh, va đập',hv:'xung kích',em:'🏅',lesson:1,
   explain:['Nghĩa gốc: (dòng nước, sóng) xô mạnh, va đập (海浪冲击岩石). Nghĩa mở rộng thường gặp: gây tác động, ảnh hưởng mạnh (受到冲击, 带来冲击).','Trong thể thao: dốc sức nhắm tới một thành tích, một mục tiêu cao: 冲击奖牌 / 冠军 / 世界纪录 = xông lên giành huy chương / chức vô địch / kỷ lục thế giới.'],
   usage:'冲击 + 奖牌 / 冠军 / 纪录 (thể thao); 受到 / 带来 + 冲击; 对……造成冲击; (海浪) 冲击 + 岩石.',
   collo:['冲击奖牌','冲击冠军','受到冲击','巨大的冲击'],
   ex_zh:'我们崇拜的体育明星在赛场上冲击奖牌。',ex_py:'Wǒmen chóngbài de tǐyù míngxīng zài sàichǎng shang chōngjī jiǎngpái.',ex_vn:'Những ngôi sao thể thao chúng ta hâm mộ xông lên giành huy chương trên sân đấu.',
   exList:[
     {zh:'这次奥运会，她将第三次冲击金牌。',py:'Zhè cì Àoyùnhuì, tā jiāng dì-sān cì chōngjī jīnpái.',vn:'Kỳ Olympic lần này, cô ấy sẽ lần thứ ba nhắm tới huy chương vàng.'},
     {zh:'网络购物的兴起给实体店带来了巨大的冲击。',py:'Wǎngluò gòuwù de xīngqǐ gěi shítǐdiàn dàiláile jùdà de chōngjī.',vn:'Sự nổi lên của mua sắm trực tuyến đã giáng một đòn mạnh vào cửa hàng truyền thống.'},
     {zh:'海浪不停地冲击着岸边的岩石。',py:'Hǎilàng bù tíng de chōngjīzhe àn biān de yánshí.',vn:'Sóng biển không ngừng xô vào những tảng đá bên bờ.'}
   ],
   colloFull:[
     {zh:'冲击奖牌',py:'chōngjī jiǎngpái',vn:'nhắm tới huy chương'},
     {zh:'冲击冠军',py:'chōngjī guànjūn',vn:'xông lên giành chức vô địch'},
     {zh:'受到冲击',py:'shòudào chōngjī',vn:'bị tác động mạnh'},
     {zh:'巨大的冲击',py:'jùdà de chōngjī',vn:'cú tác động lớn'},
     {zh:'冲击世界纪录',py:'chōngjī shìjiè jìlù',vn:'nhắm tới kỷ lục thế giới'}
   ],
   patterns:[
     {s:'冲击 + 奖牌 / 冠军 / 纪录',m:'Dốc sức giành huy chương / chức vô địch / kỷ lục'},
     {s:'给 / 对…… + 带来 / 造成 + 冲击',m:'Gây tác động mạnh tới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để nhắm tới chức vô địch, cả đội mỗi ngày tập luyện tám tiếng.',answer:'为了冲击冠军，全队每天训练八个小时。',answerPy:'Wèile chōngjī guànjūn, quán duì měi tiān xùnliàn bā ge xiǎoshí.',
      note:'为了…… nêu mục đích đặt đầu câu (ôn HSK 3–4).',pair:'为了'},
     {promptLang:'vi',prompt:'Điện thoại thông minh không chỉ thay đổi cuộc sống mà còn tác động mạnh tới báo giấy.',answer:'智能手机不仅改变了生活，而且对纸质报纸造成了冲击。',answerPy:'Zhìnéng shǒujī bùjǐn gǎibiànle shēnghuó, érqiě duì zhǐzhì bàozhǐ zàochéngle chōngjī.',
      note:'不仅……而且…… tăng tiến (ôn HSK 4); 对……造成冲击; 智能 ôn HSK 6 bài 9.',pair:'不仅……而且……'}
   ]},

  {n:4,zh:'拼搏',py:'pīnbó',pos:'Động từ',vn:'dốc sức chiến đấu, đọ sức, phấn đấu hết mình',hv:'bính bác',em:'💪',lesson:1,
   explain:['Dốc hết sức lực để tranh đấu, vượt khó giành thắng lợi: 拼 = liều, dốc hết; 搏 = vật lộn. Mang sắc thái tích cực, hay dùng trong thể thao, học tập, sự nghiệp.','Hay đi với 奋力 (hết sức), 顽强 (kiên cường); danh từ hoá: 拼搏精神 (tinh thần phấn đấu). Gần 奋斗 nhưng 拼搏 nhấn sự quyết liệt trong cuộc đọ sức.'],
   usage:'奋力 / 顽强 + 拼搏; 拼搏精神; 为 + mục tiêu + 拼搏; 在……中拼搏.',
   collo:['奋力拼搏','拼搏精神','顽强拼搏','为梦想拼搏'],
   ex_zh:'他们身上的每一处伤疤都是奋力拼搏的标记。',ex_py:'Tāmen shēnshang de měi yí chù shāngbā dōu shì fènlì pīnbó de biāojì.',ex_vn:'Mỗi vết sẹo trên người họ đều là dấu ấn của sự chiến đấu hết mình.',
   exList:[
     {zh:'虽然输了比赛，但队员们奋力拼搏的样子感动了所有观众。',py:'Suīrán shūle bǐsài, dàn duìyuánmen fènlì pīnbó de yàngzi gǎndòngle suǒyǒu guānzhòng.',vn:'Tuy thua trận, nhưng dáng vẻ chiến đấu hết mình của các cầu thủ đã làm cảm động tất cả khán giả.'},
     {zh:'年轻人就应该为自己的梦想拼搏一回。',py:'Niánqīngrén jiù yīnggāi wèi zìjǐ de mèngxiǎng pīnbó yì huí.',vn:'Người trẻ nên dốc sức một lần vì ước mơ của mình.'},
     {zh:'永不放弃的拼搏精神比奖牌更可贵。',py:'Yǒng bú fàngqì de pīnbó jīngshén bǐ jiǎngpái gèng kěguì.',vn:'Tinh thần phấn đấu không bao giờ bỏ cuộc còn quý hơn cả huy chương.'}
   ],
   colloFull:[
     {zh:'奋力拼搏',py:'fènlì pīnbó',vn:'dốc sức chiến đấu'},
     {zh:'拼搏精神',py:'pīnbó jīngshén',vn:'tinh thần phấn đấu'},
     {zh:'顽强拼搏',py:'wánqiáng pīnbó',vn:'chiến đấu kiên cường'},
     {zh:'为梦想拼搏',py:'wèi mèngxiǎng pīnbó',vn:'phấn đấu vì ước mơ'},
     {zh:'拼搏的象征',py:'pīnbó de xiàngzhēng',vn:'biểu tượng của sự phấn đấu'}
   ],
   patterns:[
     {s:'奋力 / 顽强 + 拼搏',m:'Dốc sức / kiên cường chiến đấu'},
     {s:'为 + mục tiêu + 拼搏',m:'Phấn đấu vì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có dốc sức phấn đấu thì mới có thể thực hiện ước mơ.',answer:'只有奋力拼搏，才能实现梦想。',answerPy:'Zhǐyǒu fènlì pīnbó, cái néng shíxiàn mèngxiǎng.',
      note:'只有……才…… điều kiện duy nhất (ôn HSK 4).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Dù kết quả thế nào, tinh thần chiến đấu của họ đều đáng để chúng ta học tập.',answer:'不管结果怎么样，他们的拼搏精神都值得我们学习。',answerPy:'Bùguǎn jiéguǒ zěnmeyàng, tāmen de pīnbó jīngshén dōu zhíde wǒmen xuéxí.',
      note:'不管……都…… điều kiện bất kể (ôn HSK 4); 值得 + V.',pair:'不管……都……'}
   ]},

  {n:5,zh:'聚精会神',py:'jùjīng-huìshén',pos:'Thành ngữ',vn:'tập trung tinh thần, chăm chú',hv:'tụ tinh hội thần',em:'🎯',lesson:1,
   explain:['Dồn hết tinh thần, sự chú ý vào một việc: 聚 = tụ, 会 = hội → tinh thần tụ lại một chỗ. Nghĩa tích cực, dùng cho người đang nghe, xem, làm việc rất chăm chú.','Hay làm trạng ngữ với 地: 聚精会神地 + V (听讲, 看书, 防守, 工作). Gần nghĩa: 全神贯注, 专心致志.'],
   usage:'聚精会神地 + 听 / 看 / 工作 / 防守; (人) + 正在聚精会神地 + V.',
   collo:['聚精会神地听讲','聚精会神地防守','聚精会神地看书','聚精会神地工作'],
   ex_zh:'曾经有一名足球门将正在比赛中聚精会神地防守。',ex_py:'Céngjīng yǒu yì míng zúqiú ménjiàng zhèngzài bǐsài zhōng jùjīng-huìshén de fángshǒu.',ex_vn:'Từng có một thủ môn bóng đá đang tập trung cao độ phòng thủ trong trận đấu.',
   exList:[
     {zh:'在这位知名教授的课堂上，大家聚精会神地听讲。',py:'Zài zhè wèi zhīmíng jiàoshòu de kètáng shang, dàjiā jùjīng-huìshén de tīngjiǎng.',vn:'Trong giờ học của vị giáo sư nổi tiếng này, mọi người chăm chú nghe giảng.'},
     {zh:'他正聚精会神地做题，连我进门都没发现。',py:'Tā zhèng jùjīng-huìshén de zuò tí, lián wǒ jìn mén dōu méi fāxiàn.',vn:'Cậu ấy đang chăm chú làm bài, đến cả lúc tôi vào cửa cũng không phát hiện.'},
     {zh:'只要聚精会神地学习一个小时，效果比磨蹭一个下午还好。',py:'Zhǐyào jùjīng-huìshén de xuéxí yí ge xiǎoshí, xiàoguǒ bǐ móceng yí ge xiàwǔ hái hǎo.',vn:'Chỉ cần tập trung học một tiếng, hiệu quả còn tốt hơn cả buổi chiều lề mề.'}
   ],
   colloFull:[
     {zh:'聚精会神地听讲',py:'jùjīng-huìshén de tīngjiǎng',vn:'chăm chú nghe giảng'},
     {zh:'聚精会神地防守',py:'jùjīng-huìshén de fángshǒu',vn:'tập trung phòng thủ'},
     {zh:'聚精会神地看书',py:'jùjīng-huìshén de kàn shū',vn:'chăm chú đọc sách'},
     {zh:'聚精会神地工作',py:'jùjīng-huìshén de gōngzuò',vn:'tập trung làm việc'},
     {zh:'聚精会神地看比赛',py:'jùjīng-huìshén de kàn bǐsài',vn:'chăm chú xem trận đấu'}
   ],
   patterns:[
     {s:'聚精会神地 + V',m:'Chăm chú làm gì'},
     {s:'正（在）聚精会神地 + V，连……都没……',m:'Đang chăm chú …, đến … cũng không …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các học sinh đang chăm chú làm bài thi, trong phòng yên tĩnh đến mức nghe rõ cả tiếng kim rơi.',answer:'同学们正聚精会神地考试，教室里安静得连一根针掉在地上都听得见。',answerPy:'Tóngxuémen zhèng jùjīng-huìshén de kǎoshì, jiàoshì li ānjìng de lián yì gēn zhēn diào zài dì shang dōu tīng de jiàn.',
      note:'连……都…… nhấn mạnh; bổ ngữ khả năng 听得见 (ôn HSK 4); gần 鸦雀无声 (HSK 6 bài 1).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Trừ phi em tập trung nghe giảng, nếu không thì rất khó hiểu bài này.',answer:'除非你聚精会神地听讲，否则很难听懂这一课。',answerPy:'Chúfēi nǐ jùjīng-huìshén de tīngjiǎng, fǒuzé hěn nán tīngdǒng zhè yí kè.',
      note:'除非……否则…… điều kiện bắt buộc (ôn HSK 5).',pair:'除非……否则……'}
   ]},

  {n:6,zh:'防守',py:'fángshǒu',pos:'Động từ',vn:'phòng thủ, canh giữ',hv:'phòng thủ',em:'🧤',lesson:1,
   explain:['Canh giữ, bảo vệ vị trí không cho đối phương tấn công vào: 防 = phòng, 守 = giữ. Dùng trong quân sự và nhất là thể thao (đối lập với 进攻).','Có thể làm danh từ: 加强防守, 防守严密. Trong bóng đá: 防守队员 = hậu vệ, cầu thủ phòng ngự.'],
   usage:'防守 + 球门 / 阵地; 加强 / 严密 + 防守; 由攻转守 (chuyển từ công sang thủ); 进攻 ↔ 防守.',
   collo:['加强防守','防守球门','严密防守','防守队员'],
   ex_zh:'门将正在比赛中聚精会神地防守。',ex_py:'Ménjiàng zhèngzài bǐsài zhōng jùjīng-huìshén de fángshǒu.',ex_vn:'Thủ môn đang tập trung cao độ phòng thủ trong trận đấu.',
   exList:[
     {zh:'下半场我们要加强防守，不能再让对方进球了。',py:'Xià bàn chǎng wǒmen yào jiāqiáng fángshǒu, bù néng zài ràng duìfāng jìn qiú le.',vn:'Hiệp hai chúng ta phải tăng cường phòng thủ, không thể để đối phương ghi bàn nữa.'},
     {zh:'这支球队防守严密，很少丢球。',py:'Zhè zhī qiúduì fángshǒu yánmì, hěn shǎo diū qiú.',vn:'Đội bóng này phòng thủ chặt chẽ, rất ít khi để thủng lưới.'},
     {zh:'古代的士兵日夜防守着城门。',py:'Gǔdài de shìbīng rìyè fángshǒuzhe chéngmén.',vn:'Binh lính thời xưa ngày đêm canh giữ cổng thành.'}
   ],
   colloFull:[
     {zh:'加强防守',py:'jiāqiáng fángshǒu',vn:'tăng cường phòng thủ'},
     {zh:'防守球门',py:'fángshǒu qiúmén',vn:'giữ khung thành'},
     {zh:'严密防守',py:'yánmì fángshǒu',vn:'phòng thủ chặt chẽ'},
     {zh:'防守队员',py:'fángshǒu duìyuán',vn:'cầu thủ phòng ngự'},
     {zh:'由攻转守',py:'yóu gōng zhuǎn shǒu',vn:'chuyển từ tấn công sang phòng thủ'}
   ],
   patterns:[
     {s:'加强 / 严密 + 防守',m:'Tăng cường / chặt chẽ phòng thủ'},
     {s:'防守 + 球门 / 阵地 / 城门',m:'Canh giữ khung thành / trận địa / cổng thành'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội chúng ta không những phải tấn công tốt, mà còn phải chú ý phòng thủ.',answer:'我们队不但要进攻好，还要注意防守。',answerPy:'Wǒmen duì búdàn yào jìngōng hǎo, hái yào zhùyì fángshǒu.',
      note:'不但……还…… tăng tiến (ôn HSK 4); 进攻 ↔ 防守.',pair:'不但……还……'},
     {promptLang:'vi',prompt:'Một khi hàng phòng thủ có sơ hở, đối phương sẽ lập tức ghi bàn.',answer:'防守一旦出现漏洞，对方就会马上进球。',answerPy:'Fángshǒu yídàn chūxiàn lòudòng, duìfāng jiù huì mǎshàng jìn qiú.',
      note:'一旦……就…… giả thiết một khi (ôn HSK 5).',pair:'一旦……就……'}
   ]},

  {n:7,zh:'火箭',py:'huǒjiàn',pos:'Danh từ',vn:'tên lửa, hoả tiễn',hv:'hoả tiễn',em:'🚀',lesson:1,
   explain:['Phương tiện bay dùng lực đẩy của khí phụt ra để bay lên, dùng phóng vệ tinh, tàu vũ trụ: 火 = lửa, 箭 = mũi tên.','Nghĩa bóng: cực nhanh — 以火箭般的速度 (nhanh như tên lửa), 坐火箭 (thăng tiến / tăng vọt cực nhanh). Lượng từ: 枚 (一枚火箭).'],
   usage:'发射 + 火箭; 一枚火箭; 以火箭般的速度 + V; 像坐了火箭一样 (tăng vọt).',
   collo:['发射火箭','火箭般的速度','运载火箭','一枚火箭'],
   ex_zh:'一只狗以火箭般的速度冲了进来。',ex_py:'Yì zhī gǒu yǐ huǒjiàn bān de sùdù chōngle jìnlái.',ex_vn:'Một con chó lao vào với tốc độ như tên lửa.',
   exList:[
     {zh:'一只狗以火箭般的速度冲进了球场，横着冲向门将的膝盖。',py:'Yì zhī gǒu yǐ huǒjiàn bān de sùdù chōngjìnle qiúchǎng, héngzhe chōngxiàng ménjiàng de xīgài.',vn:'Một con chó lao vào sân với tốc độ tên lửa, xộc ngang vào đầu gối thủ môn.'},
     {zh:'这枚火箭成功地把卫星送上了太空。',py:'Zhè méi huǒjiàn chénggōng de bǎ wèixīng sòng shàngle tàikōng.',vn:'Quả tên lửa này đã đưa thành công vệ tinh lên vũ trụ.'},
     {zh:'这几年，这座城市的房价像坐了火箭一样往上涨。',py:'Zhè jǐ nián, zhè zuò chéngshì de fángjià xiàng zuòle huǒjiàn yíyàng wǎng shàng zhǎng.',vn:'Mấy năm nay, giá nhà ở thành phố này tăng vọt như ngồi tên lửa.'}
   ],
   colloFull:[
     {zh:'发射火箭',py:'fāshè huǒjiàn',vn:'phóng tên lửa'},
     {zh:'火箭般的速度',py:'huǒjiàn bān de sùdù',vn:'tốc độ như tên lửa'},
     {zh:'运载火箭',py:'yùnzài huǒjiàn',vn:'tên lửa đẩy'},
     {zh:'一枚火箭',py:'yì méi huǒjiàn',vn:'một quả tên lửa'},
     {zh:'像坐了火箭一样',py:'xiàng zuòle huǒjiàn yíyàng',vn:'(tăng) vọt như tên lửa'}
   ],
   patterns:[
     {s:'以火箭般的速度 + V',m:'Làm gì với tốc độ như tên lửa'},
     {s:'发射 + 一枚火箭',m:'Phóng một quả tên lửa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe tiếng chuông tan học, cậu ấy liền lao ra khỏi lớp với tốc độ như tên lửa.',answer:'一听到下课铃声，他就以火箭般的速度冲出了教室。',answerPy:'Yì tīngdào xiàkè língshēng, tā jiù yǐ huǒjiàn bān de sùdù chōngchūle jiàoshì.',
      note:'一……就…… (ôn HSK 3); 以……般的速度 = với tốc độ như …; 般 = 一样.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nghe nói quả tên lửa này được phóng vào sáng sớm, rất nhiều người đến xem.',answer:'据说这枚火箭是在清晨发射的，很多人都来观看了。',answerPy:'Jùshuō zhè méi huǒjiàn shì zài qīngchén fāshè de, hěn duō rén dōu lái guānkàn le.',
      note:'是……的 nhấn mạnh thời gian (ôn HSK 3); 清晨 ôn HSK 6 bài 3.',pair:'是……的'}
   ]},

  {n:8,zh:'横',py:'héng',pos:'Tính từ',vn:'ngang, theo chiều ngang; từ một bên, xộc ngang',hv:'hoành',em:'↔️',lesson:1,
   explain:['Chỉ hướng NGANG (song song mặt đất, từ trái sang phải), đối lập với 竖 (dọc, ôn HSK 6 bài 12). Cũng là tên nét ngang trong chữ Hán (横、竖、撇、点、折).','Làm trạng ngữ: 横着 + V = theo chiều ngang, từ bên sườn (横着冲向他的膝盖 = xộc ngang vào đầu gối). Còn đọc hèng (thô bạo) — không học ở bài này.'],
   usage:'横着 + V (横着放 / 横着冲过来); 横穿 + 马路; 一横一竖; 横 ↔ 竖.',
   collo:['横着冲过来','横穿马路','横着放','一横一竖'],
   ex_zh:'狗横着冲向他的膝盖，然后向他发起进攻。',ex_py:'Gǒu héngzhe chōngxiàng tā de xīgài, ránhòu xiàng tā fāqǐ jìngōng.',ex_vn:'Con chó xộc ngang vào đầu gối anh ta, rồi tấn công anh ta.',
   exList:[
     {zh:'一只狗横着冲向门将的膝盖，门将当场倒地。',py:'Yì zhī gǒu héngzhe chōngxiàng ménjiàng de xīgài, ménjiàng dāngchǎng dǎo dì.',vn:'Một con chó xộc ngang vào đầu gối thủ môn, thủ môn ngã ngay tại chỗ.'},
     {zh:'横穿马路非常危险，一定要走人行横道。',py:'Héngchuān mǎlù fēicháng wēixiǎn, yídìng yào zǒu rénxíng héngdào.',vn:'Băng ngang qua đường rất nguy hiểm, nhất định phải đi vạch dành cho người đi bộ.'},
     {zh:'这张桌子太长了，得横着才能抬进门。',py:'Zhè zhāng zhuōzi tài cháng le, děi héngzhe cái néng tái jìn mén.',vn:'Cái bàn này dài quá, phải xoay ngang mới khiêng qua cửa được.'}
   ],
   colloFull:[
     {zh:'横着冲过来',py:'héngzhe chōng guòlái',vn:'xộc ngang tới'},
     {zh:'横穿马路',py:'héngchuān mǎlù',vn:'băng ngang qua đường'},
     {zh:'横着放',py:'héngzhe fàng',vn:'đặt nằm ngang'},
     {zh:'一横一竖',py:'yì héng yí shù',vn:'một nét ngang một nét sổ'},
     {zh:'人行横道',py:'rénxíng héngdào',vn:'vạch sang đường cho người đi bộ'}
   ],
   patterns:[
     {s:'横着 + V',m:'Làm gì theo chiều ngang / từ bên sườn'},
     {s:'横 ↔ 竖',m:'Ngang ↔ dọc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chữ "十" gồm một nét ngang và một nét sổ, dù trẻ con cũng viết được.',answer:'“十”字由一横一竖组成，哪怕是小孩子也会写。',answerPy:'“Shí” zì yóu yì héng yí shù zǔchéng, nǎpà shì xiǎoháizi yě huì xiě.',
      note:'由……组成 (ôn HSK 5); 哪怕……也…… nhượng bộ giả thiết (ôn HSK 5).',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Đừng băng ngang qua đường, lỡ có xe lao tới thì nguy lắm.',answer:'别横穿马路，万一有车冲过来就危险了。',answerPy:'Bié héngchuān mǎlù, wànyī yǒu chē chōng guòlái jiù wēixiǎn le.',
      note:'万一……就…… giả thiết rủi ro (ôn HSK 5).',pair:'万一'}
   ]},

  {n:9,zh:'进攻',py:'jìngōng',pos:'Động từ',vn:'tấn công, công kích',hv:'tiến công',em:'⚔️',lesson:1,
   explain:['Chủ động tiến lên đánh đối phương (quân sự) hoặc tấn công để ghi điểm (thể thao): 进 = tiến, 攻 = đánh. Đối lập: 防守 / 防御.','Hay dùng khuôn 向……发起进攻 (phát động tấn công vào …), 组织进攻, 进攻型球员. Khác 攻击 (ôn HSK 6 bài 17): 攻击 thiên về đánh vào, công kích (cả bằng lời nói), 进攻 thiên về hành động tiến lên đánh.'],
   usage:'向 + đối tượng + 发起进攻; 组织 / 加强 + 进攻; 进攻 + 对方球门; 进攻 ↔ 防守.',
   collo:['发起进攻','组织进攻','进攻对方','进攻型球员'],
   ex_zh:'狗横着冲向他的膝盖，然后向他发起进攻。',ex_py:'Gǒu héngzhe chōngxiàng tā de xīgài, ránhòu xiàng tā fāqǐ jìngōng.',ex_vn:'Con chó xộc ngang vào đầu gối anh ta rồi phát động tấn công.',
   exList:[
     {zh:'比赛最后五分钟，我们队向对方球门发起了猛烈的进攻。',py:'Bǐsài zuìhòu wǔ fēnzhōng, wǒmen duì xiàng duìfāng qiúmén fāqǐle měngliè de jìngōng.',vn:'Năm phút cuối trận, đội ta phát động tấn công dữ dội vào khung thành đối phương.'},
     {zh:'最好的防守就是进攻。',py:'Zuì hǎo de fángshǒu jiù shì jìngōng.',vn:'Cách phòng thủ tốt nhất chính là tấn công.'},
     {zh:'敌人趁着夜色进攻，但很快就被打退了。',py:'Dírén chènzhe yèsè jìngōng, dàn hěn kuài jiù bèi dǎtuì le.',vn:'Quân địch nhân lúc đêm tối tấn công, nhưng nhanh chóng bị đẩy lùi.'}
   ],
   colloFull:[
     {zh:'发起进攻',py:'fāqǐ jìngōng',vn:'phát động tấn công'},
     {zh:'组织进攻',py:'zǔzhī jìngōng',vn:'tổ chức tấn công'},
     {zh:'进攻对方',py:'jìngōng duìfāng',vn:'tấn công đối phương'},
     {zh:'进攻型球员',py:'jìngōngxíng qiúyuán',vn:'cầu thủ thiên về tấn công'},
     {zh:'猛烈的进攻',py:'měngliè de jìngōng',vn:'đợt tấn công dữ dội'}
   ],
   patterns:[
     {s:'向……发起进攻',m:'Phát động tấn công vào …'},
     {s:'进攻 ↔ 防守',m:'Tấn công ↔ phòng thủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân lúc đối phương đang mệt, chúng ta nên tấn công ngay.',answer:'趁对方正累的时候，我们应该马上进攻。',answerPy:'Chèn duìfāng zhèng lèi de shíhou, wǒmen yīnggāi mǎshàng jìngōng.',
      note:'趁…… = nhân lúc (ôn HSK 5).',pair:'趁'},
     {promptLang:'vi',prompt:'Đội họ tuy tấn công rất mạnh, nhưng phòng thủ lại có nhiều sơ hở.',answer:'他们队虽然进攻很强，防守却有很多漏洞。',answerPy:'Tāmen duì suīrán jìngōng hěn qiáng, fángshǒu què yǒu hěn duō lòudòng.',
      note:'虽然……却…… (却 đứng sau chủ ngữ, ôn HSK 4).',pair:'虽然……却……'}
   ]},

  {n:10,zh:'阴谋',py:'yīnmóu',pos:'Danh từ',vn:'âm mưu, mưu đồ',hv:'âm mưu',em:'🕵️',lesson:1,
   explain:['Kế hoạch bí mật nhằm làm việc xấu, hại người: 阴 = tối, ngầm; 谋 = mưu. Luôn mang nghĩa xấu.','Hay đi với 策划 (ôn HSK 6 bài 5) / 揭穿 / 识破 (vạch trần, nhìn thấu). Tính từ: 阴谋诡计 (âm mưu quỷ kế).'],
   usage:'策划 / 揭穿 / 识破 + 阴谋; 一场阴谋; ……是阴谋还是巧合?',
   collo:['一场阴谋','揭穿阴谋','策划阴谋','阴谋诡计'],
   ex_zh:'人们惊呆了，这是阴谋，还是离奇的巧合？',ex_py:'Rénmen jīngdāi le, zhè shì yīnmóu, háishi líqí de qiǎohé?',ex_vn:'Mọi người sững sờ: đây là âm mưu hay là sự trùng hợp ly kỳ?',
   exList:[
     {zh:'警察终于揭穿了他们的阴谋，把几个坏人都抓了起来。',py:'Jǐngchá zhōngyú jiēchuānle tāmen de yīnmóu, bǎ jǐ ge huàirén dōu zhuāle qǐlái.',vn:'Cảnh sát cuối cùng đã vạch trần âm mưu của chúng, bắt hết mấy kẻ xấu.'},
     {zh:'小说里，这场阴谋是由公司的副经理一手策划的。',py:'Xiǎoshuō li, zhè chǎng yīnmóu shì yóu gōngsī de fù jīnglǐ yìshǒu cèhuà de.',vn:'Trong tiểu thuyết, âm mưu này do phó giám đốc công ty một tay dựng lên.'},
     {zh:'他们的阴谋诡计最终还是失败了。',py:'Tāmen de yīnmóu guǐjì zuìzhōng háishi shībài le.',vn:'Âm mưu quỷ kế của họ rốt cuộc vẫn thất bại.'}
   ],
   colloFull:[
     {zh:'一场阴谋',py:'yì chǎng yīnmóu',vn:'một âm mưu'},
     {zh:'揭穿阴谋',py:'jiēchuān yīnmóu',vn:'vạch trần âm mưu'},
     {zh:'策划阴谋',py:'cèhuà yīnmóu',vn:'dựng âm mưu'},
     {zh:'阴谋诡计',py:'yīnmóu guǐjì',vn:'âm mưu quỷ kế'},
     {zh:'识破阴谋',py:'shípò yīnmóu',vn:'nhìn thấu âm mưu'}
   ],
   patterns:[
     {s:'揭穿 / 识破 / 策划 + 阴谋',m:'Vạch trần / nhìn thấu / dựng âm mưu'},
     {s:'是阴谋，还是巧合？',m:'Là âm mưu hay trùng hợp?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không phải cậu ấy nhắc tôi, tôi đã không nhìn ra âm mưu của bọn họ.',answer:'要不是他提醒我，我就看不出他们的阴谋了。',answerPy:'Yàobúshì tā tíxǐng wǒ, wǒ jiù kàn bu chū tāmen de yīnmóu le.',
      note:'要不是……就…… = nếu không phải … thì đã … (ôn HSK 5); bổ ngữ khả năng 看不出.',pair:'要不是'},
     {promptLang:'vi',prompt:'Chuyện này rốt cuộc là âm mưu hay trùng hợp, đến giờ vẫn chưa ai biết.',answer:'这件事到底是阴谋还是巧合，到现在还没有人知道。',answerPy:'Zhè jiàn shì dàodǐ shì yīnmóu háishi qiǎohé, dào xiànzài hái méiyǒu rén zhīdào.',
      note:'到底……还是…… câu hỏi lựa chọn nhấn mạnh (ôn HSK 4) làm chủ ngữ.',pair:'到底'}
   ]},

  {n:11,zh:'当场',py:'dāngchǎng',pos:'Phó từ',vn:'ngay tại chỗ, ngay lúc đó',hv:'đương trường',em:'📍',lesson:1,
   explain:['Ngay tại nơi và vào lúc sự việc xảy ra: 当 = ngay tại, 场 = nơi chốn. Làm trạng ngữ trước động từ: 当场倒地, 当场死亡, 当场抓获.','Nhấn sự tức thì, không chậm trễ. Khác 当时 (lúc đó — chỉ thời gian): 当场 nhấn CẢ nơi lẫn lúc xảy ra.'],
   usage:'当场 + 死亡 / 倒地 / 抓住 / 表态 / 签字; 被 + 当场 + V (被当场抓获).',
   collo:['当场倒地','当场死亡','当场抓获','当场表演'],
   ex_zh:'门将当场倒地，身受重伤，经久不愈。',ex_py:'Ménjiàng dāngchǎng dǎo dì, shēn shòu zhòngshāng, jīngjiǔ bú yù.',ex_vn:'Thủ môn ngã gục ngay tại chỗ, bị thương nặng, mãi không khỏi.',
   exList:[
     {zh:'昨天那儿发生了一起严重的交通事故，司机当场死亡。',py:'Zuótiān nàr fāshēngle yì qǐ yánzhòng de jiāotōng shìgù, sījī dāngchǎng sǐwáng.',vn:'Hôm qua ở đó xảy ra một vụ tai nạn giao thông nghiêm trọng, tài xế chết ngay tại chỗ.'},
     {zh:'小偷刚把手伸进别人的包里，就被警察当场抓住了。',py:'Xiǎotōu gāng bǎ shǒu shēnjìn biérén de bāo li, jiù bèi jǐngchá dāngchǎng zhuāzhù le.',vn:'Tên trộm vừa thò tay vào túi người khác đã bị cảnh sát tóm gọn tại trận.'},
     {zh:'老板对这个方案很满意，当场就签了合同。',py:'Lǎobǎn duì zhège fāng\'àn hěn mǎnyì, dāngchǎng jiù qiānle hétong.',vn:'Ông chủ rất hài lòng với phương án này, ký hợp đồng ngay tại chỗ.'}
   ],
   colloFull:[
     {zh:'当场倒地',py:'dāngchǎng dǎo dì',vn:'ngã gục tại chỗ'},
     {zh:'当场死亡',py:'dāngchǎng sǐwáng',vn:'chết tại chỗ'},
     {zh:'当场抓获',py:'dāngchǎng zhuāhuò',vn:'bắt quả tang'},
     {zh:'当场表演',py:'dāngchǎng biǎoyǎn',vn:'biểu diễn ngay tại chỗ'},
     {zh:'当场签字',py:'dāngchǎng qiānzì',vn:'ký ngay tại chỗ'}
   ],
   patterns:[
     {s:'当场 + V',m:'Làm gì ngay tại chỗ, ngay lúc đó'},
     {s:'被 + (người) + 当场 + 抓住 / 抓获',m:'Bị bắt quả tang'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài phát biểu của cậu ấy hay đến nỗi hiệu trưởng khen ngợi ngay tại chỗ.',answer:'他的演讲精彩得校长当场就表扬了他。',answerPy:'Tā de yǎnjiǎng jīngcǎi de xiàozhǎng dāngchǎng jiù biǎoyángle tā.',
      note:'Adj + 得 + mệnh đề chỉ mức độ (ôn HSK 4).',pair:'……得……'},
     {promptLang:'vi',prompt:'Cậu ấy gian lận trong phòng thi, bị giám thị bắt quả tang.',answer:'他在考场上作弊，被监考老师当场抓住了。',answerPy:'Tā zài kǎochǎng shang zuòbì, bèi jiānkǎo lǎoshī dāngchǎng zhuāzhù le.',
      note:'Câu bị động 被 + người + V + bổ ngữ (ôn HSK 4).',pair:'被'}
   ]},

  {n:12,zh:'事件',py:'shìjiàn',pos:'Danh từ',vn:'sự kiện, vụ việc',hv:'sự kiện',em:'📰',lesson:1,
   explain:['Sự việc tương đối lớn, bất thường, có ảnh hưởng tới xã hội hoặc được nhiều người chú ý: 猫头鹰事件, 历史事件, 突发事件.','Khác 事情 (việc nói chung, khẩu ngữ): 事件 mang tính "vụ việc" đáng chú ý, hay dùng trên báo chí. Lượng từ: 起 / 个 (一起事件).'],
   usage:'……事件 (猫头鹰事件 / 历史事件 / 突发事件); 一起……事件; 事件 + 引起 + 关注 / 争议.',
   collo:['猫头鹰事件','突发事件','历史事件','一起事件'],
   ex_zh:'南美足球赛场上的猫头鹰事件，赛后成了头条新闻。',ex_py:'Nánměi zúqiú sàichǎng shang de māotóuyīng shìjiàn, sài hòu chéngle tóutiáo xīnwén.',ex_vn:'Vụ việc con cú mèo trên sân bóng Nam Mỹ sau trận đấu đã trở thành tin tức trang nhất.',
   exList:[
     {zh:'这一事件引起了社会的广泛关注。',py:'Zhè yí shìjiàn yǐnqǐle shèhuì de guǎngfàn guānzhù.',vn:'Sự việc này đã gây ra sự quan tâm rộng rãi của xã hội.'},
     {zh:'学校制订了处理突发事件的方案，以免学生遇到危险时手足无措。',py:'Xuéxiào zhìdìngle chǔlǐ tūfā shìjiàn de fāng\'àn, yǐmiǎn xuésheng yùdào wēixiǎn shí shǒuzú-wúcuò.',vn:'Nhà trường xây dựng phương án xử lý sự cố đột xuất, để học sinh khỏi luống cuống khi gặp nguy hiểm.'},
     {zh:'历史课上，老师让我们按时间顺序排列这些历史事件。',py:'Lìshǐ kè shang, lǎoshī ràng wǒmen àn shíjiān shùnxù páiliè zhèxiē lìshǐ shìjiàn.',vn:'Trong giờ lịch sử, thầy bảo chúng tôi sắp xếp các sự kiện lịch sử này theo trình tự thời gian.'}
   ],
   colloFull:[
     {zh:'猫头鹰事件',py:'māotóuyīng shìjiàn',vn:'vụ việc con cú mèo'},
     {zh:'突发事件',py:'tūfā shìjiàn',vn:'sự cố đột xuất'},
     {zh:'历史事件',py:'lìshǐ shìjiàn',vn:'sự kiện lịch sử'},
     {zh:'一起事件',py:'yì qǐ shìjiàn',vn:'một vụ việc'},
     {zh:'事件的经过',py:'shìjiàn de jīngguò',vn:'diễn biến vụ việc'}
   ],
   patterns:[
     {s:'……事件 + 引起了……的关注 / 争议',m:'Vụ việc … gây ra sự quan tâm / tranh cãi'},
     {s:'一起 + (突发 / 交通) + 事件',m:'Một vụ (sự cố / giao thông)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi vụ việc xảy ra, phóng viên lập tức chạy tới hiện trường.',answer:'事件发生以后，记者立刻赶到了现场。',answerPy:'Shìjiàn fāshēng yǐhòu, jìzhě lìkè gǎndàole xiànchǎng.',
      note:'……以后 mốc thời gian; 赶到 = vội tới (ôn HSK 4).',pair:'……以后'},
     {promptLang:'vi',prompt:'Chính nhờ vụ việc này mà mọi người mới bắt đầu coi trọng việc bảo vệ động vật.',answer:'正是这一事件，才让人们开始重视保护动物。',answerPy:'Zhèng shì zhè yí shìjiàn, cái ràng rénmen kāishǐ zhòngshì bǎohù dòngwù.',
      note:'正是……才…… nhấn mạnh (ôn HSK 5); câu kiêm ngữ 让 + người + V.',pair:'正是……才……'}
   ]},

  {n:13,zh:'遮挡',py:'zhēdǎng',pos:'Động từ',vn:'che, che chắn, chắn',hv:'già đáng',em:'🙈',lesson:1,
   explain:['Dùng vật gì che, chắn để người khác không nhìn thấy, hoặc để ngăn gió, mưa, ánh nắng: 遮 = che, 挡 = chặn.','Hay đi với bổ ngữ kết quả 遮挡住 và tân ngữ 视线, 阳光, 风雨. Gần 遮 / 挡 (đơn âm, khẩu ngữ hơn).'],
   usage:'遮挡(住) + 视线 / 阳光 / 风雨; 用……遮挡; 被……遮挡住.',
   collo:['遮挡视线','遮挡阳光','遮挡风雨','被遮挡住'],
   ex_zh:'猫头鹰遮挡住了球员的视线。',ex_py:'Māotóuyīng zhēdǎng zhùle qiúyuán de shìxiàn.',ex_vn:'Con cú mèo che khuất tầm nhìn của cầu thủ.',
   exList:[
     {zh:'一只猫头鹰"迫降"球场，遮挡住了球员的视线。',py:'Yì zhī māotóuyīng “pòjiàng” qiúchǎng, zhēdǎng zhùle qiúyuán de shìxiàn.',vn:'Một con cú mèo "hạ cánh khẩn cấp" xuống sân, che khuất tầm nhìn của cầu thủ.'},
     {zh:'窗外的大树遮挡了阳光，屋子里一整天都很凉快。',py:'Chuāng wài de dà shù zhēdǎngle yángguāng, wūzi li yì zhěng tiān dōu hěn liángkuai.',vn:'Cái cây to ngoài cửa sổ che mất ánh nắng, trong nhà cả ngày đều mát.'},
     {zh:'前面的人太高了，把屏幕遮挡住了一大半。',py:'Qiánmiàn de rén tài gāo le, bǎ píngmù zhēdǎng zhùle yí dà bàn.',vn:'Người phía trước cao quá, che mất quá nửa màn hình.'}
   ],
   colloFull:[
     {zh:'遮挡视线',py:'zhēdǎng shìxiàn',vn:'che khuất tầm nhìn'},
     {zh:'遮挡阳光',py:'zhēdǎng yángguāng',vn:'che nắng'},
     {zh:'遮挡风雨',py:'zhēdǎng fēngyǔ',vn:'che mưa chắn gió'},
     {zh:'被遮挡住',py:'bèi zhēdǎng zhù',vn:'bị che khuất'},
     {zh:'用手遮挡',py:'yòng shǒu zhēdǎng',vn:'lấy tay che'}
   ],
   patterns:[
     {s:'遮挡住 + 视线 / 阳光',m:'Che khuất tầm nhìn / ánh nắng'},
     {s:'把 + N + 遮挡住',m:'Che khuất cái gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Toà nhà cao tầng mới xây đã che mất ánh nắng của cả khu dân cư.',answer:'新建的高楼把整个小区的阳光都遮挡住了。',answerPy:'Xīn jiàn de gāolóu bǎ zhěnggè xiǎoqū de yángguāng dōu zhēdǎng zhù le.',
      note:'Câu 把 + V + 住 (bổ ngữ kết quả, ôn HSK 4).',pair:'把'},
     {promptLang:'vi',prompt:'Để khỏi che tầm nhìn của người phía sau, xin mọi người đừng đứng dậy.',answer:'为了不遮挡后面观众的视线，请大家不要站起来。',answerPy:'Wèile bù zhēdǎng hòumiàn guānzhòng de shìxiàn, qǐng dàjiā búyào zhàn qǐlái.',
      note:'为了不 + V = để khỏi …; tương đương 以免遮挡…… (HSK 6 bài 21).',pair:'为了'}
   ]},

  {n:14,zh:'裁判',py:'cáipàn',pos:'Danh từ',vn:'trọng tài',hv:'tài phán',em:'🧑‍⚖️',lesson:1,
   explain:['Người điều khiển trận đấu, phán quyết thắng thua, phạt lỗi: 主裁判 (trọng tài chính), 边裁 (trọng tài biên), 当裁判 (làm trọng tài).','Cũng là động từ "phán quyết" (pháp luật, thi đấu) — nhưng ở bài này là danh từ. Chú ý: tiếng Việt "tài phán" là thuật ngữ pháp lý, còn người điều khiển trận đấu là "trọng tài".'],
   usage:'主裁判; 当 + 裁判; 裁判 + 判 / 吹哨 / 给 + 黄牌; 裁判的判罚.',
   collo:['主裁判','当裁判','裁判吹哨','裁判的判罚'],
   ex_zh:'主裁判出于保护动物的目的，决定中断比赛。',ex_py:'Zhǔ cáipàn chūyú bǎohù dòngwù de mùdì, juédìng zhōngduàn bǐsài.',ex_vn:'Trọng tài chính vì mục đích bảo vệ động vật đã quyết định tạm dừng trận đấu.',
   exList:[
     {zh:'不了解情况的主裁判还给了他一张黄牌。',py:'Bù liǎojiě qíngkuàng de zhǔ cáipàn hái gěile tā yì zhāng huángpái.',vn:'Trọng tài chính không nắm rõ tình hình còn rút cho anh ta một thẻ vàng.'},
     {zh:'球员们对裁判的判罚很不满意，纷纷围了上去。',py:'Qiúyuánmen duì cáipàn de pànfá hěn bù mǎnyì, fēnfēn wéile shàngqù.',vn:'Các cầu thủ rất bất mãn với quyết định của trọng tài, lần lượt vây lấy ông ấy.'},
     {zh:'这次学校篮球赛，体育老师亲自当裁判。',py:'Zhè cì xuéxiào lánqiú sài, tǐyù lǎoshī qīnzì dāng cáipàn.',vn:'Giải bóng rổ của trường lần này, thầy thể dục đích thân làm trọng tài.'}
   ],
   colloFull:[
     {zh:'主裁判',py:'zhǔ cáipàn',vn:'trọng tài chính'},
     {zh:'当裁判',py:'dāng cáipàn',vn:'làm trọng tài'},
     {zh:'裁判吹哨',py:'cáipàn chuī shào',vn:'trọng tài thổi còi'},
     {zh:'裁判的判罚',py:'cáipàn de pànfá',vn:'quyết định (phạt) của trọng tài'},
     {zh:'公正的裁判',py:'gōngzhèng de cáipàn',vn:'trọng tài công tâm'}
   ],
   patterns:[
     {s:'裁判 + 给 + người + 一张黄牌 / 红牌',m:'Trọng tài rút thẻ vàng / đỏ cho ai'},
     {s:'对裁判的判罚 + 不满',m:'Bất mãn với quyết định của trọng tài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trọng tài vừa thổi còi, các cầu thủ liền lao về phía khung thành đối phương.',answer:'裁判一吹哨，球员们就冲向了对方的球门。',answerPy:'Cáipàn yì chuī shào, qiúyuánmen jiù chōngxiàngle duìfāng de qiúmén.',
      note:'一……就…… hai hành động nối tiếp tức thì (ôn HSK 3).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Làm trọng tài không chỉ phải hiểu luật mà còn phải công bằng.',answer:'当裁判不仅要懂规则，还要公道。',answerPy:'Dāng cáipàn bùjǐn yào dǒng guīzé, hái yào gōngdao.',
      note:'不仅……还…… (ôn HSK 4); 公道 ôn HSK 6 bài 6.',pair:'不仅……还……'}
   ]},

  {n:15,zh:'中断',py:'zhōngduàn',pos:'Động từ',vn:'gián đoạn, ngắt quãng, tạm dừng giữa chừng',hv:'trung đoạn',em:'⏸️',lesson:1,
   explain:['Đang tiến hành thì bị dừng lại, bị cắt ngang giữa chừng: 中 = giữa, 断 = đứt. Đối tượng: 比赛, 联系, 学业, 通信, 交通, 谈判.','Có thể chủ động (决定中断比赛) hoặc bị động (联系中断了, 信号被中断). Khác 停止 (dừng hẳn): 中断 thường ngụ ý có thể nối lại sau.'],
   usage:'中断 + 比赛 / 联系 / 学业 / 交通; (联系 / 信号) + 中断了; 被迫中断.',
   collo:['中断比赛','中断联系','中断学业','交通中断'],
   ex_zh:'主裁判出于保护动物的目的，决定中断比赛。',ex_py:'Zhǔ cáipàn chūyú bǎohù dòngwù de mùdì, juédìng zhōngduàn bǐsài.',ex_vn:'Trọng tài chính vì mục đích bảo vệ động vật đã quyết định tạm dừng trận đấu.',
   exList:[
     {zh:'因为突然下起了大雨，比赛不得不中断了半个小时。',py:'Yīnwèi tūrán xiàqǐle dàyǔ, bǐsài bùdébù zhōngduànle bàn ge xiǎoshí.',vn:'Vì trời bỗng đổ mưa to, trận đấu buộc phải gián đoạn nửa tiếng.'},
     {zh:'毕业以后，我和几个老同学的联系就中断了。',py:'Bìyè yǐhòu, wǒ hé jǐ ge lǎo tóngxué de liánxì jiù zhōngduàn le.',vn:'Sau khi tốt nghiệp, liên lạc giữa tôi và mấy bạn học cũ bị đứt quãng.'},
     {zh:'他因病中断了学业，一年后才回到学校。',py:'Tā yīn bìng zhōngduànle xuéyè, yì nián hòu cái huídào xuéxiào.',vn:'Cậu ấy vì bệnh mà gián đoạn việc học, một năm sau mới quay lại trường.'}
   ],
   colloFull:[
     {zh:'中断比赛',py:'zhōngduàn bǐsài',vn:'tạm dừng trận đấu'},
     {zh:'中断联系',py:'zhōngduàn liánxì',vn:'cắt đứt liên lạc'},
     {zh:'中断学业',py:'zhōngduàn xuéyè',vn:'gián đoạn việc học'},
     {zh:'交通中断',py:'jiāotōng zhōngduàn',vn:'giao thông bị gián đoạn'},
     {zh:'被迫中断',py:'bèipò zhōngduàn',vn:'buộc phải gián đoạn'}
   ],
   patterns:[
     {s:'中断 + 比赛 / 联系 / 学业',m:'Gián đoạn trận đấu / liên lạc / việc học'},
     {s:'(N) + 中断了',m:'(Cái gì) bị gián đoạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù việc học bị gián đoạn, anh ấy cũng không từ bỏ ước mơ của mình.',answer:'即使学业中断了，他也没有放弃自己的梦想。',answerPy:'Jíshǐ xuéyè zhōngduàn le, tā yě méiyǒu fàngqì zìjǐ de mèngxiǎng.',
      note:'即使……也…… nhượng bộ (ôn HSK 5).',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Do bão tuyết, giao thông ở vùng đó bị gián đoạn suốt ba ngày.',answer:'由于暴风雪，那个地区的交通中断了整整三天。',answerPy:'Yóuyú bàofēngxuě, nàge dìqū de jiāotōng zhōngduànle zhěngzhěng sān tiān.',
      note:'由于 nêu nguyên nhân (văn viết, ôn HSK 4); 整整 + số lượng = tròn, suốt.',pair:'由于'}
   ]},

  {n:16,zh:'刹车',py:'shā chē',pos:'Động từ (li hợp)',vn:'phanh xe, thắng lại; (nghĩa bóng) dừng lại kịp',hv:'sát xa',em:'🛑',lesson:1,
   explain:['Dùng phanh làm xe dừng lại: 刹 = hãm, 车 = xe. Là từ li hợp: 刹不住车 (không phanh kịp), 刹了一下车. Cũng làm danh từ: 刹车坏了 (phanh hỏng).','Nghĩa bóng: đang lao đà mà không dừng lại được (刹不住车 = không kìm lại được). Bài khoá: 一名球员已经刹不住车 — cầu thủ đang lao nhanh không dừng kịp.'],
   usage:'紧急刹车; 刹不住车 / 刹得住; 踩刹车; 刹车 + 失灵 / 坏了.',
   collo:['刹不住车','紧急刹车','踩刹车','刹车失灵'],
   ex_zh:'可是一名球员已经刹不住车，一只大脚踢向了毫无防御的猫头鹰。',ex_py:'Kěshì yì míng qiúyuán yǐjīng shā bu zhù chē, yì zhī dà jiǎo tīxiàngle háo wú fángyù de māotóuyīng.',ex_vn:'Nhưng một cầu thủ đã không kịp dừng lại, một cú sút mạnh nhằm thẳng vào con cú mèo không hề phòng bị.',
   exList:[
     {zh:'一个孩子突然跑到路中间，司机赶紧刹车，才没有撞上。',py:'Yí ge háizi tūrán pǎodào lù zhōngjiān, sījī gǎnjǐn shā chē, cái méiyǒu zhuàngshang.',vn:'Một đứa trẻ bỗng chạy ra giữa đường, tài xế vội phanh gấp mới không đâm phải.'},
     {zh:'下坡的时候刹车失灵了，真是太危险了。',py:'Xià pō de shíhou shāchē shīlíng le, zhēn shì tài wēixiǎn le.',vn:'Lúc xuống dốc thì phanh mất tác dụng, thật là quá nguy hiểm.'},
     {zh:'他跑得太快，到了终点也刹不住车，一下子摔倒了。',py:'Tā pǎo de tài kuài, dàole zhōngdiǎn yě shā bu zhù chē, yíxiàzi shuāidǎo le.',vn:'Cậu ấy chạy nhanh quá, đến vạch đích cũng không dừng lại được, ngã nhào ngay.'}
   ],
   colloFull:[
     {zh:'刹不住车',py:'shā bu zhù chē',vn:'không phanh kịp, không dừng lại được'},
     {zh:'紧急刹车',py:'jǐnjí shā chē',vn:'phanh gấp'},
     {zh:'踩刹车',py:'cǎi shāchē',vn:'đạp phanh'},
     {zh:'刹车失灵',py:'shāchē shīlíng',vn:'phanh mất tác dụng'},
     {zh:'赶紧刹车',py:'gǎnjǐn shā chē',vn:'vội phanh lại'}
   ],
   patterns:[
     {s:'刹不住车 / 刹得住车',m:'Không / có thể phanh kịp (li hợp chen bổ ngữ khả năng)'},
     {s:'紧急 / 赶紧 + 刹车',m:'Phanh gấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không phải tài xế phanh kịp thời, hậu quả thật không dám tưởng tượng.',answer:'要不是司机及时刹车，后果真是不堪设想。',answerPy:'Yàobúshì sījī jíshí shā chē, hòuguǒ zhēn shì bùkān-shèxiǎng.',
      note:'要不是…… = nếu không phải (ôn HSK 5); 及时 = kịp thời.',pair:'要不是'},
     {promptLang:'vi',prompt:'Đạp xe xuống dốc phải phanh từ sớm, kẻo không dừng lại được.',answer:'骑车下坡要早点儿刹车，以免刹不住车。',answerPy:'Qí chē xià pō yào zǎo diǎnr shā chē, yǐmiǎn shā bu zhù chē.',
      note:'以免 đầu vế sau, điều muốn tránh (HSK 6 bài 21).',pair:'以免'}
   ]},

  {n:17,zh:'防御',py:'fángyù',pos:'Động từ',vn:'phòng ngự, chống đỡ',hv:'phòng ngự',em:'🛡️',lesson:1,
   explain:['Chống lại sự tấn công của đối phương, bảo vệ mình: 防 = phòng, 御 = chống. Văn viết, hay dùng trong quân sự, sinh học (khả năng tự vệ), thể thao.','Khác 防守: 防守 nhấn "giữ" một vị trí (防守球门); 防御 nhấn "chống đỡ" sự tấn công, thường đi với 能力, 工事, 系统. Bài khoá: 毫无防御的猫头鹰 = con cú không hề phòng bị.'],
   usage:'防御 + 敌人 / 攻击; 防御能力 / 系统 / 工事; 毫无防御; 积极防御.',
   collo:['毫无防御','防御能力','防御系统','防御攻击'],
   ex_zh:'一只大脚踢向了毫无防御的猫头鹰。',ex_py:'Yì zhī dà jiǎo tīxiàngle háo wú fángyù de māotóuyīng.',ex_vn:'Một cú sút mạnh nhằm vào con cú mèo không hề phòng bị.',
   exList:[
     {zh:'刺猬遇到危险时会缩成一团，这是它的防御本能。',py:'Cìwei yùdào wēixiǎn shí huì suōchéng yì tuán, zhè shì tā de fángyù běnnéng.',vn:'Con nhím khi gặp nguy hiểm sẽ cuộn tròn lại, đó là bản năng tự vệ của nó.'},
     {zh:'这台电脑装了新的防御系统，能挡住大部分病毒的攻击。',py:'Zhè tái diànnǎo zhuāngle xīn de fángyù xìtǒng, néng dǎngzhù dà bùfen bìngdú de gōngjī.',vn:'Máy tính này đã cài hệ thống phòng vệ mới, có thể chặn phần lớn các đợt tấn công của virus.'},
     {zh:'古代的长城主要是用来防御敌人的。',py:'Gǔdài de Chángchéng zhǔyào shì yònglái fángyù dírén de.',vn:'Vạn Lý Trường Thành thời xưa chủ yếu dùng để chống giặc.'}
   ],
   colloFull:[
     {zh:'毫无防御',py:'háo wú fángyù',vn:'không hề phòng bị'},
     {zh:'防御能力',py:'fángyù nénglì',vn:'khả năng phòng vệ'},
     {zh:'防御系统',py:'fángyù xìtǒng',vn:'hệ thống phòng ngự'},
     {zh:'防御攻击',py:'fángyù gōngjī',vn:'chống lại sự tấn công'},
     {zh:'防御本能',py:'fángyù běnnéng',vn:'bản năng tự vệ'}
   ],
   patterns:[
     {s:'毫无防御的 + N',m:'… không hề phòng bị'},
     {s:'防御 + 敌人 / 攻击',m:'Chống lại kẻ thù / sự tấn công'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trẻ nhỏ khả năng phòng vệ yếu, cho nên cha mẹ phải đặc biệt cẩn thận.',answer:'小孩子的防御能力比较弱，所以父母要格外小心。',answerPy:'Xiǎoháizi de fángyù nénglì bǐjiào ruò, suǒyǐ fùmǔ yào géwài xiǎoxīn.',
      note:'所以 nối kết quả; 格外 = đặc biệt (ôn HSK 5).',pair:'所以'},
     {promptLang:'vi',prompt:'Tường thành này vừa có thể chống giặc, lại vừa có thể ngăn lũ.',answer:'这道城墙既能防御敌人，又能阻挡洪水。',answerPy:'Zhè dào chéngqiáng jì néng fángyù dírén, yòu néng zǔdǎng hóngshuǐ.',
      note:'既……又…… (ôn HSK 4); 阻挡 = ngăn chặn.',pair:'既……又……'}
   ]},

  {n:18,zh:'心态',py:'xīntài',pos:'Danh từ',vn:'tâm thái, trạng thái tâm lý, thái độ tâm lý',hv:'tâm thái',em:'🧘',lesson:1,
   explain:['Trạng thái tâm lý, cách nhìn nhận bên trong trước một việc: 心 = lòng, 态 = trạng thái. Hay đi với tính từ đánh giá: 良好 / 积极 / 平和 / 健康 / 不好的心态.','Động từ đi kèm: 保持 / 调整 / 摆正 + 心态. Bài khoá: 这种只想赢球的心态 = tâm lý chỉ muốn thắng.'],
   usage:'良好 / 积极 / 平和 + 的心态; 保持 / 调整 + 心态; ……的心态 + 和 + ……南辕北辙.',
   collo:['良好的心态','保持心态','调整心态','积极的心态'],
   ex_zh:'这种只想赢球的心态和比赛精神南辕北辙。',ex_py:'Zhè zhǒng zhǐ xiǎng yíng qiú de xīntài hé bǐsài jīngshén nányuán-běizhé.',ex_vn:'Tâm lý chỉ muốn thắng này hoàn toàn trái ngược với tinh thần thi đấu.',
   exList:[
     {zh:'考试前一定要调整好心态，太紧张反而发挥不好。',py:'Kǎoshì qián yídìng yào tiáozhěng hǎo xīntài, tài jǐnzhāng fǎn\'ér fāhuī bù hǎo.',vn:'Trước kỳ thi nhất định phải điều chỉnh tâm lý cho tốt, quá căng thẳng ngược lại làm không tốt.'},
     {zh:'我们更看重的是运动员永不放弃的精神和良好的心态。',py:'Wǒmen gèng kànzhòng de shì yùndòngyuán yǒng bú fàngqì de jīngshén hé liánghǎo de xīntài.',vn:'Điều chúng ta coi trọng hơn là tinh thần không bao giờ bỏ cuộc và tâm lý vững vàng của vận động viên.'},
     {zh:'保持积极的心态，困难总会过去的。',py:'Bǎochí jījí de xīntài, kùnnan zǒng huì guòqù de.',vn:'Giữ thái độ tích cực, khó khăn rồi sẽ qua thôi.'}
   ],
   colloFull:[
     {zh:'良好的心态',py:'liánghǎo de xīntài',vn:'tâm lý tốt, vững vàng'},
     {zh:'保持心态',py:'bǎochí xīntài',vn:'giữ tâm thái'},
     {zh:'调整心态',py:'tiáozhěng xīntài',vn:'điều chỉnh tâm lý'},
     {zh:'积极的心态',py:'jījí de xīntài',vn:'thái độ tích cực'},
     {zh:'只想赢球的心态',py:'zhǐ xiǎng yíng qiú de xīntài',vn:'tâm lý chỉ muốn thắng'}
   ],
   patterns:[
     {s:'保持 / 调整 + (良好的) 心态',m:'Giữ / điều chỉnh tâm lý (tốt)'},
     {s:'以……的心态 + V',m:'Làm gì với tâm thế …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần giữ tâm lý tốt, thì dù thua trận cũng không sao.',answer:'只要保持良好的心态，就算输了比赛也没关系。',answerPy:'Zhǐyào bǎochí liánghǎo de xīntài, jiùsuàn shūle bǐsài yě méi guānxi.',
      note:'只要……就…… + 就算……也…… (ôn HSK 4–5).',pair:'就算……也……'},
     {promptLang:'vi',prompt:'Cô ấy luôn đối mặt với khó khăn bằng thái độ bình thản.',answer:'她总是以平和的心态面对困难。',answerPy:'Tā zǒngshì yǐ pínghé de xīntài miànduì kùnnan.',
      note:'以……的心态 + V = với tâm thế …; 面对 (ôn HSK 5).',pair:'以'}
   ]},

  {n:19,zh:'南辕北辙',py:'nányuán-běizhé',pos:'Thành ngữ',vn:'hoàn toàn trái ngược (mục đích và hành động đi ngược nhau)',hv:'nam viên bắc triệt',em:'🧭',lesson:1,
   explain:['Điển cố: có người muốn đi về phía NAM (nước Sở) mà lại đánh xe về phía BẮC, còn khoe ngựa khoẻ, tiền nhiều — càng đi càng xa đích. 辕 = càng xe, 辙 = vết bánh xe.','Nghĩa: hành động và mục đích trái ngược nhau; hai thứ hoàn toàn đi ngược nhau. Hay làm vị ngữ: A 和 B 南辕北辙 / A 与 B 南辕北辙.'],
   usage:'A 和 / 与 B + 南辕北辙; 做法 / 想法 + 和 + 目的 + 南辕北辙; 南辕北辙的做法.',
   collo:['和……南辕北辙','南辕北辙的做法','与目标南辕北辙','意见南辕北辙'],
   ex_zh:'这种只想赢球的心态和比赛精神南辕北辙。',ex_py:'Zhè zhǒng zhǐ xiǎng yíng qiú de xīntài hé bǐsài jīngshén nányuán-běizhé.',ex_vn:'Tâm lý chỉ muốn thắng này hoàn toàn đi ngược tinh thần thi đấu.',
   exList:[
     {zh:'你想减肥却天天吃夜宵，这不是南辕北辙吗？',py:'Nǐ xiǎng jiǎnféi què tiāntiān chī yèxiāo, zhè bú shì nányuán-běizhé ma?',vn:'Cậu muốn giảm cân mà ngày nào cũng ăn khuya, đó chẳng phải là làm ngược với mục đích sao?'},
     {zh:'他们俩的想法南辕北辙，讨论了半天也没结果。',py:'Tāmen liǎ de xiǎngfǎ nányuán-běizhé, tǎolùnle bàntiān yě méi jiéguǒ.',vn:'Suy nghĩ của hai người họ hoàn toàn trái ngược, bàn cả buổi cũng chẳng ra kết quả.'},
     {zh:'只追求分数而忽视能力，与教育的目的南辕北辙。',py:'Zhǐ zhuīqiú fēnshù ér hūshì nénglì, yǔ jiàoyù de mùdì nányuán-běizhé.',vn:'Chỉ chạy theo điểm số mà coi nhẹ năng lực là đi ngược với mục đích của giáo dục.'}
   ],
   colloFull:[
     {zh:'和……南辕北辙',py:'hé…… nányuán-běizhé',vn:'hoàn toàn trái ngược với …'},
     {zh:'南辕北辙的做法',py:'nányuán-běizhé de zuòfǎ',vn:'cách làm ngược với mục đích'},
     {zh:'与目标南辕北辙',py:'yǔ mùbiāo nányuán-běizhé',vn:'đi ngược với mục tiêu'},
     {zh:'意见南辕北辙',py:'yìjiàn nányuán-běizhé',vn:'ý kiến trái ngược hẳn nhau'},
     {zh:'这不是南辕北辙吗',py:'zhè bú shì nányuán-běizhé ma',vn:'đây chẳng phải là làm ngược sao'}
   ],
   patterns:[
     {s:'A + 和 / 与 + B + 南辕北辙',m:'A hoàn toàn trái ngược với B'},
     {s:'……，这不是南辕北辙吗？',m:'…, chẳng phải là làm ngược với mục đích sao? (phản vấn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu muốn thi đỗ đại học tốt mà ngày nào cũng chơi game, chẳng phải là làm ngược sao?',answer:'你想考上好大学，却天天玩儿游戏，这不是南辕北辙吗？',answerPy:'Nǐ xiǎng kǎoshang hǎo dàxué, què tiāntiān wánr yóuxì, zhè bú shì nányuán-běizhé ma?',
      note:'却 chuyển ý; câu phản vấn 不是……吗 (ôn HSK 4).',pair:'不是……吗'},
     {promptLang:'vi',prompt:'Nếu phương pháp sai, thì càng cố gắng lại càng xa mục tiêu.',answer:'如果方法不对，就会南辕北辙，越努力离目标越远。',answerPy:'Rúguǒ fāngfǎ bú duì, jiù huì nányuán-běizhé, yuè nǔlì lí mùbiāo yuè yuǎn.',
      note:'越……越…… (ôn HSK 4) — chính là ý nghĩa của điển cố 南辕北辙.',pair:'越……越……'}
   ]},

  {n:20,zh:'注重',py:'zhùzhòng',pos:'Động từ',vn:'chú trọng, coi trọng',hv:'chú trọng',em:'🔍',lesson:1,
   explain:['Đặc biệt để ý, coi trọng một mặt nào đó: 注 = dồn vào, 重 = coi nặng. Tân ngữ thường là danh từ trừu tượng: 注重质量 / 细节 / 效果 / 素质 / 胜负.','Gần 重视 và 着重 (HSK 6 bài 21). 注重 nhấn sự chú ý thường xuyên vào một phương diện; 重视 nhấn thái độ coi trọng. Trái nghĩa: 忽视 / 忽略 (bài 1).'],
   usage:'注重 + 质量 / 细节 / 效果 / 实践 / 培养; 只注重 A，却 / 而忽视 B; 注重……的培养.',
   collo:['注重胜负','注重细节','注重质量','注重培养'],
   ex_zh:'只注重胜负，却将猫头鹰残酷"射杀"致死的行为是否应该被原谅……',ex_py:'Zhǐ zhùzhòng shèngfù, què jiāng māotóuyīng cánkù “shèshā” zhìsǐ de xíngwéi shìfǒu yīnggāi bèi yuánliàng……',ex_vn:'Hành vi chỉ coi trọng thắng thua mà "bắn chết" con cú mèo một cách tàn nhẫn liệu có nên được tha thứ…',
   exList:[
     {zh:'这所远近闻名的学校非常注重学生素质教育的培养。',py:'Zhè suǒ yuǎnjìn wénmíng de xuéxiào fēicháng zhùzhòng xuésheng sùzhì jiàoyù de péiyǎng.',vn:'Ngôi trường nổi tiếng gần xa này rất chú trọng việc giáo dục toàn diện cho học sinh.'},
     {zh:'比赛并不只注重胜负，更看重运动员的精神。',py:'Bǐsài bìng bù zhǐ zhùzhòng shèngfù, gèng kànzhòng yùndòngyuán de jīngshén.',vn:'Thi đấu không chỉ coi trọng thắng thua, mà càng coi trọng tinh thần của vận động viên.'},
     {zh:'做实验要注重细节，一点儿误差都可能导致失败。',py:'Zuò shíyàn yào zhùzhòng xìjié, yìdiǎnr wùchā dōu kěnéng dǎozhì shībài.',vn:'Làm thí nghiệm phải chú trọng chi tiết, một chút sai số cũng có thể dẫn tới thất bại.'}
   ],
   colloFull:[
     {zh:'注重胜负',py:'zhùzhòng shèngfù',vn:'coi trọng thắng thua'},
     {zh:'注重细节',py:'zhùzhòng xìjié',vn:'chú trọng chi tiết'},
     {zh:'注重质量',py:'zhùzhòng zhìliàng',vn:'chú trọng chất lượng'},
     {zh:'注重培养',py:'zhùzhòng péiyǎng',vn:'chú trọng bồi dưỡng'},
     {zh:'注重实践',py:'zhùzhòng shíjiàn',vn:'chú trọng thực hành'}
   ],
   patterns:[
     {s:'注重 + N (trừu tượng)',m:'Chú trọng …'},
     {s:'只注重 A，却忽视 B',m:'Chỉ chú trọng A mà coi nhẹ B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này không chỉ chú trọng hương vị mà còn rất chú trọng vệ sinh.',answer:'这家饭馆不但注重味道，而且非常注重卫生。',answerPy:'Zhè jiā fànguǎn búdàn zhùzhòng wèidao, érqiě fēicháng zhùzhòng wèishēng.',
      note:'不但……而且…… (ôn HSK 4).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Có một số phụ huynh chỉ coi trọng điểm số mà bỏ qua sức khoẻ của con.',answer:'有些家长只注重分数，却忽略了孩子的健康。',answerPy:'Yǒuxiē jiāzhǎng zhǐ zhùzhòng fēnshù, què hūlüèle háizi de jiànkāng.',
      note:'只……却…… đối lập; 忽略 ôn HSK 6 bài 1.',pair:'却'}
   ]},

  {n:21,zh:'胜负',py:'shèngfù',pos:'Danh từ',vn:'thắng bại, thắng thua',hv:'thắng phụ',em:'🏆',lesson:1,
   explain:['Thắng và thua: 胜 = thắng, 负 = thua (负 trong thể thao = thua: 三胜一负). Danh từ ghép đẳng lập, hay làm tân ngữ của 注重 / 看重 / 决定 / 分出.','Cụm cố định: 胜负已定 (thắng thua đã rõ), 不分胜负 (bất phân thắng bại), 胜负难料.'],
   usage:'注重 / 看重 + 胜负; 分出 / 决定 + 胜负; 不分胜负; 胜负已定 / 难料.',
   collo:['注重胜负','不分胜负','决定胜负','胜负已定'],
   ex_zh:'一时间，只注重胜负……引起了广泛的争议。',ex_py:'Yìshíjiān, zhǐ zhùzhòng shèngfù…… yǐnqǐle guǎngfàn de zhēngyì.',ex_vn:'Nhất thời, việc chỉ coi trọng thắng thua … đã gây ra tranh cãi rộng rãi.',
   exList:[
     {zh:'两个队打了九十分钟，还是不分胜负，只好踢点球。',py:'Liǎng ge duì dǎle jiǔshí fēnzhōng, háishi bù fēn shèngfù, zhǐhǎo tī diǎnqiú.',vn:'Hai đội đá chín mươi phút vẫn bất phân thắng bại, đành phải đá luân lưu.'},
     {zh:'友谊第一，比赛第二，胜负并不重要。',py:'Yǒuyì dì-yī, bǐsài dì-èr, shèngfù bìng bú zhòngyào.',vn:'Tình bạn là trên hết, thi đấu là thứ hai, thắng thua không quan trọng.'},
     {zh:'最后一分钟的那个进球决定了这场比赛的胜负。',py:'Zuìhòu yì fēnzhōng de nàge jìn qiú juédìngle zhè chǎng bǐsài de shèngfù.',vn:'Bàn thắng ở phút cuối cùng đã quyết định thắng thua của trận đấu này.'}
   ],
   colloFull:[
     {zh:'注重胜负',py:'zhùzhòng shèngfù',vn:'coi trọng thắng thua'},
     {zh:'不分胜负',py:'bù fēn shèngfù',vn:'bất phân thắng bại'},
     {zh:'决定胜负',py:'juédìng shèngfù',vn:'quyết định thắng bại'},
     {zh:'胜负已定',py:'shèngfù yǐ dìng',vn:'thắng thua đã định'},
     {zh:'看淡胜负',py:'kàndàn shèngfù',vn:'xem nhẹ thắng thua'}
   ],
   patterns:[
     {s:'不分胜负',m:'Bất phân thắng bại'},
     {s:'……决定了……的胜负',m:'… quyết định thắng thua của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể thắng thua ra sao, chúng ta đều phải cố gắng hết sức.',answer:'无论胜负如何，我们都要全力以赴。',answerPy:'Wúlùn shèngfù rúhé, wǒmen dōu yào quánlì-yǐfù.',
      note:'无论……都…… (ôn HSK 4); 全力以赴 ôn HSK 6 bài 6.',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Chơi cờ với ông nội, hai ông cháu đánh cả buổi chiều vẫn bất phân thắng bại.',answer:'我和爷爷下棋，下了一个下午还是不分胜负。',answerPy:'Wǒ hé yéye xià qí, xiàle yí ge xiàwǔ háishi bù fēn shèngfù.',
      note:'Lặp động từ với bổ ngữ thời lượng: 下棋，下了一个下午 (ôn HSK 4).',pair:'还是'}
   ]},

  {n:22,zh:'残酷',py:'cánkù',pos:'Tính từ',vn:'tàn khốc, tàn nhẫn, khốc liệt',hv:'tàn khốc',em:'🥀',lesson:1,
   explain:['Hung ác, tàn nhẫn đến mức gây đau khổ, tổn thương lớn: 残 = tàn hại, 酷 = khốc liệt. Dùng cho hành vi (残酷地射杀), sự việc (战争很残酷) và cả thực tế, cạnh tranh (残酷的现实, 竞争很残酷).','Gần 残忍 (HSK 6 bài 4): 残忍 chủ yếu nói tính cách, thủ đoạn con người; 残酷 dùng rộng hơn, cả cho hoàn cảnh, hiện thực.'],
   usage:'残酷的 + 战争 / 现实 / 竞争; 残酷地 + V; (竞争 / 比赛) + 十分残酷.',
   collo:['残酷的现实','残酷的竞争','残酷地射杀','战争很残酷'],
   ex_zh:'只注重胜负，却将猫头鹰残酷"射杀"致死的行为是否应该被原谅？',ex_py:'Zhǐ zhùzhòng shèngfù, què jiāng māotóuyīng cánkù “shèshā” zhìsǐ de xíngwéi shìfǒu yīnggāi bèi yuánliàng?',ex_vn:'Hành vi chỉ coi trọng thắng thua mà tàn nhẫn "bắn chết" con cú mèo liệu có nên được tha thứ?',
   exList:[
     {zh:'竞技体育是残酷的，只有第一名才会被大家记住。',py:'Jìngjì tǐyù shì cánkù de, zhǐyǒu dì-yī míng cái huì bèi dàjiā jìzhù.',vn:'Thể thao thi đấu rất khốc liệt, chỉ có người đứng nhất mới được mọi người nhớ tới.'},
     {zh:'战争是残酷的，它夺走了无数人的生命。',py:'Zhànzhēng shì cánkù de, tā duózǒule wúshù rén de shēngmìng.',vn:'Chiến tranh thật tàn khốc, nó cướp đi sinh mạng của vô số người.'},
     {zh:'毕业以后，他才发现现实比想象的残酷得多。',py:'Bìyè yǐhòu, tā cái fāxiàn xiànshí bǐ xiǎngxiàng de cánkù de duō.',vn:'Sau khi tốt nghiệp, anh ấy mới phát hiện hiện thực khắc nghiệt hơn tưởng tượng nhiều.'}
   ],
   colloFull:[
     {zh:'残酷的现实',py:'cánkù de xiànshí',vn:'hiện thực phũ phàng'},
     {zh:'残酷的竞争',py:'cánkù de jìngzhēng',vn:'cạnh tranh khốc liệt'},
     {zh:'残酷地射杀',py:'cánkù de shèshā',vn:'bắn giết tàn nhẫn'},
     {zh:'战争很残酷',py:'zhànzhēng hěn cánkù',vn:'chiến tranh rất tàn khốc'},
     {zh:'残酷的比赛',py:'cánkù de bǐsài',vn:'cuộc đấu khốc liệt'}
   ],
   patterns:[
     {s:'残酷的 + 现实 / 竞争 / 战争',m:'Hiện thực phũ phàng / cạnh tranh khốc liệt / chiến tranh tàn khốc'},
     {s:'A 比 B + 残酷得多',m:'A khắc nghiệt hơn B nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cạnh tranh tuy khốc liệt, nhưng chỉ cần có thực lực thì không cần sợ.',answer:'竞争虽然残酷，但只要有实力，就不用害怕。',answerPy:'Jìngzhēng suīrán cánkù, dàn zhǐyào yǒu shílì, jiù búyòng hàipà.',
      note:'虽然……但…… + 只要……就…… lồng nhau (ôn HSK 4).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Đối xử tàn nhẫn với động vật như vậy, thật quá đáng.',answer:'这样残酷地对待动物，未免太过分了。',answerPy:'Zhèyàng cánkù de duìdài dòngwù, wèimiǎn tài guòfèn le.',
      note:'未免 + 太 + Adj = thật là quá … (chê trách, HSK 6 bài 4, 21).',pair:'未免'}
   ]},

  {n:23,zh:'争议',py:'zhēngyì',pos:'Động từ / Danh từ',vn:'tranh luận, bàn cãi; sự tranh cãi',hv:'tranh nghị',em:'🗣️',lesson:1,
   explain:['Nhiều người có ý kiến khác nhau và tranh cãi về một việc: 争 = tranh, 议 = bàn. Chủ yếu dùng như danh từ: 引起争议, 有争议, 存在争议.','Tính từ hoá: 有争议的 + N (vấn đề gây tranh cãi). Gần 争论 (tranh luận — nhấn hành động cãi qua cãi lại); 争议 nhấn tình trạng có bất đồng.'],
   usage:'引起 / 存在 / 没有 + 争议; 有争议的 + 问题 / 判罚; 广泛的争议; 毫无争议.',
   collo:['引起争议','广泛的争议','有争议的判罚','毫无争议'],
   ex_zh:'……是否应该被原谅，引起了广泛的争议。',ex_py:'…… shìfǒu yīnggāi bèi yuánliàng, yǐnqǐle guǎngfàn de zhēngyì.',ex_vn:'… liệu có nên được tha thứ hay không, đã gây ra tranh cãi rộng rãi.',
   exList:[
     {zh:'裁判的这次判罚引起了很大的争议。',py:'Cáipàn de zhè cì pànfá yǐnqǐle hěn dà de zhēngyì.',vn:'Quyết định lần này của trọng tài đã gây ra tranh cãi rất lớn.'},
     {zh:'他是这届比赛毫无争议的冠军。',py:'Tā shì zhè jiè bǐsài háo wú zhēngyì de guànjūn.',vn:'Anh ấy là nhà vô địch không thể bàn cãi của giải đấu năm nay.'},
     {zh:'中学生能不能带手机进校园，一直是个有争议的问题。',py:'Zhōngxuéshēng néng bu néng dài shǒujī jìn xiàoyuán, yìzhí shì ge yǒu zhēngyì de wèntí.',vn:'Học sinh trung học có được mang điện thoại vào trường hay không vẫn luôn là vấn đề gây tranh cãi.'}
   ],
   colloFull:[
     {zh:'引起争议',py:'yǐnqǐ zhēngyì',vn:'gây ra tranh cãi'},
     {zh:'广泛的争议',py:'guǎngfàn de zhēngyì',vn:'tranh cãi rộng rãi'},
     {zh:'有争议的判罚',py:'yǒu zhēngyì de pànfá',vn:'quyết định phạt gây tranh cãi'},
     {zh:'毫无争议',py:'háo wú zhēngyì',vn:'không có gì phải bàn cãi'},
     {zh:'存在争议',py:'cúnzài zhēngyì',vn:'còn có tranh cãi'}
   ],
   patterns:[
     {s:'……引起了（广泛的）争议',m:'… gây ra tranh cãi (rộng rãi)'},
     {s:'有争议的 / 毫无争议的 + N',m:'… gây tranh cãi / không thể bàn cãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này vừa chiếu đã gây ra tranh cãi, có người khen có người chê.',answer:'这部电影一上映就引起了争议，有人夸，有人骂。',answerPy:'Zhè bù diànyǐng yí shàngyìng jiù yǐnqǐle zhēngyì, yǒu rén kuā, yǒu rén mà.',
      note:'一……就…… (ôn HSK 3); 有人……，有人…… liệt kê ý kiến trái chiều.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Về vấn đề này, các chuyên gia vẫn còn tranh cãi, cho nên chúng ta đừng vội kết luận.',answer:'关于这个问题，专家们还存在争议，所以我们先别急着下结论。',answerPy:'Guānyú zhège wèntí, zhuānjiāmen hái cúnzài zhēngyì, suǒyǐ wǒmen xiān bié jízhe xià jiélùn.',
      note:'关于…… nêu chủ đề (ôn HSK 4); 别急着 + V.',pair:'关于'}
   ]},

  {n:24,zh:'打仗',py:'dǎ zhàng',pos:'Động từ (li hợp)',vn:'đánh trận, giao chiến; (bóng) cãi nhau, tranh đấu',hv:'đả trượng',em:'🥊',lesson:1,
   explain:['Nghĩa gốc: tiến hành chiến tranh, đánh trận (仗 = trận đánh). Là từ li hợp: 打了一场仗, 打胜仗, 打败仗.','Nghĩa mở rộng: tranh đấu, cãi nhau. Bài khoá dùng dạng tách: 打了一场嘴仗 = đấu khẩu một trận (嘴 = miệng). Tương tự: 打硬仗 (đánh trận khó, làm việc gian khổ).'],
   usage:'打(了)一场 + 仗 / 嘴仗 / 硬仗; 打胜仗 / 打败仗; 跟 / 和 + 人 + 打仗.',
   collo:['打了一场嘴仗','打胜仗','打硬仗','打败仗'],
   ex_zh:'人们结结实实地打了一场嘴仗。',ex_py:'Rénmen jiējieshíshí de dǎle yì chǎng zuǐzhàng.',ex_vn:'Mọi người đã đấu khẩu với nhau một trận ra trò.',
   exList:[
     {zh:'爷爷年轻时当过兵，打过仗，最恨的就是战争。',py:'Yéye niánqīng shí dāngguo bīng, dǎguo zhàng, zuì hèn de jiù shì zhànzhēng.',vn:'Ông nội thời trẻ từng đi lính, từng đánh trận, điều ông căm ghét nhất chính là chiến tranh.'},
     {zh:'为了一个座位，两个人在网上打了一场嘴仗。',py:'Wèile yí ge zuòwèi, liǎng ge rén zài wǎngshàng dǎle yì chǎng zuǐzhàng.',vn:'Chỉ vì một chỗ ngồi, hai người đấu khẩu một trận trên mạng.'},
     {zh:'期末考试是一场硬仗，大家要做好准备。',py:'Qīmò kǎoshì shì yì chǎng yìngzhàng, dàjiā yào zuòhǎo zhǔnbèi.',vn:'Kỳ thi cuối kỳ là một trận chiến gian nan, mọi người phải chuẩn bị cho tốt.'}
   ],
   colloFull:[
     {zh:'打了一场嘴仗',py:'dǎle yì chǎng zuǐzhàng',vn:'đấu khẩu một trận'},
     {zh:'打胜仗',py:'dǎ shèngzhàng',vn:'thắng trận'},
     {zh:'打硬仗',py:'dǎ yìngzhàng',vn:'đánh trận khó; làm việc gian nan'},
     {zh:'打败仗',py:'dǎ bàizhàng',vn:'thua trận'},
     {zh:'打过仗',py:'dǎguo zhàng',vn:'từng đánh trận'}
   ],
   patterns:[
     {s:'打(了)一场 + 嘴仗 / 硬仗',m:'Đấu khẩu / đánh một trận gian nan (li hợp tách)'},
     {s:'打胜仗 / 打败仗',m:'Thắng trận / thua trận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai anh em vì cái điều khiển TV mà lại đấu khẩu với nhau một trận.',answer:'兄弟俩为了电视遥控器又打了一场嘴仗。',answerPy:'Xiōngdì liǎ wèile diànshì yáokòngqì yòu dǎle yì chǎng zuǐzhàng.',
      note:'Li hợp từ tách: 打 + 了 + 一场 + 嘴仗; 遥控 ôn HSK 6 bài 11.',pair:'为了'},
     {promptLang:'vi',prompt:'Muốn thắng trận thì trước hết phải hiểu rõ đối thủ.',answer:'要想打胜仗，首先得了解对手。',answerPy:'Yào xiǎng dǎ shèngzhàng, shǒuxiān děi liǎojiě duìshǒu.',
      note:'要想……，首先得…… = muốn … thì trước hết phải … (ôn HSK 4–5).',pair:'首先'}
   ]},

  {n:25,zh:'打官司',py:'dǎ guānsi',pos:'Cụm động từ',vn:'kiện, thưa kiện, ra toà',hv:'đả quan ti',em:'⚖️',lesson:1,
   explain:['Đưa nhau ra toà để giải quyết tranh chấp: 官司 = vụ kiện. Cấu trúc: 和 / 跟 + người + 打官司; 打了一场官司; 官司打赢了 / 打输了.','Khẩu ngữ; văn viết trang trọng hơn dùng 起诉, 诉讼 (xem 扩展: 司法诉讼).'],
   usage:'和 / 跟 + 人 + 打官司; 打(了)一场官司; 官司 + 打赢了 / 打输了; 面临一场官司.',
   collo:['和球员打官司','打了一场官司','官司打赢了','面临一场官司'],
   ex_zh:'动物保护组织甚至要和球员打官司。',ex_py:'Dòngwù bǎohù zǔzhī shènzhì yào hé qiúyuán dǎ guānsi.',ex_vn:'Tổ chức bảo vệ động vật thậm chí còn muốn kiện cầu thủ ra toà.',
   exList:[
     {zh:'因为工作人员的疏忽，商场肯定要面临一场官司。',py:'Yīnwèi gōngzuò rényuán de shūhu, shāngchǎng kěndìng yào miànlín yì chǎng guānsi.',vn:'Vì sự lơ là của nhân viên, trung tâm thương mại chắc chắn sẽ đối mặt với một vụ kiện.'},
     {zh:'为了拿回工资，他和老板打了半年官司，最后终于打赢了。',py:'Wèile náhuí gōngzī, tā hé lǎobǎn dǎle bàn nián guānsi, zuìhòu zhōngyú dǎyíng le.',vn:'Để đòi lại tiền lương, anh ấy kiện ông chủ nửa năm trời, cuối cùng cũng thắng.'},
     {zh:'邻居之间有了纠纷，最好先商量，别动不动就打官司。',py:'Línjū zhījiān yǒule jiūfēn, zuìhǎo xiān shāngliang, bié dòngbudòng jiù dǎ guānsi.',vn:'Hàng xóm có tranh chấp thì tốt nhất nên bàn bạc trước, đừng hơi tí là kiện nhau.'}
   ],
   colloFull:[
     {zh:'和球员打官司',py:'hé qiúyuán dǎ guānsi',vn:'kiện cầu thủ'},
     {zh:'打了一场官司',py:'dǎle yì chǎng guānsi',vn:'theo một vụ kiện'},
     {zh:'官司打赢了',py:'guānsi dǎyíng le',vn:'thắng kiện'},
     {zh:'面临一场官司',py:'miànlín yì chǎng guānsi',vn:'đối mặt với một vụ kiện'},
     {zh:'动不动就打官司',py:'dòngbudòng jiù dǎ guānsi',vn:'hơi tí là kiện'}
   ],
   patterns:[
     {s:'和 / 跟 + người + 打官司',m:'Kiện ai'},
     {s:'面临一场官司',m:'Đối mặt với một vụ kiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì kiện nhau ra toà, chi bằng ngồi xuống nói chuyện cho đàng hoàng.',answer:'与其打官司，不如坐下来好好儿谈谈。',answerPy:'Yǔqí dǎ guānsi, bùrú zuò xiàlái hǎohāor tántan.',
      note:'与其……不如…… lựa chọn (ôn HSK 5).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Công ty đó vì bán hàng giả nên đã bị khách hàng kiện.',answer:'那家公司因为卖假货，被顾客告上了法庭。',answerPy:'Nà jiā gōngsī yīnwèi mài jiǎhuò, bèi gùkè gàoshangle fǎtíng.',
      note:'被 + người + 告上法庭 = bị kiện ra toà (cách nói văn viết của 打官司).',pair:'被'}
   ]},

  {n:26,zh:'守护',py:'shǒuhù',pos:'Động từ',vn:'canh giữ, bảo vệ, che chở',hv:'thủ hộ',em:'🦉',lesson:1,
   explain:['Canh giữ, bảo vệ để không bị tổn hại: 守 = giữ, 护 = che chở. Sắc thái trang trọng, thường mang tình cảm: 守护家园, 守护孩子, 守护梦想.','Danh từ 守护神 = thần hộ mệnh. Bài khoá: 一些球迷认为猫头鹰是球场的守护神 = cú mèo là thần hộ mệnh của sân bóng.'],
   usage:'守护 + 家园 / 孩子 / 病人 / 梦想; ……的守护神; 日夜守护.',
   collo:['球场的守护神','守护家园','日夜守护','守护梦想'],
   ex_zh:'一些球迷认为猫头鹰是球场的守护神。',ex_py:'Yìxiē qiúmí rènwéi māotóuyīng shì qiúchǎng de shǒuhùshén.',ex_vn:'Một số cổ động viên cho rằng cú mèo là thần hộ mệnh của sân bóng.',
   exList:[
     {zh:'孩子生病的那几天，妈妈日夜守护在床边。',py:'Háizi shēngbìng de nà jǐ tiān, māma rìyè shǒuhù zài chuáng biān.',vn:'Mấy ngày con ốm, mẹ ngày đêm túc trực bên giường.'},
     {zh:'守护地球，就是守护我们共同的家园。',py:'Shǒuhù dìqiú, jiù shì shǒuhù wǒmen gòngtóng de jiāyuán.',vn:'Bảo vệ Trái Đất chính là bảo vệ ngôi nhà chung của chúng ta.'},
     {zh:'在很多国家的传说中，狗是家庭的守护神。',py:'Zài hěn duō guójiā de chuánshuō zhōng, gǒu shì jiātíng de shǒuhùshén.',vn:'Trong truyền thuyết của nhiều nước, chó là thần hộ mệnh của gia đình.'}
   ],
   colloFull:[
     {zh:'球场的守护神',py:'qiúchǎng de shǒuhùshén',vn:'thần hộ mệnh của sân bóng'},
     {zh:'守护家园',py:'shǒuhù jiāyuán',vn:'bảo vệ quê hương'},
     {zh:'日夜守护',py:'rìyè shǒuhù',vn:'ngày đêm canh giữ'},
     {zh:'守护梦想',py:'shǒuhù mèngxiǎng',vn:'gìn giữ ước mơ'},
     {zh:'守护在身边',py:'shǒuhù zài shēnbiān',vn:'túc trực bên cạnh'}
   ],
   patterns:[
     {s:'守护 + N (người / nơi chốn / giá trị)',m:'Canh giữ, bảo vệ …'},
     {s:'……是……的守护神',m:'… là thần hộ mệnh của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính những người lính biên phòng này ngày đêm canh giữ sự bình yên của chúng ta.',answer:'正是这些边防战士日夜守护着我们的安宁。',answerPy:'Zhèng shì zhèxiē biānfáng zhànshì rìyè shǒuhùzhe wǒmen de ānníng.',
      note:'正是…… nhấn mạnh chủ ngữ (ôn HSK 5); 安宁 ôn HSK 6 bài 9.',pair:'正是'},
     {promptLang:'vi',prompt:'Dù sau này xảy ra chuyện gì, bố mẹ cũng sẽ luôn bảo vệ con.',answer:'不管以后发生什么，爸爸妈妈都会一直守护着你。',answerPy:'Bùguǎn yǐhòu fāshēng shénme, bàba māma dōu huì yìzhí shǒuhùzhe nǐ.',
      note:'不管……都…… (ôn HSK 4); V + 着 chỉ trạng thái kéo dài.',pair:'不管……都……'}
   ]},

  {n:27,zh:'谴责',py:'qiǎnzé',pos:'Động từ',vn:'lên án, khiển trách nghiêm khắc',hv:'khiển trách',em:'👎',lesson:1,
   explain:['Phê phán gay gắt hành vi sai trái, thường là công khai, mang tính đạo đức hoặc chính thức: 谴 = trách, 责 = trách cứ. Chủ thể thường là số đông, dư luận, tổ chức: 大家一致谴责, 受到舆论的谴责.','Nặng hơn 批评 và 责怪 (HSK 6 bài 20). Tiếng Việt "khiển trách" thường nhẹ (kỷ luật), nên 谴责 dịch "lên án" tự nhiên hơn.'],
   usage:'谴责 + 人 / 行为; 一致 / 强烈 + 谴责; 受到 + (社会 / 舆论) 的谴责; 谴责 + 某人 + 是……',
   collo:['强烈谴责','一致谴责','受到谴责','谴责这种行为'],
   ex_zh:'一些球迷……甚至谴责球员就是凶手。',ex_py:'Yìxiē qiúmí…… shènzhì qiǎnzé qiúyuán jiù shì xiōngshǒu.',ex_vn:'Một số cổ động viên … thậm chí lên án cầu thủ chính là hung thủ.',
   exList:[
     {zh:'听说那个孩子常被养父母虐待，大家都纷纷谴责他们。',py:'Tīngshuō nàge háizi cháng bèi yǎng fùmǔ nüèdài, dàjiā dōu fēnfēn qiǎnzé tāmen.',vn:'Nghe nói đứa trẻ đó thường bị bố mẹ nuôi ngược đãi, mọi người đều lần lượt lên án họ.'},
     {zh:'这种虐待动物的行为受到了社会的强烈谴责。',py:'Zhè zhǒng nüèdài dòngwù de xíngwéi shòudàole shèhuì de qiángliè qiǎnzé.',vn:'Hành vi ngược đãi động vật này đã bị xã hội lên án mạnh mẽ.'},
     {zh:'大家一致谴责电梯生产厂家粗制滥造。',py:'Dàjiā yízhì qiǎnzé diàntī shēngchǎn chǎngjiā cūzhì-lànzào.',vn:'Mọi người nhất loạt lên án nhà sản xuất thang máy làm ẩu làm dối.'}
   ],
   colloFull:[
     {zh:'强烈谴责',py:'qiángliè qiǎnzé',vn:'lên án mạnh mẽ'},
     {zh:'一致谴责',py:'yízhì qiǎnzé',vn:'nhất loạt lên án'},
     {zh:'受到谴责',py:'shòudào qiǎnzé',vn:'bị lên án'},
     {zh:'谴责这种行为',py:'qiǎnzé zhè zhǒng xíngwéi',vn:'lên án hành vi này'},
     {zh:'良心的谴责',py:'liángxīn de qiǎnzé',vn:'sự cắn rứt lương tâm'}
   ],
   patterns:[
     {s:'受到 + (社会 / 舆论) 的 + 谴责',m:'Bị (xã hội / dư luận) lên án'},
     {s:'一致 / 纷纷 + 谴责 + người / hành vi',m:'Nhất loạt / lần lượt lên án …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu anh ta không xin lỗi, chắc chắn sẽ bị mọi người lên án.',answer:'如果他不道歉，肯定会受到大家的谴责。',answerPy:'Rúguǒ tā bú dàoqiàn, kěndìng huì shòudào dàjiā de qiǎnzé.',
      note:'受到……的谴责 (bị động không dùng 被); 如果……（就）…… (ôn HSK 3).',pair:'如果'},
     {promptLang:'vi',prompt:'Lừa người già là việc ai cũng lên án, huống chi là lừa chính ông bà của mình.',answer:'骗老人是人人都谴责的事，更何况是骗自己的爷爷奶奶。',answerPy:'Piàn lǎorén shì rénrén dōu qiǎnzé de shì, gèng hékuàng shì piàn zìjǐ de yéye nǎinai.',
      note:'何况 = huống chi (ôn HSK 5).',pair:'何况'}
   ]},

  {n:28,zh:'凶手',py:'xiōngshǒu',pos:'Danh từ',vn:'hung thủ, kẻ giết người, thủ phạm',hv:'hung thủ',em:'🔪',lesson:1,
   explain:['Kẻ gây ra vụ giết người hoặc gây thương tích nghiêm trọng: 凶 = hung ác, 手 = người (như 歌手, 选手). Nghĩa bóng: thủ phạm gây hại (电梯是凶手).','Đi với 抓住 / 找到 / 追捕 + 凶手; 杀人凶手. Bài khoá đặt trong ngoặc kép: 被称为"凶手"的球员 — gọi thế nhưng thực ra không cố ý.'],
   usage:'抓住 / 找到 + 凶手; 杀人凶手; 真正的凶手; (N) + 竟然是 + 凶手.',
   collo:['抓住凶手','杀人凶手','真正的凶手','被称为凶手'],
   ex_zh:'被称为"凶手"的球员一定在心中大呼冤枉。',ex_py:'Bèi chēngwéi “xiōngshǒu” de qiúyuán yídìng zài xīn zhōng dà hū yuānwang.',ex_vn:'Cầu thủ bị gọi là "hung thủ" hẳn là trong lòng kêu oan lắm.',
   exList:[
     {zh:'顾客在商场购物意外身亡，凶手竟然是我们常见的自动扶梯！',py:'Gùkè zài shāngchǎng gòuwù yìwài shēnwáng, xiōngshǒu jìngrán shì wǒmen chángjiàn de zìdòng fútī!',vn:'Khách hàng tử vong bất ngờ khi mua sắm ở trung tâm thương mại, thủ phạm lại chính là chiếc thang cuốn quen thuộc!'},
     {zh:'经过三个月的调查，警察终于抓住了真正的凶手。',py:'Jīngguò sān ge yuè de diàochá, jǐngchá zhōngyú zhuāzhùle zhēnzhèng de xiōngshǒu.',vn:'Qua ba tháng điều tra, cảnh sát cuối cùng đã bắt được hung thủ thật sự.'},
     {zh:'医生说，长期熬夜是很多疾病的"凶手"。',py:'Yīshēng shuō, chángqī áoyè shì hěn duō jíbìng de “xiōngshǒu”.',vn:'Bác sĩ nói, thức khuya lâu ngày là "thủ phạm" của nhiều bệnh tật.'}
   ],
   colloFull:[
     {zh:'抓住凶手',py:'zhuāzhù xiōngshǒu',vn:'bắt được hung thủ'},
     {zh:'杀人凶手',py:'shārén xiōngshǒu',vn:'kẻ giết người'},
     {zh:'真正的凶手',py:'zhēnzhèng de xiōngshǒu',vn:'hung thủ thật sự'},
     {zh:'被称为凶手',py:'bèi chēngwéi xiōngshǒu',vn:'bị gọi là hung thủ'},
     {zh:'凶手竟然是……',py:'xiōngshǒu jìngrán shì……',vn:'thủ phạm hoá ra lại là …'}
   ],
   patterns:[
     {s:'凶手竟然是……',m:'Thủ phạm hoá ra lại là … (bất ngờ)'},
     {s:'抓住 / 找到 + (真正的) 凶手',m:'Bắt được / tìm ra hung thủ (thật sự)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai ngờ rằng, hung thủ lại chính là người hàng xóm trông rất hiền lành.',answer:'谁也没想到，凶手竟然就是那个看起来很老实的邻居。',answerPy:'Shéi yě méi xiǎngdào, xiōngshǒu jìngrán jiù shì nàge kàn qǐlái hěn lǎoshi de línjū.',
      note:'竟然 = vậy mà, hoá ra (bất ngờ, ôn HSK 5); 谁也没想到.',pair:'竟然'},
     {promptLang:'vi',prompt:'Tuy cảnh sát đã tìm cả tháng, nhưng hung thủ vẫn chưa bị bắt.',answer:'尽管警察找了一个月，凶手却还没被抓住。',answerPy:'Jǐnguǎn jǐngchá zhǎole yí ge yuè, xiōngshǒu què hái méi bèi zhuāzhù.',
      note:'尽管……却…… nhượng bộ (ôn HSK 5); 被 phủ định: 没被 + V.',pair:'尽管……却……'}
   ]},

  {n:29,zh:'冤枉',py:'yuānwang',pos:'Động từ / Tính từ',vn:'đổ oan, xử oan; oan uổng, oan ức',hv:'oan uổng',em:'😣',lesson:1,
   explain:['Động từ: đổ tội cho người vô tội, gán lỗi sai cho ai: 冤枉好人, 别冤枉我. Tính từ: bị oan, oan ức: 我太冤枉了. Thành ngữ trong bài: 大呼冤枉 = kêu to "oan quá".','Nghĩa thứ hai (khẩu ngữ): uổng, phí công vô ích — 冤枉钱 (tiền mất oan), 走冤枉路 (đi đường vòng uổng công).'],
   usage:'冤枉 + 人 (好人 / 我); 被 + 人 + 冤枉; 大呼冤枉; 冤枉钱 / 冤枉路.',
   collo:['大呼冤枉','冤枉好人','被冤枉','走冤枉路'],
   ex_zh:'被称为"凶手"的球员一定在心中大呼冤枉。',ex_py:'Bèi chēngwéi “xiōngshǒu” de qiúyuán yídìng zài xīn zhōng dà hū yuānwang.',ex_vn:'Cầu thủ bị gọi là "hung thủ" hẳn là trong lòng kêu oan ầm ĩ.',
   exList:[
     {zh:'钱不是我拿的，你可别冤枉好人！',py:'Qián bú shì wǒ ná de, nǐ kě bié yuānwang hǎorén!',vn:'Tiền không phải tôi lấy, anh đừng có đổ oan cho người tốt!'},
     {zh:'他被老师冤枉了，委屈得哭了起来。',py:'Tā bèi lǎoshī yuānwang le, wěiqu de kūle qǐlái.',vn:'Cậu bé bị thầy trách oan, tủi thân đến bật khóc.'},
     {zh:'早知道有地铁，我就不走这么多冤枉路了。',py:'Zǎo zhīdào yǒu dìtiě, wǒ jiù bù zǒu zhème duō yuānwang lù le.',vn:'Biết sớm có tàu điện ngầm thì tôi đã chẳng phải đi vòng uổng công thế này.'}
   ],
   colloFull:[
     {zh:'大呼冤枉',py:'dà hū yuānwang',vn:'kêu oan ầm ĩ'},
     {zh:'冤枉好人',py:'yuānwang hǎorén',vn:'đổ oan cho người tốt'},
     {zh:'被冤枉',py:'bèi yuānwang',vn:'bị oan'},
     {zh:'走冤枉路',py:'zǒu yuānwang lù',vn:'đi đường vòng uổng công'},
     {zh:'花冤枉钱',py:'huā yuānwang qián',vn:'tiêu tiền oan'}
   ],
   patterns:[
     {s:'别冤枉 + người',m:'Đừng đổ oan cho ai'},
     {s:'被 + người + 冤枉了',m:'Bị ai đổ oan'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng không phải lỗi của cậu ấy, vậy mà cậu ấy lại bị mọi người trách oan.',answer:'明明不是他的错，他却被大家冤枉了。',answerPy:'Míngmíng bú shì tā de cuò, tā què bèi dàjiā yuānwang le.',
      note:'明明……却…… (HSK 6 bài 6); câu bị động 被.',pair:'明明……却……'},
     {promptLang:'vi',prompt:'Thà rằng đi sớm một chút, cũng đừng vì lạc đường mà đi đường vòng uổng công.',answer:'宁可早点儿出发，也别因为迷路走冤枉路。',answerPy:'Nìngkě zǎo diǎnr chūfā, yě bié yīnwèi mílù zǒu yuānwang lù.',
      note:'宁可……也…… lựa chọn (ôn HSK 5).',pair:'宁可……也……'}
   ]},

  {n:30,zh:'辩解',py:'biànjiě',pos:'Động từ',vn:'thanh minh, bào chữa, biện bạch',hv:'biện giải',em:'🙋',lesson:1,
   explain:['Giải thích lý do để chứng minh mình không có lỗi (hoặc lỗi không lớn) khi bị trách: 辩 = biện luận, 解 = giải thích. Thường dùng khi bị nghi ngờ, bị chỉ trích.','Hay đi với 为 + (自己) + 辩解; 不容辩解 (không cho biện bạch); 极力辩解. Khác 解释 (giải thích nói chung): 辩解 luôn gắn với việc tự bảo vệ mình trước lời trách.'],
   usage:'为 + 自己 / 人 + 辩解; 极力 / 拼命 + 辩解; 不容 / 无须 + 辩解.',
   collo:['为自己辩解','极力辩解','不容辩解','辩解几句'],
   ex_zh:'道歉之余却也没忘了为自己辩解——他不是成心的。',ex_py:'Dàoqiàn zhī yú què yě méi wàngle wèi zìjǐ biànjiě——tā bú shì chéngxīn de.',ex_vn:'Xin lỗi xong nhưng anh ta cũng không quên thanh minh cho mình — anh ta không cố ý.',
   exList:[
     {zh:'做错了就要承认，不要总是为自己辩解。',py:'Zuòcuòle jiù yào chéngrèn, búyào zǒngshì wèi zìjǐ biànjiě.',vn:'Làm sai thì phải nhận, đừng lúc nào cũng thanh minh cho mình.'},
     {zh:'不管他怎么辩解，大家都不相信他的话。',py:'Bùguǎn tā zěnme biànjiě, dàjiā dōu bù xiāngxìn tā de huà.',vn:'Dù anh ta bào chữa thế nào, mọi người cũng không tin lời anh ta.'},
     {zh:'事实摆在眼前，你再辩解也没有用。',py:'Shìshí bǎi zài yǎnqián, nǐ zài biànjiě yě méiyǒu yòng.',vn:'Sự thật bày ra trước mắt, cậu có bào chữa nữa cũng vô ích.'}
   ],
   colloFull:[
     {zh:'为自己辩解',py:'wèi zìjǐ biànjiě',vn:'thanh minh cho mình'},
     {zh:'极力辩解',py:'jílì biànjiě',vn:'ra sức bào chữa'},
     {zh:'不容辩解',py:'bùróng biànjiě',vn:'không cho biện bạch'},
     {zh:'辩解几句',py:'biànjiě jǐ jù',vn:'thanh minh vài câu'},
     {zh:'无须辩解',py:'wúxū biànjiě',vn:'không cần biện bạch'}
   ],
   patterns:[
     {s:'为 + 自己 / 人 + 辩解',m:'Thanh minh, bào chữa cho mình / ai'},
     {s:'再 + 辩解 + 也没有用',m:'Có bào chữa nữa cũng vô ích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa xin lỗi vừa thanh minh cho mình, nói rằng không phải cố ý.',answer:'他一边道歉，一边为自己辩解，说不是故意的。',answerPy:'Tā yìbiān dàoqiàn, yìbiān wèi zìjǐ biànjiě, shuō bú shì gùyì de.',
      note:'一边……一边…… (ôn HSK 3).',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Với sự thật như vậy, bất cứ lời bào chữa nào cũng đều vô dụng.',answer:'面对这样的事实，任何辩解都是没有用的。',answerPy:'Miànduì zhèyàng de shìshí, rènhé biànjiě dōu shì méiyǒu yòng de.',
      note:'任何……都…… (ôn HSK 4); 是……的 khẳng định.',pair:'任何……都……'}
   ]},

  {n:31,zh:'成心',py:'chéngxīn',pos:'Phó từ',vn:'cố ý, cố tình',hv:'thành tâm',em:'😈',lesson:1,
   explain:['Cố ý làm (thường là việc không tốt, gây phiền cho người khác) — nghĩa gần 故意 nhưng khẩu ngữ hơn. Hay dùng trong câu phủ định để thanh minh: 我不是成心的 = tôi không cố ý.','BẪY Hán Việt: 成心 đọc "thành tâm" nhưng KHÔNG phải "thành tâm, chân thành" (tiếng Trung nói 诚心). 成心 = CỐ Ý.'],
   usage:'成心 + V (成心气我 / 成心捣乱); 不是成心的; 成心跟 + 人 + 过不去.',
   collo:['不是成心的','成心气人','成心捣乱','成心跟我作对'],
   ex_zh:'他还是为自己的行为诚恳道歉……他不是成心的。',ex_py:'Tā háishi wèi zìjǐ de xíngwéi chéngkěn dàoqiàn…… tā bú shì chéngxīn de.',ex_vn:'Anh ta vẫn thành khẩn xin lỗi vì hành vi của mình … anh ta không cố ý.',
   exList:[
     {zh:'对不起，我不是成心踩你的脚，车上人太多了。',py:'Duìbuqǐ, wǒ bú shì chéngxīn cǎi nǐ de jiǎo, chē shang rén tài duō le.',vn:'Xin lỗi, tôi không cố tình giẫm chân bạn đâu, trên xe đông người quá.'},
     {zh:'我正在复习，他却把音乐开得那么大，简直是成心捣乱。',py:'Wǒ zhèngzài fùxí, tā què bǎ yīnyuè kāi de nàme dà, jiǎnzhí shì chéngxīn dǎoluàn.',vn:'Tôi đang ôn bài mà cậu ta lại mở nhạc to thế, đúng là cố tình phá đám.'},
     {zh:'虽然不是成心的，但你弄坏了人家的东西，就应该赔偿。',py:'Suīrán bú shì chéngxīn de, dàn nǐ nònghuàile rénjia de dōngxi, jiù yīnggāi péicháng.',vn:'Tuy không cố ý, nhưng cậu làm hỏng đồ của người ta thì nên bồi thường.'}
   ],
   colloFull:[
     {zh:'不是成心的',py:'bú shì chéngxīn de',vn:'không phải cố ý'},
     {zh:'成心气人',py:'chéngxīn qì rén',vn:'cố tình chọc tức'},
     {zh:'成心捣乱',py:'chéngxīn dǎoluàn',vn:'cố tình phá đám'},
     {zh:'成心跟我作对',py:'chéngxīn gēn wǒ zuòduì',vn:'cố tình chống đối tôi'},
     {zh:'成心为难',py:'chéngxīn wéinán',vn:'cố tình làm khó'}
   ],
   patterns:[
     {s:'不是成心的',m:'Không phải cố ý (thanh minh)'},
     {s:'成心 + V (việc không tốt)',m:'Cố tình làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy đến muộn vì kẹt xe, chứ không phải cố tình để chúng ta đợi.',answer:'他迟到是因为堵车，而不是成心让我们等。',answerPy:'Tā chídào shì yīnwèi dǔchē, ér bú shì chéngxīn ràng wǒmen děng.',
      note:'是因为……，而不是…… (ôn HSK 5).',pair:'是……而不是……'},
     {promptLang:'vi',prompt:'Tôi biết em không cố ý, cho nên lần này tôi tha thứ cho em.',answer:'我知道你不是成心的，所以这次原谅你了。',answerPy:'Wǒ zhīdào nǐ bú shì chéngxīn de, suǒyǐ zhè cì yuánliàng nǐ le.',
      note:'不是……的 phủ định nhấn mạnh; 所以 kết quả.',pair:'所以'}
   ]},

  {n:32,zh:'意料',py:'yìliào',pos:'Động từ / Danh từ',vn:'dự đoán, lường trước; điều dự liệu',hv:'ý liệu',em:'🔮',lesson:1,
   explain:['Dự đoán trước, liệu trước (sự việc sẽ ra sao): 意 = ý nghĩ, 料 = liệu. Thường dùng trong các cụm cố định: 出人意料 (ngoài dự đoán), 出乎意料, 意料之中 / 之外, 没意料到.','Bài khoá: 明星们遭受的伤害有时出人意料 = có khi nằm ngoài dự liệu của mọi người. Gần 预料.'],
   usage:'出人意料; 出乎 + (人们的) + 意料; 在……意料之中 / 之外; 没(有)意料到.',
   collo:['出人意料','出乎意料','意料之中','意料之外'],
   ex_zh:'明星们遭受的伤害有时出人意料。',ex_py:'Míngxīngmen zāoshòu de shānghài yǒushí chū rén yìliào.',ex_vn:'Những chấn thương các ngôi sao phải chịu đôi khi nằm ngoài dự liệu.',
   exList:[
     {zh:'比赛的结果完全出乎大家的意料，冠军竟然是一名新手。',py:'Bǐsài de jiéguǒ wánquán chūhū dàjiā de yìliào, guànjūn jìngrán shì yì míng xīnshǒu.',vn:'Kết quả trận đấu hoàn toàn nằm ngoài dự đoán của mọi người, nhà vô địch lại là một người mới.'},
     {zh:'他考上了名牌大学，这完全在老师的意料之中。',py:'Tā kǎoshangle míngpái dàxué, zhè wánquán zài lǎoshī de yìliào zhī zhōng.',vn:'Cậu ấy đỗ vào trường đại học danh tiếng, điều này hoàn toàn nằm trong dự liệu của thầy.'},
     {zh:'谁也没意料到，一张小小的登机牌会成为凶器。',py:'Shéi yě méi yìliào dào, yì zhāng xiǎoxiǎo de dēngjīpái huì chéngwéi xiōngqì.',vn:'Không ai lường trước được một tấm thẻ lên máy bay nhỏ xíu lại trở thành hung khí.'}
   ],
   colloFull:[
     {zh:'出人意料',py:'chū rén yìliào',vn:'ngoài dự liệu của mọi người'},
     {zh:'出乎意料',py:'chūhū yìliào',vn:'nằm ngoài dự đoán'},
     {zh:'意料之中',py:'yìliào zhī zhōng',vn:'trong dự liệu'},
     {zh:'意料之外',py:'yìliào zhī wài',vn:'ngoài dự liệu'},
     {zh:'没意料到',py:'méi yìliào dào',vn:'không lường trước được'}
   ],
   patterns:[
     {s:'出乎 + (人) + 的意料',m:'Nằm ngoài dự đoán của ai'},
     {s:'在 + (人) + 的意料之中 / 之外',m:'Nằm trong / ngoài dự liệu của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ngờ bài kiểm tra lần này lại dễ đến vậy, thật là ngoài dự đoán.',answer:'没想到这次考试这么容易，真是出乎意料。',answerPy:'Méi xiǎngdào zhè cì kǎoshì zhème róngyì, zhēn shì chūhū yìliào.',
      note:'没想到…… = không ngờ (ôn HSK 4); 出乎意料.',pair:'没想到'},
     {promptLang:'vi',prompt:'Kết quả này vừa nằm ngoài dự đoán, lại vừa hợp tình hợp lý.',answer:'这个结果既在意料之外，又在情理之中。',answerPy:'Zhège jiéguǒ jì zài yìliào zhī wài, yòu zài qínglǐ zhī zhōng.',
      note:'既……又…… (ôn HSK 4); 意料之外 ↔ 情理之中 (cách nói quen thuộc).',pair:'既……又……'}
   ]},

  {n:33,zh:'频繁',py:'pínfán',pos:'Tính từ',vn:'thường xuyên, dồn dập, liên tục (nhiều lần)',hv:'tần phồn',em:'🔁',lesson:1,
   explain:['Số lần xảy ra nhiều, liên tiếp trong thời gian ngắn: 频 = nhiều lần (频率 HSK 6 bài 10), 繁 = nhiều. Văn viết, hay đi với 赛事, 往来, 交流, 出现.','Làm vị ngữ (赛事频繁) hoặc trạng ngữ (频繁地出现 / 频繁出差). Khác 经常 (phó từ khẩu ngữ): 频繁 là tính từ, nhấn mật độ dày đặc.'],
   usage:'(赛事 / 往来 / 交流) + 频繁; 频繁 + 地 + V; 频繁的 + N; 越来越频繁.',
   collo:['赛事频繁','频繁出差','往来频繁','频繁地出现'],
   ex_zh:'因赛事频繁，航空旅行成了运动员的家常便饭。',ex_py:'Yīn sàishì pínfán, hángkōng lǚxíng chéngle yùndòngyuán de jiācháng biànfàn.',ex_vn:'Vì lịch thi đấu dày đặc, đi lại bằng máy bay trở thành chuyện cơm bữa của vận động viên.',
   exList:[
     {zh:'两国之间的文化交流越来越频繁。',py:'Liǎng guó zhījiān de wénhuà jiāoliú yuè lái yuè pínfán.',vn:'Giao lưu văn hoá giữa hai nước ngày càng thường xuyên.'},
     {zh:'他工作忙，频繁出差，一个月在家住不了几天。',py:'Tā gōngzuò máng, pínfán chūchāi, yí ge yuè zài jiā zhù bu liǎo jǐ tiān.',vn:'Anh ấy bận việc, đi công tác liên tục, một tháng ở nhà chẳng được mấy ngày.'},
     {zh:'最近这种诈骗短信频繁地出现，大家一定要警惕。',py:'Zuìjìn zhè zhǒng zhàpiàn duǎnxìn pínfán de chūxiàn, dàjiā yídìng yào jǐngtì.',vn:'Gần đây loại tin nhắn lừa đảo này xuất hiện dồn dập, mọi người nhất định phải cảnh giác.'}
   ],
   colloFull:[
     {zh:'赛事频繁',py:'sàishì pínfán',vn:'lịch thi đấu dày đặc'},
     {zh:'频繁出差',py:'pínfán chūchāi',vn:'đi công tác liên tục'},
     {zh:'往来频繁',py:'wǎnglái pínfán',vn:'qua lại thường xuyên'},
     {zh:'频繁地出现',py:'pínfán de chūxiàn',vn:'xuất hiện dồn dập'},
     {zh:'越来越频繁',py:'yuè lái yuè pínfán',vn:'ngày càng thường xuyên'}
   ],
   patterns:[
     {s:'N + 频繁',m:'… diễn ra thường xuyên, dày đặc'},
     {s:'频繁（地）+ V',m:'Làm gì liên tục, dồn dập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì đổi việc quá thường xuyên, anh ấy rất khó được thăng chức.',answer:'由于换工作太频繁，他很难得到提升。',answerPy:'Yóuyú huàn gōngzuò tài pínfán, tā hěn nán dédào tíshēng.',
      note:'由于 (văn viết) nêu nguyên nhân (ôn HSK 4).',pair:'由于'},
     {promptLang:'vi',prompt:'Gần đây động đất xảy ra liên tục, khiến người dân rất lo lắng.',answer:'最近地震发生得很频繁，使得居民们非常担心。',answerPy:'Zuìjìn dìzhèn fāshēng de hěn pínfán, shǐde jūmínmen fēicháng dānxīn.',
      note:'V + 得 + 很频繁 (bổ ngữ trạng thái); 使得 = khiến (ôn HSK 5).',pair:'使得'}
   ]},

  {n:34,zh:'航空',py:'hángkōng',pos:'Danh từ',vn:'hàng không',hv:'hàng không',em:'✈️',lesson:1,
   explain:['Hoạt động bay trong khí quyển (máy bay…): 航 = đi (tàu, thuyền), 空 = bầu trời. Thường làm định ngữ: 航空公司, 航空旅行, 航空邮件, 航空港.','Khác 航天 (hàng không vũ trụ — bay ra ngoài khí quyển). Trùng khít với tiếng Việt "hàng không".'],
   usage:'航空 + 公司 / 旅行 / 事业 / 邮件 / 安全; 民用航空 (民航).',
   collo:['航空旅行','航空公司','航空邮件','航空安全'],
   ex_zh:'因赛事频繁，航空旅行成了运动员的家常便饭。',ex_py:'Yīn sàishì pínfán, hángkōng lǚxíng chéngle yùndòngyuán de jiācháng biànfàn.',ex_vn:'Vì thi đấu dày đặc, đi lại bằng máy bay thành chuyện cơm bữa của vận động viên.',
   exList:[
     {zh:'这家航空公司的服务很周到，飞机也很少晚点。',py:'Zhè jiā hángkōng gōngsī de fúwù hěn zhōudào, fēijī yě hěn shǎo wǎndiǎn.',vn:'Hãng hàng không này phục vụ rất chu đáo, máy bay cũng ít khi trễ giờ.'},
     {zh:'她从小就梦想在航空公司当一名空姐。',py:'Tā cóngxiǎo jiù mèngxiǎng zài hángkōng gōngsī dāng yì míng kōngjiě.',vn:'Từ nhỏ cô ấy đã mơ được làm tiếp viên của một hãng hàng không.'},
     {zh:'为了保证航空安全，乘客不能带打火机上飞机。',py:'Wèile bǎozhèng hángkōng ānquán, chéngkè bù néng dài dǎhuǒjī shàng fēijī.',vn:'Để đảm bảo an toàn hàng không, hành khách không được mang bật lửa lên máy bay.'}
   ],
   colloFull:[
     {zh:'航空旅行',py:'hángkōng lǚxíng',vn:'đi lại bằng máy bay'},
     {zh:'航空公司',py:'hángkōng gōngsī',vn:'hãng hàng không'},
     {zh:'航空邮件',py:'hángkōng yóujiàn',vn:'thư gửi đường hàng không'},
     {zh:'航空安全',py:'hángkōng ānquán',vn:'an toàn hàng không'},
     {zh:'民用航空',py:'mínyòng hángkōng',vn:'hàng không dân dụng'}
   ],
   patterns:[
     {s:'航空 + 公司 / 旅行 / 安全',m:'Hãng / du lịch / an toàn hàng không'},
     {s:'航空 ≠ 航天',m:'Hàng không ≠ hàng không vũ trụ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với đi tàu hoả, đi máy bay tuy đắt hơn nhưng tiết kiệm được nhiều thời gian.',answer:'跟坐火车比起来，航空旅行虽然贵一些，但能节省很多时间。',answerPy:'Gēn zuò huǒchē bǐ qǐlái, hángkōng lǚxíng suīrán guì yìxiē, dàn néng jiéshěng hěn duō shíjiān.',
      note:'跟……比起来 = so với … (ôn HSK 4).',pair:'跟……比起来'},
     {promptLang:'vi',prompt:'Nghe nói hãng hàng không đó sắp mở đường bay thẳng tới Hà Nội.',answer:'听说那家航空公司快要开通到河内的直飞航线了。',answerPy:'Tīngshuō nà jiā hángkōng gōngsī kuàiyào kāitōng dào Hénèi de zhífēi hángxiàn le.',
      note:'快要……了 = sắp … (ôn HSK 3).',pair:'快要……了'}
   ]},

  {n:35,zh:'大意',py:'dàyi',pos:'Tính từ',vn:'sơ ý, cẩu thả, không chú ý',hv:'đại ý',em:'🤦',lesson:1,
   explain:['Đọc dàyi (thanh nhẹ): không cẩn thận, lơ đễnh dẫn đến sai sót. Hay dùng trong thành ngữ 粗心大意, 马虎大意, và câu cảnh báo 千万不能大意 / 一时大意.','BẪY: 大意 đọc dàyì (thanh 4) lại là "đại ý, ý chính" (段落大意). Ở bài này là dàyi = SƠ Ý — tiếng Việt "đại ý" không có nghĩa này.'],
   usage:'粗心大意; 一时大意; 千万 / 可 + 不能 / 别 + 大意; 太大意了.',
   collo:['粗心大意','一时大意','千万别大意','马虎大意'],
   ex_zh:'我们每个人都有过粗心大意的时候。',ex_py:'Wǒmen měi ge rén dōu yǒuguo cūxīn dàyi de shíhou.',ex_vn:'Mỗi người chúng ta đều từng có lúc sơ ý cẩu thả.',
   exList:[
     {zh:'在这个以精细著称的行业中，大意是最不能出现的错误。',py:'Zài zhège yǐ jīngxì zhùchēng de hángyè zhōng, dàyi shì zuì bù néng chūxiàn de cuòwù.',vn:'Trong ngành nổi tiếng về sự tỉ mỉ này, sơ ý là lỗi tuyệt đối không được xảy ra.'},
     {zh:'只因为一时大意，他把"己"写成了"已"，丢了两分。',py:'Zhǐ yīnwèi yìshí dàyi, tā bǎ “jǐ” xiěchéngle “yǐ”, diūle liǎng fēn.',vn:'Chỉ vì nhất thời sơ ý, cậu ấy viết chữ "己" thành "已", mất hai điểm.'},
     {zh:'开车的时候千万不能大意，一不小心就会出事故。',py:'Kāichē de shíhou qiānwàn bù néng dàyi, yí bù xiǎoxīn jiù huì chū shìgù.',vn:'Khi lái xe tuyệt đối không được lơ là, sơ sẩy một chút là xảy ra tai nạn.'}
   ],
   colloFull:[
     {zh:'粗心大意',py:'cūxīn dàyi',vn:'sơ ý cẩu thả'},
     {zh:'一时大意',py:'yìshí dàyi',vn:'nhất thời sơ ý'},
     {zh:'千万别大意',py:'qiānwàn bié dàyi',vn:'tuyệt đối đừng lơ là'},
     {zh:'马虎大意',py:'mǎhu dàyi',vn:'qua loa đại khái'},
     {zh:'太大意了',py:'tài dàyi le',vn:'sơ ý quá'}
   ],
   patterns:[
     {s:'千万 / 可 + 不能 / 别 + 大意',m:'Tuyệt đối không được lơ là'},
     {s:'因为一时大意，……',m:'Vì nhất thời sơ ý, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần sơ ý một chút là có thể mất điểm, cho nên làm xong phải kiểm tra lại.',answer:'只要稍微大意一点儿，就可能丢分，所以做完要再检查一遍。',answerPy:'Zhǐyào shāowēi dàyi yìdiǎnr, jiù kěnéng diū fēn, suǒyǐ zuòwán yào zài jiǎnchá yí biàn.',
      note:'只要……就…… (ôn HSK 4); 稍微 + Adj + 一点儿.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy đối thủ không mạnh, nhưng chúng ta tuyệt đối không được chủ quan.',answer:'尽管对手不强，但我们千万不能大意。',answerPy:'Jǐnguǎn duìshǒu bù qiáng, dàn wǒmen qiānwàn bù néng dàyi.',
      note:'尽管……但…… (ôn HSK 5).',pair:'尽管……但……'}
   ]},

  {n:36,zh:'悲哀',py:'bēi\'āi',pos:'Tính từ',vn:'bi ai, đau xót, xót xa',hv:'bi ai',em:'😢',lesson:1,
   explain:['Đau buồn, xót xa (mức độ sâu): 悲 = buồn, 哀 = thương xót. Văn viết. Ngoài nỗi buồn cá nhân, còn dùng để đánh giá một hiện tượng đáng buồn: 令人悲哀的是…… (điều đáng buồn là …).','Pinyin có dấu cách âm: bēi\'āi. Gần 悲伤 (buồn thương), 悲痛 (đau đớn). 悲哀 hay dùng cho sự xót xa trước một thực tế.'],
   usage:'令人悲哀的是……; 感到悲哀; ……是……的悲哀; 悲哀的 + 心情 / 事实.',
   collo:['令人悲哀的是','感到悲哀','悲哀的心情','时代的悲哀'],
   ex_zh:'令人悲哀的是，这也可能成为被伤害的原因。',ex_py:'Lìng rén bēi\'āi de shì, zhè yě kěnéng chéngwéi bèi shānghài de yuányīn.',ex_vn:'Điều đáng buồn là, đó cũng có thể trở thành nguyên nhân bị tổn thương.',
   exList:[
     {zh:'令人悲哀的是，很多人直到失去健康才懂得珍惜。',py:'Lìng rén bēi\'āi de shì, hěn duō rén zhídào shīqù jiànkāng cái dǒngde zhēnxī.',vn:'Điều đáng buồn là rất nhiều người phải đến khi mất sức khoẻ mới biết trân trọng.'},
     {zh:'听到老朋友去世的消息，他感到无比悲哀。',py:'Tīngdào lǎo péngyou qùshì de xiāoxi, tā gǎndào wúbǐ bēi\'āi.',vn:'Nghe tin bạn cũ qua đời, ông ấy vô cùng đau xót.'},
     {zh:'一个人最大的悲哀，是连自己想要什么都不知道。',py:'Yí ge rén zuì dà de bēi\'āi, shì lián zìjǐ xiǎng yào shénme dōu bù zhīdào.',vn:'Nỗi buồn lớn nhất của một người là đến bản thân muốn gì cũng không biết.'}
   ],
   colloFull:[
     {zh:'令人悲哀的是',py:'lìng rén bēi\'āi de shì',vn:'điều đáng buồn là'},
     {zh:'感到悲哀',py:'gǎndào bēi\'āi',vn:'cảm thấy xót xa'},
     {zh:'悲哀的心情',py:'bēi\'āi de xīnqíng',vn:'tâm trạng đau buồn'},
     {zh:'时代的悲哀',py:'shídài de bēi\'āi',vn:'nỗi buồn của thời đại'},
     {zh:'最大的悲哀',py:'zuì dà de bēi\'āi',vn:'nỗi buồn lớn nhất'}
   ],
   patterns:[
     {s:'令人悲哀的是，……',m:'Điều đáng buồn là …'},
     {s:'……最大的悲哀是……',m:'Nỗi buồn lớn nhất của … là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều đáng buồn là, đến khi hiểu ra thì đã quá muộn rồi.',answer:'令人悲哀的是，等到明白过来的时候，已经太晚了。',answerPy:'Lìng rén bēi\'āi de shì, děngdào míngbai guòlái de shíhou, yǐjīng tài wǎn le.',
      note:'令人 + Adj + 的是 = điều khiến người ta … là (ôn HSK 5).',pair:'令人……的是'},
     {promptLang:'vi',prompt:'Nhìn những khu rừng bị chặt phá, trong lòng anh ấy không kìm được nỗi xót xa.',answer:'看着被砍伐的森林，他心里不由得感到一阵悲哀。',answerPy:'Kànzhe bèi kǎnfá de sēnlín, tā xīnli bùyóude gǎndào yí zhèn bēi\'āi.',
      note:'不由得 = bất giác (HSK 6 bài 2); V + 着 làm trạng ngữ.',pair:'不由得'}
   ]},

  {n:37,zh:'主办',py:'zhǔbàn',pos:'Động từ',vn:'đứng ra tổ chức, đăng cai',hv:'chủ biện',em:'🎪',lesson:1,
   explain:['Đứng ra chủ trì tổ chức một hoạt động (hội nghị, cuộc thi, triển lãm…): 主 = chủ trì, 办 = làm. Danh từ ghép: 主办方 (bên tổ chức), 主办单位, 主办国 / 城市 (nước / thành phố đăng cai).','Phân biệt 举办 (tổ chức nói chung) và 承办 (đơn vị thực hiện). 主办 nhấn vai trò đứng tên chủ trì.'],
   usage:'主办 + 比赛 / 会议 / 展览 / 奥运会; 主办方 / 主办单位 / 主办城市; 由……主办.',
   collo:['主办方','主办比赛','主办城市','由……主办'],
   ex_zh:'一次赛前热身，主办方特意做了警示牌。',ex_py:'Yí cì sài qián rèshēn, zhǔbànfāng tèyì zuòle jǐngshìpái.',ex_vn:'Một lần khởi động trước trận, ban tổ chức đã đặc biệt làm biển cảnh báo.',
   exList:[
     {zh:'这次演讲比赛由学生会主办，全校同学都可以报名。',py:'Zhè cì yǎnjiǎng bǐsài yóu xuéshēnghuì zhǔbàn, quán xiào tóngxué dōu kěyǐ bàomíng.',vn:'Cuộc thi hùng biện lần này do hội học sinh tổ chức, học sinh toàn trường đều có thể đăng ký.'},
     {zh:'为了主办奥运会，这座城市修建了很多新体育馆。',py:'Wèile zhǔbàn Àoyùnhuì, zhè zuò chéngshì xiūjiànle hěn duō xīn tǐyùguǎn.',vn:'Để đăng cai Thế vận hội, thành phố này đã xây nhiều nhà thi đấu mới.'},
     {zh:'主办方临时取消了活动，观众们都很恼火。',py:'Zhǔbànfāng línshí qǔxiāole huódòng, guānzhòngmen dōu hěn nǎohuǒ.',vn:'Ban tổ chức hủy sự kiện vào phút chót, khán giả ai cũng bực mình.'}
   ],
   colloFull:[
     {zh:'主办方',py:'zhǔbànfāng',vn:'ban tổ chức'},
     {zh:'主办比赛',py:'zhǔbàn bǐsài',vn:'tổ chức cuộc thi'},
     {zh:'主办城市',py:'zhǔbàn chéngshì',vn:'thành phố đăng cai'},
     {zh:'由……主办',py:'yóu…… zhǔbàn',vn:'do … tổ chức'},
     {zh:'主办单位',py:'zhǔbàn dānwèi',vn:'đơn vị chủ trì'}
   ],
   patterns:[
     {s:'由 + tổ chức + 主办',m:'Do … đứng ra tổ chức'},
     {s:'主办方 + 特意 / 临时 + V',m:'Ban tổ chức đặc biệt / đột xuất làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày hội văn hoá do nhà trường tổ chức này năm nào cũng thu hút rất nhiều phụ huynh.',answer:'这个由学校主办的文化节每年都吸引了很多家长。',answerPy:'Zhège yóu xuéxiào zhǔbàn de wénhuàjié měi nián dōu xīyǐnle hěn duō jiāzhǎng.',
      note:'由……主办的 + N làm định ngữ dài (ôn HSK 5).',pair:'由'},
     {promptLang:'vi',prompt:'Chỉ có chuẩn bị đầy đủ thì ban tổ chức mới đảm bảo được hoạt động diễn ra suôn sẻ.',answer:'只有准备充分，主办方才能保证活动顺利进行。',answerPy:'Zhǐyǒu zhǔnbèi chōngfèn, zhǔbànfāng cái néng bǎozhèng huódòng shùnlì jìnxíng.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:38,zh:'特意',py:'tèyì',pos:'Phó từ',vn:'đặc biệt (vì việc gì), cất công, cố ý (làm việc tốt)',hv:'đặc ý',em:'🎁',lesson:1,
   explain:['Phó từ, biểu thị CHUYÊN VÌ một việc nào đó mà làm (专门为了某一件事): 特意来看你 = cất công đến thăm bạn. Thường là việc bỏ tâm sức làm cho tốt, có ảnh hưởng tích cực tới người khác.','So với 故意 (xem 词语辨析): 故意 = biết không nên mà vẫn làm, thường mang nghĩa xấu; 故意 còn làm danh từ (pháp luật), 特意 thì không.'],
   usage:'特意 + V (特意来 / 特意准备 / 特意绕道); 特意为 + 人 + V; 是……特意……的.',
   collo:['特意准备','特意赶来','特意为你买的','特意绕道'],
   ex_zh:'一次赛前热身，主办方特意做了警示牌。',ex_py:'Yí cì sài qián rèshēn, zhǔbànfāng tèyì zuòle jǐngshìpái.',ex_vn:'Một lần khởi động trước trận, ban tổ chức đã cất công làm biển cảnh báo.',
   exList:[
     {zh:'听说我马上要回国，妈妈特意准备了我爱吃的家乡菜。',py:'Tīngshuō wǒ mǎshàng yào huí guó, māma tèyì zhǔnbèile wǒ ài chī de jiāxiāng cài.',vn:'Nghe tin tôi sắp về nước, mẹ đã đặc biệt chuẩn bị những món quê tôi thích ăn.'},
     {zh:'那一年我出差去天津，特意绕道北京，去了趟圆明园。',py:'Nà yì nián wǒ chūchāi qù Tiānjīn, tèyì ràodào Běijīng, qùle tàng Yuánmíngyuán.',vn:'Năm đó tôi đi công tác Thiên Tân, đã cố ý đi vòng qua Bắc Kinh, ghé Viên Minh Viên một chuyến.'},
     {zh:'这是我特意为你准备的房间，知道你换了地方睡不好觉。',py:'Zhè shì wǒ tèyì wèi nǐ zhǔnbèi de fángjiān, zhīdào nǐ huànle dìfang shuì bu hǎo jiào.',vn:'Đây là căn phòng tôi đặc biệt chuẩn bị cho bạn, biết bạn đổi chỗ là ngủ không ngon.'}
   ],
   colloFull:[
     {zh:'特意准备',py:'tèyì zhǔnbèi',vn:'đặc biệt chuẩn bị'},
     {zh:'特意赶来',py:'tèyì gǎnlái',vn:'cất công chạy tới'},
     {zh:'特意为你买的',py:'tèyì wèi nǐ mǎi de',vn:'mua riêng cho bạn'},
     {zh:'特意绕道',py:'tèyì ràodào',vn:'cố ý đi đường vòng (để ghé)'},
     {zh:'特意查阅',py:'tèyì cháyuè',vn:'cất công tra cứu'}
   ],
   patterns:[
     {s:'特意 + 为 + người + V',m:'Đặc biệt làm gì cho ai'},
     {s:'是 + người + 特意 + V + 的',m:'Là do ai cất công làm (nhấn mạnh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để hoàn thành cuộc phỏng vấn này, tôi đã cất công tra cứu tư liệu về người được phỏng vấn.',answer:'为了完成这次采访，我特意查阅了被采访者的资料。',answerPy:'Wèile wánchéng zhè cì cǎifǎng, wǒ tèyì cháyuèle bèi cǎifǎngzhě de zīliào.',
      note:'为了…… đầu câu nêu mục đích + 特意 (đáp án 练一练 của sách).',pair:'为了'},
     {promptLang:'vi',prompt:'Biết hôm nay là sinh nhật tôi, bạn thân đã cất công từ Hải Phòng đến Hà Nội.',answer:'知道今天是我的生日，好朋友特意从海防赶到了河内。',answerPy:'Zhīdào jīntiān shì wǒ de shēngrì, hǎo péngyou tèyì cóng Hǎifáng gǎndàole Hénèi.',
      note:'特意 + 从……赶到…… (ôn HSK 4: 从……到……).',pair:'从……到……'}
   ]},

  {n:39,zh:'警告',py:'jǐnggào',pos:'Động từ / Danh từ',vn:'cảnh cáo, cảnh báo, nhắc nhở',hv:'cảnh cáo',em:'⚠️',lesson:1,
   explain:['Nhắc nhở nghiêm khắc để người ta chú ý, đừng làm điều sai hoặc nguy hiểm: 警 = cảnh giác, 告 = báo. Cấu trúc: 警告 + 人 + 不要 / 别 + V.','Danh từ: hình thức kỷ luật "cảnh cáo" (受到警告处分) hoặc lời cảnh báo (发出警告). Liên quan: 警示牌 (biển cảnh báo), 警惕 (HSK 6 bài 12).'],
   usage:'警告 + 人 + 不要 / 别 + V; 发出 / 受到 + 警告; 警告处分; 口头警告.',
   collo:['警告运动员','发出警告','受到警告','口头警告'],
   ex_zh:'主办方特意做了警示牌，警告运动员不要在球门里训练。',ex_py:'Zhǔbànfāng tèyì zuòle jǐngshìpái, jǐnggào yùndòngyuán búyào zài qiúmén li xùnliàn.',ex_vn:'Ban tổ chức đặc biệt làm biển cảnh báo, nhắc vận động viên không được tập luyện trong khung thành.',
   exList:[
     {zh:'医生警告他，再不戒烟，身体就会出大问题。',py:'Yīshēng jǐnggào tā, zài bú jièyān, shēntǐ jiù huì chū dà wèntí.',vn:'Bác sĩ cảnh báo anh ấy, nếu còn không bỏ thuốc thì sức khoẻ sẽ gặp vấn đề lớn.'},
     {zh:'气象台发出了台风警告，提醒市民不要出门。',py:'Qìxiàngtái fāchūle táifēng jǐnggào, tíxǐng shìmín búyào chūmén.',vn:'Đài khí tượng đã phát cảnh báo bão, nhắc người dân không ra khỏi nhà.'},
     {zh:'他上课多次玩手机，受到了学校的警告处分。',py:'Tā shàngkè duō cì wán shǒujī, shòudàole xuéxiào de jǐnggào chǔfèn.',vn:'Cậu ấy nhiều lần nghịch điện thoại trong giờ học, đã bị nhà trường kỷ luật cảnh cáo.'}
   ],
   colloFull:[
     {zh:'警告运动员',py:'jǐnggào yùndòngyuán',vn:'cảnh báo vận động viên'},
     {zh:'发出警告',py:'fāchū jǐnggào',vn:'phát cảnh báo'},
     {zh:'受到警告',py:'shòudào jǐnggào',vn:'bị cảnh cáo'},
     {zh:'口头警告',py:'kǒutóu jǐnggào',vn:'cảnh cáo miệng'},
     {zh:'警告处分',py:'jǐnggào chǔfèn',vn:'kỷ luật cảnh cáo'}
   ],
   patterns:[
     {s:'警告 + người + 不要 / 别 + V',m:'Cảnh báo ai đừng làm gì'},
     {s:'发出 / 受到 + 警告',m:'Phát ra / bị cảnh cáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo đã cảnh cáo cậu ấy nhiều lần rồi, vậy mà cậu ấy vẫn đi học muộn.',answer:'老师已经警告过他好几次了，他却还是迟到。',answerPy:'Lǎoshī yǐjīng jǐnggàoguo tā hǎo jǐ cì le, tā què háishi chídào.',
      note:'V + 过 + tân ngữ + số lần; 却 chuyển ý.',pair:'却'},
     {promptLang:'vi',prompt:'Nếu không nghe lời cảnh báo mà cứ bơi ở chỗ nước sâu, rất có thể gặp nguy hiểm.',answer:'如果不听警告，非要在深水区游泳，很可能会遇到危险。',answerPy:'Rúguǒ bù tīng jǐnggào, fēi yào zài shēnshuǐqū yóuyǒng, hěn kěnéng huì yùdào wēixiǎn.',
      note:'非要 + V = cứ nhất định (ôn HSK 5).',pair:'非要'}
   ]},

  {n:40,zh:'疏忽',py:'shūhu',pos:'Động từ / Danh từ',vn:'lơ là, sơ ý, sơ suất; sự sơ suất',hv:'sơ hốt',em:'😵',lesson:1,
   explain:['Không chú ý, không cẩn thận nên bỏ sót, gây ra sai sót: 疏 = thưa, lơ là; 忽 = bỏ qua (như 忽略, HSK 6 bài 1). Thường đi với 一时 (nhất thời): 一时疏忽.','Làm danh từ: 工作人员的疏忽 (sự sơ suất của nhân viên), 由于疏忽. Khác 大意 (tính từ, chỉ tính cách / trạng thái sơ ý): 疏忽 thiên về hành động bỏ sót cụ thể, có thể mang tân ngữ (疏忽了安全问题).'],
   usage:'一时疏忽; 疏忽 + 了 + 细节 / 问题; 由于 + (人的) + 疏忽; ……的疏忽 + 造成……',
   collo:['一时疏忽','工作人员的疏忽','由于疏忽','疏忽大意'],
   ex_zh:'有位运动员一时疏忽正好踩在了警示牌上。',ex_py:'Yǒu wèi yùndòngyuán yìshí shūhu zhènghǎo cǎi zàile jǐngshìpái shang.',ex_vn:'Có một vận động viên nhất thời lơ là, giẫm đúng vào tấm biển cảnh báo.',
   exList:[
     {zh:'虽然不是成心的，但因为工作人员的疏忽而造成一人死亡的后果。',py:'Suīrán bú shì chéngxīn de, dàn yīnwèi gōngzuò rényuán de shūhu ér zàochéng yì rén sǐwáng de hòuguǒ.',vn:'Tuy không cố ý, nhưng vì sự sơ suất của nhân viên mà gây ra hậu quả một người tử vong.'},
     {zh:'由于我的疏忽，把会议的时间写错了，真对不起大家。',py:'Yóuyú wǒ de shūhu, bǎ huìyì de shíjiān xiěcuò le, zhēn duìbuqǐ dàjiā.',vn:'Do sơ suất của tôi mà ghi sai giờ họp, thật có lỗi với mọi người.'},
     {zh:'他只顾着赶进度，疏忽了安全问题。',py:'Tā zhǐ gùzhe gǎn jìndù, shūhule ānquán wèntí.',vn:'Anh ta chỉ lo chạy tiến độ mà lơ là vấn đề an toàn.'}
   ],
   colloFull:[
     {zh:'一时疏忽',py:'yìshí shūhu',vn:'nhất thời lơ là'},
     {zh:'工作人员的疏忽',py:'gōngzuò rényuán de shūhu',vn:'sơ suất của nhân viên'},
     {zh:'由于疏忽',py:'yóuyú shūhu',vn:'do sơ suất'},
     {zh:'疏忽大意',py:'shūhu dàyi',vn:'lơ là sơ ý'},
     {zh:'疏忽了细节',py:'shūhule xìjié',vn:'bỏ sót chi tiết'}
   ],
   patterns:[
     {s:'由于 / 因为 + (人的) 疏忽 + (而) + 造成……',m:'Do sơ suất của ai mà gây ra …'},
     {s:'疏忽了 + N',m:'Lơ là, bỏ sót cái gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ vì nhất thời sơ ý, cậu ấy đã để quên hộ chiếu ở khách sạn.',answer:'只因为一时疏忽，他把护照忘在了酒店里。',answerPy:'Zhǐ yīnwèi yìshí shūhu, tā bǎ hùzhào wàng zàile jiǔdiàn li.',
      note:'Câu 把 + V + 在 + nơi chốn (ôn HSK 4).',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Việc này là do sơ suất của chúng tôi, chứ không phải lỗi của khách hàng.',answer:'这件事是由于我们的疏忽，而不是顾客的错。',answerPy:'Zhè jiàn shì shì yóuyú wǒmen de shūhu, ér bú shì gùkè de cuò.',
      note:'是……而不是…… (ôn HSK 5); 疏忽 làm danh từ.',pair:'是……而不是……'}
   ]},

  {n:41,zh:'重心',py:'zhòngxīn',pos:'Danh từ',vn:'trọng tâm (điểm cân bằng); trọng điểm',hv:'trọng tâm',em:'⚖️',lesson:1,
   explain:['Nghĩa vật lý: điểm mà trọng lực của vật tập trung vào — điểm cân bằng cơ thể: 重心不稳 (mất thăng bằng), 降低重心.','Nghĩa bóng: phần quan trọng nhất, trọng điểm: 工作的重心, 把重心放在…… (dồn trọng tâm vào …). Trùng với tiếng Việt "trọng tâm".'],
   usage:'重心 + 不稳 / 偏移 / 降低; 把重心放在 + ……上; 工作 / 生活 + 的重心.',
   collo:['重心不稳','把重心放在','工作的重心','降低重心'],
   ex_zh:'由于重心不稳，以致扭伤了脚。',ex_py:'Yóuyú zhòngxīn bù wěn, yǐzhì niǔshāngle jiǎo.',ex_vn:'Do mất thăng bằng nên đến nỗi bị trẹo chân.',
   exList:[
     {zh:'他踩在警示牌上，由于重心不稳，扭伤了脚。',py:'Tā cǎi zài jǐngshìpái shang, yóuyú zhòngxīn bù wěn, niǔshāngle jiǎo.',vn:'Anh ta giẫm lên biển cảnh báo, do mất thăng bằng nên bị trẹo chân.'},
     {zh:'高三了，你应该把学习的重心放在复习上。',py:'Gāosān le, nǐ yīnggāi bǎ xuéxí de zhòngxīn fàng zài fùxí shang.',vn:'Lên lớp 12 rồi, em nên dồn trọng tâm học tập vào việc ôn tập.'},
     {zh:'滑雪的时候要降低重心，这样才不容易摔倒。',py:'Huáxuě de shíhou yào jiàngdī zhòngxīn, zhèyàng cái bù róngyì shuāidǎo.',vn:'Khi trượt tuyết phải hạ thấp trọng tâm, như vậy mới khó bị ngã.'}
   ],
   colloFull:[
     {zh:'重心不稳',py:'zhòngxīn bù wěn',vn:'mất thăng bằng'},
     {zh:'把重心放在',py:'bǎ zhòngxīn fàng zài',vn:'dồn trọng tâm vào'},
     {zh:'工作的重心',py:'gōngzuò de zhòngxīn',vn:'trọng tâm công việc'},
     {zh:'降低重心',py:'jiàngdī zhòngxīn',vn:'hạ thấp trọng tâm'},
     {zh:'生活的重心',py:'shēnghuó de zhòngxīn',vn:'trọng tâm cuộc sống'}
   ],
   patterns:[
     {s:'由于重心不稳，……',m:'Do mất thăng bằng, …'},
     {s:'把重心放在 + ……上',m:'Dồn trọng tâm vào …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có con, trọng tâm cuộc sống của chị ấy đã chuyển sang gia đình.',answer:'自从有了孩子，她生活的重心就转到了家庭上。',answerPy:'Zìcóng yǒule háizi, tā shēnghuó de zhòngxīn jiù zhuǎndàole jiātíng shang.',
      note:'自从……（就）…… mốc thời gian (ôn HSK 4).',pair:'自从'},
     {promptLang:'vi',prompt:'Vì đeo cặp sách quá nặng, cậu bé mất thăng bằng suýt nữa thì ngã.',answer:'因为背的书包太重，小男孩重心不稳，差点儿摔倒。',answerPy:'Yīnwèi bēi de shūbāo tài zhòng, xiǎo nánhái zhòngxīn bù wěn, chàdiǎnr shuāidǎo.',
      note:'差点儿 + V = suýt nữa (ôn HSK 4).',pair:'差点儿'}
   ]},

  {n:42,zh:'熨',py:'yùn',pos:'Động từ',vn:'ủi, là (quần áo)',hv:'uất',em:'👔',lesson:1,
   explain:['Dùng bàn là nóng làm phẳng quần áo: 熨衣服, 熨平, 熨一下. Đồ dùng: 熨斗 (bàn là), 熨衣板 (bàn kê để là quần áo — bài khoá và phần 热身).','Hay đi với bổ ngữ kết quả 熨平 / 熨好 / 熨坏. Chú ý chữ 熨 dưới có bộ 火 (lửa) — gợi nghĩa dùng nhiệt.'],
   usage:'熨 + 衣服 / 衬衫 / 裤子; 熨平 / 熨好; 熨斗 / 熨衣板; 把……熨一下.',
   collo:['熨衣服','熨衣板','熨平','熨斗'],
   ex_zh:'还有位同样疏忽的运动员，在折叠熨衣板时肩膀受伤。',ex_py:'Hái yǒu wèi tóngyàng shūhu de yùndòngyuán, zài zhédié yùnyībǎn shí jiānbǎng shòushāng.',ex_vn:'Còn có một vận động viên cũng lơ là như vậy, bị thương ở vai khi gấp bàn kê là quần áo.',
   exList:[
     {zh:'明天要面试，我得把衬衫熨一下。',py:'Míngtiān yào miànshì, wǒ děi bǎ chènshān yùn yíxià.',vn:'Mai phải đi phỏng vấn, tôi phải là lại cái áo sơ mi.'},
     {zh:'妈妈把我的校服熨得平平整整的。',py:'Māma bǎ wǒ de xiàofú yùn de píngpíngzhěngzhěng de.',vn:'Mẹ là bộ đồng phục của tôi phẳng phiu.'},
     {zh:'熨丝绸衣服的时候温度不能太高，否则会熨坏。',py:'Yùn sīchóu yīfu de shíhou wēndù bù néng tài gāo, fǒuzé huì yùnhuài.',vn:'Khi là quần áo lụa nhiệt độ không được quá cao, nếu không sẽ làm hỏng.'}
   ],
   colloFull:[
     {zh:'熨衣服',py:'yùn yīfu',vn:'là quần áo'},
     {zh:'熨衣板',py:'yùnyībǎn',vn:'bàn kê để là quần áo'},
     {zh:'熨平',py:'yùnpíng',vn:'là phẳng'},
     {zh:'熨斗',py:'yùndǒu',vn:'bàn là'},
     {zh:'熨坏',py:'yùnhuài',vn:'là hỏng'}
   ],
   patterns:[
     {s:'把 + 衣服 + 熨一下 / 熨平',m:'Là (ủi) quần áo một chút / cho phẳng'},
     {s:'熨 + 得 + 平平整整的',m:'Là phẳng phiu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi ra ngoài, bố luôn là phẳng áo sơ mi rồi mới mặc.',answer:'出门以前，爸爸总是先把衬衫熨平，然后再穿。',answerPy:'Chūmén yǐqián, bàba zǒngshì xiān bǎ chènshān yùnpíng, ránhòu zài chuān.',
      note:'先……然后再…… trình tự (ôn HSK 3); câu 把 + bổ ngữ kết quả.',pair:'先……然后……'},
     {promptLang:'vi',prompt:'Dùng bàn là xong nhất định phải rút điện, kẻo xảy ra hoả hoạn.',answer:'用完熨斗一定要拔掉插头，以免发生火灾。',answerPy:'Yòngwán yùndǒu yídìng yào bádiào chātóu, yǐmiǎn fāshēng huǒzāi.',
      note:'以免 + điều muốn tránh (HSK 6 bài 21).',pair:'以免'}
   ]},

  {n:43,zh:'磕',py:'kē',pos:'Động từ',vn:'va, đụng, vấp (vào vật cứng)',hv:'khái',em:'🤕',lesson:1,
   explain:['Va, đập vào vật cứng (thường là vô tình, gây đau hoặc hỏng): 磕破 (va rách), 磕掉 (va gãy, va rụng), 磕到头. Bộ 石 (đá) gợi ý va vào vật cứng.','Hay đi với bổ ngữ kết quả: 磕破了嘴唇, 磕掉了门牙, 磕了一个包 (va sưng một cục). Khác 碰 (chạm, đụng nói chung): 磕 nhấn va mạnh vào cạnh cứng.'],
   usage:'磕 + 破 / 掉 / 伤 / 坏; 磕到 + 头 / 腿; 在……上磕了一下.',
   collo:['磕破了嘴唇','磕掉了门牙','磕到头','磕了一下'],
   ex_zh:'某国国脚有一次不仅磕破了嘴唇，还磕掉了门牙。',ex_py:'Mǒu guó guójiǎo yǒu yí cì bùjǐn kēpòle zuǐchún, hái kēdiàole ményá.',ex_vn:'Một tuyển thủ quốc gia nọ có lần không chỉ va rách môi mà còn va gãy cả răng cửa.',
   exList:[
     {zh:'他走路只顾着看手机，头在门框上磕了一下。',py:'Tā zǒulù zhǐ gùzhe kàn shǒujī, tóu zài ménkuàng shang kēle yíxià.',vn:'Anh ta đi đường chỉ mải nhìn điện thoại, đầu va vào khung cửa một cái.'},
     {zh:'弟弟摔了一跤，膝盖磕破了，流了不少血。',py:'Dìdi shuāile yì jiāo, xīgài kēpò le, liúle bù shǎo xiě.',vn:'Em trai ngã một cú, đầu gối va trầy da, chảy khá nhiều máu.'},
     {zh:'搬家的时候，新买的桌子被磕掉了一块漆。',py:'Bānjiā de shíhou, xīn mǎi de zhuōzi bèi kēdiàole yí kuài qī.',vn:'Lúc chuyển nhà, cái bàn mới mua bị va bong mất một mảng sơn.'}
   ],
   colloFull:[
     {zh:'磕破了嘴唇',py:'kēpòle zuǐchún',vn:'va rách môi'},
     {zh:'磕掉了门牙',py:'kēdiàole ményá',vn:'va gãy răng cửa'},
     {zh:'磕到头',py:'kēdào tóu',vn:'va đầu'},
     {zh:'磕了一下',py:'kēle yíxià',vn:'va một cái'},
     {zh:'磕破膝盖',py:'kēpò xīgài',vn:'va trầy đầu gối'}
   ],
   patterns:[
     {s:'磕 + 破 / 掉 / 伤 + (bộ phận)',m:'Va rách / gãy / bị thương …'},
     {s:'(bộ phận) + 在……上磕了一下',m:'… va vào … một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời tối quá, tôi không nhìn rõ nên va đầu gối vào cạnh bàn.',answer:'天太黑了，我没看清楚，膝盖磕到了桌子角上。',answerPy:'Tiān tài hēi le, wǒ méi kàn qīngchu, xīgài kēdàole zhuōzi jiǎo shang.',
      note:'Bổ ngữ kết quả 看清楚, 磕到 (ôn HSK 4); 膝盖 ôn HSK 6 bài 20.',pair:'V + 到'},
     {promptLang:'vi',prompt:'Chiếc điện thoại này không những bị va xước màn hình mà còn không bật lên được nữa.',answer:'这部手机不仅屏幕被磕坏了，而且开不了机了。',answerPy:'Zhè bù shǒujī bùjǐn píngmù bèi kēhuài le, érqiě kāi bu liǎo jī le.',
      note:'不仅……而且…… (ôn HSK 4); 屏幕 ôn HSK 6 bài 21.',pair:'不仅……而且……'}
   ]},

  {n:44,zh:'嘴唇',py:'zuǐchún',pos:'Danh từ',vn:'môi',hv:'chuỷ thần',em:'👄',lesson:1,
   explain:['Phần viền quanh miệng: 上嘴唇 (môi trên), 下嘴唇 (môi dưới). 嘴 = miệng, 唇 = môi (văn viết: 唇, như 唇膏 son môi).','Cụm hay gặp: 嘴唇发干 / 发紫 (môi khô / tím tái), 咬着嘴唇 (cắn môi), 磕破嘴唇.'],
   usage:'嘴唇 + 发干 / 发紫 / 裂了; 咬着嘴唇; 磕破 + 嘴唇; 上 / 下 + 嘴唇.',
   collo:['磕破嘴唇','嘴唇发干','咬着嘴唇','嘴唇发紫'],
   ex_zh:'某国国脚有一次不仅磕破了嘴唇，还磕掉了门牙。',ex_py:'Mǒu guó guójiǎo yǒu yí cì bùjǐn kēpòle zuǐchún, hái kēdiàole ményá.',ex_vn:'Một tuyển thủ quốc gia nọ có lần không chỉ va rách môi mà còn gãy răng cửa.',
   exList:[
     {zh:'北方的冬天太干燥了，我的嘴唇都裂了。',py:'Běifāng de dōngtiān tài gānzào le, wǒ de zuǐchún dōu liè le.',vn:'Mùa đông miền Bắc khô quá, môi tôi nứt nẻ hết cả.'},
     {zh:'她咬着嘴唇，半天没说一句话。',py:'Tā yǎozhe zuǐchún, bàntiān méi shuō yí jù huà.',vn:'Cô ấy cắn môi, hồi lâu chẳng nói câu nào.'},
     {zh:'他在雪地里站了一个小时，冻得嘴唇都发紫了。',py:'Tā zài xuědì li zhànle yí ge xiǎoshí, dòng de zuǐchún dōu fāzǐ le.',vn:'Anh ấy đứng trong tuyết một tiếng, lạnh đến mức môi tím tái.'}
   ],
   colloFull:[
     {zh:'磕破嘴唇',py:'kēpò zuǐchún',vn:'va rách môi'},
     {zh:'嘴唇发干',py:'zuǐchún fā gān',vn:'môi khô'},
     {zh:'咬着嘴唇',py:'yǎozhe zuǐchún',vn:'cắn môi'},
     {zh:'嘴唇发紫',py:'zuǐchún fāzǐ',vn:'môi tím tái'},
     {zh:'下嘴唇',py:'xià zuǐchún',vn:'môi dưới'}
   ],
   patterns:[
     {s:'嘴唇 + 发干 / 发紫',m:'Môi khô / tím tái'},
     {s:'V + 得 + 嘴唇都……了',m:'… đến mức môi cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời tiết hanh khô thì nên uống nhiều nước, kẻo môi bị nứt.',answer:'天气干燥的时候应该多喝水，免得嘴唇裂开。',answerPy:'Tiānqì gānzào de shíhou yīnggāi duō hē shuǐ, miǎnde zuǐchún lièkāi.',
      note:'免得 = kẻo, để khỏi (khẩu ngữ, HSK 6 bài 14).',pair:'免得'},
     {promptLang:'vi',prompt:'Cậu bé căng thẳng đến mức cắn chặt môi, tay cũng run lên.',answer:'小男孩紧张得咬紧了嘴唇，手也发抖了。',answerPy:'Xiǎo nánhái jǐnzhāng de yǎojǐnle zuǐchún, shǒu yě fādǒu le.',
      note:'Adj + 得 + mệnh đề chỉ mức độ (ôn HSK 4).',pair:'……得……'}
   ]},

  {n:45,zh:'拽',py:'zhuài',pos:'Động từ',vn:'kéo, lôi, giật (mạnh)',hv:'duệ',em:'🫳',lesson:1,
   explain:['Dùng sức kéo mạnh, lôi, giật: 拽出来 (lôi ra), 拽住 (túm chặt), 拽着 + người + 走 (lôi ai đi). Khẩu ngữ, mạnh hơn 拉.','Hay đi với bổ ngữ xu hướng / kết quả: 拽出 / 拽开 / 拽住 / 拽断. Bài khoá: 从汽车里拽出高尔夫球具 = lôi bộ gậy golf ra khỏi xe.'],
   usage:'拽 + 出 / 住 / 开 / 断; 把……从……里拽出来; 拽着 + người / 衣服.',
   collo:['拽出球具','拽住绳子','拽着他的手','拽不动'],
   ex_zh:'当时他仅仅是想从汽车里拽出高尔夫球具。',ex_py:'Dāngshí tā jǐnjǐn shì xiǎng cóng qìchē li zhuàichū gāo\'ěrfū qiújù.',ex_vn:'Lúc đó anh ta chỉ định lôi bộ dụng cụ đánh golf ra khỏi ô tô.',
   exList:[
     {zh:'他使劲一拽，把卡在门缝里的书包拽了出来。',py:'Tā shǐjìn yí zhuài, bǎ qiǎ zài ménfèng li de shūbāo zhuàile chūlái.',vn:'Cậu ấy dùng sức giật mạnh, lôi được cái cặp bị kẹt trong khe cửa ra.'},
     {zh:'孩子拽着妈妈的衣服，非要买那个玩具。',py:'Háizi zhuàizhe māma de yīfu, fēi yào mǎi nàge wánjù.',vn:'Đứa bé níu áo mẹ, nằng nặc đòi mua món đồ chơi đó.'},
     {zh:'箱子太重了，我一个人拽不动。',py:'Xiāngzi tài zhòng le, wǒ yí ge rén zhuài bu dòng.',vn:'Cái vali nặng quá, một mình tôi kéo không nổi.'}
   ],
   colloFull:[
     {zh:'拽出球具',py:'zhuàichū qiújù',vn:'lôi dụng cụ thể thao ra'},
     {zh:'拽住绳子',py:'zhuàizhù shéngzi',vn:'túm chặt sợi dây'},
     {zh:'拽着他的手',py:'zhuàizhe tā de shǒu',vn:'kéo tay anh ấy'},
     {zh:'拽不动',py:'zhuài bu dòng',vn:'kéo không nổi'},
     {zh:'拽了出来',py:'zhuàile chūlái',vn:'lôi ra được'}
   ],
   patterns:[
     {s:'把 + N + 从……里拽出来',m:'Lôi cái gì từ … ra'},
     {s:'拽着 + người / 衣服 + V',m:'Níu, kéo ai / áo mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy xe sắp lao tới, anh ấy lập tức kéo em gái lại.',answer:'看见车快要冲过来了，他马上把妹妹拽了回来。',answerPy:'Kànjiàn chē kuàiyào chōng guòlái le, tā mǎshàng bǎ mèimei zhuàile huílái.',
      note:'快要……了 (ôn HSK 3); 把 + người + 拽回来 (bổ ngữ xu hướng kép).',pair:'快要……了'},
     {promptLang:'vi',prompt:'Sợi dây này buộc chặt quá, mấy người chúng tôi kéo mãi cũng không đứt.',answer:'这根绳子系得太紧了，我们几个人怎么拽也拽不断。',answerPy:'Zhè gēn shéngzi jì de tài jǐn le, wǒmen jǐ ge rén zěnme zhuài yě zhuài bu duàn.',
      note:'怎么 + V + 也 + V不…… = làm thế nào cũng không … (ôn HSK 5).',pair:'怎么……也……'}
   ]},

  {n:46,zh:'乐极生悲',py:'lèjí-shēngbēi',pos:'Thành ngữ',vn:'vui quá hoá buồn',hv:'lạc cực sinh bi',em:'🎭',lesson:1,
   explain:['Vui mừng đến cực điểm thì lại xảy ra chuyện buồn: 乐 = vui, 极 = cực điểm, 生 = sinh ra, 悲 = buồn. Dùng để kể những chuyện đang vui thì gặp rủi ro, hoặc khuyên đừng vui quá mà mất cảnh giác.','Làm vị ngữ, tân ngữ: 真是乐极生悲; 汉语有个词叫乐极生悲. Gần tiếng Việt "vui quá hoá dại / vui quá hoá buồn".'],
   usage:'真是 / 可谓 + 乐极生悲; ……，结果乐极生悲; 小心乐极生悲.',
   collo:['真是乐极生悲','结果乐极生悲','小心乐极生悲','乐极生悲的事'],
   ex_zh:'汉语有个词叫乐极生悲，说的就应该是下面这位球员。',ex_py:'Hànyǔ yǒu ge cí jiào lèjí-shēngbēi, shuō de jiù yīnggāi shì xiàmiàn zhè wèi qiúyuán.',ex_vn:'Tiếng Hán có một từ gọi là "vui quá hoá buồn", nói chính là cầu thủ dưới đây.',
   exList:[
     {zh:'他考了满分，高兴得在走廊里跑，结果乐极生悲，把腿摔伤了。',py:'Tā kǎole mǎnfēn, gāoxìng de zài zǒuláng li pǎo, jiéguǒ lèjí-shēngbēi, bǎ tuǐ shuāishāng le.',vn:'Cậu ấy được điểm tuyệt đối, vui quá chạy nhảy ngoài hành lang, kết quả vui quá hoá buồn, ngã bị thương chân.'},
     {zh:'过节的时候别喝太多酒，小心乐极生悲。',py:'Guò jié de shíhou bié hē tài duō jiǔ, xiǎoxīn lèjí-shēngbēi.',vn:'Ngày lễ tết đừng uống quá nhiều rượu, cẩn thận vui quá hoá buồn.'},
     {zh:'刚中了大奖就丢了钱包，真是乐极生悲。',py:'Gāng zhòngle dàjiǎng jiù diūle qiánbāo, zhēn shì lèjí-shēngbēi.',vn:'Vừa trúng giải lớn đã làm mất ví, đúng là vui quá hoá buồn.'}
   ],
   colloFull:[
     {zh:'真是乐极生悲',py:'zhēn shì lèjí-shēngbēi',vn:'đúng là vui quá hoá buồn'},
     {zh:'结果乐极生悲',py:'jiéguǒ lèjí-shēngbēi',vn:'kết quả vui quá hoá buồn'},
     {zh:'小心乐极生悲',py:'xiǎoxīn lèjí-shēngbēi',vn:'cẩn thận vui quá hoá buồn'},
     {zh:'乐极生悲的事',py:'lèjí-shēngbēi de shì',vn:'chuyện vui quá hoá buồn'},
     {zh:'乐极生悲造成的伤害',py:'lèjí-shēngbēi zàochéng de shānghài',vn:'chấn thương do vui quá hoá buồn'}
   ],
   patterns:[
     {s:'……，结果乐极生悲，……',m:'…, kết quả vui quá hoá buồn, …'},
     {s:'小心乐极生悲',m:'Cẩn thận kẻo vui quá hoá buồn (lời khuyên)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cả đội vui mừng tung huấn luyện viên lên không, ai ngờ vui quá hoá buồn, làm ông ấy ngã.',answer:'全队高兴地把教练抛向空中，谁知乐极生悲，把他摔伤了。',answerPy:'Quán duì gāoxìng de bǎ jiàoliàn pāoxiàng kōngzhōng, shéi zhī lèjí-shēngbēi, bǎ tā shuāishāng le.',
      note:'谁知 = ai ngờ (chuyển bất ngờ, ôn HSK 5).',pair:'谁知'},
     {promptLang:'vi',prompt:'Dù vui đến mấy cũng đừng quên an toàn, kẻo vui quá hoá buồn.',answer:'再高兴也别忘了安全，免得乐极生悲。',answerPy:'Zài gāoxìng yě bié wàngle ānquán, miǎnde lèjí-shēngbēi.',
      note:'再 + Adj + 也…… = dù … đến mấy cũng (ôn HSK 5); 免得 (HSK 6 bài 14).',pair:'再……也……'}
   ]},

  {n:47,zh:'恼火',py:'nǎohuǒ',pos:'Tính từ',vn:'nổi nóng, bực tức, phát cáu',hv:'não hoả',em:'😤',lesson:1,
   explain:['Tức giận, bực bội (mức độ khá mạnh): 恼 = bực, 火 = lửa (như 发火). Hay dùng: 让 / 使 + 人 + 很恼火; 更让他恼火的是…….','Khẩu ngữ lẫn văn viết đều dùng. Gần 生气 (thông dụng hơn), 愤怒 (phẫn nộ — rất mạnh, HSK 6 bài 4).'],
   usage:'让 / 令 + 人 + (很) 恼火; 更让……恼火的是……; 对……感到恼火.',
   collo:['让人恼火','更让他恼火的是','感到恼火','十分恼火'],
   ex_zh:'更让他恼火的是，不了解情况的主裁判还给了他一张黄牌。',ex_py:'Gèng ràng tā nǎohuǒ de shì, bù liǎojiě qíngkuàng de zhǔ cáipàn hái gěile tā yì zhāng huángpái.',ex_vn:'Điều khiến anh ta bực hơn nữa là trọng tài chính không hiểu tình hình còn rút cho anh ta một thẻ vàng.',
   exList:[
     {zh:'快递又送错了地址，真让人恼火。',py:'Kuàidì yòu sòngcuòle dìzhǐ, zhēn ràng rén nǎohuǒ.',vn:'Đơn chuyển phát nhanh lại giao nhầm địa chỉ, thật là bực mình.'},
     {zh:'他对同事总是迟到的行为十分恼火。',py:'Tā duì tóngshì zǒngshì chídào de xíngwéi shífēn nǎohuǒ.',vn:'Anh ấy rất bực với việc đồng nghiệp lúc nào cũng đến muộn.'},
     {zh:'电脑突然死机，写了半天的作文全没了，我恼火极了。',py:'Diànnǎo tūrán sǐjī, xiěle bàntiān de zuòwén quán méi le, wǒ nǎohuǒ jí le.',vn:'Máy tính đột nhiên treo, bài văn viết cả buổi mất sạch, tôi bực muốn điên.'}
   ],
   colloFull:[
     {zh:'让人恼火',py:'ràng rén nǎohuǒ',vn:'khiến người ta bực mình'},
     {zh:'更让他恼火的是',py:'gèng ràng tā nǎohuǒ de shì',vn:'điều khiến anh ta bực hơn là'},
     {zh:'感到恼火',py:'gǎndào nǎohuǒ',vn:'cảm thấy bực tức'},
     {zh:'十分恼火',py:'shífēn nǎohuǒ',vn:'vô cùng bực'},
     {zh:'恼火极了',py:'nǎohuǒ jí le',vn:'bực kinh khủng'}
   ],
   patterns:[
     {s:'更让 + người + 恼火的是……',m:'Điều khiến ai bực hơn nữa là …'},
     {s:'对……（十分）恼火',m:'(Rất) bực với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tàu bị chậm hai tiếng, điều khiến mọi người bực hơn là không ai giải thích nguyên nhân.',answer:'火车晚点了两个小时，更让大家恼火的是，没有人解释原因。',answerPy:'Huǒchē wǎndiǎnle liǎng ge xiǎoshí, gèng ràng dàjiā nǎohuǒ de shì, méiyǒu rén jiěshì yuányīn.',
      note:'更让……的是…… — cấu trúc tăng tiến trong bài khoá.',pair:'更让……的是'},
     {promptLang:'vi',prompt:'Dù cậu ta có làm tôi bực đến đâu, tôi cũng cố gắng giữ bình tĩnh.',answer:'不管他让我多恼火，我都尽量保持冷静。',answerPy:'Bùguǎn tā ràng wǒ duō nǎohuǒ, wǒ dōu jǐnliàng bǎochí lěngjìng.',
      note:'不管 + 多 + Adj, 都…… (ôn HSK 4–5).',pair:'不管……都……'}
   ]},

  {n:48,zh:'雪上加霜',py:'xuěshàng-jiāshuāng',pos:'Thành ngữ',vn:'hoạ vô đơn chí, đã khổ lại càng khổ thêm',hv:'tuyết thượng gia sương',em:'🌨️',lesson:1,
   explain:['Nghĩa đen: trên tuyết lại phủ thêm sương giá. Nghĩa bóng: đang gặp tai hoạ lại gặp thêm tai hoạ khác, tình hình càng tồi tệ hơn.','Làm vị ngữ, thường ở cuối câu: 真可谓雪上加霜, 这无疑是雪上加霜, 对……来说是雪上加霜. Tiếng Việt: "hoạ vô đơn chí", "đã nghèo còn mắc cái eo".'],
   usage:'真可谓 / 无疑是 + 雪上加霜; 对……来说 + 是雪上加霜; ……，更是雪上加霜.',
   collo:['真可谓雪上加霜','无疑是雪上加霜','更是雪上加霜','对他来说是雪上加霜'],
   ex_zh:'不了解情况的主裁判还给了他一张黄牌，真可谓雪上加霜！',ex_py:'Bù liǎojiě qíngkuàng de zhǔ cáipàn hái gěile tā yì zhāng huángpái, zhēn kěwèi xuěshàng-jiāshuāng!',ex_vn:'Trọng tài chính không hiểu tình hình còn rút cho anh ta một thẻ vàng, đúng là hoạ vô đơn chí!',
   exList:[
     {zh:'公司本来就亏损严重，又遇上了金融危机，更是雪上加霜。',py:'Gōngsī běnlái jiù kuīsǔn yánzhòng, yòu yùshangle jīnróng wēijī, gèng shì xuěshàng-jiāshuāng.',vn:'Công ty vốn đã thua lỗ nặng, lại gặp khủng hoảng tài chính, càng thêm hoạ vô đơn chí.'},
     {zh:'他刚丢了工作，家里又有人生病，这对他来说无疑是雪上加霜。',py:'Tā gāng diūle gōngzuò, jiā li yòu yǒu rén shēngbìng, zhè duì tā lái shuō wúyí shì xuěshàng-jiāshuāng.',vn:'Anh ấy vừa mất việc, trong nhà lại có người ốm, điều này với anh ấy chắc chắn là đã khổ lại càng khổ.'},
     {zh:'腿已经受伤了，又淋了一场雨，真是雪上加霜。',py:'Tuǐ yǐjīng shòushāng le, yòu línle yì chǎng yǔ, zhēn shì xuěshàng-jiāshuāng.',vn:'Chân đã bị thương, lại còn dính một trận mưa, đúng là hoạ vô đơn chí.'}
   ],
   colloFull:[
     {zh:'真可谓雪上加霜',py:'zhēn kěwèi xuěshàng-jiāshuāng',vn:'đúng là hoạ vô đơn chí'},
     {zh:'无疑是雪上加霜',py:'wúyí shì xuěshàng-jiāshuāng',vn:'chắc chắn là càng thêm khốn đốn'},
     {zh:'更是雪上加霜',py:'gèng shì xuěshàng-jiāshuāng',vn:'càng thêm tồi tệ'},
     {zh:'对他来说是雪上加霜',py:'duì tā lái shuō shì xuěshàng-jiāshuāng',vn:'với anh ấy là hoạ vô đơn chí'},
     {zh:'雪上加霜的是',py:'xuěshàng-jiāshuāng de shì',vn:'tệ hơn nữa là'}
   ],
   patterns:[
     {s:'A 已经……，又……，真可谓雪上加霜',m:'Đã … lại …, đúng là hoạ vô đơn chí'},
     {s:'对……来说 + 无疑是雪上加霜',m:'Với … chắc chắn là càng thêm khốn đốn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đường đã tắc rồi, xe lại hết xăng, đúng là hoạ vô đơn chí.',answer:'路上已经堵车了，车又没油了，真是雪上加霜。',answerPy:'Lù shang yǐjīng dǔchē le, chē yòu méi yóu le, zhēn shì xuěshàng-jiāshuāng.',
      note:'已经……，又…… nối hai việc xấu (ôn HSK 4).',pair:'已经……又……'},
     {promptLang:'vi',prompt:'Nếu lúc này lại tăng học phí, thì đối với những gia đình khó khăn chắc chắn là càng thêm khốn đốn.',answer:'如果这时候再涨学费，对困难家庭来说无疑是雪上加霜。',answerPy:'Rúguǒ zhè shíhou zài zhǎng xuéfèi, duì kùnnan jiātíng lái shuō wúyí shì xuěshàng-jiāshuāng.',
      note:'对……来说 (ôn HSK 4); 无疑 = chắc chắn, không nghi ngờ gì.',pair:'对……来说'}
   ]},

  {n:49,zh:'荒唐',py:'huāngtáng',pos:'Tính từ',vn:'hoang đường, vô lý, lố bịch',hv:'hoang đường',em:'🤪',lesson:1,
   explain:['(Lời nói, suy nghĩ, việc làm) vô lý đến mức khó tin, trái lẽ thường, buồn cười: 荒唐的想法 / 行为 / 事. Mức độ gần 荒谬 (bài khoá: 荒谬得不可思议).','Bài khoá dùng dạng so sánh cao nhất: 最荒唐的受伤当属某国国脚 = vụ chấn thương lố bịch nhất phải kể đến …. Trùng với tiếng Việt "hoang đường".'],
   usage:'荒唐的 + 想法 / 行为 / 事 / 理由; 太 / 真 + 荒唐了; 最荒唐的是…….',
   collo:['荒唐的想法','荒唐的行为','太荒唐了','最荒唐的是'],
   ex_zh:'最荒唐的受伤当属某国国脚。',ex_py:'Zuì huāngtáng de shòushāng dāng shǔ mǒu guó guójiǎo.',ex_vn:'Vụ chấn thương lố bịch nhất phải kể đến một tuyển thủ quốc gia nọ.',
   exList:[
     {zh:'为了不上学，他竟然编了一个荒唐的理由。',py:'Wèile bú shàngxué, tā jìngrán biānle yí ge huāngtáng de lǐyóu.',vn:'Để khỏi đi học, cậu ta lại bịa ra một lý do hoang đường.'},
     {zh:'花几万块钱买一个手机号码，这也太荒唐了！',py:'Huā jǐ wàn kuài qián mǎi yí ge shǒujī hàomǎ, zhè yě tài huāngtáng le!',vn:'Bỏ ra mấy chục nghìn tệ mua một số điện thoại, thế thì cũng lố bịch quá!'},
     {zh:'现在想起年轻时做的那些荒唐事，他自己都觉得好笑。',py:'Xiànzài xiǎngqǐ niánqīng shí zuò de nàxiē huāngtáng shì, tā zìjǐ dōu juéde hǎoxiào.',vn:'Bây giờ nhớ lại những chuyện dại dột hồi trẻ, chính ông ấy cũng thấy buồn cười.'}
   ],
   colloFull:[
     {zh:'荒唐的想法',py:'huāngtáng de xiǎngfǎ',vn:'suy nghĩ hoang đường'},
     {zh:'荒唐的行为',py:'huāngtáng de xíngwéi',vn:'hành vi lố bịch'},
     {zh:'太荒唐了',py:'tài huāngtáng le',vn:'vô lý quá'},
     {zh:'最荒唐的是',py:'zuì huāngtáng de shì',vn:'lố bịch nhất là'},
     {zh:'荒唐的理由',py:'huāngtáng de lǐyóu',vn:'lý do vô lý'}
   ],
   patterns:[
     {s:'最荒唐的 + N + 当属……',m:'… lố bịch nhất phải kể đến …'},
     {s:'这也太荒唐了！',m:'Thế thì vô lý quá!'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ý nghĩ này nghe thì hoang đường, nhưng biết đâu lại thực hiện được.',answer:'这个想法听起来很荒唐，但说不定能实现。',answerPy:'Zhège xiǎngfǎ tīng qǐlái hěn huāngtáng, dàn shuōbudìng néng shíxiàn.',
      note:'听起来 = nghe có vẻ (ôn HSK 4); 说不定 = biết đâu.',pair:'说不定'},
     {promptLang:'vi',prompt:'Chuyện lố bịch nhất là, anh ta lại tự mình dùng khoan điện để "phẫu thuật".',answer:'最荒唐的是，他竟然自己用电钻做"手术"。',answerPy:'Zuì huāngtáng de shì, tā jìngrán zìjǐ yòng diànzuàn zuò “shǒushù”.',
      note:'最……的是…… nhấn mạnh; 竟然 = vậy mà (ôn HSK 5).',pair:'竟然'}
   ]},

  {n:50,zh:'指甲',py:'zhǐjia',pos:'Danh từ',vn:'móng (tay, chân)',hv:'chỉ giáp',em:'💅',lesson:1,
   explain:['Lớp sừng cứng ở đầu ngón tay, ngón chân: 手指甲 (móng tay), 脚指甲 (móng chân). Đọc zhǐjia (thanh nhẹ ở 甲) trong khẩu ngữ.','Động từ đi kèm: 剪指甲 (cắt móng), 修指甲 (sửa móng), 涂指甲油 (sơn móng). Bài khoá: 他的脚指甲旁边长了个血泡.'],
   usage:'剪 / 修 + 指甲; 手指甲 / 脚指甲; 指甲 + 长 / 断了; 指甲油.',
   collo:['剪指甲','脚指甲','修指甲','指甲油'],
   ex_zh:'他的脚指甲旁边长了个血泡，他决定自己处置。',ex_py:'Tā de jiǎozhǐjia pángbiān zhǎngle ge xuèpào, tā juédìng zìjǐ chǔzhì.',ex_vn:'Bên cạnh móng chân anh ta mọc một cái bọng máu, anh ta quyết định tự xử lý.',
   exList:[
     {zh:'指甲太长了容易藏细菌，要经常剪。',py:'Zhǐjia tài cháng le róngyì cáng xìjūn, yào jīngcháng jiǎn.',vn:'Móng tay dài quá dễ chứa vi khuẩn, phải cắt thường xuyên.'},
     {zh:'她涂了红色的指甲油，显得手特别白。',py:'Tā túle hóngsè de zhǐjiayóu, xiǎnde shǒu tèbié bái.',vn:'Cô ấy sơn móng màu đỏ, trông tay trắng hẳn ra.'},
     {zh:'医院规定，护士上班时不能留长指甲。',py:'Yīyuàn guīdìng, hùshi shàngbān shí bù néng liú cháng zhǐjia.',vn:'Bệnh viện quy định y tá khi làm việc không được để móng tay dài.'}
   ],
   colloFull:[
     {zh:'剪指甲',py:'jiǎn zhǐjia',vn:'cắt móng tay'},
     {zh:'脚指甲',py:'jiǎozhǐjia',vn:'móng chân'},
     {zh:'修指甲',py:'xiū zhǐjia',vn:'sửa móng'},
     {zh:'指甲油',py:'zhǐjiayóu',vn:'sơn móng tay'},
     {zh:'留长指甲',py:'liú cháng zhǐjia',vn:'để móng dài'}
   ],
   patterns:[
     {s:'剪 / 修 + 指甲',m:'Cắt / sửa móng'},
     {s:'脚指甲旁边 + 长了……',m:'Bên cạnh móng chân mọc …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi ăn nhất định phải rửa tay, nhất là những đứa trẻ hay cắn móng tay.',answer:'吃饭前一定要洗手，尤其是爱咬指甲的孩子。',answerPy:'Chī fàn qián yídìng yào xǐ shǒu, yóuqí shì ài yǎo zhǐjia de háizi.',
      note:'尤其是 = nhất là (ôn HSK 4).',pair:'尤其是'},
     {promptLang:'vi',prompt:'Cắt móng chân đừng cắt quá sát, nếu không rất dễ bị nhiễm trùng.',answer:'剪脚指甲别剪得太短，否则很容易感染。',answerPy:'Jiǎn jiǎozhǐjia bié jiǎn de tài duǎn, fǒuzé hěn róngyì gǎnrǎn.',
      note:'否则 = nếu không thì (ôn HSK 5); 感染 ôn HSK 6 bài 2.',pair:'否则'}
   ]},

  {n:51,zh:'处置',py:'chǔzhì',pos:'Động từ',vn:'xử lý, giải quyết; xử trí',hv:'xử trí',em:'🩹',lesson:1,
   explain:['Sắp xếp, xử lý một việc / một vấn đề (thường cần xử lý gấp, có biện pháp cụ thể): 处置伤口, 处置不当, 妥善处置. Văn viết hơn 处理.','Nghĩa khác: trừng phạt, xử lý kỷ luật (依法处置). Bài khoá: 他决定自己处置 = tự mình xử lý cái bọng máu.'],
   usage:'处置 + 伤口 / 问题 / 事故 / 突发事件; 妥善 / 及时 + 处置; 处置 + 不当 / 得当.',
   collo:['自己处置','妥善处置','处置不当','及时处置'],
   ex_zh:'他的脚指甲旁边长了个血泡，他决定自己处置。',ex_py:'Tā de jiǎozhǐjia pángbiān zhǎngle ge xuèpào, tā juédìng zìjǐ chǔzhì.',ex_vn:'Bên cạnh móng chân anh ta có cái bọng máu, anh ta quyết định tự xử lý.',
   exList:[
     {zh:'伤口如果处置不当，很容易感染。',py:'Shāngkǒu rúguǒ chǔzhì búdàng, hěn róngyì gǎnrǎn.',vn:'Vết thương nếu xử lý không đúng cách thì rất dễ bị nhiễm trùng.'},
     {zh:'事故发生后，工作人员及时处置，没有造成更大的损失。',py:'Shìgù fāshēng hòu, gōngzuò rényuán jíshí chǔzhì, méiyǒu zàochéng gèng dà de sǔnshī.',vn:'Sau khi sự cố xảy ra, nhân viên đã kịp thời xử lý, không gây ra tổn thất lớn hơn.'},
     {zh:'这些旧电池不能随便扔，要交给专门的机构妥善处置。',py:'Zhèxiē jiù diànchí bù néng suíbiàn rēng, yào jiāo gěi zhuānmén de jīgòu tuǒshàn chǔzhì.',vn:'Những viên pin cũ này không được vứt bừa, phải giao cho cơ quan chuyên trách xử lý thích đáng.'}
   ],
   colloFull:[
     {zh:'自己处置',py:'zìjǐ chǔzhì',vn:'tự xử lý'},
     {zh:'妥善处置',py:'tuǒshàn chǔzhì',vn:'xử lý thoả đáng'},
     {zh:'处置不当',py:'chǔzhì búdàng',vn:'xử lý không thích đáng'},
     {zh:'及时处置',py:'jíshí chǔzhì',vn:'kịp thời xử lý'},
     {zh:'处置伤口',py:'chǔzhì shāngkǒu',vn:'xử lý vết thương'}
   ],
   patterns:[
     {s:'及时 / 妥善 + 处置 + N',m:'Kịp thời / thoả đáng xử lý …'},
     {s:'(N) + 如果处置不当，……',m:'… nếu xử lý không đúng thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp tình huống đột xuất, thay vì hoảng loạn chi bằng bình tĩnh xử lý.',answer:'遇到突发情况，与其惊慌失措，不如冷静处置。',answerPy:'Yùdào tūfā qíngkuàng, yǔqí jīnghuāng-shīcuò, bùrú lěngjìng chǔzhì.',
      note:'与其……不如…… (ôn HSK 5).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Vết thương này tuy nhỏ, nhưng nếu không xử lý kịp thời thì có thể bị nhiễm trùng.',answer:'这个伤口虽然很小，但是如果不及时处置，就可能感染。',answerPy:'Zhège shāngkǒu suīrán hěn xiǎo, dànshì rúguǒ bù jíshí chǔzhì, jiù kěnéng gǎnrǎn.',
      note:'虽然……但是…… lồng 如果……就…… (ôn HSK 4).',pair:'如果……就……'}
   ]},

  {n:52,zh:'电钻',py:'diàn zuàn',pos:'Danh từ',vn:'máy khoan điện',hv:'điện toản',em:'🔩',lesson:1,
   explain:['Dụng cụ dùng điện để khoan lỗ trên tường, gỗ, kim loại: 电 = điện, 钻 (zuàn) = mũi khoan. Lượng từ: 把 / 台 (一把电钻).','Chú ý: 钻 đọc zuàn khi là danh từ (mũi khoan, kim cương 钻石), đọc zuān khi là động từ (钻研 HSK 6 bài 11, 钻进 = chui vào).'],
   usage:'用电钻 + 打孔 / 打眼; 一把电钻; 电钻 + 的声音.',
   collo:['用电钻打孔','一把电钻','电钻的声音','选中了电钻'],
   ex_zh:'各种工具他都看不上，最后选中的竟然是电钻。',ex_py:'Gè zhǒng gōngjù tā dōu kàn bu shàng, zuìhòu xuǎnzhòng de jìngrán shì diànzuàn.',ex_vn:'Đủ loại dụng cụ anh ta đều chê, cuối cùng thứ được chọn lại là máy khoan điện.',
   exList:[
     {zh:'爸爸用电钻在墙上打了几个孔，把书架挂了上去。',py:'Bàba yòng diànzuàn zài qiáng shang dǎle jǐ ge kǒng, bǎ shūjià guàle shàngqù.',vn:'Bố dùng máy khoan điện khoan mấy lỗ trên tường rồi treo giá sách lên.'},
     {zh:'邻居家在装修，电钻的声音一大早就把我吵醒了。',py:'Línjū jiā zài zhuāngxiū, diànzuàn de shēngyīn yí dà zǎo jiù bǎ wǒ chǎoxǐng le.',vn:'Nhà hàng xóm đang sửa sang, tiếng máy khoan điện đánh thức tôi từ sáng sớm tinh mơ.'},
     {zh:'使用电钻时一定要戴好手套和眼镜。',py:'Shǐyòng diànzuàn shí yídìng yào dàihǎo shǒutào hé yǎnjìng.',vn:'Khi dùng máy khoan điện nhất định phải đeo găng tay và kính bảo hộ.'}
   ],
   colloFull:[
     {zh:'用电钻打孔',py:'yòng diànzuàn dǎ kǒng',vn:'dùng máy khoan để khoan lỗ'},
     {zh:'一把电钻',py:'yì bǎ diànzuàn',vn:'một cái máy khoan điện'},
     {zh:'电钻的声音',py:'diànzuàn de shēngyīn',vn:'tiếng máy khoan'},
     {zh:'选中了电钻',py:'xuǎnzhòngle diànzuàn',vn:'chọn trúng máy khoan điện'},
     {zh:'用电钻处置血泡',py:'yòng diànzuàn chǔzhì xuèpào',vn:'dùng máy khoan xử lý bọng máu'}
   ],
   patterns:[
     {s:'用电钻 + 在……上 + 打孔',m:'Dùng máy khoan khoan lỗ trên …'},
     {s:'电钻的声音 + 把 + 人 + 吵醒了',m:'Tiếng máy khoan đánh thức ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy khoan điện rất nguy hiểm, trẻ con tuyệt đối không được tự ý dùng.',answer:'电钻很危险，小孩子千万不能随便使用。',answerPy:'Diànzuàn hěn wēixiǎn, xiǎoháizi qiānwàn bù néng suíbiàn shǐyòng.',
      note:'千万 + 不能 / 别 = tuyệt đối không được (ôn HSK 4).',pair:'千万'},
     {promptLang:'vi',prompt:'Tuy có máy khoan điện, nhưng anh ấy vẫn nhờ thợ đến lắp điều hoà.',answer:'虽然有电钻，但他还是请师傅来安装空调。',answerPy:'Suīrán yǒu diànzuàn, dàn tā háishi qǐng shīfu lái ānzhuāng kōngtiáo.',
      note:'虽然……但……还是…… (ôn HSK 4).',pair:'虽然……但……'}
   ]},

  {n:53,zh:'遭受',py:'zāoshòu',pos:'Động từ',vn:'bị, chịu (điều bất hạnh, tổn hại)',hv:'tao thụ',em:'🌩️',lesson:1,
   explain:['Gặp phải và phải chịu điều bất lợi, tổn hại: 遭 = gặp (điều xấu), 受 = chịu. Tân ngữ luôn là điều xấu: 伤害, 痛苦, 损失, 打击, 灾难, 批评.','Khác 遭遇 (HSK 6 bài 14 — gặp phải, cũng là danh từ "cảnh ngộ"): 遭受 nhấn việc CHỊU hậu quả (遭受损失); 遭遇 nhấn việc GẶP PHẢI (遭遇车祸, 离奇遭遇).'],
   usage:'遭受 + 伤害 / 痛苦 / 损失 / 打击 / 灾难; 遭受了难以想象的 + N.',
   collo:['遭受伤害','遭受痛苦','遭受损失','遭受打击'],
   ex_zh:'由于用力过猛，把脚弄破了，以致感染，遭受了难以想象的痛苦。',ex_py:'Yóuyú yònglì guò měng, bǎ jiǎo nòngpò le, yǐzhì gǎnrǎn, zāoshòule nányǐ xiǎngxiàng de tòngkǔ.',ex_vn:'Do dùng lực quá mạnh, làm rách chân, đến nỗi nhiễm trùng, phải chịu đau đớn khó mà tưởng tượng.',
   exList:[
     {zh:'明星们遭受的伤害有时出人意料。',py:'Míngxīngmen zāoshòu de shānghài yǒushí chū rén yìliào.',vn:'Những tổn thương các ngôi sao phải chịu đôi khi nằm ngoài dự liệu.'},
     {zh:'这场大雨使农民遭受了巨大的损失。',py:'Zhè chǎng dàyǔ shǐ nóngmín zāoshòule jùdà de sǔnshī.',vn:'Trận mưa lớn này khiến nông dân chịu tổn thất to lớn.'},
     {zh:'他连续两次落榜，遭受了很大的打击，但并没有放弃。',py:'Tā liánxù liǎng cì luòbǎng, zāoshòule hěn dà de dǎjī, dàn bìng méiyǒu fàngqì.',vn:'Cậu ấy hai lần liền thi trượt, chịu đả kích rất lớn, nhưng không hề bỏ cuộc.'}
   ],
   colloFull:[
     {zh:'遭受伤害',py:'zāoshòu shānghài',vn:'bị tổn thương'},
     {zh:'遭受痛苦',py:'zāoshòu tòngkǔ',vn:'chịu đau đớn'},
     {zh:'遭受损失',py:'zāoshòu sǔnshī',vn:'chịu tổn thất'},
     {zh:'遭受打击',py:'zāoshòu dǎjī',vn:'chịu đả kích'},
     {zh:'遭受灾难',py:'zāoshòu zāinàn',vn:'gặp tai hoạ'}
   ],
   patterns:[
     {s:'遭受 + (了) + (巨大的 / 难以想象的) + N (điều xấu)',m:'Chịu (tổn thất / đau đớn) …'},
     {s:'……遭受的 + 伤害 / 损失',m:'Tổn hại / tổn thất mà … phải chịu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những đứa trẻ từng bị tổn thương càng cần sự quan tâm của chúng ta.',answer:'那些遭受过伤害的孩子更需要我们的关怀。',answerPy:'Nàxiē zāoshòuguo shānghài de háizi gèng xūyào wǒmen de guānhuái.',
      note:'V + 过 + N làm định ngữ; 关怀 ôn HSK 6 bài 21.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Dù phải chịu bao nhiêu thất bại, cô ấy cũng chưa từng oán trách ai.',answer:'无论遭受多少失败，她都从来没有埋怨过谁。',answerPy:'Wúlùn zāoshòu duōshao shībài, tā dōu cónglái méiyǒu mányuànguo shéi.',
      note:'无论……都…… (ôn HSK 4); 埋怨 ôn HSK 6 bài 2.',pair:'无论……都……'}
   ]},

  {n:54,zh:'微不足道',py:'wēibùzúdào',pos:'Thành ngữ',vn:'nhỏ nhặt không đáng kể',hv:'vi bất túc đạo',em:'🤏',lesson:1,
   explain:['Nhỏ bé, tầm thường đến mức không đáng nhắc tới: 微 = nhỏ, 足 = đáng, 道 = nói → nhỏ đến mức không đáng nói.','Làm định ngữ (微不足道的小事 / 小手术 / 贡献) hoặc vị ngữ. Thường dùng khi khiêm tốn (我的贡献微不足道) hoặc đánh giá một việc nhỏ. Gần 渺小 (HSK 6 bài 17).'],
   usage:'微不足道的 + 小事 / 贡献 / 手术 / 帮助; 显得 + 微不足道; (贡献) + 微不足道.',
   collo:['微不足道的小事','微不足道的小手术','微不足道的贡献','显得微不足道'],
   ex_zh:'在真正的医生眼里这只是个微不足道的小手术。',ex_py:'Zài zhēnzhèng de yīshēng yǎn li zhè zhǐ shì ge wēibùzúdào de xiǎo shǒushù.',ex_vn:'Trong mắt bác sĩ thực thụ, đây chỉ là một tiểu phẫu nhỏ nhặt không đáng kể.',
   exList:[
     {zh:'这只是一件微不足道的小事，你别放在心上。',py:'Zhè zhǐ shì yí jiàn wēibùzúdào de xiǎoshì, nǐ bié fàng zài xīn shang.',vn:'Đây chỉ là chuyện nhỏ không đáng kể, cậu đừng để trong lòng.'},
     {zh:'和大家的努力比起来，我的贡献微不足道。',py:'Hé dàjiā de nǔlì bǐ qǐlái, wǒ de gòngxiàn wēibùzúdào.',vn:'So với sự nỗ lực của mọi người, đóng góp của tôi chẳng đáng là bao.'},
     {zh:'站在大海边，人显得那么微不足道。',py:'Zhàn zài dàhǎi biān, rén xiǎnde nàme wēibùzúdào.',vn:'Đứng bên bờ biển lớn, con người trở nên thật nhỏ bé.'}
   ],
   colloFull:[
     {zh:'微不足道的小事',py:'wēibùzúdào de xiǎoshì',vn:'chuyện nhỏ nhặt'},
     {zh:'微不足道的小手术',py:'wēibùzúdào de xiǎo shǒushù',vn:'tiểu phẫu không đáng kể'},
     {zh:'微不足道的贡献',py:'wēibùzúdào de gòngxiàn',vn:'đóng góp nhỏ bé'},
     {zh:'显得微不足道',py:'xiǎnde wēibùzúdào',vn:'trở nên nhỏ bé'},
     {zh:'看似微不足道',py:'kànsì wēibùzúdào',vn:'tưởng như không đáng kể'}
   ],
   patterns:[
     {s:'微不足道的 + N',m:'… nhỏ nhặt không đáng kể'},
     {s:'和……比起来，……微不足道',m:'So với …, … chẳng đáng là bao'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có những thói quen tưởng như không đáng kể, nhưng lâu ngày lại có thể thay đổi cả cuộc đời một người.',answer:'有些习惯看似微不足道，时间长了却能改变一个人的一生。',answerPy:'Yǒuxiē xíguàn kànsì wēibùzúdào, shíjiān cháng le què néng gǎibiàn yí ge rén de yìshēng.',
      note:'看似……，却…… = tưởng như … nhưng lại … (ôn HSK 5).',pair:'看似……却……'},
     {promptLang:'vi',prompt:'Tuy chỉ là sự giúp đỡ nhỏ nhặt, nhưng đối với người đang gặp khó khăn lại vô cùng quan trọng.',answer:'虽然只是微不足道的帮助，但对遇到困难的人来说却非常重要。',answerPy:'Suīrán zhǐ shì wēibùzúdào de bāngzhù, dàn duì yùdào kùnnan de rén lái shuō què fēicháng zhòngyào.',
      note:'虽然……但……却…… + 对……来说 (ôn HSK 4).',pair:'对……来说'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 43–45), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 体育明星们的离奇遭遇',
   preQuiz:[
     {q:'大家深信，明星们身上的每一处伤疤都是什么？',opts:['奋力拼搏的标记','粗心大意的结果','比赛失败的证明'],ans:0},
     {q:'那名足球门将在比赛中被什么撞伤了膝盖？',opts:['一只猫头鹰','一只狗','另一名球员'],ans:1},
     {q:'门将受伤以后，最后怎么样了？',opts:['很快就恢复了','换了一支球队','告别了他心爱的职业'],ans:2},
     {q:'猫头鹰为什么会出现在球场上？',opts:['很可能是因受伤而“迫降”','被球迷带进了球场','被人故意放了进来'],ans:0},
     {q:'主裁判为什么决定中断比赛？',opts:['有球员受伤了','出于保护动物的目的','突然下起了大雨'],ans:1},
     {q:'猫头鹰被踢以后怎么样了？',opts:['马上飞走了','被送到了动物园','抢救两天后不治身亡'],ans:2},
     {q:'动物保护组织对踢伤猫头鹰的球员是什么态度？',opts:['原谅了他','给他颁了奖','甚至要和他打官司'],ans:2},
     {q:'被称为“凶手”的球员道歉时为自己辩解了什么？',opts:['他当时没看见猫头鹰','他不是成心的','是主裁判的错'],ans:1},
     {q:'为什么航空旅行成了运动员的家常便饭？',opts:['因为赛事频繁','因为运动员喜欢旅行','因为机票很便宜'],ans:0},
     {q:'那位踩在警示牌上的运动员为什么扭伤了脚？',opts:['由于重心不稳','因为在球门里训练','因为在折叠熨衣板'],ans:0},
     {q:'那位进球后受伤的球员，为什么说他“雪上加霜”？',opts:['他的手指被电钻弄破了','手指受重伤后还被主裁判给了一张黄牌','他因此错过了部分比赛'],ans:1},
     {q:'课文中最荒唐的受伤是怎么造成的？',opts:['被登机牌击中了眼睛','从汽车里拽高尔夫球具','用电钻处置脚上的血泡'],ans:2}
   ],
   lines:[
    {sp:0,zh:'每次看到我们崇拜的体育明星在赛场上冲击奖牌，大家都深信，他们身上的每一处伤疤都是奋力拼搏的标记。可是你知道吗，明星们受伤，有时竟也荒谬得不可思议。',
     py:'Měi cì kàndào wǒmen chóngbài de tǐyù míngxīng zài sàichǎng shang chōngjī jiǎngpái, dàjiā dōu shēnxìn, tāmen shēnshang de měi yí chù shāngbā dōu shì fènlì pīnbó de biāojì. Kěshì nǐ zhīdào ma, míngxīngmen shòushāng, yǒushí jìng yě huāngmiù de bùkě-sīyì.',
     vn:'Mỗi lần thấy những ngôi sao thể thao mà chúng ta hâm mộ xông lên giành huy chương trên sân đấu, mọi người đều tin chắc rằng mỗi vết sẹo trên người họ đều là dấu ấn của sự chiến đấu hết mình. Nhưng bạn có biết không, các ngôi sao bị thương đôi khi lại vô lý đến mức không thể tưởng tượng nổi.'},
    {sp:0,zh:'曾经有一名足球门将正在比赛中聚精会神地防守，突然，一只狗以火箭般的速度冲了进来，横着冲向他的膝盖，然后向他发起进攻。人们惊呆了，这是阴谋，还是离奇的巧合？门将当场倒地，身受重伤，经久不愈，最后竟因此告别了他心爱的职业。',
     py:'Céngjīng yǒu yì míng zúqiú ménjiàng zhèngzài bǐsài zhōng jùjīng-huìshén de fángshǒu, tūrán, yì zhī gǒu yǐ huǒjiàn bān de sùdù chōngle jìnlái, héngzhe chōngxiàng tā de xīgài, ránhòu xiàng tā fāqǐ jìngōng. Rénmen jīngdāi le, zhè shì yīnmóu, háishi líqí de qiǎohé? Ménjiàng dāngchǎng dǎo dì, shēn shòu zhòngshāng, jīngjiǔ bú yù, zuìhòu jìng yīncǐ gàobiéle tā xīn\'ài de zhíyè.',
     vn:'Từng có một thủ môn bóng đá đang tập trung cao độ phòng thủ trong trận đấu thì bỗng một con chó lao vào sân với tốc độ như tên lửa, xộc ngang vào đầu gối anh ta rồi tấn công anh ta. Mọi người sững sờ: đây là âm mưu, hay là một sự trùng hợp ly kỳ? Thủ môn ngã gục ngay tại chỗ, bị thương nặng, mãi không khỏi, cuối cùng lại vì thế mà phải từ giã sự nghiệp mà anh yêu quý.'},
    {sp:0,zh:'南美足球赛场上的猫头鹰事件，赛后成了头条新闻。事情是这样的，球赛进行得正激烈时，一只很可能是因受伤而“迫降”球场的猫头鹰遮挡住了球员的视线，主裁判出于保护动物的目的，决定中断比赛，可是一名球员已经刹不住车，一只大脚踢向了毫无防御的猫头鹰。可怜的猫头鹰，抢救两天后不治身亡。没想到一场道德讨论就此开始：有人认为想赢球也不能置猫头鹰的生命于不顾，这种只想赢球的心态和比赛精神南辕北辙。一时间，只注重胜负，却将猫头鹰残酷“射杀”致死的行为是否应该被原谅，引起了广泛的争议。人们结结实实地打了一场嘴仗，动物保护组织甚至要和球员打官司；一些球迷认为猫头鹰是球场的守护神，甚至谴责球员就是凶手；被称为“凶手”的球员一定在心中大呼冤枉，但他还是为自己的行为诚恳道歉，道歉之余却也没忘了为自己辩解——他不是成心的。',
     py:'Nánměi zúqiú sàichǎng shang de māotóuyīng shìjiàn, sài hòu chéngle tóutiáo xīnwén. Shìqing shì zhèyàng de, qiúsài jìnxíng de zhèng jīliè shí, yì zhī hěn kěnéng shì yīn shòushāng ér “pòjiàng” qiúchǎng de māotóuyīng zhēdǎng zhùle qiúyuán de shìxiàn, zhǔ cáipàn chūyú bǎohù dòngwù de mùdì, juédìng zhōngduàn bǐsài, kěshì yì míng qiúyuán yǐjīng shā bu zhù chē, yì zhī dà jiǎo tīxiàngle háo wú fángyù de māotóuyīng. Kělián de māotóuyīng, qiǎngjiù liǎng tiān hòu bú zhì shēnwáng. Méi xiǎngdào yì chǎng dàodé tǎolùn jiù cǐ kāishǐ: yǒu rén rènwéi xiǎng yíng qiú yě bù néng zhì māotóuyīng de shēngmìng yú bú gù, zhè zhǒng zhǐ xiǎng yíng qiú de xīntài hé bǐsài jīngshén nányuán-běizhé. Yìshíjiān, zhǐ zhùzhòng shèngfù, què jiāng māotóuyīng cánkù “shèshā” zhìsǐ de xíngwéi shìfǒu yīnggāi bèi yuánliàng, yǐnqǐle guǎngfàn de zhēngyì. Rénmen jiējieshíshí de dǎle yì chǎng zuǐzhàng, dòngwù bǎohù zǔzhī shènzhì yào hé qiúyuán dǎ guānsi; yìxiē qiúmí rènwéi māotóuyīng shì qiúchǎng de shǒuhùshén, shènzhì qiǎnzé qiúyuán jiù shì xiōngshǒu; bèi chēngwéi “xiōngshǒu” de qiúyuán yídìng zài xīn zhōng dà hū yuānwang, dàn tā háishi wèi zìjǐ de xíngwéi chéngkěn dàoqiàn, dàoqiàn zhī yú què yě méi wàngle wèi zìjǐ biànjiě——tā bú shì chéngxīn de.',
     vn:'Vụ việc con cú mèo trên sân bóng Nam Mỹ (Nam Mỹ: tức châu Nam Mỹ, nằm ở phía nam Tây bán cầu) sau trận đấu đã lên tin trang nhất. Chuyện là thế này: khi trận đấu đang diễn ra quyết liệt, một con cú mèo — rất có thể vì bị thương mà "hạ cánh khẩn cấp" xuống sân — đã che khuất tầm nhìn của cầu thủ. Trọng tài chính vì mục đích bảo vệ động vật đã quyết định tạm dừng trận đấu, nhưng một cầu thủ đã không kịp dừng lại, tung một cú sút mạnh vào con cú mèo không hề phòng bị. Con cú mèo đáng thương được cấp cứu hai ngày rồi chết. Không ngờ một cuộc tranh luận về đạo đức bắt đầu từ đó: có người cho rằng muốn thắng cũng không thể coi thường mạng sống của con cú mèo, tâm lý chỉ muốn thắng như thế hoàn toàn đi ngược tinh thần thi đấu. Nhất thời, việc hành vi chỉ coi trọng thắng thua mà tàn nhẫn "bắn chết" con cú mèo có nên được tha thứ hay không đã gây ra tranh cãi rộng rãi. Mọi người đấu khẩu với nhau một trận ra trò; tổ chức bảo vệ động vật thậm chí còn muốn kiện cầu thủ ra toà; một số cổ động viên cho rằng cú mèo là thần hộ mệnh của sân bóng, thậm chí lên án cầu thủ chính là hung thủ; cầu thủ bị gọi là "hung thủ" hẳn là trong lòng kêu oan ầm ĩ, nhưng anh ta vẫn thành khẩn xin lỗi vì hành vi của mình, và xin lỗi xong cũng không quên thanh minh cho mình — anh ta không cố ý.'},
    {sp:0,zh:'明星们遭受的伤害有时出人意料。因赛事频繁，航空旅行成了运动员的家常便饭。你相信吗？登机牌也可能成为凶器。曾有运动员在机场被登机牌击中眼睛，并因此错过部分比赛。',
     py:'Míngxīngmen zāoshòu de shānghài yǒushí chū rén yìliào. Yīn sàishì pínfán, hángkōng lǚxíng chéngle yùndòngyuán de jiācháng biànfàn. Nǐ xiāngxìn ma? Dēngjīpái yě kěnéng chéngwéi xiōngqì. Céng yǒu yùndòngyuán zài jīchǎng bèi dēngjīpái jīzhòng yǎnjing, bìng yīncǐ cuòguò bùfen bǐsài.',
     vn:'Những chấn thương mà các ngôi sao phải chịu đôi khi nằm ngoài dự liệu. Vì lịch thi đấu dày đặc, đi lại bằng máy bay đã thành chuyện cơm bữa của vận động viên. Bạn có tin không? Thẻ lên máy bay cũng có thể trở thành hung khí. Từng có vận động viên bị thẻ lên máy bay đập trúng mắt ở sân bay, và vì thế mà lỡ mất một phần các trận đấu.'},
    {sp:0,zh:'我们每个人都有过粗心大意的时候，令人悲哀的是，这也可能成为被伤害的原因。一次赛前热身，主办方特意做了警示牌，警告运动员不要在球门里训练，有位运动员一时疏忽正好踩在了警示牌上，由于重心不稳，以致扭伤了脚；还有位同样疏忽的运动员，在折叠熨衣板时肩膀受伤；某国国脚有一次不仅磕破了嘴唇，还磕掉了门牙，当时他仅仅是想从汽车里拽出高尔夫球具。',
     py:'Wǒmen měi ge rén dōu yǒuguo cūxīn dàyi de shíhou, lìng rén bēi\'āi de shì, zhè yě kěnéng chéngwéi bèi shānghài de yuányīn. Yí cì sài qián rèshēn, zhǔbànfāng tèyì zuòle jǐngshìpái, jǐnggào yùndòngyuán búyào zài qiúmén li xùnliàn, yǒu wèi yùndòngyuán yìshí shūhu zhènghǎo cǎi zàile jǐngshìpái shang, yóuyú zhòngxīn bù wěn, yǐzhì niǔshāngle jiǎo; hái yǒu wèi tóngyàng shūhu de yùndòngyuán, zài zhédié yùnyībǎn shí jiānbǎng shòushāng; mǒu guó guójiǎo yǒu yí cì bùjǐn kēpòle zuǐchún, hái kēdiàole ményá, dāngshí tā jǐnjǐn shì xiǎng cóng qìchē li zhuàichū gāo\'ěrfū qiújù.',
     vn:'Mỗi người chúng ta đều từng có lúc sơ ý cẩu thả; điều đáng buồn là, đó cũng có thể trở thành nguyên nhân bị tổn thương. Một lần khởi động trước trận, ban tổ chức đã cất công làm biển cảnh báo, nhắc vận động viên không được tập trong khung thành; có một vận động viên nhất thời lơ là, giẫm đúng lên tấm biển cảnh báo, do mất thăng bằng nên đến nỗi bị trẹo chân; lại có một vận động viên cũng lơ là như thế, bị thương ở vai khi gấp bàn kê là quần áo; một tuyển thủ quốc gia nọ có lần không chỉ va rách môi mà còn va gãy cả răng cửa, trong khi lúc đó anh ta chỉ định lôi bộ gậy golf ra khỏi ô tô.'},
    {sp:0,zh:'汉语有个词叫乐极生悲，说的就应该是下面这位球员：在打进一球后，他冲入观众席和球迷一起庆祝，结果结婚戒指连同他的手指一起挂在了围栏上，手指受重伤。更让他恼火的是，不了解情况的主裁判还给了他一张黄牌，真可谓雪上加霜！',
     py:'Hànyǔ yǒu ge cí jiào lèjí-shēngbēi, shuō de jiù yīnggāi shì xiàmiàn zhè wèi qiúyuán: zài dǎjìn yì qiú hòu, tā chōngrù guānzhòngxí hé qiúmí yìqǐ qìngzhù, jiéguǒ jiéhūn jièzhi liántóng tā de shǒuzhǐ yìqǐ guà zàile wéilán shang, shǒuzhǐ shòu zhòngshāng. Gèng ràng tā nǎohuǒ de shì, bù liǎojiě qíngkuàng de zhǔ cáipàn hái gěile tā yì zhāng huángpái, zhēn kěwèi xuěshàng-jiāshuāng!',
     vn:'Tiếng Hán có một từ gọi là "vui quá hoá buồn", nói chính là cầu thủ dưới đây: sau khi ghi một bàn, anh ta lao lên khán đài ăn mừng cùng cổ động viên, kết quả chiếc nhẫn cưới cùng với ngón tay anh ta mắc vào hàng rào, ngón tay bị thương nặng. Điều khiến anh ta bực hơn nữa là trọng tài chính không hiểu rõ tình hình còn rút cho anh ta một thẻ vàng, đúng là hoạ vô đơn chí!'},
    {sp:0,zh:'最荒唐的受伤当属某国国脚。他的脚指甲旁边长了个血泡，他决定自己处置。各种工具他都看不上，最后选中的竟然是电钻，由于用力过猛，把脚弄破了，以致感染，遭受了难以想象的痛苦。看来医生也不是谁想当就能当的，虽然在真正的医生眼里这只是个微不足道的小手术。',
     py:'Zuì huāngtáng de shòushāng dāng shǔ mǒu guó guójiǎo. Tā de jiǎozhǐjia pángbiān zhǎngle ge xuèpào, tā juédìng zìjǐ chǔzhì. Gè zhǒng gōngjù tā dōu kàn bu shàng, zuìhòu xuǎnzhòng de jìngrán shì diànzuàn, yóuyú yònglì guò měng, bǎ jiǎo nòngpò le, yǐzhì gǎnrǎn, zāoshòule nányǐ xiǎngxiàng de tòngkǔ. Kànlái yīshēng yě bú shì shéi xiǎng dāng jiù néng dāng de, suīrán zài zhēnzhèng de yīshēng yǎn li zhè zhǐ shì ge wēibùzúdào de xiǎo shǒushù.',
     vn:'Vụ chấn thương lố bịch nhất phải kể đến một tuyển thủ quốc gia nọ. Bên cạnh móng chân anh ta mọc một cái bọng máu, anh ta quyết định tự mình xử lý. Đủ loại dụng cụ anh ta đều chê, cuối cùng thứ được chọn lại là máy khoan điện; do dùng lực quá mạnh, anh ta làm rách chân, đến nỗi bị nhiễm trùng, phải chịu đau đớn khó mà tưởng tượng. Xem ra bác sĩ cũng không phải ai muốn làm là làm được, dù trong mắt bác sĩ thực thụ đây chỉ là một tiểu phẫu nhỏ nhặt không đáng kể.'},
    {sp:0,zh:'其实离奇伤害不仅存在于运动员当中，它也紧紧跟随着我们每一个人，只要你疏忽、大意。',
     py:'Qíshí líqí shānghài bùjǐn cúnzài yú yùndòngyuán dāngzhōng, tā yě jǐnjǐn gēnsuízhe wǒmen měi yí ge rén, zhǐyào nǐ shūhu, dàyi.',
     vn:'Thật ra chấn thương kỳ quặc không chỉ tồn tại trong giới vận động viên, nó còn bám sát theo mỗi người chúng ta — chỉ cần bạn lơ là, sơ ý. (Cải biên từ bài "Những chấn thương ly kỳ của các ngôi sao thể thao" trên báo Bắc Kinh Vãn báo.)'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 特意—故意 lấy từ sách (tr. 46–47, 做一做: 判断正误); 疏忽—大意, 遭受—遭遇 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'特意 — 故意',
   same:'Đều có nghĩa "cố ý làm …" (有意地做……), đều làm phó từ, đứng trước động từ hoặc cụm động từ.',
   sameEx:{zh:'他特意／故意把礼物放在一个明显的位置，以便我一眼就能看见。',vn:'Anh ấy cố ý đặt món quà ở một chỗ dễ thấy, để tôi nhìn một cái là thấy ngay.'},
   items:[
     {word:'特意',points:[
       'Thường là BỎ TÂM SỨC để làm tốt một việc, chuyên vì việc đó mà làm; thường có ảnh hưởng TÍCH CỰC tới người khác / sự việc.',
       'Chỉ làm phó từ, không làm danh từ.',
       'Hay đi với 为 + người + V (特意为你准备的), 从……赶来, 绕道.'
     ],ex:[{zh:'他特意从上海来到北京参加这次会议。',vn:'Anh ấy cất công từ Thượng Hải đến Bắc Kinh dự hội nghị lần này.'},
          {zh:'为了写好论文，他特意拜访了那位有名的学者。',vn:'Để viết tốt luận văn, anh ấy đã cất công đến thăm vị học giả nổi tiếng đó.'}]},
     {word:'故意',points:[
       'Biết rõ KHÔNG NÊN / KHÔNG CẦN làm vậy mà vẫn làm, thường mang nghĩa XẤU (贬义).',
       'Ngoài phó từ còn làm DANH TỪ (thường dùng trong pháp luật): 存在伤害对方的故意.',
       'Hay đi trong lời thanh minh: 我不是故意的 (= 我不是成心的).'
     ],ex:[{zh:'小明故意把椅子撞倒了。',vn:'Tiểu Minh cố tình xô đổ cái ghế.'},
          {zh:'他故意借钱不还。',vn:'Anh ta cố tình vay tiền không trả.'}]}
   ],
   quiz:[
     {sentence:'知道你爱吃辣的，我＿＿多放了一点儿辣椒。',options:['特意','故意'],answer:0,
      why:'Vì người khác mà bỏ tâm sức làm cho vừa ý → 特意 (tích cực).'},
     {sentence:'他＿＿把音乐开得很大，不让我睡觉。',options:['特意','故意'],answer:1,
      why:'Biết là làm phiền mà vẫn làm, nghĩa xấu → 故意.'},
     {sentence:'法官认为，被告并不存在伤害他人的＿＿。',options:['特意','故意'],answer:1,
      why:'Làm DANH TỪ trong lĩnh vực pháp luật → chỉ 故意; 特意 không làm danh từ.'},
     {sentence:'奶奶生日那天，我＿＿请了假回家陪她。',options:['特意','故意'],answer:0,
      why:'Chuyên vì sinh nhật bà mà xin nghỉ về → 特意.'}
   ],
   sgk:{
     chung:{t:'都有“有意地做……”的意思，都能做副词，用在动词或动词短语前。',vn:'Đều có nghĩa "cố ý làm …", đều làm phó từ, dùng trước động từ hoặc cụm động từ.',vd:'他特意／故意把礼物放在一个明显的位置，以便我一眼就能看见。',vdVn:'Anh ấy cố ý đặt món quà ở một chỗ dễ thấy, để tôi nhìn một cái là thấy ngay.'},
     khac:[
       {a:{t:'一般是花心思努力做好某件事情，往往对他人／事情产生积极的影响。',vn:'Thường là bỏ tâm sức cố gắng làm tốt một việc nào đó, thường có ảnh hưởng tích cực tới người khác / sự việc.',vd:'①他特意从上海来到北京参加这次会议。②为了写好论文，他特意拜访了那位有名的学者。',vdVn:'① Anh ấy cất công từ Thượng Hải đến Bắc Kinh dự hội nghị lần này. ② Để viết tốt luận văn, anh ấy đã cất công đến thăm vị học giả nổi tiếng đó.'},
        b:{t:'明知不应该／不必这样做还这样做，常含贬义。',vn:'Biết rõ không nên / không cần làm vậy mà vẫn làm, thường mang nghĩa xấu.',vd:'①小明故意把椅子撞倒了。②他故意借钱不还。',vdVn:'① Tiểu Minh cố tình xô đổ cái ghế. ② Anh ta cố tình vay tiền không trả.'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải (không làm danh từ).',vd:'*他存在伤害对方的特意。（×）',vdVn:'Không nói 伤害对方的特意.'},
        b:{t:'除了做副词外，还可以做名词（一般用于法律方面）。',vn:'Ngoài làm phó từ, còn có thể làm danh từ (thường dùng trong lĩnh vực pháp luật).',vd:'他存在伤害对方的故意。',vdVn:'Anh ta có lỗi cố ý gây thương tích cho đối phương (thuật ngữ pháp luật).'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'对不起，我不是故意弄坏你的手表的。',dap:[true,false],
        giai:'ĐÚNG. Lời thanh minh "không cố ý làm hỏng" — làm hỏng đồ là việc xấu → 故意 dùng đúng.'},
       {s:'你看见红灯亮了还不停，是特意的吧！',dap:[false,true],
        giai:'SAI. Biết đèn đỏ mà vẫn không dừng = biết không nên mà vẫn làm, nghĩa xấu → phải dùng 故意: 你看见红灯亮了还不停，是故意的吧！'},
       {s:'虽然造成了死伤5人的后果，但他并没有主观上的特意。',dap:[false,true],
        giai:'SAI. Ở đây làm DANH TỪ, ngữ cảnh pháp luật (hậu quả làm 5 người thương vong) → chỉ 故意 làm được danh từ: ……但他并没有主观上的故意。'},
       {s:'他故意为大家准备了丰盛的午餐，我们非常感动。',dap:[false,true],
        giai:'SAI. Bỏ công chuẩn bị bữa trưa thịnh soạn cho mọi người, ảnh hưởng tích cực (我们非常感动) → phải dùng 特意: 他特意为大家准备了丰盛的午餐。'}
     ]
   }},

  {pair:'疏忽 — 大意',
   same:'Đều chỉ sự không cẩn thận, không để ý nên gây ra sai sót; đều hay đi với 一时 (nhất thời).',
   sameEx:{zh:'他一时疏忽／大意，把考试时间记错了。',vn:'Cậu ấy nhất thời sơ ý, nhớ nhầm giờ thi.'},
   items:[
     {word:'疏忽',points:[
       'ĐỘNG TỪ, mang được tân ngữ: 疏忽了安全问题 / 疏忽了细节.',
       'Còn làm DANH TỪ: 由于工作人员的疏忽 (do sơ suất của nhân viên).',
       'Nhấn một lần bỏ sót cụ thể.'
     ],ex:[{zh:'因为工作人员的疏忽而造成一人死亡的后果。',vn:'Vì sơ suất của nhân viên mà gây ra hậu quả một người tử vong.'}]},
     {word:'大意',points:[
       'TÍNH TỪ (dàyi), không mang tân ngữ; nhận phó từ mức độ: 太大意了.',
       'Hay đi thành cụm 粗心大意, 马虎大意; câu khuyên 千万不能大意.',
       'Nhấn trạng thái / tính cách thiếu cẩn thận.'
     ],ex:[{zh:'我们每个人都有过粗心大意的时候。',vn:'Mỗi người chúng ta đều từng có lúc sơ ý cẩu thả.'}]}
   ],
   quiz:[
     {sentence:'他只顾着赶进度，＿＿了安全问题。',options:['疏忽','大意'],answer:0,
      why:'Có tân ngữ (安全问题) → động từ 疏忽; 大意 là tính từ, không mang tân ngữ.'},
     {sentence:'对手虽然不强，但我们千万不能＿＿。',options:['疏忽','大意'],answer:1,
      why:'Câu khuyên 千万不能大意 (tuyệt đối không được chủ quan) — cụm quen dùng với tính từ 大意.'},
     {sentence:'由于工作人员的＿＿，商场面临一场官司。',options:['疏忽','大意'],answer:0,
      why:'Làm DANH TỪ sau 的 (工作人员的疏忽) → 疏忽.'},
     {sentence:'你也太＿＿了，连护照都忘带了！',options:['疏忽','大意'],answer:1,both:true,
      why:'太 + Adj → 大意 tự nhiên nhất (粗心大意); khẩu ngữ nói 太疏忽了 cũng được.'}
   ]},

  {pair:'遭受 — 遭遇',
   same:'Đều là động từ, đều chỉ gặp phải điều không may; đều đi được với 挫折, 打击, 不幸.',
   sameEx:{zh:'他在比赛中遭受／遭遇了重大挫折。',vn:'Anh ấy gặp phải thất bại nặng nề trong trận đấu.'},
   items:[
     {word:'遭受',points:[
       'Nhấn việc PHẢI CHỊU hậu quả xấu; tân ngữ: 伤害, 痛苦, 损失, 打击, 批评.',
       'Chỉ làm động từ.',
       'Bài khoá: 明星们遭受的伤害 / 遭受了难以想象的痛苦.'
     ],ex:[{zh:'这场大雨使农民遭受了巨大的损失。',vn:'Trận mưa lớn khiến nông dân chịu tổn thất to lớn.'}]},
     {word:'遭遇',points:[
       'Nhấn việc GẶP PHẢI một sự kiện, tình huống, đối thủ: 遭遇车祸, 遭遇暴风雨, 遭遇强敌 (HSK 6 bài 14).',
       'Còn làm DANH TỪ: cảnh ngộ, chuyện đã trải qua — 离奇遭遇, 不幸的遭遇.',
       'Tên bài: 体育明星们的离奇遭遇.'
     ],ex:[{zh:'他们在回家的路上遭遇了一场暴风雨。',vn:'Trên đường về nhà họ gặp phải một trận bão.'}]}
   ],
   quiz:[
     {sentence:'这篇文章讲述了体育明星们的离奇＿＿。',options:['遭受','遭遇'],answer:1,
      why:'Làm DANH TỪ (cảnh ngộ) sau 的 → chỉ 遭遇.'},
     {sentence:'这场大雨使农民＿＿了巨大的损失。',options:['遭受','遭遇'],answer:0,
      why:'Tân ngữ 损失 (tổn thất phải chịu) → 遭受.'},
     {sentence:'登山队在半路上＿＿了一场暴风雪。',options:['遭受','遭遇'],answer:1,
      why:'GẶP PHẢI một sự kiện (暴风雪) → 遭遇.'},
     {sentence:'因为用力过猛，他＿＿了难以想象的痛苦。',options:['遭受','遭遇'],answer:0,
      why:'Chịu đựng nỗi đau (痛苦) → 遭受 (câu bài khoá).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'阴谋',hv:'âm mưu',vn:'âm mưu',note:'Trùng khít: 揭穿阴谋 = vạch trần âm mưu.'},
    {zh:'防守',hv:'phòng thủ',vn:'phòng thủ',note:'Trùng khít; đối lập 进攻 (tiến công).'},
    {zh:'防御',hv:'phòng ngự',vn:'phòng ngự',note:'Trùng khít: 防御系统 = hệ thống phòng ngự.'},
    {zh:'进攻',hv:'tiến công',vn:'tấn công, tiến công',note:'Tiếng Việt nói "tiến công" hoặc "tấn công" đều được.'},
    {zh:'残酷',hv:'tàn khốc',vn:'tàn khốc, tàn nhẫn',note:'Trùng khít: 残酷的战争 = chiến tranh tàn khốc.'},
    {zh:'凶手',hv:'hung thủ',vn:'hung thủ',note:'Trùng khít; nghĩa bóng "thủ phạm" (熬夜是健康的凶手).'},
    {zh:'警告',hv:'cảnh cáo',vn:'cảnh cáo, cảnh báo',note:'Trùng khít; 警示牌 = biển cảnh báo.'},
    {zh:'航空',hv:'hàng không',vn:'hàng không',note:'Trùng khít: 航空公司 = hãng hàng không.'},
    {zh:'悲哀',hv:'bi ai',vn:'bi ai, đau xót',note:'Trùng khít; 令人悲哀的是 = điều đáng buồn là.'},
    {zh:'荒唐',hv:'hoang đường',vn:'hoang đường, vô lý',note:'Trùng khít: 荒唐的想法 = suy nghĩ hoang đường.'},
    {zh:'崇拜',hv:'sùng bái',vn:'sùng bái, hâm mộ',note:'Trùng khít; với thần tượng nói "hâm mộ" tự nhiên hơn.'},
    {zh:'火箭',hv:'hoả tiễn',vn:'tên lửa',note:'"Hoả tiễn" = mũi tên lửa; tiếng Việt hiện đại nói "tên lửa".'},
    {zh:'重心',hv:'trọng tâm',vn:'trọng tâm',note:'Trùng khít cả hai nghĩa: điểm cân bằng (重心不稳) và trọng điểm (工作的重心).'},
    {zh:'注重',hv:'chú trọng',vn:'chú trọng',note:'Trùng khít: 注重细节 = chú trọng chi tiết.'},
    {zh:'处置',hv:'xử trí',vn:'xử trí, xử lý',note:'Trùng khít: 及时处置 = xử trí kịp thời.'},
    {zh:'冤枉',hv:'oan uổng',vn:'oan, đổ oan',note:'Gần như trùng khít; tiếng Trung còn là động từ "đổ oan cho ai": 别冤枉好人.'}
  ],
  idiom:[
    {zh:'聚精会神',hv:'tụ tinh hội thần',vn:'tập trung tinh thần, chăm chú',note:'"Tụ" và "hội" đều là gom lại → tinh thần dồn hết vào một chỗ.'},
    {zh:'南辕北辙',hv:'nam viên bắc triệt',vn:'hoàn toàn trái ngược',note:'Muốn đi về Nam mà đánh xe về Bắc — càng đi càng xa đích.'},
    {zh:'乐极生悲',hv:'lạc cực sinh bi',vn:'vui quá hoá buồn',note:'"Lạc" = vui, "cực" = tột cùng, "bi" = buồn.'},
    {zh:'雪上加霜',hv:'tuyết thượng gia sương',vn:'hoạ vô đơn chí',note:'Trên tuyết lại thêm sương giá → khổ chồng thêm khổ.'},
    {zh:'微不足道',hv:'vi bất túc đạo',vn:'nhỏ nhặt không đáng kể',note:'"Vi" = nhỏ, "túc" = đáng, "đạo" = nói → nhỏ đến mức chẳng đáng nói.'}
  ],
  trap:[
    {zh:'成心',hv:'thành tâm',vn:'cố ý, cố tình',
     warn:'BẪY LỚN: tiếng Việt "thành tâm" = chân thành. 成心 tiếng Trung lại là CỐ Ý (他不是成心的 = anh ta không cố ý). "Thành tâm" tiếng Trung viết 诚心.'},
    {zh:'大意',hv:'đại ý',vn:'sơ ý, cẩu thả',
     warn:'大意 (dàyi, thanh nhẹ) = SƠ Ý (粗心大意). Chỉ khi đọc dàyì mới là "đại ý, ý chính" (段落大意).'},
    {zh:'裁判',hv:'tài phán',vn:'trọng tài',
     warn:'"Tài phán" tiếng Việt là thuật ngữ pháp lý (cơ quan tài phán). Người điều khiển trận đấu là "trọng tài": 主裁判 = trọng tài chính.'},
    {zh:'冲击',hv:'xung kích',vn:'nhắm tới (thành tích); tác động mạnh',
     warn:'"Xung kích" tiếng Việt thường là lực lượng đi đầu. 冲击奖牌 = xông lên giành huy chương; 受到冲击 = bị tác động mạnh.'},
    {zh:'谴责',hv:'khiển trách',vn:'lên án',
     warn:'"Khiển trách" tiếng Việt là hình thức kỷ luật nhẹ. 谴责 mạnh hơn nhiều = LÊN ÁN (强烈谴责 = lên án mạnh mẽ).'},
    {zh:'特意',hv:'đặc ý',vn:'cất công, đặc biệt (vì việc gì)',
     warn:'Không có "đặc ý" trong tiếng Việt. 特意 = cất công, chuyên vì việc đó mà làm: 特意为你准备的.'},
    {zh:'中断',hv:'trung đoạn',vn:'gián đoạn, tạm dừng',
     warn:'Không nói "trung đoạn"; 中断比赛 = tạm dừng trận đấu, 联系中断了 = mất liên lạc.'},
    {zh:'心态',hv:'tâm thái',vn:'tâm lý, tâm thế',
     warn:'Tiếng Việt ít nói "tâm thái"; 良好的心态 dịch "tâm lý vững vàng / thái độ tích cực".'},
    {zh:'主办',hv:'chủ biện',vn:'đứng ra tổ chức, đăng cai',
     warn:'Không nói "chủ biện"; 主办方 = ban tổ chức, 主办城市 = thành phố đăng cai.'},
    {zh:'意料',hv:'ý liệu',vn:'dự liệu, lường trước',
     warn:'Tiếng Việt nói "dự liệu"; 出人意料 = ngoài dự liệu, không ai ngờ.'},
    {zh:'事件',hv:'sự kiện',vn:'vụ việc, sự kiện',
     warn:'"Sự kiện" tiếng Việt thường trung tính (sự kiện ra mắt). 事件 hay chỉ VỤ VIỆC bất thường: 猫头鹰事件 = vụ việc con cú mèo.'},
    {zh:'当场',hv:'đương trường',vn:'ngay tại chỗ',
     warn:'Không nói "đương trường"; 当场死亡 = chết tại chỗ, 当场抓住 = bắt quả tang.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'我们崇拜的',right:'体育明星'},
  {left:'在赛场上冲击',right:'奖牌'},
  {left:'奋力',right:'拼搏'},
  {left:'聚精会神地',right:'防守'},
  {left:'以火箭般的',right:'速度'},
  {left:'向他发起',right:'进攻'},
  {left:'离奇的',right:'巧合'},
  {left:'遮挡住了球员的',right:'视线'},
  {left:'决定中断',right:'比赛'},
  {left:'一名球员已经刹不住',right:'车'},
  {left:'毫无防御的',right:'猫头鹰'},
  {left:'只想赢球的',right:'心态'},
  {left:'引起了广泛的',right:'争议'},
  {left:'动物保护组织要和球员',right:'打官司'},
  {left:'球场的',right:'守护神'},
  {left:'在心中大呼',right:'冤枉'},
  {left:'出人',right:'意料'},
  {left:'赛事',right:'频繁'},
  {left:'粗心',right:'大意'},
  {left:'一时',right:'疏忽'},
  {left:'由于重心',right:'不稳'},
  {left:'磕破了',right:'嘴唇'},
  {left:'真可谓',right:'雪上加霜'},
  {left:'遭受了难以想象的',right:'痛苦'},
  {left:'微不足道的',right:'小手术'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'这部侦探小说情节',blank:'离奇',post:'，我一口气就读完了。',hint:'(ly kỳ)',ans:'离奇'},
  {pre:'他从小就',blank:'崇拜',post:'那位足球明星，房间里贴满了他的海报。',hint:'(hâm mộ, tôn sùng)',ans:'崇拜'},
  {pre:'这次奥运会，她将第三次',blank:'冲击',post:'金牌。',hint:'(xông lên giành)',ans:'冲击'},
  {pre:'年轻人就应该为自己的梦想',blank:'拼搏',post:'一回，不要轻易放弃。',hint:'(dốc sức phấn đấu)',ans:'拼搏'},
  {pre:'他正',blank:'聚精会神',post:'地做题，连我进门都没发现。',hint:'(chăm chú)',ans:'聚精会神'},
  {pre:'下半场我们要加强',blank:'防守',post:'，不能再让对方进球了。',hint:'(phòng thủ)',ans:'防守'},
  {pre:'听到下课铃声，他以',blank:'火箭',post:'般的速度冲出了教室。',hint:'(tên lửa)',ans:'火箭'},
  {pre:'这张桌子太长了，得',blank:'横',post:'着才能抬进门。',hint:'(ngang)',ans:'横'},
  {pre:'比赛最后五分钟，我们队向对方球门发起了猛烈的',blank:'进攻',post:'。',hint:'(tấn công)',ans:'进攻'},
  {pre:'警察终于揭穿了他们的',blank:'阴谋',post:'，把几个坏人都抓了起来。',hint:'(âm mưu)',ans:'阴谋'},
  {pre:'小偷刚把手伸进别人的包里，就被警察',blank:'当场',post:'抓住了。',hint:'(ngay tại chỗ)',ans:'当场'},
  {pre:'这一',blank:'事件',post:'引起了社会的广泛关注，成了当天的头条新闻。',hint:'(vụ việc)',ans:'事件'},
  {pre:'窗外的大树',blank:'遮挡',post:'了阳光，屋子里一整天都很凉快。',hint:'(che)',ans:'遮挡'},
  {pre:'这次学校篮球赛，体育老师亲自当',blank:'裁判',post:'。',hint:'(trọng tài)',ans:'裁判'},
  {pre:'毕业以后，我和几个老同学的联系就',blank:'中断',post:'了。',hint:'(gián đoạn)',ans:'中断'},
  {pre:'一个孩子突然跑到路中间，司机赶紧',blank:'刹车',post:'，才没有撞上。',hint:'(phanh xe)',ans:'刹车'},
  {pre:'刺猬遇到危险时会缩成一团，这是它的',blank:'防御',post:'本能。',hint:'(phòng vệ)',ans:'防御'},
  {pre:'考试前一定要调整好',blank:'心态',post:'，太紧张反而发挥不好。',hint:'(tâm lý)',ans:'心态'},
  {pre:'你想考上好大学，却天天熬夜玩儿游戏，这不是',blank:'南辕北辙',post:'吗？',hint:'(làm ngược với mục đích)',ans:'南辕北辙'},
  {pre:'做实验要',blank:'注重',post:'细节，一点儿误差都可能导致失败。',hint:'(chú trọng)',ans:'注重'},
  {pre:'两个队打了九十分钟，还是不分',blank:'胜负',post:'，只好踢点球。',hint:'(thắng thua)',ans:'胜负'},
  {pre:'毕业以后，他才发现现实比想象的',blank:'残酷',post:'得多。',hint:'(khắc nghiệt)',ans:'残酷'},
  {pre:'中学生能不能带手机进校园，一直是个有',blank:'争议',post:'的问题。',hint:'(tranh cãi)',ans:'争议'},
  {pre:'爷爷年轻时上过战场，常说“',blank:'打仗',post:'”是世界上最残酷的事。',hint:'(đánh trận)',ans:'打仗'},
  {pre:'邻居之间有了纠纷，最好先商量，别动不动就',blank:'打官司',post:'。',hint:'(kiện nhau)',ans:'打官司'},
  {pre:'',blank:'守护',post:'地球，就是守护我们共同的家园。',hint:'(bảo vệ, canh giữ)',ans:'守护'},
  {pre:'这种虐待动物的行为受到了社会的强烈',blank:'谴责',post:'。',hint:'(lên án)',ans:'谴责'},
  {pre:'医生说，长期熬夜是很多疾病的“',blank:'凶手',post:'”。',hint:'(thủ phạm, hung thủ)',ans:'凶手'},
  {pre:'钱不是我拿的，你可别',blank:'冤枉',post:'好人！',hint:'(đổ oan)',ans:'冤枉'},
  {pre:'事实摆在眼前，你再',blank:'辩解',post:'也没有用。',hint:'(bào chữa)',ans:'辩解'},
  {pre:'我正在复习，他却把音乐开得那么大，简直是',blank:'成心',post:'捣乱。',hint:'(cố tình)',ans:'成心'},
  {pre:'他考上了名牌大学，这完全在老师的',blank:'意料',post:'之中。',hint:'(dự liệu)',ans:'意料'},
  {pre:'他工作忙，',blank:'频繁',post:'出差，一个月在家住不了几天。',hint:'(liên tục, thường xuyên)',ans:'频繁'},
  {pre:'为了保证',blank:'航空',post:'安全，乘客不能带打火机上飞机。',hint:'(hàng không)',ans:'航空'},
  {pre:'只因为一时',blank:'大意',post:'，他把“己”写成了“已”，丢了两分。',hint:'(sơ ý)',ans:'大意'},
  {pre:'一个人最大的',blank:'悲哀',post:'，是连自己想要什么都不知道。',hint:'(nỗi buồn, bi ai)',ans:'悲哀'},
  {pre:'为了',blank:'主办',post:'奥运会，这座城市修建了很多新体育馆。',hint:'(đăng cai)',ans:'主办'},
  {pre:'这是我',blank:'特意',post:'为你准备的房间，知道你换了地方睡不好觉。',hint:'(đặc biệt, cất công)',ans:'特意'},
  {pre:'气象台发出了台风',blank:'警告',post:'，提醒市民不要出门。',hint:'(cảnh báo)',ans:'警告'},
  {pre:'他只顾着赶进度，',blank:'疏忽',post:'了安全问题。',hint:'(lơ là, bỏ sót)',ans:'疏忽'},
  {pre:'高三了，你应该把学习的',blank:'重心',post:'放在复习上。',hint:'(trọng tâm)',ans:'重心'},
  {pre:'明天要面试，我得把衬衫',blank:'熨',post:'一下。',hint:'(là, ủi)',ans:'熨'},
  {pre:'弟弟摔了一跤，膝盖',blank:'磕',post:'破了，流了不少血。',hint:'(va, đập)',ans:'磕'},
  {pre:'北方的冬天太干燥了，我的',blank:'嘴唇',post:'都裂了。',hint:'(môi)',ans:'嘴唇'},
  {pre:'孩子',blank:'拽',post:'着妈妈的衣服，非要买那个玩具。',hint:'(níu, kéo)',ans:'拽'},
  {pre:'他考了满分，高兴得在走廊里跑，结果',blank:'乐极生悲',post:'，把腿摔伤了。',hint:'(vui quá hoá buồn)',ans:'乐极生悲'},
  {pre:'电脑突然死机，写了半天的作文全没了，我',blank:'恼火',post:'极了。',hint:'(bực tức)',ans:'恼火'},
  {pre:'公司本来就亏损严重，又遇上了金融危机，更是',blank:'雪上加霜',post:'。',hint:'(hoạ vô đơn chí)',ans:'雪上加霜'},
  {pre:'为了不上学，他竟然编了一个',blank:'荒唐',post:'的理由。',hint:'(vô lý, hoang đường)',ans:'荒唐'},
  {pre:'医院规定，护士上班时不能留长',blank:'指甲',post:'。',hint:'(móng tay)',ans:'指甲'},
  {pre:'伤口如果',blank:'处置',post:'不当，很容易感染。',hint:'(xử lý)',ans:'处置'},
  {pre:'邻居家在装修，',blank:'电钻',post:'的声音一大早就把我吵醒了。',hint:'(máy khoan điện)',ans:'电钻'},
  {pre:'这场大雨使农民',blank:'遭受',post:'了巨大的损失。',hint:'(chịu, bị)',ans:'遭受'},
  {pre:'和大家的努力比起来，我的贡献',blank:'微不足道',post:'。',hint:'(nhỏ nhặt không đáng kể)',ans:'微不足道'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (紧缩句 · 特意 · 比拟) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['想赢球','也','不能','置猫头鹰的生命','于不顾','。'],ans:'想赢球也不能置猫头鹰的生命于不顾。',audio:'想赢球也不能置猫头鹰的生命于不顾。'},
  {words:['她','一','回来','我','就','告诉你','。'],ans:'她一回来我就告诉你。',audio:'她一回来我就告诉你。'},
  {words:['你','不说','我','也','能知道','。'],ans:'你不说我也能知道。',audio:'你不说我也能知道。'},
  {words:['主办方','特意','做了','警示牌','，','警告运动员','不要在球门里训练','。'],ans:'主办方特意做了警示牌，警告运动员不要在球门里训练。',audio:'主办方特意做了警示牌，警告运动员不要在球门里训练。'},
  {words:['这是','我','特意','为你','准备的','房间','。'],ans:'这是我特意为你准备的房间。',audio:'这是我特意为你准备的房间。'},
  {words:['为了','完成这次采访','，','我','特意','查阅了','被采访者的资料','。'],ans:'为了完成这次采访，我特意查阅了被采访者的资料。',audio:'为了完成这次采访，我特意查阅了被采访者的资料。'},
  {words:['雨停了','，','天晴了','，','太阳','露出了','笑脸','。'],ans:'雨停了，天晴了，太阳露出了笑脸。',audio:'雨停了，天晴了，太阳露出了笑脸。'},
  {words:['花儿','羞答答地','垂下','头来','。'],ans:'花儿羞答答地垂下头来。',audio:'花儿羞答答地垂下头来。'},
  {words:['门将','当场','倒地','，','身受重伤','，','经久不愈','。'],ans:'门将当场倒地，身受重伤，经久不愈。',audio:'门将当场倒地，身受重伤，经久不愈。'},
  {words:['这种','只想赢球的','心态','和比赛精神','南辕北辙','。'],ans:'这种只想赢球的心态和比赛精神南辕北辙。',audio:'这种只想赢球的心态和比赛精神南辕北辙。'},
  {words:['更让他','恼火的是','，','主裁判','还给了他','一张黄牌','。'],ans:'更让他恼火的是，主裁判还给了他一张黄牌。',audio:'更让他恼火的是，主裁判还给了他一张黄牌。'},
  {words:['被称为“凶手”的球员','还是','为自己的行为','诚恳','道歉','了','。'],ans:'被称为“凶手”的球员还是为自己的行为诚恳道歉了。',audio:'被称为“凶手”的球员还是为自己的行为诚恳道歉了。'},
  {words:['其实','离奇伤害','也','紧紧跟随着','我们每一个人','。'],ans:'其实离奇伤害也紧紧跟随着我们每一个人。',audio:'其实离奇伤害也紧紧跟随着我们每一个人。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'明星们受伤，有时竟荒谬得不可思议，这些遭遇真是十分____。',opts:['频繁','残酷','微不足道','离奇'],ans:3,
   exp:'Khác thường, khó tin → 离奇 (离奇的遭遇). 频繁 = thường xuyên; 残酷 = tàn khốc; 微不足道 = nhỏ nhặt không đáng kể — không hợp với "vô lý đến khó tin".'},
  {wrong:'我们之所以____体育明星，是因为他们是奋力拼搏的象征。',opts:['警告','崇拜','谴责','辩解'],ans:1,
   exp:'Ngưỡng mộ, coi là thần tượng → 崇拜. 警告 = cảnh báo; 谴责 = lên án; 辩解 = thanh minh.'},
  {wrong:'顾客在商场购物意外身亡，____竟然是我们常见的自动扶梯！',opts:['裁判','阴谋','事件','凶手'],ans:3,
   exp:'Thứ gây ra cái chết = thủ phạm → 凶手 (nghĩa bóng). 裁判 = trọng tài; 阴谋 = âm mưu; 事件 = vụ việc.'},
  {wrong:'这一事件引起了广泛的关注，大家一致____电梯生产厂家粗制滥造。',opts:['守护','崇拜','谴责','注重'],ans:2,
   exp:'Phê phán gay gắt việc làm ẩu → 谴责 (lên án). 守护 = bảo vệ; 崇拜 = tôn sùng; 注重 = chú trọng.'},
  {wrong:'虽然不是____的，但因为工作人员的疏忽而造成了一人死亡的后果。',opts:['成心','特意','大意','当场'],ans:0,
   exp:'不是成心的 = không cố ý (việc xấu). 特意 dùng cho việc tốt, bỏ tâm sức làm; 大意 = sơ ý (mâu thuẫn với 疏忽 phía sau); 当场 = tại chỗ.'},
  {wrong:'因为工作人员的疏忽，商场肯定要面临一场____。',opts:['嘴仗','胜负','官司','进攻'],ans:2,
   exp:'Gây chết người → bị kiện: 面临一场官司 (打官司). 嘴仗 = đấu khẩu; 胜负 = thắng thua; 进攻 = tấn công.'},
  {wrong:'听说我马上要回国，妈妈____准备了我爱吃的家乡菜。',opts:['故意','成心','当场','特意'],ans:3,
   exp:'Bỏ tâm sức làm việc tốt cho người khác → 特意. 故意, 成心 thường mang nghĩa xấu; 当场 = tại chỗ.'},
  {wrong:'你看见红灯亮了还不停，是____的吧！',opts:['特意','故意','专门','大意'],ans:1,
   exp:'Biết không nên mà vẫn làm → 故意 (đáp án 做一做 của sách). 特意, 专门 dùng cho việc tốt; 大意 = sơ ý (không phải "biết mà vẫn làm").'},
  {wrong:'一只猫头鹰“迫降”球场，____住了球员的视线。',opts:['遮挡','防守','防御','处置'],ans:0,
   exp:'遮挡住视线 = che khuất tầm nhìn. 防守, 防御 = phòng thủ, phòng ngự; 处置 = xử lý.'},
  {wrong:'主裁判出于保护动物的目的，决定____比赛。',opts:['冲击','中断','注重','主办'],ans:1,
   exp:'中断比赛 = tạm dừng trận đấu. 冲击 = xông lên giành; 注重 = chú trọng; 主办 = đứng ra tổ chức.'},
  {wrong:'因赛事____，航空旅行成了运动员的家常便饭。',opts:['荒唐','残酷','悲哀','频繁'],ans:3,
   exp:'Thi đấu nhiều, liên tục → 赛事频繁. Các từ còn lại không nói về số lần.'},
  {wrong:'有位运动员一时____，正好踩在了警示牌上。',opts:['冤枉','疏忽','恼火','拼搏'],ans:1,
   exp:'一时疏忽 = nhất thời lơ là. 冤枉 = oan; 恼火 = bực tức; 拼搏 = dốc sức.'},
  {wrong:'他踩在警示牌上，由于____不稳，以致扭伤了脚。',opts:['心态','中心','重心','核心'],ans:2,
   exp:'重心不稳 = mất thăng bằng (điểm cân bằng cơ thể). 心态 = tâm lý; 中心 = trung tâm; 核心 = hạt nhân.'},
  {wrong:'当时他仅仅是想从汽车里____出高尔夫球具。',opts:['熨','磕','刹','拽'],ans:3,
   exp:'拽出 = lôi ra, kéo ra. 熨 = là quần áo; 磕 = va đập; 刹 = phanh.'},
  {wrong:'还有位运动员，在折叠____衣板时肩膀受伤。',opts:['熨','拽','磕','横'],ans:0,
   exp:'熨衣板 = bàn kê để là quần áo (熨 = là, ủi).'},
  {wrong:'刚中了大奖就丢了钱包，真是____。',opts:['雪上加霜','乐极生悲','南辕北辙','聚精会神'],ans:1,
   exp:'Đang vui (trúng giải) thì gặp chuyện buồn → 乐极生悲. 雪上加霜 = đã khổ lại thêm khổ (việc trước cũng là việc xấu).'},
  {wrong:'手指受了重伤，主裁判还给了他一张黄牌，真可谓____！',opts:['乐极生悲','微不足道','雪上加霜','出人意料'],ans:2,
   exp:'Đã bị thương (xấu) lại còn bị thẻ vàng (xấu nữa) → 雪上加霜 (câu bài khoá).'},
  {wrong:'虽然在真正的医生眼里这只是个____的小手术。',opts:['微不足道','荒唐','离奇','残酷'],ans:0,
   exp:'微不足道的小手术 = tiểu phẫu không đáng kể. 荒唐, 离奇, 残酷 không hợp với "chỉ là … nhỏ".'},
  {wrong:'他的脚指甲旁边长了个血泡，他决定自己____。',opts:['辩解','遭受','处置','警告'],ans:2,
   exp:'Tự mình xử lý (vết thương) → 处置. 辩解 = thanh minh; 遭受 = chịu; 警告 = cảnh báo.'},
  {wrong:'想赢球也不能置猫头鹰的生命于不顾，这种只想赢球的____和比赛精神南辕北辙。',opts:['心态','重心','事件','胜负'],ans:0,
   exp:'只想赢球的心态 = tâm lý chỉ muốn thắng. 重心 = trọng tâm; 事件 = vụ việc; 胜负 = thắng thua.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 24 + ôn từ HSK 6 bài 1–23 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nghe tin tôi đá bóng bị va trầy đầu gối, mẹ đã cất công xin nghỉ phép, từ quê lên chăm sóc tôi.',zh:'听说我踢球时膝盖磕破了，妈妈特意请了假，从老家赶来照顾我。',py:'Tīngshuō wǒ tī qiú shí xīgài kēpò le, māma tèyì qǐngle jià, cóng lǎojiā gǎnlái zhàogù wǒ.',goiY:['磕破','特意','从……赶来'],giai:'特意 = chuyên vì việc đó mà làm, bỏ tâm sức (việc tốt); 磕破 = va trầy (bổ ngữ kết quả); 膝盖 ôn HSK 6 bài 20. Ba vế nối theo trình tự, vế 2–3 tỉnh lược chủ ngữ 妈妈.'},
  {vi:'Em không nói thầy cũng biết, lần này em thi không tốt không phải vì không biết làm, mà là vì nhất thời lơ là sơ ý.',zh:'你不说我也知道，这次没考好不是因为不会做，而是因为一时疏忽大意。',py:'Nǐ bù shuō wǒ yě zhīdào, zhè cì méi kǎohǎo bú shì yīnwèi bú huì zuò, ér shì yīnwèi yìshí shūhu dàyi.',goiY:['不说……也……','不是……而是……','疏忽','大意'],giai:'你不说我也知道 là CÂU CO (紧缩句) = 就算你不说，我也知道: bỏ 就算 và dấu phẩy, giữ 也. 不是……而是…… phủ định A, khẳng định B.'},
  {vi:'Trận này chúng ta chỉ chú trọng thắng thua mà bỏ qua sự phối hợp, kết quả thua tan tác.',zh:'这场比赛我们只注重胜负，却忽略了配合，结果输得一塌糊涂。',py:'Zhè chǎng bǐsài wǒmen zhǐ zhùzhòng shèngfù, què hūlüèle pèihé, jiéguǒ shū de yìtāhútú.',goiY:['注重','胜负','却','忽略'],giai:'只……，却…… đối lập điều chú trọng và điều bị bỏ qua; 忽略 ôn HSK 6 bài 1; 输得一塌糊涂 = thua tan tác (bổ ngữ trạng thái).'},
  {vi:'Nếu không phải tài xế phanh kịp thời, đứa trẻ băng ngang qua đường kia e là đã bị tông ngã ngay tại chỗ rồi.',zh:'要不是司机及时刹车，那个横穿马路的孩子恐怕当场就被撞倒了。',py:'Yàobúshì sījī jíshí shā chē, nàge héngchuān mǎlù de háizi kǒngpà dāngchǎng jiù bèi zhuàngdǎo le.',goiY:['要不是','刹车','横穿','当场'],giai:'要不是 + điều đã xảy ra, (就)…… + kết quả giả định trái sự thật. Không dịch "nếu không phải" thành 如果不是 ở văn cảnh này — 要不是 tự nhiên hơn.'},
  {vi:'Để nhắm tới chức vô địch, cậu ấy đã cất công mời một huấn luyện viên, ngày nào cũng luyện phòng thủ đến đêm khuya.',zh:'为了冲击冠军，他特意请了一位教练，每天练习防守到深夜。',py:'Wèile chōngjī guànjūn, tā tèyì qǐngle yí wèi jiàoliàn, měi tiān liànxí fángshǒu dào shēnyè.',goiY:['为了','冲击','特意','防守'],giai:'为了 + mục đích đặt đầu câu; 冲击冠军 = xông lên giành chức vô địch (không dịch "xung kích"); 特意 nhấn việc bỏ công vì mục đích đó.'},
  {vi:'Điều đáng buồn là, có những người vì muốn khoe khoang trên mạng mà lại tàn nhẫn ngược đãi động vật nhỏ.',zh:'令人悲哀的是，有些人为了在网上炫耀，竟然残酷地虐待小动物。',py:'Lìng rén bēi\'āi de shì, yǒuxiē rén wèile zài wǎngshàng xuànyào, jìngrán cánkù de nüèdài xiǎo dòngwù.',goiY:['令人……的是','悲哀','炫耀','残酷'],giai:'令人悲哀的是 = điều đáng buồn là (câu bài khoá); 竟然 = vậy mà (bất ngờ, trái lẽ); 炫耀 ôn HSK 6 bài 3.'},
  {vi:'Em đi muộn thường xuyên như vậy, muốn tham gia thi đấu cũng phải sửa tật này trước đã, nếu không thầy sẽ cảnh cáo phụ huynh em.',zh:'你迟到得这么频繁，想参加比赛也得先改掉这个毛病，否则老师会警告你的家长。',py:'Nǐ chídào de zhème pínfán, xiǎng cānjiā bǐsài yě děi xiān gǎidiào zhège máobing, fǒuzé lǎoshī huì jǐnggào nǐ de jiāzhǎng.',goiY:['频繁','想……也……','否则','警告'],giai:'想参加比赛也得…… là câu co (紧缩句) = 即使想参加比赛，也得……, giống 想赢球也不能…… trong bài khoá; 否则 = nếu không thì.'},
  {vi:'Rõ ràng cậu ấy không cố ý, vậy mà bị mọi người đổ oan cả buổi, cũng không có cơ hội thanh minh cho mình.',zh:'他明明不是成心的，却被大家冤枉了半天，也没有机会为自己辩解。',py:'Tā míngmíng bú shì chéngxīn de, què bèi dàjiā yuānwangle bàntiān, yě méiyǒu jīhuì wèi zìjǐ biànjiě.',goiY:['明明……却……','成心','冤枉','辩解'],giai:'明明……却…… (ôn HSK 6 bài 6) = rõ ràng … vậy mà …; 成心 = CỐ Ý (không phải "thành tâm"); 为自己辩解 = thanh minh cho mình.'},
  {vi:'Suy nghĩ của hai chúng tôi quả là trái ngược hoàn toàn: cậu ấy cho rằng chỉ cần kết quả tốt là được, còn tôi lại thấy quá trình quan trọng hơn thắng thua.',zh:'我们俩的想法简直南辕北辙：他认为只要结果好就行，我却觉得过程比胜负更重要。',py:'Wǒmen liǎ de xiǎngfǎ jiǎnzhí nányuán-běizhé: tā rènwéi zhǐyào jiéguǒ hǎo jiù xíng, wǒ què juéde guòchéng bǐ shèngfù gèng zhòngyào.',goiY:['南辕北辙','只要……就……','胜负','却'],giai:'Dấu hai chấm giải thích cho 南辕北辙; hai vế sau đối lập bằng 却; 只要……就…… điều kiện đủ; A 比 B 更 + Adj.'},
  {vi:'Cậu ấy vui quá hoá buồn trong buổi tiệc mừng công, ngã bị thương cánh tay, mà ngặt nỗi hôm sau lại chính là kỳ thi cuối kỳ, đúng là hoạ vô đơn chí.',zh:'他在庆功会上乐极生悲，摔伤了手臂，偏偏第二天就是期末考试，真可谓雪上加霜。',py:'Tā zài qìnggōnghuì shang lèjí-shēngbēi, shuāishāngle shǒubì, piānpiān dì-èr tiān jiù shì qīmò kǎoshì, zhēn kěwèi xuěshàng-jiāshuāng.',goiY:['乐极生悲','偏偏','雪上加霜'],giai:'Hai thành ngữ của bài: 乐极生悲 (đang vui thì gặp hoạ) và 雪上加霜 (hoạ chồng hoạ); 偏偏 = ngặt nỗi, trớ trêu thay (ôn HSK 6 bài 19); 真可谓 = đúng là (văn viết).'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Mỗi lần thấy ngôi sao mình hâm mộ xông lên giành huy chương, mọi người đều tin chắc rằng những vết sẹo trên người họ là dấu ấn của sự chiến đấu hết mình.',zh:'每次看到崇拜的明星冲击奖牌，大家都深信，他们身上的伤疤是奋力拼搏的标记。',py:'Měi cì kàndào chóngbài de míngxīng chōngjī jiǎngpái, dàjiā dōu shēnxìn, tāmen shēnshang de shāngbā shì fènlì pīnbó de biāojì.',goiY:['崇拜 = hâm mộ, tôn sùng','冲击奖牌 = xông lên giành huy chương','拼搏 = dốc sức chiến đấu'],giai:'冲击奖牌 không dịch "xung kích huy chương"; 标记 (ôn HSK 6 bài 17) dịch "dấu ấn" cho văn hoa hơn "ký hiệu".'},
  {vi:'Thủ môn đang tập trung cao độ phòng thủ thì một con chó bỗng lao vào sân, xộc ngang vào đầu gối anh ta.',zh:'门将正聚精会神地防守，一只狗突然冲了进来，横着冲向他的膝盖。',py:'Ménjiàng zhèng jùjīng-huìshén de fángshǒu, yì zhī gǒu tūrán chōngle jìnlái, héngzhe chōngxiàng tā de xīgài.',goiY:['聚精会神 = tập trung cao độ','防守 = phòng thủ','横着 = (lao) ngang'],giai:'正……，突然…… = đang … thì bỗng …; 横着冲向 = xộc ngang vào (từ bên sườn).'},
  {vi:'Thủ môn ngã gục ngay tại chỗ, bị thương nặng; đây là âm mưu hay là sự trùng hợp ly kỳ, không ai nói rõ được.',zh:'门将当场倒地，身受重伤，这是阴谋还是离奇的巧合，谁也说不清。',py:'Ménjiàng dāngchǎng dǎo dì, shēn shòu zhòngshāng, zhè shì yīnmóu háishi líqí de qiǎohé, shéi yě shuō bu qīng.',goiY:['当场 = ngay tại chỗ','是……还是…… = là … hay …','离奇 = ly kỳ'],giai:'Câu hỏi lựa chọn 是……还是…… làm chủ ngữ cho 谁也说不清 (không ai nói rõ được).'},
  {vi:'Một con cú mèo "hạ cánh khẩn cấp" xuống sân đã che khuất tầm nhìn của cầu thủ, trọng tài chính quyết định tạm dừng trận đấu.',zh:'一只“迫降”球场的猫头鹰遮挡住了球员的视线，主裁判决定中断比赛。',py:'Yì zhī “pòjiàng” qiúchǎng de māotóuyīng zhēdǎng zhùle qiúyuán de shìxiàn, zhǔ cáipàn juédìng zhōngduàn bǐsài.',goiY:['迫降 = hạ cánh khẩn cấp (phép tu từ)','遮挡 = che khuất','中断 = tạm dừng'],giai:'"迫降" vốn dùng cho máy bay — dùng cho con cú là phép 比拟 (coi vật này như vật khác), nên giữ ngoặc kép khi dịch. 裁判 = trọng tài, không phải "tài phán".'},
  {vi:'Có người cho rằng dù muốn thắng cũng không thể bất chấp sinh mạng của động vật, tâm lý như vậy hoàn toàn đi ngược tinh thần thi đấu.',zh:'有人认为想赢球也不能不顾动物的生命，这种心态和比赛精神南辕北辙。',py:'Yǒu rén rènwéi xiǎng yíng qiú yě bù néng búgù dòngwù de shēngmìng, zhè zhǒng xīntài hé bǐsài jīngshén nányuán-běizhé.',goiY:['想……也不能…… = dù muốn … cũng không thể …','心态 = tâm lý','南辕北辙 = hoàn toàn trái ngược'],giai:'想赢球也不能…… là câu co (紧缩句) = 即使想赢球，也不能……: khi dịch phải thêm "dù" cho rõ quan hệ nhượng bộ.'},
  {vi:'Cầu thủ bị gọi là "hung thủ" tuy kêu oan ầm ĩ nhưng vẫn thành khẩn xin lỗi, đồng thời thanh minh rằng mình không cố ý.',zh:'被称为“凶手”的球员虽然大呼冤枉，但还是诚恳地道了歉，并为自己辩解说不是成心的。',py:'Bèi chēngwéi “xiōngshǒu” de qiúyuán suīrán dà hū yuānwang, dàn háishi chéngkěn de dàole qiàn, bìng wèi zìjǐ biànjiě shuō bú shì chéngxīn de.',goiY:['虽然……但还是……','冤枉 = oan','辩解 = thanh minh','成心 = cố ý'],giai:'成心 là "cố ý", tuyệt đối không dịch "thành tâm"; 并 nối hành động thứ hai (văn viết) → "đồng thời".'},
  {vi:'Vì lịch thi đấu dày đặc, đi máy bay đã thành chuyện cơm bữa của vận động viên, đến cả thẻ lên máy bay cũng có thể làm người ta bị thương.',zh:'因为赛事频繁，航空旅行成了运动员的家常便饭，连登机牌都可能伤人。',py:'Yīnwèi sàishì pínfán, hángkōng lǚxíng chéngle yùndòngyuán de jiācháng biànfàn, lián dēngjīpái dōu kěnéng shāng rén.',goiY:['频繁 = dày đặc, thường xuyên','家常便饭 = chuyện cơm bữa','连……都…… = đến … cũng'],giai:'航空旅行 dịch gọn "đi máy bay"; 家常便饭 = chuyện cơm bữa (thành ngữ tương đương trong tiếng Việt).'},
  {vi:'Ban tổ chức đã cất công làm biển cảnh báo, vậy mà có một vận động viên nhất thời lơ là, giẫm đúng lên đó, kết quả bị trẹo chân.',zh:'主办方特意做了警示牌，可是有位运动员一时疏忽，正好踩了上去，结果扭伤了脚。',py:'Zhǔbànfāng tèyì zuòle jǐngshìpái, kěshì yǒu wèi yùndòngyuán yìshí shūhu, zhènghǎo cǎile shàngqù, jiéguǒ niǔshāngle jiǎo.',goiY:['特意 = cất công','一时疏忽 = nhất thời lơ là','结果 = kết quả là'],giai:'Sự trớ trêu: biển cảnh báo làm ra để tránh tai nạn lại gây tai nạn → 可是 dịch "vậy mà". 主办方 = ban tổ chức.'},
  {vi:'Anh ta ghi bàn xong thì vui quá hoá buồn, ngón tay bị thương nặng; điều khiến anh ta bực hơn nữa là trọng tài còn rút cho anh ta một thẻ vàng.',zh:'他进球后乐极生悲，手指受了重伤，更让他恼火的是，裁判还给了他一张黄牌。',py:'Tā jìn qiú hòu lèjí-shēngbēi, shǒuzhǐ shòule zhòngshāng, gèng ràng tā nǎohuǒ de shì, cáipàn hái gěile tā yì zhāng huángpái.',goiY:['乐极生悲 = vui quá hoá buồn','更让……恼火的是 = điều khiến … bực hơn là'],giai:'更让……的是…… là cấu trúc tăng tiến: sau cái xấu thứ nhất nêu cái xấu hơn; 给……一张黄牌 = rút thẻ vàng cho ai.'},
  {vi:'Lố bịch nhất là có người dùng máy khoan điện xử lý bọng máu ở chân, kết quả phải chịu đau đớn khó tưởng tượng, xem ra bác sĩ không phải ai muốn làm là làm được.',zh:'最荒唐的是有人用电钻处置脚上的血泡，结果遭受了难以想象的痛苦，可见医生不是谁想当就能当的。',py:'Zuì huāngtáng de shì yǒu rén yòng diànzuàn chǔzhì jiǎo shang de xuèpào, jiéguǒ zāoshòule nányǐ xiǎngxiàng de tòngkǔ, kějiàn yīshēng bú shì shéi xiǎng dāng jiù néng dāng de.',goiY:['荒唐 = lố bịch','处置 = xử lý','遭受 = chịu','谁想……就能…… = ai muốn … là …'],giai:'谁想当就能当 cũng là câu co (紧缩句) = 无论谁想当，都能当; 可见 = có thể thấy, xem ra (rút ra kết luận).'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 49): viết bài 运动中的意外受伤, ≥ 400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'这篇课文给我们讲述了体育明星们遇到的各种离奇遭遇，他们的意外受伤有动物造成的、有粗心大意造成的、有乐极生悲造成的……你在运动中是否也遇到过意外受伤呢？比如：摔伤、扭伤、踢伤、拉伤、撞伤等，或者你听说过像课文中所说的那些离奇的意外受伤吗？请以“运动中的意外受伤”为题写一篇文章，字数不少于400字。',
  prompt:'Bài khoá kể cho chúng ta nghe những cảnh ngộ ly kỳ mà các ngôi sao thể thao gặp phải: chấn thương bất ngờ của họ có cái do động vật gây ra, có cái do sơ ý cẩu thả, có cái do vui quá hoá buồn… Khi chơi thể thao, em đã từng bị thương bất ngờ chưa? Ví dụ: ngã, trẹo, bị đá trúng, căng cơ, va đập…; hoặc em có từng nghe nói về những chấn thương ly kỳ giống như trong bài khoá không? Hãy viết một bài văn với nhan đề "Chấn thương bất ngờ khi chơi thể thao", không ít hơn 400 chữ.',
  dan:[
    {hoi:'你在运动中是否也遇到过意外受伤呢？',goiY:'比如：摔伤、扭伤、踢伤、拉伤、撞伤等（写清楚时间、地点、在做什么运动）'},
    {hoi:'或者你听说过像课文中所说的那些离奇的意外受伤吗？',goiY:'动物造成的、粗心大意造成的、乐极生悲造成的……'},
    {hoi:'受伤是怎么发生的？结果怎么样？（补充提示）',goiY:'①起因：疏忽、大意、热身不够……　②经过：当场……　③结果：遭受……的痛苦，更让我恼火的是……'},
    {hoi:'你从这次意外中得到了什么教训？（补充提示）',goiY:'看来……；运动前要……；千万不能……；只要……就……'}
  ],
  tuNen:['意料','疏忽','大意','当场','特意','重心','恼火','乐极生悲','雪上加霜','微不足道'],
  cauTruc:[
    {ten:'说起……，我就会想起……', nhan:'说起', vd:'说起运动中的意外受伤，我就会想起去年秋天的那场篮球赛。', khi:'MỞ BÀI: dẫn vào đề tài bằng một kỷ niệm cụ thể (thời gian, môn thể thao).'},
    {ten:'为了……，……特意……', nhan:'特意', vd:'为了冲击冠军，我们班每天放学后都特意留下来练习。', khi:'Kể bối cảnh: mục đích và sự chuẩn bị trước khi xảy ra chuyện.'},
    {ten:'没想到乐极生悲，……一时疏忽……', nhan:'乐极生悲', vd:'我高兴得跳了起来，没想到乐极生悲，落地时一时疏忽踩在了别人的脚上。', khi:'Bước ngoặt: đang vui thì gặp chuyện (kể diễn biến).'},
    {ten:'由于……，当场……', nhan:'由于', vd:'由于重心不稳，我当场就摔倒在地。', khi:'Nêu nguyên nhân trực tiếp và hậu quả tức thì.'},
    {ten:'更让我恼火的是……，真可谓雪上加霜', nhan:'更让', vd:'更让我恼火的是，一个星期后就是体育考试，真可谓雪上加霜。', khi:'Tăng tiến: nêu hậu quả thứ hai tệ hơn (bắt chước câu bài khoá).'},
    {ten:'这件事完全出乎我的意料……没想到……', nhan:'出乎意料', vd:'这件事完全出乎我的意料，没想到一个微不足道的小动作也能让人受伤。', khi:'Suy nghĩ, bình luận về sự việc.'},
    {ten:'看来……，只要……就……', nhan:'看来', vd:'看来，意外伤害就在我们身边，只要注意安全，很多意外都可以避免。', khi:'KẾT BÀI: rút ra bài học, lời khuyên.'}
  ],
  checklist:[
    'Bài viết có nhan đề 运动中的意外受伤 và trả lời được câu hỏi của đề: em đã từng bị thương khi chơi thể thao chưa / từng nghe chuyện chấn thương ly kỳ nào chưa?',
    'Phần kể chuyện có đủ thời gian, địa điểm, môn thể thao, nguyên nhân (疏忽 / 大意 / 乐极生悲…), diễn biến và kết quả chưa?',
    'Có dùng được ít nhất 6 từ của bài (意料, 疏忽, 大意, 当场, 特意, 重心, 恼火, 乐极生悲, 雪上加霜, 微不足道…) đúng nghĩa không?',
    'Có dùng 特意 đúng (việc tốt, bỏ công) và không nhầm với 故意; có ít nhất một câu co (紧缩句) như 想……也…… / 一……就…… không?',
    'Phần kết có rút ra bài học; toàn bài không ít hơn 400 chữ Hán, chia 3–5 đoạn rõ ràng chưa?'
  ],
  model:{
    zh:'说起运动中的意外受伤，我就会想起去年秋天的那场篮球赛。那是学校一年一度的篮球比赛，为了冲击冠军，我们班每天放学后都特意留下来练习一个小时。比赛那天，双方打得非常激烈。下半场还剩五分钟的时候，我终于投进了一个三分球。我高兴得跳了起来，没想到乐极生悲，落地时一时疏忽，踩在了对方队员的脚上，由于重心不稳，当场就摔倒在地。当时我只觉得脚腕一阵剧痛，怎么也站不起来。老师和同学们赶紧把我送到了医院，医生说是扭伤，至少要休息一个月。更让我恼火的是，一个星期后就是期末体育考试，我只能坐在旁边看着同学们跑步，真可谓雪上加霜。这件事完全出乎我的意料。我本来以为，运动受伤都是因为动作太难或者对手太凶，没想到一个微不足道的小动作，也能让人遭受这么多痛苦。后来，我读到了一篇关于体育明星离奇遭遇的文章：有的运动员被登机牌击中了眼睛，有的在折叠熨衣板时肩膀受了伤。我这才明白，受伤的原因往往不在别人，而在于我们自己的粗心大意。看来，意外伤害就在我们身边。运动前要做好热身，运动中千万不能大意，只要注意安全，很多意外都是可以避免的。',
    py:'Shuōqǐ yùndòng zhōng de yìwài shòushāng, wǒ jiù huì xiǎngqǐ qùnián qiūtiān de nà chǎng lánqiú sài. Nà shì xuéxiào yì nián yí dù de lánqiú bǐsài, wèile chōngjī guànjūn, wǒmen bān měi tiān fàngxué hòu dōu tèyì liú xiàlái liànxí yí ge xiǎoshí. Bǐsài nà tiān, shuāngfāng dǎ de fēicháng jīliè. Xià bàn chǎng hái shèng wǔ fēnzhōng de shíhou, wǒ zhōngyú tóujìnle yí ge sānfēnqiú. Wǒ gāoxìng de tiàole qǐlái, méi xiǎngdào lèjí-shēngbēi, luòdì shí yìshí shūhu, cǎi zàile duìfāng duìyuán de jiǎo shang, yóuyú zhòngxīn bù wěn, dāngchǎng jiù shuāidǎo zài dì. Dāngshí wǒ zhǐ juéde jiǎowàn yí zhèn jùtòng, zěnme yě zhàn bu qǐlái. Lǎoshī hé tóngxuémen gǎnjǐn bǎ wǒ sòngdàole yīyuàn, yīshēng shuō shì niǔshāng, zhìshǎo yào xiūxi yí ge yuè. Gèng ràng wǒ nǎohuǒ de shì, yí ge xīngqī hòu jiù shì qīmò tǐyù kǎoshì, wǒ zhǐ néng zuò zài pángbiān kànzhe tóngxuémen pǎobù, zhēn kěwèi xuěshàng-jiāshuāng. Zhè jiàn shì wánquán chūhū wǒ de yìliào. Wǒ běnlái yǐwéi, yùndòng shòushāng dōu shì yīnwèi dòngzuò tài nán huòzhě duìshǒu tài xiōng, méi xiǎngdào yí ge wēibùzúdào de xiǎo dòngzuò, yě néng ràng rén zāoshòu zhème duō tòngkǔ. Hòulái, wǒ dúdàole yì piān guānyú tǐyù míngxīng líqí zāoyù de wénzhāng: yǒude yùndòngyuán bèi dēngjīpái jīzhòngle yǎnjing, yǒude zài zhédié yùnyībǎn shí jiānbǎng shòule shāng. Wǒ zhè cái míngbai, shòushāng de yuányīn wǎngwǎng bú zài biérén, ér zàiyú wǒmen zìjǐ de cūxīn dàyi. Kànlái, yìwài shānghài jiù zài wǒmen shēnbiān. Yùndòng qián yào zuòhǎo rèshēn, yùndòng zhōng qiānwàn bù néng dàyi, zhǐyào zhùyì ānquán, hěn duō yìwài dōu shì kěyǐ bìmiǎn de.',
    vn:'Nói đến chấn thương bất ngờ khi chơi thể thao, tôi lại nhớ tới trận bóng rổ mùa thu năm ngoái. Đó là giải bóng rổ thường niên của trường; để nhắm tới chức vô địch, lớp tôi ngày nào tan học cũng cất công ở lại tập thêm một tiếng. Hôm thi đấu, hai đội chơi rất quyết liệt. Khi hiệp hai chỉ còn năm phút, cuối cùng tôi cũng ném vào được một quả ba điểm. Tôi mừng đến nhảy cẫng lên, không ngờ vui quá hoá buồn: lúc tiếp đất, nhất thời lơ là, tôi giẫm lên chân cầu thủ đội bạn, do mất thăng bằng nên ngã lăn ra sân ngay tại chỗ. Lúc đó tôi chỉ thấy cổ chân đau nhói, làm thế nào cũng không đứng dậy nổi. Thầy cô và các bạn vội đưa tôi đến bệnh viện, bác sĩ nói là bị trẹo, ít nhất phải nghỉ một tháng. Điều khiến tôi bực hơn nữa là một tuần sau chính là kỳ thi thể dục cuối kỳ, tôi chỉ có thể ngồi bên cạnh nhìn các bạn chạy, đúng là hoạ vô đơn chí. Chuyện này hoàn toàn nằm ngoài dự liệu của tôi. Tôi vốn tưởng rằng chấn thương khi chơi thể thao đều do động tác quá khó hoặc đối thủ quá hung hăng, không ngờ một động tác nhỏ nhặt không đáng kể cũng có thể khiến người ta chịu nhiều đau đớn đến vậy. Về sau, tôi đọc được một bài viết về những cảnh ngộ ly kỳ của các ngôi sao thể thao: có vận động viên bị thẻ lên máy bay đập trúng mắt, có người bị thương ở vai khi gấp bàn kê là quần áo. Lúc đó tôi mới hiểu ra, nguyên nhân bị thương thường không nằm ở người khác, mà nằm ở sự sơ ý cẩu thả của chính chúng ta. Xem ra, tai nạn bất ngờ luôn ở ngay bên cạnh chúng ta. Trước khi vận động phải khởi động kỹ, khi vận động tuyệt đối không được chủ quan; chỉ cần chú ý an toàn thì rất nhiều tai nạn đều có thể tránh được.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng. Bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 离奇 · 聚精会神 · 当场 · 遮挡 · 中断 · 频繁 · 疏忽 · 特意 · 乐极生悲 · 雪上加霜 · 荒唐 · 处置.',
  questions:[
    {q_zh:'动物造成的伤害',
     q_vn:'Chấn thương do động vật gây ra',
     hint:'①狗造成的伤害　②猫头鹰事件',
     sample:'第一个例子是一名足球门将。他正聚精会神地防守，一只狗以火箭般的速度冲了进来，横着冲向他的膝盖，他当场倒地，最后竟然告别了心爱的职业。第二个是猫头鹰事件：一只猫头鹰遮挡住了球员的视线，裁判决定中断比赛，可是一名球员刹不住车，把它踢死了，这件事引起了广泛的争议。',
     sample_vn:'Ví dụ thứ nhất là một thủ môn bóng đá. Anh ta đang tập trung phòng thủ thì một con chó lao vào với tốc độ tên lửa, xộc ngang vào đầu gối anh ta; anh ta ngã gục tại chỗ, cuối cùng phải từ giã sự nghiệp mình yêu. Ví dụ thứ hai là vụ con cú mèo: con cú che khuất tầm nhìn của cầu thủ, trọng tài quyết định tạm dừng trận, nhưng một cầu thủ không kịp dừng lại, đá chết nó; chuyện này gây tranh cãi rộng rãi.',
     note:'Hai ý ①② — mỗi ý kể theo trình tự 起因 → 经过 → 结果; dùng 当场, 中断, 刹不住车.'},
    {q_zh:'出人意料的伤害',
     q_vn:'Chấn thương nằm ngoài dự liệu',
     hint:'登机牌造成的伤害',
     sample:'因为赛事频繁，坐飞机成了运动员的家常便饭。谁也没想到，小小的登机牌也会成为凶器：曾经有运动员在机场被登机牌击中了眼睛，并因此错过了部分比赛。',
     sample_vn:'Vì lịch thi đấu dày đặc, đi máy bay thành chuyện cơm bữa của vận động viên. Không ai ngờ tấm thẻ lên máy bay nhỏ xíu lại trở thành hung khí: từng có vận động viên bị thẻ lên máy bay đập trúng mắt ở sân bay, và vì thế lỡ mất một phần các trận đấu.',
     note:'Nêu nguyên nhân bằng 因为赛事频繁; nhấn sự bất ngờ bằng 谁也没想到 / 出人意料.'},
    {q_zh:'粗心大意造成的伤害',
     q_vn:'Chấn thương do sơ ý cẩu thả',
     hint:'①警示牌　②熨衣板　③高尔夫球具',
     sample:'主办方特意做了警示牌，可是有位运动员一时疏忽，踩在了警示牌上，由于重心不稳，扭伤了脚。还有一位运动员在折叠熨衣板时肩膀受了伤。某国国脚想从汽车里拽出高尔夫球具，结果不仅磕破了嘴唇，还磕掉了门牙。',
     sample_vn:'Ban tổ chức cất công làm biển cảnh báo, nhưng có một vận động viên nhất thời lơ là, giẫm lên tấm biển, do mất thăng bằng nên trẹo chân. Còn một vận động viên bị thương ở vai khi gấp bàn kê là quần áo. Một tuyển thủ quốc gia muốn lôi bộ gậy golf ra khỏi ô tô, kết quả không chỉ va rách môi mà còn gãy cả răng cửa.',
     note:'Ba ý ①②③ — mỗi ý một câu; dùng 特意, 一时疏忽, 由于……, 不仅……还…….'},
    {q_zh:'乐极生悲造成的伤害',
     q_vn:'Chấn thương do vui quá hoá buồn',
     hint:'戒指挂在围栏上',
     sample:'有一位球员打进一球后，冲到观众席和球迷一起庆祝，结果结婚戒指连同手指一起挂在了围栏上，手指受了重伤。更让他恼火的是，主裁判还给了他一张黄牌，真可谓雪上加霜。',
     sample_vn:'Có một cầu thủ sau khi ghi bàn lao lên khán đài ăn mừng cùng cổ động viên, kết quả nhẫn cưới cùng ngón tay mắc vào hàng rào, ngón tay bị thương nặng. Điều khiến anh ta bực hơn là trọng tài chính còn rút cho anh ta một thẻ vàng, đúng là hoạ vô đơn chí.',
     note:'结果 dẫn ra kết quả xấu; tăng tiến bằng 更让他恼火的是……，真可谓雪上加霜.'},
    {q_zh:'最荒唐的意外伤害',
     q_vn:'Chấn thương bất ngờ lố bịch nhất',
     hint:'用电钻处置血泡',
     sample:'最荒唐的是一位国脚。他的脚指甲旁边长了个血泡，他决定自己处置，最后竟然选了电钻。由于用力过猛，他把脚弄破了，以致感染，遭受了难以想象的痛苦。其实在医生眼里，这只是个微不足道的小手术。',
     sample_vn:'Lố bịch nhất là một tuyển thủ quốc gia. Bên cạnh móng chân anh ta mọc một cái bọng máu, anh ta quyết định tự xử lý, cuối cùng lại chọn máy khoan điện. Do dùng lực quá mạnh, anh ta làm rách chân, đến nỗi nhiễm trùng, chịu đau đớn khó tưởng tượng. Thật ra trong mắt bác sĩ, đây chỉ là một tiểu phẫu không đáng kể.',
     note:'竟然 nhấn sự bất ngờ; 由于……，以致…… nguyên nhân → hậu quả xấu; kết bằng 微不足道.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 24.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 24',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你的腿怎么了？走路一瘸一拐的。'},
            {sp:'男',zh:'别提了，昨天打篮球时一时疏忽，被人撞倒了，当场就站不起来了。'}],
     q:'男的腿为什么受伤了？',qvn:'Vì sao chân người đàn ông bị thương?',
     opts:['跑步时摔倒了','骑车时刹不住车','打篮球时被人撞倒了','被狗咬了'],ans:2,
     why:'打篮球时一时疏忽，被人撞倒了 → bị người khác va ngã khi chơi bóng rổ. 瘸 ôn HSK 6 bài 20.',
     words:['疏忽','当场']},

    {n:2,
     lines:[{sp:'男',zh:'昨晚的决赛你看了吗？'},
            {sp:'女',zh:'看了，两个队一直不分胜负，直到最后一分钟才进了一个球，真是出人意料。'}],
     q:'关于这场决赛，可以知道什么？',qvn:'Về trận chung kết này, có thể biết điều gì?',
     opts:['最后一分钟才分出胜负','比赛被中断了','女的没有看','两队比分差距很大'],ans:0,
     why:'一直不分胜负，直到最后一分钟才进了一个球 → đến phút cuối mới phân thắng bại. Không có chi tiết trận đấu bị gián đoạn.',
     words:['胜负','意料']},

    {n:3,
     lines:[{sp:'女',zh:'你怎么又把我的杯子打碎了？'},
            {sp:'男',zh:'对不起，我真不是成心的，刚才拿书的时候没注意，碰了一下就掉了。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['杯子不是他打碎的','他是特意打碎的','他会买一个新杯子','他不是故意的'],ans:3,
     why:'我真不是成心的 = tôi thật sự không cố ý (成心 = 故意). Anh ta thừa nhận làm vỡ nên "không phải anh ta" sai.',
     words:['成心']},

    {n:4,
     lines:[{sp:'男',zh:'听说你为了看我比赛，特意从外地赶回来了？'},
            {sp:'女',zh:'是啊，你第一次参加全国比赛，我怎么能不来给你加油呢？'}],
     q:'女的为什么回来？',qvn:'Vì sao người phụ nữ quay về?',
     opts:['回来出差','为了看男的比赛','她要参加全国比赛','家里有急事'],ans:1,
     why:'为了看我比赛，特意从外地赶回来 — 特意 = cất công, chuyên vì việc đó. Người thi đấu là người đàn ông.',
     words:['特意']},

    {n:5,
     lines:[{sp:'女',zh:'小王进球以后太激动了，一下子跳到了围栏上。'},
            {sp:'男',zh:'结果乐极生悲，把脚扭伤了，裁判还给了他一张黄牌，真是雪上加霜。'}],
     q:'小王怎么了？',qvn:'Tiểu Vương làm sao?',
     opts:['被罚下场了','扭伤了脚，还得了一张黄牌','打进了两个球','和裁判吵了一架'],ans:1,
     why:'把脚扭伤了，裁判还给了他一张黄牌 → trẹo chân và nhận thẻ vàng (乐极生悲 + 雪上加霜). Thẻ vàng chưa phải bị đuổi.',
     words:['乐极生悲','裁判','雪上加霜']},

    {n:6,
     lines:[{sp:'男',zh:'这个手术很复杂吧？我有点儿担心。'},
            {sp:'女',zh:'放心吧，在医生眼里这只是个微不足道的小手术，一个小时就能做完。'}],
     q:'女的认为这个手术怎么样？',qvn:'Người phụ nữ cho rằng ca phẫu thuật này thế nào?',
     opts:['非常复杂','要做好几个小时','必须去大医院做','很简单，不用担心'],ans:3,
     why:'微不足道的小手术，一个小时就能做完 → rất đơn giản. 放心吧 cũng cho thấy không cần lo.',
     words:['微不足道']},

    {n:7,
     lines:[{sp:'女',zh:'医生，这个伤口我自己回家处置一下行吗？'},
            {sp:'男',zh:'最好别，处置不当很容易感染，还是让护士帮你处理吧。'}],
     q:'男的建议怎么做？',qvn:'Người đàn ông khuyên làm thế nào?',
     opts:['让护士处理伤口','自己回家处理','不用处理','马上去大医院'],ans:0,
     why:'还是让护士帮你处理吧 → để y tá xử lý. 最好别 phủ định đề nghị tự xử lý ở nhà.',
     words:['处置']},

    {n:8,
     lines:[{sp:'男',zh:'很多人以为运动受伤都是因为动作太难，其实不少意外来自粗心大意。比如，运动前不热身，很容易拉伤肌肉；运动时注意力不集中，就可能摔伤、扭伤。专家警告说，即使是微不足道的小伤，如果处置不当，也可能留下后遗症。因此，运动前一定要做好准备活动，运动中千万不能大意。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn này chủ yếu muốn nói với chúng ta điều gì?',
     opts:['运动受伤都是因为动作太难','运动前可以不热身','运动时要注意安全，不能大意','小伤不需要处理'],ans:2,
     why:'Câu kết: 运动前一定要做好准备活动，运动中千万不能大意. Đáp án A là quan niệm sai bị bác bỏ (很多人以为……其实……).',
     words:['大意','警告','微不足道','处置']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng bàn lỡ tay làm đổ nước lên vở của em và rối rít xin lỗi. Em biết bạn không cố ý.',
     a:{sp:'Bạn cùng bàn',zh:'对不起对不起，我把水洒在你的本子上了！',vn:'Xin lỗi xin lỗi, tớ làm đổ nước lên vở của cậu rồi!'},
     need:['Dùng 成心','An ủi bạn'],
     sample:'没关系，我知道你不是成心的。擦一擦就行了，你别放在心上。',
     samplePy:'Méi guānxi, wǒ zhīdào nǐ bú shì chéngxīn de. Cā yi cā jiù xíng le, nǐ bié fàng zài xīn shang.',
     sampleVn:'Không sao, tớ biết cậu không cố ý mà. Lau đi là được, cậu đừng để bụng.',
     tip:'不是成心的 = không cố ý; 别放在心上 = đừng để bụng.'},

    {scene:'Em là đội trưởng đội bóng lớp. Trước trận, một đồng đội tỏ ra rất chủ quan.',
     a:{sp:'Đồng đội',zh:'对方去年是最后一名，这场我们肯定赢！',vn:'Đội bạn năm ngoái đứng bét, trận này chắc chắn mình thắng!'},
     need:['Dùng 大意 hoặc 疏忽','Dùng một câu co (紧缩句), vd: 再……也……'],
     sample:'对手再弱我们也不能大意，一时疏忽就可能输掉比赛。',
     samplePy:'Duìshǒu zài ruò wǒmen yě bù néng dàyi, yìshí shūhu jiù kěnéng shūdiào bǐsài.',
     sampleVn:'Đối thủ yếu đến mấy chúng ta cũng không được chủ quan, nhất thời lơ là là có thể thua trận.',
     tip:'对手再弱我们也不能大意 là câu co = 即使对手再弱，我们也不能大意 (bỏ 即使 và dấu phẩy, giữ 也).'},

    {scene:'Bà nội từ quê lên thăm, mang theo món bánh em thích mà bà tự tay làm.',
     a:{sp:'Bà nội',zh:'这是奶奶自己做的点心，你尝尝。',vn:'Đây là bánh bà tự làm đấy, cháu nếm thử đi.'},
     need:['Dùng 特意','Cảm ơn và quan tâm bà'],
     sample:'奶奶，这是您特意为我做的吗？太谢谢您了！不过您腰不好，以后别这么辛苦了。',
     samplePy:'Nǎinai, zhè shì nín tèyì wèi wǒ zuò de ma? Tài xièxie nín le! Búguò nín yāo bù hǎo, yǐhòu bié zhème xīnkǔ le.',
     sampleVn:'Bà ơi, bà làm riêng cho cháu ạ? Cháu cảm ơn bà nhiều lắm! Nhưng bà đau lưng, sau này bà đừng vất vả thế nữa.',
     tip:'特意为 + người + V (việc tốt, bỏ công) — KHÔNG dùng 故意 ở đây.'},

    {scene:'Bạn thân kể: hôm qua được điểm tuyệt đối, mừng quá nhảy cẫng lên và bị trẹo chân, mà mai lại thi chạy.',
     a:{sp:'Bạn thân',zh:'我昨天考了满分，高兴得跳了起来，结果把脚扭伤了，明天还有跑步考试……',vn:'Hôm qua tớ được điểm tuyệt đối, mừng quá nhảy cẫng lên, kết quả trẹo chân, mai lại còn thi chạy…'},
     need:['Dùng 乐极生悲 hoặc 雪上加霜','Đưa ra lời khuyên'],
     sample:'你这真是乐极生悲啊！明天还要考跑步，真是雪上加霜。你赶快去医院看看，再跟老师说明情况，申请补考吧。',
     samplePy:'Nǐ zhè zhēn shì lèjí-shēngbēi a! Míngtiān hái yào kǎo pǎobù, zhēn shì xuěshàng-jiāshuāng. Nǐ gǎnkuài qù yīyuàn kànkan, zài gēn lǎoshī shuōmíng qíngkuàng, shēnqǐng bǔkǎo ba.',
     sampleVn:'Cậu đúng là vui quá hoá buồn rồi! Mai còn thi chạy nữa, đúng là hoạ vô đơn chí. Cậu mau đi bệnh viện khám đi, rồi trình bày với thầy, xin thi bù nhé.',
     tip:'乐极生悲 (đang vui gặp hoạ) — 雪上加霜 (hoạ chồng hoạ).'},

    {scene:'Trong giờ thảo luận, một bạn nói "thi đấu chỉ cần thắng là được, cách nào cũng xong".',
     a:{sp:'Bạn cùng lớp',zh:'比赛嘛，只要能赢，用什么办法都行。',vn:'Thi đấu mà, chỉ cần thắng, dùng cách gì cũng được.'},
     need:['Dùng 注重 và 胜负','Dùng 南辕北辙 hoặc 心态'],
     sample:'我不同意。比赛不能只注重胜负，这种只想赢的心态和体育精神南辕北辙。',
     samplePy:'Wǒ bù tóngyì. Bǐsài bù néng zhǐ zhùzhòng shèngfù, zhè zhǒng zhǐ xiǎng yíng de xīntài hé tǐyù jīngshén nányuán-běizhé.',
     sampleVn:'Tớ không đồng ý. Thi đấu không thể chỉ coi trọng thắng thua, tâm lý chỉ muốn thắng như vậy hoàn toàn đi ngược tinh thần thể thao.',
     tip:'Bắt chước câu bài khoá: 这种只想赢球的心态和比赛精神南辕北辙.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Bản tin thể thao trên truyền hình đưa tin một cầu thủ bị thương.',
     a:'本场比赛第30分钟，主力前锋在一次拼抢中意外受伤，被担架抬下了场。',b:'那个踢前锋的哥们儿摔了一跤，好像挺惨的，被人抬走了。',better:'a',
     why:'Bản tin cần chính xác, trang trọng: thời điểm cụ thể, 主力前锋, 意外受伤, 担架. Câu b (哥们儿, 挺惨的) là lời kể chuyện phiếm.'},

    {scene:'Em nhắn tin hỏi thăm bạn thân vừa bị trẹo chân.',
     a:'听闻阁下足部受伤，本人深表关切，望早日康复。',b:'听说你脚扭了？疼不疼啊？明天要不要我帮你带早饭？',better:'b',
     why:'Nhắn tin bạn thân nên thân mật, cụ thể, ấm áp. Câu a (阁下, 本人, 深表关切) như công văn, rất xa cách.'},

    {scene:'Thông báo của ban tổ chức giải bóng đá gửi các vận động viên.',
     a:'大家注意啊，别在球门里瞎练，小心伤着！',b:'主办方提醒：比赛期间请勿在球门区域内训练，以免发生意外。',better:'b',
     why:'Thông báo chính thức dùng văn viết: 主办方提醒, 请勿, 区域, 以免发生意外. Câu a (瞎练, 伤着) là khẩu ngữ tuỳ tiện.'},

    {scene:'Em xin lỗi thầy chủ nhiệm vì lỡ làm hỏng máy chiếu của lớp.',
     a:'老师，对不起，我不小心把投影仪碰坏了。我不是故意的，但我愿意承担责任。',b:'哎呀，坏了就坏了，又不是我成心的，谁让它放在那儿呢。',better:'a',
     why:'Xin lỗi người trên phải thành khẩn, nhận trách nhiệm. Câu b tuy có ý "không cố ý" nhưng đổ lỗi (谁让它放在那儿), thiếu lễ phép.'},

    {scene:'Bài bình luận trên báo về vụ con cú mèo trên sân bóng.',
     a:'这一事件引发了广泛争议：赛场上是否应当为了胜负而置动物的生命于不顾？',b:'这事儿大家吵翻了天，你说为了赢球就把猫头鹰踢死，像话吗？',better:'a',
     why:'Văn bình luận dùng từ văn viết: 事件, 引发争议, 是否应当, 置……于不顾. Câu b (吵翻了天, 像话吗) là khẩu ngữ.'},

    {scene:'Em kể cho ông nội nghe chuyện cầu thủ tự dùng máy khoan điện xử lý bọng máu.',
     a:'爷爷，有个球员脚上长了个血泡，他居然自己拿电钻去弄，结果感染了，您说荒唐不荒唐？',b:'据报道，某国家队球员曾使用电动工具自行处置足部血泡，最终导致伤口感染。',better:'a',
     why:'Kể chuyện với người thân nên dùng lời tự nhiên, sinh động (居然, 您说荒唐不荒唐) nhưng vẫn lễ phép (您). Câu b là giọng bản tin.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'动物造成的伤害', cue:'①狗造成的伤害　②猫头鹰事件', words:['聚精会神','防守','火箭','横','进攻','阴谋','离奇','当场','事件','遮挡','裁判','中断','刹车','防御','心态','南辕北辙','注重','胜负','残酷','争议','打仗','打官司','守护','谴责','凶手','冤枉','辩解','成心']},
    {step:'出人意料的伤害', cue:'登机牌造成的伤害', words:['遭受','意料','频繁','航空']},
    {step:'粗心大意造成的伤害', cue:'①警示牌　②熨衣板　③高尔夫球具', words:['大意','悲哀','主办','特意','警告','疏忽','重心','熨','磕','嘴唇','拽']},
    {step:'乐极生悲造成的伤害', cue:'戒指挂在围栏上', words:['乐极生悲','恼火','裁判','雪上加霜']},
    {step:'最荒唐的意外伤害', cue:'用电钻处置血泡', words:['荒唐','指甲','处置','电钻','遭受','微不足道','离奇','疏忽','大意']}
  ],
  checklist: [
    'Kể đủ 5 ý theo đúng thứ tự bảng chưa (động vật → ngoài dự liệu → sơ ý cẩu thả → vui quá hoá buồn → lố bịch nhất)?',
    'Ý 1 có kể đủ hai chuyện ① con chó và ② con cú mèo, nhắc được cuộc tranh cãi (争议, 谴责, 打官司, 辩解) không?',
    'Ý 3 có nói đủ ba ví dụ ①②③ và dùng được 特意, 一时疏忽, 由于重心不稳 không?',
    'Ý 4 – 5 có dùng được 乐极生悲, 更让他恼火的是, 雪上加霜, 荒唐, 处置, 微不足道 không?',
    'Có kết bằng câu của bài khoá (离奇伤害……只要你疏忽、大意) hoặc câu tương tự, kể bằng LỜI MÌNH không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 45–49) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'将下列复句改为紧缩句（注释1 · 练一练）', vn:'Đổi các câu phức dưới đây thành câu co (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'即使得罪她，咱也不怕。', tu:'也', dap:'得罪她咱也不怕。',
      giai:'Bỏ liên từ 即使 và dấu phẩy, GIỮ phó từ 也 ở vế sau → câu co mang nghĩa nhượng bộ "có đắc tội với cô ta thì ta cũng chẳng sợ".'},
     {s:'就算你不说，我也能知道。', tu:'也', dap:'你不说我也能知道。',
      giai:'Bỏ 就算 và dấu phẩy, giữ 也: "cậu không nói tớ cũng biết" (nhượng bộ giả thiết).'},
     {s:'如果你不喜欢，咱们就不买。', tu:'就', dap:'要是你不喜欢就不买。',
      giai:'Đáp án sách: 要是你不喜欢就不买 — bỏ chủ ngữ 咱们 và dấu phẩy, giữ 就 nối điều kiện – kết quả. Gọn hơn nữa: 你不喜欢咱们就不买 (bỏ cả 如果 / 要是).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'根据提示用“特意”完成句子（注释2 · 练一练）', vn:'Dựa vào gợi ý, dùng 特意 hoàn thành câu (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'为了完成这次采访，＿＿。（查阅）', tu:'特意', dap:'为了完成这次采访，我特意查阅了被采访者的资料。',
      giai:'为了 nêu mục đích → 特意 + V (查阅 = tra cứu): chuyên vì cuộc phỏng vấn mà tra tư liệu.'},
     {s:'在动笔写这本书之前，＿＿。（调查）', tu:'特意', dap:'在动笔写这本书之前，我特意调查了相关数据。',
      giai:'Trước khi viết sách, cất công điều tra số liệu liên quan — việc bỏ công sức làm cho tốt → 特意.'},
     {s:'这是＿＿，知道你换了地方睡不好觉。（准备）', tu:'特意', dap:'这是我特意为你准备的房间，知道你换了地方睡不好觉。',
      giai:'特意为 + người + V + 的 + N làm định ngữ: căn phòng tôi chuẩn bị riêng cho bạn.'}
   ]},

  {kieu:'ab', de:'篇章修辞 · 修辞（2）比拟 · 练一练：指出下列哪句没有使用比拟修辞手法', vn:'Tu từ văn bản · Tu từ (2) Nhân hoá / vật hoá (比拟) · Luyện tập: chỉ ra câu nào dưới đây KHÔNG dùng phép 比拟 — đáp án theo sách',
   cau:[
     {s:'下列哪句没有使用比拟修辞手法？（＿＿）',
      opts:['（1）他故事讲得生动，孩子们竖起耳朵听得认真。','（2）啄木鸟在给树治病。','（3）太阳照进了窗子，亮得有些晃眼。'], ans:2,
      giai:'(3) chỉ miêu tả ánh nắng chiếu vào cửa sổ, chói mắt — không coi mặt trời là người hay vật khác → KHÔNG có 比拟. (1) 竖起耳朵 vốn là động tác của con vật (vểnh tai) → coi người như vật; (2) 给树治病 vốn là việc của bác sĩ → coi chim gõ kiến như người (nhân hoá).'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'进攻', chu:'攻', ds:['攻击','攻克','攻打','攻占']},
   cau:[
     {tu:'遮挡', chu:'挡', dap:['抵挡','阻挡','挡箭牌','拦挡'], them:['挡住','挡风','挡雨','挡路','挡道','挡光'],
      giai:'挡 = chặn, che, ngăn lại (抵挡 = chống đỡ, 阻挡 = ngăn cản, 拦挡 = chặn lại, 挡箭牌 = tấm lá chắn; nghĩa bóng: cái cớ).'},
     {tu:'中断', chu:'断', dap:['断裂','判断','断肠','断交'], them:['切断','打断','断绝','间断','断电','断线'],
      giai:'断 trong 中断 = đứt, cắt ngang (断裂 = gãy nứt, 断交 = cắt đứt quan hệ, 断肠 = đứt ruột — đau buồn tột độ). 判断 trong đáp án sách mang nghĩa khác của 断: phán đoán, quyết định.'},
     {tu:'注重', chu:'重', dap:['看重','着重','器重','重心'], them:['重视','尊重','偏重','侧重','敬重','珍重'],
      giai:'重 = coi trọng, xem nặng (看重 = coi trọng, 着重 = chú trọng — HSK 6 bài 21, 器重 = trọng dụng). 重心 trong đáp án sách: 重 = nặng, quan trọng (trọng tâm).'},
     {tu:'辩解', chu:'解', dap:['解释','解决','和解','解除'], them:['理解','讲解','注解','谅解','误解','图解'],
      giai:'解 = giải thích, gỡ ra (解释 = giải thích, 解决 = giải quyết, 和解 = làm hoà, 解除 = bãi bỏ — HSK 6 bài 12).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'在这位知名教授的课堂上，大家＿＿。', tu:'聚精会神', dap:'在这位知名教授的课堂上，大家聚精会神地听讲。',
      giai:'聚精会神地 + V: chăm chú nghe giảng.'},
     {s:'昨天那儿发生了一起严重的交通事故，＿＿。', tu:'当场', dap:'昨天那儿发生了一起严重的交通事故，司机当场死亡。',
      giai:'当场 + V (死亡 / 倒地): ngay tại chỗ xảy ra tai nạn.'},
     {s:'这所远近闻名的学校非常＿＿。', tu:'注重', dap:'这所远近闻名的学校非常注重学生素质教育的培养。',
      giai:'注重 + N trừu tượng (……的培养): chú trọng việc giáo dục toàn diện.'},
     {s:'听说那个孩子常被养父母虐待，大家都纷纷＿＿。', tu:'谴责', dap:'听说那个孩子常被养父母虐待，大家都纷纷谴责他们。',
      giai:'纷纷谴责 + người: lần lượt lên án (bố mẹ nuôi).'},
     {s:'在这个以精细著称的行业中，＿＿。', tu:'大意', dap:'在这个以精细著称的行业中，大意是最不能出现的错误。',
      giai:'Ngành đòi hỏi tỉ mỉ → 大意 (sơ ý) là lỗi tuyệt đối không được mắc. Ở đây 大意 làm chủ ngữ.'},
     {s:'听说我马上要回国，妈妈＿＿。', tu:'特意', dap:'听说我马上要回国，妈妈特意准备了我爱吃的家乡菜。',
      giai:'特意 + V: mẹ cất công chuẩn bị món quê — việc tốt, bỏ tâm sức.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['胜负','心态','崇拜','拼搏','冲击'],
   cau:[
     {s:'我们之所以＿＿体育明星，是因为他们是奋力＿＿的象征。比赛并不只注重＿＿，我们更看重的是运动员们在＿＿奖牌时表现出来的永不放弃的精神和良好的＿＿。',
      dap:['崇拜','拼搏','胜负','冲击','心态']}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['谴责','凶手','成心','官司','疏忽'],
   cau:[
     {s:'顾客在商场购物意外身亡，＿＿竟然是我们常见的自动扶梯！这一事件引起了广泛的关注。大家一致＿＿电梯生产厂家粗制滥造，而商场也难逃责任，虽然不是＿＿的，但因为工作人员的＿＿而造成一人死亡的后果，他们肯定要面临一场＿＿。',
      dap:['凶手','谴责','成心','疏忽','官司']}
   ]},

  {kieu:'mp', de:'请说出下列句子是如何运用比拟的', vn:'Hãy nói xem các câu dưới đây dùng phép 比拟 như thế nào (bài tập 4) — điền theo khung 把……比作…… (đáp án theo sách)',
   cau:[
     {mau:'这时，春风送来扑鼻的花香，满天的星星都在【眨眼欢笑】。', khung:'把＿＿比作＿＿。', dap:['星星','眨眼欢笑的人'],
      giai:'星星 được viết như người: biết 眨眼 (chớp mắt), 欢笑 (cười vui) → nhân hoá (把物当成人写).'},
     {mau:'不负责任、马虎大意的工作作风【必须休息】。', khung:'把＿＿比作＿＿。', dap:['工作作风','需要休息的人'],
      giai:'休息 vốn là việc của người; nói tác phong làm việc "phải nghỉ ngơi" = phải chấm dứt, dẹp bỏ → coi tác phong như người.'},
     {mau:'我到了自家的房外，我的母亲已经迎着出来了，接着便【飞出了】八岁的小女儿。', khung:'把＿＿比作＿＿。', dap:['小女儿','会飞的鸟儿'],
      giai:'飞出 vốn dùng cho chim; dùng cho đứa con gái nhỏ → coi người như vật (chim), gợi cảnh em bé ùa ra vừa nhanh vừa vui (把人当成物写).'},
     {mau:'花儿【羞答答地垂下头来】。', khung:'把＿＿比作＿＿。', dap:['花儿','害羞低头的人'],
      giai:'羞答答 (e thẹn), 垂下头 (cúi đầu) là trạng thái, động tác của người → nhân hoá bông hoa.'}
   ]}
];
