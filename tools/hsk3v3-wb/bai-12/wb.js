// Bai 12 — 这个季节天气变化很快. Sach bai tap trang 103–111 = PDF trang 108–116.
// Dap an: HSK3--学练手册(习题答案).pdf trang 12 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 103–104) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2B 3A 4C 5A 6B 7A 8B 9B 10C).
const IMG = '/images/hsk3v3-bai-12-wb/';
const B_GHEP = [
  { key: 'A', text: '是啊，每天都热得不想出门，还是房间里凉快。', py: 'Shì a, měitiān dōu rè de bù xiǎng chūmén, háishi fángjiān li liángkuai.' },
  { key: 'B', text: '李老师把雨伞借给我了，咱们一起走吧。' },
  { key: 'C', text: '希望越来越多的人关注这个问题。' },
  { key: 'D', text: '不一定，去年一次也没下。', py: 'Bù yídìng, qùnián yí cì yě méi xià.' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '医生也这么说，但是我已经习惯了。' }
];
const B_TU = [
  { key: 'A', text: '变成' }, { key: 'B', text: '刚才' }, { key: 'C', text: '常常' },
  { key: 'D', text: '关注' }, { key: 'E', text: '鞋' }, { key: 'F', text: '地方' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '这个季节天气变化很快',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 办 và 为', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['办 bàn', '办公室 bàngōngshì — văn phòng<br>办法 bànfǎ — cách, biện pháp', '我去办公室找李老师。<br>Tôi đến văn phòng tìm thầy Lý.'],
        ['为 wèi', '为了 wèile — để, vì<br>为什么 wèishénme — tại sao', '为了得到好成绩，我要认真复习。<br>Để đạt điểm tốt, tôi phải ôn tập nghiêm túc.']
      ],
        note: 'Hai chữ đều có nét giống chữ 力: 办 có hai chấm ở hai bên 力; 为 có một chấm phía trên bên trái và một chấm ở bên trong. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 着', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['着急', 'zháojí — sốt ruột, lo lắng', '大家都不担心，就你一个人这么着急。<br>Mọi người đều không lo, chỉ mình bạn sốt ruột thế.'],
        ['坐着', 'zuòzhe — (đang) ngồi', '我们在外面坐着喝茶，突然下起雨来了。<br>Chúng tôi đang ngồi uống trà ở ngoài thì trời bỗng đổ mưa.']
      ],
        note: '着 đọc <b>zháo</b> trong 着急; đọc <b>zhe</b> (thanh nhẹ) khi đứng sau động từ, chỉ trạng thái đang kéo dài (坐着, 穿着, 拿着).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Các mùa<br>季节变换', '季节 jìjié (mùa) · 季 jì (mùa) · 四季 sìjì (bốn mùa) · 春天 chūntiān (mùa xuân) · 夏天 xiàtiān (mùa hè) · 秋天 qiūtiān (mùa thu) · 冬天 dōngtiān (mùa đông)'],
        ['Thời tiết<br>天气变化', '刮 guā (thổi) · 风 fēng (gió) · 下雨 xiàyǔ (mưa) · 下雪 xiàxuě (tuyết rơi) · 阴 yīn (âm u) · 晴 qíng (nắng, quang đãng) · 冷 lěng (lạnh) · 热 rè (nóng) · 凉快 liángkuai (mát mẻ) · 冰 bīng (băng, đá) · ' +
          '变 biàn (thay đổi) · 变化 biànhuà (sự thay đổi) · 变成 biànchéng (trở thành) · 伞 sǎn (ô, dù) · 雨伞 yǔsǎn (ô che mưa) · 雨衣 yǔyī (áo mưa)'],
        ['Môi trường sống<br>生活环境', '开花 kāihuā (nở hoa) · 街 jiē (phố) · 花园 huāyuán (vườn hoa) · 公园 gōngyuán (công viên) · 园 yuán (vườn) · 船 chuán (thuyền) · 地方 dìfang (nơi, chỗ)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['季 jì<br>mùa', '冬季 — mùa đông<br>北京一年四季都不一样。<br>Bốn mùa trong năm ở Bắc Kinh đều khác nhau.', 'A：你喜欢什么季节？<br>B：我喜欢春季和秋季，不冷也不热。<br>A: Bạn thích mùa nào? — B: Tôi thích mùa xuân và mùa thu, không lạnh cũng không nóng.'],
        ['园 yuán<br>vườn; công viên', '一个小花园 — một khu vườn nhỏ<br>这个小花园真漂亮！<br>Khu vườn nhỏ này đẹp thật!', 'A：请问公园在哪儿？<br>B：在那条街后面，走路五分钟就能到。<br>A: Cho hỏi công viên ở đâu ạ? — B: Ở phía sau con phố kia, đi bộ năm phút là đến.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['一年四季<br>yì nián sìjì — bốn mùa trong năm', '春夏秋冬<br>chūn xià qiū dōng — xuân hạ thu đông'],
        ['刮起风来<br>guā qǐ fēng lai — nổi gió', '下大雨<br>xià dàyǔ — mưa to'],
        ['天气多变<br>tiānqì duō biàn — thời tiết hay thay đổi', '刮风下雨<br>guāfēng xiàyǔ — gió thổi mưa rơi'],
        ['不冷不热<br>bù lěng bú rè — không lạnh không nóng', '开了很多花<br>kāile hěn duō huā — nở rất nhiều hoa'],
        ['一条小船<br>yì tiáo xiǎo chuán — một chiếc thuyền nhỏ', '一把雨伞<br>yì bǎ yǔsǎn — một chiếc ô'],
        ['一个好地方<br>yí gè hǎo dìfang — một nơi tốt', '街边<br>jiēbiān — bên đường']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 树都开花了; (2) 一年有四季、春夏秋冬都不一样;
      // (3) 这条街 (luong tu 条 + 街); (4) 秋天就会变成红色 (变成 + ket qua; 变 mot minh khong di voi 红色 o day);
      // (5) 那个地方环境特别好. Moi tu dung mot lan.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '这些树都', after: '了，公园更漂亮了。', answer: '开花' },
          { before: '我喜欢一年有', after: '、春夏秋冬都不一样的城市。', answer: '四季' },
          { before: '这条', after: '不太长，旁边都是高高的树，夏天在这里走凉快极了。', answer: '街' },
          { before: '这些树现在是绿色的，秋天就会', after: '红色或者黄色。', answer: '变成' },
          { before: '听说那个', after: '环境特别好，旁边还有一个大花园。', answer: '地方' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '这里冬天常下雪吗？', answer: 'D',
            vn: 'Ở đây mùa đông có hay có tuyết không? — D: Không chắc đâu, năm ngoái chẳng có lần nào.' },
          { n: 12, letters: L5, prompt: '雨越下越大，一会儿怎么回家？', answer: 'B',
            vn: 'Mưa càng lúc càng to, lát nữa về nhà kiểu gì đây? — B: Thầy Lý cho tôi mượn ô rồi, chúng mình cùng về nhé.' },
          { n: 13, letters: L5, prompt: '最近天气太热，空调都快要卖完了。', answer: 'A',
            vn: 'Dạo này trời nóng quá, điều hòa sắp bán hết cả rồi. — A: Đúng thế, ngày nào cũng nóng đến mức chẳng muốn ra khỏi nhà, ở trong phòng mát hơn.' },
          { n: 14, letters: L5, prompt: '环境越来越差，我们得想想办法。', answer: 'C',
            vn: 'Môi trường ngày càng tệ, chúng ta phải nghĩ cách thôi. — C: Mong là ngày càng nhiều người quan tâm đến vấn đề này.' },
          { n: 15, letters: L5, prompt: '虽然夏天运动完很热，但是你也不应该马上喝很多冰水。', promptPy: 'Suīrán xiàtiān yùndòngwán hěn rè, dànshì nǐ yě bù yīnggāi mǎshàng hē hěn duō bīngshuǐ.', answer: 'F',
            vn: 'Tuy mùa hè tập thể thao xong rất nóng, nhưng bạn cũng không nên uống ngay nhiều nước đá. — F: Bác sĩ cũng nói vậy, nhưng tôi quen rồi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '这个花园很安静，我吃完早饭（　）一个人来这里走走。', answer: 'C',
            vn: 'Khu vườn này rất yên tĩnh, ăn sáng xong tôi thường một mình đến đây đi dạo. — 常常: thường thường.' },
          { n: 17, letters: L5, prompt: '（　）还晴天呢，怎么突然就下起雨来了？', promptPy: '(　) hái qíngtiān ne, zěnme tūrán jiù xiàqǐ yǔ lai le?', answer: 'B',
            vn: 'Vừa nãy trời còn nắng mà, sao tự nhiên lại đổ mưa thế? — 刚才: vừa nãy.' },
          { n: 18, letters: L5, prompt: '他每天早上都看新闻，非常（　）天气的变化。', answer: 'D',
            vn: 'Sáng nào ông ấy cũng xem tin tức, rất quan tâm đến sự thay đổi của thời tiết. — 关注: quan tâm, theo dõi.' },
          { n: 19, letters: L5, prompt: 'A：你在这儿住了好几年了，早就习惯了吧？\nB：是的。这里已经（　）我的第二个家了，我会一直住下去。', answer: 'A',
            promptPy: 'A: Nǐ zài zhèr zhùle hǎojǐ nián le, zǎojiù xíguàn le ba?\nB: Shì de. Zhèli yǐjīng (　) wǒ de dì-èr gè jiā le, wǒ huì yìzhí zhù xiàqu.',
            vn: 'A: Bạn sống ở đây mấy năm rồi, chắc quen từ lâu rồi nhỉ?\nB: Đúng vậy. Nơi này đã trở thành ngôi nhà thứ hai của tôi, tôi sẽ sống ở đây mãi. — 变成: trở thành.' },
          { n: 20, letters: L5, prompt: 'A：咱们找个（　）休息一会儿吧，雨可能要下起来了。\nB：好。前面有一家咖啡店，马上就到了。', answer: 'F',
            vn: 'A: Chúng mình tìm chỗ nào nghỉ một lát đi, trời sắp mưa rồi.\nB: Được. Phía trước có một quán cà phê, sắp đến rồi. — 找个地方: tìm một chỗ.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '今天早上一出门，我就发现比昨天冷得多。走了一会儿天突然黑了，我马上决定回家去拿雨伞了。\n★今天早上的天气怎么样？',
            promptPy: 'Jīntiān zǎoshang yì chūmén, wǒ jiù fāxiàn bǐ zuótiān lěng de duō. Zǒule yíhuìr tiān tūrán hēi le, wǒ mǎshàng juédìng huíjiā qù ná yǔsǎn le.\nJīntiān zǎoshang de tiānqì zěnmeyàng?',
            options: [{ key: 'A', text: '下雨了' }, { key: 'B', text: '一直阴天' }, { key: 'C', text: '比昨天冷多了', py: 'bǐ zuótiān lěng duō le' }], answer: 'C',
            vn: 'Sáng nay vừa ra khỏi nhà, tôi đã thấy lạnh hơn hôm qua nhiều. Đi một lúc thì trời bỗng tối sầm, tôi lập tức quyết định về nhà lấy ô. — "比昨天冷得多" → C. Trời tối lại nhưng chưa mưa (A sai); lúc đầu chưa âm u (B sai).' },
          { n: 22, prompt: '下了好几天的雨，今天下午终于出太阳了，天气很舒服。我和朋友一起去公园走了走，公园里的花都开了，来看花的人挺多的。\n★他为什么和朋友一起去公园？',
            promptPy: 'Xiàle hǎojǐ tiān de yǔ, jīntiān xiàwǔ zhōngyú chū tàiyang le, tiānqì hěn shūfu. Wǒ hé péngyou yìqǐ qù gōngyuán zǒu le zǒu, gōngyuán li de huā dōu kāi le, lái kàn huā de rén tǐng duō de.\nTā wèishénme hé péngyou yìqǐ qù gōngyuán?',
            options: [{ key: 'A', text: '天气很舒服' }, { key: 'B', text: '公园里人不多', py: 'gōngyuán li rén bù duō' }, { key: 'C', text: '想找凉快的地方' }], answer: 'A',
            vn: 'Mưa mấy ngày liền, chiều nay cuối cùng cũng có nắng, thời tiết rất dễ chịu. Tôi và bạn cùng đi dạo công viên, hoa trong công viên đều nở cả, người đến ngắm hoa khá đông. — Trời dễ chịu nên đi dạo → A. Người ngắm hoa khá đông (B sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '这张照片很有意思，是我跟同学们爬山的时候照的。那天我们爬完山就住在山上了。虽然是夏天，但太阳下山以后天气特别冷，风也很大。别的同学或者带了长裤，或者带了大衣，我只穿了一条短裤和一件衬衫。因为太冷了，同学们把雨衣都借给我了。你看，照片上就我一个人穿着好几件雨衣。\n★那天山上的天气怎么样？',
            promptPy: 'Zhè zhāng zhàopiàn hěn yǒu yìsi, shì wǒ gēn tóngxuémen páshān de shíhou zhào de. Nàtiān wǒmen páwán shān jiù zhù zài shān shang le. Suīrán shì xiàtiān, dàn tàiyang xiàshān yǐhòu tiānqì tèbié lěng, fēng yě hěn dà. Biéde tóngxué huòzhě dàile chángkù, huòzhě dàile dàyī, wǒ zhǐ chuānle yì tiáo duǎnkù hé yí jiàn chènshān. Yīnwèi tài lěng le, tóngxuémen bǎ yǔyī dōu jiègěi wǒ le. Nǐ kàn, zhàopiàn shang jiù wǒ yí gè rén chuānzhe hǎojǐ jiàn yǔyī.\nNàtiān shān shang de tiānqì zěnmeyàng?',
            options: [{ key: 'A', text: '很热' }, { key: 'B', text: '下雨了' }, { key: 'C', text: '太阳下山后很冷' }], answer: 'C',
            vn: 'Bức ảnh này rất thú vị, chụp lúc tôi đi leo núi với các bạn cùng lớp. Hôm đó leo núi xong chúng tôi ngủ lại trên núi. Tuy là mùa hè nhưng sau khi mặt trời lặn trời rất lạnh, gió cũng to. Các bạn khác người thì mang quần dài, người thì mang áo khoác, còn tôi chỉ mặc một chiếc quần soóc và một chiếc áo sơ mi. Vì lạnh quá nên các bạn cho tôi mượn hết áo mưa. Bạn xem, trong ảnh chỉ có mình tôi mặc mấy lớp áo mưa. — "太阳下山以后天气特别冷" → C. Áo mưa dùng để giữ ấm chứ trời không mưa (B sai).' },
          { n: 24, prompt: '★同学们为什么把雨衣借给他？',
            options: [{ key: 'A', text: '因为拍照有意思' }, { key: 'B', text: '因为他没带大衣' }, { key: 'C', text: '因为他雨衣丢了' }], answer: 'B',
            vn: 'Anh ấy chỉ mặc quần soóc và áo sơ mi, không mang quần dài hay áo khoác nên bị lạnh → B.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '今天（ fēng ）刮得很大，我们别去坐船了。', promptPy: 'Jīntiān fēng guā de hěn dà, wǒmen bié qù zuò chuán le.', answer: '风',
            vn: 'Hôm nay gió to quá, chúng mình đừng đi thuyền nữa. — 风 fēng: gió; 刮风: gió thổi.' },
          { n: 26, input: true, maxlength: 2, prompt: '这几年住下来，我最喜欢的（ jì ）节还是秋天。', promptPy: 'Zhè jǐ nián zhù xiàlai, wǒ zuì xǐhuan de jìjié háishi qiūtiān.', answer: '季',
            vn: 'Sống ở đây mấy năm, mùa tôi thích nhất vẫn là mùa thu. — 季节 jìjié: mùa.' },
          { n: 27, input: true, maxlength: 2, prompt: '秋天来了，天气变（ liáng ）快了。', promptPy: 'Qiūtiān lái le, tiānqì biàn liángkuai le.', answer: '凉',
            vn: 'Mùa thu đến rồi, trời trở nên mát mẻ. — 凉快 liángkuai: mát mẻ.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; 29–30 script = cau trong file dap an.
          // 28 TU GIAI: cau trong file dap an "这几天一直下了大雨。" khong co tu 刚才 (khong dung yeu cau de) ->
          // tu dat cau mau co 刚才, dung 下起雨来 cua bai 12.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '刚才',
            img: IMG + 'q28.webp', prompt: '刚才', promptPy: 'gāngcái', placeholder: 'Viết câu có từ 刚才…',
            script: '刚才突然下起雨来了，还好她带了伞。', vn: 'Vừa nãy trời bỗng đổ mưa, may mà cô ấy có mang ô.' },
          { n: 29, free: true, must: '常常', img: IMG + 'q29.webp', prompt: '常常', promptPy: 'chángcháng', placeholder: 'Viết câu có từ 常常…',
            script: '我爷爷常常一个人坐在公园里看看书。', vn: 'Ông tôi thường ngồi một mình trong công viên đọc sách.' },
          { n: 30, free: true, must: '关注', img: IMG + 'q30.webp', prompt: '关注', promptPy: 'guānzhù', placeholder: 'Viết câu có từ 关注…',
            script: '环境越来越差，我们应该多关注这个问题。', vn: 'Môi trường ngày càng tệ, chúng ta nên quan tâm nhiều hơn đến vấn đề này.' }
        ] }
    ] }
  ]
};
