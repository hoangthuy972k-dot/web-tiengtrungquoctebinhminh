// Bai 7 — 那条裙子比短裤更好看. Sach bai tap trang 057–065 = PDF trang 62–70.
// Dap an: HSK3--学练手册(习题答案).pdf trang 7 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 057–058) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2C 3B 4A 5A 6B 7A 8C 9B 10A).
const IMG = '/images/hsk3v3-bai-7-wb/';
const B_GHEP = [
  { key: 'A', text: '咱们下午去看看吧。' },
  { key: 'B', text: '没问题，我先写完这些题。' },
  { key: 'C', text: '看起来不错，西瓜怎么卖？' },
  { key: 'D', text: '对，他要准备很多东西，忙极了。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '你应该试试，有时候看起来不合适，穿上才好看。' }
];
const B_TU = [
  { key: 'A', text: '决定' }, { key: 'B', text: '新鲜' }, { key: 'C', text: '更' },
  { key: 'D', text: '合适' }, { key: 'E', text: '鞋' }, { key: 'F', text: '不但' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '那条裙子比短裤更好看',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 我 và 找', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['我 wǒ', '我们 wǒmen — chúng tôi<br>我的 wǒ de — của tôi', '我们多看看再决定吧。<br>Chúng ta xem thêm rồi hãy quyết định nhé.'],
        ['找 zhǎo<br>扌 + 戈', '找人 zhǎo rén — tìm người<br>找东西 zhǎo dōngxi — tìm đồ', '请你帮我找一条黄色的裙子。<br>Bạn tìm giúp tôi một chiếc váy màu vàng nhé.']
      ],
        note: 'Hai chữ đều có 戈 bên phải. 我 có thêm nét phẩy (丿) ở trên cùng bên trái; 找 bên trái là bộ 扌 (tay) → lấy tay tìm. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 干', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['干什么', 'gàn shénme — làm gì', '你想干什么就干什么，不用看相机。<br>Bạn muốn làm gì thì cứ làm, không cần nhìn máy ảnh.'],
        ['干净', 'gānjìng — sạch sẽ', '新房子打扫得干净极了。<br>Nhà mới được dọn dẹp sạch sẽ vô cùng.']
      ],
        note: '干 đọc <b>gàn</b> khi là động từ "làm" (干什么, 干活儿); đọc <b>gān</b> khi là tính từ "khô, sạch" (干净).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Chọn đồ<br>挑选物品', '大衣 dàyī (áo khoác dài) · 上衣 shàngyī (áo) · 衬衫 chènshān (áo sơ mi) · 短裤 duǎnkù (quần soóc) · 裙子 qúnzi (váy) · 鞋 xié (giày) · 自行车 zìxíngchē (xe đạp) · 电视 diànshì (tivi) · 西瓜 xīguā (dưa hấu) · 香蕉 xiāngjiāo (chuối)<br>' +
          '辆 liàng (chiếc — lượng từ của xe) · 旧 jiù (cũ) · 矮 ǎi (thấp) · 黄色 huángsè (màu vàng) · 大小 dàxiǎo (kích cỡ) · 合适 héshì (vừa, hợp) · 新鲜 xīnxiān (tươi) · 甜 tián (ngọt) · 冰 bīng (lạnh, ướp đá) · 贵 guì (đắt) · 便宜 piányi (rẻ)'],
        ['Mua đồ<br>购买物品', '试 shì (thử) · 买 mǎi (mua) · 卖 mài (bán) · 决定 juédìng (quyết định) · 一共 yígòng (tổng cộng) · 元 yuán (đồng tệ) · 块 kuài (đồng — khẩu ngữ) · 角 jiǎo (hào) · 毛 máo (hào — khẩu ngữ) · 分 fēn (xu) · 斤 jīn (cân, nửa ký) · 公斤 gōngjīn (ki-lô-gam)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['衬衫 chènshān<br>áo sơ mi', '一件衬衫 — một chiếc áo sơ mi<br>我喜欢那件黄色的衬衫。<br>Tôi thích chiếc áo sơ mi màu vàng kia.', 'A：您好，您想买什么？<br>B：我想选一件衬衫。<br>A: Chào anh, anh muốn mua gì ạ? — B: Tôi muốn chọn một chiếc áo sơ mi.'],
        ['角 jiǎo<br>hào (1/10 đồng)', '一角钱 — một hào<br>一瓶水要一元五角。<br>Một chai nước giá một đồng năm hào.', 'A：苹果多少钱一斤？<br>B：上面写着三元五角。<br>A: Táo bao nhiêu tiền một cân? — B: Trên đó ghi ba đồng năm hào.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['试穿大衣<br>shìchuān dàyī — mặc thử áo khoác', '一件衬衫<br>yí jiàn chènshān — một chiếc áo sơ mi'],
        ['一条裙子<br>yì tiáo qúnzi — một chiếc váy', '大小合适<br>dàxiǎo héshì — vừa cỡ'],
        ['冰西瓜<br>bīng xīguā — dưa hấu ướp lạnh', '两斤香蕉<br>liǎng jīn xiāngjiāo — hai cân chuối'],
        ['便宜点儿<br>piányi diǎnr — rẻ chút đi', '一共十二块五毛<br>yígòng shí\'èr kuài wǔ máo — tổng cộng 12 đồng 5 hào'],
        ['买二送一<br>mǎi èr sòng yī — mua hai tặng một', '一辆自行车<br>yí liàng zìxíngchē — một chiếc xe đạp'],
        ['旧电视<br>jiù diànshì — tivi cũ', '看看再决定<br>kànkan zài juédìng — xem đã rồi hãy quyết định']
      ] },
      // TU GIAI (file dap an khong co phan nay). (2) 一斤苹果 (luong tu can nang); (3) 水果很新鲜 — 便宜/甜 cung hop nghia,
      // chon 新鲜 (hay di voi 水果 nhat); (4) 衣服不太合适; (5) 这些旧书 (sach cu dem tang).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu. Câu 3 dùng 便宜 hay 甜 cũng hợp nghĩa; đáp án gợi ý là 新鲜.', maxlength: 4,
        items: [
          { before: '我还没', after: '买哪个。', answer: '决定' },
          { before: '请问，一', after: '苹果多少钱？', answer: '斤' },
          { before: '这些水果很', after: '，你要不要买一点儿？', answer: '新鲜', accept: ['便宜','甜'] },
          { before: '我觉得这件衣服不太', after: '，你再看看别的吧。', answer: '合适' },
          { before: '这些', after: '书你还要吗？我想送给旁边学校的孩子。', answer: '旧' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你走的时候叫我一声。', answer: 'B',
            vn: 'Lúc nào bạn đi thì gọi tôi một tiếng nhé. — B: Không vấn đề gì, để tôi làm xong mấy bài này đã.' },
          { n: 12, letters: L5, prompt: '这些衣服我都不喜欢。', answer: 'F',
            vn: 'Mấy bộ quần áo này tôi đều không thích. — F: Bạn nên mặc thử, có khi nhìn thì không hợp, mặc vào mới đẹp.' },
          { n: 13, letters: L5, prompt: '商场里新开了一家书店。', promptPy: 'Shāngchǎng li xīn kāile yì jiā shūdiàn.', answer: 'A',
            vn: 'Trong trung tâm thương mại mới mở một hiệu sách. — A: Chiều nay chúng ta đi xem thử nhé.' },
          { n: 14, letters: L5, prompt: '尝一尝，看一看，不甜不要钱。', promptPy: 'Cháng yi cháng, kàn yi kàn, bù tián bú yào qián.', answer: 'C',
            vn: 'Nếm thử đi, xem thử đi, không ngọt không lấy tiền. — C: Trông được đấy, dưa hấu bán thế nào?' },
          { n: 15, letters: L5, prompt: '听说你哥哥下个月就要结婚了。', answer: 'D',
            vn: 'Nghe nói tháng sau anh trai bạn cưới vợ rồi. — D: Đúng, anh ấy phải chuẩn bị rất nhiều thứ, bận vô cùng.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '别买香蕉了，看起来都不太（　）。', answer: 'B',
            vn: 'Đừng mua chuối nữa, trông đều không tươi lắm. — 新鲜: tươi.' },
          { n: 17, letters: L5, prompt: '我觉得那件衬衫比这件（　）漂亮。', answer: 'C',
            vn: 'Tôi thấy chiếc áo sơ mi kia đẹp hơn chiếc này. — A 比 B 更 + tính từ: A còn … hơn B.' },
          { n: 18, letters: L5, prompt: '这两个都很好吃，又甜又新鲜，我还不能（　）买哪个。', answer: 'A',
            vn: 'Hai loại này đều rất ngon, vừa ngọt vừa tươi, tôi vẫn chưa quyết được mua loại nào. — 决定: quyết định.' },
          { n: 19, letters: L5, prompt: 'A：妈妈，这张床大小（　）吗？\nB：有点儿小。前面那个大一些，我们去看看。', answer: 'D',
            vn: 'A: Mẹ ơi, cái giường này cỡ có vừa không?\nB: Hơi nhỏ. Cái phía trước to hơn một chút, chúng ta ra xem đi. — 大小合适: vừa cỡ.' },
          { n: 20, letters: L5, prompt: 'A：这是最新的手机。我给你开机了，你看看好用不好用。\nB：好极了！（　）好看，而且大小合适，拿着也方便。', answer: 'F',
            promptPy: 'A: Zhè shì zuìxīn de shǒujī. Wǒ gěi nǐ kāijī le, nǐ kànkan hǎoyòng bù hǎoyòng.\nB: Hǎo jí le! (　) hǎokàn, érqiě dàxiǎo héshì, názhe yě fāngbiàn.',
            vn: 'A: Đây là điện thoại mới nhất. Tôi mở máy cho bạn rồi, bạn xem có dễ dùng không.\nB: Tuyệt quá! Không những đẹp mà cỡ cũng vừa, cầm cũng tiện. — 不但……而且……: không những … mà còn ….' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '这些是您选的水果吗？两斤苹果、一个西瓜，一共二十一块五毛，您给我二十吧。\n★买这些水果要花多少钱？',
            options: [{ key: 'A', text: '二十块' }, { key: 'B', text: '二十一块' }, { key: 'C', text: '二十块五毛' }], answer: 'A',
            vn: 'Đây là hoa quả chị chọn phải không? Hai cân táo, một quả dưa hấu, tổng cộng 21 đồng 5 hào, chị đưa tôi 20 thôi. — Người bán bớt cho, chỉ lấy 20 đồng → A.' },
          { n: 22, prompt: '用洗衣机洗衣服比用手洗衣服好，不但一点儿也不累，而且洗得更干净，用的水也更少。\n★他觉得用洗衣机洗衣服：',
            options: [{ key: 'A', text: '洗得不干净' }, { key: 'B', text: '需要用更多水' }, { key: 'C', text: '一点儿也不累' }], answer: 'C',
            vn: 'Giặt quần áo bằng máy giặt tốt hơn giặt tay, không những chẳng mệt chút nào mà còn giặt sạch hơn, tốn ít nước hơn. — C. Giặt sạch hơn (A sai), ít nước hơn (B sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '我家的旧冰箱已经用了十几年了，我想换一个大一点儿的。我在网上看了很久，觉得现在卖的冰箱不但更漂亮，而且更好用。我打算去商店看一看再决定买哪个。\n★他现在的冰箱：',
            promptPy: 'Wǒ jiā de jiù bīngxiāng yǐjīng yòngle shíjǐ nián le, wǒ xiǎng huàn yí gè dà yìdiǎnr de. Wǒ zài wǎngshang kànle hěn jiǔ, juéde xiànzài mài de bīngxiāng búdàn gèng piàoliang, érqiě gèng hǎoyòng. Wǒ dǎsuàn qù shāngdiàn kàn yi kàn zài juédìng mǎi nǎge.\nTā xiànzài de bīngxiāng:',
            options: [{ key: 'A', text: '太大了' }, { key: 'B', text: '太旧了' }, { key: 'C', text: '特别漂亮' }], answer: 'B',
            vn: 'Tủ lạnh cũ nhà tôi đã dùng hơn mười năm rồi, tôi muốn đổi một cái to hơn một chút. Tôi xem trên mạng rất lâu, thấy tủ lạnh bây giờ không những đẹp hơn mà còn dễ dùng hơn. Tôi định ra cửa hàng xem rồi mới quyết định mua cái nào. — Tủ cũ, dùng hơn mười năm → B. Muốn đổi cái to hơn nên tủ cũ không quá to (A sai).' },
          { n: 24, prompt: '★关于现在卖的冰箱，可以知道什么？',
            options: [{ key: 'A', text: '很贵' }, { key: 'B', text: '很好用' }, { key: 'C', text: '不能在网上买' }], answer: 'B',
            vn: '"现在卖的冰箱不但更漂亮，而且更好用" → B. Bài không nói giá (A), cũng không nói không mua được trên mạng (C).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '香蕉十块钱一公（ jīn ）。', promptPy: 'Xiāngjiāo shí kuài qián yì gōngjīn.', answer: '斤',
            vn: 'Chuối mười đồng một ki-lô. — 公斤 gōngjīn: ki-lô-gam.' },
          { n: 26, input: true, maxlength: 2, prompt: '我想买这个电视，不但更大，（ ér ）且更便宜。', promptPy: 'Wǒ xiǎng mǎi zhège diànshì, búdàn gèng dà, érqiě gèng piányi.', answer: '而',
            vn: 'Tôi muốn mua cái tivi này, không những to hơn mà còn rẻ hơn. — 而且 érqiě: mà còn.' },
          { n: 27, input: true, maxlength: 2, prompt: '今天一（ gòng ）要来15个学生，我们多准备点儿饮料。', promptPy: 'Jīntiān yígòng yào lái shíwǔ gè xuésheng, wǒmen duō zhǔnbèi diǎnr yǐnliào.', answer: '共',
            vn: 'Hôm nay tổng cộng có 15 học sinh đến, chúng ta chuẩn bị thêm ít đồ uống. — 一共 yígòng: tổng cộng.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '更',
            img: IMG + 'q28.webp', prompt: '更', promptPy: 'gèng', placeholder: 'Viết câu có từ 更…',
            script: '姐姐比妹妹更高。', vn: 'Chị cao hơn em.' },
          { n: 29, free: true, must: '结婚', img: IMG + 'q29.webp', prompt: '结婚', promptPy: 'jiéhūn', placeholder: 'Viết câu có từ 结婚…',
            script: '他们结婚了。', vn: 'Họ kết hôn rồi.' },
          { n: 30, free: true, must: '合适', img: IMG + 'q30.webp', prompt: '合适', promptPy: 'héshì', placeholder: 'Viết câu có từ 合适…',
            script: '这件衣服很合适。', vn: 'Bộ quần áo này rất vừa.' }
        ] }
    ] }
  ]
};
