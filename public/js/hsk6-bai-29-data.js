// ══════════════════════════════════════════
// DATA — HSK6 Bài 29: “笑”的备忘录 (Bản ghi nhớ về tiếng cười)
// 第八单元 人体探秘 · Nguồn: HSK标准教程6下 (tr. 92–102)
// Bài khoá: “笑”的备忘录 (1154 chữ) — (一) 大脑能“听”出笑声的真假 · (二) 笑未必是最佳良药
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'备忘录',py:'bèiwànglù',pos:'Danh từ',vn:'bản ghi nhớ, sổ ghi nhớ',hv:'bị vong lục',em:'📝',lesson:1,
   explain:['Văn bản / cuốn sổ ghi lại những điều cần nhớ để khỏi quên: 备 = phòng bị, 忘 = quên, 录 = ghi chép. Trên điện thoại, ứng dụng "Ghi chú" cũng gọi là 备忘录.','Còn là văn bản ngoại giao, thương mại ghi lại nội dung đã thoả thuận: 合作备忘录 (bản ghi nhớ hợp tác). Tên bài 《“笑”的备忘录》 = những điều cần ghi nhớ về tiếng cười.'],
   usage:'写 / 记在 + 备忘录 + 上 / 里; 签订 / 签署 + 合作备忘录; 手机备忘录. Lượng từ: 份 / 本.',
   collo:['“笑”的备忘录','手机备忘录','记在备忘录上','签署备忘录'],
   ex_zh:'“笑”的备忘录',ex_py:'“Xiào” de bèiwànglù',ex_vn:'Bản ghi nhớ về "cười"',
   exList:[
     {zh:'这篇课文的题目叫《“笑”的备忘录》，讲的是跟笑有关的科学知识。',py:'Zhè piān kèwén de tímù jiào 《“Xiào” de Bèiwànglù》, jiǎng de shì gēn xiào yǒuguān de kēxué zhīshi.',vn:'Bài khoá này có nhan đề "Bản ghi nhớ về tiếng cười", nói về những kiến thức khoa học liên quan đến cười.'},
     {zh:'我怕忘了考试时间，就把它记在了手机备忘录里。',py:'Wǒ pà wàngle kǎoshì shíjiān, jiù bǎ tā jì zàile shǒujī bèiwànglù li.',vn:'Tôi sợ quên giờ thi nên đã ghi vào ứng dụng ghi chú trên điện thoại.'},
     {zh:'两国在会上签署了一份文化交流合作备忘录。',py:'Liǎng guó zài huì shang qiānshǔle yí fèn wénhuà jiāoliú hézuò bèiwànglù.',vn:'Hai nước đã ký một bản ghi nhớ hợp tác giao lưu văn hoá tại hội nghị.'}
   ],
   colloFull:[
     {zh:'“笑”的备忘录',py:'“xiào” de bèiwànglù',vn:'bản ghi nhớ về tiếng cười'},
     {zh:'手机备忘录',py:'shǒujī bèiwànglù',vn:'ghi chú trên điện thoại'},
     {zh:'记在备忘录上',py:'jì zài bèiwànglù shang',vn:'ghi vào sổ ghi nhớ'},
     {zh:'签署备忘录',py:'qiānshǔ bèiwànglù',vn:'ký bản ghi nhớ'},
     {zh:'合作备忘录',py:'hézuò bèiwànglù',vn:'bản ghi nhớ hợp tác'}
   ],
   patterns:[
     {s:'把 + 事 + 记在 + 备忘录 + 里 / 上',m:'Ghi việc gì vào sổ ghi nhớ để khỏi quên'},
     {s:'签署 / 签订 + (一份) + ……备忘录',m:'Ký một bản ghi nhớ (ngoại giao, hợp tác)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để khỏi quên sinh nhật bạn bè, tôi ghi hết vào sổ ghi nhớ.',answer:'为了不忘记朋友们的生日，我把它们都记在了备忘录里。',answerPy:'Wèile bú wàngjì péngyoumen de shēngrì, wǒ bǎ tāmen dōu jì zàile bèiwànglù li.',
      note:'为了…… nêu mục đích; câu 把 + V + 在 + nơi chốn (ôn HSK 4).',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Có ghi chú trên điện thoại rồi thì cậu sẽ không quên nữa đâu.',answer:'有了手机备忘录，你就不会再忘了。',answerPy:'Yǒule shǒujī bèiwànglù, nǐ jiù bú huì zài wàng le.',
      note:'有了……，就…… (điều kiện); 不会再…… = sẽ không … nữa (ôn HSK 4).',pair:'有了……就……'}
   ]},

  {n:2,zh:'岂有此理',py:'qǐyǒucǐlǐ',pos:'Thành ngữ',vn:'há có lý nào như thế, thật vô lý hết sức',hv:'khởi hữu thử lý',em:'😤',lesson:1,
   explain:['Nguyên nghĩa: "há có cái lý ấy sao?" (岂 = há, lẽ nào; 此理 = lý này). Dùng để bày tỏ sự BẤT BÌNH, tức giận trước một việc hoàn toàn vô lý.','Thường đứng độc lập như một câu cảm thán: 真是岂有此理！ hoặc làm vị ngữ: 这简直岂有此理. Sắc thái mạnh, văn nói lẫn văn viết.'],
   usage:'真是 / 简直 + 岂有此理！; ……，岂有此理！; 哪有这样的道理 = 岂有此理 (练习2).',
   collo:['真是岂有此理','简直岂有此理','岂有此理！','太岂有此理了'],
   ex_zh:'真是岂有此理，难道我们听到庸俗、不上档次的笑话假笑两声、敷衍一下也不可以吗？',ex_py:'Zhēn shì qǐyǒucǐlǐ, nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng, fūyǎn yíxià yě bù kěyǐ ma?',ex_vn:'Thật là vô lý hết sức, lẽ nào nghe một câu chuyện cười tầm thường, kém cỏi mà ta cười giả vài tiếng, đối phó một chút cũng không được sao?',
   exList:[
     {zh:'真是岂有此理，难道我们听到庸俗、不上档次的笑话假笑两声、敷衍一下也不可以吗？',py:'Zhēn shì qǐyǒucǐlǐ, nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng, fūyǎn yíxià yě bù kěyǐ ma?',vn:'Thật là vô lý hết sức, lẽ nào nghe chuyện cười tầm thường, kém cỏi mà cười giả vài tiếng, đối phó một chút cũng không được sao?'},
     {zh:'付出艰苦努力的人什么都没得到，岂有此理！',py:'Fùchū jiānkǔ nǔlì de rén shénme dōu méi dédào, qǐyǒucǐlǐ!',vn:'Người bỏ ra bao công sức gian khổ lại chẳng được gì, thật vô lý hết sức!'},
     {zh:'他借了钱不还，还说是我欠他的，简直岂有此理！',py:'Tā jièle qián bù huán, hái shuō shì wǒ qiàn tā de, jiǎnzhí qǐyǒucǐlǐ!',vn:'Anh ta vay tiền không trả, lại còn bảo là tôi nợ anh ta, đúng là vô lý hết chỗ nói!'}
   ],
   colloFull:[
     {zh:'真是岂有此理',py:'zhēn shì qǐyǒucǐlǐ',vn:'thật là vô lý hết sức'},
     {zh:'简直岂有此理',py:'jiǎnzhí qǐyǒucǐlǐ',vn:'quả thực vô lý hết chỗ nói'},
     {zh:'岂有此理！',py:'qǐyǒucǐlǐ!',vn:'vô lý quá!'},
     {zh:'太岂有此理了',py:'tài qǐyǒucǐlǐ le',vn:'vô lý quá đi mất'},
     {zh:'这种岂有此理的事',py:'zhè zhǒng qǐyǒucǐlǐ de shì',vn:'chuyện vô lý như thế này'}
   ],
   patterns:[
     {s:'(真是 / 简直) + 岂有此理！',m:'Câu cảm thán bày tỏ sự bất bình'},
     {s:'Sự việc vô lý，岂有此理！',m:'Kể việc trước, đánh giá "thật vô lý" sau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta chép bài của tớ mà lại được điểm cao hơn tớ, thật vô lý hết sức!',answer:'他抄了我的作业，分数居然比我还高，真是岂有此理！',answerPy:'Tā chāole wǒ de zuòyè, fēnshù jūrán bǐ wǒ hái gāo, zhēn shì qǐyǒucǐlǐ!',
      note:'居然 = vậy mà (bất ngờ); A 比 B 还 + Adj (ôn HSK 4–5).',pair:'比……还……'},
     {promptLang:'vi',prompt:'Rõ ràng là anh ta sai, vậy mà lại bắt người khác xin lỗi, vô lý quá!',answer:'明明是他错了，却要别人道歉，岂有此理！',answerPy:'Míngmíng shì tā cuò le, què yào biérén dàoqiàn, qǐyǒucǐlǐ!',
      note:'明明……，却…… = rõ ràng … vậy mà … (ôn HSK 6 bài 6).',pair:'明明……却……'}
   ]},

  {n:3,zh:'庸俗',py:'yōngsú',pos:'Tính từ',vn:'tầm thường, thông tục, dung tục',hv:'dung tục',em:'🙄',lesson:1,
   explain:['Tầm thường, thấp kém, thiếu tinh tế, không cao nhã: 庸 = tầm thường, 俗 = tục. Dùng để chê nội dung, sở thích, lối sống: 庸俗的笑话 / 趣味 / 作风.','Mang sắc thái chê bai rõ; trái nghĩa với 高雅 (cao nhã). Khác 通俗 (dễ hiểu, phổ thông — HSK 6 bài 23) là trung tính / khen.'],
   usage:'庸俗的 + 笑话 / 趣味 / 作品 / 广告; 内容 + 庸俗; 低级庸俗; 庸俗 ↔ 高雅.',
   collo:['庸俗的笑话','内容庸俗','低级庸俗','庸俗的趣味'],
   ex_zh:'难道我们听到庸俗、不上档次的笑话假笑两声……也不可以吗？',ex_py:'Nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng…… yě bù kěyǐ ma?',ex_vn:'Lẽ nào nghe chuyện cười tầm thường, kém cỏi mà cười giả vài tiếng… cũng không được sao?',
   exList:[
     {zh:'难道我们听到庸俗、不上档次的笑话假笑两声、敷衍一下也不可以吗？',py:'Nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng, fūyǎn yíxià yě bù kěyǐ ma?',vn:'Lẽ nào nghe chuyện cười tầm thường, kém cỏi mà cười giả vài tiếng, đối phó một chút cũng không được sao?'},
     {zh:'这部电影内容庸俗，只靠几个明星吸引观众。',py:'Zhè bù diànyǐng nèiróng yōngsú, zhǐ kào jǐ ge míngxīng xīyǐn guānzhòng.',vn:'Bộ phim này nội dung tầm thường, chỉ dựa vào mấy ngôi sao để hút khán giả.'},
     {zh:'老师提醒我们，不要在网上传播低级庸俗的视频。',py:'Lǎoshī tíxǐng wǒmen, búyào zài wǎng shang chuánbō dījí yōngsú de shìpín.',vn:'Thầy giáo nhắc chúng tôi đừng lan truyền những video thấp kém, dung tục trên mạng.'}
   ],
   colloFull:[
     {zh:'庸俗的笑话',py:'yōngsú de xiàohua',vn:'chuyện cười tầm thường'},
     {zh:'内容庸俗',py:'nèiróng yōngsú',vn:'nội dung dung tục'},
     {zh:'低级庸俗',py:'dījí yōngsú',vn:'thấp kém, dung tục'},
     {zh:'庸俗的趣味',py:'yōngsú de qùwèi',vn:'thú vui tầm thường'},
     {zh:'庸俗的广告',py:'yōngsú de guǎnggào',vn:'quảng cáo dung tục'}
   ],
   patterns:[
     {s:'庸俗的 + N (笑话 / 趣味 / 作品)',m:'… tầm thường, dung tục'},
     {s:'N + 内容 / 风格 + 庸俗',m:'Nội dung / phong cách của cái gì đó tầm thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chương trình này tuy nhiều người xem, nhưng nội dung khá tầm thường.',answer:'这个节目虽然看的人很多，但是内容比较庸俗。',answerPy:'Zhège jiémù suīrán kàn de rén hěn duō, dànshì nèiróng bǐjiào yōngsú.',
      note:'虽然……但是…… nhượng bộ (ôn HSK 4).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Thay vì xem những video dung tục đó, chi bằng đọc thêm vài cuốn sách hay.',answer:'与其看那些庸俗的视频，不如多读几本好书。',answerPy:'Yǔqí kàn nàxiē yōngsú de shìpín, bùrú duō dú jǐ běn hǎo shū.',
      note:'与其 A，不如 B = thay vì A chi bằng B (ôn HSK 5).',pair:'与其……不如……'}
   ]},

  {n:4,zh:'档次',py:'dàngcì',pos:'Danh từ',vn:'đẳng cấp, cấp bậc, mức (chất lượng)',hv:'đáng thứ',em:'🏷️',lesson:1,
   explain:['Cấp bậc, thứ hạng được phân theo chất lượng, giá trị: 高档次 / 低档次. 档 = ngăn, cấp; 次 = thứ bậc.','Khẩu ngữ hay nói 上档次 (có đẳng cấp, sang) và 不上档次 (kém, xoàng, không ra gì). 拉开档次 = tạo khoảng cách về mức (lương, giá).'],
   usage:'上 / 不上 + 档次; 档次 + 高 / 低; 提高 + 档次; 不同档次的 + N; 拉开档次.',
   collo:['不上档次','档次很高','提高档次','不同档次'],
   ex_zh:'庸俗、不上档次的笑话',ex_py:'yōngsú, bú shàng dàngcì de xiàohua',ex_vn:'những câu chuyện cười tầm thường, kém cỏi',
   exList:[
     {zh:'难道我们听到庸俗、不上档次的笑话假笑两声也不可以吗？',py:'Nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng yě bù kěyǐ ma?',vn:'Lẽ nào nghe chuyện cười tầm thường, kém cỏi mà cười giả vài tiếng cũng không được sao?'},
     {zh:'这家饭店的档次很高，一顿饭至少要花五百块。',py:'Zhè jiā fàndiàn de dàngcì hěn gāo, yí dùn fàn zhìshǎo yào huā wǔbǎi kuài.',vn:'Nhà hàng này đẳng cấp rất cao, một bữa ăn ít nhất phải tốn năm trăm tệ.'},
     {zh:'商场里有不同档次的衣服，价格从几十元到几千元都有。',py:'Shāngchǎng li yǒu bù tóng dàngcì de yīfu, jiàgé cóng jǐshí yuán dào jǐqiān yuán dōu yǒu.',vn:'Trong trung tâm thương mại có quần áo đủ các mức, giá từ vài chục đến vài nghìn tệ.'}
   ],
   colloFull:[
     {zh:'不上档次',py:'bú shàng dàngcì',vn:'kém, xoàng, không ra gì'},
     {zh:'档次很高',py:'dàngcì hěn gāo',vn:'đẳng cấp rất cao'},
     {zh:'提高档次',py:'tígāo dàngcì',vn:'nâng cao đẳng cấp'},
     {zh:'不同档次',py:'bù tóng dàngcì',vn:'các mức khác nhau'},
     {zh:'拉开档次',py:'lākāi dàngcì',vn:'tạo chênh lệch về mức'}
   ],
   patterns:[
     {s:'(不) + 上档次',m:'(Không) có đẳng cấp, sang / xoàng'},
     {s:'N + 的档次 + 很高 / 很低',m:'Đẳng cấp của cái gì cao / thấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ quần áo này tuy rẻ, nhưng mặc vào trông rất sang.',answer:'这套衣服虽然便宜，但是穿起来很上档次。',answerPy:'Zhè tào yīfu suīrán piányi, dànshì chuān qǐlai hěn shàng dàngcì.',
      note:'V + 起来 = khi làm thử thì … (đánh giá); 虽然……但是…… (ôn HSK 4).',pair:'V起来'},
     {promptLang:'vi',prompt:'Chỉ cần đổi bao bì một chút là đẳng cấp của sản phẩm sẽ được nâng lên.',answer:'只要把包装改一改，产品的档次就能提高。',answerPy:'Zhǐyào bǎ bāozhuāng gǎi yi gǎi, chǎnpǐn de dàngcì jiù néng tígāo.',
      note:'只要……就…… điều kiện đủ; 包装 (ôn HSK 6 bài 14).',pair:'只要……就……'}
   ]},

  {n:5,zh:'诸位',py:'zhūwèi',pos:'Đại từ',vn:'các vị, quý vị',hv:'chư vị',em:'🙇',lesson:1,
   explain:['Đại từ nhân xưng lịch sự dùng để gọi nhiều người đang nghe: "các vị, quý vị" (诸 = các, nhiều; 位 = vị). Nghĩa và cách dùng giống 各位 (词语辨析 của bài).','Văn viết / phát biểu trang trọng: 诸位来宾 (quý vị khách quý), 诸位有何意见. Bài khoá dùng 诸位 để tác giả nói trực tiếp với người đọc.'],
   usage:'诸位 + (N chỉ người: 来宾 / 同学 / 朋友); 诸位 + 有何 / 有什么 + 意见; 请诸位…….',
   collo:['诸位来宾','诸位朋友','请诸位','诸位有何意见'],
   ex_zh:'诸位，如果你不想难堪……',ex_py:'Zhūwèi, rúguǒ nǐ bù xiǎng nánkān……',ex_vn:'Thưa quý vị, nếu bạn không muốn khó xử…',
   exList:[
     {zh:'诸位，如果你不想难堪，不想让别人发现你发出的是虚伪的笑声，你可以回避。',py:'Zhūwèi, rúguǒ nǐ bù xiǎng nánkān, bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi de xiàoshēng, nǐ kěyǐ huíbì.',vn:'Thưa quý vị, nếu bạn không muốn khó xử, không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, bạn có thể né tránh.'},
     {zh:'诸位有何意见，请尽量发表。',py:'Zhūwèi yǒu hé yìjiàn, qǐng jǐnliàng fābiǎo.',vn:'Quý vị có ý kiến gì xin cứ phát biểu.'},
     {zh:'诸位来宾，欢迎大家参加我校一百周年校庆。',py:'Zhūwèi láibīn, huānyíng dàjiā cānjiā wǒ xiào yìbǎi zhōunián xiàoqìng.',vn:'Kính thưa quý vị khách quý, chào mừng mọi người đến dự lễ kỷ niệm 100 năm thành lập trường chúng tôi.'}
   ],
   colloFull:[
     {zh:'诸位来宾',py:'zhūwèi láibīn',vn:'quý vị khách quý'},
     {zh:'诸位朋友',py:'zhūwèi péngyou',vn:'các bạn, quý vị'},
     {zh:'请诸位',py:'qǐng zhūwèi',vn:'xin mời quý vị'},
     {zh:'诸位有何意见',py:'zhūwèi yǒu hé yìjiàn',vn:'quý vị có ý kiến gì'},
     {zh:'感谢诸位',py:'gǎnxiè zhūwèi',vn:'cảm ơn quý vị'}
   ],
   patterns:[
     {s:'诸位 + (来宾 / 同学)，……',m:'Lời gọi mở đầu bài phát biểu trang trọng'},
     {s:'请诸位 + V',m:'Xin mời quý vị làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thưa quý vị, nếu không có ý kiến gì khác, buổi họp hôm nay xin kết thúc tại đây.',answer:'诸位，如果没有别的意见，今天的会就开到这里。',answerPy:'Zhūwèi, rúguǒ méiyǒu bié de yìjiàn, jīntiān de huì jiù kāi dào zhèlǐ.',
      note:'如果……就…… giả thiết (ôn HSK 3–4); 开到这里 = họp đến đây.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Cảm ơn quý vị đã bớt chút thời gian bận rộn đến tham dự lễ tốt nghiệp của chúng tôi.',answer:'感谢诸位在百忙之中来参加我们的毕业典礼。',answerPy:'Gǎnxiè zhūwèi zài bǎimáng zhīzhōng lái cānjiā wǒmen de bìyè diǎnlǐ.',
      note:'在百忙之中 = giữa lúc trăm công nghìn việc — cụm lịch sự hay đi với 诸位.',pair:'在……之中'}
   ]},

  {n:6,zh:'难堪',py:'nánkān',pos:'Tính từ',vn:'khó xử, lúng túng, bẽ mặt',hv:'nan kham',em:'😳',lesson:1,
   explain:['Cảm thấy xấu hổ, lúng túng, bẽ mặt trước người khác (tình cảnh khó chịu nổi): 让人难堪 / 感到难堪 / 难堪的场面.','Nghĩa gốc "khó chịu đựng" (堪 = chịu nổi): 难堪的日子. Khác 难为情 (ngượng, khẩu ngữ, nhẹ hơn) và 尴尬 (tình huống ngượng ngùng).'],
   usage:'让 / 使 + 人 + 难堪; 感到 + 难堪; 难堪的 + 场面 / 局面; 十分 / 非常 + 难堪.',
   collo:['不想难堪','让人难堪','感到难堪','难堪的场面'],
   ex_zh:'诸位，如果你不想难堪……你可以回避。',ex_py:'Zhūwèi, rúguǒ nǐ bù xiǎng nánkān…… nǐ kěyǐ huíbì.',ex_vn:'Thưa quý vị, nếu bạn không muốn khó xử… bạn có thể né tránh.',
   exList:[
     {zh:'诸位，如果你不想难堪，不想让别人发现你发出的是虚伪的笑声，你可以回避。',py:'Zhūwèi, rúguǒ nǐ bù xiǎng nánkān, bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi de xiàoshēng, nǐ kěyǐ huíbì.',vn:'Thưa quý vị, nếu bạn không muốn khó xử, không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, bạn có thể né tránh.'},
     {zh:'他当着全班同学的面批评我，让我感到十分难堪。',py:'Tā dāngzhe quán bān tóngxué de miàn pīpíng wǒ, ràng wǒ gǎndào shífēn nánkān.',vn:'Anh ấy phê bình tôi ngay trước mặt cả lớp, khiến tôi cảm thấy vô cùng bẽ mặt.'},
     {zh:'为了避免难堪的场面，她提前把话说清楚了。',py:'Wèile bìmiǎn nánkān de chǎngmiàn, tā tíqián bǎ huà shuō qīngchu le.',vn:'Để tránh tình huống khó xử, cô ấy đã nói rõ mọi chuyện từ trước.'}
   ],
   colloFull:[
     {zh:'不想难堪',py:'bù xiǎng nánkān',vn:'không muốn khó xử'},
     {zh:'让人难堪',py:'ràng rén nánkān',vn:'khiến người ta bẽ mặt'},
     {zh:'感到难堪',py:'gǎndào nánkān',vn:'cảm thấy lúng túng'},
     {zh:'难堪的场面',py:'nánkān de chǎngmiàn',vn:'tình huống khó xử'},
     {zh:'十分难堪',py:'shífēn nánkān',vn:'vô cùng khó xử'}
   ],
   patterns:[
     {s:'让 / 使 + 人 + (感到) + 难堪',m:'Khiến ai lúng túng, bẽ mặt'},
     {s:'为了避免 + 难堪 + ……',m:'Để tránh khó xử thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng hỏi thẳng điểm thi của cậu ấy, như thế sẽ khiến cậu ấy rất khó xử.',answer:'别当面问他的考试成绩，那样会让他很难堪。',answerPy:'Bié dāngmiàn wèn tā de kǎoshì chéngjì, nàyàng huì ràng tā hěn nánkān.',
      note:'当面 = trước mặt (HSK 6 bài 1); 那样 thay cho việc vừa nói (替代).',pair:'让……很……'},
     {promptLang:'vi',prompt:'Hễ nói sai là cậu ấy đỏ mặt, trông lúng túng lắm.',answer:'他一说错话就脸红，看起来非常难堪。',answerPy:'Tā yì shuōcuò huà jiù liǎn hóng, kàn qǐlai fēicháng nánkān.',
      note:'一……就…… (hễ … là …); 看起来 = trông có vẻ (ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:7,zh:'虚伪',py:'xūwěi',pos:'Tính từ',vn:'giả dối, giả tạo (không thật lòng)',hv:'hư nguỵ',em:'🎭',lesson:1,
   explain:['Không thật lòng, bề ngoài một đằng bụng một nẻo: 虚 = rỗng, giả; 伪 = nguỵ, giả. Chủ yếu nói về CON NGƯỜI, thái độ, tình cảm: 虚伪的人 / 笑容.','Sắc thái chê trách đạo đức mạnh; trái nghĩa 真诚 / 诚挚. So với 虚假 (giả, không đúng sự thật — nói về thông tin, số liệu), 虚伪 nhấn mặt tính cách.'],
   usage:'虚伪的 + 人 / 笑声 / 笑容 / 态度; 为人 + 虚伪; 虚伪 ↔ 真诚.',
   collo:['虚伪的笑声','虚伪的人','为人虚伪','虚伪的态度'],
   ex_zh:'不想让别人发现你发出的是虚伪、违背心意的笑声',ex_py:'bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi, wéibèi xīnyì de xiàoshēng',ex_vn:'không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, trái với lòng mình',
   exList:[
     {zh:'如果你不想让别人发现你发出的是虚伪、违背心意的笑声，你可以回避。',py:'Rúguǒ nǐ bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi, wéibèi xīnyì de xiàoshēng, nǐ kěyǐ huíbì.',vn:'Nếu bạn không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, trái với lòng mình, bạn có thể né tránh.'},
     {zh:'他当面说好话，背后说坏话，真是个虚伪的人。',py:'Tā dāngmiàn shuō hǎohuà, bèihòu shuō huàihuà, zhēn shì ge xūwěi de rén.',vn:'Trước mặt thì nói lời hay, sau lưng thì nói xấu, anh ta đúng là người giả dối.'},
     {zh:'与其说一些虚伪的客气话，不如直接说出自己的想法。',py:'Yǔqí shuō yìxiē xūwěi de kèqihuà, bùrú zhíjiē shuōchū zìjǐ de xiǎngfǎ.',vn:'Thay vì nói mấy câu khách sáo giả tạo, chi bằng nói thẳng suy nghĩ của mình.'}
   ],
   colloFull:[
     {zh:'虚伪的笑声',py:'xūwěi de xiàoshēng',vn:'tiếng cười giả tạo'},
     {zh:'虚伪的人',py:'xūwěi de rén',vn:'người giả dối'},
     {zh:'为人虚伪',py:'wéirén xūwěi',vn:'con người giả dối'},
     {zh:'虚伪的态度',py:'xūwěi de tàidu',vn:'thái độ giả tạo'},
     {zh:'虚伪的客气话',py:'xūwěi de kèqihuà',vn:'lời khách sáo giả tạo'}
   ],
   patterns:[
     {s:'虚伪的 + N (人 / 笑容 / 态度)',m:'… giả dối, không thật lòng'},
     {s:'看起来 / 显得 + 很虚伪',m:'Trông có vẻ giả tạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nụ cười của cô ta trông rất giả tạo, chẳng ai tin cô ta cả.',answer:'她的笑容看起来很虚伪，谁都不相信她。',answerPy:'Tā de xiàoróng kàn qǐlai hěn xūwěi, shéi dōu bù xiāngxìn tā.',
      note:'谁都不…… = không ai … (đại từ nghi vấn phiếm chỉ, ôn HSK 4).',pair:'谁都……'},
     {promptLang:'vi',prompt:'Tôi thà nói thật làm người ta không vui, chứ không muốn làm một kẻ giả dối.',answer:'我宁可说实话让人不高兴，也不愿意做一个虚伪的人。',answerPy:'Wǒ nìngkě shuō shíhuà ràng rén bù gāoxìng, yě bú yuànyì zuò yí ge xūwěi de rén.',
      note:'宁可……也不…… = thà … chứ không … (ôn HSK 5).',pair:'宁可……也不……'}
   ]},

  {n:8,zh:'违背',py:'wéibèi',pos:'Động từ',vn:'làm trái, đi ngược lại',hv:'vi bối',em:'🔄',lesson:1,
   explain:['Làm trái, không tuân theo (nguyên tắc, lời hứa, ý muốn, quy luật): 违 = trái, 背 = quay lưng. Tân ngữ thường trừu tượng: 违背心意 / 原则 / 诺言 / 规律 / 良心.','Văn viết, trang trọng. So với 违反 (vi phạm): 违反 hay đi với 法律 / 规定 / 纪律 (quy định cụ thể); 违背 hay đi với 意愿 / 诺言 / 良心 / 规律.'],
   usage:'违背 + 心意 / 意愿 / 诺言 / 原则 / 规律 / 良心; 违背……的 + N.',
   collo:['违背心意','违背诺言','违背原则','违背自然规律'],
   ex_zh:'虚伪、违背心意的笑声',ex_py:'xūwěi, wéibèi xīnyì de xiàoshēng',ex_vn:'tiếng cười giả dối, trái với lòng mình',
   exList:[
     {zh:'不想让别人发现你发出的是虚伪、违背心意的笑声。',py:'Bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi, wéibèi xīnyì de xiàoshēng.',vn:'Không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, trái với lòng mình.'},
     {zh:'他答应过要来，却违背了自己的诺言。',py:'Tā dāyingguo yào lái, què wéibèile zìjǐ de nuòyán.',vn:'Anh ấy đã hứa sẽ đến, vậy mà lại làm trái lời hứa của mình.'},
     {zh:'拔苗助长是违背自然规律的，结果只能是失败。',py:'Bámiáo-zhùzhǎng shì wéibèi zìrán guīlǜ de, jiéguǒ zhǐ néng shì shībài.',vn:'Kéo mạ cho mau lớn là đi ngược quy luật tự nhiên, kết quả chỉ có thể là thất bại.'}
   ],
   colloFull:[
     {zh:'违背心意',py:'wéibèi xīnyì',vn:'trái với lòng mình'},
     {zh:'违背诺言',py:'wéibèi nuòyán',vn:'làm trái lời hứa'},
     {zh:'违背原则',py:'wéibèi yuánzé',vn:'đi ngược nguyên tắc'},
     {zh:'违背自然规律',py:'wéibèi zìrán guīlǜ',vn:'đi ngược quy luật tự nhiên'},
     {zh:'违背良心',py:'wéibèi liángxīn',vn:'trái với lương tâm'}
   ],
   patterns:[
     {s:'违背 + N trừu tượng (心意 / 诺言 / 原则)',m:'Làm trái điều gì'},
     {s:'……是违背……的',m:'Việc gì là đi ngược với cái gì (câu 是……的 đánh giá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thế nào đi nữa, tôi cũng không làm những việc trái với lương tâm.',answer:'无论怎么样，我都不会做违背良心的事。',answerPy:'Wúlùn zěnmeyàng, wǒ dōu bú huì zuò wéibèi liángxīn de shì.',
      note:'无论……都…… (ôn HSK 4); 良心 (HSK 6 bài 4).',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Bố mẹ không nên ép con học những thứ trái với ý muốn của con.',answer:'父母不应该强迫孩子学违背自己意愿的东西。',answerPy:'Fùmǔ bù yīnggāi qiǎngpò háizi xué wéibèi zìjǐ yìyuàn de dōngxi.',
      note:'强迫 + người + V (HSK 6 bài 4); cụm 违背……的 làm định ngữ.',pair:'强迫……V'}
   ]},

  {n:9,zh:'回避',py:'huíbì',pos:'Động từ',vn:'né tránh, lẩn tránh',hv:'hồi tị',em:'🙈',lesson:1,
   explain:['Cố ý tránh đi, không đối diện (người, vấn đề, câu hỏi): 回避问题 / 矛盾 / 记者. 回 = quay lại, 避 = tránh.','Còn là thuật ngữ pháp lý "cáo tránh" (người có liên quan không tham gia xét xử). So với 躲避 (trốn tránh vật / người cụ thể, nguy hiểm), 回避 thiên về vấn đề, câu hỏi trừu tượng.'],
   usage:'回避 + 问题 / 矛盾 / 话题 / 现实; 有意 / 故意 + 回避; 不能 / 无法 + 回避.',
   collo:['你可以回避','回避问题','有意回避','回避现实'],
   ex_zh:'你可以回避，可以不表态，可以把话题岔开',ex_py:'nǐ kěyǐ huíbì, kěyǐ bù biǎotài, kěyǐ bǎ huàtí chàkāi',ex_vn:'bạn có thể né tránh, có thể không bày tỏ thái độ, có thể lái sang chuyện khác',
   exList:[
     {zh:'你可以回避，可以不表态，可以把话题岔开，可以装聋装哑。',py:'Nǐ kěyǐ huíbì, kěyǐ bù biǎotài, kěyǐ bǎ huàtí chàkāi, kěyǐ zhuānglóng-zhuāngyǎ.',vn:'Bạn có thể né tránh, có thể không bày tỏ thái độ, có thể lái sang chuyện khác, có thể giả câm giả điếc.'},
     {zh:'面对记者的提问，他一直在回避关键问题。',py:'Miànduì jìzhě de tíwèn, tā yìzhí zài huíbì guānjiàn wèntí.',vn:'Trước câu hỏi của phóng viên, ông ấy cứ né tránh vấn đề mấu chốt.'},
     {zh:'问题已经出现了，回避是没有用的，我们必须想办法解决。',py:'Wèntí yǐjīng chūxiàn le, huíbì shì méiyǒu yòng de, wǒmen bìxū xiǎng bànfǎ jiějué.',vn:'Vấn đề đã xảy ra rồi, né tránh cũng vô ích, chúng ta phải nghĩ cách giải quyết.'}
   ],
   colloFull:[
     {zh:'你可以回避',py:'nǐ kěyǐ huíbì',vn:'bạn có thể né tránh'},
     {zh:'回避问题',py:'huíbì wèntí',vn:'né tránh vấn đề'},
     {zh:'有意回避',py:'yǒuyì huíbì',vn:'cố ý né tránh'},
     {zh:'回避现实',py:'huíbì xiànshí',vn:'lẩn tránh hiện thực'},
     {zh:'回避矛盾',py:'huíbì máodùn',vn:'né tránh mâu thuẫn'}
   ],
   patterns:[
     {s:'回避 + 问题 / 话题 / 矛盾',m:'Né tránh vấn đề gì'},
     {s:'回避是没有用的 / 解决不了问题',m:'Né tránh chẳng giải quyết được gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhắc đến điểm thi là cậu ấy lảng tránh, chắc là thi không tốt.',answer:'一提到考试成绩，他就回避，恐怕是没考好。',answerPy:'Yì tídào kǎoshì chéngjì, tā jiù huíbì, kǒngpà shì méi kǎohǎo.',
      note:'一……就……; 恐怕 = e rằng, chắc là (ôn HSK 4).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mâu thuẫn giữa hai người không thể né tránh mãi, sớm muộn gì cũng phải nói rõ.',answer:'两个人之间的矛盾不能一直回避，早晚得说清楚。',answerPy:'Liǎng ge rén zhījiān de máodùn bù néng yìzhí huíbì, zǎowǎn děi shuō qīngchu.',
      note:'早晚 = sớm muộn; 得 (děi) = phải (ôn HSK 4).',pair:'早晚得……'}
   ]},

  {n:10,zh:'岔',py:'chà',pos:'Động từ',vn:'rẽ, lái sang hướng khác; lạc (hơi)',hv:'xá',em:'↪️',lesson:1,
   explain:['Nghĩa gốc: chỗ rẽ nhánh (岔路 = đường rẽ). Làm động từ: rẽ sang hướng khác, lái câu chuyện đi: 把话题岔开 (lái sang chuyện khác), 打岔 (chen ngang, cắt lời).','岔气 (chà qì) = đau xóc hông, sái hơi khi cười / chạy quá mạnh — xuất hiện ở phần (二) bài khoá: 可能会导致岔气.'],
   usage:'把 + 话题 / 话 + 岔开; 打岔; 岔气; 岔路 / 岔路口.',
   collo:['把话题岔开','打岔','岔气','岔路口'],
   ex_zh:'可以把话题岔开',ex_py:'kěyǐ bǎ huàtí chàkāi',ex_vn:'có thể lái sang chuyện khác',
   exList:[
     {zh:'你可以回避，可以不表态，可以把话题岔开。',py:'Nǐ kěyǐ huíbì, kěyǐ bù biǎotài, kěyǐ bǎ huàtí chàkāi.',vn:'Bạn có thể né tránh, có thể không bày tỏ thái độ, có thể lái sang chuyện khác.'},
     {zh:'而大笑到“几乎笑破肚皮”可能会导致岔气，心脏不舒服。',py:'Ér dà xiào dào “jīhū xiàopò dùpí” kěnéng huì dǎozhì chàqì, xīnzàng bù shūfu.',vn:'Còn cười lớn đến mức "suýt vỡ bụng" có thể gây xóc hông, tim khó chịu.'},
     {zh:'妈妈一问起成绩，他就赶紧把话岔开，说起了别的事。',py:'Māma yí wènqǐ chéngjì, tā jiù gǎnjǐn bǎ huà chàkāi, shuōqǐle bié de shì.',vn:'Mẹ vừa hỏi đến điểm số, cậu ấy liền vội lái sang chuyện khác.'}
   ],
   colloFull:[
     {zh:'把话题岔开',py:'bǎ huàtí chàkāi',vn:'lái sang chuyện khác'},
     {zh:'打岔',py:'dǎ chà',vn:'chen ngang, cắt lời'},
     {zh:'岔气',py:'chàqì',vn:'xóc hông, sái hơi'},
     {zh:'岔路口',py:'chàlùkǒu',vn:'ngã rẽ'},
     {zh:'别打岔',py:'bié dǎ chà',vn:'đừng chen ngang'}
   ],
   patterns:[
     {s:'把 + 话题 / 话 + 岔开',m:'Lái câu chuyện sang hướng khác'},
     {s:'(别 / 不要) + 打岔',m:'(Đừng) chen ngang khi người khác nói'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tớ đang nói chuyện nghiêm túc, cậu đừng chen ngang được không?',answer:'我正在说正经事呢，你别打岔好不好？',answerPy:'Wǒ zhèngzài shuō zhèngjing shì ne, nǐ bié dǎ chà hǎo bu hǎo?',
      note:'正在……呢 (đang); 正经 (HSK 6 bài 9); ……好不好？ = được không?',pair:'正在……呢'},
     {promptLang:'vi',prompt:'Vừa ăn no xong đã chạy ngay, thảo nào bị xóc hông.',answer:'刚吃饱就跑步，难怪岔气了。',answerPy:'Gāng chībǎo jiù pǎobù, nánguài chàqì le.',
      note:'刚……就…… (vừa … đã …); 难怪 = thảo nào (ôn HSK 5).',pair:'难怪'}
   ]},

  {n:11,zh:'装聋装哑',py:'zhuānglóng-zhuāngyǎ',pos:'Thành ngữ',vn:'giả câm giả điếc, giả vờ không biết',hv:'trang lung trang á',em:'🤐',lesson:1,
   explain:['Giả vờ điếc, giả vờ câm: cố ý làm như không nghe thấy, không biết để khỏi phải phản ứng, tỏ thái độ. 装 = giả vờ, 聋 = điếc, 哑 = câm. Cũng nói 装聋作哑.','Hay dùng để chê người trốn tránh trách nhiệm; trong bài khoá là một trong những cách "né" thay vì cười giả.'],
   usage:'(对……) + 装聋装哑; 别 / 不能 + 装聋装哑; 装聋作哑 (biến thể thường gặp hơn).',
   collo:['可以装聋装哑','对问题装聋装哑','别装聋装哑','装聋作哑'],
   ex_zh:'可以装聋装哑，但不要画蛇添足，违心地笑',ex_py:'kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú, wéixīn de xiào',ex_vn:'có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái lòng',
   exList:[
     {zh:'你可以把话题岔开，可以装聋装哑，但不要画蛇添足，违心地笑。',py:'Nǐ kěyǐ bǎ huàtí chàkāi, kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú, wéixīn de xiào.',vn:'Bạn có thể lái sang chuyện khác, có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái với lòng mình.'},
     {zh:'大家都知道是谁弄坏的，他却一直装聋装哑。',py:'Dàjiā dōu zhīdào shì shéi nònghuài de, tā què yìzhí zhuānglóng-zhuāngyǎ.',vn:'Mọi người đều biết ai làm hỏng, vậy mà cậu ta cứ giả câm giả điếc.'},
     {zh:'出了问题就装聋装哑，这不是负责任的态度。',py:'Chūle wèntí jiù zhuānglóng-zhuāngyǎ, zhè bú shì fù zérèn de tàidu.',vn:'Có chuyện thì giả câm giả điếc, đó không phải là thái độ có trách nhiệm.'}
   ],
   colloFull:[
     {zh:'可以装聋装哑',py:'kěyǐ zhuānglóng-zhuāngyǎ',vn:'có thể giả câm giả điếc'},
     {zh:'对问题装聋装哑',py:'duì wèntí zhuānglóng-zhuāngyǎ',vn:'làm ngơ trước vấn đề'},
     {zh:'别装聋装哑',py:'bié zhuānglóng-zhuāngyǎ',vn:'đừng giả vờ không biết'},
     {zh:'装聋作哑',py:'zhuānglóng-zuòyǎ',vn:'giả câm giả điếc (biến thể)'},
     {zh:'一直装聋装哑',py:'yìzhí zhuānglóng-zhuāngyǎ',vn:'cứ giả vờ không biết'}
   ],
   patterns:[
     {s:'对 + việc + 装聋装哑',m:'Làm ngơ, giả vờ không biết trước việc gì'},
     {s:'……，却一直装聋装哑',m:'Biết rõ mà vẫn giả câm giả điếc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng cậu nghe thấy rồi, đừng có giả câm giả điếc nữa!',answer:'你明明听见了，别再装聋装哑了！',answerPy:'Nǐ míngmíng tīngjiàn le, bié zài zhuānglóng-zhuāngyǎ le!',
      note:'明明 = rõ ràng (HSK 6 bài 6); 别再……了 = đừng … nữa.',pair:'别再……了'},
     {promptLang:'vi',prompt:'Thay vì giả vờ không biết, chi bằng dũng cảm nhận lỗi.',answer:'与其装聋装哑，不如勇敢地承认错误。',answerPy:'Yǔqí zhuānglóng-zhuāngyǎ, bùrú yǒnggǎn de chéngrèn cuòwù.',
      note:'与其……不如…… (ôn HSK 5); Adj + 地 + V.',pair:'与其……不如……'}
   ]},

  {n:12,zh:'聋哑',py:'lóngyǎ',pos:'Tính từ',vn:'câm điếc',hv:'lung á',em:'🧏',lesson:1,
   explain:['Vừa điếc vừa câm (không nghe được, không nói được): 聋 = điếc, 哑 = câm. Trong bảng từ của sách là mục phụ của 装聋装哑.','Thường làm định ngữ: 聋哑人 / 聋哑学校 / 聋哑儿童. Khi nói về người khuyết tật nên dùng lời tôn trọng; 手语 (ngôn ngữ ký hiệu) là cách giao tiếp của người câm điếc.'],
   usage:'聋哑 + 人 / 儿童 / 学校; 先天 + 聋哑; 用手语 + 跟聋哑人 + 交流.',
   collo:['聋哑人','聋哑学校','聋哑儿童','先天聋哑'],
   ex_zh:'可以装聋装哑',ex_py:'kěyǐ zhuānglóng-zhuāngyǎ',ex_vn:'có thể giả câm giả điếc',
   exList:[
     {zh:'你可以把话题岔开，可以装聋装哑，但不要画蛇添足。',py:'Nǐ kěyǐ bǎ huàtí chàkāi, kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú.',vn:'Bạn có thể lái sang chuyện khác, có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân.'},
     {zh:'她大学毕业后到一所聋哑学校当了老师。',py:'Tā dàxué bìyè hòu dào yì suǒ lóngyǎ xuéxiào dāngle lǎoshī.',vn:'Tốt nghiệp đại học xong, cô ấy về làm giáo viên ở một trường dành cho trẻ câm điếc.'},
     {zh:'为了跟聋哑人交流，他专门学了一年手语。',py:'Wèile gēn lóngyǎrén jiāoliú, tā zhuānmén xuéle yì nián shǒuyǔ.',vn:'Để giao tiếp với người câm điếc, anh ấy đã chuyên tâm học ngôn ngữ ký hiệu một năm.'}
   ],
   colloFull:[
     {zh:'聋哑人',py:'lóngyǎrén',vn:'người câm điếc'},
     {zh:'聋哑学校',py:'lóngyǎ xuéxiào',vn:'trường cho người câm điếc'},
     {zh:'聋哑儿童',py:'lóngyǎ értóng',vn:'trẻ em câm điếc'},
     {zh:'先天聋哑',py:'xiāntiān lóngyǎ',vn:'câm điếc bẩm sinh'},
     {zh:'装聋装哑',py:'zhuānglóng-zhuāngyǎ',vn:'giả câm giả điếc'}
   ],
   patterns:[
     {s:'聋哑 + 人 / 儿童 / 学校',m:'Làm định ngữ chỉ người / trường câm điếc'},
     {s:'用手语 + 跟聋哑人 + 交流',m:'Giao tiếp với người câm điếc bằng ngôn ngữ ký hiệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô bé bị câm điếc bẩm sinh, nhưng vẽ tranh rất đẹp.',answer:'这个小女孩虽然先天聋哑，但是画画儿画得特别好。',answerPy:'Zhège xiǎo nǚhái suīrán xiāntiān lóngyǎ, dànshì huà huàr huà de tèbié hǎo.',
      note:'V + O + V + 得 + bổ ngữ trạng thái (ôn HSK 3–4).',pair:'V得……'},
     {promptLang:'vi',prompt:'Nhờ ngôn ngữ ký hiệu, người câm điếc cũng có thể trao đổi tự do với người khác.',answer:'借助手语，聋哑人也可以跟别人自由地交流。',answerPy:'Jièzhù shǒuyǔ, lóngyǎrén yě kěyǐ gēn biérén zìyóu de jiāoliú.',
      note:'借助 = nhờ vào (HSK 6 bài 5); 跟……交流.',pair:'借助……'}
   ]},

  {n:13,zh:'画蛇添足',py:'huàshé-tiānzú',pos:'Thành ngữ',vn:'vẽ rắn thêm chân, làm chuyện thừa thãi (hoá hỏng)',hv:'hoạ xà thiêm túc',em:'🐍',lesson:1,
   explain:['Điển tích: thi vẽ rắn, người vẽ xong trước lại vẽ thêm chân nên thua (rắn không có chân). Chỉ việc làm thêm điều thừa, không những vô ích mà còn làm hỏng việc.','Làm vị ngữ hoặc tân ngữ: 不要画蛇添足 / 这简直是画蛇添足. Tiếng Việt có đúng thành ngữ "vẽ rắn thêm chân".'],
   usage:'不要 / 别 + 画蛇添足; ……是 / 简直是 + 画蛇添足; 有画蛇添足之嫌.',
   collo:['不要画蛇添足','简直是画蛇添足','画蛇添足的做法','反而画蛇添足'],
   ex_zh:'但不要画蛇添足，违心地笑',ex_py:'dàn búyào huàshé-tiānzú, wéixīn de xiào',ex_vn:'nhưng đừng vẽ rắn thêm chân mà cười trái lòng',
   exList:[
     {zh:'你可以装聋装哑，但不要画蛇添足，违心地笑。',py:'Nǐ kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú, wéixīn de xiào.',vn:'Bạn có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái với lòng mình.'},
     {zh:'这篇作文结尾本来很好，你再加一段议论，反而画蛇添足了。',py:'Zhè piān zuòwén jiéwěi běnlái hěn hǎo, nǐ zài jiā yí duàn yìlùn, fǎn\'ér huàshé-tiānzú le.',vn:'Kết bài của bài văn này vốn đã rất hay, em thêm một đoạn nghị luận nữa thì hoá ra thành vẽ rắn thêm chân.'},
     {zh:'房间已经很漂亮了，再挂那么多装饰简直是画蛇添足。',py:'Fángjiān yǐjīng hěn piàoliang le, zài guà nàme duō zhuāngshì jiǎnzhí shì huàshé-tiānzú.',vn:'Căn phòng đã rất đẹp rồi, treo thêm từng ấy đồ trang trí đúng là vẽ rắn thêm chân.'}
   ],
   colloFull:[
     {zh:'不要画蛇添足',py:'búyào huàshé-tiānzú',vn:'đừng vẽ rắn thêm chân'},
     {zh:'简直是画蛇添足',py:'jiǎnzhí shì huàshé-tiānzú',vn:'đúng là làm chuyện thừa'},
     {zh:'画蛇添足的做法',py:'huàshé-tiānzú de zuòfǎ',vn:'cách làm thừa thãi'},
     {zh:'反而画蛇添足',py:'fǎn\'ér huàshé-tiānzú',vn:'hoá ra lại thừa thãi'},
     {zh:'有画蛇添足之嫌',py:'yǒu huàshé-tiānzú zhī xián',vn:'có phần thừa thãi'}
   ],
   patterns:[
     {s:'本来很好，再……反而画蛇添足了',m:'Vốn đã ổn, làm thêm lại hoá hỏng'},
     {s:'不要 / 别 + 画蛇添足',m:'Khuyên đừng làm thêm việc thừa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu trả lời đã đủ rõ ràng rồi, giải thích thêm nữa thì thành vẽ rắn thêm chân.',answer:'回答已经够清楚了，再解释就是画蛇添足了。',answerPy:'Huídá yǐjīng gòu qīngchu le, zài jiěshì jiù shì huàshé-tiānzú le.',
      note:'够 + Adj + 了 = đủ … rồi; 再…… (giả thiết) 就…… (ôn HSK 4).',pair:'再……就……'},
     {promptLang:'vi',prompt:'Món ăn này vốn rất ngon, cho thêm nhiều gia vị như vậy lại hoá hỏng.',answer:'这道菜本来很好吃，放了这么多调料，反而画蛇添足了。',answerPy:'Zhè dào cài běnlái hěn hǎochī, fàngle zhème duō tiáoliào, fǎn\'ér huàshé-tiānzú le.',
      note:'本来……，反而…… (kết quả trái mong đợi, ôn HSK 5); 调料 (HSK 6 bài 10).',pair:'反而'}
   ]},

  {n:14,zh:'机灵',py:'jīling',pos:'Tính từ',vn:'lanh lợi, nhanh trí, thông minh',hv:'cơ linh',em:'🦊',lesson:1,
   explain:['Thông minh, nhanh nhạy, phản ứng nhanh (thường khen trẻ em, người trẻ, con vật): 机灵的孩子 / 眼睛很机灵. Khẩu ngữ; chữ 灵 đọc nhẹ (jīling).','Khác 聪明 (thông minh nói chung) — 机灵 nhấn sự nhanh nhảu, lanh lẹ ứng biến. Láy: 机机灵灵. Bài khoá: 不管你多机灵 = dù bạn lanh lợi đến đâu.'],
   usage:'很 / 特别 + 机灵; 机灵的 + 孩子 / 小狗; 不管 + 多 + 机灵; 一双机灵的眼睛.',
   collo:['不管你多机灵','机灵的孩子','特别机灵','一双机灵的眼睛'],
   ex_zh:'因为只要你笑，不管你多机灵……别人都能看出……',ex_py:'Yīnwèi zhǐyào nǐ xiào, bùguǎn nǐ duō jīling…… biérén dōu néng kànchū……',ex_vn:'Bởi chỉ cần bạn cười, dù bạn lanh lợi đến đâu… người khác đều có thể nhận ra…',
   exList:[
     {zh:'因为只要你笑，不管你多机灵，不管你掩饰得多么周密，别人都能看出你的笑是真心实意还是虚情假意。',py:'Yīnwèi zhǐyào nǐ xiào, bùguǎn nǐ duō jīling, bùguǎn nǐ yǎnshì de duōme zhōumì, biérén dōu néng kànchū nǐ de xiào shì zhēnxīn-shíyì háishi xūqíng-jiǎyì.',vn:'Bởi chỉ cần bạn cười, dù bạn lanh lợi đến đâu, dù bạn che giấu kín kẽ thế nào, người khác đều nhìn ra nụ cười của bạn là thật lòng hay giả dối.'},
     {zh:'这孩子特别机灵，老师的话一听就懂。',py:'Zhè háizi tèbié jīling, lǎoshī de huà yì tīng jiù dǒng.',vn:'Đứa trẻ này rất lanh lợi, lời cô giáo vừa nghe là hiểu ngay.'},
     {zh:'小狗睁着一双机灵的眼睛，好像能听懂我们说话。',py:'Xiǎogǒu zhēngzhe yì shuāng jīling de yǎnjing, hǎoxiàng néng tīngdǒng wǒmen shuōhuà.',vn:'Chú chó con mở đôi mắt lanh lợi, dường như hiểu được chúng tôi nói gì.'}
   ],
   colloFull:[
     {zh:'不管你多机灵',py:'bùguǎn nǐ duō jīling',vn:'dù bạn lanh lợi đến đâu'},
     {zh:'机灵的孩子',py:'jīling de háizi',vn:'đứa trẻ lanh lợi'},
     {zh:'特别机灵',py:'tèbié jīling',vn:'rất nhanh nhẹn'},
     {zh:'一双机灵的眼睛',py:'yì shuāng jīling de yǎnjing',vn:'đôi mắt lanh lợi'},
     {zh:'机灵鬼',py:'jīlingguǐ',vn:'đứa lém lỉnh, ma lanh'}
   ],
   patterns:[
     {s:'不管 + S + 多 + 机灵，都……',m:'Dù lanh lợi đến đâu cũng …'},
     {s:'机灵的 + N (孩子 / 眼睛 / 小狗)',m:'… lanh lợi, nhanh nhảu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé ấy vừa lanh lợi vừa lễ phép, ai gặp cũng quý.',answer:'那个小男孩又机灵又有礼貌，谁见了都喜欢。',answerPy:'Nàge xiǎo nánhái yòu jīling yòu yǒu lǐmào, shéi jiànle dōu xǐhuan.',
      note:'又……又…… (ôn HSK 3); 谁……都…… phiếm chỉ.',pair:'又……又……'},
     {promptLang:'vi',prompt:'Dù cậu ta nhanh trí đến đâu cũng không lừa được thầy giáo.',answer:'不管他多机灵，也骗不了老师。',answerPy:'Bùguǎn tā duō jīling, yě piàn bu liǎo lǎoshī.',
      note:'不管……也…… (ôn HSK 4); bổ ngữ khả năng V不了.',pair:'不管……也……'}
   ]},

  {n:15,zh:'周密',py:'zhōumì',pos:'Tính từ',vn:'chu đáo, kín kẽ, cẩn thận (không sơ hở)',hv:'chu mật',em:'🧩',lesson:1,
   explain:['Chu đáo, tỉ mỉ, kín kẽ, tính đến mọi mặt không để sơ hở: 周 = khắp, trọn; 密 = kín, sát. Hay đi với 计划 / 安排 / 考虑 / 调查 / 设计.','Làm bổ ngữ: 掩饰得多么周密 (che giấu kín kẽ). Gần nghĩa 周到 (chu đáo, thường về phục vụ, chăm sóc con người) và 严密 (chặt chẽ, HSK 6 bài 25).'],
   usage:'计划 / 安排 / 考虑 + 周密; 周密的 + 计划 / 设计 / 调查; V + 得 + (很 / 多么) + 周密.',
   collo:['掩饰得多么周密','周密的计划','考虑周密','周密的设计'],
   ex_zh:'不管你掩饰得多么周密',ex_py:'bùguǎn nǐ yǎnshì de duōme zhōumì',ex_vn:'dù bạn che giấu kín kẽ đến thế nào',
   exList:[
     {zh:'不管你多机灵，不管你掩饰得多么周密，别人都能看出你的笑是真心实意还是虚情假意。',py:'Bùguǎn nǐ duō jīling, bùguǎn nǐ yǎnshì de duōme zhōumì, biérén dōu néng kànchū nǐ de xiào shì zhēnxīn-shíyì háishi xūqíng-jiǎyì.',vn:'Dù bạn lanh lợi đến đâu, dù bạn che giấu kín kẽ thế nào, người khác đều nhìn ra nụ cười của bạn là thật lòng hay giả dối.'},
     {zh:'新产品面世以前，一般要经过周密的设计和一丝不苟的生产过程。',py:'Xīn chǎnpǐn miànshì yǐqián, yìbān yào jīngguò zhōumì de shèjì hé yìsī-bùgǒu de shēngchǎn guòchéng.',vn:'Trước khi ra mắt, sản phẩm mới thường phải qua khâu thiết kế chu đáo và quá trình sản xuất cẩn thận tỉ mỉ.'},
     {zh:'这次旅行他考虑得非常周密，连下雨天的活动都安排好了。',py:'Zhè cì lǚxíng tā kǎolǜ de fēicháng zhōumì, lián xiàyǔ tiān de huódòng dōu ānpái hǎo le.',vn:'Chuyến du lịch này anh ấy tính toán rất chu đáo, đến cả hoạt động cho ngày mưa cũng sắp xếp xong.'}
   ],
   colloFull:[
     {zh:'掩饰得多么周密',py:'yǎnshì de duōme zhōumì',vn:'che giấu kín kẽ đến đâu'},
     {zh:'周密的计划',py:'zhōumì de jìhuà',vn:'kế hoạch chu đáo'},
     {zh:'考虑周密',py:'kǎolǜ zhōumì',vn:'suy tính chu đáo'},
     {zh:'周密的设计',py:'zhōumì de shèjì',vn:'thiết kế chu đáo'},
     {zh:'周密的调查',py:'zhōumì de diàochá',vn:'điều tra kỹ lưỡng'}
   ],
   patterns:[
     {s:'V (计划 / 安排 / 考虑) + 得 + 很周密',m:'Làm gì rất chu đáo, kín kẽ'},
     {s:'经过 + 周密的 + 设计 / 调查',m:'Trải qua khâu thiết kế / điều tra kỹ lưỡng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có lên kế hoạch thật chu đáo thì hoạt động mới có thể diễn ra suôn sẻ.',answer:'只有把计划做得很周密，活动才能顺利进行。',answerPy:'Zhǐyǒu bǎ jìhuà zuò de hěn zhōumì, huódòng cái néng shùnlì jìnxíng.',
      note:'只有……才…… điều kiện cần (ôn HSK 4); câu 把 + bổ ngữ trạng thái.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Dù kế hoạch chu đáo đến mấy cũng có thể gặp chuyện bất ngờ.',answer:'计划再周密，也可能遇到意外。',answerPy:'Jìhuà zài zhōumì, yě kěnéng yùdào yìwài.',
      note:'再 + Adj，也…… = dù … đến mấy cũng … (ôn HSK 5).',pair:'再……也……'}
   ]},

  {n:16,zh:'途径',py:'tújìng',pos:'Danh từ',vn:'con đường, cách thức, phương pháp',hv:'đồ kính',em:'🛤️',lesson:1,
   explain:['Nghĩa gốc là con đường; nay chủ yếu dùng nghĩa bóng: CÁCH, CON ĐƯỜNG để đạt được / làm được việc gì: 通过……途径 / 解决问题的途径. 途 = đường, 径 = lối nhỏ.','Văn viết. So với 方法 (phương pháp, cụ thể) — 途径 nhấn "kênh, ngả" để đi tới mục đích: 合法途径, 正规途径, 各种途径.'],
   usage:'通过 + (什么 / 各种 / 合法) + 途径 + V; ……的 + 途径; 寻找 / 开辟 + 途径; 唯一的途径.',
   collo:['通过什么途径','解决问题的途径','合法途径','唯一的途径'],
   ex_zh:'人是通过什么途径识别“笑”背后的真实情感呢？',ex_py:'Rén shì tōngguò shénme tújìng shíbié “xiào” bèihòu de zhēnshí qínggǎn ne?',ex_vn:'Con người nhận biết tình cảm thật đằng sau "nụ cười" bằng cách nào?',
   exList:[
     {zh:'有人不禁要问，人是通过什么途径识别“笑”背后的真实情感呢？',py:'Yǒu rén bùjīn yào wèn, rén shì tōngguò shénme tújìng shíbié “xiào” bèihòu de zhēnshí qínggǎn ne?',vn:'Có người không khỏi muốn hỏi: con người nhận biết tình cảm thật đằng sau "nụ cười" bằng con đường nào?'},
     {zh:'读书是了解世界最方便的途径之一。',py:'Dúshū shì liǎojiě shìjiè zuì fāngbiàn de tújìng zhī yī.',vn:'Đọc sách là một trong những cách thuận tiện nhất để hiểu thế giới.'},
     {zh:'遇到纠纷，我们应该通过合法途径解决，而不是动手打架。',py:'Yùdào jiūfēn, wǒmen yīnggāi tōngguò héfǎ tújìng jiějué, ér bú shì dòngshǒu dǎjià.',vn:'Gặp tranh chấp, ta nên giải quyết qua con đường hợp pháp chứ không phải động tay đánh nhau.'}
   ],
   colloFull:[
     {zh:'通过什么途径',py:'tōngguò shénme tújìng',vn:'bằng cách nào, qua con đường nào'},
     {zh:'解决问题的途径',py:'jiějué wèntí de tújìng',vn:'cách giải quyết vấn đề'},
     {zh:'合法途径',py:'héfǎ tújìng',vn:'con đường hợp pháp'},
     {zh:'唯一的途径',py:'wéiyī de tújìng',vn:'con đường duy nhất'},
     {zh:'各种途径',py:'gè zhǒng tújìng',vn:'đủ mọi kênh'}
   ],
   patterns:[
     {s:'通过 + ……途径 + V',m:'Làm gì qua con đường / cách nào'},
     {s:'……是……的 + (唯一 / 重要) + 途径',m:'Điều gì là con đường (duy nhất / quan trọng) để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài lên lớp, học sinh còn có thể học tiếng Trung qua nhiều con đường khác.',answer:'除了上课以外，学生还可以通过很多别的途径学习汉语。',answerPy:'Chúle shàngkè yǐwài, xuésheng hái kěyǐ tōngguò hěn duō bié de tújìng xuéxí Hànyǔ.',
      note:'除了……以外，还…… (bổ sung, ôn HSK 4).',pair:'除了……还……'},
     {promptLang:'vi',prompt:'Chăm chỉ luyện tập là con đường duy nhất để nâng cao trình độ.',answer:'刻苦练习是提高水平的唯一途径。',answerPy:'Kèkǔ liànxí shì tígāo shuǐpíng de wéiyī tújìng.',
      note:'A 是 B 的唯一途径; 刻苦 = chăm chỉ khổ luyện (ôn HSK 5).',pair:'……是……的途径'}
   ]},

  {n:17,zh:'虚假',py:'xūjiǎ',pos:'Tính từ',vn:'giả tạo, giả dối, không thật',hv:'hư giả',em:'🚫',lesson:1,
   explain:['Không đúng với thực tế, không thật: 虚 = hư, rỗng; 假 = giả. Hay nói về thông tin, số liệu, quảng cáo, tình cảm: 虚假广告 / 信息 / 笑声.','So với 虚伪: 虚伪 nhấn phẩm chất con người (giả dối, đạo đức giả); 虚假 nhấn cái KHÔNG THẬT về nội dung (假的). Trái nghĩa: 真实.'],
   usage:'虚假的 + 笑声 / 信息 / 广告 / 数据; 虚假 ↔ 真实; 发布 + 虚假信息.',
   collo:['虚假的笑声','虚假信息','虚假广告','虚假的数据'],
   ex_zh:'我们在听到发自内心的笑声和虚假的笑声时……',ex_py:'Wǒmen zài tīngdào fāzì nèixīn de xiàoshēng hé xūjiǎ de xiàoshēng shí……',ex_vn:'Khi chúng ta nghe tiếng cười xuất phát từ đáy lòng và tiếng cười giả tạo…',
   exList:[
     {zh:'研究者发现，我们在听到发自内心的笑声和虚假的笑声时，大脑会呈现出完全不同的反应。',py:'Yánjiūzhě fāxiàn, wǒmen zài tīngdào fāzì nèixīn de xiàoshēng hé xūjiǎ de xiàoshēng shí, dànǎo huì chéngxiàn chū wánquán bù tóng de fǎnyìng.',vn:'Các nhà nghiên cứu phát hiện rằng khi nghe tiếng cười xuất phát từ đáy lòng và tiếng cười giả tạo, não bộ của chúng ta sẽ có phản ứng hoàn toàn khác nhau.'},
     {zh:'网上有很多虚假信息，转发之前一定要先核实一下。',py:'Wǎng shang yǒu hěn duō xūjiǎ xìnxī, zhuǎnfā zhīqián yídìng yào xiān héshí yíxià.',vn:'Trên mạng có rất nhiều thông tin sai sự thật, trước khi chia sẻ nhất định phải kiểm chứng trước.'},
     {zh:'这家公司因为发布虚假广告，被罚了一大笔钱。',py:'Zhè jiā gōngsī yīnwèi fābù xūjiǎ guǎnggào, bèi fále yí dà bǐ qián.',vn:'Công ty này vì đăng quảng cáo sai sự thật mà bị phạt một khoản tiền lớn.'}
   ],
   colloFull:[
     {zh:'虚假的笑声',py:'xūjiǎ de xiàoshēng',vn:'tiếng cười giả tạo'},
     {zh:'虚假信息',py:'xūjiǎ xìnxī',vn:'thông tin sai sự thật'},
     {zh:'虚假广告',py:'xūjiǎ guǎnggào',vn:'quảng cáo sai sự thật'},
     {zh:'虚假的数据',py:'xūjiǎ de shùjù',vn:'số liệu giả'},
     {zh:'真实与虚假',py:'zhēnshí yǔ xūjiǎ',vn:'thật và giả'}
   ],
   patterns:[
     {s:'虚假的 + N (信息 / 广告 / 笑声)',m:'… giả, không đúng sự thật'},
     {s:'分辨 / 识别 + 真实与虚假',m:'Phân biệt thật và giả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không những phải học kiến thức, mà còn phải học cách phân biệt thông tin thật giả.',answer:'我们不但要学习知识，而且要学会分辨真实和虚假的信息。',answerPy:'Wǒmen búdàn yào xuéxí zhīshi, érqiě yào xuéhuì fēnbiàn zhēnshí hé xūjiǎ de xìnxī.',
      note:'不但……而且…… (ôn HSK 4); 分辨 (HSK 6 bài 10).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Một khi phát hiện quảng cáo sai sự thật, người tiêu dùng có thể khiếu nại.',answer:'一旦发现虚假广告，消费者可以投诉。',answerPy:'Yídàn fāxiàn xūjiǎ guǎnggào, xiāofèizhě kěyǐ tóusù.',
      note:'一旦…… = một khi (ôn HSK 5); 投诉 (HSK 6 bài 6).',pair:'一旦……'}
   ]},

  {n:18,zh:'特定',py:'tèdìng',pos:'Tính từ',vn:'riêng biệt, đặc định, nhất định',hv:'đặc định',em:'🎯',lesson:1,
   explain:['Được chỉ định riêng, xác định cụ thể (không phải bất kỳ cái nào): 特定区域 / 特定的人群 / 特定的条件. 特 = đặc biệt, 定 = định.','Chỉ làm định ngữ (thường có hoặc không có 的); không làm vị ngữ với 很. Văn viết, hay gặp trong văn bản khoa học.'],
   usage:'特定 + (的) + 区域 / 人群 / 时间 / 环境 / 条件; 在特定的……下.',
   collo:['特定区域','特定的人群','在特定条件下','特定的时间'],
   ex_zh:'假笑声会激活大脑中用于破译情感信息的特定区域',ex_py:'Jiǎ xiàoshēng huì jīhuó dànǎo zhōng yòngyú pòyì qínggǎn xìnxī de tèdìng qūyù',ex_vn:'Tiếng cười giả sẽ kích hoạt vùng riêng biệt trong não dùng để giải mã thông tin cảm xúc',
   exList:[
     {zh:'假笑声会激活大脑中用于破译情感信息的特定区域。',py:'Jiǎ xiàoshēng huì jīhuó dànǎo zhōng yòngyú pòyì qínggǎn xìnxī de tèdìng qūyù.',vn:'Tiếng cười giả sẽ kích hoạt vùng riêng biệt trong não dùng để giải mã thông tin cảm xúc.'},
     {zh:'这种药只适用于特定的人群，一般人不要随便吃。',py:'Zhè zhǒng yào zhǐ shìyòng yú tèdìng de rénqún, yìbān rén búyào suíbiàn chī.',vn:'Loại thuốc này chỉ dùng cho nhóm người nhất định, người bình thường đừng tuỳ tiện uống.'},
     {zh:'在特定的条件下，水可以在零度以下仍然不结冰。',py:'Zài tèdìng de tiáojiàn xià, shuǐ kěyǐ zài líng dù yǐxià réngrán bù jié bīng.',vn:'Trong điều kiện nhất định, nước có thể dưới không độ mà vẫn không đóng băng.'}
   ],
   colloFull:[
     {zh:'特定区域',py:'tèdìng qūyù',vn:'vùng riêng biệt'},
     {zh:'特定的人群',py:'tèdìng de rénqún',vn:'nhóm người nhất định'},
     {zh:'在特定条件下',py:'zài tèdìng tiáojiàn xià',vn:'trong điều kiện nhất định'},
     {zh:'特定的时间',py:'tèdìng de shíjiān',vn:'thời gian nhất định'},
     {zh:'特定的环境',py:'tèdìng de huánjìng',vn:'môi trường đặc thù'}
   ],
   patterns:[
     {s:'特定 + (的) + N',m:'… riêng biệt, nhất định (chỉ làm định ngữ)'},
     {s:'在特定的 + 条件 / 环境 + 下',m:'Trong điều kiện / môi trường nhất định'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài cây này chỉ có thể sinh trưởng trong môi trường đặc thù, vì thế rất hiếm gặp.',answer:'这种植物只能在特定的环境下生长，所以非常罕见。',answerPy:'Zhè zhǒng zhíwù zhǐ néng zài tèdìng de huánjìng xià shēngzhǎng, suǒyǐ fēicháng hǎnjiàn.',
      note:'在……下 (trong điều kiện); 罕见 (HSK 6 bài 15).',pair:'在……下'},
     {promptLang:'vi',prompt:'Chỉ vào thời gian nhất định thì mới được vào bảo tàng này.',answer:'只有在特定的时间，才能进入这个博物馆。',answerPy:'Zhǐyǒu zài tèdìng de shíjiān, cái néng jìnrù zhège bówùguǎn.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:19,zh:'缘故',py:'yuángù',pos:'Danh từ',vn:'nguyên do, nguyên nhân, duyên cớ',hv:'duyên cố',em:'❓',lesson:1,
   explain:['Nguyên nhân, lý do của một việc: 缘 = duyên, cớ; 故 = cớ, nguyên cớ. Hay dùng trong mẫu 是……的缘故 (là vì …) và 不知什么缘故 (chẳng hiểu vì sao).','Văn viết hơn 原因; không nói 缘故很多 mà thường dùng trong khung cố định. Bài khoá: 分析假笑的缘故 = phân tích nguyên do của việc cười giả.'],
   usage:'是 + ……的缘故; 由于……的缘故; 不知(道)什么缘故; 分析 / 找到 + ……的缘故.',
   collo:['假笑的缘故','是……的缘故','不知什么缘故','由于天气的缘故'],
   ex_zh:'同时大脑会自动分析假笑的缘故',ex_py:'tóngshí dànǎo huì zìdòng fēnxī jiǎ xiào de yuángù',ex_vn:'đồng thời não sẽ tự động phân tích nguyên do của việc cười giả',
   exList:[
     {zh:'同时大脑会自动分析假笑的缘故，假笑者想隐瞒什么，以及假笑者的意向。',py:'Tóngshí dànǎo huì zìdòng fēnxī jiǎ xiào de yuángù, jiǎxiàozhě xiǎng yǐnmán shénme, yǐjí jiǎxiàozhě de yìxiàng.',vn:'Đồng thời não sẽ tự động phân tích nguyên do của việc cười giả, người cười giả muốn che giấu điều gì, và ý đồ của người cười giả.'},
     {zh:'他今天没来上课，可能是感冒的缘故。',py:'Tā jīntiān méi lái shàngkè, kěnéng shì gǎnmào de yuángù.',vn:'Hôm nay cậu ấy không đến lớp, có lẽ là vì bị cảm.'},
     {zh:'不知什么缘故，她最近总是闷闷不乐的。',py:'Bù zhī shénme yuángù, tā zuìjìn zǒngshì mènmèn-búlè de.',vn:'Chẳng biết vì cớ gì, dạo này cô ấy lúc nào cũng buồn rầu.'}
   ],
   colloFull:[
     {zh:'假笑的缘故',py:'jiǎ xiào de yuángù',vn:'nguyên do của việc cười giả'},
     {zh:'是……的缘故',py:'shì…… de yuángù',vn:'là do …'},
     {zh:'不知什么缘故',py:'bù zhī shénme yuángù',vn:'chẳng biết vì cớ gì'},
     {zh:'由于天气的缘故',py:'yóuyú tiānqì de yuángù',vn:'do thời tiết'},
     {zh:'分析……的缘故',py:'fēnxī…… de yuángù',vn:'phân tích nguyên do của …'}
   ],
   patterns:[
     {s:'Kết quả，(可能) 是 + 原因 + 的缘故',m:'Việc gì đó là do …'},
     {s:'不知什么缘故，……',m:'Chẳng hiểu vì sao …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyến bay bị hoãn, nghe nói là do sương mù dày.',answer:'航班推迟了，听说是大雾的缘故。',answerPy:'Hángbān tuīchí le, tīngshuō shì dà wù de yuángù.',
      note:'Khung 是……的缘故 giải thích nguyên nhân ở sau kết quả.',pair:'是……的缘故'},
     {promptLang:'vi',prompt:'Chẳng biết vì sao, dạo này tôi hay mất ngủ.',answer:'不知什么缘故，我最近经常失眠。',answerPy:'Bù zhī shénme yuángù, wǒ zuìjìn jīngcháng shīmián.',
      note:'不知什么缘故 đứng đầu câu; 经常 (ôn HSK 3).',pair:'不知什么缘故'}
   ]},

  {n:20,zh:'意向',py:'yìxiàng',pos:'Danh từ',vn:'ý định, ý hướng, mục đích',hv:'ý hướng',em:'🧭',lesson:1,
   explain:['Ý định, khuynh hướng muốn làm gì (chưa chắc chắn hẳn): 购买意向 (ý định mua), 合作意向 (ý định hợp tác). 意 = ý, 向 = hướng.','Văn viết, hay dùng trong kinh doanh, đàm phán: 意向书 (thư bày tỏ ý định), 有……的意向. Gần 意图 (HSK 6 bài 25 — nhấn mục đích, kế hoạch trong đầu).'],
   usage:'……的意向; 购买 / 合作 + 意向; 有 / 表达 + ……的意向; 调查 + 意向; 意向书.',
   collo:['假笑者的意向','购买意向','合作意向','有留学的意向'],
   ex_zh:'以及假笑者的意向',ex_py:'yǐjí jiǎxiàozhě de yìxiàng',ex_vn:'và ý đồ của người cười giả',
   exList:[
     {zh:'大脑会自动分析假笑的缘故，假笑者想隐瞒什么，以及假笑者的意向。',py:'Dànǎo huì zìdòng fēnxī jiǎ xiào de yuángù, jiǎxiàozhě xiǎng yǐnmán shénme, yǐjí jiǎxiàozhě de yìxiàng.',vn:'Não sẽ tự động phân tích nguyên do của việc cười giả, người cười giả muốn che giấu điều gì, và ý đồ của người cười giả.'},
     {zh:'新产品面世以前，一般要先调查消费者的购买意向。',py:'Xīn chǎnpǐn miànshì yǐqián, yìbān yào xiān diàochá xiāofèizhě de gòumǎi yìxiàng.',vn:'Trước khi sản phẩm mới ra mắt, thường phải điều tra ý định mua hàng của người tiêu dùng trước.'},
     {zh:'两家公司都表达了合作的意向，下个月将签订协议。',py:'Liǎng jiā gōngsī dōu biǎodále hézuò de yìxiàng, xià ge yuè jiāng qiāndìng xiéyì.',vn:'Hai công ty đều đã bày tỏ ý định hợp tác, tháng sau sẽ ký thoả thuận.'}
   ],
   colloFull:[
     {zh:'假笑者的意向',py:'jiǎxiàozhě de yìxiàng',vn:'ý đồ của người cười giả'},
     {zh:'购买意向',py:'gòumǎi yìxiàng',vn:'ý định mua hàng'},
     {zh:'合作意向',py:'hézuò yìxiàng',vn:'ý định hợp tác'},
     {zh:'有留学的意向',py:'yǒu liúxué de yìxiàng',vn:'có ý định du học'},
     {zh:'意向书',py:'yìxiàngshū',vn:'thư bày tỏ ý định'}
   ],
   patterns:[
     {s:'有 / 表达 + V + 的意向',m:'Có / bày tỏ ý định làm gì'},
     {s:'调查 + ……的 + (购买) + 意向',m:'Điều tra ý định (mua hàng) của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy có ý định đi du học, nhưng vẫn chưa quyết định đi nước nào.',answer:'他虽然有出国留学的意向，但还没决定去哪个国家。',answerPy:'Tā suīrán yǒu chūguó liúxué de yìxiàng, dàn hái méi juédìng qù nǎge guójiā.',
      note:'虽然……但…… (ôn HSK 4); 有……的意向.',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Để hiểu ý định mua hàng của học sinh, chúng tôi đã làm một cuộc khảo sát.',answer:'为了了解学生的购买意向，我们做了一次调查。',answerPy:'Wèile liǎojiě xuésheng de gòumǎi yìxiàng, wǒmen zuòle yí cì diàochá.',
      note:'为了…… mục đích (ôn HSK 3–4).',pair:'为了……'}
   ]},

  {n:21,zh:'诚挚',py:'chéngzhì',pos:'Tính từ',vn:'chân thành, thành khẩn, tha thiết',hv:'thành chí',em:'💗',lesson:1,
   explain:['Chân thành và tha thiết, xuất phát từ đáy lòng: 诚 = thành thật, 挚 = thiết tha. Hay dùng trong lời cảm ơn, chúc mừng trang trọng: 致以诚挚的谢意 / 问候.','Văn viết, trang trọng hơn 真诚 / 真心. Trái nghĩa với 虚伪 / 虚假. Bài khoá: 诚挚的笑声 = tiếng cười chân thành.'],
   usage:'诚挚的 + 笑声 / 谢意 / 祝福 / 问候 / 邀请; 表示 / 致以 + 诚挚的 + ……; 态度 + 诚挚.',
   collo:['诚挚的笑声','诚挚的谢意','诚挚的祝福','致以诚挚的问候'],
   ex_zh:'诚挚的笑声则会激活大脑中与快乐和积极情绪相关的区域',ex_py:'chéngzhì de xiàoshēng zé huì jīhuó dànǎo zhōng yǔ kuàilè hé jījí qíngxù xiāngguān de qūyù',ex_vn:'còn tiếng cười chân thành thì sẽ kích hoạt vùng não liên quan đến niềm vui và cảm xúc tích cực',
   exList:[
     {zh:'诚挚的笑声则会激活大脑中与快乐和积极情绪相关的区域。',py:'Chéngzhì de xiàoshēng zé huì jīhuó dànǎo zhōng yǔ kuàilè hé jījí qíngxù xiāngguān de qūyù.',vn:'Còn tiếng cười chân thành thì sẽ kích hoạt vùng não liên quan đến niềm vui và cảm xúc tích cực.'},
     {zh:'在此，我代表全班同学向老师表示诚挚的谢意。',py:'Zài cǐ, wǒ dàibiǎo quán bān tóngxué xiàng lǎoshī biǎoshì chéngzhì de xièyì.',vn:'Nhân đây, em xin thay mặt cả lớp bày tỏ lòng biết ơn chân thành tới thầy cô.'},
     {zh:'新年来临之际，向各位朋友致以诚挚的问候和祝福。',py:'Xīnnián láilín zhī jì, xiàng gè wèi péngyou zhìyǐ chéngzhì de wènhòu hé zhùfú.',vn:'Nhân dịp năm mới đến, xin gửi tới các bạn lời hỏi thăm và chúc phúc chân thành.'}
   ],
   colloFull:[
     {zh:'诚挚的笑声',py:'chéngzhì de xiàoshēng',vn:'tiếng cười chân thành'},
     {zh:'诚挚的谢意',py:'chéngzhì de xièyì',vn:'lòng biết ơn chân thành'},
     {zh:'诚挚的祝福',py:'chéngzhì de zhùfú',vn:'lời chúc chân thành'},
     {zh:'致以诚挚的问候',py:'zhìyǐ chéngzhì de wènhòu',vn:'gửi lời hỏi thăm chân thành'},
     {zh:'诚挚的邀请',py:'chéngzhì de yāoqǐng',vn:'lời mời chân thành'}
   ],
   patterns:[
     {s:'向 + người + 表示 / 致以 + 诚挚的 + 谢意 / 问候',m:'Bày tỏ / gửi lời … chân thành tới ai'},
     {s:'诚挚的 + N (笑声 / 祝福 / 邀请)',m:'… chân thành, thành khẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân dịp tốt nghiệp, chúng em xin gửi lời cảm ơn chân thành tới các thầy cô.',answer:'在毕业之际，我们向各位老师表示诚挚的谢意。',answerPy:'Zài bìyè zhī jì, wǒmen xiàng gè wèi lǎoshī biǎoshì chéngzhì de xièyì.',
      note:'在……之际 = nhân dịp (văn viết); 向……表示…….',pair:'向……表示……'},
     {promptLang:'vi',prompt:'Nụ cười chân thành của cô ấy khiến ai cũng cảm thấy ấm áp.',answer:'她诚挚的笑容让每个人都感到很温暖。',answerPy:'Tā chéngzhì de xiàoróng ràng měi ge rén dōu gǎndào hěn wēnnuǎn.',
      note:'让 + người + 感到 + Adj (ôn HSK 4).',pair:'让……感到……'}
   ]},

  {n:22,zh:'一丝不苟',py:'yìsī-bùgǒu',pos:'Thành ngữ',vn:'cẩn thận tỉ mỉ, không qua loa chút nào',hv:'nhất ti bất cẩu',em:'🔬',lesson:1,
   explain:['Làm việc cẩn thận, nghiêm túc đến từng chi tiết nhỏ, không hề cẩu thả: 一丝 = một sợi tơ (chút xíu), 不苟 = không qua loa. Khen thái độ làm việc, nghiên cứu.','Làm định ngữ (一丝不苟的研究者), trạng ngữ (一丝不苟地工作) hoặc vị ngữ (工作一丝不苟). Gần 兢兢业业 (HSK 6 bài 6).'],
   usage:'一丝不苟的 + 人 / 态度 / 精神; 一丝不苟 + 地 + V; 对……一丝不苟; 工作 + 一丝不苟.',
   collo:['一丝不苟的研究者','一丝不苟地工作','一丝不苟的态度','对工作一丝不苟'],
   ex_zh:'为了证实这一理论，一丝不苟的研究者让志愿者倾听网站视频中的笑声',ex_py:'Wèile zhèngshí zhè yī lǐlùn, yìsī-bùgǒu de yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng',ex_vn:'Để chứng thực lý thuyết này, các nhà nghiên cứu tỉ mỉ đã cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web',
   exList:[
     {zh:'为了证实这一理论，一丝不苟的研究者让志愿者倾听网站视频中的笑声。',py:'Wèile zhèngshí zhè yī lǐlùn, yìsī-bùgǒu de yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng.',vn:'Để chứng thực lý thuyết này, các nhà nghiên cứu cẩn thận tỉ mỉ đã cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web.'},
     {zh:'王老师批改作业一丝不苟，连一个标点也不放过。',py:'Wáng lǎoshī pīgǎi zuòyè yìsī-bùgǒu, lián yí ge biāodiǎn yě bú fàngguò.',vn:'Thầy Vương chấm bài rất tỉ mỉ, đến một dấu câu cũng không bỏ qua.'},
     {zh:'经过一丝不苟的生产过程，这批产品的质量非常可靠。',py:'Jīngguò yìsī-bùgǒu de shēngchǎn guòchéng, zhè pī chǎnpǐn de zhìliàng fēicháng kěkào.',vn:'Trải qua quá trình sản xuất cẩn thận tỉ mỉ, chất lượng lô hàng này rất đáng tin cậy.'}
   ],
   colloFull:[
     {zh:'一丝不苟的研究者',py:'yìsī-bùgǒu de yánjiūzhě',vn:'nhà nghiên cứu tỉ mỉ'},
     {zh:'一丝不苟地工作',py:'yìsī-bùgǒu de gōngzuò',vn:'làm việc cẩn thận tỉ mỉ'},
     {zh:'一丝不苟的态度',py:'yìsī-bùgǒu de tàidu',vn:'thái độ nghiêm túc tỉ mỉ'},
     {zh:'对工作一丝不苟',py:'duì gōngzuò yìsī-bùgǒu',vn:'làm việc không qua loa chút nào'},
     {zh:'一丝不苟的生产过程',py:'yìsī-bùgǒu de shēngchǎn guòchéng',vn:'quy trình sản xuất tỉ mỉ'}
   ],
   patterns:[
     {s:'对 + việc + 一丝不苟',m:'Làm việc gì rất cẩn thận, nghiêm túc'},
     {s:'一丝不苟 + 地 + V',m:'Làm gì một cách tỉ mỉ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố tôi làm việc cẩn thận tỉ mỉ, chưa bao giờ mắc lỗi.',answer:'我爸爸工作一丝不苟，从来没出过错。',answerPy:'Wǒ bàba gōngzuò yìsī-bùgǒu, cónglái méi chūguo cuò.',
      note:'从来没 + V + 过 = chưa bao giờ (ôn HSK 4).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chính nhờ thái độ tỉ mỉ ấy mà thí nghiệm của anh ấy thành công.',answer:'正是因为这种一丝不苟的态度，他的实验才成功了。',answerPy:'Zhèng shì yīnwèi zhè zhǒng yìsī-bùgǒu de tàidu, tā de shíyàn cái chénggōng le.',
      note:'正是因为……才…… nhấn mạnh nguyên nhân (ôn HSK 5).',pair:'正是因为……才……'}
   ]},

  {n:23,zh:'倾听',py:'qīngtīng',pos:'Động từ',vn:'lắng nghe, chú ý nghe',hv:'khuynh thính',em:'👂',lesson:1,
   explain:['Chăm chú, dốc lòng lắng nghe (倾 = nghiêng, dồn hết; 听 = nghe): nghe một cách nghiêm túc, tôn trọng người nói. 倾听意见 / 心声 / 音乐.','Văn viết, trang trọng hơn 听; hay dùng khi nói về giao tiếp, tâm lý: 学会倾听 (học cách lắng nghe). Có thể đi với 认真 / 耐心 / 静静地.'],
   usage:'倾听 + 意见 / 心声 / 声音 / 笑声; 认真 / 耐心 + 地 + 倾听; 学会倾听; 善于倾听.',
   collo:['倾听笑声','倾听意见','耐心地倾听','学会倾听'],
   ex_zh:'一丝不苟的研究者让志愿者倾听网站视频中的笑声',ex_py:'yìsī-bùgǒu de yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng',ex_vn:'các nhà nghiên cứu tỉ mỉ cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web',
   exList:[
     {zh:'研究者让志愿者倾听网站视频中的笑声，同时记录他们大脑的反应。',py:'Yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng, tóngshí jìlù tāmen dànǎo de fǎnyìng.',vn:'Các nhà nghiên cứu cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web, đồng thời ghi lại phản ứng của não họ.'},
     {zh:'好老师不但会讲课，而且善于倾听学生的心声。',py:'Hǎo lǎoshī búdàn huì jiǎngkè, érqiě shànyú qīngtīng xuésheng de xīnshēng.',vn:'Giáo viên giỏi không chỉ biết giảng bài mà còn giỏi lắng nghe tiếng lòng của học sinh.'},
     {zh:'朋友难过的时候，你不用多说什么，耐心地倾听就够了。',py:'Péngyou nánguò de shíhou, nǐ búyòng duō shuō shénme, nàixīn de qīngtīng jiù gòu le.',vn:'Khi bạn bè buồn, bạn không cần nói nhiều, kiên nhẫn lắng nghe là đủ.'}
   ],
   colloFull:[
     {zh:'倾听笑声',py:'qīngtīng xiàoshēng',vn:'lắng nghe tiếng cười'},
     {zh:'倾听意见',py:'qīngtīng yìjiàn',vn:'lắng nghe ý kiến'},
     {zh:'耐心地倾听',py:'nàixīn de qīngtīng',vn:'kiên nhẫn lắng nghe'},
     {zh:'学会倾听',py:'xuéhuì qīngtīng',vn:'học cách lắng nghe'},
     {zh:'倾听心声',py:'qīngtīng xīnshēng',vn:'lắng nghe tiếng lòng'}
   ],
   patterns:[
     {s:'让 + người + 倾听 + N',m:'Cho ai lắng nghe cái gì'},
     {s:'善于 / 学会 + 倾听 + ……',m:'Giỏi / học cách lắng nghe'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn người khác hiểu mình, trước hết phải học cách lắng nghe người khác.',answer:'要想让别人理解自己，首先要学会倾听别人。',answerPy:'Yào xiǎng ràng biérén lǐjiě zìjǐ, shǒuxiān yào xuéhuì qīngtīng biérén.',
      note:'要想……，首先要…… (muốn … thì trước hết phải …).',pair:'要想……首先……'},
     {promptLang:'vi',prompt:'Hiệu trưởng ngồi đó yên lặng lắng nghe ý kiến của học sinh.',answer:'校长坐在那儿，静静地倾听着学生们的意见。',answerPy:'Xiàozhǎng zuò zài nàr, jìngjìng de qīngtīngzhe xuéshengmen de yìjiàn.',
      note:'Adj láy + 地 + V + 着 (trạng thái kéo dài).',pair:'V着'}
   ]},

  {n:24,zh:'视频',py:'shìpín',pos:'Danh từ',vn:'video, clip',hv:'thị tần',em:'🎬',lesson:1,
   explain:['Video, đoạn phim kỹ thuật số (视 = nhìn, 频 = tần số, tín hiệu): 看视频 / 拍视频 / 短视频. Lượng từ: 个 / 段 (一段视频).','Hay ghép: 视频通话 / 视频聊天 (gọi video), 视频网站 (trang web video), 短视频 (video ngắn).'],
   usage:'看 / 拍 / 发 / 剪 + 视频; 一段 + 视频; 视频 + 通话 / 聊天 / 网站; 短视频.',
   collo:['网站视频','拍视频','视频通话','短视频'],
   ex_zh:'让志愿者倾听网站视频中的笑声',ex_py:'ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng',ex_vn:'cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web',
   exList:[
     {zh:'一丝不苟的研究者让志愿者倾听网站视频中的笑声。',py:'Yìsī-bùgǒu de yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng.',vn:'Các nhà nghiên cứu tỉ mỉ cho tình nguyện viên lắng nghe tiếng cười trong video trên trang web.'},
     {zh:'周末我常常跟在国外留学的姐姐视频聊天。',py:'Zhōumò wǒ chángcháng gēn zài guówài liúxué de jiějie shìpín liáotiān.',vn:'Cuối tuần tôi thường gọi video trò chuyện với chị gái đang du học ở nước ngoài.'},
     {zh:'他把旅行时拍的视频剪成了一个三分钟的短片。',py:'Tā bǎ lǚxíng shí pāi de shìpín jiǎnchéngle yí ge sān fēnzhōng de duǎnpiàn.',vn:'Cậu ấy dựng video quay trong chuyến du lịch thành một đoạn phim ngắn ba phút.'}
   ],
   colloFull:[
     {zh:'网站视频',py:'wǎngzhàn shìpín',vn:'video trên trang web'},
     {zh:'拍视频',py:'pāi shìpín',vn:'quay video'},
     {zh:'视频通话',py:'shìpín tōnghuà',vn:'gọi video'},
     {zh:'短视频',py:'duǎn shìpín',vn:'video ngắn'},
     {zh:'一段视频',py:'yí duàn shìpín',vn:'một đoạn video'}
   ],
   patterns:[
     {s:'跟 + người + 视频 (聊天 / 通话)',m:'Gọi video với ai'},
     {s:'看 / 拍 / 发 + (一段) + 视频',m:'Xem / quay / đăng video'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu tối nay có thời gian, chúng ta gọi video nhé.',answer:'如果今天晚上有时间，我们视频聊天吧。',answerPy:'Rúguǒ jīntiān wǎnshang yǒu shíjiān, wǒmen shìpín liáotiān ba.',
      note:'如果…… giả thiết; 吧 đề nghị (ôn HSK 2–3).',pair:'如果……'},
     {promptLang:'vi',prompt:'Xem video ngắn tuy thú vị, nhưng xem nhiều quá sẽ lãng phí thời gian.',answer:'看短视频虽然有意思，但是看得太多会浪费时间。',answerPy:'Kàn duǎn shìpín suīrán yǒu yìsi, dànshì kàn de tài duō huì làngfèi shíjiān.',
      note:'虽然……但是……; V得太多 (ôn HSK 4).',pair:'虽然……但是……'}
   ]},

  {n:25,zh:'一目了然',py:'yímù-liǎorán',pos:'Thành ngữ',vn:'nhìn qua là hiểu ngay, rõ như ban ngày',hv:'nhất mục liễu nhiên',em:'👀',lesson:1,
   explain:['Chỉ cần nhìn một cái là thấy rõ, hiểu ngay (一目 = một cái nhìn, 了然 = rõ ràng). Dùng cho kết quả, số liệu, bảng biểu, sự việc rõ ràng.','Thường làm vị ngữ: 结果一目了然 / 让人一目了然. Chú ý 了 đọc liǎo (không phải le).'],
   usage:'……一目了然; 让人 + 一目了然; 一目了然的 + 图表 / 结果.',
   collo:['测试结果一目了然','让人一目了然','一目了然的图表','看起来一目了然'],
   ex_zh:'测试结果一目了然',ex_py:'Cèshì jiéguǒ yímù-liǎorán',ex_vn:'Kết quả thử nghiệm nhìn qua là rõ',
   exList:[
     {zh:'测试结果一目了然，志愿者仅凭直觉就能准确地分辨出假笑声。',py:'Cèshì jiéguǒ yímù-liǎorán, zhìyuànzhě jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng.',vn:'Kết quả thử nghiệm nhìn qua là rõ: chỉ dựa vào trực giác, tình nguyện viên đã có thể phân biệt chính xác tiếng cười giả.'},
     {zh:'这张图表把全班的成绩变化画得一目了然。',py:'Zhè zhāng túbiǎo bǎ quán bān de chéngjì biànhuà huà de yímù-liǎorán.',vn:'Biểu đồ này vẽ sự thay đổi điểm số của cả lớp rõ ràng, nhìn qua là hiểu.'},
     {zh:'他的房间收拾得很整齐，东西放在哪儿一目了然。',py:'Tā de fángjiān shōushi de hěn zhěngqí, dōngxi fàng zài nǎr yímù-liǎorán.',vn:'Phòng của cậu ấy dọn rất ngăn nắp, đồ để ở đâu nhìn là thấy ngay.'}
   ],
   colloFull:[
     {zh:'测试结果一目了然',py:'cèshì jiéguǒ yímù-liǎorán',vn:'kết quả thử nghiệm rõ ràng'},
     {zh:'让人一目了然',py:'ràng rén yímù-liǎorán',vn:'khiến người ta nhìn qua là hiểu'},
     {zh:'一目了然的图表',py:'yímù-liǎorán de túbiǎo',vn:'biểu đồ dễ hiểu'},
     {zh:'看起来一目了然',py:'kàn qǐlai yímù-liǎorán',vn:'nhìn vào là rõ'},
     {zh:'画得一目了然',py:'huà de yímù-liǎorán',vn:'vẽ rõ ràng dễ hiểu'}
   ],
   patterns:[
     {s:'N (结果 / 情况) + 一目了然',m:'Cái gì rõ ràng, nhìn là hiểu'},
     {s:'V + 得 + 一目了然 / 让人一目了然',m:'Làm gì đến mức ai nhìn cũng hiểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần vẽ số liệu thành biểu đồ, người đọc sẽ nhìn qua là hiểu.',answer:'只要把数据画成图表，读者就能一目了然。',answerPy:'Zhǐyào bǎ shùjù huàchéng túbiǎo, dúzhě jiù néng yímù-liǎorán.',
      note:'只要……就……; câu 把 + V成 (ôn HSK 4).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ai đúng ai sai, xem video là rõ ngay.',answer:'谁对谁错，看了视频就一目了然了。',answerPy:'Shéi duì shéi cuò, kànle shìpín jiù yímù-liǎorán le.',
      note:'V了……就…… (làm xong … thì …); 谁……谁…… (ai … ai …).',pair:'V了……就……'}
   ]},

  {n:26,zh:'预先',py:'yùxiān',pos:'Phó từ',vn:'trước, sẵn, sớm (trước khi việc xảy ra)',hv:'dự tiên',em:'⏰',lesson:1,
   explain:['Phó từ, nghĩa là TRƯỚC KHI sự việc xảy ra hoặc động tác tiến hành đã làm / đã có hành động nào đó (điểm ngữ pháp 1 của bài): 预先订好旅馆, 预先准备.','Đứng trước động từ; hay đi với 订 / 准备 / 通知 / 告知 / 想到 / 安排; có thể đứng sau chủ ngữ + trước phủ định: 大家预先都没有想到. Gần 事先 (sự tiên), 提前.'],
   usage:'预先 + V (订好 / 准备 / 通知 / 告知 / 安排 / 想到); 预先 + 没 / 未 + V; 预先 + V + 好的 + N.',
   collo:['预先未被告知','预先订好','预先准备好','预先通知'],
   ex_zh:'志愿者在预先未被告知测试目的的情况下……',ex_py:'Zhìyuànzhě zài yùxiān wèi bèi gàozhī cèshì mùdì de qíngkuàng xià……',ex_vn:'Trong tình huống tình nguyện viên không được báo trước mục đích thử nghiệm…',
   exList:[
     {zh:'志愿者在预先未被告知测试目的的情况下，仅凭直觉就能准确地分辨出假笑声。',py:'Zhìyuànzhě zài yùxiān wèi bèi gàozhī cèshì mùdì de qíngkuàng xià, jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng.',vn:'Dù không được báo trước mục đích thử nghiệm, chỉ dựa vào trực giác, tình nguyện viên đã có thể phân biệt chính xác tiếng cười giả.'},
     {zh:'那里一年四季都是旅游旺季，到那里去旅行，一定要预先订好旅馆。',py:'Nàlǐ yì nián sìjì dōu shì lǚyóu wàngjì, dào nàlǐ qù lǚxíng, yídìng yào yùxiān dìnghǎo lǚguǎn.',vn:'Nơi đó quanh năm đều là mùa du lịch cao điểm, đi du lịch ở đó nhất định phải đặt sẵn khách sạn trước.'},
     {zh:'大家预先都没有想到，本届绘画展览竟然这么受欢迎。',py:'Dàjiā yùxiān dōu méiyǒu xiǎngdào, běn jiè huìhuà zhǎnlǎn jìngrán zhème shòu huānyíng.',vn:'Trước đó mọi người đều không ngờ triển lãm tranh kỳ này lại được đón nhận đến vậy.'}
   ],
   colloFull:[
     {zh:'预先未被告知',py:'yùxiān wèi bèi gàozhī',vn:'không được báo trước'},
     {zh:'预先订好',py:'yùxiān dìnghǎo',vn:'đặt sẵn trước'},
     {zh:'预先准备好',py:'yùxiān zhǔnbèi hǎo',vn:'chuẩn bị sẵn từ trước'},
     {zh:'预先通知',py:'yùxiān tōngzhī',vn:'thông báo trước'},
     {zh:'预先没有想到',py:'yùxiān méiyǒu xiǎngdào',vn:'trước đó không ngờ tới'}
   ],
   patterns:[
     {s:'预先 + V + 好 + (N)',m:'Làm sẵn việc gì từ trước'},
     {s:'S + 预先 + 没(有) / 未 + V',m:'Trước đó không (được) làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã lên kế hoạch sẵn từ trước, cho nên thực hiện rất suôn sẻ.',answer:'我已经预先做好了计划，所以实施起来很顺利。',answerPy:'Wǒ yǐjīng yùxiān zuòhǎole jìhuà, suǒyǐ shíshī qǐlai hěn shùnlì.',
      note:'Câu 练习2 của sách; V起来 = khi làm thì …; 实施 (HSK 6 bài 4).',pair:'V起来'},
     {promptLang:'vi',prompt:'Nếu không đến được thì nhớ báo trước cho tớ một tiếng.',answer:'如果来不了，记得预先通知我一声。',answerPy:'Rúguǒ lái bu liǎo, jìde yùxiān tōngzhī wǒ yì shēng.',
      note:'如果…… giả thiết; bổ ngữ khả năng 来不了; 记得 + V = nhớ làm gì.',pair:'如果……'}
   ]},

  {n:27,zh:'直觉',py:'zhíjué',pos:'Danh từ',vn:'trực giác',hv:'trực giác',em:'💡',lesson:1,
   explain:['Khả năng cảm nhận, phán đoán trực tiếp, không qua suy luận: 直 = thẳng, 觉 = cảm giác. 凭直觉 = dựa vào trực giác.','Hay đi với 凭 / 靠 / 相信 / 告诉我: 我的直觉告诉我…… (trực giác mách bảo tôi …). 女人的直觉 là cụm quen thuộc.'],
   usage:'凭 / 靠 + 直觉; 相信 + (自己的) + 直觉; 直觉 + 告诉 + 我; 直觉 + 很准.',
   collo:['仅凭直觉','相信直觉','直觉告诉我','直觉很准'],
   ex_zh:'仅凭直觉就能准确地分辨出假笑声',ex_py:'jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng',ex_vn:'chỉ dựa vào trực giác đã có thể phân biệt chính xác tiếng cười giả',
   exList:[
     {zh:'志愿者在预先未被告知测试目的的情况下，仅凭直觉就能准确地分辨出假笑声。',py:'Zhìyuànzhě zài yùxiān wèi bèi gàozhī cèshì mùdì de qíngkuàng xià, jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng.',vn:'Không được báo trước mục đích thử nghiệm, chỉ dựa vào trực giác, tình nguyện viên đã có thể phân biệt chính xác tiếng cười giả.'},
     {zh:'我的直觉告诉我，这个人说的不是实话。',py:'Wǒ de zhíjué gàosu wǒ, zhège rén shuō de bú shì shíhuà.',vn:'Trực giác mách bảo tôi rằng người này không nói thật.'},
     {zh:'做选择题时，如果实在不会，就相信自己的直觉吧。',py:'Zuò xuǎnzétí shí, rúguǒ shízài bú huì, jiù xiāngxìn zìjǐ de zhíjué ba.',vn:'Khi làm câu trắc nghiệm, nếu thật sự không biết thì cứ tin vào trực giác của mình.'}
   ],
   colloFull:[
     {zh:'仅凭直觉',py:'jǐn píng zhíjué',vn:'chỉ dựa vào trực giác'},
     {zh:'相信直觉',py:'xiāngxìn zhíjué',vn:'tin vào trực giác'},
     {zh:'直觉告诉我',py:'zhíjué gàosu wǒ',vn:'trực giác mách bảo tôi'},
     {zh:'直觉很准',py:'zhíjué hěn zhǔn',vn:'trực giác rất chuẩn'},
     {zh:'女人的直觉',py:'nǚrén de zhíjué',vn:'trực giác phụ nữ'}
   ],
   patterns:[
     {s:'(仅) 凭 + 直觉 + (就) + V',m:'Chỉ dựa vào trực giác mà làm được gì'},
     {s:'(我的) 直觉告诉我，……',m:'Trực giác mách bảo tôi rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trực giác mách bảo tôi rằng chuyện này không đơn giản như vậy.',answer:'我的直觉告诉我，这件事没有那么简单。',answerPy:'Wǒ de zhíjué gàosu wǒ, zhè jiàn shì méiyǒu nàme jiǎndān.',
      note:'A 没有 那么 + Adj = không … đến thế (so sánh, ôn HSK 4).',pair:'没有那么……'},
     {promptLang:'vi',prompt:'Chỉ dựa vào trực giác mà quyết định thì rất dễ sai.',answer:'只凭直觉做决定，很容易出错。',answerPy:'Zhǐ píng zhíjué zuò juédìng, hěn róngyì chū cuò.',
      note:'凭 + N + V (dựa vào …); 容易 + V (dễ …).',pair:'凭……'}
   ]},

  {n:28,zh:'探测',py:'tàncè',pos:'Động từ',vn:'thăm dò, dò tìm, phát hiện ra',hv:'thám trắc',em:'📡',lesson:1,
   explain:['Dùng thiết bị hoặc cách thức để dò xét, đo đạc những thứ khó thấy trực tiếp: 探 = dò, 测 = đo. 探测海底 / 地下资源 / 火星.','Nghĩa mở rộng trong bài: nhận biết, dò ra (cảm xúc, ý nghĩ của người khác) — 探测他人喜悦之情真伪 = dò ra niềm vui của người khác thật hay giả. Danh từ: 探测器 (máy dò).'],
   usage:'探测 + 海底 / 地下 / 太空 / 资源; 探测 + 情感 / 真伪 (nghĩa bóng); 探测器; 进行探测.',
   collo:['探测真伪','探测海底','探测器','火星探测'],
   ex_zh:'人的大脑中竟然深藏着一双能够探测他人喜悦之情真伪的眼睛！',ex_py:'Rén de dànǎo zhōng jìngrán shēncángzhe yì shuāng nénggòu tàncè tārén xǐyuè zhī qíng zhēnwěi de yǎnjing!',ex_vn:'Trong não người lại ẩn giấu một đôi mắt có thể dò ra niềm vui của người khác là thật hay giả!',
   exList:[
     {zh:'天呀，人的大脑中竟然深藏着一双能够探测他人喜悦之情真伪的眼睛！',py:'Tiān ya, rén de dànǎo zhōng jìngrán shēncángzhe yì shuāng nénggòu tàncè tārén xǐyuè zhī qíng zhēnwěi de yǎnjing!',vn:'Trời ơi, trong não người lại ẩn sâu một đôi mắt có thể dò ra niềm vui của người khác là thật hay giả!'},
     {zh:'科学家用先进的仪器探测海底的情况。',py:'Kēxuéjiā yòng xiānjìn de yíqì tàncè hǎidǐ de qíngkuàng.',vn:'Các nhà khoa học dùng thiết bị tiên tiến thăm dò tình hình đáy biển.'},
     {zh:'这台火星探测器已经在太空中飞行了半年多。',py:'Zhè tái Huǒxīng tàncèqì yǐjīng zài tàikōng zhōng fēixíngle bàn nián duō.',vn:'Tàu thăm dò sao Hoả này đã bay trong không gian hơn nửa năm.'}
   ],
   colloFull:[
     {zh:'探测真伪',py:'tàncè zhēnwěi',vn:'dò xem thật giả'},
     {zh:'探测海底',py:'tàncè hǎidǐ',vn:'thăm dò đáy biển'},
     {zh:'探测器',py:'tàncèqì',vn:'máy dò, tàu thăm dò'},
     {zh:'火星探测',py:'Huǒxīng tàncè',vn:'thăm dò sao Hoả'},
     {zh:'探测地下资源',py:'tàncè dìxià zīyuán',vn:'thăm dò tài nguyên dưới lòng đất'}
   ],
   patterns:[
     {s:'用 + thiết bị + 探测 + đối tượng',m:'Dùng máy móc để thăm dò cái gì'},
     {s:'能够探测 + ……的真伪',m:'Có thể dò ra thật hay giả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ thiết bị mới, các nhà khoa học đã phát hiện ra nguồn nước dưới lòng đất.',answer:'借助新的仪器，科学家们探测到了地下的水源。',answerPy:'Jièzhù xīn de yíqì, kēxuéjiāmen tàncè dàole dìxià de shuǐyuán.',
      note:'借助 (HSK 6 bài 5); V到 = bổ ngữ kết quả "được, tới".',pair:'借助……'},
     {promptLang:'vi',prompt:'Chó có thể dò ra những thứ mà con người không ngửi thấy.',answer:'狗能探测出人闻不到的东西。',answerPy:'Gǒu néng tàncè chū rén wén bu dào de dōngxi.',
      note:'V出 (dò ra); bổ ngữ khả năng 闻不到 làm định ngữ.',pair:'V不到'}
   ]},

  {n:29,zh:'智商',py:'zhìshāng',pos:'Danh từ',vn:'chỉ số thông minh, IQ',hv:'trí thương',em:'🧠',lesson:1,
   explain:['Chỉ số thông minh (IQ): 智 = trí tuệ, 商 = thương số (kết quả phép chia). 智商高 / 低, 测智商.','Hay đi đôi với 情商 (chỉ số cảm xúc EQ). Bài khoá: 这不完全是智商问题 = đây không hoàn toàn là vấn đề trí thông minh.'],
   usage:'智商 + 高 / 低; 测 + 智商; 智商 + 问题; 智商和情商.',
   collo:['智商问题','智商很高','测智商','智商和情商'],
   ex_zh:'这不完全是智商问题',ex_py:'zhè bù wánquán shì zhìshāng wèntí',ex_vn:'đây không hoàn toàn là vấn đề chỉ số thông minh',
   exList:[
     {zh:'人类大脑对于笑声中所隐含的社会和情感信息非常敏感，这不完全是智商问题。',py:'Rénlèi dànǎo duìyú xiàoshēng zhōng suǒ yǐnhán de shèhuì hé qínggǎn xìnxī fēicháng mǐngǎn, zhè bù wánquán shì zhìshāng wèntí.',vn:'Não người rất nhạy cảm với những thông tin xã hội và cảm xúc ẩn chứa trong tiếng cười, điều này không hoàn toàn là vấn đề chỉ số thông minh.'},
     {zh:'智商高的人不一定成功，情商也同样重要。',py:'Zhìshāng gāo de rén bù yídìng chénggōng, qíngshāng yě tóngyàng zhòngyào.',vn:'Người có IQ cao chưa chắc thành công, EQ cũng quan trọng không kém.'},
     {zh:'这孩子智商很高，五岁就能看懂报纸了。',py:'Zhè háizi zhìshāng hěn gāo, wǔ suì jiù néng kàndǒng bàozhǐ le.',vn:'Đứa bé này chỉ số thông minh rất cao, năm tuổi đã đọc hiểu báo rồi.'}
   ],
   colloFull:[
     {zh:'智商问题',py:'zhìshāng wèntí',vn:'vấn đề trí thông minh'},
     {zh:'智商很高',py:'zhìshāng hěn gāo',vn:'IQ rất cao'},
     {zh:'测智商',py:'cè zhìshāng',vn:'đo chỉ số IQ'},
     {zh:'智商和情商',py:'zhìshāng hé qíngshāng',vn:'IQ và EQ'},
     {zh:'高智商',py:'gāo zhìshāng',vn:'chỉ số thông minh cao'}
   ],
   patterns:[
     {s:'……不完全是 / 不只是 + 智商问题',m:'Điều gì không chỉ do trí thông minh'},
     {s:'智商高的人 + 不一定 + ……',m:'Người IQ cao chưa chắc …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học giỏi hay không, không chỉ phụ thuộc vào chỉ số thông minh mà còn phụ thuộc vào sự chăm chỉ.',answer:'学习好不好，不仅取决于智商，还取决于是否努力。',answerPy:'Xuéxí hǎo bu hǎo, bùjǐn qǔjué yú zhìshāng, hái qǔjué yú shìfǒu nǔlì.',
      note:'不仅……还…… (ôn HSK 5); 取决于 = phụ thuộc vào.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Cậu ấy tuy IQ cao, nhưng chẳng biết quan tâm đến người khác.',answer:'他虽然智商很高，却一点儿也不懂得关心别人。',answerPy:'Tā suīrán zhìshāng hěn gāo, què yìdiǎnr yě bù dǒngde guānxīn biérén.',
      note:'虽然……却……; 一点儿也不 + V (ôn HSK 4).',pair:'虽然……却……'}
   ]},

  {n:30,zh:'提炼',py:'tíliàn',pos:'Động từ',vn:'lọc, tinh chế, rút ra (tinh tuý)',hv:'đề luyện',em:'⚗️',lesson:1,
   explain:['Nghĩa gốc: dùng phương pháp hoá học / vật lý để lọc lấy chất cần thiết từ hỗn hợp: 从石油中提炼汽油. 提 = rút lấy, 炼 = luyện.','Nghĩa bóng (hay gặp hơn ở HSK 6): chắt lọc, đúc kết cái tinh tuý từ tư liệu, kinh nghiệm: 提炼主题 / 信息 / 观点. Bài khoá: 提炼出真假笑声背后的信息.'],
   usage:'从……中 + 提炼 + (出) + N; 提炼 + 信息 / 主题 / 观点 / 精华; 提炼 + 汽油 / 盐.',
   collo:['提炼出信息','从石油中提炼','提炼主题','提炼精华'],
   ex_zh:'进而更精准地提炼出真假笑声背后的信息',ex_py:'jìn\'ér gèng jīngzhǔn de tíliàn chū zhēn jiǎ xiàoshēng bèihòu de xìnxī',ex_vn:'từ đó rút ra chính xác hơn thông tin đằng sau tiếng cười thật và giả',
   exList:[
     {zh:'有些志愿者还动用了大脑中控制运动和感知的部分，进而更精准地提炼出真假笑声背后的信息。',py:'Yǒuxiē zhìyuànzhě hái dòngyòngle dànǎo zhōng kòngzhì yùndòng hé gǎnzhī de bùfen, jìn\'ér gèng jīngzhǔn de tíliàn chū zhēn jiǎ xiàoshēng bèihòu de xìnxī.',vn:'Một số tình nguyện viên còn huy động cả phần não điều khiển vận động và cảm nhận, từ đó rút ra chính xác hơn thông tin đằng sau tiếng cười thật và giả.'},
     {zh:'汽油是从石油中提炼出来的。',py:'Qìyóu shì cóng shíyóu zhōng tíliàn chūlai de.',vn:'Xăng được tinh chế từ dầu mỏ.'},
     {zh:'写缩写的时候，要先从课文中提炼出主要内容。',py:'Xiě suōxiě de shíhou, yào xiān cóng kèwén zhōng tíliàn chū zhǔyào nèiróng.',vn:'Khi viết tóm tắt, trước hết phải rút ra nội dung chính từ bài khoá.'}
   ],
   colloFull:[
     {zh:'提炼出信息',py:'tíliàn chū xìnxī',vn:'rút ra thông tin'},
     {zh:'从石油中提炼',py:'cóng shíyóu zhōng tíliàn',vn:'tinh chế từ dầu mỏ'},
     {zh:'提炼主题',py:'tíliàn zhǔtí',vn:'đúc kết chủ đề'},
     {zh:'提炼精华',py:'tíliàn jīnghuá',vn:'chắt lọc tinh hoa'},
     {zh:'提炼观点',py:'tíliàn guāndiǎn',vn:'rút ra quan điểm'}
   ],
   patterns:[
     {s:'从 + A + 中 + 提炼 + 出 + B',m:'Tinh chế / rút B ra từ A'},
     {s:'B + 是从 + A + 中提炼出来的',m:'B được chiết xuất từ A'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc xong bài văn này, em hãy rút ra quan điểm chính của tác giả.',answer:'读完这篇文章以后，请你提炼出作者的主要观点。',answerPy:'Dúwán zhè piān wénzhāng yǐhòu, qǐng nǐ tíliàn chū zuòzhě de zhǔyào guāndiǎn.',
      note:'V完……以后 (ôn HSK 3); 请你 + V.',pair:'V完以后'},
     {promptLang:'vi',prompt:'Loại dầu này được chiết xuất từ hạt của một loài cây.',answer:'这种油是从一种植物的种子中提炼出来的。',answerPy:'Zhè zhǒng yóu shì cóng yì zhǒng zhíwù de zhǒngzi zhōng tíliàn chūlai de.',
      note:'是……的 nhấn mạnh nguồn gốc; 种子 (HSK 6 bài 15).',pair:'是……的'}
   ]},

  {n:31,zh:'相声',py:'xiàngsheng',pos:'Danh từ',vn:'tấu hài (tướng thanh — loại hình nghệ thuật nói hài của Trung Quốc)',hv:'tướng thanh',em:'🎤',lesson:1,
   explain:['Loại hình nghệ thuật dân gian Trung Quốc: một hoặc hai (có khi nhiều) nghệ sĩ đứng nói, đối đáp gây cười, dựa vào 说、学、逗、唱 (nói, bắt chước, chọc cười, hát). Chữ 声 đọc nhẹ.','Lượng từ: 段 (一段相声). 说相声 = diễn tấu hài; 相声演员 = diễn viên tấu hài; 对口相声 = tấu hài đối đáp hai người.'],
   usage:'听 / 说 + 相声; 一段 + 相声; 相声 + 演员; 对口相声.',
   collo:['听相声','说相声','一段相声','相声演员'],
   ex_zh:'中国人喜欢听相声，因为它逗笑。',ex_py:'Zhōngguórén xǐhuan tīng xiàngsheng, yīnwèi tā dòuxiào.',ex_vn:'Người Trung Quốc thích nghe tấu hài, vì nó gây cười.',
   exList:[
     {zh:'中国人喜欢听相声，因为它逗笑。',py:'Zhōngguórén xǐhuan tīng xiàngsheng, yīnwèi tā dòuxiào.',vn:'Người Trung Quốc thích nghe tấu hài, vì nó gây cười.'},
     {zh:'春节联欢晚会上，这段相声把观众逗得哈哈大笑。',py:'Chūnjié Liánhuān Wǎnhuì shang, zhè duàn xiàngsheng bǎ guānzhòng dòu de hāhā dà xiào.',vn:'Tại đêm Gala mừng xuân, tiết mục tấu hài này khiến khán giả cười ha hả.'},
     {zh:'他从小就喜欢说相声，长大后成了一名有名的相声演员。',py:'Tā cóng xiǎo jiù xǐhuan shuō xiàngsheng, zhǎngdà hòu chéngle yì míng yǒumíng de xiàngsheng yǎnyuán.',vn:'Từ nhỏ anh ấy đã thích diễn tấu hài, lớn lên trở thành một diễn viên tấu hài nổi tiếng.'}
   ],
   colloFull:[
     {zh:'听相声',py:'tīng xiàngsheng',vn:'nghe tấu hài'},
     {zh:'说相声',py:'shuō xiàngsheng',vn:'diễn tấu hài'},
     {zh:'一段相声',py:'yí duàn xiàngsheng',vn:'một tiết mục tấu hài'},
     {zh:'相声演员',py:'xiàngsheng yǎnyuán',vn:'diễn viên tấu hài'},
     {zh:'对口相声',py:'duìkǒu xiàngsheng',vn:'tấu hài đối đáp'}
   ],
   patterns:[
     {s:'听 / 说 + (一段) + 相声',m:'Nghe / diễn một tiết mục tấu hài'},
     {s:'相声 + 把 + người + 逗得 + ……',m:'Tấu hài chọc ai cười đến mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn hiểu tấu hài thì phải biết khá nhiều về văn hoá Trung Quốc.',answer:'要想听懂相声，得对中国文化有比较多的了解。',answerPy:'Yào xiǎng tīngdǒng xiàngsheng, děi duì Zhōngguó wénhuà yǒu bǐjiào duō de liǎojiě.',
      note:'要想……，得…… (muốn … thì phải …); 对……有了解.',pair:'对……有了解'},
     {promptLang:'vi',prompt:'Tiết mục tấu hài này hay đến mức cả khán phòng cười không ngớt.',answer:'这段相声说得太精彩了，全场观众笑个不停。',answerPy:'Zhè duàn xiàngsheng shuō de tài jīngcǎi le, quán chǎng guānzhòng xiào ge bù tíng.',
      note:'V + 个不停 = … không ngừng (ôn HSK 5).',pair:'V个不停'}
   ]},

  {n:32,zh:'座右铭',py:'zuòyòumíng',pos:'Danh từ',vn:'lời răn, châm ngôn sống (tọa hữu minh)',hv:'toạ hữu minh',em:'📜',lesson:1,
   explain:['Câu châm ngôn đặt bên phải chỗ ngồi để tự răn mình (座 = chỗ ngồi, 右 = bên phải, 铭 = lời khắc); nay chỉ câu nói mình lấy làm phương châm sống, tự nhắc nhở bản thân.','Hay dùng: 把……当作 / 作为 + 座右铭; 我的座右铭是…….'],
   usage:'把……当作 / 作为 + 座右铭; ……的座右铭是……; 人生 / 生活的座右铭.',
   collo:['生活的座右铭','当作座右铭','我的座右铭','人生座右铭'],
   ex_zh:'甚至被一些人当作生活的座右铭',ex_py:'shènzhì bèi yìxiē rén dàngzuò shēnghuó de zuòyòumíng',ex_vn:'thậm chí còn được một số người coi là châm ngôn sống',
   exList:[
     {zh:'“笑一笑十年少”“一笑解千愁”不仅被大家认可，甚至被一些人当作生活的座右铭。',py:'“Xiào yi xiào shí nián shào” “yí xiào jiě qiān chóu” bùjǐn bèi dàjiā rènkě, shènzhì bèi yìxiē rén dàngzuò shēnghuó de zuòyòumíng.',vn:'"Một nụ cười trẻ mười năm", "cười một cái tan nghìn nỗi sầu" không chỉ được mọi người thừa nhận, thậm chí còn được một số người coi là châm ngôn sống.'},
     {zh:'我的座右铭是“有志者事竟成”。',py:'Wǒ de zuòyòumíng shì “yǒu zhì zhě shì jìng chéng”.',vn:'Châm ngôn của tôi là "có chí thì nên".'},
     {zh:'他把老师送的那句话写在本子上，当作自己的座右铭。',py:'Tā bǎ lǎoshī sòng de nà jù huà xiě zài běnzi shang, dàngzuò zìjǐ de zuòyòumíng.',vn:'Cậu ấy chép câu nói thầy tặng vào vở, coi đó là châm ngôn của mình.'}
   ],
   colloFull:[
     {zh:'生活的座右铭',py:'shēnghuó de zuòyòumíng',vn:'châm ngôn sống'},
     {zh:'当作座右铭',py:'dàngzuò zuòyòumíng',vn:'coi là châm ngôn'},
     {zh:'我的座右铭',py:'wǒ de zuòyòumíng',vn:'châm ngôn của tôi'},
     {zh:'人生座右铭',py:'rénshēng zuòyòumíng',vn:'châm ngôn cuộc đời'},
     {zh:'作为座右铭',py:'zuòwéi zuòyòumíng',vn:'lấy làm châm ngôn'}
   ],
   patterns:[
     {s:'把 + câu nói + 当作 / 作为 + 座右铭',m:'Lấy câu gì làm châm ngôn'},
     {s:'……的座右铭是“……”',m:'Châm ngôn của ai là "…"'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi luôn coi câu "chăm chỉ tiết kiệm" là châm ngôn sống.',answer:'我爷爷一直把“勤俭节约”当作生活的座右铭。',answerPy:'Wǒ yéye yìzhí bǎ “qínjiǎn jiéyuē” dàngzuò shēnghuó de zuòyòumíng.',
      note:'把 A 当作 B = coi A là B (ôn HSK 5); 勤俭 (HSK 6 bài 20).',pair:'把……当作……'},
     {promptLang:'vi',prompt:'Nếu phải chọn một câu làm châm ngôn, em sẽ chọn câu nào?',answer:'如果要选一句话作为座右铭，你会选哪一句？',answerPy:'Rúguǒ yào xuǎn yí jù huà zuòwéi zuòyòumíng, nǐ huì xuǎn nǎ yí jù?',
      note:'作为 = làm, với tư cách (ôn HSK 4–5).',pair:'作为……'}
   ]},

  {n:33,zh:'通用',py:'tōngyòng',pos:'Động từ',vn:'thông dụng, dùng chung, dùng phổ biến',hv:'thông dụng',em:'🌐',lesson:1,
   explain:['Dùng được phổ biến, dùng chung ở mọi nơi / trong mọi trường hợp: 国际通用 / 全国通用 / 通用语言. 通 = thông suốt, 用 = dùng.','Hay làm định ngữ (最通用的方法, 通用的单位) hoặc vị ngữ (这两个字可以通用 = hai chữ này dùng thay nhau được).'],
   usage:'(在)……通用; 国际 / 全国 + 通用; 通用 + 的 + N; A 和 B + 可以通用.',
   collo:['最通用','国际上通用','通用语言','可以通用'],
   ex_zh:'都会是生活中最通用，而且管用的治病良方',ex_py:'dōu huì shì shēnghuó zhōng zuì tōngyòng, érqiě guǎnyòng de zhì bìng liángfāng',ex_vn:'đều sẽ là phương thuốc chữa bệnh thông dụng nhất mà lại hiệu nghiệm trong cuộc sống',
   exList:[
     {zh:'中国人深信开怀大笑也好，哈哈傻笑也罢，都会是生活中最通用，而且管用的治病良方。',py:'Zhōngguórén shēnxìn kāihuái dà xiào yě hǎo, hāhā shǎxiào yě bà, dōu huì shì shēnghuó zhōng zuì tōngyòng, érqiě guǎnyòng de zhì bìng liángfāng.',vn:'Người Trung Quốc tin chắc rằng dù là cười sảng khoái hay cười ha hả ngây ngô, đều sẽ là phương thuốc chữa bệnh thông dụng nhất mà lại hiệu nghiệm trong cuộc sống.'},
     {zh:'“米”是国际上通用的基本长度单位。',py:'“Mǐ” shì guójì shang tōngyòng de jīběn chángdù dānwèi.',vn:'"Mét" là đơn vị đo chiều dài cơ bản được dùng phổ biến trên thế giới.'},
     {zh:'英语是很多国际会议的通用语言。',py:'Yīngyǔ shì hěn duō guójì huìyì de tōngyòng yǔyán.',vn:'Tiếng Anh là ngôn ngữ dùng chung của nhiều hội nghị quốc tế.'}
   ],
   colloFull:[
     {zh:'最通用',py:'zuì tōngyòng',vn:'thông dụng nhất'},
     {zh:'国际上通用',py:'guójì shang tōngyòng',vn:'dùng phổ biến trên thế giới'},
     {zh:'通用语言',py:'tōngyòng yǔyán',vn:'ngôn ngữ chung'},
     {zh:'可以通用',py:'kěyǐ tōngyòng',vn:'có thể dùng thay nhau'},
     {zh:'全国通用',py:'quánguó tōngyòng',vn:'dùng chung toàn quốc'}
   ],
   patterns:[
     {s:'在 + phạm vi + 通用',m:'Được dùng phổ biến trong phạm vi nào'},
     {s:'……是……通用的 + N',m:'Cái gì là … dùng chung ở đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thẻ giao thông này dùng được ở tất cả các thành phố trong cả nước.',answer:'这张交通卡在全国所有城市都可以通用。',answerPy:'Zhè zhāng jiāotōngkǎ zài quánguó suǒyǒu chéngshì dōu kěyǐ tōngyòng.',
      note:'在……都可以 + V; 所有 (ôn HSK 4).',pair:'在……都……'},
     {promptLang:'vi',prompt:'Tuy hai chữ này nghĩa gần nhau, nhưng không phải lúc nào cũng dùng thay nhau được.',answer:'这两个字虽然意思相近，但不是任何时候都能通用。',answerPy:'Zhè liǎng ge zì suīrán yìsi xiāngjìn, dàn bú shì rènhé shíhou dōu néng tōngyòng.',
      note:'虽然……但……; 不是任何时候都…… (phủ định bộ phận).',pair:'虽然……但……'}
   ]},

  {n:34,zh:'调节',py:'tiáojié',pos:'Động từ',vn:'điều chỉnh, điều hoà',hv:'điều tiết',em:'🎛️',lesson:1,
   explain:['Điều chỉnh về số lượng, mức độ cho phù hợp yêu cầu: 调节温度 / 音量 / 情绪 / 心情. 调 (tiáo) = điều hoà, 节 = tiết chế.','So với 调整 (điều chỉnh kế hoạch, cơ cấu, thời gian — thay đổi sắp xếp), 调节 nhấn làm cho CÂN BẰNG, VỪA PHẢI (nhiệt độ, cảm xúc, khí hậu).'],
   usage:'调节 + 情绪 / 心情 / 温度 / 气候 / 音量; 自我调节; 调节 + 得 + 好.',
   collo:['调节情绪','调节温度','自我调节','调节气候'],
   ex_zh:'有研究证实，笑可以调节情绪',ex_py:'Yǒu yánjiū zhèngshí, xiào kěyǐ tiáojié qíngxù',ex_vn:'Có nghiên cứu đã chứng thực rằng cười có thể điều hoà cảm xúc',
   exList:[
     {zh:'有研究证实，笑可以调节情绪，可以促进血液循环和腹肌收缩。',py:'Yǒu yánjiū zhèngshí, xiào kěyǐ tiáojié qíngxù, kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō.',vn:'Có nghiên cứu đã chứng thực rằng cười có thể điều hoà cảm xúc, có thể thúc đẩy tuần hoàn máu và sự co cơ bụng.'},
     {zh:'考试前压力太大时，要学会自我调节。',py:'Kǎoshì qián yālì tài dà shí, yào xuéhuì zìwǒ tiáojié.',vn:'Trước kỳ thi, khi áp lực quá lớn, phải học cách tự điều chỉnh bản thân.'},
     {zh:'这台空调能自动调节室内的温度和湿度。',py:'Zhè tái kōngtiáo néng zìdòng tiáojié shìnèi de wēndù hé shīdù.',vn:'Chiếc điều hoà này có thể tự động điều chỉnh nhiệt độ và độ ẩm trong phòng.'}
   ],
   colloFull:[
     {zh:'调节情绪',py:'tiáojié qíngxù',vn:'điều hoà cảm xúc'},
     {zh:'调节温度',py:'tiáojié wēndù',vn:'điều chỉnh nhiệt độ'},
     {zh:'自我调节',py:'zìwǒ tiáojié',vn:'tự điều chỉnh'},
     {zh:'调节气候',py:'tiáojié qìhòu',vn:'điều hoà khí hậu'},
     {zh:'调节音量',py:'tiáojié yīnliàng',vn:'chỉnh âm lượng'}
   ],
   patterns:[
     {s:'……可以 / 能 + 调节 + 情绪 / 温度',m:'Cái gì có thể điều hoà …'},
     {s:'学会 + 自我调节',m:'Học cách tự điều chỉnh bản thân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nhạc không những giúp thư giãn mà còn có thể điều hoà cảm xúc.',answer:'听音乐不但能帮助放松，而且可以调节情绪。',answerPy:'Tīng yīnyuè búdàn néng bāngzhù fàngsōng, érqiě kěyǐ tiáojié qíngxù.',
      note:'不但……而且…… (ôn HSK 4).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Rừng cây có tác dụng điều hoà khí hậu, vì vậy chúng ta phải bảo vệ chúng.',answer:'森林有调节气候的作用，所以我们要保护它们。',answerPy:'Sēnlín yǒu tiáojié qìhòu de zuòyòng, suǒyǐ wǒmen yào bǎohù tāmen.',
      note:'有……的作用 = có tác dụng … (ôn HSK 4).',pair:'有……的作用'}
   ]},

  {n:35,zh:'循环',py:'xúnhuán',pos:'Động từ',vn:'tuần hoàn, lặp vòng',hv:'tuần hoàn',em:'🔁',lesson:1,
   explain:['Chuyển động theo vòng tròn, lặp đi lặp lại: 血液循环 (tuần hoàn máu), 恶性循环 (vòng luẩn quẩn), 循环使用 (tái sử dụng). 循 = theo, 环 = vòng.','Vừa là động từ (血液在体内不断循环) vừa làm định ngữ / danh từ (血液循环, 循环利用).'],
   usage:'血液 + 循环; 促进 + 血液循环; 恶性 / 良性 + 循环; 循环 + 使用 / 利用 / 播放.',
   collo:['血液循环','促进循环','恶性循环','循环使用'],
   ex_zh:'可以促进血液循环和腹肌收缩',ex_py:'kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō',ex_vn:'có thể thúc đẩy tuần hoàn máu và sự co cơ bụng',
   exList:[
     {zh:'笑可以调节情绪，可以促进血液循环和腹肌收缩。',py:'Xiào kěyǐ tiáojié qíngxù, kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō.',vn:'Cười có thể điều hoà cảm xúc, có thể thúc đẩy tuần hoàn máu và sự co cơ bụng.'},
     {zh:'心脏有规律地收缩和舒张，可以使血液在体内不断循环。',py:'Xīnzàng yǒu guīlǜ de shōusuō hé shūzhāng, kěyǐ shǐ xuèyè zài tǐnèi búduàn xúnhuán.',vn:'Tim co bóp và giãn ra đều đặn giúp máu không ngừng tuần hoàn trong cơ thể.'},
     {zh:'越熬夜越累，越累效率越低，这是一种恶性循环。',py:'Yuè áoyè yuè lèi, yuè lèi xiàolǜ yuè dī, zhè shì yì zhǒng èxìng xúnhuán.',vn:'Càng thức khuya càng mệt, càng mệt hiệu suất càng thấp, đó là một vòng luẩn quẩn.'}
   ],
   colloFull:[
     {zh:'血液循环',py:'xuèyè xúnhuán',vn:'tuần hoàn máu'},
     {zh:'促进循环',py:'cùjìn xúnhuán',vn:'thúc đẩy tuần hoàn'},
     {zh:'恶性循环',py:'èxìng xúnhuán',vn:'vòng luẩn quẩn'},
     {zh:'循环使用',py:'xúnhuán shǐyòng',vn:'tái sử dụng'},
     {zh:'不断循环',py:'búduàn xúnhuán',vn:'tuần hoàn không ngừng'}
   ],
   patterns:[
     {s:'促进 + 血液循环',m:'Thúc đẩy tuần hoàn máu'},
     {s:'越……越……，这是一种恶性循环',m:'Chuỗi càng … càng … thành vòng luẩn quẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngồi lâu không vận động sẽ ảnh hưởng đến tuần hoàn máu.',answer:'长时间坐着不运动，会影响血液循环。',answerPy:'Cháng shíjiān zuòzhe bú yùndòng, huì yǐngxiǎng xuèyè xúnhuán.',
      note:'V着 + V (tư thế kéo dài); 会 dự đoán (ôn HSK 3–4).',pair:'V着'},
     {promptLang:'vi',prompt:'Chai nhựa này có thể tái sử dụng, đừng vứt đi.',answer:'这些塑料瓶可以循环使用，别扔掉。',answerPy:'Zhèxiē sùliàopíng kěyǐ xúnhuán shǐyòng, bié rēngdiào.',
      note:'V掉 = bỏ đi (bổ ngữ kết quả).',pair:'V掉'}
   ]},

  {n:36,zh:'收缩',py:'shōusuō',pos:'Động từ',vn:'co lại, rút lại; thu hẹp',hv:'thu súc',em:'🫀',lesson:1,
   explain:['(Vật thể) co lại, rút nhỏ lại: 肌肉收缩 / 心脏收缩, trái nghĩa 舒张 / 膨胀 (giãn nở). 收 = thu, 缩 = co.','Nghĩa bóng: thu hẹp quy mô, phạm vi: 收缩开支 / 收缩业务. Bài khoá: 促进……腹肌收缩 = thúc đẩy cơ bụng co bóp.'],
   usage:'肌肉 / 心脏 / 血管 + 收缩; 收缩 + 和 + 舒张; 热胀冷缩; 收缩 + 规模 / 开支.',
   collo:['腹肌收缩','心脏收缩','收缩和舒张','收缩开支'],
   ex_zh:'可以促进血液循环和腹肌收缩',ex_py:'kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō',ex_vn:'có thể thúc đẩy tuần hoàn máu và sự co cơ bụng',
   exList:[
     {zh:'有研究证实，笑可以调节情绪，可以促进血液循环和腹肌收缩。',py:'Yǒu yánjiū zhèngshí, xiào kěyǐ tiáojié qíngxù, kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō.',vn:'Có nghiên cứu chứng thực rằng cười có thể điều hoà cảm xúc, thúc đẩy tuần hoàn máu và sự co cơ bụng.'},
     {zh:'心脏每时每刻都在跳动，有规律地收缩和舒张。',py:'Xīnzàng měi shí měi kè dōu zài tiàodòng, yǒu guīlǜ de shōusuō hé shūzhāng.',vn:'Tim đập từng giây từng phút, co bóp và giãn ra một cách đều đặn.'},
     {zh:'物体一般都有热胀冷缩的特点，遇冷就会收缩。',py:'Wùtǐ yìbān dōu yǒu rè zhàng lěng suō de tèdiǎn, yù lěng jiù huì shōusuō.',vn:'Vật thể thường có đặc điểm nóng nở lạnh co, gặp lạnh thì sẽ co lại.'}
   ],
   colloFull:[
     {zh:'腹肌收缩',py:'fùjī shōusuō',vn:'co cơ bụng'},
     {zh:'心脏收缩',py:'xīnzàng shōusuō',vn:'tim co bóp'},
     {zh:'收缩和舒张',py:'shōusuō hé shūzhāng',vn:'co và giãn'},
     {zh:'收缩开支',py:'shōusuō kāizhī',vn:'thu hẹp chi tiêu'},
     {zh:'遇冷收缩',py:'yù lěng shōusuō',vn:'gặp lạnh co lại'}
   ],
   patterns:[
     {s:'N (肌肉 / 心脏) + 收缩',m:'Cái gì co lại'},
     {s:'有规律地 + 收缩和舒张',m:'Co và giãn đều đặn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi trời lạnh, mạch máu sẽ co lại, vì thế người già phải đặc biệt chú ý giữ ấm.',answer:'天冷的时候血管会收缩，所以老人要特别注意保暖。',answerPy:'Tiān lěng de shíhou xuèguǎn huì shōusuō, suǒyǐ lǎorén yào tèbié zhùyì bǎonuǎn.',
      note:'……的时候; 所以 (ôn HSK 3–4).',pair:'……的时候'},
     {promptLang:'vi',prompt:'Do kinh tế không khả quan, công ty quyết định thu hẹp chi tiêu.',answer:'由于经济不景气，公司决定收缩开支。',answerPy:'Yóuyú jīngjì bù jǐngqì, gōngsī juédìng shōusuō kāizhī.',
      note:'由于…… (văn viết); 开支 (HSK 6 bài 14).',pair:'由于……'}
   ]},

  {n:37,zh:'氧气',py:'yǎngqì',pos:'Danh từ',vn:'khí oxy',hv:'dưỡng khí',em:'🫁',lesson:1,
   explain:['Khí oxy (O₂), chất khí không màu không mùi, cần cho sự sống: 氧 = oxy, 气 = khí. 吸收 / 缺少 / 提供 + 氧气.','Liên quan: 吸氧量 (lượng oxy hít vào — bài khoá), 缺氧 (thiếu oxy), 氧气瓶 (bình oxy). Tiếng Việt Hán–Việt là "dưỡng khí".'],
   usage:'吸收 / 吸入 / 缺少 / 提供 + 氧气; 氧气 + 瓶 / 罩; 缺氧; 吸氧量.',
   collo:['吸收的氧气','缺少氧气','提供氧气','氧气瓶'],
   ex_zh:'100次捧腹大笑所吸收的氧气相当于用桨划船10分钟的吸氧量',ex_py:'yìbǎi cì pěngfù dà xiào suǒ xīshōu de yǎngqì xiāngdāng yú yòng jiǎng huá chuán shí fēnzhōng de xīyǎngliàng',ex_vn:'lượng oxy hấp thụ qua 100 lần cười ôm bụng tương đương lượng oxy hít vào khi chèo thuyền 10 phút',
   exList:[
     {zh:'100次捧腹大笑所吸收的氧气相当于用桨划船10分钟的吸氧量。',py:'Yìbǎi cì pěngfù dà xiào suǒ xīshōu de yǎngqì xiāngdāng yú yòng jiǎng huá chuán shí fēnzhōng de xīyǎngliàng.',vn:'Lượng oxy hấp thụ qua 100 lần cười ôm bụng tương đương với lượng oxy hít vào khi dùng mái chèo chèo thuyền 10 phút.'},
     {zh:'高山上空气稀薄，氧气不足，很多人会感到头疼。',py:'Gāoshān shang kōngqì xībó, yǎngqì bùzú, hěn duō rén huì gǎndào tóuténg.',vn:'Trên núi cao không khí loãng, thiếu oxy, nhiều người sẽ thấy đau đầu.'},
     {zh:'植物通过光合作用，为地球提供了大量的氧气。',py:'Zhíwù tōngguò guānghé zuòyòng, wèi dìqiú tígōngle dàliàng de yǎngqì.',vn:'Thực vật thông qua quang hợp cung cấp một lượng lớn oxy cho Trái Đất.'}
   ],
   colloFull:[
     {zh:'吸收的氧气',py:'xīshōu de yǎngqì',vn:'oxy được hấp thụ'},
     {zh:'缺少氧气',py:'quēshǎo yǎngqì',vn:'thiếu oxy'},
     {zh:'提供氧气',py:'tígōng yǎngqì',vn:'cung cấp oxy'},
     {zh:'氧气瓶',py:'yǎngqìpíng',vn:'bình oxy'},
     {zh:'氧气不足',py:'yǎngqì bùzú',vn:'không đủ oxy'}
   ],
   patterns:[
     {s:'为 / 给 + đối tượng + 提供 + 氧气',m:'Cung cấp oxy cho …'},
     {s:'……所吸收的氧气 + 相当于 + ……',m:'Lượng oxy hấp thụ … tương đương với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phòng đông người quá, thiếu oxy, mau mở cửa sổ ra.',answer:'房间里人太多，缺少氧气，快把窗户打开吧。',answerPy:'Fángjiān li rén tài duō, quēshǎo yǎngqì, kuài bǎ chuānghu dǎkāi ba.',
      note:'Câu 把 + V开 (ôn HSK 3–4).',pair:'把……打开'},
     {promptLang:'vi',prompt:'Nếu không có oxy thì mọi sinh vật đều không thể tồn tại.',answer:'要是没有氧气，所有的生物都无法生存。',answerPy:'Yàoshi méiyǒu yǎngqì, suǒyǒu de shēngwù dōu wúfǎ shēngcún.',
      note:'要是…… giả thiết; 无法 = không thể (ôn HSK 5); 生存 (HSK 6 bài 13).',pair:'要是……'}
   ]},

  {n:38,zh:'桨',py:'jiǎng',pos:'Danh từ',vn:'mái chèo',hv:'tưởng',em:'🚣',lesson:1,
   explain:['Mái chèo, dụng cụ dùng để khua nước đẩy thuyền đi: 用桨划船 (dùng mái chèo chèo thuyền). Lượng từ: 支 / 把 / 副.','Chữ có bộ 木 (gỗ) ở dưới. Liên quan: 划桨 (khua chèo), 船桨 (mái chèo thuyền); 螺旋桨 (cánh quạt, chân vịt).'],
   usage:'用 + 桨 + 划船; 划 + 桨; 一支 / 一把 + 桨; 船桨; 螺旋桨.',
   collo:['用桨划船','一支桨','划桨','船桨'],
   ex_zh:'相当于用桨划船10分钟的吸氧量',ex_py:'xiāngdāng yú yòng jiǎng huá chuán shí fēnzhōng de xīyǎngliàng',ex_vn:'tương đương lượng oxy hít vào khi dùng mái chèo chèo thuyền 10 phút',
   exList:[
     {zh:'100次捧腹大笑所吸收的氧气相当于用桨划船10分钟的吸氧量。',py:'Yìbǎi cì pěngfù dà xiào suǒ xīshōu de yǎngqì xiāngdāng yú yòng jiǎng huá chuán shí fēnzhōng de xīyǎngliàng.',vn:'Lượng oxy hấp thụ qua 100 lần cười ôm bụng tương đương với lượng oxy hít vào khi dùng mái chèo chèo thuyền 10 phút.'},
     {zh:'我们俩一人拿一支桨，慢慢地把小船划到了湖中间。',py:'Wǒmen liǎ yì rén ná yì zhī jiǎng, mànmàn de bǎ xiǎochuán huádàole hú zhōngjiān.',vn:'Hai chúng tôi mỗi người cầm một mái chèo, từ từ chèo chiếc thuyền nhỏ ra giữa hồ.'},
     {zh:'比赛开始了，队员们整齐地划着桨，龙舟飞快地向前冲去。',py:'Bǐsài kāishǐ le, duìyuánmen zhěngqí de huázhe jiǎng, lóngzhōu fēikuài de xiàng qián chōngqu.',vn:'Cuộc đua bắt đầu, các thành viên đều tay khua chèo, thuyền rồng lao vút về phía trước.'}
   ],
   colloFull:[
     {zh:'用桨划船',py:'yòng jiǎng huá chuán',vn:'dùng mái chèo chèo thuyền'},
     {zh:'一支桨',py:'yì zhī jiǎng',vn:'một mái chèo'},
     {zh:'划桨',py:'huá jiǎng',vn:'khua chèo'},
     {zh:'船桨',py:'chuánjiǎng',vn:'mái chèo thuyền'},
     {zh:'螺旋桨',py:'luóxuánjiǎng',vn:'cánh quạt, chân vịt'}
   ],
   patterns:[
     {s:'用 + 桨 + 划 + 船',m:'Dùng mái chèo chèo thuyền'},
     {s:'划着桨 + V',m:'Vừa khua chèo vừa …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mái chèo bị gãy rồi, chúng ta làm sao chèo thuyền về bờ đây?',answer:'桨断了，我们怎么把船划回岸边呢？',answerPy:'Jiǎng duàn le, wǒmen zěnme bǎ chuán huáhuí ànbiān ne?',
      note:'Câu 把 + V + 回 + nơi chốn (bổ ngữ xu hướng, ôn HSK 4).',pair:'把……V回……'},
     {promptLang:'vi',prompt:'Chèo thuyền trông thì đơn giản, thật ra rất tốn sức.',answer:'用桨划船看起来简单，其实很费力气。',answerPy:'Yòng jiǎng huá chuán kàn qǐlai jiǎndān, qíshí hěn fèi lìqi.',
      note:'看起来……，其实…… (đối lập bề ngoài – thực tế, ôn HSK 4).',pair:'看起来……其实……'}
   ]},

  {n:39,zh:'试验',py:'shìyàn',pos:'Động từ',vn:'thử nghiệm, làm thử',hv:'thí nghiệm',em:'🧪',lesson:1,
   explain:['Làm thử để xem kết quả hoặc tính năng của sự vật trước khi áp dụng chính thức: 做试验 / 试验新方法 / 试验田. 试 = thử, 验 = nghiệm.','Phân biệt 实验 (thí nghiệm khoa học có kiểm soát, chủ yếu trong phòng thí nghiệm — danh từ / động từ). 试验 nhấn LÀM THỬ để kiểm tra hiệu quả; bài khoá: 有人做过这样的试验.'],
   usage:'做 + (一个 / 这样的) + 试验; 试验 + 新方法 / 新产品; 反复试验; 试验田 / 试验品.',
   collo:['做过这样的试验','反复试验','试验新方法','试验田'],
   ex_zh:'有人做过这样的试验，开怀大笑一整天，可以燃烧掉2000卡路里',ex_py:'Yǒu rén zuòguo zhèyàng de shìyàn, kāihuái dà xiào yì zhěng tiān, kěyǐ ránshāo diào liǎngqiān kǎlùlǐ',ex_vn:'Có người đã làm thử nghiệm thế này: cười sảng khoái suốt một ngày có thể đốt cháy 2000 calo',
   exList:[
     {zh:'有人做过这样的试验，开怀大笑一整天，可以燃烧掉2000卡路里。',py:'Yǒu rén zuòguo zhèyàng de shìyàn, kāihuái dà xiào yì zhěng tiān, kěyǐ ránshāo diào liǎngqiān kǎlùlǐ.',vn:'Có người đã làm thử nghiệm thế này: cười sảng khoái suốt một ngày có thể đốt cháy 2000 calo.'},
     {zh:'经过反复试验，他们终于找到了最合适的配方。',py:'Jīngguò fǎnfù shìyàn, tāmen zhōngyú zhǎodàole zuì héshì de pèifāng.',vn:'Qua nhiều lần thử nghiệm, cuối cùng họ đã tìm ra công thức phù hợp nhất.'},
     {zh:'新的教学方法先在两个班试验一下，效果好再推广。',py:'Xīn de jiàoxué fāngfǎ xiān zài liǎng ge bān shìyàn yíxià, xiàoguǒ hǎo zài tuīguǎng.',vn:'Phương pháp giảng dạy mới cứ thử nghiệm trước ở hai lớp, hiệu quả tốt rồi mới mở rộng.'}
   ],
   colloFull:[
     {zh:'做过这样的试验',py:'zuòguo zhèyàng de shìyàn',vn:'từng làm thử nghiệm như vậy'},
     {zh:'反复试验',py:'fǎnfù shìyàn',vn:'thử nghiệm nhiều lần'},
     {zh:'试验新方法',py:'shìyàn xīn fāngfǎ',vn:'thử nghiệm phương pháp mới'},
     {zh:'试验田',py:'shìyàntián',vn:'ruộng thí nghiệm'},
     {zh:'试验成功',py:'shìyàn chénggōng',vn:'thử nghiệm thành công'}
   ],
   patterns:[
     {s:'做 + (一个) + 试验',m:'Làm một cuộc thử nghiệm'},
     {s:'先 + 试验一下，(效果好) 再 + V',m:'Thử trước, (hiệu quả tốt) rồi mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loại thuốc mới này phải qua thử nghiệm nhiều lần mới có thể bán ra thị trường.',answer:'这种新药要经过多次试验，才能投放市场。',answerPy:'Zhè zhǒng xīn yào yào jīngguò duō cì shìyàn, cái néng tóufàng shìchǎng.',
      note:'经过……才…… (phải qua … mới …); 投放市场 (练习3 của bài).',pair:'经过……才……'},
     {promptLang:'vi',prompt:'Chúng ta cứ thử trước một chút, không được thì lại nghĩ cách khác.',answer:'我们先试验一下，不行的话再想别的办法。',answerPy:'Wǒmen xiān shìyàn yíxià, bù xíng dehuà zài xiǎng bié de bànfǎ.',
      note:'先……再……; ……的话 = nếu (ôn HSK 4).',pair:'先……再……'}
   ]},

  {n:40,zh:'脂肪',py:'zhīfáng',pos:'Danh từ',vn:'mỡ, chất béo',hv:'chi phương',em:'🥓',lesson:1,
   explain:['Chất béo trong cơ thể động vật / thực vật; một trong ba chất dinh dưỡng chính: 消耗脂肪 (tiêu hao mỡ), 脂肪含量 (hàm lượng chất béo). 脂 = mỡ, 肪 = mỡ.','Hay đi với 燃烧 / 消耗 / 减少 / 堆积: 腹部脂肪 (mỡ bụng), 低脂 (ít béo).'],
   usage:'消耗 / 燃烧 / 减少 + 脂肪; 脂肪 + 含量; 储存 + 脂肪; 高脂肪 / 低脂.',
   collo:['消耗脂肪','脂肪含量','燃烧脂肪','储存脂肪'],
   ex_zh:'从而帮助消耗脂肪，减轻体重',ex_py:'cóng\'ér bāngzhù xiāohào zhīfáng, jiǎnqīng tǐzhòng',ex_vn:'nhờ đó giúp tiêu hao mỡ, giảm cân',
   exList:[
     {zh:'开怀大笑一整天，可以燃烧掉2000卡路里，从而帮助消耗脂肪，减轻体重。',py:'Kāihuái dà xiào yì zhěng tiān, kěyǐ ránshāo diào liǎngqiān kǎlùlǐ, cóng\'ér bāngzhù xiāohào zhīfáng, jiǎnqīng tǐzhòng.',vn:'Cười sảng khoái suốt một ngày có thể đốt cháy 2000 calo, nhờ đó giúp tiêu hao mỡ, giảm cân.'},
     {zh:'所以减轻体重，减少脂肪含量是保护心脏重要的一步。',py:'Suǒyǐ jiǎnqīng tǐzhòng, jiǎnshǎo zhīfáng hánliàng shì bǎohù xīnzàng zhòngyào de yí bù.',vn:'Vì vậy giảm cân, giảm hàm lượng mỡ là một bước quan trọng để bảo vệ tim.'},
     {zh:'熊在冬眠前要吃很多东西，储存足够的脂肪。',py:'Xióng zài dōngmián qián yào chī hěn duō dōngxi, chǔcún zúgòu de zhīfáng.',vn:'Trước khi ngủ đông, gấu phải ăn rất nhiều để tích trữ đủ mỡ.'}
   ],
   colloFull:[
     {zh:'消耗脂肪',py:'xiāohào zhīfáng',vn:'tiêu hao mỡ'},
     {zh:'脂肪含量',py:'zhīfáng hánliàng',vn:'hàm lượng chất béo'},
     {zh:'燃烧脂肪',py:'ránshāo zhīfáng',vn:'đốt mỡ'},
     {zh:'储存脂肪',py:'chǔcún zhīfáng',vn:'tích trữ mỡ'},
     {zh:'高脂肪食物',py:'gāo zhīfáng shíwù',vn:'thức ăn nhiều chất béo'}
   ],
   patterns:[
     {s:'消耗 / 燃烧 / 减少 + 脂肪',m:'Tiêu hao / đốt / giảm mỡ'},
     {s:'N + 的脂肪含量 + 高 / 低',m:'Hàm lượng chất béo của cái gì cao / thấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn giảm cân thì phải ăn ít đồ ăn nhiều chất béo, đồng thời vận động nhiều hơn.',answer:'要想减肥，就要少吃高脂肪的食物，同时多运动。',answerPy:'Yào xiǎng jiǎnféi, jiù yào shǎo chī gāo zhīfáng de shíwù, tóngshí duō yùndòng.',
      note:'要想……就要……; 少 / 多 + V (ôn HSK 4).',pair:'要想……就……'},
     {promptLang:'vi',prompt:'Chạy bộ ba mươi phút mỗi ngày có thể giúp đốt cháy mỡ.',answer:'每天跑步三十分钟，可以帮助燃烧脂肪。',answerPy:'Měi tiān pǎobù sānshí fēnzhōng, kěyǐ bāngzhù ránshāo zhīfáng.',
      note:'Thời lượng đặt sau động từ (跑步三十分钟) (ôn HSK 3).',pair:'V + thời lượng'}
   ]},

  {n:41,zh:'动脉',py:'dòngmài',pos:'Danh từ',vn:'động mạch',hv:'động mạch',em:'❤️',lesson:1,
   explain:['Mạch máu dẫn máu từ tim đi đến các bộ phận của cơ thể (动 = động, 脉 = mạch); trái với 静脉 (tĩnh mạch). 动脉硬化 = xơ cứng động mạch.','Nghĩa bóng: tuyến giao thông huyết mạch: 交通动脉 / 经济动脉.'],
   usage:'动脉 + 硬化; 主动脉; 动脉 ↔ 静脉; 交通动脉 (nghĩa bóng).',
   collo:['动脉硬化','缓解动脉硬化','主动脉','交通大动脉'],
   ex_zh:'笑有助于缓解动脉硬化',ex_py:'xiào yǒuzhù yú huǎnjiě dòngmài yìnghuà',ex_vn:'cười giúp làm giảm xơ cứng động mạch',
   exList:[
     {zh:'同时，笑有助于缓解动脉硬化，有助于消除紧张感。',py:'Tóngshí, xiào yǒuzhù yú huǎnjiě dòngmài yìnghuà, yǒuzhù yú xiāochú jǐnzhānggǎn.',vn:'Đồng thời, cười giúp làm giảm xơ cứng động mạch, giúp xua tan cảm giác căng thẳng.'},
     {zh:'肥胖会导致动脉硬化，损坏心脏机能。',py:'Féipàng huì dǎozhì dòngmài yìnghuà, sǔnhuài xīnzàng jīnéng.',vn:'Béo phì sẽ dẫn đến xơ cứng động mạch, làm tổn hại chức năng tim.'},
     {zh:'这条高速公路是连接南北的交通大动脉。',py:'Zhè tiáo gāosù gōnglù shì liánjiē nán běi de jiāotōng dà dòngmài.',vn:'Tuyến cao tốc này là huyết mạch giao thông nối liền hai miền Nam Bắc.'}
   ],
   colloFull:[
     {zh:'动脉硬化',py:'dòngmài yìnghuà',vn:'xơ cứng động mạch'},
     {zh:'缓解动脉硬化',py:'huǎnjiě dòngmài yìnghuà',vn:'giảm xơ cứng động mạch'},
     {zh:'主动脉',py:'zhǔdòngmài',vn:'động mạch chủ'},
     {zh:'交通大动脉',py:'jiāotōng dà dòngmài',vn:'huyết mạch giao thông'},
     {zh:'动脉和静脉',py:'dòngmài hé jìngmài',vn:'động mạch và tĩnh mạch'}
   ],
   patterns:[
     {s:'……会导致 + 动脉硬化',m:'Điều gì dẫn đến xơ cứng động mạch'},
     {s:'……是……的交通动脉',m:'Nghĩa bóng: tuyến đường huyết mạch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ăn quá nhiều đồ dầu mỡ lâu ngày có thể dẫn đến xơ cứng động mạch.',answer:'长期吃太多油腻的东西，可能会导致动脉硬化。',answerPy:'Chángqī chī tài duō yóunì de dōngxi, kěnéng huì dǎozhì dòngmài yìnghuà.',
      note:'导致 + kết quả xấu (ôn HSK 5).',pair:'导致……'},
     {promptLang:'vi',prompt:'Không chỉ người già, người trẻ cũng có thể bị xơ cứng động mạch.',answer:'不仅老年人，年轻人也可能会动脉硬化。',answerPy:'Bùjǐn lǎoniánrén, niánqīngrén yě kěnéng huì dòngmài yìnghuà.',
      note:'不仅 A，B 也…… (tăng tiến, ôn HSK 5).',pair:'不仅……也……'}
   ]},

  {n:42,zh:'实质',py:'shízhì',pos:'Danh từ',vn:'bản chất, thực chất',hv:'thực chất',em:'🔍',lesson:1,
   explain:['Bản chất, cái cốt lõi bên trong của sự vật (đối lập với 现象 — hiện tượng bề ngoài): 问题的实质 / 实质上. 实 = thực, 质 = chất.','实质性 = có tính thực chất, thiết thực: 实质性的证据 / 进展. Gần 本质 (练习1: 本质、性质、品质、素质).'],
   usage:'……的实质; 实质 + 在于……; 实质上; 实质性的 + 证据 / 进展 / 变化.',
   collo:['实质性的证据','问题的实质','实质上','实质在于'],
   ex_zh:'这就是笑有利于健康的实质性的证据',ex_py:'zhè jiù shì xiào yǒulì yú jiànkāng de shízhìxìng de zhèngjù',ex_vn:'đó chính là bằng chứng thực chất cho việc cười có lợi cho sức khoẻ',
   exList:[
     {zh:'笑有助于缓解动脉硬化，有助于消除紧张感，这就是笑有利于健康的实质性的证据。',py:'Xiào yǒuzhù yú huǎnjiě dòngmài yìnghuà, yǒuzhù yú xiāochú jǐnzhānggǎn, zhè jiù shì xiào yǒulì yú jiànkāng de shízhìxìng de zhèngjù.',vn:'Cười giúp giảm xơ cứng động mạch, giúp xua tan cảm giác căng thẳng, đó chính là bằng chứng thực chất cho việc cười có lợi cho sức khoẻ.'},
     {zh:'问题的实质在于某些人缺乏责任心。',py:'Wèntí de shízhì zàiyú mǒuxiē rén quēfá zérènxīn.',vn:'Thực chất của vấn đề nằm ở chỗ một số người thiếu tinh thần trách nhiệm.'},
     {zh:'两国的谈判终于取得了实质性的进展。',py:'Liǎng guó de tánpàn zhōngyú qǔdéle shízhìxìng de jìnzhǎn.',vn:'Cuộc đàm phán giữa hai nước cuối cùng đã đạt được tiến triển thực chất.'}
   ],
   colloFull:[
     {zh:'实质性的证据',py:'shízhìxìng de zhèngjù',vn:'bằng chứng thực chất'},
     {zh:'问题的实质',py:'wèntí de shízhì',vn:'thực chất của vấn đề'},
     {zh:'实质上',py:'shízhì shang',vn:'về thực chất'},
     {zh:'实质在于',py:'shízhì zàiyú',vn:'thực chất nằm ở'},
     {zh:'实质性的进展',py:'shízhìxìng de jìnzhǎn',vn:'tiến triển thực chất'}
   ],
   patterns:[
     {s:'……的实质 + 在于 + ……',m:'Thực chất của … nằm ở …'},
     {s:'看起来……，实质上……',m:'Bề ngoài … nhưng thực chất …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc này bề ngoài là giúp bạn, thực chất là lợi dụng bạn.',answer:'这件事表面上是帮你，实质上是在利用你。',answerPy:'Zhè jiàn shì biǎomiàn shang shì bāng nǐ, shízhì shang shì zài lìyòng nǐ.',
      note:'表面上……，实质上…… (đối lập bề ngoài – bản chất).',pair:'表面上……实质上……'},
     {promptLang:'vi',prompt:'Chỉ khi nhìn rõ thực chất của vấn đề thì mới giải quyết được nó.',answer:'只有看清问题的实质，才能解决它。',answerPy:'Zhǐyǒu kànqīng wèntí de shízhì, cái néng jiějué tā.',
      note:'只有……才……; V清 (bổ ngữ kết quả).',pair:'只有……才……'}
   ]},

  {n:43,zh:'肆无忌惮',py:'sìwú-jìdàn',pos:'Thành ngữ',vn:'không kiêng nể gì cả, thả cửa, bạt mạng',hv:'tứ vô kị đạn',em:'🤪',lesson:1,
   explain:['Làm càn, tuỳ tiện, không kiêng dè, không e sợ gì cả (肆 = phóng túng, 忌惮 = kiêng sợ). Thường mang nghĩa xấu: 肆无忌惮地破坏 / 说谎.','Trong bài khoá dùng cho tiếng cười: 肆无忌惮地笑 = cười thả cửa, không biết tiết chế. Làm trạng ngữ với 地.'],
   usage:'肆无忌惮 + 地 + V (笑 / 破坏 / 说); 变得 + 肆无忌惮; 肆无忌惮的 + 行为.',
   collo:['肆无忌惮地笑','肆无忌惮地破坏','肆无忌惮的行为','越来越肆无忌惮'],
   ex_zh:'有人在肆无忌惮地笑过后因心跳加速而昏迷',ex_py:'yǒu rén zài sìwú-jìdàn de xiàoguo hòu yīn xīntiào jiāsù ér hūnmí',ex_vn:'có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh',
   exList:[
     {zh:'有医生就碰到过这样的案例：有人在肆无忌惮地笑过后因心跳加速而昏迷。',py:'Yǒu yīshēng jiù pèngdàoguo zhèyàng de ànlì: yǒu rén zài sìwú-jìdàn de xiàoguo hòu yīn xīntiào jiāsù ér hūnmí.',vn:'Có bác sĩ từng gặp một ca thế này: có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh.'},
     {zh:'有些游客在景区肆无忌惮地乱扔垃圾，真让人气愤。',py:'Yǒuxiē yóukè zài jǐngqū sìwú-jìdàn de luàn rēng lājī, zhēn ràng rén qìfèn.',vn:'Có những du khách vứt rác bừa bãi không kiêng nể gì trong khu du lịch, thật khiến người ta bực tức.'},
     {zh:'因为没人管，他变得越来越肆无忌惮。',py:'Yīnwèi méi rén guǎn, tā biàn de yuè lái yuè sìwú-jìdàn.',vn:'Vì không ai quản, cậu ta càng ngày càng làm càn.'}
   ],
   colloFull:[
     {zh:'肆无忌惮地笑',py:'sìwú-jìdàn de xiào',vn:'cười thả cửa'},
     {zh:'肆无忌惮地破坏',py:'sìwú-jìdàn de pòhuài',vn:'phá hoại không kiêng nể'},
     {zh:'肆无忌惮的行为',py:'sìwú-jìdàn de xíngwéi',vn:'hành vi ngang ngược'},
     {zh:'越来越肆无忌惮',py:'yuè lái yuè sìwú-jìdàn',vn:'càng ngày càng làm càn'},
     {zh:'肆无忌惮地说谎',py:'sìwú-jìdàn de shuōhuǎng',vn:'nói dối trắng trợn'}
   ],
   patterns:[
     {s:'肆无忌惮 + 地 + V',m:'Làm gì một cách không kiêng nể'},
     {s:'变得 + (越来越) + 肆无忌惮',m:'Trở nên ngày càng ngang ngược'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong thư viện mà cậu ta cứ nói to thả cửa, thật chẳng có phép lịch sự gì.',answer:'在图书馆里，他居然肆无忌惮地大声说话，真没礼貌。',answerPy:'Zài túshūguǎn li, tā jūrán sìwú-jìdàn de dàshēng shuōhuà, zhēn méi lǐmào.',
      note:'居然 = vậy mà (bất ngờ, ôn HSK 5).',pair:'居然'},
     {promptLang:'vi',prompt:'Nếu không nghiêm trị, những kẻ phá hoại môi trường sẽ càng ngày càng ngang ngược.',answer:'如果不严厉惩罚，破坏环境的人会越来越肆无忌惮。',answerPy:'Rúguǒ bù yánlì chéngfá, pòhuài huánjìng de rén huì yuè lái yuè sìwú-jìdàn.',
      note:'严厉 (HSK 6 bài 1), 惩罚 (HSK 6 bài 8); 越来越…….',pair:'越来越……'}
   ]},

  {n:44,zh:'损坏',py:'sǔnhuài',pos:'Động từ',vn:'làm hư hại, gây tổn hại, làm hỏng',hv:'tổn hoại',em:'💔',lesson:1,
   explain:['Làm cho hư hỏng, mất đi tác dụng ban đầu (vật cụ thể hoặc chức năng, sức khoẻ): 损坏公物 / 机器 / 健康. 损 = tổn, 坏 = hỏng.','So với 破坏 (phá hoại — thường có chủ ý, đối tượng lớn: 环境 / 关系 / 规则), 损坏 nhấn kết quả BỊ HỎNG, có thể vô tình: 不小心损坏了.'],
   usage:'损坏 + 公物 / 机器 / 设备 / 健康 / 机能; 被 + 损坏; 不小心 + 损坏了; 损坏 + 严重.',
   collo:['损坏人体健康','损坏公物','损坏心脏机能','被损坏'],
   ex_zh:'可能会导致岔气，心脏不舒服，甚至损坏人体健康',ex_py:'kěnéng huì dǎozhì chàqì, xīnzàng bù shūfu, shènzhì sǔnhuài réntǐ jiànkāng',ex_vn:'có thể dẫn đến xóc hông, tim khó chịu, thậm chí gây tổn hại sức khoẻ con người',
   exList:[
     {zh:'大笑到“几乎笑破肚皮”可能会导致岔气，心脏不舒服，甚至损坏人体健康。',py:'Dà xiào dào “jīhū xiàopò dùpí” kěnéng huì dǎozhì chàqì, xīnzàng bù shūfu, shènzhì sǔnhuài réntǐ jiànkāng.',vn:'Cười lớn đến mức "suýt vỡ bụng" có thể dẫn đến xóc hông, tim khó chịu, thậm chí gây tổn hại sức khoẻ con người.'},
     {zh:'肥胖会导致动脉硬化，损坏心脏机能。',py:'Féipàng huì dǎozhì dòngmài yìnghuà, sǔnhuài xīnzàng jīnéng.',vn:'Béo phì sẽ dẫn đến xơ cứng động mạch, làm tổn hại chức năng tim.'},
     {zh:'谁损坏了公物，谁就要负责赔偿。',py:'Shéi sǔnhuàile gōngwù, shéi jiù yào fùzé péicháng.',vn:'Ai làm hỏng của công thì người đó phải chịu trách nhiệm bồi thường.'}
   ],
   colloFull:[
     {zh:'损坏人体健康',py:'sǔnhuài réntǐ jiànkāng',vn:'gây hại sức khoẻ con người'},
     {zh:'损坏公物',py:'sǔnhuài gōngwù',vn:'làm hỏng của công'},
     {zh:'损坏心脏机能',py:'sǔnhuài xīnzàng jīnéng',vn:'tổn hại chức năng tim'},
     {zh:'被损坏',py:'bèi sǔnhuài',vn:'bị làm hỏng'},
     {zh:'损坏严重',py:'sǔnhuài yánzhòng',vn:'hư hại nghiêm trọng'}
   ],
   patterns:[
     {s:'……会损坏 + 健康 / 机能',m:'Điều gì gây tổn hại sức khoẻ / chức năng'},
     {s:'谁损坏了……，谁就要……',m:'Ai làm hỏng … thì người đó phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy tính này bị hư hỏng nghiêm trọng, e là không sửa được nữa.',answer:'这台电脑损坏得很严重，恐怕修不好了。',answerPy:'Zhè tái diànnǎo sǔnhuài de hěn yánzhòng, kǒngpà xiū bu hǎo le.',
      note:'V得 + bổ ngữ trạng thái; 恐怕 (ôn HSK 4); V不好.',pair:'恐怕……'},
     {promptLang:'vi',prompt:'Thức khuya lâu ngày không những ảnh hưởng đến việc học mà còn làm tổn hại sức khoẻ.',answer:'长期熬夜不仅影响学习，还会损坏身体健康。',answerPy:'Chángqī áoyè bùjǐn yǐngxiǎng xuéxí, hái huì sǔnhuài shēntǐ jiànkāng.',
      note:'不仅……还…… (ôn HSK 5); 熬夜 (熬 — HSK 6 bài 2).',pair:'不仅……还……'}
   ]},

  {n:45,zh:'倾向',py:'qīngxiàng',pos:'Động từ',vn:'thiên về, nghiêng về',hv:'khuynh hướng',em:'⚖️',lesson:1,
   explain:['Động từ: nghiêng về, tán thành một phía trong các lựa chọn / quan điểm (倾 = nghiêng, 向 = hướng): 倾向于……. Thường có 于 đi kèm.','Danh từ: khuynh hướng, xu thế: 不良倾向 / 有……的倾向. Bài khoá: 似乎更倾向于笑不是坏事 = dường như nghiêng về quan điểm cười không phải chuyện xấu.'],
   usage:'倾向 + 于 + (观点 / V); 更 + 倾向于……; 有 + ……的倾向 (danh từ); 不良倾向.',
   collo:['倾向于','更倾向于','有厌学的倾向','不良倾向'],
   ex_zh:'似乎更倾向于笑不是坏事，但分寸要掌握得恰到好处',ex_py:'sìhū gèng qīngxiàng yú xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù',ex_vn:'dường như nghiêng về quan điểm cười không phải là chuyện xấu, nhưng phải nắm giữ chừng mực cho vừa phải',
   exList:[
     {zh:'新的研究结果对笑“有百益而无一害”的观点提出了挑战，似乎更倾向于笑不是坏事，但分寸要掌握得恰到好处。',py:'Xīn de yánjiū jiéguǒ duì xiào “yǒu bǎi yì ér wú yí hài” de guāndiǎn tíchūle tiǎozhàn, sìhū gèng qīngxiàng yú xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù.',vn:'Kết quả nghiên cứu mới đã thách thức quan điểm cười "trăm lợi không một hại", dường như nghiêng về ý cười không phải chuyện xấu, nhưng phải giữ chừng mực cho vừa phải.'},
     {zh:'这两个方案我更倾向于第二个，因为它更实惠。',py:'Zhè liǎng ge fāng\'àn wǒ gèng qīngxiàng yú dì-èr ge, yīnwèi tā gèng shíhuì.',vn:'Trong hai phương án này tôi nghiêng về phương án thứ hai hơn, vì nó thiết thực hơn.'},
     {zh:'老师发现他最近有厌学的倾向，就找他谈了谈。',py:'Lǎoshī fāxiàn tā zuìjìn yǒu yàn xué de qīngxiàng, jiù zhǎo tā tánle tán.',vn:'Thầy giáo phát hiện dạo này cậu ấy có xu hướng chán học, bèn tìm cậu nói chuyện.'}
   ],
   colloFull:[
     {zh:'倾向于',py:'qīngxiàng yú',vn:'nghiêng về'},
     {zh:'更倾向于',py:'gèng qīngxiàng yú',vn:'nghiêng về … hơn'},
     {zh:'有厌学的倾向',py:'yǒu yàn xué de qīngxiàng',vn:'có xu hướng chán học'},
     {zh:'不良倾向',py:'bùliáng qīngxiàng',vn:'khuynh hướng xấu'},
     {zh:'倾向于同意',py:'qīngxiàng yú tóngyì',vn:'nghiêng về đồng ý'}
   ],
   patterns:[
     {s:'S + (更) + 倾向于 + lựa chọn / quan điểm',m:'Ai nghiêng về (lựa chọn) nào'},
     {s:'有 + ……的倾向',m:'Có khuynh hướng … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cả hai trường đều không tệ, nhưng tôi nghiêng về trường gần nhà hơn.',answer:'虽然两所学校都不错，但我更倾向于离家近的那所。',answerPy:'Suīrán liǎng suǒ xuéxiào dōu búcuò, dàn wǒ gèng qīngxiàng yú lí jiā jìn de nà suǒ.',
      note:'虽然……但……; A 离 B 近 (ôn HSK 3).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Phần lớn học sinh nghiêng về việc đi dã ngoại vào cuối tuần.',answer:'大部分同学倾向于周末去郊游。',answerPy:'Dà bùfen tóngxué qīngxiàng yú zhōumò qù jiāoyóu.',
      note:'倾向于 + cụm động từ.',pair:'倾向于……'}
   ]},

  {n:46,zh:'分寸',py:'fēncun',pos:'Danh từ',vn:'chừng mực, giới hạn thích hợp (trong lời nói hoặc hành động)',hv:'phân thốn',em:'📏',lesson:1,
   explain:['Mức độ, giới hạn thích hợp khi nói năng, làm việc (分, 寸 vốn là đơn vị đo chiều dài nhỏ → cái mức vừa phải). 寸 đọc nhẹ: fēncun.','Hay dùng: 有分寸 / 没有分寸 / 注意分寸 / 掌握分寸 / 分寸感. Bài khoá: 分寸要掌握得恰到好处.'],
   usage:'有 / 没(有) + 分寸; 掌握 / 注意 / 把握 + 分寸; 说话 / 做事 + 有分寸; 分寸感.',
   collo:['掌握分寸','说话有分寸','没有分寸','把握分寸'],
   ex_zh:'但分寸要掌握得恰到好处',ex_py:'dàn fēncun yào zhǎngwò de qiàdào-hǎochù',ex_vn:'nhưng chừng mực phải nắm cho thật vừa phải',
   exList:[
     {zh:'新的研究结果似乎更倾向于笑不是坏事，但分寸要掌握得恰到好处。',py:'Xīn de yánjiū jiéguǒ sìhū gèng qīngxiàng yú xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù.',vn:'Kết quả nghiên cứu mới dường như nghiêng về ý cười không phải chuyện xấu, nhưng phải giữ chừng mực cho thật vừa phải.'},
     {zh:'他说话很有分寸，从来不让别人难堪。',py:'Tā shuōhuà hěn yǒu fēncun, cónglái bú ràng biérén nánkān.',vn:'Anh ấy ăn nói rất có chừng mực, chưa bao giờ làm người khác khó xử.'},
     {zh:'跟长辈开玩笑要注意分寸，别太过分了。',py:'Gēn zhǎngbèi kāi wánxiào yào zhùyì fēncun, bié tài guòfèn le.',vn:'Đùa với người lớn phải chú ý chừng mực, đừng quá trớn.'}
   ],
   colloFull:[
     {zh:'掌握分寸',py:'zhǎngwò fēncun',vn:'nắm chừng mực'},
     {zh:'说话有分寸',py:'shuōhuà yǒu fēncun',vn:'ăn nói có chừng mực'},
     {zh:'没有分寸',py:'méiyǒu fēncun',vn:'không biết chừng mực'},
     {zh:'把握分寸',py:'bǎwò fēncun',vn:'giữ đúng mực'},
     {zh:'注意分寸',py:'zhùyì fēncun',vn:'chú ý chừng mực'}
   ],
   patterns:[
     {s:'说话 / 做事 + (很) + 有分寸',m:'Ăn nói / làm việc có chừng mực'},
     {s:'分寸 + 要 + 掌握得 + 恰到好处',m:'Phải giữ chừng mực cho vừa phải'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đùa thì được, nhưng phải có chừng mực, đừng làm người ta tổn thương.',answer:'开玩笑可以，但要有分寸，别伤害别人。',answerPy:'Kāi wánxiào kěyǐ, dàn yào yǒu fēncun, bié shānghài biérén.',
      note:'……可以，但要…… (cho phép có điều kiện).',pair:'……可以，但……'},
     {promptLang:'vi',prompt:'Cậu ấy tuy còn trẻ, nhưng làm việc rất biết chừng mực.',answer:'他虽然年轻，但做事很有分寸。',answerPy:'Tā suīrán niánqīng, dàn zuò shì hěn yǒu fēncun.',
      note:'虽然……但…… (ôn HSK 4).',pair:'虽然……但……'}
   ]},

  {n:47,zh:'恰到好处',py:'qiàdào-hǎochù',pos:'Thành ngữ',vn:'vừa đúng, vừa phải, đúng mức',hv:'kháp đáo hảo xứ',em:'👌',lesson:1,
   explain:['Làm / nói đến đúng mức tốt nhất, không thừa không thiếu (恰 = vừa đúng, 到 = đến, 好处 = chỗ tốt nhất). Khen sự vừa vặn: 说得恰到好处 / 恰到好处的安排.','Thường làm bổ ngữ sau 得 (掌握得恰到好处) hoặc định ngữ. Chú ý 处 đọc chù.'],
   usage:'V + 得 + 恰到好处; 恰到好处的 + N; 恰到好处 + 地 + V.',
   collo:['掌握得恰到好处','说得恰到好处','恰到好处的安排','恰到好处地表达'],
   ex_zh:'但分寸要掌握得恰到好处',ex_py:'dàn fēncun yào zhǎngwò de qiàdào-hǎochù',ex_vn:'nhưng chừng mực phải nắm cho thật vừa phải',
   exList:[
     {zh:'新的研究结果似乎更倾向于笑不是坏事，但分寸要掌握得恰到好处。',py:'Xīn de yánjiū jiéguǒ sìhū gèng qīngxiàng yú xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù.',vn:'Kết quả nghiên cứu mới dường như nghiêng về ý cười không phải chuyện xấu, nhưng phải giữ chừng mực cho thật vừa phải.'},
     {zh:'这道菜的咸淡恰到好处，大家都说好吃。',py:'Zhè dào cài de xiándàn qiàdào-hǎochù, dàjiā dōu shuō hǎochī.',vn:'Món này mặn nhạt vừa phải, ai cũng khen ngon.'},
     {zh:'她的发言时间控制得恰到好处，既说清楚了问题，又没有拖延。',py:'Tā de fāyán shíjiān kòngzhì de qiàdào-hǎochù, jì shuō qīngchule wèntí, yòu méiyǒu tuōyán.',vn:'Cô ấy kiểm soát thời gian phát biểu vừa đúng mức, vừa nói rõ vấn đề mà lại không kéo dài.'}
   ],
   colloFull:[
     {zh:'掌握得恰到好处',py:'zhǎngwò de qiàdào-hǎochù',vn:'nắm vừa đúng mức'},
     {zh:'说得恰到好处',py:'shuō de qiàdào-hǎochù',vn:'nói vừa đủ, đúng mức'},
     {zh:'恰到好处的安排',py:'qiàdào-hǎochù de ānpái',vn:'sự sắp xếp vừa vặn'},
     {zh:'恰到好处地表达',py:'qiàdào-hǎochù de biǎodá',vn:'diễn đạt vừa đúng'},
     {zh:'咸淡恰到好处',py:'xiándàn qiàdào-hǎochù',vn:'mặn nhạt vừa phải'}
   ],
   patterns:[
     {s:'V + 得 + 恰到好处',m:'Làm gì vừa đúng mức'},
     {s:'N + 恰到好处',m:'Cái gì vừa phải, đúng độ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời khen của cô giáo vừa đúng mức, vừa khích lệ học sinh lại không làm các em kiêu ngạo.',answer:'老师的表扬恰到好处，既鼓励了学生，又没让他们骄傲。',answerPy:'Lǎoshī de biǎoyáng qiàdào-hǎochù, jì gǔlìle xuésheng, yòu méi ràng tāmen jiāo\'ào.',
      note:'既……又…… (ôn HSK 4–5).',pair:'既……又……'},
     {promptLang:'vi',prompt:'Ánh đèn trong phòng không sáng không tối, vừa vặn.',answer:'房间里的灯光不亮也不暗，恰到好处。',answerPy:'Fángjiān li de dēngguāng bú liàng yě bú àn, qiàdào-hǎochù.',
      note:'不 A 也不 B = không A cũng không B.',pair:'不……也不……'}
   ]},

  {n:48,zh:'是非',py:'shìfēi',pos:'Danh từ',vn:'điều phải trái, cái đúng cái sai; chuyện thị phi',hv:'thị phi',em:'⚖️',lesson:1,
   explain:['Đúng và sai, phải và trái (是 = đúng, 非 = sai): 分清是非 / 明辨是非 (phân biệt phải trái). Bài khoá: 笑的是非无须探讨 = chuyện cười đúng hay sai chẳng cần bàn.','Nghĩa khác: lời ra tiếng vào, chuyện thị phi, điều tiếng: 搬弄是非 (đơm đặt thị phi), 惹是非. Tiếng Việt cũng dùng "thị phi".'],
   usage:'分清 / 明辨 + 是非; 是非 + 观念; ……的是非; 搬弄是非; 惹是非.',
   collo:['笑的是非','分清是非','明辨是非','搬弄是非'],
   ex_zh:'可是多数人还是深信，笑的是非无须探讨',ex_py:'Kěshì duōshù rén háishi shēnxìn, xiào de shìfēi wúxū tàntǎo',ex_vn:'Nhưng phần đông mọi người vẫn tin chắc rằng chuyện cười đúng hay sai chẳng cần bàn',
   exList:[
     {zh:'可是多数人还是深信，笑的是非无须探讨，任何形式的幽默，伤害风险都不高。',py:'Kěshì duōshù rén háishi shēnxìn, xiào de shìfēi wúxū tàntǎo, rènhé xíngshì de yōumò, shānghài fēngxiǎn dōu bù gāo.',vn:'Nhưng phần đông mọi người vẫn tin chắc rằng chuyện cười đúng hay sai chẳng cần bàn, bất kỳ hình thức hài hước nào, nguy cơ gây hại đều không cao.'},
     {zh:'孩子要从小学会分清是非，知道什么该做，什么不该做。',py:'Háizi yào cóng xiǎo xuéhuì fēnqīng shìfēi, zhīdào shénme gāi zuò, shénme bù gāi zuò.',vn:'Trẻ con phải học phân biệt phải trái từ nhỏ, biết điều gì nên làm, điều gì không nên làm.'},
     {zh:'她从不在背后搬弄是非，所以大家都很信任她。',py:'Tā cóng bú zài bèihòu bānnòng shìfēi, suǒyǐ dàjiā dōu hěn xìnrèn tā.',vn:'Cô ấy chưa bao giờ đơm đặt thị phi sau lưng người khác, nên mọi người đều rất tin cô.'}
   ],
   colloFull:[
     {zh:'笑的是非',py:'xiào de shìfēi',vn:'chuyện cười đúng hay sai'},
     {zh:'分清是非',py:'fēnqīng shìfēi',vn:'phân rõ phải trái'},
     {zh:'明辨是非',py:'míngbiàn shìfēi',vn:'phân biệt rõ đúng sai'},
     {zh:'搬弄是非',py:'bānnòng shìfēi',vn:'đơm đặt thị phi'},
     {zh:'是非观念',py:'shìfēi guānniàn',vn:'quan niệm đúng sai'}
   ],
   patterns:[
     {s:'分清 / 明辨 + 是非',m:'Phân biệt phải trái'},
     {s:'……的是非 + 无须 / 不必 + 探讨',m:'Chuyện đúng sai của … chẳng cần bàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù là bạn thân nhất, gặp chuyện cũng phải phân rõ phải trái.',answer:'即使是最好的朋友，遇到事情也要分清是非。',answerPy:'Jíshǐ shì zuì hǎo de péngyou, yùdào shìqing yě yào fēnqīng shìfēi.',
      note:'即使……也…… (ôn HSK 5).',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Chuyện này đúng hay sai, mọi người trong lòng đều rõ.',answer:'这件事的是非，大家心里都很清楚。',answerPy:'Zhè jiàn shì de shìfēi, dàjiā xīnli dōu hěn qīngchu.',
      note:'Chủ đề đặt đầu câu (这件事的是非), sau là bình luận.',pair:'chủ đề + bình luận'}
   ]},

  {n:49,zh:'探讨',py:'tàntǎo',pos:'Động từ',vn:'nghiên cứu thảo luận, bàn luận (sâu)',hv:'thám thảo',em:'💬',lesson:1,
   explain:['Nghiên cứu, thảo luận sâu để tìm hiểu vấn đề (探 = dò tìm, 讨 = bàn luận): 探讨问题 / 原因 / 方法. Mang tính học thuật, nghiêm túc hơn 讨论.','Hay dùng: 值得探讨 (đáng bàn), 深入探讨 (bàn sâu), 共同探讨 (cùng thảo luận), 无须探讨 (không cần bàn — bài khoá).'],
   usage:'探讨 + 问题 / 原因 / 方法 / 规律; 深入 / 共同 + 探讨; 值得 + 探讨; 无须 + 探讨.',
   collo:['无须探讨','深入探讨','值得探讨','共同探讨'],
   ex_zh:'笑的是非无须探讨',ex_py:'xiào de shìfēi wúxū tàntǎo',ex_vn:'chuyện cười đúng hay sai chẳng cần bàn',
   exList:[
     {zh:'可是多数人还是深信，笑的是非无须探讨。',py:'Kěshì duōshù rén háishi shēnxìn, xiào de shìfēi wúxū tàntǎo.',vn:'Nhưng phần đông mọi người vẫn tin chắc rằng chuyện cười đúng hay sai chẳng cần bàn.'},
     {zh:'这次会议主要探讨如何减轻学生的学习压力。',py:'Zhè cì huìyì zhǔyào tàntǎo rúhé jiǎnqīng xuésheng de xuéxí yālì.',vn:'Hội nghị lần này chủ yếu bàn luận làm thế nào giảm áp lực học tập cho học sinh.'},
     {zh:'这个问题很值得探讨，我们下次课再深入研究。',py:'Zhège wèntí hěn zhíde tàntǎo, wǒmen xià cì kè zài shēnrù yánjiū.',vn:'Vấn đề này rất đáng bàn, buổi học sau chúng ta sẽ nghiên cứu sâu hơn.'}
   ],
   colloFull:[
     {zh:'无须探讨',py:'wúxū tàntǎo',vn:'không cần bàn'},
     {zh:'深入探讨',py:'shēnrù tàntǎo',vn:'thảo luận sâu'},
     {zh:'值得探讨',py:'zhíde tàntǎo',vn:'đáng bàn luận'},
     {zh:'共同探讨',py:'gòngtóng tàntǎo',vn:'cùng nhau thảo luận'},
     {zh:'探讨原因',py:'tàntǎo yuányīn',vn:'tìm hiểu nguyên nhân'}
   ],
   patterns:[
     {s:'探讨 + 如何 / 怎样 + V',m:'Bàn luận làm thế nào để …'},
     {s:'……很值得 + 探讨',m:'Điều gì rất đáng bàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các chuyên gia đã cùng nhau bàn luận nguyên nhân khiến học sinh cận thị.',answer:'专家们共同探讨了学生近视的原因。',answerPy:'Zhuānjiāmen gòngtóng tàntǎole xuésheng jìnshì de yuányīn.',
      note:'V了 + tân ngữ (hoàn thành).',pair:'V了'},
     {promptLang:'vi',prompt:'Nếu mọi người có hứng thú, chúng ta có thể bàn sâu hơn vấn đề này.',answer:'如果大家有兴趣，我们可以对这个问题进行深入探讨。',answerPy:'Rúguǒ dàjiā yǒu xìngqù, wǒmen kěyǐ duì zhège wèntí jìnxíng shēnrù tàntǎo.',
      note:'对……进行 + V song âm (văn viết, ôn HSK 5).',pair:'对……进行……'}
   ]},

  {n:50,zh:'收益',py:'shōuyì',pos:'Danh từ',vn:'lợi ích, lợi nhuận, thu nhập',hv:'thu ích',em:'💰',lesson:1,
   explain:['Lợi ích / thu nhập có được từ sản xuất, kinh doanh, đầu tư (收 = thu, 益 = ích): 获得收益 / 收益很大 / 可观的收益.','Nghĩa rộng: cái lợi thu được từ việc gì: 笑的收益 (cái lợi của tiếng cười — bài khoá). Đối lập 风险 / 成本 (rủi ro / chi phí).'],
   usage:'获得 / 带来 + 收益; 可观的 + 收益; 收益 + 很大 / 显而易见; ……的收益.',
   collo:['可观的收益','获得收益','其收益','收益很大'],
   ex_zh:'伤害风险都不高，其收益则是显而易见的',ex_py:'shānghài fēngxiǎn dōu bù gāo, qí shōuyì zé shì xiǎn\'éryìjiàn de',ex_vn:'nguy cơ gây hại đều không cao, còn lợi ích của nó thì rõ ràng dễ thấy',
   exList:[
     {zh:'任何形式的幽默，伤害风险都不高，其收益则是显而易见的。',py:'Rènhé xíngshì de yōumò, shānghài fēngxiǎn dōu bù gāo, qí shōuyì zé shì xiǎn\'éryìjiàn de.',vn:'Bất kỳ hình thức hài hước nào, nguy cơ gây hại đều không cao, còn lợi ích của nó thì rõ ràng dễ thấy.'},
     {zh:'再找一个恰当的时机投放到市场，才能获得可观的收益。',py:'Zài zhǎo yí ge qiàdàng de shíjī tóufàng dào shìchǎng, cái néng huòdé kěguān de shōuyì.',vn:'Rồi tìm một thời cơ thích hợp để tung ra thị trường, mới có thể thu được lợi nhuận đáng kể.'},
     {zh:'每天坚持读书半小时，长期下来收益很大。',py:'Měi tiān jiānchí dúshū bàn xiǎoshí, chángqī xiàlai shōuyì hěn dà.',vn:'Mỗi ngày kiên trì đọc sách nửa tiếng, lâu dài sẽ được lợi rất nhiều.'}
   ],
   colloFull:[
     {zh:'可观的收益',py:'kěguān de shōuyì',vn:'lợi nhuận đáng kể'},
     {zh:'获得收益',py:'huòdé shōuyì',vn:'thu được lợi ích'},
     {zh:'其收益',py:'qí shōuyì',vn:'lợi ích của nó'},
     {zh:'收益很大',py:'shōuyì hěn dà',vn:'lợi ích rất lớn'},
     {zh:'带来收益',py:'dàilái shōuyì',vn:'mang lại lợi nhuận'}
   ],
   patterns:[
     {s:'获得 / 带来 + (可观的) + 收益',m:'Thu được / mang lại lợi ích (đáng kể)'},
     {s:'风险……，(其) 收益则……',m:'Rủi ro … còn lợi ích thì … (đối chiếu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khoản đầu tư này rủi ro tuy lớn, nhưng lợi nhuận cũng rất đáng kể.',answer:'这笔投资风险虽然很大，但收益也很可观。',answerPy:'Zhè bǐ tóuzī fēngxiǎn suīrán hěn dà, dàn shōuyì yě hěn kěguān.',
      note:'虽然……但……也…… (đối chiếu).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Chỉ cần kiên trì, việc học ngoại ngữ sẽ mang lại cho bạn lợi ích suốt đời.',answer:'只要坚持下去，学外语会给你带来终身的收益。',answerPy:'Zhǐyào jiānchí xiàqu, xué wàiyǔ huì gěi nǐ dàilái zhōngshēn de shōuyì.',
      note:'只要……就 / 会……; V下去 (tiếp tục); 终身 (HSK 6 bài 7).',pair:'只要……'}
   ]},

  {n:51,zh:'起哄',py:'qǐhòng',pos:'Động từ (li hợp)',vn:'làm ầm ĩ cả lên, hùa nhau trêu chọc',hv:'khởi hống',em:'🙌',lesson:1,
   explain:['(Nhiều người) cùng nhau làm ồn, reo hò, hùa theo trêu chọc: 大家一起哄，他脸都红了. 哄 ở đây đọc hòng (khác hǒng = dỗ dành).','Là từ li hợp: 起起哄 (lặp lại — bài khoá), 起什么哄. Sắc thái: vui đùa giữa bạn bè, hoặc gây rối (别起哄!).'],
   usage:'(大家 / 朋友们) + 起哄; 起起哄 (láy); 别 + 起哄; 起什么哄; 跟着 + 起哄.',
   collo:['起起哄','别起哄','跟着起哄','开始起哄'],
   ex_zh:'真是好朋友在一起，高兴了，起起哄',ex_py:'zhēn shì hǎo péngyou zài yìqǐ, gāoxìng le, qǐqi hòng',ex_vn:'bạn thân tụ họp với nhau, vui lên thì làm ầm ĩ một chút',
   exList:[
     {zh:'况且，真是好朋友在一起，高兴了，起起哄，或是遇到了开心事，哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',py:'Kuàngqiě, zhēn shì hǎo péngyou zài yìqǐ, gāoxìng le, qǐqi hòng, huò shì yùdàole kāixīn shì, nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',vn:'Huống hồ, bạn thân tụ họp với nhau, vui lên thì làm ầm ĩ một chút, hoặc gặp chuyện vui, đâu còn tâm trí mà cân nhắc chừng mực có thích hợp hay không?'},
     {zh:'他刚说要请客，同学们就开始起哄，让他请大家吃火锅。',py:'Tā gāng shuō yào qǐngkè, tóngxuémen jiù kāishǐ qǐhòng, ràng tā qǐng dàjiā chī huǒguō.',vn:'Cậu ấy vừa nói sẽ khao, các bạn đã bắt đầu hùa nhau reo hò, bắt cậu mời cả lớp ăn lẩu.'},
     {zh:'大家别起哄了，让他把话说完。',py:'Dàjiā bié qǐhòng le, ràng tā bǎ huà shuōwán.',vn:'Mọi người đừng làm ồn nữa, để cậu ấy nói hết đã.'}
   ],
   colloFull:[
     {zh:'起起哄',py:'qǐqi hòng',vn:'làm ầm ĩ một chút'},
     {zh:'别起哄',py:'bié qǐhòng',vn:'đừng làm ồn / đừng trêu nữa'},
     {zh:'跟着起哄',py:'gēnzhe qǐhòng',vn:'hùa theo reo hò'},
     {zh:'开始起哄',py:'kāishǐ qǐhòng',vn:'bắt đầu làm ầm lên'},
     {zh:'起什么哄',py:'qǐ shénme hòng',vn:'làm ồn cái gì'}
   ],
   patterns:[
     {s:'大家 / 同学们 + 起哄 + (让……)',m:'Mọi người hùa nhau (bắt ai làm gì)'},
     {s:'别 + 起哄 + 了',m:'Đừng làm ồn / đừng trêu nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện nghiêm túc thế này, các cậu đừng hùa nhau trêu nữa.',answer:'这么严肃的事，你们就别起哄了。',answerPy:'Zhème yánsù de shì, nǐmen jiù bié qǐhòng le.',
      note:'别……了 = đừng … nữa (ôn HSK 3–4).',pair:'别……了'},
     {promptLang:'vi',prompt:'Cô ấy vừa lên sân khấu, cả hội trường đã reo hò ầm ĩ.',answer:'她一上台，全场的人就起哄了。',answerPy:'Tā yí shàng tái, quán chǎng de rén jiù qǐhòng le.',
      note:'一……就…… (ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:52,zh:'斟酌',py:'zhēnzhuó',pos:'Động từ',vn:'cân nhắc, đắn đo',hv:'châm chước',em:'🤔',lesson:1,
   explain:['Suy xét kỹ xem có thích hợp hay không rồi mới quyết định (vốn là "rót rượu cho vừa": 斟 = rót, 酌 = rót / uống). 斟酌字句 / 用词 / 分寸. Có thể lặp: 斟酌斟酌.','BẪY Hán–Việt: "châm chước" tiếng Việt nghĩa là "nương tay, bỏ qua lỗi", còn 斟酌 là CÂN NHẮC KỸ. Văn viết hơn 考虑.'],
   usage:'斟酌 + 字句 / 用词 / 分寸 / 方案; 再三 / 反复 + 斟酌; 斟酌斟酌; 经过斟酌.',
   collo:['斟酌分寸','反复斟酌','斟酌斟酌','斟酌字句'],
   ex_zh:'哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',ex_py:'nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',ex_vn:'đâu còn tâm trí mà cân nhắc chừng mực có thích hợp hay không?',
   exList:[
     {zh:'真是好朋友在一起，高兴了，起起哄，哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',py:'Zhēn shì hǎo péngyou zài yìqǐ, gāoxìng le, qǐqi hòng, nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',vn:'Bạn thân tụ họp với nhau, vui lên thì làm ầm ĩ một chút, đâu còn tâm trí mà cân nhắc chừng mực có thích hợp hay không?'},
     {zh:'明天的会议很重要，发言稿你好好斟酌斟酌。',py:'Míngtiān de huìyì hěn zhòngyào, fāyángǎo nǐ hǎohǎo zhēnzhuó zhēnzhuó.',vn:'Cuộc họp ngày mai rất quan trọng, bài phát biểu cậu cân nhắc cho kỹ nhé.'},
     {zh:'经过反复斟酌，他最后决定放弃这份工作。',py:'Jīngguò fǎnfù zhēnzhuó, tā zuìhòu juédìng fàngqì zhè fèn gōngzuò.',vn:'Sau nhiều lần đắn đo, cuối cùng anh ấy quyết định từ bỏ công việc này.'}
   ],
   colloFull:[
     {zh:'斟酌分寸',py:'zhēnzhuó fēncun',vn:'cân nhắc chừng mực'},
     {zh:'反复斟酌',py:'fǎnfù zhēnzhuó',vn:'đắn đo nhiều lần'},
     {zh:'斟酌斟酌',py:'zhēnzhuó zhēnzhuó',vn:'cân nhắc một chút'},
     {zh:'斟酌字句',py:'zhēnzhuó zìjù',vn:'cân nhắc từng câu chữ'},
     {zh:'经过斟酌',py:'jīngguò zhēnzhuó',vn:'sau khi cân nhắc'}
   ],
   patterns:[
     {s:'(好好) + 斟酌斟酌 + N',m:'Cân nhắc kỹ cái gì (lặp lại = làm thử một chút)'},
     {s:'经过 + (反复) + 斟酌，……',m:'Sau khi đắn đo (nhiều lần) thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Viết thư cho thầy cô phải cân nhắc từng câu chữ, đừng viết quá tuỳ tiện.',answer:'给老师写信要斟酌字句，别写得太随便。',answerPy:'Gěi lǎoshī xiě xìn yào zhēnzhuó zìjù, bié xiě de tài suíbiàn.',
      note:'给……写信; V得太 + Adj (ôn HSK 4).',pair:'V得太……'},
     {promptLang:'vi',prompt:'Việc này rất quan trọng, cậu cứ cân nhắc thêm rồi hãy trả lời tớ.',answer:'这件事很重要，你再斟酌斟酌，然后再回答我。',answerPy:'Zhè jiàn shì hěn zhòngyào, nǐ zài zhēnzhuó zhēnzhuó, ránhòu zài huídá wǒ.',
      note:'Lặp động từ song âm ABAB = làm thử một chút; 然后再…….',pair:'ABAB'}
   ]},

  {n:53,zh:'恰当',py:'qiàdàng',pos:'Tính từ',vn:'thích hợp, thoả đáng',hv:'kháp đáng',em:'✅',lesson:1,
   explain:['Thích hợp, vừa đúng, thoả đáng (恰 = vừa, 当 = đáng): 用词恰当 / 恰当的时机 / 恰当的方法. 当 đọc dàng.','So với 适当 (vừa phải về mức độ, lượng: 适当休息) và 妥当 (ổn thoả — sắp xếp, xử lý; HSK 6 bài 25), 恰当 nhấn sự PHÙ HỢP, ĐÚNG CHỖ (lời nói, cách dùng từ, thời cơ).'],
   usage:'恰当的 + 时机 / 方法 / 词语 / 比喻; 用词 / 处理 + 恰当; 恰当不恰当; 不太恰当.',
   collo:['恰当的时机','用词恰当','恰当不恰当','恰当的方法'],
   ex_zh:'哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',ex_py:'nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',ex_vn:'đâu còn tâm trí mà cân nhắc chừng mực có thích hợp hay không?',
   exList:[
     {zh:'高兴了，起起哄，或是遇到了开心事，哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',py:'Gāoxìng le, qǐqi hòng, huò shì yùdàole kāixīn shì, nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',vn:'Vui lên thì làm ầm ĩ một chút, hoặc gặp chuyện vui, đâu còn tâm trí mà cân nhắc chừng mực có thích hợp hay không?'},
     {zh:'再找一个恰当的时机投放到市场，才能获得可观的收益。',py:'Zài zhǎo yí ge qiàdàng de shíjī tóufàng dào shìchǎng, cái néng huòdé kěguān de shōuyì.',vn:'Rồi tìm một thời cơ thích hợp để tung ra thị trường, mới có thể thu được lợi nhuận đáng kể.'},
     {zh:'这个比喻用得非常恰当，一下子就把道理说清楚了。',py:'Zhège bǐyù yòng de fēicháng qiàdàng, yíxiàzi jiù bǎ dàolǐ shuō qīngchu le.',vn:'Phép so sánh này dùng rất đắt, lập tức nói rõ được đạo lý.'}
   ],
   colloFull:[
     {zh:'恰当的时机',py:'qiàdàng de shíjī',vn:'thời cơ thích hợp'},
     {zh:'用词恰当',py:'yòngcí qiàdàng',vn:'dùng từ thoả đáng'},
     {zh:'恰当不恰当',py:'qiàdàng bu qiàdàng',vn:'thích hợp hay không'},
     {zh:'恰当的方法',py:'qiàdàng de fāngfǎ',vn:'phương pháp thích hợp'},
     {zh:'不太恰当',py:'bú tài qiàdàng',vn:'không thoả đáng lắm'}
   ],
   patterns:[
     {s:'恰当的 + 时机 / 方法 / 词语',m:'Thời cơ / cách / từ ngữ thích hợp'},
     {s:'V + 得 + (很 / 非常) + 恰当',m:'Làm gì rất thoả đáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tớ thấy dùng từ này ở đây không thoả đáng lắm, cậu đổi từ khác đi.',answer:'我觉得这个词用在这里不太恰当，你换一个吧。',answerPy:'Wǒ juéde zhège cí yòng zài zhèlǐ bú tài qiàdàng, nǐ huàn yí ge ba.',
      note:'V在 + nơi chốn; 不太 + Adj = không … lắm.',pair:'不太……'},
     {promptLang:'vi',prompt:'Đợi thời cơ thích hợp, tôi sẽ nói chuyện này với bố mẹ.',answer:'等到了恰当的时机，我再把这件事告诉父母。',answerPy:'Děng dàole qiàdàng de shíjī, wǒ zài bǎ zhè jiàn shì gàosu fùmǔ.',
      note:'等……再…… (đợi … rồi mới …); 时机 (HSK 6 bài 6).',pair:'等……再……'}
   ]}
];


// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng; đề mục (一)(二) tách riêng)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · “笑”的备忘录',
   preQuiz:[
     {q:'课文认为，听到庸俗的笑话时假笑两声、敷衍一下怎么样？',opts:['好像确实不行','是有礼貌的表现','对健康很有好处'],ans:0},
     {q:'如果你不想笑，作者说千万不要做什么？',opts:['回避，不表态','把话题岔开','画蛇添足，违心地笑'],ans:2},
     {q:'为什么说别人能看出你的笑是真是假？',opts:['因为假笑的声音特别大','因为大脑听到真笑和假笑时反应完全不同','因为假笑的人表情不自然'],ans:1},
     {q:'假笑声会激活大脑中的什么区域？',opts:['与快乐和积极情绪相关的区域','用于破译情感信息的特定区域','控制运动和感知的区域'],ans:1},
     {q:'为了证实这一理论，研究者让志愿者做了什么？',opts:['倾听网站视频中的笑声','给别人讲笑话','去剧场听相声'],ans:0},
     {q:'测试中，志愿者是怎样分辨出假笑声的？',opts:['研究者预先告诉了他们测试目的','他们看到了笑的人的表情','仅凭直觉'],ans:2},
     {q:'研究者认为，大脑对笑声中的信息敏感，和智商有什么关系？',opts:['智商越高越敏感','只有聪明的人才敏感','这不完全是智商问题'],ans:2},
     {q:'中国人为什么喜欢听相声？',opts:['因为它历史悠久','因为它逗笑','因为它能治病'],ans:1},
     {q:'100次捧腹大笑所吸收的氧气相当于什么？',opts:['用桨划船10分钟的吸氧量','跑步10分钟的吸氧量','游泳一小时的吸氧量'],ans:0},
     {q:'有人做过试验，开怀大笑一整天可以燃烧掉多少卡路里？',opts:['200','2000','20000'],ans:1},
     {q:'下面哪一项是课文提到的笑的副作用？',opts:['让人发胖','让人失眠','可能因心跳加速而昏迷'],ans:2},
     {q:'新的研究结果更倾向于什么观点？',opts:['笑不是坏事，但分寸要掌握得恰到好处','笑有百益而无一害','笑是人生旅途中的最佳良药'],ans:0}
   ],
   lines:[
    {sp:0,zh:'（一）大脑能“听”出笑声的真假',
     py:'(Yī) Dànǎo néng “tīng” chū xiàoshēng de zhēn jiǎ',
     vn:'(1) Não bộ có thể "nghe" ra tiếng cười thật hay giả'},
    {sp:0,zh:'真是岂有此理，难道我们听到庸俗、不上档次的笑话假笑两声、敷衍一下也不可以吗？可是，好像确实不行。诸位，如果你不想难堪，不想让别人发现你发出的是虚伪、违背心意的笑声，你可以回避，可以不表态，可以把话题岔开，可以装聋装哑，但不要画蛇添足，违心地笑。因为只要你笑，不管你多机灵，不管你掩饰得多么周密，别人都能看出你的笑是真心实意，还是虚情假意、装模作样。有人不禁要问，人是通过什么途径识别“笑”背后的真实情感呢？研究者发现，我们在听到发自内心的笑声和虚假的笑声时，大脑会呈现出完全不同的反应。',
     py:'Zhēn shì qǐyǒucǐlǐ, nándào wǒmen tīngdào yōngsú, bú shàng dàngcì de xiàohua jiǎ xiào liǎng shēng, fūyǎn yíxià yě bù kěyǐ ma? Kěshì, hǎoxiàng quèshí bù xíng. Zhūwèi, rúguǒ nǐ bù xiǎng nánkān, bù xiǎng ràng biérén fāxiàn nǐ fāchū de shì xūwěi, wéibèi xīnyì de xiàoshēng, nǐ kěyǐ huíbì, kěyǐ bù biǎotài, kěyǐ bǎ huàtí chàkāi, kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú, wéixīn de xiào. Yīnwèi zhǐyào nǐ xiào, bùguǎn nǐ duō jīling, bùguǎn nǐ yǎnshì de duōme zhōumì, biérén dōu néng kànchū nǐ de xiào shì zhēnxīn-shíyì, háishi xūqíng-jiǎyì, zhuāngmú-zuòyàng. Yǒu rén bùjīn yào wèn, rén shì tōngguò shénme tújìng shíbié “xiào” bèihòu de zhēnshí qínggǎn ne? Yánjiūzhě fāxiàn, wǒmen zài tīngdào fāzì nèixīn de xiàoshēng hé xūjiǎ de xiàoshēng shí, dànǎo huì chéngxiàn chū wánquán bù tóng de fǎnyìng.',
     vn:'Thật là vô lý hết sức, lẽ nào nghe những câu chuyện cười tầm thường, kém cỏi mà chúng ta cười giả vài tiếng, đối phó một chút cũng không được sao? Thế nhưng, hình như quả thật là không được. Thưa quý vị, nếu bạn không muốn khó xử, không muốn để người khác phát hiện tiếng cười mình phát ra là giả dối, trái với lòng mình, thì bạn có thể né tránh, có thể không bày tỏ thái độ, có thể lái sang chuyện khác, có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái lòng. Bởi vì chỉ cần bạn cười, dù bạn lanh lợi đến đâu, dù bạn che giấu kín kẽ thế nào, người khác đều có thể nhìn ra nụ cười của bạn là thật lòng thật dạ, hay là giả tình giả ý, làm bộ làm tịch. Có người không khỏi muốn hỏi: con người nhận biết tình cảm thật đằng sau "nụ cười" bằng con đường nào? Các nhà nghiên cứu phát hiện, khi nghe tiếng cười xuất phát từ đáy lòng và tiếng cười giả tạo, não bộ của chúng ta sẽ có những phản ứng hoàn toàn khác nhau.'},
    {sp:0,zh:'假笑声会激活大脑中用于破译情感信息的特定区域，同时大脑会自动分析假笑的缘故，假笑者想隐瞒什么，以及假笑者的意向；诚挚的笑声则会激活大脑中与快乐和积极情绪相关的区域。为了证实这一理论，一丝不苟的研究者让志愿者倾听网站视频中的笑声，同时记录他们大脑的反应，并将志愿者听到真笑与假笑时大脑的反应做对比。测试结果一目了然，志愿者在预先未被告知测试目的的情况下，仅凭直觉就能准确地分辨出假笑声。天呀，人的大脑中竟然深藏着一双能够探测他人喜悦之情真伪的眼睛！',
     py:'Jiǎ xiàoshēng huì jīhuó dànǎo zhōng yòngyú pòyì qínggǎn xìnxī de tèdìng qūyù, tóngshí dànǎo huì zìdòng fēnxī jiǎ xiào de yuángù, jiǎxiàozhě xiǎng yǐnmán shénme, yǐjí jiǎxiàozhě de yìxiàng; chéngzhì de xiàoshēng zé huì jīhuó dànǎo zhōng yǔ kuàilè hé jījí qíngxù xiāngguān de qūyù. Wèile zhèngshí zhè yī lǐlùn, yìsī-bùgǒu de yánjiūzhě ràng zhìyuànzhě qīngtīng wǎngzhàn shìpín zhōng de xiàoshēng, tóngshí jìlù tāmen dànǎo de fǎnyìng, bìng jiāng zhìyuànzhě tīngdào zhēn xiào yǔ jiǎ xiào shí dànǎo de fǎnyìng zuò duìbǐ. Cèshì jiéguǒ yímù-liǎorán, zhìyuànzhě zài yùxiān wèi bèi gàozhī cèshì mùdì de qíngkuàng xià, jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng. Tiān ya, rén de dànǎo zhōng jìngrán shēncángzhe yì shuāng nénggòu tàncè tārén xǐyuè zhī qíng zhēnwěi de yǎnjing!',
     vn:'Tiếng cười giả sẽ kích hoạt vùng riêng biệt trong não dùng để giải mã thông tin cảm xúc, đồng thời não sẽ tự động phân tích nguyên do của việc cười giả, người cười giả muốn che giấu điều gì, và ý đồ của người cười giả; còn tiếng cười chân thành thì sẽ kích hoạt vùng não liên quan đến niềm vui và cảm xúc tích cực. Để chứng thực lý thuyết này, các nhà nghiên cứu cẩn thận tỉ mỉ đã cho tình nguyện viên lắng nghe tiếng cười trong các video trên trang web, đồng thời ghi lại phản ứng của não họ, rồi đem so sánh phản ứng của não khi tình nguyện viên nghe tiếng cười thật và tiếng cười giả. Kết quả thử nghiệm nhìn qua là rõ: dù không được báo trước mục đích thử nghiệm, chỉ dựa vào trực giác, các tình nguyện viên đã có thể phân biệt chính xác tiếng cười giả. Trời ơi, trong não người lại ẩn sâu một đôi mắt có thể dò ra niềm vui của người khác là thật hay giả!'},
    {sp:0,zh:'研究者指出：“人类大脑对于笑声中所隐含的社会和情感信息非常敏感，这不完全是智商问题。当志愿者听到笑声时，会开启大脑中与心智相关的区域，从而获知他人的情感或精神状态，有些志愿者还动用了大脑中控制运动和感知的部分，进而更精准地提炼出真假笑声背后的信息。”',
     py:'Yánjiūzhě zhǐchū: “Rénlèi dànǎo duìyú xiàoshēng zhōng suǒ yǐnhán de shèhuì hé qínggǎn xìnxī fēicháng mǐngǎn, zhè bù wánquán shì zhìshāng wèntí. Dāng zhìyuànzhě tīngdào xiàoshēng shí, huì kāiqǐ dànǎo zhōng yǔ xīnzhì xiāngguān de qūyù, cóng\'ér huòzhī tārén de qínggǎn huò jīngshén zhuàngtài, yǒuxiē zhìyuànzhě hái dòngyòngle dànǎo zhōng kòngzhì yùndòng hé gǎnzhī de bùfen, jìn\'ér gèng jīngzhǔn de tíliàn chū zhēn jiǎ xiàoshēng bèihòu de xìnxī.”',
     vn:'Các nhà nghiên cứu chỉ ra: "Não người rất nhạy cảm với những thông tin xã hội và cảm xúc ẩn chứa trong tiếng cười, điều này không hoàn toàn là vấn đề chỉ số thông minh. Khi nghe tiếng cười, tình nguyện viên sẽ khởi động vùng não liên quan đến tâm trí, nhờ đó biết được trạng thái tình cảm hoặc tinh thần của người khác; một số tình nguyện viên còn huy động cả phần não điều khiển vận động và cảm nhận, từ đó rút ra chính xác hơn thông tin đằng sau tiếng cười thật và giả."'},
    {sp:0,zh:'（二）笑未必是最佳良药',
     py:'(Èr) Xiào wèibì shì zuì jiā liángyào',
     vn:'(2) Cười chưa chắc đã là liều thuốc tốt nhất'},
    {sp:0,zh:'中国人喜欢听相声，因为它逗笑。',
     py:'Zhōngguórén xǐhuan tīng xiàngsheng, yīnwèi tā dòuxiào.',
     vn:'Người Trung Quốc thích nghe tấu hài, vì nó gây cười.'},
    {sp:0,zh:'“笑有益于健康”几乎得到了全世界的认可，“笑一笑十年少”“一笑解千愁”不仅被大家认可，甚至被一些人当作生活的座右铭。中国人深信开怀大笑也好，哈哈傻笑也罢，哪怕是私下里偷偷地笑，都会是生活中最通用，而且管用的治病良方。',
     py:'“Xiào yǒuyì yú jiànkāng” jīhū dédàole quán shìjiè de rènkě, “xiào yi xiào shí nián shào” “yí xiào jiě qiān chóu” bùjǐn bèi dàjiā rènkě, shènzhì bèi yìxiē rén dàngzuò shēnghuó de zuòyòumíng. Zhōngguórén shēnxìn kāihuái dà xiào yě hǎo, hāhā shǎxiào yě bà, nǎpà shì sīxià li tōutōu de xiào, dōu huì shì shēnghuó zhōng zuì tōngyòng, érqiě guǎnyòng de zhì bìng liángfāng.',
     vn:'"Cười có lợi cho sức khoẻ" gần như đã được cả thế giới thừa nhận; "một nụ cười trẻ mười năm", "cười một cái tan nghìn nỗi sầu" không chỉ được mọi người công nhận, thậm chí còn được một số người coi là châm ngôn sống. Người Trung Quốc tin chắc rằng dù là cười sảng khoái hay cười ha hả ngây ngô, thậm chí là lén cười một mình, đều sẽ là phương thuốc chữa bệnh thông dụng nhất mà lại hiệu nghiệm trong cuộc sống.'},
    {sp:0,zh:'有研究证实，笑可以调节情绪，可以促进血液循环和腹肌收缩，100次捧腹大笑所吸收的氧气相当于用桨划船10分钟的吸氧量。有人做过这样的试验，开怀大笑一整天，可以燃烧掉2000卡路里，从而帮助消耗脂肪，减轻体重，同时，笑有助于缓解动脉硬化，有助于消除紧张感，这就是笑有利于健康的实质性的证据。',
     py:'Yǒu yánjiū zhèngshí, xiào kěyǐ tiáojié qíngxù, kěyǐ cùjìn xuèyè xúnhuán hé fùjī shōusuō, yìbǎi cì pěngfù dà xiào suǒ xīshōu de yǎngqì xiāngdāng yú yòng jiǎng huá chuán shí fēnzhōng de xīyǎngliàng. Yǒu rén zuòguo zhèyàng de shìyàn, kāihuái dà xiào yì zhěng tiān, kěyǐ ránshāo diào liǎngqiān kǎlùlǐ, cóng\'ér bāngzhù xiāohào zhīfáng, jiǎnqīng tǐzhòng, tóngshí, xiào yǒuzhù yú huǎnjiě dòngmài yìnghuà, yǒuzhù yú xiāochú jǐnzhānggǎn, zhè jiù shì xiào yǒulì yú jiànkāng de shízhìxìng de zhèngjù.',
     vn:'Có nghiên cứu chứng thực rằng cười có thể điều hoà cảm xúc, có thể thúc đẩy tuần hoàn máu và sự co bóp cơ bụng; lượng oxy hấp thụ qua 100 lần cười ôm bụng tương đương với lượng oxy hít vào khi dùng mái chèo chèo thuyền 10 phút. Có người đã làm thử nghiệm thế này: cười sảng khoái suốt một ngày có thể đốt cháy 2000 calo, nhờ đó giúp tiêu hao mỡ, giảm cân; đồng thời, cười giúp làm giảm xơ cứng động mạch, giúp xua tan cảm giác căng thẳng — đó chính là bằng chứng thực chất cho việc cười có lợi cho sức khoẻ. (Chú thích của sách: 卡路里 — đơn vị đo nhiệt lượng, ký hiệu cal, gọi tắt là 卡; gốc tiếng Pháp calorie.)'},
    {sp:0,zh:'然而，笑，真的是人生旅途中的最佳良药吗？答案似乎不是那么肯定。有研究人员表示，笑也不是有百益而无一害的，有时它还会产生副作用。有医生就碰到过这样的案例：有人在肆无忌惮地笑过后因心跳加速而昏迷，而大笑到“几乎笑破肚皮”可能会导致岔气，心脏不舒服，甚至损坏人体健康。新的研究结果对笑“有百益而无一害”的观点提出了挑战，似乎更倾向于笑不是坏事，但分寸要掌握得恰到好处。可是多数人还是深信，笑的是非无须探讨，任何形式的幽默，伤害风险都不高，其收益则是显而易见的，况且，真是好朋友在一起，高兴了，起起哄，或是遇到了开心事，哪里还顾得上斟酌分寸掌握得恰当不恰当呢？',
     py:'Rán\'ér, xiào, zhēn de shì rénshēng lǚtú zhōng de zuì jiā liángyào ma? Dá\'àn sìhū bú shì nàme kěndìng. Yǒu yánjiū rényuán biǎoshì, xiào yě bú shì yǒu bǎi yì ér wú yí hài de, yǒushí tā hái huì chǎnshēng fùzuòyòng. Yǒu yīshēng jiù pèngdàoguo zhèyàng de ànlì: yǒu rén zài sìwú-jìdàn de xiàoguo hòu yīn xīntiào jiāsù ér hūnmí, ér dà xiào dào “jīhū xiàopò dùpí” kěnéng huì dǎozhì chàqì, xīnzàng bù shūfu, shènzhì sǔnhuài réntǐ jiànkāng. Xīn de yánjiū jiéguǒ duì xiào “yǒu bǎi yì ér wú yí hài” de guāndiǎn tíchūle tiǎozhàn, sìhū gèng qīngxiàng yú xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù. Kěshì duōshù rén háishi shēnxìn, xiào de shìfēi wúxū tàntǎo, rènhé xíngshì de yōumò, shānghài fēngxiǎn dōu bù gāo, qí shōuyì zé shì xiǎn\'éryìjiàn de, kuàngqiě, zhēn shì hǎo péngyou zài yìqǐ, gāoxìng le, qǐqi hòng, huò shì yùdàole kāixīn shì, nǎlǐ hái gù de shàng zhēnzhuó fēncun zhǎngwò de qiàdàng bu qiàdàng ne?',
     vn:'Thế nhưng, cười có thật là liều thuốc tốt nhất trên hành trình cuộc đời không? Câu trả lời dường như không chắc chắn đến vậy. Có nhà nghiên cứu cho biết, cười cũng không phải trăm lợi mà không một hại, có khi nó còn gây ra tác dụng phụ. Có bác sĩ từng gặp một ca như thế này: có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh; còn cười lớn đến mức "suýt vỡ bụng" có thể dẫn đến xóc hông, tim khó chịu, thậm chí gây tổn hại cho sức khoẻ. Kết quả nghiên cứu mới đã thách thức quan điểm cười "trăm lợi không một hại", dường như nghiêng về ý cho rằng cười không phải chuyện xấu, nhưng phải giữ chừng mực cho thật vừa phải. Thế nhưng phần đông mọi người vẫn tin chắc rằng chuyện cười đúng hay sai chẳng cần bàn, bất kỳ hình thức hài hước nào, nguy cơ gây hại đều không cao, còn lợi ích của nó thì rõ ràng dễ thấy; huống hồ, bạn thân tụ họp với nhau, vui lên thì làm ầm ĩ một chút, hoặc gặp chuyện vui, đâu còn tâm trí mà cân nhắc xem chừng mực có thích hợp hay không? (Nguồn: cải biên từ các bài cùng tên trên báo 《参考消息》.)'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 诸—各 lấy từ sách (tr. 97, 做一做: 判断正误); 虚伪—虚假, 试验—实验 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'诸 — 各',
   same:'Trong đại từ nhân xưng 诸位 / 各位 (các vị, quý vị) thì nghĩa và cách dùng giống nhau.',
   sameEx:{zh:'诸位／各位有何意见，请尽量发表。',vn:'Quý vị có ý kiến gì xin cứ phát biểu.'},
   items:[
     {word:'诸',points:[
       'Văn viết, nghĩa là "nhiều, các" (众、许多); danh từ / lượng từ đi sau thường CHỈ NGƯỜI.',
       'Chủ yếu nằm trong CẤU TRÚC CỐ ĐỊNH: 诸位, 诸君, 诸侯, 诸子百家 — không tự do ghép với danh từ bất kỳ (không nói *诸方, *诸国家).',
       'Không đứng trước động từ, không làm phó từ.'
     ],ex:[{zh:'他喜欢读古代诸子百家的著作。',vn:'Anh ấy thích đọc trước tác của bách gia chư tử thời cổ.'},
          {zh:'诸位，如果你不想难堪，你可以回避。',vn:'Thưa quý vị, nếu bạn không muốn khó xử, bạn có thể né tránh.'}]},
     {word:'各',points:[
       'Chỉ MỌI CÁ THỂ trong một phạm vi, không chỉ người mà cả sự vật: 各位, 各方, 各界, 各国.',
       'Chỉ nhiều người cùng làm một việc / nhiều vật cùng có một thuộc tính: 双方各执一词, 院子前后各有一门.',
       'Làm PHÓ TỪ trước động từ, nghĩa "mỗi người / mỗi cái đều": 几种水果他各买了一斤, 他们各想了一个办法.'
     ],ex:[{zh:'经过各方的共同努力，事情终于圆满解决了。',vn:'Nhờ nỗ lực chung của các bên, sự việc cuối cùng đã được giải quyết trọn vẹn.'},
          {zh:'三种办法各有优点和缺点，实在难以抉择。',vn:'Ba cách mỗi cách có ưu nhược điểm riêng, thật khó chọn.'}]}
   ],
   quiz:[
     {sentence:'＿＿国首脑都参加了此次会议。',options:['诸','各'],answer:1,
      why:'Mọi nước trong phạm vi (sự vật, không phải người) → 各国; 诸 không tự do ghép với 国.'},
     {sentence:'双方＿＿执一词，谁也说服不了谁。',options:['诸','各'],answer:1,
      why:'Nhiều người cùng làm một việc (mỗi bên giữ một ý) → 各; 诸 không có cách dùng này.'},
     {sentence:'这本书介绍了先秦＿＿子百家的主要思想。',options:['诸','各'],answer:0,
      why:'诸子百家 là cấu trúc cố định (văn viết) → 诸.'},
     {sentence:'几种水果他＿＿买了一斤。',options:['诸','各'],answer:1,
      why:'Đứng trước động từ, nghĩa "mỗi thứ đều" → phó từ 各; 诸 không đứng trước động từ.'},
     {sentence:'＿＿位来宾，欢迎光临！',options:['诸','各'],answer:0,both:true,
      why:'Trong đại từ nhân xưng 诸位 / 各位 hai từ giống nhau → dùng được cả hai.'}
   ],
   sgk:{
     chung:{t:'在人称代词“诸位、各位”中意思和用法相同。',vn:'Trong đại từ nhân xưng "诸位, 各位" thì nghĩa và cách dùng giống nhau.',vd:'诸位／各位有何意见，请尽量发表。',vdVn:'Quý vị có ý kiến gì xin cứ phát biểu.'},
     khac:[
       {a:{t:'书面语，表示“众、许多”的意思。后边的名词或量词一般都是指人的。一般为固定结构。',vn:'Văn viết, biểu thị nghĩa "nhiều, các". Danh từ hoặc lượng từ phía sau thường chỉ người. Thường là cấu trúc cố định.',vd:'诸位／诸君／诸侯／诸子百家',vdVn:'chư vị (quý vị) / chư quân (các ngài) / chư hầu / bách gia chư tử'},
        b:{t:'表示某一范围内的所有个体，不只指人，还可以指别的事物。',vn:'Biểu thị mọi cá thể trong một phạm vi nào đó, không chỉ người mà còn chỉ sự vật khác.',vd:'各位／各方／各界／各国',vdVn:'các vị / các bên / các giới / các nước'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải.',vd:''},
        b:{t:'表示不止一人做某事或不止一物有某种属性。',vn:'Biểu thị không chỉ một người làm việc gì, hoặc không chỉ một vật có thuộc tính nào đó.',vd:'① 双方各执一词。② 院子前后各有一门。',vdVn:'① Hai bên mỗi bên giữ một ý. ② Sân trước sân sau mỗi bên có một cửa.'}},
       {a:{t:'不能用在动词前面。',vn:'Không thể đứng trước động từ.',vd:''},
        b:{t:'可以做副词，放在动词前面，表示“分别”“每一个”。',vn:'Có thể làm phó từ, đặt trước động từ, biểu thị "riêng từng", "mỗi một".',vd:'① 几种水果他各买了一斤。② 他们各想了一个办法。',vdVn:'① Mấy loại hoa quả mỗi thứ anh ấy mua một cân. ② Mỗi người họ nghĩ ra một cách.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'亚洲各国首脑都参加了此次会议。',dap:[true,false],
        giai:'ĐÚNG. 各国 = mọi nước trong phạm vi châu Á; 各 chỉ được cả sự vật (nước), không chỉ người.'},
       {s:'经过诸方的共同努力，事情终于圆满解决了。',dap:[false,true],
        giai:'SAI. 诸 chủ yếu nằm trong cấu trúc cố định chỉ người (诸位, 诸君, 诸侯…), không có *诸方. Phải dùng 各方: 经过各方的共同努力…….'},
       {s:'三种办法各有优点和缺点，实在难以抉择。',dap:[true,false],
        giai:'ĐÚNG. 各 làm phó từ trước động từ 有 = "mỗi cách đều có" (không chỉ một vật có thuộc tính đó).'},
       {s:'他喜欢读古代诸子百家的著作。',dap:[true,false],
        giai:'ĐÚNG. 诸子百家 (bách gia chư tử) là cấu trúc cố định, văn viết → đúng cách dùng của 诸.'}
     ]
   }},

  {pair:'虚伪 — 虚假',
   same:'Đều là tính từ, đều có nghĩa "không thật", trái nghĩa với 真实 / 真诚; bài khoá dùng cả hai với tiếng cười: 虚伪的笑声 / 虚假的笑声.',
   sameEx:{zh:'她脸上露出了虚伪／虚假的笑容。',vn:'Trên mặt cô ta lộ ra nụ cười giả tạo.'},
   items:[
     {word:'虚伪',points:[
       'Nhấn PHẨM CHẤT, thái độ của con người: không thật lòng, bề ngoài một đằng bụng một nẻo.',
       'Hay đi với 人 / 态度 / 为人 / 客气 / 表情; mang nặng sắc thái chê trách đạo đức (đạo đức giả).',
       'Trái nghĩa: 真诚, 诚挚.'
     ],ex:[{zh:'他当面说好话，背后说坏话，真是个虚伪的人。',vn:'Trước mặt nói lời hay, sau lưng nói xấu, đúng là người giả dối.'}]},
     {word:'虚假',points:[
       'Nhấn NỘI DUNG không đúng sự thật, là giả (假的).',
       'Hay đi với 信息 / 广告 / 数据 / 报道 / 宣传 / 繁荣; không dùng để chê tính cách một người (ít nói *虚假的人).',
       'Trái nghĩa: 真实.'
     ],ex:[{zh:'这家公司因为发布虚假广告，被罚了一大笔钱。',vn:'Công ty này vì đăng quảng cáo sai sự thật mà bị phạt một khoản lớn.'}]}
   ],
   quiz:[
     {sentence:'他当面一套，背后一套，是个非常＿＿的人。',options:['虚伪','虚假'],answer:0,
      why:'Chê tính cách con người (hai mặt) → 虚伪.'},
     {sentence:'网上的＿＿信息太多了，转发之前要先核实。',options:['虚伪','虚假'],answer:1,
      why:'Thông tin không đúng sự thật → 虚假信息.'},
     {sentence:'这份报告里的数据是＿＿的，根本不能相信。',options:['虚伪','虚假'],answer:1,
      why:'Số liệu giả → 虚假; 虚伪 không dùng cho số liệu.'},
     {sentence:'我受不了他那种＿＿的客气，还不如直接说出想法。',options:['虚伪','虚假'],answer:0,
      why:'Sự khách sáo giả tạo, không thật lòng — thái độ con người → 虚伪.'}
   ]},

  {pair:'试验 — 实验',
   same:'Đều nghĩa là làm để kiểm nghiệm xem kết quả thế nào; đều làm được động từ và danh từ: 做试验 / 做实验.',
   sameEx:{zh:'为了找到最好的方法，他们做了很多次试验／实验。',vn:'Để tìm ra cách tốt nhất, họ đã làm rất nhiều lần thử nghiệm.'},
   items:[
     {word:'试验',points:[
       'Nhấn LÀM THỬ để xem hiệu quả, tính năng của cái MỚI trước khi áp dụng rộng: 试验新方法 / 新产品 / 新品种.',
       'Phạm vi rộng, cả trong đời sống, sản xuất: 试验田, 在两个班试验一下, 核试验.',
       'Bài khoá: 有人做过这样的试验，开怀大笑一整天……'
     ],ex:[{zh:'新的教学方法先在两个班试验一下，效果好再推广。',vn:'Phương pháp dạy mới cứ thử trước ở hai lớp, hiệu quả tốt rồi mới mở rộng.'}]},
     {word:'实验',points:[
       'Nhấn THÍ NGHIỆM KHOA HỌC có kiểm soát nhằm kiểm chứng một lý thuyết, giả thuyết.',
       'Thường gắn với phòng thí nghiệm, môn học: 实验室, 化学实验, 物理实验, 实验报告.',
       'Tính từ hoá: 实验中学 (trường thực nghiệm), 实验性的.'
     ],ex:[{zh:'下午我们要去实验室做化学实验。',vn:'Chiều nay chúng tôi phải vào phòng thí nghiệm làm thí nghiệm hoá học.'}]}
   ],
   quiz:[
     {sentence:'下午我们要去＿＿室做化学实验。',options:['试验','实验'],answer:1,
      why:'Phòng thí nghiệm là cụm cố định 实验室.'},
     {sentence:'这块地是农科院的＿＿田，专门种新品种。',options:['试验','实验'],answer:0,
      why:'Ruộng để TRỒNG THỬ giống mới → 试验田 (cụm cố định).'},
     {sentence:'新的教学方法先在两个班＿＿一下，效果好再推广。',options:['试验','实验'],answer:0,
      why:'Làm thử cái mới trong đời sống trước khi áp dụng rộng → 试验.'},
     {sentence:'做完物理＿＿以后，每个学生都要写一份报告。',options:['试验','实验'],answer:1,
      why:'Thí nghiệm của môn học (物理实验) → 实验.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'备忘录',hv:'bị vong lục',vn:'bản ghi nhớ',note:'"Bị vong" = phòng khi quên; tiếng Việt dùng "bản ghi nhớ" (合作备忘录 = bản ghi nhớ hợp tác).'},
    {zh:'诸位',hv:'chư vị',vn:'các vị, quý vị',note:'Trùng khít; tiếng Việt cổ cũng nói "chư vị".'},
    {zh:'庸俗',hv:'dung tục',vn:'dung tục, tầm thường',note:'Trùng khít: 庸俗的笑话 = chuyện cười dung tục.'},
    {zh:'虚伪',hv:'hư nguỵ',vn:'giả dối',note:'"Nguỵ" = giả (nguỵ tạo); dịch "giả dối, đạo đức giả".'},
    {zh:'虚假',hv:'hư giả',vn:'giả, không thật',note:'"Hư giả" = không có thật; dịch "sai sự thật": 虚假广告.'},
    {zh:'周密',hv:'chu mật',vn:'chu đáo, kín kẽ',note:'"Chu" = trọn khắp (chu đáo), "mật" = kín.'},
    {zh:'特定',hv:'đặc định',vn:'nhất định, riêng biệt',note:'Trùng khít: 特定区域 = vùng đặc định.'},
    {zh:'直觉',hv:'trực giác',vn:'trực giác',note:'Trùng khít.'},
    {zh:'通用',hv:'thông dụng',vn:'thông dụng, dùng chung',note:'Trùng khít: 国际通用 = thông dụng quốc tế.'},
    {zh:'调节',hv:'điều tiết',vn:'điều tiết, điều hoà',note:'Trùng khít: 调节情绪 = điều tiết cảm xúc.'},
    {zh:'循环',hv:'tuần hoàn',vn:'tuần hoàn',note:'Trùng khít: 血液循环 = tuần hoàn máu.'},
    {zh:'氧气',hv:'dưỡng khí',vn:'khí oxy',note:'Tiếng Việt có "dưỡng khí" (ít dùng), thường nói "oxy".'},
    {zh:'动脉',hv:'động mạch',vn:'động mạch',note:'Trùng khít: 动脉硬化 = xơ cứng động mạch.'},
    {zh:'实质',hv:'thực chất',vn:'thực chất',note:'Trùng khít: 问题的实质 = thực chất của vấn đề.'},
    {zh:'倾向',hv:'khuynh hướng',vn:'khuynh hướng; nghiêng về',note:'Danh từ trùng khít; khi là động từ (倾向于) dịch "nghiêng về".'},
    {zh:'是非',hv:'thị phi',vn:'phải trái; thị phi',note:'Trùng khít cả hai nghĩa: 分清是非 (phân rõ phải trái), 搬弄是非 (đơm đặt thị phi).'},
    {zh:'试验',hv:'thí nghiệm',vn:'thử nghiệm',note:'Hán–Việt của cả 试验 và 实验 đều là "thí nghiệm"; 试验 thiên về "làm thử".'},
    {zh:'回避',hv:'hồi tị',vn:'né tránh',note:'Tiếng Việt pháp lý có "hồi tị" (tránh xét xử người thân) — nghĩa gốc giống: né tránh.'}
  ],
  idiom:[
    {zh:'岂有此理',hv:'khởi hữu thử lý',vn:'há có lý nào như thế',note:'"Khởi" = há, lẽ nào; "thử lý" = lý này → vô lý hết sức.'},
    {zh:'画蛇添足',hv:'hoạ xà thiêm túc',vn:'vẽ rắn thêm chân',note:'Tiếng Việt có đúng thành ngữ "vẽ rắn thêm chân".'},
    {zh:'一丝不苟',hv:'nhất ti bất cẩu',vn:'tỉ mỉ, không cẩu thả chút nào',note:'"Bất cẩu" = không cẩu thả (cẩu thả = 苟且).'},
    {zh:'一目了然',hv:'nhất mục liễu nhiên',vn:'nhìn qua là rõ',note:'"Liễu nhiên" = rõ ràng; 了 đọc liǎo.'},
    {zh:'肆无忌惮',hv:'tứ vô kị đạn',vn:'không kiêng nể gì',note:'"Tứ" = phóng túng (tứ tung), "kị đạn" = kiêng sợ.'},
    {zh:'恰到好处',hv:'kháp đáo hảo xứ',vn:'vừa đúng mức',note:'"Kháp" = vừa khít; "hảo xứ" = chỗ tốt nhất.'},
    {zh:'装聋装哑',hv:'trang lung trang á',vn:'giả câm giả điếc',note:'"Lung" = điếc, "á" = câm (á khẩu).'}
  ],
  trap:[
    {zh:'斟酌',hv:'châm chước',vn:'cân nhắc, đắn đo',
     warn:'BẪY LỚN: "châm chước" tiếng Việt = nương tay, bỏ qua lỗi. 斟酌 = CÂN NHẮC KỸ trước khi quyết: 斟酌斟酌 = cân nhắc thêm, không phải "châm chước cho".'},
    {zh:'难堪',hv:'nan kham',vn:'khó xử, bẽ mặt',
     warn:'"Nan kham" gợi "khó chịu đựng nổi" (nghĩa gốc). Trong bài 难堪 = LÚNG TÚNG, BẼ MẶT trước người khác: 让人难堪.'},
    {zh:'相声',hv:'tướng thanh',vn:'tấu hài',
     warn:'Không dịch "tướng thanh". 相声 là loại hình TẤU HÀI nói – đối đáp của Trung Quốc; chữ 声 đọc nhẹ.'},
    {zh:'分寸',hv:'phân thốn',vn:'chừng mực',
     warn:'Không phải đơn vị đo "phân, tấc". 分寸 = CHỪNG MỰC trong lời nói, hành động: 说话有分寸.'},
    {zh:'恰当',hv:'kháp đáng',vn:'thích hợp, thoả đáng',
     warn:'Không có "kháp đáng" trong tiếng Việt; dịch "thoả đáng, thích hợp". Phân biệt 适当 (vừa phải) và 妥当 (ổn thoả).'},
    {zh:'机灵',hv:'cơ linh',vn:'lanh lợi',
     warn:'"Cơ linh" không dùng trong tiếng Việt. 机灵 = LANH LỢI, nhanh trí (khen trẻ em), 灵 đọc nhẹ.'},
    {zh:'途径',hv:'đồ kính',vn:'con đường, cách thức',
     warn:'Không dịch "đồ kính". 途径 = CÁCH, KÊNH để đạt mục đích: 通过合法途径.'},
    {zh:'档次',hv:'đáng thứ',vn:'đẳng cấp, mức',
     warn:'Dễ nhầm với "đẳng thứ". 档次 = mức chất lượng; khẩu ngữ 上档次 = sang, 不上档次 = xoàng.'},
    {zh:'收益',hv:'thu ích',vn:'lợi ích, lợi nhuận',
     warn:'"Thu ích" không có trong tiếng Việt; dịch "lợi nhuận / lợi ích". Khác 收入 (thu nhập).'},
    {zh:'意向',hv:'ý hướng',vn:'ý định',
     warn:'"Ý hướng" ít dùng; dịch "ý định": 购买意向 = ý định mua hàng. Khác 意图 (ý đồ, mục đích).'},
    {zh:'起哄',hv:'khởi hống',vn:'hùa nhau làm ầm lên',
     warn:'哄 đọc hòng (không phải hǒng = dỗ dành). 起哄 = nhiều người cùng reo hò trêu chọc.'},
    {zh:'提炼',hv:'đề luyện',vn:'tinh chế; rút ra',
     warn:'"Đề luyện" không dùng; dịch "tinh chế" (vật chất) hoặc "đúc kết, rút ra" (thông tin, chủ đề).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'真是',right:'岂有此理'},
  {left:'不上',right:'档次'},
  {left:'违背',right:'心意'},
  {left:'把话题',right:'岔开'},
  {left:'不要画蛇',right:'添足'},
  {left:'掩饰得多么',right:'周密'},
  {left:'通过什么途径',right:'识别'},
  {left:'分析假笑的',right:'缘故'},
  {left:'一丝不苟的',right:'研究者'},
  {left:'倾听网站',right:'视频中的笑声'},
  {left:'测试结果',right:'一目了然'},
  {left:'仅凭',right:'直觉'},
  {left:'探测他人喜悦之情',right:'真伪'},
  {left:'提炼出',right:'信息'},
  {left:'当作生活的',right:'座右铭'},
  {left:'调节',right:'情绪'},
  {left:'促进血液',right:'循环'},
  {left:'用桨',right:'划船'},
  {left:'消耗',right:'脂肪'},
  {left:'缓解动脉',right:'硬化'},
  {left:'实质性的',right:'证据'},
  {left:'肆无忌惮地',right:'笑'},
  {left:'损坏',right:'人体健康'},
  {left:'分寸要掌握得',right:'恰到好处'},
  {left:'笑的是非无须',right:'探讨'},
  {left:'其收益是',right:'显而易见的'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu (fill + chọn từ)
// ══════════════════════════════════════════
var fillData = [
  {pre:'我怕忘了交作业的期限，就把它记在了手机',blank:'备忘录',post:'里。',hint:'(ghi chú, sổ ghi nhớ)',ans:'备忘录'},
  {pre:'他抄了我的作业，分数居然比我还高，真是',blank:'岂有此理',post:'！',hint:'(vô lý hết sức)',ans:'岂有此理'},
  {pre:'这部电影内容',blank:'庸俗',post:'，只靠几个明星吸引观众。',hint:'(tầm thường, dung tục)',ans:'庸俗'},
  {pre:'这家饭店的',blank:'档次',post:'很高，一顿饭至少要花五百块。',hint:'(đẳng cấp)',ans:'档次'},
  {pre:'',blank:'诸位',post:'来宾，欢迎大家参加我校一百周年校庆。',hint:'(quý vị)',ans:'诸位'},
  {pre:'他当着全班同学的面批评我，让我感到十分',blank:'难堪',post:'。',hint:'(bẽ mặt, khó xử)',ans:'难堪'},
  {pre:'妈妈一问起成绩，他就赶紧把话',blank:'岔',post:'开，说起了别的事。',hint:'(lái sang hướng khác)',ans:'岔'},
  {pre:'大家都知道是谁弄坏的，他却一直',blank:'装聋装哑',post:'。',hint:'(giả câm giả điếc)',ans:'装聋装哑'},
  {pre:'她大学毕业后到一所',blank:'聋哑',post:'学校当了老师，教孩子们手语。',hint:'(câm điếc)',ans:'聋哑'},
  {pre:'作文结尾本来很好，你再加一段议论，反而',blank:'画蛇添足',post:'了。',hint:'(vẽ rắn thêm chân)',ans:'画蛇添足'},
  {pre:'这孩子特别',blank:'机灵',post:'，老师的话一听就懂。',hint:'(lanh lợi)',ans:'机灵'},
  {pre:'网上有很多',blank:'虚假',post:'信息，转发之前一定要先核实一下。',hint:'(sai sự thật)',ans:'虚假'},
  {pre:'他今天没来上课，可能是感冒的',blank:'缘故',post:'。',hint:'(nguyên do)',ans:'缘故'},
  {pre:'王老师批改作业',blank:'一丝不苟',post:'，连一个标点也不放过。',hint:'(tỉ mỉ, không qua loa)',ans:'一丝不苟'},
  {pre:'周末我常常跟在国外留学的姐姐',blank:'视频',post:'聊天。',hint:'(video)',ans:'视频'},
  {pre:'这张图表把全班的成绩变化画得',blank:'一目了然',post:'。',hint:'(nhìn qua là rõ)',ans:'一目了然'},
  {pre:'那里一年四季都是旅游旺季，一定要',blank:'预先',post:'订好旅馆。',hint:'(trước, sẵn)',ans:'预先'},
  {pre:'做选择题时，如果实在不会，就相信自己的',blank:'直觉',post:'吧。',hint:'(trực giác)',ans:'直觉'},
  {pre:'科学家用先进的仪器',blank:'探测',post:'海底的情况。',hint:'(thăm dò)',ans:'探测'},
  {pre:'',blank:'智商',post:'高的人不一定成功，情商也同样重要。',hint:'(chỉ số IQ)',ans:'智商'},
  {pre:'写缩写的时候，要先从课文中',blank:'提炼',post:'出主要内容。',hint:'(rút ra, đúc kết)',ans:'提炼'},
  {pre:'春节联欢晚会上，这段',blank:'相声',post:'把观众逗得哈哈大笑。',hint:'(tấu hài)',ans:'相声'},
  {pre:'我爷爷一直把“勤俭节约”当作生活的',blank:'座右铭',post:'。',hint:'(châm ngôn sống)',ans:'座右铭'},
  {pre:'英语是很多国际会议的',blank:'通用',post:'语言。',hint:'(dùng chung, thông dụng)',ans:'通用'},
  {pre:'长时间坐着不运动，会影响血液',blank:'循环',post:'。',hint:'(tuần hoàn)',ans:'循环'},
  {pre:'天冷的时候血管会',blank:'收缩',post:'，所以老人要特别注意保暖。',hint:'(co lại)',ans:'收缩'},
  {pre:'高山上空气稀薄，',blank:'氧气',post:'不足，很多人会感到头疼。',hint:'(oxy)',ans:'氧气'},
  {pre:'我们俩一人拿一支',blank:'桨',post:'，慢慢地把小船划到了湖中间。',hint:'(mái chèo)',ans:'桨'},
  {pre:'每天跑步三十分钟，可以帮助燃烧',blank:'脂肪',post:'。',hint:'(mỡ)',ans:'脂肪'},
  {pre:'长期吃太多油腻的东西，可能会导致',blank:'动脉',post:'硬化。',hint:'(động mạch)',ans:'动脉'},
  {pre:'这件事表面上是帮你，',blank:'实质',post:'上是在利用你。',hint:'(thực chất)',ans:'实质'},
  {pre:'有些游客在景区',blank:'肆无忌惮',post:'地乱扔垃圾，真让人气愤。',hint:'(không kiêng nể gì)',ans:'肆无忌惮'},
  {pre:'这道菜的咸淡',blank:'恰到好处',post:'，大家都说好吃。',hint:'(vừa đúng mức)',ans:'恰到好处'},
  {pre:'孩子要从小学会分清',blank:'是非',post:'，知道什么该做，什么不该做。',hint:'(phải trái)',ans:'是非'},
  {pre:'他刚说要请客，同学们就开始',blank:'起哄',post:'，让他请大家吃火锅。',hint:'(hùa nhau reo hò)',ans:'起哄'},
  {pre:'明天的会议很重要，发言稿你好好',blank:'斟酌',post:'斟酌。',hint:'(cân nhắc)',ans:'斟酌'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (预先 · ……也好，……也罢 · 设问) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这事','她','预先','通知过我','，','我','忘了','告诉你了','。'],ans:'这事她预先通知过我，我忘了告诉你了。',audio:'这事她预先通知过我，我忘了告诉你了。'},
  {words:['大家','预先','都没有想到','，','这次展览','竟然','这么受欢迎','。'],ans:'大家预先都没有想到，这次展览竟然这么受欢迎。',audio:'大家预先都没有想到，这次展览竟然这么受欢迎。'},
  {words:['我','已经','预先','做好了计划','，','所以','实施起来很顺利','。'],ans:'我已经预先做好了计划，所以实施起来很顺利。',audio:'我已经预先做好了计划，所以实施起来很顺利。'},
  {words:['上学也好','，','工作也罢','，','只要','你自己愿意','就行','。'],ans:'上学也好，工作也罢，只要你自己愿意就行。',audio:'上学也好，工作也罢，只要你自己愿意就行。'},
  {words:['富贵也好','贫穷也罢','，','我对他的爱','不会改变','。'],ans:'富贵也好贫穷也罢，我对他的爱不会改变。',audio:'富贵也好贫穷也罢，我对他的爱不会改变。'},
  {words:['开汽车也罢','，','骑自行车也罢','，','行进中打电话','都会影响','注意力','。'],ans:'开汽车也罢，骑自行车也罢，行进中打电话都会影响注意力。',audio:'开汽车也罢，骑自行车也罢，行进中打电话都会影响注意力。'},
  {words:['有钱','一定幸福吗','？','不一定','，','有朋友','、','有健康','才会幸福','。'],ans:'有钱一定幸福吗？不一定，有朋友、有健康才会幸福。',audio:'有钱一定幸福吗？不一定，有朋友、有健康才会幸福。'},
  {words:['笑','，','真的是','最佳良药吗','？','答案','似乎','不是那么肯定','。'],ans:'笑，真的是最佳良药吗？答案似乎不是那么肯定。',audio:'笑，真的是最佳良药吗？答案似乎不是那么肯定。'},
  {words:['奋斗的人生','是最美好的吗','？','是的','，','因为','奋斗之中','快乐无穷','。'],ans:'奋斗的人生是最美好的吗？是的，因为奋斗之中快乐无穷。',audio:'奋斗的人生是最美好的吗？是的，因为奋斗之中快乐无穷。'},
  {words:['测试结果','一目了然','，','志愿者','仅凭直觉','就能','分辨出假笑声','。'],ans:'测试结果一目了然，志愿者仅凭直觉就能分辨出假笑声。',audio:'测试结果一目了然，志愿者仅凭直觉就能分辨出假笑声。'},
  {words:['笑','可以','调节情绪','，','促进','血液循环','。'],ans:'笑可以调节情绪，促进血液循环。',audio:'笑可以调节情绪，促进血液循环。'},
  {words:['笑','不是坏事','，','但','分寸','要掌握得','恰到好处','。'],ans:'笑不是坏事，但分寸要掌握得恰到好处。',audio:'笑不是坏事，但分寸要掌握得恰到好处。'},
  {words:['发言稿','你','好好','斟酌斟酌','，','别','说错话','。'],ans:'发言稿你好好斟酌斟酌，别说错话。',audio:'发言稿你好好斟酌斟酌，别说错话。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他当面说好话，背后说坏话，真是个____的人。',opts:['虚伪','虚心','虚假','谦虚'],ans:0,
   exp:'Chê tính cách hai mặt → 虚伪 (giả dối). 虚假 dùng cho thông tin, số liệu; 虚心, 谦虚 = khiêm tốn (khen).'},
  {wrong:'他答应过要来，却____了自己的诺言。',opts:['违反','违背','违法','背叛'],ans:1,
   exp:'违背诺言 = làm trái lời hứa (cụm cố định). 违反 đi với 规定 / 纪律; 违法 không mang tân ngữ; 背叛 = phản bội (người, tổ chức).'},
  {wrong:'面对记者的提问，他一直在____关键问题。',opts:['躲藏','逃跑','回避','避免'],ans:2,
   exp:'回避问题 = né tránh vấn đề. 躲藏 = trốn (người, vật); 逃跑 = chạy trốn; 避免 + việc xấu có thể xảy ra (避免犯错).'},
  {wrong:'这次旅行他考虑得非常____，连下雨天的活动都安排好了。',opts:['密切','亲密','秘密','周密'],ans:3,
   exp:'考虑周密 = suy tính chu đáo. 密切 = mật thiết (quan hệ); 亲密 = thân mật; 秘密 = bí mật.'},
  {wrong:'遇到纠纷，我们应该通过合法____解决，而不是动手打架。',opts:['途径','道路','路线','路途'],ans:0,
   exp:'通过……途径 = qua con đường / cách (nghĩa bóng). 道路, 路线, 路途 thường là con đường cụ thể (路途 = quãng đường đi).'},
  {wrong:'这种药只适用于____的人群，一般人不要随便吃。',opts:['特别','特定','特殊','特意'],ans:1,
   exp:'特定的人群 = nhóm người nhất định (được chỉ định). 特别, 特殊 = đặc biệt (khác thường); 特意 = cố ý (phó từ, HSK 6 bài 24).'},
  {wrong:'两家公司都表达了合作的____，下个月将签订协议。',opts:['意义','意见','意向','意思'],ans:2,
   exp:'合作意向 = ý định hợp tác. 意义 = ý nghĩa; 意见 = ý kiến; 意思 = nghĩa / ý.'},
  {wrong:'在毕业之际，我们向各位老师表示____的谢意。',opts:['真实','诚实','老实','诚挚'],ans:3,
   exp:'诚挚的谢意 = lòng biết ơn chân thành (văn viết, trang trọng). 真实 = có thật; 诚实, 老实 = thật thà (tính cách).'},
  {wrong:'朋友难过的时候，你不用多说什么，耐心地____就够了。',opts:['倾听','听说','打听','听见'],ans:0,
   exp:'耐心地倾听 = kiên nhẫn lắng nghe. 听说 = nghe nói; 打听 = dò hỏi; 听见 = nghe thấy (kết quả, không đi với 耐心地).'},
  {wrong:'考试前压力太大时，要学会自我____。',opts:['调查','调节','调动','调换'],ans:1,
   exp:'自我调节 = tự điều chỉnh (tâm lý). 调查 = điều tra; 调动 = điều động (HSK 6 bài 25); 调换 = đổi.'},
  {wrong:'新的教学方法先在两个班____一下，效果好再推广。',opts:['考验','经验','检验','试验'],ans:3,
   exp:'Làm thử cái mới trước khi áp dụng rộng → 试验. 考验 = thử thách (con người); 经验 = kinh nghiệm; 检验 = kiểm nghiệm chất lượng.'},
  {wrong:'谁____了公物，谁就要负责赔偿。',opts:['损坏','损失','伤害','毁灭'],ans:0,
   exp:'损坏公物 = làm hỏng của công. 损失 = tổn thất (danh từ / động từ, đi với 钱 / 时间); 伤害 = làm tổn thương (người, tình cảm); 毁灭 = huỷ diệt.'},
  {wrong:'这两个方案我更____于第二个，因为它更实惠。',opts:['方向','倾向','导向','面向'],ans:1,
   exp:'倾向于 + lựa chọn = nghiêng về (có 于 đi kèm). 方向 = phương hướng (danh từ); 导向 = định hướng (danh từ); 面向 = hướng tới (面向学生).'},
  {wrong:'跟长辈开玩笑要注意____，别太过分了。',opts:['分量','分寸','分数','分别'],ans:1,
   exp:'注意分寸 = chú ý chừng mực. 分量 = trọng lượng, sức nặng; 分数 = điểm số; 分别 = chia tay / lần lượt.'},
  {wrong:'这个问题很值得____，我们下次课再深入研究。',opts:['探望','探险','探讨','探听'],ans:2,
   exp:'值得探讨 = đáng bàn luận. 探望 = thăm (người); 探险 = thám hiểm; 探听 = dò la (HSK 6 bài 25).'},
  {wrong:'只要找准恰当的时机投放市场，就能获得可观的____。',opts:['收藏','收益','收据','收集'],ans:1,
   exp:'获得可观的收益 = thu được lợi nhuận đáng kể (练习3 của sách). 收藏 = sưu tầm; 收据 = biên lai; 收集 = thu thập.'},
  {wrong:'我觉得这个词用在这里不太____，你换一个吧。',opts:['恰当','当然','适合','应当'],ans:0,
   exp:'用词恰当 = dùng từ thoả đáng; 不太恰当 = không thoả đáng lắm. 适合 là động từ cần tân ngữ (适合这里); 当然 = đương nhiên; 应当 = nên.'},
  {wrong:'只有把计划做得很____，活动才能顺利进行。',opts:['周末','周围','周密','周期'],ans:2,
   exp:'计划周密 = kế hoạch chu đáo, kín kẽ. 周末 = cuối tuần, 周围 = xung quanh, 周期 = chu kỳ — đều là danh từ, không làm bổ ngữ sau 得.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 29 + ôn từ HSK 6 bài 1–28 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Lớp trưởng đã đặt sẵn xe từ trước, nên chuyến dã ngoại lần này được sắp xếp rất chu đáo.',zh:'班长预先订好了车，所以这次春游安排得十分周密。',py:'Bānzhǎng yùxiān dìnghǎole chē, suǒyǐ zhè cì chūnyóu ānpái de shífēn zhōumì.',goiY:['预先','所以','周密'],giai:'预先 + V + 好 = làm sẵn từ trước (điểm ngữ pháp 1); V + 得 + 十分周密 là bổ ngữ trạng thái. Không dịch "đặt sẵn" thành 已经订 mà thiếu ý "trước khi việc xảy ra".'},
  {vi:'Thi tốt cũng được, không tốt cũng xong, đừng nở nụ cười giả tạo trước mặt bạn bè, làm vậy chỉ khiến cậu càng khó xử hơn.',zh:'考得好也好，不好也罢，别在朋友面前露出虚伪的笑容，那样只会让你更难堪。',py:'Kǎo de hǎo yě hǎo, bù hǎo yě bà, bié zài péngyou miànqián lùchū xūwěi de xiàoróng, nàyàng zhǐ huì ràng nǐ gèng nánkān.',goiY:['……也好，……也罢','虚伪','难堪'],giai:'A也好，B也罢 = dù A hay B (điểm ngữ pháp 2); 那样 thay cho cả việc cười giả (替代 — HSK 6 bài 25). 露 ở đây đọc lù.'},
  {vi:'Thầy chấm bài rất tỉ mỉ, cho nên mỗi người sai ở đâu đều được đánh dấu rõ ràng, nhìn là thấy ngay.',zh:'老师批改作业一丝不苟，所以每个人错在哪里都标得一目了然。',py:'Lǎoshī pīgǎi zuòyè yìsī-bùgǒu, suǒyǐ měi ge rén cuò zài nǎlǐ dōu biāo de yímù-liǎorán.',goiY:['一丝不苟','所以','一目了然'],giai:'Hai thành ngữ bốn chữ: 一丝不苟 làm vị ngữ, 一目了然 làm bổ ngữ sau 得. "Nhìn là thấy ngay" không cần dịch thêm 一看就, vì 一目了然 đã bao hàm.'},
  {vi:'Muốn viết tóm tắt tốt, trước hết phải rút ra nội dung chính của bài khoá, sau đó cân nhắc kỹ từng câu chữ.',zh:'要想写好缩写，首先要提炼出课文的主要内容，然后再仔细斟酌字句。',py:'Yào xiǎng xiěhǎo suōxiě, shǒuxiān yào tíliàn chū kèwén de zhǔyào nèiróng, ránhòu zài zǐxì zhēnzhuó zìjù.',goiY:['要想……首先……','提炼','斟酌'],giai:'要想……，首先……，然后再…… nêu trình tự; 斟酌 = cân nhắc kỹ — đừng nhầm với "châm chước" tiếng Việt (nương tay).'},
  {vi:'Cậu ấy tuy rất lanh lợi, nhưng ăn nói không có chừng mực, thường khiến bạn bè bẽ mặt trước mọi người.',zh:'他虽然很机灵，但说话没有分寸，常常让朋友在大家面前很难堪。',py:'Tā suīrán hěn jīling, dàn shuōhuà méiyǒu fēncun, chángcháng ràng péngyou zài dàjiā miànqián hěn nánkān.',goiY:['虽然……但……','机灵','分寸','难堪'],giai:'虽然……但…… nhượng bộ; 说话没有分寸 = ăn nói không có chừng mực; 让 + người + 很难堪 = khiến ai bẽ mặt.'},
  {vi:'Khi xích mích với bạn, né tránh chẳng giải quyết được vấn đề; thay vì giả câm giả điếc, chi bằng lắng nghe kỹ suy nghĩ của đối phương.',zh:'跟朋友闹矛盾时，回避是解决不了问题的，与其装聋装哑，不如好好倾听对方的想法。',py:'Gēn péngyou nào máodùn shí, huíbì shì jiějué bu liǎo wèntí de, yǔqí zhuānglóng-zhuāngyǎ, bùrú hǎohǎo qīngtīng duìfāng de xiǎngfǎ.',goiY:['回避','与其……不如……','装聋装哑','倾听'],giai:'是……的 nhấn mạnh đánh giá (回避是解决不了问题的); 与其 A 不如 B = thay vì A chi bằng B (chọn B).'},
  {vi:'Câu đố này đúng là vô lý hết sức! Nếu không được báo trước quy tắc, thì dù IQ cao đến đâu cũng không đoán ra được.',zh:'这道谜语真是岂有此理！如果预先不告诉规则，不管智商多高，也猜不出来。',py:'Zhè dào míyǔ zhēn shì qǐyǒucǐlǐ! Rúguǒ yùxiān bú gàosu guīzé, bùguǎn zhìshāng duō gāo, yě cāi bu chūlai.',goiY:['岂有此理','预先','不管……也……','智商'],giai:'预先 + phủ định (预先不告诉); 不管 + 多 + Adj，也…… = dù … đến đâu cũng …; 猜不出来 là bổ ngữ khả năng.'},
  {vi:'Kết quả khảo sát cho thấy phần lớn học sinh nghiêng về việc học trực tuyến qua video, vì cách này vừa thông dụng vừa tiện lợi.',zh:'调查结果显示，大部分学生倾向于通过视频在线学习，因为这种方式既通用又方便。',py:'Diàochá jiéguǒ xiǎnshì, dà bùfen xuésheng qīngxiàng yú tōngguò shìpín zàixiàn xuéxí, yīnwèi zhè zhǒng fāngshì jì tōngyòng yòu fāngbiàn.',goiY:['倾向于','视频','既……又……','通用'],giai:'倾向于 + cụm động từ = nghiêng về (lựa chọn); 既……又…… nối hai tính từ song song; vế 因为 đặt sau để giải thích.'},
  {vi:'Cười ha hả cũng được, cười thầm cũng được, tiếng cười chân thành đều có thể điều hoà cảm xúc; thế nhưng cười thả cửa quá đà thì lại có thể gây hại cho sức khoẻ.',zh:'哈哈大笑也好，偷偷地笑也罢，诚挚的笑声都能调节情绪；然而肆无忌惮地大笑，却可能损坏健康。',py:'Hāhā dà xiào yě hǎo, tōutōu de xiào yě bà, chéngzhì de xiàoshēng dōu néng tiáojié qíngxù; rán\'ér sìwú-jìdàn de dà xiào, què kěnéng sǔnhuài jiànkāng.',goiY:['……也好，……也罢','调节','肆无忌惮','损坏'],giai:'……也好，……也罢 + 都 (vế sau thường có 都); 然而……却…… chuyển ý mạnh. 肆无忌惮 + 地 + V làm trạng ngữ.'},
  {vi:'Học giỏi có thật chỉ dựa vào chỉ số thông minh không? Không phải vậy: tìm được cách học thích hợp và kiên trì tỉ mỉ mới là thực chất của việc học tốt.',zh:'学习好真的只靠智商吗？并不是，找到恰当的方法并且一丝不苟地坚持，才是学好的实质。',py:'Xuéxí hǎo zhēn de zhǐ kào zhìshāng ma? Bìng bú shì, zhǎodào qiàdàng de fāngfǎ bìngqiě yìsī-bùgǒu de jiānchí, cái shì xuéhǎo de shízhì.',goiY:['……吗？并不是，……','恰当','一丝不苟','实质'],giai:'Câu 设问 (tự hỏi tự đáp — 篇章修辞 của bài): nêu câu hỏi để gây chú ý rồi tự trả lời ngay. 才是 nhấn mạnh "mới chính là".'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Thưa quý vị, nếu không muốn khó xử thì có thể né tránh hoặc lái sang chuyện khác, nhưng đừng cười trái với lòng mình.',zh:'诸位如果不想难堪，可以回避或者把话题岔开，但不要违心地笑。',py:'Zhūwèi rúguǒ bù xiǎng nánkān, kěyǐ huíbì huòzhě bǎ huàtí chàkāi, dàn búyào wéixīn de xiào.',goiY:['诸位 = quý vị','难堪 = khó xử','岔开 = lái sang (chuyện khác)'],giai:'如果……，可以……，但不要…… nêu giả thiết rồi đưa lựa chọn; 违心地 = trái với lòng mình. 诸位 dịch "thưa quý vị" khi đứng đầu câu.'},
  {vi:'Dù bạn lanh lợi đến đâu, che giấu kín kẽ thế nào, người khác đều nhìn ra nụ cười của bạn là thật hay giả.',zh:'不管你多机灵，掩饰得多么周密，别人都能看出你的笑是真是假。',py:'Bùguǎn nǐ duō jīling, yǎnshì de duōme zhōumì, biérén dōu néng kànchū nǐ de xiào shì zhēn shì jiǎ.',goiY:['不管……都…… = dù … đều …','机灵 = lanh lợi','周密 = kín kẽ'],giai:'不管 + 多 + Adj ở hai vế liền nhau, vế sau có 都; 是真是假 = là thật hay giả (dạng A là A hay B rút gọn).'},
  {vi:'Tiếng cười giả sẽ kích hoạt vùng riêng biệt của não, não còn phân tích nguyên do của việc cười giả và ý đồ của người cười giả.',zh:'假笑声会激活大脑的特定区域，大脑还会分析假笑的缘故和假笑者的意向。',py:'Jiǎ xiàoshēng huì jīhuó dànǎo de tèdìng qūyù, dànǎo hái huì fēnxī jiǎ xiào de yuángù hé jiǎxiàozhě de yìxiàng.',goiY:['特定 = riêng biệt','缘故 = nguyên do','意向 = ý đồ, ý định'],giai:'还会 = còn (bổ sung hành động thứ hai); 假笑者 = người cười giả (者 = người …).'},
  {vi:'Tuy không được báo trước mục đích thử nghiệm, nhưng chỉ dựa vào trực giác, các tình nguyện viên đã có thể phân biệt chính xác tiếng cười giả.',zh:'志愿者虽然预先未被告知测试目的，但仅凭直觉就能准确地分辨出假笑声。',py:'Zhìyuànzhě suīrán yùxiān wèi bèi gàozhī cèshì mùdì, dàn jǐn píng zhíjué jiù néng zhǔnquè de fēnbiàn chū jiǎ xiàoshēng.',goiY:['虽然……但…… = tuy … nhưng …','预先未被告知 = không được báo trước','凭直觉 = dựa vào trực giác'],giai:'预先 + 未被 + V: câu bị động phủ định văn viết (未 = 没). 仅凭……就…… = chỉ dựa vào … là đã ….'},
  {vi:'Các nhà nghiên cứu cho tình nguyện viên nghe tiếng cười trong video, rồi so sánh phản ứng của não khi nghe cười thật và cười giả; kết quả nhìn qua là rõ.',zh:'研究者让志愿者倾听视频中的笑声，并把真笑和假笑时大脑的反应做对比，结果一目了然。',py:'Yánjiūzhě ràng zhìyuànzhě qīngtīng shìpín zhōng de xiàoshēng, bìng bǎ zhēn xiào hé jiǎ xiào shí dànǎo de fǎnyìng zuò duìbǐ, jiéguǒ yímù-liǎorán.',goiY:['倾听 = lắng nghe','并 = và, rồi','一目了然 = nhìn qua là rõ'],giai:'并 nối hai hành động của cùng chủ ngữ (văn viết); 把……做对比 = đem … so sánh.'},
  {vi:'Não rất nhạy cảm với thông tin trong tiếng cười, điều này không hoàn toàn do chỉ số thông minh; tình nguyện viên còn có thể từ đó rút ra thông tin ẩn phía sau.',zh:'大脑对笑声中的信息非常敏感，这不完全是智商问题，志愿者还能从中提炼出背后的信息。',py:'Dànǎo duì xiàoshēng zhōng de xìnxī fēicháng mǐngǎn, zhè bù wánquán shì zhìshāng wèntí, zhìyuànzhě hái néng cóng zhōng tíliàn chū bèihòu de xìnxī.',goiY:['这 = điều này (thay cho cả vế trước)','智商 = chỉ số IQ','提炼 = rút ra'],giai:'对……敏感 = nhạy cảm với …; 不完全是 = phủ định một phần ("không hoàn toàn là"); 从中 = từ trong đó.'},
  {vi:'Dù cười sảng khoái hay cười ha hả ngây ngô, người Trung Quốc đều coi tiếng cười là phương thuốc chữa bệnh thông dụng nhất, thậm chí coi là châm ngôn sống.',zh:'开怀大笑也好，哈哈傻笑也罢，中国人都把笑当作最通用的治病良方，甚至当作座右铭。',py:'Kāihuái dà xiào yě hǎo, hāhā shǎxiào yě bà, Zhōngguórén dōu bǎ xiào dàngzuò zuì tōngyòng de zhì bìng liángfāng, shènzhì dàngzuò zuòyòumíng.',goiY:['……也好，……也罢 = dù … hay …','通用 = thông dụng','座右铭 = châm ngôn'],giai:'A也好，B也罢，都…… = trường hợp nào cũng vậy; 把 A 当作 B = coi A là B; 甚至 tăng tiến.'},
  {vi:'Cười không chỉ điều hoà cảm xúc, thúc đẩy tuần hoàn máu, mà còn giúp tiêu hao mỡ, giảm xơ cứng động mạch.',zh:'笑不仅可以调节情绪、促进血液循环，还能帮助消耗脂肪，缓解动脉硬化。',py:'Xiào bùjǐn kěyǐ tiáojié qíngxù, cùjìn xuèyè xúnhuán, hái néng bāngzhù xiāohào zhīfáng, huǎnjiě dòngmài yìnghuà.',goiY:['不仅……还…… = không chỉ … mà còn …','调节 = điều hoà','循环 = tuần hoàn','脂肪 = mỡ'],giai:'不仅……还…… tăng tiến; các cụm động – tân song song (调节情绪、促进血液循环) nối bằng dấu 、.'},
  {vi:'Cười có thật là liều thuốc tốt nhất không? Chưa chắc: có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh, thậm chí tổn hại sức khoẻ.',zh:'笑真的是最佳良药吗？未必，有人肆无忌惮地笑过后因心跳加速而昏迷，甚至损坏了健康。',py:'Xiào zhēn de shì zuì jiā liángyào ma? Wèibì, yǒu rén sìwú-jìdàn de xiàoguo hòu yīn xīntiào jiāsù ér hūnmí, shènzhì sǔnhuàile jiànkāng.',goiY:['……吗？未必 = … không? Chưa chắc (设问)','肆无忌惮 = thả cửa','因……而…… = vì … mà …','损坏 = làm tổn hại'],giai:'Câu 设问: tự hỏi rồi tự đáp (未必 = chưa chắc). 因……而…… văn viết, nêu nguyên nhân – kết quả trong một vế.'},
  {vi:'Nghiên cứu mới nghiêng về ý cho rằng cười không phải chuyện xấu, nhưng chừng mực phải giữ cho vừa phải; huống hồ khi bạn thân tụ tập làm ầm ĩ, ai còn tâm trí mà đắn đo nữa?',zh:'新研究倾向于认为笑不是坏事，但分寸要掌握得恰到好处；况且好朋友在一起起哄时，谁还顾得上斟酌呢？',py:'Xīn yánjiū qīngxiàng yú rènwéi xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù; kuàngqiě hǎo péngyou zài yìqǐ qǐhòng shí, shéi hái gù de shàng zhēnzhuó ne?',goiY:['倾向于 = nghiêng về','恰到好处 = vừa đúng mức','况且 = huống hồ','斟酌 = cân nhắc'],giai:'况且 (HSK 6 bài 20) bổ sung lý do; 谁还顾得上……呢？ là câu hỏi tu từ = không ai còn tâm trí …; 顾得上 = còn lo được tới.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 101): 缩写 hai đoạn khoá, mỗi đoạn ~200 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'这篇课文用两篇小短文给我们讲述了跟笑有关的科学知识。人们对假笑很敏感，假笑是怎么被识别出来的？对健康来说，笑有什么益处，有什么坏处，怎么笑才健康？请参考练习5，把两篇课文各缩写成200字左右的短文。',
  prompt:'Bài khoá dùng hai bài văn ngắn để kể cho chúng ta những kiến thức khoa học liên quan đến tiếng cười. Con người rất nhạy cảm với tiếng cười giả — tiếng cười giả được nhận biết ra sao? Đối với sức khoẻ, cười có lợi gì, có hại gì, cười thế nào mới khoẻ? Hãy tham khảo bài tập 5, tóm tắt MỖI bài khoá thành một đoạn văn ngắn khoảng 200 chữ (tổng cộng hai đoạn, khoảng 400 chữ).',
  dan:[
    {hoi:'课文（一）：为什么说不要用假笑敷衍别人？',goiY:'①如果不想……，可以……，可以……，可以……，可以……，但不要…… ②因为只要……，不管……，不管……，别人都能……'},
    {hoi:'课文（一）：人们通过什么途径识别假笑的？',goiY:'①……激活……特定区域 ②……自动分析……缘故 ③诚挚的笑声会…… ④志愿者的反映'},
    {hoi:'课文（一）：研究结果是什么？',goiY:'①……对……非常敏感 ②开启……区域，获知……，动用……部分，提炼出……信息'},
    {hoi:'课文（二）：为什么说笑是治病良方？',goiY:'调节情绪，促进……循环和……收缩，吸氧量，燃烧卡路里，消耗脂肪，减轻体重，缓解动脉硬化，消除紧张感'},
    {hoi:'课文（二）：笑有什么坏处？',goiY:'因心跳加速而昏迷，岔气，心脏不舒服'},
    {hoi:'课文（二）：怎么笑才健康？',goiY:'把握分寸'}
  ],
  tuNen:['岂有此理','回避','画蛇添足','特定','缘故','一目了然','预先','直觉','提炼','调节','循环','……也好，……也罢','肆无忌惮','恰到好处'],
  cauTruc:[
    {ten:'（一）…… / （二）……', nhan:'Hai đoạn riêng', vd:'（一）大脑能“听”出笑声的真假　（二）笑未必是最佳良药', khi:'Đề yêu cầu tóm tắt MỖI bài khoá thành một đoạn ~200 chữ → viết hai đoạn, mỗi đoạn có tiêu đề riêng như sách.'},
    {ten:'……吗？……（设问）', nhan:'Mở đoạn bằng câu hỏi tự đặt', vd:'人们通过什么途径识别假笑呢？研究者发现……', khi:'Vận dụng 篇章修辞 của bài: nêu câu hỏi để gây chú ý và chuyển ý tự nhiên, rồi trả lời ngay.'},
    {ten:'研究者发现 / 研究证实……', nhan:'Dẫn nghiên cứu', vd:'研究证实，笑可以调节情绪……', khi:'Văn khoa học: nêu kết quả nghiên cứu làm bằng chứng, không kể cảm nghĩ riêng.'},
    {ten:'……，同时……；……则……', nhan:'Đối chiếu', vd:'假笑声会激活……特定区域；诚挚的笑声则会激活……', khi:'So sánh hai trường hợp (cười giả / cười thật) trong một câu.'},
    {ten:'不仅……，还……', nhan:'Liệt kê lợi ích', vd:'笑不仅能调节情绪，还有助于消除紧张感。', khi:'Gom nhiều lợi ích vào một câu cho gọn — đoạn (二) có rất nhiều ý.'},
    {ten:'然而，……', nhan:'Chuyển sang mặt trái', vd:'然而，笑真的是最佳良药吗？', khi:'Mở phần "tác hại" sau khi đã nói lợi ích.'},
    {ten:'由此可见，……', nhan:'Kết đoạn', vd:'由此可见，笑不是坏事，但分寸要掌握得恰到好处。', khi:'Rút ra kết luận chung, khép lại đoạn tóm tắt.'}
  ],
  checklist:[
    'Đã viết HAI đoạn riêng (mỗi bài khoá một đoạn), mỗi đoạn khoảng 200 chữ Hán chưa?',
    'Đoạn (一) có đủ 3 ý của bảng 练习5: vì sao đừng cười giả → não nhận biết cười giả bằng cách nào (kể cả thí nghiệm với tình nguyện viên) → kết quả nghiên cứu chưa?',
    'Đoạn (二) có đủ 3 ý: lợi ích của cười → tác hại → cười thế nào mới khoẻ (把握分寸) chưa?',
    'Đã TÓM TẮT bằng lời mình (bỏ chi tiết phụ, gộp câu), không chép nguyên văn cả đoạn dài chưa?',
    'Đã dùng ít nhất 6 từ mới của bài (预先, 直觉, 特定, 缘故, 调节, 循环, 恰到好处…) và dùng đúng ……也好，……也罢 hoặc một câu 设问 chưa?'
  ],
  model:{
    zh:'（一）大脑能“听”出笑声的真假\n真是岂有此理，听到庸俗的笑话，假笑两声敷衍一下也不行吗？好像确实不行。如果不想难堪，你可以回避，可以把话题岔开，也可以装聋装哑，但不要画蛇添足，违心地笑。因为不管你多机灵，别人都能看出你的笑是真是假。人们通过什么途径识别假笑呢？研究者发现，假笑声会激活大脑中的特定区域，大脑还会自动分析假笑的缘故和假笑者的意向；诚挚的笑声则会激活与快乐相关的区域。测试结果一目了然：志愿者预先不知道测试目的，仅凭直觉就能分辨出假笑声。可见，人类大脑对笑声中的情感信息非常敏感，它能获知他人的情感，更精准地提炼出笑声背后的信息。\n（二）笑未必是最佳良药\n“笑有益于健康”几乎得到了全世界的认可。开怀大笑也好，哈哈傻笑也罢，都被中国人看作最通用的治病良方。研究证实，笑可以调节情绪，促进血液循环和腹肌收缩，增加吸氧量；开怀大笑一整天能燃烧掉2000卡路里，帮助消耗脂肪，减轻体重，还有助于缓解动脉硬化，消除紧张感。然而，笑真的是最佳良药吗？答案并不那么肯定。有人肆无忌惮地笑过后，因心跳加速而昏迷；大笑还可能导致岔气，让心脏不舒服，甚至损坏健康。由此可见，笑不是坏事，但分寸要掌握得恰到好处。',
    py:'(Yī) Dànǎo néng “tīng” chū xiàoshēng de zhēn jiǎ\nZhēn shì qǐyǒucǐlǐ, tīngdào yōngsú de xiàohua, jiǎ xiào liǎng shēng fūyǎn yíxià yě bù xíng ma? Hǎoxiàng quèshí bù xíng. Rúguǒ bù xiǎng nánkān, nǐ kěyǐ huíbì, kěyǐ bǎ huàtí chàkāi, yě kěyǐ zhuānglóng-zhuāngyǎ, dàn búyào huàshé-tiānzú, wéixīn de xiào. Yīnwèi bùguǎn nǐ duō jīling, biérén dōu néng kànchū nǐ de xiào shì zhēn shì jiǎ. Rénmen tōngguò shénme tújìng shíbié jiǎ xiào ne? Yánjiūzhě fāxiàn, jiǎ xiàoshēng huì jīhuó dànǎo zhōng de tèdìng qūyù, dànǎo hái huì zìdòng fēnxī jiǎ xiào de yuángù hé jiǎxiàozhě de yìxiàng; chéngzhì de xiàoshēng zé huì jīhuó yǔ kuàilè xiāngguān de qūyù. Cèshì jiéguǒ yímù-liǎorán: zhìyuànzhě yùxiān bù zhīdào cèshì mùdì, jǐn píng zhíjué jiù néng fēnbiàn chū jiǎ xiàoshēng. Kějiàn, rénlèi dànǎo duì xiàoshēng zhōng de qínggǎn xìnxī fēicháng mǐngǎn, tā néng huòzhī tārén de qínggǎn, gèng jīngzhǔn de tíliàn chū xiàoshēng bèihòu de xìnxī.\n(Èr) Xiào wèibì shì zuì jiā liángyào\n“Xiào yǒuyì yú jiànkāng” jīhū dédàole quán shìjiè de rènkě. Kāihuái dà xiào yě hǎo, hāhā shǎxiào yě bà, dōu bèi Zhōngguórén kànzuò zuì tōngyòng de zhì bìng liángfāng. Yánjiū zhèngshí, xiào kěyǐ tiáojié qíngxù, cùjìn xuèyè xúnhuán hé fùjī shōusuō, zēngjiā xīyǎngliàng; kāihuái dà xiào yì zhěng tiān néng ránshāo diào liǎngqiān kǎlùlǐ, bāngzhù xiāohào zhīfáng, jiǎnqīng tǐzhòng, hái yǒuzhù yú huǎnjiě dòngmài yìnghuà, xiāochú jǐnzhānggǎn. Rán\'ér, xiào zhēn de shì zuì jiā liángyào ma? Dá\'àn bìng bú nàme kěndìng. Yǒu rén sìwú-jìdàn de xiàoguo hòu, yīn xīntiào jiāsù ér hūnmí; dà xiào hái kěnéng dǎozhì chàqì, ràng xīnzàng bù shūfu, shènzhì sǔnhuài jiànkāng. Yóucǐ-kějiàn, xiào bú shì huàishì, dàn fēncun yào zhǎngwò de qiàdào-hǎochù.',
    vn:'(1) Não bộ có thể "nghe" ra tiếng cười thật hay giả\nThật là vô lý hết sức, nghe chuyện cười tầm thường mà cười giả vài tiếng cho qua cũng không được sao? Hình như quả thật là không được. Nếu không muốn khó xử, bạn có thể né tránh, có thể lái sang chuyện khác, cũng có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái lòng. Bởi dù bạn lanh lợi đến đâu, người khác đều nhìn ra nụ cười của bạn là thật hay giả. Con người nhận biết tiếng cười giả bằng cách nào? Các nhà nghiên cứu phát hiện, tiếng cười giả sẽ kích hoạt một vùng riêng biệt trong não, não còn tự động phân tích nguyên do của việc cười giả và ý đồ của người cười giả; còn tiếng cười chân thành thì kích hoạt vùng liên quan đến niềm vui. Kết quả thử nghiệm nhìn qua là rõ: tình nguyện viên không được biết trước mục đích thử nghiệm, chỉ dựa vào trực giác đã phân biệt được tiếng cười giả. Có thể thấy, não người rất nhạy cảm với thông tin cảm xúc trong tiếng cười, nó biết được cảm xúc của người khác và rút ra chính xác hơn thông tin đằng sau tiếng cười.\n(2) Cười chưa chắc đã là liều thuốc tốt nhất\n"Cười có lợi cho sức khoẻ" gần như đã được cả thế giới thừa nhận. Dù là cười sảng khoái hay cười ha hả ngây ngô, người Trung Quốc đều coi đó là phương thuốc chữa bệnh thông dụng nhất. Nghiên cứu đã chứng thực, cười có thể điều hoà cảm xúc, thúc đẩy tuần hoàn máu và co bóp cơ bụng, tăng lượng oxy hít vào; cười sảng khoái suốt một ngày có thể đốt cháy 2000 calo, giúp tiêu hao mỡ, giảm cân, còn giúp làm giảm xơ cứng động mạch, xua tan cảm giác căng thẳng. Thế nhưng, cười có thật là liều thuốc tốt nhất không? Câu trả lời không chắc chắn đến vậy. Có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh; cười lớn còn có thể gây xóc hông, làm tim khó chịu, thậm chí tổn hại sức khoẻ. Có thể thấy, cười không phải chuyện xấu, nhưng phải giữ chừng mực cho thật vừa phải.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (课文（一）3 dòng + 课文（二）3 dòng). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 回避 · 画蛇添足 · 特定 · 缘故 · 预先 · 直觉 · 提炼 · 调节 · 循环 · 分寸 · 恰到好处.',
  questions:[
    {q_zh:'为什么说不要用假笑敷衍别人？',
     q_vn:'(Bài khoá 1) Vì sao nói đừng dùng tiếng cười giả để đối phó với người khác?',
     hint:'①如果不想……，可以……，可以……，可以……，可以……，但不要……　②因为只要……，不管……，不管……，别人都能……',
     sample:'如果不想难堪，你可以回避，可以不表态，可以把话题岔开，可以装聋装哑，但不要画蛇添足，违心地笑。因为只要你笑，不管你多机灵，不管你掩饰得多么周密，别人都能看出你的笑是真心的还是虚伪的。',
     sample_vn:'Nếu không muốn khó xử, bạn có thể né tránh, có thể không bày tỏ thái độ, có thể lái sang chuyện khác, có thể giả câm giả điếc, nhưng đừng vẽ rắn thêm chân mà cười trái lòng. Bởi chỉ cần bạn cười, dù bạn lanh lợi đến đâu, che giấu kín kẽ thế nào, người khác đều nhìn ra nụ cười của bạn là thật lòng hay giả dối.',
     note:'Giữ đúng khung gợi ý: bốn lần 可以…… rồi 但不要……; sau đó 因为只要……，不管……，不管……，都…….'},
    {q_zh:'人们通过什么途径识别假笑的？',
     q_vn:'(Bài khoá 1) Con người nhận biết tiếng cười giả bằng con đường nào?',
     hint:'①……激活……特定区域　②……自动分析……缘故　③诚挚的笑声会……　④志愿者的反映',
     sample:'假笑声会激活大脑中用于破译情感信息的特定区域，同时大脑会自动分析假笑的缘故和假笑者的意向；诚挚的笑声会激活与快乐和积极情绪相关的区域。在测试中，志愿者预先不知道测试目的，却仅凭直觉就能准确地分辨出假笑声。',
     sample_vn:'Tiếng cười giả kích hoạt vùng riêng biệt trong não dùng để giải mã thông tin cảm xúc, đồng thời não tự động phân tích nguyên do của việc cười giả và ý đồ của người cười giả; tiếng cười chân thành thì kích hoạt vùng liên quan đến niềm vui và cảm xúc tích cực. Trong thử nghiệm, tình nguyện viên không được biết trước mục đích, vậy mà chỉ dựa vào trực giác đã phân biệt chính xác tiếng cười giả.',
     note:'Nói đủ 4 ý; ý ④ (phản ứng của tình nguyện viên) dùng 预先……，却仅凭直觉就…….'},
    {q_zh:'研究结果是什么？',
     q_vn:'(Bài khoá 1) Kết quả nghiên cứu là gì?',
     hint:'①……对……非常敏感　②开启……区域，获知……，动用……部分，提炼出……信息',
     sample:'研究结果是：人类大脑对笑声中所隐含的社会和情感信息非常敏感，这不完全是智商问题。人们听到笑声时，会开启大脑中与心智相关的区域，获知他人的情感，有的人还会动用控制运动和感知的部分，更精准地提炼出笑声背后的信息。',
     sample_vn:'Kết quả nghiên cứu là: não người rất nhạy cảm với thông tin xã hội và cảm xúc ẩn trong tiếng cười, điều này không hoàn toàn do chỉ số thông minh. Khi nghe tiếng cười, con người khởi động vùng não liên quan đến tâm trí, biết được cảm xúc của người khác; có người còn huy động phần não điều khiển vận động và cảm nhận, rút ra chính xác hơn thông tin đằng sau tiếng cười.',
     note:'对……非常敏感; chuỗi 4 động từ 开启 → 获知 → 动用 → 提炼出.'},
    {q_zh:'为什么说笑是治病良方？',
     q_vn:'(Bài khoá 2) Vì sao nói cười là phương thuốc chữa bệnh tốt?',
     hint:'调节情绪，促进……循环和……收缩，吸氧量，燃烧卡路里，消耗脂肪，减轻体重，缓解动脉硬化，消除紧张感',
     sample:'因为研究证实，笑可以调节情绪，促进血液循环和腹肌收缩。一百次捧腹大笑的吸氧量相当于用桨划船十分钟。开怀大笑一整天能燃烧掉两千卡路里，帮助消耗脂肪，减轻体重，还能缓解动脉硬化，消除紧张感。',
     sample_vn:'Vì nghiên cứu đã chứng thực, cười có thể điều hoà cảm xúc, thúc đẩy tuần hoàn máu và co bóp cơ bụng. Lượng oxy hít vào của 100 lần cười ôm bụng tương đương chèo thuyền 10 phút. Cười sảng khoái cả ngày có thể đốt 2000 calo, giúp tiêu hao mỡ, giảm cân, còn giảm xơ cứng động mạch, xua tan căng thẳng.',
     note:'Nhiều ý → chia thành 3 câu ngắn; dùng 相当于 và 还能 để nối.'},
    {q_zh:'笑有什么坏处？',
     q_vn:'(Bài khoá 2) Cười có tác hại gì?',
     hint:'因心跳加速而昏迷，岔气，心脏不舒服',
     sample:'笑也不是有百益而无一害的。有人肆无忌惮地笑过后，因心跳加速而昏迷；大笑到“几乎笑破肚皮”还可能导致岔气，心脏不舒服，甚至损坏健康。',
     sample_vn:'Cười cũng không phải trăm lợi mà không một hại. Có người sau khi cười thả cửa đã hôn mê vì tim đập nhanh; cười lớn đến "suýt vỡ bụng" còn có thể gây xóc hông, tim khó chịu, thậm chí tổn hại sức khoẻ.',
     note:'因……而…… (văn viết); 导致 + hậu quả xấu.'},
    {q_zh:'怎么笑才健康？',
     q_vn:'(Bài khoá 2) Cười thế nào mới khoẻ?',
     hint:'把握分寸',
     sample:'笑不是坏事，但一定要把握分寸，掌握得恰到好处，不要肆无忌惮地大笑。当然，跟好朋友在一起开开心心地笑一笑，也不必想得太多。',
     sample_vn:'Cười không phải chuyện xấu, nhưng nhất định phải giữ chừng mực, vừa đúng mức, đừng cười thả cửa. Tất nhiên, vui vẻ cười cùng bạn thân thì cũng chẳng cần nghĩ ngợi quá nhiều.',
     note:'把握 / 掌握 + 分寸; 恰到好处 làm bổ ngữ sau 得.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 29.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 29',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么一直盯着手机笑？'},
            {sp:'男',zh:'我在看一个相声视频，太逗了，我都快笑岔气了。'}],
     q:'男的在做什么？',qvn:'Người đàn ông đang làm gì?',
     opts:['看相声视频','给朋友打电话','写作业','听音乐'],ans:0,
     why:'我在看一个相声视频 → đang xem video tấu hài. 笑岔气 = cười đến xóc hông.',
     words:['相声','视频','岔']},

    {n:2,
     lines:[{sp:'男',zh:'昨天的面试怎么样？'},
            {sp:'女',zh:'别提了，我预先准备的问题一个都没问到，只好凭直觉回答。'}],
     q:'关于女的面试，可以知道什么？',qvn:'Về buổi phỏng vấn của người phụ nữ, có thể biết điều gì?',
     opts:['准备得很充分','问的问题她都准备过','她凭直觉回答了问题','面试推迟了'],ans:2,
     why:'预先准备的问题一个都没问到，只好凭直觉回答 → trả lời theo trực giác. Câu hỏi đã chuẩn bị không được hỏi nên phương án 2 sai.',
     words:['预先','直觉']},

    {n:3,
     lines:[{sp:'女',zh:'你觉得这件衣服怎么样？'},
            {sp:'男',zh:'说实话，颜色有点儿俗，不太上档次，那件蓝色的更适合你。'}],
     q:'男的认为这件衣服怎么样？',qvn:'Người đàn ông thấy bộ quần áo này thế nào?',
     opts:['很上档次','价格太贵','颜色不太好看','太小了'],ans:2,
     why:'颜色有点儿俗，不太上档次 → màu hơi quê, không đẹp. Không nhắc giá hay kích cỡ.',
     words:['档次']},

    {n:4,
     lines:[{sp:'男',zh:'小王今天在会上怎么一句话也不说？'},
            {sp:'女',zh:'经理问他的问题他回答不了，只好装聋装哑，把话题岔开了。'}],
     q:'小王为什么不说话？',qvn:'Vì sao Tiểu Vương không nói gì?',
     opts:['他生病了','他不想参加会议','他没听清楚','经理的问题他回答不了'],ans:3,
     why:'经理问他的问题他回答不了 → không trả lời được câu hỏi của giám đốc nên giả câm giả điếc.',
     words:['装聋装哑','岔']},

    {n:5,
     lines:[{sp:'女',zh:'这次市场调查的结果出来了吗？'},
            {sp:'男',zh:'出来了，一目了然：大部分消费者都倾向于买价格适中的产品。'}],
     q:'调查结果说明了什么？',qvn:'Kết quả khảo sát cho thấy điều gì?',
     opts:['消费者喜欢贵的产品','多数消费者倾向于买价格适中的产品','调查还没有结果','产品质量有问题'],ans:1,
     why:'大部分消费者都倾向于买价格适中的产品 → đa số nghiêng về sản phẩm giá vừa phải.',
     words:['一目了然','倾向']},

    {n:6,
     lines:[{sp:'男',zh:'你笑得这么开心，有什么好事吗？'},
            {sp:'女',zh:'刚才同学们起哄，让班长给大家唱歌，他唱得太好笑了。'}],
     q:'女的为什么笑？',qvn:'Vì sao người phụ nữ cười?',
     opts:['班长唱歌唱得很好笑','她考试考得很好','同学们送了她礼物','她看了一段相声'],ans:0,
     why:'他（班长）唱得太好笑了 → lớp trưởng hát rất buồn cười. 起哄 = cả lớp hùa nhau bắt lớp trưởng hát.',
     words:['起哄']},

    {n:7,
     lines:[{sp:'女',zh:'听说你最近在减肥？'},
            {sp:'男',zh:'是啊，医生说我脂肪太多，再不注意可能会动脉硬化，所以我每天都去划船锻炼。'}],
     q:'男的为什么要减肥？',qvn:'Vì sao người đàn ông giảm cân?',
     opts:['想参加划船比赛','女朋友让他减肥','衣服穿不下了','医生说他脂肪太多'],ans:3,
     why:'医生说我脂肪太多，再不注意可能会动脉硬化 → lời bác sĩ. Chèo thuyền chỉ là cách tập, không phải để thi.',
     words:['脂肪','动脉']},

    {n:8,
     lines:[{sp:'男',zh:'很多人认为，笑有百益而无一害。其实，笑也要掌握分寸。研究发现，如果笑得太肆无忌惮，可能会导致心跳加速，甚至昏迷。对于有心脏病的老人来说，更要注意这一点。所以，笑虽然有益于健康，但恰到好处才是最好的。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn nói chủ yếu muốn cho chúng ta biết điều gì?',
     opts:['笑有百益而无一害','老人不能笑','笑要掌握分寸，恰到好处','笑会导致心脏病'],ans:2,
     why:'Câu chủ đề: 笑也要掌握分寸 … 恰到好处才是最好的. "有百益而无一害" là quan điểm bị phản bác; không nói người già không được cười.',
     words:['分寸','肆无忌惮','恰到好处']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn em kể một chuyện cười rất nhạt, cả nhóm im lặng, bạn quay sang hỏi em có buồn cười không.',
     a:{sp:'Bạn',zh:'哈哈，好笑吧？你怎么不笑啊？',vn:'Haha, buồn cười nhỉ? Sao cậu không cười?'},
     need:['Dùng 违心 hoặc 虚伪','Nói thật một cách khéo léo'],
     sample:'说实话，这个笑话我没怎么听懂。要我违心地笑，那也太虚伪了吧？你再讲一个，我保证真心笑！',
     samplePy:'Shuō shíhuà, zhège xiàohua wǒ méi zěnme tīngdǒng. Yào wǒ wéixīn de xiào, nà yě tài xūwěi le ba? Nǐ zài jiǎng yí ge, wǒ bǎozhèng zhēnxīn xiào!',
     sampleVn:'Nói thật là chuyện này tớ không hiểu lắm. Bắt tớ cười trái lòng thì giả tạo quá nhỉ? Cậu kể chuyện khác đi, tớ đảm bảo cười thật lòng!',
     tip:'Bài khoá khuyên đừng 违心地笑 — nói thật nhưng kèm lời đùa cho nhẹ nhàng.'},

    {scene:'Mẹ hỏi em rốt cuộc muốn học ngành y hay ngành luật.',
     a:{sp:'Mẹ',zh:'你到底想学医还是学法律？',vn:'Rốt cuộc con muốn học y hay học luật?'},
     need:['Dùng ……也好，……也罢','Dùng 倾向于'],
     sample:'学医也好，学法律也罢，都是很好的专业。不过我更倾向于学医，因为我对人体特别感兴趣。',
     samplePy:'Xué yī yě hǎo, xué fǎlǜ yě bà, dōu shì hěn hǎo de zhuānyè. Búguò wǒ gèng qīngxiàng yú xué yī, yīnwèi wǒ duì réntǐ tèbié gǎn xìngqù.',
     sampleVn:'Học y hay học luật đều là ngành rất tốt ạ. Nhưng con nghiêng về học y hơn, vì con đặc biệt hứng thú với cơ thể người.',
     tip:'A也好，B也罢，都…… (điểm ngữ pháp 2); 更倾向于 + lựa chọn.'},

    {scene:'Bạn rủ em tháng sau đi Bắc Kinh du lịch và hỏi cần chuẩn bị gì.',
     a:{sp:'Bạn',zh:'下个月我们去北京玩儿，要准备些什么？',vn:'Tháng sau bọn mình đi Bắc Kinh chơi, cần chuẩn bị gì nhỉ?'},
     need:['Dùng 预先','Dùng 周密'],
     sample:'北京游客多，我们得预先订好酒店和门票，路线也要计划得周密一点，免得到时候手忙脚乱。',
     samplePy:'Běijīng yóukè duō, wǒmen děi yùxiān dìnghǎo jiǔdiàn hé ménpiào, lùxiàn yě yào jìhuà de zhōumì yìdiǎn, miǎnde dào shíhou shǒumáng-jiǎoluàn.',
     sampleVn:'Bắc Kinh đông khách du lịch, mình phải đặt sẵn khách sạn và vé vào cửa, lộ trình cũng phải lên kế hoạch chu đáo một chút, kẻo đến lúc đó lại luống cuống.',
     tip:'预先 + V + 好; 免得 = kẻo, để khỏi (HSK 6 bài 14).'},

    {scene:'Trong giờ tự học, bạn ngồi cạnh xem video cười rất to, cả lớp quay lại nhìn.',
     a:{sp:'Bạn',zh:'哈哈哈，太好笑了，我停不下来！',vn:'Hahaha, buồn cười quá, tớ không dừng được!'},
     need:['Dùng 分寸 hoặc 肆无忌惮','Nhắc khéo'],
     sample:'小声点儿，现在是自习课。笑也要有分寸，别这么肆无忌惮的，大家都在看你呢。',
     samplePy:'Xiǎo shēng diǎnr, xiànzài shì zìxíkè. Xiào yě yào yǒu fēncun, bié zhème sìwú-jìdàn de, dàjiā dōu zài kàn nǐ ne.',
     sampleVn:'Nhỏ tiếng chút đi, giờ tự học đấy. Cười cũng phải có chừng mực, đừng thả cửa thế, mọi người đang nhìn cậu kìa.',
     tip:'笑也要有分寸 — chính là kết luận của bài khoá (二).'},

    {scene:'Thầy chủ nhiệm đưa em xem bản phát biểu cho lễ tốt nghiệp ngày mai và nhờ góp ý.',
     a:{sp:'Thầy',zh:'这是我明天毕业典礼的发言稿，你帮我看看有没有问题？',vn:'Đây là bài phát biểu lễ tốt nghiệp mai của thầy, em xem giúp có vấn đề gì không?'},
     need:['Dùng 斟酌','Dùng 恰当'],
     sample:'老师，您的发言稿写得很感人。只是第二段有个词用得不太恰当，您再斟酌斟酌，看要不要换一个。',
     samplePy:'Lǎoshī, nín de fāyángǎo xiě de hěn gǎnrén. Zhǐshì dì-èr duàn yǒu ge cí yòng de bú tài qiàdàng, nín zài zhēnzhuó zhēnzhuó, kàn yào bu yào huàn yí ge.',
     sampleVn:'Thưa thầy, bài phát biểu của thầy viết rất cảm động. Chỉ có một từ ở đoạn hai dùng chưa thật thoả đáng, thầy cân nhắc thêm xem có nên đổi không ạ.',
     tip:'Góp ý với thầy cô: khen trước, 只是 + điểm cần sửa; 您再斟酌斟酌 lịch sự, mềm mỏng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Người dẫn chương trình mở đầu một hội thảo khoa học.',
     a:'诸位来宾，欢迎大家光临本次研讨会。',b:'大伙儿好，都来了啊，那咱们开始吧！',better:'a',
     why:'Hội thảo trang trọng cần 诸位来宾, 光临, 本次. Câu b (大伙儿, 咱们) là lời nói thân mật giữa bạn bè.'},

    {scene:'Em nhắn tin cho bạn thân nhận xét một bộ phim vừa xem.',
     a:'这部片子太俗了，一点儿都不好看。',b:'该影片内容庸俗，缺乏艺术价值。',better:'a',
     why:'Nhắn tin bạn bè dùng khẩu ngữ (片子, 太俗了). Câu b (该影片, 缺乏艺术价值) là giọng bài phê bình trên báo.'},

    {scene:'Em viết báo cáo kết quả thí nghiệm cho môn Sinh học.',
     a:'结果一看就明白，大家随便一猜就知道是假笑。',b:'测试结果一目了然，志愿者仅凭直觉即可分辨假笑声。',better:'b',
     why:'Báo cáo khoa học dùng văn viết: 一目了然, 仅凭, 即可. Câu a (随便一猜) quá khẩu ngữ, thiếu chính xác.'},

    {scene:'Em nhờ cô giáo xem giúp bài văn trước khi nộp dự thi.',
     a:'老师，您有空的时候帮我斟酌斟酌，看看用词恰当不恰当，行吗？',b:'老师，你看看我这篇写得行不行。',better:'a',
     why:'Nói với thầy cô dùng 您, 有空的时候, 行吗 cho lịch sự; nêu rõ nhờ xem gì (用词恰当不恰当). Câu b dùng 你, cộc lốc.'},

    {scene:'Công ty em viết thư cảm ơn một đối tác.',
     a:'谢谢啦，下次请你们吃饭！',b:'对贵公司的大力支持，我们谨表示诚挚的谢意。',better:'b',
     why:'Thư công vụ dùng 贵公司, 谨, 诚挚的谢意. Câu a là lời cảm ơn giữa bạn bè.'},

    {scene:'Nhóm bạn đang cười đùa ầm ĩ trong quán cà phê, em muốn nhắc mọi người nhỏ tiếng.',
     a:'请诸位注意分寸，切勿肆无忌惮地喧哗。',b:'哎，小点儿声，别人都在看咱们呢。',better:'b',
     why:'Nhắc bạn bè nên nhẹ nhàng, khẩu ngữ. Câu a (诸位, 切勿, 喧哗) như biển báo nơi công cộng, nói với bạn nghe rất khách sáo, buồn cười.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt HAI bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Ba dòng đầu là 课文（一）, ba dòng sau là 课文（二）. Bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'为什么说不要用假笑敷衍别人？', cue:'①如果不想……，可以……，可以……，可以……，可以……，但不要……　②因为只要……，不管……，不管……，别人都能……', words:['岂有此理','庸俗','档次','诸位','难堪','虚伪','违背','回避','岔','装聋装哑','画蛇添足','机灵','周密']},
    {step:'人们通过什么途径识别假笑的？', cue:'①……激活……特定区域　②……自动分析……缘故　③诚挚的笑声会……　④志愿者的反映', words:['途径','虚假','特定','缘故','意向','诚挚','一丝不苟','倾听','视频','一目了然','预先','直觉','探测']},
    {step:'研究结果是什么？', cue:'①……对……非常敏感　②开启……区域，获知……，动用……部分，提炼出……信息', words:['智商','提炼']},
    {step:'为什么说笑是治病良方？', cue:'调节情绪，促进……循环和……收缩，吸氧量，燃烧卡路里，消耗脂肪，减轻体重，缓解动脉硬化，消除紧张感', words:['相声','座右铭','通用','调节','循环','收缩','氧气','桨','试验','脂肪','动脉','实质']},
    {step:'笑有什么坏处？', cue:'因心跳加速而昏迷，岔气，心脏不舒服', words:['肆无忌惮','岔','损坏']},
    {step:'怎么笑才健康？', cue:'把握分寸', words:['倾向','分寸','恰到好处','是非','探讨','收益','起哄','斟酌','恰当']}
  ],
  checklist: [
    'Kể đủ 6 ý theo đúng thứ tự bảng chưa (3 ý của bài khoá 1, rồi 3 ý của bài khoá 2)?',
    'Ý 1 có giữ được khung 如果不想……，可以……，但不要……；因为只要……，不管……，别人都能…… không?',
    'Ý 2 có nói đủ: cười giả kích hoạt vùng riêng biệt → não phân tích nguyên do → cười thật kích hoạt vùng vui vẻ → tình nguyện viên chỉ dựa vào trực giác mà nhận ra không?',
    'Ý 4 có kể được ít nhất 5 lợi ích (调节情绪, 血液循环, 吸氧量, 消耗脂肪, 缓解动脉硬化…) không?',
    'Có kết bằng ý 把握分寸 / 恰到好处 và kể bằng LỜI MÌNH (không đọc thuộc nguyên văn) không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 96–102) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“预先”完成句子（注释1 · 练一练）', vn:'Dùng 预先 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'这事她＿＿，我最近都忙糊涂了，忘了告诉你了。', tu:'预先', dap:'这事她预先通知过我，我最近都忙糊涂了，忘了告诉你了。',
      giai:'预先 + V + 过 + tân ngữ: cô ấy đã báo trước cho tôi rồi (tôi bận quá quên nói với cậu).'},
     {s:'他＿＿的是，居然有那么多朋友，在他最困难的时候向他伸出了援手。', tu:'预先', dap:'他预先没有想到的是，居然有那么多朋友，在他最困难的时候向他伸出了援手。',
      giai:'预先 + 没有 + V: 预先没有想到的是…… = điều trước đó anh ấy không ngờ tới là … (hô ứng với 居然).'},
     {s:'古代递送紧急公文也骑马。一天中马该跑多少路，都有规定。从这一站到那一站多远，也规定好了。送公文的到了，吃饱喝足，稍稍休息一下，换一匹＿＿，继续赶路。', tu:'预先', dap:'古代递送紧急公文也骑马。一天中马该跑多少路，都有规定。从这一站到那一站多远，也规定好了。送公文的到了，吃饱喝足，稍稍休息一下，换一匹预先准备好的马，继续赶路。',
      giai:'预先 + V + 好 + 的 + N làm tân ngữ: 换一匹预先准备好的马 = đổi một con ngựa đã chuẩn bị sẵn.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用“……也好／也罢，……也好／也罢”或者“……也好，……也罢”改写句子（注释2 · 练一练）', vn:'Dùng ……也好/也罢，……也好/也罢 hoặc ……也好，……也罢 viết lại câu (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'是上学还是工作，只要你自己愿意就行。', tu:'……也好，……也罢', dap:'上学也好，工作也罢，只要你自己愿意就行。',
      giai:'是 A 还是 B → A也好，B也罢. Đáp án sách in "上学也好还是工作也罢" — chữ 还是 rõ ràng là sót lại do in lỗi (cấu trúc 也好……也罢 đã thay cho 是……还是……), nên ở đây bỏ 还是 và thêm dấu phẩy.'},
     {s:'考试已经完了，考得好不好，再想也没用了。', tu:'……也好，……也罢', dap:'考试已经完了，考得好也好，不好也罢，再想也没用了。',
      giai:'好不好 (khẳng định – phủ định) → 考得好也好，不好也罢: đỗ hay trượt thì cũng vậy.'},
     {s:'不管明天是什么天气，刮风或者下雨，都不能影响我们六点准时出发。', tu:'……也好，……也罢', dap:'不管明天是什么天气，刮风也好下雨也罢，都不能影响我们六点准时出发。',
      giai:'A或者B → A也好B也罢, vế sau vẫn giữ 都 hô ứng.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'篇章修辞 · 修辞（6）设问 · 练一练：将下列句子改写为设问句', vn:'Tu từ văn bản · Tu từ (6) Thiết vấn (tự hỏi tự đáp) · Luyện tập: viết lại các câu sau thành câu thiết vấn — đáp án theo sách',
   cau:[
     {s:'有钱不一定幸福，有朋友，有健康，有自己的事业才会幸福。', tu:'……吗？……', dap:'有钱一定幸福吗？不一定，有朋友，有健康，有自己的事业才会幸福。',
      giai:'Biến ý đầu thành câu hỏi (有钱一定幸福吗？) rồi tự trả lời (不一定，……). Câu hỏi gây chú ý, dẫn người đọc suy nghĩ.'},
     {s:'气候真的变暖了，没错，我们的地球每一天都在变化。', tu:'……吗？……', dap:'气候真的变暖了吗？没错，我们的地球每一天都在变化。',
      giai:'Thêm 吗 thành câu hỏi, 没错 là câu tự đáp khẳng định.'},
     {s:'奋斗的人生是最美好的，因为奋斗之中快乐无穷。', tu:'……吗？……', dap:'奋斗的人生是最美好的吗？是的，因为奋斗之中快乐无穷。',
      giai:'Nêu câu hỏi 是最美好的吗？ → tự đáp 是的 + lý do 因为…….'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'实质', chu:'质', ds:['本质','性质','品质','素质']},
   cau:[
     {tu:'档次', chu:'档', dap:['存档','档案','高档','低档'], them:['中档','高档货','低档货','中高档'],
      giai:'档 trong 档次 = cấp, hạng (高档 = cao cấp, 低档 = cấp thấp, 中档 = hạng trung). 存档, 档案 trong đáp án sách dùng nghĩa khác của 档: hồ sơ lưu trữ.'},
     {tu:'回避', chu:'避', dap:['躲避','避雨','避免','避重就轻'], them:['逃避','避开','避难','避暑','避风','规避'],
      giai:'避 = tránh, né (躲避 = trốn tránh, 避雨 = trú mưa, 避免 = tránh khỏi, 避重就轻 = né cái nặng nhận cái nhẹ).'},
     {tu:'周密', chu:'周', dap:['周围','周全','周岁','周末'], them:['周到','周详','周游','众所周知'],
      giai:'周 trong 周密 = khắp, trọn vẹn (周全, 周到, 周详 = chu đáo đầy đủ; 周游 = đi khắp). Đáp án sách còn có 周围 (vòng quanh), 周岁 (tròn tuổi), 周末 (周 = tuần) — các nghĩa khác của 周.'},
     {tu:'提炼', chu:'提', dap:['提前','前提','提取','提心吊胆'], them:['提纯','提出','提成','提取物'],
      giai:'提 trong 提炼 = rút ra, lấy ra (提取 = chiết xuất, 提纯 = tinh chế, 提出 = đưa ra). 提前, 前提, 提心吊胆 trong đáp án sách dùng nghĩa khác của 提: nâng, đưa lên / đưa trước.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'付出艰苦努力的人什么都没得到，哪有这样的道理啊？', tu:'岂有此理', dap:'付出艰苦努力的人什么都没得到，岂有此理！',
      giai:'哪有这样的道理啊？(câu hỏi tu từ, khẩu ngữ) → 岂有此理！(thành ngữ cảm thán = vô lý hết sức).'},
     {s:'我已经提前做好了计划，所以实施起来很顺利。', tu:'预先', dap:'我已经预先做好了计划，所以实施起来很顺利。',
      giai:'提前 → 预先: làm sẵn trước khi việc bắt đầu.'},
     {s:'无论富贵还是贫穷，我对他的爱不会改变。', tu:'……也好，……也罢', dap:'富贵也好贫穷也罢，我对他的爱不会改变。',
      giai:'无论 A 还是 B → A也好B也罢: giàu sang hay nghèo khó thì tình yêu cũng không đổi.'},
     {s:'“米”是国际上普遍使用的基本长度单位。', tu:'通用', dap:'“米”是国际上通用的基本长度单位。',
      giai:'普遍使用 → 通用 (dùng chung, phổ biến).'},
     {s:'问题的本质在于某些人缺乏责任心。', tu:'实质', dap:'问题的实质在于某些人缺乏责任心。',
      giai:'本质 → 实质 (thực chất); 在于 = nằm ở.'},
     {s:'明天的会议很重要，发言稿你好好考虑考虑。', tu:'斟酌', dap:'明天的会议很重要，发言稿你好好斟酌斟酌。',
      giai:'考虑考虑 → 斟酌斟酌 (lặp ABAB = cân nhắc thêm một chút; 斟酌 nhấn cân nhắc câu chữ cho thoả đáng).'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 1)', tu:['损坏','循环','脂肪','收缩','动脉'],
   cau:[
     {s:'心脏每时每刻都在跳动，有规律地＿＿和舒张，这可以使血液在体内不断＿＿，因此心脏的重要性不言而喻。而肥胖会导致＿＿硬化，＿＿心脏机能。所以减轻体重，减少＿＿含量是保护心脏重要的一步。',
      dap:['收缩','循环','动脉','损坏','脂肪']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 2)', tu:['恰当','周密','意向','收益','一丝不苟'],
   cau:[
     {s:'新产品面世以前，一般要先调查消费者的购买＿＿，然后经过＿＿的设计，＿＿的生产过程，再找一个＿＿的时机投放到市场，才能获得可观的＿＿。',
      dap:['意向','周密','一丝不苟','恰当','收益']}
   ]},

  {kieu:'kho', de:'请给下面的问句选择对应的答句并连线', vn:'Chọn câu trả lời tương ứng cho mỗi câu hỏi và nối lại (bài tập 4 — các cặp hỏi – đáp đều là câu 设问). Điền câu trả lời vào sau mỗi câu hỏi. Đáp án sách: ① C　② A　③ D　④ B',
   tu:['它是人类所创造的财富的总和，特指精神财富，如文学、艺术、教育、科学，文明涵盖了人与人、人与社会、人与自然之间的关系。','唯有青青松树枝。','不是，他是来观察物候，做科学研究的。','不是。有的植物不但能够运动，而且还会跳舞呢。'],
   cau:[
     {s:'竺可桢走进北海公园，单是为了观赏景物吗？＿＿', dap:['不是，他是来观察物候，做科学研究的。']},
     {s:'如何定义“文明”？＿＿', dap:['它是人类所创造的财富的总和，特指精神财富，如文学、艺术、教育、科学，文明涵盖了人与人、人与社会、人与自然之间的关系。']},
     {s:'你也许以为植物都是不能运动的吧？＿＿', dap:['不是。有的植物不但能够运动，而且还会跳舞呢。']},
     {s:'雪中何以赠君别？＿＿', dap:['唯有青青松树枝。']}
   ]},

  {kieu:'kho', de:'熟悉下列近义词（扩展 · 词汇 · 1）', vn:'Làm quen các cặp từ gần nghĩa (Mở rộng · Từ vựng 1 — phần 1/2). Sách in sẵn các cặp; ở đây che từ bên phải để em tự nhớ lại từ gần nghĩa.', tu:['腐败','中心','安葬','摧残','烤','内情','连接','圈套'],
   cau:[
     {s:'腐朽（mục nát; thối nát） ≈ ＿＿', dap:['腐败']},
     {s:'焦点（tiêu điểm） ≈ ＿＿', dap:['中心']},
     {s:'埋葬（chôn cất） ≈ ＿＿', dap:['安葬']},
     {s:'践踏（giẫm đạp, chà đạp） ≈ ＿＿', dap:['摧残']},
     {s:'烘（hơ, sấy） ≈ ＿＿', dap:['烤']},
     {s:'内幕（nội tình, chuyện bên trong） ≈ ＿＿', dap:['内情']},
     {s:'衔接（nối tiếp, ăn khớp） ≈ ＿＿', dap:['连接']},
     {s:'陷阱（cạm bẫy） ≈ ＿＿', dap:['圈套']}
   ]},
  {kieu:'kho', de:'熟悉下列近义词（扩展 · 词汇 · 1）', vn:'Làm quen các cặp từ gần nghĩa (Mở rộng · Từ vựng 1 — phần 2/2).', tu:['暗示','稳妥','转动','吐','相当','小偷','住所','合法'],
   cau:[
     {s:'示意（ra hiệu, ra ý） ≈ ＿＿', dap:['暗示']},
     {s:'妥善（thoả đáng, chu đáo） ≈ ＿＿', dap:['稳妥']},
     {s:'旋转（xoay tròn） ≈ ＿＿', dap:['转动']},
     {s:'呕吐（nôn mửa） ≈ ＿＿', dap:['吐']},
     {s:'相等（bằng nhau） ≈ ＿＿', dap:['相当']},
     {s:'贼（kẻ trộm） ≈ ＿＿', dap:['小偷']},
     {s:'住宅（nhà ở） ≈ ＿＿', dap:['住所']},
     {s:'正当（chính đáng） ≈ ＿＿', dap:['合法']}
   ]},

  {kieu:'kho', de:'将下列政治方面的词语与其对应的意思连线（扩展 · 词汇 · 2）', vn:'Nối các từ về chính trị với nghĩa tương ứng (Mở rộng · Từ vựng 2) — chọn từ điền vào trước mỗi lời giải thích. Lưu ý: bản đáp án sách in lệch dòng (từ và lời giải thích không nằm cùng hàng, ví dụ 共和国 đứng cạnh "最近一段时间的国内外大事"), nên ở đây nối theo NỘI DUNG: 共和国 — nước thực hiện chính thể cộng hoà; 领事馆 — cơ quan lãnh sự; 统治 — dùng chính quyền để cai trị; 时事 — thời sự; 条约 — điều ước; 纲领 — cương lĩnh.', tu:['共和国','领事馆','统治','时事','条约','纲领'],
   cau:[
     {s:'＿＿：最近一段时间的国内外大事。', dap:['时事']},
     {s:'＿＿：国家和国家签订的有关政治、军事、经济或文化等方面的权利和义务的文书。', dap:['条约']},
     {s:'＿＿：政府、政党、社团根据自己在一定时期内的任务而规定的奋斗目标和行动步骤。', dap:['纲领']},
     {s:'＿＿：实施共和政体的国家（国家元首和国家权力机关定期由选举产生的政治制度叫共和制）。', dap:['共和国']},
     {s:'＿＿：凭借政权来控制、管理国家或地区。', dap:['统治']},
     {s:'＿＿：一国政府派驻外国某一城市或地区的外交官员代表机关。', dap:['领事馆']}
   ]}
];
