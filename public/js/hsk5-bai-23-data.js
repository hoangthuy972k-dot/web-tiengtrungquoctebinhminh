// ══════════════════════════════════════════
// DATA — HSK5 Bài 23: 放手 (Buông tay)
// Unit 8 体会教育 · Nguồn: HSK标准教程5下 (tr. 47–54) + 练习册 bài 23
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 40 từ của bảng 生词 + 5 专有名词 (tr. 47–49)
// ══════════════════════════════════════════
var vocabData = [
  {n:1, zh:'乖', py:'guāi', pos:'Tính từ', vn:'ngoan, ngoan ngoãn', hv:'quai', em:'😇', lesson:1,
   explain:['Dùng cho trẻ con (hoặc thú nuôi) biết nghe lời, không nghịch ngợm. Hay lặp lại: 乖乖 — 乖乖女 (cô con gái ngoan), 乖乖地听话 (ngoan ngoãn nghe lời).'],
   usage:'很乖 / 真乖 / 乖孩子 / 乖乖女; 乖乖地 + V = ngoan ngoãn làm gì. Người lớn hay khen trẻ: 真乖！',
   collo:['乖孩子', '乖乖女', '很乖', '乖乖地听话'],
   ex_zh:'文文从小是个乖乖女，学习刻苦，遵守纪律。', ex_py:'Wénwen cóngxiǎo shì ge guāiguāinǚ, xuéxí kèkǔ, zūnshǒu jìlǜ.', ex_vn:'Văn Văn từ nhỏ đã là cô con gái ngoan, học hành chăm chỉ, giữ kỷ luật.',
   exList:[
     {zh:'文文从小是个乖乖女，学习刻苦，遵守纪律。', py:'Wénwen cóngxiǎo shì ge guāiguāinǚ, xuéxí kèkǔ, zūnshǒu jìlǜ.', vn:'Văn Văn từ nhỏ đã là cô con gái ngoan, học hành chăm chỉ, giữ kỷ luật.'},
     {zh:'这孩子真乖，吃完饭就自己去写作业了。', py:'Zhè háizi zhēn guāi, chīwán fàn jiù zìjǐ qù xiě zuòyè le.', vn:'Đứa bé này ngoan thật, ăn cơm xong là tự đi làm bài tập.'},
     {zh:'她是个遵守纪律的乖孩子。', py:'Tā shì ge zūnshǒu jìlǜ de guāi háizi.', vn:'Cô bé là một đứa trẻ ngoan, biết giữ kỷ luật.'}
   ],
   colloFull:[
     {zh:'乖孩子', py:'guāi háizi', vn:'đứa trẻ ngoan'},
     {zh:'乖乖女', py:'guāiguāinǚ', vn:'cô con gái ngoan'},
     {zh:'很乖', py:'hěn guāi', vn:'rất ngoan'},
     {zh:'乖乖地听话', py:'guāiguāi de tīnghuà', vn:'ngoan ngoãn nghe lời'},
     {zh:'真乖', py:'zhēn guāi', vn:'ngoan quá'}
   ],
   patterns:[{s:'(很 / 真) + 乖', m:'Khen trẻ ngoan'}, {s:'乖乖地 + V', m:'Ngoan ngoãn làm gì (không chống đối)'}],
   checkList:[
     {promptLang:'vi', prompt:'Hồi nhỏ em gái tôi rất ngoan, chưa bao giờ làm bố mẹ giận.', answer:'我妹妹小时候很乖，从来没让爸爸妈妈生过气。', answerPy:'Wǒ mèimei xiǎoshíhou hěn guāi, cónglái méi ràng bàba māma shēngguo qì.', note:'很乖: tính từ làm vị ngữ, có 很 đứng trước.', pair:'从来没……过'},
     {promptLang:'vi', prompt:'Mẹ vừa về, em trai liền ngoan ngoãn cất đồ chơi đi.', answer:'妈妈一回来，弟弟就乖乖地把玩具收好了。', answerPy:'Māma yì huílai, dìdi jiù guāiguāi de bǎ wánjù shōuhǎo le.', note:'乖乖地 + V: ngoan ngoãn làm gì.', pair:'一……就……'}
   ]},

  {n:2, zh:'刻苦', py:'kèkǔ', pos:'Tính từ', vn:'chăm chỉ, chịu khó', hv:'khắc khổ', em:'📚', lesson:1,
   explain:['Chịu được vất vả, bỏ nhiều công sức để học tập, luyện tập. Là từ KHEN — khác hẳn "khắc khổ" (khổ hạnh, gian khổ) trong tiếng Việt.'],
   usage:'学习(很)刻苦 / 刻苦学习 / 刻苦训练 / 刻苦钻研. Làm trạng ngữ thường không cần 地.',
   collo:['学习刻苦', '刻苦学习', '刻苦训练', '刻苦钻研'],
   ex_zh:'经过刻苦训练，她终于成为了我们的第一批女飞行员。', ex_py:'Jīngguò kèkǔ xùnliàn, tā zhōngyú chéngwéile wǒmen de dì-yī pī nǚ fēixíngyuán.', ex_vn:'Qua quá trình khổ luyện, cuối cùng cô ấy đã trở thành một trong những nữ phi công đầu tiên của chúng ta.',
   exList:[
     {zh:'经过刻苦训练，她终于成为了我们的第一批女飞行员。', py:'Jīngguò kèkǔ xùnliàn, tā zhōngyú chéngwéile wǒmen de dì-yī pī nǚ fēixíngyuán.', vn:'Qua quá trình khổ luyện, cuối cùng cô ấy đã trở thành một trong những nữ phi công đầu tiên của chúng ta.'},
     {zh:'他学习非常刻苦，每天早上六点就起床背单词。', py:'Tā xuéxí fēicháng kèkǔ, měi tiān zǎoshang liù diǎn jiù qǐ chuáng bèi dāncí.', vn:'Cậu ấy học rất chăm chỉ, ngày nào sáu giờ sáng cũng dậy học thuộc từ mới.'},
     {zh:'文文从小学习刻苦，成绩一直是第一名。', py:'Wénwen cóngxiǎo xuéxí kèkǔ, chéngjì yìzhí shì dì-yī míng.', vn:'Văn Văn từ nhỏ học hành chăm chỉ, thành tích luôn đứng thứ nhất.'}
   ],
   colloFull:[
     {zh:'学习刻苦', py:'xuéxí kèkǔ', vn:'học hành chăm chỉ'},
     {zh:'刻苦学习', py:'kèkǔ xuéxí', vn:'chăm chỉ học tập'},
     {zh:'刻苦训练', py:'kèkǔ xùnliàn', vn:'khổ luyện'},
     {zh:'刻苦钻研', py:'kèkǔ zuānyán', vn:'miệt mài nghiên cứu'},
     {zh:'工作刻苦', py:'gōngzuò kèkǔ', vn:'làm việc chịu khó'}
   ],
   patterns:[{s:'(学习 / 工作) + 很 + 刻苦', m:'Học / làm việc chăm chỉ (làm vị ngữ)'}, {s:'刻苦 + 学习 / 训练 / 练习', m:'Chăm chỉ học / khổ luyện (làm trạng ngữ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần chăm chỉ luyện tập, khẩu ngữ của bạn nhất định sẽ ngày càng tốt.', answer:'只要刻苦练习，你的口语就一定会越来越好。', answerPy:'Zhǐyào kèkǔ liànxí, nǐ de kǒuyǔ jiù yídìng huì yuè lái yuè hǎo.', note:'刻苦 làm trạng ngữ đứng thẳng trước động từ, không cần 地.', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Cậu ấy không những học chăm chỉ, mà còn hay giúp đỡ bạn cùng lớp.', answer:'他不仅学习刻苦，也经常帮助同学。', answerPy:'Tā bùjǐn xuéxí kèkǔ, yě jīngcháng bāngzhù tóngxué.', note:'学习刻苦: chủ ngữ + vị ngữ (bảng 词语搭配 của sách).', pair:'不仅……也……'}
   ]},

  {n:3, zh:'遵守', py:'zūnshǒu', pos:'Động từ', vn:'tuân thủ, chấp hành', hv:'tuân thủ', em:'🚦', lesson:1,
   explain:['Làm đúng theo quy định, luật lệ, phép tắc đã đặt ra. Trái nghĩa: 违反 (vi phạm).'],
   usage:'遵守 + 法律 / 规定 / 纪律 / 原则 / 规矩 / 秩序 (bảng 词语搭配); 遵守时间 = đúng giờ; 遵守诺言 = giữ lời hứa.',
   collo:['遵守纪律', '遵守法律', '遵守规定', '遵守交通规则'],
   ex_zh:'开车的时候一定要遵守交通规则。', ex_py:'Kāi chē de shíhou yídìng yào zūnshǒu jiāotōng guīzé.', ex_vn:'Khi lái xe nhất định phải tuân thủ luật giao thông.',
   exList:[
     {zh:'开车的时候一定要遵守交通规则。', py:'Kāi chē de shíhou yídìng yào zūnshǒu jiāotōng guīzé.', vn:'Khi lái xe nhất định phải tuân thủ luật giao thông.'},
     {zh:'文文从小是个乖乖女，学习刻苦，遵守纪律。', py:'Wénwen cóngxiǎo shì ge guāiguāinǚ, xuéxí kèkǔ, zūnshǒu jìlǜ.', vn:'Văn Văn từ nhỏ đã là cô con gái ngoan, học hành chăm chỉ, giữ kỷ luật.'},
     {zh:'考试时，每个学生都必须遵守考场纪律。', py:'Kǎoshì shí, měi ge xuésheng dōu bìxū zūnshǒu kǎochǎng jìlǜ.', vn:'Khi thi, mỗi học sinh đều phải chấp hành quy chế phòng thi.'}
   ],
   colloFull:[
     {zh:'遵守纪律', py:'zūnshǒu jìlǜ', vn:'giữ kỷ luật'},
     {zh:'遵守法律', py:'zūnshǒu fǎlǜ', vn:'tuân thủ pháp luật'},
     {zh:'遵守规定', py:'zūnshǒu guīdìng', vn:'tuân thủ quy định'},
     {zh:'遵守交通规则', py:'zūnshǒu jiāotōng guīzé', vn:'tuân thủ luật giao thông'},
     {zh:'遵守秩序', py:'zūnshǒu zhìxù', vn:'giữ trật tự'}
   ],
   patterns:[{s:'遵守 + 纪律 / 规定 / 法律 / 规矩', m:'Tuân thủ (điều đã quy định)'}, {s:'遵守 ↔ 违反', m:'Cặp trái nghĩa, đi với cùng một nhóm tân ngữ'}],
   checkList:[
     {promptLang:'vi', prompt:'Nếu không tuân thủ luật giao thông, bạn sẽ bị cảnh sát phạt tiền.', answer:'如果不遵守交通规则，你就会被警察罚款。', answerPy:'Rúguǒ bù zūnshǒu jiāotōng guīzé, nǐ jiù huì bèi jǐngchá fákuǎn.', note:'遵守 + 交通规则: cụm cố định.', pair:'被'},
     {promptLang:'vi', prompt:'Tuy quy định này hơi phiền, nhưng mọi người vẫn phải tuân thủ.', answer:'虽然这个规定有点儿麻烦，但是大家还是要遵守。', answerPy:'Suīrán zhège guīdìng yǒudiǎnr máfan, dànshì dàjiā háishi yào zūnshǒu.', note:'Tân ngữ 规定 đã nhắc ở vế trước nên vế sau có thể lược.', pair:'虽然……但是……'}
   ]},

  {n:4, zh:'纪律', py:'jìlǜ', pos:'Danh từ', vn:'kỷ luật', hv:'kỷ luật', em:'📏', lesson:1,
   explain:['Những quy định mà mọi người trong một tập thể (trường, lớp, quân đội, cơ quan) phải làm theo.'],
   usage:'遵守 / 违反 + 纪律; 纪律 + 严格; 课堂纪律 / 考场纪律 / 学校纪律.',
   collo:['遵守纪律', '违反纪律', '课堂纪律', '纪律严格'],
   ex_zh:'就算孩子违反了纪律，也不能体罚！', ex_py:'Jiùsuàn háizi wéifǎnle jìlǜ, yě bù néng tǐfá!', ex_vn:'Cho dù trẻ có vi phạm kỷ luật thì cũng không được phạt thân thể!',
   exList:[
     {zh:'就算孩子违反了纪律，也不能体罚！', py:'Jiùsuàn háizi wéifǎnle jìlǜ, yě bù néng tǐfá!', vn:'Cho dù trẻ có vi phạm kỷ luật thì cũng không được phạt thân thể!'},
     {zh:'这所学校的纪律很严格，上课不能用手机。', py:'Zhè suǒ xuéxiào de jìlǜ hěn yángé, shàng kè bù néng yòng shǒujī.', vn:'Kỷ luật của trường này rất nghiêm, trong giờ học không được dùng điện thoại.'},
     {zh:'她是个遵守纪律的乖孩子。', py:'Tā shì ge zūnshǒu jìlǜ de guāi háizi.', vn:'Cô bé là một đứa trẻ ngoan, biết giữ kỷ luật.'}
   ],
   colloFull:[
     {zh:'遵守纪律', py:'zūnshǒu jìlǜ', vn:'giữ kỷ luật'},
     {zh:'违反纪律', py:'wéifǎn jìlǜ', vn:'vi phạm kỷ luật'},
     {zh:'课堂纪律', py:'kètáng jìlǜ', vn:'kỷ luật trong giờ học'},
     {zh:'纪律严格', py:'jìlǜ yángé', vn:'kỷ luật nghiêm'},
     {zh:'考场纪律', py:'kǎochǎng jìlǜ', vn:'quy chế phòng thi'}
   ],
   patterns:[{s:'遵守 / 违反 + 纪律', m:'Giữ / vi phạm kỷ luật'}, {s:'(Nơi chốn) + 的 + 纪律 + 很严格', m:'Kỷ luật ở đâu đó rất nghiêm'}],
   checkList:[
     {promptLang:'vi', prompt:'Cậu ấy vì vi phạm kỷ luật mà bị thầy giáo phê bình.', answer:'他因为违反纪律被老师批评了。', answerPy:'Tā yīnwèi wéifǎn jìlǜ bèi lǎoshī pīpíng le.', note:'违反纪律 = vi phạm kỷ luật (không nói 犯纪律).', pair:'被'},
     {promptLang:'vi', prompt:'Kỷ luật của trường này càng ngày càng nghiêm.', answer:'这所学校的纪律越来越严格了。', answerPy:'Zhè suǒ xuéxiào de jìlǜ yuè lái yuè yángé le.', note:'纪律 + 严格: danh từ + tính từ.', pair:'越来越'}
   ]},

  {n:5, zh:'征求', py:'zhēngqiú', pos:'Động từ', vn:'trưng cầu, hỏi (ý kiến)', hv:'trưng cầu', em:'🗳️', lesson:1,
   explain:['Hỏi, tìm hiểu một cách chính thức để lấy ý kiến, cách nhìn của người khác. Tân ngữ gần như luôn là 意见 / 看法 / 建议.'],
   usage:'征求 + (人 + 的) + 意见 / 看法 / 建议; 向 + 人 + 征求意见. Không nói 征求 + 人 (tân ngữ là ý kiến, không phải người).',
   collo:['征求意见', '征求看法', '向大家征求意见', '征求父母的意见'],
   ex_zh:'大事小事，尽管妈妈表示也要征求她的意见……', ex_py:'Dà shì xiǎo shì, jǐnguǎn māma biǎoshì yě yào zhēngqiú tā de yìjiàn……', ex_vn:'Việc lớn việc nhỏ, dù mẹ nói là cũng phải hỏi ý kiến cô bé…',
   exList:[
     {zh:'大事小事，尽管妈妈表示也要征求她的意见……', py:'Dà shì xiǎo shì, jǐnguǎn māma biǎoshì yě yào zhēngqiú tā de yìjiàn……', vn:'Việc lớn việc nhỏ, dù mẹ nói là cũng phải hỏi ý kiến cô bé…'},
     {zh:'这件事情，我建议你先回去征求一下父母的意见。', py:'Zhè jiàn shìqing, wǒ jiànyì nǐ xiān huíqu zhēngqiú yíxià fùmǔ de yìjiàn.', vn:'Việc này, thầy khuyên em về hỏi ý kiến bố mẹ trước đã.'},
     {zh:'学校向学生们征求了对食堂的意见。', py:'Xuéxiào xiàng xuéshengmen zhēngqiúle duì shítáng de yìjiàn.', vn:'Nhà trường đã hỏi ý kiến học sinh về căng tin.'}
   ],
   colloFull:[
     {zh:'征求意见', py:'zhēngqiú yìjiàn', vn:'hỏi ý kiến'},
     {zh:'征求看法', py:'zhēngqiú kànfǎ', vn:'hỏi quan điểm'},
     {zh:'向大家征求意见', py:'xiàng dàjiā zhēngqiú yìjiàn', vn:'hỏi ý kiến mọi người'},
     {zh:'征求父母的意见', py:'zhēngqiú fùmǔ de yìjiàn', vn:'hỏi ý kiến bố mẹ'},
     {zh:'征求建议', py:'zhēngqiú jiànyì', vn:'xin góp ý'}
   ],
   patterns:[{s:'征求 + 人 + 的 + 意见 / 看法', m:'Hỏi ý kiến ai'}, {s:'向 + 人 + 征求 + 意见', m:'Hỏi ý kiến ai (nhấn đối tượng)'}],
   checkList:[
     {promptLang:'vi', prompt:'Kế hoạch này là sau khi hỏi ý kiến mọi người mới quyết định.', answer:'这个计划是征求了大家的意见以后才决定的。', answerPy:'Zhège jìhuà shì zhēngqiúle dàjiā de yìjiàn yǐhòu cái juédìng de.', note:'征求 + 大家的意见: tân ngữ là 意见, không phải 大家.', pair:'是……的'},
     {promptLang:'vi', prompt:'Thầy chủ nhiệm nói kế hoạch dã ngoại cho cả lớp, và hỏi ý kiến mọi người.', answer:'班主任把春游的计划告诉了大家，并征求了大家的意见。', answerPy:'Bānzhǔrèn bǎ chūnyóu de jìhuà gàosule dàjiā, bìng zhēngqiúle dàjiā de yìjiàn.', note:'并 + V: đồng thời, và (văn viết).', pair:'把'}
   ]},

  {n:6, zh:'念', py:'niàn', pos:'Động từ', vn:'học (ở trường); đọc', hv:'niệm', em:'🎓', lesson:1,
   explain:['Trong bài, 念 = học (ở một trường, một ngành, một lớp) — cách nói khẩu ngữ: 念大学, 念书, 念什么专业.', 'Nghĩa khác: đọc thành tiếng (念课文); nhớ nhung (想念).'],
   usage:'念 + 书 / 大学 / 高中 / 专业 / 几年级; 念 + 课文 / 名字 (đọc to).',
   collo:['念大学', '念书', '念什么专业', '念课文'],
   ex_zh:'上哪所学校、念什么专业，基本上都是妈妈说了算。', ex_py:'Shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè, jīběn shang dōu shì māma shuōle suàn.', ex_vn:'Học trường nào, học ngành gì, về cơ bản đều do mẹ quyết.',
   exList:[
     {zh:'上哪所学校、念什么专业，基本上都是妈妈说了算。', py:'Shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè, jīběn shang dōu shì māma shuōle suàn.', vn:'Học trường nào, học ngành gì, về cơ bản đều do mẹ quyết.'},
     {zh:'我哥哥在河内念大学，念的是经济专业。', py:'Wǒ gēge zài Hénèi niàn dàxué, niàn de shì jīngjì zhuānyè.', vn:'Anh tôi học đại học ở Hà Nội, học ngành kinh tế.'},
     {zh:'老师让我大声把课文念一遍。', py:'Lǎoshī ràng wǒ dàshēng bǎ kèwén niàn yí biàn.', vn:'Cô giáo bảo tôi đọc to bài khoá một lượt.'}
   ],
   colloFull:[
     {zh:'念大学', py:'niàn dàxué', vn:'học đại học'},
     {zh:'念书', py:'niàn shū', vn:'đi học'},
     {zh:'念什么专业', py:'niàn shénme zhuānyè', vn:'học ngành gì'},
     {zh:'念课文', py:'niàn kèwén', vn:'đọc bài khoá'},
     {zh:'念高中', py:'niàn gāozhōng', vn:'học cấp ba'}
   ],
   patterns:[{s:'在 + trường + 念 + 书 / 大学', m:'Học ở đâu (khẩu ngữ)'}, {s:'把 + 课文 + 念 + 一遍', m:'Đọc to bài một lượt'}],
   checkList:[
     {promptLang:'vi', prompt:'Anh học đại học ở đâu? — Tôi học ở Hà Nội.', answer:'你是在哪儿念的大学？——我是在河内念的。', answerPy:'Nǐ shì zài nǎr niàn de dàxué? — Wǒ shì zài Hénèi niàn de.', note:'念大学 = 上大学 (khẩu ngữ).', pair:'是……的'},
     {promptLang:'vi', prompt:'Cô giáo bảo tôi đọc to bài khoá một lượt.', answer:'老师让我把课文大声念一遍。', answerPy:'Lǎoshī ràng wǒ bǎ kèwén dàshēng niàn yí biàn.', note:'念 ở đây = đọc thành tiếng.', pair:'把'}
   ]},

  {n:7, zh:'基本', py:'jīběn', pos:'Phó từ / Tính từ', vn:'về cơ bản; cơ bản', hv:'cơ bản', em:'🧱', lesson:1,
   explain:['① Phó từ: về cơ bản, nhìn chung (= 大体上), hay nói 基本上.', '② Tính từ: cơ bản, căn bản, làm nền tảng — 基本的条件 / 基本知识.'],
   usage:'基本(上) + 都 / 完成 / 同意; 基本的 + 条件 / 理论知识 / 认识 / 结构 / 权利 / 制度 (bảng 词语搭配).',
   collo:['基本上', '基本完成', '基本的条件', '基本知识'],
   ex_zh:'上哪所学校、念什么专业……基本上都是妈妈说了算。', ex_py:'Shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè…… jīběn shang dōu shì māma shuōle suàn.', ex_vn:'Học trường nào, học ngành gì… về cơ bản đều do mẹ quyết.',
   exList:[
     {zh:'上哪所学校、念什么专业……基本上都是妈妈说了算。', py:'Shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè…… jīběn shang dōu shì māma shuōle suàn.', vn:'Học trường nào, học ngành gì… về cơ bản đều do mẹ quyết.'},
     {zh:'这个工程已经基本完成了。', py:'Zhège gōngchéng yǐjīng jīběn wánchéng le.', vn:'Công trình này về cơ bản đã hoàn thành.'},
     {zh:'身体健康是做好一切工作的基本条件。', py:'Shēntǐ jiànkāng shì zuòhǎo yíqiè gōngzuò de jīběn tiáojiàn.', vn:'Sức khoẻ là điều kiện cơ bản để làm tốt mọi việc.'}
   ],
   colloFull:[
     {zh:'基本上', py:'jīběn shang', vn:'về cơ bản'},
     {zh:'基本完成', py:'jīběn wánchéng', vn:'cơ bản hoàn thành'},
     {zh:'基本的条件', py:'jīběn de tiáojiàn', vn:'điều kiện cơ bản'},
     {zh:'基本知识', py:'jīběn zhīshi', vn:'kiến thức cơ bản'},
     {zh:'基本的权利', py:'jīběn de quánlì', vn:'quyền cơ bản'}
   ],
   patterns:[{s:'基本(上) + 都 / V', m:'Về cơ bản (đều) …'}, {s:'基本的 + N', m:'… cơ bản (điều kiện, kiến thức, quyền lợi)'}],
   checkList:[
     {promptLang:'vi', prompt:'Tôi đã làm xong bài tập hôm nay về cơ bản rồi.', answer:'我已经把今天的作业基本做完了。', answerPy:'Wǒ yǐjīng bǎ jīntiān de zuòyè jīběn zuòwán le.', note:'基本 (phó từ) đứng ngay trước động từ.', pair:'把'},
     {promptLang:'vi', prompt:'Tuy cậu ấy học chưa lâu, nhưng bây giờ về cơ bản đã nghe hiểu được tiếng Trung.', answer:'虽然他学的时间不长，但是现在基本上能听懂汉语了。', answerPy:'Suīrán tā xué de shíjiān bù cháng, dànshì xiànzài jīběn shang néng tīngdǒng Hànyǔ le.', note:'基本上 đứng trước động từ năng nguyện 能.', pair:'虽然……但是……'}
   ]},

  {n:8, zh:'阶段', py:'jiēduàn', pos:'Danh từ', vn:'giai đoạn', hv:'giai đoạn', em:'🪜', lesson:1,
   explain:['Một khoảng, một bước trong quá trình phát triển của sự việc hay đời người.'],
   usage:'大学 / 高中 / 这个 + 阶段; 第一阶段; 进入……阶段; 现阶段 (giai đoạn hiện nay).',
   collo:['大学阶段', '第一阶段', '进入新阶段', '现阶段'],
   ex_zh:'可是到了大学阶段，亲爱的女儿竟然违反了乖乖女的各种规矩。', ex_py:'Kěshì dàole dàxué jiēduàn, qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', ex_vn:'Nhưng đến giai đoạn đại học, cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".',
   exList:[
     {zh:'可是到了大学阶段，亲爱的女儿竟然违反了乖乖女的各种规矩。', py:'Kěshì dàole dàxué jiēduàn, qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', vn:'Nhưng đến giai đoạn đại học, cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".'},
     {zh:'高中阶段是人生中非常重要的一个阶段。', py:'Gāozhōng jiēduàn shì rénshēng zhōng fēicháng zhòngyào de yí ge jiēduàn.', vn:'Cấp ba là một giai đoạn vô cùng quan trọng trong đời người.'},
     {zh:'这个项目已经进入了最后阶段。', py:'Zhège xiàngmù yǐjīng jìnrùle zuìhòu jiēduàn.', vn:'Dự án này đã bước vào giai đoạn cuối.'}
   ],
   colloFull:[
     {zh:'大学阶段', py:'dàxué jiēduàn', vn:'giai đoạn đại học'},
     {zh:'第一阶段', py:'dì-yī jiēduàn', vn:'giai đoạn một'},
     {zh:'进入新阶段', py:'jìnrù xīn jiēduàn', vn:'bước sang giai đoạn mới'},
     {zh:'现阶段', py:'xiàn jiēduàn', vn:'giai đoạn hiện nay'},
     {zh:'最后阶段', py:'zuìhòu jiēduàn', vn:'giai đoạn cuối'}
   ],
   patterns:[{s:'到了 + … + 阶段', m:'Đến giai đoạn …'}, {s:'进入 + (新 / 最后) + 阶段', m:'Bước vào giai đoạn …'}],
   checkList:[
     {promptLang:'vi', prompt:'Đến giai đoạn đại học, cậu ấy càng ngày càng độc lập.', answer:'到了大学阶段，他越来越独立了。', answerPy:'Dàole dàxué jiēduàn, tā yuè lái yuè dúlì le.', note:'到了 + 阶段 đứng đầu câu làm trạng ngữ thời gian.', pair:'越来越'},
     {promptLang:'vi', prompt:'Ở giai đoạn này, điều quan trọng nhất với chúng ta không phải chơi game, mà là học.', answer:'这个阶段对我们来说，最重要的不是玩游戏，而是学习。', answerPy:'Zhège jiēduàn duì wǒmen lái shuō, zuì zhòngyào de bú shì wán yóuxì, ér shì xuéxí.', note:'这个阶段 làm trạng ngữ, không cần 在.', pair:'不是……而是……'}
   ]},

  {n:9, zh:'亲爱', py:'qīn’ài', pos:'Tính từ', vn:'thân yêu, yêu quý', hv:'thân ái', em:'💕', lesson:1,
   explain:['Thân thiết và yêu quý. Gần như chỉ dùng làm định ngữ với 的: 亲爱的 + người; hay dùng để mở đầu thư, lời phát biểu.'],
   usage:'亲爱的 + 妈妈 / 女儿 / 同学们 / 朋友们; gọi người yêu: 亲爱的. Không nói 很亲爱.',
   collo:['亲爱的女儿', '亲爱的妈妈', '亲爱的同学们', '亲爱的朋友'],
   ex_zh:'亲爱的同学们，欢迎你们来到我们学校！', ex_py:'Qīn’ài de tóngxuémen, huānyíng nǐmen lái dào wǒmen xuéxiào!', ex_vn:'Các bạn học sinh thân mến, chào mừng các bạn đến với trường chúng tôi!',
   exList:[
     {zh:'亲爱的同学们，欢迎你们来到我们学校！', py:'Qīn’ài de tóngxuémen, huānyíng nǐmen lái dào wǒmen xuéxiào!', vn:'Các bạn học sinh thân mến, chào mừng các bạn đến với trường chúng tôi!'},
     {zh:'到了大学阶段，亲爱的女儿竟然违反了乖乖女的各种规矩。', py:'Dàole dàxué jiēduàn, qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', vn:'Đến giai đoạn đại học, cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".'},
     {zh:'亲爱的妈妈，祝您生日快乐！', py:'Qīn’ài de māma, zhù nín shēngrì kuàilè!', vn:'Mẹ yêu quý, chúc mẹ sinh nhật vui vẻ!'}
   ],
   colloFull:[
     {zh:'亲爱的女儿', py:'qīn’ài de nǚ’ér', vn:'con gái yêu quý'},
     {zh:'亲爱的妈妈', py:'qīn’ài de māma', vn:'mẹ yêu quý'},
     {zh:'亲爱的同学们', py:'qīn’ài de tóngxuémen', vn:'các bạn thân mến'},
     {zh:'亲爱的朋友', py:'qīn’ài de péngyou', vn:'người bạn thân yêu'},
     {zh:'亲爱的祖国', py:'qīn’ài de zǔguó', vn:'Tổ quốc thân yêu'}
   ],
   patterns:[{s:'亲爱的 + người', m:'… thân yêu (mở đầu thư, lời chào)'}],
   checkList:[
     {promptLang:'vi', prompt:'Mẹ yêu quý, con viết lá thư này là để cảm ơn mẹ.', answer:'亲爱的妈妈，我写这封信是为了感谢您。', answerPy:'Qīn’ài de māma, wǒ xiě zhè fēng xìn shì wèile gǎnxiè nín.', note:'亲爱的 + người: mở đầu thư.', pair:'是为了……'},
     {promptLang:'vi', prompt:'Các bạn thân mến, ngày mai chúng ta sắp được nghỉ rồi.', answer:'亲爱的同学们，明天我们就要放假了。', answerPy:'Qīn’ài de tóngxuémen, míngtiān wǒmen jiù yào fàng jià le.', note:'亲爱的 luôn đi với 的, không nói 很亲爱.', pair:'就要……了'}
   ]},

  {n:10, zh:'违反', py:'wéifǎn', pos:'Động từ', vn:'vi phạm, làm trái', hv:'vi phản', em:'⛔', lesson:1,
   explain:['Không làm theo, làm ngược lại với luật lệ, quy định, quy luật. Trái nghĩa với 遵守.'],
   usage:'违反 + 法律 / 规定 / 纪律 / 程序 / 规律 / 科学 (bảng 词语搭配); ……是违反……的.',
   collo:['违反纪律', '违反规定', '违反法律', '违反规律'],
   ex_zh:'亲爱的女儿竟然违反了乖乖女的各种规矩。', ex_py:'Qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', ex_vn:'Cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".',
   exList:[
     {zh:'亲爱的女儿竟然违反了乖乖女的各种规矩。', py:'Qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', vn:'Cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".'},
     {zh:'在公共场所抽烟是违反规定的。', py:'Zài gōnggòng chǎngsuǒ chōu yān shì wéifǎn guīdìng de.', vn:'Hút thuốc ở nơi công cộng là vi phạm quy định.'},
     {zh:'天天熬夜是违反身体规律的。', py:'Tiāntiān áoyè shì wéifǎn shēntǐ guīlǜ de.', vn:'Ngày nào cũng thức khuya là làm trái quy luật của cơ thể.'}
   ],
   colloFull:[
     {zh:'违反纪律', py:'wéifǎn jìlǜ', vn:'vi phạm kỷ luật'},
     {zh:'违反规定', py:'wéifǎn guīdìng', vn:'vi phạm quy định'},
     {zh:'违反法律', py:'wéifǎn fǎlǜ', vn:'vi phạm pháp luật'},
     {zh:'违反规律', py:'wéifǎn guīlǜ', vn:'làm trái quy luật'},
     {zh:'违反科学', py:'wéifǎn kēxué', vn:'phản khoa học'}
   ],
   patterns:[{s:'违反 + 纪律 / 规定 / 法律 / 规律', m:'Vi phạm, làm trái …'}, {s:'……是违反……的', m:'… là vi phạm … (nhận định)'}],
   checkList:[
     {promptLang:'vi', prompt:'Cậu ta vì vi phạm quy chế phòng thi nên bị huỷ tư cách dự thi.', answer:'他因为违反了考场纪律，被取消了考试资格。', answerPy:'Tā yīnwèi wéifǎnle kǎochǎng jìlǜ, bèi qǔxiāole kǎoshì zīgé.', note:'违反 + 纪律: không dùng 犯 với 纪律 trong câu này.', pair:'被'},
     {promptLang:'vi', prompt:'Ngày nào cũng thức khuya là làm trái quy luật của cơ thể.', answer:'天天熬夜是违反身体规律的。', answerPy:'Tiāntiān áoyè shì wéifǎn shēntǐ guīlǜ de.', note:'违反规律: bảng 词语搭配 của sách.', pair:'是……的'}
   ]},

  {n:11, zh:'规矩', py:'guīju', pos:'Danh từ / Tính từ', vn:'phép tắc, khuôn phép, nề nếp', hv:'quy củ', em:'📐', lesson:1,
   explain:['Danh từ: phép tắc, nề nếp, lệ (thường là thói quen, lễ nghi không thành văn trong gia đình, xã hội).', 'Tính từ: đàng hoàng, đúng mực — 规规矩矩.'],
   usage:'懂规矩 / 守规矩 / 有规矩 / 老规矩 / 立规矩; 违反 / 遵守 + 规矩.',
   collo:['懂规矩', '守规矩', '老规矩', '各种规矩'],
   ex_zh:'我儿子要是能这样懂规矩，该有多么好啊！', ex_py:'Wǒ érzi yàoshi néng zhèyàng dǒng guīju, gāi yǒu duōme hǎo a!', ex_vn:'Con trai tôi mà hiểu phép tắc được như thế thì tốt biết bao!',
   exList:[
     {zh:'我儿子要是能这样懂规矩，该有多么好啊！', py:'Wǒ érzi yàoshi néng zhèyàng dǒng guīju, gāi yǒu duōme hǎo a!', vn:'Con trai tôi mà hiểu phép tắc được như thế thì tốt biết bao!'},
     {zh:'亲爱的女儿竟然违反了乖乖女的各种规矩。', py:'Qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju.', vn:'Cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan".'},
     {zh:'按照我们家的老规矩，吃饭时长辈先动筷子。', py:'Ànzhào wǒmen jiā de lǎo guīju, chī fàn shí zhǎngbèi xiān dòng kuàizi.', vn:'Theo lệ cũ nhà tôi, khi ăn cơm người lớn cầm đũa trước.'}
   ],
   colloFull:[
     {zh:'懂规矩', py:'dǒng guīju', vn:'biết phép tắc'},
     {zh:'守规矩', py:'shǒu guīju', vn:'giữ phép tắc'},
     {zh:'老规矩', py:'lǎo guīju', vn:'lệ cũ, nếp cũ'},
     {zh:'各种规矩', py:'gè zhǒng guīju', vn:'đủ thứ phép tắc'},
     {zh:'规规矩矩', py:'guīguījǔjǔ', vn:'đàng hoàng, đúng mực'}
   ],
   patterns:[{s:'懂 / 守 / 违反 + 规矩', m:'Biết / giữ / phá phép tắc'}, {s:'按照 + … + 的老规矩', m:'Theo lệ cũ của …'}],
   checkList:[
     {promptLang:'vi', prompt:'Đứa trẻ này ngay cả phép tắc khi ăn cơm cũng không biết.', answer:'这孩子连吃饭的规矩都不懂。', answerPy:'Zhè háizi lián chī fàn de guīju dōu bù dǒng.', note:'懂规矩: kết hợp cố định (không nói 知道规矩).', pair:'连……都……'},
     {promptLang:'vi', prompt:'Chỉ cần giữ phép tắc, mọi người sẽ quý bạn.', answer:'只要守规矩，大家就会喜欢你。', answerPy:'Zhǐyào shǒu guīju, dàjiā jiù huì xǐhuan nǐ.', note:'守规矩 = 遵守规矩 (khẩu ngữ).', pair:'只要……就……'}
   ]},

  {n:12, zh:'能干', py:'nénggàn', pos:'Tính từ', vn:'giỏi giang, tháo vát', hv:'năng cán', em:'💪', lesson:1,
   explain:['Có năng lực làm việc, giải quyết việc thực tế giỏi. Nói về NĂNG LỰC LÀM VIỆC, không dùng cho "học giỏi" (学习好).'],
   usage:'很能干 / 能干的 + người (助手 / 主席 / 员工); 既能干又…….',
   collo:['很能干', '能干的助手', '既能干又漂亮', '能干的主席'],
   ex_zh:'那个小姑娘既能干又漂亮。', ex_py:'Nàge xiǎo gūniang jì nénggàn yòu piàoliang.', ex_vn:'Cô bé ấy vừa giỏi giang vừa xinh xắn.',
   exList:[
     {zh:'那个小姑娘既能干又漂亮。', py:'Nàge xiǎo gūniang jì nénggàn yòu piàoliang.', vn:'Cô bé ấy vừa giỏi giang vừa xinh xắn.'},
     {zh:'她越来越有自己的主见，越来越能干、独立了。', py:'Tā yuè lái yuè yǒu zìjǐ de zhǔjiàn, yuè lái yuè nénggàn, dúlì le.', vn:'Cô ấy ngày càng có chính kiến, ngày càng giỏi giang, độc lập.'},
     {zh:'小李是经理最能干的助手。', py:'Xiǎo Lǐ shì jīnglǐ zuì nénggàn de zhùshǒu.', vn:'Tiểu Lý là trợ lý giỏi nhất của giám đốc.'}
   ],
   colloFull:[
     {zh:'很能干', py:'hěn nénggàn', vn:'rất giỏi giang'},
     {zh:'能干的助手', py:'nénggàn de zhùshǒu', vn:'trợ lý đắc lực'},
     {zh:'既能干又漂亮', py:'jì nénggàn yòu piàoliang', vn:'vừa giỏi vừa xinh'},
     {zh:'能干的主席', py:'nénggàn de zhǔxí', vn:'vị chủ tịch giỏi giang'},
     {zh:'越来越能干', py:'yuè lái yuè nénggàn', vn:'ngày càng tháo vát'}
   ],
   patterns:[{s:'(很 / 非常) + 能干', m:'Rất giỏi giang'}, {s:'既 + 能干 + 又 + Adj', m:'Vừa giỏi giang vừa …'}],
   checkList:[
     {promptLang:'vi', prompt:'Cô ấy không những xinh đẹp mà còn rất giỏi giang.', answer:'她不仅漂亮，也很能干。', answerPy:'Tā bùjǐn piàoliang, yě hěn nénggàn.', note:'能干 là tính từ: có 很 đứng trước.', pair:'不仅……也……'},
     {promptLang:'vi', prompt:'Từ khi lên đại học, cậu ấy càng ngày càng tháo vát.', answer:'上大学以后，他越来越能干了。', answerPy:'Shàng dàxué yǐhòu, tā yuè lái yuè nénggàn le.', note:'Nói năng lực làm việc, tự lo liệu → 能干.', pair:'越来越'}
   ]},

  {n:13, zh:'讲座', py:'jiǎngzuò', pos:'Danh từ', vn:'buổi thuyết trình, toạ đàm chuyên đề', hv:'giảng toạ', em:'🎤', lesson:1,
   explain:['Buổi nói chuyện chuyên đề do chuyên gia, giáo sư trình bày cho nhiều người nghe (không phải "giảng đường").'],
   usage:'听讲座 / 举办讲座 / 做讲座 / 精彩的讲座 / 学术讲座; lượng từ 场 / 个 / 次.',
   collo:['听讲座', '举办讲座', '精彩的讲座', '一场讲座'],
   ex_zh:'她逃课去听各种讲座。', ex_py:'Tā táo kè qù tīng gè zhǒng jiǎngzuò.', ex_vn:'Cô ấy trốn học để đi nghe đủ loại buổi thuyết trình.',
   exList:[
     {zh:'她逃课去听各种讲座。', py:'Tā táo kè qù tīng gè zhǒng jiǎngzuò.', vn:'Cô ấy trốn học để đi nghe đủ loại buổi thuyết trình.'},
     {zh:'学校下周要举办一场关于留学的讲座。', py:'Xuéxiào xià zhōu yào jǔbàn yì chǎng guānyú liúxué de jiǎngzuò.', vn:'Tuần sau nhà trường sẽ tổ chức một buổi toạ đàm về du học.'},
     {zh:'这场讲座讲得太精彩了，大家都舍不得走。', py:'Zhè chǎng jiǎngzuò jiǎng de tài jīngcǎi le, dàjiā dōu shěbude zǒu.', vn:'Buổi thuyết trình này hay quá, ai cũng không nỡ về.'}
   ],
   colloFull:[
     {zh:'听讲座', py:'tīng jiǎngzuò', vn:'nghe thuyết trình'},
     {zh:'举办讲座', py:'jǔbàn jiǎngzuò', vn:'tổ chức toạ đàm'},
     {zh:'精彩的讲座', py:'jīngcǎi de jiǎngzuò', vn:'buổi thuyết trình hay'},
     {zh:'一场讲座', py:'yì chǎng jiǎngzuò', vn:'một buổi toạ đàm'},
     {zh:'学术讲座', py:'xuéshù jiǎngzuò', vn:'toạ đàm học thuật'}
   ],
   patterns:[{s:'听 / 举办 / 做 + 讲座', m:'Nghe / tổ chức / trình bày một buổi toạ đàm'}, {s:'一场关于 + chủ đề + 的讲座', m:'Một buổi toạ đàm về …'}],
   checkList:[
     {promptLang:'vi', prompt:'Buổi toạ đàm hôm qua là do một giáo sư Bắc Kinh trình bày.', answer:'昨天的讲座是北京的一位教授做的。', answerPy:'Zuótiān de jiǎngzuò shì Běijīng de yí wèi jiàoshòu zuò de.', note:'做讲座 = trình bày buổi toạ đàm (người nói); 听讲座 = người nghe.', pair:'是……的'},
     {promptLang:'vi', prompt:'Buổi thuyết trình hay đến mức ai cũng không nỡ về.', answer:'讲座精彩得大家都舍不得走。', answerPy:'Jiǎngzuò jīngcǎi de dàjiā dōu shěbude zǒu.', note:'精彩的讲座 / 讲座很精彩.', pair:'Adj + 得 + bổ ngữ trạng thái'}
   ]},

  {n:14, zh:'出席', py:'chūxí', pos:'Động từ', vn:'có mặt, dự (hội nghị, buổi lễ)', hv:'xuất tịch', em:'🎩', lesson:1,
   explain:['Có mặt tại một cuộc họp, buổi lễ, bữa tiệc chính thức. Trang trọng hơn 参加.'],
   usage:'出席 + 会议 / 宴会 / 典礼 / 酒会 / 开幕式 / 活动. Không dùng cho việc thường ngày (không nói 出席上课).',
   collo:['出席会议', '出席宴会', '出席酒会', '出席开幕式'],
   ex_zh:'她出席欧盟商会的鸡尾酒会，做志愿者，拍电影。', ex_py:'Tā chūxí Ōuméng shānghuì de jīwěijiǔ huì, zuò zhìyuànzhě, pāi diànyǐng.', ex_vn:'Cô ấy dự tiệc cocktail của Phòng Thương mại EU, làm tình nguyện viên, quay phim.',
   exList:[
     {zh:'她出席欧盟商会的鸡尾酒会，做志愿者，拍电影。', py:'Tā chūxí Ōuméng shānghuì de jīwěijiǔ huì, zuò zhìyuànzhě, pāi diànyǐng.', vn:'Cô ấy dự tiệc cocktail của Phòng Thương mại EU, làm tình nguyện viên, quay phim.'},
     {zh:'校长将出席明天的毕业典礼。', py:'Xiàozhǎng jiāng chūxí míngtiān de bìyè diǎnlǐ.', vn:'Hiệu trưởng sẽ có mặt tại lễ tốt nghiệp ngày mai.'},
     {zh:'有三百多位客人出席了这次宴会。', py:'Yǒu sānbǎi duō wèi kèrén chūxíle zhè cì yànhuì.', vn:'Có hơn ba trăm vị khách đã dự bữa tiệc lần này.'}
   ],
   colloFull:[
     {zh:'出席会议', py:'chūxí huìyì', vn:'dự hội nghị'},
     {zh:'出席宴会', py:'chūxí yànhuì', vn:'dự tiệc'},
     {zh:'出席酒会', py:'chūxí jiǔhuì', vn:'dự tiệc rượu'},
     {zh:'出席开幕式', py:'chūxí kāimùshì', vn:'dự lễ khai mạc'},
     {zh:'出席典礼', py:'chūxí diǎnlǐ', vn:'dự buổi lễ'}
   ],
   patterns:[{s:'出席 + 会议 / 宴会 / 典礼', m:'Dự (sự kiện trang trọng)'}],
   checkList:[
     {promptLang:'vi', prompt:'Hiệu trưởng không những dự lễ khai mạc mà còn phát biểu.', answer:'校长不仅出席了开幕式，还发表了讲话。', answerPy:'Xiàozhǎng bùjǐn chūxíle kāimùshì, hái fābiǎole jiǎnghuà.', note:'出席 + 开幕式: sự kiện trang trọng.', pair:'不仅……还……'},
     {promptLang:'vi', prompt:'Cuộc họp này rất quan trọng, ngay cả tổng giám đốc cũng tham dự.', answer:'这次会议很重要，连总经理都出席了。', answerPy:'Zhè cì huìyì hěn zhòngyào, lián zǒngjīnglǐ dōu chūxí le.', note:'出席 có thể không mang tân ngữ khi đã rõ sự kiện.', pair:'连……都……'}
   ]},

  {n:15, zh:'酒吧', py:'jiǔbā', pos:'Danh từ', vn:'quán bar', hv:'tửu ba', em:'🍸', lesson:1,
   explain:['Quán bán rượu, đồ uống (phiên âm từ "bar"). 吧 này còn gặp trong 网吧 (quán net), 书吧, 茶吧. 泡酒吧 = la cà quán bar (khẩu ngữ).'],
   usage:'去 / 泡 + 酒吧; 酒吧街; 一家酒吧.',
   collo:['泡酒吧', '去酒吧', '酒吧街', '一家酒吧'],
   ex_zh:'她拍电影，学摄影，泡酒吧，参加了学生会。', ex_py:'Tā pāi diànyǐng, xué shèyǐng, pào jiǔbā, cānjiāle xuéshēnghuì.', ex_vn:'Cô ấy quay phim, học nhiếp ảnh, la cà quán bar, tham gia hội sinh viên.',
   exList:[
     {zh:'她拍电影，学摄影，泡酒吧，参加了学生会。', py:'Tā pāi diànyǐng, xué shèyǐng, pào jiǔbā, cānjiāle xuéshēnghuì.', vn:'Cô ấy quay phim, học nhiếp ảnh, la cà quán bar, tham gia hội sinh viên.'},
     {zh:'周末晚上，这条酒吧街特别热闹。', py:'Zhōumò wǎnshang, zhè tiáo jiǔbā jiē tèbié rènao.', vn:'Tối cuối tuần, con phố quán bar này đặc biệt náo nhiệt.'},
     {zh:'爸爸不喜欢我去酒吧，他觉得那里太吵了。', py:'Bàba bù xǐhuan wǒ qù jiǔbā, tā juéde nàli tài chǎo le.', vn:'Bố không thích tôi đến quán bar, bố thấy ở đó ồn quá.'}
   ],
   colloFull:[
     {zh:'泡酒吧', py:'pào jiǔbā', vn:'la cà quán bar'},
     {zh:'去酒吧', py:'qù jiǔbā', vn:'đi quán bar'},
     {zh:'酒吧街', py:'jiǔbā jiē', vn:'phố quán bar'},
     {zh:'一家酒吧', py:'yì jiā jiǔbā', vn:'một quán bar'}
   ],
   patterns:[{s:'泡 + 酒吧 / 网吧', m:'La cà, ngồi lì ở quán bar / quán net (khẩu ngữ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Học sinh cấp ba là không được vào quán bar.', answer:'高中生是不能去酒吧的。', answerPy:'Gāozhōngshēng shì bù néng qù jiǔbā de.', note:'Lượng từ của 酒吧 là 家.', pair:'是……的'},
     {promptLang:'vi', prompt:'Bố vừa nghe nói tôi đi quán bar liền nổi giận.', answer:'爸爸一听说我去了酒吧，就生气了。', answerPy:'Bàba yì tīngshuō wǒ qùle jiǔbā, jiù shēng qì le.', note:'去酒吧 (khẩu ngữ: 泡酒吧).', pair:'一……就……'}
   ]},

  {n:16, zh:'担任', py:'dānrèn', pos:'Động từ', vn:'đảm nhiệm, giữ (chức vụ)', hv:'đảm nhiệm', em:'🧑‍💼', lesson:1,
   explain:['Nhận và làm một chức vụ, một công việc nào đó. Tân ngữ là CHỨC VỤ hoặc công việc.'],
   usage:'担任 + 主席 / 经理 / 班长 / 翻译 / 队长 / 老师; 担任……工作.',
   collo:['担任主席', '担任经理', '担任班长', '担任翻译'],
   ex_zh:'她参加了学生会并担任了学生会主席。', ex_py:'Tā cānjiāle xuéshēnghuì bìng dānrènle xuéshēnghuì zhǔxí.', ex_vn:'Cô ấy tham gia hội sinh viên và làm chủ tịch hội sinh viên.',
   exList:[
     {zh:'她参加了学生会并担任了学生会主席。', py:'Tā cānjiāle xuéshēnghuì bìng dānrènle xuéshēnghuì zhǔxí.', vn:'Cô ấy tham gia hội sinh viên và làm chủ tịch hội sinh viên.'},
     {zh:'他在这家公司担任经理已经五年了。', py:'Tā zài zhè jiā gōngsī dānrèn jīnglǐ yǐjīng wǔ nián le.', vn:'Anh ấy giữ chức giám đốc ở công ty này đã năm năm rồi.'},
     {zh:'这次比赛由我担任翻译。', py:'Zhè cì bǐsài yóu wǒ dānrèn fānyì.', vn:'Cuộc thi lần này do tôi làm phiên dịch.'}
   ],
   colloFull:[
     {zh:'担任主席', py:'dānrèn zhǔxí', vn:'làm chủ tịch'},
     {zh:'担任经理', py:'dānrèn jīnglǐ', vn:'giữ chức giám đốc'},
     {zh:'担任班长', py:'dānrèn bānzhǎng', vn:'làm lớp trưởng'},
     {zh:'担任翻译', py:'dānrèn fānyì', vn:'làm phiên dịch'},
     {zh:'担任……工作', py:'dānrèn…… gōngzuò', vn:'đảm nhận công việc …'}
   ],
   patterns:[{s:'担任 + chức vụ', m:'Giữ chức …, làm …'}, {s:'由 + người + 担任 + chức vụ', m:'Do ai đảm nhiệm'}],
   checkList:[
     {promptLang:'vi', prompt:'Cậu ấy được các bạn chọn ra làm lớp trưởng.', answer:'他被同学们选出来担任班长。', answerPy:'Tā bèi tóngxuémen xuǎn chulai dānrèn bānzhǎng.', note:'担任 + chức vụ (班长).', pair:'被'},
     {promptLang:'vi', prompt:'Bà ấy bắt đầu giữ chức giám đốc công ty này từ năm ngoái.', answer:'她是从去年开始担任这家公司的经理的。', answerPy:'Tā shì cóng qùnián kāishǐ dānrèn zhè jiā gōngsī de jīnglǐ de.', note:'Nhấn mạnh thời gian bắt đầu → 是……的.', pair:'是……的'}
   ]},

  {n:17, zh:'主席', py:'zhǔxí', pos:'Danh từ', vn:'chủ tịch', hv:'chủ tịch', em:'🏛️', lesson:1,
   explain:['Người đứng đầu một tổ chức, một hội (学生会主席), hoặc người chủ trì cuộc họp; cũng dùng cho chức vụ nhà nước (国家主席).'],
   usage:'学生会主席 / 国家主席 / 大会主席; 担任 / 当 + 主席.',
   collo:['学生会主席', '担任主席', '当主席', '国家主席'],
   ex_zh:'大学期间，我曾经当过学生会主席。', ex_py:'Dàxué qījiān, wǒ céngjīng dāngguo xuéshēnghuì zhǔxí.', ex_vn:'Thời đại học, tôi từng làm chủ tịch hội sinh viên.',
   exList:[
     {zh:'大学期间，我曾经当过学生会主席。', py:'Dàxué qījiān, wǒ céngjīng dāngguo xuéshēnghuì zhǔxí.', vn:'Thời đại học, tôi từng làm chủ tịch hội sinh viên.'},
     {zh:'她参加了学生会并担任了学生会主席。', py:'Tā cānjiāle xuéshēnghuì bìng dānrènle xuéshēnghuì zhǔxí.', vn:'Cô ấy tham gia hội sinh viên và làm chủ tịch hội sinh viên.'},
     {zh:'新主席很能干，大家都很支持她。', py:'Xīn zhǔxí hěn nénggàn, dàjiā dōu hěn zhīchí tā.', vn:'Chủ tịch mới rất giỏi giang, mọi người đều ủng hộ cô ấy.'}
   ],
   colloFull:[
     {zh:'学生会主席', py:'xuéshēnghuì zhǔxí', vn:'chủ tịch hội sinh viên'},
     {zh:'担任主席', py:'dānrèn zhǔxí', vn:'giữ chức chủ tịch'},
     {zh:'当主席', py:'dāng zhǔxí', vn:'làm chủ tịch'},
     {zh:'国家主席', py:'guójiā zhǔxí', vn:'chủ tịch nước'},
     {zh:'能干的主席', py:'nénggàn de zhǔxí', vn:'vị chủ tịch giỏi giang'}
   ],
   patterns:[{s:'当 / 担任 + (tổ chức) + 主席', m:'Làm chủ tịch (của …)'}],
   checkList:[
     {promptLang:'vi', prompt:'Tôi chưa bao giờ làm chủ tịch hội sinh viên.', answer:'我从来没当过学生会主席。', answerPy:'Wǒ cónglái méi dāngguo xuéshēnghuì zhǔxí.', note:'当 + 主席 (khẩu ngữ) = 担任主席 (văn viết).', pair:'从来没……过'},
     {promptLang:'vi', prompt:'Cậu ấy vừa lên đại học đã làm chủ tịch hội sinh viên.', answer:'他一上大学就当上了学生会主席。', answerPy:'Tā yí shàng dàxué jiù dāngshàngle xuéshēnghuì zhǔxí.', note:'当上 = đạt được chức vụ.', pair:'一……就……'}
   ]},

  {n:18, zh:'组织', py:'zǔzhī', pos:'Động từ / Danh từ', vn:'tổ chức', hv:'tổ chức', em:'🎪', lesson:1,
   explain:['Động từ: sắp xếp, tập hợp người để làm một việc (活动, 比赛, 会议).', 'Danh từ: một tổ chức, đoàn thể (国际组织).'],
   usage:'组织 + 活动 / 比赛 / 会议 / 学生; 组织能力; 国际组织.',
   collo:['组织活动', '组织比赛', '组织能力', '国际组织'],
   ex_zh:'她还组织各种社会活动。', ex_py:'Tā hái zǔzhī gè zhǒng shèhuì huódòng.', ex_vn:'Cô ấy còn tổ chức đủ loại hoạt động xã hội.',
   exList:[
     {zh:'她还组织各种社会活动。', py:'Tā hái zǔzhī gè zhǒng shèhuì huódòng.', vn:'Cô ấy còn tổ chức đủ loại hoạt động xã hội.'},
     {zh:'班长组织全班同学去公园打扫卫生。', py:'Bānzhǎng zǔzhī quán bān tóngxué qù gōngyuán dǎsǎo wèishēng.', vn:'Lớp trưởng tổ chức cả lớp đi dọn vệ sinh công viên.'},
     {zh:'她的组织能力很强，活动总是办得很成功。', py:'Tā de zǔzhī nénglì hěn qiáng, huódòng zǒngshì bàn de hěn chénggōng.', vn:'Khả năng tổ chức của cô ấy rất tốt, hoạt động lúc nào cũng thành công.'}
   ],
   colloFull:[
     {zh:'组织活动', py:'zǔzhī huódòng', vn:'tổ chức hoạt động'},
     {zh:'组织比赛', py:'zǔzhī bǐsài', vn:'tổ chức cuộc thi'},
     {zh:'组织能力', py:'zǔzhī nénglì', vn:'khả năng tổ chức'},
     {zh:'国际组织', py:'guójì zǔzhī', vn:'tổ chức quốc tế'},
     {zh:'组织会议', py:'zǔzhī huìyì', vn:'tổ chức cuộc họp'}
   ],
   patterns:[{s:'组织 + người + V', m:'Tổ chức cho ai làm gì'}, {s:'组织 + 活动 / 比赛 / 会议', m:'Tổ chức một sự kiện'}],
   checkList:[
     {promptLang:'vi', prompt:'Chuyến dã ngoại mùa xuân lần này là do lớp trưởng tổ chức.', answer:'这次春游是班长组织的。', answerPy:'Zhè cì chūnyóu shì bānzhǎng zǔzhī de.', note:'组织 làm động từ, nhấn mạnh người tổ chức.', pair:'是……的'},
     {promptLang:'vi', prompt:'Nhà trường không những tổ chức thi bóng rổ mà còn tổ chức thi hát.', answer:'学校不仅组织了篮球比赛，还组织了唱歌比赛。', answerPy:'Xuéxiào bùjǐn zǔzhīle lánqiú bǐsài, hái zǔzhīle chàng gē bǐsài.', note:'组织 + 比赛: kết hợp thường gặp.', pair:'不仅……还……'}
   ]},

  {n:19, zh:'外交', py:'wàijiāo', pos:'Danh từ', vn:'ngoại giao', hv:'ngoại giao', em:'🌐', lesson:1,
   explain:['Quan hệ, hoạt động giữa các nước với nhau. 外交官 = nhà ngoại giao.'],
   usage:'外交官 / 外交部 / 外交关系 / 外交政策; 建立外交关系.',
   collo:['外交官', '外交部', '外交关系', '外交活动'],
   ex_zh:'妈妈以前要她当外交官的计划，在她眼里“实在没什么意思”。', ex_py:'Māma yǐqián yào tā dāng wàijiāoguān de jìhuà, zài tā yǎn li “shízài méi shénme yìsi”.', ex_vn:'Kế hoạch muốn cô làm nhà ngoại giao trước đây của mẹ, trong mắt cô "thật chẳng có ý nghĩa gì".',
   exList:[
     {zh:'妈妈以前要她当外交官的计划，在她眼里“实在没什么意思”。', py:'Māma yǐqián yào tā dāng wàijiāoguān de jìhuà, zài tā yǎn li “shízài méi shénme yìsi”.', vn:'Kế hoạch muốn cô làm nhà ngoại giao trước đây của mẹ, trong mắt cô "thật chẳng có ý nghĩa gì".'},
     {zh:'越南和中国是1950年建立外交关系的。', py:'Yuènán hé Zhōngguó shì yī jiǔ wǔ líng nián jiànlì wàijiāo guānxi de.', vn:'Việt Nam và Trung Quốc thiết lập quan hệ ngoại giao năm 1950.'},
     {zh:'他爸爸在外交部工作，经常出国。', py:'Tā bàba zài Wàijiāobù gōngzuò, jīngcháng chū guó.', vn:'Bố cậu ấy làm ở Bộ Ngoại giao, thường xuyên ra nước ngoài.'}
   ],
   colloFull:[
     {zh:'外交官', py:'wàijiāoguān', vn:'nhà ngoại giao'},
     {zh:'外交部', py:'Wàijiāobù', vn:'Bộ Ngoại giao'},
     {zh:'外交关系', py:'wàijiāo guānxi', vn:'quan hệ ngoại giao'},
     {zh:'外交活动', py:'wàijiāo huódòng', vn:'hoạt động ngoại giao'},
     {zh:'建立外交关系', py:'jiànlì wàijiāo guānxi', vn:'thiết lập quan hệ ngoại giao'}
   ],
   patterns:[{s:'当 + 外交官', m:'Làm nhà ngoại giao'}, {s:'(A 和 B) + 建立外交关系', m:'Hai nước thiết lập quan hệ ngoại giao'}],
   checkList:[
     {promptLang:'vi', prompt:'Việt Nam và Trung Quốc thiết lập quan hệ ngoại giao năm 1950.', answer:'越南和中国是1950年建立外交关系的。', answerPy:'Yuènán hé Zhōngguó shì yī jiǔ wǔ líng nián jiànlì wàijiāo guānxi de.', note:'建立 + 外交关系: kết hợp cố định.', pair:'是……的'},
     {promptLang:'vi', prompt:'Làm nhà ngoại giao không những phải giỏi ngoại ngữ, mà còn phải giỏi giao tiếp.', answer:'当外交官不仅要外语好，也要善于沟通。', answerPy:'Dāng wàijiāoguān bùjǐn yào wàiyǔ hǎo, yě yào shànyú gōutōng.', note:'外交官: 外交 + 官 (quan chức).', pair:'不仅……也……'}
   ]},

  {n:20, zh:'经商', py:'jīng shāng', pos:'Động từ', vn:'kinh doanh, buôn bán', hv:'kinh thương', em:'💼', lesson:1,
   explain:['Làm nghề buôn bán, kinh doanh (cách nói văn viết, khái quát). Không mang tân ngữ; muốn nói buôn mặt hàng gì thì dùng 做……生意.'],
   usage:'下海经商 / 在外经商 / 经商的经验 / 经商的头脑. Không nói 经商衣服 → 做衣服生意.',
   collo:['下海经商', '在外经商', '经商的经验', '经商的头脑'],
   ex_zh:'她觉得经商才是自己的目标。', ex_py:'Tā juéde jīng shāng cái shì zìjǐ de mùbiāo.', ex_vn:'Cô ấy thấy kinh doanh mới là mục tiêu của mình.',
   exList:[
     {zh:'她觉得经商才是自己的目标。', py:'Tā juéde jīng shāng cái shì zìjǐ de mùbiāo.', vn:'Cô ấy thấy kinh doanh mới là mục tiêu của mình.'},
     {zh:'他爷爷年轻时在外经商，很少回家。', py:'Tā yéye niánqīng shí zài wài jīng shāng, hěn shǎo huí jiā.', vn:'Ông nội cậu ấy hồi trẻ đi buôn bán xa, rất ít khi về nhà.'},
     {zh:'她很有经商的头脑，大学还没毕业就开了一家网店。', py:'Tā hěn yǒu jīng shāng de tóunǎo, dàxué hái méi bìyè jiù kāile yì jiā wǎngdiàn.', vn:'Cô ấy rất có đầu óc kinh doanh, chưa tốt nghiệp đại học đã mở một cửa hàng online.'}
   ],
   colloFull:[
     {zh:'下海经商', py:'xià hǎi jīng shāng', vn:'bỏ việc nhà nước ra kinh doanh'},
     {zh:'在外经商', py:'zài wài jīng shāng', vn:'buôn bán ở xa'},
     {zh:'经商的经验', py:'jīng shāng de jīngyàn', vn:'kinh nghiệm kinh doanh'},
     {zh:'经商的头脑', py:'jīng shāng de tóunǎo', vn:'đầu óc kinh doanh'}
   ],
   patterns:[{s:'(在 + nơi) + 经商', m:'Kinh doanh (ở đâu)'}, {s:'经商 ≈ 做生意', m:'经商 văn viết, khái quát; 做……生意 cụ thể mặt hàng'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy bố mẹ muốn cô ấy làm giáo viên, nhưng cô ấy thấy kinh doanh mới là mục tiêu của mình.', answer:'虽然父母希望她当老师，但是她觉得经商才是自己的目标。', answerPy:'Suīrán fùmǔ xīwàng tā dāng lǎoshī, dànshì tā juéde jīng shāng cái shì zìjǐ de mùbiāo.', note:'经商 làm chủ ngữ; 才是 nhấn mạnh.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Ông nội tôi hồi trẻ từng buôn bán ở nước ngoài.', answer:'我爷爷年轻的时候曾经在国外经商。', answerPy:'Wǒ yéye niánqīng de shíhou céngjīng zài guówài jīng shāng.', note:'经商 không mang tân ngữ.', pair:'曾经'}
   ]},

  {n:21, zh:'目标', py:'mùbiāo', pos:'Danh từ', vn:'mục tiêu', hv:'mục tiêu', em:'🎯', lesson:1,
   explain:['Cái đích cụ thể mà mình muốn đạt tới (trong học tập, công việc, cuộc đời); cũng là mục tiêu để bắn, để tấn công.'],
   usage:'实现 / 达到 / 确定 + 目标; 目标 + 清楚 / 远大 / 一致 / 坚定 / 实现 (bảng 词语搭配); 人生目标.',
   collo:['实现目标', '远大的目标', '目标一致', '人生目标'],
   ex_zh:'我的目标是被名牌大学录取。', ex_py:'Wǒ de mùbiāo shì bèi míngpái dàxué lùqǔ.', ex_vn:'Mục tiêu của tôi là được một trường đại học danh tiếng nhận vào.',
   exList:[
     {zh:'我的目标是被名牌大学录取。', py:'Wǒ de mùbiāo shì bèi míngpái dàxué lùqǔ.', vn:'Mục tiêu của tôi là được một trường đại học danh tiếng nhận vào.'},
     {zh:'她觉得经商才是自己的目标。', py:'Tā juéde jīng shāng cái shì zìjǐ de mùbiāo.', vn:'Cô ấy thấy kinh doanh mới là mục tiêu của mình.'},
     {zh:'大家的目标从来都是一致的，都是为了公司好。', py:'Dàjiā de mùbiāo cónglái dōu shì yízhì de, dōu shì wèile gōngsī hǎo.', vn:'Mục tiêu của mọi người trước giờ vẫn thống nhất, đều là vì công ty.'}
   ],
   colloFull:[
     {zh:'实现目标', py:'shíxiàn mùbiāo', vn:'thực hiện mục tiêu'},
     {zh:'远大的目标', py:'yuǎndà de mùbiāo', vn:'mục tiêu lớn lao'},
     {zh:'目标一致', py:'mùbiāo yízhì', vn:'mục tiêu thống nhất'},
     {zh:'人生目标', py:'rénshēng mùbiāo', vn:'mục tiêu cuộc đời'},
     {zh:'目标清楚', py:'mùbiāo qīngchu', vn:'mục tiêu rõ ràng'}
   ],
   patterns:[{s:'(Chủ ngữ) + 的目标 + 是 + V / N', m:'Mục tiêu của ai là …'}, {s:'实现 / 达到 + 目标', m:'Đạt được mục tiêu'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần mục tiêu rõ ràng, bạn sẽ không thấy mệt.', answer:'只要目标清楚，你就不会觉得累。', answerPy:'Zhǐyào mùbiāo qīngchu, nǐ jiù bú huì juéde lèi.', note:'目标 + 清楚: chủ ngữ + vị ngữ (bảng 词语搭配).', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Để thực hiện mục tiêu này, ngày nào cậu ấy cũng học đến mười một giờ.', answer:'为了实现这个目标，他每天都学习到十一点。', answerPy:'Wèile shíxiàn zhège mùbiāo, tā měi tiān dōu xuéxí dào shíyī diǎn.', note:'实现目标 (không nói 实现目的).', pair:'为了……'}
   ]},

  {n:22, zh:'系', py:'xì', pos:'Danh từ', vn:'khoa (của trường đại học)', hv:'hệ', em:'🏫', lesson:1,
   explain:['Đơn vị đào tạo theo ngành trong trường đại học (khoa). Chữ 系 này cũng có trong 关系, 联系 (nghĩa "liên hệ").'],
   usage:'中文系 / 经济系 / 外语系 / 本系 / 系主任; 念 / 上 + … 系.',
   collo:['中文系', '本系', '系主任', '外语系'],
   ex_zh:'她放弃了本系保送研究生。', ex_py:'Tā fàngqìle běn xì bǎosòng yánjiūshēng.', ex_vn:'Cô ấy từ bỏ suất được khoa tuyển thẳng lên cao học.',
   exList:[
     {zh:'她放弃了本系保送研究生。', py:'Tā fàngqìle běn xì bǎosòng yánjiūshēng.', vn:'Cô ấy từ bỏ suất được khoa tuyển thẳng lên cao học.'},
     {zh:'我姐姐是河内国家大学中文系的学生。', py:'Wǒ jiějie shì Hénèi Guójiā Dàxué Zhōngwén xì de xuésheng.', vn:'Chị tôi là sinh viên khoa tiếng Trung Đại học Quốc gia Hà Nội.'},
     {zh:'系主任让我们下午去开会。', py:'Xì zhǔrèn ràng wǒmen xiàwǔ qù kāi huì.', vn:'Trưởng khoa bảo chúng tôi chiều đi họp.'}
   ],
   colloFull:[
     {zh:'中文系', py:'Zhōngwén xì', vn:'khoa tiếng Trung'},
     {zh:'本系', py:'běn xì', vn:'khoa mình, khoa này'},
     {zh:'系主任', py:'xì zhǔrèn', vn:'trưởng khoa'},
     {zh:'外语系', py:'wàiyǔ xì', vn:'khoa ngoại ngữ'},
     {zh:'经济系', py:'jīngjì xì', vn:'khoa kinh tế'}
   ],
   patterns:[{s:'ngành + 系', m:'Khoa … (中文系, 经济系)'}, {s:'……系的学生', m:'Sinh viên khoa …'}],
   checkList:[
     {promptLang:'vi', prompt:'Chị tôi học không phải khoa kinh tế, mà là khoa tiếng Trung.', answer:'我姐姐念的不是经济系，而是中文系。', answerPy:'Wǒ jiějie niàn de bú shì jīngjì xì, ér shì Zhōngwén xì.', note:'Tên ngành + 系.', pair:'不是……而是……'},
     {promptLang:'vi', prompt:'Trưởng khoa bảo chúng tôi viết xong luận văn trước tháng năm.', answer:'系主任让我们五月以前把论文写完。', answerPy:'Xì zhǔrèn ràng wǒmen wǔ yuè yǐqián bǎ lùnwén xiěwán.', note:'系主任 = trưởng khoa.', pair:'把'}
   ]},

  {n:23, zh:'名牌', py:'míngpái', pos:'Danh từ', vn:'hàng hiệu, thương hiệu nổi tiếng', hv:'danh bài', em:'🏷️', lesson:1,
   explain:['Nhãn hiệu nổi tiếng (hàng hiệu). Nghĩa rộng: trường, cơ sở có danh tiếng — 名牌大学 = trường đại học danh tiếng.'],
   usage:'名牌 + 大学 / 衣服 / 包 / 产品; 穿名牌; 世界名牌.',
   collo:['名牌大学', '名牌衣服', '穿名牌', '世界名牌'],
   ex_zh:'结果12所世界名牌大学录取了她。', ex_py:'Jiéguǒ shí’èr suǒ shìjiè míngpái dàxué lùqǔle tā.', ex_vn:'Kết quả là 12 trường đại học danh tiếng thế giới đã nhận cô ấy.',
   exList:[
     {zh:'结果12所世界名牌大学录取了她。', py:'Jiéguǒ shí’èr suǒ shìjiè míngpái dàxué lùqǔle tā.', vn:'Kết quả là 12 trường đại học danh tiếng thế giới đã nhận cô ấy.'},
     {zh:'我的目标是被名牌大学录取。', py:'Wǒ de mùbiāo shì bèi míngpái dàxué lùqǔ.', vn:'Mục tiêu của tôi là được một trường đại học danh tiếng nhận vào.'},
     {zh:'她从来不买名牌衣服，她觉得舒服最重要。', py:'Tā cónglái bù mǎi míngpái yīfu, tā juéde shūfu zuì zhòngyào.', vn:'Cô ấy không bao giờ mua quần áo hàng hiệu, cô thấy thoải mái là quan trọng nhất.'}
   ],
   colloFull:[
     {zh:'名牌大学', py:'míngpái dàxué', vn:'đại học danh tiếng'},
     {zh:'名牌衣服', py:'míngpái yīfu', vn:'quần áo hàng hiệu'},
     {zh:'穿名牌', py:'chuān míngpái', vn:'mặc đồ hiệu'},
     {zh:'世界名牌', py:'shìjiè míngpái', vn:'thương hiệu nổi tiếng thế giới'}
   ],
   patterns:[{s:'名牌 + N (大学 / 衣服 / 产品)', m:'… danh tiếng, … hàng hiệu'}],
   checkList:[
     {promptLang:'vi', prompt:'Cô ấy chưa bao giờ mua quần áo hàng hiệu.', answer:'她从来没买过名牌衣服。', answerPy:'Tā cónglái méi mǎiguo míngpái yīfu.', note:'名牌 đứng trước danh từ làm định ngữ, không cần 的.', pair:'从来没……过'},
     {promptLang:'vi', prompt:'Được trường đại học danh tiếng nhận vào là mục tiêu của tôi.', answer:'被名牌大学录取是我的目标。', answerPy:'Bèi míngpái dàxué lùqǔ shì wǒ de mùbiāo.', note:'名牌大学 — câu 30 sách bài tập.', pair:'被'}
   ]},

  {n:24, zh:'录取', py:'lùqǔ', pos:'Động từ', vn:'tuyển chọn, nhận vào (học, làm)', hv:'lục thủ', em:'📩', lesson:1,
   explain:['Trường học, cơ quan chọn và nhận người sau khi thi, xét tuyển. Hay dùng với 被: 被……录取.'],
   usage:'被 + trường + 录取; 录取 + người; 录取通知书 (giấy báo trúng tuyển); 录取分数线.',
   collo:['被……录取', '录取通知书', '录取了她', '录取分数线'],
   ex_zh:'结果12所世界名牌大学录取了她。', ex_py:'Jiéguǒ shí’èr suǒ shìjiè míngpái dàxué lùqǔle tā.', ex_vn:'Kết quả là 12 trường đại học danh tiếng thế giới đã nhận cô ấy.',
   exList:[
     {zh:'结果12所世界名牌大学录取了她。', py:'Jiéguǒ shí’èr suǒ shìjiè míngpái dàxué lùqǔle tā.', vn:'Kết quả là 12 trường đại học danh tiếng thế giới đã nhận cô ấy.'},
     {zh:'能被牛津大学这样的世界名校录取多好啊！', py:'Néng bèi Niújīn Dàxué zhèyàng de shìjiè míngxiào lùqǔ duō hǎo a!', vn:'Được một trường danh tiếng thế giới như Đại học Oxford nhận thì tốt biết bao!'},
     {zh:'我昨天收到了大学的录取通知书。', py:'Wǒ zuótiān shōudàole dàxué de lùqǔ tōngzhīshū.', vn:'Hôm qua tôi đã nhận được giấy báo trúng tuyển đại học.'}
   ],
   colloFull:[
     {zh:'被……录取', py:'bèi…… lùqǔ', vn:'được … nhận vào'},
     {zh:'录取通知书', py:'lùqǔ tōngzhīshū', vn:'giấy báo trúng tuyển'},
     {zh:'录取了她', py:'lùqǔle tā', vn:'đã nhận cô ấy'},
     {zh:'录取分数线', py:'lùqǔ fēnshùxiàn', vn:'điểm chuẩn'}
   ],
   patterns:[{s:'被 + trường / công ty + 录取', m:'Được … tuyển, nhận vào'}, {s:'trường + 录取 + người', m:'Trường nhận ai'}],
   checkList:[
     {promptLang:'vi', prompt:'Anh trai tôi được Đại học Bắc Kinh nhận rồi!', answer:'我哥哥被北京大学录取了！', answerPy:'Wǒ gēge bèi Běijīng Dàxué lùqǔ le!', note:'被 + trường + 录取: mẫu câu thường gặp nhất.', pair:'被'},
     {promptLang:'vi', prompt:'Hôm qua vừa nhận được giấy báo trúng tuyển, cả nhà liền đi ăn một bữa.', answer:'昨天一收到录取通知书，全家就出去吃了一顿饭。', answerPy:'Zuótiān yì shōudào lùqǔ tōngzhīshū, quán jiā jiù chūqu chīle yí dùn fàn.', note:'录取通知书 = giấy báo trúng tuyển.', pair:'一……就……'}
   ]},

  {n:25, zh:'面临', py:'miànlín', pos:'Động từ', vn:'đối mặt, đứng trước', hv:'diện lâm', em:'🧗', lesson:1,
   explain:['Đang ở trước một tình huống (thường là khó khăn, lựa chọn, thử thách) phải giải quyết. Hay đi với 着: 面临着.'],
   usage:'面临 + 选择 / 困难 / 危机 / 问题 / 挑战 / 压力; 当面临……时.',
   collo:['面临选择', '面临危机', '面临困难', '面临挑战'],
   ex_zh:'当面临是否选择牛津大学时，她们全家开会。', ex_py:'Dāng miànlín shìfǒu xuǎnzé Niújīn Dàxué shí, tāmen quán jiā kāi huì.', ex_vn:'Khi đứng trước việc có chọn Đại học Oxford hay không, cả nhà họp bàn.',
   exList:[
     {zh:'当面临是否选择牛津大学时，她们全家开会。', py:'Dāng miànlín shìfǒu xuǎnzé Niújīn Dàxué shí, tāmen quán jiā kāi huì.', vn:'Khi đứng trước việc có chọn Đại học Oxford hay không, cả nhà họp bàn.'},
     {zh:'这家公司正面临着很大的危机。', py:'Zhè jiā gōngsī zhèng miànlínzhe hěn dà de wēijī.', vn:'Công ty này đang đối mặt với một cuộc khủng hoảng lớn.'},
     {zh:'高三学生都面临着考大学的压力。', py:'Gāosān xuésheng dōu miànlínzhe kǎo dàxué de yālì.', vn:'Học sinh lớp 12 đều đứng trước áp lực thi đại học.'}
   ],
   colloFull:[
     {zh:'面临选择', py:'miànlín xuǎnzé', vn:'đứng trước lựa chọn'},
     {zh:'面临危机', py:'miànlín wēijī', vn:'đối mặt khủng hoảng'},
     {zh:'面临困难', py:'miànlín kùnnan', vn:'gặp khó khăn'},
     {zh:'面临挑战', py:'miànlín tiǎozhàn', vn:'đối mặt thử thách'},
     {zh:'面临压力', py:'miànlín yālì', vn:'chịu áp lực'}
   ],
   patterns:[{s:'面临(着) + 困难 / 危机 / 选择', m:'Đang đối mặt với …'}, {s:'当面临……时', m:'Khi đứng trước … (văn viết)'}],
   checkList:[
     {promptLang:'vi', prompt:'Khi đối mặt với khó khăn, cậu ấy chưa bao giờ bỏ cuộc.', answer:'面临困难的时候，他从来没放弃过。', answerPy:'Miànlín kùnnan de shíhou, tā cónglái méi fàngqìguo.', note:'面临 + 困难: tân ngữ là tình huống khó.', pair:'从来没……过'},
     {promptLang:'vi', prompt:'Tuy đang đối mặt với nhiều áp lực, nhưng cô ấy vẫn rất lạc quan.', answer:'虽然面临很多压力，但是她仍然很乐观。', answerPy:'Suīrán miànlín hěn duō yālì, dànshì tā réngrán hěn lèguān.', note:'面临压力 = chịu áp lực.', pair:'虽然……但是……'}
   ]},

  {n:26, zh:'一致', py:'yízhì', pos:'Tính từ / Phó từ', vn:'nhất trí, thống nhất; cùng (nhau)', hv:'nhất trí', em:'🤝', lesson:1,
   explain:['① Tính từ: không có bất đồng (没有分歧) — 意见一致, 取得一致.', '② Phó từ: cùng, đồng loạt (一同、一齐) — 一致认为, 一致同意.'],
   usage:'意见 / 看法 / 目标 + (不)一致; 取得一致; 一致 + 认为 / 同意 / 表示 / 通过.',
   collo:['意见一致', '取得一致', '一致认为', '一致同意'],
   ex_zh:'但文文跟他们的意见不一致，她坚持要去美国。', ex_py:'Dàn Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.', ex_vn:'Nhưng Văn Văn không cùng ý kiến với họ, cô nhất quyết muốn đi Mỹ.',
   exList:[
     {zh:'但文文跟他们的意见不一致，她坚持要去美国。', py:'Dàn Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.', vn:'Nhưng Văn Văn không cùng ý kiến với họ, cô nhất quyết muốn đi Mỹ.'},
     {zh:'专家们一致认为这是一种成功的产品，可以放心使用。', py:'Zhuānjiāmen yízhì rènwéi zhè shì yì zhǒng chénggōng de chǎnpǐn, kěyǐ fàngxīn shǐyòng.', vn:'Các chuyên gia nhất trí cho rằng đây là một sản phẩm thành công, có thể yên tâm sử dụng.'},
     {zh:'我们终于取得一致了，真是太不容易了。', py:'Wǒmen zhōngyú qǔdé yízhì le, zhēn shì tài bù róngyì le.', vn:'Cuối cùng chúng ta cũng thống nhất được, thật chẳng dễ chút nào.'}
   ],
   colloFull:[
     {zh:'意见一致', py:'yìjiàn yízhì', vn:'ý kiến thống nhất'},
     {zh:'取得一致', py:'qǔdé yízhì', vn:'đạt được sự nhất trí'},
     {zh:'一致认为', py:'yízhì rènwéi', vn:'nhất trí cho rằng'},
     {zh:'一致同意', py:'yízhì tóngyì', vn:'nhất trí đồng ý'},
     {zh:'一致的结论', py:'yízhì de jiélùn', vn:'kết luận thống nhất'}
   ],
   patterns:[{s:'A 跟 B + 的意见 + (不)一致', m:'Ý kiến của A và B (không) thống nhất'}, {s:'(大家) + 一致 + 认为 / 同意', m:'(Mọi người) nhất trí cho rằng / đồng ý'}],
   checkList:[
     {promptLang:'vi', prompt:'Ý kiến của tôi và bố mẹ không giống nhau, nhưng họ vẫn ủng hộ tôi.', answer:'虽然我跟父母的意见不一致，但是他们还是支持我。', answerPy:'Suīrán wǒ gēn fùmǔ de yìjiàn bù yízhì, dànshì tāmen háishi zhīchí wǒ.', note:'一致 đứng SAU 意见 làm vị ngữ; phủ định: 不一致.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Đề nghị của anh ấy được mọi người nhất trí thông qua.', answer:'他的建议被大家一致通过了。', answerPy:'Tā de jiànyì bèi dàjiā yízhì tōngguò le.', note:'一致 (phó từ) đứng trước động từ 通过.', pair:'被'}
   ]},

  {n:27, zh:'让步', py:'ràng bù', pos:'Động từ (ly hợp)', vn:'nhượng bộ, nhường một bước', hv:'nhượng bộ', em:'🏳️', lesson:1,
   explain:['Trong tranh chấp, bất đồng, chịu bớt ý của mình, chấp nhận một phần ý của người khác. Là động từ ly hợp: 让了一步, 让一步.'],
   usage:'(向 / 对 + người) + 让步; 做出让步; 互相让步; 让一步.',
   collo:['做出让步', '互相让步', '让一步', '向对方让步'],
   ex_zh:'这一次妈妈让步了。', ex_py:'Zhè yí cì māma ràng bù le.', ex_vn:'Lần này mẹ đã nhượng bộ.',
   exList:[
     {zh:'这一次妈妈让步了。', py:'Zhè yí cì māma ràng bù le.', vn:'Lần này mẹ đã nhượng bộ.'},
     {zh:'夫妻之间吵架时，要懂得互相让步。', py:'Fūqī zhījiān chǎo jià shí, yào dǒngde hùxiāng ràng bù.', vn:'Vợ chồng khi cãi nhau phải biết nhường nhịn nhau.'},
     {zh:'经过讨论，双方都做出了一些让步。', py:'Jīngguò tǎolùn, shuāngfāng dōu zuòchūle yìxiē ràng bù.', vn:'Qua thảo luận, cả hai bên đều đã nhượng bộ một chút.'}
   ],
   colloFull:[
     {zh:'做出让步', py:'zuòchū ràng bù', vn:'đưa ra nhượng bộ'},
     {zh:'互相让步', py:'hùxiāng ràng bù', vn:'nhường nhịn nhau'},
     {zh:'让一步', py:'ràng yí bù', vn:'nhường một bước'},
     {zh:'向对方让步', py:'xiàng duìfāng ràng bù', vn:'nhượng bộ đối phương'}
   ],
   patterns:[{s:'(Chủ ngữ) + 让步了', m:'Ai đó đã nhượng bộ'}, {s:'让 + 一步 (ly hợp)', m:'Nhường một bước'}],
   checkList:[
     {promptLang:'vi', prompt:'Lần này mẹ đã nhượng bộ, để tôi tự chọn ngành.', answer:'这一次妈妈让步了，让我自己选专业。', answerPy:'Zhè yí cì māma ràng bù le, ràng wǒ zìjǐ xuǎn zhuānyè.', note:'让步 là động từ ly hợp, không mang tân ngữ trực tiếp.', pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi', prompt:'Hai người ai cũng không chịu nhường một bước, nên cãi nhau càng lúc càng to.', answer:'两个人谁也不肯让一步，所以吵得越来越厉害。', answerPy:'Liǎng ge rén shéi yě bù kěn ràng yí bù, suǒyǐ chǎo de yuè lái yuè lìhai.', note:'Ly hợp: 让 + 一步.', pair:'越来越'}
   ]},

  {n:28, zh:'隐约', py:'yǐnyuē', pos:'Tính từ', vn:'lờ mờ, mơ hồ, thấp thoáng', hv:'ẩn ước', em:'🌫️', lesson:1,
   explain:['(Nhìn, nghe, cảm thấy) không rõ ràng, lờ mờ. Hay lặp lại theo kiểu AABB: 隐隐约约.'],
   usage:'隐约 / 隐隐约约 + 觉得 / 听到 / 看见; 隐约可见.',
   collo:['隐隐约约', '隐约觉得', '隐约听到', '隐约可见'],
   ex_zh:'她隐隐约约觉得：自己该完全放手了。', ex_py:'Tā yǐnyǐnyuēyuē juéde: zìjǐ gāi wánquán fàngshǒu le.', ex_vn:'Bà mơ hồ cảm thấy: mình nên hoàn toàn buông tay rồi.',
   exList:[
     {zh:'她隐隐约约觉得：自己该完全放手了。', py:'Tā yǐnyǐnyuēyuē juéde: zìjǐ gāi wánquán fàngshǒu le.', vn:'Bà mơ hồ cảm thấy: mình nên hoàn toàn buông tay rồi.'},
     {zh:'我隐约听到门外有人在叫我的名字。', py:'Wǒ yǐnyuē tīngdào mén wài yǒu rén zài jiào wǒ de míngzi.', vn:'Tôi lờ mờ nghe thấy ngoài cửa có người gọi tên mình.'},
     {zh:'天快亮了，远处的山隐约可见。', py:'Tiān kuài liàng le, yuǎnchù de shān yǐnyuē kějiàn.', vn:'Trời sắp sáng, núi đằng xa thấp thoáng hiện ra.'}
   ],
   colloFull:[
     {zh:'隐隐约约', py:'yǐnyǐnyuēyuē', vn:'lờ mờ, mơ hồ'},
     {zh:'隐约觉得', py:'yǐnyuē juéde', vn:'mơ hồ cảm thấy'},
     {zh:'隐约听到', py:'yǐnyuē tīngdào', vn:'lờ mờ nghe thấy'},
     {zh:'隐约可见', py:'yǐnyuē kějiàn', vn:'thấp thoáng nhìn thấy'}
   ],
   patterns:[{s:'隐(隐)约(约) + 觉得 / 听到 / 看见', m:'Lờ mờ cảm thấy / nghe thấy / nhìn thấy'}],
   checkList:[
     {promptLang:'vi', prompt:'Tôi mơ hồ cảm thấy hình như cậu ấy không vui lắm.', answer:'我隐隐约约觉得他好像不太高兴。', answerPy:'Wǒ yǐnyǐnyuēyuē juéde tā hǎoxiàng bú tài gāoxìng.', note:'隐隐约约 làm trạng ngữ trước 觉得.', pair:'好像'},
     {promptLang:'vi', prompt:'Tôi vừa ra khỏi cửa đã lờ mờ nghe thấy có người gọi tên mình.', answer:'我一出门，就隐约听到有人在叫我的名字。', answerPy:'Wǒ yì chū mén, jiù yǐnyuē tīngdào yǒu rén zài jiào wǒ de míngzi.', note:'隐约 + 听到.', pair:'一……就……'}
   ]},

  {n:29, zh:'陌生', py:'mòshēng', pos:'Tính từ', vn:'lạ, xa lạ', hv:'mạch sinh', em:'❓', lesson:1,
   explain:['Chưa từng biết, chưa quen (người, nơi chốn, cảm giác). Trái nghĩa: 熟悉.'],
   usage:'陌生人 / 陌生的 + 城市 / 名字 / 声音 / 感觉 / 环境 / 时代 (bảng 词语搭配); 对……(不)陌生.',
   collo:['陌生人', '陌生的地方', '陌生的环境', '对……不陌生'],
   ex_zh:'在这个陌生的地方，妈妈感到她们好像交换了某种身份。', ex_py:'Zài zhège mòshēng de dìfang, māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen.', ex_vn:'Ở nơi xa lạ này, người mẹ cảm thấy hai mẹ con như đã đổi vai cho nhau.',
   exList:[
     {zh:'在这个陌生的地方，妈妈感到她们好像交换了某种身份。', py:'Zài zhège mòshēng de dìfang, māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen.', vn:'Ở nơi xa lạ này, người mẹ cảm thấy hai mẹ con như đã đổi vai cho nhau.'},
     {zh:'喜欢篮球的观众对姚明这个名字一定不会陌生。', py:'Xǐhuan lánqiú de guānzhòng duì Yáo Míng zhège míngzi yídìng bú huì mòshēng.', vn:'Khán giả yêu bóng rổ chắc chắn không lạ gì cái tên Diêu Minh.'},
     {zh:'他很善于和陌生人沟通。', py:'Tā hěn shànyú hé mòshēngrén gōutōng.', vn:'Anh ấy rất giỏi trò chuyện với người lạ.'}
   ],
   colloFull:[
     {zh:'陌生人', py:'mòshēngrén', vn:'người lạ'},
     {zh:'陌生的地方', py:'mòshēng de dìfang', vn:'nơi xa lạ'},
     {zh:'陌生的环境', py:'mòshēng de huánjìng', vn:'môi trường lạ'},
     {zh:'对……不陌生', py:'duì…… bú mòshēng', vn:'không lạ gì với …'},
     {zh:'陌生的声音', py:'mòshēng de shēngyīn', vn:'giọng nói lạ'}
   ],
   patterns:[{s:'陌生的 + 城市 / 环境 / 声音', m:'… xa lạ'}, {s:'对 + N + (很 / 不) + 陌生', m:'(Không) lạ gì với …'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy môi trường rất xa lạ, nhưng cậu ấy thích nghi rất nhanh.', answer:'虽然环境很陌生，但是他很快就适应了。', answerPy:'Suīrán huánjìng hěn mòshēng, dànshì tā hěn kuài jiù shìyìng le.', note:'陌生 làm vị ngữ: 环境很陌生.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Cậu ấy rất nhiệt tình, ngay cả người lạ cũng sẵn lòng giúp.', answer:'他很热情，连陌生人都愿意帮助。', answerPy:'Tā hěn rèqíng, lián mòshēngrén dōu yuànyì bāngzhù.', note:'陌生人 = người lạ.', pair:'连……都……'}
   ]},

  {n:30, zh:'某', py:'mǒu', pos:'Đại từ', vn:'nào đó, … nọ', hv:'mỗ', em:'🕵️', lesson:1,
   explain:['Đại từ chỉ định. ① Chỉ người / vật XÁC ĐỊNH nhưng không nói tên, hay đặt sau họ (李某), đôi khi mang nghĩa xấu.', '② Chỉ người / vật KHÔNG XÁC ĐỊNH: 某种, 某一方面, 某天.'],
   usage:'某 + (lượng từ) + N: 某种 / 某个 / 某人 / 某天 / 某一方面; họ + 某: 李某; 某某; 某年某月.',
   collo:['某种', '某人', '某一方面', '某年某月'],
   ex_zh:'妈妈感到她们好像交换了某种身份。', ex_py:'Māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen.', ex_vn:'Người mẹ cảm thấy hai mẹ con dường như đã đổi cho nhau một thân phận nào đó.',
   exList:[
     {zh:'妈妈感到她们好像交换了某种身份。', py:'Māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen.', vn:'Người mẹ cảm thấy hai mẹ con dường như đã đổi cho nhau một thân phận nào đó.'},
     {zh:'公司业务员李某闻之大喜，以为自己碰到了一个大买主。', py:'Gōngsī yèwùyuán Lǐ mǒu wén zhī dà xǐ, yǐwéi zìjǐ pèngdàole yí ge dà mǎizhǔ.', vn:'Nhân viên kinh doanh họ Lý của công ty nghe vậy mừng lắm, tưởng mình vớ được khách hàng lớn.'},
     {zh:'人们如果长期进行某一方面的训练，就可以使大脑在某一方面的反应能力提高。', py:'Rénmen rúguǒ chángqī jìnxíng mǒu yì fāngmiàn de xùnliàn, jiù kěyǐ shǐ dànǎo zài mǒu yì fāngmiàn de fǎnyìng nénglì tígāo.', vn:'Nếu con người luyện tập lâu dài về một mặt nào đó, thì có thể làm khả năng phản ứng của não ở mặt đó được nâng cao.'}
   ],
   colloFull:[
     {zh:'某种', py:'mǒu zhǒng', vn:'một loại nào đó'},
     {zh:'某人', py:'mǒu rén', vn:'một người nào đó'},
     {zh:'某一方面', py:'mǒu yì fāngmiàn', vn:'một mặt nào đó'},
     {zh:'某年某月', py:'mǒu nián mǒu yuè', vn:'năm nào tháng nào đó'},
     {zh:'李某', py:'Lǐ mǒu', vn:'một người họ Lý (giấu tên)'}
   ],
   patterns:[{s:'某 + (一) + lượng từ + N', m:'Một … nào đó (không xác định)'}, {s:'Họ + 某', m:'Người họ … (biết tên mà không nói)'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần kiên trì luyện tập, bạn sẽ trở nên rất giỏi ở một mặt nào đó.', answer:'只要坚持练习，你就会在某一方面变得很厉害。', answerPy:'Zhǐyào jiānchí liànxí, nǐ jiù huì zài mǒu yì fāngmiàn biàn de hěn lìhai.', note:'某一方面: 某 chỉ sự vật không xác định.', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Tôi thấy hình như đã gặp anh ấy ở chỗ nào đó rồi.', answer:'我觉得好像在某个地方见过他。', answerPy:'Wǒ juéde hǎoxiàng zài mǒu ge dìfang jiànguo tā.', note:'某个地方 = một nơi nào đó.', pair:'V + 过'}
   ]},

  {n:31, zh:'建立', py:'jiànlì', pos:'Động từ', vn:'xây dựng, thiết lập', hv:'kiến lập', em:'🏗️', lesson:1,
   explain:['Tạo dựng nên một thứ trừu tượng (quan hệ, tình bạn, lòng tin, chế độ) hoặc lập ra một tổ chức. Khác 建设 — xây dựng công trình, đất nước cụ thể.'],
   usage:'建立 + 关系 / 友谊 / 信任 / 制度 / 公司; 建立起 + ……; 建立在……的基础上.',
   collo:['建立关系', '建立友谊', '建立信任', '建立起良好的关系'],
   ex_zh:'她们建立了一种新的关系。', ex_py:'Tāmen jiànlìle yì zhǒng xīn de guānxi.', ex_vn:'Hai mẹ con đã xây dựng một mối quan hệ mới.',
   exList:[
     {zh:'她们建立了一种新的关系。', py:'Tāmen jiànlìle yì zhǒng xīn de guānxi.', vn:'Hai mẹ con đã xây dựng một mối quan hệ mới.'},
     {zh:'公司已与这家银行建立起了良好的业务关系。', py:'Gōngsī yǐ yǔ zhè jiā yínháng jiànlì qǐle liánghǎo de yèwù guānxi.', vn:'Công ty đã thiết lập được quan hệ làm ăn tốt đẹp với ngân hàng này.'},
     {zh:'我和同桌在三年里建立了深厚的友谊。', py:'Wǒ hé tóngzhuō zài sān nián li jiànlìle shēnhòu de yǒuyì.', vn:'Tôi và bạn cùng bàn đã xây dựng tình bạn sâu đậm trong ba năm.'}
   ],
   colloFull:[
     {zh:'建立关系', py:'jiànlì guānxi', vn:'thiết lập quan hệ'},
     {zh:'建立友谊', py:'jiànlì yǒuyì', vn:'xây dựng tình bạn'},
     {zh:'建立信任', py:'jiànlì xìnrèn', vn:'xây dựng lòng tin'},
     {zh:'建立起良好的关系', py:'jiànlì qǐ liánghǎo de guānxi', vn:'xây dựng được quan hệ tốt đẹp'},
     {zh:'建立制度', py:'jiànlì zhìdù', vn:'xây dựng chế độ'}
   ],
   patterns:[{s:'(与 / 跟 + người) + 建立 + 关系 / 友谊', m:'Xây dựng quan hệ, tình bạn (với ai)'}, {s:'建立起(来)', m:'Xây dựng nên, gây dựng được'}],
   checkList:[
     {promptLang:'vi', prompt:'Tình bạn của chúng tôi được xây dựng từ hồi cấp hai.', answer:'我们的友谊是在初中的时候建立起来的。', answerPy:'Wǒmen de yǒuyì shì zài chūzhōng de shíhou jiànlì qilai de.', note:'建立 + 友谊 (không nói 建设友谊).', pair:'是……的'},
     {promptLang:'vi', prompt:'Chỉ có giữ lời hứa mới có thể xây dựng được lòng tin.', answer:'只有说话算数，才能建立信任。', answerPy:'Zhǐyǒu shuōhuà suànshù, cái néng jiànlì xìnrèn.', note:'建立信任 = xây dựng lòng tin.', pair:'只有……才……'}
   ]},

  {n:32, zh:'单独', py:'dāndú', pos:'Phó từ / Tính từ', vn:'một mình, riêng (rẽ)', hv:'đơn độc', em:'🚶', lesson:1,
   explain:['Phó từ: một mình, riêng ra — nhấn mạnh KHÔNG GỘP chung với người / vật khác; dùng được cho cả sự vật.', 'Tính từ: riêng, làm định ngữ — 单独的房间 / 单独的教室.'],
   usage:'单独 + V (单独出门 / 单独谈谈 / 单独完成 / 单独炒); 单独的 + N.',
   collo:['单独出门', '单独谈谈', '单独完成', '单独的房间'],
   ex_zh:'最初，妈妈哪儿也不敢去，不能单独出门。', ex_py:'Zuìchū, māma nǎr yě bù gǎn qù, bù néng dāndú chū mén.', ex_vn:'Lúc đầu, người mẹ không dám đi đâu, không thể ra ngoài một mình.',
   exList:[
     {zh:'最初，妈妈哪儿也不敢去，不能单独出门。', py:'Zuìchū, māma nǎr yě bù gǎn qù, bù néng dāndú chū mén.', vn:'Lúc đầu, người mẹ không dám đi đâu, không thể ra ngoài một mình.'},
     {zh:'你下午有时间吗？我想和你单独谈谈。', py:'Nǐ xiàwǔ yǒu shíjiān ma? Wǒ xiǎng hé nǐ dāndú tántan.', vn:'Chiều nay cậu có rảnh không? Tớ muốn nói chuyện riêng với cậu.'},
     {zh:'做这个菜时，鸡蛋要先单独炒好备用。', py:'Zuò zhège cài shí, jīdàn yào xiān dāndú chǎohǎo bèiyòng.', vn:'Khi nấu món này, trứng phải xào riêng trước để dùng sau.'}
   ],
   colloFull:[
     {zh:'单独出门', py:'dāndú chū mén', vn:'ra ngoài một mình'},
     {zh:'单独谈谈', py:'dāndú tántan', vn:'nói chuyện riêng'},
     {zh:'单独完成', py:'dāndú wánchéng', vn:'tự mình hoàn thành'},
     {zh:'单独的房间', py:'dāndú de fángjiān', vn:'phòng riêng'},
     {zh:'单独的教室', py:'dāndú de jiàoshì', vn:'phòng học riêng'}
   ],
   patterns:[{s:'(和 + người) + 单独 + V', m:'Làm gì riêng (với ai), không có người khác'}, {s:'单独的 + N', m:'… riêng (tính từ làm định ngữ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Bố mẹ không cho em gái tôi ra ngoài một mình vào buổi tối.', answer:'爸爸妈妈不让我妹妹晚上单独出门。', answerPy:'Bàba māma bú ràng wǒ mèimei wǎnshang dāndú chū mén.', note:'单独 + V: phó từ đứng ngay trước động từ.', pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi', prompt:'Em lớn rồi, có thể tự mình hoàn thành bài tập này rồi.', answer:'你已经长大了，可以单独完成这个作业了。', answerPy:'Nǐ yǐjīng zhǎngdà le, kěyǐ dāndú wánchéng zhège zuòyè le.', note:'单独完成 = tự mình hoàn thành (không có ai giúp).', pair:'了 (thay đổi trạng thái)'}
   ]},

  {n:33, zh:'沟通', py:'gōutōng', pos:'Động từ', vn:'giao tiếp, trao đổi, kết nối', hv:'câu thông', em:'💬', lesson:1,
   explain:['Nói chuyện, trao đổi để hiểu nhau (giữa người với người); nghĩa gốc: nối thông hai bên. Thường KHÔNG mang tân ngữ chỉ người — phải dùng 跟 / 和 / 与 + người + 沟通.'],
   usage:'跟 / 和 / 与 + người + 沟通; 及时 / 积极 / 直接 / 慢慢 / 顺利地 + 沟通 (bảng 词语搭配); 善于沟通; 沟通能力.',
   collo:['和父母沟通', '善于沟通', '沟通能力', '及时沟通'],
   ex_zh:'最初，妈妈不能与人沟通，什么都要靠女儿。', ex_py:'Zuìchū, māma bù néng yǔ rén gōutōng, shénme dōu yào kào nǚ’ér.', ex_vn:'Lúc đầu, người mẹ không giao tiếp được với ai, việc gì cũng phải nhờ con gái.',
   exList:[
     {zh:'最初，妈妈不能与人沟通，什么都要靠女儿。', py:'Zuìchū, māma bù néng yǔ rén gōutōng, shénme dōu yào kào nǚ’ér.', vn:'Lúc đầu, người mẹ không giao tiếp được với ai, việc gì cũng phải nhờ con gái.'},
     {zh:'你跟幼儿园的老师沟通一下，看看到底是什么原因。', py:'Nǐ gēn yòu’éryuán de lǎoshī gōutōng yíxià, kànkan dàodǐ shì shénme yuányīn.', vn:'Chị trao đổi với cô giáo mẫu giáo một chút, xem rốt cuộc là vì sao.'},
     {zh:'他很善于和陌生人沟通。', py:'Tā hěn shànyú hé mòshēngrén gōutōng.', vn:'Anh ấy rất giỏi trò chuyện với người lạ.'}
   ],
   colloFull:[
     {zh:'和父母沟通', py:'hé fùmǔ gōutōng', vn:'trò chuyện với bố mẹ'},
     {zh:'善于沟通', py:'shànyú gōutōng', vn:'giỏi giao tiếp'},
     {zh:'沟通能力', py:'gōutōng nénglì', vn:'kỹ năng giao tiếp'},
     {zh:'及时沟通', py:'jíshí gōutōng', vn:'trao đổi kịp thời'},
     {zh:'直接沟通', py:'zhíjiē gōutōng', vn:'trao đổi trực tiếp'}
   ],
   patterns:[{s:'跟 / 和 / 与 + người + 沟通', m:'Trao đổi, trò chuyện với ai'}, {s:'及时 / 积极 / 直接 + 沟通', m:'Trao đổi kịp thời / tích cực / trực tiếp'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần trao đổi nhiều, rất nhiều vấn đề sẽ giải quyết được.', answer:'只要多沟通，很多问题就能解决。', answerPy:'Zhǐyào duō gōutōng, hěn duō wèntí jiù néng jiějué.', note:'沟通 không cần tân ngữ.', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Từ khi lên đại học, tôi trò chuyện với bố mẹ ngày càng ít.', answer:'上大学以后，我跟父母沟通得越来越少了。', answerPy:'Shàng dàxué yǐhòu, wǒ gēn fùmǔ gōutōng de yuè lái yuè shǎo le.', note:'跟 + người + 沟通 — không nói 沟通父母.', pair:'越来越'}
   ]},

  {n:34, zh:'横', py:'héng', pos:'Tính từ', vn:'ngang; đi ngang qua', hv:'hoành', em:'↔️', lesson:1,
   explain:['Tính từ: ngang (ngược với 竖 dọc; 横线 = đường kẻ ngang).', 'Còn dùng như động từ / trạng ngữ: băng ngang qua — 横穿 (xuyên qua, đi ngang qua), 横过马路.'],
   usage:'横穿 + nơi chốn (横穿美国 / 横穿马路); 横线; 横着 + V.',
   collo:['横穿美国', '横穿马路', '横线', '横着放'],
   ex_zh:'最后竟然独自把美国横穿了一遍。', ex_py:'Zuìhòu jìngrán dúzì bǎ Měiguó héngchuānle yí biàn.', ex_vn:'Cuối cùng bà lại một mình đi xuyên cả nước Mỹ một lượt.',
   exList:[
     {zh:'最后竟然独自把美国横穿了一遍。', py:'Zuìhòu jìngrán dúzì bǎ Měiguó héngchuānle yí biàn.', vn:'Cuối cùng bà lại một mình đi xuyên cả nước Mỹ một lượt.'},
     {zh:'过马路要走人行横道，不要随便横穿马路。', py:'Guò mǎlù yào zǒu rénxíng héngdào, bú yào suíbiàn héngchuān mǎlù.', vn:'Sang đường phải đi vạch dành cho người đi bộ, đừng tuỳ tiện băng qua đường.'},
     {zh:'请在正确答案下面画一条横线。', py:'Qǐng zài zhèngquè dá’àn xiàmian huà yì tiáo héngxiàn.', vn:'Hãy gạch một đường ngang dưới đáp án đúng.'}
   ],
   colloFull:[
     {zh:'横穿美国', py:'héngchuān Měiguó', vn:'đi xuyên nước Mỹ'},
     {zh:'横穿马路', py:'héngchuān mǎlù', vn:'băng qua đường'},
     {zh:'横线', py:'héngxiàn', vn:'đường kẻ ngang'},
     {zh:'横着放', py:'héngzhe fàng', vn:'đặt nằm ngang'},
     {zh:'人行横道', py:'rénxíng héngdào', vn:'vạch sang đường'}
   ],
   patterns:[{s:'把 + nơi chốn + 横穿了一遍', m:'Đi xuyên qua … một lượt'}, {s:'横 ↔ 竖', m:'Ngang ↔ dọc'}],
   checkList:[
     {promptLang:'vi', prompt:'Mẹ tôi lại một mình đi xuyên nước Mỹ một lượt.', answer:'我妈妈竟然一个人把美国横穿了一遍。', answerPy:'Wǒ māma jìngrán yí ge rén bǎ Měiguó héngchuānle yí biàn.', note:'横穿 = đi ngang qua, xuyên qua.', pair:'把'},
     {promptLang:'vi', prompt:'Không được băng qua đường tuỳ tiện, nếu không sẽ bị cảnh sát phạt.', answer:'不能随便横穿马路，否则会被警察罚款。', answerPy:'Bù néng suíbiàn héngchuān mǎlù, fǒuzé huì bèi jǐngchá fákuǎn.', note:'横穿马路 = băng qua đường không đúng chỗ.', pair:'被'}
   ]},

  {n:35, zh:'沙滩', py:'shātān', pos:'Danh từ', vn:'bãi cát', hv:'sa than', em:'🏖️', lesson:1,
   explain:['Bãi cát ven biển, ven sông.'],
   usage:'在沙滩上 + V (躺 / 散步 / 玩儿); 海边的沙滩; 金色的沙滩; 沙滩排球.',
   collo:['在沙滩上', '海边的沙滩', '沙滩排球', '金色的沙滩'],
   ex_zh:'母女俩躺在夏威夷的沙滩上谈心。', ex_py:'Mǔ nǚ liǎ tǎng zài Xiàwēiyí de shātān shang tán xīn.', ex_vn:'Hai mẹ con nằm trên bãi cát Hawaii tâm sự.',
   exList:[
     {zh:'母女俩躺在夏威夷的沙滩上谈心。', py:'Mǔ nǚ liǎ tǎng zài Xiàwēiyí de shātān shang tán xīn.', vn:'Hai mẹ con nằm trên bãi cát Hawaii tâm sự.'},
     {zh:'岘港的沙滩又长又干净。', py:'Xiàngǎng de shātān yòu cháng yòu gānjìng.', vn:'Bãi cát ở Đà Nẵng vừa dài vừa sạch.'},
     {zh:'孩子们在沙滩上玩儿得特别开心。', py:'Háizimen zài shātān shang wánr de tèbié kāixīn.', vn:'Bọn trẻ chơi trên bãi cát vui ơi là vui.'}
   ],
   colloFull:[
     {zh:'在沙滩上', py:'zài shātān shang', vn:'trên bãi cát'},
     {zh:'海边的沙滩', py:'hǎibiān de shātān', vn:'bãi cát ven biển'},
     {zh:'沙滩排球', py:'shātān páiqiú', vn:'bóng chuyền bãi biển'},
     {zh:'金色的沙滩', py:'jīnsè de shātān', vn:'bãi cát vàng'}
   ],
   patterns:[{s:'在 + 沙滩 + 上 + V', m:'Làm gì trên bãi cát'}],
   checkList:[
     {promptLang:'vi', prompt:'Bãi cát ở Đà Nẵng vừa dài vừa sạch.', answer:'岘港的沙滩又长又干净。', answerPy:'Xiàngǎng de shātān yòu cháng yòu gānjìng.', note:'沙滩 là danh từ nơi chốn, "trên bãi cát" = 在沙滩上.', pair:'又……又……'},
     {promptLang:'vi', prompt:'Bọn trẻ vừa đến biển là chạy ngay ra bãi cát chơi.', answer:'孩子们一到海边，就跑到沙滩上玩儿去了。', answerPy:'Háizimen yí dào hǎibiān, jiù pǎodào shātān shang wánr qu le.', note:'到 + 沙滩上: phải có 上.', pair:'一……就……'}
   ]},

  {n:36, zh:'沉默', py:'chénmò', pos:'Động từ / Tính từ', vn:'im lặng, lặng thinh; ít nói', hv:'trầm mặc', em:'🤐', lesson:1,
   explain:['Động từ: không nói gì (trong một lúc) — 沉默了很久.', 'Tính từ: ít nói, trầm tính — 他是个沉默的人. Bảng 词语搭配: 沉默 + 起来 / 下去.'],
   usage:'沉默了很久 / 沉默了一会儿 / 保持沉默 / 沉默不语 / 沉默下去.',
   collo:['沉默了很久', '保持沉默', '沉默不语', '沉默下去'],
   ex_zh:'文文沉默了很久，最后吻了妈妈一下。', ex_py:'Wénwen chénmòle hěn jiǔ, zuìhòu wěnle māma yíxià.', ex_vn:'Văn Văn im lặng rất lâu, cuối cùng hôn mẹ một cái.',
   exList:[
     {zh:'文文沉默了很久，最后吻了妈妈一下。', py:'Wénwen chénmòle hěn jiǔ, zuìhòu wěnle māma yíxià.', vn:'Văn Văn im lặng rất lâu, cuối cùng hôn mẹ một cái.'},
     {zh:'妈妈在电话那端沉默了一会儿说：“真抱歉！我差点儿忘了。”', py:'Māma zài diànhuà nà duān chénmòle yíhuìr shuō: “Zhēn bàoqiàn! Wǒ chàdiǎnr wàng le.”', vn:'Mẹ ở đầu dây bên kia im lặng một lúc rồi nói: "Xin lỗi con! Mẹ suýt thì quên mất."'},
     {zh:'你不允许我们说不同意，我只好沉默。', py:'Nǐ bù yǔnxǔ wǒmen shuō bù tóngyì, wǒ zhǐhǎo chénmò.', vn:'Anh không cho chúng tôi nói không đồng ý, tôi đành im lặng thôi.'}
   ],
   colloFull:[
     {zh:'沉默了很久', py:'chénmòle hěn jiǔ', vn:'im lặng rất lâu'},
     {zh:'保持沉默', py:'bǎochí chénmò', vn:'giữ im lặng'},
     {zh:'沉默不语', py:'chénmò bù yǔ', vn:'lặng thinh không nói'},
     {zh:'沉默下去', py:'chénmò xiaqu', vn:'tiếp tục im lặng'},
     {zh:'沉默了一会儿', py:'chénmòle yíhuìr', vn:'im lặng một lúc'}
   ],
   patterns:[{s:'沉默了 + 很久 / 一会儿', m:'Im lặng (bao lâu)'}, {s:'保持沉默', m:'Giữ im lặng'}],
   checkList:[
     {promptLang:'vi', prompt:'Nghe xong câu hỏi, cậu ấy im lặng rất lâu mới trả lời.', answer:'听完问题，他沉默了很久才回答。', answerPy:'Tīngwán wèntí, tā chénmòle hěn jiǔ cái huídá.', note:'沉默 + 了 + thời lượng.', pair:'才'},
     {promptLang:'vi', prompt:'Bị thầy giáo hỏi vặn, cậu ấy đành im lặng.', answer:'被老师问住了，他只好沉默。', answerPy:'Bèi lǎoshī wènzhù le, tā zhǐhǎo chénmò.', note:'只好沉默 = đành im lặng.', pair:'被'}
   ]},

  {n:37, zh:'吻', py:'wěn', pos:'Động từ', vn:'hôn', hv:'vẫn', em:'😘', lesson:1,
   explain:['Dùng môi chạm vào người khác để bày tỏ tình cảm. Khẩu ngữ hay nói 亲; 吻 thiên về văn viết. Cũng là danh từ: 一个吻.'],
   usage:'吻 + người / 脸 / 额头; 吻了……一下; 轻轻地 / 深情地 / 亲切地 / 大胆地 + 吻 (bảng 词语搭配).',
   collo:['吻了一下', '轻轻地吻', '深情地吻', '一个吻'],
   ex_zh:'最后吻了妈妈一下，轻轻地说：“妈妈，我真的很喜欢现在的你。”', ex_py:'Zuìhòu wěnle māma yíxià, qīngqīng de shuō: “Māma, wǒ zhēn de hěn xǐhuan xiànzài de nǐ.”', ex_vn:'Cuối cùng cô hôn mẹ một cái, khẽ nói: "Mẹ ơi, con thật sự rất thích mẹ bây giờ."',
   exList:[
     {zh:'最后吻了妈妈一下，轻轻地说：“妈妈，我真的很喜欢现在的你。”', py:'Zuìhòu wěnle māma yíxià, qīngqīng de shuō: “Māma, wǒ zhēn de hěn xǐhuan xiànzài de nǐ.”', vn:'Cuối cùng cô hôn mẹ một cái, khẽ nói: "Mẹ ơi, con thật sự rất thích mẹ bây giờ."'},
     {zh:'妈妈轻轻地吻了一下孩子的额头。', py:'Māma qīngqīng de wěnle yíxià háizi de étóu.', vn:'Mẹ khẽ hôn lên trán đứa bé.'},
     {zh:'昨天我第一次吻了她。', py:'Zuótiān wǒ dì-yī cì wěnle tā.', vn:'Hôm qua lần đầu tiên tôi hôn cô ấy.'}
   ],
   colloFull:[
     {zh:'吻了一下', py:'wěnle yíxià', vn:'hôn một cái'},
     {zh:'轻轻地吻', py:'qīngqīng de wěn', vn:'hôn nhẹ'},
     {zh:'深情地吻', py:'shēnqíng de wěn', vn:'hôn say đắm'},
     {zh:'一个吻', py:'yí ge wěn', vn:'một nụ hôn'},
     {zh:'亲切地吻', py:'qīnqiè de wěn', vn:'hôn trìu mến'}
   ],
   patterns:[{s:'吻了 + người + 一下', m:'Hôn ai một cái'}, {s:'轻轻地 / 深情地 + 吻', m:'Hôn (một cách) …'}],
   checkList:[
     {promptLang:'vi', prompt:'Trước khi đi ngủ, mẹ luôn khẽ hôn lên trán tôi.', answer:'睡觉以前，妈妈总是轻轻地吻一下我的额头。', answerPy:'Shuì jiào yǐqián, māma zǒngshì qīngqīng de wěn yíxià wǒ de étóu.', note:'轻轻地 + 吻: trạng ngữ + 地.', pair:'地 (trạng ngữ)'},
     {promptLang:'vi', prompt:'Đứa bé vừa thấy bố về liền chạy tới hôn bố một cái.', answer:'孩子一看见爸爸回来，就跑过去吻了他一下。', answerPy:'Háizi yí kànjiàn bàba huílai, jiù pǎo guoqu wěnle tā yíxià.', note:'吻了 + người + 一下.', pair:'一……就……'}
   ]},

  {n:38, zh:'忍不住', py:'rěnbuzhù', pos:'Động từ', vn:'không nhịn được, không kìm được', hv:'nhẫn bất trụ', em:'😭', lesson:1,
   explain:['Không kìm nén được cảm xúc, hành động (khóc, cười, hỏi…). Dạng bổ ngữ khả năng: 忍得住 (nhịn được) ↔ 忍不住.'],
   usage:'忍不住 + V (哭 / 笑 / 流下眼泪 / 问 / 买); 实在忍不住了.',
   collo:['忍不住哭了', '忍不住笑了', '忍不住流下了眼泪', '实在忍不住'],
   ex_zh:'妈妈忍不住流下了眼泪。', ex_py:'Māma rěnbuzhù liúxiàle yǎnlèi.', ex_vn:'Người mẹ không kìm được nước mắt.',
   exList:[
     {zh:'妈妈忍不住流下了眼泪。', py:'Māma rěnbuzhù liúxiàle yǎnlèi.', vn:'Người mẹ không kìm được nước mắt.'},
     {zh:'他的话太好笑了，大家都忍不住笑了起来。', py:'Tā de huà tài hǎoxiào le, dàjiā dōu rěnbuzhù xiàole qilai.', vn:'Lời cậu ấy buồn cười quá, ai cũng không nhịn được bật cười.'},
     {zh:'看到这么漂亮的衣服，她忍不住又买了一件。', py:'Kàndào zhème piàoliang de yīfu, tā rěnbuzhù yòu mǎile yí jiàn.', vn:'Thấy bộ đồ đẹp thế, cô ấy không nhịn được lại mua thêm một bộ.'}
   ],
   colloFull:[
     {zh:'忍不住哭了', py:'rěnbuzhù kū le', vn:'không kìm được khóc'},
     {zh:'忍不住笑了', py:'rěnbuzhù xiào le', vn:'không nhịn được cười'},
     {zh:'忍不住流下了眼泪', py:'rěnbuzhù liúxiàle yǎnlèi', vn:'không kìm được nước mắt'},
     {zh:'实在忍不住', py:'shízài rěnbuzhù', vn:'thật sự không nhịn nổi'},
     {zh:'忍得住', py:'rěndezhù', vn:'nhịn được'}
   ],
   patterns:[{s:'忍不住 + V', m:'Không kìm được mà …'}, {s:'忍得住 ↔ 忍不住', m:'Nhịn được ↔ không nhịn được (bổ ngữ khả năng)'}],
   checkList:[
     {promptLang:'vi', prompt:'Bộ phim này cảm động quá, tôi không kìm được mà khóc.', answer:'这部电影太感人了，我忍不住哭了。', answerPy:'Zhè bù diànyǐng tài gǎnrén le, wǒ rěnbuzhù kū le.', note:'忍不住 + V: động từ đứng ngay sau.', pair:'太……了'},
     {promptLang:'vi', prompt:'Nghe cậu ấy kể chuyện, ngay cả thầy giáo cũng không nhịn được cười.', answer:'听了他讲的故事，连老师都忍不住笑了。', answerPy:'Tīngle tā jiǎng de gùshi, lián lǎoshī dōu rěnbuzhù xiào le.', note:'忍不住笑了 = không nhịn được cười.', pair:'连……都……'}
   ]},

  {n:39, zh:'幸亏', py:'xìngkuī', pos:'Phó từ', vn:'may mà, may sao', hv:'hạnh khuy', em:'🍀', lesson:1,
   explain:['Nhờ một điều kiện thuận lợi nào đó mà tránh được chuyện không mong muốn. Vế sau hay có 才 / 要不然 / 不然 / 否则.'],
   usage:'幸亏 + (chủ ngữ) + nguyên nhân tốt，(chủ ngữ) + 才 / 要不然……; 幸亏 đứng trước hoặc sau chủ ngữ.',
   collo:['幸亏你提醒了我', '幸亏送来得及时', '幸亏……才……', '幸亏……要不然……'],
   ex_zh:'她说：“幸亏那晚天色很暗。”', ex_py:'Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”', ex_vn:'Bà nói: "May mà tối hôm đó trời rất tối."',
   exList:[
     {zh:'她说：“幸亏那晚天色很暗。”', py:'Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”', vn:'Bà nói: "May mà tối hôm đó trời rất tối."'},
     {zh:'幸亏你提醒了我，我今天就去报名。', py:'Xìngkuī nǐ tíxǐngle wǒ, wǒ jīntiān jiù qù bàomíng.', vn:'May mà cậu nhắc tớ, hôm nay tớ đi đăng ký luôn.'},
     {zh:'医生说这个病人是心脏问题，幸亏送来得及时。', py:'Yīshēng shuō zhège bìngrén shì xīnzàng wèntí, xìngkuī sòng lai de jíshí.', vn:'Bác sĩ nói bệnh nhân này bị bệnh tim, may mà được đưa đến kịp thời.'}
   ],
   colloFull:[
     {zh:'幸亏你提醒了我', py:'xìngkuī nǐ tíxǐngle wǒ', vn:'may mà cậu nhắc tớ'},
     {zh:'幸亏送来得及时', py:'xìngkuī sòng lai de jíshí', vn:'may mà đưa đến kịp thời'},
     {zh:'幸亏……才……', py:'xìngkuī…… cái……', vn:'may mà … nên mới …'},
     {zh:'幸亏……要不然……', py:'xìngkuī…… yàobùrán……', vn:'may mà …, nếu không thì …'}
   ],
   patterns:[{s:'幸亏 + A，(chủ ngữ) + 才 + (không) B', m:'May mà có A nên mới (tránh được B)'}, {s:'幸亏 + A，要不然 / 否则 + B', m:'May mà A, nếu không thì B (điều xấu)'}],
   checkList:[
     {promptLang:'vi', prompt:'May mà cậu nhắc tớ, nếu không tớ quên mất rồi.', answer:'幸亏你提醒了我，要不然我就忘了。', answerPy:'Xìngkuī nǐ tíxǐngle wǒ, yàobùrán wǒ jiù wàng le.', note:'幸亏……要不然…… : vế sau là điều xấu đã tránh được.', pair:'要不然'},
     {promptLang:'vi', prompt:'May mà hôm qua tôi mang ô, nên mới không bị mưa làm ướt.', answer:'幸亏我昨天带了伞，才没被雨淋湿。', answerPy:'Xìngkuī wǒ zuótiān dàile sǎn, cái méi bèi yǔ línshī.', note:'幸亏……才没…… = may mà … nên mới không ….', pair:'被'}
   ]},

  {n:40, zh:'暗', py:'àn', pos:'Tính từ', vn:'tối, u ám', hv:'ám', em:'🌑', lesson:1,
   explain:['Thiếu ánh sáng, không sáng (trái nghĩa: 亮). Nghĩa khác: ngầm, lén — 暗暗 (thầm).'],
   usage:'天色很暗 / 光线太暗 / 灯光很暗; 暗下来; 又黑又暗.',
   collo:['天色很暗', '光线太暗', '暗下来', '灯光很暗'],
   ex_zh:'她说：“幸亏那晚天色很暗。”', ex_py:'Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”', ex_vn:'Bà nói: "May mà tối hôm đó trời rất tối."',
   exList:[
     {zh:'她说：“幸亏那晚天色很暗。”', py:'Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”', vn:'Bà nói: "May mà tối hôm đó trời rất tối."'},
     {zh:'这里光线太暗了，看书对眼睛不好。', py:'Zhèli guāngxiàn tài àn le, kàn shū duì yǎnjing bù hǎo.', vn:'Chỗ này ánh sáng tối quá, đọc sách không tốt cho mắt.'},
     {zh:'太阳下山以后，天慢慢暗下来了。', py:'Tàiyáng xià shān yǐhòu, tiān mànmàn àn xialai le.', vn:'Mặt trời lặn rồi, trời dần dần tối lại.'}
   ],
   colloFull:[
     {zh:'天色很暗', py:'tiānsè hěn àn', vn:'trời rất tối'},
     {zh:'光线太暗', py:'guāngxiàn tài àn', vn:'ánh sáng quá tối'},
     {zh:'暗下来', py:'àn xialai', vn:'tối dần lại'},
     {zh:'灯光很暗', py:'dēngguāng hěn àn', vn:'đèn rất tối'}
   ],
   patterns:[{s:'(天色 / 光线 / 灯光) + 很 + 暗', m:'Trời / ánh sáng / đèn tối'}, {s:'暗 + 下来', m:'Tối dần lại (bổ ngữ xu hướng chỉ trạng thái bắt đầu)'}],
   checkList:[
     {promptLang:'vi', prompt:'Trong phòng tối quá, bạn bật đèn lên đi.', answer:'房间里太暗了，你把灯打开吧。', answerPy:'Fángjiān li tài àn le, nǐ bǎ dēng dǎkāi ba.', note:'暗 ↔ 亮.', pair:'把'},
     {promptLang:'vi', prompt:'Trời càng lúc càng tối, chúng ta về nhà thôi.', answer:'天越来越暗了，我们回家吧。', answerPy:'Tiān yuè lái yuè àn le, wǒmen huí jiā ba.', note:'暗 là tính từ, đứng sau 越来越.', pair:'越来越'}
   ]},

  // ───── 专有名词 ─────
  {n:41, zh:'文文', py:'Wénwen', pos:'Danh từ riêng', vn:'Văn Văn (tên người)', hv:'Văn Văn', em:'👧', lesson:1,
   explain:['Tên gọi thân mật của cô con gái — nhân vật chính trong bài. Người Trung Quốc hay lặp một chữ trong tên để gọi thân mật trẻ con (亮亮, 明明).'],
   usage:'Tên gọi ở nhà, lặp âm tiết; chữ thứ hai đọc nhẹ.',
   collo:['乖乖女文文', '文文的妈妈', '文文从小'],
   ex_zh:'文文从小是个乖乖女。', ex_py:'Wénwen cóngxiǎo shì ge guāiguāinǚ.', ex_vn:'Văn Văn từ nhỏ đã là cô con gái ngoan.',
   exList:[
     {zh:'文文从小是个乖乖女。', py:'Wénwen cóngxiǎo shì ge guāiguāinǚ.', vn:'Văn Văn từ nhỏ đã là cô con gái ngoan.'},
     {zh:'文文跟他们的意见不一致，她坚持要去美国。', py:'Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.', vn:'Văn Văn không cùng ý kiến với bố mẹ, cô nhất quyết muốn đi Mỹ.'}
   ],
   colloFull:[
     {zh:'乖乖女文文', py:'guāiguāinǚ Wénwen', vn:'cô con gái ngoan Văn Văn'},
     {zh:'文文的妈妈', py:'Wénwen de māma', vn:'mẹ của Văn Văn'},
     {zh:'文文从小', py:'Wénwen cóngxiǎo', vn:'Văn Văn từ nhỏ'}
   ],
   patterns:[{s:'Chữ lặp (文文 / 亮亮 / 明明)', m:'Tên gọi thân mật của trẻ con'}],
   checkList:[
     {promptLang:'vi', prompt:'Văn Văn không phải không nghe lời mẹ, mà là đã có chính kiến của mình.', answer:'文文不是不听妈妈的话，而是有了自己的主见。', answerPy:'Wénwen bú shì bù tīng māma de huà, ér shì yǒule zìjǐ de zhǔjiàn.', note:'文文: nhân vật chính của bài.', pair:'不是……而是……'},
     {promptLang:'vi', prompt:'Mẹ Văn Văn lại một mình đi xuyên nước Mỹ một lượt.', answer:'文文的妈妈竟然独自把美国横穿了一遍。', answerPy:'Wénwen de māma jìngrán dúzì bǎ Měiguó héngchuānle yí biàn.', note:'竟然 = vậy mà, không ngờ.', pair:'把'}
   ]},

  {n:42, zh:'欧盟', py:'Ōuméng', pos:'Danh từ riêng', vn:'Liên minh châu Âu (EU)', hv:'Âu Minh', em:'🇪🇺', lesson:1,
   explain:['Viết tắt của 欧洲联盟 (European Union): 欧 = 欧洲 (châu Âu), 盟 = 联盟 (liên minh).'],
   usage:'欧盟国家 / 欧盟成员国 / 欧盟商会.',
   collo:['欧盟商会', '欧盟国家', '欧盟成员国'],
   ex_zh:'她出席欧盟商会的鸡尾酒会。', ex_py:'Tā chūxí Ōuméng shānghuì de jīwěijiǔ huì.', ex_vn:'Cô ấy dự tiệc cocktail của Phòng Thương mại EU.',
   exList:[
     {zh:'她出席欧盟商会的鸡尾酒会。', py:'Tā chūxí Ōuméng shānghuì de jīwěijiǔ huì.', vn:'Cô ấy dự tiệc cocktail của Phòng Thương mại EU.'},
     {zh:'法国和德国都是欧盟国家。', py:'Fǎguó hé Déguó dōu shì Ōuméng guójiā.', vn:'Pháp và Đức đều là các nước thuộc Liên minh châu Âu.'}
   ],
   colloFull:[
     {zh:'欧盟商会', py:'Ōuméng shānghuì', vn:'Phòng Thương mại EU'},
     {zh:'欧盟国家', py:'Ōuméng guójiā', vn:'các nước EU'},
     {zh:'欧盟成员国', py:'Ōuméng chéngyuánguó', vn:'nước thành viên EU'}
   ],
   patterns:[{s:'欧盟 = 欧洲联盟', m:'Cách viết tắt tên tổ chức (lấy chữ đầu mỗi từ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Cô ấy không những làm tình nguyện viên, mà còn dự tiệc cocktail của Phòng Thương mại EU.', answer:'她不仅做志愿者，还出席了欧盟商会的鸡尾酒会。', answerPy:'Tā bùjǐn zuò zhìyuànzhě, hái chūxíle Ōuméng shānghuì de jīwěijiǔ huì.', note:'欧盟商会: câu của bài khoá.', pair:'不仅……还……'},
     {promptLang:'vi', prompt:'Hiệp định thương mại tự do giữa Việt Nam và EU được ký năm 2019.', answer:'越南和欧盟的自由贸易协定是2019年签的。', answerPy:'Yuènán hé Ōuméng de zìyóu màoyì xiédìng shì èr líng yī jiǔ nián qiān de.', note:'欧盟 = EU.', pair:'是……的'}
   ]},

  {n:43, zh:'牛津大学', py:'Niújīn Dàxué', pos:'Danh từ riêng', vn:'Đại học Oxford', hv:'Ngưu Tân đại học', em:'🎓', lesson:1,
   explain:['Trường đại học lâu đời, nổi tiếng hàng đầu của Anh. 牛津 là dịch nghĩa "Oxford": 牛 (ox — con bò) + 津 (ford — bến sông).'],
   usage:'被牛津大学录取 / 牛津大学的学生 / 选择牛津大学.',
   collo:['被牛津大学录取', '牛津大学的学生', '选择牛津大学'],
   ex_zh:'当面临是否选择牛津大学时，她们全家开会。', ex_py:'Dāng miànlín shìfǒu xuǎnzé Niújīn Dàxué shí, tāmen quán jiā kāi huì.', ex_vn:'Khi đứng trước việc có chọn Đại học Oxford hay không, cả nhà họp bàn.',
   exList:[
     {zh:'当面临是否选择牛津大学时，她们全家开会。', py:'Dāng miànlín shìfǒu xuǎnzé Niújīn Dàxué shí, tāmen quán jiā kāi huì.', vn:'Khi đứng trước việc có chọn Đại học Oxford hay không, cả nhà họp bàn.'},
     {zh:'能被牛津大学这样的世界名校录取多好啊！', py:'Néng bèi Niújīn Dàxué zhèyàng de shìjiè míngxiào lùqǔ duō hǎo a!', vn:'Được một trường danh tiếng thế giới như Đại học Oxford nhận thì tốt biết bao!'}
   ],
   colloFull:[
     {zh:'被牛津大学录取', py:'bèi Niújīn Dàxué lùqǔ', vn:'được Đại học Oxford nhận'},
     {zh:'牛津大学的学生', py:'Niújīn Dàxué de xuésheng', vn:'sinh viên Đại học Oxford'},
     {zh:'选择牛津大学', py:'xuǎnzé Niújīn Dàxué', vn:'chọn Đại học Oxford'}
   ],
   patterns:[{s:'被 + 牛津大学 + 录取', m:'Được Đại học Oxford nhận vào'}],
   checkList:[
     {promptLang:'vi', prompt:'Được Đại học Oxford nhận thì tốt biết bao!', answer:'能被牛津大学录取多好啊！', answerPy:'Néng bèi Niújīn Dàxué lùqǔ duō hǎo a!', note:'多……啊: câu cảm thán.', pair:'被'},
     {promptLang:'vi', prompt:'Cô ấy không chọn Đại học Oxford, mà nhất quyết muốn đi Mỹ.', answer:'她不是选择牛津大学，而是坚持要去美国。', answerPy:'Tā bú shì xuǎnzé Niújīn Dàxué, ér shì jiānchí yào qù Měiguó.', note:'坚持要 + V = nhất quyết muốn.', pair:'不是……而是……'}
   ]},

  {n:44, zh:'洛杉矶', py:'Luòshānjī', pos:'Danh từ riêng', vn:'Los Angeles', hv:'Lạc Sam Cơ', em:'🌴', lesson:1,
   explain:['Thành phố lớn ở bang California, Mỹ — phiên âm tiếng Anh "Los Angeles".'],
   usage:'去洛杉矶 / 在洛杉矶工作 / 洛杉矶机场.',
   collo:['去洛杉矶', '在洛杉矶工作', '洛杉矶机场'],
   ex_zh:'几年后，文文在美国工作，妈妈去洛杉矶看她。', ex_py:'Jǐ nián hòu, Wénwen zài Měiguó gōngzuò, māma qù Luòshānjī kàn tā.', ex_vn:'Mấy năm sau, Văn Văn làm việc ở Mỹ, mẹ sang Los Angeles thăm cô.',
   exList:[
     {zh:'几年后，文文在美国工作，妈妈去洛杉矶看她。', py:'Jǐ nián hòu, Wénwen zài Měiguó gōngzuò, māma qù Luòshānjī kàn tā.', vn:'Mấy năm sau, Văn Văn làm việc ở Mỹ, mẹ sang Los Angeles thăm cô.'},
     {zh:'从河内坐飞机到洛杉矶要十几个小时。', py:'Cóng Hénèi zuò fēijī dào Luòshānjī yào shí jǐ ge xiǎoshí.', vn:'Đi máy bay từ Hà Nội đến Los Angeles mất mười mấy tiếng.'}
   ],
   colloFull:[
     {zh:'去洛杉矶', py:'qù Luòshānjī', vn:'đi Los Angeles'},
     {zh:'在洛杉矶工作', py:'zài Luòshānjī gōngzuò', vn:'làm việc ở Los Angeles'},
     {zh:'洛杉矶机场', py:'Luòshānjī jīchǎng', vn:'sân bay Los Angeles'}
   ],
   patterns:[{s:'去 + 洛杉矶 + V', m:'Đến Los Angeles làm gì (câu liên động)'}],
   checkList:[
     {promptLang:'vi', prompt:'Mẹ bay đến Los Angeles là để thăm con gái.', answer:'妈妈飞到洛杉矶是为了看女儿。', answerPy:'Māma fēidào Luòshānjī shì wèile kàn nǚ’ér.', note:'洛杉矶 = Los Angeles.', pair:'是为了……'},
     {promptLang:'vi', prompt:'Tôi chưa bao giờ đến Los Angeles.', answer:'我从来没去过洛杉矶。', answerPy:'Wǒ cónglái méi qùguo Luòshānjī.', note:'Tên thành phố phiên âm.', pair:'从来没……过'}
   ]},

  {n:45, zh:'夏威夷', py:'Xiàwēiyí', pos:'Danh từ riêng', vn:'Hawaii', hv:'Hạ Uy Di', em:'🌺', lesson:1,
   explain:['Quần đảo, một bang của Mỹ giữa Thái Bình Dương, nổi tiếng với bãi biển đẹp — phiên âm "Hawaii".'],
   usage:'夏威夷的沙滩 / 去夏威夷旅行 / 夏威夷群岛.',
   collo:['夏威夷的沙滩', '去夏威夷旅行', '夏威夷群岛'],
   ex_zh:'母女俩躺在夏威夷的沙滩上谈心。', ex_py:'Mǔ nǚ liǎ tǎng zài Xiàwēiyí de shātān shang tán xīn.', ex_vn:'Hai mẹ con nằm trên bãi cát Hawaii tâm sự.',
   exList:[
     {zh:'母女俩躺在夏威夷的沙滩上谈心。', py:'Mǔ nǚ liǎ tǎng zài Xiàwēiyí de shātān shang tán xīn.', vn:'Hai mẹ con nằm trên bãi cát Hawaii tâm sự.'},
     {zh:'夏威夷的沙滩又白又干净，每年都有很多游客。', py:'Xiàwēiyí de shātān yòu bái yòu gānjìng, měi nián dōu yǒu hěn duō yóukè.', vn:'Bãi cát Hawaii vừa trắng vừa sạch, năm nào cũng có rất nhiều du khách.'}
   ],
   colloFull:[
     {zh:'夏威夷的沙滩', py:'Xiàwēiyí de shātān', vn:'bãi cát Hawaii'},
     {zh:'去夏威夷旅行', py:'qù Xiàwēiyí lǚxíng', vn:'đi du lịch Hawaii'},
     {zh:'夏威夷群岛', py:'Xiàwēiyí qúndǎo', vn:'quần đảo Hawaii'}
   ],
   patterns:[{s:'在 + 夏威夷的沙滩 + 上', m:'Trên bãi cát Hawaii'}],
   checkList:[
     {promptLang:'vi', prompt:'Bãi cát Hawaii vừa trắng vừa sạch.', answer:'夏威夷的沙滩又白又干净。', answerPy:'Xiàwēiyí de shātān yòu bái yòu gānjìng.', note:'夏威夷 = Hawaii.', pair:'又……又……'},
     {promptLang:'vi', prompt:'Kỳ nghỉ năm ngoái chúng tôi đi Hawaii du lịch.', answer:'去年放假的时候，我们是去夏威夷旅行的。', answerPy:'Qùnián fàng jià de shíhou, wǒmen shì qù Xiàwēiyí lǚxíng de.', note:'去 + nơi + 旅行.', pair:'是……的'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 (tr. 47–49) — mỗi đoạn văn một dòng
// Nguồn trong sách: 改编自《中国青年报》，作者：从玉华
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 放手',
  preQuiz:[
    {q:'文文小时候是个什么样的孩子？',opts:['很淘气的孩子','乖乖女','很独立的孩子'],ans:1},
    {q:'文文小时候，上哪所学校、念什么专业，由谁决定？',opts:['基本上是妈妈说了算','文文自己决定','爸爸说了算'],ans:0},
    {q:'到了大学阶段，文文有什么变化？',opts:['成绩越来越差','更听妈妈的话了','越来越有主见，越来越能干、独立'],ans:2},
    {q:'上大学时，文文担任了什么？',opts:['学生会主席','外交官','班长'],ans:0},
    {q:'妈妈以前的计划是让文文做什么？',opts:['经商','当外交官','当老师'],ans:1},
    {q:'文文觉得什么才是自己的目标？',opts:['当外交官','读本系的研究生','经商'],ans:2},
    {q:'一共有多少所世界名牌大学录取了文文？',opts:['2所','12所','20所'],ans:1},
    {q:'关于要不要去牛津大学，文文和父母的意见怎么样？',opts:['不一致','完全一致','父母没有意见'],ans:0},
    {q:'最后是谁让步了？',opts:['文文','爸爸','妈妈'],ans:2},
    {q:'在洛杉矶，妈妈有什么感觉？',opts:['她们好像交换了某种身份','她们好像是陌生人','她们的关系越来越差'],ans:0},
    {q:'刚到美国时，妈妈为什么什么都要靠女儿？',opts:['她身体不好','她不能单独出门，不能与人沟通','女儿不让她出门'],ans:1},
    {q:'妈妈后来为什么能独自把美国横穿一遍？',opts:['因为爸爸一直陪着她','因为她的英语很好','因为女儿“放手”，鼓励她自己出去'],ans:2},
    {q:'在夏威夷，妈妈为什么说“幸亏那晚天色很暗”？',opts:['她不想让女儿看见自己流眼泪','她怕太阳晒','她想早点儿睡觉'],ans:0}
  ],
  lines:[
    {sp:0,zh:'文文从小是个乖乖女，学习刻苦，遵守纪律。大事小事，尽管妈妈表示也要征求她的意见，但上哪所学校、念什么专业，甚至跟什么人交朋友，基本上都是妈妈说了算。',
     py:'Wénwen cóngxiǎo shì ge guāiguāinǚ, xuéxí kèkǔ, zūnshǒu jìlǜ. Dà shì xiǎo shì, jǐnguǎn māma biǎoshì yě yào zhēngqiú tā de yìjiàn, dàn shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè, shènzhì gēn shénme rén jiāo péngyou, jīběn shang dōu shì māma shuōle suàn.',
     vn:'Văn Văn từ nhỏ đã là cô con gái ngoan, học hành chăm chỉ, giữ kỷ luật. Việc lớn việc nhỏ, dù mẹ nói là cũng phải hỏi ý kiến cô, nhưng học trường nào, học ngành gì, thậm chí kết bạn với ai, về cơ bản đều do mẹ quyết.'},
    {sp:0,zh:'可是到了大学阶段，亲爱的女儿竟然违反了乖乖女的各种规矩，越来越有自己的主见，越来越能干、独立了。尽管她的成绩仍然是第一名，但她不再甘于当“好学生”：她逃课去听各种讲座，出席欧盟商会的鸡尾酒会，做志愿者，拍电影，学摄影，泡酒吧，参加了学生会并担任了学生会主席，还组织各种社会活动。妈妈以前要她当外交官的计划，在她眼里“实在没什么意思”，她觉得经商才是自己的目标。',
     py:'Kěshì dàole dàxué jiēduàn, qīn’ài de nǚ’ér jìngrán wéifǎnle guāiguāinǚ de gè zhǒng guīju, yuè lái yuè yǒu zìjǐ de zhǔjiàn, yuè lái yuè nénggàn, dúlì le. Jǐnguǎn tā de chéngjì réngrán shì dì-yī míng, dàn tā bú zài gānyú dāng “hǎo xuésheng”: tā táo kè qù tīng gè zhǒng jiǎngzuò, chūxí Ōuméng shānghuì de jīwěijiǔ huì, zuò zhìyuànzhě, pāi diànyǐng, xué shèyǐng, pào jiǔbā, cānjiāle xuéshēnghuì bìng dānrènle xuéshēnghuì zhǔxí, hái zǔzhī gè zhǒng shèhuì huódòng. Māma yǐqián yào tā dāng wàijiāoguān de jìhuà, zài tā yǎn li “shízài méi shénme yìsi”, tā juéde jīng shāng cái shì zìjǐ de mùbiāo.',
     vn:'Nhưng đến giai đoạn đại học, cô con gái yêu quý lại phá bỏ mọi phép tắc của một "con ngoan", ngày càng có chính kiến, ngày càng giỏi giang, độc lập. Dù thành tích vẫn đứng đầu, nhưng cô không còn cam chịu làm "học sinh ngoan" nữa: cô trốn học đi nghe đủ loại buổi thuyết trình, dự tiệc cocktail của Phòng Thương mại EU, làm tình nguyện viên, quay phim, học nhiếp ảnh, la cà quán bar, tham gia hội sinh viên và làm chủ tịch hội sinh viên, còn tổ chức đủ loại hoạt động xã hội. Kế hoạch muốn cô làm nhà ngoại giao trước đây của mẹ, trong mắt cô "thật chẳng có ý nghĩa gì", cô thấy kinh doanh mới là mục tiêu của mình.'},
    {sp:0,zh:'她放弃了本系保送研究生、放弃了各种工作的面试，坚持要去国外留学，结果12所世界名牌大学录取了她。当面临是否选择牛津大学时，她们全家开会，爸爸妈妈认为应该去，但文文跟他们的意见不一致，她坚持要去美国。',
     py:'Tā fàngqìle běn xì bǎosòng yánjiūshēng, fàngqìle gè zhǒng gōngzuò de miànshì, jiānchí yào qù guówài liúxué, jiéguǒ shí’èr suǒ shìjiè míngpái dàxué lùqǔle tā. Dāng miànlín shìfǒu xuǎnzé Niújīn Dàxué shí, tāmen quán jiā kāi huì, bàba māma rènwéi yīnggāi qù, dàn Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.',
     vn:'Cô từ bỏ suất được khoa tuyển thẳng lên cao học, từ bỏ đủ các cuộc phỏng vấn xin việc, nhất quyết đòi ra nước ngoài du học, kết quả là 12 trường đại học danh tiếng thế giới đã nhận cô. Khi đứng trước việc có chọn Đại học Oxford hay không, cả nhà họp bàn, bố mẹ cho rằng nên đi, nhưng Văn Văn không cùng ý kiến với họ, cô nhất quyết muốn đi Mỹ.'},
    {sp:0,zh:'这一次妈妈让步了。她隐隐约约觉得：自己该完全放手了。没想到，正是妈妈的放手，让风筝越飞越高。',
     py:'Zhè yí cì māma ràng bù le. Tā yǐnyǐnyuēyuē juéde: zìjǐ gāi wánquán fàngshǒu le. Méi xiǎngdào, zhèng shì māma de fàngshǒu, ràng fēngzheng yuè fēi yuè gāo.',
     vn:'Lần này mẹ đã nhượng bộ. Bà mơ hồ cảm thấy: mình nên hoàn toàn buông tay rồi. Không ngờ, chính việc mẹ buông tay đã khiến con diều bay càng lúc càng cao.'},
    {sp:0,zh:'几年后，文文在美国工作，妈妈去洛杉矶看她。在这个陌生的地方，妈妈感到她们好像交换了某种身份：自己倒像女儿，而文文倒像妈妈。她们建立了一种新的关系。',
     py:'Jǐ nián hòu, Wénwen zài Měiguó gōngzuò, māma qù Luòshānjī kàn tā. Zài zhège mòshēng de dìfang, māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen: zìjǐ dào xiàng nǚ’ér, ér Wénwen dào xiàng māma. Tāmen jiànlìle yì zhǒng xīn de guānxi.',
     vn:'Mấy năm sau, Văn Văn làm việc ở Mỹ, mẹ sang Los Angeles thăm cô. Ở nơi xa lạ này, người mẹ cảm thấy hai mẹ con dường như đã đổi vai cho nhau: mình lại giống con gái, còn Văn Văn lại giống mẹ. Hai mẹ con đã xây dựng một mối quan hệ mới.'},
    {sp:0,zh:'最初，妈妈哪儿也不敢去，不能单独出门，不能与人沟通，什么都要靠女儿。后来文文工作忙，就给她地图、车钥匙、机票，鼓励她自己出去。从家门口的超市开始，妈妈越走越远，最后竟然独自把美国横穿了一遍。她说，是女儿的“放手”，让她走得更远。做妈妈的，这才算是真正明白了“放手”的重要。',
     py:'Zuìchū, māma nǎr yě bù gǎn qù, bù néng dāndú chū mén, bù néng yǔ rén gōutōng, shénme dōu yào kào nǚ’ér. Hòulái Wénwen gōngzuò máng, jiù gěi tā dìtú, chē yàoshi, jīpiào, gǔlì tā zìjǐ chūqu. Cóng jiā ménkǒu de chāoshì kāishǐ, māma yuè zǒu yuè yuǎn, zuìhòu jìngrán dúzì bǎ Měiguó héngchuānle yí biàn. Tā shuō, shì nǚ’ér de “fàngshǒu”, ràng tā zǒu de gèng yuǎn. Zuò māma de, zhè cái suàn shì zhēnzhèng míngbaile “fàngshǒu” de zhòngyào.',
     vn:'Lúc đầu, người mẹ không dám đi đâu, không thể ra ngoài một mình, không giao tiếp được với ai, việc gì cũng phải nhờ con gái. Về sau Văn Văn bận việc, bèn đưa mẹ bản đồ, chìa khoá xe, vé máy bay, khuyến khích mẹ tự đi. Bắt đầu từ siêu thị ngay trước cửa nhà, mẹ đi càng lúc càng xa, cuối cùng lại một mình đi xuyên cả nước Mỹ một lượt. Bà nói, chính việc con gái "buông tay" đã giúp bà đi được xa hơn. Làm mẹ, đến lúc này mới thật sự hiểu được tầm quan trọng của việc "buông tay".'},
    {sp:0,zh:'2010年3月的一个夜晚，母女俩躺在夏威夷的沙滩上谈心。妈妈第一次为以前对女儿的“不放手”而道歉。文文沉默了很久，最后吻了妈妈一下，轻轻地说：“妈妈，我真的很喜欢现在的你。”妈妈忍不住流下了眼泪。她说：“幸亏那晚天色很暗。”',
     py:'Èr líng yī líng nián sān yuè de yí ge yèwǎn, mǔ nǚ liǎ tǎng zài Xiàwēiyí de shātān shang tán xīn. Māma dì-yī cì wèi yǐqián duì nǚ’ér de “bú fàngshǒu” ér dàoqiàn. Wénwen chénmòle hěn jiǔ, zuìhòu wěnle māma yíxià, qīngqīng de shuō: “Māma, wǒ zhēn de hěn xǐhuan xiànzài de nǐ.” Māma rěnbuzhù liúxiàle yǎnlèi. Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”',
     vn:'Một đêm tháng 3 năm 2010, hai mẹ con nằm trên bãi cát Hawaii tâm sự. Lần đầu tiên người mẹ xin lỗi con gái vì trước đây đã "không chịu buông tay". Văn Văn im lặng rất lâu, cuối cùng hôn mẹ một cái, khẽ nói: "Mẹ ơi, con thật sự rất thích mẹ bây giờ." Người mẹ không kìm được nước mắt. Bà nói: "May mà tối hôm đó trời rất tối."'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 单独/独自 lấy từ sách (tr. 51–52)
// + 规矩/规定, 目标/目的 (lấy từ bài tập 2 của sách, tr. 52)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'单独 — 独自',
   same:'Đều là PHÓ TỪ, đều có ý "một mình, tự mình" (有自己一个人的意思).',
   sameEx:{zh:'你太年轻了，恐怕不能单独／独自一人完成这个任务。',vn:'Cậu còn trẻ quá, e là không thể một mình hoàn thành nhiệm vụ này.'},
   items:[
     {word:'单独',points:[
       'Nhấn mạnh KHÔNG GỘP CHUNG với người / vật khác (tách riêng ra).',
       'Dùng được cho cả SỰ VẬT: 鸡蛋要先单独炒好.',
       'Còn làm TÍNH TỪ, làm định ngữ: 单独的教室 / 单独的房间.'
     ],ex:[{zh:'你下午有时间吗？我想和你单独谈谈。',vn:'Chiều nay cậu có rảnh không? Tớ muốn nói chuyện riêng với cậu.'},
          {zh:'做这个菜时，鸡蛋要先单独炒好备用。',vn:'Khi nấu món này, trứng phải xào riêng trước để dùng sau.'}]},
     {word:'独自',points:[
       'Nhấn mạnh MỘT NGƯỜI tự làm việc gì, không có ai cùng.',
       'Chỉ dùng cho NGƯỜI, không dùng cho sự vật.',
       'Chỉ là phó từ, KHÔNG làm định ngữ (không nói 独自的房间).'
     ],ex:[{zh:'孩子饿得等不及爸爸了，就独自先吃了起来。',vn:'Đứa bé đói quá không đợi được bố, liền tự ăn trước.'},
          {zh:'妈妈最后竟然独自把美国横穿了一遍。',vn:'Cuối cùng người mẹ lại một mình đi xuyên nước Mỹ một lượt.'}]}
   ],
   quiz:[
     {sentence:'这所大学为女生提供了＿＿的考试，引起了激烈争论。',options:['单独','独自'],answer:0,
      why:'Làm ĐỊNH NGỮ trước 的考试 (kỳ thi riêng) → chỉ 单独 (tính từ). 独自 không làm định ngữ (câu mẫu của sách).'},
     {sentence:'他＿＿一人在体育馆里进行训练。',options:['单独','独自'],answer:1,both:true,
      why:'Một người tự tập luyện — đúng như câu ở phần 共同点 (单独／独自一人), cả hai đều được; 独自一人 tự nhiên hơn.'},
     {sentence:'教练为他＿＿安排了训练。',options:['单独','独自'],answer:0,
      why:'HLV sắp xếp buổi tập RIÊNG cho cậu ấy, tách khỏi cả đội → 单独. 独自 là chính người đó tự làm một mình, không hợp với chủ ngữ 教练.'},
     {sentence:'我喜欢早起，＿＿去公园散步，顺便考虑一下一天的工作。',options:['单独','独自'],answer:1,
      why:'Nhấn mạnh MỘT MÌNH tôi đi dạo (không ai đi cùng) → 独自.'}
   ],
   sgk:{
     chung:{t:'都可以做副词，有自己一个人的意思。',vn:'Đều có thể làm phó từ, có nghĩa là tự mình một người.',vd:'你太年轻了，恐怕不能单独／独自一人完成这个任务。',vdVn:'Cậu còn trẻ quá, e là không thể một mình hoàn thành nhiệm vụ này.'},
     khac:[
       {a:{t:'词义侧重不跟别的合在一起。',vn:'Nghĩa nghiêng về không gộp chung với cái khác.',vd:'你下午有时间吗？我想和你单独谈谈。',vdVn:'Chiều nay cậu có rảnh không? Tớ muốn nói chuyện riêng với cậu.'},
        b:{t:'词义侧重一个人独立做某事。',vn:'Nghĩa nghiêng về một người tự làm việc gì.',vd:'孩子饿得等不及爸爸了，就独自先吃了起来。',vdVn:'Đứa bé đói quá không đợi được bố, liền tự ăn trước.'}},
       {a:{t:'还可以用于事物。',vn:'Còn có thể dùng cho sự vật.',vd:'做这个菜时，鸡蛋要先单独炒好备用。',vdVn:'Khi nấu món này, trứng phải xào riêng trước để dùng sau.'},
        b:{t:'不可以用于事物。',vn:'Không thể dùng cho sự vật.'}},
       {a:{t:'可以做形容词，在句中做定语。',vn:'Có thể làm tính từ, làm định ngữ trong câu.',vd:'本科生上课有单独的教室。',vdVn:'Sinh viên đại học có phòng học riêng.'},
        b:{t:'不可以做形容词。',vn:'Không thể làm tính từ.'}}
     ],
     lamThu:[
       {s:'这所大学为女生提供了＿＿的考试，引起了激烈争论。',dap:[true,false],mau:true,
        giai:'Làm định ngữ (kỳ thi riêng) → chỉ 单独 (câu mẫu của sách).'},
       {s:'他＿＿一人在体育馆里进行训练。',dap:[true,true],
        giai:'"Một mình một người" — giống câu ở phần 共同点, cả 单独 và 独自 đều được.'},
       {s:'教练为他＿＿安排了训练。',dap:[true,false],
        giai:'Sắp xếp buổi tập riêng, tách khỏi người khác → 单独.'},
       {s:'我喜欢早起，＿＿去公园散步，顺便考虑一下一天的工作。',dap:[false,true],
        giai:'Nhấn mạnh một mình tôi đi, không ai cùng → 独自.'}
     ]
   }},

  {pair:'规矩 — 规定',
   same:'Đều là DANH TỪ, đều chỉ những điều mọi người phải làm theo; đều đi với 遵守 / 违反.',
   sameEx:{zh:'不管在哪儿，都要遵守那里的规矩／规定。',vn:'Dù ở đâu cũng phải tuân theo phép tắc / quy định ở đó.'},
   items:[
     {word:'规矩',points:[
       'Phép tắc, nề nếp, lệ — thường là THÓI QUEN, lễ nghi truyền lại, không nhất thiết thành văn bản.',
       'Kết hợp: 懂规矩 / 守规矩 / 老规矩 / 立规矩.',
       'Còn là TÍNH TỪ: đàng hoàng, đúng mực — 规规矩矩.'
     ],ex:[{zh:'我儿子要是能这样懂规矩，该有多么好啊！',vn:'Con trai tôi mà hiểu phép tắc được như thế thì tốt biết bao!'},
          {zh:'按照我们家的老规矩，吃饭时长辈先动筷子。',vn:'Theo lệ cũ nhà tôi, khi ăn cơm người lớn cầm đũa trước.'}]},
     {word:'规定',points:[
       'Quy định do cơ quan, tổ chức đặt ra, thường THÀNH VĂN, có tính bắt buộc.',
       'Còn là ĐỘNG TỪ: 学校规定…… (nhà trường quy định rằng…).',
       'Không nói 懂规定 / 老规定.'
     ],ex:[{zh:'学校规定，上课时不能用手机。',vn:'Nhà trường quy định, trong giờ học không được dùng điện thoại.'},
          {zh:'根据公司的规定，员工每年有十五天假。',vn:'Theo quy định của công ty, nhân viên mỗi năm có mười lăm ngày phép.'}]}
   ],
   quiz:[
     {sentence:'我儿子要是能这样懂＿＿，该有多么好啊！',options:['规矩','规定'],answer:0,
      why:'懂规矩 là cụm cố định (biết phép tắc, lễ phép). Không nói 懂规定 (bài tập 2 của sách).'},
     {sentence:'学校＿＿，上课时不能用手机。',options:['规矩','规定'],answer:1,
      why:'Làm ĐỘNG TỪ (nhà trường quy định rằng…) → chỉ 规定.'},
     {sentence:'按照我们家的老＿＿，过年时全家人要一起吃年夜饭。',options:['规矩','规定'],answer:0,
      why:'Lệ cũ trong gia đình, không thành văn → 老规矩.'},
     {sentence:'根据公司的＿＿，员工每年有十五天假。',options:['规矩','规定'],answer:1,
      why:'Quy định chính thức, thành văn của công ty → 规定.'}
   ]},

  {pair:'目标 — 目的',
   same:'Đều là DANH TỪ, đều liên quan đến điều mình muốn đạt được khi làm một việc.',
   sameEx:{zh:'他终于达到了自己的目标／目的。',vn:'Cuối cùng anh ấy đã đạt được mục tiêu / mục đích của mình.'},
   items:[
     {word:'目标',points:[
       'CÁI ĐÍCH cụ thể muốn đạt tới (có thể nhìn thấy, đo được): 考上名牌大学, 当经理.',
       'Kết hợp: 实现目标 / 远大的目标 / 人生目标 / 目标一致.',
       'Còn là đối tượng để nhắm bắn, tấn công.'
     ],ex:[{zh:'她觉得经商才是自己的目标。',vn:'Cô ấy thấy kinh doanh mới là mục tiêu của mình.'},
          {zh:'为了实现这个目标，他每天都学习到很晚。',vn:'Để thực hiện mục tiêu này, ngày nào cậu ấy cũng học đến khuya.'}]},
     {word:'目的',points:[
       'LÝ DO, ý định vì sao làm việc đó (làm việc này để làm gì).',
       'Hay gặp: ……的目的是…… / 达到目的 / 有目的地.',
       'Không nói 实现目的 / 远大的目的.'
     ],ex:[{zh:'我给他打电话的目的是看他回来了没有。',vn:'Tôi gọi điện cho anh ấy là để xem anh ấy về chưa.'},
          {zh:'你来中国留学的目的是什么？',vn:'Mục đích bạn sang Trung Quốc du học là gì?'}]}
   ],
   quiz:[
     {sentence:'我给他打电话的＿＿是看他回来了没有。',options:['目标','目的'],answer:1,
      why:'Nói LÝ DO của việc gọi điện (V + 的目的是…) → 目的 (bài tập 2 của sách).'},
     {sentence:'她觉得经商才是自己的＿＿。',options:['目标','目的'],answer:0,
      why:'Cái đích muốn theo đuổi trong đời → 目标 (câu bài khoá).'},
     {sentence:'为了实现这个＿＿，他每天都学习到很晚。',options:['目标','目的'],answer:0,
      why:'实现 + 目标 là kết hợp cố định; không nói 实现目的.'},
     {sentence:'你来中国留学的＿＿是什么？',options:['目标','目的'],answer:1,
      why:'Hỏi lý do (vì sao đi du học) → 目的.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'遵守',hv:'tuân thủ',vn:'tuân thủ',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'纪律',hv:'kỷ luật',vn:'kỷ luật',note:'Trùng khít.'},
    {zh:'阶段',hv:'giai đoạn',vn:'giai đoạn',note:'Trùng khít.'},
    {zh:'担任',hv:'đảm nhiệm',vn:'đảm nhiệm',note:'Trùng khít — 担任主席 = đảm nhiệm chức chủ tịch.'},
    {zh:'主席',hv:'chủ tịch',vn:'chủ tịch',note:'Trùng khít — 学生会主席 = chủ tịch hội sinh viên.'},
    {zh:'组织',hv:'tổ chức',vn:'tổ chức',note:'Trùng khít, cả nghĩa động từ lẫn danh từ.'},
    {zh:'外交',hv:'ngoại giao',vn:'ngoại giao',note:'Trùng khít — 外交官 = nhà ngoại giao.'},
    {zh:'目标',hv:'mục tiêu',vn:'mục tiêu',note:'Trùng khít.'},
    {zh:'一致',hv:'nhất trí',vn:'nhất trí, thống nhất',note:'Trùng khít — 一致同意 = nhất trí đồng ý.'},
    {zh:'让步',hv:'nhượng bộ',vn:'nhượng bộ',note:'Trùng khít.'},
    {zh:'征求',hv:'trưng cầu',vn:'hỏi (ý kiến)',note:'Như "trưng cầu ý kiến" — 征求意见.'},
    {zh:'基本',hv:'cơ bản',vn:'cơ bản',note:'Trùng khít — 基本上 = về cơ bản.'},
    {zh:'沉默',hv:'trầm mặc',vn:'im lặng',note:'Tiếng Việt văn chương cũng nói "trầm mặc" = lặng lẽ, ít nói.'},
    {zh:'经商',hv:'kinh thương',vn:'kinh doanh, buôn bán',note:'"Thương" như "thương mại", "thương nhân".'}
  ],
  idiom:[
    {zh:'望子成龙',hv:'vọng tử thành long',vn:'mong con thành tài',note:'Thành ngữ trong phần 运用 của bài: cha mẹ mong con cái thành "rồng" — thành người xuất sắc.'},
    {zh:'隐隐约约',hv:'ẩn ẩn ước ước',vn:'lờ mờ, mơ hồ',note:'Dạng lặp AABB của 隐约; "ẩn" như ẩn hiện → thấp thoáng, không rõ.'},
    {zh:'说了算',hv:'thuyết liễu toán',vn:'có quyền quyết định',note:'Khẩu ngữ: lời ai nói ra là "tính" → người đó quyết. 基本上都是妈妈说了算.'}
  ],
  trap:[
    {zh:'刻苦',hv:'khắc khổ',vn:'chăm chỉ, chịu khó',
     warn:'BẪY: "khắc khổ" tiếng Việt = khổ hạnh, gian khổ (khuôn mặt khắc khổ). 刻苦 là KHEN: chịu khó, cần cù — 学习很刻苦.'},
    {zh:'单独',hv:'đơn độc',vn:'một mình, riêng',
     warn:'"Đơn độc" tiếng Việt gợi cô đơn, lẻ loi (buồn). 单独 chỉ trung tính: riêng ra, một mình — 单独谈谈 = nói chuyện riêng.'},
    {zh:'讲座',hv:'giảng toạ',vn:'buổi thuyết trình chuyên đề',
     warn:'Không phải "giảng đường" (教室 / 礼堂). 讲座 là BUỔI nói chuyện chuyên đề: 听讲座.'},
    {zh:'能干',hv:'năng cán',vn:'giỏi giang, tháo vát',
     warn:'"Cán" ở đây là 干 (làm việc), không liên quan "cán bộ" hay "cán" (cán bột). 能干 = làm việc giỏi.'},
    {zh:'系',hv:'hệ',vn:'khoa (đại học)',
     warn:'Không phải "hệ" (hệ thống, hệ đào tạo). 中文系 = KHOA tiếng Trung.'},
    {zh:'亲爱',hv:'thân ái',vn:'thân yêu, yêu quý',
     warn:'"Thân ái" tiếng Việt khá trang trọng (chào thân ái). 亲爱的 rất thân mật: 亲爱的妈妈, gọi người yêu 亲爱的.'},
    {zh:'录取',hv:'lục thủ',vn:'tuyển, nhận vào',
     warn:'"Lục" ở đây là ghi chép (记录), không phải "lục soát". 录取 = ghi tên nhận vào: 被大学录取.'},
    {zh:'陌生',hv:'mạch sinh',vn:'lạ, xa lạ',
     warn:'Âm Hán Việt không gợi nghĩa. Nhớ: 陌 = đường bờ ruộng → người "ngoài đường" → 陌生人 = người lạ.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bài tập 3 (画线连接) + bảng 词语搭配 của sách (tr. 51, 53)
// ══════════════════════════════════════════
var matchData = [
  {left:'征求',right:'意见'},
  {left:'面临',right:'危机'},
  {left:'出席',right:'宴会'},
  {left:'担任',right:'经理'},
  {left:'一致的',right:'结论'},
  {left:'精彩的',right:'讲座'},
  {left:'陌生的',right:'单位'},
  {left:'能干的',right:'主席'},
  {left:'遵守',right:'纪律'},
  {left:'违反',right:'规定'},
  {left:'基本的',right:'条件'},
  {left:'及时地',right:'沟通'},
  {left:'轻轻地',right:'吻'},
  {left:'学习',right:'刻苦'},
  {left:'目标',right:'远大'},
  {left:'建立',right:'友谊'},
  {left:'录取',right:'通知书'},
  {left:'横穿',right:'马路'},
  {left:'泡',right:'酒吧'},
  {left:'组织',right:'活动'},
  {left:'忍不住',right:'流下了眼泪'},
  {left:'保持',right:'沉默'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这孩子真',blank:'乖',post:'，吃完饭就自己去写作业了。',hint:'(ngoan)',ans:'乖'},
  {pre:'他学习非常',blank:'刻苦',post:'，每天早上六点就起床背单词。',hint:'(chăm chỉ, chịu khó)',ans:'刻苦'},
  {pre:'开车的时候一定要',blank:'遵守',post:'交通规则。',hint:'(tuân thủ)',ans:'遵守'},
  {pre:'上课玩手机是违反课堂',blank:'纪律',post:'的。',hint:'(kỷ luật)',ans:'纪律'},
  {pre:'这件事情，我建议你先回去',blank:'征求',post:'一下父母的意见。',hint:'(hỏi — ý kiến)',ans:'征求'},
  {pre:'我哥哥在河内',blank:'念',post:'大学，学的是经济。',hint:'(học — khẩu ngữ)',ans:'念'},
  {pre:'这个工程已经',blank:'基本',post:'完成了。',hint:'(về cơ bản)',ans:'基本'},
  {pre:'这个项目已经进入了最后',blank:'阶段',post:'。',hint:'(giai đoạn)',ans:'阶段'},
  {pre:'',blank:'亲爱',post:'的同学们，欢迎你们来到我们学校！',hint:'(thân mến)',ans:'亲爱'},
  {pre:'在公共场所抽烟是',blank:'违反',post:'规定的。',hint:'(vi phạm)',ans:'违反'},
  {pre:'按照我们家的老',blank:'规矩',post:'，吃饭时长辈先动筷子。',hint:'(phép tắc, lệ)',ans:'规矩'},
  {pre:'小李是经理最',blank:'能干',post:'的助手。',hint:'(giỏi giang)',ans:'能干'},
  {pre:'学校下周要举办一场关于留学的',blank:'讲座',post:'。',hint:'(buổi toạ đàm)',ans:'讲座'},
  {pre:'校长将',blank:'出席',post:'明天的毕业典礼。',hint:'(có mặt, dự)',ans:'出席'},
  {pre:'周末晚上，这条',blank:'酒吧',post:'街特别热闹。',hint:'(quán bar)',ans:'酒吧'},
  {pre:'这次比赛由我',blank:'担任',post:'翻译。',hint:'(đảm nhiệm)',ans:'担任'},
  {pre:'大学期间，我曾经当过学生会',blank:'主席',post:'。',hint:'(chủ tịch)',ans:'主席'},
  {pre:'班长',blank:'组织',post:'全班同学去公园打扫卫生。',hint:'(tổ chức)',ans:'组织'},
  {pre:'妈妈以前希望她当',blank:'外交',post:'官。',hint:'(ngoại giao)',ans:'外交'},
  {pre:'她觉得',blank:'经商',post:'才是自己的目标。',hint:'(kinh doanh)',ans:'经商'},
  {pre:'为了实现这个',blank:'目标',post:'，他每天都学习到十一点。',hint:'(mục tiêu)',ans:'目标'},
  {pre:'我姐姐是河内国家大学中文',blank:'系',post:'的学生。',hint:'(khoa)',ans:'系'},
  {pre:'结果12所世界',blank:'名牌',post:'大学录取了她。',hint:'(danh tiếng)',ans:'名牌'},
  {pre:'我昨天收到了大学的',blank:'录取',post:'通知书。',hint:'(trúng tuyển)',ans:'录取'},
  {pre:'高三学生都',blank:'面临',post:'着考大学的压力。',hint:'(đứng trước)',ans:'面临'},
  {pre:'专家们',blank:'一致',post:'认为这是一种成功的产品，可以放心使用。',hint:'(nhất trí)',ans:'一致'},
  {pre:'夫妻之间吵架时，要懂得互相',blank:'让步',post:'。',hint:'(nhường nhịn)',ans:'让步'},
  {pre:'我',blank:'隐约',post:'听到门外有人在叫我的名字。',hint:'(lờ mờ)',ans:'隐约'},
  {pre:'小孩子不要随便给',blank:'陌生',post:'人开门。',hint:'(lạ)',ans:'陌生'},
  {pre:'妈妈感到她们好像交换了',blank:'某',post:'种身份。',hint:'(nào đó)',ans:'某'},
  {pre:'我和同桌在三年里',blank:'建立',post:'了深厚的友谊。',hint:'(xây dựng)',ans:'建立'},
  {pre:'你下午有时间吗？我想和你',blank:'单独',post:'谈谈。',hint:'(riêng)',ans:'单独'},
  {pre:'有问题要及时跟父母',blank:'沟通',post:'。',hint:'(trao đổi)',ans:'沟通'},
  {pre:'过马路要走人行横道，不要随便',blank:'横',post:'穿马路。',hint:'(ngang)',ans:'横'},
  {pre:'孩子们在',blank:'沙滩',post:'上玩儿得特别开心。',hint:'(bãi cát)',ans:'沙滩'},
  {pre:'文文',blank:'沉默',post:'了很久，最后吻了妈妈一下。',hint:'(im lặng)',ans:'沉默'},
  {pre:'妈妈轻轻地',blank:'吻',post:'了一下孩子的额头。',hint:'(hôn)',ans:'吻'},
  {pre:'他的话太好笑了，大家都',blank:'忍不住',post:'笑了起来。',hint:'(không nhịn được)',ans:'忍不住'},
  {pre:'',blank:'幸亏',post:'你提醒了我，要不然我就忘了。',hint:'(may mà)',ans:'幸亏'},
  {pre:'太阳下山以后，天慢慢',blank:'暗',post:'下来了。',hint:'(tối)',ans:'暗'},
  {pre:'',blank:'文文',post:'从小是个乖乖女，学习刻苦，遵守纪律。',hint:'(tên cô con gái trong bài)',ans:'文文'},
  {pre:'法国和德国都是',blank:'欧盟',post:'国家。',hint:'(EU)',ans:'欧盟'},
  {pre:'能被',blank:'牛津大学',post:'这样的世界名校录取多好啊！',hint:'(Đại học Oxford)',ans:'牛津大学'},
  {pre:'几年后，妈妈去',blank:'洛杉矶',post:'看在美国工作的女儿。',hint:'(Los Angeles)',ans:'洛杉矶'},
  {pre:'母女俩躺在',blank:'夏威夷',post:'的沙滩上谈心。',hint:'(Hawaii)',ans:'夏威夷'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (一致 · 某 · 幸亏) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['文文','跟父母的','意见','不一致','。'],ans:'文文跟父母的意见不一致。',audio:'文文跟父母的意见不一致。'},
  {words:['专家们','一致','认为','这是','一种','成功的产品','。'],ans:'专家们一致认为这是一种成功的产品。',audio:'专家们一致认为这是一种成功的产品。'},
  {words:['我们','终于','取得','一致','了','。'],ans:'我们终于取得一致了。',audio:'我们终于取得一致了。'},
  {words:['妈妈','感到','她们好像','交换了','某种','身份','。'],ans:'妈妈感到她们好像交换了某种身份。',audio:'妈妈感到她们好像交换了某种身份。'},
  {words:['我好像','在','某个地方','见过','他','。'],ans:'我好像在某个地方见过他。',audio:'我好像在某个地方见过他。'},
  {words:['幸亏','你','提醒了我','，','我','才','没迟到','。'],ans:'幸亏你提醒了我，我才没迟到。',audio:'幸亏你提醒了我，我才没迟到。'},
  {words:['幸亏','我昨天','带了伞','，','才','没被','雨淋湿','。'],ans:'幸亏我昨天带了伞，才没被雨淋湿。',audio:'幸亏我昨天带了伞，才没被雨淋湿。'},
  {words:['她是个','遵守纪律的','乖孩子','。'],ans:'她是个遵守纪律的乖孩子。',audio:'她是个遵守纪律的乖孩子。'},
  {words:['我的目标','是','被','名牌大学','录取','。'],ans:'我的目标是被名牌大学录取。',audio:'我的目标是被名牌大学录取。'},
  {words:['他','很善于','和陌生人','沟通','。'],ans:'他很善于和陌生人沟通。',audio:'他很善于和陌生人沟通。'},
  {words:['她','参加了学生会','并','担任了','学生会主席','。'],ans:'她参加了学生会并担任了学生会主席。',audio:'她参加了学生会并担任了学生会主席。'},
  {words:['妈妈','忍不住','流下了','眼泪','。'],ans:'妈妈忍不住流下了眼泪。',audio:'妈妈忍不住流下了眼泪。'},
  {words:['这一次','妈妈','让步了','。'],ans:'这一次妈妈让步了。',audio:'这一次妈妈让步了。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这所大学为女生提供了____的考试，引起了激烈争论。',opts:['单独','独自','一致','陌生'],ans:0,
   exp:'Làm định ngữ trước 的考试 → 单独 (tính từ: riêng). 独自 không làm định ngữ; 一致, 陌生 sai nghĩa.'},
  {wrong:'教练为他____安排了训练。',opts:['单独','独自','基本','隐约'],ans:0,
   exp:'Sắp xếp buổi tập riêng, tách khỏi người khác → 单独. 独自 phải là chính chủ ngữ tự làm một mình.'},
  {wrong:'我喜欢早起，____去公园散步，顺便考虑一下一天的工作。',opts:['独自','单独的','一致','基本'],ans:0,
   exp:'Một mình tôi đi dạo → 独自 (phó từ). 单独的 là định ngữ, không đứng trước động từ.'},
  {wrong:'我儿子要是能这样懂____，该有多么好啊！',opts:['规矩','规定','纪律','目标'],ans:0,
   exp:'懂规矩 = biết phép tắc (cụm cố định). Không nói 懂规定 / 懂纪律.'},
  {wrong:'学校____，上课时不能用手机。',opts:['规定','规矩','纪律','目标'],ans:0,
   exp:'Cần ĐỘNG TỪ "quy định rằng" → 规定. 规矩, 纪律 chỉ là danh từ.'},
  {wrong:'____了吴县长，咱不用出村就把苹果都卖了。',opts:['多亏','幸亏','一致','沟通'],ans:0,
   exp:'多亏 + 了 + người = nhờ có ai (bài tập 2 của sách). 幸亏 là phó từ, đứng trước một mệnh đề, không mang 了 + danh từ.'},
  {wrong:'我给他打电话的____是看他回来了没有。',opts:['目的','目标','阶段','规矩'],ans:0,
   exp:'Nói lý do của việc gọi điện → 目的. 目标 là cái đích muốn đạt tới.'},
  {wrong:'他的建议一提出，就得到了大家的____认可。',opts:['一致','一样','陌生','单独'],ans:0,
   exp:'一致认可 = nhất trí công nhận. 一样 nói về sự giống nhau khi so sánh, không đứng trước 认可.'},
  {wrong:'公司已与这家银行____起了良好的业务关系。',opts:['建立','建设','组织','担任'],ans:0,
   exp:'建立 + 关系 (thiết lập quan hệ). 建设 là xây dựng công trình, đất nước.'},
  {wrong:'你跟幼儿园的老师____一下，看看到底是什么原因。',opts:['沟通','征求','面临','录取'],ans:0,
   exp:'跟 + người + 沟通 = trao đổi với ai. 征求 phải có tân ngữ 意见.'},
  {wrong:'喜欢篮球的观众对姚明这个名字一定不会____。',opts:['陌生','沉默','单独','刻苦'],ans:0,
   exp:'对……不陌生 = không lạ gì với ….'},
  {wrong:'那个小姑娘既____又漂亮。',opts:['能干','刻苦','一致','陌生'],ans:0,
   exp:'既能干又漂亮 = vừa giỏi giang vừa xinh. 刻苦 dùng cho việc học, luyện tập.'},
  {wrong:'妈妈在电话那端____了一会儿说：“真抱歉！我差点儿忘了。”',opts:['沉默','隐约','让步','沟通'],ans:0,
   exp:'Im lặng một lúc rồi mới nói → 沉默了一会儿.'},
  {wrong:'她参加了学生会并____了学生会主席。',opts:['担任','出席','组织','面临'],ans:0,
   exp:'担任 + chức vụ (主席). 出席 + sự kiện (会议, 宴会).'},
  {wrong:'下个月的国际会议，将有三十多个国家的代表____。',opts:['出席','担任','录取','建立'],ans:0,
   exp:'Có mặt tại hội nghị trang trọng → 出席.'},
  {wrong:'当____是否选择牛津大学时，她们全家开会。',opts:['面临','录取','出席','征求'],ans:0,
   exp:'当面临……时 = khi đứng trước (lựa chọn, khó khăn).'},
  {wrong:'这件事，你应该先____一下父母的意见。',opts:['征求','沟通','要求','建立'],ans:0,
   exp:'征求 + (người + 的) + 意见 = hỏi ý kiến. 沟通 không mang tân ngữ 意见.'},
  {wrong:'人们如果长期进行____一方面的训练，就可以提高大脑的反应能力。',opts:['某','每','各','另'],ans:0,
   exp:'某一方面 = một mặt nào đó (không xác định) — câu ví dụ của sách.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'May mà cậu nhắc tớ, nếu không tớ quên mất rồi.',zh:'幸亏你提醒了我，要不然我就忘了。',py:'Xìngkuī nǐ tíxǐngle wǒ, yàobùrán wǒ jiù wàng le.'},
  {vi:'Ý kiến của tôi và bố mẹ không thống nhất.',zh:'我跟父母的意见不一致。',py:'Wǒ gēn fùmǔ de yìjiàn bù yízhì.'},
  {vi:'Các chuyên gia nhất trí cho rằng đây là một sản phẩm thành công.',zh:'专家们一致认为这是一种成功的产品。',py:'Zhuānjiāmen yízhì rènwéi zhè shì yì zhǒng chénggōng de chǎnpǐn.'},
  {vi:'Tôi thấy hình như đã gặp anh ấy ở đâu đó rồi.',zh:'我好像在某个地方见过他。',py:'Wǒ hǎoxiàng zài mǒu ge dìfang jiànguo tā.'},
  {vi:'Mục tiêu của tôi là được một trường đại học danh tiếng nhận vào.',zh:'我的目标是被名牌大学录取。',py:'Wǒ de mùbiāo shì bèi míngpái dàxué lùqǔ.'},
  {vi:'Anh ấy rất giỏi giao tiếp với người lạ.',zh:'他很善于和陌生人沟通。',py:'Tā hěn shànyú hé mòshēngrén gōutōng.'},
  {vi:'Việc quan trọng như vậy, bạn nên hỏi ý kiến bố mẹ trước.',zh:'这么重要的事情，你应该先征求一下父母的意见。',py:'Zhème zhòngyào de shìqing, nǐ yīnggāi xiān zhēngqiú yíxià fùmǔ de yìjiàn.'},
  {vi:'Cô bé là một đứa trẻ ngoan, biết giữ kỷ luật.',zh:'她是个遵守纪律的乖孩子。',py:'Tā shì ge zūnshǒu jìlǜ de guāi háizi.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Văn Văn từ nhỏ đã là cô con gái ngoan, học hành chăm chỉ, giữ kỷ luật.',zh:'文文从小是个乖乖女，学习刻苦，遵守纪律。',py:'Wénwen cóngxiǎo shì ge guāiguāinǚ, xuéxí kèkǔ, zūnshǒu jìlǜ.'},
  {vi:'Học trường nào, học ngành gì, về cơ bản đều do mẹ quyết.',zh:'上哪所学校、念什么专业，基本上都是妈妈说了算。',py:'Shàng nǎ suǒ xuéxiào, niàn shénme zhuānyè, jīběn shang dōu shì māma shuōle suàn.'},
  {vi:'Cô tham gia hội sinh viên và làm chủ tịch hội, còn tổ chức đủ loại hoạt động xã hội.',zh:'她参加了学生会并担任了学生会主席，还组织各种社会活动。',py:'Tā cānjiāle xuéshēnghuì bìng dānrènle xuéshēnghuì zhǔxí, hái zǔzhī gè zhǒng shèhuì huódòng.'},
  {vi:'Cô thấy kinh doanh mới là mục tiêu của mình.',zh:'她觉得经商才是自己的目标。',py:'Tā juéde jīng shāng cái shì zìjǐ de mùbiāo.'},
  {vi:'Nhưng Văn Văn không cùng ý kiến với họ, cô nhất quyết muốn đi Mỹ.',zh:'但文文跟他们的意见不一致，她坚持要去美国。',py:'Dàn Wénwen gēn tāmen de yìjiàn bù yízhì, tā jiānchí yào qù Měiguó.'},
  {vi:'Chính việc mẹ buông tay đã khiến con diều bay càng lúc càng cao.',zh:'正是妈妈的放手，让风筝越飞越高。',py:'Zhèng shì māma de fàngshǒu, ràng fēngzheng yuè fēi yuè gāo.'},
  {vi:'Ở nơi xa lạ này, người mẹ cảm thấy hai mẹ con như đã đổi vai cho nhau.',zh:'在这个陌生的地方，妈妈感到她们好像交换了某种身份。',py:'Zài zhège mòshēng de dìfang, māma gǎndào tāmen hǎoxiàng jiāohuànle mǒu zhǒng shēnfen.'},
  {vi:'Người mẹ không kìm được nước mắt. Bà nói: "May mà tối hôm đó trời rất tối."',zh:'妈妈忍不住流下了眼泪。她说：“幸亏那晚天色很暗。”',py:'Māma rěnbuzhù liúxiàle yǎnlèi. Tā shuō: “Xìngkuī nà wǎn tiānsè hěn àn.”'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 我想对父母说的是……)
// ══════════════════════════════════════════
var writingData = {
  words:['沟通','一致','征求','目标','幸亏'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "Điều em muốn nói với bố mẹ", kể về quan hệ giữa em và bố mẹ.',
  outline:[
    'Câu mở: điều em muốn nói với bố mẹ (lời cảm ơn / mong muốn).',
    'Thân 1: trước đây — mọi việc do ai quyết, em và bố mẹ có hay khác ý không (dùng 一致).',
    'Thân 2: sự thay đổi — hai bên trò chuyện, bố mẹ hỏi ý kiến em (dùng 沟通, 征求).',
    'Kết: mục tiêu của em, và nhờ bố mẹ mà em có động lực (dùng 目标, 幸亏).'
  ],
  model:{
    zh:'我想对父母说：谢谢你们学会了放手。以前，上什么补习班基本上都是妈妈说了算，我们的意见常常不一致。后来我们坐下来好好沟通，现在做决定以前，他们都会先征求我的意见。我的目标是考上一所好大学。幸亏有父母的理解和支持，我学习起来更有动力了。',
    py:'Wǒ xiǎng duì fùmǔ shuō: xièxie nǐmen xuéhuìle fàngshǒu. Yǐqián, shàng shénme bǔxíbān jīběn shang dōu shì māma shuōle suàn, wǒmen de yìjiàn chángcháng bù yízhì. Hòulái wǒmen zuò xialai hǎohāor gōutōng, xiànzài zuò juédìng yǐqián, tāmen dōu huì xiān zhēngqiú wǒ de yìjiàn. Wǒ de mùbiāo shì kǎoshàng yì suǒ hǎo dàxué. Xìngkuī yǒu fùmǔ de lǐjiě hé zhīchí, wǒ xuéxí qilai gèng yǒu dònglì le.',
    vn:'Điều con muốn nói với bố mẹ là: cảm ơn bố mẹ đã học được cách buông tay. Trước đây, học lớp thêm nào về cơ bản đều do mẹ quyết, ý kiến của chúng tôi thường không thống nhất. Về sau cả nhà ngồi lại nói chuyện đàng hoàng với nhau, giờ trước khi quyết định việc gì, bố mẹ đều hỏi ý kiến tôi trước. Mục tiêu của tôi là đỗ vào một trường đại học tốt. May mà có sự thấu hiểu và ủng hộ của bố mẹ, tôi học càng có động lực hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '沟通 đã đi với 跟 / 和 + người chưa (không viết 沟通父母)?',
    '征求 có tân ngữ là 意见 / 看法 chưa (征求 + người + 的意见)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你和父母之间的关系。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'沟通', loai:'động từ', cach:'跟 / 和 / 与 + người + 沟通 · 及时沟通 · 善于沟通',
     sai:[{re:'沟通(了)?(他|她|父母|妈妈|爸爸|老师|同学)', sua:'跟 + người + 沟通', giai:'沟通 thường không mang tân ngữ chỉ người. Viết: 跟父母沟通, không viết 沟通父母.'},
          {re:'(很|非常)沟通', sua:'沟通得很好 / 很善于沟通', giai:'沟通 là động từ, không đứng sau 很. Muốn khen: 很善于沟通 / 沟通得很好.'}]},
    {tu:'一致', loai:'tính từ / phó từ', cach:'A 跟 B 的意见 (不)一致 · 一致认为 · 取得一致',
     sai:[{re:'(和|跟|与)[^，。]{1,6}一致(的)?(意见|看法)', sua:'A 跟 B 的意见一致', giai:'Nói "có ý kiến giống ai": A 跟 B 的意见一致 — 一致 đứng SAU 意见 làm vị ngữ.'},
          {re:'意见(很|都|不)?一样', sua:'意见(不)一致', giai:'Nói về quan điểm, văn viết dùng 意见一致 / 意见不一致 tự nhiên hơn 一样.', nhe:true}]},
    {tu:'征求', loai:'động từ', cach:'征求 + 人 + 的意见 · 向 + 人 + 征求意见',
     sai:[{re:'征求[^，。]{0,4}(问题|帮助|同意)', sua:'征求意见 / 看法', giai:'征求 chỉ đi với 意见 / 看法 / 建议. Xin giúp đỡ nói 请……帮忙; xin phép nói 征得……同意.'},
          {re:'征求(他|她|我|父母|妈妈|爸爸|老师|大家)[，。]', sua:'征求 + 人 + 的意见', giai:'Tân ngữ của 征求 là 意见, không phải người: 征求父母的意见.'}]},
    {tu:'目标', loai:'danh từ', cach:'我的目标是…… · 实现目标 · 远大的目标',
     sai:[{re:'目标是为了', sua:'目的是为了', giai:'"Mục đích là để…" dùng 目的是为了. 目标 là cái đích cụ thể: 我的目标是考上……'},
          {re:'实现[^，。]{0,4}目的', sua:'实现……目标 / 达到……目的', giai:'Đi với 实现 là 目标 (实现目标); 目的 đi với 达到 (达到目的).'}]},
    {tu:'幸亏', loai:'phó từ', cach:'幸亏 A，(才 / 要不然) B',
     sai:[{re:'幸亏[^。！？]*(所以|因此)', sua:'幸亏……，才…… / 要不然……', giai:'幸亏 đã hàm ý nguyên nhân, vế sau dùng 才 / 要不然, không dùng 所以.'},
          {re:'(很|非常|真)幸亏', sua:'幸亏 / 真幸运', giai:'幸亏 là phó từ, không đứng sau 很 / 真. Muốn nói "thật may": 真幸运 / 太好了.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'幸亏 A，(才 / 要不然) B', nhan:'幸亏', vd:'幸亏有父母的理解和支持，我才坚持了下来。', khi:'Câu KẾT — nói nhờ đâu mà mình có được điều tốt.'},
    {ten:'A 跟 B 的意见 (不)一致', nhan:'一致', vd:'以前我跟妈妈的意见常常不一致。', khi:'Kể về bất đồng giữa em và bố mẹ.'},
    {ten:'征求 + 人 + 的意见', nhan:'征求', vd:'现在做决定以前，他们都会先征求我的意见。', khi:'Kể sự thay đổi — bố mẹ tôn trọng em hơn.'},
    {ten:'跟 + người + 沟通', nhan:'沟通', vd:'后来我们坐下来好好沟通。', khi:'Kể cách hai bên giải quyết bất đồng.'},
    {ten:'我的目标是……', nhan:'目标', vd:'我的目标是被名牌大学录取。', khi:'Nói về dự định, ước mơ của mình.'},
    {ten:'……基本上都是……说了算', nhan:'说了算', vd:'上什么学校基本上都是妈妈说了算。', khi:'Câu mở — kể chuyện "ngày xưa" (câu bài khoá).'},
    {ten:'不是……而是……', nhan:'而是', vd:'我不是不听话，而是想有自己的选择。', khi:'Giải thích suy nghĩ thật của mình (ôn HSK 4).'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 của sách bài tập + câu bài khoá)
  sapXep:[
    {manh:['乖孩子','遵守纪律的','她是个'],
     dap:'她是个遵守纪律的乖孩子。',
     vn:'Cô bé là một đứa trẻ ngoan, biết giữ kỷ luật.',
     giai:'她是个 + định ngữ (遵守纪律的) + danh từ trung tâm 乖孩子. Câu 29 sách bài tập.'},
    {manh:['被名牌大学','目标是','录取','我的'],
     dap:'我的目标是被名牌大学录取。',
     chap:['被名牌大学录取是我的目标。'],
     vn:'Mục tiêu của tôi là được một trường đại học danh tiếng nhận vào.',
     giai:'我的目标是 + cụm bị động 被名牌大学录取. Cũng có thể đảo: 被名牌大学录取是我的目标 (câu 30 sách bài tập).'},
    {manh:['和陌生人','善于','他很','沟通'],
     dap:'他很善于和陌生人沟通。',
     vn:'Anh ấy rất giỏi giao tiếp với người lạ.',
     giai:'他很善于 + (和 + người + 沟通). Cụm 和陌生人 đứng TRƯỚC động từ 沟通 (câu 31 sách bài tập).'},
    {manh:['一致','专家们','认为','这是一种成功的产品'],
     dap:'专家们一致认为这是一种成功的产品。',
     vn:'Các chuyên gia nhất trí cho rằng đây là một sản phẩm thành công.',
     giai:'一致 làm phó từ, đứng sau chủ ngữ, trước động từ 认为.'},
    {manh:['提醒了我，','幸亏你','才没迟到','我'],
     dap:'幸亏你提醒了我，我才没迟到。',
     vn:'May mà cậu nhắc tớ, tớ mới không bị muộn.',
     giai:'幸亏 + nguyên nhân tốt，chủ ngữ + 才 + kết quả.'},
    {manh:['交换了','她们好像','某种身份','妈妈感到'],
     dap:'妈妈感到她们好像交换了某种身份。',
     vn:'Người mẹ cảm thấy hai mẹ con như đã đổi cho nhau một thân phận nào đó.',
     giai:'妈妈感到 + mệnh đề (她们好像交换了某种身份); 某种 + danh từ.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 子女教育
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (子女教育 · 放手). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 沟通 · 一致 · 征求 · 目标 · 幸亏 · 让步 · 能干 · 陌生.',
  questions:[
    {q_zh:'在学习问题上，你和父母有过争吵吗？',
     q_vn:'Về chuyện học hành, em và bố mẹ đã từng cãi nhau chưa?',
     hint:'Kể một lần bất đồng, dùng 意见不一致 và 让步',
     sample:'有过。上高一的时候，我想学画画儿，可是爸爸妈妈希望我多上数学补习班，我们的意见很不一致。后来我们好好谈了一次，他们让步了。',
     sample_vn:'Có ạ. Hồi lớp 10, em muốn học vẽ, nhưng bố mẹ muốn em học thêm toán nhiều hơn, ý kiến cả nhà rất khác nhau. Sau đó cả nhà nói chuyện đàng hoàng một lần, bố mẹ đã nhượng bộ.',
     note:'Kể có đầu có cuối: bất đồng → nói chuyện → kết quả. Giám khảo HSKK chấm mạch lạc.'},
    {q_zh:'你和父母交流时，你感觉你们是平等的吗？',
     q_vn:'Khi trò chuyện với bố mẹ, em có cảm thấy hai bên bình đẳng không?',
     hint:'Nêu cảm nhận + ví dụ, dùng 征求 + 意见',
     sample:'我觉得基本上是平等的。现在家里有什么事，爸爸妈妈都会先征求我的意见，就算我们的看法不一样，他们也会听我说完。',
     sample_vn:'Em thấy về cơ bản là bình đẳng. Bây giờ nhà có việc gì, bố mẹ đều hỏi ý kiến em trước, dù quan điểm khác nhau thì bố mẹ cũng nghe em nói hết.',
     note:'Dùng 基本上 để câu trả lời chừng mực, không tuyệt đối.'},
    {q_zh:'当你遇到问题或犯了错误时，父母是怎么帮助你的？举例说明。',
     q_vn:'Khi em gặp khó khăn hoặc mắc lỗi, bố mẹ đã giúp em thế nào? Hãy nêu ví dụ.',
     hint:'Kể một ví dụ cụ thể, dùng 幸亏 ở câu kết',
     sample:'有一次我考试没考好，不敢告诉妈妈。妈妈知道以后没有批评我，而是跟我一起找原因。幸亏有她的鼓励，我下次考得好多了。',
     sample_vn:'Có lần em thi không tốt, không dám nói với mẹ. Mẹ biết rồi không mắng em, mà cùng em tìm nguyên nhân. May mà có mẹ động viên, lần sau em thi tốt hơn nhiều.',
     note:'Ví dụ càng GẦN đời sống của em càng thuyết phục.'},
    {q_zh:'你怎么看“望子成龙”？你觉得父母应该什么时候对孩子“放手”？',
     q_vn:'Em nghĩ gì về "望子成龙" (mong con thành tài)? Em thấy bố mẹ nên "buông tay" với con cái từ lúc nào?',
     hint:'Nêu quan điểm, liên hệ câu chuyện của Văn Văn, dùng 沟通 / 目标',
     sample:'父母望子成龙是可以理解的，但是每个孩子都有自己的目标。我觉得孩子上了高中，父母就应该慢慢放手，多跟孩子沟通，让他们自己做决定。',
     sample_vn:'Bố mẹ mong con thành tài là điều dễ hiểu, nhưng đứa trẻ nào cũng có mục tiêu riêng. Em thấy khi con lên cấp ba, bố mẹ nên dần buông tay, trò chuyện với con nhiều hơn, để con tự quyết định.',
     note:'Bố cục "thừa nhận mặt đúng → nêu ý của mình" giúp câu trả lời có chiều sâu.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 23.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第23课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'这件事情，我建议你先回去征求一下父母的意见。'},
            {sp:'男',zh:'老师，我相信父母会支持我的。'}],
     q:'对这件事情，老师的看法是什么？',qvn:'Về việc này, ý kiến của thầy cô là gì?',
     opts:['让男的自己决定','父母一定会支持他','这件事情不重要','应该先问问父母的意见'],ans:3,
     why:'老师 (người nữ) nói: 先回去征求一下父母的意见 = về hỏi ý kiến bố mẹ trước. Câu "父母会支持我" là lời của học sinh — bẫy.',
     words:['征求']},

    {n:2,
     lines:[{sp:'男',zh:'能被牛津大学这样的世界名校录取多好啊！你怎么能放弃呢？'},
            {sp:'女',zh:'牛津大学当然很好，但是我想去美国。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['牛津大学不太好','她没被牛津大学录取','她更想去美国','她还没有决定'],ans:2,
     why:'牛津大学当然很好，但是我想去美国 — thừa nhận Oxford tốt nhưng muốn đi Mỹ hơn. Giống hệt lựa chọn của Văn Văn trong bài khoá.',
     words:['牛津大学','录取']},

    {n:3,
     lines:[{sp:'女',zh:'我们终于取得一致了，真是太不容易了。'},
            {sp:'男',zh:'大家的目标从来都是一致的，都是为了公司好。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['大家的意见一直不一样','取得一致很容易','大家的目标都一样','公司的情况不太好'],ans:2,
     why:'大家的目标从来都是一致的 = mục tiêu của mọi người trước giờ vẫn giống nhau (đều vì công ty).',
     words:['一致','目标']},

    {n:4,
     lines:[{sp:'男',zh:'小王，你怎么不说说你的看法？'},
            {sp:'女',zh:'你不允许我们说不同意，我只好沉默。'}],
     q:'女的是什么态度？',qvn:'Thái độ của người phụ nữ là gì?',
     opts:['非常同意','很满意','不满意，但只好不说话','没有自己的看法'],ans:2,
     why:'你不允许我们说不同意，我只好沉默 — không được phép phản đối nên đành im lặng → trong lòng không đồng tình.',
     words:['沉默']},

    {n:5,
     lines:[{sp:'女',zh:'你跟文文现在发展到什么程度了？'},
            {sp:'男',zh:'昨天我第一次吻了她。'}],
     q:'男的跟文文最可能是什么关系？',qvn:'Người đàn ông và Văn Văn nhiều khả năng có quan hệ gì?',
     opts:['同事','恋人','同学','兄妹'],ans:1,
     why:'发展到什么程度 + 第一次吻了她 → đang yêu nhau (恋人).',
     words:['吻','文文']},

    {n:6,
     lines:[{sp:'男',zh:'你听说了吗，昨天34路车出事了！'},
            {sp:'女',zh:'是啊，我回家经常坐那趟车呢！幸亏昨天加班走得晚，打车回去的。'}],
     q:'女的昨天为什么没坐34路车？',qvn:'Vì sao hôm qua người phụ nữ không đi xe buýt số 34?',
     opts:['那趟车出事了','她不常坐那趟车','她昨天没去上班','她加班走得晚，打车回去了'],ans:3,
     why:'幸亏昨天加班走得晚，打车回去的 — may mà tăng ca về muộn nên đi taxi. "那趟车出事了" là chuyện xảy ra, không phải lý do cô không đi.',
     words:['幸亏']},

    {n:7,
     lines:[{sp:'女',zh:'你都这么大年纪了，还这么辛苦干什么？把生意交给儿子吧。'},
            {sp:'男',zh:'他要是靠得住，我早就交给他了。'},
            {sp:'女',zh:'儿子有什么不好？你总是不信任他！'},
            {sp:'男',zh:'你还说，都是你把他惯坏了！我说往东，他就偏要往西！'}],
     q:'说话人最可能是什么关系？',qvn:'Hai người nói chuyện nhiều khả năng có quan hệ gì?',
     opts:['父子','母子','夫妻','同事'],ans:2,
     why:'Hai người cùng bàn về "con trai" (儿子), người đàn ông trách 都是你把他惯坏了 → là vợ chồng.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'妈妈，我去上班的时候，您自己也可以出去走走，别整天关在家里。'},
            {sp:'女',zh:'我一句外语也不会说，怎么出门啊？'},
            {sp:'男',zh:'放心吧，您先去附近的超市看看。我给您准备好地图，写上我们家的地址，如果找不到您就拿给别人看。'},
            {sp:'女',zh:'那我明天试试吧。'}],
     q:'女的为什么不愿意出门？',qvn:'Vì sao người mẹ không muốn ra ngoài?',
     opts:['身体不太好','不会说外语','不喜欢去超市','没有地图'],ans:1,
     why:'我一句外语也不会说，怎么出门啊 — không biết nói ngoại ngữ. Giống người mẹ trong bài khoá lúc mới sang Mỹ (không thể 单独出门, 与人沟通).',
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
    {scene:'Hôm qua mưa rất to, sáng nay bạn thấy em không hề bị ướt.',
     a:{sp:'Bạn',zh:'昨天下那么大的雨，你怎么没淋湿？',vn:'Hôm qua mưa to thế, sao cậu không bị ướt?'},
     need:['Dùng 幸亏……才……','Nêu lý do cụ thể'],
     sample:'幸亏我出门的时候带了伞，才没被淋湿。',
     samplePy:'Xìngkuī wǒ chū mén de shíhou dàile sǎn, cái méi bèi línshī.',
     sampleVn:'May mà lúc ra khỏi nhà tớ mang ô, nên mới không bị ướt.',
     tip:'幸亏 đứng đầu vế nguyên nhân; vế sau dùng 才 (không dùng 所以). Đây là dạng 练一练 của sách.'},

    {scene:'Lớp em vừa họp chọn địa điểm đi dã ngoại mùa xuân, bạn lớp khác hỏi kết quả.',
     a:{sp:'Bạn',zh:'你们班春游的地点定了吗？',vn:'Lớp cậu chọn xong chỗ đi dã ngoại chưa?'},
     need:['Dùng 一致 (phó từ hoặc tính từ)','Nói rõ địa điểm'],
     sample:'定了，大家一致同意去下龙湾。',
     samplePy:'Dìng le, dàjiā yízhì tóngyì qù Xiàlóng Wān.',
     sampleVn:'Chọn rồi, cả lớp nhất trí đi vịnh Hạ Long.',
     tip:'一致 (phó từ) đứng trước 同意 / 认为 / 表示. Cũng có thể nói: 大家的意见很一致.'},

    {scene:'Bạn thân hỏi em đã chọn ngành đại học chưa, trong khi bố mẹ muốn em học ngành khác.',
     a:{sp:'Bạn',zh:'你决定念什么专业了吗？',vn:'Cậu quyết định học ngành gì chưa?'},
     need:['Dùng 沟通','Nói đến ý kiến của bố mẹ'],
     sample:'我想念中文，可是爸爸妈妈希望我念经济。我打算这个周末好好跟他们沟通一下。',
     samplePy:'Wǒ xiǎng niàn Zhōngwén, kěshì bàba māma xīwàng wǒ niàn jīngjì. Wǒ dǎsuàn zhège zhōumò hǎohāor gēn tāmen gōutōng yíxià.',
     sampleVn:'Tớ muốn học tiếng Trung, nhưng bố mẹ muốn tớ học kinh tế. Tớ định cuối tuần này nói chuyện đàng hoàng với bố mẹ.',
     tip:'跟 + người + 沟通, không nói 沟通他们.'},

    {scene:'Ở trạm xe buýt, em cứ nhìn mãi một người, bạn đi cùng thắc mắc.',
     a:{sp:'Bạn',zh:'你怎么一直看那个人？你认识他吗？',vn:'Sao cậu cứ nhìn người kia mãi thế? Cậu quen à?'},
     need:['Dùng 某 (某个 / 某种)','Nói rằng em không nhớ rõ'],
     sample:'我好像在某个地方见过他，可是一下子想不起来了。',
     samplePy:'Wǒ hǎoxiàng zài mǒu ge dìfang jiànguo tā, kěshì yíxiàzi xiǎng bu qǐlái le.',
     sampleVn:'Hình như tớ đã gặp anh ấy ở đâu đó, nhưng nhất thời không nhớ ra.',
     tip:'某个地方 = một nơi nào đó (không xác định). 某 là văn viết hơn 哪个.'},

    {scene:'Đầu năm lớp 12, cô chủ nhiệm hỏi mục tiêu của em.',
     a:{sp:'Cô giáo',zh:'高三这一年，你有什么目标？',vn:'Năm lớp 12 này, em có mục tiêu gì?'},
     need:['Dùng 目标 (我的目标是……)','Nói em sẽ cố gắng thế nào'],
     sample:'我的目标是被河内国家大学录取，所以我每天都会刻苦学习。',
     samplePy:'Wǒ de mùbiāo shì bèi Hénèi Guójiā Dàxué lùqǔ, suǒyǐ wǒ měi tiān dōu huì kèkǔ xuéxí.',
     sampleVn:'Mục tiêu của em là được Đại học Quốc gia Hà Nội nhận vào, nên ngày nào em cũng sẽ học hành chăm chỉ.',
     tip:'我的目标是 + 被……录取 — đúng câu 30 của sách bài tập.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết thiệp tri ân thầy chủ nhiệm trong lễ tốt nghiệp.',
     a:'老师，谢谢啦，您真好！',b:'感谢您三年来的关心和帮助，是您的鼓励让我找到了自己的目标。',better:'b',
     why:'Thiệp tri ân cần trang trọng, cụ thể: 三年来, 关心和帮助, 找到了目标. Câu a (谢谢啦) quá xuề xoà, như nhắn tin.'},

    {scene:'Em nhắn tin rủ bạn thân cuối tuần đi xem phim.',
     a:'周末有空吗？一起去看电影呗！',b:'本人诚邀您于周末出席电影放映活动。',better:'a',
     why:'Với bạn thân, câu a tự nhiên, gần gũi (呗). Câu b dùng 本人, 诚邀, 出席 — như giấy mời chính thức, nghe rất buồn cười.'},

    {scene:'Biên bản họp của hội học sinh gửi Ban giám hiệu.',
     a:'经过讨论，全体委员一致同意举办英语演讲比赛。',b:'我们聊了半天，大家都说办个英语比赛挺好的。',better:'a',
     why:'Biên bản dùng giọng văn viết: 经过讨论, 全体委员, 一致同意, 举办. Câu b là khẩu ngữ (聊了半天, 挺好的).'},

    {scene:'Em không đồng ý với mẹ về chuyện chọn ngành, em muốn mở lời.',
     a:'妈妈，我知道您是为我好，但我想跟您好好沟通一下我的想法。',b:'你别管我了，这是我的事！',better:'a',
     why:'Câu a thừa nhận thiện ý của mẹ rồi mới nêu mong muốn — đúng tinh thần 沟通 của bài. Câu b đúng ngữ pháp nhưng gay gắt, dễ biến trò chuyện thành cãi nhau.'},

    {scene:'Em nhờ bạn cùng bàn xem giúp một bài toán.',
     a:'哎，帮我看看这道题呗。',b:'请问您能否就此题目给予指导？',better:'a',
     why:'Với bạn cùng bàn, câu a tự nhiên. Câu b (能否, 就此, 给予指导) là giọng văn bản trang trọng, nói với bạn thì rất xa cách.'},

    {scene:'Em là chủ tịch hội học sinh, phát biểu trong lễ khai giảng.',
     a:'喂，大家好好学啊，别违反纪律啊。',b:'亲爱的同学们，新的学期开始了，希望大家遵守纪律、刻苦学习，实现自己的目标！',better:'b',
     why:'Phát biểu trước toàn trường cần mở đầu bằng 亲爱的同学们 và các từ văn viết (遵守纪律, 刻苦学习, 实现目标). Câu a (喂, 啊) chỉ hợp khi nói chuyện riêng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 53)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Văn Văn hồi nhỏ (文文小时候的情况)', cue:'文文从小是个乖乖女……，大事小事……基本上都是妈妈说了算。', words:['文文','乖','刻苦','遵守','纪律','征求','念','基本']},
    {step:'Văn Văn thời đại học (文文大学期间的表现)', cue:'到了大学阶段，文文违反了……，越来越有主见、越来越能干……', words:['阶段','亲爱','违反','规矩','能干','讲座','出席','欧盟','酒吧','担任','主席','组织','外交','经商','目标']},
    {step:'Quyết định du học (文文留学的决定)', cue:'她放弃了本系保送研究生……，结果……；这一次妈妈让步了……', words:['系','名牌','录取','面临','牛津大学','一致','让步','隐约']},
    {step:'Chuyến đi Mỹ của mẹ (妈妈的美国之行)', cue:'几年后，妈妈去洛杉矶……，最初……，后来……', words:['洛杉矶','陌生','某','建立','单独','沟通','横']},
    {step:'Mẹ con tâm sự (母女谈心)', cue:'2010年3月的一个夜晚，母女俩……', words:['夏威夷','沙滩','沉默','吻','忍不住','幸亏','暗']}
  ],
  checklist: [
    'Kể đủ các phần của sách chưa: hồi nhỏ → thời đại học → quyết định du học → chuyến đi Mỹ của mẹ (thêm: mẹ con tâm sự)?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng các từ khoá sách cho như 主见, 独立, 保送, 面试, 交换, 身份, 靠, 鼓励 không?',
    'Có dùng đúng 一致 (意见不一致), 某 (某种身份) và 幸亏 (幸亏那晚天色很暗) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 52) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['沉默','能干','沟通','陌生','刻苦','建立'],
   cau:[
     {s:'公司已与这家银行＿＿起了良好的业务关系。', dap:['建立']},
     {s:'妈妈在电话那端＿＿了一会儿说：“真抱歉！我差点儿忘了。”', dap:['沉默']},
     {s:'经过＿＿训练，她终于成为了我们的第一批女飞行员。', dap:['刻苦']},
     {s:'喜欢篮球的观众对姚明这个名字一定不会＿＿。', dap:['陌生']},
     {s:'你跟幼儿园的老师＿＿一下，看看到底是什么原因。', dap:['沟通']},
     {s:'那个小姑娘既＿＿又漂亮。', dap:['能干']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'我儿子要是能这样懂＿＿，该有多么好啊！', opts:['规矩','规定'], ans:0, giai:'懂规矩 = biết phép tắc, lễ phép (cụm cố định). 规定 là quy định thành văn, không nói 懂规定.'},
     {s:'＿＿了吴县长，咱不用出村就把苹果都卖了。', opts:['幸亏','多亏'], ans:1, giai:'多亏 + (了) + người = nhờ có ai giúp. 幸亏 là phó từ, phải đứng trước một mệnh đề (幸亏吴县长帮忙……), không mang 了 + danh từ.'},
     {s:'我给他打电话的＿＿是看他回来了没有。', opts:['目标','目的'], ans:1, giai:'Nói LÝ DO của việc gọi điện → 目的. 目标 là cái đích muốn đạt tới.'},
     {s:'他的建议一提出，就得到了大家的＿＿认可。', opts:['一致','一样'], ans:0, giai:'一致认可 = nhất trí công nhận (一致 làm trạng ngữ). 一样 dùng khi so sánh (A 跟 B 一样).'}
   ]}
];
