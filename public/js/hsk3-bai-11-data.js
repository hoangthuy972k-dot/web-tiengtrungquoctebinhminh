// ══════════════════════════════════════════
// DATA — HSK3 Bài 11: 别忘了把空调关了 (Đừng quên tắt máy điều hòa không khí nhé)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'图书馆',py:'túshūguǎn',pos:'Danh từ',vn:'thư viện',em:'📚',lesson:1,
   explain:['Nơi lưu trữ và cho mượn sách, tài liệu để đọc, học tập.'],
   usage:'Danh từ; đi cùng động từ 去: 去图书馆.',
   collo:['去图书馆','在图书馆','图书馆借书'],
   ex_zh:'我去图书馆借本书。',ex_py:'Wǒ qù túshūguǎn jiè běn shū.',ex_vn:'Mình đi thư viện mượn một quyển sách.',
   exList:[
     {zh:'我去图书馆借本书。',py:'Wǒ qù túshūguǎn jiè běn shū.',vn:'Mình đi thư viện mượn một quyển sách.'},
     {zh:'教室里人太多了，我们去图书馆学习吧，那儿比较安静。',py:'Jiàoshì lǐ rén tài duō le, wǒmen qù túshūguǎn xuéxí ba, nàr bǐjiào ānjìng.',vn:'Trong lớp học đông người quá, chúng ta đi thư viện học đi, ở đó khá yên tĩnh.'},
     {zh:'你昨天让我去图书馆把书还了，你忘了？',py:'Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?',vn:'Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?'},
   ],
   hanzi:[
     {c:'馆',p:'guǎn',type:'左右结构 · Trái-phải',st:11,ord:'饣 trái → 官 phải',rad:'饣 (thực – ăn uống)',mean:'quán, tòa nhà công cộng',
      tip:'饣(ăn uống, ý chỉ nơi tiếp đãi) + 官(quan, cơ quan) → tòa nhà công cộng để phục vụ/lưu trữ = QUÁN, THƯ VIỆN.',
      cf:'官 (guān – "quan chức", không có bộ 饣")',w:'图书馆 / 博物馆 / 饭馆'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn đi thư viện thì giúp mình trả quyển sách này nhé.',answer:'如果你去图书馆，就帮我把这本书还了吧。',answerPy:'Rúguǒ nǐ qù túshūguǎn, jiù bāng wǒ bǎ zhè běn shū huán le ba.',
      note:'把字句 (把+B+động từ) diễn tả sự xử lý sự vật xác định (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn đi thư viện thì có thể mượn quyển từ điển đó.',answer:'只要你去图书馆，就可以借那本词典。',answerPy:'Zhǐyào nǐ qù túshūguǎn, jiù kěyǐ jiè nà běn cídiǎn.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 词典 sẽ học ngay bên dưới).'},
   ]},

  {n:2,zh:'借',py:'jiè',pos:'Động từ',vn:'mượn, vay',em:'📖',lesson:1,
   explain:['Sử dụng tạm thời vật của người khác, hoặc cho người khác mượn.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 借 + [vật] (借书, 借钱).',
   collo:['借书','借钱','借用'],
   ex_zh:'我去图书馆借本书。',ex_py:'Wǒ qù túshūguǎn jiè běn shū.',ex_vn:'Mình đi thư viện mượn một quyển sách.',
   exList:[
     {zh:'我去图书馆借本书。',py:'Wǒ qù túshūguǎn jiè běn shū.',vn:'Mình đi thư viện mượn một quyển sách.'},
     {zh:'方便的时候再借我用用。',py:'Fāngbiàn de shíhou zài jiè wǒ yòngyong.',vn:'Lúc nào tiện thì cho mình mượn dùng tiếp nhé.'},
     {zh:'把词典还我吧，我要用一下。',py:'Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.',vn:'Trả từ điển cho mình đi, mình cần dùng chút.'},
   ],
   hanzi:[
     {c:'借',p:'jiè',type:'左右结构 · Trái-phải',st:10,ord:'亻 trái → 昔 phải',rad:'亻 (nhân – người)',mean:'mượn, vay',
      tip:'亻(người) + 昔(ngày xưa, ý chỉ đã lâu) → người CHO/NHẬN vật trong một khoảng thời gian = MƯỢN, VAY.',
      cf:'惜 (xī – "tiếc nuối", có bộ 忄")',w:'借书 / 借钱 / 借用'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng quên mang theo từ điển khi đi học.',answer:'上课的时候别忘了带词典。',answerPy:'Shàngkè de shíhou bié wàngle dài cídiǎn.',
      note:'别忘了 + V diễn tả lời nhắc nhở (ôn lại 带 đã học ở Bài 1).'},
     {promptLang:'vi',prompt:'Nếu bạn cần tiền thì có thể mượn tôi một ít.',answer:'如果你需要钱，就可以借我一些。',answerPy:'Rúguǒ nǐ xūyào qián, jiù kěyǐ jiè wǒ yìxiē.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'词典',py:'cídiǎn',pos:'Danh từ',vn:'từ điển',em:'📕',lesson:1,
   explain:['Sách tra cứu nghĩa, cách dùng của từ ngữ.'],
   usage:'Danh từ; lượng từ đi kèm là 本: 一本词典.',
   collo:['一本词典','借词典','还词典'],
   ex_zh:'帮我把这本词典还了吧。',ex_py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',ex_vn:'Giúp mình trả quyển từ điển này nhé.',
   exList:[
     {zh:'帮我把这本词典还了吧。',py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',vn:'Giúp mình trả quyển từ điển này nhé.'},
     {zh:'把词典还我吧，我要用一下。',py:'Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.',vn:'Trả từ điển cho mình đi, mình cần dùng chút.'},
     {zh:'这本词典是我朋友的，不是我的。',py:'Zhè běn cídiǎn shì wǒ péngyou de, bú shì wǒ de.',vn:'Quyển từ điển này là của bạn tôi, không phải của tôi.'},
   ],
   hanzi:[
     {c:'典',p:'diǎn',type:'上下结构 · Trên-dưới',st:8,ord:'曲(biến thể) trên → 八 dưới',rad:'八 (bát)',mean:'kinh điển, sách chuẩn mực',
      tip:'Chữ cổ mô phỏng hai tay nâng cuốn sách quý trên giá đỡ → SÁCH CHUẨN MỰC, mở rộng thành TỪ ĐIỂN.',
      cf:'点 (diǎn – "điểm", không liên quan nghĩa")',w:'词典 / 字典 / 经典'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quyển từ điển này là của thư viện, không phải tôi mua.',answer:'这本词典是图书馆的，不是我买的。',answerPy:'Zhè běn cídiǎn shì túshūguǎn de, bú shì wǒ mǎi de.',
      note:'是……的 diễn tả sở hữu.'},
     {promptLang:'vi',prompt:'Vì tôi cần dùng từ điển nên tôi mượn thư viện một quyển.',answer:'因为我需要用词典，所以我在图书馆借了一本。',answerPy:'Yīnwèi wǒ xūyào yòng cídiǎn, suǒyǐ wǒ zài túshūguǎn jièle yì běn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 图书馆 vừa học trong bài này).'},
   ]},

  {n:4,zh:'还',py:'huán',pos:'Động từ',vn:'trả',em:'↩️',lesson:1,
   explain:['Đưa lại vật đã mượn cho chủ sở hữu.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 还 + [vật] (还书, 还钱); thường dùng trong 把字句: 把……还了.',
   collo:['还书','还钱','把……还了'],
   ex_zh:'帮我把这本词典还了吧。',ex_py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',ex_vn:'Giúp mình trả quyển từ điển này nhé.',
   exList:[
     {zh:'帮我把这本词典还了吧。',py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',vn:'Giúp mình trả quyển từ điển này nhé.'},
     {zh:'把词典还我吧，我要用一下。',py:'Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.',vn:'Trả từ điển cho mình đi, mình cần dùng chút.'},
     {zh:'你昨天让我去图书馆把书还了，你忘了？',py:'Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?',vn:'Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?'},
   ],
   hanzi:[
     {c:'还',p:'huán',type:'半包围结构 · Bán bao vây',st:7,ord:'辶 bao ngoài → 不(biến thể) trong',rad:'辶 (sước – đi)',mean:'trả lại, quay về',
      tip:'辶(đi) → mang vật ĐI TRỞ LẠI nơi cũ = TRẢ LẠI (đọc "huán"); cùng chữ này đọc "hái" thì mang nghĩa "vẫn, còn".',
      cf:'环 (huán – "vòng tròn", có bộ 王")',w:'还书 / 还钱 / 归还'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin lỗi, tôi quên mất chuyện trả sách rồi.',answer:'对不起，我把还书的事忘了。',answerPy:'Duìbuqǐ, wǒ bǎ huánshū de shì wàng le.',
      note:'把字句 diễn tả việc bị quên (ôn lại 忘记 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn không trả sách thì thư viện sẽ gọi điện nhắc bạn.',answer:'如果你不还书，图书馆就会打电话提醒你。',answerPy:'Rúguǒ nǐ bù huán shū, túshūguǎn jiù huì dǎ diànhuà tíxǐng nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 图书馆 vừa học trong bài này).'},
   ]},

  {n:5,zh:'灯',py:'dēng',pos:'Danh từ',vn:'đèn',em:'💡',lesson:1,
   explain:['Vật dụng phát sáng dùng để chiếu sáng.'],
   usage:'Danh từ; đi cùng động từ 关/开: 关灯, 开灯.',
   collo:['开灯','关灯','一盏灯'],
   ex_zh:'记得把灯关了。',ex_py:'Jìde bǎ dēng guān le.',ex_vn:'Nhớ tắt đèn nhé.',
   exList:[
     {zh:'记得把灯关了。',py:'Jìde bǎ dēng guān le.',vn:'Nhớ tắt đèn nhé.'},
     {zh:'会议结束后，你记得把空调和灯都关了。',py:'Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.',vn:'Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé.'},
     {zh:'你的电脑关了没有？',py:'Nǐ de diànnǎo guānle méiyǒu?',vn:'Máy tính của bạn tắt chưa?'},
   ],
   hanzi:[
     {c:'灯',p:'dēng',type:'左右结构 · Trái-phải',st:6,ord:'火 trái → 丁 phải',rad:'火 (hỏa – lửa)',mean:'đèn',
      tip:'火(lửa, ánh sáng) + 丁(âm đọc, ý chỉ vật nhỏ cố định) → vật phát ra ÁNH SÁNG = ĐÈN.',
      cf:'钉 (dīng – "cái đinh", có bộ 钅")',w:'开灯 / 关灯 / 一盏灯'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lát nữa khi bạn rời khỏi lớp học, nhớ tắt đèn nhé.',answer:'等一会儿你离开教室的时候，记得把灯关了。',answerPy:'Děng yíhuìr nǐ líkāi jiàoshì de shíhou, jìde bǎ dēng guān le.',
      note:'把字句 diễn tả hành động xử lý sự vật (灯) theo yêu cầu.'},
     {promptLang:'vi',prompt:'Tuy cuộc họp đã kết thúc nhưng anh ấy quên tắt đèn.',answer:'虽然会议结束了，但是他忘了把灯关了。',answerPy:'Suīrán huìyì jiéshù le, dànshì tā wàngle bǎ dēng guān le.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 会议/结束 sẽ học ngay bên dưới).'},
   ]},

  {n:6,zh:'会议',py:'huìyì',pos:'Danh từ',vn:'hội nghị, cuộc họp',em:'💼',lesson:2,
   explain:['Buổi tập hợp để thảo luận, quyết định vấn đề chung.'],
   usage:'Danh từ; đi cùng động từ 开: 开会议; hoặc 会议 + 结束.',
   collo:['开会议','会议结束','参加会议'],
   ex_zh:'会议结束后，别忘记把空调关了。',ex_py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',ex_vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.',
   exList:[
     {zh:'会议结束后，别忘记把空调关了。',py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.'},
     {zh:'会议结束后，你记得把空调和灯都关了。',py:'Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.',vn:'Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé.'},
     {zh:'我明天出去开会，你能帮我照顾一下小雨吗？',py:'Wǒ míngtiān chūqu kāihuì, nǐ néng bāng wǒ zhàogù yíxià Xiǎoyǔ ma?',vn:'Ngày mai tôi ra ngoài họp, bạn có thể giúp tôi trông Tiểu Vũ một chút không?'},
   ],
   hanzi:[
     {c:'议',p:'yì',type:'左右结构 · Trái-phải',st:5,ord:'讠 trái → 义 phải',rad:'讠 (ngôn – lời nói)',mean:'bàn bạc, nghị luận',
      tip:'讠(lời nói) + 义(chính nghĩa, lẽ phải) → nói ra để bàn về LẼ PHẢI = BÀN BẠC; 会议 = cuộc họp bàn bạc.',
      cf:'仪 (yí – "nghi thức", có 亻 thay vì 讠")',w:'会议 / 开会 / 议论'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi cuộc họp bắt đầu, làm ơn tắt điện thoại đi.',answer:'会议开始前，请把手机关了。',answerPy:'Huìyì kāishǐ qián, qǐng bǎ shǒujī guān le.',
      note:'把字句 diễn tả hành động xử lý sự vật xác định (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn tham gia cuộc họp thì nhớ mang theo laptop nhé.',answer:'如果你参加会议，就记得带笔记本电脑。',answerPy:'Rúguǒ nǐ cānjiā huìyì, jiù jìde dài bǐjìběn diànnǎo.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 参加 đã học ở Bài 9).'},
   ]},

  {n:7,zh:'结束',py:'jiéshù',pos:'Động từ',vn:'kết thúc, chấm dứt',em:'🏁',lesson:2,
   explain:['Hoạt động, sự việc đi đến hồi cuối.'],
   usage:'Động từ, đứng độc lập hoặc mang tân ngữ: 结束了, 会议结束.',
   collo:['会议结束','结束了','还没结束'],
   ex_zh:'会议结束后，别忘记把空调关了。',ex_py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',ex_vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.',
   exList:[
     {zh:'会议结束后，别忘记把空调关了。',py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.'},
     {zh:'运动会什么时候结束？五点左右吧。',py:'Yùndònghuì shénme shíhou jiéshù? Wǔ diǎn zuǒyòu ba.',vn:'Hội thao khi nào kết thúc? Khoảng 5 giờ thôi.'},
     {zh:'结束一天的工作以后，你和家人一起吃晚饭。',py:'Jiéshù yìtiān de gōngzuò yǐhòu, nǐ hé jiārén yìqǐ chī wǎnfàn.',vn:'Kết thúc một ngày làm việc, bạn cùng gia đình ăn tối.'},
   ],
   hanzi:[
     {c:'束',p:'shù',type:'独体字 · Chữ đơn',st:7,ord:'木+口(biến thể)',rad:'木 (mộc – cây)',mean:'bó, buộc',
      tip:'Chữ tượng hình mô phỏng một bó cây bị BUỘC lại → BÓ, mở rộng nghĩa "đóng lại, chấm dứt" = KẾT THÚC.',
      cf:'速 (sù – "nhanh chóng", có bộ 辶")',w:'结束 / 一束花'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phim chừng nào kết thúc?',answer:'电影什么时候结束？',answerPy:'Diànyǐng shénme shíhou jiéshù?',
      note:'什么时候 hỏi thời gian.'},
     {promptLang:'vi',prompt:'Chỉ cần cuộc họp kết thúc thì chúng ta có thể đi ăn cơm.',answer:'只要会议结束，我们就可以去吃饭。',answerPy:'Zhǐyào huìyì jiéshù, wǒmen jiù kěyǐ qù chīfàn.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 会议 vừa học trong bài này).'},
   ]},

  {n:8,zh:'忘记',py:'wàngjì',pos:'Động từ',vn:'quên',em:'🤔',lesson:2,
   explain:['Không còn nhớ, để mất khỏi trí nhớ.'],
   usage:'Động từ, mang tân ngữ trực tiếp hoặc dùng trong 把字句: 别忘记 + V, 把……忘记了.',
   collo:['别忘记','忘记了','把……忘了'],
   ex_zh:'会议结束后，别忘记把空调关了。',ex_py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',ex_vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.',
   exList:[
     {zh:'会议结束后，别忘记把空调关了。',py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.'},
     {zh:'我把爸爸的生日忘了。',py:'Wǒ bǎ bàba de shēngrì wàng le.',vn:'Con quên mất sinh nhật bố rồi.'},
     {zh:'你昨天让我去图书馆把书还了，你忘了？',py:'Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?',vn:'Hôm qua bạn bảo mình đi thư viện trả sách rồi, bạn quên à?'},
   ],
   hanzi:[
     {c:'忘',p:'wàng',type:'上下结构 · Trên-dưới',st:7,ord:'亡 trên → 心 dưới',rad:'心 (tâm – tim, tâm trí)',mean:'quên',
      tip:'亡(mất đi) + 心(tâm trí) → điều gì đó MẤT ĐI khỏi TÂM TRÍ = QUÊN.',
      cf:'忙 (máng – "bận rộn", có 忄 thay vì 心")',w:'忘记 / 忘了 / 别忘了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi quên mất bài tập cô giáo giao rồi.',answer:'我把老师说的作业忘了。',answerPy:'Wǒ bǎ lǎoshī shuō de zuòyè wàng le.',
      note:'把字句: 把+B(作业)+忘了 diễn tả sự việc bị quên.'},
     {promptLang:'vi',prompt:'Xin lỗi, tôi quên mất chuyện đó rồi.',answer:'对不起，我把那件事忘了。',answerPy:'Duìbuqǐ, wǒ bǎ nà jiàn shì wàng le.',
      note:'把字句 diễn tả sự việc bị quên.'},
   ]},

  {n:9,zh:'空调',py:'kōngtiáo',pos:'Danh từ',vn:'máy điều hòa không khí',em:'❄️',lesson:2,
   explain:['Thiết bị điều chỉnh nhiệt độ không khí trong phòng.'],
   usage:'Danh từ; đi cùng động từ 开/关: 开空调, 关空调.',
   collo:['开空调','关空调','空调坏了'],
   ex_zh:'别忘记把空调关了。',ex_py:'Bié wàngjì bǎ kōngtiáo guān le.',ex_vn:'Đừng quên tắt máy điều hòa nhé.',
   exList:[
     {zh:'别忘记把空调关了。',py:'Bié wàngjì bǎ kōngtiáo guān le.',vn:'Đừng quên tắt máy điều hòa nhé.'},
     {zh:'空调下面怎么这么多水？',py:'Kōngtiáo xiàmian zěnme zhème duō shuǐ?',vn:'Sao dưới máy điều hòa nhiều nước thế?'},
     {zh:'你记得把空调和灯都关了。',py:'Nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.',vn:'Bạn nhớ tắt cả máy điều hòa và đèn nhé.'},
   ],
   hanzi:[
     {c:'调',p:'tiáo',type:'左右结构 · Trái-phải',st:10,ord:'讠 trái → 周 phải',rad:'讠 (ngôn – lời nói)',mean:'điều chỉnh',
      tip:'讠(nói, ý chỉ hòa hợp) + 周(khắp, đều) → làm cho MỌI THỨ hòa hợp đều đặn = ĐIỀU CHỈNH; 空调 = điều chỉnh không khí.',
      cf:'周 (zhōu – "vòng, tuần", không có bộ 讠")',w:'空调 / 调整'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng quên khóa cửa nhé.',answer:'别忘记把门锁了。',answerPy:'Bié wàngjì bǎ mén suǒ le.',
      note:'别 + V diễn tả lời nhắc nhở/mệnh lệnh, kết hợp 把字句.'},
     {promptLang:'vi',prompt:'Nếu trời nóng thì bạn mở máy điều hòa lên đi.',answer:'如果天气热，你就开空调吧。',answerPy:'Rúguǒ tiānqì rè, nǐ jiù kāi kōngtiáo ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'关',py:'guān',pos:'Động từ',vn:'tắt, đóng',em:'🔴',lesson:2,
   explain:['Ngừng hoạt động một thiết bị, hoặc đóng lại một vật.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 关 + [vật] (关灯, 关空调); thường dùng trong 把字句.',
   collo:['关灯','关空调','关门'],
   ex_zh:'别忘记把空调关了。',ex_py:'Bié wàngjì bǎ kōngtiáo guān le.',ex_vn:'Đừng quên tắt máy điều hòa nhé.',
   exList:[
     {zh:'别忘记把空调关了。',py:'Bié wàngjì bǎ kōngtiáo guān le.',vn:'Đừng quên tắt máy điều hòa nhé.'},
     {zh:'记得把灯关了。',py:'Jìde bǎ dēng guān le.',vn:'Nhớ tắt đèn nhé.'},
     {zh:'饭菜都做好了，把电脑关了吧？先吃饭。',py:'Fàncài dōu zuòhǎo le, bǎ diànnǎo guān le ba? Xiān chīfàn.',vn:'Cơm nước xong hết rồi, tắt máy tính đi nhé? Ăn cơm trước đã.'},
   ],
   hanzi:[
     {c:'关',p:'guān',type:'独体字 · Chữ đơn',st:6,ord:'nét liền',rad:'冫(băng)',mean:'đóng, tắt; liên quan',
      tip:'Chữ giản thể mô phỏng cánh cửa được ĐÓNG LẠI → ĐÓNG, TẮT; mở rộng nghĩa LIÊN QUAN (关系).',
      cf:'并 (bìng – "cùng, và", hình dáng khác hẳn")',w:'关灯 / 关门 / 关系'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cửa lớp học đóng chưa?',answer:'教室的门关了没有？',answerPy:'Jiàoshì de mén guānle méiyǒu?',
      note:'V+了+没有 hỏi hành động đã hoàn thành chưa.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn tắt máy điều hòa thì phòng sẽ không lạnh nữa.',answer:'只要你把空调关了，房间就不会冷了。',answerPy:'Zhǐyào nǐ bǎ kōngtiáo guān le, fángjiān jiù bú huì lěng le.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 空调 vừa học trong bài này).'},
   ]},

  {n:11,zh:'地铁',py:'dìtiě',pos:'Danh từ',vn:'tàu điện ngầm',em:'🚇',lesson:2,
   explain:['Phương tiện giao thông công cộng chạy dưới lòng đất.'],
   usage:'Danh từ; đi cùng động từ 坐: 坐地铁.',
   collo:['坐地铁','地铁站','地铁上'],
   ex_zh:'他正坐地铁来我们公司呢。',ex_py:'Tā zhèng zuò dìtiě lái wǒmen gōngsī ne.',ex_vn:'Ông ấy đang đi tàu điện ngầm đến công ty mình đấy.',
   exList:[
     {zh:'他正坐地铁来我们公司呢。',py:'Tā zhèng zuò dìtiě lái wǒmen gōngsī ne.',vn:'Ông ấy đang đi tàu điện ngầm đến công ty mình đấy.'},
     {zh:'上下班都不用坐地铁了，骑自行车就可以。',py:'Shàng-xiàbān dōu búyòng zuò dìtiě le, qí zìxíngchē jiù kěyǐ.',vn:'Đi làm về đều không cần đi tàu điện ngầm nữa, đi xe đạp là được.'},
     {zh:'这儿附近有眼镜店吗？地铁站旁边有一个。',py:'Zhèr fùjìn yǒu yǎnjìngdiàn ma? Dìtiě zhàn pángbiān yǒu yí ge.',vn:'Gần đây có cửa hàng kính không? Bên cạnh ga tàu điện ngầm có một cái.'},
   ],
   hanzi:[
     {c:'铁',p:'tiě',type:'左右结构 · Trái-phải',st:10,ord:'钅 trái → 失 phải',rad:'钅 (kim – kim loại)',mean:'sắt',
      tip:'钅(kim loại) + 失(mất, ý chỉ màu đen xỉn) → kim loại màu ĐEN XỈN = SẮT; 地铁 = "đường sắt dưới đất" = TÀU ĐIỆN NGẦM.',
      cf:'跌 (diē – "ngã", có bộ 足")',w:'地铁 / 铁路 / 地铁站'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giám đốc Chu khoảng 3 giờ sẽ đến công ty bằng tàu điện ngầm.',answer:'周经理三点左右会坐地铁到公司。',answerPy:'Zhōu jīnglǐ sān diǎn zuǒyòu huì zuò dìtiě dào gōngsī.',
      note:'三点左右 = số ước lượng (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu gần nhà bạn có ga tàu điện ngầm thì sẽ rất tiện.',answer:'如果你家附近有地铁站，就会很方便。',answerPy:'Rúguǒ nǐ jiā fùjìn yǒu dìtiě zhàn, jiù huì hěn fāngbiàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 附近/方便 đã học ở Bài 10).'},
   ]},

  {n:12,zh:'双',py:'shuāng',pos:'Lượng từ',vn:'đôi',em:'👞',lesson:3,
   explain:['Đơn vị đếm các vật đi thành cặp như đũa, giày.'],
   usage:'Lượng từ, đứng sau số từ: [số từ] + 双 + [danh từ] (一双筷子).',
   collo:['一双筷子','一双鞋','两双'],
   ex_zh:'还差一双筷子，你去拿一下。',ex_py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',ex_vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.',
   exList:[
     {zh:'还差一双筷子，你去拿一下。',py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.'},
     {zh:'服务员，这儿只有一双筷子，请再给我们拿一双。',py:'Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.',vn:'Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi.'},
     {zh:'拿两双筷子就可以了，今天爸爸不回来吃晚饭。',py:'Ná liǎng shuāng kuàizi jiù kěyǐ le, jīntiān bàba bù huílai chī wǎnfàn.',vn:'Lấy hai đôi đũa là được rồi, hôm nay bố không về ăn tối.'},
   ],
   hanzi:[
     {c:'双',p:'shuāng',type:'左右结构 · Trái-phải',st:4,ord:'又+又 (kết hợp)',rad:'又 (hựu)',mean:'đôi, cặp',
      tip:'Chữ giản thể mô phỏng HAI bàn tay (又+又) chụm lại → ĐÔI, CẶP.',
      cf:'反 (fǎn – "trái ngược", chỉ có 1 chữ 又")',w:'一双筷子 / 一双鞋'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ mua hai đôi giày thể thao cho hai anh em chúng tôi.',answer:'妈妈买了两双运动鞋给我们兄弟俩。',answerPy:'Māma mǎile liǎng shuāng yùndòngxié gěi wǒmen xiōngdì liǎ.',
      note:'两双 + danh từ (运动鞋) đếm vật theo đôi.'},
     {promptLang:'vi',prompt:'Chỉ cần lấy hai đôi đũa là đủ rồi.',answer:'只要拿两双筷子就够了。',answerPy:'Zhǐyào ná liǎng shuāng kuàizi jiù gòu le.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:13,zh:'筷子',py:'kuàizi',pos:'Danh từ',vn:'đũa',em:'🥢',lesson:3,
   explain:['Dụng cụ ăn cơm truyền thống gồm hai que.'],
   usage:'Danh từ; lượng từ đi kèm là 双: 一双筷子.',
   collo:['一双筷子','用筷子','拿筷子'],
   ex_zh:'还差一双筷子，你去拿一下。',ex_py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',ex_vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.',
   exList:[
     {zh:'还差一双筷子，你去拿一下。',py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.'},
     {zh:'服务员，这儿只有一双筷子，请再给我们拿一双。',py:'Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.',vn:'Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi.'},
     {zh:'拿两双筷子就可以了，今天爸爸不回来吃晚饭。',py:'Ná liǎng shuāng kuàizi jiù kěyǐ le, jīntiān bàba bù huílai chī wǎnfàn.',vn:'Lấy hai đôi đũa là được rồi, hôm nay bố không về ăn tối.'},
   ],
   hanzi:[
     {c:'筷',p:'kuài',type:'上下结构 · Trên-dưới',st:13,ord:'⺮ trên → 快 dưới',rad:'⺮ (trúc – tre)',mean:'đũa',
      tip:'⺮(tre, vật liệu làm đũa) + 快(nhanh) → dụng cụ bằng TRE giúp gắp thức ăn NHANH = ĐŨA.',
      cf:'快 (kuài – "nhanh", không có bộ ⺮")',w:'筷子 / 一双筷子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phục vụ ơi, làm ơn lấy thêm cho chúng tôi một đôi đũa.',answer:'服务员，请再给我们拿一双筷子。',answerPy:'Fúwùyuán, qǐng zài gěi wǒmen ná yì shuāng kuàizi.',
      note:'请 + V diễn tả lời yêu cầu lịch sự (ôn lại 服务员 đã học ở Bài 4).'},
     {promptLang:'vi',prompt:'Nếu thiếu đũa thì bạn đi lấy thêm một đôi đi.',answer:'如果差筷子，你就再去拿一双吧。',answerPy:'Rúguǒ chà kuàizi, nǐ jiù zài qù ná yì shuāng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 差 đã học ở Bài 7).'},
   ]},

  {n:14,zh:'啤酒',py:'píjiǔ',pos:'Danh từ',vn:'bia, rượu bia',em:'🍺',lesson:3,
   explain:['Loại đồ uống có cồn, lên men từ lúa mạch.'],
   usage:'Danh từ; đi cùng động từ 喝: 喝啤酒.',
   collo:['喝啤酒','一瓶啤酒','买啤酒'],
   ex_zh:'那我们今天喝点儿啤酒吧。',ex_py:'Nà wǒmen jīntiān hē diǎnr píjiǔ ba.',ex_vn:'Vậy hôm nay chúng ta uống chút bia đi.',
   exList:[
     {zh:'那我们今天喝点儿啤酒吧。',py:'Nà wǒmen jīntiān hē diǎnr píjiǔ ba.',vn:'Vậy hôm nay chúng ta uống chút bia đi.'},
     {zh:'你去楼下买几瓶啤酒吧。',py:'Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.',vn:'Bạn xuống dưới lầu mua vài chai bia đi.'},
     {zh:'医生说你爸爸一口酒都不能喝。',py:'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.',vn:'Bác sĩ nói bố con không được uống một ngụm rượu nào cả.'},
   ],
   hanzi:[
     {c:'啤',p:'pí',type:'左右结构 · Trái-phải',st:11,ord:'口 trái → 卑 phải',rad:'口 (khẩu – miệng)',mean:'bia (phiên âm)',
      tip:'口(miệng, ý chỉ đồ uống) + 卑(âm đọc mượn từ "beer") → chữ tạo ra để PHIÊN ÂM từ "bia" của phương Tây.',
      cf:'脾 (pí – "lá lách", có bộ 月")',w:'啤酒 / 喝啤酒'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố con không được uống một ngụm rượu nào cả.',answer:'你爸爸一口酒都不能喝。',answerPy:'Nǐ bàba yì kǒu jiǔ dōu bù néng hē.',
      note:'一口……都不能 diễn tả sự cấm đoán tuyệt đối (ôn lại 口 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn đói thì chúng ta uống chút bia trước rồi ăn cơm.',answer:'如果你饿了，我们就先喝点儿啤酒再吃饭。',answerPy:'Rúguǒ nǐ è le, wǒmen jiù xiān hē diǎnr píjiǔ zài chīfàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 饿 đã học ở Bài 4).'},
   ]},

  {n:15,zh:'口',py:'kǒu',pos:'Lượng từ',vn:'miếng, ngụm, hớp',em:'👄',lesson:3,
   explain:['Đơn vị đếm số lần ăn/uống bằng miệng.'],
   usage:'Lượng từ, đứng sau số từ: [số từ] + 口 + [danh từ] (一口水, 一口酒).',
   collo:['一口水','一口酒','喝一口'],
   ex_zh:'医生说你爸爸一口酒都不能喝。',ex_py:'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.',ex_vn:'Bác sĩ nói bố con không được uống một ngụm rượu nào cả.',
   exList:[
     {zh:'医生说你爸爸一口酒都不能喝。',py:'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē.',vn:'Bác sĩ nói bố con không được uống một ngụm rượu nào cả.'},
     {zh:'这种咖啡特别好喝，你快来喝一口吧。',py:'Zhè zhǒng kāfēi tèbié hǎohē, nǐ kuài lái hē yì kǒu ba.',vn:'Loại cà phê này ngon lắm, bạn mau đến uống một ngụm đi.'},
     {zh:'吃几口饭就饱了。',py:'Chī jǐ kǒu fàn jiù bǎo le.',vn:'Ăn mấy miếng cơm là no rồi.'},
   ],
   hanzi:[
     {c:'口',p:'kǒu',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền, hình cái miệng',rad:'口 (khẩu)',mean:'miệng',
      tip:'Chữ tượng hình mô phỏng hình cái MIỆNG đang mở → MIỆNG, mở rộng làm lượng từ đếm miếng/ngụm.',
      cf:'囗 (wéi – bộ "vi", nét vuông đơn giản hơn")',w:'一口 / 口水 / 门口'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loại cà phê này ngon lắm, bạn thử uống một ngụm đi.',answer:'这种咖啡特别好喝，你尝一口吧。',answerPy:'Zhè zhǒng kāfēi tèbié hǎohē, nǐ cháng yì kǒu ba.',
      note:'一口 làm bổ ngữ số lượng cho hành động uống thử.'},
     {promptLang:'vi',prompt:'Chỉ cần uống một ngụm là biết ngay có ngọt hay không.',answer:'只要喝一口，就知道甜不甜了。',answerPy:'Zhǐyào hē yì kǒu, jiù zhīdào tián bù tián le.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 甜 đã học ở Bài 3).'},
   ]},

  {n:16,zh:'瓶子',py:'píngzi',pos:'Danh từ',vn:'lọ, bình',em:'🍾',lesson:3,
   explain:['Vật dụng có cổ nhỏ dùng để đựng chất lỏng.'],
   usage:'Danh từ; cũng dùng làm lượng từ 瓶ế: 一瓶 (một chai/lọ).',
   collo:['酒瓶子','一个瓶子','空瓶子'],
   ex_zh:'别让他看见酒瓶子。',ex_py:'Bié ràng tā kànjiàn jiǔ píngzi.',ex_vn:'Đừng để ông ấy nhìn thấy chai rượu.',
   exList:[
     {zh:'别让他看见酒瓶子。',py:'Bié ràng tā kànjiàn jiǔ píngzi.',vn:'Đừng để ông ấy nhìn thấy chai rượu.'},
     {zh:'桌子上有一个瓶子，是谁的？',py:'Zhuōzi shang yǒu yí ge píngzi, shì shéi de?',vn:'Trên bàn có một cái lọ, của ai vậy?'},
     {zh:'你去楼下买几瓶啤酒吧。',py:'Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.',vn:'Bạn xuống dưới lầu mua vài chai bia đi.'},
   ],
   hanzi:[
     {c:'瓶',p:'píng',type:'上下结构 · Trên-dưới',st:10,ord:'并 trên → 瓦 dưới',rad:'瓦 (ngõa – ngói, gốm)',mean:'chai, lọ',
      tip:'并(kết hợp, gộp lại) + 瓦(đồ gốm) → đồ GỐM có hình dáng để ĐỰNG chất lỏng = CHAI, LỌ.',
      cf:'并 (bìng – "cùng, và", không có bộ 瓦")',w:'瓶子 / 一瓶 / 花瓶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ bảo tôi lấy giúp mẹ một cái lọ.',answer:'妈妈让我去拿一个瓶子。',answerPy:'Māma ràng wǒ qù ná yí ge píngzi.',
      note:'让 + người + V diễn tả sai khiến.'},
     {promptLang:'vi',prompt:'Vì bố không được uống rượu nên mẹ giấu hết chai rượu đi.',answer:'因为爸爸不能喝酒，所以妈妈把酒瓶子都藏起来了。',answerPy:'Yīnwèi bàba bù néng hē jiǔ, suǒyǐ māma bǎ jiǔ píngzi dōu cáng qǐlai le.',
      note:'因为……所以…… kết hợp 把字句 (ôn lại 啤酒 vừa học trong bài này).'},
   ]},

  {n:17,zh:'笔记本(电脑)',py:'bǐjìběn (diànnǎo)',pos:'Danh từ',vn:'máy tính xách tay',em:'💻',lesson:4,
   explain:['Loại máy tính nhỏ gọn, dễ mang theo.'],
   usage:'Danh từ; lượng từ đi kèm là 个/台: 一个笔记本电脑.',
   collo:['一个笔记本电脑','买笔记本电脑','换笔记本电脑'],
   ex_zh:'这个笔记本电脑我去年买的时候要五千块左右。',ex_py:'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu.',ex_vn:'Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng.',
   exList:[
     {zh:'这个笔记本电脑我去年买的时候要五千块左右。',py:'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu.',vn:'Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng.'},
     {zh:'我的笔记本电脑太旧了，我想换一个。',py:'Wǒ de bǐjìběn diànnǎo tài jiù le, wǒ xiǎng huàn yí ge.',vn:'Máy tính xách tay của tôi cũ quá rồi, tôi muốn đổi một cái khác.'},
     {zh:'小周，你帮我看一下笔记本电脑吧。',py:'Xiǎo Zhōu, nǐ bāng wǒ kàn yíxià bǐjìběn diànnǎo ba.',vn:'Tiểu Chu, bạn giúp tôi xem qua máy tính xách tay chút đi.'},
   ],
   hanzi:[
     {c:'脑',p:'nǎo',type:'左右结构 · Trái-phải',st:10,ord:'月 trái → 甾(biến thể) phải',rad:'月 (nhục – thân thể)',mean:'não, bộ óc',
      tip:'月(bộ phận cơ thể) + phần còn lại (hình ảnh bộ não) → NÃO; 电脑 = "não điện" = MÁY TÍNH.',
      cf:'恼 (nǎo – "phiền não", có bộ 忄")',w:'电脑 / 笔记本电脑 / 头脑'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy tính xách tay đó cô ấy mua năm ngoái với giá khoảng tám nghìn đồng.',answer:'那个笔记本电脑她去年买的时候要八千块左右。',answerPy:'Nàge bǐjìběn diànnǎo tā qùnián mǎi de shíhou yào bāqiān kuài zuǒyòu.',
      note:'八千块左右 = số ước lượng (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn đổi máy tính mới thì tôi có thể giúp bạn xem qua.',answer:'如果你想换新笔记本电脑，我就可以帮你看看。',answerPy:'Rúguǒ nǐ xiǎng huàn xīn bǐjìběn diànnǎo, wǒ jiù kěyǐ bāng nǐ kànkan.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 换 đã học ở Bài 10).'},
   ]},

  {n:18,zh:'电子邮件',py:'diànzǐ yóujiàn',pos:'Danh từ',vn:'email',em:'📧',lesson:4,
   explain:['Thư điện tử gửi qua mạng Internet.'],
   usage:'Danh từ; đi cùng động từ 看/发: 看电子邮件, 发电子邮件.',
   collo:['看电子邮件','发电子邮件','收电子邮件'],
   ex_zh:'现在我每天起床后的第一件事就是打开电脑，看电子邮件。',ex_py:'Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.',ex_vn:'Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email.',
   exList:[
     {zh:'现在我每天起床后的第一件事就是打开电脑，看电子邮件。',py:'Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.',vn:'Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email.'},
     {zh:'昨天我还能看电子邮件，今天突然就打不开了。',py:'Zuótiān wǒ hái néng kàn diànzǐ yóujiàn, jīntiān tūrán jiù dǎ bu kāi le.',vn:'Hôm qua tôi vẫn xem email được, hôm nay đột nhiên không mở được nữa.'},
     {zh:'我已经很少写信了。',py:'Wǒ yǐjīng hěn shǎo xiě xìn le.',vn:'Tôi đã rất ít viết thư rồi.'},
   ],
   hanzi:[
     {c:'邮',p:'yóu',type:'左右结构 · Trái-phải',st:7,ord:'由 trái → 阝 phải',rad:'阝 (ấp – vùng đất)',mean:'bưu chính, gửi thư',
      tip:'由(từ, nguồn gốc) + 阝(vùng đất, trạm dịch) → nơi TRUNG CHUYỂN thư từ = BƯU CHÍNH; 邮件 = thư từ, 电子邮件 = thư điện tử.',
      cf:'油 (yóu – "dầu", có bộ 氵")',w:'电子邮件 / 邮件 / 邮局'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc đầu tiên tôi làm mỗi sáng là mở máy tính xem email.',answer:'我每天早上第一件事就是打开电脑看电子邮件。',answerPy:'Wǒ měitiān zǎoshang dì-yī jiàn shì jiùshì dǎkāi diànnǎo kàn diànzǐ yóujiàn.',
      note:'第一件事就是 + V diễn tả việc làm đầu tiên.'},
     {promptLang:'vi',prompt:'Nếu bạn có việc gì thì gửi email cho tôi nhé.',answer:'如果你有事，就给我发电子邮件吧。',answerPy:'Rúguǒ nǐ yǒu shì, jiù gěi wǒ fā diànzǐ yóujiàn ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:19,zh:'习惯',py:'xíguàn',pos:'Động từ/Danh từ',vn:'quen; thói quen',em:'🔁',lesson:4,
   explain:['Đã trở nên quen thuộc với điều gì đó, hoặc bản thân điều lặp lại đã thành thói quen.'],
   usage:'Động từ: 习惯 + V (习惯用电脑); Danh từ: 好习惯, 有习惯.',
   collo:['习惯用','好习惯','还没习惯'],
   ex_zh:'已经习惯用电脑来学习和工作了。',ex_py:'Yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.',ex_vn:'Đã quen dùng máy tính để học tập và làm việc rồi.',
   exList:[
     {zh:'已经习惯用电脑来学习和工作了。',py:'Yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.',vn:'Đã quen dùng máy tính để học tập và làm việc rồi.',},
     {zh:'我已经很少写信，也很少用笔写字，已经习惯用电脑了。',py:'Wǒ yǐjīng hěn shǎo xiě xìn, yě hěn shǎo yòng bǐ xiě zì, yǐjīng xíguàn yòng diànnǎo le.',vn:'Tôi đã rất ít viết thư, cũng rất ít dùng bút viết chữ, đã quen dùng máy tính rồi.'},
     {zh:'哪一天突然没有了电脑，我们怎么办呢？',py:'Nǎ yì tiān tūrán méiyǒule diànnǎo, wǒmen zěnme bàn ne?',vn:'Nếu một ngày nào đó bỗng nhiên không có máy tính nữa, chúng ta phải làm sao đây?'},
   ],
   hanzi:[
     {c:'惯',p:'guàn',type:'左右结构 · Trái-phải',st:11,ord:'忄 trái → 贯 phải',rad:'忄 (tâm – tim, tâm trí)',mean:'quen thuộc',
      tip:'忄(tâm trí) + 贯(xuyên suốt, liên tục) → điều gì đó LẶP LẠI LIÊN TỤC trong tâm trí = QUEN THUỘC.',
      cf:'贯 (guàn – "xuyên suốt", không có bộ 忄")',w:'习惯 / 不习惯 / 好习惯'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã quen dùng máy tính để học tập và làm việc rồi.',answer:'我已经习惯用电脑来学习和工作了。',answerPy:'Wǒ yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.',
      note:'习惯 + V diễn tả thói quen (ôn lại 电脑 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn quen dùng máy tính thì sẽ tiện hơn nhiều.',answer:'只要你习惯用电脑，就会方便多了。',answerPy:'Zhǐyào nǐ xíguàn yòng diànnǎo, jiù huì fāngbiàn duō le.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 方便 đã học ở Bài 10).'},
   ]},
];

const wuData = [
  {img:'📚',label:'图书馆',py:'túshūguǎn',letter:'A'},
  {img:'📖',label:'词典',py:'cídiǎn',letter:'B'},
  {img:'🥢',label:'筷子',py:'kuàizi',letter:'C'},
  {img:'🍺',label:'啤酒',py:'píjiǔ',letter:'D'},
  {img:'🚇',label:'地铁',py:'dìtiě',letter:'E'},
  {img:'💻',label:'笔记本电脑',py:'bǐjìběn diànnǎo',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'小明要去哪儿做什么？',opts:['去图书馆借书','去图书馆还书','去教室上课'],ans:0},
     {q:'同学请小明帮忙做什么？',opts:['把词典还了','把灯关了','把书借了'],ans:0},
     {q:'小明提醒同学做什么？',opts:['离开教室时把灯关了','别忘了还书','早点儿回来'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我先走了。',py:'Wǒ xiān zǒu le.',vn:'Mình đi trước đây.'},
     {sp:1,zh:'你去哪儿？',py:'Nǐ qù nǎr?',vn:'Bạn đi đâu vậy?'},
     {sp:0,zh:'我去图书馆借本书。',py:'Wǒ qù túshūguǎn jiè běn shū.',vn:'Mình đi thư viện mượn một quyển sách.'},
     {sp:1,zh:'帮我把这本词典还了吧。',py:'Bāng wǒ bǎ zhè běn cídiǎn huánle ba.',vn:'Giúp mình trả quyển từ điển này nhé.'},
     {sp:0,zh:'好，等一会儿你离开教室的时候，记得把灯关了。',py:'Hǎo, děng yíhuìr nǐ líkāi jiàoshì de shíhou, jìde bǎ dēng guān le.',vn:'Được, lát nữa khi bạn rời khỏi lớp học, nhớ tắt đèn nhé.'},
     {sp:1,zh:'好的，放心吧。',py:'Hǎo de, fàngxīn ba.',vn:'Được, yên tâm đi.'},
   ]},
  {scene:'在会议室 · Trong phòng họp',
   preQuiz:[
     {q:'周明提醒小丽做什么？',opts:['会议结束后把空调关了','把灯关了','把电脑关了'],ans:0},
     {q:'王经理什么时候来的电话？',opts:['两点左右','三点左右','刚才'],ans:0},
     {q:'王经理正在做什么？',opts:['坐地铁来公司','已经到公司了','在打车'],ans:0},
   ],
   lines:[
     {sp:0,zh:'会议结束后，别忘记把空调关了。',py:'Huìyì jiéshù hòu, bié wàngjì bǎ kōngtiáo guān le.',vn:'Sau khi họp xong, đừng quên tắt máy điều hòa nhé.'},
     {sp:1,zh:'好的。王经理两点左右来了个电话。',py:'Hǎo de. Wáng jīnglǐ liǎng diǎn zuǒyòu láile ge diànhuà.',vn:'Được ạ. Giám đốc Vương lúc 2 giờ có gọi điện đến.'},
     {sp:0,zh:'他已经到北京了？',py:'Tā yǐjīng dào Běijīng le?',vn:'Ông ấy đã đến Bắc Kinh rồi à?'},
     {sp:1,zh:'是的，他正坐地铁来我们公司呢。',py:'Shì de, tā zhèng zuò dìtiě lái wǒmen gōngsī ne.',vn:'Vâng, ông ấy đang đi tàu điện ngầm đến công ty mình đấy.'},
     {sp:0,zh:'等他到了就告诉我。',py:'Děng tā dàole jiù gàosu wǒ.',vn:'Đợi khi ông ấy đến thì báo cho tôi nhé.'},
   ]},
  {scene:'在客厅 · Trong phòng khách',
   preQuiz:[
     {q:'妈妈让儿子去做什么？',opts:['去拿一双筷子','去买啤酒','去关灯'],ans:0},
     {q:'今天是什么日子？',opts:['爸爸的生日','妈妈的生日','儿子的生日'],ans:0},
     {q:'爸爸能喝酒吗？',opts:['一口都不能喝','可以喝一点儿','可以随便喝'],ans:0},
   ],
   lines:[
     {sp:0,zh:'还差一双筷子，你去拿一下。',py:'Hái chà yì shuāng kuàizi, nǐ qù ná yíxià.',vn:'Còn thiếu một đôi đũa, con lấy giúp mẹ đi.'},
     {sp:1,zh:'今天怎么做了这么多菜？',py:'Jīntiān zěnme zuòle zhème duō cài?',vn:'Sao hôm nay mẹ nấu nhiều món thế?'},
     {sp:0,zh:'今天是你爸爸的生日。',py:'Jīntiān shì nǐ bàba de shēngrì.',vn:'Hôm nay là sinh nhật bố con đấy.'},
     {sp:1,zh:'真的啊？我把爸爸的生日忘了。那我们今天喝点儿啤酒吧。',py:'Zhēn de a? Wǒ bǎ bàba de shēngrì wàng le. Nà wǒmen jīntiān hē diǎnr píjiǔ ba.',vn:'Thật á? Con quên mất sinh nhật bố rồi. Vậy hôm nay chúng ta uống chút bia đi.'},
     {sp:0,zh:'医生说你爸爸一口酒都不能喝，别让他看见酒瓶子。',py:'Yīshēng shuō nǐ bàba yì kǒu jiǔ dōu bù néng hē, bié ràng tā kànjiàn jiǔ píngzi.',vn:'Bác sĩ nói bố con không được uống một ngụm rượu nào cả, đừng để ông ấy nhìn thấy chai rượu.'},
   ]},
  {scene:'độc bạch · Tự thuật (thói quen dùng máy tính)',
   preQuiz:[
     {q:'这个笔记本电脑去年买的时候多少钱？',opts:['五千块左右','八千块左右','三千块左右'],ans:0},
     {q:'他想把电脑怎么样？',opts:['卖了，再买更好的','送人','扔了'],ans:0},
     {q:'他现在习惯用什么学习和工作？',opts:['电脑','笔和纸','手机'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这个笔记本电脑我去年买的时候要五千块左右，现在便宜多了。',py:'Zhège bǐjìběn diànnǎo wǒ qùnián mǎi de shíhou yào wǔqiān kuài zuǒyòu, xiànzài piányi duō le.',vn:'Chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng, bây giờ rẻ hơn nhiều rồi.'},
     {sp:0,zh:'我想把这个电脑卖了，再买一个更好的。',py:'Wǒ xiǎng bǎ zhège diànnǎo mài le, zài mǎi yí ge gèng hǎo de.',vn:'Tôi muốn bán chiếc máy tính này đi, rồi mua một cái tốt hơn.'},
     {sp:0,zh:'现在我每天起床后的第一件事就是打开电脑，看电子邮件。',py:'Xiànzài wǒ měitiān qǐchuáng hòu de dì-yī jiàn shì jiùshì dǎkāi diànnǎo, kàn diànzǐ yóujiàn.',vn:'Bây giờ mỗi ngày sau khi thức dậy việc đầu tiên tôi làm là mở máy tính, xem email.'},
     {sp:0,zh:'我已经很少写信，也很少用笔写字，已经习惯用电脑来学习和工作了。',py:'Wǒ yǐjīng hěn shǎo xiě xìn, yě hěn shǎo yòng bǐ xiě zì, yǐjīng xíguàn yòng diànnǎo lái xuéxí hé gōngzuò le.',vn:'Tôi đã rất ít viết thư, cũng rất ít dùng bút viết chữ, đã quen dùng máy tính để học tập và làm việc rồi.'},
     {sp:0,zh:'哪一天突然没有了电脑，我们怎么办呢？',py:'Nǎ yì tiān tūrán méiyǒule diànnǎo, wǒmen zěnme bàn ne?',vn:'Nếu một ngày nào đó bỗng nhiên không có máy tính nữa, chúng ta phải làm sao đây?'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'去',right:'图书馆'},
  {left:'借',right:'一本书'},
  {left:'还',right:'词典'},
  {left:'关',right:'空调'},
  {left:'坐',right:'地铁'},
  {left:'一双',right:'筷子'},
  {left:'喝',right:'啤酒'},
  {left:'因为爸爸不能喝酒，',right:'所以别让他看见酒瓶子。'},
  {left:'虽然会议结束了，',right:'但是他忘了把空调关了。'},
  {left:'如果你去图书馆，',right:'就帮我把词典还了吧。'},
  {left:'只要你习惯用电脑，',right:'就会越来越方便。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'',blank:'图书馆',post:'离我家不远，走路十分钟就到。',hint:'(thư viện)',ans:'图书馆'},
  {pre:'放学后，我想',blank:'借',post:'你的自行车骑一下。',hint:'(mượn)',ans:'借'},
  {pre:'你能把这本',blank:'词典',post:'借给我一天吗？',hint:'(từ điển)',ans:'词典'},
  {pre:'我明天一定把钱',blank:'还',post:'给你。',hint:'(trả)',ans:'还'},
  {pre:'房间里太暗了，你去把',blank:'灯',post:'打开吧。',hint:'(đèn)',ans:'灯'},
  {pre:'今天下午三点有一个',blank:'会议',post:'，你别迟到。',hint:'(cuộc họp)',ans:'会议'},
  {pre:'今天的课八点',blank:'结束',post:'，我们早点儿回家吧。',hint:'(kết thúc)',ans:'结束'},
  {pre:'你别',blank:'忘记',post:'带雨伞，外面下雨了。',hint:'(quên)',ans:'忘记'},
  {pre:'夏天房间很热，我们开',blank:'空调',post:'吧。',hint:'(máy điều hòa)',ans:'空调'},
  {pre:'从我家到公司，坐',blank:'地铁',post:'只要二十分钟。',hint:'(tàu điện ngầm)',ans:'地铁'},
  {pre:'还差一',blank:'双',post:'筷子。',hint:'(đôi)',ans:'双'},
  {pre:'他一',blank:'口',post:'水都没喝，就走了。',hint:'(ngụm)',ans:'口'},
  {pre:'桌子上的',blank:'瓶子',post:'里装的是什么？',hint:'(chai, lọ)',ans:'瓶子'},
  {pre:'来中国以后，我已经',blank:'习惯',post:'吃辣的菜了。',hint:'(quen)',ans:'习惯'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['他','常常','去','图书馆','借','杂志','。'],ans:'他常常去图书馆借杂志。',audio:'他常常去图书馆借杂志。'},
  {words:['麻烦','你','把','这','本','词典','还给','图书馆','吧','。'],ans:'麻烦你把这本词典还给图书馆吧。',audio:'麻烦你把这本词典还给图书馆吧。'},
  {words:['下班','以后','，','请','你','把','电脑','关','了','。'],ans:'下班以后，请你把电脑关了。',audio:'下班以后，请你把电脑关了。'},
  {words:['弟弟','把','手机','忘','在','教室','了','。'],ans:'弟弟把手机忘在教室了。',audio:'弟弟把手机忘在教室了。'},
  {words:['因为','爸爸','不能','喝酒','，','所以','别','让','他','看见','酒','瓶子','。'],ans:'因为爸爸不能喝酒，所以别让他看见酒瓶子。',audio:'因为爸爸不能喝酒，所以别让他看见酒瓶子。'},
  {words:['虽然','会议','结束','了','，','但是','他','忘','了','把','空调','关','了','。'],ans:'虽然会议结束了，但是他忘了把空调关了。',audio:'虽然会议结束了，但是他忘了把空调关了。'},
  {words:['如果','你','去','图书馆','，','就','帮','我','把','词典','还','了','吧','。'],ans:'如果你去图书馆，就帮我把词典还了吧。',audio:'如果你去图书馆，就帮我把词典还了吧。'},
  {words:['我','朋友','的','笔记本','电脑','他','今年','买','的','时候','要','四千','块','左右','。'],ans:'我朋友的笔记本电脑他今年买的时候要四千块左右。',audio:'我朋友的笔记本电脑他今年买的时候要四千块左右。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'请你那本杂志把还给我。',
   opts:['请你把那本杂志还给我。','请你那本杂志把还给我。','请你把还那本杂志给我。','那本杂志请你把还给我。'],ans:0,
   exp:'Cấu trúc 把字句: A+把+B+động từ, 把+B (danh từ xác định) phải đứng liền trước động từ, không tách rời.'},
  {wrong:'你把手机别忘了。',
   opts:['你别把手机忘了。','你把手机别忘了。','别你把手机忘了。','你把别手机忘了。'],ans:0,
   exp:'Phó từ phủ định (别) phải đặt TRƯỚC từ 把, không đặt sau.'},
  {wrong:'我把电脑不能给你。',
   opts:['我不能把电脑给你。','我把电脑不能给你。','我不能电脑把给你。','把我不能电脑给你。'],ans:0,
   exp:'Động từ năng nguyện (不能) phải đặt TRƯỚC từ 把, không đặt sau.'},
  {wrong:'这个笔记本电脑左右要五千块。',
   opts:['这个笔记本电脑要五千块左右。','这个笔记本电脑左右要五千块。','这个笔记本电脑要左右五千块。','左右这个笔记本电脑要五千块。'],ans:0,
   exp:'左右 (số ước lượng) phải đặt SAU con số cụ thể (五千块左右), không đặt trước.'},
  {wrong:'王经理左右两点来了个电话。',
   opts:['王经理两点左右来了个电话。','王经理左右两点来了个电话。','王经理两点来了左右个电话。','左右王经理两点来了个电话。'],ans:0,
   exp:'左右 phải đặt NGAY SAU con số/thời gian cụ thể (两点左右), không đặt trước.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小明要去哪儿？他请同学帮忙做什么？',
     q_vn:'Tiểu Minh định đi đâu? Cậu ấy nhờ bạn học giúp gì?',
     hint:'去图书馆借书，请同学把词典还了和把灯关了',
     sample:'小明要去图书馆借书，他请同学帮他把词典还了，还让同学离开教室时把灯关了。',
     sample_vn:'Tiểu Minh định đi thư viện mượn sách, cậu ấy nhờ bạn học giúp trả quyển từ điển, còn bảo bạn học tắt đèn khi rời khỏi lớp.',
     note:'把字句 diễn tả sự sắp đặt/xử lý đối với sự vật xác định (điểm ngữ pháp bài này).'},
    {q_zh:'周明提醒小丽什么事？王经理什么时候来的电话？',
     q_vn:'Chu Minh nhắc Tiểu Lệ việc gì? Giám đốc Vương gọi điện lúc mấy giờ?',
     hint:'会议结束后把空调关了，两点左右',
     sample:'周明提醒小丽会议结束后要把空调关了，王经理两点左右来了个电话。',
     sample_vn:'Chu Minh nhắc Tiểu Lệ sau khi họp xong phải tắt máy điều hòa, giám đốc Vương lúc 2 giờ có gọi điện đến.',
     note:'两点左右 = số ước lượng (điểm ngữ pháp bài này).'},
    {q_zh:'今天是什么日子？儿子记得吗？',
     q_vn:'Hôm nay là ngày gì? Con trai có nhớ không?',
     hint:'爸爸的生日，儿子忘了',
     sample:'今天是爸爸的生日，但是儿子把爸爸的生日忘了。',
     sample_vn:'Hôm nay là sinh nhật bố, nhưng con trai đã quên mất sinh nhật bố rồi.',
     note:'把字句 diễn tả sự việc bị xử lý/quên (把生日忘了).'},
    {q_zh:'这个人的电脑是什么时候买的？现在他习惯用电脑做什么？',
     q_vn:'Máy tính của người này mua khi nào? Bây giờ anh ấy quen dùng máy tính làm gì?',
     hint:'去年买的，看电子邮件、学习和工作',
     sample:'这个笔记本电脑是他去年买的，现在他每天打开电脑看电子邮件，已经习惯用电脑来学习和工作了。',
     sample_vn:'Chiếc máy tính xách tay này anh ấy mua năm ngoái, bây giờ mỗi ngày anh ấy mở máy tính xem email, đã quen dùng máy tính để học tập và làm việc rồi.',
     note:'习惯 + V diễn tả thói quen.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn nhớ trả cây dù đó cho bạn học nhé.', zh:'你记得把那把伞还给同学吧。', py:'Nǐ jìde bǎ nà bǎ sǎn huán gěi tóngxué ba.'},
  {vi:'Nếu trời tối rồi thì bạn mở đèn lên đi.', zh:'如果天黑了，你就把灯打开吧。', py:'Rúguǒ tiān hēi le, nǐ jiù bǎ dēng dǎkāi ba.'},
  {vi:'Nếu cuộc họp kết thúc muộn thì đừng quên gọi điện cho tôi.', zh:'如果会议结束得晚，就别忘记给我打电话。', py:'Rúguǒ huìyì jiéshù de wǎn, jiù bié wàngjì gěi wǒ dǎ diànhuà.'},
  {vi:'Nếu bạn không muốn đi taxi thì có thể đi tàu điện ngầm đến đây.', zh:'如果你不想打车，就可以坐地铁过来。', py:'Rúguǒ nǐ bù xiǎng dǎchē, jiù kěyǐ zuò dìtiě guòlai.'},
  {vi:'Bạn thấy chúng ta cần mấy đôi đũa?', zh:'你觉得我们需要几双筷子？', py:'Nǐ juéde wǒmen xūyào jǐ shuāng kuàizi?'},
  {vi:'Anh ấy quên mất số điện thoại của tôi rồi.', zh:'他把我的手机号忘了。', py:'Tā bǎ wǒ de shǒujī hào wàng le.'},
  {vi:'Nếu bạn cảm thấy nóng thì uống một ngụm nước đi.', zh:'如果你觉得热，就喝一口水吧。', py:'Rúguǒ nǐ juéde rè, jiù hē yì kǒu shuǐ ba.'},
  {vi:'Tôi vẫn chưa quen dậy sớm để tập thể dục.', zh:'我还不习惯早起锻炼身体。', py:'Wǒ hái bù xíguàn zǎoqǐ duànliàn shēntǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Nếu bạn có thời gian thì giúp mình đi thư viện mượn một quyển từ điển nhé.', zh:'如果你有空，就帮我去图书馆借一本词典吧。', py:'Rúguǒ nǐ yǒu kòng, jiù bāng wǒ qù túshūguǎn jiè yì běn cídiǎn ba.'},
  {vi:'Chỉ cần bạn thường xuyên luyện tập thì sẽ quen nói tiếng Trung.', zh:'只要你经常练习，就会习惯说汉语了。', py:'Zhǐyào nǐ jīngcháng liànxí, jiù huì xíguàn shuō Hànyǔ le.'},
  {vi:'Tuy máy điều hòa đã tắt nhưng phòng vẫn còn hơi nóng.', zh:'虽然空调已经关了，但是房间还有点儿热。', py:'Suīrán kōngtiáo yǐjīng guān le, dànshì fángjiān hái yǒudiǎnr rè.'},
  {vi:'Lúc đến công ty đừng quên mang theo máy tính xách tay nhé.', zh:'去公司的时候别忘了带笔记本电脑。', py:'Qù gōngsī de shíhou bié wàngle dài bǐjìběn diànnǎo.'},
  {vi:'Giám đốc Chu khoảng 3 giờ sẽ đến công ty.', zh:'周经理三点左右会到公司。', py:'Zhōu jīnglǐ sān diǎn zuǒyòu huì dào gōngsī.'},
  {vi:'Chiếc điện thoại đó anh ấy mua tháng trước với giá khoảng hai nghìn đồng.', zh:'那个手机他上个月买的时候要两千块左右。', py:'Nàge shǒujī tā shàng ge yuè mǎi de shíhou yào liǎngqiān kuài zuǒyòu.'},
  {vi:'Bố bảo tôi đi mua hai chai bia.', zh:'爸爸让我去买两瓶啤酒。', py:'Bàba ràng wǒ qù mǎi liǎng píng píjiǔ.'},
  {vi:'Chuyện hôm qua bạn nhắc tôi, tôi đã quên mất rồi.', zh:'昨天你提醒我的事，我已经忘了。', py:'Zuótiān nǐ tíxǐng wǒ de shì, wǒ yǐjīng wàng le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 11)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-11/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男', pre:'', blank:'这个花瓶真漂亮，在哪儿买的', post:'？',
       py:'Zhège huāpíng zhēn piàoliang, zài nǎr mǎi de?', vn:'Cái bình hoa này đẹp thật, mua ở đâu vậy?'},
      {speaker:'女', pre:'', blank:'我家楼下的商店，我带你去看看', post:'。',
       py:'Wǒ jiā lóuxià de shāngdiàn, wǒ dài nǐ qù kànkan.', vn:'Cửa hàng dưới nhà mình đấy, mình dẫn bạn đi xem thử.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'把词典还我吧，我要用一下', post:'。',
       py:'Bǎ cídiǎn huán wǒ ba, wǒ yào yòng yíxià.', vn:'Trả từ điển cho tôi đi, tôi cần dùng chút.'},
      {speaker:'女', pre:'好，', blank:'方便的时候再借我用用', post:'。',
       py:'Hǎo, fāngbiàn de shíhou zài jiè wǒ yòngyong.', vn:'Được, lúc nào tiện thì cho tôi mượn dùng tiếp nhé.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'', blank:'饭菜都做好了，把电脑关了吧？先吃饭', post:'。',
       py:'Fàncài dōu zuòhǎo le, bǎ diànnǎo guān le ba? Xiān chīfàn.', vn:'Cơm nước xong hết rồi, tắt máy tính đi nhé? Ăn cơm trước đã.'},
      {speaker:'男', pre:'', blank:'好的，我马上就来', post:'。',
       py:'Hǎo de, wǒ mǎshàng jiù lái.', vn:'Được, tôi đến ngay đây.'},
    ]},
    {num:4, lines:[
      {speaker:'女', pre:'', blank:'运动会什么时候结束', post:'？',
       py:'Yùndònghuì shénme shíhou jiéshù?', vn:'Hội thao khi nào kết thúc?'},
      {speaker:'男', pre:'', blank:'五点左右吧', post:'。',
       py:'Wǔ diǎn zuǒyòu ba.', vn:'Khoảng 5 giờ thôi.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'服务员，', blank:'这儿只有一双筷子，请再给我们拿一双', post:'。',
       py:'Fúwùyuán, zhèr zhǐ yǒu yì shuāng kuàizi, qǐng zài gěi wǒmen ná yì shuāng.', vn:'Phục vụ ơi, ở đây chỉ có một đôi đũa, làm ơn lấy thêm cho chúng tôi một đôi.'},
      {speaker:'女', pre:'', blank:'好的，请您等一下，马上来', post:'。',
       py:'Hǎo de, qǐng nín děng yíxià, mǎshàng lái.', vn:'Được ạ, mời anh/chị đợi chút, sẽ mang lên ngay.'},
    ]},
    {num:6, lines:[
      {pre:'小周，你帮我看一下笔记本电脑吧。昨天我还能看电子邮件，', blank:'今天突然就打不开了，不知道是怎么回事', post:'。',
       py:'Xiǎo Zhōu, nǐ bāng wǒ kàn yíxià bǐjìběn diànnǎo ba. Zuótiān wǒ hái néng kàn diànzǐ yóujiàn, jīntiān tūrán jiù dǎ bu kāi le, bù zhīdào shì zěnme huí shì.', vn:'Tiểu Chu, bạn giúp tôi xem qua máy tính xách tay chút đi. Hôm qua tôi vẫn xem email được, hôm nay đột nhiên không mở được nữa, không biết là chuyện gì.'},
    ]},
    {num:7, lines:[
      {pre:'教室里人太多了，', blank:'我们去图书馆学习吧，那儿比较安静', post:'。',
       py:'Jiàoshì lǐ rén tài duō le, wǒmen qù túshūguǎn xuéxí ba, nàr bǐjiào ānjìng.', vn:'Trong lớp học đông người quá, chúng ta đi thư viện học đi, ở đó khá yên tĩnh.'},
    ]},
    {num:8, lines:[
      {pre:'住在这儿真不错，附近环境很好，离我上班的医院也不远，', blank:'上下班都不用坐地铁了，骑自行车就可以', post:'。',
       py:'Zhù zài zhèr zhēn búcuò, fùjìn huánjìng hěn hǎo, lí wǒ shàngbān de yīyuàn yě bù yuǎn, shàng-xiàbān dōu búyòng zuò dìtiě le, qí zìxíngchē jiù kěyǐ.', vn:'Sống ở đây thật tốt, môi trường xung quanh đẹp, cách bệnh viện nơi tôi làm cũng không xa, đi làm về đều không cần đi tàu điện ngầm nữa, đi xe đạp là được.'},
    ]},
    {num:9, lines:[
      {pre:'什么是快乐？', blank:'结束一天的工作以后，你和家人一起吃晚饭，说说白天的事情，这不就是快乐吗', post:'？',
       py:'Shénme shì kuàilè? Jiéshù yìtiān de gōngzuò yǐhòu, nǐ hé jiārén yìqǐ chī wǎnfàn, shuōshuo báitiān de shìqing, zhè bú jiùshì kuàilè ma?', vn:'Hạnh phúc là gì? Kết thúc một ngày làm việc, bạn cùng gia đình ăn tối, kể chuyện ban ngày, chẳng phải đó là hạnh phúc sao?'},
    ]},
    {num:10, lines:[
      {pre:'你把桌子上的杯子给我，', blank:'我去洗一下。你去楼下买几瓶啤酒吧', post:'。',
       py:'Nǐ bǎ zhuōzi shang de bēizi gěi wǒ, wǒ qù xǐ yíxià. Nǐ qù lóuxià mǎi jǐ píng píjiǔ ba.', vn:'Bạn đưa cho tôi cái ly trên bàn, tôi đi rửa chút. Bạn xuống dưới lầu mua vài chai bia đi.'},
    ]},
  ],
  mc: [
    {num:11, options:['地铁站','眼镜店','地图'], ans:1,
     lines:[
       {speaker:'男', pre:'你看一下地图，', blank:'这儿附近有眼镜店吗', post:'？', py:'Nǐ kàn yíxià dìtú, zhèr fùjìn yǒu yǎnjìngdiàn ma?', vn:'Bạn xem bản đồ chút, gần đây có cửa hàng kính không?'},
       {speaker:'女', pre:'', blank:'地铁站旁边有一个，在地铁站的北边', post:'。', py:'Dìtiě zhàn pángbiān yǒu yí ge, zài dìtiě zhàn de běibian.', vn:'Bên cạnh ga tàu điện ngầm có một cái, ở phía bắc ga tàu điện ngầm.'},
     ],
     explain:'男：你看一下地图，这儿附近有眼镜店吗？女：地铁站旁边有一个，在地铁站的北边。问：男的在找什么？ → 眼镜店。'},
    {num:12, options:['给妹妹喝牛奶','去超市买牛奶','带妹妹去医院'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'妹妹怎么了？病了吗', post:'？', py:'Mèimei zěnme le? Bìng le ma?', vn:'Em gái sao vậy? Bị ốm à?'},
       {speaker:'女', pre:'', blank:'可能饿了，你把奶瓶给我吧', post:'。', py:'Kěnéng è le, nǐ bǎ nǎipíng gěi wǒ ba.', vn:'Có lẽ đói rồi, bạn đưa bình sữa cho mình đi.'},
     ],
     explain:'男：妹妹怎么了？病了吗？女：可能饿了，你把奶瓶给我吧。问：女的要做什么？ → 给妹妹喝牛奶。'},
    {num:13, options:['同事','经理和客人','医生和病人'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'会议结束后，你记得把空调和灯都关了', post:'。', py:'Huìyì jiéshù hòu, nǐ jìde bǎ kōngtiáo hé dēng dōu guān le.', vn:'Sau khi họp xong, bạn nhớ tắt cả máy điều hòa và đèn nhé.'},
       {speaker:'女', pre:'', blank:'好的，我知道了，明天见', post:'。', py:'Hǎo de, wǒ zhīdào le, míngtiān jiàn.', vn:'Được ạ, tôi biết rồi, hẹn mai gặp.'},
     ],
     explain:'男：会议结束后，你记得把空调和灯都关了。女：好的，我知道了，明天见。问：他们最可能是什么关系？ → 同事。'},
    {num:14, options:['出去开会','照顾小雨','和女的去公园'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'我明天出去开会，你能帮我照顾一下小雨吗', post:'？', py:'Wǒ míngtiān chūqu kāihuì, nǐ néng bāng wǒ zhàogù yíxià Xiǎoyǔ ma?', vn:'Ngày mai tôi ra ngoài họp, bạn có thể giúp tôi trông Tiểu Vũ một chút không?'},
       {speaker:'男', pre:'行，没问题，', blank:'我每天都带她去公园玩儿', post:'。', py:'Xíng, méi wèntí, wǒ měitiān dōu dài tā qù gōngyuán wánr.', vn:'Được, không vấn đề gì, tôi ngày nào cũng dẫn bé đi công viên chơi.'},
     ],
     explain:'女：我明天出去开会，你能帮我照顾一下小雨吗？男：行，没问题，我每天都带她去公园玩儿。问：男的要做什么？ → 照顾小雨。'},
    {num:15, options:['让女的去还书','书已经还了','女的忘了还书'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'我的那本历史书呢，你看见了吗', post:'？', py:'Wǒ de nà běn lìshǐ shū ne, nǐ kànjiàn le ma?', vn:'Quyển sách Lịch Sử của tôi đâu rồi, bạn thấy không?'},
       {speaker:'男', pre:'', blank:'你昨天让我去图书馆把书还了，你忘了', post:'？', py:'Nǐ zuótiān ràng wǒ qù túshūguǎn bǎ shū huán le, nǐ wàng le?', vn:'Hôm qua bạn bảo tôi đi thư viện trả sách rồi, bạn quên à?'},
     ],
     explain:'女：我的那本历史书呢，你看见了吗？男：你昨天让我去图书馆把书还了，你忘了？问：男的是什么意思？ → 书已经还了。'},
    {num:16, options:['今天比较忙','空调有问题','叫人来换水'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'空调下面怎么这么多水', post:'？', py:'Kōngtiáo xiàmian zěnme zhème duō shuǐ?', vn:'Sao dưới máy điều hòa nhiều nước thế?'},
       {speaker:'男', pre:'', blank:'我也是刚看见，我已经打电话叫人来看了', post:'。', py:'Wǒ yě shì gāng kànjiàn, wǒ yǐjīng dǎ diànhuà jiào rén lái kàn le.', vn:'Tôi cũng vừa mới thấy, tôi gọi điện kêu người đến xem rồi.'},
       {speaker:'女', pre:'', blank:'问他们什么时候到了吗', post:'？', py:'Wèn tāmen shénme shíhou dào le ma?', vn:'Hỏi họ khi nào đến chưa?'},
       {speaker:'男', pre:'他们说今天周日，比较忙，', blank:'下午才能来', post:'。', py:'Tāmen shuō jīntiān zhōurì, bǐjiào máng, xiàwǔ cái néng lái.', vn:'Họ nói hôm nay chủ nhật, khá bận, chiều mới đến được.'},
     ],
     explain:'女：空调下面怎么这么多水？男：我也是刚看见，我已经打电话叫人来看了。女：问他们什么时候到了吗？男：他们说今天周日，比较忙，下午才能来。问：男的为什么要打电话？ → 空调有问题。'},
    {num:17, options:['已经洗澡了','不喜欢出去跑步','想去超市买东西'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'我要去跑步，你去不去', post:'？', py:'Wǒ yào qù pǎobù, nǐ qù bu qù?', vn:'Tôi định đi chạy bộ, bạn đi không?'},
       {speaker:'女', pre:'', blank:'我已经洗完澡了，不想出去了', post:'。', py:'Wǒ yǐjīng xǐwán zǎo le, bù xiǎng chūqu le.', vn:'Tôi tắm xong rồi, không muốn ra ngoài nữa.'},
       {speaker:'男', pre:'', blank:'要带点儿什么东西吗', post:'？', py:'Yào dài diǎnr shénme dōngxi ma?', vn:'Có cần mang gì về không?'},
       {speaker:'女', pre:'你回来时，', blank:'在楼下超市买斤香蕉和两瓶牛奶吧', post:'。', py:'Nǐ huílai shí, zài lóuxià chāoshì mǎi jīn xiāngjiāo hé liǎng píng niúnǎi ba.', vn:'Lúc bạn về, mua ở siêu thị dưới lầu một cân chuối và hai chai sữa nhé.'},
     ],
     explain:'男：我要去跑步，你去不去？女：我已经洗完澡了，不想出去了。男：要带点儿什么东西吗？女：你回来时，在楼下超市买斤香蕉和两瓶牛奶吧。问：女的为什么不去跑步？ → 已经洗澡了。'},
    {num:18, options:['比以前便宜了','太旧了','又大又方便'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'我的笔记本电脑太旧了，我想换一个，你说买个什么样的好', post:'？', py:'Wǒ de bǐjìběn diànnǎo tài jiù le, wǒ xiǎng huàn yí ge, nǐ shuō mǎi ge shénme yàng de hǎo?', vn:'Máy tính xách tay của tôi cũ quá rồi, tôi muốn đổi một cái, bạn thấy mua loại nào tốt?'},
       {speaker:'男', pre:'', blank:'我用的这个就不错，也不大，带着很方便', post:'。', py:'Wǒ yòng de zhège jiù búcuò, yě bú dà, dàizhe hěn fāngbiàn.', vn:'Cái tôi đang dùng cũng được đấy, cũng không to, mang theo rất tiện.'},
       {speaker:'女', pre:'', blank:'贵不贵', post:'？', py:'Guì bu guì?', vn:'Có đắt không?'},
       {speaker:'男', pre:'有点儿贵，', blank:'我去年买的时候九千，听说现在卖八千左右', post:'。', py:'Yǒudiǎnr guì, wǒ qùnián mǎi de shíhou jiǔqiān, tīngshuō xiànzài mài bāqiān zuǒyòu.', vn:'Hơi đắt, tôi mua năm ngoái là chín nghìn, nghe nói bây giờ bán khoảng tám nghìn.'},
     ],
     explain:'女：我的笔记本电脑太旧了，我想换一个，你说买个什么样的好？男：我用的这个就不错，也不大，带着很方便。女：贵不贵？男：有点儿贵，我去年买的时候九千，听说现在卖八千左右。问：关于男的的电脑，可以知道什么？ → 比以前便宜了。'},
    {num:19, options:['来周先生家吃晚饭','每天八点左右下班','总是照顾周先生的小狗'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'周先生，我公司突然有事，您能帮我去接一下孩子吗', post:'？', py:'Zhōu xiānsheng, wǒ gōngsī tūrán yǒu shì, nín néng bāng wǒ qù jiē yíxià háizi ma?', vn:'Anh Chu, công ty tôi đột nhiên có việc, anh giúp tôi đón cháu một chút được không?'},
       {speaker:'男', pre:'', blank:'没问题，我带她来我家吃晚饭', post:'。', py:'Méi wèntí, wǒ dài tā lái wǒ jiā chī wǎnfàn.', vn:'Không vấn đề gì, tôi đưa cháu về nhà tôi ăn tối.'},
       {speaker:'女', pre:'好的，太谢谢你了，', blank:'我八点左右去接她回来', post:'。', py:'Hǎo de, tài xièxie nǐ le, wǒ bā diǎn zuǒyòu qù jiē tā huílai.', vn:'Được, cảm ơn anh nhiều, khoảng 8 giờ tôi qua đón cháu về.'},
       {speaker:'男', pre:'别客气，', blank:'你不也总是帮我照顾小狗吗', post:'？', py:'Bié kèqi, nǐ bù yě zǒngshì bāng wǒ zhàogù xiǎogǒu ma?', vn:'Đừng khách sáo, chẳng phải chị cũng luôn giúp tôi trông con chó nhỏ sao?'},
     ],
     explain:'女：周先生，我公司突然有事，您能帮我去接一下孩子吗？男：没问题，我带她来我家吃晚饭。女：好的，太谢谢你了，我八点左右去接她回来。男：别客气，你不也总是帮我照顾小狗吗？问：关于女的，可以知道什么？ → 总是照顾周先生的小狗。'},
    {num:20, options:['玩儿电脑','打篮球','复习考试'], ans:1,
     lines:[
       {speaker:'男', pre:'妈，', blank:'我跟同学去打篮球', post:'。', py:'Mā, wǒ gēn tóngxué qù dǎ lánqiú.', vn:'Mẹ ơi, con đi chơi bóng rổ với bạn học đây.'},
       {speaker:'女', pre:'', blank:'你明天不是还要考试吗', post:'？', py:'Nǐ míngtiān bú shì hái yào kǎoshì ma?', vn:'Ngày mai con chẳng phải còn phải thi sao?'},
       {speaker:'男', pre:'没关系，', blank:'我已经复习好了，玩儿一会儿就回来', post:'。', py:'Méi guānxi, wǒ yǐjīng fùxí hǎo le, wánr yíhuìr jiù huílai.', vn:'Không sao đâu, con ôn xong rồi, chơi chút là về ngay.'},
       {speaker:'女', pre:'好吧，', blank:'你的电脑关了没有', post:'？', py:'Hǎo ba, nǐ de diànnǎo guānle méiyǒu?', vn:'Được rồi, máy tính của con tắt chưa?'},
     ],
     explain:'男：妈，我跟同学去打篮球。女：你明天不是还要考试吗？男：没关系，我已经复习好了，玩儿一会儿就回来。女：好吧，你的电脑关了没有？问：男的要做什么？ → 打篮球。'},
  ],
};
