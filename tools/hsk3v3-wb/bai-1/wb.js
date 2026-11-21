// Bai 1 — 我们去机场接你们. Sach bai tap trang 001–010 = PDF trang 6–15.
// Dap an: HSK3--学练手册(习题答案).pdf trang 1 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 001–003) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2C 3B 4C 5B 6A 7C 8C 9C 10B).
const IMG = '/images/hsk3v3-bai-1-wb/';
const B_GHEP = [
  { key: 'A', text: '我们身高都是一米七，但是她比我瘦。', py: 'Wǒmen shēngāo dōu shì yì mǐ qī, dànshì tā bǐ wǒ shòu.' },
  { key: 'B', text: '别着急，我去服务台问问，会找到的。' },
  { key: 'C', text: '左边第二个。他跟我长得不像。', py: 'Zuǒbian dì-èr gè. Tā gēn wǒ zhǎng de bú xiàng.' },
  { key: 'D', text: '那是我妹妹，我带她来的。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '不客气，我可以看一下您的护照吗？', py: 'Bú kèqi, wǒ kěyǐ kàn yíxià nín de hùzhào ma?' }
];
const B_TU = [
  { key: 'A', text: '像' }, { key: 'B', text: '以为' }, { key: 'C', text: '重要' },
  { key: 'D', text: '帮助' }, { key: 'E', text: '鞋' }, { key: 'F', text: '应该' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我们去机场接你们',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 问 và 间', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['问 wèn<br>门 + 口', '问题 wèntí — câu hỏi, vấn đề<br>请问 qǐngwèn — xin hỏi', '我去服务台问问。<br>Tôi ra quầy dịch vụ hỏi thử xem.'],
        ['间 jiān<br>门 + 日', '时间 shíjiān — thời gian<br>房间 fángjiān — căn phòng', '站在中间的人是我弟弟。<br>Người đứng ở giữa là em trai tôi.']
      ],
        note: 'Hai chữ đều có 门 bên ngoài: trong 问 là 口 (cái miệng → hỏi), trong 间 là 日. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 发', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['长发', 'cháng fà — tóc dài', '我觉得长发看起来很漂亮。<br>Tôi thấy tóc dài trông rất đẹp.'],
        ['发现', 'fāxiàn — phát hiện, nhận ra', '我发现前面那个穿黑衣服的高个子的人是李老师。<br>Tôi nhận ra người cao mặc áo đen phía trước là thầy Lý.']
      ],
        note: '发 đọc <b>fà</b> khi nói về tóc (头发 tóufa, 长发); đọc <b>fā</b> trong 发现.' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Thông tin về người<br>人物信息', '男人 nánrén (đàn ông) · 女人 nǚrén (phụ nữ) · 姐妹 jiěmèi (chị em gái) · 小孩儿 xiǎoháir (trẻ con) · 爱人 àiren (vợ / chồng) · 妻子 qīzi (vợ) · 丈夫 zhàngfu (chồng)<br>' +
          '身高 shēngāo (chiều cao) · 头发 tóufa (tóc) · 瘦 shòu (gầy) · 年轻 niánqīng (trẻ) · 高 gāo (cao) · 个子 gèzi (vóc dáng)'],
        ['Thông tin về đồ vật<br>物品信息', '行李 xíngli (hành lý) · 箱子 xiāngzi (vali, thùng) · 护照 hùzhào (hộ chiếu) · 服务台 fúwùtái (quầy dịch vụ) · 照片 zhàopiàn (ảnh) · 上衣 shàngyī (áo) · 米 mǐ (mét) · 重要 zhòngyào (quan trọng) · 中间 zhōngjiān (ở giữa) · 长 cháng (dài) · 短 duǎn (ngắn)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['男人 nánrén<br>đàn ông', '高个子男人 — người đàn ông cao<br>那个男人是我爸爸的朋友。<br>Người đàn ông kia là bạn của bố tôi.', 'A：你认识那个高个子的男人吗？<br>B：他是新来的老师。<br>A: Bạn có biết người đàn ông cao kia không? — B: Anh ấy là thầy giáo mới đến.'],
        ['女人 nǚrén<br>phụ nữ', '年轻的女人 — người phụ nữ trẻ<br>房间里有两个年轻的女人在唱歌。<br>Trong phòng có hai người phụ nữ trẻ đang hát.', 'A：那个女人是谁？<br>B：我也不认识。<br>A: Người phụ nữ kia là ai? — B: Tôi cũng không quen.'],
        ['姐妹 jiěmèi<br>chị em gái', '两姐妹 — hai chị em<br>她们是姐妹，但是长得不太像。<br>Họ là chị em nhưng trông không giống nhau lắm.', 'A：她们是同学吗？<br>B：不是，她们是姐妹。<br>A: Họ là bạn học à? — B: Không, họ là chị em.'],
        ['爱人 àiren<br>vợ / chồng', '我的爱人 — vợ (chồng) tôi<br>我的爱人在医院工作。<br>Vợ (chồng) tôi làm việc ở bệnh viện.', 'A：这个高个子的男人是谁？<br>B：他是我爱人。<br>A: Người đàn ông cao này là ai? — B: Anh ấy là chồng tôi.'],
        ['上衣 shàngyī<br>áo', '一件上衣 — một chiếc áo<br>她穿着一件白色的上衣。<br>Cô ấy mặc một chiếc áo màu trắng.', 'A：这个包里的衣服是谁的？<br>B：是孩子的。这是我昨天给他买的新上衣。<br>A: Quần áo trong túi này là của ai? — B: Của con tôi. Đây là chiếc áo mới hôm qua tôi mua cho cháu.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['高个子<br>gāo gèzi — dáng cao', '瘦瘦高高的女人<br>shòushòu-gāogāo de nǚrén — người phụ nữ cao gầy'],
        ['身高一米八<br>shēngāo yì mǐ bā — cao 1 mét 80', '小男孩儿<br>xiǎo nánháir — cậu bé'],
        ['头发很长<br>tóufa hěn cháng — tóc rất dài', '短头发<br>duǎn tóufa — tóc ngắn'],
        ['年轻男人<br>niánqīng nánrén — người đàn ông trẻ', '好姐妹<br>hǎo jiěmèi — chị em thân thiết'],
        ['黑箱子<br>hēi xiāngzi — vali màu đen', '一本护照<br>yì běn hùzhào — một cuốn hộ chiếu'],
        ['朋友的照片<br>péngyou de zhàopiàn — ảnh của bạn', '站在中间<br>zhàn zài zhōngjiān — đứng ở giữa']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1)/(4): ca hai deu hop "男人/女人" ve ngu phap;
      // (4) co 妻子 -> 女人, nen (1) = 男人 (moi tu dung mot lan).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '站在服务台前面的短头发的', after: '就是小李。', answer: '男人' },
          { before: '她们是', after: '，所以长得很像。', answer: '姐妹' },
          { before: '他虽然70多岁了，但看起来还是很', after: '。', answer: '年轻' },
          { before: '穿红色上衣的这个', after: '是我朋友的妻子。', answer: '女人' },
          { before: '我的箱子里有很多', after: '的东西。', answer: '重要' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '那是谁？我怎么没有见过她？', promptPy: 'Nà shì shéi? Wǒ zěnme méiyǒu jiànguo tā?', answer: 'D',
            vn: 'Đó là ai vậy? Sao tôi chưa gặp cô ấy bao giờ? — D: Đó là em gái tôi, tôi dẫn em ấy đến.' },
          { n: 12, letters: L5, prompt: '照片上哪个是你哥哥？我没找到。', promptPy: 'Zhàopiàn shang nǎge shì nǐ gēge? Wǒ méi zhǎodào.', answer: 'C',
            vn: 'Trên ảnh người nào là anh trai bạn? Tôi không tìm thấy. — C: Người thứ hai bên trái. Anh ấy trông không giống tôi.' },
          { n: 13, letters: L5, prompt: '谢谢您，这就是我的箱子。', promptPy: 'Xièxie nín, zhè jiù shì wǒ de xiāngzi.', answer: 'F',
            vn: 'Cảm ơn anh, đây chính là vali của tôi. — F: Không có gì, tôi có thể xem hộ chiếu của chị một chút không?' },
          { n: 14, letters: L5, prompt: '她看起来好像比你高一些。', answer: 'A',
            vn: 'Trông cô ấy hình như cao hơn bạn một chút. — A: Chúng tôi đều cao 1 mét 70, nhưng cô ấy gầy hơn tôi.' },
          { n: 15, letters: L5, prompt: '我的箱子不见了，里面有很多重要的东西。', promptPy: 'Wǒ de xiāngzi bú jiàn le, lǐmiàn yǒu hěn duō zhòngyào de dōngxi.', answer: 'B',
            vn: 'Vali của tôi không thấy đâu nữa, bên trong có nhiều đồ quan trọng. — B: Đừng lo, tôi ra quầy dịch vụ hỏi thử, sẽ tìm được thôi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '我的手机在国外不能用，你有（　）的事情可以给我妈妈打电话。', answer: 'C',
            promptPy: 'Wǒ de shǒujī zài guówài bù néng yòng, nǐ yǒu (　) de shìqing kěyǐ gěi wǒ māma dǎ diànhuà.',
            vn: 'Điện thoại của tôi ở nước ngoài không dùng được, có việc quan trọng thì bạn gọi cho mẹ tôi nhé. — 重要的事情: việc quan trọng.' },
          { n: 17, letters: L5, prompt: '箱子就放在这里吧，谢谢你们的（　）。', promptPy: 'Xiāngzi jiù fàng zài zhèlǐ ba, xièxie nǐmen de (　).', answer: 'D',
            vn: 'Cứ để vali ở đây nhé, cảm ơn các bạn đã giúp đỡ. — 谢谢你们的帮助: cảm ơn sự giúp đỡ của các bạn.' },
          { n: 18, letters: L5, prompt: '别着急，你的箱子（　）可以找到。', answer: 'F',
            vn: 'Đừng lo, vali của bạn chắc là tìm được thôi. — 应该: chắc là, hẳn là (đoán).' },
          { n: 19, letters: L5, prompt: 'A：这是我爱人的弟弟，叫刘东，在电脑公司工作。\nB：他们长得很（　）。', answer: 'A',
            promptPy: 'A: Zhè shì wǒ àiren de dìdi, jiào Liú Dōng, zài diànnǎo gōngsī gōngzuò.\nB: Tāmen zhǎng de hěn (　).',
            vn: 'A: Đây là em trai của vợ tôi, tên là Lưu Đông, làm ở công ty máy tính.\nB: Hai người trông rất giống nhau. — 长得很像: trông rất giống.' },
          { n: 20, letters: L5, prompt: 'A：你怎么这么高兴？\nB：我（　）钱包丢了，但是在书包里找到了。', answer: 'B',
            promptPy: 'A: Nǐ zěnme zhème gāoxìng?\nB: Wǒ (　) qiánbāo diū le, dànshì zài shūbāo li zhǎodào le.',
            vn: 'A: Sao bạn vui thế?\nB: Tôi cứ tưởng mất ví rồi, nhưng lại tìm thấy trong cặp sách. — 以为: cứ tưởng (mà thật ra không phải).' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '照片上的人个子不高，穿着一件红色的上衣，头发很长也很黑。我好像在哪儿见过她。\n★照片上的人：',
            promptPy: 'Zhàopiàn shang de rén gèzi bù gāo, chuānzhe yí jiàn hóngsè de shàngyī, tóufa hěn cháng yě hěn hēi. Wǒ hǎoxiàng zài nǎr jiànguo tā.\nZhàopiàn shang de rén:',
            options: [{ key: 'A', text: '个子很高' }, { key: 'B', text: '长得很黑', py: 'zhǎng de hěn hēi' }, { key: 'C', text: '他好像见过', py: 'tā hǎoxiàng jiànguo' }], answer: 'C',
            vn: 'Người trong ảnh không cao, mặc một chiếc áo đỏ, tóc dài và đen. Hình như tôi đã gặp cô ấy ở đâu rồi. — "我好像在哪儿见过她" → C. Tóc đen chứ không phải da đen (B sai), người không cao (A sai).' },
          { n: 22, prompt: '李先生以为护照不见了，着急地找了很长时间。没想到妻子一回家就帮他找到了，他忘了护照在箱子里了。\n★关于李先生，可以知道什么？',
            promptPy: 'Lǐ xiānsheng yǐwéi hùzhào bú jiàn le, zháojí de zhǎole hěn cháng shíjiān. Méi xiǎngdào qīzi yì huí jiā jiù bāng tā zhǎodào le, tā wàngle hùzhào zài xiāngzi li le.\nGuānyú Lǐ xiānsheng, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '护照在妻子那儿', py: 'hùzhào zài qīzi nàr' }, { key: 'B', text: '他的东西找到了' }, { key: 'C', text: '他的行李箱丢了', py: 'tā de xínglixiāng diū le' }], answer: 'B',
            vn: 'Ông Lý tưởng hộ chiếu bị mất, cuống quýt tìm rất lâu. Không ngờ vợ vừa về nhà đã tìm giúp được, ông quên là hộ chiếu ở trong vali. — Hộ chiếu đã tìm thấy → B.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '你们看，照片里那个短头发的男孩儿就是我，我站在中间。我左边是一个头发很长的年轻女孩儿，她穿着黑色的上衣、红色的裤子，正在看书；我右边是一个个子很高的男孩儿，他穿着白色的上衣，手里拿着一个大包，看起来有点儿不高兴。\n★关于照片，可以知道什么？',
            promptPy: 'Nǐmen kàn, zhàopiàn li nàge duǎn tóufa de nánháir jiù shì wǒ, wǒ zhàn zài zhōngjiān. Wǒ zuǒbian shì yí gè tóufa hěn cháng de niánqīng nǚháir, tā chuānzhe hēisè de shàngyī, hóngsè de kùzi, zhèngzài kàn shū; wǒ yòubian shì yí gè gèzi hěn gāo de nánháir, tā chuānzhe báisè de shàngyī, shǒu li názhe yí gè dà bāo, kàn qǐlai yǒudiǎnr bù gāoxìng.\nGuānyú zhàopiàn, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '照片里有四个人', py: 'zhàopiàn li yǒu sì gè rén' }, { key: 'B', text: '女孩儿穿着红裤子', py: 'nǚháir chuānzhe hóng kùzi' }, { key: 'C', text: '男孩儿的个子不高' }], answer: 'B',
            vn: 'Các bạn xem, cậu bé tóc ngắn trong ảnh chính là tôi, tôi đứng ở giữa. Bên trái tôi là một cô gái trẻ tóc rất dài, mặc áo đen, quần đỏ, đang đọc sách; bên phải tôi là một cậu con trai rất cao, mặc áo trắng, tay cầm một chiếc túi to, trông hơi không vui. — Cô gái mặc quần đỏ → B. Trong ảnh có ba người (A sai).' },
          { n: 24, prompt: '★关于他右边的男孩儿，可以知道什么？', promptPy: 'Guānyú tā yòubian de nánháir, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '头发很短' }, { key: 'B', text: '站在中间' }, { key: 'C', text: '拿着一个大包', py: 'názhe yí gè dà bāo' }], answer: 'C',
            vn: 'Cậu con trai bên phải "手里拿着一个大包" — tay cầm một chiếc túi to → C. Tóc ngắn và đứng giữa là người kể (A, B sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '他看上去很着（ jí ）。', promptPy: 'Tā kàn shàngqu hěn zháojí.', answer: '急',
            vn: 'Trông anh ấy rất sốt ruột. — 着急 zháojí: lo lắng, sốt ruột.' },
          { n: 26, input: true, maxlength: 2, prompt: '这是我的（ hù ）照号码。', promptPy: 'Zhè shì wǒ de hùzhào hàomǎ.', answer: '护',
            vn: 'Đây là số hộ chiếu của tôi. — 护照 hùzhào: hộ chiếu.' },
          { n: 27, input: true, maxlength: 2, prompt: '这件事很（ zhòng ）要，你不要忘了。', promptPy: 'Zhè jiàn shì hěn zhòngyào, nǐ bú yào wàng le.', answer: '重',
            vn: 'Việc này rất quan trọng, bạn đừng quên nhé. — 重要 zhòngyào: quan trọng.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '以为',
            img: IMG + 'q28.webp', prompt: '以为', promptPy: 'yǐwéi', placeholder: 'Viết câu có từ 以为…',
            script: '别人都以为她们是朋友，其实她们是姐妹。', vn: 'Mọi người đều tưởng họ là bạn, thật ra họ là chị em.' },
          { n: 29, free: true, must: '应该', img: IMG + 'q29.webp', prompt: '应该', promptPy: 'yīnggāi', placeholder: 'Viết câu có từ 应该…',
            script: '我的行李箱应该在哪儿啊？', vn: 'Vali của tôi (lẽ ra) phải ở chỗ nào nhỉ?' },
          { n: 30, free: true, must: '好像', img: IMG + 'q30.webp', prompt: '好像', promptPy: 'hǎoxiàng', placeholder: 'Viết câu có từ 好像…',
            script: '到了机场她才发现好像把护照忘在家里了。', vn: 'Đến sân bay cô ấy mới phát hiện hình như đã để quên hộ chiếu ở nhà.' }
        ] }
    ] }
  ]
};
