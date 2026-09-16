// HSK 2 (3.0 Mới) · Bài 9 · 我去买杯奶茶
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 9, trang 073-082.

var vocabData = [
  {
    n: 1, zh: '坏', py: 'huài', pos: 'Tính từ', vn: 'hỏng; xấu', em: '💥', lesson: 1,
    ex_zh: '儿子的裤子坏了，我们给他买条新的吧。', ex_py: 'Érzi de kùzi huài le, wǒmen gěi tā mǎi tiáo xīn de ba.', ex_vn: 'Quần của con trai bị rách rồi, chúng ta mua cho con một chiếc mới đi.',
    exList: [
      { zh: '儿子的裤子坏了，我们给他买条新的吧。', py: 'Érzi de kùzi huài le, wǒmen gěi tā mǎi tiáo xīn de ba.', vn: 'Quần của con trai bị rách rồi, chúng ta mua cho con một chiếc mới đi.' },
      { zh: '我的手表坏了，不知道现在几点。', py: 'Wǒ de shǒubiǎo huài le, bù zhīdào xiànzài jǐ diǎn.', vn: 'Đồng hồ của tôi hỏng rồi, không biết bây giờ mấy giờ.' }
    ],
    hanzi: [{ c: '坏', p: 'huài', type: '形声字 · Chữ hình thanh', st: 7, ord: '土 → 不', rad: '土 (thổ – đất)', mean: 'hỏng, xấu', tip: '坏了 = đã hỏng; trái nghĩa với 好.', cf: '好 (hǎo – tốt)', w: '坏了 / 坏人 / 弄坏' }]
  },
  {
    n: 2, zh: '旁边', py: 'pángbiān', pos: 'Danh từ', vn: 'bên cạnh', em: '↔️', lesson: 1,
    ex_zh: '旁边那个男孩儿就穿了这样的裤子。', ex_py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi.', ex_vn: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy.',
    exList: [
      { zh: '旁边那个男孩儿就穿了这样的裤子。', py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi.', vn: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy.' },
      { zh: '咖啡店就在商店旁边。', py: 'Kāfēidiàn jiù zài shāngdiàn pángbiān.', vn: 'Quán cà phê ở ngay bên cạnh cửa hàng.' }
    ],
    hanzi: [{ c: '旁', p: 'páng', type: '形声字 · Chữ hình thanh', st: 10, ord: '亠 → 丷 → 冖 → 方', rad: '方 (phương)', mean: 'bên cạnh', tip: 'Cùng nhóm với 左边、右边、上边、下边 (bài 8).', cf: '', w: '旁边 / 在……旁边' }]
  },
  {
    n: 3, zh: '男孩儿', py: 'nánháir', pos: 'Danh từ', vn: 'con trai, cậu bé', em: '👦', lesson: 1,
    ex_zh: '旁边那个男孩儿就穿了这样的裤子。', ex_py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi.', ex_vn: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy.',
    exList: [
      { zh: '旁边那个男孩儿就穿了这样的裤子。', py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi.', vn: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy.' },
      { zh: '那个男孩儿篮球打得很好。', py: 'Nàge nánháir lánqiú dǎ de hěn hǎo.', vn: 'Cậu bé đó chơi bóng rổ rất giỏi.' }
    ],
    hanzi: [{ c: '男', p: 'nán', type: '会意字 · Chữ hội ý', st: 7, ord: '田 → 力', rad: '田 (điền – ruộng)', mean: 'nam, con trai', tip: '田 (ruộng) + 力 (sức): người làm ruộng — nghĩa "nam".', cf: '女孩儿 (nǚháir – bé gái)', w: '男孩儿 / 男人 / 男的' }]
  },
  {
    n: 4, zh: '这样', py: 'zhèyàng', pos: 'Đại từ', vn: 'như thế này, kiểu này', em: '👆', lesson: 1,
    ex_zh: '他就穿了这样的裤子，我觉得很好看啊！', ex_py: 'Tā jiù chuānle zhèyàng de kùzi, wǒ juéde hěn hǎokàn a!', ex_vn: 'Cậu ấy mặc kiểu quần này đấy, em thấy rất đẹp mà!',
    exList: [
      { zh: '他就穿了这样的裤子，我觉得很好看啊！', py: 'Tā jiù chuānle zhèyàng de kùzi, wǒ juéde hěn hǎokàn a!', vn: 'Cậu ấy mặc kiểu quần này đấy, em thấy rất đẹp mà!' },
      { zh: '这样的手表比那样的贵。', py: 'Zhèyàng de shǒubiǎo bǐ nàyàng de guì.', vn: 'Loại đồng hồ thế này đắt hơn loại kia.' }
    ],
    hanzi: [{ c: '样', p: 'yàng', type: '形声字 · Chữ hình thanh', st: 10, ord: '木 → 羊', rad: '木 (mộc – cây)', mean: 'dáng vẻ, kiểu', tip: '这样 ↔ 那样; cùng chữ 样 trong 怎么样.', cf: '那样 (nàyàng)', w: '这样 / 那样 / 怎么样' }]
  },
  {
    n: 5, zh: '个子', py: 'gèzi', pos: 'Danh từ', vn: 'chiều cao, vóc người', em: '📐', lesson: 1,
    ex_zh: '儿子的个子没有他那么高。', ex_py: 'Érzi de gèzi méiyǒu tā nàme gāo.', ex_vn: 'Con trai chúng ta không cao bằng cậu bé đó.',
    exList: [
      { zh: '儿子的个子没有他那么高。', py: 'Érzi de gèzi méiyǒu tā nàme gāo.', vn: 'Con trai chúng ta không cao bằng cậu bé đó.' },
      { zh: '她的个子比我高。', py: 'Tā de gèzi bǐ wǒ gāo.', vn: 'Cô ấy cao hơn tôi.' }
    ],
    hanzi: [{ c: '个', p: 'gè', type: '象形字 · Chữ tượng hình', st: 3, ord: '人 → 丨', rad: '人 (nhân)', mean: 'cái, chiếc; vóc người', tip: '个子高 / 个子不高 — nói về chiều cao của người.', cf: '', w: '个子 / 一个 / 个子高' }]
  },
  {
    n: 6, zh: '那么', py: 'nàme', pos: 'Đại từ', vn: 'như thế, đến thế', em: '💭', lesson: 1,
    ex_zh: '儿子的个子没有他那么高。', ex_py: 'Érzi de gèzi méiyǒu tā nàme gāo.', ex_vn: 'Con trai chúng ta không cao bằng cậu bé đó.',
    exList: [
      { zh: '儿子的个子没有他那么高。', py: 'Érzi de gèzi méiyǒu tā nàme gāo.', vn: 'Con trai chúng ta không cao bằng cậu bé đó.' },
      { zh: '昨天没有今天这么冷。', py: 'Zuótiān méiyǒu jīntiān zhème lěng.', vn: 'Hôm qua không lạnh bằng hôm nay.' }
    ],
    hanzi: [{ c: '那', p: 'nà', type: '形声字 · Chữ hình thanh', st: 6, ord: '⺄ → 二 → 阝', rad: '阝 (ấp)', mean: 'kia, đó', tip: '没有 + B + 这么/那么 + tính từ — nhấn mức độ của B.', cf: '这么 (zhème)', w: '那么 / 这么 / 那么高' }]
  },
  {
    n: 7, zh: '高', py: 'gāo', pos: 'Tính từ', vn: 'cao', em: '📏', lesson: 1,
    ex_zh: '妹妹有姐姐高吗？', ex_py: 'Mèimei yǒu jiějie gāo ma?', ex_vn: 'Em gái có cao bằng chị gái không?',
    exList: [
      { zh: '妹妹有姐姐高吗？', py: 'Mèimei yǒu jiějie gāo ma?', vn: 'Em gái có cao bằng chị gái không?' },
      { zh: '儿子的个子没有他那么高。', py: 'Érzi de gèzi méiyǒu tā nàme gāo.', vn: 'Con trai chúng ta không cao bằng cậu bé đó.' }
    ],
    hanzi: [{ c: '高', p: 'gāo', type: '象形字 · Chữ tượng hình', st: 10, ord: '亠 → 口 → 冂 → 口', rad: '高 (cao)', mean: 'cao', tip: 'Vốn là hình ngôi nhà tầng cao.', cf: '矮 (ǎi – thấp)', w: '高 / 个子高 / 高兴' }]
  },
  {
    n: 8, zh: '门口', py: 'ménkǒu', pos: 'Danh từ', vn: 'cửa ra vào, cổng', em: '🚪', lesson: 2,
    ex_zh: '门口有家奶茶店。', ex_py: 'Ménkǒu yǒu jiā nǎichádiàn.', ex_vn: 'Trước cửa có quán trà sữa.',
    exList: [
      { zh: '门口有家奶茶店。', py: 'Ménkǒu yǒu jiā nǎichádiàn.', vn: 'Trước cửa có quán trà sữa.' },
      { zh: '在咖啡店门口，他们在聊天儿。', py: 'Zài kāfēidiàn ménkǒu, tāmen zài liáotiānr.', vn: 'Ở trước cửa quán cà phê, họ đang trò chuyện.' }
    ],
    hanzi: [{ c: '门', p: 'mén', type: '象形字 · Chữ tượng hình', st: 3, ord: '丶 → 丨 → 乛', rad: '门 (môn – cửa)', mean: 'cửa', tip: 'Hình hai cánh cửa; 门口 = chỗ cửa ra vào.', cf: '', w: '门口 / 开门 / 大门' }]
  },
  {
    n: 9, zh: '咖啡', py: 'kāfēi', pos: 'Danh từ', vn: 'cà phê', em: '☕', lesson: 2,
    ex_zh: '我想喝咖啡，还是去咖啡店吧。', ex_py: 'Wǒ xiǎng hē kāfēi, háishi qù kāfēidiàn ba.', ex_vn: 'Anh muốn uống cà phê, hay là đến quán cà phê đi.',
    exList: [
      { zh: '我想喝咖啡，还是去咖啡店吧。', py: 'Wǒ xiǎng hē kāfēi, háishi qù kāfēidiàn ba.', vn: 'Anh muốn uống cà phê, hay là đến quán cà phê đi.' },
      { zh: '喝了咖啡，晚上就别想睡觉了。', py: 'Hēle kāfēi, wǎnshang jiù bié xiǎng shuìjiào le.', vn: 'Uống cà phê thì buổi tối khỏi ngủ mất.' }
    ],
    hanzi: [{ c: '咖', p: 'kā', type: '形声字 · Chữ hình thanh', st: 8, ord: '口 → 加', rad: '口 (khẩu – miệng)', mean: 'cà (phiên âm)', tip: '咖啡 là từ phiên âm, cả hai chữ đều mang bộ 口.', cf: '', w: '咖啡 / 咖啡店 / 喝咖啡' }]
  },
  {
    n: 10, zh: '离', py: 'lí', pos: 'Động từ', vn: 'cách, cách xa', em: '📍', lesson: 2,
    ex_zh: '咖啡店离这儿有点儿远。', ex_py: 'Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.', ex_vn: 'Quán cà phê cách chỗ này hơi xa.',
    exList: [
      { zh: '咖啡店离这儿有点儿远。', py: 'Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.', vn: 'Quán cà phê cách chỗ này hơi xa.' },
      { zh: '现在离我的生日还有三天。', py: 'Xiànzài lí wǒ de shēngrì hái yǒu sān tiān.', vn: 'Bây giờ còn ba ngày nữa là đến sinh nhật tôi.' }
    ],
    hanzi: [{ c: '离', p: 'lí', type: '形声字 · Chữ hình thanh', st: 10, ord: '亠 → 凶 → 禸', rad: '亠 (đầu)', mean: 'rời, cách', tip: 'A 离 B + 远/近 — nói khoảng cách nơi chốn hoặc thời gian.', cf: '从 (cóng – từ, bài 7)', w: '离 / 离这儿很近 / 离开' }]
  },
  {
    n: 11, zh: '近', py: 'jìn', pos: 'Tính từ', vn: 'gần', em: '📌', lesson: 3,
    ex_zh: '这里离家很近，还是走路吧。', ex_py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.', ex_vn: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.',
    exList: [
      { zh: '这里离家很近，还是走路吧。', py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.', vn: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.' },
      { zh: '学校离医院不远。', py: 'Xuéxiào lí yīyuàn bù yuǎn.', vn: 'Trường học cách bệnh viện không xa.' }
    ],
    hanzi: [{ c: '近', p: 'jìn', type: '形声字 · Chữ hình thanh', st: 7, ord: '斤 → 辶', rad: '辶 (sước – đi)', mean: 'gần', tip: 'Thường đi với 离: A 离 B 很近 / 不远.', cf: '远 (yuǎn – xa)', w: '近 / 很近 / 附近' }]
  },
  {
    n: 12, zh: '走路', py: 'zǒulù', pos: 'Động từ', vn: 'đi bộ', em: '🚶', lesson: 3,
    ex_zh: '这里离家很近，还是走路吧。', ex_py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.', ex_vn: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.',
    exList: [
      { zh: '这里离家很近，还是走路吧。', py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.', vn: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.' },
      { zh: '走半个多小时就到了。', py: 'Zǒu bàn ge duō xiǎoshí jiù dào le.', vn: 'Đi bộ hơn nửa tiếng thì tới.' }
    ],
    hanzi: [{ c: '路', p: 'lù', type: '形声字 · Chữ hình thanh', st: 13, ord: '⻊ → 各', rad: '⻊ (túc – chân)', mean: 'đường', tip: '走路 là từ li hợp: 走了半个小时的路.', cf: '打车 (dǎchē – bắt taxi)', w: '走路 / 路上 / 一路' }]
  },
  {
    n: 13, zh: '周', py: 'zhōu', pos: 'Danh từ', vn: 'tuần', em: '🗓️', lesson: 4,
    ex_zh: '这周刘明休息，我下班后跟他去了一家商店。', ex_py: 'Zhè zhōu Liú Míng xiūxi, wǒ xiàbān hòu gēn tā qùle yì jiā shāngdiàn.', ex_vn: 'Tuần này Lưu Minh được nghỉ, sau giờ làm tôi đã đi cùng anh ấy đến một cửa hàng.',
    exList: [
      { zh: '这周刘明休息，我下班后跟他去了一家商店。', py: 'Zhè zhōu Liú Míng xiūxi, wǒ xiàbān hòu gēn tā qùle yì jiā shāngdiàn.', vn: 'Tuần này Lưu Minh được nghỉ, sau giờ làm tôi đã đi cùng anh ấy đến một cửa hàng.' },
      { zh: '下周我们一起去打篮球吧。', py: 'Xià zhōu wǒmen yìqǐ qù dǎ lánqiú ba.', vn: 'Tuần sau chúng ta cùng đi chơi bóng rổ nhé.' }
    ],
    hanzi: [{ c: '周', p: 'zhōu', type: '会意字 · Chữ hội ý', st: 8, ord: '冂 → 土 → 口', rad: '口 (khẩu)', mean: 'tuần; vòng quanh', tip: '这周 / 上周 / 下周 — dùng như 星期.', cf: '星期 (xīngqī)', w: '周 / 这周 / 周末' }]
  }
];

var wuData = [
  { img: '☕', label: '咖啡', py: 'kāfēi', letter: 'A' },
  { img: '🚪', label: '门口', py: 'ménkǒu', letter: 'B' },
  { img: '🚶', label: '走路', py: 'zǒulù', letter: 'C' },
  { img: '📐', label: '个子', py: 'gèzi', letter: 'D' },
  { img: '👦', label: '男孩儿', py: 'nánháir', letter: 'E' },
  { img: '📌', label: '近', py: 'jìn', letter: 'F' }
];

var dialogData = [
  {
    scene: '在商店 · Trong cửa hàng (xem quần cho con trai)',
    preQuiz: [
      { q: '王一雪为什么想给儿子买裤子？', opts: ['儿子的裤子坏了', '儿子喜欢新裤子', '儿子明天过生日'], ans: 0 },
      { q: '刘明觉得哪条裤子好看？', opts: ['黑色的裤子', '白色的裤子', '上次买的裤子'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '儿子的裤子坏了，我们给他买条新的吧。', py: 'Érzi de kùzi huài le, wǒmen gěi tā mǎi tiáo xīn de ba.', vn: 'Quần của con trai bị rách rồi, chúng ta mua cho con một chiếc mới đi.' },
      { sp: 1, zh: '好啊。', py: 'Hǎo a.', vn: 'Nhất trí nhé.' },
      { sp: 0, zh: '你看这条黑色的怎么样？', py: 'Nǐ kàn zhè tiáo hēisè de zěnmeyàng?', vn: 'Anh xem chiếc màu đen này thế nào?' },
      { sp: 1, zh: '没有你上次买的那条好看。', py: 'Méiyǒu nǐ shàng cì mǎi de nà tiáo hǎokàn.', vn: 'Không đẹp bằng chiếc mà em đã mua lần trước.' },
      { sp: 0, zh: '旁边那个男孩儿就穿了这样的裤子，我觉得很好看啊！', py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi, wǒ juéde hěn hǎokàn a!', vn: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy, em thấy rất đẹp mà!' },
      { sp: 1, zh: '儿子的个子没有他那么高，穿上就不会太好看。', py: 'Érzi de gèzi méiyǒu tā nàme gāo, chuānshàng jiù bú huì tài hǎokàn.', vn: 'Con trai chúng ta không cao bằng cậu bé đó, mặc vào có thể không đẹp được thế.' },
      { sp: 0, zh: '好吧，我们再去那边看看。', py: 'Hǎo ba, wǒmen zài qù nàbian kànkan.', vn: 'Vâng, chúng ta qua bên kia xem thêm nhé.' }
    ]
  },
  {
    scene: '在商店门口 · Trước cửa hàng (chọn quán nước)',
    preQuiz: [
      { q: '王一雪想喝什么？', opts: ['牛奶', '奶茶', '咖啡'], ans: 1 },
      { q: '刘明现在想去哪儿？', opts: ['家里', '奶茶店', '咖啡店'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '门口有家奶茶店。你想喝杯奶茶吗？', py: 'Ménkǒu yǒu jiā nǎichádiàn. Nǐ xiǎng hē bēi nǎichá ma?', vn: 'Trước cửa có quán trà sữa. Anh có muốn uống trà sữa không?' },
      { sp: 1, zh: '我想喝咖啡，还是去咖啡店吧。', py: 'Wǒ xiǎng hē kāfēi, háishi qù kāfēidiàn ba.', vn: 'Anh muốn uống cà phê, hay là đến quán cà phê đi.' },
      { sp: 0, zh: '咖啡店离这儿有点儿远。', py: 'Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.', vn: 'Quán cà phê cách chỗ này hơi xa.' },
      { sp: 1, zh: '没关系，那家店的咖啡很好喝。', py: 'Méi guānxi, nà jiā diàn de kāfēi hěn hǎohē.', vn: 'Không sao đâu, cà phê ở quán đó rất ngon.' },
      { sp: 0, zh: '那你等一下，我去买杯奶茶。', py: 'Nà nǐ děng yíxià, wǒ qù mǎi bēi nǎichá.', vn: 'Vậy anh đợi một lát, em đi mua cốc trà sữa.' },
      { sp: 1, zh: '你不想喝咖啡吗？', py: 'Nǐ bù xiǎng hē kāfēi ma?', vn: 'Em không muốn uống cà phê sao?' },
      { sp: 0, zh: '喝了咖啡，晚上就别想睡觉了。', py: 'Hēle kāfēi, wǎnshang jiù bié xiǎng shuìjiào le.', vn: 'Uống cà phê thì buổi tối khỏi ngủ mất.' }
    ]
  },
  {
    scene: '在咖啡店门口 · Trước cửa quán cà phê (bàn cách về nhà)',
    preQuiz: [
      { q: '刘明想怎么回家？', opts: ['打车', '走路', '跑步'], ans: 0 },
      { q: '走路回家要多长时间？', opts: ['半个多小时', '一个多小时', '一个半小时'], ans: 0 }
    ],
    lines: [
      { sp: 1, zh: '我们打车回去吧。', py: 'Wǒmen dǎchē huíqù ba.', vn: 'Chúng ta bắt taxi về nhé.' },
      { sp: 0, zh: '这里离家很近，还是走路吧。', py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.', vn: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.' },
      { sp: 1, zh: '要走多长时间？', py: 'Yào zǒu duō cháng shíjiān?', vn: 'Đi bộ mất bao lâu vậy?' },
      { sp: 0, zh: '走半个多小时就到了。', py: 'Zǒu bàn ge duō xiǎoshí jiù dào le.', vn: 'Đi bộ hơn nửa tiếng thì sẽ tới.' },
      { sp: 1, zh: '好的。每天上下班都坐车，今天运动运动吧。', py: 'Hǎo de. Měi tiān shàng-xiàbān dōu zuò chē, jīntiān yùndòng yùndòng ba.', vn: 'Được rồi. Hàng ngày anh đi làm bằng ô tô, hôm nay vận động một chút vậy.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Vương Nhất Tuyết viết nhật ký)',
    preQuiz: [
      { q: '王一雪和刘明买到衣服了吗？', opts: ['买了几件', '没有买到', '买了一件'], ans: 1 },
      { q: '他们去哪儿坐了坐？', opts: ['商店', '商场', '咖啡店'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '这周刘明休息，我下班后跟他去了一家商店。', py: 'Zhè zhōu Liú Míng xiūxi, wǒ xiàbān hòu gēn tā qùle yì jiā shāngdiàn.', vn: 'Tuần này Lưu Minh được nghỉ, sau giờ làm tôi đã đi cùng anh ấy đến một cửa hàng.' },
      { sp: 0, zh: '商店里边的衣服没有大商场里的好看。', py: 'Shāngdiàn lǐbian de yīfu méiyǒu dà shāngchǎng lǐ de hǎokàn.', vn: 'Quần áo trong cửa hàng đó không đẹp bằng quần áo trong trung tâm thương mại.' },
      { sp: 0, zh: '我们没有买到喜欢的衣服，从商店出来就到咖啡店坐了坐。', py: 'Wǒmen méiyǒu mǎidào xǐhuan de yīfu, cóng shāngdiàn chūlái jiù dào kāfēidiàn zuòle zuò.', vn: 'Chúng tôi không mua được quần áo nào mình thích, sau khi rời cửa hàng, chúng tôi đến quán cà phê ngồi một lúc.' },
      { sp: 0, zh: '因为想运动运动，所以喝完东西，我们就走回家了。', py: 'Yīnwèi xiǎng yùndòng yùndòng, suǒyǐ hēwán dōngxi, wǒmen jiù zǒu huí jiā le.', vn: 'Vì muốn vận động một chút, nên sau khi uống xong chúng tôi đã đi bộ về nhà.' }
    ]
  }
];

var listenData = [
  {
    audio: '儿子的裤子坏了，我们给他买条新的吧。你看这条黑色的怎么样？没有你上次买的那条好看。',
    questions: [
      { q: '为什么要给儿子买裤子？', opts: ['裤子坏了', '儿子过生日', '裤子太小了'], ans: 0 },
      { q: '刘明觉得哪条好看？', opts: ['黑色的', '白色的', '上次买的'], ans: 2 }
    ]
  },
  {
    audio: '门口有家奶茶店。你想喝杯奶茶吗？我想喝咖啡，还是去咖啡店吧。咖啡店离这儿有点儿远。没关系，那家店的咖啡很好喝。',
    questions: [
      { q: '刘明想喝什么？', opts: ['牛奶', '奶茶', '咖啡'], ans: 2 },
      { q: '咖啡店离这儿远吗？', opts: ['有点儿远', '很近', '就在门口'], ans: 0 }
    ]
  },
  {
    audio: '我们打车回去吧。这里离家很近，还是走路吧。要走多长时间？走半个多小时就到了。',
    questions: [
      { q: '这里离家远吗？', opts: ['很近', '很远', '有点儿远'], ans: 0 },
      { q: '走路要走多长时间？', opts: ['半个多小时', '一个多小时', '两个小时'], ans: 0 }
    ]
  },
  {
    audio: '这周刘明休息，我下班后跟他去了一家商店。商店里边的衣服没有大商场里的好看。我们没有买到喜欢的衣服。因为想运动运动，所以喝完东西，我们就走回家了。',
    questions: [
      { q: '商店的衣服怎么样？', opts: ['没有大商场的好看', '比大商场的好看', '跟大商场的一样'], ans: 0 },
      { q: '他们怎么回家的？', opts: ['走回家的', '打车回家的', '坐车回家的'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '裤子', right: '坏了' },
  { left: '咖啡店离这儿', right: '有点儿远' },
  { left: '这里离家', right: '很近' },
  { left: '走', right: '半个多小时' },
  { left: '个子', right: '没有他那么高' },
  { left: '门口', right: '有家奶茶店' }
];

var fillData = [
  { pre: '儿子的裤子', blank: '坏', post: '了，我们给他买条新的吧。', hint: '(hỏng)', ans: '坏' },
  { pre: '', blank: '旁边', post: '那个男孩儿就穿了这样的裤子。', hint: '(bên cạnh)', ans: '旁边' },
  { pre: '儿子的', blank: '个子', post: '没有他那么高。', hint: '(chiều cao)', ans: '个子' },
  { pre: '', blank: '门口', post: '有家奶茶店。', hint: '(cửa ra vào)', ans: '门口' },
  { pre: '咖啡店', blank: '离', post: '这儿有点儿远。', hint: '(cách)', ans: '离' },
  { pre: '这里离家很', blank: '近', post: '，还是走路吧。', hint: '(gần)', ans: '近' },
  { pre: '要', blank: '走路', post: '还是打车？', hint: '(đi bộ)', ans: '走路' },
  { pre: '这', blank: '周', post: '刘明休息。', hint: '(tuần)', ans: '周' }
];

var sortData = [
  { words: ['儿子', '的', '个子', '没有', '他', '那么', '高', '。'], ans: '儿子的个子没有他那么高。', audio: '儿子的个子没有他那么高。' },
  { words: ['咖啡店', '离', '这儿', '有点儿', '远', '。'], ans: '咖啡店离这儿有点儿远。', audio: '咖啡店离这儿有点儿远。' },
  { words: ['这里', '离', '家', '很', '近', '，', '还是', '走路', '吧', '。'], ans: '这里离家很近，还是走路吧。', audio: '这里离家很近，还是走路吧。' },
  { words: ['走', '半个', '多', '小时', '就', '到', '了', '。'], ans: '走半个多小时就到了。', audio: '走半个多小时就到了。' },
  { words: ['我', '去', '买', '杯', '奶茶', '。'], ans: '我去买杯奶茶。', audio: '我去买杯奶茶。' },
  { words: ['陈天中', '跑步', '跑', '了', '两', '个', '小时', '。'], ans: '陈天中跑步跑了两个小时。', audio: '陈天中跑步跑了两个小时。' }
];

var mcData = [
  { q: '昨天＿＿今天这么冷。', opts: ['没有', '不比', '很', '更'], ans: 0 },
  { q: '学校＿＿医院不远。', opts: ['离', '从', '比', '往'], ans: 0 },
  { q: '他们学中文学了＿＿。', opts: ['两年', '年两', '二年', '两个年'], ans: 0 },
  { q: '李文等了她＿＿。', opts: ['一个小时', '小时一个', '一小时个', '个一小时'], ans: 0 },
  { q: 'Câu nào đúng khi nói "Trần Thiên Trung chạy bộ hai tiếng"?', opts: ['陈天中跑步跑了两个小时。', '陈天中跑步了两个小时。', '陈天中两个小时跑步了。', '陈天中跑了步两个小时。'], ans: 0 },
  { q: '“没有” trong câu so sánh có nghĩa là gì?', opts: ['Không bằng', 'Hơn', 'Bằng nhau', 'Không có'], ans: 0 },
  { q: '他写了半个小时汉字了。Câu này có nghĩa là gì?', opts: ['Bây giờ vẫn đang viết', 'Đã viết xong', 'Chưa bắt đầu viết', 'Sẽ viết nửa tiếng'], ans: 0 },
  { q: '现在＿＿我的生日还有三天。', opts: ['离', '从', '比', '在'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你家离学校（公司）远不远？',
      q_vn: 'Nhà bạn cách trường (công ty) có xa không?',
      hint: '我家离……很近／有点儿远。',
      sample: '我家离公司很近，走路半个多小时就到了，所以我每天都走路上班。',
      sample_vn: 'Nhà tôi cách công ty rất gần, đi bộ hơn nửa tiếng là tới, nên ngày nào tôi cũng đi bộ đi làm.',
      note: 'A 离 B + 远/近; bổ ngữ thời lượng đặt sau động từ (走半个多小时).'
    },
    {
      q_zh: '你每天从家到学校（公司）要多长时间？',
      q_vn: 'Mỗi ngày bạn đi từ nhà đến trường (công ty) mất bao lâu?',
      hint: '我坐车／走路……了……',
      sample: '我每天坐车坐半个小时，走路要走一个多小时，所以我一般坐车去。',
      sample_vn: 'Mỗi ngày tôi ngồi xe nửa tiếng, đi bộ thì mất hơn một tiếng, nên tôi thường đi xe.',
      note: 'Động từ li hợp/có tân ngữ: lặp lại động từ trước bổ ngữ thời lượng.'
    },
    {
      q_zh: '你的个子有你的朋友高吗？',
      q_vn: 'Bạn có cao bằng bạn của bạn không?',
      hint: '我没有他那么高。／我比他高。',
      sample: '我的个子没有他那么高，但是我跑得比他快。',
      sample_vn: 'Tôi không cao bằng bạn ấy, nhưng tôi chạy nhanh hơn bạn ấy.',
      note: 'A 没有 B (这么/那么) + tính từ = "không bằng".'
    },
    {
      q_zh: '你喜欢喝咖啡还是喝奶茶？为什么？',
      q_vn: 'Bạn thích uống cà phê hay trà sữa? Vì sao?',
      hint: '我喜欢喝……，因为……',
      sample: '我喜欢喝奶茶，因为喝了咖啡，晚上就别想睡觉了。',
      sample_vn: 'Tôi thích uống trà sữa, vì uống cà phê rồi thì buổi tối khỏi ngủ mất.',
      note: 'Ôn 因为……所以…… của bài 4 khi nêu lý do.'
    },
    {
      q_zh: '这周你做了什么？',
      q_vn: 'Tuần này bạn đã làm gì?',
      hint: '这周我……，还……',
      sample: '这周我下班后跟朋友去了一家商店，虽然没有买到喜欢的衣服，但是我们去咖啡店坐了坐。',
      sample_vn: 'Tuần này sau giờ làm tôi đi cùng bạn đến một cửa hàng, tuy không mua được quần áo mình thích nhưng chúng tôi đã đến quán cà phê ngồi một lúc.',
      note: 'Kết hợp 虽然……但是…… (bài 8) với từ mới 周.'
    }
  ]
};

var translateData = [
  { vi: 'Con trai chúng ta không cao bằng cậu bé đó.', zh: '儿子的个子没有他那么高。', py: 'Érzi de gèzi méiyǒu tā nàme gāo.' },
  { vi: 'Quán cà phê cách chỗ này hơi xa.', zh: '咖啡店离这儿有点儿远。', py: 'Kāfēidiàn lí zhèr yǒudiǎnr yuǎn.' },
  { vi: 'Chỗ này cách nhà mình rất gần, hay là đi bộ về đi.', zh: '这里离家很近，还是走路吧。', py: 'Zhèlǐ lí jiā hěn jìn, háishi zǒulù ba.' },
  { vi: 'Đi bộ hơn nửa tiếng thì tới.', zh: '走半个多小时就到了。', py: 'Zǒu bàn ge duō xiǎoshí jiù dào le.' },
  { vi: 'Vậy anh đợi một lát, em đi mua cốc trà sữa.', zh: '那你等一下，我去买杯奶茶。', py: 'Nà nǐ děng yíxià, wǒ qù mǎi bēi nǎichá.' }
];

var translateDataRev = [
  { vi: 'Quần của con trai bị rách rồi.', zh: '儿子的裤子坏了。', py: 'Érzi de kùzi huài le.' },
  { vi: 'Cậu bé bên cạnh đang mặc kiểu quần này đấy.', zh: '旁边那个男孩儿就穿了这样的裤子。', py: 'Pángbiān nàge nánháir jiù chuānle zhèyàng de kùzi.' },
  { vi: 'Trước cửa có quán trà sữa.', zh: '门口有家奶茶店。', py: 'Ménkǒu yǒu jiā nǎichádiàn.' },
  { vi: 'Uống cà phê thì buổi tối khỏi ngủ mất.', zh: '喝了咖啡，晚上就别想睡觉了。', py: 'Hēle kāfēi, wǎnshang jiù bié xiǎng shuìjiào le.' },
  { vi: 'Quần áo trong cửa hàng không đẹp bằng quần áo trong trung tâm thương mại.', zh: '商店里边的衣服没有大商场里的好看。', py: 'Shāngdiàn lǐbian de yīfu méiyǒu dà shāngchǎng lǐ de hǎokàn.' }
];
