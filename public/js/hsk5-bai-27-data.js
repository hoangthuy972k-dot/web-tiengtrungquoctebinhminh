// ══════════════════════════════════════════
// DATA — HSK5 Bài 27: 下棋 (Đánh cờ)
// Unit 9 感受人生 · Nguồn: HSK标准教程5下 (tr. 79–86) + 练习册 bài 27
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 34 mục của bảng 生词 (tr. 79–81); mục 5 睁 có từ phụ 眼睁睁 tách riêng → 35 từ
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'象棋',py:'xiàngqí',pos:'Danh từ',vn:'cờ tướng; (棋) cờ',hv:'tượng kỳ',em:'♟️',lesson:1,
   explain:['Cờ tướng — môn cờ truyền thống của Trung Quốc. Sách ghi (象)棋: riêng 棋 là "cờ" nói chung (围棋 cờ vây, 国际象棋 cờ vua).'],
   usage:'Đánh cờ là 下 + 棋 / 象棋 (không dùng 打 hay 玩). Lượng từ: 一盘 / 一局棋 (bảng 词语搭配). 棋子 = quân cờ, 棋盘 = bàn cờ, 走一步 = đi một nước.',
   collo:['下象棋','象棋教练','一盘棋','棋子'],
   ex_zh:'我父亲是一位象棋教练。',ex_py:'Wǒ fùqīn shì yí wèi xiàngqí jiàoliàn.',ex_vn:'Bố tôi là một huấn luyện viên cờ tướng.',
   exList:[
     {zh:'我父亲是一位象棋教练。',py:'Wǒ fùqīn shì yí wèi xiàngqí jiàoliàn.',vn:'Bố tôi là một huấn luyện viên cờ tướng.'},
     {zh:'爷爷每天下午都在公园里跟邻居下象棋。',py:'Yéye měi tiān xiàwǔ dōu zài gōngyuán li gēn línjū xià xiàngqí.',vn:'Chiều nào ông nội cũng đánh cờ tướng với hàng xóm trong công viên.'},
     {zh:'这是一盘待下的棋，你先走吧。',py:'Zhè shì yì pán dài xià de qí, nǐ xiān zǒu ba.',vn:'Đây là một ván cờ đang chờ đánh, con đi trước đi.'}
   ],
   colloFull:[
     {zh:'下象棋',py:'xià xiàngqí',vn:'đánh cờ tướng'},
     {zh:'象棋教练',py:'xiàngqí jiàoliàn',vn:'huấn luyện viên cờ tướng'},
     {zh:'一盘棋',py:'yì pán qí',vn:'một ván cờ'},
     {zh:'棋子',py:'qízǐ',vn:'quân cờ'},
     {zh:'棋盘',py:'qípán',vn:'bàn cờ'}
   ],
   patterns:[
     {s:'下 + 象棋 / 围棋 / 棋',m:'Đánh cờ (tướng / vây)'},
     {s:'一盘 / 一局 + 棋',m:'Một ván cờ (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi bắt đầu học đánh cờ tướng với ông nội từ năm tám tuổi.',answer:'我是八岁开始跟爷爷学下象棋的。',answerPy:'Wǒ shì bā suì kāishǐ gēn yéye xué xià xiàngqí de.',
      note:'Nhấn mạnh thời điểm → 是……的; "đánh cờ" là 下象棋 (không nói 玩象棋).',pair:'是……的'},
     {promptLang:'vi',prompt:'Bố vừa dạy một lần, tôi đã hiểu cách đánh cờ tướng.',answer:'爸爸一教，我就明白怎么下象棋了。',answerPy:'Bàba yì jiāo, wǒ jiù míngbai zěnme xià xiàngqí le.',
      note:'一……就…… nối hai hành động liền nhau; 怎么 + 下象棋 = cách đánh cờ.',pair:'一……就……'}
   ]},

  {n:2,zh:'教练',py:'jiàoliàn',pos:'Danh từ',vn:'huấn luyện viên',hv:'giáo luyện',em:'📋',lesson:1,
   explain:['Người huấn luyện kỹ thuật cho vận động viên, người chơi (thể thao, cờ, lái xe…).'],
   usage:'Đứng sau tên môn: 象棋教练, 篮球教练, 游泳教练; 主教练 = HLV trưởng. Gọi trực tiếp: 王教练! / 教练! Động từ đi kèm: 当 / 请 + 教练.',
   collo:['象棋教练','篮球教练','主教练','当教练'],
   ex_zh:'我父亲是一位象棋教练。',ex_py:'Wǒ fùqīn shì yí wèi xiàngqí jiàoliàn.',ex_vn:'Bố tôi là một huấn luyện viên cờ tướng.',
   exList:[
     {zh:'我父亲是一位象棋教练。',py:'Wǒ fùqīn shì yí wèi xiàngqí jiàoliàn.',vn:'Bố tôi là một huấn luyện viên cờ tướng.'},
     {zh:'我事先跟教练打过招呼，他同意我外出。',py:'Wǒ shìxiān gēn jiàoliàn dǎguo zhāohu, tā tóngyì wǒ wàichū.',vn:'Tôi đã báo trước với huấn luyện viên, thầy đồng ý cho tôi ra ngoài.'},
     {zh:'哥哥大学毕业后当了一名游泳教练。',py:'Gēge dàxué bìyè hòu dāngle yì míng yóuyǒng jiàoliàn.',vn:'Anh trai tôi tốt nghiệp đại học xong thì làm huấn luyện viên bơi lội.'}
   ],
   colloFull:[
     {zh:'象棋教练',py:'xiàngqí jiàoliàn',vn:'huấn luyện viên cờ tướng'},
     {zh:'篮球教练',py:'lánqiú jiàoliàn',vn:'huấn luyện viên bóng rổ'},
     {zh:'主教练',py:'zhǔjiàoliàn',vn:'huấn luyện viên trưởng'},
     {zh:'当教练',py:'dāng jiàoliàn',vn:'làm huấn luyện viên'},
     {zh:'游泳教练',py:'yóuyǒng jiàoliàn',vn:'huấn luyện viên bơi'}
   ],
   patterns:[
     {s:'tên môn + 教练',m:'Huấn luyện viên môn …'},
     {s:'当 / 请 + (一名) + 教练',m:'Làm / mời huấn luyện viên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Huấn luyện viên không những dạy kỹ thuật cho chúng tôi mà cũng quan tâm đến việc học của chúng tôi.',answer:'教练不仅教我们技术，也关心我们的学习。',answerPy:'Jiàoliàn bùjǐn jiāo wǒmen jìshù, yě guānxīn wǒmen de xuéxí.',
      note:'Hai vế cùng chủ ngữ 教练 → 不仅 đứng sau chủ ngữ; 教 + người + kỹ năng.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Chúng tôi bị huấn luyện viên phê bình một trận.',answer:'我们被教练批评了一顿。',answerPy:'Wǒmen bèi jiàoliàn pīpíngle yí dùn.',
      note:'Câu bị động: 被 + người làm + V + 了 + 一顿.',pair:'被'}
   ]},

  {n:3,zh:'答应',py:'dāying',pos:'Động từ',vn:'đồng ý, nhận lời',hv:'đáp ứng',em:'🤝',lesson:1,
   explain:['Đồng ý, nhận lời đề nghị hay yêu cầu của người khác.','(Nghĩa khác) thưa, lên tiếng đáp lại khi được gọi.'],
   usage:'答应 + (người) + việc: 答应他的要求 / 答应帮忙 / 答应我…… . Hay đi với 高兴地 / 爽快地. Phủ định: 不答应 / 没答应. Bẫy: "đáp ứng" tiếng Việt = thoả mãn yêu cầu; 答应 chỉ là "nhận lời".',
   collo:['答应要求','高兴地答应','答应帮忙','没答应'],
   ex_zh:'父亲要跟我下棋，我高兴地答应了。',ex_py:'Fùqīn yào gēn wǒ xià qí, wǒ gāoxìng de dāying le.',ex_vn:'Bố muốn đánh cờ với tôi, tôi vui vẻ nhận lời.',
   exList:[
     {zh:'父亲要跟我下棋，我高兴地答应了。',py:'Fùqīn yào gēn wǒ xià qí, wǒ gāoxìng de dāying le.',vn:'Bố muốn đánh cờ với tôi, tôi vui vẻ nhận lời.'},
     {zh:'妈妈答应我，只要考试考好了，就带我去海边玩儿。',py:'Māma dāying wǒ, zhǐyào kǎoshì kǎohǎo le, jiù dài wǒ qù hǎibiān wánr.',vn:'Mẹ hứa với tôi, chỉ cần thi tốt là sẽ đưa tôi đi biển chơi.'},
     {zh:'他答应了帮我修电脑，可是到现在还没来。',py:'Tā dāyingle bāng wǒ xiū diànnǎo, kěshì dào xiànzài hái méi lái.',vn:'Cậu ấy nhận lời sửa máy tính giúp tôi, nhưng đến giờ vẫn chưa tới.'}
   ],
   colloFull:[
     {zh:'答应要求',py:'dāying yāoqiú',vn:'nhận lời yêu cầu'},
     {zh:'高兴地答应',py:'gāoxìng de dāying',vn:'vui vẻ nhận lời'},
     {zh:'答应帮忙',py:'dāying bāngmáng',vn:'nhận lời giúp đỡ'},
     {zh:'没答应',py:'méi dāying',vn:'không nhận lời'},
     {zh:'爽快地答应',py:'shuǎngkuai de dāying',vn:'nhận lời ngay, dứt khoát'}
   ],
   patterns:[
     {s:'答应 + người + việc',m:'Hứa / nhận lời với ai làm gì'},
     {s:'(高兴 / 爽快)地 + 答应',m:'(Vui vẻ / dứt khoát) nhận lời'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cậu nhận lời giúp tớ, tớ sẽ mời cậu ăn cơm.',answer:'只要你答应帮我，我就请你吃饭。',answerPy:'Zhǐyào nǐ dāying bāng wǒ, wǒ jiù qǐng nǐ chī fàn.',
      note:'答应 + V (帮我); 只要……就…… nêu điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ nhận lời một yêu cầu vô lý như thế.',answer:'我从来没答应过这么不合理的要求。',answerPy:'Wǒ cónglái méi dāyingguo zhème bù hélǐ de yāoqiú.',
      note:'从来没 + V + 过; 答应 + 要求.',pair:'从来没……过'}
   ]},

  {n:4,zh:'损失',py:'sǔnshī',pos:'Động từ / Danh từ',vn:'mất, tổn thất; sự thiệt hại',hv:'tổn thất',em:'📉',lesson:1,
   explain:['Động từ: mất đi, hao hụt (một phần) tiền bạc, người, đồ vật.','Danh từ: sự tổn thất, thiệt hại.'],
   usage:'损失 + số lượng / tân ngữ: 损失大半 / 损失了很多钱. Làm danh từ: 造成损失 / 巨大的损失 / 赔偿损失 / 经济损失. Khác 失去: 损失 = giảm bớt, 失去 = mất hẳn; 失去 không làm danh từ (xem 词语辨析).',
   collo:['损失大半','造成损失','巨大的损失','经济损失'],
   ex_zh:'不到三分钟，我的棋子损失大半。',ex_py:'Bú dào sān fēnzhōng, wǒ de qízǐ sǔnshī dàbàn.',ex_vn:'Chưa đến ba phút, quân cờ của tôi đã mất quá nửa.',
   exList:[
     {zh:'不到三分钟，我的棋子损失大半。',py:'Bú dào sān fēnzhōng, wǒ de qízǐ sǔnshī dàbàn.',vn:'Chưa đến ba phút, quân cờ của tôi đã mất quá nửa.'},
     {zh:'生意失败，他损失了很多钱。',py:'Shēngyi shībài, tā sǔnshīle hěn duō qián.',vn:'Làm ăn thất bại, anh ấy mất rất nhiều tiền.'},
     {zh:'这次火灾造成了巨大的损失。',py:'Zhè cì huǒzāi zàochéngle jùdà de sǔnshī.',vn:'Vụ hoả hoạn lần này đã gây ra tổn thất to lớn.'}
   ],
   colloFull:[
     {zh:'损失大半',py:'sǔnshī dàbàn',vn:'mất quá nửa'},
     {zh:'造成损失',py:'zàochéng sǔnshī',vn:'gây ra thiệt hại'},
     {zh:'巨大的损失',py:'jùdà de sǔnshī',vn:'tổn thất to lớn'},
     {zh:'经济损失',py:'jīngjì sǔnshī',vn:'thiệt hại kinh tế'},
     {zh:'赔偿损失',py:'péicháng sǔnshī',vn:'bồi thường thiệt hại'}
   ],
   patterns:[
     {s:'S + 损失 + (了) + số lượng / N',m:'Mất (bao nhiêu) …'},
     {s:'造成 / 带来 + (巨大的) + 损失',m:'Gây ra tổn thất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điện thoại bị lấy trộm, tôi mất mấy nghìn tệ.',answer:'手机被偷了，我损失了好几千块钱。',answerPy:'Shǒujī bèi tōu le, wǒ sǔnshīle hǎo jǐ qiān kuài qián.',
      note:'被 bị động không cần nêu người làm; 损失 + số tiền (mất một phần tài sản).',pair:'被'},
     {promptLang:'vi',prompt:'Tuy lần này thiệt hại không nhỏ, nhưng anh ấy không nản lòng.',answer:'虽然这次损失不小，但是他没有灰心。',answerPy:'Suīrán zhè cì sǔnshī bù xiǎo, dànshì tā méiyǒu huīxīn.',
      note:'损失 làm danh từ (损失不小); 虽然……但是…… nêu ý trái ngược.',pair:'虽然……但是……'}
   ]},

  {n:5,zh:'睁',py:'zhēng',pos:'Động từ',vn:'mở (mắt)',hv:'tranh',em:'👁️',lesson:1,
   explain:['Mở (mắt). Trái nghĩa: 闭 (nhắm).'],
   usage:'Chỉ dùng với mắt: 睁眼 / 睁开眼睛 / 睁大眼睛 (bảng 词语搭配: 睁 + 开 / 大). Không dùng cho cửa, sách… (mở cửa = 开门, mở sách = 打开书).',
   collo:['睁开眼睛','睁大眼睛','睁眼','睁不开'],
   ex_zh:'早上一睁开眼睛，我就看见窗外下雪了。',ex_py:'Zǎoshang yì zhēngkāi yǎnjing, wǒ jiù kànjiàn chuāng wài xià xuě le.',ex_vn:'Sáng ra vừa mở mắt, tôi đã thấy ngoài cửa sổ tuyết rơi.',
   exList:[
     {zh:'早上一睁开眼睛，我就看见窗外下雪了。',py:'Zǎoshang yì zhēngkāi yǎnjing, wǒ jiù kànjiàn chuāng wài xià xuě le.',vn:'Sáng ra vừa mở mắt, tôi đã thấy ngoài cửa sổ tuyết rơi.'},
     {zh:'孩子们睁大眼睛，认真地听老师讲故事。',py:'Háizimen zhēngdà yǎnjing, rènzhēn de tīng lǎoshī jiǎng gùshi.',vn:'Bọn trẻ mở to mắt, chăm chú nghe cô giáo kể chuyện.'},
     {zh:'阳光太强了，我的眼睛都睁不开了。',py:'Yángguāng tài qiáng le, wǒ de yǎnjing dōu zhēng bu kāi le.',vn:'Nắng gắt quá, mắt tôi không mở ra nổi.'}
   ],
   colloFull:[
     {zh:'睁开眼睛',py:'zhēngkāi yǎnjing',vn:'mở mắt ra'},
     {zh:'睁大眼睛',py:'zhēngdà yǎnjing',vn:'mở to mắt'},
     {zh:'睁眼',py:'zhēng yǎn',vn:'mở mắt'},
     {zh:'睁不开',py:'zhēng bu kāi',vn:'không mở (mắt) ra được'},
     {zh:'睁一只眼，闭一只眼',py:'zhēng yì zhī yǎn, bì yì zhī yǎn',vn:'nhắm mắt làm ngơ'}
   ],
   patterns:[
     {s:'睁 + 开 / 大 + (眼睛)',m:'Mở (to) mắt (bảng 词语搭配)'},
     {s:'睁一只眼，闭一只眼',m:'Nhắm mắt làm ngơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa mở mắt ra, tôi đã nghĩ đến kỳ thi hôm nay.',answer:'我一睁开眼睛，就想到了今天的考试。',answerPy:'Wǒ yì zhēngkāi yǎnjing, jiù xiǎngdàole jīntiān de kǎoshì.',
      note:'睁开 + 眼睛; 一……就…… hai việc nối tiếp nhau ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ánh sáng mạnh quá, đến mắt tôi cũng không mở ra được.',answer:'光太强了，我连眼睛都睁不开。',answerPy:'Guāng tài qiáng le, wǒ lián yǎnjing dōu zhēng bu kāi.',
      note:'Bổ ngữ khả năng phủ định 睁不开; 连……都…… nhấn mạnh.',pair:'连……都……'}
   ]},

  {n:6,zh:'眼睁睁',py:'yǎnzhēngzhēng',pos:'Tính từ',vn:'trơ mắt (nhìn)',hv:'nhãn tranh tranh',em:'😳',lesson:1,
   explain:['Mở mắt nhìn mà không làm gì được — bất lực, đành trơ mắt nhìn sự việc xảy ra. (Từ phụ của mục 5 睁 trong bảng 生词.)'],
   usage:'Hầu như chỉ làm trạng ngữ trước 看着: 眼睁睁(地)看着 + sự việc; hay đi với 只能 / 就这样. Mang sắc thái bất lực, tiếc nuối, đôi khi trách "sao không làm gì".',
   collo:['眼睁睁地看着','只能眼睁睁地看着','眼睁睁看着机会失去'],
   ex_zh:'没办法，眼睁睁看着父亲“将军”，我输了。',ex_py:'Méi bànfǎ, yǎnzhēngzhēng kànzhe fùqīn “jiāng jūn”, wǒ shū le.',ex_vn:'Hết cách, tôi trơ mắt nhìn bố "chiếu tướng", tôi thua.',
   exList:[
     {zh:'没办法，眼睁睁看着父亲“将军”，我输了。',py:'Méi bànfǎ, yǎnzhēngzhēng kànzhe fùqīn “jiāng jūn”, wǒ shū le.',vn:'Hết cách, tôi trơ mắt nhìn bố "chiếu tướng", tôi thua.'},
     {zh:'你就这样眼睁睁地看着他摔倒了？！',py:'Nǐ jiù zhèyàng yǎnzhēngzhēng de kànzhe tā shuāidǎo le?!',vn:'Cậu cứ thế trơ mắt nhìn cậu ấy ngã à?!'},
     {zh:'公共汽车开走了，我只能眼睁睁地看着。',py:'Gōnggòng qìchē kāizǒu le, wǒ zhǐ néng yǎnzhēngzhēng de kànzhe.',vn:'Xe buýt chạy mất rồi, tôi chỉ biết trơ mắt đứng nhìn.'}
   ],
   colloFull:[
     {zh:'眼睁睁地看着',py:'yǎnzhēngzhēng de kànzhe',vn:'trơ mắt nhìn'},
     {zh:'只能眼睁睁地看着',py:'zhǐ néng yǎnzhēngzhēng de kànzhe',vn:'chỉ biết trơ mắt nhìn'},
     {zh:'眼睁睁看着机会失去',py:'yǎnzhēngzhēng kànzhe jīhuì shīqù',vn:'trơ mắt nhìn cơ hội vụt mất'},
     {zh:'眼睁睁地看着他摔倒',py:'yǎnzhēngzhēng de kànzhe tā shuāidǎo',vn:'trơ mắt nhìn cậu ấy ngã'}
   ],
   patterns:[
     {s:'(只能 / 就这样) + 眼睁睁(地) + 看着 + sự việc',m:'(Chỉ biết / cứ thế) trơ mắt nhìn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chỉ biết trơ mắt nhìn quân cờ của mình bị bố ăn hết.',answer:'我只能眼睁睁地看着自己的棋子被父亲吃掉。',answerPy:'Wǒ zhǐ néng yǎnzhēngzhēng de kànzhe zìjǐ de qízǐ bèi fùqīn chīdiào.',
      note:'眼睁睁地 + 看着 + cả một mệnh đề bị động (棋子被父亲吃掉).',pair:'被'},
     {promptLang:'vi',prompt:'Mọi người đều trơ mắt đứng nhìn, đến một người giúp cũng không có.',answer:'大家都眼睁睁地看着，连一个帮忙的人都没有。',answerPy:'Dàjiā dōu yǎnzhēngzhēng de kànzhe, lián yí ge bāngmáng de rén dōu méiyǒu.',
      note:'连 + 一个…… + 都没有 nhấn mạnh "không có lấy một".',pair:'连……都……'}
   ]},

  {n:7,zh:'将军',py:'jiāngjūn / jiāng jūn',pos:'Danh từ / Động từ',vn:'tướng quân; chiếu tướng (trong đánh cờ)',hv:'tướng quân',em:'🎖️',lesson:1,
   explain:['Danh từ (jiāngjūn): tướng quân, tướng lĩnh cấp cao trong quân đội.','Động từ (jiāng jūn): chiếu tướng — nước cờ tấn công thẳng vào quân tướng của đối phương; nghĩa bóng: làm khó, dồn ai vào thế bí.'],
   usage:'Trong cờ tướng hô “将军！” (Chiếu tướng!). Khi là động từ, 将 là động từ, 军 là tân ngữ nên tách được: 将了他一军 (dồn anh ta vào thế bí). Làm danh từ: 一位将军 / 老将军.',
   collo:['将军','将了一军','一位将军','老将军'],
   ex_zh:'眼睁睁看着父亲“将军”，我输了。',ex_py:'Yǎnzhēngzhēng kànzhe fùqīn “jiāng jūn”, wǒ shū le.',ex_vn:'Trơ mắt nhìn bố "chiếu tướng", tôi thua.',
   exList:[
     {zh:'眼睁睁看着父亲“将军”，我输了。',py:'Yǎnzhēngzhēng kànzhe fùqīn “jiāng jūn”, wǒ shū le.',vn:'Trơ mắt nhìn bố "chiếu tướng", tôi thua.'},
     {zh:'他问了一个很难的问题，把老师将了一军。',py:'Tā wènle yí ge hěn nán de wèntí, bǎ lǎoshī jiāngle yì jūn.',vn:'Cậu ấy hỏi một câu rất khó, làm thầy giáo lúng túng.'},
     {zh:'这位老将军年轻时参加过很多次战争。',py:'Zhè wèi lǎo jiāngjūn niánqīng shí cānjiāguo hěn duō cì zhànzhēng.',vn:'Vị lão tướng này thời trẻ đã tham gia rất nhiều cuộc chiến.'}
   ],
   colloFull:[
     {zh:'将军',py:'jiāng jūn',vn:'chiếu tướng!'},
     {zh:'将了一军',py:'jiāngle yì jūn',vn:'chiếu một nước; làm khó ai'},
     {zh:'一位将军',py:'yí wèi jiāngjūn',vn:'một vị tướng quân'},
     {zh:'老将军',py:'lǎo jiāngjūn',vn:'lão tướng'},
     {zh:'被将了一军',py:'bèi jiāngle yì jūn',vn:'bị dồn vào thế bí'}
   ],
   patterns:[
     {s:'(把 + người) + 将(了)一军',m:'Chiếu tướng; (bóng) làm ai lúng túng'},
     {s:'一位 + 将军',m:'Một vị tướng quân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu hỏi của học sinh làm thầy giáo lúng túng (chiếu tướng thầy).',answer:'学生的问题把老师将了一军。',answerPy:'Xuésheng de wèntí bǎ lǎoshī jiāngle yì jūn.',
      note:'将军 tách ra: 将了 + người + 一军; với 把: 把 + người + 将了一军.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi vừa đi nước cờ này, bố đã chiếu tướng ngay.',answer:'我一走这步棋，父亲就“将军”了。',answerPy:'Wǒ yì zǒu zhè bù qí, fùqīn jiù “jiāng jūn” le.',
      note:'Đi một nước cờ = 走一步棋; 将军 ở đây là động từ (jiāng jūn).',pair:'一……就……'}
   ]},

  {n:8,zh:'服气',py:'fúqì',pos:'Động từ',vn:'chịu phục, chịu thua',hv:'phục khí',em:'😤',lesson:1,
   explain:['Thật lòng chịu phục, chịu thua; rất hay dùng ở dạng phủ định 不服气 = không phục, không cam lòng.'],
   usage:'不服气 / 很不服气 / 服气了; 对 + người + 服气 (phục ai); 让人服气 = khiến người ta tâm phục. Thường dùng trong khẩu ngữ.',
   collo:['不服气','很不服气','让人服气','服气了'],
   ex_zh:'我不服气，说：“这次运气不好，再来！”',ex_py:'Wǒ bù fúqì, shuō: “Zhè cì yùnqi bù hǎo, zài lái!”',ex_vn:'Tôi không phục, nói: "Lần này xui thôi, chơi lại!"',
   exList:[
     {zh:'我不服气，说：“这次运气不好，再来！”',py:'Wǒ bù fúqì, shuō: “Zhè cì yùnqi bù hǎo, zài lái!”',vn:'Tôi không phục, nói: "Lần này xui thôi, chơi lại!"'},
     {zh:'他的汉语说得比我好多了，我不得不服气。',py:'Tā de Hànyǔ shuō de bǐ wǒ hǎo duō le, wǒ bù dé bù fúqì.',vn:'Cậu ấy nói tiếng Trung giỏi hơn tôi nhiều, tôi không thể không phục.'},
     {zh:'输了比赛，队员们都很不服气，决定明年再来。',py:'Shūle bǐsài, duìyuánmen dōu hěn bù fúqì, juédìng míngnián zài lái.',vn:'Thua trận, các cầu thủ đều rất không cam lòng, quyết định năm sau đấu lại.'}
   ],
   colloFull:[
     {zh:'不服气',py:'bù fúqì',vn:'không phục'},
     {zh:'很不服气',py:'hěn bù fúqì',vn:'rất không phục'},
     {zh:'让人服气',py:'ràng rén fúqì',vn:'khiến người ta phục'},
     {zh:'服气了',py:'fúqì le',vn:'chịu phục rồi'},
     {zh:'不得不服气',py:'bù dé bù fúqì',vn:'không thể không phục'}
   ],
   patterns:[
     {s:'(很) + 不服气',m:'Không phục, không cam lòng'},
     {s:'对 + người + 服气 / 让人服气',m:'Phục ai / khiến người ta phục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thua ván cờ, nhưng cậu ấy vẫn rất không phục.',answer:'虽然输了这局棋，但是他还是很不服气。',answerPy:'Suīrán shūle zhè jú qí, dànshì tā háishi hěn bù fúqì.',
      note:'很 + 不服气; lượng từ của ván cờ là 局.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cậu ấy càng thua càng không phục.',answer:'他越输越不服气。',answerPy:'Tā yuè shū yuè bù fúqì.',
      note:'越 A 越 B: mức độ B tăng theo A.',pair:'越……越……'}
   ]},

  {n:9,zh:'运气',py:'yùnqi',pos:'Danh từ',vn:'vận may, số đỏ',hv:'vận khí',em:'🍀',lesson:1,
   explain:['Vận may, sự may rủi (số tốt hay xấu trong một việc).'],
   usage:'运气好 / 运气不好 / 运气不错 / 碰运气 (thử vận may) / 靠运气. Không nói 很运气; muốn nói "may mắn" dùng 运气很好 hoặc 幸运.',
   collo:['运气不好','运气不错','碰运气','好运气'],
   ex_zh:'这次运气不好，再来！',ex_py:'Zhè cì yùnqi bù hǎo, zài lái!',ex_vn:'Lần này xui thôi, chơi lại!',
   exList:[
     {zh:'这次运气不好，再来！',py:'Zhè cì yùnqi bù hǎo, zài lái!',vn:'Lần này xui thôi, chơi lại!'},
     {zh:'小刘运气真不错，刚来一年就成了主力队员。',py:'Xiǎo Liú yùnqi zhēn búcuò, gāng lái yì nián jiù chéngle zhǔlì duìyuán.',vn:'Tiểu Lưu may thật, mới đến một năm đã thành cầu thủ chủ lực.'},
     {zh:'我没复习，只能去考场碰碰运气了。',py:'Wǒ méi fùxí, zhǐ néng qù kǎochǎng pèngpeng yùnqi le.',vn:'Tôi chưa ôn bài, chỉ có thể vào phòng thi thử vận may thôi.'}
   ],
   colloFull:[
     {zh:'运气不好',py:'yùnqi bù hǎo',vn:'xui, không may'},
     {zh:'运气不错',py:'yùnqi búcuò',vn:'khá may'},
     {zh:'碰运气',py:'pèng yùnqi',vn:'thử vận may'},
     {zh:'好运气',py:'hǎo yùnqi',vn:'vận may'},
     {zh:'靠运气',py:'kào yùnqi',vn:'dựa vào may mắn'}
   ],
   patterns:[
     {s:'运气 + 好 / 不好 / 不错',m:'May / xui'},
     {s:'碰碰运气 / 靠运气',m:'Thử vận may / dựa vào may rủi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nỗ lực là có thể thành công, không cần dựa vào vận may.',answer:'只要努力，就能成功，不用靠运气。',answerPy:'Zhǐyào nǔlì, jiù néng chénggōng, bú yòng kào yùnqi.',
      note:'靠运气 = dựa vào may mắn; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Vận may của cậu ấy càng ngày càng tốt.',answer:'他的运气越来越好了。',answerPy:'Tā de yùnqi yuè lái yuè hǎo le.',
      note:'运气 + 好 (không nói 很运气); 越来越 + Adj + 了.',pair:'越来越'}
   ]},

  {n:10,zh:'局',py:'jú',pos:'Lượng từ',vn:'ván (cờ, trận đấu)',hv:'cục',em:'🎲',lesson:1,
   explain:['Lượng từ: ván, séc, hiệp (cờ, bóng bàn, cầu lông…).','(Nghĩa khác, danh từ) cục diện, tình thế: 全局, 局面.'],
   usage:'Số + 局 + (棋 / 比赛): 一局棋 / 第二局 / 三局两胜. 几局下来 = sau mấy ván (động từ + 下来 chỉ quá trình đã xong). 局 gần 盘 (一盘棋) nhưng dùng được cho nhiều môn thi đấu hơn.',
   collo:['第二局','一局棋','几局下来','三局两胜'],
   ex_zh:'第二局又输了。',ex_py:'Dì-èr jú yòu shū le.',ex_vn:'Ván thứ hai lại thua.',
   exList:[
     {zh:'第二局又输了。',py:'Dì-èr jú yòu shū le.',vn:'Ván thứ hai lại thua.'},
     {zh:'几局下来，基本上都是不到10分钟我就败下阵来。',py:'Jǐ jú xiàlai, jīběnshang dōu shì bú dào shí fēnzhōng wǒ jiù bàixià zhèn lai.',vn:'Mấy ván trôi qua, ván nào cũng chưa đến 10 phút là tôi đã thua trận.'},
     {zh:'乒乓球比赛三局两胜，我们已经赢了第一局。',py:'Pīngpāngqiú bǐsài sān jú liǎng shèng, wǒmen yǐjīng yíngle dì-yī jú.',vn:'Trận bóng bàn thắng hai trong ba ván, chúng tôi đã thắng ván đầu.'}
   ],
   colloFull:[
     {zh:'第二局',py:'dì-èr jú',vn:'ván thứ hai'},
     {zh:'一局棋',py:'yì jú qí',vn:'một ván cờ'},
     {zh:'几局下来',py:'jǐ jú xiàlai',vn:'sau mấy ván'},
     {zh:'三局两胜',py:'sān jú liǎng shèng',vn:'thắng hai trong ba ván'},
     {zh:'下一局',py:'xià yì jú',vn:'ván sau'}
   ],
   patterns:[
     {s:'Số + 局 + (棋 / 比赛)',m:'… ván (cờ / đấu)'},
     {s:'几局下来，……',m:'Sau mấy ván, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mấy ván trôi qua, tôi đến một ván cũng không thắng.',answer:'几局下来，我连一局都没赢。',answerPy:'Jǐ jú xiàlai, wǒ lián yì jú dōu méi yíng.',
      note:'几局下来 (động từ + 下来); 连一局都没 + V nhấn mạnh "không lấy một ván".',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ thắng bố một ván nào.',answer:'我从来没赢过父亲一局。',answerPy:'Wǒ cónglái méi yíngguo fùqīn yì jú.',
      note:'赢 + người + số ván; 从来没 + V + 过.',pair:'从来没……过'}
   ]},

  {n:11,zh:'发挥',py:'fāhuī',pos:'Động từ',vn:'phát huy, thể hiện',hv:'phát huy',em:'🚀',lesson:1,
   explain:['Thể hiện, bộc lộ hết năng lực hay tác dụng vốn có (thường nói về thi cử, thi đấu).'],
   usage:'发挥 + 作用 / 水平 / 能力 / 优势. 发挥得好 / 没发挥好 / 超水平发挥 / 充分(地)发挥 / 尽情(地)发挥 (bảng 词语搭配). Tiếng Việt "phát huy" dùng hẹp hơn; 发挥好 thường dịch là "thể hiện tốt".',
   collo:['发挥作用','充分发挥','超水平发挥','没发挥好'],
   ex_zh:'这次没发挥好，我们再来！',ex_py:'Zhè cì méi fāhuī hǎo, wǒmen zài lái!',ex_vn:'Lần này con chưa thể hiện tốt, mình chơi lại!',
   exList:[
     {zh:'这次没发挥好，我们再来！',py:'Zhè cì méi fāhuī hǎo, wǒmen zài lái!',vn:'Lần này con chưa thể hiện tốt, mình chơi lại!'},
     {zh:'今年他的状态很好，可以说是超水平发挥了。',py:'Jīnnián tā de zhuàngtài hěn hǎo, kěyǐ shuō shì chāo shuǐpíng fāhuī le.',vn:'Năm nay phong độ của cậu ấy rất tốt, có thể nói là thể hiện vượt trình độ.'},
     {zh:'希望你在比赛中发挥好，赛出好成绩！',py:'Xīwàng nǐ zài bǐsài zhōng fāhuī hǎo, sàichū hǎo chéngjì!',vn:'Mong bạn thể hiện tốt trong cuộc thi, đạt thành tích cao!'}
   ],
   colloFull:[
     {zh:'发挥作用',py:'fāhuī zuòyòng',vn:'phát huy tác dụng'},
     {zh:'充分发挥',py:'chōngfèn fāhuī',vn:'phát huy đầy đủ'},
     {zh:'超水平发挥',py:'chāo shuǐpíng fāhuī',vn:'thể hiện vượt trình độ'},
     {zh:'没发挥好',py:'méi fāhuī hǎo',vn:'thể hiện chưa tốt'},
     {zh:'尽情地发挥',py:'jìnqíng de fāhuī',vn:'thoả sức thể hiện'}
   ],
   patterns:[
     {s:'发挥 + 作用 / 水平 / 能力',m:'Phát huy …'},
     {s:'充分 / 尽情(地) + 发挥',m:'Phát huy hết mức (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần không căng thẳng, bạn sẽ thể hiện được đúng trình độ của mình.',answer:'只要不紧张，你就能发挥出自己的水平。',answerPy:'Zhǐyào bù jǐnzhāng, nǐ jiù néng fāhuī chū zìjǐ de shuǐpíng.',
      note:'发挥出 + 水平; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy cậu ấy luyện tập rất chăm, nhưng trong trận đấu lại không thể hiện tốt.',answer:'虽然他练习得很努力，但是在比赛中没发挥好。',answerPy:'Suīrán tā liànxí de hěn nǔlì, dànshì zài bǐsài zhōng méi fāhuī hǎo.',
      note:'没发挥好 = thể hiện chưa tốt (phủ định bổ ngữ kết quả dùng 没).',pair:'虽然……但是……'}
   ]},

  {n:12,zh:'灰心',py:'huīxīn',pos:'Tính từ',vn:'nản lòng, chán nản',hv:'hôi tâm',em:'😞',lesson:1,
   explain:['Nản lòng, mất tinh thần vì gặp thất bại, khó khăn.'],
   usage:'有些 / 有点儿 + 灰心; 别灰心 / 不要灰心; 灰心丧气 (thành ngữ). Khác 死心: 灰心 = nản (còn có thể cố tiếp), 死心 = hết hy vọng hẳn, thôi không nghĩ tới nữa.',
   collo:['有些灰心','别灰心','灰心丧气','感到灰心'],
   ex_zh:'我有些灰心。',ex_py:'Wǒ yǒuxiē huīxīn.',ex_vn:'Tôi hơi nản lòng.',
   exList:[
     {zh:'我有些灰心。',py:'Wǒ yǒuxiē huīxīn.',vn:'Tôi hơi nản lòng.'},
     {zh:'你也别灰心，论实力你未必比她差。',py:'Nǐ yě bié huīxīn, lùn shílì nǐ wèibì bǐ tā chà.',vn:'Cậu cũng đừng nản, xét về thực lực cậu chưa chắc đã kém cô ấy.'},
     {zh:'这几次考试我都考得不太好，觉得有点儿灰心。',py:'Zhè jǐ cì kǎoshì wǒ dōu kǎo de bú tài hǎo, juéde yǒudiǎnr huīxīn.',vn:'Mấy lần thi này tôi đều làm bài không tốt lắm, thấy hơi nản.'}
   ],
   colloFull:[
     {zh:'有些灰心',py:'yǒuxiē huīxīn',vn:'hơi nản lòng'},
     {zh:'别灰心',py:'bié huīxīn',vn:'đừng nản'},
     {zh:'灰心丧气',py:'huīxīn-sàngqì',vn:'chán nản ủ rũ'},
     {zh:'感到灰心',py:'gǎndào huīxīn',vn:'cảm thấy nản'},
     {zh:'从不灰心',py:'cóng bù huīxīn',vn:'chưa bao giờ nản'}
   ],
   patterns:[
     {s:'(有些 / 有点儿) + 灰心',m:'Hơi nản lòng'},
     {s:'别 / 不要 + 灰心',m:'Đừng nản lòng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ thất bại là nản lòng thì làm sao thành công được?',answer:'一失败就灰心，怎么能成功呢？',answerPy:'Yì shībài jiù huīxīn, zěnme néng chénggōng ne?',
      note:'一……就…… = hễ … là …; câu hỏi tu từ 怎么能……呢.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy đã thua rất nhiều lần, nhưng anh ấy không nản chút nào.',answer:'虽然输了很多次，但是他一点儿也不灰心。',answerPy:'Suīrán shūle hěn duō cì, dànshì tā yìdiǎnr yě bù huīxīn.',
      note:'一点儿也不 + Adj = không … chút nào.',pair:'虽然……但是……'}
   ]},

  {n:13,zh:'吸取',py:'xīqǔ',pos:'Động từ',vn:'hấp thu, rút ra (bài học, kinh nghiệm)',hv:'hấp thủ',em:'🧽',lesson:1,
   explain:['Tiếp nhận, rút ra (bài học, kinh nghiệm) — dùng cho điều trừu tượng.'],
   usage:'吸取 + 教训 / 经验 (bảng 词语搭配: 接受 / 总结 / 吸取 + 教训). Khác 吸收: 吸收 dùng cho vật chất (营养, 水分) và kiến thức; "rút ra bài học" là 吸取教训, không nói 吸收教训.',
   collo:['吸取教训','吸取经验','吸取别人的经验'],
   ex_zh:'你要知道输在什么地方，要吸取教训。',ex_py:'Nǐ yào zhīdào shū zài shénme dìfang, yào xīqǔ jiàoxùn.',ex_vn:'Con phải biết mình thua ở chỗ nào, phải rút ra bài học.',
   exList:[
     {zh:'你要知道输在什么地方，要吸取教训。',py:'Nǐ yào zhīdào shū zài shénme dìfang, yào xīqǔ jiàoxùn.',vn:'Con phải biết mình thua ở chỗ nào, phải rút ra bài học.'},
     {zh:'到了新公司，你一定要吸取教训，争取留用。',py:'Dàole xīn gōngsī, nǐ yídìng yào xīqǔ jiàoxùn, zhēngqǔ liúyòng.',vn:'Đến công ty mới, cậu nhất định phải rút kinh nghiệm, cố gắng để được giữ lại làm.'},
     {zh:'我们要多吸取别人的经验，少走弯路。',py:'Wǒmen yào duō xīqǔ biérén de jīngyàn, shǎo zǒu wānlù.',vn:'Chúng ta nên học hỏi nhiều kinh nghiệm của người khác để bớt đi đường vòng.'}
   ],
   colloFull:[
     {zh:'吸取教训',py:'xīqǔ jiàoxùn',vn:'rút ra bài học'},
     {zh:'吸取经验',py:'xīqǔ jīngyàn',vn:'rút kinh nghiệm'},
     {zh:'吸取别人的经验',py:'xīqǔ biérén de jīngyàn',vn:'học hỏi kinh nghiệm người khác'},
     {zh:'吸取失败的教训',py:'xīqǔ shībài de jiàoxùn',vn:'rút bài học từ thất bại'}
   ],
   patterns:[
     {s:'吸取 + 教训 / 经验',m:'Rút ra bài học / kinh nghiệm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có rút ra bài học mới tránh được việc sau này lại mắc cùng một lỗi.',answer:'只有吸取教训，才能避免以后再犯同样的错误。',answerPy:'Zhǐyǒu xīqǔ jiàoxùn, cái néng bìmiǎn yǐhòu zài fàn tóngyàng de cuòwù.',
      note:'只有……才…… nêu điều kiện duy nhất; 犯 + 错误.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Anh ta chẳng những không rút ra bài học, mà còn trách người khác.',answer:'他不仅没有吸取教训，还责备别人。',answerPy:'Tā bùjǐn méiyǒu xīqǔ jiàoxùn, hái zébèi biérén.',
      note:'不仅……还…… tăng tiến; 责备 + người.',pair:'不仅……还……'}
   ]},

  {n:14,zh:'教训',py:'jiàoxùn',pos:'Danh từ / Động từ',vn:'bài học (kinh nghiệm); dạy dỗ, răn dạy',hv:'giáo huấn',em:'📚',lesson:1,
   explain:['Danh từ: bài học rút ra từ sai lầm, thất bại.','Động từ: răn dạy, "dạy cho một bài học" (thường là mắng, phạt).'],
   usage:'接受 / 总结 / 吸取 + 教训 (bảng 词语搭配); 深刻的教训 = bài học sâu sắc; 给……一个教训. Làm động từ: 教训孩子 / 被教训了一顿. Bẫy: "giáo huấn" tiếng Việt chỉ là dạy bảo; 教训 danh từ chủ yếu là "bài học từ thất bại".',
   collo:['吸取教训','接受教训','总结教训','深刻的教训'],
   ex_zh:'这次失败给了我一个深刻的教训。',ex_py:'Zhè cì shībài gěile wǒ yí ge shēnkè de jiàoxùn.',ex_vn:'Lần thất bại này đã cho tôi một bài học sâu sắc.',
   exList:[
     {zh:'这次失败给了我一个深刻的教训。',py:'Zhè cì shībài gěile wǒ yí ge shēnkè de jiàoxùn.',vn:'Lần thất bại này đã cho tôi một bài học sâu sắc.'},
     {zh:'吸取教训才能避免以后再次发生同样的问题。',py:'Xīqǔ jiàoxùn cái néng bìmiǎn yǐhòu zàicì fāshēng tóngyàng de wèntí.',vn:'Rút ra bài học thì mới tránh được việc sau này lại xảy ra vấn đề tương tự.'},
     {zh:'我们应该认真总结教训，以后不能再犯同样的错误。',py:'Wǒmen yīnggāi rènzhēn zǒngjié jiàoxùn, yǐhòu bù néng zài fàn tóngyàng de cuòwù.',vn:'Chúng ta nên nghiêm túc tổng kết bài học, sau này không được mắc lại lỗi như vậy.'}
   ],
   colloFull:[
     {zh:'吸取教训',py:'xīqǔ jiàoxùn',vn:'rút ra bài học'},
     {zh:'接受教训',py:'jiēshòu jiàoxùn',vn:'tiếp thu bài học'},
     {zh:'总结教训',py:'zǒngjié jiàoxùn',vn:'tổng kết bài học'},
     {zh:'深刻的教训',py:'shēnkè de jiàoxùn',vn:'bài học sâu sắc'},
     {zh:'教训孩子',py:'jiàoxùn háizi',vn:'dạy dỗ (mắng) con'}
   ],
   patterns:[
     {s:'吸取 / 接受 / 总结 + 教训',m:'Rút ra / tiếp thu / tổng kết bài học'},
     {s:'给 + người + 一个教训',m:'Cho ai một bài học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần bị lừa này đã cho tôi một bài học sâu sắc.',answer:'这次被骗给了我一个深刻的教训。',answerPy:'Zhè cì bèi piàn gěile wǒ yí ge shēnkè de jiàoxùn.',
      note:'Cụm bị động 被骗 làm chủ ngữ; 给 + người + 一个教训.',pair:'被'},
     {promptLang:'vi',prompt:'Hãy ghi bài học của lần này vào sổ.',answer:'把这次的教训写在本子上吧。',answerPy:'Bǎ zhè cì de jiàoxùn xiě zài běnzi shang ba.',
      note:'把 + tân ngữ + V + 在 + nơi chốn.',pair:'把'}
   ]},

  {n:15,zh:'未必',py:'wèibì',pos:'Phó từ',vn:'chưa chắc, không hẳn',hv:'vị tất',em:'🤔',lesson:1,
   explain:['Chưa chắc, không hẳn — phủ định một cách nhẹ nhàng, uyển chuyển.'],
   usage:'Đứng sau chủ ngữ, trước động từ / tính từ: 他未必知道 / 未必能赢 / 未必比她差. Có thể trả lời độc lập: 那也未必. Nghĩa = 不一定 nhưng mang sắc thái văn viết hơn. Tiếng Việt "vị tất" cũng nghĩa là chưa chắc.',
   collo:['未必能赢','未必知道','未必是好事','那也未必'],
   ex_zh:'否则，你就再下上10年，也未必能赢。',ex_py:'Fǒuzé, nǐ jiù zài xiàshang shí nián, yě wèibì néng yíng.',ex_vn:'Nếu không, con có đánh thêm mười năm nữa cũng chưa chắc thắng được.',
   exList:[
     {zh:'否则，你就再下上10年，也未必能赢。',py:'Fǒuzé, nǐ jiù zài xiàshang shí nián, yě wèibì néng yíng.',vn:'Nếu không, con có đánh thêm mười năm nữa cũng chưa chắc thắng được.'},
     {zh:'你说得这么复杂，我觉得他未必能听懂。',py:'Nǐ shuō de zhème fùzá, wǒ juéde tā wèibì néng tīngdǒng.',vn:'Cậu nói phức tạp thế, tớ thấy cậu ấy chưa chắc đã hiểu.'},
     {zh:'贵的东西未必都是好东西。',py:'Guì de dōngxi wèibì dōu shì hǎo dōngxi.',vn:'Đồ đắt chưa chắc đều là đồ tốt.'}
   ],
   colloFull:[
     {zh:'未必能赢',py:'wèibì néng yíng',vn:'chưa chắc thắng được'},
     {zh:'未必知道',py:'wèibì zhīdào',vn:'chưa chắc đã biết'},
     {zh:'未必是好事',py:'wèibì shì hǎoshì',vn:'chưa chắc là chuyện tốt'},
     {zh:'那也未必',py:'nà yě wèibì',vn:'cũng chưa chắc đâu'},
     {zh:'未必比她差',py:'wèibì bǐ tā chà',vn:'chưa chắc kém cô ấy'}
   ],
   patterns:[
     {s:'S + 未必 + (能 / 会 / 是) + V',m:'Chưa chắc …'},
     {s:'A + 未必比 + B + Adj',m:'A chưa chắc … hơn B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù có học thêm mười năm, cậu cũng chưa chắc thắng được.',answer:'即使再学十年，你也未必能赢。',answerPy:'Jíshǐ zài xué shí nián, nǐ yě wèibì néng yíng.',
      note:'即使……也…… nêu giả thiết nhượng bộ; 未必 đứng sau 也.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Đồ không phải càng đắt càng tốt, đồ đắt chưa chắc đã tốt.',answer:'东西不是越贵越好，贵的未必好。',answerPy:'Dōngxi bú shì yuè guì yuè hǎo, guì de wèibì hǎo.',
      note:'越 A 越 B; 未必 + Adj.',pair:'越……越……'}
   ]},

  {n:16,zh:'次要',py:'cìyào',pos:'Tính từ',vn:'thứ yếu, không quan trọng bằng',hv:'thứ yếu',em:'🔽',lesson:1,
   explain:['Không quan trọng bằng, đứng hàng thứ hai. Trái nghĩa: 主要.'],
   usage:'Làm định ngữ: 次要因素 / 次要问题; làm vị ngữ: ……是次要的. Hay đi với 主要 để đối chiếu: 主要问题 ↔ 次要问题.',
   collo:['次要因素','次要问题','是次要的'],
   ex_zh:'这只是次要因素，不是最重要的。',ex_py:'Zhè zhǐ shì cìyào yīnsù, bú shì zuì zhòngyào de.',ex_vn:'Đó chỉ là yếu tố thứ yếu, không phải điều quan trọng nhất.',
   exList:[
     {zh:'这只是次要因素，不是最重要的。',py:'Zhè zhǐ shì cìyào yīnsù, bú shì zuì zhòngyào de.',vn:'Đó chỉ là yếu tố thứ yếu, không phải điều quan trọng nhất.'},
     {zh:'钱是次要的，最重要的是你喜欢这份工作。',py:'Qián shì cìyào de, zuì zhòngyào de shì nǐ xǐhuan zhè fèn gōngzuò.',vn:'Tiền là thứ yếu, quan trọng nhất là bạn thích công việc này.'},
     {zh:'我们先解决主要问题，次要问题以后再说。',py:'Wǒmen xiān jiějué zhǔyào wèntí, cìyào wèntí yǐhòu zài shuō.',vn:'Chúng ta giải quyết vấn đề chính trước, vấn đề phụ tính sau.'}
   ],
   colloFull:[
     {zh:'次要因素',py:'cìyào yīnsù',vn:'yếu tố thứ yếu'},
     {zh:'次要问题',py:'cìyào wèntí',vn:'vấn đề thứ yếu'},
     {zh:'是次要的',py:'shì cìyào de',vn:'là thứ yếu'},
     {zh:'主要和次要',py:'zhǔyào hé cìyào',vn:'chính và phụ'}
   ],
   patterns:[
     {s:'……是次要的，(最)重要的是……',m:'… là thứ yếu, quan trọng (nhất) là …'},
     {s:'次要 + 因素 / 问题',m:'Yếu tố / vấn đề thứ yếu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kỹ thuật không phải là yếu tố chính, mà chỉ là yếu tố thứ yếu.',answer:'技术不是主要因素，而只是次要因素。',answerPy:'Jìshù bú shì zhǔyào yīnsù, ér zhǐ shì cìyào yīnsù.',
      note:'不是 A，而是 B; 主要 ↔ 次要.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Tuy kinh nghiệm là yếu tố thứ yếu, nhưng cũng không thể không coi trọng.',answer:'虽然经验是次要因素，但是也不能不重视。',answerPy:'Suīrán jīngyàn shì cìyào yīnsù, dànshì yě bù néng bú zhòngshì.',
      note:'不能不 + V = phải, không thể không.',pair:'虽然……但是……'}
   ]},

  {n:17,zh:'因素',py:'yīnsù',pos:'Danh từ',vn:'nhân tố, yếu tố',hv:'nhân tố',em:'🧩',lesson:1,
   explain:['Yếu tố, thành phần quyết định sự thành bại hay tính chất của sự việc.'],
   usage:'重要 / 决定(性) / 关键 + 因素 (bảng 词语搭配); 次要因素; 影响……的因素. Tiếng Việt hay dịch là "yếu tố".',
   collo:['重要因素','决定性因素','关键因素','次要因素'],
   ex_zh:'工作压力太大、不能兼顾工作和家庭是影响幸福感的重要因素。',ex_py:'Gōngzuò yālì tài dà, bù néng jiāngù gōngzuò hé jiātíng shì yǐngxiǎng xìngfúgǎn de zhòngyào yīnsù.',ex_vn:'Áp lực công việc quá lớn, không thể cùng lúc lo được công việc và gia đình là những yếu tố quan trọng ảnh hưởng đến cảm giác hạnh phúc.',
   exList:[
     {zh:'工作压力太大、不能兼顾工作和家庭是影响幸福感的重要因素。',py:'Gōngzuò yālì tài dà, bù néng jiāngù gōngzuò hé jiātíng shì yǐngxiǎng xìngfúgǎn de zhòngyào yīnsù.',vn:'Áp lực công việc quá lớn, không thể cùng lúc lo được công việc và gia đình là những yếu tố quan trọng ảnh hưởng đến cảm giác hạnh phúc.'},
     {zh:'这只是次要因素，不是最重要的。',py:'Zhè zhǐ shì cìyào yīnsù, bú shì zuì zhòngyào de.',vn:'Đó chỉ là yếu tố thứ yếu, không phải điều quan trọng nhất.'},
     {zh:'心态是比赛成功的关键因素。',py:'Xīntài shì bǐsài chénggōng de guānjiàn yīnsù.',vn:'Tâm lý là yếu tố then chốt để thi đấu thành công.'}
   ],
   colloFull:[
     {zh:'重要因素',py:'zhòngyào yīnsù',vn:'yếu tố quan trọng'},
     {zh:'决定性因素',py:'juédìngxìng yīnsù',vn:'yếu tố quyết định'},
     {zh:'关键因素',py:'guānjiàn yīnsù',vn:'yếu tố then chốt'},
     {zh:'次要因素',py:'cìyào yīnsù',vn:'yếu tố thứ yếu'},
     {zh:'影响健康的因素',py:'yǐngxiǎng jiànkāng de yīnsù',vn:'yếu tố ảnh hưởng đến sức khoẻ'}
   ],
   patterns:[
     {s:'重要 / 关键 / 决定性 + 因素',m:'Yếu tố quan trọng / then chốt / quyết định'},
     {s:'……是影响……的(重要)因素',m:'… là yếu tố (quan trọng) ảnh hưởng đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người càng ngày càng coi trọng yếu tố môi trường.',answer:'人们越来越重视环境因素。',answerPy:'Rénmen yuè lái yuè zhòngshì huánjìng yīnsù.',
      note:'越来越 + động từ tâm lý (重视); 环境因素 = yếu tố môi trường.',pair:'越来越'},
     {promptLang:'vi',prompt:'Không chỉ năng lực, tâm lý cũng là một yếu tố quan trọng.',answer:'不仅能力，心态也是一个重要因素。',answerPy:'Bùjǐn nénglì, xīntài yě shì yí ge zhòngyào yīnsù.',
      note:'不仅 A，B 也……; 重要因素 (bảng 词语搭配).',pair:'不仅……也……'}
   ]},

  {n:18,zh:'在于',py:'zàiyú',pos:'Động từ',vn:'cốt ở, nằm ở; do … quyết định',hv:'tại vu',em:'🎯',lesson:1,
   explain:['Chỉ ra bản chất, nguyên nhân hay mấu chốt của sự việc nằm ở đâu.','(Nghĩa khác) do … quyết định: 去不去在于你.'],
   usage:'Chủ ngữ thường là 问题 / 关键 / 原因 / 目的 / 意义: 问题在于…… / 关键在于…… + danh từ hoặc mệnh đề. 不在于 A，而在于 B = không nằm ở A mà nằm ở B.',
   collo:['问题在于','关键在于','原因在于','在于你自己'],
   ex_zh:'最重要的问题在于你心态不对。',ex_py:'Zuì zhòngyào de wèntí zàiyú nǐ xīntài bú duì.',ex_vn:'Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng.',
   exList:[
     {zh:'最重要的问题在于你心态不对。',py:'Zuì zhòngyào de wèntí zàiyú nǐ xīntài bú duì.',vn:'Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng.'},
     {zh:'我看，老板没有糟糕的，关键在于你怎样去和他沟通。',py:'Wǒ kàn, lǎobǎn méiyǒu zāogāo de, guānjiàn zàiyú nǐ zěnyàng qù hé tā gōutōng.',vn:'Theo tôi, chẳng có ông chủ nào tệ cả, mấu chốt nằm ở chỗ bạn giao tiếp với ông ấy thế nào.'},
     {zh:'学习好不好，不在于时间多少，而在于方法对不对。',py:'Xuéxí hǎo bu hǎo, bú zàiyú shíjiān duōshǎo, ér zàiyú fāngfǎ duì bu duì.',vn:'Học giỏi hay không, không nằm ở thời gian nhiều hay ít, mà ở phương pháp đúng hay sai.'}
   ],
   colloFull:[
     {zh:'问题在于',py:'wèntí zàiyú',vn:'vấn đề nằm ở chỗ'},
     {zh:'关键在于',py:'guānjiàn zàiyú',vn:'mấu chốt nằm ở chỗ'},
     {zh:'原因在于',py:'yuányīn zàiyú',vn:'nguyên nhân nằm ở'},
     {zh:'在于你自己',py:'zàiyú nǐ zìjǐ',vn:'do chính bạn quyết định'},
     {zh:'不在于……而在于……',py:'bú zàiyú … ér zàiyú …',vn:'không nằm ở … mà nằm ở …'}
   ],
   patterns:[
     {s:'问题 / 关键 / 原因 + 在于 + N / mệnh đề',m:'Vấn đề / mấu chốt / nguyên nhân nằm ở …'},
     {s:'不在于 A，而在于 B',m:'Không nằm ở A mà nằm ở B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành công không nằm ở vận may, mà nằm ở sự nỗ lực.',answer:'成功不在于运气，而在于努力。',answerPy:'Chénggōng bú zàiyú yùnqi, ér zàiyú nǔlì.',
      note:'不在于 A，而在于 B — biến thể của 不是……而是…….',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Có đi hay không là do chính cậu quyết định.',answer:'去不去在于你自己。',answerPy:'Qù bu qù zàiyú nǐ zìjǐ.',
      note:'Chủ ngữ là cụm chính phản (去不去); 在于 + người = do ai quyết định.',pair:'V不V (câu chính phản)'}
   ]},

  {n:19,zh:'心态',py:'xīntài',pos:'Danh từ',vn:'tâm lý, trạng thái tâm lý',hv:'tâm thái',em:'🧘',lesson:1,
   explain:['Trạng thái tâm lý, thái độ bên trong khi đối mặt với sự việc.'],
   usage:'心态好 / 心态不对 / 调整心态 / 保持良好的心态 / 心态平和. Khác 心情 (tâm trạng vui buồn nhất thời): 心态 là cách nhìn, thái độ ổn định hơn.',
   collo:['心态不对','调整心态','良好的心态','心态平和'],
   ex_zh:'最重要的问题在于你心态不对。',ex_py:'Zuì zhòngyào de wèntí zàiyú nǐ xīntài bú duì.',ex_vn:'Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng.',
   exList:[
     {zh:'最重要的问题在于你心态不对。',py:'Zuì zhòngyào de wèntí zàiyú nǐ xīntài bú duì.',vn:'Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng.'},
     {zh:'考试前要调整好心态，不要太紧张。',py:'Kǎoshì qián yào tiáozhěng hǎo xīntài, búyào tài jǐnzhāng.',vn:'Trước khi thi phải điều chỉnh tốt tâm lý, đừng quá căng thẳng.'},
     {zh:'保持良好的心态，比什么都重要。',py:'Bǎochí liánghǎo de xīntài, bǐ shénme dōu zhòngyào.',vn:'Giữ được tâm lý tốt quan trọng hơn bất cứ thứ gì.'}
   ],
   colloFull:[
     {zh:'心态不对',py:'xīntài bú duì',vn:'tâm lý không đúng'},
     {zh:'调整心态',py:'tiáozhěng xīntài',vn:'điều chỉnh tâm lý'},
     {zh:'良好的心态',py:'liánghǎo de xīntài',vn:'tâm lý tốt'},
     {zh:'心态平和',py:'xīntài pínghé',vn:'tâm lý bình thản'},
     {zh:'保持心态',py:'bǎochí xīntài',vn:'giữ tâm lý'}
   ],
   patterns:[
     {s:'调整 / 保持 + (良好的) + 心态',m:'Điều chỉnh / giữ (tốt) tâm lý'},
     {s:'心态 + 好 / 不对 / 平和',m:'Tâm lý …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần giữ được tâm lý tốt thì sẽ thể hiện tốt.',answer:'只要保持良好的心态，就能发挥好。',answerPy:'Zhǐyào bǎochí liánghǎo de xīntài, jiù néng fāhuī hǎo.',
      note:'保持 + 良好的心态; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tâm lý của cậu ấy càng ngày càng bình thản.',answer:'他的心态越来越平和了。',answerPy:'Tā de xīntài yuè lái yuè pínghé le.',
      note:'心态 + 平和; 越来越 + Adj + 了.',pair:'越来越'}
   ]},

  {n:20,zh:'珍惜',py:'zhēnxī',pos:'Động từ',vn:'quý trọng, trân trọng',hv:'trân tích',em:'💎',lesson:1,
   explain:['Quý trọng, biết giữ gìn và không lãng phí điều quý giá (thời gian, cơ hội, tình cảm, sinh mạng…).'],
   usage:'珍惜 + 时间 / 现在 / 朋友 / 生命 / 机会 (bảng 词语搭配); 不够珍惜 / 过于珍惜. Là ĐỘNG TỪ — đừng nhầm với tính từ 珍贵 (quý giá): 珍贵的礼物 nhưng 珍惜时间.',
   collo:['珍惜时间','珍惜现在','珍惜朋友','珍惜生命','珍惜机会'],
   ex_zh:'你不够珍惜你的棋子。',ex_py:'Nǐ bú gòu zhēnxī nǐ de qízǐ.',ex_vn:'Con chưa đủ quý trọng quân cờ của mình.',
   exList:[
     {zh:'你不够珍惜你的棋子。',py:'Nǐ bú gòu zhēnxī nǐ de qízǐ.',vn:'Con chưa đủ quý trọng quân cờ của mình.'},
     {zh:'上次的机会我没有珍惜，这次一定好好表现。',py:'Shàng cì de jīhuì wǒ méiyǒu zhēnxī, zhè cì yídìng hǎohāo biǎoxiàn.',vn:'Lần trước tôi đã không trân trọng cơ hội, lần này nhất định sẽ thể hiện thật tốt.'},
     {zh:'请珍惜你已经拥有的一切。',py:'Qǐng zhēnxī nǐ yǐjīng yōngyǒu de yíqiè.',vn:'Hãy trân trọng tất cả những gì bạn đang có.'}
   ],
   colloFull:[
     {zh:'珍惜时间',py:'zhēnxī shíjiān',vn:'quý trọng thời gian'},
     {zh:'珍惜现在',py:'zhēnxī xiànzài',vn:'trân trọng hiện tại'},
     {zh:'珍惜朋友',py:'zhēnxī péngyou',vn:'quý trọng bạn bè'},
     {zh:'珍惜生命',py:'zhēnxī shēngmìng',vn:'quý trọng sinh mạng'},
     {zh:'珍惜机会',py:'zhēnxī jīhuì',vn:'trân trọng cơ hội'}
   ],
   patterns:[
     {s:'珍惜 + 时间 / 机会 / 生命 / 朋友',m:'Quý trọng … (bảng 词语搭配)'},
     {s:'(不够 / 过于) + 珍惜',m:'Chưa đủ / quá quý trọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phải đợi đến khi mất đi rồi tôi mới biết trân trọng.',answer:'等到失去了，我才知道珍惜。',answerPy:'Děngdào shīqù le, wǒ cái zhīdào zhēnxī.',
      note:'等到……才…… = mãi đến khi … mới … (才 chỉ sự muộn màng).',pair:'……才……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ quý trọng thời gian như bây giờ.',answer:'我从来没像现在这样珍惜过时间。',answerPy:'Wǒ cónglái méi xiàng xiànzài zhèyàng zhēnxīguo shíjiān.',
      note:'从来没 + (像……这样) + V + 过 + tân ngữ.',pair:'从来没……过'}
   ]},

  {n:21,zh:'否认',py:'fǒurèn',pos:'Động từ',vn:'phủ nhận, bác bỏ',hv:'phủ nhận',em:'🙅',lesson:1,
   explain:['Không thừa nhận (sự thật, lời nói, việc mình đã làm). Trái nghĩa: 承认 (bài 22).'],
   usage:'否认 + sự thật / mệnh đề: 否认这一点 / 否认说…… / 不否认……. 不可否认 = không thể phủ nhận (mở đầu câu, văn viết).',
   collo:['否认说','不否认','否认事实','不可否认'],
   ex_zh:'“怎么不珍惜呀？我每走一步，都想半天。”我否认说。',ex_py:'“Zěnme bù zhēnxī ya? Wǒ měi zǒu yí bù, dōu xiǎng bàntiān.” Wǒ fǒurèn shuō.',ex_vn:'"Sao lại không quý chứ? Mỗi nước đi con đều nghĩ rất lâu." Tôi cãi lại.',
   exList:[
     {zh:'“怎么不珍惜呀？我每走一步，都想半天。”我否认说。',py:'“Zěnme bù zhēnxī ya? Wǒ měi zǒu yí bù, dōu xiǎng bàntiān.” Wǒ fǒurèn shuō.',vn:'"Sao lại không quý chứ? Mỗi nước đi con đều nghĩ rất lâu." Tôi cãi lại.'},
     {zh:'我对小林是有些看法，这一点儿我不否认。',py:'Wǒ duì Xiǎo Lín shì yǒuxiē kànfǎ, zhè yìdiǎnr wǒ bù fǒurèn.',vn:'Tôi đúng là có chút ý kiến về Tiểu Lâm, điều này tôi không phủ nhận.'},
     {zh:'不可否认，手机给我们的生活带来了很多方便。',py:'Bù kě fǒurèn, shǒujī gěi wǒmen de shēnghuó dàiláile hěn duō fāngbiàn.',vn:'Không thể phủ nhận, điện thoại đã mang lại nhiều tiện lợi cho cuộc sống của chúng ta.'}
   ],
   colloFull:[
     {zh:'否认说',py:'fǒurèn shuō',vn:'phủ nhận rằng'},
     {zh:'不否认',py:'bù fǒurèn',vn:'không phủ nhận'},
     {zh:'否认事实',py:'fǒurèn shìshí',vn:'phủ nhận sự thật'},
     {zh:'不可否认',py:'bù kě fǒurèn',vn:'không thể phủ nhận'},
     {zh:'坚决否认',py:'jiānjué fǒurèn',vn:'kiên quyết phủ nhận'}
   ],
   patterns:[
     {s:'否认 + sự việc / mệnh đề',m:'Phủ nhận …'},
     {s:'不可否认，……',m:'Không thể phủ nhận rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy phủ nhận việc chính cậu ấy làm vỡ cửa sổ.',answer:'他否认是他把窗户打破的。',answerPy:'Tā fǒurèn shì tā bǎ chuānghu dǎpò de.',
      note:'否认 + mệnh đề; bên trong dùng 是……的 và 把.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy anh ta phủ nhận, nhưng mọi người đều biết là anh ta làm.',answer:'虽然他否认了，但是大家都知道是他做的。',answerPy:'Suīrán tā fǒurèn le, dànshì dàjiā dōu zhīdào shì tā zuò de.',
      note:'是他做的 nhấn mạnh người làm (是……的).',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'观察',py:'guānchá',pos:'Động từ',vn:'quan sát, theo dõi',hv:'quan sát',em:'🔍',lesson:1,
   explain:['Xem xét kỹ, theo dõi cẩn thận sự vật, hiện tượng (nhìn có chủ đích).'],
   usage:'认真 / 仔细(地) + 观察 (bảng 词语搭配); 观察 + đối tượng; 观察过 / 观察一下; 观察能力. Khác 看: 观察 là nhìn kỹ để tìm ra điều gì đó.',
   collo:['仔细观察','认真观察','观察周围','观察能力'],
   ex_zh:'我仔细观察过，你三分之二的棋子是在前三分之一的时间失去的。',ex_py:'Wǒ zǐxì guāncháguo, nǐ sān fēn zhī èr de qízǐ shì zài qián sān fēn zhī yī de shíjiān shīqù de.',ex_vn:'Bố đã quan sát kỹ rồi, hai phần ba số quân cờ của con là mất trong một phần ba thời gian đầu.',
   exList:[
     {zh:'我仔细观察过，你三分之二的棋子是在前三分之一的时间失去的。',py:'Wǒ zǐxì guāncháguo, nǐ sān fēn zhī èr de qízǐ shì zài qián sān fēn zhī yī de shíjiān shīqù de.',vn:'Bố đã quan sát kỹ rồi, hai phần ba số quân cờ của con là mất trong một phần ba thời gian đầu.'},
     {zh:'仔细观察周围的大自然，你会发现很多有意思的东西。',py:'Zǐxì guānchá zhōuwéi de dàzìrán, nǐ huì fāxiàn hěn duō yǒu yìsi de dōngxi.',vn:'Quan sát kỹ thiên nhiên xung quanh, bạn sẽ phát hiện nhiều điều thú vị.'},
     {zh:'医生让他在医院再观察两天。',py:'Yīshēng ràng tā zài yīyuàn zài guānchá liǎng tiān.',vn:'Bác sĩ bảo anh ấy ở lại bệnh viện theo dõi thêm hai ngày.'}
   ],
   colloFull:[
     {zh:'仔细观察',py:'zǐxì guānchá',vn:'quan sát kỹ'},
     {zh:'认真观察',py:'rènzhēn guānchá',vn:'quan sát nghiêm túc'},
     {zh:'观察周围',py:'guānchá zhōuwéi',vn:'quan sát xung quanh'},
     {zh:'观察能力',py:'guānchá nénglì',vn:'khả năng quan sát'},
     {zh:'观察一下',py:'guānchá yíxià',vn:'quan sát một chút'}
   ],
   patterns:[
     {s:'认真 / 仔细(地) + 观察 + N',m:'Quan sát kỹ … (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần quan sát kỹ, bạn sẽ phát hiện ra vấn đề.',answer:'只要仔细观察，你就会发现问题。',answerPy:'Zhǐyào zǐxì guānchá, nǐ jiù huì fāxiàn wèntí.',
      note:'仔细 + 观察; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi đã quan sát kỹ, cậu ấy chưa bao giờ đi muộn.',answer:'我仔细观察过，他从来没迟到过。',answerPy:'Wǒ zǐxì guāncháguo, tā cónglái méi chídàoguo.',
      note:'观察过 = đã từng quan sát; 从来没 + V + 过.',pair:'从来没……过'}
   ]},

  {n:23,zh:'失去',py:'shīqù',pos:'Động từ',vn:'mất, mất đi',hv:'thất khứ',em:'🍂',lesson:1,
   explain:['Mất đi (hoàn toàn) cái vốn có: người thân, cơ hội, trí nhớ, niềm tin, liên lạc…'],
   usage:'失去 + 机会 / 信心 / 记忆 / 家庭 / 联系. Chỉ là ĐỘNG TỪ, không làm danh từ (không nói 巨大的失去 → 巨大的损失). So sánh với 损失 ở mục 词语辨析.',
   collo:['失去机会','失去信心','失去记忆','失去联系'],
   ex_zh:'因为一场病，他失去了记忆。',ex_py:'Yīnwèi yì cháng bìng, tā shīqùle jìyì.',ex_vn:'Vì một trận ốm, anh ấy bị mất trí nhớ.',
   exList:[
     {zh:'开始不考虑得失，等到后来失去得多了，又开始舍不得。',py:'Kāishǐ bù kǎolǜ déshī, děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude.',vn:'Lúc đầu không tính toán được mất, đến khi về sau mất nhiều rồi lại bắt đầu tiếc.'},
     {zh:'因为一场病，他失去了记忆。',py:'Yīnwèi yì cháng bìng, tā shīqùle jìyì.',vn:'Vì một trận ốm, anh ấy bị mất trí nhớ.'},
     {zh:'多好的机会失去了，我的经验就是，有机会一定要好好把握。',py:'Duō hǎo de jīhuì shīqù le, wǒ de jīngyàn jiù shì, yǒu jīhuì yídìng yào hǎohāo bǎwò.',vn:'Cơ hội tốt biết bao đã mất rồi, kinh nghiệm của tôi là có cơ hội nhất định phải nắm lấy.'}
   ],
   colloFull:[
     {zh:'失去机会',py:'shīqù jīhuì',vn:'mất cơ hội'},
     {zh:'失去信心',py:'shīqù xìnxīn',vn:'mất niềm tin, mất tự tin'},
     {zh:'失去记忆',py:'shīqù jìyì',vn:'mất trí nhớ'},
     {zh:'失去联系',py:'shīqù liánxì',vn:'mất liên lạc'},
     {zh:'失去家庭',py:'shīqù jiātíng',vn:'mất gia đình'}
   ],
   patterns:[
     {s:'失去 + (了) + N (trừu tượng / người thân)',m:'Mất …'},
     {s:'为了 A，愿意失去 B',m:'Vì A, sẵn sàng mất B (câu trong bài)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiến tranh đã khiến ông ấy mất đi gia đình.',answer:'战争让他失去了家庭。',answerPy:'Zhànzhēng ràng tā shīqùle jiātíng.',
      note:'Câu kiêm ngữ 让 + người + V; 失去 + 家庭 (mất hẳn).',pair:'让 (câu kiêm ngữ)'},
     {promptLang:'vi',prompt:'Dù thua liền mấy ván, cậu ấy cũng không mất tự tin.',answer:'即使连输几局，他也没有失去信心。',answerPy:'Jíshǐ lián shū jǐ jú, tā yě méiyǒu shīqù xìnxīn.',
      note:'即使……也……; 连 + V + số lượng = liền mấy ….',pair:'即使……也……'}
   ]},

  {n:24,zh:'期间',py:'qījiān',pos:'Danh từ',vn:'thời gian, thời kỳ (trong khoảng)',hv:'kỳ gian',em:'📅',lesson:1,
   explain:['Khoảng thời gian nhất định trong lúc diễn ra một việc.'],
   usage:'Đứng sau cụm chỉ sự việc: 比赛期间 / 放假期间 / (在)国外工作期间 / 这期间. Khác 时期: 时期 là giai đoạn dài, mang tính lịch sử hoặc đời người (青春时期, 困难时期).',
   collo:['这期间','比赛期间','放假期间','工作期间'],
   ex_zh:'这期间你好像很有把握。',ex_py:'Zhè qījiān nǐ hǎoxiàng hěn yǒu bǎwò.',ex_vn:'Trong khoảng thời gian này con có vẻ rất chắc chắn.',
   exList:[
     {zh:'这期间你好像很有把握。',py:'Zhè qījiān nǐ hǎoxiàng hěn yǒu bǎwò.',vn:'Trong khoảng thời gian này con có vẻ rất chắc chắn.'},
     {zh:'比赛期间，任何队员都不能随便外出。',py:'Bǐsài qījiān, rènhé duìyuán dōu bù néng suíbiàn wàichū.',vn:'Trong thời gian thi đấu, bất kỳ cầu thủ nào cũng không được tuỳ tiện ra ngoài.'},
     {zh:'在国外工作期间，我一直很想念我的家乡和家人。',py:'Zài guówài gōngzuò qījiān, wǒ yìzhí hěn xiǎngniàn wǒ de jiāxiāng hé jiārén.',vn:'Trong thời gian làm việc ở nước ngoài, tôi luôn nhớ quê hương và gia đình.'}
   ],
   colloFull:[
     {zh:'这期间',py:'zhè qījiān',vn:'trong thời gian này'},
     {zh:'比赛期间',py:'bǐsài qījiān',vn:'trong thời gian thi đấu'},
     {zh:'放假期间',py:'fàngjià qījiān',vn:'trong kỳ nghỉ'},
     {zh:'工作期间',py:'gōngzuò qījiān',vn:'trong thời gian làm việc'},
     {zh:'留学期间',py:'liúxué qījiān',vn:'thời gian du học'}
   ],
   patterns:[
     {s:'(在) + sự việc + 期间',m:'Trong thời gian …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong thời gian du học ở Trung Quốc, tôi đã đi rất nhiều nơi.',answer:'在中国留学期间，我去过很多地方。',answerPy:'Zài Zhōngguó liúxué qījiān, wǒ qùguo hěn duō dìfang.',
      note:'在 + sự việc + 期间; V + 过 chỉ trải nghiệm.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Trong thời gian thi, điện thoại đều bị thầy giáo thu hết.',answer:'考试期间，手机都被老师收走了。',answerPy:'Kǎoshì qījiān, shǒujī dōu bèi lǎoshī shōuzǒu le.',
      note:'考试期间 đứng đầu câu làm trạng ngữ thời gian; câu 被.',pair:'被'}
   ]},

  {n:25,zh:'把握',py:'bǎwò',pos:'Danh từ / Động từ',vn:'sự chắc chắn; nắm bắt',hv:'bả ác',em:'✊',lesson:1,
   explain:['Danh từ: sự nắm chắc, tự tin (sẽ thành công).','Động từ: nắm, nắm bắt (cơ hội, thời gian, phương hướng).'],
   usage:'Danh từ: 有 / 没有 + 把握, 很有把握, 有把握 + V. Động từ: 把握机会 / 把握好 / 把握住 (bảng 词语搭配: 把握 + 好 / 住). Chú ý 把 ở đây không phải giới từ của câu 把.',
   collo:['很有把握','没有把握','把握机会','把握好','把握住'],
   ex_zh:'这期间你好像很有把握，下棋时不假思索，拿起来就走。',ex_py:'Zhè qījiān nǐ hǎoxiàng hěn yǒu bǎwò, xià qí shí bùjiǎ-sīsuǒ, ná qǐlai jiù zǒu.',ex_vn:'Trong khoảng thời gian này con có vẻ rất chắc chắn, đánh cờ không cần suy nghĩ, cầm quân lên là đi luôn.',
   exList:[
     {zh:'这期间你好像很有把握，下棋时不假思索，拿起来就走。',py:'Zhè qījiān nǐ hǎoxiàng hěn yǒu bǎwò, xià qí shí bùjiǎ-sīsuǒ, ná qǐlai jiù zǒu.',vn:'Trong khoảng thời gian này con có vẻ rất chắc chắn, đánh cờ không cần suy nghĩ, cầm quân lên là đi luôn.'},
     {zh:'只有做好准备的人才能把握住机会。',py:'Zhǐyǒu zuòhǎo zhǔnbèi de rén cái néng bǎwò zhù jīhuì.',vn:'Chỉ người đã chuẩn bị tốt mới nắm được cơ hội.'},
     {zh:'这次考试你有把握吗？',py:'Zhè cì kǎoshì nǐ yǒu bǎwò ma?',vn:'Kỳ thi lần này cậu có chắc chắn không?'}
   ],
   colloFull:[
     {zh:'很有把握',py:'hěn yǒu bǎwò',vn:'rất chắc chắn'},
     {zh:'没有把握',py:'méiyǒu bǎwò',vn:'không chắc chắn'},
     {zh:'把握机会',py:'bǎwò jīhuì',vn:'nắm bắt cơ hội'},
     {zh:'把握好',py:'bǎwò hǎo',vn:'nắm cho tốt'},
     {zh:'把握住',py:'bǎwò zhù',vn:'nắm chắc lấy'}
   ],
   patterns:[
     {s:'(很) + 有 / 没有 + 把握',m:'(Rất) chắc chắn / không chắc'},
     {s:'把握 + 好 / 住 + 机会',m:'Nắm bắt tốt cơ hội (bảng 词语搭配)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ người đã chuẩn bị tốt mới nắm được cơ hội.',answer:'只有做好准备的人才能把握住机会。',answerPy:'Zhǐyǒu zuòhǎo zhǔnbèi de rén cái néng bǎwò zhù jīhuì.',
      note:'把握住 + 机会; 只有……才…….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Lần này tôi không những đã chuẩn bị, mà cũng rất chắc chắn.',answer:'这次我不仅做了准备，也很有把握。',answerPy:'Zhè cì wǒ bùjǐn zuòle zhǔnbèi, yě hěn yǒu bǎwò.',
      note:'很 + 有把握 (把握 là danh từ); 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:26,zh:'不假思索',py:'bùjiǎ-sīsuǒ',pos:'Thành ngữ',vn:'không cần suy nghĩ, buột ra ngay',hv:'bất giả tư sách',em:'⚡',lesson:1,
   explain:['Không cần suy nghĩ — nói hoặc làm ngay lập tức (có thể do rất thạo, cũng có thể do hấp tấp).'],
   usage:'Làm trạng ngữ: 不假思索地回答 / 说 / 走 / 做决定. 假 = mượn, dựa vào; 思索 = suy nghĩ. Gần nghĩa với 想也没想 và 脱口而出 trong bài.',
   collo:['不假思索地回答','下棋时不假思索','不假思索地说'],
   ex_zh:'下棋时不假思索，拿起来就走。',ex_py:'Xià qí shí bùjiǎ-sīsuǒ, ná qǐlai jiù zǒu.',ex_vn:'Đánh cờ không cần suy nghĩ, cầm quân lên là đi luôn.',
   exList:[
     {zh:'下棋时不假思索，拿起来就走。',py:'Xià qí shí bùjiǎ-sīsuǒ, ná qǐlai jiù zǒu.',vn:'Đánh cờ không cần suy nghĩ, cầm quân lên là đi luôn.'},
     {zh:'老师一问，他就不假思索地说出了答案。',py:'Lǎoshī yí wèn, tā jiù bùjiǎ-sīsuǒ de shuōchūle dá\'àn.',vn:'Thầy vừa hỏi, cậu ấy đã nói ngay ra đáp án không cần nghĩ.'},
     {zh:'遇到重要的事，不能不假思索地做决定。',py:'Yùdào zhòngyào de shì, bù néng bùjiǎ-sīsuǒ de zuò juédìng.',vn:'Gặp việc quan trọng thì không thể quyết định mà chẳng suy nghĩ gì.'}
   ],
   colloFull:[
     {zh:'不假思索地回答',py:'bùjiǎ-sīsuǒ de huídá',vn:'trả lời ngay không cần nghĩ'},
     {zh:'下棋时不假思索',py:'xià qí shí bùjiǎ-sīsuǒ',vn:'đánh cờ không suy nghĩ'},
     {zh:'不假思索地说',py:'bùjiǎ-sīsuǒ de shuō',vn:'nói ngay không nghĩ'},
     {zh:'不假思索地做决定',py:'bùjiǎ-sīsuǒ de zuò juédìng',vn:'quyết định mà không suy nghĩ'}
   ],
   patterns:[
     {s:'不假思索(地) + V',m:'Không cần nghĩ mà … ngay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy vừa hỏi, cậu ấy đã trả lời ngay không cần nghĩ.',answer:'老师一问，他就不假思索地回答了。',answerPy:'Lǎoshī yí wèn, tā jiù bùjiǎ-sīsuǒ de huídá le.',
      note:'Thành ngữ làm trạng ngữ + 地 + V; 一……就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Câu hỏi này đến trẻ con cũng trả lời được ngay không cần nghĩ.',answer:'这个问题连小孩子都能不假思索地回答出来。',answerPy:'Zhège wèntí lián xiǎoháizi dōu néng bùjiǎ-sīsuǒ de huídá chūlai.',
      note:'连……都…… nhấn mạnh; 回答出来 = trả lời ra được.',pair:'连……都……'}
   ]},

  {n:27,zh:'犯',py:'fàn',pos:'Động từ',vn:'phạm, mắc (sai lầm, tội…)',hv:'phạm',em:'❌',lesson:1,
   explain:['Mắc, phạm (lỗi, sai lầm, luật…).','(Nghĩa khác) tái phát, lên cơn: 犯病, 犯困 (buồn ngủ díp mắt).'],
   usage:'犯 + 错误 / 毛病 / 法 / 规定: 犯错误 / 犯了相反的错误 / 犯法. Tiếng Việt "mắc lỗi" → 犯错误, không nói 做错误 hay 有错误了.',
   collo:['犯错误','犯法','犯了相反的错误','犯困'],
   ex_zh:'后三分之二的时间，你又犯了相反的错误。',ex_py:'Hòu sān fēn zhī èr de shíjiān, nǐ yòu fànle xiāngfǎn de cuòwù.',ex_vn:'Hai phần ba thời gian sau, con lại mắc sai lầm ngược lại.',
   exList:[
     {zh:'后三分之二的时间，你又犯了相反的错误。',py:'Hòu sān fēn zhī èr de shíjiān, nǐ yòu fànle xiāngfǎn de cuòwù.',vn:'Hai phần ba thời gian sau, con lại mắc sai lầm ngược lại.'},
     {zh:'谁都会犯错误，重要的是要吸取教训。',py:'Shéi dōu huì fàn cuòwù, zhòngyào de shì yào xīqǔ jiàoxùn.',vn:'Ai cũng có thể mắc lỗi, quan trọng là phải rút ra bài học.'},
     {zh:'上课的时候我老犯困，是不是睡得太少了？',py:'Shàngkè de shíhou wǒ lǎo fànkùn, shì bu shì shuì de tài shǎo le?',vn:'Trong giờ học tôi cứ díp mắt, có phải ngủ ít quá không?'}
   ],
   colloFull:[
     {zh:'犯错误',py:'fàn cuòwù',vn:'mắc lỗi'},
     {zh:'犯法',py:'fànfǎ',vn:'phạm pháp'},
     {zh:'犯了相反的错误',py:'fànle xiāngfǎn de cuòwù',vn:'mắc sai lầm ngược lại'},
     {zh:'犯困',py:'fànkùn',vn:'buồn ngủ, díp mắt'},
     {zh:'犯同样的错误',py:'fàn tóngyàng de cuòwù',vn:'mắc cùng một lỗi'}
   ],
   patterns:[
     {s:'犯 + (了) + 错误 / 毛病 / 法',m:'Mắc lỗi / phạm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ mắc lỗi như thế.',answer:'我从来没犯过这样的错误。',answerPy:'Wǒ cónglái méi fànguo zhèyàng de cuòwù.',
      note:'犯 + 过 + 错误; 从来没……过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Một khi đã mắc lỗi thì phải dũng cảm thừa nhận.',answer:'一旦犯了错误，就要勇敢地承认。',answerPy:'Yídàn fànle cuòwù, jiù yào yǒnggǎn de chéngrèn.',
      note:'Ôn 一旦……就…… và 承认 của bài 22.',pair:'一旦……就…… (bài 22)'}
   ]},

  {n:28,zh:'过于',py:'guòyú',pos:'Phó từ',vn:'quá, quá mức',hv:'quá vu',em:'🔺',lesson:1,
   explain:['Quá mức (mang ý chê, sắc thái văn viết).'],
   usage:'过于 + tính từ / động từ hai âm tiết: 过于珍惜 / 过于谨慎 / 过于紧张. Không đi với tính từ một âm tiết (không nói 过于大 → 太大). Gần nghĩa 过分 (bài 22), nhưng 过于 chỉ là phó từ, không làm vị ngữ (không nói 太过于了).',
   collo:['过于珍惜','过于谨慎','过于紧张','过于担心'],
   ex_zh:'对棋子过于珍惜，每走一步都过于谨慎。',ex_py:'Duì qízǐ guòyú zhēnxī, měi zǒu yí bù dōu guòyú jǐnshèn.',ex_vn:'Quá tiếc quân cờ, nước nào cũng quá thận trọng.',
   exList:[
     {zh:'对棋子过于珍惜，每走一步都过于谨慎。',py:'Duì qízǐ guòyú zhēnxī, měi zǒu yí bù dōu guòyú jǐnshèn.',vn:'Quá tiếc quân cờ, nước nào cũng quá thận trọng.'},
     {zh:'考试的时候不要过于紧张，正常发挥就好。',py:'Kǎoshì de shíhou búyào guòyú jǐnzhāng, zhèngcháng fāhuī jiù hǎo.',vn:'Khi thi đừng quá căng thẳng, thể hiện bình thường là được.'},
     {zh:'父母过于担心孩子，反而会给孩子带来压力。',py:'Fùmǔ guòyú dānxīn háizi, fǎn\'ér huì gěi háizi dàilái yālì.',vn:'Cha mẹ quá lo cho con, ngược lại sẽ gây áp lực cho con.'}
   ],
   colloFull:[
     {zh:'过于珍惜',py:'guòyú zhēnxī',vn:'quá quý, quá tiếc'},
     {zh:'过于谨慎',py:'guòyú jǐnshèn',vn:'quá thận trọng'},
     {zh:'过于紧张',py:'guòyú jǐnzhāng',vn:'quá căng thẳng'},
     {zh:'过于担心',py:'guòyú dānxīn',vn:'quá lo lắng'},
     {zh:'过于自信',py:'guòyú zìxìn',vn:'quá tự tin'}
   ],
   patterns:[
     {s:'过于 + Adj / V (hai âm tiết)',m:'Quá … (ý chê)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quá căng thẳng không những ảnh hưởng đến việc thể hiện, mà cũng ảnh hưởng đến sức khoẻ.',answer:'过于紧张不仅影响发挥，也影响身体。',answerPy:'Guòyú jǐnzhāng bùjǐn yǐngxiǎng fāhuī, yě yǐngxiǎng shēntǐ.',
      note:'Cụm 过于紧张 làm chủ ngữ; 不仅……也…….',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Vì quá thận trọng, cậu ấy ngược lại để mất cơ hội.',answer:'因为过于谨慎，他反而失去了机会。',answerPy:'Yīnwèi guòyú jǐnshèn, tā fǎn\'ér shīqùle jīhuì.',
      note:'反而 = ngược lại (kết quả trái mong đợi) — giống câu trong bài 反而一个一个都失去了.',pair:'反而'}
   ]},

  {n:29,zh:'原则',py:'yuánzé',pos:'Danh từ',vn:'nguyên tắc',hv:'nguyên tắc',em:'📏',lesson:1,
   explain:['Quy tắc cơ bản, chuẩn mực mà lời nói, hành động phải tuân theo.'],
   usage:'一个 / 一条 + 原则 (bảng 词语搭配); 基本原则 / 坚持原则 / 违反原则 / 有原则 / 原则上 (về nguyên tắc). Tiếng Việt dùng y hệt "nguyên tắc".',
   collo:['基本原则','坚持原则','一条原则','原则上'],
   ex_zh:'我问你，下棋的基本原则是什么？',ex_py:'Wǒ wèn nǐ, xià qí de jīběn yuánzé shì shénme?',ex_vn:'Bố hỏi con, nguyên tắc cơ bản của việc đánh cờ là gì?',
   exList:[
     {zh:'我问你，下棋的基本原则是什么？',py:'Wǒ wèn nǐ, xià qí de jīběn yuánzé shì shénme?',vn:'Bố hỏi con, nguyên tắc cơ bản của việc đánh cờ là gì?'},
     {zh:'他是一个很有原则的人，不该做的事从来不做。',py:'Tā shì yí ge hěn yǒu yuánzé de rén, bù gāi zuò de shì cónglái bú zuò.',vn:'Anh ấy là người rất có nguyên tắc, việc không nên làm thì không bao giờ làm.'},
     {zh:'原则上，考试的时候不能带手机进教室。',py:'Yuánzéshang, kǎoshì de shíhou bù néng dài shǒujī jìn jiàoshì.',vn:'Về nguyên tắc, khi thi không được mang điện thoại vào phòng.'}
   ],
   colloFull:[
     {zh:'基本原则',py:'jīběn yuánzé',vn:'nguyên tắc cơ bản'},
     {zh:'坚持原则',py:'jiānchí yuánzé',vn:'giữ vững nguyên tắc'},
     {zh:'一条原则',py:'yì tiáo yuánzé',vn:'một nguyên tắc'},
     {zh:'原则上',py:'yuánzéshang',vn:'về nguyên tắc'},
     {zh:'违反原则',py:'wéifǎn yuánzé',vn:'vi phạm nguyên tắc'}
   ],
   patterns:[
     {s:'……的基本原则是……',m:'Nguyên tắc cơ bản của … là …'},
     {s:'坚持 / 违反 + 原则',m:'Giữ vững / vi phạm nguyên tắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù là bạn thân, anh ấy cũng không vi phạm nguyên tắc.',answer:'即使是好朋友，他也不会违反原则。',answerPy:'Jíshǐ shì hǎo péngyou, tā yě bú huì wéifǎn yuánzé.',
      note:'违反 + 原则; 即使……也…….',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Nguyên tắc này bị cậu ấy quên mất rồi.',answer:'这条原则被他忘了。',answerPy:'Zhè tiáo yuánzé bèi tā wàng le.',
      note:'Lượng từ 条 (bảng 词语搭配: 一个 / 条 + 原则); câu 被.',pair:'被'}
   ]},

  {n:30,zh:'责备',py:'zébèi',pos:'Động từ',vn:'quở trách, trách móc',hv:'trách bị',em:'😠',lesson:1,
   explain:['Trách, phê bình lỗi lầm của người khác (thường kèm thái độ không hài lòng).'],
   usage:'责备 + người / 责备自己 / 受到责备; 责备的眼光 / 语气 / 话. So với 批评: 批评 trang trọng, có thể góp ý công khai; 责备 nặng về cảm xúc trách móc.',
   collo:['责备的眼光','责备别人','受到责备','责备自己'],
   ex_zh:'父亲用责备的眼光看了我一眼。',ex_py:'Fùqīn yòng zébèi de yǎnguāng kànle wǒ yì yǎn.',ex_vn:'Bố nhìn tôi một cái với ánh mắt trách móc.',
   exList:[
     {zh:'父亲用责备的眼光看了我一眼。',py:'Fùqīn yòng zébèi de yǎnguāng kànle wǒ yì yǎn.',vn:'Bố nhìn tôi một cái với ánh mắt trách móc.'},
     {zh:'你遇到问题总爱责备别人，就不想从自己身上找找原因。',py:'Nǐ yùdào wèntí zǒng ài zébèi biérén, jiù bù xiǎng cóng zìjǐ shēnshang zhǎozhao yuányīn.',vn:'Gặp chuyện là anh chỉ thích trách người khác, chẳng chịu tìm nguyên nhân ở chính mình.'},
     {zh:'老板的责备把职员们都吓坏了。',py:'Lǎobǎn de zébèi bǎ zhíyuánmen dōu xiàhuài le.',vn:'Lời quở trách của ông chủ làm các nhân viên sợ hết hồn.'}
   ],
   colloFull:[
     {zh:'责备的眼光',py:'zébèi de yǎnguāng',vn:'ánh mắt trách móc'},
     {zh:'责备别人',py:'zébèi biérén',vn:'trách người khác'},
     {zh:'受到责备',py:'shòudào zébèi',vn:'bị trách'},
     {zh:'责备自己',py:'zébèi zìjǐ',vn:'tự trách mình'},
     {zh:'责备的语气',py:'zébèi de yǔqì',vn:'giọng trách móc'}
   ],
   patterns:[
     {s:'责备 + người / 受到 + 责备',m:'Trách ai / bị trách'},
     {s:'用责备的眼光 / 语气 + V',m:'Với ánh mắt / giọng trách móc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời quở trách của ông chủ làm các nhân viên sợ hết hồn.',answer:'老板的责备把职员们都吓坏了。',answerPy:'Lǎobǎn de zébèi bǎ zhíyuánmen dōu xiàhuài le.',
      note:'责备 làm danh từ (老板的责备); 把 + người + 吓坏了.',pair:'把'},
     {promptLang:'vi',prompt:'Cậu ấy làm hỏng việc, bị mẹ trách một trận.',answer:'他把事情弄糟了，被妈妈责备了一顿。',answerPy:'Tā bǎ shìqing nòngzāo le, bèi māma zébèile yí dùn.',
      note:'Vế 1 câu 把, vế 2 câu 被 + 责备了一顿.',pair:'被'}
   ]},

  {n:31,zh:'必然',py:'bìrán',pos:'Tính từ',vn:'tất yếu, thế nào cũng, chắc chắn',hv:'tất nhiên',em:'🔗',lesson:1,
   explain:['Tất yếu, nhất định sẽ như vậy (theo quy luật, không thể khác).'],
   usage:'Làm trạng ngữ: 有得必然有失 / 必然会……; làm định ngữ: 必然的结果 / 必然趋势 (bài 22: 与道德没有必然的关系). BẪY: "tất nhiên" tiếng Việt = "đương nhiên" (当然); 必然 là "tất yếu" — không dùng để trả lời "tất nhiên rồi!".',
   collo:['必然有失','必然结果','必然会','必然的关系'],
   ex_zh:'有得必然有失，有失才会有得。',ex_py:'Yǒu dé bìrán yǒu shī, yǒu shī cái huì yǒu dé.',ex_vn:'Có được ắt có mất, có mất mới có được.',
   exList:[
     {zh:'有得必然有失，有失才会有得。',py:'Yǒu dé bìrán yǒu shī, yǒu shī cái huì yǒu dé.',vn:'Có được ắt có mất, có mất mới có được.'},
     {zh:'不努力学习，考试必然考不好。',py:'Bù nǔlì xuéxí, kǎoshì bìrán kǎo bu hǎo.',vn:'Không chăm học thì thi chắc chắn không tốt.'},
     {zh:'成功是长期努力的必然结果。',py:'Chénggōng shì chángqī nǔlì de bìrán jiéguǒ.',vn:'Thành công là kết quả tất yếu của nỗ lực lâu dài.'}
   ],
   colloFull:[
     {zh:'必然有失',py:'bìrán yǒu shī',vn:'ắt sẽ có mất'},
     {zh:'必然结果',py:'bìrán jiéguǒ',vn:'kết quả tất yếu'},
     {zh:'必然会',py:'bìrán huì',vn:'chắc chắn sẽ'},
     {zh:'必然的关系',py:'bìrán de guānxi',vn:'mối quan hệ tất yếu'},
     {zh:'必然趋势',py:'bìrán qūshì',vn:'xu thế tất yếu'}
   ],
   patterns:[
     {s:'有 A 必然有 B',m:'Có A ắt có B'},
     {s:'……是……的必然结果',m:'… là kết quả tất yếu của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì, bạn chắc chắn sẽ tiến bộ.',answer:'只要坚持下去，你就必然会进步。',answerPy:'Zhǐyào jiānchí xiàqu, nǐ jiù bìrán huì jìnbù.',
      note:'必然会 + V; 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nếu không nghĩ kỹ từ trước, thất bại sẽ là kết quả tất yếu.',answer:'如果事先不想清楚，失败就是必然的结果。',answerPy:'Rúguǒ shìxiān bù xiǎng qīngchu, shībài jiù shì bìrán de jiéguǒ.',
      note:'必然的结果 (định ngữ); 如果……就…….',pair:'如果……就……'}
   ]},

  {n:32,zh:'事先',py:'shìxiān',pos:'Danh từ',vn:'trước đó, từ trước',hv:'sự tiên',em:'⏮️',lesson:1,
   explain:['Trước khi sự việc xảy ra hoặc được tiến hành.'],
   usage:'Làm trạng ngữ, đứng trước động từ: 事先告诉 / 事先准备 / 事先打招呼 / 事先想清楚. Khác 提前: 提前 mang được lượng thời gian (提前24小时 / 提前两天), 事先 thì không (xem 词语辨析).',
   collo:['事先想清楚','事先准备','事先打招呼','事先告诉'],
   ex_zh:'每走一步，你事先都应该想清楚。',ex_py:'Měi zǒu yí bù, nǐ shìxiān dōu yīnggāi xiǎng qīngchu.',ex_vn:'Mỗi nước đi, con đều nên nghĩ kỹ từ trước.',
   exList:[
     {zh:'每走一步，你事先都应该想清楚。',py:'Měi zǒu yí bù, nǐ shìxiān dōu yīnggāi xiǎng qīngchu.',vn:'Mỗi nước đi, con đều nên nghĩ kỹ từ trước.'},
     {zh:'我事先跟教练打过招呼的，他同意了。',py:'Wǒ shìxiān gēn jiàoliàn dǎguo zhāohu de, tā tóngyì le.',vn:'Tôi đã báo trước với huấn luyện viên rồi, thầy đồng ý.'},
     {zh:'我们需要事先做出准确的估计。',py:'Wǒmen xūyào shìxiān zuòchū zhǔnquè de gūjì.',vn:'Chúng ta cần đưa ra dự tính chính xác từ trước.'}
   ],
   colloFull:[
     {zh:'事先想清楚',py:'shìxiān xiǎng qīngchu',vn:'nghĩ kỹ từ trước'},
     {zh:'事先准备',py:'shìxiān zhǔnbèi',vn:'chuẩn bị trước'},
     {zh:'事先打招呼',py:'shìxiān dǎ zhāohu',vn:'báo trước'},
     {zh:'事先告诉',py:'shìxiān gàosu',vn:'nói trước'},
     {zh:'事先没想到',py:'shìxiān méi xiǎngdào',vn:'trước đó không ngờ tới'}
   ],
   patterns:[
     {s:'事先 + V (准备 / 告诉 / 想清楚)',m:'… từ trước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin hãy chuẩn bị sẵn tài liệu từ trước.',answer:'请事先把材料准备好。',answerPy:'Qǐng shìxiān bǎ cáiliào zhǔnbèi hǎo.',
      note:'事先 đứng trước cụm 把 làm trạng ngữ.',pair:'把'},
     {promptLang:'vi',prompt:'Chuyện cậu ấy đi du học, trước đó đến một người cậu ấy cũng không nói.',answer:'他去留学的事，事先连一个人都没告诉。',answerPy:'Tā qù liúxué de shì, shìxiān lián yí ge rén dōu méi gàosu.',
      note:'连 + 一个人 + 都没 + V nhấn mạnh.',pair:'连……都……'}
   ]},

  {n:33,zh:'舍不得',py:'shěbude',pos:'Động từ',vn:'không nỡ, tiếc, luyến tiếc',hv:'xả bất đắc',em:'🥺',lesson:1,
   explain:['Không nỡ rời xa, không nỡ bỏ; tiếc, không muốn dùng hoặc tiêu (vì quý).'],
   usage:'舍不得 + người / vật (舍不得你) hoặc + động từ (舍不得花 / 舍不得穿 / 舍不得扔). Dạng khẳng định 舍得 dùng trong câu hỏi, câu trả lời, so sánh: 你舍得吗? — xem điểm ngữ pháp 2.',
   collo:['舍不得花钱','舍不得离开','舍不得穿','舍不得扔'],
   ex_zh:'等到后来失去得多了，又开始舍不得。',ex_py:'Děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude.',ex_vn:'Đến khi về sau mất nhiều rồi, lại bắt đầu tiếc.',
   exList:[
     {zh:'等到后来失去得多了，又开始舍不得。',py:'Děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude.',vn:'Đến khi về sau mất nhiều rồi, lại bắt đầu tiếc.'},
     {zh:'奶奶很节省，买了新衣服也舍不得穿。',py:'Nǎinai hěn jiéshěng, mǎile xīn yīfu yě shěbude chuān.',vn:'Bà nội rất tiết kiệm, mua quần áo mới cũng không nỡ mặc.'},
     {zh:'要毕业了，我真舍不得离开老师和同学们。',py:'Yào bìyè le, wǒ zhēn shěbude líkāi lǎoshī hé tóngxuémen.',vn:'Sắp tốt nghiệp rồi, tôi thật không nỡ xa thầy cô và các bạn.'}
   ],
   colloFull:[
     {zh:'舍不得花钱',py:'shěbude huā qián',vn:'tiếc tiền, không nỡ tiêu'},
     {zh:'舍不得离开',py:'shěbude líkāi',vn:'không nỡ rời xa'},
     {zh:'舍不得穿',py:'shěbude chuān',vn:'không nỡ mặc'},
     {zh:'舍不得扔',py:'shěbude rēng',vn:'không nỡ vứt'},
     {zh:'舍不得你',py:'shěbude nǐ',vn:'không nỡ xa bạn'}
   ],
   patterns:[
     {s:'舍不得 + V / N',m:'Không nỡ … / tiếc …'},
     {s:'舍得 + V + 吗？',m:'Có nỡ … không? (dạng khẳng định dùng khi hỏi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món quà này quý quá, tôi không nỡ tặng nó cho người khác.',answer:'这个礼物太珍贵了，我舍不得把它送给别人。',answerPy:'Zhège lǐwù tài zhēnguì le, wǒ shěbude bǎ tā sòng gěi biérén.',
      note:'舍不得 + cả cụm 把 phía sau.',pair:'把'},
     {promptLang:'vi',prompt:'Bà nội không nỡ vứt đồ cũ, đến một cái hộp cũng phải giữ lại.',answer:'奶奶舍不得扔旧东西，连一个盒子都要留着。',answerPy:'Nǎinai shěbude rēng jiù dōngxi, lián yí ge hézi dōu yào liúzhe.',
      note:'舍不得 + 扔; 连……都…….',pair:'连……都……'}
   ]},

  {n:34,zh:'后果',py:'hòuguǒ',pos:'Danh từ',vn:'hậu quả',hv:'hậu quả',em:'⚠️',lesson:1,
   explain:['Kết quả xấu về sau do một việc gây ra.'],
   usage:'严重(的)后果 (bảng 词语搭配); 后果很严重 / 造成后果 / 承担后果 / 考虑后果. Khác 结果: 结果 trung tính (tốt hay xấu đều được), 后果 chỉ kết quả XẤU.',
   collo:['严重的后果','后果很严重','承担后果','造成后果'],
   ex_zh:'可惜，大部分人都像你这样，开始不考虑得失，等到后来失去得多了，又开始舍不得，后果就是屡下屡败。',ex_py:'Kěxī, dà bùfen rén dōu xiàng nǐ zhèyàng, kāishǐ bù kǎolǜ déshī, děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude, hòuguǒ jiù shì lǚ xià lǚ bài.',ex_vn:'Tiếc là phần lớn mọi người đều giống con: lúc đầu không tính được mất, đến khi mất nhiều rồi lại bắt đầu tiếc, hậu quả là đánh ván nào thua ván ấy.',
   exList:[
     {zh:'可惜，大部分人都像你这样，开始不考虑得失，等到后来失去得多了，又开始舍不得，后果就是屡下屡败。',py:'Kěxī, dà bùfen rén dōu xiàng nǐ zhèyàng, kāishǐ bù kǎolǜ déshī, děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude, hòuguǒ jiù shì lǚ xià lǚ bài.',vn:'Tiếc là phần lớn mọi người đều giống con: lúc đầu không tính được mất, đến khi mất nhiều rồi lại bắt đầu tiếc, hậu quả là đánh ván nào thua ván ấy.'},
     {zh:'你要想清楚，这样做的后果很严重！',py:'Nǐ yào xiǎng qīngchu, zhèyàng zuò de hòuguǒ hěn yánzhòng!',vn:'Cậu phải nghĩ cho kỹ, làm như vậy hậu quả rất nghiêm trọng đấy!'},
     {zh:'自己做的事，后果要自己承担。',py:'Zìjǐ zuò de shì, hòuguǒ yào zìjǐ chéngdān.',vn:'Việc mình làm thì hậu quả mình phải tự gánh.'}
   ],
   colloFull:[
     {zh:'严重的后果',py:'yánzhòng de hòuguǒ',vn:'hậu quả nghiêm trọng'},
     {zh:'后果很严重',py:'hòuguǒ hěn yánzhòng',vn:'hậu quả rất nghiêm trọng'},
     {zh:'承担后果',py:'chéngdān hòuguǒ',vn:'gánh chịu hậu quả'},
     {zh:'造成后果',py:'zàochéng hòuguǒ',vn:'gây ra hậu quả'},
     {zh:'考虑后果',py:'kǎolǜ hòuguǒ',vn:'cân nhắc hậu quả'}
   ],
   patterns:[
     {s:'……的后果 + 很严重',m:'Hậu quả của … rất nghiêm trọng'},
     {s:'造成 / 承担 / 考虑 + 后果',m:'Gây ra / gánh chịu / cân nhắc hậu quả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu uống rượu rồi lái xe, hậu quả sẽ rất nghiêm trọng.',answer:'如果酒后开车，后果会很严重。',answerPy:'Rúguǒ jiǔ hòu kāi chē, hòuguǒ huì hěn yánzhòng.',
      note:'后果 + 很严重 (bảng 词语搭配: 严重的后果).',pair:'如果……（就）……'},
     {promptLang:'vi',prompt:'Làm việc gì trước đó cũng phải cân nhắc hậu quả.',answer:'做什么事以前都要考虑后果。',answerPy:'Zuò shénme shì yǐqián dōu yào kǎolǜ hòuguǒ.',
      note:'Đại từ nghi vấn phiếm chỉ 什么……都…… = bất cứ … nào cũng.',pair:'什么……都……'}
   ]},

  {n:35,zh:'屡',py:'lǚ',pos:'Phó từ',vn:'nhiều lần, liên tiếp',hv:'lũ',em:'🔁',lesson:1,
   explain:['Nhiều lần, liên tiếp (văn viết).'],
   usage:'Chủ yếu dùng trong cụm bốn chữ: 屡下屡败 (đánh ván nào thua ván ấy), 屡战屡败, 屡教不改 (dạy mãi không sửa); và từ 屡次 (nhiều lần). Khẩu ngữ dùng 一次次 / 多次.',
   collo:['屡下屡败','屡战屡败','屡次','屡教不改'],
   ex_zh:'后果就是屡下屡败。',ex_py:'Hòuguǒ jiù shì lǚ xià lǚ bài.',ex_vn:'Hậu quả là đánh ván nào thua ván ấy.',
   exList:[
     {zh:'后果就是屡下屡败。',py:'Hòuguǒ jiù shì lǚ xià lǚ bài.',vn:'Hậu quả là đánh ván nào thua ván ấy.'},
     {zh:'他屡次迟到，被老师批评了好几次。',py:'Tā lǚcì chídào, bèi lǎoshī pīpíngle hǎo jǐ cì.',vn:'Cậu ấy nhiều lần đi muộn, bị thầy phê bình mấy lần.'},
     {zh:'这支球队屡战屡败，可队员们一点儿也不灰心。',py:'Zhè zhī qiúduì lǚ zhàn lǚ bài, kě duìyuánmen yìdiǎnr yě bù huīxīn.',vn:'Đội bóng này đánh trận nào thua trận nấy, nhưng các cầu thủ không hề nản lòng.'}
   ],
   colloFull:[
     {zh:'屡下屡败',py:'lǚ xià lǚ bài',vn:'đánh ván nào thua ván ấy'},
     {zh:'屡战屡败',py:'lǚ zhàn lǚ bài',vn:'đánh trận nào thua trận nấy'},
     {zh:'屡次',py:'lǚcì',vn:'nhiều lần'},
     {zh:'屡教不改',py:'lǚ jiào bù gǎi',vn:'dạy mãi không sửa'}
   ],
   patterns:[
     {s:'屡 + V + 屡 + V',m:'Hết lần này đến lần khác …'},
     {s:'屡次 + V',m:'Nhiều lần …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy nhiều lần đi muộn, bị thầy giáo phê bình.',answer:'他屡次迟到，被老师批评了。',answerPy:'Tā lǚcì chídào, bèi lǎoshī pīpíng le.',
      note:'屡次 + V; câu bị động 被.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy thua hết trận này đến trận khác, nhưng đội bóng vẫn không nản lòng.',answer:'虽然屡战屡败，但是球队还是没有灰心。',answerPy:'Suīrán lǚ zhàn lǚ bài, dànshì qiúduì háishi méiyǒu huīxīn.',
      note:'屡战屡败 (cụm bốn chữ); 虽然……但是…….',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 下棋 (704 chữ, tr. 79–81) · 改编自《今日中学生》，作者：林夕
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 下棋',
  preQuiz:[
    {q:'“我”的父亲是做什么的？',opts:['象棋教练','大学老师','足球教练'],ans:0},
    {q:'第一局，父亲让“我”先走几步？',opts:['一步','三步','十步'],ans:1},
    {q:'第一局“我”是怎么输的？',opts:['父亲下得太慢，“我”没耐心了','“我”没有下完就走了','不到三分钟棋子就损失大半，最后被“将军”'],ans:2},
    {q:'输了以后，“我”一开始觉得是什么原因？',opts:['运气不好、没发挥好','技术太差','父亲太厉害'],ans:0},
    {q:'父亲认为初学棋的人输了怎么样？',opts:['很丢人','是正常的','应该马上放弃'],ans:1},
    {q:'父亲认为“我”技术不好、经验不足是什么？',opts:['最重要的原因','唯一的原因','次要因素'],ans:2},
    {q:'父亲认为最重要的问题是什么？',opts:['心态不对，不够珍惜棋子','每一步都想得太久','没有认真观察父亲'],ans:0},
    {q:'前三分之一的时间，“我”下棋怎么样？',opts:['过于谨慎，想半天才走一步','不假思索，拿起来就走','一个棋子也不想失'],ans:1},
    {q:'后三分之二的时间，“我”犯了什么错误？',opts:['下得太快','根本不想赢','对棋子过于珍惜，每一步都过于谨慎'],ans:2},
    {q:'父亲问下棋的基本原则，“我”是怎么回答的？',opts:['想也没想就说“赢啊”','想了半天才说“考虑得失”','说“不知道”'],ans:0},
    {q:'父亲认为下棋的原则是什么？',opts:['一定要赢','要考虑得失','不能失去任何棋子'],ans:1},
    {q:'父亲说，大部分人下棋的后果是什么？',opts:['越下越好','很快就赢了','屡下屡败'],ans:2},
    {q:'父亲最后想告诉“我”什么道理？',opts:['人生也像下棋，要考虑得失','下棋比人生更重要','以后不要再下棋了'],ans:0}
  ],
  lines:[
    {sp:0,zh:'我父亲是一位象棋教练。那一年，我大学放假回家，父亲要跟我下棋，我高兴地答应了。',
     py:'Wǒ fùqīn shì yí wèi xiàngqí jiàoliàn. Nà yì nián, wǒ dàxué fàngjià huí jiā, fùqīn yào gēn wǒ xià qí, wǒ gāoxìng de dāying le.',
     vn:'Bố tôi là một huấn luyện viên cờ tướng. Năm ấy, trường đại học cho nghỉ, tôi về nhà, bố muốn đánh cờ với tôi, tôi vui vẻ nhận lời.'},
    {sp:0,zh:'父亲让我先走三步。不到三分钟，我的棋子损失大半，棋盘上空空的，只剩下几个子了。没办法，眼睁睁看着父亲“将军”，我输了。',
     py:'Fùqīn ràng wǒ xiān zǒu sān bù. Bú dào sān fēnzhōng, wǒ de qízǐ sǔnshī dàbàn, qípán shang kōngkōng de, zhǐ shèngxia jǐ ge zǐ le. Méi bànfǎ, yǎnzhēngzhēng kànzhe fùqīn “jiāng jūn”, wǒ shū le.',
     vn:'Bố cho tôi đi trước ba nước. Chưa đến ba phút, quân cờ của tôi đã mất quá nửa, bàn cờ trống trơn, chỉ còn lại vài quân. Hết cách, tôi trơ mắt nhìn bố "chiếu tướng" — tôi thua.'},
    {sp:0,zh:'我不服气，说：“这次运气不好，再来！”第二局又输了，“这次没发挥好，我们再来”！几局下来，基本上都是不到10分钟我就败下阵来。我有些灰心。父亲看看我说：“你初学棋，输是正常的。但是你要知道输在什么地方，要吸取教训。否则，你就再下上10年，也未必能赢。”',
     py:'Wǒ bù fúqì, shuō: “Zhè cì yùnqi bù hǎo, zài lái!” Dì-èr jú yòu shū le, “Zhè cì méi fāhuī hǎo, wǒmen zài lái”! Jǐ jú xiàlai, jīběnshang dōu shì bú dào shí fēnzhōng wǒ jiù bàixià zhèn lai. Wǒ yǒuxiē huīxīn. Fùqīn kànkan wǒ shuō: “Nǐ chū xué qí, shū shì zhèngcháng de. Dànshì nǐ yào zhīdào shū zài shénme dìfang, yào xīqǔ jiàoxùn. Fǒuzé, nǐ jiù zài xiàshang shí nián, yě wèibì néng yíng.”',
     vn:'Tôi không phục, nói: "Lần này xui thôi, chơi lại!" Ván thứ hai lại thua, "Lần này con chưa thể hiện tốt, mình chơi lại"! Mấy ván trôi qua, gần như ván nào chưa đến 10 phút tôi cũng đã thua trận. Tôi hơi nản. Bố nhìn tôi rồi nói: "Con mới học cờ, thua là chuyện bình thường. Nhưng con phải biết mình thua ở chỗ nào, phải rút ra bài học. Nếu không, con có đánh thêm mười năm nữa cũng chưa chắc thắng được."'},
    {sp:0,zh:'“我知道，我技术没你好，经验也不足。”',
     py:'“Wǒ zhīdào, wǒ jìshù méi nǐ hǎo, jīngyàn yě bùzú.”',
     vn:'"Con biết, kỹ thuật của con không bằng bố, kinh nghiệm cũng chưa đủ."'},
    {sp:0,zh:'“这只是次要因素，不是最重要的。”',
     py:'“Zhè zhǐ shì cìyào yīnsù, bú shì zuì zhòngyào de.”',
     vn:'"Đó chỉ là yếu tố thứ yếu, không phải điều quan trọng nhất."'},
    {sp:0,zh:'“那最重要的是什么？”我奇怪地问。',
     py:'“Nà zuì zhòngyào de shì shénme?” Wǒ qíguài de wèn.',
     vn:'"Vậy điều quan trọng nhất là gì ạ?" Tôi ngạc nhiên hỏi.'},
    {sp:0,zh:'“最重要的问题在于你心态不对。你不够珍惜你的棋子。”',
     py:'“Zuì zhòngyào de wèntí zàiyú nǐ xīntài bú duì. Nǐ bú gòu zhēnxī nǐ de qízǐ.”',
     vn:'"Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng. Con chưa đủ quý trọng quân cờ của mình."'},
    {sp:0,zh:'“怎么不珍惜呀？我每走一步，都想半天。”我否认说。',
     py:'“Zěnme bù zhēnxī ya? Wǒ měi zǒu yí bù, dōu xiǎng bàntiān.” Wǒ fǒurèn shuō.',
     vn:'"Sao lại không quý chứ? Mỗi nước đi con đều nghĩ rất lâu." Tôi cãi lại.'},
    {sp:0,zh:'“那是后来。开始你是这样吗？我仔细观察过，你三分之二的棋子是在前三分之一的时间失去的。这期间你好像很有把握，下棋时不假思索，拿起来就走，失去了也不觉得可惜。因为你觉得棋子很多，失一两个不算什么。后三分之二的时间，你又犯了相反的错误：对棋子过于珍惜，每走一步都过于谨慎，一个棋子也不想失，反而一个一个都失去了。”',
     py:'“Nà shì hòulái. Kāishǐ nǐ shì zhèyàng ma? Wǒ zǐxì guāncháguo, nǐ sān fēn zhī èr de qízǐ shì zài qián sān fēn zhī yī de shíjiān shīqù de. Zhè qījiān nǐ hǎoxiàng hěn yǒu bǎwò, xià qí shí bùjiǎ-sīsuǒ, ná qǐlai jiù zǒu, shīqùle yě bù juéde kěxī. Yīnwèi nǐ juéde qízǐ hěn duō, shī yì liǎng ge bú suàn shénme. Hòu sān fēn zhī èr de shíjiān, nǐ yòu fànle xiāngfǎn de cuòwù: duì qízǐ guòyú zhēnxī, měi zǒu yí bù dōu guòyú jǐnshèn, yí ge qízǐ yě bù xiǎng shī, fǎn\'ér yí ge yí ge dōu shīqù le.”',
     vn:'"Đó là về sau. Lúc đầu con có như vậy không? Bố đã quan sát kỹ, hai phần ba số quân cờ của con là mất trong một phần ba thời gian đầu. Trong khoảng này con có vẻ rất chắc chắn, đánh cờ chẳng cần suy nghĩ, cầm quân lên là đi, mất rồi cũng không thấy tiếc. Vì con thấy quân cờ còn nhiều, mất một hai quân chẳng đáng gì. Hai phần ba thời gian sau, con lại mắc sai lầm ngược lại: quá tiếc quân cờ, nước nào cũng quá thận trọng, một quân cũng không muốn mất, kết quả ngược lại từng quân một đều mất cả."'},
    {sp:0,zh:'说到这，父亲停下来，把棋子重新在棋盘上摆好，抬起头，看着我，问：“这是一盘待下的棋。我问你，下棋的基本原则是什么？”',
     py:'Shuō dào zhè, fùqīn tíng xiàlai, bǎ qízǐ chóngxīn zài qípán shang bǎihǎo, tái qǐ tóu, kànzhe wǒ, wèn: “Zhè shì yì pán dài xià de qí. Wǒ wèn nǐ, xià qí de jīběn yuánzé shì shénme?”',
     vn:'Nói đến đây, bố dừng lại, xếp lại quân cờ lên bàn cờ, ngẩng đầu nhìn tôi và hỏi: "Đây là một ván cờ đang chờ đánh. Bố hỏi con, nguyên tắc cơ bản của việc đánh cờ là gì?"'},
    {sp:0,zh:'我想也没想，脱口而出：“赢啊！”',
     py:'Wǒ xiǎng yě méi xiǎng, tuōkǒu\'érchū: “Yíng a!”',
     vn:'Tôi chẳng cần nghĩ, buột miệng nói ngay: "Thắng ạ!"'},
    {sp:0,zh:'“那是目的。”父亲用责备的眼光看了我一眼，“至于原则，是要考虑得失。有得必然有失，有失才会有得。每走一步，你事先都应该想清楚：为了赢得什么，你愿意失去什么，这样才可能赢。可惜，大部分人都像你这样，开始不考虑得失，等到后来失去得多了，又开始舍不得，后果就是屡下屡败。其实不仅是下棋，人生也是如此啊！”',
     py:'“Nà shì mùdì.” Fùqīn yòng zébèi de yǎnguāng kànle wǒ yì yǎn, “Zhìyú yuánzé, shì yào kǎolǜ déshī. Yǒu dé bìrán yǒu shī, yǒu shī cái huì yǒu dé. Měi zǒu yí bù, nǐ shìxiān dōu yīnggāi xiǎng qīngchu: wèile yíngdé shénme, nǐ yuànyì shīqù shénme, zhèyàng cái kěnéng yíng. Kěxī, dà bùfen rén dōu xiàng nǐ zhèyàng, kāishǐ bù kǎolǜ déshī, děngdào hòulái shīqù de duō le, yòu kāishǐ shěbude, hòuguǒ jiù shì lǚ xià lǚ bài. Qíshí bùjǐn shì xià qí, rénshēng yě shì rúcǐ a!”',
     vn:'"Đó là mục đích." Bố nhìn tôi một cái với ánh mắt trách móc, "Còn nguyên tắc là phải cân nhắc được mất. Có được ắt có mất, có mất mới có được. Mỗi nước đi, con đều nên nghĩ kỹ từ trước: để giành được điều gì thì con chịu mất đi điều gì, như vậy mới có thể thắng. Tiếc là phần lớn mọi người đều giống con: lúc đầu không tính đến được mất, đến khi về sau mất nhiều rồi lại bắt đầu tiếc, hậu quả là đánh ván nào thua ván ấy. Thật ra không chỉ đánh cờ, đời người cũng như vậy đấy!"'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 损失/失去 lấy từ sách (tr. 83–84)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'损失 — 失去',
   same:'Đều làm được động từ, đều có nghĩa vốn có mà về sau không còn nữa.',
   sameEx:{zh:'每走一步，你事先都应该想清楚：为了赢得什么，你愿意损失／失去什么，这样才可能赢。',vn:'Mỗi nước đi, con đều nên nghĩ kỹ từ trước: để giành được điều gì thì con chịu mất điều gì, như vậy mới có thể thắng.'},
   items:[
     {word:'损失',points:[
       'Chỉ sự GIẢM BỚT, hao hụt (một phần): tiền bạc, người, quân cờ…',
       'Làm được DANH TỪ: 造成损失, 巨大的损失, 赔偿我们的损失.',
       'Hay đi với số lượng: 损失大半, 损失了很多钱.'
     ],ex:[{zh:'不到三分钟，我的棋子损失大半。',vn:'Chưa đến ba phút, quân cờ của tôi đã mất quá nửa.'},
          {zh:'公司会赔偿我们的损失。',vn:'Công ty sẽ bồi thường thiệt hại cho chúng tôi.'}]},
     {word:'失去',points:[
       'Thường chỉ MẤT HẲN, hoàn toàn không còn: 记忆, 家庭, 机会, 信心.',
       'KHÔNG làm danh từ: không nói 巨大的失去 (phải là 巨大的损失).',
       'Hay dùng cho điều trừu tượng hoặc người thân.'
     ],ex:[{zh:'战争让他失去了家庭。',vn:'Chiến tranh đã khiến ông ấy mất đi gia đình.'},
          {zh:'因为一场病，他失去了记忆。',vn:'Vì một trận ốm, anh ấy bị mất trí nhớ.'}]}
   ],
   quiz:[
     {sentence:'生意失败，他＿＿了很多钱。',options:['损失','失去'],answer:0,
      why:'Mất một khoản tiền (giảm bớt tài sản) → 损失 (câu mẫu của sách: 损失 ✓, 失去 ×).'},
     {sentence:'因为一场病，他＿＿了记忆。',options:['损失','失去'],answer:1,
      why:'Trí nhớ mất hẳn, không còn nữa → 失去记忆.'},
     {sentence:'要珍惜时间，因为＿＿的时间永远都不会再回来。',options:['损失','失去'],answer:1,
      why:'Thời gian đã trôi đi là mất hẳn, "không bao giờ quay lại" → 失去.'},
     {sentence:'这次火灾造成了巨大的＿＿。',options:['损失','失去'],answer:0,
      why:'Cần DANH TỪ sau 巨大的 → chỉ 损失 làm được danh từ.'}
   ],
   sgk:{
     chung:{t:'都可以做动词，都有原来有而后来没有了的意思。',vn:'Đều làm được động từ, đều có nghĩa vốn có mà về sau không còn nữa.',vd:'每走一步，你事先都应该想清楚：为了赢得什么，你愿意损失／失去什么，这样才可能赢。',vdVn:'Mỗi nước đi, con đều nên nghĩ kỹ từ trước: để giành được điều gì thì con chịu mất điều gì, như vậy mới có thể thắng.'},
     khac:[
       {a:{t:'表示减少。',vn:'Chỉ sự giảm bớt.',vd:'不到三分钟，我的棋子损失大半。',vdVn:'Chưa đến ba phút, quân cờ của tôi đã mất quá nửa.'},
        b:{t:'一般指完全没有。',vn:'Thường chỉ hoàn toàn không còn.',vd:'战争让他失去了家庭。',vdVn:'Chiến tranh đã khiến ông ấy mất đi gia đình.'}},
       {a:{t:'可以做名词。',vn:'Có thể làm danh từ.',vd:'公司会赔偿我们的损失。',vdVn:'Công ty sẽ bồi thường thiệt hại cho chúng tôi.'},
        b:{t:'不可以做名词。',vn:'Không thể làm danh từ.'}}
     ],
     lamThu:[
       {s:'生意失败，他＿＿了很多钱。',dap:[true,false],mau:true,
        giai:'Mất một khoản tiền là giảm bớt tài sản → 损失 (câu mẫu của sách: 损失 ✓, 失去 ×).'},
       {s:'因为一场病，他＿＿了记忆。',dap:[false,true],
        giai:'Trí nhớ mất hẳn, không còn → 失去.'},
       {s:'要珍惜时间，因为＿＿的时间永远都不会再回来。',dap:[false,true],
        giai:'Thời gian đã trôi qua là mất hẳn, không quay lại → 失去.'},
       {s:'这次火灾造成了巨大的＿＿。',dap:[true,false],
        giai:'Vị trí cần danh từ (巨大的 + N) → chỉ 损失 làm được danh từ.'}
     ]
   }},

  {pair:'事先 — 提前',
   same:'Đều chỉ làm việc gì đó TRƯỚC khi sự việc xảy ra, đều đứng trước động từ.',
   sameEx:{zh:'我事先／提前跟教练打过招呼，他同意了。',vn:'Tôi đã báo trước với huấn luyện viên, thầy đồng ý rồi.'},
   items:[
     {word:'事先',points:[
       'Là danh từ thời gian: "trước khi sự việc diễn ra" — nhấn mạnh có chuẩn bị, tính toán từ trước.',
       'KHÔNG mang được lượng thời gian cụ thể (không nói 事先两天).',
       'Hay đi với 想清楚, 准备, 打招呼, 告诉, 没想到.'
     ],ex:[{zh:'每走一步，你事先都应该想清楚。',vn:'Mỗi nước đi, con đều nên nghĩ kỹ từ trước.'}]},
     {word:'提前',points:[
       'Là động từ: đẩy thời điểm lên SỚM HƠN dự định.',
       'Mang được lượng thời gian: 提前24小时, 提前两天, 提前十分钟.',
       'Làm được vị ngữ: 考试时间提前了.'
     ],ex:[{zh:'如果有变动，请提前24小时告诉我。',vn:'Nếu có thay đổi, xin báo trước cho tôi 24 tiếng.'}]}
   ],
   quiz:[
     {sentence:'如果有变动，请＿＿24小时告诉我。',options:['事先','提前'],answer:1,
      why:'Có lượng thời gian cụ thể (24小时) → chỉ 提前 dùng được (bài tập 2 của sách).'},
     {sentence:'每走一步，你＿＿都应该想清楚。',options:['事先','提前'],answer:0,
      why:'Nghĩ kỹ, tính toán trước khi hành động → 事先 (câu của bài khoá).'},
     {sentence:'会议时间＿＿了，改在明天上午。',options:['事先','提前'],answer:1,
      why:'Làm vị ngữ "được dời lên sớm hơn" → 提前了. 事先 không làm vị ngữ.'},
     {sentence:'他要辞职的事，我＿＿一点儿也不知道。',options:['事先','提前'],answer:0,
      why:'"Trước đó (khi sự việc chưa xảy ra) tôi không hề biết" → 事先.'}
   ]},

  {pair:'后果 — 结果',
   same:'Đều là danh từ, đều chỉ kết cục cuối cùng của một sự việc.',
   sameEx:{zh:'开始不考虑得失，后来又舍不得，后果／结果就是屡下屡败。',vn:'Lúc đầu không tính được mất, về sau lại tiếc, hậu quả / kết quả là đánh ván nào thua ván ấy.'},
   items:[
     {word:'后果',points:[
       'Chỉ kết quả XẤU (nghĩa tiêu cực).',
       'Hay đi với 严重, 承担, 造成, 考虑: 后果很严重 (bảng 词语搭配: 严重的后果).',
       'Không dùng cho kết quả tốt (không nói 好的后果).'
     ],ex:[{zh:'你要想清楚，这样做的后果很严重！',vn:'Cậu phải nghĩ cho kỹ, làm như vậy hậu quả rất nghiêm trọng đấy!'}]},
     {word:'结果',points:[
       'Trung tính: kết quả tốt hay xấu đều được (考试结果, 比赛结果).',
       'Còn làm liên từ đứng đầu vế sau: ……，结果…… (kết quả là, rốt cuộc).',
       'Đi với 出来 / 公布: 结果出来了.'
     ],ex:[{zh:'买了件新衣服舍不得穿，结果衣服小了，穿不了了。',vn:'Mua bộ quần áo mới không nỡ mặc, rốt cuộc quần áo chật mất, không mặc được nữa.'}]}
   ],
   quiz:[
     {sentence:'你要想清楚，这样做的＿＿很严重！',options:['后果','结果'],answer:0,
      why:'Kết quả xấu, đi với 很严重 → 后果 (bài tập 2 của sách).'},
     {sentence:'考试＿＿出来了，我得了第一名。',options:['后果','结果'],answer:1,
      why:'Kết quả tốt, trung tính → 结果. 后果 chỉ dùng cho điều xấu.'},
     {sentence:'买了件新衣服舍不得穿，＿＿衣服小了，穿不了了。',options:['后果','结果'],answer:1,
      why:'Đứng đầu vế sau làm liên từ "rốt cuộc" → chỉ 结果 dùng được (练一练 của mục 舍不得).'},
     {sentence:'酒后开车会造成严重的＿＿。',options:['后果','结果'],answer:0,
      why:'造成 + 严重的 + kết quả xấu → 后果.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'损失',hv:'tổn thất',vn:'tổn thất, mất mát',note:'Trùng khít. Tiếng Trung còn làm động từ: 损失了很多钱.'},
    {zh:'发挥',hv:'phát huy',vn:'phát huy; thể hiện',note:'Gần khít — nhưng 发挥好 trong thi cử nên dịch là "thể hiện tốt".'},
    {zh:'未必',hv:'vị tất',vn:'chưa chắc',note:'Trùng khít với "vị tất" (vị tất đã đúng).'},
    {zh:'次要',hv:'thứ yếu',vn:'thứ yếu',note:'Trùng khít. Trái nghĩa: 主要 (chủ yếu).'},
    {zh:'因素',hv:'nhân tố',vn:'nhân tố, yếu tố',note:'Trùng khít.'},
    {zh:'否认',hv:'phủ nhận',vn:'phủ nhận',note:'Trùng khít. Trái nghĩa: 承认 (thừa nhận) — bài 22.'},
    {zh:'观察',hv:'quan sát',vn:'quan sát',note:'Trùng khít.'},
    {zh:'原则',hv:'nguyên tắc',vn:'nguyên tắc',note:'Trùng khít.'},
    {zh:'后果',hv:'hậu quả',vn:'hậu quả',note:'Trùng khít — cũng chỉ kết quả xấu như tiếng Việt.'},
    {zh:'犯',hv:'phạm',vn:'phạm, mắc',note:'Trùng khít: 犯错误 = phạm sai lầm, 犯法 = phạm pháp.'},
    {zh:'将军',hv:'tướng quân',vn:'tướng quân; chiếu tướng',note:'Danh từ trùng khít; làm động từ (jiāng jūn) = "chiếu tướng" trong cờ tướng.'},
    {zh:'心态',hv:'tâm thái',vn:'tâm lý, tâm thế',note:'"Thái" = trạng thái → trạng thái của tâm = tâm lý.'},
    {zh:'责备',hv:'trách bị',vn:'trách móc',note:'"Trách" giữ nguyên nghĩa → dễ nhớ.'},
    {zh:'珍惜',hv:'trân tích',vn:'quý trọng, trân trọng',note:'"Trân" = quý (trân châu), "tích" = tiếc, yêu quý → trân trọng.'}
  ],
  idiom:[
    {zh:'不假思索',hv:'bất giả tư sách',vn:'không cần suy nghĩ',note:'"Không mượn đến suy tư" — 下棋时不假思索，拿起来就走.'},
    {zh:'脱口而出',hv:'thoát khẩu nhi xuất',vn:'buột miệng nói ra',note:'"Thoát ra khỏi miệng" — 我想也没想，脱口而出：“赢啊！”'},
    {zh:'败下阵来',hv:'bại hạ trận lai',vn:'thua trận',note:'"Thua mà rút khỏi trận" — trong bài dùng cho thua ván cờ.'},
    {zh:'屡下屡败',hv:'lũ hạ lũ bại',vn:'đánh ván nào thua ván ấy',note:'Biến từ thành ngữ 屡战屡败 (lũ chiến lũ bại).'},
    {zh:'人生如棋',hv:'nhân sinh như kỳ',vn:'đời người như ván cờ',note:'Chủ đề phần 运用 — mỗi bước đi đều phải cân nhắc được mất.'}
  ],
  trap:[
    {zh:'答应',hv:'đáp ứng',vn:'nhận lời, đồng ý',
     warn:'BẪY: "đáp ứng" tiếng Việt = thoả mãn được yêu cầu. 答应 chỉ là NHẬN LỜI: 我答应了 = tôi nhận lời rồi (chưa chắc đã làm được).'},
    {zh:'教训',hv:'giáo huấn',vn:'bài học (từ thất bại)',
     warn:'BẪY: "giáo huấn" = dạy bảo. 教训 danh từ chủ yếu là "bài học rút ra từ sai lầm": 吸取教训.'},
    {zh:'必然',hv:'tất nhiên',vn:'tất yếu, chắc chắn',
     warn:'BẪY lớn: "tất nhiên" tiếng Việt = đương nhiên (当然). 必然 = TẤT YẾU theo quy luật: 有得必然有失. Trả lời "Tất nhiên rồi!" phải là 当然了!'},
    {zh:'把握',hv:'bả ác',vn:'sự chắc chắn; nắm bắt',
     warn:'"Bả ác" không dùng trong tiếng Việt. 握 = nắm chặt → nắm chắc: 很有把握 = rất chắc chắn; 把握机会 = nắm bắt cơ hội.'},
    {zh:'灰心',hv:'hôi tâm',vn:'nản lòng',
     warn:'"Tim xám tro" → lòng nguội lạnh = NẢN LÒNG. Không liên quan đến "hôi".'},
    {zh:'局',hv:'cục',vn:'ván (cờ, trận)',
     warn:'Lượng từ: 一局棋 = một ván cờ, 第二局 = ván thứ hai. Không phải "cục" (cục đá…).'},
    {zh:'运气',hv:'vận khí',vn:'vận may',
     warn:'Tiếng Việt ít nói "vận khí". 运气好 = may, 运气不好 = xui. Không nói 很运气.'},
    {zh:'教练',hv:'giáo luyện',vn:'huấn luyện viên',
     warn:'"Giáo luyện" không dùng; 教练 = HUẤN LUYỆN VIÊN. Đừng nhầm với 教训 (bài học) — khác một chữ.'},
    {zh:'象棋',hv:'tượng kỳ',vn:'cờ tướng',
     warn:'"Tượng" ở đây là con voi (quân Tượng), không phải "tượng đài". 国际象棋 = cờ vua.'},
    {zh:'期间',hv:'kỳ gian',vn:'trong thời gian …',
     warn:'Không đứng một mình đầu câu; phải có sự việc phía trước: 比赛期间, 这期间.'},
    {zh:'舍不得',hv:'xả bất đắc',vn:'không nỡ, tiếc',
     warn:'舍 = xả, bỏ → "bỏ không được" = KHÔNG NỠ. Khẳng định 舍得 chủ yếu dùng khi hỏi.'},
    {zh:'过于',hv:'quá vu',vn:'quá, quá mức',
     warn:'Là phó từ văn viết, chỉ đi với từ hai âm tiết: 过于谨慎. Không nói 过于大.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 83) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'吸取',right:'教训'},
  {left:'珍惜',right:'时间'},
  {left:'关键',right:'因素'},
  {left:'严重的',right:'后果'},
  {left:'仔细地',right:'观察'},
  {left:'充分地',right:'发挥'},
  {left:'睁大',right:'眼睛'},
  {left:'把握',right:'机会'},
  {left:'一盘',right:'棋'},
  {left:'一条',right:'原则'},
  {left:'否认',right:'事实'},
  {left:'犯',right:'错误'},
  {left:'责备的',right:'眼光'},
  {left:'考虑',right:'得失'},
  {left:'调整',right:'心态'},
  {left:'失去',right:'记忆'},
  {left:'造成',right:'损失'},
  {left:'答应',right:'要求'},
  {left:'象棋',right:'教练'},
  {left:'碰',right:'运气'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bảng 生词 có ít nhất một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'我父亲是一位',blank:'象棋',post:'教练。',hint:'(cờ tướng)',ans:'象棋'},
  {pre:'比赛期间，我事先跟',blank:'教练',post:'打过招呼，他同意我外出。',hint:'(huấn luyện viên)',ans:'教练'},
  {pre:'父亲要跟我下棋，我高兴地',blank:'答应',post:'了。',hint:'(nhận lời)',ans:'答应'},
  {pre:'这次火灾造成了巨大的',blank:'损失',post:'。',hint:'(tổn thất)',ans:'损失'},
  {pre:'早上一',blank:'睁',post:'开眼睛，我就看见窗外下雪了。',hint:'(mở mắt)',ans:'睁'},
  {pre:'你就这样',blank:'眼睁睁',post:'地看着他摔倒了？！',hint:'(trơ mắt)',ans:'眼睁睁'},
  {pre:'没办法，眼睁睁看着父亲“',blank:'将军',post:'”，我输了。',hint:'(chiếu tướng)',ans:'将军'},
  {pre:'我不',blank:'服气',post:'，说：“这次运气不好，再来！”',hint:'(chịu phục)',ans:'服气'},
  {pre:'小刘',blank:'运气',post:'真不错，刚来一年就成了主力队员。',hint:'(vận may)',ans:'运气'},
  {pre:'第二',blank:'局',post:'又输了。',hint:'(ván)',ans:'局'},
  {pre:'希望你在比赛中',blank:'发挥',post:'好，赛出好成绩！',hint:'(thể hiện, phát huy)',ans:'发挥'},
  {pre:'这几次考试我都考得不太好，觉得有点儿',blank:'灰心',post:'。',hint:'(nản lòng)',ans:'灰心'},
  {pre:'到了新公司，你一定要',blank:'吸取',post:'教训，争取留用。',hint:'(rút ra)',ans:'吸取'},
  {pre:'只有吸取',blank:'教训',post:'，才能避免以后再次发生同样的问题。',hint:'(bài học)',ans:'教训'},
  {pre:'你说得这么复杂，我觉得他',blank:'未必',post:'能听懂。',hint:'(chưa chắc)',ans:'未必'},
  {pre:'钱是',blank:'次要',post:'的，最重要的是你喜欢这份工作。',hint:'(thứ yếu)',ans:'次要'},
  {pre:'工作压力太大是影响幸福感的重要',blank:'因素',post:'。',hint:'(yếu tố)',ans:'因素'},
  {pre:'我看，老板没有糟糕的，关键',blank:'在于',post:'你怎样去和他沟通。',hint:'(nằm ở chỗ)',ans:'在于'},
  {pre:'考试前要调整好',blank:'心态',post:'，不要太紧张。',hint:'(tâm lý)',ans:'心态'},
  {pre:'请',blank:'珍惜',post:'你已经拥有的一切。',hint:'(trân trọng)',ans:'珍惜'},
  {pre:'我对小林是有些看法，这一点儿我不',blank:'否认',post:'。',hint:'(phủ nhận)',ans:'否认'},
  {pre:'仔细',blank:'观察',post:'周围的大自然，你会发现很多有意思的东西。',hint:'(quan sát)',ans:'观察'},
  {pre:'因为一场病，他',blank:'失去',post:'了记忆。',hint:'(mất)',ans:'失去'},
  {pre:'在国外工作',blank:'期间',post:'，我一直很想念我的家乡和家人。',hint:'(trong thời gian)',ans:'期间'},
  {pre:'只有做好准备的人才能',blank:'把握',post:'住机会。',hint:'(nắm bắt)',ans:'把握'},
  {pre:'老师一问，他就',blank:'不假思索',post:'地说出了答案。',hint:'(không cần suy nghĩ)',ans:'不假思索'},
  {pre:'谁都会',blank:'犯',post:'错误，重要的是要吸取教训。',hint:'(mắc)',ans:'犯'},
  {pre:'考试的时候不要',blank:'过于',post:'紧张，正常发挥就好。',hint:'(quá)',ans:'过于'},
  {pre:'我问你，下棋的基本',blank:'原则',post:'是什么？',hint:'(nguyên tắc)',ans:'原则'},
  {pre:'父亲用',blank:'责备',post:'的眼光看了我一眼。',hint:'(trách móc)',ans:'责备'},
  {pre:'有得',blank:'必然',post:'有失，有失才会有得。',hint:'(ắt, tất yếu)',ans:'必然'},
  {pre:'我们需要',blank:'事先',post:'做出准确的估计。',hint:'(từ trước)',ans:'事先'},
  {pre:'奶奶很节省，买了新衣服也',blank:'舍不得',post:'穿。',hint:'(không nỡ)',ans:'舍不得'},
  {pre:'你要想清楚，这样做的',blank:'后果',post:'很严重！',hint:'(hậu quả)',ans:'后果'},
  {pre:'开始不考虑得失，后果就是',blank:'屡',post:'下屡败。',hint:'(nhiều lần)',ans:'屡'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (动词+下来 · 舍不得) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['几局','下来','，','基本上','都是','不到10分钟','我就','败下阵来','。'],ans:'几局下来，基本上都是不到10分钟我就败下阵来。',audio:'几局下来，基本上都是不到10分钟我就败下阵来。'},
  {words:['说到这','，','父亲','停下来','，','把棋子','重新','摆好','。'],ans:'说到这，父亲停下来，把棋子重新摆好。',audio:'说到这，父亲停下来，把棋子重新摆好。'},
  {words:['论文的','题目','定下来','了吗','？'],ans:'论文的题目定下来了吗？',audio:'论文的题目定下来了吗？'},
  {words:['那张纸','是','从这本书里','撕下来','的','。'],ans:'那张纸是从这本书里撕下来的。',audio:'那张纸是从这本书里撕下来的。'},
  {words:['我','把','老师说的话','都','记下来了','。'],ans:'我把老师说的话都记下来了。',audio:'我把老师说的话都记下来了。'},
  {words:['奶奶','买了','新衣服','也','舍不得','穿','。'],ans:'奶奶买了新衣服也舍不得穿。',audio:'奶奶买了新衣服也舍不得穿。'},
  {words:['我','真','舍不得','离开','老师和同学们','。'],ans:'我真舍不得离开老师和同学们。',audio:'我真舍不得离开老师和同学们。'},
  {words:['把你最喜欢的玩具','送给','小朋友','，','你','舍得吗','？'],ans:'把你最喜欢的玩具送给小朋友，你舍得吗？',audio:'把你最喜欢的玩具送给小朋友，你舍得吗？'},
  {words:['他','舍不得','花钱','买','这么贵的书','。'],ans:'他舍不得花钱买这么贵的书。',audio:'他舍不得花钱买这么贵的书。'},
  {words:['最重要的问题','在于','你','心态','不对','。'],ans:'最重要的问题在于你心态不对。',audio:'最重要的问题在于你心态不对。'},
  {words:['每走一步','，','你','事先','都应该','想清楚','。'],ans:'每走一步，你事先都应该想清楚。',audio:'每走一步，你事先都应该想清楚。'},
  {words:['请','珍惜','你','已经','拥有的','一切','。'],ans:'请珍惜你已经拥有的一切。',audio:'请珍惜你已经拥有的一切。'},
  {words:['老板的责备','把','职员们','都','吓坏了','。'],ans:'老板的责备把职员们都吓坏了。',audio:'老板的责备把职员们都吓坏了。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'生意失败，他____了很多钱。',opts:['损失','失去','失败','丢掉'],ans:0,
   exp:'Mất một khoản tiền (giảm bớt tài sản) → 损失 (做一做 của sách). 失去 thường chỉ mất hẳn điều trừu tượng: 失去记忆.'},
  {wrong:'因为一场病，他____了记忆。',opts:['失去','损失','失败','减少'],ans:0,
   exp:'Mất hẳn trí nhớ → 失去记忆 (做一做 của sách). 损失 là giảm bớt một phần tài sản.'},
  {wrong:'如果有变动，请____24小时告诉我。',opts:['提前','事先','首先','原先'],ans:0,
   exp:'Có lượng thời gian cụ thể (24小时) → 提前 (bài tập 2 của sách). 事先 không mang lượng thời gian.'},
  {wrong:'你要想清楚，这样做的____很严重！',opts:['后果','结果','效果','成果'],ans:0,
   exp:'Kết quả xấu + 很严重 → 后果 (bài tập 2 của sách). 结果 trung tính; 效果, 成果 thường mang nghĩa tốt.'},
  {wrong:'在国外工作____，我一直很想念我的家乡和家人。',opts:['期间','时期','时代','年代'],ans:0,
   exp:'Sự việc cụ thể + 期间 = trong thời gian … (bài tập 2 của sách). 时期 là giai đoạn dài mang tính lịch sử.'},
  {wrong:'这几次考试我都考得不太好，觉得有点儿____。',opts:['灰心','死心','放心','小心'],ans:0,
   exp:'Nản lòng vì thất bại → 灰心 (bài tập 2 của sách). 死心 = hết hy vọng hẳn, không đi với 有点儿 trong ngữ cảnh này.'},
  {wrong:'你要吸取____，以后别再犯同样的错误。',opts:['教训','教练','教育','训练'],ans:0,
   exp:'吸取教训 = rút ra bài học. 教练 = huấn luyện viên — chỉ khác một chữ, dễ nhầm.'},
  {wrong:'只有做好准备的人才能____住机会。',opts:['把握','保持','坚持','拥有'],ans:0,
   exp:'把握 + 住 + 机会 = nắm được cơ hội (bài tập 1 của sách; bảng 词语搭配: 把握 + 好 / 住).'},
  {wrong:'要____时间，因为失去的时间永远都不会再回来。',opts:['珍惜','珍贵','可惜','爱好'],ans:0,
   exp:'珍惜 là động từ + 时间. 珍贵 là tính từ (珍贵的礼物), không mang tân ngữ.'},
  {wrong:'父亲要跟我下棋，我高兴地____了。',opts:['答应','回答','应该','答案'],ans:0,
   exp:'Nhận lời đề nghị → 答应. 回答 là trả lời câu hỏi, không dùng cho lời mời.'},
  {wrong:'考试的时候不要____紧张，正常发挥就好。',opts:['过于','过去','于是','对于'],ans:0,
   exp:'过于 + tính từ hai âm tiết = quá … (ý chê).'},
  {wrong:'这只是____因素，最重要的是心态。',opts:['次要','主要','重要','需要'],ans:0,
   exp:'Đối lập với 最重要 → 次要因素 (yếu tố thứ yếu).'},
  {wrong:'有得____有失，有失才会有得。',opts:['必然','当然','虽然','居然'],ans:0,
   exp:'Có A ắt có B (quy luật tất yếu) → 必然. 当然 = đương nhiên, dùng khi khẳng định điều hiển nhiên.'},
  {wrong:'你说得这么复杂，我觉得他____能听懂。',opts:['未必','必须','不必','务必'],ans:0,
   exp:'未必 = chưa chắc (bài tập 3 của sách). 必须 / 务必 = nhất định phải; 不必 = không cần.'},
  {wrong:'后三分之二的时间，你又____了相反的错误。',opts:['犯','做','有','出'],ans:0,
   exp:'Mắc lỗi = 犯错误. Không nói 做错误.'},
  {wrong:'你遇到问题总爱____别人，就不想从自己身上找找原因。',opts:['责备','表扬','否认','答应'],ans:0,
   exp:'Đổ lỗi, trách người khác → 责备别人 (câu nghe 9 của sách bài tập).'},
  {wrong:'“怎么不珍惜呀？我每走一步，都想半天。”我____说。',opts:['否认','承认','答应','责备'],ans:0,
   exp:'Không thừa nhận lời bố nói → 否认. 承认 là nghĩa ngược lại.'},
  {wrong:'买了件新衣服____穿，结果衣服小了，穿不了了。',opts:['舍不得','舍得','不得不','不得了'],ans:0,
   exp:'Không nỡ mặc → 舍不得 + V (练一练 của sách). 舍得 dạng khẳng định dùng khi hỏi.'},
  {wrong:'学习好不好，不____时间多少，而在于方法对不对。',opts:['在于','对于','关于','由于'],ans:0,
   exp:'不在于 A，而在于 B = không nằm ở A mà ở B.'},
  {wrong:'我仔细____过，你三分之二的棋子是在前三分之一的时间失去的。',opts:['观察','观点','观念','参观'],ans:0,
   exp:'仔细 + 观察 (bảng 词语搭配). 观点 / 观念 là danh từ; 参观 là tham quan nơi chốn.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Lần thi đấu này tôi đấu không đúng sức là vì tâm lý quá căng thẳng.',zh:'这次比赛我之所以没发挥好，是因为心态太紧张了。',py:'Zhè cì bǐsài wǒ zhīsuǒyǐ méi fāhuī hǎo, shì yīnwèi xīntài tài jǐnzhāng le.',goiY:['之所以……是因为……','发挥','心态'],giai:'之所以 + kết quả, 是因为 + nguyên nhân (trật tự ngược với 因为……所以……); 没发挥好 = "không phát huy được, đấu/thi không đúng sức".'},
  {vi:'Tôi quý đôi giày mới này vô cùng, nên hễ trời mưa là không nỡ đi.',zh:'我对这双新球鞋珍惜得不得了，所以一到下雨天就舍不得穿。',py:'Wǒ duì zhè shuāng xīn qiúxié zhēnxī de bùdéliǎo, suǒyǐ yí dào xià yǔ tiān jiù shěbude chuān.',goiY:['珍惜','舍不得','所以'],giai:'舍不得 + V = không nỡ làm gì (vì tiếc); bản thân đã mang nghĩa phủ định, không thêm 不 / 没 phía trước.'},
  {vi:'Mấy nguyên tắc thầy tổng kết, tốt nhất bạn ghi lại ngay, nếu không lúc thi chưa chắc đã nhớ ra.',zh:'老师总结的这几条原则你最好马上记下来，否则考试时未必想得起来。',py:'Lǎoshī zǒngjié de zhè jǐ tiáo yuánzé nǐ zuìhǎo mǎshàng jì xiàlai, fǒuzé kǎoshì shí wèibì xiǎng de qǐlái.',goiY:['记下来','否则','未必','原则'],giai:'V + 下来 ở đây = ghi lại, giữ cố định (记下来); 否则 = nếu không thì, đứng đầu vế sau.'},
  {vi:'Sau mấy ván, tôi gần như thua sạch trước bạn cùng bàn, nhưng huấn luyện viên nói không cần nản lòng, điều quan trọng là rút ra bài học.',zh:'几局下来，我几乎都输给了同桌，但是教练说不必灰心，关键在于吸取教训。',py:'Jǐ jú xiàlai, wǒ jīhū dōu shū gěile tóngzhuō, dànshì jiàoliàn shuō búbì huīxīn, guānjiàn zàiyú xīqǔ jiàoxùn.',goiY:['几局下来','灰心','在于','吸取教训'],giai:'几局下来 = sau mấy ván (下来 chỉ một quá trình đã kết thúc); 在于 = nằm ở, là ở — phía sau là danh từ hoặc cụm động từ.'},
  {vi:'Dù bằng chứng sờ sờ trước mắt, cậu ta vẫn một mực chối không phải lỗi của mình, điều đó khiến thầy giáo rất thất vọng.',zh:'尽管证据就在眼前，他还是坚决否认是自己犯的错，这让老师非常失望。',py:'Jǐnguǎn zhèngjù jiù zài yǎnqián, tā háishi jiānjué fǒurèn shì zìjǐ fàn de cuò, zhè ràng lǎoshī fēicháng shīwàng.',goiY:['尽管……还是……','否认','犯'],giai:'尽管 + sự thật đã có, 还是 + kết quả không đổi (khác 即使 dùng cho giả thiết); 否认 + mệnh đề = phủ nhận rằng ….'},
  {vi:'Thay vì vì tiếc không nỡ bỏ game mà mất thêm thời gian học, chi bằng ngay bây giờ đưa điện thoại cho bố mẹ giữ.',zh:'与其因为舍不得放弃游戏而失去更多学习时间，不如现在就把手机交给爸妈保管。',py:'Yǔqí yīnwèi shěbude fàngqì yóuxì ér shīqù gèng duō xuéxí shíjiān, bùrú xiànzài jiù bǎ shǒujī jiāo gěi bàmā bǎoguǎn.',goiY:['与其……不如……','舍不得','失去'],giai:'与其 A 不如 B = thay vì A chi bằng B (B là lựa chọn tốt hơn); 因为……而…… = vì … mà ….'},
  {vi:'Khi thi tuyệt đối đừng viết bừa mà không suy nghĩ, chỉ khi nghĩ rõ hướng giải của đề từ trước thì bạn mới chắc chắn giành điểm cao.',zh:'考试时千万别不假思索地乱写，只有事先把题目的思路想清楚，你才有把握拿高分。',py:'Kǎoshì shí qiānwàn bié bù jiǎ sīsuǒ de luàn xiě, zhǐyǒu shìxiān bǎ tímù de sīlù xiǎng qīngchu, nǐ cái yǒu bǎwò ná gāo fēn.',goiY:['不假思索','只有……才……','事先','把握'],giai:'不假思索 = không cần nghĩ ngợi (ở đây mang ý chê: làm vội); 只有……才 nêu điều kiện duy nhất; 有把握 = nắm chắc, tự tin.'},
  {vi:'Nếu bạn quá tự tin vào bản thân, trước kỳ thi không ôn tập nghiêm túc, thì hậu quả rất có thể là liên tục mắc lỗi ngớ ngẩn trong kỳ thi đại học.',zh:'如果你对自己过于自信，考前不认真复习，后果很可能是在高考中屡犯低级错误。',py:'Rúguǒ nǐ duì zìjǐ guòyú zìxìn, kǎo qián bú rènzhēn fùxí, hòuguǒ hěn kěnéng shì zài gāokǎo zhōng lǚ fàn dījí cuòwù.',goiY:['如果……','过于','后果','屡犯'],giai:'过于 + tính từ = quá mức (sắc thái chê, trang trọng hơn 太); 屡 = nhiều lần, thường đi với động từ đơn âm (屡犯, 屡败).'},
  {vi:'Một khi đã lỡ đợt đăng ký lần này, bạn chỉ có thể trơ mắt nhìn người khác đi thi, lúc đó thiệt hại mới lớn.',zh:'一旦错过了这次报名机会，你就只能眼睁睁地看着别人去参加比赛，损失可就大了。',py:'Yídàn cuòguòle zhè cì bàomíng jīhuì, nǐ jiù zhǐ néng yǎnzhēngzhēng de kànzhe biérén qù cānjiā bǐsài, sǔnshī kě jiù dà le.',goiY:['一旦……就……','眼睁睁','损失'],giai:'一旦 = một khi (điều kiện xảy ra thì kéo theo kết quả), đi với 就; 眼睁睁 = trơ mắt nhìn mà bất lực.'},
  {vi:'Đời người cũng như chơi cờ tướng: nếu thứ gì cũng không nỡ buông, thì dù vận may có tốt đến đâu cũng chưa chắc thắng được đến cuối.',zh:'人生和下象棋一样，如果什么都舍不得放弃，那么即使运气再好，也未必能赢到最后。',py:'Rénshēng hé xià xiàngqí yíyàng, rúguǒ shénme dōu shěbude fàngqì, nàme jíshǐ yùnqi zài hǎo, yě wèibì néng yíng dào zuìhòu.',goiY:['如果……那么……','舍不得','即使……也……','未必'],giai:'即使 + 再 + tính từ = dù có … đến đâu, 也 + kết quả không đổi; 未必 = chưa chắc, nhẹ hơn phủ định tuyệt đối 不.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Bố tôi là huấn luyện viên cờ tướng, nên hễ tôi được nghỉ về nhà là ông lại muốn chơi cờ với tôi.',zh:'父亲是一位象棋教练，所以我一放假回家他就要跟我下棋。',py:'Fùqīn shì yí wèi xiàngqí jiàoliàn, suǒyǐ wǒ yí fàngjià huí jiā tā jiù yào gēn wǒ xià qí.',goiY:['象棋 = cờ tướng','教练 = huấn luyện viên','一……就…… = hễ … là …'],giai:'一……就…… nối hai hành động xảy ra liền nhau hoặc lặp lại theo thói quen; 下棋 = chơi cờ (động từ 下).'},
  {vi:'Chưa đầy ba phút tôi đã mất quá nửa số quân, rốt cuộc chỉ biết trơ mắt nhìn bố "chiếu tướng".',zh:'不到三分钟我就损失了一大半棋子，结果只能眼睁睁地看着父亲“将军”。',py:'Bú dào sān fēnzhōng wǒ jiù sǔnshīle yí dà bàn qízǐ, jiéguǒ zhǐ néng yǎnzhēngzhēng de kànzhe fùqīn "jiāngjūn".',goiY:['损失 = mất, tổn thất','眼睁睁 = trơ mắt','将军 = chiếu tướng'],giai:'将军 ở đây là động từ trong cờ tướng = "chiếu tướng", không phải "tướng quân"; 结果 dẫn ra kết cục.'},
  {vi:'Tôi không phục, bảo lần này là do xui, thế nhưng ván thứ hai lại thua tiếp.',zh:'我不服气地说这次是运气不好，可是第二局又输了。',py:'Wǒ bù fúqì de shuō zhè cì shì yùnqi bù hǎo, kěshì dì-èr jú yòu shū le.',goiY:['服气 = phục','运气 = vận may','局 = ván'],giai:'局 là lượng từ cho ván cờ, trận đấu; 又 + V + 了 = lại (đã lặp lại); 可是 chuyển ý trái với mong muốn.'},
  {vi:'Bố nói người mới học cờ thua là bình thường, nhưng nhất định phải rút ra bài học, nếu không thì có chơi thêm mười năm cũng chưa chắc thắng.',zh:'父亲说初学棋的人输了很正常，但一定要吸取教训，否则再下十年也未必能赢。',py:'Fùqīn shuō chū xué qí de rén shūle hěn zhèngcháng, dàn yídìng yào xīqǔ jiàoxùn, fǒuzé zài xià shí nián yě wèibì néng yíng.',goiY:['吸取教训 = rút ra bài học','否则 = nếu không thì','未必 = chưa chắc'],giai:'否则 nêu hậu quả nếu không làm theo vế trước; 再 + V + thời gian + 也 = có … thêm bao lâu nữa cũng ….'},
  {vi:'Bố cho rằng kỹ thuật và kinh nghiệm không phải điều quan trọng nhất mà chỉ là yếu tố thứ yếu, vấn đề thật sự nằm ở tâm lý.',zh:'父亲认为技术和经验不是最重要的，而是次要因素，真正的问题在于心态。',py:'Fùqīn rènwéi jìshù hé jīngyàn bú shì zuì zhòngyào de, ér shì cìyào yīnsù, zhēnzhèng de wèntí zàiyú xīntài.',goiY:['不是……而是……','次要因素 = yếu tố thứ yếu','在于 = nằm ở'],giai:'不是 A 而是 B: phủ định A, khẳng định B; 在于 + danh từ = "nằm ở, là do".'},
  {vi:'Tôi chối rằng mình không quý quân cờ, vì mỗi nước đi tôi đều phải nghĩ rất lâu.',zh:'我否认自己不珍惜棋子，因为我每走一步都要想半天。',py:'Wǒ fǒurèn zìjǐ bù zhēnxī qízǐ, yīnwèi wǒ měi zǒu yí bù dōu yào xiǎng bàntiān.',goiY:['否认 = phủ nhận','珍惜 = quý trọng'],giai:'否认 + mệnh đề = phủ nhận rằng …; 每……都…… = mỗi … đều …; 想半天 = nghĩ rất lâu (半天 phóng đại).'},
  {vi:'Bố đã quan sát kỹ: hai phần ba số quân của tôi mất trong một phần ba thời gian đầu, vì trong khoảng đó tôi rất tự tin, đi cờ không cần suy nghĩ.',zh:'父亲仔细观察过，我三分之二的棋子是在前三分之一的时间失去的，因为这期间我很有把握，下棋时不假思索。',py:'Fùqīn zǐxì guānchá guo, wǒ sān fēn zhī èr de qízǐ shì zài qián sān fēn zhī yī de shíjiān shīqù de, yīnwèi zhè qījiān wǒ hěn yǒu bǎwò, xià qí shí bù jiǎ sīsuǒ.',goiY:['观察 = quan sát','期间 = trong khoảng thời gian','不假思索 = không cần nghĩ ngợi'],giai:'是……的 nhấn mạnh thời điểm mất quân (是在前三分之一的时间失去的); 三分之二 = hai phần ba (mẫu số đọc trước, tử số sau).'},
  {vi:'Về sau tôi lại mắc lỗi ngược lại: quá quý quân cờ, một quân cũng không muốn mất, thế mà rốt cuộc lại mất từng quân một.',zh:'后来我又犯了相反的错误：对棋子过于珍惜，一个也不想失，反而一个一个都失去了。',py:'Hòulái wǒ yòu fànle xiāngfǎn de cuòwù: duì qízǐ guòyú zhēnxī, yí ge yě bù xiǎng shī, fǎn\'ér yí ge yí ge dōu shīqù le.',goiY:['犯 = mắc (lỗi)','过于 = quá mức','反而 = trái lại'],giai:'反而 chỉ kết quả ngược với mong muốn; 一个也不 + V = không … dù chỉ một (phủ định tuyệt đối).'},
  {vi:'Bố dừng lại, trách móc nhìn tôi một cái rồi nói thắng không phải nguyên tắc mà là mục đích; còn nguyên tắc là phải tính toán được mất.',zh:'父亲停下来责备地看了我一眼，说赢不是原则，而是目的；至于原则，是要考虑得失。',py:'Fùqīn tíng xiàlai zébèi de kànle wǒ yì yǎn, shuō yíng bú shì yuánzé, ér shì mùdì; zhìyú yuánzé, shì yào kǎolǜ déshī.',goiY:['停下来 = dừng lại','责备 = trách móc','至于 = còn về (bài 26)'],giai:'V + 下来 ở đây = động tác dừng hẳn (停下来); 至于 chuyển sang đề tài liên quan — "còn về …".'},
  {vi:'Bố nói có được ắt có mất, mỗi nước đi đều phải nghĩ trước xem mình chấp nhận mất gì; nếu không, đợi mất nhiều rồi mới tiếc thì hậu quả là đánh ván nào thua ván ấy.',zh:'父亲说有得必然有失，每走一步都要事先想清楚愿意失去什么，否则等失去多了再舍不得，后果就是屡下屡败。',py:'Fùqīn shuō yǒu dé bìrán yǒu shī, měi zǒu yí bù dōu yào shìxiān xiǎng qīngchu yuànyì shīqù shénme, fǒuzé děng shīqù duō le zài shěbude, hòuguǒ jiù shì lǚ xià lǚ bài.',goiY:['必然 = tất yếu','事先 = trước (khi làm)','否则 = nếu không','屡下屡败 = đánh lần nào thua lần ấy'],giai:'否则 nêu hậu quả khi không làm theo lời khuyên; 屡 A 屡 B = hễ A là B, lặp lại nhiều lần; 舍不得 ở đây = tiếc, không nỡ mất.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['必然','失去','舍不得','吸取','珍惜'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với đầu đề "Được và mất" — kể một lần em phải bỏ đi điều gì để có được điều khác, và em rút ra điều gì (theo đề 命题写作 của sách: 请以“得与失”为题，谈一谈你的看法).',
  outline:[
    'Câu mở: nêu quan điểm "có được ắt có mất" — dùng 必然 (có thể mở bằng 人生就像下棋).',
    'Thân 1: kể điều em đã mất để có được điều khác — dùng 失去.',
    'Thân 2: trước đây em cái gì cũng không nỡ bỏ, kết quả ra sao; sau đó rút ra bài học — dùng 舍不得, 吸取.',
    'Kết: bây giờ em biết trân trọng điều mình đang có — dùng 珍惜.'
  ],
  model:{
    zh:'人生就像下棋，有得必然有失。上高中以后，为了考上好大学，我失去了很多玩儿的时间，但是我得到了知识和真正的朋友。以前我什么都想要，什么都舍不得放弃，结果什么都做不好。后来我吸取了教训，学会了选择。现在我更懂得珍惜自己已经拥有的东西。',
    py:'Rénshēng jiù xiàng xià qí, yǒu dé bìrán yǒu shī. Shàng gāozhōng yǐhòu, wèile kǎoshàng hǎo dàxué, wǒ shīqùle hěn duō wánr de shíjiān, dànshì wǒ dédàole zhīshi hé zhēnzhèng de péngyou. Yǐqián wǒ shénme dōu xiǎng yào, shénme dōu shěbude fàngqì, jiéguǒ shénme dōu zuò bu hǎo. Hòulái wǒ xīqǔle jiàoxùn, xuéhuìle xuǎnzé. Xiànzài wǒ gèng dǒngde zhēnxī zìjǐ yǐjīng yōngyǒu de dōngxi.',
    vn:'Đời người như ván cờ, có được ắt có mất. Từ khi lên cấp ba, để thi đỗ đại học tốt, tôi đã mất đi rất nhiều thời gian vui chơi, nhưng tôi có được kiến thức và những người bạn thật sự. Trước đây cái gì tôi cũng muốn, cái gì cũng không nỡ bỏ, kết quả là chẳng làm tốt được việc gì. Sau đó tôi rút ra bài học, học được cách lựa chọn. Bây giờ tôi càng biết trân trọng những gì mình đang có.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có viết nhầm 珍贵时间 (đúng: 珍惜时间) hay 巨大的失去 (đúng: 巨大的损失) không?',
    'Có viết 舍得不 / 没舍不得 (đúng: 舍不得 + V) hay 吸收教训 (đúng: 吸取教训) không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是《得与失》。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'必然', loai:'tính từ', cach:'有得必然有失 · 必然会…… · 必然的结果',
     sai:[{re:'(很|非常|太|十分)必然', sua:'必然会…… / 是必然的', giai:'必然 đã mang nghĩa "tất yếu", không đi với 很 / 非常 phía trước.'},
          {re:'是必然[，。！]', sua:'……是必然的。', giai:'Làm vị ngữ phải dùng khung 是……的: 失败是必然的.'}]},
    {tu:'失去', loai:'động từ', cach:'失去机会 · 失去时间 · 失去信心',
     sai:[{re:'失去了?[一二三四五六七八九十几两百千万0-9]+(块|元|万)', sua:'损失了……块钱', giai:'Mất một khoản tiền (giảm bớt tài sản) dùng 损失, không dùng 失去 (mục 词语辨析).'},
          {re:'(巨大|很大|很多|不少)的失去', sua:'巨大的损失', giai:'失去 không làm danh từ; cần danh từ thì dùng 损失.'}]},
    {tu:'舍不得', loai:'động từ', cach:'舍不得 + V (舍不得放弃 / 舍不得花钱)',
     sai:[{re:'舍得不', sua:'舍不得 + V', giai:'Dạng phủ định là 舍不得 (不 xen giữa 舍 và 得), không viết 舍得不.'},
          {re:'没有?舍不得', sua:'舍不得 / 没舍得', giai:'舍不得 đã là phủ định; nói "đã không nỡ" dùng 没舍得 + V.'}]},
    {tu:'吸取', loai:'động từ', cach:'吸取教训 · 吸取经验',
     sai:[{re:'吸收(了)?(这次的|失败的|这个)?教训', sua:'吸取教训', giai:'"Rút ra bài học" là cụm cố định 吸取教训; 吸收 dùng cho 营养, 水分, 知识.'},
          {re:'吸取(营养|水分)', sua:'吸收营养', giai:'Chất dinh dưỡng, nước → 吸收; 吸取 dùng cho 教训, 经验.', nhe:true}]},
    {tu:'珍惜', loai:'động từ', cach:'珍惜时间 · 珍惜机会 · 珍惜现在',
     sai:[{re:'珍贵(时间|机会|生命|现在|朋友|一切)', sua:'珍惜时间', giai:'珍贵 là tính từ (珍贵的礼物), không mang tân ngữ; "quý trọng thời gian" là 珍惜时间.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'有 A 必然有 B', nhan:'必然', vd:'人生就像下棋，有得必然有失。', khi:'Câu MỞ — nêu quan điểm, dùng đúng câu của bài khoá.'},
    {ten:'为了……，……', nhan:'为了', vd:'为了考上好大学，我失去了很多玩儿的时间。', khi:'Kể điều mình đánh đổi để đạt mục tiêu.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然失去了很多时间，但是我得到了知识。', khi:'Nêu cái mất rồi lật sang cái được.'},
    {ten:'什么都……', nhan:'什么都', vd:'以前我什么都想要，什么都舍不得放弃。', khi:'Tả thái độ "cái gì cũng muốn" trước khi hiểu ra.'},
    {ten:'以前……，后来……，现在……', nhan:'后来', vd:'后来我吸取了教训，学会了选择。', khi:'Nối các giai đoạn thay đổi của bản thân.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'失去不仅是坏事，也能让我们学会选择。', khi:'Nêu mặt tích cực của "mất".'},
    {ten:'只有……才……', nhan:'只有', vd:'只有学会放弃，才能得到更重要的东西。', khi:'Câu KẾT — rút ra bài học.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['做出准确的估计','我们需要','事先'],
     dap:'我们需要事先做出准确的估计。',
     vn:'Chúng ta cần đưa ra dự tính chính xác từ trước.',
     giai:'Câu 29 sách bài tập. Chủ ngữ + 需要 → trạng ngữ 事先 đứng trước động từ → 做出准确的估计.'},
    {manh:['你已经拥有的','请珍惜','一切'],
     dap:'请珍惜你已经拥有的一切。',
     vn:'Hãy trân trọng tất cả những gì bạn đang có.',
     giai:'Câu 30 sách bài tập. 请 + 珍惜 + tân ngữ; định ngữ 你已经拥有的 đứng trước 一切.'},
    {manh:['把职员们','都吓坏了','老板的责备'],
     dap:'老板的责备把职员们都吓坏了。',
     vn:'Lời quở trách của ông chủ làm các nhân viên sợ hết hồn.',
     giai:'Câu 31 sách bài tập. Câu 把: chủ ngữ (老板的责备) + 把 + tân ngữ + 都 + V + bổ ngữ (吓坏了).'},
    {manh:['舍不得','把这件新衣服','他','送给别人'],
     dap:'他舍不得把这件新衣服送给别人。',
     vn:'Cậu ấy không nỡ tặng bộ quần áo mới này cho người khác.',
     giai:'舍不得 đứng trước cả cụm 把 (把 + tân ngữ + 送给 + người).'},
    {manh:['在于','心态不对','最重要的问题','你'],
     dap:'最重要的问题在于你心态不对。',
     vn:'Vấn đề quan trọng nhất nằm ở chỗ tâm lý của con không đúng.',
     giai:'Chủ ngữ 最重要的问题 + 在于 + mệnh đề (你心态不对).'},
    {manh:['也未必能赢','否则','你就再下上10年'],
     dap:'否则，你就再下上10年，也未必能赢。',
     vn:'Nếu không, con có đánh thêm mười năm nữa cũng chưa chắc thắng được.',
     giai:'否则 đứng đầu câu; 就 (= 就算) + giả thiết … 也 + 未必 + V.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 热身 2 và 话题讨论 của sách: 人生如棋
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (下棋 · 人生如棋). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 珍惜 · 失去 · 舍不得 · 必然 · 吸取 · 教训 · 事先 · 把握.',
  questions:[
    {q_zh:'课文中父亲是怎样教育孩子的？',
     q_vn:'Trong bài khoá, người bố đã dạy con như thế nào?',
     hint:'Kể theo trình tự: để con đánh → quan sát → chỉ ra nguyên nhân; dùng 不是……而是…… và 在于',
     sample:'父亲没有直接告诉我答案，而是先跟我下了几局棋。他仔细观察过我下棋，然后告诉我，技术只是次要因素，最重要的问题在于心态不对。最后他让我明白：下棋要考虑得失，人生也是如此。',
     sample_vn:'Bố không nói thẳng đáp án cho tôi mà đánh với tôi mấy ván trước. Bố đã quan sát kỹ cách tôi đánh cờ, rồi bảo tôi rằng kỹ thuật chỉ là yếu tố thứ yếu, vấn đề quan trọng nhất nằm ở tâm lý không đúng. Cuối cùng bố giúp tôi hiểu: đánh cờ phải cân nhắc được mất, đời người cũng vậy.',
     note:'Câu hỏi 1 trong 话题讨论 của sách. Nêu cách dạy (để con tự trải nghiệm rồi mới giảng) chứ không kể lại toàn bộ bài.'},
    {q_zh:'你同意父亲的观点吗？为什么？',
     q_vn:'Em có đồng ý với quan điểm của người bố không? Vì sao?',
     hint:'Trả lời 同意 / 不同意 + ví dụ của bản thân; dùng 必然 và 事先',
     sample:'我同意。有得必然有失，想什么都得到是不可能的。比如上了高中，为了学习好，我不得不失去一些玩儿的时间。所以每做一个决定，事先都应该想清楚自己愿意失去什么。',
     sample_vn:'Tôi đồng ý. Có được ắt có mất, muốn có được tất cả là không thể. Ví dụ lên cấp ba, để học tốt, tôi buộc phải bỏ bớt thời gian vui chơi. Vì vậy mỗi lần quyết định việc gì, trước đó đều nên nghĩ kỹ mình chịu mất đi điều gì.',
     note:'Câu hỏi 2 của sách. Bố cục: quan điểm → ví dụ → kết luận — nói gọn mà chắc.'},
    {q_zh:'你对于“得”“失”有什么看法？',
     q_vn:'Em nghĩ thế nào về "được" và "mất"?',
     hint:'Nêu cách nhìn tích cực về "mất"; dùng 未必, 吸取教训, 珍惜',
     sample:'我觉得“失”未必是坏事。失去了一次机会，我们可以吸取教训，下次好好把握。最重要的是珍惜已经拥有的东西，不要等到失去了才后悔。',
     sample_vn:'Tôi thấy "mất" chưa chắc đã là chuyện xấu. Mất một cơ hội, ta có thể rút ra bài học, lần sau nắm bắt cho tốt. Quan trọng nhất là trân trọng những gì đang có, đừng đợi đến khi mất rồi mới hối hận.',
     note:'Câu hỏi 3 của sách. 等到……才…… diễn tả sự muộn màng rất tự nhiên.'},
    {q_zh:'你会哪种棋牌运动？你是怎么学会的？',
     q_vn:'Em biết chơi môn cờ / bài nào? Em học như thế nào?',
     hint:'Kể môn, người dạy, cảm nhận; dùng 是……的 và 灰心',
     sample:'我会下象棋，是小时候跟爷爷学的。刚开始我常常输，有点儿灰心，爷爷就告诉我要吸取教训。现在我下得还不错，我觉得下棋不仅有意思，也能让人学会冷静地思考。',
     sample_vn:'Tôi biết đánh cờ tướng, hồi nhỏ học với ông nội. Lúc đầu tôi hay thua, hơi nản, ông liền bảo tôi phải rút ra bài học. Bây giờ tôi đánh cũng khá, tôi thấy đánh cờ không chỉ thú vị mà còn giúp người ta học cách suy nghĩ bình tĩnh.',
     note:'Câu hỏi 2 của phần 热身. Nói về chuyện đã qua nhấn mạnh người / thời điểm → 是……的.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 27.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第27课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'到了新公司，你一定要吸取教训，争取留用。'},
            {sp:'女',zh:'上次的机会我没有珍惜，这次一定好好表现。'}],
     q:'关于女的，可以知道什么？',qvn:'Có thể biết được điều gì về người phụ nữ?',
     opts:['已经被新公司留用了','不喜欢现在的公司','上次表现得很好','上次没有珍惜机会'],ans:3,
     why:'上次的机会我没有珍惜 — lần trước cô ấy không trân trọng cơ hội. "争取留用" là mục tiêu, chưa phải kết quả.',
     words:['吸取','教训','珍惜']},

    {n:2,
     lines:[{sp:'女',zh:'参加这个项目的选手一个比一个厉害，刘云能进决赛真不容易。'},
            {sp:'男',zh:'今年他的状态很好，可以说是超水平发挥了。'}],
     q:'男的觉得刘云怎么样？',qvn:'Người đàn ông thấy Lưu Vân thế nào?',
     opts:['状态一般','发挥得非常好','进不了决赛','不如其他选手'],ans:1,
     why:'超水平发挥 = thể hiện vượt trình độ, tức là phát huy rất tốt.',
     words:['发挥']},

    {n:3,
     lines:[{sp:'男',zh:'寒假你不打算回家了吗？'},
            {sp:'女',zh:'我在一家旅行社实习，公司让我设计一条新线路，年前要出差做调研。'}],
     q:'女的寒假为什么不回家？',qvn:'Vì sao kỳ nghỉ đông cô ấy không về nhà?',
     opts:['要出差做调研','要去旅行','要准备考试','家里没有人'],ans:0,
     why:'年前要出差做调研 — trước Tết phải đi công tác khảo sát cho công ty du lịch. Bẫy: 旅行社 không có nghĩa là cô ấy đi du lịch.',
     words:[]},

    {n:4,
     lines:[{sp:'女',zh:'小刘运气真不错，刚来一年就成了主力队员。'},
            {sp:'男',zh:'你也别灰心，论实力你未必比她差，下个月的比赛好好把握。'}],
     q:'男的对女的说这些话是想怎样？',qvn:'Người đàn ông nói những lời này nhằm mục đích gì?',
     opts:['批评她','表扬小刘','鼓励她','劝她放弃'],ans:2,
     why:'别灰心 + 你未必比她差 + 好好把握 — toàn lời động viên, khích lệ (鼓励).',
     words:['运气','灰心','未必','把握']},

    {n:5,
     lines:[{sp:'女',zh:'我对小林是有些看法，这一点儿我不否认。'},
            {sp:'男',zh:'我希望你找机会和他沟通一下，把问题谈开，别影响工作。'}],
     q:'女的和小林最可能是什么关系？',qvn:'Người phụ nữ và Tiểu Lâm nhiều khả năng có quan hệ gì?',
     opts:['夫妻','同事','师生','邻居'],ans:1,
     why:'别影响工作 — giữ quan hệ để không ảnh hưởng công việc → họ là đồng nghiệp (同事).',
     words:['否认']},

    {n:6,
     lines:[{sp:'女',zh:'你不知道吗？比赛期间，任何队员都不能随便外出。'},
            {sp:'男',zh:'我事先跟教练打过招呼的，他同意了。'}],
     q:'关于男的，可以知道什么？',qvn:'Có thể biết được điều gì về người đàn ông?',
     opts:['他是教练','他不知道这个规定','他没打招呼就外出了','教练同意他外出'],ans:3,
     why:'我事先跟教练打过招呼的，他同意了 — đã báo trước và huấn luyện viên đồng ý.',
     words:['期间','事先','教练']},

    {n:7,
     lines:[{sp:'女',zh:'昨天我去隔壁莉莉家还东西，他们家的窗帘我特喜欢。'},
            {sp:'男',zh:'怎么？你又想干什么？'},
            {sp:'女',zh:'咱家客厅的窗帘用了好多年了，花样也不流行了。'},
            {sp:'男',zh:'我看就是有些脏了，洗洗还能用。'}],
     q:'关于窗帘，男的是什么意思？',qvn:'Về rèm cửa, ý của người đàn ông là gì?',
     opts:['应该买新的','花样很流行','洗洗还能用','莉莉家的不好看'],ans:2,
     why:'我看就是有些脏了，洗洗还能用 — anh ấy không muốn mua mới, giặt đi là dùng tiếp được.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'上次李阳去德国讲学，本来领导也问过我。'},
            {sp:'女',zh:'那你怎么不去呀？'},
            {sp:'男',zh:'当时孩子小，我有点儿犹豫。现在觉得有点儿后悔了。'},
            {sp:'女',zh:'多好的机会失去了，我的经验就是，有机会一定要好好把握。'}],
     q:'男的为什么没去德国讲学？',qvn:'Vì sao người đàn ông không đi Đức giảng dạy?',
     opts:['当时孩子还小','领导没同意','他不想去德国','他的德语不好'],ans:0,
     why:'当时孩子小，我有点儿犹豫 — lúc đó con còn nhỏ nên anh ấy do dự. Lãnh đạo đã hỏi anh (本来领导也问过我).',
     words:['失去','把握']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp thua em ba ván cờ liền, cứ đổ tại xui.',
     a:{sp:'Bạn',zh:'今天我运气太差了，再来一局！',vn:'Hôm nay tớ xui quá, thêm ván nữa!'},
     need:['Dùng 吸取教训 hoặc 未必','Khuyên bạn tìm nguyên nhân'],
     sample:'不是运气的问题，你先想想输在什么地方，吸取教训，不然再下十局也未必能赢。',
     samplePy:'Bú shì yùnqi de wèntí, nǐ xiān xiǎngxiang shū zài shénme dìfang, xīqǔ jiàoxùn, bùrán zài xià shí jú yě wèibì néng yíng.',
     sampleVn:'Không phải chuyện xui đâu, cậu nghĩ xem mình thua ở đâu, rút ra bài học đã, không thì đánh thêm mười ván cũng chưa chắc thắng.',
     tip:'Dùng lại lời người bố trong bài khoá: 要知道输在什么地方，要吸取教训.'},

    {scene:'Em sắp chuyển trường, bạn thân hỏi em cảm thấy thế nào.',
     a:{sp:'Bạn thân',zh:'下个月你就要转学了，心里什么感觉？',vn:'Tháng sau cậu chuyển trường rồi, trong lòng thấy thế nào?'},
     need:['Dùng 舍不得','Nói cảm xúc của mình'],
     sample:'我真舍不得离开你们，以后我们一定要常常联系。',
     samplePy:'Wǒ zhēn shěbude líkāi nǐmen, yǐhòu wǒmen yídìng yào chángcháng liánxì.',
     sampleVn:'Tớ thật không nỡ xa các cậu, sau này chúng mình nhất định phải liên lạc thường xuyên nhé.',
     tip:'舍不得 + 离开 + người; có thể thêm 真 để nhấn mạnh.'},

    {scene:'Em trai định bấm mua ngay đôi giày rất đắt trên mạng mà chưa hỏi bố mẹ.',
     a:{sp:'Em trai',zh:'这双鞋太酷了，我现在就买！',vn:'Đôi giày này ngầu quá, em mua luôn đây!'},
     need:['Dùng 事先 hoặc 后果','Nhắc em suy nghĩ kỹ'],
     sample:'等一下！买之前应该事先问问爸妈，要不然被他们知道了，后果你自己想想吧。',
     samplePy:'Děng yíxià! Mǎi zhīqián yīnggāi shìxiān wènwen bà-mā, yàobùrán bèi tāmen zhīdào le, hòuguǒ nǐ zìjǐ xiǎngxiang ba.',
     sampleVn:'Khoan đã! Trước khi mua nên hỏi bố mẹ trước, không thì bị bố mẹ biết, hậu quả thế nào em tự nghĩ đi.',
     tip:'事先 + V (问问); 后果 dùng cho kết quả xấu.'},

    {scene:'Bạn thi thử được điểm thấp, nói muốn bỏ luyện thi HSK.',
     a:{sp:'Bạn',zh:'我复习了那么久还考得这么差，不想学了。',vn:'Tớ ôn lâu thế mà vẫn thi tệ như vậy, không muốn học nữa.'},
     need:['Dùng 灰心 và 在于','Động viên bạn'],
     sample:'别灰心！问题不在于你不努力，而在于方法不对，我们一起找找原因吧。',
     samplePy:'Bié huīxīn! Wèntí bú zàiyú nǐ bù nǔlì, ér zàiyú fāngfǎ bú duì, wǒmen yìqǐ zhǎozhao yuányīn ba.',
     sampleVn:'Đừng nản! Vấn đề không nằm ở chỗ cậu không cố gắng mà ở phương pháp chưa đúng, chúng mình cùng tìm nguyên nhân nhé.',
     tip:'不在于 A，而在于 B — đúng cấu trúc của mục 在于.'},

    {scene:'Tối trước kỳ thi, bạn phân vân nên chơi game hay ôn bài.',
     a:{sp:'Bạn',zh:'今晚是玩游戏还是复习呢？我两个都想要。',vn:'Tối nay chơi game hay ôn bài đây? Tớ muốn cả hai.'},
     need:['Dùng 必然 hoặc 珍惜','Đưa ra lời khuyên'],
     sample:'有得必然有失，你不可能两个都要。明天就考试了，还是珍惜今晚的时间，好好复习吧。',
     samplePy:'Yǒu dé bìrán yǒu shī, nǐ bù kěnéng liǎng ge dōu yào. Míngtiān jiù kǎoshì le, háishi zhēnxī jīnwǎn de shíjiān, hǎohāo fùxí ba.',
     sampleVn:'Có được ắt có mất, cậu không thể lấy cả hai được. Mai thi rồi, thôi cứ trân trọng thời gian tối nay mà ôn bài cho tốt đi.',
     tip:'有得必然有失 là câu then chốt của bài; 还是……吧 = tốt hơn là ….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài văn nghị luận "得与失" nộp thầy giáo.',
     a:'有得必然有失，只有学会放弃，才能得到更重要的东西。',b:'想啥都要，那哪儿行啊？',better:'a',
     why:'Văn nghị luận cần giọng văn viết: 必然, 只有……才……. Câu b là khẩu ngữ (啥, 哪儿行啊).'},

    {scene:'Em động viên em gái lớp 6 vừa thua cờ ông nội và đang khóc.',
     a:'没事儿，输了再来！下次想好了再走，你肯定能赢一局。',b:'失败乃成功之母，应当吸取教训，调整心态。',better:'a',
     why:'Nói với trẻ nhỏ cần giản dị, ấm áp. Câu b đúng ý nhưng quá sách vở (乃, 应当).'},

    {scene:'Huấn luyện viên nói chuyện với cả đội trước trận chung kết.',
     a:'大家放松心态，充分发挥自己的水平，我相信你们！',b:'你们随便打打吧，输了也没事儿。',better:'a',
     why:'Lời HLV cần vừa động viên vừa nghiêm túc: 放松心态, 充分发挥. Câu b nghe như không coi trọng trận đấu.'},

    {scene:'Em nhắn tin từ chối khéo lời rủ đi chơi của bạn thân vì phải ôn thi.',
     a:'今天真不行，明天考试，下次我请你喝奶茶！',b:'本人因考试原因，无法答应您的邀请，敬请谅解。',better:'a',
     why:'Với bạn thân dùng giọng thân mật. Câu b (本人, 您, 敬请谅解) như văn bản hành chính, nghe rất xa cách.'},

    {scene:'Thông báo của nhà trường về an toàn khi đi dã ngoại.',
     a:'请同学们事先做好准备，严格遵守活动规定，否则后果自负。',b:'大家记得带好东西，别乱跑啊，出事儿了可不管。',better:'a',
     why:'Thông báo chính thức dùng 事先做好准备, 严格遵守, 后果自负. Câu b giống lời nhắc miệng.'},

    {scene:'Em nói với bà khi bà tiếc không nỡ vứt chiếc bàn cũ đã hỏng.',
     a:'奶奶，我知道您舍不得，那我们把它修一修，再用几年吧。',b:'奶奶，这个东西已经失去了使用价值，建议您尽快处理。',better:'a',
     why:'Nói với bà cần thấu hiểu cảm xúc (我知道您舍不得). Câu b (失去了使用价值, 建议尽快处理) lạnh lùng như nhân viên thu mua.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 85)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Bố và tôi đánh cờ', cue:'我父亲是……教练。放假回家，父亲要跟我下棋，我……', words:['象棋','教练','答应']},
    {step:'Ván đầu thua nhanh', cue:'不到三分钟，我的棋子……，只能眼睁睁看着父亲……', words:['损失','眼睁睁','将军']},
    {step:'Thua liên tiếp, nản lòng', cue:'我不服气，说……几局下来……我有些……', words:['服气','运气','局','发挥','灰心']},
    {step:'Bố chỉ ra nguyên nhân', cue:'要吸取教训……技术只是次要因素，最重要的问题在于……', words:['吸取','教训','未必','次要','因素','在于','心态','珍惜','否认']},
    {step:'Hai sai lầm trái ngược', cue:'父亲仔细观察过：前三分之一的时间……后三分之二的时间……', words:['观察','失去','期间','把握','不假思索','犯','过于']},
    {step:'Nguyên tắc cơ bản', cue:'我脱口而出“赢啊”……父亲说原则是要考虑得失，有得……', words:['原则','责备','必然','事先']},
    {step:'Đánh cờ và đời người', cue:'大部分人开始不考虑得失，后来又……，后果就是……。人生也是如此', words:['舍不得','后果','屡']}
  ],
  checklist: [
    'Kể đủ ba phần như bảng của sách chưa: bố và tôi đánh cờ → nguyên nhân thua → đánh cờ và đời người?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có nói được hai sai lầm trái ngược (lúc đầu không quý quân cờ, về sau lại quá tiếc) không?',
    'Có dùng đúng câu then chốt 有得必然有失，有失才会有得 và 舍不得 không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 84) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['把握','发挥','观察','教训','因素','眼睁睁'],
   cau:[
     {s:'吸取＿＿才能避免以后再次发生同样的问题。', dap:['教训']},
     {s:'工作压力太大、不能兼顾工作和家庭是影响幸福感的重要＿＿。', dap:['因素']},
     {s:'希望你在比赛中＿＿好，赛出好成绩！', dap:['发挥']},
     {s:'只有做好准备的人才能＿＿住机会。', dap:['把握']},
     {s:'你就这样＿＿地看着他摔倒了？！', dap:['眼睁睁']},
     {s:'仔细＿＿周围的大自然，你会发现很多有意思的东西。', dap:['观察']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'这几次考试我都考得不太好，觉得有点儿＿＿。', opts:['灰心','死心'], ans:0, giai:'Nản lòng sau vài lần thi không tốt → 灰心 (vẫn còn cố được). 死心 = hết hy vọng hẳn, thôi không nghĩ tới nữa.'},
     {s:'在国外工作＿＿，我一直很想念我的家乡和家人。', opts:['时期','期间'], ans:1, giai:'Sự việc cụ thể + 期间 = trong thời gian làm việc ở nước ngoài. 时期 chỉ giai đoạn dài mang tính lịch sử / đời người (青春时期).'},
     {s:'如果有变动，请＿＿24小时告诉我。', opts:['事先','提前'], ans:1, giai:'Có lượng thời gian cụ thể (24小时) → chỉ 提前 dùng được. 事先 không mang lượng thời gian.'},
     {s:'你要想清楚，这样做的＿＿很严重！', opts:['后果','结果'], ans:0, giai:'Kết quả xấu, đi với 很严重 → 后果. 结果 trung tính.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'你A说得这么复杂，我B觉得他C能D听懂。', tu:'未必', ans:'C', giai:'Phó từ 未必 đứng sau chủ ngữ 他, trước động từ năng nguyện 能 → 他未必能听懂.'},
     {s:'A我看，老板没有糟糕的，B关键C你D怎样去和他沟通。', tu:'在于', ans:'C', giai:'关键 + 在于 + mệnh đề (你怎样去和他沟通) → 关键在于你怎样去和他沟通.'},
     {s:'在很多A家庭中，夫妻B同时C工作并D做家务。', tu:'双方', ans:'B', giai:'双方 đứng sau 夫妻 tạo thành chủ ngữ 夫妻双方 (cả vợ và chồng) → 夫妻双方同时工作.'},
     {s:'开始学滑雪A的时候，我花了很长时间B学习C怎么停D。', tu:'下来', ans:'D', giai:'Động từ + 下来 (dừng hẳn lại, hoàn thành) → 怎么停下来 (điểm ngữ pháp 1).'}
   ]}
];
