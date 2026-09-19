// HSK 2 (3.0 Mới) · Bài 13 · 我们爱上中文课
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 13, trang 112-121.

var vocabData = [
  {
    n: 1, zh: '新年', py: 'xīnnián', pos: 'Danh từ', vn: 'năm mới', hv: 'tân niên', em: '🎊', img: '/images/hsk2v3-bai-13/xinnian.jpg', lesson: 1,
    ex_zh: '时间过得真快啊！新年就要到了。', ex_py: 'Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.', ex_vn: 'Thời gian trôi nhanh thật đấy! Sắp đến năm mới rồi.',
    exList: [
      { zh: '时间过得真快啊！新年就要到了。', py: 'Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.', vn: 'Thời gian trôi nhanh thật đấy! Sắp đến năm mới rồi.' },
      { zh: '我们给她准备个新年礼物吧。', py: 'Wǒmen gěi tā zhǔnbèi ge xīnnián lǐwù ba.', vn: 'Chúng ta hãy chuẩn bị một món quà năm mới tặng cô nhé.' }
    ],
    hanzi: [{ c: '新', p: 'xīn', type: '形声字 · Chữ hình thanh', st: 13, ord: '亲 → 斤', rad: '斤 (cân – rìu)', mean: 'mới', tip: 'Ôn 就要……了 (bài 10): 新年就要到了。', cf: '旧 (jiù – cũ)', w: '新年 / 新的 / 新衣服' }]
  },
  {
    n: 2, zh: '教', py: 'jiāo', pos: 'Động từ', vn: 'dạy', hv: 'giáo', em: '👩‍🏫', img: '/images/hsk2v3-bai-13/jiao.jpg', lesson: 1,
    ex_zh: '这一年王老师教我们中文，每天工作都很累。', ex_py: 'Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měi tiān gōngzuò dōu hěn lèi.', ex_vn: 'Một năm nay, cô Vương dạy chúng ta tiếng Trung Quốc, ngày nào làm việc cũng đều rất mệt.',
    exList: [
      { zh: '这一年王老师教我们中文，每天工作都很累。', py: 'Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měi tiān gōngzuò dōu hěn lèi.', vn: 'Một năm nay, cô Vương dạy chúng ta tiếng Trung Quốc, ngày nào làm việc cũng đều rất mệt.' },
      { zh: '是啊，她教得很好。', py: 'Shì a, tā jiāo de hěn hǎo.', vn: 'Đúng vậy, cô dạy rất hay.' }
    ],
    hanzi: [{ c: '教', p: 'jiāo', type: '会意字 · Chữ hội ý', st: 11, ord: '孝 → 攵', rad: '攵 (phốc)', mean: 'dạy', tip: '教 cũng là câu hai tân ngữ: 教 + người + môn học.', cf: '学 (xué – học)', w: '教 / 教我们中文 / 教得好' }]
  },
  {
    n: 3, zh: '花', py: 'huā', pos: 'Danh từ', vn: 'hoa', hv: 'hoa', em: '🌸', img: '/images/hsk2v3-bai-13/hua.jpg', lesson: 1,
    ex_zh: '王老师喜欢花，就送给她花吧。', ex_py: 'Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.', ex_vn: 'Cô Vương thích hoa đấy, cứ tặng hoa cho cô đi.',
    exList: [
      { zh: '王老师喜欢花，就送给她花吧。', py: 'Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.', vn: 'Cô Vương thích hoa đấy, cứ tặng hoa cho cô đi.' },
      { zh: '希望花店还有漂亮的花。', py: 'Xīwàng huādiàn hái yǒu piàoliang de huā.', vn: 'Hy vọng ở cửa hàng hoa vẫn còn hoa đẹp.' }
    ],
    hanzi: [{ c: '花', p: 'huā', type: '形声字 · Chữ hình thanh', st: 7, ord: '艹 → 化', rad: '艹 (thảo – cỏ)', mean: 'hoa; tiêu (tiền)', tip: 'Cùng chữ 花 với 花钱 (tiêu tiền, bài 8) nhưng khác từ loại.', cf: '花钱 (huā qián)', w: '花 / 花店 / 买花' }]
  },
  {
    n: 4, zh: '希望', py: 'xīwàng', pos: 'Động từ', vn: 'hy vọng, mong muốn', hv: 'hi vọng', em: '🙏', img: '/images/hsk2v3-bai-13/xiwang.jpg', lesson: 1,
    ex_zh: '希望花店还有漂亮的花。', ex_py: 'Xīwàng huādiàn hái yǒu piàoliang de huā.', ex_vn: 'Hy vọng ở cửa hàng hoa vẫn còn hoa đẹp.',
    exList: [
      { zh: '希望花店还有漂亮的花。', py: 'Xīwàng huādiàn hái yǒu piàoliang de huā.', vn: 'Hy vọng ở cửa hàng hoa vẫn còn hoa đẹp.' },
      { zh: '希望她高高兴兴地过个新年。', py: 'Xīwàng tā gāogāoxìngxìng de guò ge xīnnián.', vn: 'Hy vọng cô sẽ đón một năm mới thật vui vẻ.' }
    ],
    hanzi: [{ c: '希', p: 'xī', type: '会意字 · Chữ hội ý', st: 7, ord: '乂 → 丿 → 巾', rad: '巾 (cân – khăn)', mean: 'hy vọng, mong', tip: 'Ôn 地 (bài 6): 希望她高高兴兴地过个新年。', cf: '', w: '希望 / 希望你…… / 我希望' }]
  },
  {
    n: 5, zh: '上面', py: 'shàngmiàn', pos: 'Danh từ', vn: 'phía trên, bên trên', hv: 'thượng diện', em: '⬆️', img: '/images/hsk2v3-bai-13/shangmian.jpg', lesson: 2,
    ex_zh: '现在我来说，你们在本子上面写。', ex_py: 'Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.', ex_vn: 'Bây giờ cô sẽ đọc, các em viết vào vở nhé.',
    exList: [
      { zh: '现在我来说，你们在本子上面写。', py: 'Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.', vn: 'Bây giờ cô sẽ đọc, các em viết vào vở nhé.' },
      { zh: '桌子上面有一本中文书。', py: 'Zhuōzi shàngmiàn yǒu yì běn Zhōngwén shū.', vn: 'Trên bàn có một quyển sách tiếng Trung.' }
    ],
    hanzi: [{ c: '面', p: 'miàn', type: '象形字 · Chữ tượng hình', st: 9, ord: '一 → 丿 → 囗 → 三', rad: '面 (diện)', mean: 'mặt, phía', tip: 'Cùng nhóm: 上面、里面、外面 (bài 12)、后面 (bài 10).', cf: '下面 (xiàmiàn)', w: '上面 / 里面 / 外面' }]
  },
  {
    n: 6, zh: '洗手间', py: 'xǐshǒujiān', pos: 'Danh từ', vn: 'nhà vệ sinh', hv: 'tẩy thủ gian', em: '🚻', img: '/images/hsk2v3-bai-13/xishoujian.jpg', lesson: 2,
    ex_zh: '同学们，“洗手间”的“间”字写错了。', ex_py: 'Tóngxuémen, “xǐshǒujiān” de “jiān” zì xiěcuò le.', ex_vn: 'Các em ơi, chữ “间” trong từ “洗手间” viết sai rồi.',
    exList: [
      { zh: '同学们，“洗手间”的“间”字写错了。', py: 'Tóngxuémen, “xǐshǒujiān” de “jiān” zì xiěcuò le.', vn: 'Các em ơi, chữ “间” trong từ “洗手间” viết sai rồi.' },
      { zh: '她去洗手间了，回来后我让她去找你。', py: 'Tā qù xǐshǒujiān le, huílái hòu wǒ ràng tā qù zhǎo nǐ.', vn: 'Cô ấy đi vệ sinh rồi, khi về tôi sẽ bảo cô ấy đi tìm bạn.' }
    ],
    hanzi: [{ c: '间', p: 'jiān', type: '会意字 · Chữ hội ý', st: 7, ord: '门 → 日', rad: '门 (môn – cửa)', mean: 'gian, phòng', tip: 'Bên trong 间 là 日, không phải 口 — viết 口 sẽ thành 问.', cf: '问 (wèn – hỏi)', w: '洗手间 / 房间 / 时间' }]
  },
  {
    n: 7, zh: '里面', py: 'lǐmiàn', pos: 'Danh từ', vn: 'bên trong', hv: 'lí diện', em: '📦', img: '/images/hsk2v3-bai-13/limian.jpg', lesson: 2,
    ex_zh: '它的里面是“日”，不是“口”。', ex_py: 'Tā de lǐmiàn shì “rì”, bú shì “kǒu”.', ex_vn: 'Bên trong nó là chữ “日” chứ không phải chữ “口” đâu nhé.',
    exList: [
      { zh: '它的里面是“日”，不是“口”。', py: 'Tā de lǐmiàn shì “rì”, bú shì “kǒu”.', vn: 'Bên trong nó là chữ “日” chứ không phải chữ “口” đâu nhé.' },
      { zh: '教室的门开着，但是里面没有人。', py: 'Jiàoshì de mén kāizhe, dànshì lǐmiàn méiyǒu rén.', vn: 'Cửa lớp học đang mở nhưng bên trong không có ai.' }
    ],
    hanzi: [{ c: '里', p: 'lǐ', type: '会意字 · Chữ hội ý', st: 7, ord: '田 → 土', rad: '里 (lý)', mean: 'trong; dặm', tip: '里面 ↔ 外面 (bài 12).', cf: '外面 (wàimiàn)', w: '里面 / 里边 / 家里' }]
  },
  {
    n: 8, zh: '笔', py: 'bǐ', pos: 'Lượng từ', vn: 'nét (chữ)', hv: 'bút', em: '✍️', lesson: 2,
    ex_zh: '“日”比“口”多一笔。', ex_py: '“Rì” bǐ “kǒu” duō yì bǐ.', ex_vn: 'Chữ “日” nhiều hơn chữ “口” một nét.',
    exList: [
      { zh: '“日”比“口”多一笔。', py: '“Rì” bǐ “kǒu” duō yì bǐ.', vn: 'Chữ “日” nhiều hơn chữ “口” một nét.' },
      { zh: '写“口”就是“问题”的“问”了。', py: 'Xiě “kǒu” jiù shì “wèntí” de “wèn” le.', vn: 'Nếu viết thành “口” thì sẽ thành chữ “问” trong từ “问题” rồi.' }
    ],
    hanzi: [{ c: '笔', p: 'bǐ', type: '会意字 · Chữ hội ý', st: 10, ord: '⺮ → 毛', rad: '⺮ (trúc – tre)', mean: 'bút; nét bút', tip: 'Ở bài 10, 笔 là danh từ "cây bút"; ở đây là lượng từ "nét".', cf: '', w: '一笔 / 多一笔 / 笔画' }]
  },
  {
    n: 9, zh: '可能', py: 'kěnéng', pos: 'Động từ', vn: 'có thể, có lẽ', hv: 'khả năng', em: '🤔', lesson: 3,
    ex_zh: '这么漂亮的本子，不可能贵一点儿吧？', ex_py: 'Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?', ex_vn: 'Cuốn vở đẹp thế này, không thể chỉ đắt hơn một chút nhỉ?',
    exList: [
      { zh: '这么漂亮的本子，不可能贵一点儿吧？', py: 'Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?', vn: 'Cuốn vở đẹp thế này, không thể chỉ đắt hơn một chút nhỉ?' },
      { zh: '她可能去洗手间了。', py: 'Tā kěnéng qù xǐshǒujiān le.', vn: 'Cô ấy có lẽ đi nhà vệ sinh rồi.' }
    ],
    hanzi: [{ c: '能', p: 'néng', type: '象形字 · Chữ tượng hình', st: 10, ord: '厶 → 月 → 匕 → 匕', rad: '月 (nguyệt)', mean: 'có thể, năng lực', tip: '可能 dùng để phỏng đoán; phủ định là 不可能.', cf: '会 (huì) · 能 (néng)', w: '可能 / 不可能 / 有可能' }]
  },
  {
    n: 10, zh: '上网', py: 'shàngwǎng', pos: 'Động từ', vn: 'lên mạng', hv: 'thượng võng', em: '💻', img: '/images/hsk2v3-bai-13/shangwang.jpg', lesson: 3,
    ex_zh: '我是上网买的，真没那么贵。', ex_py: 'Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì.', ex_vn: 'Mình mua trên mạng đấy, thật sự không đắt đến thế đâu.',
    exList: [
      { zh: '我是上网买的，真没那么贵。', py: 'Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì.', vn: 'Mình mua trên mạng đấy, thật sự không đắt đến thế đâu.' },
      { zh: '我经常上网听歌、看电影。', py: 'Wǒ jīngcháng shàngwǎng tīng gē, kàn diànyǐng.', vn: 'Tôi thường xuyên lên mạng nghe nhạc, xem phim.' }
    ],
    hanzi: [{ c: '网', p: 'wǎng', type: '象形字 · Chữ tượng hình', st: 6, ord: '冂 → 乂 → 乂', rad: '冂 (quynh)', mean: 'lưới; mạng', tip: 'Ôn bài 8: 网上买比在这里买便宜。', cf: '', w: '上网 / 网上 / 网店' }]
  },
  {
    n: 11, zh: '那样', py: 'nàyàng', pos: 'Đại từ', vn: 'như vậy, thế kia', hv: 'na dạng', em: '👉', lesson: 3,
    ex_zh: '那样我们就都有新年礼物了！', ex_py: 'Nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!', ex_vn: 'Như vậy là chúng ta ai cũng đều có quà năm mới rồi!',
    exList: [
      { zh: '那样我们就都有新年礼物了！', py: 'Nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!', vn: 'Như vậy là chúng ta ai cũng đều có quà năm mới rồi!' },
      { zh: '真没那么贵。', py: 'Zhēn méi nàme guì.', vn: 'Thật sự không đắt đến thế đâu.' }
    ],
    hanzi: [{ c: '样', p: 'yàng', type: '形声字 · Chữ hình thanh', st: 10, ord: '木 → 羊', rad: '木 (mộc – cây)', mean: 'dáng, kiểu', tip: '这样 (bài 9) ↔ 那样; 那么 (bài 9) chỉ mức độ.', cf: '这样 (zhèyàng)', w: '那样 / 这样 / 怎么样' }]
  },
  {
    n: 12, zh: '告诉', py: 'gàosu', pos: 'Động từ', vn: 'nói cho biết, kể', hv: 'cáo tố', em: '🗣️', img: '/images/hsk2v3-bai-13/gaosu.jpg', lesson: 4,
    ex_zh: '她告诉我是在网上买的。', ex_py: 'Tā gàosu wǒ shì zài wǎngshang mǎi de.', ex_vn: 'Bạn ấy kể với tôi là mua ở trên mạng.',
    exList: [
      { zh: '她告诉我是在网上买的。', py: 'Tā gàosu wǒ shì zài wǎngshang mǎi de.', vn: 'Bạn ấy kể với tôi là mua ở trên mạng.' },
      { zh: '家月告诉我你已经接到她们了。', py: 'Jiāyuè gàosu wǒ nǐ yǐjīng jiēdào tāmen le.', vn: 'Gia Nguyệt nói với tôi là bạn đã đón được họ rồi.' }
    ],
    hanzi: [{ c: '告', p: 'gào', type: '会意字 · Chữ hội ý', st: 7, ord: '丿 → 土 → 口', rad: '口 (khẩu – miệng)', mean: 'báo, nói', tip: '告诉 cũng mang hai tân ngữ: 告诉 + người + nội dung.', cf: '', w: '告诉 / 告诉我 / 告诉他一件事' }]
  },
  {
    n: 13, zh: '班', py: 'bān', pos: 'Danh từ', vn: 'lớp', hv: 'ban', em: '👥', img: '/images/hsk2v3-bai-13/ban.jpg', lesson: 4,
    ex_zh: '我们班同学也送了王老师漂亮的花。', ex_py: 'Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā.', ex_vn: 'Các bạn lớp tôi cũng tặng cô Vương bó hoa đẹp.',
    exList: [
      { zh: '我们班同学也送了王老师漂亮的花。', py: 'Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā.', vn: 'Các bạn lớp tôi cũng tặng cô Vương bó hoa đẹp.' },
      { zh: '你们班有多少学生？', py: 'Nǐmen bān yǒu duōshao xuésheng?', vn: 'Lớp các bạn có bao nhiêu học sinh?' }
    ],
    hanzi: [{ c: '班', p: 'bān', type: '会意字 · Chữ hội ý', st: 10, ord: '王 → 丿 → 王', rad: '王 (ngọc)', mean: 'lớp, ca', tip: '我们班 = lớp chúng tôi; 上班 = đi làm.', cf: '', w: '班 / 我们班 / 上班' }]
  }
];

var wuData = [
  { img: '🌸', label: '花', py: 'huā', letter: 'A' },
  { img: '🎊', label: '新年', py: 'xīnnián', letter: 'B' },
  { img: '🚻', label: '洗手间', py: 'xǐshǒujiān', letter: 'C' },
  { img: '👩‍🏫', label: '教', py: 'jiāo', letter: 'D' },
  { img: '💻', label: '上网', py: 'shàngwǎng', letter: 'E' },
  { img: '👥', label: '班', py: 'bān', letter: 'F' }
];

var dialogData = [
  {
    scene: '在教室 · Trong lớp học (bàn chuyện quà năm mới tặng cô)',
    preQuiz: [
      { q: '同学们想送给王老师什么？', opts: ['花', '衣服', '中文书'], ans: 0 },
      { q: '同学们今天要去哪儿看看？', opts: ['教室', '花店', '商店'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '时间过得真快啊！新年就要到了。', py: 'Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.', vn: 'Thời gian trôi nhanh thật đấy! Sắp đến năm mới rồi.' },
      { sp: 1, zh: '这一年王老师教我们中文，每天工作都很累。', py: 'Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén, měi tiān gōngzuò dōu hěn lèi.', vn: 'Một năm nay, cô Vương dạy chúng ta tiếng Trung Quốc, ngày nào làm việc cũng đều rất mệt.' },
      { sp: 0, zh: '是啊，她教得很好。因为她，我们都非常爱上中文课。', py: 'Shì a, tā jiāo de hěn hǎo. Yīnwèi tā, wǒmen dōu fēicháng ài shàng Zhōngwén kè.', vn: 'Đúng vậy, cô dạy rất hay. Nhờ có cô mà chúng ta ai cũng yêu thích môn tiếng Trung Quốc.' },
      { sp: 1, zh: '我们给她准备个新年礼物吧。你觉得送给她什么好呢？', py: 'Wǒmen gěi tā zhǔnbèi ge xīnnián lǐwù ba. Nǐ juéde sòng gěi tā shénme hǎo ne?', vn: 'Chúng ta hãy chuẩn bị một món quà năm mới tặng cô nhé. Bạn thấy tặng cô quà gì thì hợp nhỉ?' },
      { sp: 0, zh: '王老师喜欢花，就送给她花吧。', py: 'Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.', vn: 'Cô Vương thích hoa đấy, cứ tặng hoa cho cô đi.' },
      { sp: 1, zh: '那我们去花店看看，现在买花的人多，希望花店还有漂亮的花。', py: 'Nà wǒmen qù huādiàn kànkan, xiànzài mǎi huā de rén duō, xīwàng huādiàn hái yǒu piàoliang de huā.', vn: 'Vậy chúng ta ra cửa hàng hoa xem thử. Bây giờ người mua hoa rất đông, hy vọng ở đó vẫn còn hoa đẹp.' }
    ]
  },
  {
    scene: '在教室 · Trong lớp học (cô Vương giảng bài)',
    preQuiz: [
      { q: '今天的词比昨天多多少？', opts: ['四个', '七个', '十个'], ans: 2 },
      { q: '同学们写错了哪个字？', opts: ['口', '日', '间'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '王老师，今天的词比昨天多了十个。', py: 'Wáng lǎoshī, jīntiān de cí bǐ zuótiān duōle shí ge.', vn: 'Cô Vương ơi, từ mới của ngày hôm nay nhiều hơn hôm qua mười từ ạ.' },
      { sp: 2, zh: '是啊！你们都学会了吗？', py: 'Shì a! Nǐmen dōu xuéhuì le ma?', vn: 'Đúng vậy! Các em đã nắm được hết chưa?' },
      { sp: 3, zh: '学会了，没有问题。', py: 'Xuéhuì le, méiyǒu wèntí.', vn: 'Dạ, chúng em đã nắm được rồi ạ, không có vấn đề gì đâu cô.' },
      { sp: 2, zh: '好。现在我来说，你们在本子上面写。', py: 'Hǎo. Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.', vn: 'Tốt. Bây giờ cô sẽ đọc, các em viết vào vở nhé.' },
      { sp: 2, zh: '同学们，“洗手间”的“间”字写错了，它的里面是“日”，不是“口”。', py: 'Tóngxuémen, “xǐshǒujiān” de “jiān” zì xiěcuò le, tā de lǐmiàn shì “rì”, bú shì “kǒu”.', vn: 'Các em ơi, chữ “间” trong từ “洗手间” viết sai rồi, bên trong nó là chữ “日” chứ không phải chữ “口” đâu nhé.' },
      { sp: 0, zh: '“日”比“口”多一笔，写“口”就是“问题”的“问”了。', py: '“Rì” bǐ “kǒu” duō yì bǐ, xiě “kǒu” jiù shì “wèntí” de “wèn” le.', vn: 'Chữ “日” nhiều hơn chữ “口” một nét, nếu viết thành “口” thì sẽ thành chữ “问” trong từ “问题” rồi ạ.' },
      { sp: 2, zh: '没错，你说得很对。', py: 'Méi cuò, nǐ shuō de hěn duì.', vn: 'Đúng rồi, em nói rất chính xác.' }
    ]
  },
  {
    scene: '在教室 · Trong lớp học (Annie tặng vở)',
    preQuiz: [
      { q: '这个本子是在哪儿买的？', opts: ['商店', '超市', '网上'], ans: 2 },
      { q: '安妮让白家月送给她什么礼物？', opts: ['本子', '咖啡', '咖啡杯'], ans: 2 }
    ],
    lines: [
      { sp: 3, zh: '家月，你觉得这个本子怎么样？', py: 'Jiāyuè, nǐ juéde zhège běnzi zěnmeyàng?', vn: 'Gia Nguyệt, bạn thấy cuốn vở này thế nào?' },
      { sp: 0, zh: '很漂亮，多少钱一个？', py: 'Hěn piàoliang, duōshao qián yí ge?', vn: 'Rất đẹp. Bao nhiêu tiền một cuốn vậy?' },
      { sp: 3, zh: '比我们一起买的那个本子贵一点儿。', py: 'Bǐ wǒmen yìqǐ mǎi de nàge běnzi guì yìdiǎnr.', vn: 'Đắt hơn cuốn hôm trước mà chúng ta cùng đi mua một chút.' },
      { sp: 0, zh: '这么漂亮的本子，不可能贵一点儿吧？', py: 'Zhème piàoliang de běnzi, bù kěnéng guì yìdiǎnr ba?', vn: 'Cuốn vở đẹp thế này, không thể chỉ đắt hơn một chút nhỉ?' },
      { sp: 3, zh: '我是上网买的，真没那么贵。我买了两个，送你一个。', py: 'Wǒ shì shàngwǎng mǎi de, zhēn méi nàme guì. Wǒ mǎile liǎng ge, sòng nǐ yí ge.', vn: 'Mình mua trên mạng đấy, thật sự không đắt đến thế đâu. Mình mua hai cuốn, tặng bạn một cuốn này.' },
      { sp: 0, zh: '谢谢！那我送给你什么呢？', py: 'Xièxie! Nà wǒ sòng gěi nǐ shénme ne?', vn: 'Cảm ơn nhé! Vậy mình nên tặng lại bạn cái gì đây?' },
      { sp: 3, zh: '咖啡杯吧，我最喜欢喝咖啡了。', py: 'Kāfēibēi ba, wǒ zuì xǐhuan hē kāfēi le.', vn: 'Tặng cốc uống cà phê đi, mình thích uống cà phê nhất.' },
      { sp: 0, zh: '好，那样我们就都有新年礼物了！', py: 'Hǎo, nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!', vn: 'Được, như vậy là chúng ta ai cũng đều có quà năm mới rồi!' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Bạch Gia Nguyệt viết nhật ký)',
    preQuiz: [
      { q: '这个新本子贵不贵？', opts: ['没有白家月的本子贵', '比白家月的本子贵多了', '比白家月的本子贵一点儿'], ans: 2 },
      { q: '同学们为什么送王老师花？', opts: ['她很漂亮', '她要回国了', '新年就要到了'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '新年就要到了，安妮送给我一个新本子。', py: 'Xīnnián jiù yào dào le, Ānnī sòng gěi wǒ yí ge xīn běnzi.', vn: 'Sắp sang năm mới rồi, Annie tặng tôi một cuốn vở mới.' },
      { sp: 0, zh: '她告诉我是在网上买的，比我的本子贵一点儿。', py: 'Tā gàosu wǒ shì zài wǎngshang mǎi de, bǐ wǒ de běnzi guì yìdiǎnr.', vn: 'Bạn ấy kể với tôi là mua ở trên mạng, đắt hơn cuốn vở của tôi một chút.' },
      { sp: 0, zh: '我们班同学也送了王老师漂亮的花。', py: 'Wǒmen bān tóngxué yě sòngle Wáng lǎoshī piàoliang de huā.', vn: 'Các bạn lớp tôi cũng tặng cô Vương bó hoa đẹp.' },
      { sp: 0, zh: '希望她高高兴兴地过个新年。', py: 'Xīwàng tā gāogāoxìngxìng de guò ge xīnnián.', vn: 'Hy vọng cô sẽ đón một năm mới thật vui vẻ.' }
    ]
  }
];

var listenData = [
  {
    audio: '时间过得真快啊！新年就要到了。我们给她准备个新年礼物吧。王老师喜欢花，就送给她花吧。那我们去花店看看。',
    questions: [
      { q: '同学们想送给王老师什么？', opts: ['花', '衣服', '中文书'], ans: 0 },
      { q: '他们要去哪儿？', opts: ['教室', '花店', '商店'], ans: 1 }
    ]
  },
  {
    audio: '王老师，今天的词比昨天多了十个。你们都学会了吗？学会了，没有问题。同学们，“洗手间”的“间”字写错了，它的里面是“日”，不是“口”。',
    questions: [
      { q: '今天的词比昨天多多少？', opts: ['四个', '七个', '十个'], ans: 2 },
      { q: '“间”字里面是什么？', opts: ['日', '口', '门'], ans: 0 }
    ]
  },
  {
    audio: '家月，你觉得这个本子怎么样？很漂亮，多少钱一个？比我们一起买的那个本子贵一点儿。我是上网买的，我买了两个，送你一个。',
    questions: [
      { q: '这个本子是在哪儿买的？', opts: ['商店', '超市', '网上'], ans: 2 },
      { q: '这个本子比那个贵多少？', opts: ['贵一点儿', '贵多了', '一样贵'], ans: 0 }
    ]
  },
  {
    audio: '新年就要到了，安妮送给我一个新本子。她告诉我是在网上买的，比我的本子贵一点儿。我们班同学也送了王老师漂亮的花。',
    questions: [
      { q: '谁送给白家月本子？', opts: ['安妮', '王老师', '陈天中'], ans: 0 },
      { q: '同学们送王老师什么？', opts: ['漂亮的花', '本子', '咖啡杯'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '送给她', right: '花' },
  { left: '教', right: '我们中文' },
  { left: '告诉', right: '我一件事' },
  { left: '今天的词比昨天', right: '多了十个' },
  { left: '这个本子比那个', right: '贵一点儿' },
  { left: '上网', right: '买东西' }
];

var fillData = [
  { pre: '', blank: '新年', post: '就要到了。', hint: '(năm mới)', ans: '新年' },
  { pre: '这一年王老师', blank: '教', post: '我们中文。', hint: '(dạy)', ans: '教' },
  { pre: '', blank: '希望', post: '花店还有漂亮的花。', hint: '(hy vọng)', ans: '希望' },
  { pre: '你们在本子', blank: '上面', post: '写。', hint: '(phía trên)', ans: '上面' },
  { pre: '教室的门开着，但是', blank: '里面', post: '没有人。', hint: '(bên trong)', ans: '里面' },
  { pre: '我经常', blank: '上网', post: '听歌、看电影。', hint: '(lên mạng)', ans: '上网' },
  { pre: '她', blank: '告诉', post: '我是在网上买的。', hint: '(kể, nói cho biết)', ans: '告诉' },
  { pre: '你们', blank: '班', post: '有多少学生？', hint: '(lớp)', ans: '班' }
];

var sortData = [
  { words: ['王老师', '喜欢', '花', '，', '就', '送给', '她', '花', '吧', '。'], ans: '王老师喜欢花，就送给她花吧。', audio: '王老师喜欢花，就送给她花吧。' },
  { words: ['她', '拿给', '我', '一', '杯', '水', '。'], ans: '她拿给我一杯水。', audio: '她拿给我一杯水。' },
  { words: ['今天', '的', '词', '比', '昨天', '多', '了', '十', '个', '。'], ans: '今天的词比昨天多了十个。', audio: '今天的词比昨天多了十个。' },
  { words: ['姐姐', '比', '我', '大', '三', '岁', '。'], ans: '姐姐比我大三岁。', audio: '姐姐比我大三岁。' },
  { words: ['这个', '本子', '比', '那个', '贵', '一点儿', '。'], ans: '这个本子比那个贵一点儿。', audio: '这个本子比那个贵一点儿。' },
  { words: ['她', '告诉', '我', '是', '在', '网上', '买', '的', '。'], ans: '她告诉我是在网上买的。', audio: '她告诉我是在网上买的。' }
];

var mcData = [
  { q: '姐姐比我大＿＿。', opts: ['三岁', '岁三', '三个岁', '大三'], ans: 0 },
  { q: '坐飞机比坐火车快＿＿。', opts: ['五个多小时', '五个多小时得多', '多五个小时了', '五小时个多'], ans: 0 },
  { q: '那间教室比这间大＿＿。', opts: ['一些', '得多了', '很多的', '非常'], ans: 0 },
  { q: '他卖＿＿我一本中文书。', opts: ['给', '了给', '给了给', '的'], ans: 0 },
  { q: '“日”比“口”多＿＿。', opts: ['一笔', '一个笔', '笔一', '一支笔'], ans: 0 },
  { q: 'Câu nào diễn tả khác biệt NHỎ?', opts: ['这个本子比那个贵一点儿。', '这个本子比那个贵多了。', '这个本子比那个贵得多。', '这个本子比那个贵十块。'], ans: 0 },
  { q: '“告诉” cần mấy tân ngữ trong câu “她告诉我这件事”?', opts: ['Hai (人 + 事)', 'Một', 'Không có', 'Ba'], ans: 0 },
  { q: 'Chữ “间” bên trong là chữ gì?', opts: ['日', '口', '门', '目'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '新年就要到了，你想送给老师什么礼物？',
      q_vn: 'Sắp đến năm mới rồi, bạn muốn tặng thầy cô món quà gì?',
      hint: '老师喜欢……，就送给她……吧。',
      sample: '王老师喜欢花，我们就送给她花吧，希望她高高兴兴地过个新年。',
      sample_vn: 'Cô Vương thích hoa, chúng ta tặng hoa cho cô đi, hy vọng cô đón một năm mới thật vui.',
      note: 'Câu hai tân ngữ: 送给 + người + vật.'
    },
    {
      q_zh: '你们班的中文课怎么样？老师教得好吗？',
      q_vn: 'Lớp bạn học tiếng Trung thế nào? Thầy cô dạy có hay không?',
      hint: '老师教得……，我们都爱上……',
      sample: '我们老师教得很好，因为她，我们班同学都非常爱上中文课。',
      sample_vn: 'Cô giáo chúng tôi dạy rất hay, nhờ cô mà cả lớp tôi đều rất thích học tiếng Trung.',
      note: '教 + người + môn học; ôn bổ ngữ trạng thái 教得很好 (bài 7).'
    },
    {
      q_zh: '今天的生词比昨天多还是少？',
      q_vn: 'Từ mới hôm nay nhiều hơn hay ít hơn hôm qua?',
      hint: '今天的词比昨天多了……个。',
      sample: '今天的词比昨天多了十个，但是我都学会了，没有问题。',
      sample_vn: 'Từ mới hôm nay nhiều hơn hôm qua mười từ, nhưng tôi đã học thuộc hết rồi, không vấn đề gì.',
      note: 'A 比 B + tính từ + cụm số lượng (多了十个).'
    },
    {
      q_zh: '你常常上网做什么？',
      q_vn: 'Bạn thường lên mạng làm gì?',
      hint: '我经常上网……',
      sample: '我经常上网买东西，上网买比在商店买便宜一点儿，我也上网听歌、看电影。',
      sample_vn: 'Tôi thường lên mạng mua đồ, mua trên mạng rẻ hơn ở cửa hàng một chút, tôi cũng lên mạng nghe nhạc, xem phim.',
      note: 'Khác biệt nhỏ: 一点儿 / 一些 sau tính từ.'
    },
    {
      q_zh: '朋友送你礼物，你会怎么说？',
      q_vn: 'Bạn bè tặng quà, bạn sẽ nói gì?',
      hint: '谢谢！那我送给你什么呢？',
      sample: '谢谢！那我送给你什么呢？那样我们就都有新年礼物了。',
      sample_vn: 'Cảm ơn nhé! Vậy mình tặng lại bạn cái gì đây? Như vậy là cả hai đều có quà năm mới rồi.',
      note: '那样 dùng để chốt lại kết quả của việc vừa bàn.'
    }
  ]
};

var translateData = [
  { vi: 'Cô Vương thích hoa đấy, cứ tặng hoa cho cô đi.', zh: '王老师喜欢花，就送给她花吧。', py: 'Wáng lǎoshī xǐhuan huā, jiù sòng gěi tā huā ba.' },
  { vi: 'Từ mới hôm nay nhiều hơn hôm qua mười từ.', zh: '今天的词比昨天多了十个。', py: 'Jīntiān de cí bǐ zuótiān duōle shí ge.' },
  { vi: 'Cuốn vở này đắt hơn cuốn kia một chút.', zh: '这个本子比那个贵一点儿。', py: 'Zhège běnzi bǐ nàge guì yìdiǎnr.' },
  { vi: 'Bạn ấy kể với tôi là mua ở trên mạng.', zh: '她告诉我是在网上买的。', py: 'Tā gàosu wǒ shì zài wǎngshang mǎi de.' },
  { vi: 'Hy vọng cô sẽ đón một năm mới thật vui vẻ.', zh: '希望她高高兴兴地过个新年。', py: 'Xīwàng tā gāogāoxìngxìng de guò ge xīnnián.' }
];

var translateDataRev = [
  { vi: 'Thời gian trôi nhanh thật đấy! Sắp đến năm mới rồi.', zh: '时间过得真快啊！新年就要到了。', py: 'Shíjiān guò de zhēn kuài a! Xīnnián jiù yào dào le.' },
  { vi: 'Một năm nay cô Vương dạy chúng ta tiếng Trung.', zh: '这一年王老师教我们中文。', py: 'Zhè yì nián Wáng lǎoshī jiāo wǒmen Zhōngwén.' },
  { vi: 'Bây giờ cô sẽ đọc, các em viết vào vở nhé.', zh: '现在我来说，你们在本子上面写。', py: 'Xiànzài wǒ lái shuō, nǐmen zài běnzi shàngmiàn xiě.' },
  { vi: 'Chữ “日” nhiều hơn chữ “口” một nét.', zh: '“日”比“口”多一笔。', py: '“Rì” bǐ “kǒu” duō yì bǐ.' },
  { vi: 'Như vậy là chúng ta ai cũng đều có quà năm mới rồi!', zh: '那样我们就都有新年礼物了！', py: 'Nàyàng wǒmen jiù dōu yǒu xīnnián lǐwù le!' }
];
