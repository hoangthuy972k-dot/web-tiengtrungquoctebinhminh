// Bai 13 — 我的新邻居来自英国. Sach bai tap trang 112–120 = PDF trang 117–125.
// Dap an: HSK3--学练手册(习题答案).pdf trang 13 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 112–113) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2C 3B 4B 5C 6A 7B 8A 9C 10C).
const IMG = '/images/hsk3v3-bai-13-wb/';
const B_GHEP = [
  { key: 'A', text: '这些都是我去过的地方。', py: 'Zhèxiē dōu shì wǒ qùguo de dìfang.' },
  { key: 'B', text: '谢谢，我很喜欢这位画家。' },
  { key: 'C', text: '不好意思，可能是糖放多了。' },
  { key: 'D', text: '好的，没想到天气越来越冷了。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '那是张先生和王女士，他们是夫妻。' }
];
const B_TU = [
  { key: 'A', text: '请客' }, { key: 'B', text: '感到' }, { key: 'C', text: '不同' },
  { key: 'D', text: '放心' }, { key: 'E', text: '鞋' }, { key: 'F', text: '来自' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我的新邻居来自英国',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 白 và 自', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['白 bái<br>丿 + 日', '明白 míngbai — hiểu, rõ<br>白色 báisè — màu trắng', '他说的意思你听明白了吗？<br>Ý anh ấy nói bạn nghe hiểu chưa?'],
        ['自 zì<br>丿 + 目', '来自 láizì — đến từ<br>自行车 zìxíngchē — xe đạp', '大家好，我来自英国。<br>Chào mọi người, tôi đến từ nước Anh.']
      ],
        note: 'Hai chữ đều có nét phẩy 丿 ở trên: bên dưới của 白 là 日 (bên trong một nét ngang), của 自 là 目 (bên trong hai nét ngang). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 只', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['一只', 'yì zhī — một chiếc (trong một đôi)', '这双鞋一只大一只小，不能穿。你把它们拿回去吧。<br>Đôi giày này một chiếc to một chiếc nhỏ, không đi được. Bạn mang chúng về đi.'],
        ['只能', 'zhǐ néng — chỉ có thể', '明天下雨的话，就只能在家看电视了。<br>Nếu mai trời mưa thì chỉ có thể ở nhà xem tivi thôi.']
      ],
        note: '只 đọc <b>zhī</b> khi là lượng từ (một chiếc giày, một con mèo: 一只猫); đọc <b>zhǐ</b> khi nghĩa là "chỉ" (只能, 只有, 只是).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Mời khách & làm khách<br>请客与做客', '请客 qǐngkè (mời, đãi khách) · 做客 zuòkè (làm khách) · 客人 kèrén (khách) · 邻居 línjū (hàng xóm) · 夫妻 fūqī (vợ chồng) · 丈夫 zhàngfu (chồng) · 妻子 qīzi (vợ) · 老 lǎo (già, cũ, lâu năm) · 欢迎 huānyíng (chào mừng)<br>' +
          '礼物 lǐwù (quà) · 酒 jiǔ (rượu) · 咖啡 kāfēi (cà phê) · 茶 chá (trà) · 饮料 yǐnliào (đồ uống) · 菜 cài (món ăn) · 糖 táng (đường, kẹo) · 杯子 bēizi (cốc, ly) · 盘子 pánzi (đĩa) · 晚会 wǎnhuì (tiệc tối, dạ hội) · 聊天儿 liáotiānr (trò chuyện)'],
        ['Bản đồ & vùng miền<br>地图与区域', '地图 dìtú (bản đồ) · 南方 nánfāng (phía nam, miền Nam) · 北方 běifāng (phía bắc, miền Bắc) · 东方 dōngfāng (phía đông, phương Đông) · 西方 xīfāng (phía tây, phương Tây) · 来自 láizì (đến từ)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['老 lǎo<br>già, cũ, lâu năm', '老房子 — ngôi nhà cũ<br>这个老城有几百年的历史。<br>Thành cổ này có lịch sử mấy trăm năm.', 'A：你认识王老师吗？<br>B：认识，我们是很多年的老朋友。<br>A: Bạn có quen thầy Vương không? — B: Có, chúng tôi là bạn cũ nhiều năm rồi.'],
        ['子 zi<br>hậu tố danh từ', '杯子 — cái cốc<br>桌子上放着好几个盘子。<br>Trên bàn để mấy cái đĩa.', 'A：你们先坐着聊天儿，我去把酒拿过来。<br>B：我跟你一起去，也把杯子拿过来。<br>A: Các bạn cứ ngồi nói chuyện trước, tôi đi lấy rượu. — B: Tôi đi cùng bạn, lấy luôn cốc qua.'],
        ['西方 xīfāng<br>phía tây, phương Tây', '西方人 — người phương Tây<br>他对西方文化很感兴趣。<br>Anh ấy rất hứng thú với văn hóa phương Tây.', 'A：我最近看了几个西方电影，都很好看。<br>B：是吗？叫什么名字？我也看看。<br>A: Dạo này tôi xem mấy bộ phim phương Tây, bộ nào cũng hay. — B: Thế à? Tên là gì? Tôi cũng xem thử.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['一位客人<br>yí wèi kèrén — một vị khách', '新邻居<br>xīn línjū — hàng xóm mới'],
        ['老夫老妻<br>lǎofū-lǎoqī — vợ chồng già (sống với nhau lâu năm)', '欢迎大家<br>huānyíng dàjiā — chào mừng mọi người'],
        ['一个礼物<br>yí gè lǐwù — một món quà', '送礼物<br>sòng lǐwù — tặng quà'],
        ['生日晚会<br>shēngrì wǎnhuì — tiệc sinh nhật', '一杯酒<br>yì bēi jiǔ — một ly rượu'],
        ['一个盘子<br>yí gè pánzi — một cái đĩa', '一瓶饮料<br>yì píng yǐnliào — một chai đồ uống'],
        ['世界地图<br>shìjiè dìtú — bản đồ thế giới', '西方人<br>xīfāngrén — người phương Tây']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 跟我聊天儿; (2) 来我家做客; (3) 生日晚会;
      // (4) 冬天特别冷 -> 北方; (5) 今天我请客 (大家多点点儿 = goi nhieu mon vao).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '邻居常常来我家跟我', after: '。', answer: '聊天儿' },
          { before: '欢迎你们来我家', after: '，快请进。', answer: '做客' },
          { before: '谢谢你们来参加我的生日', after: '。', answer: '晚会' },
          { before: '我来自中国', after: '，那里冬天特别冷。', answer: '北方' },
          { before: '今天我', after: '，大家多点点儿、多吃点儿，别客气。', answer: '请客' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '那边的两个人是谁？', promptPy: 'Nàbiān de liǎng gè rén shì shéi?', answer: 'F',
            vn: 'Hai người đằng kia là ai vậy? — F: Đó là ông Trương và bà Vương, họ là vợ chồng.' },
          { n: 12, letters: L5, prompt: '你把蛋糕做得太甜了。', answer: 'C',
            vn: 'Bạn làm bánh ngọt quá rồi. — C: Xin lỗi, có lẽ cho nhiều đường quá.' },
          { n: 13, letters: L5, prompt: '你的地图上怎么有这么多红点？', promptPy: 'Nǐ de dìtú shang zěnme yǒu zhème duō hóng diǎn?', answer: 'A',
            vn: 'Sao trên bản đồ của bạn lại có nhiều chấm đỏ thế? — A: Đây đều là những nơi tôi đã từng đến.' },
          { n: 14, letters: L5, prompt: '我觉得你们家的这些画太漂亮了。', answer: 'B',
            vn: 'Tôi thấy mấy bức tranh nhà bạn đẹp quá. — B: Cảm ơn, tôi rất thích vị họa sĩ này.' },
          { n: 15, letters: L5, prompt: '明天有雪，出去的话，就再加一件衣服吧。', answer: 'D',
            vn: 'Mai có tuyết, nếu ra ngoài thì mặc thêm một chiếc áo nhé. — D: Vâng, không ngờ trời ngày càng lạnh.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '我在比赛中得到了好成绩，（　）特别快乐。', answer: 'B',
            promptPy: 'Wǒ zài bǐsài zhōng dédàole hǎo chéngjì, (　) tèbié kuàilè.',
            vn: 'Tôi đạt thành tích tốt trong cuộc thi, cảm thấy đặc biệt vui. — 感到快乐: cảm thấy vui.' },
          { n: 17, letters: L5, prompt: '老师，我有一个问题：这两个词有什么（　）？', answer: 'C',
            vn: 'Thưa cô, em có một câu hỏi: hai từ này có gì khác nhau ạ? — 有什么不同: có gì khác nhau.' },
          { n: 18, letters: L5, prompt: '大家好，我（　）英国，欢迎你们有时间去旅游。', answer: 'F',
            vn: 'Chào mọi người, tôi đến từ nước Anh, mời các bạn khi nào có thời gian thì đến du lịch. — 来自英国: đến từ nước Anh.' },
          { n: 19, letters: L5, prompt: 'A：今天我（　），您想吃什么就点什么。\nB：您太客气了，我吃什么都可以。', answer: 'A',
            vn: 'A: Hôm nay tôi mời, anh muốn ăn gì cứ gọi.\nB: Anh khách sáo quá, tôi ăn gì cũng được. — 请客: mời, đãi (trả tiền).' },
          { n: 20, letters: L5, prompt: 'A：下课后，别忘了把这些书放回办公室去。\nB：好的，李老师，您（　）吧。', answer: 'D',
            promptPy: 'A: Xià kè hòu, bié wàngle bǎ zhèxiē shū fànghuí bàngōngshì qù.\nB: Hǎo de, Lǐ lǎoshī, nín (　) ba.',
            vn: 'A: Tan học đừng quên mang mấy quyển sách này về văn phòng nhé.\nB: Vâng, thầy Lý cứ yên tâm ạ. — 您放心吧: thầy cứ yên tâm.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '喂，我才看见您的电话，刚才我去楼下接几位客人，没带手机。您找我有什么事？\n★他正在做什么？',
            options: [{ key: 'A', text: '打电话', py: 'dǎ diànhuà' }, { key: 'B', text: '接客人' }, { key: 'C', text: '往楼下走' }], answer: 'A',
            vn: 'A lô, tôi vừa mới thấy cuộc gọi của anh, lúc nãy tôi xuống tầng dưới đón mấy vị khách, không mang điện thoại. Anh tìm tôi có việc gì? — Bây giờ anh ấy đang gọi điện lại → A. Đón khách là việc lúc nãy (B sai).' },
          { n: 22, prompt: '你写作业以前先复习笔记吗？小安跟你不同，她是遇到不会做的题再看笔记。\n★小安是怎么做的？',
            promptPy: 'Nǐ xiě zuòyè yǐqián xiān fùxí bǐjì ma? Xiǎo Ān gēn nǐ bùtóng, tā shì yùdào bú huì zuò de tí zài kàn bǐjì.\nXiǎo Ān shì zěnme zuò de?',
            options: [{ key: 'A', text: '先复习' }, { key: 'B', text: '先写作业' }, { key: 'C', text: '边看笔记边写作业' }], answer: 'B',
            vn: 'Bạn có ôn lại vở ghi trước khi làm bài tập không? Tiểu An khác bạn, gặp bài không biết làm cô ấy mới xem vở ghi. — Tiểu An làm bài tập trước → B.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '明天晚上公司有一个晚会，小丽很想参加，但是她找不到合适的衣服，需要买一条新裙子。小丽希望同事明天有时间的话，能和她一起去买，但是同事明天白天要去开会，没有时间去商场，只能和小丽在晚会上见了。\n★小丽明天做什么？',
            promptPy: 'Míngtiān wǎnshang gōngsī yǒu yí gè wǎnhuì, Xiǎo Lì hěn xiǎng cānjiā, dànshì tā zhǎo bu dào héshì de yīfu, xūyào mǎi yì tiáo xīn qúnzi. Xiǎo Lì xīwàng tóngshì míngtiān yǒu shíjiān de huà, néng hé tā yìqǐ qù mǎi, dànshì tóngshì míngtiān báitiān yào qù kāihuì, méiyǒu shíjiān qù shāngchǎng, zhǐ néng hé Xiǎo Lì zài wǎnhuì shang jiàn le.\nXiǎo Lì míngtiān zuò shénme?',
            options: [{ key: 'A', text: '买衣服' }, { key: 'B', text: '去开会' }, { key: 'C', text: '和朋友吃饭' }], answer: 'A',
            vn: 'Tối mai công ty có một buổi tiệc, Tiểu Lệ rất muốn tham gia nhưng không tìm được bộ quần áo phù hợp, cần mua một chiếc váy mới. Tiểu Lệ mong mai đồng nghiệp có thời gian thì đi mua cùng, nhưng ban ngày mai đồng nghiệp phải đi họp, không có thời gian đi trung tâm thương mại, chỉ có thể gặp Tiểu Lệ ở buổi tiệc. — Tiểu Lệ đi mua váy → A. Đi họp là đồng nghiệp (B sai).' },
          { n: 24, prompt: '★关于同事，可以知道什么？', promptPy: 'Guānyú tóngshì, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '要去参加晚会' }, { key: 'B', text: '没有合适的衣服' }, { key: 'C', text: '要跟小丽去买裙子', py: 'yào gēn Xiǎo Lì qù mǎi qúnzi' }], answer: 'A',
            vn: '"只能和小丽在晚会上见了" — đồng nghiệp cũng sẽ đi dự tiệc → A. Không có quần áo hợp là Tiểu Lệ (B sai); đồng nghiệp không đi mua cùng được (C sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '我下周休假，打算去（ nán ）方旅游。', promptPy: 'Wǒ xià zhōu xiūjià, dǎsuàn qù nánfāng lǚyóu.', answer: '南',
            vn: 'Tuần sau tôi nghỉ phép, định đi du lịch miền Nam. — 南方 nánfāng: phía nam, miền Nam.' },
          { n: 26, input: true, maxlength: 2, prompt: '五个人点四个菜有点儿少，再（ jiā ）两个吧。', promptPy: 'Wǔ gè rén diǎn sì gè cài yǒudiǎnr shǎo, zài jiā liǎng gè ba.', answer: '加',
            vn: 'Năm người gọi bốn món hơi ít, gọi thêm hai món nữa nhé. — 加 jiā: thêm.' },
          { n: 27, input: true, maxlength: 2, prompt: '今天是我的生日，这是妈妈送我的生日（ lǐ ）物。', promptPy: 'Jīntiān shì wǒ de shēngrì, zhè shì māma sòng wǒ de shēngrì lǐwù.', answer: '礼',
            vn: 'Hôm nay là sinh nhật tôi, đây là quà sinh nhật mẹ tặng tôi. — 礼物 lǐwù: quà.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '做客',
            img: IMG + 'q28.webp', prompt: '做客', promptPy: 'zuòkè', placeholder: 'Viết câu có từ 做客…',
            script: '欢迎你来我家做客。', vn: 'Chào mừng bạn đến nhà tôi chơi (làm khách).' },
          { n: 29, free: true, must: '盘子', img: IMG + 'q29.webp', prompt: '盘子', promptPy: 'pánzi', placeholder: 'Viết câu có từ 盘子…',
            script: '她把盘子洗好了。', vn: 'Cô ấy rửa xong đĩa rồi.' },
          { n: 30, free: true, must: '聊天', img: IMG + 'q30.webp', prompt: '聊天儿', promptPy: 'liáotiānr', placeholder: 'Viết câu có từ 聊天儿…',
            script: '周末我常跟朋友聊天儿。', vn: 'Cuối tuần tôi thường trò chuyện với bạn bè.' }
        ] }
    ] }
  ]
};
