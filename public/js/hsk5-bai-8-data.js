// ══════════════════════════════════════════
// DATA — HSK5 Bài 8: “朝三暮四”的古今义 (Thành ngữ “Sáng ba chiều bốn”)
// Unit 3 倾听故事 · Nguồn: HSK标准教程5上 (tr. 75–82) + 练习册 bài 8
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'朝三暮四',py:'zhāosān-mùsì',pos:'Thành ngữ',vn:'sáng ba chiều bốn (thay đổi thất thường)',hv:'triêu tam mộ tứ',em:'🐒',lesson:1,
   explain:['Nghĩa gốc (truyện ngụ ngôn): đổi cách nói mà thực chất không đổi — sáng ba chiều bốn hay sáng bốn chiều ba thì cũng là bảy.','Nghĩa ngày nay: hay thay đổi, không chuyên nhất; đặc biệt chỉ người thay lòng đổi dạ trong tình cảm.'],
   usage:'Làm vị ngữ hoặc định ngữ, mang nghĩa CHÊ: 他做事朝三暮四 / 朝三暮四的人. Không dùng để khen.',
   collo:['做事朝三暮四','朝三暮四的人','对感情朝三暮四'],
   ex_zh:'学习不能朝三暮四，今天学画画儿，明天学钢琴，最后什么都学不好。',ex_py:'Xuéxí bù néng zhāosān-mùsì, jīntiān xué huà huàr, míngtiān xué gāngqín, zuìhòu shénme dōu xué bu hǎo.',ex_vn:'Học hành không được cả thèm chóng chán, nay học vẽ mai học piano, rốt cuộc chẳng học giỏi được gì.',
   exList:[
     {zh:'学习不能朝三暮四，今天学画画儿，明天学钢琴，最后什么都学不好。',py:'Xuéxí bù néng zhāosān-mùsì, jīntiān xué huà huàr, míngtiān xué gāngqín, zuìhòu shénme dōu xué bu hǎo.',vn:'Học hành không được cả thèm chóng chán, nay học vẽ mai học piano, rốt cuộc chẳng học giỏi được gì.'},
     {zh:'他对感情朝三暮四，所以朋友们都不太相信他。',py:'Tā duì gǎnqíng zhāosān-mùsì, suǒyǐ péngyoumen dōu bú tài xiāngxìn tā.',vn:'Anh ta thay lòng đổi dạ trong tình cảm, nên bạn bè đều không tin anh ta lắm.'},
     {zh:'发展到今天，“朝三暮四”这个成语的意义已经完全改变了。',py:'Fāzhǎn dào jīntiān, “zhāosān-mùsì” zhège chéngyǔ de yìyì yǐjīng wánquán gǎibiàn le.',vn:'Đến ngày nay, ý nghĩa của thành ngữ “sáng ba chiều bốn” đã thay đổi hoàn toàn.'}
   ],
   colloFull:[
     {zh:'做事朝三暮四',py:'zuòshì zhāosān-mùsì',vn:'làm việc thay đổi thất thường'},
     {zh:'朝三暮四的人',py:'zhāosān-mùsì de rén',vn:'người hay thay đổi, không chuyên nhất'},
     {zh:'对感情朝三暮四',py:'duì gǎnqíng zhāosān-mùsì',vn:'thay lòng đổi dạ trong tình cảm'},
     {zh:'不能朝三暮四',py:'bù néng zhāosān-mùsì',vn:'không được cả thèm chóng chán'}
   ],
   patterns:[{s:'Chủ ngữ + (做事 / 对感情) + 朝三暮四',m:'Ai đó hay thay đổi, không chuyên nhất'},{s:'朝三暮四 + 的 + N',m:'Làm định ngữ: 朝三暮四的人'}],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cậu cứ cả thèm chóng chán như thế thì sẽ chẳng làm tốt được việc gì.',answer:'如果你总是这样朝三暮四，就什么事都做不好。',answerPy:'Rúguǒ nǐ zǒngshì zhèyàng zhāosān-mùsì, jiù shénme shì dōu zuò bu hǎo.',note:'朝三暮四 làm vị ngữ; 如果……就…… nối điều kiện – kết quả.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Anh ta không những làm việc thay đổi thất thường mà nói cũng chẳng bao giờ giữ lời.',answer:'他不仅做事朝三暮四，而且说话从来不算数。',answerPy:'Tā bùjǐn zuòshì zhāosān-mùsì, érqiě shuōhuà cónglái bú suànshù.',note:'Hai vế cùng chê → 不仅……而且…… tăng tiến.',pair:'不仅……而且……'}
   ]},

  {n:2,zh:'词汇',py:'cíhuì',pos:'Danh từ',vn:'từ vựng',hv:'từ hối',em:'📚',lesson:1,
   explain:['Toàn bộ các từ của một ngôn ngữ, của một người hay một cuốn sách — là danh từ TẬP HỢP.'],
   usage:'Không đếm từng cái: KHÔNG nói 一个词汇 (một từ là 一个词). Hay đi với 丰富, 积累, 掌握: 词汇很丰富, 积累词汇, 词汇量.',
   collo:['汉语词汇','词汇量','积累词汇','词汇很丰富'],
   ex_zh:'成语是汉语中非常有特点的一部分词汇。',ex_py:'Chéngyǔ shì Hànyǔ zhōng fēicháng yǒu tèdiǎn de yí bùfen cíhuì.',ex_vn:'Thành ngữ là một bộ phận từ vựng rất đặc sắc trong tiếng Hán.',
   exList:[
     {zh:'成语是汉语中非常有特点的一部分词汇。',py:'Chéngyǔ shì Hànyǔ zhōng fēicháng yǒu tèdiǎn de yí bùfen cíhuì.',vn:'Thành ngữ là một bộ phận từ vựng rất đặc sắc trong tiếng Hán.'},
     {zh:'汉语的词汇非常丰富，你得特别注意近义词之间的区别。',py:'Hànyǔ de cíhuì fēicháng fēngfù, nǐ děi tèbié zhùyì jìnyìcí zhījiān de qūbié.',vn:'Từ vựng tiếng Hán rất phong phú, bạn phải đặc biệt chú ý sự khác nhau giữa các từ gần nghĩa.'},
     {zh:'多看书能帮助我们积累词汇。',py:'Duō kàn shū néng bāngzhù wǒmen jīlěi cíhuì.',vn:'Đọc nhiều sách giúp chúng ta tích luỹ từ vựng.'}
   ],
   colloFull:[
     {zh:'汉语词汇',py:'Hànyǔ cíhuì',vn:'từ vựng tiếng Hán'},
     {zh:'词汇量',py:'cíhuìliàng',vn:'vốn từ (số lượng từ vựng)'},
     {zh:'积累词汇',py:'jīlěi cíhuì',vn:'tích luỹ từ vựng'},
     {zh:'词汇很丰富',py:'cíhuì hěn fēngfù',vn:'từ vựng rất phong phú'},
     {zh:'掌握词汇',py:'zhǎngwò cíhuì',vn:'nắm vững từ vựng'}
   ],
   patterns:[{s:'积累 / 掌握 + 词汇',m:'Tích luỹ / nắm vững từ vựng'},{s:'✗ 一个词汇 → ✓ 一个词',m:'词汇 là tập hợp, không đếm từng cái'}],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày học mười từ, vốn từ của bạn sẽ càng ngày càng nhiều.',answer:'只要每天学十个词，你的词汇量就会越来越大。',answerPy:'Zhǐyào měi tiān xué shí ge cí, nǐ de cíhuìliàng jiù huì yuè lái yuè dà.',note:'Đếm từng từ dùng 个词; nói vốn từ dùng 词汇量 + 大.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Từ vựng tiếng Hán tuy rất phong phú nhưng không khó học như bạn nghĩ.',answer:'汉语的词汇虽然很丰富，但是并不像你想的那么难学。',answerPy:'Hànyǔ de cíhuì suīrán hěn fēngfù, dànshì bìng bú xiàng nǐ xiǎng de nàme nán xué.',note:'词汇 + 丰富 là kết hợp cố định; 并不 nhấn mạnh phủ định.',pair:'虽然……但是……'}
   ]},

  {n:3,zh:'固定',py:'gùdìng',pos:'Tính từ / Động từ',vn:'cố định; ổn định; làm cho cố định',hv:'cố định',em:'📌',lesson:1,
   explain:['Tính từ: không thay đổi, không di chuyển (固定的结构, 固定的收入).','Động từ: làm cho cố định lại (把时间固定下来, 固定在墙上).'],
   usage:'Tính từ đi với 的 + danh từ: 固定的座位. Động từ thường có bổ ngữ: 固定一下 / 固定下来 / 固定在…….',
   collo:['固定的结构','固定的收入','固定下来','固定在墙上'],
   ex_zh:'成语有固定的结构，不能随便更改。',ex_py:'Chéngyǔ yǒu gùdìng de jiégòu, bù néng suíbiàn gēnggǎi.',ex_vn:'Thành ngữ có kết cấu cố định, không được tuỳ tiện sửa đổi.',
   exList:[
     {zh:'成语有固定的结构，不能随便更改。',py:'Chéngyǔ yǒu gùdìng de jiégòu, bù néng suíbiàn gēnggǎi.',vn:'Thành ngữ có kết cấu cố định, không được tuỳ tiện sửa đổi.'},
     {zh:'这种产品有固定的消费群体。',py:'Zhè zhǒng chǎnpǐn yǒu gùdìng de xiāofèi qúntǐ.',vn:'Loại sản phẩm này có nhóm khách hàng cố định.'},
     {zh:'我建议把下周会议讨论话题的顺序固定下来。',py:'Wǒ jiànyì bǎ xià zhōu huìyì tǎolùn huàtí de shùnxù gùdìng xiàlái.',vn:'Tôi đề nghị cố định luôn thứ tự các chủ đề thảo luận trong cuộc họp tuần sau.'}
   ],
   colloFull:[
     {zh:'固定的结构',py:'gùdìng de jiégòu',vn:'kết cấu cố định'},
     {zh:'固定的收入',py:'gùdìng de shōurù',vn:'thu nhập ổn định'},
     {zh:'固定下来',py:'gùdìng xiàlái',vn:'cố định lại'},
     {zh:'固定在墙上',py:'gùdìng zài qiáng shang',vn:'gắn cố định lên tường'},
     {zh:'固定的座位',py:'gùdìng de zuòwèi',vn:'chỗ ngồi cố định'}
   ],
   patterns:[{s:'固定 + 的 + N (结构 / 收入 / 座位)',m:'… cố định'},{s:'把 + N + 固定 + 下来 / 在……',m:'Làm cho cái gì cố định lại'}],
   checkList:[
     {promptLang:'vi',prompt:'Hãy gắn cố định bức tranh này lên tường.',answer:'请把这幅画固定在墙上。',answerPy:'Qǐng bǎ zhè fú huà gùdìng zài qiáng shang.',note:'固定 làm động từ: 把 + N + 固定在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Chỗ ngồi này là cố định, không được tự ý đổi.',answer:'这个座位是固定的，不能随便换。',answerPy:'Zhège zuòwèi shì gùdìng de, bù néng suíbiàn huàn.',note:'固定 làm tính từ: 是 + 固定 + 的 nhấn mạnh tính chất.',pair:'是……的'}
   ]},

  {n:4,zh:'结构',py:'jiégòu',pos:'Danh từ',vn:'kết cấu, cấu trúc',hv:'kết cấu',em:'🏗️',lesson:1,
   explain:['Cách các bộ phận ghép lại với nhau thành một khối — của câu, bài văn, ngôi nhà, cơ thể…'],
   usage:'Hay đi với 句子/文章/房子 + 的 + 结构; động từ: 分析/改变 + 结构; tính từ: 结构简单 / 结构复杂.',
   collo:['句子的结构','文章的结构','固定的结构','分析结构'],
   ex_zh:'这个句子的结构很复杂，我看了三遍才看懂。',ex_py:'Zhège jùzi de jiégòu hěn fùzá, wǒ kànle sān biàn cái kàndǒng.',ex_vn:'Kết cấu câu này rất phức tạp, tôi đọc ba lần mới hiểu.',
   exList:[
     {zh:'这个句子的结构很复杂，我看了三遍才看懂。',py:'Zhège jùzi de jiégòu hěn fùzá, wǒ kànle sān biàn cái kàndǒng.',vn:'Kết cấu câu này rất phức tạp, tôi đọc ba lần mới hiểu.'},
     {zh:'写作文以前，先想好文章的结构。',py:'Xiě zuòwén yǐqián, xiān xiǎnghǎo wénzhāng de jiégòu.',vn:'Trước khi viết bài văn, hãy nghĩ kỹ bố cục của bài.'},
     {zh:'成语有固定的结构，不能随便更改。',py:'Chéngyǔ yǒu gùdìng de jiégòu, bù néng suíbiàn gēnggǎi.',vn:'Thành ngữ có kết cấu cố định, không được tuỳ tiện sửa đổi.'}
   ],
   colloFull:[
     {zh:'句子的结构',py:'jùzi de jiégòu',vn:'cấu trúc câu'},
     {zh:'文章的结构',py:'wénzhāng de jiégòu',vn:'bố cục bài văn'},
     {zh:'固定的结构',py:'gùdìng de jiégòu',vn:'kết cấu cố định'},
     {zh:'分析结构',py:'fēnxī jiégòu',vn:'phân tích kết cấu'},
     {zh:'结构很简单',py:'jiégòu hěn jiǎndān',vn:'kết cấu rất đơn giản'}
   ],
   patterns:[{s:'N + 的 + 结构',m:'Kết cấu của …'},{s:'结构 + 简单 / 复杂 / 完整',m:'Kết cấu đơn giản / phức tạp / hoàn chỉnh'}],
   checkList:[
     {promptLang:'vi',prompt:'Câu này kết cấu phức tạp quá, đến thầy giáo cũng phải xem hai lần.',answer:'这个句子的结构太复杂了，连老师都要看两遍。',answerPy:'Zhège jùzi de jiégòu tài fùzá le, lián lǎoshī dōu yào kàn liǎng biàn.',note:'结构 làm chủ ngữ, vị ngữ là tính từ 复杂.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Ngôi nhà này không những kết cấu đơn giản mà còn rất chắc chắn.',answer:'这座房子不但结构简单，而且很结实。',answerPy:'Zhè zuò fángzi búdàn jiégòu jiǎndān, érqiě hěn jiēshi.',note:'结构简单 là cụm chủ – vị làm vị ngữ cho 房子.',pair:'不但……而且……'}
   ]},

  {n:5,zh:'整体',py:'zhěngtǐ',pos:'Danh từ',vn:'chỉnh thể, toàn thể, tổng thể',hv:'chỉnh thể',em:'🧩',lesson:1,
   explain:['Cái toàn bộ gồm tất cả các bộ phận hợp lại; đối lập với 部分 (bộ phận).'],
   usage:'Hay dùng: 一个整体, 从整体上看, 整体上 + đánh giá. Làm định ngữ: 整体水平; thêm 性 thành 整体性 (tính chỉnh thể).',
   collo:['一个整体','从整体上看','整体水平','整体性'],
   ex_zh:'这篇文章整体上写得不错，有些小地方还要再改改。',ex_py:'Zhè piān wénzhāng zhěngtǐ shang xiě de búcuò, yǒuxiē xiǎo dìfang hái yào zài gǎigai.',ex_vn:'Nhìn tổng thể bài văn này viết khá tốt, vài chỗ nhỏ còn phải sửa thêm.',
   exList:[
     {zh:'这篇文章整体上写得不错，有些小地方还要再改改。',py:'Zhè piān wénzhāng zhěngtǐ shang xiě de búcuò, yǒuxiē xiǎo dìfang hái yào zài gǎigai.',vn:'Nhìn tổng thể bài văn này viết khá tốt, vài chỗ nhỏ còn phải sửa thêm.'},
     {zh:'成语的意义是整体性的，不是每个字意思的简单相加。',py:'Chéngyǔ de yìyì shì zhěngtǐxìng de, bú shì měi ge zì yìsi de jiǎndān xiāngjiā.',vn:'Ý nghĩa của thành ngữ mang tính chỉnh thể, không phải phép cộng đơn giản nghĩa từng chữ.'},
     {zh:'我们班是一个整体，大家要互相帮助。',py:'Wǒmen bān shì yí ge zhěngtǐ, dàjiā yào hùxiāng bāngzhù.',vn:'Lớp mình là một khối thống nhất, mọi người phải giúp đỡ lẫn nhau.'}
   ],
   colloFull:[
     {zh:'一个整体',py:'yí ge zhěngtǐ',vn:'một khối thống nhất'},
     {zh:'从整体上看',py:'cóng zhěngtǐ shang kàn',vn:'nhìn một cách tổng thể'},
     {zh:'整体水平',py:'zhěngtǐ shuǐpíng',vn:'trình độ chung'},
     {zh:'整体性',py:'zhěngtǐxìng',vn:'tính chỉnh thể'},
     {zh:'整体上写得不错',py:'zhěngtǐ shang xiě de búcuò',vn:'nhìn chung viết khá tốt'}
   ],
   patterns:[{s:'从整体上看，……',m:'Nhìn tổng thể thì …'},{s:'A + 是 + 一个整体',m:'A là một khối thống nhất'}],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn tổng thể thì trình độ của lớp chúng ta càng ngày càng cao.',answer:'从整体上看，我们班的水平越来越高了。',answerPy:'Cóng zhěngtǐ shang kàn, wǒmen bān de shuǐpíng yuè lái yuè gāo le.',note:'从整体上看 đứng đầu câu làm trạng ngữ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Đội bóng là một khối thống nhất, chỉ cần một người không cố gắng là sẽ thua.',answer:'球队是一个整体，只要一个人不努力，就会输。',answerPy:'Qiúduì shì yí ge zhěngtǐ, zhǐyào yí ge rén bù nǔlì, jiù huì shū.',note:'是一个整体: 整体 làm tân ngữ, trước có 一个.',pair:'只要……就……'}
   ]},

  {n:6,zh:'综合',py:'zōnghé',pos:'Động từ / Tính từ',vn:'tổng hợp lại; tổng hợp',hv:'tổng hợp',em:'🔗',lesson:1,
   explain:['Động từ: gom các phần, các ý khác nhau lại thành một.','Tính từ: mang tính tổng hợp, gồm nhiều mặt (综合能力, 综合大学).'],
   usage:'Động từ: 综合 + 意见/情况; 综合起来. Tính từ đứng thẳng trước danh từ (không cần 的): 综合能力, 综合成绩.',
   collo:['综合起来','综合大家的意见','综合能力','综合成绩'],
   ex_zh:'成语不是每个字意思的简单相加，而是综合起来表达一个完整的意思。',ex_py:'Chéngyǔ bú shì měi ge zì yìsi de jiǎndān xiāngjiā, ér shì zōnghé qǐlái biǎodá yí ge wánzhěng de yìsi.',ex_vn:'Thành ngữ không phải phép cộng đơn giản nghĩa từng chữ, mà là tổng hợp lại để diễn đạt một ý hoàn chỉnh.',
   exList:[
     {zh:'成语不是每个字意思的简单相加，而是综合起来表达一个完整的意思。',py:'Chéngyǔ bú shì měi ge zì yìsi de jiǎndān xiāngjiā, ér shì zōnghé qǐlái biǎodá yí ge wánzhěng de yìsi.',vn:'Thành ngữ không phải phép cộng đơn giản nghĩa từng chữ, mà là tổng hợp lại để diễn đạt một ý hoàn chỉnh.'},
     {zh:'老师综合了大家的意见，决定周五去参观博物馆。',py:'Lǎoshī zōnghéle dàjiā de yìjiàn, juédìng zhōuwǔ qù cānguān bówùguǎn.',vn:'Cô giáo tổng hợp ý kiến mọi người, quyết định thứ Sáu đi tham quan bảo tàng.'},
     {zh:'HSK考试不仅考听力和阅读，还考写作，考的是综合能力。',py:'HSK kǎoshì bùjǐn kǎo tīnglì hé yuèdú, hái kǎo xiězuò, kǎo de shì zōnghé nénglì.',vn:'Kỳ thi HSK không chỉ thi nghe và đọc mà còn thi viết, cái được kiểm tra là năng lực tổng hợp.'}
   ],
   colloFull:[
     {zh:'综合起来',py:'zōnghé qǐlái',vn:'tổng hợp lại'},
     {zh:'综合大家的意见',py:'zōnghé dàjiā de yìjiàn',vn:'tổng hợp ý kiến mọi người'},
     {zh:'综合能力',py:'zōnghé nénglì',vn:'năng lực tổng hợp'},
     {zh:'综合成绩',py:'zōnghé chéngjì',vn:'thành tích tổng hợp'},
     {zh:'综合考虑',py:'zōnghé kǎolǜ',vn:'cân nhắc mọi mặt'}
   ],
   patterns:[{s:'综合 + 意见 / 情况 / 起来',m:'Tổng hợp …'},{s:'综合 + 能力 / 成绩 / 大学',m:'… tổng hợp (làm định ngữ)'}],
   checkList:[
     {promptLang:'vi',prompt:'Lớp trưởng tổng hợp ý kiến của mọi người xong mới quyết định.',answer:'班长综合了大家的意见以后才做决定。',answerPy:'Bānzhǎng zōnghéle dàjiā de yìjiàn yǐhòu cái zuò juédìng.',note:'综合 là động từ, mang tân ngữ 意见; 才 nhấn mạnh "rồi mới".',pair:'……以后才……'},
     {promptLang:'vi',prompt:'Thành tích tổng hợp của bạn ấy không những đứng đầu lớp mà còn đứng đầu toàn trường.',answer:'她的综合成绩不仅是全班第一，而且是全校第一。',answerPy:'Tā de zōnghé chéngjì bùjǐn shì quán bān dì-yī, érqiě shì quán xiào dì-yī.',note:'综合 làm định ngữ, đứng thẳng trước 成绩.',pair:'不仅……而且……'}
   ]},

  {n:7,zh:'完整',py:'wánzhěng',pos:'Tính từ',vn:'hoàn chỉnh, trọn vẹn',hv:'hoàn chỉnh',em:'✅',lesson:1,
   explain:['Đủ tất cả các phần, không thiếu, không bị hỏng.'],
   usage:'Làm vị ngữ: 内容很完整. Làm định ngữ: 一个完整的意思. Làm trạng ngữ: 完整地 + 叙述/取出来/保留下来.',
   collo:['完整的意思','完整地叙述','完整地保留下来','很完整'],
   ex_zh:'请你把昨晚的经历完整地叙述一遍。',ex_py:'Qǐng nǐ bǎ zuó wǎn de jīnglì wánzhěng de xùshù yí biàn.',ex_vn:'Mời bạn kể lại trọn vẹn những gì đã trải qua tối qua một lượt.',
   exList:[
     {zh:'请你把昨晚的经历完整地叙述一遍。',py:'Qǐng nǐ bǎ zuó wǎn de jīnglì wánzhěng de xùshù yí biàn.',vn:'Mời bạn kể lại trọn vẹn những gì đã trải qua tối qua một lượt.'},
     {zh:'这座古老的房子被完整地保留了下来。',py:'Zhè zuò gǔlǎo de fángzi bèi wánzhěng de bǎoliúle xiàlái.',vn:'Ngôi nhà cổ này đã được giữ lại nguyên vẹn.'},
     {zh:'这个句子不完整，少了一个动词。',py:'Zhège jùzi bù wánzhěng, shǎole yí ge dòngcí.',vn:'Câu này chưa hoàn chỉnh, thiếu mất một động từ.'}
   ],
   colloFull:[
     {zh:'完整的意思',py:'wánzhěng de yìsi',vn:'một ý trọn vẹn'},
     {zh:'完整地叙述',py:'wánzhěng de xùshù',vn:'kể lại trọn vẹn'},
     {zh:'完整地保留下来',py:'wánzhěng de bǎoliú xiàlái',vn:'giữ lại nguyên vẹn'},
     {zh:'很完整',py:'hěn wánzhěng',vn:'rất đầy đủ'},
     {zh:'完整地取出来',py:'wánzhěng de qǔ chūlái',vn:'lấy ra nguyên vẹn'}
   ],
   patterns:[{s:'完整 + 地 + V (叙述 / 保留 / 取出来)',m:'Làm … một cách trọn vẹn'},{s:'一个 + 完整 + 的 + N',m:'Một … hoàn chỉnh'}],
   checkList:[
     {promptLang:'vi',prompt:'Hãy kể lại trọn vẹn chuyện hôm qua một lượt.',answer:'请你把昨天的事情完整地叙述一遍。',answerPy:'Qǐng nǐ bǎ zuótiān de shìqing wánzhěng de xùshù yí biàn.',note:'完整地 làm trạng ngữ trước 叙述 (từ bài 1); 把 + tân ngữ + V + 一遍.',pair:'把'},
     {promptLang:'vi',prompt:'Ngôi nhà cổ này đã được giữ lại nguyên vẹn.',answer:'这座老房子被完整地保留下来了。',answerPy:'Zhè zuò lǎo fángzi bèi wánzhěng de bǎoliú xiàlái le.',note:'Câu bị động: 被 + (người) + 完整地 + V + 下来.',pair:'被'}
   ]},

  {n:8,zh:'哲学家',py:'zhéxuéjiā',pos:'Danh từ',vn:'nhà triết học',hv:'triết học gia',em:'🧠',lesson:1,
   explain:['Người nghiên cứu triết học — suy nghĩ về những vấn đề lớn của đời người, của thế giới.'],
   usage:'哲学 (triết học) + 家 (nhà …), giống 作家, 科学家, 音乐家. Đếm bằng 位: 一位哲学家.',
   collo:['一位哲学家','古代哲学家','著名的哲学家'],
   ex_zh:'中国古代有一位哲学家，在他的书中讲了这样一个寓言故事。',ex_py:'Zhōngguó gǔdài yǒu yí wèi zhéxuéjiā, zài tā de shū zhōng jiǎngle zhèyàng yí ge yùyán gùshi.',ex_vn:'Thời cổ đại Trung Quốc có một nhà triết học, trong sách của mình ông kể một câu chuyện ngụ ngôn như thế này.',
   exList:[
     {zh:'中国古代有一位哲学家，在他的书中讲了这样一个寓言故事。',py:'Zhōngguó gǔdài yǒu yí wèi zhéxuéjiā, zài tā de shū zhōng jiǎngle zhèyàng yí ge yùyán gùshi.',vn:'Thời cổ đại Trung Quốc có một nhà triết học, trong sách của mình ông kể một câu chuyện ngụ ngôn như thế này.'},
     {zh:'哲学家用这个故事告诉人们，不要太关心得失。',py:'Zhéxuéjiā yòng zhège gùshi gàosu rénmen, bú yào tài guānxīn déshī.',vn:'Nhà triết học dùng câu chuyện này để nói với mọi người: đừng quá bận tâm chuyện được mất.'},
     {zh:'孔子是中国最著名的哲学家和教育家。',py:'Kǒngzǐ shì Zhōngguó zuì zhùmíng de zhéxuéjiā hé jiàoyùjiā.',vn:'Khổng Tử là nhà triết học và nhà giáo dục nổi tiếng nhất Trung Quốc.'}
   ],
   colloFull:[
     {zh:'一位哲学家',py:'yí wèi zhéxuéjiā',vn:'một nhà triết học'},
     {zh:'古代哲学家',py:'gǔdài zhéxuéjiā',vn:'nhà triết học cổ đại'},
     {zh:'著名的哲学家',py:'zhùmíng de zhéxuéjiā',vn:'nhà triết học nổi tiếng'},
     {zh:'哲学家的书',py:'zhéxuéjiā de shū',vn:'sách của nhà triết học'}
   ],
   patterns:[{s:'一位 + 哲学家',m:'Lượng từ lịch sự 位'},{s:'……家 = người chuyên về …',m:'哲学家, 科学家, 作家, 画家'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy không những là nhà triết học mà còn là nhà giáo dục.',answer:'他不仅是哲学家，而且是教育家。',answerPy:'Tā bùjǐn shì zhéxuéjiā, érqiě shì jiàoyùjiā.',note:'Hai danh từ cùng đuôi 家 — nhớ theo cặp.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Câu chuyện này là do một nhà triết học cổ đại kể.',answer:'这个故事是一位古代哲学家讲的。',answerPy:'Zhège gùshi shì yí wèi gǔdài zhéxuéjiā jiǎng de.',note:'Nhấn mạnh người làm: 是 + người + V + 的.',pair:'是……的'}
   ]},

  {n:9,zh:'寓言',py:'yùyán',pos:'Danh từ',vn:'truyện ngụ ngôn',hv:'ngụ ngôn',em:'📖',lesson:1,
   explain:['Câu chuyện ngắn, thường mượn con vật hay đồ vật để nói lên một bài học, một đạo lý.'],
   usage:'Hay nói 寓言故事, 一个寓言, 伊索寓言 (ngụ ngôn Aesop). Động từ đi kèm: 讲/读 + 寓言.',
   collo:['寓言故事','一个寓言','讲寓言'],
   ex_zh:'“朝三暮四”原来是一个寓言故事。',ex_py:'“Zhāosān-mùsì” yuánlái shì yí ge yùyán gùshi.',ex_vn:'“Sáng ba chiều bốn” vốn là một câu chuyện ngụ ngôn.',
   exList:[
     {zh:'“朝三暮四”原来是一个寓言故事。',py:'“Zhāosān-mùsì” yuánlái shì yí ge yùyán gùshi.',vn:'“Sáng ba chiều bốn” vốn là một câu chuyện ngụ ngôn.'},
     {zh:'这个寓言告诉我们，做事不能只看表面。',py:'Zhège yùyán gàosu wǒmen, zuòshì bù néng zhǐ kàn biǎomiàn.',vn:'Truyện ngụ ngôn này cho ta biết: làm việc không được chỉ nhìn bề ngoài.'},
     {zh:'小时候，奶奶常常给我讲寓言故事。',py:'Xiǎoshíhou, nǎinai chángcháng gěi wǒ jiǎng yùyán gùshi.',vn:'Hồi nhỏ, bà nội thường kể truyện ngụ ngôn cho tôi nghe.'}
   ],
   colloFull:[
     {zh:'寓言故事',py:'yùyán gùshi',vn:'truyện ngụ ngôn'},
     {zh:'一个寓言',py:'yí ge yùyán',vn:'một truyện ngụ ngôn'},
     {zh:'讲寓言',py:'jiǎng yùyán',vn:'kể chuyện ngụ ngôn'},
     {zh:'寓言告诉我们',py:'yùyán gàosu wǒmen',vn:'truyện ngụ ngôn cho ta biết'}
   ],
   patterns:[{s:'寓言 + 故事',m:'Truyện ngụ ngôn'},{s:'这个寓言告诉我们，……',m:'Truyện ngụ ngôn này cho chúng ta biết …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ, hễ tôi không ngủ được là mẹ lại kể truyện ngụ ngôn cho tôi nghe.',answer:'小时候，我一睡不着，妈妈就给我讲寓言故事。',answerPy:'Xiǎoshíhou, wǒ yí shuì bu zháo, māma jiù gěi wǒ jiǎng yùyán gùshi.',note:'给 + người + 讲 + 寓言故事.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Truyện ngụ ngôn này tuy ngắn nhưng đạo lý rất sâu sắc.',answer:'这个寓言虽然很短，但是道理很深。',answerPy:'Zhège yùyán suīrán hěn duǎn, dànshì dàolǐ hěn shēn.',note:'Ngụ ngôn luôn gắn với 道理 (đạo lý).',pair:'虽然……但是……'}
   ]},

  {n:10,zh:'喂养',py:'wèiyǎng',pos:'Động từ',vn:'nuôi (cho ăn và chăm sóc)',hv:'uý dưỡng',em:'🍼',lesson:1,
   explain:['Cho ăn và chăm sóc để lớn lên — dùng cho trẻ nhỏ và con vật.'],
   usage:'Tân ngữ là trẻ em, con vật: 喂养孩子, 喂养宠物. Khẩu ngữ hay nói 喂 hoặc 养; 喂养 trang trọng hơn, gồm cả cho ăn lẫn nuôi.',
   collo:['喂养宠物','喂养孩子','喂养一群猴子'],
   ex_zh:'从前有位老人，喂养了一群猴子当宠物。',ex_py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù.',ex_vn:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng.',
   exList:[
     {zh:'从前有位老人，喂养了一群猴子当宠物。',py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù.',vn:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng.'},
     {zh:'老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。',py:'Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi, hǎo jiéshěng xiē shíwù ná qù wèiyǎng hóuzi.',vn:'Ông lão thậm chí phải giảm chi tiêu của người nhà để dành dụm chút thức ăn đem nuôi khỉ.'},
     {zh:'喂养宠物需要耐心和时间。',py:'Wèiyǎng chǒngwù xūyào nàixīn hé shíjiān.',vn:'Nuôi thú cưng cần sự kiên nhẫn và thời gian.'}
   ],
   colloFull:[
     {zh:'喂养宠物',py:'wèiyǎng chǒngwù',vn:'nuôi thú cưng'},
     {zh:'喂养孩子',py:'wèiyǎng háizi',vn:'nuôi con'},
     {zh:'喂养一群猴子',py:'wèiyǎng yì qún hóuzi',vn:'nuôi một bầy khỉ'},
     {zh:'用橡子喂养猴子',py:'yòng xiàngzi wèiyǎng hóuzi',vn:'nuôi khỉ bằng hạt dẻ'}
   ],
   patterns:[{s:'喂养 + 孩子 / 动物',m:'Nuôi (cho ăn, chăm sóc)'},{s:'用 + thức ăn + 喂养 + N',m:'Nuôi … bằng …'}],
   checkList:[
     {promptLang:'vi',prompt:'Bà nội tôi nuôi một đàn gà, sáng nào vừa dậy là đi cho gà ăn.',answer:'我奶奶喂养了一群鸡，每天早上一起床就去喂鸡。',answerPy:'Wǒ nǎinai wèiyǎngle yì qún jī, měi tiān zǎoshang yì qǐchuáng jiù qù wèi jī.',note:'喂养 = nuôi lâu dài; 喂 = cho ăn một lần.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nuôi thú cưng không hề đơn giản như bạn nghĩ.',answer:'喂养宠物并不像你想的那么简单。',answerPy:'Wèiyǎng chǒngwù bìng bú xiàng nǐ xiǎng de nàme jiǎndān.',note:'Cụm 喂养宠物 làm chủ ngữ cả câu.',pair:'A 不像 B 那么……'}
   ]},

  {n:11,zh:'群',py:'qún',pos:'Lượng từ',vn:'bầy, đàn, nhóm',hv:'quần',em:'👥',lesson:1,
   explain:['Lượng từ cho người hoặc con vật tụ lại thành nhóm đông.'],
   usage:'一群 + người/động vật: 一群猴子, 一群学生. Còn làm thành tố trong 人群 (đám đông), 群体 (nhóm, cộng đồng).',
   collo:['一群猴子','一群学生','一群鸟','一群人'],
   ex_zh:'聚在电台门口的那群人是干什么的？',ex_py:'Jù zài diàntái ménkǒu de nà qún rén shì gàn shénme de?',ex_vn:'Nhóm người tụ tập trước cửa đài phát thanh kia là làm gì vậy?',
   exList:[
     {zh:'聚在电台门口的那群人是干什么的？',py:'Jù zài diàntái ménkǒu de nà qún rén shì gàn shénme de?',vn:'Nhóm người tụ tập trước cửa đài phát thanh kia là làm gì vậy?'},
     {zh:'一群学生正在操场上踢足球。',py:'Yì qún xuésheng zhèngzài cāochǎng shang tī zúqiú.',vn:'Một nhóm học sinh đang đá bóng trên sân.'},
     {zh:'天上飞过一群鸟。',py:'Tiān shang fēiguò yì qún niǎo.',vn:'Một đàn chim bay ngang qua bầu trời.'}
   ],
   colloFull:[
     {zh:'一群猴子',py:'yì qún hóuzi',vn:'một bầy khỉ'},
     {zh:'一群学生',py:'yì qún xuésheng',vn:'một nhóm học sinh'},
     {zh:'一群鸟',py:'yì qún niǎo',vn:'một đàn chim'},
     {zh:'一群人',py:'yì qún rén',vn:'một đám người'},
     {zh:'一群羊',py:'yì qún yáng',vn:'một đàn cừu'}
   ],
   patterns:[{s:'一群 + người / động vật',m:'Một đàn / một nhóm …'},{s:'那群 / 这群 + N',m:'Nhóm … kia / này'}],
   checkList:[
     {promptLang:'vi',prompt:'Vừa tan học, một đám học sinh đã chạy ra sân.',answer:'一下课，一群学生就跑到了操场上。',answerPy:'Yí xiàkè, yì qún xuésheng jiù pǎodàole cāochǎng shang.',note:'一群 + danh từ chỉ người làm chủ ngữ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đám trẻ kia chơi càng lúc càng vui.',answer:'那群孩子玩儿得越来越开心。',answerPy:'Nà qún háizi wánr de yuè lái yuè kāixīn.',note:'那 + 群 + N: chỉ định một nhóm cụ thể.',pair:'越来越……'}
   ]},

  {n:12,zh:'猴子',py:'hóuzi',pos:'Danh từ',vn:'con khỉ',hv:'hầu tử',em:'🐵',lesson:1,
   explain:['Con khỉ — động vật thông minh, nhanh nhẹn, hay nghịch.'],
   usage:'Lượng từ 只: 一只猴子; nhiều con: 一群猴子. Cũng dùng đùa để gọi đứa trẻ hiếu động: 小猴子.',
   collo:['一只猴子','一群猴子','喂猴子'],
   ex_zh:'猴子太多，每天要吃大量的瓜果、蔬菜和粮食。',ex_py:'Hóuzi tài duō, měi tiān yào chī dàliàng de guāguǒ, shūcài hé liángshi.',ex_vn:'Khỉ nhiều quá, mỗi ngày phải ăn một lượng lớn dưa quả, rau củ và lương thực.',
   exList:[
     {zh:'猴子太多，每天要吃大量的瓜果、蔬菜和粮食。',py:'Hóuzi tài duō, měi tiān yào chī dàliàng de guāguǒ, shūcài hé liángshi.',vn:'Khỉ nhiều quá, mỗi ngày phải ăn một lượng lớn dưa quả, rau củ và lương thực.'},
     {zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.',vn:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.'},
     {zh:'动物园里的猴子最受孩子们欢迎。',py:'Dòngwùyuán li de hóuzi zuì shòu háizimen huānyíng.',vn:'Khỉ trong vườn thú được bọn trẻ thích nhất.'}
   ],
   colloFull:[
     {zh:'一只猴子',py:'yì zhī hóuzi',vn:'một con khỉ'},
     {zh:'一群猴子',py:'yì qún hóuzi',vn:'một bầy khỉ'},
     {zh:'喂猴子',py:'wèi hóuzi',vn:'cho khỉ ăn'},
     {zh:'像猴子一样',py:'xiàng hóuzi yíyàng',vn:'như con khỉ'}
   ],
   patterns:[{s:'一只 / 一群 + 猴子',m:'Một con / một bầy khỉ'},{s:'像猴子一样 + Adj/V',m:'… như con khỉ (hiếu động)'}],
   checkList:[
     {promptLang:'vi',prompt:'Em trai tôi nghịch như con khỉ, không lúc nào ngồi yên.',answer:'我弟弟像猴子一样调皮，一会儿也坐不住。',answerPy:'Wǒ dìdi xiàng hóuzi yíyàng tiáopí, yíhuìr yě zuò bu zhù.',note:'So sánh ví von: 像 + N + 一样 + tính từ.',pair:'像……一样'},
     {promptLang:'vi',prompt:'Con khỉ bị đứa trẻ kia doạ chạy mất.',answer:'猴子被那个孩子吓跑了。',answerPy:'Hóuzi bèi nàge háizi xiàpǎo le.',note:'Câu bị động: 被 + người + V + bổ ngữ kết quả.',pair:'被'}
   ]},

  {n:13,zh:'宠物',py:'chǒngwù',pos:'Danh từ',vn:'vật cưng, thú cưng',hv:'sủng vật',em:'🐶',lesson:1,
   explain:['Con vật nuôi trong nhà để làm bạn, để yêu quý — như chó, mèo.'],
   usage:'Đi với 养/喂养 + 宠物; 宠物狗, 宠物店, 宠物医院. Cấu trúc 把/拿 + N + 当宠物 (coi … là thú cưng).',
   collo:['养宠物','宠物狗','宠物店','当宠物'],
   ex_zh:'从前有位老人，喂养了一群猴子当宠物。',ex_py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù.',ex_vn:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng.',
   exList:[
     {zh:'从前有位老人，喂养了一群猴子当宠物。',py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù.',vn:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng.'},
     {zh:'现在很多年轻人喜欢养宠物。',py:'Xiànzài hěn duō niánqīngrén xǐhuan yǎng chǒngwù.',vn:'Bây giờ nhiều người trẻ thích nuôi thú cưng.'},
     {zh:'我家的宠物狗每天都在门口等我放学。',py:'Wǒ jiā de chǒngwù gǒu měi tiān dōu zài ménkǒu děng wǒ fàngxué.',vn:'Con chó cưng nhà tôi ngày nào cũng đợi tôi tan học ở cửa.'}
   ],
   colloFull:[
     {zh:'养宠物',py:'yǎng chǒngwù',vn:'nuôi thú cưng'},
     {zh:'宠物狗',py:'chǒngwù gǒu',vn:'chó cưng'},
     {zh:'宠物店',py:'chǒngwù diàn',vn:'cửa hàng thú cưng'},
     {zh:'当宠物',py:'dàng chǒngwù',vn:'làm thú cưng'},
     {zh:'宠物医院',py:'chǒngwù yīyuàn',vn:'bệnh viện thú y'}
   ],
   patterns:[{s:'养 / 喂养 + 宠物',m:'Nuôi thú cưng'},{s:'养 + N + 当宠物',m:'Nuôi … làm thú cưng'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lại nuôi một con rắn làm thú cưng!',answer:'他居然养了一条蛇当宠物！',answerPy:'Tā jūrán yǎngle yì tiáo shé dàng chǒngwù!',note:'Ôn 居然 (bài 1): việc ngoài dự liệu, đứng sau chủ ngữ.',pair:'居然 (bài 1)'},
     {promptLang:'vi',prompt:'Từ khi nuôi thú cưng, bà nội càng ngày càng vui.',answer:'自从养了宠物，奶奶越来越开心了。',answerPy:'Zìcóng yǎngle chǒngwù, nǎinai yuè lái yuè kāixīn le.',note:'自从 + sự việc: kể từ khi ….',pair:'越来越……'}
   ]},

  {n:14,zh:'相处',py:'xiāngchǔ',pos:'Động từ',vn:'chung sống, ở cùng, cư xử với nhau',hv:'tương xử',em:'🤝',lesson:1,
   explain:['Sống cùng, làm việc cùng, tiếp xúc lâu ngày với nhau.'],
   usage:'跟/和 + người + 相处; bổ ngữ: 相处得很好, 相处久了; trạng ngữ: 友好相处. Không mang tân ngữ trực tiếp (✗ 相处他).',
   collo:['跟朋友相处','跟家人相处','相处久了','友好相处'],
   ex_zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',ex_py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',ex_vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.',
   exList:[
     {zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
     {zh:'希望我们能够友好相处，共同发展。',py:'Xīwàng wǒmen nénggòu yǒuhǎo xiāngchǔ, gòngtóng fāzhǎn.',vn:'Mong chúng ta có thể chung sống hữu nghị, cùng nhau phát triển.'},
     {zh:'他性格很好，跟同学们相处得很好。',py:'Tā xìnggé hěn hǎo, gēn tóngxuémen xiāngchǔ de hěn hǎo.',vn:'Cậu ấy tính tình tốt, rất hoà hợp với các bạn trong lớp.'}
   ],
   colloFull:[
     {zh:'跟朋友相处',py:'gēn péngyou xiāngchǔ',vn:'cư xử với bạn bè'},
     {zh:'跟家人相处',py:'gēn jiārén xiāngchǔ',vn:'chung sống với gia đình'},
     {zh:'相处久了',py:'xiāngchǔ jiǔ le',vn:'ở với nhau lâu rồi'},
     {zh:'友好相处',py:'yǒuhǎo xiāngchǔ',vn:'chung sống hữu nghị'},
     {zh:'相处得很好',py:'xiāngchǔ de hěn hǎo',vn:'hoà hợp với nhau'}
   ],
   patterns:[{s:'跟 / 和 + người + 相处',m:'Chung sống, cư xử với ai'},{s:'相处 + 得 + 很好 / 不错',m:'Hoà hợp với nhau'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lúc mới quen chưa quen lắm, nhưng ở với nhau lâu rồi chúng tôi đã thành bạn tốt.',answer:'虽然刚认识的时候不太习惯，但是相处久了，我们成了好朋友。',answerPy:'Suīrán gāng rènshi de shíhou bú tài xíguàn, dànshì xiāngchǔ jiǔ le, wǒmen chéngle hǎo péngyou.',note:'相处久了 = "ở với nhau lâu rồi" — cụm rất hay dùng làm vế đầu.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần thật lòng với người khác thì sẽ hoà hợp được với mọi người.',answer:'只要真心对待别人，就能跟大家相处得很好。',answerPy:'Zhǐyào zhēnxīn duìdài biérén, jiù néng gēn dàjiā xiāngchǔ de hěn hǎo.',note:'跟 + người + 相处得很好; không nói 相处大家.',pair:'只要……就……'}
   ]},

  {n:15,zh:'彼此',py:'bǐcǐ',pos:'Đại từ',vn:'hai bên, lẫn nhau',hv:'bỉ thử',em:'🔄',lesson:1,
   explain:['"Bên này và bên kia" — chỉ HAI BÊN, lẫn nhau. Là ĐẠI TỪ nên làm được chủ ngữ, tân ngữ, định ngữ.','Lặp lại 彼此彼此 (khẩu ngữ): hai bên như nhau, chẳng hơn gì nhau — hay dùng để đáp lời khen cho khiêm tốn.'],
   usage:'Chủ ngữ: 彼此都很了解. Tân ngữ: 不分彼此. Định ngữ: 彼此的爱好. Khác 互相 (phó từ, chỉ đứng trước động từ) — xem phần phân biệt.',
   collo:['彼此了解','不分彼此','彼此的爱好','彼此彼此'],
   ex_zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',ex_py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',ex_vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.',
   exList:[
     {zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
     {zh:'我们是最好的朋友，不分彼此。',py:'Wǒmen shì zuì hǎo de péngyou, bù fēn bǐcǐ.',vn:'Chúng tôi là bạn thân nhất, chẳng phân biệt của anh của tôi.'},
     {zh:'咱们俩彼此彼此，我画得比你好不了多少。',py:'Zánmen liǎ bǐcǐ bǐcǐ, wǒ huà de bǐ nǐ hǎo bu liǎo duōshao.',vn:'Hai đứa mình chẳng hơn gì nhau, tớ vẽ cũng không đẹp hơn cậu là bao.'}
   ],
   colloFull:[
     {zh:'彼此了解',py:'bǐcǐ liǎojiě',vn:'hiểu nhau'},
     {zh:'不分彼此',py:'bù fēn bǐcǐ',vn:'không phân biệt anh tôi'},
     {zh:'彼此的爱好',py:'bǐcǐ de àihào',vn:'sở thích của nhau'},
     {zh:'彼此彼此',py:'bǐcǐ bǐcǐ',vn:'như nhau cả thôi'},
     {zh:'彼此帮助',py:'bǐcǐ bāngzhù',vn:'giúp đỡ nhau'}
   ],
   patterns:[{s:'彼此 + (都) + V',m:'Hai bên (đều) … — 彼此 làm chủ ngữ'},{s:'不分彼此 / 彼此的 + N',m:'Làm tân ngữ / định ngữ — 互相 không làm được'}],
   checkList:[
     {promptLang:'vi',prompt:'Hai chúng tôi chơi với nhau từ nhỏ, nên rất hiểu nhau.',answer:'我们俩从小一起玩儿，所以彼此都很了解。',answerPy:'Wǒmen liǎ cóngxiǎo yìqǐ wánr, suǒyǐ bǐcǐ dōu hěn liǎojiě.',note:'彼此 làm chủ ngữ của vế sau, đứng trước 都.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Tuy sở thích của hai đứa khác nhau, nhưng chúng tôi rất tôn trọng nhau.',answer:'虽然我们彼此的爱好不同，但是我们很尊重对方。',answerPy:'Suīrán wǒmen bǐcǐ de àihào bù tóng, dànshì wǒmen hěn zūnzhòng duìfāng.',note:'彼此的爱好: 彼此 làm định ngữ — 互相 KHÔNG dùng được ở đây.',pair:'虽然……但是……'}
   ]},

  {n:16,zh:'表情',py:'biǎoqíng',pos:'Danh từ',vn:'nét mặt, vẻ mặt',hv:'biểu tình',em:'😮',lesson:1,
   explain:['Những gì hiện lên trên mặt thể hiện cảm xúc: vui, buồn, giận, ngạc nhiên…','Trong khi nhắn tin, 表情 còn là biểu tượng cảm xúc (emoji).'],
   usage:'脸上的表情, 表情很严肃; 做个表情, 发表情. BẪY: không phải "biểu tình" (xuống đường) như tiếng Việt.',
   collo:['脸上的表情','表情很严肃','做个表情','发表情'],
   ex_zh:'看他的表情，我就知道他考得不错。',ex_py:'Kàn tā de biǎoqíng, wǒ jiù zhīdào tā kǎo de búcuò.',ex_vn:'Nhìn nét mặt cậu ấy là tôi biết cậu ấy thi tốt.',
   exList:[
     {zh:'看他的表情，我就知道他考得不错。',py:'Kàn tā de biǎoqíng, wǒ jiù zhīdào tā kǎo de búcuò.',vn:'Nhìn nét mặt cậu ấy là tôi biết cậu ấy thi tốt.'},
     {zh:'听到这个消息，他脸上的表情一下子变了。',py:'Tīngdào zhège xiāoxi, tā liǎn shang de biǎoqíng yíxiàzi biàn le.',vn:'Nghe tin này, nét mặt anh ấy lập tức thay đổi.'},
     {zh:'聊天的时候，她特别喜欢发各种可爱的表情。',py:'Liáotiān de shíhou, tā tèbié xǐhuan fā gè zhǒng kě\'ài de biǎoqíng.',vn:'Khi nhắn tin, cô ấy rất thích gửi đủ loại biểu tượng cảm xúc dễ thương.'}
   ],
   colloFull:[
     {zh:'脸上的表情',py:'liǎn shang de biǎoqíng',vn:'nét mặt'},
     {zh:'表情很严肃',py:'biǎoqíng hěn yánsù',vn:'vẻ mặt rất nghiêm'},
     {zh:'做个表情',py:'zuò ge biǎoqíng',vn:'làm một vẻ mặt'},
     {zh:'发表情',py:'fā biǎoqíng',vn:'gửi emoji'},
     {zh:'看表情',py:'kàn biǎoqíng',vn:'nhìn nét mặt'}
   ],
   patterns:[{s:'N + 脸上的表情',m:'Nét mặt của ai'},{s:'从 + 表情 + 中 + 看出 / 了解',m:'Nhìn nét mặt mà biết …'}],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nhìn nét mặt mẹ là tôi biết mẹ đang giận.',answer:'我一看妈妈的表情，就知道她生气了。',answerPy:'Wǒ yí kàn māma de biǎoqíng, jiù zhīdào tā shēngqì le.',note:'表情 là danh từ: 看 + ai + 的表情.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cô ấy nghe xong câu chuyện, vẻ mặt càng lúc càng nghiêm túc.',answer:'她听完这个故事，表情越来越严肃。',answerPy:'Tā tīngwán zhège gùshi, biǎoqíng yuè lái yuè yánsù.',note:'表情 + tính từ (严肃 / 奇怪 / 紧张).',pair:'越来越……'}
   ]},

  {n:17,zh:'行为',py:'xíngwéi',pos:'Danh từ',vn:'hành vi, hành động',hv:'hành vi',em:'🚶',lesson:1,
   explain:['Việc làm, cách cư xử của con người (đôi khi của con vật) — thường dùng khi đánh giá tốt/xấu.'],
   usage:'Hay đi với 行为举止 (cử chỉ hành vi), 这种行为, 不文明的行为. Văn viết hơn 做法.',
   collo:['行为举止','这种行为','不文明的行为'],
   ex_zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',ex_py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',ex_vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.',
   exList:[
     {zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
     {zh:'在公共场所大声打电话是一种不文明的行为。',py:'Zài gōnggòng chǎngsuǒ dàshēng dǎ diànhuà shì yì zhǒng bù wénmíng de xíngwéi.',vn:'Gọi điện to tiếng ở nơi công cộng là một hành vi thiếu văn minh.'},
     {zh:'父母的行为对孩子影响很大。',py:'Fùmǔ de xíngwéi duì háizi yǐngxiǎng hěn dà.',vn:'Hành vi của cha mẹ ảnh hưởng rất lớn đến con cái.'}
   ],
   colloFull:[
     {zh:'行为举止',py:'xíngwéi jǔzhǐ',vn:'cử chỉ, hành vi'},
     {zh:'这种行为',py:'zhè zhǒng xíngwéi',vn:'hành vi này'},
     {zh:'不文明的行为',py:'bù wénmíng de xíngwéi',vn:'hành vi thiếu văn minh'},
     {zh:'好的行为习惯',py:'hǎo de xíngwéi xíguàn',vn:'thói quen hành vi tốt'}
   ],
   patterns:[{s:'行为举止',m:'Cử chỉ, hành vi (cách đi đứng, nói năng)'},{s:'……是一种 + Adj + 的行为',m:'… là một hành vi …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hành động của bạn ấy khiến cả lớp rất cảm động.',answer:'他的行为让全班同学都很感动。',answerPy:'Tā de xíngwéi ràng quán bān tóngxué dōu hěn gǎndòng.',note:'行为 làm chủ ngữ của câu 让.',pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi',prompt:'Chỉ cần là hành vi thiếu văn minh thì chúng ta đều không nên làm.',answer:'只要是不文明的行为，我们就都不应该做。',answerPy:'Zhǐyào shì bù wénmíng de xíngwéi, wǒmen jiù dōu bù yīnggāi zuò.',note:'不文明的 + 行为: tính từ + 的 + 行为.',pair:'只要……就……'}
   ]},

  {n:18,zh:'对方',py:'duìfāng',pos:'Danh từ',vn:'đối phương, phía bên kia, người kia',hv:'đối phương',em:'👉',lesson:1,
   explain:['Người hoặc bên ở phía đối diện với mình trong một mối quan hệ, cuộc nói chuyện, trận đấu.'],
   usage:'Không chỉ dùng cho "kẻ địch": tình bạn, hôn nhân, nói chuyện điện thoại đều dùng 对方: 了解对方, 尊重对方, 对方的意思.',
   collo:['了解对方','尊重对方','对方的意思'],
   ex_zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',ex_py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',ex_vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.',
   exList:[
     {zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',py:'Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
     {zh:'对方确实厉害，一上场就先赢了他两局。',py:'Duìfāng quèshí lìhai, yí shàngchǎng jiù xiān yíngle tā liǎng jú.',vn:'Đối thủ quả thực lợi hại, vừa vào trận đã thắng anh ấy hai ván trước.'},
     {zh:'夫妻之间应该学会尊重对方。',py:'Fūqī zhījiān yīnggāi xuéhuì zūnzhòng duìfāng.',vn:'Vợ chồng nên học cách tôn trọng người kia.'}
   ],
   colloFull:[
     {zh:'了解对方',py:'liǎojiě duìfāng',vn:'hiểu người kia'},
     {zh:'尊重对方',py:'zūnzhòng duìfāng',vn:'tôn trọng người kia'},
     {zh:'对方的意思',py:'duìfāng de yìsi',vn:'ý của người kia'},
     {zh:'对方球队',py:'duìfāng qiúduì',vn:'đội bạn'}
   ],
   patterns:[{s:'了解 / 尊重 / 关心 + 对方',m:'Hiểu / tôn trọng / quan tâm người kia'},{s:'对方 + 的 + N',m:'… của phía bên kia'}],
   checkList:[
     {promptLang:'vi',prompt:'Bạn bè ở với nhau lâu thì sẽ càng ngày càng hiểu nhau.',answer:'朋友相处久了，就会越来越了解对方。',answerPy:'Péngyou xiāngchǔ jiǔ le, jiù huì yuè lái yuè liǎojiě duìfāng.',note:'对方 làm tân ngữ của 了解.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Đội bạn tuy rất mạnh nhưng cuối cùng vẫn bị chúng ta đánh bại.',answer:'对方虽然很厉害，但是最后还是被我们打败了。',answerPy:'Duìfāng suīrán hěn lìhai, dànshì zuìhòu háishi bèi wǒmen dǎbài le.',note:'对方 làm chủ ngữ câu bị động.',pair:'被'}
   ]},

  {n:19,zh:'蔬菜',py:'shūcài',pos:'Danh từ',vn:'rau, rau củ',hv:'sơ thái',em:'🥬',lesson:1,
   explain:['Các loại rau củ dùng làm thức ăn: cải, cà chua, cà rốt…'],
   usage:'新鲜蔬菜, 多吃蔬菜, 蔬菜和水果. Khẩu ngữ hay nói 菜, nhưng 菜 còn là "món ăn"; 蔬菜 chỉ là rau.',
   collo:['新鲜蔬菜','多吃蔬菜','蔬菜和水果'],
   ex_zh:'你不能每顿饭光吃肉，还得多吃蔬菜。',ex_py:'Nǐ bù néng měi dùn fàn guāng chī ròu, hái děi duō chī shūcài.',ex_vn:'Bữa nào bạn cũng không thể chỉ ăn thịt, còn phải ăn nhiều rau nữa.',
   exList:[
     {zh:'你不能每顿饭光吃肉，还得多吃蔬菜。',py:'Nǐ bù néng měi dùn fàn guāng chī ròu, hái děi duō chī shūcài.',vn:'Bữa nào bạn cũng không thể chỉ ăn thịt, còn phải ăn nhiều rau nữa.'},
     {zh:'猴子太多，每天要吃大量的瓜果、蔬菜和粮食。',py:'Hóuzi tài duō, měi tiān yào chī dàliàng de guāguǒ, shūcài hé liángshi.',vn:'Khỉ nhiều quá, mỗi ngày phải ăn một lượng lớn dưa quả, rau củ và lương thực.'},
     {zh:'你每天光吃蔬菜，连肉都不吃，会营养不足。',py:'Nǐ měi tiān guāng chī shūcài, lián ròu dōu bù chī, huì yíngyǎng bùzú.',vn:'Ngày nào bạn cũng chỉ ăn rau, đến thịt cũng không ăn, sẽ thiếu dinh dưỡng đấy.'}
   ],
   colloFull:[
     {zh:'新鲜蔬菜',py:'xīnxiān shūcài',vn:'rau tươi'},
     {zh:'多吃蔬菜',py:'duō chī shūcài',vn:'ăn nhiều rau'},
     {zh:'蔬菜和水果',py:'shūcài hé shuǐguǒ',vn:'rau và hoa quả'},
     {zh:'种蔬菜',py:'zhòng shūcài',vn:'trồng rau'}
   ],
   patterns:[{s:'多吃 + 蔬菜 / 水果',m:'Ăn nhiều rau / hoa quả'},{s:'新鲜的 + 蔬菜',m:'Rau tươi'}],
   checkList:[
     {promptLang:'vi',prompt:'Bác sĩ nói chỉ cần ăn nhiều rau thì sức khoẻ sẽ tốt hơn.',answer:'医生说只要多吃蔬菜，身体就会更好。',answerPy:'Yīshēng shuō zhǐyào duō chī shūcài, shēntǐ jiù huì gèng hǎo.',note:'多 + 吃 + 蔬菜: 多 đứng trước động từ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Rau ở chợ này không những tươi mà còn rẻ.',answer:'这个市场的蔬菜不但新鲜，而且便宜。',answerPy:'Zhège shìchǎng de shūcài búdàn xīnxiān, érqiě piányi.',note:'蔬菜 + 新鲜 là kết hợp tự nhiên nhất.',pair:'不但……而且……'}
   ]},

  {n:20,zh:'粮食',py:'liángshi',pos:'Danh từ',vn:'lương thực',hv:'lương thực',em:'🌾',lesson:1,
   explain:['Thức ăn chính làm từ ngũ cốc và củ: gạo, lúa mì, ngô, khoai tây… (phần 扩展: thứ làm được món chính).'],
   usage:'节省粮食, 浪费粮食, 粮食不足, 种粮食. Chú ý pinyin: shi đọc nhẹ.',
   collo:['节省粮食','浪费粮食','粮食不足','种粮食'],
   ex_zh:'粮食主要是指可以做主食的东西，比如大米、土豆、玉米等。',ex_py:'Liángshi zhǔyào shì zhǐ kěyǐ zuò zhǔshí de dōngxi, bǐrú dàmǐ, tǔdòu, yùmǐ děng.',ex_vn:'Lương thực chủ yếu chỉ những thứ làm được món chính, ví dụ gạo, khoai tây, ngô…',
   exList:[
     {zh:'粮食主要是指可以做主食的东西，比如大米、土豆、玉米等。',py:'Liángshi zhǔyào shì zhǐ kěyǐ zuò zhǔshí de dōngxi, bǐrú dàmǐ, tǔdòu, yùmǐ děng.',vn:'Lương thực chủ yếu chỉ những thứ làm được món chính, ví dụ gạo, khoai tây, ngô…'},
     {zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.',vn:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.'},
     {zh:'吃多少拿多少，千万别浪费粮食。',py:'Chī duōshao ná duōshao, qiānwàn bié làngfèi liángshi.',vn:'Ăn bao nhiêu lấy bấy nhiêu, tuyệt đối đừng lãng phí lương thực.'}
   ],
   colloFull:[
     {zh:'节省粮食',py:'jiéshěng liángshi',vn:'tiết kiệm lương thực'},
     {zh:'浪费粮食',py:'làngfèi liángshi',vn:'lãng phí lương thực'},
     {zh:'粮食不足',py:'liángshi bùzú',vn:'thiếu lương thực'},
     {zh:'种粮食',py:'zhòng liángshi',vn:'trồng lương thực'},
     {zh:'大量的粮食',py:'dàliàng de liángshi',vn:'một lượng lớn lương thực'}
   ],
   patterns:[{s:'节省 / 浪费 + 粮食',m:'Tiết kiệm / lãng phí lương thực'},{s:'在 + 粮食不足 + 的情况下',m:'Trong tình hình thiếu lương thực'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi nói: lương thực là do nông dân vất vả trồng ra, không được lãng phí.',answer:'爷爷说：粮食是农民辛辛苦苦种出来的，不能浪费。',answerPy:'Yéye shuō: liángshi shì nóngmín xīnxīnkǔkǔ zhòng chūlái de, bù néng làngfèi.',note:'粮食 làm chủ ngữ; 是 + người + V + 的 nhấn mạnh ai làm ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Trong tình hình thiếu lương thực, ông lão nuôi khỉ bằng hạt dẻ.',answer:'在粮食不足的情况下，老人用橡子喂养猴子。',answerPy:'Zài liángshi bùzú de qíngkuàng xià, lǎorén yòng xiàngzi wèiyǎng hóuzi.',note:'Khung 在……的情况下 đứng đầu câu.',pair:'在……的情况下'}
   ]},

  {n:21,zh:'家庭',py:'jiātíng',pos:'Danh từ',vn:'gia đình',hv:'gia đình',em:'🏠',lesson:1,
   explain:['Đơn vị gồm những người sống chung vì hôn nhân, huyết thống — trang trọng, khái quát hơn 家.'],
   usage:'一个普通的家庭, 家庭成员, 家庭作业, 家庭条件. 家 dùng trong khẩu ngữ (我家), 家庭 thiên về khái niệm/văn viết.',
   collo:['普通的家庭','家庭成员','家庭作业','家庭条件'],
   ex_zh:'家庭的财力不能满足他的需要。',ex_py:'Jiātíng de cáilì bù néng mǎnzú tā de xūyào.',ex_vn:'Tài lực của gia đình không đáp ứng được nhu cầu của anh ấy.',
   exList:[
     {zh:'家庭的财力不能满足他的需要。',py:'Jiātíng de cáilì bù néng mǎnzú tā de xūyào.',vn:'Tài lực của gia đình không đáp ứng được nhu cầu của anh ấy.'},
     {zh:'一个普通的家庭，财产不多，哪有那么大的财力满足一群猴子对食物的长期需要呢？',py:'Yí ge pǔtōng de jiātíng, cáichǎn bù duō, nǎ yǒu nàme dà de cáilì mǎnzú yì qún hóuzi duì shíwù de chángqī xūyào ne?',vn:'Một gia đình bình thường, của cải chẳng bao nhiêu, lấy đâu ra nhiều tiền của đến thế để đáp ứng nhu cầu thức ăn lâu dài của cả một bầy khỉ?'},
     {zh:'我的家庭有五个成员：爷爷、奶奶、爸爸、妈妈和我。',py:'Wǒ de jiātíng yǒu wǔ ge chéngyuán: yéye, nǎinai, bàba, māma hé wǒ.',vn:'Gia đình tôi có năm thành viên: ông, bà, bố, mẹ và tôi.'}
   ],
   colloFull:[
     {zh:'普通的家庭',py:'pǔtōng de jiātíng',vn:'gia đình bình thường'},
     {zh:'家庭成员',py:'jiātíng chéngyuán',vn:'thành viên gia đình'},
     {zh:'家庭作业',py:'jiātíng zuòyè',vn:'bài tập về nhà'},
     {zh:'家庭条件',py:'jiātíng tiáojiàn',vn:'điều kiện gia đình'},
     {zh:'幸福的家庭',py:'xìngfú de jiātíng',vn:'gia đình hạnh phúc'}
   ],
   patterns:[{s:'一个 + Adj + 的家庭',m:'Một gia đình …'},{s:'家庭 + 成员 / 作业 / 条件',m:'Thành viên / bài tập về nhà / điều kiện gia đình'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy điều kiện gia đình không tốt, nhưng anh ấy chưa bao giờ than phiền.',answer:'虽然家庭条件不好，但是他从来没抱怨过。',answerPy:'Suīrán jiātíng tiáojiàn bù hǎo, dànshì tā cónglái méi bàoyuànguo.',note:'Ôn 抱怨 (bài 1); 家庭条件 = điều kiện gia đình.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cô ấy lớn lên trong một gia đình bình thường.',answer:'她是在一个普通的家庭里长大的。',answerPy:'Tā shì zài yí ge pǔtōng de jiātíng li zhǎngdà de.',note:'Nhấn mạnh nơi chốn của việc đã xảy ra: 是 + 在…… + V + 的.',pair:'是……的'}
   ]},

  {n:22,zh:'财产',py:'cáichǎn',pos:'Danh từ',vn:'tài sản, của cải',hv:'tài sản',em:'💰',lesson:1,
   explain:['Tiền bạc, nhà cửa, đồ vật có giá trị thuộc về một người, gia đình hay tổ chức.'],
   usage:'财产不多, 个人财产, 公共财产, 保护财产, 全部财产. Trang trọng hơn 钱.',
   collo:['财产不多','个人财产','公共财产','保护财产'],
   ex_zh:'一个普通的家庭，财产不多。',ex_py:'Yí ge pǔtōng de jiātíng, cáichǎn bù duō.',ex_vn:'Một gia đình bình thường, của cải chẳng bao nhiêu.',
   exList:[
     {zh:'一个普通的家庭，财产不多。',py:'Yí ge pǔtōng de jiātíng, cáichǎn bù duō.',vn:'Một gia đình bình thường, của cải chẳng bao nhiêu.'},
     {zh:'他把全部财产都留给了孩子。',py:'Tā bǎ quánbù cáichǎn dōu liú gěile háizi.',vn:'Ông ấy để lại toàn bộ tài sản cho con.'},
     {zh:'爱护公共财产是每个人的责任。',py:'Àihù gōnggòng cáichǎn shì měi ge rén de zérèn.',vn:'Giữ gìn tài sản công là trách nhiệm của mỗi người.'}
   ],
   colloFull:[
     {zh:'财产不多',py:'cáichǎn bù duō',vn:'của cải không nhiều'},
     {zh:'个人财产',py:'gèrén cáichǎn',vn:'tài sản cá nhân'},
     {zh:'公共财产',py:'gōnggòng cáichǎn',vn:'tài sản công'},
     {zh:'保护财产',py:'bǎohù cáichǎn',vn:'bảo vệ tài sản'},
     {zh:'全部财产',py:'quánbù cáichǎn',vn:'toàn bộ tài sản'}
   ],
   patterns:[{s:'个人 / 公共 / 全部 + 财产',m:'Tài sản cá nhân / công / toàn bộ'},{s:'财产 + 多 / 不多',m:'Của cải nhiều / không nhiều'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông cụ đã để lại toàn bộ tài sản cho trường học.',answer:'老人把全部财产都留给了学校。',answerPy:'Lǎorén bǎ quánbù cáichǎn dōu liú gěile xuéxiào.',note:'把 + 财产 + 留给 + ai.',pair:'把'},
     {promptLang:'vi',prompt:'Tài sản công bị làm hỏng rồi, ai chịu trách nhiệm?',answer:'公共财产被弄坏了，谁来负责？',answerPy:'Gōnggòng cáichǎn bèi nònghuài le, shéi lái fùzé?',note:'公共财产 làm chủ ngữ câu bị động.',pair:'被'}
   ]},

  {n:23,zh:'消费',py:'xiāofèi',pos:'Động từ',vn:'tiêu thụ, tiêu dùng, chi tiêu',hv:'tiêu phí',em:'🛒',lesson:1,
   explain:['Dùng tiền mua hàng hoá, dịch vụ để phục vụ đời sống.'],
   usage:'Động từ: 消费了很多钱. Hay làm định ngữ: 消费群体, 消费习惯, 消费水平, 消费标准, 消费量. BẪY: "tiêu phí" tiếng Việt là phung phí, còn 消费 trung tính = chi tiêu.',
   collo:['消费群体','消费习惯','消费水平','减少消费'],
   ex_zh:'老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。',ex_py:'Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi, hǎo jiéshěng xiē shíwù ná qù wèiyǎng hóuzi.',ex_vn:'Ông lão thậm chí phải giảm chi tiêu của người nhà để dành dụm chút thức ăn đem nuôi khỉ.',
   exList:[
     {zh:'老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。',py:'Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi, hǎo jiéshěng xiē shíwù ná qù wèiyǎng hóuzi.',vn:'Ông lão thậm chí phải giảm chi tiêu của người nhà để dành dụm chút thức ăn đem nuôi khỉ.'},
     {zh:'这种产品有固定的消费群体。',py:'Zhè zhǒng chǎnpǐn yǒu gùdìng de xiāofèi qúntǐ.',vn:'Loại sản phẩm này có nhóm khách hàng cố định.'},
     {zh:'年轻人的消费习惯和父母很不一样。',py:'Niánqīngrén de xiāofèi xíguàn hé fùmǔ hěn bù yíyàng.',vn:'Thói quen chi tiêu của người trẻ rất khác bố mẹ.'}
   ],
   colloFull:[
     {zh:'消费群体',py:'xiāofèi qúntǐ',vn:'nhóm người tiêu dùng'},
     {zh:'消费习惯',py:'xiāofèi xíguàn',vn:'thói quen chi tiêu'},
     {zh:'消费水平',py:'xiāofèi shuǐpíng',vn:'mức tiêu dùng'},
     {zh:'减少消费',py:'jiǎnshǎo xiāofèi',vn:'giảm chi tiêu'},
     {zh:'消费量',py:'xiāofèiliàng',vn:'lượng tiêu thụ'}
   ],
   patterns:[{s:'消费 + 群体 / 习惯 / 水平 / 标准',m:'Nhóm / thói quen / mức tiêu dùng'},{s:'减少 / 增加 + 消费',m:'Giảm / tăng chi tiêu'}],
   checkList:[
     {promptLang:'vi',prompt:'Mức tiêu dùng của người dân càng ngày càng cao.',answer:'人们的消费水平越来越高了。',answerPy:'Rénmen de xiāofèi shuǐpíng yuè lái yuè gāo le.',note:'消费 làm định ngữ, đứng thẳng trước 水平.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Để tiết kiệm tiền, tháng này tôi đã giảm chi tiêu.',answer:'为了省钱，这个月我减少了消费。',answerPy:'Wèile shěng qián, zhège yuè wǒ jiǎnshǎole xiāofèi.',note:'减少 + 消费: 消费 làm tân ngữ.',pair:'为了……'}
   ]},

  {n:24,zh:'节省',py:'jiéshěng',pos:'Động từ',vn:'tiết kiệm, dành dụm',hv:'tiết tỉnh',em:'🪙',lesson:1,
   explain:['Dùng ít đi để không lãng phí tiền, thời gian, sức lực, đồ ăn…'],
   usage:'节省 + 时间/钱/粮食; bổ ngữ: 节省一点儿, 节省出来, 节省下来. Khẩu ngữ hay nói gọn 省.',
   collo:['节省时间','节省粮食','节省下来','节省一点儿'],
   ex_zh:'坐地铁上班可以节省很多时间。',ex_py:'Zuò dìtiě shàngbān kěyǐ jiéshěng hěn duō shíjiān.',ex_vn:'Đi tàu điện ngầm đi làm có thể tiết kiệm rất nhiều thời gian.',
   exList:[
     {zh:'坐地铁上班可以节省很多时间。',py:'Zuò dìtiě shàngbān kěyǐ jiéshěng hěn duō shíjiān.',vn:'Đi tàu điện ngầm đi làm có thể tiết kiệm rất nhiều thời gian.'},
     {zh:'老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。',py:'Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi, hǎo jiéshěng xiē shíwù ná qù wèiyǎng hóuzi.',vn:'Ông lão thậm chí phải giảm chi tiêu của người nhà để dành dụm chút thức ăn đem nuôi khỉ.'},
     {zh:'她把节省下来的钱都给了妈妈。',py:'Tā bǎ jiéshěng xiàlái de qián dōu gěile māma.',vn:'Cô ấy đưa hết số tiền dành dụm được cho mẹ.'}
   ],
   colloFull:[
     {zh:'节省时间',py:'jiéshěng shíjiān',vn:'tiết kiệm thời gian'},
     {zh:'节省粮食',py:'jiéshěng liángshi',vn:'tiết kiệm lương thực'},
     {zh:'节省下来',py:'jiéshěng xiàlái',vn:'dành dụm được'},
     {zh:'节省一点儿',py:'jiéshěng yìdiǎnr',vn:'tiết kiệm một chút'},
     {zh:'节省出来',py:'jiéshěng chūlái',vn:'tiết kiệm ra được'}
   ],
   patterns:[{s:'节省 + 时间 / 钱 / 粮食',m:'Tiết kiệm …'},{s:'节省 + 下来 / 出来 / 一点儿',m:'Dành dụm được / tiết kiệm ra'}],
   checkList:[
     {promptLang:'vi',prompt:'Để tiết kiệm thời gian, sáng nào anh ấy cũng ăn sáng trên tàu điện ngầm.',answer:'为了节省时间，他每天早上都在地铁上吃早饭。',answerPy:'Wèile jiéshěng shíjiān, tā měi tiān zǎoshang dōu zài dìtiě shang chī zǎofàn.',note:'节省 + 时间: kết hợp hay gặp nhất.',pair:'为了……'},
     {promptLang:'vi',prompt:'Cô ấy lấy số tiền dành dụm được mua cho bố một món quà.',answer:'她把节省下来的钱给爸爸买了一件礼物。',answerPy:'Tā bǎ jiéshěng xiàlái de qián gěi bàba mǎile yí jiàn lǐwù.',note:'节省下来的 + N: làm định ngữ.',pair:'把'}
   ]},

  {n:25,zh:'限制',py:'xiànzhì',pos:'Động từ',vn:'hạn chế, giới hạn',hv:'hạn chế',em:'🚧',lesson:1,
   explain:['Đặt ra giới hạn, không cho vượt quá một phạm vi nào đó (số lượng, tuổi, thời gian…).'],
   usage:'限制 + 数量/年龄/发展/时间; cũng làm danh từ: 没有限制, 受到限制.',
   collo:['限制数量','限制年龄','限制发展','限制食量'],
   ex_zh:'他注意到该限制猴子的食量了。',ex_py:'Tā zhùyì dào gāi xiànzhì hóuzi de shíliàng le.',ex_vn:'Ông nhận ra đã đến lúc phải hạn chế khẩu phần ăn của lũ khỉ.',
   exList:[
     {zh:'他注意到该限制猴子的食量了。',py:'Tā zhùyì dào gāi xiànzhì hóuzi de shíliàng le.',vn:'Ông nhận ra đã đến lúc phải hạn chế khẩu phần ăn của lũ khỉ.'},
     {zh:'这次的作文不限制字数，你可以想写多少就写多少。',py:'Zhè cì de zuòwén bú xiànzhì zìshù, nǐ kěyǐ xiǎng xiě duōshao jiù xiě duōshao.',vn:'Bài văn lần này không giới hạn số chữ, em muốn viết bao nhiêu thì viết bấy nhiêu.'},
     {zh:'看来我得限制一下自己的食量了。',py:'Kànlái wǒ děi xiànzhì yíxià zìjǐ de shíliàng le.',vn:'Xem ra tôi phải hạn chế lượng ăn của mình rồi.'}
   ],
   colloFull:[
     {zh:'限制数量',py:'xiànzhì shùliàng',vn:'hạn chế số lượng'},
     {zh:'限制年龄',py:'xiànzhì niánlíng',vn:'giới hạn tuổi'},
     {zh:'限制发展',py:'xiànzhì fāzhǎn',vn:'hạn chế sự phát triển'},
     {zh:'限制食量',py:'xiànzhì shíliàng',vn:'hạn chế lượng ăn'},
     {zh:'没有限制',py:'méiyǒu xiànzhì',vn:'không có giới hạn'}
   ],
   patterns:[{s:'限制 + 数量 / 年龄 / 时间 / 发展',m:'Hạn chế …'},{s:'不 / 没有 + 限制',m:'Không giới hạn'}],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ giới hạn thời gian chơi điện thoại của tôi ở mức một tiếng mỗi ngày.',answer:'妈妈把我玩儿手机的时间限制在每天一个小时。',answerPy:'Māma bǎ wǒ wánr shǒujī de shíjiān xiànzhì zài měi tiān yí ge xiǎoshí.',note:'把 + N + 限制在 + mức.',pair:'把'},
     {promptLang:'vi',prompt:'Cuộc thi này không giới hạn tuổi, chỉ cần thích hát là có thể tham gia.',answer:'这次比赛不限制年龄，只要喜欢唱歌，就可以参加。',answerPy:'Zhè cì bǐsài bú xiànzhì niánlíng, zhǐyào xǐhuan chànggē, jiù kěyǐ cānjiā.',note:'不 + 限制 + 年龄 / 字数.',pair:'只要……就……'}
   ]},

  {n:26,zh:'猪',py:'zhū',pos:'Danh từ',vn:'con heo (lợn)',hv:'trư',em:'🐖',lesson:1,
   explain:['Con heo (lợn) — vật nuôi quen thuộc; trong khẩu ngữ còn dùng để trêu ai ăn nhiều, ngủ nhiều.'],
   usage:'Lượng từ 头 hoặc 只: 一头猪. Thịt heo là 猪肉. Câu đùa: 懒得像猪 (lười như heo).',
   collo:['一头猪','猪肉','养猪'],
   ex_zh:'猴子不像猪、狗，吃不饱时仅仅只是叫叫。',ex_py:'Hóuzi bú xiàng zhū, gǒu, chī bu bǎo shí jǐnjǐn zhǐshì jiàojiao.',ex_vn:'Khỉ không giống heo, chó — ăn không no thì chỉ kêu vài tiếng.',
   exList:[
     {zh:'猴子不像猪、狗，吃不饱时仅仅只是叫叫。',py:'Hóuzi bú xiàng zhū, gǒu, chī bu bǎo shí jǐnjǐn zhǐshì jiàojiao.',vn:'Khỉ không giống heo, chó — ăn không no thì chỉ kêu vài tiếng.'},
     {zh:'我外婆在农村养了两头猪。',py:'Wǒ wàipó zài nóngcūn yǎngle liǎng tóu zhū.',vn:'Bà ngoại tôi ở quê nuôi hai con heo.'},
     {zh:'今天中午我们吃猪肉饺子。',py:'Jīntiān zhōngwǔ wǒmen chī zhūròu jiǎozi.',vn:'Trưa nay chúng ta ăn sủi cảo nhân thịt heo.'}
   ],
   colloFull:[
     {zh:'一头猪',py:'yì tóu zhū',vn:'một con heo'},
     {zh:'猪肉',py:'zhūròu',vn:'thịt heo'},
     {zh:'养猪',py:'yǎng zhū',vn:'nuôi heo'},
     {zh:'像猪一样',py:'xiàng zhū yíyàng',vn:'như con heo'}
   ],
   patterns:[{s:'一头 + 猪',m:'Một con heo (lượng từ 头)'},{s:'猪 + 肉',m:'Thịt heo'}],
   checkList:[
     {promptLang:'vi',prompt:'Em trai tôi ăn khoẻ như heo mà chẳng béo lên chút nào.',answer:'我弟弟像猪一样能吃，居然一点儿也不胖。',answerPy:'Wǒ dìdi xiàng zhū yíyàng néng chī, jūrán yìdiǎnr yě bú pàng.',note:'Ôn 居然 (bài 1) + 一点儿也不 + Adj.',pair:'像……一样'},
     {promptLang:'vi',prompt:'Năm nay thịt heo càng ngày càng đắt.',answer:'今年的猪肉越来越贵了。',answerPy:'Jīnnián de zhūròu yuè lái yuè guì le.',note:'猪 + 肉 = thịt heo (không nói 猪的肉).',pair:'越来越……'}
   ]},

  {n:27,zh:'调皮',py:'tiáopí',pos:'Tính từ',vn:'nghịch ngợm, tinh nghịch',hv:'điều bì',em:'😜',lesson:1,
   explain:['Hiếu động, hay nghịch, không chịu nghe lời — thường nói về trẻ con, con vật; nhiều khi mang sắc thái đáng yêu, dí dỏm.'],
   usage:'很调皮, 调皮的孩子, 太调皮了; làm trạng ngữ: 调皮地笑. Gần nghĩa 淘气 — xem phần phân biệt.',
   collo:['调皮的孩子','太调皮了','调皮地笑'],
   ex_zh:'我儿子真是太调皮了！我都快受不了了。',ex_py:'Wǒ érzi zhēn shì tài tiáopí le! Wǒ dōu kuài shòu bu liǎo le.',ex_vn:'Con trai tôi đúng là nghịch quá! Tôi sắp chịu hết nổi rồi.',
   exList:[
     {zh:'我儿子真是太调皮了！我都快受不了了。',py:'Wǒ érzi zhēn shì tài tiáopí le! Wǒ dōu kuài shòu bu liǎo le.',vn:'Con trai tôi đúng là nghịch quá! Tôi sắp chịu hết nổi rồi.'},
     {zh:'它们如果得不到好的待遇，就会像一群调皮的孩子，经常跟人淘气。',py:'Tāmen rúguǒ dé bu dào hǎo de dàiyù, jiù huì xiàng yì qún tiáopí de háizi, jīngcháng gēn rén táoqì.',vn:'Nếu không được đối xử tử tế, chúng sẽ như một đám trẻ nghịch ngợm, thường xuyên quậy phá người ta.'},
     {zh:'她调皮地眨了眨眼睛。',py:'Tā tiáopí de zhǎle zhǎ yǎnjing.',vn:'Cô ấy tinh nghịch nháy mắt.'}
   ],
   colloFull:[
     {zh:'调皮的孩子',py:'tiáopí de háizi',vn:'đứa trẻ nghịch ngợm'},
     {zh:'太调皮了',py:'tài tiáopí le',vn:'nghịch quá'},
     {zh:'调皮地笑',py:'tiáopí de xiào',vn:'cười tinh nghịch'},
     {zh:'调皮捣蛋',py:'tiáopí dǎodàn',vn:'nghịch ngợm phá phách'}
   ],
   patterns:[{s:'太 / 很 + 调皮',m:'Rất nghịch'},{s:'调皮 + 地 + V',m:'Làm … một cách tinh nghịch'}],
   checkList:[
     {promptLang:'vi',prompt:'Thằng bé này tuy nghịch nhưng học hành rất giỏi.',answer:'这个孩子虽然很调皮，但是学习很好。',answerPy:'Zhège háizi suīrán hěn tiáopí, dànshì xuéxí hěn hǎo.',note:'调皮 là tính từ, đi sau 很.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Con mèo nghịch ngợm làm đổ cái cốc trên bàn.',answer:'调皮的小猫把桌子上的杯子碰倒了。',answerPy:'Tiáopí de xiǎo māo bǎ zhuōzi shang de bēizi pèngdǎo le.',note:'调皮的 + N: làm định ngữ.',pair:'把'}
   ]},

  {n:28,zh:'淘气',py:'táoqì',pos:'Tính từ',vn:'nghịch ngợm, quậy',hv:'đào khí',em:'🙃',lesson:1,
   explain:['Nghịch, hay quậy phá, không nghe lời — chủ yếu nói về trẻ con.'],
   usage:'很淘气, 淘气的孩子; 跟人淘气 (quậy người ta); 淘气包 (đứa trẻ nghịch như quỷ). Khẩu ngữ hơn 调皮 một chút.',
   collo:['淘气的孩子','跟人淘气','有点儿淘气'],
   ex_zh:'小孩子嘛，多少都有点儿淘气。',ex_py:'Xiǎoháizi ma, duōshǎo dōu yǒudiǎnr táoqì.',ex_vn:'Trẻ con mà, ít nhiều đều hơi nghịch.',
   exList:[
     {zh:'小孩子嘛，多少都有点儿淘气。',py:'Xiǎoháizi ma, duōshǎo dōu yǒudiǎnr táoqì.',vn:'Trẻ con mà, ít nhiều đều hơi nghịch.'},
     {zh:'它们如果得不到好的待遇，就会像一群调皮的孩子，经常跟人淘气。',py:'Tāmen rúguǒ dé bu dào hǎo de dàiyù, jiù huì xiàng yì qún tiáopí de háizi, jīngcháng gēn rén táoqì.',vn:'Nếu không được đối xử tử tế, chúng sẽ như một đám trẻ nghịch ngợm, thường xuyên quậy phá người ta.'},
     {zh:'小时候我特别淘气，常常让妈妈生气。',py:'Xiǎoshíhou wǒ tèbié táoqì, chángcháng ràng māma shēngqì.',vn:'Hồi nhỏ tôi nghịch lắm, hay làm mẹ giận.'}
   ],
   colloFull:[
     {zh:'淘气的孩子',py:'táoqì de háizi',vn:'đứa trẻ nghịch ngợm'},
     {zh:'跟人淘气',py:'gēn rén táoqì',vn:'quậy phá người ta'},
     {zh:'有点儿淘气',py:'yǒudiǎnr táoqì',vn:'hơi nghịch'},
     {zh:'淘气包',py:'táoqìbāo',vn:'đứa trẻ nghịch như quỷ'}
   ],
   patterns:[{s:'跟 + người + 淘气',m:'Quậy phá ai'},{s:'有点儿 / 特别 + 淘气',m:'Hơi / rất nghịch'}],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ anh trai tôi nghịch lắm, từng làm vỡ cửa sổ nhà hàng xóm.',answer:'我哥哥小时候特别淘气，打破过邻居家的窗户。',answerPy:'Wǒ gēge xiǎoshíhou tèbié táoqì, dǎpòguo línjū jiā de chuānghu.',note:'Kể trải nghiệm đã từng: V + 过.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Chỉ cần mẹ không ở nhà là em trai lại bắt đầu quậy.',answer:'只要妈妈不在家，弟弟就开始淘气。',answerPy:'Zhǐyào māma bú zài jiā, dìdi jiù kāishǐ táoqì.',note:'淘气 làm tân ngữ của 开始.',pair:'只要……就……'}
   ]},

  {n:29,zh:'橡子',py:'xiàngzi',pos:'Danh từ',vn:'quả đấu, hạt dẻ rừng',hv:'tượng tử',em:'🌰',lesson:1,
   explain:['Quả của cây sồi (cây đấu) — một loại hạt cứng, khỉ và sóc rất thích ăn.'],
   usage:'Lượng từ 颗: 三颗橡子. Từ ít gặp, chủ yếu cần nhận ra khi đọc bài.',
   collo:['三颗橡子','用橡子喂猴子','一些橡子'],
   ex_zh:'老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。',ex_py:'Lǎorén de péngyou sòng gěi tā hěn duō xiàngzi, zhè shì yì zhǒng hóuzi ài chī de guǒshí.',ex_vn:'Bạn của ông lão tặng ông rất nhiều hạt dẻ, đó là một loại quả khỉ rất thích ăn.',
   exList:[
     {zh:'老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。',py:'Lǎorén de péngyou sòng gěi tā hěn duō xiàngzi, zhè shì yì zhǒng hóuzi ài chī de guǒshí.',vn:'Bạn của ông lão tặng ông rất nhiều hạt dẻ, đó là một loại quả khỉ rất thích ăn.'},
     {zh:'今后你们除了吃馒头，还可以再吃一些橡子。',py:'Jīnhòu nǐmen chúle chī mántou, hái kěyǐ zài chī yìxiē xiàngzi.',vn:'Từ nay ngoài ăn màn thầu, các con còn được ăn thêm ít hạt dẻ.'},
     {zh:'秋天，小松鼠在树下捡了很多橡子。',py:'Qiūtiān, xiǎo sōngshǔ zài shù xià jiǎnle hěn duō xiàngzi.',vn:'Mùa thu, chú sóc nhỏ nhặt được rất nhiều hạt dẻ dưới gốc cây.'}
   ],
   colloFull:[
     {zh:'三颗橡子',py:'sān kē xiàngzi',vn:'ba hạt dẻ'},
     {zh:'用橡子喂猴子',py:'yòng xiàngzi wèi hóuzi',vn:'cho khỉ ăn hạt dẻ'},
     {zh:'一些橡子',py:'yìxiē xiàngzi',vn:'một ít hạt dẻ'},
     {zh:'捡橡子',py:'jiǎn xiàngzi',vn:'nhặt hạt dẻ'}
   ],
   patterns:[{s:'Số + 颗 + 橡子',m:'Mấy hạt dẻ'},{s:'用 + 橡子 + 喂 + N',m:'Cho … ăn hạt dẻ'}],
   checkList:[
     {promptLang:'vi',prompt:'Lũ khỉ ngoài màn thầu ra còn được ăn thêm ít hạt dẻ.',answer:'猴子们除了吃馒头以外，还可以吃一些橡子。',answerPy:'Hóuzimen chúle chī mántou yǐwài, hái kěyǐ chī yìxiē xiàngzi.',note:'除了……以外，还……: ngoài … còn ….',pair:'除了……以外，还……'},
     {promptLang:'vi',prompt:'Hạt dẻ là do bạn của ông lão tặng.',answer:'橡子是老人的朋友送的。',answerPy:'Xiàngzi shì lǎorén de péngyou sòng de.',note:'Nhấn mạnh người làm: 是 + người + V + 的.',pair:'是……的'}
   ]},

  {n:30,zh:'果实',py:'guǒshí',pos:'Danh từ',vn:'quả, trái cây; (nghĩa bóng) thành quả',hv:'quả thực',em:'🍎',lesson:1,
   explain:['Quả của cây nói chung (văn viết).','Nghĩa bóng: thành quả của lao động, của nỗ lực: 劳动的果实.'],
   usage:'一种果实, 结果实 (ra quả), 劳动的果实. Nói về đồ ăn hằng ngày thì dùng 水果.',
   collo:['一种果实','结果实','劳动的果实'],
   ex_zh:'秋天到了，树上结满了果实。',ex_py:'Qiūtiān dào le, shù shang jiémǎnle guǒshí.',ex_vn:'Mùa thu đến rồi, cây trĩu quả.',
   exList:[
     {zh:'秋天到了，树上结满了果实。',py:'Qiūtiān dào le, shù shang jiémǎnle guǒshí.',vn:'Mùa thu đến rồi, cây trĩu quả.'},
     {zh:'老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。',py:'Lǎorén de péngyou sòng gěi tā hěn duō xiàngzi, zhè shì yì zhǒng hóuzi ài chī de guǒshí.',vn:'Bạn của ông lão tặng ông rất nhiều hạt dẻ, đó là một loại quả khỉ rất thích ăn.'},
     {zh:'这是我们一起努力得到的果实，大家要好好珍惜。',py:'Zhè shì wǒmen yìqǐ nǔlì dédào de guǒshí, dàjiā yào hǎohǎo zhēnxī.',vn:'Đây là thành quả chúng ta cùng nhau cố gắng mới có, mọi người phải trân trọng.'}
   ],
   colloFull:[
     {zh:'一种果实',py:'yì zhǒng guǒshí',vn:'một loại quả'},
     {zh:'结果实',py:'jiē guǒshí',vn:'ra quả'},
     {zh:'劳动的果实',py:'láodòng de guǒshí',vn:'thành quả lao động'},
     {zh:'成熟的果实',py:'chéngshú de guǒshí',vn:'quả chín'}
   ],
   patterns:[{s:'树上结 + (满了) + 果实',m:'Cây ra (đầy) quả'},{s:'劳动 / 努力 + 的果实',m:'Thành quả của lao động / nỗ lực'}],
   checkList:[
     {promptLang:'vi',prompt:'Mùa thu vừa đến, cây trong sân đã trĩu quả.',answer:'秋天一到，院子里的树就结满了果实。',answerPy:'Qiūtiān yí dào, yuànzi li de shù jiù jiémǎnle guǒshí.',note:'结 + 果实: động từ "ra (quả)" là 结, không dùng 生.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Những quả này là do chính tay chúng ta trồng ra.',answer:'这些果实是我们自己用双手种出来的。',answerPy:'Zhèxiē guǒshí shì wǒmen zìjǐ yòng shuāngshǒu zhòng chūlái de.',note:'果实 làm chủ ngữ; 是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:31,zh:'不足',py:'bùzú',pos:'Tính từ / Động từ',vn:'thiếu, không đủ; chưa đến (mức)',hv:'bất túc',em:'📉',lesson:1,
   explain:['Tính từ: không đủ, thiếu (粮食不足, 营养不足).','Động từ: chưa đến mức (不足一百人 = chưa đến trăm người). Còn dùng như danh từ: 不足之处 (chỗ còn thiếu sót).'],
   usage:'Thường đứng SAU danh từ: 准备不足, 经验不足, 营养不足 — văn viết hơn 不够.',
   collo:['粮食不足','准备不足','营养不足','经验不足'],
   ex_zh:'他输了这场比赛不是因为能力不够，而是因为准备不足。',ex_py:'Tā shūle zhè chǎng bǐsài bú shì yīnwèi nénglì bú gòu, ér shì yīnwèi zhǔnbèi bùzú.',ex_vn:'Anh ấy thua trận này không phải vì năng lực không đủ mà vì chuẩn bị chưa đủ.',
   exList:[
     {zh:'他输了这场比赛不是因为能力不够，而是因为准备不足。',py:'Tā shūle zhè chǎng bǐsài bú shì yīnwèi nénglì bú gòu, ér shì yīnwèi zhǔnbèi bùzú.',vn:'Anh ấy thua trận này không phải vì năng lực không đủ mà vì chuẩn bị chưa đủ.'},
     {zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.',vn:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.'},
     {zh:'你每天光吃蔬菜，连肉都不吃，会营养不足。',py:'Nǐ měi tiān guāng chī shūcài, lián ròu dōu bù chī, huì yíngyǎng bùzú.',vn:'Ngày nào bạn cũng chỉ ăn rau, đến thịt cũng không ăn, sẽ thiếu dinh dưỡng đấy.'}
   ],
   colloFull:[
     {zh:'粮食不足',py:'liángshi bùzú',vn:'thiếu lương thực'},
     {zh:'准备不足',py:'zhǔnbèi bùzú',vn:'chuẩn bị chưa đủ'},
     {zh:'营养不足',py:'yíngyǎng bùzú',vn:'thiếu dinh dưỡng'},
     {zh:'经验不足',py:'jīngyàn bùzú',vn:'thiếu kinh nghiệm'},
     {zh:'不足之处',py:'bùzú zhī chù',vn:'chỗ còn thiếu sót'}
   ],
   patterns:[{s:'N + 不足 (准备 / 经验 / 营养)',m:'Thiếu …'},{s:'不足 + số lượng',m:'Chưa đến … (不足十人)'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy thua không phải vì năng lực kém mà vì chuẩn bị chưa đủ.',answer:'他输了不是因为能力差，而是因为准备不足。',answerPy:'Tā shūle bú shì yīnwèi nénglì chà, ér shì yīnwèi zhǔnbèi bùzú.',note:'不足 đứng SAU danh từ 准备.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Tuy thiếu kinh nghiệm, nhưng cô ấy làm việc rất chăm chỉ.',answer:'她虽然经验不足，但是工作非常努力。',answerPy:'Tā suīrán jīngyàn bùzú, dànshì gōngzuò fēicháng nǔlì.',note:'经验不足 = thiếu kinh nghiệm (không nói 不足经验).',pair:'虽然……但是……'}
   ]},

  {n:32,zh:'倒',py:'dào',pos:'Phó từ',vn:'lại, trái lại; thì … đấy; (giục) … đi chứ',hv:'đảo',em:'🔃',lesson:1,
   explain:['Trái với lẽ thường / với điều nghĩ tới: 用橡子喂猴子倒是个办法.','Nhượng bộ — khẳng định trước bằng 倒 rồi nói mặt khác: 质量倒是挺好，就是价格太贵了.','Sốt ruột, thúc giục: 你倒是说句话呀！'],
   usage:'倒 là PHÓ TỪ, đứng sau chủ ngữ, trước động từ/tính từ; rất hay dùng dạng 倒是. Đừng nhầm với 倒 dǎo (ngã, đổ) hay 倒 dào (rót, đổ nước).',
   collo:['倒是个办法','倒是挺好','你倒是说呀','反倒'],
   ex_zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',ex_py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.',ex_vn:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.',
   exList:[
     {zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.',vn:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.'},
     {zh:'质量倒是挺好，就是价格太贵了。',py:'Zhìliàng dàoshì tǐng hǎo, jiùshì jiàgé tài guì le.',vn:'Chất lượng thì tốt đấy, chỉ có điều giá đắt quá.'},
     {zh:'你究竟去还是不去？倒是说句话呀！',py:'Nǐ jiūjìng qù háishi bú qù? Dàoshì shuō jù huà ya!',vn:'Rốt cuộc cậu đi hay không đi? Nói một câu đi chứ!'}
   ],
   colloFull:[
     {zh:'倒是个办法',py:'dàoshì ge bànfǎ',vn:'lại là một cách hay'},
     {zh:'倒是挺好',py:'dàoshì tǐng hǎo',vn:'thì tốt đấy'},
     {zh:'你倒是说呀',py:'nǐ dàoshì shuō ya',vn:'cậu nói đi chứ'},
     {zh:'反倒',py:'fǎndào',vn:'trái lại'},
     {zh:'我倒要看看',py:'wǒ dào yào kànkan',vn:'tôi lại muốn xem thử'}
   ],
   patterns:[{s:'A 倒是 + Adj，就是 / 可是 + B',m:'A thì … đấy, chỉ có điều B (nhượng bộ)'},{s:'你倒是 + V + 啊 / 呀',m:'Thì cậu … đi chứ! (thúc giục)'}],
   checkList:[
     {promptLang:'vi',prompt:'Căn nhà này rộng thì rộng đấy, chỉ có điều cách trường hơi xa.',answer:'这套房子倒是挺大的，就是离学校有点儿远。',answerPy:'Zhè tào fángzi dàoshì tǐng dà de, jiùshì lí xuéxiào yǒudiǎnr yuǎn.',note:'倒是 khẳng định trước, 就是 nói mặt chưa tốt.',pair:'有点儿 + Adj'},
     {promptLang:'vi',prompt:'Mọi người đều đang đợi cậu, cậu nói một câu đi chứ!',answer:'大家都在等你，你倒是说句话呀！',answerPy:'Dàjiā dōu zài děng nǐ, nǐ dàoshì shuō jù huà ya!',note:'倒是 + V + 呀: giục một cách sốt ruột.',pair:'在 + V (đang)'}
   ]},

  {n:33,zh:'馒头',py:'mántou',pos:'Danh từ',vn:'màn thầu, bánh bao không nhân',hv:'man đầu',em:'🍞',lesson:1,
   explain:['Bánh hấp làm từ bột mì, không có nhân — món chính quen thuộc của người miền Bắc Trung Quốc.'],
   usage:'Lượng từ 个: 一个馒头. Có nhân thì gọi là 包子. Pinyin: tou đọc nhẹ.',
   collo:['一个馒头','吃馒头','蒸馒头'],
   ex_zh:'今后你们除了吃馒头，还可以再吃一些橡子。',ex_py:'Jīnhòu nǐmen chúle chī mántou, hái kěyǐ zài chī yìxiē xiàngzi.',ex_vn:'Từ nay ngoài ăn màn thầu, các con còn được ăn thêm ít hạt dẻ.',
   exList:[
     {zh:'今后你们除了吃馒头，还可以再吃一些橡子。',py:'Jīnhòu nǐmen chúle chī mántou, hái kěyǐ zài chī yìxiē xiàngzi.',vn:'Từ nay ngoài ăn màn thầu, các con còn được ăn thêm ít hạt dẻ.'},
     {zh:'北方人早饭常常吃馒头、喝粥。',py:'Běifāngrén zǎofàn chángcháng chī mántou, hē zhōu.',vn:'Người miền Bắc bữa sáng thường ăn màn thầu, uống cháo.'},
     {zh:'馒头是中国北方人常吃的主食。',py:'Mántou shì Zhōngguó běifāngrén cháng chī de zhǔshí.',vn:'Màn thầu là món chính người miền Bắc Trung Quốc hay ăn.'}
   ],
   colloFull:[
     {zh:'一个馒头',py:'yí ge mántou',vn:'một cái màn thầu'},
     {zh:'吃馒头',py:'chī mántou',vn:'ăn màn thầu'},
     {zh:'蒸馒头',py:'zhēng mántou',vn:'hấp màn thầu'},
     {zh:'馒头和包子',py:'mántou hé bāozi',vn:'màn thầu và bánh bao'}
   ],
   patterns:[{s:'一个 + 馒头',m:'Một cái màn thầu'},{s:'蒸 + 馒头',m:'Hấp màn thầu'}],
   checkList:[
     {promptLang:'vi',prompt:'Màn thầu bà nội hấp vừa to vừa mềm.',answer:'奶奶蒸的馒头又大又软。',answerPy:'Nǎinai zhēng de mántou yòu dà yòu ruǎn.',note:'Động từ đi với 馒头 là 蒸 (hấp).',pair:'又……又……'},
     {promptLang:'vi',prompt:'Sáng nay tôi dậy muộn, vừa ăn màn thầu vừa chạy đến trường.',answer:'今天早上我起晚了，一边吃馒头一边往学校跑。',answerPy:'Jīntiān zǎoshang wǒ qǐwǎn le, yìbiān chī mántou yìbiān wǎng xuéxiào pǎo.',note:'Hai hành động cùng lúc.',pair:'一边……一边……'}
   ]},

  {n:34,zh:'颗',py:'kē',pos:'Lượng từ',vn:'hạt, viên (vật nhỏ, tròn)',hv:'khoả',em:'🔵',lesson:1,
   explain:['Lượng từ cho vật nhỏ, tròn như hạt: hạt dẻ, quả nho, cái răng, ngôi sao, trái tim, viên kẹo.'],
   usage:'一颗 + 葡萄/牙齿/星星/心/糖. Hạt rất nhỏ như gạo thì dùng 粒 (lì).',
   collo:['一颗牙齿','一颗葡萄','一颗星星','一颗心'],
   ex_zh:'我早上给你们三颗，晚上给四颗。',ex_py:'Wǒ zǎoshang gěi nǐmen sān kē, wǎnshang gěi sì kē.',ex_vn:'Buổi sáng ta cho các con ba hạt, buổi tối cho bốn hạt.',
   exList:[
     {zh:'我早上给你们三颗，晚上给四颗。',py:'Wǒ zǎoshang gěi nǐmen sān kē, wǎnshang gěi sì kē.',vn:'Buổi sáng ta cho các con ba hạt, buổi tối cho bốn hạt.'},
     {zh:'小明昨天掉了一颗牙齿，这是他第一次换牙。',py:'Xiǎo Míng zuótiān diàole yì kē yáchǐ, zhè shì tā dì-yī cì huàn yá.',vn:'Hôm qua Tiểu Minh rụng một cái răng, đây là lần đầu tiên cậu bé thay răng.'},
     {zh:'她有一颗善良的心。',py:'Tā yǒu yì kē shànliáng de xīn.',vn:'Cô ấy có một trái tim nhân hậu.'}
   ],
   colloFull:[
     {zh:'一颗牙齿',py:'yì kē yáchǐ',vn:'một cái răng'},
     {zh:'一颗葡萄',py:'yì kē pútao',vn:'một quả nho'},
     {zh:'一颗星星',py:'yì kē xīngxing',vn:'một ngôi sao'},
     {zh:'一颗心',py:'yì kē xīn',vn:'một trái tim'},
     {zh:'三颗橡子',py:'sān kē xiàngzi',vn:'ba hạt dẻ'}
   ],
   patterns:[{s:'Số + 颗 + 牙齿 / 葡萄 / 星星 / 心',m:'Lượng từ cho vật nhỏ, tròn'},{s:'一颗 + Adj + 的心',m:'Một trái tim …'}],
   checkList:[
     {promptLang:'vi',prompt:'Em gái tôi một lúc ăn hết mười mấy quả nho.',answer:'我妹妹一下子吃了十几颗葡萄。',answerPy:'Wǒ mèimei yíxiàzi chīle shí jǐ kē pútao.',note:'Số + 颗 + 葡萄; 一下子 = trong chốc lát.',pair:'一下子 + V'},
     {promptLang:'vi',prompt:'Mẹ bỏ hai viên kẹo vào túi áo tôi.',answer:'妈妈把两颗糖放进了我的口袋里。',answerPy:'Māma bǎ liǎng kē táng fàngjìnle wǒ de kǒudai li.',note:'Kẹo viên cũng đếm bằng 颗.',pair:'把'}
   ]},

  {n:35,zh:'似乎',py:'sìhū',pos:'Phó từ',vn:'dường như, hình như',hv:'tự hồ',em:'🤔',lesson:1,
   explain:['Biểu thị phán đoán không chắc chắn: có vẻ như, dường như — văn viết hơn 好像.'],
   usage:'Đứng trước động từ/tính từ: 似乎明白了, 似乎不太高兴. Khác 好像: 似乎 KHÔNG đi với ……一样 để ví von (✗ 似乎亲姐妹一样 → ✓ 好像亲姐妹一样).',
   collo:['似乎明白了','似乎不太高兴','似乎行不通'],
   ex_zh:'猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏。',ex_py:'Hóuzimen sìhū zhǐ nòngdǒngle zhǔrén qiánmiàn shuō de yí ge “sān”, juéde zìjǐ chīle kuī.',ex_vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu, cho rằng mình bị thiệt.',
   exList:[
     {zh:'猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏。',py:'Hóuzimen sìhū zhǐ nòngdǒngle zhǔrén qiánmiàn shuō de yí ge “sān”, juéde zìjǐ chīle kuī.',vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu, cho rằng mình bị thiệt.'},
     {zh:'他最近心情不太好，事情似乎办得不太顺利。',py:'Tā zuìjìn xīnqíng bú tài hǎo, shìqing sìhū bàn de bú tài shùnlì.',vn:'Dạo này anh ấy tâm trạng không tốt lắm, công việc dường như làm không được suôn sẻ.'},
     {zh:'这个办法似乎行不通。',py:'Zhège bànfǎ sìhū xíng bu tōng.',vn:'Cách này dường như không ổn.'}
   ],
   colloFull:[
     {zh:'似乎明白了',py:'sìhū míngbai le',vn:'dường như đã hiểu'},
     {zh:'似乎不太高兴',py:'sìhū bú tài gāoxìng',vn:'có vẻ không vui lắm'},
     {zh:'似乎行不通',py:'sìhū xíng bu tōng',vn:'dường như không ổn'},
     {zh:'似乎是这样',py:'sìhū shì zhèyàng',vn:'hình như là vậy'}
   ],
   patterns:[{s:'Chủ ngữ + 似乎 + V / Adj',m:'Có vẻ như …'},{s:'✗ 似乎……一样 → ✓ 好像……一样',m:'Ví von thì dùng 好像'}],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy tuy đang cười nhưng dường như không vui lắm.',answer:'她虽然在笑，但是似乎不太高兴。',answerPy:'Tā suīrán zài xiào, dànshì sìhū bú tài gāoxìng.',note:'似乎 đứng trước cụm tính từ 不太高兴.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Trời càng lúc càng tối, hình như sắp mưa rồi.',answer:'天越来越黑，似乎要下雨了。',answerPy:'Tiān yuè lái yuè hēi, sìhū yào xià yǔ le.',note:'似乎 + 要……了: phán đoán sắp xảy ra.',pair:'越来越……'}
   ]},

  {n:36,zh:'吃亏',py:'chī kuī',pos:'Động từ (li hợp)',vn:'chịu thiệt, thiệt thòi',hv:'ngật khuy',em:'😣',lesson:1,
   explain:['Bị thiệt, bị mất phần lợi so với người khác.'],
   usage:'Động từ LI HỢP: chen thành phần vào giữa — 吃了亏, 吃了大亏, 吃过亏. Không mang tân ngữ (✗ 吃亏他). Tục ngữ: 吃亏是福 (chịu thiệt là phúc).',
   collo:['吃了亏','吃大亏','怕吃亏','吃亏是福'],
   ex_zh:'猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏。',ex_py:'Hóuzimen sìhū zhǐ nòngdǒngle zhǔrén qiánmiàn shuō de yí ge “sān”, juéde zìjǐ chīle kuī.',ex_vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu, cho rằng mình bị thiệt.',
   exList:[
     {zh:'猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏。',py:'Hóuzimen sìhū zhǐ nòngdǒngle zhǔrén qiánmiàn shuō de yí ge “sān”, juéde zìjǐ chīle kuī.',vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu, cho rằng mình bị thiệt.'},
     {zh:'我除了干自己的还得帮她？那我多吃亏啊！',py:'Wǒ chúle gàn zìjǐ de hái děi bāng tā? Nà wǒ duō chī kuī a!',vn:'Ngoài việc của mình tôi còn phải giúp cô ta à? Thế thì tôi thiệt quá!'},
     {zh:'你已经不错了，别老觉得自己好像吃了大亏似的！',py:'Nǐ yǐjīng búcuò le, bié lǎo juéde zìjǐ hǎoxiàng chīle dà kuī shìde!',vn:'Cậu đã tốt lắm rồi, đừng lúc nào cũng thấy như mình chịu thiệt lớn lắm vậy!'}
   ],
   colloFull:[
     {zh:'吃了亏',py:'chīle kuī',vn:'bị thiệt'},
     {zh:'吃大亏',py:'chī dà kuī',vn:'chịu thiệt lớn'},
     {zh:'怕吃亏',py:'pà chī kuī',vn:'sợ bị thiệt'},
     {zh:'吃亏是福',py:'chī kuī shì fú',vn:'chịu thiệt là phúc'},
     {zh:'吃过亏',py:'chīguo kuī',vn:'từng bị thiệt'}
   ],
   patterns:[{s:'吃 + 了 / 过 / 大 + 亏',m:'Động từ li hợp — chen thành phần vào giữa'},{s:'觉得自己吃了亏',m:'Cảm thấy mình bị thiệt'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy thật thà quá, đã chịu thiệt mấy lần rồi.',answer:'他太老实了，已经吃过好几次亏了。',answerPy:'Tā tài lǎoshi le, yǐjīng chīguo hǎo jǐ cì kuī le.',note:'Li hợp: 吃 + 过 + số lần + 亏.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Tuy lần này tôi bị thiệt một chút nhưng đã học được rất nhiều.',answer:'这次我虽然吃了点儿亏，但是学到了很多东西。',answerPy:'Zhè cì wǒ suīrán chīle diǎnr kuī, dànshì xuédàole hěn duō dōngxi.',note:'吃了点儿亏: 了 và 点儿 chen vào giữa.',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'方式',py:'fāngshì',pos:'Danh từ',vn:'phương thức, cách thức',hv:'phương thức',em:'🛠️',lesson:1,
   explain:['Cách, hình thức để làm một việc gì đó.'],
   usage:'Hay đi với 换(了)一种方式, 生活方式, 学习方式, 联系方式. Lượng từ 种.',
   collo:['换一种方式','生活方式','学习方式','联系方式'],
   ex_zh:'老人见猴子们不接受，就换了一种方式。',ex_py:'Lǎorén jiàn hóuzimen bù jiēshòu, jiù huànle yì zhǒng fāngshì.',ex_vn:'Ông lão thấy lũ khỉ không chịu, bèn đổi cách khác.',
   exList:[
     {zh:'老人见猴子们不接受，就换了一种方式。',py:'Lǎorén jiàn hóuzimen bù jiēshòu, jiù huànle yì zhǒng fāngshì.',vn:'Ông lão thấy lũ khỉ không chịu, bèn đổi cách khác.'},
     {zh:'每个人都有自己的学习方式。',py:'Měi ge rén dōu yǒu zìjǐ de xuéxí fāngshì.',vn:'Mỗi người đều có cách học của riêng mình.'},
     {zh:'请留下你的联系方式，我们会尽快通知你。',py:'Qǐng liúxià nǐ de liánxì fāngshì, wǒmen huì jǐnkuài tōngzhī nǐ.',vn:'Xin để lại thông tin liên lạc, chúng tôi sẽ báo cho bạn sớm nhất.'}
   ],
   colloFull:[
     {zh:'换一种方式',py:'huàn yì zhǒng fāngshì',vn:'đổi một cách khác'},
     {zh:'生活方式',py:'shēnghuó fāngshì',vn:'lối sống'},
     {zh:'学习方式',py:'xuéxí fāngshì',vn:'cách học'},
     {zh:'联系方式',py:'liánxì fāngshì',vn:'thông tin liên lạc'},
     {zh:'说话的方式',py:'shuōhuà de fāngshì',vn:'cách nói chuyện'}
   ],
   patterns:[{s:'换 + 一种 + 方式',m:'Đổi một cách khác'},{s:'生活 / 学习 / 联系 + 方式',m:'Lối sống / cách học / thông tin liên lạc'}],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cách này không được thì chúng ta đổi cách khác.',answer:'如果这个方式不行，我们就换一种方式。',answerPy:'Rúguǒ zhège fāngshì bù xíng, wǒmen jiù huàn yì zhǒng fāngshì.',note:'Lượng từ của 方式 là 种.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Lối sống của người trẻ càng ngày càng khác bố mẹ.',answer:'年轻人的生活方式跟父母越来越不一样了。',answerPy:'Niánqīngrén de shēnghuó fāngshì gēn fùmǔ yuè lái yuè bù yíyàng le.',note:'生活方式 = lối sống (không dịch "cách sống" thành 生活办法).',pair:'越来越……'}
   ]},

  {n:38,zh:'安慰',py:'ānwèi',pos:'Động từ',vn:'an ủi, dỗ dành',hv:'an uý',em:'🤗',lesson:1,
   explain:['Nói hoặc làm gì đó để người khác bớt buồn, bớt lo, bớt giận.'],
   usage:'安慰 + người: 安慰她, 安慰朋友; 安慰 + người + 说/道. Còn làm danh từ: 得到安慰, 一种安慰.',
   collo:['安慰朋友','安慰她说','轮流来安慰','得到安慰'],
   ex_zh:'她跟丈夫离婚后非常伤心，朋友们轮流来安慰她。',ex_py:'Tā gēn zhàngfu líhūn hòu fēicháng shāngxīn, péngyoumen lúnliú lái ānwèi tā.',ex_vn:'Cô ấy rất đau lòng sau khi ly hôn, bạn bè thay phiên nhau đến an ủi.',
   exList:[
     {zh:'她跟丈夫离婚后非常伤心，朋友们轮流来安慰她。',py:'Tā gēn zhàngfu líhūn hòu fēicháng shāngxīn, péngyoumen lúnliú lái ānwèi tā.',vn:'Cô ấy rất đau lòng sau khi ly hôn, bạn bè thay phiên nhau đến an ủi.'},
     {zh:'老人见猴子们不接受，就换了一种方式，安慰它们说道：“要不这样吧……”',py:'Lǎorén jiàn hóuzimen bù jiēshòu, jiù huànle yì zhǒng fāngshì, ānwèi tāmen shuōdào: “Yàobu zhèyàng ba……”',vn:'Ông lão thấy lũ khỉ không chịu, bèn đổi cách, dỗ dành chúng: “Hay là thế này nhé…”'},
     {zh:'考试没考好，妈妈安慰我说：“下次努力就好。”',py:'Kǎoshì méi kǎohǎo, māma ānwèi wǒ shuō: “Xià cì nǔlì jiù hǎo.”',vn:'Thi không tốt, mẹ an ủi tôi: “Lần sau cố gắng là được.”'}
   ],
   colloFull:[
     {zh:'安慰朋友',py:'ānwèi péngyou',vn:'an ủi bạn'},
     {zh:'安慰她说',py:'ānwèi tā shuō',vn:'an ủi cô ấy rằng'},
     {zh:'轮流来安慰',py:'lúnliú lái ānwèi',vn:'thay nhau đến an ủi'},
     {zh:'得到安慰',py:'dédào ānwèi',vn:'được an ủi'},
     {zh:'安慰自己',py:'ānwèi zìjǐ',vn:'tự an ủi mình'}
   ],
   patterns:[{s:'安慰 + người + 说：“……”',m:'An ủi ai rằng …'},{s:'得到 + 安慰',m:'Được an ủi'}],
   checkList:[
     {promptLang:'vi',prompt:'Vừa thấy bạn khóc, tôi liền đến an ủi bạn ấy.',answer:'我一看见朋友哭了，就过去安慰她。',answerPy:'Wǒ yí kànjiàn péngyou kū le, jiù guòqu ānwèi tā.',note:'安慰 mang tân ngữ chỉ người trực tiếp.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cô ấy được các bạn an ủi hồi lâu, tâm trạng mới khá lên một chút.',answer:'她被朋友们安慰了半天，心情才好了一些。',answerPy:'Tā bèi péngyoumen ānwèile bàntiān, xīnqíng cái hǎole yìxiē.',note:'Bị động: 被 + người + 安慰 + thời lượng.',pair:'被'}
   ]},

  {n:39,zh:'要不',py:'yàobu',pos:'Liên từ',vn:'nếu không thì; hay là',hv:'yếu bất',em:'🔀',lesson:1,
   explain:['Nếu không (như vậy) thì … — nêu kết quả khi điều ở trước không xảy ra (= 要不然).','Hay là … — đưa ra một lựa chọn khác, một đề nghị.'],
   usage:'Đứng ĐẦU vế sau, TRƯỚC chủ ngữ: ……，要不我不买. Dạng đầy đủ: 要不然. Khi đề nghị hay có 吧 cuối câu: 要不你明天再走吧.',
   collo:['要不这样吧','要不你明天再走吧','要不然'],
   ex_zh:'今天太晚了，要不你明天再走吧。',ex_py:'Jīntiān tài wǎn le, yàobu nǐ míngtiān zài zǒu ba.',ex_vn:'Hôm nay muộn quá rồi, hay là mai bạn hẵng đi.',
   exList:[
     {zh:'今天太晚了，要不你明天再走吧。',py:'Jīntiān tài wǎn le, yàobu nǐ míngtiān zài zǒu ba.',vn:'Hôm nay muộn quá rồi, hay là mai bạn hẵng đi.'},
     {zh:'老太太说：“4块，要不我不买。”',py:'Lǎotàitai shuō: “Sì kuài, yàobu wǒ bù mǎi.”',vn:'Bà cụ nói: “4 tệ, không thì tôi không mua.”'},
     {zh:'要不这样吧，既然你们觉得少，那就改成每天早上四颗，晚上三颗。',py:'Yàobu zhèyàng ba, jìrán nǐmen juéde shǎo, nà jiù gǎichéng měi tiān zǎoshang sì kē, wǎnshang sān kē.',vn:'Hay là thế này nhé, các con đã thấy ít thì đổi thành mỗi ngày sáng bốn hạt, tối ba hạt.'}
   ],
   colloFull:[
     {zh:'要不这样吧',py:'yàobu zhèyàng ba',vn:'hay là thế này nhé'},
     {zh:'要不你明天再走吧',py:'yàobu nǐ míngtiān zài zǒu ba',vn:'hay là mai bạn hẵng đi'},
     {zh:'要不然',py:'yàoburán',vn:'nếu không thì'},
     {zh:'快点儿走，要不就迟到了',py:'kuài diǎnr zǒu, yàobu jiù chídào le',vn:'đi nhanh lên, không thì muộn mất'}
   ],
   patterns:[{s:'……，要不(然) + kết quả',m:'…, nếu không thì …'},{s:'要不 + (你 / 我们) + V + 吧',m:'Hay là … đi (đề nghị)'}],
   checkList:[
     {promptLang:'vi',prompt:'Mau lên, không thì chúng ta sẽ muộn mất.',answer:'快点儿走，要不我们就迟到了。',answerPy:'Kuài diǎnr zǒu, yàobu wǒmen jiù chídào le.',note:'要不 đứng TRƯỚC chủ ngữ 我们 của vế sau.',pair:'就……了'},
     {promptLang:'vi',prompt:'Mưa to thế này, hay là chúng ta ở nhà xem phim đi.',answer:'雨下得这么大，要不我们在家看电影吧。',answerPy:'Yǔ xià de zhème dà, yàobu wǒmen zài jiā kàn diànyǐng ba.',note:'要不 + 吧: đưa ra đề nghị khác.',pair:'V + 得 + 这么 + Adj'}
   ]},

  {n:40,zh:'显得',py:'xiǎnde',pos:'Động từ',vn:'tỏ ra, trông có vẻ',hv:'hiển đắc',em:'✨',lesson:1,
   explain:['Biểu hiện ra bên ngoài một trạng thái nào đó, khiến người khác thấy như vậy.'],
   usage:'显得 + tính từ/cụm tính từ: 显得很健康, 显得格外高兴, 显得更加美丽. Chủ ngữ có thể là người hoặc vật.',
   collo:['显得很健康','显得格外高兴','显得更加美丽','显得年轻'],
   ex_zh:'猴子把主人前面说的一个“四”当成全天多得了的橡子，所以马上安静下来，显得格外开心。',ex_py:'Hóuzi bǎ zhǔrén qiánmiàn shuō de yí ge “sì” dàngchéng quán tiān duō déle de xiàngzi, suǒyǐ mǎshàng ānjìng xiàlái, xiǎnde géwài kāixīn.',ex_vn:'Lũ khỉ coi chữ “bốn” chủ nhân nói trước là số hạt dẻ cả ngày được thêm, nên lập tức im lặng, trông vô cùng vui vẻ.',
   exList:[
     {zh:'猴子把主人前面说的一个“四”当成全天多得了的橡子，所以马上安静下来，显得格外开心。',py:'Hóuzi bǎ zhǔrén qiánmiàn shuō de yí ge “sì” dàngchéng quán tiān duō déle de xiàngzi, suǒyǐ mǎshàng ānjìng xiàlái, xiǎnde géwài kāixīn.',vn:'Lũ khỉ coi chữ “bốn” chủ nhân nói trước là số hạt dẻ cả ngày được thêm, nên lập tức im lặng, trông vô cùng vui vẻ.'},
     {zh:'老王，今天你穿这件T恤显得格外年轻。',py:'Lǎo Wáng, jīntiān nǐ chuān zhè jiàn T xù xiǎnde géwài niánqīng.',vn:'Anh Vương, hôm nay anh mặc chiếc áo phông này trông trẻ hẳn ra.'},
     {zh:'下过雨以后，公园里的花显得更加美丽。',py:'Xiàguo yǔ yǐhòu, gōngyuán li de huā xiǎnde gèngjiā měilì.',vn:'Sau cơn mưa, hoa trong công viên trông càng đẹp hơn.'}
   ],
   colloFull:[
     {zh:'显得很健康',py:'xiǎnde hěn jiànkāng',vn:'trông rất khoẻ'},
     {zh:'显得格外高兴',py:'xiǎnde géwài gāoxìng',vn:'trông đặc biệt vui'},
     {zh:'显得更加美丽',py:'xiǎnde gèngjiā měilì',vn:'trông càng đẹp hơn'},
     {zh:'显得年轻',py:'xiǎnde niánqīng',vn:'trông trẻ'},
     {zh:'显得格外开心',py:'xiǎnde géwài kāixīn',vn:'trông vô cùng vui vẻ'}
   ],
   patterns:[{s:'显得 + (很 / 格外 / 更加) + Adj',m:'Trông có vẻ …'},{s:'穿 / 戴 + N + 显得 + Adj',m:'Mặc … trông …'}],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi bắt đầu chạy bộ, bố tôi trông càng ngày càng khoẻ.',answer:'自从开始跑步，我爸爸显得越来越健康了。',answerPy:'Zìcóng kāishǐ pǎobù, wǒ bàba xiǎnde yuè lái yuè jiànkāng le.',note:'显得 + cụm tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Được thầy khen xong, cô ấy trông vui hẳn lên.',answer:'被老师表扬以后，她显得格外高兴。',answerPy:'Bèi lǎoshī biǎoyáng yǐhòu, tā xiǎnde géwài gāoxìng.',note:'显得 + 格外 + Adj — hai từ mới đi cùng nhau.',pair:'被'}
   ]},

  {n:41,zh:'格外',py:'géwài',pos:'Phó từ',vn:'vô cùng, hết sức, đặc biệt (hơn thường)',hv:'cách ngoại',em:'🌟',lesson:1,
   explain:['Vượt hơn mức bình thường — thường so với lúc khác: hôm nay đặc biệt …'],
   usage:'格外 + tính từ/động từ tâm lý: 格外开心, 格外漂亮, 格外小心. Hàm ý "khác thường" nên hay đi với hoàn cảnh cụ thể (今天 / 过年的时候 / 下雨以后).',
   collo:['格外开心','格外高兴','格外小心','格外年轻'],
   ex_zh:'过年的时候，街上显得格外热闹。',ex_py:'Guònián de shíhou, jiē shang xiǎnde géwài rènao.',ex_vn:'Dịp Tết, phố xá trông đặc biệt náo nhiệt.',
   exList:[
     {zh:'过年的时候，街上显得格外热闹。',py:'Guònián de shíhou, jiē shang xiǎnde géwài rènao.',vn:'Dịp Tết, phố xá trông đặc biệt náo nhiệt.'},
     {zh:'下雪了，路很滑，开车要格外小心。',py:'Xià xuě le, lù hěn huá, kāichē yào géwài xiǎoxīn.',vn:'Tuyết rơi rồi, đường trơn, lái xe phải hết sức cẩn thận.'},
     {zh:'听说早上变成了四颗，猴子们显得格外开心。',py:'Tīngshuō zǎoshang biànchéngle sì kē, hóuzimen xiǎnde géwài kāixīn.',vn:'Nghe nói buổi sáng đổi thành bốn hạt, lũ khỉ trông vô cùng vui vẻ.'}
   ],
   colloFull:[
     {zh:'格外开心',py:'géwài kāixīn',vn:'vô cùng vui vẻ'},
     {zh:'格外高兴',py:'géwài gāoxìng',vn:'đặc biệt vui'},
     {zh:'格外小心',py:'géwài xiǎoxīn',vn:'hết sức cẩn thận'},
     {zh:'格外年轻',py:'géwài niánqīng',vn:'trẻ hẳn ra'},
     {zh:'格外美丽',py:'géwài měilì',vn:'đẹp lạ thường'}
   ],
   patterns:[{s:'格外 + Adj',m:'Đặc biệt …, hơn hẳn bình thường'},{s:'显得 + 格外 + Adj',m:'Trông đặc biệt …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay là sinh nhật mẹ nên cả nhà đều vui hẳn lên.',answer:'今天是妈妈的生日，所以全家人都格外高兴。',answerPy:'Jīntiān shì māma de shēngrì, suǒyǐ quán jiā rén dōu géwài gāoxìng.',note:'格外 có lý do cụ thể (sinh nhật) nên mới "hơn thường".',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Mưa vừa tạnh là không khí trong lành hẳn.',answer:'雨一停，空气就格外新鲜。',answerPy:'Yǔ yì tíng, kōngqì jiù géwài xīnxiān.',note:'格外 + tính từ, đứng sau 就.',pair:'一……就……'}
   ]},

  {n:42,zh:'情景',py:'qíngjǐng',pos:'Danh từ',vn:'tình cảnh, cảnh tượng',hv:'tình cảnh',em:'🎞️',lesson:1,
   explain:['Cảnh tượng, hoàn cảnh cụ thể ở một lúc nào đó — những gì nhìn thấy trước mắt.'],
   usage:'这情景, 当时的情景, 看到/想起 + ……的情景. Khác 情况 (tình hình — trừu tượng): 情景 là cảnh CỤ THỂ nhìn thấy được.',
   collo:['这情景','当时的情景','想起……的情景','看到这个情景'],
   ex_zh:'老人看着这情景，哈哈地笑了。',ex_py:'Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.',ex_vn:'Ông lão nhìn cảnh ấy, cười ha ha.',
   exList:[
     {zh:'老人看着这情景，哈哈地笑了。',py:'Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.',vn:'Ông lão nhìn cảnh ấy, cười ha ha.'},
     {zh:'我还记得第一次来中国时的情景。',py:'Wǒ hái jìde dì-yī cì lái Zhōngguó shí de qíngjǐng.',vn:'Tôi vẫn còn nhớ cảnh lần đầu tiên đến Trung Quốc.'},
     {zh:'一想起小时候跟爷爷钓鱼的情景，我就很想他。',py:'Yì xiǎngqǐ xiǎoshíhou gēn yéye diàoyú de qíngjǐng, wǒ jiù hěn xiǎng tā.',vn:'Hễ nhớ đến cảnh hồi nhỏ đi câu cá với ông, tôi lại rất nhớ ông.'}
   ],
   colloFull:[
     {zh:'这情景',py:'zhè qíngjǐng',vn:'cảnh này'},
     {zh:'当时的情景',py:'dāngshí de qíngjǐng',vn:'cảnh lúc đó'},
     {zh:'想起……的情景',py:'xiǎngqǐ……de qíngjǐng',vn:'nhớ lại cảnh …'},
     {zh:'看到这个情景',py:'kàndào zhège qíngjǐng',vn:'nhìn thấy cảnh này'},
     {zh:'第一次见面的情景',py:'dì-yī cì jiànmiàn de qíngjǐng',vn:'cảnh lần đầu gặp nhau'}
   ],
   patterns:[{s:'……时 / 的 + 情景',m:'Cảnh lúc …'},{s:'看到 / 想起 + ……的情景',m:'Thấy / nhớ lại cảnh …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhớ đến cảnh ngày khai giảng là tôi lại thấy rất vui.',answer:'一想起开学那天的情景，我就觉得很开心。',answerPy:'Yì xiǎngqǐ kāixué nà tiān de qíngjǐng, wǒ jiù juéde hěn kāixīn.',note:'想起 + ……的情景 — kết hợp rất hay gặp.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhìn thấy cảnh ấy, mọi người đều cảm động.',answer:'看到这个情景，大家都被感动了。',answerPy:'Kàndào zhège qíngjǐng, dàjiā dōu bèi gǎndòng le.',note:'情景 là cảnh cụ thể nhìn thấy được, nên đi với 看到.',pair:'被'}
   ]},

  {n:43,zh:'哈',py:'hā',pos:'Tượng thanh / Thán từ',vn:'ha ha (tiếng cười); a ha (đắc ý)',hv:'cáp',em:'😂',lesson:1,
   explain:['Từ tượng thanh: tiếng cười ha ha — thường lặp lại 哈哈.','Thán từ: biểu thị đắc ý, hài lòng — 哈，我猜对了！'],
   usage:'哈哈 + (地) + 笑 / 哈哈大笑. Thán từ đứng đầu câu: 哈，…….',
   collo:['哈哈地笑了','哈哈大笑','哈，我猜对了'],
   ex_zh:'老人看着这情景，哈哈地笑了。',ex_py:'Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.',ex_vn:'Ông lão nhìn cảnh ấy, cười ha ha.',
   exList:[
     {zh:'老人看着这情景，哈哈地笑了。',py:'Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.',vn:'Ông lão nhìn cảnh ấy, cười ha ha.'},
     {zh:'听完这个笑话，大家都哈哈大笑起来。',py:'Tīngwán zhège xiàohua, dàjiā dōu hāhā dà xiào qǐlái.',vn:'Nghe xong câu chuyện cười, mọi người đều cười phá lên ha ha.'},
     {zh:'哈，我终于找到钥匙了！',py:'Hā, wǒ zhōngyú zhǎodào yàoshi le!',vn:'A ha, cuối cùng tôi cũng tìm thấy chìa khoá rồi!'}
   ],
   colloFull:[
     {zh:'哈哈地笑了',py:'hāhā de xiào le',vn:'cười ha ha'},
     {zh:'哈哈大笑',py:'hāhā dà xiào',vn:'cười phá lên'},
     {zh:'哈，我猜对了',py:'hā, wǒ cāiduì le',vn:'a ha, tôi đoán đúng rồi'},
     {zh:'哈哈一笑',py:'hāhā yí xiào',vn:'cười xoà'}
   ],
   patterns:[{s:'哈哈 + (地) + 笑',m:'Cười ha ha'},{s:'哈，……！',m:'A ha, … (đắc ý)'}],
   checkList:[
     {promptLang:'vi',prompt:'A ha, tôi đoán đúng rồi nhé!',answer:'哈，我猜对了吧！',answerPy:'Hā, wǒ cāiduì le ba!',note:'哈 đứng đầu câu làm thán từ.',pair:'V + 对 (bổ ngữ kết quả)'},
     {promptLang:'vi',prompt:'Cậu ấy vừa nói xong, cả lớp liền cười phá lên.',answer:'他一说完，全班同学就哈哈大笑起来。',answerPy:'Tā yì shuōwán, quán bān tóngxué jiù hāhā dà xiào qǐlái.',note:'哈哈大笑 + 起来: bắt đầu cười phá lên.',pair:'一……就……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — một bài liền (file nghe 08-1 đọc liền cả bài), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 朝三暮四',
  preQuiz:[
    {q:'成语的结构有什么特点？',opts:['可以随便更改','很固定，不能随便更改','每个字都可以换'],ans:1},
    {q:'成语的意义是怎么表达出来的？',opts:['每个字意思的简单相加','只看第一个字的意思','综合起来表达一个完整的意思'],ans:2},
    {q:'“朝三暮四”跟“盲人摸象”有什么不同？',opts:['它的意义古今不同','它是一个新成语','它背后没有故事'],ans:0},
    {q:'老人喂养了一群什么动物？',opts:['狗','猪','猴子'],ans:2},
    {q:'相处久了，老人和猴子怎么样了？',opts:['彼此可以了解对方的意思','猴子都跑了','老人不想养了'],ans:0},
    {q:'老人为什么要限制猴子的食量？',opts:['猴子太胖了','家里财产不多，养不起','医生说猴子要减肥'],ans:1},
    {q:'得不到好的待遇时，猴子会怎么样？',opts:['仅仅只是叫叫','像调皮的孩子一样跟人淘气','安安静静地睡觉'],ans:1},
    {q:'老人的朋友送给他什么？',opts:['很多橡子','很多馒头','很多蔬菜'],ans:0},
    {q:'老人第一次说早上给几颗橡子？',opts:['四颗','七颗','三颗'],ans:2},
    {q:'猴子们听了第一个办法，为什么发脾气？',opts:['觉得自己吃了亏','不喜欢吃橡子','想吃更多馒头'],ans:0},
    {q:'老人第二次是怎么说的？',opts:['早上三颗，晚上四颗','早上四颗，晚上三颗','每天只给三颗'],ans:1},
    {q:'哲学家想用这个故事告诉人们什么？',opts:['要多喂养宠物','不要太关心生死、得失','猴子很聪明'],ans:1},
    {q:'“朝三暮四”现在的意思跟原来一样吗？',opts:['完全一样','差不多','已经完全改变了'],ans:2}
  ],
  lines:[
    {sp:0,zh:'成语是汉语中非常有特点的一部分词汇。成语有固定的结构，不能随便更改；意义是整体性的，不是每个字意思的简单相加，而是综合起来表达一个完整的意思。',
     py:'Chéngyǔ shì Hànyǔ zhōng fēicháng yǒu tèdiǎn de yí bùfen cíhuì. Chéngyǔ yǒu gùdìng de jiégòu, bù néng suíbiàn gēnggǎi; yìyì shì zhěngtǐxìng de, bú shì měi ge zì yìsi de jiǎndān xiāngjiā, ér shì zōnghé qǐlái biǎodá yí ge wánzhěng de yìsi.',
     vn:'Thành ngữ là một bộ phận từ vựng rất đặc sắc trong tiếng Hán. Thành ngữ có kết cấu cố định, không được tuỳ tiện sửa đổi; ý nghĩa mang tính chỉnh thể, không phải phép cộng đơn giản nghĩa của từng chữ, mà là tổng hợp lại để diễn đạt một ý hoàn chỉnh.'},
    {sp:0,zh:'一般来说，成语的意义也是稳定的，很少发生变化，比如我们学过的“盲人摸象”和“精诚所至，金石为开”。但也有古今不同的，像我们今天要学习的“朝三暮四”。',
     py:'Yìbān lái shuō, chéngyǔ de yìyì yě shì wěndìng de, hěn shǎo fāshēng biànhuà, bǐrú wǒmen xuéguo de “mángrén-mōxiàng” hé “jīngchéng suǒ zhì, jīnshí wèi kāi”. Dàn yě yǒu gǔ jīn bù tóng de, xiàng wǒmen jīntiān yào xuéxí de “zhāosān-mùsì”.',
     vn:'Nói chung, ý nghĩa của thành ngữ cũng ổn định, rất ít khi thay đổi, ví như “thầy bói xem voi” và “lòng thành đến đâu, vàng đá cũng mở” mà chúng ta đã học. Nhưng cũng có những thành ngữ xưa và nay khác nhau, như “triêu tam mộ tứ” (sáng ba chiều bốn) mà hôm nay chúng ta học.'},
    {sp:0,zh:'中国古代有一位哲学家，在他的书中讲了这样一个寓言故事：',
     py:'Zhōngguó gǔdài yǒu yí wèi zhéxuéjiā, zài tā de shū zhōng jiǎngle zhèyàng yí ge yùyán gùshi:',
     vn:'Thời cổ đại Trung Quốc có một nhà triết học, trong sách của mình ông kể một câu chuyện ngụ ngôn như sau:'},
    {sp:0,zh:'从前有位老人，喂养了一群猴子当宠物。相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',
     py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù. Xiāngchǔ jiǔ le, bǐcǐ jūrán kěyǐ cóng biǎoqíng, shēngyīn hé xíngwéi jǔzhǐ zhōng liǎojiě duìfāng de yìsi.',
     vn:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng. Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ hành vi.'},
    {sp:0,zh:'猴子太多，每天要吃大量的瓜果、蔬菜和粮食。然而，一个普通的家庭，财产不多，哪有那么大的财力满足一群猴子对食物的长期需要呢？老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。他注意到该限制猴子的食量了。',
     py:'Hóuzi tài duō, měi tiān yào chī dàliàng de guāguǒ, shūcài hé liángshi. Rán\'ér, yí ge pǔtōng de jiātíng, cáichǎn bù duō, nǎ yǒu nàme dà de cáilì mǎnzú yì qún hóuzi duì shíwù de chángqī xūyào ne? Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi, hǎo jiéshěng xiē shíwù ná qù wèiyǎng hóuzi. Tā zhùyì dào gāi xiànzhì hóuzi de shíliàng le.',
     vn:'Khỉ nhiều quá, mỗi ngày phải ăn một lượng lớn dưa quả, rau củ và lương thực. Thế nhưng một gia đình bình thường, của cải chẳng bao nhiêu, lấy đâu ra nhiều tiền của đến thế để đáp ứng nhu cầu thức ăn lâu dài của cả một bầy khỉ? Ông lão thậm chí phải giảm chi tiêu của người nhà để dành dụm chút thức ăn đem nuôi khỉ. Ông nhận ra đã đến lúc phải hạn chế khẩu phần ăn của lũ khỉ.'},
    {sp:0,zh:'问题是，猴子不像猪、狗，吃不饱时仅仅只是叫叫，它们如果得不到好的待遇，就会像一群调皮的孩子，经常跟人淘气。',
     py:'Wèntí shì, hóuzi bú xiàng zhū, gǒu, chī bu bǎo shí jǐnjǐn zhǐshì jiàojiao, tāmen rúguǒ dé bu dào hǎo de dàiyù, jiù huì xiàng yì qún tiáopí de háizi, jīngcháng gēn rén táoqì.',
     vn:'Vấn đề là, khỉ không giống heo, chó — ăn không no thì chỉ kêu vài tiếng; nếu không được đối xử tử tế, chúng sẽ như một đám trẻ nghịch ngợm, thường xuyên quậy phá người ta.'},
    {sp:0,zh:'老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。在其他粮食不足的情况下，用橡子喂猴子倒是个办法。于是老人对猴子们说：“今后你们除了吃馒头，还可以再吃一些橡子。我早上给你们三颗，晚上给四颗。”',
     py:'Lǎorén de péngyou sòng gěi tā hěn duō xiàngzi, zhè shì yì zhǒng hóuzi ài chī de guǒshí. Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ. Yúshì lǎorén duì hóuzimen shuō: “Jīnhòu nǐmen chúle chī mántou, hái kěyǐ zài chī yìxiē xiàngzi. Wǒ zǎoshang gěi nǐmen sān kē, wǎnshang gěi sì kē.”',
     vn:'Bạn của ông lão tặng ông rất nhiều hạt dẻ (quả sồi), đó là một loại quả khỉ rất thích ăn. Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay. Thế là ông lão nói với lũ khỉ: “Từ nay ngoài ăn màn thầu, các con còn được ăn thêm ít hạt dẻ. Buổi sáng ta cho các con ba hạt, buổi tối cho bốn hạt.”'},
    {sp:0,zh:'猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏，一个个立起身子跳来跳去，对着老人大喊大叫地发脾气。',
     py:'Hóuzimen sìhū zhǐ nòngdǒngle zhǔrén qiánmiàn shuō de yí ge “sān”, juéde zìjǐ chīle kuī, yí gègè lìqǐ shēnzi tiào lái tiào qù, duìzhe lǎorén dà hǎn dà jiào de fā píqi.',
     vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu, cho rằng mình bị thiệt, con nào con nấy đứng thẳng người nhảy qua nhảy lại, la hét ầm ĩ nổi giận với ông lão.'},
    {sp:0,zh:'老人见猴子们不接受，就换了一种方式，安慰它们说道：“要不这样吧，既然你们觉得少，那就改成每天早上四颗，晚上三颗，这样总够了吧？”',
     py:'Lǎorén jiàn hóuzimen bù jiēshòu, jiù huànle yì zhǒng fāngshì, ānwèi tāmen shuōdào: “Yàobu zhèyàng ba, jìrán nǐmen juéde shǎo, nà jiù gǎichéng měi tiān zǎoshang sì kē, wǎnshang sān kē, zhèyàng zǒng gòu le ba?”',
     vn:'Ông lão thấy lũ khỉ không chịu, bèn đổi cách nói, dỗ dành chúng: “Hay là thế này nhé, các con đã thấy ít thì đổi thành mỗi ngày sáng bốn hạt, tối ba hạt, thế này chắc là đủ rồi chứ?”'},
    {sp:0,zh:'猴子把主人前面说的一个“四”当成全天多得了的橡子，所以马上安静下来，显得格外开心。老人看着这情景，哈哈地笑了。',
     py:'Hóuzi bǎ zhǔrén qiánmiàn shuō de yí ge “sì” dàngchéng quán tiān duō déle de xiàngzi, suǒyǐ mǎshàng ānjìng xiàlái, xiǎnde géwài kāixīn. Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.',
     vn:'Lũ khỉ coi chữ “bốn” chủ nhân nói trước là số hạt dẻ cả ngày được thêm, nên lập tức im lặng, trông vô cùng vui vẻ. Ông lão nhìn cảnh ấy, cười ha ha.'},
    {sp:0,zh:'哲学家用这个故事告诉人们，不要太关心生死、得失，因为到最后我们会发现没有失去什么，也没有得到什么。不过，发展到今天，“朝三暮四”这个成语的意义已经完全改变了。你知道它现在是什么意思吗？',
     py:'Zhéxuéjiā yòng zhège gùshi gàosu rénmen, bú yào tài guānxīn shēngsǐ, déshī, yīnwèi dào zuìhòu wǒmen huì fāxiàn méiyǒu shīqù shénme, yě méiyǒu dédào shénme. Búguò, fāzhǎn dào jīntiān, “zhāosān-mùsì” zhège chéngyǔ de yìyì yǐjīng wánquán gǎibiàn le. Nǐ zhīdào tā xiànzài shì shénme yìsi ma?',
     vn:'Nhà triết học dùng câu chuyện này để nói với mọi người: đừng quá bận tâm chuyện sống chết, được mất, vì đến cuối cùng ta sẽ thấy mình chẳng mất gì, cũng chẳng được gì. Tuy nhiên, đến ngày nay, ý nghĩa của thành ngữ “triêu tam mộ tứ” đã thay đổi hoàn toàn. Bạn có biết bây giờ nó nghĩa là gì không?'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析
// Cặp 彼此—互相 lấy đúng bảng + 做一做 của sách (tr. 80); hai cặp sau tự thêm.
// ══════════════════════════════════════════
var synonymData = [
  {pair:'彼此 — 互相',
   same:'Đều có nghĩa "hai bên cùng làm một hành động giống nhau" — lẫn nhau.',
   sameEx:{zh:'我们彼此／互相都很了解对方。',vn:'Chúng tôi đều rất hiểu nhau.'},
   items:[
     {word:'彼此',points:[
       'Là ĐẠI TỪ: đứng trước động từ làm CHỦ NGỮ được.',
       'Làm được TÂN NGỮ (不分彼此) và ĐỊNH NGỮ (彼此的爱好).',
       'Lặp lại được: 彼此彼此 — hai bên chẳng hơn kém nhau.'
     ],ex:[{zh:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',vn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
          {zh:'我们是最好的朋友，不分彼此。',vn:'Chúng tôi là bạn thân nhất, chẳng phân biệt của anh của tôi.'},
          {zh:'咱们俩彼此彼此，我画得比你好不了多少。',vn:'Hai đứa mình chẳng hơn gì nhau, tớ vẽ cũng không đẹp hơn cậu là bao.'}]},
     {word:'互相',points:[
       'Là PHÓ TỪ: chỉ đứng trước động từ, phía trước phải có CHỦ NGỮ.',
       'KHÔNG làm tân ngữ, định ngữ (✗ 不分互相, ✗ 互相的爱好).',
       'KHÔNG lặp lại được.'
     ],ex:[{zh:'好朋友应该互相帮助。',vn:'Bạn tốt nên giúp đỡ lẫn nhau.'}]}
   ],
   quiz:[
     {sentence:'你们是姐妹，应该＿＿照顾。',options:['彼此','互相'],answer:1,both:true,
      why:'Đứng trước động từ 照顾 và đã có chủ ngữ 你们 — cả hai đều dùng được (sách đánh dấu sẵn ✓✓).'},
     {sentence:'对同一个问题，＿＿的认识不同，是很正常的事情。',options:['彼此','互相'],answer:0,
      why:'Làm ĐỊNH NGỮ (……的认识) → chỉ 彼此. 互相 là phó từ, không đứng trước 的.'},
     {sentence:'我们是夫妻，各自除了孝顺自己的父母，也应该孝顺＿＿的父母。',options:['彼此','互相'],answer:0,
      why:'……的父母 — lại là định ngữ → chỉ 彼此.'},
     {sentence:'我们是最好的朋友，不分＿＿。',options:['彼此','互相'],answer:0,
      why:'Làm TÂN NGỮ của 分 → chỉ 彼此. 互相 không làm tân ngữ.'}
   ],
   sgk:{
     chung:{t:'都有表示双方有同样行为的意思。',vn:'Đều có nghĩa hai bên cùng có một hành động giống nhau.',vd:'我们彼此／互相都很了解对方。',vdVn:'Chúng tôi đều rất hiểu nhau.'},
     khac:[
       {a:{t:'代词，可以用在动词前做主语。',vn:'Đại từ, đứng trước động từ làm chủ ngữ được.',vd:'相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。',vdVn:'Sống cùng nhau lâu ngày, hai bên không ngờ có thể hiểu ý nhau qua nét mặt, giọng nói và cử chỉ.'},
        b:{t:'副词，用在动词前时前面还需要加主语。',vn:'Phó từ, đứng trước động từ thì phía trước còn phải có chủ ngữ.',vd:'好朋友应该互相帮助。',vdVn:'Bạn tốt nên giúp đỡ lẫn nhau.'}},
       {a:{t:'还可做宾语、定语。',vn:'Còn làm được tân ngữ, định ngữ.',vd:'我们是最好的朋友，不分彼此。（宾语）／我们彼此的爱好相同。（定语）',vdVn:'Chúng tôi là bạn thân nhất, chẳng phân biệt anh tôi. (tân ngữ) / Sở thích của hai chúng tôi giống nhau. (định ngữ)'},
        b:{t:'不能做宾语、定语。',vn:'Không làm được tân ngữ, định ngữ.'}},
       {a:{t:'可以重叠，表示双方差不多。',vn:'Lặp lại được, biểu thị hai bên ngang nhau.',vd:'咱们俩彼此彼此，我画得比你好不了多少。',vdVn:'Hai đứa mình chẳng hơn gì nhau, tớ vẽ cũng không đẹp hơn cậu là bao.'},
        b:{t:'不能重叠。',vn:'Không lặp lại được.'}}
     ],
     lamThu:[
       {s:'你们是姐妹，应该＿＿照顾。',dap:[true,true],mau:true,
        giai:'Trước động từ, đã có chủ ngữ 你们 — cả hai đều dùng được.'},
       {s:'对同一个问题，＿＿的认识不同，是很正常的事情。',dap:[true,false],
        giai:'Làm định ngữ (……的认识) → chỉ 彼此.'},
       {s:'我们是夫妻，各自除了孝顺自己的父母，也应该孝顺＿＿的父母。',dap:[true,false],
        giai:'Làm định ngữ (……的父母) → chỉ 彼此.'},
       {s:'现在是我们公司最困难的时候，大家应该＿＿支持，＿＿帮助。',dap:[true,true],
        giai:'Đứng trước động từ 支持 / 帮助, đã có chủ ngữ 大家 — cả hai đều được (互相 phổ biến hơn).'}
     ]
   }},

  {pair:'似乎 — 好像',
   same:'Đều là phó từ, biểu thị phán đoán không chắc chắn: "hình như, dường như".',
   sameEx:{zh:'这个办法似乎／好像行不通。',vn:'Cách này hình như không ổn.'},
   items:[
     {word:'似乎',points:[
       'Thiên về VĂN VIẾT.',
       'KHÔNG đi với ……一样 / ……似的 để so sánh ví von.'
     ],ex:[{zh:'猴子们似乎只弄懂了主人前面说的一个“三”。',vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba” chủ nhân nói lúc đầu.'}]},
     {word:'好像',points:[
       'Dùng nhiều trong KHẨU NGỮ.',
       'Còn là ĐỘNG TỪ "giống như": đi với ……一样 / ……似的 để ví von.'
     ],ex:[{zh:'这两个女孩儿关系非常好，好像亲姐妹一样。',vn:'Hai cô gái thân nhau lắm, cứ như chị em ruột vậy.'}]}
   ],
   quiz:[
     {sentence:'这两个女孩儿关系非常好，＿＿亲姐妹一样。',options:['似乎','好像'],answer:1,
      why:'Có ……一样 để ví von → chỉ 好像. 似乎 không kết hợp với 一样.'},
     {sentence:'他最近心情不太好，事情＿＿办得不太顺利。',options:['似乎','好像'],answer:0,both:true,
      why:'Phán đoán không chắc chắn — cả hai đều được; 似乎 hợp văn viết hơn.'},
     {sentence:'他跑得飞快，＿＿一阵风似的。',options:['似乎','好像'],answer:1,
      why:'Ví von với ……似的 → 好像.'},
     {sentence:'文章中说，古今词义的变化＿＿比我们想的要大。',options:['似乎','好像'],answer:0,both:true,
      why:'Câu văn viết, nêu phán đoán → 似乎 hợp hơn; 好像 cũng không sai nhưng khẩu ngữ hơn.'}
   ]},

  {pair:'调皮 — 淘气',
   same:'Đều là tính từ, nghĩa "nghịch ngợm, không nghe lời", hay dùng cho trẻ em và con vật.',
   sameEx:{zh:'我儿子真是太调皮／淘气了！',vn:'Con trai tôi đúng là nghịch quá!'},
   items:[
     {word:'调皮',points:[
       'Có thể mang nghĩa TINH NGHỊCH, dí dỏm, đáng yêu — dùng được cho cả người lớn.',
       'Làm trạng ngữ được: 调皮地笑 / 调皮地眨眼.'
     ],ex:[{zh:'她调皮地眨了眨眼睛。',vn:'Cô ấy tinh nghịch nháy mắt.'}]},
     {word:'淘气',points:[
       'Thiên về QUẬY PHÁ, gây phiền cho người khác; chủ yếu dùng cho trẻ con.',
       'Có cách nói 跟人淘气 (quậy người ta), 淘气包 (đứa trẻ nghịch như quỷ).'
     ],ex:[{zh:'它们……就会像一群调皮的孩子，经常跟人淘气。',vn:'Chúng … sẽ như một đám trẻ nghịch ngợm, thường xuyên quậy phá người ta.'}]}
   ],
   quiz:[
     {sentence:'老师讲完笑话，＿＿地向大家眨了眨眼睛。',options:['调皮','淘气'],answer:0,
      why:'Tả vẻ tinh nghịch, dí dỏm của người lớn, làm trạng ngữ → 调皮.'},
     {sentence:'猴子得不到好的待遇，就会经常跟人＿＿。',options:['调皮','淘气'],answer:1,
      why:'Cụm cố định 跟人淘气 (quậy phá người ta) → 淘气.'},
     {sentence:'小孩子嘛，多少都有点儿＿＿。',options:['调皮','淘气'],answer:1,both:true,
      why:'Nói trẻ con nghịch — cả hai đều được.'},
     {sentence:'这孩子是个有名的＿＿包，整天不闲着。',options:['调皮','淘气'],answer:1,
      why:'Từ cố định 淘气包 (đứa trẻ nghịch như quỷ) → 淘气.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'固定',hv:'cố định',vn:'cố định',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'结构',hv:'kết cấu',vn:'kết cấu, cấu trúc',note:'Trùng khít.'},
    {zh:'综合',hv:'tổng hợp',vn:'tổng hợp',note:'Trùng khít.'},
    {zh:'完整',hv:'hoàn chỉnh',vn:'hoàn chỉnh',note:'Trùng khít.'},
    {zh:'寓言',hv:'ngụ ngôn',vn:'truyện ngụ ngôn',note:'Trùng khít.'},
    {zh:'行为',hv:'hành vi',vn:'hành vi',note:'Trùng khít.'},
    {zh:'对方',hv:'đối phương',vn:'phía bên kia',note:'Tiếng Việt "đối phương" hay hiểu là kẻ địch; tiếng Trung dùng rộng hơn: người kia trong tình bạn, hôn nhân, cuộc gọi.'},
    {zh:'粮食',hv:'lương thực',vn:'lương thực',note:'Trùng khít.'},
    {zh:'家庭',hv:'gia đình',vn:'gia đình',note:'Trùng khít.'},
    {zh:'财产',hv:'tài sản',vn:'tài sản',note:'Trùng khít.'},
    {zh:'限制',hv:'hạn chế',vn:'hạn chế',note:'Trùng khít.'},
    {zh:'方式',hv:'phương thức',vn:'cách thức',note:'Trùng khít.'},
    {zh:'安慰',hv:'an uý',vn:'an ủi',note:'"An uý" chính là gốc của từ "an ủi".'},
    {zh:'整体',hv:'chỉnh thể',vn:'tổng thể, toàn thể',note:'"Chỉnh" = trọn, "thể" = khối → một khối trọn vẹn.'},
    {zh:'哲学家',hv:'triết học gia',vn:'nhà triết học',note:'"Gia" = nhà (như 作家 tác gia, 科学家 khoa học gia).'}
  ],
  idiom:[
    {zh:'朝三暮四',hv:'triêu tam mộ tứ',vn:'sáng ba chiều bốn — hay thay đổi',note:'Tiếng Việt cũng dùng "triêu tam mộ tứ", "sớm ba chiều bốn" với nghĩa NGÀY NAY: thay đổi thất thường.'},
    {zh:'盲人摸象',hv:'manh nhân mô tượng',vn:'thầy bói xem voi',note:'Tiếng Việt nói "thầy bói xem voi" — chỉ thấy một phần mà tưởng là toàn bộ.'},
    {zh:'精诚所至，金石为开',hv:'tinh thành sở chí, kim thạch vi khai',vn:'lòng thành đến đâu, vàng đá cũng mở',note:'Gần với "có công mài sắt, có ngày nên kim".'}
  ],
  trap:[
    {zh:'表情',hv:'biểu tình',vn:'nét mặt, vẻ mặt',
     warn:'BẪY: "biểu tình" tiếng Việt là tuần hành phản đối. 表情 tiếng Trung chỉ là NÉT MẶT (và emoji khi nhắn tin).'},
    {zh:'消费',hv:'tiêu phí',vn:'tiêu dùng, chi tiêu',
     warn:'BẪY: "tiêu phí" tiếng Việt là phung phí. 消费 trung tính = tiêu dùng, chi tiêu. "Lãng phí" phải là 浪费.'},
    {zh:'节省',hv:'tiết tỉnh',vn:'tiết kiệm',
     warn:'省 ở đây đọc shěng = bớt, tiết kiệm — không liên quan đến "tỉnh" (đơn vị hành chính). Đừng nhầm với 节约 (jiéyuē) cũng là tiết kiệm.'},
    {zh:'吃亏',hv:'ngật khuy',vn:'chịu thiệt',
     warn:'Không liên quan gì đến ăn uống: 吃 ở đây là "chịu, gánh". Tương tự 吃苦 (chịu khổ), 吃惊 (giật mình).'},
    {zh:'相处',hv:'tương xử',vn:'chung sống, cư xử với nhau',
     warn:'"Xử" ở đây là "ở, sống" (như 处 trong 相处), không phải "xử lý" hay "xét xử".'},
    {zh:'显得',hv:'hiển đắc',vn:'trông có vẻ',
     warn:'Âm Hán–Việt không gợi nghĩa. Nhớ: 显 = hiện ra → 显得 + tính từ = "trông có vẻ …".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy theo bảng 词语搭配 của giáo trình (tr. 79) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'限制',right:'年龄'},
  {left:'显得',right:'格外高兴'},
  {left:'固定的',right:'座位'},
  {left:'消费',right:'群体'},
  {left:'完整地',right:'叙述'},
  {left:'跟家人',right:'相处'},
  {left:'节省',right:'时间'},
  {left:'一群',right:'猴子'},
  {left:'一颗',right:'牙齿'},
  {left:'喂养',right:'宠物'},
  {left:'安慰',right:'朋友'},
  {left:'换一种',right:'方式'},
  {left:'粮食',right:'不足'},
  {left:'不分',right:'彼此'},
  {left:'调皮地',right:'眨眼睛'},
  {left:'劳动的',right:'果实'},
  {left:'寓言',right:'故事'},
  {left:'脸上的',right:'表情'},
  {left:'吃了',right:'大亏'},
  {left:'哈哈',right:'大笑'},
  {left:'不文明的',right:'行为'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'学习不能',blank:'朝三暮四',post:'，今天学画画儿，明天学钢琴，最后什么都学不好。',hint:'(sáng ba chiều bốn — thay đổi thất thường)',ans:'朝三暮四'},
  {pre:'多看书能帮助我们积累',blank:'词汇',post:'，写作文的时候就容易多了。',hint:'(từ vựng)',ans:'词汇'},
  {pre:'这种产品有',blank:'固定',post:'的消费群体。',hint:'(cố định)',ans:'固定'},
  {pre:'写作文以前，先想好文章的',blank:'结构',post:'。',hint:'(kết cấu, bố cục)',ans:'结构'},
  {pre:'这篇文章',blank:'整体',post:'上写得不错，有些小地方还要再改改。',hint:'(tổng thể)',ans:'整体'},
  {pre:'老师',blank:'综合',post:'了大家的意见，决定周五去参观博物馆。',hint:'(tổng hợp)',ans:'综合'},
  {pre:'请你把昨晚的经历',blank:'完整',post:'地叙述一遍。',hint:'(trọn vẹn)',ans:'完整'},
  {pre:'中国古代有一位',blank:'哲学家',post:'，在他的书中讲了一个寓言故事。',hint:'(nhà triết học)',ans:'哲学家'},
  {pre:'小时候，奶奶常常给我讲',blank:'寓言',post:'故事。',hint:'(ngụ ngôn)',ans:'寓言'},
  {pre:'从前有位老人，',blank:'喂养',post:'了一群猴子当宠物。',hint:'(nuôi)',ans:'喂养'},
  {pre:'聚在电台门口的那',blank:'群',post:'人是干什么的？',hint:'(lượng từ: đám, nhóm)',ans:'群'},
  {pre:'现在很多年轻人喜欢养',blank:'宠物',post:'，把猫狗当成家人。',hint:'(thú cưng)',ans:'宠物'},
  {pre:'他性格很好，跟同学们',blank:'相处',post:'得很好。',hint:'(chung sống, cư xử)',ans:'相处'},
  {pre:'我们是最好的朋友，不分',blank:'彼此',post:'。',hint:'(hai bên — làm tân ngữ)',ans:'彼此'},
  {pre:'你不能每顿饭光吃肉，还得多吃',blank:'蔬菜',post:'。',hint:'(rau)',ans:'蔬菜'},
  {pre:'一个普通的',blank:'家庭',post:'，财产不多，哪有那么大的财力养一群猴子呢？',hint:'(gia đình)',ans:'家庭'},
  {pre:'年轻人的',blank:'消费',post:'习惯和父母很不一样。',hint:'(chi tiêu)',ans:'消费'},
  {pre:'坐地铁上班可以',blank:'节省',post:'很多时间。',hint:'(tiết kiệm)',ans:'节省'},
  {pre:'这次的作文不',blank:'限制',post:'字数，你可以想写多少就写多少。',hint:'(giới hạn)',ans:'限制'},
  {pre:'小孩子嘛，多少都有点儿',blank:'淘气',post:'。',hint:'(nghịch ngợm)',ans:'淘气'},
  {pre:'他输了这场比赛不是因为能力不够，而是因为准备',blank:'不足',post:'。',hint:'(không đủ)',ans:'不足'},
  {pre:'这件衣服质量',blank:'倒',post:'是挺好，就是价格太贵了。',hint:'(… thì … đấy — nhượng bộ)',ans:'倒'},
  {pre:'小明昨天掉了一',blank:'颗',post:'牙齿，这是他第一次换牙。',hint:'(lượng từ cho vật nhỏ tròn)',ans:'颗'},
  {pre:'他最近心情不太好，事情',blank:'似乎',post:'办得不太顺利。',hint:'(dường như — văn viết)',ans:'似乎'},
  {pre:'他太老实了，跟人做生意常常',blank:'吃亏',post:'。',hint:'(chịu thiệt)',ans:'吃亏'},
  {pre:'老人见猴子们不接受，就换了一种',blank:'方式',post:'。',hint:'(cách thức)',ans:'方式'},
  {pre:'她跟丈夫离婚后非常伤心，朋友们轮流来',blank:'安慰',post:'她。',hint:'(an ủi)',ans:'安慰'},
  {pre:'今天太晚了，',blank:'要不',post:'你明天再走吧。',hint:'(hay là)',ans:'要不'},
  {pre:'老王今天穿这件T恤',blank:'显得',post:'格外年轻。',hint:'(trông có vẻ)',ans:'显得'},
  {pre:'下雪了，路很滑，开车要',blank:'格外',post:'小心。',hint:'(hết sức, đặc biệt)',ans:'格外'},
  {pre:'我还记得第一次来中国时的',blank:'情景',post:'。',hint:'(cảnh tượng)',ans:'情景'},
  {pre:'吃多少拿多少，千万别浪费',blank:'粮食',post:'。',hint:'(lương thực)',ans:'粮食'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (倒 · ……来……去 · 要不) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['用橡子','喂猴子','倒是','个办法','。'],ans:'用橡子喂猴子倒是个办法。',audio:'用橡子喂猴子倒是个办法。'},
  {words:['这件衣服','质量','倒是','挺好','，','就是','太贵了','。'],ans:'这件衣服质量倒是挺好，就是太贵了。',audio:'这件衣服质量倒是挺好，就是太贵了。'},
  {words:['你','倒是','说','句话','呀','！'],ans:'你倒是说句话呀！',audio:'你倒是说句话呀！'},
  {words:['他们','研究来','讨论去','，','还是','没找出','原因','。'],ans:'他们研究来讨论去，还是没找出原因。',audio:'他们研究来讨论去，还是没找出原因。'},
  {words:['猴子们','一个个','立起身子','跳来跳去','。'],ans:'猴子们一个个立起身子跳来跳去。',audio:'猴子们一个个立起身子跳来跳去。'},
  {words:['他的手机不见了','，','急得','在房间里','走来走去','。'],ans:'他的手机不见了，急得在房间里走来走去。',audio:'他的手机不见了，急得在房间里走来走去。'},
  {words:['4块','，','要不','我','不买','。'],ans:'4块，要不我不买。',audio:'4块，要不我不买。'},
  {words:['今天太晚了','，','要不','你明天','再走吧','。'],ans:'今天太晚了，要不你明天再走吧。',audio:'今天太晚了，要不你明天再走吧。'},
  {words:['快点儿走','，','要不','就','迟到了','。'],ans:'快点儿走，要不就迟到了。',audio:'快点儿走，要不就迟到了。'},
  {words:['老人','喂养了','一群猴子','当','宠物','。'],ans:'老人喂养了一群猴子当宠物。',audio:'老人喂养了一群猴子当宠物。'},
  {words:['猴子们','马上','安静下来','，','显得','格外','开心','。'],ans:'猴子们马上安静下来，显得格外开心。',audio:'猴子们马上安静下来，显得格外开心。'},
  {words:['老人','把','节省下来的','粮食','拿去','喂养猴子','。'],ans:'老人把节省下来的粮食拿去喂养猴子。',audio:'老人把节省下来的粮食拿去喂养猴子。'},
  {words:['这次的作文','不','限制','字数','。'],ans:'这次的作文不限制字数。',audio:'这次的作文不限制字数。'},
  {words:['猴子们','似乎','觉得自己','吃了亏','。'],ans:'猴子们似乎觉得自己吃了亏。',audio:'猴子们似乎觉得自己吃了亏。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'动物园里的____最受孩子们欢迎，它们会爬树，还会学人的动作。',opts:['猪','猴子','馒头','橡子'],ans:1,
   exp:'Con vật biết leo cây, bắt chước người → 猴子 (con khỉ). 猪 (heo) không leo cây; 馒头 (màn thầu) và 橡子 (hạt dẻ) là đồ ăn, không phải con vật.'},
  {wrong:'看他脸上的____，我就知道他考得不错。',opts:['表情','行为','情景','方式'],ans:0,
   exp:'Cái hiện trên mặt → 表情 (nét mặt). 行为 là hành vi, việc làm; 情景 là cảnh tượng trước mắt; 方式 là cách thức — đều không "ở trên mặt".'},
  {wrong:'在公共场所大声打电话是一种不文明的____。',opts:['表情','情景','行为','对方'],ans:2,
   exp:'Đánh giá việc làm của con người (văn minh / không văn minh) → 行为. 表情 là nét mặt; 情景 là cảnh tượng; 对方 là người phía bên kia.'},
  {wrong:'夫妻之间应该学会尊重____。',opts:['对方','互相','一起','方式'],ans:0,
   exp:'Cần một TÂN NGỮ chỉ người sau 尊重 → 对方 (người kia). 互相 là phó từ, phải đứng trước động từ (互相尊重), không làm tân ngữ; 一起 cũng là phó từ; 方式 không hợp nghĩa.'},
  {wrong:'老人把全部____都捐给了学校。',opts:['果实','财产','消费','家庭'],ans:1,
   exp:'Của cải, tiền bạc đem cho → 财产 (tài sản). 果实 là quả; 消费 là chi tiêu (động từ); 家庭 là gia đình — không "quyên góp" được.'},
  {wrong:'我外婆在农村养了两头____。',opts:['猴子','宠物','猪','群'],ans:2,
   exp:'Lượng từ 头 dùng cho gia súc lớn như heo, bò → 两头猪. Khỉ đếm bằng 只; 宠物 thường đi với 只/个; 群 bản thân là lượng từ.'},
  {wrong:'他的回答很____，把大家都逗笑了。',opts:['调皮','安慰','完整','固定'],ans:0,
   exp:'Tinh nghịch, dí dỏm khiến người khác cười → 调皮. 安慰 là động từ "an ủi"; 完整 (hoàn chỉnh), 固定 (cố định) không tạo tiếng cười.'},
  {wrong:'老人的朋友送给他很多____，这是一种猴子爱吃的果实。',opts:['馒头','蔬菜','橡子','猪肉'],ans:2,
   exp:'Vế sau nói rõ đó là một loại QUẢ (果实) khỉ thích ăn → 橡子 (hạt dẻ). 馒头 là bánh bột mì, 蔬菜 là rau, 猪肉 là thịt — đều không phải 果实.'},
  {wrong:'秋天到了，树上结满了____。',opts:['果实','粮食','蔬菜','财产'],ans:0,
   exp:'Động từ 结 (ra quả) + 果实. Cây không "kết" lương thực, rau hay tài sản.'},
  {wrong:'北方人早饭常常吃____、喝粥。',opts:['橡子','馒头','颗','宠物'],ans:1,
   exp:'Món chính người miền Bắc Trung Quốc ăn sáng → 馒头. 橡子 là hạt dẻ cho khỉ; 颗 là lượng từ; 宠物 là thú cưng.'},
  {wrong:'听完这个笑话，大家都____哈大笑起来。',opts:['哈','啊','呀','吧'],ans:0,
   exp:'Tiếng cười lặp lại: 哈哈大笑. 啊, 呀, 吧 là trợ từ ngữ khí cuối câu, không tả tiếng cười.'},
  {wrong:'你究竟去还是不去？____是说句话呀！',opts:['倒','却','才','就'],ans:0,
   exp:'Giục người khác một cách sốt ruột → 倒是 + V + 呀. 却 chỉ sự chuyển ý; 才, 就 không có nghĩa thúc giục.'},
  {wrong:'快点儿走，____我们就迟到了。',opts:['要是','要不','只要','不要'],ans:1,
   exp:'"Nếu không (đi nhanh) thì sẽ muộn" → 要不, đứng trước chủ ngữ vế sau. 要是 / 只要 phải đặt ở vế ĐIỀU KIỆN; 不要 là "đừng".'},
  {wrong:'这两个女孩儿关系非常好，____亲姐妹一样。',opts:['似乎','好像','格外','彼此'],ans:1,
   exp:'Ví von với ……一样 → chỉ 好像. 似乎 không đi với 一样; 格外 là "đặc biệt"; 彼此 là "hai bên".'},
  {wrong:'对同一个问题，____的认识不同，是很正常的事情。',opts:['互相','彼此','对方','一起'],ans:1,
   exp:'Làm định ngữ (……的认识) và chỉ HAI BÊN → 彼此. 互相, 一起 là phó từ không đứng trước 的; 对方 chỉ một bên, không hợp "认识不同".'},
  {wrong:'这个句子不____，少了一个动词。',opts:['完整','整体','综合','固定'],ans:0,
   exp:'Thiếu thành phần → không 完整 (hoàn chỉnh). 整体 là danh từ, không đi sau 不; 综合, 固定 không hợp nghĩa.'},
  {wrong:'我建议把下周会议讨论话题的顺序____下来。',opts:['一定','肯定','固定','必定'],ans:2,
   exp:'把 + N + 固定下来 = cố định lại. 一定, 肯定, 必定 là phó từ/tính từ chỉ sự chắc chắn, không làm động từ mang bổ ngữ 下来.'},
  {wrong:'汉语的____非常丰富，你得特别注意近义词之间的区别。',opts:['词','词汇','句子','字母'],ans:1,
   exp:'Nói TOÀN BỘ từ của một ngôn ngữ + 丰富 → 词汇. 词 là một từ riêng lẻ; 句子 là câu; tiếng Hán không có 字母 (chữ cái).'},
  {wrong:'猴子们觉得自己____了，一个个跳来跳去地发脾气。',opts:['吃亏','吃惊','吃苦','吃力'],ans:0,
   exp:'Nghĩ mình bị thiệt (ít hạt dẻ hơn) → 吃亏. 吃惊 là giật mình; 吃苦 là chịu khổ; 吃力 là vất vả, tốn sức — đều không hợp.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Từ vựng tiếng Hán rất phong phú.',zh:'汉语的词汇非常丰富。',py:'Hànyǔ de cíhuì fēicháng fēngfù.'},
  {vi:'Chất lượng thì tốt đấy, chỉ có điều giá đắt quá.',zh:'质量倒是挺好，就是价格太贵了。',py:'Zhìliàng dàoshì tǐng hǎo, jiùshì jiàgé tài guì le.'},
  {vi:'Con chó nhỏ chạy qua chạy lại trên bãi cỏ.',zh:'小狗在草地上跑来跑去。',py:'Xiǎo gǒu zài cǎodì shang pǎo lái pǎo qù.'},
  {vi:'Hôm nay muộn quá rồi, hay là mai bạn hẵng đi.',zh:'今天太晚了，要不你明天再走吧。',py:'Jīntiān tài wǎn le, yàobu nǐ míngtiān zài zǒu ba.'},
  {vi:'Sống cùng nhau lâu rồi, chúng tôi rất hiểu nhau.',zh:'相处久了，我们彼此都很了解。',py:'Xiāngchǔ jiǔ le, wǒmen bǐcǐ dōu hěn liǎojiě.'},
  {vi:'Đi tàu điện ngầm có thể tiết kiệm rất nhiều thời gian.',zh:'坐地铁可以节省很多时间。',py:'Zuò dìtiě kěyǐ jiéshěng hěn duō shíjiān.'},
  {vi:'Hôm nay bạn mặc chiếc áo này trông trẻ hẳn ra.',zh:'你今天穿这件衣服显得格外年轻。',py:'Nǐ jīntiān chuān zhè jiàn yīfu xiǎnde géwài niánqīng.'},
  {vi:'Học hành không được cả thèm chóng chán.',zh:'学习不能朝三暮四。',py:'Xuéxí bù néng zhāosān-mùsì.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Thành ngữ có kết cấu cố định, không được tuỳ tiện sửa đổi.',zh:'成语有固定的结构，不能随便更改。',py:'Chéngyǔ yǒu gùdìng de jiégòu, bù néng suíbiàn gēnggǎi.'},
  {vi:'Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng.',zh:'从前有位老人，喂养了一群猴子当宠物。',py:'Cóngqián yǒu wèi lǎorén, wèiyǎngle yì qún hóuzi dàng chǒngwù.'},
  {vi:'Ông lão thậm chí phải giảm chi tiêu của người nhà.',zh:'老人甚至必须减少家人的消费。',py:'Lǎorén shènzhì bìxū jiǎnshǎo jiārén de xiāofèi.'},
  {vi:'Ông nhận ra đã đến lúc phải hạn chế khẩu phần ăn của lũ khỉ.',zh:'他注意到该限制猴子的食量了。',py:'Tā zhùyì dào gāi xiànzhì hóuzi de shíliàng le.'},
  {vi:'Trong tình hình các loại lương thực khác không đủ, cho khỉ ăn hạt dẻ lại là một cách hay.',zh:'在其他粮食不足的情况下，用橡子喂猴子倒是个办法。',py:'Zài qítā liángshi bùzú de qíngkuàng xià, yòng xiàngzi wèi hóuzi dàoshì ge bànfǎ.'},
  {vi:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba”, cho rằng mình bị thiệt.',zh:'猴子们似乎只弄懂了一个“三”，觉得自己吃了亏。',py:'Hóuzimen sìhū zhǐ nòngdǒngle yí ge “sān”, juéde zìjǐ chīle kuī.'},
  {vi:'Ông lão thấy lũ khỉ không chịu, bèn đổi cách khác để dỗ dành chúng.',zh:'老人见猴子们不接受，就换了一种方式安慰它们。',py:'Lǎorén jiàn hóuzimen bù jiēshòu, jiù huànle yì zhǒng fāngshì ānwèi tāmen.'},
  {vi:'Ông lão nhìn cảnh ấy, cười ha ha.',zh:'老人看着这情景，哈哈地笑了。',py:'Lǎorén kànzhe zhè qíngjǐng, hāhā de xiào le.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// (gợi từ 命题写作 của sách: 以“‘朝三暮四’的古与今”为题……)
// ══════════════════════════════════════════
var writingData = {
  words:['词汇','固定','似乎','寓言','吃亏'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về sự thay đổi nghĩa xưa – nay của thành ngữ “朝三暮四”.',
  outline:[
    'Câu mở: cảm nghĩ chung về từ vựng / thành ngữ tiếng Hán (dùng 词汇).',
    'Thân 1: thành ngữ thường có kết cấu cố định, nghĩa ít đổi (dùng 固定, 似乎).',
    'Thân 2: nghĩa GỐC của 朝三暮四 — câu chuyện ngụ ngôn lũ khỉ (dùng 寓言, 吃亏).',
    'Kết: nghĩa NGÀY NAY + bài học khi học từ vựng.'
  ],
  model:{
    zh:'学了这一课，我发现汉语的词汇很有意思。成语一般有固定的结构，意义似乎也很少变化，可是“朝三暮四”却不一样。它原来是一个寓言：猴子只看表面，觉得自己吃亏了。现在人们却用它来说一个人做事经常改变。所以学汉语不能只看字面意思。',
    py:'Xuéle zhè yí kè, wǒ fāxiàn Hànyǔ de cíhuì hěn yǒu yìsi. Chéngyǔ yìbān yǒu gùdìng de jiégòu, yìyì sìhū yě hěn shǎo biànhuà, kěshì “zhāosān-mùsì” què bù yíyàng. Tā yuánlái shì yí ge yùyán: hóuzi zhǐ kàn biǎomiàn, juéde zìjǐ chī kuī le. Xiànzài rénmen què yòng tā lái shuō yí ge rén zuòshì jīngcháng gǎibiàn. Suǒyǐ xué Hànyǔ bù néng zhǐ kàn zìmiàn yìsi.',
    vn:'Học xong bài này, tôi thấy từ vựng tiếng Hán thật thú vị. Thành ngữ thường có kết cấu cố định, ý nghĩa dường như cũng ít thay đổi, thế nhưng “sáng ba chiều bốn” lại khác. Ban đầu nó là một truyện ngụ ngôn: lũ khỉ chỉ nhìn bề ngoài, cho rằng mình bị thiệt. Còn bây giờ người ta lại dùng nó để nói một người làm việc hay thay đổi. Vì vậy học tiếng Hán không thể chỉ nhìn nghĩa mặt chữ.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có nói rõ cả nghĩa XƯA lẫn nghĩa NAY của thành ngữ chưa?',
    'Có ít nhất một câu nối ý (可是 / 却 / 不是……而是…… / 所以) chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈“朝三暮四”的古今义。',
  tuDung:[
    {tu:'词汇',loai:'danh từ (tập hợp)',cach:'汉语的词汇很丰富 · 积累词汇 · 词汇量',
     sai:[{re:'(一|两|三|几|每|这|那)个词汇',sua:'一个词 / 这个词',giai:'词汇 là danh từ TẬP HỢP (toàn bộ từ vựng), không đếm từng cái. Nói một từ riêng lẻ dùng 词: 这个词.'}]},
    {tu:'固定',loai:'tính từ / động từ',cach:'固定的结构 · 把……固定下来',
     sai:[{re:'(很|非常|十分)固定(下来|在)',sua:'固定下来 / 固定在……',giai:'Khi 固定 là ĐỘNG TỪ có bổ ngữ (下来 / 在……) thì không thêm 很 phía trước.'},
          {re:'固定地结构',sua:'固定的结构',giai:'Trước danh từ dùng 的 (định ngữ), không dùng 地.'}]},
    {tu:'似乎',loai:'phó từ',cach:'Chủ ngữ + 似乎 + V/Adj',
     sai:[{re:'似乎[^，。！？]*一样',sua:'好像……一样',giai:'Ví von "giống như … vậy" phải dùng 好像……一样. 似乎 không đi với 一样.'},
          {re:'似乎[^，。！？]*似的',sua:'好像……似的',giai:'Tương tự: ……似的 đi với 好像, không đi với 似乎.',nhe:true}]},
    {tu:'寓言',loai:'danh từ',cach:'一个寓言 · 寓言故事 · 这个寓言告诉我们……',
     sai:[{re:'(很|非常|十分|特别)寓言',sua:'是一个寓言',giai:'寓言 là DANH TỪ (truyện ngụ ngôn), không đi sau 很/非常.'}]},
    {tu:'吃亏',loai:'động từ li hợp',cach:'吃了亏 · 吃过亏 · 觉得自己吃亏了',
     sai:[{re:'吃亏了?(他|她|我|你|别人|它们)',sua:'让……吃亏 / ……吃了亏',giai:'吃亏 không mang tân ngữ. Muốn nói "làm ai chịu thiệt" dùng 让 + người + 吃亏.'},
          {re:'被[^，。！？]{0,4}吃亏',sua:'吃了……的亏',giai:'Không dùng 被 với 吃亏. Nói "bị thiệt vì ai/cái gì": 吃了 + N + 的亏.'}]}
  ],
  cauTruc:[
    {ten:'原来……，现在……',nhan:'原来',vd:'这个词原来是一个意思，现在却变成了另一个意思。',khi:'Kể sự thay đổi XƯA – NAY — trục chính của đề này.'},
    {ten:'不是……，而是……',nhan:'而是',vd:'成语的意义不是每个字意思的简单相加，而是一个整体。',khi:'Phủ định cách hiểu sai, khẳng định cách hiểu đúng.'},
    {ten:'A 倒是 + Adj，就是 + B',nhan:'倒是',vd:'这个成语的意思倒是不难，就是用法有点儿复杂。',khi:'Nhượng bộ rồi chuyển ý (điểm ngữ pháp của bài).'},
    {ten:'V来V去',nhan:'来',vd:'我想来想去，还是觉得现在的意思更有意思。',khi:'Tả việc suy nghĩ / làm đi làm lại nhiều lần.'},
    {ten:'……，要不(然)……',nhan:'要不',vd:'学成语要了解它背后的故事，要不很容易用错。',khi:'Nêu hậu quả nếu không làm như vậy.'},
    {ten:'虽然……，但是……',nhan:'虽然',vd:'虽然成语的结构是固定的，但是意义也可能改变。',khi:'Nêu điều tưởng như đúng rồi lật lại.'},
    {ten:'从……我们可以看到……',nhan:'可以看到',vd:'从这个例子，我们可以看到词义是会变化的。',khi:'Câu KẾT — rút ra nhận xét.'}
  ],
  sapXep:[
    {manh:['固定的','这种产品','消费群体','有'],
     dap:'这种产品有固定的消费群体。',
     vn:'Loại sản phẩm này có nhóm khách hàng cố định.',
     giai:'Chủ ngữ 这种产品 → động từ 有 → định ngữ 固定的 + tân ngữ 消费群体. (Đề 书写 29 của sách bài tập.)'},
    {manh:['完整地','请你','叙述一遍','把昨晚的经历'],
     dap:'请你把昨晚的经历完整地叙述一遍。',
     vn:'Mời bạn kể lại trọn vẹn những gì đã trải qua tối qua một lượt.',
     giai:'Câu 把 (HSK 3–4): 请你 + 把 + tân ngữ + 完整地 + V + 一遍. Trạng ngữ 完整地 đứng ngay trước động từ.'},
    {manh:['不能','家庭的财力','他的需要','满足'],
     dap:'家庭的财力不能满足他的需要。',
     vn:'Tài lực của gia đình không đáp ứng được nhu cầu của anh ấy.',
     giai:'Chủ ngữ 家庭的财力 → 不能 → động từ 满足 → tân ngữ 他的需要. 满足 + 需要 là kết hợp cố định.'},
    {manh:['格外','显得','猴子们','开心'],
     dap:'猴子们显得格外开心。',
     vn:'Lũ khỉ trông vô cùng vui vẻ.',
     giai:'显得 + (phó từ mức độ 格外) + tính từ. 格外 đứng SAU 显得, ngay trước tính từ.'},
    {manh:['只弄懂了','似乎','猴子们','一个“三”'],
     dap:'猴子们似乎只弄懂了一个“三”。',
     vn:'Lũ khỉ dường như chỉ hiểu mỗi chữ “ba”.',
     giai:'Phó từ 似乎 đứng sau chủ ngữ, trước cụm động từ; 只 đứng sát động từ 弄懂.'},
    {manh:['限制','该','他注意到','猴子的食量了'],
     dap:'他注意到该限制猴子的食量了。',
     vn:'Ông nhận ra đã đến lúc phải hạn chế khẩu phần ăn của lũ khỉ.',
     giai:'注意到 + mệnh đề; trong mệnh đề: 该 (nên) + 限制 + tân ngữ + 了 (đã đến lúc).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách (tr. 82)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 朝三暮四 · 词汇 · 固定 · 似乎 · 倒是 · 要不.',
  questions:[
    {q_zh:'你知道哪些汉语词语的意思从古到今发生了变化？',
     q_vn:'Em biết những từ tiếng Hán nào có nghĩa thay đổi từ xưa đến nay?',
     hint:'Dùng 原来……，现在…… + 词汇',
     sample:'比如“走”，原来是“跑”的意思，现在是慢慢地走。汉语的词汇在使用过程中，意思似乎一直在变化。',
     sample_vn:'Ví dụ chữ “走”, ngày xưa nghĩa là “chạy”, bây giờ là đi bộ. Từ vựng tiếng Hán trong quá trình sử dụng dường như luôn thay đổi nghĩa.',
     note:'Sách gợi ý các chữ 菜 · 金 · 汤 · 走 — chọn một chữ và nói rõ nghĩa XƯA và NAY.'},
    {q_zh:'举一个你母语中词汇语义变化的例子。',
     q_vn:'Hãy kể một ví dụ về sự thay đổi nghĩa của từ trong tiếng mẹ đẻ của em.',
     hint:'Dùng 原来是……的意思，现在……',
     sample:'越南语的“đỉnh”原来是“山顶”的意思，现在年轻人用它来说一件事特别好、特别棒。',
     sample_vn:'Từ “đỉnh” trong tiếng Việt vốn nghĩa là “đỉnh núi”, giờ giới trẻ dùng để nói một việc gì đó rất hay, rất tuyệt.',
     note:'Lấy ví dụ tiếng lóng của giới trẻ là cách dễ nói nhất — nhớ giải thích nghĩa cũ trước.'},
    {q_zh:'你觉得了解这种语义变化对你的汉语学习有帮助吗？',
     q_vn:'Em thấy hiểu hiện tượng thay đổi nghĩa này có giúp gì cho việc học tiếng Trung không?',
     hint:'Nêu ý kiến + ví dụ, dùng 要不 (nếu không thì…)',
     sample:'我觉得很有帮助。了解了词语的古今变化，才能用对成语，要不很容易闹笑话。',
     sample_vn:'Tôi thấy rất có ích. Hiểu được sự thay đổi xưa nay của từ mới dùng đúng thành ngữ, nếu không rất dễ gây chuyện cười.',
     note:'Sách yêu cầu 举例说明 — phải có ví dụ cụ thể, không chỉ nói "có ích".'},
    {q_zh:'你身边有“朝三暮四”的人吗？你怎么看这种人？',
     q_vn:'Xung quanh em có ai “sáng ba chiều bốn” không? Em nghĩ sao về kiểu người này?',
     hint:'Dùng 倒是……就是…… để nhận xét hai mặt',
     sample:'我有一个同学，他兴趣倒是很多，就是做什么都朝三暮四，最后什么都没学好。',
     sample_vn:'Tôi có một bạn cùng lớp, sở thích thì nhiều đấy, chỉ có điều làm gì cũng cả thèm chóng chán, cuối cùng chẳng học tốt được gì.',
     note:'Dùng 朝三暮四 theo nghĩa NGÀY NAY (hay thay đổi) — đừng dùng nghĩa trong truyện ngụ ngôn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại 1–8 lấy từ sách bài tập 《HSK标准教程5·练习册》bài 8.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第8课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'在汉语当中，语音、汉字、词汇、语法，你对哪个最感兴趣？'},
            {sp:'男',zh:'古今词义的变化，我觉得最有意思。'}],
     q:'男的对什么最感兴趣？',qvn:'Người đàn ông hứng thú nhất với điều gì?',
     opts:['语音','汉字','古今词义的变化','语法'],ans:2,
     why:'Người phụ nữ liệt kê bốn thứ, nhưng người đàn ông không chọn cái nào trong đó mà nói 古今词义的变化 — đúng chủ đề của bài. Bẫy: nghe thấy 语音, 汉字, 语法 rồi chọn vội.',
     words:['词汇']},

    {n:2,
     lines:[{sp:'男',zh:'怎么这么半天才来？'},
            {sp:'女',zh:'别提了，门口很多人抢着买票，半天才进来。'}],
     q:'女的为什么来得晚？',qvn:'Vì sao người phụ nữ đến muộn?',
     opts:['路上堵车了','门口买票的人太多','忘带票了','起床太晚了'],ans:1,
     why:'门口很多人抢着买票 — ở cửa rất nhiều người tranh nhau mua vé, nên mãi mới vào được. 别提了 là câu mở đầu than phiền quen thuộc trong khẩu ngữ.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'李教授，请您谈谈最近几年，汉语新词语有哪些特点？'},
            {sp:'男',zh:'首先，在当前产生的新词语中，多音节词明显增多，打破了以前双音节占主要地位的局面。'}],
     q:'李教授提到汉语新词语有什么变化？',qvn:'Giáo sư Lý nói từ mới tiếng Hán có thay đổi gì?',
     opts:['单音节词越来越多','双音节词明显增多','多音节词明显增多','新词语越来越少'],ans:2,
     why:'多音节词明显增多 — từ nhiều âm tiết tăng rõ rệt, phá vỡ thế chiếm ưu thế của từ HAI âm tiết trước đây. Bẫy ở đáp án 双音节: đó là tình hình CŨ.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'试了这么多次都不行，我真的想放弃了。'},
            {sp:'女',zh:'别着急，机会总是给有准备的人的，你一定能成功。'}],
     q:'女的是什么语气？',qvn:'Người phụ nữ nói với giọng điệu gì?',
     opts:['批评','怀疑','鼓励','抱怨'],ans:2,
     why:'别着急……你一定能成功 — lời ĐỘNG VIÊN. Dạng câu hỏi 语气 phải nghe thái độ; 抱怨 (than phiền — từ bài 1) là thái độ của người đàn ông, không phải người phụ nữ.',
     words:[]},

    {n:5,
     lines:[{sp:'女',zh:'老王，今天你穿这件T恤显得格外年轻。'},
            {sp:'男',zh:'老婆昨天刚给我买的，挺贵的。'}],
     q:'女的觉得男的这件衣服怎么样？',qvn:'Người phụ nữ thấy chiếc áo này của người đàn ông thế nào?',
     opts:['太贵了','让他显得很年轻','颜色不好看','不太合适'],ans:1,
     why:'显得格外年轻 — trông trẻ hẳn ra; hai từ mới của bài đi cùng nhau. 挺贵的 là lời NGƯỜI ĐÀN ÔNG nói, câu hỏi lại hỏi ý người phụ nữ.',
     words:['显得','格外']},

    {n:6,
     lines:[{sp:'女',zh:'好久不见，你可胖了不少。'},
            {sp:'男',zh:'看来我得限制一下自己的食量了。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['最近工作太忙了','要少吃一点儿','想去买新衣服','胖一点儿也挺好'],ans:1,
     why:'限制一下自己的食量 — hạn chế lượng ăn = phải ăn ít đi. Câu này dùng đúng cụm 限制食量 trong bài đọc (老人……该限制猴子的食量了).',
     words:['限制']},

    {n:7,
     lines:[{sp:'女',zh:'我儿子真是太调皮了！我都快受不了了。'},
            {sp:'男',zh:'小孩子嘛，多少都有点儿淘气。'},
            {sp:'女',zh:'有点儿？你是没见过他，不知道。'},
            {sp:'男',zh:'那你下次把他带到办公室来玩儿玩儿。'}],
     q:'他们最可能是什么关系？',qvn:'Hai người nhiều khả năng là quan hệ gì?',
     opts:['夫妻','师生','同事','母子'],ans:2,
     why:'把他带到办公室来 — mang cậu bé đến VĂN PHÒNG chơi → hai người làm cùng chỗ. Nếu là vợ chồng thì người đàn ông không thể 没见过 con mình.',
     words:['调皮','淘气']},

    {n:8,
     lines:[{sp:'男',zh:'给你盛点儿饭吧？'},
            {sp:'女',zh:'不用，我减肥呢，不吃主食。'},
            {sp:'男',zh:'你每天光吃蔬菜，连肉都不吃，会营养不足。'},
            {sp:'女',zh:'我觉得没问题，我身体挺好的。'}],
     q:'女的只吃什么？',qvn:'Người phụ nữ chỉ ăn gì?',
     opts:['肉','蔬菜','主食','水果'],ans:1,
     why:'光吃蔬菜 — 光 = chỉ. Người phụ nữ nói 不吃主食, người đàn ông nói thêm 连肉都不吃. Hai từ mới: 蔬菜, 不足.',
     words:['蔬菜','不足']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// Dựa trên các câu 练一练 của sách (tr. 78–79)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn vừa sửa sang lại nhà, hỏi ý kiến em.',
     a:{sp:'Bạn',zh:'你觉得这套房子装修得怎么样？',vn:'Cậu thấy căn nhà này sửa sang thế nào?'},
     need:['Dùng 倒（是）……，就是……','Khen một điểm rồi góp ý một điểm'],
     sample:'装修得倒是挺漂亮的，就是颜色有点儿深。',
     samplePy:'Zhuāngxiū de dàoshì tǐng piàoliang de, jiùshì yánsè yǒudiǎnr shēn.',
     sampleVn:'Sửa thì đẹp đấy, chỉ có điều màu hơi tối.',
     tip:'倒是 đứng SAU chủ ngữ / sau 得, trước tính từ. Đừng viết 倒是装修得…… khi chưa có chủ ngữ rõ ràng.'},

    {scene:'Bạn cùng lớp làm mất điện thoại, em hỏi thăm.',
     a:{sp:'Bạn',zh:'我的手机找到了吗？你帮我找了吗？',vn:'Điện thoại của tớ tìm thấy chưa? Cậu có giúp tớ tìm không?'},
     need:['Dùng ……来……去','Nói kết quả (tìm thấy hay không)'],
     sample:'我在教室里找来找去，还是没找到。',
     samplePy:'Wǒ zài jiàoshì li zhǎo lái zhǎo qù, háishi méi zhǎodào.',
     sampleVn:'Tớ tìm đi tìm lại trong lớp mà vẫn không thấy.',
     tip:'V来V去 không mang tân ngữ phía sau: không nói 找来找去手机.'},

    {scene:'Tối qua bạn nhắn tin nhắc em mang bài tập.',
     a:{sp:'Bạn',zh:'昨晚我给你发的短信，你看到了吗？',vn:'Tin nhắn tối qua tớ gửi cậu thấy chưa?'},
     need:['Dùng 要不（然）','Nói kết quả nếu bạn KHÔNG nhắn'],
     sample:'看到了，谢谢你！要不我今天肯定又忘带作业了。',
     samplePy:'Kàndào le, xièxie nǐ! Yàobu wǒ jīntiān kěndìng yòu wàng dài zuòyè le.',
     sampleVn:'Thấy rồi, cảm ơn cậu! Không thì hôm nay tớ chắc chắn lại quên mang bài tập.',
     tip:'要不 đứng đầu vế sau, TRƯỚC chủ ngữ 我.'},

    {scene:'Bạn rủ em cùng lên kế hoạch cho đêm Giao thừa.',
     a:{sp:'Bạn',zh:'后天我们打算去中国朋友家过除夕，你有什么计划？',vn:'Ngày kia bọn tớ định sang nhà bạn Trung Quốc đón Giao thừa, cậu có kế hoạch gì?'},
     need:['Dùng 要不 với nghĩa ĐỀ NGHỊ (hay là…)','Kết câu bằng 吧'],
     sample:'我还没想好呢。要不我跟你们一起去吧？',
     samplePy:'Wǒ hái méi xiǎnghǎo ne. Yàobu wǒ gēn nǐmen yìqǐ qù ba?',
     sampleVn:'Tớ chưa nghĩ ra. Hay là tớ đi cùng các cậu nhé?',
     tip:'Nghĩa thứ hai của 要不: đưa ra một lựa chọn khác, thường đi với 吧.'},

    {scene:'Bạn kể về một người bạn chung hay đổi lớp học thêm.',
     a:{sp:'Bạn',zh:'小王这个月已经换了三个兴趣班了。',vn:'Tháng này Tiểu Vương đã đổi ba lớp năng khiếu rồi.'},
     need:['Dùng 朝三暮四 theo nghĩa ngày nay','Nêu nhận xét của em'],
     sample:'他这样朝三暮四，最后什么都学不好。',
     samplePy:'Tā zhèyàng zhāosān-mùsì, zuìhòu shénme dōu xué bu hǎo.',
     sampleVn:'Cậu ấy cả thèm chóng chán như thế, rốt cuộc chẳng học tốt được gì.',
     tip:'朝三暮四 mang nghĩa CHÊ — không dùng để khen ai năng động.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài văn nghị luận nộp cô giáo.',
     a:'这个成语的意义似乎发生了变化。',b:'这个成语的意思好像变了。',better:'a',
     why:'Bài văn là VĂN VIẾT: 似乎 + 意义 + 发生变化 trang trọng hơn. 好像……变了 đúng nhưng mang giọng nói chuyện.'},

    {scene:'Em nhắn tin hỏi bạn thân.',
     a:'你似乎有点儿不高兴？',b:'你好像有点儿不高兴？',better:'b',
     why:'Nhắn cho bạn thân nên dùng khẩu ngữ 好像. 似乎 ở đây nghe như đang viết văn.'},

    {scene:'Cửa hàng dán thông báo trước quầy.',
     a:'本店每位顾客限购两件。',b:'每个人最多只能买两件哦。',better:'a',
     why:'Thông báo công khai dùng văn viết ngắn gọn: 限购 (hạn chế mua). Câu b thân mật, hợp nói miệng với khách quen hơn.'},

    {scene:'Em an ủi bạn vừa thua trận bóng.',
     a:'别难过，你们已经踢得很好了。',b:'失败乃成功之母，你们应当继续努力。',better:'a',
     why:'An ủi bạn bè cần giọng GẦN GŨI. Câu b đúng nhưng nghe như bài diễn văn, xa cách.'},

    {scene:'Em mặc cả ở chợ.',
     a:'4块，要不我不买。',b:'如果您不能以4块的价格出售，我将放弃购买。',better:'a',
     why:'Mặc cả ngoài chợ là khẩu ngữ: 要不 ngắn, tự nhiên. Câu b quá trang trọng, nghe rất buồn cười trong hoàn cảnh này.'},

    {scene:'Lớp trưởng phát biểu trong lễ khai giảng.',
     a:'希望大家彼此帮助，共同进步。',b:'大家互相帮帮忙哈。',better:'a',
     why:'Phát biểu trang trọng: 彼此帮助，共同进步 hợp hơn. 帮帮忙哈 là khẩu ngữ rất suồng sã.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo bảng 提示词 của sách (tr. 81)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập cuối trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1 phút.',
  outline: [
    {step:'Mở', cue:'成语有……的结构，意义是……的', words:['词汇','固定','结构','整体','综合','完整']},
    {step:'Nguồn gốc', cue:'古代有一位哲学家，讲了一个……', words:['哲学家','寓言']},
    {step:'Ông lão và bầy khỉ', cue:'老人喂养了一群……，相处久了……', words:['喂养','群','猴子','宠物','相处','彼此','表情','行为','对方']},
    {step:'Vấn đề ông lão gặp', cue:'猴子吃得多，一个普通的家庭……', words:['蔬菜','粮食','家庭','财产','消费','节省','限制','猪','调皮','淘气']},
    {step:'Lần thứ nhất', cue:'老人说：早上三颗，晚上四颗……', words:['橡子','果实','不足','倒','馒头','颗','似乎','吃亏']},
    {step:'Lần thứ hai', cue:'老人换了一种方式……', words:['方式','安慰','要不','显得','格外','情景','哈']},
    {step:'Kết', cue:'哲学家想告诉我们……；今天这个成语……', words:['朝三暮四']}
  ],
  checklist: [
    'Kể đủ cả ba phần như bảng của sách: quan hệ ông lão – bầy khỉ, vấn đề, cách trao đổi chưa?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng 倒, ……来……去, 要不 đúng chỗ không?',
    'Có nói được nghĩa XƯA và nghĩa NAY của 朝三暮四 không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 80–81) — chỉ 3 dạng: kho · ab · vitri
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['颗','群','安慰','似乎','限制','相处'],
   cau:[
     {s:'希望我们能够友好＿＿，共同发展。', dap:['相处']},
     {s:'他最近心情不太好，事情＿＿办得不太顺利。', dap:['似乎']},
     {s:'聚在电台门口的那＿＿人是干什么的？', dap:['群']},
     {s:'她跟丈夫离婚后非常伤心，朋友们轮流来＿＿她。', dap:['安慰']},
     {s:'小明昨天掉了一＿＿牙齿，这是他第一次换牙。', dap:['颗']},
     {s:'这次的作文不＿＿字数，你可以想写多少就写多少。', dap:['限制']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'我建议这几天我们应该把下周会议讨论话题的顺序＿＿下来。', opts:['固定','一定'], ans:0, giai:'把 + N + 固定下来: 固定 là động từ mang bổ ngữ 下来. 一定 là phó từ/tính từ ("nhất định"), không làm động từ.'},
     {s:'汉语的＿＿非常丰富，你得特别注意近义＿＿之间的区别。', opts:['① 词　② 词汇','① 词汇　② 词'], ans:1, giai:'Chỗ ① nói toàn bộ từ vựng + 丰富 → 词汇 (tập hợp). Chỗ ② là 近义词 (từ gần nghĩa) — một từ ghép cố định, dùng 词.'},
     {s:'这篇文章＿＿上写得不错，有些小地方还要再改改。', opts:['整体','完整'], ans:0, giai:'整体上 = nhìn tổng thể, đối lập với 小地方 (chỗ nhỏ). 完整 là tính từ "hoàn chỉnh", không đi với 上.'},
     {s:'这两个女孩儿关系非常好，＿＿亲姐妹一样。', opts:['似乎','好像'], ans:1, giai:'Ví von với ……一样 → 好像. 似乎 không đi với 一样.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'从成为A大学同学以来，B他们就C相爱D了。', tu:'彼此', ans:'C', giai:'彼此 đứng trước động từ 相爱, sau chủ ngữ 他们 và phó từ 就: 他们就彼此相爱了。'},
     {s:'他输了这场比赛不是因为能力A不够B，而是因为C准备D。', tu:'不足', ans:'D', giai:'不足 đứng SAU danh từ: 准备不足 (chuẩn bị chưa đủ), đối ứng với 能力不够.'},
     {s:'A我B很想辞职，但是C我妻子D不支持我的想法。', tu:'倒是', ans:'B', giai:'倒是 (nhượng bộ) đứng sau chủ ngữ 我, trước 很想: 我倒是很想辞职，但是…….'},
     {s:'你已经A不错了，别老觉得自己好像B吃了C亏D似的！', tu:'大', ans:'C', giai:'吃亏 là động từ li hợp: chen 了 và 大 vào giữa → 吃了大亏.'}
   ]}
];
