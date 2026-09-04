// ══════════════════════════════════════════
// DATA — HSK3 Bài 13: 我是走回来的 (Anh đi bộ về)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'终于',py:'zhōngyú',pos:'Phó từ',vn:'cuối cùng',em:'🏁',lesson:1,
   explain:['Diễn tả sau một thời gian dài chờ đợi, sự việc cuối cùng cũng xảy ra.'],
   usage:'Phó từ, đứng trước động từ hoặc tính từ: 终于 + V/Adj.',
   collo:['终于回来了','终于到了','终于成功了'],
   ex_zh:'你终于回来了！',ex_py:'Nǐ zhōngyú huílai le!',ex_vn:'Anh cuối cùng cũng về rồi!',
   exList:[
     {zh:'你终于回来了！从哪儿买回来这么多东西啊？',py:'Nǐ zhōngyú huílai le! Cóng nǎr mǎi huilai zhème duō dōngxi a?',vn:'Anh cuối cùng cũng về rồi! Mua ở đâu về nhiều đồ thế?'},
     {zh:'我终于找到了那家咖啡店。',py:'Wǒ zhōngyú zhǎodàole nà jiā kāfēidiàn.',vn:'Tôi cuối cùng cũng tìm thấy quán cà phê đó.'},
     {zh:'等了很久，火车终于来了。',py:'Děngle hěn jiǔ, huǒchē zhōngyú lái le.',vn:'Chờ mãi, cuối cùng tàu hoả cũng đến.'},
   ],
   hanzi:[
     {c:'终',p:'zhōng',type:'左右结构 · Trái-phải',st:8,ord:'纟 trái → 冬 phải',rad:'纟 (mịch – tơ lụa)',mean:'cuối cùng, kết thúc',
      tip:'纟(sợi chỉ, dệt vải) + 冬(mùa đông, hết năm) → sợi chỉ dệt đến hết năm = KẾT THÚC, CUỐI CÙNG.',
      cf:'冬 (dōng – "mùa đông", không có bộ 纟")',w:'终于 / 最终'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đợi nửa tiếng, xe buýt cuối cùng cũng đến rồi.',answer:'等了半个小时，公共汽车终于来了。',answerPy:'Děngle bàn ge xiǎoshí, gōnggòng qìchē zhōngyú lái le.',
      note:'终于 đứng trước động từ, diễn tả sự việc cuối cùng cũng xảy ra sau thời gian dài.'},
     {promptLang:'vi',prompt:'Vì cuối cùng cũng tìm được nên tôi rất vui.',answer:'因为终于找到了，所以我很高兴。',answerPy:'Yīnwèi zhōngyú zhǎodào le, suǒyǐ wǒ hěn gāoxìng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:2,zh:'爷爷',py:'yéye',pos:'Danh từ',vn:'ông nội',em:'👴',lesson:1,
   explain:['Cách gọi cha của cha (ông nội) trong gia đình.'],
   usage:'Danh từ xưng hô; thường đi cùng 奶奶 thành cặp.',
   collo:['爷爷奶奶','看看爷爷','爷爷的礼物'],
   ex_zh:'这是给爷爷的礼物。',ex_py:'Zhè shì gěi yéye de lǐwù.',ex_vn:'Đây là quà tặng cho ông nội.',
   exList:[
     {zh:'这是给爷爷的礼物，明天我们一起送过去，看看爷爷奶奶。',py:'Zhè shì gěi yéye de lǐwù, míngtiān wǒmen yìqǐ sòng guoqu, kànkan yéye nǎinai.',vn:'Đây là quà tặng cho ông nội, mai chúng ta cùng mang qua, thăm ông bà nội.'},
     {zh:'爷爷今年七十岁了。',py:'Yéye jīnnián qīshí suì le.',vn:'Ông nội năm nay bảy mươi tuổi rồi.'},
     {zh:'爷爷，这本书我没看过，是您新买的吗？',py:'Yéye, zhè běn shū wǒ méi kànguo, shì nín xīn mǎi de ma?',vn:'Ông ơi, quyển sách này cháu chưa xem qua, là ông mới mua à?'},
   ],
   hanzi:[
     {c:'爷',p:'yé',type:'上下结构 · Trên-dưới',st:6,ord:'父 trên → 一 dưới',rad:'父 (phụ – cha)',mean:'ông',
      tip:'父(cha) + 一(số một, bậc cao nhất) → người cha ở BẬC TRÊN CÙNG trong nhà = ÔNG.',
      cf:'爸 (bà – "cha", có bộ 巴")',w:'爷爷 / 大爷'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội của bạn tôi năm nay tám mươi tuổi rồi.',answer:'我朋友的爷爷今年八十岁了。',answerPy:'Wǒ péngyou de yéye jīnnián bāshí suì le.',
      note:'岁 chỉ tuổi tác, đi cùng con số.'},
     {promptLang:'vi',prompt:'Tuy ông nội đã già nhưng vẫn rất khoẻ mạnh.',answer:'虽然爷爷已经老了，但是他还是很健康。',answerPy:'Suīrán yéye yǐjīng lǎo le, dànshì tā háishi hěn jiànkāng.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:3,zh:'礼物',py:'lǐwù',pos:'Danh từ',vn:'quà biếu, quà tặng',em:'🎁',lesson:1,
   explain:['Vật dùng để tặng, biếu người khác thể hiện tình cảm.'],
   usage:'Danh từ; đi cùng động từ 送/买/给: 送礼物, 买礼物.',
   collo:['送礼物','买礼物','爷爷的礼物'],
   ex_zh:'这是给爷爷的礼物。',ex_py:'Zhè shì gěi yéye de lǐwù.',ex_vn:'Đây là quà tặng cho ông nội.',
   exList:[
     {zh:'这是给爷爷的礼物，明天我们一起送过去。',py:'Zhè shì gěi yéye de lǐwù, míngtiān wǒmen yìqǐ sòng guoqu.',vn:'Đây là quà tặng cho ông nội, mai chúng ta cùng mang qua.'},
     {zh:'这本书我没看过，是您新买的礼物吗？',py:'Zhè běn shū wǒ méi kànguo, shì nín xīn mǎi de lǐwù ma?',vn:'Quyển sách này tôi chưa xem qua, là món quà ông mới mua à?'},
     {zh:'爸爸从国外带回来一些礼物。',py:'Bàba cóng guówài dài huilai yìxiē lǐwù.',vn:'Bố mang một ít quà từ nước ngoài về.'},
   ],
   hanzi:[
     {c:'礼',p:'lǐ',type:'左右结构 · Trái-phải',st:5,ord:'礻 trái → 乚 phải',rad:'礻 (kỳ – lễ, thần)',mean:'lễ nghi, quà',
      tip:'礻(bộ thị, liên quan nghi lễ cúng tế) + 乚(nét cong) → NGHI LỄ trang trọng, mở rộng thành LỄ VẬT, QUÀ TẶNG.',
      cf:'衣 (yī – "áo", không có bộ 礻")',w:'礼物 / 送礼'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai mang một chiếc bánh sinh nhật từ cửa hàng về.',answer:'哥哥从商店带回来一个生日蛋糕。',answerPy:'Gēge cóng shāngdiàn dài huilai yí ge shēngrì dàngāo.',
      note:'带回来 = bổ ngữ xu hướng kép (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn không biết mua quà gì thì tôi có thể giúp bạn.',answer:'如果你不知道买什么礼物，我就可以帮你。',answerPy:'Rúguǒ nǐ bù zhīdào mǎi shénme lǐwù, wǒ jiù kěyǐ bāng nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:4,zh:'奶奶',py:'nǎinai',pos:'Danh từ',vn:'bà nội',em:'👵',lesson:1,
   explain:['Cách gọi mẹ của cha (bà nội) trong gia đình.'],
   usage:'Danh từ xưng hô; thường đi cùng 爷爷 thành cặp.',
   collo:['爷爷奶奶','看看奶奶','奶奶做的菜'],
   ex_zh:'明天我们一起送过去，看看爷爷奶奶。',ex_py:'Míngtiān wǒmen yìqǐ sòng guoqu, kànkan yéye nǎinai.',ex_vn:'Mai chúng ta cùng mang qua, thăm ông bà nội.',
   exList:[
     {zh:'明天我们一起送过去，看看爷爷奶奶。',py:'Míngtiān wǒmen yìqǐ sòng guoqu, kànkan yéye nǎinai.',vn:'Mai chúng ta cùng mang qua, thăm ông bà nội.'},
     {zh:'奶奶做的菜特别好吃。',py:'Nǎinai zuò de cài tèbié hǎochī.',vn:'Món ăn bà nội nấu đặc biệt ngon.'},
     {zh:'奶奶今年身体很健康。',py:'Nǎinai jīnnián shēntǐ hěn jiànkāng.',vn:'Năm nay sức khoẻ bà nội rất tốt.'},
   ],
   hanzi:[
     {c:'奶',p:'nǎi',type:'左右结构 · Trái-phải',st:5,ord:'女 trái → 乃 phải',rad:'女 (nữ)',mean:'bà, sữa',
      tip:'女(nữ) + 乃(bèn, mới, ý chỉ nuôi dưỡng) → người PHỤ NỮ nuôi dưỡng con cháu = BÀ; mở rộng nghĩa SỮA.',
      cf:'奴 (nú – "nô lệ", có 又 thay vì 乃")',w:'奶奶 / 牛奶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món mì bà nội nấu đặc biệt ngon.',answer:'奶奶做的面条特别好吃。',answerPy:'Nǎinai zuò de miàntiáo tèbié hǎochī.',
      note:'的 nối định ngữ 奶奶做 với danh từ 菜.'},
     {promptLang:'vi',prompt:'Chỉ cần bà nội khoẻ mạnh thì cả nhà đều vui.',answer:'只要奶奶健康，全家人就都高兴。',answerPy:'Zhǐyào nǎinai jiànkāng, quánjiā rén jiù dōu gāoxìng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:5,zh:'遇到',py:'yùdào',pos:'Động từ',vn:'tình cờ gặp',em:'🤝',lesson:2,
   explain:['Bất ngờ gặp một người hoặc sự việc nào đó, không hẹn trước.'],
   usage:'Động từ, mang tân ngữ là người hoặc sự việc: 遇到 + [người/vấn đề].',
   collo:['在路上遇到','遇到问题','遇到老同学'],
   ex_zh:'她是我今天在路上遇到的一个老同学。',ex_py:'Tā shì wǒ jīntiān zài lùshang yùdào de yí ge lǎo tóngxué.',ex_vn:'Cô ấy là một người bạn học cũ tôi tình cờ gặp trên đường hôm nay.',
   exList:[
     {zh:'她是我今天在路上遇到的一个老同学。',py:'Tā shì wǒ jīntiān zài lùshang yùdào de yí ge lǎo tóngxué.',vn:'Cô ấy là một người bạn học cũ tôi tình cờ gặp trên đường hôm nay.'},
     {zh:'那位老人遇到了问题。',py:'Nà wèi lǎorén yùdàole wèntí.',vn:'Cụ già đó gặp phải vấn đề.'},
     {zh:'好久不见！没想到在这儿遇到你了。',py:'Hǎojiǔ bú jiàn! Méi xiǎngdào zài zhèr yùdào nǐ le.',vn:'Lâu rồi không gặp! Không ngờ lại gặp bạn ở đây.'},
   ],
   hanzi:[
     {c:'遇',p:'yù',type:'半包围结构 · Bán bao vây',st:12,ord:'辶 ngoài → 禺 trong',rad:'辶 (sước – đi)',mean:'gặp gỡ',
      tip:'辶(đi đường) + 禺(hình dáng con khỉ, ý chỉ bất ngờ) → đi đường bất ngờ GẶP GỠ ai đó.',
      cf:'偶 (ǒu – "ngẫu nhiên", có bộ 亻")',w:'遇到 / 遇见'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lâu quá không gặp! Không ngờ lại gặp bạn ở siêu thị.',answer:'好久不见！没想到在超市遇到你了。',answerPy:'Hǎojiǔ bú jiàn! Méi xiǎngdào zài chāoshì yùdào nǐ le.',
      note:'没想到 diễn tả sự bất ngờ.'},
     {promptLang:'vi',prompt:'Nếu bạn gặp vấn đề gì thì cứ hỏi tôi.',answer:'如果你遇到什么问题，就问我吧。',answerPy:'Rúguǒ nǐ yùdào shénme wèntí, jiù wèn wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'一边',py:'yìbiān',pos:'Phó từ',vn:'vừa (dùng để liên kết hai hành động xảy ra cùng lúc)',em:'🔀',lesson:2,
   explain:['Dùng thành cặp 一边……一边…… để diễn tả hai hành động xảy ra đồng thời.'],
   usage:'一边 + V1 + 一边 + V2; có thể lược bỏ 一 thành 边……边……',
   collo:['一边喝咖啡一边聊天儿','一边吃一边看','边说边笑'],
   ex_zh:'一边喝咖啡一边说了些过去的事。',ex_py:'Yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.',ex_vn:'Vừa uống cà phê vừa nói chuyện xưa.',
   exList:[
     {zh:'是啊，一边喝咖啡一边说了些过去的事。',py:'Shì a, yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.',vn:'Đúng vậy, vừa uống cà phê vừa nói chuyện xưa.'},
     {zh:'妈妈一边唱歌一边做饭。',py:'Māma yìbiān chànggē yìbiān zuò fàn.',vn:'Mẹ vừa hát vừa nấu cơm.'},
     {zh:'我丈夫喜欢一边吃早饭一边看报纸。',py:'Wǒ zhàngfu xǐhuan yìbiān chī zǎofàn yìbiān kàn bàozhǐ.',vn:'Chồng tôi thích vừa ăn sáng vừa đọc báo.'},
   ],
   hanzi:[
     {c:'边',p:'biān',type:'半包围结构 · Bán bao vây',st:5,ord:'辶 ngoài → 力 trong',rad:'辶 (sước – đi)',mean:'bên cạnh',
      tip:'辶(đi) + 力(sức lực, giản thể từ chữ phồn thể 邊) → đường viền BÊN CẠNH khi di chuyển.',
      cf:'力 (lì – "sức lực", không có bộ 辶")',w:'一边 / 旁边 / 那边'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em gái vừa nghe nhạc vừa làm bài tập.',answer:'妹妹一边听音乐一边做作业。',answerPy:'Mèimei yìbiān tīng yīnyuè yìbiān zuò zuòyè.',
      note:'一边……一边…… diễn tả hai hành động xảy ra cùng lúc (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Thầy giáo vừa nói vừa cười.',answer:'老师边说边笑。',answerPy:'Lǎoshī biān shuō biān xiào.',
      note:'边……边…… là dạng lược bỏ 一 của 一边……一边…….'},
   ]},

  {n:7,zh:'过去',py:'guòqù',pos:'Danh từ',vn:'quá khứ',em:'⏳',lesson:2,
   explain:['Khoảng thời gian đã trôi qua, trước hiện tại.'],
   usage:'Danh từ, thường làm định ngữ: 过去的事; cũng dùng làm trạng ngữ chỉ thời gian trước đây.',
   collo:['过去的事','过去的时候','说过去的事'],
   ex_zh:'一边喝咖啡一边说了些过去的事。',ex_py:'Yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.',ex_vn:'Vừa uống cà phê vừa nói chuyện xưa.',
   exList:[
     {zh:'是啊，一边喝咖啡一边说了些过去的事。',py:'Shì a, yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.',vn:'Đúng vậy, vừa uống cà phê vừa nói chuyện xưa.'},
     {zh:'十年过去了，现在他已经是校长了。',py:'Shí nián guòqu le, xiànzài tā yǐjīng shì xiàozhǎng le.',vn:'Mười năm đã trôi qua, giờ anh ấy đã là hiệu trưởng rồi.'},
     {zh:'方校长的办公室过去在四层。',py:'Fāng xiàozhǎng de bàngōngshì guòqù zài sì céng.',vn:'Trước đây văn phòng hiệu trưởng Phương ở tầng bốn.'},
   ],
   hanzi:[
     {c:'过',p:'guò',type:'半包围结构 · Bán bao vây',st:6,ord:'辶 ngoài → 寸 trong',rad:'辶 (sước – đi)',mean:'đi qua',
      tip:'辶(đi) + 寸(một đoạn ngắn, chỉ thời gian/khoảng cách) → ĐI QUA một khoảng thời gian hoặc không gian.',
      cf:'辻 (không phải chữ Hán thường dùng)',w:'过去 / 经过 / 过'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Năm năm đã trôi qua, giờ cô ấy đã là giáo viên rồi.',answer:'五年过去了，现在她已经是老师了。',answerPy:'Wǔ nián guòqu le, xiànzài tā yǐjīng shì lǎoshī le.',
      note:'过去了 diễn tả thời gian đã trôi qua (ôn lại 校长 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Tuy chuyện đó đã là quá khứ nhưng tôi vẫn nhớ rất rõ.',answer:'虽然那是过去的事，但是我还是记得很清楚。',answerPy:'Suīrán nà shì guòqù de shì, dànshì wǒ háishi jìde hěn qīngchu.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:8,zh:'一般',py:'yìbān',pos:'Tính từ',vn:'thông thường',em:'📅',lesson:3,
   explain:['Diễn tả tình trạng bình thường, như thường lệ.'],
   usage:'Tính từ, thường làm trạng ngữ đứng trước động từ: 一般 + V.',
   collo:['一般来说','周末一般','一般在家'],
   ex_zh:'周末你一般跟小刚出去看电影吗？',ex_py:'Zhōumò nǐ yìbān gēn Xiǎogāng chūqu kàn diànyǐng ma?',ex_vn:'Cuối tuần bạn có thường đi xem phim cùng Tiểu Cương không?',
   exList:[
     {zh:'小丽，周末你一般跟小刚出去看电影吗？',py:'Xiǎolì, zhōumò nǐ yìbān gēn Xiǎogāng chūqu kàn diànyǐng ma?',vn:'Tiểu Lệ, cuối tuần bạn có thường đi xem phim cùng Tiểu Cương không?'},
     {zh:'我一般十点左右睡觉。',py:'Wǒ yìbān shí diǎn zuǒyòu shuìjiào.',vn:'Tôi thường ngủ khoảng mười giờ.'},
     {zh:'一般来说，坐飞机比坐火车快。',py:'Yìbān lái shuō, zuò fēijī bǐ zuò huǒchē kuài.',vn:'Nói chung, đi máy bay nhanh hơn đi tàu hoả.'},
   ],
   hanzi:[
     {c:'般',p:'bān',type:'左右结构 · Trái-phải',st:10,ord:'舟 trái → 殳 phải',rad:'舟 (chu – thuyền)',mean:'giống như, thông thường',
      tip:'舟(thuyền) + 殳(cầm gậy chèo) → thuyền đi theo cách THÔNG THƯỜNG, giống nhau mỗi lần.',
      cf:'船 (chuán – "thuyền", có bộ 舟 khác cách ghép)',w:'一般 / 那般'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thường về nhà lúc khoảng sáu giờ.',answer:'我一般六点左右回家。',answerPy:'Wǒ yìbān liù diǎn zuǒyòu huí jiā.',
      note:'左右 = số ước lượng (ôn lại đã học ở Bài 11).'},
     {promptLang:'vi',prompt:'Nếu bạn thường xuyên tập thể dục thì sẽ khoẻ mạnh hơn.',answer:'如果你一般都锻炼身体，就会更健康。',answerPy:'Rúguǒ nǐ yìbān dōu duànliàn shēntǐ, jiù huì gèng jiànkāng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'愿意',py:'yuànyì',pos:'Động từ',vn:'muốn',em:'💭',lesson:3,
   explain:['Trong lòng mong muốn làm một việc gì đó, sẵn lòng.'],
   usage:'Động từ năng nguyện, đứng trước động từ khác: 愿意 + V.',
   collo:['更愿意','愿意帮忙','不愿意'],
   ex_zh:'我更愿意在家看电视。',ex_py:'Wǒ gèng yuànyì zài jiā kàn diànshì.',ex_vn:'Tôi thích ở nhà xem tivi hơn.',
   exList:[
     {zh:'我很少去电影院看电影，我更愿意在家看电视。',py:'Wǒ hěn shǎo qù diànyǐngyuàn kàn diànyǐng, wǒ gèng yuànyì zài jiā kàn diànshì.',vn:'Tôi rất ít khi đi rạp xem phim, tôi thích ở nhà xem tivi hơn.'},
     {zh:'大家有了问题，都愿意请他帮忙。',py:'Dàjiā yǒule wèntí, dōu yuànyì qǐng tā bāngmáng.',vn:'Mọi người có vấn đề gì, đều muốn nhờ ông ấy giúp.'},
     {zh:'你愿意跟我一起去吗？',py:'Nǐ yuànyì gēn wǒ yìqǐ qù ma?',vn:'Bạn có muốn đi cùng tôi không?'},
   ],
   hanzi:[
     {c:'愿',p:'yuàn',type:'上下结构 · Trên-dưới',st:14,ord:'原 trên → 心 dưới',rad:'心 (tâm)',mean:'nguyện vọng',
      tip:'原(nguồn gốc, ban đầu) + 心(trái tim) → điều xuất phát từ TRÁI TIM ban đầu = NGUYỆN VỌNG, MUỐN.',
      cf:'原 (yuán – "nguồn gốc", không có bộ 心")',w:'愿意 / 愿望'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn có muốn cùng tôi đi xem phim không?',answer:'你愿意跟我一起去看电影吗？',answerPy:'Nǐ yuànyì gēn wǒ yìqǐ qù kàn diànyǐng ma?',
      note:'愿意 + V diễn tả mong muốn.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn muốn thì chúng ta có thể cùng đi.',answer:'只要你愿意，我们就可以一起去。',answerPy:'Zhǐyào nǐ yuànyì, wǒmen jiù kěyǐ yìqǐ qù.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:10,zh:'起来',py:'qǐlai',pos:'Động từ',vn:'(chỉ sự di chuyển hướng lên) lên',em:'⬆️',lesson:3,
   explain:['Bổ ngữ xu hướng kép diễn tả động tác hướng lên trên hoặc bắt đầu một hành động.'],
   usage:'Động từ + 起来: 站起来, 坐起来; cũng dùng để diễn tả bắt đầu một trạng thái.',
   collo:['站起来','坐久了','站起来休息'],
   ex_zh:'坐久了还可以站起来休息一会儿。',ex_py:'Zuò jiǔ le hái kěyǐ zhàn qilai xiūxi yíhuìr.',ex_vn:'Ngồi lâu còn có thể đứng dậy nghỉ một lát.',
   exList:[
     {zh:'可以一边吃一边看，坐久了还可以站起来休息一会儿。',py:'Kěyǐ yìbiān chī yìbiān kàn, zuò jiǔ le hái kěyǐ zhàn qilai xiūxi yíhuìr.',vn:'Có thể vừa ăn vừa xem, ngồi lâu còn có thể đứng dậy nghỉ một lát.'},
     {zh:'别帮他，让他自己站起来，他一定可以。',py:'Bié bāng tā, ràng tā zìjǐ zhàn qilai, tā yídìng kěyǐ.',vn:'Đừng giúp cậu bé, để cậu tự đứng dậy, cậu chắc chắn làm được.'},
     {zh:'孩子笑了起来。',py:'Háizi xiàole qilai.',vn:'Đứa trẻ bật cười lên.'},
   ],
   hanzi:[
     {c:'起',p:'qǐ',type:'半包围结构 · Bán bao vây',st:10,ord:'走 ngoài → 己 trong',rad:'走 (tẩu – đi)',mean:'dậy, khởi đầu',
      tip:'走(đi, chạy) + 己(bản thân) → tự mình đứng DẬY, chuyển động lên = KHỞI ĐẦU.',
      cf:'己 (jǐ – "bản thân", không có bộ 走")',w:'起来 / 一起 / 起床'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngồi lâu còn có thể đứng dậy nghỉ một lát.',answer:'坐久了还可以站起来休息一会儿。',answerPy:'Zuò jiǔ le hái kěyǐ zhàn qilai xiūxi yíhuìr.',
      note:'站起来 = bổ ngữ xu hướng kép (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Đừng giúp cậu bé, để cậu tự đứng dậy.',answer:'别帮他，让他自己站起来。',answerPy:'Bié bāng tā, ràng tā zìjǐ zhàn qilai.',
      note:'自己 diễn tả tự bản thân (ôn lại đã học ở Bài 12).'},
   ]},

  {n:11,zh:'应该',py:'yīnggāi',pos:'Động từ',vn:'nên, cần phải',em:'👍',lesson:3,
   explain:['Diễn tả điều nên làm theo lẽ thường hoặc lời khuyên.'],
   usage:'Động từ năng nguyện, đứng trước động từ khác: 应该 + V.',
   collo:['应该多出去','应该休息','不应该'],
   ex_zh:'你应该多出去走走。',ex_py:'Nǐ yīnggāi duō chūqu zǒuzou.',ex_vn:'Bạn nên đi ra ngoài nhiều hơn.',
   exList:[
     {zh:'你应该多出去走走，这样你们的生活会更有意思。',py:'Nǐ yīnggāi duō chūqu zǒuzou, zhèyàng nǐmen de shēnghuó huì gèng yǒu yìsi.',vn:'Bạn nên đi ra ngoài nhiều hơn, như vậy cuộc sống của hai người sẽ thú vị hơn.'},
     {zh:'你应该多休息，别太累了。',py:'Nǐ yīnggāi duō xiūxi, bié tài lèi le.',vn:'Bạn nên nghỉ ngơi nhiều hơn, đừng để quá mệt.'},
     {zh:'我们应该经常锻炼身体。',py:'Wǒmen yīnggāi jīngcháng duànliàn shēntǐ.',vn:'Chúng ta nên thường xuyên rèn luyện sức khoẻ.'},
   ],
   hanzi:[
     {c:'应',p:'yīng',type:'半包围结构 · Bán bao vây',st:7,ord:'广 ngoài → 应 trong (giản thể)',rad:'广 (nghiễm – mái nhà)',mean:'nên, đáp lại',
      tip:'广(mái nhà che chở) + phần dưới giản thể từ 應(đáp lại) → ĐÁP LẠI đúng đắn theo lẽ phải = NÊN.',
      cf:'店 (diàn – "cửa hàng", cũng có bộ 广")',w:'应该 / 答应'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn nên thường xuyên uống nước.',answer:'你应该经常喝水。',answerPy:'Nǐ yīnggāi jīngcháng hē shuǐ.',
      note:'经常 sẽ học ngay bên dưới trong bài này.'},
     {promptLang:'vi',prompt:'Nếu bạn nên nghỉ ngơi thì đừng làm việc quá nhiều.',answer:'如果你应该休息，就别工作太多。',answerPy:'Rúguǒ nǐ yīnggāi xiūxi, jiù bié gōngzuò tài duō.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'生活',py:'shēnghuó',pos:'Danh từ',vn:'đời sống, cuộc sống',em:'🌱',lesson:3,
   explain:['Toàn bộ những hoạt động diễn ra trong cuộc đời một người.'],
   usage:'Danh từ; cũng có thể làm động từ nghĩa "sinh sống".',
   collo:['生活很有意思','生活习惯','美好的生活'],
   ex_zh:'这样你们的生活会更有意思。',ex_py:'Zhèyàng nǐmen de shēnghuó huì gèng yǒu yìsi.',ex_vn:'Như vậy cuộc sống của hai người sẽ thú vị hơn.',
   exList:[
     {zh:'你应该多出去走走，这样你们的生活会更有意思。',py:'Nǐ yīnggāi duō chūqu zǒuzou, zhèyàng nǐmen de shēnghuó huì gèng yǒu yìsi.',vn:'Bạn nên đi ra ngoài nhiều hơn, như vậy cuộc sống của hai người sẽ thú vị hơn.'},
     {zh:'有他在，我的生活已经很有意思了。',py:'Yǒu tā zài, wǒ de shēnghuó yǐjīng hěn yǒu yìsi le.',vn:'Có anh ấy ở bên, cuộc sống của tôi đã rất thú vị rồi.'},
     {zh:'我们的生活越来越好了。',py:'Wǒmen de shēnghuó yuè lái yuè hǎo le.',vn:'Cuộc sống của chúng tôi ngày càng tốt hơn.'},
   ],
   hanzi:[
     {c:'活',p:'huó',type:'左右结构 · Trái-phải',st:9,ord:'氵 trái → 舌 phải',rad:'氵 (thuỷ – nước)',mean:'sống',
      tip:'氵(nước) + 舌(lưỡi) → có nước để lưỡi nếm, còn hơi thở = SỐNG; 生(sinh ra)+活(sống) = ĐỜI SỐNG.',
      cf:'话 (huà – "lời nói", có bộ 讠")',w:'生活 / 活动'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống ở thành phố ngày càng đắt đỏ hơn.',answer:'城市里的生活越来越贵了。',answerPy:'Chéngshì lǐ de shēnghuó yuè lái yuè guì le.',
      note:'越来越 diễn tả xu hướng tăng dần.'},
     {promptLang:'vi',prompt:'Có con ở bên, cuộc sống của bà ấy rất vui vẻ.',answer:'有孩子在，她的生活很快乐。',answerPy:'Yǒu háizi zài, tā de shēnghuó hěn kuàilè.',
      note:'有……在 diễn tả sự hiện diện của ai đó.'},
   ]},

  {n:13,zh:'校长',py:'xiàozhǎng',pos:'Danh từ',vn:'hiệu trưởng',em:'🏫',lesson:4,
   explain:['Người đứng đầu quản lý một trường học.'],
   usage:'Danh từ; thường dùng làm chức danh trước tên riêng: 方校长.',
   collo:['方校长','当校长','校长的办公室'],
   ex_zh:'现在他已经是校长了。',ex_py:'Xiànzài tā yǐjīng shì xiàozhǎng le.',ex_vn:'Hiện giờ anh ấy đã là hiệu trưởng rồi.',
   exList:[
     {zh:'十年过去了，现在他已经是校长了。',py:'Shí nián guòqu le, xiànzài tā yǐjīng shì xiàozhǎng le.',vn:'Mười năm đã trôi qua, giờ anh ấy đã là hiệu trưởng rồi.'},
     {zh:'方校长的办公室过去在四层。',py:'Fāng xiàozhǎng de bàngōngshì guòqù zài sì céng.',vn:'Trước đây văn phòng hiệu trưởng Phương ở tầng bốn.'},
     {zh:'校长今天有一个重要的会议。',py:'Xiàozhǎng jīntiān yǒu yí ge zhòngyào de huìyì.',vn:'Hôm nay hiệu trưởng có một cuộc họp quan trọng.'},
   ],
   hanzi:[
     {c:'校',p:'xiào',type:'左右结构 · Trái-phải',st:10,ord:'木 trái → 交 phải',rad:'木 (mộc – gỗ)',mean:'trường học',
      tip:'木(gỗ, xây dựng) + 交(giao lưu, kết bạn) → nơi bằng gỗ để mọi người GIAO LƯU, học tập = TRƯỜNG HỌC.',
      cf:'较 (jiào – "so sánh", có bộ 车")',w:'校长 / 学校'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày mai hiệu trưởng có một cuộc họp quan trọng với phụ huynh.',answer:'校长明天有一个重要的家长会议。',answerPy:'Xiàozhǎng míngtiān yǒu yí ge zhòngyào de jiāzhǎng huìyì.',
      note:'重要 diễn tả tính quan trọng (ôn lại đã học ở Bài 12).'},
     {promptLang:'vi',prompt:'Tuy anh ấy đã là hiệu trưởng rồi nhưng vẫn rất bận.',answer:'虽然他已经是校长了，但是他还是很忙。',answerPy:'Suīrán tā yǐjīng shì xiàozhǎng le, dànshì tā háishi hěn máng.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:14,zh:'坏',py:'huài',pos:'Tính từ',vn:'quá, quá mức',em:'😫',lesson:4,
   explain:['Đứng sau tính từ/động từ làm bổ ngữ, diễn tả mức độ nghiêm trọng, quá mức.'],
   usage:'Tính từ/bổ ngữ mức độ: [Adj/V] + 坏了, diễn tả mức độ cao (累坏了, 忙坏了).',
   collo:['累坏了','忙坏了','坏了'],
   ex_zh:'我真怕他累坏了。',ex_py:'Wǒ zhēn pà tā lèihuài le.',ex_vn:'Tôi thật sự sợ anh ấy mệt quá sức.',
   exList:[
     {zh:'我真怕他累坏了。',py:'Wǒ zhēn pà tā lèihuài le.',vn:'Tôi thật sự sợ anh ấy mệt quá sức.'},
     {zh:'电梯坏了，我是爬上来的。',py:'Diàntī huài le, wǒ shì pá shanglai de.',vn:'Thang máy hỏng rồi, tôi trèo lên đấy.'},
     {zh:'今天太忙了，我都忙坏了。',py:'Jīntiān tài máng le, wǒ dōu mánghuài le.',vn:'Hôm nay bận quá, tôi bận đến mức mệt lử.'},
   ],
   hanzi:[
     {c:'坏',p:'huài',type:'左右结构 · Trái-phải',st:7,ord:'土 trái → 不 phải',rad:'土 (thổ – đất)',mean:'hỏng, quá mức',
      tip:'土(đất) + 不(phủ định) → đất KHÔNG còn nguyên vẹn = HỎNG, mở rộng thành bổ ngữ mức độ QUÁ MỨC.',
      cf:'环 (huán – "vòng", có bộ 王")',w:'累坏了 / 坏了 / 破坏'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tivi hỏng rồi, chúng tôi đến nhà hàng xóm xem đấy.',answer:'电视坏了，我们是去邻居家看的。',answerPy:'Diànshì huài le, wǒmen shì qù línjū jiā kàn de.',
      note:'是……的 nhấn mạnh cách thức của hành động đã xảy ra.'},
     {promptLang:'vi',prompt:'Tôi thật sự sợ anh ấy mệt quá sức nên bảo anh ấy nghỉ ngơi nhiều hơn.',answer:'我真怕他累坏了，所以让他多休息。',answerPy:'Wǒ zhēn pà tā lèihuài le, suǒyǐ ràng tā duō xiūxi.',
      note:'所以 nêu kết quả từ nguyên nhân phía trước.'},
   ]},

  {n:15,zh:'经常',py:'jīngcháng',pos:'Phó từ',vn:'thường xuyên',em:'🔁',lesson:4,
   explain:['Diễn tả tần suất cao, việc xảy ra nhiều lần, đều đặn.'],
   usage:'Phó từ, đứng trước động từ: 经常 + V.',
   collo:['经常来','经常锻炼','经常在一起'],
   ex_zh:'可以经常和我还有孩子在一起。',ex_py:'Kěyǐ jīngcháng hé wǒ hái yǒu háizi zài yìqǐ.',ex_vn:'Có thể thường xuyên ở bên tôi và các con.',
   exList:[
     {zh:'希望他能少一些会议，多一些休息，可以经常和我还有孩子在一起。',py:'Xīwàng tā néng shǎo yìxiē huìyì, duō yìxiē xiūxi, kěyǐ jīngcháng hé wǒ hái yǒu háizi zài yìqǐ.',vn:'Mong anh ấy có thể họp ít lại, nghỉ ngơi nhiều hơn, có thể thường xuyên ở bên tôi và các con.'},
     {zh:'我们应该经常锻炼身体。',py:'Wǒmen yīnggāi jīngcháng duànliàn shēntǐ.',vn:'Chúng ta nên thường xuyên rèn luyện sức khoẻ.'},
     {zh:'他经常一个人去咖啡店看书。',py:'Tā jīngcháng yí ge rén qù kāfēidiàn kàn shū.',vn:'Anh ấy thường xuyên một mình đến quán cà phê đọc sách.'},
   ],
   hanzi:[
     {c:'经',p:'jīng',type:'左右结构 · Trái-phải',st:8,ord:'纟 trái → 圣 phải (giản thể)',rad:'纟 (mịch – tơ lụa)',mean:'trải qua, thường xuyên',
      tip:'纟(sợi tơ dệt) + phần phải (giản thể từ 巠, sợi dọc trong khung dệt) → sợi dọc XUYÊN SUỐT tấm vải = THƯỜNG XUYÊN, TRẢI QUA.',
      cf:'轻 (qīng – "nhẹ", có bộ 车")',w:'经常 / 已经 / 经理'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy thường xuyên một mình đi công viên chạy bộ.',answer:'她经常一个人去公园跑步。',answerPy:'Tā jīngcháng yí ge rén qù gōngyuán pǎobù.',
      note:'经常 đứng trước động từ diễn tả tần suất cao.'},
     {promptLang:'vi',prompt:'Mong anh ấy có thể thường xuyên ở bên tôi.',answer:'希望他能经常和我在一起。',answerPy:'Xīwàng tā néng jīngcháng hé wǒ zài yìqǐ.',
      note:'希望……能…… diễn tả mong muốn ai đó có thể làm gì.'},
   ]},
];

const wuData = [
  {img:'👴',label:'爷爷',py:'yéye',letter:'A'},
  {img:'👵',label:'奶奶',py:'nǎinai',letter:'B'},
  {img:'🎁',label:'礼物',py:'lǐwù',letter:'C'},
  {img:'🏫',label:'校长',py:'xiàozhǎng',letter:'D'},
  {img:'🔁',label:'经常',py:'jīngcháng',letter:'E'},
  {img:'⬆️',label:'起来',py:'qǐlai',letter:'F'},
];

var dialogData = [
  {scene:'在家 · Ở nhà (Tiểu Cương vừa về)',
   preQuiz:[
     {q:'小刚买了什么东西回来？',opts:['红酒和给爷爷的礼物','水果','衣服'],ans:0},
     {q:'小丽的礼物是什么？',opts:['小刚自己就是礼物','一件衣服','一本书'],ans:0},
     {q:'红酒是买给谁的？',opts:['爷爷','奶奶','小丽'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你终于回来了！从哪儿买回来这么多东西啊？',py:'Nǐ zhōngyú huílai le! Cóng nǎr mǎi huilai zhème duō dōngxi a?',vn:'Anh cuối cùng cũng về rồi! Mua ở đâu về nhiều đồ thế?'},
     {sp:0,zh:'都是从那边的商店买回来的。',py:'Dōu shì cóng nà bian de shāngdiàn mǎi huilai de.',vn:'Đều là mua từ cửa hàng đằng kia về đấy.'},
     {sp:1,zh:'怎么还买红酒回来了？谁喝啊？',py:'Zěnme hái mǎi hóngjiǔ huilai le? Shéi hē a?',vn:'Sao còn mua cả rượu vang về nữa? Ai uống vậy?'},
     {sp:0,zh:'这是给爷爷的礼物，明天我们一起送过去，看看爷爷奶奶。',py:'Zhè shì gěi yéye de lǐwù, míngtiān wǒmen yìqǐ sòng guoqu, kànkan yéye nǎinai.',vn:'Đây là quà tặng cho ông nội, mai chúng ta cùng mang qua, thăm ông bà nội.'},
     {sp:1,zh:'那我的礼物呢？快拿出来让我看看。',py:'Nà wǒ de lǐwù ne? Kuài ná chulai ràng wǒ kànkan.',vn:'Vậy quà của em đâu? Mau lấy ra cho em xem nào.'},
     {sp:0,zh:'我不是已经回来了吗？',py:'Wǒ bú shì yǐjīng huilai le ma?',vn:'Chẳng phải anh đã về rồi sao?'},
   ]},
  {scene:'在家 · Ở nhà (chuyện gặp bạn cũ)',
   preQuiz:[
     {q:'小刚今天在路上遇到了谁？',opts:['一个老同学','公司经理','邻居'],ans:0},
     {q:'他们一起做了什么？',opts:['喝咖啡聊过去的事','看电影','吃饭'],ans:0},
     {q:'小刚为什么回来得这么晚？',opts:['没有公共汽车了，走回来的','说了很多话','迷路了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我今天看见你和一个女的进了咖啡店，她是谁啊？',py:'Wǒ jīntiān kànjiàn nǐ hé yí ge nǚ de jìnle kāfēidiàn, tā shì shéi a?',vn:'Hôm nay em thấy anh và một cô gái đi vào quán cà phê, cô ấy là ai vậy?'},
     {sp:0,zh:'她是我今天在路上遇到的一个老同学。',py:'Tā shì wǒ jīntiān zài lùshang yùdào de yí ge lǎo tóngxué.',vn:'Cô ấy là một người bạn học cũ anh tình cờ gặp trên đường hôm nay.'},
     {sp:1,zh:'你们就一起去喝咖啡了？',py:'Nǐmen jiù yìqǐ qù hē kāfēi le?',vn:'Thế là hai người rủ nhau đi uống cà phê à?'},
     {sp:0,zh:'是啊，一边喝咖啡一边说了些过去的事。',py:'Shì a, yìbiān hē kāfēi yìbiān shuōle xiē guòqù de shì.',vn:'Đúng vậy, vừa uống cà phê vừa nói chuyện xưa.'},
     {sp:1,zh:'你回来得这么晚，是说了很多过去的事吗？',py:'Nǐ huílai de zhème wǎn, shì shuōle hěn duō guòqù de shì ma?',vn:'Anh về muộn thế này, là vì nói nhiều chuyện xưa lắm à?'},
     {sp:0,zh:'不是。没有公共汽车了，我是走回来的。',py:'Bú shì. Méiyǒu gōnggòng qìchē le, wǒ shì zǒu huilai de.',vn:'Không phải. Hết xe buýt rồi, anh đi bộ về đấy.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'小丽周末一般喜欢做什么？',opts:['在家看电视','去电影院','去爬山'],ans:0},
     {q:'同事建议小丽怎么做？',opts:['多出去走走','多看电视','多喝咖啡'],ans:0},
     {q:'小丽觉得自己的生活怎么样？',opts:['已经很有意思了','很无聊','太忙了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'小丽，周末你一般跟小刚出去看电影吗？',py:'Xiǎolì, zhōumò nǐ yìbān gēn Xiǎogāng chūqu kàn diànyǐng ma?',vn:'Tiểu Lệ, cuối tuần bạn có thường đi xem phim cùng Tiểu Cương không?'},
     {sp:0,zh:'我很少去电影院看电影，我更愿意在家看电视。',py:'Wǒ hěn shǎo qù diànyǐngyuàn kàn diànyǐng, wǒ gèng yuànyì zài jiā kàn diànshì.',vn:'Mình rất ít khi đi rạp xem phim, mình thích ở nhà xem tivi hơn.'},
     {sp:1,zh:'看电视有什么意思啊？',py:'Kàn diànshì yǒu shénme yìsi a?',vn:'Xem tivi thì có gì thú vị chứ?'},
     {sp:0,zh:'可以一边吃一边看，坐久了还可以站起来休息一会儿。',py:'Kěyǐ yìbiān chī yìbiān kàn, zuò jiǔ le hái kěyǐ zhàn qilai xiūxi yíhuìr.',vn:'Có thể vừa ăn vừa xem, ngồi lâu còn có thể đứng dậy nghỉ một lát.'},
     {sp:1,zh:'你应该多出去走走，这样你们的生活会更有意思。',py:'Nǐ yīnggāi duō chūqu zǒuzou, zhèyàng nǐmen de shēnghuó huì gèng yǒu yìsi.',vn:'Bạn nên đi ra ngoài nhiều hơn, như vậy cuộc sống của hai người sẽ thú vị hơn.'},
     {sp:0,zh:'有他在，我的生活已经很有意思了。',py:'Yǒu tā zài, wǒ de shēnghuó yǐjīng hěn yǒu yìsi le.',vn:'Có anh ấy ở bên, cuộc sống của mình đã rất thú vị rồi.'},
   ]},
  {scene:'độc bạch · Tự thuật (một người vợ nói về chồng mình)',
   preQuiz:[
     {q:'刚结婚的时候，丈夫的职业是什么？',opts:['中学老师','校长','司机'],ans:0},
     {q:'十年后，丈夫现在是什么职位？',opts:['校长','老师','经理'],ans:0},
     {q:'妻子希望丈夫怎么样？',opts:['少一些会议，多一些休息','多赚钱','换工作'],ans:0},
   ],
   lines:[
     {sp:0,zh:'刚结婚的时候，我丈夫是中学老师，他喜欢每天早上起床后，一边吃早饭一边看报纸。',py:'Gāng jié hūn de shíhou, wǒ zhàngfu shì zhōngxué lǎoshī, tā xǐhuan měi tiān zǎoshang qǐ chuáng hòu, yìbiān chī zǎofàn yìbiān kàn bàozhǐ.',vn:'Lúc mới kết hôn, chồng tôi là giáo viên trung học, anh ấy thích mỗi sáng sau khi ngủ dậy, vừa ăn sáng vừa đọc báo.'},
     {sp:0,zh:'十年过去了，现在他已经是校长了，因为太忙，每天早上我起床后都看不到他，晚上很晚他才回到家。',py:'Shí nián guòqu le, xiànzài tā yǐjīng shì xiàozhǎng le, yīnwèi tài máng, měi tiān zǎoshang wǒ qǐ chuáng hòu dōu kàn bu dào tā, wǎnshang hěn wǎn tā cái huí dào jiā.',vn:'Mười năm đã trôi qua, giờ anh ấy đã là hiệu trưởng rồi, vì quá bận, mỗi sáng sau khi tôi dậy đều không thấy anh ấy đâu, buổi tối rất muộn anh ấy mới về đến nhà.'},
     {sp:0,zh:'我真怕他累坏了。',py:'Wǒ zhēn pà tā lèihuài le.',vn:'Tôi thật sự sợ anh ấy mệt quá sức.'},
     {sp:0,zh:'希望他能少一些会议，多一些休息，可以经常和我还有孩子在一起。',py:'Xīwàng tā néng shǎo yìxiē huìyì, duō yìxiē xiūxi, kěyǐ jīngcháng hé wǒ hái yǒu háizi zài yìqǐ.',vn:'Mong anh ấy có thể họp ít lại, nghỉ ngơi nhiều hơn, có thể thường xuyên ở bên tôi và các con.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'终于',right:'回来了'},
  {left:'买',right:'蛋糕'},
  {left:'送',right:'礼物'},
  {left:'一边喝咖啡',right:'一边说过去的事'},
  {left:'走',right:'回来'},
  {left:'很少',right:'去爬山'},
  {left:'站',right:'起来'},
  {left:'因为太忙，',right:'所以我看不到他。'},
  {left:'虽然他是校长了，',right:'但是还是很忙。'},
  {left:'如果你多休息，',right:'我就放心了。'},
  {left:'只要你愿意，',right:'我们就可以一起去。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你',blank:'终于',post:'回来了！',hint:'(cuối cùng)',ans:'终于'},
  {pre:'这是给',blank:'爷爷',post:'的礼物。',hint:'(ông nội)',ans:'爷爷'},
  {pre:'这是给爷爷奶奶的',blank:'礼物',post:'。',hint:'(quà biếu, quà tặng)',ans:'礼物'},
  {pre:'明天我们去看看爷爷',blank:'奶奶',post:'。',hint:'(bà nội)',ans:'奶奶'},
  {pre:'王老师是我昨天在书店',blank:'遇到',post:'的一位老同学。',hint:'(tình cờ gặp)',ans:'遇到'},
  {pre:'我们',blank:'一边',post:'喝咖啡一边聊天儿。',hint:'(vừa)',ans:'一边'},
  {pre:'一边喝咖啡一边说了些',blank:'过去',post:'的事。',hint:'(quá khứ)',ans:'过去'},
  {pre:'周末你',blank:'一般',post:'跟小刚出去爬山吗？',hint:'(thông thường)',ans:'一般'},
  {pre:'我更',blank:'愿意',post:'在家看新闻。',hint:'(muốn)',ans:'愿意'},
  {pre:'在飞机上坐久了可以站',blank:'起来',post:'走一走。',hint:'(chỉ sự di chuyển hướng lên)',ans:'起来'},
  {pre:'你',blank:'应该',post:'多出去走走。',hint:'(nên, cần phải)',ans:'应该'},
  {pre:'这样你们的',blank:'生活',post:'会更有意思。',hint:'(đời sống, cuộc sống)',ans:'生活'},
  {pre:'他已经是',blank:'校长',post:'了。',hint:'(hiệu trưởng)',ans:'校长'},
  {pre:'孩子们玩儿了一天，都要累',blank:'坏',post:'了。',hint:'(quá, quá mức)',ans:'坏'},
  {pre:'我希望孩子们能',blank:'经常',post:'去看看爷爷奶奶。',hint:'(thường xuyên)',ans:'经常'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','终于','找到','工作','了','！'],ans:'我终于找到工作了！',audio:'我终于找到工作了！'},
  {words:['那','是','给','奶奶','的','生日蛋糕','。'],ans:'那是给奶奶的生日蛋糕。',audio:'那是给奶奶的生日蛋糕。'},
  {words:['一边','走','一边','讲','了','些','工作','的','事','。'],ans:'一边走一边讲了些工作的事。',audio:'一边走一边讲了些工作的事。'},
  {words:['没有','公共','汽车','了','，','我','是','走','回来','的','。'],ans:'没有公共汽车了，我是走回来的。',audio:'没有公共汽车了，我是走回来的。'},
  {words:['因为','太','忙','，','所以','我','看不到','他','。'],ans:'因为太忙，所以我看不到他。',audio:'因为太忙，所以我看不到他。'},
  {words:['虽然','今天','很','忙','，','但是','我','还是','想','去','看看','爷爷奶奶','。'],ans:'虽然今天很忙，但是我还是想去看看爷爷奶奶。',audio:'虽然今天很忙，但是我还是想去看看爷爷奶奶。'},
  {words:['如果','你','能','少','一些','会议','，','我','就','放心','了','。'],ans:'如果你能少一些会议，我就放心了。',audio:'如果你能少一些会议，我就放心了。'},
  {words:['希望','你','能','少','喝','一些','咖啡','，','多','运动','一下','，','可以','经常','和','我们','一起','出去','走走','。'],ans:'希望你能少喝一些咖啡，多运动一下，可以经常和我们一起出去走走。',audio:'希望你能少喝一些咖啡，多运动一下，可以经常和我们一起出去走走。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'周太太走进去咖啡店。',
   opts:['周太太走进咖啡店去。','周太太走进去咖啡店。','周太太走咖啡店进去。','周太太进去走咖啡店。'],ans:0,
   exp:'Khi tân ngữ là nơi chốn (咖啡店), phải đặt TRƯỚC 去, không đặt sau.'},
  {wrong:'老师走进来教室。',
   opts:['老师走进教室来。','老师走进来教室。','老师走教室进来。','老师教室走进来。'],ans:0,
   exp:'Khi tân ngữ là nơi chốn (教室), phải đặt TRƯỚC 来, không đặt sau.'},
  {wrong:'你可以站休息一会儿。',
   opts:['你可以站起来休息一会儿。','你可以站休息一会儿。','你可以起来站休息一会儿。','你可以休息站起来一会儿。'],ans:0,
   exp:'Thiếu bổ ngữ xu hướng kép 起来 sau động từ 站 — câu cần đủ 站+起来 để diễn tả đứng dậy.'},
  {wrong:'爸爸一边看报纸吃水果。',
   opts:['爸爸一边看报纸一边吃水果。','爸爸一边看报纸吃水果。','爸爸看报纸一边吃水果一边。','爸爸一边吃水果看报纸。'],ans:0,
   exp:'Cấu trúc 一边……一边…… cần đủ CẢ HAI 一边, không được bỏ một bên.'},
  {wrong:'我同事喜欢喝咖啡一边看新闻一边。',
   opts:['我同事喜欢一边喝咖啡一边看新闻。','我同事喜欢喝咖啡一边看新闻一边。','我同事一边喜欢喝咖啡看新闻一边。','我同事喜欢一边看新闻喝咖啡一边。'],ans:0,
   exp:'一边 phải đứng NGAY TRƯỚC mỗi động từ, không đặt ở cuối câu.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小刚买礼物给谁了？小丽的礼物是什么？',
     q_vn:'Tiểu Cương mua quà cho ai? Quà của Tiểu Lệ là gì?',
     hint:'买了红酒给爷爷，小刚说自己回来就是礼物',
     sample:'小刚买了红酒给爷爷做礼物，小丽问自己的礼物在哪儿，小刚说他已经回来了，这就是礼物。',
     sample_vn:'Tiểu Cương mua rượu vang làm quà cho ông nội, Tiểu Lệ hỏi quà của mình đâu, Tiểu Cương nói anh ấy đã về rồi, đó chính là quà.',
     note:'是给……的礼物 diễn tả mục đích tặng quà (ôn lại 礼物 vừa học trong bài này).'},
    {q_zh:'小刚今天在路上遇到了谁？他们做了什么？',
     q_vn:'Hôm nay Tiểu Cương tình cờ gặp ai trên đường? Họ đã làm gì?',
     hint:'遇到老同学，一起去喝咖啡，一边喝咖啡一边说过去的事',
     sample:'小刚今天在路上遇到了一个老同学，他们一起去喝咖啡，一边喝咖啡一边说了些过去的事。',
     sample_vn:'Hôm nay Tiểu Cương tình cờ gặp một người bạn học cũ trên đường, họ cùng nhau đi uống cà phê, vừa uống cà phê vừa nói chuyện xưa.',
     note:'一边……一边…… diễn tả hai hành động xảy ra cùng lúc (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'小丽为什么更愿意在家看电视，不去电影院？',
     q_vn:'Vì sao Tiểu Lệ thích xem tivi ở nhà hơn, không đi rạp?',
     hint:'可以一边吃一边看，坐久了可以站起来休息',
     sample:'小丽更愿意在家看电视，因为可以一边吃一边看，坐久了还可以站起来休息一会儿。',
     sample_vn:'Tiểu Lệ thích xem tivi ở nhà hơn, vì có thể vừa ăn vừa xem, ngồi lâu còn có thể đứng dậy nghỉ một lát.',
     note:'站起来 dùng bổ ngữ xu hướng kép 起来 (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'这位妻子希望丈夫以后怎么样？',
     q_vn:'Người vợ này mong chồng mình sau này thế nào?',
     hint:'少一些会议，多一些休息，经常和她还有孩子在一起',
     sample:'这位妻子希望丈夫能少一些会议，多一些休息，可以经常和她还有孩子在一起。',
     sample_vn:'Người vợ này mong chồng có thể họp ít lại, nghỉ ngơi nhiều hơn, có thể thường xuyên ở bên cô ấy và các con.',
     note:'经常 diễn tả tần suất cao (điểm từ vựng trọng tâm bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chúng tôi cuối cùng cũng đến rồi!', zh:'我们终于到了！', py:'Wǒmen zhōngyú dào le!'},
  {vi:'Đây là món quà tặng cho bà nội.', zh:'这是给奶奶的礼物。', py:'Zhè shì gěi nǎinai de lǐwù.'},
  {vi:'Cô ấy là một người bạn học cũ tôi tình cờ gặp trên đường.', zh:'她是我在路上遇到的一个老同学。', py:'Tā shì wǒ zài lùshang yùdào de yí ge lǎo tóngxué.'},
  {vi:'Không còn taxi nữa, tôi là đi xe đạp về đấy.', zh:'没有出租车了，我是骑车回来的。', py:'Méiyǒu chūzūchē le, wǒ shì qí chē huílai de.'},
  {vi:'Tôi thích uống cà phê ở quán hơn.', zh:'我更愿意在咖啡店喝咖啡。', py:'Wǒ gèng yuànyì zài kāfēidiàn hē kāfēi.'},
  {vi:'Làm việc lâu nên đứng dậy vận động một chút.', zh:'工作久了应该站起来活动一下。', py:'Gōngzuò jiǔ le yīnggāi zhàn qilai huódòng yíxià.'},
  {vi:'Bạn nên đi ngủ sớm hơn một chút.', zh:'你应该早点儿睡觉。', py:'Nǐ yīnggāi zǎodiǎnr shuìjiào.'},
  {vi:'Hiện giờ anh ấy đã là giám đốc rồi.', zh:'现在他已经是经理了。', py:'Xiànzài tā yǐjīng shì jīnglǐ le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì trời mưa to nên chúng tôi không đi được.', zh:'因为下大雨，所以我们去不了。', py:'Yīnwèi xià dàyǔ, suǒyǐ wǒmen qù bu liǎo.'},
  {vi:'Tuy anh ấy đã là hiệu trưởng rồi nhưng anh ấy vẫn đạp xe đi làm mỗi ngày.', zh:'虽然他已经是校长了，但是他还是每天骑车上班。', py:'Suīrán tā yǐjīng shì xiàozhǎng le, dànshì tā háishi měitiān qí chē shàngbān.'},
  {vi:'Nếu bạn có thể nghỉ ngơi nhiều hơn thì tôi sẽ yên tâm.', zh:'如果你能多休息，我就放心了。', py:'Rúguǒ nǐ néng duō xiūxi, wǒ jiù fàngxīn le.'},
  {vi:'Chị gái vừa uống trà vừa đọc sách.', zh:'姐姐一边喝茶一边看书。', py:'Jiějie yìbiān hē chá yìbiān kàn shū.'},
  {vi:'Tôi thật sự sợ em ấy học nhiều quá sẽ mệt đến kiệt sức.', zh:'我真怕她学习太多，都要累坏了。', py:'Wǒ zhēn pà tā xuéxí tài duō, dōu yào lèihuài le.'},
  {vi:'Con chó nhỏ chạy ra khỏi phòng.', zh:'小狗从房间跑出来。', py:'Xiǎogǒu cóng fángjiān pǎo chulai.'},
  {vi:'Anh trai mua một quả dưa hấu mang về.', zh:'哥哥买回来一个西瓜。', py:'Gēge mǎi huilai yí ge xīguā.'},
  {vi:'Mẹ mang một số quà từ chợ về nhà.', zh:'妈妈从市场带回来一些礼物。', py:'Māma cóng shìchǎng dài huilai yìxiē lǐwù.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 13)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-13/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'爷爷，', blank:'这本书我没看过，是您新买的吗', post:'？',
       py:'Yéye, zhè běn shū wǒ méi kànguo, shì nín xīn mǎi de ma?', vn:'Ông ơi, quyển sách này cháu chưa xem qua, là ông mới mua à?'},
      {speaker:'男', pre:'', blank:'这是爷爷送给你的生日礼物', post:'。',
       py:'Zhè shì yéye sòng gěi nǐ de shēngrì lǐwù.', vn:'Đây là món quà sinh nhật ông tặng cháu.'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'你终于来了！箱子里东西太多，我刚才搬了几次都没搬起来', post:'。',
       py:'Nǐ zhōngyú lái le! Xiāngzi li dōngxi tài duō, wǒ gāngcái bānle jǐ cì dōu méi bān qilai.', vn:'Anh cuối cùng cũng đến rồi! Trong thùng đồ nhiều quá, em vừa khiêng mấy lần đều không nhấc lên nổi.'},
      {speaker:'男', pre:'我放下电话马上就跑过来了。', blank:'来，我帮你搬下去', post:'。',
       py:'Wǒ fàngxià diànhuà mǎshàng jiù pǎo guolai le. Lái, wǒ bāng nǐ bān xiaqu.', vn:'Em vừa cúp điện thoại là anh chạy đến ngay. Nào, để anh khiêng xuống giúp em.'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'', blank:'你看我家小狗多喜欢你，见了你就跑过去了', post:'。',
       py:'Nǐ kàn wǒ jiā xiǎogǒu duō xǐhuan nǐ, jiànle nǐ jiù pǎo guoqu le.', vn:'Bạn xem con chó nhỏ nhà tôi thích bạn thế nào, thấy bạn là chạy tới ngay.'},
      {speaker:'女', pre:'', blank:'它这么快跑过来是因为我拿着好吃的', post:'。',
       py:'Tā zhème kuài pǎo guolai shì yīnwèi wǒ názhe hǎochī de.', vn:'Nó chạy nhanh tới thế là vì tôi đang cầm đồ ăn ngon đấy.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'好久不见！', blank:'没想到在这儿遇到你了。你来这儿做什么', post:'？',
       py:'Hǎojiǔ bú jiàn! Méi xiǎngdào zài zhèr yùdào nǐ le. Nǐ lái zhèr zuò shénme?', vn:'Lâu rồi không gặp! Không ngờ lại gặp bạn ở đây. Bạn đến đây làm gì?'},
      {speaker:'女', pre:'', blank:'我来这家公司面试，刚面完，走，我们边走边聊', post:'。',
       py:'Wǒ lái zhè jiā gōngsī miànshì, gāng miànwán, zǒu, wǒmen biān zǒu biān liáo.', vn:'Tôi đến công ty này phỏng vấn, vừa phỏng vấn xong, đi nào, chúng ta vừa đi vừa nói chuyện.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'', blank:'你看这孩子怎么了，我过去帮他一下', post:'。',
       py:'Nǐ kàn zhè háizi zěnme le, wǒ guòqu bāng tā yíxià.', vn:'Bạn xem đứa trẻ này sao rồi, để tôi qua giúp nó một chút.'},
      {speaker:'女', pre:'别帮他，', blank:'让他自己站起来，他一定可以', post:'。',
       py:'Bié bāng tā, ràng tā zìjǐ zhàn qilai, tā yídìng kěyǐ.', vn:'Đừng giúp nó, để nó tự đứng dậy, nó chắc chắn làm được.'},
    ]},
    {num:6, lines:[
      {pre:'住在我家旁边的是个老人，他很热情，喜欢帮助大家。', blank:'大家有了问题，都愿意请他帮忙', post:'。',
       py:'Zhù zài wǒ jiā pángbiān de shì ge lǎorén, tā hěn rèqíng, xǐhuan bāngzhù dàjiā. Dàjiā yǒule wèntí, dōu yuànyì qǐng tā bāngmáng.', vn:'Người sống cạnh nhà tôi là một cụ già, cụ rất nhiệt tình, thích giúp đỡ mọi người. Mọi người có vấn đề gì, đều muốn nhờ cụ giúp.'},
    ]},
    {num:7, lines:[
      {pre:'过去，我喜欢每天早上起床后，一边吃早饭一边看报纸。', blank:'现在我没有这个习惯了，因为太忙了，没时间了', post:'。',
       py:'Guòqù, wǒ xǐhuan měi tiān zǎoshang qǐchuáng hòu, yìbiān chī zǎofàn yìbiān kàn bàozhǐ. Xiànzài wǒ méiyǒu zhège xíguàn le, yīnwèi tài máng le, méi shíjiān le.', vn:'Trước đây, tôi thích mỗi sáng sau khi dậy, vừa ăn sáng vừa đọc báo. Bây giờ tôi không còn thói quen này nữa, vì quá bận, không có thời gian nữa.'},
    ]},
    {num:8, lines:[
      {pre:'早上我起了床就出门了，到了半路发现没带电脑和钱包，', blank:'又开回去拿，到公司的时候已经十点半了', post:'。',
       py:'Zǎoshang wǒ qǐle chuáng jiù chūmén le, dàole bànlù fāxiàn méi dài diànnǎo hé qiánbāo, yòu kāi huiqu ná, dào gōngsī de shíhou yǐjīng shí diǎn bàn le.', vn:'Sáng nay tôi dậy là ra khỏi nhà ngay, đi được nửa đường phát hiện không mang theo máy tính và ví tiền, lại lái xe quay về lấy, lúc đến công ty đã mười giờ rưỡi rồi.'},
    ]},
    {num:9, lines:[
      {pre:'妈妈忙了一天，回家还要做饭。我让她坐下来休息一会儿，', blank:'但她总是边笑边说：为你和你爸做饭，我很高兴', post:'。',
       py:'Māma mángle yì tiān, huí jiā hái yào zuò fàn. Wǒ ràng tā zuò xialai xiūxi yíhuìr, dàn tā zǒngshì biān xiào biān shuō: wèi nǐ hé nǐ bà zuò fàn, wǒ hěn gāoxìng.', vn:'Mẹ bận cả ngày, về nhà còn phải nấu cơm. Tôi bảo mẹ ngồi xuống nghỉ một lát, nhưng mẹ luôn vừa cười vừa nói: nấu cơm cho con và bố, mẹ rất vui.'},
    ]},
    {num:10, lines:[
      {pre:'方校长的办公室过去在四层，她每天都爬上去。', blank:'上个月搬到十二层以后，她开始坐电梯，不爬楼了', post:'。',
       py:'Fāng xiàozhǎng de bàngōngshì guòqù zài sì céng, tā měi tiān dōu pá shangqu. Shàng ge yuè bāndào shí\'èr céng yǐhòu, tā kāishǐ zuò diàntī, bù pá lóu le.', vn:'Trước đây văn phòng hiệu trưởng Phương ở tầng bốn, cô ấy ngày nào cũng trèo lên. Sau khi chuyển lên tầng mười hai vào tháng trước, cô ấy bắt đầu đi thang máy, không trèo cầu thang nữa.'},
    ]},
  ],
  mc: [
    {num:11, options:['她去爬山了','她喝了很多水','她是走上楼来的'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'你怎么这么累', post:'？', py:'Nǐ zěnme zhème lèi?', vn:'Sao bạn mệt thế?'},
       {speaker:'女', pre:'电梯坏了，', blank:'我是爬上来的。快给我喝口水', post:'。', py:'Diàntī huài le, wǒ shì pá shanglai de. Kuài gěi wǒ hē kǒu shuǐ.', vn:'Thang máy hỏng rồi, tôi trèo lên đấy. Mau cho tôi ngụm nước.'},
     ],
     explain:'男：你怎么这么累？女：电梯坏了，我是爬上来的。快给我喝口水。问：女的为什么很累？ → 她是走上楼来的。'},
    {num:12, options:['走回家去','聊天儿','去超市'], ans:0,
     lines:[
       {speaker:'男', pre:'超市离家这么远，', blank:'我们真的要走回去吗', post:'？', py:'Chāoshì lí jiā zhème yuǎn, wǒmen zhēn de yào zǒu huiqu ma?', vn:'Siêu thị cách nhà xa thế, chúng ta thật sự phải đi bộ về à?'},
       {speaker:'女', pre:'只有三站，我们边走边聊，一会儿就到家了。', blank:'多走走还能锻炼身体，不是吗', post:'？', py:'Zhǐyǒu sān zhàn, wǒmen biān zǒu biān liáo, yíhuìr jiù dào jiā le. Duō zǒuzou hái néng duànliàn shēntǐ, bú shì ma?', vn:'Chỉ ba trạm thôi, chúng ta vừa đi vừa nói chuyện, một lát là về đến nhà rồi. Đi bộ nhiều còn rèn luyện sức khoẻ, phải không?'},
     ],
     explain:'男：超市离家这么远，我们真的要走回去吗？女：只有三站，我们边走边聊，一会儿就到家了。多走走还能锻炼身体，不是吗？问：女的想做什么？ → 走回家去。'},
    {num:13, options:['已经不年轻了','很想爸妈','要去国外'], ans:2,
     lines:[
       {speaker:'男', pre:'你真的要出国？去那么远的地方，不是想回来就能回来的，', blank:'你爸妈多想你啊', post:'！', py:'Nǐ zhēn de yào chūguó? Qù nàme yuǎn de dìfang, bú shì xiǎng huílai jiù néng huílai de, nǐ bàmā duō xiǎng nǐ a!', vn:'Bạn thật sự muốn ra nước ngoài à? Đi nơi xa thế, không phải muốn về là về được đâu, bố mẹ bạn nhớ bạn lắm đấy!'},
       {speaker:'女', pre:'他们说年轻人应该走出去，', blank:'多看看外边的人和事', post:'。', py:'Tāmen shuō niánqīngrén yīnggāi zǒu chuqu, duō kànkan wàibian de rén hé shì.', vn:'Bố mẹ tôi nói người trẻ nên đi ra ngoài, xem nhiều hơn về con người và sự việc bên ngoài.'},
     ],
     explain:'男：你真的要出国？去那么远的地方，不是想回来就能回来的，你爸妈多想你啊！女：他们说年轻人应该走出去，多看看外边的人和事。问：关于女的，可以知道什么？ → 要去国外。'},
    {num:14, options:['饭馆门口','饭馆里边','离饭馆不远的地方'], ans:2,
     lines:[
       {speaker:'男', pre:'那么多车，', blank:'吃饭的人真不少', post:'。', py:'Nàme duō chē, chīfàn de rén zhēn bù shǎo.', vn:'Nhiều xe thế, người đến ăn thật không ít.'},
       {speaker:'女', pre:'我们把车放在这儿，走过去吧，也不远，', blank:'两分钟就到了', post:'。', py:'Wǒmen bǎ chē fàng zài zhèr, zǒu guoqu ba, yě bù yuǎn, liǎng fēnzhōng jiù dào le.', vn:'Chúng ta để xe ở đây, đi bộ tới đi, cũng không xa, hai phút là đến rồi.'},
     ],
     explain:'男：那么多车，吃饭的人真不少。女：我们把车放在这儿，走过去吧，也不远，两分钟就到了。问：他们现在最可能在哪儿？ → 离饭馆不远的地方。'},
    {num:15, options:['坐火车','坐飞机','开车'], ans:1,
     lines:[
       {speaker:'女', pre:'你几号到北京？', blank:'票买好了没有', post:'？', py:'Nǐ jǐ hào dào Běijīng? Piào mǎihǎo le méiyǒu?', vn:'Bạn ngày mấy đến Bắc Kinh? Vé mua xong chưa?'},
       {speaker:'男', pre:'别担心，', blank:'我下个星期六就飞回去了', post:'。', py:'Bié dānxīn, wǒ xià ge xīngqīliù jiù fēi huiqu le.', vn:'Đừng lo, thứ Bảy tuần sau tôi bay về rồi.'},
     ],
     explain:'女：你几号到北京？票买好了没有？男：别担心，我下个星期六就飞回去了。问：男的怎么回北京？ → 坐飞机。'},
    {num:16, options:['叫"方朋"','在商店买衣服','在洗衣店换衣服'], ans:2,
     lines:[
       {speaker:'男', pre:'您好，', blank:'昨天从你们洗衣店拿回去的衣服不是我的', post:'。', py:'Nín hǎo, zuótiān cóng nǐmen xǐyīdiàn ná huiqu de yīfu bú shì wǒ de.', vn:'Chào chị, hôm qua chiếc áo tôi lấy về từ tiệm giặt của chị không phải của tôi.'},
       {speaker:'女', pre:'', blank:'这件衣服不是您的', post:'？', py:'Zhè jiàn yīfu bú shì nín de?', vn:'Chiếc áo này không phải của anh à?'},
       {speaker:'男', pre:'您看，我叫"方明"，', blank:'这上面写的是"方朋"', post:'。', py:'Nín kàn, wǒ jiào "Fāng Míng", zhè shàngmian xiě de shì "Fāng Péng".', vn:'Chị xem, tôi tên "Phương Minh", trên này viết là "Phương Bằng".'},
       {speaker:'女', pre:'一定是服务员边听音乐边工作，拿错了。真对不起，', blank:'您先坐下来喝点儿水，我马上就去给您换', post:'。', py:'Yídìng shì fúwùyuán biān tīng yīnyuè biān gōngzuò, ná cuò le. Zhēn duìbuqǐ, nín xiān zuò xialai hē diǎnr shuǐ, wǒ mǎshàng jiù qù gěi nín huàn.', vn:'Chắc chắn là nhân viên vừa nghe nhạc vừa làm việc, lấy nhầm rồi. Thật xin lỗi, anh ngồi xuống uống chút nước đã, tôi đi đổi lại cho anh ngay.'},
     ],
     explain:'男：您好，昨天从你们洗衣店拿回去的衣服不是我的。女：这件衣服不是您的？男：您看，我叫"方明"，这上面写的是"方朋"。女：一定是服务员边听音乐边工作，拿错了。真对不起，您先坐下来喝点儿水，我马上就去给您换。问：关于男的，可以知道什么？ → 在洗衣店换衣服。'},
    {num:17, options:['回公司','给老周带东西','开车'], ans:1,
     lines:[
       {speaker:'女', pre:'小周，你现在要回公司吗？', blank:'你是开车来的吗', post:'？', py:'Xiǎo Zhōu, nǐ xiànzài yào huí gōngsī ma? Nǐ shì kāichē lái de ma?', vn:'Tiểu Chu, giờ bạn định về công ty à? Bạn lái xe tới à?'},
       {speaker:'男', pre:'我是走过来的，', blank:'车放在公司门口了。怎么了，有事吗', post:'？', py:'Wǒ shì zǒu guolai de, chē fàng zài gōngsī ménkǒu le. Zěnme le, yǒu shì ma?', vn:'Tôi đi bộ tới đấy, xe để ở cổng công ty rồi. Sao thế, có việc gì à?'},
       {speaker:'女', pre:'你能帮我给老周带回去点儿东西吗？', blank:'他放在我这儿好长时间了', post:'。', py:'Nǐ néng bāng wǒ gěi Lǎo Zhōu dài huiqu diǎnr dōngxi ma? Tā fàng zài wǒ zhèr hǎo cháng shíjiān le.', vn:'Bạn giúp tôi mang đồ về cho lão Chu được không? Anh ấy để ở chỗ tôi lâu rồi.'},
       {speaker:'男', pre:'明天可以吗？', blank:'明天我还来你们这儿，到时候开车过来', post:'。', py:'Míngtiān kěyǐ ma? Míngtiān wǒ hái lái nǐmen zhèr, dàoshí kāichē guolai.', vn:'Ngày mai được không? Ngày mai tôi vẫn đến đây, lúc đó lái xe tới.'},
     ],
     explain:'女：小周，你现在要回公司吗？你是开车来的吗？男：我是走过来的，车放在公司门口了。怎么了，有事吗？女：你能帮我给老周带回去点儿东西吗？他放在我这儿好长时间了。男：明天可以吗？明天我还来你们这儿，到时候开车过来。问：女的想请男的做什么？ → 给老周带东西。'},
    {num:18, options:['司机','服务员','过去的同事'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'刚才从电梯里走出去的那个瘦瘦的女孩儿你认识', post:'？', py:'Gāngcái cóng diàntī li zǒu chuqu de nàge shòushòu de nǚháir nǐ rènshi?', vn:'Cô gái gầy gầy vừa đi ra từ thang máy bạn quen à?'},
       {speaker:'女', pre:'对，', blank:'是我以前的同事，听说现在都是经理了', post:'。', py:'Duì, shì wǒ yǐqián de tóngshì, tīngshuō xiànzài dōu shì jīnglǐ le.', vn:'Đúng vậy, là đồng nghiệp cũ của tôi, nghe nói giờ đã là giám đốc rồi.'},
       {speaker:'男', pre:'', blank:'以后你介绍我们认识一下吧', post:'。', py:'Yǐhòu nǐ jièshào wǒmen rènshi yíxià ba.', vn:'Sau này bạn giới thiệu chúng tôi làm quen nhé.'},
       {speaker:'女', pre:'', blank:'没问题', post:'。', py:'Méi wèntí.', vn:'Không thành vấn đề.'},
     ],
     explain:'男：刚才从电梯里走出去的那个瘦瘦的女孩儿你认识？女：对，是我以前的同事，听说现在都是经理了。男：以后你介绍我们认识一下吧。女：没问题。问：女的在电梯里遇到了谁？ → 过去的同事。'},
    {num:19, options:['今天是他生日','没开车来','想喝点儿酒'], ans:1,
     lines:[
       {speaker:'男', pre:'服务员，', blank:'来瓶红酒', post:'。', py:'Fúwùyuán, lái píng hóngjiǔ.', vn:'Phục vụ ơi, cho một chai rượu vang.'},
       {speaker:'女', pre:'你不是开车了吗，', blank:'能喝酒吗', post:'？', py:'Nǐ bú shì kāichē le ma, néng hē jiǔ ma?', vn:'Bạn chẳng phải đang lái xe à, uống rượu được sao?'},
       {speaker:'男', pre:'今天是你的生日，', blank:'喝几口没关系', post:'。', py:'Jīntiān shì nǐ de shēngrì, hē jǐ kǒu méi guānxi.', vn:'Hôm nay là sinh nhật em, uống vài ngụm không sao đâu.'},
       {speaker:'女', pre:'那你的车今天放在这儿吧，', blank:'明天再过来开回去', post:'。', py:'Nà nǐ de chē jīntiān fàng zài zhèr ba, míngtiān zài guolai kāi huiqu.', vn:'Vậy xe của anh cứ để ở đây, mai quay lại lái về.'},
     ],
     explain:'男：服务员，来瓶红酒。女：你不是开车了吗，能喝酒吗？男：今天是你的生日，喝几口没关系。女：那你的车今天放在这儿吧，明天再过来开回去。问：关于男的，可以知道什么？ → 没开车来。'},
    {num:20, options:['太阳咖啡店','西西蛋糕店','西西咖啡店'], ans:1,
     lines:[
       {speaker:'男', pre:'走累了吧？', blank:'我们去"太阳咖啡店"坐一会儿吧', post:'。', py:'Zǒu lèi le ba? Wǒmen qù "Tàiyáng Kāfēidiàn" zuò yíhuìr ba.', vn:'Đi mệt rồi phải không? Chúng ta đến "quán cà phê Mặt Trời" ngồi một lát đi.'},
       {speaker:'女', pre:'那家店在三层，也没有电梯，要走上去，', blank:'喝完咖啡还要走下来，我腿疼', post:'。', py:'Nà jiā diàn zài sān céng, yě méiyǒu diàntī, yào zǒu shangqu, hēwán kāfēi hái yào zǒu xialai, wǒ tuǐ téng.', vn:'Quán đó ở tầng ba, cũng không có thang máy, phải đi bộ lên, uống xong cà phê còn phải đi bộ xuống, chân tôi đau.'},
       {speaker:'男', pre:'', blank:'那去"西西蛋糕店"吧，有电梯', post:'。', py:'Nà qù "Xīxī Dàngāodiàn" ba, yǒu diàntī.', vn:'Vậy đến "tiệm bánh Tây Tây" đi, có thang máy.'},
       {speaker:'女', pre:'好啊好啊，', blank:'那家店在高层，从上边看下去，特别漂亮', post:'。', py:'Hǎo a hǎo a, nà jiā diàn zài gāocéng, cóng shàngbian kàn xiaqu, tèbié piàoliang.', vn:'Được được, quán đó ở tầng cao, nhìn từ trên xuống, đẹp lắm.'},
     ],
     explain:'男：走累了吧？我们去"太阳咖啡店"坐一会儿吧。女：那家店在三层，也没有电梯，要走上去，喝完咖啡还要走下来，我腿疼。男：那去"西西蛋糕店"吧，有电梯。女：好啊好啊，那家店在高层，从上边看下去，特别漂亮。问：女的要去哪儿？ → 西西蛋糕店。'},
  ],
};
