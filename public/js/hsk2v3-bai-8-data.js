// HSK 2 (3.0 Mới) · Bài 8 · 虽然你忘了，但是我记得
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 8, trang 064-073.

var vocabData = [
  {
    n: 1, zh: '手表', py: 'shǒubiǎo', pos: 'Danh từ', vn: 'đồng hồ đeo tay', em: '⌚', lesson: 1,
    ex_zh: '你看，这两块手表怎么样？', ex_py: 'Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?', ex_vn: 'Anh nhìn này, hai chiếc đồng hồ này thế nào?',
    exList: [
      { zh: '你看，这两块手表怎么样？', py: 'Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?', vn: 'Anh nhìn này, hai chiếc đồng hồ này thế nào?' },
      { zh: '还给妻子买了一块非常漂亮的手表。', py: 'Hái gěi qīzi mǎile yí kuài fēicháng piàoliang de shǒubiǎo.', vn: 'Còn mua cho vợ một chiếc đồng hồ rất đẹp.' }
    ],
    hanzi: [{ c: '表', p: 'biǎo', type: '会意字 · Chữ hội ý', st: 8, ord: '一 → 二 → 丨 → 衣', rad: '衣 (y – áo)', mean: 'đồng hồ; bảng biểu', tip: 'Lượng từ của đồng hồ đeo tay là 块: 一块手表.', cf: '', w: '手表 / 一块手表 / 表 (bảng)' }]
  },
  {
    n: 2, zh: '左边', py: 'zuǒbian', pos: 'Danh từ', vn: 'bên trái', em: '⬅️', lesson: 1,
    ex_zh: '我喜欢左边这个。', ex_py: 'Wǒ xǐhuan zuǒbian zhège.', ex_vn: 'Em thích chiếc bên trái này.',
    exList: [
      { zh: '我喜欢左边这个。', py: 'Wǒ xǐhuan zuǒbian zhège.', vn: 'Em thích chiếc bên trái này.' },
      { zh: '我也觉得左边的比右边的好看。', py: 'Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.', vn: 'Anh cũng thấy chiếc bên trái đẹp hơn chiếc bên phải.' }
    ],
    hanzi: [{ c: '左', p: 'zuǒ', type: '会意字 · Chữ hội ý', st: 5, ord: '一 → 丿 → 工', rad: '工 (công)', mean: 'bên trái', tip: 'Nhớ cặp đối lập 左 ↔ 右, 左边 ↔ 右边.', cf: '右 (yòu – phải)', w: '左边 / 左 / 往左走' }]
  },
  {
    n: 3, zh: '左', py: 'zuǒ', pos: 'Danh từ', vn: 'trái', em: '👈', lesson: 1,
    ex_zh: '往左走就到电影院了。', ex_py: 'Wǎng zuǒ zǒu jiù dào diànyǐngyuàn le.', ex_vn: 'Đi về bên trái là tới rạp chiếu phim.',
    exList: [
      { zh: '往左走就到电影院了。', py: 'Wǎng zuǒ zǒu jiù dào diànyǐngyuàn le.', vn: 'Đi về bên trái là tới rạp chiếu phim.' },
      { zh: '左边的手表比右边的好看。', py: 'Zuǒbian de shǒubiǎo bǐ yòubian de hǎokàn.', vn: 'Chiếc đồng hồ bên trái đẹp hơn chiếc bên phải.' }
    ],
    hanzi: [{ c: '左', p: 'zuǒ', type: '会意字 · Chữ hội ý', st: 5, ord: '一 → 丿 → 工', rad: '工 (công)', mean: 'bên trái', tip: 'Kết hợp với 往 (bài 7): 往左 / 往右.', cf: '右 (yòu)', w: '左 / 左边 / 往左' }]
  },
  {
    n: 4, zh: '比', py: 'bǐ', pos: 'Giới từ / Động từ', vn: 'so với, hơn (dùng khi so sánh)', em: '⚖️', lesson: 1,
    ex_zh: '我也觉得左边的比右边的好看。', ex_py: 'Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.', ex_vn: 'Anh cũng thấy chiếc bên trái đẹp hơn chiếc bên phải.',
    exList: [
      { zh: '我也觉得左边的比右边的好看。', py: 'Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.', vn: 'Anh cũng thấy chiếc bên trái đẹp hơn chiếc bên phải.' },
      { zh: '今天比昨天冷。', py: 'Jīntiān bǐ zuótiān lěng.', vn: 'Hôm nay lạnh hơn hôm qua.' }
    ],
    hanzi: [{ c: '比', p: 'bǐ', type: '会意字 · Chữ hội ý', st: 4, ord: '匕 → 匕', rad: '比 (tỉ)', mean: 'so sánh', tip: 'Hai người đứng cạnh nhau để so — A 比 B + tính từ.', cf: '', w: '比 / A比B好 / 比较' }]
  },
  {
    n: 5, zh: '右边', py: 'yòubian', pos: 'Danh từ', vn: 'bên phải', em: '➡️', lesson: 1,
    ex_zh: '左边的比右边的好看。', ex_py: 'Zuǒbian de bǐ yòubian de hǎokàn.', ex_vn: 'Chiếc bên trái đẹp hơn chiếc bên phải.',
    exList: [
      { zh: '左边的比右边的好看。', py: 'Zuǒbian de bǐ yòubian de hǎokàn.', vn: 'Chiếc bên trái đẹp hơn chiếc bên phải.' },
      { zh: '饭馆在商场的右边。', py: 'Fànguǎn zài shāngchǎng de yòubian.', vn: 'Nhà hàng ở bên phải trung tâm thương mại.' }
    ],
    hanzi: [{ c: '右', p: 'yòu', type: '会意字 · Chữ hội ý', st: 5, ord: '一 → 丿 → 口', rad: '口 (khẩu)', mean: 'bên phải', tip: '右 có 口 ở dưới, 左 có 工 ở dưới — mẹo phân biệt.', cf: '左 (zuǒ – trái)', w: '右边 / 右 / 往右走' }]
  },
  {
    n: 6, zh: '右', py: 'yòu', pos: 'Danh từ', vn: 'phải', em: '👉', lesson: 1,
    ex_zh: '往右走，前边就是电影院。', ex_py: 'Wǎng yòu zǒu, qiánbian jiù shì diànyǐngyuàn.', ex_vn: 'Đi về bên phải, phía trước là rạp chiếu phim.',
    exList: [
      { zh: '往右走，前边就是电影院。', py: 'Wǎng yòu zǒu, qiánbian jiù shì diànyǐngyuàn.', vn: 'Đi về bên phải, phía trước là rạp chiếu phim.' },
      { zh: '右边这块手表比左边的贵。', py: 'Yòubian zhè kuài shǒubiǎo bǐ zuǒbian de guì.', vn: 'Chiếc đồng hồ bên phải này đắt hơn chiếc bên trái.' }
    ],
    hanzi: [{ c: '右', p: 'yòu', type: '会意字 · Chữ hội ý', st: 5, ord: '一 → 丿 → 口', rad: '口 (khẩu)', mean: 'bên phải', tip: 'Đi cùng 往 (bài 7): 往右走.', cf: '左 (zuǒ)', w: '右 / 右边 / 往右' }]
  },
  {
    n: 7, zh: '记得', py: 'jìde', pos: 'Động từ', vn: 'nhớ, nhớ là', em: '🧠', lesson: 2,
    ex_zh: '我记得你喜欢看爱情片。', ex_py: 'Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn.', ex_vn: 'Anh nhớ là em thích xem phim tình cảm.',
    exList: [
      { zh: '我记得你喜欢看爱情片。', py: 'Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn.', vn: 'Anh nhớ là em thích xem phim tình cảm.' },
      { zh: '虽然你忘了，但是我记得。', py: 'Suīrán nǐ wàng le, dànshì wǒ jìde.', vn: 'Mặc dù em quên, nhưng anh vẫn nhớ.' }
    ],
    hanzi: [{ c: '记', p: 'jì', type: '形声字 · Chữ hình thanh', st: 5, ord: '讠 → 己', rad: '讠 (ngôn – lời nói)', mean: 'ghi nhớ, ghi chép', tip: '记得 trái nghĩa với 忘 (wàng, bài 6).', cf: '忘 (wàng – quên)', w: '记得 / 记住 / 日记' }]
  },
  {
    n: 8, zh: '爱情片', py: 'àiqíngpiàn', pos: 'Danh từ', vn: 'phim tình cảm', em: '💕', lesson: 2,
    ex_zh: '我们看那个爱情片，怎么样？', ex_py: 'Wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?', ex_vn: 'Hay chúng ta xem bộ phim tình cảm kia, được không?',
    exList: [
      { zh: '我们看那个爱情片，怎么样？', py: 'Wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?', vn: 'Hay chúng ta xem bộ phim tình cảm kia, được không?' },
      { zh: '这个电影比那个爱情片更有意思。', py: 'Zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.', vn: 'Bộ phim này hay hơn bộ phim tình cảm kia.' }
    ],
    hanzi: [{ c: '情', p: 'qíng', type: '形声字 · Chữ hình thanh', st: 11, ord: '忄 → 青', rad: '忄 (tâm – trái tim)', mean: 'tình cảm', tip: '爱情 (tình yêu) + 片 (phim) = phim tình cảm.', cf: '', w: '爱情片 / 爱情 / 心情' }]
  },
  {
    n: 9, zh: '有意思', py: 'yǒu yìsi', pos: 'Cụm từ', vn: 'hay, thú vị', em: '✨', lesson: 2,
    ex_zh: '这个电影比那个爱情片更有意思。', ex_py: 'Zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.', ex_vn: 'Bộ phim này hay hơn bộ phim tình cảm kia.',
    exList: [
      { zh: '这个电影比那个爱情片更有意思。', py: 'Zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.', vn: 'Bộ phim này hay hơn bộ phim tình cảm kia.' },
      { zh: '我昨天看的那个电影很有意思。', py: 'Wǒ zuótiān kàn de nàge diànyǐng hěn yǒu yìsi.', vn: 'Bộ phim hôm qua tôi xem rất hay.' }
    ],
    hanzi: [{ c: '意', p: 'yì', type: '会意字 · Chữ hội ý', st: 13, ord: '立 → 曰 → 心', rad: '心 (tâm)', mean: 'ý, ý nghĩa', tip: 'Phủ định là 没有意思 (chán, không thú vị).', cf: '', w: '有意思 / 没意思 / 意思' }]
  },
  {
    n: 10, zh: '点', py: 'diǎn', pos: 'Động từ', vn: 'gọi, chọn (món)', em: '📋', lesson: 3,
    ex_zh: '怎么点这么多菜？', ex_py: 'Zěnme diǎn zhème duō cài?', ex_vn: 'Sao anh gọi nhiều món thế?',
    exList: [
      { zh: '怎么点这么多菜？', py: 'Zěnme diǎn zhème duō cài?', vn: 'Sao anh gọi nhiều món thế?' },
      { zh: '您好！就要这几个菜吧，谢谢！', py: 'Nín hǎo! Jiù yào zhè jǐ ge cài ba, xièxie!', vn: 'Chào chị! Chúng tôi gọi những món này nhé, cảm ơn!' }
    ],
    hanzi: [{ c: '点', p: 'diǎn', type: '形声字 · Chữ hình thanh', st: 9, ord: '占 → 灬', rad: '灬 (hoả)', mean: 'điểm; giờ; gọi món', tip: 'Cùng chữ 点 trong 几点 (mấy giờ) và 点菜 (gọi món).', cf: '', w: '点菜 / 几点 / 一点儿' }]
  },
  {
    n: 11, zh: '虽然', py: 'suīrán', pos: 'Liên từ', vn: 'mặc dù, tuy', em: '🔀', lesson: 3,
    ex_zh: '虽然你忘了，但是我记得。', ex_py: 'Suīrán nǐ wàng le, dànshì wǒ jìde.', ex_vn: 'Mặc dù em quên, nhưng anh vẫn nhớ.',
    exList: [
      { zh: '虽然你忘了，但是我记得。', py: 'Suīrán nǐ wàng le, dànshì wǒ jìde.', vn: 'Mặc dù em quên, nhưng anh vẫn nhớ.' },
      { zh: '虽然花了一些钱，但是我们过了一个快乐的生日。', py: 'Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.', vn: 'Mặc dù đã tiêu một ít tiền, nhưng chúng ta đã đón một sinh nhật vui vẻ.' }
    ],
    hanzi: [{ c: '虽', p: 'suī', type: '形声字 · Chữ hình thanh', st: 9, ord: '口 → 虫', rad: '虫 (trùng)', mean: 'tuy, mặc dù', tip: '虽然 luôn đứng đầu vế nhượng bộ, đi cặp với 但是.', cf: '因为……所以…… (bài 4)', w: '虽然 / 虽然……但是…… / 虽说' }]
  },
  {
    n: 12, zh: '但是', py: 'dànshì', pos: 'Liên từ', vn: 'nhưng', em: '↩️', lesson: 3,
    ex_zh: '虽然觉得有点儿累，我还是走回家了。', ex_py: 'Suīrán juéde yǒudiǎnr lèi, wǒ háishi zǒu huí jiā le.', ex_vn: 'Tuy thấy hơi mệt, nhưng tôi vẫn đi bộ về nhà.',
    exList: [
      { zh: '外边下雪了，但是不太冷。', py: 'Wàibian xià xuě le, dànshì bú tài lěng.', vn: 'Bên ngoài tuyết rơi, nhưng không lạnh lắm.' },
      { zh: '喜欢，但我游泳游得不快。', py: 'Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.', vn: 'Có thích, nhưng tôi bơi không nhanh.' }
    ],
    hanzi: [{ c: '但', p: 'dàn', type: '形声字 · Chữ hình thanh', st: 7, ord: '亻 → 旦', rad: '亻 (nhân đứng)', mean: 'nhưng', tip: 'Có thể rút gọn thành 但 hoặc thay bằng 可是.', cf: '可是 (kěshì)', w: '但是 / 但 / 虽然……但是……' }]
  },
  {
    n: 13, zh: '花', py: 'huā', pos: 'Động từ', vn: 'tiêu, chi tiêu', em: '💸', lesson: 3,
    ex_zh: '今天花了不少钱吧？', ex_py: 'Jīntiān huāle bù shǎo qián ba?', ex_vn: 'Hôm nay anh đã tiêu không ít tiền nhỉ?',
    exList: [
      { zh: '今天花了不少钱吧？', py: 'Jīntiān huāle bù shǎo qián ba?', vn: 'Hôm nay anh đã tiêu không ít tiền nhỉ?' },
      { zh: '虽然花了一些钱，但是我们很快乐。', py: 'Suīrán huāle yìxiē qián, dànshì wǒmen hěn kuàilè.', vn: 'Mặc dù tiêu một ít tiền, nhưng chúng ta rất vui.' }
    ],
    hanzi: [{ c: '花', p: 'huā', type: '形声字 · Chữ hình thanh', st: 7, ord: '艹 → 化', rad: '艹 (thảo – cỏ)', mean: 'hoa; tiêu (tiền)', tip: '花钱 = tiêu tiền; 花时间 = mất thời gian.', cf: '', w: '花钱 / 花时间 / 花儿' }]
  },
  {
    n: 14, zh: '妻子', py: 'qīzi', pos: 'Danh từ', vn: 'vợ', em: '👩', lesson: 4,
    ex_zh: '虽然妻子忘了今天是自己的生日，但是丈夫记得。', ex_py: 'Suīrán qīzi wàngle jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde.', ex_vn: 'Mặc dù người vợ quên hôm nay là sinh nhật của mình, nhưng người chồng vẫn nhớ.',
    exList: [
      { zh: '虽然妻子忘了今天是自己的生日，但是丈夫记得。', py: 'Suīrán qīzi wàngle jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde.', vn: 'Mặc dù người vợ quên hôm nay là sinh nhật của mình, nhưng người chồng vẫn nhớ.' },
      { zh: '妻子觉得今天很快乐。', py: 'Qīzi juéde jīntiān hěn kuàilè.', vn: 'Người vợ cảm thấy hôm nay rất vui.' }
    ],
    hanzi: [{ c: '妻', p: 'qī', type: '会意字 · Chữ hội ý', st: 8, ord: '十 → 彐 → 女', rad: '女 (nữ)', mean: 'vợ', tip: 'Cặp từ 妻子 ↔ 丈夫 dùng khi nói trang trọng.', cf: '丈夫 (zhàngfu – chồng)', w: '妻子 / 我的妻子' }]
  },
  {
    n: 15, zh: '丈夫', py: 'zhàngfu', pos: 'Danh từ', vn: 'chồng', em: '👨', lesson: 4,
    ex_zh: '丈夫请妻子去饭馆吃饭。', ex_py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn.', ex_vn: 'Người chồng mời vợ đi ăn ở nhà hàng.',
    exList: [
      { zh: '丈夫请妻子去饭馆吃饭。', py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn.', vn: 'Người chồng mời vợ đi ăn ở nhà hàng.' },
      { zh: '丈夫还给妻子买了一块手表。', py: 'Zhàngfu hái gěi qīzi mǎile yí kuài shǒubiǎo.', vn: 'Người chồng còn mua cho vợ một chiếc đồng hồ.' }
    ],
    hanzi: [{ c: '丈', p: 'zhàng', type: '指事字 · Chữ chỉ sự', st: 3, ord: '一 → 丿 → 乀', rad: '一 (nhất)', mean: 'trượng; chồng', tip: 'Ở đây 请 mang nghĩa "请客" — mời (và trả tiền).', cf: '妻子 (qīzi – vợ)', w: '丈夫 / 我丈夫' }]
  },
  {
    n: 16, zh: '饭馆', py: 'fànguǎn', pos: 'Danh từ', vn: 'nhà hàng, quán ăn', em: '🍜', lesson: 4,
    ex_zh: '丈夫请妻子去饭馆吃饭。', ex_py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn.', ex_vn: 'Người chồng mời vợ đi ăn ở nhà hàng.',
    exList: [
      { zh: '丈夫请妻子去饭馆吃饭。', py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn.', vn: 'Người chồng mời vợ đi ăn ở nhà hàng.' },
      { zh: '我觉得你做的菜比饭馆的菜还好吃。', py: 'Wǒ juéde nǐ zuò de cài bǐ fànguǎn de cài hái hǎochī.', vn: 'Em thấy món anh nấu còn ngon hơn món ở nhà hàng.' }
    ],
    hanzi: [{ c: '馆', p: 'guǎn', type: '形声字 · Chữ hình thanh', st: 11, ord: '饣 → 官', rad: '饣 (thực – ăn)', mean: 'quán, nhà (công cộng)', tip: 'Bộ 饣 gợi việc ăn uống: 饭馆 là nơi để ăn cơm.', cf: '', w: '饭馆 / 去饭馆 / 图书馆' }]
  }
];

var wuData = [
  { img: '⌚', label: '手表', py: 'shǒubiǎo', letter: 'A' },
  { img: '⬅️', label: '左边', py: 'zuǒbian', letter: 'B' },
  { img: '➡️', label: '右边', py: 'yòubian', letter: 'C' },
  { img: '💕', label: '爱情片', py: 'àiqíngpiàn', letter: 'D' },
  { img: '🍜', label: '饭馆', py: 'fànguǎn', letter: 'E' },
  { img: '👩', label: '妻子', py: 'qīzi', letter: 'F' }
];

var dialogData = [
  {
    scene: '在商场 · Trong trung tâm thương mại (chọn đồng hồ)',
    preQuiz: [
      { q: '王一雪和刘明在看什么？', opts: ['钱', '手表', '裤子'], ans: 1 },
      { q: '王一雪和刘明看的东西多少钱？', opts: ['5800元', '6800元', '8800元'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '你看，这两块手表怎么样？', py: 'Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?', vn: 'Anh nhìn này, hai chiếc đồng hồ này thế nào?' },
      { sp: 1, zh: '都不错！', py: 'Dōu búcuò!', vn: 'Đều rất đẹp!' },
      { sp: 0, zh: '我喜欢左边这个。', py: 'Wǒ xǐhuan zuǒbian zhège.', vn: 'Em thích chiếc bên trái này.' },
      { sp: 1, zh: '我也觉得左边的比右边的好看。', py: 'Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.', vn: 'Anh cũng thấy chiếc bên trái đẹp hơn chiếc bên phải.' },
      { sp: 0, zh: '你看看要多少钱！', py: 'Nǐ kànkan yào duōshao qián!', vn: 'Anh nhìn xem bao nhiêu tiền!' },
      { sp: 1, zh: '真不便宜！八千八！', py: 'Zhēn bù piányi! Bā qiān bā!', vn: 'Thật không rẻ! Tám nghìn tám!' }
    ]
  },
  {
    scene: '在电影院外面 · Bên ngoài rạp chiếu phim',
    preQuiz: [
      { q: '王一雪和刘明要去做什么？', opts: ['去吃饭', '看电影', '买东西'], ans: 1 },
      { q: '王一雪要在哪儿买票？', opts: ['网上', '电影院', '商场里'], ans: 0 }
    ],
    lines: [
      { sp: 1, zh: '今天有不少电影，我们看个电影吧。', py: 'Jīntiān yǒu bù shǎo diànyǐng, wǒmen kàn ge diànyǐng ba.', vn: 'Hôm nay có rất nhiều phim, chúng ta đi xem phim nhé.' },
      { sp: 0, zh: '好啊！我们看哪个？', py: 'Hǎo a! Wǒmen kàn nǎge?', vn: 'Hay quá! Chúng ta xem phim nào?' },
      { sp: 1, zh: '我记得你喜欢看爱情片，我们看那个爱情片，怎么样？', py: 'Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn, wǒmen kàn nàge àiqíngpiàn, zěnmeyàng?', vn: 'Anh nhớ là em thích xem phim tình cảm, hay chúng ta xem bộ phim tình cảm kia, được không?' },
      { sp: 0, zh: '还是看这个吧，我看网上说这个电影比那个爱情片更有意思。', py: 'Háishi kàn zhège ba, wǒ kàn wǎngshang shuō zhège diànyǐng bǐ nàge àiqíngpiàn gèng yǒu yìsi.', vn: 'Xem bộ phim này đi, em thấy trên mạng nói bộ phim này hay hơn bộ phim tình cảm đó.' },
      { sp: 1, zh: '好。我去买票。', py: 'Hǎo. Wǒ qù mǎi piào.', vn: 'Được, anh đi mua vé.' },
      { sp: 0, zh: '到网上买吧，网上买比在这里买便宜。', py: 'Dào wǎngshang mǎi ba, wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.', vn: 'Mua trên mạng đi ạ, mua trên mạng rẻ hơn mua ở đây.' }
    ]
  },
  {
    scene: '在饭馆 · Trong nhà hàng (gọi món)',
    preQuiz: [
      { q: '今天是几月几号？', opts: ['1月21号', '1月27号', '8月27号'], ans: 2 },
      { q: '刘明给王一雪买了什么礼物？', opts: ['手表', '电影票', '好吃的'], ans: 0 }
    ],
    lines: [
      { sp: 1, zh: '您好！就要这几个菜吧，谢谢！', py: 'Nín hǎo! Jiù yào zhè jǐ ge cài ba, xièxie!', vn: 'Chào chị! Chúng tôi sẽ gọi những món này nhé, cảm ơn!' },
      { sp: 0, zh: '怎么点这么多菜？', py: 'Zěnme diǎn zhème duō cài?', vn: 'Sao anh gọi nhiều món thế?' },
      { sp: 1, zh: '你想想，今天是几月几号？', py: 'Nǐ xiǎngxiang, jīntiān shì jǐ yuè jǐ hào?', vn: 'Em thử nghĩ xem, hôm nay là ngày mấy, tháng mấy vậy?' },
      { sp: 0, zh: '8月27号。啊！我的生日！', py: 'Bā yuè èrshíqī hào. À! Wǒ de shēngrì!', vn: 'Ngày 27 tháng 8. À! Là ngày sinh nhật của em!' },
      { sp: 1, zh: '生日快乐！虽然你忘了，但是我记得。看看这是什么？', py: 'Shēngrì kuàilè! Suīrán nǐ wàng le, dànshì wǒ jìde. Kànkan zhè shì shénme?', vn: 'Chúc mừng sinh nhật! Mặc dù em quên, nhưng anh vẫn nhớ. Em nhìn xem, đây là cái gì nào?' },
      { sp: 0, zh: '手表！吃饭、看电影、买手表，今天花了不少钱吧？', py: 'Shǒubiǎo! Chīfàn, kàn diànyǐng, mǎi shǒubiǎo, jīntiān huāle bù shǎo qián ba?', vn: 'Đồng hồ đeo tay! Ăn cơm, xem phim, rồi còn mua đồng hồ nữa. Hôm nay anh đã tiêu không ít tiền nhỉ?' },
      { sp: 1, zh: '虽然花了一些钱，但是我们过了一个快乐的生日。', py: 'Suīrán huāle yìxiē qián, dànshì wǒmen guòle yí ge kuàilè de shēngrì.', vn: 'Mặc dù đã tiêu một ít tiền, nhưng chúng ta đã đón một sinh nhật vui vẻ.' }
    ]
  },
  {
    scene: '小语讲述 · Tiểu Ngữ thuật lại một ngày của hai vợ chồng',
    preQuiz: [
      { q: '丈夫忘了妻子的生日吗？', opts: ['忘了', '没忘，他记得', '不知道'], ans: 1 },
      { q: '丈夫给妻子买了什么？', opts: ['一块手表', '一个蛋糕', '一件衣服'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '虽然妻子忘了今天是自己的生日，但是丈夫记得。', py: 'Suīrán qīzi wàngle jīntiān shì zìjǐ de shēngrì, dànshì zhàngfu jìde.', vn: 'Mặc dù người vợ quên mất hôm nay là sinh nhật của mình, nhưng người chồng vẫn nhớ.' },
      { sp: 0, zh: '丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。', py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn, qù diànyǐngyuàn kàn diànyǐng, hái gěi qīzi mǎile yí kuài fēicháng piàoliang de shǒubiǎo.', vn: 'Anh ấy mời vợ đi ăn ở nhà hàng, đi xem phim ở rạp chiếu phim, còn mua cho cô ấy một chiếc đồng hồ rất đẹp.' },
      { sp: 0, zh: '妻子觉得今天很快乐。', py: 'Qīzi juéde jīntiān hěn kuàilè.', vn: 'Người vợ cảm thấy hôm nay rất vui.' }
    ]
  }
];

var listenData = [
  {
    audio: '你看，这两块手表怎么样？都不错！我喜欢左边这个。我也觉得左边的比右边的好看。你看看要多少钱！真不便宜！八千八！',
    questions: [
      { q: '他们在看什么？', opts: ['钱', '手表', '裤子'], ans: 1 },
      { q: '这块手表多少钱？', opts: ['5800元', '6800元', '8800元'], ans: 2 }
    ]
  },
  {
    audio: '今天有不少电影，我们看个电影吧。我记得你喜欢看爱情片。还是看这个吧，网上说这个电影比那个爱情片更有意思。到网上买票吧，网上买比在这里买便宜。',
    questions: [
      { q: '他们要去做什么？', opts: ['去吃饭', '看电影', '买东西'], ans: 1 },
      { q: '在哪儿买票更便宜？', opts: ['网上', '电影院', '商场里'], ans: 0 }
    ]
  },
  {
    audio: '你想想，今天是几月几号？8月27号。啊！我的生日！生日快乐！虽然你忘了，但是我记得。',
    questions: [
      { q: '今天是几月几号？', opts: ['1月21号', '1月27号', '8月27号'], ans: 2 },
      { q: '谁记得这个生日？', opts: ['妻子', '丈夫', '两个人都忘了'], ans: 1 }
    ]
  },
  {
    audio: '虽然妻子忘了今天是自己的生日，但是丈夫记得。丈夫请妻子去饭馆吃饭、去电影院看电影，还给妻子买了一块非常漂亮的手表。妻子觉得今天很快乐。',
    questions: [
      { q: '丈夫没请妻子做什么？', opts: ['去吃饭', '看电影', '去唱歌'], ans: 2 },
      { q: '妻子今天觉得怎么样？', opts: ['很快乐', '很累', '不高兴'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '左边的', right: '比右边的好看' },
  { left: '虽然你忘了', right: '但是我记得' },
  { left: '点', right: '菜' },
  { left: '花', right: '钱' },
  { left: '一块', right: '手表' },
  { left: '去饭馆', right: '吃饭' }
];

var fillData = [
  { pre: '我的', blank: '手表', post: '在哪儿？你看见了吗？', hint: '(đồng hồ đeo tay)', ans: '手表' },
  { pre: '我', blank: '记得', post: '那个超市卖画笔，我们过去看看。', hint: '(nhớ)', ans: '记得' },
  { pre: '我们在商场买了很多东西，', blank: '花', post: '了很多钱。', hint: '(tiêu tiền)', ans: '花' },
  { pre: '我昨天看的那个电影很', blank: '有意思', post: '。', hint: '(hay, thú vị)', ans: '有意思' },
  { pre: '我也觉得', blank: '左边', post: '的比右边的好看。', hint: '(bên trái)', ans: '左边' },
  { pre: '今天', blank: '比', post: '昨天冷。', hint: '(so với)', ans: '比' },
  { pre: '', blank: '虽然', post: '你忘了，但是我记得。', hint: '(mặc dù)', ans: '虽然' },
  { pre: '丈夫请妻子去', blank: '饭馆', post: '吃饭。', hint: '(nhà hàng)', ans: '饭馆' }
];

var sortData = [
  { words: ['左边', '的', '比', '右边', '的', '好看', '。'], ans: '左边的比右边的好看。', audio: '左边的比右边的好看。' },
  { words: ['今天', '比', '昨天', '更', '热', '。'], ans: '今天比昨天更热。', audio: '今天比昨天更热。' },
  { words: ['网上', '买', '比', '在', '这里', '买', '便宜', '。'], ans: '网上买比在这里买便宜。', audio: '网上买比在这里买便宜。' },
  { words: ['虽然', '你', '忘', '了', '，', '但是', '我', '记得', '。'], ans: '虽然你忘了，但是我记得。', audio: '虽然你忘了，但是我记得。' },
  { words: ['丈夫', '请', '妻子', '去', '饭馆', '吃饭', '。'], ans: '丈夫请妻子去饭馆吃饭。', audio: '丈夫请妻子去饭馆吃饭。' },
  { words: ['今天', '花', '了', '不少', '钱', '吧', '？'], ans: '今天花了不少钱吧？', audio: '今天花了不少钱吧？' }
];

var mcData = [
  { q: '我觉得奶茶比牛奶＿＿好喝。', opts: ['还', '很', '非常', '太'], ans: 0 },
  { q: '今天＿＿昨天更热。', opts: ['比', '跟', '和', '从'], ans: 0 },
  { q: '＿＿你忘了，但是我记得。', opts: ['虽然', '因为', '所以', '如果'], ans: 0 },
  { q: 'A：这个人是你妹妹吗？ B：是我姐姐，她＿＿我大。', opts: ['比', '跟', '很', '更'], ans: 0 },
  { q: 'Câu nào SAI?', opts: ['左边的比右边的很好看。', '左边的比右边的好看。', '左边的比右边的更好看。', '左边的比右边的还好看。'], ans: 0 },
  { q: '“花钱” nghĩa là gì?', opts: ['Tiêu tiền', 'Kiếm tiền', 'Đổi tiền', 'Mượn tiền'], ans: 0 },
  { q: '在饭馆我们要先做什么？', opts: ['点菜', '买票', '买手表', '跑步'], ans: 0 },
  { q: '“记得” trái nghĩa với từ nào?', opts: ['忘', '想', '看', '花'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '这两块手表，你觉得哪块好看？为什么？',
      q_vn: 'Hai chiếc đồng hồ này, bạn thấy chiếc nào đẹp? Vì sao?',
      hint: '我觉得……比……好看。',
      sample: '我喜欢左边这块，我觉得左边的比右边的好看，但是有点儿贵。',
      sample_vn: 'Tôi thích chiếc bên trái, tôi thấy chiếc bên trái đẹp hơn chiếc bên phải, nhưng hơi đắt.',
      note: 'A 比 B + tính từ — không thêm 很/非常 trước tính từ.'
    },
    {
      q_zh: '你喜欢看什么电影？为什么？',
      q_vn: 'Bạn thích xem phim gì? Vì sao?',
      hint: '我喜欢看……，因为……比……更有意思。',
      sample: '我喜欢看爱情片，因为我觉得爱情片比别的电影更有意思。',
      sample_vn: 'Tôi thích xem phim tình cảm, vì tôi thấy phim tình cảm thú vị hơn các phim khác.',
      note: 'Dùng 更/还 để nhấn mức độ cao hơn trong câu so sánh.'
    },
    {
      q_zh: '在网上买东西和在商场买东西，哪个更便宜？',
      q_vn: 'Mua hàng trên mạng và mua ở trung tâm thương mại, cái nào rẻ hơn?',
      hint: '……买比……买便宜。',
      sample: '我觉得网上买比在商场买便宜，虽然要等几天，但是可以花少一点儿钱。',
      sample_vn: 'Tôi thấy mua trên mạng rẻ hơn mua ở trung tâm thương mại, tuy phải đợi vài ngày nhưng tiêu ít tiền hơn.',
      note: 'Kết hợp câu so sánh với 虽然……但是…….'
    },
    {
      q_zh: '你忘过朋友或者家人的生日吗？那天怎么样？',
      q_vn: 'Bạn từng quên sinh nhật của bạn bè hay người nhà chưa? Hôm đó thế nào?',
      hint: '虽然我忘了，但是……',
      sample: '虽然我忘了他的生日，但是我记得给他打电话，还请他去饭馆吃饭。',
      sample_vn: 'Mặc dù tôi quên sinh nhật của bạn ấy, nhưng tôi vẫn nhớ gọi điện và mời bạn ấy đi ăn ở nhà hàng.',
      note: '虽然……但是…… nối hai vế trái ngược nhau.'
    },
    {
      q_zh: '你今天花了多少钱？都买了什么？',
      q_vn: 'Hôm nay bạn tiêu bao nhiêu tiền? Đã mua những gì?',
      hint: '我今天花了……，买了……什么的。',
      sample: '我今天花了不少钱，吃饭、看电影、买手表什么的，虽然花了一些钱，但是我很快乐。',
      sample_vn: 'Hôm nay tôi tiêu không ít tiền: ăn cơm, xem phim, mua đồng hồ… Tuy tiêu một ít tiền nhưng tôi rất vui.',
      note: 'Ôn lại “什么的” của bài 6 trong câu nói về chi tiêu.'
    }
  ]
};

var translateData = [
  { vi: 'Anh cũng thấy chiếc bên trái đẹp hơn chiếc bên phải.', zh: '我也觉得左边的比右边的好看。', py: 'Wǒ yě juéde zuǒbian de bǐ yòubian de hǎokàn.' },
  { vi: 'Mua trên mạng rẻ hơn mua ở đây.', zh: '网上买比在这里买便宜。', py: 'Wǎngshang mǎi bǐ zài zhèlǐ mǎi piányi.' },
  { vi: 'Mặc dù em quên, nhưng anh vẫn nhớ.', zh: '虽然你忘了，但是我记得。', py: 'Suīrán nǐ wàng le, dànshì wǒ jìde.' },
  { vi: 'Hôm nay anh đã tiêu không ít tiền nhỉ?', zh: '今天花了不少钱吧？', py: 'Jīntiān huāle bù shǎo qián ba?' },
  { vi: 'Người chồng mời vợ đi ăn ở nhà hàng.', zh: '丈夫请妻子去饭馆吃饭。', py: 'Zhàngfu qǐng qīzi qù fànguǎn chīfàn.' }
];

var translateDataRev = [
  { vi: 'Anh nhìn này, hai chiếc đồng hồ này thế nào?', zh: '你看，这两块手表怎么样？', py: 'Nǐ kàn, zhè liǎng kuài shǒubiǎo zěnmeyàng?' },
  { vi: 'Thật không rẻ! Tám nghìn tám!', zh: '真不便宜！八千八！', py: 'Zhēn bù piányi! Bā qiān bā!' },
  { vi: 'Anh nhớ là em thích xem phim tình cảm.', zh: '我记得你喜欢看爱情片。', py: 'Wǒ jìde nǐ xǐhuan kàn àiqíngpiàn.' },
  { vi: 'Sao anh gọi nhiều món thế?', zh: '怎么点这么多菜？', py: 'Zěnme diǎn zhème duō cài?' },
  { vi: 'Người vợ cảm thấy hôm nay rất vui.', zh: '妻子觉得今天很快乐。', py: 'Qīzi juéde jīntiān hěn kuàilè.' }
];
