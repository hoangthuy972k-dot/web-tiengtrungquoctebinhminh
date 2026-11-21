// Bai 3 — 这个小区挺好的. Sach bai tap trang 020–028 = PDF trang 25–33.
// Dap an: HSK3--学练手册(习题答案).pdf trang 3 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 020–021) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1B 2A 3C 4C 5A 6A 7A 8B 9C 10A).
const IMG = '/images/hsk3v3-bai-3-wb/';
const B_GHEP = [
  { key: 'A', text: '我很喜欢这里的环境。' },
  { key: 'B', text: '好，我马上让小王去买。' },
  { key: 'C', text: '那我去外面再看一会儿书。' },
  { key: 'D', text: '对，我看电视看到两点多才休息。', py: 'Duì, wǒ kàn diànshì kàndào liǎng diǎn duō cái xiūxi.' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '周五到下周一不上班，可以休息休息。' }
];
const B_TU = [
  { key: 'A', text: '需要' }, { key: 'B', text: '冰箱' }, { key: 'C', text: '听说' },
  { key: 'D', text: '花园' }, { key: 'E', text: '鞋' }, { key: 'F', text: '卫生间' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '这个小区挺好的',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 坏 và 环', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['坏 huài<br>土 + 不', '坏了 huài le — hỏng rồi<br>坏人 huàirén — người xấu', '家里的洗衣机坏了。<br>Máy giặt ở nhà hỏng rồi.'],
        ['环 huán<br>王 + 不', '环境 huánjìng — môi trường', '这个小区的环境很好。<br>Môi trường của khu dân cư này rất tốt.']
      ],
        note: 'Hai chữ có chung phần bên phải 不: 坏 có bộ 土 (đất) bên trái, 环 có bộ 王 (ngọc) bên trái. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 行', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['行李', 'xíngli — hành lý', '我的行李挺多的。<br>Hành lý của tôi khá nhiều.'],
        ['银行', 'yínháng — ngân hàng', '我明天才有时间去银行。<br>Mai tôi mới có thời gian đi ngân hàng.']
      ],
        note: '行 đọc <b>xíng</b> trong 行李; đọc <b>háng</b> trong 银行 (银行卡).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Cuộc sống ở nhà<br>居家生活', '小区 xiǎoqū (khu dân cư) · 楼 lóu (toà nhà) · 房子 fángzi (căn nhà) · 层 céng (tầng) · 环境 huánjìng (môi trường) · 花园 huāyuán (vườn hoa)<br>' +
          '房间 fángjiān (căn phòng) · 卫生间 wèishēngjiān (nhà vệ sinh) · 洗手间 xǐshǒujiān (nhà vệ sinh) · 门 mén (cửa) · 门口 ménkǒu (cửa ra vào, cổng) · 灯 dēng (đèn) · 空调 kōngtiáo (máy điều hoà) · 洗衣机 xǐyījī (máy giặt) · 冰箱 bīngxiāng (tủ lạnh) · 电视 diànshì (tivi) · 电脑 diànnǎo (máy tính)<br>' +
          '搬家 bānjiā (chuyển nhà) · 搬 bān (bê, chuyển) · 打扫 dǎsǎo (dọn dẹp) · 扫 sǎo (quét)'],
        ['Dịch vụ ngân hàng<br>银行业务', '银行卡 yínhángkǎ (thẻ ngân hàng) · 信用卡 xìnyòngkǎ (thẻ tín dụng) · 办 bàn (làm thủ tục) · 还 huán (trả)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['扫 sǎo<br>quét', '扫一扫 — quét một chút<br>你能帮我扫一扫这里吗？<br>Bạn quét giúp tôi chỗ này được không?', 'A：这里有很多纸，你扫扫吧。<br>B：好的，没问题。<br>A: Chỗ này nhiều giấy quá, bạn quét đi. — B: Được, không vấn đề gì.'],
        ['银行卡 yínhángkǎ<br>thẻ ngân hàng', '一张银行卡 — một chiếc thẻ ngân hàng<br>我想办一张银行卡。<br>Tôi muốn làm một chiếc thẻ ngân hàng.', 'A：这是您的银行卡和钱，请拿好。<br>B：谢谢您，再见。<br>A: Đây là thẻ ngân hàng và tiền của chị, chị cầm cẩn thận nhé. — B: Cảm ơn anh, chào anh.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['小区环境<br>xiǎoqū huánjìng — môi trường khu dân cư', '6号楼<br>liù hào lóu — toà nhà số 6'],
        ['二层203房间<br>èr céng èr-líng-sān fángjiān — phòng 203 tầng hai', '小花园<br>xiǎo huāyuán — vườn hoa nhỏ'],
        ['开灯<br>kāi dēng — bật đèn', '关灯<br>guān dēng — tắt đèn'],
        ['打开空调<br>dǎkāi kōngtiáo — bật điều hoà', '关上空调<br>guānshang kōngtiáo — tắt điều hoà'],
        ['搬东西<br>bān dōngxi — bê đồ đạc', '扫一下<br>sǎo yíxià — quét một chút'],
        ['办银行卡<br>bàn yínhángkǎ — làm thẻ ngân hàng', '还信用卡<br>huán xìnyòngkǎ — trả tiền thẻ tín dụng']
      ] },
      // TU GIAI (file dap an khong co phan nay).
      // (1) 这张银行卡里没钱了 (the co tien trong tai khoan -> 银行卡; 信用卡 khong noi "里没钱");
      // (2) 搬家; (3) 住几层; (4) 再扫一下 (cum 扫一下 trong bang 搭配; 打扫 cung dung nghia -> ghi trong hint);
      // (5) 那个小区 ... 那里的环境.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu. Câu 4 viết 打扫 cũng đúng nghĩa.', maxlength: 4,
        items: [
          { before: '这张', after: '里没钱了，您换一张吧。', answer: '银行卡' },
          { before: '明天就要', after: '了，东西都准备好了吗？', answer: '搬家' },
          { before: '我到楼下了，您住几', after: '？我现在上去。', answer: '层' },
          { before: '服务员，桌子下面还有东西，您再', after: '一下吧。', answer: '扫', accept: ['打扫'] },
          { before: '我在那个', after: '住了五年，我非常喜欢那里的环境。', answer: '小区' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '公司里没有白纸了。', answer: 'B',
            vn: 'Công ty hết giấy trắng rồi. — B: Được, tôi bảo Tiểu Vương đi mua ngay.' },
          { n: 12, letters: L5, prompt: '这几天大家都忙坏了。', answer: 'F',
            vn: 'Mấy hôm nay mọi người đều bận tối mắt. — F: Từ thứ Sáu đến thứ Hai tuần sau không đi làm, có thể nghỉ ngơi một chút.' },
          { n: 13, letters: L5, prompt: '我要睡觉了，你关一下灯吧。', answer: 'C',
            vn: 'Tôi đi ngủ đây, bạn tắt đèn giúp nhé. — C: Vậy tôi ra ngoài đọc sách thêm một lúc.' },
          { n: 14, letters: L5, prompt: '你觉得咱们搬到这个小区怎么样？', answer: 'A',
            vn: 'Bạn thấy chúng mình chuyển đến khu này thế nào? — A: Tôi rất thích môi trường ở đây.' },
          { n: 15, letters: L5, prompt: '你看起来有点儿累，是不是昨天睡得很晚？', answer: 'D',
            vn: 'Trông bạn hơi mệt, có phải hôm qua ngủ muộn không? — D: Đúng vậy, tôi xem tivi đến hơn hai giờ mới đi nghỉ.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '（　）你护照丢了，找到了吗？', promptPy: '(　) nǐ hùzhào diū le, zhǎodàole ma?', answer: 'C',
            vn: 'Nghe nói bạn mất hộ chiếu, tìm thấy chưa? — 听说: nghe nói.' },
          { n: 17, letters: L5, prompt: '那边有一个（　），咱们去走走吧。', answer: 'D',
            vn: 'Bên kia có một vườn hoa, chúng mình qua đó đi dạo nhé. — 花园: vườn hoa.' },
          { n: 18, letters: L5, prompt: '我家离公司太远了，我（　）换个近点儿的小区。', answer: 'A',
            vn: 'Nhà tôi cách công ty xa quá, tôi cần đổi sang khu nào gần hơn. — 需要 + động từ: cần làm gì.' },
          { n: 19, letters: L5, prompt: 'A：（　）在哪儿？你知道吗？\nB：知道，在二层，你从这儿上去就能看到。', answer: 'F',
            promptPy: 'A: (　) zài nǎr? Nǐ zhīdào ma?\nB: Zhīdào, zài èr céng, nǐ cóng zhèr shàngqu jiù néng kàndào.',
            vn: 'A: Nhà vệ sinh ở đâu? Bạn biết không?\nB: Biết, ở tầng hai, bạn từ đây đi lên là thấy ngay. — 卫生间: nhà vệ sinh.' },
          { n: 20, letters: L5, prompt: 'A：妈妈，我回来了，现在又热又渴。\nB：我买了冰激凌，在（　）里，你自己去拿。', answer: 'B',
            promptPy: 'A: Māma, wǒ huílai le, xiànzài yòu rè yòu kě.\nB: Wǒ mǎile bīngjīlíng, zài (　) li, nǐ zìjǐ qù ná.',
            vn: 'A: Mẹ ơi, con về rồi, giờ con vừa nóng vừa khát.\nB: Mẹ mua kem rồi, ở trong tủ lạnh, con tự đi lấy nhé. — 冰箱: tủ lạnh.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '我们小区的环境挺好的，里面还有一个花园，很多人吃完晚饭后都会去那里走一走，休息休息。\n★那个小区：',
            options: [{ key: 'A', text: '不能休息' }, { key: 'B', text: '环境不错' }, { key: 'C', text: '旁边有个花园' }], answer: 'B',
            vn: 'Môi trường khu chúng tôi khá tốt, bên trong còn có một vườn hoa, nhiều người ăn tối xong đều ra đó đi dạo, nghỉ ngơi. — "环境挺好的" → B. Vườn hoa ở bên trong chứ không phải bên cạnh (C sai).' },
          { n: 22, prompt: '下周就要搬新家了，咱们明天去打扫一下吧。还要再买几个纸箱，你看，这些东西都需要放在箱子里。\n★他们明天要做什么？',
            promptPy: 'Xià zhōu jiù yào bān xīn jiā le, zánmen míngtiān qù dǎsǎo yíxià ba. Hái yào zài mǎi jǐ gè zhǐxiāng, nǐ kàn, zhèxiē dōngxi dōu xūyào fàng zài xiāngzi li.\nTāmen míngtiān yào zuò shénme?',
            options: [{ key: 'A', text: '搬家' }, { key: 'B', text: '拿箱子' }, { key: 'C', text: '打扫新家' }], answer: 'C',
            vn: 'Tuần sau là chuyển nhà mới rồi, mai chúng mình đi dọn dẹp một chút nhé. Còn phải mua thêm mấy thùng giấy, bạn xem, chỗ đồ này đều cần cho vào thùng. — Mai đi dọn nhà mới → C. Tuần sau mới chuyển (A sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '下个星期我就要搬家了，我今天给搬家公司打了一个电话，没想到搬家那么贵。我现在住在四层，新家在十层，搬一个箱子要50块钱。看着我那30多个箱子，我想今天晚上我就在家给朋友们打电话吧。\n★他的新家在几层？',
            promptPy: 'Xià ge xīngqī wǒ jiù yào bānjiā le, wǒ jīntiān gěi bānjiā gōngsī dǎle yí gè diànhuà, méi xiǎngdào bānjiā nàme guì. Wǒ xiànzài zhù zài sì céng, xīn jiā zài shí céng, bān yí gè xiāngzi yào 50 kuài qián. Kànzhe wǒ nà 30 duō gè xiāngzi, wǒ xiǎng jīntiān wǎnshang wǒ jiù zài jiā gěi péngyoumen dǎ diànhuà ba.\nTā de xīn jiā zài jǐ céng?',
            options: [{ key: 'A', text: '一层' }, { key: 'B', text: '四层' }, { key: 'C', text: '十层' }], answer: 'C',
            vn: 'Tuần sau tôi chuyển nhà, hôm nay tôi gọi điện cho công ty chuyển nhà, không ngờ chuyển nhà đắt thế. Tôi đang ở tầng bốn, nhà mới ở tầng mười, chuyển một thùng mất 50 tệ. Nhìn hơn 30 thùng đồ của mình, tôi nghĩ tối nay ở nhà gọi điện cho bạn bè thôi. — "新家在十层" → C. Tầng bốn là nhà hiện tại (B sai).' },
          { n: 24, prompt: '★他可能会怎么搬家？',
            options: [{ key: 'A', text: '自己搬家' }, { key: 'B', text: '请朋友帮忙' }, { key: 'C', text: '找搬家公司' }], answer: 'B',
            vn: 'Công ty chuyển nhà quá đắt nên anh ấy định "给朋友们打电话" — nhờ bạn bè giúp → B.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '银行（ kǎ ）明天就能办好。', promptPy: 'Yínhángkǎ míngtiān jiù néng bàn hǎo.', answer: '卡',
            vn: 'Thẻ ngân hàng ngày mai là làm xong. — 银行卡 yínhángkǎ: thẻ ngân hàng.' },
          { n: 26, input: true, maxlength: 2, prompt: '家里的（ dēng ）坏了，你去买个新的吧。', promptPy: 'Jiā li de dēng huài le, nǐ qù mǎi ge xīn de ba.', answer: '灯',
            vn: 'Đèn ở nhà hỏng rồi, bạn đi mua cái mới đi. — 灯 dēng: đèn.' },
          { n: 27, input: true, maxlength: 2, prompt: '我家住在三（ céng ），302号。', promptPy: 'Wǒ jiā zhù zài sān céng, sān-líng-èr hào.', answer: '层',
            vn: 'Nhà tôi ở tầng ba, số 302. — 层 céng: tầng.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '关',
            img: IMG + 'q28.webp', prompt: '关', promptPy: 'guān', placeholder: 'Viết câu có từ 关…',
            script: '你可以帮我关电脑吗？', vn: 'Bạn tắt máy tính giúp tôi được không?' },
          { n: 29, free: true, must: '搬', img: IMG + 'q29.webp', prompt: '搬', promptPy: 'bān', placeholder: 'Viết câu có từ 搬…',
            script: '有那么多东西，我需要找搬家公司。', vn: 'Có nhiều đồ như vậy, tôi cần tìm công ty chuyển nhà.' },
          { n: 30, free: true, must: '打扫', img: IMG + 'q30.webp', prompt: '打扫', promptPy: 'dǎsǎo', placeholder: 'Viết câu có từ 打扫…',
            script: '周末我们一家人一起打扫房间。', vn: 'Cuối tuần cả nhà chúng tôi cùng nhau dọn dẹp phòng.' }
        ] }
    ] }
  ]
};
