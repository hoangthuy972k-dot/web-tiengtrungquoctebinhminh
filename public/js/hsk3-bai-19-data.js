// ══════════════════════════════════════════
// DATA — HSK3 Bài 19: 你没看出来吗 (Anh không nhìn ra được à?)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'耳朵',py:'ěrduo',pos:'Danh từ',vn:'tai',em:'👂',lesson:1,
   explain:['Bộ phận trên đầu dùng để nghe.'],
   usage:'Danh từ; đi cùng động từ 放/看: 把头发放在耳朵后面.',
   collo:['耳朵后面','耳朵疼','看一下耳朵'],
   ex_zh:'女儿最近喜欢把头发放在耳朵后面。',ex_py:'Nǚ\'ér zuìjìn xǐhuan bǎ tóufa fàng zài ěrduo hòumiàn.',ex_vn:'Con gái gần đây thích để tóc ra sau tai.',
   exList:[
     {zh:'女儿最近喜欢把头发放在耳朵后面，你知道为什么吗？',py:'Nǚ\'ér zuìjìn xǐhuan bǎ tóufa fàng zài ěrduo hòumiàn, nǐ zhīdào wèi shénme ma?',vn:'Con gái gần đây thích để tóc ra sau tai, em biết vì sao không?'},
     {zh:'别害怕，不要动，让我看一下你的耳朵。',py:'Bié hàipà, búyào dòng, ràng wǒ kàn yíxià nǐ de ěrduo.',vn:'Đừng sợ, đừng cử động, để tôi xem tai bạn một chút.'},
     {zh:'刚才游泳时耳朵进水了，现在耳朵里一直不舒服。',py:'Gāngcái yóuyǒng shí ěrduo jìn shuǐ le, xiànzài ěrduo li yìzhí bù shūfu.',vn:'Vừa nãy bơi bị nước vào tai, giờ trong tai cứ khó chịu mãi.'},
   ],
   hanzi:[
     {c:'朵',p:'duo',type:'上下结构 · Trên-dưới',st:6,ord:'几 trên → 木 dưới',rad:'木 (mộc – gỗ)',mean:'lượng từ chỉ hoa',
      tip:'几(hình dáng cong) + 木(cây) → hình DÁNG bông hoa trên CÂY; 耳(tai)+朵(hình dáng cong) = TAI (hình cong giống bông hoa).',
      cf:'条 (tiáo – "sợi, dải", có bộ 冬")',w:'耳朵 / 一朵花'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần trời lạnh là tai cậu ấy lại khó chịu mãi không dứt.',answer:'只要天一冷，他的耳朵就一直不舒服。',answerPy:'Zhǐyào tiān yì lěng, tā de ěrduo jiù yìzhí bù shūfu.',
      note:'一直 diễn tả trạng thái kéo dài liên tục.'},
     {promptLang:'vi',prompt:'Nếu tai bạn khó chịu thì đi khám bác sĩ đi.',answer:'如果你的耳朵不舒服，就去看医生吧。',answerPy:'Rúguǒ nǐ de ěrduo bù shūfu, jiù qù kàn yīshēng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).'},
   ]},

  {n:2,zh:'脸',py:'liǎn',pos:'Danh từ',vn:'mặt, khuôn mặt',em:'😊',lesson:1,
   explain:['Phần trước của đầu, từ trán đến cằm.'],
   usage:'Danh từ; đi cùng động từ 看上去: 脸看上去漂亮.',
   collo:['脸看上去','脸色','洗脸'],
   ex_zh:'这样可以使她的脸看上去漂亮一些。',ex_py:'Zhèyàng kěyǐ shǐ tā de liǎn kàn shangqu piàoliang yìxiē.',ex_vn:'Như vậy có thể khiến khuôn mặt con trông xinh hơn một chút.',
   exList:[
     {zh:'这样可以使她的脸看上去漂亮一些。',py:'Zhèyàng kěyǐ shǐ tā de liǎn kàn shangqu piàoliang yìxiē.',vn:'Như vậy có thể khiến khuôn mặt con trông xinh hơn một chút.'},
     {zh:'他今天穿蓝西服，看上去像40多岁。',py:'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì.',vn:'Hôm nay anh ấy mặc âu phục xanh, trông như hơn 40 tuổi.'},
     {zh:'你的脸色看上去不太好，哪儿不舒服啊？',py:'Nǐ de liǎnsè kàn shangqu bú tài hǎo, nǎr bù shūfu a?',vn:'Sắc mặt bạn trông không tốt lắm, chỗ nào khó chịu vậy?'},
   ],
   hanzi:[
     {c:'脸',p:'liǎn',type:'左右结构 · Trái-phải',st:10,ord:'月 trái → 佥 phải (giản thể)',rad:'月 (nhục – thịt)',mean:'mặt',
      tip:'月(bộ thịt, chỉ cơ thể) + 佥(mọi người) → phần cơ thể mà MỌI NGƯỜI đều nhìn thấy đầu tiên = MẶT.',
      cf:'检 (jiǎn – "kiểm tra", có bộ 木")',w:'脸 / 洗脸 / 脸色'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy sắc mặt anh ấy trông không tốt lắm, nhưng anh ấy nói bản thân không sao.',answer:'虽然他脸色看上去不太好，但是他说自己没什么事。',answerPy:'Suīrán tā liǎnsè kàn shangqu bú tài hǎo, dànshì tā shuō zìjǐ méi shénme shì.',
      note:'看上去 diễn tả sự đánh giá qua quan sát (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn rửa mặt xong thì chúng ta đi ăn cơm đi.',answer:'如果你洗完脸了，我们就去吃饭吧。',answerPy:'Rúguǒ nǐ xǐwán liǎn le, wǒmen jiù qù chī fàn ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'短',py:'duǎn',pos:'Tính từ',vn:'ngắn',em:'📏',lesson:1,
   explain:['Có độ dài nhỏ, trái nghĩa với 长.'],
   usage:'Tính từ, làm định ngữ hoặc vị ngữ: 短头发.',
   collo:['短头发','短一些','变短'],
   ex_zh:'她小时候喜欢短头发。',ex_py:'Tā xiǎoshíhou xǐhuan duǎn tóufa.',ex_vn:'Hồi nhỏ con thích để tóc ngắn.',
   exList:[
     {zh:'女儿变化不小，她小时候喜欢短头发，像男孩子一样。',py:'Nǚ\'ér biànhuà bù xiǎo, tā xiǎoshíhou xǐhuan duǎn tóufa, xiàng nán háizi yíyàng.',vn:'Con gái thay đổi không nhỏ đâu, hồi nhỏ con thích để tóc ngắn, giống con trai vậy.'},
     {zh:'那时她比较瘦，还是短头发。',py:'Nà shí tā bǐjiào shòu, háishi duǎn tóufa.',vn:'Lúc đó cô ấy khá gầy, vẫn để tóc ngắn.'},
     {zh:'这条裤子有点儿短。',py:'Zhè tiáo kùzi yǒudiǎnr duǎn.',vn:'Cái quần này hơi ngắn.'},
   ],
   hanzi:[
     {c:'短',p:'duǎn',type:'左右结构 · Trái-phải',st:12,ord:'矢 trái → 豆 phải',rad:'矢 (thỉ – mũi tên)',mean:'ngắn',
      tip:'矢(mũi tên, vật ngắn) + 豆(hạt đậu, cũng nhỏ) → hai vật đều NGẮN, NHỎ để so sánh = NGẮN.',
      cf:'豆 (dòu – "đậu", không có bộ 矢")',w:'短 / 短头发 / 短信'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cái áo này hơi ngắn, nhưng mặc vào vẫn khá đẹp.',answer:'虽然这件衣服有点儿短，但是穿起来还挺好看。',answerPy:'Suīrán zhè jiàn yīfu yǒudiǎnr duǎn, dànshì chuān qilai hái tǐng hǎokàn.',
      note:'有点儿 + Adj diễn tả mức độ nhẹ.'},
     {promptLang:'vi',prompt:'Nếu tóc bạn ngắn thì sẽ trông trẻ hơn.',answer:'如果你的头发短一些，就会看上去更年轻。',answerPy:'Rúguǒ nǐ de tóufa duǎn yìxiē, jiù huì kàn shangqu gèng niánqīng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:4,zh:'马',py:'mǎ',pos:'Danh từ',vn:'ngựa',em:'🐴',lesson:2,
   explain:['Loài động vật bốn chân, dùng để cưỡi, kéo xe.'],
   usage:'Danh từ; đi cùng động từ 骑: 骑马.',
   collo:['骑马','骑马比赛','喜欢骑马'],
   ex_zh:'上次我们参加骑马比赛的照片。',ex_py:'Shàng cì wǒmen cānjiā qí mǎ bǐsài de zhàopiàn.',ex_vn:'Ảnh chúng ta chụp khi tham gia cuộc thi cưỡi ngựa lần trước.',
   exList:[
     {zh:'上次我们参加骑马比赛的照片，我选了几张洗出来了。',py:'Shàng cì wǒmen cānjiā qí mǎ bǐsài de zhàopiàn, wǒ xuǎnle jǐ zhāng xǐ chulai le.',vn:'Ảnh chúng ta chụp khi tham gia cuộc thi cưỡi ngựa lần trước, tôi chọn mấy tấm rửa ra rồi.'},
     {zh:'你会骑马？跟谁学的？',py:'Nǐ huì qí mǎ? Gēn shéi xué de?',vn:'Bạn biết cưỡi ngựa à? Học từ ai vậy?'},
     {zh:'我爷爷，他很喜欢骑马，而且骑得很好。',py:'Wǒ yéye, tā hěn xǐhuan qí mǎ, érqiě qí de hěn hǎo.',vn:'Ông nội tôi, ông rất thích cưỡi ngựa, mà lại cưỡi rất giỏi.'},
   ],
   hanzi:[
     {c:'马',p:'mǎ',type:'独体字 · Chữ đơn (tượng hình, giản thể)',st:3,ord:'nét liền',rad:'马 (mã)',mean:'ngựa',
      tip:'Chữ giản thể mô phỏng hình con NGỰA với bờm và bốn chân → NGỰA.',
      cf:'鸟 (niǎo – "chim", hình dáng gần giống")',w:'马 / 骑马'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai tôi không chỉ biết cưỡi ngựa, mà còn cưỡi nhanh hơn ai hết.',answer:'我哥哥不但会骑马，而且骑得比谁都快。',answerPy:'Wǒ gēge búdàn huì qí mǎ, érqiě qí de bǐ shéi dōu kuài.',
      note:'不但……而且…… có thể lược 不但, chỉ dùng 而且 khi ngữ cảnh rõ (ôn lại đã học ở Bài 18).'},
     {promptLang:'vi',prompt:'Nếu bạn thích cưỡi ngựa thì chúng ta đi công viên cưỡi thử đi.',answer:'如果你喜欢骑马，我们就去公园骑骑吧。',answerPy:'Rúguǒ nǐ xǐhuan qí mǎ, wǒmen jiù qù gōngyuán qíqi ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'张',py:'zhāng',pos:'Lượng từ',vn:'tờ, tấm',em:'📄',lesson:2,
   explain:['Lượng từ dùng cho vật phẳng như giấy, bức ảnh.'],
   usage:'一 + 张 + [danh từ phẳng]: 一张照片.',
   collo:['一张照片','几张纸','这张画儿'],
   ex_zh:'我选了几张洗出来了。',ex_py:'Wǒ xuǎnle jǐ zhāng xǐ chulai le.',ex_vn:'Tôi chọn mấy tấm rửa ra rồi.',
   exList:[
     {zh:'上次我们参加骑马比赛的照片，我选了几张洗出来了。',py:'Shàng cì wǒmen cānjiā qí mǎ bǐsài de zhàopiàn, wǒ xuǎnle jǐ zhāng xǐ chulai le.',vn:'Ảnh chúng ta chụp khi tham gia cuộc thi cưỡi ngựa lần trước, tôi chọn mấy tấm rửa ra rồi.'},
     {zh:'你看，这张照片是前年夏天照的。',py:'Nǐ kàn, zhè zhāng zhàopiàn shì qiánnián xiàtiān zhào de.',vn:'Bạn xem, tấm ảnh này chụp hè năm kia đấy.'},
     {zh:'这张照片让我想起了我的家。',py:'Zhè zhāng zhàopiàn ràng wǒ xiǎngqǐle wǒ de jiā.',vn:'Tấm ảnh này khiến tôi nhớ đến nhà mình.'},
   ],
   hanzi:[
     {c:'张',p:'zhāng',type:'左右结构 · Trái-phải',st:7,ord:'弓 trái → 长 phải (giản thể)',rad:'弓 (cung)',mean:'mở ra; lượng từ vật phẳng',
      tip:'弓(cây cung) + 长(kéo dài) → kéo dài dây CUNG để bắn = MỞ RA; mở rộng làm lượng từ cho vật phẳng có thể trải ra (giấy, ảnh).',
      cf:'长 (cháng/zhǎng – "dài/lớn lên", không có bộ 弓")',w:'张 / 一张纸'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tấm ảnh đó khiến mẹ nhớ đến bản thân hồi nhỏ.',answer:'那张照片让妈妈想起了小时候的自己。',answerPy:'Nà zhāng zhàopiàn ràng māma xiǎngqǐle xiǎoshíhou de zìjǐ.',
      note:'让 + đối tượng + kết quả diễn tả sự khiến cho (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn có tấm ảnh nào đẹp thì cho tôi xem thử đi.',answer:'如果你有什么好看的照片，就给我看看吧。',answerPy:'Rúguǒ nǐ yǒu shénme hǎokàn de zhàopiàn, jiù gěi wǒ kànkan ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'位',py:'wèi',pos:'Lượng từ',vn:'vị (dùng cho người, hàm ý kính trọng)',em:'🙋',lesson:2,
   explain:['Lượng từ dùng cho người, thể hiện sự tôn trọng.'],
   usage:'一 + 位 + [người]: 这位.',
   collo:['这位','一位老师','哪位'],
   ex_zh:'骑得最快的这位是谁？',ex_py:'Qí de zuì kuài de zhè wèi shì shéi?',ex_vn:'Vị này cưỡi nhanh nhất là ai vậy?',
   exList:[
     {zh:'快给我看看。骑得最快的这位是谁？',py:'Kuài gěi wǒ kànkan. Qí de zuì kuài de zhè wèi shì shéi?',vn:'Mau cho tôi xem. Vị này cưỡi nhanh nhất là ai vậy?'},
     {zh:'请问，您是哪位？',py:'Qǐngwèn, nín shì nǎ wèi?',vn:'Xin hỏi, anh/chị là ai vậy ạ?'},
     {zh:'这位是我们的新经理。',py:'Zhè wèi shì wǒmen de xīn jīnglǐ.',vn:'Vị này là giám đốc mới của chúng tôi.'},
   ],
   hanzi:[
     {c:'位',p:'wèi',type:'左右结构 · Trái-phải',st:7,ord:'亻 trái → 立 phải',rad:'亻 (nhân – người)',mean:'vị trí; vị (lượng từ)',
      tip:'亻(người) + 立(đứng) → NGƯỜI đứng ở một VỊ TRÍ nhất định; mở rộng làm lượng từ tôn trọng cho người.',
      cf:'立 (lì – "đứng", không có bộ 亻")',w:'位 / 位置'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vị này tuy là giám đốc mới đến, nhưng mọi người đều rất thích anh ấy.',answer:'这位虽然是新来的经理，但是大家都很喜欢他。',answerPy:'Zhè wèi suīrán shì xīnlái de jīnglǐ, dànshì dàjiā dōu hěn xǐhuan tā.',
      note:'这位 dùng lịch sự khi giới thiệu người.'},
     {promptLang:'vi',prompt:'Nếu vị này là giám đốc mới thì chúng ta nên chào hỏi.',answer:'如果这位是新经理，我们就应该打个招呼。',answerPy:'Rúguǒ zhè wèi shì xīn jīnglǐ, wǒmen jiù yīnggāi dǎ ge zhāohu.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'蓝',py:'lán',pos:'Tính từ',vn:'có màu xanh da trời',em:'🔵',lesson:2,
   explain:['Màu của bầu trời trong, biển cả.'],
   usage:'Tính từ; đi cùng danh từ: 蓝西服.',
   collo:['蓝西服','蓝色','天蓝蓝的'],
   ex_zh:'他今天穿蓝西服。',ex_py:'Tā jīntiān chuān lán xīfú.',ex_vn:'Hôm nay anh ấy mặc âu phục xanh.',
   exList:[
     {zh:'他今天穿蓝西服，看上去像40多岁。',py:'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì.',vn:'Hôm nay anh ấy mặc âu phục xanh, trông như hơn 40 tuổi.'},
     {zh:'还有蓝色和黑色的，拿一件您试试？',py:'Hái yǒu lánsè hé hēisè de, ná yí jiàn nín shìshi?',vn:'Còn có màu xanh và màu đen nữa, lấy một cái anh mặc thử nhé?'},
     {zh:'蓝色会让我的脸看上去更年轻些。',py:'Lánsè huì ràng wǒ de liǎn kàn shangqu gèng niánqīng xiē.',vn:'Màu xanh sẽ khiến khuôn mặt tôi trông trẻ hơn một chút.'},
   ],
   hanzi:[
     {c:'蓝',p:'lán',type:'上下结构 · Trên-dưới',st:13,ord:'艹 trên → 监 dưới (giản thể)',rad:'艹 (thảo – cỏ cây)',mean:'màu xanh lam',
      tip:'艹(cây cỏ, thực vật nhuộm màu) + 监(soi xét) → thực vật dùng để nhuộm màu XANH LAM thời xưa (cây chàm).',
      cf:'篮 (lán – "cái giỏ", có bộ ⺮")',w:'蓝色 / 蓝天'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn mặc bộ âu phục xanh đó vào, sẽ khiến bạn trông bảnh hơn.',answer:'只要你穿上那件蓝西服，就会让你看上去更帅。',answerPy:'Zhǐyào nǐ chuānshang nà jiàn lán xīfú, jiù huì ràng nǐ kàn shangqu gèng shuài.',
      note:'让 + đối tượng + kết quả diễn tả sự khiến cho (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn thích màu xanh thì mua cái áo đó đi.',answer:'如果你喜欢蓝色，就买那件衣服吧。',answerPy:'Rúguǒ nǐ xǐhuan lánsè, jiù mǎi nà jiàn yīfu ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'秋(天)',py:'qiū(tiān)',pos:'Danh từ',vn:'mùa thu',em:'🍂',lesson:3,
   explain:['Mùa chuyển tiếp giữa hè và đông.'],
   usage:'Danh từ chỉ mùa; đi cùng động từ 出生: 秋天出生的.',
   collo:['去年秋天','秋天出生','这个秋天'],
   ex_zh:'她去年秋天出生的。',ex_py:'Tā qùnián qiūtiān chūshēng de.',ex_vn:'Con bé sinh vào mùa thu năm ngoái.',
   exList:[
     {zh:'她去年秋天出生的，刚过完一岁生日。',py:'Tā qùnián qiūtiān chūshēng de, gāng guòwán yí suì shēngrì.',vn:'Con bé sinh vào mùa thu năm ngoái, vừa mới qua sinh nhật một tuổi.'},
     {zh:'秋天的天气很凉快。',py:'Qiūtiān de tiānqì hěn liángkuai.',vn:'Thời tiết mùa thu rất mát mẻ.'},
     {zh:'我最喜欢的季节是秋天。',py:'Wǒ zuì xǐhuan de jìjié shì qiūtiān.',vn:'Mùa tôi thích nhất là mùa thu.'},
   ],
   hanzi:[
     {c:'秋',p:'qiū',type:'左右结构 · Trái-phải',st:9,ord:'禾 trái → 火 phải',rad:'禾 (hoà – lúa)',mean:'mùa thu',
      tip:'禾(cây lúa) + 火(lửa, màu vàng đỏ) → mùa LÚA chín có màu vàng như LỬA = MÙA THU.',
      cf:'秒 (miǎo – "giây", có 少 thay vì 火")',w:'秋天 / 秋季'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nơi tôi muốn đến nhất chính là Hoàng Hà vào mùa thu.',answer:'我最想去的地方就是秋天的黄河。',answerPy:'Wǒ zuì xiǎng qù de dìfang jiù shì qiūtiān de Huáng Hé.',
      note:'最 + động từ + 的 làm định ngữ.'},
     {promptLang:'vi',prompt:'Nếu mùa thu đến thì lá cây sẽ chuyển màu vàng.',answer:'如果秋天到了，树叶就会变黄。',answerPy:'Rúguǒ qiūtiān dào le, shùyè jiù huì biàn huáng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'过',py:'guò',pos:'Động từ',vn:'ăn (mừng), trải qua',em:'🎂',lesson:3,
   explain:['Kỷ niệm một dịp đặc biệt, hoặc trải qua khoảng thời gian.'],
   usage:'Động từ, mang tân ngữ: 过生日, 过年.',
   collo:['过生日','过年','过节'],
   ex_zh:'刚过完一岁生日。',ex_py:'Gāng guòwán yí suì shēngrì.',ex_vn:'Vừa mới qua sinh nhật một tuổi.',
   exList:[
     {zh:'她去年秋天出生的，刚过完一岁生日。',py:'Tā qùnián qiūtiān chūshēng de, gāng guòwán yí suì shēngrì.',vn:'Con bé sinh vào mùa thu năm ngoái, vừa mới qua sinh nhật một tuổi.'},
     {zh:'过生日要吃面条，这是我第一次做面条。',py:'Guò shēngrì yào chī miàntiáo, zhè shì wǒ dì-yī cì zuò miàntiáo.',vn:'Ăn sinh nhật phải ăn mì, đây là lần đầu tiên tôi làm mì.'},
     {zh:'我真希望时间能慢下来，不要过得那么快。',py:'Wǒ zhēn xīwàng shíjiān néng màn xiàlai, búyào guò de nàme kuài.',vn:'Tôi thật mong thời gian có thể chậm lại, đừng trôi qua nhanh như vậy.'},
   ],
   hanzi:[
     {c:'过',p:'guò',type:'半包围结构 · Bán bao vây',st:6,ord:'辶 ngoài → 寸 trong',rad:'辶 (sước – đi)',mean:'đi qua, trải qua',
      tip:'辶(đi) + 寸(một đoạn ngắn, thời gian) → ĐI QUA một khoảng thời gian; mở rộng nghĩa TRẢI QUA, ĂN MỪNG (một dịp).',
      cf:'辻 (không phải chữ Hán thường dùng)',w:'过 / 经过 / 过年'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy sinh nhật năm nay tổ chức đơn giản, nhưng tôi vẫn rất vui.',answer:'虽然今年的生日过得很简单，但是我还是很开心。',answerPy:'Suīrán jīnnián de shēngrì guò de hěn jiǎndān, dànshì wǒ háishi hěn kāixīn.',
      note:'过生日 diễn tả ăn mừng sinh nhật.'},
     {promptLang:'vi',prompt:'Nếu bạn qua sinh nhật vui vẻ thì tôi cũng vui theo.',answer:'如果你过生日过得开心，我也会跟着高兴。',answerPy:'Rúguǒ nǐ guò shēngrì guò de kāixīn, wǒ yě huì gēnzhe gāoxìng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'鸟',py:'niǎo',pos:'Danh từ',vn:'chim',em:'🐦',lesson:3,
   explain:['Loài động vật có cánh, biết bay và hót.'],
   usage:'Danh từ; đi cùng động từ 叫: 鸟叫.',
   collo:['鸟叫','小鸟','什么鸟'],
   ex_zh:'她就喜欢听她爸爸学鸟叫。',ex_py:'Tā jiù xǐhuan tīng tā bàba xué niǎo jiào.',ex_vn:'Con bé chỉ thích nghe bố nó bắt chước tiếng chim kêu.',
   exList:[
     {zh:'她就喜欢听她爸爸学鸟叫。哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。',py:'Tā jiù xǐhuan tīng tā bàba xué niǎo jiào. Kū de shíhou, zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xialai le.',vn:'Con bé chỉ thích nghe bố nó bắt chước tiếng chim kêu. Lúc khóc, chỉ cần bố nó bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.'},
     {zh:'你看，树上那只鸟，红红的，嘴小小的，是什么鸟？',py:'Nǐ kàn, shù shang nà zhī niǎo, hónghóng de, zuǐ xiǎoxiǎo de, shì shénme niǎo?',vn:'Bạn xem, con chim trên cây kia, đỏ đỏ, mỏ nhỏ nhỏ, là chim gì vậy?'},
     {zh:'街道两边的树，还有树上的小鸟，会使我觉得很快乐。',py:'Jiēdào liǎng biān de shù, hái yǒu shù shang de xiǎo niǎo, huì shǐ wǒ juéde hěn kuàilè.',vn:'Hàng cây hai bên đường phố, còn có chim nhỏ trên cây, khiến tôi cảm thấy rất vui.'},
   ],
   hanzi:[
     {c:'鸟',p:'niǎo',type:'独体字 · Chữ đơn (tượng hình, giản thể)',st:5,ord:'nét liền',rad:'鸟 (điểu)',mean:'chim',
      tip:'Chữ giản thể mô phỏng hình con CHIM với đầu, thân và đuôi → CHIM.',
      cf:'乌 (wū – "quạ", thiếu nét chấm mắt")',w:'鸟 / 小鸟'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chim nhỏ trong công viên vừa bay vừa hót, khiến tôi nhớ lại tuổi thơ.',answer:'公园里的小鸟一边飞一边叫，使我想起了童年。',answerPy:'Gōngyuán li de xiǎo niǎo yìbiān fēi yìbiān jiào, shǐ wǒ xiǎngqǐle tóngnián.',
      note:'使 diễn tả sự khiến cho (ôn lại 街道 đã học ở Bài 15).'},
     {promptLang:'vi',prompt:'Nếu bạn thích nghe chim hót thì đi công viên đi.',answer:'如果你喜欢听鸟叫，就去公园吧。',answerPy:'Rúguǒ nǐ xǐhuan tīng niǎo jiào, jiù qù gōngyuán ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'哭',py:'kū',pos:'Động từ',vn:'khóc',em:'😢',lesson:3,
   explain:['Biểu lộ cảm xúc buồn, đau bằng nước mắt.'],
   usage:'Động từ; đi cùng 的时候: 哭的时候.',
   collo:['哭的时候','一直哭','别哭'],
   ex_zh:'哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。',ex_py:'Kū de shíhou, zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xialai le.',ex_vn:'Lúc khóc, chỉ cần bố nó bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.',
   exList:[
     {zh:'哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。',py:'Kū de shíhou, zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xialai le.',vn:'Lúc khóc, chỉ cần bố nó bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.'},
     {zh:'你哭了？没有啊，刚才风刮得太大，眼睛里进东西了。',py:'Nǐ kū le? Méiyǒu a, gāngcái fēng guā de tài dà, yǎnjing li jìn dōngxi le.',vn:'Bạn khóc à? Không có, vừa nãy gió thổi to quá, có vật gì vào mắt rồi.'},
     {zh:'最近，我家小雨一直哭，说耳朵疼。',py:'Zuìjìn, wǒ jiā Xiǎoyǔ yìzhí kū, shuō ěrduo téng.',vn:'Gần đây, bé Tiểu Vũ nhà tôi cứ khóc mãi, nói tai đau.'},
   ],
   hanzi:[
     {c:'哭',p:'kū',type:'上下结构 · Trên-dưới',st:10,ord:'吅 trên → 犬 dưới',rad:'口 (khẩu)',mean:'khóc',
      tip:'吅(hai miệng, tiếng kêu to) + 犬(con chó, tiếng tru) → tiếng kêu KHÓC to như tiếng chó tru.',
      cf:'器 (qì – "dụng cụ", có 4 chữ 口")',w:'哭 / 别哭了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tai cứ đau mãi nên bé Tiểu Vũ mới khóc mãi không thôi.',answer:'因为耳朵一直很疼，所以小雨才一直哭。',answerPy:'Yīnwèi ěrduo yìzhí hěn téng, suǒyǐ Xiǎoyǔ cái yìzhí kū.',
      note:'一直 diễn tả trạng thái kéo dài liên tục (ôn lại 耳朵 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bé khóc thì bạn hát cho bé nghe đi.',answer:'如果孩子哭了，你就给她唱首歌吧。',answerPy:'Rúguǒ háizi kū le, nǐ jiù gěi tā chàng shǒu gē ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'黄河',py:'Huáng Hé',pos:'Danh từ riêng',vn:'Hoàng Hà',em:'🏞️',lesson:4,
   explain:['Con sông lớn thứ hai ở Trung Quốc, được coi là cái nôi của văn minh Trung Hoa.'],
   usage:'Danh từ riêng; đi cùng động từ 看/去: 去看黄河.',
   collo:['黄河边上','看黄河','中国有名的大河'],
   ex_zh:'我先去看了黄河。',ex_py:'Wǒ xiān qù kànle Huáng Hé.',ex_vn:'Tôi trước tiên đi xem sông Hoàng Hà.',
   exList:[
     {zh:'我先去看了黄河，黄河是中国有名的大河。',py:'Wǒ xiān qù kànle Huáng Hé, Huáng Hé shì Zhōngguó yǒumíng de dà hé.',vn:'Tôi trước tiên đi xem sông Hoàng Hà, Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc.'},
     {zh:'这张照片让我想起了我的家，以前我家住在黄河边上。',py:'Zhè zhāng zhàopiàn ràng wǒ xiǎngqǐle wǒ de jiā, yǐqián wǒ jiā zhù zài Huáng Hé biānshang.',vn:'Tấm ảnh này khiến tôi nhớ đến nhà mình, trước đây nhà tôi sống ở bên bờ Hoàng Hà.'},
     {zh:'黄河是中国有名的大河。',py:'Huáng Hé shì Zhōngguó yǒumíng de dà hé.',vn:'Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc.'},
   ],
   hanzi:[
     {c:'河',p:'hé',type:'左右结构 · Trái-phải',st:8,ord:'氵 trái → 可 phải',rad:'氵 (thuỷ – nước)',mean:'sông',
      tip:'氵(nước) + 可(có thể, âm đọc) → dòng NƯỚC chảy dài = SÔNG; 黄(vàng)+河(sông) = HOÀNG HÀ (sông có nước màu vàng).',
      cf:'何 (hé – "gì, nào", không có bộ 氵")',w:'黄河 / 河边'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nhắc đến những con sông lớn nổi tiếng của Trung Quốc là mọi người sẽ nghĩ đến Hoàng Hà.',answer:'只要提到中国有名的大河，大家就会想到黄河。',answerPy:'Zhǐyào tídào Zhōngguó yǒumíng de dà hé, dàjiā jiù huì xiǎngdào Huáng Hé.',
      note:'有名 diễn tả sự nổi tiếng (ôn lại đã học ở Bài 18).'},
     {promptLang:'vi',prompt:'Nếu bạn đến Trung Quốc thì nên đi xem Hoàng Hà một lần.',answer:'如果你来中国，就应该去看一次黄河。',answerPy:'Rúguǒ nǐ lái Zhōngguó, jiù yīnggāi qù kàn yí cì Huáng Hé.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'船',py:'chuán',pos:'Danh từ',vn:'thuyền, tàu',em:'🚢',lesson:4,
   explain:['Phương tiện di chuyển trên mặt nước.'],
   usage:'Danh từ; đi cùng động từ 坐: 坐船.',
   collo:['坐船','坐在船上','船票'],
   ex_zh:'我坐在船上，一边看一边照相。',ex_py:'Wǒ zuò zài chuán shang, yìbiān kàn yìbiān zhàoxiàng.',ex_vn:'Tôi ngồi trên thuyền, vừa ngắm vừa chụp ảnh.',
   exList:[
     {zh:'我坐在船上，一边看一边照相。',py:'Wǒ zuò zài chuán shang, yìbiān kàn yìbiān zhàoxiàng.',vn:'Tôi ngồi trên thuyền, vừa ngắm vừa chụp ảnh.'},
     {zh:'你终于来了，船马上就开了。',py:'Nǐ zhōngyú lái le, chuán mǎshàng jiù kāi le.',vn:'Bạn cuối cùng cũng đến rồi, thuyền sắp chạy rồi.'},
     {zh:'坐船虽然便宜，但是太慢了，要十四个小时。',py:'Zuò chuán suīrán piányi, dànshì tài màn le, yào shísì ge xiǎoshí.',vn:'Đi tàu tuy rẻ, nhưng chậm quá, phải mất mười bốn tiếng.'},
   ],
   hanzi:[
     {c:'船',p:'chuán',type:'左右结构 · Trái-phải',st:11,ord:'舟 trái → 㕣 phải',rad:'舟 (chu – thuyền)',mean:'thuyền, tàu',
      tip:'舟(hình con thuyền) + 㕣(cái miệng thung lũng, dòng nước) → thuyền đi trên DÒNG NƯỚC = THUYỀN, TÀU.',
      cf:'般 (bān – "loại", cũng có bộ 舟")',w:'船 / 坐船'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đi tàu tuy có thể ngắm cảnh, nhưng ngồi lâu quá, tôi hơi mệt.',answer:'坐船虽然能看风景，但是坐的时间太久，我有点儿累了。',answerPy:'Zuò chuán suīrán néng kàn fēngjǐng, dànshì zuò de shíjiān tài jiǔ, wǒ yǒudiǎnr lèi le.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn thích ngồi tàu thì chúng ta đi tàu đi.',answer:'如果你喜欢坐船，我们就坐船去吧。',answerPy:'Rúguǒ nǐ xǐhuan zuò chuán, wǒmen jiù zuò chuán qù ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'经过',py:'jīngguò',pos:'Động từ',vn:'đi ngang qua',em:'🛣️',lesson:4,
   explain:['Đi qua một nơi hoặc trải qua một quá trình.'],
   usage:'Động từ, mang tân ngữ là nơi chốn hoặc thời gian: 经过很多地方.',
   collo:['经过很多地方','经过这条街','经过一段时间'],
   ex_zh:'一路上经过了很多地方。',ex_py:'Yí lù shang jīngguòle hěn duō dìfang.',ex_vn:'Suốt chặng đường đi qua rất nhiều nơi.',
   exList:[
     {zh:'一路上经过了很多地方，每个地方都不一样。',py:'Yí lù shang jīngguòle hěn duō dìfang, měi ge dìfang dōu bù yíyàng.',vn:'Suốt chặng đường đi qua rất nhiều nơi, mỗi nơi đều khác nhau.'},
     {zh:'上下班的时候，我都会经过这条街。',py:'Shàng xià bān de shíhou, wǒ dōu huì jīngguò zhè tiáo jiē.',vn:'Lúc đi làm về, tôi đều đi ngang qua con phố này.'},
     {zh:'如果你经过我家，就进来喝杯茶吧。',py:'Rúguǒ nǐ jīngguò wǒ jiā, jiù jìnlai hē bēi chá ba.',vn:'Nếu bạn đi ngang qua nhà tôi thì ghé vào uống chén trà đi.'},
   ],
   hanzi:[
     {c:'经',p:'jīng',type:'左右结构 · Trái-phải',st:8,ord:'纟 trái → 圣 phải (giản thể)',rad:'纟 (mịch – tơ lụa)',mean:'trải qua, thường xuyên',
      tip:'纟(sợi tơ dệt) + phần phải (giản thể) → sợi dọc XUYÊN SUỐT tấm vải = ĐI QUA, TRẢI QUA.',
      cf:'轻 (qīng – "nhẹ", có bộ 车")',w:'经过 / 经常 / 已经'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc đi bệnh viện, tôi đều đi ngang qua một công viên.',answer:'去医院的时候，我都会经过一个公园。',answerPy:'Qù yīyuàn de shíhou, wǒ dōu huì jīngguò yí ge gōngyuán.',
      note:'……的时候 diễn tả thời điểm (ôn lại 街道 đã học ở Bài 15).'},
     {promptLang:'vi',prompt:'Nếu bạn đi ngang qua nhà tôi thì hãy ghé vào chơi.',answer:'如果你经过我家，就进来玩儿吧。',answerPy:'Rúguǒ nǐ jīngguò wǒ jiā, jiù jìnlai wánr ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'👂',label:'耳朵',py:'ěrduo',letter:'A'},
  {img:'🐴',label:'马',py:'mǎ',letter:'B'},
  {img:'🐦',label:'鸟',py:'niǎo',letter:'C'},
  {img:'😢',label:'哭',py:'kū',letter:'D'},
  {img:'🚢',label:'船',py:'chuán',letter:'E'},
  {img:'🔵',label:'蓝',py:'lán',letter:'F'},
];

var dialogData = [
  {scene:'在家 · Ở nhà (nói về con gái)',
   preQuiz:[
     {q:'con gái gần đây thích gì?',opts:['để tóc ra sau tai','tóc ngắn','đội mũ'],ans:0},
     {q:'điều đó khiến khuôn mặt trông thế nào?',opts:['xinh hơn một chút','già hơn','buồn cười'],ans:0},
     {q:'hồi nhỏ con gái thích gì?',opts:['tóc ngắn, giống con trai','tóc dài','đội mũ'],ans:0},
   ],
   lines:[
     {sp:0,zh:'女儿最近喜欢把头发放在耳朵后面，你知道为什么吗？',py:'Nǚ\'ér zuìjìn xǐhuan bǎ tóufa fàng zài ěrduo hòumiàn, nǐ zhīdào wèi shénme ma?',vn:'Con gái gần đây thích để tóc ra sau tai, em biết vì sao không?'},
     {sp:1,zh:'这样可以使她的脸看上去漂亮一些。',py:'Zhèyàng kěyǐ shǐ tā de liǎn kàn shangqu piàoliang yìxiē.',vn:'Như vậy có thể khiến khuôn mặt con trông xinh hơn một chút.'},
     {sp:0,zh:'我最近觉得她和以前不太一样了。',py:'Wǒ zuìjìn juéde tā hé yǐqián bú tài yíyàng le.',vn:'Gần đây anh thấy con khác trước nhiều rồi.'},
     {sp:1,zh:'女儿变化不小，她小时候喜欢短头发，像男孩子一样。',py:'Nǚ\'ér biànhuà bù xiǎo, tā xiǎoshíhou xǐhuan duǎn tóufa, xiàng nán háizi yíyàng.',vn:'Con gái thay đổi không nhỏ đâu, hồi nhỏ con thích để tóc ngắn, giống con trai vậy.'},
     {sp:0,zh:'我也想起来了。她现在慢慢地开始像个女孩子了。',py:'Wǒ yě xiǎng qilai le. Tā xiànzài mànman de kāishǐ xiàng ge nǚháizi le.',vn:'Anh cũng nhớ ra rồi. Bây giờ con dần dần bắt đầu giống con gái thật rồi.'},
   ]},
  {scene:'在看照片 · Đang xem ảnh',
   preQuiz:[
     {q:'ảnh chụp lúc nào?',opts:['cuộc thi cưỡi ngựa lần trước','sinh nhật','du lịch'],ans:0},
     {q:'người cưỡi nhanh nhất trong ảnh là ai?',opts:['小刚','小丽','同事'],ans:0},
     {q:'vì sao đồng nghiệp không nhận ra?',opts:['ngày thường mặc âu phục, khác lúc thi đấu','ảnh mờ','lâu không gặp'],ans:0},
   ],
   lines:[
     {sp:0,zh:'上次我们参加骑马比赛的照片，我选了几张洗出来了。',py:'Shàng cì wǒmen cānjiā qí mǎ bǐsài de zhàopiàn, wǒ xuǎnle jǐ zhāng xǐ chulai le.',vn:'Ảnh chúng ta chụp khi tham gia cuộc thi cưỡi ngựa lần trước, tôi chọn mấy tấm rửa ra rồi.'},
     {sp:1,zh:'快给我看看。骑得最快的这位是谁？',py:'Kuài gěi wǒ kànkan. Qí de zuì kuài de zhè wèi shì shéi?',vn:'Mau cho tôi xem. Vị này cưỡi nhanh nhất là ai vậy?'},
     {sp:0,zh:'你没看出来吗？他是小刚啊。',py:'Nǐ méi kàn chulai ma? Tā shì Xiǎogāng a.',vn:'Bạn không nhận ra à? Đó là Tiểu Cương đấy.'},
     {sp:1,zh:'怎么看上去跟现在不太一样？',py:'Zěnme kàn shangqu gēn xiànzài bú tài yíyàng?',vn:'Sao trông khác bây giờ vậy?'},
     {sp:0,zh:'他上班穿西服、衬衫，比赛的时候穿的是运动服。',py:'Tā shàng bān chuān xīfú, chènshān, bǐsài de shíhou chuān de shì yùndòngfú.',vn:'Anh ấy đi làm mặc âu phục, sơ mi, lúc thi đấu thì mặc đồ thể thao.'},
     {sp:1,zh:'他今天穿蓝西服，看上去像40多岁，还是穿运动服让他更年轻。',py:'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì, háishi chuān yùndòngfú ràng tā gèng niánqīng.',vn:'Hôm nay anh ấy mặc âu phục xanh, trông như hơn 40 tuổi, mặc đồ thể thao vẫn khiến anh ấy trẻ hơn.'},
   ]},
  {scene:'在小丽家 · Tại nhà chị Lệ',
   preQuiz:[
     {q:'朋友bao lâu không gặp小丽?',opts:['một năm','hai năm','ba năm'],ans:0},
     {q:'con gái của朋友sinh khi nào?',opts:['mùa thu năm ngoái','mùa hè năm ngoái','mùa xuân năm nay'],ans:0},
     {q:'con bé thích gì?',opts:['nghe bố bắt chước tiếng chim','đồ chơi','âm nhạc'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我们一年没见面了吧？',py:'Wǒmen yì nián méi jiànmiàn le ba?',vn:'Chúng ta một năm không gặp nhau rồi nhỉ?'},
     {sp:1,zh:'听说你都有女儿了？她多大了？',py:'Tīngshuō nǐ dōu yǒu nǚ\'ér le? Tā duō dà le?',vn:'Nghe nói bạn đã có con gái rồi à? Con bé bao nhiêu tuổi rồi?'},
     {sp:0,zh:'她去年秋天出生的，刚过完一岁生日。',py:'Tā qùnián qiūtiān chūshēng de, gāng guòwán yí suì shēngrì.',vn:'Con bé sinh vào mùa thu năm ngoái, vừa mới qua sinh nhật một tuổi.'},
     {sp:1,zh:'她喜欢什么？我送给她。',py:'Tā xǐhuan shénme? Wǒ sòng gěi tā.',vn:'Con bé thích gì? Để tôi tặng cho bé.'},
     {sp:0,zh:'她就喜欢听她爸爸学鸟叫。哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。',py:'Tā jiù xǐhuan tīng tā bàba xué niǎo jiào. Kū de shíhou, zhǐyào tā bàba xué xiǎo niǎo jiào, tā mǎshàng jiù ānjìng xialai le.',vn:'Con bé chỉ thích nghe bố nó bắt chước tiếng chim kêu. Lúc khóc, chỉ cần bố nó bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.'},
     {sp:1,zh:'啊？这个礼物我没办法送。',py:'Á? Zhège lǐwù wǒ méi bànfǎ sòng.',vn:'Hả? Món quà này tôi không tặng được đâu.'},
   ]},
  {scene:'độc bạch · Tự thuật (chuyến du lịch sông Hoàng Hà)',
   preQuiz:[
     {q:'tác giả đi xem gì?',opts:['黄河','长江','大海'],ans:0},
     {q:'tác giả ngồi ở đâu để ngắm cảnh?',opts:['thuyền','xe','máy bay'],ans:0},
     {q:'tác giả định làm gì với những tấm ảnh?',opts:['gửi cho bạn bè','đăng mạng','in ra treo'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这次旅游，我去了不少地方，每个地方都让我非常难忘。',py:'Zhè cì lǚyóu, wǒ qùle bù shǎo dìfang, měi ge dìfang dōu ràng wǒ fēicháng nánwàng.',vn:'Chuyến du lịch này, tôi đã đi qua không ít nơi, mỗi nơi đều khiến tôi nhớ mãi không quên.'},
     {sp:0,zh:'我先去看了黄河，黄河是中国有名的大河，我坐在船上，一边看一边照相。',py:'Wǒ xiān qù kànle Huáng Hé, Huáng Hé shì Zhōngguó yǒumíng de dà hé, wǒ zuò zài chuán shang, yìbiān kàn yìbiān zhàoxiàng.',vn:'Tôi trước tiên đi xem sông Hoàng Hà, Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc, tôi ngồi trên thuyền, vừa ngắm vừa chụp ảnh.'},
     {sp:0,zh:'一路上经过了很多地方，每个地方都不一样。',py:'Yí lù shang jīngguòle hěn duō dìfang, měi ge dìfang dōu bù yíyàng.',vn:'Suốt chặng đường đi qua rất nhiều nơi, mỗi nơi đều khác nhau.'},
     {sp:0,zh:'我想快点儿把照片发给大家，叫朋友们也高兴高兴。',py:'Wǒ xiǎng kuài diǎnr bǎ zhàopiàn fā gěi dàjiā, jiào péngyoumen yě gāoxìng gāoxìng.',vn:'Tôi muốn gửi ảnh cho mọi người sớm, để bạn bè cũng vui vẻ một chút.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'放在',right:'耳朵后面'},
  {left:'使她的',right:'脸看上去漂亮'},
  {left:'骑得',right:'最快'},
  {left:'一位',right:'老师'},
  {left:'蓝',right:'西服'},
  {left:'一张',right:'照片'},
  {left:'学',right:'鸟叫'},
  {left:'使脸看上去',right:'更漂亮。'},
  {left:'考试',right:'让我很担心。'},
  {left:'前边的车越开越慢，',right:'慢下来了。'},
  {left:'只要他爸爸学小鸟叫，',right:'她马上就安静下来了。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'女儿最近喜欢把头发放在',blank:'耳朵',post:'后面。',hint:'(tai)',ans:'耳朵'},
  {pre:'虽然今天有点儿累，但她的',blank:'脸',post:'看上去还是很健康。',hint:'(mặt, khuôn mặt)',ans:'脸'},
  {pre:'她以前喜欢',blank:'短',post:'头发。',hint:'(ngắn)',ans:'短'},
  {pre:'你会骑',blank:'马',post:'？',hint:'(ngựa)',ans:'马'},
  {pre:'我选择了几',blank:'张',post:'洗出来了。',hint:'(tờ, tấm)',ans:'张'},
  {pre:'骑得最快的这',blank:'位',post:'是谁？',hint:'(vị)',ans:'位'},
  {pre:'他今天穿',blank:'蓝',post:'西服。',hint:'(có màu xanh da trời)',ans:'蓝'},
  {pre:'她去年',blank:'秋',post:'天出生的。',hint:'(mùa thu)',ans:'秋'},
  {pre:'刚',blank:'过',post:'完一岁生日。',hint:'(ăn mừng, trải qua)',ans:'过'},
  {pre:'学小',blank:'鸟',post:'叫。',hint:'(chim)',ans:'鸟'},
  {pre:'一',blank:'哭',post:'，他爸爸就学小鸟叫。',hint:'(khóc)',ans:'哭'},
  {pre:'我先去看了',blank:'黄河',post:'。',hint:'(Hoàng Hà)',ans:'黄河'},
  {pre:'我坐在',blank:'船',post:'上。',hint:'(thuyền, tàu)',ans:'船'},
  {pre:'一路上',blank:'经过',post:'了很多地方。',hint:'(đi ngang qua)',ans:'经过'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['如果','你','把','头发','放','在','耳朵','后面','，','就','会','看上去','更','漂亮','。'],ans:'如果你把头发放在耳朵后面，就会看上去更漂亮。',audio:'如果你把头发放在耳朵后面，就会看上去更漂亮。'},
  {words:['如果','你','笑一笑','，','你的','脸','就','会','看上去','更','好看','。'],ans:'如果你笑一笑，你的脸就会看上去更好看。',audio:'如果你笑一笑，你的脸就会看上去更好看。'},
  {words:['你','没','看出来','吗','？','他','是','小刚','啊','。'],ans:'你没看出来吗？他是小刚啊。',audio:'你没看出来吗？他是小刚啊。'},
  {words:['只要','他','爸爸','学','小鸟','叫','，','她','马上','就','安静','下来','了','。'],ans:'只要他爸爸学小鸟叫，她马上就安静下来了。',audio:'只要他爸爸学小鸟叫，她马上就安静下来了。'},
  {words:['读书','使','我','快乐','。'],ans:'读书使我快乐。',audio:'读书使我快乐。'},
  {words:['考试','让','我','很','担心','。'],ans:'考试让我很担心。',audio:'考试让我很担心。'},
  {words:['穿','运动服','让','他','更','年轻','。'],ans:'穿运动服让他更年轻。',audio:'穿运动服让他更年轻。'},
  {words:['我','想','快点儿','把','照片','发给','大家','，','叫','朋友们','也','高兴高兴','。'],ans:'我想快点儿把照片发给大家，叫朋友们也高兴高兴。',audio:'我想快点儿把照片发给大家，叫朋友们也高兴高兴。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'这个字你出来能写吗？',
   opts:['这个字你能写出来吗？','这个字你出来能写吗？','这个字你能出来写吗？','这个字出来你能写吗？'],ans:0,
   exp:'出来 phải đứng SAU cả cụm động từ (能写), không chen vào giữa.'},
  {wrong:'天黑了下来，孩子们要回家了。',
   opts:['天黑下来了，孩子们要回家了。','天黑了下来，孩子们要回家了。','天下来黑了，孩子们要回家了。','天黑下了来，孩子们要回家了。'],ans:0,
   exp:'下来 phải đứng NGAY SAU tính từ (黑), 了 đặt SAU 下来, không đảo ngược.'},
  {wrong:'我想起你说的话不来了。',
   opts:['我想不起来你说的话了。','我想起你说的话不来了。','我不想起来你说的话了。','我想起来不你说的话了。'],ans:0,
   exp:'Phủ định 不 phải chen vào GIỮA 想 và 起来 (想不起来), không đặt sau tân ngữ.'},
  {wrong:'旅游很开心使我。',
   opts:['旅游使我很开心。','旅游很开心使我。','使旅游我很开心。','旅游使很开心我。'],ans:0,
   exp:'Cấu trúc 使/叫/让 + đối tượng + kết quả: 使+我(đối tượng)+很开心(kết quả), không đảo lộn.'},
  {wrong:'穿蓝色衣服她更漂亮让。',
   opts:['穿蓝色衣服让她更漂亮。','穿蓝色衣服她更漂亮让。','穿蓝色衣服让更漂亮她。','让穿蓝色衣服她更漂亮。'],ans:0,
   exp:'让 phải đứng NGAY SAU chủ ngữ gây khiến (穿蓝色衣服), trước đối tượng bị ảnh hưởng (她).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'女儿最近有什么变化？爸爸妈妈怎么看？',
     q_vn:'Gần đây con gái có thay đổi gì? Bố mẹ nhìn nhận thế nào?',
     hint:'喜欢把头发放耳朵后面，小时候喜欢短头发，现在慢慢像个女孩子了',
     sample:'女儿最近喜欢把头发放在耳朵后面，爸爸妈妈觉得她和以前不太一样了，她小时候喜欢短头发，像男孩子，但现在慢慢地开始像个女孩子了。',
     sample_vn:'Con gái gần đây thích để tóc ra sau tai, bố mẹ thấy con khác trước nhiều rồi, hồi nhỏ con thích tóc ngắn, giống con trai, nhưng bây giờ dần dần bắt đầu giống con gái thật rồi.',
     note:'使 diễn tả sự khiến cho (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'照片里骑得最快的人是谁？为什么同事没认出来？',
     q_vn:'Người cưỡi nhanh nhất trong ảnh là ai? Vì sao đồng nghiệp không nhận ra?',
     hint:'是小刚，因为他平时穿西服，比赛时穿运动服，看上去更年轻',
     sample:'照片里骑得最快的人是小刚，同事没认出来，因为他上班穿西服，比赛的时候穿运动服，看上去更年轻。',
     sample_vn:'Người cưỡi nhanh nhất trong ảnh là Tiểu Cương, đồng nghiệp không nhận ra, vì anh ấy đi làm mặc âu phục, lúc thi đấu mặc đồ thể thao, trông trẻ hơn.',
     note:'看上去 diễn tả sự đánh giá qua quan sát (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'朋友的女儿喜欢什么？哭的时候怎么才能安静下来？',
     q_vn:'Con gái của người bạn thích gì? Lúc khóc làm sao mới yên lặng được?',
     hint:'喜欢听爸爸学鸟叫，哭的时候爸爸学鸟叫就能安静下来',
     sample:'朋友的女儿喜欢听她爸爸学鸟叫，哭的时候，只要她爸爸学小鸟叫，她马上就安静下来了。',
     sample_vn:'Con gái của bạn thích nghe bố bắt chước tiếng chim kêu, lúc khóc, chỉ cần bố bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.',
     note:'安静下来 diễn tả sự chuyển từ động sang tĩnh.'},
    {q_zh:'这次旅游，作者印象最深的是什么？',
     q_vn:'Chuyến du lịch này, ấn tượng sâu sắc nhất của tác giả là gì?',
     hint:'黄河，坐在船上一边看一边照相，经过很多不一样的地方',
     sample:'这次旅游，作者印象最深的是黄河，他坐在船上，一边看一边照相，一路上经过了很多地方，每个地方都不一样。',
     sample_vn:'Chuyến du lịch này, ấn tượng sâu sắc nhất của tác giả là sông Hoàng Hà, anh ấy ngồi trên thuyền, vừa ngắm vừa chụp ảnh, suốt chặng đường đi qua rất nhiều nơi, mỗi nơi đều khác nhau.',
     note:'经过 diễn tả đi ngang qua (điểm từ vựng trọng tâm bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chỉ cần bạn để tóc ra sau tai là mẹ sẽ khen bạn xinh.', zh:'只要你把头发放在耳朵后面，妈妈就会说你很漂亮。', py:'Zhǐyào nǐ bǎ tóufa fàng zài ěrduo hòumiàn, māma jiù huì shuō nǐ hěn piàoliang.'},
  {vi:'Chỉ cần bạn tập thể dục mỗi ngày là khuôn mặt sẽ trông tinh thần hơn.', zh:'只要你天天运动，你的脸就会看上去更精神。', py:'Zhǐyào nǐ tiāntiān yùndòng, nǐ de liǎn jiù huì kàn shangqu gèng jīngshen.'},
  {vi:'Tuy tấm ảnh hơi cũ nhưng tôi vẫn nhận ra ngay.', zh:'虽然照片有点儿旧，但是我还是一下就认出来了。', py:'Suīrán zhàopiàn yǒudiǎnr jiù, dànshì wǒ háishi yíxià jiù rèn chulai le.'},
  {vi:'Chỉ cần nhìn thấy chim trên cây là em trai sẽ không khóc nữa.', zh:'只要看到树上的鸟，弟弟就不哭了。', py:'Zhǐyào kàndào shù shang de niǎo, dìdi jiù bù kū le.'},
  {vi:'Vận động khiến tôi khỏe mạnh.', zh:'运动使我健康。', py:'Yùndòng shǐ wǒ jiànkāng.'},
  {vi:'Ngày mưa khiến tôi cảm thấy rất dễ chịu.', zh:'下雨天让我觉得很舒服。', py:'Xià yǔ tiān ràng wǒ juéde hěn shūfu.'},
  {vi:'Lúc chúng tôi đi thuyền qua Hoàng Hà, suốt đường đã chụp rất nhiều ảnh.', zh:'我们坐船经过黄河的时候，一路上拍了很多照片。', py:'Wǒmen zuò chuán jīngguò Huáng Hé de shíhou, yílù shang pāile hěn duō zhàopiàn.'},
  {vi:'Tuy những nơi đi qua không nhiều nhưng mỗi nơi đều rất đẹp.', zh:'虽然经过的地方不多，但是每个地方都很美。', py:'Suīrán jīngguò de dìfang bù duō, dànshì měi ge dìfang dōu hěn měi.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Từ nay tôi sẽ nghĩ ra một cách học tiếng Trung tốt.', zh:'朋友想出来一个学汉语的好办法。', py:'Péngyou xiǎng chulai yí ge xué Hànyǔ de hǎo bànfǎ.'},
  {vi:'Bạn vẽ nhanh thật, một lát là vẽ xong rồi.', zh:'你画得真快，一会儿就画出来了。', py:'Nǐ huà de zhēn kuài, yíhuìr jiù huà chulai le.'},
  {vi:'Bạn nghe ra không? Đây là giọng của ai?', zh:'你听出来了吗？这是谁的声音？', py:'Nǐ tīng chulai le ma? Zhè shì shéi de shēngyīn?'},
  {vi:'Chiếc xe phía trước càng chạy càng chậm, dừng hẳn lại rồi.', zh:'前边的车越开越慢，停下来了。', py:'Qiánbian de chē yuè kāi yuè màn, tíng xialai le.'},
  {vi:'Đèn đột nhiên tối dần đi, mọi người đều hơi sợ.', zh:'灯突然暗下来了，大家都有点儿害怕。', py:'Dēng tūrán àn xialai le, dàjiā dōu yǒudiǎnr hàipà.'},
  {vi:'Xin lỗi, tôi không nhớ ra tên bạn nữa.', zh:'对不起，我想不起来你的名字了。', py:'Duìbuqǐ, wǒ xiǎng bu qǐlai nǐ de míngzi le.'},
  {vi:'Cắt tóc ngắn khiến cô ấy trông tinh thần hơn.', zh:'剪短头发让她看上去更精神。', py:'Jiǎn duǎn tóufa ràng tā kàn shangqu gèng jīngshen.'},
  {vi:'Tôi muốn sắp xếp hết những tấm ảnh này, cho vào album.', zh:'我想把这些照片都整理好，放进相册里。', py:'Wǒ xiǎng bǎ zhèxiē zhàopiàn dōu zhěnglǐ hǎo, fàng jìn xiàngcè li.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 19)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-19/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'你看，', blank:'树上那只鸟，红红的，嘴小小的，是什么鸟', post:'？',
       py:'Nǐ kàn, shù shang nà zhī niǎo, hónghóng de, zuǐ xiǎoxiǎo de, shì shénme niǎo?', vn:'Bạn xem, con chim trên cây kia, đỏ đỏ, mỏ nhỏ nhỏ, là chim gì vậy?'},
      {speaker:'男', pre:'', blank:'不知道，我也是第一次见', post:'。',
       py:'Bù zhīdào, wǒ yě shì dì-yī cì jiàn.', vn:'Không biết, tôi cũng là lần đầu thấy.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'别害怕，不要动，让我看一下你的耳朵', post:'。',
       py:'Bié hàipà, búyào dòng, ràng wǒ kàn yíxià nǐ de ěrduo.', vn:'Đừng sợ, đừng cử động, để tôi xem tai bạn một chút.'},
      {speaker:'女', pre:'医生，怎么样？没事吧？', blank:'我最近总是听不清别人说话', post:'。',
       py:'Yīshēng, zěnme yàng? Méi shì ba? Wǒ zuìjìn zǒngshì tīng bu qīng biéren shuōhuà.', vn:'Bác sĩ, thế nào? Không sao chứ? Gần đây tôi cứ nghe không rõ người khác nói.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'', blank:'都几点了，儿子的房间里一点儿声音都没有，他还在睡觉吗', post:'？',
       py:'Dōu jǐ diǎn le, érzi de fángjiān li yìdiǎnr shēngyīn dōu méiyǒu, tā hái zài shuìjiào ma?', vn:'Mấy giờ rồi, phòng con trai không có tiếng động gì, con vẫn đang ngủ à?'},
      {speaker:'男', pre:'没有，', blank:'他已经起床了，现在在洗脸呢', post:'。',
       py:'Méiyǒu, tā yǐjīng qǐchuáng le, xiànzài zài xǐliǎn ne.', vn:'Không có, con dậy rồi, đang rửa mặt đấy.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'你会骑马？跟谁学的', post:'？',
       py:'Nǐ huì qí mǎ? Gēn shéi xué de?', vn:'Bạn biết cưỡi ngựa à? Học từ ai vậy?'},
      {speaker:'女', pre:'我爷爷，', blank:'他很喜欢骑马，而且骑得很好', post:'。',
       py:'Wǒ yéye, tā hěn xǐhuan qí mǎ, érqiě qí de hěn hǎo.', vn:'Ông nội tôi, ông rất thích cưỡi ngựa, mà lại cưỡi rất giỏi.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'', blank:'你穿的这件红色运动服真好看', post:'。',
       py:'Nǐ chuān de zhè jiàn hóngsè yùndòngfú zhēn hǎokàn.', vn:'Bộ đồ thể thao đỏ bạn đang mặc đẹp thật.'},
      {speaker:'女', pre:'谢谢，', blank:'我觉得穿上它，让我年轻了不少', post:'。',
       py:'Xièxie, wǒ juéde chuānshang tā, ràng wǒ niánqīngle bù shǎo.', vn:'Cảm ơn, tôi thấy mặc nó vào, khiến tôi trẻ hơn hẳn.'},
    ]},
    {num:6, lines:[
      {pre:'上下班的时候，我都会经过这条街。', blank:'街道两边的树，还有树上的小鸟，会使我觉得很快乐', post:'。',
       py:'Shàng xià bān de shíhou, wǒ dōu huì jīngguò zhè tiáo jiē. Jiēdào liǎng biān de shù, hái yǒu shù shang de xiǎo niǎo, huì shǐ wǒ juéde hěn kuàilè.', vn:'Lúc đi làm về, tôi đều đi ngang qua con phố này. Hàng cây hai bên đường phố, còn có chim nhỏ trên cây, khiến tôi cảm thấy rất vui.'},
    ]},
    {num:7, lines:[
      {pre:'最近，我家小雨一直哭，说耳朵疼。我带他去医院，', blank:'但是医生说他的耳朵没问题，不用吃药，多喝些水就可以了', post:'。',
       py:'Zuìjìn, wǒ jiā Xiǎoyǔ yìzhí kū, shuō ěrduo téng. Wǒ dài tā qù yīyuàn, dànshì yīshēng shuō tā de ěrduo méi wèntí, búyòng chī yào, duō hē xiē shuǐ jiù kěyǐ le.', vn:'Gần đây, bé Tiểu Vũ nhà tôi cứ khóc mãi, nói tai đau. Tôi đưa bé đi bệnh viện, nhưng bác sĩ nói tai bé không có vấn đề gì, không cần uống thuốc, uống nhiều nước là được.'},
    ]},
    {num:8, lines:[
      {pre:'这张照片让我想起了我的家，', blank:'以前我家住在黄河边上，后来因为爸爸工作的关系搬到了这里', post:'。',
       py:'Zhè zhāng zhàopiàn ràng wǒ xiǎngqǐle wǒ de jiā, yǐqián wǒ jiā zhù zài Huáng Hé biānshang, hòulái yīnwèi bàba gōngzuò de guānxi bāndàole zhèli.', vn:'Tấm ảnh này khiến tôi nhớ đến nhà mình, trước đây nhà tôi sống ở bên bờ Hoàng Hà, sau đó vì công việc của bố nên chuyển đến đây.'},
    ]},
    {num:9, lines:[
      {pre:'我一直在找这本书，', blank:'没想到今天下班路过一家书店时看见了它，我太高兴了', post:'。',
       py:'Wǒ yìzhí zài zhǎo zhè běn shū, méi xiǎngdào jīntiān xiàbān lùguò yì jiā shūdiàn shí kànjiànle tā, wǒ tài gāoxìng le.', vn:'Tôi cứ tìm mãi quyển sách này, không ngờ hôm nay tan làm đi ngang qua một hiệu sách lại thấy nó, tôi vui quá.'},
    ]},
    {num:10, lines:[
      {pre:'你看，', blank:'这张照片是前年夏天照的，那时她比较瘦，还是短头发', post:'。',
       py:'Nǐ kàn, zhè zhāng zhàopiàn shì qiánnián xiàtiān zhào de, nà shí tā bǐjiào shòu, háishi duǎn tóufa.', vn:'Bạn xem, tấm ảnh này chụp hè năm kia đấy, lúc đó cô ấy khá gầy, vẫn để tóc ngắn.'},
    ]},
  ],
  mc: [
    {num:11, options:['他不高兴了','眼睛里有东西','不喜欢刮风'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'你哭了', post:'？', py:'Nǐ kū le?', vn:'Bạn khóc à?'},
       {speaker:'男', pre:'没有啊，刚才风刮得太大，', blank:'眼睛里进东西了', post:'。', py:'Méiyǒu a, gāngcái fēng guā de tài dà, yǎnjing li jìn dōngxi le.', vn:'Không có, vừa nãy gió thổi to quá, có vật gì vào mắt rồi.'},
     ],
     explain:'女：你哭了？男：没有啊，刚才风刮得太大，眼睛里进东西了。问：男的怎么了？ → 眼睛里有东西。'},
    {num:12, options:['她骑得不快','她不太小心','她会骑马'], ans:2,
     lines:[
       {speaker:'男', pre:'小心点儿，', blank:'别骑太快了', post:'。', py:'Xiǎoxīn diǎnr, bié qí tài kuài le.', vn:'Cẩn thận chút, đừng cưỡi nhanh quá.'},
       {speaker:'女', pre:'放心，', blank:'我又不是第一次骑马', post:'。', py:'Fàngxīn, wǒ yòu bú shì dì-yī cì qí mǎ.', vn:'Yên tâm, tôi cũng đâu phải lần đầu cưỡi ngựa.'},
     ],
     explain:'男：小心点儿，别骑太快了。女：放心，我又不是第一次骑马。问：女的是什么意思？ → 她会骑马。'},
    {num:13, options:['睡觉','吃糖','起床'], ans:0,
     lines:[
       {speaker:'男', pre:'都这么晚了，', blank:'你怎么还吃糖', post:'？', py:'Dōu zhème wǎn le, nǐ zěnme hái chī táng?', vn:'Muộn thế này rồi, sao bạn còn ăn kẹo?'},
       {speaker:'女', pre:'不吃了，', blank:'我现在就去刷牙洗脸', post:'。', py:'Bù chī le, wǒ xiànzài jiù qù shuā yá xǐliǎn.', vn:'Không ăn nữa, tôi đi đánh răng rửa mặt ngay đây.'},
     ],
     explain:'男：都这么晚了，你怎么还吃糖？女：不吃了，我现在就去刷牙洗脸。问：女的打算做什么？ → 睡觉。'},
    {num:14, options:['坐船','坐公共汽车','打车'], ans:1,
     lines:[
       {speaker:'男', pre:'你终于来了，', blank:'船马上就开了', post:'。', py:'Nǐ zhōngyú lái le, chuán mǎshàng jiù kāi le.', vn:'Bạn cuối cùng cũng đến rồi, thuyền sắp chạy rồi.'},
       {speaker:'女', pre:'我没想到坐公共汽车要花这么长时间，', blank:'早知道就打车来了', post:'。', py:'Wǒ méi xiǎngdào zuò gōnggòng qìchē yào huā zhème cháng shíjiān, zǎo zhīdào jiù dǎchē lái le.', vn:'Tôi không ngờ đi xe buýt lại mất nhiều thời gian thế, biết vậy thì bắt taxi đến rồi.'},
     ],
     explain:'男：你终于来了，船马上就开了。女：我没想到坐公共汽车要花这么长时间，早知道就打车来了。问：女的是怎么来这儿的？ → 坐公共汽车。'},
    {num:15, options:['他喜欢做面条','女的过生日','面条很好吃'], ans:1,
     lines:[
       {speaker:'男', pre:'过生日要吃面条，这是我第一次做面条，', blank:'看看好吃不好吃', post:'。', py:'Guò shēngrì yào chī miàntiáo, zhè shì wǒ dì-yī cì zuò miàntiáo, kànkan hǎochī bù hǎochī.', vn:'Sinh nhật phải ăn mì, đây là lần đầu tiên tôi làm mì, xem thử ngon không.'},
       {speaker:'女', pre:'', blank:'一定很好吃，谢谢你', post:'！', py:'Yídìng hěn hǎochī, xièxie nǐ!', vn:'Chắc chắn ngon lắm, cảm ơn bạn!'},
     ],
     explain:'男：过生日要吃面条，这是我第一次做面条，看看好吃不好吃。女：一定很好吃，谢谢你！问：男的为什么要做面条？ → 女的过生日。'},
    {num:16, options:['喜欢玩儿游戏','看错了一个人','去开花园的灯'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'刚才你去后面的花园了', post:'？', py:'Gāngcái nǐ qù hòumian de huāyuán le?', vn:'Vừa nãy bạn ra vườn hoa phía sau à?'},
       {speaker:'男', pre:'没有，', blank:'我一直在家里玩儿电脑游戏', post:'。', py:'Méiyǒu, wǒ yìzhí zài jiā li wánr diànnǎo yóuxì.', vn:'Không có, tôi cứ ở nhà chơi game máy tính mãi.'},
       {speaker:'女', pre:'那是我看错了，', blank:'那个人看上去真像你', post:'。', py:'Nà shì wǒ kàn cuò le, nàge rén kàn shangqu zhēn xiàng nǐ.', vn:'Vậy là tôi nhìn nhầm rồi, người đó trông giống bạn thật đấy.'},
       {speaker:'男', pre:'花园里没有灯，', blank:'看错了也不奇怪', post:'。', py:'Huāyuán li méiyǒu dēng, kàn cuò le yě bù qíguài.', vn:'Vườn hoa không có đèn, nhìn nhầm cũng không lạ.'},
     ],
     explain:'女：刚才你去后面的花园了？男：没有，我一直在家里玩儿电脑游戏。女：那是我看错了，那个人看上去真像你。男：花园里没有灯，看错了也不奇怪。问：关于女的，可以知道什么？ → 看错了一个人。'},
    {num:17, options:['担心男的的身体','耳朵进水了','游泳很小心'], ans:1,
     lines:[
       {speaker:'男', pre:'小丽，', blank:'你怎么了', post:'？', py:'Xiǎolì, nǐ zěnme le?', vn:'Tiểu Lệ, bạn sao thế?'},
       {speaker:'女', pre:'刚才游泳时耳朵进水了，', blank:'现在耳朵里一直不舒服', post:'。', py:'Gāngcái yóuyǒng shí ěrduo jìn shuǐ le, xiànzài ěrduo li yìzhí bù shūfu.', vn:'Vừa nãy bơi bị nước vào tai, giờ trong tai cứ khó chịu mãi.'},
       {speaker:'男', pre:'过来，我帮你看一下。', blank:'现在好些了吗？下次小心点儿', post:'。', py:'Guòlai, wǒ bāng nǐ kàn yíxià. Xiànzài hǎo xiē le ma? Xiàcì xiǎoxīn diǎnr.', vn:'Lại đây, tôi xem giúp bạn chút. Bây giờ đỡ hơn chưa? Lần sau cẩn thận hơn nhé.'},
       {speaker:'女', pre:'好多了，', blank:'让你担心了', post:'。', py:'Hǎo duō le, ràng nǐ dānxīn le.', vn:'Đỡ nhiều rồi, để bạn lo lắng rồi.'},
     ],
     explain:'男：小丽，你怎么了？女：刚才游泳时耳朵进水了，现在耳朵里一直不舒服。男：过来，我帮你看一下。现在好些了吗？下次小心点儿。女：好多了，让你担心了。问：女的怎么了？ → 耳朵进水了。'},
    {num:18, options:['白色','蓝色','黑色'], ans:1,
     lines:[
       {speaker:'女', pre:'先生，', blank:'您看这件衬衫怎么样', post:'？', py:'Xiānsheng, nín kàn zhè jiàn chènshān zěnme yàng?', vn:'Thưa anh, anh xem cái áo sơ mi này thế nào?'},
       {speaker:'男', pre:'还不错，除了白色，', blank:'还有其他颜色的吗', post:'？', py:'Hái búcuò, chúle báisè, hái yǒu qítā yánsè de ma?', vn:'Cũng được, ngoài màu trắng ra, còn có màu khác không?'},
       {speaker:'女', pre:'还有蓝色和黑色的，', blank:'拿一件您试试', post:'？', py:'Hái yǒu lánsè hé hēisè de, ná yí jiàn nín shìshi?', vn:'Còn có màu xanh và màu đen nữa, lấy một cái anh mặc thử nhé?'},
       {speaker:'男', pre:'好，', blank:'蓝色会让我的脸看上去更年轻些', post:'。', py:'Hǎo, lánsè huì ràng wǒ de liǎn kàn shangqu gèng niánqīng xiē.', vn:'Được, màu xanh sẽ khiến khuôn mặt tôi trông trẻ hơn một chút.'},
     ],
     explain:'女：先生，您看这件衬衫怎么样？男：还不错，除了白色，还有其他颜色的吗？女：还有蓝色和黑色的，拿一件您试试？男：好，蓝色会让我的脸看上去更年轻些。问：男的想试哪种颜色的衬衫？ → 蓝色。'},
    {num:19, options:['感冒了','没洗脸','要买西药'], ans:0,
     lines:[
       {speaker:'男', pre:'你的脸色看上去不太好，', blank:'哪儿不舒服啊', post:'？', py:'Nǐ de liǎnsè kàn shangqu bú tài hǎo, nǎr bù shūfu a?', vn:'Sắc mặt bạn trông không tốt lắm, chỗ nào khó chịu vậy?'},
       {speaker:'女', pre:'我感冒了，', blank:'都快一个星期了', post:'。', py:'Wǒ gǎnmào le, dōu kuài yí ge xīngqī le.', vn:'Tôi bị cảm rồi, sắp một tuần rồi.'},
       {speaker:'男', pre:'我去药店给你买点儿药吧，', blank:'买西药还是中药', post:'？', py:'Wǒ qù yàodiàn gěi nǐ mǎi diǎnr yào ba, mǎi xīyào háishi zhōngyào?', vn:'Tôi đi hiệu thuốc mua thuốc cho bạn nhé, mua thuốc tây hay thuốc bắc?'},
       {speaker:'女', pre:'好，', blank:'买点儿中药吧', post:'。', py:'Hǎo, mǎi diǎnr zhōngyào ba.', vn:'Được, mua chút thuốc bắc đi.'},
     ],
     explain:'男：你的脸色看上去不太好，哪儿不舒服啊？女：我感冒了，都快一个星期了。男：我去药店给你买点儿药吧，买西药还是中药？女：好，买点儿中药吧。问：关于女的，可以知道什么？ → 感冒了。'},
    {num:20, options:['买船票','买机票','回国'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'回国的船票买好了吗', post:'？', py:'Huí guó de chuánpiào mǎihǎo le ma?', vn:'Vé tàu về nước mua được chưa?'},
       {speaker:'女', pre:'坐船虽然便宜，但是太慢了，', blank:'要十四个小时', post:'。', py:'Zuò chuán suīrán piányi, dànshì tài màn le, yào shísì ge xiǎoshí.', vn:'Đi tàu tuy rẻ, nhưng chậm quá, phải mất mười bốn tiếng.'},
       {speaker:'男', pre:'那我们还是坐飞机吧，你去买两张机票，', blank:'下周末的', post:'。', py:'Nà wǒmen háishi zuò fēijī ba, nǐ qù mǎi liǎng zhāng jīpiào, xià zhōumò de.', vn:'Vậy chúng ta đi máy bay thì hơn, bạn đi mua hai vé máy bay, cuối tuần sau nhé.'},
       {speaker:'女', pre:'好的，', blank:'我现在就去', post:'。', py:'Hǎo de, wǒ xiànzài jiù qù.', vn:'Được, tôi đi ngay đây.'},
     ],
     explain:'男：回国的船票买好了吗？女：坐船虽然便宜，但是太慢了，要十四个小时。男：那我们还是坐飞机吧，你去买两张机票，下周末的。女：好的，我现在就去。问：女的要去做什么？ → 买机票。'},
  ],
};
