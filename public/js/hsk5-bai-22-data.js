// ══════════════════════════════════════════
// DATA — HSK5 Bài 22: 阅读与思考 (Đọc và suy nghĩ)
// Unit 8 体会教育 · Nguồn: HSK标准教程5下 (tr. 40–46) + 练习册 bài 22
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 34 từ của bảng 生词 + 2 专有名词 (tr. 40–41)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'过分',py:'guòfèn',pos:'Tính từ',vn:'quá đáng, quá mức',hv:'quá phận',em:'⚠️',lesson:1,
   explain:['Vượt quá mức độ hợp lý — làm hoặc nói quá đà, quá đáng.'],
   usage:'Làm trạng ngữ: 过分(地)强调 / 追求 (bảng 词语搭配); làm vị ngữ: 太过分了 (quá đáng lắm). Thường mang ý chê.',
   collo:['过分强调','过分追求','太过分了','过分的要求'],
   ex_zh:'很多家长可能过分强调阅读的作用。',ex_py:'Hěn duō jiāzhǎng kěnéng guòfèn qiángdiào yuèdú de zuòyòng.',ex_vn:'Nhiều phụ huynh có lẽ đã quá nhấn mạnh tác dụng của việc đọc.',
   exList:[
     {zh:'很多家长可能过分强调阅读的作用。',py:'Hěn duō jiāzhǎng kěnéng guòfèn qiángdiào yuèdú de zuòyòng.',vn:'Nhiều phụ huynh có lẽ đã quá nhấn mạnh tác dụng của việc đọc.'},
     {zh:'你这种做法太过分了，我不能接受！',py:'Nǐ zhè zhǒng zuòfǎ tài guòfèn le, wǒ bù néng jiēshòu!',vn:'Cách làm này của cậu quá đáng lắm, tớ không thể chấp nhận!'},
     {zh:'不要过分追求完美，差不多就可以了。',py:'Búyào guòfèn zhuīqiú wánměi, chàbuduō jiù kěyǐ le.',vn:'Đừng quá chạy theo sự hoàn hảo, tàm tạm là được rồi.'}
   ],
   colloFull:[
     {zh:'过分强调',py:'guòfèn qiángdiào',vn:'quá nhấn mạnh'},
     {zh:'过分追求',py:'guòfèn zhuīqiú',vn:'quá chạy theo'},
     {zh:'太过分了',py:'tài guòfèn le',vn:'quá đáng lắm'},
     {zh:'过分的要求',py:'guòfèn de yāoqiú',vn:'yêu cầu quá đáng'},
     {zh:'过分担心',py:'guòfèn dānxīn',vn:'lo lắng quá mức'}
   ],
   patterns:[
     {s:'过分(地) + 强调 / 追求 / 担心',m:'… quá mức (bảng 词语搭配)'},
     {s:'(太 / 有点儿) + 过分 + 了',m:'… quá đáng rồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta không những đến muộn mà cũng chẳng xin lỗi, thật quá đáng!',answer:'他不仅迟到了，也没有说对不起，真是太过分了！',answerPy:'Tā bùjǐn chídào le, yě méiyǒu shuō duìbuqǐ, zhēn shì tài guòfèn le!',
      note:'太过分了 = quá đáng lắm; hai vế cùng chủ ngữ nên 不仅 đứng sau chủ ngữ.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Mẹ lo lắng quá mức khiến tôi càng ngày càng căng thẳng.',answer:'妈妈过分担心，让我越来越紧张。',answerPy:'Māma guòfèn dānxīn, ràng wǒ yuè lái yuè jǐnzhāng.',
      note:'过分 + động từ làm trạng ngữ; 越来越 + tính từ.',pair:'越来越……'}
   ]},

  {n:2,zh:'强调',py:'qiángdiào',pos:'Động từ',vn:'nhấn mạnh',hv:'cường điệu',em:'📢',lesson:1,
   explain:['Đặc biệt nhấn mạnh, coi trọng một điểm nào đó khi nói hoặc làm.'],
   usage:'强调 + tân ngữ / 强调 + mệnh đề: 老师强调，考试不能迟到. Hay đi với 一再 / 反复 / 过分(地). Chú ý: không phải "cường điệu hoá" (phóng đại) của tiếng Việt.',
   collo:['强调作用','强调重点','一再强调','反复强调'],
   ex_zh:'如果只是单纯地主张阅读而不强调思考，那是片面的。',ex_py:'Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.',ex_vn:'Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ thì đó là phiến diện.',
   exList:[
     {zh:'如果只是单纯地主张阅读而不强调思考，那是片面的。',py:'Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.',vn:'Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ thì đó là phiến diện.'},
     {zh:'老师一再强调，考试的时候千万不能紧张。',py:'Lǎoshī yízài qiángdiào, kǎoshì de shíhou qiānwàn bù néng jǐnzhāng.',vn:'Thầy giáo nhiều lần nhấn mạnh: khi thi tuyệt đối đừng căng thẳng.'},
     {zh:'这篇作文强调了家庭教育的重要性。',py:'Zhè piān zuòwén qiángdiàole jiātíng jiàoyù de zhòngyàoxìng.',vn:'Bài văn này nhấn mạnh tầm quan trọng của giáo dục gia đình.'}
   ],
   colloFull:[
     {zh:'强调作用',py:'qiángdiào zuòyòng',vn:'nhấn mạnh tác dụng'},
     {zh:'强调重点',py:'qiángdiào zhòngdiǎn',vn:'nhấn mạnh trọng điểm'},
     {zh:'一再强调',py:'yízài qiángdiào',vn:'nhiều lần nhấn mạnh'},
     {zh:'反复强调',py:'fǎnfù qiángdiào',vn:'nhấn mạnh đi nhấn mạnh lại'},
     {zh:'过分强调',py:'guòfèn qiángdiào',vn:'quá nhấn mạnh'}
   ],
   patterns:[
     {s:'强调 + N / 强调 + mệnh đề',m:'Nhấn mạnh …'},
     {s:'一再 / 反复 / 过分 + 强调',m:'Nhấn mạnh nhiều lần / quá mức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo nhấn mạnh: nhất định phải nộp bài văn trước thứ Sáu.',answer:'老师强调，一定要在星期五以前把作文交上来。',answerPy:'Lǎoshī qiángdiào, yídìng yào zài xīngqīwǔ yǐqián bǎ zuòwén jiāo shànglai.',
      note:'强调 + mệnh đề; câu 把: 把 + tân ngữ + V + bổ ngữ (交上来).',pair:'把'},
     {promptLang:'vi',prompt:'Điểm này bố mẹ tôi chưa bao giờ nhấn mạnh.',answer:'这一点我父母从来没强调过。',answerPy:'Zhè yì diǎn wǒ fùmǔ cónglái méi qiángdiàoguo.',
      note:'Đưa tân ngữ 这一点 lên đầu câu làm chủ đề; 从来没 + V + 过.',pair:'从来没……过'}
   ]},

  {n:3,zh:'作文',py:'zuòwén',pos:'Danh từ',vn:'bài làm văn',hv:'tác văn',em:'📝',lesson:1,
   explain:['Bài văn học sinh viết, bài tập làm văn.'],
   usage:'Lượng từ 篇: 一篇作文. Động từ đi kèm: 写 / 交 / 批改 + 作文. 作文水平 = trình độ viết văn. Là từ trong nhóm 写作表达 của phần 扩展.',
   collo:['写作文','一篇作文','作文水平','作文比赛'],
   ex_zh:'觉得多读书就能够把作文写得特别好。',ex_py:'Juéde duō dú shū jiù nénggòu bǎ zuòwén xiě de tèbié hǎo.',ex_vn:'Cho rằng đọc nhiều sách là có thể viết văn cực hay.',
   exList:[
     {zh:'觉得多读书就能够把作文写得特别好。',py:'Juéde duō dú shū jiù nénggòu bǎ zuòwén xiě de tèbié hǎo.',vn:'Cho rằng đọc nhiều sách là có thể viết văn cực hay.'},
     {zh:'老师，我们孩子平时很爱看书，为什么作文还是写不好？',py:'Lǎoshī, wǒmen háizi píngshí hěn ài kàn shū, wèi shénme zuòwén háishi xiě bu hǎo?',vn:'Thưa cô, con tôi ngày thường rất thích đọc sách, sao viết văn vẫn không hay?'},
     {zh:'她的作文在全校比赛中得了第一名。',py:'Tā de zuòwén zài quán xiào bǐsài zhōng déle dì-yī míng.',vn:'Bài văn của cô ấy đạt giải nhất trong cuộc thi toàn trường.'}
   ],
   colloFull:[
     {zh:'写作文',py:'xiě zuòwén',vn:'viết văn'},
     {zh:'一篇作文',py:'yì piān zuòwén',vn:'một bài văn'},
     {zh:'作文水平',py:'zuòwén shuǐpíng',vn:'trình độ viết văn'},
     {zh:'作文比赛',py:'zuòwén bǐsài',vn:'cuộc thi viết văn'},
     {zh:'批改作文',py:'pīgǎi zuòwén',vn:'chấm bài văn'}
   ],
   patterns:[
     {s:'一篇 + 作文',m:'Lượng từ 篇'},
     {s:'把作文写得 + tính từ',m:'Viết văn … (câu 把 + bổ ngữ trạng thái)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài văn của tôi viết càng ngày càng hay.',answer:'我的作文写得越来越好了。',answerPy:'Wǒ de zuòwén xiě de yuè lái yuè hǎo le.',
      note:'Bổ ngữ trạng thái: V + 得 + 越来越 + tính từ; cuối câu 了 chỉ sự thay đổi.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Bài văn này tôi viết xong trong một buổi tối.',answer:'这篇作文是我用一个晚上写完的。',answerPy:'Zhè piān zuòwén shì wǒ yòng yí ge wǎnshang xiěwán de.',
      note:'Nhấn mạnh CÁCH / THỜI GIAN làm một việc đã xong → 是……的.',pair:'是……的'}
   ]},

  {n:4,zh:'观点',py:'guāndiǎn',pos:'Danh từ',vn:'quan điểm',hv:'quan điểm',em:'💡',lesson:1,
   explain:['Cách nhìn, ý kiến của một người về một vấn đề cụ thể.'],
   usage:'同意 / 支持 / 反对 / 提出 + 观点. Dùng cho một ý kiến cụ thể trong thảo luận, bài viết; khác 观念 (quan niệm chung, hình thành lâu dài).',
   collo:['同意你的观点','提出观点','不同的观点','这个观点'],
   ex_zh:'这个观点是不客观、不全面的。',ex_py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de.',ex_vn:'Quan điểm này là không khách quan, không toàn diện.',
   exList:[
     {zh:'这个观点是不客观、不全面的。',py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de.',vn:'Quan điểm này là không khách quan, không toàn diện.'},
     {zh:'我不同意你的观点，我觉得这部电影很不错。',py:'Wǒ bù tóngyì nǐ de guāndiǎn, wǒ juéde zhè bù diànyǐng hěn búcuò.',vn:'Tôi không đồng ý với quan điểm của bạn, tôi thấy bộ phim này rất hay.'},
     {zh:'讨论的时候，每个同学都可以提出自己的观点。',py:'Tǎolùn de shíhou, měi ge tóngxué dōu kěyǐ tíchū zìjǐ de guāndiǎn.',vn:'Khi thảo luận, bạn nào cũng có thể nêu quan điểm của mình.'}
   ],
   colloFull:[
     {zh:'同意你的观点',py:'tóngyì nǐ de guāndiǎn',vn:'đồng ý với quan điểm của bạn'},
     {zh:'提出观点',py:'tíchū guāndiǎn',vn:'nêu quan điểm'},
     {zh:'不同的观点',py:'bùtóng de guāndiǎn',vn:'quan điểm khác nhau'},
     {zh:'这个观点',py:'zhège guāndiǎn',vn:'quan điểm này'},
     {zh:'支持他的观点',py:'zhīchí tā de guāndiǎn',vn:'ủng hộ quan điểm của anh ấy'}
   ],
   patterns:[
     {s:'同意 / 支持 / 反对 + (某人的) + 观点',m:'Đồng ý / ủng hộ / phản đối quan điểm của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tôi không đồng ý với quan điểm của cậu, nhưng tôi tôn trọng cậu.',answer:'虽然我不同意你的观点，但是我尊重你。',answerPy:'Suīrán wǒ bù tóngyì nǐ de guāndiǎn, dànshì wǒ zūnzhòng nǐ.',
      note:'同意 + (某人的) 观点; 虽然 ở vế trước, 但是 mở đầu vế sau.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Quan điểm của tôi bị thầy giáo bác bỏ.',answer:'我的观点被老师否定了。',answerPy:'Wǒ de guāndiǎn bèi lǎoshī fǒudìng le.',
      note:'Câu bị động: chủ ngữ (观点) + 被 + người làm + V + 了.',pair:'被'}
   ]},

  {n:5,zh:'客观',py:'kèguān',pos:'Tính từ',vn:'khách quan',hv:'khách quan',em:'⚖️',lesson:1,
   explain:['Nhìn nhận theo đúng sự thật, không thêm cảm xúc hay thiên kiến cá nhân (đối lập 主观).'],
   usage:'Làm vị ngữ: 这个观点不客观; định ngữ: 客观的态度; trạng ngữ: 客观(地) + 看 / 评价 / 对待 (bảng 词语搭配).',
   collo:['客观地看问题','客观的态度','不客观','客观公正'],
   ex_zh:'人都是有感情甚至自私的，很难做到任何时候都很客观。',ex_py:'Rén dōu shì yǒu gǎnqíng shènzhì zìsī de, hěn nán zuòdào rènhé shíhou dōu hěn kèguān.',ex_vn:'Con người ai cũng có tình cảm, thậm chí ích kỷ, rất khó lúc nào cũng khách quan.',
   exList:[
     {zh:'人都是有感情甚至自私的，很难做到任何时候都很客观。',py:'Rén dōu shì yǒu gǎnqíng shènzhì zìsī de, hěn nán zuòdào rènhé shíhou dōu hěn kèguān.',vn:'Con người ai cũng có tình cảm, thậm chí ích kỷ, rất khó lúc nào cũng khách quan.'},
     {zh:'这个观点是不客观、不全面的。',py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de.',vn:'Quan điểm này là không khách quan, không toàn diện.'},
     {zh:'看问题要客观，不能只听一个人的话。',py:'Kàn wèntí yào kèguān, bù néng zhǐ tīng yí ge rén de huà.',vn:'Nhìn vấn đề phải khách quan, không thể chỉ nghe lời một người.'}
   ],
   colloFull:[
     {zh:'客观地看问题',py:'kèguān de kàn wèntí',vn:'nhìn vấn đề một cách khách quan'},
     {zh:'客观的态度',py:'kèguān de tàidu',vn:'thái độ khách quan'},
     {zh:'不客观',py:'bú kèguān',vn:'không khách quan'},
     {zh:'客观公正',py:'kèguān gōngzhèng',vn:'khách quan, công bằng'},
     {zh:'客观地对待',py:'kèguān de duìdài',vn:'đối xử khách quan'}
   ],
   patterns:[
     {s:'客观(地) + 看 / 评价 / 对待',m:'Nhìn / đánh giá / đối xử một cách khách quan'},
     {s:'N + 不客观',m:'… không khách quan (chú ý: 不 đọc bú)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nhìn vấn đề một cách khách quan thì sẽ không cãi nhau.',answer:'只要客观地看问题，就不会吵架了。',answerPy:'Zhǐyào kèguān de kàn wèntí, jiù bú huì chǎojià le.',
      note:'客观地 + V làm trạng ngữ; 只要 ở vế trước, 就 đứng trước động từ vế sau.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ông ấy đánh giá chúng tôi rất khách quan, ngay cả con trai mình cũng không ưu ái đặc biệt.',answer:'他评价我们很客观，连自己的儿子都没有特别照顾。',answerPy:'Tā píngjià wǒmen hěn kèguān, lián zìjǐ de érzi dōu méiyǒu tèbié zhàogù.',
      note:'连 + trường hợp đặc biệt nhất + 都 + phủ định: nhấn mạnh sự công tâm.',pair:'连……都……'}
   ]},

  {n:6,zh:'全面',py:'quánmiàn',pos:'Tính từ',vn:'toàn diện, mọi mặt',hv:'toàn diện',em:'🔍',lesson:1,
   explain:['Đầy đủ mọi mặt, không bỏ sót (đối lập 片面 — phiến diện).'],
   usage:'Định ngữ: 全面的了解; trạng ngữ: 全面(地) + 看 / 了解 / 思考 / 发展 (bảng 词语搭配); vị ngữ: 考虑得很全面.',
   collo:['全面地了解','全面发展','考虑得很全面','不全面'],
   ex_zh:'这个观点是不客观、不全面的，我们需要转变自己的观念。',ex_py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de, wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',ex_vn:'Quan điểm này là không khách quan, không toàn diện, chúng ta cần thay đổi quan niệm của mình.',
   exList:[
     {zh:'这个观点是不客观、不全面的，我们需要转变自己的观念。',py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de, wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',vn:'Quan điểm này là không khách quan, không toàn diện, chúng ta cần thay đổi quan niệm của mình.'},
     {zh:'认为只要多读书就能把作文写好，这个观点是不全面的。',py:'Rènwéi zhǐyào duō dú shū jiù néng bǎ zuòwén xiě hǎo, zhège guāndiǎn shì bù quánmiàn de.',vn:'Cho rằng chỉ cần đọc nhiều là viết văn hay — quan điểm này không toàn diện.'},
     {zh:'学校希望学生德、智、体全面发展。',py:'Xuéxiào xīwàng xuésheng dé, zhì, tǐ quánmiàn fāzhǎn.',vn:'Nhà trường mong học sinh phát triển toàn diện đức, trí, thể.'}
   ],
   colloFull:[
     {zh:'全面地了解',py:'quánmiàn de liǎojiě',vn:'hiểu một cách toàn diện'},
     {zh:'全面发展',py:'quánmiàn fāzhǎn',vn:'phát triển toàn diện'},
     {zh:'考虑得很全面',py:'kǎolǜ de hěn quánmiàn',vn:'suy nghĩ rất chu toàn'},
     {zh:'不全面',py:'bù quánmiàn',vn:'không toàn diện'},
     {zh:'全面地思考',py:'quánmiàn de sīkǎo',vn:'suy nghĩ toàn diện'}
   ],
   patterns:[
     {s:'全面(地) + 看 / 了解 / 思考 / 发展',m:'… một cách toàn diện (bảng 词语搭配)'},
     {s:'V + 得 + 很全面',m:'… rất chu toàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy suy nghĩ vấn đề càng ngày càng toàn diện.',answer:'他考虑问题越来越全面了。',answerPy:'Tā kǎolǜ wèntí yuè lái yuè quánmiàn le.',
      note:'越来越 + tính từ (全面); cuối câu thêm 了.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần hiểu tình hình một cách toàn diện là có thể đưa ra quyết định đúng.',answer:'只要全面地了解情况，就能做出正确的决定。',answerPy:'Zhǐyào quánmiàn de liǎojiě qíngkuàng, jiù néng zuòchū zhèngquè de juédìng.',
      note:'全面地 + 了解; 做出决定 = đưa ra quyết định.',pair:'只要……就……'}
   ]},

  {n:7,zh:'转变',py:'zhuǎnbiàn',pos:'Động từ',vn:'thay đổi, chuyển biến',hv:'chuyển biến',em:'🔄',lesson:1,
   explain:['Thay đổi từ trạng thái này sang trạng thái khác — thường là quan niệm, thái độ, cách làm; hay mang ý chủ động, theo hướng tốt hơn.'],
   usage:'Tân ngữ trừu tượng: 转变 + 方法 / 方式 / 观念 / 思路 / 态度 (bảng 词语搭配). Còn làm danh từ: 很大的转变. Khác 变化: 变化 là thay đổi nói chung, không cần chủ ý.',
   collo:['转变观念','转变态度','转变思路','转变方式'],
   ex_zh:'我们需要转变自己的观念。',ex_py:'Wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',ex_vn:'Chúng ta cần thay đổi quan niệm của mình.',
   exList:[
     {zh:'我们需要转变自己的观念。',py:'Wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',vn:'Chúng ta cần thay đổi quan niệm của mình.'},
     {zh:'你可以试着转变一下思路，可能会快一点解决问题。',py:'Nǐ kěyǐ shìzhe zhuǎnbiàn yíxià sīlù, kěnéng huì kuài yìdiǎn jiějué wèntí.',vn:'Bạn có thể thử thay đổi lối suy nghĩ, có khi sẽ giải quyết vấn đề nhanh hơn.'},
     {zh:'上了高中以后，他的学习态度转变了很多。',py:'Shàngle gāozhōng yǐhòu, tā de xuéxí tàidu zhuǎnbiànle hěn duō.',vn:'Lên cấp ba, thái độ học tập của cậu ấy đã thay đổi nhiều.'}
   ],
   colloFull:[
     {zh:'转变观念',py:'zhuǎnbiàn guānniàn',vn:'thay đổi quan niệm'},
     {zh:'转变态度',py:'zhuǎnbiàn tàidu',vn:'thay đổi thái độ'},
     {zh:'转变思路',py:'zhuǎnbiàn sīlù',vn:'thay đổi lối suy nghĩ'},
     {zh:'转变方式',py:'zhuǎnbiàn fāngshì',vn:'thay đổi phương thức'},
     {zh:'很大的转变',py:'hěn dà de zhuǎnbiàn',vn:'sự chuyển biến lớn'}
   ],
   patterns:[
     {s:'转变 + 方法 / 方式 / 观念 / 思路 / 态度',m:'Thay đổi … (bảng 词语搭配)'},
     {s:'有 + 很大的 + 转变',m:'Có chuyển biến lớn (dùng như danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quan niệm của tôi là sau khi đọc cuốn sách đó mới thay đổi.',answer:'我的观念是读了那本书以后才转变的。',answerPy:'Wǒ de guānniàn shì dúle nà běn shū yǐhòu cái zhuǎnbiàn de.',
      note:'Nhấn mạnh THỜI ĐIỂM của việc đã xảy ra → 是……的; 才 = mới.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cậu ấy vừa đổi cách học là thành tích tiến bộ ngay.',answer:'他一转变学习方法，成绩就提高了。',answerPy:'Tā yì zhuǎnbiàn xuéxí fāngfǎ, chéngjì jiù tígāo le.',
      note:'一 + V1，(S2) 就 + V2: vừa … là … ngay. 一 trước thanh 3 đọc yì.',pair:'一……就……'}
   ]},

  {n:8,zh:'观念',py:'guānniàn',pos:'Danh từ',vn:'quan niệm, tư tưởng',hv:'quan niệm',em:'🧠',lesson:1,
   explain:['Cách nghĩ, tư tưởng đã hình thành lâu dài trong đầu một người hay cả xã hội.'],
   usage:'转变 / 改变 / 更新 + 观念; 传统观念, 教育观念, 时间观念 (ý thức giờ giấc). Rộng và lâu dài hơn 观点.',
   collo:['转变观念','传统观念','时间观念','教育观念'],
   ex_zh:'这个观点是不客观、不全面的，我们需要转变自己的观念。',ex_py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de, wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',ex_vn:'Quan điểm này là không khách quan, không toàn diện, chúng ta cần thay đổi quan niệm của mình.',
   exList:[
     {zh:'这个观点是不客观、不全面的，我们需要转变自己的观念。',py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de, wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',vn:'Quan điểm này là không khách quan, không toàn diện, chúng ta cần thay đổi quan niệm của mình.'},
     {zh:'他的时间观念很强，从来没迟到过。',py:'Tā de shíjiān guānniàn hěn qiáng, cónglái méi chídàoguo.',vn:'Cậu ấy rất có ý thức về giờ giấc, chưa bao giờ đến muộn.'},
     {zh:'很多老人的传统观念很难改变。',py:'Hěn duō lǎorén de chuántǒng guānniàn hěn nán gǎibiàn.',vn:'Quan niệm truyền thống của nhiều người già rất khó thay đổi.'}
   ],
   colloFull:[
     {zh:'转变观念',py:'zhuǎnbiàn guānniàn',vn:'thay đổi quan niệm'},
     {zh:'传统观念',py:'chuántǒng guānniàn',vn:'quan niệm truyền thống'},
     {zh:'时间观念',py:'shíjiān guānniàn',vn:'ý thức giờ giấc'},
     {zh:'教育观念',py:'jiàoyù guānniàn',vn:'quan niệm giáo dục'},
     {zh:'观念很新',py:'guānniàn hěn xīn',vn:'quan niệm mới mẻ'}
   ],
   patterns:[
     {s:'转变 / 改变 + 观念',m:'Thay đổi quan niệm'},
     {s:'时间 / 传统 / 教育 + 观念',m:'Ý thức giờ giấc / quan niệm truyền thống / quan niệm giáo dục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi chưa bao giờ thay đổi quan niệm truyền thống của mình.',answer:'我爷爷从来没改变过自己的传统观念。',answerPy:'Wǒ yéye cónglái méi gǎibiànguo zìjǐ de chuántǒng guānniàn.',
      note:'从来没 + V + 过 + tân ngữ: 过 đứng ngay sau động từ, trước tân ngữ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Quan niệm của tôi đã bị cuốn sách này thay đổi.',answer:'我的观念被这本书改变了。',answerPy:'Wǒ de guānniàn bèi zhè běn shū gǎibiàn le.',
      note:'Câu bị động: 观念 + 被 + 这本书 + 改变 + 了.',pair:'被'}
   ]},

  {n:9,zh:'火柴',py:'huǒchái',pos:'Danh từ',vn:'diêm, que diêm',hv:'hoả sài',em:'🔥',lesson:1,
   explain:['Que diêm — que gỗ nhỏ, đầu có thuốc, quẹt vào hộp thì bốc lửa.'],
   usage:'Lượng từ: 一根火柴 (một que), 一盒火柴 (một hộp). Động từ: 划火柴 (quẹt diêm). Tên truyện: 《卖火柴的小女孩儿》.',
   collo:['一根火柴','一盒火柴','划火柴','卖火柴'],
   ex_zh:'他们讨论过《卖火柴的小女孩儿》是写给谁看的。',ex_py:'Tāmen tǎolùnguo 《Mài Huǒchái de Xiǎo Nǚháir》 shì xiě gěi shéi kàn de.',ex_vn:'Họ từng thảo luận truyện "Cô bé bán diêm" được viết cho ai đọc.',
   exList:[
     {zh:'他们讨论过《卖火柴的小女孩儿》是写给谁看的。',py:'Tāmen tǎolùnguo 《Mài Huǒchái de Xiǎo Nǚháir》 shì xiě gěi shéi kàn de.',vn:'Họ từng thảo luận truyện "Cô bé bán diêm" được viết cho ai đọc.'},
     {zh:'停电了，奶奶划了一根火柴，点上了蜡烛。',py:'Tíngdiàn le, nǎinai huále yì gēn huǒchái, diǎnshangle làzhú.',vn:'Mất điện, bà quẹt một que diêm, thắp nến lên.'},
     {zh:'现在大家都用打火机，很少有人用火柴了。',py:'Xiànzài dàjiā dōu yòng dǎhuǒjī, hěn shǎo yǒu rén yòng huǒchái le.',vn:'Bây giờ mọi người đều dùng bật lửa, ít ai còn dùng diêm.'}
   ],
   colloFull:[
     {zh:'一根火柴',py:'yì gēn huǒchái',vn:'một que diêm'},
     {zh:'一盒火柴',py:'yì hé huǒchái',vn:'một hộp diêm'},
     {zh:'划火柴',py:'huá huǒchái',vn:'quẹt diêm'},
     {zh:'卖火柴',py:'mài huǒchái',vn:'bán diêm'},
     {zh:'火柴盒',py:'huǒcháihé',vn:'hộp diêm'}
   ],
   patterns:[
     {s:'一根 / 一盒 + 火柴',m:'Lượng từ của diêm: que / hộp'},
     {s:'划 + 火柴',m:'Quẹt diêm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô bé quẹt cháy cả que diêm cuối cùng.',answer:'小女孩把最后一根火柴也划着了。',answerPy:'Xiǎo nǚhái bǎ zuìhòu yì gēn huǒchái yě huázháo le.',
      note:'Câu 把: 把 + 一根火柴 + V + bổ ngữ kết quả (划着 huázháo = quẹt cháy).',pair:'把'},
     {promptLang:'vi',prompt:'Diêm đã bị em trai lấy đi chơi rồi.',answer:'火柴被弟弟拿去玩儿了。',answerPy:'Huǒchái bèi dìdi ná qù wánr le.',
      note:'Câu bị động với 被; trẻ con chơi diêm rất nguy hiểm!',pair:'被'}
   ]},

  {n:10,zh:'灰',py:'huī',pos:'Danh từ / Tính từ',vn:'tro, bụi; màu xám',hv:'hôi',em:'🩶',lesson:1,
   explain:['Danh từ: tro, bụi (烟灰, 一层灰).','Tính từ: màu xám (灰色).'],
   usage:'灰色 = màu xám; 一层灰 = một lớp bụi. Trong tên 灰姑娘, 灰 vừa là "tro bụi" vừa là "màu xám" — gợi hoàn cảnh sống lấm lem của cô (phần 背景分析 của sách).',
   collo:['灰色','一层灰','灰姑娘','烟灰'],
   ex_zh:'“灰”这个词，在汉语中既可以指尘土，也可以指颜色。',ex_py:'"Huī" zhège cí, zài Hànyǔ zhōng jì kěyǐ zhǐ chéntǔ, yě kěyǐ zhǐ yánsè.',ex_vn:'Chữ "灰" trong tiếng Hán vừa có thể chỉ bụi đất, vừa có thể chỉ màu sắc.',
   exList:[
     {zh:'“灰”这个词，在汉语中既可以指尘土，也可以指颜色。',py:'"Huī" zhège cí, zài Hànyǔ zhōng jì kěyǐ zhǐ chéntǔ, yě kěyǐ zhǐ yánsè.',vn:'Chữ "灰" trong tiếng Hán vừa có thể chỉ bụi đất, vừa có thể chỉ màu sắc.'},
     {zh:'很久没人住了，桌子上有一层灰。',py:'Hěn jiǔ méi rén zhù le, zhuōzi shang yǒu yì céng huī.',vn:'Lâu không có người ở, trên bàn phủ một lớp bụi.'},
     {zh:'他穿着一件灰色的大衣。',py:'Tā chuānzhe yí jiàn huīsè de dàyī.',vn:'Anh ấy mặc một chiếc áo khoác màu xám.'}
   ],
   colloFull:[
     {zh:'灰色',py:'huīsè',vn:'màu xám'},
     {zh:'一层灰',py:'yì céng huī',vn:'một lớp bụi'},
     {zh:'灰姑娘',py:'Huīgūniang',vn:'cô bé Lọ Lem'},
     {zh:'烟灰',py:'yānhuī',vn:'tàn thuốc'},
     {zh:'灰白',py:'huībái',vn:'trắng xám'}
   ],
   patterns:[
     {s:'灰色的 + N',m:'… màu xám'},
     {s:'(N 上) 有一层灰',m:'Có một lớp bụi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã lau sạch lớp bụi trên bàn.',answer:'我把桌子上的灰擦干净了。',answerPy:'Wǒ bǎ zhuōzi shang de huī cā gānjìng le.',
      note:'Câu 把 + bổ ngữ kết quả 干净; 灰 ở đây là danh từ "bụi".',pair:'把'},
     {promptLang:'vi',prompt:'Trời càng ngày càng xám xịt, sắp mưa rồi.',answer:'天越来越灰了，快要下雨了。',answerPy:'Tiān yuè lái yuè huī le, kuài yào xià yǔ le.',
      note:'灰 ở đây là tính từ "xám"; 快要……了 = sắp ….',pair:'越来越……'}
   ]},

  {n:11,zh:'一旦',py:'yídàn',pos:'Phó từ',vn:'một khi',hv:'nhất đán',em:'⏳',lesson:1,
   explain:['Chỉ một thời điểm không xác định — "một ngày nào đó bỗng", hoặc giả định "nếu có ngày …"; vế sau thường có 就 / 便 nêu kết quả.'],
   usage:'一旦 + V / tình huống，(S) 就 + kết quả. Đứng trước hoặc sau chủ ngữ: 灰姑娘一旦进了王宫…… / 一旦有人闯入…… (điểm ngữ pháp 1 của bài).',
   collo:['一旦……就……','一旦发生','一旦失去','一旦决定'],
   ex_zh:'灰姑娘一旦进了这个王宫，……应该怎样对待她的继母，应该怎样对待她的两个姐姐？',ex_py:'Huīgūniang yídàn jìnle zhège wánggōng, …… yīnggāi zěnyàng duìdài tā de jìmǔ, yīnggāi zěnyàng duìdài tā de liǎng ge jiějie?',ex_vn:'Một khi Lọ Lem đã vào hoàng cung này, … cô nên đối xử với mẹ kế thế nào, nên đối xử với hai người chị thế nào?',
   exList:[
     {zh:'长大后，我终于明白了这个道理：女人一旦做了母亲，就变得矛盾了。',py:'Zhǎngdà hòu, wǒ zhōngyú míngbaile zhège dàolǐ: nǚrén yídàn zuòle mǔqīn, jiù biàn de máodùn le.',vn:'Lớn lên tôi mới hiểu ra đạo lý này: người phụ nữ một khi đã làm mẹ thì trở nên đầy mâu thuẫn.'},
     {zh:'所谓私人空间，是指我们身体周围的一定的空间，一旦有人闯入这个空间，我们就会感觉不舒服、不自在。',py:'Suǒwèi sīrén kōngjiān, shì zhǐ wǒmen shēntǐ zhōuwéi de yídìng de kōngjiān, yídàn yǒu rén chuǎngrù zhège kōngjiān, wǒmen jiù huì gǎnjué bù shūfu, bú zìzai.',vn:'Cái gọi là không gian riêng là khoảng không gian nhất định quanh cơ thể ta; một khi có người xông vào, ta sẽ thấy khó chịu, không thoải mái.'},
     {zh:'网上报名的资料一旦提交，就不能更改了。',py:'Wǎng shang bàomíng de zīliào yídàn tíjiāo, jiù bù néng gēnggǎi le.',vn:'Hồ sơ đăng ký trên mạng một khi đã nộp thì không sửa được nữa.'}
   ],
   colloFull:[
     {zh:'一旦……就……',py:'yídàn… jiù…',vn:'một khi … thì …'},
     {zh:'一旦发生',py:'yídàn fāshēng',vn:'một khi xảy ra'},
     {zh:'一旦失去',py:'yídàn shīqù',vn:'một khi mất đi'},
     {zh:'一旦决定',py:'yídàn juédìng',vn:'một khi đã quyết'},
     {zh:'一旦提交',py:'yídàn tíjiāo',vn:'một khi đã nộp'}
   ],
   patterns:[
     {s:'一旦 + điều kiện，(S) 就 / 便 + kết quả',m:'Một khi … thì … (điều kiện chưa xác định hoặc giả định)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi đã quyết định, anh ấy chưa bao giờ thay đổi.',answer:'一旦做了决定，他就从来没改变过。',answerPy:'Yídàn zuòle juédìng, tā jiù cónglái méi gǎibiànguo.',
      note:'一旦 ở vế trước, 就 đứng sau chủ ngữ vế sau; 从来没 + V + 过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Điện thoại một khi bị bố mẹ phát hiện thì cậu không được chơi nữa đâu.',answer:'手机一旦被父母发现，你就不能玩儿了。',answerPy:'Shǒujī yídàn bèi fùmǔ fāxiàn, nǐ jiù bù néng wánr le.',
      note:'一旦 đứng sau chủ ngữ, trước cụm 被 + người + V.',pair:'被'}
   ]},

  {n:12,zh:'王宫',py:'wánggōng',pos:'Danh từ',vn:'hoàng cung',hv:'vương cung',em:'🏰',lesson:1,
   explain:['Cung điện nơi vua và hoàng gia ở.'],
   usage:'进(入)王宫, 住在王宫里; lượng từ 座. Hay gặp trong truyện cổ tích phương Tây; cung vua Trung Quốc xưa thường gọi 皇宫.',
   collo:['进入王宫','住在王宫里','王宫舞会','美丽的王宫'],
   ex_zh:'如果你是灰姑娘，成为王子的心上人并进入王宫以后，你会怎么对待继母和姐姐？',ex_py:'Rúguǒ nǐ shì Huīgūniang, chéngwéi wángzǐ de xīnshàngrén bìng jìnrù wánggōng yǐhòu, nǐ huì zěnme duìdài jìmǔ hé jiějie?',ex_vn:'Nếu bạn là Lọ Lem, sau khi trở thành người trong mộng của hoàng tử và vào hoàng cung, bạn sẽ đối xử với mẹ kế và các chị thế nào?',
   exList:[
     {zh:'如果你是灰姑娘，成为王子的心上人并进入王宫以后，你会怎么对待继母和姐姐？',py:'Rúguǒ nǐ shì Huīgūniang, chéngwéi wángzǐ de xīnshàngrén bìng jìnrù wánggōng yǐhòu, nǐ huì zěnme duìdài jìmǔ hé jiějie?',vn:'Nếu bạn là Lọ Lem, sau khi trở thành người trong mộng của hoàng tử và vào hoàng cung, bạn sẽ đối xử với mẹ kế và các chị thế nào?'},
     {zh:'王宫里正在举行舞会，灰姑娘也很想去。',py:'Wánggōng li zhèngzài jǔxíng wǔhuì, Huīgūniang yě hěn xiǎng qù.',vn:'Trong hoàng cung đang mở vũ hội, Lọ Lem cũng rất muốn đi.'},
     {zh:'这座王宫已经有三百多年的历史了。',py:'Zhè zuò wánggōng yǐjīng yǒu sānbǎi duō nián de lìshǐ le.',vn:'Toà cung điện này đã có hơn ba trăm năm lịch sử.'}
   ],
   colloFull:[
     {zh:'进入王宫',py:'jìnrù wánggōng',vn:'vào hoàng cung'},
     {zh:'住在王宫里',py:'zhù zài wánggōng li',vn:'sống trong hoàng cung'},
     {zh:'王宫舞会',py:'wánggōng wǔhuì',vn:'vũ hội hoàng cung'},
     {zh:'美丽的王宫',py:'měilì de wánggōng',vn:'hoàng cung lộng lẫy'},
     {zh:'一座王宫',py:'yí zuò wánggōng',vn:'một toà cung điện'}
   ],
   patterns:[
     {s:'一座 + 王宫',m:'Lượng từ 座'},
     {s:'进(入) + 王宫',m:'Vào hoàng cung'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy chưa từng vào hoàng cung bao giờ.',answer:'她从来没进过王宫。',answerPy:'Tā cónglái méi jìnguo wánggōng.',
      note:'过 đứng ngay sau động từ 进, trước tân ngữ 王宫.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Toà cung điện này được xây vào thế kỷ 18.',answer:'这座王宫是十八世纪建成的。',answerPy:'Zhè zuò wánggōng shì shíbā shìjì jiànchéng de.',
      note:'Nhấn mạnh THỜI GIAN của việc đã xong → 是……的.',pair:'是……的'}
   ]},

  {n:13,zh:'王子',py:'wángzǐ',pos:'Danh từ',vn:'hoàng tử',hv:'vương tử',em:'🤴',lesson:1,
   explain:['Con trai của vua.'],
   usage:'Lượng từ 位 / 个. 王子和公主 (hoàng tử và công chúa); 白马王子 = bạch mã hoàng tử, chàng trai trong mộng; 王子的心上人 = người trong mộng của hoàng tử (trong bài).',
   collo:['王子和公主','白马王子','王子的心上人','小王子'],
   ex_zh:'灰姑娘一旦进了这个王宫，成为王子的心上人，她的梦想就实现了。',ex_py:'Huīgūniang yídàn jìnle zhège wánggōng, chéngwéi wángzǐ de xīnshàngrén, tā de mèngxiǎng jiù shíxiàn le.',ex_vn:'Lọ Lem một khi đã vào hoàng cung, trở thành người trong mộng của hoàng tử thì giấc mơ của cô đã thành hiện thực.',
   exList:[
     {zh:'灰姑娘一旦进了这个王宫，成为王子的心上人，她的梦想就实现了。',py:'Huīgūniang yídàn jìnle zhège wánggōng, chéngwéi wángzǐ de xīnshàngrén, tā de mèngxiǎng jiù shíxiàn le.',vn:'Lọ Lem một khi đã vào hoàng cung, trở thành người trong mộng của hoàng tử thì giấc mơ của cô đã thành hiện thực.'},
     {zh:'很多童话的结尾都是王子和公主幸福地生活在一起。',py:'Hěn duō tónghuà de jiéwěi dōu shì wángzǐ hé gōngzhǔ xìngfú de shēnghuó zài yìqǐ.',vn:'Kết thúc của nhiều truyện cổ tích đều là hoàng tử và công chúa sống hạnh phúc bên nhau.'},
     {zh:'《小王子》是一本适合大人和孩子一起读的书。',py:'《Xiǎo Wángzǐ》 shì yì běn shìhé dàrén hé háizi yìqǐ dú de shū.',vn:'"Hoàng tử bé" là cuốn sách hợp để người lớn và trẻ con cùng đọc.'}
   ],
   colloFull:[
     {zh:'王子和公主',py:'wángzǐ hé gōngzhǔ',vn:'hoàng tử và công chúa'},
     {zh:'白马王子',py:'báimǎ wángzǐ',vn:'bạch mã hoàng tử'},
     {zh:'王子的心上人',py:'wángzǐ de xīnshàngrén',vn:'người trong mộng của hoàng tử'},
     {zh:'小王子',py:'Xiǎo Wángzǐ',vn:'Hoàng tử bé'},
     {zh:'一位王子',py:'yí wèi wángzǐ',vn:'một vị hoàng tử'}
   ],
   patterns:[
     {s:'成为 + 王子的心上人',m:'Trở thành người trong mộng của hoàng tử'},
     {s:'王子 + 和 + 公主',m:'Hoàng tử và công chúa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoàng tử đã bị vẻ đẹp của Lọ Lem thu hút.',answer:'王子被灰姑娘的美丽吸引住了。',answerPy:'Wángzǐ bèi Huīgūniang de měilì xīyǐn zhù le.',
      note:'Câu bị động: 王子 + 被 + tác nhân + V + bổ ngữ (吸引住) + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Hoàng tử vừa nhìn thấy Lọ Lem là thích cô ấy ngay.',answer:'王子一看见灰姑娘，就喜欢上了她。',answerPy:'Wángzǐ yí kànjiàn Huīgūniang, jiù xǐhuan shàngle tā.',
      note:'一 + V1，就 + V2. 一 trước thanh 4 (看) đọc yí.',pair:'一……就……'}
   ]},

  {n:14,zh:'属于',py:'shǔyú',pos:'Động từ',vn:'thuộc về',hv:'thuộc vu',em:'📌',lesson:1,
   explain:['Thuộc phạm vi của ai / cái gì; là của ai.'],
   usage:'A + 属于 + B (B là người sở hữu hoặc phạm vi). Hay dùng trong khung 是属于……的. Không đi với 很, hiếm khi mang 了 / 过.',
   collo:['属于我们','属于她','属于自己','属于……的'],
   ex_zh:'她的梦想实现了，一切幸福都属于她。',ex_py:'Tā de mèngxiǎng shíxiàn le, yíqiè xìngfú dōu shǔyú tā.',ex_vn:'Giấc mơ của cô đã thành hiện thực, mọi hạnh phúc đều thuộc về cô.',
   exList:[
     {zh:'她的梦想实现了，一切幸福都属于她。',py:'Tā de mèngxiǎng shíxiàn le, yíqiè xìngfú dōu shǔyú tā.',vn:'Giấc mơ của cô đã thành hiện thực, mọi hạnh phúc đều thuộc về cô.'},
     {zh:'未来是属于你们年轻人的。',py:'Wèilái shì shǔyú nǐmen niánqīngrén de.',vn:'Tương lai là của các bạn trẻ.'},
     {zh:'这些书属于学校图书馆，不能带回家。',py:'Zhèxiē shū shǔyú xuéxiào túshūguǎn, bù néng dài huí jiā.',vn:'Những cuốn sách này thuộc thư viện trường, không được mang về nhà.'}
   ],
   colloFull:[
     {zh:'属于我们',py:'shǔyú wǒmen',vn:'thuộc về chúng ta'},
     {zh:'属于她',py:'shǔyú tā',vn:'thuộc về cô ấy'},
     {zh:'属于自己',py:'shǔyú zìjǐ',vn:'của riêng mình'},
     {zh:'属于……的',py:'shǔyú… de',vn:'là của …'},
     {zh:'不属于',py:'bù shǔyú',vn:'không thuộc về'}
   ],
   patterns:[
     {s:'A + 属于 + B',m:'A thuộc về B'},
     {s:'(是) + 属于 + N + 的',m:'Là của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng nhỏ này là của riêng tôi, ngay cả em trai cũng không được vào.',answer:'这个小房间是属于我自己的，连弟弟都不能进来。',answerPy:'Zhège xiǎo fángjiān shì shǔyú wǒ zìjǐ de, lián dìdi dōu bù néng jìnlai.',
      note:'是属于……的 = là của …; 连 + người + 都 + phủ định.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần cố gắng, thành công nhất định sẽ thuộc về bạn.',answer:'只要努力，成功就一定会属于你。',answerPy:'Zhǐyào nǔlì, chénggōng jiù yídìng huì shǔyú nǐ.',
      note:'只要 ở vế trước, 就 đứng sau chủ ngữ vế sau (成功就……).',pair:'只要……就……'}
   ]},

  {n:15,zh:'对待',py:'duìdài',pos:'Động từ',vn:'đối xử, đối đãi',hv:'đối đãi',em:'🤝',lesson:1,
   explain:['Cư xử với người; có thái độ, cách xử lý với một sự việc.'],
   usage:'对待 + người / sự việc. Trạng ngữ đứng trước: 认真 / 正确 / 冷静 / 客观 / 公平(地) + 对待 (bảng 词语搭配). Chú ý: nói 对他很好, KHÔNG nói 对待他很好.',
   collo:['平等地对待','认真地对待','公平地对待','怎样对待'],
   ex_zh:'这时她应该怎样对待她的继母，应该怎样对待她的两个姐姐？',ex_py:'Zhè shí tā yīnggāi zěnyàng duìdài tā de jìmǔ, yīnggāi zěnyàng duìdài tā de liǎng ge jiějie?',ex_vn:'Lúc này cô nên đối xử với mẹ kế thế nào, nên đối xử với hai người chị thế nào?',
   exList:[
     {zh:'这时她应该怎样对待她的继母，应该怎样对待她的两个姐姐？',py:'Zhè shí tā yīnggāi zěnyàng duìdài tā de jìmǔ, yīnggāi zěnyàng duìdài tā de liǎng ge jiějie?',vn:'Lúc này cô nên đối xử với mẹ kế thế nào, nên đối xử với hai người chị thế nào?'},
     {zh:'老师对待每个学生都很公平。',py:'Lǎoshī duìdài měi ge xuésheng dōu hěn gōngpíng.',vn:'Thầy giáo đối xử với học sinh nào cũng rất công bằng.'},
     {zh:'考试失败了，要冷静地对待，别太难过。',py:'Kǎoshì shībài le, yào lěngjìng de duìdài, bié tài nánguò.',vn:'Thi trượt thì phải bình tĩnh đối mặt, đừng buồn quá.'}
   ],
   colloFull:[
     {zh:'平等地对待',py:'píngděng de duìdài',vn:'đối xử bình đẳng'},
     {zh:'认真地对待',py:'rènzhēn de duìdài',vn:'nghiêm túc đối mặt'},
     {zh:'公平地对待',py:'gōngpíng de duìdài',vn:'đối xử công bằng'},
     {zh:'怎样对待',py:'zěnyàng duìdài',vn:'đối xử thế nào'},
     {zh:'冷静地对待',py:'lěngjìng de duìdài',vn:'bình tĩnh đối mặt'}
   ],
   patterns:[
     {s:'认真 / 冷静 / 客观 / 公平(地) + 对待 + N',m:'Đối xử / đối mặt với … một cách … (bảng 词语搭配)'},
     {s:'对待 + 问题 / 批评 / 失败',m:'Đối mặt với vấn đề / lời phê bình / thất bại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo chưa bao giờ đối xử bất công với học sinh.',answer:'老师从来没有不公平地对待过学生。',answerPy:'Lǎoshī cónglái méiyǒu bù gōngpíng de duìdàiguo xuésheng.',
      note:'从来没有 + trạng ngữ + V + 过 + tân ngữ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Tuy mẹ kế rất ích kỷ, nhưng Lọ Lem vẫn tha thứ và đối xử thân thiện với bà.',answer:'虽然继母很自私，但是灰姑娘还是原谅了她，友好地对待她。',answerPy:'Suīrán jìmǔ hěn zìsī, dànshì Huīgūniang háishi yuánliàngle tā, yǒuhǎo de duìdài tā.',
      note:'友好地 + 对待; 虽然 ở vế trước, 但是 mở đầu vế sau.',pair:'虽然……但是……'}
   ]},

  {n:16,zh:'交换',py:'jiāohuàn',pos:'Động từ',vn:'trao đổi',hv:'giao hoán',em:'🔁',lesson:1,
   explain:['Hai bên đưa cho nhau, đổi cho nhau (đồ vật, vị trí, ý kiến, tình cảm).'],
   usage:'交换 + 物品 / 位置 / 意见 (bảng 词语搭配); 交换礼物; 情感交换 (trao đổi tình cảm — trong bài). 交换生 = du học sinh trao đổi. Khác 换: 换 có thể một chiều (换衣服), 交换 luôn có hai bên.',
   collo:['交换意见','交换礼物','交换位置','情感交换'],
   ex_zh:'为什么要讨论这个问题呢？因为这是一种情感交换。',ex_py:'Wèi shénme yào tǎolùn zhège wèntí ne? Yīnwèi zhè shì yì zhǒng qínggǎn jiāohuàn.',ex_vn:'Vì sao phải thảo luận vấn đề này? Vì đây là một kiểu trao đổi tình cảm.',
   exList:[
     {zh:'为什么要讨论这个问题呢？因为这是一种情感交换。',py:'Wèi shénme yào tǎolùn zhège wèntí ne? Yīnwèi zhè shì yì zhǒng qínggǎn jiāohuàn.',vn:'Vì sao phải thảo luận vấn đề này? Vì đây là một kiểu trao đổi tình cảm.'},
     {zh:'新年晚会上，同学们互相交换了礼物。',py:'Xīnnián wǎnhuì shang, tóngxuémen hùxiāng jiāohuànle lǐwù.',vn:'Trong buổi liên hoan năm mới, các bạn tặng quà cho nhau.'},
     {zh:'开会以前，我们先交换一下意见吧。',py:'Kāihuì yǐqián, wǒmen xiān jiāohuàn yíxià yìjiàn ba.',vn:'Trước khi họp, chúng ta trao đổi ý kiến một chút đã.'}
   ],
   colloFull:[
     {zh:'交换意见',py:'jiāohuàn yìjiàn',vn:'trao đổi ý kiến'},
     {zh:'交换礼物',py:'jiāohuàn lǐwù',vn:'trao đổi quà'},
     {zh:'交换位置',py:'jiāohuàn wèizhi',vn:'đổi chỗ cho nhau'},
     {zh:'情感交换',py:'qínggǎn jiāohuàn',vn:'trao đổi tình cảm'},
     {zh:'交换生',py:'jiāohuànshēng',vn:'du học sinh trao đổi'}
   ],
   patterns:[
     {s:'交换 + 物品 / 位置 / 意见',m:'Trao đổi … (bảng 词语搭配)'},
     {s:'(A 和 B) 互相交换 + N',m:'Hai bên đổi … cho nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo bảo chúng tôi đổi chỗ ngồi cho nhau một chút.',answer:'老师让我们把座位交换一下。',answerPy:'Lǎoshī ràng wǒmen bǎ zuòwèi jiāohuàn yíxià.',
      note:'Câu 把: 把 + 座位 + 交换 + 一下 (động từ không đứng trơ trọi).',pair:'把'},
     {promptLang:'vi',prompt:'Chúng tôi vừa trao đổi ý kiến là tìm ra ngay cách giải quyết.',answer:'我们一交换意见，就找到了解决的办法。',answerPy:'Wǒmen yì jiāohuàn yìjiàn, jiù zhǎodàole jiějué de bànfǎ.',
      note:'一 + V1，就 + V2. 一 trước thanh 1 (交) đọc yì.',pair:'一……就……'}
   ]},

  {n:17,zh:'拥有',py:'yōngyǒu',pos:'Động từ',vn:'có, sở hữu',hv:'ủng hữu',em:'💎',lesson:1,
   explain:['Có trong tay, sở hữu — thường là thứ quý giá, lớn lao hoặc trừu tượng (hạnh phúc, tài sản, lịch sử, năng lực…). Trang trọng hơn 有.'],
   usage:'拥有 + 幸福 / 财富 / 历史 / 能力 / 梦想. Không dùng cho đồ vật nhỏ nhặt (không nói 我拥有一支笔). Phủ định thường dùng 没有.',
   collo:['拥有幸福','拥有财富','拥有……的能力','拥有梦想'],
   ex_zh:'一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。',ex_py:'Yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng hé lǐjiě nàxiē shānghàiguo zìjǐ de rén.',ex_vn:'Một người đã có được hạnh phúc to lớn thì nên tha thứ và thấu hiểu những người từng làm tổn thương mình.',
   exList:[
     {zh:'一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。',py:'Yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng hé lǐjiě nàxiē shānghàiguo zìjǐ de rén.',vn:'Một người đã có được hạnh phúc to lớn thì nên tha thứ và thấu hiểu những người từng làm tổn thương mình.'},
     {zh:'中国拥有五千多年的历史。',py:'Zhōngguó yōngyǒu wǔqiān duō nián de lìshǐ.',vn:'Trung Quốc có hơn năm nghìn năm lịch sử.'},
     {zh:'拥有一个健康的身体比什么都重要。',py:'Yōngyǒu yí ge jiànkāng de shēntǐ bǐ shénme dōu zhòngyào.',vn:'Có một cơ thể khoẻ mạnh quan trọng hơn bất cứ thứ gì.'}
   ],
   colloFull:[
     {zh:'拥有幸福',py:'yōngyǒu xìngfú',vn:'có được hạnh phúc'},
     {zh:'拥有财富',py:'yōngyǒu cáifù',vn:'sở hữu của cải'},
     {zh:'拥有……的能力',py:'yōngyǒu… de nénglì',vn:'có năng lực …'},
     {zh:'拥有梦想',py:'yōngyǒu mèngxiǎng',vn:'có ước mơ'},
     {zh:'拥有巨大的幸福',py:'yōngyǒu jùdà de xìngfú',vn:'có hạnh phúc to lớn'}
   ],
   patterns:[
     {s:'拥有 + 幸福 / 财富 / 历史 / 能力',m:'Sở hữu điều quý giá, lớn lao'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy không những có nhiều bạn tốt mà còn có một gia đình hạnh phúc.',answer:'他不仅拥有很多好朋友，也拥有一个幸福的家庭。',answerPy:'Tā bùjǐn yōngyǒu hěn duō hǎo péngyou, yě yōngyǒu yí ge xìngfú de jiātíng.',
      note:'Hai vế cùng chủ ngữ → 不仅 đứng sau chủ ngữ; 拥有 dùng cho điều quý giá.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ngày càng nhiều học sinh có điện thoại thông minh của riêng mình.',answer:'越来越多的学生拥有了自己的智能手机。',answerPy:'Yuè lái yuè duō de xuésheng yōngyǒule zìjǐ de zhìnéng shǒujī.',
      note:'越来越多的 + N làm chủ ngữ.',pair:'越来越……'}
   ]},

  {n:18,zh:'巨大',py:'jùdà',pos:'Tính từ',vn:'to lớn, khổng lồ',hv:'cự đại',em:'🗻',lesson:1,
   explain:['Rất lớn (quy mô, số lượng, ảnh hưởng, sức mạnh…).'],
   usage:'Định ngữ: 巨大(的) + 幸福 / 变化 / 压力 / 成功; vị ngữ: 影响巨大, 压力巨大. Hay dùng cho điều trừu tượng; nói phòng to, nhà to thường chỉ dùng 大.',
   collo:['巨大的幸福','巨大的变化','巨大的压力','影响巨大'],
   ex_zh:'一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。',ex_py:'Yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng hé lǐjiě nàxiē shānghàiguo zìjǐ de rén.',ex_vn:'Một người đã có được hạnh phúc to lớn thì nên tha thứ và thấu hiểu những người từng làm tổn thương mình.',
   exList:[
     {zh:'一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。',py:'Yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng hé lǐjiě nàxiē shānghàiguo zìjǐ de rén.',vn:'Một người đã có được hạnh phúc to lớn thì nên tha thứ và thấu hiểu những người từng làm tổn thương mình.'},
     {zh:'这十年，我的家乡发生了巨大的变化。',py:'Zhè shí nián, wǒ de jiāxiāng fāshēngle jùdà de biànhuà.',vn:'Mười năm nay, quê tôi đã có những thay đổi to lớn.'},
     {zh:'高考前，很多学生都感到压力巨大。',py:'Gāokǎo qián, hěn duō xuésheng dōu gǎndào yālì jùdà.',vn:'Trước kỳ thi đại học, nhiều học sinh cảm thấy áp lực rất lớn.'}
   ],
   colloFull:[
     {zh:'巨大的幸福',py:'jùdà de xìngfú',vn:'hạnh phúc to lớn'},
     {zh:'巨大的变化',py:'jùdà de biànhuà',vn:'thay đổi to lớn'},
     {zh:'巨大的压力',py:'jùdà de yālì',vn:'áp lực rất lớn'},
     {zh:'影响巨大',py:'yǐngxiǎng jùdà',vn:'ảnh hưởng rất lớn'},
     {zh:'巨大的成功',py:'jùdà de chénggōng',vn:'thành công vang dội'}
   ],
   patterns:[
     {s:'巨大(的) + 幸福 / 变化 / 压力 / 成功',m:'… to lớn'},
     {s:'N + 巨大',m:'… rất lớn (làm vị ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay đổi to lớn này là do Internet mang lại.',answer:'这个巨大的变化是互联网带来的。',answerPy:'Zhège jùdà de biànhuà shì hùliánwǎng dàilái de.',
      note:'是……的 nhấn mạnh tác nhân của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy áp lực rất lớn, nhưng cô ấy chưa bao giờ bỏ cuộc.',answer:'虽然压力巨大，但是她从来没放弃过。',answerPy:'Suīrán yālì jùdà, dànshì tā cónglái méi fàngqìguo.',
      note:'巨大 làm vị ngữ (压力巨大); 从来没 + V + 过.',pair:'虽然……但是……'}
   ]},

  {n:19,zh:'承认',py:'chéngrèn',pos:'Động từ',vn:'thừa nhận, chấp nhận',hv:'thừa nhận',em:'✋',lesson:1,
   explain:['Đồng ý rằng điều gì là đúng, là sự thật (thường là điều mình không muốn nhận: lỗi, thất bại); công nhận.'],
   usage:'承认 + 事实 / 错误 (bảng 词语搭配); 承认 + mệnh đề: 我承认我错了. Hay đi với 勇敢地, 不得不.',
   collo:['承认错误','承认事实','勇敢地承认','不得不承认'],
   ex_zh:'另外还要承认人性中一些先天的不完美。',ex_py:'Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi.',ex_vn:'Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người.',
   exList:[
     {zh:'另外还要承认人性中一些先天的不完美。',py:'Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi.',vn:'Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người.'},
     {zh:'虽然这次的错误有点儿严重，但你应该勇敢地承认。',py:'Suīrán zhè cì de cuòwù yǒudiǎnr yánzhòng, dàn nǐ yīnggāi yǒnggǎn de chéngrèn.',vn:'Tuy lỗi lần này hơi nghiêm trọng, nhưng bạn nên dũng cảm thừa nhận.'},
     {zh:'我不得不承认，他的汉语比我好。',py:'Wǒ bùdébù chéngrèn, tā de Hànyǔ bǐ wǒ hǎo.',vn:'Tôi đành phải thừa nhận, tiếng Trung của cậu ấy giỏi hơn tôi.'}
   ],
   colloFull:[
     {zh:'承认错误',py:'chéngrèn cuòwù',vn:'thừa nhận lỗi'},
     {zh:'承认事实',py:'chéngrèn shìshí',vn:'thừa nhận sự thật'},
     {zh:'勇敢地承认',py:'yǒnggǎn de chéngrèn',vn:'dũng cảm thừa nhận'},
     {zh:'不得不承认',py:'bùdébù chéngrèn',vn:'đành phải thừa nhận'},
     {zh:'承认失败',py:'chéngrèn shībài',vn:'chấp nhận thất bại'}
   ],
   patterns:[
     {s:'承认 + 事实 / 错误',m:'Thừa nhận sự thật / lỗi (bảng 词语搭配)'},
     {s:'承认 + mệnh đề',m:'Thừa nhận rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy chưa bao giờ thừa nhận lỗi của mình.',answer:'他从来没承认过自己的错误。',answerPy:'Tā cónglái méi chéngrènguo zìjǐ de cuòwù.',
      note:'过 đứng ngay sau động từ 承认, trước tân ngữ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Em trai cuối cùng đã thừa nhận cái cốc là do nó làm vỡ.',answer:'弟弟终于承认杯子是他打破的。',answerPy:'Dìdi zhōngyú chéngrèn bēizi shì tā dǎpò de.',
      note:'承认 + mệnh đề; trong mệnh đề dùng 是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:20,zh:'人性',py:'rénxìng',pos:'Danh từ',vn:'bản tính con người',hv:'nhân tính',em:'🧬',lesson:1,
   explain:['Những đặc điểm, bản tính vốn có của con người — cả tốt lẫn chưa tốt.'],
   usage:'人性中……, 人性的弱点, 人性的价值判断 (trong bài). 人性化 = thân thiện, hợp với con người (设计很人性化). Chú ý: "nhân tính" trong tiếng Việt hay hiểu là lòng nhân đạo (mất nhân tính); 人性 trong bài là bản tính tự nhiên.',
   collo:['人性中','人性的弱点','人性的价值判断','了解人性'],
   ex_zh:'另外还要承认人性中一些先天的不完美。',ex_py:'Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi.',ex_vn:'Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người.',
   exList:[
     {zh:'另外还要承认人性中一些先天的不完美。',py:'Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi.',vn:'Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người.'},
     {zh:'老师在讲童话的时候，已经把人性的价值判断给了孩子们。',py:'Lǎoshī zài jiǎng tónghuà de shíhou, yǐjīng bǎ rénxìng de jiàzhí pànduàn gěile háizimen.',vn:'Khi kể chuyện cổ tích, thầy giáo đã trao cho các em cách đánh giá giá trị về bản tính con người.'},
     {zh:'好的小说能让读者更了解人性。',py:'Hǎo de xiǎoshuō néng ràng dúzhě gèng liǎojiě rénxìng.',vn:'Tiểu thuyết hay giúp người đọc hiểu con người hơn.'}
   ],
   colloFull:[
     {zh:'人性中',py:'rénxìng zhōng',vn:'trong bản tính con người'},
     {zh:'人性的弱点',py:'rénxìng de ruòdiǎn',vn:'điểm yếu của con người'},
     {zh:'人性的价值判断',py:'rénxìng de jiàzhí pànduàn',vn:'phán đoán giá trị về nhân tính'},
     {zh:'了解人性',py:'liǎojiě rénxìng',vn:'hiểu con người'},
     {zh:'人性化',py:'rénxìnghuà',vn:'thân thiện với con người'}
   ],
   patterns:[
     {s:'人性 + 中 / 的弱点',m:'Trong bản tính / điểm yếu của con người'},
     {s:'人性化 + 的设计 / 服务',m:'Thiết kế / dịch vụ thân thiện với người dùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả người tốt cũng có điểm yếu của bản tính con người.',answer:'连好人都有人性的弱点。',answerPy:'Lián hǎorén dōu yǒu rénxìng de ruòdiǎn.',
      note:'连 + trường hợp đặc biệt + 都 …',pair:'连……都……'},
     {promptLang:'vi',prompt:'Thiết kế của ứng dụng này ngày càng thân thiện với người dùng.',answer:'这个应用的设计越来越人性化了。',answerPy:'Zhège yìngyòng de shèjì yuè lái yuè rénxìnghuà le.',
      note:'人性化 dùng như tính từ; 越来越 + 人性化 + 了.',pair:'越来越……'}
   ]},

  {n:21,zh:'完美',py:'wánměi',pos:'Tính từ',vn:'hoàn hảo, hoàn mỹ',hv:'hoàn mỹ',em:'🌟',lesson:1,
   explain:['Tốt đẹp đến mức không có khuyết điểm.'],
   usage:'完美的 + 人 / 世界 / 生活 / 婚姻 / 计划 (bảng 词语搭配); 追求完美; 不完美 còn dùng như danh từ: 人性中的不完美.',
   collo:['完美的人','完美的计划','追求完美','不完美'],
   ex_zh:'没有真正完美的计划，先干着吧。',ex_py:'Méiyǒu zhēnzhèng wánměi de jìhuà, xiān gànzhe ba.',ex_vn:'Không có kế hoạch nào thật sự hoàn hảo đâu, cứ làm trước đã.',
   exList:[
     {zh:'世界上没有完美的人，每个人都有缺点。',py:'Shìjiè shang méiyǒu wánměi de rén, měi ge rén dōu yǒu quēdiǎn.',vn:'Trên đời không có ai hoàn hảo, ai cũng có khuyết điểm.'},
     {zh:'没有真正完美的计划，先干着吧。',py:'Méiyǒu zhēnzhèng wánměi de jìhuà, xiān gànzhe ba.',vn:'Không có kế hoạch nào thật sự hoàn hảo đâu, cứ làm trước đã.'},
     {zh:'另外还要承认人性中一些先天的不完美。',py:'Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi.',vn:'Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người.'}
   ],
   colloFull:[
     {zh:'完美的人',py:'wánměi de rén',vn:'người hoàn hảo'},
     {zh:'完美的计划',py:'wánměi de jìhuà',vn:'kế hoạch hoàn hảo'},
     {zh:'追求完美',py:'zhuīqiú wánměi',vn:'theo đuổi sự hoàn hảo'},
     {zh:'不完美',py:'bù wánměi',vn:'không hoàn hảo'},
     {zh:'完美的生活',py:'wánměi de shēnghuó',vn:'cuộc sống hoàn hảo'}
   ],
   patterns:[
     {s:'完美的 + 人 / 世界 / 生活 / 婚姻 / 计划',m:'… hoàn hảo (bảng 词语搭配)'},
     {s:'追求 + 完美',m:'Theo đuổi sự hoàn hảo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chị tôi quá theo đuổi sự hoàn hảo, ngay cả một lỗi nhỏ cũng không chấp nhận được.',answer:'我姐姐过分追求完美，连一个小错误都不能接受。',answerPy:'Wǒ jiějie guòfèn zhuīqiú wánměi, lián yí ge xiǎo cuòwù dōu bù néng jiēshòu.',
      note:'过分追求完美 (bảng 词语搭配); 连 + 一个…… + 都 + phủ định.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bài văn này tuy không hoàn hảo nhưng rất chân thật.',answer:'这篇作文虽然不完美，但是很真实。',answerPy:'Zhè piān zuòwén suīrán bù wánměi, dànshì hěn zhēnshí.',
      note:'Hai vế cùng chủ ngữ → 虽然 đứng sau chủ ngữ.',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'难免',py:'nánmiǎn',pos:'Tính từ',vn:'khó tránh, khó tránh khỏi',hv:'nan miễn',em:'🤷',lesson:1,
   explain:['Không dễ tránh được, khó tránh khỏi (điểm ngữ pháp 2 của bài).'],
   usage:'① Làm vị ngữ: (N) 是难免的. ② Đứng trước động từ làm trạng ngữ: 难免 + 会 / 要 + V. Thường nói về điều không mong muốn: lỗi, căng thẳng, mâu thuẫn.',
   collo:['是难免的','难免会','难免出错','难免有矛盾'],
   ex_zh:'刚开始工作，这样的错误是难免的。',ex_py:'Gāng kāishǐ gōngzuò, zhèyàng de cuòwù shì nánmiǎn de.',ex_vn:'Mới bắt đầu đi làm, lỗi như thế là khó tránh khỏi.',
   exList:[
     {zh:'刚开始工作，这样的错误是难免的。',py:'Gāng kāishǐ gōngzuò, zhèyàng de cuòwù shì nánmiǎn de.',vn:'Mới bắt đầu đi làm, lỗi như thế là khó tránh khỏi.'},
     {zh:'朋友间难免会产生矛盾、误会甚至是伤害。',py:'Péngyou jiān nánmiǎn huì chǎnshēng máodùn, wùhuì shènzhì shì shānghài.',vn:'Giữa bạn bè khó tránh khỏi nảy sinh mâu thuẫn, hiểu lầm, thậm chí là tổn thương.'},
     {zh:'考试时紧张是难免的，但没想到影响会这么大。',py:'Kǎoshì shí jǐnzhāng shì nánmiǎn de, dàn méi xiǎngdào yǐngxiǎng huì zhème dà.',vn:'Căng thẳng khi thi là khó tránh, nhưng không ngờ ảnh hưởng lại lớn đến thế.'}
   ],
   colloFull:[
     {zh:'是难免的',py:'shì nánmiǎn de',vn:'là khó tránh khỏi'},
     {zh:'难免会',py:'nánmiǎn huì',vn:'khó tránh khỏi sẽ …'},
     {zh:'难免出错',py:'nánmiǎn chūcuò',vn:'khó tránh khỏi sai sót'},
     {zh:'难免有矛盾',py:'nánmiǎn yǒu máodùn',vn:'khó tránh có mâu thuẫn'},
     {zh:'在所难免',py:'zài suǒ nánmiǎn',vn:'không tránh khỏi'}
   ],
   patterns:[
     {s:'(N) + 是难免的',m:'… là khó tránh khỏi'},
     {s:'难免 + 会 / 要 + V',m:'Khó tránh khỏi sẽ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lần đầu lên sân khấu khó tránh khỏi căng thẳng, nhưng cậu ấy hát rất hay.',answer:'虽然第一次上台难免会紧张，但是他唱得很好。',answerPy:'Suīrán dì-yī cì shàngtái nánmiǎn huì jǐnzhāng, dànshì tā chàng de hěn hǎo.',
      note:'难免会 + tính từ/động từ; vế sau dùng bổ ngữ trạng thái 唱得很好.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Người mới học lái xe, hễ ra đường là khó tránh khỏi hồi hộp.',answer:'刚学开车的人，一上路就难免会紧张。',answerPy:'Gāng xué kāichē de rén, yí shànglù jiù nánmiǎn huì jǐnzhāng.',
      note:'一 + V，就 + 难免会…… ; 一 trước thanh 4 (上) đọc yí.',pair:'一……就……'}
   ]},

  {n:23,zh:'疼爱',py:'téng\'ài',pos:'Động từ',vn:'thương yêu, yêu chiều',hv:'đông ái',em:'🥰',lesson:1,
   explain:['Thương yêu, chiều chuộng — thường là tình thương của người lớn dành cho trẻ nhỏ, bề trên dành cho bề dưới.'],
   usage:'疼爱 + 孩子 / 女儿 / 孙子; 受到……的疼爱. Bạn bè, người yêu với nhau không dùng 疼爱. 疼 vốn là "đau" — thương đến "xót".',
   collo:['疼爱孩子','疼爱自己的女儿','非常疼爱','受到疼爱'],
   ex_zh:'作为一个母亲，难免会更疼爱自己亲生的女儿。',ex_py:'Zuòwéi yí ge mǔqīn, nánmiǎn huì gèng téng\'ài zìjǐ qīnshēng de nǚ\'ér.',ex_vn:'Là một người mẹ, khó tránh khỏi việc thương con gái ruột của mình hơn.',
   exList:[
     {zh:'作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿。',py:'Zuòwéi yí ge mǔqīn, zài zìjǐ de qīnshēng nǚ\'ér hé bú shì qīnshēng de Huīgūniang zhījiān, nánmiǎn huì gèng téng\'ài zìjǐ qīnshēng de nǚ\'ér.',vn:'Là một người mẹ, giữa con gái ruột và Lọ Lem không phải con ruột, khó tránh khỏi việc thương con gái ruột hơn.'},
     {zh:'奶奶最疼爱我这个小孙女了。',py:'Nǎinai zuì téng\'ài wǒ zhège xiǎo sūnnǚ le.',vn:'Bà thương nhất đứa cháu gái nhỏ là tôi.'},
     {zh:'父母疼爱孩子，但不能什么都替孩子做。',py:'Fùmǔ téng\'ài háizi, dàn bù néng shénme dōu tì háizi zuò.',vn:'Bố mẹ thương con, nhưng không thể việc gì cũng làm thay con.'}
   ],
   colloFull:[
     {zh:'疼爱孩子',py:'téng\'ài háizi',vn:'thương con'},
     {zh:'疼爱自己的女儿',py:'téng\'ài zìjǐ de nǚ\'ér',vn:'thương con gái mình'},
     {zh:'非常疼爱',py:'fēicháng téng\'ài',vn:'rất mực yêu thương'},
     {zh:'受到疼爱',py:'shòudào téng\'ài',vn:'được yêu thương'},
     {zh:'更疼爱',py:'gèng téng\'ài',vn:'thương … hơn'}
   ],
   patterns:[
     {s:'(người lớn) + 疼爱 + (trẻ nhỏ)',m:'Yêu thương, chiều chuộng'},
     {s:'受到 + (某人的) + 疼爱',m:'Được … yêu thương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái luôn được cả nhà yêu thương.',answer:'妹妹一直被全家人疼爱着。',answerPy:'Mèimei yìzhí bèi quánjiārén téng\'àizhe.',
      note:'Câu bị động 被 + người + V + 着 (trạng thái kéo dài).',pair:'被'},
     {promptLang:'vi',prompt:'Bố tuy rất thương tôi, nhưng không bao giờ nói ra.',answer:'爸爸虽然很疼爱我，但是从来不说。',answerPy:'Bàba suīrán hěn téng\'ài wǒ, dànshì cónglái bù shuō.',
      note:'Hai vế cùng chủ ngữ → 虽然 đứng sau chủ ngữ; 从来不 = không bao giờ (thói quen).',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'平等',py:'píngděng',pos:'Tính từ',vn:'bình đẳng, công bằng',hv:'bình đẳng',em:'🟰',lesson:1,
   explain:['Ngang nhau về địa vị, quyền lợi, đãi ngộ giữa người với người.'],
   usage:'平等的 + 地位 / 待遇 / 权利 (bảng 词语搭配); 平等(地) + 对待; 人人平等, 男女平等. Phân biệt với 公平 (mục 词语辨析).',
   collo:['平等地对待','平等的权利','男女平等','人人平等'],
   ex_zh:'作为一个母亲，很难完全平等地对待她们。',ex_py:'Zuòwéi yí ge mǔqīn, hěn nán wánquán píngděng de duìdài tāmen.',ex_vn:'Là một người mẹ, rất khó đối xử với các con hoàn toàn bình đẳng.',
   exList:[
     {zh:'法律面前人人平等。',py:'Fǎlǜ miànqián rénrén píngděng.',vn:'Trước pháp luật mọi người đều bình đẳng.'},
     {zh:'现实社会中，女人与男人有时并不平等。',py:'Xiànshí shèhuì zhōng, nǚrén yǔ nánrén yǒushí bìng bù píngděng.',vn:'Trong xã hội thực tế, phụ nữ và nam giới có lúc không hề bình đẳng.'},
     {zh:'在这个班里，老师平等地对待每一个学生。',py:'Zài zhège bān li, lǎoshī píngděng de duìdài měi yí ge xuésheng.',vn:'Ở lớp này, thầy giáo đối xử bình đẳng với từng học sinh.'}
   ],
   colloFull:[
     {zh:'平等地对待',py:'píngděng de duìdài',vn:'đối xử bình đẳng'},
     {zh:'平等的权利',py:'píngděng de quánlì',vn:'quyền lợi bình đẳng'},
     {zh:'男女平等',py:'nánnǚ píngděng',vn:'nam nữ bình đẳng'},
     {zh:'人人平等',py:'rénrén píngděng',vn:'mọi người bình đẳng'},
     {zh:'平等的地位',py:'píngděng de dìwèi',vn:'địa vị bình đẳng'}
   ],
   patterns:[
     {s:'平等的 + 地位 / 待遇 / 权利',m:'Địa vị / đãi ngộ / quyền lợi bình đẳng (bảng 词语搭配)'},
     {s:'平等(地) + 对待',m:'Đối xử bình đẳng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù ở trường hay ở nhà, con trai con gái đều nên được đối xử bình đẳng.',answer:'不管在学校还是在家里，男孩儿女孩儿都应该被平等地对待。',answerPy:'Bùguǎn zài xuéxiào háishi zài jiā li, nánháir nǚháir dōu yīnggāi bèi píngděng de duìdài.',
      note:'Bị động: 被 + 平等地 + 对待; 不管……都…… (ôn HSK 4).',pair:'被'},
     {promptLang:'vi',prompt:'Bây giờ nam nữ ngày càng bình đẳng.',answer:'现在男女越来越平等了。',answerPy:'Xiànzài nánnǚ yuè lái yuè píngděng le.',
      note:'越来越 + tính từ + 了.',pair:'越来越……'}
   ]},

  {n:25,zh:'自私',py:'zìsī',pos:'Tính từ',vn:'ích kỷ',hv:'tự tư',em:'🙈',lesson:1,
   explain:['Chỉ nghĩ đến lợi ích của bản thân, không nghĩ cho người khác.'],
   usage:'自私的 + 人 / 想法 / 行为 (bảng 词语搭配); vị ngữ: 他太自私了. Thành ngữ: 自私自利 (ích kỷ vụ lợi).',
   collo:['自私的人','自私的想法','自私的行为','太自私了'],
   ex_zh:'可能你觉得继母很自私，但这种行为有自然倾向的理由。',ex_py:'Kěnéng nǐ juéde jìmǔ hěn zìsī, dàn zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu.',ex_vn:'Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này có lý do từ khuynh hướng tự nhiên.',
   exList:[
     {zh:'可能你觉得继母很自私，但这种行为有自然倾向的理由。',py:'Kěnéng nǐ juéde jìmǔ hěn zìsī, dàn zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu.',vn:'Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này có lý do từ khuynh hướng tự nhiên.'},
     {zh:'人都是有感情甚至自私的，很难做到任何时候都很客观。',py:'Rén dōu shì yǒu gǎnqíng shènzhì zìsī de, hěn nán zuòdào rènhé shíhou dōu hěn kèguān.',vn:'Con người ai cũng có tình cảm, thậm chí ích kỷ, rất khó lúc nào cũng khách quan.'},
     {zh:'只想着自己的人太自私了，没有人愿意跟他交朋友。',py:'Zhǐ xiǎngzhe zìjǐ de rén tài zìsī le, méiyǒu rén yuànyì gēn tā jiāo péngyou.',vn:'Người chỉ nghĩ đến bản thân thì quá ích kỷ, chẳng ai muốn kết bạn.'}
   ],
   colloFull:[
     {zh:'自私的人',py:'zìsī de rén',vn:'người ích kỷ'},
     {zh:'自私的想法',py:'zìsī de xiǎngfǎ',vn:'suy nghĩ ích kỷ'},
     {zh:'自私的行为',py:'zìsī de xíngwéi',vn:'hành vi ích kỷ'},
     {zh:'太自私了',py:'tài zìsī le',vn:'ích kỷ quá'},
     {zh:'自私自利',py:'zìsī zìlì',vn:'ích kỷ vụ lợi'}
   ],
   patterns:[
     {s:'自私的 + 人 / 想法 / 行为',m:'… ích kỷ (bảng 词语搭配)'},
     {s:'(太 / 很) + 自私',m:'Ích kỷ quá / rất ích kỷ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta ích kỷ đến mức ngay cả một cái bút cũng không cho bạn mượn.',answer:'他自私得连一支笔都不借给同学。',answerPy:'Tā zìsī de lián yì zhī bǐ dōu bú jiè gěi tóngxué.',
      note:'Tính từ + 得 + 连……都…… (đến mức ngay cả … cũng …).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Hành vi ích kỷ của anh ta bị mọi người phê bình.',answer:'他自私的行为被大家批评了。',answerPy:'Tā zìsī de xíngwéi bèi dàjiā pīpíng le.',
      note:'自私的行为 (bảng 词语搭配) làm chủ ngữ câu bị động.',pair:'被'}
   ]},

  {n:26,zh:'倾向',py:'qīngxiàng',pos:'Động từ / Danh từ',vn:'nghiêng về; khuynh hướng',hv:'khuynh hướng',em:'🧭',lesson:1,
   explain:['Động từ: nghiêng về, thiên về một phía (ý kiến, lựa chọn).','Danh từ: khuynh hướng, xu hướng phát triển.'],
   usage:'Động từ: (更) 倾向于 + N / V (我倾向于第二个方案). Danh từ: 有……的倾向; 自然倾向 = khuynh hướng tự nhiên (trong bài).',
   collo:['倾向于','自然倾向','有……的倾向','一种倾向'],
   ex_zh:'可能你觉得继母很自私，但这种行为有自然倾向的理由。',ex_py:'Kěnéng nǐ juéde jìmǔ hěn zìsī, dàn zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu.',ex_vn:'Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này có lý do từ khuynh hướng tự nhiên.',
   exList:[
     {zh:'这种行为有自然倾向的理由，与道德没有必然的关系。',py:'Zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu, yǔ dàodé méiyǒu bìrán de guānxi.',vn:'Hành vi này có lý do từ khuynh hướng tự nhiên, không có quan hệ tất yếu với đạo đức.'},
     {zh:'两个方案我更倾向于第一个。',py:'Liǎng ge fāng\'àn wǒ gèng qīngxiàng yú dì-yī ge.',vn:'Trong hai phương án, tôi nghiêng về phương án thứ nhất hơn.'},
     {zh:'最近他有点儿不想上学的倾向，父母很着急。',py:'Zuìjìn tā yǒudiǎnr bù xiǎng shàngxué de qīngxiàng, fùmǔ hěn zháojí.',vn:'Gần đây cậu ấy có dấu hiệu không muốn đi học, bố mẹ rất sốt ruột.'}
   ],
   colloFull:[
     {zh:'倾向于',py:'qīngxiàng yú',vn:'nghiêng về'},
     {zh:'自然倾向',py:'zìrán qīngxiàng',vn:'khuynh hướng tự nhiên'},
     {zh:'有……的倾向',py:'yǒu… de qīngxiàng',vn:'có khuynh hướng …'},
     {zh:'一种倾向',py:'yì zhǒng qīngxiàng',vn:'một khuynh hướng'},
     {zh:'更倾向于',py:'gèng qīngxiàng yú',vn:'nghiêng về … hơn'}
   ],
   patterns:[
     {s:'(更) 倾向于 + N / V',m:'Nghiêng về … (hơn)'},
     {s:'有 + … + 的倾向',m:'Có khuynh hướng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy bố mẹ muốn tôi học y, nhưng tôi nghiêng về học văn học hơn.',answer:'虽然父母想让我学医，但是我更倾向于学文学。',answerPy:'Suīrán fùmǔ xiǎng ràng wǒ xué yī, dànshì wǒ gèng qīngxiàng yú xué wénxué.',
      note:'更倾向于 + động từ; hai vế khác chủ ngữ → 虽然 đứng đầu câu.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Học sinh ngày càng có xu hướng đọc sách trên điện thoại.',answer:'学生们越来越倾向于在手机上看书了。',answerPy:'Xuéshengmen yuè lái yuè qīngxiàng yú zài shǒujī shang kàn shū le.',
      note:'越来越 + 倾向于 + V.',pair:'越来越……'}
   ]},

  {n:27,zh:'理由',py:'lǐyóu',pos:'Danh từ',vn:'lý do',hv:'lý do',em:'📋',lesson:1,
   explain:['Lý lẽ con người đưa ra để giải thích, biện minh cho việc làm hay quan điểm của mình.'],
   usage:'有理由 / 没有理由 + V; 找理由; 一个好的理由; 理由充分. Khác 原因: 原因 là nguyên nhân khách quan dẫn tới kết quả (xem mục 词语辨析).',
   collo:['一个好的理由','找理由','有理由','理由充分'],
   ex_zh:'希望你能给我一个好的理由，解释清楚你为什么这么做。',ex_py:'Xīwàng nǐ néng gěi wǒ yí ge hǎo de lǐyóu, jiěshì qīngchu nǐ wèi shénme zhème zuò.',ex_vn:'Mong bạn cho tôi một lý do thoả đáng, giải thích rõ vì sao bạn làm vậy.',
   exList:[
     {zh:'希望你能给我一个好的理由，解释清楚你为什么这么做。',py:'Xīwàng nǐ néng gěi wǒ yí ge hǎo de lǐyóu, jiěshì qīngchu nǐ wèi shénme zhème zuò.',vn:'Mong bạn cho tôi một lý do thoả đáng, giải thích rõ vì sao bạn làm vậy.'},
     {zh:'这种行为有自然倾向的理由。',py:'Zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu.',vn:'Hành vi này có lý do từ khuynh hướng tự nhiên.'},
     {zh:'他是你最好的朋友，你没有理由不相信他。',py:'Tā shì nǐ zuì hǎo de péngyou, nǐ méiyǒu lǐyóu bù xiāngxìn tā.',vn:'Cậu ấy là bạn thân nhất của cậu, cậu không có lý do gì để không tin cậu ấy.'}
   ],
   colloFull:[
     {zh:'一个好的理由',py:'yí ge hǎo de lǐyóu',vn:'một lý do thoả đáng'},
     {zh:'找理由',py:'zhǎo lǐyóu',vn:'tìm lý do'},
     {zh:'有理由',py:'yǒu lǐyóu',vn:'có lý do'},
     {zh:'理由充分',py:'lǐyóu chōngfèn',vn:'lý do đầy đủ'},
     {zh:'没有理由',py:'méiyǒu lǐyóu',vn:'không có lý do'}
   ],
   patterns:[
     {s:'有 / 没有 + 理由 + V',m:'Có / không có lý do để …'},
     {s:'给 + 某人 + 一个 + 理由',m:'Đưa cho ai một lý do'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lý do xin nghỉ của cậu ấy đã bị thầy giáo từ chối.',answer:'他请假的理由被老师拒绝了。',answerPy:'Tā qǐngjià de lǐyóu bèi lǎoshī jùjué le.',
      note:'Chủ ngữ 理由 + 被 + người + V + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần lý do đầy đủ, bố mẹ sẽ đồng ý.',answer:'只要理由充分，父母就会同意。',answerPy:'Zhǐyào lǐyóu chōngfèn, fùmǔ jiù huì tóngyì.',
      note:'理由充分 = lý do đầy đủ; 就 đứng sau chủ ngữ vế sau.',pair:'只要……就……'}
   ]},

  {n:28,zh:'道德',py:'dàodé',pos:'Danh từ',vn:'đạo đức',hv:'đạo đức',em:'🕊️',lesson:1,
   explain:['Chuẩn mực hành vi được xã hội thừa nhận, dùng để phân biệt tốt – xấu, đúng – sai.'],
   usage:'讲道德 / 有道德 / 道德标准 / 道德问题; 不道德 dùng như tính từ: 不道德的行为. 与 / 跟 + 道德 + 有关 / 没有关系.',
   collo:['与道德没有关系','讲道德','不道德','道德标准'],
   ex_zh:'这种行为有自然倾向的理由，与道德没有必然的关系。',ex_py:'Zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu, yǔ dàodé méiyǒu bìrán de guānxi.',ex_vn:'Hành vi này có lý do từ khuynh hướng tự nhiên, không có quan hệ tất yếu với đạo đức.',
   exList:[
     {zh:'这种行为有自然倾向的理由，与道德没有必然的关系。',py:'Zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu, yǔ dàodé méiyǒu bìrán de guānxi.',vn:'Hành vi này có lý do từ khuynh hướng tự nhiên, không có quan hệ tất yếu với đạo đức.'},
     {zh:'在公共汽车上不给老人让座，有些人认为是不道德的。',py:'Zài gōnggòng qìchē shang bù gěi lǎorén ràngzuò, yǒuxiē rén rènwéi shì bú dàodé de.',vn:'Trên xe buýt không nhường ghế cho người già, có người cho rằng như vậy là thiếu đạo đức.'},
     {zh:'学校不仅要教知识，也要教学生讲道德。',py:'Xuéxiào bùjǐn yào jiāo zhīshi, yě yào jiāo xuésheng jiǎng dàodé.',vn:'Nhà trường không chỉ dạy kiến thức mà còn phải dạy học sinh sống có đạo đức.'}
   ],
   colloFull:[
     {zh:'与道德没有关系',py:'yǔ dàodé méiyǒu guānxi',vn:'không liên quan đến đạo đức'},
     {zh:'讲道德',py:'jiǎng dàodé',vn:'sống có đạo đức'},
     {zh:'不道德',py:'bú dàodé',vn:'thiếu đạo đức'},
     {zh:'道德标准',py:'dàodé biāozhǔn',vn:'chuẩn mực đạo đức'},
     {zh:'道德问题',py:'dàodé wèntí',vn:'vấn đề đạo đức'}
   ],
   patterns:[
     {s:'讲 / 有 + 道德',m:'Sống có đạo đức'},
     {s:'与 / 跟 + 道德 + 有关 / 没有关系',m:'Liên quan / không liên quan đến đạo đức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc không những phải có năng lực mà còn phải có đạo đức.',answer:'做事不仅要有能力，也要讲道德。',answerPy:'Zuòshì bùjǐn yào yǒu nénglì, yě yào jiǎng dàodé.',
      note:'讲道德 = sống/làm việc có đạo đức.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ngay cả trẻ con cũng biết nói dối là thiếu đạo đức.',answer:'连小孩子都知道说谎是不道德的。',answerPy:'Lián xiǎo háizi dōu zhīdào shuōhuǎng shì bú dàodé de.',
      note:'不道德 đọc bú dàodé (不 trước thanh 4).',pair:'连……都……'}
   ]},

  {n:29,zh:'自从',py:'zìcóng',pos:'Giới từ',vn:'từ khi, từ lúc',hv:'tự tòng',em:'🕰️',lesson:1,
   explain:['Chỉ thời gian bắt đầu từ một thời điểm trong QUÁ KHỨ (điểm ngữ pháp 3 của bài).'],
   usage:'自从 + sự việc / thời điểm quá khứ + (以后 / 之后 / 后)，(S) 就 / 一直 / 再也没……. Chỉ dùng cho quá khứ; nói tương lai dùng 从: 从明天开始.',
   collo:['自从……以后','自从……之后','自从……就……','自从那时起'],
   ex_zh:'自从我听说了这件事，就开始思考应该如何阅读。',ex_py:'Zìcóng wǒ tīngshuōle zhè jiàn shì, jiù kāishǐ sīkǎo yīnggāi rúhé yuèdú.',ex_vn:'Từ khi nghe chuyện này, tôi bắt đầu suy nghĩ nên đọc sách như thế nào.',
   exList:[
     {zh:'自从我听说了这件事，就开始思考应该如何阅读，除了阅读还应该做什么。',py:'Zìcóng wǒ tīngshuōle zhè jiàn shì, jiù kāishǐ sīkǎo yīnggāi rúhé yuèdú, chúle yuèdú hái yīnggāi zuò shénme.',vn:'Từ khi nghe chuyện này, tôi bắt đầu suy nghĩ nên đọc thế nào, ngoài đọc ra còn nên làm gì.'},
     {zh:'自从城市出现后，它就成为人类生活的中心。',py:'Zìcóng chéngshì chūxiàn hòu, tā jiù chéngwéi rénlèi shēnghuó de zhōngxīn.',vn:'Từ khi thành phố xuất hiện, nó đã trở thành trung tâm của đời sống loài người.'},
     {zh:'自从有了长大后成为作家这个理想之后，他每天都坚持写作。',py:'Zìcóng yǒule zhǎngdà hòu chéngwéi zuòjiā zhège lǐxiǎng zhīhòu, tā měi tiān dōu jiānchí xiězuò.',vn:'Từ khi có ước mơ lớn lên làm nhà văn, ngày nào cậu ấy cũng kiên trì viết.'}
   ],
   colloFull:[
     {zh:'自从……以后',py:'zìcóng… yǐhòu',vn:'từ khi … trở đi'},
     {zh:'自从……之后',py:'zìcóng… zhīhòu',vn:'từ sau khi …'},
     {zh:'自从……就……',py:'zìcóng… jiù…',vn:'từ khi … thì …'},
     {zh:'自从那时起',py:'zìcóng nà shí qǐ',vn:'kể từ đó'},
     {zh:'自从上了高中',py:'zìcóng shàngle gāozhōng',vn:'từ khi lên cấp ba'}
   ],
   patterns:[
     {s:'自从 + sự việc quá khứ + (以后 / 之后)，S + 就 / 一直 / 再也没……',m:'Từ khi … thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi lên cấp ba, tôi chưa từng về quê thăm ông bà.',answer:'自从上了高中，我就从来没回老家看过爷爷奶奶。',answerPy:'Zìcóng shàngle gāozhōng, wǒ jiù cónglái méi huí lǎojiā kànguo yéye nǎinai.',
      note:'自从 + V了 + …; 过 gắn vào động từ sau (看过).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Từ khi dùng phương pháp mới, thành tích của tôi ngày càng tốt.',answer:'自从用了新方法，我的成绩越来越好了。',answerPy:'Zìcóng yòngle xīn fāngfǎ, wǒ de chéngjì yuè lái yuè hǎo le.',
      note:'自从 + sự việc quá khứ; vế sau nêu thay đổi kéo dài đến nay.',pair:'越来越……'}
   ]},

  {n:30,zh:'童话',py:'tónghuà',pos:'Danh từ',vn:'truyện cổ tích, đồng thoại',hv:'đồng thoại',em:'🧚',lesson:1,
   explain:['Truyện viết cho trẻ em, giàu tưởng tượng; nhân vật thường là vua chúa, tiên, con vật biết nói…'],
   usage:'讲童话 / 童话故事 / 童话世界; lượng từ 个 / 篇. 像童话一样 = đẹp như cổ tích.',
   collo:['讲童话','童话故事','童话世界','一篇童话'],
   ex_zh:'你看这个老师在讲童话的时候，已经在有意识地把这种情感影响给了孩子们。',ex_py:'Nǐ kàn zhège lǎoshī zài jiǎng tónghuà de shíhou, yǐjīng zài yǒu yìshí de bǎ zhè zhǒng qínggǎn yǐngxiǎng gěile háizimen.',ex_vn:'Bạn xem, khi kể chuyện cổ tích, người giáo viên này đã có ý thức trao sự ảnh hưởng về tình cảm ấy cho các em.',
   exList:[
     {zh:'你看这个老师在讲童话的时候，已经在有意识地把这种情感影响，甚至把人性的价值判断，都给了孩子们。',py:'Nǐ kàn zhège lǎoshī zài jiǎng tónghuà de shíhou, yǐjīng zài yǒu yìshí de bǎ zhè zhǒng qínggǎn yǐngxiǎng, shènzhì bǎ rénxìng de jiàzhí pànduàn, dōu gěile háizimen.',vn:'Bạn xem, khi kể chuyện cổ tích, người giáo viên này đã có ý thức trao cho các em sự ảnh hưởng về tình cảm, thậm chí cả cách đánh giá giá trị về bản tính con người.'},
     {zh:'《灰姑娘》是众所周知的童话。',py:'《Huīgūniang》 shì zhòngsuǒzhōuzhī de tónghuà.',vn:'"Cô bé Lọ Lem" là truyện cổ tích ai cũng biết.'},
     {zh:'小时候，妈妈每天晚上都给我讲一个童话故事。',py:'Xiǎo shíhou, māma měi tiān wǎnshang dōu gěi wǒ jiǎng yí ge tónghuà gùshi.',vn:'Hồi nhỏ, tối nào mẹ cũng kể cho tôi một câu chuyện cổ tích.'}
   ],
   colloFull:[
     {zh:'讲童话',py:'jiǎng tónghuà',vn:'kể chuyện cổ tích'},
     {zh:'童话故事',py:'tónghuà gùshi',vn:'câu chuyện cổ tích'},
     {zh:'童话世界',py:'tónghuà shìjiè',vn:'thế giới cổ tích'},
     {zh:'一篇童话',py:'yì piān tónghuà',vn:'một truyện cổ tích'},
     {zh:'安徒生童话',py:'Āntúshēng tónghuà',vn:'truyện cổ tích Andersen'}
   ],
   patterns:[
     {s:'给 + 某人 + 讲 + 童话(故事)',m:'Kể chuyện cổ tích cho ai'},
     {s:'像童话一样 + tính từ',m:'… như trong truyện cổ tích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Truyện cổ tích "Cô bé bán diêm" là do Andersen viết.',answer:'《卖火柴的小女孩儿》这个童话是安徒生写的。',answerPy:'《Mài Huǒchái de Xiǎo Nǚháir》 zhège tónghuà shì Āntúshēng xiě de.',
      note:'是……的 nhấn mạnh người viết (việc đã xảy ra).',pair:'是……的'},
     {promptLang:'vi',prompt:'Mẹ vừa kể chuyện cổ tích là em gái ngủ ngay.',answer:'妈妈一讲童话，妹妹就睡着了。',answerPy:'Māma yì jiǎng tónghuà, mèimei jiù shuìzháo le.',
      note:'Hai vế khác chủ ngữ: S1 + 一 + V1，S2 + 就 + V2. 一 trước thanh 3 đọc yì.',pair:'一……就……'}
   ]},

  {n:31,zh:'价值',py:'jiàzhí',pos:'Danh từ',vn:'giá trị',hv:'giá trị',em:'💰',lesson:1,
   explain:['Tác dụng, ý nghĩa tích cực của sự vật; cũng chỉ giá trị kinh tế.'],
   usage:'(很) 有价值 / 没有价值; 有价值的 + 建议 / 书; 价值判断 (trong bài), 价值观 (hệ giá trị). Không nói 很价值 — phải có 有.',
   collo:['很有价值','价值判断','价值观','有价值的建议'],
   ex_zh:'你的这个建议很有价值，我马上告诉总裁。',ex_py:'Nǐ de zhège jiànyì hěn yǒu jiàzhí, wǒ mǎshàng gàosu zǒngcái.',ex_vn:'Đề xuất này của anh rất có giá trị, tôi sẽ báo ngay với tổng giám đốc.',
   exList:[
     {zh:'你的这个建议很有价值，我马上告诉总裁。',py:'Nǐ de zhège jiànyì hěn yǒu jiàzhí, wǒ mǎshàng gàosu zǒngcái.',vn:'Đề xuất này của anh rất có giá trị, tôi sẽ báo ngay với tổng giám đốc.'},
     {zh:'他为公司提供了很多有价值的建议。',py:'Tā wèi gōngsī tígōngle hěn duō yǒu jiàzhí de jiànyì.',vn:'Anh ấy đã đưa ra cho công ty nhiều đề xuất có giá trị.'},
     {zh:'这本旧书虽然不值钱，但对我来说很有价值。',py:'Zhè běn jiù shū suīrán bù zhíqián, dàn duì wǒ lái shuō hěn yǒu jiàzhí.',vn:'Cuốn sách cũ này tuy không đáng tiền nhưng với tôi rất có giá trị.'}
   ],
   colloFull:[
     {zh:'很有价值',py:'hěn yǒu jiàzhí',vn:'rất có giá trị'},
     {zh:'价值判断',py:'jiàzhí pànduàn',vn:'phán đoán giá trị'},
     {zh:'价值观',py:'jiàzhíguān',vn:'hệ giá trị, giá trị quan'},
     {zh:'有价值的建议',py:'yǒu jiàzhí de jiànyì',vn:'đề xuất có giá trị'},
     {zh:'没有价值',py:'méiyǒu jiàzhí',vn:'không có giá trị'}
   ],
   patterns:[
     {s:'(很) 有价值 / 没有价值',m:'(Rất) có giá trị / không có giá trị'},
     {s:'有价值的 + N',m:'… có giá trị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ý kiến của cậu ấy bị cho là không có giá trị.',answer:'他的意见被认为没有价值。',answerPy:'Tā de yìjiàn bèi rènwéi méiyǒu jiàzhí.',
      note:'被认为 + nhận định = bị cho là ….',pair:'被'},
     {promptLang:'vi',prompt:'Chiếc đồng hồ này tuy rất cũ nhưng đối với ông tôi rất có giá trị.',answer:'这块手表虽然很旧，但是对我爷爷来说很有价值。',answerPy:'Zhè kuài shǒubiǎo suīrán hěn jiù, dànshì duì wǒ yéye lái shuō hěn yǒu jiàzhí.',
      note:'很有价值 (không nói 很价值); 对……来说 = đối với ….',pair:'虽然……但是……'}
   ]},

  {n:32,zh:'单纯',py:'dānchún',pos:'Tính từ',vn:'đơn thuần, đơn giản; chỉ',hv:'đơn thuần',em:'🌱',lesson:1,
   explain:['Đơn giản, trong sáng, không phức tạp (người, suy nghĩ).','Làm trạng ngữ: đơn thuần, chỉ (单纯地 + V).'],
   usage:'很单纯 / 单纯的孩子 / 想法单纯; (只是) 单纯(地) + V: 单纯地主张阅读 (trong bài). Đừng nhầm với 单调 (đơn điệu, tẻ nhạt).',
   collo:['很单纯','单纯的孩子','单纯地主张','想法单纯'],
   ex_zh:'如果只是单纯地主张阅读而不强调思考，那是片面的。',ex_py:'Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.',ex_vn:'Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ thì đó là phiến diện.',
   exList:[
     {zh:'如果只是单纯地主张阅读而不强调思考，那是片面的。',py:'Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.',vn:'Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ thì đó là phiến diện.'},
     {zh:'他太单纯了，这样很容易被人骗。',py:'Tā tài dānchún le, zhèyàng hěn róngyì bèi rén piàn.',vn:'Cậu ấy quá đơn thuần, như vậy rất dễ bị người ta lừa.'},
     {zh:'孩子们的想法都很单纯。',py:'Háizimen de xiǎngfǎ dōu hěn dānchún.',vn:'Suy nghĩ của trẻ con đều rất đơn giản.'}
   ],
   colloFull:[
     {zh:'很单纯',py:'hěn dānchún',vn:'rất đơn thuần'},
     {zh:'单纯的孩子',py:'dānchún de háizi',vn:'đứa trẻ ngây thơ'},
     {zh:'单纯地主张',py:'dānchún de zhǔzhāng',vn:'chỉ đơn thuần cổ xuý'},
     {zh:'想法单纯',py:'xiǎngfǎ dānchún',vn:'suy nghĩ đơn giản'},
     {zh:'单纯地追求',py:'dānchún de zhuīqiú',vn:'chỉ chạy theo'}
   ],
   patterns:[
     {s:'(太 / 很) + 单纯',m:'(Quá / rất) đơn thuần'},
     {s:'(只是) 单纯(地) + V',m:'Chỉ đơn thuần …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy đơn thuần quá, bị người ta lừa rồi.',answer:'她太单纯了，被人骗了。',answerPy:'Tā tài dānchún le, bèi rén piàn le.',
      note:'太 + tính từ + 了; bị động 被 + 人 + 骗.',pair:'被'},
     {promptLang:'vi',prompt:'Lớn lên rồi, suy nghĩ của chúng ta ngày càng không còn đơn giản.',answer:'长大以后，我们的想法越来越不单纯了。',answerPy:'Zhǎngdà yǐhòu, wǒmen de xiǎngfǎ yuè lái yuè bù dānchún le.',
      note:'越来越 + 不 + tính từ.',pair:'越来越……'}
   ]},

  {n:33,zh:'主张',py:'zhǔzhāng',pos:'Động từ / Danh từ',vn:'cho là, tán thành; chủ trương',hv:'chủ trương',em:'🗣️',lesson:1,
   explain:['Động từ: đề xuất, cho là nên làm theo một cách nào đó.','Danh từ: ý kiến, chủ trương của mình.'],
   usage:'Động từ: 主张 + V / mệnh đề (他主张将会议地点改在上海). Danh từ: 有 / 坚持 + 主张 (bảng 词语搭配); 有自己的主张 = có chính kiến.',
   collo:['有主张','坚持主张','主张阅读','有自己的主张'],
   ex_zh:'他主张将会议地点改在上海，因为这次的合作伙伴对我们来说非常重要。',ex_py:'Tā zhǔzhāng jiāng huìyì dìdiǎn gǎi zài Shànghǎi, yīnwèi zhè cì de hézuò huǒbàn duì wǒmen lái shuō fēicháng zhòngyào.',ex_vn:'Anh ấy chủ trương đổi địa điểm hội nghị sang Thượng Hải, vì đối tác lần này rất quan trọng với chúng ta.',
   exList:[
     {zh:'他主张将会议地点改在上海，因为这次的合作伙伴对我们来说非常重要。',py:'Tā zhǔzhāng jiāng huìyì dìdiǎn gǎi zài Shànghǎi, yīnwèi zhè cì de hézuò huǒbàn duì wǒmen lái shuō fēicháng zhòngyào.',vn:'Anh ấy chủ trương đổi địa điểm hội nghị sang Thượng Hải, vì đối tác lần này rất quan trọng với chúng ta.'},
     {zh:'孩子大了，有自己的主张了，我有什么办法？',py:'Háizi dà le, yǒu zìjǐ de zhǔzhāng le, wǒ yǒu shénme bànfǎ?',vn:'Con lớn rồi, có chính kiến riêng rồi, tôi làm gì được chứ?'},
     {zh:'很多老师主张学生每天读半小时课外书。',py:'Hěn duō lǎoshī zhǔzhāng xuésheng měi tiān dú bàn xiǎoshí kèwài shū.',vn:'Nhiều thầy cô chủ trương học sinh mỗi ngày đọc nửa tiếng sách ngoại khoá.'}
   ],
   colloFull:[
     {zh:'有主张',py:'yǒu zhǔzhāng',vn:'có chủ kiến'},
     {zh:'坚持主张',py:'jiānchí zhǔzhāng',vn:'giữ vững chủ trương'},
     {zh:'主张阅读',py:'zhǔzhāng yuèdú',vn:'cổ xuý việc đọc'},
     {zh:'有自己的主张',py:'yǒu zìjǐ de zhǔzhāng',vn:'có chính kiến riêng'},
     {zh:'我的主张',py:'wǒ de zhǔzhāng',vn:'chủ trương của tôi'}
   ],
   patterns:[
     {s:'主张 + V / mệnh đề',m:'Chủ trương, cho là nên …'},
     {s:'有 / 坚持 + (自己的) + 主张',m:'Có / giữ vững chủ kiến (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy mọi người đều phản đối, nhưng cậu ấy vẫn giữ vững chủ trương của mình.',answer:'虽然大家都反对，但是他还是坚持自己的主张。',answerPy:'Suīrán dàjiā dōu fǎnduì, dànshì tā háishi jiānchí zìjǐ de zhǔzhāng.',
      note:'坚持 + 主张 (bảng 词语搭配); 还是 = vẫn.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chủ trương của cô ấy đã được lãnh đạo chấp nhận.',answer:'她的主张被领导接受了。',answerPy:'Tā de zhǔzhāng bèi lǐngdǎo jiēshòu le.',
      note:'主张 dùng như danh từ làm chủ ngữ câu bị động.',pair:'被'}
   ]},

  {n:34,zh:'知感',py:'zhīgǎn',pos:'Danh từ',vn:'tri giác',hv:'tri cảm',em:'👂',lesson:1,
   explain:['Theo cách giải thích của tác giả: phần hiểu biết có được do người khác nói cho, bảo mình ghi nhớ (知识 = 知 "知感" + 识 "认识").'],
   usage:'Từ dùng riêng trong bài, ít gặp trong đời sống; chỉ cần hiểu khi đọc. Đi cùng 认识, 思考 để phân biệt "biết" và "hiểu".',
   collo:['所谓知感','知感和认识','“知”就是知感'],
   ex_zh:'“知”就是知感，“识”就是认识。',ex_py:'“Zhī” jiù shì zhīgǎn, “shí” jiù shì rènshi.',ex_vn:'"Tri" chính là tri giác, "thức" chính là nhận thức.',
   exList:[
     {zh:'“知识”两个字我始终认为它是要分开来谈的，“知”就是知感，“识”就是认识。',py:'“Zhīshi” liǎng ge zì wǒ shǐzhōng rènwéi tā shì yào fēnkāi lái tán de, “zhī” jiù shì zhīgǎn, “shí” jiù shì rènshi.',vn:'Hai chữ "tri thức" tôi luôn cho rằng phải tách ra mà bàn: "tri" là tri giác, "thức" là nhận thức.'},
     {zh:'所谓“知感”就是别人告诉你、说给你听、要求你记住的那一部分。',py:'Suǒwèi “zhīgǎn” jiù shì biérén gàosu nǐ, shuō gěi nǐ tīng, yāoqiú nǐ jìzhu de nà yí bùfen.',vn:'Cái gọi là "tri giác" chính là phần người khác bảo bạn, nói cho bạn nghe, yêu cầu bạn ghi nhớ.'},
     {zh:'只有知感是不够的，还要有认识、思考。',py:'Zhǐyǒu zhīgǎn shì bú gòu de, hái yào yǒu rènshi, sīkǎo.',vn:'Chỉ có tri giác thì chưa đủ, còn phải có nhận thức, suy nghĩ.'}
   ],
   colloFull:[
     {zh:'所谓知感',py:'suǒwèi zhīgǎn',vn:'cái gọi là tri giác'},
     {zh:'知感和认识',py:'zhīgǎn hé rènshi',vn:'tri giác và nhận thức'},
     {zh:'“知”就是知感',py:'“zhī” jiù shì zhīgǎn',vn:'"tri" chính là tri giác'},
     {zh:'只有知感',py:'zhǐyǒu zhīgǎn',vn:'chỉ có tri giác'}
   ],
   patterns:[
     {s:'所谓 + 知感 + 就是……',m:'Cái gọi là tri giác chính là …'},
     {s:'知感 + 和 + 认识',m:'Tri giác và nhận thức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'"Tri giác" là gì đã được thầy giáo giải thích rất rõ.',answer:'什么是知感，已经被老师解释得很清楚了。',answerPy:'Shénme shì zhīgǎn, yǐjīng bèi lǎoshī jiěshì de hěn qīngchu le.',
      note:'被 + người + V + 得 + bổ ngữ trạng thái.',pair:'被'},
     {promptLang:'vi',prompt:'Không những phải có tri giác mà còn phải có nhận thức và suy nghĩ.',answer:'不仅要有知感，也要有认识和思考。',answerPy:'Bùjǐn yào yǒu zhīgǎn, yě yào yǒu rènshi hé sīkǎo.',
      note:'Ý chính của đoạn cuối bài khoá.',pair:'不仅……也……'}
   ]},

  // ── 专有名词 (tên riêng) — sách liệt kê riêng ──
  {n:35,zh:'卖火柴的小女孩儿',py:'Mài Huǒchái de Xiǎo Nǚháir',pos:'Danh từ riêng',vn:'"Cô bé bán diêm" (truyện cổ tích của Andersen)',hv:'Mại hoả sài đích tiểu nữ hài nhi',em:'🕯️',lesson:1,
   explain:['Truyện cổ tích nổi tiếng của nhà văn Đan Mạch Andersen (安徒生): cô bé nghèo đi bán diêm trong đêm giao thừa giá rét.'],
   usage:'Tên tác phẩm đặt trong dấu 《》: 《卖火柴的小女孩儿》. 儿 đọc uốn lưỡi: nǚháir.',
   collo:['《卖火柴的小女孩儿》','安徒生童话','讨论《卖火柴的小女孩儿》'],
   ex_zh:'比如，他们讨论过《卖火柴的小女孩儿》是写给谁看的。',ex_py:'Bǐrú, tāmen tǎolùnguo 《Mài Huǒchái de Xiǎo Nǚháir》 shì xiě gěi shéi kàn de.',ex_vn:'Ví dụ, họ từng thảo luận truyện "Cô bé bán diêm" được viết cho ai đọc.',
   exList:[
     {zh:'比如，他们讨论过《卖火柴的小女孩儿》是写给谁看的，还讨论过灰姑娘的故事。',py:'Bǐrú, tāmen tǎolùnguo 《Mài Huǒchái de Xiǎo Nǚháir》 shì xiě gěi shéi kàn de, hái tǎolùnguo Huīgūniang de gùshi.',vn:'Ví dụ, họ từng thảo luận truyện "Cô bé bán diêm" được viết cho ai đọc, còn thảo luận cả câu chuyện Lọ Lem.'},
     {zh:'《卖火柴的小女孩儿》是安徒生写的童话。',py:'《Mài Huǒchái de Xiǎo Nǚháir》 shì Āntúshēng xiě de tónghuà.',vn:'"Cô bé bán diêm" là truyện cổ tích do Andersen viết.'}
   ],
   colloFull:[
     {zh:'《卖火柴的小女孩儿》',py:'《Mài Huǒchái de Xiǎo Nǚháir》',vn:'"Cô bé bán diêm"'},
     {zh:'安徒生童话',py:'Āntúshēng tónghuà',vn:'truyện cổ tích Andersen'},
     {zh:'讨论《卖火柴的小女孩儿》',py:'tǎolùn 《Mài Huǒchái de Xiǎo Nǚháir》',vn:'thảo luận truyện "Cô bé bán diêm"'}
   ],
   patterns:[
     {s:'《……》是 + 某人 + 写的童话',m:'"…" là truyện cổ tích do … viết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đọc "Cô bé bán diêm" hồi học tiểu học.',answer:'我是上小学的时候读《卖火柴的小女孩儿》的。',answerPy:'Wǒ shì shàng xiǎoxué de shíhou dú 《Mài Huǒchái de Xiǎo Nǚháir》 de.',
      note:'是……的 nhấn mạnh thời gian của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Mỗi lần đọc "Cô bé bán diêm", ngay cả bố tôi cũng thấy buồn.',answer:'每次读《卖火柴的小女孩儿》，连我爸爸都觉得难过。',answerPy:'Měi cì dú 《Mài Huǒchái de Xiǎo Nǚháir》, lián wǒ bàba dōu juéde nánguò.',
      note:'连 + người khó xúc động nhất + 都 ….',pair:'连……都……'}
   ]},

  {n:36,zh:'灰姑娘',py:'Huīgūniang',pos:'Danh từ riêng',vn:'Cô bé Lọ Lem',hv:'Hôi cô nương',em:'👠',lesson:1,
   explain:['Nhân vật chính trong truyện cổ tích cùng tên: cô gái bị mẹ kế và hai chị ghẻ hắt hủi, sau được bà tiên giúp, gặp hoàng tử và vào hoàng cung.'],
   usage:'灰 = tro bụi / màu xám — gợi cuộc sống lấm lem của cô (phần 背景分析). Trong đời sống, 灰姑娘 còn chỉ cô gái xuất thân bình thường bỗng đổi đời.',
   collo:['灰姑娘的故事','《灰姑娘》','灰姑娘的继母'],
   ex_zh:'《灰姑娘》是众所周知的童话。',ex_py:'《Huīgūniang》 shì zhòngsuǒzhōuzhī de tónghuà.',ex_vn:'"Cô bé Lọ Lem" là truyện cổ tích ai cũng biết.',
   exList:[
     {zh:'《灰姑娘》是众所周知的童话。',py:'《Huīgūniang》 shì zhòngsuǒzhōuzhī de tónghuà.',vn:'"Cô bé Lọ Lem" là truyện cổ tích ai cũng biết.'},
     {zh:'老师讲完灰姑娘的故事之后，问了同学们一个问题。',py:'Lǎoshī jiǎngwán Huīgūniang de gùshi zhīhòu, wènle tóngxuémen yí ge wèntí.',vn:'Kể xong chuyện Lọ Lem, thầy giáo hỏi các bạn một câu hỏi.'}
   ],
   colloFull:[
     {zh:'灰姑娘的故事',py:'Huīgūniang de gùshi',vn:'câu chuyện Lọ Lem'},
     {zh:'《灰姑娘》',py:'《Huīgūniang》',vn:'truyện "Cô bé Lọ Lem"'},
     {zh:'灰姑娘的继母',py:'Huīgūniang de jìmǔ',vn:'mẹ kế của Lọ Lem'}
   ],
   patterns:[
     {s:'灰姑娘 + 的 + 继母 / 姐姐 / 故事',m:'Mẹ kế / chị / câu chuyện của Lọ Lem'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày nào Lọ Lem cũng bị mẹ kế sai đi làm việc nhà.',answer:'灰姑娘每天都被继母叫去干家务。',answerPy:'Huīgūniang měi tiān dōu bèi jìmǔ jiào qù gàn jiāwù.',
      note:'被 + người + 叫去 + V.',pair:'被'},
     {promptLang:'vi',prompt:'Lọ Lem tuy sống rất khổ nhưng chưa bao giờ phàn nàn.',answer:'灰姑娘虽然生活很苦，但是从来没抱怨过。',answerPy:'Huīgūniang suīrán shēnghuó hěn kǔ, dànshì cónglái méi bàoyuànguo.',
      note:'从来没 + V + 过; 抱怨 là từ bài 1.',pair:'从来没……过'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 阅读与思考 (578 chữ, tr. 40–41) · 改编自《北京青年报》，作者：梁晓声
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 阅读与思考',
  preQuiz:[
    {q:'很多家长可能过分强调什么的作用？',opts:['阅读','写作','考试'],ans:0},
    {q:'作者认为“多读书就能把作文写好”这个观点怎么样？',opts:['非常正确','不客观、不全面','已经过时了'],ans:1},
    {q:'讨论童话的事，作者是听谁说的？',opts:['一位中国的中学老师','一位作家','一位美国的小学老师'],ans:2},
    {q:'那位老师十分重视什么？',opts:['和学生一起讨论问题','让学生多写作文','给学生讲很多故事'],ans:0},
    {q:'老师讲完灰姑娘的故事后，问了同学们什么问题？',opts:['灰姑娘是怎么进王宫的','灰姑娘应该怎样对待继母和姐姐','王子为什么喜欢灰姑娘'],ans:1},
    {q:'作者认为讨论这个问题是一种什么？',opts:['知识学习','道德教育','情感交换'],ans:2},
    {q:'讨论的结论是：拥有巨大幸福的人应该怎么做？',opts:['原谅和理解伤害过自己的人','离开伤害过自己的人','让伤害过自己的人道歉'],ans:0},
    {q:'为什么继母难免会更疼爱自己亲生的女儿？',opts:['因为灰姑娘不听话','因为这是人性中先天的不完美','因为继母没有道德'],ans:1},
    {q:'作者怎么看继母的行为？',opts:['完全是道德问题','应该受到批评','有自然倾向的理由，与道德没有必然的关系'],ans:2},
    {q:'自从听说了这件事，作者开始思考什么？',opts:['应该如何阅读，除了阅读还应该做什么','怎样写好作文','怎样给孩子讲童话'],ans:0},
    {q:'只主张阅读而不强调思考，作者认为怎么样？',opts:['很全面','是片面的','很客观'],ans:1},
    {q:'作者认为“知识”中的“识”指的是什么？',opts:['别人告诉你的东西','要求你记住的东西','认识'],ans:2},
    {q:'作者认为只有“知感”怎么样？',opts:['不够，还要有认识、思考','已经足够了','比认识更重要'],ans:0}
  ],
  lines:[
    {sp:0,zh:'很多家长可能过分强调阅读的作用，觉得多读书就能够把作文写得特别好。这个观点是不客观、不全面的，我们需要转变自己的观念。',
     py:'Hěn duō jiāzhǎng kěnéng guòfèn qiángdiào yuèdú de zuòyòng, juéde duō dú shū jiù nénggòu bǎ zuòwén xiě de tèbié hǎo. Zhège guāndiǎn shì bú kèguān, bù quánmiàn de, wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.',
     vn:'Nhiều phụ huynh có lẽ đã quá nhấn mạnh tác dụng của việc đọc, cho rằng đọc nhiều sách là có thể viết văn cực hay. Quan điểm này không khách quan, không toàn diện; chúng ta cần thay đổi quan niệm của mình.'},
    {sp:0,zh:'我曾经听一位美国的小学老师说，他们十分重视和学生一起讨论问题。比如，他们讨论过《卖火柴的小女孩儿》是写给谁看的，还讨论过灰姑娘的故事。老师讲完故事之后，问同学们：灰姑娘一旦进了这个王宫，成为王子的心上人，她的梦想实现了，一切幸福都属于她之后，这时她应该怎样对待她的继母，应该怎样对待她的两个姐姐？',
     py:'Wǒ céngjīng tīng yí wèi Měiguó de xiǎoxué lǎoshī shuō, tāmen shífēn zhòngshì hé xuésheng yìqǐ tǎolùn wèntí. Bǐrú, tāmen tǎolùnguo 《Mài Huǒchái de Xiǎo Nǚháir》 shì xiě gěi shéi kàn de, hái tǎolùnguo Huīgūniang de gùshi. Lǎoshī jiǎngwán gùshi zhīhòu, wèn tóngxuémen: Huīgūniang yídàn jìnle zhège wánggōng, chéngwéi wángzǐ de xīnshàngrén, tā de mèngxiǎng shíxiàn le, yíqiè xìngfú dōu shǔyú tā zhīhòu, zhè shí tā yīnggāi zěnyàng duìdài tā de jìmǔ, yīnggāi zěnyàng duìdài tā de liǎng ge jiějie?',
     vn:'Tôi từng nghe một giáo viên tiểu học người Mỹ kể rằng họ rất coi trọng việc cùng học sinh thảo luận vấn đề. Ví dụ, họ từng thảo luận truyện "Cô bé bán diêm" được viết cho ai đọc, còn thảo luận cả câu chuyện Lọ Lem. Kể xong câu chuyện, giáo viên hỏi các em: một khi Lọ Lem đã vào hoàng cung, trở thành người trong mộng của hoàng tử, giấc mơ đã thành hiện thực, mọi hạnh phúc đều thuộc về cô, thì lúc ấy cô nên đối xử với mẹ kế thế nào, nên đối xử với hai người chị thế nào?'},
    {sp:0,zh:'为什么要讨论这个问题呢？因为这是一种情感交换。老师和学生通过讨论得出的结论是：一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。另外还要承认人性中一些先天的不完美，就是说作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，很难完全平等地对待她们。可能你觉得继母很自私，但这种行为有自然倾向的理由，与道德没有必然的关系。',
     py:'Wèi shénme yào tǎolùn zhège wèntí ne? Yīnwèi zhè shì yì zhǒng qínggǎn jiāohuàn. Lǎoshī hé xuésheng tōngguò tǎolùn déchū de jiélùn shì: yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng hé lǐjiě nàxiē shānghàiguo zìjǐ de rén. Lìngwài hái yào chéngrèn rénxìng zhōng yìxiē xiāntiān de bù wánměi, jiù shì shuō zuòwéi yí ge mǔqīn, zài zìjǐ de qīnshēng nǚ\'ér hé bú shì qīnshēng de Huīgūniang zhījiān, nánmiǎn huì gèng téng\'ài zìjǐ qīnshēng de nǚ\'ér, hěn nán wánquán píngděng de duìdài tāmen. Kěnéng nǐ juéde jìmǔ hěn zìsī, dàn zhè zhǒng xíngwéi yǒu zìrán qīngxiàng de lǐyóu, yǔ dàodé méiyǒu bìrán de guānxi.',
     vn:'Vì sao phải thảo luận vấn đề này? Vì đây là một kiểu trao đổi tình cảm. Kết luận thầy trò rút ra qua thảo luận là: một người đã có được hạnh phúc to lớn thì nên tha thứ và thấu hiểu những người từng làm tổn thương mình. Ngoài ra còn phải thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người, nghĩa là, là một người mẹ, giữa con gái ruột của mình và Lọ Lem không phải con ruột, khó tránh khỏi việc thương con ruột hơn, rất khó đối xử với các cô hoàn toàn bình đẳng. Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này có lý do từ khuynh hướng tự nhiên, không có quan hệ tất yếu với đạo đức.'},
    {sp:0,zh:'自从我听说了这件事，就开始思考应该如何阅读，除了阅读还应该做什么。你看这个老师在讲童话的时候，已经在有意识地把这种情感影响，甚至把人性的价值判断，都给了孩子们。如果只是单纯地主张阅读而不强调思考，那是片面的。',
     py:'Zìcóng wǒ tīngshuōle zhè jiàn shì, jiù kāishǐ sīkǎo yīnggāi rúhé yuèdú, chúle yuèdú hái yīnggāi zuò shénme. Nǐ kàn zhège lǎoshī zài jiǎng tónghuà de shíhou, yǐjīng zài yǒu yìshí de bǎ zhè zhǒng qínggǎn yǐngxiǎng, shènzhì bǎ rénxìng de jiàzhí pànduàn, dōu gěile háizimen. Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.',
     vn:'Từ khi nghe chuyện này, tôi bắt đầu suy nghĩ nên đọc như thế nào, ngoài đọc ra còn nên làm gì. Bạn xem, khi kể chuyện cổ tích, người giáo viên ấy đã có ý thức trao cho các em sự ảnh hưởng về tình cảm, thậm chí cả cách đánh giá giá trị về bản tính con người. Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ thì đó là phiến diện.'},
    {sp:0,zh:'“知识”两个字我始终认为它是要分开来谈的，“知”就是知感，“识”就是认识。所谓“知感”就是别人告诉你、说给你听、要求你记住的那一部分。但只有这一部分是不够的，还要有认识、思考。',
     py:'“Zhīshi” liǎng ge zì wǒ shǐzhōng rènwéi tā shì yào fēnkāi lái tán de, “zhī” jiù shì zhīgǎn, “shí” jiù shì rènshi. Suǒwèi “zhīgǎn” jiù shì biérén gàosu nǐ, shuō gěi nǐ tīng, yāoqiú nǐ jìzhu de nà yí bùfen. Dàn zhǐyǒu zhè yí bùfen shì bú gòu de, hái yào yǒu rènshi, sīkǎo.',
     vn:'Hai chữ "tri thức", tôi luôn cho rằng phải tách ra mà bàn: "tri" là tri giác, "thức" là nhận thức. Cái gọi là "tri giác" chính là phần người khác bảo bạn, nói cho bạn nghe, yêu cầu bạn ghi nhớ. Nhưng chỉ có phần này thì chưa đủ, còn phải có nhận thức, suy nghĩ.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 平等/公平 lấy từ sách (tr. 44)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'平等 — 公平',
   same:'Đều là tính từ, nghĩa gần nhau, đôi khi thay được cho nhau.',
   sameEx:{zh:'作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，很难完全平等／公平地对待她们。',vn:'Là một người mẹ, giữa con gái ruột và Lọ Lem không phải con ruột, khó tránh khỏi việc thương con ruột hơn, rất khó đối xử với các cô hoàn toàn bình đẳng / công bằng.'},
   items:[
     {word:'平等',points:[
       'Nhấn mạnh quyền lợi, đãi ngộ mà người với người có được trong xã hội là NGANG NHAU.',
       'Hay dùng cho tình huống chung, mang tính phổ biến: 人人平等, 男女平等.',
       'Đi với 地位 / 待遇 / 权利: 平等的权利 (bảng 词语搭配).'
     ],ex:[{zh:'法律面前人人平等。',vn:'Trước pháp luật mọi người đều bình đẳng.'},
          {zh:'现实社会中，女人与男人有时并不平等。',vn:'Trong xã hội thực tế, phụ nữ và nam giới có lúc không hề bình đẳng.'}]},
     {word:'公平',points:[
       'Nhấn mạnh cách XỬ LÝ sự việc hợp tình hợp lý, không thiên vị bên nào.',
       'Dùng được cho người hoặc việc cụ thể: 比赛很公平, 处理得不公平.',
       'Hay đi với 竞争, 处理, 做事: 公平竞争.'
     ],ex:[{zh:'我们应当公平竞争。',vn:'Chúng ta nên cạnh tranh công bằng.'},
          {zh:'我认为公司对这次事情的处理不够公平。',vn:'Tôi cho rằng cách công ty xử lý việc lần này chưa đủ công bằng.'}]}
   ],
   quiz:[
     {sentence:'机会对每个人来说都是＿＿的。',options:['平等','公平'],answer:0,
      why:'Nói chung về quyền lợi của mọi người là ngang nhau → 平等 (câu mẫu của sách).'},
     {sentence:'这次比赛很＿＿，没有什么问题。',options:['平等','公平'],answer:1,
      why:'Một cuộc thi cụ thể, được tổ chức không thiên vị → 公平.'},
     {sentence:'作为法官，你做事应该＿＿。',options:['平等','公平'],answer:1,
      why:'Cách xử lý việc hợp lý, không nghiêng về bên nào → 做事公平.'},
     {sentence:'人生来是＿＿的，人人都有权追求自由和幸福。',options:['平等','公平'],answer:0,
      why:'Quyền của con người nói chung là ngang nhau → 人生来平等.'}
   ],
   sgk:{
     chung:{t:'都是形容词，意思相近，有时可换用。',vn:'Đều là tính từ, nghĩa gần nhau, đôi khi thay được cho nhau.',vd:'作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，很难完全平等／公平地对待她们。',vdVn:'Là một người mẹ, giữa con gái ruột và Lọ Lem không phải con ruột, khó tránh khỏi việc thương con ruột hơn, rất khó đối xử với các cô hoàn toàn bình đẳng / công bằng.'},
     khac:[
       {a:{t:'强调人和人在社会上得到的权利或待遇一样。',vn:'Nhấn mạnh quyền lợi hoặc đãi ngộ người với người có được trong xã hội là như nhau.',vd:'法律面前人人平等。',vdVn:'Trước pháp luật mọi người đều bình đẳng.'},
        b:{t:'强调处理事情合情合理，不偏向于一方。',vn:'Nhấn mạnh việc xử lý sự việc hợp tình hợp lý, không thiên về một bên.',vd:'我们应当公平竞争。',vdVn:'Chúng ta nên cạnh tranh công bằng.'}},
       {a:{t:'多用于普遍性的、一般的情况。',vn:'Thường dùng cho tình huống mang tính phổ biến, chung chung.',vd:'现实社会中，女人与男人有时并不平等。',vdVn:'Trong xã hội thực tế, phụ nữ và nam giới có lúc không hề bình đẳng.'},
        b:{t:'可用于具体的人或事。',vn:'Có thể dùng cho người hoặc việc cụ thể.',vd:'我认为公司对这次事情的处理不够公平。',vdVn:'Tôi cho rằng cách công ty xử lý việc lần này chưa đủ công bằng.'}}
     ],
     lamThu:[
       {s:'机会对每个人来说都是＿＿的。',dap:[true,false],mau:true,
        giai:'Quyền lợi chung của mọi người ngang nhau → 平等 (câu mẫu của sách: 平等 ✓, 公平 ×).'},
       {s:'这次比赛很＿＿，没有什么问题。',dap:[false,true],
        giai:'Một cuộc thi cụ thể, xử lý không thiên vị → 公平.'},
       {s:'作为法官，你做事应该＿＿。',dap:[false,true],
        giai:'Xử lý sự việc hợp tình hợp lý, không nghiêng về bên nào → 公平.'},
       {s:'人生来是＿＿的，人人都有权追求自由和幸福。',dap:[true,false],
        giai:'Nói chung về quyền của con người là ngang nhau → 平等.'}
     ]
   }},

  {pair:'观点 — 观念',
   same:'Đều là danh từ, đều chỉ cách nghĩ, cách nhìn của con người.',
   sameEx:{zh:'这个观点是不客观、不全面的，我们需要转变自己的观念。',vn:'Quan điểm này không khách quan, không toàn diện; chúng ta cần thay đổi quan niệm của mình.'},
   items:[
     {word:'观点',points:[
       'Ý kiến cụ thể về MỘT vấn đề, thường được nêu ra khi thảo luận, viết bài.',
       'Đi với 同意 / 支持 / 反对 / 提出: 同意你的观点.',
       'Đếm được: 这个观点, 两个不同的观点.'
     ],ex:[{zh:'我不同意你的观点，我觉得这部电影很不错。',vn:'Tôi không đồng ý với quan điểm của bạn, tôi thấy bộ phim này rất hay.'}]},
     {word:'观念',points:[
       'Tư tưởng, quan niệm hình thành LÂU DÀI trong đầu một người hay cả xã hội, mang tính khái quát.',
       'Đi với 转变 / 改变 / 更新 và 传统, 时间, 教育: 时间观念 (ý thức giờ giấc).',
       'Không đi với 同意 (không nói 同意你的观念).'
     ],ex:[{zh:'他的时间观念很强，从来没迟到过。',vn:'Cậu ấy rất có ý thức về giờ giấc, chưa bao giờ đến muộn.'}]}
   ],
   quiz:[
     {sentence:'我不同意你的＿＿，我觉得这部电影很不错。',options:['观点','观念'],answer:0,
      why:'Ý kiến cụ thể về một bộ phim, đi với 同意 → 观点 (bài tập 2 của sách).'},
     {sentence:'他的时间＿＿很强，从来没迟到过。',options:['观点','观念'],answer:1,
      why:'时间观念 = ý thức giờ giấc, là cụm cố định.'},
     {sentence:'讨论的时候，每个同学都可以提出自己的＿＿。',options:['观点','观念'],answer:0,
      why:'提出 + ý kiến cụ thể trong thảo luận → 提出观点.'},
     {sentence:'很多老人的传统＿＿很难改变。',options:['观点','观念'],answer:1,
      why:'Tư tưởng hình thành lâu dài → 传统观念.'}
   ]},

  {pair:'理由 — 原因',
   same:'Đều là danh từ, đều trả lời cho câu hỏi "vì sao".',
   sameEx:{zh:'他迟到的原因／理由是路上堵车。',vn:'Nguyên nhân / lý do cậu ấy đến muộn là tắc đường.'},
   items:[
     {word:'原因',points:[
       'Nguyên nhân KHÁCH QUAN dẫn tới một kết quả, một sự việc.',
       'Hay đi với 找 / 分析 / 造成 + 原因; ……的原因是…….',
       'Dùng được cho hiện tượng tự nhiên, sự việc — không cần có người đưa ra.'
     ],ex:[{zh:'这次新产品销售得不好的原因是宣传推广做得不够。',vn:'Nguyên nhân sản phẩm mới lần này bán không chạy là do quảng bá chưa đủ.'}]},
     {word:'理由',points:[
       'Lý lẽ do CON NGƯỜI đưa ra để giải thích, biện minh cho việc làm hay quan điểm của mình.',
       'Hay đi với 有 / 没有 / 找 / 给 + 理由; 理由充分.',
       '没有理由 + V = không có lý gì để ….'
     ],ex:[{zh:'希望你能给我一个好的理由，解释清楚你为什么这么做。',vn:'Mong bạn cho tôi một lý do thoả đáng, giải thích rõ vì sao bạn làm vậy.'}]}
   ],
   quiz:[
     {sentence:'这次新产品销售得不好的＿＿是宣传推广做得不够。',options:['原因','理由'],answer:0,
      why:'Nguyên nhân khách quan dẫn đến kết quả "bán không chạy" → 原因 (bài tập 2 của sách).'},
     {sentence:'希望你能给我一个好的＿＿，解释清楚你为什么这么做。',options:['原因','理由'],answer:1,
      why:'Lý lẽ người làm phải đưa ra để biện minh → 理由 (bài tập 1 của sách).'},
     {sentence:'医生正在检查他发烧的＿＿。',options:['原因','理由'],answer:0,
      why:'Nguyên nhân gây bệnh là khách quan → 原因. Bệnh không "đưa ra lý do".'},
     {sentence:'他是你最好的朋友，你没有＿＿不相信他。',options:['原因','理由'],answer:1,
      why:'没有理由 + V = không có lý gì để … — cụm cố định với 理由.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'观点',hv:'quan điểm',vn:'quan điểm',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'客观',hv:'khách quan',vn:'khách quan',note:'Trùng khít. Trái nghĩa: 主观 (chủ quan).'},
    {zh:'全面',hv:'toàn diện',vn:'toàn diện',note:'Trùng khít. Trái nghĩa: 片面 (phiến diện) — cũng có trong bài.'},
    {zh:'观念',hv:'quan niệm',vn:'quan niệm',note:'Trùng khít. 时间观念 = ý thức giờ giấc.'},
    {zh:'转变',hv:'chuyển biến',vn:'thay đổi, chuyển biến',note:'Trùng khít — nhưng tiếng Trung dùng được như động từ có tân ngữ: 转变观念.'},
    {zh:'平等',hv:'bình đẳng',vn:'bình đẳng',note:'Trùng khít. 男女平等 = nam nữ bình đẳng.'},
    {zh:'道德',hv:'đạo đức',vn:'đạo đức',note:'Trùng khít.'},
    {zh:'价值',hv:'giá trị',vn:'giá trị',note:'Trùng khít. Chú ý 很有价值 (không nói 很价值).'},
    {zh:'理由',hv:'lý do',vn:'lý do',note:'Trùng khít.'},
    {zh:'单纯',hv:'đơn thuần',vn:'đơn thuần; ngây thơ',note:'Trùng khít — tiếng Trung còn dùng khen người "trong sáng, ngây thơ": 她很单纯.'},
    {zh:'主张',hv:'chủ trương',vn:'chủ trương; cho là nên',note:'Gần khít — nhưng 主张 dùng cả cho cá nhân: 有自己的主张 = có chính kiến.'},
    {zh:'完美',hv:'hoàn mỹ',vn:'hoàn hảo',note:'"Hoàn mỹ" = đẹp trọn vẹn → hoàn hảo.'},
    {zh:'巨大',hv:'cự đại',vn:'to lớn, khổng lồ',note:'"Cự" = rất lớn (như 巨人 cự nhân = người khổng lồ).'},
    {zh:'倾向',hv:'khuynh hướng',vn:'khuynh hướng; nghiêng về',note:'Trùng khít khi là danh từ; làm động từ: 倾向于 = nghiêng về.'},
    {zh:'承认',hv:'thừa nhận',vn:'thừa nhận',note:'Trùng khít.'},
    {zh:'王子',hv:'vương tử',vn:'hoàng tử',note:'"Vương" = vua, "tử" = con → con vua.'},
    {zh:'王宫',hv:'vương cung',vn:'hoàng cung',note:'"Cung" = cung điện của vua.'},
    {zh:'童话',hv:'đồng thoại',vn:'truyện cổ tích',note:'"Đồng" = trẻ em (nhi đồng), "thoại" = câu chuyện → truyện cho trẻ em.'}
  ],
  idiom:[
    {zh:'众所周知',hv:'chúng sở chu tri',vn:'ai ai cũng biết',note:'"Điều mà mọi người đều biết" — mở đầu phần 背景分析: 《灰姑娘》是众所周知的童话.'},
    {zh:'心上人',hv:'tâm thượng nhân',vn:'người trong mộng, người thương',note:'"Người ở trên tim" — 成为王子的心上人.'},
    {zh:'先天',hv:'tiên thiên',vn:'bẩm sinh',note:'"Có từ trước khi sinh" — 人性中一些先天的不完美. Trái nghĩa: 后天 (hậu thiên, do rèn luyện mà có).'},
    {zh:'片面',hv:'phiến diện',vn:'phiến diện, một chiều',note:'Tiếng Việt dùng y hệt. 那是片面的 = như vậy là phiến diện.'}
  ],
  trap:[
    {zh:'过分',hv:'quá phận',vn:'quá đáng, quá mức',
     warn:'"Quá phận" tiếng Việt ít dùng. 过分 = quá mức, và 太过分了 = quá đáng lắm (chê người khác).'},
    {zh:'强调',hv:'cường điệu',vn:'nhấn mạnh',
     warn:'BẪY: "cường điệu" tiếng Việt = phóng đại, thổi phồng. 强调 chỉ là NHẤN MẠNH, không có ý chê: 老师强调考试不能迟到.'},
    {zh:'作文',hv:'tác văn',vn:'bài làm văn',
     warn:'"Tác văn" không dùng trong tiếng Việt. 作文 = bài tập làm văn của học sinh; 写作文 = viết văn.'},
    {zh:'灰',hv:'hôi',vn:'tro, bụi; màu xám',
     warn:'BẪY: "hôi" không phải mùi hôi! 灰 = tro bụi hoặc màu xám: 灰色, 灰姑娘.'},
    {zh:'人性',hv:'nhân tính',vn:'bản tính con người',
     warn:'BẪY: "mất nhân tính" trong tiếng Việt = mất lòng nhân đạo. 人性 trong bài là bản tính tự nhiên của con người, gồm cả điểm chưa hoàn hảo.'},
    {zh:'疼爱',hv:'đông ái',vn:'thương yêu, yêu chiều',
     warn:'疼 vốn là ĐAU — thương đến "xót". Dùng cho người lớn thương trẻ nhỏ, không dùng giữa bạn bè.'},
    {zh:'自私',hv:'tự tư',vn:'ích kỷ',
     warn:'Âm Hán–Việt không gợi nghĩa. 私 = riêng tư → chỉ lo cái riêng của mình = ích kỷ.'},
    {zh:'难免',hv:'nan miễn',vn:'khó tránh khỏi',
     warn:'"Nan" = khó, "miễn" = tránh (miễn trừ). Là TÍNH TỪ: 是难免的, 难免会…….'},
    {zh:'交换',hv:'giao hoán',vn:'trao đổi',
     warn:'"Giao hoán" tiếng Việt chỉ gặp trong toán (tính giao hoán). 交换 = trao đổi cho nhau: 交换意见, 交换礼物.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 43) + bài tập 3 của sách (tr. 45) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'承认',right:'错误'},
  {left:'转变',right:'观念'},
  {left:'交换',right:'意见'},
  {left:'坚持',right:'主张'},
  {left:'完美的',right:'计划'},
  {left:'平等的',right:'权利'},
  {left:'自私的',right:'行为'},
  {left:'过分地',right:'强调'},
  {left:'全面地',right:'了解'},
  {left:'公平地',right:'对待'},
  {left:'属于',right:'我们'},
  {left:'拥有',right:'幸福'},
  {left:'巨大的',right:'变化'},
  {left:'讲',right:'童话'},
  {left:'价值',right:'判断'},
  {left:'疼爱',right:'孩子'},
  {left:'得出',right:'结论'},
  {left:'实现',right:'梦想'},
  {left:'划',right:'火柴'},
  {left:'提出',right:'观点'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bảng 生词 có ít nhất một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'很多家长可能',blank:'过分',post:'强调阅读的作用。',hint:'(quá mức)',ans:'过分'},
  {pre:'老师一再',blank:'强调',post:'，考试的时候千万不能紧张。',hint:'(nhấn mạnh)',ans:'强调'},
  {pre:'这篇',blank:'作文',post:'写得很好，老师给了九十分。',hint:'(bài văn)',ans:'作文'},
  {pre:'讨论的时候，每个同学都可以提出自己的',blank:'观点',post:'。',hint:'(quan điểm)',ans:'观点'},
  {pre:'人都是有感情甚至自私的，很难做到任何时候都很',blank:'客观',post:'。',hint:'(khách quan)',ans:'客观'},
  {pre:'学校希望学生德、智、体',blank:'全面',post:'发展。',hint:'(toàn diện)',ans:'全面'},
  {pre:'你可以试着',blank:'转变',post:'一下思路，可能会快一点解决问题。',hint:'(thay đổi)',ans:'转变'},
  {pre:'很多老人的传统',blank:'观念',post:'很难改变。',hint:'(quan niệm)',ans:'观念'},
  {pre:'停电了，奶奶划了一根',blank:'火柴',post:'，点上了蜡烛。',hint:'(que diêm)',ans:'火柴'},
  {pre:'很久没人住了，桌子上有一层',blank:'灰',post:'。',hint:'(bụi)',ans:'灰'},
  {pre:'网上报名的资料',blank:'一旦',post:'提交，就不能更改了。',hint:'(một khi)',ans:'一旦'},
  {pre:'这座',blank:'王宫',post:'已经有三百多年的历史了。',hint:'(hoàng cung)',ans:'王宫'},
  {pre:'很多童话的结尾都是',blank:'王子',post:'和公主幸福地生活在一起。',hint:'(hoàng tử)',ans:'王子'},
  {pre:'她的梦想实现了，一切幸福都',blank:'属于',post:'她。',hint:'(thuộc về)',ans:'属于'},
  {pre:'考试失败了，要冷静地',blank:'对待',post:'，别太难过。',hint:'(đối mặt, đối xử)',ans:'对待'},
  {pre:'新年晚会上，同学们互相',blank:'交换',post:'了礼物。',hint:'(trao đổi)',ans:'交换'},
  {pre:'中国',blank:'拥有',post:'五千多年的历史。',hint:'(có, sở hữu)',ans:'拥有'},
  {pre:'这十年，我的家乡发生了',blank:'巨大',post:'的变化。',hint:'(to lớn)',ans:'巨大'},
  {pre:'虽然这次的错误有点儿严重，但你应该勇敢地',blank:'承认',post:'。',hint:'(thừa nhận)',ans:'承认'},
  {pre:'另外还要承认',blank:'人性',post:'中一些先天的不完美。',hint:'(bản tính con người)',ans:'人性'},
  {pre:'世界上没有',blank:'完美',post:'的人，每个人都有缺点。',hint:'(hoàn hảo)',ans:'完美'},
  {pre:'刚开始工作，这样的错误是',blank:'难免',post:'的。',hint:'(khó tránh khỏi)',ans:'难免'},
  {pre:'奶奶最',blank:'疼爱',post:'我这个小孙女了。',hint:'(thương yêu)',ans:'疼爱'},
  {pre:'法律面前人人',blank:'平等',post:'。',hint:'(bình đẳng)',ans:'平等'},
  {pre:'只想着自己的人太',blank:'自私',post:'了，没有人愿意跟他交朋友。',hint:'(ích kỷ)',ans:'自私'},
  {pre:'两个方案我更',blank:'倾向',post:'于第一个。',hint:'(nghiêng về)',ans:'倾向'},
  {pre:'希望你能给我一个好的',blank:'理由',post:'，解释清楚你为什么这么做。',hint:'(lý do)',ans:'理由'},
  {pre:'学校不仅要教知识，也要教学生讲',blank:'道德',post:'。',hint:'(đạo đức)',ans:'道德'},
  {pre:'',blank:'自从',post:'我听说了这件事，就开始思考应该如何阅读。',hint:'(từ khi)',ans:'自从'},
  {pre:'小时候，妈妈每天晚上都给我讲一个',blank:'童话',post:'故事。',hint:'(truyện cổ tích)',ans:'童话'},
  {pre:'你的这个建议很有',blank:'价值',post:'，我马上告诉总裁。',hint:'(giá trị)',ans:'价值'},
  {pre:'他太',blank:'单纯',post:'了，这样很容易被人骗。',hint:'(đơn thuần, ngây thơ)',ans:'单纯'},
  {pre:'他',blank:'主张',post:'将会议地点改在上海。',hint:'(chủ trương, cho là nên)',ans:'主张'},
  {pre:'所谓“',blank:'知感',post:'”就是别人告诉你、要求你记住的那一部分。',hint:'(tri giác)',ans:'知感'},
  {pre:'安徒生写过一个很有名的童话，叫《',blank:'卖火柴的小女孩儿',post:'》。',hint:'(Cô bé bán diêm)',ans:'卖火柴的小女孩儿'},
  {pre:'《',blank:'灰姑娘',post:'》是众所周知的童话。',hint:'(Cô bé Lọ Lem)',ans:'灰姑娘'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (一旦 · 难免 · 自从) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['网上报名的资料','一旦','提交','，','就','不能更改了','。'],ans:'网上报名的资料一旦提交，就不能更改了。',audio:'网上报名的资料一旦提交，就不能更改了。'},
  {words:['女人','一旦','做了母亲','，','就','变得矛盾了','。'],ans:'女人一旦做了母亲，就变得矛盾了。',audio:'女人一旦做了母亲，就变得矛盾了。'},
  {words:['一旦','有人闯入这个空间','，','我们','就会','感觉不舒服','。'],ans:'一旦有人闯入这个空间，我们就会感觉不舒服。',audio:'一旦有人闯入这个空间，我们就会感觉不舒服。'},
  {words:['刚开始工作','，','这样的错误','是','难免的','。'],ans:'刚开始工作，这样的错误是难免的。',audio:'刚开始工作，这样的错误是难免的。'},
  {words:['朋友间','难免','会产生','矛盾和误会','。'],ans:'朋友间难免会产生矛盾和误会。',audio:'朋友间难免会产生矛盾和误会。'},
  {words:['考试时','紧张','是','难免的','。'],ans:'考试时紧张是难免的。',audio:'考试时紧张是难免的。'},
  {words:['自从','我听说了这件事','，','就','开始思考','应该如何阅读','。'],ans:'自从我听说了这件事，就开始思考应该如何阅读。',audio:'自从我听说了这件事，就开始思考应该如何阅读。'},
  {words:['自从','城市出现后','，','它','就成为','人类生活的中心','。'],ans:'自从城市出现后，它就成为人类生活的中心。',audio:'自从城市出现后，它就成为人类生活的中心。'},
  {words:['自从','上了高中','，','他','每天都','坚持','跑步','。'],ans:'自从上了高中，他每天都坚持跑步。',audio:'自从上了高中，他每天都坚持跑步。'},
  {words:['老师','把','人性的价值判断','给了','孩子们','。'],ans:'老师把人性的价值判断给了孩子们。',audio:'老师把人性的价值判断给了孩子们。'},
  {words:['我们','需要','转变','自己的','观念','。'],ans:'我们需要转变自己的观念。',audio:'我们需要转变自己的观念。'},
  {words:['单纯地主张阅读','而','不强调思考','是','片面的','。'],ans:'单纯地主张阅读而不强调思考是片面的。',audio:'单纯地主张阅读而不强调思考是片面的。'},
  {words:['他','为公司','提供了','很多','有价值的建议','。'],ans:'他为公司提供了很多有价值的建议。',audio:'他为公司提供了很多有价值的建议。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'你可以试着____一下思路，可能会快一点解决问题。',opts:['转变','变化','改正','交换'],ans:0,
   exp:'转变 + 思路 / 观念 / 态度: chủ động thay đổi cái trừu tượng (bài tập 2 của sách). 变化 thường không mang tân ngữ; 改正 đi với 错误; 交换 là đổi cho nhau.'},
  {wrong:'我不同意你的____，我觉得这部电影很不错。',opts:['观点','观念','理由','价值'],ans:0,
   exp:'Ý kiến cụ thể về một bộ phim, đi với 同意 → 观点 (bài tập 2 của sách). 观念 là quan niệm lâu dài, không đi với 同意.'},
  {wrong:'这次新产品销售得不好的____是宣传推广做得不够。',opts:['原因','理由','价值','观点'],ans:0,
   exp:'Nguyên nhân khách quan dẫn tới kết quả → 原因 (bài tập 2 của sách). 理由 là lý lẽ con người đưa ra để biện minh.'},
  {wrong:'他太____了，这样很容易被人骗。',opts:['单纯','单调','自私','客观'],ans:0,
   exp:'Ngây thơ, đơn giản → dễ bị lừa: 单纯 (bài tập 2 của sách). 单调 = đơn điệu, tẻ nhạt, dùng cho cuộc sống, màu sắc.'},
  {wrong:'作为法官，你做事应该____。',opts:['公平','平等','巨大','完美'],ans:0,
   exp:'Xử lý việc hợp tình hợp lý, không thiên vị → 公平 (做一做 của sách). 平等 nói về quyền lợi, địa vị ngang nhau.'},
  {wrong:'人生来是____的，人人都有权追求自由和幸福。',opts:['平等','公平','客观','全面'],ans:0,
   exp:'Quyền lợi của con người nói chung là ngang nhau → 平等 (做一做 của sách).'},
  {wrong:'刚开始工作，这样的错误是____的。',opts:['难免','一旦','过分','完美'],ans:0,
   exp:'是难免的 = là khó tránh khỏi (câu ví dụ của sách). 一旦 là phó từ, không đứng trong 是……的 như vậy.'},
  {wrong:'____我来中国以后，我的汉语进步得很快。',opts:['自从','一旦','难免','属于'],ans:0,
   exp:'Bắt đầu từ một thời điểm trong quá khứ đến nay → 自从……以后. 一旦 dùng cho điều kiện chưa xảy ra hoặc giả định.'},
  {wrong:'____明天开始，我每天早上都去跑步。',opts:['从','自从','一旦','难免'],ans:0,
   exp:'自从 CHỈ dùng cho quá khứ. Thời điểm tương lai (明天) phải dùng 从: 从明天开始.'},
  {wrong:'这件事你做得太____了，我不能接受！',opts:['过分','客观','巨大','单纯'],ans:0,
   exp:'太过分了 = quá đáng lắm (bài tập 1 của sách).'},
  {wrong:'他从来不____自己的错误，总说是别人的问题。',opts:['承认','属于','拥有','倾向'],ans:0,
   exp:'承认 + 错误 / 事实 (bảng 词语搭配).'},
  {wrong:'老师____每个学生都很公平。',opts:['对待','疼爱','交换','属于'],ans:0,
   exp:'对待 + người + 公平 = đối xử công bằng với ai. 疼爱 là thương yêu, không đi với 公平.'},
  {wrong:'一个已经____巨大幸福的人，应该原谅和理解那些伤害过自己的人。',opts:['拥有','属于','承认','交换'],ans:0,
   exp:'拥有 + điều quý giá (幸福). 属于 ngược hướng: 幸福属于她.'},
  {wrong:'这些书____学校图书馆，不能带回家。',opts:['属于','拥有','对待','主张'],ans:0,
   exp:'A 属于 B = A là của B. Nếu dùng 拥有 phải đảo: 学校图书馆拥有这些书.'},
  {wrong:'开会以前，我们先____一下意见吧。',opts:['交换','转变','承认','对待'],ans:0,
   exp:'交换 + 意见 (bảng 词语搭配).'},
  {wrong:'看问题要____，不能只听一个人的话。',opts:['客观','自私','单纯','巨大'],ans:0,
   exp:'Nhìn nhận theo sự thật, không thiên kiến → 客观.'},
  {wrong:'两个方案我更____于第一个。',opts:['倾向','主张','承认','属于'],ans:0,
   exp:'倾向于 + lựa chọn = nghiêng về. 主张 không đi với 于.'},
  {wrong:'孩子大了，有自己的____了，我有什么办法？',opts:['主张','理由','人性','道德'],ans:0,
   exp:'有自己的主张 = có chính kiến riêng (bài nghe 4 sách bài tập).'},
  {wrong:'____有人闯入这个空间，我们就会感觉不舒服。',opts:['一旦','自从','难免','虽然'],ans:0,
   exp:'一旦……就…… = một khi … thì … (câu ví dụ của sách).'},
  {wrong:'他的时间____很强，从来没迟到过。',opts:['观念','观点','理由','道德'],ans:0,
   exp:'时间观念 = ý thức giờ giấc — cụm cố định.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Quan điểm này không khách quan, không toàn diện.',zh:'这个观点是不客观、不全面的。',py:'Zhège guāndiǎn shì bú kèguān, bù quánmiàn de.'},
  {vi:'Một khi đã nộp thì không sửa được nữa.',zh:'一旦提交，就不能更改了。',py:'Yídàn tíjiāo, jiù bù néng gēnggǎi le.'},
  {vi:'Lần đầu lên sân khấu, căng thẳng là khó tránh khỏi.',zh:'第一次上台，紧张是难免的。',py:'Dì-yī cì shàngtái, jǐnzhāng shì nánmiǎn de.'},
  {vi:'Từ khi lên cấp ba, ngày nào tôi cũng kiên trì đọc sách.',zh:'自从上了高中，我每天都坚持看书。',py:'Zìcóng shàngle gāozhōng, wǒ měi tiān dōu jiānchí kàn shū.'},
  {vi:'Bạn nên dũng cảm thừa nhận lỗi của mình.',zh:'你应该勇敢地承认自己的错误。',py:'Nǐ yīnggāi yǒnggǎn de chéngrèn zìjǐ de cuòwù.'},
  {vi:'Thầy giáo đối xử bình đẳng với từng học sinh.',zh:'老师平等地对待每一个学生。',py:'Lǎoshī píngděng de duìdài měi yí ge xuésheng.'},
  {vi:'Đề xuất này rất có giá trị.',zh:'这个建议很有价值。',py:'Zhège jiànyì hěn yǒu jiàzhí.'},
  {vi:'Trên đời không có ai hoàn hảo.',zh:'世界上没有完美的人。',py:'Shìjiè shang méiyǒu wánměi de rén.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Nhiều phụ huynh có lẽ đã quá nhấn mạnh tác dụng của việc đọc.',zh:'很多家长可能过分强调阅读的作用。',py:'Hěn duō jiāzhǎng kěnéng guòfèn qiángdiào yuèdú de zuòyòng.'},
  {vi:'Chúng ta cần thay đổi quan niệm của mình.',zh:'我们需要转变自己的观念。',py:'Wǒmen xūyào zhuǎnbiàn zìjǐ de guānniàn.'},
  {vi:'Họ rất coi trọng việc cùng học sinh thảo luận vấn đề.',zh:'他们十分重视和学生一起讨论问题。',py:'Tāmen shífēn zhòngshì hé xuésheng yìqǐ tǎolùn wèntí.'},
  {vi:'Vì sao phải thảo luận vấn đề này? Vì đây là một kiểu trao đổi tình cảm.',zh:'为什么要讨论这个问题呢？因为这是一种情感交换。',py:'Wèi shénme yào tǎolùn zhège wèntí ne? Yīnwèi zhè shì yì zhǒng qínggǎn jiāohuàn.'},
  {vi:'Một người đã có được hạnh phúc to lớn thì nên tha thứ cho những người từng làm tổn thương mình.',zh:'一个已经拥有巨大幸福的人，应该原谅那些伤害过自己的人。',py:'Yí ge yǐjīng yōngyǒu jùdà xìngfú de rén, yīnggāi yuánliàng nàxiē shānghàiguo zìjǐ de rén.'},
  {vi:'Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này không có quan hệ tất yếu với đạo đức.',zh:'可能你觉得继母很自私，但这种行为与道德没有必然的关系。',py:'Kěnéng nǐ juéde jìmǔ hěn zìsī, dàn zhè zhǒng xíngwéi yǔ dàodé méiyǒu bìrán de guānxi.'},
  {vi:'Nếu chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh suy nghĩ thì đó là phiến diện.',zh:'如果只是单纯地主张阅读而不强调思考，那是片面的。',py:'Rúguǒ zhǐ shì dānchún de zhǔzhāng yuèdú ér bù qiángdiào sīkǎo, nà shì piànmiàn de.'},
  {vi:'Chỉ có tri giác thì chưa đủ, còn phải có nhận thức và suy nghĩ.',zh:'只有知感是不够的，还要有认识和思考。',py:'Zhǐyǒu zhīgǎn shì bú gòu de, hái yào yǒu rènshi hé sīkǎo.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['一旦','对待','承认','难免','平等'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với đầu đề "Nếu tôi là Lọ Lem" — nói em sẽ đối xử với mẹ kế và hai người chị thế nào (theo đề 命题写作 của sách: 请以“假如我是灰姑娘”为题，谈一谈你的看法).',
  outline:[
    'Câu mở: đặt giả thiết "Nếu tôi là Lọ Lem" và nêu rõ em sẽ làm gì (một khi đã vào hoàng cung…) — dùng 一旦.',
    'Thân 1: thừa nhận mẹ kế, các chị từng đối xử không tốt, lòng mình khó tránh buồn — dùng 承认, 难免.',
    'Thân 2: đứng ở vị trí người mẹ để hiểu cho mẹ kế — dùng 平等, 对待.',
    'Kết: rút ra thái độ của em (tha thứ, sống tốt với mọi người).'
  ],
  model:{
    zh:'假如我是灰姑娘，一旦进入王宫，成为王子的心上人，我就会原谅继母和姐姐。我承认，她们以前对我很不好，我心里难免会难过。但是作为一个母亲，继母更疼爱自己的女儿，很难平等地对待我们。我已经拥有了巨大的幸福，所以我会好好对待她们。',
    py:'Jiǎrú wǒ shì Huīgūniang, yídàn jìnrù wánggōng, chéngwéi wángzǐ de xīnshàngrén, wǒ jiù huì yuánliàng jìmǔ hé jiějie. Wǒ chéngrèn, tāmen yǐqián duì wǒ hěn bù hǎo, wǒ xīn li nánmiǎn huì nánguò. Dànshì zuòwéi yí ge mǔqīn, jìmǔ gèng téng\'ài zìjǐ de nǚ\'ér, hěn nán píngděng de duìdài wǒmen. Wǒ yǐjīng yōngyǒule jùdà de xìngfú, suǒyǐ wǒ huì hǎohāo duìdài tāmen.',
    vn:'Nếu tôi là Lọ Lem, một khi đã vào hoàng cung, trở thành người trong mộng của hoàng tử, tôi sẽ tha thứ cho mẹ kế và các chị. Tôi thừa nhận trước đây họ đối xử với tôi rất tệ, trong lòng tôi khó tránh khỏi buồn. Nhưng là một người mẹ, mẹ kế thương con gái ruột của mình hơn, rất khó đối xử bình đẳng với chúng tôi. Tôi đã có được hạnh phúc to lớn, vì vậy tôi sẽ đối xử tử tế với họ.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '一旦 có đi cùng 就 ở vế sau không (không nối bằng 所以 / 但是)?',
    'Có viết sai 对待他很好 (đúng: 对他很好 / 好好对待他) hay 很难免 (đúng: 难免会……) không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是《假如我是灰姑娘》。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'一旦', loai:'phó từ', cach:'一旦……就…… · 一旦发生 · 一旦决定',
     sai:[{re:'一旦[^，。！？]*，(所以|但是|可是)', sua:'一旦……，就……', giai:'Vế sau của 一旦 nêu kết quả tất yếu, dùng 就 / 便; không nối bằng 所以 / 但是.'},
          {re:'一旦(明天|明年|下个月|以后|将来)', sua:'一旦 + sự việc (一旦进入王宫)', giai:'一旦 đi với một sự việc / điều kiện, không đi thẳng với từ chỉ thời gian.', nhe:true}]},
    {tu:'对待', loai:'động từ', cach:'平等地对待 · 怎样对待 · 好好对待',
     sai:[{re:'对待(他|她|我|你|我们|她们|他们|继母|姐姐)(很|非常|特别|不)(好|坏)', sua:'对她很好 / 好好对待她', giai:'Nói "tốt với ai" dùng 对 + người + 很好. 对待 cần trạng ngữ đứng trước: 好好对待, 平等地对待.'}]},
    {tu:'承认', loai:'động từ', cach:'承认错误 · 承认事实 · 我承认……',
     sai:[{re:'承认(意见|建议|观点|想法)', sua:'同意你的观点 / 接受建议', giai:'承认 đi với 错误, 事实 hoặc một mệnh đề. Ý kiến, đề xuất thì dùng 同意 / 接受.'}]},
    {tu:'难免', loai:'tính từ', cach:'是难免的 · 难免会……',
     sai:[{re:'(很|非常|太|特别)难免', sua:'难免会难过', giai:'难免 đã mang nghĩa "khó tránh", không đi với 很 / 非常 phía trước.'},
          {re:'难免的(难过|紧张|出错|伤心)', sua:'难免会难过', giai:'Đứng trước động từ / tính từ thì dùng 难免 (会) + V, không thêm 的.'}]},
    {tu:'平等', loai:'tính từ', cach:'平等地对待 · 男女平等 · 平等的权利',
     sai:[{re:'平等(的)?(比赛|竞争|处理)', sua:'公平竞争 / 比赛很公平', giai:'Việc cụ thể (比赛, 竞争, 处理) được xử lý không thiên vị dùng 公平 (mục 词语辨析).'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'假如……，(就)……', nhan:'假如', vd:'假如我是灰姑娘，我会原谅继母和姐姐。', khi:'Câu MỞ — đặt giả thiết theo đúng đầu đề.'},
    {ten:'一旦……，就……', nhan:'一旦', vd:'一旦进入王宫，我就会原谅她们。', khi:'Nêu điều kiện "một khi …" và hành động của mình.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然继母对我不好，但是我不会恨她。', khi:'Nêu mặt trái rồi lật lại thái độ — thân đoạn.'},
    {ten:'难免 + 会 + V', nhan:'难免', vd:'被人伤害过，心里难免会难过。', khi:'Thừa nhận cảm xúc tự nhiên của mình.'},
    {ten:'作为 + thân phận，……', nhan:'作为', vd:'作为一个母亲，继母更疼爱自己的女儿。', khi:'Đứng ở vị trí người khác để hiểu họ (câu của bài khoá).'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'原谅别人不仅能让别人快乐，也能让自己轻松。', khi:'Nêu thêm lợi ích của việc tha thứ.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要学会原谅，就能拥有更多的幸福。', khi:'Câu KẾT — rút ra bài học.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['而不强调思考','单纯地主张阅读','是片面的'],
     dap:'单纯地主张阅读而不强调思考是片面的。',
     vn:'Chỉ đơn thuần cổ xuý việc đọc mà không nhấn mạnh việc suy nghĩ là phiến diện.',
     giai:'Câu 29 sách bài tập. Cụm chủ ngữ "A 而 不B" (单纯地主张阅读而不强调思考) → vị ngữ 是片面的.'},
    {manh:['很多有价值的建议','他为公司','提供了'],
     dap:'他为公司提供了很多有价值的建议。',
     vn:'Anh ấy đã đưa ra cho công ty nhiều đề xuất có giá trị.',
     giai:'Câu 30 sách bài tập. Chủ ngữ + 为 + đối tượng → 提供了 → tân ngữ 很多有价值的建议.'},
    {manh:['男女不平等的现象','仍然存在着','现在'],
     dap:'现在仍然存在着男女不平等的现象。',
     vn:'Hiện nay vẫn còn tồn tại hiện tượng nam nữ không bình đẳng.',
     giai:'Câu 31 sách bài tập. Câu tồn hiện: thời gian (现在) + 仍然存在着 + sự vật tồn tại.'},
    {manh:['就不能更改了','一旦','资料','提交'],
     dap:'资料一旦提交，就不能更改了。',
     vn:'Hồ sơ một khi đã nộp thì không sửa được nữa.',
     giai:'Chủ ngữ 资料 đứng trước 一旦; vế sau 就 + kết quả.'},
    {manh:['是难免的','刚开始工作时','犯这样的错误'],
     dap:'刚开始工作时犯这样的错误是难免的。',
     vn:'Mới bắt đầu đi làm mà mắc lỗi như vậy là khó tránh khỏi.',
     giai:'Cụm thời gian + sự việc (刚开始工作时犯这样的错误) làm chủ ngữ → 是难免的.'},
    {manh:['就开始思考','自从','应该如何阅读','我听说了这件事'],
     dap:'自从我听说了这件事，就开始思考应该如何阅读。',
     vn:'Từ khi nghe chuyện này, tôi bắt đầu suy nghĩ nên đọc như thế nào.',
     giai:'自从 + sự việc quá khứ đứng đầu câu; 就开始 + V + tân ngữ (应该如何阅读).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 热身 2 và 话题讨论 của sách: 灰姑娘应该怎么做
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (阅读与思考 · 灰姑娘应该怎么做). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 一旦 · 对待 · 承认 · 难免 · 平等 · 疼爱 · 观点 · 强调.',
  questions:[
    {q_zh:'你读过《灰姑娘》这篇童话吗？简单地讲讲这个故事。',
     q_vn:'Em đã đọc truyện cổ tích "Cô bé Lọ Lem" chưa? Hãy kể ngắn gọn câu chuyện.',
     hint:'Kể theo trình tự: hoàn cảnh → vũ hội → kết thúc; dùng 一……就…… và 后来 / 最后',
     sample:'读过。灰姑娘的妈妈去世以后，继母和两个姐姐对她很不好。后来在仙女的帮助下，她去王宫参加了舞会，王子一看见她就爱上了她。最后王子找到了灰姑娘，他们幸福地生活在一起。',
     sample_vn:'Đọc rồi. Sau khi mẹ Lọ Lem mất, mẹ kế và hai người chị đối xử với cô rất tệ. Sau đó, nhờ bà tiên giúp, cô đến hoàng cung dự vũ hội, hoàng tử vừa nhìn thấy đã yêu cô. Cuối cùng hoàng tử tìm được Lọ Lem, họ sống hạnh phúc bên nhau.',
     note:'Câu hỏi 1 trong 话题讨论 của sách. Kể chuyện cần từ nối thời gian (后来, 最后) để mạch lạc.'},
    {q_zh:'如果你是灰姑娘，成为王子的心上人并进入王宫以后，你会怎么对待继母和姐姐？',
     q_vn:'Nếu em là Lọ Lem, sau khi trở thành người trong mộng của hoàng tử và vào hoàng cung, em sẽ đối xử với mẹ kế và các chị thế nào?',
     hint:'Nêu rõ lựa chọn + lý do, dùng 虽然……但是…… và 对待',
     sample:'我会原谅她们。虽然她们以前对我不好，但是我已经拥有了巨大的幸福，没必要再生气。我会平等地对待她们，希望一家人能好好相处。',
     sample_vn:'Tôi sẽ tha thứ cho họ. Tuy trước đây họ đối xử không tốt với tôi, nhưng tôi đã có hạnh phúc to lớn rồi, không cần phải giận nữa. Tôi sẽ đối xử bình đẳng với họ, mong cả nhà có thể sống hoà thuận.',
     note:'Câu hỏi 2 của sách. Dùng lại ý kết luận của bài khoá (拥有巨大幸福的人应该原谅……).'},
    {q_zh:'作者认为应该承认人性中一些先天的不完美，你同意他的看法吗？',
     q_vn:'Tác giả cho rằng nên thừa nhận một số điểm chưa hoàn hảo bẩm sinh trong bản tính con người, em có đồng ý không?',
     hint:'Trả lời 同意 / 不同意 rồi đưa ví dụ, dùng 难免',
     sample:'我同意。每个人都有缺点，父母难免会更疼爱自己亲生的孩子，这是很自然的事。承认这一点，我们就能更客观地看问题，也更容易理解别人。',
     sample_vn:'Tôi đồng ý. Ai cũng có khuyết điểm, cha mẹ khó tránh khỏi thương con ruột của mình hơn, đó là chuyện rất tự nhiên. Thừa nhận điều này, chúng ta sẽ nhìn vấn đề khách quan hơn và dễ thông cảm cho người khác hơn.',
     note:'Câu hỏi 3 của sách. Nêu quan điểm → ví dụ → hệ quả là bố cục nói gọn và chắc.'},
    {q_zh:'你喜欢写作文吗？你觉得有哪些提高写作水平的好方法？',
     q_vn:'Em có thích viết văn không? Em thấy có những cách hay nào để nâng cao khả năng viết?',
     hint:'Nêu 2 cách cụ thể, dùng 不仅……也…… hoặc 不能过分……',
     sample:'我挺喜欢写作文的。我觉得多读书很重要，但是不能过分强调阅读，还要多思考、多练习。读完一本书以后，我会写一写自己的观点，这样作文水平提高得很快。',
     sample_vn:'Tôi khá thích viết văn. Tôi thấy đọc nhiều sách rất quan trọng, nhưng không thể quá nhấn mạnh việc đọc, mà còn phải suy nghĩ nhiều, luyện nhiều. Đọc xong một cuốn sách, tôi sẽ viết ra quan điểm của mình, như vậy khả năng viết tiến bộ rất nhanh.',
     note:'Câu hỏi 2 của phần 热身. Liên hệ ý chính của bài khoá: đọc thôi chưa đủ, phải suy nghĩ.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 22.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第22课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'老师，我们孩子平时很爱看书，为什么作文还是写不好？'},
            {sp:'男',zh:'认为只要多读书就能把作文写好，这个观点是不全面的。'}],
     q:'老师的看法是什么？',qvn:'Ý kiến của thầy giáo là gì?',
     opts:['孩子应该多看书','孩子平时不爱看书','作文是很难写好的','只靠多读书写不好作文'],ans:3,
     why:'这个观点是不全面的 — thầy cho rằng "chỉ cần đọc nhiều là viết văn hay" là quan điểm không toàn diện, đúng ý bài khoá.',
     words:['作文','观点','全面']},

    {n:2,
     lines:[{sp:'男',zh:'网上报名的资料，你得仔细看看。要知道，一旦提交，就不能更改了。'},
            {sp:'女',zh:'放心吧，我看了好几遍了。'}],
     q:'男的为什么让女的多看看资料？',qvn:'Vì sao người đàn ông bảo cô ấy xem kỹ hồ sơ?',
     opts:['资料太多了','提交以后不能更改','网上报名很麻烦','女的看得太快'],ans:1,
     why:'一旦提交，就不能更改了 — một khi đã nộp thì không sửa được nữa.',
     words:['一旦']},

    {n:3,
     lines:[{sp:'女',zh:'儿子，你的毕业论文写得怎么样了？'},
            {sp:'男',zh:'论文好说，我已经找了资料，写了一大部分，再修改修改就差不多完了。'}],
     q:'男的的论文现在是什么情况？',qvn:'Luận văn của cậu con trai bây giờ thế nào?',
     opts:['还没开始写','已经写完了','快要完成了','找不到资料'],ans:2,
     why:'写了一大部分，再修改修改就差不多完了 — đã viết phần lớn, sửa thêm là gần xong. 论文 là từ phần 扩展 写作表达.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'你不是不喜欢儿子找的那个女孩儿吗？'},
            {sp:'女',zh:'孩子大了，有自己的主张了，我有什么办法？'}],
     q:'女的是什么语气？',qvn:'Người phụ nữ nói với giọng thế nào?',
     opts:['无奈','高兴','生气','怀疑'],ans:0,
     why:'我有什么办法？ là câu hỏi tu từ = chẳng làm gì được → giọng bất lực, đành chịu (无奈).',
     words:['主张']},

    {n:5,
     lines:[{sp:'女',zh:'这计划我都做了四次了，还是觉得不满意。'},
            {sp:'男',zh:'没有真正完美的计划，先干着吧。'}],
     q:'男的对这个计划有什么看法？',qvn:'Người đàn ông nghĩ gì về kế hoạch này?',
     opts:['还需要再改改','已经非常完美了','不用追求完美，先做起来','应该重新做一个'],ans:2,
     why:'没有真正完美的计划，先干着吧 — không có kế hoạch nào hoàn hảo, cứ bắt tay làm đã.',
     words:['完美']},

    {n:6,
     lines:[{sp:'男',zh:'这本书的主题是你感兴趣的吧？'},
            {sp:'女',zh:'对，但是我翻了翻目录，觉得没什么意思，还不如去看几篇论文。'}],
     q:'他们在谈论什么？',qvn:'Họ đang nói về cái gì?',
     opts:['一本书','一篇论文','一个题目','一次考试'],ans:0,
     why:'Cả hai câu đều nói về 这本书 (chủ đề, mục lục của cuốn sách). 论文 chỉ được nhắc để so sánh. 主题, 目录, 论文 là từ phần 扩展.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'对不起，小说不在这儿，你可以去二层借。'},
            {sp:'男',zh:'二层借书处的老师告诉我，新书都在一层的阅览室。'},
            {sp:'女',zh:'哦，一层有两个阅览室，我们这边只有理科方面的书，文科的在那一头。'},
            {sp:'男',zh:'好的，谢谢。'}],
     q:'说话人现在在哪儿？',qvn:'Người nói hiện đang ở đâu?',
     opts:['二层借书处','一层文科阅览室','一层理科阅览室','学校书店'],ans:2,
     why:'我们这边只有理科方面的书 — "bên chúng tôi" chỉ có sách khoa học tự nhiên → đang ở phòng đọc khối tự nhiên tầng 1. Bẫy: 二层 là nơi anh vừa đến.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'你这次考试怎么考得这么差？是不是考前没复习，还是身体不好？'},
            {sp:'女',zh:'都不是，我就是考试时太紧张了。'},
            {sp:'男',zh:'是吗？考试时紧张是难免的，但没想到影响会这么大。'},
            {sp:'女',zh:'我下次想办法调整。'}],
     q:'女的为什么没考好？',qvn:'Vì sao cô gái thi không tốt?',
     opts:['考前没复习','考试时太紧张','身体不好','题目太难'],ans:1,
     why:'都不是，我就是考试时太紧张了 — phủ định cả hai lý do anh đoán, nguyên nhân là quá căng thẳng.',
     words:['难免']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp định bấm nộp ngay hồ sơ đăng ký thi trên mạng mà chưa kiểm tra lại.',
     a:{sp:'Bạn',zh:'好了，我现在就点“提交”！',vn:'Xong rồi, tớ bấm "Nộp" luôn đây!'},
     need:['Dùng 一旦……就……','Nhắc bạn kiểm tra kỹ'],
     sample:'等一下，你再仔细看看吧，资料一旦提交，就不能更改了。',
     samplePy:'Děng yíxià, nǐ zài zǐxì kànkan ba, zīliào yídàn tíjiāo, jiù bù néng gēnggǎi le.',
     sampleVn:'Khoan đã, cậu xem kỹ lại đi, hồ sơ một khi đã nộp thì không sửa được nữa đâu.',
     tip:'一旦 đứng sau chủ ngữ 资料; vế sau phải có 就. Đúng dạng câu nghe 2 của sách bài tập.'},

    {scene:'Em họ lớp 10 buồn vì lần đầu thuyết trình trước lớp bị run.',
     a:{sp:'Em họ',zh:'我第一次在全班面前演讲，紧张得说不出话来，太丢人了！',vn:'Lần đầu em thuyết trình trước cả lớp, run đến mức nói không nên lời, xấu hổ quá!'},
     need:['Dùng 难免','An ủi, động viên'],
     sample:'别难过，第一次上台，紧张是难免的，多练几次就好了。',
     samplePy:'Bié nánguò, dì-yī cì shàngtái, jǐnzhāng shì nánmiǎn de, duō liàn jǐ cì jiù hǎo le.',
     sampleVn:'Đừng buồn, lần đầu lên bục thì căng thẳng là khó tránh, luyện thêm vài lần là ổn thôi.',
     tip:'是难免的 hoặc 难免会紧张 — đúng dạng 练一练 của sách (完成对话 dùng 难免).'},

    {scene:'Bạn mới quen hỏi quan hệ của em với bạn cùng phòng ký túc xá bây giờ thế nào.',
     a:{sp:'Bạn',zh:'你跟你同屋现在的关系怎么样？',vn:'Bây giờ cậu với bạn cùng phòng quan hệ thế nào?'},
     need:['Dùng 自从','Kể một sự thay đổi'],
     sample:'刚开始我们常常吵架，自从一起参加了篮球比赛，我们就成了好朋友。',
     samplePy:'Gāng kāishǐ wǒmen chángcháng chǎojià, zìcóng yìqǐ cānjiāle lánqiú bǐsài, wǒmen jiù chéngle hǎo péngyou.',
     sampleVn:'Lúc đầu bọn tớ hay cãi nhau, từ khi cùng tham gia giải bóng rổ thì thành bạn thân luôn.',
     tip:'自从 + sự việc QUÁ KHỨ (参加了); vế sau dùng 就. Đây chính là câu 练一练 (3) của mục 自从.'},

    {scene:'Mẹ phàn nàn con đọc nhiều sách mà viết văn vẫn không hay.',
     a:{sp:'Mẹ',zh:'你每天看那么多书，作文怎么还是写不好？',vn:'Ngày nào con cũng đọc bao nhiêu sách, sao viết văn vẫn chưa hay?'},
     need:['Dùng 强调 hoặc 单纯','Nêu ý chính của bài khoá'],
     sample:'妈，单纯地多读书是不够的，老师强调读完以后还要思考，我以后会多写读书笔记。',
     samplePy:'Mā, dānchún de duō dú shū shì bú gòu de, lǎoshī qiángdiào dúwán yǐhòu hái yào sīkǎo, wǒ yǐhòu huì duō xiě dúshū bǐjì.',
     sampleVn:'Mẹ ơi, chỉ đọc nhiều thôi thì chưa đủ, cô giáo nhấn mạnh đọc xong còn phải suy nghĩ, sau này con sẽ viết nhiều ghi chép đọc sách hơn.',
     tip:'单纯(地) + V = chỉ đơn thuần …; 强调 + mệnh đề. Không nói 强调地.'},

    {scene:'Bạn thân từng bị một bạn khác nói xấu, nay bạn kia đến xin lỗi.',
     a:{sp:'Bạn thân',zh:'他以前那样说我，现在来道歉，我该原谅他吗？',vn:'Trước đây nó nói xấu tớ như thế, giờ đến xin lỗi, tớ có nên tha thứ không?'},
     need:['Dùng 承认 hoặc 对待','Đưa ra lời khuyên'],
     sample:'他已经承认了自己的错误，你就原谅他吧，以后还是友好地对待他。',
     samplePy:'Tā yǐjīng chéngrènle zìjǐ de cuòwù, nǐ jiù yuánliàng tā ba, yǐhòu háishi yǒuhǎo de duìdài tā.',
     sampleVn:'Nó đã thừa nhận lỗi rồi, cậu tha thứ cho nó đi, sau này vẫn cư xử thân thiện với nó.',
     tip:'承认 + 错误; 友好地 + 对待. Liên hệ kết luận của bài: người hạnh phúc nên biết tha thứ.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài văn nghị luận nộp thầy giáo.',
     a:'如果只是单纯地主张阅读而不强调思考，那是片面的。',b:'光看书不动脑子，那可不行。',better:'a',
     why:'Văn nghị luận cần giọng văn viết: 单纯地主张, 强调思考, 片面. Câu b là khẩu ngữ (光, 动脑子, 可不行).'},

    {scene:'Em giải thích cho em trai 8 tuổi vì sao đọc truyện xong nên suy nghĩ.',
     a:'看完故事，你也想一想：要是你是灰姑娘，你会怎么做？',b:'阅读时应当强调思考，从而形成正确的价值判断。',better:'a',
     why:'Nói với trẻ nhỏ cần câu hỏi gần gũi, cụ thể. Câu b đúng tinh thần bài khoá nhưng quá sách vở (应当, 从而, 价值判断).'},

    {scene:'Trong buổi thảo luận trên lớp, em muốn phản bác ý kiến của một bạn.',
     a:'我不太同意你的观点，我认为这个看法不够全面。',b:'你说得不对，你根本不懂！',better:'a',
     why:'Thảo luận cần lịch sự, nói "không đồng ý với quan điểm" chứ không phủ nhận con người. Câu b dễ gây cãi nhau.'},

    {scene:'Em nhắn tin xin lỗi bạn thân vì lỡ hẹn hôm qua.',
     a:'对不起啊，昨天是我不好，下次请你喝奶茶！',b:'本人承认昨日未能按约定时间到达，特此致歉。',better:'a',
     why:'Với bạn thân dùng giọng thân mật. Câu b (本人, 昨日, 特此致歉) như văn bản hành chính, nghe rất xa cách.'},

    {scene:'Thông báo chính thức của nhà trường về cuộc thi viết văn.',
     a:'本次作文比赛将坚持公平、公正的原则，欢迎同学们积极参加。',b:'这次作文比赛绝对公平，大家快来参加吧！',better:'a',
     why:'Thông báo chính thức dùng 本次, 坚持……的原则, 欢迎……积极参加. Câu b giống lời rủ rê của bạn bè.'},

    {scene:'Em trấn an bà khi bà lo em căng thẳng trước kỳ thi.',
     a:'奶奶，考试紧张是难免的，您别担心，我没事儿。',b:'奶奶，考前焦虑属于正常心理现象，无须过分担忧。',better:'a',
     why:'Nói với bà cần giản dị, ấm áp. Câu b (属于正常心理现象, 无须) nghe như bác sĩ tâm lý đọc báo cáo.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 45)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Quan niệm của phụ huynh', cue:'很多家长可能过分强调……，觉得……。这个观点……，我们需要……', words:['过分','强调','作文','观点','客观','全面','转变','观念']},
    {step:'Giáo viên Mỹ và truyện Lọ Lem', cue:'一位美国的小学老师和学生讨论过……。老师问：灰姑娘一旦……，应该怎样对待……？', words:['卖火柴的小女孩儿','灰姑娘','一旦','王宫','王子','属于','对待']},
    {step:'Kết luận thứ nhất', cue:'这是一种情感交换。拥有巨大幸福的人应该……', words:['交换','拥有','巨大']},
    {step:'Kết luận thứ hai', cue:'还要承认人性中……，作为母亲难免……，很难……。继母的行为有……的理由', words:['承认','人性','完美','难免','疼爱','平等','自私','倾向','理由','道德']},
    {step:'Suy nghĩ của tác giả', cue:'自从听说了这件事，我开始思考……。老师在讲童话时……。单纯地主张阅读……', words:['自从','童话','价值','单纯','主张']},
    {step:'Tri thức = tri + thức', cue:'“知”就是……，“识”就是……。只有知感是不够的……', words:['知感']}
  ],
  checklist: [
    'Kể đủ ba phần như bảng của sách chưa: quan niệm của phụ huynh → cuộc thảo luận về Lọ Lem → suy nghĩ của tác giả?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng đúng 一旦 (một khi …), 难免 (khó tránh khỏi) và 自从 (từ khi …) không?',
    'Có nói được hai kết luận của cuộc thảo luận (tha thứ; thừa nhận bản tính chưa hoàn hảo) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 44–45) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['承认','过分','价值','客观','理由','主张'],
   cau:[
     {s:'虽然这次的错误有点儿严重，但你应该勇敢地＿＿。', dap:['承认']},
     {s:'人都是有感情甚至自私的，很难做到任何时候都很＿＿。', dap:['客观']},
     {s:'你的这个建议很有＿＿，我马上告诉总裁。', dap:['价值']},
     {s:'他＿＿将会议地点改在上海，因为这次的合作伙伴对我们来说非常重要。', dap:['主张']},
     {s:'你这种做法太＿＿了，我不能接受！', dap:['过分']},
     {s:'希望你能给我一个好的＿＿，解释清楚你为什么这么做。', dap:['理由']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'你可以试着＿＿一下思路，可能会快一点解决问题。', opts:['变化','转变'], ans:1, giai:'转变 + 思路: chủ động thay đổi cái trừu tượng (转变方法 / 方式 / 观念 / 思路 / 态度). 变化 thường không mang tân ngữ như vậy.'},
     {s:'我不同意你的＿＿，我觉得这部电影很不错。', opts:['观点','观念'], ans:0, giai:'Ý kiến cụ thể về một bộ phim, đi với 同意 → 观点. 观念 là quan niệm lâu dài (传统观念, 时间观念).'},
     {s:'这次新产品销售得不好的＿＿是宣传推广做得不够。', opts:['原因','理由'], ans:0, giai:'Nguyên nhân khách quan dẫn tới kết quả "bán không chạy" → 原因. 理由 là lý lẽ con người đưa ra để biện minh.'},
     {s:'他太＿＿了，这样很容易被人骗。', opts:['单调','单纯'], ans:1, giai:'Ngây thơ, đơn giản nên dễ bị lừa → 单纯. 单调 = đơn điệu, tẻ nhạt (生活很单调).'}
   ]}
];
