// ══════════════════════════════════════════
// DATA — HSK4 Bài 2: 真正的朋友 (Người bạn chân chính)
// Nguồn: HSK标准教程4上 (Giáo trình chuẩn HSK 4 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'适应',py:'shìyìng',pos:'Động từ',vn:'thích nghi',em:'🔄',lesson:1,
   explain:['Điều chỉnh bản thân cho phù hợp với hoàn cảnh/môi trường mới.'],
   usage:'Động từ; thường đi với 对……适应 hoặc 适应 + môi trường: 适应这儿的生活.',
   collo:['适应生活','慢慢适应','不适应'],
   ex_zh:'你适应这儿的生活了吗？',ex_py:'Nǐ shìyìng zhèr de shēnghuó le ma?',ex_vn:'Bạn thích nghi với cuộc sống ở đây chưa?',
   exList:[
     {zh:'你适应这儿的生活了吗？',py:'Nǐ shìyìng zhèr de shēnghuó le ma?',vn:'Bạn thích nghi với cuộc sống ở đây chưa?'},
     {zh:'开始有点儿不习惯，后来就慢慢适应了。',py:'Kāishǐ yǒudiǎnr bù xíguàn, hòulái jiù mànman shìyìng le.',vn:'Lúc đầu hơi chưa quen, sau đó thì dần dần thích nghi.'},
     {zh:'我还不太适应北方的气候。',py:'Wǒ hái bú tài shìyìng běifāng de qìhòu.',vn:'Tôi vẫn chưa thích nghi lắm với khí hậu miền Bắc.'},
   ],
   hanzi:[
     {c:'适',p:'shì',type:'半包围结构 · Bán bao vây (giản thể)',st:9,ord:'辶 bao ngoài → 舌 trong',rad:'辶 (sước – đi)',mean:'vừa, hợp',
      tip:'Bộ 辶 (đi tới) + 舌 (biểu âm) → ĐI ĐẾN vừa đúng chỗ, mở rộng thành THÍCH NGHI, PHÙ HỢP.',
      cf:'话 (huà – "lời nói", cũng có 舌")',w:'适应 / 适合 / 合适'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù mới đến đây, nhưng tôi đã dần dần thích nghi được với cuộc sống rồi.',answer:'尽管刚来这儿，但我已经慢慢适应了这儿的生活。',answerPy:'Jǐnguǎn gāng lái zhèr, dàn wǒ yǐjīng mànman shìyìngle zhèr de shēnghuó.',
      note:'尽管……但…… diễn tả sự tương phản, nhấn mạnh kết quả không như dự đoán.'},
     {promptLang:'vi',prompt:'Cô ấy thích nghi với công việc mới nhanh hơn tôi tưởng.',answer:'她适应新工作的速度比我想的快。',answerPy:'Tā shìyìng xīn gōngzuò de sùdù bǐ wǒ xiǎng de kuài.',
      note:'So sánh với 比, ôn lại cấu trúc HSK3.'},
   ]},

  {n:2,zh:'交',py:'jiāo',pos:'Động từ',vn:'kết giao',em:'🤝',lesson:1,
   explain:['Kết bạn, quen biết và trở nên thân thiết với ai đó.'],
   usage:'Động từ; thường mang tân ngữ 朋友: 交朋友, 交了一个朋友.',
   collo:['交朋友','交了一个朋友','新交的朋友'],
   ex_zh:'最近我还交了一个中国朋友。',ex_py:'Zuìjìn wǒ hái jiāole yí ge Zhōngguó péngyou.',ex_vn:'Gần đây tôi còn kết giao được một người bạn Trung Quốc.',
   exList:[
     {zh:'最近我还交了一个中国朋友。',py:'Zuìjìn wǒ hái jiāole yí ge Zhōngguó péngyou.',vn:'Gần đây tôi còn kết giao được một người bạn Trung Quốc.'},
     {zh:'快给我讲讲你新交的中国朋友。',py:'Kuài gěi wǒ jiǎngjiang nǐ xīn jiāo de Zhōngguó péngyou.',vn:'Mau kể cho tôi nghe về người bạn Trung Quốc mới của bạn đi.'},
     {zh:'怎样才能交到更多的朋友呢？',py:'Zěnyàng cái néng jiāodào gèng duō de péngyou ne?',vn:'Làm thế nào mới có thể kết giao được nhiều bạn hơn?'},
   ],
   hanzi:[
     {c:'交',p:'jiāo',type:'独体字 · Chữ đơn',st:6,ord:'nét liền, hình người bắt chéo chân',rad:'亠 (đầu)',mean:'giao, kết giao',
      tip:'Hình tượng cổ mô phỏng hai đường nét BẮT CHÉO nhau → GIAO NHAU, mở rộng thành KẾT GIAO (con người giao lưu với nhau).',
      cf:'较 (jiào – "so sánh", cũng có 交" nhưng thêm bộ 车")',w:'交朋友 / 交流 / 交通'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người bạn tôi mới kết giao rất hóm hỉnh, tính cách cũng tốt.',answer:'我新交的朋友很幽默，性格也很好。',answerPy:'Wǒ xīn jiāo de péngyou hěn yōumò, xìnggé yě hěn hǎo.',
      note:'新交的 + danh từ — vừa mới kết giao/quen biết.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn có khiếu hài hước, sẽ dễ dàng kết giao thêm nhiều bạn.',answer:'只要你有幽默感，就容易交到更多朋友。',answerPy:'Zhǐyào nǐ yǒu yōumògǎn, jiù róngyì jiāodào gèng duō péngyou.',
      note:'只要……就…… ôn lại cấu trúc HSK3.'},
   ]},

  {n:3,zh:'平时',py:'píngshí',pos:'Danh từ',vn:'lúc thường, ngày thường',em:'📆',lesson:1,
   explain:['Khoảng thời gian bình thường, không phải dịp đặc biệt.'],
   usage:'Danh từ chỉ thời gian, thường đứng đầu câu hoặc sau chủ ngữ: 平时我们常常……',
   collo:['平时我们','平时哪能','平时工作'],
   ex_zh:'平时我们常常一起看书、逛街、踢足球。',ex_py:'Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú.',ex_vn:'Lúc thường chúng tôi hay cùng nhau đọc sách, đi dạo phố, đá bóng.',
   exList:[
     {zh:'平时我们常常一起看书、逛街、踢足球。',py:'Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú.',vn:'Lúc thường chúng tôi hay cùng nhau đọc sách, đi dạo phố, đá bóng.'},
     {zh:'这不是周六吗？平时哪能睡到九点？',py:'Zhè bú shì zhōuliù ma? Píngshí nǎ néng shuìdào jiǔ diǎn?',vn:'Chẳng phải hôm nay thứ Bảy sao? Ngày thường làm sao ngủ đến 9 giờ được?'},
     {zh:'平时我骑自行车上下班。',py:'Píngshí wǒ qí zìxíngchē shàngxiàbān.',vn:'Ngày thường tôi đạp xe đi làm.'},
   ],
   hanzi:[
     {c:'平',p:'píng',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'干 (can)',mean:'bằng phẳng, thường',
      tip:'Hình tượng mặt nước phẳng lặng → BẰNG PHẲNG, mở rộng thành BÌNH THƯỜNG, THÔNG THƯỜNG (平时 = lúc bình thường).',
      cf:'评 (píng – "bình luận", thêm bộ 讠")',w:'平时 / 平常 / 公平'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc thường anh ấy rất bận, nhưng cuối tuần vẫn dành thời gian gặp bạn bè.',answer:'平时他很忙，但周末还是会花时间见朋友。',answerPy:'Píngshí tā hěn máng, dàn zhōumò háishi huì huā shíjiān jiàn péngyou.',
      note:'平时……但…… — lúc thường … nhưng ….'},
     {promptLang:'vi',prompt:'Ngày thường cô ấy rất ít khi ra ngoài, chỉ thích ở nhà đọc sách.',answer:'平时她很少出去，只喜欢在家看书。',answerPy:'Píngshí tā hěn shǎo chūqu, zhǐ xǐhuan zài jiā kàn shū.',
      note:'平时 làm trạng ngữ đầu câu.'},
   ]},

  {n:4,zh:'逛',py:'guàng',pos:'Động từ',vn:'đi dạo',em:'🚶',lesson:1,
   explain:['Đi lại nhàn nhã, thong thả để ngắm cảnh/mua sắm, không có mục đích cụ thể.'],
   usage:'Động từ; thường đi với 街/公园: 逛街, 逛公园.',
   collo:['逛街','逛公园','逛商场'],
   ex_zh:'平时我们常常一起看书、逛街、踢足球。',ex_py:'Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú.',ex_vn:'Lúc thường chúng tôi hay cùng nhau đọc sách, đi dạo phố, đá bóng.',
   exList:[
     {zh:'平时我们常常一起看书、逛街、踢足球。',py:'Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú.',vn:'Lúc thường chúng tôi hay cùng nhau đọc sách, đi dạo phố, đá bóng.'},
     {zh:'你应该找朋友出去逛逛街、看看电影。',py:'Nǐ yīnggāi zhǎo péngyou chūqu guàngguang jiē, kànkan diànyǐng.',vn:'Bạn nên rủ bạn bè ra ngoài đi dạo phố, xem phim.'},
     {zh:'周末我喜欢一个人去逛公园。',py:'Zhōumò wǒ xǐhuan yí ge rén qù guàng gōngyuán.',vn:'Cuối tuần tôi thích một mình đi dạo công viên.'},
   ],
   hanzi:[
     {c:'逛',p:'guàng',type:'半包围结构 · Bán bao vây',st:10,ord:'辶 bao ngoài → 狂 trong',rad:'辶 (sước – đi)',mean:'đi dạo, dạo chơi',
      tip:'Bộ 辶 (đi) + 狂 (buông thả tự do) → ĐI LẠI TỰ DO, thong thả không mục đích = ĐI DẠO.',
      cf:'狂 (kuáng – "cuồng nhiệt", chỉ khác không có bộ 辶")',w:'逛街 / 逛公园 / 闲逛'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù trời hơi lạnh, nhưng chúng tôi vẫn muốn ra ngoài đi dạo phố.',answer:'尽管天气有点儿冷，但我们还是想出去逛街。',answerPy:'Jǐnguǎn tiānqì yǒudiǎnr lěng, dàn wǒmen háishi xiǎng chūqu guàng jiē.',
      note:'尽管……但……还是…… — mặc dù … nhưng vẫn ….'},
     {promptLang:'vi',prompt:'Ngày thường cô ấy thích cùng bạn bè đi dạo công viên, trò chuyện.',answer:'平时她喜欢跟朋友一起逛公园、聊天儿。',answerPy:'Píngshí tā xǐhuan gēn péngyou yìqǐ guàng gōngyuán, liáotiānr.',
      note:'平时 kết hợp động từ 逛, ôn lại từ vựng bài học.'},
   ]},

  {n:5,zh:'短信',py:'duǎnxìn',pos:'Danh từ',vn:'tin nhắn',em:'💬',lesson:1,
   explain:['Tin nhắn văn bản gửi qua điện thoại di động.'],
   usage:'Danh từ; thường đi với 发/收: 发短信, 收到短信.',
   collo:['发短信','幽默短信','收到短信'],
   ex_zh:'有时候他还给我发一些幽默短信。',ex_py:'Yǒu shíhou tā hái gěi wǒ fā yìxiē yōumò duǎnxìn.',ex_vn:'Có lúc anh ấy còn gửi cho tôi vài tin nhắn hài hước.',
   exList:[
     {zh:'有时候他还给我发一些幽默短信。',py:'Yǒu shíhou tā hái gěi wǒ fā yìxiē yōumò duǎnxìn.',vn:'Có lúc anh ấy còn gửi cho tôi vài tin nhắn hài hước.'},
     {zh:'我发了短信，你怎么没回复？',py:'Wǒ fāle duǎnxìn, nǐ zěnme méi huífù?',vn:'Tôi đã gửi tin nhắn rồi, sao bạn không trả lời?'},
     {zh:'朋友之间经常发各种幽默短信。',py:'Péngyou zhījiān jīngcháng fā gè zhǒng yōumò duǎnxìn.',vn:'Bạn bè thường hay gửi cho nhau đủ loại tin nhắn hài hước.'},
   ],
   hanzi:[
     {c:'信',p:'xìn',type:'左右结构 · Trái-phải',st:9,ord:'亻 (nhân) trái → 言 (ngôn) phải',rad:'亻 (nhân – người)',mean:'thư, tin, tin tưởng',
      tip:'Bộ người 亻 + 言 (lời nói) → LỜI NÓI của NGƯỜI đáng TIN, mở rộng thành THƯ TÍN, TIN NHẮN.',
      cf:'信 dễ nhầm với 认 (rèn – "nhận biết", cũng có 讠")',w:'短信 / 相信 / 信息'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người bạn mới kết giao của anh ấy thường gửi tin nhắn hài hước cho anh ấy.',answer:'他新交的朋友常常给他发幽默短信。',answerPy:'Tā xīn jiāo de péngyou chángcháng gěi tā fā yōumò duǎnxìn.',
      note:'给……发短信 — gửi tin nhắn cho ai.'},
     {promptLang:'vi',prompt:'Mặc dù bận, cô ấy vẫn luôn nhắn tin cho tôi mỗi ngày.',answer:'尽管很忙，她还是每天都给我发短信。',answerPy:'Jǐnguǎn hěn máng, tā háishi měitiān dōu gěi wǒ fā duǎnxìn.',
      note:'尽管……还是…… — mặc dù … vẫn ….'},
   ]},

  {n:6,zh:'正好',py:'zhènghǎo',pos:'Phó từ/Tính từ',vn:'đúng lúc, gặp dịp',em:'👌',lesson:1,
   explain:['1. (Tính từ) Vừa vặn, thỏa mãn điều kiện nào đó (không sớm không muộn, không lớn không nhỏ...).','2. (Phó từ) Đúng lúc, gặp dịp để làm việc gì đó.'],
   usage:'Làm tính từ: Chủ ngữ + 正好 (苹果八块五，西瓜十一块五，正好二十块); làm phó từ: 正好 + V (正好一起去吧).',
   collo:['正好一起去','来得正好','正好二十块'],
   ex_zh:'我们下午要去踢足球，正好一起去吧。',ex_py:'Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.',ex_vn:'Chiều nay chúng tôi định đi đá bóng, đúng dịp cùng đi luôn nhé.',
   exList:[
     {zh:'我们下午要去踢足球，正好一起去吧。',py:'Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.',vn:'Chiều nay chúng tôi định đi đá bóng, đúng dịp cùng đi luôn nhé.'},
     {zh:'张远还专门从国外飞回来呢，正好借这个机会见见。',py:'Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne, zhènghǎo jiè zhège jīhuì jiànjian.',vn:'Trương Viễn còn đặc biệt bay từ nước ngoài về, đúng dịp mượn cơ hội này gặp mặt.'},
     {zh:'苹果八块五，西瓜十一块五，正好二十块。',py:'Píngguǒ bā kuài wǔ, xīguā shíyī kuài wǔ, zhènghǎo èrshí kuài.',vn:'Táo 8 tệ rưỡi, dưa hấu 11 tệ rưỡi, vừa đúng 20 tệ.'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女 (nữ) trái → 子 (tử) phải',rad:'女 (nữ – phụ nữ)',mean:'tốt, vừa',
      tip:'Bộ 女(mẹ) + 子(con) → hình ảnh MẸ CON quây quần, biểu trưng cho điều TỐT ĐẸP; kết hợp 正 (ngay, đúng) thành 正好 = ĐÚNG VỪA VẶN.',
      cf:'子 đứng một mình nghĩa là "con", kết hợp 女 mới thành 好',w:'正好 / 好像 / 只好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn đến đúng lúc thật, tôi vừa định gọi điện cho bạn.',answer:'你来得正好，我正想给你打电话呢。',answerPy:'Nǐ lái de zhènghǎo, wǒ zhèng xiǎng gěi nǐ dǎ diànhuà ne.',
      note:'来得正好 — đến rất đúng lúc, cụm cố định.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn rảnh, đúng dịp chúng ta cùng đi dạo phố.',answer:'只要你有空，正好我们一起去逛街。',answerPy:'Zhǐyào nǐ yǒu kòng, zhènghǎo wǒmen yìqǐ qù guàng jiē.',
      note:'正好 (phó từ) — đúng dịp, gặp dịp làm gì.'},
   ]},

  {n:7,zh:'聚会',py:'jùhuì',pos:'Động từ/Danh từ',vn:'gặp gỡ; cuộc họp mặt',em:'🎉',lesson:2,
   explain:['1. (Động từ) Tụ họp, gặp mặt nhiều người cùng lúc.','2. (Danh từ) Buổi họp mặt, buổi tụ tập.'],
   usage:'Danh từ: 同学聚会, 参加聚会; động từ: 聚会就在……',
   collo:['同学聚会','参加聚会','聚会就在'],
   ex_zh:'星期天同学聚会，你能来吗？',ex_py:'Xīngqītiān tóngxué jùhuì, nǐ néng lái ma?',ex_vn:'Chủ nhật họp lớp, bạn đến được không?',
   exList:[
     {zh:'星期天同学聚会，你能来吗？',py:'Xīngqītiān tóngxué jùhuì, nǐ néng lái ma?',vn:'Chủ nhật họp lớp, bạn đến được không?'},
     {zh:'请她一起来参加同学聚会。',py:'Qǐng tā yìqǐ lái cānjiā tóngxué jùhuì.',vn:'Mời cô ấy cùng đến tham gia họp lớp.'},
     {zh:'聚会就在学校门口那个饭店，六点半。',py:'Jùhuì jiù zài xuéxiào ménkǒu nàge fàndiàn, liù diǎn bàn.',vn:'Buổi họp mặt tổ chức ngay ở nhà hàng trước cổng trường, lúc 6 giờ rưỡi.'},
   ],
   hanzi:[
     {c:'聚',p:'jù',type:'上下结构 · Trên-dưới',st:14,ord:'取 trên → 乑 dưới (biến thể của 众)',rad:'耳 (nhĩ)',mean:'tụ họp',
      tip:'Phần trên 取 (lấy, gom) + phần dưới liên quan đến 众 (đông người) → GOM NHIỀU NGƯỜI lại một chỗ = TỤ HỌP.',
      cf:'聚 dễ nhầm với 娶 (qǔ – "cưới vợ", có bộ 女")',w:'聚会 / 聚集 / 团聚'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù nhiều bạn học đã ra nước ngoài làm việc, buổi họp lớp vẫn có gần một nửa người đến.',answer:'尽管很多同学去国外工作了，同学聚会还是来了差不多一半人。',answerPy:'Jǐnguǎn hěn duō tóngxué qù guówài gōngzuò le, tóngxué jùhuì háishi láile chàbuduō yíbàn rén.',
      note:'尽管……还是…… — mặc dù … vẫn ….'},
     {promptLang:'vi',prompt:'Buổi họp mặt ngay tại nhà hàng trước cổng trường, đừng đến muộn nhé.',answer:'聚会就在学校门口的饭店，别迟到啊。',answerPy:'Jùhuì jiù zài xuéxiào ménkǒu de fàndiàn, bié chídào a.',
      note:'就在 + địa điểm — nhấn mạnh vị trí chính xác.'},
   ]},

  {n:8,zh:'联系',py:'liánxì',pos:'Động từ',vn:'liên hệ',em:'📞',lesson:2,
   explain:['Giữ mối liên lạc, trao đổi thông tin với ai đó.'],
   usage:'Động từ; có thể mang tân ngữ trực tiếp hoặc dùng với 跟: 联系她, 跟她联系.',
   collo:['联系一下','跟她联系','没联系了'],
   ex_zh:'班里同学你联系得怎么样了？',ex_py:'Bān li tóngxué nǐ liánxì de zěnmeyàng le?',ex_vn:'Bạn liên hệ các bạn cùng lớp thế nào rồi?',
   exList:[
     {zh:'班里同学你联系得怎么样了？',py:'Bān li tóngxué nǐ liánxì de zěnmeyàng le?',vn:'Bạn liên hệ các bạn cùng lớp thế nào rồi?'},
     {zh:'麻烦你跟她联系一下。',py:'Máfan nǐ gēn tā liánxì yíxià.',vn:'Phiền bạn liên hệ với cô ấy một chút.'},
     {zh:'我们还是经常联系的。',py:'Wǒmen háishi jīngcháng liánxì de.',vn:'Chúng tôi vẫn thường xuyên liên lạc.'},
   ],
   hanzi:[
     {c:'联',p:'lián',type:'左右结构 · Trái-phải (giản thể)',st:12,ord:'耳 (nhĩ) trái → 关 (quan) phải',rad:'耳 (nhĩ – tai)',mean:'liên kết',
      tip:'Bộ tai 耳 (nghe, kết nối thông tin) + 关 (liên quan) → KẾT NỐI thông tin giữa người với người = LIÊN HỆ.',
      cf:'联 dễ nhầm với 连 (lián – "liên tiếp", bộ 辶")',w:'联系 / 联合 / 关联'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi đã lâu không liên lạc, hôm nay gặp lại thật vui.',answer:'我们好久没联系了，今天再见面真高兴。',answerPy:'Wǒmen hǎojiǔ méi liánxì le, jīntiān zài jiànmiàn zhēn gāoxìng.',
      note:'好久没……了 — đã lâu không ….'},
     {promptLang:'vi',prompt:'Mặc dù đã tốt nghiệp nhiều năm, chúng tôi vẫn thường xuyên liên lạc.',answer:'尽管毕业这么多年，我们还是经常联系的。',answerPy:'Jǐnguǎn bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de.',
      note:'尽管……还是…… — mặc dù … vẫn ….'},
   ]},

  {n:9,zh:'差不多',py:'chàbuduō',pos:'Phó từ/Tính từ',vn:'gần như, hầu như',em:'≈',lesson:2,
   explain:['1. (Tính từ) Rất giống nhau, không khác biệt nhiều.','2. (Phó từ) Xấp xỉ, gần như (về mức độ, phạm vi, thời gian, khoảng cách, số lượng).'],
   usage:'Làm phó từ có thể đứng trước tính từ đơn âm tiết (差不多高) hoặc trước số lượng (差不多一半); làm tính từ làm vị ngữ (性格差不多).',
   collo:['差不多一半','差不多高','性格差不多'],
   ex_zh:'差不多一半儿吧，张远还专门从国外飞回来呢。',ex_py:'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',ex_vn:'Gần được một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.',
   exList:[
     {zh:'差不多一半儿吧，张远还专门从国外飞回来呢。',py:'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',vn:'Gần được một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.'},
     {zh:'他们俩是在国外旅游的时候认识的，性格差不多。',py:'Tāmen liǎ shì zài guówài lǚyóu de shíhou rènshi de, xìnggé chàbuduō.',vn:'Hai người họ quen nhau lúc đi du lịch nước ngoài, tính cách khá giống nhau.'},
     {zh:'李老师差不多六十岁了。',py:'Lǐ lǎoshī chàbuduō liùshí suì le.',vn:'Cô Lý gần sáu mươi tuổi rồi.'},
   ],
   hanzi:[
     {c:'差',p:'chà',type:'上下结构 · Trên-dưới',st:9,ord:'羊(biến thể) trên → 工 dưới',rad:'工 (công)',mean:'sai khác, kém',
      tip:'Chữ mô phỏng sự SO SÁNH LỆCH nhau giữa hai vật → chỉ SỰ KHÁC BIỆT; kết hợp 不多 (không nhiều) thành 差不多 = KHÁC BIỆT KHÔNG NHIỀU, tức GẦN NHƯ GIỐNG NHAU.',
      cf:'着 (zhe – trợ từ, không liên quan nghĩa dù viết gần giống phần trên)',w:'差不多 / 差点儿 / 差别'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai chị em họ tính cách gần như giống nhau, đều rất hóm hỉnh.',answer:'她们姐妹俩性格差不多，都很幽默。',answerPy:'Tāmen jiěmèi liǎ xìnggé chàbuduō, dōu hěn yōumò.',
      note:'差不多 làm vị ngữ (tính từ) — gần giống nhau.'},
     {promptLang:'vi',prompt:'Nếu bạn không gọi điện cho tôi, tôi gần như đã quên mất chuyện hai ta gặp nhau rồi.',answer:'要不是你给我打电话，我差不多忘了咱俩见面的事。',answerPy:'Yàobushì nǐ gěi wǒ dǎ diànhuà, wǒ chàbuduō wàngle zán liǎ jiànmiàn de shì.',
      note:'差不多 (phó từ) trước động từ — suýt nữa, gần như.'},
   ]},

  {n:10,zh:'专门',py:'zhuānmén',pos:'Phó từ',vn:'đặc biệt, riêng biệt',em:'🎯',lesson:2,
   explain:['Làm riêng, dành riêng cho một mục đích cụ thể, không phải tiện thể.'],
   usage:'Phó từ, đứng trước động từ: 专门 + V (专门从国外飞回来).',
   collo:['专门从……回来','专门为你','专门去做'],
   ex_zh:'张远还专门从国外飞回来呢。',ex_py:'Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',ex_vn:'Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.',
   exList:[
     {zh:'张远还专门从国外飞回来呢。',py:'Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',vn:'Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.'},
     {zh:'他专门为我们准备了礼物。',py:'Tā zhuānmén wèi wǒmen zhǔnbèile lǐwù.',vn:'Anh ấy đặc biệt chuẩn bị quà cho chúng tôi.'},
     {zh:'我专门请了一天假去看她。',py:'Wǒ zhuānmén qǐngle yì tiān jià qù kàn tā.',vn:'Tôi đặc biệt xin nghỉ một ngày để đi thăm cô ấy.'},
   ],
   hanzi:[
     {c:'专',p:'zhuān',type:'独体字 · Chữ đơn (giản thể)',st:4,ord:'nét liền',rad:'一 (nhất)',mean:'chuyên, riêng',
      tip:'Chữ giản thể tượng hình một trục xe quay CHUYÊN VỀ một hướng → mở rộng thành CHUYÊN BIỆT, RIÊNG.',
      cf:'专 dễ nhầm với 云 (yún – "mây")',w:'专门 / 专业 / 专家'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì muốn gặp bạn cũ, cô ấy đặc biệt bay từ nước ngoài về.',answer:'因为想见老朋友，她专门从国外飞回来。',answerPy:'Yīnwèi xiǎng jiàn lǎo péngyou, tā zhuānmén cóng guówài fēi huilai.',
      note:'因为……(所以)…… ôn lại cấu trúc HSK2-3.'},
     {promptLang:'vi',prompt:'Mặc dù rất bận, anh ấy vẫn đặc biệt dành thời gian gặp mặt tôi.',answer:'尽管很忙，他还是专门留时间见我。',answerPy:'Jǐnguǎn hěn máng, tā háishi zhuānmén liú shíjiān jiàn wǒ.',
      note:'尽管……还是…… — mặc dù … vẫn ….'},
   ]},

  {n:11,zh:'毕业',py:'bì yè',pos:'Cụm động từ',vn:'tốt nghiệp',em:'🎓',lesson:2,
   explain:['Hoàn thành chương trình học và rời khỏi trường.'],
   usage:'Cụm động từ ly hợp (离合词): 毕业后, 毕业了, 毕业十年了 (thời lượng chen vào giữa).',
   collo:['毕业后','毕业十年了','刚毕业'],
   ex_zh:'毕业都快十年了，真想大家啊！',ex_py:'Bì yè dōu kuài shí nián le, zhēn xiǎng dàjiā a!',ex_vn:'Tốt nghiệp cũng sắp mười năm rồi, thật là nhớ mọi người quá!',
   exList:[
     {zh:'毕业都快十年了，真想大家啊！',py:'Bì yè dōu kuài shí nián le, zhēn xiǎng dàjiā a!',vn:'Tốt nghiệp cũng sắp mười năm rồi, thật là nhớ mọi người quá!'},
     {zh:'她毕业后就去上海工作了。',py:'Tā bì yè hòu jiù qù Shànghǎi gōngzuò le.',vn:'Cô ấy tốt nghiệp xong thì đi Thượng Hải làm việc.'},
     {zh:'尽管已经毕业这么多年，我们还是经常联系的。',py:'Jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de.',vn:'Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc.'},
   ],
   hanzi:[
     {c:'毕',p:'bì',type:'独体字 · Chữ đơn (giản thể)',st:6,ord:'nét liền',rad:'比 (tỷ, biến thể)',mean:'xong, hết',
      tip:'Chữ giản thể mang nghĩa HOÀN TẤT, KẾT THÚC (một quá trình) → 毕业 = KẾT THÚC việc học, TỐT NGHIỆP.',
      cf:'毕 dễ nhầm với 华 (huá – "Trung Hoa", không liên quan nghĩa)',w:'毕业 / 完毕'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy tốt nghiệp xong liền đi làm ở Thượng Hải, chúng tôi đã lâu không liên lạc.',answer:'她毕业后就去上海工作了，我们好久没联系了。',answerPy:'Tā bì yè hòu jiù qù Shànghǎi gōngzuò le, wǒmen hǎojiǔ méi liánxì le.',
      note:'V后就…… — sau khi làm gì đó liền ….'},
     {promptLang:'vi',prompt:'Tốt nghiệp là một chuyện vừa vui vừa buồn.',answer:'毕业是一件让人又高兴又难过的事。',answerPy:'Bì yè shì yí jiàn ràng rén yòu gāoxìng yòu nánguò de shì.',
      note:'又……又…… — vừa … vừa …, ôn lại cấu trúc HSK2.'},
   ]},

  {n:12,zh:'麻烦',py:'máfan',pos:'Động từ/Tính từ',vn:'làm phiền; phiền phức',em:'🙏',lesson:2,
   explain:['1. (Động từ) Làm phiền ai đó, nhờ vả gây bất tiện.','2. (Tính từ) Phức tạp, rắc rối, khó xử lý.'],
   usage:'Động từ lịch sự: 麻烦你 + V (麻烦你跟她联系一下); tính từ: 这件事很麻烦.',
   collo:['麻烦你','不麻烦你了','很麻烦'],
   ex_zh:'麻烦你跟她联系一下，请她一起来参加同学聚会。',ex_py:'Máfan nǐ gēn tā liánxì yíxià, qǐng tā yìqǐ lái cānjiā tóngxué jùhuì.',ex_vn:'Phiền bạn liên hệ với cô ấy một chút, mời cô ấy cùng đến tham gia họp lớp.',
   exList:[
     {zh:'麻烦你跟她联系一下，请她一起来参加同学聚会。',py:'Máfan nǐ gēn tā liánxì yíxià, qǐng tā yìqǐ lái cānjiā tóngxué jùhuì.',vn:'Phiền bạn liên hệ với cô ấy một chút, mời cô ấy cùng đến tham gia họp lớp.'},
     {zh:'不麻烦你了，我坐出租车回去。',py:'Bù máfan nǐ le, wǒ zuò chūzūchē huíqu.',vn:'Không làm phiền bạn nữa đâu, tôi đi taxi về.'},
     {zh:'这件事说起来有点儿麻烦。',py:'Zhè jiàn shì shuōqilai yǒudiǎnr máfan.',vn:'Chuyện này nói ra thì hơi phức tạp.'},
   ],
   hanzi:[
     {c:'麻',p:'má',type:'半包围结构 · Bán bao vây',st:11,ord:'广 bao ngoài → 林 trong',rad:'广 (nghiễm – mái nhà)',mean:'cây gai, tê',
      tip:'Bộ 广(mái che) + 林(nhiều sợi cây gai) → nơi phơi CÂY GAI (nguyên liệu dệt), công việc lột vỏ gai rất RẮC RỐI → mở rộng thành PHIỀN PHỨC.',
      cf:'麻 dễ nhầm với 磨 (mó – "mài", thêm bộ 石")',w:'麻烦 / 麻木 / 芝麻'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phiền bạn giúp tôi liên hệ với thầy Lý một chút được không?',answer:'麻烦你帮我联系一下李老师，好吗？',answerPy:'Máfan nǐ bāng wǒ liánxì yíxià Lǐ lǎoshī, hǎo ma?',
      note:'麻烦你 + V — cách nhờ vả lịch sự.'},
     {promptLang:'vi',prompt:'Việc này gần như ai cũng thấy phức tạp.',answer:'这件事差不多谁都觉得麻烦。',answerPy:'Zhè jiàn shì chàbuduō shéi dōu juéde máfan.',
      note:'差不多 kết hợp 谁都, ôn lại từ vựng bài học.'},
   ]},

  {n:13,zh:'好像',py:'hǎoxiàng',pos:'Phó từ',vn:'giống như, dường như',em:'🌫️',lesson:3,
   explain:['Diễn tả sự phỏng đoán, cảm giác giống với điều gì đó nhưng không chắc chắn hoàn toàn.'],
   usage:'Phó từ, đứng trước động từ/tính từ: 好像 + V/Adj.',
   collo:['好像重新回到','好像在哪儿见过','好像不认识'],
   ex_zh:'好像重新回到了校园。',ex_py:'Hǎoxiàng chóngxīn huídàole xiàoyuán.',ex_vn:'Dường như lại được quay về khuôn viên trường.',
   exList:[
     {zh:'好像重新回到了校园。',py:'Hǎoxiàng chóngxīn huídàole xiàoyuán.',vn:'Dường như lại được quay về khuôn viên trường.'},
     {zh:'应该不认识，但是好像在哪儿见过。',py:'Yīnggāi bú rènshi, dànshì hǎoxiàng zài nǎr jiànguo.',vn:'Chắc là không quen, nhưng dường như đã gặp ở đâu đó rồi.'},
     {zh:'生活就像镜子，好像你怎么对它，它就怎么对你。',py:'Shēnghuó jiù xiàng jìngzi, hǎoxiàng nǐ zěnme duì tā, tā jiù zěnme duì nǐ.',vn:'Cuộc sống giống như tấm gương, dường như bạn đối xử với nó thế nào, nó cũng đối xử lại với bạn như vậy.'},
   ],
   hanzi:[
     {c:'像',p:'xiàng',type:'左右结构 · Trái-phải',st:13,ord:'亻 (nhân) trái → 象 (tượng) phải',rad:'亻 (nhân – người)',mean:'giống, như',
      tip:'Bộ người 亻 + 象 (con voi, hình dáng) → NGƯỜI có HÌNH DÁNG giống một vật gì đó → GIỐNG NHƯ.',
      cf:'象 (xiàng – "con voi", không có bộ 亻")',w:'好像 / 像……一样 / image'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn thấy tấm ảnh này, tôi dường như quay lại những ngày vui vẻ đã qua.',answer:'看到这张照片，我好像回到了过去快乐的日子。',answerPy:'Kàndào zhè zhāng zhàopiàn, wǒ hǎoxiàng huídàole guòqù kuàilè de rìzi.',
      note:'好像 + động từ — diễn tả cảm giác như thế nào.'},
     {promptLang:'vi',prompt:'Anh ấy dường như không muốn nhắc lại chuyện cũ nữa.',answer:'他好像不想再提起过去的事了。',answerPy:'Tā hǎoxiàng bù xiǎng zài tíqǐ guòqù de shì le.',
      note:'好像 + phủ định — phỏng đoán một điều không chắc chắn.'},
   ]},

  {n:14,zh:'重新',py:'chóngxīn',pos:'Phó từ',vn:'lần nữa, lại một lần nữa',em:'🔁',lesson:3,
   explain:['Làm lại từ đầu, quay lại trạng thái/hành động trước đó.'],
   usage:'Phó từ, đứng trước động từ: 重新 + V (重新回到, 重新开始).',
   collo:['重新回到','重新开始','重新考虑'],
   ex_zh:'好像重新回到了校园。',ex_py:'Hǎoxiàng chóngxīn huídàole xiàoyuán.',ex_vn:'Dường như lại được quay về khuôn viên trường.',
   exList:[
     {zh:'好像重新回到了校园。',py:'Hǎoxiàng chóngxīn huídàole xiàoyuán.',vn:'Dường như lại được quay về khuôn viên trường.'},
     {zh:'这件事让我重新认识了他。',py:'Zhè jiàn shì ràng wǒ chóngxīn rènshile tā.',vn:'Chuyện này khiến tôi nhận thức lại về anh ấy.'},
     {zh:'我们重新开始吧。',py:'Wǒmen chóngxīn kāishǐ ba.',vn:'Chúng ta bắt đầu lại từ đầu đi.'},
   ],
   hanzi:[
     {c:'重',p:'chóng',type:'独体字 · Chữ đơn',st:9,ord:'nét liền',rad:'里 (lý)',mean:'lại, trùng',
      tip:'Chữ vốn nghĩa "nặng, trọng"; khi đọc chóng mang nghĩa TRÙNG LẶP, LÀM LẠI → 重新 = LÀM LẠI TỪ ĐẦU.',
      cf:'重 khi đọc "zhòng" nghĩa là "nặng"; đọc "chóng" nghĩa là "lại"',w:'重新 / 重复 / 重新开始'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hy vọng có thể nhận thức lại về người bạn cũ này.',answer:'我希望能重新认识这个老朋友。',answerPy:'Wǒ xīwàng néng chóngxīn rènshi zhège lǎo péngyou.',
      note:'重新 + động từ — làm lại một hành động.'},
     {promptLang:'vi',prompt:'Nếu chuyện này thất bại, chúng ta sẽ bắt đầu lại từ đầu.',answer:'如果这件事失败了，我们就重新开始。',answerPy:'Rúguǒ zhè jiàn shì shībài le, wǒmen jiù chóngxīn kāishǐ.',
      note:'如果……就…… ôn lại cấu trúc HSK2-3.'},
   ]},

  {n:15,zh:'尽管',py:'jǐnguǎn',pos:'Liên từ',vn:'cho dù, mặc dù',em:'📌',lesson:3,
   explain:['Liên từ dùng ở vế câu thứ nhất, nêu một sự thật; vế câu thứ hai nêu kết quả (thường không như dự đoán thông thường), hay đi cùng 但是/可是/却/还是.'],
   usage:'尽管 + sự thật，但是/可是/却/还是 + kết quả.',
   collo:['尽管……但是……','尽管……可是……','尽管……还是……'],
   ex_zh:'尽管已经毕业这么多年，我们还是经常联系的。',ex_py:'Jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de.',ex_vn:'Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc.',
   exList:[
     {zh:'尽管已经毕业这么多年，我们还是经常联系的。',py:'Jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de.',vn:'Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc.'},
     {zh:'男朋友送给我的这份礼物尽管不贵，但却让我非常感动。',py:'Nánpéngyou sòng gěi wǒ de zhè fèn lǐwù jǐnguǎn bú guì, dàn què ràng wǒ fēicháng gǎndòng.',vn:'Món quà bạn trai tặng tôi tuy không đắt, nhưng lại khiến tôi vô cùng cảm động.'},
     {zh:'尽管现在工作很忙，可到了周末他还是会跟朋友去打球。',py:'Jǐnguǎn xiànzài gōngzuò hěn máng, kě dàole zhōumò tā háishi huì gēn péngyou qù dǎqiú.',vn:'Mặc dù bây giờ công việc bận rộn, nhưng đến cuối tuần anh ấy vẫn sẽ cùng bạn bè đi chơi thể thao.'},
   ],
   hanzi:[
     {c:'尽',p:'jǐn',type:'独体字 · Chữ đơn (giản thể)',st:6,ord:'nét liền',rad:'尸 (thi, biến thể)',mean:'hết, tận',
      tip:'Chữ giản thể mang nghĩa ĐẾN TẬN CÙNG, HẾT MỨC; 尽管 mang nghĩa CHO DÙ (đến mức độ nào đó vẫn không đổi kết quả).',
      cf:'尽 khi đọc "jìn" nghĩa là "hết sức" (尽力); đọc "jǐn" nghĩa là "cho dù" (尽管)',w:'尽管 / 尽量 / 尽力'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù mới quen chưa đầy một tháng, nhưng họ đã quyết định kết hôn.',answer:'尽管认识不到一个月，但他们已经决定结婚了。',answerPy:'Jǐnguǎn rènshi bú dào yí ge yuè, dàn tāmen yǐjīng juédìng jié hūn le.',
      note:'尽管……但…… — mặc dù … nhưng ….'},
     {promptLang:'vi',prompt:'Mặc dù anh ấy viết chậm hơn, nhưng viết vẫn rất đẹp.',answer:'尽管他写得比较慢，但写得还是很好看。',answerPy:'Jǐnguǎn tā xiě de bǐjiào màn, dàn xiě de háishi hěn hǎokàn.',
      note:'尽管……但……还是…… — cấu trúc tương phản đầy đủ.'},
   ]},

  {n:16,zh:'真正',py:'zhēnzhèng',pos:'Tính từ',vn:'chân chính, thật sự',em:'✅',lesson:3,
   explain:['Đích thực, không giả tạo, đúng bản chất.'],
   usage:'Tính từ, làm định ngữ: 真正的朋友, 真正的友谊.',
   collo:['真正的朋友','真正的友谊','真正了解'],
   ex_zh:'能有一个真正的朋友，有一段真正的友谊，是多么不容易！',ex_py:'Néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',ex_vn:'Có được một người bạn chân chính, có một tình bạn chân chính, thật không dễ dàng chút nào!',
   exList:[
     {zh:'能有一个真正的朋友，有一段真正的友谊，是多么不容易！',py:'Néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',vn:'Có được một người bạn chân chính, có một tình bạn chân chính, thật không dễ dàng chút nào!'},
     {zh:'什么是真正的朋友？',py:'Shénme shì zhēnzhèng de péngyou?',vn:'Thế nào là người bạn chân chính?'},
     {zh:'必须要有自己真正的朋友。',py:'Bìxū yào yǒu zìjǐ zhēnzhèng de péngyou.',vn:'Nhất định phải có người bạn chân chính của riêng mình.'},
   ],
   hanzi:[
     {c:'真',p:'zhēn',type:'独体字 · Chữ đơn',st:10,ord:'nét liền',rad:'目 (mục, biến thể)',mean:'thật, chân thật',
      tip:'Chữ tượng hình mô phỏng việc dùng mắt 目 nhìn thấy TẬN MẮT sự việc → xác nhận điều đó là THẬT.',
      cf:'真 dễ nhầm với 直 (zhí – "thẳng", thiếu nét trên)',w:'真正 / 真的 / 认真'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có được một người bạn chân chính thật sự rất khó, mặc dù tôi đã cố gắng tìm kiếm nhiều năm.',answer:'能有一个真正的朋友真的很难，尽管我已经找了很多年。',answerPy:'Néng yǒu yí ge zhēnzhèng de péngyou zhēn de hěn nán, jǐnguǎn wǒ yǐjīng zhǎole hěn duō nián.',
      note:'尽管 đứng cuối câu phức, nêu sự thật đã tồn tại.'},
     {promptLang:'vi',prompt:'Người bạn chân chính sẽ kịp thời giúp đỡ bạn khi bạn gặp khó khăn.',answer:'真正的朋友会在你遇到困难的时候及时帮助你。',answerPy:'Zhēnzhèng de péngyou huì zài nǐ yùdào kùnnan de shíhou jíshí bāngzhù nǐ.',
      note:'当/在……的时候 — khi….'},
   ]},

  {n:17,zh:'友谊',py:'yǒuyì',pos:'Danh từ',vn:'tình bạn',em:'🫱🏻‍🫲🏼',lesson:3,
   explain:['Tình cảm gắn bó, thân thiết giữa những người bạn.'],
   usage:'Danh từ; thường đi với 真正的友谊, 一段友谊.',
   collo:['真正的友谊','一段友谊','珍惜友谊'],
   ex_zh:'有一段真正的友谊，是多么不容易！',ex_py:'Yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',ex_vn:'Có được một tình bạn chân chính, thật không dễ dàng chút nào!',
   exList:[
     {zh:'有一段真正的友谊，是多么不容易！',py:'Yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',vn:'Có được một tình bạn chân chính, thật không dễ dàng chút nào!'},
     {zh:'能有一个真正的朋友，有一段真正的友谊，是多么不容易！',py:'Néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',vn:'Có được một người bạn chân chính, có một tình bạn chân chính, thật không dễ dàng chút nào!'},
     {zh:'幽默能帮助人们打开友谊的大门。',py:'Yōumò néng bāngzhù rénmen dǎkāi yǒuyì de dàmén.',vn:'Sự hài hước có thể giúp người ta mở cánh cửa tình bạn.'},
   ],
   hanzi:[
     {c:'谊',p:'yì',type:'左右结构 · Trái-phải',st:10,ord:'讠 (ngôn) trái → 宜 (nghi) phải',rad:'讠 (ngôn – lời nói)',mean:'tình nghĩa',
      tip:'Bộ lời nói 讠 (giao tiếp) + 宜 (thích hợp, hòa hợp) → giao tiếp HÒA HỢP giữa người với người = TÌNH NGHĨA, TÌNH BẠN.',
      cf:'宜 (yí – "thích hợp", không có bộ 讠")',w:'友谊 / 情谊'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù thời gian trôi qua nhiều năm, tình bạn của chúng tôi vẫn như trước.',answer:'尽管时间过去了这么多年，我们的友谊还是跟以前一样。',answerPy:'Jǐnguǎn shíjiān guòqùle zhème duō nián, wǒmen de yǒuyì háishi gēn yǐqián yíyàng.',
      note:'跟……一样 — giống như…, ôn lại cấu trúc HSK3.'},
     {promptLang:'vi',prompt:'Cô ấy rất trân trọng tình bạn giữa hai chúng tôi.',answer:'她很珍惜我们俩的友谊。',answerPy:'Tā hěn zhēnxī wǒmen liǎ de yǒuyì.',
      note:'珍惜 + danh từ — trân trọng….'},
   ]},

  {n:18,zh:'丰富',py:'fēngfù',pos:'Động từ/Tính từ',vn:'làm phong phú; phong phú',em:'🌈',lesson:4,
   explain:['1. (Động từ) Làm cho thêm nhiều, đa dạng hơn.','2. (Tính từ) Đa dạng, nhiều về số lượng/chủng loại.'],
   usage:'Động từ mang tân ngữ: 丰富我们的生活; tính từ: 经验很丰富.',
   collo:['丰富我们的生活','经验丰富','内容丰富'],
   ex_zh:'朋友可以丰富我们的生活。',ex_py:'Péngyou kěyǐ fēngfù wǒmen de shēnghuó.',ex_vn:'Bạn bè có thể làm phong phú thêm cuộc sống của chúng ta.',
   exList:[
     {zh:'朋友可以丰富我们的生活。',py:'Péngyou kěyǐ fēngfù wǒmen de shēnghuó.',vn:'Bạn bè có thể làm phong phú thêm cuộc sống của chúng ta.'},
     {zh:'他工作经验很丰富。',py:'Tā gōngzuò jīngyàn hěn fēngfù.',vn:'Kinh nghiệm làm việc của anh ấy rất phong phú.'},
     {zh:'这本书的内容非常丰富。',py:'Zhè běn shū de nèiróng fēicháng fēngfù.',vn:'Nội dung cuốn sách này rất phong phú.'},
   ],
   hanzi:[
     {c:'丰',p:'fēng',type:'独体字 · Chữ đơn (giản thể)',st:4,ord:'nét liền',rad:'一 (nhất)',mean:'phong phú, nhiều',
      tip:'Chữ giản thể tượng hình bó lúa đầy đặn → mùa màng SUNG TÚC, ĐẦY ĐỦ, mở rộng thành PHONG PHÚ.',
      cf:'丰 dễ nhầm với 车 (chē – "xe")',w:'丰富 / 丰收 / 丰满'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kết giao nhiều bạn bè có thể làm phong phú thêm cuộc sống của chúng ta.',answer:'交更多朋友可以丰富我们的生活。',answerPy:'Jiāo gèng duō péngyou kěyǐ fēngfù wǒmen de shēnghuó.',
      note:'交朋友 + 丰富生活, ôn lại từ vựng bài học.'},
     {promptLang:'vi',prompt:'Mặc dù kinh nghiệm của anh ấy rất phong phú, anh ấy vẫn khiêm tốn học hỏi người khác.',answer:'尽管他的经验很丰富，他还是谦虚地向别人学习。',answerPy:'Jǐnguǎn tā de jīngyàn hěn fēngfù, tā háishi qiānxū de xiàng biéren xuéxí.',
      note:'尽管……还是…… — mặc dù … vẫn ….'},
   ]},

  {n:19,zh:'无聊',py:'wúliáo',pos:'Tính từ',vn:'vô vị, nhàm chán',em:'😑',lesson:4,
   explain:['Không có gì thú vị, không có việc gì làm khiến cảm thấy chán.'],
   usage:'Tính từ, làm vị ngữ: 生活很无聊, 太无聊了.',
   collo:['很无聊','太无聊了','觉得无聊'],
   ex_zh:'离开朋友，我们的生活一定会非常无聊。',ex_py:'Líkāi péngyou, wǒmen de shēnghuó yídìng huì fēicháng wúliáo.',ex_vn:'Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ rất nhàm chán.',
   exList:[
     {zh:'离开朋友，我们的生活一定会非常无聊。',py:'Líkāi péngyou, wǒmen de shēnghuó yídìng huì fēicháng wúliáo.',vn:'Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ rất nhàm chán.'},
     {zh:'周末总是一个人在家太无聊了。',py:'Zhōumò zǒngshì yí ge rén zài jiā tài wúliáo le.',vn:'Cuối tuần lúc nào cũng một mình ở nhà thì chán quá.'},
     {zh:'这部电影真无聊。',py:'Zhè bù diànyǐng zhēn wúliáo.',vn:'Bộ phim này thật nhàm chán.'},
   ],
   hanzi:[
     {c:'聊',p:'liáo',type:'左右结构 · Trái-phải',st:11,ord:'耳 (nhĩ) trái → 卯 (mão) phải',rad:'耳 (nhĩ – tai)',mean:'chuyện phiếm, tán gẫu',
      tip:'Bộ tai 耳(lắng nghe) + 卯 (biểu âm) → cùng LẮNG NGHE nhau TÁN GẪU; 无聊 = không có gì để TÁN GẪU/GIẢI TRÍ = NHÀM CHÁN.',
      cf:'聊 dễ nhầm với 卿 (qīng – "khanh tướng", ít dùng)',w:'无聊 / 聊天儿 / 闲聊'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù cuộc sống đôi khi nhàm chán, nhưng có bạn bè ở bên thì sẽ tốt hơn nhiều.',answer:'尽管生活有时候很无聊，但有朋友陪着就会好很多。',answerPy:'Jǐnguǎn shēnghuó yǒu shíhou hěn wúliáo, dàn yǒu péngyou péizhe jiù huì hǎo hěn duō.',
      note:'尽管……但…… — mặc dù … nhưng ….'},
     {promptLang:'vi',prompt:'Nếu không có bạn bè, cuối tuần của tôi sẽ vô cùng nhàm chán.',answer:'如果没有朋友，我的周末会非常无聊。',answerPy:'Rúguǒ méiyǒu péngyou, wǒ de zhōumò huì fēicháng wúliáo.',
      note:'如果……会…… — nếu … sẽ ….'},
   ]},

  {n:20,zh:'讨厌',py:'tǎoyàn',pos:'Động từ',vn:'ghét, không thích',em:'😒',lesson:4,
   explain:['Cảm thấy khó chịu, không ưa một người/sự việc nào đó.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 讨厌 + Đối tượng.',
   collo:['让人讨厌','很讨厌','讨厌他'],
   ex_zh:'一个脾气不好的人虽然不一定让人讨厌。',ex_py:'Yí ge píqi bù hǎo de rén suīrán bùyídìng ràng rén tǎoyàn.',ex_vn:'Một người tính khí không tốt tuy chưa chắc khiến người khác ghét.',
   exList:[
     {zh:'一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。',py:'Yí ge píqi bù hǎo de rén suīrán bùyídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou.',vn:'Một người tính khí không tốt tuy chưa chắc khiến người khác ghét, nhưng lại rất khó kết bạn với người khác.'},
     {zh:'没有人会喜欢跟一个总是容易生气的人在一起。',py:'Méiyǒu rén huì xǐhuan gēn yí ge zǒngshì róngyì shēngqì de rén zài yìqǐ.',vn:'Không ai thích ở cùng một người lúc nào cũng dễ nổi giận.'},
     {zh:'我真讨厌这种天气。',py:'Wǒ zhēn tǎoyàn zhè zhǒng tiānqì.',vn:'Tôi thật sự ghét kiểu thời tiết này.'},
   ],
   hanzi:[
     {c:'厌',p:'yàn',type:'半包围结构 · Bán bao vây (giản thể)',st:6,ord:'厂 bao ngoài → 犬 trong',rad:'厂 (hán – vách núi)',mean:'chán ghét',
      tip:'Chữ giản thể mang nghĩa NO ĐỦ ĐẾN MỨC CHÁN → mở rộng thành GHÉT, KHÔNG ƯA.',
      cf:'厌 dễ nhầm với 庆 (qìng – "chúc mừng")',w:'讨厌 / 厌烦 / 满足'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai thích ở cùng một người luôn luôn nói dối cả.',answer:'没有人会喜欢跟一个总是说谎的人在一起。',answerPy:'Méiyǒu rén huì xǐhuan gēn yí ge zǒngshì shuōhuǎng de rén zài yìqǐ.',
      note:'没有人会喜欢跟……在一起 — cụm cố định phủ định hoàn toàn.'},
     {promptLang:'vi',prompt:'Tính khí không tốt tuy không đáng ghét, nhưng dễ khiến người khác hiểu lầm.',answer:'脾气不好虽然不讨厌，但容易让人误会。',answerPy:'Píqi bù hǎo suīrán bù tǎoyàn, dàn róngyì ràng rén wùhuì.',
      note:'虽然……但…… ôn lại cấu trúc HSK3.'},
   ]},

  {n:21,zh:'却',py:'què',pos:'Phó từ',vn:'lại, nhưng mà',em:'↩️',lesson:4,
   explain:['Phó từ chỉ sự chuyển ý, tương phản nhẹ nhàng, đứng sau chủ ngữ, trước động từ.'],
   usage:'Chủ ngữ + 却 + Vị ngữ; thường dùng cùng 虽然/但是 để tăng sắc thái tương phản.',
   collo:['但是却','有人却','却很难'],
   ex_zh:'一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。',ex_py:'Yí ge píqi bù hǎo de rén suīrán bùyídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou.',ex_vn:'Một người tính khí không tốt tuy chưa chắc khiến người khác ghét, nhưng lại rất khó kết bạn với người khác.',
   exList:[
     {zh:'一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。',py:'Yí ge píqi bù hǎo de rén suīrán bùyídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou.',vn:'Một người tính khí không tốt tuy chưa chắc khiến người khác ghét, nhưng lại rất khó kết bạn với người khác.'},
     {zh:'有人觉得有房子和汽车就是幸福，有人却认为找到真正的爱情才是幸福。',py:'Yǒurén juéde yǒu fángzi hé qìchē jiùshì xìngfú, yǒurén què rènwéi zhǎodào zhēnzhèng de àiqíng cái shì xìngfú.',vn:'Có người cho rằng có nhà có xe là hạnh phúc, có người lại cho rằng tìm được tình yêu chân chính mới là hạnh phúc.'},
     {zh:'现在很多人虽然住在同一个楼里，但是却从来没说过话。',py:'Xiànzài hěn duō rén suīrán zhù zài tóng yí ge lóu li, dànshì què cónglái méi shuōguo huà.',vn:'Bây giờ nhiều người tuy sống cùng một tòa nhà, nhưng lại chưa từng nói chuyện với nhau.'},
   ],
   hanzi:[
     {c:'却',p:'què',type:'左右结构 · Trái-phải',st:7,ord:'去 (khứ) trái → 卩 (tiết) phải',rad:'卩 (tiết – quỳ gối)',mean:'lùi lại, nhưng',
      tip:'Bộ 去(rời đi) + 卩(người) → người LÙI LẠI so với hướng đi ban đầu, mở rộng thành ý nghĩa CHUYỂN Ý, TƯƠNG PHẢN NHẸ.',
      cf:'却 dễ nhầm với 脚 (jiǎo – "chân", thêm bộ 月")',w:'却 / 但却 / 忘却'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy thích rèn luyện thân thể, còn em trai anh ấy lại rất lười vận động.',answer:'他喜欢锻炼身体，他弟弟却很懒得运动。',answerPy:'Tā xǐhuan duànliàn shēntǐ, tā dìdi què hěn lǎnde yùndòng.',
      note:'却 nêu sự tương phản nhẹ nhàng giữa hai chủ thể khác nhau.'},
     {promptLang:'vi',prompt:'Có người ăn rất ít, nhưng lại không gầy.',answer:'有的人吃得很少，但不瘦，却让人羡慕。',answerPy:'Yǒude rén chī de hěn shǎo, dàn bú shòu, què ràng rén xiànmù.',
      note:'但……却…… — nhưng lại….'},
   ]},

  {n:22,zh:'周围',py:'zhōuwéi',pos:'Danh từ',vn:'xung quanh',em:'⭕',lesson:4,
   explain:['Khu vực bao quanh một vị trí/người nào đó.'],
   usage:'Danh từ; thường đi với 周围的人/环境: 跟周围的人交流.',
   collo:['周围的人','周围的环境','在……周围'],
   ex_zh:'我们还要经常跟周围的人交流。',ex_py:'Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú.',ex_vn:'Chúng ta còn phải thường xuyên giao lưu với những người xung quanh.',
   exList:[
     {zh:'我们还要经常跟周围的人交流。',py:'Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú.',vn:'Chúng ta còn phải thường xuyên giao lưu với những người xung quanh.'},
     {zh:'我喜欢现在住的地方，周围环境很好。',py:'Wǒ xǐhuan xiànzài zhù de dìfang, zhōuwéi huánjìng hěn hǎo.',vn:'Tôi thích nơi đang ở hiện tại, môi trường xung quanh rất tốt.'},
     {zh:'不像以前住的地方，周围一个超市都没有。',py:'Bú xiàng yǐqián zhù de dìfang, zhōuwéi yí ge chāoshì dōu méiyǒu.',vn:'Không như nơi ở trước đây, xung quanh không có lấy một siêu thị nào.'},
   ],
   hanzi:[
     {c:'围',p:'wéi',type:'半包围结构 · Bán bao vây (giản thể)',st:7,ord:'囗 bao ngoài → 韦 trong',rad:'囗 (vi – bao quanh)',mean:'vây quanh',
      tip:'Bộ 囗(khung bao quanh) + 韦(biểu âm) → BAO QUANH một khu vực, kết hợp 周(vòng) thành 周围 = XUNG QUANH.',
      cf:'围 dễ nhầm với 因 (yīn – "nguyên nhân", bộ 囗 khác)',w:'周围 / 围绕 / 包围'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn thường xuyên giao lưu với người xung quanh, sẽ dễ dàng kết bạn hơn.',answer:'如果你经常跟周围的人交流，就更容易交到朋友。',answerPy:'Rúguǒ nǐ jīngcháng gēn zhōuwéi de rén jiāoliú, jiù gèng róngyì jiāodào péngyou.',
      note:'如果……就…… ôn lại cấu trúc HSK2-3.'},
     {promptLang:'vi',prompt:'Môi trường xung quanh trường học của chúng tôi rất yên tĩnh.',answer:'我们学校周围的环境很安静。',answerPy:'Wǒmen xuéxiào zhōuwéi de huánjìng hěn ānjìng.',
      note:'danh từ + 周围 — khu vực xung quanh (danh từ đó).'},
   ]},

  {n:23,zh:'交流',py:'jiāoliú',pos:'Động từ',vn:'giao lưu, trao đổi',em:'🔀',lesson:4,
   explain:['Trao đổi thông tin, ý kiến, tình cảm qua lại giữa hai bên.'],
   usage:'Động từ; thường đi với 跟……交流: 跟周围的人交流.',
   collo:['跟……交流','互相交流','交流经验'],
   ex_zh:'我们还要经常跟周围的人交流。',ex_py:'Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú.',ex_vn:'Chúng ta còn phải thường xuyên giao lưu với những người xung quanh.',
   exList:[
     {zh:'我们还要经常跟周围的人交流。',py:'Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú.',vn:'Chúng ta còn phải thường xuyên giao lưu với những người xung quanh.'},
     {zh:'交流能让人们互相了解。',py:'Jiāoliú néng ràng rénmen hùxiāng liǎojiě.',vn:'Giao lưu có thể giúp mọi người hiểu nhau hơn.'},
     {zh:'我们经常交流学习经验。',py:'Wǒmen jīngcháng jiāoliú xuéxí jīngyàn.',vn:'Chúng tôi thường trao đổi kinh nghiệm học tập.'},
   ],
   hanzi:[
     {c:'流',p:'liú',type:'左右结构 · Trái-phải',st:10,ord:'氵 (thủy) trái → 㐬 phải',rad:'氵 (thủy – nước)',mean:'chảy, lưu thông',
      tip:'Bộ nước 氵 (dòng chảy) + 㐬 (biểu âm) → dòng nước CHẢY LIÊN TỤC, mở rộng thành LƯU THÔNG, TRAO ĐỔI (thông tin chảy qua lại).',
      cf:'流 dễ nhầm với 硫 (liú – "lưu huỳnh", bộ 石")',w:'交流 / 流利 / 流行'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu có sở thích chung, giao lưu với nhau sẽ dễ dàng hơn nhiều.',answer:'如果有共同的爱好，互相交流就会容易得多。',answerPy:'Rúguǒ yǒu gòngtóng de àihào, hùxiāng jiāoliú jiù huì róngyì de duō.',
      note:'如果……就…… kết hợp 互相 (ôn lại từ vựng bài học).'},
     {promptLang:'vi',prompt:'Trao đổi có thể giúp mọi người hiểu nhau nhiều hơn, dễ dàng trở thành bạn bè hơn.',answer:'交流能让人们互相了解，更容易成为朋友。',answerPy:'Jiāoliú néng ràng rénmen hùxiāng liǎojiě, gèng róngyì chéngwéi péngyou.',
      note:'能让……(互相了解) — có thể khiến … (hiểu nhau).'},
   ]},

  {n:24,zh:'理解',py:'lǐjiě',pos:'Động từ',vn:'hiểu',em:'💡',lesson:5,
   explain:['Nắm được ý nghĩa, cảm thông với suy nghĩ/tình cảm của ai đó hoặc sự việc nào đó.'],
   usage:'Động từ, có thể mang tân ngữ trực tiếp hoặc làm danh từ: 理解朋友, 不同的理解.',
   collo:['不同的理解','互相理解','理解你'],
   ex_zh:'不同的人会有不同的理解。',ex_py:'Bù tóng de rén huì yǒu bù tóng de lǐjiě.',ex_vn:'Người khác nhau sẽ có cách hiểu khác nhau.',
   exList:[
     {zh:'不同的人会有不同的理解。',py:'Bù tóng de rén huì yǒu bù tóng de lǐjiě.',vn:'Người khác nhau sẽ có cách hiểu khác nhau.'},
     {zh:'而我的理解是：当你遇到困难的时候，真正的朋友会站出来。',py:'Ér wǒ de lǐjiě shì: dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai.',vn:'Còn cách hiểu của tôi là: khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra.'},
     {zh:'朋友之间要互相理解。',py:'Péngyou zhījiān yào hùxiāng lǐjiě.',vn:'Bạn bè với nhau phải hiểu nhau.'},
   ],
   hanzi:[
     {c:'解',p:'jiě',type:'左右结构 · Trái-phải',st:13,ord:'角 trái → 刀+牛 phải',rad:'角 (giác – sừng)',mean:'giải, hiểu',
      tip:'Hình tượng dùng dao 刀 mổ xẻ con trâu 牛 để tách riêng từng phần (角=sừng) → PHÂN TÁCH RÕ RÀNG, mở rộng thành HIỂU, GIẢI THÍCH.',
      cf:'解 khi đọc "jiè" nghĩa là "áp giải" (ít dùng)',w:'理解 / 解决 / 了解'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù mỗi người hiểu khác nhau, chúng ta vẫn nên tôn trọng cách hiểu của người khác.',answer:'即使每个人的理解不同，我们也应该尊重别人的理解。',answerPy:'Jíshǐ měi ge rén de lǐjiě bù tóng, wǒmen yě yīnggāi zūnzhòng biéren de lǐjiě.',
      note:'即使……也…… ôn lại điểm ngữ pháp Bài 1.'},
     {promptLang:'vi',prompt:'Bạn bè cần hiểu nhau, đó mới là tình bạn chân chính.',answer:'朋友需要互相理解，那才是真正的友谊。',answerPy:'Péngyou xūyào hùxiāng lǐjiě, nà cái shì zhēnzhèng de yǒuyì.',
      note:'那才是…… — đó mới là ….'},
   ]},

  {n:25,zh:'镜子',py:'jìngzi',pos:'Danh từ',vn:'gương, gương soi',em:'🪞',lesson:5,
   explain:['Vật dụng để phản chiếu hình ảnh, dùng để soi.'],
   usage:'Danh từ; thường dùng làm hình ảnh ẩn dụ: 朋友像镜子.',
   collo:['像镜子','照镜子','一面镜子'],
   ex_zh:'有些人觉得朋友应该像镜子，能帮自己看到缺点。',ex_py:'Yǒuxiē rén juéde péngyou yīnggāi xiàng jìngzi, néng bāng zìjǐ kàndào quēdiǎn.',ex_vn:'Có người cho rằng bạn bè nên giống như tấm gương, giúp bản thân nhìn ra khuyết điểm.',
   exList:[
     {zh:'有些人觉得朋友应该像镜子，能帮自己看到缺点。',py:'Yǒuxiē rén juéde péngyou yīnggāi xiàng jìngzi, néng bāng zìjǐ kàndào quēdiǎn.',vn:'Có người cho rằng bạn bè nên giống như tấm gương, giúp bản thân nhìn ra khuyết điểm.'},
     {zh:'生活就像镜子，你对它笑，它也对你笑。',py:'Shēnghuó jiù xiàng jìngzi, nǐ duì tā xiào, tā yě duì nǐ xiào.',vn:'Cuộc sống giống như tấm gương, bạn cười với nó, nó cũng cười lại với bạn.'},
     {zh:'她每天早上都要照镜子。',py:'Tā měitiān zǎoshang dōu yào zhào jìngzi.',vn:'Sáng nào cô ấy cũng soi gương.'},
   ],
   hanzi:[
     {c:'镜',p:'jìng',type:'左右结构 · Trái-phải (giản thể)',st:16,ord:'钅 (kim) trái → 竟 (cánh) phải',rad:'钅 (kim – kim loại)',mean:'gương',
      tip:'Bộ kim loại 钅 (xưa gương làm bằng đồng đánh bóng) + 竟(biểu âm) → tấm KIM LOẠI được mài bóng để soi = GƯƠNG.',
      cf:'境 (jìng – "cảnh, biên giới", bộ 土")',w:'镜子 / 眼镜 / 照镜子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người cho rằng bạn bè nên giống như gương, phản ánh trung thực cả ưu điểm lẫn khuyết điểm.',answer:'有人认为朋友应该像镜子一样，真实地反映优点和缺点。',answerPy:'Yǒurén rènwéi péngyou yīnggāi xiàng jìngzi yíyàng, zhēnshí de fǎnyìng yōudiǎn hé quēdiǎn.',
      note:'像……一样 — giống như….'},
     {promptLang:'vi',prompt:'Mỗi sáng cô ấy đều soi gương trước khi ra ngoài.',answer:'她每天早上出门前都要照镜子。',answerPy:'Tā měitiān zǎoshang chūmén qián dōu yào zhào jìngzi.',
      note:'V前 — trước khi làm gì, ôn lại cấu trúc HSK2.'},
   ]},

  {n:26,zh:'而',py:'ér',pos:'Liên từ',vn:'(chỉ sự tương phản) trong khi đó, mà',em:'🔗',lesson:5,
   explain:['Liên từ dùng trong câu phức, nối hai vế câu, có thể biểu thị quan hệ đồng đẳng hoặc chuyển ý (tương phản).'],
   usage:'Vế 1 + 而 + Vế 2 (đồng đẳng: liệt kê song song; chuyển ý: tương phản nhẹ).',
   collo:['而我','而不要','而女人'],
   ex_zh:'而我的理解是：当你遇到困难的时候……',ex_py:'Ér wǒ de lǐjiě shì: dāng nǐ yùdào kùnnan de shíhou……',ex_vn:'Còn cách hiểu của tôi là: khi bạn gặp khó khăn….',
   exList:[
     {zh:'而我的理解是：当你遇到困难的时候，真正的朋友会站出来。',py:'Ér wǒ de lǐjiě shì: dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai.',vn:'Còn cách hiểu của tôi là: khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra.'},
     {zh:'"明"字，左边的"日"意思是太阳，而右边的"月"意思是月亮。',py:'"Míng" zì, zuǒbian de "rì" yìsi shì tàiyáng, ér yòubian de "yuè" yìsi shì yuèliang.',vn:'Chữ "明", bên trái chữ "日" nghĩa là mặt trời, còn bên phải chữ "月" nghĩa là mặt trăng.'},
     {zh:'男人回到家不喜欢跟妻子说，而女人喜欢跟丈夫说。',py:'Nánrén huídào jiā bù xǐhuan gēn qīzi shuō, ér nǚrén xǐhuan gēn zhàngfu shuō.',vn:'Đàn ông về nhà không thích nói với vợ, còn phụ nữ thì thích nói với chồng.'},
   ],
   hanzi:[
     {c:'而',p:'ér',type:'独体字 · Chữ đơn',st:6,ord:'nét liền',rad:'而 (nhi, bộ riêng)',mean:'mà, và',
      tip:'Chữ tượng hình chòm râu cằm thời cổ, mượn âm để làm LIÊN TỪ nối hai vế câu, biểu thị quan hệ song song hoặc chuyển ý.',
      cf:'而 dễ nhầm với 面 (miàn – "mặt", nét dưới khác)',w:'而 / 而且 / 因而'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người thích ở nhà, còn có người thích ra ngoài đi dạo phố.',answer:'有人喜欢待在家里，而有人喜欢出去逛街。',answerPy:'Yǒurén xǐhuan dāi zài jiā li, ér yǒurén xǐhuan chūqu guàng jiē.',
      note:'而 nối hai vế song song, đối lập nhẹ nhàng.'},
     {promptLang:'vi',prompt:'Cô ấy hiểu tình bạn là sự chân thành, mà không phải là lợi ích.',answer:'她理解的友谊是真诚，而不是利益。',answerPy:'Tā lǐjiě de yǒuyì shì zhēnchéng, ér bú shì lìyì.',
      note:'而不是…… — mà không phải là ….'},
   ]},

  {n:27,zh:'当',py:'dāng',pos:'Giới từ',vn:'khi',em:'⏰',lesson:5,
   explain:['Giới từ chỉ thời điểm xảy ra sự việc, thường đi cùng ……的时候.'],
   usage:'当 + Mệnh đề + 的时候: 当你遇到困难的时候.',
   collo:['当你……的时候','当……时','当我们'],
   ex_zh:'当你遇到困难的时候，真正的朋友会站出来。',ex_py:'Dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai.',ex_vn:'Khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra.',
   exList:[
     {zh:'当你遇到困难的时候，真正的朋友会站出来，及时给你帮助。',py:'Dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai, jíshí gěi nǐ bāngzhù.',vn:'Khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra, kịp thời giúp đỡ bạn.'},
     {zh:'当你无聊或者难过的时候，真正的朋友会陪在你身边。',py:'Dāng nǐ wúliáo huòzhě nánguò de shíhou, zhēnzhèng de péngyou huì péi zài nǐ shēnbiān.',vn:'Khi bạn buồn chán hoặc khó chịu, người bạn chân chính sẽ ở bên cạnh bạn.'},
     {zh:'当你想发脾气的时候，试试在心里数数。',py:'Dāng nǐ xiǎng fā píqi de shíhou, shìshi zài xīnli shǔshu.',vn:'Khi bạn muốn nổi giận, hãy thử đếm số trong lòng.'},
   ],
   hanzi:[
     {c:'当',p:'dāng',type:'独体字 · Chữ đơn (giản thể)',st:6,ord:'nét liền',rad:'彐 (kệ, biến thể)',mean:'khi, đảm nhận',
      tip:'Chữ giản thể mang nghĩa ĐẢM ĐƯƠNG, ĐÚNG LÚC; 当……的时候 = ĐÚNG LÚC diễn ra việc gì đó = KHI.',
      cf:'当 khi đọc "dàng" nghĩa là "coi như, cho rằng" (当作)',w:'当……时候 / 当然 / 应当'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi bạn buồn, hãy nhớ gọi điện cho tôi.',answer:'当你难过的时候，记得给我打电话。',answerPy:'Dāng nǐ nánguò de shíhou, jìde gěi wǒ dǎ diànhuà.',
      note:'当……的时候 — khi ….'},
     {promptLang:'vi',prompt:'Khi gặp khó khăn, chỉ cần bạn bè cùng nhau cố gắng, vấn đề sẽ được giải quyết.',answer:'当遇到困难时，只要朋友们共同努力，问题就会被解决。',answerPy:'Dāng yùdào kùnnan shí, zhǐyào péngyoumen gòngtóng nǔlì, wèntí jiù huì bèi jiějué.',
      note:'当……时 (dạng ngắn của 当……的时候) kết hợp 只要……就….'},
   ]},

  {n:28,zh:'困难',py:'kùnnan',pos:'Danh từ/Tính từ',vn:'khó khăn',em:'😣',lesson:5,
   explain:['1. (Danh từ) Việc/hoàn cảnh gây trở ngại, khó giải quyết.','2. (Tính từ) Khó, không dễ dàng.'],
   usage:'Danh từ: 遇到困难; tính từ: 生活很困难.',
   collo:['遇到困难','有困难','解决困难'],
   ex_zh:'当你遇到困难的时候，真正的朋友会站出来。',ex_py:'Dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai.',ex_vn:'Khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra.',
   exList:[
     {zh:'当你遇到困难的时候，真正的朋友会站出来。',py:'Dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai.',vn:'Khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra.'},
     {zh:'我遇到了一点儿困难，你能帮帮我吗？',py:'Wǒ yùdàole yìdiǎnr kùnnan, nǐ néng bāngbang wǒ ma?',vn:'Tôi gặp một chút khó khăn, bạn có thể giúp tôi không?'},
     {zh:'这个问题解决起来比较困难。',py:'Zhège wèntí jiějué qilai bǐjiào kùnnan.',vn:'Vấn đề này giải quyết khá khó khăn.'},
   ],
   hanzi:[
     {c:'困',p:'kùn',type:'半包围结构 · Bán bao vây',st:7,ord:'囗 bao ngoài → 木 trong',rad:'囗 (vi – bao quanh)',mean:'bị vây khốn',
      tip:'Cây 木 bị bao trong khung 囗 chật hẹp, không phát triển được → BỊ VÂY KHỐN, mở rộng thành KHÓ KHĂN.',
      cf:'困 dễ nhầm với 因 (yīn – "nguyên nhân", có 大 bên trong)',w:'困难 / 困住 / 贫困'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù gặp nhiều khó khăn, anh ấy vẫn không từ bỏ.',answer:'即使遇到很多困难，他也没有放弃。',answerPy:'Jíshǐ yùdào hěn duō kùnnan, tā yě méiyǒu fàngqì.',
      note:'即使……也没有…… ôn lại điểm ngữ pháp Bài 1.'},
     {promptLang:'vi',prompt:'Khi gặp khó khăn, bạn bè chân chính sẽ kịp thời giúp đỡ bạn.',answer:'当遇到困难的时候，真正的朋友会及时帮助你。',answerPy:'Dāng yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì jíshí bāngzhù nǐ.',
      note:'当……的时候 kết hợp 及时, ôn lại từ vựng bài học.'},
   ]},

  {n:29,zh:'及时',py:'jíshí',pos:'Phó từ',vn:'đúng lúc, kịp thời',em:'⏱️',lesson:5,
   explain:['Không chậm trễ, làm đúng vào lúc cần thiết.'],
   usage:'Phó từ, đứng trước động từ: 及时 + V (及时给你帮助, 及时去改).',
   collo:['及时帮助','及时给你','及时去医院'],
   ex_zh:'真正的朋友会站出来，及时给你帮助。',ex_py:'Zhēnzhèng de péngyou huì zhàn chulai, jíshí gěi nǐ bāngzhù.',ex_vn:'Người bạn chân chính sẽ đứng ra, kịp thời giúp đỡ bạn.',
   exList:[
     {zh:'真正的朋友会站出来，及时给你帮助。',py:'Zhēnzhèng de péngyou huì zhàn chulai, jíshí gěi nǐ bāngzhù.',vn:'Người bạn chân chính sẽ đứng ra, kịp thời giúp đỡ bạn.'},
     {zh:'如果感冒了，要及时去医院。',py:'Rúguǒ gǎnmào le, yào jíshí qù yīyuàn.',vn:'Nếu bị cảm, phải kịp thời đi bệnh viện.'},
     {zh:'我们应该努力发现自己的缺点，及时去改。',py:'Wǒmen yīnggāi nǔlì fāxiàn zìjǐ de quēdiǎn, jíshí qù gǎi.',vn:'Chúng ta nên cố gắng phát hiện khuyết điểm của mình, kịp thời sửa đổi.'},
   ],
   hanzi:[
     {c:'及',p:'jí',type:'独体字 · Chữ đơn',st:3,ord:'nét liền',rad:'又 (hựu)',mean:'kịp, đạt tới',
      tip:'Hình tượng bàn tay 又 với tới, chạm ĐƯỢC vào vật phía trước → ĐUỔI KỊP, ĐẠT ĐẾN ĐÚNG LÚC.',
      cf:'及 dễ nhầm với 乃 (nǎi – "bèn, mới", ít nét hơn)',w:'及时 / 来得及 / 以及'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người bạn chân chính sẽ kịp thời giúp đỡ bạn khi bạn gặp khó khăn.',answer:'真正的朋友会及时帮助你，当你遇到困难的时候。',answerPy:'Zhēnzhèng de péngyou huì jíshí bāngzhù nǐ, dāng nǐ yùdào kùnnan de shíhou.',
      note:'及时 + động từ, ôn lại từ vựng bài học.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn kịp thời sửa lỗi sai, mọi người sẽ tha thứ cho bạn.',answer:'只要你及时改正错误，大家就会原谅你。',answerPy:'Zhǐyào nǐ jíshí gǎizhèng cuòwù, dàjiā jiù huì yuánliàng nǐ.',
      note:'只要……就…… ôn lại cấu trúc HSK3.'},
   ]},

  {n:30,zh:'陪',py:'péi',pos:'Động từ',vn:'đi cùng, ở bên cạnh',em:'🫂',lesson:5,
   explain:['Cùng đi, cùng ở bên với ai đó để làm bạn.'],
   usage:'Động từ, mang tân ngữ trực tiếp là người: 陪你, 陪在你身边.',
   collo:['陪在你身边','陪你去','陪着你'],
   ex_zh:'真正的朋友会陪在你身边，想办法让你感到幸福。',ex_py:'Zhēnzhèng de péngyou huì péi zài nǐ shēnbiān, xiǎng bànfǎ ràng nǐ gǎndào xìngfú.',ex_vn:'Người bạn chân chính sẽ ở bên cạnh bạn, tìm cách làm bạn cảm thấy hạnh phúc.',
   exList:[
     {zh:'真正的朋友会陪在你身边，想办法让你感到幸福。',py:'Zhēnzhèng de péngyou huì péi zài nǐ shēnbiān, xiǎng bànfǎ ràng nǐ gǎndào xìngfú.',vn:'Người bạn chân chính sẽ ở bên cạnh bạn, tìm cách làm bạn cảm thấy hạnh phúc.'},
     {zh:'我想请一天假，陪他去医院看看。',py:'Wǒ xiǎng qǐng yì tiān jià, péi tā qù yīyuàn kànkan.',vn:'Tôi muốn xin nghỉ một ngày, đi cùng anh ấy đến bệnh viện khám.'},
     {zh:'不麻烦你了，我坐出租车回去。',py:'Bù máfan nǐ le, wǒ zuò chūzūchē huíqu.',vn:'Không làm phiền bạn nữa đâu, tôi đi taxi về.'},
   ],
   hanzi:[
     {c:'陪',p:'péi',type:'左右结构 · Trái-phải',st:10,ord:'阝 (phụ) trái → 咅 phải',rad:'阝 (phụ – gò đất)',mean:'đi cùng, tháp tùng',
      tip:'Bộ 阝(gò đất, biểu thị đi theo địa hình) + 咅(biểu âm) → ĐI CÙNG, THEO SÁT bên cạnh ai đó.',
      cf:'陪 dễ nhầm với 部 (bù – "bộ phận", bộ 阝 bên phải)',w:'陪 / 陪伴 / 陪同'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi bạn buồn chán, người bạn chân chính sẽ ở bên cạnh bạn.',answer:'当你无聊的时候，真正的朋友会陪在你身边。',answerPy:'Dāng nǐ wúliáo de shíhou, zhēnzhèng de péngyou huì péi zài nǐ shēnbiān.',
      note:'当……的时候 kết hợp 陪在……身边, ôn lại từ vựng bài học.'},
     {promptLang:'vi',prompt:'Phiền bạn đi cùng tôi đến bệnh viện một chuyến được không?',answer:'麻烦你陪我去一趟医院，好吗？',answerPy:'Máfan nǐ péi wǒ qù yí tàng yīyuàn, hǎo ma?',
      note:'麻烦你陪我…… — cách nhờ vả lịch sự, ôn lại từ vựng bài học.'},
   ]},

  {n:31,zh:'夏',py:'Xià',pos:'Danh từ riêng',vn:'Hạ (họ)',em:'🧑',lesson:1,
   explain:['Họ của nhân vật 小夏 trong hội thoại 1.'],
   usage:'Danh từ riêng chỉ họ người.',
   collo:['小夏说','小夏问'],
   ex_zh:'小夏和马克聊马克的中国朋友。',ex_py:'Xiǎo Xià hé Mǎkè liáo Mǎkè de Zhōngguó péngyou.',ex_vn:'Tiểu Hạ và Mark nói chuyện về người bạn Trung Quốc của Mark.',
   exList:[
     {zh:'小夏和马克聊马克的中国朋友。',py:'Xiǎo Xià hé Mǎkè liáo Mǎkè de Zhōngguó péngyou.',vn:'Tiểu Hạ và Mark nói chuyện về người bạn Trung Quốc của Mark.'},
   ]},

  {n:32,zh:'马克',py:'Mǎkè',pos:'Danh từ riêng',vn:'Mark (tên người)',em:'🧑',lesson:1,
   explain:['Tên riêng của nhân vật nam (người nước ngoài) trong hội thoại 1.'],
   usage:'Danh từ riêng chỉ tên người.',
   collo:['马克说','马克新交的朋友'],
   ex_zh:'来中国快一年了，你适应这儿的生活了吗？',ex_py:'Lái Zhōngguó kuài yì nián le, nǐ shìyìng zhèr de shēnghuó le ma?',ex_vn:'Đến Trung Quốc gần một năm rồi, bạn thích nghi với cuộc sống ở đây chưa?',
   exList:[
     {zh:'来中国快一年了，你适应这儿的生活了吗？',py:'Lái Zhōngguó kuài yì nián le, nǐ shìyìng zhèr de shēnghuó le ma?',vn:'Đến Trung Quốc gần một năm rồi, bạn thích nghi với cuộc sống ở đây chưa?'},
   ]},

  {n:33,zh:'林',py:'Lín',pos:'Danh từ riêng',vn:'Lâm (họ)',em:'🧑',lesson:1,
   explain:['Họ của nhân vật 小林 trong hội thoại 2.'],
   usage:'Danh từ riêng chỉ họ người.',
   collo:['小林说','小林问'],
   ex_zh:'小李和小林聊同学聚会的事情。',ex_py:'Xiǎo Lǐ hé Xiǎo Lín liáo tóngxué jùhuì de shìqing.',ex_vn:'Tiểu Lý và Tiểu Lâm nói chuyện về việc họp lớp.',
   exList:[
     {zh:'小李和小林聊同学聚会的事情。',py:'Xiǎo Lǐ hé Xiǎo Lín liáo tóngxué jùhuì de shìqing.',vn:'Tiểu Lý và Tiểu Lâm nói chuyện về việc họp lớp.'},
   ]},

  {n:34,zh:'张远',py:'Zhāng Yuǎn',pos:'Danh từ riêng',vn:'Trương Viễn (tên người)',em:'🧑',lesson:1,
   explain:['Tên riêng của một bạn học được nhắc đến trong hội thoại 2.'],
   usage:'Danh từ riêng chỉ tên người.',
   collo:['张远还专门'],
   ex_zh:'差不多一半儿吧，张远还专门从国外飞回来呢。',ex_py:'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',ex_vn:'Gần được một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.',
   exList:[
     {zh:'差不多一半儿吧，张远还专门从国外飞回来呢。',py:'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',vn:'Gần được một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.'},
   ]},

  {n:35,zh:'上海',py:'Shànghǎi',pos:'Danh từ riêng',vn:'Thượng Hải (thành phố của Trung Quốc)',em:'🏙️',lesson:1,
   explain:['Tên một thành phố lớn của Trung Quốc, được nhắc đến trong hội thoại 2.'],
   usage:'Danh từ riêng chỉ địa danh.',
   collo:['去上海','去上海工作'],
   ex_zh:'她毕业后就去上海工作了。',ex_py:'Tā bì yè hòu jiù qù Shànghǎi gōngzuò le.',ex_vn:'Cô ấy tốt nghiệp xong thì đi Thượng Hải làm việc.',
   exList:[
     {zh:'她毕业后就去上海工作了。',py:'Tā bì yè hòu jiù qù Shànghǎi gōngzuò le.',vn:'Cô ấy tốt nghiệp xong thì đi Thượng Hải làm việc.'},
   ]},

  {n:36,zh:'孙月',py:'Sūn Yuè',pos:'Danh từ riêng',vn:'Tôn Nguyệt (tên người)',em:'👩',lesson:1,
   explain:['Tên riêng của nhân vật nữ xuất hiện lại trong hội thoại 3 (đã gặp ở Bài 1).'],
   usage:'Danh từ riêng chỉ tên người.',
   collo:['孙月说','孙月和王静'],
   ex_zh:'孙月和王静聊她们的朋友。',ex_py:'Sūn Yuè hé Wáng Jìng liáo tāmen de péngyou.',ex_vn:'Tôn Nguyệt và Vương Tịnh nói chuyện về bạn bè của họ.',
   exList:[
     {zh:'孙月和王静聊她们的朋友。',py:'Sūn Yuè hé Wáng Jìng liáo tāmen de péngyou.',vn:'Tôn Nguyệt và Vương Tịnh nói chuyện về bạn bè của họ.'},
   ]},

  {n:37,zh:'王静',py:'Wáng Jìng',pos:'Danh từ riêng',vn:'Vương Tịnh (tên người)',em:'👩',lesson:1,
   explain:['Nhân vật nữ chính xuất hiện lại trong hội thoại 3 (đã gặp ở Bài 1).'],
   usage:'Danh từ riêng chỉ tên người.',
   collo:['王静说','跟王静聊'],
   ex_zh:'这是什么时候的照片？你真年轻！',ex_py:'Zhè shì shénme shíhou de zhàopiàn? Nǐ zhēn niánqīng!',ex_vn:'Đây là ảnh chụp lúc nào vậy? Bạn trẻ thật đấy!',
   exList:[
     {zh:'这是什么时候的照片？你真年轻！',py:'Zhè shì shénme shíhou de zhàopiàn? Nǐ zhēn niánqīng!',vn:'Đây là ảnh chụp lúc nào vậy? Bạn trẻ thật đấy!'},
   ]},
];

const wuData = [
  {img:'🎉',label:'聚会',py:'jùhuì',letter:'A'},
  {img:'📞',label:'联系',py:'liánxì',letter:'B'},
  {img:'🌫️',label:'好像',py:'hǎoxiàng',letter:'C'},
  {img:'🪞',label:'镜子',py:'jìngzi',letter:'D'},
  {img:'😑',label:'无聊',py:'wúliáo',letter:'E'},
  {img:'🫂',label:'陪',py:'péi',letter:'F'},
];

var dialogData = [
  {scene:'小夏和马克聊马克的中国朋友 · Tiểu Hạ hỏi Mark về bạn Trung Quốc mới',
   preQuiz:[
     {q:'马克开始适应中国的生活吗？',opts:['开始有点儿不习惯，后来慢慢适应了','马上就适应了','一直不适应'],ans:0},
     {q:'马克和新朋友是在哪儿认识的？',opts:['在图书馆','在饭馆','在学校门口'],ans:0},
     {q:'马克的新朋友平时会做什么？',opts:['一起看书、逛街、踢足球，还发幽默短信','一起做饭','一起打游戏'],ans:0},
   ],
   lines:[
     {sp:1,zh:'来中国快一年了，你适应这儿的生活了吗？',py:'Lái Zhōngguó kuài yì nián le, nǐ shìyìng zhèr de shēnghuó le ma?',vn:'Đến Trung Quốc gần một năm rồi, bạn thích nghi với cuộc sống ở đây chưa?'},
     {sp:0,zh:'开始有点儿不习惯，后来就慢慢适应了，最近我还交了一个中国朋友。',py:'Kāishǐ yǒudiǎnr bù xíguàn, hòulái jiù mànman shìyìng le, zuìjìn wǒ hái jiāole yí ge Zhōngguó péngyou.',vn:'Lúc đầu hơi chưa quen, sau đó thì dần dần thích nghi, gần đây tôi còn kết giao được một người bạn Trung Quốc.'},
     {sp:1,zh:'那就好，快给我讲讲你新交的中国朋友。',py:'Nà jiù hǎo, kuài gěi wǒ jiǎngjiang nǐ xīn jiāo de Zhōngguó péngyou.',vn:'Vậy thì tốt rồi, mau kể cho tôi nghe về người bạn Trung Quốc mới của bạn đi.'},
     {sp:0,zh:'我们是在图书馆认识的。平时我们常常一起看书、逛街、踢足球。有时候他还给我发一些幽默短信。',py:'Wǒmen shì zài túshūguǎn rènshi de. Píngshí wǒmen chángcháng yìqǐ kàn shū, guàng jiē, tī zúqiú. Yǒu shíhou tā hái gěi wǒ fā yìxiē yōumò duǎnxìn.',vn:'Chúng tôi quen nhau ở thư viện. Lúc thường chúng tôi hay cùng nhau đọc sách, đi dạo phố, đá bóng. Có lúc anh ấy còn gửi cho tôi vài tin nhắn hài hước.'},
     {sp:1,zh:'你的这个朋友真不错！下次介绍我们认识认识，怎么样？',py:'Nǐ de zhège péngyou zhēn búcuò! Xià cì jièshào wǒmen rènshi rènshi, zěnmeyàng?',vn:'Người bạn này của bạn thật tốt! Lần sau giới thiệu cho chúng tôi làm quen nhé, thế nào?'},
     {sp:0,zh:'没问题！我们下午要去踢足球，正好一起去吧。',py:'Méi wèntí! Wǒmen xiàwǔ yào qù tī zúqiú, zhènghǎo yìqǐ qù ba.',vn:'Không thành vấn đề! Chiều nay chúng tôi định đi đá bóng, đúng dịp cùng đi luôn nhé.'},
   ]},
  {scene:'小李和小林聊同学聚会的事情 · Tiểu Lý báo tin họp lớp cho Tiểu Lâm',
   preQuiz:[
     {q:'同学聚会是什么时候？',opts:['星期天','星期六','星期五'],ans:0},
     {q:'来聚会的人多不多？',opts:['差不多一半儿','全班都来','只有几个人'],ans:0},
     {q:'小林今天早上遇到了谁？',opts:['王静','张远','李老师'],ans:0},
   ],
   lines:[
     {sp:0,zh:'星期天同学聚会，你能来吗？',py:'Xīngqītiān tóngxué jùhuì, nǐ néng lái ma?',vn:'Chủ nhật họp lớp, bạn đến được không?'},
     {sp:1,zh:'能来。班里同学你联系得怎么样了？来多少人？',py:'Néng lái. Bān li tóngxué nǐ liánxì de zěnmeyàng le? Lái duōshao rén?',vn:'Đến được. Bạn liên hệ các bạn cùng lớp thế nào rồi? Có bao nhiêu người đến?'},
     {sp:0,zh:'差不多一半儿吧，张远还专门从国外飞回来呢。',py:'Chàbuduō yíbànr ba, Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne.',vn:'Gần được một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.'},
     {sp:1,zh:'是吗？毕业都快十年了，真想大家啊！对了，今天早上，我在地铁站遇到了王静，她毕业后就去上海工作了，她这次是来旅游的。',py:'Shì ma? Bì yè dōu kuài shí nián le, zhēn xiǎng dàjiā a! Duìle, jīntiān zǎoshang, wǒ zài dìtiě zhàn yùdàole Wáng Jìng, tā bì yè hòu jiù qù Shànghǎi gōngzuò le, tā zhè cì shì lái lǚyóu de.',vn:'Vậy à? Tốt nghiệp cũng sắp mười năm rồi, thật là nhớ mọi người quá! Đúng rồi, sáng nay, tôi gặp Vương Tịnh ở ga tàu điện ngầm, cô ấy tốt nghiệp xong thì đi Thượng Hải làm việc, lần này cô ấy về là để du lịch.'},
     {sp:0,zh:'那太好了！麻烦你跟她联系一下，请她一起来参加同学聚会。聚会就在学校门口那个饭店，六点半。别迟到啊！',py:'Nà tài hǎo le! Máfan nǐ gēn tā liánxì yíxià, qǐng tā yìqǐ lái cānjiā tóngxué jùhuì. Jùhuì jiù zài xuéxiào ménkǒu nàge fàndiàn, liù diǎn bàn. Bié chídào a!',vn:'Vậy thì tốt quá! Phiền bạn liên hệ với cô ấy một chút, mời cô ấy cùng đến tham gia họp lớp. Buổi họp mặt tổ chức ngay ở nhà hàng trước cổng trường, 6 giờ rưỡi. Đừng đến muộn nhé!'},
     {sp:1,zh:'放心吧。星期天六点半见！',py:'Fàng xīn ba. Xīngqītiān liù diǎn bàn jiàn!',vn:'Yên tâm đi. Hẹn gặp lúc 6 giờ rưỡi chủ nhật!'},
   ]},
  {scene:'孙月和王静聊她们的朋友 · Tôn Nguyệt và Vương Tịnh xem lại ảnh cũ',
   preQuiz:[
     {q:'王静看到照片想起了什么？',opts:['过去快乐的日子','明天要做的事','考试的内容'],ans:0},
     {q:'王静和照片里的朋友现在还联系吗？',opts:['尽管毕业多年，还是经常联系','已经不联系了','只在过节的时候联系'],ans:0},
     {q:'孙月最好的朋友现在在哪儿？',opts:['去了南方工作','还在学校','出国了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'这是什么时候的照片？你真年轻！',py:'Zhè shì shénme shíhou de zhàopiàn? Nǐ zhēn niánqīng!',vn:'Đây là ảnh chụp lúc nào vậy? Bạn trẻ thật đấy!'},
     {sp:0,zh:'这是上大学时的照片。一看到这张照片，我就想起过去那段快乐的日子，好像重新回到了校园。',py:'Zhè shì shàng dàxué shí de zhàopiàn. Yí kàndào zhè zhāng zhàopiàn, wǒ jiù xiǎngqǐ guòqù nà duàn kuàilè de rìzi, hǎoxiàng chóngxīn huídàole xiàoyuán.',vn:'Đây là ảnh chụp lúc học đại học. Vừa nhìn thấy tấm ảnh này, tôi liền nhớ đến quãng thời gian vui vẻ đã qua, dường như lại được quay về khuôn viên trường.'},
     {sp:1,zh:'旁边这个人一定是你的好朋友吧？你们现在还联系吗？',py:'Pángbiān zhège rén yídìng shì nǐ de hǎo péngyou ba? Nǐmen xiànzài hái liánxì ma?',vn:'Người bên cạnh chắc chắn là bạn thân của bạn nhỉ? Các bạn bây giờ còn liên lạc không?'},
     {sp:0,zh:'当然了，尽管已经毕业这么多年，我们还是经常联系的，每次都有说不完的话。',py:'Dāngrán le, jǐnguǎn yǐjīng bì yè zhème duō nián, wǒmen háishi jīngcháng liánxì de, měi cì dōu yǒu shuō bu wán de huà.',vn:'Đương nhiên rồi, mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc, lần nào cũng có nói không hết chuyện.'},
     {sp:1,zh:'真羡慕你！我上大学时最好的朋友去了南方工作，我们俩已经好久没联系了。我一会儿就给她打个电话。',py:'Zhēn xiànmù nǐ! Wǒ shàng dàxué shí zuì hǎo de péngyou qùle nánfāng gōngzuò, wǒmen liǎ yǐjīng hǎojiǔ méi liánxì le. Wǒ yíhuìr jiù gěi tā dǎ ge diànhuà.',vn:'Ghen tị với bạn thật đấy! Bạn thân nhất của tôi thời đại học đã đi làm việc ở miền Nam, hai chúng tôi đã lâu không liên lạc. Lát nữa tôi sẽ gọi điện cho cô ấy.'},
     {sp:0,zh:'对。要知道，能有一个真正的朋友，有一段真正的友谊，是多么不容易！',py:'Duì. Yào zhīdào, néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',vn:'Đúng vậy. Phải biết rằng, có được một người bạn chân chính, có một tình bạn chân chính, thật không dễ dàng chút nào!'},
   ]},
  {scene:'短文 · 怎样才能交到更多朋友？ (bài đọc)',
   preQuiz:[
     {q:'离开朋友，我们的生活会怎么样？',opts:['非常无聊','更方便','更丰富'],ans:0},
     {q:'为什么脾气不好的人很难交朋友？',opts:['没有人喜欢跟总是容易生气的人在一起','脾气不好的人不喜欢说话','脾气不好的人没有钱'],ans:0},
     {q:'怎样才能更容易成为朋友？',opts:['经常跟周围的人交流，有共同的兴趣爱好','各自在家，不联系','只跟脾气好的人说话'],ans:0},
   ],
   lines:[
     {sp:0,zh:'每个人都需要朋友，朋友可以丰富我们的生活。离开朋友，我们的生活一定会非常无聊。',py:'Měi ge rén dōu xūyào péngyou, péngyou kěyǐ fēngfù wǒmen de shēnghuó. Líkāi péngyou, wǒmen de shēnghuó yídìng huì fēicháng wúliáo.',vn:'Ai cũng cần bạn bè, bạn bè có thể làm phong phú thêm cuộc sống của chúng ta. Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ rất nhàm chán.'},
     {sp:0,zh:'那么，怎样才能交到更多的朋友呢？当然，要有好脾气。一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。',py:'Nàme, zěnyàng cái néng jiāodào gèng duō de péngyou ne? Dāngrán, yào yǒu hǎo píqi. Yí ge píqi bù hǎo de rén suīrán bùyídìng ràng rén tǎoyàn, dànshì què hěn nán gēn rén jiāo péngyou.',vn:'Vậy thì, làm thế nào mới có thể kết giao được nhiều bạn hơn? Đương nhiên, phải có tính khí tốt. Một người tính khí không tốt tuy chưa chắc khiến người khác ghét, nhưng lại rất khó kết bạn với người khác.'},
     {sp:0,zh:'因为没有人会喜欢跟一个总是容易生气的人在一起。我们还要经常跟周围的人交流。交流能让人们互相了解，如果有共同的兴趣、爱好或者习惯，就更容易成为朋友了。',py:'Yīnwèi méiyǒu rén huì xǐhuan gēn yí ge zǒngshì róngyì shēngqì de rén zài yìqǐ. Wǒmen hái yào jīngcháng gēn zhōuwéi de rén jiāoliú. Jiāoliú néng ràng rénmen hùxiāng liǎojiě, rúguǒ yǒu gòngtóng de xìngqù, àihào huòzhě xíguàn, jiù gèng róngyì chéngwéi péngyou le.',vn:'Vì không ai thích ở cùng một người lúc nào cũng dễ nổi giận. Chúng ta còn phải thường xuyên giao lưu với những người xung quanh. Giao lưu có thể giúp mọi người hiểu nhau hơn, nếu có sở thích, thú vui hoặc thói quen chung, sẽ dễ dàng trở thành bạn bè hơn.'},
   ]},
  {scene:'短文 · 什么是真正的朋友？ (bài đọc)',
   preQuiz:[
     {q:'人的一生可以没有什么，但不能没有什么？',opts:['朋友','钱','房子'],ans:0},
     {q:'有些人觉得朋友应该像什么？',opts:['镜子，能帮自己看到缺点','老师，能教自己知识','父母，能养自己'],ans:0},
     {q:'作者认为真正的朋友会在什么时候站出来？',opts:['当你遇到困难的时候','当你有钱的时候','当你不需要帮助的时候'],ans:0},
   ],
   lines:[
     {sp:0,zh:'人的一生可以什么也没有，但不能没有朋友，而且必须要有自己真正的朋友。什么是真正的朋友？不同的人会有不同的理解。',py:'Rén de yìshēng kěyǐ shénme yě méiyǒu, dàn bù néng méiyǒu péngyou, érqiě bìxū yào yǒu zìjǐ zhēnzhèng de péngyou. Shénme shì zhēnzhèng de péngyou? Bù tóng de rén huì yǒu bù tóng de lǐjiě.',vn:'Cuộc đời con người có thể không có gì cả, nhưng không thể không có bạn bè, hơn nữa nhất định phải có người bạn chân chính của riêng mình. Thế nào là người bạn chân chính? Người khác nhau sẽ có cách hiểu khác nhau.'},
     {sp:0,zh:'有些人觉得朋友就是能和自己一起快乐的人；有些人觉得朋友应该像镜子，能帮自己看到缺点。',py:'Yǒuxiē rén juéde péngyou jiùshì néng hé zìjǐ yìqǐ kuàilè de rén; yǒuxiē rén juéde péngyou yīnggāi xiàng jìngzi, néng bāng zìjǐ kàndào quēdiǎn.',vn:'Có người cho rằng bạn bè chính là người có thể cùng mình vui vẻ; có người cho rằng bạn bè nên giống như tấm gương, giúp bản thân nhìn ra khuyết điểm.'},
     {sp:0,zh:'而我的理解是：当你遇到困难的时候，真正的朋友会站出来，及时给你帮助；当你无聊或者难过的时候，真正的朋友会陪在你身边，想办法让你感到幸福。',py:'Ér wǒ de lǐjiě shì: dāng nǐ yùdào kùnnan de shíhou, zhēnzhèng de péngyou huì zhàn chulai, jíshí gěi nǐ bāngzhù; dāng nǐ wúliáo huòzhě nánguò de shíhou, zhēnzhèng de péngyou huì péi zài nǐ shēnbiān, xiǎng bànfǎ ràng nǐ gǎndào xìngfú.',vn:'Còn cách hiểu của tôi là: khi bạn gặp khó khăn, người bạn chân chính sẽ đứng ra, kịp thời giúp đỡ bạn; khi bạn buồn chán hoặc khó chịu, người bạn chân chính sẽ ở bên cạnh bạn, tìm cách làm bạn cảm thấy hạnh phúc.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'交',right:'朋友'},
  {left:'逛',right:'街'},
  {left:'发',right:'短信'},
  {left:'同学',right:'聚会'},
  {left:'重新',right:'认识'},
  {left:'真正的',right:'友谊'},
  {left:'当你遇到困难时，',right:'真正的朋友会站出来。'},
  {left:'尽管已经毕业多年，',right:'我们还是经常联系。'},
  {left:'如果有共同的爱好，',right:'就更容易成为朋友。'},
  {left:'只要你有幽默感，',right:'就容易交到朋友。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'开始有点儿不习惯，后来就慢慢',blank:'适应',post:'了。',hint:'(thích nghi)',ans:'适应'},
  {pre:'最近我还',blank:'交',post:'了一个中国朋友。',hint:'(kết giao)',ans:'交'},
  {pre:'尽管很忙，他',blank:'还是',post:'每天都给我发短信。',hint:'(vẫn)',ans:'还是'},
  {pre:'我们下午要去踢足球，',blank:'正好',post:'一起去吧。',hint:'(đúng dịp)',ans:'正好'},
  {pre:'来聚会的人',blank:'差不多',post:'一半儿。',hint:'(gần như)',ans:'差不多'},
  {pre:'张远还',blank:'专门',post:'从国外飞回来呢。',hint:'(đặc biệt)',ans:'专门'},
  {pre:'她',blank:'毕业',post:'后就去上海工作了。',hint:'(tốt nghiệp)',ans:'毕业'},
  {pre:'麻烦你跟她',blank:'联系',post:'一下。',hint:'(liên hệ)',ans:'联系'},
  {pre:'一看到这张照片，我就',blank:'好像',post:'重新回到了校园。',hint:'(dường như)',ans:'好像'},
  {pre:'能有一个',blank:'真正',post:'的朋友，是多么不容易！',hint:'(chân chính)',ans:'真正'},
  {pre:'朋友可以',blank:'丰富',post:'我们的生活。',hint:'(làm phong phú)',ans:'丰富'},
  {pre:'离开朋友，我们的生活一定会非常',blank:'无聊',post:'。',hint:'(nhàm chán)',ans:'无聊'},
  {pre:'我们还要经常跟周围的人',blank:'交流',post:'。',hint:'(giao lưu)',ans:'交流'},
  {pre:'有些人觉得朋友应该像',blank:'镜子',post:'，能帮自己看到缺点。',hint:'(gương)',ans:'镜子'},
  {pre:'当你遇到',blank:'困难',post:'的时候，真正的朋友会站出来。',hint:'(khó khăn)',ans:'困难'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['开始','有点儿','不','习惯','，','后来','就','慢慢','适应','了','。'],ans:'开始有点儿不习惯，后来就慢慢适应了。',audio:'开始有点儿不习惯，后来就慢慢适应了。'},
  {words:['尽管','已经','毕业','这么','多','年','，','我们','还是','经常','联系','的','。'],ans:'尽管已经毕业这么多年，我们还是经常联系的。',audio:'尽管已经毕业这么多年，我们还是经常联系的。'},
  {words:['一个','脾气','不好','的','人','，','却','很','难','跟','人','交','朋友','。'],ans:'一个脾气不好的人，却很难跟人交朋友。',audio:'一个脾气不好的人，却很难跟人交朋友。'},
  {words:['我们','还','要','经常','跟','周围','的','人','交流','。'],ans:'我们还要经常跟周围的人交流。',audio:'我们还要经常跟周围的人交流。'},
  {words:['当','你','遇到','困难','的','时候','，','真正','的','朋友','会','站','出来','。'],ans:'当你遇到困难的时候，真正的朋友会站出来。',audio:'当你遇到困难的时候，真正的朋友会站出来。'},
  {words:['如果','有','共同','的','爱好','，','就','更','容易','成为','朋友','了','。'],ans:'如果有共同的爱好，就更容易成为朋友了。',audio:'如果有共同的爱好，就更容易成为朋友了。'},
  {words:['真正','的','朋友','会','陪','在','你','身边','，','想','办法','让','你','感到','幸福','。'],ans:'真正的朋友会陪在你身边，想办法让你感到幸福。',audio:'真正的朋友会陪在你身边，想办法让你感到幸福。'},
  {words:['有','一段','真正','的','友谊','，','是','多么','不','容易','！'],ans:'有一段真正的友谊，是多么不容易！',audio:'有一段真正的友谊，是多么不容易！'},
];

// ══════════════════════════════════════════
// PHẦN 3c · CHỌN TỪ THÍCH HỢP ĐIỀN VÀO CHỖ TRỐNG
// Nguyên bài 练习2 thật từ SGK, giữ đúng 10 câu + 2 nhóm 5 từ ngân hàng từ
// gốc; chuyển thành trắc nghiệm 4 lựa chọn (đáp án đúng + 3 từ nhiễu lấy
// trong cùng ngân hàng từ của bài).
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'每个人对幸福都有不同的____。',
   opts:['理解','周围','无聊','适应'],ans:0,
   exp:'理解 (hiểu, cách hiểu) làm tân ngữ cho 有不同的: mỗi người có cách HIỂU khác nhau về hạnh phúc. 周围/无聊/适应 đều không mang nghĩa "cách hiểu, quan điểm".'},
  {wrong:'我喜欢现在住的地方，很方便。不像以前住的地方，____一个超市都没有。',
   opts:['周围','理解','镜子','适应'],ans:0,
   exp:'周围 (xung quanh) chỉ khu vực bao quanh nơi ở: XUNG QUANH không có siêu thị nào. 理解/镜子/适应 không hợp nghĩa vị trí này.'},
  {wrong:'生活就像____，你对它笑，它也对你笑；如果你对它哭，它也对你哭。',
   opts:['镜子','周围','理解','无聊'],ans:0,
   exp:'像镜子 = giống như tấm gương — hình ảnh ẩn dụ quen thuộc trong bài. 周围/理解/无聊 không tạo được phép ví von này.'},
  {wrong:'周末总是一个人在家太____了，你应该找朋友出去逛逛街、看看电影、吃吃饭。',
   opts:['无聊','适应','镜子','周围'],ans:0,
   exp:'太无聊了 = quá nhàm chán — đúng ngữ cảnh than phiền về việc ở nhà một mình. 适应/镜子/周围 đều không hợp nghĩa.'},
  {wrong:'我刚来这儿的时候很不____，后来慢慢习惯了，也交到了很多朋友。',
   opts:['适应','理解','无聊','镜子'],ans:0,
   exp:'不适应 = không thích nghi, đi cùng "后来慢慢习惯了" (sau đó quen dần) tạo mạch nghĩa hợp lý. 理解/无聊/镜子 không hợp.'},
  {wrong:'A：上车吧，我送你。B：不____你了，我坐出租车回去。',
   opts:['麻烦','联系','平时','好像'],ans:0,
   exp:'不麻烦你了 = đừng làm phiền bạn nữa — cách từ chối lịch sự khi được đề nghị giúp đỡ. 联系/平时/好像 không hợp ngữ cảnh từ chối này.'},
  {wrong:'A：周末的同学聚会你参加吗？B：当然，有几个同学毕业后就没____了，正好借这个机会见见。',
   opts:['联系','麻烦','平时','陪'],ans:0,
   exp:'没联系了 = không còn liên lạc — hợp với "借这个机会见见" (mượn dịp này gặp mặt). 麻烦/平时/陪 không hợp nghĩa.'},
  {wrong:'A：都九点了，你怎么还不起床？B：昨晚看足球比赛看到两点半，这不是周六吗？____哪能睡到九点？',
   opts:['平时','联系','麻烦','好像'],ans:0,
   exp:'平时哪能 = ngày thường sao có thể — nhấn mạnh hôm nay là thứ Bảy nên khác ngày thường. 联系/麻烦/好像 không hợp.'},
  {wrong:'A：小李，那个女孩儿是谁啊？你认识？B：应该不认识，但是____在哪儿见过。',
   opts:['好像','联系','麻烦','平时'],ans:0,
   exp:'好像在哪儿见过 = dường như đã gặp ở đâu đó — diễn tả sự phỏng đoán không chắc chắn, đúng nghĩa 好像. 联系/麻烦/平时 không hợp.'},
  {wrong:'A：经理，我丈夫生病了。我想请一天假，____他去医院看看。B：好，你先把家里照顾好，工作的事别担心。',
   opts:['陪','联系','麻烦','好像'],ans:0,
   exp:'陪他去医院 = đi cùng anh ấy đến bệnh viện — 陪 mang nghĩa đi cùng, ở bên cạnh. 联系/麻烦/好像 không hợp nghĩa này.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 5 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'马克是怎么适应中国生活、交到中国朋友的？',
     q_vn:'Mark đã thích nghi với cuộc sống Trung Quốc và kết giao bạn Trung Quốc như thế nào?',
     hint:'开始不习惯，后来慢慢适应了，在图书馆认识了一个中国朋友',
     sample:'马克开始有点儿不习惯，后来慢慢适应了，还在图书馆认识了一个中国朋友。',
     sample_vn:'Mark lúc đầu hơi chưa quen, sau đó dần dần thích nghi, còn quen được một người bạn Trung Quốc ở thư viện.',
     note:'先……后来…… — trước … sau đó ….'},
    {q_zh:'小李为什么要给小林打电话？',
     q_vn:'Vì sao Tiểu Lý gọi điện cho Tiểu Lâm?',
     hint:'告诉她星期天有同学聚会，请她联系同学、别迟到',
     sample:'小李打电话告诉小林星期天有同学聚会，请她帮忙联系同学，还提醒她别迟到。',
     sample_vn:'Tiểu Lý gọi điện báo cho Tiểu Lâm biết chủ nhật có họp lớp, nhờ cô ấy liên hệ các bạn, còn nhắc đừng đến muộn.',
     note:'请她 + V — nhờ cô ấy làm gì.'},
    {q_zh:'王静看到大学时的照片，心情怎么样？',
     q_vn:'Vương Tịnh xem ảnh thời đại học xong, tâm trạng thế nào?',
     hint:'想起过去快乐的日子，好像重新回到了校园',
     sample:'她想起了过去快乐的日子，好像重新回到了校园一样。',
     sample_vn:'Cô ấy nhớ lại những ngày vui vẻ đã qua, dường như lại được quay về khuôn viên trường vậy.',
     note:'好像……一样 — dường như … vậy.'},
    {q_zh:'怎样才能交到更多的朋友？',
     q_vn:'Làm thế nào mới có thể kết giao được nhiều bạn hơn?',
     hint:'要有好脾气，经常跟周围的人交流',
     sample:'要有好脾气，还要经常跟周围的人交流，有共同的兴趣爱好就更容易成为朋友。',
     sample_vn:'Phải có tính khí tốt, còn phải thường xuyên giao lưu với người xung quanh, có sở thích chung sẽ dễ trở thành bạn bè hơn.',
     note:'要……还要…… — phải … còn phải ….'},
    {q_zh:'作者认为真正的朋友是什么样的？',
     q_vn:'Tác giả cho rằng người bạn chân chính là người thế nào?',
     hint:'当你遇到困难时会站出来帮助你，当你无聊难过时会陪在你身边',
     sample:'真正的朋友会在你遇到困难的时候站出来帮助你，在你无聊或难过的时候陪在你身边。',
     sample_vn:'Người bạn chân chính sẽ đứng ra giúp đỡ bạn khi bạn gặp khó khăn, ở bên cạnh bạn khi bạn buồn chán hoặc khó chịu.',
     note:'当……的时候 — khi ….'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Lúc đầu tôi hơi chưa quen với cuộc sống ở đây, sau đó dần dần thích nghi.', zh:'开始我有点儿不习惯这儿的生活，后来慢慢适应了。', py:'Kāishǐ wǒ yǒudiǎnr bù xíguàn zhèr de shēnghuó, hòulái mànman shìyìng le.'},
  {vi:'Phiền bạn liên hệ với anh ấy một chút, mời anh ấy tham gia họp lớp.', zh:'麻烦你跟他联系一下，请他参加同学聚会。', py:'Máfan nǐ gēn tā liánxì yíxià, qǐng tā cānjiā tóngxué jùhuì.'},
  {vi:'Mặc dù tốt nghiệp đã lâu, chúng tôi vẫn thường xuyên liên lạc.', zh:'尽管毕业很久了，我们还是经常联系。', py:'Jǐnguǎn bì yè hěn jiǔ le, wǒmen háishi jīngcháng liánxì.'},
  {vi:'Gần một nửa số bạn học đến tham gia buổi họp mặt.', zh:'差不多一半的同学来参加了聚会。', py:'Chàbuduō yíbàn de tóngxué lái cānjiāle jùhuì.'},
  {vi:'Cô ấy đặc biệt xin nghỉ một ngày để đi thăm bạn cũ.', zh:'她专门请了一天假去看老朋友。', py:'Tā zhuānmén qǐngle yì tiān jià qù kàn lǎo péngyou.'},
  {vi:'Có bạn bè ở bên có thể làm phong phú thêm cuộc sống của chúng ta.', zh:'有朋友陪着可以丰富我们的生活。', py:'Yǒu péngyou péizhe kěyǐ fēngfù wǒmen de shēnghuó.'},
  {vi:'Khi bạn gặp khó khăn, tôi nhất định sẽ kịp thời giúp đỡ bạn.', zh:'当你遇到困难的时候，我一定会及时帮助你。', py:'Dāng nǐ yùdào kùnnan de shíhou, wǒ yídìng huì jíshí bāngzhù nǐ.'},
  {vi:'Không ai thích ở cùng một người luôn dễ nổi giận cả.', zh:'没有人会喜欢跟一个总是容易生气的人在一起。', py:'Méiyǒu rén huì xǐhuan gēn yí ge zǒngshì róngyì shēngqì de rén zài yìqǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy tính khí không tốt lắm, nhưng lại rất dễ kết bạn.', zh:'他脾气不太好，但却很容易交朋友。', py:'Tā píqi bú tài hǎo, dàn què hěn róngyì jiāo péngyou.'},
  {vi:'Nhìn thấy tấm ảnh cũ này, tôi dường như quay lại thời học sinh vậy.', zh:'看到这张老照片，我好像回到了学生时代一样。', py:'Kàndào zhè zhāng lǎo zhàopiàn, wǒ hǎoxiàng huídàole xuésheng shídài yíyàng.'},
  {vi:'Cho dù công việc bận rộn, cô ấy vẫn thường xuyên giao lưu với đồng nghiệp.', zh:'尽管工作很忙，她还是经常跟同事交流。', py:'Jǐnguǎn gōngzuò hěn máng, tā háishi jīngcháng gēn tóngshì jiāoliú.'},
  {vi:'Người bạn chân chính sẽ giúp bạn nhìn ra khuyết điểm của mình, giống như tấm gương vậy.', zh:'真正的朋友会帮你看到自己的缺点，就像镜子一样。', py:'Zhēnzhèng de péngyou huì bāng nǐ kàndào zìjǐ de quēdiǎn, jiù xiàng jìngzi yíyàng.'},
  {vi:'Cuối tuần này tôi định đặc biệt đi thăm ông bà.', zh:'这个周末我打算专门去看爷爷奶奶。', py:'Zhège zhōumò wǒ dǎsuàn zhuānmén qù kàn yéye nǎinai.'},
  {vi:'Sau khi tốt nghiệp, rất nhiều bạn học đã rời xa thành phố này.', zh:'毕业以后，很多同学都离开了这座城市。', py:'Bì yè yǐhòu, hěn duō tóngxué dōu líkāile zhè zuò chéngshì.'},
  {vi:'Khi bạn buồn chán, hãy gọi điện cho tôi, tôi sẽ ở bên cạnh bạn.', zh:'当你无聊的时候，给我打电话吧，我会陪在你身边。', py:'Dāng nǐ wúliáo de shíhou, gěi wǒ dǎ diànhuà ba, wǒ huì péi zài nǐ shēnbiān.'},
  {vi:'Môi trường xung quanh nhà tôi rất yên tĩnh, tôi rất thích nơi này.', zh:'我家周围的环境很安静，我很喜欢这个地方。', py:'Wǒ jiā zhōuwéi de huánjìng hěn ānjìng, wǒ hěn xǐhuan zhège dìfang.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程4上 练习册 Bài 2 (第二课 真正的朋友)
// Văn bản băng ghi âm + đáp án đúng lấy từ SBT gốc; đáp án nhiễu (options) và
// điểm điền-khi-nghe (blank) do người biên soạn thiết kế thêm để luyện tập.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-2/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-2/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-2/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, lines:[
      {pre:'平时要主动给朋友打电话，别等到需要朋友帮助时才想到要和他们联系。要知道，', blank:'能有一个真正的朋友，有一段真正的友谊，是多么不容易', post:'！',
       py:'Píngshí yào zhǔdòng gěi péngyou dǎ diànhuà, bié děngdào xūyào péngyou bāngzhù shí cái xiǎngdào yào hé tāmen liánxì. Yào zhīdào, néng yǒu yí ge zhēnzhèng de péngyou, yǒu yí duàn zhēnzhèng de yǒuyì, shì duōme bù róngyì!',
       vn:'Ngày thường phải chủ động gọi điện cho bạn bè, đừng đợi đến khi cần bạn bè giúp mới nghĩ đến việc liên lạc với họ. Phải biết rằng, có được một người bạn chân chính, có một tình bạn chân chính, thật không dễ dàng chút nào!'},
    ]},
    {num:2, lines:[
      {pre:'现在朋友之间经常发各种幽默短信，这给我们的生活带来一些快乐。但是如果同样的幽默短信你收到了三四次，', blank:'相信你也笑不出来了', post:'。',
       py:'Xiànzài péngyou zhījiān jīngcháng fā gè zhǒng yōumò duǎnxìn, zhè gěi wǒmen de shēnghuó dàilái yìxiē kuàilè. Dànshì rúguǒ tóngyàng de yōumò duǎnxìn nǐ shōudàole sān sì cì, xiāngxìn nǐ yě xiào bu chūlai le.',
       vn:'Bây giờ bạn bè thường hay gửi cho nhau đủ loại tin nhắn hài hước, điều này mang lại cho cuộc sống của chúng ta một số niềm vui. Nhưng nếu cùng một tin nhắn hài hước mà bạn nhận được ba bốn lần, chắc chắn bạn cũng không cười nổi nữa.'},
    ]},
    {num:3, lines:[
      {pre:'天天在一起的朋友，不一定是你真正的朋友。真正的朋友，', blank:'是那些当你遇到困难时会努力帮助你的人', post:'。',
       py:'Tiāntiān zài yìqǐ de péngyou, bùyídìng shì nǐ zhēnzhèng de péngyou. Zhēnzhèng de péngyou, shì nàxiē dāng nǐ yùdào kùnnan shí huì nǔlì bāngzhù nǐ de rén.',
       vn:'Bạn bè ngày nào cũng ở cùng nhau, chưa chắc đã là bạn chân chính của bạn. Bạn chân chính là những người khi bạn gặp khó khăn sẽ cố gắng giúp đỡ bạn.'},
    ]},
    {num:4, lines:[
      {pre:'幽默能帮助人们打开友谊的大门，', blank:'因为与幽默的人聊天儿总是很快乐', post:'。',
       py:'Yōumò néng bāngzhù rénmen dǎkāi yǒuyì de dàmén, yīnwèi yǔ yōumò de rén liáotiānr zǒngshì hěn kuàilè.',
       vn:'Sự hài hước có thể giúp người ta mở cánh cửa tình bạn, vì trò chuyện với người hài hước luôn rất vui vẻ.'},
    ]},
    {num:5, lines:[
      {pre:'毕业是一件让人高兴的事，因为我们马上要开始新的生活。毕业也是一件让人难过的事，', blank:'因为许多平时常在一起的朋友，以后见面的机会会变少', post:'。',
       py:'Bì yè shì yí jiàn ràng rén gāoxìng de shì, yīnwèi wǒmen mǎshàng yào kāishǐ xīn de shēnghuó. Bì yè yě shì yí jiàn ràng rén nánguò de shì, yīnwèi xǔduō píngshí cháng zài yìqǐ de péngyou, yǐhòu jiànmiàn de jīhuì huì biàn shǎo.',
       vn:'Tốt nghiệp là một chuyện khiến người ta vui, vì chúng ta sắp bắt đầu cuộc sống mới. Tốt nghiệp cũng là một chuyện khiến người ta buồn, vì nhiều người bạn ngày thường hay ở cùng nhau, sau này cơ hội gặp mặt sẽ ít đi.'},
    ]},
  ],
  mc: [
    {num:6, options:['去楼下走走','去逛街','去踢足球'], ans:0,
     lines:[
       {speaker:'女', pre:'咱们就去楼下走走吧，', blank:'别去逛街了', post:'。', py:'Zánmen jiù qù lóuxià zǒuzou ba, bié qù guàng jiē le.', vn:'Chúng ta xuống dưới nhà đi dạo thôi, đừng đi dạo phố nữa.'},
       {speaker:'男', pre:'好，', blank:'我同意', post:'。', py:'Hǎo, wǒ tóngyì.', vn:'Được, tôi đồng ý.'},
     ],
     explain:'女：咱们就去楼下走走吧，别去逛街了。男：好，我同意。问：男的同意做什么？ → 去楼下走走。'},
    {num:7, options:['机场','火车站','公司'], ans:0,
     lines:[
       {speaker:'女', pre:'别送了，', blank:'你回去吧', post:'。', py:'Bié sòng le, nǐ huíqu ba.', vn:'Đừng tiễn nữa, bạn về đi.'},
       {speaker:'男', pre:'好，下了飞机', blank:'给我发个短信', post:'。', py:'Hǎo, xiàle fēijī gěi wǒ fā ge duǎnxìn.', vn:'Được, xuống máy bay thì nhắn tin cho tôi nhé.'},
     ],
     explain:'女：别送了，你回去吧。男：好，下了飞机给我发个短信。问：他们最可能在哪儿？ → 机场（提到"送"和"下了飞机"）。'},
    {num:8, options:['火车站','图书馆','家里'], ans:0,
     lines:[
       {speaker:'男', pre:'喂，你在哪儿呢？', blank:'怎么这么吵', post:'？', py:'Wéi, nǐ zài nǎr ne? Zěnme zhème chǎo?', vn:'Alô, bạn đang ở đâu vậy? Sao ồn thế?'},
       {speaker:'女', pre:'我现在在火车站，你说话我听不太清楚，', blank:'过会儿我再跟你联系吧', post:'。', py:'Wǒ xiànzài zài huǒchēzhàn, nǐ shuōhuà wǒ tīng bú tài qīngchu, guòhuìr wǒ zài gēn nǐ liánxì ba.', vn:'Tôi đang ở ga tàu, bạn nói tôi nghe không rõ lắm, lát nữa tôi liên lạc lại với bạn nhé.'},
     ],
     explain:'男：喂，你在哪儿呢？怎么这么吵？女：我现在在火车站，你说话我听不太清楚，过会儿我再跟你联系吧。问：女的现在在哪儿？ → 火车站。'},
    {num:9, options:['他常常锻炼身体','他不喜欢运动','他没有朋友'], ans:0,
     lines:[
       {speaker:'女', pre:'你篮球打得真好！', blank:'你平时经常练习吗', post:'？', py:'Nǐ lánqiú dǎ de zhēn hǎo! Nǐ píngshí jīngcháng liànxí ma?', vn:'Bạn chơi bóng rổ giỏi thật đấy! Bạn ngày thường có luyện tập nhiều không?'},
       {speaker:'男', pre:'是的，我每个周末都会和朋友们来打球，', blank:'每次打两个小时', post:'。', py:'Shì de, wǒ měi ge zhōumò dōu huì hé péngyoumen lái dǎqiú, měi cì dǎ liǎng ge xiǎoshí.', vn:'Đúng vậy, cuối tuần nào tôi cũng cùng bạn bè đi chơi bóng, mỗi lần chơi hai tiếng.'},
     ],
     explain:'女：你篮球打得真好！你平时经常练习吗？男：是的，我每个周末都会和朋友们来打球，每次打两个小时。问：关于男的，可以知道什么？ → 他常常锻炼身体。'},
    {num:10, options:['不用来接他','希望女的来接他','他没有行李'], ans:0,
     lines:[
       {speaker:'女', pre:'喂，你中午几点到？', blank:'我请个假去机场接你', post:'。', py:'Wéi, nǐ zhōngwǔ jǐ diǎn dào? Wǒ qǐng ge jià qù jīchǎng jiē nǐ.', vn:'Alô, trưa nay mấy giờ bạn đến? Tôi xin nghỉ để ra sân bay đón bạn.'},
       {speaker:'男', pre:'不用专门来接我，我行李很少，你放心吧，', blank:'家里见', post:'。', py:'Búyòng zhuānmén lái jiē wǒ, wǒ xíngli hěn shǎo, nǐ fàng xīn ba, jiā li jiàn.', vn:'Không cần đặc biệt ra đón tôi đâu, hành lý tôi ít lắm, bạn yên tâm, gặp nhau ở nhà nhé.'},
     ],
     explain:'女：喂，你中午几点到？我请个假去机场接你。男：不用专门来接我，我行李很少，你放心吧，家里见。问：男的是什么意思？ → 不用来接他。'},
    {num:11, options:['谢谢男的帮忙','不想让男的帮忙','觉得镜子不重'], ans:0,
     lines:[
       {speaker:'男', pre:'那镜子太重了，', blank:'还是我来搬吧', post:'。', py:'Nà jìngzi tài zhòng le, háishi wǒ lái bān ba.', vn:'Cái gương đó nặng quá, để tôi khuân vậy.'},
       {speaker:'女', pre:'麻烦你了，', blank:'还得请你帮忙', post:'。', py:'Máfan nǐ le, hái děi qǐng nǐ bāngmáng.', vn:'Phiền bạn rồi, còn phải nhờ bạn giúp nữa.'},
     ],
     explain:'男：那镜子太重了，还是我来搬吧。女：麻烦你了，还得请你帮忙。问：女的是什么意思？ → 谢谢男的帮忙。'},
    {num:12, options:['她需要重新检查','她检查得很仔细','她不会检查'], ans:0,
     lines:[
       {speaker:'男', pre:'我刚才重新看了一下，这个地方是错的，', blank:'你再检查一下', post:'。', py:'Wǒ gāngcái chóngxīn kànle yíxià, zhège dìfang shì cuò de, nǐ zài jiǎnchá yíxià.', vn:'Vừa nãy tôi xem lại rồi, chỗ này bị sai, bạn kiểm tra lại đi.'},
       {speaker:'女', pre:'啊，对不起，', blank:'那我再检查检查', post:'。', py:'A, duìbuqǐ, nà wǒ zài jiǎnchá jiǎnchá.', vn:'À, xin lỗi, vậy để tôi kiểm tra lại lần nữa.'},
     ],
     explain:'男：我刚才重新看了一下，这个地方是错的，你再检查一下。女：啊，对不起，那我再检查检查。问：关于女的，可以知道什么？ → 她需要重新检查。'},
    {num:13, options:['医生','老师','律师'], ans:0,
     lines:[
       {speaker:'女', pre:'你女儿毕业了吧？', blank:'现在在哪儿上班呢', post:'？', py:'Nǐ nǚ’ér bì yè le ba? Xiànzài zài nǎr shàngbān ne?', vn:'Con gái bạn tốt nghiệp rồi nhỉ? Bây giờ đang làm việc ở đâu vậy?'},
       {speaker:'男', pre:'是啊，毕业差不多两年了。在我们家附近的一个医院，', blank:'当医生', post:'。', py:'Shì a, bì yè chàbuduō liǎng nián le. Zài wǒmen jiā fùjìn de yí ge yīyuàn, dāng yīshēng.', vn:'Đúng vậy, tốt nghiệp gần hai năm rồi. Ở một bệnh viện gần nhà chúng tôi, làm bác sĩ.'},
     ],
     explain:'女：你女儿毕业了吧？现在在哪儿上班呢？男：是啊，毕业差不多两年了。在我们家附近的一个医院，当医生。问：男的的女儿是做什么的？ → 医生。'},
    {num:14, options:['骑自行车','走路','坐地铁'], ans:1,
     lines:[
       {speaker:'男', pre:'今天我们要走路去图书馆了。', blank:'昨天被一个朋友借走了', post:'。', py:'Jīntiān wǒmen yào zǒulù qù túshūguǎn le. Zuótiān bèi yí ge péngyou jièzǒu le.', vn:'Hôm nay chúng ta phải đi bộ đến thư viện rồi. Hôm qua bị một người bạn mượn mất rồi.'},
       {speaker:'女', pre:'没关系，', blank:'那我们就走过去吧，就当锻炼身体了', post:'。', py:'Méi guānxi, nà wǒmen jiù zǒu guoqu ba, jiù dàng duànliàn shēntǐ le.', vn:'Không sao, vậy chúng ta đi bộ đi, coi như rèn luyện thân thể.'},
     ],
     explain:'男：今天我们要走路去图书馆了。（自行车）昨天被一个朋友借走了。女：没关系，那我们就走过去吧，就当锻炼身体了。问：他们怎么去图书馆？ → 走路。'},
    {num:15, options:['很不适应','天气特别冷，但还行','完全不习惯'], ans:1,
     lines:[
       {speaker:'女', pre:'来这儿一个多星期了，', blank:'还适应吗', post:'？', py:'Lái zhèr yí ge duō xīngqī le, hái shìyìng ma?', vn:'Đến đây hơn một tuần rồi, còn thích nghi không?'},
       {speaker:'男', pre:'还行，就是天气特别冷，', blank:'每天多穿些衣服就好了', post:'。', py:'Hái xíng, jiùshì tiānqì tèbié lěng, měitiān duō chuān xiē yīfu jiù hǎo le.', vn:'Cũng ổn, chỉ là thời tiết đặc biệt lạnh, mỗi ngày mặc thêm ít quần áo là được.'},
     ],
     explain:'女：来这儿一个多星期了，还适应吗？男：还行，就是天气特别冷，每天多穿些衣服就好了。问：男的觉得这儿怎么样？ → 天气特别冷，但还行。'},
    {num:16, options:['游泳去了','看书去了','上班去了'], ans:0,
     lines:[
       {speaker:'女', pre:'你好，请问小王在家吗？', blank:'他什么时候回来', post:'？', py:'Nǐ hǎo, qǐngwèn Xiǎo Wáng zài jiā ma? Tā shénme shíhou huílai?', vn:'Xin chào, cho hỏi Tiểu Vương có ở nhà không? Khi nào anh ấy về vậy?'},
       {speaker:'男', pre:'他不在家，游泳去了。', blank:'一会儿就回来了', post:'。', py:'Tā bú zài jiā, yóuyǒng qù le. Yíhuìr jiù huílai le.', vn:'Anh ấy không có nhà, đi bơi rồi. Lát nữa là về thôi.'},
     ],
     explain:'女：你好，请问小王在家吗？他什么时候回来？男：他不在家，游泳去了。一会儿就回来了。问：小王做什么去了？ → 游泳去了。'},
    {num:17, options:['同学','夫妻','邻居'], ans:0,
     lines:[
       {speaker:'女', pre:'后天同学聚会，你能来吗？', blank:'你联系得怎么样了？能来多少人', post:'？', py:'Hòutiān tóngxué jùhuì, nǐ néng lái ma? Nǐ liánxì de zěnmeyàng le? Néng lái duōshao rén?', vn:'Ngày kia họp lớp, bạn đến được không? Bạn liên hệ thế nào rồi? Có bao nhiêu người đến được?'},
       {speaker:'男', pre:'差不多一半吧，李进还专门从国外回来了呢。是吗？', blank:'毕业已经十年了，真想大家啊', post:'。', py:'Chàbuduō yíbàn ba, Lǐ Jìn hái zhuānmén cóng guówài huílai le ne. Shì ma? Bì yè yǐjīng shí nián le, zhēn xiǎng dàjiā a.', vn:'Gần một nửa thôi, Lý Tiến còn đặc biệt từ nước ngoài về nữa. Vậy à? Tốt nghiệp đã mười năm rồi, thật nhớ mọi người quá.'},
     ],
     explain:'女：后天同学聚会……男：……毕业已经十年了，真想大家啊。问：他们最可能是什么关系？ → 同学。'},
    {num:18, options:['他搬新家了','他升职了','他生日'], ans:0,
     lines:[
       {speaker:'男', pre:'今天是小王请客？', blank:'他有什么高兴事啊', post:'？', py:'Jīntiān shì Xiǎo Wáng qǐngkè? Tā yǒu shénme gāoxìng shì a?', vn:'Hôm nay Tiểu Vương mời khách à? Anh ấy có chuyện gì vui vậy?'},
       {speaker:'女', pre:'他搬新家了，晚上请老同学们去家里吃饭，', blank:'正好看看他的新房子', post:'。', py:'Tā bān xīn jiā le, wǎnshang qǐng lǎo tóngxuémen qù jiā li chīfàn, zhènghǎo kànkan tā de xīn fángzi.', vn:'Anh ấy chuyển nhà mới, tối nay mời các bạn học cũ đến nhà ăn cơm, đúng dịp xem nhà mới của anh ấy luôn.'},
     ],
     explain:'男：今天是小王请客？他有什么高兴事啊？女：他搬新家了……问：小王为什么请客？ → 他搬新家了。'},
    {num:19, options:['很美','很危险','没什么特别'], ans:0,
     lines:[
       {speaker:'旁白', pre:'一天，小张和女朋友一起去爬山。他们爬了三个小时，女朋友累坏了。这时小张说："快看下面哪，', blank:'多美啊', post:'！"', py:'Yì tiān, Xiǎo Zhāng hé nǚpéngyou yìqǐ qù páshān. Tāmen pále sān ge xiǎoshí, nǚpéngyou lèihuài le. Zhèshí Xiǎo Zhāng shuō: "Kuài kàn xiàmian na, duō měi a!"', vn:'Một hôm, Tiểu Trương và bạn gái cùng đi leo núi. Họ leo ba tiếng, bạn gái mệt lử. Lúc này Tiểu Trương nói: "Mau nhìn xuống dưới xem, đẹp quá đi!"'},
     ],
     explain:'山下面怎么样？ → 很美（小张说"多美啊"）。'},
    {num:20, options:['她觉得很累，不想爬山','她很喜欢爬山','她跑得很快'], ans:0,
     lines:[
       {speaker:'旁白', pre:'女朋友回答："下面那么美，', blank:'我们为什么要花三个小时爬到上面来呢', post:'？"', py:'Nǚpéngyou huídá: "Xiàmian nàme měi, wǒmen wèishénme yào huā sān ge xiǎoshí pádào shàngmian lái ne?"', vn:'Bạn gái đáp: "Dưới đó đẹp vậy, sao chúng ta phải mất ba tiếng leo lên trên này làm gì?"'},
     ],
     explain:'关于小张的女朋友，可以知道什么？ → 她觉得很累，不想爬山（có ý than phiền về việc leo núi mất công）。'},
    {num:21, options:['关系不好，很少联系','关系很好，常常联系','互相不认识'], ans:0,
     lines:[
       {speaker:'旁白', pre:'在城市，一回家就把门一关，从不和邻居聊天儿，', blank:'住了几年还不知道邻居姓什么', post:'。', py:'Zài chéngshì, yì huí jiā jiù bǎ mén yì guān, cóng bù hé línjū liáotiānr, zhùle jǐ nián hái bù zhīdào línjū xìng shénme.', vn:'Ở thành phố, vừa về nhà là đóng cửa lại, chưa bao giờ trò chuyện với hàng xóm, sống mấy năm mà vẫn không biết hàng xóm họ gì.'},
     ],
     explain:'城市中很多邻居间的关系怎么样？ → 关系不好，很少联系。'},
    {num:22, options:['邻居应该多联系、互相帮助','城市生活很方便','搬家很麻烦'], ans:0,
     lines:[
       {speaker:'旁白', pre:'其实，邻居应该成为住在旁边的好朋友，大家有事多联系，', blank:'互相多帮助，这样生活会更好', post:'。', py:'Qíshí, línjū yīnggāi chéngwéi zhù zài pángbiān de hǎo péngyou, dàjiā yǒu shì duō liánxì, hùxiāng duō bāngzhù, zhèyàng shēnghuó huì gèng hǎo.', vn:'Thực ra, hàng xóm nên trở thành bạn tốt ở gần nhau, mọi người có việc thì nên liên lạc nhiều, giúp đỡ lẫn nhau, như vậy cuộc sống sẽ tốt hơn.'},
     ],
     explain:'这段话主要谈什么？ → 邻居应该多联系、互相帮助。'},
  ],
};
