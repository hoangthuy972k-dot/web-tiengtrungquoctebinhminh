// ══════════════════════════════════════════
// DATA — HSK5 Bài 21: 汉字叔叔：一个美国人的汉字情缘 (Tình yêu chữ Hán của “ông chú người Mỹ”)
// Unit 7 交流文化 · Nguồn: HSK标准教程5下 (tr. 30–38) + 练习册 bài 21
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 41 từ của bảng 生词 + 死记硬背 (mục phụ dưới 硬) + 3 专有名词 (tr. 30–32)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'情缘',py:'qíngyuán',pos:'Danh từ',vn:'tình duyên, mối duyên gắn bó',hv:'tình duyên',em:'💞',lesson:1,
   explain:['Mối duyên tình cảm gắn bó sâu sắc giữa người với người, hoặc giữa người với một sự vật, một đất nước.','Trong bài: 汉字情缘 = mối duyên gắn bó với chữ Hán — không phải chuyện yêu đương nam nữ.'],
   usage:'Hay dùng trong tiêu đề, văn viết: A 和 / 与 B 的情缘, 汉字情缘, 中国情缘, 结下情缘. Khẩu ngữ hằng ngày ít dùng.',
   collo:['汉字情缘','中国情缘','一段情缘','结下情缘'],
   ex_zh:'这篇文章讲的是一个美国人的汉字情缘。',ex_py:'Zhè piān wénzhāng jiǎng de shì yí ge Měiguórén de Hànzì qíngyuán.',ex_vn:'Bài văn này kể về mối duyên với chữ Hán của một người Mỹ.',
   exList:[
     {zh:'这篇文章讲的是一个美国人的汉字情缘。',py:'Zhè piān wénzhāng jiǎng de shì yí ge Měiguórén de Hànzì qíngyuán.',vn:'Bài văn này kể về mối duyên với chữ Hán của một người Mỹ.'},
     {zh:'他在北京留学了四年，从此和中国结下了一段情缘。',py:'Tā zài Běijīng liúxuéle sì nián, cóngcǐ hé Zhōngguó jiéxiàle yí duàn qíngyuán.',vn:'Anh ấy du học ở Bắc Kinh bốn năm, từ đó gắn bó với Trung Quốc.'},
     {zh:'我和汉语的情缘，是从一首中文歌开始的。',py:'Wǒ hé Hànyǔ de qíngyuán, shì cóng yì shǒu Zhōngwén gē kāishǐ de.',vn:'Mối duyên của tôi với tiếng Trung bắt đầu từ một bài hát tiếng Trung.'}
   ],
   colloFull:[
     {zh:'汉字情缘',py:'Hànzì qíngyuán',vn:'mối duyên với chữ Hán'},
     {zh:'中国情缘',py:'Zhōngguó qíngyuán',vn:'mối duyên với Trung Quốc'},
     {zh:'一段情缘',py:'yí duàn qíngyuán',vn:'một mối duyên'},
     {zh:'结下情缘',py:'jiéxià qíngyuán',vn:'kết duyên, trở nên gắn bó'},
     {zh:'与音乐的情缘',py:'yǔ yīnyuè de qíngyuán',vn:'mối duyên với âm nhạc'}
   ],
   patterns:[
     {s:'A + 和 / 与 + B + 的情缘',m:'Mối duyên gắn bó giữa A và B'},
     {s:'Sub + 和 + N + 结下(了)情缘',m:'Ai đó kết duyên, gắn bó với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mối duyên của tôi với chữ Hán bắt đầu từ năm lớp 10.',answer:'我和汉字的情缘是从高一开始的。',answerPy:'Wǒ hé Hànzì de qíngyuán shì cóng gāoyī kāishǐ de.',
      note:'情缘 làm chủ ngữ; 是……的 nhấn mạnh thời điểm bắt đầu.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chú ấy không chỉ kể cho chúng tôi nghe mối duyên với chữ Hán, mà còn dạy chúng tôi viết chữ Hán.',answer:'他不仅给我们讲了他的汉字情缘，也教我们写汉字。',answerPy:'Tā bùjǐn gěi wǒmen jiǎngle tā de Hànzì qíngyuán, yě jiāo wǒmen xiě Hànzì.',
      note:'汉字情缘 làm tân ngữ của 讲.',pair:'不仅……也……'}
   ]},

  {n:2,zh:'逻辑',py:'luójí',pos:'Danh từ',vn:'lô-gích, tính logic',hv:'la tập',em:'🧩',lesson:1,
   explain:['Quy luật, mối liên hệ hợp lý giữa các sự vật, ý tưởng; cách suy luận chặt chẽ.','Là từ phiên âm tiếng Anh “logic” — đọc Hán–Việt “la tập” chẳng gợi nghĩa.'],
   usage:'有 / 没有逻辑, 很有逻辑, 符合逻辑, 逻辑性强, 逻辑思维. 没有任何逻辑 = chẳng có chút logic nào.',
   collo:['没有任何逻辑','符合逻辑','逻辑思维','逻辑性强'],
   ex_zh:'他感觉汉字的一笔一画没有任何逻辑，只能死记硬背。',ex_py:'Tā gǎnjué Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì-yìngbèi.',ex_vn:'Anh ấy cảm thấy từng nét chữ Hán chẳng có chút logic nào, chỉ có thể học vẹt.',
   exList:[
     {zh:'他感觉汉字的一笔一画没有任何逻辑，只能死记硬背。',py:'Tā gǎnjué Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì-yìngbèi.',vn:'Anh ấy cảm thấy từng nét chữ Hán chẳng có chút logic nào, chỉ có thể học vẹt.'},
     {zh:'他说话很有逻辑，大家都被他说服了。',py:'Tā shuōhuà hěn yǒu luójí, dàjiā dōu bèi tā shuōfú le.',vn:'Anh ấy nói năng rất logic, mọi người đều bị anh ấy thuyết phục.'},
     {zh:'写议论文的时候，要特别注意文章的逻辑。',py:'Xiě yìlùnwén de shíhou, yào tèbié zhùyì wénzhāng de luójí.',vn:'Khi viết văn nghị luận, phải đặc biệt chú ý tính logic của bài.'}
   ],
   colloFull:[
     {zh:'没有任何逻辑',py:'méiyǒu rènhé luójí',vn:'chẳng có chút logic nào'},
     {zh:'符合逻辑',py:'fúhé luójí',vn:'hợp logic'},
     {zh:'逻辑思维',py:'luójí sīwéi',vn:'tư duy logic'},
     {zh:'逻辑性强',py:'luójíxìng qiáng',vn:'tính logic cao'},
     {zh:'很有逻辑',py:'hěn yǒu luójí',vn:'rất logic'}
   ],
   patterns:[
     {s:'Sub + (很)有逻辑 / 没有(任何)逻辑',m:'Có logic / chẳng có chút logic nào'},
     {s:'(不)符合 + 逻辑',m:'(Không) hợp logic'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy câu này không sai ngữ pháp, nhưng không hợp logic.',answer:'虽然这个句子没有语法错误，但是不符合逻辑。',answerPy:'Suīrán zhège jùzi méiyǒu yǔfǎ cuòwù, dànshì bù fúhé luójí.',
      note:'符合逻辑 — 符合 đi với 逻辑, 要求, 条件…',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần hiểu logic của chữ Hán thì sẽ nhớ nhanh hơn.',answer:'只要了解汉字的逻辑，就能记得更快。',answerPy:'Zhǐyào liǎojiě Hànzì de luójí, jiù néng jì de gèng kuài.',
      note:'汉字的逻辑 = quy luật cấu tạo của chữ Hán.',pair:'只要……就……'}
   ]},

  {n:3,zh:'硬',py:'yìng',pos:'Phó từ',vn:'cứ, nhất quyết; gắng gượng, cố',hv:'ngạnh',em:'💪',lesson:1,
   explain:['Phó từ: kiên quyết hoặc khăng khăng làm một việc (kể cả khi vô lý): 硬说, 硬要.','Còn biểu thị năng lực không đủ nhưng vẫn gắng gượng làm: 硬挺过来, 硬把药喝下去.','Bài 7 đã học 硬 là tính từ “cứng”; bài này 硬 là phó từ.'],
   usage:'Đứng trước động từ: 硬 + V (硬说, 硬要, 硬挺, 硬撑). Hay đi với 把: 硬把……V下去. Khẩu ngữ hay nói 硬是.',
   collo:['硬说','硬要','硬挺过来','硬撑着'],
   ex_zh:'在中国历史故事“指鹿为马”中，赵高把鹿硬说成马。',ex_py:'Zài Zhōngguó lìshǐ gùshi “zhǐ lù wéi mǎ” zhōng, Zhào Gāo bǎ lù yìng shuōchéng mǎ.',ex_vn:'Trong câu chuyện lịch sử Trung Quốc “chỉ hươu bảo ngựa”, Triệu Cao cứ khăng khăng nói con hươu là con ngựa.',
   exList:[
     {zh:'在中国历史故事“指鹿为马”中，赵高把鹿硬说成马。',py:'Zài Zhōngguó lìshǐ gùshi “zhǐ lù wéi mǎ” zhōng, Zhào Gāo bǎ lù yìng shuōchéng mǎ.',vn:'Trong câu chuyện lịch sử Trung Quốc “chỉ hươu bảo ngựa”, Triệu Cao cứ khăng khăng nói con hươu là con ngựa.'},
     {zh:'虽然中药汤有点儿苦，但为了治病，他还是硬把它喝下去了。',py:'Suīrán zhōngyào tāng yǒudiǎnr kǔ, dàn wèile zhì bìng, tā háishi yìng bǎ tā hē xiaqu le.',vn:'Tuy thuốc bắc hơi đắng, nhưng để chữa bệnh, anh ấy vẫn cố uống hết.'},
     {zh:'我说不想去，妈妈硬要我去。',py:'Wǒ shuō bù xiǎng qù, māma yìng yào wǒ qù.',vn:'Tôi nói không muốn đi, mẹ cứ nhất quyết bắt tôi đi.'}
   ],
   colloFull:[
     {zh:'硬说',py:'yìng shuō',vn:'cứ khăng khăng nói'},
     {zh:'硬要',py:'yìng yào',vn:'nhất quyết đòi, cứ bắt'},
     {zh:'硬挺过来',py:'yìng tǐng guolai',vn:'gắng gượng vượt qua'},
     {zh:'硬撑着',py:'yìng chēngzhe',vn:'cố gượng chống đỡ'},
     {zh:'硬把药喝下去',py:'yìng bǎ yào hē xiaqu',vn:'cố uống cho hết thuốc'}
   ],
   patterns:[
     {s:'Sub + 硬 + V (硬说 / 硬要)',m:'Cứ khăng khăng, nhất quyết làm gì'},
     {s:'Sub + 硬(是) + 把 + O + V + 下去 / 完',m:'Gắng gượng làm cho xong việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng là cậu ấy quên, vậy mà cậu ấy cứ khăng khăng nói là tôi không nhắc.',answer:'明明是他忘了，他却硬说是我没提醒他。',answerPy:'Míngmíng shì tā wàng le, tā què yìng shuō shì wǒ méi tíxǐng tā.',
      note:'硬说 = khăng khăng nói (dù sai sự thật) — nghĩa ① của 硬.',pair:'明明……却……'},
     {promptLang:'vi',prompt:'Đề thi khó quá, nhưng cậu ấy vẫn cố làm cho xong.',answer:'考试题太难了，可是他还是硬把题做完了。',answerPy:'Kǎoshì tí tài nán le, kěshì tā háishi yìng bǎ tí zuòwán le.',
      note:'硬 + 把 … V完 = gắng gượng làm xong — nghĩa ② của 硬.',pair:'把'}
   ]},

  {n:4,zh:'死记硬背',py:'sǐjì-yìngbèi',pos:'Thành ngữ',vn:'học vẹt, học thuộc lòng một cách máy móc',hv:'tử ký ngạnh bối',em:'🦜',lesson:1,
   explain:['Ghi nhớ, học thuộc một cách máy móc mà không hiểu bản chất.','Cấu tạo: 死记 (nhớ cứng nhắc) + 硬背 (cố học thuộc) — 硬 ở đây chính là phó từ “cố, gượng”. Sách in là mục phụ dưới từ 硬.'],
   usage:'Làm vị ngữ (只能死记硬背), tân ngữ (靠死记硬背) hoặc định ngữ (死记硬背的方法). Mang ý chê.',
   collo:['只能死记硬背','靠死记硬背','死记硬背的方法','不要死记硬背'],
   ex_zh:'汉字的一笔一画没有任何逻辑，只能死记硬背。',ex_py:'Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì-yìngbèi.',ex_vn:'Từng nét chữ Hán chẳng có chút logic nào, chỉ có thể học vẹt.',
   exList:[
     {zh:'汉字的一笔一画没有任何逻辑，只能死记硬背。',py:'Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì-yìngbèi.',vn:'Từng nét chữ Hán chẳng có chút logic nào, chỉ có thể học vẹt.'},
     {zh:'学语法不能靠死记硬背，要多用。',py:'Xué yǔfǎ bù néng kào sǐjì-yìngbèi, yào duō yòng.',vn:'Học ngữ pháp không thể dựa vào học vẹt, phải dùng nhiều.'},
     {zh:'死记硬背的东西，考完试很快就忘了。',py:'Sǐjì-yìngbèi de dōngxi, kǎowán shì hěn kuài jiù wàng le.',vn:'Những thứ học vẹt, thi xong là quên ngay.'}
   ],
   colloFull:[
     {zh:'只能死记硬背',py:'zhǐ néng sǐjì-yìngbèi',vn:'chỉ có thể học vẹt'},
     {zh:'靠死记硬背',py:'kào sǐjì-yìngbèi',vn:'dựa vào học vẹt'},
     {zh:'死记硬背的方法',py:'sǐjì-yìngbèi de fāngfǎ',vn:'cách học vẹt'},
     {zh:'不要死记硬背',py:'búyào sǐjì-yìngbèi',vn:'đừng học vẹt'}
   ],
   patterns:[
     {s:'靠 / 只能 + 死记硬背',m:'Dựa vào / chỉ có thể học vẹt'},
     {s:'不是靠死记硬背，而是靠……',m:'Không phải nhờ học vẹt mà nhờ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy học tiếng Trung ngày càng nhẹ nhàng, vì cậu ấy không còn học vẹt nữa.',answer:'他学汉语越来越轻松了，因为他不再死记硬背了。',answerPy:'Tā xué Hànyǔ yuè lái yuè qīngsōng le, yīnwèi tā bú zài sǐjì-yìngbèi le.',
      note:'不再 + 死记硬背 = không còn học vẹt nữa.',pair:'越来越'},
     {promptLang:'vi',prompt:'Chỉ cần hiểu ý nghĩa của bài khoá thì không cần học vẹt.',answer:'只要理解了课文的意思，就不用死记硬背。',answerPy:'Zhǐyào lǐjiěle kèwén de yìsi, jiù búyòng sǐjì-yìngbèi.',
      note:'不用 + 死记硬背: thành ngữ làm vị ngữ.',pair:'只要……就……'}
   ]},

  {n:5,zh:'偶然',py:'ǒurán',pos:'Tính từ / Phó từ',vn:'tình cờ, ngẫu nhiên; thỉnh thoảng',hv:'ngẫu nhiên',em:'🎲',lesson:1,
   explain:['Tính từ: việc xảy ra ngoài dự tính, hoặc theo quy luật thông thường thì khó xảy ra; trái nghĩa với 必然 (tất nhiên).','Phó từ: thỉnh thoảng, có lúc (= 偶尔, 有时候).'],
   usage:'Tính từ làm định ngữ (偶然的机会), vị ngữ (并非偶然), trước có thể thêm phó từ mức độ (非常偶然). Phó từ đứng trước động từ, hay đi với 也: 偶然也会…….',
   collo:['一个偶然的机会','偶然发现','并非偶然','非常偶然'],
   ex_zh:'一个偶然的机会，他发现如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。',ex_py:'Yí ge ǒurán de jīhuì, tā fāxiàn rúguǒ liǎojiě Hànzì de láiyuán hé yǎnbiàn guòchéng, zài xuéxí tā jiù biàn de qīngsōng, róngyì.',ex_vn:'Một dịp tình cờ, anh ấy phát hiện ra nếu hiểu nguồn gốc và quá trình biến đổi của chữ Hán thì học nó sẽ trở nên nhẹ nhàng, dễ dàng.',
   exList:[
     {zh:'一个偶然的机会，他发现如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。',py:'Yí ge ǒurán de jīhuì, tā fāxiàn rúguǒ liǎojiě Hànzì de láiyuán hé yǎnbiàn guòchéng, zài xuéxí tā jiù biàn de qīngsōng, róngyì.',vn:'Một dịp tình cờ, anh ấy phát hiện ra nếu hiểu nguồn gốc và quá trình biến đổi của chữ Hán thì học nó sẽ trở nên nhẹ nhàng, dễ dàng.'},
     {zh:'这本书是她一次逛书市时偶然发现的。',py:'Zhè běn shū shì tā yí cì guàng shūshì shí ǒurán fāxiàn de.',vn:'Cuốn sách này là cô ấy tình cờ phát hiện ra trong một lần đi dạo hội sách.'},
     {zh:'她专心地织着毛衣，偶然也会抬眼看一下墙上的挂钟。',py:'Tā zhuānxīn de zhīzhe máoyī, ǒurán yě huì tái yǎn kàn yíxià qiáng shang de guàzhōng.',vn:'Bà chăm chú đan áo len, thỉnh thoảng cũng ngước mắt nhìn chiếc đồng hồ treo tường.'}
   ],
   colloFull:[
     {zh:'一个偶然的机会',py:'yí ge ǒurán de jīhuì',vn:'một dịp tình cờ'},
     {zh:'偶然发现',py:'ǒurán fāxiàn',vn:'tình cờ phát hiện'},
     {zh:'并非偶然',py:'bìngfēi ǒurán',vn:'không phải ngẫu nhiên'},
     {zh:'非常偶然',py:'fēicháng ǒurán',vn:'rất tình cờ'},
     {zh:'偶然也会……',py:'ǒurán yě huì……',vn:'thỉnh thoảng cũng …'}
   ],
   patterns:[
     {s:'一个偶然的机会，Sub + V……',m:'Nhân một dịp tình cờ, ai đó …'},
     {s:'……并非偶然',m:'… không phải là ngẫu nhiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tình cờ biết được tin này ở trên mạng.',answer:'我是在网上偶然知道这个消息的。',answerPy:'Wǒ shì zài wǎng shang ǒurán zhīdào zhège xiāoxi de.',
      note:'偶然 (tính từ) làm trạng ngữ trước 知道; 是……的 nhấn mạnh nơi chốn, cách thức.',pair:'是……的'},
     {promptLang:'vi',prompt:'Ngày nào cậu ấy cũng học đến rất muộn, nên thi đỗ đại học không phải là ngẫu nhiên.',answer:'他每天都学到很晚，所以考上大学并非偶然。',answerPy:'Tā měi tiān dōu xué dào hěn wǎn, suǒyǐ kǎoshang dàxué bìngfēi ǒurán.',
      note:'并非偶然 = không phải ngẫu nhiên — 偶然 làm vị ngữ.',pair:'因为……所以……'}
   ]},

  {n:6,zh:'演变',py:'yǎnbiàn',pos:'Động từ',vn:'biến đổi, tiến hoá (qua thời gian dài)',hv:'diễn biến',em:'🔄',lesson:1,
   explain:['Phát triển, biến đổi dần dần qua một thời gian dài (lịch sử, chữ viết, phong tục…).'],
   usage:'演变过程, 演变成 / 为 + N, 历史演变. Văn viết, dùng cho quá trình dài; thay đổi nhỏ hằng ngày thì dùng 变.',
   collo:['演变过程','演变成','汉字的演变','历史演变'],
   ex_zh:'如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。',ex_py:'Rúguǒ liǎojiě Hànzì de láiyuán hé yǎnbiàn guòchéng, zài xuéxí tā jiù biàn de qīngsōng, róngyì.',ex_vn:'Nếu hiểu nguồn gốc và quá trình biến đổi của chữ Hán thì học nó sẽ trở nên nhẹ nhàng, dễ dàng.',
   exList:[
     {zh:'如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。',py:'Rúguǒ liǎojiě Hànzì de láiyuán hé yǎnbiàn guòchéng, zài xuéxí tā jiù biàn de qīngsōng, róngyì.',vn:'Nếu hiểu nguồn gốc và quá trình biến đổi của chữ Hán thì học nó sẽ trở nên nhẹ nhàng, dễ dàng.'},
     {zh:'“水”字从甲骨文演变成今天的楷书，经过了几千年。',py:'“Shuǐ” zì cóng jiǎgǔwén yǎnbiàn chéng jīntiān de kǎishū, jīngguòle jǐ qiān nián.',vn:'Chữ “thủy” từ giáp cốt văn biến đổi thành chữ khải ngày nay đã trải qua mấy nghìn năm.'},
     {zh:'网站上包含了每个汉字演变的全部字形。',py:'Wǎngzhàn shang bāohánle měi ge Hànzì yǎnbiàn de quánbù zìxíng.',vn:'Trang web có đủ mọi tự hình trong quá trình biến đổi của từng chữ Hán.'}
   ],
   colloFull:[
     {zh:'演变过程',py:'yǎnbiàn guòchéng',vn:'quá trình biến đổi'},
     {zh:'演变成',py:'yǎnbiàn chéng',vn:'biến đổi thành'},
     {zh:'汉字的演变',py:'Hànzì de yǎnbiàn',vn:'sự biến đổi của chữ Hán'},
     {zh:'历史演变',py:'lìshǐ yǎnbiàn',vn:'diễn biến lịch sử'}
   ],
   patterns:[
     {s:'A + 从…… + 演变成 + B',m:'A từ … dần biến đổi thành B'},
     {s:'N + 的演变过程',m:'Quá trình biến đổi của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong quá trình biến đổi, chữ Hán được viết ngày càng đơn giản.',answer:'在演变过程中，汉字被写得越来越简单。',answerPy:'Zài yǎnbiàn guòchéng zhōng, Hànzì bèi xiě de yuè lái yuè jiǎndān.',
      note:'在……过程中 = trong quá trình …',pair:'越来越'},
     {promptLang:'vi',prompt:'Thầy giáo giảng một lượt cho chúng tôi quá trình biến đổi của chữ “马”.',answer:'老师把“马”字的演变过程给我们讲了一遍。',answerPy:'Lǎoshī bǎ “mǎ” zì de yǎnbiàn guòchéng gěi wǒmen jiǎngle yí biàn.',
      note:'演变过程 làm tân ngữ đưa lên bằng 把.',pair:'把'}
   ]},

  {n:7,zh:'遗憾',py:'yíhàn',pos:'Tính từ / Danh từ',vn:'đáng tiếc, tiếc nuối; điều tiếc nuối',hv:'di hám',em:'😞',lesson:1,
   explain:['Tính từ: tiếc nuối vì sự việc không như ý (thường là điều khách quan, không hẳn do mình gây ra).','Danh từ: điều tiếc nuối, nỗi ân hận: 留下遗憾, 最大的遗憾.'],
   usage:'很遗憾, 遗憾地发现, 令人遗憾的是……, 留下遗憾, 感到遗憾. Dùng lịch sự khi báo tin không vui: 很遗憾，……',
   collo:['遗憾地发现','令人遗憾的是','留下遗憾','感到遗憾'],
   ex_zh:'但是他遗憾地发现，几乎没有一本英文书能充分解释汉字的字源。',ex_py:'Dànshì tā yíhàn de fāxiàn, jīhū méiyǒu yì běn Yīngwén shū néng chōngfèn jiěshì Hànzì de zìyuán.',ex_vn:'Nhưng anh ấy tiếc nuối nhận ra rằng hầu như không có cuốn sách tiếng Anh nào giải thích đầy đủ nguồn gốc của chữ Hán.',
   exList:[
     {zh:'但是他遗憾地发现，几乎没有一本英文书能充分解释汉字的字源。',py:'Dànshì tā yíhàn de fāxiàn, jīhū méiyǒu yì běn Yīngwén shū néng chōngfèn jiěshì Hànzì de zìyuán.',vn:'Nhưng anh ấy tiếc nuối nhận ra rằng hầu như không có cuốn sách tiếng Anh nào giải thích đầy đủ nguồn gốc của chữ Hán.'},
     {zh:'令人遗憾的是，中国至今还没有自己的国花。',py:'Lìng rén yíhàn de shì, Zhōngguó zhìjīn hái méiyǒu zìjǐ de guóhuā.',vn:'Điều đáng tiếc là đến nay Trung Quốc vẫn chưa có quốc hoa của riêng mình.'},
     {zh:'结论部分再完善一下，别留遗憾。',py:'Jiélùn bùfen zài wánshàn yíxià, bié liú yíhàn.',vn:'Phần kết luận hoàn thiện thêm chút nữa, đừng để lại điều gì tiếc nuối.'}
   ],
   colloFull:[
     {zh:'遗憾地发现',py:'yíhàn de fāxiàn',vn:'tiếc nuối nhận ra'},
     {zh:'令人遗憾的是',py:'lìng rén yíhàn de shì',vn:'điều đáng tiếc là'},
     {zh:'留下遗憾',py:'liúxià yíhàn',vn:'để lại tiếc nuối'},
     {zh:'感到遗憾',py:'gǎndào yíhàn',vn:'cảm thấy tiếc'},
     {zh:'最大的遗憾',py:'zuì dà de yíhàn',vn:'điều tiếc nuối lớn nhất'}
   ],
   patterns:[
     {s:'令人遗憾的是，……',m:'Điều đáng tiếc là …'},
     {s:'(别 / 不要) + 留(下) + 遗憾',m:'(Đừng) để lại tiếc nuối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rất tiếc, vé buổi hoà nhạc đã bị bán hết rồi.',answer:'很遗憾，音乐会的票已经被卖完了。',answerPy:'Hěn yíhàn, yīnyuèhuì de piào yǐjīng bèi màiwán le.',
      note:'很遗憾，…… — mở đầu lịch sự khi báo tin không vui.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đến Bắc Kinh, đó là điều tiếc nuối lớn nhất của tôi.',answer:'我从来没去过北京，这是我最大的遗憾。',answerPy:'Wǒ cónglái méi qùguo Běijīng, zhè shì wǒ zuì dà de yíhàn.',
      note:'遗憾 làm danh từ: 最大的遗憾.',pair:'从来没……过'}
   ]},

  {n:8,zh:'心脏',py:'xīnzàng',pos:'Danh từ',vn:'(trái) tim',hv:'tâm tạng',em:'❤️',lesson:1,
   explain:['Cơ quan bơm máu đi khắp cơ thể người và động vật.','Nghĩa bóng: trung tâm, bộ phận quan trọng nhất: 城市的心脏.'],
   usage:'心脏病 (bệnh tim), 得了心脏病, 心脏不好 (tim yếu), 心脏手术. Khẩu ngữ tả cảm xúc thì dùng 心 (心跳得很快).',
   collo:['心脏病','得了心脏病','心脏不好','城市的心脏'],
   ex_zh:'1994年，理查德得了心脏病。',ex_py:'Yī jiǔ jiǔ sì nián, Lǐchádé déle xīnzàngbìng.',ex_vn:'Năm 1994, Richard mắc bệnh tim.',
   exList:[
     {zh:'1994年，理查德得了心脏病。',py:'Yī jiǔ jiǔ sì nián, Lǐchádé déle xīnzàngbìng.',vn:'Năm 1994, Richard mắc bệnh tim.'},
     {zh:'爷爷心脏不好，不能太累。',py:'Yéye xīnzàng bù hǎo, bù néng tài lèi.',vn:'Ông nội tim yếu, không được để quá mệt.'},
     {zh:'天安门广场被称为北京的心脏。',py:'Tiān\'ānmén Guǎngchǎng bèi chēngwéi Běijīng de xīnzàng.',vn:'Quảng trường Thiên An Môn được gọi là trái tim của Bắc Kinh.'}
   ],
   colloFull:[
     {zh:'心脏病',py:'xīnzàngbìng',vn:'bệnh tim'},
     {zh:'得了心脏病',py:'déle xīnzàngbìng',vn:'mắc bệnh tim'},
     {zh:'心脏不好',py:'xīnzàng bù hǎo',vn:'tim yếu'},
     {zh:'城市的心脏',py:'chéngshì de xīnzàng',vn:'trái tim của thành phố'},
     {zh:'心脏手术',py:'xīnzàng shǒushù',vn:'phẫu thuật tim'}
   ],
   patterns:[
     {s:'Sub + 得了 + 心脏病',m:'Ai đó mắc bệnh tim'},
     {s:'Sub + 心脏不好',m:'Ai đó tim yếu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tim yếu, nên bác sĩ không cho ông hút thuốc.',answer:'爷爷心脏不好，所以医生不让他抽烟。',answerPy:'Yéye xīnzàng bù hǎo, suǒyǐ yīshēng bú ràng tā chōuyān.',
      note:'心脏不好 = tim yếu, không nói 心脏弱.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Từ khi mắc bệnh tim, ngày nào ông ấy cũng đi dạo.',answer:'自从得了心脏病，他每天都去散步。',answerPy:'Zìcóng déle xīnzàngbìng, tā měi tiān dōu qù sànbù.',
      note:'得 + 病: 得了心脏病 (mắc bệnh tim).',pair:'自从……'}
   ]},

  {n:9,zh:'思考',py:'sīkǎo',pos:'Động từ',vn:'suy nghĩ, suy ngẫm',hv:'tư khảo',em:'🤔',lesson:1,
   explain:['Suy nghĩ sâu sắc, chu đáo về một vấn đề (cuộc đời, ý nghĩa, cách giải quyết…).','Khác 考虑: 考虑 là cân nhắc để ra quyết định (让我考虑几天), còn 思考 là suy ngẫm sâu.'],
   usage:'思考 + 问题 / 人生; 认真 / 反复 / 独立思考; 让人思考. Trang trọng hơn 想.',
   collo:['思考人生','认真思考','反复思考','独立思考'],
   ex_zh:'那时，他开始思考自己的人生。',ex_py:'Nà shí, tā kāishǐ sīkǎo zìjǐ de rénshēng.',ex_vn:'Lúc đó, anh ấy bắt đầu suy ngẫm về cuộc đời mình.',
   exList:[
     {zh:'那时，他开始思考自己的人生。',py:'Nà shí, tā kāishǐ sīkǎo zìjǐ de rénshēng.',vn:'Lúc đó, anh ấy bắt đầu suy ngẫm về cuộc đời mình.'},
     {zh:'这个问题我反复思考了很久，还是没有答案。',py:'Zhège wèntí wǒ fǎnfù sīkǎole hěn jiǔ, háishi méiyǒu dá\'àn.',vn:'Vấn đề này tôi suy đi nghĩ lại rất lâu mà vẫn chưa có câu trả lời.'},
     {zh:'老师希望我们学会独立思考。',py:'Lǎoshī xīwàng wǒmen xuéhuì dúlì sīkǎo.',vn:'Thầy giáo mong chúng tôi học được cách tư duy độc lập.'}
   ],
   colloFull:[
     {zh:'思考人生',py:'sīkǎo rénshēng',vn:'suy ngẫm về cuộc đời'},
     {zh:'认真思考',py:'rènzhēn sīkǎo',vn:'suy nghĩ nghiêm túc'},
     {zh:'反复思考',py:'fǎnfù sīkǎo',vn:'suy đi nghĩ lại'},
     {zh:'独立思考',py:'dúlì sīkǎo',vn:'tư duy độc lập'},
     {zh:'耐心地思考',py:'nàixīn de sīkǎo',vn:'kiên nhẫn suy nghĩ'}
   ],
   patterns:[
     {s:'Sub + 认真 / 反复 + 思考 + O',m:'Suy nghĩ nghiêm túc / suy đi nghĩ lại về …'},
     {s:'……让人思考',m:'… khiến người ta phải suy ngẫm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này không chỉ cảm động mà còn khiến người ta suy ngẫm.',answer:'这个故事不仅很感人，也让人思考。',answerPy:'Zhège gùshi bùjǐn hěn gǎnrén, yě ràng rén sīkǎo.',
      note:'让人思考 = khiến người ta suy ngẫm.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ngay cả vấn đề đơn giản như vậy, cậu ấy cũng suy nghĩ rất lâu.',answer:'连这么简单的问题，他都思考了很久。',answerPy:'Lián zhème jiǎndān de wèntí, tā dōu sīkǎole hěn jiǔ.',
      note:'思考了很久: bổ ngữ thời lượng đứng sau 思考了.',pair:'连……都……'}
   ]},

  {n:10,zh:'抓紧',py:'zhuājǐn',pos:'Động từ',vn:'nắm chắc; tranh thủ, khẩn trương',hv:'trảo khẩn',em:'⏱️',lesson:1,
   explain:['Nắm chặt, không buông lỏng; hay dùng với thời gian: tranh thủ, khẩn trương làm gì.'],
   usage:'抓紧时间, 抓紧 + V (抓紧准备, 抓紧复习), 抓紧点儿. Hay đi cùng 尽快: 抓紧时间尽快…….',
   collo:['抓紧时间','抓紧准备','抓紧学习','抓紧点儿'],
   ex_zh:'如果我还能活一年，我要抓紧时间尽快把《说文解字》电脑化。',ex_py:'Rúguǒ wǒ hái néng huó yì nián, wǒ yào zhuājǐn shíjiān jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà.',ex_vn:'Nếu tôi còn sống được một năm, tôi phải tranh thủ thời gian số hoá 《Thuyết văn giải tự》 càng sớm càng tốt.',
   exList:[
     {zh:'如果我还能活一年，我要抓紧时间尽快把《说文解字》电脑化。',py:'Rúguǒ wǒ hái néng huó yì nián, wǒ yào zhuājǐn shíjiān jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà.',vn:'Nếu tôi còn sống được một năm, tôi phải tranh thủ thời gian số hoá 《Thuyết văn giải tự》 càng sớm càng tốt.'},
     {zh:'你抓紧准备一下，争取下周把这个项目谈下来。',py:'Nǐ zhuājǐn zhǔnbèi yíxià, zhēngqǔ xià zhōu bǎ zhège xiàngmù tán xialai.',vn:'Anh khẩn trương chuẩn bị đi, cố gắng tuần sau đàm phán xong dự án này.'},
     {zh:'离考试只有一个月了，大家要抓紧时间复习。',py:'Lí kǎoshì zhǐ yǒu yí ge yuè le, dàjiā yào zhuājǐn shíjiān fùxí.',vn:'Chỉ còn một tháng nữa là thi, mọi người phải tranh thủ thời gian ôn tập.'}
   ],
   colloFull:[
     {zh:'抓紧时间',py:'zhuājǐn shíjiān',vn:'tranh thủ thời gian'},
     {zh:'抓紧准备',py:'zhuājǐn zhǔnbèi',vn:'khẩn trương chuẩn bị'},
     {zh:'抓紧学习',py:'zhuājǐn xuéxí',vn:'tranh thủ học'},
     {zh:'抓紧点儿',py:'zhuājǐn diǎnr',vn:'khẩn trương lên'},
     {zh:'抓紧机会',py:'zhuājǐn jīhuì',vn:'nắm chắc cơ hội'}
   ],
   patterns:[
     {s:'抓紧时间 + V',m:'Tranh thủ thời gian làm gì'},
     {s:'Sub + 抓紧 + V + 一下',m:'Khẩn trương làm việc gì đó'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sắp hết giờ rồi, chúng ta phải tranh thủ thời gian làm xong bài tập.',answer:'快到时间了，我们要抓紧时间把作业做完。',answerPy:'Kuài dào shíjiān le, wǒmen yào zhuājǐn shíjiān bǎ zuòyè zuòwán.',
      note:'抓紧时间 + 把 … V完.',pair:'把'},
     {promptLang:'vi',prompt:'Cô ấy vừa về đến nhà là tranh thủ thời gian học từ mới.',answer:'她一回到家就抓紧时间学习生词。',answerPy:'Tā yì huídào jiā jiù zhuājǐn shíjiān xuéxí shēngcí.',
      note:'抓紧时间 + V: tranh thủ làm gì.',pair:'一……就……'}
   ]},

  {n:11,zh:'尽快',py:'jǐnkuài',pos:'Phó từ',vn:'càng sớm càng tốt, nhanh nhất có thể',hv:'tận khoái',em:'⚡',lesson:1,
   explain:['Phó từ: cố gắng làm nhanh nhất có thể (尽量加快).','Chú ý đọc jǐn (thanh 3) như trong 尽管, 尽量 — khác 尽力 (jìnlì, bài 7).'],
   usage:'尽快 + V: 尽快回复, 尽快解决, 尽快把……V. Đứng sau chủ ngữ, trước động từ; hay dùng khi yêu cầu, lên kế hoạch.',
   collo:['尽快回复','尽快解决','尽快完成','尽快通知'],
   ex_zh:'新产品出了点儿问题，你和严经理尽快商量一下这事。',ex_py:'Xīn chǎnpǐn chūle diǎnr wèntí, nǐ hé Yán jīnglǐ jǐnkuài shāngliang yíxià zhè shì.',ex_vn:'Sản phẩm mới có chút vấn đề, anh với giám đốc Nghiêm bàn ngay việc này đi.',
   exList:[
     {zh:'新产品出了点儿问题，你和严经理尽快商量一下这事。',py:'Xīn chǎnpǐn chūle diǎnr wèntí, nǐ hé Yán jīnglǐ jǐnkuài shāngliang yíxià zhè shì.',vn:'Sản phẩm mới có chút vấn đề, anh với giám đốc Nghiêm bàn ngay việc này đi.'},
     {zh:'趁这两天天气好，你尽快把过季的衣服洗一洗，收起来。',py:'Chèn zhè liǎng tiān tiānqì hǎo, nǐ jǐnkuài bǎ guò jì de yīfu xǐ yi xǐ, shōu qilai.',vn:'Nhân hai hôm nay trời đẹp, con giặt ngay quần áo trái mùa rồi cất đi.'},
     {zh:'收到邮件后，请尽快回复。',py:'Shōudào yóujiàn hòu, qǐng jǐnkuài huífù.',vn:'Sau khi nhận được thư, xin hãy trả lời sớm nhất có thể.'}
   ],
   colloFull:[
     {zh:'尽快回复',py:'jǐnkuài huífù',vn:'trả lời sớm nhất có thể'},
     {zh:'尽快解决',py:'jǐnkuài jiějué',vn:'giải quyết càng sớm càng tốt'},
     {zh:'尽快完成',py:'jǐnkuài wánchéng',vn:'hoàn thành càng sớm càng tốt'},
     {zh:'尽快通知',py:'jǐnkuài tōngzhī',vn:'thông báo sớm'},
     {zh:'请尽快',py:'qǐng jǐnkuài',vn:'xin vui lòng sớm …'}
   ],
   patterns:[
     {s:'Sub + 尽快 + V',m:'Ai đó làm gì càng sớm càng tốt'},
     {s:'Sub + 尽快 + 把 + O + V……',m:'Nhanh chóng xử lý việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có tin tức là xin anh thông báo cho tôi càng sớm càng tốt.',answer:'一有消息就请你尽快通知我。',answerPy:'Yì yǒu xiāoxi jiù qǐng nǐ jǐnkuài tōngzhī wǒ.',
      note:'尽快 đứng ngay trước động từ 通知.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi phải làm xong bài tập càng sớm càng tốt.',answer:'我要尽快把作业做完。',answerPy:'Wǒ yào jǐnkuài bǎ zuòyè zuòwán.',
      note:'尽快 đứng trước 把.',pair:'把'}
   ]},

  {n:12,zh:'经典',py:'jīngdiǎn',pos:'Danh từ / Tính từ',vn:'tác phẩm kinh điển; kinh điển',hv:'kinh điển',em:'📜',lesson:1,
   explain:['Danh từ: sách, tác phẩm có giá trị lâu đời, mang tính mẫu mực.','Tính từ: tiêu biểu, có giá trị bền lâu: 经典电影, 太经典了.'],
   usage:'Danh từ: 古代经典, 一部经典. Tính từ làm định ngữ: 经典作品, 经典歌曲; làm vị ngữ: 这首歌太经典了.',
   collo:['古汉字经典','经典作品','经典电影','一部经典'],
   ex_zh:'就这样，一部部古汉字经典进入他的资料库。',ex_py:'Jiù zhèyàng, yí bùbù gǔ Hànzì jīngdiǎn jìnrù tā de zīliàokù.',ex_vn:'Cứ thế, từng bộ kinh điển về chữ Hán cổ lần lượt vào kho dữ liệu của anh ấy.',
   exList:[
     {zh:'就这样，一部部古汉字经典进入他的资料库。',py:'Jiù zhèyàng, yí bùbù gǔ Hànzì jīngdiǎn jìnrù tā de zīliàokù.',vn:'Cứ thế, từng bộ kinh điển về chữ Hán cổ lần lượt vào kho dữ liệu của anh ấy.'},
     {zh:'《西游记》是中国文学的经典作品。',py:'《Xīyóujì》 shì Zhōngguó wénxué de jīngdiǎn zuòpǐn.',vn:'《Tây du ký》 là tác phẩm kinh điển của văn học Trung Quốc.'},
     {zh:'这首老歌太经典了，我爸妈都会唱。',py:'Zhè shǒu lǎo gē tài jīngdiǎn le, wǒ bà mā dōu huì chàng.',vn:'Bài hát cũ này kinh điển quá, bố mẹ tôi đều biết hát.'}
   ],
   colloFull:[
     {zh:'古汉字经典',py:'gǔ Hànzì jīngdiǎn',vn:'kinh điển về chữ Hán cổ'},
     {zh:'经典作品',py:'jīngdiǎn zuòpǐn',vn:'tác phẩm kinh điển'},
     {zh:'经典电影',py:'jīngdiǎn diànyǐng',vn:'phim kinh điển'},
     {zh:'一部经典',py:'yí bù jīngdiǎn',vn:'một bộ kinh điển'},
     {zh:'太经典了',py:'tài jīngdiǎn le',vn:'kinh điển quá'}
   ],
   patterns:[
     {s:'经典 + N (作品 / 电影 / 歌曲)',m:'… kinh điển'},
     {s:'N + 太经典了',m:'… kinh điển quá (khen)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này tôi xem đến mấy lần rồi, đúng là kinh điển quá.',answer:'这部电影我已经看了好几遍了，真是太经典了。',answerPy:'Zhè bù diànyǐng wǒ yǐjīng kànle hǎo jǐ biàn le, zhēn shì tài jīngdiǎn le.',
      note:'经典 làm vị ngữ: 太经典了.',pair:'V + 了 + số lần + 了'},
     {promptLang:'vi',prompt:'Những tác phẩm kinh điển này đã được dịch ra rất nhiều thứ tiếng.',answer:'这些经典作品被翻译成了很多种语言。',answerPy:'Zhèxiē jīngdiǎn zuòpǐn bèi fānyì chéngle hěn duō zhǒng yǔyán.',
      note:'经典 làm định ngữ: 经典作品.',pair:'被'}
   ]},

  {n:13,zh:'库',py:'kù',pos:'Danh từ',vn:'kho',hv:'khố',em:'🗄️',lesson:1,
   explain:['Nơi cất giữ đồ vật, hàng hoá: 仓库, 车库.','Nghĩa mở rộng: kho lưu trữ dữ liệu: 资料库, 数据库.'],
   usage:'Hay làm thành phần sau của từ ghép: 资料库, 数据库, 仓库, 车库, 水库. Ít đứng một mình.',
   collo:['资料库','数据库','车库','仓库'],
   ex_zh:'一部部古汉字经典进入他的资料库。',ex_py:'Yí bùbù gǔ Hànzì jīngdiǎn jìnrù tā de zīliàokù.',ex_vn:'Từng bộ kinh điển về chữ Hán cổ lần lượt vào kho tư liệu của anh ấy.',
   exList:[
     {zh:'一部部古汉字经典进入他的资料库。',py:'Yí bùbù gǔ Hànzì jīngdiǎn jìnrù tā de zīliàokù.',vn:'Từng bộ kinh điển về chữ Hán cổ lần lượt vào kho tư liệu của anh ấy.'},
     {zh:'他把车停在楼下的车库里了。',py:'Tā bǎ chē tíng zài lóu xià de chēkù li le.',vn:'Anh ấy đỗ xe trong gara dưới tầng.'},
     {zh:'这个网站的数据库里有近10万个汉字。',py:'Zhège wǎngzhàn de shùjùkù li yǒu jìn shí wàn ge Hànzì.',vn:'Cơ sở dữ liệu của trang web này có gần 100 nghìn chữ Hán.'}
   ],
   colloFull:[
     {zh:'资料库',py:'zīliàokù',vn:'kho tư liệu'},
     {zh:'数据库',py:'shùjùkù',vn:'cơ sở dữ liệu'},
     {zh:'车库',py:'chēkù',vn:'nhà để xe, gara'},
     {zh:'仓库',py:'cāngkù',vn:'nhà kho'},
     {zh:'水库',py:'shuǐkù',vn:'hồ chứa nước'}
   ],
   patterns:[
     {s:'N + 库 (资料库 / 数据库 / 车库)',m:'Kho chứa …'},
     {s:'把 + O + 放进 / 输入 + ……库',m:'Đưa cái gì vào kho'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã đưa hết những tư liệu này vào kho tư liệu rồi.',answer:'我已经把这些资料都放进资料库了。',answerPy:'Wǒ yǐjīng bǎ zhèxiē zīliào dōu fàngjìn zīliàokù le.',
      note:'资料库 = kho tư liệu (库 làm hậu tố).',pair:'把'},
     {promptLang:'vi',prompt:'Xe của bố đã được đỗ vào gara rồi.',answer:'爸爸的车被停在车库里了。',answerPy:'Bàba de chē bèi tíng zài chēkù li le.',
      note:'车库 = gara, nhà để xe.',pair:'被'}
   ]},

  {n:14,zh:'输入',py:'shūrù',pos:'Động từ',vn:'nhập, đưa (dữ liệu) vào máy tính',hv:'thâu nhập',em:'⌨️',lesson:1,
   explain:['Đưa chữ, số liệu, thông tin vào máy tính, điện thoại.','Nghĩa rộng: đưa từ bên ngoài vào (输入人才); trái nghĩa 输出.'],
   usage:'输入 + 电脑 / 密码 / 汉字; 把……输入电脑; 输入法 (bộ gõ). 输 ở đây là “chuyển đi”, không phải “thua”.',
   collo:['输入电脑','输入密码','输入汉字','输入法'],
   ex_zh:'仅仅复印、整理和把这些资料输入电脑就用了8年。',ex_py:'Jǐnjǐn fùyìn, zhěnglǐ hé bǎ zhèxiē zīliào shūrù diànnǎo jiù yòngle bā nián.',ex_vn:'Chỉ riêng việc photo, sắp xếp và nhập những tư liệu này vào máy tính đã mất 8 năm.',
   exList:[
     {zh:'仅仅复印、整理和把这些资料输入电脑就用了8年。',py:'Jǐnjǐn fùyìn, zhěnglǐ hé bǎ zhèxiē zīliào shūrù diànnǎo jiù yòngle bā nián.',vn:'Chỉ riêng việc photo, sắp xếp và nhập những tư liệu này vào máy tính đã mất 8 năm.'},
     {zh:'我在网上查询话费，它要我输入密码。',py:'Wǒ zài wǎng shang cháxún huàfèi, tā yào wǒ shūrù mìmǎ.',vn:'Tôi tra cước điện thoại trên mạng, nó bắt tôi nhập mật khẩu.'},
     {zh:'用拼音输入法输入汉字很方便。',py:'Yòng pīnyīn shūrùfǎ shūrù Hànzì hěn fāngbiàn.',vn:'Dùng bộ gõ pinyin để gõ chữ Hán rất tiện.'}
   ],
   colloFull:[
     {zh:'输入电脑',py:'shūrù diànnǎo',vn:'nhập vào máy tính'},
     {zh:'输入密码',py:'shūrù mìmǎ',vn:'nhập mật khẩu'},
     {zh:'输入汉字',py:'shūrù Hànzì',vn:'gõ chữ Hán'},
     {zh:'输入法',py:'shūrùfǎ',vn:'bộ gõ'},
     {zh:'输入手机号码',py:'shūrù shǒujī hàomǎ',vn:'nhập số điện thoại'}
   ],
   patterns:[
     {s:'把 + O + 输入 + 电脑 / 手机',m:'Nhập cái gì vào máy tính / điện thoại'},
     {s:'输入 + 密码 / 号码',m:'Nhập mật khẩu / số'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nhập sai mật khẩu rồi, nhập lại lần nữa đi.',answer:'你把密码输错了，再输入一次吧。',answerPy:'Nǐ bǎ mìmǎ shūcuò le, zài shūrù yí cì ba.',
      note:'输错 = nhập sai; 再输入一次 = nhập lại một lần.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi vừa nhập số điện thoại là đăng nhập được ngay.',answer:'我一输入手机号码就能登录了。',answerPy:'Wǒ yì shūrù shǒujī hàomǎ jiù néng dēnglù le.',
      note:'输入 + 号码.',pair:'一……就……'}
   ]},

  {n:15,zh:'元旦',py:'Yuándàn',pos:'Danh từ',vn:'Tết Dương lịch (ngày 1/1)',hv:'nguyên đán',em:'🎆',lesson:1,
   explain:['Ngày đầu tiên của năm dương lịch (1 tháng 1).','BẪY: tiếng Việt “Tết Nguyên Đán” là Tết âm lịch, nhưng 元旦 trong tiếng Trung hiện đại là Tết DƯƠNG lịch; Tết âm lịch là 春节.'],
   usage:'元旦 + 晚会 / 假期; 元旦快乐! Làm trạng ngữ thời gian: 2002年元旦，…….',
   collo:['元旦晚会','元旦假期','元旦快乐','过元旦'],
   ex_zh:'2002年元旦，战胜疾病的他决定把自己创办的网站公开。',ex_py:'Èr líng líng èr nián Yuándàn, zhànshèng jíbìng de tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',ex_vn:'Tết Dương lịch năm 2002, đã chiến thắng bệnh tật, anh ấy quyết định công khai trang web do mình lập ra.',
   exList:[
     {zh:'2002年元旦，战胜疾病的他决定把自己创办的网站公开。',py:'Èr líng líng èr nián Yuándàn, zhànshèng jíbìng de tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',vn:'Tết Dương lịch năm 2002, đã chiến thắng bệnh tật, anh ấy quyết định công khai trang web do mình lập ra.'},
     {zh:'元旦晚会上，我们班表演了一个小品。',py:'Yuándàn wǎnhuì shang, wǒmen bān biǎoyǎnle yí ge xiǎopǐn.',vn:'Trong đêm liên hoan Tết Dương lịch, lớp chúng tôi diễn một tiểu phẩm.'},
     {zh:'元旦只放一天假，春节才放长假。',py:'Yuándàn zhǐ fàng yì tiān jià, Chūnjié cái fàng chángjià.',vn:'Tết Dương lịch chỉ nghỉ một ngày, Tết âm lịch mới được nghỉ dài.'}
   ],
   colloFull:[
     {zh:'元旦晚会',py:'Yuándàn wǎnhuì',vn:'đêm liên hoan Tết Dương lịch'},
     {zh:'元旦假期',py:'Yuándàn jiàqī',vn:'kỳ nghỉ Tết Dương lịch'},
     {zh:'元旦快乐',py:'Yuándàn kuàilè',vn:'chúc mừng năm mới (1/1)'},
     {zh:'过元旦',py:'guò Yuándàn',vn:'đón Tết Dương lịch'}
   ],
   patterns:[
     {s:'……年元旦，Sub + V……',m:'Vào ngày 1/1 năm …, ai đó …'},
     {s:'✗ 元旦 = Tết âm lịch → ✓ 春节',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết Dương lịch năm nay, chúng tôi đón ở nhà bà nội.',answer:'今年的元旦，我们是在奶奶家过的。',answerPy:'Jīnnián de Yuándàn, wǒmen shì zài nǎinai jiā guò de.',
      note:'过元旦 = đón Tết Dương lịch; tách ra để nhấn mạnh nơi chốn bằng 是……的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tết Dương lịch vừa đến, phố xá đã nhộn nhịp hẳn lên.',answer:'元旦一到，街上就热闹起来了。',answerPy:'Yuándàn yí dào, jiē shang jiù rènao qilai le.',
      note:'元旦 làm chủ ngữ của 到.',pair:'一……就……'}
   ]},

  {n:16,zh:'疾病',py:'jíbìng',pos:'Danh từ',vn:'bệnh tật',hv:'tật bệnh',em:'🦠',lesson:1,
   explain:['Các loại bệnh nói chung — từ trang trọng, văn viết (khẩu ngữ nói 病).'],
   usage:'战胜 / 预防 / 治疗 + 疾病; 一种疾病, 各种疾病. Là danh từ khái quát, không dùng 个 (không nói 得了一个疾病 → 得了一种病).',
   collo:['战胜疾病','预防疾病','治疗疾病','各种疾病'],
   ex_zh:'战胜疾病的他决定把自己创办的网站公开。',ex_py:'Zhànshèng jíbìng de tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',ex_vn:'Đã chiến thắng bệnh tật, anh ấy quyết định công khai trang web do mình lập ra.',
   exList:[
     {zh:'战胜疾病的他决定把自己创办的网站公开。',py:'Zhànshèng jíbìng de tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',vn:'Đã chiến thắng bệnh tật, anh ấy quyết định công khai trang web do mình lập ra.'},
     {zh:'经常锻炼身体可以预防很多疾病。',py:'Jīngcháng duànliàn shēntǐ kěyǐ yùfáng hěn duō jíbìng.',vn:'Thường xuyên rèn luyện thân thể có thể phòng được nhiều bệnh.'},
     {zh:'心脏病是一种很危险的疾病。',py:'Xīnzàngbìng shì yì zhǒng hěn wēixiǎn de jíbìng.',vn:'Bệnh tim là một loại bệnh rất nguy hiểm.'}
   ],
   colloFull:[
     {zh:'战胜疾病',py:'zhànshèng jíbìng',vn:'chiến thắng bệnh tật'},
     {zh:'预防疾病',py:'yùfáng jíbìng',vn:'phòng bệnh'},
     {zh:'治疗疾病',py:'zhìliáo jíbìng',vn:'chữa bệnh'},
     {zh:'各种疾病',py:'gè zhǒng jíbìng',vn:'các loại bệnh tật'}
   ],
   patterns:[
     {s:'战胜 / 预防 / 治疗 + 疾病',m:'Chiến thắng / phòng / chữa bệnh tật'},
     {s:'一种 + Adj + 的疾病',m:'Một loại bệnh …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần ăn uống lành mạnh thì có thể phòng được nhiều bệnh tật.',answer:'只要饮食健康，就能预防很多疾病。',answerPy:'Zhǐyào yǐnshí jiànkāng, jiù néng yùfáng hěn duō jíbìng.',
      note:'预防疾病 = phòng bệnh.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy bệnh tật khiến ông ấy rất đau đớn, nhưng ông ấy chưa bao giờ bỏ cuộc.',answer:'虽然疾病让他很痛苦，但是他从来没放弃过。',answerPy:'Suīrán jíbìng ràng tā hěn tòngkǔ, dànshì tā cónglái méi fàngqìguo.',
      note:'疾病 làm chủ ngữ của câu kiêm ngữ 让.',pair:'虽然……但是……'}
   ]},

  {n:17,zh:'创办',py:'chuàngbàn',pos:'Động từ',vn:'sáng lập, lập ra',hv:'sáng biện',em:'🏗️',lesson:1,
   explain:['Bắt đầu lập ra và gây dựng một cơ sở (trường học, công ty, tạp chí, trang web…).'],
   usage:'创办 + 学校 / 公司 / 网站 / 杂志; 自己创办的 + N. Tân ngữ là một cơ sở, tổ chức — không nói 创办计划.',
   collo:['创办网站','创办学校','创办公司','自己创办的'],
   ex_zh:'汉字叔叔花光全部积蓄创办了这个网站。',ex_py:'Hànzì shūshu huāguāng quánbù jīxù chuàngbànle zhège wǎngzhàn.',ex_vn:'Chú Chữ Hán tiêu sạch toàn bộ tiền tiết kiệm để lập ra trang web này.',
   exList:[
     {zh:'汉字叔叔花光全部积蓄创办了这个网站。',py:'Hànzì shūshu huāguāng quánbù jīxù chuàngbànle zhège wǎngzhàn.',vn:'Chú Chữ Hán tiêu sạch toàn bộ tiền tiết kiệm để lập ra trang web này.'},
     {zh:'他决定把自己创办的网站公开。',py:'Tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',vn:'Anh ấy quyết định công khai trang web do mình lập ra.'},
     {zh:'这所学校是一百年前创办的。',py:'Zhè suǒ xuéxiào shì yìbǎi nián qián chuàngbàn de.',vn:'Ngôi trường này được thành lập từ một trăm năm trước.'}
   ],
   colloFull:[
     {zh:'创办网站',py:'chuàngbàn wǎngzhàn',vn:'lập trang web'},
     {zh:'创办学校',py:'chuàngbàn xuéxiào',vn:'thành lập trường học'},
     {zh:'创办公司',py:'chuàngbàn gōngsī',vn:'thành lập công ty'},
     {zh:'自己创办的',py:'zìjǐ chuàngbàn de',vn:'do chính mình sáng lập'},
     {zh:'创办杂志',py:'chuàngbàn zázhì',vn:'sáng lập tạp chí'}
   ],
   patterns:[
     {s:'Sub + 创办(了) + 学校 / 公司 / 网站',m:'Ai đó lập ra …'},
     {s:'……是 + thời gian / người + 创办的',m:'… được (ai) thành lập (khi nào)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này là do hai sinh viên đại học thành lập.',answer:'这家公司是两个大学生创办的。',answerPy:'Zhè jiā gōngsī shì liǎng ge dàxuéshēng chuàngbàn de.',
      note:'是……创办的 nhấn mạnh người sáng lập.',pair:'是……的'},
     {promptLang:'vi',prompt:'Để lập ra ngôi trường này, ông ấy đã tiêu sạch toàn bộ số tiền.',answer:'为了创办这所学校，他把所有的钱都花光了。',answerPy:'Wèile chuàngbàn zhè suǒ xuéxiào, tā bǎ suǒyǒu de qián dōu huāguāng le.',
      note:'创办 + 学校; 花光 = tiêu sạch (câu bài khoá: 花光全部积蓄).',pair:'把'}
   ]},

  {n:18,zh:'公开',py:'gōngkāi',pos:'Động từ / Tính từ',vn:'công bố, công khai',hv:'công khai',em:'📢',lesson:1,
   explain:['Động từ: làm cho điều vốn kín trở thành ai cũng biết: 把网站公开, 公开成绩.','Tính từ: không giấu giếm, ai cũng biết: 公开的秘密, 公开道歉.'],
   usage:'Động từ: 公开 + O, 把 + O + 公开. Tính từ: 公开的 + 文件 / 身份 / 秘密 / 活动 / 行动 (bảng 词语搭配); 公开 + V (公开道歉).',
   collo:['把网站公开','公开的秘密','公开的文件','公开道歉'],
   ex_zh:'2002年元旦，他决定把自己创办的网站公开。',ex_py:'Èr líng líng èr nián Yuándàn, tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',ex_vn:'Tết Dương lịch năm 2002, anh ấy quyết định công khai trang web do mình lập ra.',
   exList:[
     {zh:'2002年元旦，他决定把自己创办的网站公开。',py:'Èr líng líng èr nián Yuándàn, tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi.',vn:'Tết Dương lịch năm 2002, anh ấy quyết định công khai trang web do mình lập ra.'},
     {zh:'林峰与刘医生的恋情，在医院里已经是公开的秘密了。',py:'Lín Fēng yǔ Liú yīshēng de liànqíng, zài yīyuàn li yǐjīng shì gōngkāi de mìmì le.',vn:'Chuyện tình của Lâm Phong và bác sĩ Lưu ở bệnh viện đã là bí mật mà ai cũng biết.'},
     {zh:'这次考试的成绩下周公开。',py:'Zhè cì kǎoshì de chéngjì xià zhōu gōngkāi.',vn:'Điểm của kỳ thi này tuần sau sẽ công bố.'}
   ],
   colloFull:[
     {zh:'把网站公开',py:'bǎ wǎngzhàn gōngkāi',vn:'công khai trang web'},
     {zh:'公开的秘密',py:'gōngkāi de mìmì',vn:'bí mật ai cũng biết'},
     {zh:'公开的文件',py:'gōngkāi de wénjiàn',vn:'văn bản công khai'},
     {zh:'公开道歉',py:'gōngkāi dàoqiàn',vn:'xin lỗi công khai'},
     {zh:'公开的身份',py:'gōngkāi de shēnfen',vn:'thân phận công khai'}
   ],
   patterns:[
     {s:'把 + O + 公开',m:'Công khai / công bố cái gì'},
     {s:'公开的 + 秘密 / 文件 / 身份',m:'… công khai, ai cũng biết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện anh ấy thích cô ấy đã là bí mật ai cũng biết rồi.',answer:'他喜欢她这件事，已经是公开的秘密了。',answerPy:'Tā xǐhuan tā zhè jiàn shì, yǐjīng shì gōngkāi de mìmì le.',
      note:'公开的秘密 = “bí mật công khai”, ai cũng biết.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Nhà trường đã công bố kết quả thi lên mạng.',answer:'学校把考试结果公开在网上了。',answerPy:'Xuéxiào bǎ kǎoshì jiéguǒ gōngkāi zài wǎng shang le.',
      note:'公开 làm động từ: 把 + O + 公开 + 在…….',pair:'把'}
   ]},

  {n:19,zh:'最初',py:'zuìchū',pos:'Danh từ',vn:'lúc đầu, ban đầu',hv:'tối sơ',em:'🌱',lesson:1,
   explain:['Thời kỳ đầu tiên, lúc mới bắt đầu.','Khác 当初: 当初 = “hồi ấy, lúc đó” khi nhắc lại một việc đã qua (thường kèm ý so sánh, hối tiếc); 最初 chỉ thuần là giai đoạn đầu tiên.'],
   usage:'最初 + 的 + N (最初的想法, 最初的文字); làm trạng ngữ đầu câu (最初，……，后来……); 像……最初那样.',
   collo:['最初的想法','最初的文字','最初那样','最初的梦想'],
   ex_zh:'让更多喜欢中文的人在学习汉字时，不再像他最初那样学得那么痛苦。',ex_py:'Ràng gèng duō xǐhuan Zhōngwén de rén zài xuéxí Hànzì shí, bú zài xiàng tā zuìchū nàyàng xué de nàme tòngkǔ.',ex_vn:'Để nhiều người yêu tiếng Trung hơn khi học chữ Hán không còn phải học khổ sở như anh ấy thuở ban đầu.',
   exList:[
     {zh:'让更多喜欢中文的人在学习汉字时，不再像他最初那样学得那么痛苦。',py:'Ràng gèng duō xǐhuan Zhōngwén de rén zài xuéxí Hànzì shí, bú zài xiàng tā zuìchū nàyàng xué de nàme tòngkǔ.',vn:'Để nhiều người yêu tiếng Trung hơn khi học chữ Hán không còn phải học khổ sở như anh ấy thuở ban đầu.'},
     {zh:'有文字学家指出，最初的文字就是可以读出来的图画。',py:'Yǒu wénzìxuéjiā zhǐchū, zuìchū de wénzì jiù shì kěyǐ dú chulai de túhuà.',vn:'Có nhà văn tự học chỉ ra rằng chữ viết thuở ban đầu chính là những bức tranh đọc lên được.'},
     {zh:'最初我一个汉字也不认识，现在能看中文小说了。',py:'Zuìchū wǒ yí ge Hànzì yě bú rènshi, xiànzài néng kàn Zhōngwén xiǎoshuō le.',vn:'Lúc đầu tôi một chữ Hán cũng không biết, bây giờ đã đọc được tiểu thuyết tiếng Trung.'}
   ],
   colloFull:[
     {zh:'最初的想法',py:'zuìchū de xiǎngfǎ',vn:'ý định ban đầu'},
     {zh:'最初的文字',py:'zuìchū de wénzì',vn:'chữ viết thuở ban đầu'},
     {zh:'最初那样',py:'zuìchū nàyàng',vn:'như lúc đầu'},
     {zh:'最初的梦想',py:'zuìchū de mèngxiǎng',vn:'ước mơ ban đầu'},
     {zh:'最初的时候',py:'zuìchū de shíhou',vn:'lúc mới đầu'}
   ],
   patterns:[
     {s:'最初，……；后来 / 现在，……',m:'Lúc đầu …; về sau / bây giờ …'},
     {s:'最初的 + N',m:'… ban đầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc đầu tôi không thích môn vật lý, về sau càng học càng thấy thú vị.',answer:'最初我不喜欢物理，后来越学越觉得有意思。',answerPy:'Zuìchū wǒ bù xǐhuan wùlǐ, hòulái yuè xué yuè juéde yǒu yìsi.',
      note:'最初…… 后来…… đối chiếu lúc đầu và về sau.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Dù gặp khó khăn gì, cô ấy cũng không quên ước mơ ban đầu.',answer:'不管遇到什么困难，她都没有忘记最初的梦想。',answerPy:'Bùguǎn yùdào shénme kùnnan, tā dōu méiyǒu wàngjì zuìchū de mèngxiǎng.',
      note:'最初的梦想 = ước mơ ban đầu.',pair:'不管……都……'}
   ]},

  {n:20,zh:'痛苦',py:'tòngkǔ',pos:'Tính từ',vn:'đau khổ, đau đớn',hv:'thống khổ',em:'😣',lesson:1,
   explain:['Đau đớn, khổ sở về thể xác hoặc tinh thần.','Cũng dùng như danh từ: nỗi đau khổ (减少痛苦).'],
   usage:'很痛苦; làm bổ ngữ trạng thái: 学得很痛苦; định ngữ: 痛苦的回忆; 感到痛苦. Mức độ nặng hơn 难过.',
   collo:['学得那么痛苦','非常痛苦','痛苦的回忆','感到痛苦'],
   ex_zh:'他希望别人学习汉字时，不再像他最初那样学得那么痛苦。',ex_py:'Tā xīwàng biéren xuéxí Hànzì shí, bú zài xiàng tā zuìchū nàyàng xué de nàme tòngkǔ.',ex_vn:'Anh ấy mong người khác khi học chữ Hán không còn phải học khổ sở như anh ấy lúc đầu.',
   exList:[
     {zh:'他希望别人学习汉字时，不再像他最初那样学得那么痛苦。',py:'Tā xīwàng biéren xuéxí Hànzì shí, bú zài xiàng tā zuìchū nàyàng xué de nàme tòngkǔ.',vn:'Anh ấy mong người khác khi học chữ Hán không còn phải học khổ sở như anh ấy lúc đầu.'},
     {zh:'失去亲人是一件非常痛苦的事。',py:'Shīqù qīnrén shì yí jiàn fēicháng tòngkǔ de shì.',vn:'Mất đi người thân là một chuyện vô cùng đau khổ.'},
     {zh:'别再想那些痛苦的回忆了。',py:'Bié zài xiǎng nàxiē tòngkǔ de huíyì le.',vn:'Đừng nghĩ đến những ký ức đau buồn ấy nữa.'}
   ],
   colloFull:[
     {zh:'学得那么痛苦',py:'xué de nàme tòngkǔ',vn:'học khổ sở đến thế'},
     {zh:'非常痛苦',py:'fēicháng tòngkǔ',vn:'vô cùng đau khổ'},
     {zh:'痛苦的回忆',py:'tòngkǔ de huíyì',vn:'ký ức đau buồn'},
     {zh:'感到痛苦',py:'gǎndào tòngkǔ',vn:'cảm thấy đau khổ'},
     {zh:'减少痛苦',py:'jiǎnshǎo tòngkǔ',vn:'giảm bớt đau đớn'}
   ],
   patterns:[
     {s:'V + 得 + (很 / 那么) + 痛苦',m:'Làm gì một cách khổ sở'},
     {s:'……让 + người + 很痛苦',m:'… khiến ai đó rất đau khổ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước đây tôi học từ mới rất khổ sở, bây giờ thấy ngày càng nhẹ nhàng.',answer:'以前我学生词学得很痛苦，现在觉得越来越轻松了。',answerPy:'Yǐqián wǒ xué shēngcí xué de hěn tòngkǔ, xiànzài juéde yuè lái yuè qīngsōng le.',
      note:'痛苦 làm bổ ngữ trạng thái: 学得很痛苦.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy quá trình chữa bệnh rất đau đớn, nhưng cô ấy chưa từng khóc.',answer:'虽然治病的过程很痛苦，但是她从来没哭过。',answerPy:'Suīrán zhì bìng de guòchéng hěn tòngkǔ, dànshì tā cónglái méi kūguo.',
      note:'痛苦 làm vị ngữ: 过程很痛苦.',pair:'从来没……过'}
   ]},

  {n:21,zh:'微博',py:'wēibó',pos:'Danh từ',vn:'Weibo, tiểu blog',hv:'vi bác',em:'📱',lesson:1,
   explain:['Mạng xã hội dạng tiểu blog ở Trung Quốc (Weibo), mỗi bài đăng ngắn; cũng chỉ một bài đăng trên đó.','微 = nhỏ, 博 = 博客 (blog) → blog nhỏ.'],
   usage:'在微博上, 放到 / 发到微博上, 发微博 (đăng Weibo), 刷微博 (lướt Weibo); lượng từ 条: 一条微博.',
   collo:['放到微博上','发微博','刷微博','一条微博'],
   ex_zh:'2011年，有人把他的故事放到微博上，引起了广泛关注。',ex_py:'Èr líng yī yī nián, yǒu rén bǎ tā de gùshi fàngdào wēibó shang, yǐnqǐle guǎngfàn guānzhù.',ex_vn:'Năm 2011, có người đưa câu chuyện của anh ấy lên Weibo, thu hút sự chú ý rộng rãi.',
   exList:[
     {zh:'2011年，有人把他的故事放到微博上，引起了广泛关注。',py:'Èr líng yī yī nián, yǒu rén bǎ tā de gùshi fàngdào wēibó shang, yǐnqǐle guǎngfàn guānzhù.',vn:'Năm 2011, có người đưa câu chuyện của anh ấy lên Weibo, thu hút sự chú ý rộng rãi.'},
     {zh:'她每天都要发一条微博。',py:'Tā měi tiān dōu yào fā yì tiáo wēibó.',vn:'Ngày nào cô ấy cũng đăng một bài Weibo.'},
     {zh:'很多中国明星在微博上跟粉丝聊天儿。',py:'Hěn duō Zhōngguó míngxīng zài wēibó shang gēn fěnsī liáotiānr.',vn:'Nhiều ngôi sao Trung Quốc trò chuyện với người hâm mộ trên Weibo.'}
   ],
   colloFull:[
     {zh:'放到微博上',py:'fàngdào wēibó shang',vn:'đưa lên Weibo'},
     {zh:'发微博',py:'fā wēibó',vn:'đăng Weibo'},
     {zh:'刷微博',py:'shuā wēibó',vn:'lướt Weibo'},
     {zh:'一条微博',py:'yì tiáo wēibó',vn:'một bài Weibo'},
     {zh:'微博上的消息',py:'wēibó shang de xiāoxi',vn:'tin tức trên Weibo'}
   ],
   patterns:[
     {s:'把 + O + 放到 / 发到 + 微博上',m:'Đưa cái gì lên Weibo'},
     {s:'在微博上 + V',m:'Làm gì trên Weibo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy đã đăng ảnh chụp ở Bắc Kinh lên Weibo.',answer:'她把在北京拍的照片发到微博上了。',answerPy:'Tā bǎ zài Běijīng pāi de zhàopiàn fādào wēibó shang le.',
      note:'发到微博上 = đăng lên Weibo.',pair:'把'},
     {promptLang:'vi',prompt:'Sau khi câu chuyện này được đưa lên Weibo, người biết đến ngày càng nhiều.',answer:'这个故事被放到微博上以后，知道的人越来越多。',answerPy:'Zhège gùshi bèi fàngdào wēibó shang yǐhòu, zhīdào de rén yuè lái yuè duō.',
      note:'被放到微博上 — câu bị động.',pair:'被'}
   ]},

  {n:22,zh:'称呼',py:'chēnghu',pos:'Động từ / Danh từ',vn:'gọi, xưng hô; tên gọi',hv:'xưng hô',em:'🏷️',lesson:1,
   explain:['Động từ: gọi ai đó bằng một danh xưng: 称呼他为“汉字叔叔”.','Danh từ: cách gọi, danh xưng: 这个称呼. Chú ý 呼 đọc nhẹ (chēnghu).'],
   usage:'称呼 + người + 为 + danh xưng; 被……称呼为……; 请问您怎么称呼? (hỏi tên lịch sự); 一个亲切的称呼.',
   collo:['称呼为','怎么称呼','亲切地称呼','这个称呼'],
   ex_zh:'他也因此被网友亲切地称呼为“汉字叔叔”。',ex_py:'Tā yě yīncǐ bèi wǎngyǒu qīnqiè de chēnghu wéi “Hànzì shūshu”.',ex_vn:'Anh ấy cũng vì thế mà được cư dân mạng thân mật gọi là “Chú Chữ Hán”.',
   exList:[
     {zh:'他也因此被网友亲切地称呼为“汉字叔叔”。',py:'Tā yě yīncǐ bèi wǎngyǒu qīnqiè de chēnghu wéi “Hànzì shūshu”.',vn:'Anh ấy cũng vì thế mà được cư dân mạng thân mật gọi là “Chú Chữ Hán”.'},
     {zh:'您好，请问您怎么称呼？',py:'Nín hǎo, qǐngwèn nín zěnme chēnghu?',vn:'Chào anh, xin hỏi nên xưng hô với anh thế nào ạ?'},
     {zh:'“老师”这个称呼让人觉得很亲切。',py:'“Lǎoshī” zhège chēnghu ràng rén juéde hěn qīnqiè.',vn:'Cách gọi “thầy/cô” khiến người ta thấy rất thân thiết.'}
   ],
   colloFull:[
     {zh:'称呼为',py:'chēnghu wéi',vn:'gọi là'},
     {zh:'怎么称呼',py:'zěnme chēnghu',vn:'xưng hô thế nào'},
     {zh:'亲切地称呼',py:'qīnqiè de chēnghu',vn:'gọi một cách thân mật'},
     {zh:'这个称呼',py:'zhège chēnghu',vn:'cách gọi này'},
     {zh:'被称呼为',py:'bèi chēnghu wéi',vn:'được gọi là'}
   ],
   patterns:[
     {s:'Sub + 被 + người + 称呼为 + “……”',m:'Ai đó được người ta gọi là …'},
     {s:'请问您怎么称呼？',m:'Xin hỏi xưng hô với anh / chị thế nào? (hỏi tên lịch sự)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì hay giúp đỡ người khác, cậu ấy được các bạn gọi là “Lôi Phong nhỏ”.',answer:'因为经常帮助别人，他被同学们称呼为“小雷锋”。',answerPy:'Yīnwèi jīngcháng bāngzhù biéren, tā bèi tóngxuémen chēnghu wéi “xiǎo Léi Fēng”.',
      note:'被 + người + 称呼为 + danh xưng.',pair:'被'},
     {promptLang:'vi',prompt:'Lần đầu gặp mặt, tôi không biết nên xưng hô với anh ấy thế nào.',answer:'第一次见面，我不知道应该怎么称呼他。',answerPy:'Dì-yī cì jiànmiàn, wǒ bù zhīdào yīnggāi zěnme chēnghu tā.',
      note:'怎么称呼 + người = xưng hô với ai thế nào.',pair:'应该'}
   ]},

  {n:23,zh:'克服',py:'kèfú',pos:'Động từ',vn:'khắc phục, vượt qua',hv:'khắc phục',em:'🧗',lesson:1,
   explain:['Dùng ý chí, sức lực để vượt qua khó khăn, khuyết điểm, điều kiện bất lợi.'],
   usage:'克服 + 困难 / 缺点 / 弱点 / (消极)思想 / (不利)条件 (bảng 词语搭配). Không dùng cho việc sửa máy móc (sửa máy → 修理).',
   collo:['克服困难','克服缺点','克服弱点','克服不利条件'],
   ex_zh:'汉字叔叔克服种种困难，创办了这个网站。',ex_py:'Hànzì shūshu kèfú zhǒngzhǒng kùnnan, chuàngbànle zhège wǎngzhàn.',ex_vn:'Chú Chữ Hán vượt qua bao khó khăn, lập ra trang web này.',
   exList:[
     {zh:'汉字叔叔克服种种困难，创办了这个网站。',py:'Hànzì shūshu kèfú zhǒngzhǒng kùnnan, chuàngbànle zhège wǎngzhàn.',vn:'Chú Chữ Hán vượt qua bao khó khăn, lập ra trang web này.'},
     {zh:'这点儿困难不算什么，我一定可以克服的。',py:'Zhè diǎnr kùnnan bú suàn shénme, wǒ yídìng kěyǐ kèfú de.',vn:'Chút khó khăn này chẳng đáng gì, tôi nhất định có thể vượt qua.'},
     {zh:'活动的目的是为了培养学生克服困难的勇气。',py:'Huódòng de mùdì shì wèile péiyǎng xuésheng kèfú kùnnan de yǒngqì.',vn:'Mục đích của hoạt động là bồi dưỡng cho học sinh dũng khí vượt qua khó khăn.'}
   ],
   colloFull:[
     {zh:'克服困难',py:'kèfú kùnnan',vn:'vượt qua khó khăn'},
     {zh:'克服缺点',py:'kèfú quēdiǎn',vn:'khắc phục khuyết điểm'},
     {zh:'克服弱点',py:'kèfú ruòdiǎn',vn:'khắc phục điểm yếu'},
     {zh:'克服不利条件',py:'kèfú búlì tiáojiàn',vn:'vượt qua điều kiện bất lợi'},
     {zh:'克服消极思想',py:'kèfú xiāojí sīxiǎng',vn:'khắc phục tư tưởng tiêu cực'}
   ],
   patterns:[
     {s:'克服 + 困难 / 缺点 / 弱点',m:'Vượt qua khó khăn / khắc phục khuyết điểm, điểm yếu'},
     {s:'Sub + 是怎么克服……的？',m:'Ai đó đã vượt qua … bằng cách nào?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn đã vượt qua khó khăn khi học tiếng Trung bằng cách nào?',answer:'你是怎么克服学汉语的困难的？',answerPy:'Nǐ shì zěnme kèfú xué Hànyǔ de kùnnan de?',
      note:'克服 + 困难 — câu hỏi trong 话题讨论 của bài.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần có quyết tâm thì không có khó khăn nào không vượt qua được.',answer:'只要有决心，就没有克服不了的困难。',answerPy:'Zhǐyào yǒu juéxīn, jiù méiyǒu kèfú bu liǎo de kùnnan.',
      note:'克服不了 = không vượt qua nổi (bổ ngữ khả năng).',pair:'只要……就……'}
   ]},

  {n:24,zh:'收集',py:'shōují',pos:'Động từ',vn:'thu thập, sưu tầm',hv:'thu tập',em:'🗂️',lesson:1,
   explain:['Gom góp những thứ rải rác về một chỗ (tư liệu, ý kiến, tem thư…).'],
   usage:'收集 + 资料 / 例子 / 情况 / 意见 / 证据 / 零件 / 邮票 (bảng 词语搭配). Hay đi liền với 整理: 收集整理.',
   collo:['收集资料','收集意见','收集邮票','收集整理'],
   ex_zh:'打开他的网站，可以看到他收集整理的近10万个汉字。',ex_py:'Dǎkāi tā de wǎngzhàn, kěyǐ kàndào tā shōují zhěnglǐ de jìn shí wàn ge Hànzì.',ex_vn:'Mở trang web của anh ấy ra, có thể thấy gần 100 nghìn chữ Hán do anh ấy thu thập, sắp xếp.',
   exList:[
     {zh:'打开他的网站，可以看到他收集整理的近10万个汉字。',py:'Dǎkāi tā de wǎngzhàn, kěyǐ kàndào tā shōují zhěnglǐ de jìn shí wàn ge Hànzì.',vn:'Mở trang web của anh ấy ra, có thể thấy gần 100 nghìn chữ Hán do anh ấy thu thập, sắp xếp.'},
     {zh:'我们是大学同学，那时候他就有了这个收集老报纸的爱好。',py:'Wǒmen shì dàxué tóngxué, nà shíhou tā jiù yǒule zhège shōují lǎo bàozhǐ de àihào.',vn:'Chúng tôi là bạn đại học, hồi đó anh ấy đã có sở thích sưu tầm báo cũ này rồi.'},
     {zh:'写论文以前，要先收集资料。',py:'Xiě lùnwén yǐqián, yào xiān shōují zīliào.',vn:'Trước khi viết luận văn, phải thu thập tư liệu trước.'}
   ],
   colloFull:[
     {zh:'收集资料',py:'shōují zīliào',vn:'thu thập tư liệu'},
     {zh:'收集意见',py:'shōují yìjiàn',vn:'thu thập ý kiến'},
     {zh:'收集邮票',py:'shōují yóupiào',vn:'sưu tầm tem'},
     {zh:'收集整理',py:'shōují zhěnglǐ',vn:'thu thập và sắp xếp'},
     {zh:'收集证据',py:'shōují zhèngjù',vn:'thu thập chứng cứ'}
   ],
   patterns:[
     {s:'收集 + 资料 / 意见 / 邮票',m:'Thu thập tư liệu / ý kiến; sưu tầm tem'},
     {s:'Sub + 收集整理的 + N',m:'… do ai đó thu thập, sắp xếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy từ nhỏ đã thích sưu tầm tem, đã sưu tầm được hơn hai nghìn con rồi.',answer:'他从小就喜欢收集邮票，已经收集了两千多张了。',answerPy:'Tā cóngxiǎo jiù xǐhuan shōují yóupiào, yǐjīng shōujíle liǎngqiān duō zhāng le.',
      note:'收集邮票 = sưu tầm tem; lượng từ của tem là 张.',pair:'V + 了 + số lượng + 了'},
     {promptLang:'vi',prompt:'Thầy giáo bảo chúng tôi thu thập xong tư liệu trước thứ Sáu.',answer:'老师让我们在周五以前把资料收集好。',answerPy:'Lǎoshī ràng wǒmen zài zhōuwǔ yǐqián bǎ zīliào shōují hǎo.',
      note:'收集好 = thu thập xong xuôi.',pair:'把'}
   ]},

  {n:25,zh:'包含',py:'bāohán',pos:'Động từ',vn:'bao hàm, gồm có, chứa đựng',hv:'bao hàm',em:'📦',lesson:1,
   explain:['Bên trong có chứa, gồm có (nội dung, thành phần, ý nghĩa…).','Khác 包括: 包括 hay liệt kê các bộ phận (包括A、B和C); 包含 nhấn mạnh cái chứa ở bên trong — hay dùng cho ý nghĩa, đạo lý: 包含着深刻的道理.'],
   usage:'A + 包含 + B; 包含着 / 包含了; hay đi với 内容, 意思, 道理. Văn viết.',
   collo:['包含内容','包含着道理','包含早餐','包含的意思'],
   ex_zh:'他收集整理的近10万个汉字，包含了它们演变的全部字形。',ex_py:'Tā shōují zhěnglǐ de jìn shí wàn ge Hànzì, bāohánle tāmen yǎnbiàn de quánbù zìxíng.',ex_vn:'Gần 100 nghìn chữ Hán anh ấy thu thập, sắp xếp có đủ mọi tự hình trong quá trình biến đổi của chúng.',
   exList:[
     {zh:'他收集整理的近10万个汉字，包含了它们演变的全部字形。',py:'Tā shōují zhěnglǐ de jìn shí wàn ge Hànzì, bāohánle tāmen yǎnbiàn de quánbù zìxíng.',vn:'Gần 100 nghìn chữ Hán anh ấy thu thập, sắp xếp có đủ mọi tự hình trong quá trình biến đổi của chúng.'},
     {zh:'这个成语包含着一个深刻的道理。',py:'Zhège chéngyǔ bāohánzhe yí ge shēnkè de dàolǐ.',vn:'Thành ngữ này chứa đựng một đạo lý sâu sắc.'},
     {zh:'这个价格包含早餐吗？',py:'Zhège jiàgé bāohán zǎocān ma?',vn:'Giá này có bao gồm bữa sáng không?'}
   ],
   colloFull:[
     {zh:'包含内容',py:'bāohán nèiróng',vn:'bao gồm nội dung'},
     {zh:'包含着道理',py:'bāohánzhe dàolǐ',vn:'chứa đựng đạo lý'},
     {zh:'包含早餐',py:'bāohán zǎocān',vn:'bao gồm bữa sáng'},
     {zh:'包含的意思',py:'bāohán de yìsi',vn:'ý nghĩa chứa đựng bên trong'},
     {zh:'包含了全部字形',py:'bāohánle quánbù zìxíng',vn:'có đủ mọi tự hình'}
   ],
   patterns:[
     {s:'A + 包含(着 / 了) + B',m:'A chứa đựng, bao gồm B'},
     {s:'N + 里 / 中 + 包含着 + 道理 / 意思',m:'Trong … chứa đựng đạo lý / ý nghĩa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện nhỏ này chứa đựng một đạo lý lớn.',answer:'这个小故事里包含着一个大道理。',answerPy:'Zhège xiǎo gùshi li bāohánzhe yí ge dà dàolǐ.',
      note:'包含着 + 道理: chứa đựng đạo lý.',pair:'V + 着'},
     {promptLang:'vi',prompt:'Giá vé không chỉ bao gồm vé máy bay mà còn bao gồm cả khách sạn.',answer:'票价不仅包含机票，也包含酒店。',answerPy:'Piàojià bùjǐn bāohán jīpiào, yě bāohán jiǔdiàn.',
      note:'包含 + thành phần bên trong.',pair:'不仅……也……'}
   ]},

  {n:26,zh:'繁体字',py:'fántǐzì',pos:'Danh từ',vn:'chữ phồn thể',hv:'phồn thể tự',em:'🏮',lesson:1,
   explain:['Chữ Hán dạng nhiều nét, chưa qua giản hoá; nay vẫn dùng ở Đài Loan, Hồng Kông, Ma Cao.','Sách in 繁体（字）: có thể nói 繁体 hoặc 繁体字; 繁体字形 = tự hình phồn thể.'],
   usage:'繁体字形, 写繁体字, 繁体版; đối lập với 简体字.',
   collo:['繁体字形','写繁体字','繁体版','繁体和简体'],
   ex_zh:'他的网站当然也包括繁体字形和简体字形。',ex_py:'Tā de wǎngzhàn dāngrán yě bāokuò fántǐ zìxíng hé jiǎntǐ zìxíng.',ex_vn:'Trang web của anh ấy đương nhiên cũng có cả tự hình phồn thể và giản thể.',
   exList:[
     {zh:'他的网站当然也包括繁体字形和简体字形。',py:'Tā de wǎngzhàn dāngrán yě bāokuò fántǐ zìxíng hé jiǎntǐ zìxíng.',vn:'Trang web của anh ấy đương nhiên cũng có cả tự hình phồn thể và giản thể.'},
     {zh:'“逻辑”的繁体字是“邏輯”。',py:'“Luójí” de fántǐzì shì “luójí”.',vn:'“逻辑” viết bằng chữ phồn thể là “邏輯”.'},
     {zh:'台湾和香港现在还用繁体字。',py:'Táiwān hé Xiānggǎng xiànzài hái yòng fántǐzì.',vn:'Đài Loan và Hồng Kông bây giờ vẫn dùng chữ phồn thể.'}
   ],
   colloFull:[
     {zh:'繁体字形',py:'fántǐ zìxíng',vn:'tự hình phồn thể'},
     {zh:'写繁体字',py:'xiě fántǐzì',vn:'viết chữ phồn thể'},
     {zh:'繁体版',py:'fántǐbǎn',vn:'bản phồn thể'},
     {zh:'繁体和简体',py:'fántǐ hé jiǎntǐ',vn:'phồn thể và giản thể'}
   ],
   patterns:[
     {s:'N + 的繁体字是 + ……',m:'… viết phồn thể là …'},
     {s:'把 + 繁体字 + 换成 + 简体字',m:'Đổi chữ phồn thể sang giản thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chữ phồn thể nhiều nét quá, tôi viết thế nào cũng không nhớ nổi.',answer:'繁体字的笔画太多了，我怎么写也记不住。',answerPy:'Fántǐzì de bǐhuà tài duō le, wǒ zěnme xiě yě jì bu zhù.',
      note:'笔画 = nét chữ (từ trong 复述 của bài).',pair:'怎么……也……'},
     {promptLang:'vi',prompt:'Cuốn sách này được in bằng chữ phồn thể.',answer:'这本书是用繁体字印的。',answerPy:'Zhè běn shū shì yòng fántǐzì yìn de.',
      note:'用繁体字 + V: dùng chữ phồn thể để …',pair:'是……的'}
   ]},

  {n:27,zh:'简体字',py:'jiǎntǐzì',pos:'Danh từ',vn:'chữ giản thể',hv:'giản thể tự',em:'✏️',lesson:1,
   explain:['Chữ Hán đã được giản hoá, ít nét hơn; dùng chính thức ở Trung Quốc đại lục và Singapore.','Sách in 简体（字）: có thể nói 简体 hoặc 简体字.'],
   usage:'简体字形, 简体写法, 写简体字, 简体版; 繁体字 ↔ 简体字.',
   collo:['简体字形','简体写法','写简体字','简体版'],
   ex_zh:'网站上既有繁体字形，也有简体字形。',ex_py:'Wǎngzhàn shang jì yǒu fántǐ zìxíng, yě yǒu jiǎntǐ zìxíng.',ex_vn:'Trên trang web vừa có tự hình phồn thể, vừa có tự hình giản thể.',
   exList:[
     {zh:'网站上既有繁体字形，也有简体字形。',py:'Wǎngzhàn shang jì yǒu fántǐ zìxíng, yě yǒu jiǎntǐ zìxíng.',vn:'Trên trang web vừa có tự hình phồn thể, vừa có tự hình giản thể.'},
     {zh:'我们在学校学的是简体字。',py:'Wǒmen zài xuéxiào xué de shì jiǎntǐzì.',vn:'Ở trường chúng tôi học chữ giản thể.'},
     {zh:'请从本课生词中找出与繁体字对应的简体写法。',py:'Qǐng cóng běn kè shēngcí zhōng zhǎochū yǔ fántǐzì duìyìng de jiǎntǐ xiěfǎ.',vn:'Hãy tìm trong từ mới của bài cách viết giản thể tương ứng với chữ phồn thể.'}
   ],
   colloFull:[
     {zh:'简体字形',py:'jiǎntǐ zìxíng',vn:'tự hình giản thể'},
     {zh:'简体写法',py:'jiǎntǐ xiěfǎ',vn:'cách viết giản thể'},
     {zh:'写简体字',py:'xiě jiǎntǐzì',vn:'viết chữ giản thể'},
     {zh:'简体版',py:'jiǎntǐbǎn',vn:'bản giản thể'}
   ],
   patterns:[
     {s:'……的简体写法是……',m:'Cách viết giản thể của … là …'},
     {s:'用简体字 + V',m:'Dùng chữ giản thể để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chữ giản thể dễ viết hơn chữ phồn thể nhiều.',answer:'简体字比繁体字好写多了。',answerPy:'Jiǎntǐzì bǐ fántǐzì hǎo xiě duō le.',
      note:'简体字 ↔ 繁体字.',pair:'A 比 B + Adj + 多了'},
     {promptLang:'vi',prompt:'Nếu đọc không hiểu chữ phồn thể, cậu có thể đổi nó sang chữ giản thể.',answer:'如果看不懂繁体字，你可以把它换成简体字。',answerPy:'Rúguǒ kàn bu dǒng fántǐzì, nǐ kěyǐ bǎ tā huànchéng jiǎntǐzì.',
      note:'换成 + 简体字: đổi thành chữ giản thể.',pair:'把'}
   ]},

  {n:28,zh:'方言',py:'fāngyán',pos:'Danh từ',vn:'tiếng địa phương, phương ngữ',hv:'phương ngôn',em:'🗣️',lesson:1,
   explain:['Tiếng nói riêng của một vùng, khác với ngôn ngữ chuẩn (ở Trung Quốc là 普通话).'],
   usage:'说方言, 听不懂方言, 方言读音, 上海方言; đối lập với 普通话.',
   collo:['说方言','方言读音','听不懂方言','普通话和方言'],
   ex_zh:'网站上还有普通话和部分方言读音、英文释义等内容。',ex_py:'Wǎngzhàn shang hái yǒu pǔtōnghuà hé bùfen fāngyán dúyīn, Yīngwén shìyì děng nèiróng.',ex_vn:'Trên trang web còn có cách đọc theo tiếng phổ thông và một số phương ngữ, lời giải thích bằng tiếng Anh…',
   exList:[
     {zh:'网站上还有普通话和部分方言读音、英文释义等内容。',py:'Wǎngzhàn shang hái yǒu pǔtōnghuà hé bùfen fāngyán dúyīn, Yīngwén shìyì děng nèiróng.',vn:'Trên trang web còn có cách đọc theo tiếng phổ thông và một số phương ngữ, lời giải thích bằng tiếng Anh…'},
     {zh:'我爷爷只会说方言，不会说普通话。',py:'Wǒ yéye zhǐ huì shuō fāngyán, bú huì shuō pǔtōnghuà.',vn:'Ông nội tôi chỉ biết nói tiếng địa phương, không biết nói tiếng phổ thông.'},
     {zh:'中国的方言很多，有的连中国人都听不懂。',py:'Zhōngguó de fāngyán hěn duō, yǒude lián Zhōngguórén dōu tīng bu dǒng.',vn:'Trung Quốc có rất nhiều phương ngữ, có loại ngay cả người Trung Quốc cũng nghe không hiểu.'}
   ],
   colloFull:[
     {zh:'说方言',py:'shuō fāngyán',vn:'nói tiếng địa phương'},
     {zh:'方言读音',py:'fāngyán dúyīn',vn:'cách đọc theo phương ngữ'},
     {zh:'听不懂方言',py:'tīng bu dǒng fāngyán',vn:'nghe không hiểu tiếng địa phương'},
     {zh:'普通话和方言',py:'pǔtōnghuà hé fāngyán',vn:'tiếng phổ thông và phương ngữ'},
     {zh:'上海方言',py:'Shànghǎi fāngyán',vn:'tiếng Thượng Hải'}
   ],
   patterns:[
     {s:'Sub + 会说 / 听得懂 + 方言',m:'Biết nói / nghe hiểu tiếng địa phương'},
     {s:'普通话 ↔ 方言',m:'Tiếng phổ thông đối lập với phương ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy nói tiếng địa phương, đến người phương Bắc cũng nghe không hiểu.',answer:'他说的是方言，连北方人都听不懂。',answerPy:'Tā shuō de shì fāngyán, lián běifāngrén dōu tīng bu dǒng.',
      note:'说方言 = nói tiếng địa phương.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Lần nào về quê, tôi cũng được nghe ông bà nói tiếng địa phương.',answer:'每次回老家，我都能听到爷爷奶奶说方言。',answerPy:'Měi cì huí lǎojiā, wǒ dōu néng tīngdào yéye nǎinai shuō fāngyán.',
      note:'方言 làm tân ngữ của 说.',pair:'每……都……'}
   ]},

  {n:29,zh:'称赞',py:'chēngzàn',pos:'Động từ',vn:'khen ngợi, tán thưởng',hv:'xưng tán',em:'👏',lesson:1,
   explain:['Dùng lời nói để khen ngợi ưu điểm, việc làm của người hoặc vật.'],
   usage:'称赞 + người / việc; 被……称赞为“……”; 值得称赞; 受到称赞. Trang trọng hơn 夸.',
   collo:['被称赞为','值得称赞','受到称赞','称赞他'],
   ex_zh:'这个网站被网友称赞为“有图有真相”。',ex_py:'Zhège wǎngzhàn bèi wǎngyǒu chēngzàn wéi “yǒu tú yǒu zhēnxiàng”.',ex_vn:'Trang web này được cư dân mạng khen là “có hình có sự thật”.',
   exList:[
     {zh:'这个网站被网友称赞为“有图有真相”。',py:'Zhège wǎngzhàn bèi wǎngyǒu chēngzàn wéi “yǒu tú yǒu zhēnxiàng”.',vn:'Trang web này được cư dân mạng khen là “có hình có sự thật”.'},
     {zh:'刘校长在教改方面的成就值得称赞。',py:'Liú xiàozhǎng zài jiàogǎi fāngmiàn de chéngjiù zhíde chēngzàn.',vn:'Thành tựu của hiệu trưởng Lưu trong cải cách giáo dục thật đáng khen ngợi.'},
     {zh:'老师在全班同学面前称赞了他。',py:'Lǎoshī zài quán bān tóngxué miànqián chēngzànle tā.',vn:'Thầy giáo khen cậu ấy trước cả lớp.'}
   ],
   colloFull:[
     {zh:'被称赞为',py:'bèi chēngzàn wéi',vn:'được khen là'},
     {zh:'值得称赞',py:'zhíde chēngzàn',vn:'đáng khen ngợi'},
     {zh:'受到称赞',py:'shòudào chēngzàn',vn:'được khen ngợi'},
     {zh:'称赞他',py:'chēngzàn tā',vn:'khen anh ấy'},
     {zh:'大家的称赞',py:'dàjiā de chēngzàn',vn:'lời khen của mọi người'}
   ],
   patterns:[
     {s:'A + 被 + B + 称赞为 + “……”',m:'A được B khen là …'},
     {s:'……值得称赞',m:'… đáng khen ngợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món mẹ nấu được khách khen là “món cơm nhà ngon nhất”.',answer:'妈妈做的菜被客人们称赞为“最好吃的家常菜”。',answerPy:'Māma zuò de cài bèi kèrénmen chēngzàn wéi “zuì hǎochī de jiāchángcài”.',
      note:'被……称赞为…… — khung câu y như bài khoá.',pair:'被'},
     {promptLang:'vi',prompt:'Cậu ấy không chỉ học giỏi mà còn hay giúp đỡ người khác, rất đáng khen.',answer:'他不仅学习好，也经常帮助别人，很值得称赞。',answerPy:'Tā bùjǐn xuéxí hǎo, yě jīngcháng bāngzhù biéren, hěn zhíde chēngzàn.',
      note:'值得称赞 = đáng khen ngợi.',pair:'不仅……也……'}
   ]},

  {n:30,zh:'真相',py:'zhēnxiàng',pos:'Danh từ',vn:'sự thật, chân tướng',hv:'chân tướng',em:'🔍',lesson:1,
   explain:['Tình hình thật sự, bộ mặt thật của sự việc (thường là điều từng bị che giấu).','有图有真相: câu cửa miệng trên mạng “có ảnh có sự thật” — có hình làm chứng nên đáng tin.'],
   usage:'了解 / 说出 / 发现 + 真相; 事情的真相; 真相大白 (sự thật được phơi bày).',
   collo:['有图有真相','事情的真相','说出真相','了解真相'],
   ex_zh:'汉字叔叔的网站被网友称赞为“有图有真相”。',ex_py:'Hànzì shūshu de wǎngzhàn bèi wǎngyǒu chēngzàn wéi “yǒu tú yǒu zhēnxiàng”.',ex_vn:'Trang web của Chú Chữ Hán được cư dân mạng khen là “có hình có sự thật”.',
   exList:[
     {zh:'汉字叔叔的网站被网友称赞为“有图有真相”。',py:'Hànzì shūshu de wǎngzhàn bèi wǎngyǒu chēngzàn wéi “yǒu tú yǒu zhēnxiàng”.',vn:'Trang web của Chú Chữ Hán được cư dân mạng khen là “có hình có sự thật”.'},
     {zh:'警察终于查清了事情的真相。',py:'Jǐngchá zhōngyú cháqīngle shìqing de zhēnxiàng.',vn:'Cảnh sát cuối cùng đã điều tra rõ sự thật của vụ việc.'},
     {zh:'你别骗我了，快把真相告诉我吧。',py:'Nǐ bié piàn wǒ le, kuài bǎ zhēnxiàng gàosu wǒ ba.',vn:'Cậu đừng lừa tớ nữa, mau nói cho tớ biết sự thật đi.'}
   ],
   colloFull:[
     {zh:'有图有真相',py:'yǒu tú yǒu zhēnxiàng',vn:'có hình có sự thật'},
     {zh:'事情的真相',py:'shìqing de zhēnxiàng',vn:'sự thật của sự việc'},
     {zh:'说出真相',py:'shuōchū zhēnxiàng',vn:'nói ra sự thật'},
     {zh:'了解真相',py:'liǎojiě zhēnxiàng',vn:'tìm hiểu sự thật'},
     {zh:'真相大白',py:'zhēnxiàng dà bái',vn:'sự thật được phơi bày'}
   ],
   patterns:[
     {s:'把 + 真相 + 告诉 + người',m:'Nói cho ai biết sự thật'},
     {s:'事情的真相是……',m:'Sự thật của chuyện này là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xem video xong, mọi người mới biết được sự thật.',answer:'看了视频以后，大家才知道了真相。',answerPy:'Kànle shìpín yǐhòu, dàjiā cái zhīdàole zhēnxiàng.',
      note:'知道 / 了解 + 真相.',pair:'……以后，……才……'},
     {promptLang:'vi',prompt:'Cậu ấy sợ bị mắng nên không dám nói ra sự thật.',answer:'他怕被骂，所以不敢说出真相。',answerPy:'Tā pà bèi mà, suǒyǐ bù gǎn shuōchū zhēnxiàng.',
      note:'说出真相 = nói ra sự thật; 骂 là từ bài 15.',pair:'被'}
   ]},

  {n:31,zh:'佩服',py:'pèifú',pos:'Động từ',vn:'khâm phục, bái phục',hv:'bội phục',em:'🙇',lesson:1,
   explain:['Kính trọng và phục tài năng, phẩm chất, việc làm của người khác.'],
   usage:'佩服 + người; 让 / 令人佩服; 暗暗 / 深深地 / 打心里 + 佩服 (bảng 词语搭配). 佩服 là cảm xúc trong lòng; 称赞 là lời khen nói ra miệng.',
   collo:['让人佩服','暗暗佩服','深深地佩服','打心里佩服'],
   ex_zh:'更让人佩服的是，汉字叔叔将网站上的内容全部开放给网友免费下载。',ex_py:'Gèng ràng rén pèifú de shì, Hànzì shūshu jiāng wǎngzhàn shang de nèiróng quánbù kāifàng gěi wǎngyǒu miǎnfèi xiàzài.',ex_vn:'Điều khiến người ta khâm phục hơn nữa là Chú Chữ Hán mở toàn bộ nội dung trên trang web cho cư dân mạng tải về miễn phí.',
   exList:[
     {zh:'更让人佩服的是，汉字叔叔将网站上的内容全部开放给网友免费下载。',py:'Gèng ràng rén pèifú de shì, Hànzì shūshu jiāng wǎngzhàn shang de nèiróng quánbù kāifàng gěi wǎngyǒu miǎnfèi xiàzài.',vn:'Điều khiến người ta khâm phục hơn nữa là Chú Chữ Hán mở toàn bộ nội dung trên trang web cho cư dân mạng tải về miễn phí.'},
     {zh:'她对工作认真负责的态度很让人佩服。',py:'Tā duì gōngzuò rènzhēn fùzé de tàidu hěn ràng rén pèifú.',vn:'Thái độ làm việc nghiêm túc, có trách nhiệm của cô ấy rất đáng khâm phục.'},
     {zh:'我爸爸抽了二十多年的烟，现在说戒就戒了，真让人佩服。',py:'Wǒ bàba chōule èrshí duō nián de yān, xiànzài shuō jiè jiù jiè le, zhēn ràng rén pèifú.',vn:'Bố tôi hút thuốc hơn hai mươi năm, giờ nói bỏ là bỏ luôn, thật đáng khâm phục.'}
   ],
   colloFull:[
     {zh:'让人佩服',py:'ràng rén pèifú',vn:'khiến người ta khâm phục'},
     {zh:'暗暗佩服',py:'àn\'àn pèifú',vn:'thầm khâm phục'},
     {zh:'深深地佩服',py:'shēnshēn de pèifú',vn:'vô cùng khâm phục'},
     {zh:'打心里佩服',py:'dǎ xīnli pèifú',vn:'khâm phục từ tận đáy lòng'},
     {zh:'佩服得五体投地',py:'pèifú de wǔtǐ-tóudì',vn:'phục sát đất'}
   ],
   patterns:[
     {s:'(更)让人佩服的是，……',m:'Điều khiến người ta khâm phục (hơn nữa) là …'},
     {s:'Sub + 暗暗 / 打心里 + 佩服 + người',m:'Thầm / tận đáy lòng khâm phục ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả thầy giáo cũng rất khâm phục trí nhớ của cậu ấy.',answer:'连老师都很佩服他的记忆力。',answerPy:'Lián lǎoshī dōu hěn pèifú tā de jìyìlì.',
      note:'佩服 + người / phẩm chất của người.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy cô ấy không giàu, nhưng thường xuyên giúp đỡ người khác, thật đáng khâm phục.',answer:'虽然她并不富有，但是经常帮助别人，真让人佩服。',answerPy:'Suīrán tā bìng bú fùyǒu, dànshì jīngcháng bāngzhù biéren, zhēn ràng rén pèifú.',
      note:'让人佩服 = khiến người ta khâm phục.',pair:'虽然……但是……'}
   ]},

  {n:32,zh:'开放',py:'kāifàng',pos:'Động từ',vn:'mở cửa, mở ra (cho mọi người dùng)',hv:'khai phóng',em:'🔓',lesson:1,
   explain:['Mở ra cho mọi người sử dụng, ra vào, tham quan (công viên, thư viện, nội dung…).','Còn nghĩa “cởi mở” (思想开放) và trong 改革开放 (cải cách mở cửa).'],
   usage:'开放给 + người; 对 / 向 + người + 开放; 免费开放; 开放时间. Khác 公开: 公开 = làm cho ai cũng BIẾT; 开放 = cho mọi người VÀO / DÙNG.',
   collo:['开放给网友','免费开放','对外开放','开放时间'],
   ex_zh:'汉字叔叔将网站上的内容全部开放给网友免费下载。',ex_py:'Hànzì shūshu jiāng wǎngzhàn shang de nèiróng quánbù kāifàng gěi wǎngyǒu miǎnfèi xiàzài.',ex_vn:'Chú Chữ Hán mở toàn bộ nội dung trên trang web cho cư dân mạng tải về miễn phí.',
   exList:[
     {zh:'汉字叔叔将网站上的内容全部开放给网友免费下载。',py:'Hànzì shūshu jiāng wǎngzhàn shang de nèiróng quánbù kāifàng gěi wǎngyǒu miǎnfèi xiàzài.',vn:'Chú Chữ Hán mở toàn bộ nội dung trên trang web cho cư dân mạng tải về miễn phí.'},
     {zh:'这个博物馆每周一不开放。',py:'Zhège bówùguǎn měi zhōuyī bù kāifàng.',vn:'Bảo tàng này thứ Hai hằng tuần không mở cửa.'},
     {zh:'学校图书馆周末也对学生开放。',py:'Xuéxiào túshūguǎn zhōumò yě duì xuésheng kāifàng.',vn:'Thư viện trường cuối tuần cũng mở cửa cho học sinh.'}
   ],
   colloFull:[
     {zh:'开放给网友',py:'kāifàng gěi wǎngyǒu',vn:'mở cho cư dân mạng'},
     {zh:'免费开放',py:'miǎnfèi kāifàng',vn:'mở cửa miễn phí'},
     {zh:'对外开放',py:'duìwài kāifàng',vn:'mở cửa với bên ngoài'},
     {zh:'开放时间',py:'kāifàng shíjiān',vn:'giờ mở cửa'},
     {zh:'思想开放',py:'sīxiǎng kāifàng',vn:'tư tưởng cởi mở'}
   ],
   patterns:[
     {s:'把 / 将 + O + 开放给 + người',m:'Mở cái gì cho ai sử dụng'},
     {s:'N + 对 + người + 开放',m:'… mở cửa cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công viên này từ năm nay bắt đầu mở cửa miễn phí cho người dân.',answer:'这个公园从今年开始对市民免费开放了。',answerPy:'Zhège gōngyuán cóng jīnnián kāishǐ duì shìmín miǎnfèi kāifàng le.',
      note:'对 + người + 开放.',pair:'从……开始'},
     {promptLang:'vi',prompt:'Thầy giáo đã mở toàn bộ tư liệu cho học sinh tải về.',answer:'老师把所有资料都开放给学生下载了。',answerPy:'Lǎoshī bǎ suǒyǒu zīliào dōu kāifàng gěi xuésheng xiàzài le.',
      note:'把 + O + 开放给 + người + V — khung câu của bài khoá.',pair:'把'}
   ]},

  {n:33,zh:'下载',py:'xiàzài',pos:'Động từ',vn:'tải xuống, tải về',hv:'hạ tải',em:'⬇️',lesson:1,
   explain:['Chép dữ liệu, tệp tin từ mạng về máy tính, điện thoại; trái nghĩa 上传 (tải lên).'],
   usage:'下载 + 文件 / 软件 / 歌 / 电影; 免费下载; 下载到 + 手机 / 电脑上. 载 đọc zài.',
   collo:['免费下载','下载文件','下载软件','下载到手机上'],
   ex_zh:'网站上的内容，网友都可以免费下载。',ex_py:'Wǎngzhàn shang de nèiróng, wǎngyǒu dōu kěyǐ miǎnfèi xiàzài.',ex_vn:'Nội dung trên trang web, cư dân mạng đều có thể tải về miễn phí.',
   exList:[
     {zh:'网站上的内容，网友都可以免费下载。',py:'Wǎngzhàn shang de nèiróng, wǎngyǒu dōu kěyǐ miǎnfèi xiàzài.',vn:'Nội dung trên trang web, cư dân mạng đều có thể tải về miễn phí.'},
     {zh:'这个软件我已经下载到手机上了。',py:'Zhège ruǎnjiàn wǒ yǐjīng xiàzài dào shǒujī shang le.',vn:'Phần mềm này tôi đã tải về điện thoại rồi.'},
     {zh:'网速太慢了，一部电影下载了两个小时。',py:'Wǎngsù tài màn le, yí bù diànyǐng xiàzàile liǎng ge xiǎoshí.',vn:'Mạng chậm quá, một bộ phim tải mất hai tiếng.'}
   ],
   colloFull:[
     {zh:'免费下载',py:'miǎnfèi xiàzài',vn:'tải miễn phí'},
     {zh:'下载文件',py:'xiàzài wénjiàn',vn:'tải tệp'},
     {zh:'下载软件',py:'xiàzài ruǎnjiàn',vn:'tải phần mềm'},
     {zh:'下载到手机上',py:'xiàzài dào shǒujī shang',vn:'tải về điện thoại'}
   ],
   patterns:[
     {s:'把 + O + 下载到 + 手机 / 电脑上',m:'Tải cái gì về điện thoại / máy tính'},
     {s:'……可以免费下载',m:'… có thể tải về miễn phí'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã tải bài hát này về điện thoại rồi.',answer:'我已经把这首歌下载到手机上了。',answerPy:'Wǒ yǐjīng bǎ zhè shǒu gē xiàzài dào shǒujī shang le.',
      note:'下载到 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần kết nối mạng là có thể tải về miễn phí.',answer:'只要连上网，就可以免费下载。',answerPy:'Zhǐyào liánshang wǎng, jiù kěyǐ miǎnfèi xiàzài.',
      note:'免费下载 = tải miễn phí.',pair:'只要……就……'}
   ]},

  {n:34,zh:'单位',py:'dānwèi',pos:'Danh từ',vn:'đơn vị, cơ quan',hv:'đơn vị',em:'🏢',lesson:1,
   explain:['Cơ quan, tổ chức, nơi làm việc (công ty, trường học, bệnh viện…). Người Trung Quốc hay gọi nơi làm việc là 单位.','Còn nghĩa “đơn vị đo lường”: 米是长度单位.'],
   usage:'工作单位, 很多单位, 单位领导; 单位 + 向 + người + 发出邀请; lượng từ 家: 一家单位.',
   collo:['工作单位','很多单位','单位领导','长度单位'],
   ex_zh:'现在，有很多单位向理查德发出了工作邀请。',ex_py:'Xiànzài, yǒu hěn duō dānwèi xiàng Lǐchádé fāchūle gōngzuò yāoqǐng.',ex_vn:'Bây giờ có rất nhiều cơ quan gửi lời mời làm việc cho Richard.',
   exList:[
     {zh:'现在，有很多单位向理查德发出了工作邀请。',py:'Xiànzài, yǒu hěn duō dānwèi xiàng Lǐchádé fāchūle gōngzuò yāoqǐng.',vn:'Bây giờ có rất nhiều cơ quan gửi lời mời làm việc cho Richard.'},
     {zh:'最近跑了好几家单位，递了很多简历。',py:'Zuìjìn pǎole hǎo jǐ jiā dānwèi, dìle hěn duō jiǎnlì.',vn:'Dạo này (tôi) chạy mấy cơ quan liền, nộp rất nhiều hồ sơ xin việc.'},
     {zh:'“米”是长度单位。',py:'“Mǐ” shì chángdù dānwèi.',vn:'“Mét” là đơn vị đo chiều dài.'}
   ],
   colloFull:[
     {zh:'工作单位',py:'gōngzuò dānwèi',vn:'nơi làm việc'},
     {zh:'很多单位',py:'hěn duō dānwèi',vn:'nhiều cơ quan'},
     {zh:'单位领导',py:'dānwèi lǐngdǎo',vn:'lãnh đạo cơ quan'},
     {zh:'长度单位',py:'chángdù dānwèi',vn:'đơn vị đo chiều dài'},
     {zh:'一家单位',py:'yì jiā dānwèi',vn:'một cơ quan'}
   ],
   patterns:[
     {s:'单位 + 向 + người + 发出邀请',m:'Cơ quan gửi lời mời tới ai'},
     {s:'Sub + 在 + ……单位 + 工作',m:'Ai đó làm việc ở cơ quan …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy vừa tốt nghiệp là đã có ba cơ quan mời cô ấy về làm.',answer:'她一毕业，就有三家单位请她去工作。',answerPy:'Tā yí bìyè, jiù yǒu sān jiā dānwèi qǐng tā qù gōngzuò.',
      note:'Lượng từ của 单位 là 家.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy cơ quan của bố cách nhà rất xa, nhưng ngày nào bố cũng đạp xe đi làm.',answer:'虽然爸爸的单位离家很远，但是他每天都骑自行车去上班。',answerPy:'Suīrán bàba de dānwèi lí jiā hěn yuǎn, dànshì tā měi tiān dōu qí zìxíngchē qù shàngbān.',
      note:'单位 = nơi làm việc.',pair:'虽然……但是……'}
   ]},

  {n:35,zh:'识别',py:'shíbié',pos:'Động từ',vn:'nhận biết, nhận dạng, phân biệt',hv:'thức biệt',em:'🔎',lesson:1,
   explain:['Phân biệt, nhận ra cái gì đó (thật / giả, đúng / sai, chữ viết, khuôn mặt…).','Nay hay dùng trong công nghệ: 汉字识别 (nhận dạng chữ), 人脸识别 (nhận diện khuôn mặt).'],
   usage:'识别 + 真假 / 汉字 / 声音; 人脸识别, 语音识别; 识别不出来.',
   collo:['汉字识别','人脸识别','识别真假','语音识别'],
   ex_zh:'那里也有人在做汉字识别查询的研究。',ex_py:'Nàli yě yǒu rén zài zuò Hànzì shíbié cháxún de yánjiū.',ex_vn:'Ở đó cũng có người đang nghiên cứu về nhận dạng và tra cứu chữ Hán.',
   exList:[
     {zh:'那里也有人在做汉字识别查询的研究。',py:'Nàli yě yǒu rén zài zuò Hànzì shíbié cháxún de yánjiū.',vn:'Ở đó cũng có người đang nghiên cứu về nhận dạng và tra cứu chữ Hán.'},
     {zh:'现在很多手机都有人脸识别功能。',py:'Xiànzài hěn duō shǒujī dōu yǒu rénliǎn shíbié gōngnéng.',vn:'Bây giờ nhiều điện thoại có chức năng nhận diện khuôn mặt.'},
     {zh:'网上的消息很多，我们要学会识别真假。',py:'Wǎng shang de xiāoxi hěn duō, wǒmen yào xuéhuì shíbié zhēnjiǎ.',vn:'Tin tức trên mạng rất nhiều, chúng ta phải học cách phân biệt thật giả.'}
   ],
   colloFull:[
     {zh:'汉字识别',py:'Hànzì shíbié',vn:'nhận dạng chữ Hán'},
     {zh:'人脸识别',py:'rénliǎn shíbié',vn:'nhận diện khuôn mặt'},
     {zh:'识别真假',py:'shíbié zhēnjiǎ',vn:'phân biệt thật giả'},
     {zh:'语音识别',py:'yǔyīn shíbié',vn:'nhận dạng giọng nói'},
     {zh:'识别不出来',py:'shíbié bu chūlái',vn:'không nhận ra được'}
   ],
   patterns:[
     {s:'识别 + 真假 / 好坏',m:'Phân biệt thật giả / tốt xấu'},
     {s:'……识别功能',m:'Chức năng nhận dạng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chữ cậu ấy viết ẩu quá, ngay cả máy tính cũng không nhận dạng được.',answer:'他的字写得太乱了，连电脑都识别不出来。',answerPy:'Tā de zì xiě de tài luàn le, lián diànnǎo dōu shíbié bu chūlái.',
      note:'识别不出来 = không nhận dạng ra được.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần học cách phân biệt thật giả thì sẽ không dễ bị lừa.',answer:'只要学会识别真假，就不容易上当。',answerPy:'Zhǐyào xuéhuì shíbié zhēnjiǎ, jiù bù róngyì shàngdàng.',
      note:'识别真假 = phân biệt thật giả; 上当 là từ bài 15.',pair:'只要……就……'}
   ]},

  {n:36,zh:'查询',py:'cháxún',pos:'Động từ',vn:'tra cứu, tìm kiếm (thông tin)',hv:'tra tuân',em:'🧾',lesson:1,
   explain:['Tra, hỏi để tìm thông tin (điểm thi, cước phí, chuyến bay…).'],
   usage:'查询 + 话费 / 成绩 / 航班 / 信息; 在网上查询; 识别查询. Trang trọng hơn 查.',
   collo:['查询话费','查询成绩','在网上查询','识别查询'],
   ex_zh:'北师大也有人在做汉字识别查询的研究。',ex_py:'Běishīdà yě yǒu rén zài zuò Hànzì shíbié cháxún de yánjiū.',ex_vn:'Ở Đại học Sư phạm Bắc Kinh cũng có người nghiên cứu về nhận dạng và tra cứu chữ Hán.',
   exList:[
     {zh:'北师大也有人在做汉字识别查询的研究。',py:'Běishīdà yě yǒu rén zài zuò Hànzì shíbié cháxún de yánjiū.',vn:'Ở Đại học Sư phạm Bắc Kinh cũng có người nghiên cứu về nhận dạng và tra cứu chữ Hán.'},
     {zh:'您好！我在网上查询话费，它要我输入密码，可我没设置过密码呀！',py:'Nín hǎo! Wǒ zài wǎng shang cháxún huàfèi, tā yào wǒ shūrù mìmǎ, kě wǒ méi shèzhìguo mìmǎ ya!',vn:'Chào chị! Tôi tra cước điện thoại trên mạng, nó bắt nhập mật khẩu, nhưng tôi chưa từng đặt mật khẩu mà!'},
     {zh:'考试成绩下周就可以在网上查询了。',py:'Kǎoshì chéngjì xià zhōu jiù kěyǐ zài wǎng shang cháxún le.',vn:'Tuần sau là có thể tra điểm thi trên mạng rồi.'}
   ],
   colloFull:[
     {zh:'查询话费',py:'cháxún huàfèi',vn:'tra cước điện thoại'},
     {zh:'查询成绩',py:'cháxún chéngjì',vn:'tra điểm'},
     {zh:'在网上查询',py:'zài wǎng shang cháxún',vn:'tra cứu trên mạng'},
     {zh:'识别查询',py:'shíbié cháxún',vn:'nhận dạng và tra cứu'},
     {zh:'查询航班信息',py:'cháxún hángbān xìnxī',vn:'tra thông tin chuyến bay'}
   ],
   patterns:[
     {s:'在网上 + 查询 + O',m:'Tra cứu cái gì trên mạng'},
     {s:'O + 可以在…… + 查询',m:'… có thể tra ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điểm thi vừa có là tôi lên mạng tra ngay.',answer:'考试成绩一出来，我就上网查询了。',answerPy:'Kǎoshì chéngjì yì chūlai, wǒ jiù shàngwǎng cháxún le.',
      note:'查询 thường dùng cho thông tin chính thức: điểm, cước, chuyến bay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi tra trên mạng một chút, chuyến bay bị huỷ rồi.',answer:'我在网上查询了一下，航班被取消了。',answerPy:'Wǒ zài wǎng shang cháxúnle yíxià, hángbān bèi qǔxiāo le.',
      note:'查询了一下 = tra thử một chút.',pair:'被'}
   ]},

  {n:37,zh:'物理',py:'wùlǐ',pos:'Danh từ',vn:'vật lý',hv:'vật lý',em:'⚛️',lesson:1,
   explain:['Môn khoa học nghiên cứu quy luật vận động của vật chất (lực, nhiệt, điện, ánh sáng…).','Thuộc nhóm từ chủ đề 学科 trong phần 扩展: 哲学, 化学, 物理, 政治.'],
   usage:'教物理, 学物理, 物理老师, 物理学家, 物理考试.',
   collo:['教物理','物理老师','物理学家','物理考试'],
   ex_zh:'在北师大，他除了教物理，还有充分的时间继续研究他的汉字。',ex_py:'Zài Běishīdà, tā chúle jiāo wùlǐ, hái yǒu chōngfèn de shíjiān jìxù yánjiū tā de Hànzì.',ex_vn:'Ở Đại học Sư phạm Bắc Kinh, ngoài dạy vật lý, ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán.',
   exList:[
     {zh:'在北师大，他除了教物理，还有充分的时间继续研究他的汉字。',py:'Zài Běishīdà, tā chúle jiāo wùlǐ, hái yǒu chōngfèn de shíjiān jìxù yánjiū tā de Hànzì.',vn:'Ở Đại học Sư phạm Bắc Kinh, ngoài dạy vật lý, ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán.'},
     {zh:'我们的物理老师讲课特别有意思。',py:'Wǒmen de wùlǐ lǎoshī jiǎngkè tèbié yǒu yìsi.',vn:'Thầy dạy vật lý của chúng tôi giảng bài cực kỳ thú vị.'},
     {zh:'牛顿是英国著名的物理学家。',py:'Niúdùn shì Yīngguó zhùmíng de wùlǐxuéjiā.',vn:'Newton là nhà vật lý nổi tiếng người Anh.'}
   ],
   colloFull:[
     {zh:'教物理',py:'jiāo wùlǐ',vn:'dạy vật lý'},
     {zh:'物理老师',py:'wùlǐ lǎoshī',vn:'giáo viên vật lý'},
     {zh:'物理学家',py:'wùlǐxuéjiā',vn:'nhà vật lý'},
     {zh:'物理考试',py:'wùlǐ kǎoshì',vn:'bài thi vật lý'}
   ],
   patterns:[
     {s:'除了 + 教 / 学 + 物理，还……',m:'Ngoài dạy / học vật lý ra, còn …'},
     {s:'物理 + 老师 / 考试 / 课',m:'Giáo viên / bài thi / tiết vật lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài vật lý ra, tôi còn thích hoá học.',answer:'除了物理以外，我还喜欢化学。',answerPy:'Chúle wùlǐ yǐwài, wǒ hái xǐhuan huàxué.',
      note:'物理, 化学 — từ chủ đề 学科 của phần 扩展.',pair:'除了……以外，还……'},
     {promptLang:'vi',prompt:'Bài thi vật lý lần này khó quá, ngay cả học sinh giỏi nhất lớp cũng không làm xong.',answer:'这次物理考试太难了，连班里最好的学生都没做完。',answerPy:'Zhè cì wùlǐ kǎoshì tài nán le, lián bān li zuì hǎo de xuésheng dōu méi zuòwán.',
      note:'物理考试 = bài thi vật lý.',pair:'连……都……'}
   ]},

  {n:38,zh:'完善',py:'wánshàn',pos:'Động từ / Tính từ',vn:'hoàn thiện; hoàn chỉnh, đầy đủ',hv:'hoàn thiện',em:'🛠️',lesson:1,
   explain:['Động từ: làm cho trở nên hoàn chỉnh, tốt hơn: 完善网站, 完善制度.','Tính từ: đầy đủ, hoàn chỉnh, tốt đẹp: 完善的计划, 设备很完善.'],
   usage:'Động từ: 完善 + 网站 / 制度 / 计划; 再完善一下. Tính từ: 完善的 + 制度 / 办法 / 设计 / 方案 / 法律 (bảng 词语搭配).',
   collo:['完善网站','完善的制度','完善的计划','再完善一下'],
   ex_zh:'他还有充分的时间继续研究他的汉字，完善他的网站。',ex_py:'Tā hái yǒu chōngfèn de shíjiān jìxù yánjiū tā de Hànzì, wánshàn tā de wǎngzhàn.',ex_vn:'Ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán, hoàn thiện trang web của mình.',
   exList:[
     {zh:'他还有充分的时间继续研究他的汉字，完善他的网站。',py:'Tā hái yǒu chōngfèn de shíjiān jìxù yánjiū tā de Hànzì, wánshàn tā de wǎngzhàn.',vn:'Ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán, hoàn thiện trang web của mình.'},
     {zh:'采取任何行动之前都需要有完善的计划。',py:'Cǎiqǔ rènhé xíngdòng zhīqián dōu xūyào yǒu wánshàn de jìhuà.',vn:'Trước khi hành động gì cũng cần có một kế hoạch hoàn chỉnh.'},
     {zh:'结论部分我认为有必要再完善一下。',py:'Jiélùn bùfen wǒ rènwéi yǒu bìyào zài wánshàn yíxià.',vn:'Phần kết luận tôi cho là cần hoàn thiện thêm một chút.'}
   ],
   colloFull:[
     {zh:'完善网站',py:'wánshàn wǎngzhàn',vn:'hoàn thiện trang web'},
     {zh:'完善的制度',py:'wánshàn de zhìdù',vn:'chế độ hoàn chỉnh'},
     {zh:'完善的计划',py:'wánshàn de jìhuà',vn:'kế hoạch hoàn chỉnh'},
     {zh:'再完善一下',py:'zài wánshàn yíxià',vn:'hoàn thiện thêm chút nữa'},
     {zh:'完善的方案',py:'wánshàn de fāng\'àn',vn:'phương án hoàn chỉnh'}
   ],
   patterns:[
     {s:'完善 + N (网站 / 制度 / 方案)',m:'Hoàn thiện …'},
     {s:'完善的 + N',m:'… hoàn chỉnh, đầy đủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy phương án này không tồi, nhưng vẫn cần hoàn thiện thêm chút nữa.',answer:'虽然这个方案不错，但是还需要再完善一下。',answerPy:'Suīrán zhège fāng\'àn búcuò, dànshì hái xūyào zài wánshàn yíxià.',
      note:'完善 làm động từ: 再完善一下.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Các thầy cô đã hoàn thiện lại trang web của trường, bây giờ tìm tư liệu tiện hơn nhiều.',answer:'老师们把学校的网站完善了一下，现在找资料方便多了。',answerPy:'Lǎoshīmen bǎ xuéxiào de wǎngzhàn wánshànle yíxià, xiànzài zhǎo zīliào fāngbiàn duō le.',
      note:'把 + 网站 + 完善了一下.',pair:'把'}
   ]},

  {n:39,zh:'退休',py:'tuìxiū',pos:'Động từ',vn:'về hưu, nghỉ hưu',hv:'thoái hưu',em:'👴',lesson:1,
   explain:['Thôi làm việc chính thức khi đến tuổi quy định (hoặc vì sức khoẻ) và hưởng lương hưu.'],
   usage:'Không mang tân ngữ: 退休了, 退休以后, 退休的年纪, 退休生活; lương hưu là 退休金. Không nói 退休工作.',
   collo:['退休的年纪','退休以后','已经退休了','退休金'],
   ex_zh:'在中国，60多岁已经是退休的年纪了。',ex_py:'Zài Zhōngguó, liùshí duō suì yǐjīng shì tuìxiū de niánjì le.',ex_vn:'Ở Trung Quốc, ngoài 60 tuổi đã là tuổi nghỉ hưu rồi.',
   exList:[
     {zh:'在中国，60多岁已经是退休的年纪了。',py:'Zài Zhōngguó, liùshí duō suì yǐjīng shì tuìxiū de niánjì le.',vn:'Ở Trung Quốc, ngoài 60 tuổi đã là tuổi nghỉ hưu rồi.'},
     {zh:'他说：“我不会退休，我还要继续追求我的梦想。”',py:'Tā shuō: “Wǒ bú huì tuìxiū, wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng.”',vn:'Ông nói: “Tôi sẽ không nghỉ hưu, tôi còn phải tiếp tục theo đuổi ước mơ của mình.”'},
     {zh:'爷爷退休以后，每天去公园打太极拳。',py:'Yéye tuìxiū yǐhòu, měi tiān qù gōngyuán dǎ tàijíquán.',vn:'Ông nội sau khi nghỉ hưu, ngày nào cũng ra công viên tập thái cực quyền.'}
   ],
   colloFull:[
     {zh:'退休的年纪',py:'tuìxiū de niánjì',vn:'tuổi nghỉ hưu'},
     {zh:'退休以后',py:'tuìxiū yǐhòu',vn:'sau khi nghỉ hưu'},
     {zh:'已经退休了',py:'yǐjīng tuìxiū le',vn:'đã nghỉ hưu rồi'},
     {zh:'退休金',py:'tuìxiūjīn',vn:'lương hưu'},
     {zh:'退休生活',py:'tuìxiū shēnghuó',vn:'cuộc sống hưu trí'}
   ],
   patterns:[
     {s:'Sub + 退休以后，……',m:'Sau khi ai đó nghỉ hưu, …'},
     {s:'✗ 退休工作 → ✓ 退休 / 从……岗位上退休',m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà nội đã nghỉ hưu mấy năm rồi, nhưng ngày nào cũng rất bận.',answer:'奶奶已经退休好几年了，可是每天都很忙。',answerPy:'Nǎinai yǐjīng tuìxiū hǎo jǐ nián le, kěshì měi tiān dōu hěn máng.',
      note:'退休 + thời lượng + 了: đã nghỉ hưu được bao lâu.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Bố vừa nghỉ hưu là bắt đầu học vẽ tranh.',answer:'爸爸一退休就开始学画画儿了。',answerPy:'Bàba yí tuìxiū jiù kāishǐ xué huà huàr le.',
      note:'退休 không mang tân ngữ.',pair:'一……就……'}
   ]},

  {n:40,zh:'日程',py:'rìchéng',pos:'Danh từ',vn:'lịch trình (theo ngày), chương trình làm việc',hv:'nhật trình',em:'🗓️',lesson:1,
   explain:['Kế hoạch sắp xếp công việc theo từng ngày.'],
   usage:'日程 + 安排得很满 / 很紧; 日程 + 确定 / 紧 / 满 / 松 (bảng 词语搭配); 日程表, 出访日程.',
   collo:['日程安排','日程很满','日程表','日程确定'],
   ex_zh:'汉字叔叔每天的日程却安排得很满。',ex_py:'Hànzì shūshu měi tiān de rìchéng què ānpái de hěn mǎn.',ex_vn:'Thế nhưng lịch trình mỗi ngày của Chú Chữ Hán lại được sắp xếp kín mít.',
   exList:[
     {zh:'汉字叔叔每天的日程却安排得很满。',py:'Hànzì shūshu měi tiān de rìchéng què ānpái de hěn mǎn.',vn:'Thế nhưng lịch trình mỗi ngày của Chú Chữ Hán lại được sắp xếp kín mít.'},
     {zh:'这几天的日程怎么安排得这么满？你要注意身体。',py:'Zhè jǐ tiān de rìchéng zěnme ānpái de zhème mǎn? Nǐ yào zhùyì shēntǐ.',vn:'Mấy hôm nay lịch sao kín thế? Anh phải chú ý sức khoẻ đấy.'},
     {zh:'出访的日程表我看过了，有些地方不够合理。',py:'Chūfǎng de rìchéngbiǎo wǒ kànguo le, yǒuxiē dìfang bú gòu hélǐ.',vn:'Lịch trình chuyến công du tôi xem rồi, có mấy chỗ chưa hợp lý lắm.'}
   ],
   colloFull:[
     {zh:'日程安排',py:'rìchéng ānpái',vn:'sự sắp xếp lịch trình'},
     {zh:'日程很满',py:'rìchéng hěn mǎn',vn:'lịch kín'},
     {zh:'日程表',py:'rìchéngbiǎo',vn:'bảng lịch trình'},
     {zh:'日程确定',py:'rìchéng quèdìng',vn:'lịch trình đã định'},
     {zh:'日程很紧',py:'rìchéng hěn jǐn',vn:'lịch dày, gấp'}
   ],
   patterns:[
     {s:'日程 + 安排得 + 很满 / 很紧',m:'Lịch trình được sắp xếp kín / dày'},
     {s:'日程 + 确定 / 紧 / 满 / 松',m:'Lịch trình đã định / dày / kín / thưa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lịch tuần này rất dày, nhưng cô ấy vẫn dành thời gian đi thăm bà.',answer:'虽然这个星期的日程很紧，但是她还是抽时间去看了奶奶。',answerPy:'Suīrán zhège xīngqī de rìchéng hěn jǐn, dànshì tā háishi chōu shíjiān qù kànle nǎinai.',
      note:'日程很紧 = lịch dày; 抽时间 = dành thời gian.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lịch trình vừa định xong là tôi gửi email cho anh ngay.',answer:'日程一确定，我就给你发邮件。',answerPy:'Rìchéng yí quèdìng, wǒ jiù gěi nǐ fā yóujiàn.',
      note:'日程 + 确定 (bảng 词语搭配).',pair:'一……就……'}
   ]},

  {n:41,zh:'追求',py:'zhuīqiú',pos:'Động từ',vn:'theo đuổi',hv:'truy cầu',em:'🎯',lesson:1,
   explain:['Cố gắng hết sức để đạt được một mục tiêu, lý tưởng.','Còn nghĩa theo đuổi người mình thích: 他在追求一个女孩儿.'],
   usage:'追求 + 梦想 / 理想 / 爱情 / 科学 / 知识 / 健康 / 外表 / 权力 / 速度 / 质量 / 享受 / 时髦 / 独立 / 进步 (bảng 词语搭配). 过于追求 = chạy theo quá mức.',
   collo:['追求梦想','追求理想','追求享受','追求质量'],
   ex_zh:'我还要继续追求我的梦想，我要“活到老，学到老”。',ex_py:'Wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng, wǒ yào “huó dào lǎo, xué dào lǎo”.',ex_vn:'Tôi còn phải tiếp tục theo đuổi ước mơ của mình, tôi muốn “sống đến già, học đến già”.',
   exList:[
     {zh:'我还要继续追求我的梦想，我要“活到老，学到老”。',py:'Wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng, wǒ yào “huó dào lǎo, xué dào lǎo”.',vn:'Tôi còn phải tiếp tục theo đuổi ước mơ của mình, tôi muốn “sống đến già, học đến già”.'},
     {zh:'爸爸平时常提醒我，生活上不要过于追求享受。',py:'Bàba píngshí cháng tíxǐng wǒ, shēnghuó shang búyào guòyú zhuīqiú xiǎngshòu.',vn:'Bố thường nhắc tôi, trong cuộc sống đừng quá chạy theo hưởng thụ.'},
     {zh:'做产品不能只追求速度，更要追求质量。',py:'Zuò chǎnpǐn bù néng zhǐ zhuīqiú sùdù, gèng yào zhuīqiú zhìliàng.',vn:'Làm sản phẩm không thể chỉ chạy theo tốc độ, càng phải theo đuổi chất lượng.'}
   ],
   colloFull:[
     {zh:'追求梦想',py:'zhuīqiú mèngxiǎng',vn:'theo đuổi ước mơ'},
     {zh:'追求理想',py:'zhuīqiú lǐxiǎng',vn:'theo đuổi lý tưởng'},
     {zh:'追求享受',py:'zhuīqiú xiǎngshòu',vn:'chạy theo hưởng thụ'},
     {zh:'追求质量',py:'zhuīqiú zhìliàng',vn:'theo đuổi chất lượng'},
     {zh:'追求时髦',py:'zhuīqiú shímáo',vn:'chạy theo mốt'}
   ],
   patterns:[
     {s:'Sub + 继续 / 一直 + 追求 + 梦想 / 理想',m:'Tiếp tục / luôn theo đuổi ước mơ, lý tưởng'},
     {s:'不要过于追求 + N',m:'Đừng quá chạy theo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù người khác nói gì, tôi cũng sẽ tiếp tục theo đuổi ước mơ của mình.',answer:'不管别人说什么，我都会继续追求自己的梦想。',answerPy:'Bùguǎn biéren shuō shénme, wǒ dōu huì jìxù zhuīqiú zìjǐ de mèngxiǎng.',
      note:'追求 + 梦想 — cụm của bài khoá.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Người trẻ bây giờ ngày càng chạy theo mốt.',answer:'现在的年轻人越来越追求时髦了。',answerPy:'Xiànzài de niánqīngrén yuè lái yuè zhuīqiú shímáo le.',
      note:'追求时髦 (bảng 词语搭配).',pair:'越来越'}
   ]},

  {n:42,zh:'梦想',py:'mèngxiǎng',pos:'Danh từ / Động từ',vn:'ước mơ; mơ ước',hv:'mộng tưởng',em:'🌈',lesson:1,
   explain:['Danh từ: điều mơ ước, mong muốn tốt đẹp muốn đạt được.','Động từ: khao khát, mơ ước làm gì: 她从小就梦想当医生.'],
   usage:'Danh từ: 追求 / 实现 + 梦想; 梦想 + 实现 / (被)打破 (bảng 词语搭配); 我的梦想是……. Động từ: 梦想 + cụm động từ.',
   collo:['追求梦想','实现梦想','梦想被打破','我的梦想是'],
   ex_zh:'我不会退休，我还要继续追求我的梦想。',ex_py:'Wǒ bú huì tuìxiū, wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng.',ex_vn:'Tôi sẽ không nghỉ hưu, tôi còn phải tiếp tục theo đuổi ước mơ của mình.',
   exList:[
     {zh:'我不会退休，我还要继续追求我的梦想。',py:'Wǒ bú huì tuìxiū, wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng.',vn:'Tôi sẽ không nghỉ hưu, tôi còn phải tiếp tục theo đuổi ước mơ của mình.'},
     {zh:'经过多年的努力，他终于实现了自己的梦想。',py:'Jīngguò duō nián de nǔlì, tā zhōngyú shíxiànle zìjǐ de mèngxiǎng.',vn:'Sau nhiều năm nỗ lực, anh ấy cuối cùng đã thực hiện được ước mơ của mình.'},
     {zh:'她从小就梦想当一名医生。',py:'Tā cóngxiǎo jiù mèngxiǎng dāng yì míng yīshēng.',vn:'Cô ấy từ nhỏ đã mơ ước trở thành bác sĩ.'}
   ],
   colloFull:[
     {zh:'追求梦想',py:'zhuīqiú mèngxiǎng',vn:'theo đuổi ước mơ'},
     {zh:'实现梦想',py:'shíxiàn mèngxiǎng',vn:'thực hiện ước mơ'},
     {zh:'梦想被打破',py:'mèngxiǎng bèi dǎpò',vn:'ước mơ bị tan vỡ'},
     {zh:'我的梦想是',py:'wǒ de mèngxiǎng shì',vn:'ước mơ của tôi là'},
     {zh:'梦想成真',py:'mèngxiǎng chéng zhēn',vn:'ước mơ thành hiện thực'}
   ],
   patterns:[
     {s:'我的梦想是 + V……',m:'Ước mơ của tôi là …'},
     {s:'实现 / 追求 + 梦想',m:'Thực hiện / theo đuổi ước mơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì, ước mơ của cậu nhất định sẽ thành hiện thực.',answer:'只要坚持下去，你的梦想就一定能实现。',answerPy:'Zhǐyào jiānchí xiaqu, nǐ de mèngxiǎng jiù yídìng néng shíxiàn.',
      note:'梦想 + 实现 (bảng 词语搭配).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ước mơ của cô ấy bị một trận ốm làm tan vỡ.',answer:'她的梦想被一场病打破了。',answerPy:'Tā de mèngxiǎng bèi yì cháng bìng dǎpò le.',
      note:'梦想 + (被) 打破 (bảng 词语搭配).',pair:'被'}
   ]},

  {n:43,zh:'理查德·希尔斯',py:'Lǐchádé Xī\'ěrsī',pos:'Danh từ riêng',vn:'Richard Sears (“Chú Chữ Hán”)',hv:'Lý Tra Đức · Hi Nhĩ Tư',em:'👨‍🦳',lesson:1,
   explain:['Người Mỹ, năm 22 tuổi (1972) phải lòng tiếng Trung; lập trang web tra nguồn gốc chữ Hán (Chinese Etymology), được cư dân mạng Trung Quốc gọi là “汉字叔叔” (Chú Chữ Hán).'],
   usage:'Tên người nước ngoài phiên âm: 理查德 (Richard) · 希尔斯 (Sears). Trong bài hay gọi tắt 理查德 hoặc biệt danh 汉字叔叔.',
   collo:['理查德·希尔斯','汉字叔叔理查德','理查德的网站'],
   ex_zh:'1972年，22岁的理查德·希尔斯爱上了中文。',ex_py:'Yī jiǔ qī èr nián, èrshí\'èr suì de Lǐchádé Xī\'ěrsī àishangle Zhōngwén.',ex_vn:'Năm 1972, Richard Sears 22 tuổi đã phải lòng tiếng Trung.',
   exList:[
     {zh:'1972年，22岁的理查德·希尔斯爱上了中文。',py:'Yī jiǔ qī èr nián, èrshí\'èr suì de Lǐchádé Xī\'ěrsī àishangle Zhōngwén.',vn:'Năm 1972, Richard Sears 22 tuổi đã phải lòng tiếng Trung.'},
     {zh:'理查德选择了去北京师范大学教书。',py:'Lǐchádé xuǎnzéle qù Běijīng Shīfàn Dàxué jiāoshū.',vn:'Richard đã chọn đến Đại học Sư phạm Bắc Kinh dạy học.'}
   ],
   colloFull:[
     {zh:'理查德·希尔斯',py:'Lǐchádé Xī\'ěrsī',vn:'Richard Sears'},
     {zh:'汉字叔叔理查德',py:'Hànzì shūshu Lǐchádé',vn:'Chú Chữ Hán Richard'},
     {zh:'理查德的网站',py:'Lǐchádé de wǎngzhàn',vn:'trang web của Richard'}
   ],
   patterns:[
     {s:'理查德 + 被称呼为 + “汉字叔叔”',m:'Richard được gọi là “Chú Chữ Hán”'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Richard Sears được cư dân mạng gọi là “Chú Chữ Hán”.',answer:'理查德·希尔斯被网友称呼为“汉字叔叔”。',answerPy:'Lǐchádé Xī\'ěrsī bèi wǎngyǒu chēnghu wéi “Hànzì shūshu”.',
      note:'Tên người nước ngoài: 名 · 姓.',pair:'被'},
     {promptLang:'vi',prompt:'Richard không chỉ am hiểu chữ Hán mà còn biết dạy vật lý.',answer:'理查德不仅懂汉字，也会教物理。',answerPy:'Lǐchádé bùjǐn dǒng Hànzì, yě huì jiāo wùlǐ.',
      note:'Gọi tắt bằng tên 理查德.',pair:'不仅……也……'}
   ]},

  {n:44,zh:'说文解字',py:'Shuōwén Jiězì',pos:'Danh từ riêng',vn:'Thuyết văn giải tự (tên sách)',hv:'Thuyết văn giải tự',em:'📖',lesson:1,
   explain:['Bộ tự điển chữ Hán đầu tiên của Trung Quốc, do Hứa Thận (许慎) thời Đông Hán soạn, giải thích hình, âm, nghĩa và nguồn gốc của hơn 9.000 chữ.','Tên sách luôn viết trong dấu 《》.'],
   usage:'《说文解字》. 说文 = giảng chữ đơn thể (文), 解字 = phân tích chữ hợp thể (字).',
   collo:['《说文解字》','把《说文解字》电脑化','查《说文解字》'],
   ex_zh:'我要抓紧时间尽快把《说文解字》电脑化。',ex_py:'Wǒ yào zhuājǐn shíjiān jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà.',ex_vn:'Tôi phải tranh thủ thời gian số hoá 《Thuyết văn giải tự》 càng sớm càng tốt.',
   exList:[
     {zh:'我要抓紧时间尽快把《说文解字》电脑化。',py:'Wǒ yào zhuājǐn shíjiān jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà.',vn:'Tôi phải tranh thủ thời gian số hoá 《Thuyết văn giải tự》 càng sớm càng tốt.'},
     {zh:'《说文解字》是中国第一部系统分析汉字字形的字典。',py:'《Shuōwén Jiězì》 shì Zhōngguó dì-yī bù xìtǒng fēnxī Hànzì zìxíng de zìdiǎn.',vn:'《Thuyết văn giải tự》 là bộ tự điển đầu tiên của Trung Quốc phân tích tự hình chữ Hán một cách có hệ thống.'}
   ],
   colloFull:[
     {zh:'《说文解字》',py:'《Shuōwén Jiězì》',vn:'Thuyết văn giải tự'},
     {zh:'把《说文解字》电脑化',py:'bǎ 《Shuōwén Jiězì》 diànnǎohuà',vn:'số hoá Thuyết văn giải tự'},
     {zh:'查《说文解字》',py:'chá 《Shuōwén Jiězì》',vn:'tra Thuyết văn giải tự'}
   ],
   patterns:[
     {s:'查一下《说文解字》 + 就知道……',m:'Tra Thuyết văn giải tự là biết …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn biết nguồn gốc của chữ này, cậu có thể tra 《Thuyết văn giải tự》 thử xem.',answer:'想知道这个字的来源，你可以查一下《说文解字》。',answerPy:'Xiǎng zhīdào zhège zì de láiyuán, nǐ kěyǐ chá yíxià 《Shuōwén Jiězì》.',
      note:'Tên sách đặt trong 《》.',pair:'V + 一下'},
     {promptLang:'vi',prompt:'Richard đã nhập 《Thuyết văn giải tự》 vào máy tính.',answer:'理查德把《说文解字》输入了电脑。',answerPy:'Lǐchádé bǎ 《Shuōwén Jiězì》 shūrùle diànnǎo.',
      note:'把 + tên sách + 输入电脑.',pair:'把'}
   ]},

  {n:45,zh:'北京师范大学',py:'Běijīng Shīfàn Dàxué',pos:'Danh từ riêng',vn:'Đại học Sư phạm Bắc Kinh',hv:'Bắc Kinh Sư phạm Đại học',em:'🏫',lesson:1,
   explain:['Một trong những trường đại học hàng đầu Trung Quốc về đào tạo giáo viên, gọi tắt 北师大 (Běishīdà).'],
   usage:'Gọi tắt: 北师大. 师范 = sư phạm; 师范大学 = đại học sư phạm.',
   collo:['北师大','去北京师范大学教书','师范大学'],
   ex_zh:'理查德选择了去北京师范大学教书。',ex_py:'Lǐchádé xuǎnzéle qù Běijīng Shīfàn Dàxué jiāoshū.',ex_vn:'Richard đã chọn đến Đại học Sư phạm Bắc Kinh dạy học.',
   exList:[
     {zh:'理查德选择了去北京师范大学教书。',py:'Lǐchádé xuǎnzéle qù Běijīng Shīfàn Dàxué jiāoshū.',vn:'Richard đã chọn đến Đại học Sư phạm Bắc Kinh dạy học.'},
     {zh:'在北师大，他除了教物理，还有充分的时间继续研究汉字。',py:'Zài Běishīdà, tā chúle jiāo wùlǐ, hái yǒu chōngfèn de shíjiān jìxù yánjiū Hànzì.',vn:'Ở Đại học Sư phạm Bắc Kinh, ngoài dạy vật lý, ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán.'}
   ],
   colloFull:[
     {zh:'北师大',py:'Běishīdà',vn:'ĐH Sư phạm Bắc Kinh (gọi tắt)'},
     {zh:'去北京师范大学教书',py:'qù Běijīng Shīfàn Dàxué jiāoshū',vn:'đến ĐH Sư phạm Bắc Kinh dạy học'},
     {zh:'师范大学',py:'shīfàn dàxué',vn:'đại học sư phạm'}
   ],
   patterns:[
     {s:'北京师范大学 → 北师大',m:'Cách gọi tắt tên trường: lấy chữ đầu của mỗi phần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chị tôi muốn thi vào Đại học Sư phạm Bắc Kinh, vì chị ấy muốn làm giáo viên.',answer:'我姐姐想考北京师范大学，因为她想当老师。',answerPy:'Wǒ jiějie xiǎng kǎo Běijīng Shīfàn Dàxué, yīnwèi tā xiǎng dāng lǎoshī.',
      note:'考 + tên trường = thi vào trường.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Richard dạy vật lý ở Đại học Sư phạm Bắc Kinh (nhấn mạnh nơi chốn).',answer:'理查德是在北京师范大学教物理的。',answerPy:'Lǐchádé shì zài Běijīng Shīfàn Dàxué jiāo wùlǐ de.',
      note:'是 + 在 + nơi chốn + V + 的.',pair:'是……的'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 汉字叔叔：一个美国人的汉字情缘 (657字, tr. 30–32)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 汉字叔叔：一个美国人的汉字情缘',
    preQuiz:[
      {q:'理查德是哪一年爱上中文的？',opts:['1972年','1994年','2002年'],ans:0},
      {q:'最初，理查德觉得汉字怎么样？',opts:['很简单','很复杂，一笔一画没有任何逻辑','很漂亮，很好记'],ans:1},
      {q:'一个偶然的机会，他发现怎样学汉字会变得轻松、容易？',opts:['每个字多写几遍','死记硬背','了解汉字的来源和演变过程'],ans:2},
      {q:'他遗憾地发现了什么？',opts:['几乎没有一本英文书能充分解释汉字的字源','中国人不喜欢汉字','汉字的数量太多了'],ans:0},
      {q:'1994年，理查德怎么了？',opts:['来到了中国','得了心脏病','退休了'],ans:1},
      {q:'他说如果还能活一年，他要做什么？',opts:['打电话和朋友们说再见','去中国旅游','抓紧时间尽快把《说文解字》电脑化'],ans:2},
      {q:'仅仅复印、整理和把资料输入电脑，就用了多长时间？',opts:['8年','2年','24小时'],ans:0},
      {q:'2002年元旦，战胜疾病的他决定做什么？',opts:['关闭自己的网站','把自己创办的网站公开','去北京工作'],ans:1},
      {q:'2011年，有人把他的故事放到了哪儿？',opts:['报纸上','电视上','微博上'],ans:2},
      {q:'他的网站被网友称赞为什么？',opts:['有图有真相','活到老，学到老','汉字情缘'],ans:0},
      {q:'文中说“更让人佩服的是”什么？',opts:['网站设计得很漂亮','网站的内容全部开放给网友免费下载','他会说很多方言'],ans:1},
      {q:'理查德为什么选择去北京师范大学教书？',opts:['那里的工资最高','那里离他家最近','那里也有人在做汉字识别查询的研究'],ans:2},
      {q:'60多岁的汉字叔叔每天的日程怎么样？',opts:['安排得很满','非常轻松','已经退休了，没有日程'],ans:0}
    ],
    lines:[
      {
        sp:0,
        zh:'1972年，22岁的理查德·希尔斯爱上了中文，但是他感觉汉字很复杂，汉字的一笔一画没有任何逻辑，只能死记硬背。一个偶然的机会，他发现如果了解汉字的来源和演变过程，再学习它就变得轻松、容易。但是他遗憾地发现，几乎没有一本英文书能充分解释汉字的字源。',
        py:'Yī jiǔ qī èr nián, èrshí\'èr suì de Lǐchádé Xī\'ěrsī àishangle Zhōngwén, dànshì tā gǎnjué Hànzì hěn fùzá, Hànzì de yì bǐ yí huà méiyǒu rènhé luójí, zhǐ néng sǐjì-yìngbèi. Yí ge ǒurán de jīhuì, tā fāxiàn rúguǒ liǎojiě Hànzì de láiyuán hé yǎnbiàn guòchéng, zài xuéxí tā jiù biàn de qīngsōng, róngyì. Dànshì tā yíhàn de fāxiàn, jīhū méiyǒu yì běn Yīngwén shū néng chōngfèn jiěshì Hànzì de zìyuán.',
        vn:'Năm 1972, Richard Sears 22 tuổi đã phải lòng tiếng Trung, nhưng anh cảm thấy chữ Hán rất phức tạp, từng nét từng nét của chữ Hán chẳng có chút logic nào, chỉ có thể học vẹt. Một dịp tình cờ, anh phát hiện ra rằng nếu hiểu được nguồn gốc và quá trình biến đổi của chữ Hán thì học nó sẽ trở nên nhẹ nhàng, dễ dàng. Nhưng anh tiếc nuối nhận ra rằng hầu như không có cuốn sách tiếng Anh nào giải thích đầy đủ nguồn gốc của chữ Hán.'
      },
      {
        sp:0,
        zh:'1994年，理查德得了心脏病，当时医生说他剩下的时间可能不多了。那时，他开始思考自己的人生，“我该怎么办？我该做什么？”“如果只能活24小时，我会打电话和朋友们说再见；如果我还能活一年，我要抓紧时间尽快把《说文解字》电脑化。”就这样，一部部古汉字经典进入他的资料库，仅仅复印、整理和把这些资料输入电脑就用了8年。2002年元旦，战胜疾病的他决定把自己创办的网站公开，让更多喜欢中文的人在学习汉字时，不再像他最初那样学得那么痛苦。',
        py:'Yī jiǔ jiǔ sì nián, Lǐchádé déle xīnzàngbìng, dāngshí yīshēng shuō tā shèngxia de shíjiān kěnéng bù duō le. Nà shí, tā kāishǐ sīkǎo zìjǐ de rénshēng, “Wǒ gāi zěnme bàn? Wǒ gāi zuò shénme?” “Rúguǒ zhǐ néng huó èrshísì xiǎoshí, wǒ huì dǎ diànhuà hé péngyoumen shuō zàijiàn; rúguǒ wǒ hái néng huó yì nián, wǒ yào zhuājǐn shíjiān jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà.” Jiù zhèyàng, yí bùbù gǔ Hànzì jīngdiǎn jìnrù tā de zīliàokù, jǐnjǐn fùyìn, zhěnglǐ hé bǎ zhèxiē zīliào shūrù diànnǎo jiù yòngle bā nián. Èr líng líng èr nián Yuándàn, zhànshèng jíbìng de tā juédìng bǎ zìjǐ chuàngbàn de wǎngzhàn gōngkāi, ràng gèng duō xǐhuan Zhōngwén de rén zài xuéxí Hànzì shí, bú zài xiàng tā zuìchū nàyàng xué de nàme tòngkǔ.',
        vn:'Năm 1994, Richard mắc bệnh tim, lúc đó bác sĩ nói thời gian còn lại của anh có lẽ không nhiều nữa. Khi ấy, anh bắt đầu suy ngẫm về cuộc đời mình: “Mình nên làm sao đây? Mình nên làm gì?” “Nếu chỉ còn sống được 24 tiếng, mình sẽ gọi điện chào tạm biệt bạn bè; nếu còn sống được một năm, mình phải tranh thủ thời gian số hoá 《Thuyết văn giải tự》 càng sớm càng tốt.” Cứ thế, từng bộ kinh điển về chữ Hán cổ lần lượt vào kho tư liệu của anh; chỉ riêng việc photo, sắp xếp và nhập những tư liệu này vào máy tính đã mất 8 năm. Tết Dương lịch năm 2002, đã chiến thắng bệnh tật, anh quyết định công khai trang web do mình lập ra, để nhiều người yêu tiếng Trung hơn khi học chữ Hán không còn phải học khổ sở như anh thuở ban đầu.'
      },
      {
        sp:0,
        zh:'2011年，有人把他的故事放到微博上，引起了广泛关注，他也因此被网友亲切地称呼为“汉字叔叔”。',
        py:'Èr líng yī yī nián, yǒu rén bǎ tā de gùshi fàngdào wēibó shang, yǐnqǐle guǎngfàn guānzhù, tā yě yīncǐ bèi wǎngyǒu qīnqiè de chēnghu wéi “Hànzì shūshu”.',
        vn:'Năm 2011, có người đưa câu chuyện của anh lên Weibo, thu hút sự chú ý rộng rãi, anh cũng vì thế mà được cư dân mạng thân mật gọi là “Chú Chữ Hán”.'
      },
      {
        sp:0,
        zh:'打开汉字叔叔克服种种困难、花光全部积蓄创办的网站，可以看到他收集整理的近10万个汉字，包含了它们演变的全部字形，当然也包括繁体字形和简体字形，还有普通话和部分方言读音、英文释义等内容，被网友称赞为“有图有真相”。更让人佩服的是，汉字叔叔将网站上的内容全部开放给网友免费下载。',
        py:'Dǎkāi Hànzì shūshu kèfú zhǒngzhǒng kùnnan, huāguāng quánbù jīxù chuàngbàn de wǎngzhàn, kěyǐ kàndào tā shōují zhěnglǐ de jìn shí wàn ge Hànzì, bāohánle tāmen yǎnbiàn de quánbù zìxíng, dāngrán yě bāokuò fántǐ zìxíng hé jiǎntǐ zìxíng, hái yǒu pǔtōnghuà hé bùfen fāngyán dúyīn, Yīngwén shìyì děng nèiróng, bèi wǎngyǒu chēngzàn wéi “yǒu tú yǒu zhēnxiàng”. Gèng ràng rén pèifú de shì, Hànzì shūshu jiāng wǎngzhàn shang de nèiróng quánbù kāifàng gěi wǎngyǒu miǎnfèi xiàzài.',
        vn:'Mở trang web mà Chú Chữ Hán đã vượt qua bao khó khăn, tiêu sạch toàn bộ tiền tiết kiệm để lập ra, có thể thấy gần 100 nghìn chữ Hán do ông thu thập, sắp xếp, bao gồm toàn bộ tự hình trong quá trình biến đổi của chúng, dĩ nhiên có cả tự hình phồn thể và giản thể, lại còn có cách đọc theo tiếng phổ thông và một số phương ngữ, phần giải nghĩa bằng tiếng Anh…, được cư dân mạng khen là “có hình có sự thật”. Điều khiến người ta khâm phục hơn nữa là Chú Chữ Hán mở toàn bộ nội dung trên trang web cho cư dân mạng tải về miễn phí.'
      },
      {
        sp:0,
        zh:'现在，有很多单位向理查德发出了工作邀请，而理查德选择了去北京师范大学教书，因为那里也有人在做汉字识别查询的研究。在北师大，他除了教物理，还有充分的时间继续研究他的汉字，完善他的网站。',
        py:'Xiànzài, yǒu hěn duō dānwèi xiàng Lǐchádé fāchūle gōngzuò yāoqǐng, ér Lǐchádé xuǎnzéle qù Běijīng Shīfàn Dàxué jiāoshū, yīnwèi nàli yě yǒu rén zài zuò Hànzì shíbié cháxún de yánjiū. Zài Běishīdà, tā chúle jiāo wùlǐ, hái yǒu chōngfèn de shíjiān jìxù yánjiū tā de Hànzì, wánshàn tā de wǎngzhàn.',
        vn:'Hiện nay có rất nhiều cơ quan gửi lời mời làm việc tới Richard, còn Richard thì chọn đến Đại học Sư phạm Bắc Kinh dạy học, vì ở đó cũng có người đang nghiên cứu về nhận dạng và tra cứu chữ Hán. Ở Đại học Sư phạm Bắc Kinh, ngoài dạy vật lý, ông còn có nhiều thời gian để tiếp tục nghiên cứu chữ Hán, hoàn thiện trang web của mình.'
      },
      {
        sp:0,
        zh:'在中国，60多岁已经是退休的年纪了。但汉字叔叔每天的日程却安排得很满。他说：“我不会退休，我还要继续追求我的梦想，我要‘活到老，学到老’。”',
        py:'Zài Zhōngguó, liùshí duō suì yǐjīng shì tuìxiū de niánjì le. Dàn Hànzì shūshu měi tiān de rìchéng què ānpái de hěn mǎn. Tā shuō: “Wǒ bú huì tuìxiū, wǒ hái yào jìxù zhuīqiú wǒ de mèngxiǎng, wǒ yào ‘huó dào lǎo, xué dào lǎo’.”',
        vn:'Ở Trung Quốc, ngoài 60 tuổi đã là tuổi nghỉ hưu rồi. Thế nhưng lịch làm việc mỗi ngày của Chú Chữ Hán lại được sắp xếp kín mít. Ông nói: “Tôi sẽ không nghỉ hưu, tôi còn phải tiếp tục theo đuổi ước mơ của mình, tôi muốn ‘sống đến già, học đến già’.”'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 偶然/偶尔 là cặp 词语辨析 của sách (tr. 35) + 2 cặp tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'偶然 — 偶尔',
    same:'Đều có thể là phó từ, đều có nghĩa “không thường xuyên”; có lúc thay nhau được nhưng sắc thái hơi khác nhau.',
    sameEx:{zh:'在校园里，我偶然／偶尔也会碰到李艳。',vn:'Trong khuôn viên trường, thỉnh thoảng tôi cũng gặp Lý Diễm.'},
    items:[
      {
        word:'偶然',
        points:[
          'Nhấn mạnh sự BẤT NGỜ, không định trước — đối lập với 必然 (tất nhiên).',
          'Còn là TÍNH TỪ: làm định ngữ (偶然的机会), vị ngữ (并非偶然); phía trước thêm được phó từ mức độ: 非常偶然, 很偶然地.',
          'Hay đi với 发现, 遇到, 碰到: 偶然发现.'
        ],
        ex:[
          {zh:'这本书是她一次逛书市时偶然发现的。',vn:'Cuốn sách này là cô ấy tình cờ phát hiện ra trong một lần đi dạo hội sách.'},
          {zh:'李阳的父亲是一位画家，所以，李阳喜欢画画儿并非偶然。',vn:'Bố của Lý Dương là một họa sĩ, vì vậy Lý Dương thích vẽ tranh không phải là ngẫu nhiên.'}
        ]
      },
      {
        word:'偶尔',
        points:[
          'Nhấn mạnh SỐ LẦN ÍT — đối lập với 经常 (thường xuyên).',
          'Ngoài phó từ, chỉ làm ĐỊNH NGỮ (偶尔的聚会); KHÔNG thêm phó từ mức độ (không nói 很偶尔), KHÔNG làm vị ngữ.',
          'Hay đi với 也: 偶尔也……; 偶尔有一两次.'
        ],
        ex:[
          {zh:'我平时加班不多，月底偶尔有一两天。',vn:'Bình thường tôi không tăng ca nhiều, cuối tháng thỉnh thoảng có một hai hôm.'},
          {zh:'他在农村的生活很单调，偶尔的聚会还是在村里的老房子里举行，很无聊。',vn:'Cuộc sống ở nông thôn của anh ấy rất đơn điệu, thỉnh thoảng có buổi tụ họp thì cũng tổ chức ở căn nhà cũ trong làng, rất chán.'}
        ]
      }
    ],
    quiz:[
      {sentence:'和刘峰在上海的那次碰面非常＿＿。',options:['偶然','偶尔'],answer:0,why:'Làm VỊ NGỮ, trước có 非常 → chỉ 偶然. 偶尔 không thêm phó từ mức độ, không làm vị ngữ.'},
      {sentence:'在昨天的训练中，他很＿＿地和队友撞在了一起，受了伤。',options:['偶然','偶尔'],answer:0,why:'很 + ＿＿ + 地: có phó từ mức độ, nghĩa bất ngờ, không định trước → 偶然.'},
      {sentence:'她们多半会到丽丽家玩儿，＿＿也会去吃饭看电影。',options:['偶然','偶尔'],answer:1,why:'多半 (phần lớn) đối lập với SỐ LẦN ÍT → 偶尔也会…….'},
      {sentence:'大家都安静地吃着，只听到筷子碰到碗边儿的声音和＿＿的几声咳嗽。',options:['偶然','偶尔'],answer:1,why:'Vài tiếng ho lác đác — nhấn mạnh số lần ít → 偶尔的 làm định ngữ.'}
    ],
    sgk:{
      chung:{
        t:'都可以是副词，都有不经常的意思，有时可以互换，但意思稍有不同。',
        vn:'Đều có thể là phó từ, đều có nghĩa không thường xuyên, có lúc thay nhau được nhưng ý nghĩa hơi khác nhau.',
        vd:'在校园里，我偶然／偶尔也会碰到李艳。',
        vdVn:'Trong khuôn viên trường, thỉnh thoảng tôi cũng gặp Lý Diễm.'
      },
      khac:[
        {
          a:{
            t:'词义侧重表示有些突然、没想到，跟“必然”相对。',
            vn:'Nghĩa thiên về sự hơi đột ngột, không ngờ tới; đối lập với “必然” (tất nhiên).',
            vd:'这本书是她一次逛书市时偶然发现的。',
            vdVn:'Cuốn sách này là cô ấy tình cờ phát hiện ra trong một lần đi dạo hội sách.'
          },
          b:{
            t:'词义侧重强调次数少，跟“经常”相对。',
            vn:'Nghĩa thiên về nhấn mạnh số lần ít; đối lập với “经常” (thường xuyên).',
            vd:'我平时加班不多，月底偶尔有一两天。',
            vdVn:'Bình thường tôi không tăng ca nhiều, cuối tháng thỉnh thoảng có một hai hôm.'
          }
        },
        {
          a:{
            t:'还可以表示事情发生在意料之外的，或按一般规律看不可能发生的。可做定语、谓语，前面可带程度副词。',
            vn:'Còn biểu thị sự việc xảy ra ngoài dự liệu, hoặc theo quy luật thông thường thì không thể xảy ra. Có thể làm định ngữ, vị ngữ, phía trước có thể mang phó từ chỉ mức độ.',
            vd:'李阳的父亲是一位画家，所以，李阳喜欢画画儿并非偶然。',
            vdVn:'Bố của Lý Dương là một họa sĩ, vì vậy Lý Dương thích vẽ tranh không phải là ngẫu nhiên.'
          },
          b:{
            t:'还可以是属性词，只做定语，前面不能加程度副词，也不能做谓语，这种用法不常用。',
            vn:'Còn có thể là từ thuộc tính, chỉ làm định ngữ, phía trước không thêm được phó từ mức độ, cũng không làm vị ngữ được; cách dùng này không phổ biến.',
            vd:'他在农村的生活很单调，偶尔的聚会还是在村里的老房子里举行，很无聊。',
            vdVn:'Cuộc sống ở nông thôn của anh ấy rất đơn điệu, thỉnh thoảng có buổi tụ họp thì cũng tổ chức ở căn nhà cũ trong làng, rất chán.'
          }
        }
      ],
      lamThu:[
        {s:'和刘峰在上海的那次碰面非常＿＿。',dap:[true,false],mau:true,giai:'Làm vị ngữ, có phó từ mức độ 非常 → chỉ 偶然.'},
        {s:'在昨天的训练中，他很＿＿地和队友撞在了一起，受了伤。',dap:[true,false],giai:'Va chạm bất ngờ, trước có 很 → chỉ 偶然 (偶尔 không thêm phó từ mức độ).'},
        {s:'她们多半会到丽丽家玩儿，＿＿也会去吃饭看电影。',dap:[false,true],giai:'Đối lập tần suất với 多半 (phần lớn) → 偶尔. (偶然 làm phó từ cũng có nghĩa “thỉnh thoảng”, nhưng ở đây nhấn mạnh số lần ít nên 偶尔 là tự nhiên nhất.)'},
        {s:'大家都安静地吃着，只听到筷子碰到碗边儿的声音和＿＿的几声咳嗽。',dap:[false,true],giai:'Vài tiếng ho lác đác — số lần ít, làm định ngữ → 偶尔的.'}
      ]
    }
  },
  {
    pair:'公开 — 开放',
    same:'Đều mang ý “mở ra, không khép kín”, đều làm động từ được; trong bài khoá cả hai đều nói về trang web của Chú Chữ Hán.',
    sameEx:{zh:'他决定把网站公开，还把网站上的内容全部开放给网友。',vn:'Ông quyết định công khai trang web, còn mở toàn bộ nội dung trên đó cho cư dân mạng.'},
    items:[
      {
        word:'公开',
        points:[
          'Làm cho điều vốn KÍN trở thành ai cũng BIẾT: 公开成绩, 公开身份.',
          'Là tính từ: 公开的秘密 (bí mật ai cũng biết), 公开道歉 (xin lỗi trước mọi người).',
          'Trái nghĩa: 秘密, 私下 (kín đáo, riêng tư).'
        ],
        ex:[
          {zh:'这次考试的成绩下周公开。',vn:'Điểm kỳ thi này tuần sau sẽ công bố.'},
          {zh:'他们的恋情已经是公开的秘密了。',vn:'Chuyện tình của họ đã là bí mật ai cũng biết.'}
        ]
      },
      {
        word:'开放',
        points:[
          'Cho mọi người VÀO, SỬ DỤNG một nơi, một nguồn tài nguyên: 公园开放, 图书馆开放, 开放给网友下载.',
          'Hay đi với 对 / 向 + người và với thời gian: 对外开放, 开放时间.',
          'Còn nghĩa “cởi mở”: 思想开放; trái nghĩa 关闭, 封闭 (bài 14).'
        ],
        ex:[
          {zh:'这个博物馆每周一不开放。',vn:'Bảo tàng này thứ Hai hằng tuần không mở cửa.'},
          {zh:'学校图书馆周末也对学生开放。',vn:'Thư viện trường cuối tuần cũng mở cửa cho học sinh.'}
        ]
      }
    ],
    quiz:[
      {sentence:'其实，林峰与刘医生的恋情，在医院里已经是＿＿的秘密了。',options:['公开','开放'],answer:0,why:'Bí mật mà ai cũng biết → 公开的秘密 (câu 练习 1 của sách).'},
      {sentence:'这个公园每天早上六点对市民＿＿。',options:['公开','开放'],answer:1,why:'Cho người dân VÀO công viên → 对……开放.'},
      {sentence:'汉字叔叔将网站上的内容全部＿＿给网友免费下载。',options:['公开','开放'],answer:1,why:'Cho cư dân mạng DÙNG, tải về → 开放给 (câu bài khoá).'},
      {sentence:'他在电视上向大家＿＿道歉了。',options:['公开','开放'],answer:0,why:'公开道歉 = xin lỗi công khai trước mọi người; 开放 không đứng trước động từ như vậy.'}
    ]
  },
  {
    pair:'遗憾 — 后悔',
    same:'Đều diễn tả cảm giác tiếc, không vui vì sự việc không như mong muốn.',
    sameEx:{zh:'那次比赛没参加，他一直觉得很遗憾／很后悔。',vn:'Không tham gia cuộc thi lần đó, cậu ấy cứ thấy tiếc / hối hận mãi.'},
    items:[
      {
        word:'遗憾',
        points:[
          'Tiếc vì điều KHÁCH QUAN không như ý, không nhất thiết do mình làm sai.',
          'Là tính từ và DANH TỪ: 留下遗憾, 最大的遗憾; lời lịch sự: 很遗憾，…….',
          'Hay dùng 令人遗憾的是…… (câu 练习 2 của sách).'
        ],
        ex:[
          {zh:'令人遗憾的是，中国至今还没有自己的国花。',vn:'Điều đáng tiếc là đến nay Trung Quốc vẫn chưa có quốc hoa của riêng mình.'},
          {zh:'很遗憾，我不能参加你的生日晚会了。',vn:'Rất tiếc, tớ không dự tiệc sinh nhật cậu được rồi.'}
        ]
      },
      {
        word:'后悔',
        points:[
          'Hối hận vì việc CHÍNH MÌNH đã làm (hoặc đã không làm) — tự trách mình.',
          'Là động từ, mang tân ngữ được: 后悔 + V (后悔没听你的话).',
          'Không làm danh từ: không nói 留下后悔, 最大的后悔.'
        ],
        ex:[
          {zh:'我真后悔没听妈妈的话。',vn:'Tôi thật hối hận vì đã không nghe lời mẹ.'},
          {zh:'现在后悔也晚了。',vn:'Bây giờ hối hận cũng muộn rồi.'}
        ]
      }
    ],
    quiz:[
      {sentence:'令人＿＿的是，中国至今还没有自己的国花。',options:['遗憾','后悔'],answer:0,why:'Việc khách quan, không do ai làm sai → 令人遗憾的是 (câu 练习 2 của sách).'},
      {sentence:'早知道这么好玩儿，我真＿＿没跟你们一起去。',options:['遗憾','后悔'],answer:1,why:'Tự trách quyết định của chính mình, mang tân ngữ 没跟你们一起去 → 后悔.'},
      {sentence:'论文再完善一下，别留＿＿。',options:['遗憾','后悔'],answer:0,why:'留遗憾 — 遗憾 làm danh từ; 后悔 không làm danh từ.'},
      {sentence:'他＿＿当初没好好学习，现在找工作很难。',options:['遗憾','后悔'],answer:1,why:'Hối hận việc mình không chịu học → 后悔 + V.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'偶然',hv:'ngẫu nhiên',vn:'tình cờ, ngẫu nhiên',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'经典',hv:'kinh điển',vn:'kinh điển',note:'Trùng khít.'},
    {zh:'克服',hv:'khắc phục',vn:'khắc phục, vượt qua',note:'Trùng khít; tiếng Trung dùng cả cho khó khăn: 克服困难.'},
    {zh:'包含',hv:'bao hàm',vn:'bao hàm, bao gồm',note:'Trùng khít.'},
    {zh:'真相',hv:'chân tướng',vn:'sự thật, chân tướng',note:'Tiếng Việt cũng nói “chân tướng sự việc”.'},
    {zh:'公开',hv:'công khai',vn:'công khai, công bố',note:'Trùng khít.'},
    {zh:'单位',hv:'đơn vị',vn:'cơ quan, đơn vị',note:'Trùng khít — tiếng Việt cũng gọi cơ quan là “đơn vị”.'},
    {zh:'物理',hv:'vật lý',vn:'vật lý',note:'Trùng khít.'},
    {zh:'完善',hv:'hoàn thiện',vn:'hoàn thiện',note:'Trùng khít.'},
    {zh:'方言',hv:'phương ngôn',vn:'phương ngữ, tiếng địa phương',note:'“Phương” = vùng, “ngôn” = lời nói → tiếng nói của một vùng.'},
    {zh:'繁体字',hv:'phồn thể tự',vn:'chữ phồn thể',note:'“Phồn” = nhiều, rườm (như “phồn thịnh”) → chữ nhiều nét.'},
    {zh:'简体字',hv:'giản thể tự',vn:'chữ giản thể',note:'“Giản” = đơn giản → chữ ít nét.'},
    {zh:'心脏',hv:'tâm tạng',vn:'(trái) tim',note:'“Tâm” = tim, “tạng” như “lục phủ ngũ tạng”.'},
    {zh:'痛苦',hv:'thống khổ',vn:'đau khổ',note:'Tiếng Việt cũng nói “thống khổ”.'},
    {zh:'疾病',hv:'tật bệnh',vn:'bệnh tật',note:'Chú ý TRẬT TỰ: tiếng Trung “tật bệnh”, tiếng Việt nói ngược “bệnh tật”.'},
    {zh:'收集',hv:'thu tập',vn:'thu thập, sưu tầm',note:'“Tập” = gom lại (như “tập hợp”) — gần với “thu thập”.'},
    {zh:'追求',hv:'truy cầu',vn:'theo đuổi',note:'“Truy” = đuổi theo (như “truy đuổi”), “cầu” = mong được.'},
    {zh:'佩服',hv:'bội phục',vn:'khâm phục, bái phục',note:'Tiếng Việt quen nói “bái phục”, “khâm phục” — cùng chữ 服 (phục).'}
  ],
  idiom:[
    {zh:'死记硬背',hv:'tử ký ngạnh bối',vn:'học vẹt',note:'“Tử ký” = nhớ cứng nhắc, “ngạnh bối” = cố học thuộc (背 = thuộc lòng).'},
    {zh:'有图有真相',hv:'hữu đồ hữu chân tướng',vn:'có hình có sự thật',note:'Câu cửa miệng trên mạng: có ảnh làm chứng nên đáng tin.'},
    {zh:'活到老，学到老',hv:'hoạt đáo lão, học đáo lão',vn:'sống đến già, học đến già',note:'Tiếng Việt có câu gần nghĩa: “học, học nữa, học mãi”.'},
    {zh:'指鹿为马',hv:'chỉ lộc vi mã',vn:'chỉ hươu bảo ngựa',note:'Tiếng Việt dùng y hệt: cố tình đổi trắng thay đen (ví dụ của từ 硬).'}
  ],
  trap:[
    {zh:'元旦',hv:'nguyên đán',vn:'Tết Dương lịch (1/1)',warn:'BẪY LỚN: tiếng Việt “Tết Nguyên Đán” là Tết âm lịch, nhưng 元旦 trong tiếng Trung hiện đại là ngày 1/1 dương lịch. Tết âm lịch là 春节.'},
    {zh:'情缘',hv:'tình duyên',vn:'mối duyên gắn bó',warn:'Tiếng Việt “tình duyên” gần như chỉ chuyện yêu đương; 情缘 rộng hơn: 汉字情缘 = mối duyên gắn bó với chữ Hán.'},
    {zh:'梦想',hv:'mộng tưởng',vn:'ước mơ',warn:'BẪY SẮC THÁI: tiếng Việt “mộng tưởng” hơi chê (viển vông, hão huyền); 梦想 tiếng Trung là ƯỚC MƠ tích cực: 追求梦想, 实现梦想.'},
    {zh:'下载',hv:'hạ tải',vn:'tải xuống, tải về',warn:'BẪY: tiếng Việt “hạ tải” lại hiểu là GIẢM TẢI (bệnh viện hạ tải). 下载 chỉ là tải dữ liệu về máy; tải lên là 上传.'},
    {zh:'开放',hv:'khai phóng',vn:'mở cửa (cho mọi người dùng)',warn:'Tiếng Việt “khai phóng” = giải phóng tư tưởng (giáo dục khai phóng). 开放 thường dùng cho nơi chốn: 公园开放 = công viên mở cửa.'},
    {zh:'逻辑',hv:'la tập',vn:'lô-gích',warn:'BẪY: đây là từ PHIÊN ÂM tiếng Anh “logic” (luójí), đọc Hán–Việt chẳng gợi nghĩa gì.'},
    {zh:'硬',hv:'ngạnh',vn:'cứ, cố, gượng',warn:'Bài 7: 硬 = cứng (tính từ). Bài này 硬 là PHÓ TỪ: 硬说 (cứ khăng khăng nói), 硬挺过来 (gắng gượng vượt qua) — gần “ngang ngạnh”.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 34–35), bài tập 3 (tr. 36) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'追求',right:'梦想'},
  {left:'公开',right:'秘密'},
  {left:'收集',right:'雨水'},
  {left:'完善',right:'制度'},
  {left:'提上',right:'日程'},
  {left:'符合',right:'逻辑'},
  {left:'受到',right:'称赞'},
  {left:'下载',right:'资料'},
  {left:'克服',right:'困难'},
  {left:'深深地',right:'佩服'},
  {left:'反复',right:'思考'},
  {left:'抓紧',right:'时间'},
  {left:'输入',right:'密码'},
  {left:'战胜',right:'疾病'},
  {left:'创办',right:'网站'},
  {left:'查询',right:'话费'},
  {left:'识别',right:'真假'},
  {left:'引起',right:'关注'},
  {left:'留下',right:'遗憾'},
  {left:'古汉字',right:'经典'},
  {left:'说',right:'方言'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这篇文章讲的是一个美国人和汉字的',blank:'情缘',post:'。',hint:'(mối duyên gắn bó)',ans:'情缘'},
  {pre:'他感觉汉字的一笔一画没有任何',blank:'逻辑',post:'，只能死记硬背。',hint:'(lô-gích)',ans:'逻辑'},
  {pre:'学语法不能靠',blank:'死记硬背',post:'，要多用。',hint:'(học vẹt)',ans:'死记硬背'},
  {pre:'如果了解汉字的来源和',blank:'演变',post:'过程，学起来就容易多了。',hint:'(biến đổi)',ans:'演变'},
  {pre:'结论部分再完善一下，别留',blank:'遗憾',post:'。',hint:'(tiếc nuối)',ans:'遗憾'},
  {pre:'1994年，理查德得了',blank:'心脏',post:'病。',hint:'(tim)',ans:'心脏'},
  {pre:'老师希望我们学会独立',blank:'思考',post:'。',hint:'(suy nghĩ)',ans:'思考'},
  {pre:'你',blank:'抓紧',post:'准备一下，争取下周把这个项目谈下来。',hint:'(khẩn trương)',ans:'抓紧'},
  {pre:'收到邮件后，请',blank:'尽快',post:'回复。',hint:'(càng sớm càng tốt)',ans:'尽快'},
  {pre:'就这样，一部部古汉字',blank:'经典',post:'进入他的资料库。',hint:'(kinh điển)',ans:'经典'},
  {pre:'这些资料都已经放进他的资料',blank:'库',post:'里了。',hint:'(kho)',ans:'库'},
  {pre:'仅仅复印、整理和把这些资料',blank:'输入',post:'电脑就用了8年。',hint:'(nhập vào)',ans:'输入'},
  {pre:'2002年',blank:'元旦',post:'，他决定把网站公开。',hint:'(Tết Dương lịch)',ans:'元旦'},
  {pre:'战胜',blank:'疾病',post:'的他决定把自己创办的网站公开。',hint:'(bệnh tật)',ans:'疾病'},
  {pre:'他花光全部积蓄',blank:'创办',post:'了一个汉字网站。',hint:'(lập ra)',ans:'创办'},
  {pre:'他不希望别人像他最初那样学得那么',blank:'痛苦',post:'。',hint:'(khổ sở)',ans:'痛苦'},
  {pre:'有人把他的故事放到',blank:'微博',post:'上，引起了广泛关注。',hint:'(Weibo)',ans:'微博'},
  {pre:'他因此被网友亲切地',blank:'称呼',post:'为“汉字叔叔”。',hint:'(gọi là)',ans:'称呼'},
  {pre:'这个成语',blank:'包含',post:'着一个深刻的道理。',hint:'(chứa đựng)',ans:'包含'},
  {pre:'台湾和香港现在还用',blank:'繁体字',post:'。',hint:'(chữ phồn thể)',ans:'繁体字'},
  {pre:'我们在学校学的是',blank:'简体字',post:'，笔画比繁体字少。',hint:'(chữ giản thể)',ans:'简体字'},
  {pre:'我爷爷只会说',blank:'方言',post:'，不会说普通话。',hint:'(tiếng địa phương)',ans:'方言'},
  {pre:'你别骗我了，快把',blank:'真相',post:'告诉我吧。',hint:'(sự thật)',ans:'真相'},
  {pre:'她对工作认真负责的态度很让人',blank:'佩服',post:'。',hint:'(khâm phục)',ans:'佩服'},
  {pre:'网站上的内容，网友都可以免费',blank:'下载',post:'。',hint:'(tải về)',ans:'下载'},
  {pre:'现在，有很多',blank:'单位',post:'向理查德发出了工作邀请。',hint:'(cơ quan)',ans:'单位'},
  {pre:'网上的消息很多，我们要学会',blank:'识别',post:'真假。',hint:'(phân biệt)',ans:'识别'},
  {pre:'考试成绩下周就可以在网上',blank:'查询',post:'了。',hint:'(tra cứu)',ans:'查询'},
  {pre:'在北师大，他除了教',blank:'物理',post:'，还继续研究汉字。',hint:'(vật lý)',ans:'物理'},
  {pre:'在中国，60多岁已经是',blank:'退休',post:'的年纪了。',hint:'(nghỉ hưu)',ans:'退休'},
  {pre:'这几天的',blank:'日程',post:'怎么安排得这么满？你要注意身体。',hint:'(lịch trình)',ans:'日程'},
  {pre:'我还要继续追求我的',blank:'梦想',post:'，我要“活到老，学到老”。',hint:'(ước mơ)',ans:'梦想'},
  {pre:'这点儿困难不算什么，我一定可以',blank:'克服',post:'的。',hint:'(vượt qua)',ans:'克服'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['我说','不想去','，','妈妈','硬要','我','去','。'],ans:'我说不想去，妈妈硬要我去。',audio:'我说不想去，妈妈硬要我去。'},
  {words:['虽然','药很苦','，','他','还是','硬把药','喝下去了','。'],ans:'虽然药很苦，他还是硬把药喝下去了。',audio:'虽然药很苦，他还是硬把药喝下去了。'},
  {words:['这本书','是她','一次','逛书市时','偶然','发现的','。'],ans:'这本书是她一次逛书市时偶然发现的。',audio:'这本书是她一次逛书市时偶然发现的。'},
  {words:['她','专心地','织着毛衣','，','偶然','也会','抬眼','看一下','挂钟','。'],ans:'她专心地织着毛衣，偶然也会抬眼看一下挂钟。',audio:'她专心地织着毛衣，偶然也会抬眼看一下挂钟。'},
  {words:['李阳','喜欢','画画儿','并非','偶然','。'],ans:'李阳喜欢画画儿并非偶然。',audio:'李阳喜欢画画儿并非偶然。'},
  {words:['你','尽快','把','过季的衣服','洗一洗','。'],ans:'你尽快把过季的衣服洗一洗。',audio:'你尽快把过季的衣服洗一洗。'},
  {words:['我','要','抓紧时间','尽快','把资料','输入电脑','。'],ans:'我要抓紧时间尽快把资料输入电脑。',audio:'我要抓紧时间尽快把资料输入电脑。'},
  {words:['收到','邮件','后','，','请','尽快','回复','。'],ans:'收到邮件后，请尽快回复。',audio:'收到邮件后，请尽快回复。'},
  {words:['他','被','网友','亲切地','称呼为','“汉字叔叔”','。'],ans:'他被网友亲切地称呼为“汉字叔叔”。',audio:'他被网友亲切地称呼为“汉字叔叔”。'},
  {words:['他','将','网站上的内容','全部','开放给','网友','。'],ans:'他将网站上的内容全部开放给网友。',audio:'他将网站上的内容全部开放给网友。'},
  {words:['他','除了','教物理','，','还','继续','研究汉字','。'],ans:'他除了教物理，还继续研究汉字。',audio:'他除了教物理，还继续研究汉字。'},
  {words:['汉字叔叔','每天的日程','却','安排得','很满','。'],ans:'汉字叔叔每天的日程却安排得很满。',audio:'汉字叔叔每天的日程却安排得很满。'},
  {words:['了解','汉字的','演变过程','以后','，','学汉字','变得','越来越','轻松','了','。'],ans:'了解汉字的演变过程以后，学汉字变得越来越轻松了。',audio:'了解汉字的演变过程以后，学汉字变得越来越轻松了。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    wrong:'明明是他忘了，他却____说是我没提醒他。',
    opts:['硬','偶然','尽快','最初'],
    ans:0,
    exp:'Khăng khăng nói điều sai sự thật → 硬说 (phó từ 硬, nghĩa ①, câu 练一练 của sách). 偶然 = tình cờ; 尽快 = càng sớm càng tốt; 最初 = lúc đầu — đều không hợp.'
  },
  {
    wrong:'一个____的机会，他发现了学习汉字的好方法。',
    opts:['经常','偶然','偶尔','最初'],
    ans:1,
    exp:'一个偶然的机会 = một dịp tình cờ (câu bài khoá): nhấn mạnh sự BẤT NGỜ. 偶尔 nhấn mạnh số lần ít; 经常 ngược nghĩa; 最初 là thời điểm, không tả 机会.'
  },
  {
    wrong:'虽然中药汤有点儿苦，但为了治病，他还是____把它喝下去了。',
    opts:['尽快','偶然','最初','硬'],
    ans:3,
    exp:'Không muốn nhưng vẫn gắng gượng làm → 硬 (nghĩa ②, câu 注释 của sách). 尽快 nhấn mạnh tốc độ, không hợp với ý “cố chịu đắng”.'
  },
  {
    wrong:'什么？小明受伤了，那____送医院呀！',
    opts:['尽快','最初','赶快','偶尔'],
    ans:2,
    exp:'Tình huống gấp, câu cầu khiến khẩu ngữ, cần làm NGAY → 赶快 (câu 练习 2 của sách). 尽快 = càng sớm càng tốt, hay dùng khi yêu cầu, lên kế hoạch (请尽快回复).'
  },
  {
    wrong:'新产品出了点儿问题，你和严经理____商量一下这事。',
    opts:['偶尔','尽快','最初','硬'],
    ans:1,
    exp:'Yêu cầu xử lý nhanh nhất có thể → 尽快 + V (câu 注释 của sách). 偶尔 = thỉnh thoảng; 最初 = lúc đầu; 硬 = khăng khăng — đều không hợp.'
  },
  {
    wrong:'有文字学家指出，____的文字就是可以读出来的图画。',
    opts:['当初','刚才','后来','最初'],
    ans:3,
    exp:'Chữ viết thời kỳ ĐẦU TIÊN → 最初的文字 (câu 练习 2 của sách). 当初 = “hồi ấy” khi nhắc lại một việc cụ thể đã qua; 刚才 = vừa nãy; 后来 = về sau.'
  },
  {
    wrong:'买车的事我还没想好，你让我再____几天。',
    opts:['考虑','思考','追求','识别'],
    ans:0,
    exp:'Cân nhắc để ra QUYẾT ĐỊNH, có thời lượng 几天 → 考虑 (câu 练习 2 của sách). 思考 là suy ngẫm sâu một vấn đề, ít đi với thời lượng như vậy.'
  },
  {
    wrong:'那时，他开始____自己的人生：“我该怎么办？我该做什么？”',
    opts:['查询','思考','称呼','识别'],
    ans:1,
    exp:'Suy ngẫm sâu về cuộc đời → 思考人生 (câu bài khoá). 查询 = tra cứu thông tin; 称呼 = gọi; 识别 = nhận dạng.'
  },
  {
    wrong:'令人____的是，中国至今还没有自己的国花。',
    opts:['后悔','佩服','遗憾','痛苦'],
    ans:2,
    exp:'Tiếc một điều khách quan → 令人遗憾的是 (câu 练习 2 của sách). 后悔 là hối hận việc chính mình làm; 佩服, 痛苦 không hợp nghĩa.'
  },
  {
    wrong:'其实，林峰与刘医生的恋情，在医院里已经是____的秘密了。',
    opts:['开放','完善','经典','公开'],
    ans:3,
    exp:'Bí mật ai cũng biết → 公开的秘密 (câu 练习 1 của sách). 开放 là mở cửa cho mọi người vào / dùng, không đi với 秘密.'
  },
  {
    wrong:'汉字叔叔将网站上的内容全部____给网友免费下载。',
    opts:['开放','公开','输入','收集'],
    ans:0,
    exp:'Cho cư dân mạng vào DÙNG, tải về → 开放给 (câu bài khoá). 公开 nhấn mạnh làm cho mọi người BIẾT; 输入, 收集 không đi với 给网友.'
  },
  {
    wrong:'采取任何行动之前都需要有____的计划。',
    opts:['痛苦','完善','偶然','遗憾'],
    ans:1,
    exp:'完善的计划 = kế hoạch hoàn chỉnh, chu đáo (câu 书写 29 của 练习册). Ba từ còn lại không tả 计划 theo nghĩa tích cực.'
  },
  {
    wrong:'刘校长在教改方面的成就值得____。',
    opts:['称呼','克服','称赞','查询'],
    ans:2,
    exp:'值得称赞 = đáng khen ngợi (câu 书写 30 của 练习册). 称呼 = gọi tên; 克服 = vượt qua; 查询 = tra cứu.'
  },
  {
    wrong:'我们是大学同学，那时候他就有了这个____老报纸的爱好。',
    opts:['收集','追求','输入','下载'],
    ans:0,
    exp:'Sưu tầm báo cũ → 收集 (câu 练习 1 của sách). 追求 là theo đuổi mục tiêu; 输入, 下载 dùng cho dữ liệu máy tính.'
  },
  {
    wrong:'爸爸平时常提醒我，生活上不要过于____享受。',
    opts:['收集','克服','追求','公开'],
    ans:2,
    exp:'追求享受 = chạy theo hưởng thụ (bảng 词语搭配, câu 练习 1 của sách). 收集, 克服, 公开 không đi với 享受.'
  },
  {
    wrong:'活动的目的是为了培养学生____困难的勇气。',
    opts:['佩服','克服','收集','追求'],
    ans:1,
    exp:'克服困难 = vượt qua khó khăn (câu 书写 31 của 练习册). 佩服 = khâm phục; 收集 = thu thập; 追求 = theo đuổi.'
  },
  {
    wrong:'1972年，22岁的____爱上了中文，后来被网友称为“汉字叔叔”。',
    opts:['赵括','李广','许慎','理查德·希尔斯'],
    ans:3,
    exp:'Nhân vật chính của bài là Richard Sears (理查德·希尔斯). 赵括 (bài 15), 李广 (bài 7) là người xưa; 许慎 là tác giả 《说文解字》.'
  },
  {
    wrong:'他要抓紧时间尽快把《____》电脑化。',
    opts:['说文解字','西游记','红楼梦','三国演义'],
    ans:0,
    exp:'Bộ tự điển chữ Hán cổ mà Chú Chữ Hán muốn số hoá là 《说文解字》. Ba cuốn còn lại là tiểu thuyết.'
  },
  {
    wrong:'理查德选择了去____教书，因为那里也有人在做汉字识别查询的研究。',
    opts:['北京大学','北京师范大学','清华大学','复旦大学'],
    ans:1,
    exp:'Theo bài khoá, Richard chọn Đại học Sư phạm Bắc Kinh (北京师范大学, gọi tắt 北师大).'
  },
  {
    wrong:'2011年，有人把他的故事放到____上，引起了广泛关注。',
    opts:['报纸','电视','微博','单位'],
    ans:2,
    exp:'Theo bài khoá, câu chuyện được đưa lên Weibo (微博) — mạng xã hội nên mới lan rộng.'
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cậu ta rõ ràng biết mình sai, vậy mà cứ khăng khăng nói tại tôi không cho cậu ta biết sự thật.', zh:'他明明知道自己错了，却硬说是我没把真相告诉他。', py:'Tā míngmíng zhīdào zìjǐ cuò le, què yìng shuō shì wǒ méi bǎ zhēnxiàng gàosu tā.', goiY:['明明……却……','硬说','真相'], giai:'硬说 = khăng khăng nói (硬 là phó từ, đứng ngay trước động từ, không thêm 地); 明明 nêu sự thật rõ ràng, 却 nêu hành động trái ngược.'},
  {vi:'Chúng tôi chỉ tình cờ quen nhau trên Weibo, không ngờ sau này lại thành bạn thân nhất.', zh:'我们只是偶然在微博上认识的，没想到后来竟然成了最好的朋友。', py:'Wǒmen zhǐshì ǒurán zài wēibó shang rènshi de, méi xiǎngdào hòulái jìngrán chéngle zuì hǎo de péngyou.', goiY:['偶然','没想到……竟然……','微博'], giai:'偶然 + V = tình cờ (làm gì); 竟然 diễn tả điều bất ngờ, đứng sau chủ ngữ và trước động từ.'},
  {vi:'Thầy bảo chúng tôi nhanh chóng gõ bài báo cáo vào máy tính, nếu không sẽ không kịp nộp trước Tết Dương lịch.', zh:'老师让我们尽快把报告输入电脑，否则就来不及在元旦前交了。', py:'Lǎoshī ràng wǒmen jǐnkuài bǎ bàogào shūrù diànnǎo, fǒuzé jiù láibují zài Yuándàn qián jiāo le.', goiY:['尽快把……','否则','输入'], giai:'尽快 + 把 + O + V = làm việc gì càng sớm càng tốt; 否则 mở vế hậu quả “nếu không thì”.'},
  {vi:'Học chữ Hán, thay vì học vẹt, chi bằng tìm hiểu quá trình biến đổi của từng chữ, như thế không những nhớ lâu mà còn khó viết sai.', zh:'学汉字与其死记硬背，不如了解每个字的演变过程，这样不但记得牢，而且不容易写错。', py:'Xué Hànzì yǔqí sǐjì-yìngbèi, bùrú liǎojiě měi ge zì de yǎnbiàn guòchéng, zhèyàng búdàn jì de láo, érqiě bù róngyì xiěcuò.', goiY:['与其……不如……','死记硬背','演变'], giai:'与其 A 不如 B = bỏ A chọn B; 死记硬背 là thành ngữ “học vẹt”, không dịch từng chữ.'},
  {vi:'Bình thường tôi ít chơi game điện thoại, chỉ thỉnh thoảng cuối tuần mới tải một trò về chơi, vì thế thành tích luôn ổn định.', zh:'我平时很少玩手机游戏，只是周末偶然也会下载一个玩玩，所以成绩一直很稳定。', py:'Wǒ píngshí hěn shǎo wán shǒujī yóuxì, zhǐshì zhōumò ǒurán yě huì xiàzài yí ge wánwan, suǒyǐ chéngjì yìzhí hěn wěndìng.', goiY:['偶然也会','下载','所以'], giai:'偶然 làm phó từ = thỉnh thoảng (ít khi), thường đi với 也(会); khác 偶然 tính từ “ngẫu nhiên” (一个偶然的机会).'},
  {vi:'Để thực hiện ước mơ của mình, ngày nào cậu ấy cũng tranh thủ thời gian tập đàn, dù có ốm cũng cố gắng tập đủ hai tiếng.', zh:'为了实现自己的梦想，他每天都抓紧时间练琴，哪怕生病了，也硬是坚持练完两个小时。', py:'Wèile shíxiàn zìjǐ de mèngxiǎng, tā měi tiān dōu zhuājǐn shíjiān liàn qín, nǎpà shēngbìng le, yě yìngshì jiānchí liàn wán liǎng ge xiǎoshí.', goiY:['哪怕……也……','硬是','抓紧时间'], giai:'硬是 = gắng gượng làm dù điều kiện không cho phép; 哪怕 nêu tình huống xấu nhất, vế sau 也 giữ nguyên hành động.'},
  {vi:'Đã thích môn Vật lý đến thế thì em nên chủ động suy nghĩ, tìm cách vượt qua khó khăn, chứ không phải hễ gặp bài khó là bỏ cuộc.', zh:'既然你对物理这么感兴趣，就应该主动思考，想办法克服困难，而不是一遇到难题就放弃。', py:'Jìrán nǐ duì wùlǐ zhème gǎn xìngqù, jiù yīnggāi zhǔdòng sīkǎo, xiǎng bànfǎ kèfú kùnnan, ér bú shì yí yùdào nántí jiù fàngqì.', goiY:['既然……就……','而不是','克服困难'], giai:'既然 + sự thật đã biết, 就 + kết luận/lời khuyên; đừng nhầm 既然 (đã… thì…) với 虽然 (tuy…).'},
  {vi:'Điều khiến tôi khâm phục nhất là bạn cùng bàn tuy mới học tiếng Trung một năm, nhưng đã nhận biết được khá nhiều chữ phồn thể, ngay cả một số phương ngữ cũng nghe hiểu.', zh:'让我最佩服的是，同桌虽然只学了一年中文，却已经能识别不少繁体字，连一些方言也听得懂。', py:'Ràng wǒ zuì pèifú de shì, tóngzhuō suīrán zhǐ xuéle yì nián Zhōngwén, què yǐjīng néng shíbié bù shǎo fántǐzì, lián yìxiē fāngyán yě tīng de dǒng.', goiY:['虽然……却……','连……也……','繁体字'], giai:'Mẫu 让我最佩服的是 + mệnh đề đưa điểm nhấn lên đầu câu; 识别 = nhận biết, phân biệt được (không phải “quen biết”).'},
  {vi:'Một khi thấy tim mình khó chịu thì phải đi viện kiểm tra càng sớm càng tốt, đừng vì sợ lỡ việc học mà cố gượng, kẻo sau này phải hối tiếc.', zh:'一旦发现自己心脏不舒服，就要尽快去医院检查，千万别因为怕耽误学习而硬撑着，以免将来留下遗憾。', py:'Yídàn fāxiàn zìjǐ xīnzàng bù shūfu, jiù yào jǐnkuài qù yīyuàn jiǎnchá, qiānwàn bié yīnwèi pà dānwu xuéxí ér yìng chēngzhe, yǐmiǎn jiānglái liúxià yíhàn.', goiY:['一旦……就……','尽快','以免'], giai:'硬撑着 = cố gượng chịu (硬 nghĩa gắng gượng); 以免 đứng đầu vế cuối nêu điều muốn tránh — “để khỏi, kẻo”.'},
  {vi:'Lúc đầu tôi thấy chữ Hán chẳng có chút logic nào, học rất khổ sở, mãi đến khi tình cờ đọc một cuốn sách nói về nguồn gốc chữ Hán, tôi mới phát hiện hoá ra chữ Hán thú vị đến vậy.', zh:'最初我觉得汉字毫无逻辑，学得很痛苦，直到偶然读了一本讲汉字来源的书，才发现汉字原来这么有趣。', py:'Zuìchū wǒ juéde Hànzì háowú luójí, xué de hěn tòngkǔ, zhídào ǒurán dúle yì běn jiǎng Hànzì láiyuán de shū, cái fāxiàn Hànzì yuánlái zhème yǒuqù.', goiY:['直到……才……','毫无逻辑','原来'], giai:'直到 + thời điểm, 才 + sự việc muộn mới xảy ra — “mãi đến… mới…”; 原来 ở đây là “hoá ra”, còn “lúc đầu” là 最初.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Lúc đầu Richard cảm thấy chữ Hán chẳng có logic gì, nên chỉ có thể học vẹt.', zh:'理查德最初觉得汉字没有任何逻辑，所以只能死记硬背。', py:'Lǐchádé zuìchū juéde Hànzì méiyǒu rènhé luójí, suǒyǐ zhǐ néng sǐjì-yìngbèi.', goiY:['最初 = lúc đầu','逻辑 = logic','死记硬背 = học vẹt'], giai:'所以 nêu hệ quả của vế trước; 最初 = ban đầu (so với về sau), đứng sau chủ ngữ.'},
  {vi:'Trong một dịp tình cờ, ông phát hiện chỉ cần hiểu quá trình biến đổi của chữ Hán thì học sẽ nhẹ nhàng hơn nhiều.', zh:'一个偶然的机会，他发现只要了解汉字的演变过程，学起来就轻松多了。', py:'Yí ge ǒurán de jīhuì, tā fāxiàn zhǐyào liǎojiě Hànzì de yǎnbiàn guòchéng, xué qǐlái jiù qīngsōng duō le.', goiY:['一个偶然的机会 = một dịp tình cờ','只要……就…… = chỉ cần… thì…','演变 = biến đổi, diễn biến'], giai:'偶然 là tính từ làm định ngữ (偶然的机会); 学起来 = “học vào thì…”, V + 起来 dùng để đánh giá cảm nhận.'},
  {vi:'Tuy bác sĩ nói tim ông có vấn đề, nhưng ông lại càng tranh thủ thời gian nghiên cứu chữ Hán hơn.', zh:'虽然医生说他的心脏有问题，他却更加抓紧时间研究汉字了。', py:'Suīrán yīshēng shuō tā de xīnzàng yǒu wèntí, tā què gèngjiā zhuājǐn shíjiān yánjiū Hànzì le.', goiY:['虽然……却…… = tuy… nhưng lại…','抓紧时间 = tranh thủ thời gian'], giai:'却 đứng sau chủ ngữ 他 ở vế sau; 抓紧时间 = tranh thủ thời gian, không dịch là “nắm chặt thời gian”.'},
  {vi:'Ông nghĩ, nếu mình chỉ còn sống được một năm nữa thì phải nhanh chóng số hoá cuốn 《Thuyết văn giải tự》, kẻo để lại nuối tiếc.', zh:'他想，假如自己只能再活一年，就要尽快把《说文解字》电脑化，免得留下遗憾。', py:'Tā xiǎng, jiǎrú zìjǐ zhǐ néng zài huó yì nián, jiù yào jǐnkuài bǎ 《Shuōwén Jiězì》 diànnǎohuà, miǎnde liúxià yíhàn.', goiY:['尽快把……电脑化 = nhanh chóng số hoá…','免得 = kẻo, để khỏi','遗憾 = nuối tiếc'], giai:'尽快 + 把 + O + V: làm càng sớm càng tốt; 遗憾 là “tiếc nuối”, không phải “oán hận”.'},
  {vi:'Sau nhiều năm nỗ lực, ông không những vượt qua nỗi đau bệnh tật mà còn lập ra trang web chữ Hán của riêng mình.', zh:'经过多年的努力，他不但克服了疾病带来的痛苦，而且创办了自己的汉字网站。', py:'Jīngguò duō nián de nǔlì, tā búdàn kèfúle jíbìng dàilái de tòngkǔ, érqiě chuàngbànle zìjǐ de Hànzì wǎngzhàn.', goiY:['不但……而且…… = không những… mà còn…','克服 = vượt qua','创办 = sáng lập, lập ra'], giai:'不但 đứng sau chủ ngữ khi hai vế cùng chủ ngữ; 疾病带来的痛苦 là cụm định ngữ — “nỗi đau do bệnh tật mang lại”.'},
  {vi:'Sau khi trang web được công khai, cư dân mạng khắp thế giới đều có thể tra cứu và tải về miễn phí, vì thế ông được thân mật gọi là “Chú Chữ Hán”.', zh:'网站公开以后，全世界的网友都可以免费查询和下载，因此他被亲切地称呼为“汉字叔叔”。', py:'Wǎngzhàn gōngkāi yǐhòu, quán shìjiè de wǎngyǒu dōu kěyǐ miǎnfèi cháxún hé xiàzài, yīncǐ tā bèi qīnqiè de chēnghu wéi “Hànzì shūshu”.', goiY:['因此 = vì thế','被……称呼为…… = được gọi là…','查询 = tra cứu'], giai:'被……称呼为…… là câu bị động “được gọi là”; 公开 ở đây là “công bố cho mọi người”, không phải “mở cửa”.'},
  {vi:'Điều khiến người ta khâm phục hơn là trang web của ông thu thập rất nhiều tự hình chữ Hán cổ, gồm cả giáp cốt văn, kim văn…, hơn nữa đều mở cho cư dân mạng sử dụng.', zh:'更让人佩服的是，他的网站收集了大量古代汉字字形，包含甲骨文、金文等，而且全部对网友开放。', py:'Gèng ràng rén pèifú de shì, tā de wǎngzhàn shōujíle dàliàng gǔdài Hànzì zìxíng, bāohán jiǎgǔwén, jīnwén děng, érqiě quánbù duì wǎngyǒu kāifàng.', goiY:['更让人佩服的是 = điều đáng khâm phục hơn là','包含 = bao gồm','开放 = mở (cho dùng)'], giai:'Mẫu 让人 + cảm xúc + 的是…… đưa điểm nhấn lên đầu; 而且 bổ sung thêm một điểm cộng nữa.'},
  {vi:'Ngày thường ông rất bận, chỉ thỉnh thoảng mới lên Weibo xem lời nhắn của cư dân mạng; thấy mọi người khen mình, ông lại luôn bảo trang web vẫn chưa đủ hoàn thiện.', zh:'他平时非常忙，只是偶然也会上微博看看网友的留言，看到大家称赞自己，他却总说网站还不够完善。', py:'Tā píngshí fēicháng máng, zhǐshì ǒurán yě huì shàng wēibó kànkan wǎngyǒu de liúyán, kàndào dàjiā chēngzàn zìjǐ, tā què zǒng shuō wǎngzhàn hái bú gòu wánshàn.', goiY:['偶然也会 = thỉnh thoảng cũng…','称赞 = khen ngợi','完善 = hoàn thiện'], giai:'偶然 làm phó từ nghĩa “thỉnh thoảng”, đi với 也会; 却 chỉ phản ứng trái với điều người nghe chờ đợi (được khen mà lại khiêm tốn).'},
  {vi:'Cơ quan vốn định cho ông nghỉ hưu, nhưng ông nhất quyết không chịu, ông nói thay vì ở nhà hưởng nhàn, chi bằng tiếp tục theo đuổi ước mơ của mình.', zh:'单位本来要安排他退休，他却硬是不肯，他说与其在家享受清闲，不如继续追求自己的梦想。', py:'Dānwèi běnlái yào ānpái tā tuìxiū, tā què yìngshì bù kěn, tā shuō yǔqí zài jiā xiǎngshòu qīngxián, bùrú jìxù zhuīqiú zìjǐ de mèngxiǎng.', goiY:['硬是 = nhất quyết, khăng khăng','与其……不如…… = thay vì… chi bằng…','追求……梦想 = theo đuổi ước mơ'], giai:'硬是 + 不肯 = khăng khăng không chịu (硬 nghĩa ①); 单位 là “cơ quan, nơi làm việc”, không dịch là “đơn vị đo”.'},
  {vi:'Người Mỹ đã số hoá những kinh điển như 《Thuyết văn giải tự》 này sở dĩ kiên trì được hai mươi năm là vì ông trước sau không buông bỏ được mối duyên với chữ Hán.', zh:'这位把《说文解字》等经典电脑化的美国人，之所以能坚持二十年，是因为他始终放不下与汉字的这段情缘。', py:'Zhè wèi bǎ 《Shuōwén Jiězì》 děng jīngdiǎn diànnǎohuà de Měiguórén, zhīsuǒyǐ néng jiānchí èrshí nián, shì yīnwèi tā shǐzhōng fàng bu xià yǔ Hànzì de zhè duàn qíngyuán.', goiY:['之所以……是因为…… = sở dĩ… là vì…','经典 = kinh điển','情缘 = mối duyên, tình cảm gắn bó'], giai:'Chủ ngữ dài (这位……的美国人) đứng trước 之所以, khi dịch giữ trật tự “sở dĩ… là vì…”; 放不下 = không buông bỏ được.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT
// ══════════════════════════════════════════
var writingData = {
  words:['偶然','克服','佩服','梦想','尽快'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về chuyện em học tiếng Trung: vì sao bắt đầu, gặp khó khăn gì, vượt qua thế nào và ước mơ của em — có thể liên hệ tấm gương Chú Chữ Hán.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你学习汉语的经历。',
  outline:[
    'Câu mở: kể dịp tình cờ khiến em bắt đầu học tiếng Trung (dùng 偶然).',
    'Khó khăn gặp phải và cách vượt qua — nêu một chuyện CỤ THỂ (dùng 克服).',
    'Tấm gương khiến em cảm phục: Chú Chữ Hán, thầy cô hoặc một người bạn (dùng 佩服).',
    'Kết: ước mơ và việc em sẽ làm ngay (dùng 梦想, 尽快).'
  ],
  model:{
    zh:'三年前，一个偶然的机会，我看了一部中国电影，从此爱上了汉语。刚开始，我觉得汉字很难记，后来我了解了汉字的演变过程，就慢慢克服了这个困难。汉字叔叔的故事让我很佩服。我的梦想是去中国留学，所以我要抓紧时间，尽快把汉语学好。',
    py:'Sān nián qián, yí ge ǒurán de jīhuì, wǒ kànle yí bù Zhōngguó diànyǐng, cóngcǐ àishangle Hànyǔ. Gāng kāishǐ, wǒ juéde Hànzì hěn nán jì, hòulái wǒ liǎojiěle Hànzì de yǎnbiàn guòchéng, jiù mànmàn kèfúle zhège kùnnan. Hànzì shūshu de gùshi ràng wǒ hěn pèifú. Wǒ de mèngxiǎng shì qù Zhōngguó liúxué, suǒyǐ wǒ yào zhuājǐn shíjiān, jǐnkuài bǎ Hànyǔ xuéhǎo.',
    vn:'Ba năm trước, trong một dịp tình cờ, tôi xem một bộ phim Trung Quốc, từ đó phải lòng tiếng Trung. Lúc mới bắt đầu, tôi thấy chữ Hán rất khó nhớ; về sau tôi tìm hiểu quá trình biến đổi của chữ Hán nên dần dần vượt qua được khó khăn này. Câu chuyện của Chú Chữ Hán khiến tôi rất khâm phục. Ước mơ của tôi là đi Trung Quốc du học, vì vậy tôi phải tranh thủ thời gian, học giỏi tiếng Trung càng sớm càng tốt.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có kể một khó khăn CỤ THỂ và cách em vượt qua, hay chỉ nói chung chung “tiếng Trung rất khó”?',
    '尽快 có đứng TRƯỚC động từ không (尽快把汉语学好), 克服 có đi với 困难 / 缺点 không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'偶然',
      loai:'tính từ / phó từ',
      cach:'一个偶然的机会 · 偶然发现 · 并非偶然 · 偶然也会……',
      sai:[
        {re:'一个偶尔的机会',sua:'一个偶然的机会',giai:'“Dịp tình cờ” nhấn mạnh sự BẤT NGỜ → 偶然. 偶尔 nhấn mạnh số lần ít.'},
        {re:'(很|非常|太)偶尔',sua:'很偶然 / 偶尔',giai:'偶尔 không thêm phó từ mức độ; muốn nói “rất tình cờ” thì dùng 很偶然.',nhe:true}
      ]
    },
    {
      tu:'克服',
      loai:'động từ',
      cach:'克服 + 困难 / 缺点 / 弱点 / 不利条件',
      sai:[
        {re:'克服(了)?(问题|错误|疾病|病)',sua:'解决问题 / 改正错误 / 战胜疾病',giai:'克服 đi với 困难, 缺点, 弱点. Vấn đề thì 解决, lỗi thì 改正, bệnh thì 战胜.'},
        {re:'克服(了)?(汉语|汉字|学习)(?!的)',sua:'克服学汉字的困难',giai:'Tân ngữ của 克服 phải là KHÓ KHĂN / KHUYẾT ĐIỂM, không nói 克服汉字.',nhe:true}
      ]
    },
    {
      tu:'佩服',
      loai:'động từ (tâm lý)',
      cach:'很佩服 + người · ……让人很佩服 · 打心里佩服',
      sai:[
        {re:'被.{0,4}佩服',sua:'让人佩服 / 令人佩服',giai:'佩服 hầu như không dùng bị động với 被; “đáng được khâm phục” nói 让人佩服.'},
        {re:'佩服了(他|她|老师|叔叔)',sua:'很佩服 + người',giai:'佩服 là động từ tâm lý, thường đi với 很 / 非常, ít đặt 了 ngay sau.',nhe:true}
      ]
    },
    {
      tu:'梦想',
      loai:'danh từ / động từ',
      cach:'我的梦想是 + V · 追求 / 实现梦想',
      sai:[
        {re:'做梦想|有个梦想想',sua:'我的梦想是…… / 有一个梦想',giai:'Không nói 做梦想; nói 我的梦想是 + V hoặc 我有一个梦想.'},
        {re:'梦想(很)?(大|多)。',sua:'我的梦想是……',giai:'Nên nói rõ ước mơ LÀ GÌ, đừng dừng ở “ước mơ lớn”.',nhe:true}
      ]
    },
    {
      tu:'尽快',
      loai:'phó từ',
      cach:'Sub + 尽快 + V · 尽快 + 把 + O + V',
      sai:[
        {re:'尽快(了|过)',sua:'尽快 + V',giai:'尽快 là PHÓ TỪ, phải có động từ theo sau, không mang 了 / 过.'},
        {re:'[学说写做]尽快',sua:'尽快 + V (尽快学好)',giai:'尽快 đứng TRƯỚC động từ, không đặt sau động từ.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'一个偶然的机会，Sub + V……',nhan:'偶然',vd:'一个偶然的机会，我爱上了汉语。',khi:'Câu MỞ: kể dịp tình cờ bắt đầu.'},
    {ten:'刚开始……，后来……',nhan:'后来',vd:'刚开始我觉得汉字很难记，后来慢慢习惯了。',khi:'Kể quá trình thay đổi.'},
    {ten:'Sub + (慢慢)克服了 + ……困难',nhan:'克服',vd:'我慢慢克服了这个困难。',khi:'Nói cách vượt qua khó khăn.'},
    {ten:'……让我很佩服',nhan:'佩服',vd:'汉字叔叔的故事让我很佩服。',khi:'Nêu tấm gương và cảm xúc của em.'},
    {ten:'只要……，就……',nhan:'只要',vd:'只要了解汉字的来源，学起来就容易多了。',khi:'Rút ra kinh nghiệm học tập (HSK 4).'},
    {ten:'我的梦想是 + V……',nhan:'梦想',vd:'我的梦想是去中国留学。',khi:'Nêu mục tiêu.'},
    {ten:'所以我要抓紧时间，尽快 + V',nhan:'尽快',vd:'所以我要抓紧时间，尽快把汉语学好。',khi:'Câu KẾT: hành động cụ thể.'}
  ],
  sapXep:[
    {
      manh:['爱上了','一个偶然的机会','汉语','我'],
      dap:'一个偶然的机会，我爱上了汉语。',
      vn:'Nhân một dịp tình cờ, tôi đã phải lòng tiếng Trung.',
      giai:'一个偶然的机会 làm trạng ngữ đứng đầu câu, sau đó là Sub + V + O.'
    },
    {
      manh:['克服了','我','困难','慢慢'],
      dap:'我慢慢克服了困难。',
      vn:'Tôi dần dần vượt qua được khó khăn.',
      giai:'Trạng ngữ 慢慢 đứng trước động từ; 克服 + 困难.'
    },
    {
      manh:['让我','汉字叔叔的故事','很佩服'],
      dap:'汉字叔叔的故事让我很佩服。',
      vn:'Câu chuyện của Chú Chữ Hán khiến tôi rất khâm phục.',
      giai:'Câu kiêm ngữ: A + 让 + người + 很佩服.'
    },
    {
      manh:['去中国留学','我的梦想','是'],
      dap:'我的梦想是去中国留学。',
      vn:'Ước mơ của tôi là đi Trung Quốc du học.',
      giai:'我的梦想 làm chủ ngữ, 是 + cụm động từ.'
    },
    {
      manh:['把汉语','我要','学好','尽快'],
      dap:'我要尽快把汉语学好。',
      vn:'Tôi phải học giỏi tiếng Trung càng sớm càng tốt.',
      giai:'Trật tự: Sub + 要 + 尽快 + 把 + O + V + bổ ngữ.'
    },
    {
      manh:['学起来','汉字的演变过程','了解','以后','容易多了'],
      dap:'了解汉字的演变过程以后，学起来容易多了。',
      vn:'Hiểu quá trình biến đổi của chữ Hán rồi thì học dễ hơn nhiều.',
      giai:'Vế thời gian “V + O + 以后” đứng trước; 学起来 + Adj + 多了.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 (tr. 38)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 38: 学汉语), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 偶然 · 克服 · 死记硬背 · 尽快 · 佩服 · 梦想 · 追求.',
  questions:[
    {
      q_zh:'出于什么目的或原因，你做出了学汉语的决定？',
      q_vn:'Vì mục đích hay lý do gì mà em quyết định học tiếng Trung?',
      hint:'Kể một dịp CỤ THỂ, dùng 偶然 và 从此',
      sample:'我学汉语是很偶然的。初中的时候，我偶然听到一首中文歌，觉得特别好听，从此就对汉语产生了兴趣。后来我想以后去中国公司工作，所以决定好好儿学汉语。',
      sample_vn:'Tôi học tiếng Trung là rất tình cờ. Hồi cấp hai, tôi tình cờ nghe một bài hát tiếng Trung, thấy cực kỳ hay, từ đó bắt đầu thấy hứng thú với tiếng Trung. Về sau tôi muốn sau này làm việc ở công ty Trung Quốc, nên quyết định học tiếng Trung cho đàng hoàng.',
      note:'Trả lời cả “lý do” (hứng thú) lẫn “mục đích” (công việc) thì câu trả lời đầy đặn hơn. 对……产生兴趣 là cụm rất hay dùng.'
    },
    {
      q_zh:'你在学习过程中遇到过什么困难？你是怎么克服的？',
      q_vn:'Trong quá trình học em đã gặp khó khăn gì? Em đã vượt qua bằng cách nào?',
      hint:'Nêu MỘT khó khăn cụ thể, dùng 死记硬背, 克服',
      sample:'我觉得最难的是汉字。刚开始我只会死记硬背，今天记住了，明天就忘了。后来老师教我们了解汉字的偏旁和演变过程，我就慢慢克服了这个困难。',
      sample_vn:'Tôi thấy khó nhất là chữ Hán. Lúc đầu tôi chỉ biết học vẹt, hôm nay nhớ thì mai đã quên. Về sau thầy dạy chúng tôi tìm hiểu bộ thủ và quá trình biến đổi của chữ Hán, thế là tôi dần dần vượt qua được khó khăn này.',
      note:'Câu hỏi hai vế: khó khăn là gì + vượt qua thế nào. Khung 刚开始……，后来…… giúp kể có trình tự.'
    },
    {
      q_zh:'学汉语给你的生活带来了哪些改变？从中你得到了哪些收获？',
      q_vn:'Học tiếng Trung đã mang lại những thay đổi gì cho cuộc sống của em? Em thu hoạch được gì từ đó?',
      hint:'Nêu 2 thay đổi, dùng 不仅……而且……',
      sample:'学汉语以后，我不仅能看懂中文电影，而且交了很多中国朋友。我最大的收获是更了解中国文化了，眼界也开阔了很多。',
      sample_vn:'Từ khi học tiếng Trung, tôi không những xem hiểu được phim tiếng Trung mà còn kết bạn được với nhiều người Trung Quốc. Thu hoạch lớn nhất của tôi là hiểu văn hoá Trung Quốc hơn, tầm nhìn cũng rộng mở hơn nhiều.',
      note:'收获 (thu hoạch) và 开阔眼界 (mở rộng tầm mắt) là từ trong phần 运用 của sách — dùng được là ăn điểm.'
    },
    {
      q_zh:'你觉得汉字叔叔身上最让人佩服的是什么？',
      q_vn:'Em thấy ở Chú Chữ Hán điều đáng khâm phục nhất là gì?',
      hint:'Chọn MỘT điểm, dùng 最让人佩服的是……, 追求梦想',
      sample:'我觉得最让人佩服的是他一直在追求自己的梦想。他得了心脏病，却没有放弃，还把网站免费开放给大家。六十多岁了也不退休，真是“活到老，学到老”。',
      sample_vn:'Tôi thấy đáng khâm phục nhất là ông luôn theo đuổi ước mơ của mình. Ông mắc bệnh tim nhưng không bỏ cuộc, còn mở trang web miễn phí cho mọi người. Ngoài sáu mươi tuổi vẫn không nghỉ hưu, đúng là “sống đến già, học đến già”.',
      note:'Mở bằng 最让人佩服的是…… (giống 更让人佩服的是 trong bài khoá) rồi đưa dẫn chứng từ bài.'
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 21, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第21课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'男',zh:'您好！我在网上查询话费，它要我输入密码，可我没设置过密码呀！'},{sp:'女',zh:'您可以输入手机号码，选择获取随机密码就可以登录了。'}],
      q:'男的想要做什么？',
      qvn:'Người đàn ông muốn làm gì?',
      opts:['修改密码','换一个手机号码','查询话费','买一部新手机'],
      ans:2,
      why:'我在网上查询话费 — anh ấy muốn tra cước điện thoại; chuyện mật khẩu chỉ là trở ngại khi đăng nhập.',
      words:['查询','输入']
    },
    {
      n:2,
      lines:[{sp:'男',zh:'你最近怎么不跟李阳打羽毛球了？'},{sp:'女',zh:'他参加了学校的演讲比赛，已经进了复赛，这段时间都在忙着准备呢。'}],
      q:'李阳最近在忙什么？',
      qvn:'Dạo này Lý Dương đang bận gì?',
      opts:['打羽毛球','准备演讲比赛','准备考试','找工作'],
      ans:1,
      why:'参加了学校的演讲比赛……都在忙着准备 → bận chuẩn bị thi hùng biện. 打羽毛球 là việc anh ấy KHÔNG làm nữa.',
      words:[]
    },
    {
      n:3,
      lines:[{sp:'男',zh:'这次修改后的论文您觉得怎么样？'},{sp:'女',zh:'结论部分我认为有必要再完善一下，别留遗憾，你抓紧点儿时间吧。'}],
      q:'女的觉得这篇论文怎么样？',
      qvn:'Người phụ nữ thấy bài luận văn này thế nào?',
      opts:['结论部分还需要完善','已经很完美了','题目不太合适','写得太长了'],
      ans:0,
      why:'结论部分……有必要再完善一下 → phần kết luận cần hoàn thiện thêm.',
      words:['完善','遗憾','抓紧']
    },
    {
      n:4,
      lines:[{sp:'男',zh:'这么晚了，你怎么还在加班？'},{sp:'女',zh:'马主任说名单又有调整，确定后就给我发邮件，我再等会儿。'}],
      q:'女的现在在做什么？',
      qvn:'Người phụ nữ bây giờ đang làm gì?',
      opts:['调整名单','写报告','等邮件','开会'],
      ans:2,
      why:'确定后就给我发邮件，我再等会儿 → cô ấy đang chờ email. Người điều chỉnh danh sách là chủ nhiệm Mã.',
      words:[]
    },
    {
      n:5,
      lines:[{sp:'女',zh:'我爸爸抽了二十多年的烟，现在说戒就戒了。'},{sp:'男',zh:'真让人佩服。要想戒烟关键就看有没有决心。'}],
      q:'男的认为戒烟怎么样？',
      qvn:'Người đàn ông cho rằng việc bỏ thuốc lá thế nào?',
      opts:['非常容易','关键看有没有决心','对身体没有影响','需要医生帮忙'],
      ans:1,
      why:'关键就看有没有决心 — điều then chốt là có quyết tâm hay không.',
      words:['佩服']
    },
    {
      n:6,
      lines:[{sp:'女',zh:'这几天的日程怎么安排得这么满？你要注意身体。'},{sp:'男',zh:'放心吧，等我把这个合同谈下来，咱们就去海边玩儿几天。'}],
      q:'男的最近怎么样？',
      qvn:'Dạo này người đàn ông thế nào?',
      opts:['身体不太好','正在海边度假','工作很忙','想换工作'],
      ans:2,
      why:'日程安排得这么满 + 等我把合同谈下来 → dạo này rất bận. Đi biển là kế hoạch SAU khi xong hợp đồng.',
      words:['日程']
    },
    {
      n:7,
      lines:[{sp:'男',zh:'你怎么一大早就打哈欠，昨晚没睡好？'},{sp:'女',zh:'我最好的朋友回国来看我，就住在我家了。'},{sp:'男',zh:'多年没见了，这下可有的聊了。'},{sp:'女',zh:'可不是，我们俩硬是聊了一夜都没睡。'}],
      q:'关于女的，从对话中可以知道什么？',
      qvn:'Về người phụ nữ, từ đoạn hội thoại có thể biết điều gì?',
      opts:['昨晚加班了','朋友住在酒店','和朋友聊了一夜','明天要出国'],
      ans:2,
      why:'我们俩硬是聊了一夜都没睡 — 硬是 (phó từ 硬) nhấn mạnh hai người cứ thế nói chuyện suốt đêm. Bạn ở nhà cô ấy, không phải khách sạn.',
      words:['硬']
    },
    {
      n:8,
      lines:[{sp:'男',zh:'你这么快就把论文写好了？真是佩服啊！'},{sp:'女',zh:'我这还不是最快的，刘京都准备答辩了。'},{sp:'男',zh:'我的调查问卷还没收齐呢，看着你们，真让人着急。'},{sp:'女',zh:'大可不必，早晚没关系，通过最重要。'}],
      q:'关于男的的论文，从对话中可以知道什么？',
      qvn:'Về luận văn của người đàn ông, từ đoạn hội thoại có thể biết điều gì?',
      opts:['还没写完','已经准备答辩了','写得最快','没有通过'],
      ans:0,
      why:'我的调查问卷还没收齐呢 — phiếu khảo sát còn chưa thu đủ → luận văn còn chưa viết xong. Người chuẩn bị bảo vệ là 刘京.',
      words:['佩服']
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG
// ══════════════════════════════════════════
var situationData = {
  intro:'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items:[
    {
      scene:'Bạn cùng lớp than thở chữ Hán khó quá, chỉ biết học vẹt.',
      a:{sp:'Bạn',zh:'汉字太难记了，我只能死记硬背。',vn:'Chữ Hán khó nhớ quá, tớ chỉ biết học vẹt.'},
      need:['Dùng 死记硬背 hoặc 演变','Gợi ý một cách học tốt hơn'],
      sample:'别再死记硬背了，你先了解一下汉字的演变过程，这样记得更快。',
      samplePy:'Bié zài sǐjì-yìngbèi le, nǐ xiān liǎojiě yíxià Hànzì de yǎnbiàn guòchéng, zhèyàng jì de gèng kuài.',
      sampleVn:'Đừng học vẹt nữa, cậu tìm hiểu quá trình biến đổi của chữ Hán trước đi, như thế nhớ nhanh hơn.',
      tip:'别再……了 = đừng … nữa. Lời khuyên nên kèm cách làm cụ thể.'
    },
    {
      scene:'Thầy giáo nhắn: kế hoạch đi dã ngoại của lớp phải nộp trước thứ Sáu.',
      a:{sp:'Thầy',zh:'班里的出游计划周五以前要交给我。',vn:'Kế hoạch đi dã ngoại của lớp phải nộp cho thầy trước thứ Sáu.'},
      need:['Dùng 尽快','Hứa sẽ hoàn thành'],
      sample:'好的，老师，我们会尽快把计划写好，周四就交给您。',
      samplePy:'Hǎo de, lǎoshī, wǒmen huì jǐnkuài bǎ jìhuà xiěhǎo, zhōusì jiù jiāo gěi nín.',
      sampleVn:'Vâng thưa thầy, chúng em sẽ viết xong kế hoạch sớm nhất có thể, thứ Năm là nộp thầy ạ.',
      tip:'尽快 + 把 … V好 — trả lời thầy cô dùng 您 và hứa mốc thời gian cụ thể.'
    },
    {
      scene:'Bạn mới quen hỏi vì sao em học tiếng Trung.',
      a:{sp:'Bạn mới',zh:'你为什么想学汉语？',vn:'Sao cậu lại muốn học tiếng Trung?'},
      need:['Dùng 偶然','Dùng 从此'],
      sample:'说起来很偶然：那年我偶然看了一部中国电影，从此就爱上了汉语。',
      samplePy:'Shuō qilai hěn ǒurán: nà nián wǒ ǒurán kànle yí bù Zhōngguó diànyǐng, cóngcǐ jiù àishangle Hànyǔ.',
      sampleVn:'Nói ra thì rất tình cờ: năm ấy tớ tình cờ xem một bộ phim Trung Quốc, từ đó phải lòng tiếng Trung luôn.',
      tip:'说起来 (nói ra thì) — ôn bổ ngữ xu hướng 起来 nghĩa mở rộng.'
    },
    {
      scene:'Em gái kể một bạn trong lớp cứ khăng khăng nói bài tập của em ấy là chép.',
      a:{sp:'Em gái',zh:'我的作业明明是自己写的，他却说是我抄的！',vn:'Bài tập rõ ràng là em tự làm, thế mà bạn ấy lại bảo em chép!'},
      need:['Dùng 硬','Dùng 真相 để an ủi em'],
      sample:'他没有证据就硬说你抄的，太不讲道理了。别生气，真相总会清楚的。',
      samplePy:'Tā méiyǒu zhèngjù jiù yìng shuō nǐ chāo de, tài bù jiǎng dàolǐ le. Bié shēngqì, zhēnxiàng zǒng huì qīngchu de.',
      sampleVn:'Nó chẳng có bằng chứng gì mà cứ khăng khăng bảo em chép, thật vô lý. Đừng giận, sự thật rồi sẽ rõ thôi.',
      tip:'硬说 = khăng khăng nói (điều không đúng); 讲道理 là từ bài 15.'
    },
    {
      scene:'Ông nội sắp nghỉ hưu, lo sau này không biết làm gì.',
      a:{sp:'Ông nội',zh:'下个月我就退休了，以后每天干什么呢？',vn:'Tháng sau ông nghỉ hưu rồi, sau này ngày nào cũng làm gì đây?'},
      need:['Dùng 追求 hoặc 梦想','Dùng 活到老，学到老'],
      sample:'爷爷，您不是一直想学画画儿吗？退休以后正好可以追求您的梦想，活到老，学到老嘛！',
      samplePy:'Yéye, nín bú shì yìzhí xiǎng xué huà huàr ma? Tuìxiū yǐhòu zhènghǎo kěyǐ zhuīqiú nín de mèngxiǎng, huó dào lǎo, xué dào lǎo ma!',
      sampleVn:'Ông ơi, chẳng phải ông luôn muốn học vẽ sao? Nghỉ hưu rồi vừa hay có thể theo đuổi ước mơ của ông, sống đến già, học đến già mà!',
      tip:'不是……吗？ = chẳng phải … sao — câu phản vấn nhắc lại điều người nghe đã biết.'
    }
  ]
};

// ══════════════════════════════════════════
// CHỌN VĂN PHONG
// ══════════════════════════════════════════
var registerData = {
  intro:'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items:[
    {
      scene:'Em viết email cho thầy giáo, hứa sẽ gửi lại bài tập.',
      a:'老师，作业我会尽快发给您。',
      b:'老师，作业我马上就弄好，等着啊！',
      better:'a',
      why:'Viết cho thầy cô: 尽快 + 您 lịch sự, nghiêm túc. Câu b là khẩu ngữ suồng sã (弄好, 等着啊), chỉ hợp nói với bạn.'
    },
    {
      scene:'Em nhắn tin rủ bạn thân tối nay sang nhà xem phim.',
      a:'本人已将该电影下载完毕，欢迎今晚光临寒舍观看。',
      b:'电影我下好了，晚上来我家看吧！',
      better:'b',
      why:'Nhắn tin bạn thân: 下好了, 来我家看吧 tự nhiên. Câu a dùng 本人, 完毕, 光临寒舍 — trang trọng tới mức buồn cười.'
    },
    {
      scene:'Em giới thiệu Chú Chữ Hán trong buổi thuyết trình của câu lạc bộ tiếng Trung.',
      a:'理查德先生克服种种困难，创办了汉字网站，这种精神值得我们学习。',
      b:'这老头儿挺牛的，弄了个汉字网站。',
      better:'a',
      why:'Thuyết trình trước tập thể: 先生, 克服种种困难, 值得我们学习 trang trọng, tôn trọng. Câu b quá suồng sã (老头儿, 挺牛的).'
    },
    {
      scene:'Thông báo chính thức dán ở cửa thư viện trường.',
      a:'周末图书馆也开门，大家来吧。',
      b:'本馆周末照常开放，欢迎同学们前来查阅资料。',
      better:'b',
      why:'Thông báo chính thức: 本馆, 照常开放, 前来查阅 đúng văn phong văn bản. Câu a là lời nói miệng.'
    },
    {
      scene:'Em lịch sự từ chối lời mời đi chơi cuối tuần của một bạn mới quen.',
      a:'我不去，没时间。',
      b:'真遗憾，这个周末我的日程已经排满了，下次一定去！',
      better:'b',
      why:'Từ chối cần mềm mỏng: 真遗憾 + lý do cụ thể + hẹn lần sau. Câu a đúng nhưng cộc lốc.'
    },
    {
      scene:'Em đăng Weibo khoe ảnh chụp ở Cố Cung.',
      a:'有图有真相！我真的去故宫了！',
      b:'兹附照片一张，以证明本人确已参观故宫。',
      better:'a',
      why:'Mạng xã hội: câu cửa miệng 有图有真相 vui, tự nhiên. Câu b giống văn bản hành chính (兹附, 本人确已).'
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 37)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 37): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 3 ý (理查德学汉字的经验 · 理查德的汉字网站 · 理查德现在的工作情况); ở đây tách nhỏ thành 7 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Ấn tượng ban đầu về chữ Hán',cue:'1972年，22岁的理查德爱上了中文…… 汉字的笔画没有任何逻辑…… 只能死记硬背',words:['理查德·希尔斯','逻辑','死记硬背']},
    {step:'Phát hiện tình cờ',cue:'一个偶然的机会…… 了解汉字的来源和演变过程…… 遗憾地发现……',words:['偶然','演变','遗憾']},
    {step:'Bệnh tim và quyết định lớn',cue:'1994年得了心脏病…… 开始思考人生…… 抓紧时间尽快把《说文解字》电脑化',words:['心脏','思考','抓紧','尽快','说文解字']},
    {step:'Tám năm làm trang web',cue:'古汉字经典进入资料库…… 把资料输入电脑用了8年…… 2002年元旦把网站公开……',words:['经典','库','输入','元旦','疾病','创办','公开','最初','痛苦']},
    {step:'“Chú Chữ Hán” và trang web của ông',cue:'2011年放到微博上…… 被称呼为“汉字叔叔”…… 克服种种困难…… 收集整理近10万个汉字…… 开放给网友免费下载',words:['微博','称呼','克服','收集','包含','繁体字','简体字','方言','称赞','真相','佩服','开放','下载']},
    {step:'Công việc hiện nay',cue:'很多单位发出邀请…… 选择去北京师范大学…… 汉字识别查询的研究…… 教物理，完善网站',words:['单位','北京师范大学','识别','查询','物理','完善']},
    {step:'Không chịu nghỉ hưu',cue:'60多岁已经是退休的年纪…… 日程安排得很满…… 追求梦想，“活到老，学到老”',words:['退休','日程','追求','梦想']}
  ],
  checklist:[
    'Kể đủ bảy ý trên chưa, có bỏ mất đoạn bị bệnh tim — bước ngoặt của câu chuyện — không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 硬 (死记硬背), 偶然, 尽快 — ba điểm ngữ pháp của bài — đúng vị trí không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 36) — bài 1, 2 + 扩展 · 做一做 (tr. 37)
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['收集','克服','追求','公开','佩服','抓紧'],
    cau:[
      {s:'这点儿困难不算什么，我一定可以＿＿的。',dap:['克服']},
      {s:'其实，林峰与刘医生的恋情，在医院里已经是＿＿的秘密了。',dap:['公开']},
      {s:'我们是大学同学，那时候他就有了这个＿＿老报纸的爱好。',dap:['收集']},
      {s:'你＿＿准备一下，争取下周把这个项目谈下来。',dap:['抓紧']},
      {s:'她对工作认真负责的态度很让人＿＿。',dap:['佩服']},
      {s:'爸爸平时常提醒我，生活上不要过于＿＿享受。',dap:['追求']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {s:'买车的事我还没想好，你让我再＿＿几天。',opts:['思考','考虑'],ans:1,giai:'Cân nhắc để ra QUYẾT ĐỊNH (mua xe hay không), có thời lượng 几天 → 考虑. 思考 là suy ngẫm sâu về một vấn đề (思考人生), không hợp.'},
      {s:'令人＿＿的是，中国至今还没有自己的国花。',opts:['遗憾','后悔'],ans:0,giai:'Tiếc vì một điều khách quan, không do ai làm sai → 令人遗憾的是. 后悔 là hối hận việc chính mình đã làm.'},
      {s:'什么？小明受伤了，那＿＿送医院呀！',opts:['尽快','赶快'],ans:1,giai:'Tình huống khẩn cấp, lời thúc giục khẩu ngữ, phải làm NGAY → 赶快. 尽快 = càng sớm càng tốt, hợp với yêu cầu, kế hoạch (请尽快回复).'},
      {s:'有文字学家指出，＿＿的文字就是可以读出来的图画。',opts:['最初','当初'],ans:0,giai:'Chữ viết ở giai đoạn đầu tiên của lịch sử → 最初的文字. 当初 = “hồi ấy” khi nhắc lại một việc cụ thể đã qua, thường so với hiện tại.'}
    ]
  },
  {
    kieu:'kho',
    de:'从上表中选择合适的词语填空（扩展 · 学科 / 电脑）',
    vn:'Chọn từ trong bảng từ vựng chủ đề “Môn học” và “Máy tính” để điền vào chỗ trống',
    tu:['哲学','化学','物理','政治','粘贴','复制','浏览','删除','搜索','文件'],
    cau:[
      {s:'昨天我把电脑好好整理了一下，把没用的文件、照片都＿＿了。',dap:['删除']},
      {s:'据调查，有70%的网民经常在网上＿＿信息、找资料。',dap:['搜索']},
      {s:'老年人喜欢读报，而年轻人现在大都是在网上＿＿新闻了。',dap:['浏览']},
      {s:'你把他们送来的广告设计方案＿＿一份到移动硬盘里。',dap:['复制']}
    ]
  }
];
