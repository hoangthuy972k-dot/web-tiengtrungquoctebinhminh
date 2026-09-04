// ══════════════════════════════════════════
// DATA — HSK3 Bài 20: 我被他影响了 (Mình chịu ảnh hưởng từ anh ấy)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'照相机',py:'zhàoxiàngjī',pos:'Danh từ',vn:'máy chụp ảnh',em:'📷',lesson:1,
   explain:['Thiết bị dùng để chụp ảnh.'],
   usage:'Danh từ; đi cùng động từ 拿走/带: 照相机被拿走了.',
   collo:['照相机被拿走','带照相机','新买的照相机'],
   ex_zh:'我的照相机被谁拿走了？',ex_py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le?',ex_vn:'Máy ảnh của tôi bị ai lấy mất rồi?',
   exList:[
     {zh:'我的照相机被谁拿走了？怎么找不到了？',py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?',vn:'Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?'},
     {zh:'奶奶喜欢那个新买的照相机吗？',py:'Nǎinai xǐhuan nàge xīn mǎi de zhàoxiàngjī ma?',vn:'Bà nội có thích cái máy ảnh mới mua đó không?'},
     {zh:'如果带上照相机就好了。',py:'Rúguǒ dàishang zhàoxiàngjī jiù hǎo le.',vn:'Nếu mang theo máy ảnh thì tốt rồi.'},
   ],
   hanzi:[
     {c:'相',p:'xiàng',type:'左右结构 · Trái-phải',st:9,ord:'木 trái → 目 phải',rad:'木 (mộc – gỗ)',mean:'lẫn nhau; ảnh',
      tip:'木(cây, vật thể) + 目(mắt, nhìn) → dùng MẮT nhìn vật thể LẪN NHAU; 照(chiếu sáng)+相(hình ảnh) = ẢNH, chụp ảnh.',
      cf:'想 (xiǎng – "nghĩ", có thêm bộ 心")',w:'照相机 / 照相 / 相机'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy ảnh mới mua này tuy đắt, nhưng chụp ảnh cực kỳ rõ nét.',answer:'这台新买的照相机虽然贵，但是拍照特别清楚。',answerPy:'Zhè tái xīn mǎi de zhàoxiàngjī suīrán guì, dànshì pāizhào tèbié qīngchu.',
      note:'新 + động từ + 的 làm định ngữ.'},
     {promptLang:'vi',prompt:'Nếu bạn mất máy ảnh thì tôi cho bạn mượn cái của tôi.',answer:'如果你的照相机丢了，我就把我的借给你。',answerPy:'Rúguǒ nǐ de zhàoxiàngjī diū le, wǒ jiù bǎ wǒ de jiè gěi nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).'},
   ]},

  {n:2,zh:'被',py:'bèi',pos:'Giới từ',vn:'bị (dùng để chỉ thể bị động)',em:'🔄',lesson:1,
   explain:['Nêu chủ ngữ là đối tượng chịu tác động của hành động.'],
   usage:'Chủ ngữ + 被 + [chủ thể hành động] + động từ + thành phần khác.',
   collo:['被拿走','被影响','被认错'],
   ex_zh:'我的照相机被谁拿走了？',ex_py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le?',ex_vn:'Máy ảnh của tôi bị ai lấy mất rồi?',
   exList:[
     {zh:'我的照相机被谁拿走了？怎么找不到了？',py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?',vn:'Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?'},
     {zh:'我被他影响的。',py:'Wǒ bèi tā yǐngxiǎng de.',vn:'Mình bị anh ấy ảnh hưởng đấy.'},
     {zh:'我们经常被别人认错。',py:'Wǒmen jīngcháng bèi biéren rèncuò.',vn:'Chúng tôi thường bị người khác nhận nhầm.'},
   ],
   hanzi:[
     {c:'被',p:'bèi',type:'左右结构 · Trái-phải',st:10,ord:'衤 trái → 皮 phải',rad:'衤 (y – áo)',mean:'chăn, bị (thể bị động)',
      tip:'衤(quần áo, chăn) + 皮(da, bề mặt) → tấm CHĂN phủ lên người; mở rộng nghĩa "chịu tác động phủ lên" = BỊ.',
      cf:'披 (pī – "khoác", có bộ 扌")',w:'被 / 被子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Suy nghĩ của tôi đã bị trải nghiệm lần này ảnh hưởng.',answer:'我的想法被这次经历影响了。',answerPy:'Wǒ de xiǎngfǎ bèi zhè cì jīnglì yǐngxiǎng le.',
      note:'被 diễn tả câu bị động (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Vấn đề vẫn chưa được giải quyết.',answer:'问题还没有被解决呢。',answerPy:'Wèntí hái méiyǒu bèi jiějué ne.',
      note:'Phó từ phủ định (没有) đặt TRƯỚC 被.'},
   ]},

  {n:3,zh:'难过',py:'nánguò',pos:'Tính từ',vn:'buồn',em:'😢',lesson:1,
   explain:['Cảm thấy đau lòng, không vui.'],
   usage:'Tính từ, làm vị ngữ: 别难过.',
   collo:['别难过','很难过','怎么这么难过'],
   ex_zh:'别难过，再买一个吧。',ex_py:'Bié nánguò, zài mǎi yí ge ba.',ex_vn:'Đừng buồn, mua cái khác đi.',
   exList:[
     {zh:'别难过，再买一个吧，公司东门外不就有一个大商场吗？',py:'Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?',vn:'Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?'},
     {zh:'你怎么这么难过啊？怎么了？',py:'Nǐ zěnme zhème nánguò a? Zěnme le?',vn:'Sao bạn buồn thế? Sao vậy?'},
     {zh:'你别难过了，我们一起帮你想办法。',py:'Nǐ bié nánguò le, wǒmen yìqǐ bāng nǐ xiǎng bànfǎ.',vn:'Bạn đừng buồn nữa, chúng tôi cùng giúp bạn nghĩ cách.'},
   ],
   hanzi:[
     {c:'过',p:'guò',type:'半包围结构 · Bán bao vây',st:6,ord:'辶 ngoài → 寸 trong',rad:'辶 (sước – đi)',mean:'trải qua',
      tip:'辶(đi) + 寸(khoảng thời gian) → trải qua một khoảng thời gian KHÓ khăn; 难(khó)+过(trải qua) = BUỒN, khó chịu trong lòng.',
      cf:'过 (guò – cùng chữ đã học ở Bài 19")',w:'难过 / 难受'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng buồn nữa, tôi sẽ cùng bạn nghĩ cách giải quyết vấn đề này.',answer:'别难过了，我陪你一起想办法解决这个问题。',answerPy:'Bié nánguò le, wǒ péi nǐ yìqǐ xiǎng bànfǎ jiějué zhège wèntí.',
      note:'办法 diễn tả cách giải quyết (ôn lại đã học ở Bài 17).'},
     {promptLang:'vi',prompt:'Nếu bạn buồn thì cứ nói cho tôi biết.',answer:'如果你难过，就告诉我吧。',answerPy:'Rúguǒ nǐ nánguò, jiù gàosu wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:4,zh:'东',py:'dōng',pos:'Danh từ',vn:'phía đông',em:'🧭',lesson:1,
   explain:['Một trong bốn hướng chính, hướng mặt trời mọc.'],
   usage:'Danh từ chỉ phương hướng; đi cùng 门/边: 东门, 东边.',
   collo:['东门','往东走','东边'],
   ex_zh:'公司东门外不就有一个大商场吗？',ex_py:'Gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?',ex_vn:'Ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?',
   exList:[
     {zh:'别难过，再买一个吧，公司东门外不就有一个大商场吗？',py:'Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?',vn:'Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?'},
     {zh:'只有往东走才能到国家公园。',py:'Zhǐyǒu wǎng dōng zǒu cái néng dào guójiā gōngyuán.',vn:'Chỉ có đi về hướng đông mới đến được công viên quốc gia.'},
     {zh:'中国在东边。',py:'Zhōngguó zài dōngbian.',vn:'Trung Quốc ở phía đông.'},
   ],
   hanzi:[
     {c:'东',p:'dōng',type:'独体字 · Chữ đơn (giản thể)',st:5,ord:'nét liền',rad:'一 (nhất)',mean:'phía đông',
      tip:'Chữ tượng hình cổ mô phỏng mặt trời (日) mọc lên sau CÂY (木) vào buổi sáng → PHÍA ĐÔNG.',
      cf:'车 (chē – "xe", hình dáng gần giống")',w:'东 / 东边 / 东西'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có đi về hướng đông, mới tìm được nhà hàng mới khai trương đó.',answer:'只有往东走，才能找到那家新开的饭馆。',answerPy:'Zhǐyǒu wǎng dōng zǒu, cái néng zhǎodào nà jiā xīn kāi de fànguǎn.',
      note:'只有……才…… diễn tả điều kiện duy nhất (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn đi về phía đông thì sẽ thấy trường học.',answer:'如果你往东走，就会看到学校。',answerPy:'Rúguǒ nǐ wǎng dōng zǒu, jiù huì kàndào xuéxiào.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'信用卡',py:'xìnyòngkǎ',pos:'Danh từ',vn:'thẻ tín dụng',em:'💳',lesson:1,
   explain:['Loại thẻ ngân hàng dùng để thanh toán, có thể chi tiêu trước trả sau.'],
   usage:'Danh từ; đi cùng động từ 用/花: 用信用卡.',
   collo:['信用卡里的钱','用信用卡','这张信用卡'],
   ex_zh:'我这个月信用卡里的钱已经花得差不多了。',ex_py:'Wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.',ex_vn:'Tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi.',
   exList:[
     {zh:'但是我这个月信用卡里的钱已经花得差不多了。',py:'Dànshì wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.',vn:'Nhưng tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi.'},
     {zh:'服务员说我这张信用卡不能用了。',py:'Fúwùyuán shuō wǒ zhè zhāng xìnyòngkǎ bù néng yòng le.',vn:'Nhân viên nói thẻ tín dụng của tôi không dùng được nữa.'},
     {zh:'我去银行，我的信用卡该还钱了。',py:'Wǒ qù yínháng, wǒ de xìnyòngkǎ gāi huán qián le.',vn:'Tôi đi ngân hàng đây, thẻ tín dụng của tôi phải trả tiền rồi.'},
   ],
   hanzi:[
     {c:'卡',p:'kǎ',type:'上下结构 · Trên-dưới',st:5,ord:'上 trên → 卜 dưới',rad:'卜 (bốc)',mean:'thẻ',
      tip:'Chữ ghép từ 上(trên) và 下(dưới, giản lược thành 卜) mô phỏng vật MẮC KẸT ở giữa → mượn âm để chỉ THẺ (card).',
      cf:'卞 (biàn – họ Biện", hình dáng gần giống")',w:'信用卡 / 卡片'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân viên bán hàng nói thẻ tín dụng này không phải của tôi.',answer:'售货员说这张信用卡不是我的。',answerPy:'Shòuhuòyuán shuō zhè zhāng xìnyòngkǎ bú shì wǒ de.',
      note:'张 là lượng từ cho vật phẳng (ôn lại đã học ở Bài 19).'},
     {promptLang:'vi',prompt:'Nếu thẻ tín dụng của bạn không dùng được thì đi ngân hàng hỏi thử đi.',answer:'如果你的信用卡不能用，就去银行问问吧。',answerPy:'Rúguǒ nǐ de xìnyòngkǎ bù néng yòng, jiù qù yínháng wènwen ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'关心',py:'guānxīn',pos:'Động từ',vn:'quan tâm, chú ý',em:'💗',lesson:2,
   explain:['Để tâm, lo lắng cho ai đó hoặc việc gì đó.'],
   usage:'Động từ, mang tân ngữ: 关心 + [người/việc].',
   collo:['关心体育','关心学生','不关心'],
   ex_zh:'你怎么突然关心起体育来了？',ex_py:'Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?',ex_vn:'Sao đột nhiên bạn lại quan tâm đến thể thao vậy?',
   exList:[
     {zh:'你怎么突然关心起体育来了？',py:'Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?',vn:'Sao đột nhiên bạn lại quan tâm đến thể thao vậy?'},
     {zh:'我还一直觉得你不关心我的学习呢。',py:'Wǒ hái yìzhí juéde nǐ bù guānxīn wǒ de xuéxí ne.',vn:'Em cứ nghĩ là anh không quan tâm việc học của em đấy.'},
     {zh:'他一直都很关心我。',py:'Tā yìzhí dōu hěn guānxīn wǒ.',vn:'Anh ấy luôn luôn rất quan tâm tôi.'},
   ],
   hanzi:[
     {c:'关',p:'guān',type:'独体字 · Chữ đơn (giản thể)',st:6,ord:'nét liền',rad:'丷 (bát)',mean:'liên quan, đóng',
      tip:'Chữ giản thể mô phỏng cánh CỬA đóng lại, liên kết hai bên → LIÊN QUAN, ĐÓNG; 关(liên quan)+心(tâm) = QUAN TÂM.',
      cf:'吴 (wú – "họ Ngô", hình dáng khác")',w:'关心 / 关于 / 关系'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo luôn luôn rất quan tâm đến thành tích của mỗi học sinh.',answer:'老师一直都很关心每个学生的成绩。',answerPy:'Lǎoshī yìzhí dōu hěn guānxīn měi ge xuéshēng de chéngjì.',
      note:'一直都 diễn tả trạng thái duy trì liên tục.'},
     {promptLang:'vi',prompt:'Nếu bạn quan tâm đến sức khỏe thì nên tập thể dục thường xuyên.',answer:'如果你关心健康，就应该经常锻炼。',answerPy:'Rúguǒ nǐ guānxīn jiànkāng, jiù yīnggāi jīngcháng duànliàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'只有……才……',py:'zhǐyǒu……cái……',pos:'Liên từ',vn:'chỉ có... (thì) mới...',em:'🔑',lesson:2,
   explain:['Diễn tả điều kiện duy nhất để có kết quả nào đó.'],
   usage:'只有 + [điều kiện duy nhất]，才 + [kết quả].',
   collo:['只有爱，才能……','只有真正……才能……','只有你们……才能……'],
   ex_zh:'看来只有爱，才能让人有变化。',ex_py:'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.',ex_vn:'Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.',
   exList:[
     {zh:'看来只有爱，才能让人有变化。',py:'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.',vn:'Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.'},
     {zh:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。',py:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.',vn:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.'},
     {zh:'所以只有真正做事情的时候，才能了解有多难。',py:'Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',vn:'Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.'},
   ],
   hanzi:[
     {c:'只',p:'zhǐ',type:'独体字 · Chữ đơn (đa âm)',st:5,ord:'nét liền',rad:'口 (khẩu)',mean:'chỉ, duy nhất',
      tip:'Cùng chữ với 只(zhī - lượng từ con vật), nhưng khi đọc zhǐ nghĩa là CHỈ, DUY NHẤT.',
      cf:'只 (zhī – "con" (lượng từ), cùng chữ khác âm đọc")',w:'只有 / 只是 / 只要'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em.',answer:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟。',answerPy:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi.',
      note:'只有……才…… diễn tả điều kiện duy nhất (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Chỉ có làm xong bài tập mới được xem tivi.',answer:'只有写完作业，才能看电视。',answerPy:'Zhǐyǒu xiěwán zuòyè, cái néng kàn diànshì.',
      note:'只有……才…… diễn tả điều kiện duy nhất.'},
   ]},

  {n:8,zh:'成绩',py:'chéngjì',pos:'Danh từ',vn:'thành tích, kết quả (công tác, học tập)',em:'📊',lesson:2,
   explain:['Kết quả đạt được qua học tập hoặc công việc.'],
   usage:'Danh từ; đi cùng tính từ: 成绩差/好.',
   collo:['成绩差','考试成绩','数学成绩'],
   ex_zh:'我的成绩差极了。',ex_py:'Wǒ de chéngjì chà jí le.',ex_vn:'Thành tích của mình tệ lắm.',
   exList:[
     {zh:'我最近天天上网玩儿游戏，我的成绩差极了。',py:'Wǒ zuìjìn tiāntiān shàng wǎng wánr yóuxì, wǒ de chéngjì chà jí le.',vn:'Gần đây mình lên mạng chơi game hàng ngày, thành tích của mình tệ lắm.'},
     {zh:'你是怎么提高历史成绩的？',py:'Nǐ shì zěnme tígāo lìshǐ chéngjì de?',vn:'Bạn đã nâng cao thành tích môn lịch sử thế nào vậy?'},
     {zh:'考试成绩出来了吗？',py:'Kǎoshì chéngjì chulai le ma?',vn:'Kết quả thi ra chưa?'},
   ],
   hanzi:[
     {c:'绩',p:'jì',type:'左右结构 · Trái-phải',st:11,ord:'纟 trái → 责 phải (giản thể)',rad:'纟 (mịch – tơ lụa)',mean:'thành tích',
      tip:'纟(sợi tơ, dệt thành sản phẩm) + 责(trách nhiệm) → kết quả từ công việc có TRÁCH NHIỆM = THÀNH TÍCH.',
      cf:'责 (zé – "trách nhiệm", không có bộ 纟")',w:'成绩 / 业绩'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kết quả kỳ thi lần này khi nào ra vậy?',answer:'这次考试的成绩什么时候出来？',answerPy:'Zhè cì kǎoshì de chéngjì shénme shíhou chulai?',
      note:'出来 diễn tả kết quả xuất hiện (ôn lại đã học ở Bài 19).'},
     {promptLang:'vi',prompt:'Nếu bạn học chăm chỉ thì thành tích sẽ tốt hơn.',answer:'如果你认真学习，成绩就会更好。',answerPy:'Rúguǒ nǐ rènzhēn xuéxí, chéngjì jiù huì gèng hǎo.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'碗',py:'wǎn',pos:'Danh từ',vn:'bát',em:'🥣',lesson:3,
   explain:['Vật dụng hình tròn dùng để đựng cơm, canh.'],
   usage:'Danh từ; đi cùng động từ 拿着/洗: 拿着碗.',
   collo:['拿着碗','洗碗','一个碗'],
   ex_zh:'那个拿着碗吃饭的人是你哥哥吗？',ex_py:'Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma?',ex_vn:'Người cầm bát ăn cơm đó là anh trai bạn à?',
   exList:[
     {zh:'那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。',py:'Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma? Tā hé nǐ zhǎng de zhēn xiàng.',vn:'Người cầm bát ăn cơm đó là anh trai bạn à? Anh ấy trông giống bạn thật đấy.'},
     {zh:'我来洗碗筷，你去看电视吧。',py:'Wǒ lái xǐ wǎnkuài, nǐ qù kàn diànshì ba.',vn:'Tôi rửa bát đũa, bạn đi xem tivi đi.'},
     {zh:'你先吃，一会儿多来一碗饭。',py:'Nǐ xiān chī, yíhuìr duō lái yì wǎn fàn.',vn:'Bạn ăn trước đi, lát nữa lấy thêm một bát cơm.'},
   ],
   hanzi:[
     {c:'碗',p:'wǎn',type:'左右结构 · Trái-phải',st:13,ord:'石 trái → 宛 phải',rad:'石 (thạch – đá)',mean:'bát',
      tip:'石(đá, sứ) + 宛(cong, uốn lượn) → vật liệu ĐÁ/SỨ tạo thành hình CONG tròn = BÁT.',
      cf:'椀 (dạng cổ của 碗, làm bằng gỗ")',w:'碗 / 洗碗'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tôi rửa bát, bạn đi nghỉ một lát đi.',answer:'我来洗碗，你去休息一会儿吧。',answerPy:'Wǒ lái xǐ wǎn, nǐ qù xiūxi yíhuìr ba.',
      note:'我来 + V diễn tả sự chủ động đề nghị làm việc gì.'},
     {promptLang:'vi',prompt:'Nếu bát bẩn thì bạn rửa giúp tôi đi.',answer:'如果碗脏了，你就帮我洗洗吧。',answerPy:'Rúguǒ wǎn zāng le, nǐ jiù bāng wǒ xǐxi ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'分',py:'fēn',pos:'Động từ',vn:'phân biệt',em:'✂️',lesson:3,
   explain:['Chia tách, nhận biết sự khác nhau giữa các đối tượng.'],
   usage:'Động từ, thường đi cùng bổ ngữ 出来: 分出来.',
   collo:['分出来','分不清','分开'],
   ex_zh:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。',ex_py:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.',ex_vn:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.',
   exList:[
     {zh:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。',py:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.',vn:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.'},
     {zh:'除了父母以外，还有我们自己也能啊。',py:'Chúle fùmǔ yǐwài, hái yǒu wǒmen zìjǐ yě néng a.',vn:'Ngoài bố mẹ ra, còn có chính chúng tôi cũng phân biệt được đấy.'},
     {zh:'我怎么也分不清这两个字。',py:'Wǒ zěnme yě fēn bu qīng zhè liǎng ge zì.',vn:'Tôi thế nào cũng không phân biệt rõ được hai chữ này.'},
   ],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八 trên → 刀 dưới',rad:'刀 (đao – dao)',mean:'chia, phân biệt',
      tip:'八(hình chia đôi) + 刀(dao) → dùng DAO CHIA vật ra làm hai = CHIA, PHÂN BIỆT.',
      cf:'刀 (dāo – "dao", không có bộ 八")',w:'分 / 分开 / 分数'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thế nào cũng không phân biệt được mùi vị của hai loại trà này.',answer:'我怎么也分不出来这两种茶的味道。',answerPy:'Wǒ zěnme yě fēn bu chūlai zhè liǎng zhǒng chá de wèidào.',
      note:'怎么也 + phủ định diễn tả sự bất khả thi dù cố gắng thế nào.'},
     {promptLang:'vi',prompt:'Nếu bạn phân biệt được hai anh em thì thật giỏi.',answer:'如果你能分出来他们兄弟俩，就真厉害。',answerPy:'Rúguǒ nǐ néng fēn chulai tāmen xiōngdì liǎ, jiù zhēn lìhai.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'解决',py:'jiějué',pos:'Động từ',vn:'giải quyết',em:'✅',lesson:4,
   explain:['Xử lý, tìm ra cách khắc phục vấn đề.'],
   usage:'Động từ, mang tân ngữ: 解决问题.',
   collo:['解决问题','解决办法','被解决'],
   ex_zh:'不同的问题有不同的解决办法。',ex_py:'Bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.',ex_vn:'Những vấn đề khác nhau có cách giải quyết khác nhau.',
   exList:[
     {zh:'其实，不同的问题有不同的解决办法。',py:'Qíshí, bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.',vn:'Thực ra, những vấn đề khác nhau có cách giải quyết khác nhau.'},
     {zh:'多么难的问题，都会被解决的。',py:'Duōme nán de wèntí, dōu huì bèi jiějué de.',vn:'Vấn đề dù khó đến mấy cũng sẽ được giải quyết.'},
     {zh:'我试着帮你解决电脑的问题。',py:'Wǒ shìzhe bāng nǐ jiějué diànnǎo de wèntí.',vn:'Tôi thử giúp bạn giải quyết vấn đề máy tính.'},
   ],
   hanzi:[
     {c:'决',p:'jué',type:'左右结构 · Trái-phải',st:6,ord:'冫 trái → 夬 phải',rad:'冫 (băng – nước đá)',mean:'quyết định, giải quyết',
      tip:'冫(nước, dòng chảy) + 夬(khai thông, mở ra) → khơi thông dòng nước bị tắc = GIẢI QUYẾT, QUYẾT ĐỊNH.',
      cf:'快 (kuài – "nhanh", có bộ 忄")',w:'解决 / 决定'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thử tự mình giải quyết vấn đề thẻ tín dụng này.',answer:'我试着自己解决这个信用卡的问题。',answerPy:'Wǒ shìzhe zìjǐ jiějué zhège xìnyòngkǎ de wèntí.',
      note:'试着 + V diễn tả hành động thử làm (ôn lại 试 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn không giải quyết được thì cứ hỏi tôi.',answer:'如果你解决不了，就问我吧。',answerPy:'Rúguǒ nǐ jiějué bu liǎo, jiù wèn wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'试',py:'shì',pos:'Động từ',vn:'thử',em:'🧪',lesson:4,
   explain:['Làm thử để xem kết quả hoặc kiểm tra.'],
   usage:'Động từ; thường đi cùng 着: 试着做.',
   collo:['试着做','试一试','试试看'],
   ex_zh:'所以得试着做做。',ex_py:'Suǒyǐ děi shìzhe zuòzuo.',ex_vn:'Nên phải thử làm xem.',
   exList:[
     {zh:'有些问题看上去很难，但是做起来非常简单，所以得试着做做。',py:'Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān, suǒyǐ děi shìzhe zuòzuo.',vn:'Có những vấn đề nhìn có vẻ khó, nhưng làm thì lại rất đơn giản, nên phải thử làm xem.'},
     {zh:'帮您找双43号的试试？',py:'Bāng nín zhǎo shuāng sìshísān hào de shìshi?',vn:'Tôi tìm giúp anh đôi cỡ 43 thử nhé?'},
     {zh:'你有更好的办法来解决这个问题吗？',py:'Nǐ yǒu gèng hǎo de bànfǎ lái jiějué zhège wèntí ma?',vn:'Bạn có cách nào tốt hơn để giải quyết vấn đề này không?'},
   ],
   hanzi:[
     {c:'试',p:'shì',type:'左右结构 · Trái-phải',st:8,ord:'讠 trái → 式 phải (giản thể)',rad:'讠 (ngôn – lời nói)',mean:'thử',
      tip:'讠(lời nói) + 式(hình thức, cách thức) → nói ra để kiểm tra CÁCH THỨC = THỬ.',
      cf:'式 (shì – "kiểu cách", không có bộ 讠")',w:'试 / 试试 / 考试'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đôi giày này bạn mang thử xem?',answer:'这双鞋你穿着试试？',answerPy:'Zhè shuāng xié nǐ chuānzhe shìshi?',
      note:'试试 = động từ lặp lại dạng AA (ôn lại đã học ở Bài 17).'},
     {promptLang:'vi',prompt:'Nếu bạn không chắc thì cứ thử làm xem.',answer:'如果你不确定，就试着做做吧。',answerPy:'Rúguǒ nǐ bú quèdìng, jiù shìzhe zuòzuo ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'真正',py:'zhēnzhèng',pos:'Phó từ',vn:'thật sự',em:'💯',lesson:4,
   explain:['Diễn tả tính chất chân thực, không giả tạo.'],
   usage:'Phó từ, đứng trước động từ/danh từ: 真正做事情.',
   collo:['真正做事情','真正的朋友','真正了解'],
   ex_zh:'只有真正做事情的时候，才能了解有多难。',ex_py:'Zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',ex_vn:'Chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.',
   exList:[
     {zh:'所以只有真正做事情的时候，才能了解有多难。',py:'Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',vn:'Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.'},
     {zh:'难过的时候我们应该做一些真正能使自己快乐的事。',py:'Nánguò de shíhou wǒmen yīnggāi zuò yìxiē zhēnzhèng néng shǐ zìjǐ kuàilè de shì.',vn:'Lúc buồn chúng ta nên làm một số việc thật sự khiến bản thân vui vẻ.'},
     {zh:'只有真的好牛皮做出来的鞋，穿着才舒服。',py:'Zhǐyǒu zhēn de hǎo niúpí zuò chulai de xié, chuānzhe cái shūfu.',vn:'Chỉ có giày làm từ da bò tốt thật, mang mới thoải mái.'},
   ],
   hanzi:[
     {c:'正',p:'zhèng',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'止 (chỉ – dừng)',mean:'đúng, chính',
      tip:'Chữ tượng hình mô phỏng bước chân ĐÚNG hướng, không lệch → CHÍNH XÁC, ĐÚNG ĐẮN; 真(thật)+正(đúng) = THẬT SỰ.',
      cf:'止 (zhǐ – "dừng lại", không có nét ngang trên")',w:'真正 / 正在 / 正常'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vận động là một việc thật sự có thể khiến cơ thể trở nên khỏe mạnh.',answer:'运动是一件真正能使身体变得健康的事。',answerPy:'Yùndòng shì yí jiàn zhēnzhèng néng shǐ shēntǐ biàn de jiànkāng de shì.',
      note:'使 diễn tả sự khiến cho (ôn lại đã học ở Bài 19).'},
     {promptLang:'vi',prompt:'Chỉ khi bạn thực sự cố gắng thì mới thành công.',answer:'只有你真正努力，才会成功。',answerPy:'Zhǐyǒu nǐ zhēnzhèng nǔlì, cái huì chénggōng.',
      note:'只有……才…… diễn tả điều kiện duy nhất.'},
   ]},

  {n:14,zh:'多么',py:'duōme',pos:'Phó từ',vn:'(mức độ tương đối cao) mấy, bao nhiêu',em:'❗',lesson:4,
   explain:['Nhấn mạnh mức độ cao trong câu cảm thán hoặc câu điều kiện.'],
   usage:'多么 + [Adj]，都/也……: diễn tả bất kể mức độ cao đến đâu.',
   collo:['多么难的问题','多么漂亮','多么希望'],
   ex_zh:'多么难的问题，都会被解决的。',ex_py:'Duōme nán de wèntí, dōu huì bèi jiějué de.',ex_vn:'Vấn đề dù khó đến mấy cũng sẽ được giải quyết.',
   exList:[
     {zh:'不过，我们一定要相信：多么难的问题，都会被解决的。',py:'Búguò, wǒmen yídìng yào xiāngxìn: duōme nán de wèntí, dōu huì bèi jiějué de.',vn:'Tuy nhiên, chúng ta nhất định phải tin: vấn đề dù khó đến mấy cũng sẽ được giải quyết.'},
     {zh:'春天来了，公园里的花儿都开了，多么漂亮啊！',py:'Chūntiān lái le, gōngyuán li de huār dōu kāi le, duōme piàoliang a!',vn:'Mùa xuân đến rồi, hoa trong công viên đều nở hết, đẹp biết bao!'},
     {zh:'我多么希望早点儿好啊。',py:'Wǒ duōme xīwàng zǎo diǎnr hǎo a.',vn:'Tôi mong sao mau khỏi biết bao.'},
   ],
   hanzi:[
     {c:'么',p:'me',type:'独体字 · Chữ đơn (giản thể, nhẹ)',st:3,ord:'nét liền',rad:'丿 (phiệt)',mean:'trợ từ nghi vấn/cảm thán',
      tip:'Chữ giản thể đơn giản hóa, thường kết hợp với các từ khác (多么, 什么, 怎么) làm TRỢ TỪ không mang nghĩa riêng.',
      cf:'公 (gōng – "công cộng", hình dáng khác")',w:'多么 / 什么 / 怎么'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa đông đến rồi, tuyết bên ngoài rơi to biết bao!',answer:'冬天到了，外面的雪下得多么大啊！',answerPy:'Dōngtiān dào le, wàimian de xuě xià de duōme dà a!',
      note:'多么 + Adj + 啊 diễn tả câu cảm thán.'},
     {promptLang:'vi',prompt:'Nếu bạn tin tưởng thì vấn đề dù khó đến mấy cũng sẽ được giải quyết.',answer:'如果你相信，多么难的问题都会被解决的。',answerPy:'Rúguǒ nǐ xiāngxìn, duōme nán de wèntí dōu huì bèi jiějué de.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 相信 đã học ở Bài 18).'},
   ]},
];

const wuData = [
  {img:'📷',label:'照相机',py:'zhàoxiàngjī',letter:'A'},
  {img:'💳',label:'信用卡',py:'xìnyòngkǎ',letter:'B'},
  {img:'🥣',label:'碗',py:'wǎn',letter:'C'},
  {img:'😢',label:'难过',py:'nánguò',letter:'D'},
  {img:'🧭',label:'东',py:'dōng',letter:'E'},
  {img:'📊',label:'成绩',py:'chéngjì',letter:'F'},
];

var dialogData = [
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'小丽的照相机怎么了？',opts:['被谁拿走了，找不到','坏了','丢在家里'],ans:0},
     {q:'同事建议怎么做？',opts:['再买一个','报警','借同事的'],ans:0},
     {q:'小丽为什么犹豫？',opts:['信用卡里的钱花得差不多了','没时间去买','商场太远'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我的照相机被谁拿走了？怎么找不到了？',py:'Wǒ de zhàoxiàngjī bèi shéi ná zǒu le? Zěnme zhǎo bu dào le?',vn:'Máy ảnh của tôi bị ai lấy mất rồi? Sao tìm không thấy nữa?'},
     {sp:1,zh:'你再找找。是不是没带来？',py:'Nǐ zài zhǎozhao. Shì bu shì méi dàilai?',vn:'Bạn tìm lại xem. Có phải không mang theo không?'},
     {sp:0,zh:'我找了，没找到啊。',py:'Wǒ zhǎo le, méi zhǎodào a.',vn:'Tôi tìm rồi, không thấy đâu.'},
     {sp:1,zh:'别难过，再买一个吧，公司东门外不就有一个大商场吗？',py:'Bié nánguò, zài mǎi yí ge ba, gōngsī dōngmén wài bú jiù yǒu yí ge dà shāngchǎng ma?',vn:'Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một khu thương mại lớn sao?'},
     {sp:0,zh:'但是我这个月信用卡里的钱已经花得差不多了。',py:'Dànshì wǒ zhège yuè xìnyòngkǎ li de qián yǐjīng huā de chà bu duō le.',vn:'Nhưng tiền trong thẻ tín dụng của tôi tháng này đã tiêu gần hết rồi.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'朋友gần đây quan tâm gì?',opts:['thể thao (bóng đá)','âm nhạc','ẩm thực'],ans:0},
     {q:'vì sao朋友thay đổi như vậy?',opts:['bị bạn trai ảnh hưởng','tự mình thích','vì công việc'],ans:0},
     {q:'điều đó ảnh hưởng thế nào đến việc học?',opts:['thành tích tệ đi','thành tích tốt hơn','không thay đổi'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你怎么突然关心起体育来了？',py:'Nǐ zěnme tūrán guānxīn qǐ tǐyù lái le?',vn:'Sao đột nhiên bạn lại quan tâm đến thể thao vậy?'},
     {sp:1,zh:'我的男朋友喜欢看足球比赛，我被他影响的。',py:'Wǒ de nánpéngyou xǐhuan kàn zúqiú bǐsài, wǒ bèi tā yǐngxiǎng de.',vn:'Bạn trai mình thích xem bóng đá, mình bị anh ấy ảnh hưởng đấy.'},
     {sp:0,zh:'看来只有爱，才能让人有变化。',py:'Kànlái zhǐyǒu ài, cái néng ràng rén yǒu biànhuà.',vn:'Xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.'},
     {sp:1,zh:'是啊，为了和他的爱好一样，我天天看球赛。',py:'Shì a, wèile hé tā de àihào yíyàng, wǒ tiāntiān kàn qiúsài.',vn:'Đúng vậy, để có cùng sở thích với anh ấy, mình xem bóng đá hàng ngày.'},
     {sp:0,zh:'除了足球，他还影响你什么了？',py:'Chúle zúqiú, tā hái yǐngxiǎng nǐ shénme le?',vn:'Ngoài bóng đá ra, anh ấy còn ảnh hưởng gì đến bạn nữa?'},
     {sp:1,zh:'我最近天天上网玩儿游戏，我的成绩差极了。',py:'Wǒ zuìjìn tiāntiān shàng wǎng wánr yóuxì, wǒ de chéngjì chà jí le.',vn:'Gần đây mình lên mạng chơi game hàng ngày, thành tích của mình tệ lắm.'},
   ]},
  {scene:'在饭馆儿 · Ở quán ăn',
   preQuiz:[
     {q:'大卫thường bị nhầm với ai?',opts:['anh trai','em trai','bạn học'],ans:0},
     {q:'ai mới phân biệt được hai anh em?',opts:['bố mẹ và chính họ','giáo viên','bạn bè'],ans:0},
     {q:'ngoài giống mặt, họ còn giống điểm gì?',opts:['sống cùng tòa nhà, cùng phòng','cùng sở thích','cùng công việc'],ans:0},
   ],
   lines:[
     {sp:1,zh:'那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。',py:'Nàge názhe wǎn chī fàn de rén shì nǐ gēge ma? Tā hé nǐ zhǎng de zhēn xiàng.',vn:'Người cầm bát ăn cơm đó là anh trai bạn à? Anh ấy trông giống bạn thật đấy.'},
     {sp:0,zh:'我们经常被别人认错。',py:'Wǒmen jīngcháng bèi biéren rèncuò.',vn:'Chúng tôi thường bị người khác nhận nhầm.'},
     {sp:1,zh:'只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。',py:'Zhǐyǒu nǐmen de bàba māma cái néng fēn chulai nǎge shì gēge, nǎge shì dìdi ba.',vn:'Chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em nhỉ.'},
     {sp:0,zh:'除了父母以外，还有我们自己也能啊。',py:'Chúle fùmǔ yǐwài, hái yǒu wǒmen zìjǐ yě néng a.',vn:'Ngoài bố mẹ ra, còn có chính chúng tôi cũng phân biệt được đấy.'},
     {sp:1,zh:'你们两个除了长得像，还有什么相同的地方？',py:'Nǐmen liǎng ge chúle zhǎng de xiàng, hái yǒu shénme xiāngtóng de dìfang?',vn:'Hai bạn ngoài giống nhau về ngoại hình, còn có điểm gì giống nhau nữa?'},
     {sp:0,zh:'我们住在同一个楼、同一个房间……',py:'Wǒmen zhù zài tóng yí ge lóu, tóng yí ge fángjiān……',vn:'Chúng tôi sống cùng một tòa nhà, cùng một phòng…'},
   ]},
  {scene:'độc bạch · Tự thuật (triết lý giải quyết vấn đề)',
   preQuiz:[
     {q:'người trẻ gặp vấn đề khó thường thế nào?',opts:['lo lắng, không biết làm sao','bình tĩnh giải quyết','bỏ qua'],ans:0},
     {q:'vấn đề nhìn khó nhưng làm thì thế nào?',opts:['có thể rất đơn giản','luôn khó','không thể giải quyết'],ans:0},
     {q:'khi nào mới hiểu vấn đề khó đến đâu?',opts:['khi thực sự bắt tay vào làm','khi hỏi người khác','khi đọc sách'],ans:0},
   ],
   lines:[
     {sp:0,zh:'年轻人遇到难题，常常很着急，不知道怎么办。其实，不同的问题有不同的解决办法。',py:'Niánqīng rén yùdào nántí, chángcháng hěn zháojí, bù zhīdào zěnme bàn. Qíshí, bùtóng de wèntí yǒu bùtóng de jiějué bànfǎ.',vn:'Người trẻ gặp phải vấn đề khó, thường rất lo lắng, không biết làm sao. Thực ra, những vấn đề khác nhau có cách giải quyết khác nhau.'},
     {sp:0,zh:'有些问题看上去很难，但是做起来非常简单，所以得试着做做。',py:'Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān, suǒyǐ děi shìzhe zuòzuo.',vn:'Có những vấn đề nhìn có vẻ khó, nhưng làm thì lại rất đơn giản, nên phải thử làm xem.'},
     {sp:0,zh:'有些问题看上去虽然简单，但是解决起来难极了。',py:'Yǒuxiē wèntí kàn shangqu suīrán jiǎndān, dànshì jiějué qilai nán jí le.',vn:'Có những vấn đề nhìn tuy đơn giản, nhưng giải quyết thì lại khó vô cùng.'},
     {sp:0,zh:'所以只有真正做事情的时候，才能了解有多难。',py:'Suǒyǐ zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',vn:'Vì vậy chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.'},
     {sp:0,zh:'不过，我们一定要相信：多么难的问题，都会被解决的。',py:'Búguò, wǒmen yídìng yào xiāngxìn: duōme nán de wèntí, dōu huì bèi jiějué de.',vn:'Tuy nhiên, chúng ta nhất định phải tin: vấn đề dù khó đến mấy cũng sẽ được giải quyết.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'照相机',right:'被拿走了'},
  {left:'信用卡里的',right:'钱'},
  {left:'关心',right:'体育'},
  {left:'天天看',right:'比赛'},
  {left:'成绩',right:'差极了'},
  {left:'拿着',right:'碗吃面条'},
  {left:'分出来',right:'哪个是哥哥'},
  {left:'试着',right:'洗洗'},
  {left:'只有爱，',right:'才能让人有变化。'},
  {left:'解决',right:'问题'},
  {left:'多么',right:'难的问题'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我的',blank:'照相机',post:'被谁拿走了？',hint:'(máy chụp ảnh)',ans:'照相机'},
  {pre:'我的手机',blank:'被',post:'谁放在这儿了？',hint:'(bị, giới từ chỉ thể bị động)',ans:'被'},
  {pre:'别',blank:'难过',post:'，再买一个吧。',hint:'(buồn)',ans:'难过'},
  {pre:'公司',blank:'东',post:'门外有一个大公园。',hint:'(phía đông)',ans:'东'},
  {pre:'我这个月',blank:'信用卡',post:'里的钱已经花得差不多了。',hint:'(thẻ tín dụng)',ans:'信用卡'},
  {pre:'虽然工作很忙，但是他还是很',blank:'关心',post:'家人的生活。',hint:'(quan tâm, chú ý)',ans:'关心'},
  {pre:'我的',blank:'成绩',post:'差极了。',hint:'(thành tích, kết quả)',ans:'成绩'},
  {pre:'那个拿着',blank:'碗',post:'吃面条的人是你哥哥吗？',hint:'(bát)',ans:'碗'},
  {pre:'只有你们的爸爸妈妈才能',blank:'分',post:'出来。',hint:'(phân biệt)',ans:'分'},
  {pre:'所以得',blank:'试',post:'着洗洗。',hint:'(thử)',ans:'试'},
  {pre:'只有',blank:'真正',post:'了解问题，才能解决问题。',hint:'(thật sự)',ans:'真正'},
  {pre:'',blank:'多么',post:'重的行李箱，他都能一个人搬走。',hint:'(mức độ tương đối cao)',ans:'多么'},
  {pre:'不同的问题有不同的',blank:'解决',post:'办法。',hint:'(giải quyết)',ans:'解决'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','的','信用卡','被','谁','拿走','了','？'],ans:'我的信用卡被谁拿走了？',audio:'我的信用卡被谁拿走了？'},
  {words:['别','难过','，','下次','一定','能','提高','成绩','。'],ans:'别难过，下次一定能提高成绩。',audio:'别难过，下次一定能提高成绩。'},
  {words:['我','的','成绩','被','这次','考试','影响','了','。'],ans:'我的成绩被这次考试影响了。',audio:'我的成绩被这次考试影响了。'},
  {words:['只有','努力','复习','，','才','能','提高','成绩','。'],ans:'只有努力复习，才能提高成绩。',audio:'只有努力复习，才能提高成绩。'},
  {words:['碗','还','没有','被','洗','干净','呢','。'],ans:'碗还没有被洗干净呢。',audio:'碗还没有被洗干净呢。'},
  {words:['这个','字','经常','被','学生','写错','。'],ans:'这个字经常被学生写错。',audio:'这个字经常被学生写错。'},
  {words:['只有','爸爸','、','妈妈','才','能','分','出来','。'],ans:'只有爸爸、妈妈才能分出来。',audio:'只有爸爸、妈妈才能分出来。'},
  {words:['多么','脏','的','碗','，','她','都','能','洗','干净','。'],ans:'多么脏的碗，她都能洗干净。',audio:'多么脏的碗，她都能洗干净。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我钱包被拿走了谁？',
   opts:['我的钱包被谁拿走了？','我钱包被拿走了谁？','我的钱包谁被拿走了？','谁被我的钱包拿走了？'],ans:0,
   exp:'Cấu trúc bị động: 主语+被+宾语(谁)+动词+其他, 谁 phải đứng SAU 被 và TRƯỚC động từ, không đặt cuối câu.'},
  {wrong:'照相机被没有找到呢还。',
   opts:['照相机还没有被找到呢。','照相机被没有找到呢还。','照相机没有还被找到呢。','照相机还被没有找到呢。'],ans:0,
   exp:'Phó từ phủ định (没有) và các thành phần khác phải đặt TRƯỚC 被, không đặt sau.'},
  {wrong:'蛋糕吃完了让弟弟。',
   opts:['蛋糕让弟弟吃完了。','蛋糕吃完了让弟弟。','蛋糕让吃完了弟弟。','弟弟蛋糕让吃完了。'],ans:0,
   exp:'Cấu trúc 让/叫/被: 主语+让+宾语(弟弟)+动词(吃完), thứ tự không được đảo.'},
  {wrong:'洗完碗只有，才能出去玩儿。',
   opts:['只有洗完碗，才能出去玩儿。','洗完碗只有，才能出去玩儿。','只有才洗完碗，能出去玩儿。','洗完只有碗，才能出去玩儿。'],ans:0,
   exp:'只有 phải đứng ở ĐẦU câu, trước điều kiện, không đặt giữa câu.'},
  {wrong:'只有多运动才，能更健康。',
   opts:['只有多运动，才能更健康。','只有多运动才，能更健康。','只有才多运动，能更健康。','只有多运动，能才更健康。'],ans:0,
   exp:'才 phải đứng NGAY TRƯỚC động từ năng nguyện (能), không tách rời.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小丽的照相机怎么了？她为什么不想马上买新的？',
     q_vn:'Máy ảnh của Tiểu Lệ sao rồi? Vì sao cô không muốn mua ngay cái mới?',
     hint:'被拿走了找不到，信用卡里的钱花得差不多了',
     sample:'小丽的照相机被谁拿走了，怎么也找不到，她不想马上买新的，因为这个月信用卡里的钱已经花得差不多了。',
     sample_vn:'Máy ảnh của Tiểu Lệ bị ai lấy mất, tìm mãi không thấy, cô không muốn mua ngay cái mới, vì tiền trong thẻ tín dụng tháng này đã tiêu gần hết rồi.',
     note:'被 diễn tả câu bị động (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'朋友为什么突然关心起体育来了？这对她有什么影响？',
     q_vn:'Vì sao bạn cô ấy đột nhiên quan tâm đến thể thao? Điều đó ảnh hưởng gì đến cô ấy?',
     hint:'被男朋友影响，天天看球赛，但成绩差极了',
     sample:'朋友因为被男朋友影响，开始天天看球赛，但是因为天天上网玩儿游戏，她的成绩差极了。',
     sample_vn:'Bạn của cô ấy vì bị bạn trai ảnh hưởng, bắt đầu xem bóng đá hàng ngày, nhưng vì lên mạng chơi game hàng ngày, thành tích của cô ấy tệ lắm.',
     note:'被 diễn tả câu bị động, nêu nguyên nhân của sự thay đổi.'},
    {q_zh:'大卫和他哥哥为什么经常被别人认错？谁才能分出来？',
     q_vn:'Vì sao David và anh trai thường bị người khác nhận nhầm? Ai mới phân biệt được?',
     hint:'长得很像，只有父母和他们自己才能分出来',
     sample:'大卫和他哥哥长得真像，所以经常被别人认错，只有他们的爸爸妈妈和他们自己才能分出来哪个是哥哥，哪个是弟弟。',
     sample_vn:'David và anh trai trông giống nhau thật, nên thường bị người khác nhận nhầm, chỉ có bố mẹ họ và chính họ mới phân biệt được ai là anh, ai là em.',
     note:'只有……才…… diễn tả điều kiện duy nhất (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'关于解决问题，这段话给我们什么建议？',
     q_vn:'Về việc giải quyết vấn đề, đoạn này cho chúng ta lời khuyên gì?',
     hint:'不同问题有不同办法，试着做做，多么难的问题都会被解决',
     sample:'不同的问题有不同的解决办法，有些问题看上去很难，但做起来简单，所以要试着做做，我们要相信，多么难的问题，都会被解决的。',
     sample_vn:'Những vấn đề khác nhau có cách giải quyết khác nhau, có những vấn đề nhìn có vẻ khó, nhưng làm thì lại đơn giản, nên phải thử làm xem, chúng ta phải tin, vấn đề dù khó đến mấy cũng sẽ được giải quyết.',
     note:'都会被解决的 diễn tả câu bị động ở thì tương lai.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cuốn sách của tôi bị ai lấy đi rồi?', zh:'我的书被谁拿走了？', py:'Wǒ de shū bèi shéi ná zǒu le?'},
  {vi:'Đừng buồn, ngày mai mình đi ăn ngon nhé.', zh:'别难过，明天我们去吃好吃的吧。', py:'Bié nánguò, míngtiān wǒmen qù chī hǎochī de ba.'},
  {vi:'Cuối tuần của tôi bị trận mưa lớn này ảnh hưởng.', zh:'我的周末被这场大雨影响了。', py:'Wǒ de zhōumò bèi zhè chǎng dà yǔ yǐngxiǎng le.'},
  {vi:'Chỉ có kiên trì luyện tập, mới có thể nói tiếng Trung giỏi.', zh:'只有坚持练习，才能说好中文。', py:'Zhǐyǒu jiānchí liànxí, cái néng shuōhǎo Zhōngwén.'},
  {vi:'Cái bát này thường bị mọi người dùng nhầm.', zh:'这个碗经常被大家用错。', py:'Zhège wǎn jīngcháng bèi dàjiā yòngcuò.'},
  {vi:'Chỉ có bác sĩ mới có thể phân biệt được hai loại thuốc này.', zh:'只有医生才能分出来这两种药。', py:'Zhǐyǒu yīshēng cái néng fēn chulai zhè liǎng zhǒng yào.'},
  {vi:'Có những vấn đề nhìn có vẻ khó, nhưng làm thì lại rất đơn giản.', zh:'有些问题看上去很难，但是做起来非常简单。', py:'Yǒuxiē wèntí kàn shangqu hěn nán, dànshì zuò qilai fēicháng jiǎndān.'},
  {vi:'Máy ảnh đắt đến mấy, anh ấy cũng đều muốn mua.', zh:'多么贵的照相机，他都想买。', py:'Duōme guì de zhàoxiàngjī, tā dōu xiǎng mǎi.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bức tranh vẫn chưa được treo lên đâu.', zh:'画还没有被挂上呢。', py:'Huà hái méiyǒu bèi guà shàng ne.'},
  {vi:'Bệnh nhân vẫn chưa được đưa đến bệnh viện.', zh:'病人还没被送到医院呢。', py:'Bìngrén hái méi bèi sòngdào yīyuàn ne.'},
  {vi:'Tháng sau cô ấy sẽ được mẹ gửi sang Mỹ.', zh:'下个月她会被妈妈送到美国。', py:'Xià ge yuè tā huì bèi māma sòngdào Měiguó.'},
  {vi:'Chỉ có giải quyết xong vấn đề này, mới có thể yên tâm đi ngủ.', zh:'只有解决完这个问题，才能放心睡觉。', py:'Zhǐyǒu jiějué wán zhège wèntí, cái néng fàngxīn shuìjiào.'},
  {vi:'Chỉ có cơm mẹ nấu cô ấy mới thích ăn.', zh:'只有妈妈做的饭，她才爱吃。', py:'Zhǐyǒu māma zuò de fàn, tā cái ài chī.'},
  {vi:'Mũ bị gió thổi bay mất rồi.', zh:'帽子被刮跑了。', py:'Màozi bèi guā pǎo le.'},
  {vi:'Cơm bị em gái ăn hết rồi.', zh:'饭让妹妹吃完了。', py:'Fàn ràng mèimei chīwán le.'},
  {vi:'Chỉ khi thật sự sống ở nước ngoài mới hiểu được nỗi nhớ nhà.', zh:'只有真正在国外生活的时候，才能了解想家的感觉。', py:'Zhǐyǒu zhēnzhèng zài guówài shēnghuó de shíhou, cái néng liǎojiě xiǎngjiā de gǎnjué.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 20)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-20/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'奶奶喜欢那个新买的照相机吗', post:'？',
       py:'Nǎinai xǐhuan nàge xīn mǎi de zhàoxiàngjī ma?', vn:'Bà nội có thích cái máy ảnh mới mua đó không?'},
      {speaker:'男', pre:'喜欢，', blank:'她说很好用，她很满意', post:'。',
       py:'Xǐhuan, tā shuō hěn hǎoyòng, tā hěn mǎnyì.', vn:'Thích, bà nói dùng tốt lắm, bà rất hài lòng.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'我来洗碗筷，你去看电视吧', post:'。',
       py:'Wǒ lái xǐ wǎnkuài, nǐ qù kàn diànshì ba.', vn:'Tôi rửa bát đũa, bạn đi xem tivi đi.'},
      {speaker:'女', pre:'不用，', blank:'你把桌子上的鱼放冰箱里就可以了', post:'。',
       py:'Búyòng, nǐ bǎ zhuōzi shang de yú fàng bīngxiāng li jiù kěyǐ le.', vn:'Không cần đâu, bạn để con cá trên bàn vào tủ lạnh là được rồi.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'', blank:'北方人是不是都像你一样这么喜欢吃面', post:'？',
       py:'Běifāngrén shì bu shì dōu xiàng nǐ yíyàng zhème xǐhuan chī miàn?', vn:'Người miền Bắc có phải ai cũng thích ăn mì như bạn vậy không?'},
      {speaker:'男', pre:'', blank:'不一定，东北人就更爱吃米饭', post:'。',
       py:'Bù yídìng, dōngběirén jiù gèng ài chī mǐfàn.', vn:'Không nhất định đâu, người Đông Bắc lại thích ăn cơm hơn.'},
    ]},
    {num:4, lines:[
      {speaker:'女', pre:'', blank:'今天风太大了，伞都要被刮走了', post:'。',
       py:'Jīntiān fēng tài dà le, sǎn dōu yào bèi guā zǒu le.', vn:'Hôm nay gió to quá, ô sắp bị thổi bay rồi.'},
      {speaker:'男', pre:'', blank:'真希望明天天气能好点儿', post:'。',
       py:'Zhēn xīwàng míngtiān tiānqì néng hǎo diǎnr.', vn:'Thật mong ngày mai thời tiết tốt hơn một chút.'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'', blank:'你怎么这么难过啊？怎么了', post:'？',
       py:'Nǐ zěnme zhème nánguò a? Zěnme le?', vn:'Sao bạn buồn thế? Sao vậy?'},
      {speaker:'男', pre:'', blank:'你昨天给我买的蛋糕被弟弟和妹妹吃了', post:'。',
       py:'Nǐ zuótiān gěi wǒ mǎi de dàngāo bèi dìdi hé mèimei chī le.', vn:'Cái bánh kem hôm qua bạn mua cho tôi bị em trai và em gái ăn mất rồi.'},
    ]},
    {num:6, lines:[
      {pre:'春天来了，公园里的花儿都开了，多么漂亮啊，', blank:'如果带上照相机就好了', post:'。',
       py:'Chūntiān lái le, gōngyuán li de huār dōu kāi le, duōme piàoliang a, rúguǒ dàishang zhàoxiàngjī jiù hǎo le.', vn:'Mùa xuân đến rồi, hoa trong công viên đều nở hết, đẹp biết bao, nếu mang theo máy ảnh thì tốt rồi.'},
    ]},
    {num:7, lines:[
      {pre:'今天中午在商店买东西时，服务员说我这张信用卡不能用了。', blank:'我打算下午去银行问问是怎么回事', post:'。',
       py:'Jīntiān zhōngwǔ zài shāngdiàn mǎi dōngxi shí, fúwùyuán shuō wǒ zhè zhāng xìnyòngkǎ bù néng yòng le. Wǒ dǎsuàn xiàwǔ qù yínháng wènwen shì zěnme huí shì.', vn:'Trưa nay lúc mua đồ ở cửa hàng, nhân viên nói thẻ tín dụng của tôi không dùng được nữa. Tôi định chiều đi ngân hàng hỏi xem là chuyện gì.'},
    ]},
    {num:8, lines:[
      {pre:'难过的时候我们应该做一些真正能使自己快乐的事，', blank:'像听音乐、玩儿游戏或者去运动，这些都是不错的选择', post:'。',
       py:'Nánguò de shíhou wǒmen yīnggāi zuò yìxiē zhēnzhèng néng shǐ zìjǐ kuàilè de shì, xiàng tīng yīnyuè, wánr yóuxì huòzhě qù yùndòng, zhèxiē dōu shì búcuò de xuǎnzé.', vn:'Lúc buồn chúng ta nên làm một số việc thật sự khiến bản thân vui vẻ, như nghe nhạc, chơi game hoặc đi vận động, những cái này đều là lựa chọn không tệ.'},
    ]},
    {num:9, lines:[
      {pre:'爱可以是爸爸妈妈对孩子的照顾，可以是丈夫对妻子的关心，', blank:'也可以是你对朋友的帮助', post:'。',
       py:'Ài kěyǐ shì bàba māma duì háizi de zhàogù, kěyǐ shì zhàngfu duì qīzi de guānxīn, yě kěyǐ shì nǐ duì péngyou de bāngzhù.', vn:'Yêu thương có thể là sự chăm sóc của bố mẹ dành cho con cái, có thể là sự quan tâm của chồng dành cho vợ, cũng có thể là sự giúp đỡ của bạn dành cho bạn bè.'},
    ]},
    {num:10, lines:[
      {pre:'你别难过了，我们一起帮你想办法。', blank:'先把这个最难的问题解决了，其他问题就容易多了', post:'。',
       py:'Nǐ bié nánguò le, wǒmen yìqǐ bāng nǐ xiǎng bànfǎ. Xiān bǎ zhège zuì nán de wèntí jiějué le, qítā wèntí jiù róngyì duō le.', vn:'Bạn đừng buồn nữa, chúng tôi cùng giúp bạn nghĩ cách. Trước tiên giải quyết vấn đề khó nhất này, những vấn đề khác sẽ dễ hơn nhiều.'},
    ]},
  ],
  mc: [
    {num:11, options:['今天过生日','买了本字典','正在学汉语'], ans:2,
     lines:[
       {speaker:'男', pre:'妹妹，', blank:'明天是你的生日，我给你买了本汉语字典', post:'。', py:'Mèimei, míngtiān shì nǐ de shēngrì, wǒ gěi nǐ mǎile běn Hànyǔ zìdiǎn.', vn:'Em gái, mai là sinh nhật em, anh mua cho em quyển từ điển tiếng Trung.'},
       {speaker:'女', pre:'你怎么知道我在学汉语？', blank:'我还一直觉得你不关心我的学习呢', post:'。', py:'Nǐ zěnme zhīdào wǒ zài xué Hànyǔ? Wǒ hái yìzhí juéde nǐ bù guānxīn wǒ de xuéxí ne.', vn:'Sao anh biết em đang học tiếng Trung? Em cứ nghĩ là anh không quan tâm việc học của em đấy.'},
     ],
     explain:'男：妹妹，明天是你的生日，我给你买了本汉语字典。女：你怎么知道我在学汉语？我还一直觉得你不关心我的学习呢。问：关于女的，可以知道什么？ → 正在学汉语。'},
    {num:12, options:['往东走','往南走','往车站那边走'], ans:0,
     lines:[
       {speaker:'男', pre:'放心，你就听我的吧，', blank:'只有往东走才能到国家公园', post:'。', py:'Fàngxīn, nǐ jiù tīng wǒ de ba, zhǐyǒu wǎng dōng zǒu cái néng dào guójiā gōngyuán.', vn:'Yên tâm, nghe tôi đi, chỉ có đi về hướng đông mới đến được công viên quốc gia.'},
       {speaker:'女', pre:'但是从地图上看，', blank:'走南边那条路才对。我们还是去车站问问那些等车的人吧', post:'。', py:'Dànshì cóng dìtú shang kàn, zǒu nánbian nà tiáo lù cái duì. Wǒmen háishi qù chēzhàn wènwen nàxiē děng chē de rén ba.', vn:'Nhưng nhìn trên bản đồ, đi con đường phía nam mới đúng. Chúng ta ra trạm xe hỏi những người đang chờ xe thì hơn.'},
     ],
     explain:'男：放心，你就听我的吧，只有往东走才能到国家公园。女：但是从地图上看，走南边那条路才对。我们还是去车站问问那些等车的人吧。问：男的觉得到国家公园怎么走？ → 往东走。'},
    {num:13, options:['帽子','书','地图'], ans:2,
     lines:[
       {speaker:'男', pre:'快点儿，拿上帽子走吧，', blank:'明天你再找书', post:'。', py:'Kuài diǎnr, náshang màozi zǒu ba, míngtiān nǐ zài zhǎo shū.', vn:'Nhanh lên, cầm mũ đi thôi, mai tìm sách sau.'},
       {speaker:'女', pre:'我没找书，出去玩儿还是得带上地图啊，', blank:'被你放哪儿了', post:'？', py:'Wǒ méi zhǎo shū, chūqu wánr háishi děi dàishang dìtú a, bèi nǐ fàng nǎr le?', vn:'Tôi không tìm sách, đi chơi vẫn phải mang theo bản đồ chứ, bị anh để đâu rồi?'},
     ],
     explain:'男：快点儿，拿上帽子走吧，明天你再找书。女：我没找书，出去玩儿还是得带上地图啊，被你放哪儿了？问：女的在找什么？ → 地图。'},
    {num:14, options:['在找运动服','准备去跑步','穿好了运动服'], ans:0,
     lines:[
       {speaker:'女', pre:'看见我的运动服了吗？', blank:'怎么找不到了', post:'？', py:'Kànjiàn wǒ de yùndòngfú le ma? Zěnme zhǎo bu dào le?', vn:'Có thấy đồ thể thao của tôi không? Sao tìm không thấy nữa?'},
       {speaker:'男', pre:'是不是被笑笑穿走了？', blank:'她刚才说要出去跑步', post:'。', py:'Shì bu shì bèi Xiàoxiao chuān zǒu le? Tā gāngcái shuō yào chūqu pǎobù.', vn:'Có phải bị Tiếu Tiếu mặc đi rồi không? Vừa nãy nó nói định ra ngoài chạy bộ.'},
     ],
     explain:'女：看见我的运动服了吗？怎么找不到了？男：是不是被笑笑穿走了？她刚才说要出去跑步。问：关于女的，可以知道什么？ → 在找运动服。'},
    {num:15, options:['去找服务员','去拿房卡','回房间去'], ans:2,
     lines:[
       {speaker:'男', pre:'我的房卡找不到了，', blank:'我怎么进去啊', post:'？', py:'Wǒ de fángkǎ zhǎo bu dào le, wǒ zěnme jìnqu a?', vn:'Thẻ phòng của tôi tìm không thấy, tôi vào bằng cách nào đây?'},
       {speaker:'女', pre:'你给服务员打个电话，', blank:'他们会帮你想办法解决的', post:'。', py:'Nǐ gěi fúwùyuán dǎ ge diànhuà, tāmen huì bāng nǐ xiǎng bànfǎ jiějué de.', vn:'Bạn gọi điện cho nhân viên đi, họ sẽ giúp bạn nghĩ cách giải quyết.'},
     ],
     explain:'男：我的房卡找不到了，我怎么进去啊？女：你给服务员打个电话，他们会帮你想办法解决的。问：男的要做什么？ → 回房间去。'},
    {num:16, options:['去银行还钱','去教室上课','去借照相机'], ans:1,
     lines:[
       {speaker:'女', pre:'你这么着急，', blank:'是要去哪儿啊', post:'？', py:'Nǐ zhème zháojí, shì yào qù nǎr a?', vn:'Bạn gấp gáp thế, định đi đâu vậy?'},
       {speaker:'男', pre:'我去银行，', blank:'我的信用卡该还钱了。你去哪儿', post:'？', py:'Wǒ qù yínháng, wǒ de xìnyòngkǎ gāi huán qián le. Nǐ qù nǎr?', vn:'Tôi đi ngân hàng, thẻ tín dụng của tôi phải trả tiền rồi. Bạn đi đâu?'},
       {speaker:'女', pre:'', blank:'我去教室上课', post:'。', py:'Wǒ qù jiàoshì shàngkè.', vn:'Tôi đi lớp học.'},
       {speaker:'男', pre:'这个照相机是小晴的，', blank:'请你帮我还给她吧', post:'。', py:'Zhège zhàoxiàngjī shì Xiǎoqíng de, qǐng nǐ bāng wǒ huán gěi tā ba.', vn:'Cái máy ảnh này là của Tiểu Tình, nhờ bạn trả lại giúp tôi.'},
     ],
     explain:'女：你这么着急，是要去哪儿啊？男：我去银行，我的信用卡该还钱了。你去哪儿？女：我去教室上课。男：这个照相机是小晴的，请你帮我还给她吧。问：男的要去做什么？ → 去教室上课。'},
    {num:17, options:['找不到照相机','忘了去教室','男的不帮她找'], ans:0,
     lines:[
       {speaker:'男', pre:'小云，', blank:'这个照相机是你要找的吗', post:'？', py:'Xiǎoyún, zhège zhàoxiàngjī shì nǐ yào zhǎo de ma?', vn:'Tiểu Vân, cái máy ảnh này có phải bạn đang tìm không?'},
       {speaker:'女', pre:'是啊，太谢谢你了。', blank:'刚才我觉得找不到了，还很难过。你在哪儿找到的', post:'？', py:'Shì a, tài xièxie nǐ le. Gāngcái wǒ juéde zhǎo bu dào le, hái hěn nánguò. Nǐ zài nǎr zhǎodào de?', vn:'Đúng rồi, cảm ơn bạn nhiều lắm. Vừa nãy tôi tưởng không tìm thấy, còn buồn lắm. Bạn tìm thấy ở đâu vậy?'},
       {speaker:'男', pre:'我是在教室找到的，', blank:'一定是被你忘在教室里了', post:'。', py:'Wǒ shì zài jiàoshì zhǎodào de, yídìng shì bèi nǐ wàng zài jiàoshì li le.', vn:'Tôi tìm thấy ở lớp học, chắc chắn là bị bạn để quên trong lớp rồi.'},
       {speaker:'女', pre:'真奇怪，教室我也找过了，', blank:'怎么没发现呢', post:'？', py:'Zhēn qíguài, jiàoshì wǒ yě zhǎoguo le, zěnme méi fāxiàn ne?', vn:'Lạ thật, lớp học tôi cũng tìm rồi, sao lại không phát hiện ra nhỉ?'},
     ],
     explain:'男：小云，这个照相机是你要找的吗？女：是啊，太谢谢你了。刚才我觉得找不到了，还很难过。你在哪儿找到的？男：我是在教室找到的，一定是被你忘在教室里了。女：真奇怪，教室我也找过了，怎么没发现呢？问：女的为什么难过？ → 找不到照相机。'},
    {num:18, options:['客人已经离开了','客人对房间很满意','客人可以换个房间'], ans:2,
     lines:[
       {speaker:'女', pre:'我觉得这样做，', blank:'客人是不会满意的', post:'。', py:'Wǒ juéde zhèyàng zuò, kèrén shì bú huì mǎnyì de.', vn:'Tôi thấy làm vậy, khách sẽ không hài lòng đâu.'},
       {speaker:'男', pre:'', blank:'那你有更好的办法来解决这个问题吗', post:'？', py:'Nà nǐ yǒu gèng hǎo de bànfǎ lái jiějué zhège wèntí ma?', vn:'Vậy bạn có cách nào tốt hơn để giải quyết vấn đề này không?'},
       {speaker:'女', pre:'我觉得可以给客人换一个房间，他离开时，', blank:'我们还可以找车送他去机场', post:'。', py:'Wǒ juéde kěyǐ gěi kèrén huàn yí ge fángjiān, tā líkāi shí, wǒmen hái kěyǐ zhǎo chē sòng tā qù jīchǎng.', vn:'Tôi thấy có thể đổi cho khách một phòng khác, lúc khách rời đi, chúng ta còn có thể tìm xe đưa khách ra sân bay.'},
       {speaker:'男', pre:'行，', blank:'那你去帮他换张房卡吧', post:'。', py:'Xíng, nà nǐ qù bāng tā huàn zhāng fángkǎ ba.', vn:'Được, vậy bạn đi đổi thẻ phòng giúp khách đi.'},
     ],
     explain:'女：我觉得这样做，客人是不会满意的。男：那你有更好的办法来解决这个问题吗？女：我觉得可以给客人换一个房间，他离开时，我们还可以找车送他去机场。男：行，那你去帮他换张房卡吧。问：根据这段话，可以知道什么？ → 客人可以换个房间。'},
    {num:19, options:['不能再跳舞了','脚就快好了','坐电梯不小心'], ans:1,
     lines:[
       {speaker:'男', pre:'电梯来了，', blank:'您小心点儿。您的脚怎么样了', post:'？', py:'Diàntī lái le, nín xiǎoxīn diǎnr. Nín de jiǎo zěnme yàng le?', vn:'Thang máy đến rồi, chị cẩn thận chút. Chân chị thế nào rồi?'},
       {speaker:'女', pre:'谢谢你送我回来。', blank:'脚好一些了，只要再休息几天，就能跟你们出去跳舞了', post:'。', py:'Xièxie nǐ sòng wǒ huílai. Jiǎo hǎo yìxiē le, zhǐyào zài xiūxi jǐ tiān, jiù néng gēn nǐmen chūqu tiàowǔ le.', vn:'Cảm ơn anh đưa tôi về. Chân đỡ hơn rồi, chỉ cần nghỉ thêm mấy ngày, là có thể đi khiêu vũ cùng mọi người rồi.'},
       {speaker:'男', pre:'那太好了，只有您来了，', blank:'我们才能跳得更快乐', post:'。', py:'Nà tài hǎo le, zhǐyǒu nín lái le, wǒmen cái néng tiào de gèng kuàilè.', vn:'Vậy tốt quá, chỉ có chị đến, chúng tôi mới nhảy vui hơn được.'},
       {speaker:'女', pre:'跟你们一起玩儿我也更快乐，', blank:'我多么希望早点儿好啊', post:'。', py:'Gēn nǐmen yìqǐ wánr wǒ yě gèng kuàilè, wǒ duōme xīwàng zǎo diǎnr hǎo a.', vn:'Chơi cùng mọi người tôi cũng vui hơn, tôi mong sao mau khỏi biết bao.'},
     ],
     explain:'男：电梯来了，您小心点儿。您的脚怎么样了？女：谢谢你送我回来。脚好一些了，只要再休息几天，就能跟你们出去跳舞了。男：那太好了，只有您来了，我们才能跳得更快乐。女：跟你们一起玩儿我也更快乐，我多么希望早点儿好啊。问：关于女的，可以知道什么？ → 脚就快好了。'},
    {num:20, options:['饭馆','商店','动物园'], ans:1,
     lines:[
       {speaker:'男', pre:'小姐，这双黑色的皮鞋多少钱？', blank:'有43号的吗', post:'？', py:'Xiǎojiě, zhè shuāng hēisè de píxié duōshao qián? Yǒu sìshísān hào de ma?', vn:'Cô ơi, đôi giày da đen này bao nhiêu tiền? Có cỡ 43 không?'},
       {speaker:'女', pre:'六百八，', blank:'帮您找双43号的试试', post:'？', py:'Liùbǎi bā, bāng nín zhǎo shuāng sìshísān hào de shìshi?', vn:'Sáu trăm tám, tôi tìm giúp anh đôi cỡ 43 thử nhé?'},
       {speaker:'男', pre:'这么贵，', blank:'是真牛皮的吗', post:'？', py:'Zhème guì, shì zhēn niúpí de ma?', vn:'Đắt thế, có phải da bò thật không?'},
       {speaker:'女', pre:'当然了，只有真的好牛皮做出来的鞋，', blank:'穿着才舒服', post:'。', py:'Dāngrán le, zhǐyǒu zhēn de hǎo niúpí zuò chulai de xié, chuānzhe cái shūfu.', vn:'Đương nhiên rồi, chỉ có giày làm từ da bò tốt thật, mang mới thoải mái.'},
     ],
     explain:'男：小姐，这双黑色的皮鞋多少钱？有43号的吗？女：六百八，帮您找双43号的试试？男：这么贵，是真牛皮的吗？女：当然了，只有真的好牛皮做出来的鞋，穿着才舒服。问：他们最可能在哪儿？ → 商店。'},
  ],
};
