// Bai 11 — 看来我没办法解决这个问题. Sach bai tap trang 094–102 = PDF trang 99–107.
// Dap an: HSK3--学练手册(习题答案).pdf trang 11 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 094–095) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2B 3A 4A 5C 6A 7A 8B 9A 10A).
const IMG = '/images/hsk3v3-bai-11-wb/';
const B_GHEP = [
  { key: 'A', text: '对我来说，开心最重要。' },
  { key: 'B', text: '我想我会把他们接到我这儿。' },
  { key: 'C', text: '啊，不好意思，那应该在哪儿开会？', py: 'À, bù hǎoyìsi, nà yīnggāi zài nǎr kāihuì?' },
  { key: 'D', text: '是的，生活很方便，环境也不错，我很满意。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '901室或902室都行，现在里面都有我的同事。', py: 'Jiǔ líng yāo shì huò jiǔ líng èr shì dōu xíng, xiànzài lǐmiàn dōu yǒu wǒ de tóngshì.' }
];
const B_TU = [
  { key: 'A', text: '城市' }, { key: 'B', text: '邮箱' }, { key: 'C', text: '机会' },
  { key: 'D', text: '办法' }, { key: 'E', text: '鞋' }, { key: 'F', text: '后天' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '看来我没办法解决这个问题',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 轻 và 经', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['轻 qīng<br>bộ 车', '年轻 niánqīng — trẻ', '我妈妈看起来非常年轻。<br>Mẹ tôi trông rất trẻ.'],
        ['经 jīng<br>bộ 纟', '经常 jīngcháng — thường xuyên<br>经理 jīnglǐ — giám đốc', '你最近怎么经常请假？<br>Dạo này sao bạn hay xin nghỉ thế?']
      ],
        note: 'Phần bên phải của hai chữ giống nhau; khác ở bên trái: 轻 có bộ 车 (xe), 经 có bộ 纟 (sợi tơ). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 地', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['地点', 'dìdiǎn — địa điểm', '房间里一个人都没有，看来我记错地点了。<br>Trong phòng không có ai cả, xem ra tôi nhớ nhầm địa điểm rồi.'],
        ['高兴地说', 'gāoxìng de shuō — vui vẻ nói', '她高兴地说：“我把工作做完了，可以下班了！”<br>Cô ấy vui vẻ nói: "Tôi làm xong việc rồi, được tan làm rồi!"']
      ],
        note: '地 đọc <b>dì</b> khi nghĩa là đất, nơi chốn (地点, 地方, 地铁); đọc <b>de</b> khi là trợ từ đứng sau tính từ, trước động từ (高兴地说, 认真地学习).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Công việc văn phòng<br>日常办公', '公司 gōngsī (công ty) · 工作 gōngzuò (công việc; làm việc) · 会议 huìyì (cuộc họp) · 开会 kāihuì (họp) · 会 huì (cuộc họp) · 办公室 bàngōngshì (văn phòng) · 室 shì (phòng)<br>' +
          '笔记本 bǐjìběn (máy tính xách tay; sổ ghi chép) · 电脑 diànnǎo (máy tính) · 声音 shēngyīn (âm thanh, giọng) · 邮箱 yóuxiāng (hộp thư điện tử) · 邮件 yóujiàn (thư, email) · ' +
          '本子 běnzi (quyển vở) · 纸 zhǐ (giấy) · 笔 bǐ (bút) · 铅笔 qiānbǐ (bút chì) · 包 bāo (túi, cặp)<br>' +
          '解决 jiějué (giải quyết) · 请假 qǐngjià (xin nghỉ) · 休假 xiūjià (nghỉ phép) · 上班 shàngbān (đi làm) · 下班 xiàbān (tan làm)'],
        ['Nghề nghiệp<br>职业选择', '经理 jīnglǐ (giám đốc) · 医生 yīshēng (bác sĩ) · 老师 lǎoshī (giáo viên) · 服务员 fúwùyuán (nhân viên phục vụ) · 司机 sījī (tài xế) · 运动员 yùndòngyuán (vận động viên) · 同事 tóngshì (đồng nghiệp)<br>' +
          '城市 chéngshì (thành phố) · 市 shì (thành phố) · 机会 jīhuì (cơ hội)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['会 huì<br>cuộc họp', '重要的会 — cuộc họp quan trọng<br>明天的会很重要，谁都不能请假。<br>Cuộc họp ngày mai rất quan trọng, không ai được xin nghỉ.', 'A：经理，明天上午您有一个会。<br>B：好的，会议几点开始？<br>A: Thưa giám đốc, sáng mai ông có một cuộc họp. — B: Được, cuộc họp mấy giờ bắt đầu?'],
        ['市 shì<br>thành phố', '北京市 — thành phố Bắc Kinh<br>您去前面的车站看看吧，那儿好像有几辆车是往市里开的。<br>Ông ra bến xe phía trước xem nhé, hình như ở đó có mấy chiếc xe chạy vào thành phố.', 'A：我在您办公室外面呢，房间里没人。<br>B：不好意思，我今天不在市里，明天回去。<br>A: Tôi đang ở ngoài văn phòng của ông, trong phòng không có ai. — B: Xin lỗi, hôm nay tôi không ở trong thành phố, mai tôi mới về.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['会议室<br>huìyìshì — phòng họp', '笔记本电脑<br>bǐjìběn diànnǎo — máy tính xách tay'],
        ['写一封邮件<br>xiě yì fēng yóujiàn — viết một email', '发邮件<br>fā yóujiàn — gửi email'],
        ['解决问题<br>jiějué wèntí — giải quyết vấn đề', '请病假<br>qǐng bìngjià — xin nghỉ ốm'],
        ['请事假<br>qǐng shìjià — xin nghỉ việc riêng', '休两天假<br>xiū liǎng tiān jià — nghỉ phép hai ngày'],
        ['上下班<br>shàng-xiàbān — đi làm và tan làm', '公司同事<br>gōngsī tóngshì — đồng nghiệp trong công ty'],
        ['一名经理<br>yì míng jīnglǐ — một giám đốc', '一个机会<br>yí gè jīhuì — một cơ hội']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 听不到声音; (2) 不在办公室里 (去洗手间 -> van o cong ty);
      // (3) 没办法解决; (5) 十点开会 (đến phòng họp). (4) 下个星期休假，打算去旅游 — 请假 cung hop nghia
      // nhung 休假 (nghi phep di choi) sat hon; engine blankdrill chi cham mot dap an nen ghi ro trong hint.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu. Câu 4 điền 请假 cũng hợp nghĩa, nhưng đáp án sách chọn từ sát nghĩa "nghỉ phép đi chơi" hơn.', maxlength: 4,
        items: [
          { before: '你说什么？我怎么听不到', after: '了。', answer: '声音' },
          { before: '经理不在', after: '里，他去洗手间了。', answer: '办公室' },
          { before: '这个问题太难了，公司里谁都没办法', after: '。', answer: '解决' },
          { before: '我下个星期', after: '，打算去北京旅游。', answer: '休假', accept: ['请假'] },
          { before: '请大家到第一会议室，我们十点', after: '。', answer: '开会' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '小王，你把会议地点写错了。', answer: 'C',
            vn: 'Tiểu Vương, cậu ghi nhầm địa điểm họp rồi. — C: À, xin lỗi, vậy phải họp ở đâu ạ?' },
          { n: 12, letters: L5, prompt: '看来你很喜欢这个小区。', answer: 'D',
            vn: 'Xem ra bạn rất thích khu nhà này. — D: Đúng vậy, sống rất tiện, môi trường cũng tốt, tôi rất hài lòng.' },
          { n: 13, letters: L5, prompt: '请问，我把笔记本送到哪儿？', answer: 'F',
            vn: 'Cho hỏi, tôi mang máy tính xách tay đến đâu ạ? — F: Phòng 901 hoặc 902 đều được, giờ trong đó đều có đồng nghiệp của tôi.' },
          { n: 14, letters: L5, prompt: '你找工作的时候，最关心什么？', answer: 'A',
            vn: 'Khi tìm việc, bạn quan tâm nhất điều gì? — A: Với tôi, vui vẻ là quan trọng nhất.' },
          { n: 15, letters: L5, prompt: '你会为家人离开这里，回到他们住的城市吗？', answer: 'B',
            vn: 'Bạn có vì gia đình mà rời khỏi đây, về thành phố họ đang sống không? — B: Tôi nghĩ tôi sẽ đón họ đến chỗ tôi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '我今天得到了一个去上海工作的（　），特别开心。', answer: 'C',
            promptPy: 'Wǒ jīntiān dédàole yí gè qù Shànghǎi gōngzuò de (　), tèbié kāixīn.',
            vn: 'Hôm nay tôi có được một cơ hội đi Thượng Hải làm việc, vui lắm. — 得到机会: có được cơ hội.' },
          { n: 17, letters: L5, prompt: '我（　）就休假了，这两天做不完这个工作，您还是让别人做吧。', answer: 'F',
            vn: 'Ngày kia tôi nghỉ phép rồi, hai hôm nay làm không xong việc này, anh vẫn nên để người khác làm thì hơn. — 后天: ngày kia.' },
          { n: 18, letters: L5, prompt: '他们都收到公司发的邮件了，我的（　）里怎么没有？', promptPy: 'Tāmen dōu shōudào gōngsī fā de yóujiàn le, wǒ de (　) li zěnme méiyǒu?', answer: 'B',
            vn: 'Mọi người đều nhận được email công ty gửi rồi, sao hộp thư của tôi lại không có? — 邮箱: hộp thư điện tử.' },
          { n: 19, letters: L5, prompt: 'A：你去过哪些（　）？\nB：我才来中国三个星期，除了北京，哪儿都没去过。', answer: 'A',
            promptPy: 'A: Nǐ qùguo nǎxiē (　)?\nB: Wǒ cái lái Zhōngguó sān gè xīngqī, chúle Běijīng, nǎr dōu méi qùguo.',
            vn: 'A: Bạn đã đến những thành phố nào rồi?\nB: Tôi mới sang Trung Quốc ba tuần, ngoài Bắc Kinh ra chưa đi đâu cả. — 哪些城市: những thành phố nào.' },
          { n: 20, letters: L5, prompt: 'A：会议室的电脑坏了，你有什么（　）吗？\nB：我去拿办公室的笔记本电脑吧，看看能不能接上。', answer: 'D',
            promptPy: 'A: Huìyìshì de diànnǎo huài le, nǐ yǒu shénme (　) ma?\nB: Wǒ qù ná bàngōngshì de bǐjìběn diànnǎo ba, kànkan néng bu néng jiēshang.',
            vn: 'A: Máy tính phòng họp hỏng rồi, bạn có cách gì không?\nB: Để tôi đi lấy máy tính xách tay ở văn phòng, xem có kết nối được không. — 有什么办法: có cách gì.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '我最愿意教小学生，因为孩子的世界很简单，跟他们在一起，我觉得自己年轻了很多。\n★他为什么喜欢教小孩子？',
            promptPy: 'Wǒ zuì yuànyì jiāo xiǎoxuéshēng, yīnwèi háizi de shìjiè hěn jiǎndān, gēn tāmen zài yìqǐ, wǒ juéde zìjǐ niánqīngle hěn duō.\nTā wèishénme xǐhuan jiāo xiǎoháizi?',
            options: [{ key: 'A', text: '他现在很年轻' }, { key: 'B', text: '教的东西很简单', py: 'jiāo de dōngxi hěn jiǎndān' }, { key: 'C', text: '孩子的世界很简单' }], answer: 'C',
            vn: 'Tôi thích dạy học sinh tiểu học nhất, vì thế giới của trẻ con rất đơn giản, ở bên các em tôi thấy mình trẻ ra nhiều. — "因为孩子的世界很简单" → C. Anh ấy "thấy mình trẻ ra" chứ không nói bây giờ còn trẻ (A sai); không nói gì về nội dung dạy (B sai).' },
          { n: 22, prompt: '今天会议上经理说的那两个办法，虽然同事们都觉得第一个好，但我觉得第二个更好，因为它能更快地解决问题。\n★关于第二个办法，可以知道什么？',
            promptPy: 'Jīntiān huìyì shang jīnglǐ shuō de nà liǎng gè bànfǎ, suīrán tóngshìmen dōu juéde dì-yī gè hǎo, dàn wǒ juéde dì-èr gè gèng hǎo, yīnwèi tā néng gèng kuài de jiějué wèntí.\nGuānyú dì-èr gè bànfǎ, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '同事们觉得好' }, { key: 'B', text: '不能解决问题' }, { key: 'C', text: '能更快解决问题' }], answer: 'C',
            vn: 'Hai cách giám đốc nói trong cuộc họp hôm nay, tuy các đồng nghiệp đều thấy cách thứ nhất hay, nhưng tôi thấy cách thứ hai tốt hơn, vì nó giải quyết vấn đề nhanh hơn. — C. Đồng nghiệp thích cách thứ nhất (A sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '请大家安静一下，听我说。我们明天早上七点在宾馆门口见，一起坐汽车去高铁站。大家今晚就把行李准备好，明早离开前一定要再认真检查一下，别忘了自己的东西。我会为大家准备好早饭，明天六点带过来。大家可以在宾馆里吃，或者到了高铁站再吃，但是不能在汽车上吃。\n★大家应该什么时候把行李准备好？',
            promptPy: 'Qǐng dàjiā ānjìng yíxià, tīng wǒ shuō. Wǒmen míngtiān zǎoshang qī diǎn zài bīnguǎn ménkǒu jiàn, yìqǐ zuò qìchē qù gāotiězhàn. Dàjiā jīnwǎn jiù bǎ xíngli zhǔnbèi hǎo, míngzǎo líkāi qián yídìng yào zài rènzhēn jiǎnchá yíxià, bié wàngle zìjǐ de dōngxi. Wǒ huì wèi dàjiā zhǔnbèi hǎo zǎofàn, míngtiān liù diǎn dài guòlai. Dàjiā kěyǐ zài bīnguǎn li chī, huòzhě dàole gāotiězhàn zài chī, dànshì bù néng zài qìchē shang chī.\nDàjiā yīnggāi shénme shíhou bǎ xíngli zhǔnbèi hǎo?',
            options: [{ key: 'A', text: '今天晚上' }, { key: 'B', text: '明早6:00', py: 'míngzǎo 6:00' }, { key: 'C', text: '明早7:00', py: 'míngzǎo 7:00' }], answer: 'A',
            vn: 'Mọi người trật tự một chút, nghe tôi nói. Bảy giờ sáng mai chúng ta gặp nhau ở cổng khách sạn, cùng đi ô tô ra ga tàu cao tốc. Tối nay mọi người chuẩn bị xong hành lý luôn, sáng mai trước khi đi nhất định phải kiểm tra kỹ lại một lần, đừng quên đồ của mình. Tôi sẽ chuẩn bị bữa sáng cho mọi người, sáu giờ mai mang đến. Mọi người có thể ăn ở khách sạn, hoặc đến ga tàu cao tốc rồi ăn, nhưng không được ăn trên ô tô. — "大家今晚就把行李准备好" → A.' },
          { n: 24, prompt: '★大家不能在哪儿吃早饭？',
            options: [{ key: 'A', text: '宾馆里', py: 'bīnguǎn li' }, { key: 'B', text: '汽车上', py: 'qìchē shang' }, { key: 'C', text: '高铁站里', py: 'gāotiězhàn li' }], answer: 'B',
            vn: '"但是不能在汽车上吃" — không được ăn trên ô tô → B. Ăn ở khách sạn hoặc ga tàu đều được (A, C sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '你说话（ shēng ）音大一点儿好吗？我听不清楚。', promptPy: 'Nǐ shuōhuà shēngyīn dà yìdiǎnr hǎo ma? Wǒ tīng bu qīngchu.', answer: '声',
            vn: 'Bạn nói to hơn một chút được không? Tôi nghe không rõ. — 声音 shēngyīn: âm thanh, giọng nói.' },
          { n: 26, input: true, maxlength: 2, prompt: '不好意思，我不太舒服，想请（ jià ）回去休息一下。', promptPy: 'Bù hǎoyìsi, wǒ bú tài shūfu, xiǎng qǐngjià huíqu xiūxi yíxià.', answer: '假',
            vn: 'Xin lỗi, tôi không được khỏe lắm, muốn xin nghỉ về nhà nghỉ ngơi một chút. — 请假 qǐngjià: xin nghỉ.' },
          { n: 27, input: true, maxlength: 2, prompt: '张经理，我（ pà ）您不在市里，给您打个电话，问一下您在哪儿。', promptPy: 'Zhāng jīnglǐ, wǒ pà nín bú zài shì li, gěi nín dǎ ge diànhuà, wèn yíxià nín zài nǎr.', answer: '怕',
            vn: 'Giám đốc Trương, tôi sợ ông không ở trong thành phố nên gọi điện hỏi xem ông đang ở đâu. — 怕 pà: sợ, e là.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '城市',
            img: IMG + 'q28.webp', prompt: '城市', promptPy: 'chéngshì', placeholder: 'Viết câu có từ 城市…',
            script: '这个城市的生活环境挺好的。', vn: 'Môi trường sống của thành phố này khá tốt.' },
          { n: 29, free: true, must: '声音', img: IMG + 'q29.webp', prompt: '声音', promptPy: 'shēngyīn', placeholder: 'Viết câu có từ 声音…',
            script: '你手机的声音太小了。', vn: 'Âm lượng điện thoại của bạn nhỏ quá.' },
          { n: 30, free: true, must: '笔记本', img: IMG + 'q30.webp', prompt: '笔记本（电脑）', promptPy: 'bǐjìběn (diànnǎo)', placeholder: 'Viết câu có từ 笔记本…',
            script: '这台笔记本（电脑）是我新买的。', vn: 'Chiếc máy tính xách tay này là tôi mới mua.' }
        ] }
    ] }
  ]
};
