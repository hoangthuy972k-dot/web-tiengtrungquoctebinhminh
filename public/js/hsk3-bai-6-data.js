// ══════════════════════════════════════════
// DATA — HSK3 Bài 6: 怎么突然找不到了 (Sao đột nhiên tìm không thấy)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'眼镜',py:'yǎnjìng',pos:'Danh từ',vn:'mắt kính',em:'👓',lesson:1,
   explain:['Dụng cụ đeo trên mắt giúp nhìn rõ hơn.'],
   usage:'Danh từ; lượng từ đi kèm là 副: 一副眼镜.',
   collo:['一副眼镜','戴眼镜','找眼镜'],
   ex_zh:'我的眼镜呢？怎么突然找不到了？',ex_py:'Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bu dào le?',ex_vn:'Kính của tôi đâu rồi? Sao đột nhiên lại không tìm thấy?',
   exList:[
     {zh:'我的眼镜呢？怎么突然找不到了？',py:'Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bu dào le?',vn:'Kính của tôi đâu rồi? Sao đột nhiên lại không tìm thấy?'},
     {zh:'我离不开眼镜，没有眼镜，我一个字也看不清楚。',py:'Wǒ lí bu kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.',vn:'Anh không thể rời kính được, không có kính, anh một chữ cũng không nhìn rõ.'},
     {zh:'树那么远，你看得清楚吗？我有眼镜，看得清楚。',py:'Shù nàme yuǎn, nǐ kàn de qīngchu ma? Wǒ yǒu yǎnjìng, kàn de qīngchu.',vn:'Cây xa vậy, bạn nhìn rõ không? Tôi có kính, nhìn rõ mà.'},
   ],
   hanzi:[
     {c:'镜',p:'jìng',type:'左右结构 · Trái-phải',st:16,ord:'钅 trái → 竟 phải',rad:'钅 (kim – kim loại)',mean:'gương, kính',
      tip:'钅(kim loại, xưa gương làm bằng đồng) + 竟(cuối cùng, trọn vẹn) → vật kim loại soi TRỌN VẸN hình ảnh = GƯƠNG, KÍNH.',
      cf:'境 (jìng – "cảnh, biên giới", có bộ 土")',w:'眼镜 / 镜子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tìm không thấy chìa khóa của mình, bạn nhìn thấy không?',answer:'我找不到我的钥匙，你看见了吗？',answerPy:'Wǒ zhǎo bu dào wǒ de yàoshi, nǐ kànjiàn le ma?',
      note:'找不到 = bổ ngữ khả năng dạng phủ định (điểm ngữ pháp bài này, ôn lại 钥匙 đã học ở Bài 2).'},
     {promptLang:'vi',prompt:'Không có kính tôi một chữ cũng không nhìn rõ.',answer:'没有眼镜，我一个字也看不清楚。',answerPy:'Méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.',
      note:'看不清楚 = bổ ngữ khả năng dạng phủ định.'},
   ]},

  {n:2,zh:'突然',py:'tūrán',pos:'Phó từ',vn:'bỗng nhiên, bỗng dưng',em:'⚡',lesson:1,
   explain:['Xảy ra bất ngờ, không có dấu hiệu báo trước.'],
   usage:'Phó từ, đứng trước động từ/tính từ: 突然 + V/Adj.',
   collo:['突然找不到','突然不下了','突然生病'],
   ex_zh:'怎么突然找不到了？',ex_py:'Zěnme tūrán zhǎo bu dào le?',ex_vn:'Sao đột nhiên lại không tìm thấy?',
   exList:[
     {zh:'怎么突然找不到了？',py:'Zěnme tūrán zhǎo bu dào le?',vn:'Sao đột nhiên lại không tìm thấy?'},
     {zh:'怎么突然不下了？是啊，刚才还下得那么大。',py:'Zěnme tūrán bú xià le? Shì a, gāngcái hái xià de nàme dà.',vn:'Sao đột nhiên hết mưa rồi? Đúng vậy, lúc nãy còn mưa to thế.'},
     {zh:'你怎么突然说要用我的车？',py:'Nǐ zěnme tūrán shuō yào yòng wǒ de chē?',vn:'Sao bạn đột nhiên nói cần dùng xe của tôi?'},
   ],
   hanzi:[
     {c:'突',p:'tū',type:'上下结构 · Trên-dưới',st:9,ord:'穴 trên → 犬 dưới',rad:'穴 (huyệt – hang)',mean:'đột ngột',
      tip:'穴(cái hang) + 犬(con chó) → hình ảnh con chó bất ngờ lao ra khỏi hang → ĐỘT NGỘT, BẤT NGỜ.',
      cf:'究 (jiū – "nghiên cứu", có 九 thay vì 犬")',w:'突然 / 突出'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trời đột nhiên đổ mưa nên chúng tôi phải vào nhà.',answer:'因为天突然下雨了，所以我们得进屋。',answerPy:'Yīnwèi tiān tūrán xiàyǔ le, suǒyǐ wǒmen děi jìn wū.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn đột nhiên không thấy khỏe thì nên nghỉ ngơi ngay.',answer:'如果你突然觉得不舒服，就应该马上休息。',answerPy:'Rúguǒ nǐ tūrán juéde bù shūfu, jiù yīnggāi mǎshàng xiūxi.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'离开',py:'líkāi',pos:'Động từ',vn:'rời khỏi, tách khỏi',em:'🚶',lesson:1,
   explain:['Rời xa một người, nơi chốn hoặc vật gì đó.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 离开 + [người/nơi chốn]; thường dùng dạng phủ định khả năng 离不开 (không thể rời khỏi).',
   collo:['离不开','离开家','离开学校'],
   ex_zh:'我离不开眼镜，没有眼镜，我一个字也看不清楚。',ex_py:'Wǒ lí bu kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.',ex_vn:'Anh không thể rời kính được, không có kính, anh một chữ cũng không nhìn rõ.',
   exList:[
     {zh:'我离不开眼镜，没有眼镜，我一个字也看不清楚。',py:'Wǒ lí bu kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.',vn:'Anh không thể rời kính được, không có kính, anh một chữ cũng không nhìn rõ.'},
     {zh:'她刚离开学校，最近一直在家休息。',py:'Tā gāng líkāi xuéxiào, zuìjìn yìzhí zài jiā xiūxi.',vn:'Cô ấy vừa rời trường, dạo này luôn ở nhà nghỉ ngơi.'},
     {zh:'我孩子太小，离不开人。',py:'Wǒ háizi tài xiǎo, lí bu kāi rén.',vn:'Con tôi còn nhỏ quá, không thể rời người lớn được.'},
   ],
   hanzi:[
     {c:'离',p:'lí',type:'上下结构 · Trên-dưới',st:10,ord:'亠+凶 trên → 离(giản thể riêng)',rad:'离',mean:'rời xa, cách',
      tip:'Chữ cổ mô phỏng hình con chim tách bầy bay đi → nghĩa RỜI XA, TÁCH KHỎI.',
      cf:'禽 (qín – "cầm thú, chim", có nét dưới tương tự")',w:'离开 / 离不开 / 距离'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn không rời khỏi nhà thì sẽ an toàn.',answer:'只要你不离开家，就会很安全。',answerPy:'Zhǐyào nǐ bù líkāi jiā, jiù huì hěn ānquán.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Tuy anh ấy đã rời công ty nhưng vẫn thường liên lạc với đồng nghiệp cũ.',answer:'虽然他已经离开公司了，但是还是常常联系老同事。',answerPy:'Suīrán tā yǐjīng líkāi gōngsī le, dànshì háishi chángcháng liánxì lǎo tóngshì.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:4,zh:'清楚',py:'qīngchu',pos:'Tính từ',vn:'rõ ràng',em:'🔍',lesson:1,
   explain:['Nhìn/nghe/hiểu một cách rõ ràng, không mơ hồ.'],
   usage:'Tính từ, thường làm bổ ngữ khả năng sau động từ: 看得/不清楚, 说得/不清楚.',
   collo:['看得清楚','看不清楚','说清楚'],
   ex_zh:'我一个字也看不清楚。',ex_py:'Wǒ yí ge zì yě kàn bu qīngchu.',ex_vn:'Tôi một chữ cũng không nhìn rõ.',
   exList:[
     {zh:'我一个字也看不清楚。',py:'Wǒ yí ge zì yě kàn bu qīngchu.',vn:'Tôi một chữ cũng không nhìn rõ.'},
     {zh:'你刚才说什么？我听不清楚。',py:'Nǐ gāngcái shuō shénme? Wǒ tīng bu qīngchu.',vn:'Lúc nãy bạn nói gì? Tôi nghe không rõ.'},
     {zh:'树那么远，你看得清楚吗？',py:'Shù nàme yuǎn, nǐ kàn de qīngchu ma?',vn:'Cây xa vậy, bạn nhìn rõ không?'},
   ],
   hanzi:[
     {c:'楚',p:'chǔ',type:'左右结构 · Trái-phải',st:13,ord:'林 trái → 疋 phải',rad:'木 (mộc – cây)',mean:'rõ ràng; nước Sở',
      tip:'林(rừng cây) + 疋(chân, đi qua) → đi xuyên rừng cây rậm rạp mà vẫn nhìn RÕ đường = RÕ RÀNG.',
      cf:'礎 (chǔ – "nền móng", có bộ 石")',w:'清楚 / 楚国'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn nói rõ ràng hơn một chút thì tôi sẽ hiểu.',answer:'如果你说得清楚一点儿，我就会明白。',answerPy:'Rúguǒ nǐ shuō de qīngchu yìdiǎnr, wǒ jiù huì míngbai.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 明白 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Vì chữ viết quá nhỏ nên tôi nhìn không rõ.',answer:'因为字写得太小了，所以我看不清楚。',answerPy:'Yīnwèi zì xiě de tài xiǎo le, suǒyǐ wǒ kàn bu qīngchu.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:5,zh:'刚才',py:'gāngcái',pos:'Danh từ',vn:'lúc nãy',em:'⏱️',lesson:1,
   explain:['Khoảng thời gian vài phút trước hiện tại.'],
   usage:'Danh từ, có thể đứng đầu câu hoặc trước động từ: 刚才 + [câu], khác với 刚 (phó từ, chỉ đứng trước động từ).',
   collo:['刚才说什么','刚才还在','刚才放在'],
   ex_zh:'是不是刚才放在桌子上了？',ex_py:'Shì bu shì gāngcái fàng zài zhuōzi shang le?',ex_vn:'Có phải lúc nãy để trên bàn không?',
   exList:[
     {zh:'是不是刚才放在桌子上了？',py:'Shì bu shì gāngcái fàng zài zhuōzi shang le?',vn:'Có phải lúc nãy để trên bàn không?'},
     {zh:'你刚才说什么？我听不清楚。',py:'Nǐ gāngcái shuō shénme? Wǒ tīng bu qīngchu.',vn:'Lúc nãy bạn nói gì? Tôi nghe không rõ.'},
     {zh:'是啊，刚才还下得那么大。',py:'Shì a, gāngcái hái xià de nàme dà.',vn:'Đúng vậy, lúc nãy còn mưa to thế.'},
   ],
   hanzi:[
     {c:'刚',p:'gāng',type:'左右结构 · Trái-phải',st:6,ord:'冈 trái → 刂 phải',rad:'刂 (đao – dao)',mean:'vừa mới',
      tip:'冈(quả đồi, cứng rắn) + 刂(dao, cắt) → hành động vừa được "cắt" ra, mới xảy ra = VỪA MỚI.',
      cf:'钢 (gāng – "thép", có bộ 钅")',w:'刚才 / 刚刚 / 刚好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nãy có người gọi điện tìm bạn.',answer:'刚才有人打电话找你。',answerPy:'Gāngcái yǒu rén dǎ diànhuà zhǎo nǐ.',
      note:'刚才 đứng đầu câu diễn tả thời điểm vài phút trước (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Chị gái tôi vừa nãy còn ở đây, sao giờ không thấy nữa?',answer:'我姐姐刚才还在这儿，怎么现在找不到了？',answerPy:'Wǒ jiějie gāngcái hái zài zhèr, zěnme xiànzài zhǎo bu dào le?',
      note:'找不到 = bổ ngữ khả năng phủ định (ôn lại 姐姐).'},
   ]},

  {n:6,zh:'帮忙',py:'bāngmáng',pos:'Động từ',vn:'giúp, giúp đỡ',em:'🤝',lesson:1,
   explain:['Trợ giúp người khác làm việc gì đó.'],
   usage:'Động từ ly hợp; không mang tân ngữ trực tiếp, muốn nói "giúp ai" phải dùng 帮 + người + 忙 hoặc 帮 + người + V.',
   collo:['帮个忙','过来帮忙','请你帮忙'],
   ex_zh:'你快过来帮忙啊。',ex_py:'Nǐ kuài guòlai bāng máng a.',ex_vn:'Em mau lại đây giúp anh đi.',
   exList:[
     {zh:'你快过来帮忙啊。',py:'Nǐ kuài guòlai bāng máng a.',vn:'Em mau lại đây giúp anh đi.'},
     {zh:'我的车可能有点儿问题，你能过来帮个忙吗？',py:'Wǒ de chē kěnéng yǒudiǎnr wèntí, nǐ néng guòlai bāng ge máng ma?',vn:'Xe của tôi có lẽ có vấn đề, bạn qua giúp tôi một chút được không?'},
     {zh:'我过去帮他给他家里打了个电话。',py:'Wǒ guòqu bāng tā gěi tā jiālǐ dǎle ge diànhuà.',vn:'Tôi qua giúp cậu bé gọi điện về nhà cậu ấy.'},
   ],
   hanzi:[
     {c:'帮',p:'bāng',type:'上下结构 · Trên-dưới',st:9,ord:'邦 trên → 巾 dưới',rad:'巾 (cân – khăn)',mean:'giúp đỡ',
      tip:'邦(đất nước, cộng đồng) + 巾(khăn, vật dụng) → hỗ trợ lẫn nhau trong cộng đồng = GIÚP ĐỠ.',
      cf:'邦 (bāng – "đất nước", không có bộ 巾")',w:'帮忙 / 帮助 / 帮我'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn cần giúp thì gọi cho tôi bất cứ lúc nào.',answer:'只要你需要帮忙，随时给我打电话。',answerPy:'Zhǐyào nǐ xūyào bāngmáng, suíshí gěi wǒ dǎ diànhuà.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Vì cậu bé tìm không thấy đường về nhà nên tôi qua giúp cậu ấy.',answer:'因为那个孩子找不到回家的路，所以我过去帮他。',answerPy:'Yīnwèi nàge háizi zhǎo bu dào huí jiā de lù, suǒyǐ wǒ guòqu bāng tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 找不到 vừa học trong bài này).'},
   ]},

  {n:7,zh:'特别',py:'tèbié',pos:'Phó từ',vn:'vô cùng, rất',em:'❗',lesson:2,
   explain:['Mức độ cao hơn bình thường, nhấn mạnh hơn 很.'],
   usage:'Phó từ, đứng trước tính từ: 特别 + Adj (特别难, 特别高兴).',
   collo:['特别难','特别高兴','特别喜欢'],
   ex_zh:'今天这些题特别难，我看不懂，不会做。',ex_py:'Jīntiān zhèxiē tí tèbié nán, wǒ kàn bu dǒng, bú huì zuò.',ex_vn:'Mấy bài hôm nay khó quá, mình không hiểu, không làm được.',
   exList:[
     {zh:'今天这些题特别难，我看不懂，不会做。',py:'Jīntiān zhèxiē tí tèbié nán, wǒ kàn bu dǒng, bú huì zuò.',vn:'Mấy bài hôm nay khó quá, mình không hiểu, không làm được.'},
     {zh:'外边特别冷，你出去的时候多穿点儿。',py:'Wàibian tèbié lěng, nǐ chūqu de shíhou duō chuān diǎnr.',vn:'Bên ngoài rất lạnh, lúc bạn ra ngoài mặc thêm chút đi.'},
     {zh:'刚才跟朋友聊天儿聊得特别高兴。',py:'Gāngcái gēn péngyou liáotiānr liáo de tèbié gāoxìng.',vn:'Lúc nãy tán gẫu với bạn bè vui vô cùng.'},
   ],
   hanzi:[
     {c:'特',p:'tè',type:'左右结构 · Trái-phải',st:10,ord:'牛 trái → 寺 phải',rad:'牛 (ngưu – trâu, bò)',mean:'đặc biệt',
      tip:'牛(con vật quý) + 寺(chùa, nơi trang trọng) → vật quý được đưa vào nơi trang trọng = ĐẶC BIỆT.',
      cf:'持 (chí – "cầm, giữ", có bộ 扌")',w:'特别 / 特点'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bài tập hôm nay đặc biệt khó nên tôi làm rất lâu.',answer:'因为今天的作业特别难，所以我做了很久。',answerPy:'Yīnwèi jīntiān de zuòyè tèbié nán, suǒyǐ wǒ zuòle hěn jiǔ.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 作业/难 đã học ở Bài 1-2).'},
     {promptLang:'vi',prompt:'Anh ấy đặc biệt thích xem thi đấu bóng đá.',answer:'他特别喜欢看足球比赛。',answerPy:'Tā tèbié xǐhuan kàn zúqiú bǐsài.',
      note:'特别 + động từ tâm lý diễn tả mức độ cao.'},
   ]},

  {n:8,zh:'讲',py:'jiǎng',pos:'Động từ',vn:'giải thích, nói',em:'🗣️',lesson:2,
   explain:['Nói, giải thích một vấn đề cho người khác hiểu.'],
   usage:'Động từ, thường đi cùng bổ ngữ khả năng: 讲得/不明白.',
   collo:['讲明白','讲不明白','给你讲讲'],
   ex_zh:'电话里讲不明白，你来我家吧，我给你讲讲。',ex_py:'Diànhuà li jiǎng bu míngbai, nǐ lái wǒ jiā ba, wǒ gěi nǐ jiǎngjiang.',ex_vn:'Nói qua điện thoại không giải thích rõ được, bạn đến nhà mình đi, mình giảng cho bạn.',
   exList:[
     {zh:'电话里讲不明白，你来我家吧，我给你讲讲。',py:'Diànhuà li jiǎng bu míngbai, nǐ lái wǒ jiā ba, wǒ gěi nǐ jiǎngjiang.',vn:'Nói qua điện thoại không giải thích rõ được, bạn đến nhà mình đi, mình giảng cho bạn.'},
     {zh:'我都讲了三次了，你怎么还听不明白？',py:'Wǒ dōu jiǎngle sān cì le, nǐ zěnme hái tīng bu míngbai?',vn:'Tôi giảng những ba lần rồi, sao bạn vẫn không hiểu vậy?'},
     {zh:'这个问题老师讲得很清楚。',py:'Zhège wèntí lǎoshī jiǎng de hěn qīngchu.',vn:'Vấn đề này thầy giáo giảng rất rõ ràng.'},
   ],
   hanzi:[
     {c:'讲',p:'jiǎng',type:'左右结构 · Trái-phải',st:6,ord:'讠 trái → 井 phải',rad:'讠 (ngôn – lời nói)',mean:'giảng, nói',
      tip:'讠(lời nói) + 井(giếng, có trật tự) → nói năng CÓ TRẬT TỰ, rõ ràng = GIẢNG GIẢI.',
      cf:'井 (jǐng – "cái giếng", không có bộ 讠")',w:'讲课 / 讲明白 / 讲话'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn giải thích rõ thì tôi sẽ hiểu.',answer:'只要你讲明白，我就会懂。',answerPy:'Zhǐyào nǐ jiǎng míngbai, wǒ jiù huì dǒng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Tuy thầy giáo giảng ba lần rồi nhưng tôi vẫn chưa hiểu.',answer:'虽然老师讲了三次了，但是我还是不明白。',answerPy:'Suīrán lǎoshī jiǎngle sān cì le, dànshì wǒ háishi bù míngbai.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:9,zh:'明白',py:'míngbai',pos:'Tính từ',vn:'rõ ràng, dễ hiểu',em:'💡',lesson:2,
   explain:['Hiểu rõ, không còn thắc mắc; cũng dùng làm động từ nghĩa "hiểu".'],
   usage:'Tính từ/động từ; thường làm bổ ngữ khả năng: 讲得/不明白, 听得/不明白.',
   collo:['听明白','讲不明白','我明白了'],
   ex_zh:'电话里讲不明白，你来我家吧。',ex_py:'Diànhuà li jiǎng bu míngbai, nǐ lái wǒ jiā ba.',ex_vn:'Nói qua điện thoại không giải thích rõ được, bạn đến nhà mình đi.',
   exList:[
     {zh:'电话里讲不明白，你来我家吧。',py:'Diànhuà li jiǎng bu míngbai, nǐ lái wǒ jiā ba.',vn:'Nói qua điện thoại không giải thích rõ được, bạn đến nhà mình đi.'},
     {zh:'我都讲了三次了，你怎么还听不明白？',py:'Wǒ dōu jiǎngle sān cì le, nǐ zěnme hái tīng bu míngbai?',vn:'Tôi giảng những ba lần rồi, sao bạn vẫn không hiểu vậy?'},
     {zh:'如果你还不明白，就再问问老师吧。',py:'Rúguǒ nǐ hái bù míngbai, jiù zài wènwen lǎoshī ba.',vn:'Nếu bạn vẫn chưa hiểu thì hỏi lại thầy giáo đi.'},
   ],
   hanzi:[
     {c:'白',p:'bái',type:'独体字 · Chữ đơn',st:5,ord:'nét liền, hình ánh sáng',rad:'白 (bạch – trắng)',mean:'trắng; rõ ràng',
      tip:'Hình tượng ánh sáng trắng chiếu rọi → mở rộng nghĩa RÕ RÀNG, SÁNG TỎ; 明(sáng)+白(rõ) = HIỂU RÕ.',
      cf:'百 (bǎi – "trăm", thêm 1 nét trên 白")',w:'明白 / 白色 / 白天'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn đọc lại một lần nữa thì sẽ hiểu rõ hơn.',answer:'如果你再读一遍，就会更明白。',answerPy:'Rúguǒ nǐ zài dú yí biàn, jiù huì gèng míngbai.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
     {promptLang:'vi',prompt:'Tôi nghe thầy giảng ba lần rồi mới hiểu rõ.',answer:'我听老师讲了三次才明白。',answerPy:'Wǒ tīng lǎoshī jiǎngle sān cì cái míngbai.',
      note:'才 diễn tả phải sau nhiều lần mới đạt được kết quả.'},
   ]},

  {n:10,zh:'锻炼',py:'duànliàn',pos:'Động từ',vn:'tập thể dục',em:'🏃',lesson:2,
   explain:['Rèn luyện cơ thể thông qua vận động thể chất.'],
   usage:'Động từ, có thể mang tân ngữ 身体: 锻炼身体.',
   collo:['锻炼身体','去锻炼','锻炼完了'],
   ex_zh:'我锻炼完了就过去。',ex_py:'Wǒ duànliàn wán le jiù guòqu.',ex_vn:'Mình tập thể dục xong là qua ngay.',
   exList:[
     {zh:'我锻炼完了就过去。',py:'Wǒ duànliàn wán le jiù guòqu.',vn:'Mình tập thể dục xong là qua ngay.'},
     {zh:'我每天早上都去公园跑步，锻炼身体。',py:'Wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù, duànliàn shēntǐ.',vn:'Mỗi sáng tôi đều đi công viên chạy bộ, tập thể dục.'},
     {zh:'为了让自己更健康，他每天都花一个小时去锻炼。',py:'Wèile ràng zìjǐ gèng jiànkāng, tā měitiān dōu huā yí ge xiǎoshí qù duànliàn.',vn:'Để bản thân khỏe mạnh hơn, anh ấy mỗi ngày đều dành một tiếng để tập thể dục.'},
   ],
   hanzi:[
     {c:'炼',p:'liàn',type:'左右结构 · Trái-phải',st:9,ord:'火 trái → 东 phải',rad:'火 (hỏa – lửa)',mean:'tôi luyện, rèn luyện',
      tip:'火(lửa) + 东(hướng đông) → dùng LỬA để TÔI LUYỆN kim loại, mở rộng nghĩa RÈN LUYỆN cơ thể.',
      cf:'练 (liàn – "luyện tập", có 纟 thay vì 火")',w:'锻炼 / 炼习'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn tập thể dục xong là qua nhà tôi.',answer:'只要你锻炼完了就过来我家。',answerPy:'Zhǐyào nǐ duànliàn wán le jiù guòlai wǒ jiā.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Vì muốn khỏe mạnh hơn nên anh ấy mỗi ngày đều tập thể dục.',answer:'因为想更健康，所以他每天都锻炼。',answerPy:'Yīnwèi xiǎng gèng jiànkāng, suǒyǐ tā měitiān dōu duànliàn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 更 sẽ học ngay bên dưới trong bài này).'},
   ]},

  {n:11,zh:'音乐',py:'yīnyuè',pos:'Danh từ',vn:'âm nhạc',em:'🎵',lesson:3,
   explain:['Nghệ thuật âm thanh, giai điệu.'],
   usage:'Danh từ; đi cùng động từ 听 (nghe): 听音乐.',
   collo:['听音乐','音乐会','喜欢音乐'],
   ex_zh:'那你请她听音乐会吧，她喜欢听音乐。',ex_py:'Nà nǐ qǐng tā tīng yīnyuèhuì ba, tā xǐhuan tīng yīnyuè.',ex_vn:'Vậy bạn mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc mà.',
   exList:[
     {zh:'那你请她听音乐会吧，她喜欢听音乐。',py:'Nà nǐ qǐng tā tīng yīnyuèhuì ba, tā xǐhuan tīng yīnyuè.',vn:'Vậy bạn mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc mà.'},
     {zh:'音乐会人太多，买不到票。',py:'Yīnyuèhuì rén tài duō, mǎi bu dào piào.',vn:'Buổi hòa nhạc đông người quá, không mua được vé.'},
     {zh:'她特别喜欢听音乐。',py:'Tā tèbié xǐhuan tīng yīnyuè.',vn:'Cô ấy đặc biệt thích nghe nhạc.'},
   ],
   hanzi:[
     {c:'乐',p:'yuè',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'丿(phiệt)',mean:'âm nhạc; vui (lè)',
      tip:'Chữ tượng hình mô phỏng nhạc cụ cổ (trống trên giá gỗ) → ÂM NHẠC; đọc "lè" thì mang nghĩa VUI.',
      cf:'药 (yào – "thuốc", có bộ 艹")',w:'音乐 / 音乐会 / 快乐 (lè)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cô ấy thích nghe nhạc nên tôi mời cô ấy đi nghe hòa nhạc.',answer:'因为她喜欢听音乐，所以我请她听音乐会。',answerPy:'Yīnwèi tā xǐhuan tīng yīnyuè, suǒyǐ wǒ qǐng tā tīng yīnyuèhuì.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu buổi hòa nhạc còn vé thì chúng ta mua hai vé đi.',answer:'如果音乐会还有票，我们就买两张吧。',answerPy:'Rúguǒ yīnyuèhuì hái yǒu piào, wǒmen jiù mǎi liǎng zhāng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'公园',py:'gōngyuán',pos:'Danh từ',vn:'công viên',em:'🏞️',lesson:3,
   explain:['Khu vực công cộng có cây xanh, dùng để nghỉ ngơi, giải trí.'],
   usage:'Danh từ; đi cùng động từ 去 (đi): 去公园.',
   collo:['去公园','公园里','公园走走'],
   ex_zh:'那去公园走走，聊聊天儿吧。',ex_py:'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.',ex_vn:'Vậy đi công viên dạo chút, tán gẫu đi.',
   exList:[
     {zh:'那去公园走走，聊聊天儿吧。',py:'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.',vn:'Vậy đi công viên dạo chút, tán gẫu đi.'},
     {zh:'公园太大，多累啊。',py:'Gōngyuán tài dà, duō lèi a.',vn:'Công viên to quá, mệt lắm.'},
     {zh:'我每天早上都去公园跑步，锻炼身体。',py:'Wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù, duànliàn shēntǐ.',vn:'Mỗi sáng tôi đều đi công viên chạy bộ, tập thể dục.'},
   ],
   hanzi:[
     {c:'园',p:'yuán',type:'半包围结构 · Bán bao vây',st:7,ord:'囗 bao ngoài → 元 trong',rad:'囗 (vi – vây quanh)',mean:'vườn, công viên',
      tip:'囗(hàng rào bao quanh) + 元(khởi đầu, cơ bản) → khu đất được rào lại để trồng trọt/nghỉ ngơi = VƯỜN, CÔNG VIÊN.',
      cf:'国 (guó – "quốc gia", cũng có bộ 囗")',w:'公园 / 花园'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công viên rất lớn nhưng đi dạo cũng thú vị.',answer:'虽然公园很大，但是走走也很有意思。',answerPy:'Suīrán gōngyuán hěn dà, dànshì zǒuzou yě hěn yǒu yìsi.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Chỉ cần trời không mưa thì chúng ta đi công viên dạo chút.',answer:'只要天不下雨，我们就去公园走走。',answerPy:'Zhǐyào tiān bú xiàyǔ, wǒmen jiù qù gōngyuán zǒuzou.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:13,zh:'聊天(儿)',py:'liáotiān(r)',pos:'Động từ',vn:'tán gẫu',em:'💬',lesson:3,
   explain:['Nói chuyện phiếm, trò chuyện thoải mái không có chủ đề cố định.'],
   usage:'Động từ ly hợp; thường đi cùng 跟/和 + người: 跟朋友聊天儿.',
   collo:['跟朋友聊天儿','聊聊天儿','正在聊天儿'],
   ex_zh:'那去公园走走，聊聊天儿吧。',ex_py:'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.',ex_vn:'Vậy đi công viên dạo chút, tán gẫu đi.',
   exList:[
     {zh:'那去公园走走，聊聊天儿吧。',py:'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.',vn:'Vậy đi công viên dạo chút, tán gẫu đi.'},
     {zh:'刚才还在这儿跟我们聊天儿呢。',py:'Gāngcái hái zài zhèr gēn wǒmen liáotiānr ne.',vn:'Lúc nãy còn ở đây tán gẫu với chúng tôi mà.'},
     {zh:'我听不懂汉语，那跟我聊聊天儿吧。',py:'Wǒ tīng bu dǒng Hànyǔ, nà gēn wǒ liáoliao tiānr ba.',vn:'Tôi không nghe hiểu tiếng Trung, vậy tán gẫu với tôi đi.'},
   ],
   hanzi:[
     {c:'聊',p:'liáo',type:'左右结构 · Trái-phải',st:10,ord:'耳 trái → 卯 phải',rad:'耳 (nhĩ – tai)',mean:'trò chuyện, tán gẫu',
      tip:'耳(tai, lắng nghe) + 卯(âm mão) → dùng TAI lắng nghe nhau trò chuyện thoải mái = TÁN GẪU.',
      cf:'柳 (liǔ – "cây liễu", có bộ 木")',w:'聊天儿 / 聊聊'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn không nghe hiểu tiếng Trung thì hãy tán gẫu với tôi đi.',answer:'你听不懂汉语，就跟我聊聊天儿吧。',answerPy:'Nǐ tīng bu dǒng Hànyǔ, jiù gēn wǒ liáoliao tiānr ba.',
      note:'听不懂 = bổ ngữ khả năng phủ định.'},
     {promptLang:'vi',prompt:'Cô bé đó thích nói chuyện với bà.',answer:'那个小女孩儿喜欢跟奶奶聊天儿。',answerPy:'Nàge xiǎo nǚháir xǐhuan gēn nǎinai liáotiānr.',
      note:'跟 + người + 聊天儿 diễn tả trò chuyện cùng ai.'},
   ]},

  {n:14,zh:'睡着',py:'shuìzháo',pos:'Động từ',vn:'ngủ được',em:'😴',lesson:4,
   explain:['Chìm vào giấc ngủ thành công; thường dùng ở dạng phủ định 睡不着 (không ngủ được).'],
   usage:'Bổ ngữ khả năng: 睡+得/不+着.',
   collo:['睡不着','睡不着觉','睡得着'],
   ex_zh:'你不是说晚上睡不着觉吗？',ex_py:'Nǐ bú shì shuō wǎnshang shuì bu zháo jiào ma?',ex_vn:'Chẳng phải anh nói buổi tối ngủ không được sao?',
   exList:[
     {zh:'你不是说晚上睡不着觉吗？',py:'Nǐ bú shì shuō wǎnshang shuì bu zháo jiào ma?',vn:'Chẳng phải anh nói buổi tối ngủ không được sao?'},
     {zh:'我刚到北京，晚上总是睡不着。',py:'Wǒ gāng dào Běijīng, wǎnshang zǒngshì shuì bu zháo.',vn:'Tôi vừa đến Bắc Kinh, buổi tối cứ ngủ không được.'},
     {zh:'我睡不着的时候喜欢看电视。',py:'Wǒ shuì bu zháo de shíhou xǐhuan kàn diànshì.',vn:'Lúc tôi ngủ không được thì thích xem tivi.'},
   ],
   hanzi:[
     {c:'着',p:'zháo',type:'上下结构 · Trên-dưới',st:11,ord:'羊(biến thể) trên → 目 dưới',rad:'目 (mục – mắt)',mean:'đạt được, trúng',
      tip:'Khi đọc "zháo", 着 mang nghĩa ĐẠT ĐƯỢC kết quả mong muốn — 睡着 = đạt được trạng thái NGỦ.',
      cf:'着 (zhe – "đang", cùng chữ nhưng khác âm và nghĩa")',w:'睡着 / 找着 / 着急'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn không phải nói tối qua ngủ không được sao?',answer:'你不是说昨晚睡不着觉吗？',answerPy:'Nǐ bú shì shuō zuówǎn shuì bu zháo jiào ma?',
      note:'睡不着 = bổ ngữ khả năng phủ định.'},
     {promptLang:'vi',prompt:'Uống ly sữa nóng, có thể ngủ ngon hơn.',answer:'喝杯热牛奶，可以睡得更好。',answerPy:'Hē bēi rè niúnǎi, kěyǐ shuì de gèng hǎo.',
      note:'更 + tính từ diễn tả mức độ tăng thêm (ôn lại 更 vừa học trong bài này).'},
   ]},

  {n:15,zh:'更',py:'gèng',pos:'Phó từ',vn:'càng, hơn nữa',em:'📊',lesson:4,
   explain:['Diễn tả mức độ tăng thêm so với một mức đã có.'],
   usage:'Phó từ, đứng trước tính từ/động từ: 更 + Adj/V (更好, 更喜欢).',
   collo:['更好','更漂亮','更喜欢'],
   ex_zh:'你还是喝杯牛奶吧，可以睡得更好些。',ex_py:'Nǐ háishi hē bēi niúnǎi ba, kěyǐ shuì de gèng hǎo xiē.',ex_vn:'Anh nên uống ly sữa thì hơn, ngủ sẽ ngon hơn.',
   exList:[
     {zh:'你还是喝杯牛奶吧，可以睡得更好些。',py:'Nǐ háishi hē bēi niúnǎi ba, kěyǐ shuì de gèng hǎo xiē.',vn:'Anh nên uống ly sữa thì hơn, ngủ sẽ ngon hơn.'},
     {zh:'你女儿越来越漂亮了！现在更漂亮。',py:'Nǐ nǚ\'ér yuè lái yuè piàoliang le! Xiànzài gèng piàoliang.',vn:'Con gái bạn ngày càng xinh! Bây giờ càng xinh hơn.'},
     {zh:'为了让自己更健康，他每天都去锻炼。',py:'Wèile ràng zìjǐ gèng jiànkāng, tā měitiān dōu qù duànliàn.',vn:'Để bản thân khỏe mạnh hơn, anh ấy mỗi ngày đều đi tập thể dục.'},
   ],
   hanzi:[
     {c:'更',p:'gèng',type:'上下结构 · Trên-dưới',st:7,ord:'一+日 trên → 乂+丨 dưới',rad:'曰 (viết)',mean:'càng, hơn nữa; canh (giờ)',
      tip:'Chữ cổ vốn chỉ việc "thay đổi, tiếp diễn" (như canh giờ đêm) → mở rộng nghĩa "tiếp tục tăng thêm" = CÀNG, HƠN NỮA.',
      cf:'硬 (yìng – "cứng", có phần giống bên phải")',w:'更好 / 更漂亮 / 更喜欢'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn tập thể dục thường xuyên thì sẽ càng khỏe mạnh hơn.',answer:'如果你常常锻炼，就会更健康。',answerPy:'Rúguǒ nǐ chángcháng duànliàn, jiù huì gèng jiànkāng.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 锻炼 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Cô ấy hôm nay mặc chiếc váy đó càng xinh đẹp hơn.',answer:'她今天穿那条裙子更漂亮了。',answerPy:'Tā jīntiān chuān nà tiáo qúnzi gèng piàoliang le.',
      note:'更 + tính từ diễn tả mức độ tăng thêm (ôn lại 裙子 đã học ở Bài 5).'},
   ]},
];

const wuData = [
  {img:'👓',label:'眼镜',py:'yǎnjìng',letter:'A'},
  {img:'🎵',label:'音乐',py:'yīnyuè',letter:'B'},
  {img:'🏞️',label:'公园',py:'gōngyuán',letter:'C'},
  {img:'💬',label:'聊天儿',py:'liáotiānr',letter:'D'},
  {img:'🏃',label:'锻炼',py:'duànliàn',letter:'E'},
  {img:'🤝',label:'帮忙',py:'bāngmáng',letter:'F'},
];

var dialogData = [
  {scene:'在客厅 · Trong phòng khách (buổi sáng)',
   preQuiz:[
     {q:'周明找不到什么？',opts:['眼镜','手机','钥匙'],ans:0},
     {q:'周太太建议周明去哪儿找？',opts:['房间','厨房','客厅'],ans:0},
     {q:'最后谁去帮周明找眼镜？',opts:['周太太','邻居','儿子'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我的眼镜呢？怎么突然找不到了？你看见了吗？',py:'Wǒ de yǎnjìng ne? Zěnme tūrán zhǎo bu dào le? Nǐ kànjiàn le ma?',vn:'Kính của tôi đâu rồi? Sao đột nhiên lại không tìm thấy? Em có nhìn thấy không?'},
     {sp:1,zh:'我没看见啊。',py:'Wǒ méi kànjiàn a.',vn:'Em không thấy đâu.'},
     {sp:0,zh:'我离不开眼镜，没有眼镜，我一个字也看不清楚。',py:'Wǒ lí bu kāi yǎnjìng, méiyǒu yǎnjìng, wǒ yí ge zì yě kàn bu qīngchu.',vn:'Anh không thể rời kính được, không có kính, anh một chữ cũng không nhìn rõ.'},
     {sp:1,zh:'你去房间找找，是不是刚才放在桌子上了？',py:'Nǐ qù fángjiān zhǎozhao, shì bu shì gāngcái fàng zài zhuōzi shang le?',vn:'Anh vào phòng tìm thử xem, có phải lúc nãy để trên bàn không?'},
     {sp:0,zh:'我怎么看得到啊？你快过来帮忙啊。',py:'Wǒ zěnme kàn de dào a? Nǐ kuài guòlai bāng máng a.',vn:'Anh làm sao nhìn thấy được? Em mau lại đây giúp anh đi.'},
     {sp:1,zh:'好吧，我帮你去找找。',py:'Hǎo ba, wǒ bāng nǐ qù zhǎozhao.',vn:'Được rồi, em giúp anh tìm thử.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'同学的作业做完了吗？',opts:['没做完，题特别难','已经做完了','忘记做了'],ans:0},
     {q:'儿子建议同学怎么办？',opts:['来他家，他讲给她听','在电话里讲','明天再说'],ans:0},
     {q:'同学什么时候过去？',opts:['锻炼完了就过去','马上过去','明天过去'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天的作业你做完了吗？',py:'Jīntiān de zuòyè nǐ zuòwán le ma?',vn:'Bài tập hôm nay bạn làm xong chưa?'},
     {sp:1,zh:'刚做完，你呢？',py:'Gāng zuòwán, nǐ ne?',vn:'Vừa xong xong, còn bạn thì sao?'},
     {sp:0,zh:'今天这些题特别难，我看不懂，不会做，你能帮我吗？',py:'Jīntiān zhèxiē tí tèbié nán, wǒ kàn bu dǒng, bú huì zuò, nǐ néng bāng wǒ ma?',vn:'Mấy bài hôm nay khó quá, mình không hiểu, không làm được, bạn giúp mình được không?'},
     {sp:1,zh:'电话里讲不明白，你来我家吧，我给你讲讲。',py:'Diànhuà li jiǎng bu míngbai, nǐ lái wǒ jiā ba, wǒ gěi nǐ jiǎngjiang.',vn:'Nói qua điện thoại không giải thích rõ được, bạn đến nhà mình đi, mình giảng cho bạn.'},
     {sp:0,zh:'好啊，我锻炼完了就过去。',py:'Hǎo a, wǒ duànliàn wán le jiù guòqu.',vn:'Được đấy, mình tập thể dục xong là qua ngay.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'小刚为什么不高兴？',opts:['找不到好饭馆儿','没有钱','小丽不理他'],ans:0},
     {q:'音乐会为什么不能去？',opts:['买不到票','太贵了','小丽不喜欢'],ans:0},
     {q:'小刚觉得去公园怎么样？',opts:['公园太大，很累','很好的主意','没有意见'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你怎么有点儿不高兴？',py:'Nǐ zěnme yǒudiǎnr bù gāoxìng?',vn:'Sao bạn có vẻ không vui vậy?'},
     {sp:0,zh:'我想请小丽吃饭，但是找不到好饭馆儿。',py:'Wǒ xiǎng qǐng Xiǎolì chī fàn, dànshì zhǎo bu dào hǎo fànguǎnr.',vn:'Tôi muốn mời Tiểu Lệ đi ăn, nhưng không tìm được quán ngon.'},
     {sp:1,zh:'那你请她听音乐会吧，她喜欢听音乐。',py:'Nà nǐ qǐng tā tīng yīnyuèhuì ba, tā xǐhuan tīng yīnyuè.',vn:'Vậy bạn mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc mà.'},
     {sp:0,zh:'音乐会人太多，买不到票。',py:'Yīnyuèhuì rén tài duō, mǎi bu dào piào.',vn:'Buổi hòa nhạc đông người quá, không mua được vé.'},
     {sp:1,zh:'那去公园走走，聊聊天儿吧。',py:'Nà qù gōngyuán zǒuzou, liáoliao tiānr ba.',vn:'Vậy đi công viên dạo chút, tán gẫu đi.'},
     {sp:0,zh:'公园太大，多累啊。',py:'Gōngyuán tài dà, duō lèi a.',vn:'Công viên to quá, mệt lắm.'},
   ]},
  {scene:'在客厅 · Trong phòng khách (buổi tối)',
   preQuiz:[
     {q:'周明晚上有什么问题？',opts:['睡不着觉','头疼','感冒了'],ans:0},
     {q:'周太太建议周明怎么办？',opts:['喝杯牛奶','喝杯咖啡','去公园走走'],ans:0},
     {q:'牛奶买了吗？',opts:['还没买','已经买了','周明去买'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你怎么还喝咖啡？',py:'Nǐ zěnme hái hē kāfēi?',vn:'Sao anh vẫn còn uống cà phê vậy?'},
     {sp:0,zh:'怎么了？',py:'Zěnme le?',vn:'Sao thế?'},
     {sp:1,zh:'你不是说晚上睡不着觉吗？',py:'Nǐ bú shì shuō wǎnshang shuì bu zháo jiào ma?',vn:'Chẳng phải anh nói buổi tối ngủ không được sao?'},
     {sp:0,zh:'没事，我只喝一杯。',py:'Méi shì, wǒ zhǐ hē yì bēi.',vn:'Không sao đâu, anh chỉ uống một ly thôi.'},
     {sp:1,zh:'你还是喝杯牛奶吧，可以睡得更好些。',py:'Nǐ háishi hē bēi niúnǎi ba, kěyǐ shuì de gèng hǎo xiē.',vn:'Anh nên uống ly sữa thì hơn, ngủ sẽ ngon hơn.'},
     {sp:0,zh:'好吧，牛奶呢？',py:'Hǎo ba, niúnǎi ne?',vn:'Được rồi, sữa đâu?'},
     {sp:1,zh:'还没买呢。',py:'Hái méi mǎi ne.',vn:'Chưa mua đâu.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'找',right:'不到'},
  {left:'看',right:'不清楚'},
  {left:'睡',right:'不着'},
  {left:'去',right:'公园'},
  {left:'听',right:'音乐'},
  {left:'跟朋友',right:'聊天儿'},
  {left:'过来',right:'帮忙'},
  {left:'因为题特别难，',right:'所以我不会做。'},
  {left:'虽然公园很大，',right:'但是走走也不错。'},
  {left:'如果你看不清楚，',right:'就戴眼镜吧。'},
  {left:'只要你锻炼完了，',right:'就过来吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'虽然我的',blank:'眼镜',post:'有点儿旧了，但是戴着还很清楚。',hint:'(mắt kính)',ans:'眼镜'},
  {pre:'昨天还好好的手机，怎么',blank:'突然',post:'不能用了？',hint:'(bỗng nhiên)',ans:'突然'},
  {pre:'我',blank:'离',post:'不开眼镜。',hint:'(rời khỏi)',ans:'离'},
  {pre:'虽然教室里灯光有点儿暗，但是黑板上的字我还看得',blank:'清楚',post:'。',hint:'(rõ ràng)',ans:'清楚'},
  {pre:'你的手机是不是',blank:'刚才',post:'忘在餐厅里了？',hint:'(lúc nãy)',ans:'刚才'},
  {pre:'厨房里的东西太重了，你快过来',blank:'帮忙',post:'搬一下吧。',hint:'(giúp đỡ)',ans:'帮忙'},
  {pre:'今天这些题',blank:'特别',post:'难。',hint:'(vô cùng, rất)',ans:'特别'},
  {pre:'电话里',blank:'讲',post:'不明白。',hint:'(nói, giải thích)',ans:'讲'},
  {pre:'老师讲了两遍，我才',blank:'明白',post:'这道题的意思。',hint:'(rõ ràng, dễ hiểu)',ans:'明白'},
  {pre:'虽然外边有点儿冷，但是我还是想去公园',blank:'锻炼',post:'一会儿。',hint:'(tập thể dục)',ans:'锻炼'},
  {pre:'她喜欢听',blank:'音乐',post:'。',hint:'(âm nhạc)',ans:'音乐'},
  {pre:'那去',blank:'公园',post:'走走。',hint:'(công viên)',ans:'公园'},
  {pre:'他昨天喝了很多咖啡，所以晚上',blank:'睡不着',post:'觉。',hint:'(ngủ không được)',ans:'睡不着'},
  {pre:'喝杯牛奶，可以睡得',blank:'更',post:'好些。',hint:'(càng, hơn nữa)',ans:'更'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','的','眼镜','怎么','突然','找','不','到','了','？'],ans:'我的眼镜怎么突然找不到了？',audio:'我的眼镜怎么突然找不到了？'},
  {words:['虽然','声音','很','小','，','但是','我','还','听','得','清楚','。'],ans:'虽然声音很小，但是我还听得清楚。',audio:'虽然声音很小，但是我还听得清楚。'},
  {words:['虽然','这个','故事','很','长','，','但是','奶奶','讲','得','很','清楚','。'],ans:'虽然这个故事很长，但是奶奶讲得很清楚。',audio:'虽然这个故事很长，但是奶奶讲得很清楚。'},
  {words:['虽然','电影院','人','很','多','，','但是','我们','买','到','了','票','。'],ans:'虽然电影院人很多，但是我们买到了票。',audio:'虽然电影院人很多，但是我们买到了票。'},
  {words:['如果','房间','太','吵','，','我','就','睡','不','着','觉','。'],ans:'如果房间太吵，我就睡不着觉。',audio:'如果房间太吵，我就睡不着觉。'},
  {words:['因为','题','特别','难','，','所以','我','不','会','做','。'],ans:'因为题特别难，所以我不会做。',audio:'因为题特别难，所以我不会做。'},
  {words:['虽然','公园','很','大','，','但是','走走','也','不错','。'],ans:'虽然公园很大，但是走走也不错。',audio:'虽然公园很大，但是走走也不错。'},
  {words:['如果','你','锻炼','完','了','，','就','过来','吧','。'],ans:'如果你锻炼完了，就过来吧。',audio:'如果你锻炼完了，就过来吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我找到不好饭馆儿。',
   opts:['我找不到好饭馆儿。','我找到不好饭馆儿。','我不找到好饭馆儿。','我找好饭馆儿不到。'],ans:0,
   exp:'Bổ ngữ khả năng dạng phủ định: Động từ + 不 + bổ ngữ (找+不+到), không đảo vị trí 不 và bổ ngữ.'},
  {wrong:'你看清楚得那个字吗？',
   opts:['你看得清楚那个字吗？','你看清楚得那个字吗？','你清楚看得那个字吗？','那个字你得看清楚吗？'],ans:0,
   exp:'Bổ ngữ khả năng dạng khẳng định: Động từ + 得 + bổ ngữ (看+得+清楚), 得 phải đứng ngay sau động từ.'},
  {wrong:'你的车在哪儿呢？',
   opts:['你的车呢？','你的车在哪儿呢？','呢你的车？','你的车哪儿呢？'],ans:0,
   exp:'"Danh từ + 呢" đã tự mang nghĩa hỏi vị trí ("ở đâu rồi?"), không cần thêm 在哪儿 phía trước 呢.'},
  {wrong:'我才做完作业，你呢？',
   opts:['我刚做完作业，你呢？','我才做完作业，你呢？','我做刚完作业，你呢？','刚我做完作业，你呢？'],ans:0,
   exp:'刚 (phó từ, đứng trước động từ) diễn tả hành động vừa xảy ra cách đây không lâu; 才 mang nghĩa khác (mãi mới, muộn), không phù hợp ngữ cảnh này.'},
  {wrong:'这道题他明白讲不。',
   opts:['这道题他讲不明白。','这道题他明白讲不。','这道题他不讲明白。','这道题他讲明白不。'],ans:0,
   exp:'Bổ ngữ khả năng: Động từ(讲)+不+bổ ngữ(明白) phải đứng liền nhau theo đúng thứ tự, không đảo lộn.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'周明的眼镜怎么了？周太太怎么帮他？',
     q_vn:'Kính của Chu Minh bị làm sao? Bà Chu giúp anh ấy thế nào?',
     hint:'突然找不到了，周太太帮他去找找',
     sample:'周明的眼镜突然找不到了，周太太帮他去找找。',
     sample_vn:'Kính của Chu Minh đột nhiên không tìm thấy nữa, bà Chu giúp anh ấy đi tìm.',
     note:'突然 diễn tả sự việc xảy ra bất ngờ.'},
    {q_zh:'同学的作业怎么样？儿子怎么帮她？',
     q_vn:'Bài tập của bạn học thế nào? Con trai giúp cô ấy ra sao?',
     hint:'题特别难，看不懂，儿子说来我家给你讲讲',
     sample:'同学的作业题特别难，她看不懂，儿子说让她来家里，他给她讲讲。',
     sample_vn:'Bài tập của bạn học rất khó, cô ấy không hiểu, con trai bảo cô ấy đến nhà, anh sẽ giảng cho.',
     note:'讲不明白 diễn tả không thể giải thích rõ.'},
    {q_zh:'小刚为什么不能请小丽听音乐会？他们最后决定做什么？',
     q_vn:'Vì sao Tiểu Cương không thể mời Tiểu Lệ nghe hòa nhạc? Cuối cùng họ quyết định làm gì?',
     hint:'买不到票，最后决定去公园聊天儿',
     sample:'因为音乐会买不到票，所以他们最后决定去公园聊聊天儿。',
     sample_vn:'Vì không mua được vé nghe hòa nhạc nên cuối cùng họ quyết định đi công viên tán gẫu.',
     note:'因为……所以…… nêu nguyên nhân — kết quả.'},
    {q_zh:'周明晚上为什么睡不着？周太太让他喝什么？',
     q_vn:'Vì sao buổi tối Chu Minh ngủ không được? Bà Chu bảo anh uống gì?',
     hint:'还喝了咖啡，周太太让他喝牛奶',
     sample:'周明晚上睡不着觉，还喝咖啡，周太太让他喝杯牛奶，可以睡得更好些。',
     sample_vn:'Buổi tối Chu Minh ngủ không được, còn uống cà phê, bà Chu bảo anh uống ly sữa, sẽ ngủ ngon hơn.',
     note:'更 + tính từ diễn tả mức độ tăng thêm (điểm ngữ pháp bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nếu bạn tìm không thấy chìa khóa xe thì cứ hỏi hàng xóm xem sao.', zh:'如果你找不到车钥匙，就问问邻居吧。', py:'Rúguǒ nǐ zhǎo bu dào chē yàoshi, jiù wènwen línjū ba.'},
  {vi:'Tuy trời tối nhưng con đường đó tôi vẫn nhìn thấy rất rõ.', zh:'虽然天黑了，但是那条路我还看得很清楚。', py:'Suīrán tiān hēi le, dànshì nà tiáo lù wǒ hái kàn de hěn qīngchu.'},
  {vi:'Bài này khó quá, tôi không hiểu, bạn giúp tôi được không?', zh:'这道题特别难，我看不懂，你能帮我吗？', py:'Zhè dào tí tèbié nán, wǒ kàn bu dǒng, nǐ néng bāng wǒ ma?'},
  {vi:'Bạn đến nhà tôi đi, tôi giảng cho bạn.', zh:'你来我家吧，我给你讲讲。', py:'Nǐ lái wǒ jiā ba, wǒ gěi nǐ jiǎngjiang.'},
  {vi:'Công viên người đông quá, đi dạo cũng mệt.', zh:'公园人太多，走走也很累。', py:'Gōngyuán rén tài duō, zǒuzou yě hěn lèi.'},
  {vi:'Bạn không phải nói hôm nay không cần đi làm sao?', zh:'你不是说今天不用上班吗？', py:'Nǐ bú shì shuō jīntiān bú yòng shàngbān ma?'},
  {vi:'Nghe một bản nhạc nhẹ, có thể giúp bạn ngủ ngon hơn.', zh:'听一首轻音乐，可以帮助你睡得更好。', py:'Tīng yì shǒu qīng yīnyuè, kěyǐ bāngzhù nǐ shuì de gèng hǎo.'},
  {vi:'Tôi vừa mới tập thể dục xong, hơi mệt.', zh:'我刚锻炼完，有点儿累。', py:'Wǒ gāng duànliàn wán, yǒudiǎnr lèi.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Nếu bạn nhìn không rõ thì nên đeo kính.', zh:'如果你看不清楚，就应该戴眼镜。', py:'Rúguǒ nǐ kàn bu qīngchu, jiù yīnggāi dài yǎnjìng.'},
  {vi:'Vì món đó đặc biệt cay nên tôi không ăn được nhiều.', zh:'因为那个菜特别辣，所以我吃不了很多。', py:'Yīnwèi nàge cài tèbié là, suǒyǐ wǒ chī bu liǎo hěn duō.'},
  {vi:'Chỉ cần thầy giáo giảng chậm một chút thì học sinh sẽ nghe hiểu.', zh:'只要老师讲得慢一点儿，学生就能听懂。', py:'Zhǐyào lǎoshī jiǎng de màn yìdiǎnr, xuésheng jiù néng tīngdǒng.'},
  {vi:'Tuy công viên hôm nay đông người nhưng không khí đặc biệt trong lành.', zh:'虽然公园今天人很多，但是空气特别新鲜。', py:'Suīrán gōngyuán jīntiān rén hěn duō, dànshì kōngqì tèbié xīnxiān.'},
  {vi:'Chỉ cần bạn thấy cuộc gọi của tôi thì gọi lại cho tôi nhé.', zh:'只要你看见我的电话，就给我回个电话吧。', py:'Zhǐyào nǐ kànjiàn wǒ de diànhuà, jiù gěi wǒ huí ge diànhuà ba.'},
  {vi:'Chỉ cần rảnh rỗi, ông tôi liền thích tán gẫu với hàng xóm.', zh:'只要有空，我爷爷就喜欢跟邻居聊天儿。', py:'Zhǐyào yǒu kòng, wǒ yéye jiù xǐhuan gēn línjū liáotiānr.'},
  {vi:'Anh trai tôi vừa tập thể dục xong liền đi tắm.', zh:'我哥哥刚锻炼完就去洗澡了。', py:'Wǒ gēge gāng duànliàn wán jiù qù xǐzǎo le.'},
  {vi:'Cốc cà phê này tôi chỉ uống một nửa.', zh:'这杯咖啡我只喝了一半。', py:'Zhè bēi kāfēi wǒ zhǐ hēle yíbàn.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 6)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-6/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男', pre:'', blank:'你刚才说什么？我听不清楚', post:'。',
       py:'Nǐ gāngcái shuō shénme? Wǒ tīng bu qīngchu.', vn:'Lúc nãy bạn nói gì? Tôi nghe không rõ.'},
      {speaker:'女', pre:'', blank:'我让你快点儿过来', post:'。',
       py:'Wǒ ràng nǐ kuài diǎnr guòlai.', vn:'Tôi bảo bạn nhanh lên đến đây.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'怎么突然不下了', post:'？',
       py:'Zěnme tūrán bú xià le?', vn:'Sao đột nhiên hết mưa rồi?'},
      {speaker:'女', pre:'是啊，', blank:'刚才还下得那么大', post:'。',
       py:'Shì a, gāngcái hái xià de nàme dà.', vn:'Đúng vậy, lúc nãy còn mưa to thế.'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'喂，', blank:'你今天不出来跟大家一起玩儿了吗', post:'？',
       py:'Wéi, nǐ jīntiān bù chūlai gēn dàjiā yìqǐ wánr le ma?', vn:'Này, hôm nay bạn không ra chơi cùng mọi người à?'},
      {speaker:'女', pre:'对不起，', blank:'我孩子太小，离不开人', post:'。',
       py:'Duìbuqǐ, wǒ háizi tài xiǎo, lí bu kāi rén.', vn:'Xin lỗi, con tôi còn nhỏ quá, không thể rời người lớn được.'},
    ]},
    {num:4, lines:[
      {speaker:'女', pre:'喂，', blank:'我的车可能有点儿问题，你能过来帮个忙吗', post:'？',
       py:'Wéi, wǒ de chē kěnéng yǒudiǎnr wèntí, nǐ néng guòlai bāng ge máng ma?', vn:'Alo, xe của tôi có lẽ có vấn đề, bạn qua giúp tôi một chút được không?'},
      {speaker:'男', pre:'', blank:'我现在就过去，你在哪儿', post:'？',
       py:'Wǒ xiànzài jiù guòqu, nǐ zài nǎr?', vn:'Tôi qua ngay đây, bạn đang ở đâu?'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'树那么远，', blank:'你看得清楚吗', post:'？',
       py:'Shù nàme yuǎn, nǐ kàn de qīngchu ma?', vn:'Cây xa vậy, bạn nhìn rõ không?'},
      {speaker:'女', pre:'', blank:'我有眼镜，看得清楚', post:'。',
       py:'Wǒ yǒu yǎnjìng, kàn de qīngchu.', vn:'Tôi có kính, nhìn rõ mà.'},
    ]},
    {num:6, lines:[
      {pre:'外边特别冷，你出去的时候多穿点儿。伞呢？', blank:'带把伞吧，可能要下雨', post:'。',
       py:'Wàibian tèbié lěng, nǐ chūqu de shíhou duō chuān diǎnr. Sǎn ne? Dài bǎ sǎn ba, kěnéng yào xiàyǔ.', vn:'Bên ngoài rất lạnh, lúc bạn ra ngoài mặc thêm chút đi. Ô đâu? Mang theo cái ô đi, có thể sẽ mưa đấy.'},
    ]},
    {num:7, lines:[
      {pre:'车上那么多人，我们还有这么多东西，', blank:'等下一辆吧，5分钟就来车了', post:'。',
       py:'Chē shang nàme duō rén, wǒmen hái yǒu zhème duō dōngxi, děng xià yí liàng ba, wǔ fēnzhōng jiù lái chē le.', vn:'Trên xe đông người vậy, chúng ta lại còn nhiều đồ thế này, đợi chuyến sau đi, 5 phút nữa xe đến rồi.'},
    ]},
    {num:8, lines:[
      {pre:'小丽，我刚看见你给我打的电话，', blank:'刚才我去楼下送客人了，没带手机', post:'。你找我有事吗？',
       py:'Xiǎolì, wǒ gāng kànjiàn nǐ gěi wǒ dǎ de diànhuà, gāngcái wǒ qù lóuxià sòng kèrén le, méi dài shǒujī. Nǐ zhǎo wǒ yǒu shì ma?', vn:'Tiểu Lệ, tôi vừa thấy cuộc gọi nhỡ của bạn, lúc nãy tôi xuống dưới tiễn khách nên không mang điện thoại. Bạn tìm tôi có việc gì à?'},
    ]},
    {num:9, lines:[
      {pre:'', blank:'我每天早上都去公园跑步，锻炼身体', post:'。',
       py:'Wǒ měitiān zǎoshang dōu qù gōngyuán pǎobù, duànliàn shēntǐ.', vn:'Mỗi sáng tôi đều đi công viên chạy bộ, tập thể dục.'},
    ]},
    {num:10, lines:[
      {pre:'昨天的作业真容易，我不到一个小时就写完了。小丽，', blank:'你的作业呢？带了吗', post:'？',
       py:'Zuótiān de zuòyè zhēn róngyì, wǒ bú dào yí ge xiǎoshí jiù xiěwán le. Xiǎolì, nǐ de zuòyè ne? Dài le ma?', vn:'Bài tập hôm qua dễ thật, tôi chưa đến một tiếng đã viết xong. Tiểu Lệ, bài tập của bạn đâu? Mang theo chưa?'},
    ]},
  ],
  mc: [
    {num:11, options:['蛋糕不好吃','没吃饱','蛋糕太多了'], ans:2,
     lines:[
       {speaker:'男', pre:'饭桌上的蛋糕怎么没吃完？', blank:'你们吃饱了吗', post:'？', py:'Fànzhuō shang de dàngāo zěnme méi chīwán? Nǐmen chībǎo le ma?', vn:'Bánh kem trên bàn ăn sao chưa ăn hết? Mọi người no rồi à?'},
       {speaker:'女', pre:'你买得太多了，', blank:'刚才还吃了很多饭，怎么吃得完啊', post:'？', py:'Nǐ mǎi de tài duō le, gāngcái hái chīle hěn duō fàn, zěnme chī de wán a?', vn:'Bạn mua nhiều quá, lúc nãy còn ăn nhiều cơm rồi, sao ăn hết được?'},
     ],
     explain:'男：饭桌上的蛋糕怎么没吃完？你们吃饱了吗？女：你买得太多了，刚才还吃了很多饭，怎么吃得完啊？问：女的是什么意思？ → 蛋糕太多了。'},
    {num:12, options:['没听清楚','没听明白','讲了三次'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'这个题我还不太清楚怎么做', post:'。', py:'Zhège tí wǒ hái bú tài qīngchu zěnme zuò.', vn:'Bài này tôi vẫn chưa rõ làm thế nào.'},
       {speaker:'女', pre:'我都讲了三次了，', blank:'你怎么还听不明白', post:'？', py:'Wǒ dōu jiǎngle sān cì le, nǐ zěnme hái tīng bu míngbai?', vn:'Tôi giảng những ba lần rồi, sao bạn vẫn không hiểu vậy?'},
     ],
     explain:'男：这个题我还不太清楚怎么做。女：我都讲了三次了，你怎么还听不明白？问：关于男的，可以知道什么？ → 没听明白。'},
    {num:13, options:['聊天儿','找人','问旁边办公室的人'], ans:1,
     lines:[
       {speaker:'女', pre:'小雨呢？', blank:'在你们这儿吗', post:'？', py:'Xiǎoyǔ ne? Zài nǐmen zhèr ma?', vn:'Tiểu Vũ đâu? Có ở chỗ các bạn không?'},
       {speaker:'男', pre:'刚才还在这儿跟我们聊天儿呢，', blank:'您去旁边的办公室问问', post:'？', py:'Gāngcái hái zài zhèr gēn wǒmen liáotiānr ne, nín qù pángbiān de bàngōngshì wènwen?', vn:'Lúc nãy còn ở đây tán gẫu với chúng tôi mà, bác qua văn phòng bên cạnh hỏi thử xem?'},
     ],
     explain:'女：小雨呢？在你们这儿吗？男：刚才还在这儿跟我们聊天儿呢，您去旁边的办公室问问？问：女的在做什么？ → 找人。'},
    {num:14, options:['现在没有车','要去外地','这几天不在家'], ans:0,
     lines:[
       {speaker:'男', pre:'你怎么了？突然说要用我的车，', blank:'你的车呢', post:'？', py:'Nǐ zěnme le? Tūrán shuō yào yòng wǒ de chē, nǐ de chē ne?', vn:'Bạn sao vậy? Đột nhiên nói cần dùng xe tôi, xe của bạn đâu?'},
       {speaker:'女', pre:'我弟弟去外地，他开走了，', blank:'这几天回不来', post:'。', py:'Wǒ dìdi qù wàidì, tā kāizǒu le, zhè jǐ tiān huí bu lái.', vn:'Em trai tôi đi tỉnh khác, nó lái xe đi mất rồi, mấy hôm nay chưa về được.'},
     ],
     explain:'男：你怎么了？突然说要用我的车，你的车呢？女：我弟弟去外地，他开走了，这几天回不来。问：关于女的，可以知道什么？ → 现在没有车。'},
    {num:15, options:['在花园','在饭馆','在宾馆'], ans:2,
     lines:[
       {speaker:'女', pre:'喂，', blank:'你下飞机了吗？吃饭了没有', post:'？', py:'Wéi, nǐ xià fēijī le ma? Chīfàn le méiyǒu?', vn:'Alo, bạn xuống máy bay chưa? Ăn cơm chưa?'},
       {speaker:'男', pre:'我刚到宾馆，', blank:'刚才跟朋友在下边的花园聊天儿聊得特别高兴，还没吃饭呢', post:'。', py:'Wǒ gāng dào bīnguǎn, gāngcái gēn péngyou zài xiàbian de huāyuán liáotiānr liáo de tèbié gāoxìng, hái méi chīfàn ne.', vn:'Tôi vừa đến khách sạn, lúc nãy tán gẫu với bạn ở vườn hoa phía dưới vui lắm, vẫn chưa ăn cơm đâu.'},
     ],
     explain:'女：喂，你下飞机了吗？吃饭了没有？男：我刚到宾馆，刚才跟朋友在下边的花园聊天儿聊得特别高兴，还没吃饭呢。问：男的现在在哪儿？ → 在宾馆。'},
    {num:16, options:['在学校工作过','在女的的公司工作过','一直没有工作'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'你妻子找到新工作了吗', post:'？', py:'Nǐ qīzi zhǎodào xīn gōngzuò le ma?', vn:'Vợ bạn tìm được việc mới chưa?'},
       {speaker:'男', pre:'还没呢。', blank:'她刚离开学校，最近一直在家休息', post:'。', py:'Hái méi ne. Tā gāng líkāi xuéxiào, zuìjìn yìzhí zài jiā xiūxi.', vn:'Vẫn chưa. Cô ấy vừa rời trường, dạo này luôn ở nhà nghỉ ngơi.'},
       {speaker:'女', pre:'', blank:'你问问她想不想来我们公司', post:'。', py:'Nǐ wènwen tā xiǎng bu xiǎng lái wǒmen gōngsī.', vn:'Bạn hỏi thử cô ấy có muốn đến công ty chúng tôi không.'},
       {speaker:'男', pre:'谢谢你，', blank:'我回家就告诉她', post:'。', py:'Xièxie nǐ, wǒ huí jiā jiù gàosu tā.', vn:'Cảm ơn bạn, tôi về nhà là báo cho cô ấy ngay.'},
     ],
     explain:'女：你妻子找到新工作了吗？男：还没呢。她刚离开学校，最近一直在家休息。女：你问问她想不想来我们公司。男：谢谢你，我回家就告诉她。问：关于男的的妻子，可以知道什么？ → 在学校工作过。'},
    {num:17, options:['现在更漂亮','小时候更漂亮','最爱看照片'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'这些都是你女儿的照片吗', post:'？', py:'Zhèxiē dōu shì nǐ nǚ\'ér de zhàopiàn ma?', vn:'Đây đều là ảnh con gái bạn à?'},
       {speaker:'女', pre:'对，', blank:'这是今年的，那是她六岁时的', post:'。', py:'Duì, zhè shì jīnnián de, nà shì tā liù suì shí de.', vn:'Đúng vậy, đây là ảnh năm nay, kia là lúc cháu 6 tuổi.'},
       {speaker:'男', pre:'', blank:'你女儿越来越漂亮了', post:'！', py:'Nǐ nǚ\'ér yuè lái yuè piàoliang le!', vn:'Con gái bạn ngày càng xinh!'},
       {speaker:'女', pre:'谢谢，', blank:'她最爱听这些了', post:'。', py:'Xièxie, tā zuì ài tīng zhèxiē le.', vn:'Cảm ơn, cháu thích nghe những lời này nhất đấy.'},
     ],
     explain:'男：这些都是你女儿的照片吗？女：对，这是今年的，那是她六岁时的。男：你女儿越来越漂亮了！女：谢谢，她最爱听这些了。问：关于女儿，可以知道什么？ → 现在更漂亮。'},
    {num:18, options:['考得不好','睡不着','喜欢看电视'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'我刚到北京，晚上总是睡不着', post:'。', py:'Wǒ gāng dào Běijīng, wǎnshang zǒngshì shuì bu zháo.', vn:'Tôi vừa đến Bắc Kinh, buổi tối cứ ngủ không được.'},
       {speaker:'女', pre:'', blank:'我睡不着的时候喜欢看电视，你也看看吧', post:'。', py:'Wǒ shuì bu zháo de shíhou xǐhuan kàn diànshì, nǐ yě kànkan ba.', vn:'Lúc tôi ngủ không được thì thích xem tivi, bạn cũng xem thử đi.'},
       {speaker:'男', pre:'我听不懂汉语，也看不懂汉字。', blank:'多没意思啊', post:'！', py:'Wǒ tīng bu dǒng Hànyǔ, yě kàn bu dǒng Hànzì. Duō méi yìsi a!', vn:'Tôi không nghe hiểu tiếng Trung, cũng không đọc hiểu chữ Hán. Chán quá!'},
       {speaker:'女', pre:'', blank:'那跟我聊聊天儿吧', post:'。', py:'Nà gēn wǒ liáoliao tiānr ba.', vn:'Vậy tán gẫu với tôi đi.'},
     ],
     explain:'男：我刚到北京，晚上总是睡不着。女：我睡不着的时候喜欢看电视，你也看看吧。男：我听不懂汉语，也看不懂汉字。多没意思啊！女：那跟我聊聊天儿吧。问：男的有什么问题？ → 睡不着。'},
    {num:19, options:['去商店买东西了','找不到回家的路了','帮孩子的忙了'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'怎么回来这么晚？去哪儿了', post:'？', py:'Zěnme huílai zhème wǎn? Qù nǎr le?', vn:'Sao về muộn vậy? Đi đâu rồi?'},
       {speaker:'男', pre:'你不是让我给小猫买点儿吃的吗？', blank:'刚才我去商店了', post:'。', py:'Nǐ bú shì ràng wǒ gěi xiǎomāo mǎi diǎnr chī de ma? Gāngcái wǒ qù shāngdiàn le.', vn:'Chẳng phải bạn bảo tôi mua chút đồ ăn cho mèo con sao? Lúc nãy tôi ra cửa hàng rồi.'},
       {speaker:'女', pre:'商店就在楼下。', blank:'你还去什么地方了', post:'？', py:'Shāngdiàn jiù zài lóuxià. Nǐ hái qù shénme dìfang le?', vn:'Cửa hàng ở ngay dưới lầu mà. Bạn còn đi đâu nữa?'},
       {speaker:'男', pre:'刚出商店，有个孩子找不到回家的路了，', blank:'我过去帮他给他家里打了个电话', post:'。', py:'Gāng chū shāngdiàn, yǒu ge háizi zhǎo bu dào huí jiā de lù le, wǒ guòqu bāng tā gěi tā jiālǐ dǎle ge diànhuà.', vn:'Vừa ra khỏi cửa hàng, có một đứa trẻ tìm không thấy đường về nhà, tôi qua giúp gọi điện về nhà cho cậu bé.'},
     ],
     explain:'女：怎么回来这么晚？去哪儿了？男：你不是让我给小猫买点儿吃的吗？刚才我去商店了。女：商店就在楼下。你还去什么地方了？男：刚出商店，有个孩子找不到回家的路了，我过去帮他给他家里打了个电话。问：男的为什么回来晚了？ → 帮孩子的忙了。'},
    {num:20, options:['手里的东西多','看不见前边那个人','离周朋很近'], ans:0,
     lines:[
       {speaker:'女', pre:'看，', blank:'前边那个人是不是周朋', post:'？', py:'Kàn, qiánbian nàge rén shì bu shì Zhōu Péng?', vn:'Nhìn kìa, người đằng trước có phải Chu Bằng không?'},
       {speaker:'男', pre:'离得太远，', blank:'我看不清楚', post:'。', py:'Lí de tài yuǎn, wǒ kàn bu qīngchu.', vn:'Cách xa quá, tôi nhìn không rõ.'},
       {speaker:'女', pre:'', blank:'我们快点儿走过去看看是不是他', post:'。', py:'Wǒmen kuài diǎnr zǒu guòqu kànkan shì bu shì tā.', vn:'Chúng ta đi nhanh qua xem có phải anh ấy không.'},
       {speaker:'男', pre:'刚才买了这么多东西，你也不帮我拿，', blank:'我走不快', post:'。', py:'Gāngcái mǎile zhème duō dōngxi, nǐ yě bù bāng wǒ ná, wǒ zǒu bu kuài.', vn:'Lúc nãy mua nhiều đồ thế này, bạn cũng không giúp tôi cầm, tôi đi không nhanh được.'},
     ],
     explain:'女：看，前边那个人是不是周朋？男：离得太远，我看不清楚。女：我们快点儿走过去看看是不是他。男：刚才买了这么多东西，你也不帮我拿，我走不快。问：关于男的，可以知道什么？ → 手里的东西多。'},
  ],
};
