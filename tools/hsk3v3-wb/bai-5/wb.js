// Bai 5 — 这样的照片才好看. Sach bai tap trang 038–046 = PDF trang 43–51.
// Dap an: HSK3--学练手册(习题答案).pdf trang 5 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 038–039) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2B 3A 4A 5B 6C 7A 8B 9A 10C).
const IMG = '/images/hsk3v3-bai-5-wb/';
const B_GHEP = [
  { key: 'A', text: '不好意思，我的没电了。' },
  { key: 'B', text: '我要去旅游，你呢？' },
  { key: 'C', text: '这里不好看，我们去那边吧。' },
  { key: 'D', text: '不好意思，我在听音乐，没听见。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '除了爬山以外，别的我都不喜欢。' }
];
const B_TU = [
  { key: 'A', text: '总是' }, { key: 'B', text: '兴趣' }, { key: 'C', text: '锻炼' },
  { key: 'D', text: '照相' }, { key: 'E', text: '鞋' }, { key: 'F', text: '难过' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '这样的照片才好看',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 晴 và 情', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['晴 qíng<br>日 + 青', '晴天 qíngtiān — trời nắng', '今天是一个大晴天。<br>Hôm nay là một ngày nắng đẹp.'],
        ['情 qíng<br>忄 + 青', '热情 rèqíng — nhiệt tình', '这个服务员很热情。<br>Nhân viên phục vụ này rất nhiệt tình.']
      ],
        note: 'Hai chữ cùng đọc qíng, chung phần 青 bên phải: 晴 có bộ 日 (mặt trời → trời nắng), 情 có bộ 忄 (trái tim → tình cảm). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 乐', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['快乐', 'kuàilè — vui vẻ', '她看起来快乐得很。<br>Trông cô ấy vui vẻ lắm.'],
        ['音乐', 'yīnyuè — âm nhạc', '我下了课就去听音乐会了。<br>Tan học là tôi đi nghe hoà nhạc ngay.']
      ],
        note: '乐 đọc <b>lè</b> khi nghĩa là "vui" (快乐); đọc <b>yuè</b> khi nghĩa là "nhạc" (音乐, 音乐会).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Giải trí, thư giãn<br>休闲生活', '爬 pá (leo) · 山 shān (núi) · 锻炼 duànliàn (rèn luyện) · 运动 yùndòng (thể thao, vận động) · 音乐 yīnyuè (âm nhạc) · 音乐会 yīnyuèhuì (buổi hoà nhạc) · 电视 diànshì (tivi) · 电影 diànyǐng (phim)<br>' +
          '照 zhào (chụp) · 照片 zhàopiàn (tấm ảnh) · 拍照 pāizhào (chụp ảnh) · 照相 zhàoxiàng (chụp ảnh) · 相机 xiàngjī (máy ảnh)'],
        ['Liên lạc<br>沟通联系', '信 xìn (thư; tin) · 邮件 yóujiàn (email) · 电话 diànhuà (điện thoại) · 写 xiě (viết) · 收到 shōudào (nhận được) · 打 dǎ (gọi điện) · 封 fēng (bức, lá — lượng từ của thư)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['信 xìn<br>(danh từ) thư', '一封信 — một bức thư<br>我收到了朋友给我写的一封信。<br>Tôi đã nhận được bức thư bạn viết cho tôi.', 'A：你是在写信吗？<br>B：对，我朋友说她喜欢收到手写的信。<br>A: Bạn đang viết thư à? — B: Ừ, bạn tôi nói cô ấy thích nhận thư viết tay.'],
        ['信 xìn<br>(động từ) tin', '不信 — không tin<br>他说的话，你信吗？<br>Lời anh ấy nói, bạn có tin không?', 'A：小李说他明天一定会来。<br>B：我不太信，上次他也这样说过，但是没来。<br>A: Tiểu Lý nói mai anh ấy nhất định sẽ đến. — B: Tôi không tin lắm, lần trước anh ấy cũng nói vậy mà có đến đâu.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['爬山<br>pá shān — leo núi', '锻炼身体<br>duànliàn shēntǐ — rèn luyện thân thể'],
        ['做运动<br>zuò yùndòng — tập thể thao', '听音乐会<br>tīng yīnyuèhuì — nghe hoà nhạc'],
        ['看电影<br>kàn diànyǐng — xem phim', '照得很好<br>zhào de hěn hǎo — chụp rất đẹp'],
        ['拍张照<br>pāi zhāng zhào — chụp một tấm ảnh', '两张照片<br>liǎng zhāng zhàopiàn — hai tấm ảnh'],
        ['一封邮件<br>yì fēng yóujiàn — một bức email', '收到邮件<br>shōudào yóujiàn — nhận được email'],
        ['写邮件<br>xiě yóujiàn — viết email', '打电话<br>dǎ diànhuà — gọi điện thoại']
      ] },
      // TU GIAI (file dap an khong co phan nay).
      // (1) 相机没电了 (doi lai voi 手机); (2) 爬山; (3) 照几张照片 (bang tu chi co 照, khong co 拍 dung rieng; 拍 cung dung -> ghi trong hint);
      // (4) 音乐会的票; (5) 两封邮件.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu. Câu 3 viết 拍 cũng đúng nghĩa.', maxlength: 4,
        items: [
          { before: '', after: '没电了，只能用手机拍照了。', answer: '相机' },
          { before: '今天天气好，我们一起去', after: '山吧。', answer: '爬' },
          { before: '外面出太阳了，我出去', after: '几张照片。', answer: '照', accept: ['拍'] },
          { before: '你喜欢听音乐吗？我有两张', after: '的票。', answer: '音乐会' },
          { before: '我收到了两', after: '邮件——公司的和银行的。', answer: '封' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你对什么运动感兴趣？', answer: 'F',
            vn: 'Bạn thích môn thể thao nào? — F: Ngoài leo núi ra, môn khác tôi đều không thích.' },
          { n: 12, letters: L5, prompt: '你站在树前面，我给你拍张照。', answer: 'C',
            vn: 'Bạn đứng trước cái cây, tôi chụp cho bạn một tấm. — C: Chỗ này không đẹp, chúng mình sang bên kia đi.' },
          { n: 13, letters: L5, prompt: '我能用你的手机打个电话吗？', answer: 'A',
            vn: 'Tôi dùng điện thoại của bạn gọi một cuộc được không? — A: Xin lỗi, máy tôi hết pin rồi.' },
          { n: 14, letters: L5, prompt: '终于考完了，你假期要做什么？', answer: 'B',
            vn: 'Cuối cùng cũng thi xong, kỳ nghỉ bạn định làm gì? — B: Tôi sẽ đi du lịch, còn bạn?' },
          { n: 15, letters: L5, prompt: '你在房间里干什么呢？我叫你好几次了。', answer: 'D',
            vn: 'Bạn làm gì trong phòng thế? Tôi gọi bạn mấy lần rồi. — D: Xin lỗi, tôi đang nghe nhạc nên không nghe thấy.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '假期我们要去海边玩，你有没有（　）一起去？', answer: 'B',
            vn: 'Kỳ nghỉ chúng tôi định ra biển chơi, bạn có hứng đi cùng không? — 有兴趣: có hứng thú.' },
          { n: 17, letters: L5, prompt: '很久没有（　）身体了，今天我要出去运动运动。', answer: 'C',
            vn: 'Lâu lắm rồi không rèn luyện thân thể, hôm nay tôi phải ra ngoài vận động một chút. — 锻炼身体: rèn luyện thân thể.' },
          { n: 18, letters: L5, prompt: '前面走过来几个人，我去问问他们能不能帮我们（　）。', answer: 'D',
            vn: 'Phía trước có mấy người đi tới, tôi ra hỏi xem họ có thể chụp ảnh giúp chúng mình không. — 帮我们照相: chụp ảnh giúp chúng tôi.' },
          { n: 19, letters: L5, prompt: 'A：你怎么了？看起来有点儿（　）。\nB：今天的考试我考得不太好。', answer: 'F',
            vn: 'A: Bạn sao thế? Trông có vẻ hơi buồn.\nB: Bài thi hôm nay tôi làm không tốt lắm. — 难过: buồn.' },
          { n: 20, letters: L5, prompt: 'A：你怎么（　）吃外卖？\nB：我这几天忙得很，没有时间自己做饭。', answer: 'A',
            vn: 'A: Sao lúc nào bạn cũng ăn đồ đặt ngoài vậy?\nB: Mấy hôm nay tôi bận lắm, không có thời gian tự nấu cơm. — 总是: lúc nào cũng.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '这些大衣件件都非常好看，我都想买，但一看多少钱，就一件也不想买了。\n★他为什么不想买大衣？',
            options: [{ key: 'A', text: '很难看' }, { key: 'B', text: '太贵了' }, { key: 'C', text: '不需要' }], answer: 'B',
            vn: 'Mấy chiếc áo khoác này chiếc nào cũng rất đẹp, tôi đều muốn mua, nhưng vừa nhìn giá là chẳng muốn mua chiếc nào nữa. — Xem giá xong không muốn mua → đắt quá → B.' },
          { n: 22, prompt: '我送给小白一张音乐会的票，她收到票特别高兴。她告诉我，她对音乐非常感兴趣，明年读大学时要学音乐。\n★关于小白，可以知道什么？',
            promptPy: 'Wǒ sònggěi Xiǎo Bái yì zhāng yīnyuèhuì de piào, tā shōudào piào tèbié gāoxìng. Tā gàosu wǒ, tā duì yīnyuè fēicháng gǎn xìngqù, míngnián dú dàxué shí yào xué yīnyuè.\nGuānyú Xiǎo Bái, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '喜欢音乐' }, { key: 'B', text: '正在学习音乐' }, { key: 'C', text: '买了音乐会的票', py: 'mǎile yīnyuèhuì de piào' }], answer: 'A',
            vn: 'Tôi tặng Tiểu Bạch một vé hoà nhạc, cô ấy nhận vé vui lắm. Cô ấy nói với tôi rằng cô ấy rất thích âm nhạc, sang năm vào đại học sẽ học nhạc. — "对音乐非常感兴趣" → A. Sang năm mới học (B sai), vé là được tặng (C sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '上个星期六，我和姐姐一起去爬山，还照了很多照片，有站在树下的，还有坐在地上的。我们想比较一下拍照水平，所以回到家就让妈妈在电脑上看我们的照片，妈妈觉得我照的照片比姐姐的好看，姐姐听了有点儿难过。\n★他和姐姐没有做什么？',
            promptPy: 'Shàng ge xīngqīliù, wǒ hé jiějie yìqǐ qù pá shān, hái zhàole hěn duō zhàopiàn, yǒu zhàn zài shù xià de, hái yǒu zuò zài dìshang de. Wǒmen xiǎng bǐjiào yíxià pāizhào shuǐpíng, suǒyǐ huídào jiā jiù ràng māma zài diànnǎo shang kàn wǒmen de zhàopiàn, māma juéde wǒ zhào de zhàopiàn bǐ jiějie de hǎokàn, jiějie tīngle yǒudiǎnr nánguò.\nTā hé jiějie méiyǒu zuò shénme?',
            options: [{ key: 'A', text: '爬山' }, { key: 'B', text: '拍照' }, { key: 'C', text: '玩电脑' }], answer: 'C',
            vn: 'Thứ Bảy tuần trước, tôi và chị gái cùng đi leo núi, còn chụp rất nhiều ảnh, có ảnh đứng dưới gốc cây, có ảnh ngồi dưới đất. Chúng tôi muốn so tài chụp ảnh nên về đến nhà liền nhờ mẹ xem ảnh trên máy tính, mẹ thấy ảnh tôi chụp đẹp hơn của chị, chị nghe xong hơi buồn. — Họ leo núi, chụp ảnh; máy tính là để mẹ xem ảnh, không phải chơi máy tính → C.' },
          { n: 24, prompt: '★妈妈：',
            options: [{ key: 'A', text: '也去爬山了' }, { key: 'B', text: '照了很多照片', py: 'zhàole hěn duō zhàopiàn' }, { key: 'C', text: '觉得他照的照片好' }], answer: 'C',
            vn: '"妈妈觉得我照的照片比姐姐的好看" → C. Mẹ không đi leo núi cùng (A sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '你看，太（ yáng ）出来了，天气很好，咱们出去走走吧。', promptPy: 'Nǐ kàn, tàiyáng chūlai le, tiānqì hěn hǎo, zánmen chūqu zǒuzou ba.', answer: '阳',
            vn: 'Nhìn kìa, mặt trời ló ra rồi, trời đẹp quá, chúng mình ra ngoài đi dạo nhé. — 太阳 tàiyáng: mặt trời.' },
          { n: 26, input: true, maxlength: 2, prompt: '在这里，你可以爬（ shān ），也可以去海里游泳，想干什么就干什么。', promptPy: 'Zài zhèlǐ, nǐ kěyǐ pá shān, yě kěyǐ qù hǎi li yóuyǒng, xiǎng gàn shénme jiù gàn shénme.', answer: '山',
            vn: 'Ở đây bạn có thể leo núi, cũng có thể xuống biển bơi, muốn làm gì thì làm. — 爬山 pá shān: leo núi.' },
          { n: 27, input: true, maxlength: 2, prompt: '今天我（ shōu ）到了姐姐的邮件，她告诉了我很多大学里的事情。', promptPy: 'Jīntiān wǒ shōudàole jiějie de yóujiàn, tā gàosule wǒ hěn duō dàxué li de shìqing.', answer: '收',
            vn: 'Hôm nay tôi nhận được email của chị gái, chị kể cho tôi nhiều chuyện ở trường đại học. — 收到 shōudào: nhận được.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '锻炼',
            img: IMG + 'q28.webp', prompt: '锻炼', promptPy: 'duànliàn', placeholder: 'Viết câu có từ 锻炼…',
            script: '他们每天都锻炼一个小时。', vn: 'Ngày nào họ cũng tập luyện một tiếng.' },
          { n: 29, free: true, must: '结束', img: IMG + 'q29.webp', prompt: '结束', promptPy: 'jiéshù', placeholder: 'Viết câu có từ 结束…',
            script: '音乐会已经结束了。', vn: 'Buổi hoà nhạc đã kết thúc rồi.' },
          { n: 30, free: true, must: '拍照', img: IMG + 'q30.webp', prompt: '拍照', promptPy: 'pāizhào', placeholder: 'Viết câu có từ 拍照…',
            script: '她的拍照水平很好。', vn: 'Trình độ chụp ảnh của cô ấy rất tốt.' }
        ] }
    ] }
  ]
};
