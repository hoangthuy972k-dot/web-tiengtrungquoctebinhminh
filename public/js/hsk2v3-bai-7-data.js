// HSK 2 (3.0 Mới) · Bài 7 · 他篮球打得很好
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 7, trang 056-065.

var vocabData = [
  {
    n: 1, zh: '从', py: 'cóng', pos: 'Giới từ', vn: 'từ (điểm xuất phát)', em: '📍', lesson: 1,
    ex_zh: '安妮，你是什么时候从北京回来的？', ex_py: 'Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?', ex_vn: 'Annie, bạn từ Bắc Kinh về khi nào vậy?',
    exList: [
      { zh: '安妮，你是什么时候从北京回来的？', py: 'Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?', vn: 'Annie, bạn từ Bắc Kinh về khi nào vậy?' },
      { zh: '从上小学开始，我每天都跟爸爸去运动。', py: 'Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.', vn: 'Bắt đầu từ khi học tiểu học, ngày nào tôi cũng tập thể thao cùng bố.' }
    ],
    hanzi: [{ c: '从', p: 'cóng', type: '会意字 · Chữ hội ý', st: 4, ord: '人 → 人', rad: '人 (nhân – người)', mean: 'từ; đi theo', tip: 'Hai chữ 人 nối nhau: người này đi theo người kia.', cf: '', w: '从……到…… / 从北京 / 从来' }]
  },
  {
    n: 2, zh: '往', py: 'wǎng', pos: 'Giới từ / Động từ', vn: 'hướng tới, về phía', em: '➡️', lesson: 1,
    ex_zh: '你怎么一下课就往外跑？', ex_py: 'Nǐ zěnme yí xiàkè jiù wǎng wài pǎo?', ex_vn: 'Sao vừa tan học bạn đã chạy ra ngoài ngay vậy?',
    exList: [
      { zh: '你怎么一下课就往外跑？', py: 'Nǐ zěnme yí xiàkè jiù wǎng wài pǎo?', vn: 'Sao vừa tan học bạn đã chạy ra ngoài ngay vậy?' },
      { zh: '往前走，商场就在右边。', py: 'Wǎng qián zǒu, shāngchǎng jiù zài yòubian.', vn: 'Đi về phía trước, trung tâm thương mại ở bên phải.' }
    ],
    hanzi: [{ c: '往', p: 'wǎng', type: '形声字 · Chữ hình thanh', st: 8, ord: '彳 → 主', rad: '彳 (xích – bước đi)', mean: 'đi về phía', tip: 'Bộ 彳 chỉ việc đi lại: 往 + phương hướng (前/外/左/右).', cf: '', w: '往外 / 往前 / 往这儿' }]
  },
  {
    n: 3, zh: '跑', py: 'pǎo', pos: 'Động từ', vn: 'chạy', em: '🏃', lesson: 1,
    ex_zh: '你跑得快不快？', ex_py: 'Nǐ pǎo de kuài bu kuài?', ex_vn: 'Bạn chạy có nhanh không?',
    exList: [
      { zh: '你跑得快不快？', py: 'Nǐ pǎo de kuài bu kuài?', vn: 'Bạn chạy có nhanh không?' },
      { zh: '我跑得不快，也不太喜欢跑步。', py: 'Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.', vn: 'Mình chạy không nhanh, cũng không thích chạy bộ lắm.' }
    ],
    hanzi: [{ c: '跑', p: 'pǎo', type: '形声字 · Chữ hình thanh', st: 12, ord: '足 → 包', rad: '⻊ (túc – chân)', mean: 'chạy', tip: '⻊ (chân) + 包 (bāo) chỉ âm: việc làm bằng chân.', cf: '走 (zǒu – đi)', w: '跑步 / 往外跑 / 跑得快' }]
  },
  {
    n: 4, zh: '打', py: 'dǎ', pos: 'Động từ', vn: 'đánh, chơi (thể thao)', em: '🏀', lesson: 1,
    ex_zh: '我跟同学说好了，一起去打篮球。', ex_py: 'Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.', ex_vn: 'Mình đã hẹn với các bạn cùng đi chơi bóng rổ rồi.',
    exList: [
      { zh: '我跟同学说好了，一起去打篮球。', py: 'Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.', vn: 'Mình đã hẹn với các bạn cùng đi chơi bóng rổ rồi.' },
      { zh: '我一到家，妈妈就打来电话了。', py: 'Wǒ yí dào jiā, māma jiù dǎlái diànhuà le.', vn: 'Mình vừa về đến nhà là mẹ gọi điện đến ngay.' }
    ],
    hanzi: [{ c: '打', p: 'dǎ', type: '形声字 · Chữ hình thanh', st: 5, ord: '扌 → 丁', rad: '扌 (thủ – tay)', mean: 'đánh; chơi; gọi', tip: 'Môn thể thao dùng tay thì đi với 打 (打篮球), dùng chân thì đi với 踢 (踢足球).', cf: '踢 (tī – đá)', w: '打篮球 / 打电话 / 打开' }]
  },
  {
    n: 5, zh: '篮球', py: 'lánqiú', pos: 'Danh từ', vn: 'bóng rổ', em: '🏀', lesson: 1,
    ex_zh: '他篮球打得很好。', ex_py: 'Tā lánqiú dǎ de hěn hǎo.', ex_vn: 'Bạn ấy chơi bóng rổ rất hay.',
    exList: [
      { zh: '他篮球打得很好。', py: 'Tā lánqiú dǎ de hěn hǎo.', vn: 'Bạn ấy chơi bóng rổ rất hay.' },
      { zh: '一到星期六，陈天中就跟同学去打篮球。', py: 'Yí dào xīngqīliù, Chén Tiānzhōng jiù gēn tóngxué qù dǎ lánqiú.', vn: 'Cứ đến thứ Bảy là Trần Thiên Trung lại đi chơi bóng rổ cùng các bạn.' }
    ],
    hanzi: [{ c: '篮', p: 'lán', type: '形声字 · Chữ hình thanh', st: 16, ord: '⺮ → 监', rad: '⺮ (trúc – tre)', mean: 'rổ, giỏ', tip: '篮 vốn là cái rổ đan bằng tre — 篮球 là "bóng ném vào rổ".', cf: '', w: '篮球 / 打篮球' }]
  },
  {
    n: 6, zh: '运动', py: 'yùndòng', pos: 'Danh từ / Động từ', vn: 'thể thao; vận động, tập thể dục', em: '⚽', lesson: 2,
    ex_zh: '你还喜欢什么运动？', ex_py: 'Nǐ hái xǐhuan shénme yùndòng?', ex_vn: 'Bạn còn thích môn thể thao nào khác?',
    exList: [
      { zh: '你还喜欢什么运动？', py: 'Nǐ hái xǐhuan shénme yùndòng?', vn: 'Bạn còn thích môn thể thao nào khác?' },
      { zh: '我一有时间就去运动。', py: 'Wǒ yì yǒu shíjiān jiù qù yùndòng.', vn: 'Hễ có thời gian là tôi lại đi tập thể thao.' }
    ],
    hanzi: [{ c: '运', p: 'yùn', type: '形声字 · Chữ hình thanh', st: 7, ord: '云 → 辶', rad: '辶 (sước – đi)', mean: 'vận chuyển, vận động', tip: '运动 = 运 (chuyển) + 动 (động): làm cho cơ thể chuyển động.', cf: '', w: '运动 / 去运动 / 运动员' }]
  },
  {
    n: 7, zh: '踢', py: 'tī', pos: 'Động từ', vn: 'đá', em: '🦵', lesson: 2,
    ex_zh: '我还喜欢踢足球。', ex_py: 'Wǒ hái xǐhuan tī zúqiú.', ex_vn: 'Mình còn thích chơi bóng đá nữa.',
    exList: [
      { zh: '我还喜欢踢足球。', py: 'Wǒ hái xǐhuan tī zúqiú.', vn: 'Mình còn thích chơi bóng đá nữa.' },
      { zh: '你踢得怎么样？', py: 'Nǐ tī de zěnmeyàng?', vn: 'Bạn chơi (đá) có tốt không?' }
    ],
    hanzi: [{ c: '踢', p: 'tī', type: '形声字 · Chữ hình thanh', st: 15, ord: '足 → 易', rad: '⻊ (túc – chân)', mean: 'đá', tip: 'Bộ 足 cho biết hành động bằng chân; 易 (yì) chỉ âm.', cf: '打 (dǎ – đánh, chơi bằng tay)', w: '踢足球 / 踢球 / 踢得好' }]
  },
  {
    n: 8, zh: '足球', py: 'zúqiú', pos: 'Danh từ', vn: 'bóng đá', em: '⚽', lesson: 2,
    ex_zh: '一到星期天就跟朋友们去踢足球。', ex_py: 'Yí dào xīngqītiān jiù gēn péngyoumen qù tī zúqiú.', ex_vn: 'Cứ đến Chủ nhật là mình lại đi đá bóng cùng bạn bè.',
    exList: [
      { zh: '一到星期天就跟朋友们去踢足球。', py: 'Yí dào xīngqītiān jiù gēn péngyoumen qù tī zúqiú.', vn: 'Cứ đến Chủ nhật là mình lại đi đá bóng cùng bạn bè.' },
      { zh: '足球踢得不错。', py: 'Zúqiú tī de búcuò.', vn: 'Chơi bóng đá khá tốt.' }
    ],
    hanzi: [{ c: '足', p: 'zú', type: '象形字 · Chữ tượng hình', st: 7, ord: '口 → 止', rad: '足 (túc – chân)', mean: 'chân; đủ', tip: 'Hình bàn chân — 足球 là môn bóng chơi bằng chân.', cf: '', w: '足球 / 踢足球' }]
  },
  {
    n: 9, zh: '球', py: 'qiú', pos: 'Danh từ', vn: 'quả bóng', em: '🏐', lesson: 2,
    ex_zh: '一到星期天就跟朋友们去踢球。', ex_py: 'Yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.', ex_vn: 'Cứ đến Chủ nhật là mình lại đi đá bóng cùng bạn bè.',
    exList: [
      { zh: '一到星期天就跟朋友们去踢球。', py: 'Yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.', vn: 'Cứ đến Chủ nhật là mình lại đi đá bóng cùng bạn bè.' },
      { zh: '你足球踢得怎么样？', py: 'Nǐ zúqiú tī de zěnmeyàng?', vn: 'Bạn đá bóng thế nào?' }
    ],
    hanzi: [{ c: '球', p: 'qiú', type: '形声字 · Chữ hình thanh', st: 11, ord: '王 → 求', rad: '王 (ngọc)', mean: 'quả bóng, quả cầu', tip: 'Bộ 王 (ngọc) gợi vật tròn; 求 (qiú) chỉ âm.', cf: '', w: '球 / 篮球 / 足球 / 踢球' }]
  },
  {
    n: 10, zh: '得', py: 'de', pos: 'Trợ từ', vn: 'trợ từ nối động từ/tính từ với bổ ngữ', em: '🔗', lesson: 2,
    ex_zh: '我踢得还可以。', ex_py: 'Wǒ tī de hái kěyǐ.', ex_vn: 'Mình chơi cũng tàm tạm.',
    exList: [
      { zh: '我踢得还可以。', py: 'Wǒ tī de hái kěyǐ.', vn: 'Mình chơi cũng tàm tạm.' },
      { zh: '他们玩得很高兴。', py: 'Tāmen wán de hěn gāoxìng.', vn: 'Họ chơi rất vui.' }
    ],
    hanzi: [{ c: '得', p: 'de', type: '形声字 · Chữ hình thanh', st: 11, ord: '彳 → 旦 → 寸', rad: '彳 (xích – bước đi)', mean: '(de) trợ từ bổ ngữ; (dé) được', tip: '的 trước danh từ · 地 trước động từ · 得 sau động từ.', cf: '的 (de) · 地 (de)', w: '跑得快 / 唱得好听 / 玩得很高兴' }]
  },
  {
    n: 11, zh: '跑步', py: 'pǎobù', pos: 'Động từ', vn: 'chạy bộ', em: '🏃‍♀️', lesson: 3,
    ex_zh: '跑步呢？你跑得快不快？', ex_py: 'Pǎobù ne? Nǐ pǎo de kuài bu kuài?', ex_vn: 'Còn chạy bộ thì sao? Bạn chạy có nhanh không?',
    exList: [
      { zh: '跑步呢？你跑得快不快？', py: 'Pǎobù ne? Nǐ pǎo de kuài bu kuài?', vn: 'Còn chạy bộ thì sao? Bạn chạy có nhanh không?' },
      { zh: '我不太喜欢跑步。', py: 'Wǒ bú tài xǐhuan pǎobù.', vn: 'Mình không thích chạy bộ lắm.' }
    ],
    hanzi: [{ c: '步', p: 'bù', type: '会意字 · Chữ hội ý', st: 7, ord: '止 → 少', rad: '止 (chỉ – bàn chân)', mean: 'bước chân', tip: '跑步 là từ li hợp: nói "跑得快" chứ không nói "跑步得快".', cf: '', w: '跑步 / 一步 / 散步' }]
  },
  {
    n: 12, zh: '游泳', py: 'yóuyǒng', pos: 'Động từ', vn: 'bơi, bơi lội', em: '🏊', lesson: 3,
    ex_zh: '那你喜欢游泳吗？', ex_py: 'Nà nǐ xǐhuan yóuyǒng ma?', ex_vn: 'Vậy bạn có thích bơi không?',
    exList: [
      { zh: '那你喜欢游泳吗？', py: 'Nà nǐ xǐhuan yóuyǒng ma?', vn: 'Vậy bạn có thích bơi không?' },
      { zh: '游泳游得也很快。', py: 'Yóuyǒng yóu de yě hěn kuài.', vn: 'Bơi cũng rất nhanh.' }
    ],
    hanzi: [{ c: '泳', p: 'yǒng', type: '形声字 · Chữ hình thanh', st: 8, ord: '氵 → 永', rad: '氵 (thuỷ – nước)', mean: 'bơi', tip: '游泳 cũng là từ li hợp: 游泳游得不快.', cf: '', w: '游泳 / 去游泳 / 游泳池' }]
  },
  {
    n: 13, zh: '游', py: 'yóu', pos: 'Động từ', vn: 'bơi', em: '🌊', lesson: 3,
    ex_zh: '喜欢，但我游泳游得不快。', ex_py: 'Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.', ex_vn: 'Có, nhưng mình bơi không nhanh lắm.',
    exList: [
      { zh: '喜欢，但我游泳游得不快。', py: 'Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.', vn: 'Có, nhưng mình bơi không nhanh lắm.' },
      { zh: '她游得比我快。', py: 'Tā yóu de bǐ wǒ kuài.', vn: 'Cô ấy bơi nhanh hơn tôi.' }
    ],
    hanzi: [{ c: '游', p: 'yóu', type: '形声字 · Chữ hình thanh', st: 12, ord: '氵 → 方 → 子', rad: '氵 (thuỷ – nước)', mean: 'bơi; đi chơi', tip: 'Bộ 氵 cho biết hành động ở dưới nước.', cf: '', w: '游 / 游泳 / 旅游' }]
  },
  {
    n: 14, zh: '爱好', py: 'àihào', pos: 'Danh từ / Động từ', vn: 'sở thích; thích', em: '💚', lesson: 4,
    ex_zh: '我的爱好是运动。', ex_py: 'Wǒ de àihào shì yùndòng.', ex_vn: 'Sở thích của tôi là thể thao.',
    exList: [
      { zh: '我的爱好是运动。', py: 'Wǒ de àihào shì yùndòng.', vn: 'Sở thích của tôi là thể thao.' },
      { zh: '你有什么爱好？', py: 'Nǐ yǒu shénme àihào?', vn: 'Bạn có sở thích gì?' }
    ],
    hanzi: [{ c: '爱', p: 'ài', type: '会意字 · Chữ hội ý', st: 10, ord: '爫 → 冖 → 友', rad: '爫 (trảo)', mean: 'yêu, thích', tip: '爱好 chỉ sở thích lâu dài, khác 喜欢 (thích, dùng rộng hơn).', cf: '喜欢 (xǐhuan)', w: '爱好 / 爱吃 / 我爱你' }]
  },
  {
    n: 15, zh: '开始', py: 'kāishǐ', pos: 'Động từ / Danh từ', vn: 'bắt đầu; lúc đầu', em: '▶️', lesson: 4,
    ex_zh: '从上小学开始，我每天都跟爸爸去运动。', ex_py: 'Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.', ex_vn: 'Bắt đầu từ khi học tiểu học, ngày nào tôi cũng tập thể thao cùng bố.',
    exList: [
      { zh: '从上小学开始，我每天都跟爸爸去运动。', py: 'Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.', vn: 'Bắt đầu từ khi học tiểu học, ngày nào tôi cũng tập thể thao cùng bố.' },
      { zh: '我8岁就开始学中文了。', py: 'Wǒ bā suì jiù kāishǐ xué Zhōngwén le.', vn: 'Tôi bắt đầu học tiếng Trung từ năm 8 tuổi.' }
    ],
    hanzi: [{ c: '始', p: 'shǐ', type: '形声字 · Chữ hình thanh', st: 8, ord: '女 → 台', rad: '女 (nữ)', mean: 'bắt đầu', tip: '从……开始 = "bắt đầu từ…", rất hay dùng với mốc thời gian.', cf: '', w: '开始 / 从……开始 / 开始学' }]
  }
];

var wuData = [
  { img: '🏀', label: '篮球', py: 'lánqiú', letter: 'A' },
  { img: '⚽', label: '足球', py: 'zúqiú', letter: 'B' },
  { img: '🏃', label: '跑步', py: 'pǎobù', letter: 'C' },
  { img: '🏊', label: '游泳', py: 'yóuyǒng', letter: 'D' },
  { img: '💚', label: '爱好', py: 'àihào', letter: 'E' },
  { img: '▶️', label: '开始', py: 'kāishǐ', letter: 'F' }
];

var dialogData = [
  {
    scene: '在教室 · Trong lớp học (Annie và Trần Thiên Trung trò chuyện)',
    preQuiz: [
      { q: '安妮是什么时候回来的？', opts: ['昨天早上', '昨天上午', '昨天下午'], ans: 2 },
      { q: '安妮想跟陈天中去做什么？', opts: ['去教室', '打篮球', '去北京'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '安妮，你是什么时候从北京回来的？', py: 'Ānnī, nǐ shì shénme shíhou cóng Běijīng huílái de?', vn: 'Annie, bạn từ Bắc Kinh về khi nào vậy?' },
      { sp: 1, zh: '昨天下午。天中，你怎么一下课就往外跑？', py: 'Zuótiān xiàwǔ. Tiānzhōng, nǐ zěnme yí xiàkè jiù wǎng wài pǎo?', vn: 'Chiều hôm qua. Thiên Trung, sao vừa mới tan học bạn đã chạy ra ngoài ngay vậy?' },
      { sp: 0, zh: '我跟同学说好了，一起去打篮球。', py: 'Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.', vn: 'Mình đã hẹn với các bạn cùng đi chơi bóng rổ rồi.' },
      { sp: 1, zh: '我也想跟你们一起玩。', py: 'Wǒ yě xiǎng gēn nǐmen yìqǐ wán.', vn: 'Mình cũng muốn chơi cùng các bạn.' },
      { sp: 0, zh: '没问题，走吧。', py: 'Méi wèntí, zǒu ba.', vn: 'Không vấn đề gì, đi thôi!' }
    ]
  },
  {
    scene: '在校园 · Trong khuôn viên trường (vừa đi vừa trò chuyện)',
    preQuiz: [
      { q: '星期天陈天中做什么？', opts: ['学中文', '踢足球', '打篮球'], ans: 1 },
      { q: '星期天陈天中跟谁去玩？', opts: ['李文', '同学们', '朋友们'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '天中，你是不是很喜欢打篮球？', py: 'Tiānzhōng, nǐ shì bu shì hěn xǐhuan dǎ lánqiú?', vn: 'Thiên Trung, có phải bạn rất thích chơi bóng rổ không?' },
      { sp: 0, zh: '没错。', py: 'Méi cuò.', vn: 'Đúng vậy.' },
      { sp: 1, zh: '你还喜欢什么运动？', py: 'Nǐ hái xǐhuan shénme yùndòng?', vn: 'Bạn còn thích môn thể thao nào khác?' },
      { sp: 0, zh: '我还喜欢踢足球，一到星期天就跟朋友们去踢球。', py: 'Wǒ hái xǐhuan tī zúqiú, yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.', vn: 'Mình còn thích chơi bóng đá nữa, cứ đến Chủ nhật mình lại đi đá bóng cùng bạn bè.' },
      { sp: 1, zh: '你踢得怎么样？', py: 'Nǐ tī de zěnmeyàng?', vn: 'Bạn chơi có tốt không?' },
      { sp: 0, zh: '我踢得还可以。', py: 'Wǒ tī de hái kěyǐ.', vn: 'Mình chơi cũng tàm tạm.' }
    ]
  },
  {
    scene: '在校园 · Trong khuôn viên trường (nói về các môn thể thao)',
    preQuiz: [
      { q: '安妮打篮球打得怎么样？', opts: ['很好', '不好', '还可以'], ans: 2 },
      { q: '安妮喜欢做什么？', opts: ['游泳', '跑步', '踢球'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '你篮球打得怎么样？', py: 'Nǐ lánqiú dǎ de zěnmeyàng?', vn: 'Bạn chơi bóng rổ thế nào?' },
      { sp: 1, zh: '打得还可以。', py: 'Dǎ de hái kěyǐ.', vn: 'Chơi cũng tàm tạm thôi.' },
      { sp: 0, zh: '跑步呢？你跑得快不快？', py: 'Pǎobù ne? Nǐ pǎo de kuài bu kuài?', vn: 'Còn chạy bộ thì sao? Bạn chạy có nhanh không?' },
      { sp: 1, zh: '我跑得不快，也不太喜欢跑步。', py: 'Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.', vn: 'Mình chạy không nhanh, mình cũng không thích chạy bộ lắm.' },
      { sp: 0, zh: '那你喜欢游泳吗？', py: 'Nà nǐ xǐhuan yóuyǒng ma?', vn: 'Vậy bạn có thích bơi không?' },
      { sp: 1, zh: '喜欢，但我游泳游得不快。', py: 'Xǐhuan, dàn wǒ yóuyǒng yóu de bú kuài.', vn: 'Có, nhưng mình bơi không nhanh lắm.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Trần Thiên Trung viết nhật ký)',
    preQuiz: [
      { q: '陈天中非常喜欢运动，对吗？', opts: ['对', '不对', '没说'], ans: 0 },
      { q: '陈天中一有时间就做什么？', opts: ['运动', '休息', '跟爸爸出去'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。', py: 'Wǒ de àihào shì yùndòng. Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.', vn: 'Sở thích của tôi là thể thao. Bắt đầu từ khi học tiểu học, ngày nào tôi cũng tập thể thao cùng bố.' },
      { sp: 0, zh: '现在我篮球打得很好，足球踢得不错，游泳游得也很快。', py: 'Xiànzài wǒ lánqiú dǎ de hěn hǎo, zúqiú tī de búcuò, yóuyǒng yóu de yě hěn kuài.', vn: 'Bây giờ tôi chơi bóng rổ rất giỏi, chơi bóng đá khá tốt, bơi cũng rất nhanh.' },
      { sp: 0, zh: '我一有时间就去运动。', py: 'Wǒ yì yǒu shíjiān jiù qù yùndòng.', vn: 'Hễ có thời gian là tôi đi chơi thể thao.' }
    ]
  }
];

var listenData = [
  {
    audio: '安妮，你是什么时候从北京回来的？昨天下午。天中，你怎么一下课就往外跑？我跟同学说好了，一起去打篮球。',
    questions: [
      { q: '安妮是什么时候回来的？', opts: ['昨天早上', '昨天上午', '昨天下午'], ans: 2 },
      { q: '陈天中下课以后去做什么？', opts: ['打篮球', '回家', '去教室'], ans: 0 }
    ]
  },
  {
    audio: '天中，你是不是很喜欢打篮球？没错。你还喜欢什么运动？我还喜欢踢足球，一到星期天就跟朋友们去踢球。',
    questions: [
      { q: '陈天中还喜欢什么运动？', opts: ['游泳', '踢足球', '跑步'], ans: 1 },
      { q: '他星期天跟谁去踢球？', opts: ['朋友们', '爸爸', '老师'], ans: 0 }
    ]
  },
  {
    audio: '跑步呢？你跑得快不快？我跑得不快，也不太喜欢跑步。那你喜欢游泳吗？喜欢，但我游泳游得不快。',
    questions: [
      { q: '安妮跑得怎么样？', opts: ['跑得很快', '跑得不快', '跑得还可以'], ans: 1 },
      { q: '安妮喜欢游泳吗？', opts: ['喜欢', '不喜欢', '没说'], ans: 0 }
    ]
  },
  {
    audio: '我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。现在我篮球打得很好，足球踢得不错，游泳游得也很快。我一有时间就去运动。',
    questions: [
      { q: '他从什么时候开始运动？', opts: ['从上小学开始', '从去年开始', '从上个月开始'], ans: 0 },
      { q: '他一有时间就做什么？', opts: ['去运动', '休息', '看电影'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '打', right: '篮球' },
  { left: '踢', right: '足球' },
  { left: '跑得', right: '很快' },
  { left: '游泳游得', right: '不快' },
  { left: '一下课', right: '就往外跑' },
  { left: '从上小学', right: '开始' }
];

var fillData = [
  { pre: '你是什么时候', blank: '从', post: '北京回来的？', hint: '(từ – giới từ)', ans: '从' },
  { pre: '你怎么一下课就', blank: '往', post: '外跑？', hint: '(về phía)', ans: '往' },
  { pre: '我跟同学说好了，一起去', blank: '打', post: '篮球。', hint: '(chơi bằng tay)', ans: '打' },
  { pre: '我还喜欢', blank: '踢', post: '足球。', hint: '(đá)', ans: '踢' },
  { pre: '我踢', blank: '得', post: '还可以。', hint: '(trợ từ bổ ngữ)', ans: '得' },
  { pre: '我跑得不快，也不太喜欢', blank: '跑步', post: '。', hint: '(chạy bộ)', ans: '跑步' },
  { pre: '我的', blank: '爱好', post: '是运动。', hint: '(sở thích)', ans: '爱好' },
  { pre: '从上小学', blank: '开始', post: '，我每天都跟爸爸去运动。', hint: '(bắt đầu)', ans: '开始' }
];

var sortData = [
  { words: ['你', '是', '什么时候', '从', '北京', '回来', '的', '？'], ans: '你是什么时候从北京回来的？', audio: '你是什么时候从北京回来的？' },
  { words: ['你', '怎么', '一', '下课', '就', '往', '外', '跑', '？'], ans: '你怎么一下课就往外跑？', audio: '你怎么一下课就往外跑？' },
  { words: ['他', '篮球', '打', '得', '很', '好', '。'], ans: '他篮球打得很好。', audio: '他篮球打得很好。' },
  { words: ['我', '游泳', '游', '得', '不', '快', '。'], ans: '我游泳游得不快。', audio: '我游泳游得不快。' },
  { words: ['一', '到', '星期天', '就', '跟', '朋友们', '去', '踢球', '。'], ans: '一到星期天就跟朋友们去踢球。', audio: '一到星期天就跟朋友们去踢球。' },
  { words: ['我', '一', '有', '时间', '就', '去', '运动', '。'], ans: '我一有时间就去运动。', audio: '我一有时间就去运动。' }
];

var mcData = [
  { q: '你看过她＿＿吗？游得怎么样？', opts: ['游泳', '跑步', '运动', '开始'], ans: 0 },
  { q: '我们9点＿＿上课，你别来晚了。', opts: ['开始', '从', '往', '球'], ans: 0 },
  { q: '你＿＿跑得快不快？我想跟你一起去运动。', opts: ['跑步', '游泳', '篮球', '足球'], ans: 0 },
  { q: 'A：你喜欢什么＿＿？ B：足球、篮球什么的都喜欢。', opts: ['运动', '爱好', '开始', '球'], ans: 0 },
  { q: 'A：你喜欢学中文吗？ B：喜欢，我＿＿8岁就开始学中文了。', opts: ['从', '往', '得', '一'], ans: 0 },
  { q: 'Môn thể thao nào đi với động từ 踢?', opts: ['足球', '篮球', '游泳', '跑步'], ans: 0 },
  { q: '我一到家，妈妈＿＿打来电话了。', opts: ['就', '才', '还', '也'], ans: 0 },
  { q: 'Câu nào đúng khi nói "Tôi bơi không nhanh"?', opts: ['我游泳游得不快。', '我游泳得不快。', '我不快游泳。', '我游泳不得快。'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你的爱好是什么？',
      q_vn: 'Sở thích của bạn là gì?',
      hint: '我的爱好是……，从……开始……',
      sample: '我的爱好是运动。从上小学开始，我每天都跟爸爸去运动。',
      sample_vn: 'Sở thích của tôi là thể thao. Bắt đầu từ khi học tiểu học, ngày nào tôi cũng đi tập cùng bố.',
      note: '从……开始 dùng để nói mốc thời gian bắt đầu một thói quen.'
    },
    {
      q_zh: '你喜欢什么运动？打得怎么样？',
      q_vn: 'Bạn thích môn thể thao nào? Chơi thế nào?',
      hint: '我喜欢……，我……得……',
      sample: '我喜欢打篮球，也喜欢踢足球。我篮球打得很好，足球踢得还可以。',
      sample_vn: 'Tôi thích chơi bóng rổ, cũng thích đá bóng. Tôi chơi bóng rổ rất tốt, đá bóng thì tàm tạm.',
      note: 'Bổ ngữ trạng thái: 名词 + 动词 + 得 + 形容词 (篮球打得很好).'
    },
    {
      q_zh: '你跑步跑得快吗？游泳游得怎么样？',
      q_vn: 'Bạn chạy bộ có nhanh không? Bơi thế nào?',
      hint: '我跑得……，我游泳游得……',
      sample: '我跑得不太快，但是我游泳游得很快，我很喜欢游泳。',
      sample_vn: 'Tôi chạy không nhanh lắm, nhưng bơi thì rất nhanh, tôi rất thích bơi.',
      note: 'Với từ li hợp (跑步、游泳) phải lặp lại động từ: 游泳游得快.'
    },
    {
      q_zh: '你一下课就做什么？',
      q_vn: 'Vừa tan học là bạn làm gì?',
      hint: '我一下课就……',
      sample: '我一下课就跟同学去打篮球，一到星期天就跟朋友们去踢球。',
      sample_vn: 'Vừa tan học là tôi đi chơi bóng rổ với bạn cùng lớp, cứ đến Chủ nhật là đi đá bóng với bạn bè.',
      note: '一……就…… diễn tả hành động thứ hai xảy ra ngay sau hành động thứ nhất.'
    },
    {
      q_zh: '你一有时间就做什么？',
      q_vn: 'Hễ có thời gian là bạn làm gì?',
      hint: '我一有时间就……',
      sample: '我一有时间就去运动，运动以后我觉得很舒服，也很高兴。',
      sample_vn: 'Hễ có thời gian là tôi đi tập thể thao, tập xong tôi thấy rất thoải mái và rất vui.',
      note: 'Ôn lại 舒服、高兴 của bài 6 kết hợp với mẫu 一……就…….'
    }
  ]
};

var translateData = [
  { vi: 'Bạn từ Bắc Kinh về khi nào vậy?', zh: '你是什么时候从北京回来的？', py: 'Nǐ shì shénme shíhou cóng Běijīng huílái de?' },
  { vi: 'Sao vừa tan học bạn đã chạy ra ngoài ngay vậy?', zh: '你怎么一下课就往外跑？', py: 'Nǐ zěnme yí xiàkè jiù wǎng wài pǎo?' },
  { vi: 'Bạn ấy chơi bóng rổ rất hay.', zh: '他篮球打得很好。', py: 'Tā lánqiú dǎ de hěn hǎo.' },
  { vi: 'Mình bơi không nhanh lắm.', zh: '我游泳游得不快。', py: 'Wǒ yóuyǒng yóu de bú kuài.' },
  { vi: 'Hễ có thời gian là tôi lại đi tập thể thao.', zh: '我一有时间就去运动。', py: 'Wǒ yì yǒu shíjiān jiù qù yùndòng.' }
];

var translateDataRev = [
  { vi: 'Mình đã hẹn với các bạn cùng đi chơi bóng rổ rồi.', zh: '我跟同学说好了，一起去打篮球。', py: 'Wǒ gēn tóngxué shuōhǎo le, yìqǐ qù dǎ lánqiú.' },
  { vi: 'Bạn còn thích môn thể thao nào khác?', zh: '你还喜欢什么运动？', py: 'Nǐ hái xǐhuan shénme yùndòng?' },
  { vi: 'Cứ đến Chủ nhật là mình lại đi đá bóng cùng bạn bè.', zh: '一到星期天就跟朋友们去踢球。', py: 'Yí dào xīngqītiān jiù gēn péngyoumen qù tī qiú.' },
  { vi: 'Mình chạy không nhanh, cũng không thích chạy bộ lắm.', zh: '我跑得不快，也不太喜欢跑步。', py: 'Wǒ pǎo de bú kuài, yě bú tài xǐhuan pǎobù.' },
  { vi: 'Bắt đầu từ khi học tiểu học, ngày nào tôi cũng tập thể thao cùng bố.', zh: '从上小学开始，我每天都跟爸爸去运动。', py: 'Cóng shàng xiǎoxué kāishǐ, wǒ měi tiān dōu gēn bàba qù yùndòng.' }
];
