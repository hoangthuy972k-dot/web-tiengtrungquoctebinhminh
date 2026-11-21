// Bai 8 — 今天我出院了. Sach bai tap trang 066–074 = PDF trang 71–79.
// Dap an: HSK3--学练手册(习题答案).pdf trang 8 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 066–067) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2C 3B 4B 5A 6C 7C 8C 9B 10C).
const IMG = '/images/hsk3v3-bai-8-wb/';
const B_GHEP = [
  { key: 'A', text: '我知道，咱们两点半以前走就行。' },
  { key: 'B', text: '好的，我少吃一点儿。' },
  { key: 'C', text: '她们都喜欢这么说，因为关心我们。' },
  { key: 'D', text: '我记住了，我一定不会吃错的。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '有个好的习惯，身体一定会越来越好的。' }
];
const B_TU = [
  { key: 'A', text: '其他' }, { key: 'B', text: '常' }, { key: 'C', text: '注意' },
  { key: 'D', text: '心里' }, { key: 'E', text: '鞋' }, { key: 'F', text: '担心' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '今天我出院了',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 休 và 体', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['休 xiū<br>亻 + 木', '休息 xiūxi — nghỉ ngơi', '你出院以后休息一个星期。<br>Ra viện rồi bạn nghỉ ngơi một tuần nhé.'],
        ['体 tǐ<br>亻 + 本', '体育馆 tǐyùguǎn — nhà thi đấu<br>身体 shēntǐ — sức khỏe, cơ thể', '弟弟去体育馆看比赛了。<br>Em trai đi nhà thi đấu xem thi đấu rồi.']
      ],
        note: 'Bên phải của 休 là 木 (cây: người tựa gốc cây → nghỉ); bên phải của 体 là 本 — 木 thêm một nét ngang ngắn ở dưới. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 教', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['教室', 'jiàoshì — lớp học, phòng học', '他们到教室已经半个多小时了。<br>Họ đến lớp đã hơn nửa tiếng rồi.'],
        ['教你', 'jiāo nǐ — dạy bạn', '我每天下班后教你打羽毛球吧。<br>Mỗi ngày tan làm tôi dạy bạn đánh cầu lông nhé.']
      ],
        note: '教 đọc <b>jiāo</b> khi là động từ "dạy" (教你, 教汉语); đọc <b>jiào</b> trong từ ghép như 教室, 教育.' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Cơ thể & sức khỏe<br>身体与健康', '腿 tuǐ (chân) · 耳朵 ěrduo (tai) · 牙 yá (răng) · 牙刷 yáshuā (bàn chải đánh răng) · 洗澡 xǐzǎo (tắm)<br>' +
          '健康 jiànkāng (khỏe mạnh) · 胖 pàng (béo) · 瘦 shòu (gầy) · 感冒 gǎnmào (cảm) · 发烧 fāshāo (sốt) · 疼 téng (đau)'],
        ['Khám bệnh & tâm lý<br>就医与心理', '生病 shēngbìng (ốm) · 看病 kànbìng (khám bệnh) · 检查 jiǎnchá (kiểm tra) · 住院 zhùyuàn (nằm viện) · 出院 chūyuàn (ra viện) · 开（药）kāi (yào) (kê đơn thuốc) · 药 yào (thuốc) · 病人 bìngrén (bệnh nhân)<br>' +
          '心里 xīnli (trong lòng) · 担心 dānxīn (lo lắng) · 开心 kāixīn (vui) · 关心 guānxīn (quan tâm) · 习惯 xíguàn (thói quen) · 注意 zhùyì (chú ý) · 方法 fāngfǎ (cách, phương pháp)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['洗澡 xǐzǎo<br>tắm', '洗一次澡 — tắm một lần<br>我经常听着音乐洗澡。<br>Tôi hay vừa nghe nhạc vừa tắm.', 'A：你的小狗真干净。<br>B：我上午给它洗了个澡。<br>A: Con chó nhỏ của bạn sạch thật. — B: Sáng nay tôi tắm cho nó rồi.'],
        ['牙 yá<br>răng', '刷牙 — đánh răng<br>我每天睡觉前都要刷牙。<br>Ngày nào trước khi ngủ tôi cũng đánh răng.', 'A：你怎么了？看起来不太舒服。<br>B：我牙疼了好几天了。<br>A: Bạn sao thế? Trông không được khỏe lắm. — B: Tôi đau răng mấy hôm nay rồi.'],
        ['牙刷 yáshuā<br>bàn chải đánh răng', '换牙刷 — thay bàn chải<br>我每三个月换一次牙刷。<br>Cứ ba tháng tôi thay bàn chải một lần.', 'A：这个牙刷好用吗？<br>B：挺好用的，大小合适。<br>A: Bàn chải này dùng tốt không? — B: Dùng khá tốt, cỡ vừa.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['注意身体健康<br>zhùyì shēntǐ jiànkāng — chú ý sức khỏe', '好习惯<br>hǎo xíguàn — thói quen tốt'],
        ['坏习惯<br>huài xíguàn — thói quen xấu', '胖了好几斤<br>pàngle hǎo jǐ jīn — béo lên mấy cân'],
        ['发高烧<br>fā gāoshāo — sốt cao', '发低烧<br>fā dīshāo — sốt nhẹ'],
        ['牙疼<br>yá téng — đau răng', '疼极了<br>téng jí le — đau vô cùng'],
        ['生病住院<br>shēngbìng zhùyuàn — ốm phải nằm viện', '开点儿药<br>kāi diǎnr yào — kê ít thuốc'],
        ['几种方法<br>jǐ zhǒng fāngfǎ — mấy cách', '开心一点儿<br>kāixīn yìdiǎnr — vui lên chút']
      ] },
      // TU GIAI (file dap an khong co phan nay). (2) 这几种药 (thuoc); (3) 检查 xong moi biet khi nao 出院;
      // (4) 真让我担心; (5) troi nong, sang nao cung 洗澡.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '我们都知道早睡早起是一个好', after: '。', answer: '习惯' },
          { before: '如果吃完这几种', after: '以后还不舒服，你就再来医院。', answer: '药' },
          { before: '医生给你检查完才能告诉你什么时候', after: '。', answer: '出院' },
          { before: '他什么运动都不喜欢，也不注意健康，真让我', after: '。', answer: '担心' },
          { before: '最近天气热，我每天上班以前都要', after: '。', answer: '洗澡' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你不能再吃冰激凌了，吃多了会不舒服。', answer: 'B',
            vn: 'Con không được ăn kem nữa, ăn nhiều sẽ khó chịu đấy. — B: Vâng, con ăn ít thôi.' },
          { n: 12, letters: L5, prompt: '明天下午三点要去医院做检查。', answer: 'A',
            vn: '3 giờ chiều mai phải đến bệnh viện kiểm tra. — A: Tôi biết, chúng ta đi trước 2 giờ rưỡi là được.' },
          { n: 13, letters: L5, prompt: '我差不多运动了半年，现在健康多了。', promptPy: 'Wǒ chàbuduō yùndòngle bàn nián, xiànzài jiànkāng duō le.', answer: 'F',
            vn: 'Tôi tập thể dục được gần nửa năm, giờ khỏe hơn nhiều rồi. — F: Có thói quen tốt thì sức khỏe nhất định sẽ ngày càng tốt.' },
          { n: 14, letters: L5, prompt: '这种药饭前吃，那种药饭后吃。', answer: 'D',
            vn: 'Thuốc này uống trước bữa ăn, thuốc kia uống sau bữa ăn. — D: Tôi nhớ rồi, nhất định tôi sẽ không uống nhầm.' },
          { n: 15, letters: L5, prompt: '我妈妈常说，多吃饭身体才能健康。', promptPy: 'Wǒ māma cháng shuō, duō chī fàn shēntǐ cái néng jiànkāng.', answer: 'C',
            vn: 'Mẹ tôi hay nói, ăn nhiều thì mới khỏe được. — C: Các mẹ đều thích nói vậy, vì quan tâm đến chúng ta.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '医生说吃药的时候要（　）时间和方法。', answer: 'C',
            vn: 'Bác sĩ nói khi uống thuốc phải chú ý thời gian và cách uống. — 注意: chú ý.' },
          { n: 17, letters: L5, prompt: '你别（　），我没事，睡一觉就好了。', answer: 'F',
            vn: 'Bạn đừng lo, tôi không sao, ngủ một giấc là khỏe thôi. — 别担心: đừng lo.' },
          { n: 18, letters: L5, prompt: '虽然她没说，但我知道她（　）一定很难过。', answer: 'D',
            vn: 'Tuy cô ấy không nói, nhưng tôi biết trong lòng cô ấy chắc chắn rất buồn. — 心里: trong lòng.' },
          { n: 19, letters: L5, prompt: 'A：我发现你（　）来体育馆跑步。\nB：对，我每天下课以后都来跑一个小时步。', answer: 'B',
            vn: 'A: Tôi thấy bạn hay đến nhà thi đấu chạy bộ.\nB: Đúng, ngày nào tan học tôi cũng đến chạy một tiếng. — 常: thường, hay.' },
          { n: 20, letters: L5, prompt: 'A：除了羽毛球以外，你还喜欢（　）运动吗？\nB：我什么运动都喜欢。', answer: 'A',
            vn: 'A: Ngoài cầu lông ra, bạn còn thích môn thể thao nào khác không?\nB: Môn nào tôi cũng thích. — 其他: khác.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '前几天妈妈发烧了，这几天她头疼，也没睡好。今天早上妈妈去医院了，医生给她开了药，让她多休息。\n★妈妈为什么去医院？',
            promptPy: 'Qián jǐ tiān māma fāshāo le, zhè jǐ tiān tā tóuténg, yě méi shuìhǎo. Jīntiān zǎoshang māma qù yīyuàn le, yīshēng gěi tā kāile yào, ràng tā duō xiūxi.\nMāma wèishénme qù yīyuàn?',
            options: [{ key: 'A', text: '一直不舒服' }, { key: 'B', text: '孩子生病了' }, { key: 'C', text: '今天发烧了' }], answer: 'A',
            vn: 'Mấy hôm trước mẹ bị sốt, mấy hôm nay mẹ đau đầu, ngủ cũng không ngon. Sáng nay mẹ đi bệnh viện, bác sĩ kê thuốc cho mẹ, dặn mẹ nghỉ ngơi nhiều. — Mấy ngày liền không khỏe → A. Mẹ sốt từ mấy hôm trước chứ không phải hôm nay (C sai).' },
          { n: 22, prompt: '张先生感冒以后没有去医院，他吃了两天药，今天觉得身体好多了。他准备明天去上班。\n★关于张先生，可以知道什么？',
            promptPy: 'Zhāng xiānsheng gǎnmào yǐhòu méiyǒu qù yīyuàn, tā chīle liǎng tiān yào, jīntiān juéde shēntǐ hǎo duō le. Tā zhǔnbèi míngtiān qù shàngbān.\nGuānyú Zhāng xiānsheng, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '感冒了' }, { key: 'B', text: '去医院了' }, { key: 'C', text: '明天不上班' }], answer: 'A',
            vn: 'Ông Trương bị cảm nhưng không đi bệnh viện, ông uống thuốc hai ngày, hôm nay thấy khỏe hơn nhiều rồi. Ông định mai đi làm. — A. Không đi viện (B sai), mai đi làm (C sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '我爸爸以前不太喜欢运动，喜欢吃肉、喝饮料，今年他突然胖了不少。检查身体的时候医生告诉他，如果再胖下去，就会生病。最近他开始每天早上跑步，晚上也不吃太多。他现在不但自己运动，而且还常告诉我们要注意健康。\n★爸爸为什么开始跑步？',
            promptPy: 'Wǒ bàba yǐqián bú tài xǐhuan yùndòng, xǐhuan chī ròu, hē yǐnliào, jīnnián tā tūrán pàngle bù shǎo. Jiǎnchá shēntǐ de shíhou yīshēng gàosu tā, rúguǒ zài pàng xiàqu, jiù huì shēngbìng. Zuìjìn tā kāishǐ měitiān zǎoshang pǎobù, wǎnshang yě bù chī tài duō. Tā xiànzài búdàn zìjǐ yùndòng, érqiě hái cháng gàosu wǒmen yào zhùyì jiànkāng.\nBàba wèishénme kāishǐ pǎobù?',
            options: [{ key: 'A', text: '他喜欢运动' }, { key: 'B', text: '他不想生病' }, { key: 'C', text: '家人让他跑步' }], answer: 'B',
            vn: 'Bố tôi trước đây không thích vận động lắm, thích ăn thịt, uống nước ngọt, năm nay bố bỗng béo lên khá nhiều. Lúc khám sức khỏe bác sĩ bảo bố nếu cứ béo thêm nữa thì sẽ sinh bệnh. Gần đây bố bắt đầu sáng nào cũng chạy bộ, buổi tối cũng không ăn nhiều. Bây giờ bố không những tự tập mà còn hay nhắc chúng tôi chú ý sức khỏe. — Bác sĩ nói béo nữa sẽ ốm → bố không muốn ốm → B. Trước đây bố không thích vận động (A sai).' },
          { n: 24, prompt: '★关于爸爸，可以知道什么？',
            options: [{ key: 'A', text: '生病了' }, { key: 'B', text: '不吃肉了' }, { key: 'C', text: '开始注意健康了' }], answer: 'C',
            vn: 'Bố bắt đầu chạy bộ, ăn ít, còn nhắc cả nhà chú ý sức khỏe → C. Bố chưa ốm (A sai); bài chỉ nói tối không ăn nhiều, không nói bỏ thịt (B sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '我一直很担（ xīn ）爷爷的身体。', promptPy: 'Wǒ yìzhí hěn dānxīn yéye de shēntǐ.', answer: '心',
            vn: 'Tôi luôn lo cho sức khỏe của ông nội. — 担心 dānxīn: lo lắng.' },
          { n: 26, input: true, maxlength: 2, prompt: '虽然问题有很多，但是方（ fǎ ）更多。', promptPy: 'Suīrán wèntí yǒu hěn duō, dànshì fāngfǎ gèng duō.', answer: '法',
            vn: 'Tuy vấn đề có nhiều, nhưng cách giải quyết còn nhiều hơn. — 方法 fāngfǎ: cách, phương pháp.' },
          { n: 27, input: true, maxlength: 2, prompt: '医生说我不能吃这种药，（ qí ）他的药都可以吃。', promptPy: 'Yīshēng shuō wǒ bù néng chī zhè zhǒng yào, qítā de yào dōu kěyǐ chī.', answer: '其',
            vn: 'Bác sĩ nói tôi không được uống loại thuốc này, các thuốc khác đều uống được. — 其他 qítā: khác.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '差不多',
            img: IMG + 'q28.webp', prompt: '差不多', promptPy: 'chàbuduō', placeholder: 'Viết câu có từ 差不多…',
            script: '他们的个子差不多。', vn: 'Hai bạn cao gần bằng nhau.' },
          { n: 29, free: true, must: '发烧', img: IMG + 'q29.webp', prompt: '发烧', promptPy: 'fāshāo', placeholder: 'Viết câu có từ 发烧…',
            script: '她今天发烧了。', vn: 'Hôm nay cô ấy bị sốt.' },
          { n: 30, free: true, must: '健康', img: IMG + 'q30.webp', prompt: '健康', promptPy: 'jiànkāng', placeholder: 'Viết câu có từ 健康…',
            script: '他们每天都跑步，所以身体很健康。', vn: 'Ngày nào họ cũng chạy bộ nên rất khỏe mạnh.' }
        ] }
    ] }
  ]
};
