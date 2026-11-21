// Bai 14 — 这本书被别人借走了. Sach bai tap trang 121–129 = PDF trang 126–134.
// Dap an: HSK3--学练手册(习题答案).pdf trang 14 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 121–122) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2B 3C 4C 5A 6A 7B 8C 9B 10A).
// Bang tap viet 形近字 trong sach ghi 告诉 hai lan (o thu 5 va 6) — o day chi ghi mot lan.
const IMG = '/images/hsk3v3-bai-14-wb/';
const B_GHEP = [
  { key: 'A', text: '我有一个，不常用，我借给你吧。', py: 'Wǒ yǒu yí gè, bù cháng yòng, wǒ jiè gěi nǐ ba.' },
  { key: 'B', text: '我也不知道，我有事很早就离开了。', py: 'Wǒ yě bù zhīdào, wǒ yǒu shì hěn zǎo jiù líkāi le.' },
  { key: 'C', text: '我的电脑打不开那个视频，怎么办？', py: 'Wǒ de diànnǎo dǎ bu kāi nàge shìpín, zěnme bàn?' },
  { key: 'D', text: '我昨天去找了，这几本书都被别人借走了。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '一本介绍中国历史和文化的电子书。' }
];
const B_TU = [
  { key: 'A', text: '最好' }, { key: 'B', text: '忘记' }, { key: 'C', text: '怎么办', py: 'zěnme bàn' },
  { key: 'D', text: '面前' }, { key: 'E', text: '鞋' }, { key: 'F', text: '有些' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '这本书被别人借走了',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 听 và 诉', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['听 tīng<br>口 + 斤', '听说 tīngshuō — nghe nói<br>听见 tīngjiàn — nghe thấy', '听说你们要表演一个节目。<br>Nghe nói các bạn sắp biểu diễn một tiết mục.'],
        ['诉 sù<br>讠 + 斥', '告诉 gàosu — nói cho biết, bảo', '老师告诉我们明天不上课。<br>Cô giáo bảo chúng tôi ngày mai không học.']
      ],
        note: 'Bên trái 听 là 口 (cái miệng), bên trái 诉 là 讠 (lời nói); bên phải 听 là 斤, bên phải 诉 là 斥 — giống 斤 nhưng có thêm một nét chấm. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 相', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['相信', 'xiāngxìn — tin, tin tưởng', '你要先相信自己，然后才能找到解决问题的方法。<br>Bạn phải tin vào bản thân trước, sau đó mới tìm được cách giải quyết vấn đề.'],
        ['照相', 'zhàoxiàng — chụp ảnh', '晚会结束后，同学们找到校长，和他一起照相。<br>Buổi tiệc kết thúc, các bạn học tìm thầy hiệu trưởng và chụp ảnh cùng thầy.']
      ],
        note: '相 đọc <b>xiāng</b> trong 相信 (lẫn nhau, tin nhau); đọc <b>xiàng</b> khi liên quan đến ảnh, dung mạo: 照相, 相机 xiàngjī (máy ảnh).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Đời sống học đường<br>校园生活', '留学生 liúxuéshēng (lưu học sinh) · 女生 nǚshēng (nữ sinh) · 男生 nánshēng (nam sinh) · 校长 xiàozhǎng (hiệu trưởng) · 名人 míngrén (người nổi tiếng) · 班级 bānjí (lớp học) · 节 jié (tiết — lượng từ của tiết học)<br>' +
          '网站 wǎngzhàn (trang web) · 视频 shìpín (video) · 报纸 bàozhǐ (báo) · 电子书 diànzǐshū (sách điện tử) · 词典 cídiǎn (từ điển) · 字典 zìdiǎn (tự điển, từ điển chữ) · 图书馆 túshūguǎn (thư viện) · 语言 yǔyán (ngôn ngữ)'],
        ['Hoạt động văn nghệ<br>文艺活动', '故事 gùshi (câu chuyện) · 表演 biǎoyǎn (biểu diễn) · 节目 jiémù (tiết mục, chương trình) · 新年 xīnnián (năm mới) · 难听 nántīng (khó nghe) · 难看 nánkàn (xấu, khó coi) · 好听 hǎotīng (hay, dễ nghe) · 好看 hǎokàn (đẹp, hay)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['字典 zìdiǎn<br>tự điển', '一本字典 — một cuốn tự điển<br>我每天上课都用汉语字典。<br>Hôm nào lên lớp tôi cũng dùng tự điển tiếng Trung.', 'A：李老师，我不会写这个汉字。<br>B：你可以看一下字典。<br>A: Thầy Lý ơi, em không biết viết chữ Hán này. — B: Em có thể tra tự điển xem.'],
        ['语言 yǔyán<br>ngôn ngữ', '一种语言 — một ngôn ngữ<br>汉语是一种很有意思的语言。<br>Tiếng Trung là một ngôn ngữ rất thú vị.', 'A：你会说几种语言？<br>B：我会说两种语言。<br>A: Bạn nói được mấy thứ tiếng? — B: Tôi nói được hai thứ tiếng.'],
        ['难听 nántīng<br>khó nghe', '难听的歌 — bài hát khó nghe<br>外面是什么声音？太难听了！<br>Bên ngoài là tiếng gì thế? Khó nghe quá!', 'A：你喜欢这个音乐吗？<br>B：挺难听的，我不喜欢这样的音乐。<br>A: Bạn có thích bản nhạc này không? — B: Khá khó nghe, tôi không thích kiểu nhạc này.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['讲故事<br>jiǎng gùshi — kể chuyện', '读报纸<br>dú bàozhǐ — đọc báo'],
        ['借词典<br>jiè cídiǎn — mượn từ điển', '看视频<br>kàn shìpín — xem video'],
        ['视频网站<br>shìpín wǎngzhàn — trang web video', '表演节目<br>biǎoyǎn jiémù — biểu diễn tiết mục'],
        ['新年晚会<br>xīnnián wǎnhuì — tiệc mừng năm mới', '大学校长<br>dàxué xiàozhǎng — hiệu trưởng đại học'],
        ['一节课<br>yì jié kè — một tiết học', '一本电子书<br>yì běn diànzǐshū — một cuốn sách điện tử'],
        ['一位名人<br>yí wèi míngrén — một người nổi tiếng', '一种语言<br>yì zhǒng yǔyán — một ngôn ngữ']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 一边读报纸; (2) 讲了一个有意思的故事;
      // (3) 从图书馆网站上借的一本 + "我没看视频" -> 电子书 (sach doc tren may, khong phai 词典/字典);
      // (4) 一节课; (5) 几乎每个中国人都认识他 -> 名人.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '爷爷喜欢每天一边吃早饭，一边读', after: '。', answer: '报纸' },
          { before: '李老师上课的时候讲了一个有意思的', after: '，我们听得很开心。', answer: '故事' },
          { before: '我没看视频，我在看昨天从图书馆网站上借的一本', after: '。', answer: '电子书' },
          { before: '今天我只上了一', after: '课就回家了。', answer: '节' },
          { before: '这个节目介绍了一位中国的', after: '，几乎每个中国人都认识他。', answer: '名人' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你在看什么呢？', answer: 'F',
            vn: 'Bạn đang xem gì thế? — F: Một cuốn sách điện tử giới thiệu lịch sử và văn hóa Trung Quốc.' },
          { n: 12, letters: L5, prompt: '这本词典太旧了，我想买个电子词典。', answer: 'A',
            vn: 'Cuốn từ điển này cũ quá rồi, tôi muốn mua một cái từ điển điện tử. — A: Tôi có một cái, ít dùng, tôi cho bạn mượn nhé.' },
          { n: 13, letters: L5, prompt: '昨天的新年晚会是几点结束的？', answer: 'B',
            vn: 'Tiệc mừng năm mới hôm qua kết thúc lúc mấy giờ? — B: Tôi cũng không biết, tôi có việc nên về từ sớm.' },
          { n: 14, letters: L5, prompt: '老师说先看视频，再开始写作业。', answer: 'C',
            vn: 'Cô giáo bảo xem video trước rồi mới bắt đầu làm bài tập. — C: Máy tính của tôi không mở được video đó, làm thế nào bây giờ?' },
          { n: 15, letters: L5, prompt: '你不用去书店，图书馆有这些书。', answer: 'D',
            vn: 'Bạn không cần ra hiệu sách đâu, thư viện có những cuốn này. — D: Hôm qua tôi đi tìm rồi, mấy cuốn này đều bị người khác mượn mất rồi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '昨天的作业我（　）写了，老师会不会不高兴？', answer: 'B',
            vn: 'Bài tập hôm qua tôi quên làm, cô giáo có không vui không nhỉ? — 忘记写了: quên làm (viết).' },
          { n: 17, letters: L5, prompt: '来看我们表演节目的人太多了，我们都（　）紧张。', answer: 'F',
            promptPy: 'Lái kàn wǒmen biǎoyǎn jiémù de rén tài duō le, wǒmen dōu (　) jǐnzhāng.',
            vn: 'Người đến xem chúng tôi biểu diễn đông quá, chúng tôi đều hơi căng thẳng. — 有些紧张: hơi căng thẳng.' },
          { n: 18, letters: L5, prompt: '昨天的晚会上，我第一次在同学们（　）跳了一个舞。', answer: 'D',
            promptPy: 'Zuótiān de wǎnhuì shang, wǒ dì-yī cì zài tóngxuémen (　) tiàole yí gè wǔ.',
            vn: 'Ở buổi tiệc hôm qua, lần đầu tiên tôi nhảy một điệu trước mặt các bạn học. — 在同学们面前: trước mặt các bạn.' },
          { n: 19, letters: L5, prompt: 'A：我借的那本书不见了，（　）？\nB：我刚才还看见了，我跟你一块儿去教室里找找。', answer: 'C',
            promptPy: 'A: Wǒ jiè de nà běn shū bú jiàn le, (　)?\nB: Wǒ gāngcái hái kànjiàn le, wǒ gēn nǐ yíkuàir qù jiàoshì li zhǎozhao.',
            vn: 'A: Cuốn sách tôi mượn không thấy đâu nữa, làm thế nào bây giờ?\nB: Lúc nãy tôi vẫn còn thấy mà, tôi cùng bạn vào lớp tìm thử. — 怎么办: làm thế nào.' },
          { n: 20, letters: L5, prompt: 'A：我想学好中文，你有什么好办法？\nB：你（　）每天读一会儿中文书，或者看一些中文视频。', answer: 'A',
            vn: 'A: Tôi muốn học giỏi tiếng Trung, bạn có cách gì hay không?\nB: Tốt nhất là mỗi ngày bạn đọc sách tiếng Trung một lúc, hoặc xem video tiếng Trung. — 最好: tốt nhất là (khuyên).' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '我们班的新年晚会很有意思，有很多节目。除了同学们表演了节目，老师们也一起跳了一个舞。\n★关于新年晚会，可以知道什么？',
            promptPy: 'Wǒmen bān de xīnnián wǎnhuì hěn yǒu yìsi, yǒu hěn duō jiémù. Chúle tóngxuémen biǎoyǎnle jiémù, lǎoshīmen yě yìqǐ tiàole yí gè wǔ.\nGuānyú xīnnián wǎnhuì, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '节目不多' }, { key: 'B', text: '老师唱歌了' }, { key: 'C', text: '晚会有意思' }], answer: 'C',
            vn: 'Tiệc mừng năm mới của lớp chúng tôi rất thú vị, có nhiều tiết mục. Ngoài các bạn biểu diễn, các thầy cô cũng cùng nhảy một điệu. — "很有意思" → C. Có nhiều tiết mục (A sai), thầy cô nhảy chứ không hát (B sai).' },
          { n: 22, prompt: '我的汉语词典被弟弟拿走了，老师让我们用词典学汉字，我现在不知道怎么办。\n★他遇到什么问题了？',
            promptPy: 'Wǒ de Hànyǔ cídiǎn bèi dìdi názǒu le, lǎoshī ràng wǒmen yòng cídiǎn xué Hànzì, wǒ xiànzài bù zhīdào zěnme bàn.\nTā yùdào shénme wèntí le?',
            options: [{ key: 'A', text: '他不想写作业' }, { key: 'B', text: '老师不让用词典' }, { key: 'C', text: '词典被弟弟拿走了' }], answer: 'C',
            vn: 'Từ điển tiếng Trung của tôi bị em trai lấy mất, cô giáo bảo chúng tôi dùng từ điển học chữ Hán, giờ tôi không biết làm thế nào. — Từ điển bị em trai lấy → C. Cô giáo bảo dùng từ điển (B sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '我们学校的图书馆很大，有很多种语言的书，中文书是最多的。有的书我们可以借回家看，有的书只能在图书馆里看。现在越来越多的学生喜欢看电子书，所以图书馆的网站上也准备了很多电子书。学生不用来图书馆，在家里打开电脑或者手机就可以借到自己想看的书。\n★关于图书馆，可以知道：',
            promptPy: 'Wǒmen xuéxiào de túshūguǎn hěn dà, yǒu hěn duō zhǒng yǔyán de shū, Zhōngwén shū shì zuì duō de. Yǒude shū wǒmen kěyǐ jiè huí jiā kàn, yǒude shū zhǐ néng zài túshūguǎn li kàn. Xiànzài yuèláiyuè duō de xuésheng xǐhuan kàn diànzǐshū, suǒyǐ túshūguǎn de wǎngzhàn shang yě zhǔnbèile hěn duō diànzǐshū. Xuésheng búyòng lái túshūguǎn, zài jiā li dǎkāi diànnǎo huòzhě shǒujī jiù kěyǐ jièdào zìjǐ xiǎng kàn de shū.\nGuānyú túshūguǎn, kěyǐ zhīdào:',
            options: [{ key: 'A', text: '比较小' }, { key: 'B', text: '有不少中文书' }, { key: 'C', text: '书都可以借回家', py: 'shū dōu kěyǐ jiè huí jiā' }], answer: 'B',
            vn: 'Thư viện trường tôi rất lớn, có sách bằng nhiều thứ tiếng, sách tiếng Trung là nhiều nhất. Có sách được mượn về nhà, có sách chỉ được đọc trong thư viện. Bây giờ ngày càng nhiều học sinh thích đọc sách điện tử, nên trên trang web của thư viện cũng chuẩn bị nhiều sách điện tử. Học sinh không cần đến thư viện, ở nhà mở máy tính hoặc điện thoại là mượn được sách mình muốn đọc. — Sách tiếng Trung nhiều nhất → B. Thư viện lớn (A sai); có sách chỉ đọc tại chỗ (C sai).' },
          { n: 24, prompt: '★学生可以怎么借电子书？',
            options: [{ key: 'A', text: '去书店借' }, { key: 'B', text: '去图书馆借' }, { key: 'C', text: '自己在网站上借', py: 'zìjǐ zài wǎngzhàn shang jiè' }], answer: 'C',
            vn: 'Sách điện tử có trên trang web, ở nhà mở máy tính hoặc điện thoại là mượn được → C.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '老师一直相（ xìn ）我们能学好中文。', promptPy: 'Lǎoshī yìzhí xiāngxìn wǒmen néng xuéhǎo Zhōngwén.', answer: '信',
            vn: 'Cô giáo luôn tin chúng tôi có thể học giỏi tiếng Trung. — 相信 xiāngxìn: tin tưởng.' },
          { n: 26, input: true, maxlength: 2, prompt: '我很喜欢听妈妈讲我小时候的（ gù ）事。', promptPy: 'Wǒ hěn xǐhuan tīng māma jiǎng wǒ xiǎoshíhou de gùshi.', answer: '故',
            vn: 'Tôi rất thích nghe mẹ kể chuyện hồi tôi còn nhỏ. — 故事 gùshi: câu chuyện.' },
          { n: 27, input: true, maxlength: 2, prompt: '那个女生在电影里表演得特别好，所以她（ bèi ）大家记住了。', promptPy: 'Nàge nǚshēng zài diànyǐng li biǎoyǎn de tèbié hǎo, suǒyǐ tā bèi dàjiā jìzhù le.', answer: '被',
            vn: 'Cô gái ấy diễn trong phim rất hay, nên được mọi người nhớ đến. — 被 bèi: bị, được (câu bị động).' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          // 28: tranh la nhom hoc sinh ngoi hoc quanh ban, nhung cau trong file dap an la "我们一块儿吃晚饭。" — giu nguyen dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '一块',
            img: IMG + 'q28.webp', prompt: '一块儿', promptPy: 'yíkuàir', placeholder: 'Viết câu có từ 一块儿…',
            script: '我们一块儿吃晚饭。', vn: 'Chúng ta cùng nhau ăn tối.' },
          { n: 29, free: true, must: '最后', img: IMG + 'q29.webp', prompt: '最后', promptPy: 'zuìhòu', placeholder: 'Viết câu có từ 最后…',
            script: '最后我们一起拍了一张照片。', vn: 'Cuối cùng chúng tôi cùng chụp một tấm ảnh.' },
          { n: 30, free: true, must: '忘记', img: IMG + 'q30.webp', prompt: '忘记', promptPy: 'wàngjì', placeholder: 'Viết câu có từ 忘记…',
            script: '他们忘记带作业了。', vn: 'Họ quên mang bài tập rồi.' }
        ] }
    ] }
  ]
};
