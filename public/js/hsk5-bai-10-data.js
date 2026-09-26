// ══════════════════════════════════════════
// DATA — HSK5 Bài 10: 争论的奇迹 (Kỳ tích của cuộc tranh luận)
// Unit 4 走近科学 · Nguồn: HSK标准教程5上 (tr. 92–99) + sách bài tập bài 10
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'争论',py:'zhēnglùn',pos:'Động từ',vn:'tranh luận, tranh cãi',hv:'tranh luận',em:'🗣️',lesson:10,
   explain:['Hai hay nhiều người mỗi người giữ ý của mình, cãi nhau để phân đúng sai.','Dùng được như danh từ: 一场争论 (một cuộc tranh cãi).'],
   usage:'跟/和 + người + 争论; 争论 + 问题; 争论得 + bổ ngữ (争论得脸红脖子粗). Không nói 争论他 — phải nói 跟他争论.',
   collo:['跟同学争论','争论问题','一场争论','争论得脸红脖子粗'],
   ex_zh:'两人各执一词，争论得脸红脖子粗，谁也说服不了谁。',ex_py:'Liǎng rén gè zhí yì cí, zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi.',ex_vn:'Hai người mỗi người giữ một ý, cãi nhau đến đỏ mặt tía tai, chẳng ai thuyết phục được ai.',
   exList:[
     {zh:'两人各执一词，争论得脸红脖子粗，谁也说服不了谁。',py:'Liǎng rén gè zhí yì cí, zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi.',vn:'Hai người mỗi người giữ một ý, cãi nhau đến đỏ mặt tía tai, chẳng ai thuyết phục được ai.'},
     {zh:'为了一道数学题，我跟同桌争论了半天。',py:'Wèile yí dào shùxué tí, wǒ gēn tóngzhuō zhēnglùnle bàntiān.',vn:'Vì một bài toán mà tôi tranh cãi với bạn cùng bàn cả buổi.'},
     {zh:'别争论了，我们去问问老师吧。',py:'Bié zhēnglùn le, wǒmen qù wènwen lǎoshī ba.',vn:'Đừng cãi nữa, chúng mình đi hỏi thầy đi.'}
   ],
   colloFull:[
     {zh:'跟同学争论',py:'gēn tóngxué zhēnglùn',vn:'tranh luận với bạn học'},
     {zh:'争论问题',py:'zhēnglùn wèntí',vn:'tranh luận một vấn đề'},
     {zh:'一场争论',py:'yì chǎng zhēnglùn',vn:'một cuộc tranh cãi'},
     {zh:'争论得脸红脖子粗',py:'zhēnglùn de liǎn hóng bózi cū',vn:'cãi nhau đến đỏ mặt tía tai'},
     {zh:'引起争论',py:'yǐnqǐ zhēnglùn',vn:'gây ra tranh cãi'}
   ],
   patterns:[
     {s:'A + 跟/和 + B + 争论 (+ 问题)',m:'A tranh luận với B (về vấn đề…)'},
     {s:'争论得 + bổ ngữ trình độ',m:'tranh cãi đến mức… (争论得很厉害 / 脸红脖子粗)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai anh em họ cứ gặp nhau là tranh cãi.',answer:'他们兄弟俩一见面就争论。',answerPy:'Tāmen xiōngdì liǎ yí jiànmiàn jiù zhēnglùn.',
      note:'一……就…… nối hai việc xảy ra liền nhau; 争论 là nội động từ nên đứng cuối được.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy họ tranh luận rất gay gắt, nhưng vẫn là bạn tốt.',answer:'虽然他们争论得很厉害，但是还是好朋友。',answerPy:'Suīrán tāmen zhēnglùn de hěn lìhai, dànshì háishi hǎo péngyou.',
      note:'争论得 + 很厉害: bổ ngữ trình độ đứng sau 得.',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'奇迹',py:'qíjì',pos:'Danh từ',vn:'kỳ tích, điều kỳ diệu',hv:'kỳ tích',em:'✨',lesson:10,
   explain:['Việc phi thường, tưởng như không thể xảy ra mà lại xảy ra.'],
   usage:'Động từ đi kèm: 创造奇迹 (tạo nên kỳ tích), 出现奇迹, 发生奇迹. Định ngữ: 生命的奇迹, 医学奇迹.',
   collo:['创造奇迹','出现奇迹','生命的奇迹'],
   ex_zh:'“奇迹”出现了：各张相片中静止的马连成了一匹运动的马。',ex_py:'"Qíjì" chūxiàn le: gè zhāng xiàngpiàn zhōng jìngzhǐ de mǎ liánchéngle yì pǐ yùndòng de mǎ.',ex_vn:'"Kỳ tích" đã xuất hiện: những con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động.',
   exList:[
     {zh:'“奇迹”出现了：各张相片中静止的马连成了一匹运动的马。',py:'"Qíjì" chūxiàn le: gè zhāng xiàngpiàn zhōng jìngzhǐ de mǎ liánchéngle yì pǐ yùndòng de mǎ.',vn:'"Kỳ tích" đã xuất hiện: những con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động.'},
     {zh:'只要不放弃，就有可能创造奇迹。',py:'Zhǐyào bú fàngqì, jiù yǒu kěnéng chuàngzào qíjì.',vn:'Chỉ cần không bỏ cuộc thì có thể tạo nên kỳ tích.'},
     {zh:'医生说他能重新站起来，真是一个奇迹。',py:'Yīshēng shuō tā néng chóngxīn zhàn qǐlái, zhēn shì yí ge qíjì.',vn:'Bác sĩ nói anh ấy đứng dậy được lần nữa, thật là một kỳ tích.'}
   ],
   colloFull:[
     {zh:'创造奇迹',py:'chuàngzào qíjì',vn:'tạo nên kỳ tích'},
     {zh:'出现奇迹',py:'chūxiàn qíjì',vn:'xuất hiện kỳ tích'},
     {zh:'生命的奇迹',py:'shēngmìng de qíjì',vn:'kỳ tích của sự sống'},
     {zh:'发生了奇迹',py:'fāshēngle qíjì',vn:'đã xảy ra kỳ tích'},
     {zh:'一个小小的奇迹',py:'yí ge xiǎoxiǎo de qíjì',vn:'một kỳ tích nho nhỏ'}
   ],
   patterns:[
     {s:'创造 / 出现 / 发生 + 奇迹',m:'tạo nên / xuất hiện / xảy ra kỳ tích'},
     {s:'……，真是一个奇迹',m:'…, thật là một kỳ tích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cả lớp cùng cố gắng thì có thể tạo nên kỳ tích.',answer:'只要全班一起努力，就能创造奇迹。',answerPy:'Zhǐyào quán bān yìqǐ nǔlì, jiù néng chuàngzào qíjì.',
      note:'创造奇迹 là cụm động–tân cố định; 就 đứng trước động từ của vế sau.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Kỳ tích này là do mọi người cùng nhau tạo nên.',answer:'这个奇迹是大家一起创造的。',answerPy:'Zhège qíjì shì dàjiā yìqǐ chuàngzào de.',
      note:'是……的 nhấn mạnh AI đã làm nên việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:3,zh:'围绕',py:'wéirào',pos:'Động từ',vn:'xoay quanh, bao quanh',hv:'vi nhiễu',em:'🔄',lesson:10,
   explain:['Nghĩa gốc: chuyển động vòng quanh một vật (地球围绕太阳转).','Nghĩa mở rộng: lấy một vấn đề làm trung tâm (围绕……进行讨论).'],
   usage:'围绕 + N + 转; 围绕(着) + vấn đề / trọng điểm + 进行 + 讨论 / 辩论 / 研究 (đúng bảng 词语搭配 của sách).',
   collo:['围绕太阳转','围绕重点进行讨论','围绕这个问题'],
   ex_zh:'斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。',ex_py:'Sītǎnfú yǔ Kē\'ēn wéirào "mǎ bēnpǎo shí tízi shìfǒu zháodì" jìnxíngle biànlùn.',ex_vn:'Stanford và Cohen đã tranh luận xoay quanh vấn đề "khi ngựa phi, móng có chạm đất hay không".',
   exList:[
     {zh:'斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。',py:'Sītǎnfú yǔ Kē\'ēn wéirào "mǎ bēnpǎo shí tízi shìfǒu zháodì" jìnxíngle biànlùn.',vn:'Stanford và Cohen đã tranh luận xoay quanh vấn đề "khi ngựa phi, móng có chạm đất hay không".'},
     {zh:'地球为什么会围绕太阳转，一直是科学家们很感兴趣的问题。',py:'Dìqiú wèi shénme huì wéirào tàiyáng zhuàn, yìzhí shì kēxuéjiāmen hěn gǎn xìngqù de wèntí.',vn:'Vì sao trái đất quay quanh mặt trời luôn là câu hỏi các nhà khoa học rất quan tâm.'},
     {zh:'整个讨论都是围绕去留问题进行的。',py:'Zhěnggè tǎolùn dōu shì wéirào qù liú wèntí jìnxíng de.',vn:'Cả buổi thảo luận đều xoay quanh chuyện đi hay ở.'}
   ],
   colloFull:[
     {zh:'围绕太阳转',py:'wéirào tàiyáng zhuàn',vn:'quay quanh mặt trời'},
     {zh:'围绕重点进行讨论',py:'wéirào zhòngdiǎn jìnxíng tǎolùn',vn:'thảo luận xoay quanh trọng điểm'},
     {zh:'围绕这个问题',py:'wéirào zhège wèntí',vn:'xoay quanh vấn đề này'},
     {zh:'围绕去留问题',py:'wéirào qù liú wèntí',vn:'xoay quanh chuyện đi hay ở'},
     {zh:'围绕着湖跑步',py:'wéiràozhe hú pǎobù',vn:'chạy bộ quanh hồ'}
   ],
   patterns:[
     {s:'围绕 + N + 转',m:'quay quanh…'},
     {s:'围绕(着) + vấn đề + 进行 + 讨论 / 辩论',m:'thảo luận / tranh luận xoay quanh…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Buổi thảo luận hôm qua là xoay quanh vấn đề an toàn.',answer:'昨天的讨论是围绕安全问题进行的。',answerPy:'Zuótiān de tǎolùn shì wéirào ānquán wèntí jìnxíng de.',
      note:'是 + 围绕…… + 进行 + 的: nhấn mạnh nội dung xoay quanh của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vừa vào lớp, cô giáo liền cho chúng tôi thảo luận xoay quanh bài khoá.',answer:'一上课，老师就让我们围绕课文进行讨论。',answerPy:'Yí shàngkè, lǎoshī jiù ràng wǒmen wéirào kèwén jìnxíng tǎolùn.',
      note:'围绕 + 课文 + 进行讨论: đúng bảng 词语搭配 của sách.',pair:'一……就……'}
   ]},

  {n:4,zh:'奔跑',py:'bēnpǎo',pos:'Động từ',vn:'chạy nhanh, phi',hv:'bôn bào',em:'🐎',lesson:10,
   explain:['Chạy nhanh, hết sức; thiên về văn viết, hay dùng để tả ngựa, thú vật hoặc người chạy.'],
   usage:'Nội động từ, không mang tân ngữ: 马在草原上奔跑. Hay gặp: 奔跑时 (khi đang phi/chạy), 快速奔跑, 向前奔跑.',
   collo:['在草原上奔跑','奔跑的马','快速奔跑'],
   ex_zh:'马奔跑时始终有一蹄着地。',ex_py:'Mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì.',ex_vn:'Khi ngựa phi, luôn có một móng chạm đất.',
   exList:[
     {zh:'马奔跑时始终有一蹄着地。',py:'Mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì.',vn:'Khi ngựa phi, luôn có một móng chạm đất.'},
     {zh:'孩子们在操场上快乐地奔跑。',py:'Háizimen zài cāochǎng shang kuàilè de bēnpǎo.',vn:'Bọn trẻ vui vẻ chạy nhảy trên sân trường.'},
     {zh:'一群马在草原上奔跑。',py:'Yì qún mǎ zài cǎoyuán shang bēnpǎo.',vn:'Một đàn ngựa đang phi trên thảo nguyên.'}
   ],
   colloFull:[
     {zh:'在草原上奔跑',py:'zài cǎoyuán shang bēnpǎo',vn:'phi trên thảo nguyên'},
     {zh:'奔跑的马',py:'bēnpǎo de mǎ',vn:'con ngựa đang phi'},
     {zh:'快速奔跑',py:'kuàisù bēnpǎo',vn:'chạy thật nhanh'},
     {zh:'向前奔跑',py:'xiàng qián bēnpǎo',vn:'chạy về phía trước'},
     {zh:'奔跑时',py:'bēnpǎo shí',vn:'khi đang chạy / phi'}
   ],
   patterns:[
     {s:'在 + nơi chốn + 奔跑',m:'chạy / phi ở…'},
     {s:'奔跑时 / 奔跑的时候',m:'khi đang chạy / phi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con ngựa kia phi càng lúc càng nhanh.',answer:'那匹马奔跑得越来越快。',answerPy:'Nà pǐ mǎ bēnpǎo de yuè lái yuè kuài.',
      note:'越来越 + tính từ đứng sau 得 làm bổ ngữ trình độ.',pair:'越来越'},
     {promptLang:'vi',prompt:'Con chó nhà tôi vừa ra khỏi cửa là bắt đầu chạy như bay.',answer:'我家的小狗一出门就开始奔跑。',answerPy:'Wǒ jiā de xiǎo gǒu yì chūmén jiù kāishǐ bēnpǎo.',
      note:'奔跑 là nội động từ, đứng cuối câu được.',pair:'一……就……'}
   ]},

  {n:5,zh:'蹄子',py:'tízi',pos:'Danh từ',vn:'móng guốc (của ngựa, bò…)',hv:'đề tử',em:'🐾',lesson:10,
   explain:['Phần cứng ở cuối chân ngựa, bò, dê…','Khẩu ngữ nói 蹄子; văn viết hay nói tắt 蹄: 四蹄 (bốn móng), 一蹄 (một móng).'],
   usage:'马蹄子 / 马蹄; số lượng: 四蹄, 一蹄. Động từ hay đi kèm: 着地 (zháodì – chạm đất), 落地.',
   collo:['马蹄子','四蹄','蹄子着地'],
   ex_zh:'斯坦福认为，马在跳起时四蹄应该都是不落地的。',ex_py:'Sītǎnfú rènwéi, mǎ zài tiàoqǐ shí sì tí yīnggāi dōu shì bú luòdì de.',ex_vn:'Stanford cho rằng khi nhảy lên, bốn móng ngựa lẽ ra đều không chạm đất.',
   exList:[
     {zh:'斯坦福认为，马在跳起时四蹄应该都是不落地的。',py:'Sītǎnfú rènwéi, mǎ zài tiàoqǐ shí sì tí yīnggāi dōu shì bú luòdì de.',vn:'Stanford cho rằng khi nhảy lên, bốn móng ngựa lẽ ra đều không chạm đất.'},
     {zh:'马奔跑时蹄子是否着地？',py:'Mǎ bēnpǎo shí tízi shìfǒu zháodì?',vn:'Khi ngựa phi, móng có chạm đất hay không?'},
     {zh:'这匹马的蹄子受伤了，不能跑了。',py:'Zhè pǐ mǎ de tízi shòushāng le, bù néng pǎo le.',vn:'Móng con ngựa này bị thương, không chạy được nữa.'}
   ],
   colloFull:[
     {zh:'马蹄子',py:'mǎ tízi',vn:'móng ngựa'},
     {zh:'四蹄',py:'sì tí',vn:'bốn móng'},
     {zh:'蹄子着地',py:'tízi zháodì',vn:'móng chạm đất'},
     {zh:'牛蹄',py:'niú tí',vn:'móng bò'},
     {zh:'蹄子落地',py:'tízi luòdì',vn:'móng rơi xuống đất'}
   ],
   patterns:[
     {s:'马 / 牛 + 蹄子',m:'móng ngựa / móng bò'},
     {s:'四蹄 / 一蹄 + 着地',m:'bốn móng / một móng chạm đất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Móng của con ngựa bị hòn đá làm bị thương.',answer:'马的蹄子被石头弄伤了。',answerPy:'Mǎ de tízi bèi shítou nòngshāng le.',
      note:'Câu bị động: vật chịu tác động 蹄子 làm chủ ngữ, 被 + tác nhân + V + bổ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Ngay cả nhiếp ảnh gia cũng không nhìn rõ móng ngựa có chạm đất hay không.',answer:'连摄影师都看不清楚马的蹄子是否着地。',answerPy:'Lián shèyǐngshī dōu kàn bu qīngchu mǎ de tízi shìfǒu zháodì.',
      note:'连 + người + 都: nhấn mạnh đến cả người giỏi nhất cũng không làm được.',pair:'连……都……'}
   ]},

  {n:6,zh:'辩论',py:'biànlùn',pos:'Động từ',vn:'biện luận, tranh luận (bằng lý lẽ)',hv:'biện luận',em:'🎤',lesson:10,
   explain:['Hai bên đưa ra lý lẽ để bảo vệ quan điểm của mình và phản bác bên kia. Có tổ chức, trang trọng hơn 争论.','Dùng như danh từ: 一场辩论; 辩论赛 = cuộc thi tranh biện.'],
   usage:'跟/和……辩论; 进行辩论; 一场辩论; 参加辩论赛. 争论 thiên về cãi nhau (có thể nổi nóng), 辩论 thiên về lập luận.',
   collo:['进行辩论','一场辩论','辩论赛','跟他辩论'],
   ex_zh:'在昨天举行的辩论赛上，他的表现得到了大家的好评。',ex_py:'Zài zuótiān jǔxíng de biànlùnsài shang, tā de biǎoxiàn dédàole dàjiā de hǎopíng.',ex_vn:'Trong cuộc thi tranh biện hôm qua, phần thể hiện của cậu ấy được mọi người khen ngợi.',
   exList:[
     {zh:'在昨天举行的辩论赛上，他的表现得到了大家的好评。',py:'Zài zuótiān jǔxíng de biànlùnsài shang, tā de biǎoxiàn dédàole dàjiā de hǎopíng.',vn:'Trong cuộc thi tranh biện hôm qua, phần thể hiện của cậu ấy được mọi người khen ngợi.'},
     {zh:'两个人围绕这个问题进行了一场辩论。',py:'Liǎng ge rén wéirào zhège wèntí jìnxíngle yì chǎng biànlùn.',vn:'Hai người đã tiến hành một cuộc tranh luận xoay quanh vấn đề này.'},
     {zh:'我不想跟你辩论，我们用事实说话吧。',py:'Wǒ bù xiǎng gēn nǐ biànlùn, wǒmen yòng shìshí shuōhuà ba.',vn:'Tôi không muốn tranh luận với cậu, chúng ta hãy để sự thật lên tiếng.'}
   ],
   colloFull:[
     {zh:'进行辩论',py:'jìnxíng biànlùn',vn:'tiến hành tranh luận'},
     {zh:'一场辩论',py:'yì chǎng biànlùn',vn:'một cuộc tranh luận'},
     {zh:'辩论赛',py:'biànlùnsài',vn:'cuộc thi tranh biện'},
     {zh:'跟他辩论',py:'gēn tā biànlùn',vn:'tranh luận với anh ấy'},
     {zh:'参加辩论赛',py:'cānjiā biànlùnsài',vn:'tham gia cuộc thi tranh biện'}
   ],
   patterns:[
     {s:'(跟……) 进行 + 辩论',m:'tiến hành tranh luận (với…)'},
     {s:'参加 + 辩论赛',m:'tham gia cuộc thi tranh biện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc thi tranh biện lần này là do học sinh tự tổ chức.',answer:'这次辩论赛是学生自己组织的。',answerPy:'Zhè cì biànlùnsài shì xuésheng zìjǐ zǔzhī de.',
      note:'是……的 nhấn mạnh người thực hiện việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cậu ấy không những tham gia cuộc thi tranh biện mà còn đạt giải nhất.',answer:'他不仅参加了辩论赛，而且得了第一名。',answerPy:'Tā bùjǐn cānjiāle biànlùnsài, érqiě déle dì-yī míng.',
      note:'参加辩论赛 là cụm cố định; hai vế cùng chủ ngữ nên 不仅 đứng sau chủ ngữ.',pair:'不仅……而且……'}
   ]},

  {n:7,zh:'青蛙',py:'qīngwā',pos:'Danh từ',vn:'con ếch, nhái',hv:'thanh oa',em:'🐸',lesson:10,
   explain:['Loài lưỡng cư sống gần nước, nhảy rất giỏi, ăn côn trùng.'],
   usage:'Lượng từ 只: 一只青蛙. Hay đi với 跳, 叫: 青蛙跳进水里, 青蛙叫个不停.',
   collo:['一只青蛙','青蛙跳','青蛙叫'],
   ex_zh:'马要是四蹄都不着地，那不是成了青蛙啦？',ex_py:'Mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la?',ex_vn:'Ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao?',
   exList:[
     {zh:'马要是四蹄都不着地，那不是成了青蛙啦？',py:'Mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la?',vn:'Ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao?'},
     {zh:'夏天的晚上，池塘里的青蛙叫个不停。',py:'Xiàtiān de wǎnshang, chítáng li de qīngwā jiào ge bù tíng.',vn:'Tối mùa hè, lũ ếch dưới ao kêu không ngớt.'},
     {zh:'一只青蛙跳进了水里。',py:'Yì zhī qīngwā tiàojìnle shuǐ li.',vn:'Một con ếch nhảy xuống nước.'}
   ],
   colloFull:[
     {zh:'一只青蛙',py:'yì zhī qīngwā',vn:'một con ếch'},
     {zh:'青蛙跳',py:'qīngwā tiào',vn:'ếch nhảy'},
     {zh:'青蛙叫',py:'qīngwā jiào',vn:'ếch kêu'},
     {zh:'池塘里的青蛙',py:'chítáng li de qīngwā',vn:'con ếch dưới ao'},
     {zh:'小青蛙',py:'xiǎo qīngwā',vn:'chú ếch con'}
   ],
   patterns:[
     {s:'一只 + 青蛙',m:'một con ếch'},
     {s:'青蛙 + 跳 / 叫',m:'ếch nhảy / ếch kêu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa đổ mưa là ếch bắt đầu kêu.',answer:'一下雨，青蛙就开始叫了。',answerPy:'Yí xià yǔ, qīngwā jiù kāishǐ jiào le.',
      note:'Vế sau có chủ ngữ riêng (青蛙) thì 就 đứng SAU chủ ngữ đó.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Con ếch đó bị em trai tôi bắt được rồi.',answer:'那只青蛙被我弟弟抓住了。',answerPy:'Nà zhī qīngwā bèi wǒ dìdi zhuāzhù le.',
      note:'Câu 被: động từ phải có thành phần khác đi kèm (抓住了).',pair:'被'}
   ]},

  {n:8,zh:'啦',py:'la',pos:'Trợ từ',vn:'rồi đấy, à, nhé (= 了 + 啊)',hv:'lạp',em:'💬',lesson:10,
   explain:['Là âm hợp của 了 (le) và 啊 (a): vừa báo sự thay đổi / hoàn thành như 了, vừa mang sắc thái cảm thán như 啊.','Chỉ dùng trong khẩu ngữ, đứng cuối câu.'],
   usage:'Đứng cuối câu: 我都十八岁啦! / 下雨啦! / 那不是成了青蛙啦? Không dùng trong văn viết trang trọng.',
   collo:['下雨啦','成了青蛙啦','都十八岁啦'],
   ex_zh:'我都十八岁啦，能照顾好自己，您就放心吧。',ex_py:'Wǒ dōu shíbā suì la, néng zhàogù hǎo zìjǐ, nín jiù fàngxīn ba.',ex_vn:'Con mười tám tuổi rồi mà, tự lo được cho mình, mẹ cứ yên tâm đi.',
   exList:[
     {zh:'我都十八岁啦，能照顾好自己，您就放心吧。',py:'Wǒ dōu shíbā suì la, néng zhàogù hǎo zìjǐ, nín jiù fàngxīn ba.',vn:'Con mười tám tuổi rồi mà, tự lo được cho mình, mẹ cứ yên tâm đi.'},
     {zh:'马要是四蹄都不着地，那不是成了青蛙啦？',py:'Mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la?',vn:'Ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao?'},
     {zh:'妈妈，我回来啦！',py:'Māma, wǒ huílái la!',vn:'Mẹ ơi, con về rồi đây!'}
   ],
   colloFull:[
     {zh:'下雨啦',py:'xià yǔ la',vn:'mưa rồi!'},
     {zh:'成了青蛙啦',py:'chéngle qīngwā la',vn:'thành con ếch rồi còn gì'},
     {zh:'都十八岁啦',py:'dōu shíbā suì la',vn:'đã mười tám tuổi rồi mà'},
     {zh:'我回来啦',py:'wǒ huílái la',vn:'tôi về rồi đây'},
     {zh:'好啦',py:'hǎo la',vn:'được rồi, thôi nào'}
   ],
   patterns:[
     {s:'Câu + 啦 (= 了 + 啊)',m:'… rồi đấy! (cảm thán + thay đổi)'},
     {s:'都 + … + 啦',m:'đã … rồi mà!'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nhìn kìa, trời càng ngày càng tối rồi đấy!',answer:'你看，天越来越黑啦！',answerPy:'Nǐ kàn, tiān yuè lái yuè hēi la!',
      note:'啦 thay cho 了 ở cuối câu, thêm giọng cảm thán.',pair:'越来越'},
     {promptLang:'vi',prompt:'Ngay cả em trai tôi cũng biết bơi rồi đấy!',answer:'连我弟弟都会游泳啦！',answerPy:'Lián wǒ dìdi dōu huì yóuyǒng la!',
      note:'啦 = 了 (sự thay đổi: trước không biết, nay biết) + 啊 (ngạc nhiên).',pair:'连……都……'}
   ]},

  {n:9,zh:'始终',py:'shǐzhōng',pos:'Phó từ',vn:'từ đầu đến cuối, trước sau vẫn',hv:'thủy chung',em:'🔁',lesson:10,
   explain:['Biểu thị một trạng thái hay hành động giữ nguyên từ đầu đến cuối, không thay đổi.','Hay đi với 坚持, 保持, 没(有), 不 (đúng bảng 词语搭配: 始终坚持 / 保持).'],
   usage:'Chủ ngữ + 始终 + V: 始终坚持 / 始终保持 / 始终没有…. Nói về quá trình đã qua đến hiện tại, không dùng cho tương lai.',
   collo:['始终坚持','始终保持','始终没有'],
   ex_zh:'毕业二十年以来，我们始终保持着联系。',ex_py:'Bìyè èrshí nián yǐlái, wǒmen shǐzhōng bǎochízhe liánxì.',ex_vn:'Hai mươi năm kể từ khi tốt nghiệp, chúng tôi trước sau vẫn giữ liên lạc.',
   exList:[
     {zh:'毕业二十年以来，我们始终保持着联系。',py:'Bìyè èrshí nián yǐlái, wǒmen shǐzhōng bǎochízhe liánxì.',vn:'Hai mươi năm kể từ khi tốt nghiệp, chúng tôi trước sau vẫn giữ liên lạc.'},
     {zh:'相片显示：马奔跑时始终有一蹄着地。',py:'Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì.',vn:'Ảnh cho thấy: khi ngựa phi, luôn có một móng chạm đất.'},
     {zh:'这位年轻人始终表现得很稳定。',py:'Zhè wèi niánqīngrén shǐzhōng biǎoxiàn de hěn wěndìng.',vn:'Chàng trai trẻ này từ đầu đến cuối luôn thể hiện rất ổn định.'}
   ],
   colloFull:[
     {zh:'始终坚持',py:'shǐzhōng jiānchí',vn:'trước sau vẫn kiên trì'},
     {zh:'始终保持',py:'shǐzhōng bǎochí',vn:'trước sau vẫn giữ'},
     {zh:'始终没有',py:'shǐzhōng méiyǒu',vn:'mãi vẫn không'},
     {zh:'始终不变',py:'shǐzhōng bú biàn',vn:'trước sau không đổi'},
     {zh:'始终有一蹄着地',py:'shǐzhōng yǒu yì tí zháodì',vn:'luôn có một móng chạm đất'}
   ],
   patterns:[
     {s:'始终 + 坚持 / 保持 + N',m:'trước sau vẫn kiên trì / giữ…'},
     {s:'始终 + 没(有) / 不 + V',m:'mãi mà vẫn không…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy gặp rất nhiều khó khăn, nhưng cậu ấy trước sau vẫn kiên trì.',answer:'虽然遇到了很多困难，但是他始终坚持着。',answerPy:'Suīrán yùdàole hěn duō kùnnan, dànshì tā shǐzhōng jiānchízhe.',
      note:'始终 đứng sau chủ ngữ, trước động từ 坚持.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi mãi vẫn không giải được bài này.',answer:'我始终没能把这道题做出来。',answerPy:'Wǒ shǐzhōng méi néng bǎ zhè dào tí zuò chūlái.',
      note:'始终 + 没(能) đứng TRƯỚC 把; phó từ phủ định không chen vào sau 把.',pair:'把'}
   ]},

  {n:10,zh:'脖子',py:'bózi',pos:'Danh từ',vn:'(cái) cổ',hv:'bột tử',em:'🦒',lesson:10,
   explain:['Phần nối đầu với thân.'],
   usage:'Hay gặp: 长脖子, 脖子疼, 围在脖子上. Thành ngữ khẩu ngữ: 脸红脖子粗 (đỏ mặt tía tai – tả lúc cãi nhau hăng).',
   collo:['脸红脖子粗','脖子疼','长脖子'],
   ex_zh:'两人各执一词，争论得脸红脖子粗。',ex_py:'Liǎng rén gè zhí yì cí, zhēnglùn de liǎn hóng bózi cū.',ex_vn:'Hai người mỗi người giữ một ý, cãi nhau đến đỏ mặt tía tai.',
   exList:[
     {zh:'两人各执一词，争论得脸红脖子粗。',py:'Liǎng rén gè zhí yì cí, zhēnglùn de liǎn hóng bózi cū.',vn:'Hai người mỗi người giữ một ý, cãi nhau đến đỏ mặt tía tai.'},
     {zh:'长颈鹿的脖子特别长。',py:'Chángjǐnglù de bózi tèbié cháng.',vn:'Cổ hươu cao cổ rất dài.'},
     {zh:'用吹风机吹吹脖子后边，感冒会好一点儿。',py:'Yòng chuīfēngjī chuīchui bózi hòubian, gǎnmào huì hǎo yìdiǎnr.',vn:'Dùng máy sấy thổi vào sau gáy thì cảm sẽ đỡ hơn một chút.'}
   ],
   colloFull:[
     {zh:'脸红脖子粗',py:'liǎn hóng bózi cū',vn:'đỏ mặt tía tai'},
     {zh:'脖子疼',py:'bózi téng',vn:'đau cổ'},
     {zh:'长脖子',py:'cháng bózi',vn:'cổ dài'},
     {zh:'伸长脖子',py:'shēncháng bózi',vn:'vươn cổ'},
     {zh:'围在脖子上',py:'wéi zài bózi shang',vn:'quàng lên cổ'}
   ],
   patterns:[
     {s:'脖子 + 疼 / 酸',m:'đau cổ / mỏi cổ'},
     {s:'……得脸红脖子粗',m:'… đến mức đỏ mặt tía tai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời lạnh quá, tôi quàng khăn lên cổ.',answer:'天太冷了，我把围巾围在脖子上。',answerPy:'Tiān tài lěng le, wǒ bǎ wéijīn wéi zài bózi shang.',
      note:'把 + tân ngữ + V + 在 + nơi chốn; 围巾 là từ phần 扩展 của bài.',pair:'把'},
     {promptLang:'vi',prompt:'Học liền ba tiếng, cổ tôi càng ngày càng mỏi.',answer:'连着学了三个小时，我的脖子越来越酸了。',answerPy:'Liánzhe xuéle sān ge xiǎoshí, wǒ de bózi yuè lái yuè suān le.',
      note:'Mỏi cổ nói 脖子酸, không nói 脖子累.',pair:'越来越'}
   ]},

  {n:11,zh:'说服',py:'shuōfú',pos:'Động từ',vn:'thuyết phục',hv:'thuyết phục',em:'🤝',lesson:10,
   explain:['Dùng lý lẽ làm cho người khác đồng ý, tin theo mình.'],
   usage:'说服 + người (+ V); 说服不了 (không thuyết phục được); 被……说服. Mẫu hay gặp: 谁也说服不了谁. Chú ý đọc shuōfú, không đọc shuìfú.',
   collo:['说服对方','说服不了','谁也说服不了谁','被说服了'],
   ex_zh:'两人争论得脸红脖子粗，谁也说服不了谁。',ex_py:'Liǎng rén zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi.',ex_vn:'Hai người cãi nhau đỏ mặt tía tai, chẳng ai thuyết phục được ai.',
   exList:[
     {zh:'两人争论得脸红脖子粗，谁也说服不了谁。',py:'Liǎng rén zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi.',vn:'Hai người cãi nhau đỏ mặt tía tai, chẳng ai thuyết phục được ai.'},
     {zh:'我始终没有办法说服他接受这个结论。',py:'Wǒ shǐzhōng méiyǒu bànfǎ shuōfú tā jiēshòu zhège jiélùn.',vn:'Tôi trước sau vẫn không có cách nào thuyết phục anh ấy chấp nhận kết luận này.'},
     {zh:'她终于说服了父母，让她去国外留学。',py:'Tā zhōngyú shuōfúle fùmǔ, ràng tā qù guówài liúxué.',vn:'Cuối cùng cô ấy đã thuyết phục được bố mẹ cho đi du học.'}
   ],
   colloFull:[
     {zh:'说服对方',py:'shuōfú duìfāng',vn:'thuyết phục đối phương'},
     {zh:'说服不了',py:'shuōfú bu liǎo',vn:'không thuyết phục được'},
     {zh:'谁也说服不了谁',py:'shéi yě shuōfú bu liǎo shéi',vn:'chẳng ai thuyết phục được ai'},
     {zh:'被说服了',py:'bèi shuōfú le',vn:'bị thuyết phục rồi'},
     {zh:'说服父母',py:'shuōfú fùmǔ',vn:'thuyết phục bố mẹ'}
   ],
   patterns:[
     {s:'说服 + người + V',m:'thuyết phục ai làm gì'},
     {s:'谁也说服不了谁',m:'chẳng ai thuyết phục được ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuối cùng tôi đã bị lý lẽ của cô ấy thuyết phục.',answer:'我最后被她的道理说服了。',answerPy:'Wǒ zuìhòu bèi tā de dàolǐ shuōfú le.',
      note:'被 + tác nhân + 说服 + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần cậu nói rõ lý do thì sẽ thuyết phục được bố mẹ.',answer:'只要你把理由说清楚，就能说服父母。',answerPy:'Zhǐyào nǐ bǎ lǐyóu shuō qīngchu, jiù néng shuōfú fùmǔ.',
      note:'说服 + người: tân ngữ chỉ người đứng ngay sau.',pair:'只要……就……'}
   ]},

  {n:12,zh:'摄影师',py:'shèyǐngshī',pos:'Danh từ',vn:'nhà nhiếp ảnh, nhiếp ảnh gia',hv:'nhiếp ảnh sư',em:'📷',lesson:10,
   explain:['Người chụp ảnh, quay phim chuyên nghiệp. 摄影 = nhiếp ảnh, 师 = người có chuyên môn (như 老师, 律师).'],
   usage:'Lượng từ 位/个: 一位摄影师. Hay gặp: 请摄影师拍照, 著名的摄影师, 英国摄影师.',
   collo:['一位摄影师','著名的摄影师','请摄影师拍'],
   ex_zh:'这是一位摄影师拍的照片。',ex_py:'Zhè shì yí wèi shèyǐngshī pāi de zhàopiàn.',ex_vn:'Đây là bức ảnh do một nhiếp ảnh gia chụp.',
   exList:[
     {zh:'这是一位摄影师拍的照片。',py:'Zhè shì yí wèi shèyǐngshī pāi de zhàopiàn.',vn:'Đây là bức ảnh do một nhiếp ảnh gia chụp.'},
     {zh:'于是他们就请英国摄影师麦布里奇来判断。',py:'Yúshì tāmen jiù qǐng Yīngguó shèyǐngshī Màibùlǐqí lái pànduàn.',vn:'Thế là họ mời nhiếp ảnh gia người Anh Muybridge đến phân xử.'},
     {zh:'这张婚纱照是我们去欧洲旅行结婚时，请摄影师拍的。',py:'Zhè zhāng hūnshāzhào shì wǒmen qù Ōuzhōu lǚxíng jiéhūn shí, qǐng shèyǐngshī pāi de.',vn:'Bức ảnh cưới này là lúc chúng tôi đi châu Âu du lịch kết hôn, thuê nhiếp ảnh gia chụp.'}
   ],
   colloFull:[
     {zh:'一位摄影师',py:'yí wèi shèyǐngshī',vn:'một nhiếp ảnh gia'},
     {zh:'著名的摄影师',py:'zhùmíng de shèyǐngshī',vn:'nhiếp ảnh gia nổi tiếng'},
     {zh:'请摄影师拍',py:'qǐng shèyǐngshī pāi',vn:'thuê nhiếp ảnh gia chụp'},
     {zh:'英国摄影师',py:'Yīngguó shèyǐngshī',vn:'nhiếp ảnh gia người Anh'},
     {zh:'摄影师拍的照片',py:'shèyǐngshī pāi de zhàopiàn',vn:'bức ảnh do nhiếp ảnh gia chụp'}
   ],
   patterns:[
     {s:'请 + 摄影师 + 拍 + N',m:'thuê / mời nhiếp ảnh gia chụp…'},
     {s:'摄影师 + 毕竟是 + 摄影师',m:'nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những bức ảnh này là do một nhiếp ảnh gia nổi tiếng chụp.',answer:'这些照片是一位著名的摄影师拍的。',answerPy:'Zhèxiē zhàopiàn shì yí wèi zhùmíng de shèyǐngshī pāi de.',
      note:'是……的 nhấn mạnh người chụp.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh tôi không những là giáo viên mà còn là một nhiếp ảnh gia.',answer:'我哥哥不仅是老师，而且还是一位摄影师。',answerPy:'Wǒ gēge bùjǐn shì lǎoshī, érqiě hái shì yí wèi shèyǐngshī.',
      note:'Lượng từ lịch sự cho người: 位.',pair:'不仅……而且……'}
   ]},

  {n:13,zh:'毕竟',py:'bìjìng',pos:'Phó từ',vn:'rốt cuộc, suy cho cùng, dù sao',hv:'tất cánh',em:'🧭',lesson:10,
   explain:['Nghĩa 1: "cuối cùng thì, rốt cuộc" (= 到底, 终于): 虽然遇到了很多困难，但毕竟完成了任务.','Nghĩa 2 (hay dùng nhất): nêu ra điểm QUAN TRỌNG, bản chất không đổi — "suy cho cùng thì…, dù sao thì…" — để giải thích cho một kết luận.'],
   usage:'Đứng sau chủ ngữ, trước động từ: 他毕竟是孩子. Mẫu đặc biệt: A毕竟是A (摄影师毕竟是摄影师). Thường nằm ở vế giải thích lý do.',
   collo:['毕竟是','毕竟还是','毕竟不是'],
   ex_zh:'不过摄影师毕竟是摄影师，主意还是有的。',ex_py:'Búguò shèyǐngshī bìjìng shì shèyǐngshī, zhǔyi háishi yǒu de.',ex_vn:'Nhưng nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia, cách thì vẫn có.',
   exList:[
     {zh:'不过摄影师毕竟是摄影师，主意还是有的。',py:'Búguò shèyǐngshī bìjìng shì shèyǐngshī, zhǔyi háishi yǒu de.',vn:'Nhưng nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia, cách thì vẫn có.'},
     {zh:'虽然我们遇到了很多困难，但毕竟完成了任务。',py:'Suīrán wǒmen yùdàole hěn duō kùnnan, dàn bìjìng wánchéngle rènwu.',vn:'Tuy gặp nhiều khó khăn nhưng rốt cuộc chúng tôi đã hoàn thành nhiệm vụ.'},
     {zh:'别怪他了，他毕竟还是个孩子。',py:'Bié guài tā le, tā bìjìng hái shì ge háizi.',vn:'Đừng trách cậu bé nữa, dù sao nó vẫn còn là một đứa trẻ.'}
   ],
   colloFull:[
     {zh:'毕竟是',py:'bìjìng shì',vn:'dù sao cũng là'},
     {zh:'毕竟还是',py:'bìjìng hái shì',vn:'dù sao vẫn còn là'},
     {zh:'毕竟不是',py:'bìjìng bú shì',vn:'dù sao cũng không phải'},
     {zh:'摄影师毕竟是摄影师',py:'shèyǐngshī bìjìng shì shèyǐngshī',vn:'nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia'},
     {zh:'毕竟完成了任务',py:'bìjìng wánchéngle rènwu',vn:'rốt cuộc đã hoàn thành nhiệm vụ'}
   ],
   patterns:[
     {s:'(Chủ ngữ) + 毕竟 + 是 + N',m:'dù sao … vẫn là …'},
     {s:'Kết luận，毕竟 + lý do',m:'…, vì suy cho cùng thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đề rất khó, nhưng rốt cuộc tôi cũng làm xong.',answer:'虽然题很难，但是我毕竟做完了。',answerPy:'Suīrán tí hěn nán, dànshì wǒ bìjìng zuòwán le.',
      note:'Nghĩa 1 của 毕竟 (= 到底): kết quả cuối cùng vẫn đạt được.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Đừng trách em ấy, dù sao ngay cả thầy giáo cũng không làm được câu này.',answer:'别怪他了，毕竟连老师都不会做这道题。',answerPy:'Bié guài tā le, bìjìng lián lǎoshī dōu bú huì zuò zhè dào tí.',
      note:'Nghĩa 2: vế sau 毕竟 là lý do giải thích cho lời khuyên ở vế trước.',pair:'连……都……'}
   ]},

  {n:14,zh:'操场',py:'cāochǎng',pos:'Danh từ',vn:'sân tập, sân thể thao (của trường)',hv:'thao trường',em:'🏟️',lesson:10,
   explain:['Khoảng sân rộng để tập thể dục, chơi thể thao, thường ở trường học.'],
   usage:'在操场上 + V: 在操场上跑步 / 打球. Lượng từ 个. Chú ý: 操场 là sân TRƯỜNG, không phải "thao trường" quân sự.',
   collo:['在操场上','学校的操场','操场上的跑道'],
   ex_zh:'他们一起来到一个操场。',ex_py:'Tāmen yìqǐ láidào yí ge cāochǎng.',ex_vn:'Họ cùng nhau đến một sân tập.',
   exList:[
     {zh:'他们一起来到一个操场。',py:'Tāmen yìqǐ láidào yí ge cāochǎng.',vn:'Họ cùng nhau đến một sân tập.'},
     {zh:'下课以后，同学们都在操场上打篮球。',py:'Xiàkè yǐhòu, tóngxuémen dōu zài cāochǎng shang dǎ lánqiú.',vn:'Tan học, các bạn đều chơi bóng rổ trên sân trường.'},
     {zh:'我每天早上去操场跑三圈。',py:'Wǒ měi tiān zǎoshang qù cāochǎng pǎo sān quān.',vn:'Sáng nào tôi cũng ra sân chạy ba vòng.'}
   ],
   colloFull:[
     {zh:'在操场上',py:'zài cāochǎng shang',vn:'trên sân'},
     {zh:'学校的操场',py:'xuéxiào de cāochǎng',vn:'sân trường'},
     {zh:'操场上的跑道',py:'cāochǎng shang de pǎodào',vn:'đường chạy trên sân'},
     {zh:'去操场跑步',py:'qù cāochǎng pǎobù',vn:'ra sân chạy bộ'},
     {zh:'一个大操场',py:'yí ge dà cāochǎng',vn:'một sân tập lớn'}
   ],
   patterns:[
     {s:'在操场上 + V',m:'làm gì trên sân'},
     {s:'去操场 + V',m:'ra sân để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa tan học, bọn tôi liền chạy ra sân chơi bóng.',answer:'一下课，我们就跑到操场上打球。',answerPy:'Yí xiàkè, wǒmen jiù pǎodào cāochǎng shang dǎ qiú.',
      note:'跑到 + 操场上 + V: đến nơi rồi làm gì.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Sân trường chúng tôi càng ngày càng đẹp.',answer:'我们学校的操场越来越漂亮了。',answerPy:'Wǒmen xuéxiào de cāochǎng yuè lái yuè piàoliang le.',
      note:'越来越 + tính từ + 了: sự thay đổi theo thời gian.',pair:'越来越'}
   ]},

  {n:15,zh:'洞',py:'dòng',pos:'Danh từ',vn:'hốc, lỗ, hang',hv:'động',em:'🕳️',lesson:10,
   explain:['Chỗ bị thủng hoặc lõm sâu vào trên mặt đất, tường, quần áo…'],
   usage:'Động từ đi kèm: 打洞 (đục lỗ), 挖洞 (đào hố); N + 上有个洞; 破了一个洞 (thủng một lỗ). Lượng từ 个. 山洞 = hang núi.',
   collo:['打洞','挖一个洞','山洞','破了一个洞'],
   ex_zh:'在跑道另一边打24个洞。',ex_py:'Zài pǎodào lìng yìbiān dǎ èrshísì ge dòng.',ex_vn:'Ở phía bên kia đường chạy đục 24 cái lỗ.',
   exList:[
     {zh:'在跑道另一边打24个洞。',py:'Zài pǎodào lìng yìbiān dǎ èrshísì ge dòng.',vn:'Ở phía bên kia đường chạy đục 24 cái lỗ.'},
     {zh:'我的袜子破了一个洞。',py:'Wǒ de wàzi pòle yí ge dòng.',vn:'Tất của tôi bị thủng một lỗ.'},
     {zh:'小狗在花园里挖了一个洞。',py:'Xiǎo gǒu zài huāyuán li wāle yí ge dòng.',vn:'Con chó con đào một cái hố trong vườn.'}
   ],
   colloFull:[
     {zh:'打洞',py:'dǎ dòng',vn:'đục lỗ'},
     {zh:'挖一个洞',py:'wā yí ge dòng',vn:'đào một cái hố'},
     {zh:'山洞',py:'shāndòng',vn:'hang núi'},
     {zh:'破了一个洞',py:'pòle yí ge dòng',vn:'thủng một lỗ'},
     {zh:'墙上有个洞',py:'qiáng shang yǒu ge dòng',vn:'trên tường có một cái lỗ'}
   ],
   patterns:[
     {s:'打 / 挖 + (số lượng) + 洞',m:'đục / đào … lỗ'},
     {s:'N + 上有(一)个洞',m:'trên… có một cái lỗ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc áo mới của tôi bị con mèo cào thủng một lỗ.',answer:'我的新衣服被猫抓破了一个洞。',answerPy:'Wǒ de xīn yīfu bèi māo zhuāpòle yí ge dòng.',
      note:'被 + tác nhân + V + bổ ngữ kết quả (抓破) + tân ngữ số lượng.',pair:'被'},
     {promptLang:'vi',prompt:'Trước đây tôi chưa từng vào một cái hang núi lớn như thế.',answer:'我以前从来没进过这么大的山洞。',answerPy:'Wǒ yǐqián cónglái méi jìnguo zhème dà de shāndòng.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'}
   ]},

  {n:16,zh:'插',py:'chā',pos:'Động từ',vn:'cắm (vào); xen vào',hv:'sáp',em:'📌',lesson:10,
   explain:['Đưa một vật dài, nhỏ vào trong vật khác: 插花, 插进洞里.','Nghĩa mở rộng: xen vào — 插话 (chen lời), 插队 (chen hàng), 插一手 (nhúng tay vào).'],
   usage:'插 + 进(去) / 到…… / 在…… (đúng bảng 词语搭配 của sách): 插进洞里, 插在花瓶里.',
   collo:['插进去','插在花瓶里','插话','插了一手'],
   ex_zh:'在跑道另一边打24个洞，分别插进24根木棍。',ex_py:'Zài pǎodào lìng yìbiān dǎ èrshísì ge dòng, fēnbié chājìn èrshísì gēn mùgùn.',ex_vn:'Ở phía bên kia đường chạy đục 24 cái lỗ, lần lượt cắm vào 24 cây gậy gỗ.',
   exList:[
     {zh:'在跑道另一边打24个洞，分别插进24根木棍。',py:'Zài pǎodào lìng yìbiān dǎ èrshísì ge dòng, fēnbié chājìn èrshísì gēn mùgùn.',vn:'Ở phía bên kia đường chạy đục 24 cái lỗ, lần lượt cắm vào 24 cây gậy gỗ.'},
     {zh:'妈妈把花插在花瓶里。',py:'Māma bǎ huā chā zài huāpíng li.',vn:'Mẹ cắm hoa vào bình.'},
     {zh:'如果不是他在中间插了一手，事情不会变成现在这样。',py:'Rúguǒ bú shì tā zài zhōngjiān chāle yì shǒu, shìqing bú huì biànchéng xiànzài zhèyàng.',vn:'Nếu không phải anh ta nhúng tay vào giữa chừng thì sự việc đã không thành ra thế này.'}
   ],
   colloFull:[
     {zh:'插进去',py:'chā jìnqù',vn:'cắm vào'},
     {zh:'插在花瓶里',py:'chā zài huāpíng li',vn:'cắm vào bình hoa'},
     {zh:'插话',py:'chāhuà',vn:'chen lời'},
     {zh:'插了一手',py:'chāle yì shǒu',vn:'nhúng tay vào'},
     {zh:'插队',py:'chāduì',vn:'chen hàng'}
   ],
   patterns:[
     {s:'插 + 进(去) / 到 / 在 + nơi chốn',m:'cắm vào…'},
     {s:'插话 / 插队 / 插一手',m:'chen lời / chen hàng / nhúng tay vào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ cắm những bông hoa đó vào trong bình.',answer:'妈妈把那些花插进了花瓶里。',answerPy:'Māma bǎ nàxiē huā chājìnle huāpíng li.',
      note:'把 + tân ngữ + 插进 + nơi chốn: động từ phải có bổ ngữ đi kèm.',pair:'把'},
     {promptLang:'vi',prompt:'Cậu ấy chưa bao giờ chen hàng.',answer:'他从来没插过队。',answerPy:'Tā cónglái méi chāguo duì.',
      note:'插队 là động từ ly hợp: 过 chen vào giữa → 插过队.',pair:'从来没……过'}
   ]},

  {n:17,zh:'棍',py:'gùn',pos:'Danh từ',vn:'gậy, que',hv:'côn',em:'🦯',lesson:10,
   explain:['Vật dài, cứng, thường bằng gỗ hoặc tre. Ít dùng một mình; hay nói 棍子 hoặc ghép 木棍 (gậy gỗ).'],
   usage:'Lượng từ 根: 一根木棍. Hay gặp: 木棍, 棍子, 冰棍儿 (kem que).',
   collo:['一根木棍','棍子','冰棍儿'],
   ex_zh:'木棍上系着细线，细线穿过跑道，接上相机快门。',ex_py:'Mùgùn shang jìzhe xì xiàn, xì xiàn chuānguò pǎodào, jiēshang xiàngjī kuàimén.',ex_vn:'Trên gậy gỗ buộc sợi dây mảnh, dây vắt ngang đường chạy, nối vào nút chụp của máy ảnh.',
   exList:[
     {zh:'木棍上系着细线，细线穿过跑道，接上相机快门。',py:'Mùgùn shang jìzhe xì xiàn, xì xiàn chuānguò pǎodào, jiēshang xiàngjī kuàimén.',vn:'Trên gậy gỗ buộc sợi dây mảnh, dây vắt ngang đường chạy, nối vào nút chụp của máy ảnh.'},
     {zh:'爷爷走路的时候总拿着一根木棍。',py:'Yéye zǒulù de shíhou zǒng názhe yì gēn mùgùn.',vn:'Ông lúc đi đường luôn cầm một cây gậy gỗ.'},
     {zh:'天太热了，我们去买冰棍儿吧。',py:'Tiān tài rè le, wǒmen qù mǎi bīnggùnr ba.',vn:'Trời nóng quá, mình đi mua kem que đi.'}
   ],
   colloFull:[
     {zh:'一根木棍',py:'yì gēn mùgùn',vn:'một cây gậy gỗ'},
     {zh:'棍子',py:'gùnzi',vn:'cái gậy'},
     {zh:'冰棍儿',py:'bīnggùnr',vn:'kem que'},
     {zh:'木棍上',py:'mùgùn shang',vn:'trên gậy gỗ'},
     {zh:'拿着棍子',py:'názhe gùnzi',vn:'cầm gậy'}
   ],
   patterns:[
     {s:'一根 + 木棍 / 棍子',m:'một cây gậy'},
     {s:'木棍 + 上 + V着 + N',m:'trên gậy có…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé cắm cây gậy gỗ xuống đất.',answer:'男孩把木棍插在地上。',answerPy:'Nánhái bǎ mùgùn chā zài dì shang.',
      note:'把 + 木棍 + 插在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Cây gậy đó bị con ngựa húc gãy rồi.',answer:'那根木棍被马撞断了。',answerPy:'Nà gēn mùgùn bèi mǎ zhuàngduàn le.',
      note:'Lượng từ của 木棍 là 根; 撞断 = va gãy (bổ ngữ kết quả).',pair:'被'}
   ]},

  {n:18,zh:'系',py:'jì',pos:'Động từ',vn:'thắt, buộc',hv:'hệ',em:'🎀',lesson:10,
   explain:['Buộc, thắt (dây, cà vạt, dây an toàn…).','Chú ý âm đọc: nghĩa "thắt, buộc" đọc jì; khi là danh từ "khoa" (中文系) hay động từ "liên hệ" (联系) thì đọc xì.'],
   usage:'系 + 领带 / 鞋带 / 安全带; 系在…… / N + 上系着……. Trái nghĩa: 解开 (cởi ra).',
   collo:['系领带','系鞋带','系安全带','系着细线'],
   ex_zh:'你今天系这条领带吧，比较正式。',ex_py:'Nǐ jīntiān jì zhè tiáo lǐngdài ba, bǐjiào zhèngshì.',ex_vn:'Hôm nay anh thắt chiếc cà vạt này đi, trông trang trọng hơn.',
   exList:[
     {zh:'你今天系这条领带吧，比较正式。',py:'Nǐ jīntiān jì zhè tiáo lǐngdài ba, bǐjiào zhèngshì.',vn:'Hôm nay anh thắt chiếc cà vạt này đi, trông trang trọng hơn.'},
     {zh:'木棍上系着细线，细线穿过跑道。',py:'Mùgùn shang jìzhe xì xiàn, xì xiàn chuānguò pǎodào.',vn:'Trên gậy gỗ buộc sợi dây mảnh, sợi dây vắt ngang đường chạy.'},
     {zh:'坐车的时候一定要系好安全带。',py:'Zuò chē de shíhou yídìng yào jìhǎo ānquándài.',vn:'Khi đi xe nhất định phải thắt dây an toàn.'}
   ],
   colloFull:[
     {zh:'系领带',py:'jì lǐngdài',vn:'thắt cà vạt'},
     {zh:'系鞋带',py:'jì xiédài',vn:'buộc dây giày'},
     {zh:'系安全带',py:'jì ānquándài',vn:'thắt dây an toàn'},
     {zh:'系着细线',py:'jìzhe xì xiàn',vn:'có buộc sợi dây mảnh'},
     {zh:'系在木棍上',py:'jì zài mùgùn shang',vn:'buộc vào gậy gỗ'}
   ],
   patterns:[
     {s:'系 + 领带 / 鞋带 / 安全带',m:'thắt cà vạt / buộc dây giày / thắt dây an toàn'},
     {s:'N + 上 + 系着 + N',m:'trên… có buộc…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu buộc dây giày cho chặt rồi hẵng chạy.',answer:'你把鞋带系好再跑。',answerPy:'Nǐ bǎ xiédài jìhǎo zài pǎo.',
      note:'Đọc jì. 把 + 鞋带 + 系好: động từ có bổ ngữ kết quả 好.',pair:'把'},
     {promptLang:'vi',prompt:'Bố vừa lên xe liền thắt dây an toàn.',answer:'爸爸一上车就系好了安全带。',answerPy:'Bàba yí shàng chē jiù jìhǎole ānquándài.',
      note:'Hai hành động nối tiếp ngay: 一 + V1 + 就 + V2.',pair:'一……就……'}
   ]},

  {n:19,zh:'匹',py:'pǐ',pos:'Lượng từ',vn:'con (dùng cho ngựa)',hv:'thất',em:'🐴',lesson:10,
   explain:['Lượng từ dùng cho ngựa, lừa, la. Còn dùng cho súc vải (一匹布).'],
   usage:'Số từ + 匹 + 马: 一匹马, 三匹马. Không dùng 匹 cho chó, mèo (只) hay bò (头).',
   collo:['一匹马','一匹运动的马','这匹马'],
   ex_zh:'麦布里奇让一匹马从跑道的一头飞奔到另一头。',ex_py:'Màibùlǐqí ràng yì pǐ mǎ cóng pǎodào de yì tóu fēibēn dào lìng yì tóu.',ex_vn:'Muybridge cho một con ngựa phi như bay từ đầu này sang đầu kia của đường chạy.',
   exList:[
     {zh:'麦布里奇让一匹马从跑道的一头飞奔到另一头。',py:'Màibùlǐqí ràng yì pǐ mǎ cóng pǎodào de yì tóu fēibēn dào lìng yì tóu.',vn:'Muybridge cho một con ngựa phi như bay từ đầu này sang đầu kia của đường chạy.'},
     {zh:'各张相片中静止的马连成了一匹运动的马。',py:'Gè zhāng xiàngpiàn zhōng jìngzhǐ de mǎ liánchéngle yì pǐ yùndòng de mǎ.',vn:'Những con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động.'},
     {zh:'草原上有几匹白马在吃草。',py:'Cǎoyuán shang yǒu jǐ pǐ bái mǎ zài chī cǎo.',vn:'Trên thảo nguyên có mấy con ngựa trắng đang gặm cỏ.'}
   ],
   colloFull:[
     {zh:'一匹马',py:'yì pǐ mǎ',vn:'một con ngựa'},
     {zh:'一匹运动的马',py:'yì pǐ yùndòng de mǎ',vn:'một con ngựa đang chuyển động'},
     {zh:'这匹马',py:'zhè pǐ mǎ',vn:'con ngựa này'},
     {zh:'几匹马',py:'jǐ pǐ mǎ',vn:'mấy con ngựa'},
     {zh:'一匹布',py:'yì pǐ bù',vn:'một súc vải'}
   ],
   patterns:[
     {s:'一匹 + 马',m:'một con ngựa'},
     {s:'这 / 那 + 匹 + 马',m:'con ngựa này / kia'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con ngựa này là ông tôi mua năm ngoái.',answer:'这匹马是爷爷去年买的。',answerPy:'Zhè pǐ mǎ shì yéye qùnián mǎi de.',
      note:'这 + 匹 + 马; 是……的 nhấn mạnh người mua và thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy dắt con ngựa đó về nhà.',answer:'他把那匹马牵回了家。',answerPy:'Tā bǎ nà pǐ mǎ qiānhuíle jiā.',
      note:'Tân ngữ xác định (那匹马) đưa lên trước bằng 把.',pair:'把'}
   ]},

  {n:20,zh:'拦',py:'lán',pos:'Động từ',vn:'chặn, cản',hv:'lan',em:'🚧',lesson:10,
   explain:['Chặn lại, không cho đi qua hoặc không cho làm.'],
   usage:'拦 + 住 / 在…… (đúng bảng 词语搭配): 拦住他, 拦在门口; 拦路 (chặn đường); 拦车 (vẫy / chặn xe); 被……拦住了.',
   collo:['拦住','拦路','拦在门口','拦一辆车'],
   ex_zh:'前面不知道发生了什么事，路被拦住了。',ex_py:'Qiánmiàn bù zhīdào fāshēngle shénme shì, lù bèi lánzhù le.',ex_vn:'Phía trước không biết xảy ra chuyện gì, đường bị chặn lại rồi.',
   exList:[
     {zh:'前面不知道发生了什么事，路被拦住了。',py:'Qiánmiàn bù zhīdào fāshēngle shénme shì, lù bèi lánzhù le.',vn:'Phía trước không biết xảy ra chuyện gì, đường bị chặn lại rồi.'},
     {zh:'马一边跑，一边按顺序撞断拦路的24根细线。',py:'Mǎ yìbiān pǎo, yìbiān àn shùnxù zhuàngduàn lán lù de èrshísì gēn xì xiàn.',vn:'Ngựa vừa chạy vừa lần lượt làm đứt 24 sợi dây mảnh chắn ngang đường.'},
     {zh:'他想走，我拦也拦不住。',py:'Tā xiǎng zǒu, wǒ lán yě lán bu zhù.',vn:'Anh ấy muốn đi, tôi có cản cũng không cản được.'}
   ],
   colloFull:[
     {zh:'拦住',py:'lánzhù',vn:'chặn lại'},
     {zh:'拦路',py:'lán lù',vn:'chặn đường'},
     {zh:'拦在门口',py:'lán zài ménkǒu',vn:'chặn ở cửa'},
     {zh:'拦一辆车',py:'lán yí liàng chē',vn:'vẫy / chặn một chiếc xe'},
     {zh:'被拦住了',py:'bèi lánzhù le',vn:'bị chặn lại'}
   ],
   patterns:[
     {s:'拦 + 住 / 在 + nơi chốn',m:'chặn lại / chặn ở…'},
     {s:'被 + (người) + 拦住了',m:'bị (ai) chặn lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa vào cổng đã bị bảo vệ chặn lại.',answer:'他一进门就被保安拦住了。',answerPy:'Tā yí jìn mén jiù bèi bǎo\'ān lánzhù le.',
      note:'被 + 保安 + 拦住了: động từ 拦 cần bổ ngữ 住.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy mọi người đều cản anh ấy, nhưng anh ấy vẫn đi.',answer:'虽然大家都拦他，但是他还是走了。',answerPy:'Suīrán dàjiā dōu lán tā, dànshì tā háishi zǒu le.',
      note:'拦 + người: ngăn cản ai.',pair:'虽然……但是……'}
   ]},

  {n:21,zh:'拍',py:'pāi',pos:'Động từ',vn:'chụp (ảnh), quay (phim); vỗ',hv:'phách',em:'🎬',lesson:10,
   explain:['Chụp ảnh, quay phim: 拍照片, 拍电影.','Nghĩa gốc: vỗ bằng lòng bàn tay: 拍手, 拍桌子.'],
   usage:'拍 + 手 / 桌子 / 照片 / 电影 (đúng bảng 词语搭配 của sách). Bổ ngữ hay gặp: 拍下, 拍好, 拍了一张.',
   collo:['拍照片','拍电影','拍手','拍桌子'],
   ex_zh:'这位导演拍过二十几部电影，得过好几项国际大奖。',ex_py:'Zhè wèi dǎoyǎn pāiguo èrshí jǐ bù diànyǐng, déguo hǎo jǐ xiàng guójì dàjiǎng.',ex_vn:'Vị đạo diễn này đã quay hơn hai mươi bộ phim, từng đoạt mấy giải thưởng quốc tế lớn.',
   exList:[
     {zh:'这位导演拍过二十几部电影，得过好几项国际大奖。',py:'Zhè wèi dǎoyǎn pāiguo èrshí jǐ bù diànyǐng, déguo hǎo jǐ xiàng guójì dàjiǎng.',vn:'Vị đạo diễn này đã quay hơn hai mươi bộ phim, từng đoạt mấy giải thưởng quốc tế lớn.'},
     {zh:'相机连续拍下了24张相片。',py:'Xiàngjī liánxù pāixiàle èrshísì zhāng xiàngpiàn.',vn:'Máy ảnh chụp liên tục 24 tấm ảnh.'},
     {zh:'他气得拍了一下桌子。',py:'Tā qì de pāile yíxià zhuōzi.',vn:'Anh ấy tức đến mức đập bàn một cái.'}
   ],
   colloFull:[
     {zh:'拍照片',py:'pāi zhàopiàn',vn:'chụp ảnh'},
     {zh:'拍电影',py:'pāi diànyǐng',vn:'quay phim'},
     {zh:'拍手',py:'pāi shǒu',vn:'vỗ tay'},
     {zh:'拍桌子',py:'pāi zhuōzi',vn:'đập bàn'},
     {zh:'拍下了24张相片',py:'pāixiàle èrshísì zhāng xiàngpiàn',vn:'chụp được 24 tấm ảnh'}
   ],
   patterns:[
     {s:'拍 + 照片 / 电影',m:'chụp ảnh / quay phim'},
     {s:'拍 + 手 / 桌子',m:'vỗ tay / đập bàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức ảnh này là tôi chụp ở vịnh Hạ Long.',answer:'这张照片是我在下龙湾拍的。',answerPy:'Zhè zhāng zhàopiàn shì wǒ zài Xiàlóng Wān pāi de.',
      note:'是……的 nhấn mạnh nơi chụp (在下龙湾).',pair:'是……的'},
     {promptLang:'vi',prompt:'Cậu chụp giúp tớ tấm ảnh này đẹp một chút nhé.',answer:'你帮我把这张照片拍得好看一点儿。',answerPy:'Nǐ bāng wǒ bǎ zhè zhāng zhàopiàn pāi de hǎokàn yìdiǎnr.',
      note:'把 + 照片 + 拍得 + bổ ngữ trình độ.',pair:'把'}
   ]},

  {n:22,zh:'差距',py:'chājù',pos:'Danh từ',vn:'sự chênh lệch, khoảng cách (trình độ, mức độ)',hv:'sai cự',em:'📏',lesson:10,
   explain:['Mức độ khác nhau giữa hai sự vật: trình độ, thu nhập, điều kiện, chất lượng…','Khác 距离 — khoảng cách về không gian, thời gian (家离学校的距离).'],
   usage:'有差距 / 差距很大 / 缩小差距 / A和B之间的差距.',
   collo:['缩小差距','有差距','差距很大','之间的差距'],
   ex_zh:'我们之间还有很大的差距，我要向他学习，更加努力。',ex_py:'Wǒmen zhījiān hái yǒu hěn dà de chājù, wǒ yào xiàng tā xuéxí, gèngjiā nǔlì.',ex_vn:'Giữa chúng tôi vẫn còn khoảng cách rất lớn, tôi phải học hỏi anh ấy, cố gắng hơn nữa.',
   exList:[
     {zh:'我们之间还有很大的差距，我要向他学习，更加努力。',py:'Wǒmen zhījiān hái yǒu hěn dà de chājù, wǒ yào xiàng tā xuéxí, gèngjiā nǔlì.',vn:'Giữa chúng tôi vẫn còn khoảng cách rất lớn, tôi phải học hỏi anh ấy, cố gắng hơn nữa.'},
     {zh:'相邻两张相片的差距都很小。',py:'Xiānglín liǎng zhāng xiàngpiàn de chājù dōu hěn xiǎo.',vn:'Hai tấm ảnh liền kề nhau đều chỉ chênh lệch rất ít.'},
     {zh:'孩子不喜欢这部老动画片，可能这就是时代的差距吧。',py:'Háizi bù xǐhuan zhè bù lǎo dònghuàpiàn, kěnéng zhè jiù shì shídài de chājù ba.',vn:'Con không thích bộ phim hoạt hình cũ này, có lẽ đó chính là khoảng cách thế hệ.'}
   ],
   colloFull:[
     {zh:'缩小差距',py:'suōxiǎo chājù',vn:'thu hẹp khoảng cách'},
     {zh:'有差距',py:'yǒu chājù',vn:'có sự chênh lệch'},
     {zh:'差距很大',py:'chājù hěn dà',vn:'chênh lệch rất lớn'},
     {zh:'之间的差距',py:'zhījiān de chājù',vn:'khoảng cách giữa…'},
     {zh:'时代的差距',py:'shídài de chājù',vn:'khoảng cách thời đại'}
   ],
   patterns:[
     {s:'A 和 B (之间) 的差距',m:'sự chênh lệch giữa A và B'},
     {s:'缩小 / 拉大 + 差距',m:'thu hẹp / nới rộng khoảng cách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy vẫn còn khoảng cách, nhưng chúng tôi sẽ cố gắng đuổi kịp.',answer:'虽然还有差距，但是我们会努力赶上的。',answerPy:'Suīrán hái yǒu chājù, dànshì wǒmen huì nǔlì gǎnshàng de.',
      note:'有差距: 差距 là danh từ nên đi với 有.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Khoảng cách giữa tôi và cậu ấy càng ngày càng nhỏ.',answer:'我和他的差距越来越小了。',answerPy:'Wǒ hé tā de chājù yuè lái yuè xiǎo le.',
      note:'Chênh lệch trình độ dùng 差距, không dùng 距离.',pair:'越来越'}
   ]},

  {n:23,zh:'显示',py:'xiǎnshì',pos:'Động từ',vn:'cho thấy, thể hiện',hv:'hiển thị',em:'📊',lesson:10,
   explain:['Làm cho người ta thấy rõ một thái độ, năng lực hoặc tình hình.','Khác 显得 (trông có vẻ — tả đặc tính, đi với tính từ). Xem phần 词语辨析.'],
   usage:'Đi với danh từ hoặc một câu nhỏ: 调查显示…… / 相片显示…… / 显示出(了)才能 / 显示本领.',
   collo:['调查显示','相片显示','显示出才能','数据显示'],
   ex_zh:'相片显示：马奔跑时始终有一蹄着地，科恩赢了。',ex_py:'Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì, Kē\'ēn yíng le.',ex_vn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất, Cohen đã thắng.',
   exList:[
     {zh:'相片显示：马奔跑时始终有一蹄着地，科恩赢了。',py:'Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì, Kē\'ēn yíng le.',vn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất, Cohen đã thắng.'},
     {zh:'这次活动的组织显示出了他的才能。',py:'Zhè cì huódòng de zǔzhī xiǎnshì chūle tā de cáinéng.',vn:'Việc tổ chức hoạt động lần này đã cho thấy tài năng của anh ấy.'},
     {zh:'调查显示，只有37%的人愿意回到没有手机的时代。',py:'Diàochá xiǎnshì, zhǐyǒu bǎi fēn zhī sānshíqī de rén yuànyì huídào méiyǒu shǒujī de shídài.',vn:'Khảo sát cho thấy chỉ 37% số người muốn quay lại thời chưa có điện thoại di động.'}
   ],
   colloFull:[
     {zh:'调查显示',py:'diàochá xiǎnshì',vn:'khảo sát cho thấy'},
     {zh:'相片显示',py:'xiàngpiàn xiǎnshì',vn:'ảnh cho thấy'},
     {zh:'显示出才能',py:'xiǎnshì chū cáinéng',vn:'thể hiện ra tài năng'},
     {zh:'数据显示',py:'shùjù xiǎnshì',vn:'số liệu cho thấy'},
     {zh:'显示出自己的本领',py:'xiǎnshì chū zìjǐ de běnlǐng',vn:'thể hiện bản lĩnh của mình'}
   ],
   patterns:[
     {s:'调查 / 数据 / 相片 + 显示：……',m:'khảo sát / số liệu / ảnh cho thấy…'},
     {s:'显示出 + 才能 / 本领',m:'thể hiện ra tài năng / bản lĩnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khảo sát cho thấy thời gian ngủ của học sinh càng ngày càng ít.',answer:'调查显示，学生的睡觉时间越来越少。',answerPy:'Diàochá xiǎnshì, xuésheng de shuìjiào shíjiān yuè lái yuè shǎo.',
      note:'显示 + một câu nhỏ (cả mệnh đề) — dạng hay gặp nhất trong bài đọc HSK 5.',pair:'越来越'},
     {promptLang:'vi',prompt:'Cuộc thi lần này không những cho thấy tài năng của cậu ấy mà còn giúp cậu ấy tự tin hơn.',answer:'这次比赛不仅显示出了他的才能，而且让他更自信了。',answerPy:'Zhè cì bǐsài bùjǐn xiǎnshì chūle tā de cáinéng, érqiě ràng tā gèng zìxìn le.',
      note:'显示出 + danh từ (才能); muốn đi với tính từ phải dùng 显得.',pair:'不仅……而且……'}
   ]},

  {n:24,zh:'意识',py:'yìshi',pos:'Danh từ / Động từ',vn:'ý thức; nhận thức rõ',hv:'ý thức',em:'💡',lesson:10,
   explain:['Danh từ: ý thức (安全意识, 环保意识); 无意识 = vô thức, không cố ý.','Động từ: nhận ra, nhận thức được — thường dùng 意识到.'],
   usage:'意识到 + việc / sai lầm; 有……意识 / 缺乏……意识; 无意识地 + V.',
   collo:['意识到','安全意识','无意识地','环保意识'],
   ex_zh:'事后，有人无意识地快速拉动那一长串相片。',ex_py:'Shìhòu, yǒu rén wú yìshi de kuàisù lādòng nà yì cháng chuàn xiàngpiàn.',ex_vn:'Sau đó, có người vô tình kéo nhanh chuỗi ảnh dài ấy.',
   exList:[
     {zh:'事后，有人无意识地快速拉动那一长串相片。',py:'Shìhòu, yǒu rén wú yìshi de kuàisù lādòng nà yì cháng chuàn xiàngpiàn.',vn:'Sau đó, có người vô tình kéo nhanh chuỗi ảnh dài ấy.'},
     {zh:'他终于意识到了自己的错误。',py:'Tā zhōngyú yìshi dàole zìjǐ de cuòwù.',vn:'Cuối cùng anh ấy đã nhận ra sai lầm của mình.'},
     {zh:'我们要从小培养环保意识。',py:'Wǒmen yào cóngxiǎo péiyǎng huánbǎo yìshi.',vn:'Chúng ta phải bồi dưỡng ý thức bảo vệ môi trường từ nhỏ.'}
   ],
   colloFull:[
     {zh:'意识到',py:'yìshi dào',vn:'nhận ra'},
     {zh:'安全意识',py:'ānquán yìshi',vn:'ý thức an toàn'},
     {zh:'无意识地',py:'wú yìshi de',vn:'một cách vô thức'},
     {zh:'环保意识',py:'huánbǎo yìshi',vn:'ý thức bảo vệ môi trường'},
     {zh:'意识到自己的错误',py:'yìshi dào zìjǐ de cuòwù',vn:'nhận ra sai lầm của mình'}
   ],
   patterns:[
     {s:'意识到 + (việc)',m:'nhận ra…'},
     {s:'无意识地 + V',m:'vô thức / vô tình làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa ra khỏi phòng thi, tôi liền nhận ra mình làm sai một câu.',answer:'我一走出考场就意识到自己做错了一道题。',answerPy:'Wǒ yì zǒuchū kǎochǎng jiù yìshi dào zìjǐ zuòcuòle yí dào tí.',
      note:'意识到 + cả một mệnh đề (自己做错了一道题).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ý thức bảo vệ môi trường của mọi người càng ngày càng mạnh.',answer:'大家的环保意识越来越强了。',answerPy:'Dàjiā de huánbǎo yìshi yuè lái yuè qiáng le.',
      note:'意识 là danh từ; nói ý thức mạnh / yếu dùng 强 / 弱.',pair:'越来越'}
   ]},

  {n:25,zh:'艰苦',py:'jiānkǔ',pos:'Tính từ',vn:'gian khổ',hv:'gian khổ',em:'⛰️',lesson:10,
   explain:['Khó khăn và vất vả (điều kiện, cuộc sống, công việc).'],
   usage:'艰苦(的) + 条件 / 生活 (đúng bảng 词语搭配). Hay gặp: 艰苦的试验, 条件很艰苦, 艰苦奋斗.',
   collo:['艰苦的条件','艰苦的生活','艰苦的试验'],
   ex_zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',ex_py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',ex_vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.',
   exList:[
     {zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.'},
     {zh:'那里的生活条件很艰苦。',py:'Nàli de shēnghuó tiáojiàn hěn jiānkǔ.',vn:'Điều kiện sống ở đó rất gian khổ.'},
     {zh:'爷爷年轻的时候过着艰苦的生活。',py:'Yéye niánqīng de shíhou guòzhe jiānkǔ de shēnghuó.',vn:'Hồi trẻ ông tôi sống một cuộc sống gian khổ.'}
   ],
   colloFull:[
     {zh:'艰苦的条件',py:'jiānkǔ de tiáojiàn',vn:'điều kiện gian khổ'},
     {zh:'艰苦的生活',py:'jiānkǔ de shēnghuó',vn:'cuộc sống gian khổ'},
     {zh:'艰苦的试验',py:'jiānkǔ de shìyàn',vn:'những thử nghiệm gian khổ'},
     {zh:'条件很艰苦',py:'tiáojiàn hěn jiānkǔ',vn:'điều kiện rất gian khổ'},
     {zh:'艰苦奋斗',py:'jiānkǔ fèndòu',vn:'phấn đấu gian khổ'}
   ],
   patterns:[
     {s:'艰苦(的) + 条件 / 生活',m:'điều kiện / cuộc sống gian khổ'},
     {s:'经过 + 艰苦的 + N',m:'trải qua … gian khổ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy điều kiện rất gian khổ, nhưng họ chưa bao giờ than phiền.',answer:'虽然条件很艰苦，但是他们从来不抱怨。',answerPy:'Suīrán tiáojiàn hěn jiānkǔ, dànshì tāmen cónglái bú bàoyuàn.',
      note:'Ôn 抱怨 (bài 1). 艰苦 là tính từ làm vị ngữ: 条件很艰苦.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi chưa từng sống cuộc sống gian khổ như vậy.',answer:'我从来没过过这么艰苦的生活。',answerPy:'Wǒ cónglái méi guòguo zhème jiānkǔ de shēnghuó.',
      note:'过生活 = sống cuộc sống; 过过 = đã từng sống (过 thứ hai là trợ từ).',pair:'从来没……过'}
   ]},

  {n:26,zh:'试验',py:'shìyàn',pos:'Danh từ / Động từ',vn:'sự thử nghiệm; thử nghiệm',hv:'thí nghiệm',em:'🧪',lesson:10,
   explain:['Làm thử để xem kết quả, hiệu quả của một cách làm hay sản phẩm mới.','Khác 实验 (thí nghiệm khoa học trong phòng thí nghiệm để kiểm chứng lý thuyết).'],
   usage:'做试验 / 进行试验 / 试验成功 / 经过……的试验 / 试验一下.',
   collo:['做试验','进行试验','试验成功'],
   ex_zh:'这种新药还在试验阶段。',ex_py:'Zhè zhǒng xīn yào hái zài shìyàn jiēduàn.',ex_vn:'Loại thuốc mới này vẫn đang trong giai đoạn thử nghiệm.',
   exList:[
     {zh:'这种新药还在试验阶段。',py:'Zhè zhǒng xīn yào hái zài shìyàn jiēduàn.',vn:'Loại thuốc mới này vẫn đang trong giai đoạn thử nghiệm.'},
     {zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.'},
     {zh:'他们做了很多次试验，终于成功了。',py:'Tāmen zuòle hěn duō cì shìyàn, zhōngyú chénggōng le.',vn:'Họ đã thử nghiệm rất nhiều lần, cuối cùng đã thành công.'}
   ],
   colloFull:[
     {zh:'做试验',py:'zuò shìyàn',vn:'làm thử nghiệm'},
     {zh:'进行试验',py:'jìnxíng shìyàn',vn:'tiến hành thử nghiệm'},
     {zh:'试验成功',py:'shìyàn chénggōng',vn:'thử nghiệm thành công'},
     {zh:'试验阶段',py:'shìyàn jiēduàn',vn:'giai đoạn thử nghiệm'},
     {zh:'试验一下',py:'shìyàn yíxià',vn:'thử xem một chút'}
   ],
   patterns:[
     {s:'做 / 进行 + 试验',m:'làm / tiến hành thử nghiệm'},
     {s:'试验 + 成功 / 失败',m:'thử nghiệm thành công / thất bại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc thử nghiệm này là do các nhà khoa học làm hai năm trước.',answer:'这个试验是科学家们两年前做的。',answerPy:'Zhège shìyàn shì kēxuéjiāmen liǎng nián qián zuò de.',
      note:'做试验 → 试验是……做的: tân ngữ đưa lên làm chủ ngữ.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần thử nghiệm thành công, chúng ta sẽ có thể bắt đầu sản xuất.',answer:'只要试验成功，我们就可以开始生产。',answerPy:'Zhǐyào shìyàn chénggōng, wǒmen jiù kěyǐ kāishǐ shēngchǎn.',
      note:'试验成功: chủ–vị, 试验 làm danh từ.',pair:'只要……就……'}
   ]},

  {n:27,zh:'逐渐',py:'zhújiàn',pos:'Phó từ',vn:'dần dần',hv:'trục tiệm',em:'📈',lesson:10,
   explain:['Biểu thị mức độ hoặc số lượng tăng lên / giảm đi từng chút một theo thời gian. Đây là điểm ngữ pháp trọng tâm của bài.'],
   usage:'Đứng trước động từ / tính từ: 逐渐 + V (改进 / 习惯 / 增加 / 减少) / 逐渐 + A + 起来. Không đứng trước chủ ngữ.',
   collo:['逐渐改进','逐渐习惯','逐渐增加','逐渐减少'],
   ex_zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',ex_py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',ex_vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.',
   exList:[
     {zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.'},
     {zh:'这项运动首先在亚太地区流行，并逐渐受到世界各地人们的欢迎。',py:'Zhè xiàng yùndòng shǒuxiān zài Yà-Tài dìqū liúxíng, bìng zhújiàn shòudào shìjiè gè dì rénmen de huānyíng.',vn:'Môn thể thao này trước tiên thịnh hành ở khu vực châu Á – Thái Bình Dương, rồi dần dần được mọi người khắp thế giới yêu thích.'},
     {zh:'食物越来越少，老人不得不逐渐限制猴子的食量。',py:'Shíwù yuè lái yuè shǎo, lǎorén bùdébù zhújiàn xiànzhì hóuzi de shíliàng.',vn:'Thức ăn ngày càng ít, ông lão đành phải hạn chế dần khẩu phần của lũ khỉ.'}
   ],
   colloFull:[
     {zh:'逐渐改进',py:'zhújiàn gǎijìn',vn:'dần dần cải tiến'},
     {zh:'逐渐习惯',py:'zhújiàn xíguàn',vn:'dần dần quen'},
     {zh:'逐渐增加',py:'zhújiàn zēngjiā',vn:'tăng dần'},
     {zh:'逐渐减少',py:'zhújiàn jiǎnshǎo',vn:'giảm dần'},
     {zh:'逐渐暖和起来',py:'zhújiàn nuǎnhuo qǐlái',vn:'dần dần ấm lên'}
   ],
   patterns:[
     {s:'逐渐 + V (改进 / 习惯 / 增加)',m:'dần dần …'},
     {s:'逐渐 + A + 起来',m:'dần dần trở nên…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy mới đầu không quen, nhưng tôi đã dần dần quen với cuộc sống ở đây.',answer:'虽然刚开始不习惯，但是我逐渐习惯了这里的生活。',answerPy:'Suīrán gāng kāishǐ bù xíguàn, dànshì wǒ zhújiàn xíguànle zhèli de shēnghuó.',
      note:'逐渐 đứng SAU chủ ngữ 我, trước động từ 习惯.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Vừa sang tháng Tư, trời đã dần dần ấm lên.',answer:'一到四月，天气就逐渐暖和起来了。',answerPy:'Yí dào sì yuè, tiānqì jiù zhújiàn nuǎnhuo qǐlái le.',
      note:'逐渐 + tính từ + 起来: bắt đầu và tăng dần.',pair:'一……就……'}
   ]},

  {n:28,zh:'改进',py:'gǎijìn',pos:'Động từ',vn:'cải tiến, cải thiện',hv:'cải tiến',em:'🔧',lesson:10,
   explain:['Sửa đổi cho tốt hơn, tiến bộ hơn (phương pháp, kỹ thuật, công việc, thái độ).'],
   usage:'改进 + 工作 / 方法 / 态度 (đúng bảng 词语搭配 của sách) / 技术. Khác 改善 (cải thiện điều kiện, đời sống: 改善生活).',
   collo:['改进工作','改进方法','改进态度','改进技术'],
   ex_zh:'我们要不断改进学习方法。',ex_py:'Wǒmen yào búduàn gǎijìn xuéxí fāngfǎ.',ex_vn:'Chúng ta phải không ngừng cải tiến phương pháp học tập.',
   exList:[
     {zh:'我们要不断改进学习方法。',py:'Wǒmen yào búduàn gǎijìn xuéxí fāngfǎ.',vn:'Chúng ta phải không ngừng cải tiến phương pháp học tập.'},
     {zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.',vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.'},
     {zh:'老师听了大家的意见以后，改进了上课的方法。',py:'Lǎoshī tīngle dàjiā de yìjiàn yǐhòu, gǎijìnle shàngkè de fāngfǎ.',vn:'Sau khi nghe ý kiến của mọi người, thầy đã cải tiến cách dạy.'}
   ],
   colloFull:[
     {zh:'改进工作',py:'gǎijìn gōngzuò',vn:'cải tiến công việc'},
     {zh:'改进方法',py:'gǎijìn fāngfǎ',vn:'cải tiến phương pháp'},
     {zh:'改进态度',py:'gǎijìn tàidu',vn:'cải thiện thái độ'},
     {zh:'改进技术',py:'gǎijìn jìshù',vn:'cải tiến kỹ thuật'},
     {zh:'不断改进',py:'búduàn gǎijìn',vn:'không ngừng cải tiến'}
   ],
   patterns:[
     {s:'改进 + 工作 / 方法 / 态度',m:'cải tiến công việc / phương pháp / thái độ'},
     {s:'不断 / 逐渐 + 改进',m:'không ngừng / dần dần cải tiến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy không những cải tiến phương pháp mà còn tiết kiệm được nhiều thời gian.',answer:'他不仅改进了方法，而且节省了很多时间。',answerPy:'Tā bùjǐn gǎijìnle fāngfǎ, érqiě jiéshěngle hěn duō shíjiān.',
      note:'改进 + 方法 là cụm trong bảng 词语搭配 của sách.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Phương pháp này đã được các kỹ sư cải tiến rồi.',answer:'这个方法已经被工程师们改进了。',answerPy:'Zhège fāngfǎ yǐjīng bèi gōngchéngshīmen gǎijìn le.',
      note:'Phó từ 已经 đứng trước 被.',pair:'被'}
   ]},

  {n:29,zh:'成熟',py:'chéngshú',pos:'Tính từ / Động từ',vn:'chín; chín chắn, hoàn thiện',hv:'thành thục',em:'🍎',lesson:10,
   explain:['Nghĩa gốc: (trái cây, lúa) chín.','Nghĩa mở rộng: (người) chín chắn; (kỹ thuật, điều kiện, kinh nghiệm) hoàn thiện, đã phát triển đầy đủ.'],
   usage:'成熟的 + 瓜果 / 人 / 经验 / 看法 / 条件 (đúng bảng 词语搭配). 显得成熟 / 技术成熟 / 条件还不成熟.',
   collo:['成熟的瓜果','成熟的经验','成熟的看法','条件成熟'],
   ex_zh:'几年不见，他显得成熟多了。',ex_py:'Jǐ nián bú jiàn, tā xiǎnde chéngshú duō le.',ex_vn:'Mấy năm không gặp, anh ấy trông chín chắn hơn nhiều.',
   exList:[
     {zh:'几年不见，他显得成熟多了。',py:'Jǐ nián bú jiàn, tā xiǎnde chéngshú duō le.',vn:'Mấy năm không gặp, anh ấy trông chín chắn hơn nhiều.'},
     {zh:'这是已经经过很多人证明的成熟经验。',py:'Zhè shì yǐjīng jīngguò hěn duō rén zhèngmíng de chéngshú jīngyàn.',vn:'Đây là kinh nghiệm đã hoàn thiện, được nhiều người chứng minh.'},
     {zh:'秋天到了，果园里的苹果都成熟了。',py:'Qiūtiān dào le, guǒyuán li de píngguǒ dōu chéngshú le.',vn:'Mùa thu đến, táo trong vườn đều chín cả rồi.'}
   ],
   colloFull:[
     {zh:'成熟的瓜果',py:'chéngshú de guāguǒ',vn:'dưa quả chín'},
     {zh:'成熟的经验',py:'chéngshú de jīngyàn',vn:'kinh nghiệm dày dặn'},
     {zh:'成熟的看法',py:'chéngshú de kànfǎ',vn:'quan điểm chín chắn'},
     {zh:'条件成熟',py:'tiáojiàn chéngshú',vn:'điều kiện chín muồi'},
     {zh:'显得成熟多了',py:'xiǎnde chéngshú duō le',vn:'trông chín chắn hơn nhiều'}
   ],
   patterns:[
     {s:'成熟的 + 瓜果 / 经验 / 看法',m:'quả chín / kinh nghiệm, quan điểm chín chắn'},
     {s:'N + 成熟了 / 还不成熟',m:'… đã chín / còn chưa chín muồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái tôi càng ngày càng chín chắn.',answer:'我妹妹越来越成熟了。',answerPy:'Wǒ mèimei yuè lái yuè chéngshú le.',
      note:'成熟 dùng cho người = chín chắn, trưởng thành.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy cậu ấy tuổi còn nhỏ, nhưng suy nghĩ rất chín chắn.',answer:'虽然他年纪还小，但是想法很成熟。',answerPy:'Suīrán tā niánjì hái xiǎo, dànshì xiǎngfǎ hěn chéngshú.',
      note:'想法 / 看法 + 很成熟: suy nghĩ chín chắn.',pair:'虽然……但是……'}
   ]},

  {n:30,zh:'兄弟',py:'xiōngdì',pos:'Danh từ',vn:'anh em (trai)',hv:'huynh đệ',em:'👬',lesson:10,
   explain:['Anh và em trai. 兄弟俩 = hai anh em.','Khẩu ngữ đọc xiōngdi còn có nghĩa "em trai" hoặc là cách gọi thân mật giữa bạn nam.'],
   usage:'兄弟俩 / 兄弟姐妹 / 亲兄弟 / 好兄弟. Đi sau họ tên: 卢米埃尔兄弟 (anh em nhà Lumière).',
   collo:['兄弟俩','兄弟姐妹','卢米埃尔兄弟','亲兄弟'],
   ex_zh:'兄弟俩也成为历史上最早的电影导演。',ex_py:'Xiōngdì liǎ yě chéngwéi lìshǐ shang zuì zǎo de diànyǐng dǎoyǎn.',ex_vn:'Hai anh em cũng trở thành những đạo diễn điện ảnh sớm nhất trong lịch sử.',
   exList:[
     {zh:'兄弟俩也成为历史上最早的电影导演。',py:'Xiōngdì liǎ yě chéngwéi lìshǐ shang zuì zǎo de diànyǐng dǎoyǎn.',vn:'Hai anh em cũng trở thành những đạo diễn điện ảnh sớm nhất trong lịch sử.'},
     {zh:'你有兄弟姐妹吗？',py:'Nǐ yǒu xiōngdì jiěmèi ma?',vn:'Bạn có anh chị em không?'},
     {zh:'他们兄弟俩长得一模一样。',py:'Tāmen xiōngdì liǎ zhǎng de yìmú-yíyàng.',vn:'Hai anh em họ trông giống hệt nhau.'}
   ],
   colloFull:[
     {zh:'兄弟俩',py:'xiōngdì liǎ',vn:'hai anh em'},
     {zh:'兄弟姐妹',py:'xiōngdì jiěmèi',vn:'anh chị em'},
     {zh:'卢米埃尔兄弟',py:'Lúmǐ\'āi\'ěr xiōngdì',vn:'anh em nhà Lumière'},
     {zh:'亲兄弟',py:'qīn xiōngdì',vn:'anh em ruột'},
     {zh:'好兄弟',py:'hǎo xiōngdì',vn:'anh em tốt, bạn thân'}
   ],
   patterns:[
     {s:'兄弟俩 / 兄弟姐妹',m:'hai anh em / anh chị em'},
     {s:'Họ + 兄弟',m:'anh em nhà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai anh em họ chưa bao giờ cãi nhau.',answer:'他们兄弟俩从来没吵过架。',answerPy:'Tāmen xiōngdì liǎ cónglái méi chǎoguo jià.',
      note:'Ôn 吵架 (bài 1): ly hợp từ, 过 chen vào giữa.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Hai anh em vừa gặp nhau là nói chuyện không dứt.',answer:'兄弟俩一见面就说个不停。',answerPy:'Xiōngdì liǎ yí jiànmiàn jiù shuō ge bù tíng.',
      note:'兄弟俩 làm chủ ngữ chung cho cả hai vế.',pair:'一……就……'}
   ]},

  {n:31,zh:'播放',py:'bōfàng',pos:'Động từ',vn:'phát (sóng), chiếu',hv:'bá phóng',em:'📺',lesson:10,
   explain:['Phát chương trình, phim, bài hát qua TV, radio, loa, hoặc chiếu cho người xem.'],
   usage:'播放 + 电影 / 节目 / 音乐 / 广告; 向公众播放; 给 + người + 播放.',
   collo:['播放电影','播放节目','播放音乐','向公众播放'],
   ex_zh:'1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》。',ex_py:'Yī bā jiǔ wǔ nián shí\'èr yuè èrshíbā rì, Fǎguó rén Lúmǐ\'āi\'ěr xiōngdì zài Bālí dì-yī cì xiàng gōngzhòng bōfàngle duǎnpiàn 《Huǒchē Dào Zhàn》.',ex_vn:'Ngày 28 tháng 12 năm 1895, anh em nhà Lumière người Pháp lần đầu tiên chiếu đoạn phim ngắn "Tàu đến ga" cho công chúng xem tại Paris.',
   exList:[
     {zh:'1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》。',py:'Yī bā jiǔ wǔ nián shí\'èr yuè èrshíbā rì, Fǎguó rén Lúmǐ\'āi\'ěr xiōngdì zài Bālí dì-yī cì xiàng gōngzhòng bōfàngle duǎnpiàn 《Huǒchē Dào Zhàn》.',vn:'Ngày 28 tháng 12 năm 1895, anh em nhà Lumière người Pháp lần đầu tiên chiếu đoạn phim ngắn "Tàu đến ga" cho công chúng xem tại Paris.'},
     {zh:'电影频道每天晚上都播放一些原版电影。',py:'Diànyǐng píndào měi tiān wǎnshang dōu bōfàng yìxiē yuánbǎn diànyǐng.',vn:'Kênh điện ảnh tối nào cũng chiếu một số phim bản gốc.'},
     {zh:'老师上课时给我们播放了一段录音。',py:'Lǎoshī shàngkè shí gěi wǒmen bōfàngle yí duàn lùyīn.',vn:'Trong giờ học, thầy mở cho chúng tôi nghe một đoạn ghi âm.'}
   ],
   colloFull:[
     {zh:'播放电影',py:'bōfàng diànyǐng',vn:'chiếu phim'},
     {zh:'播放节目',py:'bōfàng jiémù',vn:'phát chương trình'},
     {zh:'播放音乐',py:'bōfàng yīnyuè',vn:'mở nhạc'},
     {zh:'向公众播放',py:'xiàng gōngzhòng bōfàng',vn:'chiếu cho công chúng'},
     {zh:'播放广告',py:'bōfàng guǎnggào',vn:'phát quảng cáo'}
   ],
   patterns:[
     {s:'播放 + 电影 / 节目 / 音乐',m:'chiếu phim / phát chương trình / mở nhạc'},
     {s:'向 / 给 + người + 播放 + N',m:'chiếu / phát cho ai xem, nghe'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này là đài truyền hình phát tối hôm qua.',answer:'这部电影是电视台昨天晚上播放的。',answerPy:'Zhè bù diànyǐng shì diànshìtái zuótiān wǎnshang bōfàng de.',
      note:'Lượng từ của 电影 là 部.',pair:'是……的'},
     {promptLang:'vi',prompt:'Quảng cáo mà đài truyền hình phát càng ngày càng nhiều.',answer:'电视台播放的广告越来越多了。',answerPy:'Diànshìtái bōfàng de guǎnggào yuè lái yuè duō le.',
      note:'电视台播放的 làm định ngữ cho 广告.',pair:'越来越'}
   ]},

  {n:32,zh:'纪念',py:'jìniàn',pos:'Động từ / Danh từ',vn:'kỷ niệm, tưởng niệm; vật kỷ niệm',hv:'kỷ niệm',em:'🎗️',lesson:10,
   explain:['Động từ: dùng hành động hay đồ vật để nhớ đến người hoặc sự kiện.','Danh từ: vật kỷ niệm (留个纪念); 纪念日 = ngày kỷ niệm, 纪念品 = quà lưu niệm.'],
   usage:'纪念 + người / sự kiện; 纪念日 / 纪念品 / 留个纪念 / 值得纪念.',
   collo:['纪念日','纪念品','留个纪念','值得纪念'],
   ex_zh:'这一天后来成为电影产生的纪念日。',ex_py:'Zhè yì tiān hòulái chéngwéi diànyǐng chǎnshēng de jìniànrì.',ex_vn:'Ngày này về sau trở thành ngày kỷ niệm sự ra đời của điện ảnh.',
   exList:[
     {zh:'这一天后来成为电影产生的纪念日。',py:'Zhè yì tiān hòulái chéngwéi diànyǐng chǎnshēng de jìniànrì.',vn:'Ngày này về sau trở thành ngày kỷ niệm sự ra đời của điện ảnh.'},
     {zh:'我们一起拍张照片，留个纪念吧。',py:'Wǒmen yìqǐ pāi zhāng zhàopiàn, liú ge jìniàn ba.',vn:'Chúng mình chụp chung một tấm ảnh để làm kỷ niệm nhé.'},
     {zh:'毕业那天是一个值得纪念的日子。',py:'Bìyè nà tiān shì yí ge zhíde jìniàn de rìzi.',vn:'Ngày tốt nghiệp là một ngày đáng ghi nhớ.'}
   ],
   colloFull:[
     {zh:'纪念日',py:'jìniànrì',vn:'ngày kỷ niệm'},
     {zh:'纪念品',py:'jìniànpǐn',vn:'quà lưu niệm'},
     {zh:'留个纪念',py:'liú ge jìniàn',vn:'để làm kỷ niệm'},
     {zh:'值得纪念',py:'zhíde jìniàn',vn:'đáng ghi nhớ'},
     {zh:'纪念这一天',py:'jìniàn zhè yì tiān',vn:'kỷ niệm ngày này'}
   ],
   patterns:[
     {s:'N + 纪念日 / 纪念品',m:'ngày kỷ niệm / quà lưu niệm'},
     {s:'留(个)纪念 / 值得纪念',m:'để làm kỷ niệm / đáng ghi nhớ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc đồng hồ này là cô tôi tặng để làm kỷ niệm.',answer:'这块手表是姑姑送给我做纪念的。',answerPy:'Zhè kuài shǒubiǎo shì gūgu sòng gěi wǒ zuò jìniàn de.',
      note:'做纪念 = làm kỷ niệm; lượng từ của 手表 là 块.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi để tấm ảnh đó trong ví làm kỷ niệm.',answer:'我把那张照片放在钱包里做纪念。',answerPy:'Wǒ bǎ nà zhāng zhàopiàn fàng zài qiánbāo li zuò jìniàn.',
      note:'把 + 照片 + 放在 + nơi chốn + mục đích (做纪念).',pair:'把'}
   ]},

  {n:33,zh:'导演',py:'dǎoyǎn',pos:'Danh từ / Động từ',vn:'đạo diễn',hv:'đạo diễn',em:'🎥',lesson:10,
   explain:['Danh từ: người chỉ đạo việc dựng phim, kịch.','Động từ: đạo diễn (một bộ phim): 这部电影是他导演的.'],
   usage:'Lượng từ 位 / 个 / 名: 一位导演. Hay gặp: 电影导演, 著名导演, 当导演.',
   collo:['电影导演','一位导演','著名导演','当导演'],
   ex_zh:'他的理想是当一名电影导演。',ex_py:'Tā de lǐxiǎng shì dāng yì míng diànyǐng dǎoyǎn.',ex_vn:'Ước mơ của cậu ấy là trở thành một đạo diễn điện ảnh.',
   exList:[
     {zh:'他的理想是当一名电影导演。',py:'Tā de lǐxiǎng shì dāng yì míng diànyǐng dǎoyǎn.',vn:'Ước mơ của cậu ấy là trở thành một đạo diễn điện ảnh.'},
     {zh:'兄弟俩也成为历史上最早的电影导演。',py:'Xiōngdì liǎ yě chéngwéi lìshǐ shang zuì zǎo de diànyǐng dǎoyǎn.',vn:'Hai anh em cũng trở thành những đạo diễn điện ảnh sớm nhất trong lịch sử.'},
     {zh:'这部电影是张艺谋导演的。',py:'Zhè bù diànyǐng shì Zhāng Yìmóu dǎoyǎn de.',vn:'Bộ phim này do Trương Nghệ Mưu đạo diễn.'}
   ],
   colloFull:[
     {zh:'电影导演',py:'diànyǐng dǎoyǎn',vn:'đạo diễn điện ảnh'},
     {zh:'一位导演',py:'yí wèi dǎoyǎn',vn:'một vị đạo diễn'},
     {zh:'著名导演',py:'zhùmíng dǎoyǎn',vn:'đạo diễn nổi tiếng'},
     {zh:'当导演',py:'dāng dǎoyǎn',vn:'làm đạo diễn'},
     {zh:'年轻的导演',py:'niánqīng de dǎoyǎn',vn:'đạo diễn trẻ'}
   ],
   patterns:[
     {s:'电影 / 著名 + 导演',m:'đạo diễn điện ảnh / nổi tiếng'},
     {s:'N + 是 + người + 导演的',m:'… do ai đạo diễn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này do một đạo diễn trẻ quay.',answer:'这部电影是一位年轻导演拍的。',answerPy:'Zhè bù diànyǐng shì yí wèi niánqīng dǎoyǎn pāi de.',
      note:'拍电影 = quay phim; 是……的 nhấn mạnh người thực hiện.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy không những là diễn viên mà còn là đạo diễn.',answer:'他不仅是演员，而且还是导演。',answerPy:'Tā bùjǐn shì yǎnyuán, érqiě hái shì dǎoyǎn.',
      note:'导演 ở đây là danh từ chỉ nghề nghiệp.',pair:'不仅……而且……'}
   ]},

  {n:34,zh:'瞬间',py:'shùnjiān',pos:'Danh từ',vn:'chốc lát, khoảnh khắc',hv:'thuấn gian',em:'⚡',lesson:10,
   explain:['Khoảng thời gian cực ngắn, trong chớp mắt (瞬 = chớp mắt).'],
   usage:'一瞬间 / 那一瞬间 / 每一瞬间 / 美好的瞬间; làm trạng ngữ: 瞬间 + V (trong chớp mắt đã…).',
   collo:['一瞬间','那一瞬间','每一瞬间','美好的瞬间'],
   ex_zh:'留心生活的每一瞬间，并为之争论。',ex_py:'Liúxīn shēnghuó de měi yí shùnjiān, bìng wèi zhī zhēnglùn.',ex_vn:'Để ý từng khoảnh khắc của cuộc sống, và tranh luận về nó.',
   exList:[
     {zh:'留心生活的每一瞬间，并为之争论。',py:'Liúxīn shēnghuó de měi yí shùnjiān, bìng wèi zhī zhēnglùn.',vn:'Để ý từng khoảnh khắc của cuộc sống, và tranh luận về nó.'},
     {zh:'看到妈妈的那一瞬间，我哭了。',py:'Kàndào māma de nà yí shùnjiān, wǒ kū le.',vn:'Khoảnh khắc nhìn thấy mẹ, tôi đã khóc.'},
     {zh:'摄影师用相机记录下了这个美好的瞬间。',py:'Shèyǐngshī yòng xiàngjī jìlù xiàle zhège měihǎo de shùnjiān.',vn:'Nhiếp ảnh gia đã dùng máy ảnh ghi lại khoảnh khắc đẹp đẽ này.'}
   ],
   colloFull:[
     {zh:'一瞬间',py:'yí shùnjiān',vn:'trong chớp mắt'},
     {zh:'那一瞬间',py:'nà yí shùnjiān',vn:'khoảnh khắc ấy'},
     {zh:'每一瞬间',py:'měi yí shùnjiān',vn:'từng khoảnh khắc'},
     {zh:'美好的瞬间',py:'měihǎo de shùnjiān',vn:'khoảnh khắc đẹp'},
     {zh:'瞬间就消失了',py:'shùnjiān jiù xiāoshī le',vn:'chớp mắt đã biến mất'}
   ],
   patterns:[
     {s:'(在)……的那一瞬间',m:'vào khoảnh khắc…'},
     {s:'记录 / 留住 + 美好的瞬间',m:'ghi lại / giữ lại khoảnh khắc đẹp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khoảnh khắc đẹp này đã được nhiếp ảnh gia chụp lại.',answer:'这个美好的瞬间被摄影师拍了下来。',answerPy:'Zhège měihǎo de shùnjiān bèi shèyǐngshī pāile xiàlái.',
      note:'拍下来 = chụp lại, giữ lại; tân ngữ chen giữa hoặc đưa lên bằng 被.',pair:'被'},
     {promptLang:'vi',prompt:'Vừa nhìn thấy tấm ảnh ấy, trong chớp mắt tôi nhớ lại rất nhiều chuyện cũ.',answer:'一看到那张照片，我一瞬间就想起了很多往事。',answerPy:'Yí kàndào nà zhāng zhàopiàn, wǒ yí shùnjiān jiù xiǎngqǐle hěn duō wǎngshì.',
      note:'一瞬间 làm trạng ngữ thời gian, đứng trước 就 + V.',pair:'一……就……'}
   ]},

  {n:35,zh:'请求',py:'qǐngqiú',pos:'Động từ / Danh từ',vn:'yêu cầu, đề nghị; lời thỉnh cầu',hv:'thỉnh cầu',em:'🙏',lesson:10,
   explain:['Động từ: đề nghị một cách lịch sự, trang trọng: 请求帮助.','Danh từ: lời đề nghị: 同意我的请求 / 拒绝他的请求.'],
   usage:'请求 + 帮助 / 原谅 / 支持; 同意 / 答应 / 拒绝 + ……的请求; 提出请求. Trang trọng hơn 求.',
   collo:['请求帮助','同意我的请求','拒绝请求','提出请求'],
   ex_zh:'真心希望您能同意我的请求，帮我这个忙！',ex_py:'Zhēnxīn xīwàng nín néng tóngyì wǒ de qǐngqiú, bāng wǒ zhège máng!',ex_vn:'Thật lòng mong ngài đồng ý lời đề nghị của tôi, giúp tôi việc này!',
   exList:[
     {zh:'真心希望您能同意我的请求，帮我这个忙！',py:'Zhēnxīn xīwàng nín néng tóngyì wǒ de qǐngqiú, bāng wǒ zhège máng!',vn:'Thật lòng mong ngài đồng ý lời đề nghị của tôi, giúp tôi việc này!'},
     {zh:'适时请求帮助、认真研究，或许重大发现就在你的眼前。',py:'Shìshí qǐngqiú bāngzhù, rènzhēn yánjiū, huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',vn:'Nhờ giúp đỡ đúng lúc, nghiên cứu nghiêm túc, có lẽ phát hiện trọng đại ở ngay trước mắt bạn.'},
     {zh:'遇到解决不了的问题，要学会请求别人的帮助。',py:'Yùdào jiějué bu liǎo de wèntí, yào xuéhuì qǐngqiú biérén de bāngzhù.',vn:'Gặp vấn đề không giải quyết được thì phải biết nhờ người khác giúp đỡ.'}
   ],
   colloFull:[
     {zh:'请求帮助',py:'qǐngqiú bāngzhù',vn:'đề nghị giúp đỡ'},
     {zh:'同意我的请求',py:'tóngyì wǒ de qǐngqiú',vn:'đồng ý lời đề nghị của tôi'},
     {zh:'拒绝请求',py:'jùjué qǐngqiú',vn:'từ chối lời đề nghị'},
     {zh:'提出请求',py:'tíchū qǐngqiú',vn:'đưa ra lời đề nghị'},
     {zh:'请求原谅',py:'qǐngqiú yuánliàng',vn:'xin tha thứ'}
   ],
   patterns:[
     {s:'请求 + (người) + 帮助 / 原谅',m:'đề nghị (ai) giúp đỡ / xin tha thứ'},
     {s:'同意 / 拒绝 + ……的请求',m:'đồng ý / từ chối lời đề nghị của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời đề nghị của tôi đã bị giám đốc từ chối.',answer:'我的请求被经理拒绝了。',answerPy:'Wǒ de qǐngqiú bèi jīnglǐ jùjué le.',
      note:'请求 ở đây là danh từ, làm chủ ngữ câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần cậu chịu nhờ giúp đỡ thì mọi người đều sẵn lòng giúp cậu.',answer:'只要你愿意请求帮助，大家就都愿意帮你。',answerPy:'Zhǐyào nǐ yuànyì qǐngqiú bāngzhù, dàjiā jiù dōu yuànyì bāng nǐ.',
      note:'请求 ở đây là động từ; 就 đứng sau chủ ngữ 大家 của vế sau.',pair:'只要……就……'}
   ]},

  {n:36,zh:'或许',py:'huòxǔ',pos:'Phó từ',vn:'có lẽ, có thể',hv:'hoặc hứa',em:'🤔',lesson:10,
   explain:['Biểu thị phỏng đoán, không chắc chắn = 也许, 可能. Hơi thiên về văn viết. Đây là điểm ngữ pháp trọng tâm của bài.','Chú ý: khác 或者 (liên từ "hoặc" — nối hai lựa chọn).'],
   usage:'Đứng trước động từ hoặc đầu câu: 或许 + V / 或许 + câu. Hay đi với 会, 是, 能, 就.',
   collo:['或许会','或许是','或许能'],
   ex_zh:'留心生活的每一瞬间，并为之争论，适时请求帮助、认真研究，或许重大发现就在你的眼前。',ex_py:'Liúxīn shēnghuó de měi yí shùnjiān, bìng wèi zhī zhēnglùn, shìshí qǐngqiú bāngzhù, rènzhēn yánjiū, huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',ex_vn:'Để ý từng khoảnh khắc của cuộc sống, tranh luận về nó, nhờ giúp đỡ đúng lúc, nghiên cứu nghiêm túc — có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.',
   exList:[
     {zh:'留心生活的每一瞬间，并为之争论，适时请求帮助、认真研究，或许重大发现就在你的眼前。',py:'Liúxīn shēnghuó de měi yí shùnjiān, bìng wèi zhī zhēnglùn, shìshí qǐngqiú bāngzhù, rènzhēn yánjiū, huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',vn:'Để ý từng khoảnh khắc của cuộc sống, tranh luận về nó, nhờ giúp đỡ đúng lúc, nghiên cứu nghiêm túc — có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.'},
     {zh:'虽然以前她不支持你，但或许这次会有变化。',py:'Suīrán yǐqián tā bù zhīchí nǐ, dàn huòxǔ zhè cì huì yǒu biànhuà.',vn:'Tuy trước đây cô ấy không ủng hộ cậu, nhưng có lẽ lần này sẽ khác.'},
     {zh:'或许正是因为这一点一滴的努力，你就会走在别人的前面。',py:'Huòxǔ zhèng shì yīnwèi zhè yìdiǎn-yìdī de nǔlì, nǐ jiù huì zǒu zài biérén de qiánmiàn.',vn:'Có lẽ chính nhờ những nỗ lực từng chút một ấy mà bạn sẽ đi trước người khác.'}
   ],
   colloFull:[
     {zh:'或许会',py:'huòxǔ huì',vn:'có lẽ sẽ'},
     {zh:'或许是',py:'huòxǔ shì',vn:'có lẽ là'},
     {zh:'或许能',py:'huòxǔ néng',vn:'có lẽ có thể'},
     {zh:'或许这次会有变化',py:'huòxǔ zhè cì huì yǒu biànhuà',vn:'có lẽ lần này sẽ khác'},
     {zh:'或许就在你的眼前',py:'huòxǔ jiù zài nǐ de yǎnqián',vn:'có lẽ ở ngay trước mắt bạn'}
   ],
   patterns:[
     {s:'或许 + 会 / 能 / 是 + …',m:'có lẽ sẽ / có thể / có lẽ là…'},
     {s:'或许 + câu',m:'có lẽ… (đặt đầu câu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lần này không thành công, nhưng lần sau có lẽ sẽ được.',answer:'虽然这次没成功，但是下次或许就能成功。',answerPy:'Suīrán zhè cì méi chénggōng, dànshì xià cì huòxǔ jiù néng chénggōng.',
      note:'或许 đứng trước 就 + 能 + V.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần cậu kiên trì, có lẽ sẽ tạo nên kỳ tích.',answer:'只要你坚持下去，或许就能创造奇迹。',answerPy:'Zhǐyào nǐ jiānchí xiàqù, huòxǔ jiù néng chuàngzào qíjì.',
      note:'或许 làm câu bớt khẳng định: "có lẽ sẽ", không phải "chắc chắn sẽ".',pair:'只要……就……'}
   ]},

  {n:37,zh:'重大',py:'zhòngdà',pos:'Tính từ',vn:'trọng đại, to lớn, quan trọng',hv:'trọng đại',em:'🏆',lesson:10,
   explain:['To lớn và quan trọng — dùng cho sự việc trừu tượng: 发现, 发明, 影响, 决定, 事件. Không dùng cho đồ vật cụ thể (không nói 重大的房子).'],
   usage:'重大(的) + 发现 / 发明 / 影响 / 决定 / 问题; 对……产生重大影响.',
   collo:['重大发现','重大影响','重大决定','重大问题'],
   ex_zh:'或许重大发现就在你的眼前。',ex_py:'Huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',ex_vn:'Có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.',
   exList:[
     {zh:'或许重大发现就在你的眼前。',py:'Huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',vn:'Có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.'},
     {zh:'这些发明对我们的生产和生活产生了重大的影响。',py:'Zhèxiē fāmíng duì wǒmen de shēngchǎn hé shēnghuó chǎnshēngle zhòngdà de yǐngxiǎng.',vn:'Những phát minh này đã có ảnh hưởng to lớn đến sản xuất và đời sống của chúng ta.'},
     {zh:'选大学专业是人生中一个重大的决定。',py:'Xuǎn dàxué zhuānyè shì rénshēng zhōng yí ge zhòngdà de juédìng.',vn:'Chọn ngành đại học là một quyết định trọng đại trong đời.'}
   ],
   colloFull:[
     {zh:'重大发现',py:'zhòngdà fāxiàn',vn:'phát hiện trọng đại'},
     {zh:'重大影响',py:'zhòngdà yǐngxiǎng',vn:'ảnh hưởng to lớn'},
     {zh:'重大决定',py:'zhòngdà juédìng',vn:'quyết định trọng đại'},
     {zh:'重大问题',py:'zhòngdà wèntí',vn:'vấn đề hệ trọng'},
     {zh:'重大的发明',py:'zhòngdà de fāmíng',vn:'phát minh quan trọng'}
   ],
   patterns:[
     {s:'重大(的) + 发现 / 影响 / 决定',m:'phát hiện / ảnh hưởng / quyết định trọng đại'},
     {s:'对……产生重大(的)影响',m:'có ảnh hưởng lớn đến…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phát hiện trọng đại này là do một học sinh tình cờ tìm ra.',answer:'这个重大发现是一个学生无意中发现的。',answerPy:'Zhège zhòngdà fāxiàn shì yí ge xuésheng wúyì zhōng fāxiàn de.',
      note:'重大 bổ nghĩa cho danh từ trừu tượng 发现.',pair:'是……的'},
     {promptLang:'vi',prompt:'Ngay cả một quyết định trọng đại như vậy, cậu ấy cũng không hỏi ý kiến bố mẹ.',answer:'连这么重大的决定，他都没有问父母的意见。',answerPy:'Lián zhème zhòngdà de juédìng, tā dōu méiyǒu wèn fùmǔ de yìjiàn.',
      note:'连 + tân ngữ đưa lên đầu câu + chủ ngữ + 都.',pair:'连……都……'}
   ]},

  // ── 专有名词 (tên riêng) — sách liệt kê riêng, học để đọc hiểu bài ──
  {n:38,zh:'加利福尼亚州',py:'Jiālìfúníyà Zhōu',pos:'Danh từ riêng',vn:'bang California (Mỹ)',hv:'Gia Lợi Phúc Ni Á châu',em:'🌴',lesson:10,
   explain:['Một bang ở bờ tây nước Mỹ. 州 = bang (đơn vị hành chính của Mỹ).'],
   usage:'Thường nói 美国加利福尼亚州; gọi tắt là 加州 (Jiāzhōu).',
   collo:['美国加利福尼亚州','加州','加利福尼亚州的酒店'],
   ex_zh:'1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩进行了辩论。',ex_py:'Yī bā qī èr nián de yì tiān, zài Měiguó Jiālìfúníyà Zhōu de yí ge jiǔdiàn li, Sītǎnfú yǔ Kē\'ēn jìnxíngle biànlùn.',ex_vn:'Một ngày năm 1872, trong một khách sạn ở bang California nước Mỹ, Stanford và Cohen đã tranh luận với nhau.',
   exList:[
     {zh:'1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩进行了辩论。',py:'Yī bā qī èr nián de yì tiān, zài Měiguó Jiālìfúníyà Zhōu de yí ge jiǔdiàn li, Sītǎnfú yǔ Kē\'ēn jìnxíngle biànlùn.',vn:'Một ngày năm 1872, trong một khách sạn ở bang California nước Mỹ, Stanford và Cohen đã tranh luận với nhau.'},
     {zh:'我表哥在加州上大学。',py:'Wǒ biǎogē zài Jiāzhōu shàng dàxué.',vn:'Anh họ tôi học đại học ở California.'}
   ],
   colloFull:[
     {zh:'美国加利福尼亚州',py:'Měiguó Jiālìfúníyà Zhōu',vn:'bang California, Mỹ'},
     {zh:'加州',py:'Jiāzhōu',vn:'California (gọi tắt)'},
     {zh:'加利福尼亚州的酒店',py:'Jiālìfúníyà Zhōu de jiǔdiàn',vn:'khách sạn ở California'},
     {zh:'去加利福尼亚州旅游',py:'qù Jiālìfúníyà Zhōu lǚyóu',vn:'đi du lịch California'}
   ],
   patterns:[
     {s:'美国 + 加利福尼亚州',m:'bang California, Mỹ (từ lớn đến nhỏ)'},
     {s:'加州 (gọi tắt)',m:'California'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng đến California.',answer:'我从来没去过加利福尼亚州。',answerPy:'Wǒ cónglái méi qùguo Jiālìfúníyà Zhōu.',
      note:'Địa danh làm tân ngữ của 去过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cuộc tranh luận đó diễn ra ở California.',answer:'那场辩论是在加利福尼亚州进行的。',answerPy:'Nà chǎng biànlùn shì zài Jiālìfúníyà Zhōu jìnxíng de.',
      note:'是 + 在 + nơi chốn + V + 的: nhấn mạnh nơi xảy ra.',pair:'是……的'}
   ]},

  {n:39,zh:'斯坦福',py:'Sītǎnfú',pos:'Danh từ riêng',vn:'Stanford (Leland Stanford)',hv:'Tư Thản Phúc',em:'🎩',lesson:10,
   explain:['Leland Stanford (1824–1893), doanh nhân, chính khách Mỹ, rất mê ngựa; người sáng lập Đại học Stanford.','Trong bài: người cho rằng khi phi, bốn móng ngựa đều rời khỏi mặt đất — và ông đã thua.'],
   usage:'Tên người phiên âm. Cũng là tên trường 斯坦福大学 (Đại học Stanford).',
   collo:['斯坦福认为','斯坦福与科恩','斯坦福大学'],
   ex_zh:'斯坦福认为，马奔跑得那么快，在跳起时四蹄应该都是不落地的。',ex_py:'Sītǎnfú rènwéi, mǎ bēnpǎo de nàme kuài, zài tiàoqǐ shí sì tí yīnggāi dōu shì bú luòdì de.',ex_vn:'Stanford cho rằng ngựa phi nhanh như vậy thì khi nhảy lên, cả bốn móng hẳn đều không chạm đất.',
   exList:[
     {zh:'斯坦福认为，马奔跑得那么快，在跳起时四蹄应该都是不落地的。',py:'Sītǎnfú rènwéi, mǎ bēnpǎo de nàme kuài, zài tiàoqǐ shí sì tí yīnggāi dōu shì bú luòdì de.',vn:'Stanford cho rằng ngựa phi nhanh như vậy thì khi nhảy lên, cả bốn móng hẳn đều không chạm đất.'},
     {zh:'斯坦福大学是美国很有名的大学。',py:'Sītǎnfú Dàxué shì Měiguó hěn yǒumíng de dàxué.',vn:'Đại học Stanford là trường đại học rất nổi tiếng của Mỹ.'}
   ],
   colloFull:[
     {zh:'斯坦福认为',py:'Sītǎnfú rènwéi',vn:'Stanford cho rằng'},
     {zh:'斯坦福与科恩',py:'Sītǎnfú yǔ Kē\'ēn',vn:'Stanford và Cohen'},
     {zh:'斯坦福大学',py:'Sītǎnfú Dàxué',vn:'Đại học Stanford'},
     {zh:'斯坦福输了',py:'Sītǎnfú shū le',vn:'Stanford đã thua'}
   ],
   patterns:[
     {s:'斯坦福 + 认为……',m:'Stanford cho rằng…'},
     {s:'斯坦福 + 与 + 科恩',m:'Stanford và Cohen (与 = 和, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Stanford đã bị những bức ảnh thuyết phục.',answer:'斯坦福被相片说服了。',answerPy:'Sītǎnfú bèi xiàngpiàn shuōfú le.',
      note:'Tác nhân của 被 có thể là vật (相片).',pair:'被'},
     {promptLang:'vi',prompt:'Tuy Stanford thua, nhưng ông ấy rất vui.',answer:'虽然斯坦福输了，但是他很高兴。',answerPy:'Suīrán Sītǎnfú shū le, dànshì tā hěn gāoxìng.',
      note:'Hai vế khác nhau về kỳ vọng → 虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:40,zh:'科恩',py:'Kē\'ēn',pos:'Danh từ riêng',vn:'Cohen',hv:'Khoa Ân',em:'🧔',lesson:10,
   explain:['Người tranh luận với Stanford trong bài; cho rằng khi ngựa phi luôn có một móng chạm đất — và ông đã thắng.'],
   usage:'Tên người phiên âm (Cohen). Pinyin có dấu cách âm: Kē\'ēn.',
   collo:['科恩认为','科恩赢了','科恩的看法'],
   ex_zh:'而科恩认为，马要是四蹄都不着地，那不是成了青蛙啦？',ex_py:'Ér Kē\'ēn rènwéi, mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la?',ex_vn:'Còn Cohen cho rằng, ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao?',
   exList:[
     {zh:'而科恩认为，马要是四蹄都不着地，那不是成了青蛙啦？',py:'Ér Kē\'ēn rènwéi, mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la?',vn:'Còn Cohen cho rằng, ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao?'},
     {zh:'相片显示，科恩的看法是对的。',py:'Xiàngpiàn xiǎnshì, Kē\'ēn de kànfǎ shì duì de.',vn:'Ảnh cho thấy quan điểm của Cohen là đúng.'}
   ],
   colloFull:[
     {zh:'科恩认为',py:'Kē\'ēn rènwéi',vn:'Cohen cho rằng'},
     {zh:'科恩赢了',py:'Kē\'ēn yíng le',vn:'Cohen đã thắng'},
     {zh:'科恩的看法',py:'Kē\'ēn de kànfǎ',vn:'quan điểm của Cohen'},
     {zh:'和科恩争论',py:'hé Kē\'ēn zhēnglùn',vn:'tranh cãi với Cohen'}
   ],
   patterns:[
     {s:'科恩 + 认为……',m:'Cohen cho rằng…'},
     {s:'……，科恩赢了',m:'…, Cohen đã thắng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cohen từ đầu đến cuối không bị Stanford thuyết phục.',answer:'科恩始终没有被斯坦福说服。',answerPy:'Kē\'ēn shǐzhōng méiyǒu bèi Sītǎnfú shuōfú.',
      note:'始终 + 没有 đứng TRƯỚC 被.',pair:'被'},
     {promptLang:'vi',prompt:'Cohen không những nói đúng mà còn thắng cuộc tranh luận này.',answer:'科恩不仅说对了，而且赢了这场辩论。',answerPy:'Kē\'ēn bùjǐn shuōduì le, érqiě yíngle zhè chǎng biànlùn.',
      note:'Lượng từ của 辩论 là 场.',pair:'不仅……而且……'}
   ]},

  {n:41,zh:'麦布里奇',py:'Màibùlǐqí',pos:'Danh từ riêng',vn:'Muybridge (Eadweard Muybridge)',hv:'Mạch Bố Lý Kỳ',em:'📸',lesson:10,
   explain:['Eadweard Muybridge (1830–1904), nhiếp ảnh gia người Anh, nổi tiếng với loạt ảnh chụp liên tục con ngựa đang phi — bước quan trọng dẫn tới sự ra đời của điện ảnh.'],
   usage:'Tên người phiên âm; trong bài đi với 英国摄影师.',
   collo:['英国摄影师麦布里奇','请麦布里奇来判断','麦布里奇的办法'],
   ex_zh:'于是他们就请英国摄影师麦布里奇来判断，可麦布里奇也弄不清楚。',ex_py:'Yúshì tāmen jiù qǐng Yīngguó shèyǐngshī Màibùlǐqí lái pànduàn, kě Màibùlǐqí yě nòng bu qīngchu.',ex_vn:'Thế là họ mời nhiếp ảnh gia người Anh Muybridge đến phân xử, nhưng Muybridge cũng không làm rõ được.',
   exList:[
     {zh:'于是他们就请英国摄影师麦布里奇来判断，可麦布里奇也弄不清楚。',py:'Yúshì tāmen jiù qǐng Yīngguó shèyǐngshī Màibùlǐqí lái pànduàn, kě Màibùlǐqí yě nòng bu qīngchu.',vn:'Thế là họ mời nhiếp ảnh gia người Anh Muybridge đến phân xử, nhưng Muybridge cũng không làm rõ được.'},
     {zh:'麦布里奇想出了一个好办法。',py:'Màibùlǐqí xiǎngchūle yí ge hǎo bànfǎ.',vn:'Muybridge đã nghĩ ra một cách hay.'}
   ],
   colloFull:[
     {zh:'英国摄影师麦布里奇',py:'Yīngguó shèyǐngshī Màibùlǐqí',vn:'nhiếp ảnh gia người Anh Muybridge'},
     {zh:'请麦布里奇来判断',py:'qǐng Màibùlǐqí lái pànduàn',vn:'mời Muybridge đến phân xử'},
     {zh:'麦布里奇的办法',py:'Màibùlǐqí de bànfǎ',vn:'cách làm của Muybridge'},
     {zh:'麦布里奇拍的相片',py:'Màibùlǐqí pāi de xiàngpiàn',vn:'những bức ảnh Muybridge chụp'}
   ],
   patterns:[
     {s:'请 + 麦布里奇 + 来 + V',m:'mời Muybridge đến làm gì'},
     {s:'麦布里奇 + 的办法',m:'cách làm của Muybridge'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả Muybridge cũng không làm rõ được.',answer:'连麦布里奇都弄不清楚。',answerPy:'Lián Màibùlǐqí dōu nòng bu qīngchu.',
      note:'弄不清楚 = bổ ngữ khả năng dạng phủ định.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Những bức ảnh này là do Muybridge chụp.',answer:'这些相片是麦布里奇拍的。',answerPy:'Zhèxiē xiàngpiàn shì Màibùlǐqí pāi de.',
      note:'是……的 nhấn mạnh người chụp.',pair:'是……的'}
   ]},

  {n:42,zh:'卢米埃尔',py:'Lúmǐ\'āi\'ěr',pos:'Danh từ riêng',vn:'Lumière (anh em nhà Lumière, Pháp)',hv:'Lô Mễ Ai Nhĩ',em:'🎞️',lesson:10,
   explain:['Anh em Auguste và Louis Lumière, người Pháp — ngày 28/12/1895 chiếu phim cho công chúng lần đầu tiên ở Paris, được coi là cha đẻ của điện ảnh.'],
   usage:'Thường nói 卢米埃尔兄弟 (anh em nhà Lumière).',
   collo:['卢米埃尔兄弟','法国人卢米埃尔','卢米埃尔兄弟的短片'],
   ex_zh:'法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》。',ex_py:'Fǎguó rén Lúmǐ\'āi\'ěr xiōngdì zài Bālí dì-yī cì xiàng gōngzhòng bōfàngle duǎnpiàn 《Huǒchē Dào Zhàn》.',ex_vn:'Anh em nhà Lumière người Pháp lần đầu tiên chiếu đoạn phim ngắn "Tàu đến ga" cho công chúng xem tại Paris.',
   exList:[
     {zh:'法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》。',py:'Fǎguó rén Lúmǐ\'āi\'ěr xiōngdì zài Bālí dì-yī cì xiàng gōngzhòng bōfàngle duǎnpiàn 《Huǒchē Dào Zhàn》.',vn:'Anh em nhà Lumière người Pháp lần đầu tiên chiếu đoạn phim ngắn "Tàu đến ga" cho công chúng xem tại Paris.'},
     {zh:'卢米埃尔兄弟是历史上最早的电影导演。',py:'Lúmǐ\'āi\'ěr xiōngdì shì lìshǐ shang zuì zǎo de diànyǐng dǎoyǎn.',vn:'Anh em nhà Lumière là những đạo diễn điện ảnh sớm nhất trong lịch sử.'}
   ],
   colloFull:[
     {zh:'卢米埃尔兄弟',py:'Lúmǐ\'āi\'ěr xiōngdì',vn:'anh em nhà Lumière'},
     {zh:'法国人卢米埃尔',py:'Fǎguó rén Lúmǐ\'āi\'ěr',vn:'người Pháp Lumière'},
     {zh:'卢米埃尔兄弟的短片',py:'Lúmǐ\'āi\'ěr xiōngdì de duǎnpiàn',vn:'phim ngắn của anh em nhà Lumière'},
     {zh:'卢米埃尔兄弟俩',py:'Lúmǐ\'āi\'ěr xiōngdì liǎ',vn:'hai anh em nhà Lumière'}
   ],
   patterns:[
     {s:'卢米埃尔 + 兄弟',m:'anh em nhà Lumière'},
     {s:'法国人 + 卢米埃尔',m:'người Pháp Lumière'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phim ngắn "Tàu đến ga" là do anh em nhà Lumière quay.',answer:'短片《火车到站》是卢米埃尔兄弟拍的。',answerPy:'Duǎnpiàn 《Huǒchē Dào Zhàn》 shì Lúmǐ\'āi\'ěr xiōngdì pāi de.',
      note:'Tên tác phẩm đặt trong 《》.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa từng xem phim của anh em nhà Lumière.',answer:'我从来没看过卢米埃尔兄弟的电影。',answerPy:'Wǒ cónglái méi kànguo Lúmǐ\'āi\'ěr xiōngdì de diànyǐng.',
      note:'从来没 + 看过.',pair:'从来没……过'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — một bài liền, mỗi đoạn văn của sách là một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 争论的奇迹',
   preQuiz:[
     {q:'斯坦福和科恩在哪儿进行了辩论？',opts:['英国的一个操场','美国的一个酒店','法国的一个电影院'],ans:1},
     {q:'他们围绕什么问题进行了辩论？',opts:['马奔跑时蹄子是否着地','马到底能跑多快','青蛙能跳多高'],ans:0},
     {q:'斯坦福认为马在跳起时怎么样？',opts:['始终有一蹄着地','只有两蹄着地','四蹄都不落地'],ans:2},
     {q:'两人争论的结果怎么样？',opts:['斯坦福说服了科恩','谁也说服不了谁','科恩说服了斯坦福'],ans:1},
     {q:'他们请谁来判断？',opts:['英国摄影师麦布里奇','一位法国导演','一位美国科学家'],ans:0},
     {q:'在跑道的另一边，他们做了什么？',opts:['放上24个照相机','拍了24张相片','打了24个洞，插进24根木棍'],ans:2},
     {q:'木棍上的细线接在什么地方？',opts:['马的脖子上','相机快门上','跑道的另一头'],ans:1},
     {q:'相片显示了什么？',opts:['马奔跑时始终有一蹄着地','马跳起时四蹄都不着地','马跑得像青蛙一样'],ans:0},
     {q:'最后谁赢了？',opts:['斯坦福','麦布里奇','科恩'],ans:2},
     {q:'“奇迹”是怎么出现的？',opts:['有人快速拉动那一长串相片','摄影师又拍了一张相片','马又跑了一次'],ans:0},
     {q:'1895年12月28日发生了什么？',opts:['马的相片第一次出现','卢米埃尔兄弟第一次向公众播放短片','斯坦福和科恩进行了辩论'],ans:1},
     {q:'课文最后想告诉我们什么？',opts:['争论没有什么用','重大发现只属于科学家','留心生活、认真研究，或许会有重大发现'],ans:2}
   ],
   lines:[
    {sp:0,zh:'1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。斯坦福认为，马奔跑得那么快，在跳起时四蹄应该都是不落地的；而科恩认为，马要是四蹄都不着地，那不是成了青蛙啦？应该是始终有一蹄着地。两人各执一词，争论得脸红脖子粗，谁也说服不了谁。于是他们就请英国摄影师麦布里奇来判断，可麦布里奇也弄不清楚。不过摄影师毕竟是摄影师，主意还是有的。他们一起来到一个操场，在一条跑道的一边等距离放上24个照相机，照相机对准跑道；在跑道另一边打24个洞，分别插进24根木棍，木棍上系着细线，细线穿过跑道，接上相机快门。',
     py:'Yī bā qī èr nián de yì tiān, zài Měiguó Jiālìfúníyà Zhōu de yí ge jiǔdiàn li, Sītǎnfú yǔ Kē\'ēn wéirào "mǎ bēnpǎo shí tízi shìfǒu zháodì" jìnxíngle biànlùn. Sītǎnfú rènwéi, mǎ bēnpǎo de nàme kuài, zài tiàoqǐ shí sì tí yīnggāi dōu shì bú luòdì de; ér Kē\'ēn rènwéi, mǎ yàoshi sì tí dōu bù zháodì, nà bú shì chéngle qīngwā la? Yīnggāi shì shǐzhōng yǒu yì tí zháodì. Liǎng rén gè zhí yì cí, zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi. Yúshì tāmen jiù qǐng Yīngguó shèyǐngshī Màibùlǐqí lái pànduàn, kě Màibùlǐqí yě nòng bu qīngchu. Búguò shèyǐngshī bìjìng shì shèyǐngshī, zhǔyi háishi yǒu de. Tāmen yìqǐ láidào yí ge cāochǎng, zài yì tiáo pǎodào de yìbiān děng jùlí fàngshang èrshísì ge zhàoxiàngjī, zhàoxiàngjī duìzhǔn pǎodào; zài pǎodào lìng yìbiān dǎ èrshísì ge dòng, fēnbié chājìn èrshísì gēn mùgùn, mùgùn shang jìzhe xì xiàn, xì xiàn chuānguò pǎodào, jiēshang xiàngjī kuàimén.',
     vn:'Một ngày năm 1872, trong một khách sạn ở bang California nước Mỹ, Stanford và Cohen đã tranh luận xoay quanh câu hỏi "khi ngựa phi, móng có chạm đất hay không". Stanford cho rằng ngựa phi nhanh như thế thì lúc nhảy lên, cả bốn móng hẳn đều không chạm đất; còn Cohen cho rằng ngựa mà bốn móng đều không chạm đất thì chẳng phải thành con ếch rồi sao? Hẳn phải luôn có một móng chạm đất. Hai người mỗi người giữ một ý, cãi nhau đến đỏ mặt tía tai, chẳng ai thuyết phục được ai. Thế là họ mời nhiếp ảnh gia người Anh Muybridge đến phân xử, nhưng Muybridge cũng không làm rõ được. Có điều nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia, cách thì vẫn có. Họ cùng đến một sân tập, ở một bên đường chạy đặt 24 chiếc máy ảnh cách đều nhau, máy ảnh hướng thẳng vào đường chạy; ở bên kia đường chạy đục 24 cái lỗ, lần lượt cắm vào 24 cây gậy gỗ, trên gậy buộc những sợi dây mảnh, dây vắt ngang qua đường chạy, nối vào nút chụp của máy ảnh.'},
    {sp:0,zh:'一切都准备好了，麦布里奇让一匹马从跑道的一头飞奔到另一头，马一边跑，一边按顺序撞断拦路的24根细线，相机连续拍下了24张相片，相邻两张相片的差距都很小。相片显示：马奔跑时始终有一蹄着地，科恩赢了。',
     py:'Yíqiè dōu zhǔnbèi hǎo le, Màibùlǐqí ràng yì pǐ mǎ cóng pǎodào de yì tóu fēibēn dào lìng yì tóu, mǎ yìbiān pǎo, yìbiān àn shùnxù zhuàngduàn lán lù de èrshísì gēn xì xiàn, xiàngjī liánxù pāixiàle èrshísì zhāng xiàngpiàn, xiānglín liǎng zhāng xiàngpiàn de chājù dōu hěn xiǎo. Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì, Kē\'ēn yíng le.',
     vn:'Mọi thứ đã chuẩn bị xong, Muybridge cho một con ngựa phi như bay từ đầu này sang đầu kia của đường chạy. Ngựa vừa chạy vừa lần lượt làm đứt 24 sợi dây mảnh chắn ngang đường, máy ảnh chụp liên tục 24 tấm ảnh, hai tấm liền kề nhau đều chênh lệch rất ít. Những tấm ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất — Cohen đã thắng.'},
    {sp:0,zh:'事后，有人无意识地快速拉动那一长串相片，“奇迹”出现了：各张相片中静止的马连成了一匹运动的马，相片“活”了。这就是电影最早的样子。',
     py:'Shìhòu, yǒu rén wú yìshi de kuàisù lādòng nà yì cháng chuàn xiàngpiàn, "qíjì" chūxiàn le: gè zhāng xiàngpiàn zhōng jìngzhǐ de mǎ liánchéngle yì pǐ yùndòng de mǎ, xiàngpiàn "huó" le. Zhè jiù shì diànyǐng zuì zǎo de yàngzi.',
     vn:'Sau đó, có người vô tình kéo thật nhanh chuỗi ảnh dài ấy, và "kỳ tích" đã xuất hiện: những con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động — những tấm ảnh đã "sống" dậy. Đó chính là hình hài sớm nhất của điện ảnh.'},
    {sp:0,zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》，这一天后来成为电影产生的纪念日，兄弟俩也成为历史上最早的电影导演。',
     py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú. Yī bā jiǔ wǔ nián shí\'èr yuè èrshíbā rì, Fǎguó rén Lúmǐ\'āi\'ěr xiōngdì zài Bālí dì-yī cì xiàng gōngzhòng bōfàngle duǎnpiàn 《Huǒchē Dào Zhàn》, zhè yì tiān hòulái chéngwéi diànyǐng chǎnshēng de jìniànrì, xiōngdì liǎ yě chéngwéi lìshǐ shang zuì zǎo de diànyǐng dǎoyǎn.',
     vn:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện. Ngày 28 tháng 12 năm 1895, anh em nhà Lumière người Pháp lần đầu tiên chiếu đoạn phim ngắn "Tàu đến ga" cho công chúng xem tại Paris. Ngày ấy về sau trở thành ngày kỷ niệm sự ra đời của điện ảnh, và hai anh em cũng trở thành những đạo diễn điện ảnh đầu tiên trong lịch sử.'},
    {sp:0,zh:'留心生活的每一瞬间，并为之争论，适时请求帮助、认真研究，或许重大发现就在你的眼前。',
     py:'Liúxīn shēnghuó de měi yí shùnjiān, bìng wèi zhī zhēnglùn, shìshí qǐngqiú bāngzhù, rènzhēn yánjiū, huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.',
     vn:'Hãy để ý từng khoảnh khắc của cuộc sống và tranh luận về nó, nhờ giúp đỡ đúng lúc, nghiên cứu nghiêm túc — có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.'}
  ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 1 lấy đúng SGK (显示—显得, tr. 96–97); cặp 2–3 là cặp dễ nhầm trong bài
// ══════════════════════════════════════════
var synonymData = [
  {pair:'显示 — 显得',
   same:'Đều là động từ, đều có nghĩa "thể hiện ra, làm cho người ta nhìn thấy", nhưng thường KHÔNG thay cho nhau được.',
   sameEx:{zh:'相片显示：马奔跑时始终有一蹄着地。／几年不见，他显得成熟多了。',vn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất. / Mấy năm không gặp, anh ấy trông chín chắn hơn nhiều.'},
   items:[
     {word:'显示',points:[
       'Thể hiện ra một THÁI ĐỘ, NĂNG LỰC hoặc TÌNH HÌNH.',
       'Thường đi với DANH TỪ hoặc một CÂU NHỎ: 调查显示……, 显示出才能.',
       'Chủ ngữ hay gặp: 调查 / 数据 / 相片 / 结果.'
     ],ex:[{zh:'相片显示：马奔跑时始终有一蹄着地。',vn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất.'},
          {zh:'这次活动的组织显示出了他的才能。',vn:'Việc tổ chức hoạt động lần này đã cho thấy tài năng của anh ấy.'}]},
     {word:'显得',points:[
       'Biểu hiện ra một ĐẶC TÍNH: "trông có vẻ, tỏ ra".',
       'Thường đi với TÍNH TỪ: 显得成熟, 显得很高兴, 显得格外明亮.',
       'Hay dùng khi so với trước đây hoặc so với xung quanh.'
     ],ex:[{zh:'几年不见，他显得成熟多了。',vn:'Mấy năm không gặp, anh ấy trông chín chắn hơn nhiều.'},
          {zh:'中秋节那天，月亮显得格外明亮。',vn:'Hôm Trung thu, mặt trăng trông sáng lạ thường.'}]}
   ],
   quiz:[
     {sentence:'他最近怎么了？总是＿＿不太高兴。',options:['显示','显得'],answer:1,
      why:'Sau chỗ trống là tính từ (不太高兴) — tả vẻ bên ngoài → 显得.'},
     {sentence:'调查＿＿，只有37%的人愿意回到没有手机的时代。',options:['显示','显得'],answer:0,
      why:'调查 + 显示 + một câu nhỏ (kết quả khảo sát) → 显示.'},
     {sentence:'节日的北京＿＿更加美丽。',options:['显示','显得'],answer:1,
      why:'Theo sau là tính từ 美丽 → 显得.'},
     {sentence:'你得＿＿出自己的本领，公司才会愿意用你。',options:['显示','显得'],answer:0,
      why:'显示出 + danh từ (本领) = thể hiện năng lực → 显示. 显得 không đi với 出 + danh từ.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有表现出、让人看出的意思，但一般不能换用。',vn:'Đều là động từ, đều có nghĩa thể hiện ra, làm cho người ta nhìn thấy, nhưng thường không thay cho nhau được.'},
     khac:[
       {a:{t:'指表现出某种态度、能力或情况。',vn:'Chỉ việc thể hiện ra một thái độ, năng lực hoặc tình hình.',vd:'相片显示：马奔跑时始终有一蹄着地。',vdVn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất.'},
        b:{t:'指表现出某种特性。',vn:'Chỉ việc biểu hiện ra một đặc tính nào đó.',vd:'几年不见，他显得成熟多了。',vdVn:'Mấy năm không gặp, anh ấy trông chín chắn hơn nhiều.'}},
       {a:{t:'一般与名词或小句搭配。',vn:'Thường kết hợp với danh từ hoặc câu nhỏ.',vd:'这次活动的组织显示出了他的才能。',vdVn:'Việc tổ chức hoạt động lần này đã cho thấy tài năng của anh ấy.'},
        b:{t:'一般与形容词搭配。',vn:'Thường kết hợp với tính từ.',vd:'中秋节那天，月亮显得格外明亮。',vdVn:'Hôm Trung thu, mặt trăng trông sáng lạ thường.'}}
     ],
     lamThu:[
       {s:'他最近怎么了？总是＿＿不太高兴。',dap:[false,true],mau:true,
        giai:'Theo sau là cụm tính từ (不太高兴) — tả vẻ bên ngoài → chỉ 显得.'},
       {s:'调查＿＿，只有37%的人愿意回到没有手机的时代。',dap:[true,false],
        giai:'Đi với một câu nhỏ nêu kết quả khảo sát → chỉ 显示.'},
       {s:'节日的北京＿＿更加美丽。',dap:[false,true],
        giai:'Theo sau là tính từ 更加美丽 → chỉ 显得.'},
       {s:'你得＿＿出自己的本领，公司才会愿意用你。',dap:[true,false],
        giai:'显示出 + danh từ (本领): thể hiện năng lực → chỉ 显示.'}
     ]
   }},

  {pair:'争论 — 辩论',
   same:'Đều là động từ, đều chỉ hai bên đưa ra ý kiến khác nhau về một vấn đề; đều dùng được lượng từ 场.',
   sameEx:{zh:'他们围绕这个问题争论／辩论了很久。',vn:'Họ tranh luận rất lâu xoay quanh vấn đề này.'},
   items:[
     {word:'争论',points:[
       'Mỗi người giữ ý mình, thường là CÃI NHAU, có thể nổi nóng.',
       'Hay có bổ ngữ tả mức độ: 争论得脸红脖子粗.',
       'Không có dạng cuộc thi (không nói 争论赛).'
     ],ex:[{zh:'两人争论得脸红脖子粗，谁也说服不了谁。',vn:'Hai người cãi nhau đỏ mặt tía tai, chẳng ai thuyết phục được ai.'},
          {zh:'为了一道数学题，我跟同桌争论了半天。',vn:'Vì một bài toán mà tôi tranh cãi với bạn cùng bàn cả buổi.'}]},
     {word:'辩论',points:[
       'Đưa ra LÝ LẼ để bảo vệ quan điểm, bác bỏ bên kia — có trật tự, có tổ chức.',
       'Có dạng cuộc thi, buổi tranh biện: 辩论赛, 辩论会.',
       'Trang trọng hơn 争论.'
     ],ex:[{zh:'在昨天举行的辩论赛上，他的表现得到了大家的好评。',vn:'Trong cuộc thi tranh biện hôm qua, phần thể hiện của cậu ấy được mọi người khen ngợi.'},
          {zh:'斯坦福与科恩围绕这个问题进行了辩论。',vn:'Stanford và Cohen tranh luận xoay quanh vấn đề này.'}]}
   ],
   quiz:[
     {sentence:'在昨天举行的＿＿赛上，他的表现得到了大家的好评。',options:['争论','辩论'],answer:1,
      why:'Cuộc thi tranh biện là 辩论赛; không có từ 争论赛. (Câu 2.1 trong phần 练习 của SGK.)'},
     {sentence:'两个人＿＿得脸红脖子粗，差点儿打起来。',options:['争论','辩论'],answer:0,
      why:'Cãi nhau nổi nóng, đỏ mặt tía tai, suýt đánh nhau → 争论.'},
     {sentence:'学校下个星期要举行一场英语＿＿会。',options:['争论','辩论'],answer:1,
      why:'Buổi tranh biện có tổ chức → 辩论会.'},
     {sentence:'为了周末去哪儿玩，兄弟俩又＿＿起来了。',options:['争论','辩论'],answer:0,
      why:'Chuyện vặt trong nhà, cãi qua cãi lại → 争论 tự nhiên hơn; 辩论 nghe quá trang trọng.'}
   ]},

  {pair:'始终 — 一直',
   same:'Đều là phó từ, đều chỉ một trạng thái hay hành động kéo dài không thay đổi.',
   sameEx:{zh:'毕业以后，我们始终／一直保持着联系。',vn:'Sau khi tốt nghiệp, chúng tôi vẫn luôn giữ liên lạc.'},
   items:[
     {word:'始终',points:[
       'Nhấn mạnh TỪ ĐẦU ĐẾN CUỐI của một quá trình, hơi trang trọng.',
       'Chỉ nói về quá trình đã qua đến hiện tại; không dùng với "一直……到 + thời điểm tương lai".',
       'Không chỉ phương hướng (không nói 始终往前走).'
     ],ex:[{zh:'相片显示：马奔跑时始终有一蹄着地。',vn:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất.'},
          {zh:'我始终没有办法说服他接受这个结论。',vn:'Tôi trước sau vẫn không có cách nào thuyết phục anh ấy chấp nhận kết luận này.'}]},
     {word:'一直',points:[
       'Dùng rộng hơn: quá khứ, hiện tại và cả tương lai (一直住到明年).',
       'Còn chỉ phương hướng: 一直往前走 (đi thẳng về phía trước).',
       'Khẩu ngữ, dùng hằng ngày.'
     ],ex:[{zh:'你一直往前走，就能看到学校的操场。',vn:'Bạn cứ đi thẳng về phía trước là sẽ thấy sân trường.'},
          {zh:'我打算在这儿一直住到明年夏天。',vn:'Tôi định ở đây luôn cho đến mùa hè năm sau.'}]}
   ],
   quiz:[
     {sentence:'你＿＿往前走，第二个路口就是学校。',options:['始终','一直'],answer:1,
      why:'Chỉ phương hướng "đi thẳng" → chỉ 一直 dùng được.'},
     {sentence:'我打算在北京＿＿住到明年夏天。',options:['始终','一直'],answer:1,
      why:'一直 + V + 到 + thời điểm tương lai; 始终 không dùng kiểu này.'},
     {sentence:'比赛从开始到结束，他＿＿保持着第一名。',options:['始终','一直'],answer:0,both:true,
      why:'Nhấn mạnh "từ đầu đến cuối" một quá trình đã xong → 始终 hợp nhất; 一直 cũng đúng.'},
     {sentence:'相片显示：马奔跑时＿＿有一蹄着地。',options:['始终','一直'],answer:0,both:true,
      why:'Câu của bài khoá, văn viết, nhấn mạnh suốt cả quá trình chạy → 始终; 一直 cũng chấp nhận được.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'争论',hv:'tranh luận',vn:'tranh luận, tranh cãi',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'辩论',hv:'biện luận',vn:'tranh luận bằng lý lẽ',note:'"Biện" như trong "biện hộ, hùng biện" → nói có lý lẽ.'},
    {zh:'奇迹',hv:'kỳ tích',vn:'kỳ tích',note:'Trùng khít.'},
    {zh:'说服',hv:'thuyết phục',vn:'thuyết phục',note:'Trùng khít. Chú ý 说 ở đây đọc shuō (không đọc shuì).'},
    {zh:'显示',hv:'hiển thị',vn:'cho thấy',note:'"Hiển thị" trên màn hình — cùng gốc: làm cho thấy rõ.'},
    {zh:'意识',hv:'ý thức',vn:'ý thức; nhận ra',note:'Trùng khít. 意识到 = nhận thức được.'},
    {zh:'艰苦',hv:'gian khổ',vn:'gian khổ',note:'Trùng khít.'},
    {zh:'改进',hv:'cải tiến',vn:'cải tiến',note:'Trùng khít.'},
    {zh:'兄弟',hv:'huynh đệ',vn:'anh em',note:'"Huynh đệ" trong truyện kiếm hiệp — anh em.'},
    {zh:'纪念',hv:'kỷ niệm',vn:'kỷ niệm',note:'Trùng khít: 纪念日 = ngày kỷ niệm.'},
    {zh:'导演',hv:'đạo diễn',vn:'đạo diễn',note:'Trùng khít.'},
    {zh:'请求',hv:'thỉnh cầu',vn:'đề nghị, thỉnh cầu',note:'"Thỉnh" = mời, xin → xin một cách lịch sự.'},
    {zh:'重大',hv:'trọng đại',vn:'trọng đại',note:'Trùng khít.'},
    {zh:'摄影师',hv:'nhiếp ảnh sư',vn:'nhiếp ảnh gia',note:'"Nhiếp ảnh" + "sư" (người có nghề, như 老师, 律师).'},
    {zh:'试验',hv:'thí nghiệm',vn:'thử nghiệm',note:'Gần như trùng; 试 = thử.'}
  ],
  idiom:[
    {zh:'脸红脖子粗',hv:'kiểm hồng bột tử thô',vn:'đỏ mặt tía tai',note:'Nghĩa đen "mặt đỏ, cổ to" — tiếng Việt nói "đỏ mặt tía tai" khi cãi nhau hăng.'},
    {zh:'各执一词',hv:'các chấp nhất từ',vn:'mỗi người một ý, không ai chịu ai',note:'"Chấp" như "cố chấp": mỗi người khư khư giữ lời mình.'}
  ],
  trap:[
    {zh:'始终',hv:'thủy chung',vn:'từ đầu đến cuối',
     warn:'BẪY: "thủy chung" tiếng Việt là chung thủy trong tình cảm. 始终 tiếng Trung chỉ là phó từ "trước sau vẫn, từ đầu đến cuối".'},
    {zh:'成熟',hv:'thành thục',vn:'chín; chín chắn',
     warn:'BẪY: "thành thục" tiếng Việt là thành thạo. 成熟 là (quả) chín, (người) chín chắn, (kỹ thuật) hoàn thiện — thành thạo phải dùng 熟练.'},
    {zh:'操场',hv:'thao trường',vn:'sân tập, sân trường',
     warn:'BẪY: "thao trường" tiếng Việt là nơi tập quân sự. 操场 chỉ là sân thể thao của trường học.'},
    {zh:'毕竟',hv:'tất cánh',vn:'dù sao, suy cho cùng',
     warn:'Âm Hán–Việt không gợi được nghĩa. Nhớ theo cách dùng: 毕竟 + lý do / A毕竟是A.'},
    {zh:'或许',hv:'hoặc hứa',vn:'có lẽ',
     warn:'BẪY: thấy "hoặc" dễ nghĩ là "hoặc là". 或许 = có lẽ; "hoặc" phải dùng 或者.'},
    {zh:'差距',hv:'sai cự',vn:'sự chênh lệch',
     warn:'Không phải "sai" = sai lầm. 差 ở đây là chênh lệch; 差距 là khoảng cách về trình độ, mức độ.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP CỤM — lấy từ bảng 词语搭配 của sách (tr. 96) và bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'拍',right:'照片'},
  {left:'改进',right:'工作方法'},
  {left:'艰苦的',right:'条件'},
  {left:'成熟的',right:'瓜果'},
  {left:'围绕重点',right:'进行讨论'},
  {left:'始终',right:'保持联系'},
  {left:'插进',right:'洞里'},
  {left:'拦住',right:'去路'},
  {left:'一匹',right:'马'},
  {left:'一场',right:'辩论'},
  {left:'说服',right:'对方'},
  {left:'系',right:'领带'},
  {left:'缩小',right:'差距'},
  {left:'播放',right:'短片'},
  {left:'值得',right:'纪念'},
  {left:'重大',right:'发现'},
  {left:'请求',right:'帮助'},
  {left:'电影',right:'导演'},
  {left:'马的',right:'蹄子'},
  {left:'调查结果',right:'显示'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'为了一道数学题，我跟同桌',blank:'争论',post:'了半天，最后只好去问老师。',hint:'(tranh cãi)',ans:'争论'},
  {pre:'只要不放弃，就有可能创造',blank:'奇迹',post:'。',hint:'(kỳ tích)',ans:'奇迹'},
  {pre:'今天的班会上，大家',blank:'围绕',post:'“中学生该不该带手机上学”进行了讨论。',hint:'(xoay quanh)',ans:'围绕'},
  {pre:'一群马在草原上自由地',blank:'奔跑',post:'。',hint:'(phi, chạy nhanh)',ans:'奔跑'},
  {pre:'马奔跑时',blank:'蹄子',post:'是否着地？',hint:'(móng guốc)',ans:'蹄子'},
  {pre:'在昨天举行的',blank:'辩论',post:'赛上，他的表现得到了大家的好评。',hint:'(tranh biện)',ans:'辩论'},
  {pre:'夏天的晚上，池塘里的',blank:'青蛙',post:'叫个不停。',hint:'(con ếch)',ans:'青蛙'},
  {pre:'妈妈，我都十八岁',blank:'啦',post:'，能照顾好自己，您就放心吧。',hint:'(trợ từ = 了 + 啊)',ans:'啦'},
  {pre:'毕业二十年以来，我们',blank:'始终',post:'保持着联系。',hint:'(trước sau vẫn)',ans:'始终'},
  {pre:'两人争论得脸红',blank:'脖子',post:'粗，谁也不让谁。',hint:'(cái cổ)',ans:'脖子'},
  {pre:'我始终没有办法',blank:'说服',post:'他接受这个结论。',hint:'(thuyết phục)',ans:'说服'},
  {pre:'这张婚纱照是请',blank:'摄影师',post:'拍的，真不错！',hint:'(nhiếp ảnh gia)',ans:'摄影师'},
  {pre:'别生他的气了，他',blank:'毕竟',post:'还是个孩子。',hint:'(dù sao, suy cho cùng)',ans:'毕竟'},
  {pre:'下课以后，同学们都在',blank:'操场',post:'上打篮球。',hint:'(sân trường)',ans:'操场'},
  {pre:'我的袜子破了一个',blank:'洞',post:'，得换一双了。',hint:'(lỗ thủng)',ans:'洞'},
  {pre:'妈妈把花',blank:'插',post:'在花瓶里，房间一下子漂亮多了。',hint:'(cắm)',ans:'插'},
  {pre:'他们在每个洞里插进了一根木',blank:'棍',post:'。',hint:'(gậy)',ans:'棍'},
  {pre:'坐车的时候一定要',blank:'系',post:'好安全带。',hint:'(thắt — đọc jì)',ans:'系'},
  {pre:'草原上有几',blank:'匹',post:'白马在吃草。',hint:'(lượng từ cho ngựa)',ans:'匹'},
  {pre:'前面不知道发生了什么事，路被',blank:'拦',post:'住了。',hint:'(chặn)',ans:'拦'},
  {pre:'这位导演',blank:'拍',post:'过二十几部电影，得过好几项国际大奖。',hint:'(quay phim)',ans:'拍'},
  {pre:'我和他之间还有很大的',blank:'差距',post:'，我要向他学习，更加努力。',hint:'(khoảng cách trình độ)',ans:'差距'},
  {pre:'调查',blank:'显示',post:'，只有37%的人愿意回到没有手机的时代。',hint:'(cho thấy)',ans:'显示'},
  {pre:'他终于',blank:'意识',post:'到了自己的错误，向老师道了歉。',hint:'(nhận ra)',ans:'意识'},
  {pre:'爷爷年轻的时候，生活条件非常',blank:'艰苦',post:'。',hint:'(gian khổ)',ans:'艰苦'},
  {pre:'他们做了很多次',blank:'试验',post:'，终于成功了。',hint:'(thử nghiệm)',ans:'试验'},
  {pre:'来中国半年以后，我',blank:'逐渐',post:'习惯了这里的生活。',hint:'(dần dần)',ans:'逐渐'},
  {pre:'听了大家的意见以后，老师',blank:'改进',post:'了上课的方法。',hint:'(cải tiến)',ans:'改进'},
  {pre:'几年不见，他显得',blank:'成熟',post:'多了。',hint:'(chín chắn)',ans:'成熟'},
  {pre:'他们',blank:'兄弟',post:'俩长得一模一样，我经常认错。',hint:'(anh em)',ans:'兄弟'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (毕竟 · 逐渐 · 或许) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['不过','摄影师','毕竟是','摄影师','，','主意','还是有的','。'],ans:'不过摄影师毕竟是摄影师，主意还是有的。',audio:'不过摄影师毕竟是摄影师，主意还是有的。'},
  {words:['别生他的气了','，','他毕竟','还是个','孩子','。'],ans:'别生他的气了，他毕竟还是个孩子。',audio:'别生他的气了，他毕竟还是个孩子。'},
  {words:['经过','艰苦的试验','，','电影拍摄技术','逐渐','改进、成熟','。'],ans:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',audio:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。'},
  {words:['来中国半年以后','，','我','逐渐','习惯了','这里的生活','。'],ans:'来中国半年以后，我逐渐习惯了这里的生活。',audio:'来中国半年以后，我逐渐习惯了这里的生活。'},
  {words:['虽然','以前她不支持你','，','但或许','这次会有变化','。'],ans:'虽然以前她不支持你，但或许这次会有变化。',audio:'虽然以前她不支持你，但或许这次会有变化。'},
  {words:['他','没来上课','，','或许是','生病了','。'],ans:'他没来上课，或许是生病了。',audio:'他没来上课，或许是生病了。'},
  {words:['两个人','围绕这个问题','进行了','一场','辩论','。'],ans:'两个人围绕这个问题进行了一场辩论。',audio:'两个人围绕这个问题进行了一场辩论。'},
  {words:['马','奔跑时','始终','有一蹄','着地','。'],ans:'马奔跑时始终有一蹄着地。',audio:'马奔跑时始终有一蹄着地。'},
  {words:['两人','争论得','脸红脖子粗','，','谁也','说服不了','谁','。'],ans:'两人争论得脸红脖子粗，谁也说服不了谁。',audio:'两人争论得脸红脖子粗，谁也说服不了谁。'},
  {words:['请','把','木棍','插进','洞里','。'],ans:'请把木棍插进洞里。',audio:'请把木棍插进洞里。'},
  {words:['拦路的细线','被','马','一根一根地','撞断了','。'],ans:'拦路的细线被马一根一根地撞断了。',audio:'拦路的细线被马一根一根地撞断了。'},
  {words:['调查','显示','，','只有37%的人','愿意','回到没有手机的时代','。'],ans:'调查显示，只有37%的人愿意回到没有手机的时代。',audio:'调查显示，只有37%的人愿意回到没有手机的时代。'},
  {words:['连','麦布里奇','也','弄不清楚','。'],ans:'连麦布里奇也弄不清楚。',audio:'连麦布里奇也弄不清楚。'},
  {words:['相机','连续','拍下了','24张','相片','。'],ans:'相机连续拍下了24张相片。',audio:'相机连续拍下了24张相片。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'电影频道每天晚上都____一些原版电影。',opts:['播放','发表','放弃','出版'],ans:0,
   exp:'Chiếu phim trên TV → 播放. 发表 là đăng (bài báo, ý kiến); 放弃 là từ bỏ; 出版 là xuất bản sách.'},
  {wrong:'我们一起拍张照片，留个____吧。',opts:['记录','纪念','记忆','经验'],ans:1,
   exp:'留个纪念 = để làm kỷ niệm (cụm cố định). 记录 là ghi chép; 记忆 là trí nhớ; 经验 là kinh nghiệm.'},
  {wrong:'这部电影的____是一位年轻人，这是他拍的第一部电影。',opts:['演员','观众','导演','记者'],ans:2,
   exp:'Người quay (拍) bộ phim là 导演. 演员 đóng phim, 观众 xem phim, 记者 đưa tin.'},
  {wrong:'看到妈妈的那一____，我忍不住哭了。',opts:['瞬间','时代','期间','阶段'],ans:0,
   exp:'那一瞬间 = khoảnh khắc ấy (cực ngắn). 时代 là thời đại; 期间 là trong khoảng thời gian (thường dài); 阶段 là giai đoạn — đều không đi với 那一 để chỉ một khoảnh khắc.'},
  {wrong:'他向老师____原谅，保证以后再也不迟到了。',opts:['请求','邀请','请客','申请'],ans:0,
   exp:'请求原谅 = xin tha thứ (đề nghị lịch sự). 邀请 là mời; 请客 là mời ăn, khao; 申请 là làm đơn xin (申请签证), không đi với 原谅.'},
  {wrong:'虽然以前她不支持你，但____这次会有变化。',opts:['或者','或许','还是','要是'],ans:1,
   exp:'Phỏng đoán "có lẽ" → 或许. 或者 là "hoặc" (nối hai lựa chọn); 还是 dùng trong câu hỏi lựa chọn; 要是 là "nếu".'},
  {wrong:'选大学专业是人生中一个____的决定。',opts:['重大','严重','高大','巨大'],ans:0,
   exp:'重大 + 决定 / 发现 / 影响: to lớn và quan trọng. 严重 dùng cho việc xấu (病很严重); 高大 tả người, nhà cao to; 巨大 thiên về kích thước, số lượng (巨大的变化), không đi với 决定.'},
  {wrong:'1872年的一天，在美国____的一个酒店里，两个人进行了一场辩论。',opts:['巴黎','加利福尼亚州','英国','亚太地区'],ans:1,
   exp:'Theo bài khoá, cuộc tranh luận diễn ra ở bang California (加利福尼亚州) nước Mỹ. 巴黎 là nơi anh em Lumière chiếu phim; 英国 là quê của Muybridge; 亚太地区 là khu vực châu Á – Thái Bình Dương — cả ba đều không nằm "trong nước Mỹ".'},
  {wrong:'____认为，马在跳起时四蹄应该都是不落地的。',opts:['科恩','麦布里奇','斯坦福','卢米埃尔'],ans:2,
   exp:'Người cho rằng bốn móng ngựa đều rời đất là 斯坦福 (Stanford). 科恩 (Cohen) nghĩ ngược lại; 麦布里奇 là nhiếp ảnh gia được mời phân xử; 卢米埃尔 là anh em người Pháp chiếu phim năm 1895.'},
  {wrong:'相片显示：马奔跑时始终有一蹄着地，____赢了。',opts:['斯坦福','科恩','麦布里奇','卢米埃尔'],ans:1,
   exp:'Cohen (科恩) cho rằng luôn có một móng chạm đất — ảnh chứng minh ông đúng, nên ông thắng.'},
  {wrong:'两人谁也说服不了谁，就请英国摄影师____来判断。',opts:['麦布里奇','斯坦福','科恩','卢米埃尔'],ans:0,
   exp:'Nhiếp ảnh gia người Anh được mời đến phân xử là 麦布里奇 (Muybridge).'},
  {wrong:'1895年12月28日，法国人____兄弟在巴黎第一次向公众播放了短片。',opts:['斯坦福','科恩','麦布里奇','卢米埃尔'],ans:3,
   exp:'Anh em người Pháp chiếu phim ở Paris năm 1895 là 卢米埃尔兄弟 (anh em nhà Lumière).'},
  {wrong:'几年不见，他____成熟多了。',opts:['显示','显得','表示','表现'],ans:1,
   exp:'显得 + tính từ (成熟) = trông có vẻ. 显示 đi với danh từ hoặc câu nhỏ; 表示 là bày tỏ; 表现 phải dùng 表现得 + tính từ.'},
  {wrong:'毕业二十年以来，我们____保持着联系。',opts:['终于','始终','总算','最后'],ans:1,
   exp:'Duy trì suốt hai mươi năm → 始终. 终于 / 总算 / 最后 chỉ kết quả cuối cùng sau thời gian chờ đợi, không đi với 保持着.'},
  {wrong:'我们之间还有很大的____，我要向他学习，更加努力。',opts:['距离','差距','区别','差不多'],ans:1,
   exp:'Chênh lệch về trình độ → 差距. 距离 là khoảng cách không gian, thời gian; 区别 là chỗ khác nhau (không nói "học hỏi để thu hẹp区别"); 差不多 là "gần như".'},
  {wrong:'在昨天举行的____赛上，他的表现得到了大家的好评。',opts:['争论','辩论','讨论','议论'],ans:1,
   exp:'Cuộc thi tranh biện là 辩论赛. Không có 争论赛, 讨论赛 hay 议论赛.'},
  {wrong:'吃中餐____西餐都可以，只是我不能吃太辣的。',opts:['或许','或者','还是','而且'],ans:1,
   exp:'Nối hai lựa chọn trong câu trần thuật → 或者. 或许 là "có lẽ"; 还是 dùng trong câu hỏi lựa chọn; 而且 là "hơn nữa". (Câu 2.4 trong phần 练习 của SGK.)'},
  {wrong:'不过摄影师____是摄影师，主意还是有的。',opts:['究竟','毕竟','终于','竟然'],ans:1,
   exp:'A毕竟是A: dù sao vẫn là… (nêu bản chất không đổi). 究竟 dùng trong câu hỏi; 终于 là "cuối cùng thì" sau chờ đợi; 竟然 là "không ngờ".'},
  {wrong:'这项运动首先在亚太地区流行，并____受到世界各地人们的欢迎。',opts:['突然','马上','逐渐','立刻'],ans:2,
   exp:'Được yêu thích TỪNG BƯỚC, lan dần ra thế giới → 逐渐. 突然 / 马上 / 立刻 đều chỉ việc xảy ra nhanh, tức thì — trái với "từ từ".'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hai người cãi nhau đến đỏ mặt tía tai, chẳng ai thuyết phục được ai.',zh:'两人争论得脸红脖子粗，谁也说服不了谁。',py:'Liǎng rén zhēnglùn de liǎn hóng bózi cū, shéi yě shuōfú bu liǎo shéi.'},
  {vi:'Dù sao cậu ấy vẫn còn là một đứa trẻ, đừng trách cậu ấy nữa.',zh:'他毕竟还是个孩子，别怪他了。',py:'Tā bìjìng hái shì ge háizi, bié guài tā le.'},
  {vi:'Sau khi đến Trung Quốc, tôi dần dần quen với cuộc sống ở đây.',zh:'来中国以后，我逐渐习惯了这里的生活。',py:'Lái Zhōngguó yǐhòu, wǒ zhújiàn xíguànle zhèli de shēnghuó.'},
  {vi:'Có lẽ lần này cô ấy sẽ đồng ý.',zh:'或许这次她会同意。',py:'Huòxǔ zhè cì tā huì tóngyì.'},
  {vi:'Khảo sát cho thấy thời gian ngủ của học sinh càng ngày càng ít.',zh:'调查显示，学生的睡觉时间越来越少。',py:'Diàochá xiǎnshì, xuésheng de shuìjiào shíjiān yuè lái yuè shǎo.'},
  {vi:'Khi đi xe nhất định phải thắt dây an toàn.',zh:'坐车的时候一定要系好安全带。',py:'Zuò chē de shíhou yídìng yào jìhǎo ānquándài.'},
  {vi:'Chúng ta phải không ngừng cải tiến phương pháp học tập.',zh:'我们要不断改进学习方法。',py:'Wǒmen yào búduàn gǎijìn xuéxí fāngfǎ.'},
  {vi:'Chọn ngành đại học là một quyết định trọng đại.',zh:'选大学专业是一个重大的决定。',py:'Xuǎn dàxué zhuānyè shì yí ge zhòngdà de juédìng.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Stanford và Cohen đã tranh luận xoay quanh vấn đề "khi ngựa phi, móng có chạm đất hay không".',zh:'斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。',py:'Sītǎnfú yǔ Kē\'ēn wéirào "mǎ bēnpǎo shí tízi shìfǒu zháodì" jìnxíngle biànlùn.'},
  {vi:'Nhưng nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia, cách thì vẫn có.',zh:'不过摄影师毕竟是摄影师，主意还是有的。',py:'Búguò shèyǐngshī bìjìng shì shèyǐngshī, zhǔyi háishi yǒu de.'},
  {vi:'Ở bên kia đường chạy đục 24 cái lỗ, lần lượt cắm vào 24 cây gậy gỗ.',zh:'在跑道另一边打24个洞，分别插进24根木棍。',py:'Zài pǎodào lìng yìbiān dǎ èrshísì ge dòng, fēnbié chājìn èrshísì gēn mùgùn.'},
  {vi:'Ảnh cho thấy: khi ngựa phi luôn có một móng chạm đất, Cohen đã thắng.',zh:'相片显示：马奔跑时始终有一蹄着地，科恩赢了。',py:'Xiàngpiàn xiǎnshì: mǎ bēnpǎo shí shǐzhōng yǒu yì tí zháodì, Kē\'ēn yíng le.'},
  {vi:'"Kỳ tích" đã xuất hiện: những con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động.',zh:'“奇迹”出现了：各张相片中静止的马连成了一匹运动的马。',py:'"Qíjì" chūxiàn le: gè zhāng xiàngpiàn zhōng jìngzhǐ de mǎ liánchéngle yì pǐ yùndòng de mǎ.'},
  {vi:'Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến và hoàn thiện.',zh:'经过艰苦的试验，电影拍摄技术逐渐改进、成熟。',py:'Jīngguò jiānkǔ de shìyàn, diànyǐng pāishè jìshù zhújiàn gǎijìn, chéngshú.'},
  {vi:'Ngày này về sau trở thành ngày kỷ niệm sự ra đời của điện ảnh.',zh:'这一天后来成为电影产生的纪念日。',py:'Zhè yì tiān hòulái chéngwéi diànyǐng chǎnshēng de jìniànrì.'},
  {vi:'Có lẽ phát hiện trọng đại đang ở ngay trước mắt bạn.',zh:'或许重大发现就在你的眼前。',py:'Huòxǔ zhòngdà fāxiàn jiù zài nǐ de yǎnqián.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['争论','始终','说服','毕竟','或许'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về một lần em tranh luận với người khác.',
  outline:[
    'Câu mở: tranh luận với ai, xoay quanh chuyện gì (dùng 争论, có thể thêm 围绕).',
    'Thân: mỗi bên nghĩ thế nào, bên kia giữ ý mình ra sao (dùng 始终).',
    'Cao trào: không ai thuyết phục được ai, rồi làm gì (dùng 说服).',
    'Kết: bài học rút ra (dùng 毕竟 và 或许).'
  ],
  model:{
    zh:'我和同桌围绕“中学生该不该带手机上学”争论了起来。我认为手机能帮助学习，他却始终觉得手机会影响学习。我们谁也说服不了谁，只好去问老师。老师笑着说：“你们说得都有道理，毕竟每个人的看法不一样。”我想，或许争论本身就是一种学习吧。',
    py:'Wǒ hé tóngzhuō wéirào "zhōngxuéshēng gāi bu gāi dài shǒujī shàngxué" zhēnglùnle qǐlái. Wǒ rènwéi shǒujī néng bāngzhù xuéxí, tā què shǐzhōng juéde shǒujī huì yǐngxiǎng xuéxí. Wǒmen shéi yě shuōfú bu liǎo shéi, zhǐhǎo qù wèn lǎoshī. Lǎoshī xiàozhe shuō: "Nǐmen shuō de dōu yǒu dàolǐ, bìjìng měi ge rén de kànfǎ bù yíyàng." Wǒ xiǎng, huòxǔ zhēnglùn běnshēn jiù shì yì zhǒng xuéxí ba.',
    vn:'Tôi và bạn cùng bàn từng tranh cãi xoay quanh chuyện "học sinh trung học có nên mang điện thoại đến trường không". Tôi cho rằng điện thoại giúp ích cho việc học, còn cậu ấy trước sau vẫn cho rằng điện thoại sẽ ảnh hưởng đến việc học. Chúng tôi chẳng ai thuyết phục được ai, đành đi hỏi thầy. Thầy cười nói: "Các em nói đều có lý, dù sao mỗi người cũng có cách nhìn khác nhau." Tôi nghĩ, có lẽ bản thân việc tranh luận cũng là một cách học.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có ít nhất một câu ghép (虽然…但是 / 因为…所以 / 不但…而且) hoặc mẫu 谁也……不了谁 chưa?',
    '始终, 毕竟, 或许 đều là PHÓ TỪ — đã đặt sau chủ ngữ, trước động từ chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，讲一次你和别人争论的经历。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'争论', loai:'động từ', cach:'跟/和 + người + 争论 · 围绕……争论 · 争论得……',
     sai:[{re:'争论(?=他|她|你|我|同桌|老师|朋友|对方|妈妈|爸爸)', sua:'跟他争论', giai:'争论 không mang tân ngữ chỉ người. Tranh cãi với ai: 跟/和 + người + 争论 (我跟他争论了半天).'}]},
    {tu:'始终', loai:'phó từ', cach:'Chủ ngữ + 始终 + V (坚持 / 觉得 / 没有……)',
     sai:[{re:'始终(?=我|你|他|她|我们|他们|大家|同桌)', sua:'他始终……', giai:'始终 là PHÓ TỪ, đứng SAU chủ ngữ: 他始终觉得…… chứ không 始终他…….'},
          {re:'始终(?=往|向前)', sua:'一直往前……', giai:'Chỉ hướng "đi thẳng" dùng 一直往前走; 始终 không chỉ phương hướng.', nhe:true}]},
    {tu:'说服', loai:'động từ', cach:'说服 + người · 说服不了 + người · 谁也说服不了谁',
     sai:[{re:'说服(?:他|她|你|我|对方|老师|同桌|谁)不了', sua:'说服不了他', giai:'Bổ ngữ khả năng 不了 đứng NGAY sau 说服, tân ngữ đặt sau cùng: 说服不了他 (không nói 说服他不了).'}]},
    {tu:'毕竟', loai:'phó từ', cach:'A毕竟是A · ……，毕竟 + lý do',
     sai:[{re:'毕竟[^，。！？]*(吗|呢)[？?]', sua:'究竟……？ / 到底……？', giai:'毕竟 không dùng trong câu hỏi. Hỏi "rốt cuộc là…?" phải dùng 究竟 / 到底.'},
          {re:'毕竟(?=到了|来了|等到|找到|考上)', sua:'终于……', giai:'Kể một kết quả đến sau thời gian chờ đợi ("cuối cùng cũng…") thì dùng 终于, không dùng 毕竟.', nhe:true}]},
    {tu:'或许', loai:'phó từ', cach:'或许 + V / 或许 + câu (có lẽ)',
     sai:[{re:'[一-鿿]或许[一-鿿]{1,6}都(可以|行)', sua:'A或者B都可以', giai:'Nối hai lựa chọn "A hoặc B đều được" dùng 或者; 或许 chỉ có nghĩa "có lẽ".'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'围绕……争论 / 进行讨论', nhan:'围绕', vd:'我和同桌围绕“中学生该不该带手机”争论了起来。', khi:'Câu MỞ — nêu vấn đề được tranh luận.'},
    {ten:'谁也 + V不了 + 谁', nhan:'谁也', vd:'我们争论得脸红脖子粗，谁也说服不了谁。', khi:'Tả cao trào: hai bên không ai chịu ai.'},
    {ten:'Chủ ngữ + 始终 + V', nhan:'始终', vd:'他始终坚持自己的看法。', khi:'Nhấn mạnh thái độ không đổi từ đầu đến cuối.'},
    {ten:'A毕竟是A / ……，毕竟 + lý do', nhan:'毕竟', vd:'你们说得都有道理，毕竟每个人的看法不一样。', khi:'Giải thích vì sao chấp nhận một kết luận — hợp ở câu kết.'},
    {ten:'逐渐 + V / A起来', nhan:'逐渐', vd:'听了他的解释，我逐渐明白了他的想法。', khi:'Tả sự thay đổi từ từ trong suy nghĩ, tình cảm.'},
    {ten:'或许 + câu', nhan:'或许', vd:'或许争论本身就是一种学习。', khi:'Câu KẾT mở — nêu suy nghĩ, không khẳng định tuyệt đối.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然我们意见不同，但是还是好朋友。', khi:'Chuyển ý — kết thúc tích cực sau cuộc tranh cãi.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 1–3 là câu 29–31 của sách bài tập)
  sapXep:[
    {manh:['将由此','你的人生','走向精彩','或许'],
     dap:'你的人生或许将由此走向精彩。', chap:['或许你的人生将由此走向精彩。'],
     vn:'Cuộc đời bạn có lẽ sẽ từ đó mà trở nên rực rỡ.',
     giai:'或许 là phó từ: đứng sau chủ ngữ (你的人生或许……) hoặc đầu câu đều được. 将 (sẽ) + 由此 (từ đó) đứng trước động từ 走向.'},
    {manh:['围绕去留问题','整个讨论','进行的','都是'],
     dap:'整个讨论都是围绕去留问题进行的。',
     vn:'Cả buổi thảo luận đều xoay quanh chuyện đi hay ở.',
     giai:'Khung 是……的 (HSK 3–4) nhấn mạnh nội dung: 都是 + 围绕…… + 进行的. 围绕 + vấn đề + 进行 là cấu trúc của bài.'},
    {manh:['始终','这位年轻人','很稳定','表现得'],
     dap:'这位年轻人始终表现得很稳定。',
     vn:'Chàng trai trẻ này trước sau vẫn thể hiện rất ổn định.',
     giai:'Chủ ngữ → 始终 (phó từ) → 表现得 → bổ ngữ trình độ 很稳定.'},
    {manh:['毕竟','他','你的亲弟弟','是'],
     dap:'他毕竟是你的亲弟弟。', chap:['毕竟他是你的亲弟弟。'],
     vn:'Dù sao cậu ấy cũng là em ruột của bạn.',
     giai:'毕竟 thường đứng sau chủ ngữ, trước 是 (他毕竟是……); đặt đầu câu cũng được.'},
    {manh:['天气','进入四月以后','暖和起来了','逐渐'],
     dap:'进入四月以后天气逐渐暖和起来了。', chap:['天气进入四月以后逐渐暖和起来了。'],
     vn:'Sang tháng Tư, trời dần dần ấm lên.',
     giai:'逐渐 đứng ngay trước cụm động từ 暖和起来了; trạng ngữ thời gian đứng đầu câu hoặc ngay sau chủ ngữ.'},
    {manh:['说服不了','谁也','谁','他们两个'],
     dap:'他们两个谁也说服不了谁。',
     vn:'Hai người họ chẳng ai thuyết phục được ai.',
     giai:'Mẫu 谁也 + V不了 + 谁: 谁也 đứng trước động từ, 谁 thứ hai làm tân ngữ ở cuối câu.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — ba câu đầu là 话题讨论 “日常生活中的重大发现” của sách (tr. 99)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài — ba câu đầu lấy từ phần 话题讨论 của sách. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 争论 · 毕竟 · 逐渐 · 或许 · 重大 · 奇迹.',
  questions:[
    {q_zh:'读过课文后，你认为电影的发明最重要的原因是什么？',
     q_vn:'Đọc xong bài khoá, em cho rằng nguyên nhân quan trọng nhất dẫn đến phát minh ra điện ảnh là gì?',
     hint:'Dùng 我认为…… + 或许',
     sample:'我认为最重要的原因是他们敢于争论，也愿意认真研究。如果斯坦福和科恩没有那场争论，或许就不会有电影了。',
     sample_vn:'Tôi cho rằng nguyên nhân quan trọng nhất là họ dám tranh luận và chịu nghiên cứu nghiêm túc. Nếu Stanford và Cohen không có cuộc tranh cãi ấy, có lẽ đã không có điện ảnh.',
     note:'Nêu MỘT nguyên nhân rõ ràng rồi chứng minh bằng chi tiết của bài — đừng kể lại cả bài.'},
    {q_zh:'你还知道哪些重大发现或发明的故事？请简单介绍一下。',
     q_vn:'Em còn biết câu chuyện nào về một phát hiện hay phát minh trọng đại? Hãy giới thiệu ngắn gọn.',
     hint:'Kể theo trình tự: ai — làm gì — phát hiện ra gì, dùng 逐渐',
     sample:'我知道牛顿和苹果的故事。据说牛顿看到苹果从树上掉下来，就开始想：苹果为什么往下掉，不往上飞？他认真研究，逐渐发现了万有引力。',
     sample_vn:'Tôi biết câu chuyện Newton và quả táo. Nghe nói Newton thấy quả táo rơi từ trên cây xuống liền bắt đầu nghĩ: vì sao táo rơi xuống mà không bay lên? Ông nghiên cứu nghiêm túc và dần dần phát hiện ra định luật vạn vật hấp dẫn.',
     note:'Câu hỏi "简单介绍" — giới thiệu NGẮN, 3–4 câu là đủ.'},
    {q_zh:'从你介绍的这个发现或发明中你想到了什么？',
     q_vn:'Từ phát hiện hay phát minh em vừa giới thiệu, em nghĩ đến điều gì?',
     hint:'Rút ra bài học, dùng 只要……就…… hoặc 或许',
     sample:'我想到，重大发现往往就藏在生活的小事里。只要我们留心生活的每一瞬间，或许也能有自己的发现。',
     sample_vn:'Tôi nghĩ rằng phát hiện trọng đại thường ẩn trong những chuyện nhỏ của cuộc sống. Chỉ cần chúng ta để ý từng khoảnh khắc, có lẽ cũng sẽ có phát hiện của riêng mình.',
     note:'Đây là câu "nâng ý" — phải nói được Ý NGHĨA, không lặp lại câu chuyện.'},
    {q_zh:'你跟别人争论过吗？最后谁说服了谁？',
     q_vn:'Em đã từng tranh luận với ai chưa? Cuối cùng ai thuyết phục được ai?',
     hint:'Kể một lần cụ thể, dùng 争论 + 说服',
     sample:'我跟同桌争论过“中学生该不该带手机上学”。我们争论得脸红脖子粗，谁也说服不了谁，不过我逐渐明白了他的想法。',
     sample_vn:'Tôi từng tranh cãi với bạn cùng bàn về chuyện "học sinh trung học có nên mang điện thoại đến trường". Chúng tôi cãi nhau đỏ mặt tía tai, chẳng ai thuyết phục được ai, nhưng tôi dần dần hiểu được suy nghĩ của cậu ấy.',
     note:'Nhớ trả lời CẢ HAI ý của câu hỏi: đã tranh luận chưa, và kết quả ra sao.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại 1–8 lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 10.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án:
// 1 D · 2 C · 3 A · 4 B · 5 B · 6 A · 7 A · 8 B).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第10课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'我觉得马跑得那么快，跳起时四蹄应该都是不着地的。'},
            {sp:'女',zh:'瞎说，要是四蹄都不着地，那不成了青蛙啦？'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['马跳得比青蛙高','男的说得对','她想去看马跑','马不可能四蹄都不着地'],ans:3,
     why:'瞎说 = nói bậy → cô ấy PHẢN ĐỐI. Câu hỏi tu từ 那不成了青蛙啦？ ("thế thì thành con ếch à?") nghĩa là ngựa không thể bốn móng đều rời đất — đúng lập luận của 科恩 trong bài khoá.',
     words:['蹄子','青蛙','啦']},

    {n:2,
     lines:[{sp:'男',zh:'刘经理，行李已经给您放车里了，咱们什么时候出发？'},
            {sp:'女',zh:'李师傅，登机牌我在网上都换好了。时间还早，您先去吃个饭吧。'}],
     q:'女的准备要去哪儿？',qvn:'Người phụ nữ chuẩn bị đi đâu?',
     opts:['火车站','饭店','机场','公司'],ans:2,
     why:'Từ khoá là 登机牌 (thẻ lên máy bay) → sắp ra sân bay. 吃个饭 chỉ là lời bảo tài xế đi ăn trước — bẫy để chọn nhầm "饭店".',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'小李，你这张婚纱照在哪儿照的？真不错！'},
            {sp:'女',zh:'是我们去欧洲旅行结婚时，请摄影师拍的。'}],
     q:'关于小李，下列哪项正确？',qvn:'Về Tiểu Lý, câu nào dưới đây đúng?',
     opts:['去欧洲旅行结婚了','是一位摄影师','婚纱照是自己拍的','还没有结婚'],ans:0,
     why:'去欧洲旅行结婚 = đi châu Âu du lịch kết hôn. Ảnh do 摄影师 chụp (请摄影师拍的), nên Tiểu Lý không phải nhiếp ảnh gia và cũng không tự chụp.',
     words:['摄影师','拍']},

    {n:4,
     lines:[{sp:'女',zh:'儿子来了个短信，说在路上耽误了，让我们再等一会儿。'},
            {sp:'男',zh:'这孩子真不像话！这是什么日子，他还敢这么不当回事？'}],
     q:'男的说话时的心情怎么样？',qvn:'Người đàn ông nói với tâm trạng thế nào?',
     opts:['放心','生气','难过','轻松'],ans:1,
     why:'不像话 (quá đáng, chẳng ra thể thống gì) và câu hỏi vặn 他还敢这么不当回事？ đều lộ rõ sự TỨC GIẬN. Dạng câu hỏi 心情 rất hay gặp ở HSK 5 — phải nghe giọng điệu.',
     words:[]},

    {n:5,
     lines:[{sp:'女',zh:'最近忙什么呢？好长时间没看到你了。'},
            {sp:'男',zh:'学院进了一批新电脑，这段时间忙着安装调试呢。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['在学院学电脑','最近忙着安装新电脑','自己买了一台新电脑','好长时间没上班了'],ans:1,
     why:'忙着安装调试 = bận lắp đặt, chạy thử (máy tính mới của học viện). Máy do 学院 nhập về, không phải anh ấy tự mua.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'电影频道播的一些原版电影，我很喜欢看。'},
            {sp:'女',zh:'我也喜欢，看着字幕，还可以练习一下英语。'}],
     q:'关于女的，可以知道什么？',qvn:'Về người phụ nữ, có thể biết điều gì?',
     opts:['喜欢看原版电影','不喜欢看字幕','在电影频道工作','英语说得很好'],ans:0,
     why:'我也喜欢 = cô ấy cũng thích xem phim bản gốc. Cô xem phụ đề để luyện tiếng Anh — không có nghĩa là tiếng Anh đã giỏi.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'你看过动画片《大闹天宫》吧？'},
            {sp:'男',zh:'咱们小时候，谁没看过？在国内国际多次获过奖的，太经典了！'},
            {sp:'女',zh:'昨天，我儿子看了，他居然说不喜欢。'},
            {sp:'男',zh:'可能这就是时代的差距吧。'}],
     q:'关于《大闹天宫》，可以知道什么？',qvn:'Về phim "Đại náo thiên cung", có thể biết điều gì?',
     opts:['在国内外多次获过奖','是一部新拍的电影','男的儿子很喜欢','是一部外国动画片'],ans:0,
     why:'Người đàn ông nói 在国内国际多次获过奖 → đáp án. Người KHÔNG thích là con trai của người PHỤ NỮ (居然说不喜欢 — ôn 居然 bài 1). 时代的差距 = khoảng cách thời đại, dùng từ mới 差距.',
     words:['差距']},

    {n:8,
     lines:[{sp:'男',zh:'听你说话声音好像感冒了。'},
            {sp:'女',zh:'起床时觉得鼻子有点儿堵，嗓子也发干。'},
            {sp:'男',zh:'用盐水漱漱口，用吹风机吹吹脖子后边，注意别太烫。'},
            {sp:'女',zh:'这办法还没用过，管用吗？'},
            {sp:'男',zh:'感冒初期有效，严重了当然还得吃药。'}],
     q:'男的建议用吹风机吹什么地方？',qvn:'Người đàn ông khuyên dùng máy sấy thổi vào chỗ nào?',
     opts:['鼻子','脖子后边','嗓子','头发'],ans:1,
     why:'用吹风机吹吹脖子后边 — thổi vào sau gáy. 鼻子 và 嗓子 là chỗ khó chịu của người phụ nữ, không phải chỗ để thổi — bẫy kinh điển.',
     words:['脖子']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Hôm qua em và bạn thân cãi nhau to, một bạn khác hỏi chuyện.',
     a:{sp:'Bạn',zh:'你们俩昨天为什么吵起来了？',vn:'Hôm qua sao hai cậu lại cãi nhau thế?'},
     need:['Dùng 围绕 + 争论','Nói rõ tranh cãi về chuyện gì'],
     sample:'我们围绕周末去哪儿玩争论了半天，最后谁也说服不了谁。',
     samplePy:'Wǒmen wéirào zhōumò qù nǎr wán zhēnglùnle bàntiān, zuìhòu shéi yě shuōfú bu liǎo shéi.',
     sampleVn:'Bọn tớ cãi nhau cả buổi xoay quanh chuyện cuối tuần đi đâu chơi, cuối cùng chẳng ai thuyết phục được ai.',
     tip:'Không nói 我争论他 — phải là 我跟他争论.'},

    {scene:'Em trai làm hỏng sách của em, mẹ hỏi.',
     a:{sp:'Mẹ',zh:'你弟弟又把你的书弄坏了，你不生气吗？',vn:'Em con lại làm hỏng sách của con rồi, con không giận à?'},
     need:['Dùng 毕竟','Nói lý do em tha thứ'],
     sample:'有点儿生气，不过他毕竟才六岁。以后我把书放高一点儿就好了。',
     samplePy:'Yǒudiǎnr shēngqì, búguò tā bìjìng cái liù suì. Yǐhòu wǒ bǎ shū fàng gāo yìdiǎnr jiù hǎo le.',
     sampleVn:'Có hơi giận ạ, nhưng dù sao em mới sáu tuổi. Sau này con để sách cao lên một chút là được.',
     tip:'毕竟 đứng ở vế nêu LÝ DO, sau chủ ngữ: 他毕竟才六岁.'},

    {scene:'Một bạn mới chuyển đến hỏi em về những ngày đầu ở trường.',
     a:{sp:'Bạn mới',zh:'你刚来这个学校的时候，习惯吗？',vn:'Hồi mới đến trường này, cậu có quen không?'},
     need:['Dùng 逐渐','Kể sự thay đổi theo thời gian'],
     sample:'刚来的时候不太习惯，后来认识了很多朋友，就逐渐习惯了。',
     samplePy:'Gāng lái de shíhou bú tài xíguàn, hòulái rènshile hěn duō péngyou, jiù zhújiàn xíguàn le.',
     sampleVn:'Mới đến thì chưa quen lắm, sau đó quen được nhiều bạn, thế là dần dần quen.',
     tip:'逐渐 cần một quá trình: có mốc "lúc đầu" và "về sau".'},

    {scene:'Trận bóng sắp kết thúc, đội em đang thua hai bàn, bạn chán nản.',
     a:{sp:'Bạn',zh:'还有五分钟，我们输了两个球，还有希望吗？',vn:'Còn năm phút, bọn mình đang thua hai bàn, còn hy vọng không?'},
     need:['Dùng 或许','Động viên bạn'],
     sample:'别放弃！还有五分钟呢，或许会出现奇迹。',
     samplePy:'Bié fàngqì! Hái yǒu wǔ fēnzhōng ne, huòxǔ huì chūxiàn qíjì.',
     sampleVn:'Đừng bỏ cuộc! Vẫn còn năm phút mà, có lẽ sẽ có kỳ tích.',
     tip:'或许 làm lời động viên nhẹ nhàng — không hứa chắc chắn.'},

    {scene:'Thầy giáo hỏi kết quả cuộc khảo sát nhóm em vừa làm.',
     a:{sp:'Thầy',zh:'你们这次调查的结果怎么样？',vn:'Kết quả khảo sát lần này của nhóm em thế nào?'},
     need:['Dùng 显示','Nêu một con số cụ thể'],
     sample:'调查显示，我们班有80%的同学每天用手机超过两个小时。',
     samplePy:'Diàochá xiǎnshì, wǒmen bān yǒu bǎi fēn zhī bāshí de tóngxué měi tiān yòng shǒujī chāoguò liǎng ge xiǎoshí.',
     sampleVn:'Khảo sát cho thấy 80% bạn trong lớp mỗi ngày dùng điện thoại hơn hai tiếng.',
     tip:'调查显示 + một câu hoàn chỉnh. Không nói 调查显得 — 显得 chỉ đi với tính từ.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết báo cáo thí nghiệm nộp cho thầy.',
     a:'这种方法或许能解决这个问题。',b:'这种方法没准儿能解决这个问题。',better:'a',
     why:'没准儿 là khẩu ngữ. Báo cáo là văn viết → 或许 hợp hơn.'},

    {scene:'Em nhắn tin cho bạn thân lúc trời đổ mưa.',
     a:'下雨啦，咱们别去操场了！',b:'由于降雨，我们取消前往操场的计划。',better:'a',
     why:'Câu b giống thông báo của nhà trường. Nhắn bạn thân thì dùng khẩu ngữ, có 啦 cho tự nhiên.'},

    {scene:'Lớp em viết thư xin nhà trường cho mượn hội trường.',
     a:'求求你们，让我们用一下礼堂吧！',b:'我们请求学校同意我们使用礼堂。',better:'b',
     why:'Thư gửi nhà trường cần trang trọng → 请求 + 同意. 求求你们 là năn nỉ kiểu khẩu ngữ.'},

    {scene:'Người dẫn chương trình trên TV giới thiệu phim tối nay.',
     a:'今晚电视上放这个电影。',b:'今晚本台将播放这部电影。',better:'b',
     why:'Lời của đài truyền hình dùng 本台 + 将 + 播放 + 部. 放电影 là cách nói thường ngày.'},

    {scene:'Em giới thiệu khách mời trong lễ kỷ niệm của trường.',
     a:'下面请大家欢迎著名摄影师王先生。',b:'这是个拍照片的，姓王。',better:'a',
     why:'Buổi lễ trang trọng → 著名摄影师 + 王先生. "拍照片的" là cách gọi suồng sã, thiếu tôn trọng.'},

    {scene:'Hai bạn trong nhóm đang cãi nhau, em nói với họ.',
     a:'别吵了，你们俩争论得脸红脖子粗，有什么意思呢？',b:'建议二位停止辩论，理性地交换意见。',better:'a',
     why:'Nói với bạn bè thì khẩu ngữ, thân mật. Câu b nghe như biên bản cuộc họp — quá cứng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo bài tập 4 của sách (tr. 98)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong sách: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1 phút.',
  outline: [
    {step:'Mở', cue:'1872年，在美国……斯坦福与科恩围绕……', words:['加利福尼亚州','斯坦福','科恩','围绕','辩论']},
    {step:'Hai ý kiến', cue:'斯坦福认为…… 科恩却认为……', words:['奔跑','蹄子','青蛙','始终']},
    {step:'Mời người phân xử', cue:'两人谁也…… 于是请……', words:['争论','脖子','说服','摄影师','麦布里奇','毕竟']},
    {step:'Chuẩn bị', cue:'他们来到操场，在跑道一边…… 另一边……', words:['操场','洞','插','棍','系']},
    {step:'Kết quả', cue:'马跑过去，相机…… 相片显示……', words:['匹','拦','拍','差距','显示']},
    {step:'Kỳ tích', cue:'事后有人快速拉动相片……', words:['意识','奇迹']},
    {step:'Điện ảnh ra đời & bài học', cue:'经过…… 1895年…… 这一天成为…… 留心生活的每一瞬间……', words:['艰苦','试验','逐渐','改进','成熟','卢米埃尔','兄弟','播放','纪念','导演','瞬间','或许','重大']}
  ],
  checklist: [
    'Kể đủ ba phần của sách: cuộc tranh luận — cách làm của Muybridge — sự ra đời của điện ảnh chưa?',
    'Có dùng được ít nhất 10 từ mới của bài không?',
    'Dùng 毕竟 và 逐渐 đúng chỗ chưa?',
    'Nói liền mạch khoảng 1 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 97–98) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['插','系','拦','拍','说服','围绕'],
   cau:[
     {s:'你今天＿＿这条领带吧，比较正式。', dap:['系']},
     {s:'地球为什么会＿＿太阳转，一直是科学家们很感兴趣的问题。', dap:['围绕']},
     {s:'如果不是他在中间＿＿了一手，事情不会变成现在这样。', dap:['插']},
     {s:'这位导演＿＿过二十几部电影，得过好几项国际大奖。', dap:['拍']},
     {s:'我始终没有办法＿＿他接受这个结论。', dap:['说服']},
     {s:'前面不知道发生了什么事，路被＿＿住了。', dap:['拦']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'在昨天举行的＿＿赛上，他的表现得到了大家的好评。', opts:['争论','辩论'], ans:1, giai:'Cuộc thi tranh biện là 辩论赛. Không có từ 争论赛.'},
     {s:'毕业二十年以来，我们＿＿保持着联系。', opts:['始终','终于'], ans:0, giai:'Duy trì suốt hai mươi năm → 始终 + 保持着. 终于 chỉ kết quả cuối cùng sau chờ đợi.'},
     {s:'我们之间还有很大的＿＿，我要向他学习，更加努力。', opts:['差距','距离'], ans:0, giai:'Chênh lệch về trình độ → 差距. 距离 là khoảng cách không gian, thời gian.'},
     {s:'吃中餐＿＿西餐都可以，只是我不能吃太辣的。', opts:['或许','或者'], ans:1, giai:'Nối hai lựa chọn "A hoặc B đều được" → 或者. 或许 là "có lẽ".'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'我A都十八岁B，能照顾好C自己，您就放心D吧。', tu:'啦', ans:'B', giai:'啦 đứng cuối vế câu, sau 都十八岁: 我都十八岁啦 (= 了 + 啊).'},
     {s:'A是秋天了，B再热C也不会D像夏天那样。', tu:'毕竟', ans:'A', giai:'毕竟 nêu lý do bản chất: 毕竟是秋天了 (dù sao cũng đã là mùa thu).'},
     {s:'这是A已经B经过很多人C证明的D经验。', tu:'成熟', ans:'D', giai:'成熟 làm định ngữ cho 经验: ……证明的成熟经验.'},
     {s:'真心A希望B您能同意我的C，D帮我这个忙！', tu:'请求', ans:'C', giai:'同意 + 我的 + 请求: 请求 là danh từ làm tân ngữ.'}
   ]}
];
