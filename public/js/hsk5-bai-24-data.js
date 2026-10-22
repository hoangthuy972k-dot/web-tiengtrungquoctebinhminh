// ══════════════════════════════════════════
// DATA — HSK5 Bài 24: 支教行动 (Hoạt động dạy học tình nguyện)
// Unit 8 体会教育 · Nguồn: HSK标准教程5下 (tr. 55–62) + 练习册 bài 24
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 37 từ + 3 tên riêng của bảng 生词 (tr. 55–57)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'支教',py:'zhī jiào',pos:'Động từ',vn:'dạy học tình nguyện (ở vùng khó khăn)',hv:'chi giáo',em:'🏫',lesson:1,
   explain:['Đi đến vùng núi, nông thôn, nơi kinh tế chưa phát triển để dạy học, hỗ trợ giáo dục — thường là tình nguyện, có thời hạn.','Gọi tắt của 支援教育 (chi viện giáo dục). Hay làm định ngữ: 支教老师, 支教行动, 支教生活.'],
   usage:'来 / 去 + nơi chốn + 支教; 支教 + thời gian (支教一年). Không mang tân ngữ chỉ người: ✗ 支教孩子们 → 给孩子们上课.',
   collo:['来云南支教','支教老师','支教行动','去山区支教'],
   ex_zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。',ex_py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le.',ex_vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần.',
   exList:[
     {zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。',py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le.',vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần.'},
     {zh:'大学毕业后，我姐姐去山区支教了两年。',py:'Dàxué bìyè hòu, wǒ jiějie qù shānqū zhījiàole liǎng nián.',vn:'Sau khi tốt nghiệp đại học, chị tôi đi dạy học tình nguyện ở miền núi hai năm.'},
     {zh:'虽然支教生活很辛苦，但是她觉得很有意义。',py:'Suīrán zhījiào shēnghuó hěn xīnkǔ, dànshì tā juéde hěn yǒu yìyì.',vn:'Tuy cuộc sống dạy học tình nguyện rất vất vả, nhưng chị ấy thấy rất có ý nghĩa.'}
   ],
   colloFull:[
     {zh:'来云南支教',py:'lái Yúnnán zhījiào',vn:'đến Vân Nam dạy tình nguyện'},
     {zh:'支教老师',py:'zhījiào lǎoshī',vn:'giáo viên tình nguyện'},
     {zh:'支教行动',py:'zhījiào xíngdòng',vn:'hoạt động dạy học tình nguyện'},
     {zh:'去山区支教',py:'qù shānqū zhījiào',vn:'đi dạy tình nguyện ở miền núi'},
     {zh:'支教生活',py:'zhījiào shēnghuó',vn:'cuộc sống dạy học tình nguyện'}
   ],
   patterns:[
     {s:'去 / 来 + nơi chốn + 支教 (+ thời gian)', m:'Đi / đến đâu dạy học tình nguyện (bao lâu)'},
     {s:'支教 + 老师 / 生活 / 行动', m:'支教 làm định ngữ cho danh từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy dạy học tình nguyện rất vất vả, nhưng chị ấy chưa bao giờ than phiền.',answer:'虽然支教很辛苦，但是她从来没抱怨过。',answerPy:'Suīrán zhījiào hěn xīnkǔ, dànshì tā cónglái méi bàoyuànguo.',
      note:'支教 làm chủ ngữ; ôn 抱怨 (bài 1) và 从来没……过.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần có thời gian, tôi sẽ đi miền núi dạy học tình nguyện.',answer:'只要有时间，我就去山区支教。',answerPy:'Zhǐyào yǒu shíjiān, wǒ jiù qù shānqū zhījiào.',
      note:'去 + nơi chốn + 支教 — 支教 không mang tân ngữ.',pair:'只要……就……'}
   ]},

  {n:2,zh:'行动',py:'xíngdòng',pos:'Danh từ / Động từ',vn:'hành động, hoạt động; đi lại, cử động',hv:'hành động',em:'🚶',lesson:1,
   explain:['Động từ: đi lại, cử động thân thể — 行动不便 (đi lại bất tiện); tiến hành hoạt động vì một mục đích — 提前行动, 开始行动.','Danh từ: hoạt động, hành vi — 支教行动, 采取行动 (có biện pháp hành động).'],
   usage:'采取行动 là cụm cố định rất hay gặp (không nói 采用行动); 行动不便; 迅速 / 马上 / 提前 + 行动; 行动起来.',
   collo:['采取行动','行动不便','开始行动','支教行动'],
   ex_zh:'我们应该勇敢面对困难，迅速采取行动，主动承担责任。',ex_py:'Wǒmen yīnggāi yǒnggǎn miànduì kùnnan, xùnsù cǎiqǔ xíngdòng, zhǔdòng chéngdān zérèn.',ex_vn:'Chúng ta nên dũng cảm đối mặt với khó khăn, nhanh chóng hành động, chủ động gánh vác trách nhiệm.',
   exList:[
     {zh:'我们应该勇敢面对困难，迅速采取行动，主动承担责任。',py:'Wǒmen yīnggāi yǒnggǎn miànduì kùnnan, xùnsù cǎiqǔ xíngdòng, zhǔdòng chéngdān zérèn.',vn:'Chúng ta nên dũng cảm đối mặt với khó khăn, nhanh chóng hành động, chủ động gánh vác trách nhiệm.'},
     {zh:'他运动时受伤了，行动不便。',py:'Tā yùndòng shí shòushāng le, xíngdòng búbiàn.',vn:'Anh ấy bị thương khi chơi thể thao, đi lại bất tiện.'},
     {zh:'郝老师到云南参加支教行动。',py:'Hǎo lǎoshī dào Yúnnán cānjiā zhījiào xíngdòng.',vn:'Cô Hách đến Vân Nam tham gia hoạt động dạy học tình nguyện.'}
   ],
   colloFull:[
     {zh:'采取行动',py:'cǎiqǔ xíngdòng',vn:'hành động, có biện pháp hành động'},
     {zh:'行动不便',py:'xíngdòng búbiàn',vn:'đi lại bất tiện'},
     {zh:'开始行动',py:'kāishǐ xíngdòng',vn:'bắt đầu hành động'},
     {zh:'支教行动',py:'zhījiào xíngdòng',vn:'hoạt động dạy học tình nguyện'},
     {zh:'提前行动',py:'tíqián xíngdòng',vn:'hành động sớm, làm trước'}
   ],
   patterns:[
     {s:'采取 + 行动', m:'Hành động, có biện pháp (行动 là danh từ)'},
     {s:'Chủ ngữ + 行动不便', m:'Ai đó đi lại khó khăn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội bị thương ở chân rồi, đi lại càng ngày càng bất tiện.',answer:'爷爷腿受伤以后，行动越来越不方便了。',answerPy:'Yéye tuǐ shòushāng yǐhòu, xíngdòng yuè lái yuè bù fāngbiàn le.',
      note:'行动 = đi lại, cử động thân thể; 越来越 + tính từ, cuối câu có 了.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chúng ta làm xong kế hoạch trước rồi hãy bắt đầu hành động.',answer:'我们先把计划做好，再开始行动。',answerPy:'Wǒmen xiān bǎ jìhuà zuòhǎo, zài kāishǐ xíngdòng.',
      note:'先……再……; 把 + tân ngữ + động từ + bổ ngữ kết quả.',pair:'把……'}
   ]},

  {n:3,zh:'家访',py:'jiāfǎng',pos:'Động từ',vn:'(giáo viên) đến thăm gia đình học sinh',hv:'gia phỏng',em:'🏠',lesson:1,
   explain:['Giáo viên đến nhà học sinh để tìm hiểu hoàn cảnh, trao đổi với phụ huynh.','Vừa là động từ (去家访) vừa dùng như danh từ (做家访, 一次家访).'],
   usage:'做家访 / 去家访 / 来家访; 家访后得知……; lượng từ 次: 多少次家访.',
   collo:['做家访','多少次家访','家访后'],
   ex_zh:'郝老师家访后得知，赵福根的父亲去世了。',ex_py:'Hǎo lǎoshī jiāfǎng hòu dézhī, Zhào Fúgēn de fùqin qùshì le.',ex_vn:'Sau khi đến thăm nhà, cô Hách mới biết bố của Triệu Phúc Căn đã mất.',
   exList:[
     {zh:'郝老师家访后得知，赵福根的父亲去世了。',py:'Hǎo lǎoshī jiāfǎng hòu dézhī, Zhào Fúgēn de fùqin qùshì le.',vn:'Sau khi đến thăm nhà, cô Hách mới biết bố của Triệu Phúc Căn đã mất.'},
     {zh:'爸爸，老师明天要来我们家做家访。',py:'Bàba, lǎoshī míngtiān yào lái wǒmen jiā zuò jiāfǎng.',vn:'Bố ơi, ngày mai cô giáo sẽ đến thăm nhà mình.'},
     {zh:'通过家访，老师更了解学生的家庭情况了。',py:'Tōngguò jiāfǎng, lǎoshī gèng liǎojiě xuésheng de jiātíng qíngkuàng le.',vn:'Thông qua việc thăm nhà, giáo viên hiểu rõ hơn hoàn cảnh gia đình học sinh.'}
   ],
   colloFull:[
     {zh:'做家访',py:'zuò jiāfǎng',vn:'đến thăm nhà học sinh'},
     {zh:'多少次家访',py:'duōshao cì jiāfǎng',vn:'bao nhiêu lần thăm nhà'},
     {zh:'家访后',py:'jiāfǎng hòu',vn:'sau khi thăm nhà'},
     {zh:'去学生家家访',py:'qù xuésheng jiā jiāfǎng',vn:'đến nhà học sinh thăm hỏi'}
   ],
   patterns:[
     {s:'老师 + 去 / 来 + 学生家 + 做家访', m:'Giáo viên đến thăm nhà học sinh'},
     {s:'家访后得知……', m:'Sau khi thăm nhà mới biết …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo không chỉ đến thăm nhà em mà còn đến nhà rất nhiều bạn khác.',answer:'老师不仅来我家家访，也去了很多同学家。',answerPy:'Lǎoshī bùjǐn lái wǒ jiā jiāfǎng, yě qùle hěn duō tóngxué jiā.',
      note:'来 + nơi chốn + 家访; 不仅……也…… nối hai ý tăng tiến.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Cô giáo đến nhà tôi thăm hỏi là vào hôm qua.',answer:'老师是昨天来我家家访的。',answerPy:'Lǎoshī shì zuótiān lái wǒ jiā jiāfǎng de.',
      note:'是……的 nhấn mạnh THỜI GIAN của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:4,zh:'发言',py:'fā yán',pos:'Động từ / Danh từ',vn:'phát biểu; lời phát biểu',hv:'phát ngôn',em:'🙋',lesson:1,
   explain:['Động từ li hợp: nói ý kiến trong cuộc họp, trên lớp — 上课发言, 发过言.','Danh từ: bài / lời phát biểu — 他的发言很精彩. (Xem thêm phần phân biệt 发言 — 发表.)'],
   usage:'Li hợp từ: không mang tân ngữ phía sau (✗ 发言我的意见); chen thành phần vào giữa: 发过言, 发了言. 在会上 / 课上 + 发言.',
   collo:['上课发言','积极发言','轮到我发言','会上的发言'],
   ex_zh:'他上课从不发言，很多课不及格。',ex_py:'Tā shàngkè cóng bù fāyán, hěn duō kè bù jígé.',ex_vn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt.',
   exList:[
     {zh:'他上课从不发言，很多课不及格。',py:'Tā shàngkè cóng bù fāyán, hěn duō kè bù jígé.',vn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt.'},
     {zh:'他今天在会上的发言很精彩。',py:'Tā jīntiān zài huì shang de fāyán hěn jīngcǎi.',vn:'Bài phát biểu của anh ấy trong cuộc họp hôm nay rất hay.'},
     {zh:'明天轮到我发言，我还要再练两遍。',py:'Míngtiān lún dào wǒ fāyán, wǒ hái yào zài liàn liǎng biàn.',vn:'Ngày mai đến lượt tôi phát biểu, tôi còn phải luyện thêm hai lần nữa.'}
   ],
   colloFull:[
     {zh:'上课发言',py:'shàngkè fāyán',vn:'phát biểu trong giờ học'},
     {zh:'积极发言',py:'jījí fāyán',vn:'hăng hái phát biểu'},
     {zh:'轮到我发言',py:'lún dào wǒ fāyán',vn:'đến lượt tôi phát biểu'},
     {zh:'会上的发言',py:'huì shang de fāyán',vn:'bài phát biểu trong cuộc họp'},
     {zh:'发过言',py:'fāguo yán',vn:'đã từng phát biểu (tách li hợp)'}
   ],
   patterns:[
     {s:'在 + 会上 / 课上 + 发言', m:'Phát biểu trong cuộc họp / trên lớp'},
     {s:'N + 的发言 + 很精彩', m:'发言 làm danh từ: bài phát biểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi thầy giáo khen cậu ấy, cậu ấy phát biểu càng ngày càng hăng hái.',answer:'自从老师表扬了他，他发言越来越积极了。',answerPy:'Zìcóng lǎoshī biǎoyángle tā, tā fāyán yuè lái yuè jījí le.',
      note:'发言 làm chủ ngữ nhỏ; 越来越 + tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ phát biểu trong cuộc họp.',answer:'我从来没在会上发过言。',answerPy:'Wǒ cónglái méi zài huì shang fāguo yán.',
      note:'Li hợp từ: 过 chen vào giữa — 发过言, không nói 发言过.',pair:'从来没……过'}
   ]},

  {n:5,zh:'及格',py:'jí gé',pos:'Động từ',vn:'đạt (điểm chuẩn), qua (môn thi)',hv:'cập cách',em:'✅',lesson:1,
   explain:['Đạt tiêu chuẩn tối thiểu của một bài thi (thường là 60/100).','Li hợp từ: 及了格, 及不了格; phủ định: 不及格 / 没及格.'],
   usage:'考试 / 课 + (不)及格; 及格线 (điểm sàn); 很多课不及格. Không nói ✗ 及格考试.',
   collo:['考试及格','不及格','及格线','刚刚及格'],
   ex_zh:'这次考试我只考了五十八分，差一点儿就及格了。',ex_py:'Zhè cì kǎoshì wǒ zhǐ kǎole wǔshíbā fēn, chà yìdiǎnr jiù jígé le.',ex_vn:'Kỳ thi lần này tôi chỉ được 58 điểm, suýt nữa thì đạt.',
   exList:[
     {zh:'他上课从不发言，很多课不及格。',py:'Tā shàngkè cóng bù fāyán, hěn duō kè bù jígé.',vn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt.'},
     {zh:'这次考试我只考了五十八分，差一点儿就及格了。',py:'Zhè cì kǎoshì wǒ zhǐ kǎole wǔshíbā fēn, chà yìdiǎnr jiù jígé le.',vn:'Kỳ thi lần này tôi chỉ được 58 điểm, suýt nữa thì đạt.'},
     {zh:'只要认真复习，考试一定能及格。',py:'Zhǐyào rènzhēn fùxí, kǎoshì yídìng néng jígé.',vn:'Chỉ cần ôn tập nghiêm túc, thi nhất định sẽ đạt.'}
   ],
   colloFull:[
     {zh:'考试及格',py:'kǎoshì jígé',vn:'thi đạt'},
     {zh:'不及格',py:'bù jígé',vn:'không đạt, trượt'},
     {zh:'及格线',py:'jígéxiàn',vn:'điểm sàn, điểm chuẩn'},
     {zh:'刚刚及格',py:'gānggāng jígé',vn:'vừa đủ điểm đạt'},
     {zh:'及不了格',py:'jí bu liǎo gé',vn:'không thể đạt được'}
   ],
   patterns:[
     {s:'考试 / 课 + (不)及格', m:'Bài thi / môn học đạt (không đạt)'},
     {s:'差一点儿就及格了', m:'Suýt nữa thì đạt (thực tế là KHÔNG đạt)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không ôn bài, lần này cậu thi sẽ không đạt đấy.',answer:'要是不复习，你这次考试就会不及格。',answerPy:'Yàoshi bú fùxí, nǐ zhè cì kǎoshì jiù huì bù jígé.',
      note:'Phủ định của 及格: 不及格 (chưa xảy ra) / 没及格 (đã xảy ra).',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Ngay cả môn cậu ấy giỏi nhất, lần này cũng không đạt.',answer:'连他最好的一门课这次都没及格。',answerPy:'Lián tā zuì hǎo de yì mén kè zhè cì dōu méi jígé.',
      note:'Việc đã xảy ra → 没及格.',pair:'连……都……'}
   ]},

  {n:6,zh:'交往',py:'jiāowǎng',pos:'Động từ',vn:'giao du, qua lại, kết bạn với',hv:'giao vãng',em:'🤝',lesson:1,
   explain:['Qua lại, tiếp xúc, kết bạn với người khác.','Cũng làm danh từ: 人与人之间的交往. Nói về nam nữ: 他们交往两年了 (quen nhau, hẹn hò).'],
   usage:'和 / 跟 + người + 交往; 善于交往; 交往 + 多 / 少. Không mang tân ngữ trực tiếp: ✗ 交往同学 → 和同学交往.',
   collo:['和同学交往','善于交往','交往多','人际交往'],
   ex_zh:'他平时也几乎不和同学交往。',ex_py:'Tā píngshí yě jīhū bù hé tóngxué jiāowǎng.',ex_vn:'Bình thường cậu ấy cũng hầu như không giao du với bạn bè.',
   exList:[
     {zh:'他上课从不发言，很多课不及格，平时也几乎不和同学交往。',py:'Tā shàngkè cóng bù fāyán, hěn duō kè bù jígé, píngshí yě jīhū bù hé tóngxué jiāowǎng.',vn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt, bình thường cũng hầu như không giao du với bạn bè.'},
     {zh:'他性格内向，不太善于和别人交往。',py:'Tā xìnggé nèixiàng, bú tài shànyú hé biérén jiāowǎng.',vn:'Cậu ấy tính hướng nội, không giỏi giao tiếp với người khác lắm.'},
     {zh:'他们俩交往了三年，终于结婚了。',py:'Tāmen liǎ jiāowǎngle sān nián, zhōngyú jiéhūn le.',vn:'Hai người họ quen nhau ba năm, cuối cùng cũng kết hôn.'}
   ],
   colloFull:[
     {zh:'和同学交往',py:'hé tóngxué jiāowǎng',vn:'giao du với bạn học'},
     {zh:'善于交往',py:'shànyú jiāowǎng',vn:'giỏi giao tiếp, kết bạn'},
     {zh:'交往多',py:'jiāowǎng duō',vn:'qua lại nhiều'},
     {zh:'人际交往',py:'rénjì jiāowǎng',vn:'giao tiếp giữa người với người'},
     {zh:'交往了三年',py:'jiāowǎngle sān nián',vn:'quen nhau ba năm'}
   ],
   patterns:[
     {s:'和 / 跟 + người + 交往', m:'Giao du, qua lại với ai'},
     {s:'A 和 B 交往 + thời gian', m:'Hai người quen nhau (hẹn hò) bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy tuy ít nói, nhưng rất giỏi giao tiếp với người khác.',answer:'他虽然话不多，但是很善于和别人交往。',answerPy:'Tā suīrán huà bù duō, dànshì hěn shànyú hé biérén jiāowǎng.',
      note:'和 + người + 交往; ôn 善于 (bài 7).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cậu ấy vừa lên cấp ba là đã bắt đầu qua lại với rất nhiều bạn mới.',answer:'他一上高中就开始和很多新朋友交往。',answerPy:'Tā yí shàng gāozhōng jiù kāishǐ hé hěn duō xīn péngyou jiāowǎng.',
      note:'一……就…… nối hai việc xảy ra liền nhau.',pair:'一……就……'}
   ]},

  {n:7,zh:'家务',py:'jiāwù',pos:'Danh từ',vn:'việc nhà',hv:'gia vụ',em:'🧹',lesson:1,
   explain:['Các công việc trong gia đình: nấu cơm, giặt giũ, dọn dẹp….','Động từ đi kèm thường là 做: 做家务; khẩu ngữ: 家务活.'],
   usage:'做 / 帮(着)……做 + 家务; 分担家务 (chia sẻ việc nhà); 家务事.',
   collo:['做家务','帮妈妈做家务','分担家务','家务活'],
   ex_zh:'他家里很穷，还得帮着妈妈做家务。',ex_py:'Tā jiāli hěn qióng, hái děi bāngzhe māma zuò jiāwù.',ex_vn:'Nhà cậu ấy rất nghèo, cậu còn phải giúp mẹ làm việc nhà.',
   exList:[
     {zh:'他家里很穷，还得帮着妈妈做家务。',py:'Tā jiāli hěn qióng, hái děi bāngzhe māma zuò jiāwù.',vn:'Nhà cậu ấy rất nghèo, cậu còn phải giúp mẹ làm việc nhà.'},
     {zh:'周末我常常帮父母做家务。',py:'Zhōumò wǒ chángcháng bāng fùmǔ zuò jiāwù.',vn:'Cuối tuần tôi thường giúp bố mẹ làm việc nhà.'},
     {zh:'现在很多家庭都是夫妻两人一起分担家务。',py:'Xiànzài hěn duō jiātíng dōu shì fūqī liǎng rén yìqǐ fēndān jiāwù.',vn:'Bây giờ nhiều gia đình vợ chồng cùng nhau chia sẻ việc nhà.'}
   ],
   colloFull:[
     {zh:'做家务',py:'zuò jiāwù',vn:'làm việc nhà'},
     {zh:'帮妈妈做家务',py:'bāng māma zuò jiāwù',vn:'giúp mẹ làm việc nhà'},
     {zh:'分担家务',py:'fēndān jiāwù',vn:'chia sẻ việc nhà'},
     {zh:'家务活',py:'jiāwùhuó',vn:'việc nhà (khẩu ngữ)'}
   ],
   patterns:[
     {s:'帮(着) + người + 做家务', m:'Giúp ai làm việc nhà'},
     {s:'分担 + 家务', m:'Chia nhau làm việc nhà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em đã làm xong hết việc nhà rồi.',answer:'我把家务都做完了。',answerPy:'Wǒ bǎ jiāwù dōu zuòwán le.',
      note:'把 + 家务 + 做完: bổ ngữ kết quả 完 bắt buộc có.',pair:'把……'},
     {promptLang:'vi',prompt:'Cậu ấy không những biết làm việc nhà mà còn làm rất tốt.',answer:'他不仅会做家务，而且做得很好。',answerPy:'Tā bùjǐn huì zuò jiāwù, érqiě zuò de hěn hǎo.',
      note:'做家务 — động từ đi với 家务 là 做.',pair:'不仅……而且……'}
   ]},

  {n:8,zh:'体贴',py:'tǐtiē',pos:'Tính từ',vn:'chu đáo, ân cần, biết quan tâm',hv:'thể thiếp',em:'💞',lesson:1,
   explain:['Hiểu và quan tâm chu đáo đến cảm nhận, nhu cầu của người khác.','Cũng làm động từ: 体贴父母 (quan tâm chăm lo cho bố mẹ).'],
   usage:'很体贴; 温柔体贴 / 体贴孝顺; 对 + người + 很体贴; 体贴 + người (động từ).',
   collo:['体贴孝顺','温柔体贴','对妻子很体贴','体贴父母'],
   ex_zh:'他还得帮着妈妈做家务，是个体贴孝顺的孩子。',ex_py:'Tā hái děi bāngzhe māma zuò jiāwù, shì ge tǐtiē xiàoshùn de háizi.',ex_vn:'Cậu còn phải giúp mẹ làm việc nhà, là một đứa trẻ biết quan tâm và hiếu thảo.',
   exList:[
     {zh:'他还得帮着妈妈做家务，是个体贴孝顺的孩子。',py:'Tā hái děi bāngzhe māma zuò jiāwù, shì ge tǐtiē xiàoshùn de háizi.',vn:'Cậu còn phải giúp mẹ làm việc nhà, là một đứa trẻ biết quan tâm và hiếu thảo.'},
     {zh:'她丈夫是个既温柔又体贴的人。',py:'Tā zhàngfu shì ge jì wēnróu yòu tǐtiē de rén.',vn:'Chồng cô ấy là người vừa dịu dàng vừa chu đáo.'},
     {zh:'他对妻子很体贴，每天都帮她做家务。',py:'Tā duì qīzi hěn tǐtiē, měi tiān dōu bāng tā zuò jiāwù.',vn:'Anh ấy rất chu đáo với vợ, ngày nào cũng giúp vợ làm việc nhà.'}
   ],
   colloFull:[
     {zh:'体贴孝顺',py:'tǐtiē xiàoshùn',vn:'chu đáo, hiếu thảo'},
     {zh:'温柔体贴',py:'wēnróu tǐtiē',vn:'dịu dàng, chu đáo'},
     {zh:'对妻子很体贴',py:'duì qīzi hěn tǐtiē',vn:'rất chu đáo với vợ'},
     {zh:'体贴父母',py:'tǐtiē fùmǔ',vn:'quan tâm chăm lo cho bố mẹ'}
   ],
   patterns:[
     {s:'对 + người + 很体贴', m:'Rất chu đáo, ân cần với ai'},
     {s:'既温柔又体贴', m:'Vừa dịu dàng vừa chu đáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa dịu dàng vừa chu đáo, ai cũng thích anh ấy.',answer:'他既温柔又体贴，大家都喜欢他。',answerPy:'Tā jì wēnróu yòu tǐtiē, dàjiā dōu xǐhuan tā.',
      note:'既 + tính từ + 又 + tính từ: hai đặc điểm cùng tồn tại.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Cô ấy ngay cả với người lạ cũng rất ân cần.',answer:'她连对陌生人都很体贴。',answerPy:'Tā lián duì mòshēngrén dōu hěn tǐtiē.',
      note:'对 + người + 很体贴; 连 đặt trước cụm 对陌生人.',pair:'连……都……'}
   ]},

  {n:9,zh:'排练',py:'páiliàn',pos:'Động từ',vn:'tập dượt, diễn tập (tiết mục)',hv:'bài luyện',em:'🎭',lesson:1,
   explain:['Tập trước nhiều lần một tiết mục biểu diễn (múa, kịch, hát) trước khi diễn chính thức.','Tân ngữ thường là 节目, 舞蹈, 话剧. Khác 练习 (luyện tập nói chung).'],
   usage:'排练 + 节目 / 舞蹈; 找…… + 排练; 排练了三遍.',
   collo:['排练节目','一起去排练','排练舞蹈','多排练几遍'],
   ex_zh:'她每周二带着他一起去找音乐老师排练。',ex_py:'Tā měi zhōu\'èr dàizhe tā yìqǐ qù zhǎo yīnyuè lǎoshī páiliàn.',ex_vn:'Thứ Ba hằng tuần cô đều dẫn cậu đi tìm thầy giáo âm nhạc để tập.',
   exList:[
     {zh:'她每周二带着他一起去找音乐老师排练。',py:'Tā měi zhōu\'èr dàizhe tā yìqǐ qù zhǎo yīnyuè lǎoshī páiliàn.',vn:'Thứ Ba hằng tuần cô đều dẫn cậu đi tìm thầy giáo âm nhạc để tập.'},
     {zh:'为了元旦晚会，我们班每天放学后都排练节目。',py:'Wèile Yuándàn wǎnhuì, wǒmen bān měi tiān fàngxué hòu dōu páiliàn jiémù.',vn:'Để chuẩn bị cho đêm văn nghệ Tết Dương lịch, lớp tôi ngày nào tan học cũng tập tiết mục.'},
     {zh:'演出前一定要多排练几遍。',py:'Yǎnchū qián yídìng yào duō páiliàn jǐ biàn.',vn:'Trước khi biểu diễn nhất định phải tập thêm vài lần.'}
   ],
   colloFull:[
     {zh:'排练节目',py:'páiliàn jiémù',vn:'tập tiết mục'},
     {zh:'一起去排练',py:'yìqǐ qù páiliàn',vn:'cùng đi tập'},
     {zh:'排练舞蹈',py:'páiliàn wǔdǎo',vn:'tập múa'},
     {zh:'多排练几遍',py:'duō páiliàn jǐ biàn',vn:'tập thêm vài lần'}
   ],
   patterns:[
     {s:'排练 + 节目 / 舞蹈', m:'Tập một tiết mục'},
     {s:'找 + người + 排练', m:'Tìm ai đó để tập cùng / hướng dẫn tập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiết mục này chúng tôi tập ở nhà thầy giáo âm nhạc.',answer:'这个节目我们是在音乐老师家排练的。',answerPy:'Zhège jiémù wǒmen shì zài yīnyuè lǎoshī jiā páiliàn de.',
      note:'是……的 nhấn mạnh NƠI CHỐN của việc đã làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chúng tôi tập càng nhiều thì diễn càng tự nhiên.',answer:'我们排练得越多，表演得越自然。',answerPy:'Wǒmen páiliàn de yuè duō, biǎoyǎn de yuè zìrán.',
      note:'越……越……: mức độ tăng theo nhau.',pair:'越……越……'}
   ]},

  {n:10,zh:'蝴蝶',py:'húdié',pos:'Danh từ',vn:'con bướm',hv:'hồ điệp',em:'🦋',lesson:1,
   explain:['Loài côn trùng có đôi cánh to, nhiều màu sắc đẹp.','Lượng từ: 只. 蝴蝶舞 = điệu múa con bướm.'],
   usage:'一只蝴蝶; 蝴蝶舞; 蝴蝶飞来飞去.',
   collo:['一只蝴蝶','蝴蝶舞','美丽的蝴蝶'],
   ex_zh:'表演时，福根的蝴蝶舞得了舞蹈组的冠军。',ex_py:'Biǎoyǎn shí, Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn.',ex_vn:'Khi biểu diễn, điệu múa con bướm của Phúc Căn đoạt giải nhất nhóm múa.',
   exList:[
     {zh:'表演时，福根的蝴蝶舞得了舞蹈组的冠军。',py:'Biǎoyǎn shí, Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn.',vn:'Khi biểu diễn, điệu múa con bướm của Phúc Căn đoạt giải nhất nhóm múa.'},
     {zh:'花园里有几只美丽的蝴蝶飞来飞去。',py:'Huāyuán li yǒu jǐ zhī měilì de húdié fēi lái fēi qù.',vn:'Trong vườn có mấy con bướm xinh đẹp bay qua bay lại.'},
     {zh:'小女孩儿穿着像蝴蝶一样的裙子跳舞。',py:'Xiǎo nǚháir chuānzhe xiàng húdié yíyàng de qúnzi tiàowǔ.',vn:'Cô bé mặc chiếc váy giống như con bướm để nhảy múa.'}
   ],
   colloFull:[
     {zh:'一只蝴蝶',py:'yì zhī húdié',vn:'một con bướm'},
     {zh:'蝴蝶舞',py:'húdié wǔ',vn:'điệu múa con bướm'},
     {zh:'美丽的蝴蝶',py:'měilì de húdié',vn:'con bướm xinh đẹp'},
     {zh:'蝴蝶飞来飞去',py:'húdié fēi lái fēi qù',vn:'bướm bay qua bay lại'}
   ],
   patterns:[
     {s:'一只 + 蝴蝶', m:'Lượng từ của 蝴蝶 là 只'},
     {s:'蝴蝶 + 舞', m:'Điệu múa con bướm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con bướm bị em gái bắt được rồi.',answer:'蝴蝶被妹妹抓住了。',answerPy:'Húdié bèi mèimei zhuāzhù le.',
      note:'Câu bị động: N + 被 + người + V + bổ ngữ kết quả.',pair:'被……'},
     {promptLang:'vi',prompt:'Cậu ấy vừa nhảy điệu múa con bướm, các bạn đã vỗ tay.',answer:'他一跳蝴蝶舞，同学们就鼓起掌来。',answerPy:'Tā yí tiào húdié wǔ, tóngxuémen jiù gǔqǐ zhǎng lai.',
      note:'跳 + 蝴蝶舞; 鼓起掌来 — 起……来 bao lấy 掌.',pair:'一……就……'}
   ]},

  {n:11,zh:'舞蹈',py:'wǔdǎo',pos:'Danh từ',vn:'múa, điệu múa, vũ đạo',hv:'vũ đạo',em:'💃',lesson:1,
   explain:['Nghệ thuật múa — dùng động tác cơ thể theo nhịp nhạc để biểu đạt.','Là danh từ, trang trọng hơn 跳舞; không nói ✗ 我舞蹈, phải nói 我跳舞 / 表演舞蹈.'],
   usage:'舞蹈组 / 舞蹈老师 / 舞蹈比赛; 表演 / 学 + 舞蹈; 一段舞蹈.',
   collo:['舞蹈组','舞蹈比赛','表演舞蹈','那天的舞蹈'],
   ex_zh:'看了她的舞蹈，大家都鼓起掌来。',ex_py:'Kànle tā de wǔdǎo, dàjiā dōu gǔqǐ zhǎng lai.',ex_vn:'Xem điệu múa của cô ấy, mọi người đều vỗ tay.',
   exList:[
     {zh:'他写了一篇题目为《那天的舞蹈和掌声》的作文。',py:'Tā xiěle yì piān tímù wéi 《Nà tiān de wǔdǎo hé zhǎngshēng》 de zuòwén.',vn:'Cậu ấy viết một bài văn với đầu đề “Điệu múa và tràng vỗ tay hôm ấy”.'},
     {zh:'看了她的舞蹈，大家都鼓起掌来。',py:'Kànle tā de wǔdǎo, dàjiā dōu gǔqǐ zhǎng lai.',vn:'Xem điệu múa của cô ấy, mọi người đều vỗ tay.'},
     {zh:'我妹妹从小就学舞蹈，现在是学校舞蹈组的。',py:'Wǒ mèimei cóngxiǎo jiù xué wǔdǎo, xiànzài shì xuéxiào wǔdǎo zǔ de.',vn:'Em gái tôi học múa từ nhỏ, bây giờ ở trong nhóm múa của trường.'}
   ],
   colloFull:[
     {zh:'舞蹈组',py:'wǔdǎo zǔ',vn:'nhóm múa, hạng mục múa'},
     {zh:'舞蹈比赛',py:'wǔdǎo bǐsài',vn:'cuộc thi múa'},
     {zh:'表演舞蹈',py:'biǎoyǎn wǔdǎo',vn:'biểu diễn múa'},
     {zh:'那天的舞蹈',py:'nà tiān de wǔdǎo',vn:'điệu múa hôm ấy'},
     {zh:'学舞蹈',py:'xué wǔdǎo',vn:'học múa'}
   ],
   patterns:[
     {s:'舞蹈 + 组 / 老师 / 比赛', m:'舞蹈 làm định ngữ'},
     {s:'表演 / 学 + 舞蹈', m:'Biểu diễn / học múa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng xem điệu múa nào đẹp như thế.',answer:'我从来没看过这么美的舞蹈。',answerPy:'Wǒ cónglái méi kànguo zhème měi de wǔdǎo.',
      note:'舞蹈 là danh từ, làm tân ngữ của 看.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Điệu múa này là do cô giáo âm nhạc dạy chúng tôi.',answer:'这个舞蹈是音乐老师教我们的。',answerPy:'Zhège wǔdǎo shì yīnyuè lǎoshī jiāo wǒmen de.',
      note:'是……的 nhấn mạnh NGƯỜI thực hiện.',pair:'是……的'}
   ]},

  {n:12,zh:'冠军',py:'guànjūn',pos:'Danh từ',vn:'quán quân, giải nhất',hv:'quán quân',em:'🏆',lesson:1,
   explain:['Người / đội đứng thứ nhất trong cuộc thi.','Á quân: 亚军; hạng ba: 季军. Động từ đi kèm: 得 / 拿 / 获得 + 冠军.'],
   usage:'得了 / 拿到 / 获得 + 冠军; 世界冠军; 舞蹈组的冠军.',
   collo:['得了冠军','拿冠军','世界冠军','舞蹈组的冠军'],
   ex_zh:'福根的蝴蝶舞得了舞蹈组的冠军。',ex_py:'Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn.',ex_vn:'Điệu múa con bướm của Phúc Căn đoạt giải nhất nhóm múa.',
   exList:[
     {zh:'福根的蝴蝶舞得了舞蹈组的冠军。',py:'Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn.',vn:'Điệu múa con bướm của Phúc Căn đoạt giải nhất nhóm múa.'},
     {zh:'很可惜，银牌，差一点儿就能拿冠军了。',py:'Hěn kěxī, yínpái, chà yìdiǎnr jiù néng ná guànjūn le.',vn:'Tiếc quá, huy chương bạc, suýt chút nữa là giành được giải nhất rồi.'},
     {zh:'他从小的梦想就是当世界冠军。',py:'Tā cóngxiǎo de mèngxiǎng jiù shì dāng shìjiè guànjūn.',vn:'Ước mơ từ nhỏ của cậu ấy chính là trở thành nhà vô địch thế giới.'}
   ],
   colloFull:[
     {zh:'得了冠军',py:'déle guànjūn',vn:'đoạt giải nhất'},
     {zh:'拿冠军',py:'ná guànjūn',vn:'giành chức vô địch'},
     {zh:'世界冠军',py:'shìjiè guànjūn',vn:'nhà vô địch thế giới'},
     {zh:'舞蹈组的冠军',py:'wǔdǎo zǔ de guànjūn',vn:'giải nhất nhóm múa'},
     {zh:'获得冠军',py:'huòdé guànjūn',vn:'giành được quán quân'}
   ],
   patterns:[
     {s:'得 / 拿 / 获得 + 冠军', m:'Giành giải nhất'},
     {s:'差一点儿就能拿冠军了', m:'Suýt nữa giành giải nhất (thực tế không giành được)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chăm chỉ luyện tập, đội chúng ta nhất định có thể giành giải nhất.',answer:'只要努力练习，我们队就一定能拿冠军。',answerPy:'Zhǐyào nǔlì liànxí, wǒmen duì jiù yídìng néng ná guànjūn.',
      note:'拿 / 得 + 冠军.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy không giành được giải nhất, nhưng chúng tôi rất vui.',answer:'虽然没拿到冠军，但是我们很开心。',answerPy:'Suīrán méi nádào guànjūn, dànshì wǒmen hěn kāixīn.',
      note:'Phủ định việc đã xảy ra: 没拿到.',pair:'虽然……但是……'}
   ]},

  {n:13,zh:'鼓掌',py:'gǔ zhǎng',pos:'Động từ',vn:'vỗ tay',hv:'cổ chưởng',em:'👏',lesson:1,
   explain:['Hai bàn tay vỗ vào nhau để khen ngợi, hoan nghênh.','Li hợp từ: 鼓起掌来, 鼓了半天掌. “Tiếng vỗ tay” là 掌声.'],
   usage:'为 + người + 鼓掌; 热烈鼓掌; 鼓起掌来 (bắt đầu vỗ tay — 起……来 tách ra bao lấy 掌).',
   collo:['鼓起掌来','热烈鼓掌','为他鼓掌'],
   ex_zh:'台下的同学们鼓起掌来，齐声地喊着“福根”的名字。',ex_py:'Tái xià de tóngxuémen gǔqǐ zhǎng lai, qíshēng de hǎnzhe “Fúgēn” de míngzi.',ex_vn:'Các bạn dưới khán đài vỗ tay rầm rộ, đồng thanh hô tên “Phúc Căn”.',
   exList:[
     {zh:'台下的同学们鼓起掌来，齐声地喊着“福根”的名字。',py:'Tái xià de tóngxuémen gǔqǐ zhǎng lai, qíshēng de hǎnzhe “Fúgēn” de míngzi.',vn:'Các bạn dưới khán đài vỗ tay rầm rộ, đồng thanh hô tên “Phúc Căn”.'},
     {zh:'看了她的舞蹈，大家都鼓起掌来。',py:'Kànle tā de wǔdǎo, dàjiā dōu gǔqǐ zhǎng lai.',vn:'Xem điệu múa của cô ấy, mọi người đều vỗ tay.'},
     {zh:'让我们热烈鼓掌，欢迎新同学！',py:'Ràng wǒmen rèliè gǔzhǎng, huānyíng xīn tóngxué!',vn:'Chúng ta hãy nhiệt liệt vỗ tay chào đón bạn mới!'}
   ],
   colloFull:[
     {zh:'鼓起掌来',py:'gǔqǐ zhǎng lai',vn:'vỗ tay lên, bắt đầu vỗ tay'},
     {zh:'热烈鼓掌',py:'rèliè gǔzhǎng',vn:'vỗ tay nhiệt liệt'},
     {zh:'为他鼓掌',py:'wèi tā gǔzhǎng',vn:'vỗ tay cho anh ấy'},
     {zh:'鼓了半天掌',py:'gǔle bàntiān zhǎng',vn:'vỗ tay mãi'}
   ],
   patterns:[
     {s:'为 + người + 鼓掌', m:'Vỗ tay cho ai'},
     {s:'Chủ ngữ + 鼓起掌来', m:'Bắt đầu vỗ tay (起……来 chỉ bắt đầu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa hát xong, cả lớp liền vỗ tay.',answer:'他一唱完，全班同学就鼓起掌来。',answerPy:'Tā yí chàngwán, quán bān tóngxué jiù gǔqǐ zhǎng lai.',
      note:'鼓起掌来 — không nói 鼓掌起来 khi muốn tách li hợp từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Khán giả bị điệu múa của cô ấy làm cảm động, đều vỗ tay.',answer:'观众被她的舞蹈感动了，都鼓起掌来。',answerPy:'Guānzhòng bèi tā de wǔdǎo gǎndòng le, dōu gǔqǐ zhǎng lai.',
      note:'被 + tác nhân + 感动了.',pair:'被……'}
   ]},

  {n:14,zh:'用功',py:'yònggōng',pos:'Tính từ',vn:'chăm chỉ, siêng năng (học hành)',hv:'dụng công',em:'📚',lesson:1,
   explain:['Chăm chỉ, dồn nhiều công sức vào việc học — hay nói về học sinh, sinh viên.','Cũng dùng như động từ: 在图书馆用功 (đang miệt mài học ở thư viện).'],
   usage:'学习 + 用功; 很 / 非常 + 用功; 用功 + 读书 / 学习. 用功 chủ yếu nói về việc HỌC; nói về công việc thì 努力 / 认真 tự nhiên hơn.',
   collo:['学习用功','很用功','用功读书','不够用功'],
   ex_zh:'之后，赵福根学习用功了，成绩也逐渐进步。',ex_py:'Zhīhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù.',ex_vn:'Sau đó, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần dần tiến bộ.',
   exList:[
     {zh:'之后，赵福根学习用功了，成绩也逐渐进步。',py:'Zhīhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù.',vn:'Sau đó, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần dần tiến bộ.'},
     {zh:'他是班里最用功的学生，每天都学到很晚。',py:'Tā shì bān li zuì yònggōng de xuésheng, měi tiān dōu xué dào hěn wǎn.',vn:'Cậu ấy là học sinh chăm chỉ nhất lớp, ngày nào cũng học đến rất khuya.'},
     {zh:'考试快到了，大家都在图书馆里用功。',py:'Kǎoshì kuài dào le, dàjiā dōu zài túshūguǎn li yònggōng.',vn:'Sắp thi rồi, mọi người đều đang miệt mài học trong thư viện.'}
   ],
   colloFull:[
     {zh:'学习用功',py:'xuéxí yònggōng',vn:'học hành chăm chỉ'},
     {zh:'很用功',py:'hěn yònggōng',vn:'rất chăm chỉ'},
     {zh:'用功读书',py:'yònggōng dúshū',vn:'chăm chỉ học hành'},
     {zh:'不够用功',py:'bú gòu yònggōng',vn:'chưa đủ chăm chỉ'}
   ],
   patterns:[
     {s:'学习 + (很) 用功', m:'Học hành (rất) chăm chỉ'},
     {s:'用功 + 读书 / 学习', m:'Chăm chỉ học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu học càng chăm chỉ thì thành tích càng tốt.',answer:'你学习越用功，成绩就越好。',answerPy:'Nǐ xuéxí yuè yònggōng, chéngjì jiù yuè hǎo.',
      note:'越……越……: mức độ tăng theo nhau; 用功 làm vị ngữ sau 学习.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Tuy cậu ấy rất chăm chỉ, nhưng thành tích vẫn chưa tiến bộ.',answer:'虽然他很用功，但是成绩还没有进步。',answerPy:'Suīrán tā hěn yònggōng, dànshì chéngjì hái méiyǒu jìnbù.',
      note:'很 + 用功 (tính từ).',pair:'虽然……但是……'}
   ]},

  {n:15,zh:'进步',py:'jìnbù',pos:'Động từ',vn:'tiến bộ, trở nên tốt hơn',hv:'tiến bộ',em:'📈',lesson:1,
   explain:['Tiến lên, trở nên tốt hơn so với trước — nói về người, thành tích, xã hội.','Cũng dùng như danh từ: 取得进步, 很大的进步.'],
   usage:'成绩 / 汉语 + 进步; 进步 + 很快 / 巨大 (bảng 搭配 của sách); 取得进步; 促进社会进步. Trái nghĩa: 退步.',
   collo:['成绩进步','进步很快','进步巨大','社会进步'],
   ex_zh:'这学期你的汉语进步很快。',ex_py:'Zhè xuéqī nǐ de Hànyǔ jìnbù hěn kuài.',ex_vn:'Học kỳ này tiếng Trung của em tiến bộ rất nhanh.',
   exList:[
     {zh:'之后，赵福根学习用功了，成绩也逐渐进步。',py:'Zhīhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù.',vn:'Sau đó, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần dần tiến bộ.'},
     {zh:'这学期你的汉语进步很快。',py:'Zhè xuéqī nǐ de Hànyǔ jìnbù hěn kuài.',vn:'Học kỳ này tiếng Trung của em tiến bộ rất nhanh.'},
     {zh:'促进社会进步是每个人的义务。',py:'Cùjìn shèhuì jìnbù shì měi ge rén de yìwù.',vn:'Thúc đẩy xã hội tiến bộ là nghĩa vụ của mỗi người.'}
   ],
   colloFull:[
     {zh:'成绩进步',py:'chéngjì jìnbù',vn:'thành tích tiến bộ'},
     {zh:'进步很快',py:'jìnbù hěn kuài',vn:'tiến bộ rất nhanh'},
     {zh:'进步巨大',py:'jìnbù jùdà',vn:'tiến bộ vượt bậc'},
     {zh:'社会进步',py:'shèhuì jìnbù',vn:'sự tiến bộ của xã hội'},
     {zh:'取得进步',py:'qǔdé jìnbù',vn:'đạt được tiến bộ'}
   ],
   patterns:[
     {s:'N + 进步 + 很快 / 巨大', m:'Cái gì đó tiến bộ nhanh / vượt bậc'},
     {s:'促进 + 社会进步', m:'Thúc đẩy xã hội tiến bộ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ thầy giúp đỡ, tiếng Trung của tôi tiến bộ ngày càng nhanh.',answer:'在老师的帮助下，我的汉语进步得越来越快。',answerPy:'Zài lǎoshī de bāngzhù xià, wǒ de Hànyǔ jìnbù de yuè lái yuè kuài.',
      note:'进步 + 得 + bổ ngữ mức độ; 越来越 + tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần cậu chăm chỉ, nhất định sẽ tiến bộ.',answer:'只要你用功，就一定会进步。',answerPy:'Zhǐyào nǐ yònggōng, jiù yídìng huì jìnbù.',
      note:'Ôn cả 用功 (từ số 14).',pair:'只要……就……'}
   ]},

  {n:16,zh:'题目',py:'tímù',pos:'Danh từ',vn:'đầu đề, đề bài',hv:'đề mục',em:'📝',lesson:1,
   explain:['Tên, đầu đề của bài văn, bài nói, bài hát.','Đề bài, câu hỏi trong bài thi, bài tập.'],
   usage:'作文 / 考试 + 题目; 题目为 / 是 + 《……》; lượng từ: 一个题目, 一道题目 (đề thi).',
   collo:['作文题目','考试题目','题目为','一道题目'],
   ex_zh:'他写了一篇题目为《那天的舞蹈和掌声》的作文。',ex_py:'Tā xiěle yì piān tímù wéi 《Nà tiān de wǔdǎo hé zhǎngshēng》 de zuòwén.',ex_vn:'Cậu ấy viết một bài văn với đầu đề “Điệu múa và tràng vỗ tay hôm ấy”.',
   exList:[
     {zh:'他写了一篇题目为《那天的舞蹈和掌声》的作文。',py:'Tā xiěle yì piān tímù wéi 《Nà tiān de wǔdǎo hé zhǎngshēng》 de zuòwén.',vn:'Cậu ấy viết một bài văn với đầu đề “Điệu múa và tràng vỗ tay hôm ấy”.'},
     {zh:'这次作文的题目是《我的家乡》。',py:'Zhè cì zuòwén de tímù shì 《Wǒ de jiāxiāng》.',vn:'Đề bài văn lần này là “Quê hương em”.'},
     {zh:'考试的题目太难了，我只做了一半。',py:'Kǎoshì de tímù tài nán le, wǒ zhǐ zuòle yíbàn.',vn:'Đề thi khó quá, tôi chỉ làm được một nửa.'}
   ],
   colloFull:[
     {zh:'作文题目',py:'zuòwén tímù',vn:'đề bài tập làm văn'},
     {zh:'考试题目',py:'kǎoshì tímù',vn:'đề thi'},
     {zh:'题目为',py:'tímù wéi',vn:'với đầu đề là'},
     {zh:'一道题目',py:'yí dào tímù',vn:'một câu hỏi (trong đề)'}
   ],
   patterns:[
     {s:'一篇题目为《……》的 + 作文 / 文章', m:'Một bài văn có đầu đề là …'},
     {s:'……的题目是《……》', m:'Đầu đề của … là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đề lần này khó quá, ngay cả thầy giáo cũng thấy khó.',answer:'这次的题目太难了，连老师都觉得难。',answerPy:'Zhè cì de tímù tài nán le, lián lǎoshī dōu juéde nán.',
      note:'题目 = đề bài; 连 + người + 都…….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tôi đọc kỹ đề bài một lượt rồi mới bắt đầu viết.',answer:'我先把题目看了一遍，再开始写。',answerPy:'Wǒ xiān bǎ tímù kànle yí biàn, zài kāishǐ xiě.',
      note:'把 + 题目 + 看了一遍; 先……再…….',pair:'把……'}
   ]},

  {n:17,zh:'朗读',py:'lǎngdú',pos:'Động từ',vn:'đọc to, đọc diễn cảm',hv:'lãng độc',em:'🗣️',lesson:1,
   explain:['Đọc to, rõ ràng một bài văn, bài thơ cho người khác nghe.','Khác 阅读 (đọc hiểu, đọc thầm) và 念 (đọc — khẩu ngữ).'],
   usage:'朗读 + 课文 / 作文 / 诗; 大声朗读; 朗读比赛. Chỉ dùng khi đọc THÀNH TIẾNG; đọc sách để hiểu thì dùng 看 / 读 / 阅读.',
   collo:['朗读课文','朗读作文','大声朗读','朗读比赛'],
   ex_zh:'他朗读了自己的作文。',ex_py:'Tā lǎngdúle zìjǐ de zuòwén.',ex_vn:'Cậu ấy đọc to bài văn của mình.',
   exList:[
     {zh:'他写的作文得了全班最高分，他朗读了自己的作文。',py:'Tā xiě de zuòwén déle quán bān zuì gāo fēn, tā lǎngdúle zìjǐ de zuòwén.',vn:'Bài văn cậu ấy viết được điểm cao nhất lớp, cậu ấy đã đọc to bài văn của mình.'},
     {zh:'每天早上我都大声朗读课文。',py:'Měi tiān zǎoshang wǒ dōu dàshēng lǎngdú kèwén.',vn:'Sáng nào tôi cũng đọc to bài khoá.'},
     {zh:'她在朗读比赛中得了第一名。',py:'Tā zài lǎngdú bǐsài zhōng déle dì-yī míng.',vn:'Cô ấy đoạt giải nhất trong cuộc thi đọc diễn cảm.'}
   ],
   colloFull:[
     {zh:'朗读课文',py:'lǎngdú kèwén',vn:'đọc to bài khoá'},
     {zh:'朗读作文',py:'lǎngdú zuòwén',vn:'đọc to bài văn'},
     {zh:'大声朗读',py:'dàshēng lǎngdú',vn:'đọc thật to'},
     {zh:'朗读比赛',py:'lǎngdú bǐsài',vn:'cuộc thi đọc diễn cảm'}
   ],
   patterns:[
     {s:'朗读 + 课文 / 作文 / 诗', m:'Đọc to bài khoá / bài văn / bài thơ'},
     {s:'在……面前 + 朗读', m:'Đọc to trước mặt ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đọc to trước nhiều người như vậy.',answer:'我从来没在这么多人面前朗读过。',answerPy:'Wǒ cónglái méi zài zhème duō rén miànqián lǎngdúguo.',
      note:'过 đứng sau 朗读 (không phải li hợp từ).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Sáng nào cậu ấy cũng vừa thức dậy là đọc to bài khoá.',answer:'他每天早上一起床就朗读课文。',answerPy:'Tā měi tiān zǎoshang yì qǐchuáng jiù lǎngdú kèwén.',
      note:'一 + V1 + 就 + V2.',pair:'一……就……'}
   ]},

  {n:18,zh:'温柔',py:'wēnróu',pos:'Tính từ',vn:'dịu dàng, êm dịu, mềm mại',hv:'ôn nhu',em:'🌸',lesson:1,
   explain:['Hiền hoà, nhẹ nhàng, dịu dàng — thường tả tính cách, giọng nói, động tác (nhất là của phụ nữ).','Bảng 搭配 của sách: 性格 / 声音 / 动作 + 温柔.'],
   usage:'性格 / 声音 / 动作 + 温柔; 温柔体贴; 对 + người + 很温柔. Không dùng tả đồ vật cứng: ✗ 这张桌子很温柔.',
   collo:['性格温柔','声音温柔','动作温柔','温柔体贴'],
   ex_zh:'她丈夫是个既温柔又体贴的人。',ex_py:'Tā zhàngfu shì ge jì wēnróu yòu tǐtiē de rén.',ex_vn:'Chồng cô ấy là người vừa dịu dàng vừa chu đáo.',
   exList:[
     {zh:'郝老师来到我家，那是第一次有老师来。她非常温柔……',py:'Hǎo lǎoshī láidào wǒ jiā, nà shì dì-yī cì yǒu lǎoshī lái. Tā fēicháng wēnróu……',vn:'Cô Hách đến nhà em, đó là lần đầu tiên có thầy cô đến. Cô rất dịu dàng…'},
     {zh:'大家都很羡慕他有个温柔体贴的妻子。',py:'Dàjiā dōu hěn xiànmù tā yǒu ge wēnróu tǐtiē de qīzi.',vn:'Ai cũng ngưỡng mộ anh ấy có người vợ dịu dàng, chu đáo.'},
     {zh:'妈妈的声音很温柔，我一听就不害怕了。',py:'Māma de shēngyīn hěn wēnróu, wǒ yì tīng jiù bú hàipà le.',vn:'Giọng mẹ rất dịu dàng, tôi vừa nghe là hết sợ.'}
   ],
   colloFull:[
     {zh:'性格温柔',py:'xìnggé wēnróu',vn:'tính cách dịu dàng'},
     {zh:'声音温柔',py:'shēngyīn wēnróu',vn:'giọng nói dịu dàng'},
     {zh:'动作温柔',py:'dòngzuò wēnróu',vn:'động tác nhẹ nhàng'},
     {zh:'温柔体贴',py:'wēnróu tǐtiē',vn:'dịu dàng, chu đáo'}
   ],
   patterns:[
     {s:'性格 / 声音 / 动作 + 温柔', m:'Tính cách / giọng nói / động tác dịu dàng'},
     {s:'既温柔又体贴', m:'Vừa dịu dàng vừa chu đáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo tuy nghiêm khắc nhưng giọng nói rất dịu dàng.',answer:'老师虽然很严格，但是声音很温柔。',answerPy:'Lǎoshī suīrán hěn yángé, dànshì shēngyīn hěn wēnróu.',
      note:'声音 + 温柔 (bảng 搭配 của sách).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cô ấy không những xinh đẹp mà còn rất dịu dàng.',answer:'她不仅漂亮，而且很温柔。',answerPy:'Tā bùjǐn piàoliang, érqiě hěn wēnróu.',
      note:'Hai tính từ nối bằng 不仅……而且…….',pair:'不仅……而且……'}
   ]},

  {n:19,zh:'热烈',py:'rèliè',pos:'Tính từ',vn:'nhiệt liệt, sôi nổi',hv:'nhiệt liệt',em:'🔥',lesson:1,
   explain:['Sôi nổi, hăng hái, mạnh mẽ — tả KHÔNG KHÍ, tiếng vỗ tay, sự hoan nghênh, cuộc thảo luận.','Khác 热情 (nhiệt tình — tả tính cách, thái độ của một người).'],
   usage:'热烈的掌声; 热烈欢迎; 讨论得很热烈; 气氛热烈. Không nói ✗ 他性格很热烈 (→ 热情).',
   collo:['热烈的掌声','热烈欢迎','讨论得很热烈','气氛热烈'],
   ex_zh:'我永远都忘不了那热烈的掌声。',ex_py:'Wǒ yǒngyuǎn dōu wàng bu liǎo nà rèliè de zhǎngshēng.',ex_vn:'Em mãi mãi không quên được tràng vỗ tay nhiệt liệt ấy.',
   exList:[
     {zh:'我永远都忘不了那热烈的掌声和同学们送我的糖。',py:'Wǒ yǒngyuǎn dōu wàng bu liǎo nà rèliè de zhǎngshēng hé tóngxuémen sòng wǒ de táng.',vn:'Em mãi mãi không quên được tràng vỗ tay nhiệt liệt ấy và những viên kẹo các bạn tặng em.'},
     {zh:'我代表学校，向各位同学和老师的到来表示热烈的欢迎！',py:'Wǒ dàibiǎo xuéxiào, xiàng gè wèi tóngxué hé lǎoshī de dàolái biǎoshì rèliè de huānyíng!',vn:'Thay mặt nhà trường, tôi xin nhiệt liệt chào mừng các em học sinh và các thầy cô đã đến!'},
     {zh:'关于这个问题，大家讨论得很热烈。',py:'Guānyú zhège wèntí, dàjiā tǎolùn de hěn rèliè.',vn:'Về vấn đề này, mọi người thảo luận rất sôi nổi.'}
   ],
   colloFull:[
     {zh:'热烈的掌声',py:'rèliè de zhǎngshēng',vn:'tràng vỗ tay nhiệt liệt'},
     {zh:'热烈欢迎',py:'rèliè huānyíng',vn:'nhiệt liệt chào mừng'},
     {zh:'讨论得很热烈',py:'tǎolùn de hěn rèliè',vn:'thảo luận rất sôi nổi'},
     {zh:'气氛热烈',py:'qìfēn rèliè',vn:'không khí sôi nổi'}
   ],
   patterns:[
     {s:'热烈 + 的 + 掌声 / 欢迎', m:'Tràng vỗ tay / sự chào đón nhiệt liệt'},
     {s:'V + 得很热烈', m:'Làm gì đó rất sôi nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa bước lên sân khấu đã nhận được tràng vỗ tay nhiệt liệt.',answer:'他一走上舞台，就得到了热烈的掌声。',answerPy:'Tā yì zǒushàng wǔtái, jiù dédàole rèliè de zhǎngshēng.',
      note:'热烈的 + 掌声.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mọi người thảo luận ngày càng sôi nổi.',answer:'大家讨论得越来越热烈了。',answerPy:'Dàjiā tǎolùn de yuè lái yuè rèliè le.',
      note:'V + 得 + 越来越 + tính từ + 了.',pair:'越来越……'}
   ]},

  {n:20,zh:'勇气',py:'yǒngqì',pos:'Danh từ',vn:'dũng khí, sự can đảm',hv:'dũng khí',em:'🦁',lesson:1,
   explain:['Tinh thần dám làm, không sợ hãi.','Bảng 搭配 của sách: 有 / 获得 / 缺少 + 勇气; hay gặp 鼓起勇气 (lấy hết can đảm).'],
   usage:'有 / 没有 / 缺少 / 获得 + 勇气; 鼓起勇气; ……的勇气. 勇气 là danh từ — không nói ✗ 他很勇气 (→ 他很勇敢).',
   collo:['有勇气','缺少勇气','获得勇气','鼓起勇气'],
   ex_zh:'别怕困难，鼓起勇气，你一定能成功！',ex_py:'Bié pà kùnnan, gǔqǐ yǒngqì, nǐ yídìng néng chénggōng!',ex_vn:'Đừng sợ khó khăn, hãy lấy hết can đảm, cậu nhất định sẽ thành công!',
   exList:[
     {zh:'我感觉在学校也有人爱我了，我开始有勇气……',py:'Wǒ gǎnjué zài xuéxiào yě yǒu rén ài wǒ le, wǒ kāishǐ yǒu yǒngqì……',vn:'Em cảm thấy ở trường cũng có người thương em rồi, em bắt đầu có dũng khí…'},
     {zh:'别怕困难，鼓起勇气，你一定能成功！',py:'Bié pà kùnnan, gǔqǐ yǒngqì, nǐ yídìng néng chénggōng!',vn:'Đừng sợ khó khăn, hãy lấy hết can đảm, cậu nhất định sẽ thành công!'},
     {zh:'他缺少向别人道歉的勇气。',py:'Tā quēshǎo xiàng biérén dàoqiàn de yǒngqì.',vn:'Anh ấy thiếu dũng khí để xin lỗi người khác.'}
   ],
   colloFull:[
     {zh:'有勇气',py:'yǒu yǒngqì',vn:'có dũng khí'},
     {zh:'缺少勇气',py:'quēshǎo yǒngqì',vn:'thiếu dũng khí'},
     {zh:'获得勇气',py:'huòdé yǒngqì',vn:'có được dũng khí'},
     {zh:'鼓起勇气',py:'gǔqǐ yǒngqì',vn:'lấy hết can đảm'}
   ],
   patterns:[
     {s:'有 / 缺少 / 获得 + 勇气', m:'Có / thiếu / có được dũng khí'},
     {s:'V + 的勇气', m:'Dũng khí để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi ngay cả dũng khí nói chuyện với cô ấy cũng không có.',answer:'我连和她说话的勇气都没有。',answerPy:'Wǒ lián hé tā shuōhuà de yǒngqì dōu méiyǒu.',
      note:'和她说话的 làm định ngữ cho 勇气.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần có dũng khí, việc gì cũng làm được.',answer:'只要有勇气，什么事都能做成。',answerPy:'Zhǐyào yǒu yǒngqì, shénme shì dōu néng zuòchéng.',
      note:'有 + 勇气 (không nói 很勇气).',pair:'只要……就……'}
   ]},

  {n:21,zh:'青壮年',py:'qīng-zhuàngnián',pos:'Danh từ',vn:'thanh niên và tráng niên (người ở độ tuổi lao động khoẻ nhất)',hv:'thanh tráng niên',em:'💪',lesson:1,
   explain:['Gộp của 青年 (thanh niên) và 壮年 (tráng niên, khoảng 30–50 tuổi) — lực lượng lao động chính.','Hay dùng khi nói về nông thôn: 青壮年外出打工 (thanh niên trai tráng đi làm ăn xa).'],
   usage:'村里的青壮年; 青壮年 + 外出打工 / 出去闯世界; 青壮年劳动力. Thường làm chủ ngữ, văn viết.',
   collo:['村里的青壮年','青壮年外出打工','青壮年劳动力'],
   ex_zh:'郝老师发现，山里的青壮年都出去闯世界，只有老人、孩子留守。',ex_py:'Hǎo lǎoshī fāxiàn, shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè, zhǐ yǒu lǎorén, háizi liúshǒu.',ex_vn:'Cô Hách phát hiện, thanh niên trai tráng trong núi đều ra ngoài bôn ba, chỉ có người già và trẻ em ở lại.',
   exList:[
     {zh:'郝老师发现，山里的青壮年都出去闯世界，只有老人、孩子留守。',py:'Hǎo lǎoshī fāxiàn, shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè, zhǐ yǒu lǎorén, háizi liúshǒu.',vn:'Cô Hách phát hiện, thanh niên trai tráng trong núi đều ra ngoài bôn ba, chỉ có người già và trẻ em ở lại.'},
     {zh:'现在很多农村的青壮年都去城市打工了。',py:'Xiànzài hěn duō nóngcūn de qīng-zhuàngnián dōu qù chéngshì dǎgōng le.',vn:'Bây giờ nhiều thanh niên trai tráng ở nông thôn đều lên thành phố làm thuê rồi.'},
     {zh:'村里缺少青壮年劳动力，很多地都没人种了。',py:'Cūn li quēshǎo qīng-zhuàngnián láodònglì, hěn duō dì dōu méi rén zhòng le.',vn:'Làng thiếu lao động trai tráng, nhiều ruộng không còn ai trồng nữa.'}
   ],
   colloFull:[
     {zh:'村里的青壮年',py:'cūn li de qīng-zhuàngnián',vn:'thanh niên trai tráng trong làng'},
     {zh:'青壮年外出打工',py:'qīng-zhuàngnián wàichū dǎgōng',vn:'thanh niên trai tráng đi làm ăn xa'},
     {zh:'青壮年劳动力',py:'qīng-zhuàngnián láodònglì',vn:'lao động trai tráng'},
     {zh:'山里的青壮年',py:'shān li de qīng-zhuàngnián',vn:'thanh niên trai tráng trong núi'}
   ],
   patterns:[
     {s:'青壮年 + 都 + 外出打工 / 出去闯世界', m:'Thanh niên trai tráng đều đi làm ăn xa'},
     {s:'缺少 + 青壮年劳动力', m:'Thiếu lao động trai tráng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thanh niên trai tráng trong làng đều bị công việc ở thành phố thu hút đi rồi.',answer:'村里的青壮年都被城市里的工作吸引走了。',answerPy:'Cūn li de qīng-zhuàngnián dōu bèi chéngshì li de gōngzuò xīyǐn zǒu le.',
      note:'Chủ ngữ 青壮年 + 被 + tác nhân + V + bổ ngữ.',pair:'被……'},
     {promptLang:'vi',prompt:'Thanh niên trai tráng đi làm ăn xa ngày càng nhiều.',answer:'外出打工的青壮年越来越多了。',answerPy:'Wàichū dǎgōng de qīng-zhuàngnián yuè lái yuè duō le.',
      note:'外出打工的 làm định ngữ cho 青壮年.',pair:'越来越……'}
   ]},

  {n:22,zh:'闯',py:'chuǎng',pos:'Động từ',vn:'xông, lao vào; bôn ba, lăn lộn',hv:'sấm',em:'🏃',lesson:1,
   explain:['Xông thẳng vào, lao qua bất chấp: 闯进去, 闯红灯 (vượt đèn đỏ).','Bôn ba, lăn lộn ra ngoài để lập nghiệp: 闯世界.'],
   usage:'闯 + 世界 / 红灯; bảng 搭配 của sách: 闯 + 入 / 进(去) / 过(去). Lặp lại: 出去闯闯.',
   collo:['闯世界','闯红灯','闯进去','闯过去'],
   ex_zh:'山里的青壮年都出去闯世界。',ex_py:'Shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè.',ex_vn:'Thanh niên trai tráng trong núi đều ra ngoài bôn ba.',
   exList:[
     {zh:'山里的青壮年都出去闯世界。',py:'Shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè.',vn:'Thanh niên trai tráng trong núi đều ra ngoài bôn ba.'},
     {zh:'昨天开车时精力不集中，闯了红灯。',py:'Zuótiān kāichē shí jīnglì bù jízhōng, chuǎngle hóngdēng.',vn:'Hôm qua lúc lái xe không tập trung, tôi đã vượt đèn đỏ.'},
     {zh:'男孩子，出去闯闯也好。',py:'Nán háizi, chūqu chuǎngchuang yě hǎo.',vn:'Con trai mà, ra ngoài lăn lộn một chút cũng tốt.'}
   ],
   colloFull:[
     {zh:'闯世界',py:'chuǎng shìjiè',vn:'bôn ba lập nghiệp'},
     {zh:'闯红灯',py:'chuǎng hóngdēng',vn:'vượt đèn đỏ'},
     {zh:'闯进去',py:'chuǎng jìnqu',vn:'xông vào'},
     {zh:'闯过去',py:'chuǎng guòqu',vn:'xông qua'},
     {zh:'闯入',py:'chuǎngrù',vn:'xông vào, đột nhập'}
   ],
   patterns:[
     {s:'出去 + 闯世界', m:'Ra ngoài bôn ba lập nghiệp'},
     {s:'闯 + 进(去) / 过(去) / 入', m:'Xông vào / xông qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy từ trước đến nay chưa từng vượt đèn đỏ.',answer:'他从来没闯过红灯。',answerPy:'Tā cónglái méi chuǎngguo hóngdēng.',
      note:'闯 + 过 + 红灯.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Tuy ra ngoài bôn ba rất vất vả, nhưng anh ấy không hối hận.',answer:'虽然出去闯世界很辛苦，但是他不后悔。',answerPy:'Suīrán chūqu chuǎng shìjiè hěn xīnkǔ, dànshì tā bú hòuhuǐ.',
      note:'Cụm 出去闯世界 làm chủ ngữ.',pair:'虽然……但是……'}
   ]},

  {n:23,zh:'留守',py:'liúshǒu',pos:'Động từ',vn:'ở lại trông nom (nhà cửa, quê nhà)',hv:'lưu thủ',em:'🏡',lesson:1,
   explain:['Ở lại để trông coi khi những người khác đã đi xa.','留守儿童 = trẻ em ở lại quê khi bố mẹ đi làm ăn xa; 留守老人 = người già ở lại quê.'],
   usage:'留守 + 在家(中); 留守儿童 / 留守老人 (định ngữ). Thường gặp trong văn viết, báo chí.',
   collo:['留守儿童','留守老人','留守在家中'],
   ex_zh:'只有老人和孩子留守在家中。',ex_py:'Zhǐ yǒu lǎorén hé háizi liúshǒu zài jiā zhōng.',ex_vn:'Chỉ có người già và trẻ em ở lại trông nhà.',
   exList:[
     {zh:'山里的青壮年都出去闯世界，只有老人、孩子留守。',py:'Shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè, zhǐ yǒu lǎorén, háizi liúshǒu.',vn:'Thanh niên trai tráng trong núi đều ra ngoài bôn ba, chỉ có người già và trẻ em ở lại.'},
     {zh:'青壮年都出去打工闯世界了，只有老人和孩子留守在家中。',py:'Qīng-zhuàngnián dōu chūqu dǎgōng chuǎng shìjiè le, zhǐ yǒu lǎorén hé háizi liúshǒu zài jiā zhōng.',vn:'Thanh niên trai tráng đều ra ngoài làm thuê, bôn ba cả rồi, chỉ có người già và trẻ em ở lại trông nhà.'},
     {zh:'这所学校里有很多留守儿童。',py:'Zhè suǒ xuéxiào li yǒu hěn duō liúshǒu értóng.',vn:'Trường này có rất nhiều trẻ em có bố mẹ đi làm ăn xa.'}
   ],
   colloFull:[
     {zh:'留守儿童',py:'liúshǒu értóng',vn:'trẻ em ở lại quê (bố mẹ đi làm xa)'},
     {zh:'留守老人',py:'liúshǒu lǎorén',vn:'người già ở lại quê'},
     {zh:'留守在家中',py:'liúshǒu zài jiā zhōng',vn:'ở lại trông nhà'},
     {zh:'在村里留守',py:'zài cūn li liúshǒu',vn:'ở lại trong làng'}
   ],
   patterns:[
     {s:'只有 + người + 留守(在家中)', m:'Chỉ có ai đó ở lại trông nhà'},
     {s:'留守 + 儿童 / 老人', m:'Trẻ em / người già ở lại quê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những đứa trẻ ở lại quê không chỉ thiếu người chăm sóc mà cũng thiếu tình thương.',answer:'留守儿童不仅缺少照顾，也缺少爱。',answerPy:'Liúshǒu értóng bùjǐn quēshǎo zhàogù, yě quēshǎo ài.',
      note:'留守 làm định ngữ: 留守儿童.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Bố mẹ vừa đi làm ăn xa, cậu bé đã thành trẻ ở lại quê một mình.',answer:'父母一出去打工，他就成了留守儿童。',answerPy:'Fùmǔ yì chūqu dǎgōng, tā jiù chéngle liúshǒu értóng.',
      note:'一……就…… với hai chủ ngữ khác nhau: 就 đứng sau chủ ngữ thứ hai.',pair:'一……就……'}
   ]},

  {n:24,zh:'主题',py:'zhǔtí',pos:'Danh từ',vn:'chủ đề',hv:'chủ đề',em:'🎯',lesson:1,
   explain:['Nội dung, tư tưởng chính của một hoạt động, bài văn, tác phẩm.','Khác 题目 (đầu đề, tên bài — cái viết ra ở trên cùng).'],
   usage:'活动 / 比赛 / 文章 + 的主题; 主题是 "……"; 主题曲 (bài hát chủ đề); 围绕主题.',
   collo:['活动的主题','主题是','主题曲','围绕主题'],
   ex_zh:'郝老师组织了一个8周的研究型学习活动，主题是“让家乡的明天更美好”。',ex_py:'Hǎo lǎoshī zǔzhīle yí ge bā zhōu de yánjiūxíng xuéxí huódòng, zhǔtí shì “ràng jiāxiāng de míngtiān gèng měihǎo”.',ex_vn:'Cô Hách tổ chức một hoạt động học tập kiểu nghiên cứu kéo dài 8 tuần, chủ đề là “Làm cho ngày mai của quê hương tươi đẹp hơn”.',
   exList:[
     {zh:'郝老师组织了一个8周的研究型学习活动，主题是“让家乡的明天更美好”。',py:'Hǎo lǎoshī zǔzhīle yí ge bā zhōu de yánjiūxíng xuéxí huódòng, zhǔtí shì “ràng jiāxiāng de míngtiān gèng měihǎo”.',vn:'Cô Hách tổ chức một hoạt động học tập kiểu nghiên cứu kéo dài 8 tuần, chủ đề là “Làm cho ngày mai của quê hương tươi đẹp hơn”.'},
     {zh:'这次演讲比赛的主题是“我的梦想”。',py:'Zhè cì yǎnjiǎng bǐsài de zhǔtí shì “wǒ de mèngxiǎng”.',vn:'Chủ đề của cuộc thi hùng biện lần này là “Ước mơ của em”.'},
     {zh:'这首歌是这部电影的主题曲。',py:'Zhè shǒu gē shì zhè bù diànyǐng de zhǔtíqǔ.',vn:'Bài hát này là nhạc chủ đề của bộ phim.'}
   ],
   colloFull:[
     {zh:'活动的主题',py:'huódòng de zhǔtí',vn:'chủ đề của hoạt động'},
     {zh:'主题是',py:'zhǔtí shì',vn:'chủ đề là'},
     {zh:'主题曲',py:'zhǔtíqǔ',vn:'bài hát chủ đề'},
     {zh:'围绕主题',py:'wéirào zhǔtí',vn:'xoay quanh chủ đề'}
   ],
   patterns:[
     {s:'……的主题是 “……”', m:'Chủ đề của … là …'},
     {s:'围绕 + 主题 + V', m:'Làm gì đó xoay quanh chủ đề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chủ đề của cuộc thi lần này là do học sinh tự chọn.',answer:'这次比赛的主题是学生自己选的。',answerPy:'Zhè cì bǐsài de zhǔtí shì xuésheng zìjǐ xuǎn de.',
      note:'是……的 nhấn mạnh NGƯỜI chọn.',pair:'是……的'},
     {promptLang:'vi',prompt:'Hãy viết chủ đề của hoạt động lên bảng.',answer:'请把活动的主题写在黑板上。',answerPy:'Qǐng bǎ huódòng de zhǔtí xiě zài hēibǎn shang.',
      note:'把 + tân ngữ + V + 在 + nơi chốn.',pair:'把……'}
   ]},

  {n:25,zh:'地理',py:'dìlǐ',pos:'Danh từ',vn:'địa lý; môn Địa lý',hv:'địa lý',em:'🌍',lesson:1,
   explain:['Tình hình núi sông, khí hậu, dân cư… của một vùng.','Tên môn học: 地理课.'],
   usage:'历史地理情况; 地理位置; 地理课 / 地理老师. Thường đi cùng 历史: 了解历史地理.',
   collo:['历史地理','地理情况','地理课','地理位置'],
   ex_zh:'她鼓励学生通过了解历史地理情况、采访村里的老人来寻找村子的问题。',ex_py:'Tā gǔlì xuésheng tōngguò liǎojiě lìshǐ dìlǐ qíngkuàng, cǎifǎng cūn li de lǎorén lái xúnzhǎo cūnzi de wèntí.',ex_vn:'Cô khuyến khích học sinh tìm ra vấn đề của làng thông qua việc tìm hiểu tình hình lịch sử, địa lý và phỏng vấn người già trong làng.',
   exList:[
     {zh:'她鼓励学生通过了解历史地理情况、采访村里的老人来寻找村子的问题。',py:'Tā gǔlì xuésheng tōngguò liǎojiě lìshǐ dìlǐ qíngkuàng, cǎifǎng cūn li de lǎorén lái xúnzhǎo cūnzi de wèntí.',vn:'Cô khuyến khích học sinh tìm ra vấn đề của làng thông qua việc tìm hiểu tình hình lịch sử, địa lý và phỏng vấn người già trong làng.'},
     {zh:'我最喜欢上地理课，可以了解世界各地的情况。',py:'Wǒ zuì xǐhuan shàng dìlǐ kè, kěyǐ liǎojiě shìjiè gè dì de qíngkuàng.',vn:'Tôi thích nhất giờ Địa lý, có thể tìm hiểu tình hình khắp nơi trên thế giới.'},
     {zh:'这个城市的地理位置非常重要。',py:'Zhège chéngshì de dìlǐ wèizhi fēicháng zhòngyào.',vn:'Vị trí địa lý của thành phố này rất quan trọng.'}
   ],
   colloFull:[
     {zh:'历史地理',py:'lìshǐ dìlǐ',vn:'lịch sử và địa lý'},
     {zh:'地理情况',py:'dìlǐ qíngkuàng',vn:'tình hình địa lý'},
     {zh:'地理课',py:'dìlǐ kè',vn:'giờ Địa lý'},
     {zh:'地理位置',py:'dìlǐ wèizhi',vn:'vị trí địa lý'}
   ],
   patterns:[
     {s:'了解 + 历史地理情况', m:'Tìm hiểu tình hình lịch sử, địa lý'},
     {s:'……的地理位置 + 很重要', m:'Vị trí địa lý của … rất quan trọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không chỉ thích Lịch sử mà cũng thích Địa lý.',answer:'我不仅喜欢历史，也喜欢地理。',answerPy:'Wǒ bùjǐn xǐhuan lìshǐ, yě xǐhuan dìlǐ.',
      note:'Tên môn học làm tân ngữ.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Cậu ấy cứ vào giờ Địa lý là buồn ngủ.',answer:'他一上地理课就想睡觉。',answerPy:'Tā yí shàng dìlǐ kè jiù xiǎng shuìjiào.',
      note:'上 + 地理课 = vào giờ Địa lý.',pair:'一……就……'}
   ]},

  {n:26,zh:'采访',py:'cǎifǎng',pos:'Động từ',vn:'phỏng vấn',hv:'thái phỏng',em:'🎤',lesson:1,
   explain:['Tìm gặp, hỏi chuyện người khác để thu thập thông tin (phóng viên, người làm nghiên cứu).','Bảng 搭配 của sách: 采访 + 到…… / 完.'],
   usage:'采访 + người; 采访到 + người / tin tức; 采访完; 接受采访 (nhận lời phỏng vấn). Không nói ✗ 采访给他.',
   collo:['采访村里的老人','采访到','采访完','接受采访'],
   ex_zh:'学生们采访村里的老人，了解村子的历史。',ex_py:'Xuéshengmen cǎifǎng cūn li de lǎorén, liǎojiě cūnzi de lìshǐ.',ex_vn:'Học sinh phỏng vấn người già trong làng để tìm hiểu lịch sử của làng.',
   exList:[
     {zh:'学生们采访村里的老人，了解村子的历史。',py:'Xuéshengmen cǎifǎng cūn li de lǎorén, liǎojiě cūnzi de lìshǐ.',vn:'Học sinh phỏng vấn người già trong làng để tìm hiểu lịch sử của làng.'},
     {zh:'记者采访完他以后，马上写了一篇新闻。',py:'Jìzhě cǎifǎng wán tā yǐhòu, mǎshàng xiěle yì piān xīnwén.',vn:'Phóng viên phỏng vấn xong anh ấy liền viết ngay một bản tin.'},
     {zh:'她终于采访到了那位有名的科学家。',py:'Tā zhōngyú cǎifǎng dàole nà wèi yǒumíng de kēxuéjiā.',vn:'Cuối cùng cô ấy cũng phỏng vấn được vị nhà khoa học nổi tiếng ấy.'}
   ],
   colloFull:[
     {zh:'采访村里的老人',py:'cǎifǎng cūn li de lǎorén',vn:'phỏng vấn người già trong làng'},
     {zh:'采访到',py:'cǎifǎng dào',vn:'phỏng vấn được'},
     {zh:'采访完',py:'cǎifǎng wán',vn:'phỏng vấn xong'},
     {zh:'接受采访',py:'jiēshòu cǎifǎng',vn:'nhận lời phỏng vấn'}
   ],
   patterns:[
     {s:'采访 + 到 / 完 + người', m:'Phỏng vấn được / xong ai'},
     {s:'接受 + (người) + 的采访', m:'Nhận lời phỏng vấn của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua tôi đã được phóng viên phỏng vấn.',answer:'我昨天被记者采访了。',answerPy:'Wǒ zuótiān bèi jìzhě cǎifǎng le.',
      note:'Câu bị động với 被.',pair:'被……'},
     {promptLang:'vi',prompt:'Tôi phỏng vấn ông ấy là ở trong thư viện.',answer:'我是在图书馆采访他的。',answerPy:'Wǒ shì zài túshūguǎn cǎifǎng tā de.',
      note:'是……的 nhấn mạnh NƠI CHỐN.',pair:'是……的'}
   ]},

  {n:27,zh:'利用',py:'lìyòng',pos:'Động từ',vn:'tận dụng, sử dụng; lợi dụng',hv:'lợi dụng',em:'⏱️',lesson:1,
   explain:['Tận dụng sự vật, thời gian, điều kiện để phát huy tác dụng (nghĩa tốt).','Dùng thủ đoạn để người khác phục vụ mục đích của mình (nghĩa xấu): 利用别人.'],
   usage:'Bảng 搭配 của sách: 利用 + 工具 / 人 / 时间 / 条件; 利用……(的时间) + 做……. Chú ý: "lợi dụng" tiếng Việt chủ yếu nghĩa xấu, còn 利用 tiếng Trung phần lớn là nghĩa tốt (tận dụng).',
   collo:['利用空闲时间','利用工具','利用条件','利用别人'],
   ex_zh:'刘老师经常利用空闲时间来指导我们。',ex_py:'Liú lǎoshī jīngcháng lìyòng kòngxián shíjiān lái zhǐdǎo wǒmen.',ex_vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.',
   exList:[
     {zh:'她和其他志愿者利用午休、周末等空闲时间给学生们指导和培训。',py:'Tā hé qítā zhìyuànzhě lìyòng wǔxiū, zhōumò děng kòngxián shíjiān gěi xuéshengmen zhǐdǎo hé péixùn.',vn:'Cô và các tình nguyện viên khác tận dụng giờ nghỉ trưa, cuối tuần và những lúc rảnh để hướng dẫn, bồi dưỡng cho học sinh.'},
     {zh:'刘老师经常利用空闲时间来指导我们。',py:'Liú lǎoshī jīngcháng lìyòng kòngxián shíjiān lái zhǐdǎo wǒmen.',vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.'},
     {zh:'我觉得他这并不是对你好，只是利用你。',py:'Wǒ juéde tā zhè bìng bú shì duì nǐ hǎo, zhǐ shì lìyòng nǐ.',vn:'Tôi thấy anh ta làm vậy không phải tốt với cậu đâu, chỉ là lợi dụng cậu thôi.'}
   ],
   colloFull:[
     {zh:'利用空闲时间',py:'lìyòng kòngxián shíjiān',vn:'tận dụng thời gian rảnh'},
     {zh:'利用工具',py:'lìyòng gōngjù',vn:'tận dụng công cụ'},
     {zh:'利用条件',py:'lìyòng tiáojiàn',vn:'tận dụng điều kiện'},
     {zh:'利用别人',py:'lìyòng biérén',vn:'lợi dụng người khác'}
   ],
   patterns:[
     {s:'利用 + thời gian + (来) + V', m:'Tận dụng thời gian nào để làm gì'},
     {s:'利用 + 工具 / 条件', m:'Tận dụng công cụ / điều kiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tận dụng kỳ nghỉ hè để đọc xong cuốn sách này.',answer:'我利用暑假把这本书看完了。',answerPy:'Wǒ lìyòng shǔjià bǎ zhè běn shū kànwán le.',
      note:'利用 + thời gian + 把……V完.',pair:'把……'},
     {promptLang:'vi',prompt:'Chỉ cần có thời gian rảnh, tôi sẽ tận dụng để luyện nghe.',answer:'只要有空闲时间，我就利用它练听力。',answerPy:'Zhǐyào yǒu kòngxián shíjiān, wǒ jiù lìyòng tā liàn tīnglì.',
      note:'利用 + 它 (thời gian) + V.',pair:'只要……就……'}
   ]},

  {n:28,zh:'空闲',py:'kòngxián',pos:'Tính từ',vn:'nhàn rỗi, rảnh rỗi',hv:'không nhàn',em:'☕',lesson:1,
   explain:['Rảnh, không có việc phải làm — hay đi với 时间.','Cũng dùng như danh từ: 一有空闲 (hễ có lúc rảnh). Chú ý 空 đọc kòng (rảnh), không đọc kōng.'],
   usage:'空闲时间; 空闲的时候; 有空闲; 利用空闲时间. Khẩu ngữ hay nói 有空 / 空儿.',
   collo:['空闲时间','空闲的时候','有空闲','利用空闲时间'],
   ex_zh:'空闲的时候，我喜欢看小说。',ex_py:'Kòngxián de shíhou, wǒ xǐhuan kàn xiǎoshuō.',ex_vn:'Lúc rảnh rỗi, tôi thích đọc tiểu thuyết.',
   exList:[
     {zh:'她和其他志愿者利用午休、周末等空闲时间给学生们指导和培训。',py:'Tā hé qítā zhìyuànzhě lìyòng wǔxiū, zhōumò děng kòngxián shíjiān gěi xuéshengmen zhǐdǎo hé péixùn.',vn:'Cô và các tình nguyện viên khác tận dụng giờ nghỉ trưa, cuối tuần và những lúc rảnh để hướng dẫn, bồi dưỡng cho học sinh.'},
     {zh:'刘老师，能不能请您利用空闲时间给我做一下辅导？',py:'Liú lǎoshī, néng bu néng qǐng nín lìyòng kòngxián shíjiān gěi wǒ zuò yíxià fǔdǎo?',vn:'Thầy Lưu ơi, thầy có thể tranh thủ thời gian rảnh kèm cho em một chút được không ạ?'},
     {zh:'空闲的时候，我喜欢看小说。',py:'Kòngxián de shíhou, wǒ xǐhuan kàn xiǎoshuō.',vn:'Lúc rảnh rỗi, tôi thích đọc tiểu thuyết.'}
   ],
   colloFull:[
     {zh:'空闲时间',py:'kòngxián shíjiān',vn:'thời gian rảnh'},
     {zh:'空闲的时候',py:'kòngxián de shíhou',vn:'lúc rảnh rỗi'},
     {zh:'有空闲',py:'yǒu kòngxián',vn:'có lúc rảnh'},
     {zh:'利用空闲时间',py:'lìyòng kòngxián shíjiān',vn:'tận dụng thời gian rảnh'}
   ],
   patterns:[
     {s:'利用 + 空闲时间 + V', m:'Tranh thủ thời gian rảnh làm gì'},
     {s:'空闲的时候 + ……', m:'Lúc rảnh thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dạo này bận quá, ngay cả một chút thời gian rảnh cũng không có.',answer:'最近太忙了，连一点儿空闲时间都没有。',answerPy:'Zuìjìn tài máng le, lián yìdiǎnr kòngxián shíjiān dōu méiyǒu.',
      note:'连 + 一点儿 + N + 都没有: nhấn mạnh "không có chút nào".',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bố hễ có lúc rảnh là đưa chúng tôi đi chơi.',answer:'爸爸一有空闲就带我们出去玩。',answerPy:'Bàba yì yǒu kòngxián jiù dài wǒmen chūqu wán.',
      note:'一有空闲 = hễ có lúc rảnh.',pair:'一……就……'}
   ]},

  {n:29,zh:'指导',py:'zhǐdǎo',pos:'Động từ',vn:'hướng dẫn, chỉ bảo',hv:'chỉ đạo',em:'🧑‍🏫',lesson:1,
   explain:['Chỉ dẫn, dạy bảo cách làm (thầy với trò, người có kinh nghiệm với người mới).','Cũng dùng như danh từ: 在老师的指导下 (dưới sự hướng dẫn của thầy).'],
   usage:'指导 + người; 给 + người + 指导; 在……的指导下; 指导老师. Chú ý: "chỉ đạo" tiếng Việt thiên về ra lệnh, còn 指导 chủ yếu là HƯỚNG DẪN.',
   collo:['指导学生','给学生指导','在老师的指导下','指导老师'],
   ex_zh:'刘老师经常利用空闲时间来指导我们。',ex_py:'Liú lǎoshī jīngcháng lìyòng kòngxián shíjiān lái zhǐdǎo wǒmen.',ex_vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.',
   exList:[
     {zh:'她和其他志愿者利用午休、周末等空闲时间给学生们指导和培训。',py:'Tā hé qítā zhìyuànzhě lìyòng wǔxiū, zhōumò děng kòngxián shíjiān gěi xuéshengmen zhǐdǎo hé péixùn.',vn:'Cô và các tình nguyện viên khác tận dụng giờ nghỉ trưa, cuối tuần và những lúc rảnh để hướng dẫn, bồi dưỡng cho học sinh.'},
     {zh:'刘老师经常利用空闲时间来指导我们。',py:'Liú lǎoshī jīngcháng lìyòng kòngxián shíjiān lái zhǐdǎo wǒmen.',vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.'},
     {zh:'在老师的指导下，我们完成了这个研究。',py:'Zài lǎoshī de zhǐdǎo xià, wǒmen wánchéngle zhège yánjiū.',vn:'Dưới sự hướng dẫn của thầy, chúng tôi đã hoàn thành công trình nghiên cứu này.'}
   ],
   colloFull:[
     {zh:'指导学生',py:'zhǐdǎo xuésheng',vn:'hướng dẫn học sinh'},
     {zh:'给学生指导',py:'gěi xuésheng zhǐdǎo',vn:'hướng dẫn cho học sinh'},
     {zh:'在老师的指导下',py:'zài lǎoshī de zhǐdǎo xià',vn:'dưới sự hướng dẫn của thầy cô'},
     {zh:'指导老师',py:'zhǐdǎo lǎoshī',vn:'giáo viên hướng dẫn'}
   ],
   patterns:[
     {s:'在 + người + 的指导下, ……', m:'Dưới sự hướng dẫn của ai, …'},
     {s:'给 + người + 指导', m:'Hướng dẫn cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dưới sự hướng dẫn của thầy, thành tích của tôi ngày càng tốt.',answer:'在老师的指导下，我的成绩越来越好了。',answerPy:'Zài lǎoshī de zhǐdǎo xià, wǒ de chéngjì yuè lái yuè hǎo le.',
      note:'在……的指导下 đứng đầu câu.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Bài luận này là cô Lưu hướng dẫn tôi viết.',answer:'这篇论文是刘老师指导我写的。',answerPy:'Zhè piān lùnwén shì Liú lǎoshī zhǐdǎo wǒ xiě de.',
      note:'是……的 nhấn mạnh NGƯỜI hướng dẫn.',pair:'是……的'}
   ]},

  {n:30,zh:'培训',py:'péixùn',pos:'Động từ',vn:'huấn luyện, đào tạo, bồi dưỡng',hv:'bồi huấn',em:'🎓',lesson:1,
   explain:['Đào tạo, bồi dưỡng kỹ năng chuyên môn cho một nhóm người (nhân viên, học viên).','Hay dùng như danh từ: 参加培训, 专业培训, 培训班.'],
   usage:'培训 + 员工 / 学生; 参加 + 培训; 专业培训; 培训班 (lớp bồi dưỡng). Khác 训练 (luyện tập thể lực, kỹ năng — vận động viên, bộ đội).',
   collo:['专业培训','参加培训','培训班','培训员工'],
   ex_zh:'他利用下班后的时间参加专业培训。',ex_py:'Tā lìyòng xiàbān hòu de shíjiān cānjiā zhuānyè péixùn.',ex_vn:'Anh ấy tận dụng thời gian sau giờ làm để tham gia khoá đào tạo chuyên môn.',
   exList:[
     {zh:'她和其他志愿者利用午休、周末等空闲时间给学生们指导和培训。',py:'Tā hé qítā zhìyuànzhě lìyòng wǔxiū, zhōumò děng kòngxián shíjiān gěi xuéshengmen zhǐdǎo hé péixùn.',vn:'Cô và các tình nguyện viên khác tận dụng giờ nghỉ trưa, cuối tuần và những lúc rảnh để hướng dẫn, bồi dưỡng cho học sinh.'},
     {zh:'他利用下班后的时间参加专业培训。',py:'Tā lìyòng xiàbān hòu de shíjiān cānjiā zhuānyè péixùn.',vn:'Anh ấy tận dụng thời gian sau giờ làm để tham gia khoá đào tạo chuyên môn.'},
     {zh:'暑假我参加了一个英语培训班。',py:'Shǔjià wǒ cānjiāle yí ge Yīngyǔ péixùnbān.',vn:'Kỳ nghỉ hè tôi tham gia một lớp bồi dưỡng tiếng Anh.'}
   ],
   colloFull:[
     {zh:'专业培训',py:'zhuānyè péixùn',vn:'đào tạo chuyên môn'},
     {zh:'参加培训',py:'cānjiā péixùn',vn:'tham gia khoá đào tạo'},
     {zh:'培训班',py:'péixùnbān',vn:'lớp bồi dưỡng'},
     {zh:'培训员工',py:'péixùn yuángōng',vn:'đào tạo nhân viên'}
   ],
   patterns:[
     {s:'参加 + (专业) + 培训', m:'Tham gia khoá đào tạo (chuyên môn)'},
     {s:'培训 + 员工 / 学生', m:'Đào tạo nhân viên / học sinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân viên mới vừa vào công ty là phải tham gia đào tạo.',answer:'新员工一进公司就要参加培训。',answerPy:'Xīn yuángōng yí jìn gōngsī jiù yào cānjiā péixùn.',
      note:'参加 + 培训.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Sau khi được đào tạo, anh ấy làm việc ngày càng thành thạo.',answer:'经过培训，他工作越来越熟练了。',answerPy:'Jīngguò péixùn, tā gōngzuò yuè lái yuè shúliàn le.',
      note:'经过 + 培训 = trải qua đào tạo.',pair:'越来越……'}
   ]},

  {n:31,zh:'建设',py:'jiànshè',pos:'Động từ',vn:'xây dựng, kiến thiết',hv:'kiến thiết',em:'🏗️',lesson:1,
   explain:['Xây dựng, phát triển những sự vật lớn, trừu tượng: đất nước, quê hương, thành phố, nền kinh tế.','Cũng làm danh từ: 经济建设, 城市建设 (bảng 搭配 của sách). Xây một ngôi nhà cụ thể thì dùng 盖 / 建.'],
   usage:'建设 + 国家 / 家乡 / 城市; 经济 / 城市 / 学科 + 建设. Không nói ✗ 建设一个房子 (→ 盖一座房子).',
   collo:['建设家乡','建设国家','经济建设','城市建设'],
   ex_zh:'毕业后我希望回去建设我的国家。',ex_py:'Bìyè hòu wǒ xīwàng huíqu jiànshè wǒ de guójiā.',ex_vn:'Tốt nghiệp xong tôi mong được về xây dựng đất nước mình.',
   exList:[
     {zh:'以前，我们总认为建设家乡是大人的事，用不着我们操心。',py:'Yǐqián, wǒmen zǒng rènwéi jiànshè jiāxiāng shì dàrén de shì, yòng bu zháo wǒmen cāoxīn.',vn:'Trước đây, chúng em luôn cho rằng xây dựng quê hương là việc của người lớn, không cần chúng em phải bận tâm.'},
     {zh:'毕业后我希望回去建设我的国家。',py:'Bìyè hòu wǒ xīwàng huíqu jiànshè wǒ de guójiā.',vn:'Tốt nghiệp xong tôi mong được về xây dựng đất nước mình.'},
     {zh:'这几年，这座城市的建设发展得很快。',py:'Zhè jǐ nián, zhè zuò chéngshì de jiànshè fāzhǎn de hěn kuài.',vn:'Mấy năm nay, việc xây dựng thành phố này phát triển rất nhanh.'}
   ],
   colloFull:[
     {zh:'建设家乡',py:'jiànshè jiāxiāng',vn:'xây dựng quê hương'},
     {zh:'建设国家',py:'jiànshè guójiā',vn:'xây dựng đất nước'},
     {zh:'经济建设',py:'jīngjì jiànshè',vn:'xây dựng kinh tế'},
     {zh:'城市建设',py:'chéngshì jiànshè',vn:'xây dựng đô thị'},
     {zh:'学科建设',py:'xuékē jiànshè',vn:'xây dựng ngành học'}
   ],
   patterns:[
     {s:'建设 + 国家 / 家乡 / 城市', m:'Xây dựng đất nước / quê hương / thành phố'},
     {s:'经济 / 城市 / 学科 + 建设', m:'Công cuộc xây dựng kinh tế / đô thị / ngành học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xây dựng quê hương không chỉ là việc của người lớn mà cũng là việc của chúng ta.',answer:'建设家乡不仅是大人的事，也是我们的事。',answerPy:'Jiànshè jiāxiāng bùjǐn shì dàrén de shì, yě shì wǒmen de shì.',
      note:'Cụm 建设家乡 làm chủ ngữ.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người cùng cố gắng, quê hương nhất định sẽ được xây dựng ngày càng đẹp.',answer:'只要大家一起努力，家乡就一定会建设得越来越美。',answerPy:'Zhǐyào dàjiā yìqǐ nǔlì, jiāxiāng jiù yídìng huì jiànshè de yuè lái yuè měi.',
      note:'建设 + 得 + bổ ngữ mức độ.',pair:'只要……就……'}
   ]},

  {n:32,zh:'操心',py:'cāo xīn',pos:'Động từ',vn:'bận tâm, lo nghĩ',hv:'thao tâm',em:'😟',lesson:1,
   explain:['Bỏ nhiều tâm sức lo lắng, suy nghĩ cho việc gì / ai.','Li hợp từ: 操了一辈子心, 操过心; không mang tân ngữ trực tiếp (✗ 操心我).'],
   usage:'为 / 替 + người / việc + 操心; 别操心; 瞎操心 (lo bò trắng răng); 用不着 + 操心. ✗ 操心孩子 → 为孩子操心.',
   collo:['为孩子操心','替人家操心','用不着操心','瞎操心'],
   ex_zh:'家家有本难念的经，你就别替人家操心了。',ex_py:'Jiājiā yǒu běn nán niàn de jīng, nǐ jiù bié tì rénjia cāoxīn le.',ex_vn:'Nhà nào cũng có chuyện khó nói của nhà ấy, cậu đừng lo chuyện nhà người ta nữa.',
   exList:[
     {zh:'以前，我们总认为建设家乡是大人的事，用不着我们操心。',py:'Yǐqián, wǒmen zǒng rènwéi jiànshè jiāxiāng shì dàrén de shì, yòng bu zháo wǒmen cāoxīn.',vn:'Trước đây, chúng em luôn cho rằng xây dựng quê hương là việc của người lớn, không cần chúng em phải bận tâm.'},
     {zh:'父母为我们操了一辈子心，现在该享福了。',py:'Fùmǔ wèi wǒmen cāole yíbèizi xīn, xiànzài gāi xiǎngfú le.',vn:'Bố mẹ đã lo cho chúng ta cả đời, bây giờ nên được hưởng phúc rồi.'},
     {zh:'家家有本难念的经，你就别替人家操心了。',py:'Jiājiā yǒu běn nán niàn de jīng, nǐ jiù bié tì rénjia cāoxīn le.',vn:'Nhà nào cũng có chuyện khó nói của nhà ấy, cậu đừng lo chuyện nhà người ta nữa.'}
   ],
   colloFull:[
     {zh:'为孩子操心',py:'wèi háizi cāoxīn',vn:'lo lắng cho con cái'},
     {zh:'替人家操心',py:'tì rénjia cāoxīn',vn:'lo chuyện của người ta'},
     {zh:'用不着操心',py:'yòng bu zháo cāoxīn',vn:'không cần phải bận tâm'},
     {zh:'瞎操心',py:'xiā cāoxīn',vn:'lo bò trắng răng'},
     {zh:'操了一辈子心',py:'cāole yíbèizi xīn',vn:'lo nghĩ cả một đời'}
   ],
   patterns:[
     {s:'为 / 替 + ai + 操心', m:'Lo lắng, bận tâm cho ai'},
     {s:'操 + 了 / 过 + (thời gian) + 心', m:'Li hợp từ: tách 操 và 心'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này tôi đã sắp xếp ổn cả rồi, cậu đừng lo bò trắng răng nữa!',answer:'我已经把这件事安排好了，你别瞎操心了！',answerPy:'Wǒ yǐjīng bǎ zhè jiàn shì ānpái hǎo le, nǐ bié xiā cāoxīn le!',
      note:'别瞎操心了 (bài tập 3 của sách).',pair:'把……'},
     {promptLang:'vi',prompt:'Mẹ chưa bao giờ phải bận tâm vì chuyện học của tôi.',answer:'妈妈从来没为我的学习操过心。',answerPy:'Māma cónglái méi wèi wǒ de xuéxí cāoguo xīn.',
      note:'Li hợp từ: 操过心, không nói 操心过.',pair:'从来没……过'}
   ]},

  {n:33,zh:'承担',py:'chéngdān',pos:'Động từ',vn:'gánh vác, đảm nhận, chịu',hv:'thừa đảm',em:'🏋️',lesson:1,
   explain:['Nhận lấy về mình trách nhiệm, công việc, chi phí.','Bảng 搭配 của sách: 承担 + 责任 / 费用 / 任务.'],
   usage:'承担 + 责任 / 费用 / 任务 / 义务; 由 + người + 承担; 主动承担. Không nói ✗ 承担作业 (→ 做作业).',
   collo:['承担责任','承担费用','承担任务','承担义务'],
   ex_zh:'这次活动的费用将由学校统一承担。',ex_py:'Zhè cì huódòng de fèiyong jiāng yóu xuéxiào tǒngyī chéngdān.',ex_vn:'Chi phí của hoạt động lần này sẽ do nhà trường chi trả chung.',
   exList:[
     {zh:'建设家乡，人人有责，我们也要承担这个义务。',py:'Jiànshè jiāxiāng, rénrén yǒu zé, wǒmen yě yào chéngdān zhège yìwù.',vn:'Xây dựng quê hương là trách nhiệm của mọi người, chúng em cũng phải gánh vác nghĩa vụ này.'},
     {zh:'我们应该勇敢面对困难，迅速采取行动，主动承担责任。',py:'Wǒmen yīnggāi yǒnggǎn miànduì kùnnan, xùnsù cǎiqǔ xíngdòng, zhǔdòng chéngdān zérèn.',vn:'Chúng ta nên dũng cảm đối mặt với khó khăn, nhanh chóng hành động, chủ động gánh vác trách nhiệm.'},
     {zh:'这次活动的费用将由学校统一承担。',py:'Zhè cì huódòng de fèiyong jiāng yóu xuéxiào tǒngyī chéngdān.',vn:'Chi phí của hoạt động lần này sẽ do nhà trường chi trả chung.'}
   ],
   colloFull:[
     {zh:'承担责任',py:'chéngdān zérèn',vn:'gánh vác trách nhiệm'},
     {zh:'承担费用',py:'chéngdān fèiyong',vn:'chịu chi phí'},
     {zh:'承担任务',py:'chéngdān rènwu',vn:'đảm nhận nhiệm vụ'},
     {zh:'承担义务',py:'chéngdān yìwù',vn:'gánh vác nghĩa vụ'}
   ],
   patterns:[
     {s:'承担 + 责任 / 费用 / 任务', m:'Gánh trách nhiệm / chịu chi phí / đảm nhận nhiệm vụ'},
     {s:'……由 + người + 承担', m:'… do ai đảm nhận / chi trả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này là do tôi làm sai, trách nhiệm để tôi gánh.',answer:'这件事是我做错的，责任由我来承担。',answerPy:'Zhè jiàn shì shì wǒ zuòcuò de, zérèn yóu wǒ lái chéngdān.',
      note:'由 + người + 来 + 承担.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy nhiệm vụ rất khó, nhưng anh ấy vẫn chủ động nhận lấy.',answer:'虽然任务很难，但是他还是主动承担了下来。',answerPy:'Suīrán rènwu hěn nán, dànshì tā háishi zhǔdòng chéngdānle xiàlai.',
      note:'承担 + 下来 = nhận lấy về mình.',pair:'虽然……但是……'}
   ]},

  {n:34,zh:'义务',py:'yìwù',pos:'Danh từ / Tính từ',vn:'nghĩa vụ; (làm) không lấy thù lao',hv:'nghĩa vụ',em:'📜',lesson:1,
   explain:['Danh từ: trách nhiệm phải làm về mặt pháp luật hoặc đạo đức — 承担义务, 权利和义务.','Tính từ: không nhận thù lao, làm không công — 义务劳动, 义务演出; 义务教育 = giáo dục bắt buộc (miễn phí).'],
   usage:'承担 / 尽 + 义务; ……是每个人的义务; 义务 + 劳动 / 演出 / 教育 (tính từ làm định ngữ, không cần 的).',
   collo:['承担义务','权利和义务','义务劳动','义务教育'],
   ex_zh:'建设家乡，人人有责，我们也要承担这个义务。',ex_py:'Jiànshè jiāxiāng, rénrén yǒu zé, wǒmen yě yào chéngdān zhège yìwù.',ex_vn:'Xây dựng quê hương là trách nhiệm của mọi người, chúng em cũng phải gánh vác nghĩa vụ này.',
   exList:[
     {zh:'不过，现在我们明白了，建设家乡，人人有责，我们也要承担这个义务。',py:'Búguò, xiànzài wǒmen míngbai le, jiànshè jiāxiāng, rénrén yǒu zé, wǒmen yě yào chéngdān zhège yìwù.',vn:'Nhưng bây giờ chúng em đã hiểu: xây dựng quê hương là trách nhiệm của mọi người, chúng em cũng phải gánh vác nghĩa vụ này.'},
     {zh:'参与社会事务和促进社会进步是每个人的权利，也是每个人的义务和责任。',py:'Cānyù shèhuì shìwù hé cùjìn shèhuì jìnbù shì měi ge rén de quánlì, yě shì měi ge rén de yìwù hé zérèn.',vn:'Tham gia công việc xã hội và thúc đẩy xã hội tiến bộ là quyền lợi, cũng là nghĩa vụ và trách nhiệm của mỗi người.'},
     {zh:'我们每个学期都要至少参加三次义务劳动。',py:'Wǒmen měi ge xuéqī dōu yào zhìshǎo cānjiā sān cì yìwù láodòng.',vn:'Mỗi học kỳ chúng tôi đều phải tham gia ít nhất ba lần lao động công ích.'}
   ],
   colloFull:[
     {zh:'承担义务',py:'chéngdān yìwù',vn:'gánh vác nghĩa vụ'},
     {zh:'权利和义务',py:'quánlì hé yìwù',vn:'quyền lợi và nghĩa vụ'},
     {zh:'义务劳动',py:'yìwù láodòng',vn:'lao động công ích (không công)'},
     {zh:'义务教育',py:'yìwù jiàoyù',vn:'giáo dục bắt buộc'},
     {zh:'义务演出',py:'yìwù yǎnchū',vn:'biểu diễn không lấy tiền'}
   ],
   patterns:[
     {s:'……是每个人的义务', m:'… là nghĩa vụ của mỗi người'},
     {s:'义务 + 劳动 / 演出 / 教育', m:'Tính từ: không lấy thù lao / bắt buộc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bảo vệ môi trường không chỉ là trách nhiệm của chính phủ mà cũng là nghĩa vụ của mỗi người.',answer:'保护环境不仅是政府的责任，也是每个人的义务。',answerPy:'Bǎohù huánjìng bùjǐn shì zhèngfǔ de zérèn, yě shì měi ge rén de yìwù.',
      note:'义务 là danh từ, làm tân ngữ của 是.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Các diễn viên hôm nay đều đến biểu diễn không lấy tiền.',answer:'今天的演员都是来义务演出的。',answerPy:'Jīntiān de yǎnyuán dōu shì lái yìwù yǎnchū de.',
      note:'义务 là tính từ: 义务演出 = biểu diễn không công.',pair:'是……的'}
   ]},

  {n:35,zh:'艰巨',py:'jiānjù',pos:'Tính từ',vn:'gian khổ, nặng nề',hv:'gian cự',em:'⛰️',lesson:1,
   explain:['(Nhiệm vụ, công việc) vừa khó khăn vừa nặng nề, đòi hỏi nhiều công sức.','Bảng 搭配 của sách: 艰巨(的) + 任务. Chỉ tả việc / nhiệm vụ, không tả điều kiện sống (→ 艰苦).'],
   usage:'艰巨的任务 / 工作; 任务很艰巨. Không nói ✗ 生活很艰巨 (→ 生活很艰苦).',
   collo:['艰巨的任务','任务很艰巨','艰巨的工作'],
   ex_zh:'这个任务很艰巨，我们要尽自己最大的力量。',ex_py:'Zhège rènwu hěn jiānjù, wǒmen yào jìn zìjǐ zuì dà de lìliang.',ex_vn:'Nhiệm vụ này rất nặng nề, chúng em phải dốc hết sức lực lớn nhất của mình.',
   exList:[
     {zh:'这个任务很艰巨，我们要尽自己最大的力量。',py:'Zhège rènwu hěn jiānjù, wǒmen yào jìn zìjǐ zuì dà de lìliang.',vn:'Nhiệm vụ này rất nặng nề, chúng em phải dốc hết sức lực lớn nhất của mình.'},
     {zh:'公司把这个艰巨的任务交给了他。',py:'Gōngsī bǎ zhège jiānjù de rènwu jiāo gěile tā.',vn:'Công ty đã giao nhiệm vụ gian nan này cho anh ấy.'},
     {zh:'保护环境是一项长期而艰巨的工作。',py:'Bǎohù huánjìng shì yí xiàng chángqī ér jiānjù de gōngzuò.',vn:'Bảo vệ môi trường là một công việc lâu dài và gian nan.'}
   ],
   colloFull:[
     {zh:'艰巨的任务',py:'jiānjù de rènwu',vn:'nhiệm vụ gian nan'},
     {zh:'任务很艰巨',py:'rènwu hěn jiānjù',vn:'nhiệm vụ rất nặng nề'},
     {zh:'艰巨的工作',py:'jiānjù de gōngzuò',vn:'công việc gian nan'}
   ],
   patterns:[
     {s:'艰巨 + 的 + 任务 / 工作', m:'Nhiệm vụ / công việc gian nan'},
     {s:'任务 + 很艰巨', m:'Nhiệm vụ rất nặng nề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiệm vụ tuy rất nặng nề, nhưng chúng tôi nhất định sẽ hoàn thành.',answer:'虽然任务很艰巨，但是我们一定能完成。',answerPy:'Suīrán rènwu hěn jiānjù, dànshì wǒmen yídìng néng wánchéng.',
      note:'任务 + 很艰巨.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nhiệm vụ gian nan này đã được chúng tôi hoàn thành.',answer:'这个艰巨的任务被我们完成了。',answerPy:'Zhège jiānjù de rènwu bèi wǒmen wánchéng le.',
      note:'艰巨的 làm định ngữ cho chủ ngữ bị động.',pair:'被……'}
   ]},

  {n:36,zh:'力量',py:'lìliang',pos:'Danh từ',vn:'sức mạnh, sức lực, lực lượng',hv:'lực lượng',em:'✊',lesson:1,
   explain:['Sức lực của cơ thể; năng lực, tác dụng (sức mạnh tinh thần, sức mạnh của tập thể).','Hay gặp: 尽最大的力量 (dốc hết sức), 巨大的力量. Chú ý 量 ở đây đọc nhẹ: lìliang.'],
   usage:'尽 + (自己) 最大的力量; 用 + 力量 + V; 巨大的力量; 集体的力量. "Lực lượng" tiếng Việt hay chỉ một tổ chức (lực lượng công an), còn 力量 chủ yếu là SỨC MẠNH, sức lực.',
   collo:['尽最大的力量','巨大的力量','用我的力量','集体的力量'],
   ex_zh:'这个任务很艰巨，我们要尽自己最大的力量。',ex_py:'Zhège rènwu hěn jiānjù, wǒmen yào jìn zìjǐ zuì dà de lìliang.',ex_vn:'Nhiệm vụ này rất nặng nề, chúng em phải dốc hết sức lực lớn nhất của mình.',
   exList:[
     {zh:'不管以后在哪儿，我都会继续用我的力量影响山里的孩子们。',py:'Bùguǎn yǐhòu zài nǎr, wǒ dōu huì jìxù yòng wǒ de lìliang yǐngxiǎng shān li de háizimen.',vn:'Dù sau này ở đâu, tôi cũng sẽ tiếp tục dùng sức mình để tác động đến những đứa trẻ vùng núi.'},
     {zh:'表面上弱小的人，很可能拥有你想象不到的巨大力量。',py:'Biǎomiàn shang ruòxiǎo de rén, hěn kěnéng yōngyǒu nǐ xiǎngxiàng bu dào de jùdà lìliang.',vn:'Người bề ngoài nhỏ bé yếu ớt rất có thể sở hữu sức mạnh to lớn mà cậu không tưởng tượng nổi.'},
     {zh:'我会尽最大的力量来帮助你。',py:'Wǒ huì jìn zuì dà de lìliang lái bāngzhù nǐ.',vn:'Tôi sẽ dốc hết sức để giúp cậu.'}
   ],
   colloFull:[
     {zh:'尽最大的力量',py:'jìn zuì dà de lìliang',vn:'dốc hết sức lực'},
     {zh:'巨大的力量',py:'jùdà de lìliang',vn:'sức mạnh to lớn'},
     {zh:'用我的力量',py:'yòng wǒ de lìliang',vn:'dùng sức của mình'},
     {zh:'集体的力量',py:'jítǐ de lìliang',vn:'sức mạnh tập thể'}
   ],
   patterns:[
     {s:'尽 + (自己) 最大的力量 + (来) V', m:'Dốc hết sức để làm gì'},
     {s:'用 + 力量 + V', m:'Dùng sức mình để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người đoàn kết lại, sức mạnh sẽ rất lớn.',answer:'只要大家团结起来，力量就会很大。',answerPy:'Zhǐyào dàjiā tuánjié qǐlai, lìliang jiù huì hěn dà.',
      note:'力量 + 很大.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi hễ nghĩ đến mẹ là lại có thêm sức mạnh.',answer:'我一想到妈妈，就有了力量。',answerPy:'Wǒ yì xiǎngdào māma, jiù yǒule lìliang.',
      note:'有了力量 = có thêm sức mạnh (tinh thần).',pair:'一……就……'}
   ]},

  {n:37,zh:'收获',py:'shōuhuò',pos:'Danh từ',vn:'thu hoạch; thành quả, điều thu được',hv:'thu hoạch',em:'🌾',lesson:1,
   explain:['Nghĩa gốc: thu hoạch mùa màng.','Nghĩa bóng (hay dùng hơn): thành quả, điều bổ ích thu được — bảng 搭配: 巨大 / 意外 / 学习上(的) + 收获.'],
   usage:'有收获; 收获很大; 巨大 / 意外的 + 收获; 收获 + 多于 / 大于 + 付出. Cũng làm động từ: 收获了很多.',
   collo:['收获很大','巨大的收获','意外的收获','学习上的收获'],
   ex_zh:'郝琳硕觉得自己的收获远多于给孩子们的。',ex_py:'Hǎo Línshuò juéde zìjǐ de shōuhuò yuǎn duō yú gěi háizimen de.',ex_vn:'Hách Lâm Thạc thấy điều mình nhận được còn nhiều hơn rất nhiều so với những gì cô đã cho bọn trẻ.',
   exList:[
     {zh:'郝琳硕觉得自己的收获远多于给孩子们的。',py:'Hǎo Línshuò juéde zìjǐ de shōuhuò yuǎn duō yú gěi háizimen de.',vn:'Hách Lâm Thạc thấy điều mình nhận được còn nhiều hơn rất nhiều so với những gì cô đã cho bọn trẻ.'},
     {zh:'条件虽然艰苦，但我觉得我的收获远远大于付出。',py:'Tiáojiàn suīrán jiānkǔ, dàn wǒ juéde wǒ de shōuhuò yuǎnyuǎn dà yú fùchū.',vn:'Điều kiện tuy gian khổ, nhưng tôi thấy điều mình nhận được lớn hơn nhiều so với những gì bỏ ra.'},
     {zh:'这次旅行让我有了很多意外的收获。',py:'Zhè cì lǚxíng ràng wǒ yǒule hěn duō yìwài de shōuhuò.',vn:'Chuyến đi này mang lại cho tôi nhiều điều thu được bất ngờ.'}
   ],
   colloFull:[
     {zh:'收获很大',py:'shōuhuò hěn dà',vn:'thu được rất nhiều'},
     {zh:'巨大的收获',py:'jùdà de shōuhuò',vn:'thành quả to lớn'},
     {zh:'意外的收获',py:'yìwài de shōuhuò',vn:'điều thu được bất ngờ'},
     {zh:'学习上的收获',py:'xuéxí shang de shōuhuò',vn:'thu hoạch trong học tập'}
   ],
   patterns:[
     {s:'收获 + 远多于 / 远远大于 + ……', m:'Điều thu được nhiều hơn hẳn …'},
     {s:'巨大 / 意外 / 学习上 + 的收获', m:'Thành quả to lớn / bất ngờ / trong học tập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lần này không giành được giải nhất, nhưng thu được rất nhiều.',answer:'虽然这次没拿到冠军，但是收获很大。',answerPy:'Suīrán zhè cì méi nádào guànjūn, dànshì shōuhuò hěn dà.',
      note:'收获 + 很大 (ôn 冠军 từ số 12).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Những điều tôi thu được trong học tập ngày càng nhiều.',answer:'我在学习上的收获越来越多了。',answerPy:'Wǒ zài xuéxí shang de shōuhuò yuè lái yuè duō le.',
      note:'学习上的收获 (bảng 搭配 của sách).',pair:'越来越……'}
   ]},

  {n:38,zh:'云南',py:'Yúnnán',pos:'Danh từ riêng',vn:'Vân Nam (một tỉnh của Trung Quốc)',hv:'Vân Nam',em:'🏔️',lesson:1,
   explain:['Tỉnh ở tây nam Trung Quốc, giáp Việt Nam, Lào, Myanmar; nhiều núi cao và dân tộc thiểu số.','Tỉnh lỵ: 昆明 (Côn Minh). Nổi tiếng với 丽江 (Lệ Giang), 大理 (Đại Lý).'],
   usage:'来 / 去 + 云南; 云南人; 云南省; 在云南 + V.',
   collo:['来云南','去云南','云南人','云南省'],
   ex_zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。',ex_py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le.',ex_vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần.',
   exList:[
     {zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。',py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le.',vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần.'},
     {zh:'云南在中国的西南部，和越南是邻居。',py:'Yúnnán zài Zhōngguó de xīnán bù, hé Yuènán shì línjū.',vn:'Vân Nam ở phía tây nam Trung Quốc, là láng giềng của Việt Nam.'},
     {zh:'我去过云南，那里的风景非常美。',py:'Wǒ qùguo Yúnnán, nàli de fēngjǐng fēicháng měi.',vn:'Tôi từng đến Vân Nam, phong cảnh ở đó rất đẹp.'}
   ],
   colloFull:[
     {zh:'来云南',py:'lái Yúnnán',vn:'đến Vân Nam'},
     {zh:'去云南',py:'qù Yúnnán',vn:'đi Vân Nam'},
     {zh:'云南人',py:'Yúnnán rén',vn:'người Vân Nam'},
     {zh:'云南省',py:'Yúnnán Shěng',vn:'tỉnh Vân Nam'}
   ],
   patterns:[
     {s:'来 / 去 + 云南 + V', m:'Đến / đi Vân Nam làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đến Vân Nam.',answer:'我从来没去过云南。',answerPy:'Wǒ cónglái méi qùguo Yúnnán.',
      note:'去过 + nơi chốn.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cô Hách đến Vân Nam là vào năm ngoái.',answer:'郝老师是去年来云南的。',answerPy:'Hǎo lǎoshī shì qùnián lái Yúnnán de.',
      note:'是……的 nhấn mạnh THỜI GIAN.',pair:'是……的'}
   ]},

  {n:39,zh:'郝琳硕',py:'Hǎo Línshuò',pos:'Danh từ riêng',vn:'Hách Lâm Thạc (tên người — cô giáo tình nguyện trong bài)',hv:'Hách Lâm Thạc',em:'👩‍🏫',lesson:1,
   explain:['Nhân vật chính của bài khoá: cô giáo tình nguyện đến Vân Nam dạy học hơn một năm.','Họ 郝 (Hǎo) là họ ít gặp; trong bài thường gọi 郝老师.'],
   usage:'郝琳硕老师 / 郝老师. Gọi giáo viên: họ + 老师.',
   collo:['郝琳硕老师','郝老师'],
   ex_zh:'郝琳硕觉得自己的收获远多于给孩子们的。',ex_py:'Hǎo Línshuò juéde zìjǐ de shōuhuò yuǎn duō yú gěi háizimen de.',ex_vn:'Hách Lâm Thạc thấy điều mình nhận được còn nhiều hơn rất nhiều so với những gì cô đã cho bọn trẻ.',
   exList:[
     {zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。',py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le.',vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần.'},
     {zh:'郝琳硕觉得自己的收获远多于给孩子们的。',py:'Hǎo Línshuò juéde zìjǐ de shōuhuò yuǎn duō yú gěi háizimen de.',vn:'Hách Lâm Thạc thấy điều mình nhận được còn nhiều hơn rất nhiều so với những gì cô đã cho bọn trẻ.'}
   ],
   colloFull:[
     {zh:'郝琳硕老师',py:'Hǎo Línshuò lǎoshī',vn:'cô giáo Hách Lâm Thạc'},
     {zh:'郝老师',py:'Hǎo lǎoshī',vn:'cô Hách'},
     {zh:'郝老师的学生',py:'Hǎo lǎoshī de xuésheng',vn:'học trò của cô Hách'}
   ],
   patterns:[
     {s:'Họ + 老师', m:'Cách gọi giáo viên: 郝老师'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô Hách vừa đến đã chú ý đến Phúc Căn.',answer:'郝老师一到，就注意到了福根。',answerPy:'Hǎo lǎoshī yí dào, jiù zhùyì dàole Fúgēn.',
      note:'Hai việc xảy ra liền nhau.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cô Hách không chỉ dạy học mà còn thường đến thăm nhà học sinh.',answer:'郝老师不仅教课，也常常去学生家家访。',answerPy:'Hǎo lǎoshī bùjǐn jiāokè, yě chángcháng qù xuésheng jiā jiāfǎng.',
      note:'Ôn 家访 (từ số 3).',pair:'不仅……也……'}
   ]},

  {n:40,zh:'赵福根',py:'Zhào Fúgēn',pos:'Danh từ riêng',vn:'Triệu Phúc Căn (tên người — cậu học trò trong bài)',hv:'Triệu Phúc Căn',em:'👦',lesson:1,
   explain:['Cậu học trò nhà nghèo trong bài: lúc đầu ít nói, học kém; nhờ cô Hách khuyến khích đi múa mà tự tin, học tiến bộ.','Trong bài cô giáo và các bạn gọi thân mật là 福根.'],
   usage:'赵福根 / 福根 (gọi thân, bỏ họ).',
   collo:['赵福根','福根的蝴蝶舞'],
   ex_zh:'刚到时，一位叫赵福根的男生引起了她的注意。',ex_py:'Gāng dào shí, yí wèi jiào Zhào Fúgēn de nánshēng yǐnqǐle tā de zhùyì.',ex_vn:'Lúc mới đến, một cậu học trò tên Triệu Phúc Căn đã thu hút sự chú ý của cô.',
   exList:[
     {zh:'刚到时，一位叫赵福根的男生引起了她的注意。',py:'Gāng dào shí, yí wèi jiào Zhào Fúgēn de nánshēng yǐnqǐle tā de zhùyì.',vn:'Lúc mới đến, một cậu học trò tên Triệu Phúc Căn đã thu hút sự chú ý của cô.'},
     {zh:'之后，赵福根学习用功了，成绩也逐渐进步。',py:'Zhīhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù.',vn:'Sau đó, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần dần tiến bộ.'}
   ],
   colloFull:[
     {zh:'赵福根',py:'Zhào Fúgēn',vn:'Triệu Phúc Căn'},
     {zh:'福根的蝴蝶舞',py:'Fúgēn de húdié wǔ',vn:'điệu múa con bướm của Phúc Căn'},
     {zh:'叫赵福根的男生',py:'jiào Zhào Fúgēn de nánshēng',vn:'cậu học trò tên Triệu Phúc Căn'}
   ],
   patterns:[
     {s:'一位叫 + tên + 的 + N', m:'Một … tên là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phúc Căn trước đây chưa bao giờ phát biểu trên lớp.',answer:'福根以前上课从来没发过言。',answerPy:'Fúgēn yǐqián shàngkè cónglái méi fāguo yán.',
      note:'Ôn li hợp từ 发言: 发过言.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Các bạn đều bị điệu múa của Phúc Căn làm cảm động.',answer:'同学们都被福根的舞蹈感动了。',answerPy:'Tóngxuémen dōu bèi Fúgēn de wǔdǎo gǎndòng le.',
      note:'都 đứng TRƯỚC 被.',pair:'被……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 24-1), 6 đoạn như sách (tr. 55–57)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 支教行动',
  preQuiz:[
    {q:'郝琳硕老师到云南做什么？',opts:['支教','旅游','打工'],ans:0},
    {q:'刚到时，赵福根有什么问题？',opts:['上课总是说话','上课从不发言，很多课不及格','常常和同学吵架'],ans:1},
    {q:'郝老师家访后知道了什么？',opts:['赵福根的父亲是老师','赵福根家里很有钱','赵福根的父亲去世了，家里很穷'],ans:2},
    {q:'郝老师是怎么知道福根喜欢跳舞的？',opts:['和他妈妈聊天才知道','看了他的作文才知道','听音乐老师说的'],ans:0},
    {q:'郝老师每周二带福根去做什么？',opts:['去医院看病','找音乐老师排练','去家访'],ans:1},
    {q:'艺术节上，福根的蝴蝶舞得了什么？',opts:['第二名','没得奖','舞蹈组的冠军'],ans:2},
    {q:'之后，赵福根有什么变化？',opts:['学习用功了，成绩逐渐进步','不愿意上学了','离开了学校'],ans:0},
    {q:'福根的作文得了什么成绩？',opts:['不及格','全班最高分','第二名'],ans:1},
    {q:'福根在作文里说，他开始有了什么？',opts:['很多钱','一个新家','勇气'],ans:2},
    {q:'山里的青壮年都怎么样了？',opts:['都出去闯世界了','都留守在家中','都当了老师'],ans:0},
    {q:'研究型学习活动的主题是什么？',opts:['我的梦想','让家乡的明天更美好','那天的舞蹈和掌声'],ans:1},
    {q:'郝老师和其他志愿者什么时候给学生指导和培训？',opts:['上课的时候','晚上睡觉前','午休、周末等空闲时间'],ans:2},
    {q:'学生们现在明白了什么？',opts:['建设家乡，人人有责','建设家乡是大人的事','上大学比建设家乡重要'],ans:0}
  ],
  lines:[
    {sp:0,zh:'来云南支教一年多，郝琳硕老师自己也记不清有多少次家访了。刚到时，一位叫赵福根的男生引起了她的注意。他上课从不发言，很多课不及格，平时也几乎不和同学交往。',
     py:'Lái Yúnnán zhījiào yì nián duō, Hǎo Línshuò lǎoshī zìjǐ yě jì bu qīng yǒu duōshao cì jiāfǎng le. Gāng dào shí, yí wèi jiào Zhào Fúgēn de nánshēng yǐnqǐle tā de zhùyì. Tā shàngkè cóng bù fāyán, hěn duō kè bù jígé, píngshí yě jīhū bù hé tóngxué jiāowǎng.',
     vn:'Đến Vân Nam dạy học tình nguyện đã hơn một năm, chính cô giáo Hách Lâm Thạc cũng không nhớ rõ mình đã đến thăm nhà học sinh bao nhiêu lần. Lúc mới đến, một cậu học trò tên Triệu Phúc Căn đã thu hút sự chú ý của cô. Cậu chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt, bình thường cũng hầu như không giao du với bạn bè.'},
    {sp:0,zh:'郝老师家访后得知，赵福根的父亲去世了，姐姐在外打工，他家里很穷，还得帮着妈妈做家务，是个体贴孝顺的孩子。“和他妈妈聊天才知道他很喜欢跳舞，”郝老师说，“我觉得这是个机会！”她鼓励福根在学校艺术节上表演，每周二带着他一起去找音乐老师排练。表演时，福根的蝴蝶舞得了舞蹈组的冠军，台下的同学们鼓起掌来，齐声地喊着“福根”的名字……',
     py:'Hǎo lǎoshī jiāfǎng hòu dézhī, Zhào Fúgēn de fùqin qùshì le, jiějie zài wài dǎgōng, tā jiāli hěn qióng, hái děi bāngzhe māma zuò jiāwù, shì ge tǐtiē xiàoshùn de háizi. “Hé tā māma liáotiān cái zhīdào tā hěn xǐhuan tiàowǔ,” Hǎo lǎoshī shuō, “wǒ juéde zhè shì ge jīhuì!” Tā gǔlì Fúgēn zài xuéxiào yìshùjié shang biǎoyǎn, měi zhōu\'èr dàizhe tā yìqǐ qù zhǎo yīnyuè lǎoshī páiliàn. Biǎoyǎn shí, Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn, tái xià de tóngxuémen gǔqǐ zhǎng lai, qíshēng de hǎnzhe “Fúgēn” de míngzi……',
     vn:'Sau khi đến thăm nhà, cô Hách mới biết bố của Triệu Phúc Căn đã mất, chị gái đi làm thuê xa nhà, nhà cậu rất nghèo, cậu còn phải giúp mẹ làm việc nhà — là một đứa trẻ biết quan tâm và hiếu thảo. “Nói chuyện với mẹ cậu bé tôi mới biết cậu rất thích múa,” cô Hách kể, “tôi thấy đây là một cơ hội!” Cô khuyến khích Phúc Căn biểu diễn trong liên hoan nghệ thuật của trường, thứ Ba hằng tuần đều dẫn cậu đi tìm thầy giáo âm nhạc để tập. Hôm biểu diễn, điệu múa con bướm của Phúc Căn đoạt giải nhất nhóm múa, các bạn dưới khán đài vỗ tay vang dội, đồng thanh hô tên “Phúc Căn”…'},
    {sp:0,zh:'之后，赵福根学习用功了，成绩也逐渐进步。他写了一篇题目为《那天的舞蹈和掌声》的作文，得了全班最高分，他朗读了自己的作文：“郝老师来到我家，那是第一次有老师来。她非常温柔……我永远都忘不了那热烈的掌声和同学们送我的糖，甜甜的。我感觉在学校也有人爱我了，我开始有勇气……”',
     py:'Zhīhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù. Tā xiěle yì piān tímù wéi 《Nà tiān de wǔdǎo hé zhǎngshēng》 de zuòwén, déle quán bān zuì gāo fēn, tā lǎngdúle zìjǐ de zuòwén: “Hǎo lǎoshī láidào wǒ jiā, nà shì dì-yī cì yǒu lǎoshī lái. Tā fēicháng wēnróu…… Wǒ yǒngyuǎn dōu wàng bu liǎo nà rèliè de zhǎngshēng hé tóngxuémen sòng wǒ de táng, tiántián de. Wǒ gǎnjué zài xuéxiào yě yǒu rén ài wǒ le, wǒ kāishǐ yǒu yǒngqì……”',
     vn:'Sau đó, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần dần tiến bộ. Cậu viết một bài văn với đầu đề “Điệu múa và tràng vỗ tay hôm ấy”, được điểm cao nhất lớp, và cậu đã đọc to bài văn của mình: “Cô Hách đến nhà em, đó là lần đầu tiên có thầy cô đến nhà. Cô rất dịu dàng… Em mãi mãi không quên được tràng vỗ tay nhiệt liệt ấy và những viên kẹo các bạn tặng em, ngọt ngào lắm. Em cảm thấy ở trường cũng có người thương em rồi, em bắt đầu có dũng khí…”'},
    {sp:0,zh:'郝老师发现，山里的青壮年都出去闯世界，只有老人、孩子留守，“他们出去了还回来吗？大山以后谁来负责”？于是，郝老师组织了一个8周的研究型学习活动，主题是“让家乡的明天更美好”。她鼓励学生寻找村子的问题，通过了解历史地理情况、采访村里的老人、小组讨论等，最终提出解决方案。她和其他志愿者利用午休、周末等空闲时间给学生们指导和培训。',
     py:'Hǎo lǎoshī fāxiàn, shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè, zhǐ yǒu lǎorén, háizi liúshǒu, “tāmen chūqu le hái huílai ma? Dàshān yǐhòu shéi lái fùzé”? Yúshì, Hǎo lǎoshī zǔzhīle yí ge bā zhōu de yánjiūxíng xuéxí huódòng, zhǔtí shì “ràng jiāxiāng de míngtiān gèng měihǎo”. Tā gǔlì xuésheng xúnzhǎo cūnzi de wèntí, tōngguò liǎojiě lìshǐ dìlǐ qíngkuàng, cǎifǎng cūn li de lǎorén, xiǎozǔ tǎolùn děng, zuìzhōng tíchū jiějué fāng\'àn. Tā hé qítā zhìyuànzhě lìyòng wǔxiū, zhōumò děng kòngxián shíjiān gěi xuéshengmen zhǐdǎo hé péixùn.',
     vn:'Cô Hách phát hiện, thanh niên trai tráng trong núi đều ra ngoài bôn ba, chỉ còn người già và trẻ em ở lại: “Họ đi rồi còn về không? Sau này ai sẽ lo cho vùng núi này?” Vì vậy, cô Hách tổ chức một hoạt động học tập kiểu nghiên cứu kéo dài 8 tuần, chủ đề là “Làm cho ngày mai của quê hương tươi đẹp hơn”. Cô khuyến khích học sinh tìm ra những vấn đề của làng, thông qua tìm hiểu tình hình lịch sử, địa lý, phỏng vấn người già trong làng, thảo luận nhóm…, cuối cùng đưa ra phương án giải quyết. Cô và các tình nguyện viên khác tận dụng giờ nghỉ trưa, cuối tuần và những lúc rảnh để hướng dẫn, bồi dưỡng cho học sinh.'},
    {sp:0,zh:'学生们说：“以前，我们总认为建设家乡是大人的事，用不着我们操心。不过，现在我们明白了，建设家乡，人人有责，我们也要承担这个义务。这个任务很艰巨，我们要尽自己最大的力量。”',
     py:'Xuéshengmen shuō: “Yǐqián, wǒmen zǒng rènwéi jiànshè jiāxiāng shì dàrén de shì, yòng bu zháo wǒmen cāoxīn. Búguò, xiànzài wǒmen míngbai le, jiànshè jiāxiāng, rénrén yǒu zé, wǒmen yě yào chéngdān zhège yìwù. Zhège rènwu hěn jiānjù, wǒmen yào jìn zìjǐ zuì dà de lìliang.”',
     vn:'Các em học sinh nói: “Trước đây, chúng em luôn cho rằng xây dựng quê hương là việc của người lớn, không cần chúng em phải bận tâm. Nhưng bây giờ chúng em đã hiểu: xây dựng quê hương là trách nhiệm của mọi người, chúng em cũng phải gánh vác nghĩa vụ này. Nhiệm vụ này rất nặng nề, chúng em phải dốc hết sức lực lớn nhất của mình.”'},
    {sp:0,zh:'郝琳硕觉得自己的收获远多于给孩子们的。“不管以后在哪儿，我都会继续用我的力量影响山里的孩子们，因为他们是国家的未来与希望。”',
     py:'Hǎo Línshuò juéde zìjǐ de shōuhuò yuǎn duō yú gěi háizimen de. “Bùguǎn yǐhòu zài nǎr, wǒ dōu huì jìxù yòng wǒ de lìliang yǐngxiǎng shān li de háizimen, yīnwèi tāmen shì guójiā de wèilái yǔ xīwàng.”',
     vn:'Hách Lâm Thạc thấy những gì mình nhận được còn nhiều hơn rất nhiều so với những gì cô đã cho bọn trẻ. “Dù sau này ở đâu, tôi cũng sẽ tiếp tục dùng sức mình để tác động đến những đứa trẻ vùng núi, vì các em là tương lai và hy vọng của đất nước.”'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 发言/发表 lấy từ sách (tr. 59–60)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'发言 — 发表',
   same:'Đều có thể làm động từ, đều liên quan đến việc BÀY TỎ Ý KIẾN.',
   sameEx:{zh:'在今天的会上，他第一个发言，发表了自己的看法。',vn:'Trong cuộc họp hôm nay, anh ấy phát biểu đầu tiên, nêu lên quan điểm của mình.'},
   items:[
     {word:'发言',points:[
       'Nói, phát biểu trong CUỘC HỌP hoặc TRÊN LỚP.',
       'Làm được DANH TỪ: 他的发言很精彩 (bài phát biểu).',
       'Là LI HỢP TỪ: chen thành phần vào giữa (发过言), phía sau KHÔNG mang tân ngữ (✗ 发言我的意见).'
     ],ex:[{zh:'他上课从不发言，很多课不及格。',vn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt.'},
          {zh:'他今天在会上的发言很精彩。',vn:'Bài phát biểu của anh ấy trong cuộc họp hôm nay rất hay.'}]},
     {word:'发表',points:[
       'Chính thức nêu ý kiến trước tập thể, xã hội; hoặc ĐĂNG bài trên báo, tạp chí.',
       'KHÔNG làm danh từ.',
       'KHÔNG phải li hợp từ, mang tân ngữ: 发表意见 / 讲话 / 文章 / 诗.'
     ],ex:[{zh:'总统发表了有关两国关系的讲话。',vn:'Tổng thống đã có bài phát biểu về quan hệ hai nước.'},
          {zh:'你发表过这篇文章吗？',vn:'Bạn đã từng đăng bài viết này chưa?'}]}
   ],
   quiz:[
     {sentence:'我准备公开＿＿我的意见。',options:['发言','发表'],answer:1,
      why:'Phía sau có tân ngữ 我的意见 → chỉ 发表 (câu mẫu của sách). 发言 là li hợp từ, không mang tân ngữ.'},
     {sentence:'明天上课该轮到我＿＿了。',options:['发言','发表'],answer:0,
      why:'Nói trên lớp, không có tân ngữ → 发言.'},
     {sentence:'总裁，这是明天会议的＿＿，请您过目。',options:['发言','发表'],answer:0,
      why:'Cần DANH TỪ (会议的……) → chỉ 发言. 发表 không làm danh từ.'},
     {sentence:'她年纪虽小，已经在杂志上＿＿过几首诗了。',options:['发言','发表'],answer:1,
      why:'Đăng thơ trên tạp chí → 发表; có tân ngữ 几首诗.'}
   ],
   sgk:{
     chung:{t:'都可以做动词，都与表达意见有关。',vn:'Đều có thể làm động từ, đều liên quan đến việc bày tỏ ý kiến.',vd:'在今天的会上，他第一个发言，发表了自己的看法。',vdVn:'Trong cuộc họp hôm nay, anh ấy phát biểu đầu tiên, nêu lên quan điểm của mình.'},
     khac:[
       {a:{t:'指在会议或课堂上说话。',vn:'Chỉ việc nói trong cuộc họp hoặc trên lớp học.',vd:'他上课从不发言，很多课不及格，平时也几乎不和同学交往。',vdVn:'Cậu ấy chưa bao giờ phát biểu trong giờ học, rất nhiều môn không đạt, bình thường cũng hầu như không giao du với bạn bè.'},
        b:{t:'指向集体、社会正式说出自己的意见或在报刊上刊登文章。',vn:'Chỉ việc chính thức nói ra ý kiến của mình trước tập thể, xã hội, hoặc đăng bài trên báo chí.',vd:'总统发表了有关两国关系的讲话。',vdVn:'Tổng thống đã có bài phát biểu về quan hệ hai nước.'}},
       {a:{t:'可以做名词，指所发表的意见。',vn:'Có thể làm danh từ, chỉ ý kiến đã phát biểu.',vd:'他今天在会上的发言很精彩。',vdVn:'Bài phát biểu của anh ấy trong cuộc họp hôm nay rất hay.'},
        b:{t:'不可以做名词。',vn:'Không thể làm danh từ.'}},
       {a:{t:'是离合词，中间可插入其他成分，后面不能再接宾语。',vn:'Là li hợp từ, giữa có thể chen thành phần khác, phía sau không thể mang tân ngữ nữa.',vd:'你已经发过言了吗？',vdVn:'Bạn đã phát biểu rồi à?'},
        b:{t:'不是离合词。',vn:'Không phải li hợp từ.',vd:'你发表过这篇文章吗？',vdVn:'Bạn đã từng đăng bài viết này chưa?'}}
     ],
     lamThu:[
       {s:'我准备公开＿＿我的意见。',dap:[false,true],mau:true,
        giai:'Có tân ngữ 我的意见 → chỉ 发表 (câu mẫu của sách).'},
       {s:'明天上课该轮到我＿＿了。',dap:[true,false],
        giai:'Phát biểu trên lớp, không có tân ngữ → 发言.'},
       {s:'总裁，这是明天会议的＿＿，请您过目。',dap:[true,false],
        giai:'Vị trí danh từ (会议的……) → chỉ 发言; 发表 không làm danh từ.'},
       {s:'她年纪虽小，已经在杂志上＿＿过几首诗了。',dap:[false,true],
        giai:'Đăng thơ trên tạp chí, có tân ngữ 几首诗 → 发表.'}
     ]
   }},

  {pair:'热烈 — 热情',
   same:'Đều là tính từ có chữ 热, đều chỉ sự hăng hái, nồng nhiệt; đều đi được với 欢迎.',
   sameEx:{zh:'同学们热烈／热情地欢迎新老师。',vn:'Các bạn nhiệt liệt / nhiệt tình chào đón thầy giáo mới.'},
   items:[
     {word:'热烈',points:[
       'Tả KHÔNG KHÍ, CẢNH TƯỢNG, hoạt động của nhiều người: 热烈的掌声, 讨论得很热烈, 气氛热烈.',
       'Không dùng tả tính cách một người.',
       'Hay đi với: 掌声, 欢迎, 讨论, 气氛, 祝贺.'
     ],ex:[{zh:'我永远都忘不了那热烈的掌声。',vn:'Em mãi mãi không quên được tràng vỗ tay nhiệt liệt ấy.'},
          {zh:'大家讨论得很热烈。',vn:'Mọi người thảo luận rất sôi nổi.'}]},
     {word:'热情',points:[
       'Tả TÍNH CÁCH, THÁI ĐỘ của một người đối với người khác: 性格热情, 对人很热情.',
       'Còn làm danh từ: 工作热情 (nhiệt huyết làm việc).',
       'Hay đi với: 性格, 态度, 服务, 招待.'
     ],ex:[{zh:'心理学家发现，性格热情的人的生活比其他人更丰富。',vn:'Các nhà tâm lý học phát hiện, người có tính cách nhiệt tình có cuộc sống phong phú hơn người khác.'},
          {zh:'这家饭馆的服务员对客人很热情。',vn:'Nhân viên nhà hàng này rất nhiệt tình với khách.'}]}
   ],
   quiz:[
     {sentence:'心理学家发现，性格＿＿的人的生活比其他人更丰富。',options:['热烈','热情'],answer:1,
      why:'Tả TÍNH CÁCH của người → 热情 (bài tập 2 của sách).'},
     {sentence:'演出结束后，观众报以＿＿的掌声。',options:['热烈','热情'],answer:0,
      why:'Tràng vỗ tay của nhiều người → 热烈的掌声.'},
     {sentence:'我们＿＿欢迎各位同学的到来！',options:['热烈','热情'],answer:0,both:true,
      why:'欢迎 đi được với cả hai; câu chào mừng trang trọng thường dùng 热烈欢迎.'},
     {sentence:'关于这个问题，大家讨论得非常＿＿。',options:['热烈','热情'],answer:0,
      why:'Không khí cuộc thảo luận của cả nhóm → 热烈.'}
   ]},

  {pair:'利用 — 使用',
   same:'Đều là động từ, đều có nghĩa "dùng" một thứ gì đó để đạt mục đích.',
   sameEx:{zh:'我们可以利用／使用这些工具来完成任务。',vn:'Chúng ta có thể tận dụng / sử dụng những công cụ này để hoàn thành nhiệm vụ.'},
   items:[
     {word:'利用',points:[
       'Nhấn mạnh TẬN DỤNG để phát huy tác dụng: 利用空闲时间, 利用条件.',
       'Có nghĩa xấu: LỢI DỤNG người khác vì mục đích riêng — 利用你.',
       'Tân ngữ hay là thời gian, cơ hội, điều kiện, con người.'
     ],ex:[{zh:'刘老师经常利用空闲时间来指导我们。',vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.'},
          {zh:'我觉得他这并不是对你好，只是利用你。',vn:'Tôi thấy anh ta làm vậy không phải tốt với cậu, chỉ là lợi dụng cậu thôi.'}]},
     {word:'使用',points:[
       'Nghĩa trung tính: SỬ DỤNG đồ vật, công cụ, ngôn ngữ theo đúng chức năng.',
       'Không có nghĩa xấu "lợi dụng", không nói 使用时间 để chỉ tận dụng thời gian.',
       'Tân ngữ hay là đồ vật, máy móc, tiền, ngôn ngữ: 使用电脑, 使用汉语.'
     ],ex:[{zh:'考试时不能使用手机。',vn:'Khi thi không được sử dụng điện thoại.'},
          {zh:'这台机器你会使用吗？',vn:'Cái máy này bạn biết sử dụng không?'}]}
   ],
   quiz:[
     {sentence:'我觉得他这并不是对你好，只是＿＿你。',options:['利用','使用'],answer:0,
      why:'Nghĩa xấu "lợi dụng người khác" → chỉ 利用 (bài tập 2 của sách).'},
     {sentence:'考试时不能＿＿手机。',options:['利用','使用'],answer:1,
      why:'Dùng đồ vật theo chức năng, nghĩa trung tính → 使用.'},
     {sentence:'他＿＿下班后的时间参加专业培训。',options:['利用','使用'],answer:0,
      why:'Tận dụng thời gian → 利用 (bài tập 3 của sách).'},
     {sentence:'我们可以＿＿这些工具来完成任务。',options:['利用','使用'],answer:1,both:true,
      why:'Công cụ: cả hai đều được — 使用 là dùng theo chức năng, 利用 nhấn mạnh tận dụng.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'行动',hv:'hành động',vn:'hành động; đi lại',note:'Trùng khít. Thêm nghĩa "đi lại": 行动不便 = đi lại bất tiện.'},
    {zh:'进步',hv:'tiến bộ',vn:'tiến bộ',note:'Trùng khít.'},
    {zh:'主题',hv:'chủ đề',vn:'chủ đề',note:'Trùng khít.'},
    {zh:'地理',hv:'địa lý',vn:'địa lý',note:'Trùng khít — cả tên môn học: 地理课.'},
    {zh:'义务',hv:'nghĩa vụ',vn:'nghĩa vụ',note:'Trùng khít. Thêm nghĩa tính từ: 义务劳动 = lao động không công.'},
    {zh:'收获',hv:'thu hoạch',vn:'thu hoạch; điều thu được',note:'Trùng khít, kể cả nghĩa bóng: 这次旅行收获很大.'},
    {zh:'冠军',hv:'quán quân',vn:'quán quân, giải nhất',note:'Trùng khít.'},
    {zh:'勇气',hv:'dũng khí',vn:'dũng khí',note:'Trùng khít.'},
    {zh:'热烈',hv:'nhiệt liệt',vn:'nhiệt liệt',note:'Trùng khít: 热烈欢迎 = nhiệt liệt chào mừng.'},
    {zh:'建设',hv:'kiến thiết',vn:'xây dựng, kiến thiết',note:'Tiếng Việt hay nói "xây dựng" hơn "kiến thiết", nhưng nghĩa như nhau.'},
    {zh:'舞蹈',hv:'vũ đạo',vn:'vũ đạo, múa',note:'Trùng khít: 舞蹈老师 = giáo viên vũ đạo.'},
    {zh:'蝴蝶',hv:'hồ điệp',vn:'con bướm',note:'Văn chương Việt cũng dùng "hồ điệp".'},
    {zh:'温柔',hv:'ôn nhu',vn:'dịu dàng',note:'"Ôn nhu" có trong văn chương; khẩu ngữ Việt nói "dịu dàng".'},
    {zh:'留守',hv:'lưu thủ',vn:'ở lại trông nom',note:'"Lưu thủ" = ở lại giữ. 留守儿童 = trẻ em ở lại quê.'}
  ],
  idiom:[
    {zh:'人人有责',hv:'nhân nhân hữu trách',vn:'ai ai cũng có trách nhiệm',note:'Trong bài: 建设家乡，人人有责.'},
    {zh:'家家有本难念的经',hv:'gia gia hữu bản nan niệm đích kinh',vn:'nhà nào cũng có chuyện khó nói',note:'Tục ngữ trong bài nghe số 6 của sách bài tập.'},
    {zh:'尽力而为',hv:'tận lực nhi vi',vn:'dốc hết sức mà làm',note:'Gần nghĩa với câu trong bài: 我们要尽自己最大的力量.'}
  ],
  trap:[
    {zh:'利用',hv:'lợi dụng',vn:'tận dụng; lợi dụng',
     warn:'BẪY: "lợi dụng" tiếng Việt gần như luôn mang nghĩa xấu, còn 利用 tiếng Trung phần lớn là nghĩa TỐT: 利用空闲时间 = tận dụng thời gian rảnh.'},
    {zh:'指导',hv:'chỉ đạo',vn:'hướng dẫn, chỉ bảo',
     warn:'"Chỉ đạo" tiếng Việt thiên về cấp trên ra lệnh. 指导 là HƯỚNG DẪN: 指导老师 = giáo viên hướng dẫn. "Chỉ đạo" (ra lệnh) tiếng Trung là 领导 / 指挥.'},
    {zh:'力量',hv:'lực lượng',vn:'sức mạnh, sức lực',
     warn:'"Lực lượng" tiếng Việt hay chỉ tổ chức (lực lượng công an). 力量 chủ yếu là SỨC MẠNH: 尽最大的力量 = dốc hết sức.'},
    {zh:'发言',hv:'phát ngôn',vn:'phát biểu',
     warn:'"Phát ngôn" tiếng Việt hay gắn với "người phát ngôn" (发言人). 发言 thường chỉ phát biểu trong cuộc họp, trên lớp.'},
    {zh:'用功',hv:'dụng công',vn:'chăm chỉ học',
     warn:'"Dụng công" không dùng trong tiếng Việt thường ngày. 用功 là tính từ = chăm chỉ (học hành).'},
    {zh:'空闲',hv:'không nhàn',vn:'rảnh rỗi',
     warn:'空 ở đây đọc kòng (rảnh), không phải kōng (trống rỗng). Nghĩa là RẢNH, không phải "không nhàn".'},
    {zh:'家访',hv:'gia phỏng',vn:'thăm nhà học sinh',
     warn:'Không phải "phỏng vấn gia đình". 家访 = giáo viên đến NHÀ học sinh để tìm hiểu, trao đổi với phụ huynh.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 58–59) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'采取',right:'行动'},
  {left:'承担',right:'责任'},
  {left:'鼓起',right:'勇气'},
  {left:'利用',right:'空闲时间'},
  {left:'建设',right:'家乡'},
  {left:'艰巨的',right:'任务'},
  {left:'热烈的',right:'掌声'},
  {left:'意外的',right:'收获'},
  {left:'做',right:'家务'},
  {left:'排练',right:'节目'},
  {left:'闯',right:'红灯'},
  {left:'留守',right:'儿童'},
  {left:'采访',right:'村里的老人'},
  {left:'参加',right:'专业培训'},
  {left:'义务',right:'劳动'},
  {left:'朗读',right:'课文'},
  {left:'性格',right:'温柔'},
  {left:'舞蹈组的',right:'冠军'},
  {left:'体贴',right:'孝顺'},
  {left:'历史',right:'地理'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'来',blank:'云南',post:'支教一年多，郝老师自己也记不清有多少次家访了。',hint:'(Vân Nam)',ans:'云南'},
  {pre:'大学毕业后，我姐姐去山区',blank:'支教',post:'了两年。',hint:'(dạy học tình nguyện)',ans:'支教'},
  {pre:'',blank:'郝琳硕',post:'老师在云南支教了一年多。',hint:'(Hách Lâm Thạc)',ans:'郝琳硕'},
  {pre:'刚到时，一位叫',blank:'赵福根',post:'的男生引起了她的注意。',hint:'(Triệu Phúc Căn)',ans:'赵福根'},
  {pre:'郝老师到云南参加支教',blank:'行动',post:'。',hint:'(hoạt động, hành động)',ans:'行动'},
  {pre:'爸爸，老师明天要来我们家做',blank:'家访',post:'。',hint:'(thăm nhà học sinh)',ans:'家访'},
  {pre:'他性格内向，上课从来不主动',blank:'发言',post:'。',hint:'(phát biểu)',ans:'发言'},
  {pre:'这次考试我只考了五十八分，没',blank:'及格',post:'。',hint:'(đạt yêu cầu)',ans:'及格'},
  {pre:'他平时几乎不和同学',blank:'交往',post:'，总是一个人待着。',hint:'(giao du)',ans:'交往'},
  {pre:'周末我常常帮妈妈做',blank:'家务',post:'。',hint:'(việc nhà)',ans:'家务'},
  {pre:'他对父母很',blank:'体贴',post:'，是个孝顺的孩子。',hint:'(chu đáo, ân cần)',ans:'体贴'},
  {pre:'为了元旦晚会，我们每天放学后都',blank:'排练',post:'节目。',hint:'(tập dượt)',ans:'排练'},
  {pre:'花园里有几只美丽的',blank:'蝴蝶',post:'飞来飞去。',hint:'(con bướm)',ans:'蝴蝶'},
  {pre:'她表演的',blank:'舞蹈',post:'得了第一名。',hint:'(điệu múa)',ans:'舞蹈'},
  {pre:'很可惜，银牌，差一点儿就能拿',blank:'冠军',post:'了。',hint:'(giải nhất)',ans:'冠军'},
  {pre:'演出结束后，观众都站起来热烈',blank:'鼓掌',post:'。',hint:'(vỗ tay)',ans:'鼓掌'},
  {pre:'他是班里最',blank:'用功',post:'的学生，每天都学到很晚。',hint:'(chăm chỉ)',ans:'用功'},
  {pre:'这学期你的汉语',blank:'进步',post:'很快。',hint:'(tiến bộ)',ans:'进步'},
  {pre:'这次作文的',blank:'题目',post:'是《我的家乡》。',hint:'(đầu đề)',ans:'题目'},
  {pre:'每天早上我都大声',blank:'朗读',post:'课文。',hint:'(đọc to)',ans:'朗读'},
  {pre:'妈妈的声音很',blank:'温柔',post:'，我一听就不害怕了。',hint:'(dịu dàng)',ans:'温柔'},
  {pre:'别怕困难，鼓起',blank:'勇气',post:'，你一定能成功！',hint:'(dũng khí)',ans:'勇气'},
  {pre:'很多农村的',blank:'青壮年',post:'都去城市打工了，村里只剩下老人和孩子。',hint:'(thanh niên trai tráng)',ans:'青壮年'},
  {pre:'男孩子，出去',blank:'闯',post:'世界也好。',hint:'(bôn ba)',ans:'闯'},
  {pre:'这所学校里有很多',blank:'留守',post:'儿童，他们的父母都在外地打工。',hint:'(ở lại quê)',ans:'留守'},
  {pre:'这次演讲比赛的',blank:'主题',post:'是“我的梦想”。',hint:'(chủ đề)',ans:'主题'},
  {pre:'我最喜欢上',blank:'地理',post:'课，可以了解世界各地的情况。',hint:'(địa lý)',ans:'地理'},
  {pre:'记者',blank:'采访',post:'完他以后，马上写了一篇新闻。',hint:'(phỏng vấn)',ans:'采访'},
  {pre:'',blank:'空闲',post:'的时候，我喜欢看小说。',hint:'(rảnh rỗi)',ans:'空闲'},
  {pre:'暑假我参加了一个英语',blank:'培训',post:'班。',hint:'(bồi dưỡng)',ans:'培训'},
  {pre:'毕业后我希望回去',blank:'建设',post:'我的国家。',hint:'(xây dựng)',ans:'建设'},
  {pre:'我们每个学期都要参加三次',blank:'义务',post:'劳动。',hint:'(không lấy thù lao)',ans:'义务'},
  {pre:'这个任务很',blank:'艰巨',post:'，我们要尽自己最大的力量。',hint:'(gian nan, nặng nề)',ans:'艰巨'},
  {pre:'这次旅行让我有了很多意外的',blank:'收获',post:'。',hint:'(điều thu được)',ans:'收获'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (行动 · 义务) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','应该','迅速','采取','行动','。'],ans:'我们应该迅速采取行动。',audio:'我们应该迅速采取行动。'},
  {words:['他','运动时','受伤了','，','行动','不便','。'],ans:'他运动时受伤了，行动不便。',audio:'他运动时受伤了，行动不便。'},
  {words:['做什么事','他','都','喜欢','提前','行动','。'],ans:'做什么事他都喜欢提前行动。',audio:'做什么事他都喜欢提前行动。'},
  {words:['促进','社会进步','是','每个人的','义务','。'],ans:'促进社会进步是每个人的义务。',audio:'促进社会进步是每个人的义务。'},
  {words:['我们','每个学期','都要','参加','三次','义务劳动','。'],ans:'我们每个学期都要参加三次义务劳动。',audio:'我们每个学期都要参加三次义务劳动。'},
  {words:['我们','也要','承担','这个','义务','。'],ans:'我们也要承担这个义务。',audio:'我们也要承担这个义务。'},
  {words:['刘老师','经常','利用','空闲时间','来','指导','我们','。'],ans:'刘老师经常利用空闲时间来指导我们。',audio:'刘老师经常利用空闲时间来指导我们。'},
  {words:['她丈夫','是个','既温柔','又体贴','的人','。'],ans:'她丈夫是个既温柔又体贴的人。',audio:'她丈夫是个既温柔又体贴的人。'},
  {words:['看了','她的舞蹈','，','大家','都','鼓起','掌','来','。'],ans:'看了她的舞蹈，大家都鼓起掌来。',audio:'看了她的舞蹈，大家都鼓起掌来。'},
  {words:['我们','要','尽','自己','最大的','力量','。'],ans:'我们要尽自己最大的力量。',audio:'我们要尽自己最大的力量。'},
  {words:['你','已经','发','过','言','了吗','？'],ans:'你已经发过言了吗？',audio:'你已经发过言了吗？'},
  {words:['郝老师','家访后','得知','，','赵福根的','父亲','去世了','。'],ans:'郝老师家访后得知，赵福根的父亲去世了。',audio:'郝老师家访后得知，赵福根的父亲去世了。'},
  {words:['这次活动的','费用','将','由学校','统一','承担','。'],ans:'这次活动的费用将由学校统一承担。',audio:'这次活动的费用将由学校统一承担。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我准备公开____我的意见。',opts:['发言','发表','采访','朗读'],ans:1,
   exp:'Phía sau có tân ngữ 我的意见 → 发表 (câu mẫu phần 词语辨析 của sách). 发言 là li hợp từ, không mang tân ngữ.'},
  {wrong:'明天上课该轮到我____了。',opts:['发表','鼓掌','发言','交往'],ans:2,
   exp:'Phát biểu trên lớp, không có tân ngữ → 发言. 发表 cần tân ngữ (意见, 文章).'},
  {wrong:'我永远都忘不了那____的掌声。',opts:['热情','温柔','艰巨','热烈'],ans:3,
   exp:'Tràng vỗ tay của nhiều người, tả không khí → 热烈的掌声. 热情 tả tính cách một người.'},
  {wrong:'心理学家发现，性格____的人的生活比其他人更丰富。',opts:['热烈','热情','艰巨','空闲'],ans:1,
   exp:'Tả tính cách → 热情 (bài tập 2 của sách). 热烈 tả không khí, cảnh tượng.'},
  {wrong:'我觉得他这并不是对你好，只是____你。',opts:['利用','用','使用','指导'],ans:0,
   exp:'Nghĩa "lợi dụng người khác" → 利用 (bài tập 2 của sách). 用 / 使用 không mang nghĩa này.'},
  {wrong:'刘老师经常利用空闲时间来____我们。',opts:['承担','指导','采访','建设'],ans:1,
   exp:'Thầy hướng dẫn trò → 指导 (câu 30 sách bài tập).'},
  {wrong:'家家有本难念的经，你就别替人家____了。',opts:['承担','体贴','操心','交往'],ans:2,
   exp:'替 + người + 操心 = lo chuyện của người khác (bài nghe số 6).'},
  {wrong:'这次活动的费用将由学校统一____。',opts:['承担','利用','操心','建设'],ans:0,
   exp:'承担 + 费用 = chịu chi phí (bảng 搭配 và bài tập 1 của sách).'},
  {wrong:'我会尽最大的____来帮助你。',opts:['勇气','收获','义务','力量'],ans:3,
   exp:'尽最大的力量 = dốc hết sức (bài tập 3 của sách).'},
  {wrong:'表面上弱小的人，很可能拥有你想象不到的巨大____。',opts:['精力','力量','勇气','主题'],ans:1,
   exp:'巨大的力量 = sức mạnh to lớn (bài tập 2 của sách). 精力 là tinh lực, sức làm việc — không đi với "người nhỏ bé mà mạnh".'},
  {wrong:'该准备的我们都已经准备了，你这么做完全是____的。',opts:['过分','艰巨','多余','空闲'],ans:2,
   exp:'Đã chuẩn bị đủ rồi → việc làm thêm là THỪA → 多余 (bài tập 2 của sách). 过分 là quá đáng.'},
  {wrong:'遇到问题，我们应该迅速采取____。',opts:['活动','行动','运动','动作'],ans:1,
   exp:'采取行动 là cụm cố định (có biện pháp hành động).'},
  {wrong:'他运动时受伤了，____不便。',opts:['行动','行为','动作','活动'],ans:0,
   exp:'行动不便 = đi lại bất tiện (注释 của sách).'},
  {wrong:'促进社会进步是每个人的____。',opts:['任务','主题','义务','题目'],ans:2,
   exp:'Trách nhiệm về đạo đức của mỗi người → 义务 (câu 29 sách bài tập).'},
  {wrong:'昨天开车时精力不集中，____了红灯。',opts:['过','闯','进','走'],ans:1,
   exp:'闯红灯 = vượt đèn đỏ (bài tập 1 của sách).'},
  {wrong:'这次活动的____是“让家乡的明天更美好”。',opts:['题目','地理','义务','主题'],ans:3,
   exp:'Tư tưởng chính của một hoạt động → 主题. 题目 là đầu đề bài văn, đề thi.'},
  {wrong:'山里生活条件很____，但他从来不抱怨。',opts:['艰苦','艰巨','热烈','温柔'],ans:0,
   exp:'Điều kiện sống khó khăn → 艰苦. 艰巨 chỉ tả nhiệm vụ, công việc (艰巨的任务).'},
  {wrong:'她丈夫是个既温柔又____的人。',opts:['热烈','艰巨','体贴','用功'],ans:2,
   exp:'既温柔又体贴 (câu 31 sách bài tập): tả tính cách quan tâm, chu đáo.'},
  {wrong:'大家都很羡慕他有个____体贴的妻子。',opts:['温柔','热烈','艰巨','空闲'],ans:0,
   exp:'温柔体贴 = dịu dàng chu đáo (bài tập 1 của sách).'},
  {wrong:'他写了一篇____为《那天的舞蹈和掌声》的作文。',opts:['主题','题目','话题','义务'],ans:1,
   exp:'Tên bài văn → 题目 (câu trong bài khoá).'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Từ khi lấy hết can đảm phát biểu trong giờ học, cậu ấy ngày càng tự tin hơn.', zh:'自从鼓起勇气在课上发言以后，他就变得越来越自信了。', py:'Zìcóng gǔqǐ yǒngqì zài kè shang fāyán yǐhòu, tā jiù biàn de yuè lái yuè zìxìn le.', goiY:['自从……以后，……就……','鼓起勇气','发言'], giai:'鼓起勇气 = lấy hết can đảm (động từ 鼓起 đi với 勇气); 发言 là động từ ly hợp, không mang tân ngữ: 在课上发言.'},
  {vi:'Tuy lần này tôi đã qua môn toán, nhưng tốc độ tiến bộ vẫn chậm hơn người khác.', zh:'虽然我这次数学及格了，但是进步的速度还是比别人慢。', py:'Suīrán wǒ zhè cì shùxué jígé le, dànshì jìnbù de sùdù háishi bǐ biérén màn.', goiY:['虽然……但是……','及格','进步'], giai:'及格 = đạt điểm qua, là động từ nội động: 数学及格了, không nói 及格数学; trong câu so sánh 比 không thêm 很 trước tính từ.'},
  {vi:'Bảo vệ môi trường là nghĩa vụ của mỗi người, vì vậy chúng ta nên bắt tay hành động từ những việc nhỏ quanh mình.', zh:'保护环境是每个人的义务，所以我们应该从身边的小事开始行动。', py:'Bǎohù huánjìng shì měi ge rén de yìwù, suǒyǐ wǒmen yīnggāi cóng shēnbiān de xiǎoshì kāishǐ xíngdòng.', goiY:['……是每个人的义务','开始行动','所以'], giai:'行动 làm động từ không mang tân ngữ — nói 开始行动; ……是每个人的义务 = là nghĩa vụ của mỗi người.'},
  {vi:'Bố mẹ tôi đều bận rộn, nên hễ có thời gian rảnh là tôi lại chủ động nhận làm một phần việc nhà, để bố mẹ đỡ mệt.', zh:'我爸妈工作都很忙，所以只要有空闲时间，我就会主动承担一些家务，免得他们太累。', py:'Wǒ bàmā gōngzuò dōu hěn máng, suǒyǐ zhǐyào yǒu kòngxián shíjiān, wǒ jiù huì zhǔdòng chéngdān yìxiē jiāwù, miǎnde tāmen tài lèi.', goiY:['只要……就……','承担……家务','免得'], giai:'免得 = để khỏi, kẻo (tránh kết quả không mong muốn), đứng đầu vế cuối; 承担 + trách nhiệm/công việc = gánh vác, đảm nhận.'},
  {vi:'Để biểu diễn múa trong liên hoan nghệ thuật, ngày nào chúng tôi cũng tận dụng giờ nghỉ trưa để tập, dù mệt đến mấy cũng không ai than phiền.', zh:'为了在艺术节上表演舞蹈，我们每天利用午休时间排练，哪怕再累也没有人抱怨。', py:'Wèile zài yìshùjié shang biǎoyǎn wǔdǎo, wǒmen měi tiān lìyòng wǔxiū shíjiān páiliàn, nǎpà zài lèi yě méiyǒu rén bàoyuàn.', goiY:['利用……时间','哪怕再……也……','排练'], giai:'利用 + thời gian/điều kiện = tận dụng; 哪怕再 + tính từ + 也…… = dù … đến mấy cũng….'},
  {vi:'Lớp trưởng không những tổ chức cả lớp quyên góp sách cho trẻ em có bố mẹ đi làm xa, mà còn tự tay viết thư động viên các em chăm chỉ học hành.', zh:'班长不但组织大家为留守儿童捐书，而且还亲自给他们写信，鼓励他们用功学习。', py:'Bānzhǎng búdàn zǔzhī dàjiā wèi liúshǒu értóng juān shū, érqiě hái qīnzì gěi tāmen xiěxìn, gǔlì tāmen yònggōng xuéxí.', goiY:['不但……而且……','留守儿童','用功'], giai:'留守儿童 = trẻ em có bố mẹ đi làm ăn xa, ở nhà với ông bà — dịch giải thích, không dịch "trẻ em lưu thủ"; 用功 = chăm chỉ (học), đứng trước 学习.'},
  {vi:'Đề tài của đợt phỏng vấn lần này là "Quê hương em", một mặt chúng tôi phải tìm hiểu lịch sử, địa lý của địa phương, mặt khác phải phỏng vấn các cụ già trong làng.', zh:'这次采访的题目是“我的家乡”，我们一方面要了解当地的历史地理，另一方面要采访村里的老人。', py:'Zhè cì cǎifǎng de tímù shì “Wǒ de jiāxiāng”, wǒmen yì fāngmiàn yào liǎojiě dāngdì de lìshǐ dìlǐ, lìng yì fāngmiàn yào cǎifǎng cūn li de lǎorén.', goiY:['一方面……另一方面……','采访','地理'], giai:'一方面……另一方面…… nối hai việc song song cùng cần làm; 题目 = đề bài, tiêu đề, khác 问题 (câu hỏi).'},
  {vi:'Khi gặp khó khăn, thay vì ngồi chờ người khác giúp, chi bằng nhanh chóng hành động, dù sao sức mạnh để giải quyết vấn đề rốt cuộc vẫn đến từ chính chúng ta.', zh:'遇到困难时，与其坐着等别人帮忙，不如迅速采取行动，毕竟解决问题的力量最终来自我们自己。', py:'Yùdào kùnnan shí, yǔqí zuòzhe děng biérén bāngmáng, bùrú xùnsù cǎiqǔ xíngdòng, bìjìng jiějué wèntí de lìliang zuìzhōng láizì wǒmen zìjǐ.', goiY:['与其……不如……','采取行动','毕竟'], giai:'采取行动 là cụm cố định (không nói 采用行动); 毕竟 = dù sao thì, suy cho cùng — nêu lý do then chốt ở vế cuối.'},
  {vi:'Hôm tham gia lao động công ích, tuy nhiệm vụ rất nặng nề nhưng ai cũng dốc hết sức mình, thầy giáo không kìm được mà vỗ tay nhiệt liệt cho chúng tôi.', zh:'参加义务劳动那天，虽然任务很艰巨，但大家都尽了自己最大的力量，老师忍不住为我们热烈地鼓起掌来。', py:'Cānjiā yìwù láodòng nà tiān, suīrán rènwu hěn jiānjù, dàn dàjiā dōu jìnle zìjǐ zuì dà de lìliang, lǎoshī rěn bu zhù wèi wǒmen rèliè de gǔqǐ zhǎng lái.', goiY:['义务劳动','虽然……但……','鼓起掌来'], giai:'义务劳动 = lao động công ích, không lấy tiền (义务 làm định ngữ); 鼓掌 là động từ ly hợp nên tách được: 鼓起掌来 = bắt đầu vỗ tay.'},
  {vi:'Nhiều người tưởng dạy tình nguyện chỉ là lên vùng núi dạy vài tiết, thực ra giáo viên tình nguyện không chỉ phải hướng dẫn học sinh mà còn thường xuyên đến thăm nhà các em, trách nhiệm lớn hơn tưởng tượng nhiều.', zh:'很多人以为支教只是去山区上几节课，其实支教老师不仅要指导学生，还要经常家访，责任比想象的大得多。', py:'Hěn duō rén yǐwéi zhījiào zhǐshì qù shānqū shàng jǐ jié kè, qíshí zhījiào lǎoshī bùjǐn yào zhǐdǎo xuésheng, hái yào jīngcháng jiāfǎng, zérèn bǐ xiǎngxiàng de dà de duō.', goiY:['以为……，其实……','不仅……还……','家访'], giai:'以为 = tưởng (sai), vế sau 其实 đính chính sự thật; 比 + N + tính từ + 得多 = … hơn nhiều, không dùng 很 trong câu so sánh 比.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Triệu Phúc Căn không những trong giờ học chưa bao giờ phát biểu, mà ngày thường cũng hầu như không chơi với bạn bè.', zh:'赵福根不但上课从不发言，而且平时几乎不和同学交往。', py:'Zhào Fúgēn búdàn shàngkè cóng bù fāyán, érqiě píngshí jīhū bù hé tóngxué jiāowǎng.', goiY:['不但……而且…… = không những… mà còn…','发言 = phát biểu','交往 = giao tiếp, qua lại'], giai:'从不 + V = chưa bao giờ (thói quen); 和……交往 = qua lại, kết giao với ai — dịch "chơi với, giao lưu với" cho tự nhiên.'},
  {vi:'Sau khi đến thăm nhà, cô Hác mới biết hoá ra ngày nào Phúc Căn cũng phải giúp mẹ làm việc nhà.', zh:'郝老师家访后才知道，原来福根每天都得帮着妈妈做家务。', py:'Hǎo lǎoshī jiāfǎng hòu cái zhīdào, yuánlái Fúgēn měi tiān dōu děi bāngzhe māma zuò jiāwù.', goiY:['原来 = hoá ra','家访 = thăm nhà học sinh','家务 = việc nhà'], giai:'……后才知道 = sau khi… mới biết; 原来 ở đây là "hoá ra" (phát hiện sự thật), không phải "vốn dĩ".'},
  {vi:'Cô Hác động viên Phúc Căn biểu diễn múa trong liên hoan nghệ thuật, thế là thứ Ba hằng tuần cô đều đưa cậu đi tìm thầy dạy nhạc để tập.', zh:'郝老师鼓励福根在艺术节上表演舞蹈，于是每周二都带着他去找音乐老师排练。', py:'Hǎo lǎoshī gǔlì Fúgēn zài yìshùjié shang biǎoyǎn wǔdǎo, yúshì měi zhōu\'èr dōu dàizhe tā qù zhǎo yīnyuè lǎoshī páiliàn.', goiY:['于是 = thế là','排练 = tập dượt','舞蹈 = múa'], giai:'于是 nối hành động tiếp theo nảy sinh từ việc trước — "thế là, bèn"; 带着 + người + 去 + V = dẫn ai đi làm gì.'},
  {vi:'Điệu múa con bướm của Phúc Căn giành giải nhất nhóm múa, các bạn bên dưới không chỉ vỗ tay nhiệt liệt mà còn đồng thanh gọi tên cậu.', zh:'福根的蝴蝶舞得了舞蹈组的冠军，台下的同学们不仅热烈地鼓起掌来，还齐声喊着他的名字。', py:'Fúgēn de húdié wǔ déle wǔdǎo zǔ de guànjūn, tái xià de tóngxuémen bùjǐn rèliè de gǔqǐ zhǎng lái, hái qíshēng hǎnzhe tā de míngzi.', goiY:['不仅……还…… = không chỉ… mà còn…','冠军 = quán quân, giải nhất','热烈 = nhiệt liệt'], giai:'鼓起掌来 = bắt đầu vỗ tay (鼓掌 tách ra, 起来 chỉ hành động bắt đầu); 齐声 = đồng thanh.'},
  {vi:'Từ đó về sau, Triệu Phúc Căn học hành chăm chỉ hơn, thành tích cũng dần tiến bộ, bài văn của cậu thậm chí còn được điểm cao nhất lớp.', zh:'从那以后，赵福根学习用功了，成绩也逐渐进步，他的作文甚至得了全班最高分。', py:'Cóng nà yǐhòu, Zhào Fúgēn xuéxí yònggōng le, chéngjì yě zhújiàn jìnbù, tā de zuòwén shènzhì déle quán bān zuì gāo fēn.', goiY:['从那以后 = từ đó về sau','逐渐 = dần dần','甚至 = thậm chí'], giai:'用功了 — 了 cuối câu chỉ sự thay đổi trạng thái ("đã chăm chỉ hơn"); 甚至 nêu kết quả vượt mong đợi.'},
  {vi:'Trong bài văn cậu đọc to trước lớp có viết: cô Hác rất dịu dàng, tràng pháo tay nhiệt liệt ấy khiến cậu thấy ở trường cũng có người yêu thương mình, nhờ đó cậu bắt đầu có can đảm.', zh:'他朗读的作文里写道：郝老师非常温柔，那热烈的掌声让他觉得在学校也有人爱他，从而开始有了勇气。', py:'Tā lǎngdú de zuòwén li xiědào: Hǎo lǎoshī fēicháng wēnróu, nà rèliè de zhǎngshēng ràng tā juéde zài xuéxiào yě yǒu rén ài tā, cóng\'ér kāishǐ yǒule yǒngqì.', goiY:['朗读 = đọc to','温柔 = dịu dàng','从而 = nhờ đó, từ đó'], giai:'从而 nối kết quả nảy sinh từ việc trước — "nhờ đó, từ đó"; 让 + người + 觉得 = khiến ai cảm thấy.'},
  {vi:'Cô Hác nhận thấy thanh niên trai tráng trong núi đều ra ngoài lập nghiệp, chỉ có người già và trẻ nhỏ ở lại, vì thế cô lo rằng sau này sẽ không còn ai xây dựng vùng núi.', zh:'郝老师发现山里的青壮年都出去闯世界了，只有老人和孩子留守，因此她担心大山以后没人建设。', py:'Hǎo lǎoshī fāxiàn shān li de qīng-zhuàngnián dōu chūqu chuǎng shìjiè le, zhǐyǒu lǎorén hé háizi liúshǒu, yīncǐ tā dānxīn dàshān yǐhòu méi rén jiànshè.', goiY:['闯世界 = ra ngoài lập nghiệp','只有 = chỉ có','因此 = vì thế'], giai:'闯世界 = xông pha, ra ngoài bôn ba lập nghiệp — không dịch "xông vào thế giới"; 留守 = ở lại giữ nhà.'},
  {vi:'Thế là cô Hác tổ chức một hoạt động học tập với chủ đề "Làm cho ngày mai của quê hương tốt đẹp hơn", và khuyến khích học sinh tìm ra vấn đề của làng qua việc phỏng vấn người già.', zh:'于是郝老师组织了一次学习活动，主题是“让家乡的明天更美好”，并鼓励学生通过采访老人寻找村子的问题。', py:'Yúshì Hǎo lǎoshī zǔzhīle yí cì xuéxí huódòng, zhǔtí shì “ràng jiāxiāng de míngtiān gèng měihǎo”, bìng gǔlì xuésheng tōngguò cǎifǎng lǎorén xúnzhǎo cūnzi de wèntí.', goiY:['于是 = thế là','主题 = chủ đề','通过……寻找…… = thông qua… để tìm…'], giai:'通过 + cách thức + V = thông qua … để làm gì — khi dịch nên đảo cách thức ra sau: "tìm ra … qua việc phỏng vấn…"; 并 = đồng thời, và.'},
  {vi:'Sở dĩ học sinh có thể đưa ra phương án giải quyết là vì cô Hác và các tình nguyện viên khác đã tận dụng thời gian rảnh để hướng dẫn và bồi dưỡng các em.', zh:'学生们之所以能提出解决方案，是因为郝老师和其他志愿者利用空闲时间给他们指导和培训。', py:'Xuéshengmen zhīsuǒyǐ néng tíchū jiějué fāng\'àn, shì yīnwèi Hǎo lǎoshī hé qítā zhìyuànzhě lìyòng kòngxián shíjiān gěi tāmen zhǐdǎo hé péixùn.', goiY:['之所以……是因为…… = sở dĩ… là vì…','利用空闲时间 = tận dụng thời gian rảnh','指导 = hướng dẫn'], giai:'之所以 đứng sau chủ ngữ (学生们之所以……), 是因为 mở phần nguyên nhân; 给 + người + 指导 = hướng dẫn cho ai.'},
  {vi:'Trước kia học sinh luôn nghĩ xây dựng quê hương là việc của người lớn, mình chẳng cần bận tâm, nhưng bây giờ các em mới hiểu ai cũng có trách nhiệm gánh vác nghĩa vụ này.', zh:'学生们以前总认为建设家乡是大人的事，用不着自己操心，可是现在才明白人人都有责任承担这个义务。', py:'Xuéshengmen yǐqián zǒng rènwéi jiànshè jiāxiāng shì dàrén de shì, yòngbuzháo zìjǐ cāoxīn, kěshì xiànzài cái míngbai rénrén dōu yǒu zérèn chéngdān zhège yìwù.', goiY:['用不着 = không cần','操心 = bận tâm, lo lắng','承担……义务 = gánh vác nghĩa vụ'], giai:'以前总认为……，可是现在才明白…… đối lập nhận thức cũ và mới; 用不着 = chẳng cần phải (khẩu ngữ).'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 大山的未来谁负责)
// ══════════════════════════════════════════
var writingData = {
  words:['支教','利用','承担','收获','力量'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về hoạt động dạy học tình nguyện (支教) và trách nhiệm của người trẻ với vùng núi.',
  outline:[
    'Câu mở: nêu quan điểm — em thấy 支教 có ý nghĩa.',
    'Thân 1: thực trạng vùng núi (青壮年 đi làm xa, trẻ em thiếu thầy) và việc sinh viên có thể làm (dùng 利用, 支教).',
    'Thân 2: trách nhiệm của người trẻ; người đi dạy cũng nhận lại nhiều (dùng 承担, 收获, 虽然……但是……).',
    'Kết: lời kêu gọi mỗi người góp một phần sức (dùng 力量, 只要……就……).'
  ],
  model:{
    zh:'我觉得支教很有意义。山里的青壮年都出去打工了，孩子们缺少好老师。大学生可以利用假期去山区支教。建设家乡，人人有责，年轻人也应该承担一部分责任。虽然条件艰苦，但是支教老师的收获往往比付出更多。只要每个人都出一份力量，大山的未来就会更美好。',
    py:'Wǒ juéde zhījiào hěn yǒu yìyì. Shān li de qīng-zhuàngnián dōu chūqu dǎgōng le, háizimen quēshǎo hǎo lǎoshī. Dàxuéshēng kěyǐ lìyòng jiàqī qù shānqū zhījiào. Jiànshè jiāxiāng, rénrén yǒu zé, niánqīngrén yě yīnggāi chéngdān yí bùfen zérèn. Suīrán tiáojiàn jiānkǔ, dànshì zhījiào lǎoshī de shōuhuò wǎngwǎng bǐ fùchū gèng duō. Zhǐyào měi ge rén dōu chū yí fèn lìliang, dàshān de wèilái jiù huì gèng měihǎo.',
    vn:'Tôi thấy dạy học tình nguyện rất có ý nghĩa. Thanh niên trai tráng trong núi đều đi làm ăn xa, trẻ em thiếu thầy cô giỏi. Sinh viên có thể tận dụng kỳ nghỉ để lên miền núi dạy học tình nguyện. Xây dựng quê hương là trách nhiệm của mọi người, người trẻ cũng nên gánh vác một phần trách nhiệm. Tuy điều kiện gian khổ, nhưng những gì giáo viên tình nguyện nhận lại thường còn nhiều hơn những gì họ bỏ ra. Chỉ cần mỗi người góp một phần sức, tương lai của vùng núi sẽ tươi đẹp hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '支教 có đi theo mẫu 去 / 来 + nơi chốn + 支教 không (không viết 支教孩子们)?',
    '承担 có đi với 责任 / 义务 / 费用 / 任务 không?',
    'Câu có 只要 đã có 就 ở vế sau chưa? Câu có 虽然 đã có 但是 chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你对支教的看法。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'支教', loai:'động từ', cach:'去 / 来 + nơi chốn + 支教 · 支教 + thời gian · 支教老师 / 支教生活',
     sai:[{re:'支教(孩子|学生|他们|小朋友)', sua:'给孩子们上课 / 去山区支教', giai:'支教 không mang tân ngữ chỉ người. Muốn nói "dạy bọn trẻ" dùng 给孩子们上课 / 教孩子们.'},
          {re:'(去|来|到)支教(山区|农村|山里|云南)', sua:'去山区支教', giai:'Nơi chốn đặt TRƯỚC 支教: 去 + 山区 + 支教.'}]},
    {tu:'利用', loai:'động từ', cach:'利用 + thời gian / điều kiện / cơ hội + (来) V',
     sai:[{re:'使用(空闲|假期|周末|业余|课余)(时间)?', sua:'利用空闲时间 / 利用假期', giai:'"Tận dụng thời gian" dùng 利用, không dùng 使用 (使用 dùng cho đồ vật, công cụ).'}]},
    {tu:'承担', loai:'động từ', cach:'承担 + 责任 / 义务 / 费用 / 任务',
     sai:[{re:'承担(了)?(错误|问题)', sua:'承认错误 / 承担责任', giai:'"Nhận lỗi" là 承认错误. 承担 đi với 责任 / 义务 / 费用 / 任务.'},
          {re:'负担(一部分)?责任', sua:'承担责任', giai:'Cụm cố định là 承担责任; 负担 chủ yếu là danh từ "gánh nặng" (经济负担).', nhe:true}]},
    {tu:'收获', loai:'danh từ', cach:'收获很大 · 有很多收获 · 意外的收获 · 收获 + 比……多',
     sai:[{re:'(很|非常|十分|特别)收获', sua:'收获很大 / 很有收获', giai:'收获 là danh từ, không đứng ngay sau 很. Nói 收获很大 hoặc 很有收获.'}]},
    {tu:'力量', loai:'danh từ', cach:'尽最大的力量 · 出一份力量 · 用……的力量 · 力量很大',
     sai:[{re:'力量(很|非常)?(多|少)', sua:'力量很大 / 力量很小', giai:'力量 đo bằng 大 / 小, không dùng 多 / 少.'},
          {re:'(很|非常)力量', sua:'很有力量', giai:'力量 là danh từ, cần 有: 很有力量.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'采取行动 / 行动 + 起来', nhan:'行动', vd:'看到山里孩子的情况，我们应该马上行动起来。', khi:'Kêu gọi hành động — phần kết.'},
    {ten:'……是每个人的义务', nhan:'义务', vd:'帮助山里的孩子是每个人的义务。', khi:'Nêu trách nhiệm chung — thân đoạn.'},
    {ten:'利用 + thời gian + (来) V', nhan:'利用', vd:'大学生可以利用假期来山区支教。', khi:'Đưa ra đề xuất cụ thể.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然条件艰苦，但是收获很大。', khi:'Nêu khó khăn rồi lật lại — thân đoạn.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要每个人都出一份力量，大山的未来就会更美好。', khi:'Câu KẾT — điều kiện đủ.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'支教不仅能帮助孩子们，也能让自己成长。', khi:'Nêu hai lợi ích cùng lúc.'},
    {ten:'越来越……', nhan:'越来越', vd:'去山区支教的年轻人越来越多了。', khi:'Mô tả xu hướng — câu mở.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['是每个人的','促进','义务','社会进步'],
     dap:'促进社会进步是每个人的义务。',
     vn:'Thúc đẩy xã hội tiến bộ là nghĩa vụ của mỗi người.',
     giai:'Câu 29 sách bài tập. Cụm động từ 促进社会进步 làm chủ ngữ → 是 → 每个人的义务.'},
    {manh:['利用','刘老师经常','来指导我们','空闲时间'],
     dap:'刘老师经常利用空闲时间来指导我们。',
     vn:'Thầy Lưu thường tận dụng thời gian rảnh để hướng dẫn chúng tôi.',
     giai:'Câu 30 sách bài tập. Chủ ngữ + 经常 → 利用 + thời gian → 来 + V (mục đích).'},
    {manh:['既温柔','是个','她丈夫','又体贴的人'],
     dap:'她丈夫是个既温柔又体贴的人。',
     vn:'Chồng cô ấy là người vừa dịu dàng vừa chu đáo.',
     giai:'Câu 31 sách bài tập. 是个 + 既……又…… + 的人.'},
    {manh:['主动','责任','承担','我们应该'],
     dap:'我们应该主动承担责任。',
     vn:'Chúng ta nên chủ động gánh vác trách nhiệm.',
     giai:'Động từ năng nguyện 应该 → trạng ngữ 主动 → 承担 + 责任.'},
    {manh:['被','这个艰巨的任务','完成了','我们'],
     dap:'这个艰巨的任务被我们完成了。',
     vn:'Nhiệm vụ gian nan này đã được chúng tôi hoàn thành.',
     giai:'Câu 被 (ôn HSK 3–4): đối tượng + 被 + người làm + động từ + 了.'},
    {manh:['远多于','她觉得','自己的收获','给孩子们的'],
     dap:'她觉得自己的收获远多于给孩子们的。',
     vn:'Cô thấy những gì mình nhận được còn nhiều hơn rất nhiều so với những gì đã cho bọn trẻ.',
     giai:'Câu của bài khoá: A + 远多于 + B (A nhiều hơn hẳn B).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 外出的农民工
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (外出的农民工 · 支教). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 青壮年 · 闯 · 留守 · 建设 · 承担 · 义务 · 利用 · 收获 · 力量.',
  questions:[
    {q_zh:'青壮年外出打工对农村可能产生什么影响？',
     q_vn:'Thanh niên trai tráng đi làm ăn xa có thể gây ảnh hưởng gì đến nông thôn?',
     hint:'Nêu một mặt tốt và một mặt xấu, dùng 虽然……但是……',
     sample:'虽然青壮年出去打工能给家里多挣钱，但是村里只剩下老人和孩子，留守儿童缺少父母的照顾，家乡的建设也没有人来做。',
     sample_vn:'Tuy thanh niên trai tráng đi làm ăn xa có thể kiếm thêm tiền cho gia đình, nhưng trong làng chỉ còn người già và trẻ em, trẻ em ở lại thiếu sự chăm sóc của bố mẹ, việc xây dựng quê hương cũng không có ai làm.',
     note:'Câu hỏi 产生什么影响 → nên nói cả hai mặt, câu trả lời sẽ cân bằng, thuyết phục hơn.'},
    {q_zh:'青壮年外出打工对城市可能产生什么影响？',
     q_vn:'Thanh niên trai tráng đi làm ăn xa có thể gây ảnh hưởng gì đến thành phố?',
     hint:'Dùng 不仅……也…… để nêu hai ảnh hưởng',
     sample:'他们不仅给城市的建设带来了很大的力量，也让城市的交通、住房越来越紧张。',
     sample_vn:'Họ không chỉ mang lại sức mạnh lớn cho việc xây dựng thành phố, mà cũng khiến giao thông, nhà ở trong thành phố ngày càng căng thẳng.',
     note:'Ôn 越来越 + tính từ để mô tả xu hướng.'},
    {q_zh:'你认为，政府应该怎么帮助这些老人、孩子和农民工？',
     q_vn:'Theo em, chính phủ nên giúp đỡ những người già, trẻ em và lao động nông thôn này như thế nào?',
     hint:'Đưa ra 2 đề xuất, dùng 应该 và 利用',
     sample:'我认为政府应该多建学校，派好老师去农村；还可以利用网络给农民工提供免费培训，让他们回家乡也能找到工作。',
     sample_vn:'Tôi cho rằng chính phủ nên xây thêm trường học, cử giáo viên giỏi về nông thôn; còn có thể tận dụng mạng internet để đào tạo miễn phí cho lao động nông thôn, để họ về quê cũng tìm được việc làm.',
     note:'Câu hỏi 你认为 → mở đầu bằng 我认为 / 我觉得.'},
    {q_zh:'如果有机会，你愿意去山区支教吗？为什么？',
     q_vn:'Nếu có cơ hội, em có muốn lên miền núi dạy học tình nguyện không? Vì sao?',
     hint:'Trả lời thẳng + lý do, dùng 只要……就…… và 收获',
     sample:'我很愿意。只要有时间，我就想去山区支教。我觉得这样不仅能帮助孩子们，自己的收获也会很大。',
     sample_vn:'Tôi rất muốn. Chỉ cần có thời gian, tôi sẽ đi miền núi dạy học tình nguyện. Tôi thấy như vậy không chỉ giúp được bọn trẻ, bản thân cũng sẽ nhận lại rất nhiều.',
     note:'Nhớ mẫu 去 + nơi chốn + 支教, không nói 支教孩子们.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 24.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第24课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'班里有哪些同学特别需要注意吗？'},
            {sp:'男',zh:'你多留意赵福根。他上课从不发言，很多课不及格，平时也几乎不和同学交往。'}],
     q:'下列哪项是赵福根的问题？',qvn:'Điều nào sau đây là vấn đề của Triệu Phúc Căn?',
     opts:['常常迟到','不爱发言','不喜欢跳舞','总和同学吵架'],ans:1,
     why:'上课从不发言 = chưa bao giờ phát biểu trong giờ học → không thích phát biểu.',
     words:['赵福根','发言','及格','交往']},

    {n:2,
     lines:[{sp:'男',zh:'听说你在读一个网络课程，感觉怎么样？'},
            {sp:'女',zh:'还不错。你要不要也考虑考虑？可以免费试听两周，我就是试听了以后觉得好，才正式报的名。到现在已经听了两个月了。'}],
     q:'女的这段时间在干什么？',qvn:'Dạo này người phụ nữ đang làm gì?',
     opts:['在准备考试','在找工作','在免费试听','在读网络课程'],ans:3,
     why:'Câu đầu đã nói 你在读一个网络课程; cô ấy học thử miễn phí hai tuần rồi đăng ký chính thức, đến nay đã học hai tháng — không còn là học thử nữa.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'他这次比赛的成绩怎么样？'},
            {sp:'男',zh:'很可惜，银牌，差一点儿就能拿冠军了。'}],
     q:'他这次比赛得了第几名？',qvn:'Lần này anh ấy đạt hạng mấy?',
     opts:['第一名','第二名','第三名','没有名次'],ans:1,
     why:'银牌 = huy chương bạc = hạng hai. 差一点儿就能拿冠军了 = suýt giành giải nhất (thực tế không giành được).',
     words:['冠军']},

    {n:4,
     lines:[{sp:'男',zh:'真没想到，计划得这么好，还会出这样的事！'},
            {sp:'女',zh:'出事不怕，现在的问题是我们要主动承担责任，迅速采取行动。'}],
     q:'女的认为应该怎么做？',qvn:'Người phụ nữ cho rằng nên làm gì?',
     opts:['先找出是谁的错','重新做一个计划','承担责任，采取行动','别着急，等等再说'],ans:2,
     why:'主动承担责任，迅速采取行动 — nhắc lại gần như nguyên văn.',
     words:['承担','行动']},

    {n:5,
     lines:[{sp:'女',zh:'你到底想找个什么样的女朋友？'},
            {sp:'男',zh:'漂不漂亮、工作好不好、有没有钱都不要紧，我就想要个温柔体贴的。'}],
     q:'男的找女朋友最重视什么？',qvn:'Người đàn ông coi trọng điều gì nhất khi tìm bạn gái?',
     opts:['温柔体贴','长得漂亮','工作好','有钱'],ans:0,
     why:'Ngoại hình, công việc, tiền đều 不要紧 (không quan trọng); 就想要个温柔体贴的.',
     words:['温柔','体贴']},

    {n:6,
     lines:[{sp:'男',zh:'他们俩不是挺好的吗，怎么突然就离婚了？'},
            {sp:'女',zh:'家家有本难念的经，你就别替人家操心了。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['他们俩离婚是对的','男的应该去帮忙','她也很担心他们','别管别人家的事'],ans:3,
     why:'家家有本难念的经 = nhà nào cũng có chuyện khó nói; 别替人家操心了 = đừng lo chuyện nhà người ta.',
     words:['操心']},

    {n:7,
     lines:[{sp:'女',zh:'爸爸，老师明天要来我们家做家访。'},
            {sp:'男',zh:'明天我有事，跟你妈妈说吧。'},
            {sp:'女',zh:'老师特意说了，每次家访都是见的妈妈，家长会也是妈妈去参加，希望这次能跟您见见面。'},
            {sp:'男',zh:'好吧，我明天先去公司安排一下。'}],
     q:'明天老师和爸爸会在什么地方见面？',qvn:'Ngày mai cô giáo và người bố sẽ gặp nhau ở đâu?',
     opts:['在家里','在学校','在公司','在家长会上'],ans:0,
     why:'家访 = giáo viên đến NHÀ học sinh. Bố chỉ đến công ty sắp xếp công việc trước.',
     words:['家访']},

    {n:8,
     lines:[{sp:'男',zh:'刘老师，能不能请您利用空闲时间给我做一下辅导？'},
            {sp:'女',zh:'对不起，恐怕不行。'},
            {sp:'男',zh:'我可以另付费用的。'},
            {sp:'女',zh:'我们学校有规定，不允许老师给自己的学生做收费的辅导。'}],
     q:'女的为什么不辅导男的？',qvn:'Vì sao người phụ nữ không dạy kèm cho người đàn ông?',
     opts:['她没有空闲时间','学校不允许','男的不愿意付钱','她不会辅导'],ans:1,
     why:'学校有规定，不允许老师给自己的学生做收费的辅导 → trường không cho phép.',
     words:['利用','空闲']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Nhóm em làm dự án bị trễ hạn, một bạn vẫn chỉ ngồi than thở.',
     a:{sp:'Bạn',zh:'完了完了，明天就要交了，我们怎么办啊？',vn:'Toi rồi, mai là phải nộp rồi, bọn mình làm sao đây?'},
     need:['Dùng 采取行动 hoặc 行动起来','Khuyên cả nhóm bắt tay vào làm ngay'],
     sample:'别着急了，抱怨也没用，我们现在就分工，马上采取行动吧！',
     samplePy:'Bié zháojí le, bàoyuàn yě méi yòng, wǒmen xiànzài jiù fēngōng, mǎshàng cǎiqǔ xíngdòng ba!',
     sampleVn:'Đừng cuống nữa, than thở cũng vô ích, bọn mình chia việc ngay bây giờ rồi bắt tay vào làm luôn đi!',
     tip:'采取行动 là cụm cố định; ôn 抱怨 (bài 1).'},

    {scene:'Trường tổ chức buổi dọn vệ sinh công viên cuối tuần, bạn em hỏi có được trả tiền không.',
     a:{sp:'Bạn',zh:'星期六去公园打扫卫生，给钱吗？',vn:'Thứ Bảy đi dọn vệ sinh công viên, có được trả tiền không?'},
     need:['Dùng 义务 (tính từ)','Giải thích và rủ bạn đi'],
     sample:'不给钱，这是义务劳动。不过很有意义，我们一起去吧！',
     samplePy:'Bù gěi qián, zhè shì yìwù láodòng. Búguò hěn yǒu yìyì, wǒmen yìqǐ qù ba!',
     sampleVn:'Không có tiền đâu, đây là lao động công ích. Nhưng rất có ý nghĩa, bọn mình cùng đi nhé!',
     tip:'义务 làm tính từ = không lấy thù lao: 义务劳动, 义务演出.'},

    {scene:'Bạn em hỏi em làm cách nào mà tiếng Trung tiến bộ nhanh thế.',
     a:{sp:'Bạn',zh:'你的汉语怎么进步得这么快？',vn:'Sao tiếng Trung của cậu tiến bộ nhanh thế?'},
     need:['Dùng 利用 + thời gian','Kể cách học của mình'],
     sample:'我每天都利用坐公交车的时间听汉语，还大声朗读课文。',
     samplePy:'Wǒ měi tiān dōu lìyòng zuò gōngjiāochē de shíjiān tīng Hànyǔ, hái dàshēng lǎngdú kèwén.',
     sampleVn:'Ngày nào mình cũng tận dụng thời gian ngồi xe buýt để nghe tiếng Trung, còn đọc to bài khoá nữa.',
     tip:'利用 + thời gian + V. Ôn thêm 朗读.'},

    {scene:'Mẹ lo em thi đại học không tốt, cứ hỏi mãi.',
     a:{sp:'Mẹ',zh:'下个月就要考试了，你复习得怎么样了？妈妈真担心。',vn:'Tháng sau thi rồi, con ôn đến đâu rồi? Mẹ lo quá.'},
     need:['Dùng 操心','Trấn an mẹ'],
     sample:'妈，您别为我操心了，我都安排好了，一定没问题。',
     samplePy:'Mā, nín bié wèi wǒ cāoxīn le, wǒ dōu ānpái hǎo le, yídìng méi wèntí.',
     sampleVn:'Mẹ ơi, mẹ đừng lo cho con nữa, con sắp xếp ổn cả rồi, chắc chắn không sao đâu.',
     tip:'为 / 替 + người + 操心; không nói 操心我.'},

    {scene:'Em làm vỡ bình hoa của lớp, cô giáo hỏi ai làm.',
     a:{sp:'Cô',zh:'花瓶是谁打破的？',vn:'Ai làm vỡ bình hoa thế?'},
     need:['Dùng 承担','Nhận lỗi và nhận trách nhiệm'],
     sample:'老师，是我不小心打破的。我愿意承担责任，买一个新的。',
     samplePy:'Lǎoshī, shì wǒ bù xiǎoxīn dǎpò de. Wǒ yuànyì chéngdān zérèn, mǎi yí ge xīn de.',
     sampleVn:'Thưa cô, là em vô ý làm vỡ ạ. Em xin chịu trách nhiệm, sẽ mua một cái mới.',
     tip:'承担 + 责任; ôn 是……的 (nhấn mạnh người làm).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Hiệu trưởng phát biểu chào mừng các đoàn học sinh đến dự trại khoa học.',
     a:'欢迎大家来玩儿啊！',b:'我代表学校，向各位同学和老师的到来表示热烈的欢迎！',better:'b',
     why:'Diễn văn chính thức dùng giọng trang trọng: 代表……, 向……表示热烈的欢迎 (bài nghe 13–14). Câu a như chào bạn bè đến nhà.'},

    {scene:'Em rủ bạn thân cuối tuần đi dạy tình nguyện cho trẻ em.',
     a:'周末一起去给孩子们上课吧，挺有意思的！',b:'本周末将组织支教活动，欢迎广大同学积极参与。',better:'a',
     why:'Rủ bạn thân thì nói tự nhiên, thân mật. Câu b là giọng thông báo (本周末, 广大同学, 积极参与).'},

    {scene:'Lớp trưởng viết thông báo dán trên bảng tin.',
     a:'周六有义务劳动，大家都来啊，别忘了！',b:'本周六上午八点举行义务劳动，请全班同学准时参加。',better:'b',
     why:'Thông báo cần rõ thời gian, trang trọng: 本周六, 举行, 请……准时参加. Câu a như tin nhắn.'},

    {scene:'Em an ủi bạn vừa thi trượt một môn.',
     a:'没事儿，下次好好复习，肯定能及格！',b:'望你汲取教训，争取下次考试及格。',better:'a',
     why:'An ủi bạn nên nói nhẹ nhàng, thân mật. Câu b (望, 汲取教训) như lời phê của cấp trên, nghe lạnh lùng.'},

    {scene:'Em viết bài cảm nghĩ sau chuyến dạy học tình nguyện đăng trên báo trường.',
     a:'这次支教，我觉得自己的收获远远大于付出。',b:'这次去教小孩儿，我学到了挺多东西的。',better:'a',
     why:'Bài viết đăng báo dùng giọng văn viết: 支教, 收获远远大于付出. Câu b quá khẩu ngữ (小孩儿, 挺多东西).'},

    {scene:'Thầy giáo hỏi ý kiến em trong giờ họp lớp.',
     a:'我觉得这个办法不错，不过还可以再改一改。',b:'你们这个办法啊，凑合吧。',better:'a',
     why:'Phát biểu với thầy cô cần lịch sự, có góp ý xây dựng. Câu b (凑合吧) nghe hờ hững, thiếu tôn trọng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 61)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Sách chia 3 phần: 赵福根的故事 → 研究型学习活动 → 郝老师的想法. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở đầu', cue:'来云南支教一年多，郝老师记不清……', words:['云南','支教','郝琳硕','家访']},
    {step:'Phúc Căn lúc đầu', cue:'一位叫赵福根的男生……上课从不……', words:['赵福根','发言','及格','交往']},
    {step:'Hoàn cảnh & điệu múa', cue:'家访后得知……，她鼓励福根……', words:['家务','体贴','排练','蝴蝶','舞蹈','冠军','鼓掌']},
    {step:'Phúc Căn thay đổi', cue:'之后，赵福根……，他写了一篇作文……', words:['用功','进步','题目','朗读','温柔','热烈','勇气']},
    {step:'Hoạt động nghiên cứu', cue:'山里的青壮年……，于是郝老师组织了……', words:['青壮年','闯','留守','主题','地理','采访','利用','空闲','指导','培训']},
    {step:'Học sinh hiểu ra', cue:'以前……，现在我们明白了……', words:['建设','操心','承担','义务','艰巨','力量']},
    {step:'Suy nghĩ của cô Hách', cue:'郝琳硕觉得自己的收获……', words:['收获','力量']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: chuyện Phúc Căn → hoạt động nghiên cứu → suy nghĩ của cô Hách?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có kể được vì sao Phúc Căn thay đổi (cô Hách đến thăm nhà, khuyến khích đi múa) không?',
    'Có nói được chủ đề hoạt động “让家乡的明天更美好” không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 60–61) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['闯','操心','承担','勇气','建设','温柔'],
   cau:[
     {s:'别怕困难，鼓起＿＿，你一定能成功！', dap:['勇气']},
     {s:'大家都很羡慕他有个＿＿体贴的妻子。', dap:['温柔']},
     {s:'昨天开车时精力不集中，＿＿了红灯。', dap:['闯']},
     {s:'父母为我们＿＿了一辈子，现在该享福了。', dap:['操心']},
     {s:'毕业后我希望回去＿＿我的国家。', dap:['建设']},
     {s:'这次活动的费用将由学校统一＿＿。', dap:['承担']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'该准备的我们都已经准备了，你这么做完全是＿＿的。', opts:['多余','过分'], ans:0, giai:'Mọi thứ đã chuẩn bị đủ, việc làm thêm là THỪA → 多余. 过分 là "quá đáng, quá mức" (nói về thái độ, lời nói).'},
     {s:'表面上弱小的人，很可能拥有你想象不到的巨大＿＿。', opts:['精力','力量'], ans:1, giai:'巨大的力量 = sức mạnh to lớn (đối lập với 弱小). 精力 là sức lực, tinh thần để làm việc (精力充沛), không đi với 巨大.'},
     {s:'心理学家发现，性格＿＿的人的生活比其他人更丰富。', opts:['热烈','热情'], ans:1, giai:'Tả TÍNH CÁCH một người → 热情. 热烈 tả không khí, tràng vỗ tay, cuộc thảo luận.'},
     {s:'我觉得他这并不是对你好，只是＿＿你。', opts:['用','利用'], ans:1, giai:'Nghĩa xấu "lợi dụng người khác vì mục đích riêng" → 利用. 用 không mang nghĩa này.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'我都已经A安排B好了，你别C瞎D了！', tu:'操心', ans:'D', giai:'别 + 瞎 + 操心 + 了: 瞎 (bừa, vô cớ) là trạng ngữ đứng trước động từ 操心 → 你别瞎操心了！'},
     {s:'看了她的舞蹈，大家都A鼓B起C来D。', tu:'掌', ans:'C', giai:'Li hợp từ 鼓掌 + bổ ngữ xu hướng 起来: tân ngữ 掌 chen giữa 起 và 来 → 鼓起掌来.'},
     {s:'A他B下班后的C时间参加D专业培训。', tu:'利用', ans:'B', giai:'利用 + 下班后的时间 + V: 他利用下班后的时间参加专业培训.'},
     {s:'我会A最大的B力量C来D帮助你。', tu:'尽', ans:'A', giai:'尽 + 最大的力量 = dốc hết sức: 我会尽最大的力量来帮助你.'}
   ]}
];
