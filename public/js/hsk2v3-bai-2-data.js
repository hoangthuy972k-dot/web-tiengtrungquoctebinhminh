// HSK 2 (3.0 Mới) · Bài 2 · 还是打车去北大吧
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 2, trang 010-018.

var vocabData = [
  {
    n: 1, zh: '公交车', py: 'gōngjiāochē', pos: 'Danh từ', vn: 'xe buýt', hv: 'công giao xa', em: '🚌', img: '/images/hsk2v3-bai-2/gongjiaoche.jpg', lesson: 1,
    ex_zh: '这儿有到北京大学的公交车吗？', ex_py: 'Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', ex_vn: 'Ở đây có xe buýt đi đến Đại học Bắc Kinh không?',
    exList: [
      { zh: '这儿有到北京大学的公交车吗？', py: 'Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', vn: 'Ở đây có xe buýt đi đến Đại học Bắc Kinh không?' },
      { zh: '我每天坐公交车上班。', py: 'Wǒ měitiān zuò gōngjiāochē shàngbān.', vn: 'Ngày nào tôi cũng đi làm bằng xe buýt.' }
    ],
    hanzi: [{ c: '交', p: 'jiāo', type: '会意字 · Chữ hội ý', st: 6, ord: '亠 → 父 phần dưới', rad: '亠 (đầu)', mean: 'giao, qua lại', tip: '公交车 = 公共交通车 (xe giao thông công cộng) nói tắt.', cf: '', w: '公交车 / 交通' }]
  },
  {
    n: 2, zh: '但', py: 'dàn', pos: 'Liên từ', vn: 'nhưng, nhưng mà', hv: 'đãn', em: '↔️', lesson: 1,
    ex_zh: '有，但车站有点儿远。', ex_py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.', ex_vn: 'Có đấy, nhưng bến xe buýt hơi xa.',
    exList: [
      { zh: '有，但车站有点儿远。', py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.', vn: 'Có đấy, nhưng bến xe buýt hơi xa.' },
      { zh: '李文让我去接他的朋友，但我太忙了。', py: 'Lǐ Wén ràng wǒ qù jiē tā de péngyou, dàn wǒ tài máng le.', vn: 'Lý Văn nhờ tôi đi đón bạn của cậu ấy, nhưng tôi bận quá.' }
    ],
    hanzi: [{ c: '但', p: 'dàn', type: '形声字 · Chữ hình thanh', st: 7, ord: '亻 → 日 → 一', rad: '亻 (nhân đứng)', mean: 'nhưng, chỉ', tip: '但 = 但是 dạng ngắn, hay dùng trong văn viết và khẩu ngữ nhanh.', cf: '', w: '但 / 但是' }]
  },
  {
    n: 3, zh: '车站', py: 'chēzhàn', pos: 'Danh từ', vn: 'bến xe, trạm xe', hv: 'xa trạm', em: '🚏', img: '/images/hsk2v3-bai-2/chezhan.jpg', lesson: 1,
    ex_zh: '去北京大学的车站在哪儿？', ex_py: 'Qù Běijīng Dàxué de chēzhàn zài nǎr?', ex_vn: 'Bến xe đi Đại học Bắc Kinh ở đâu?',
    exList: [
      { zh: '去北京大学的车站在哪儿？', py: 'Qù Běijīng Dàxué de chēzhàn zài nǎr?', vn: 'Bến xe đi Đại học Bắc Kinh ở đâu?' },
      { zh: '车站有点儿远。', py: 'Chēzhàn yǒudiǎnr yuǎn.', vn: 'Bến xe hơi xa.' }
    ],
    hanzi: [{ c: '站', p: 'zhàn', type: '形声字 · Chữ hình thanh', st: 10, ord: '立 → 占', rad: '立 (lập – đứng)', mean: 'đứng; ga, bến', tip: 'Bộ 立 (đứng) — chỗ xe dừng cho người đứng đợi.', cf: '', w: '车站 / 站起来' }]
  },
  {
    n: 4, zh: '远', py: 'yuǎn', pos: 'Tính từ', vn: 'xa', hv: 'viễn', em: '📏', img: '/images/hsk2v3-bai-2/yuan.jpg', lesson: 1,
    ex_zh: '你家太远了。', ex_py: 'Nǐ jiā tài yuǎn le.', ex_vn: 'Nhà bạn xa quá.',
    exList: [
      { zh: '你家太远了。', py: 'Nǐ jiā tài yuǎn le.', vn: 'Nhà bạn xa quá.' },
      { zh: '就在前边，不远。', py: 'Jiù zài qiánbian, bù yuǎn.', vn: 'Ngay phía trước thôi, không xa.' }
    ],
    hanzi: [{ c: '远', p: 'yuǎn', type: '形声字 · Chữ hình thanh', st: 7, ord: '元 → 辶', rad: '辶 (sước – đi)', mean: 'xa', tip: 'Bộ 辶 (bước đi) — phải đi lâu tức là xa. Trái nghĩa: 近 (gần).', cf: '近 (jìn – gần)', w: '远 / 不远 / 远方' }]
  },
  {
    n: 5, zh: '打车', py: 'dǎchē', pos: 'Động từ (ly hợp)', vn: 'gọi taxi, bắt xe', hv: 'đả xa', em: '🚕', img: '/images/hsk2v3-bai-2/dache.jpg', lesson: 1,
    ex_zh: '我们还是打车去吧。', ex_py: 'Wǒmen háishi dǎchē qù ba.', ex_vn: 'Chúng ta vẫn nên gọi taxi đi thôi.',
    exList: [
      { zh: '我们还是打车去吧。', py: 'Wǒmen háishi dǎchē qù ba.', vn: 'Chúng ta vẫn nên gọi taxi đi thôi.' },
      { zh: '这儿好打车吗？', py: 'Zhèr hǎo dǎchē ma?', vn: 'Ở đây gọi taxi có dễ không?' }
    ],
    hanzi: [{ c: '打', p: 'dǎ', type: '形声字 · Chữ hình thanh', st: 5, ord: '扌 → 丁', rad: '扌 (thủ – tay)', mean: 'đánh; làm (nhiều nghĩa)', tip: '打 ghép rất nhiều từ: 打车, 打电话, 打球.', cf: '', w: '打车 / 打电话 / 打篮球' }]
  },
  {
    n: 6, zh: '还是', py: 'háishi', pos: 'Phó từ', vn: 'vẫn, tốt hơn là…', hv: 'hoàn thị', em: '👍', lesson: 1,
    ex_zh: '还是别看电影了。', ex_py: 'Háishi bié kàn diànyǐng le.', ex_vn: 'Thôi đừng xem phim nữa.',
    exList: [
      { zh: '还是别看电影了。', py: 'Háishi bié kàn diànyǐng le.', vn: 'Thôi đừng xem phim nữa.' },
      { zh: '明天有雨，我们还是今天去吧。', py: 'Míngtiān yǒu yǔ, wǒmen háishi jīntiān qù ba.', vn: 'Mai có mưa, chúng ta vẫn nên đi hôm nay thì hơn.' }
    ],
    hanzi: [{ c: '还', p: 'hái', type: '形声字 · Chữ hình thanh', st: 7, ord: '不 → 辶', rad: '辶 (sước – đi)', mean: 'còn, vẫn', tip: 'Đọc hái nghĩa "còn, vẫn"; đọc huán nghĩa "trả lại".', cf: '', w: '还是 / 还有 / 还书 (huán)' }]
  },
  {
    n: 7, zh: '啊', py: 'a', pos: 'Trợ từ', vn: 'à, nhỉ, thế (trợ từ ngữ khí)', hv: 'a', em: '❗', lesson: 2,
    ex_zh: '学校里人真多啊！', ex_py: 'Xuéxiào li rén zhēn duō a!', ex_vn: 'Trường đông người quá!',
    exList: [
      { zh: '学校里人真多啊！', py: 'Xuéxiào li rén zhēn duō a!', vn: 'Trường đông người quá!' },
      { zh: '天啊！有的还不到二十块钱。', py: 'Tiān a! Yǒude hái bú dào èrshí kuài qián.', vn: 'Trời ơi! Có vé còn chưa tới 20 tệ.' }
    ],
    hanzi: [{ c: '啊', p: 'a', type: '形声字 · Chữ hình thanh', st: 10, ord: '口 → 阝 → 可', rad: '口 (khẩu – miệng)', mean: 'trợ từ cảm thán', tip: 'Bộ 口 cho biết đây là tiếng thốt ra, dùng cuối câu cảm thán.', cf: '', w: '真多啊 / 天啊' }]
  },
  {
    n: 8, zh: '万', py: 'wàn', pos: 'Số từ', vn: 'vạn (mười nghìn)', hv: 'vạn', em: '🔟', lesson: 2,
    ex_zh: '北京大学有四万多名学生。', ex_py: 'Běijīng Dàxué yǒu sìwàn duō míng xuésheng.', ex_vn: 'Đại học Bắc Kinh có hơn bốn vạn sinh viên.',
    exList: [
      { zh: '北京大学有四万多名学生。', py: 'Běijīng Dàxué yǒu sìwàn duō míng xuésheng.', vn: 'Đại học Bắc Kinh có hơn bốn vạn sinh viên.' },
      { zh: '这个体育馆能坐两万人。', py: 'Zhège tǐyùguǎn néng zuò liǎngwàn rén.', vn: 'Nhà thi đấu này chứa được hai vạn người.' }
    ],
    hanzi: [{ c: '万', p: 'wàn', type: '象形字 · Chữ tượng hình', st: 3, ord: '一 → 𠃌 → 丿', rad: '一 (nhất)', mean: 'vạn, mười nghìn', tip: '一万 = 10 000; 四万多 = hơn bốn vạn (hơn 40 000).', cf: '方 (fāng)', w: '一万 / 四万多 / 千万' }]
  },
  {
    n: 9, zh: '名', py: 'míng', pos: 'Lượng từ / Danh từ', vn: '(lượng từ chỉ người); tên, thứ hạng', hv: 'danh', em: '🧑‍🎓', img: '/images/hsk2v3-bai-2/ming.jpg', lesson: 2,
    ex_zh: '北京大学有三千多名外国学生。', ex_py: 'Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.', ex_vn: 'Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài.',
    exList: [
      { zh: '北京大学有三千多名外国学生。', py: 'Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.', vn: 'Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài.' },
      { zh: '他考试得了第一名。', py: 'Tā kǎoshì déle dì-yī míng.', vn: 'Cậu ấy thi được hạng nhất.' }
    ],
    hanzi: [{ c: '名', p: 'míng', type: '会意字 · Chữ hội ý', st: 6, ord: '夕 → 口', rad: '口 (khẩu – miệng)', mean: 'tên; lượng từ chỉ người', tip: '夕 (tối) + 口 (miệng): trời tối phải xưng tên để nhận ra nhau.', cf: '', w: '一名学生 / 名字 / 第一名' }]
  },
  {
    n: 10, zh: '网上', py: 'wǎngshang', pos: 'Danh từ', vn: 'trên mạng', hv: 'võng thượng', em: '🌐', img: '/images/hsk2v3-bai-2/wangshang.jpg', lesson: 2,
    ex_zh: '是网上说的。', ex_py: 'Shì wǎngshang shuō de.', ex_vn: 'Là thông tin trên mạng nói vậy.',
    exList: [
      { zh: '是网上说的。', py: 'Shì wǎngshang shuō de.', vn: 'Là thông tin trên mạng nói vậy.' },
      { zh: '我喜欢在网上买东西。', py: 'Wǒ xǐhuan zài wǎngshang mǎi dōngxi.', vn: 'Tôi thích mua đồ trên mạng.' }
    ],
    hanzi: [{ c: '网', p: 'wǎng', type: '象形字 · Chữ tượng hình', st: 6, ord: '冂 → 㐅 → 㐅', rad: '冂 (quynh)', mean: 'lưới, mạng', tip: 'Hình cái lưới đan — ngày nay chỉ mạng Internet.', cf: '', w: '网上 / 上网 / 网站' }]
  },
  {
    n: 11, zh: '外国', py: 'wàiguó', pos: 'Danh từ', vn: 'nước ngoài', hv: 'ngoại quốc', em: '🌍', img: '/images/hsk2v3-bai-2/waiguo.jpg', lesson: 2,
    ex_zh: '北京大学有很多外国学生。', ex_py: 'Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.', ex_vn: 'Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài.',
    exList: [
      { zh: '北京大学有很多外国学生。', py: 'Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.', vn: 'Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài.' },
      { zh: '我有一个外国朋友。', py: 'Wǒ yǒu yí ge wàiguó péngyou.', vn: 'Tôi có một người bạn nước ngoài.' }
    ],
    hanzi: [{ c: '外', p: 'wài', type: '会意字 · Chữ hội ý', st: 5, ord: '夕 → 卜', rad: '夕 (tịch – chiều tối)', mean: 'ngoài', tip: 'Trái nghĩa với 里 (trong), 内 (nội).', cf: '', w: '外国 / 外边 / 外面' }]
  },
  {
    n: 12, zh: '间', py: 'jiān', pos: 'Lượng từ', vn: 'gian, căn (phòng)', hv: 'gian', em: '🚪', lesson: 2,
    ex_zh: '那边就有一间教室。', ex_py: 'Nàbiān jiù yǒu yì jiān jiàoshì.', ex_vn: 'Đằng kia có một phòng học.',
    exList: [
      { zh: '那边就有一间教室。', py: 'Nàbiān jiù yǒu yì jiān jiàoshì.', vn: 'Đằng kia có một phòng học.' },
      { zh: '那是一间大教室。', py: 'Nà shì yì jiān dà jiàoshì.', vn: 'Đó là một phòng học lớn.' }
    ],
    hanzi: [{ c: '间', p: 'jiān', type: '会意字 · Chữ hội ý', st: 7, ord: '门 → 日', rad: '门 (môn – cửa)', mean: 'khoảng, gian phòng', tip: '门 (cửa) + 日 (mặt trời): ánh nắng lọt qua khe cửa — nghĩa "khoảng giữa".', cf: '', w: '一间教室 / 房间 / 时间' }]
  },
  {
    n: 13, zh: '教室', py: 'jiàoshì', pos: 'Danh từ', vn: 'phòng học, lớp học', hv: 'giáo thất', em: '🏫', img: '/images/hsk2v3-bai-2/jiaoshi.jpg', lesson: 2,
    ex_zh: '教室里有二十多个学生。', ex_py: 'Jiàoshì li yǒu èrshí duō ge xuésheng.', ex_vn: 'Trong phòng học có hơn hai mươi học sinh.',
    exList: [
      { zh: '教室里有二十多个学生。', py: 'Jiàoshì li yǒu èrshí duō ge xuésheng.', vn: 'Trong phòng học có hơn hai mươi học sinh.' },
      { zh: '我们明天要去那儿上课。', py: 'Wǒmen míngtiān yào qù nàr shàngkè.', vn: 'Ngày mai chúng tôi sẽ đến đó học.' }
    ],
    hanzi: [{ c: '室', p: 'shì', type: '形声字 · Chữ hình thanh', st: 9, ord: '宀 → 至', rad: '宀 (miên – mái nhà)', mean: 'phòng, buồng', tip: 'Bộ 宀 (mái nhà) cho biết chữ chỉ một căn phòng.', cf: '', w: '教室 / 办公室 / 洗手间' }]
  },
  {
    n: 14, zh: '票', py: 'piào', pos: 'Danh từ', vn: 'vé', hv: 'phiếu', em: '🎟️', img: '/images/hsk2v3-bai-2/piao.jpg', lesson: 3,
    ex_zh: '他们卖的电影票也很便宜。', ex_py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.', ex_vn: 'Vé xem phim họ bán cũng rất rẻ.',
    exList: [
      { zh: '他们卖的电影票也很便宜。', py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.', vn: 'Vé xem phim họ bán cũng rất rẻ.' },
      { zh: '有的电影票还不到二十块钱。', py: 'Yǒude diànyǐngpiào hái bú dào èrshí kuài qián.', vn: 'Có vé xem phim còn chưa tới hai mươi tệ.' }
    ],
    hanzi: [{ c: '票', p: 'piào', type: '会意字 · Chữ hội ý', st: 11, ord: '覀 → 示', rad: '示 (kỳ)', mean: 'vé, phiếu', tip: 'Ghép với loại vé: 电影票, 车票, 机票.', cf: '', w: '电影票 / 车票 / 门票' }]
  },
  {
    n: 15, zh: '别', py: 'bié', pos: 'Phó từ', vn: 'đừng', hv: 'biệt', em: '🚫', lesson: 3,
    ex_zh: '还是别看电影了。', ex_py: 'Háishi bié kàn diànyǐng le.', ex_vn: 'Thôi đừng xem phim nữa.',
    exList: [
      { zh: '还是别看电影了。', py: 'Háishi bié kàn diànyǐng le.', vn: 'Thôi đừng xem phim nữa.' },
      { zh: '别忘了带护照。', py: 'Bié wàngle dài hùzhào.', vn: 'Đừng quên mang hộ chiếu.' }
    ],
    hanzi: [{ c: '别', p: 'bié', type: '会意字 · Chữ hội ý', st: 7, ord: '口 → 力 → 刂', rad: '刂 (đao – dao)', mean: 'khác; đừng', tip: '别 + động từ = đừng làm gì: 别说话、别走。', cf: '', w: '别看 / 别的 / 别人' }]
  },
  {
    n: 16, zh: '过来', py: 'guòlái', pos: 'Động từ', vn: 'đến, đến đây, qua đây', hv: 'quá lai', em: '➡️', img: '/images/hsk2v3-bai-2/guolai.jpg', lesson: 4,
    ex_zh: '我们有时间还想再过来看个电影。', ex_py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.', ex_vn: 'Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim.',
    exList: [
      { zh: '我们有时间还想再过来看个电影。', py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.', vn: 'Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim.' },
      { zh: '你家太远了，我们是打车过来的。', py: 'Nǐ jiā tài yuǎn le, wǒmen shì dǎchē guòlái de.', vn: 'Nhà bạn xa quá, chúng tôi bắt taxi qua đây đấy.' }
    ],
    hanzi: [{ c: '过', p: 'guò', type: '形声字 · Chữ hình thanh', st: 6, ord: '寸 → 辶', rad: '辶 (sước – đi)', mean: 'qua, vượt qua', tip: '过来 = đi về phía người nói; 过去 = đi xa người nói.', cf: '', w: '过来 / 过去 / 经过' }]
  },
  {
    n: 17, zh: '北京大学', py: 'Běijīng Dàxué', pos: 'Danh từ riêng', vn: 'Đại học Bắc Kinh', hv: 'Bắc Kinh Đại Học', em: '🎓', lesson: 1,
    ex_zh: '这儿有到北京大学的公交车吗？', ex_py: 'Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', ex_vn: 'Ở đây có xe buýt đi Đại học Bắc Kinh không?',
    exList: [
      { zh: '这儿有到北京大学的公交车吗？', py: 'Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', vn: 'Ở đây có xe buýt đi Đại học Bắc Kinh không?' },
      { zh: '北京大学很大，也很漂亮。', py: 'Běijīng Dàxué hěn dà, yě hěn piàoliang.', vn: 'Đại học Bắc Kinh rất lớn và cũng rất đẹp.' }
    ],
    hanzi: [{ c: '学', p: 'xué', type: '会意字 · Chữ hội ý', st: 8, ord: '⺍ → 冖 → 子', rad: '子 (tử – con)', mean: 'học', tip: '北大 là cách gọi tắt của 北京大学 trong khẩu ngữ.', cf: '', w: '大学 / 学生 / 学校' }]
  }
];

var wuData = [
  { img: '🎟️', label: '票', py: 'piào', letter: 'A' },
  { img: '🏫', label: '教室', py: 'jiàoshì', letter: 'B' },
  { img: '🚕', label: '打车', py: 'dǎchē', letter: 'C' },
  { img: '🚌', label: '公交车', py: 'gōngjiāochē', letter: 'D' },
  { img: '🚏', label: '车站', py: 'chēzhàn', letter: 'E' },
  { img: '🌐', label: '网上', py: 'wǎngshang', letter: 'F' }
];

var dialogData = [
  {
    scene: '在宾馆前台 · Ở quầy lễ tân khách sạn',
    preQuiz: [
      { q: '白家月和安妮想去哪儿？', opts: ['饭店', '车站', '北京大学'], ans: 2 },
      { q: '白家月和安妮怎么去那儿？', opts: ['开车', '坐出租车', '坐公交车'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '请问，这儿有到北京大学的公交车吗？', py: 'Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', vn: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?' },
      { sp: 1, zh: '有，但车站有点儿远。', py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.', vn: 'Có đấy, nhưng bến xe buýt hơi xa.' },
      { sp: 0, zh: '这儿好打车吗？', py: 'Zhèr hǎo dǎchē ma?', vn: 'Ở đây gọi xe taxi có dễ không vậy?' },
      { sp: 1, zh: '好打车。', py: 'Hǎo dǎchē.', vn: 'Dễ gọi.' },
      { sp: 0, zh: '谢谢。安妮，我们还是打车去吧。', py: 'Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.', vn: 'Cảm ơn! Annie, chúng ta vẫn nên gọi xe taxi đi thôi.' },
      { sp: 2, zh: '好，没问题。', py: 'Hǎo, méi wèntí.', vn: 'Được, không vấn đề gì cả.' }
    ]
  },
  {
    scene: '在北京大学 · Tham quan khuôn viên Đại học Bắc Kinh',
    preQuiz: [
      { q: '北京大学有多少学生？', opts: ['三千多', '四万多', '十万多'], ans: 1 },
      { q: '白家月想在北京大学做什么？', opts: ['玩', '学习', '找教室'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '学校里人真多啊！', py: 'Xuéxiào li rén zhēn duō a!', vn: 'Trường học đông người quá!' },
      { sp: 2, zh: '是啊，北京大学有四万多名学生呢！', py: 'Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuésheng ne!', vn: 'Đúng vậy, Đại học Bắc Kinh có hơn 40 000 sinh viên.' },
      { sp: 0, zh: '你是怎么知道的？', py: 'Nǐ shì zěnme zhīdào de?', vn: 'Làm sao bạn biết được thế?' },
      { sp: 2, zh: '是网上说的，网上还说北京大学有三千多名外国学生。', py: 'Shì wǎngshang shuō de, wǎngshang hái shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.', vn: 'Là thông tin trên mạng nói vậy, trên mạng còn cho biết Đại học Bắc Kinh có hơn 3 000 sinh viên nước ngoài.' },
      { sp: 0, zh: '我也想来这儿学习。', py: 'Wǒ yě xiǎng lái zhèr xuéxí.', vn: 'Mình cũng muốn đến đây học tập.' },
      { sp: 2, zh: '那边就有一间教室，我们去看一下吧。', py: 'Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.', vn: 'Đằng kia có một phòng học, chúng ta đến xem đi.' }
    ]
  },
  {
    scene: '在校园里 · Trong khuôn viên trường (rạp chiếu phim)',
    preQuiz: [
      { q: '安妮说北京大学里有什么？', opts: ['银行', '电影院', '公交车站'], ans: 1 },
      { q: '有的电影票还不到多少钱？', opts: ['十块钱', '二十块钱', '三十块钱'], ans: 1 }
    ],
    lines: [
      { sp: 2, zh: '家月，你看，学校里有家电影院！', py: 'Jiāyuè, nǐ kàn, xuéxiào li yǒu jiā diànyǐngyuàn!', vn: 'Gia Nguyệt, bạn nhìn kìa, trong trường có rạp chiếu phim đấy.' },
      { sp: 0, zh: '是啊，电影院还不小。', py: 'Shì a, diànyǐngyuàn hái bù xiǎo.', vn: 'Đúng rồi, rạp chiếu phim cũng không nhỏ.' },
      { sp: 2, zh: '他们卖的电影票也很便宜。', py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.', vn: 'Họ bán vé xem phim cũng rất rẻ nhé.' },
      { sp: 0, zh: '天啊！有的还不到二十块钱。', py: 'Tiān a! Yǒude hái bú dào èrshí kuài qián.', vn: 'Trời, có loại vé còn không đến 20 đồng kìa.' },
      { sp: 2, zh: '那你想不想去看个电影？', py: 'Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?', vn: 'Thế bạn có muốn đi xem phim không?' },
      { sp: 0, zh: '还是别看电影了，北京大学就很好看！', py: 'Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!', vn: 'Thôi đừng xem phim nữa, Đại học Bắc Kinh đã rất đẹp rồi.' }
    ]
  },
  {
    scene: '在北京大学门口 · Trước cổng trường (nhắn tin cho Trần Thiên Trung)',
    preQuiz: [
      { q: '北京大学怎么样？', opts: ['人不多', '很漂亮', '东西很贵'], ans: 1 },
      { q: '白家月和安妮有时间还想再来北京大学做什么？', opts: ['看学生', '学中文', '看电影'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '北京大学很大，有四万多名学生。', py: 'Běijīng Dàxué hěn dà, yǒu sìwàn duō míng xuésheng.', vn: 'Đại học Bắc Kinh rất lớn, có hơn 40 000 sinh viên.' },
      { sp: 0, zh: '学校很漂亮，里边还有家电影院，电影票也不贵。', py: 'Xuéxiào hěn piàoliang, lǐbian hái yǒu jiā diànyǐngyuàn, diànyǐngpiào yě bú guì.', vn: 'Trường rất đẹp, trong trường còn có rạp chiếu phim, vé xem phim cũng không đắt.' },
      { sp: 0, zh: '我们有时间还想再过来看个电影。', py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.', vn: 'Chúng tôi vẫn muốn quay lại để xem phim nếu có thời gian.' }
    ]
  }
];

var listenData = [
  {
    audio: '请问，这儿有到北京大学的公交车吗？有，但车站有点儿远。这儿好打车吗？好打车。安妮，我们还是打车去吧。',
    questions: [
      { q: '白家月和安妮想去哪儿？', opts: ['饭店', '车站', '北京大学'], ans: 2 },
      { q: '她们怎么去那儿？', opts: ['开车', '坐出租车', '坐公交车'], ans: 1 }
    ]
  },
  {
    audio: '学校里人真多啊！是啊，北京大学有四万多名学生呢！你是怎么知道的？是网上说的，网上还说北京大学有三千多名外国学生。',
    questions: [
      { q: '北京大学有多少学生？', opts: ['三千多', '四万多', '十万多'], ans: 1 },
      { q: '安妮是怎么知道的？', opts: ['网上说的', '老师说的', '书上写的'], ans: 0 }
    ]
  },
  {
    audio: '家月，你看，学校里有家电影院！是啊，电影院还不小。他们卖的电影票也很便宜。天啊！有的还不到二十块钱。',
    questions: [
      { q: '学校里有什么？', opts: ['银行', '电影院', '公交车站'], ans: 1 },
      { q: '有的电影票还不到多少钱？', opts: ['十块钱', '二十块钱', '三十块钱'], ans: 1 }
    ]
  },
  {
    audio: '北京大学很大，有四万多名学生。学校很漂亮，里边还有家电影院，电影票也不贵，我们有时间还想再过来看个电影。',
    questions: [
      { q: '北京大学怎么样？', opts: ['人不多', '很漂亮', '东西很贵'], ans: 1 },
      { q: '她们有时间还想再来做什么？', opts: ['看学生', '学中文', '看电影'], ans: 2 }
    ]
  }
];

var matchData = [
  { left: '公交', right: '车' },
  { left: '一间', right: '教室' },
  { left: '四万多', right: '名学生' },
  { left: '电影', right: '票' },
  { left: '还是', right: '打车去吧' },
  { left: '外国', right: '学生' }
];

var fillData = [
  { pre: '这儿有到北京大学的', blank: '公交车', post: '吗？', hint: '(xe buýt)', ans: '公交车' },
  { pre: '有，', blank: '但', post: '车站有点儿远。', hint: '(nhưng)', ans: '但' },
  { pre: '我们', blank: '还是', post: '打车去吧。', hint: '(vẫn nên)', ans: '还是' },
  { pre: '北京大学有四万', blank: '多', post: '名学生。', hint: '(hơn, có lẻ)', ans: '多' },
  { pre: '那边就有一', blank: '间', post: '教室。', hint: '(lượng từ: gian phòng)', ans: '间' },
  { pre: '是', blank: '网上', post: '说的。', hint: '(trên mạng)', ans: '网上' },
  { pre: '还是', blank: '别', post: '看电影了。', hint: '(đừng)', ans: '别' },
  { pre: '我们有时间还想再', blank: '过来', post: '看个电影。', hint: '(qua đây)', ans: '过来' }
];

var sortData = [
  { words: ['这儿', '有', '到', '北京大学', '的', '公交车', '吗', '？'], ans: '这儿有到北京大学的公交车吗？', audio: '这儿有到北京大学的公交车吗？' },
  { words: ['我们', '还是', '打车', '去', '吧', '。'], ans: '我们还是打车去吧。', audio: '我们还是打车去吧。' },
  { words: ['北京大学', '有', '四万多', '名', '学生', '。'], ans: '北京大学有四万多名学生。', audio: '北京大学有四万多名学生。' },
  { words: ['他们', '卖', '的', '电影票', '也', '很', '便宜', '。'], ans: '他们卖的电影票也很便宜。', audio: '他们卖的电影票也很便宜。' },
  { words: ['那边', '就', '有', '一间', '教室', '。'], ans: '那边就有一间教室。', audio: '那边就有一间教室。' },
  { words: ['还是', '别', '看', '电影', '了', '。'], ans: '还是别看电影了。', audio: '还是别看电影了。' }
];

var mcData = [
  { q: '你家太远了，我们是＿＿过来的。', opts: ['打车', '车站', '间', '但'], ans: 0 },
  { q: '那是一＿＿大教室，我们明天要去那儿上课。', opts: ['名', '间', '票', '万'], ans: 1 },
  { q: '李文让我去接他的朋友，＿＿我太忙了，没时间。', opts: ['还是', '但', '别', '过来'], ans: 1 },
  { q: '请问，去北京大学的＿＿在哪儿？', opts: ['教室', '网上', '车站', '电影院'], ans: 2 },
  { q: '“北京大学有四万多名学生” nghĩa là gì?', opts: ['Hơn 40 000 sinh viên', 'Đúng 40 000 sinh viên', 'Gần 4 000 sinh viên', 'Hơn 400 sinh viên'], ans: 0 },
  { q: '“还是……吧” dùng để làm gì?', opts: ['Nêu lựa chọn thiên về một hướng', 'Hỏi thời gian', 'Phủ định hoàn toàn', 'Nhấn mạnh quá khứ'], ans: 0 },
  { q: 'Câu nào có cụm động từ làm định ngữ?', opts: ['他们卖的电影票很便宜。', '他们很便宜卖电影票。', '电影票他们卖很便宜。', '便宜的他们卖电影票。'], ans: 0 },
  { q: '“二十多个学生” và “二十个多学生”, câu nào đúng?', opts: ['二十多个学生', '二十个多学生', 'Cả hai đều đúng', 'Cả hai đều sai'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你想问服务员这儿有没有到大学的公交车，你怎么问？',
      q_vn: 'Bạn muốn hỏi nhân viên ở đây có xe buýt đi đến trường đại học không, bạn hỏi thế nào?',
      hint: '请问，这儿有到……的公交车吗？',
      sample: '请问，这儿有到北京大学的公交车吗？',
      sample_vn: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?',
      note: '请问 mở đầu câu hỏi lịch sự; 到……的公交车 = xe buýt đi đến…'
    },
    {
      q_zh: '车站有点儿远，你建议朋友怎么去？',
      q_vn: 'Bến xe hơi xa, bạn khuyên bạn mình đi bằng cách nào?',
      hint: '我们还是……吧。',
      sample: '车站有点儿远，我们还是打车去吧。',
      sample_vn: 'Bến xe hơi xa, chúng ta vẫn nên bắt taxi đi thôi.',
      note: 'Cấu trúc 还是……吧 dùng khi chọn phương án mình thấy tốt hơn.'
    },
    {
      q_zh: '你们学校有多少学生？',
      q_vn: 'Trường bạn có bao nhiêu sinh viên?',
      hint: '我们学校有……多名学生。',
      sample: '我们学校有两万多名学生。',
      sample_vn: 'Trường tôi có hơn hai vạn sinh viên.',
      note: '多 đặt sau số tròn chục/trăm/nghìn để chỉ số lẻ: 四万多名。'
    },
    {
      q_zh: '你是怎么知道这个消息的？',
      q_vn: 'Bạn biết tin này bằng cách nào?',
      hint: '是……说的。',
      sample: '是网上说的，网上还说学校有很多外国学生。',
      sample_vn: 'Là trên mạng nói vậy, trên mạng còn nói trường có rất nhiều sinh viên nước ngoài.',
      note: 'Câu “是……的” dùng để nhấn mạnh cách thức, nguồn tin.'
    },
    {
      q_zh: '朋友想去看电影，可是你觉得不用去，你怎么说？',
      q_vn: 'Bạn của bạn muốn đi xem phim, nhưng bạn thấy không cần, bạn nói thế nào?',
      hint: '还是别……了。',
      sample: '还是别看电影了，学校里就很好看。',
      sample_vn: 'Thôi đừng xem phim nữa, trong trường đã rất đẹp rồi.',
      note: '还是别……了 là cách từ chối nhẹ nhàng, lịch sự.'
    }
  ]
};

var translateData = [
  { vi: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?', zh: '请问，这儿有到北京大学的公交车吗？', py: 'Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?' },
  { vi: 'Có đấy, nhưng bến xe buýt hơi xa.', zh: '有，但车站有点儿远。', py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.' },
  { vi: 'Chúng ta vẫn nên gọi taxi đi thôi.', zh: '我们还是打车去吧。', py: 'Wǒmen háishi dǎchē qù ba.' },
  { vi: 'Đại học Bắc Kinh có hơn 40 000 sinh viên.', zh: '北京大学有四万多名学生。', py: 'Běijīng Dàxué yǒu sìwàn duō míng xuésheng.' },
  { vi: 'Thôi đừng xem phim nữa, Đại học Bắc Kinh đã rất đẹp rồi.', zh: '还是别看电影了，北京大学就很好看！', py: 'Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!' }
];

var translateDataRev = [
  { vi: 'Trường học đông người quá!', zh: '学校里人真多啊！', py: 'Xuéxiào li rén zhēn duō a!' },
  { vi: 'Là thông tin trên mạng nói vậy.', zh: '是网上说的。', py: 'Shì wǎngshang shuō de.' },
  { vi: 'Đằng kia có một phòng học, chúng ta đến xem đi.', zh: '那边就有一间教室，我们去看一下吧。', py: 'Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.' },
  { vi: 'Vé xem phim họ bán cũng rất rẻ.', zh: '他们卖的电影票也很便宜。', py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.' },
  { vi: 'Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim.', zh: '我们有时间还想再过来看个电影。', py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.' }
];
