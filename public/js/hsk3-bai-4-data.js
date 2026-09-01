// ══════════════════════════════════════════
// DATA — HSK3 Bài 4: 她总是笑着跟客人说话 (Cô ấy luôn cười khi nói chuyện với khách hàng)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'比赛',py:'bǐsài',pos:'Danh từ',vn:'cuộc thi đấu',em:'🏆',lesson:1,
   explain:['Hoạt động thi đấu giữa hai hay nhiều bên để phân định thắng thua, thường dùng cho thể thao.'],
   usage:'Danh từ, thường đi cùng động từ 看/参加/去: 看比赛, 参加比赛; làm định ngữ: 比赛的照片.',
   collo:['看比赛','参加比赛','篮球比赛'],
   ex_zh:'这是你们比赛的照片吗？',ex_py:'Zhè shì nǐmen bǐsài de zhàopiàn ma?',ex_vn:'Đây là ảnh chụp cuộc thi của các bạn à？',
   exList:[
     {zh:'这是你们比赛的照片吗？',py:'Zhè shì nǐmen bǐsài de zhàopiàn ma?',vn:'Đây là ảnh chụp cuộc thi của các bạn à？'},
     {zh:'今天下午有篮球比赛，我们要去看球赛。',py:'Jīntiān xiàwǔ yǒu lánqiú bǐsài, wǒmen yào qù kàn qiúsài.',vn:'Chiều nay có trận bóng rổ, chúng tôi định đi xem trận đấu.'},
     {zh:'我打算周末去看比赛，你去不去？',py:'Wǒ dǎsuàn zhōumò qù kàn bǐsài, nǐ qù bu qù?',vn:'Tôi định cuối tuần đi xem thi đấu, bạn có đi không?'},
   ],
   hanzi:[
     {c:'赛',p:'sài',type:'上下结构 · Trên-dưới',st:14,ord:'宀+夫 trên → 贝 dưới',rad:'贝 (bối – tiền của, vật quý)',mean:'thi đấu, đua tài',
      tip:'宀(mái nhà) trên + 贝(vật quý) dưới → tổ chức trong nhà để giành phần thưởng quý giá = THI ĐẤU.',
      cf:'塞 (sāi – "nhét, lấp", cũng có 宀 trên")',w:'比赛 / 参加比赛'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cuối tuần có trận thi đấu bóng rổ nên chúng tôi đều rất vui.',answer:'因为周末有篮球比赛，所以我们都很高兴。',answerPy:'Yīnwèi zhōumò yǒu lánqiú bǐsài, suǒyǐ wǒmen dōu hěn gāoxìng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 周末 đã học ở Bài 1).'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người đều cố gắng, trận đấu này chắc chắn sẽ thắng.',answer:'只要大家都努力，这场比赛就一定会赢。',answerPy:'Zhǐyào dàjiā dōu nǔlì, zhè chǎng bǐsài jiù yídìng huì yíng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:2,zh:'照片',py:'zhàopiàn',pos:'Danh từ',vn:'bức ảnh',em:'📷',lesson:1,
   explain:['Hình chụp lại một người, cảnh vật hoặc sự việc bằng máy ảnh.'],
   usage:'Danh từ; lượng từ đi kèm là 张: 一张照片. Đi cùng động từ 照/照相 (chụp ảnh), 看 (xem).',
   collo:['一张照片','照照片','看照片'],
   ex_zh:'这是你们比赛的照片吗？',ex_py:'Zhè shì nǐmen bǐsài de zhàopiàn ma?',ex_vn:'Đây là ảnh chụp cuộc thi của các bạn à？',
   exList:[
     {zh:'这是你们比赛的照片吗？',py:'Zhè shì nǐmen bǐsài de zhàopiàn ma?',vn:'Đây là ảnh chụp cuộc thi của các bạn à？'},
     {zh:'那两个笑着看照片的女孩是谁？',py:'Nà liǎng ge xiàozhe kàn zhàopiàn de nǚhái shì shéi?',vn:'Hai cô gái vừa cười vừa xem ảnh kia là ai vậy?'},
     {zh:'这是你小时候的照片吗？',py:'Zhè shì nǐ xiǎoshíhou de zhàopiàn ma?',vn:'Đây là ảnh hồi nhỏ của bạn à?'},
   ],
   hanzi:[
     {c:'照',p:'zhào',type:'上下结构 · Trên-dưới',st:13,ord:'昭 trên → 灬 dưới',rad:'灬 (hỏa – lửa, ánh sáng)',mean:'chiếu sáng, chụp ảnh',
      tip:'昭(sáng rõ) + 灬(lửa, ánh sáng) → dùng ÁNH SÁNG chiếu rọi để CHỤP ảnh.',
      cf:'昭 (zhāo – "sáng tỏ", không có bộ 灬")',w:'照片 / 照相 / 拍照'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy bức ảnh này chụp đã lâu nhưng vẫn rất đẹp.',answer:'虽然这张照片照了很久，但是还是很漂亮。',answerPy:'Suīrán zhè zhāng zhàopiàn zhàole hěn jiǔ, dànshì háishi hěn piàoliang.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn thích bức ảnh này thì tôi gửi cho bạn nhé.',answer:'如果你喜欢这张照片，我就发给你吧。',answerPy:'Rúguǒ nǐ xǐhuan zhè zhāng zhàopiàn, wǒ jiù fā gěi nǐ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'年级',py:'niánjí',pos:'Danh từ',vn:'lớp, khối (niên khoá)',em:'🏫',lesson:1,
   explain:['Bậc học được chia theo năm học trong trường phổ thông.'],
   usage:'Danh từ; đứng sau số từ để chỉ khối lớp: [số từ] + 年级 (二年级 = lớp hai), có thể thêm 上/高/低 chỉ mức độ.',
   collo:['一年级','二年级','高年级'],
   ex_zh:'照得不错，你们都是一个年级的吗？',ex_py:'Zhào de búcuò, nǐmen dōu shì yí ge niánjí de ma?',ex_vn:'Chụp đẹp đấy, các bạn đều học cùng khối à？',
   exList:[
     {zh:'照得不错，你们都是一个年级的吗？',py:'Zhào de búcuò, nǐmen dōu shì yí ge niánjí de ma?',vn:'Chụp đẹp đấy, các bạn đều học cùng khối à？'},
     {zh:'他现在二年级。',py:'Tā xiànzài èr niánjí.',vn:'Cháu giờ học lớp hai rồi.'},
     {zh:'小学五年级的时候，我还很瘦。',py:'Xiǎoxué wǔ niánjí de shíhou, wǒ hái hěn shòu.',vn:'Lúc học lớp năm tiểu học, tôi vẫn còn gầy.'},
   ],
   hanzi:[
     {c:'级',p:'jí',type:'左右结构 · Trái-phải',st:6,ord:'纟 trái → 及 phải',rad:'纟 (mịch – tơ, sợi)',mean:'cấp bậc, lớp',
      tip:'纟(dệt vải theo từng lớp sợi) + 及(đạt tới) → thứ bậc đạt được = CẤP, LỚP.',
      cf:'极 (jí – "cực kỳ", có bộ 木 thay vì 纟")',w:'年级 / 一年级 / 高年级'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé vừa thông minh vừa chăm chỉ đó là học sinh lớp ba.',answer:'那个又聪明又努力的男孩儿是三年级的。',answerPy:'Nàge yòu cōngming yòu nǔlì de nánháir shì sān niánjí de.',
      note:'又……又…… mô tả hai đặc điểm cùng tồn tại (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Vì con tôi mới học lớp một nên bài tập chưa nhiều.',answer:'因为我的孩子才一年级，所以作业还不多。',answerPy:'Yīnwèi wǒ de háizi cái yì niánjí, suǒyǐ zuòyè hái bù duō.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 作业 đã học ở Bài 1).'},
   ]},

  {n:4,zh:'又',py:'yòu',pos:'Phó từ',vn:'vừa (trong 又…又…)',em:'🔁',lesson:1,
   explain:['Phó từ dùng lặp lại trong cấu trúc 又……又…… để diễn tả hai đặc điểm/tính chất cùng tồn tại ở một người hoặc vật.'],
   usage:'Cấu trúc: 又 + tính từ 1 + 又 + tính từ 2, đặt ngay trước mỗi tính từ được liệt kê.',
   collo:['又高又漂亮','又聪明又热情','又便宜又好吃'],
   ex_zh:'那个又高又漂亮的女孩儿是二年级的。',ex_py:'Nàge yòu gāo yòu piàoliang de nǚháir shì èr niánjí de.',ex_vn:'Bạn nữ vừa cao vừa xinh kia là học sinh khối hai.',
   exList:[
     {zh:'那个又高又漂亮的女孩儿是二年级的。',py:'Nàge yòu gāo yòu piàoliang de nǚháir shì èr niánjí de.',vn:'Bạn nữ vừa cao vừa xinh kia là học sinh khối hai.'},
     {zh:'她又聪明又热情，也很努力。',py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.'},
     {zh:'这家超市的蛋糕又便宜又好吃。',py:'Zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī.',vn:'Bánh kem của siêu thị này vừa rẻ vừa ngon.'},
   ],
   hanzi:[
     {c:'又',p:'yòu',type:'独体字 · Chữ đơn (tượng hình)',st:2,ord:'nét liền, hình bàn tay phải',rad:'又 (hựu)',mean:'lại, vừa…vừa…',
      tip:'Chữ tượng hình mô phỏng bàn tay phải, nghĩa gốc "một lần nữa" → mở rộng 又……又…… diễn tả 2 đặc điểm cùng tồn tại.',
      cf:'叉 (chā – "cái nĩa, chĩa ba", thêm một nét vào 又")',w:'又……又…… / 又来了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường này vừa nhỏ vừa khó đi.',answer:'这条路又小又难走。',answerPy:'Zhè tiáo lù yòu xiǎo yòu nán zǒu.',
      note:'又……又…… mô tả hai đặc điểm (ôn lại 条/难 đã học ở Bài 2-3).'},
     {promptLang:'vi',prompt:'Nếu quần áo vừa rẻ vừa đẹp thì tôi sẽ mua nhiều một chút.',answer:'如果衣服又便宜又好看，我就多买一点儿。',answerPy:'Rúguǒ yīfu yòu piányi yòu hǎokàn, wǒ jiù duō mǎi yìdiǎnr.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'聪明',py:'cōngming',pos:'Tính từ',vn:'thông minh',em:'🧠',lesson:2,
   explain:['Khả năng tư duy nhanh nhạy, tiếp thu và hiểu vấn đề tốt.'],
   usage:'Tính từ, làm vị ngữ với 很/真: 很聪明; thường xuất hiện trong cấu trúc 又聪明又…….',
   collo:['很聪明','又聪明又热情','聪明的孩子'],
   ex_zh:'她又聪明又热情，也很努力。',ex_py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',ex_vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.',
   exList:[
     {zh:'她又聪明又热情，也很努力。',py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.'},
     {zh:'他学习很好，是个聪明的孩子。',py:'Tā xuéxí hěn hǎo, shì ge cōngming de háizi.',vn:'Cậu ấy học rất giỏi, là một đứa trẻ thông minh.'},
     {zh:'这只小狗很聪明，一学就会。',py:'Zhè zhī xiǎo gǒu hěn cōngming, yì xué jiù huì.',vn:'Con chó nhỏ này rất thông minh, học một lần là biết.'},
   ],
   hanzi:[
     {c:'聪',p:'cōng',type:'左右结构 · Trái-phải',st:15,ord:'耳 trái → 总 phải',rad:'耳 (nhĩ – tai)',mean:'thông minh, nhanh nhạy',
      tip:'耳(tai, nghe) + 总(tổng hợp, bao quát) → nghe hiểu bao quát nhanh = THÔNG MINH.',
      cf:'总 (zǒng – "tổng cộng", không có bộ 耳")',w:'聪明 / 耳聪目明'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cô ấy rất thông minh nên bài khó mấy cũng hiểu được.',answer:'因为她很聪明，所以再难的问题也能懂。',answerPy:'Yīnwèi tā hěn cōngming, suǒyǐ zài nán de wèntí yě néng dǒng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 难 đã học ở Bài 2).'},
     {promptLang:'vi',prompt:'Tuy cậu bé đó thông minh nhưng vẫn phải chăm chỉ mới được.',answer:'虽然那个男孩儿很聪明，但是还是要努力才行。',answerPy:'Suīrán nàge nánháir hěn cōngming, dànshì háishi yào nǔlì cái xíng.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:6,zh:'热情',py:'rèqíng',pos:'Tính từ',vn:'nhiệt tình',em:'🔥',lesson:2,
   explain:['Thái độ nồng nhiệt, sẵn lòng quan tâm và giúp đỡ người khác.'],
   usage:'Tính từ, làm vị ngữ với 很/真: 很热情; thường mô tả thái độ phục vụ, làm việc.',
   collo:['很热情','对人热情','热情地帮助'],
   ex_zh:'她又聪明又热情，也很努力。',ex_py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',ex_vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.',
   exList:[
     {zh:'她又聪明又热情，也很努力。',py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.'},
     {zh:'她工作又认真又热情。',py:'Tā gōngzuò yòu rènzhēn yòu rèqíng.',vn:'Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.'},
     {zh:'妈妈很热情，总是帮助人。',py:'Māma hěn rèqíng, zǒngshì bāngzhù rén.',vn:'Mẹ rất nhiệt tình, luôn giúp đỡ mọi người.'},
   ],
   hanzi:[
     {c:'热',p:'rè',type:'上下结构 · Trên-dưới',st:10,ord:'埶 trên → 灬 dưới',rad:'灬 (hỏa – lửa)',mean:'nóng; nhiệt tình',
      tip:'灬(lửa) ở dưới → mang nghĩa NÓNG, mở rộng thành NHIỆT TÌNH (nóng lòng quan tâm người khác).',
      cf:'势 (shì – "thế lực", cũng có phần 埶")',w:'热情 / 很热 / 热心'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn nhiệt tình với khách một chút, khách sẽ rất hài lòng.',answer:'只要你对客人热情一点儿，客人就会很满意。',answerPy:'Zhǐyào nǐ duì kèrén rèqíng yìdiǎnr, kèrén jiù huì hěn mǎnyì.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 客人 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu người phục vụ không nhiệt tình thì khách sẽ không muốn đến nữa.',answer:'如果服务员不热情，客人就不想再来了。',answerPy:'Rúguǒ fúwùyuán bú rèqíng, kèrén jiù bù xiǎng zài lái le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'努力',py:'nǔlì',pos:'Tính từ',vn:'chăm chỉ, cố gắng',em:'💪',lesson:2,
   explain:['Dồn hết sức lực và tinh thần vào việc gì đó để đạt kết quả tốt.'],
   usage:'Tính từ/động từ, làm vị ngữ với 很: 很努力; hoặc đứng trước động từ như phó từ: 努力 + V (努力学习).',
   collo:['很努力','努力学习','努力工作'],
   ex_zh:'她又聪明又热情，也很努力。',ex_py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',ex_vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.',
   exList:[
     {zh:'她又聪明又热情，也很努力。',py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.'},
     {zh:'他现在二年级，还可以，很努力，每天都复习、写作业。',py:'Tā xiànzài èr niánjí, hái kěyǐ, hěn nǔlì, měitiān dōu fùxí, xiě zuòyè.',vn:'Cháu giờ học lớp hai, cũng được, rất chăm, ngày nào cũng ôn bài, làm bài tập.'},
     {zh:'只要你努力，比赛就没问题。',py:'Zhǐyào nǐ nǔlì, bǐsài jiù méi wèntí.',vn:'Chỉ cần bạn nỗ lực thì thi đấu chắc chắn sẽ tốt.'},
   ],
   hanzi:[
     {c:'努',p:'nǔ',type:'上下结构 · Trên-dưới',st:7,ord:'奴 trên → 力 dưới',rad:'力 (lực – sức mạnh)',mean:'cố gắng, nỗ lực',
      tip:'奴(dốc hết mình như người làm việc chăm chỉ) + 力(sức lực) → dồn hết SỨC LỰC = NỖ LỰC.',
      cf:'怒 (nù – "giận dữ", có bộ 心 thay vì 力")',w:'努力 / 很努力'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cậu ấy làm việc rất chăm chỉ nên giám đốc rất thích cậu ấy.',answer:'因为他工作很努力，所以经理很喜欢他。',answerPy:'Yīnwèi tā gōngzuò hěn nǔlì, suǒyǐ jīnglǐ hěn xǐhuan tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 经理 đã học ở Bài 2).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn chăm chỉ ôn tập thì cũng không khó.',answer:'只要你认真复习，就不难。',answerPy:'Zhǐyào nǐ rènzhēn fùxí, jiù bù nán.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 复习/难 đã học ở Bài 1-2).'},
   ]},

  {n:8,zh:'总是',py:'zǒngshì',pos:'Phó từ',vn:'luôn luôn',em:'🔄',lesson:2,
   explain:['Luôn luôn, lúc nào cũng vậy, diễn tả một hành động/trạng thái lặp lại đều đặn.'],
   usage:'Phó từ, đứng trước động từ/tính từ mà nó bổ nghĩa: 总是 + V (总是笑着).',
   collo:['总是笑着','总是帮助人','总是忘记'],
   ex_zh:'我看她总是笑着回答老师的问题。',ex_py:'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.',ex_vn:'Tôi thấy bạn ấy lúc nào cũng cười khi trả lời câu hỏi của thầy cô.',
   exList:[
     {zh:'我看她总是笑着回答老师的问题。',py:'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.',vn:'Tôi thấy bạn ấy lúc nào cũng cười khi trả lời câu hỏi của thầy cô.'},
     {zh:'她总是笑着跟客人说话。',py:'Tā zǒngshì xiàozhe gēn kèrén shuōhuà.',vn:'Cô ấy luôn cười khi nói chuyện với khách hàng.'},
     {zh:'妈妈很热情，总是帮助人。',py:'Māma hěn rèqíng, zǒngshì bāngzhù rén.',vn:'Mẹ rất nhiệt tình, luôn giúp đỡ mọi người.'},
   ],
   hanzi:[
     {c:'总',p:'zǒng',type:'上下结构 · Trên-dưới',st:9,ord:'丷+口 trên → 心 dưới',rad:'心 (tâm)',mean:'luôn, tổng cộng',
      tip:'Gộp mọi thứ trong lòng 心 lại thành một mối → nghĩa TỔNG QUÁT, mở rộng thành LUÔN LUÔN.',
      cf:'忽 (hū – "chợt, thoáng qua", cũng có bộ 心")',w:'总是 / 总共'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô ấy lúc nào cũng cười nhưng làm việc rất nghiêm túc.',answer:'虽然她总是笑着，但是工作很认真。',answerPy:'Suīrán tā zǒngshì xiàozhe, dànshì gōngzuò hěn rènzhēn.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn luôn quên mang chìa khóa thì nên viết ra để nhớ.',answer:'如果你总是忘记带钥匙，就应该记得写下来。',answerPy:'Rúguǒ nǐ zǒngshì wàngjì dài yàoshi, jiù yīnggāi jìde xiěxiàlái.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 带/记得 đã học ở Bài 1-3).'},
   ]},

  {n:9,zh:'回答',py:'huídá',pos:'Động từ',vn:'trả lời',em:'💬',lesson:2,
   explain:['Nói lại nội dung để giải đáp một câu hỏi.'],
   usage:'Động từ, có thể mang tân ngữ trực tiếp: 回答 + [câu hỏi/vấn đề] (回答问题).',
   collo:['回答问题','认真回答','不回答'],
   ex_zh:'我看她总是笑着回答老师的问题。',ex_py:'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.',ex_vn:'Tôi thấy bạn ấy lúc nào cũng cười khi trả lời câu hỏi của thầy cô.',
   exList:[
     {zh:'我看她总是笑着回答老师的问题。',py:'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.',vn:'Tôi thấy bạn ấy lúc nào cũng cười khi trả lời câu hỏi của thầy cô.'},
     {zh:'请你来回答这个问题，好吗？',py:'Qǐng nǐ lái huídá zhège wèntí, hǎo ma?',vn:'Mời bạn trả lời câu hỏi này, được không?'},
     {zh:'我没听懂你的问题，不能回答。',py:'Wǒ méi tīngdǒng nǐ de wèntí, bù néng huídá.',vn:'Tôi không nghe hiểu câu hỏi của bạn, không trả lời được.'},
   ],
   hanzi:[
     {c:'答',p:'dá',type:'上下结构 · Trên-dưới',st:12,ord:'竹 trên → 合 dưới',rad:'竹 (trúc – tre)',mean:'trả lời, đáp',
      tip:'Thời cổ dùng thẻ tre 竹 ghi lời đáp khớp 合 với câu hỏi → TRẢ LỜI.',
      cf:'合 (hé – "hợp, khớp", không có bộ 竹")',w:'回答 / 答案 / 回答问题'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bạn nói quá nhanh nên tôi không trả lời được câu hỏi.',answer:'因为你说得太快了，所以我不能回答问题。',answerPy:'Yīnwèi nǐ shuō de tài kuài le, suǒyǐ wǒ bù néng huídá wèntí.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn nghiêm túc trả lời thì thầy giáo sẽ hài lòng.',answer:'只要你认真回答，老师就会满意。',answerPy:'Zhǐyào nǐ rènzhēn huídá, lǎoshī jiù huì mǎnyì.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:10,zh:'站',py:'zhàn',pos:'Động từ',vn:'đứng',em:'🧍',lesson:3,
   explain:['Ở tư thế thẳng người, hai chân chạm đất, không ngồi hoặc nằm.'],
   usage:'Động từ, thường đi cùng trợ từ 着 diễn tả trạng thái đang đứng: 站着; hoặc kèm nơi chốn: 站在 + [nơi chốn].',
   collo:['站着','站在门口','站起来'],
   ex_zh:'那些拿着鲜花站在门口的，都是等她的。',ex_py:'Nàxiē názhe xiānhuā zhàn zài ménkǒu de, dōu shì děng tā de.',ex_vn:'Những người đang cầm hoa tươi đứng ở cửa kia, đều là đang đợi bạn ấy đấy.',
   exList:[
     {zh:'那些拿着鲜花站在门口的，都是等她的。',py:'Nàxiē názhe xiānhuā zhàn zài ménkǒu de, dōu shì děng tā de.',vn:'Những người đang cầm hoa tươi đứng ở cửa kia, đều là đang đợi bạn ấy đấy.'},
     {zh:'你怎么总是站着？快坐吧。',py:'Nǐ zěnme zǒngshì zhànzhe? Kuài zuò ba.',vn:'Sao bạn cứ đứng vậy? Ngồi xuống đi.'},
     {zh:'你站那么高，小心点儿。',py:'Nǐ zhàn nàme gāo, xiǎoxīn diǎnr.',vn:'Bạn đứng cao thế, cẩn thận chút nhé.'},
   ],
   hanzi:[
     {c:'站',p:'zhàn',type:'左右结构 · Trái-phải',st:10,ord:'立 trái → 占 phải',rad:'立 (lập – đứng)',mean:'đứng; trạm, ga',
      tip:'立(đứng) + 占(chiếm giữ một chỗ) → ĐỨNG chiếm giữ một vị trí, mở rộng thành TRẠM/GA.',
      cf:'占 (zhàn – "chiếm giữ", không có bộ 立")',w:'站着 / 站在 / 车站'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chân tôi hơi đau nhưng tôi vẫn đứng được.',answer:'虽然我的腿有点儿疼，但是我还是能站着。',answerPy:'Suīrán wǒ de tuǐ yǒudiǎnr téng, dànshì wǒ háishi néng zhànzhe.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 腿/疼 đã học ở Bài 2).'},
     {promptLang:'vi',prompt:'Nếu bạn đứng lâu thì chân sẽ đau đấy.',answer:'如果你站得太久，脚就会疼的。',answerPy:'Rúguǒ nǐ zhàn de tài jiǔ, jiǎo jiù huì téng de.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 脚 đã học ở Bài 2).'},
   ]},

  {n:11,zh:'饿',py:'è',pos:'Tính từ',vn:'đói',em:'🍽️',lesson:3,
   explain:['Cảm giác cần ăn vì bụng trống, chưa được ăn.'],
   usage:'Tính từ, làm vị ngữ với 很/有点儿: 很饿, 有点儿饿了.',
   collo:['很饿','有点儿饿','饿了'],
   ex_zh:'我有点儿饿了，我们进超市买点儿东西吧。',ex_py:'Wǒ yǒudiǎnr è le, wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.',ex_vn:'Tôi hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi.',
   exList:[
     {zh:'我有点儿饿了，我们进超市买点儿东西吧。',py:'Wǒ yǒudiǎnr è le, wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.',vn:'Tôi hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi.'},
     {zh:'我太饿了，我想吃块儿蛋糕。',py:'Wǒ tài è le, wǒ xiǎng chī kuàir dàngāo.',vn:'Tôi đói quá, tôi muốn ăn miếng bánh kem.'},
     {zh:'别吃了，我们去吃饭吧。',py:'Bié chī le, wǒmen qù chīfàn ba.',vn:'Đừng ăn nữa, chúng ta đi ăn cơm đi.'},
   ],
   hanzi:[
     {c:'饿',p:'è',type:'左右结构 · Trái-phải',st:10,ord:'饣 trái → 我 phải',rad:'饣 (thực – ăn uống)',mean:'đói',
      tip:'饣(ăn uống) + 我(bản thân) → BẢN THÂN cần ĂN = ĐÓI.',
      cf:'俄 (é – "nước Nga", không có bộ 饣")',w:'很饿 / 饿了 / 有点儿饿'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tôi hơi đói nên tôi muốn mua chút bánh mì.',answer:'因为我有点儿饿，所以我想买点儿面包。',answerPy:'Yīnwèi wǒ yǒudiǎnr è, suǒyǐ wǒ xiǎng mǎi diǎnr miànbāo.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 面包 đã học ở Bài 1).'},
     {promptLang:'vi',prompt:'Nếu bạn đói thì chúng ta đi siêu thị mua chút đồ ăn.',answer:'如果你饿了，我们就去超市买点儿吃的。',answerPy:'Rúguǒ nǐ è le, wǒmen jiù qù chāoshì mǎi diǎnr chī de.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'超市',py:'chāoshì',pos:'Danh từ',vn:'siêu thị',em:'🏪',lesson:3,
   explain:['Cửa hàng lớn bán nhiều loại hàng hoá, khách tự chọn đồ rồi thanh toán.'],
   usage:'Danh từ; đi cùng động từ 去/进: 去超市, 进超市.',
   collo:['去超市','进超市','超市门口'],
   ex_zh:'我们进超市买点儿东西吧。',ex_py:'Wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.',ex_vn:'Chúng ta vào siêu thị mua chút đồ đi.',
   exList:[
     {zh:'我们进超市买点儿东西吧。',py:'Wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.',vn:'Chúng ta vào siêu thị mua chút đồ đi.'},
     {zh:'这家超市的蛋糕又便宜又好吃。',py:'Zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī.',vn:'Bánh kem của siêu thị này vừa rẻ vừa ngon.'},
     {zh:'我记得那家超市的西瓜又甜又新鲜。',py:'Wǒ jìde nà jiā chāoshì de xīguā yòu tián yòu xīnxiān.',vn:'Tôi nhớ dưa hấu ở siêu thị đó vừa ngọt vừa tươi.'},
   ],
   hanzi:[
     {c:'超',p:'chāo',type:'半包围结构 · Bán bao vây',st:12,ord:'走 bao ngoài → 召 trong',rad:'走 (tẩu – đi, chạy)',mean:'vượt qua',
      tip:'走(đi, chạy) + 召(gọi, triệu tập) → chạy vượt lên khi được gọi = VƯỢT QUA; 超市 vốn nghĩa "chợ vượt trội".',
      cf:'召 (zhào – "triệu tập", không có bộ 走")',w:'超市 / 超过'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn đói thì chúng ta vào siêu thị mua chút đồ đi.',answer:'如果你饿了，我们就进超市买点儿东西吧。',answerPy:'Rúguǒ nǐ è le, wǒmen jiù jìn chāoshì mǎi diǎnr dōngxi ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần đi bộ năm phút là đến siêu thị.',answer:'只要走五分钟就能到超市。',answerPy:'Zhǐyào zǒu wǔ fēnzhōng jiù néng dào chāoshì.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:13,zh:'蛋糕',py:'dàngāo',pos:'Danh từ',vn:'bánh kem',em:'🎂',lesson:3,
   explain:['Món bánh ngọt làm từ bột, trứng, sữa, thường có kem trang trí bên ngoài.'],
   usage:'Danh từ; lượng từ đi kèm là 块 (miếng): 一块蛋糕.',
   collo:['一块蛋糕','吃蛋糕','买蛋糕'],
   ex_zh:'这家超市的蛋糕又便宜又好吃，一块只要2.99元。',ex_py:'Zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī, yí kuài zhǐ yào liǎng yuán jiǔjiǎo jiǔfēn.',ex_vn:'Bánh kem của siêu thị này vừa rẻ vừa ngon, một miếng chỉ 2.99 đồng thôi.',
   exList:[
     {zh:'这家超市的蛋糕又便宜又好吃，一块只要2.99元。',py:'Zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī, yí kuài zhǐ yào liǎng yuán jiǔjiǎo jiǔfēn.',vn:'Bánh kem của siêu thị này vừa rẻ vừa ngon, một miếng chỉ 2.99 đồng thôi.'},
     {zh:'我们买两块儿，回家吃着蛋糕看电视，怎么样？',py:'Wǒmen mǎi liǎng kuàir, huí jiā chīzhe dàngāo kàn diànshì, zěnmeyàng?',vn:'Chúng ta mua hai miếng, về nhà vừa ăn bánh kem vừa xem tivi, thế nào?'},
     {zh:'站着吃蛋糕的那个人是谁？',py:'Zhànzhe chī dàngāo de nàge rén shì shéi?',vn:'Người đang đứng ăn bánh kem kia là ai vậy?'},
   ],
   hanzi:[
     {c:'糕',p:'gāo',type:'左右结构 · Trái-phải',st:16,ord:'米 trái → 羔 phải',rad:'米 (mễ – gạo, bột)',mean:'bánh, bánh ngọt',
      tip:'米(nguyên liệu bột) + 羔(âm cao) → loại BÁNH làm từ bột; 蛋(trứng)+糕(bánh) = BÁNH KEM.',
      cf:'羔 (gāo – "cừu non", không có bộ 米")',w:'蛋糕 / 一块蛋糕'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bánh kem này vừa rẻ vừa ngon nên tôi mua hai miếng.',answer:'因为这个蛋糕又便宜又好吃，所以我买了两块。',answerPy:'Yīnwèi zhège dàngāo yòu piányi yòu hǎochī, suǒyǐ wǒ mǎile liǎng kuài.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Chúng ta vừa uống cà phê vừa ăn bánh kem, thế nào?',answer:'我们喝着咖啡吃蛋糕，怎么样？',answerPy:'Wǒmen hēzhe kāfēi chī dàngāo, zěnmeyàng?',
      note:'V1着+V2 diễn tả hai hành động đồng thời (điểm ngữ pháp bài này).'},
   ]},

  {n:14,zh:'年轻',py:'niánqīng',pos:'Tính từ',vn:'trẻ tuổi',em:'🧑',lesson:4,
   explain:['Còn ít tuổi, chưa già.'],
   usage:'Tính từ, làm vị ngữ hoặc định ngữ: 很年轻, 年轻的服务员.',
   collo:['很年轻','年轻人','年轻的服务员'],
   ex_zh:'你们这儿是不是有一个又年轻又漂亮的服务员？',ex_py:'Nǐmen zhèr shì bu shì yǒu yí ge yòu niánqīng yòu piàoliang de fúwùyuán?',ex_vn:'Ở đây có một cô nhân viên phục vụ vừa trẻ vừa xinh phải không？',
   exList:[
     {zh:'你们这儿是不是有一个又年轻又漂亮的服务员？',py:'Nǐmen zhèr shì bu shì yǒu yí ge yòu niánqīng yòu piàoliang de fúwùyuán?',vn:'Ở đây có một cô nhân viên phục vụ vừa trẻ vừa xinh phải không？'},
     {zh:'我们这儿年轻、漂亮的服务员有很多。',py:'Wǒmen zhèr niánqīng, piàoliang de fúwùyuán yǒu hěn duō.',vn:'Ở đây có rất nhiều nhân viên phục vụ vừa trẻ vừa xinh.'},
     {zh:'我们公司新来的年轻人，姓周。',py:'Wǒmen gōngsī xīn lái de niánqīng rén, xìng Zhōu.',vn:'Người trẻ mới đến công ty tôi, họ Chu.'},
   ],
   hanzi:[
     {c:'轻',p:'qīng',type:'左右结构 · Trái-phải',st:9,ord:'车 trái → 巠 phải',rad:'车 (xa – xe)',mean:'nhẹ; trẻ (tuổi)',
      tip:'车(xe) nhẹ dễ điều khiển → nghĩa NHẸ, mở rộng 年轻 (tuổi còn nhẹ) = TRẺ TUỔI.',
      cf:'经 (jīng – "trải qua", cũng có phần 巠")',w:'年轻 / 很轻'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy anh ấy còn trẻ nhưng làm việc rất nghiêm túc.',answer:'虽然他很年轻，但是工作很认真。',answerPy:'Suīrán tā hěn niánqīng, dànshì gōngzuò hěn rènzhēn.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn còn trẻ thì nên đi ra ngoài nhiều hơn.',answer:'如果你还年轻，就应该多出去走走。',answerPy:'Rúguǒ nǐ hái niánqīng, jiù yīnggāi duō chūqu zǒuzou.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:15,zh:'认真',py:'rènzhēn',pos:'Tính từ',vn:'nghiêm túc, chăm chỉ',em:'✍️',lesson:4,
   explain:['Làm việc cẩn thận, chú tâm, không qua loa.'],
   usage:'Tính từ, làm vị ngữ với 很: 很认真; hoặc làm phó từ trước động từ: 认真 + V (认真写).',
   collo:['很认真','认真工作','认真写'],
   ex_zh:'她工作又认真又热情。',ex_py:'Tā gōngzuò yòu rènzhēn yòu rèqíng.',ex_vn:'Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.',
   exList:[
     {zh:'她工作又认真又热情。',py:'Tā gōngzuò yòu rènzhēn yòu rèqíng.',vn:'Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.'},
     {zh:'你怎么总是听着音乐写作业？别听了，认真写吧。',py:'Nǐ zěnme zǒngshì tīngzhe yīnyuè xiě zuòyè? Bié tīng le, rènzhēn xiě ba.',vn:'Sao bạn cứ vừa nghe nhạc vừa làm bài tập vậy? Đừng nghe nữa, làm nghiêm túc đi.'},
     {zh:'他现在二年级，很努力，学习很认真。',py:'Tā xiànzài èr niánjí, hěn nǔlì, xuéxí hěn rènzhēn.',vn:'Cháu giờ học lớp hai, rất chăm, học rất nghiêm túc.'},
   ],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải',st:4,ord:'讠 trái → 人 phải',rad:'讠 (ngôn – lời nói)',mean:'nhận biết, thừa nhận',
      tip:'讠(lời nói) + 人(người) → dùng lời để NHẬN RA; 认真 (nhận thức đúng đắn, thật lòng) = NGHIÊM TÚC.',
      cf:'队 (duì – "đội ngũ", không có bộ 讠")',w:'认真 / 认识 / 认真工作'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nhân viên phục vụ làm việc nghiêm túc thì khách hàng sẽ ngày càng đông.',answer:'只要服务员工作认真，客人就会越来越多。',answerPy:'Zhǐyào fúwùyuán gōngzuò rènzhēn, kèrén jiù huì yuèláiyuè duō.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 客人 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Vì cô ấy làm việc rất nghiêm túc nên khách hàng đều thích cô ấy.',answer:'因为她工作很认真，所以客人都喜欢她。',answerPy:'Yīnwèi tā gōngzuò hěn rènzhēn, suǒyǐ kèrén dōu xǐhuan tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:16,zh:'客人',py:'kèrén',pos:'Danh từ',vn:'khách, khách hàng',em:'🙋',lesson:4,
   explain:['Người từ nơi khác đến, được đón tiếp hoặc phục vụ.'],
   usage:'Danh từ; đi cùng động từ 请/等/跟: 请客人, 等客人, 跟客人说话.',
   collo:['请客人','等客人','跟客人说话'],
   ex_zh:'她总是笑着跟客人说话。',ex_py:'Tā zǒngshì xiàozhe gēn kèrén shuōhuà.',ex_vn:'Cô ấy luôn cười khi nói chuyện với khách hàng.',
   exList:[
     {zh:'她总是笑着跟客人说话。',py:'Tā zǒngshì xiàozhe gēn kèrén shuōhuà.',vn:'Cô ấy luôn cười khi nói chuyện với khách hàng.'},
     {zh:'家里有人来做客，你下了班就回来吧。',py:'Jiālǐ yǒu rén lái zuòkè, nǐ xiàle bān jiù huílai ba.',vn:'Nhà có người đến chơi, bạn tan làm là về ngay nhé.'},
     {zh:'只要你热情一点儿，客人就会很高兴。',py:'Zhǐyào nǐ rèqíng yìdiǎnr, kèrén jiù huì hěn gāoxìng.',vn:'Chỉ cần bạn nhiệt tình một chút thì khách hàng sẽ rất vui.'},
   ],
   hanzi:[
     {c:'客',p:'kè',type:'上下结构 · Trên-dưới',st:9,ord:'宀 trên → 各 dưới',rad:'宀 (miên – mái nhà)',mean:'khách',
      tip:'宀(mái nhà) + 各(mỗi người, từ nơi khác đến) → người TỪ NƠI KHÁC đến nhà mình = KHÁCH.',
      cf:'各 (gè – "mỗi, từng", không có bộ 宀")',w:'客人 / 请客 / 客气'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy luôn cười khi trả lời câu hỏi của khách hàng.',answer:'她总是笑着回答客人的问题。',answerPy:'Tā zǒngshì xiàozhe huídá kèrén de wèntí.',
      note:'V1着+V2 diễn tả hai hành động đồng thời (ôn lại 回答 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu khách hàng có câu hỏi, bạn nên trả lời một cách nghiêm túc.',answer:'如果客人有问题，你就应该认真回答。',answerPy:'Rúguǒ kèrén yǒu wèntí, nǐ jiù yīnggāi rènzhēn huídá.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:17,zh:'小明',py:'Xiǎomíng',pos:'Danh từ riêng',vn:'bạn Minh (tên người)',em:'🧑',lesson:1,
   explain:['Tên riêng của một nhân vật nam trong bài hội thoại.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['小明说','跟小明一起','小明的照片'],
   ex_zh:'小明，这是你们比赛的照片吗？',ex_py:'Xiǎomíng, zhè shì nǐmen bǐsài de zhàopiàn ma?',ex_vn:'Minh ơi, đây là ảnh chụp cuộc thi của các bạn à？',
   exList:[
     {zh:'小明，这是你们比赛的照片吗？',py:'Xiǎomíng, zhè shì nǐmen bǐsài de zhàopiàn ma?',vn:'Minh ơi, đây là ảnh chụp cuộc thi của các bạn à？'},
     {zh:'小明和马可是同学。',py:'Xiǎomíng hé Mǎkě shì tóngxué.',vn:'Minh và Marco là bạn học.'},
   ],
   hanzi:[
     {c:'明',p:'míng',type:'左右结构 · Trái-phải',st:8,ord:'日 trái → 月 phải',rad:'日 (nhật – mặt trời)',mean:'sáng, rõ',
      tip:'日(mặt trời) + 月(mặt trăng), hai nguồn sáng hợp lại → rất SÁNG, RÕ RÀNG.',
      cf:'朋 (péng – "bạn bè", cũng ghép từ hai chữ giống nhau")',w:'小明 / 明白 / 聪明'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Minh muốn biết bạn nữ vừa cao vừa xinh kia học khối mấy.',answer:'小明想知道那个又高又漂亮的女孩儿是几年级的。',answerPy:'Xiǎomíng xiǎng zhīdào nàge yòu gāo yòu piàoliang de nǚháir shì jǐ niánjí de.',
      note:'又……又…… mô tả hai đặc điểm cùng tồn tại.'},
     {promptLang:'vi',prompt:'Vì Minh thích chụp ảnh nên bạn ấy có rất nhiều bức ảnh đẹp.',answer:'因为小明喜欢照相，所以他有很多好看的照片。',answerPy:'Yīnwèi Xiǎomíng xǐhuan zhàoxiàng, suǒyǐ tā yǒu hěn duō hǎokàn de zhàopiàn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:18,zh:'马可',py:'Mǎkě',pos:'Danh từ riêng',vn:'Marco (tên người)',em:'🧑‍🎓',lesson:1,
   explain:['Tên riêng phiên âm của một nhân vật nam người nước ngoài trong bài hội thoại.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['马可说','跟马可一起','马可的照片'],
   ex_zh:'是，这是我们比赛后照的。',ex_py:'Shì, zhè shì wǒmen bǐsài hòu zhào de.',ex_vn:'Đúng vậy, đây là ảnh chụp sau khi chúng tôi thi đấu xong.',
   exList:[
     {zh:'是，这是我们比赛后照的。',py:'Shì, zhè shì wǒmen bǐsài hòu zhào de.',vn:'Đúng vậy, đây là ảnh chụp sau khi chúng tôi thi đấu xong.'},
     {zh:'旁边那个拿着书笑的人是谁？那是我！',py:'Pángbiān nàge názhe shū xiào de rén shì shéi? Nà shì wǒ!',vn:'Người đang cầm sách cười bên cạnh là ai vậy? Đó là tôi đấy!'},
   ],
   hanzi:[
     {c:'马',p:'mǎ',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền, hình con ngựa cách điệu',rad:'马 (mã – ngựa)',mean:'ngựa; họ Mã',
      tip:'Chữ tượng hình mô phỏng hình con NGỰA, ở đây dùng để phiên âm tên nước ngoài Marco.',
      cf:'骂 (mà – "mắng", có bộ 马 lặp lại")',w:'马可 / 马路 / 一匹马'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Marco vừa cầm sách vừa cười trong bức ảnh đó.',answer:'马可在那张照片里拿着书笑。',answerPy:'Mǎkě zài nà zhāng zhàopiàn lǐ názhe shū xiào.',
      note:'V1着+V2 diễn tả hai hành động đồng thời (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Tuy Marco không cùng khối nhưng vẫn là bạn thân của Minh.',answer:'虽然马可跟他不是一个年级的，但是还是小明的好朋友。',answerPy:'Suīrán Mǎkě gēn tā bú shì yí ge niánjí de, dànshì háishi Xiǎomíng de hǎo péngyou.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 年级 vừa học trong bài này).'},
   ]},

  {n:19,zh:'李小美',py:'Lǐ Xiǎoměi',pos:'Danh từ riêng',vn:'Lý Tiểu Mỹ (tên người)',em:'👩',lesson:4,
   explain:['Tên riêng của nhân vật nữ phục vụ được nhắc đến ở cuối bài hội thoại 4.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['李小美说','认识李小美','是李小美'],
   ex_zh:'啊，我知道了，你说的是李小美吧？',ex_py:'À, wǒ zhīdào le, nǐ shuō de shì Lǐ Xiǎoměi ba?',ex_vn:'À, tôi biết rồi, anh/chị nói đến Lý Tiểu Mỹ phải không？',
   exList:[
     {zh:'啊，我知道了，你说的是李小美吧？',py:'À, wǒ zhīdào le, nǐ shuō de shì Lǐ Xiǎoměi ba?',vn:'À, tôi biết rồi, anh/chị nói đến Lý Tiểu Mỹ phải không？'},
     {zh:'李小美工作又认真又热情，客人都很喜欢她。',py:'Lǐ Xiǎoměi gōngzuò yòu rènzhēn yòu rèqíng, kèrén dōu hěn xǐhuan tā.',vn:'Lý Tiểu Mỹ làm việc vừa nghiêm túc vừa nhiệt tình, khách hàng đều rất thích cô ấy.'},
   ],
   hanzi:[
     {c:'美',p:'měi',type:'上下结构 · Trên-dưới',st:9,ord:'羊 trên → 大 dưới',rad:'羊 (dương – dê)',mean:'đẹp',
      tip:'羊(dê, con vật quý thời cổ) lớn 大 → biểu trưng cho sự to đẹp, mở rộng nghĩa ĐẸP.',
      cf:'羊 (yáng – "dê", không có 大")',w:'小美 / 漂亮 / 美丽'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy luôn cười khi nói chuyện với khách, vì vậy tôi biết ngay đó là Lý Tiểu Mỹ.',answer:'她总是笑着跟客人说话，所以我马上就知道是李小美。',answerPy:'Tā zǒngshì xiàozhe gēn kèrén shuōhuà, suǒyǐ wǒ mǎshàng jiù zhīdào shì Lǐ Xiǎoměi.',
      note:'V1着+V2 diễn tả hai hành động đồng thời (ôn lại 客人 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn tìm một người phục vụ nhiệt tình thì cứ hỏi Lý Tiểu Mỹ.',answer:'如果你想找一个热情的服务员，就问李小美吧。',answerPy:'Rúguǒ nǐ xiǎng zhǎo yí ge rèqíng de fúwùyuán, jiù wèn Lǐ Xiǎoměi ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'🏆',label:'比赛',py:'bǐsài',letter:'A'},
  {img:'📷',label:'照片',py:'zhàopiàn',letter:'B'},
  {img:'🎂',label:'蛋糕',py:'dàngāo',letter:'C'},
  {img:'🏪',label:'超市',py:'chāoshì',letter:'D'},
  {img:'🧠',label:'聪明',py:'cōngming',letter:'E'},
  {img:'🙋',label:'客人',py:'kèrén',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học (小明·马可)',
   preQuiz:[
     {q:'马可给小明看的是什么照片？',opts:['比赛后照的照片','旅游的照片','全家福'],ans:0},
     {q:'那个又高又漂亮的女孩儿是几年级的？',opts:['二年级','一年级','三年级'],ans:0},
     {q:'拿着书笑的人是谁？',opts:['马可自己','小明','小红'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这是你们比赛的照片吗？',py:'Zhè shì nǐmen bǐsài de zhàopiàn ma?',vn:'Đây là ảnh chụp cuộc thi của các bạn à？'},
     {sp:1,zh:'是，这是我们比赛后照的。',py:'Shì, zhè shì wǒmen bǐsài hòu zhào de.',vn:'Đúng vậy, đây là ảnh chụp sau khi chúng tôi thi đấu xong.'},
     {sp:0,zh:'照得不错，你们都是一个年级的吗？',py:'Zhào de búcuò, nǐmen dōu shì yí ge niánjí de ma?',vn:'Chụp đẹp đấy, các bạn đều học cùng khối à？'},
     {sp:1,zh:'不是。那个又高又漂亮的女孩儿是二年级的。',py:'Bú shì. Nàge yòu gāo yòu piàoliang de nǚháir shì èr niánjí de.',vn:'Không phải. Bạn nữ vừa cao vừa xinh kia là học sinh khối hai.'},
     {sp:0,zh:'旁边那个拿着书笑的人是谁？',py:'Pángbiān nàge názhe shū xiào de rén shì shéi?',vn:'Người đang cầm sách cười bên cạnh là ai vậy?'},
     {sp:1,zh:'那是我！',py:'Nà shì wǒ!',vn:'Đó là tôi đấy!'},
   ]},
  {scene:'在教室 · Trong lớp học (小丽·同学)',
   preQuiz:[
     {q:'同学觉得小红怎么样？',opts:['又聪明又热情，也很努力','很懒','不爱说话'],ans:0},
     {q:'小丽说小红总是怎么回答老师的问题？',opts:['笑着回答','很紧张地回答','不回答'],ans:0},
     {q:'那些拿着鲜花站在门口的人在做什么？',opts:['等小红','等老师','买花'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你觉得小红怎么样？',py:'Nǐ juéde Xiǎohóng zěnmeyàng?',vn:'Bạn thấy Tiểu Hồng thế nào?'},
     {sp:1,zh:'她又聪明又热情，也很努力。',py:'Tā yòu cōngming yòu rèqíng, yě hěn nǔlì.',vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.'},
     {sp:0,zh:'我看她总是笑着回答老师的问题。',py:'Wǒ kàn tā zǒngshì xiàozhe huídá lǎoshī de wèntí.',vn:'Tôi thấy bạn ấy lúc nào cũng cười khi trả lời câu hỏi của thầy cô.'},
     {sp:1,zh:'她对每个人都笑，也常常对我笑。',py:'Tā duì měi ge rén dōu xiào, yě chángcháng duì wǒ xiào.',vn:'Bạn ấy cười với mọi người, cũng thường cười với tôi.'},
     {sp:0,zh:'你是不是喜欢她啊？',py:'Nǐ shì bu shì xǐhuan tā a?',vn:'Có phải bạn thích bạn ấy không đấy?'},
     {sp:1,zh:'喜欢她的人太多了，你看那些拿着鲜花站在门口的，都是等她的。',py:'Xǐhuan tā de rén tài duō le, nǐ kàn nàxiē názhe xiānhuā zhàn zài ménkǒu de, dōu shì děng tā de.',vn:'Người thích bạn ấy nhiều lắm, bạn xem những người đang cầm hoa tươi đứng ở cửa kia, đều là đang đợi bạn ấy đấy.'},
   ]},
  {scene:'在超市门口 · Ở trước cửa siêu thị',
   preQuiz:[
     {q:'小刚为什么想进超市？',opts:['有点儿饿了','想买裤子','想看比赛'],ans:0},
     {q:'超市的蛋糕怎么样？',opts:['又便宜又好吃','很贵','不新鲜'],ans:0},
     {q:'小丽还要去买什么？',opts:['喝的','衬衫','照片'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我有点儿饿了，我们进超市买点儿东西吧。',py:'Wǒ yǒudiǎnr è le, wǒmen jìn chāoshì mǎi diǎnr dōngxi ba.',vn:'Tôi hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi.'},
     {sp:1,zh:'好啊，这家超市的蛋糕又便宜又好吃，一块只要2.99元。',py:'Hǎo a, zhè jiā chāoshì de dàngāo yòu piányi yòu hǎochī, yí kuài zhǐ yào liǎng yuán jiǔjiǎo jiǔfēn.',vn:'Được đấy, bánh kem của siêu thị này vừa rẻ vừa ngon, một miếng chỉ 2.99 đồng thôi.'},
     {sp:0,zh:'我们买两块儿，回家吃着蛋糕看电视，怎么样？',py:'Wǒmen mǎi liǎng kuàir, huí jiā chīzhe dàngāo kàn diànshì, zěnmeyàng?',vn:'Chúng ta mua hai miếng, về nhà vừa ăn bánh kem vừa xem tivi, thế nào?'},
     {sp:1,zh:'好啊，我再去买一些喝的。',py:'Hǎo a, wǒ zài qù mǎi yìxiē hē de.',vn:'Được đấy, tôi đi mua thêm chút đồ uống nữa.'},
     {sp:0,zh:'喝着咖啡吃蛋糕，太好了！',py:'Hēzhe kāfēi chī dàngāo, tài hǎo le!',vn:'Vừa uống cà phê vừa ăn bánh kem, tuyệt quá!'},
   ]},
  {scene:'在饭馆儿 · Ở quán ăn',
   preQuiz:[
     {q:'客人在找什么样的服务员？',opts:['又年轻又漂亮的','年纪大的','很瘦的'],ans:0},
     {q:'客人说这位服务员工作怎么样？',opts:['又认真又热情','不认真','总是着急'],ans:0},
     {q:'经理最后猜到客人说的是谁？',opts:['李小美','小丽','小红'],ans:0},
   ],
   lines:[
     {sp:0,zh:'您好！您找谁？',py:'Nín hǎo! Nín zhǎo shéi?',vn:'Xin chào! Anh/chị tìm ai ạ?'},
     {sp:1,zh:'你们这儿是不是有一个又年轻又漂亮的服务员？',py:'Nǐmen zhèr shì bu shì yǒu yí ge yòu niánqīng yòu piàoliang de fúwùyuán?',vn:'Ở đây có một cô nhân viên phục vụ vừa trẻ vừa xinh phải không？'},
     {sp:0,zh:'我们这儿年轻、漂亮的服务员有很多。',py:'Wǒmen zhèr niánqīng, piàoliang de fúwùyuán yǒu hěn duō.',vn:'Ở đây có rất nhiều nhân viên phục vụ vừa trẻ vừa xinh.'},
     {sp:1,zh:'她工作又认真又热情。',py:'Tā gōngzuò yòu rènzhēn yòu rèqíng.',vn:'Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.'},
     {sp:0,zh:'您能再说说吗？',py:'Nín néng zài shuōshuo ma?',vn:'Anh/chị có thể nói rõ thêm chút không?'},
     {sp:1,zh:'她总是笑着跟客人说话。',py:'Tā zǒngshì xiàozhe gēn kèrén shuōhuà.',vn:'Cô ấy luôn cười khi nói chuyện với khách hàng.'},
     {sp:0,zh:'啊，我知道了，你说的是李小美吧？',py:'À, wǒ zhīdào le, nǐ shuō de shì Lǐ Xiǎoměi ba?',vn:'À, tôi biết rồi, anh/chị nói đến Lý Tiểu Mỹ phải không？'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'看',right:'比赛'},
  {left:'照',right:'照片'},
  {left:'一个',right:'年级'},
  {left:'又聪明',right:'又热情'},
  {left:'认真',right:'回答'},
  {left:'进',right:'超市'},
  {left:'吃',right:'蛋糕'},
  {left:'因为工作很努力，',right:'所以经理很喜欢她。'},
  {left:'虽然她总是笑着，',right:'但是工作很认真。'},
  {left:'如果你饿了，',right:'我们就去超市买东西。'},
  {left:'只要你认真复习，',right:'就不难。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'只要你参加',blank:'比赛',post:'，就会更有信心。',hint:'(cuộc thi đấu)',ans:'比赛'},
  {pre:'虽然我们不是一个',blank:'年级',post:'，但是经常一起做作业。',hint:'(lớp/khối)',ans:'年级'},
  {pre:'那家',blank:'又',post:'便宜又好吃的蛋糕店，就在超市旁边。',hint:'(vừa…vừa…)',ans:'又'},
  {pre:'虽然妹妹很',blank:'聪明',post:'，但是做作业总是不认真。',hint:'(thông minh)',ans:'聪明'},
  {pre:'只要服务员对客人',blank:'热情',post:'，客人就会常来。',hint:'(nhiệt tình)',ans:'热情'},
  {pre:'如果你不认真听，就不能',blank:'回答',post:'老师的问题。',hint:'(trả lời)',ans:'回答'},
  {pre:'只要有空，他就喜欢',blank:'站',post:'在窗户旁边看比赛。',hint:'(đứng)',ans:'站'},
  {pre:'虽然我有点儿',blank:'饿',post:'，但是想先喝杯咖啡。',hint:'(đói)',ans:'饿'},
  {pre:'因为附近没有',blank:'超市',post:'，所以买东西不太方便。',hint:'(siêu thị)',ans:'超市'},
  {pre:'虽然这块',blank:'蛋糕',post:'不便宜，但是很好吃。',hint:'(bánh kem)',ans:'蛋糕'},
  {pre:'因为服务员比较',blank:'年轻',post:'，所以学得特别快。',hint:'(trẻ tuổi)',ans:'年轻'},
  {pre:'虽然弟弟很年轻，但是做事很',blank:'认真',post:'。',hint:'(nghiêm túc)',ans:'认真'},
  {pre:'因为她总是热情地帮助',blank:'客人',post:'，所以大家都很喜欢她。',hint:'(khách hàng)',ans:'客人'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['因为','服务员','工作','很','认真','，','所以','客人','都','很','满意','。'],ans:'因为服务员工作很认真，所以客人都很满意。',audio:'因为服务员工作很认真，所以客人都很满意。'},
  {words:['如果','你','想','买','便宜','的','蛋糕','，','就','去','那','家','超市','看看','。'],ans:'如果你想买便宜的蛋糕，就去那家超市看看。',audio:'如果你想买便宜的蛋糕，就去那家超市看看。'},
  {words:['很多','人','拿','着','鲜花','站','在','门口','。'],ans:'很多人拿着鲜花站在门口。',audio:'很多人拿着鲜花站在门口。'},
  {words:['因为','客人','越来越','多','，','所以','她','总是','很','忙','。'],ans:'因为客人越来越多，所以她总是很忙。',audio:'因为客人越来越多，所以她总是很忙。'},
  {words:['虽然','弟弟','不是','很','聪明','，','但是','他','学习','特别','努力','。'],ans:'虽然弟弟不是很聪明，但是他学习特别努力。',audio:'虽然弟弟不是很聪明，但是他学习特别努力。'},
  {words:['如果','你','总是','不','认真','，','老师','就','会','生气','。'],ans:'如果你总是不认真，老师就会生气。',audio:'如果你总是不认真，老师就会生气。'},
  {words:['如果','你','饿','了','，','就','去','超市','买','点儿','东西','吧','。'],ans:'如果你饿了，就去超市买点儿东西吧。',audio:'如果你饿了，就去超市买点儿东西吧。'},
  {words:['我们','回家','吃','着','蛋糕','看','电视','，','怎么样','？'],ans:'我们回家吃着蛋糕看电视，怎么样？',audio:'我们回家吃着蛋糕看电视，怎么样？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'她聪明又热情又。',
   opts:['她又聪明又热情。','她聪明又热情又。','又她聪明又热情。','她又又聪明热情。'],ans:0,
   exp:'又……又…… phải đặt NGAY TRƯỚC mỗi tính từ được liệt kê: 又+adj1+又+adj2, không đặt 又 sau tính từ.'},
  {wrong:'她总是回答着笑老师的问题。',
   opts:['她总是笑着回答老师的问题。','她总是回答着笑老师的问题。','她总是笑回答着老师的问题。','她笑着总是回答老师的问题。'],ans:0,
   exp:'Cấu trúc V1着+V2: động từ diễn tả trạng thái đi kèm (笑) đứng trước và gắn liền với 着, rồi mới đến động từ chính (回答)+tân ngữ.'},
  {wrong:'很多客人站着拿蛋糕在超市门口。',
   opts:['很多客人拿着蛋糕站在超市门口。','很多客人站着拿蛋糕在超市门口。','很多客人拿蛋糕着站在超市门口。','蛋糕很多客人拿着站在超市门口。'],ans:0,
   exp:'Động tác đi kèm (拿着 — cầm) phải đứng trước, hành động chính (站在超市门口 — đứng ở cửa siêu thị) đứng sau: V1着+V2, không đảo ngược thứ tự.'},
  {wrong:'超市又便宜蛋糕又好吃。',
   opts:['超市的蛋糕又便宜又好吃。','超市又便宜蛋糕又好吃。','超市蛋糕又又便宜好吃。','又超市的蛋糕便宜又好吃。'],ans:0,
   exp:'Chủ ngữ (超市的蛋糕) phải đứng nguyên vẹn trước cấu trúc 又……又……, không được chen danh từ vào giữa 又 và tính từ.'},
  {wrong:'我有点儿了饿。',
   opts:['我有点儿饿了。','我有点儿了饿。','我了有点儿饿。','有点儿我饿了。'],ans:0,
   exp:'了 đặt CUỐI CÂU khi diễn tả trạng thái mới xảy ra: 有点儿+tính từ+了, không chen 了 vào giữa 有点儿 và tính từ.'},
  {wrong:'我们喝咖啡着吃蛋糕。',
   opts:['我们喝着咖啡吃蛋糕。','我们喝咖啡着吃蛋糕。','我们喝着咖啡着吃蛋糕。','我们着喝咖啡吃蛋糕。'],ans:0,
   exp:'着 phải gắn liền ngay sau động từ thứ nhất (喝着), không đặt sau cả cụm động từ+tân ngữ (喝咖啡着 là sai).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'那个又高又漂亮的女孩儿是几年级的？',
     q_vn:'Bạn nữ vừa cao vừa xinh kia là học sinh khối mấy?',
     hint:'二年级',
     sample:'那个又高又漂亮的女孩儿是二年级的。',
     sample_vn:'Bạn nữ vừa cao vừa xinh kia là học sinh khối hai.',
     note:'又……又…… mô tả hai đặc điểm cùng tồn tại.'},
    {q_zh:'同学觉得小红怎么样？',
     q_vn:'Bạn học thấy Tiểu Hồng thế nào?',
     hint:'又聪明又热情，也很努力',
     sample:'她又聪明又热情，也很努力。',
     sample_vn:'Bạn ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.',
     note:'又……又…… kết hợp 也 liệt kê thêm một đặc điểm.'},
    {q_zh:'小刚小丽在超市门口打算做什么？',
     q_vn:'Tiểu Cương và Tiểu Lệ ở trước siêu thị định làm gì?',
     hint:'进超市买蛋糕和喝的',
     sample:'他们有点儿饿了，打算进超市买蛋糕和一些喝的。',
     sample_vn:'Họ hơi đói, định vào siêu thị mua bánh kem và ít đồ uống.',
     note:'打算 + V diễn tả dự định sắp làm (ôn lại 打算 đã học ở Bài 1).'},
    {q_zh:'经理最后猜到客人说的服务员是谁？',
     q_vn:'Cuối cùng quản lý đoán ra người phục vụ mà khách nói đến là ai?',
     hint:'李小美，她总是笑着跟客人说话',
     sample:'是李小美，因为她总是笑着跟客人说话。',
     sample_vn:'Là Lý Tiểu Mỹ, vì cô ấy luôn cười khi nói chuyện với khách hàng.',
     note:'因为 giải thích lý do cho câu trả lời.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh trai tôi vừa cao vừa thông minh, ai cũng thích cậu ấy.', zh:'我哥哥又高又聪明，谁都喜欢他。', py:'Wǒ gēge yòu gāo yòu cōngming, shéi dōu xǐhuan tā.'},
  {vi:'Vì thầy giáo rất nhiệt tình nên học sinh đều thích giờ học của thầy.', zh:'因为老师很热情，所以学生都喜欢他的课。', py:'Yīnwèi lǎoshī hěn rèqíng, suǒyǐ xuésheng dōu xǐhuan tā de kè.'},
  {vi:'Tuy bài tập nhiều nhưng cô ấy vẫn làm rất nghiêm túc.', zh:'虽然作业很多，但是她还是做得很认真。', py:'Suīrán zuòyè hěn duō, dànshì tā háishi zuò de hěn rènzhēn.'},
  {vi:'Nếu bạn đói thì chúng ta đi siêu thị mua chút bánh kem.', zh:'如果你饿了，我们就去超市买点儿蛋糕。', py:'Rúguǒ nǐ è le, wǒmen jiù qù chāoshì mǎi diǎnr dàngāo.'},
  {vi:'Anh ấy vừa cười vừa trả lời khách hàng.', zh:'他笑着回答客人。', py:'Tā xiàozhe huídá kèrén.'},
  {vi:'Chỉ cần bạn chăm chỉ thì cha mẹ sẽ rất vui.', zh:'只要你努力，爸妈就会很高兴。', py:'Zhǐyào nǐ nǔlì, bàmā jiù huì hěn gāoxìng.'},
  {vi:'Cô phục vụ đó vừa trẻ vừa nhiệt tình, khách ai cũng thích.', zh:'那个服务员又年轻又热情，客人都很喜欢她。', py:'Nàge fúwùyuán yòu niánqīng yòu rèqíng, kèrén dōu hěn xǐhuan tā.'},
  {vi:'Bạn nữ đang đứng ở cửa cầm hoa tươi là ai vậy?', zh:'站在门口拿着鲜花的女孩儿是谁？', py:'Zhàn zài ménkǒu názhe xiānhuā de nǚháir shì shéi?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì cô ấy luôn cười với mọi người nên rất nhiều người thích cô ấy.', zh:'因为她总是对每个人都笑，所以很多人喜欢她。', py:'Yīnwèi tā zǒngshì duì měi ge rén dōu xiào, suǒyǐ hěn duō rén xǐhuan tā.'},
  {vi:'Chỉ cần bạn认真复习，考试就没问题。', zh:'只要你认真复习，考试就没问题。', py:'Zhǐyào nǐ rènzhēn fùxí, kǎoshì jiù méi wèntí.'},
  {vi:'Chị gái tôi vừa xinh vừa nhiệt tình, làm việc cũng rất chăm chỉ.', zh:'我姐姐又漂亮又热情，工作也很努力。', py:'Wǒ jiějie yòu piàoliang yòu rèqíng, gōngzuò yě hěn nǔlì.'},
  {vi:'Nếu你还年轻，就应该多出去看看。', zh:'如果你还年轻，就应该多出去看看。', py:'Rúguǒ nǐ hái niánqīng, jiù yīnggāi duō chūqu kànkan.'},
  {vi:'Bọn trẻ đang vừa ăn bánh kem vừa xem tivi.', zh:'孩子们正吃着蛋糕看电视。', py:'Háizimen zhèng chīzhe dàngāo kàn diànshì.'},
  {vi:'Tuy cửa hàng đó nhỏ nhưng người phục vụ rất nhiệt tình.', zh:'虽然那家店很小，但是服务员很热情。', py:'Suīrán nà jiā diàn hěn xiǎo, dànshì fúwùyuán hěn rèqíng.'},
  {vi:'Cậu học sinh đó thông minh nhưng không chăm chỉ lắm.', zh:'那个学生很聪明，但是不太努力。', py:'Nàge xuésheng hěn cōngming, dànshì bú tài nǔlì.'},
  {vi:'Mấy người khách đang đứng trước cửa siêu thị đợi bạn.', zh:'几个客人正站在超市门口等你。', py:'Jǐ ge kèrén zhèng zhàn zài chāoshì ménkǒu děng nǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 4)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-4/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'你去做什么', post:'？',
       py:'Nǐ qù zuò shénme?', vn:'Bạn đi làm gì vậy?'},
      {speaker:'男', pre:'我去看', blank:'足球比赛', post:'。',
       py:'Wǒ qù kàn zúqiú bǐsài.', vn:'Tôi đi xem trận bóng đá.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'那两个笑着看照片的', blank:'女孩是谁', post:'？',
       py:'Nà liǎng ge xiàozhe kàn zhàopiàn de nǚhái shì shéi?', vn:'Hai cô gái vừa cười vừa xem ảnh kia là ai vậy?'},
      {speaker:'女', pre:'那是我妹妹', blank:'和她的好朋友', post:'。',
       py:'Nà shì wǒ mèimei hé tā de hǎo péngyou.', vn:'Đó là em gái tôi và bạn thân của nó.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'我太饿了，', blank:'我想吃块儿蛋糕', post:'。',
       py:'Wǒ tài è le, wǒ xiǎng chī kuàir dàngāo.', vn:'Tôi đói quá, tôi muốn ăn miếng bánh kem.'},
      {speaker:'男', pre:'别吃了，', blank:'我们去吃饭吧', post:'。',
       py:'Bié chī le, wǒmen qù chīfàn ba.', vn:'Đừng ăn nữa, chúng ta đi ăn cơm đi.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'你怎么总是站着？', blank:'快坐吧', post:'。',
       py:'Nǐ zěnme zǒngshì zhànzhe? Kuài zuò ba.', vn:'Sao bạn cứ đứng vậy? Ngồi xuống đi.'},
      {speaker:'女', pre:'我吃了两块蛋糕，', blank:'现在不想坐着', post:'。',
       py:'Wǒ chīle liǎng kuài dàngāo, xiànzài bù xiǎng zuòzhe.', vn:'Tôi ăn hai miếng bánh kem rồi, giờ không muốn ngồi.'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'我记得那家超市的西瓜又甜又新鲜，', blank:'我们去看看吧', post:'。',
       py:'Wǒ jìde nà jiā chāoshì de xīguā yòu tián yòu xīnxiān, wǒmen qù kànkan ba.', vn:'Tôi nhớ dưa hấu ở siêu thị đó vừa ngọt vừa tươi, chúng ta đi xem thử đi.'},
      {speaker:'男', pre:'', blank:'好，走吧', post:'。',
       py:'Hǎo, zǒu ba.', vn:'Được, đi thôi.'},
    ]},
    {num:6, lines:[
      {pre:'', blank:'这几天你总是不爱吃东西', post:'，是不是不舒服啊？',
       py:'Zhè jǐ tiān nǐ zǒngshì bú ài chī dōngxi, shì bu shì bù shūfu a?', vn:'Mấy ngày nay bạn cứ không thích ăn gì cả, có phải không khỏe không đấy?'},
    ]},
    {num:7, lines:[
      {pre:'他又聪明又努力，', blank:'老师的问题他都会回答', post:'。',
       py:'Tā yòu cōngming yòu nǔlì, lǎoshī de wèntí tā dōu huì huídá.', vn:'Cậu ấy vừa thông minh vừa chăm chỉ, câu hỏi nào của thầy cô cậu ấy cũng trả lời được.'},
    ]},
    {num:8, lines:[
      {pre:'你知道我手机里还有多少钱吗？', blank:'还有一元一角一分，三个一', post:'。',
       py:'Nǐ zhīdào wǒ shǒujī lǐ hái yǒu duōshao qián ma? Hái yǒu yì yuán yì jiǎo yì fēn, sān ge yī.', vn:'Bạn có biết trong điện thoại tôi còn bao nhiêu tiền không? Còn 1 đồng 1 hào 1 xu, ba số 1.'},
    ]},
    {num:9, lines:[
      {pre:'妈妈很热情，总是帮助人，', blank:'所以大家有问题，都会来找她', post:'。',
       py:'Māma hěn rèqíng, zǒngshì bāngzhù rén, suǒyǐ dàjiā yǒu wèntí, dōu huì lái zhǎo tā.', vn:'Mẹ rất nhiệt tình, luôn giúp đỡ mọi người, nên mọi người có vấn đề gì đều tìm mẹ.'},
    ]},
    {num:10, lines:[
      {pre:'同学们，', blank:'谁能告诉我这个句子是什么意思', post:'。',
       py:'Tóngxuémen, shéi néng gàosu wǒ zhège jùzi shì shénme yìsi.', vn:'Các em, ai có thể cho cô biết câu này nghĩa là gì.'},
    ]},
  ],
  mc: [
    {num:11, options:['认真写作业','认真听音乐','听着音乐写作业'], ans:0,
     lines:[
       {speaker:'女', pre:'你怎么总是听着音乐写作业？', blank:'别听了，认真写吧', post:'。', py:'Nǐ zěnme zǒngshì tīngzhe yīnyuè xiě zuòyè? Bié tīng le, rènzhēn xiě ba.', vn:'Sao bạn cứ vừa nghe nhạc vừa làm bài tập vậy? Đừng nghe nữa, làm nghiêm túc đi.'},
       {speaker:'男', pre:'没关系，', blank:'你看我写的都对', post:'。', py:'Méi guānxi, nǐ kàn wǒ xiě de dōu duì.', vn:'Không sao đâu, bạn xem tôi làm đều đúng cả mà.'},
     ],
     explain:'女：你怎么总是听着音乐写作业？别听了，认真写吧。男：没关系，你看我写的都对。问：女的让男的做什么？ → 认真写作业。'},
    {num:12, options:['打电话','去做客','回家'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'你打电话有什么事吗', post:'？', py:'Nǐ dǎ diànhuà yǒu shénme shì ma?', vn:'Bạn gọi điện có việc gì vậy?'},
       {speaker:'女', pre:'家里有人来做客，', blank:'你下了班就回来吧', post:'。', py:'Jiālǐ yǒu rén lái zuòkè, nǐ xiàle bān jiù huílai ba.', vn:'Nhà có người đến chơi, bạn tan làm là về ngay nhé.'},
     ],
     explain:'男：你打电话有什么事吗？女：家里有人来做客，你下了班就回来吧。问：女的让男的做什么？ → 回家。'},
    {num:13, options:['去比赛','看比赛','去上课'], ans:1,
     lines:[
       {speaker:'女', pre:'下课了，', blank:'同学们都去哪儿啊', post:'？', py:'Xiàkè le, tóngxuémen dōu qù nǎr a?', vn:'Tan học rồi, các bạn đi đâu cả vậy?'},
       {speaker:'男', pre:'今天下午有篮球比赛，', blank:'我们要去看球赛', post:'。', py:'Jīntiān xiàwǔ yǒu lánqiú bǐsài, wǒmen yào qù kàn qiúsài.', vn:'Chiều nay có trận bóng rổ, chúng tôi đi xem trận đấu.'},
     ],
     explain:'女：下课了，同学们都去哪儿啊？男：今天下午有篮球比赛，我们要去看球赛。问：同学们要做什么？ → 看比赛。'},
    {num:14, options:['跟爸妈一起出国','要去国外上学','总是出去走'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你真的要去国外上学', post:'？', py:'Nǐ zhēnde yào qù guówài shàngxué?', vn:'Bạn thật sự định đi nước ngoài học à?'},
       {speaker:'女', pre:'是，我爸妈也想让我去，', blank:'说年轻的时候多出去走走很好', post:'。', py:'Shì, wǒ bàmā yě xiǎng ràng wǒ qù, shuō niánqīng de shíhou duō chūqu zǒuzou hěn hǎo.', vn:'Đúng vậy, bố mẹ tôi cũng muốn tôi đi, nói rằng lúc trẻ đi ra ngoài nhiều là tốt.'},
     ],
     explain:'男：你真的要去国外上学？女：是，我爸妈也想让我去，说年轻的时候多出去走走很好。问：关于女的，可以知道什么？ → 要去国外上学。'},
    {num:15, options:['说话很快','都听懂了','不能回答'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'请你来回答这个问题，好吗', post:'？', py:'Qǐng nǐ lái huídá zhège wèntí, hǎo ma?', vn:'Mời bạn trả lời câu hỏi này, được không?'},
       {speaker:'女', pre:'对不起，你说得太快了，', blank:'我没听懂你的问题', post:'。', py:'Duìbuqǐ, nǐ shuō de tài kuài le, wǒ méi tīngdǒng nǐ de wèntí.', vn:'Xin lỗi, bạn nói nhanh quá, tôi không nghe hiểu câu hỏi của bạn.'},
     ],
     explain:'男：请你来回答这个问题，好吗？女：对不起，你说得太快了，我没听懂你的问题。问：关于女的，可以知道什么？ → 不能回答。'},
    {num:16, options:['学习很认真','现在三年级','总是不写作业'], ans:0,
     lines:[
       {speaker:'男', pre:'你儿子上学了吗？', blank:'现在几年级', post:'？', py:'Nǐ érzi shàngxué le ma? Xiànzài jǐ niánjí?', vn:'Con trai bạn đi học chưa? Giờ học lớp mấy rồi?'},
       {speaker:'女', pre:'', blank:'他现在二年级', post:'。', py:'Tā xiànzài èr niánjí.', vn:'Cháu giờ học lớp hai rồi.'},
       {speaker:'男', pre:'', blank:'学习怎么样', post:'？', py:'Xuéxí zěnmeyàng?', vn:'Học hành thế nào?'},
       {speaker:'女', pre:'还可以，很努力，', blank:'每天都复习、写作业', post:'。', py:'Hái kěyǐ, hěn nǔlì, měitiān dōu fùxí, xiě zuòyè.', vn:'Cũng được, cháu rất chăm, ngày nào cũng ôn bài, làm bài tập.'},
     ],
     explain:'男：你儿子上学了吗？现在几年级？女：他现在二年级。男：学习怎么样？女：还可以，很努力，每天都复习、写作业。问：关于儿子，可以知道什么？ → 学习很认真。'},
    {num:17, options:['现在胖了','正在照相','现在上小学五年级'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'这是你小时候的照片吗', post:'？', py:'Zhè shì nǐ xiǎoshíhou de zhàopiàn ma?', vn:'Đây là ảnh hồi nhỏ của bạn à?'},
       {speaker:'女', pre:'', blank:'是啊，漂亮吧', post:'。', py:'Shì a, piàoliang ba.', vn:'Đúng vậy, xinh chứ nhỉ.'},
       {speaker:'男', pre:'很漂亮，', blank:'是什么时候照的', post:'？', py:'Hěn piàoliang, shì shénme shíhou zhào de?', vn:'Xinh thật đấy, chụp lúc nào vậy?'},
       {speaker:'女', pre:'小学五年级，你看，', blank:'我那时多瘦啊', post:'。', py:'Xiǎoxué wǔ niánjí, nǐ kàn, wǒ nàshí duō shòu a.', vn:'Hồi lớp năm tiểu học, bạn xem, lúc đó tôi gầy biết bao.'},
     ],
     explain:'男：这是你小时候的照片吗？女：是啊，漂亮吧。男：很漂亮，是什么时候照的？女：小学五年级，你看，我那时多瘦啊。问：关于女的，可以知道什么？ → 现在胖了。'},
    {num:18, options:['坐着吃蛋糕','不年轻','很漂亮，也很热情'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'站着吃蛋糕的那个人是谁', post:'？', py:'Zhànzhe chī dàngāo de nàge rén shì shéi?', vn:'Người đang đứng ăn bánh kem kia là ai vậy?'},
       {speaker:'女', pre:'', blank:'我们公司新来的年轻人，小周', post:'。', py:'Wǒmen gōngsī xīn lái de niánqīng rén, Xiǎo Zhōu.', vn:'Người trẻ mới đến công ty tôi, tên Tiểu Chu đấy.'},
       {speaker:'男', pre:'什么？', blank:'她姓什么', post:'？', py:'Shénme? Tā xìng shénme?', vn:'Gì cơ? Cô ấy họ gì?'},
       {speaker:'女', pre:'姓周。小周又漂亮又热情，', blank:'以后有时间我介绍你们认识一下', post:'。', py:'Xìng Zhōu. Xiǎo Zhōu yòu piàoliang yòu rèqíng, yǐhòu yǒu shíjiān wǒ jièshào nǐmen rènshi yíxià.', vn:'Họ Chu. Tiểu Chu vừa xinh vừa nhiệt tình, sau này có thời gian tôi giới thiệu hai người quen nhau.'},
     ],
     explain:'男：站着吃蛋糕的那个人是谁？女：我们公司新来的年轻人，小周。男：什么？她姓什么？女：姓周。小周又漂亮又热情，以后有时间我介绍你们认识一下。问：关于小周，可以知道什么？ → 很漂亮，也很热情。'},
    {num:19, options:['爬山','问路','放照片'], ans:2,
     lines:[
       {speaker:'女', pre:'你站那么高，', blank:'小心点儿', post:'。', py:'Nǐ zhàn nàme gāo, xiǎoxīn diǎnr.', vn:'Bạn đứng cao thế, cẩn thận chút nhé.'},
       {speaker:'男', pre:'好的，你看，', blank:'照片放在这儿怎么样', post:'？', py:'Hǎo de, nǐ kàn, zhàopiàn fàng zài zhèr zěnmeyàng?', vn:'Được, bạn xem, để bức ảnh ở đây thế nào?'},
       {speaker:'女', pre:'', blank:'往右边一点儿吧', post:'。', py:'Wǎng yòubian yìdiǎnr ba.', vn:'Dịch sang phải một chút đi.'},
       {speaker:'男', pre:'', blank:'现在好了吧', post:'。', py:'Xiànzài hǎo le ba.', vn:'Giờ được rồi chứ.'},
     ],
     explain:'女：你站那么高，小心点儿。男：好的，你看，照片放在这儿怎么样？女：往右边一点儿吧。男：现在好了吧。问：他们在做什么？ → 放照片。'},
    {num:20, options:['去买菜','看电视','去爬山'], ans:0,
     lines:[
       {speaker:'女', pre:'周末你别总是坐着看电视，', blank:'出去运动一下吧', post:'。', py:'Zhōumò nǐ bié zǒngshì zuòzhe kàn diànshì, chūqu yùndòng yíxià ba.', vn:'Cuối tuần bạn đừng cứ ngồi xem tivi, ra ngoài vận động chút đi.'},
       {speaker:'男', pre:'好啊，', blank:'我们去爬山怎么样', post:'？', py:'Hǎo a, wǒmen qù páshān zěnmeyàng?', vn:'Được đấy, chúng ta đi leo núi thế nào?'},
       {speaker:'女', pre:'今天我腿疼，', blank:'就去楼下走一走吧', post:'。', py:'Jīntiān wǒ tuǐ téng, jiù qù lóuxià zǒu yi zǒu ba.', vn:'Hôm nay chân tôi đau, thôi xuống dưới lầu đi bộ chút thôi.'},
       {speaker:'男', pre:'好吧，', blank:'我们走着去超市买点儿菜', post:'。', py:'Hǎo ba, wǒmen zǒuzhe qù chāoshì mǎi diǎnr cài.', vn:'Được thôi, chúng ta đi bộ ra siêu thị mua chút rau đi.'},
     ],
     explain:'女：周末你别总是坐着看电视，出去运动一下吧。男：好啊，我们去爬山怎么样？女：今天我腿疼，就去楼下走一走吧。男：好吧，我们走着去超市买点儿菜。问：他们打算做什么？ → 去买菜。'},
  ],
};
