// HSK 2 (3.0 Mới) · Bài 4 · 你穿红色的很好看
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 4, trang 029-036.

var vocabData = [
  {
    n: 1, zh: '过', py: 'guo', pos: 'Trợ từ', vn: 'đã từng', em: '🕰️', lesson: 1,
    ex_zh: '我们来过这家商场吗？', ex_py: 'Wǒmen láiguo zhè jiā shāngchǎng ma?', ex_vn: 'Chúng ta đã từng đến trung tâm mua sắm này chưa?',
    exList: [
      { zh: '我们来过这家商场吗？', py: 'Wǒmen láiguo zhè jiā shāngchǎng ma?', vn: 'Chúng ta đã từng đến trung tâm mua sắm này chưa?' },
      { zh: '她去过中国。', py: 'Tā qùguo Zhōngguó.', vn: 'Cô ấy từng đến Trung Quốc.' }
    ],
    hanzi: [{ c: '过', p: 'guò', type: '形声字 · Chữ hình thanh', st: 6, ord: '寸 → 辶', rad: '辶 (sước – đi)', mean: 'qua; từng', tip: 'Đọc nhẹ "guo" khi làm trợ từ động thái: 吃过、去过。', cf: '', w: '来过 / 去过 / 吃过' }]
  },
  {
    n: 2, zh: '商场', py: 'shāngchǎng', pos: 'Danh từ', vn: 'trung tâm thương mại', em: '🏬', lesson: 1,
    ex_zh: '我和妈妈去了一家商场。', ex_py: 'Wǒ hé māma qùle yì jiā shāngchǎng.', ex_vn: 'Mình đã đi đến một trung tâm thương mại với mẹ.',
    exList: [
      { zh: '我和妈妈去了一家商场。', py: 'Wǒ hé māma qùle yì jiā shāngchǎng.', vn: 'Mình đã đi đến một trung tâm thương mại với mẹ.' },
      { zh: '商场里的东西很便宜。', py: 'Shāngchǎng li de dōngxi hěn piányi.', vn: 'Đồ trong trung tâm thương mại rất rẻ.' }
    ],
    hanzi: [{ c: '商', p: 'shāng', type: '形声字 · Chữ hình thanh', st: 11, ord: '亠 → 丷 → 冂 → 八 → 口', rad: '口 (khẩu – miệng)', mean: 'buôn bán, thương mại', tip: '商场 = nơi buôn bán lớn; 商店 = cửa hàng.', cf: '', w: '商场 / 商店 / 商量' }]
  },
  {
    n: 3, zh: '进去', py: 'jìnqù', pos: 'Động từ', vn: 'đi vào', em: '🚪', lesson: 1,
    ex_zh: '我们进去看看吧。', ex_py: 'Wǒmen jìnqù kànkan ba.', ex_vn: 'Chúng ta đi vào xem một chút nhé.',
    exList: [
      { zh: '我们进去看看吧。', py: 'Wǒmen jìnqù kànkan ba.', vn: 'Chúng ta đi vào xem một chút nhé.' },
      { zh: '我看见老师在教室里，你进去找她吧。', py: 'Wǒ kànjiàn lǎoshī zài jiàoshì li, nǐ jìnqù zhǎo tā ba.', vn: 'Tôi thấy cô giáo ở trong lớp, bạn vào tìm cô ấy đi.' }
    ],
    hanzi: [{ c: '进', p: 'jìn', type: '形声字 · Chữ hình thanh', st: 7, ord: '井 → 辶', rad: '辶 (sước – đi)', mean: 'vào, tiến vào', tip: '进去 = vào (xa người nói); 进来 = vào (về phía người nói).', cf: '', w: '进去 / 进来 / 进步' }]
  },
  {
    n: 4, zh: '条', py: 'tiáo', pos: 'Lượng từ', vn: 'cái, chiếc (quần, váy, cá, sông…)', em: '👖', lesson: 1,
    ex_zh: '我想买条裤子。', ex_py: 'Wǒ xiǎng mǎi tiáo kùzi.', ex_vn: 'Con muốn mua chiếc quần.',
    exList: [
      { zh: '我想买条裤子。', py: 'Wǒ xiǎng mǎi tiáo kùzi.', vn: 'Con muốn mua chiếc quần.' },
      { zh: '你已经有一条黑色的裤子了。', py: 'Nǐ yǐjīng yǒu yì tiáo hēisè de kùzi le.', vn: 'Con đã có một chiếc quần đen rồi.' }
    ],
    hanzi: [{ c: '条', p: 'tiáo', type: '会意字 · Chữ hội ý', st: 7, ord: '夂 → 木', rad: '木 (mộc – cây)', mean: 'sợi, chiếc (vật dài)', tip: 'Dùng cho vật dài: 一条裤子、一条鱼、一条路。', cf: '', w: '一条裤子 / 一条鱼 / 一条街' }]
  },
  {
    n: 5, zh: '裤子', py: 'kùzi', pos: 'Danh từ', vn: 'quần', em: '👖', lesson: 1,
    ex_zh: '我想买这条白色的裤子。', ex_py: 'Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.', ex_vn: 'Con muốn mua chiếc quần màu trắng này.',
    exList: [
      { zh: '我想买这条白色的裤子。', py: 'Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.', vn: 'Con muốn mua chiếc quần màu trắng này.' },
      { zh: '我没穿过红色的裤子。', py: 'Wǒ méi chuānguo hóngsè de kùzi.', vn: 'Con chưa từng mặc quần màu đỏ.' }
    ],
    hanzi: [{ c: '裤', p: 'kù', type: '形声字 · Chữ hình thanh', st: 12, ord: '衤 → 广 → 车', rad: '衤 (y – áo)', mean: 'quần', tip: 'Bộ 衤 (áo quần) cho biết chữ liên quan đến trang phục.', cf: '', w: '裤子 / 短裤' }]
  },
  {
    n: 6, zh: '白色', py: 'báisè', pos: 'Danh từ', vn: 'màu trắng', em: '⚪', lesson: 2,
    ex_zh: '你有很多白色的衣服。', ex_py: 'Nǐ yǒu hěn duō báisè de yīfu.', ex_vn: 'Con đã có rất nhiều quần áo màu trắng rồi.',
    exList: [
      { zh: '你有很多白色的衣服。', py: 'Nǐ yǒu hěn duō báisè de yīfu.', vn: 'Con đã có rất nhiều quần áo màu trắng rồi.' },
      { zh: '我觉得这条白色的不太好看。', py: 'Wǒ juéde zhè tiáo báisè de bú tài hǎokàn.', vn: 'Mẹ thấy chiếc màu trắng này không đẹp lắm.' }
    ],
    hanzi: [{ c: '色', p: 'sè', type: '会意字 · Chữ hội ý', st: 6, ord: '⺈ → 巴', rad: '色 (sắc)', mean: 'màu sắc', tip: 'Ghép với màu: 白色、红色、绿色、黑色。', cf: '', w: '白色 / 红色 / 颜色' }]
  },
  {
    n: 7, zh: '因为', py: 'yīnwèi', pos: 'Liên từ', vn: 'bởi vì, vì', em: '🔗', lesson: 2,
    ex_zh: '因为我喜欢白色啊！', ex_py: 'Yīnwèi wǒ xǐhuan báisè a!', ex_vn: 'Vì con thích màu trắng ạ.',
    exList: [
      { zh: '因为我喜欢白色啊！', py: 'Yīnwèi wǒ xǐhuan báisè a!', vn: 'Vì con thích màu trắng ạ.' },
      { zh: '因为我生病了，今天没去上班。', py: 'Yīnwèi wǒ shēngbìng le, jīntiān méi qù shàngbān.', vn: 'Vì tôi bị ốm nên hôm nay không đi làm.' }
    ],
    hanzi: [{ c: '因', p: 'yīn', type: '会意字 · Chữ hội ý', st: 6, ord: '囗 → 大', rad: '囗 (vi – bao quanh)', mean: 'nguyên nhân', tip: '因为 thường đi cặp với 所以.', cf: '', w: '因为 / 原因' }]
  },
  {
    n: 8, zh: '试', py: 'shì', pos: 'Động từ', vn: 'thử', em: '🧪', lesson: 2,
    ex_zh: '你试试那条红色的吧。', ex_py: 'Nǐ shìshi nà tiáo hóngsè de ba.', ex_vn: 'Con thử chiếc màu đỏ kia xem sao.',
    exList: [
      { zh: '你试试那条红色的吧。', py: 'Nǐ shìshi nà tiáo hóngsè de ba.', vn: 'Con thử chiếc màu đỏ kia xem sao.' },
      { zh: '妈妈让我试了试。', py: 'Māma ràng wǒ shìle shì.', vn: 'Mẹ đã bảo mình thử xem.' }
    ],
    hanzi: [{ c: '试', p: 'shì', type: '形声字 · Chữ hình thanh', st: 8, ord: '讠 → 式', rad: '讠 (ngôn – lời nói)', mean: 'thử, thi', tip: '试试 (thử một chút) là dạng lặp của động từ đơn âm tiết.', cf: '', w: '试试 / 考试 / 试衣服' }]
  },
  {
    n: 9, zh: '红色', py: 'hóngsè', pos: 'Danh từ', vn: 'màu đỏ', em: '🔴', lesson: 2,
    ex_zh: '我没穿过红色的。', ex_py: 'Wǒ méi chuānguo hóngsè de.', ex_vn: 'Con chưa từng mặc màu đỏ.',
    exList: [
      { zh: '我没穿过红色的。', py: 'Wǒ méi chuānguo hóngsè de.', vn: 'Con chưa từng mặc màu đỏ.' },
      { zh: '你穿红色的很好看。', py: 'Nǐ chuān hóngsè de hěn hǎokàn.', vn: 'Con mặc đồ màu đỏ rất đẹp.' }
    ],
    hanzi: [{ c: '红', p: 'hóng', type: '形声字 · Chữ hình thanh', st: 6, ord: '纟 → 工', rad: '纟 (mịch – sợi tơ)', mean: 'màu đỏ', tip: 'Bộ 纟 vì ngày xưa màu sắc gắn với việc nhuộm vải.', cf: '', w: '红色 / 红茶 / 很红' }]
  },
  {
    n: 10, zh: '所以', py: 'suǒyǐ', pos: 'Liên từ', vn: 'cho nên, nên', em: '➡️', lesson: 2,
    ex_zh: '就是因为没穿过，所以要试试啊！', ex_py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!', ex_vn: 'Chính là vì chưa từng mặc nên cần phải thử xem.',
    exList: [
      { zh: '就是因为没穿过，所以要试试啊！', py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!', vn: 'Chính là vì chưa từng mặc nên cần phải thử xem.' },
      { zh: '因为是新开的，所以这几天东西很便宜。', py: 'Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.', vn: 'Vì mới khai trương nên mấy hôm nay đồ rất rẻ.' }
    ],
    hanzi: [{ c: '所', p: 'suǒ', type: '形声字 · Chữ hình thanh', st: 8, ord: '户 → 斤', rad: '户 (hộ – cửa)', mean: 'nơi; (kết cấu)', tip: '所以 = vì vậy, đứng ở vế kết quả.', cf: '', w: '所以 / 所有 / 厕所' }]
  },
  {
    n: 11, zh: '书包', py: 'shūbāo', pos: 'Danh từ', vn: 'cặp sách', em: '🎒', lesson: 3,
    ex_zh: '妈妈，我想买个新书包。', ex_py: 'Māma, wǒ xiǎng mǎi ge xīn shūbāo.', ex_vn: 'Mẹ ơi, con muốn mua cặp sách mới ạ.',
    exList: [
      { zh: '妈妈，我想买个新书包。', py: 'Māma, wǒ xiǎng mǎi ge xīn shūbāo.', vn: 'Mẹ ơi, con muốn mua cặp sách mới ạ.' },
      { zh: '这么多漂亮的书包！', py: 'Zhème duō piàoliang de shūbāo!', vn: 'Bao nhiêu là cặp sách đẹp!' }
    ],
    hanzi: [{ c: '包', p: 'bāo', type: '象形字 · Chữ tượng hình', st: 5, ord: '⺈ → 巳', rad: '勹 (bao)', mean: 'túi, bọc', tip: '书包 = túi đựng sách; 面包 = bánh mì.', cf: '', w: '书包 / 面包 / 包子' }]
  },
  {
    n: 12, zh: '过去', py: 'guòqù', pos: 'Động từ', vn: 'sang, đi sang', em: '➡️', lesson: 3,
    ex_zh: '那边卖书包，我们过去看看吧。', ex_py: 'Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.', ex_vn: 'Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.',
    exList: [
      { zh: '那边卖书包，我们过去看看吧。', py: 'Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.', vn: 'Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.' },
      { zh: '你过去拿一下，好吗？', py: 'Nǐ guòqù ná yíxià, hǎo ma?', vn: 'Bạn sang lấy giúp một chút được không?' }
    ],
    hanzi: [{ c: '去', p: 'qù', type: '会意字 · Chữ hội ý', st: 5, ord: '土 → 厶', rad: '厶 (khư)', mean: 'đi, đến', tip: '过去 (sang đó) ↔ 过来 (sang đây).', cf: '过来 (guòlái)', w: '过去 / 过来 / 出去' }]
  },
  {
    n: 13, zh: '绿色', py: 'lǜsè', pos: 'Danh từ', vn: 'màu xanh lá cây', em: '🟢', lesson: 3,
    ex_zh: '我也觉得绿色的更好看。', ex_py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.', ex_vn: 'Mẹ cũng thấy cái màu xanh lá cây đẹp hơn.',
    exList: [
      { zh: '我也觉得绿色的更好看。', py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.', vn: 'Mẹ cũng thấy cái màu xanh lá cây đẹp hơn.' },
      { zh: '绿色的书包在那边。', py: 'Lǜsè de shūbāo zài nàbiān.', vn: 'Cặp sách màu xanh lá ở đằng kia.' }
    ],
    hanzi: [{ c: '绿', p: 'lǜ', type: '形声字 · Chữ hình thanh', st: 11, ord: '纟 → 录', rad: '纟 (mịch – sợi tơ)', mean: 'màu xanh lá', tip: '绿 (xanh lá) khác 蓝 (xanh lam).', cf: '蓝 (lán – xanh lam)', w: '绿色 / 绿茶 / 很绿' }]
  },
  {
    n: 14, zh: '黑色', py: 'hēisè', pos: 'Danh từ', vn: 'màu đen', em: '⚫', lesson: 3,
    ex_zh: '红色的、绿色的、黑色的，你想买哪个？', ex_py: 'Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?', ex_vn: 'Cái màu đỏ, màu xanh lá, màu đen, con muốn mua cái nào?',
    exList: [
      { zh: '红色的、绿色的、黑色的，你想买哪个？', py: 'Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?', vn: 'Cái màu đỏ, màu xanh lá, màu đen, con muốn mua cái nào?' },
      { zh: '你已经有一条黑色的裤子了。', py: 'Nǐ yǐjīng yǒu yì tiáo hēisè de kùzi le.', vn: 'Con đã có một chiếc quần màu đen rồi.' }
    ],
    hanzi: [{ c: '黑', p: 'hēi', type: '会意字 · Chữ hội ý', st: 12, ord: '口 → 土 → 灬', rad: '黑 (hắc)', mean: 'đen', tip: 'Phần dưới là bộ 灬 (lửa) — khói lửa làm ám đen.', cf: '', w: '黑色 / 黑板 / 天黑了' }]
  },
  {
    n: 15, zh: '更', py: 'gèng', pos: 'Phó từ', vn: 'càng, hơn', em: '⬆️', lesson: 3,
    ex_zh: '我也觉得绿色的更好看。', ex_py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.', ex_vn: 'Mình cũng thấy cái màu xanh lá đẹp hơn.',
    exList: [
      { zh: '我也觉得绿色的更好看。', py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.', vn: 'Mình cũng thấy cái màu xanh lá đẹp hơn.' },
      { zh: '我更喜欢吃妈妈做的。', py: 'Wǒ gèng xǐhuan chī māma zuò de.', vn: 'Tôi thích ăn món mẹ nấu hơn.' }
    ],
    hanzi: [{ c: '更', p: 'gèng', type: '会意字 · Chữ hội ý', st: 7, ord: '一 → 日 → 乂', rad: '一 (nhất)', mean: 'càng, hơn', tip: '更 + tính từ: 更好、更漂亮、更便宜。', cf: '', w: '更好看 / 更便宜 / 更喜欢' }]
  },
  {
    n: 16, zh: '颜色', py: 'yánsè', pos: 'Danh từ', vn: 'màu sắc', em: '🎨', lesson: 4,
    ex_zh: '商场里的衣服颜色很多。', ex_py: 'Shāngchǎng li de yīfu yánsè hěn duō.', ex_vn: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc.',
    exList: [
      { zh: '商场里的衣服颜色很多。', py: 'Shāngchǎng li de yīfu yánsè hěn duō.', vn: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc.' },
      { zh: '你喜欢什么颜色？', py: 'Nǐ xǐhuan shénme yánsè?', vn: 'Bạn thích màu gì?' }
    ],
    hanzi: [{ c: '颜', p: 'yán', type: '形声字 · Chữ hình thanh', st: 15, ord: '立 → 厂 → 彡 → 页', rad: '页 (hiệt – đầu)', mean: 'sắc mặt, màu', tip: 'Vốn chỉ sắc mặt, sau mở rộng thành "màu sắc".', cf: '', w: '颜色 / 什么颜色' }]
  }
];

var wuData = [
  { img: '👖', label: '裤子', py: 'kùzi', letter: 'A' },
  { img: '🎒', label: '书包', py: 'shūbāo', letter: 'B' },
  { img: '🕰️', label: '过去', py: 'guòqù', letter: 'C' },
  { img: '🎨', label: '颜色', py: 'yánsè', letter: 'D' },
  { img: '🏬', label: '商场', py: 'shāngchǎng', letter: 'E' },
  { img: '🔴', label: '红色', py: 'hóngsè', letter: 'F' }
];

var dialogData = [
  {
    scene: '在商场门口 · Trước cửa trung tâm thương mại',
    preQuiz: [
      { q: '王一雪和刘小雪要去哪儿看看？', opts: ['商场', '超市', '学校'], ans: 0 },
      { q: '刘小雪为什么要进去看看？', opts: ['想买条裤子', '妈妈让她进去', '想给妈妈买衣服'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我们来过这家商场吗？', py: 'Māma, wǒmen láiguo zhè jiā shāngchǎng ma?', vn: 'Mẹ ơi, chúng ta đã từng đến trung tâm mua sắm này chưa ạ?' },
      { sp: 1, zh: '没来过，这是新开的。', py: 'Méi láiguo, zhè shì xīn kāi de.', vn: 'Chưa con ạ, đây là trung tâm mua sắm mới mở.' },
      { sp: 0, zh: '我们进去看看吧。', py: 'Wǒmen jìnqù kànkan ba.', vn: 'Chúng ta đi vào xem một chút nhé.' },
      { sp: 1, zh: '好啊！你想买点儿什么？', py: 'Hǎo a! Nǐ xiǎng mǎi diǎnr shénme?', vn: 'Được thôi. Con muốn mua chút gì không?' },
      { sp: 0, zh: '我想买条裤子。', py: 'Wǒ xiǎng mǎi tiáo kùzi.', vn: 'Con muốn mua chiếc quần.' },
      { sp: 1, zh: '没问题。', py: 'Méi wèntí.', vn: 'Được nhé.' }
    ]
  },
  {
    scene: '在商场 · Xem quần áo trong trung tâm thương mại',
    preQuiz: [
      { q: '刘小雪想买什么？', opts: ['白色的衣服', '红色的衣服', '白色的裤子'], ans: 2 },
      { q: '王一雪让刘小雪试试什么？', opts: ['白色的衣服', '红色的衣服', '红色的裤子'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我想买这条白色的裤子。', py: 'Māma, wǒ xiǎng mǎi zhè tiáo báisè de kùzi.', vn: 'Mẹ ơi, con muốn mua chiếc quần màu trắng này.' },
      { sp: 1, zh: '你有很多白色的衣服，为什么还买白色的？', py: 'Nǐ yǒu hěn duō báisè de yīfu, wèi shénme hái mǎi báisè de?', vn: 'Con đã có rất nhiều quần áo màu trắng rồi, sao vẫn còn mua màu trắng nữa?' },
      { sp: 0, zh: '因为我喜欢白色啊！', py: 'Yīnwèi wǒ xǐhuan báisè a!', vn: 'Vì con thích màu trắng ạ.' },
      { sp: 1, zh: '我觉得这条白色的不太好看，你试试那条红色的吧。', py: 'Wǒ juéde zhè tiáo báisè de bú tài hǎokàn, nǐ shìshi nà tiáo hóngsè de ba.', vn: 'Mẹ thấy chiếc quần màu trắng này không được đẹp lắm, con thử chiếc màu đỏ kia xem sao.' },
      { sp: 0, zh: '我没穿过红色的，红色的好看吗？', py: 'Wǒ méi chuānguo hóngsè de, hóngsè de hǎokàn ma?', vn: 'Con chưa từng mặc quần màu đỏ, quần màu đỏ có đẹp không mẹ?' },
      { sp: 1, zh: '就是因为没穿过，所以要试试啊！', py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!', vn: 'Chính là vì chưa từng mặc nên cần phải thử xem.' }
    ]
  },
  {
    scene: '在商场 · Chọn cặp sách',
    preQuiz: [
      { q: '刘小雪想买什么？', opts: ['新书', '书包', '衣服'], ans: 1 },
      { q: '王一雪和刘小雪觉得哪个好看？', opts: ['红色的', '绿色的', '黑色的'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我想买个新书包。', py: 'Māma, wǒ xiǎng mǎi ge xīn shūbāo.', vn: 'Mẹ ơi, con muốn mua cặp sách mới ạ.' },
      { sp: 1, zh: '好，那边卖书包，我们过去看看吧。', py: 'Hǎo, nàbiān mài shūbāo, wǒmen guòqù kànkan ba.', vn: 'Được, đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.' },
      { sp: 0, zh: '这么多漂亮的书包！', py: 'Zhème duō piàoliang de shūbāo!', vn: 'Bao nhiêu là cặp sách đẹp!' },
      { sp: 1, zh: '红色的、绿色的、黑色的，你想买哪个？', py: 'Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?', vn: 'Cái màu đỏ, cái màu xanh lá cây, cái màu đen, con muốn mua cái nào?' },
      { sp: 0, zh: '绿色的吧。', py: 'Lǜsè de ba.', vn: 'Cái màu xanh lá cây ạ.' },
      { sp: 1, zh: '不错，我也觉得绿色的更好看。', py: 'Búcuò, wǒ yě juéde lǜsè de gèng hǎokàn.', vn: 'Đẹp đấy, mẹ cũng thấy cặp sách màu xanh lá cây đẹp hơn.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lưu Tiểu Tuyết viết nhật ký)',
    preQuiz: [
      { q: '刘小雪和妈妈去了哪里？', opts: ['商场', '超市', '饭店'], ans: 0 },
      { q: '商场里衣服的颜色怎么样？', opts: ['很少', '很多', '不漂亮'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。', py: 'Wǒ hé māma qùle yì jiā shāngchǎng. Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.', vn: 'Mình đã đi đến một trung tâm thương mại với mẹ. Vì trung tâm thương mại vừa mới khai trương, nên mấy hôm nay đồ rất rẻ.' },
      { sp: 0, zh: '商场里的衣服颜色很多。我没穿过红色的裤子，妈妈让我试了试。', py: 'Shāngchǎng li de yīfu yánsè hěn duō. Wǒ méi chuānguo hóngsè de kùzi, māma ràng wǒ shìle shì.', vn: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc. Mình chưa từng mặc quần màu đỏ, mẹ đã bảo mình thử xem.' },
      { sp: 0, zh: '我觉得我穿红色的也很好看。', py: 'Wǒ juéde wǒ chuān hóngsè de yě hěn hǎokàn.', vn: 'Mình nghĩ mình mặc quần màu đỏ cũng rất đẹp.' }
    ]
  }
];

var listenData = [
  {
    audio: '妈妈，我们来过这家商场吗？没来过，这是新开的。我们进去看看吧。好啊！你想买点儿什么？我想买条裤子。',
    questions: [
      { q: '她们要去哪儿看看？', opts: ['商场', '超市', '学校'], ans: 0 },
      { q: '刘小雪想买什么？', opts: ['裤子', '书包', '衣服'], ans: 0 }
    ]
  },
  {
    audio: '妈妈，我想买这条白色的裤子。你有很多白色的衣服，为什么还买白色的？因为我喜欢白色啊！你试试那条红色的吧。',
    questions: [
      { q: '刘小雪想买什么颜色的裤子？', opts: ['白色的', '红色的', '黑色的'], ans: 0 },
      { q: '妈妈让她试什么？', opts: ['白色的衣服', '红色的裤子', '绿色的书包'], ans: 1 }
    ]
  },
  {
    audio: '妈妈，我想买个新书包。好，那边卖书包，我们过去看看吧。红色的、绿色的、黑色的，你想买哪个？绿色的吧。',
    questions: [
      { q: '刘小雪想买什么？', opts: ['新书', '书包', '衣服'], ans: 1 },
      { q: '她们觉得哪个好看？', opts: ['红色的', '绿色的', '黑色的'], ans: 1 }
    ]
  },
  {
    audio: '我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。商场里的衣服颜色很多。',
    questions: [
      { q: '商场的东西为什么便宜？', opts: ['因为是新开的', '因为过节', '因为东西不好'], ans: 0 },
      { q: '商场里衣服的颜色怎么样？', opts: ['很少', '很多', '不漂亮'], ans: 1 }
    ]
  }
];

var matchData = [
  { left: '来', right: '过' },
  { left: '一条', right: '裤子' },
  { left: '白色', right: '的衣服' },
  { left: '因为……', right: '所以……' },
  { left: '过去', right: '看看' },
  { left: '更', right: '好看' }
];

var fillData = [
  { pre: '我们来', blank: '过', post: '这家商场吗？', hint: '(đã từng)', ans: '过' },
  { pre: '我们', blank: '进去', post: '看看吧。', hint: '(đi vào)', ans: '进去' },
  { pre: '我想买', blank: '条', post: '裤子。', hint: '(lượng từ cho quần)', ans: '条' },
  { pre: '', blank: '因为', post: '我喜欢白色啊！', hint: '(bởi vì)', ans: '因为' },
  { pre: '就是因为没穿过，', blank: '所以', post: '要试试啊！', hint: '(cho nên)', ans: '所以' },
  { pre: '那边卖书包，我们', blank: '过去', post: '看看吧。', hint: '(sang đó)', ans: '过去' },
  { pre: '我也觉得绿色的', blank: '更', post: '好看。', hint: '(hơn)', ans: '更' },
  { pre: '商场里的衣服', blank: '颜色', post: '很多。', hint: '(màu sắc)', ans: '颜色' }
];

var sortData = [
  { words: ['我们', '来', '过', '这家', '商场', '吗', '？'], ans: '我们来过这家商场吗？', audio: '我们来过这家商场吗？' },
  { words: ['我', '想', '买', '条', '裤子', '。'], ans: '我想买条裤子。', audio: '我想买条裤子。' },
  { words: ['因为', '我', '喜欢', '白色', '啊', '！'], ans: '因为我喜欢白色啊！', audio: '因为我喜欢白色啊！' },
  { words: ['我', '没', '穿', '过', '红色', '的', '。'], ans: '我没穿过红色的。', audio: '我没穿过红色的。' },
  { words: ['我', '也', '觉得', '绿色的', '更', '好看', '。'], ans: '我也觉得绿色的更好看。', audio: '我也觉得绿色的更好看。' },
  { words: ['商场', '里', '的', '衣服', '颜色', '很', '多', '。'], ans: '商场里的衣服颜色很多。', audio: '商场里的衣服颜色很多。' }
];

var mcData = [
  { q: '我看见老师在教室里，你＿＿找她吧。', opts: ['进去', '书包', '颜色', '条'], ans: 0 },
  { q: '你已经有一＿＿黑色的裤子了，别买了。', opts: ['个', '间', '条', '名'], ans: 2 },
  { q: '商场里衣服的＿＿很多。', opts: ['书包', '颜色', '商场', '进去'], ans: 1 },
  { q: '"她去过中国" nghĩa là gì?', opts: ['Cô ấy từng đến Trung Quốc', 'Cô ấy đang ở Trung Quốc', 'Cô ấy sẽ đi Trung Quốc', 'Cô ấy không đến Trung Quốc'], ans: 0 },
  { q: 'Phủ định của "她去过中国" là câu nào?', opts: ['她没去过中国。', '她不去过中国。', '她去过没中国。', '她没有去中国过。'], ans: 0 },
  { q: '"红色的、绿色的、黑色的" ở đây thay cho cụm nào?', opts: ['红色的书包…', '红色的人…', '红色的天…', '红色的时间…'], ans: 0 },
  { q: 'Cặp liên từ nào chỉ quan hệ nguyên nhân – kết quả?', opts: ['因为……所以……', '还是……吧', '虽然……也……', '一……就……'], ans: 0 },
  { q: '"我觉得绿色的更好看" — 「更」nghĩa là gì?', opts: ['càng, hơn', 'rất', 'không', 'lại'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你去过中国吗？去过哪些城市？',
      q_vn: 'Bạn từng đến Trung Quốc chưa? Từng đến những thành phố nào?',
      hint: '我去过…… / 我没去过……',
      sample: '我去过中国，去过北京和西安，可是我没去过上海。',
      sample_vn: 'Tôi từng đến Trung Quốc, từng đến Bắc Kinh và Tây An, nhưng tôi chưa từng đến Thượng Hải.',
      note: '过 đặt sau động từ để nói việc đã từng xảy ra; phủ định dùng 没.'
    },
    {
      q_zh: '你喜欢什么颜色的衣服？为什么？',
      q_vn: 'Bạn thích quần áo màu gì? Vì sao?',
      hint: '我喜欢……色的，因为……',
      sample: '我喜欢白色的衣服，因为白色很干净，我也有很多白色的裤子。',
      sample_vn: 'Tôi thích quần áo màu trắng, vì màu trắng rất sạch sẽ, tôi cũng có nhiều quần màu trắng.',
      note: 'Cụm chữ 的: 白色的 = cái/bộ màu trắng, không cần nhắc lại danh từ.'
    },
    {
      q_zh: '今天你为什么没去上班？',
      q_vn: 'Hôm nay vì sao bạn không đi làm?',
      hint: '因为……，所以……',
      sample: '因为我生病了，所以今天没去上班。',
      sample_vn: 'Vì tôi bị ốm nên hôm nay không đi làm.',
      note: '因为……所以…… có thể dùng cả cặp hoặc chỉ dùng một vế.'
    },
    {
      q_zh: '买衣服的时候，你会试一试吗？',
      q_vn: 'Khi mua quần áo bạn có thử không?',
      hint: '我会试试……',
      sample: '会，我一定要试试。没穿过的颜色，我更要试一试。',
      sample_vn: 'Có, tôi nhất định phải thử. Màu chưa từng mặc thì tôi càng phải thử.',
      note: '试试 / 试一试 là dạng lặp của động từ, nghe nhẹ nhàng hơn.'
    },
    {
      q_zh: '商场里有很多书包，你想买哪个？',
      q_vn: 'Trong trung tâm thương mại có nhiều cặp sách, bạn muốn mua cái nào?',
      hint: '我想买……的，因为……更……',
      sample: '我想买绿色的，因为我觉得绿色的比黑色的更好看。',
      sample_vn: 'Tôi muốn mua cái màu xanh lá, vì tôi thấy cái màu xanh lá đẹp hơn cái màu đen.',
      note: '更 + tính từ dùng để so sánh: 更好看、更便宜。'
    }
  ]
};

var translateData = [
  { vi: 'Chúng ta đã từng đến trung tâm mua sắm này chưa ạ?', zh: '我们来过这家商场吗？', py: 'Wǒmen láiguo zhè jiā shāngchǎng ma?' },
  { vi: 'Con muốn mua chiếc quần màu trắng này.', zh: '我想买这条白色的裤子。', py: 'Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.' },
  { vi: 'Chính là vì chưa từng mặc nên cần phải thử xem.', zh: '就是因为没穿过，所以要试试啊！', py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!' },
  { vi: 'Mẹ cũng thấy cặp sách màu xanh lá cây đẹp hơn.', zh: '我也觉得绿色的更好看。', py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.' },
  { vi: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc.', zh: '商场里的衣服颜色很多。', py: 'Shāngchǎng li de yīfu yánsè hěn duō.' }
];

var translateDataRev = [
  { vi: 'Chưa con ạ, đây là trung tâm mua sắm mới mở.', zh: '没来过，这是新开的。', py: 'Méi láiguo, zhè shì xīn kāi de.' },
  { vi: 'Vì con thích màu trắng ạ.', zh: '因为我喜欢白色啊！', py: 'Yīnwèi wǒ xǐhuan báisè a!' },
  { vi: 'Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.', zh: '那边卖书包，我们过去看看吧。', py: 'Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.' },
  { vi: 'Vì mới khai trương nên mấy hôm nay đồ rất rẻ.', zh: '因为是新开的，所以这几天东西很便宜。', py: 'Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.' },
  { vi: 'Mình nghĩ mình mặc quần màu đỏ cũng rất đẹp.', zh: '我觉得我穿红色的也很好看。', py: 'Wǒ juéde wǒ chuān hóngsè de yě hěn hǎokàn.' }
];
