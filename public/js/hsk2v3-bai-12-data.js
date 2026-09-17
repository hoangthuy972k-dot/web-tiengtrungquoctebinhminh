// HSK 2 (3.0 Mới) · Bài 12 · 这里比北京冷多了
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 12, trang 102-111.

var vocabData = [
  {
    n: 1, zh: '事情', py: 'shìqing', pos: 'Danh từ', vn: 'sự việc, việc', em: '📋', img: '/images/hsk2v3-bai-12/shiqing.jpg', lesson: 1,
    ex_zh: '家月，是你啊！有什么事情吗？', ex_py: 'Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?', ex_vn: 'Gia Nguyệt, là em à! Có việc gì không?',
    exList: [
      { zh: '家月，是你啊！有什么事情吗？', py: 'Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?', vn: 'Gia Nguyệt, là em à! Có việc gì không?' },
      { zh: '公司这几天事情很多，太忙了。', py: 'Gōngsī zhè jǐ tiān shìqing hěn duō, tài máng le.', vn: 'Mấy hôm nay công ty rất nhiều việc, bận quá.' }
    ],
    hanzi: [{ c: '事', p: 'shì', type: '象形字 · Chữ tượng hình', st: 8, ord: '一 → 口 → 彐 → 亅', rad: '亅 (quyết)', mean: 'việc, sự việc', tip: 'Ôn 没什么事 (bài 11) = không có việc gì quan trọng.', cf: '', w: '事情 / 有事 / 没事' }]
  },
  {
    n: 2, zh: '晴', py: 'qíng', pos: 'Tính từ', vn: 'nắng, tạnh ráo, quang đãng', em: '☀️', img: '/images/hsk2v3-bai-12/qing.jpg', lesson: 1,
    ex_zh: '北京这几天虽然是晴天，但是有点儿冷。', ex_py: 'Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.', ex_vn: 'Mấy ngày nay Bắc Kinh tuy nắng nhưng vẫn hơi lạnh.',
    exList: [
      { zh: '北京这几天虽然是晴天，但是有点儿冷。', py: 'Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.', vn: 'Mấy ngày nay Bắc Kinh tuy nắng nhưng vẫn hơi lạnh.' },
      { zh: '今天是个大晴天。', py: 'Jīntiān shì ge dà qíngtiān.', vn: 'Hôm nay trời quang đãng.' }
    ],
    hanzi: [{ c: '晴', p: 'qíng', type: '形声字 · Chữ hình thanh', st: 12, ord: '日 → 青', rad: '日 (nhật – mặt trời)', mean: 'nắng, quang đãng', tip: '大晴天 = trời rất quang đãng.', cf: '阴 (yīn – âm u)', w: '晴 / 晴天 / 大晴天' }]
  },
  {
    n: 3, zh: '正', py: 'zhèng', pos: 'Phó từ', vn: 'đang (hành động/trạng thái đang diễn ra)', em: '⏱️', lesson: 1,
    ex_zh: '外边还正下着雪呢！', ex_py: 'Wàibian hái zhèng xiàzhe xuě ne!', ex_vn: 'Bên ngoài tuyết vẫn đang rơi đấy!',
    exList: [
      { zh: '外边还正下着雪呢！', py: 'Wàibian hái zhèng xiàzhe xuě ne!', vn: 'Bên ngoài tuyết vẫn đang rơi đấy!' },
      { zh: '今天的天气没有昨天好，正下着雨呢。', py: 'Jīntiān de tiānqì méiyǒu zuótiān hǎo, zhèng xiàzhe yǔ ne.', vn: 'Thời tiết hôm nay không đẹp bằng hôm qua, đang mưa đấy.' }
    ],
    hanzi: [{ c: '正', p: 'zhèng', type: '指事字 · Chữ chỉ sự', st: 5, ord: '一 → 丨 → 一 → 丨 → 一', rad: '止 (chỉ)', mean: 'đang; ngay ngắn', tip: '正 + 动词 + 着 + 呢 — cách nói đầy đủ nhất của "đang".', cf: '在 (zài) · 着 (zhe)', w: '正 / 正在 / 正下着雪' }]
  },
  {
    n: 4, zh: '外面', py: 'wàimiàn', pos: 'Danh từ', vn: 'bên ngoài', em: '🌳', img: '/images/hsk2v3-bai-12/waimian.jpg', lesson: 2,
    ex_zh: '你去外面的时候多穿点儿衣服。', ex_py: 'Nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.', ex_vn: 'Khi đi ra ngoài, em nhớ mặc thêm nhiều quần áo một chút nhé.',
    exList: [
      { zh: '你去外面的时候多穿点儿衣服。', py: 'Nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.', vn: 'Khi đi ra ngoài, em nhớ mặc thêm nhiều quần áo một chút nhé.' },
      { zh: '李文让我跟他去外面跑步。', py: 'Lǐ Wén ràng wǒ gēn tā qù wàimiàn pǎobù.', vn: 'Lý Văn bảo tôi cùng bạn ấy ra ngoài chạy bộ.' }
    ],
    hanzi: [{ c: '外', p: 'wài', type: '会意字 · Chữ hội ý', st: 5, ord: '夕 → 卜', rad: '夕 (tịch – chiều tối)', mean: 'ngoài', tip: 'Cùng nhóm phương vị: 里面、外面、后面、旁边.', cf: '里面 (lǐmiàn – bên trong)', w: '外面 / 外边 / 往外' }]
  },
  {
    n: 5, zh: '阴', py: 'yīn', pos: 'Tính từ', vn: 'âm u, nhiều mây, râm', em: '☁️', img: '/images/hsk2v3-bai-12/yin.jpg', lesson: 2,
    ex_zh: '一次多买点儿，阴天下雪什么的就少出去吧。', ex_py: 'Yí cì duō mǎi diǎnr, yīntiān xià xuě shénmede jiù shǎo chūqù ba.', ex_vn: 'Mỗi lần mua thì nên mua nhiều một chút, những lúc trời âm u hoặc có tuyết thì nên hạn chế ra ngoài.',
    exList: [
      { zh: '一次多买点儿，阴天下雪什么的就少出去吧。', py: 'Yí cì duō mǎi diǎnr, yīntiān xià xuě shénmede jiù shǎo chūqù ba.', vn: 'Mỗi lần mua thì nên mua nhiều một chút, những lúc trời âm u hoặc có tuyết thì nên hạn chế ra ngoài.' },
      { zh: '今天是阴天，不是晴天。', py: 'Jīntiān shì yīntiān, bú shì qíngtiān.', vn: 'Hôm nay trời âm u, không phải trời nắng.' }
    ],
    hanzi: [{ c: '阴', p: 'yīn', type: '会意字 · Chữ hội ý', st: 6, ord: '阝 → 月', rad: '阝 (phụ)', mean: 'âm u, râm', tip: '阴 có 月 (mặt trăng), 晴 có 日 (mặt trời) — dễ nhớ.', cf: '晴 (qíng – nắng)', w: '阴 / 阴天 / 阴阴的' }]
  },
  {
    n: 6, zh: '从小', py: 'cóngxiǎo', pos: 'Phó từ', vn: 'từ nhỏ', em: '🧒', lesson: 3,
    ex_zh: '我从小就经常跟爸爸跑步。', ex_py: 'Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù.', ex_vn: 'Từ nhỏ mình đã thường xuyên chạy bộ cùng bố rồi.',
    exList: [
      { zh: '我从小就经常跟爸爸跑步。', py: 'Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù.', vn: 'Từ nhỏ mình đã thường xuyên chạy bộ cùng bố rồi.' },
      { zh: '我从小就爱运动，经常跟朋友一起踢球、跑步。', py: 'Wǒ cóngxiǎo jiù ài yùndòng, jīngcháng gēn péngyou yìqǐ tī qiú, pǎobù.', vn: 'Từ nhỏ tôi đã thích thể thao, thường xuyên đá bóng, chạy bộ cùng bạn bè.' }
    ],
    hanzi: [{ c: '从', p: 'cóng', type: '会意字 · Chữ hội ý', st: 4, ord: '人 → 人', rad: '人 (nhân)', mean: 'từ, theo', tip: 'Ôn 从 (bài 7): 从小 = từ khi còn nhỏ, thường đi với 就.', cf: '小时候 (xiǎoshíhou)', w: '从小 / 从……开始 / 从小就' }]
  },
  {
    n: 7, zh: '地铁', py: 'dìtiě', pos: 'Danh từ', vn: 'tàu điện ngầm', em: '🚇', img: '/images/hsk2v3-bai-12/ditie.jpg', lesson: 3,
    ex_zh: '我现在坐地铁去找你，一会儿楼下见。', ex_py: 'Wǒ xiànzài zuò dìtiě qù zhǎo nǐ, yíhuìr lóu xià jiàn.', ex_vn: 'Bây giờ mình đi tàu điện ngầm qua chỗ bạn, lát nữa gặp nhau ở dưới tầng nhé.',
    exList: [
      { zh: '我现在坐地铁去找你，一会儿楼下见。', py: 'Wǒ xiànzài zuò dìtiě qù zhǎo nǐ, yíhuìr lóu xià jiàn.', vn: 'Bây giờ mình đi tàu điện ngầm qua chỗ bạn, lát nữa gặp nhau ở dưới tầng nhé.' },
      { zh: '每天坐两站地铁去学校。', py: 'Měi tiān zuò liǎng zhàn dìtiě qù xuéxiào.', vn: 'Mỗi ngày đi hai trạm tàu điện ngầm để đến trường.' }
    ],
    hanzi: [{ c: '铁', p: 'tiě', type: '形声字 · Chữ hình thanh', st: 10, ord: '钅 → 失', rad: '钅 (kim – kim loại)', mean: 'sắt', tip: '地铁 = tàu chạy dưới lòng đất (地 + 铁).', cf: '', w: '地铁 / 坐地铁 / 地铁站' }]
  },
  {
    n: 8, zh: '楼', py: 'lóu', pos: 'Danh từ', vn: 'toà nhà, lầu, tầng', em: '🏢', img: '/images/hsk2v3-bai-12/lou.jpg', lesson: 3,
    ex_zh: '一会儿楼下见。', ex_py: 'Yíhuìr lóu xià jiàn.', ex_vn: 'Lát nữa gặp nhau ở dưới tầng nhé.',
    exList: [
      { zh: '一会儿楼下见。', py: 'Yíhuìr lóu xià jiàn.', vn: 'Lát nữa gặp nhau ở dưới tầng nhé.' },
      { zh: '我不上去了，就在楼下等你。', py: 'Wǒ bú shàngqù le, jiù zài lóu xià děng nǐ.', vn: 'Mình không lên nữa, đợi bạn ở dưới nhà thôi.' }
    ],
    hanzi: [{ c: '楼', p: 'lóu', type: '形声字 · Chữ hình thanh', st: 13, ord: '木 → 米 → 女', rad: '木 (mộc – gỗ)', mean: 'lầu, toà nhà', tip: '楼上 / 楼下 — ôn lại bổ ngữ xu hướng bài 5 (上去/下来).', cf: '', w: '楼 / 楼下 / 楼上' }]
  },
  {
    n: 9, zh: '站', py: 'zhàn', pos: 'Danh từ', vn: 'trạm, bến, ga', em: '🚉', img: '/images/hsk2v3-bai-12/zhan.jpg', lesson: 4,
    ex_zh: '每天坐两站地铁去学校。', ex_py: 'Měi tiān zuò liǎng zhàn dìtiě qù xuéxiào.', ex_vn: 'Mỗi ngày đi hai trạm tàu điện ngầm để đến trường.',
    exList: [
      { zh: '每天坐两站地铁去学校。', py: 'Měi tiān zuò liǎng zhàn dìtiě qù xuéxiào.', vn: 'Mỗi ngày đi hai trạm tàu điện ngầm để đến trường.' },
      { zh: '地铁站离我家很近。', py: 'Dìtiě zhàn lí wǒ jiā hěn jìn.', vn: 'Ga tàu điện ngầm cách nhà tôi rất gần.' }
    ],
    hanzi: [{ c: '站', p: 'zhàn', type: '形声字 · Chữ hình thanh', st: 10, ord: '立 → 占', rad: '立 (lập – đứng)', mean: 'đứng; trạm', tip: '站 cũng là động từ "đứng": 站着 (ôn 着 bài 11).', cf: '', w: '站 / 两站 / 地铁站' }]
  },
  {
    n: 10, zh: '小时候', py: 'xiǎoshíhou', pos: 'Danh từ', vn: 'lúc nhỏ, thời thơ ấu', em: '👶', img: '/images/hsk2v3-bai-12/xiaoshihou.jpg', lesson: 4,
    ex_zh: '他小时候经常跑步。', ex_py: 'Tā xiǎoshíhou jīngcháng pǎobù.', ex_vn: 'Hồi nhỏ bạn ấy thường xuyên chạy bộ.',
    exList: [
      { zh: '他小时候经常跑步。', py: 'Tā xiǎoshíhou jīngcháng pǎobù.', vn: 'Hồi nhỏ bạn ấy thường xuyên chạy bộ.' },
      { zh: '小时候我最喜欢吃妈妈做的菜。', py: 'Xiǎoshíhou wǒ zuì xǐhuan chī māma zuò de cài.', vn: 'Hồi nhỏ tôi thích nhất là ăn món mẹ nấu.' }
    ],
    hanzi: [{ c: '候', p: 'hòu', type: '形声字 · Chữ hình thanh', st: 10, ord: '亻 → 丨 → 彐 → 矢', rad: '亻 (nhân đứng)', mean: 'lúc, thời', tip: '小时候 (danh từ) ≈ 从小 (phó từ) nhưng khác vị trí trong câu.', cf: '从小 (cóngxiǎo)', w: '小时候 / 的时候 / 时候' }]
  },
  {
    n: 11, zh: '好', py: 'hǎo', pos: 'Phó từ', vn: 'rất, thật là', em: '😀', lesson: 4,
    ex_zh: '跟李文一起跑步，我好高兴啊！', ex_py: 'Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!', ex_vn: 'Chạy bộ cùng Lý Văn tôi thấy rất vui!',
    exList: [
      { zh: '跟李文一起跑步，我好高兴啊！', py: 'Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!', vn: 'Chạy bộ cùng Lý Văn tôi thấy rất vui!' },
      { zh: '你看，前边的那个人好高啊！', py: 'Nǐ kàn, qiánbian de nàge rén hǎo gāo a!', vn: 'Bạn xem, người phía trước kia cao thật đấy!' }
    ],
    hanzi: [{ c: '好', p: 'hǎo', type: '会意字 · Chữ hội ý', st: 6, ord: '女 → 子', rad: '女 (nữ)', mean: 'tốt; rất', tip: 'Làm phó từ, 好 = 很/真, thường đi với 啊 ở cuối câu.', cf: '真 (zhēn) · 很 (hěn)', w: '好高 / 好高兴 / 好好吃' }]
  }
];

var wuData = [
  { img: '☀️', label: '晴', py: 'qíng', letter: 'A' },
  { img: '☁️', label: '阴', py: 'yīn', letter: 'B' },
  { img: '🚇', label: '地铁', py: 'dìtiě', letter: 'C' },
  { img: '🏢', label: '楼', py: 'lóu', letter: 'D' },
  { img: '🚉', label: '站', py: 'zhàn', letter: 'E' },
  { img: '🌳', label: '外面', py: 'wàimiàn', letter: 'F' }
];

var dialogData = [
  {
    scene: '在房间 · Trong phòng (nhận điện thoại của Gia Nguyệt)',
    preQuiz: [
      { q: '白家月今天什么时候有课？', opts: ['上午', '下午', '晚上'], ans: 1 },
      { q: '北京天气怎么样？', opts: ['不是晴天', '正下着雪', '有点儿冷'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '喂，家月，是你啊！有什么事情吗？', py: 'Wèi, Jiāyuè, shì nǐ a! Yǒu shénme shìqing ma?', vn: 'A lô, Gia Nguyệt, là em à! Có việc gì không?' },
      { sp: 1, zh: '没什么事，就想跟您说说话。', py: 'Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.', vn: 'Không có việc gì ạ, chỉ là muốn trò chuyện với chị một chút thôi.' },
      { sp: 0, zh: '好啊。你今天没课吗？', py: 'Hǎo a. Nǐ jīntiān méi kè ma?', vn: 'Được chứ. Hôm nay em không lên lớp à?' },
      { sp: 1, zh: '下午有课。您那里天气怎么样？', py: 'Xiàwǔ yǒu kè. Nín nàlǐ tiānqì zěnmeyàng?', vn: 'Buổi chiều em mới có tiết. Thời tiết chỗ chị thế nào?' },
      { sp: 0, zh: '北京这几天虽然是晴天，但是有点儿冷。', py: 'Běijīng zhè jǐ tiān suīrán shì qíngtiān, dànshì yǒudiǎnr lěng.', vn: 'Mấy ngày nay Bắc Kinh tuy nắng nhưng vẫn hơi lạnh.' },
      { sp: 1, zh: '我这里比北京冷多了，外边还正下着雪呢！', py: 'Wǒ zhèlǐ bǐ Běijīng lěngduō le, wàibian hái zhèng xiàzhe xuě ne!', vn: 'Chỗ em lạnh hơn Bắc Kinh nhiều, bên ngoài tuyết vẫn đang rơi đấy!' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (gọi cho Vương Nhất Phi)',
    preQuiz: [
      { q: '王一飞那里的天气怎么样？', opts: ['晴', '阴', '下雪'], ans: 2 },
      { q: '王一飞现在要去做什么？', opts: ['上课', '穿衣服', '买吃的'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '喂，一飞，听家月说你那边下雪了，下得大不大？', py: 'Wèi, Yīfēi, tīng Jiāyuè shuō nǐ nàbian xià xuě le, xià de dà bu dà?', vn: 'A lô, Nhất Phi à, nghe Gia Nguyệt nói chỗ em tuyết rơi rồi, tuyết to không em?' },
      { sp: 2, zh: '今天不大，昨天比今天下得大。', py: 'Jīntiān bú dà, zuótiān bǐ jīntiān xià de dà.', vn: 'Hôm nay không to, hôm qua tuyết to hơn hôm nay.' },
      { sp: 0, zh: '天气不好，你去外面的时候多穿点儿衣服。', py: 'Tiānqì bù hǎo, nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.', vn: 'Thời tiết xấu, khi đi ra ngoài, em nhớ mặc thêm nhiều quần áo một chút nhé.' },
      { sp: 2, zh: '这几天我在网上上课，没出去过。', py: 'Zhè jǐ tiān wǒ zài wǎngshang shàngkè, méi chūqùguo.', vn: 'Mấy ngày nay em dạy online nên không đi ra ngoài.' },
      { sp: 0, zh: '那就好，有事记得给我打电话。', py: 'Nà jiù hǎo, yǒu shì jìde gěi wǒ dǎ diànhuà.', vn: 'Vậy thì tốt rồi, có việc gì nhớ gọi cho chị nhé.' },
      { sp: 2, zh: '好的。现在不下雪了，我出去买点儿吃的。', py: 'Hǎo de. Xiànzài bú xià xuě le, wǒ chūqù mǎi diǎnr chī de.', vn: 'Vâng ạ. Bây giờ tuyết ngừng rơi rồi, em ra ngoài mua chút đồ ăn.' },
      { sp: 0, zh: '一次多买点儿，阴天下雪什么的就少出去吧。', py: 'Yí cì duō mǎi diǎnr, yīntiān xià xuě shénmede jiù shǎo chūqù ba.', vn: 'Mỗi lần mua thì nên mua nhiều một chút, những lúc trời âm u hoặc có tuyết thì nên hạn chế ra ngoài.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lý Văn rủ chạy bộ)',
    preQuiz: [
      { q: '李文找白家月做什么？', opts: ['一起去跑步', '一起坐地铁', '一起见朋友'], ans: 0 },
      { q: '李文怎么去找白家月？', opts: ['跑步', '打车', '坐地铁'], ans: 2 }
    ],
    lines: [
      { sp: 3, zh: '喂，家月，今天天气不错，我们去跑步吧！', py: 'Wèi, Jiāyuè, jīntiān tiānqì búcuò, wǒmen qù pǎobù ba!', vn: 'A lô, Gia Nguyệt à, hôm nay thời tiết khá đẹp, chúng ta đi chạy bộ nhé!' },
      { sp: 1, zh: '你跑步跑得比我快，我们能一起跑吗？', py: 'Nǐ pǎobù pǎo de bǐ wǒ kuài, wǒmen néng yìqǐ pǎo ma?', vn: 'Bạn chạy nhanh hơn mình, chúng ta có thể chạy cùng nhau không?' },
      { sp: 3, zh: '可以的，我慢慢跑，等着你。', py: 'Kěyǐ de, wǒ mànmàn pǎo, děngzhe nǐ.', vn: 'Được mà, mình sẽ chạy chầm chậm để đợi bạn.' },
      { sp: 1, zh: '好吧。你真爱跑步啊！', py: 'Hǎo ba. Nǐ zhēn ài pǎobù a!', vn: 'Vậy được. Bạn đúng là mê chạy bộ thật đấy!' },
      { sp: 3, zh: '我从小就经常跟爸爸跑步，跑步能让人快乐！', py: 'Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù, pǎobù néng ràng rén kuàilè!', vn: 'Từ nhỏ mình đã thường xuyên chạy bộ cùng bố rồi. Chạy bộ khiến con người ta thấy sảng khoái hẳn ra!' },
      { sp: 1, zh: '好，那我准备一下。', py: 'Hǎo, nà wǒ zhǔnbèi yíxià.', vn: 'Ừ, vậy để mình chuẩn bị một chút.' },
      { sp: 3, zh: '我现在坐地铁去找你，一会儿楼下见。', py: 'Wǒ xiànzài zuò dìtiě qù zhǎo nǐ, yíhuìr lóu xià jiàn.', vn: 'Bây giờ mình đi tàu điện ngầm qua chỗ bạn, lát nữa gặp nhau ở dưới tầng nhé.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Bạch Gia Nguyệt viết nhật ký)',
    preQuiz: [
      { q: '这几天白家月是怎么去学校的？', opts: ['跑步', '走路', '坐地铁'], ans: 2 },
      { q: '李文让白家月跟他去做什么？', opts: ['跑步', '坐地铁', '等朋友'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '前几天天气不好，我没走路，每天坐两站地铁去学校。', py: 'Qián jǐ tiān tiānqì bù hǎo, wǒ méi zǒulù, měi tiān zuò liǎng zhàn dìtiě qù xuéxiào.', vn: 'Mấy hôm trước thời tiết xấu, tôi không đi bộ mà mỗi ngày đều đi hai trạm tàu điện ngầm để đến trường.' },
      { sp: 0, zh: '今天是个大晴天，李文让我跟他去外面跑步。', py: 'Jīntiān shì ge dà qíngtiān, Lǐ Wén ràng wǒ gēn tā qù wàimiàn pǎobù.', vn: 'Hôm nay trời quang đãng, Lý Văn bảo tôi cùng bạn ấy ra ngoài chạy bộ.' },
      { sp: 0, zh: '他小时候经常跑步，跑得比我快，但是他会等我。', py: 'Tā xiǎoshíhou jīngcháng pǎobù, pǎo de bǐ wǒ kuài, dànshì tā huì děng wǒ.', vn: 'Hồi nhỏ bạn ấy thường xuyên chạy bộ, chạy nhanh hơn tôi, nhưng bạn ấy sẽ đợi tôi.' },
      { sp: 0, zh: '跟李文一起跑步，我好高兴啊！', py: 'Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!', vn: 'Chạy bộ cùng Lý Văn tôi thấy rất vui!' }
    ]
  }
];

var listenData = [
  {
    audio: '喂，家月，是你啊！有什么事情吗？没什么事，就想跟您说说话。北京这几天虽然是晴天，但是有点儿冷。我这里比北京冷多了，外边还正下着雪呢！',
    questions: [
      { q: '北京的天气怎么样？', opts: ['晴天，有点儿冷', '下着雪', '很热'], ans: 0 },
      { q: '白家月那里的天气怎么样？', opts: ['比北京冷多了', '比北京热', '跟北京一样'], ans: 0 }
    ]
  },
  {
    audio: '一飞，听家月说你那边下雪了，下得大不大？今天不大，昨天比今天下得大。天气不好，你去外面的时候多穿点儿衣服。',
    questions: [
      { q: '哪天的雪下得大？', opts: ['今天', '昨天', '明天'], ans: 1 },
      { q: '姐姐让他做什么？', opts: ['多穿点儿衣服', '多买点儿药', '少喝点儿咖啡'], ans: 0 }
    ]
  },
  {
    audio: '家月，今天天气不错，我们去跑步吧！你跑步跑得比我快，我们能一起跑吗？可以的，我慢慢跑，等着你。我从小就经常跟爸爸跑步。',
    questions: [
      { q: '谁跑得快？', opts: ['李文', '白家月', '一样快'], ans: 0 },
      { q: '李文从什么时候开始跑步？', opts: ['从小', '去年', '这个月'], ans: 0 }
    ]
  },
  {
    audio: '前几天天气不好，我没走路，每天坐两站地铁去学校。今天是个大晴天，李文让我跟他去外面跑步。跟李文一起跑步，我好高兴啊！',
    questions: [
      { q: '前几天她怎么去学校？', opts: ['坐地铁', '走路', '跑步'], ans: 0 },
      { q: '今天天气怎么样？', opts: ['大晴天', '阴天', '下雪'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '这里比北京', right: '冷多了' },
  { left: '昨天比今天', right: '下得大' },
  { left: '你跑步跑得', right: '比我快' },
  { left: '外边正', right: '下着雪呢' },
  { left: '坐两站', right: '地铁' },
  { left: '一会儿', right: '楼下见' }
];

var fillData = [
  { pre: '有什么', blank: '事情', post: '吗？', hint: '(sự việc)', ans: '事情' },
  { pre: '北京这几天虽然是', blank: '晴', post: '天，但是有点儿冷。', hint: '(nắng)', ans: '晴' },
  { pre: '外边还', blank: '正', post: '下着雪呢！', hint: '(đang)', ans: '正' },
  { pre: '你去', blank: '外面', post: '的时候多穿点儿衣服。', hint: '(bên ngoài)', ans: '外面' },
  { pre: '', blank: '阴', post: '天下雪什么的就少出去吧。', hint: '(âm u)', ans: '阴' },
  { pre: '我', blank: '从小', post: '就经常跟爸爸跑步。', hint: '(từ nhỏ)', ans: '从小' },
  { pre: '我现在坐', blank: '地铁', post: '去找你。', hint: '(tàu điện ngầm)', ans: '地铁' },
  { pre: '你看，前边的那个人', blank: '好', post: '高啊！', hint: '(rất, thật là)', ans: '好' }
];

var sortData = [
  { words: ['我', '这里', '比', '北京', '冷', '多', '了', '。'], ans: '我这里比北京冷多了。', audio: '我这里比北京冷多了。' },
  { words: ['昨天', '比', '今天', '下', '得', '大', '。'], ans: '昨天比今天下得大。', audio: '昨天比今天下得大。' },
  { words: ['你', '跑步', '跑', '得', '比', '我', '快', '。'], ans: '你跑步跑得比我快。', audio: '你跑步跑得比我快。' },
  { words: ['外边', '还', '正', '下', '着', '雪', '呢', '！'], ans: '外边还正下着雪呢！', audio: '外边还正下着雪呢！' },
  { words: ['我', '从小', '就', '经常', '跟', '爸爸', '跑步', '。'], ans: '我从小就经常跟爸爸跑步。', audio: '我从小就经常跟爸爸跑步。' },
  { words: ['坐', '飞机', '比', '坐', '火车', '快', '得', '多', '。'], ans: '坐飞机比坐火车快得多。', audio: '坐飞机比坐火车快得多。' }
];

var mcData = [
  { q: '坐飞机比坐火车快＿＿。', opts: ['得多', '多得', '很多', '太多'], ans: 0 },
  { q: '我这里比北京冷＿＿。', opts: ['多了', '了多', '很多', '非常'], ans: 0 },
  { q: '妈妈＿＿我睡得晚。', opts: ['比', '跟', '最', '没有'], ans: 0 },
  { q: '白家月汉字写得＿＿陈天中好。', opts: ['比', '最', '很', '真'], ans: 0 },
  { q: 'Câu nào đúng?', opts: ['你跑步跑得比我快。', '你跑步得比我快。', '你比我跑步得快。', '你跑步比得我快。'], ans: 0 },
  { q: '“好高啊！” ở đây 好 có nghĩa là gì?', opts: ['Rất', 'Tốt', 'Được', 'Xong'], ans: 0 },
  { q: '晴天 trái nghĩa với từ nào?', opts: ['阴天', '大风', '热天', '冷天'], ans: 0 },
  { q: '“正下着雪呢” nhấn mạnh điều gì?', opts: ['Tuyết đang rơi ngay lúc này', 'Tuyết đã tạnh', 'Tuyết sắp rơi', 'Tuyết rơi rất to'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你那里今天天气怎么样？',
      q_vn: 'Hôm nay thời tiết chỗ bạn thế nào?',
      hint: '今天是……天，外边正……',
      sample: '今天是个大晴天，不过有点儿冷，外边正刮着风呢。',
      sample_vn: 'Hôm nay trời quang đãng, nhưng hơi lạnh, bên ngoài đang có gió.',
      note: '正 + động từ + 着 + 呢 để tả việc đang diễn ra.'
    },
    {
      q_zh: '你那里的天气跟别的城市比怎么样？',
      q_vn: 'Thời tiết chỗ bạn so với thành phố khác thì thế nào?',
      hint: '我这里比……冷/热多了。',
      sample: '我这里比北京冷多了，北京虽然是晴天，但是我们这儿还正下着雪呢。',
      sample_vn: 'Chỗ tôi lạnh hơn Bắc Kinh nhiều, Bắc Kinh tuy nắng nhưng chỗ chúng tôi tuyết vẫn đang rơi.',
      note: 'A 比 B + tính từ + 多了/得多 — nhấn sự khác biệt lớn.'
    },
    {
      q_zh: '你跑步跑得比你的朋友快吗？',
      q_vn: 'Bạn chạy có nhanh hơn bạn của mình không?',
      hint: '我跑步跑得比他……',
      sample: '我跑步跑得比他慢，但是他会慢慢跑，等着我。',
      sample_vn: 'Tôi chạy chậm hơn bạn ấy, nhưng bạn ấy sẽ chạy chậm lại để đợi tôi.',
      note: 'Động từ li hợp có bổ ngữ trạng thái: 跑步跑得比……快/慢.'
    },
    {
      q_zh: '你小时候常做什么运动？',
      q_vn: 'Hồi nhỏ bạn thường chơi môn thể thao gì?',
      hint: '我从小就……，小时候经常……',
      sample: '我从小就爱运动，小时候经常跟爸爸一起跑步，跑步能让人快乐。',
      sample_vn: 'Từ nhỏ tôi đã thích thể thao, hồi nhỏ thường chạy bộ cùng bố, chạy bộ khiến người ta vui vẻ.',
      note: '从小 đứng trước động từ, 小时候 là danh từ chỉ thời gian.'
    },
    {
      q_zh: '你每天怎么去学校（公司）？',
      q_vn: 'Mỗi ngày bạn đến trường (công ty) bằng cách nào?',
      hint: '天气好的时候……，天气不好的时候……',
      sample: '天气好的时候我走路去，天气不好的时候就坐两站地铁，地铁站离我家很近。',
      sample_vn: 'Khi thời tiết đẹp tôi đi bộ, khi thời tiết xấu thì đi hai trạm tàu điện ngầm, ga tàu cách nhà tôi rất gần.',
      note: 'Ôn 离 (bài 9) và 走路 khi nói về đường đi.'
    }
  ]
};

var translateData = [
  { vi: 'Chỗ em lạnh hơn Bắc Kinh nhiều.', zh: '我这里比北京冷多了。', py: 'Wǒ zhèlǐ bǐ Běijīng lěngduō le.' },
  { vi: 'Bên ngoài tuyết vẫn đang rơi đấy!', zh: '外边还正下着雪呢！', py: 'Wàibian hái zhèng xiàzhe xuě ne!' },
  { vi: 'Hôm qua tuyết rơi to hơn hôm nay.', zh: '昨天比今天下得大。', py: 'Zuótiān bǐ jīntiān xià de dà.' },
  { vi: 'Bạn chạy nhanh hơn mình.', zh: '你跑步跑得比我快。', py: 'Nǐ pǎobù pǎo de bǐ wǒ kuài.' },
  { vi: 'Chạy bộ cùng Lý Văn tôi thấy rất vui!', zh: '跟李文一起跑步，我好高兴啊！', py: 'Gēn Lǐ Wén yìqǐ pǎobù, wǒ hǎo gāoxìng a!' }
];

var translateDataRev = [
  { vi: 'Không có việc gì ạ, chỉ là muốn trò chuyện với chị một chút thôi.', zh: '没什么事，就想跟您说说话。', py: 'Méi shénme shì, jiù xiǎng gēn nín shuōshuo huà.' },
  { vi: 'Khi đi ra ngoài, em nhớ mặc thêm nhiều quần áo một chút nhé.', zh: '你去外面的时候多穿点儿衣服。', py: 'Nǐ qù wàimiàn de shíhou duō chuān diǎnr yīfu.' },
  { vi: 'Những lúc trời âm u hoặc có tuyết thì nên hạn chế ra ngoài.', zh: '阴天下雪什么的就少出去吧。', py: 'Yīntiān xià xuě shénmede jiù shǎo chūqù ba.' },
  { vi: 'Từ nhỏ mình đã thường xuyên chạy bộ cùng bố rồi.', zh: '我从小就经常跟爸爸跑步。', py: 'Wǒ cóngxiǎo jiù jīngcháng gēn bàba pǎobù.' },
  { vi: 'Mỗi ngày đi hai trạm tàu điện ngầm để đến trường.', zh: '每天坐两站地铁去学校。', py: 'Měi tiān zuò liǎng zhàn dìtiě qù xuéxiào.' }
];
