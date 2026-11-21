// Bai 10 — 你明天再把书还给我. Sach bai tap trang 085–093 = PDF trang 90–98.
// Dap an: HSK3--学练手册(习题答案).pdf trang 10 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 085–086) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2B 3C 4B 5C 6C 7A 8B 9B 10B).
const IMG = '/images/hsk3v3-bai-10-wb/';
const B_GHEP = [
  { key: 'A', text: '我想在出国前提高我的水平。' },
  { key: 'B', text: '好主意。在数学上我帮你，历史上你多帮帮我。', py: 'Hǎo zhǔyi. Zài shùxué shang wǒ bāng nǐ, lìshǐ shang nǐ duō bāngbang wǒ.' },
  { key: 'C', text: '你把它写在本子上，每天写几遍就记住了。', py: 'Nǐ bǎ tā xiě zài běnzi shang, měitiān xiě jǐ biàn jiù jìzhù le.' },
  { key: 'D', text: '他现在就在办公室，咱们一起去吧。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '对。我读三年级，她读二年级。' }
];
const B_TU = [
  { key: 'A', text: '差' }, { key: 'B', text: '要求' }, { key: 'C', text: '当然' },
  { key: 'D', text: '遇到' }, { key: 'E', text: '鞋' }, { key: 'F', text: '清楚' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '你明天再把书还给我',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 炼 và 练', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['炼 liàn<br>火 + 东', '锻炼 duànliàn — rèn luyện (thân thể)', '他每天早上都锻炼身体。<br>Sáng nào anh ấy cũng tập thể dục.'],
        ['练 liàn<br>纟 + 东', '练习 liànxí — luyện tập; bài luyện tập', '这本书上还有几个练习。<br>Trong cuốn sách này còn mấy bài luyện tập.']
      ],
        note: 'Hai chữ cùng đọc liàn, phần bên phải đều là 东: 炼 có bộ 火 (lửa → tôi luyện, 锻炼), 练 có bộ 纟 (sợi tơ → luyện tập, 练习). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 要', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['要求', 'yāoqiú — yêu cầu', '老师要求我们明天把作业做完。<br>Cô giáo yêu cầu chúng tôi ngày mai làm xong bài tập.'],
        ['需要', 'xūyào — cần', '我们需要把这些句子写在本子上。<br>Chúng ta cần viết những câu này vào vở.']
      ],
        note: '要 đọc <b>yāo</b> trong 要求; đọc <b>yào</b> trong 需要 và khi là "muốn, cần, sắp" (我要去, 要考试了).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Ở trường, trong lớp<br>学习场景', '课本 kèběn (sách giáo khoa) · 课文 kèwén (bài khóa) · 笔记 bǐjì (ghi chép, vở ghi) · 铅笔 qiānbǐ (bút chì) · 纸 zhǐ (giấy) · 页 yè (trang) · 作业 zuòyè (bài tập về nhà) · ' +
          '句子 jùzi (câu) · 黑板 hēibǎn (bảng đen) · 办公室 bàngōngshì (văn phòng) · 年级 niánjí (khối lớp)'],
        ['Môn học<br>课程学科', '历史 lìshǐ (lịch sử) · 数学 shùxué (toán) · 外语 wàiyǔ (ngoại ngữ) · 中文 Zhōngwén (tiếng Trung) · 体育 tǐyù (thể dục) · 音乐 yīnyuè (âm nhạc)'],
        ['Việc học<br>学习行为', '认真 rènzhēn (nghiêm túc, chăm chỉ) · 努力 nǔlì (cố gắng) · 差 chà (kém) · 清楚 qīngchu (rõ ràng) · 难 nán (khó) · 明白 míngbai (hiểu) · 考试 kǎoshì (thi) · ' +
          '成绩 chéngjì (thành tích, điểm số) · 提高 tígāo (nâng cao) · 要求 yāoqiú (yêu cầu) · 复习 fùxí (ôn tập) · 讲 jiǎng (giảng) · 读 dú (đọc) · 遍 biàn (lượt, lần)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['课本 kèběn<br>sách giáo khoa', '历史课本 — sách giáo khoa lịch sử<br>请同学们打开课本，看第15页。<br>Mời các em mở sách, xem trang 15.', 'A：你的历史课本在哪儿？<br>B：我把它放在书包里了。<br>A: Sách lịch sử của bạn đâu? — B: Tôi để nó trong cặp rồi.'],
        ['课文 kèwén<br>bài khóa', '读课文 — đọc bài khóa<br>老师让我们读一遍课文。<br>Thầy bảo chúng tôi đọc bài khóa một lượt.', 'A：写作业以前，你先复习一遍课文。<br>B：我已经复习完了。<br>A: Trước khi làm bài tập, con ôn lại bài khóa một lượt đã. — B: Con ôn xong rồi.'],
        ['铅笔 qiānbǐ<br>bút chì', '黑色铅笔 — bút chì đen<br>考试结束我就把铅笔还给你。<br>Thi xong tôi sẽ trả bút chì cho bạn ngay.', 'A：我的铅笔找不到了，你还有铅笔吗？<br>B：有，你用我的吧。<br>A: Tôi không tìm thấy bút chì, bạn còn bút chì không? — B: Có, bạn dùng của tôi đi.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['记笔记<br>jì bǐjì — ghi chép', '写作业<br>xiě zuòyè — làm bài tập'],
        ['看黑板<br>kàn hēibǎn — nhìn lên bảng', '讲课<br>jiǎngkè — giảng bài'],
        ['一页纸 / 第十页<br>yí yè zhǐ / dì-shí yè — một tờ giấy / trang 10', '一年级<br>yī niánjí — lớp một'],
        ['一个句子<br>yí gè jùzi — một câu', '读两遍<br>dú liǎng biàn — đọc hai lượt'],
        ['努力学习<br>nǔlì xuéxí — chăm chỉ học tập', '认真复习<br>rènzhēn fùxí — ôn tập nghiêm túc'],
        ['提高成绩<br>tígāo chéngjì — nâng cao thành tích', '考得很差<br>kǎo de hěn chà — thi rất kém']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 上小学二年级; (2) 写在历史课本上; (3) 带几张纸 (张 + 纸);
      // (4) 学习成绩提高了; (5) 再读一遍 (dong luong tu sau 读). Moi tu dung mot lan, khong tu nao hop cho hai cho.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '我女儿七岁，今年上小学二', after: '。', answer: '年级' },
          { before: '你把名字写在历史', after: '上吧。', answer: '课本' },
          { before: '明天考试，一定要带护照和笔，还可以带几张', after: '。', answer: '纸' },
          { before: '这几个月他的学习', after: '提高了很多。', answer: '成绩' },
          { before: '这本书太好看了，我想再读一', after: '。', answer: '遍' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '我有几个问题想问李老师，不知道什么时间合适。', answer: 'D',
            vn: 'Tôi có mấy câu hỏi muốn hỏi thầy Lý, không biết lúc nào thì tiện. — D: Bây giờ thầy đang ở văn phòng, chúng mình cùng đi nhé.' },
          { n: 12, letters: L5, prompt: '你为什么每天用这么多时间学外语？', answer: 'A',
            vn: 'Sao ngày nào bạn cũng dành nhiều thời gian học ngoại ngữ thế? — A: Tôi muốn nâng cao trình độ trước khi ra nước ngoài.' },
          { n: 13, letters: L5, prompt: '你和妹妹在一个学校读书吗？', answer: 'F',
            vn: 'Bạn và em gái học cùng một trường à? — F: Đúng. Tôi học lớp ba, em ấy học lớp hai.' },
          { n: 14, letters: L5, prompt: '我总是忘了这个字怎么写。', promptPy: 'Wǒ zǒngshì wàngle zhège zì zěnme xiě.', answer: 'C',
            vn: 'Tôi cứ quên mất chữ này viết thế nào. — C: Bạn viết nó vào vở, mỗi ngày viết vài lượt là nhớ thôi.' },
          { n: 15, letters: L5, prompt: '马上就要考试了，咱们一起复习吧。', answer: 'B',
            vn: 'Sắp thi rồi, chúng mình cùng ôn bài nhé. — B: Ý hay đấy. Môn toán tớ giúp cậu, môn lịch sử cậu giúp tớ nhé.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '我昨天在学校门口（　）了以前的体育老师。', answer: 'D',
            vn: 'Hôm qua ở cổng trường tôi gặp thầy dạy thể dục cũ. — 遇到: tình cờ gặp.' },
          { n: 17, letters: L5, prompt: '他这次考试考得很（　），因为没认真复习。', answer: 'A',
            vn: 'Lần này anh ấy thi rất kém vì không ôn tập nghiêm túc. — 考得很差: thi rất kém.' },
          { n: 18, letters: L5, prompt: '我在教室外面，听不（　）老师说什么。', promptPy: 'Wǒ zài jiàoshì wàimian, tīng bu (　) lǎoshī shuō shénme.', answer: 'F',
            vn: 'Tôi ở ngoài lớp nên nghe không rõ thầy nói gì. — 听不清楚: nghe không rõ.' },
          { n: 19, letters: L5, prompt: 'A：你能帮我把这本书还给李老师吗？\nB：（　）可以。', answer: 'C',
            promptPy: 'A: Nǐ néng bāng wǒ bǎ zhè běn shū huán gěi Lǐ lǎoshī ma?\nB: (　) kěyǐ.',
            vn: 'A: Bạn có thể giúp tôi trả cuốn sách này cho thầy Lý không?\nB: Tất nhiên là được. — 当然: đương nhiên.' },
          { n: 20, letters: L5, prompt: 'A：老师（　）我们明天把错题本拿给他。\nB：我的错题太多了，今天晚上一定写不完。', answer: 'B',
            promptPy: 'A: Lǎoshī (　) wǒmen míngtiān bǎ cuòtíběn ná gěi tā.\nB: Wǒ de cuòtí tài duō le, jīntiān wǎnshang yídìng xiě bu wán.',
            vn: 'A: Thầy yêu cầu ngày mai chúng ta nộp vở chữa lỗi sai cho thầy.\nB: Bài sai của tớ nhiều quá, tối nay chắc chắn viết không xong. — 要求 + người + làm gì: yêu cầu ai làm gì.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '张老师教我们外语。他上课讲得很清楚，还常在休息的时候让我们听音乐，同学们都很喜欢他。\n★关于张老师，可以知道什么？',
            promptPy: 'Zhāng lǎoshī jiāo wǒmen wàiyǔ. Tā shàngkè jiǎng de hěn qīngchu, hái cháng zài xiūxi de shíhou ràng wǒmen tīng yīnyuè, tóngxuémen dōu hěn xǐhuan tā.\nGuānyú Zhāng lǎoshī, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '他教音乐', py: 'tā jiāo yīnyuè' }, { key: 'B', text: '他上课听音乐' }, { key: 'C', text: '学生都很喜欢他' }], answer: 'C',
            vn: 'Thầy Trương dạy chúng tôi ngoại ngữ. Thầy giảng bài rất rõ ràng, giờ nghỉ còn hay cho chúng tôi nghe nhạc, các bạn đều rất thích thầy. — "同学们都很喜欢他" → C. Thầy dạy ngoại ngữ chứ không dạy nhạc (A sai); nghe nhạc vào giờ nghỉ, không phải trong giờ học (B sai).' },
          { n: 22, prompt: '今天有历史课，但是我忘了带历史课本。上课时，我和同学一起看书、做练习，有点儿不方便。下次我一定会记得带。\n★他今天怎么了？',
            promptPy: 'Jīntiān yǒu lìshǐ kè, dànshì wǒ wàngle dài lìshǐ kèběn. Shàngkè shí, wǒ hé tóngxué yìqǐ kàn shū, zuò liànxí, yǒudiǎnr bù fāngbiàn. Xià cì wǒ yídìng huì jìde dài.\nTā jīntiān zěnme le?',
            options: [{ key: 'A', text: '没带课本' }, { key: 'B', text: '没做练习' }, { key: 'C', text: '没上历史课' }], answer: 'A',
            vn: 'Hôm nay có giờ lịch sử nhưng tôi quên mang sách giáo khoa. Trong giờ học, tôi xem chung sách và làm bài luyện tập với bạn, hơi bất tiện. Lần sau tôi nhất định sẽ nhớ mang. — Quên mang sách → A. Vẫn làm bài và vẫn học giờ lịch sử (B, C sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '昨天作业里的几个错题我不太明白，想问问李老师。进办公室的时候，李老师正在给别的同学讲题，我站在旁边听了一会儿，发现我想问的句子跟这几个同学一样。李老师讲得很清楚，听完我们都明白了。我把作业本放进书包里，高高兴兴地走出了办公室。\n★他为什么去找李老师？',
            promptPy: 'Zuótiān zuòyè li de jǐ gè cuòtí wǒ bú tài míngbai, xiǎng wènwen Lǐ lǎoshī. Jìn bàngōngshì de shíhou, Lǐ lǎoshī zhèngzài gěi biéde tóngxué jiǎng tí, wǒ zhàn zài pángbiān tīngle yíhuìr, fāxiàn wǒ xiǎng wèn de jùzi gēn zhè jǐ gè tóngxué yíyàng. Lǐ lǎoshī jiǎng de hěn qīngchu, tīngwán wǒmen dōu míngbai le. Wǒ bǎ zuòyèběn fàngjìn shūbāo li, gāogāoxìngxìng de zǒuchūle bàngōngshì.\nTā wèishénme qù zhǎo Lǐ lǎoshī?',
            options: [{ key: 'A', text: '他想找作业本' }, { key: 'B', text: '他有不明白的题' }, { key: 'C', text: '李老师要给他讲题', py: 'Lǐ lǎoshī yào gěi tā jiǎng tí' }], answer: 'B',
            vn: 'Mấy câu làm sai trong bài tập hôm qua tôi không hiểu lắm, muốn hỏi thầy Lý. Lúc vào văn phòng, thầy Lý đang giảng bài cho mấy bạn khác, tôi đứng bên cạnh nghe một lúc thì thấy câu tôi muốn hỏi cũng giống của mấy bạn ấy. Thầy giảng rất rõ, nghe xong chúng tôi đều hiểu. Tôi cất vở bài tập vào cặp, vui vẻ ra khỏi văn phòng. — Có câu không hiểu → B.' },
          { n: 24, prompt: '★关于李老师，可以知道什么？',
            options: [{ key: 'A', text: '在上课' }, { key: 'B', text: '在教室里等他', py: 'zài jiàoshì li děng tā' }, { key: 'C', text: '在给学生讲题' }], answer: 'C',
            vn: '"李老师正在给别的同学讲题" — thầy đang giảng bài cho học sinh khác → C. Thầy ở văn phòng, không phải đang lên lớp hay đợi trong lớp (A, B sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '她一般（ bǎ ）这些东西放在桌子上。', promptPy: 'Tā yìbān bǎ zhèxiē dōngxi fàng zài zhuōzi shang.', answer: '把',
            vn: 'Cô ấy thường để những đồ này trên bàn. — Câu chữ 把: 把 + vật + 放在 + nơi chốn.' },
          { n: 26, input: true, maxlength: 2, prompt: '老师要求我们这个星期就开始（ fù ）习。', promptPy: 'Lǎoshī yāoqiú wǒmen zhège xīngqī jiù kāishǐ fùxí.', answer: '复',
            vn: 'Thầy yêu cầu chúng tôi ngay tuần này bắt đầu ôn tập. — 复习 fùxí: ôn tập.' },
          { n: 27, input: true, maxlength: 2, prompt: '这（ jù ）话我没听懂，请你再说一遍。', promptPy: 'Zhè jù huà wǒ méi tīngdǒng, qǐng nǐ zài shuō yí biàn.', answer: '句',
            vn: 'Câu này tôi nghe chưa hiểu, bạn nói lại một lần nữa nhé. — 句 jù: lượng từ của câu nói (一句话).' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '努力',
            img: IMG + 'q28.webp', prompt: '努力', promptPy: 'nǔlì', placeholder: 'Viết câu có từ 努力…',
            script: '她学习得很努力。', vn: 'Cô bé học rất chăm chỉ.' },
          { n: 29, free: true, must: '后年', img: IMG + 'q29.webp', prompt: '后年', promptPy: 'hòunián', placeholder: 'Viết câu có từ 后年…',
            script: '后年他们去美国留学。', vn: 'Năm sau nữa họ sẽ sang Mỹ du học.' },
          { n: 30, free: true, must: '对话', img: IMG + 'q30.webp', prompt: '对话', promptPy: 'duìhuà', placeholder: 'Viết câu có từ 对话…',
            script: '她们正在对话。', vn: 'Hai cô gái đang trò chuyện với nhau.' }
        ] }
    ] }
  ]
};
