// HSK 2 (3.0 Mới) · Bài 11 · 我最喜欢吃中国菜
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 11, trang 093-102.

var vocabData = [
  {
    n: 1, zh: '头', py: 'tóu', pos: 'Danh từ', vn: 'đầu', em: '🙆', img: '/images/hsk2v3-bai-11/tou.jpg', lesson: 1,
    ex_zh: '我头疼，不太舒服。', ex_py: 'Wǒ tóu téng, bú tài shūfu.', ex_vn: 'Em bị đau đầu, không được khoẻ lắm.',
    exList: [
      { zh: '我头疼，不太舒服。', py: 'Wǒ tóu téng, bú tài shūfu.', vn: 'Em bị đau đầu, không được khoẻ lắm.' },
      { zh: '现在头没那么疼了。', py: 'Xiànzài tóu méi nàme téng le.', vn: 'Bây giờ đầu em không còn đau như vừa nãy nữa.' }
    ],
    hanzi: [{ c: '头', p: 'tóu', type: '象形字 · Chữ tượng hình', st: 5, ord: '丶 → 丶 → 大', rad: '大 (đại)', mean: 'đầu', tip: '头疼 là câu có cụm chủ vị làm vị ngữ (ôn bài 10): 我头疼。', cf: '', w: '头 / 头疼 / 一头' }]
  },
  {
    n: 2, zh: '疼', py: 'téng', pos: 'Tính từ', vn: 'đau, nhức', em: '🤕', img: '/images/hsk2v3-bai-11/teng.jpg', lesson: 1,
    ex_zh: '现在不能动，一动就疼。', ex_py: 'Xiànzài bù néng dòng, yí dòng jiù téng.', ex_vn: 'Bây giờ không cử động được, cứ động là đau.',
    exList: [
      { zh: '现在不能动，一动就疼。', py: 'Xiànzài bù néng dòng, yí dòng jiù téng.', vn: 'Bây giờ không cử động được, cứ động là đau.' },
      { zh: '不那么疼了。医生开了一些药。', py: 'Bú nàme téng le. Yīshēng kāile yìxiē yào.', vn: 'Không đau như trước nữa rồi. Bác sĩ đã kê một ít thuốc.' }
    ],
    hanzi: [{ c: '疼', p: 'téng', type: '形声字 · Chữ hình thanh', st: 10, ord: '疒 → 冬', rad: '疒 (nạch – bệnh)', mean: 'đau', tip: 'Bộ 疒 gợi bệnh tật: 疼、病、瘦.', cf: '', w: '疼 / 头疼 / 不疼了' }]
  },
  {
    n: 3, zh: '经常', py: 'jīngcháng', pos: 'Phó từ', vn: 'thường xuyên', em: '🔁', lesson: 1,
    ex_zh: '你这几天经常头疼，去医院看看吧。', ex_py: 'Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.', ex_vn: 'Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem.',
    exList: [
      { zh: '你这几天经常头疼，去医院看看吧。', py: 'Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.', vn: 'Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem.' },
      { zh: '我经常跟朋友去踢足球。', py: 'Wǒ jīngcháng gēn péngyou qù tī zúqiú.', vn: 'Tôi thường xuyên đi đá bóng cùng bạn bè.' }
    ],
    hanzi: [{ c: '常', p: 'cháng', type: '形声字 · Chữ hình thanh', st: 11, ord: '⺌ → 冖 → 口 → 巾', rad: '巾 (cân – khăn)', mean: 'thường, luôn', tip: 'Cùng chữ 常 trong 非常 (rất, phi thường).', cf: '非常 (fēicháng)', w: '经常 / 常常 / 非常' }]
  },
  {
    n: 4, zh: '动', py: 'dòng', pos: 'Động từ', vn: 'cử động, di chuyển', em: '🤸', img: '/images/hsk2v3-bai-11/dong.jpg', lesson: 1,
    ex_zh: '现在不能动，一动就疼。', ex_py: 'Xiànzài bù néng dòng, yí dòng jiù téng.', ex_vn: 'Bây giờ không cử động được, cứ động là đau.',
    exList: [
      { zh: '现在不能动，一动就疼。', py: 'Xiànzài bù néng dòng, yí dòng jiù téng.', vn: 'Bây giờ không cử động được, cứ động là đau.' },
      { zh: '我一有时间就去运动。', py: 'Wǒ yì yǒu shíjiān jiù qù yùndòng.', vn: 'Hễ có thời gian là tôi lại đi tập thể thao.' }
    ],
    hanzi: [{ c: '动', p: 'dòng', type: '形声字 · Chữ hình thanh', st: 6, ord: '云 → 力', rad: '力 (lực – sức)', mean: 'động, cử động', tip: 'Ôn 一……就…… (bài 7): 一动就疼。', cf: '', w: '动 / 运动 / 不能动' }]
  },
  {
    n: 5, zh: '着', py: 'zhe', pos: 'Trợ từ', vn: 'trợ từ chỉ sự duy trì của động tác/trạng thái', em: '⏸️', lesson: 1,
    ex_zh: '那你在这儿坐着，我去开车。', ex_py: 'Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē.', ex_vn: 'Vậy em cứ ngồi ở đây nhé, cô đi lấy xe.',
    exList: [
      { zh: '那你在这儿坐着，我去开车。', py: 'Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē.', vn: 'Vậy em cứ ngồi ở đây nhé, cô đi lấy xe.' },
      { zh: '教室的门开着。', py: 'Jiàoshì de mén kāizhe.', vn: 'Cửa lớp học đang mở.' }
    ],
    hanzi: [{ c: '着', p: 'zhe', type: '形声字 · Chữ hình thanh', st: 11, ord: '⺷ → 目', rad: '目 (mục – mắt)', mean: 'trợ từ động thái', tip: '了 (hoàn thành) · 过 (từng) · 着 (đang duy trì).', cf: '了 (le) · 过 (guo)', w: '坐着 / 开着 / 下着雪' }]
  },
  {
    n: 6, zh: '路上', py: 'lùshang', pos: 'Danh từ', vn: 'trên đường', em: '🛣️', img: '/images/hsk2v3-bai-11/lushang.jpg', lesson: 2,
    ex_zh: '现在路上车多，还下着雪，我开慢一点儿。', ex_py: 'Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.', ex_vn: 'Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút.',
    exList: [
      { zh: '现在路上车多，还下着雪，我开慢一点儿。', py: 'Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.', vn: 'Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút.' },
      { zh: '路上要小心。', py: 'Lùshang yào xiǎoxīn.', vn: 'Trên đường phải cẩn thận nhé.' }
    ],
    hanzi: [{ c: '路', p: 'lù', type: '形声字 · Chữ hình thanh', st: 13, ord: '⻊ → 各', rad: '⻊ (túc – chân)', mean: 'đường', tip: 'Ôn 走路 (bài 9) — đi bộ.', cf: '', w: '路上 / 走路 / 路口' }]
  },
  {
    n: 7, zh: '慢', py: 'màn', pos: 'Tính từ', vn: 'chậm', em: '🐢', img: '/images/hsk2v3-bai-11/man.jpg', lesson: 2,
    ex_zh: '我开慢一点儿。', ex_py: 'Wǒ kāi màn yìdiǎnr.', ex_vn: 'Cô lái chậm một chút.',
    exList: [
      { zh: '我开慢一点儿。', py: 'Wǒ kāi màn yìdiǎnr.', vn: 'Cô lái chậm một chút.' },
      { zh: '他跑得比我慢。', py: 'Tā pǎo de bǐ wǒ màn.', vn: 'Cậu ấy chạy chậm hơn tôi.' }
    ],
    hanzi: [{ c: '慢', p: 'màn', type: '形声字 · Chữ hình thanh', st: 14, ord: '忄 → 曼', rad: '忄 (tâm)', mean: 'chậm', tip: 'Trái nghĩa với 快 (kuài); 慢一点儿 = chậm một chút.', cf: '快 (kuài – nhanh)', w: '慢 / 慢一点儿 / 很慢' }]
  },
  {
    n: 8, zh: '进', py: 'jìn', pos: 'Động từ', vn: 'vào', em: '🚶‍♂️', img: '/images/hsk2v3-bai-11/jin.jpg', lesson: 3,
    ex_zh: '李文，快请进！', ex_py: 'Lǐ Wén, kuài qǐng jìn!', ex_vn: 'Lý Văn, mau vào đi!',
    exList: [
      { zh: '李文，快请进！', py: 'Lǐ Wén, kuài qǐng jìn!', vn: 'Lý Văn, mau vào đi!' },
      { zh: '上课了，你们快进教室来吧。', py: 'Shàngkè le, nǐmen kuài jìn jiàoshì lái ba.', vn: 'Vào học rồi, các em mau vào lớp đi.' }
    ],
    hanzi: [{ c: '进', p: 'jìn', type: '形声字 · Chữ hình thanh', st: 7, ord: '井 → 辶', rad: '辶 (sước – đi)', mean: 'vào, tiến vào', tip: 'Ôn bổ ngữ xu hướng (bài 5): 进来 / 进去.', cf: '出 (chū – ra)', w: '进 / 请进 / 进来' }]
  },
  {
    n: 9, zh: '药', py: 'yào', pos: 'Danh từ', vn: 'thuốc', em: '💊', img: '/images/hsk2v3-bai-11/yao.jpg', lesson: 3,
    ex_zh: '医生开了一些药，吃完就好多了。', ex_py: 'Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.', ex_vn: 'Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.',
    exList: [
      { zh: '医生开了一些药，吃完就好多了。', py: 'Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.', vn: 'Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.' },
      { zh: '从药店买了点儿药，没去医院。', py: 'Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.', vn: 'Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện.' }
    ],
    hanzi: [{ c: '药', p: 'yào', type: '形声字 · Chữ hình thanh', st: 9, ord: '艹 → 约', rad: '艹 (thảo – cỏ)', mean: 'thuốc', tip: 'Ở đây 开 nghĩa là "kê (đơn thuốc)": 开药.', cf: '', w: '药 / 吃药 / 药店' }]
  },
  {
    n: 10, zh: '身体', py: 'shēntǐ', pos: 'Danh từ', vn: 'cơ thể, sức khoẻ', em: '💪', img: '/images/hsk2v3-bai-11/shenti.jpg', lesson: 3,
    ex_zh: '身体不舒服时更要好好吃饭。', ex_py: 'Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', ex_vn: 'Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.',
    exList: [
      { zh: '身体不舒服时更要好好吃饭。', py: 'Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', vn: 'Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.' },
      { zh: '我一有时间就去运动，身体比以前好多了。', py: 'Wǒ yì yǒu shíjiān jiù qù yùndòng, shēntǐ bǐ yǐqián hǎoduō le.', vn: 'Hễ có thời gian là tôi đi tập, sức khoẻ tốt hơn trước nhiều.' }
    ],
    hanzi: [{ c: '身', p: 'shēn', type: '象形字 · Chữ tượng hình', st: 7, ord: '丿 → 冂 → 三 → 丿', rad: '身 (thân)', mean: 'thân thể', tip: 'Ôn 舒服 (bài 6): 身体不舒服 = người không khoẻ.', cf: '', w: '身体 / 身体好 / 身上' }]
  },
  {
    n: 11, zh: '时', py: 'shí', pos: 'Danh từ', vn: 'khi, lúc', em: '🕐', lesson: 3,
    ex_zh: '身体不舒服时更要好好吃饭。', ex_py: 'Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', ex_vn: 'Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.',
    exList: [
      { zh: '身体不舒服时更要好好吃饭。', py: 'Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', vn: 'Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.' },
      { zh: '考试时别忘了带笔。', py: 'Kǎoshì shí bié wàngle dài bǐ.', vn: 'Khi thi đừng quên mang bút.' }
    ],
    hanzi: [{ c: '时', p: 'shí', type: '形声字 · Chữ hình thanh', st: 7, ord: '日 → 寸', rad: '日 (nhật – mặt trời)', mean: 'thời, lúc', tip: '……时 là cách nói gọn của ……的时候.', cf: '的时候 (de shíhou)', w: '时 / 时间 / 小时' }]
  },
  {
    n: 12, zh: '最', py: 'zuì', pos: 'Phó từ', vn: 'nhất', em: '🥇', lesson: 3,
    ex_zh: '你最喜欢吃中国菜，我做几个中国菜吧。', ex_py: 'Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.', ex_vn: 'Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé.',
    exList: [
      { zh: '你最喜欢吃中国菜，我做几个中国菜吧。', py: 'Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.', vn: 'Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé.' },
      { zh: '在我们家，爸爸最高。', py: 'Zài wǒmen jiā, bàba zuì gāo.', vn: 'Trong nhà tôi, bố cao nhất.' }
    ],
    hanzi: [{ c: '最', p: 'zuì', type: '会意字 · Chữ hội ý', st: 12, ord: '曰 → 取', rad: '曰 (viết)', mean: 'nhất', tip: '最 đứng trước tính từ hoặc động từ chỉ tâm lý: 最高、最喜欢.', cf: '更 (gèng – hơn)', w: '最 / 最好 / 最喜欢' }]
  },
  {
    n: 13, zh: '药店', py: 'yàodiàn', pos: 'Danh từ', vn: 'hiệu thuốc, nhà thuốc', em: '🏥', img: '/images/hsk2v3-bai-11/yaodian.jpg', lesson: 4,
    ex_zh: '从药店买了点儿药，没去医院。', ex_py: 'Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.', ex_vn: 'Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện.',
    exList: [
      { zh: '从药店买了点儿药，没去医院。', py: 'Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.', vn: 'Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện.' },
      { zh: '药店就在医院旁边。', py: 'Yàodiàn jiù zài yīyuàn pángbiān.', vn: 'Hiệu thuốc ở ngay cạnh bệnh viện.' }
    ],
    hanzi: [{ c: '店', p: 'diàn', type: '形声字 · Chữ hình thanh', st: 8, ord: '广 → 占', rad: '广 (nghiễm – mái nhà)', mean: 'cửa hàng, quán', tip: 'Cùng nhóm: 商店、咖啡店、奶茶店、药店.', cf: '', w: '药店 / 商店 / 咖啡店' }]
  }
];

var wuData = [
  { img: '🤕', label: '头疼', py: 'tóu téng', letter: 'A' },
  { img: '💊', label: '药', py: 'yào', letter: 'B' },
  { img: '🏥', label: '药店', py: 'yàodiàn', letter: 'C' },
  { img: '🛣️', label: '路上', py: 'lùshang', letter: 'D' },
  { img: '💪', label: '身体', py: 'shēntǐ', letter: 'E' },
  { img: '🐢', label: '慢', py: 'màn', letter: 'F' }
];

var dialogData = [
  {
    scene: '在教室 · Trong lớp học (Bạch Gia Nguyệt bị đau đầu)',
    preQuiz: [
      { q: '白家月现在在哪儿？', opts: ['医院', '家里', '教室'], ans: 2 },
      { q: '王一飞现在去做什么？', opts: ['开车', '回家', '找医生'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '家月，都下课了，你怎么还不回家？', py: 'Jiāyuè, dōu xiàkè le, nǐ zěnme hái bù huí jiā?', vn: 'Gia Nguyệt, đã tan học rồi, sao em vẫn chưa về nhà?' },
      { sp: 1, zh: '我头疼，不太舒服。', py: 'Wǒ tóu téng, bú tài shūfu.', vn: 'Em bị đau đầu, không được khoẻ lắm.' },
      { sp: 0, zh: '你这几天经常头疼，去医院看看吧。', py: 'Nǐ zhè jǐ tiān jīngcháng tóu téng, qù yīyuàn kànkan ba.', vn: 'Mấy ngày nay em thường xuyên đau đầu, hay là đi bệnh viện khám thử xem.' },
      { sp: 1, zh: '我想休息一下，现在不能动，一动就疼。', py: 'Wǒ xiǎng xiūxi yíxià, xiànzài bù néng dòng, yí dòng jiù téng.', vn: 'Em muốn nghỉ ngơi một lát, bây giờ không cử động được, cứ động là đau.' },
      { sp: 0, zh: '那你在这儿坐着，我去开车，一会儿送你去医院。', py: 'Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē, yíhuìr sòng nǐ qù yīyuàn.', vn: 'Vậy em cứ ngồi ở đây nhé, cô đi lấy xe, lát nữa sẽ đưa em đến bệnh viện.' },
      { sp: 1, zh: '谢谢王老师。', py: 'Xièxie Wáng lǎoshī.', vn: 'Cảm ơn cô Vương ạ.' }
    ]
  },
  {
    scene: '在车里 · Trong xe (Lý Văn gọi điện đến)',
    preQuiz: [
      { q: '王一飞在做什么？', opts: ['开车', '看病', '接电话'], ans: 0 },
      { q: '今天天气怎么样？', opts: ['很好', '下雨', '下雪'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '现在路上车多，还下着雪，我开慢一点儿。', py: 'Xiànzài lùshang chē duō, hái xiàzhe xuě, wǒ kāi màn yìdiǎnr.', vn: 'Bây giờ rất nhiều xe cộ trên đường, lại còn đang có tuyết rơi nên cô lái chậm một chút.' },
      { sp: 1, zh: '没问题，现在头没那么疼了。', py: 'Méi wèntí, xiànzài tóu méi nàme téng le.', vn: 'Không sao đâu ạ, bây giờ đầu em không còn đau như vừa nãy nữa rồi.' },
      { sp: 0, zh: '好。李文来电话了，你帮我接一下。', py: 'Hǎo. Lǐ Wén lái diànhuà le, nǐ bāng wǒ jiē yíxià.', vn: 'Được rồi. Lý Văn gọi điện thoại đến kia, em nghe máy hộ cô một chút.' },
      { sp: 1, zh: '喂，李文，王老师开着车呢，你找她有事吗？', py: 'Wèi, Lǐ Wén, Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?', vn: 'A lô, Lý Văn à, cô Vương đang lái xe, bạn tìm cô có việc gì không?' },
      { sp: 2, zh: '没什么事。今天雪这么大，你们开车去哪儿啊？', py: 'Méi shénme shì. Jīntiān xuě zhème dà, nǐmen kāichē qù nǎr a?', vn: 'Không có việc gì quan trọng đâu. Hôm nay tuyết rơi dày thế này, hai người lái xe đi đâu vậy?' },
      { sp: 1, zh: '去医院，我头有点儿疼。', py: 'Qù yīyuàn, wǒ tóu yǒudiǎnr téng.', vn: 'Đi bệnh viện, mình hơi đau đầu.' },
      { sp: 2, zh: '那我一会儿去看看你。', py: 'Nà wǒ yíhuìr qù kànkan nǐ.', vn: 'Vậy lát nữa mình sẽ đi thăm bạn.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lý Văn đến thăm)',
    preQuiz: [
      { q: '白家月现在怎么样了？', opts: ['不想吃饭', '身体不舒服', '头不那么疼了'], ans: 2 },
      { q: '王一飞现在要做什么？', opts: ['去买药', '找医生', '去做菜'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '李文，快请进！', py: 'Lǐ Wén, kuài qǐng jìn!', vn: 'Lý Văn, mau vào đi!' },
      { sp: 2, zh: '家月，你怎么样了？头还疼吗？', py: 'Jiāyuè, nǐ zěnmeyàng le? Tóu hái téng ma?', vn: 'Gia Nguyệt, bạn thế nào rồi? Còn đau đầu không?' },
      { sp: 1, zh: '不那么疼了。医生开了一些药，吃完就好多了。', py: 'Bú nàme téng le. Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.', vn: 'Không đau như trước nữa rồi. Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.' },
      { sp: 2, zh: '那就好！', py: 'Nà jiù hǎo!', vn: 'Vậy thì tốt rồi!' },
      { sp: 0, zh: '家月，你想不想吃点儿东西？', py: 'Jiāyuè, nǐ xiǎng bu xiǎng chī diǎnr dōngxi?', vn: 'Gia Nguyệt, em có muốn ăn chút gì không?' },
      { sp: 2, zh: '吃点儿吧，身体不舒服时更要好好吃饭。', py: 'Chī diǎnr ba, shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.', vn: 'Ăn một chút đi, khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.' },
      { sp: 1, zh: '吃点儿什么呢？', py: 'Chī diǎnr shénme ne?', vn: 'Ăn chút gì bây giờ ạ?' },
      { sp: 0, zh: '你最喜欢吃中国菜，我做几个中国菜吧。', py: 'Nǐ zuì xǐhuan chī Zhōngguó cài, wǒ zuò jǐ ge Zhōngguó cài ba.', vn: 'Em thích ăn món Trung Quốc nhất, cô nấu mấy món Trung Quốc nhé.' },
      { sp: 1, zh: '好的，谢谢王老师。', py: 'Hǎo de, xièxie Wáng lǎoshī.', vn: 'Vâng ạ, cảm ơn cô Vương.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Bạch Gia Nguyệt viết nhật ký)',
    preQuiz: [
      { q: '白家月今天自己去医院了吗？', opts: ['是的，自己去的', '没有，王老师送她去的', '没去医院'], ans: 1 },
      { q: '这几天她从哪儿买的药？', opts: ['药店', '医院', '商场'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '我这几天经常头疼，从药店买了点儿药，没去医院。', py: 'Wǒ zhè jǐ tiān jīngcháng tóu téng, cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.', vn: 'Mấy ngày nay tôi thường xuyên bị đau đầu, đã mua một ít thuốc từ hiệu thuốc về mà không đi bệnh viện.' },
      { sp: 0, zh: '今天下课后，王老师看我不舒服，就送我去医院了。', py: 'Jīntiān xiàkè hòu, Wáng lǎoshī kàn wǒ bù shūfu, jiù sòng wǒ qù yīyuàn le.', vn: 'Hôm nay sau khi tan học, cô Vương thấy tôi không được khoẻ nên đã đưa tôi đến bệnh viện.' },
      { sp: 0, zh: '从医院回来，李文也来看我了。', py: 'Cóng yīyuàn huílái, Lǐ Wén yě lái kàn wǒ le.', vn: 'Sau khi từ bệnh viện về, Lý Văn cũng đến thăm tôi.' },
      { sp: 0, zh: '现在他们都回去了，我也要睡觉了。', py: 'Xiànzài tāmen dōu huíqù le, wǒ yě yào shuìjiào le.', vn: 'Bây giờ họ đều về cả rồi, tôi cũng phải đi ngủ đây.' }
    ]
  }
];

var listenData = [
  {
    audio: '家月，都下课了，你怎么还不回家？我头疼，不太舒服。你这几天经常头疼，去医院看看吧。那你在这儿坐着，我去开车，一会儿送你去医院。',
    questions: [
      { q: '白家月怎么了？', opts: ['头疼', '肚子疼', '想睡觉'], ans: 0 },
      { q: '王一飞要做什么？', opts: ['去开车送她', '回家', '找医生'], ans: 0 }
    ]
  },
  {
    audio: '现在路上车多，还下着雪，我开慢一点儿。没问题，现在头没那么疼了。李文来电话了，你帮我接一下。',
    questions: [
      { q: '今天天气怎么样？', opts: ['很好', '下雨', '下雪'], ans: 2 },
      { q: '王一飞为什么开慢一点儿？', opts: ['路上车多还下着雪', '车坏了', '不想去医院'], ans: 0 }
    ]
  },
  {
    audio: '家月，你怎么样了？头还疼吗？不那么疼了。医生开了一些药，吃完就好多了。身体不舒服时更要好好吃饭。你最喜欢吃中国菜，我做几个中国菜吧。',
    questions: [
      { q: '白家月现在怎么样了？', opts: ['不想吃饭', '身体不舒服', '头不那么疼了'], ans: 2 },
      { q: '白家月最喜欢吃什么？', opts: ['中国菜', '面条儿', '蛋糕'], ans: 0 }
    ]
  },
  {
    audio: '我这几天经常头疼，从药店买了点儿药，没去医院。今天下课后，王老师看我不舒服，就送我去医院了。从医院回来，李文也来看我了。',
    questions: [
      { q: '她这几天怎么了？', opts: ['经常头疼', '经常想睡觉', '经常不吃饭'], ans: 0 },
      { q: '谁送她去医院？', opts: ['王老师', '李文', '她自己去的'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '头', right: '疼' },
  { left: '经常', right: '头疼' },
  { left: '在这儿', right: '坐着' },
  { left: '下', right: '着雪' },
  { left: '最喜欢', right: '吃中国菜' },
  { left: '从药店', right: '买药' }
];

var fillData = [
  { pre: '我', blank: '头', post: '疼，不太舒服。', hint: '(đầu)', ans: '头' },
  { pre: '你这几天', blank: '经常', post: '头疼，去医院看看吧。', hint: '(thường xuyên)', ans: '经常' },
  { pre: '现在不能', blank: '动', post: '，一动就疼。', hint: '(cử động)', ans: '动' },
  { pre: '那你在这儿坐', blank: '着', post: '，我去开车。', hint: '(trợ từ duy trì)', ans: '着' },
  { pre: '现在', blank: '路上', post: '车多，还下着雪。', hint: '(trên đường)', ans: '路上' },
  { pre: '李文，快请', blank: '进', post: '！', hint: '(vào)', ans: '进' },
  { pre: '医生开了一些', blank: '药', post: '，吃完就好多了。', hint: '(thuốc)', ans: '药' },
  { pre: '你', blank: '最', post: '喜欢吃中国菜。', hint: '(nhất)', ans: '最' }
];

var sortData = [
  { words: ['那', '你', '在', '这儿', '坐', '着', '。'], ans: '那你在这儿坐着。', audio: '那你在这儿坐着。' },
  { words: ['教室', '的', '门', '开', '着', '。'], ans: '教室的门开着。', audio: '教室的门开着。' },
  { words: ['现在', '路上', '车', '多', '，', '还', '下', '着', '雪', '。'], ans: '现在路上车多，还下着雪。', audio: '现在路上车多，还下着雪。' },
  { words: ['我', '最', '喜欢', '吃', '中国菜', '。'], ans: '我最喜欢吃中国菜。', audio: '我最喜欢吃中国菜。' },
  { words: ['身体', '不', '舒服', '时', '更', '要', '好好', '吃饭', '。'], ans: '身体不舒服时更要好好吃饭。', audio: '身体不舒服时更要好好吃饭。' },
  { words: ['现在', '不能', '动', '，', '一', '动', '就', '疼', '。'], ans: '现在不能动，一动就疼。', audio: '现在不能动，一动就疼。' }
];

var mcData = [
  { q: '教室的门＿＿，你进去吧。', opts: ['开着', '开了着', '着开', '开着了'], ans: 0 },
  { q: '她穿＿＿白色的裤子。', opts: ['着', '了', '过', '得'], ans: 0 },
  { q: 'Phủ định của 门开着 là gì?', opts: ['门没开着', '门不开着', '门开着不', '门没有开'], ans: 0 },
  { q: '在我们家，爸爸＿＿高。', opts: ['最', '比', '还', '更'], ans: 0 },
  { q: '你们班谁中文说得＿＿好？', opts: ['最', '很', '非常', '比'], ans: 0 },
  { q: '“一动就疼” dùng mẫu câu nào?', opts: ['一……就……', '虽然……但是……', '因为……所以……', '还是……'], ans: 0 },
  { q: '“身体不舒服时” có nghĩa giống với cách nói nào?', opts: ['身体不舒服的时候', '身体不舒服以后', '身体不舒服以前', '身体不舒服因为'], ans: 0 },
  { q: 'Câu hỏi nào KHÔNG dùng được cho câu có 着?', opts: ['门开着不开着？', '门开着吗？', '门开着没有？', '门开没开着？'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你身体不舒服时会怎么做？',
      q_vn: 'Khi cơ thể không khoẻ bạn sẽ làm gì?',
      hint: '我会去……，还会……',
      sample: '我头疼的时候会从药店买点儿药，如果经常头疼，我就去医院看看。',
      sample_vn: 'Khi đau đầu tôi sẽ mua chút thuốc ở hiệu thuốc, nếu thường xuyên đau đầu thì tôi đi bệnh viện khám.',
      note: 'Dùng 经常 và ……时/的时候 để nói thói quen.'
    },
    {
      q_zh: '现在外边怎么样？下着雨还是下着雪？',
      q_vn: 'Bên ngoài bây giờ thế nào? Đang mưa hay đang có tuyết?',
      hint: '外边下着……，路上……',
      sample: '外边下着雪，路上车很多，大家都开得很慢。',
      sample_vn: 'Bên ngoài đang có tuyết rơi, trên đường rất nhiều xe, mọi người đều lái rất chậm.',
      note: '动词 + 着 chỉ trạng thái đang duy trì; ôn câu hỏi 还是 (bài 10).'
    },
    {
      q_zh: '你最喜欢吃什么菜？为什么？',
      q_vn: 'Bạn thích ăn món gì nhất? Vì sao?',
      hint: '我最喜欢吃……，因为……',
      sample: '我最喜欢吃中国菜，因为中国菜比别的菜好吃，鱼啊肉啊什么的都很香。',
      sample_vn: 'Tôi thích ăn món Trung Quốc nhất, vì món Trung Quốc ngon hơn các món khác, cá, thịt… đều rất thơm.',
      note: '最 + động từ chỉ tâm lý; ôn 比 (bài 8) và 什么的 (bài 6).'
    },
    {
      q_zh: '朋友生病了，你会对他说什么？',
      q_vn: 'Bạn của bạn bị ốm, bạn sẽ nói gì với họ?',
      hint: '你怎么样了？……还疼吗？',
      sample: '你怎么样了？头还疼吗？身体不舒服时更要好好吃饭，我一会儿去看看你。',
      sample_vn: 'Bạn thế nào rồi? Còn đau đầu không? Khi không khoẻ thì càng phải ăn uống đầy đủ, lát nữa mình sẽ đến thăm bạn.',
      note: 'Những câu hỏi thăm quen thuộc khi thăm người ốm.'
    },
    {
      q_zh: '说一说你今天做了什么。',
      q_vn: 'Kể xem hôm nay bạn đã làm gì.',
      hint: '今天……，从……回来以后……',
      sample: '今天下课后我不太舒服，老师送我去了医院，从医院回来，朋友也来看我了。',
      sample_vn: 'Hôm nay sau khi tan học tôi không được khoẻ, cô giáo đưa tôi đến bệnh viện, từ bệnh viện về bạn tôi cũng đến thăm.',
      note: 'Ôn 从 (bài 7) và bổ ngữ xu hướng 回来/回去 (bài 5).'
    }
  ]
};

var translateData = [
  { vi: 'Em bị đau đầu, không được khoẻ lắm.', zh: '我头疼，不太舒服。', py: 'Wǒ tóu téng, bú tài shūfu.' },
  { vi: 'Vậy em cứ ngồi ở đây nhé, cô đi lấy xe.', zh: '那你在这儿坐着，我去开车。', py: 'Nà nǐ zài zhèr zuòzhe, wǒ qù kāichē.' },
  { vi: 'Bây giờ trên đường nhiều xe, lại còn đang có tuyết rơi.', zh: '现在路上车多，还下着雪。', py: 'Xiànzài lùshang chē duō, hái xiàzhe xuě.' },
  { vi: 'Khi cơ thể không khoẻ thì càng phải ăn uống đầy đủ.', zh: '身体不舒服时更要好好吃饭。', py: 'Shēntǐ bù shūfu shí gèng yào hǎohāo chīfàn.' },
  { vi: 'Em thích ăn món Trung Quốc nhất.', zh: '你最喜欢吃中国菜。', py: 'Nǐ zuì xǐhuan chī Zhōngguó cài.' }
];

var translateDataRev = [
  { vi: 'Mấy ngày nay em thường xuyên đau đầu.', zh: '你这几天经常头疼。', py: 'Nǐ zhè jǐ tiān jīngcháng tóu téng.' },
  { vi: 'Bây giờ không cử động được, cứ động là đau.', zh: '现在不能动，一动就疼。', py: 'Xiànzài bù néng dòng, yí dòng jiù téng.' },
  { vi: 'Cô Vương đang lái xe, bạn tìm cô có việc gì không?', zh: '王老师开着车呢，你找她有事吗？', py: 'Wáng lǎoshī kāizhe chē ne, nǐ zhǎo tā yǒu shì ma?' },
  { vi: 'Bác sĩ đã kê một ít thuốc, uống xong thấy khoẻ hơn nhiều rồi.', zh: '医生开了一些药，吃完就好多了。', py: 'Yīshēng kāile yìxiē yào, chīwán jiù hǎoduō le.' },
  { vi: 'Tôi mua một ít thuốc ở hiệu thuốc, không đi bệnh viện.', zh: '从药店买了点儿药，没去医院。', py: 'Cóng yàodiàn mǎile diǎnr yào, méi qù yīyuàn.' }
];
