// ══════════════════════════════════════════
// DATA — HSK3 Bài 14: 你把水果拿过来 (Cậu hãy mang trái cây đến đây)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'打扫',py:'dǎsǎo',pos:'Động từ',vn:'quét dọn',em:'🧹',lesson:1,
   explain:['Làm cho một nơi trở nên sạch sẽ, gọn gàng bằng cách quét, lau chùi.'],
   usage:'Động từ, mang tân ngữ là danh từ chỉ nơi chốn: 打扫 + [phòng/nhà].',
   collo:['打扫房间','打扫办公室','打扫干净'],
   ex_zh:'你怎么还不打扫房间啊？',ex_py:'Nǐ zěnme hái bù dǎsǎo fángjiān a?',ex_vn:'Sao anh vẫn chưa dọn phòng vậy?',
   exList:[
     {zh:'客人就要来了，你怎么还不打扫房间啊？',py:'Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?',vn:'Khách sắp đến rồi, sao anh vẫn chưa dọn phòng vậy?'},
     {zh:'她每天都要先把办公室打扫干净，然后才回家。',py:'Tā měi tiān dōu yào xiān bǎ bàngōngshì dǎsǎo gānjìng, ránhòu cái huí jiā.',vn:'Cô ấy ngày nào cũng phải dọn sạch văn phòng trước, rồi mới về nhà.'},
     {zh:'你先把盘子洗一下，再打扫房间。',py:'Nǐ xiān bǎ pánzi xǐ yíxià, zài dǎsǎo fángjiān.',vn:'Bạn rửa bát trước đã, rồi dọn phòng.'},
   ],
   hanzi:[
     {c:'扫',p:'sǎo',type:'左右结构 · Trái-phải',st:6,ord:'扌 trái → 彐 phải',rad:'扌 (thủ – tay)',mean:'quét',
      tip:'扌(tay) + 彐(hình cái chổi giản thể) → dùng TAY cầm chổi để QUÉT.',
      cf:'归 (guī – "trở về", có cách ghép khác")',w:'打扫 / 扫地'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn rửa bát trước đã, rồi dọn phòng.',answer:'你先把盘子洗一下，再打扫房间。',answerPy:'Nǐ xiān bǎ pánzi xǐ yíxià, zài dǎsǎo fángjiān.',
      note:'先……再…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu khách sắp đến thì chúng ta nên dọn phòng ngay.',answer:'如果客人快来了，我们就应该马上打扫房间。',answerPy:'Rúguǒ kèrén kuài lái le, wǒmen jiù yīnggāi mǎshàng dǎsǎo fángjiān.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 应该 đã học ở Bài 13).'},
   ]},

  {n:2,zh:'干净',py:'gānjìng',pos:'Tính từ',vn:'sạch sẽ',em:'✨',lesson:1,
   explain:['Không có bụi bẩn, gọn gàng, trong sạch.'],
   usage:'Tính từ; thường làm bổ ngữ kết quả sau động từ: 打扫干净, 洗干净.',
   collo:['打扫干净','洗干净','很干净'],
   ex_zh:'他们会把房间打扫干净。',ex_py:'Tāmen huì bǎ fángjiān dǎsǎo gānjìng.',ex_vn:'Chúng sẽ dọn phòng sạch sẽ.',
   exList:[
     {zh:'客人来的时候，他们会把房间打扫干净。',py:'Kèrén lái de shíhou, tāmen huì bǎ fángjiān dǎsǎo gānjìng.',vn:'Lúc khách đến, chúng sẽ dọn phòng sạch sẽ.'},
     {zh:'我把衣服洗干净了。',py:'Wǒ bǎ yīfu xǐ gānjìng le.',vn:'Tôi giặt quần áo sạch sẽ rồi.'},
     {zh:'这个房间真干净。',py:'Zhège fángjiān zhēn gānjìng.',vn:'Căn phòng này thật sạch sẽ.'},
   ],
   hanzi:[
     {c:'净',p:'jìng',type:'左右结构 · Trái-phải',st:8,ord:'冫 trái → 争 phải',rad:'冫 (băng – nước đá)',mean:'sạch sẽ',
      tip:'冫(nước trong, băng giá) + 争(tranh giành, ý chỉ loại bỏ tạp chất) → làm cho trong SẠCH, không còn bụi bẩn.',
      cf:'静 (jìng – "yên tĩnh", có bộ 青")',w:'干净 / 洗干净'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi giặt quần áo sạch sẽ rồi.',answer:'我把衣服洗干净了。',answerPy:'Wǒ bǎ yīfu xǐ gānjìng le.',
      note:'把字句3: 把+B(衣服)+动词(洗)+结果补语(干净) (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn dọn phòng sạch sẽ thì mẹ sẽ vui.',answer:'只要你把房间打扫干净，妈妈就会高兴。',answerPy:'Zhǐyào nǐ bǎ fángjiān dǎsǎo gānjìng, māma jiù huì gāoxìng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:3,zh:'然后',py:'ránhòu',pos:'Liên từ',vn:'sau đó',em:'➡️',lesson:1,
   explain:['Nối hai hành động, diễn tả hành động thứ hai xảy ra sau hành động thứ nhất.'],
   usage:'Liên từ, thường đi cùng 先: 先……，然后……',
   collo:['先……然后……','然后再','然后才'],
   ex_zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',ex_py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.',ex_vn:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.',
   exList:[
     {zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.',vn:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.'},
     {zh:'你先把电视节目看完吧，然后再给我回电话。',py:'Nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.',vn:'Bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi.'},
     {zh:'回家以后，我先做作业，然后吃饭。',py:'Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.',vn:'Về nhà xong, tôi làm bài tập trước, sau đó ăn cơm.'},
   ],
   hanzi:[
     {c:'然',p:'rán',type:'上下结构 · Trên-dưới',st:12,ord:'肰 trên → 灬 dưới',rad:'灬 (hỏa – lửa)',mean:'như vậy, sau đó',
      tip:'肰(thịt) + 灬(lửa, nướng) → thịt nướng cháy, mở rộng nghĩa "đúng NHƯ VẬY"; 然后 = tiếp theo NHƯ VẬY.',
      cf:'燃 (rán – "đốt cháy", có thêm bộ 火")',w:'然后 / 突然 / 虽然'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về nhà xong, tôi làm bài tập trước, sau đó ăn cơm.',answer:'回家以后，我先做作业，然后吃饭。',answerPy:'Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.',
      note:'先……然后…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Tuy làm cơm trái cây rất đơn giản nhưng nhiều người chưa từng ăn.',answer:'虽然做水果饭很简单，但是很多人没吃过。',answerPy:'Suīrán zuò shuǐguǒ fàn hěn jiǎndān, dànshì hěn duō rén méi chīguo.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:4,zh:'冰箱',py:'bīngxiāng',pos:'Danh từ',vn:'tủ lạnh',em:'❄️',lesson:1,
   explain:['Thiết bị dùng để bảo quản thực phẩm ở nhiệt độ thấp.'],
   usage:'Danh từ; đi cùng giới từ 从/在: 从冰箱里, 在冰箱里.',
   collo:['冰箱里','从冰箱里拿出来','打开冰箱'],
   ex_zh:'然后把冰箱里的西瓜拿出来。',ex_py:'Ránhòu bǎ bīngxiāng li de xīguā ná chulai.',ex_vn:'Sau đó lấy dưa hấu trong tủ lạnh ra.',
   exList:[
     {zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.',vn:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.'},
     {zh:'你怎么把冰箱里的东西都吃完了？',py:'Nǐ zěnme bǎ bīngxiāng li de dōngxi dōu chīwán le?',vn:'Sao bạn ăn hết đồ trong tủ lạnh vậy?'},
     {zh:'再从冰箱里把香蕉、苹果拿出来放好。',py:'Zài cóng bīngxiāng li bǎ xiāngjiāo, píngguǒ ná chulai fànghǎo.',vn:'Lại lấy chuối, táo từ tủ lạnh ra để gọn gàng.'},
   ],
   hanzi:[
     {c:'箱',p:'xiāng',type:'上下结构 · Trên-dưới',st:15,ord:'⺮ trên → 相 dưới',rad:'⺮ (trúc – tre)',mean:'hòm, tủ',
      tip:'⺮(tre, vật đan) + 相(cùng nhau) → vật đan ghép lại thành HÒM, TỦ; 冰(băng)+箱(tủ) = TỦ LẠNH.',
      cf:'相 (xiāng – "lẫn nhau", không có bộ ⺮")',w:'冰箱 / 箱子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sao bạn ăn hết đồ trong tủ lạnh vậy?',answer:'你怎么把冰箱里的东西都吃完了？',answerPy:'Nǐ zěnme bǎ bīngxiāng li de dōngxi dōu chīwán le?',
      note:'把字句3: 把+B(东西)+动词(吃)+结果补语(完) (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu tủ lạnh không có trái cây thì chúng ta đi mua thêm đi.',answer:'如果冰箱里没有水果，我们就去买点儿吧。',answerPy:'Rúguǒ bīngxiāng li méiyǒu shuǐguǒ, wǒmen jiù qù mǎi diǎnr ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'洗澡',py:'xǐzǎo',pos:'Động từ',vn:'tắm, tắm rửa',em:'🚿',lesson:2,
   explain:['Rửa sạch cơ thể bằng nước.'],
   usage:'Động từ ly hợp; có thể chèn thành phần khác vào giữa: 洗了个澡.',
   collo:['洗澡','洗了个澡','去洗澡'],
   ex_zh:'我刚洗了个澡，没听见。',ex_py:'Wǒ gāng xǐle ge zǎo, méi tīngjiàn.',ex_vn:'Tôi vừa tắm xong, không nghe thấy.',
   exList:[
     {zh:'对不起，我刚洗了个澡，没听见。',py:'Duìbuqǐ, wǒ gāng xǐle ge zǎo, méi tīngjiàn.',vn:'Xin lỗi, tôi vừa tắm xong, không nghe thấy.'},
     {zh:'他每天晚上都洗澡。',py:'Tā měi tiān wǎnshang dōu xǐzǎo.',vn:'Tối nào anh ấy cũng tắm.'},
     {zh:'你先去洗澡，然后我们再吃饭。',py:'Nǐ xiān qù xǐzǎo, ránhòu wǒmen zài chī fàn.',vn:'Bạn đi tắm trước đã, sau đó chúng ta ăn cơm.'},
   ],
   hanzi:[
     {c:'澡',p:'zǎo',type:'左右结构 · Trái-phải',st:16,ord:'氵 trái → 喿 phải',rad:'氵 (thuỷ – nước)',mean:'tắm',
      tip:'氵(nước) + 喿(tiếng chim kêu ồn ào, ý chỉ nhiều động tác) → dùng NƯỚC để TẮM RỬA.',
      cf:'燥 (zào – "khô ráo", có bộ 火")',w:'洗澡 / 澡堂'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn đi tắm trước đã, sau đó chúng ta ăn cơm.',answer:'你先去洗澡，然后我们再吃饭。',answerPy:'Nǐ xiān qù xǐzǎo, ránhòu wǒmen zài chī fàn.',
      note:'先……然后…… diễn tả trình tự hành động (ôn lại đã học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn tắm xong rồi thì chúng ta ra ngoài đi.',answer:'如果你洗完澡了，我们就出去吧。',answerPy:'Rúguǒ nǐ xǐwán zǎo le, wǒmen jiù chūqu ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'节目',py:'jiémù',pos:'Danh từ',vn:'chương trình (truyền hình)',em:'📺',lesson:2,
   explain:['Nội dung được phát sóng trên tivi, đài phát thanh.'],
   usage:'Danh từ; đi cùng động từ 看: 看节目.',
   collo:['电视节目','看节目','节目开始'],
   ex_zh:'你先把电视节目看完吧。',ex_py:'Nǐ xiān bǎ diànshì jiémù kànwán ba.',ex_vn:'Bạn xem xong chương trình tivi đã.',
   exList:[
     {zh:'没关系，你先把电视节目看完吧，然后再给我回电话。',py:'Méi guānxi, nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.',vn:'Không sao, bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi.'},
     {zh:'方叔叔爱看教做饭的节目。',py:'Fāng shūshu ài kàn jiāo zuò fàn de jiémù.',vn:'Chú Phương thích xem chương trình dạy nấu ăn.'},
     {zh:'这个节目里的小猫小狗特别有意思。',py:'Zhège jiémù li de xiǎomāo xiǎogǒu tèbié yǒuyìsi.',vn:'Mèo con chó con trong chương trình này thú vị lắm.'},
   ],
   hanzi:[
     {c:'目',p:'mù',type:'独体字 · Chữ đơn (tượng hình)',st:5,ord:'nét liền, hình con mắt',rad:'目 (mục – mắt)',mean:'mắt, mục',
      tip:'Chữ tượng hình mô phỏng hình CON MẮT → MẮT; 节(tiết mục)+目(mục lục) = CHƯƠNG TRÌNH được liệt kê ra để xem.',
      cf:'自 (zì – "tự mình", hình dáng gần giống")',w:'节目 / 目的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú Phương thích xem chương trình dạy nấu ăn.',answer:'方叔叔爱看教做饭的节目。',answerPy:'Fāng shūshu ài kàn jiāo zuò fàn de jiémù.',
      note:'叔叔 sẽ học ngay bên dưới trong bài này.'},
     {promptLang:'vi',prompt:'Nếu chương trình hay thì tôi sẽ xem hết.',answer:'如果节目很好看，我就会看完。',answerPy:'Rúguǒ jiémù hěn hǎokàn, wǒ jiù huì kànwán.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'月亮',py:'yuèliang',pos:'Danh từ',vn:'mặt trăng',em:'🌙',lesson:3,
   explain:['Vệ tinh tự nhiên của Trái Đất, xuất hiện vào ban đêm.'],
   usage:'Danh từ; thường làm chủ ngữ hoặc tân ngữ: 看月亮.',
   collo:['看月亮','今晚的月亮','月亮真漂亮'],
   ex_zh:'今晚的月亮真漂亮。',ex_py:'Jīn wǎn de yuèliang zhēn piàoliang.',ex_vn:'Trăng tối nay đẹp thật.',
   exList:[
     {zh:'今晚的月亮真漂亮，像白色的盘子一样。',py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.',vn:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.'},
     {zh:'我们坐在外边一边看月亮一边吃东西。',py:'Wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi.',vn:'Chúng ta ngồi ở ngoài vừa ngắm trăng vừa ăn đồ.'},
     {zh:'今天晚上没有月亮。',py:'Jīntiān wǎnshang méiyǒu yuèliang.',vn:'Tối nay không có trăng.'},
   ],
   hanzi:[
     {c:'亮',p:'liàng',type:'上下结构 · Trên-dưới',st:9,ord:'亠 trên → 儿 dưới',rad:'亠 (đầu)',mean:'sáng',
      tip:'亠(mái nhà) + 儿(người) → ánh SÁNG chiếu từ trên cao xuống; 月(trăng)+亮(sáng) = MẶT TRĂNG.',
      cf:'京 (jīng – "kinh đô", có 小 thay vì 儿")',w:'月亮 / 漂亮 / 天亮'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta ngồi ở ngoài vừa ngắm trăng vừa ăn đồ.',answer:'我们坐在外边一边看月亮一边吃东西。',answerPy:'Wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi.',
      note:'一边……一边…… diễn tả hai hành động cùng lúc (ôn lại đã học ở Bài 13).'},
     {promptLang:'vi',prompt:'Vì hôm nay không có trăng nên chúng ta không ra ngoài ngắm trăng nữa.',answer:'因为今天没有月亮，所以我们不出去看月亮了。',answerPy:'Yīnwèi jīntiān méiyǒu yuèliang, suǒyǐ wǒmen bù chūqu kàn yuèliang le.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:8,zh:'像',py:'xiàng',pos:'Động từ',vn:'giống',em:'🪞',lesson:3,
   explain:['Diễn tả sự giống nhau về hình dáng, tính cách giữa hai đối tượng.'],
   usage:'Động từ, thường đi cùng 一样: A + 像 + B + 一样.',
   collo:['像……一样','很像','长得像'],
   ex_zh:'像白色的盘子一样。',ex_py:'Xiàng báisè de pánzi yíyàng.',ex_vn:'Giống như cái đĩa trắng vậy.',
   exList:[
     {zh:'今晚的月亮真漂亮，像白色的盘子一样。',py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.',vn:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.'},
     {zh:'你的熊猫画得真好，像真的一样。',py:'Nǐ de xióngmāo huà de zhēn hǎo, xiàng zhēn de yíyàng.',vn:'Bạn vẽ con gấu trúc đẹp thật, giống như thật vậy.'},
     {zh:'小时候像我，现在越来越像她爸爸了。',py:'Xiǎoshíhou xiàng wǒ, xiànzài yuè lái yuè xiàng tā bàba le.',vn:'Lúc nhỏ giống tôi, giờ ngày càng giống bố nó rồi.'},
   ],
   hanzi:[
     {c:'像',p:'xiàng',type:'左右结构 · Trái-phải',st:13,ord:'亻 trái → 象 phải',rad:'亻 (nhân – người)',mean:'giống',
      tip:'亻(người) + 象(con voi, hình tượng) → người có HÌNH TƯỢNG tương tự = GIỐNG.',
      cf:'象 (xiàng – "con voi", không có bộ 亻")',w:'像 / 好像 / 图像'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn vẽ con gấu trúc đẹp thật, giống như thật vậy.',answer:'你的熊猫画得真好，像真的一样。',answerPy:'Nǐ de xióngmāo huà de zhēn hǎo, xiàng zhēn de yíyàng.',
      note:'像……一样 diễn tả sự giống nhau (ôn lại 画 đã học ở Bài 12).'},
     {promptLang:'vi',prompt:'Tuy con giống mẹ nhưng tính cách lại giống bố hơn.',answer:'虽然孩子像妈妈，但是性格更像爸爸。',answerPy:'Suīrán háizi xiàng māma, dànshì xìnggé gèng xiàng bàba.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:9,zh:'盘子',py:'pánzi',pos:'Danh từ',vn:'đĩa, mâm',em:'🍽️',lesson:3,
   explain:['Vật dụng hình tròn, phẳng dùng để đựng thức ăn.'],
   usage:'Danh từ; đi cùng động từ 洗: 洗盘子.',
   collo:['洗盘子','一个盘子','白色的盘子'],
   ex_zh:'像白色的盘子一样。',ex_py:'Xiàng báisè de pánzi yíyàng.',ex_vn:'Giống như cái đĩa trắng vậy.',
   exList:[
     {zh:'今晚的月亮真漂亮，像白色的盘子一样。',py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.',vn:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.'},
     {zh:'小常，这些盘子都要洗干净。',py:'Xiǎo Cháng, zhèxiē pánzi dōu yào xǐ gānjìng.',vn:'Tiểu Thường, những cái đĩa này đều phải rửa sạch.'},
     {zh:'我在洗盘子呢，你把电视声音开大一点儿。',py:'Wǒ zài xǐ pánzi ne, nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.',vn:'Tôi đang rửa đĩa đây, bạn vặn to tiếng tivi lên một chút.'},
   ],
   hanzi:[
     {c:'盘',p:'pán',type:'上下结构 · Trên-dưới',st:11,ord:'舟 trên (giản thể) → 皿 dưới',rad:'皿 (mãnh – đồ đựng)',mean:'đĩa, mâm',
      tip:'皿(đồ đựng, hình cái bát) + phần trên (giản thể chỉ hình tròn xoay) → vật ĐỰNG hình tròn = ĐĨA, MÂM.',
      cf:'血 (xuè – "máu", cũng có bộ 皿")',w:'盘子 / 一盘菜'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiểu Thường, những cái đĩa này đều phải rửa sạch.',answer:'小常，这些盘子都要洗干净。',answerPy:'Xiǎo Cháng, zhèxiē pánzi dōu yào xǐ gānjìng.',
      note:'洗干净 = bổ ngữ kết quả (ôn lại 干净 đã học trong bài này).'},
     {promptLang:'vi',prompt:'Tôi rửa cốc xong trước, sau đó mới rửa đĩa.',answer:'我先把杯子洗完，然后再洗盘子。',answerPy:'Wǒ xiān bǎ bēizi xǐwán, ránhòu zài xǐ pánzi.',
      note:'先……然后再…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).'},
   ]},

  {n:10,zh:'刮风',py:'guā fēng',pos:'Động từ',vn:'nổi gió',em:'💨',lesson:3,
   explain:['Diễn tả hiện tượng gió thổi mạnh.'],
   usage:'Động từ ly hợp: 刮 + 风; có thể thêm mức độ: 刮大风.',
   collo:['刮风','刮大风','不刮风'],
   ex_zh:'外边也不刮风。',ex_py:'Wàibian yě bù guā fēng.',ex_vn:'Bên ngoài cũng không có gió.',
   exList:[
     {zh:'是啊，外边也不刮风，我们坐在外边吃东西吧。',py:'Shì a, wàibian yě bù guā fēng, wǒmen zuò zài wàibian chī dōngxi ba.',vn:'Đúng vậy, bên ngoài cũng không có gió, chúng ta ngồi ở ngoài ăn đồ đi.'},
     {zh:'怎么突然刮大风了，把伞都刮跑了！',py:'Zěnmeūrán guā dà fēng le, bǎ sǎn dōu guā pǎo le!',vn:'Sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!'},
     {zh:'刮这么大的风，伞没有用。',py:'Guā zhème dà de fēng, sǎn méiyǒu yòng.',vn:'Gió to thế này, ô cũng vô dụng thôi.'},
   ],
   hanzi:[
     {c:'刮',p:'guā',type:'左右结构 · Trái-phải',st:8,ord:'舌 trái → 刂 phải',rad:'刂 (đao – dao)',mean:'cạo, thổi (gió)',
      tip:'舌(lưỡi) + 刂(dao) → dùng dao CẠO nhẹ như lưỡi liếm; mở rộng nghĩa gió THỔI lướt qua bề mặt.',
      cf:'活 (huó – "sống", có bộ 氵")',w:'刮风 / 刮胡子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!',answer:'怎么突然刮大风了，把伞都刮跑了！',answerPy:'Zěnme rán guā dà fēng le, bǎ sǎn dōu guā pǎo le!',
      note:'把字句3: 把+B(伞)+动词(刮)+结果补语(跑了) (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu ngoài trời không có gió thì chúng ta ra ngoài ngồi đi.',answer:'如果外边不刮风，我们就出去坐坐吧。',answerPy:'Rúguǒ wàibian bù guā fēng, wǒmen jiù chūqu zuòzuo ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'叔叔',py:'shūshu',pos:'Danh từ',vn:'chú',em:'👨',lesson:3,
   explain:['Cách gọi em trai của cha, hoặc người đàn ông trẻ hơn cha mẹ.'],
   usage:'Danh từ xưng hô; thường đi cùng 阿姨 thành cặp.',
   collo:['叔叔阿姨','方叔叔','听叔叔讲故事'],
   ex_zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',ex_py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',ex_vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.',
   exList:[
     {zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.'},
     {zh:'方叔叔爱看教做饭的节目。',py:'Fāng shūshu ài kàn jiāo zuò fàn de jiémù.',vn:'Chú Phương thích xem chương trình dạy nấu ăn.'},
     {zh:'叔叔和阿姨第一次来我们家。',py:'Shūshu hé āyí dì-yī cì lái wǒmen jiā.',vn:'Chú và cô lần đầu đến nhà chúng tôi.'},
   ],
   hanzi:[
     {c:'叔',p:'shū',type:'左右结构 · Trái-phải',st:8,ord:'上 trái → 又 phải',rad:'又 (hựu – lại)',mean:'chú',
      tip:'Hình ảnh người nhặt lượm (thu hoạch) đơn giản, mở rộng nghĩa người em trai của cha = CHÚ.',
      cf:'椒 (jiāo – "hạt tiêu", có bộ 木")',w:'叔叔 / 大叔'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú và cô lần đầu đến nhà chúng tôi.',answer:'叔叔和阿姨第一次来我们家。',answerPy:'Shūshu hé āyí dì-yī cì lái wǒmen jiā.',
      note:'第一次 diễn tả lần đầu tiên.'},
     {promptLang:'vi',prompt:'Chỉ cần chú kể chuyện thì các em nhỏ đều thích nghe.',answer:'只要叔叔讲故事，孩子们就都愿意听。',answerPy:'Zhǐyào shūshu jiǎng gùshi, háizimen jiù dōu yuànyì tīng.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 愿意 đã học ở Bài 13).'},
   ]},

  {n:12,zh:'阿姨',py:'āyí',pos:'Danh từ',vn:'dì, cô',em:'👩',lesson:3,
   explain:['Cách gọi em/chị gái của mẹ, hoặc người phụ nữ trẻ hơn cha mẹ.'],
   usage:'Danh từ xưng hô; thường đi cùng 叔叔 thành cặp.',
   collo:['叔叔阿姨','常阿姨','白阿姨'],
   ex_zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',ex_py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',ex_vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.',
   exList:[
     {zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.'},
     {zh:'常阿姨住在我家楼下。',py:'Cháng āyí zhù zài wǒ jiā lóuxià.',vn:'Cô Thường sống ở tầng dưới nhà tôi.'},
     {zh:'方叔叔和白阿姨特别热情。',py:'Fāng shūshu hé Bái āyí tèbié rèqíng.',vn:'Chú Phương và cô Bạch rất nhiệt tình.'},
   ],
   hanzi:[
     {c:'姨',p:'yí',type:'左右结构 · Trái-phải',st:9,ord:'女 trái → 夷 phải',rad:'女 (nữ)',mean:'dì, cô',
      tip:'女(nữ) + 夷(bằng phẳng, ngang hàng) → người phụ nữ NGANG HÀNG với mẹ = DÌ.',
      cf:'姑 (gū – "cô", có 古 thay vì 夷")',w:'阿姨 / 姨妈'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô Thường sống ở tầng dưới nhà tôi.',answer:'常阿姨住在我家楼下。',answerPy:'Cháng āyí zhù zài wǒ jiā lóuxià.',
      note:'住在 diễn tả nơi ở.'},
     {promptLang:'vi',prompt:'Vì cô ấy rất nhiệt tình nên mọi người đều thích cô ấy.',answer:'因为阿姨很热情，所以大家都喜欢她。',answerPy:'Yīnwèi āyí hěn rèqíng, suǒyǐ dàjiā dōu xǐhuan tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:13,zh:'故事',py:'gùshi',pos:'Danh từ',vn:'truyện, câu chuyện',em:'📖',lesson:3,
   explain:['Một chuỗi sự việc được kể lại, có tính giải trí hoặc giáo dục.'],
   usage:'Danh từ; đi cùng động từ 讲/听: 讲故事, 听故事.',
   collo:['讲故事','听故事','年轻时候的故事'],
   ex_zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',ex_py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',ex_vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.',
   exList:[
     {zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。',py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',vn:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.'},
     {zh:'爷爷奶奶，今天我来给你们讲故事。',py:'Yéye nǎinai, jīntiān wǒ lái gěi nǐmen jiǎng gùshi.',vn:'Ông bà ơi, hôm nay cháu kể chuyện cho ông bà nghe nhé.'},
     {zh:'爷爷奶奶最喜欢听你讲故事了。',py:'Yéye nǎinai zuì xǐhuan tīng nǐ jiǎng gùshi le.',vn:'Ông bà thích nhất nghe con kể chuyện đấy.'},
   ],
   hanzi:[
     {c:'故',p:'gù',type:'左右结构 · Trái-phải',st:9,ord:'古 trái → 攵 phải',rad:'攵 (phốc – gõ nhẹ)',mean:'chuyện cũ, lý do',
      tip:'古(xưa cũ) + 攵(tác động, kể lại) → kể lại chuyện XƯA CŨ = CÂU CHUYỆN.',
      cf:'古 (gǔ – "xưa", không có bộ 攵")',w:'故事 / 故乡'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông bà ơi, hôm nay cháu kể chuyện cho ông bà nghe nhé.',answer:'爷爷奶奶，今天我来给你们讲故事。',answerPy:'Yéye nǎinai, jīntiān wǒ lái gěi nǐmen jiǎng gùshi.',
      note:'讲故事 (ôn lại 爷爷/奶奶 đã học ở Bài 13).'},
     {promptLang:'vi',prompt:'Nếu bạn kể chuyện thì tôi rất muốn nghe.',answer:'如果你讲故事，我就很想听。',answerPy:'Rúguǒ nǐ jiǎng gùshi, wǒ jiù hěn xiǎng tīng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'声音',py:'shēngyīn',pos:'Danh từ',vn:'âm thanh, tiếng',em:'🔊',lesson:3,
   explain:['Âm phát ra mà tai người có thể nghe được.'],
   usage:'Danh từ; đi cùng động từ 听/开: 听声音, 把声音开大.',
   collo:['声音很大','把声音开大','听外边的声音'],
   ex_zh:'你听外边的声音，一定是大山。',ex_py:'Nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.',ex_vn:'Bạn nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi.',
   exList:[
     {zh:'不用打了，你听外边的声音，一定是大山。',py:'Búyòng dǎ le, nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.',vn:'Không cần gọi nữa đâu, bạn nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi.'},
     {zh:'我很喜欢她的声音。',py:'Wǒ hěn xǐhuan tā de shēngyīn.',vn:'Tôi rất thích giọng nói của cô ấy.'},
     {zh:'你把电视声音开大一点儿。',py:'Nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.',vn:'Bạn vặn to tiếng tivi lên một chút.'},
   ],
   hanzi:[
     {c:'音',p:'yīn',type:'上下结构 · Trên-dưới',st:9,ord:'立 trên → 日 dưới',rad:'音 (âm)',mean:'âm thanh',
      tip:'立(đứng, phát ra) + 曰(nói) → lời nói phát ra thành ÂM THANH; 声(tiếng)+音(âm) = ÂM THANH.',
      cf:'章 (zhāng – "chương", có 早 thay vì 曰")',w:'声音 / 音乐'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn vặn to tiếng tivi lên một chút.',answer:'你把电视声音开大一点儿。',answerPy:'Nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.',
      note:'把字句3: 把+B(声音)+动词(开)+结果补语(大) (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Tôi rất thích giọng nói của cô ấy, giống như hát vậy.',answer:'我很喜欢她的声音，像唱歌一样。',answerPy:'Wǒ hěn xǐhuan tā de shēngyīn, xiàng chànggē yíyàng.',
      note:'像……一样 diễn tả sự giống nhau (ôn lại đã học trong bài này).'},
   ]},

  {n:15,zh:'菜单',py:'càidān',pos:'Danh từ',vn:'thực đơn',em:'📋',lesson:4,
   explain:['Danh sách các món ăn có trong nhà hàng.'],
   usage:'Danh từ; đi cùng động từ 看: 看菜单.',
   collo:['看菜单','菜单上','点菜单'],
   ex_zh:'你在饭馆儿的菜单上见过水果饭吗？',ex_py:'Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma?',ex_vn:'Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa?',
   exList:[
     {zh:'你在饭馆儿的菜单上见过水果饭吗？',py:'Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma?',vn:'Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa?'},
     {zh:'我们先看看菜单，然后再点菜，好吗？',py:'Wǒmen xiān kànkan càidān, ránhòu zài diǎn cài, hǎo ma?',vn:'Chúng ta xem thực đơn trước đã, sau đó gọi món, được không?'},
     {zh:'这是今天的菜单。',py:'Zhè shì jīntiān de càidān.',vn:'Đây là thực đơn hôm nay.'},
   ],
   hanzi:[
     {c:'单',p:'dān',type:'独体字 · Chữ đơn (giản thể)',st:8,ord:'nét liền',rad:'丷 (bát)',mean:'đơn, danh sách',
      tip:'Chữ giản thể mô phỏng hình một tờ giấy ĐƠN LẺ ghi danh sách; 菜(món ăn)+单(danh sách) = THỰC ĐƠN.',
      cf:'佳 (jiā – "tốt đẹp", có bộ 亻")',w:'菜单 / 简单 / 单词'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta xem thực đơn trước đã, sau đó gọi món, được không?',answer:'我们先看看菜单，然后再点菜，好吗？',answerPy:'Wǒmen xiān kànkan càidān, ránhòu zài diǎn cài, hǎo ma?',
      note:'先……然后再…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu thực đơn có cơm trái cây thì tôi muốn thử một lần.',answer:'如果菜单上有水果饭，我就想试一次。',answerPy:'Rúguǒ càidān shang yǒu shuǐguǒ fàn, wǒ jiù xiǎng shì yí cì.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:16,zh:'简单',py:'jiǎndān',pos:'Tính từ',vn:'đơn giản',em:'✅',lesson:4,
   explain:['Không phức tạp, dễ hiểu, dễ làm.'],
   usage:'Tính từ; đứng làm vị ngữ hoặc định ngữ: 很简单.',
   collo:['很简单','简单的问题','做起来简单'],
   ex_zh:'其实做水果饭很简单。',ex_py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān.',ex_vn:'Thực ra làm cơm trái cây rất đơn giản.',
   exList:[
     {zh:'其实做水果饭很简单，先把米饭做好，然后再把新鲜的水果放进去。',py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān, xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ xīnxiān de shuǐguǒ fàng jinqu.',vn:'Thực ra làm cơm trái cây rất đơn giản, trước tiên nấu cơm xong, sau đó cho trái cây tươi vào.'},
     {zh:'这个问题很简单。',py:'Zhège wèntí hěn jiǎndān.',vn:'Vấn đề này rất đơn giản.'},
     {zh:'这不是时间的问题，主要是要有兴趣。',py:'Zhè bú shì shíjiān de wèntí, zhǔyào shì yào yǒu xìngqù.',vn:'Đây không phải vấn đề thời gian, chủ yếu là phải có hứng thú.'},
   ],
   hanzi:[
     {c:'简',p:'jiǎn',type:'上下结构 · Trên-dưới',st:13,ord:'⺮ trên → 间 dưới',rad:'⺮ (trúc – tre)',mean:'đơn giản',
      tip:'⺮(thẻ tre dùng viết chữ thời xưa) + 间(khoảng giữa, ít) → viết trên ÍT thẻ tre = ĐƠN GIẢN.',
      cf:'间 (jiān – "giữa, khoảng", không có bộ ⺮")',w:'简单 / 简体字'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vấn đề này rất đơn giản.',answer:'这个问题很简单。',answerPy:'Zhège wèntí hěn jiǎndān.',
      note:'很 + Adj làm vị ngữ.'},
     {promptLang:'vi',prompt:'Tuy làm cơm trái cây rất đơn giản nhưng nhiều người chưa từng ăn.',answer:'虽然做水果饭很简单，但是很多人没吃过。',answerPy:'Suīrán zuò shuǐguǒ fàn hěn jiǎndān, dànshì hěn duō rén méi chīguo.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:17,zh:'香蕉',py:'xiāngjiāo',pos:'Danh từ',vn:'chuối tiêu',em:'🍌',lesson:4,
   explain:['Một loại trái cây có vỏ vàng, hình cong dài.'],
   usage:'Danh từ; đi cùng động từ 买/吃: 买香蕉, 香蕉饭.',
   collo:['买香蕉','香蕉饭','新鲜的香蕉'],
   ex_zh:'你可以做苹果饭、香蕉饭。',ex_py:'Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn.',ex_vn:'Bạn có thể làm cơm táo, cơm chuối.',
   exList:[
     {zh:'你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。',py:'Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn, yàoshi nǐ yuànyì, hái kěyǐ zuò xīguā fàn.',vn:'Bạn có thể làm cơm táo, cơm chuối, nếu bạn muốn, còn có thể làm cơm dưa hấu.'},
     {zh:'我们买点儿香蕉吧，家里没有水果了。',py:'Wǒmen mǎi diǎnr xiāngjiāo ba, jiā li méiyǒu shuǐguǒ le.',vn:'Chúng ta mua ít chuối đi, nhà không còn trái cây nữa.'},
     {zh:'这些香蕉像是放了很久了。',py:'Zhèxiē xiāngjiāo xiàng shì fàngle hěn jiǔ le.',vn:'Mấy quả chuối này có vẻ để lâu rồi.'},
   ],
   hanzi:[
     {c:'蕉',p:'jiāo',type:'上下结构 · Trên-dưới',st:15,ord:'艹 trên → 焦 dưới',rad:'艹 (thảo – cỏ cây)',mean:'chuối',
      tip:'艹(thực vật) + 焦(cháy, ý chỉ màu vàng) → cây có quả màu VÀNG = CHUỐI.',
      cf:'焦 (jiāo – "cháy khét", không có bộ 艹")',w:'香蕉 / 蕉叶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta mua ít chuối đi, nhà không còn trái cây nữa.',answer:'我们买点儿香蕉吧，家里没有水果了。',answerPy:'Wǒmen mǎi diǎnr xiāngjiāo ba, jiā li méiyǒu shuǐguǒ le.',
      note:'点儿 diễn tả số lượng ít.'},
     {promptLang:'vi',prompt:'Nếu bạn thích ăn chuối thì tôi mua một ít cho bạn.',answer:'如果你喜欢吃香蕉，我就给你买一点儿。',answerPy:'Rúguǒ nǐ xǐhuan chī xiāngjiāo, wǒ jiù gěi nǐ mǎi yìdiǎnr.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'🧹',label:'打扫',py:'dǎsǎo',letter:'A'},
  {img:'❄️',label:'冰箱',py:'bīngxiāng',letter:'B'},
  {img:'🍌',label:'香蕉',py:'xiāngjiāo',letter:'C'},
  {img:'🌙',label:'月亮',py:'yuèliang',letter:'D'},
  {img:'🍽️',label:'盘子',py:'pánzi',letter:'E'},
  {img:'📋',label:'菜单',py:'càidān',letter:'F'},
];

var dialogData = [
  {scene:'在家 · Ở nhà (khách sắp đến)',
   preQuiz:[
     {q:'周太太让周明先做什么？',opts:['先把茶和杯子放好','先看电视','先睡觉'],ans:0},
     {q:'谁会打扫房间？',opts:['孩子们','周太太自己','客人'],ans:0},
     {q:'周明最后决定先做什么？',opts:['先把空调打开','先拿西瓜','先看电视'],ans:0},
   ],
   lines:[
     {sp:1,zh:'客人就要来了，你怎么还不打扫房间啊？',py:'Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?',vn:'Khách sắp đến rồi, sao anh vẫn chưa dọn phòng vậy?'},
     {sp:0,zh:'别着急，我让孩子们打扫呢，客人来的时候，他们会把房间打扫干净。',py:'Bié zháojí, wǒ ràng háizimen dǎsǎo ne, kèrén lái de shíhou, tāmen huì bǎ fángjiān dǎsǎo gānjìng.',vn:'Đừng vội, anh bảo bọn trẻ dọn rồi, lúc khách đến, chúng sẽ dọn phòng sạch sẽ.'},
     {sp:1,zh:'那你也不能看电视啊。',py:'Nà nǐ yě bù néng kàn diànshì a.',vn:'Vậy anh cũng không được xem tivi đâu nhé.'},
     {sp:0,zh:'你让我做什么？',py:'Nǐ ràng wǒ zuò shénme?',vn:'Vậy em bảo anh làm gì?'},
     {sp:1,zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.',vn:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.'},
     {sp:0,zh:'太热了，我还是先把空调打开吧。',py:'Tài rè le, wǒ háishi xiān bǎ kōngtiáo dǎ kāi ba.',vn:'Nóng quá, anh bật điều hòa trước đã.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'小刚为什么没接电话？',opts:['刚洗了个澡，没听见','手机没电了','在开会'],ans:0},
     {q:'同事想问小刚什么？',opts:['公司里的一些事情','天气怎么样','周末的安排'],ans:0},
     {q:'同事让小刚先做什么？',opts:['先把节目看完','马上回电话','先关电视'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你在忙什么呢？刚才打你的手机你也不接。',py:'Nǐ zài máng shénme ne? Gāngcái dǎ nǐ de shǒujī nǐ yě bù jiē.',vn:'Bạn đang bận gì thế? Vừa nãy gọi điện thoại bạn cũng không nghe máy.'},
     {sp:0,zh:'对不起，我刚洗了个澡，没听见。有什么事吗？',py:'Duìbuqǐ, wǒ gāng xǐle ge zǎo, méi tīngjiàn. Yǒu shénme shì ma?',vn:'Xin lỗi, tôi vừa tắm xong, không nghe thấy. Có việc gì vậy?'},
     {sp:1,zh:'我想问问你公司里的一些事情。',py:'Wǒ xiǎng wènwen nǐ gōngsī li de yìxiē shìqing.',vn:'Tôi muốn hỏi bạn một số việc trong công ty.'},
     {sp:0,zh:'你先等一下，我去把电视关了。',py:'Nǐ xiān děng yíxià, wǒ qù bǎ diànshì guān le.',vn:'Bạn đợi một chút, tôi tắt tivi đã.'},
     {sp:1,zh:'没关系，你先把电视节目看完吧，然后再给我回电话。',py:'Méi guānxi, nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.',vn:'Không sao, bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi.'},
   ]},
  {scene:'在小明家 · Tại nhà bạn Minh',
   preQuiz:[
     {q:'今晚的月亮怎么样？',opts:['真漂亮，像白色的盘子一样','不圆','看不见'],ans:0},
     {q:'他们打算怎么过今晚？',opts:['坐在外边看月亮吃东西','去看电影','去饭馆吃饭'],ans:0},
     {q:'外边的声音是谁？',opts:['大山','邻居','风声'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今晚的月亮真漂亮，像白色的盘子一样。',py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.',vn:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.'},
     {sp:0,zh:'是啊，外边也不刮风，我们坐在外边一边看月亮一边吃东西，怎么样？',py:'Shì a, wàibian yě bù guā fēng, wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi, zěnme yàng?',vn:'Đúng vậy, bên ngoài cũng không có gió, chúng ta ngồi ngoài đó vừa ngắm trăng vừa ăn đồ, thế nào?'},
     {sp:1,zh:'好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听叔叔阿姨讲讲他们年轻时候的故事。',py:'Hǎo a, wǒ xiān bǎ zhuōyǐ bān chuqu, ránhòu nǐ bǎ shuǐguǒ ná guolai, wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',vn:'Được đấy, mình mang bàn ghế ra ngoài trước, sau đó cậu mang trái cây đến, chúng ta nghe chú và cô kể chuyện thời trẻ của họ.'},
     {sp:0,zh:'太好了！记得给大山打个电话，让他马上过来。',py:'Tài hǎo le! Jìde gěi Dàshān dǎ ge diànhuà, ràng tā mǎshàng guòlai.',vn:'Tuyệt quá! Nhớ gọi điện cho Đại Sơn, bảo cậu ấy đến ngay nhé.'},
     {sp:1,zh:'不用打了，你听外边的声音，一定是大山。',py:'Búyòng dǎ le, nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.',vn:'Không cần gọi nữa đâu, cậu nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi.'},
   ]},
  {scene:'độc bạch · Tự thuật (giới thiệu cách làm cơm trái cây)',
   preQuiz:[
     {q:'做水果饭难吗？',opts:['很简单','很难','要很长时间'],ans:0},
     {q:'做水果饭的第一步是什么？',opts:['先把米饭做好','先切水果','先买水果'],ans:0},
     {q:'文中提到可以做哪些水果饭？',opts:['苹果饭、香蕉饭、西瓜饭','橙子饭','葡萄饭'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你吃过水果饭吗？你在饭馆儿的菜单上见过水果饭吗？你想学着做水果饭吗？',py:'Nǐ chī guo shuǐguǒ fàn ma? Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma? Nǐ xiǎng xuézhe zuò shuǐguǒ fàn ma?',vn:'Bạn đã từng ăn cơm trái cây chưa? Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa? Bạn có muốn học cách làm cơm trái cây không?'},
     {sp:0,zh:'其实做水果饭很简单，先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。',py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān, xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ yí kuàikuài xīnxiān de shuǐguǒ fàng jinqu, shuǐguǒ fàn jiù zuòhǎo le.',vn:'Thực ra làm cơm trái cây rất đơn giản, trước tiên nấu cơm xong, sau đó cho từng miếng trái cây tươi vào, cơm trái cây là xong.'},
     {sp:0,zh:'你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。',py:'Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn, yàoshi nǐ yuànyì, hái kěyǐ zuò xīguā fàn.',vn:'Bạn có thể làm cơm táo, cơm chuối, nếu bạn muốn, còn có thể làm cơm dưa hấu.'},
     {sp:0,zh:'多吃新鲜水果对身体好。',py:'Duō chī xīnxiān shuǐguǒ duì shēntǐ hǎo.',vn:'Ăn nhiều trái cây tươi tốt cho sức khỏe.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'打扫',right:'房间'},
  {left:'洗',right:'澡'},
  {left:'看',right:'电视节目'},
  {left:'像',right:'白色的盘子'},
  {left:'刮',right:'风'},
  {left:'讲',right:'故事'},
  {left:'看',right:'菜单'},
  {left:'因为客人要来了，',right:'所以我们打扫房间。'},
  {left:'虽然做水果饭很简单，',right:'但是很多人没吃过。'},
  {left:'如果你愿意，',right:'我们就一起做水果饭。'},
  {left:'先把米饭做好，',right:'然后再放水果进去。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你怎么还不',blank:'打扫',post:'房间啊？',hint:'(quét dọn)',ans:'打扫'},
  {pre:'他们会把房间打扫',blank:'干净',post:'。',hint:'(sạch sẽ)',ans:'干净'},
  {pre:'先把茶和杯子放好，',blank:'然后',post:'把冰箱里的西瓜拿出来。',hint:'(sau đó)',ans:'然后'},
  {pre:'我还是先把',blank:'冰箱',post:'里的西瓜拿出来吧。',hint:'(tủ lạnh)',ans:'冰箱'},
  {pre:'他每天晚上都',blank:'洗澡',post:'。',hint:'(tắm, tắm rửa)',ans:'洗澡'},
  {pre:'你先把电视',blank:'节目',post:'看完吧。',hint:'(chương trình truyền hình)',ans:'节目'},
  {pre:'今晚的',blank:'月亮',post:'真漂亮。',hint:'(mặt trăng)',ans:'月亮'},
  {pre:'',blank:'像',post:'白色的盘子一样。',hint:'(giống)',ans:'像'},
  {pre:'这些',blank:'盘子',post:'都要洗干净。',hint:'(đĩa, mâm)',ans:'盘子'},
  {pre:'外边也不',blank:'刮风',post:'。',hint:'(nổi gió)',ans:'刮风'},
  {pre:'我们听',blank:'叔叔',post:'阿姨讲故事。',hint:'(chú)',ans:'叔叔'},
  {pre:'我们听叔叔',blank:'阿姨',post:'讲故事。',hint:'(dì, cô)',ans:'阿姨'},
  {pre:'他们年轻时候的',blank:'故事',post:'。',hint:'(truyện, câu chuyện)',ans:'故事'},
  {pre:'你听外边的',blank:'声音',post:'，一定是大山。',hint:'(âm thanh, tiếng)',ans:'声音'},
  {pre:'你在饭馆儿的',blank:'菜单',post:'上见过水果饭吗？',hint:'(thực đơn)',ans:'菜单'},
  {pre:'做水果饭很',blank:'简单',post:'。',hint:'(đơn giản)',ans:'简单'},
  {pre:'你可以做苹果饭、',blank:'香蕉',post:'饭。',hint:'(chuối tiêu)',ans:'香蕉'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','怎么','还','不','打扫','房间','啊','？'],ans:'你怎么还不打扫房间啊？',audio:'你怎么还不打扫房间啊？'},
  {words:['先','把','茶','和','杯子','放好','，','然后','把','冰箱','里','的','西瓜','拿出来','。'],ans:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',audio:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。'},
  {words:['你','先','把','电视','节目','看完','吧','，','然后','再','给','我','回','电话','。'],ans:'你先把电视节目看完吧，然后再给我回电话。',audio:'你先把电视节目看完吧，然后再给我回电话。'},
  {words:['今晚','的','月亮','真','漂亮','，','像','白色','的','盘子','一样','。'],ans:'今晚的月亮真漂亮，像白色的盘子一样。',audio:'今晚的月亮真漂亮，像白色的盘子一样。'},
  {words:['因为','客人','要','来','了','，','所以','我们','打扫','房间','。'],ans:'因为客人要来了，所以我们打扫房间。',audio:'因为客人要来了，所以我们打扫房间。'},
  {words:['虽然','做','水果饭','很','简单','，','但是','很多','人','没','吃过','。'],ans:'虽然做水果饭很简单，但是很多人没吃过。',audio:'虽然做水果饭很简单，但是很多人没吃过。'},
  {words:['如果','你','愿意','，','我们','就','一起','做','水果饭','。'],ans:'如果你愿意，我们就一起做水果饭。',audio:'如果你愿意，我们就一起做水果饭。'},
  {words:['先','把','米饭','做好','，','然后','再','把','一块块','新鲜','的','水果','放进去','。'],ans:'先把米饭做好，然后再把一块块新鲜的水果放进去。',audio:'先把米饭做好，然后再把一块块新鲜的水果放进去。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我把衣服洗。',
   opts:['我把衣服洗干净了。','我把衣服洗。','我衣服把洗干净了。','我把洗衣服干净了。'],ans:0,
   exp:'Câu 把字句3 cần có bổ ngữ kết quả/xu hướng SAU động từ, không thể chỉ có động từ đơn thuần.'},
  {wrong:'请同学们拿把铅笔出来。',
   opts:['请同学们把铅笔拿出来。','请同学们拿把铅笔出来。','请同学们铅笔把拿出来。','请把同学们铅笔拿出来。'],ans:0,
   exp:'把 phải đứng NGAY TRƯỚC B(铅笔), không đặt sau động từ.'},
  {wrong:'你水果把拿过来。',
   opts:['你把水果拿过来。','你水果把拿过来。','你把拿水果过来。','水果你把拿过来。'],ans:0,
   exp:'Thứ tự đúng là A+把+B+động từ+bổ ngữ, không đảo 把 ra sau B(水果).'},
  {wrong:'回家以后，我又做作业，然后吃饭。',
   opts:['回家以后，我先做作业，然后吃饭。','回家以后，我又做作业，然后吃饭。','回家以后，我然后做作业，先吃饭。','回家以后，我做作业又，然后吃饭。'],ans:0,
   exp:'先……然后…… diễn tả trình tự dự định; 又 chỉ dùng cho hành động ĐÃ xảy ra, không phù hợp ở đây.'},
  {wrong:'我先坐了一个小时公共汽车，再坐了一会儿地铁才到小刚家。',
   opts:['我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。','我先坐了一个小时公共汽车，再坐了一会儿地铁才到小刚家。','我又坐了一个小时公共汽车，先坐了一会儿地铁才到小刚家。','我先坐了一个小时公共汽车，然后坐再一会儿地铁才到小刚家。'],ans:0,
   exp:'又 diễn tả hành động ĐÃ xảy ra (quá khứ); 再 chỉ dùng cho hành động CHƯA xảy ra.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'周太太让周明先做什么，再做什么？',
     q_vn:'Bà Chu bảo Chu Minh trước tiên làm gì, sau đó làm gì?',
     hint:'先把茶和杯子放好，然后把西瓜拿出来',
     sample:'周太太让周明先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',
     sample_vn:'Bà Chu bảo Chu Minh trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.',
     note:'先……然后…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'小刚为什么没接同事的电话？',
     q_vn:'Vì sao Tiểu Cương không nghe máy đồng nghiệp gọi?',
     hint:'刚洗了个澡，没听见',
     sample:'小刚刚洗了个澡，没听见手机响，所以没接同事的电话。',
     sample_vn:'Tiểu Cương vừa tắm xong, không nghe thấy điện thoại reo, nên không nghe máy đồng nghiệp gọi.',
     note:'洗澡 diễn tả hành động tắm rửa (ôn lại vừa học trong bài này).'},
    {q_zh:'同学和小明打算怎么过今晚？',
     q_vn:'Bạn học và Tiểu Minh định trải qua tối nay thế nào?',
     hint:'坐在外边一边看月亮一边吃东西，听叔叔阿姨讲故事',
     sample:'他们打算坐在外边，一边看月亮一边吃东西，听叔叔阿姨讲讲他们年轻时候的故事。',
     sample_vn:'Họ định ngồi ở ngoài, vừa ngắm trăng vừa ăn đồ, nghe chú và cô kể chuyện thời trẻ của họ.',
     note:'一边……一边…… diễn tả hai hành động cùng lúc (ôn lại đã học ở Bài 13).'},
    {q_zh:'做水果饭的步骤是什么？',
     q_vn:'Các bước làm cơm trái cây là gì?',
     hint:'先把米饭做好，然后再把新鲜的水果放进去',
     sample:'先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。',
     sample_vn:'Trước tiên nấu cơm xong, sau đó cho từng miếng trái cây tươi vào, cơm trái cây là xong.',
     note:'先……然后再…… diễn tả trình tự các bước (điểm ngữ pháp trọng tâm bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Khách sắp đến rồi, sao anh vẫn chưa dọn phòng vậy?', zh:'客人就要来了，你怎么还不打扫房间啊？', py:'Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?'},
  {vi:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.', zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。', py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.'},
  {vi:'Bạn xem xong chương trình tivi đã, rồi gọi lại cho tôi.', zh:'你先把电视节目看完吧，然后再给我回电话。', py:'Nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.'},
  {vi:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.', zh:'今晚的月亮真漂亮，像白色的盘子一样。', py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.'},
  {vi:'Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.', zh:'我们听叔叔阿姨讲讲他们年轻时候的故事。', py:'Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.'},
  {vi:'Bạn đã từng ăn cơm trái cây chưa?', zh:'你吃过水果饭吗？', py:'Nǐ chī guo shuǐguǒ fàn ma?'},
  {vi:'Thực ra làm cơm trái cây rất đơn giản.', zh:'其实做水果饭很简单。', py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān.'},
  {vi:'Ăn nhiều trái cây tươi tốt cho sức khỏe.', zh:'多吃新鲜水果对身体好。', py:'Duō chī xīnxiān shuǐguǒ duì shēntǐ hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì khách sắp đến nên chúng tôi dọn phòng.', zh:'因为客人要来了，所以我们打扫房间。', py:'Yīnwèi kèrén yào lái le, suǒyǐ wǒmen dǎsǎo fángjiān.'},
  {vi:'Tuy làm cơm trái cây rất đơn giản nhưng nhiều người chưa từng ăn.', zh:'虽然做水果饭很简单，但是很多人没吃过。', py:'Suīrán zuò shuǐguǒ fàn hěn jiǎndān, dànshì hěn duō rén méi chīguo.'},
  {vi:'Nếu bạn muốn thì chúng ta cùng làm cơm trái cây.', zh:'如果你愿意，我们就一起做水果饭。', py:'Rúguǒ nǐ yuànyì, wǒmen jiù yìqǐ zuò shuǐguǒ fàn.'},
  {vi:'Trước tiên nấu cơm xong, sau đó cho trái cây tươi vào.', zh:'先把米饭做好，然后再把新鲜的水果放进去。', py:'Xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ xīnxiān de shuǐguǒ fàng jinqu.'},
  {vi:'Tôi trước tiên đi một tiếng xe buýt, lại đi một lúc tàu điện ngầm mới đến nhà Tiểu Cương.', zh:'我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。', py:'Wǒ xiān zuòle yí ge xiǎoshí gōnggòng qìchē, yòu zuòle yíhuìr dìtiě cái dào Xiǎogāng jiā.'},
  {vi:'Về nhà xong, tôi trước tiên làm bài tập, sau đó ăn cơm.', zh:'回家以后，我先做作业，然后吃饭。', py:'Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.'},
  {vi:'Xin đừng vừa lái xe vừa gọi điện thoại.', zh:'请别一边开车一边打电话。', py:'Qǐng bié yìbiān kāichē yìbiān dǎ diànhuà.'},
  {vi:'Các bạn học sinh đều chạy ra khỏi lớp học rồi.', zh:'同学们都跑出教室去了。', py:'Tóngxuémen dōu pǎo chū jiàoshì qu le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 14)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-14/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'我的伞，我的伞', post:'！',
       py:'Wǒ de sǎn, wǒ de sǎn!', vn:'Ô của tôi, ô của tôi!'},
      {speaker:'男', pre:'', blank:'怎么突然刮大风了，把伞都刮跑了', post:'！',
       py:'Zěnme rán guā dà fēng le, bǎ sǎn dōu guā pǎo le!', vn:'Sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'你怎么把冰箱里的东西都吃完了？我们今晚吃什么啊', post:'？',
       py:'Nǐ zěnme bǎ bīngxiāng li de dōngxi dōu chīwán le? Wǒmen jīnwǎn chī shénme a?', vn:'Sao bạn ăn hết đồ trong tủ lạnh vậy? Tối nay chúng ta ăn gì đây?'},
      {speaker:'男', pre:'', blank:'你不在家这几天，我一直没出去', post:'。',
       py:'Nǐ bú zài jiā zhè jǐ tiān, wǒ yìzhí méi chūqu.', vn:'Mấy ngày bạn không có nhà, tôi cứ ở nhà không ra ngoài.'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'小常，', blank:'这些盘子都要洗干净', post:'。',
       py:'Xiǎo Cháng, zhèxiē pánzi dōu yào xǐ gānjìng.', vn:'Tiểu Thường, những cái đĩa này đều phải rửa sạch.'},
      {speaker:'女', pre:'好，', blank:'我先把杯子洗完，然后再洗盘子', post:'。',
       py:'Hǎo, wǒ xiān bǎ bēizi xǐwán, ránhòu zài xǐ pánzi.', vn:'Được, tôi rửa cốc trước, sau đó mới rửa đĩa.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'先生，今天的鱼很新鲜，', blank:'您要不要来一条', post:'？',
       py:'Xiānsheng, jīntiān de yú hěn xīnxiān, nín yào bu yào lái yì tiáo?', vn:'Thưa anh, hôm nay cá rất tươi, anh có muốn dùng một con không?'},
      {speaker:'女', pre:'', blank:'我们先看看菜单，然后再点菜，好吗', post:'？',
       py:'Wǒmen xiān kànkan càidān, ránhòu zài diǎn cài, hǎo ma?', vn:'Chúng ta xem thực đơn trước đã, sau đó gọi món, được không?'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'爷爷奶奶，你们别说话，', blank:'今天我来给你们讲故事', post:'。',
       py:'Yéye nǎinai, nǐmen bié shuōhuà, jīntiān wǒ lái gěi nǐmen jiǎng gùshi.', vn:'Ông bà ơi, ông bà đừng nói chuyện nữa, hôm nay cháu kể chuyện cho ông bà nghe.'},
      {speaker:'女', pre:'好啊，', blank:'爷爷奶奶最喜欢听你讲故事了', post:'。',
       py:'Hǎo a, yéye nǎinai zuì xǐhuan tīng nǐ jiǎng gùshi le.', vn:'Được đấy, ông bà thích nhất nghe con kể chuyện đấy.'},
    ]},
    {num:6, lines:[
      {pre:'今天早上我妻子把车开出去了，要很晚才回来。', blank:'儿子9点要去学校上课，我只好带他坐地铁', post:'。',
       py:'Jīntiān zǎoshang wǒ qīzi bǎ chē kāi chuqu le, yào hěn wǎn cái huílai. Érzi jiǔ diǎn yào qù xuéxiào shàngkè, wǒ zhǐhǎo dài tā zuò dìtiě.', vn:'Sáng nay vợ tôi lái xe đi rồi, phải rất muộn mới về. Con trai 9 giờ phải đến trường học, tôi đành đưa con đi tàu điện ngầm.'},
    ]},
    {num:7, lines:[
      {pre:'常阿姨住在我家楼下，她经常把我叫下去听她唱歌。', blank:'我很喜欢她的声音。有时候我还和她一起唱呢', post:'。',
       py:'Cháng āyí zhù zài wǒ jiā lóuxià, tā jīngcháng bǎ wǒ jiào xiaqu tīng tā chànggē. Wǒ hěn xǐhuan tā de shēngyīn. Yǒushíhou wǒ hái hé tā yìqǐ chàng ne.', vn:'Cô Thường sống ở tầng dưới nhà tôi, cô ấy thường gọi tôi xuống nghe cô hát. Tôi rất thích giọng của cô ấy. Có lúc tôi còn hát cùng cô ấy nữa.'},
    ]},
    {num:8, lines:[
      {pre:'方叔叔爱看教做饭的节目。每天晚上不到七点半，都坐在电视前等着节目开始。', blank:'看完了他马上就开始做，做好了饭就请大家来吃', post:'。',
       py:'Fāng shūshu ài kàn jiāo zuò fàn de jiémù. Měi tiān wǎnshang bú dào qī diǎn bàn, dōu zuò zài diànshì qián děngzhe jiémù kāishǐ. Kànwánle tā mǎshàng jiù kāishǐ zuò, zuòhǎole fàn jiù qǐng dàjiā lái chī.', vn:'Chú Phương thích xem chương trình dạy nấu ăn. Tối nào chưa đến 7 giờ rưỡi, chú đã ngồi trước tivi chờ chương trình bắt đầu. Xem xong là chú bắt tay nấu ngay, nấu xong là mời mọi người đến ăn.'},
    ]},
    {num:9, lines:[
      {pre:'一天的工作结束后，小周总是最后一个离开公司的。', blank:'她每天都要先把办公室打扫干净，然后才回家', post:'。',
       py:'Yì tiān de gōngzuò jiéshù hòu, Xiǎo Zhōu zǒngshì zuìhòu yí ge líkāi gōngsī de. Tā měi tiān dōu yào xiān bǎ bàngōngshì dǎsǎo gānjìng, ránhòu cái huí jiā.', vn:'Sau khi kết thúc công việc mỗi ngày, Tiểu Chu luôn là người rời công ty cuối cùng. Ngày nào cô ấy cũng phải dọn sạch văn phòng trước, rồi mới về nhà.'},
    ]},
    {num:10, lines:[
      {pre:'方叔叔和白阿姨特别热情，每次我去他们家做客，都要从冰箱里拿出很多吃的、喝的来。', blank:'吃完饭还让我把饮料、水果带回家', post:'。',
       py:'Fāng shūshu hé Bái āyí tèbié rèqíng, měi cì wǒ qù tāmen jiā zuòkè, dōu yào cóng bīngxiāng li ná chū hěn duō chī de, hē de lái. Chīwán fàn hái ràng wǒ bǎ yǐnliào, shuǐguǒ dài huí jiā.', vn:'Chú Phương và cô Bạch rất nhiệt tình, mỗi lần tôi đến nhà họ chơi, đều lấy ra rất nhiều đồ ăn đồ uống từ tủ lạnh. Ăn xong còn bảo tôi mang nước uống, trái cây về nhà.'},
    ]},
  ],
  mc: [
    {num:11, options:['不新鲜','太贵了','很新鲜'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'我们买点儿香蕉吧，家里没有水果了', post:'。', py:'Wǒmen mǎi diǎnr xiāngjiāo ba, jiā li méiyǒu shuǐguǒ le.', vn:'Chúng ta mua ít chuối đi, nhà không còn trái cây nữa.'},
       {speaker:'女', pre:'', blank:'买西瓜吧，这些香蕉像是放了很久了', post:'。', py:'Mǎi xīguā ba, zhèxiē xiāngjiāo xiàng shì fàngle hěn jiǔ le.', vn:'Mua dưa hấu đi, mấy quả chuối này có vẻ để lâu rồi.'},
     ],
     explain:'男：我们买点儿香蕉吧，家里没有水果了。女：买西瓜吧，这些香蕉像是放了很久了。问：女的觉得香蕉怎么样？ → 不新鲜。'},
    {num:12, options:['画了很长时间','画得很像','画得不好看'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你的熊猫画得真好，像真的一样。我要多久才可以像你一样', post:'？', py:'Nǐ de xióngmāo huà de zhēn hǎo, xiàng zhēn de yíyàng. Wǒ yào duōjiǔ cái kěyǐ xiàng nǐ yíyàng?', vn:'Bạn vẽ con gấu trúc đẹp thật, giống như thật vậy. Tôi phải mất bao lâu mới được như bạn?'},
       {speaker:'女', pre:'', blank:'这不是时间的问题，主要是要有兴趣', post:'。', py:'Zhè bú shì shíjiān de wèntí, zhǔyào shì yào yǒu xìngqù.', vn:'Đây không phải vấn đề thời gian, chủ yếu là phải có hứng thú.'},
     ],
     explain:'男：你的熊猫画得真好，像真的一样。我要多久才可以像你一样？女：这不是时间的问题，主要是要有兴趣。问：女的画熊猫画得怎么样？ → 画得很像。'},
    {num:13, options:['以前像妈妈','以前像爸爸','现在像妈妈'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'你女儿像谁？你还是她爸爸', post:'？', py:'Nǐ nǚ\'ér xiàng shéi? Nǐ háishi tā bàba?', vn:'Con gái bạn giống ai? Bạn hay bố nó?'},
       {speaker:'女', pre:'', blank:'小时候像我，现在越来越像她爸爸了', post:'。', py:'Xiǎoshíhou xiàng wǒ, xiànzài yuè lái yuè xiàng tā bàba le.', vn:'Lúc nhỏ giống tôi, giờ ngày càng giống bố nó rồi.'},
     ],
     explain:'男：你女儿像谁？你还是她爸爸？女：小时候像我，现在越来越像她爸爸了。问：关于女儿，可以知道什么？ → 以前像妈妈。'},
    {num:14, options:['词典在哪儿','这个字怎么写','这个字怎么读'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'这个字有几个读音？我记得只有一个', post:'。', py:'Zhège zì yǒu jǐ ge dúyīn? Wǒ jìde zhǐyǒu yí ge.', vn:'Chữ này có mấy âm đọc? Tôi nhớ chỉ có một thôi.'},
       {speaker:'女', pre:'', blank:'我记得有两个。你帮我把词典拿过来，我们一起看看', post:'。', py:'Wǒ jìde yǒu liǎng ge. Nǐ bāng wǒ bǎ cídiǎn ná guolai, wǒmen yìqǐ kànkan.', vn:'Tôi nhớ có hai. Bạn giúp tôi lấy từ điển đến, chúng ta cùng xem.'},
     ],
     explain:'男：这个字有几个读音？我记得只有一个。女：我记得有两个。你帮我把词典拿过来，我们一起看看。问：他们想知道什么？ → 这个字怎么读。'},
    {num:15, options:['洗盘子','看节目','把声音开大'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'快来看啊，这个节目太有意思了', post:'。', py:'Kuài lái kàn a, zhège jiémù tài yǒuyìsi le.', vn:'Mau lại xem đi, chương trình này thú vị lắm.'},
       {speaker:'女', pre:'', blank:'我在洗盘子呢，你把电视声音开大一点儿', post:'。', py:'Wǒ zài xǐ pánzi ne, nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.', vn:'Tôi đang rửa đĩa đây, bạn vặn to tiếng tivi lên một chút.'},
     ],
     explain:'男：快来看啊，这个节目太有意思了。女：我在洗盘子呢，你把电视声音开大一点儿。问：女的想让男的做什么？ → 把声音开大。'},
    {num:16, options:['洗盘子','买水果','下楼'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'叔叔和阿姨第一次来我们家，是不是走错路了？已经三点零五了', post:'。', py:'Shūshu hé āyí dì-yī cì lái wǒmen jiā, shì bu shì zǒu cuò lù le? Yǐjīng sān diǎn líng wǔ le.', vn:'Chú và cô lần đầu đến nhà chúng ta, có phải đi lạc đường không? Đã 3 giờ 5 phút rồi.'},
       {speaker:'女', pre:'', blank:'你先把盘子洗一下，再从冰箱里把香蕉、苹果、饮料拿出来放好，然后我们下楼去等他们', post:'。', py:'Nǐ xiān bǎ pánzi xǐ yíxià, zài cóng bīngxiāng li bǎ xiāngjiāo, píngguǒ, yǐnliào ná chulai fànghǎo, ránhòu wǒmen xiàlóu qù děng tāmen.', vn:'Anh rửa đĩa trước đã, rồi lấy chuối, táo, nước uống từ tủ lạnh ra xếp gọn, sau đó chúng ta xuống lầu đợi họ.'},
       {speaker:'男', pre:'这些我早就准备好了。', blank:'这些水果少不少？要不要再买点儿', post:'？', py:'Zhèxiē wǒ zǎo jiù zhǔnbèi hǎo le. Zhèxiē shuǐguǒ shǎo bu shǎo? Yào bu yào zài mǎi diǎnr?', vn:'Mấy thứ này anh chuẩn bị xong lâu rồi. Trái cây thế này có ít không? Có cần mua thêm không?'},
       {speaker:'女', pre:'', blank:'不少。快把衣服穿好，我们下去吧', post:'。', py:'Bù shǎo. Kuài bǎ yīfu chuānhǎo, wǒmen xiàqu ba.', vn:'Không ít đâu. Mau mặc đồ xong đi, chúng ta xuống thôi.'},
     ],
     explain:'男：叔叔和阿姨第一次来我们家，是不是走错路了？已经三点零五了。女：你先把盘子洗一下，再从冰箱里把香蕉、苹果、饮料拿出来放好，然后我们下楼去等他们。男：这些我早就准备好了。这些水果少不少？要不要再买点儿？女：不少。快把衣服穿好，我们下去吧。问：他们现在要做什么？ → 下楼。'},
    {num:17, options:['开车','买伞','跑步'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'雨下得真大。你的车放哪儿了？我们快点儿跑过去', post:'。', py:'Yǔ xià de zhēn dà. Nǐ de chē fàng nǎr le? Wǒmen kuài diǎnr pǎo guoqu.', vn:'Mưa to thật. Xe bạn để đâu vậy? Chúng ta chạy nhanh qua đó đi.'},
       {speaker:'男', pre:'', blank:'你就在这儿等，我先过去把车开过来，然后你再上车', post:'。', py:'Nǐ jiù zài zhèr děng, wǒ xiān guòqu bǎ chē kāi guolai, ránhòu nǐ zài shàng chē.', vn:'Bạn cứ đợi ở đây, tôi qua đó lái xe đến trước, sau đó bạn lên xe.'},
       {speaker:'女', pre:'', blank:'那我把伞给你，你拿着伞走过去', post:'。', py:'Nà wǒ bǎ sǎn gěi nǐ, nǐ názhe sǎn zǒu guoqu.', vn:'Vậy tôi đưa ô cho bạn, bạn cầm ô đi qua đó.'},
       {speaker:'男', pre:'', blank:'刮这么大的风，伞没有用', post:'。', py:'Guā zhème dà de fēng, sǎn méiyǒu yòng.', vn:'Gió to thế này, ô cũng vô dụng thôi.'},
     ],
     explain:'女：雨下得真大。你的车放哪儿了？我们快点儿跑过去。男：你就在这儿等，我先过去把车开过来，然后你再上车。女：那我把伞给你，你拿着伞走过去。男：刮这么大的风，伞没有用。问：男的现在要做什么？ → 开车。'},
    {num:18, options:['把电视声音关小','把房间打扫干净','过来看电视节目'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'你在看什么呢？一直笑', post:'。', py:'Nǐ zài kàn shénme ne? Yìzhí xiào.', vn:'Bạn đang xem gì thế? Cứ cười mãi.'},
       {speaker:'男', pre:'', blank:'这个节目里的小猫小狗特别有意思，你先过来看，一会儿再打扫房间', post:'。', py:'Zhège jiémù li de xiǎomāo xiǎogǒu tèbié yǒuyìsi, nǐ xiān guòlai kàn, yíhuìr zài dǎsǎo fángjiān.', vn:'Mèo con chó con trong chương trình này thú vị lắm, bạn lại đây xem trước đã, lát nữa dọn phòng cũng được.'},
       {speaker:'女', pre:'', blank:'把电视声音关小点儿，儿子明天考试，正复习呢，别影响他', post:'。', py:'Bǎ diànshì shēngyīn guān xiǎo diǎnr, érzi míngtiān kǎoshì, zhèng fùxí ne, bié yǐngxiǎng tā.', vn:'Vặn nhỏ tiếng tivi lại, con trai mai thi, đang ôn bài đấy, đừng làm ảnh hưởng nó.'},
       {speaker:'男', pre:'', blank:'好，你快过来吧', post:'。', py:'Hǎo, nǐ kuài guòlai ba.', vn:'Được, bạn mau lại đây đi.'},
     ],
     explain:'女：你在看什么呢？一直笑。男：这个节目里的小猫小狗特别有意思，你先过来看，一会儿再打扫房间。女：把电视声音关小点儿，儿子明天考试，正复习呢，别影响他。男：好，你快过来吧。问：男的现在要让女的做什么？ → 过来看电视节目。'},
    {num:19, options:['看房子','买桌椅','找饭馆'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'这椅子有点儿矮，坐着不舒服', post:'。', py:'Zhè yǐzi yǒudiǎnr ǎi, zuòzhe bù shūfu.', vn:'Cái ghế này hơi thấp, ngồi không thoải mái.'},
       {speaker:'男', pre:'', blank:'没关系，我们去那边看看，那儿也有', post:'。', py:'Méi guānxi, wǒmen qù nàbian kànkan, nàr yě yǒu.', vn:'Không sao, chúng ta qua bên kia xem thử, chỗ đó cũng có.'},
       {speaker:'女', pre:'', blank:'这层有桌子吗？今天把桌子、椅子都一起换了吧', post:'。', py:'Zhè céng yǒu zhuōzi ma? Jīntiān bǎ zhuōzi, yǐzi dōu yìqǐ huàn le ba.', vn:'Tầng này có bàn không? Hôm nay đổi luôn cả bàn lẫn ghế đi.'},
       {speaker:'男', pre:'', blank:'好，我们先看椅子，再看桌子，然后去吃饭', post:'。', py:'Hǎo, wǒmen xiān kàn yǐzi, zài kàn zhuōzi, ránhòu qù chī fàn.', vn:'Được, chúng ta xem ghế trước, rồi xem bàn, sau đó đi ăn cơm.'},
     ],
     explain:'女：这椅子有点儿矮，坐着不舒服。男：没关系，我们去那边看看，那儿也有。女：这层有桌子吗？今天把桌子、椅子都一起换了吧。男：好，我们先看椅子，再看桌子，然后去吃饭。问：他们在做什么？ → 买桌椅。'},
    {num:20, options:['爸爸回来了','她要唱歌','她想安静一会儿'], ans:2,
     lines:[
       {speaker:'男', pre:'姐，你听，外边是谁的声音？', blank:'是不是爸爸回来了', post:'？', py:'Jiě, nǐ tīng, wàibian shì shéi de shēngyīn? Shì bu shì bàba huílai le?', vn:'Chị ơi, chị nghe xem, tiếng ai ở ngoài thế? Có phải bố về không?'},
       {speaker:'女', pre:'', blank:'我听不见啊，你把音乐声音关小些', post:'。', py:'Wǒ tīng bu jiàn a, nǐ bǎ yīnyuè shēngyīn guān xiǎo xiē.', vn:'Chị không nghe thấy đâu, em vặn nhỏ tiếng nhạc lại đi.'},
       {speaker:'男', pre:'', blank:'不是爸爸，是楼上的周叔叔在说话。那我听歌了啊', post:'。', py:'Bú shì bàba, shì lóushàng de Zhōu shūshu zài shuōhuà. Nà wǒ tīng gē le a.', vn:'Không phải bố, là chú Chu trên lầu đang nói chuyện. Vậy em nghe nhạc tiếp nhé.'},
       {speaker:'女', pre:'', blank:'你别把声音开那么大，我想安静一会儿', post:'。', py:'Nǐ bié bǎ shēngyīn kāi nàme dà, wǒ xiǎng ānjìng yíhuìr.', vn:'Em đừng mở nhạc to thế, chị muốn yên tĩnh một lát.'},
     ],
     explain:'男：姐，你听，外边是谁的声音？是不是爸爸回来了？女：我听不见啊，你把音乐声音关小些。男：不是爸爸，是楼上的周叔叔在说话。那我听歌了啊。女：你别把声音开那么大，我想安静一会儿。问：女的为什么让男的把声音关小？ → 她想安静一会儿。'},
  ],
};
