// Bai 4 — 这家宾馆跟别的都不一样. Sach bai tap trang 029–037 = PDF trang 34–42.
// Dap an: HSK3--学练手册(习题答案).pdf trang 4 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 029–030) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2B 3A 4A 5C 6A 7C 8A 9B 10C).
const IMG = '/images/hsk3v3-bai-4-wb/';
const B_GHEP = [
  { key: 'A', text: '我还在选宾馆呢，你先休息吧。' },
  { key: 'B', text: '您好，不好意思，让您久等了。' },
  { key: 'C', text: '别着急，过几个月，你就什么都会了。' },
  { key: 'D', text: '我也特别喜欢这里，下次假期我还要来。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '我没带出来，一直在宾馆的房间里。', py: 'Wǒ méi dài chūlai, yìzhí zài bīnguǎn de fángjiān li.' }
];
const B_TU = [
  { key: 'A', text: '别的' }, { key: 'B', text: '一样' }, { key: 'C', text: '一直' },
  { key: 'D', text: '一定' }, { key: 'E', text: '鞋' }, { key: 'F', text: '特别' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '这家宾馆跟别的都不一样',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 已 và 己', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['已 yǐ', '已经 yǐjīng — đã', '飞机票我已经买好了。<br>Vé máy bay tôi đã mua xong rồi.'],
        ['己 jǐ', '自己 zìjǐ — tự mình, bản thân', '我自己去旅游。<br>Tôi tự đi du lịch một mình.']
      ],
        note: 'Hai chữ chỉ khác nhau ở nét gập bên trái: 己 để hở hẳn góc trên bên trái; 已 có nét kéo lên đến lưng chừng (hở một chút). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 还', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['还有', 'hái yǒu — còn có', '除了这个行李箱以外，还有别的东西吗？<br>Ngoài chiếc vali này ra, còn đồ gì khác không?'],
        ['还书', 'huán shū — trả sách', '我下午去学校还书。<br>Chiều nay tôi đến trường trả sách.']
      ],
        note: '还 đọc <b>hái</b> khi nghĩa là "còn, vẫn" (还有, 还要); đọc <b>huán</b> khi nghĩa là "trả lại" (还书, 还信用卡).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Du lịch, nghỉ dưỡng<br>旅游度假', '假期 jiàqī (kỳ nghỉ) · 旅游 lǚyóu (du lịch) · 海 hǎi (biển) · 草原 cǎoyuán (thảo nguyên)<br>' +
          '骑 qí (cưỡi) · 马 mǎ (ngựa) · 羊 yáng (cừu, dê) · 牛 niú (bò) · 草 cǎo (cỏ) · 地 dì (mặt đất) · 月亮 yuèliang (mặt trăng)'],
        ['Trải nghiệm chuyến đi<br>出行体验', '起飞 qǐfēi (cất cánh) · 晚点 wǎndiǎn (trễ giờ) · 司机 sījī (tài xế) · 机场 jīchǎng (sân bay) · 接 jiē (đón) · 送 sòng (tiễn, đưa) · 宾馆 bīnguǎn (khách sạn)<br>' +
          '主意 zhǔyi (ý kiến, ý tưởng) · 干净 gānjìng (sạch sẽ) · 满意 mǎnyì (hài lòng) · 安全 ānquán (an toàn) · 特别 tèbié (đặc biệt) · 一样 yíyàng (giống nhau) · 久 jiǔ (lâu)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['草 cǎo<br>cỏ', '小草 — cỏ non<br>这里有很多绿色的小草。<br>Ở đây có rất nhiều cỏ non xanh mướt.', 'A：你觉得草原怎么样？<br>B：绿色的草，红色的花，太漂亮了！<br>A: Bạn thấy thảo nguyên thế nào? — B: Cỏ xanh, hoa đỏ, đẹp quá!'],
        ['地 dì<br>mặt đất', '地上 — trên mặt đất<br>咱们坐在地上吧。<br>Chúng mình ngồi xuống đất đi.', 'A：地上有一个手机，是你的吗？<br>B：是我的，谢谢。<br>A: Dưới đất có một cái điện thoại, của bạn à? — B: Của tôi, cảm ơn.'],
        ['安全 ānquán<br>an toàn', '特别安全 — rất an toàn<br>这个小区特别安全。<br>Khu dân cư này rất an toàn.', 'A：我想走路回家。<br>B：晚上一个人不太安全，还是我送你吧。<br>A: Tôi muốn đi bộ về nhà. — B: Buổi tối đi một mình không an toàn lắm, để tôi đưa bạn về.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['假期旅游<br>jiàqī lǚyóu — du lịch dịp nghỉ', '海边<br>hǎibiān — bờ biển'],
        ['绿草<br>lǜ cǎo — cỏ xanh', '大大的月亮<br>dàdà de yuèliang — mặt trăng to tròn'],
        ['好主意<br>hǎo zhǔyi — ý hay', '一家宾馆<br>yì jiā bīnguǎn — một khách sạn'],
        ['吃羊肉<br>chī yángròu — ăn thịt cừu', '骑马<br>qí mǎ — cưỡi ngựa'],
        ['飞机起飞<br>fēijī qǐfēi — máy bay cất cánh', '飞机晚点<br>fēijī wǎndiǎn — máy bay trễ giờ'],
        ['久等<br>jiǔ děng — chờ lâu', '出租车司机<br>chūzūchē sījī — tài xế taxi']
      ] },
      // TU GIAI (file dap an khong co phan nay). Moi cau chi mot tu trong bang hop:
      // (1) 喜欢旅游 (ky nghi di bien); (2) 飞机晚点了两个小时; (3) 跟……一样漂亮; (4) 骑马; (5) 这家宾馆.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '我喜欢', after: '，假期的时候我想跟朋友一起去海边。', answer: '旅游' },
          { before: '因为天气不好，飞机', after: '了两个小时。', answer: '晚点' },
          { before: '今天的月亮跟照片上的', after: '漂亮。', answer: '一样' },
          { before: '我也想去草原上', after: '马，一定非常有意思。', answer: '骑' },
          { before: '你觉得这家', after: '怎么样？', answer: '宾馆' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你的相机在哪儿？', answer: 'F',
            vn: 'Máy ảnh của bạn đâu? — F: Tôi không mang ra, nó vẫn ở trong phòng khách sạn.' },
          { n: 12, letters: L5, prompt: '你为什么还不睡觉？', answer: 'A',
            vn: 'Sao bạn vẫn chưa ngủ? — A: Tôi vẫn đang chọn khách sạn, bạn nghỉ trước đi.' },
          { n: 13, letters: L5, prompt: '欢迎您来北京，我是您的司机小王。', answer: 'B',
            vn: 'Chào mừng anh đến Bắc Kinh, tôi là Tiểu Vương, tài xế của anh. — B: Chào anh, xin lỗi đã để anh phải chờ lâu.' },
          { n: 14, letters: L5, prompt: '这里真是太好玩儿了。', promptPy: 'Zhèli zhēn shì tài hǎowánr le.', answer: 'D',
            vn: 'Ở đây vui thật đấy. — D: Tôi cũng rất thích nơi này, kỳ nghỉ sau tôi còn muốn đến nữa.' },
          { n: 15, letters: L5, prompt: '除了“谢谢”以外，别的我一点儿都不会说。', answer: 'C',
            vn: 'Ngoài câu "cảm ơn" ra, những câu khác tôi không biết nói chút nào. — C: Đừng sốt ruột, vài tháng nữa là bạn biết hết thôi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '小丽想去草原看月亮、吃羊肉，但是（　）没有时间去。', answer: 'C',
            promptPy: 'Xiǎo Lì xiǎng qù cǎoyuán kàn yuèliang, chī yángròu, dànshì (　) méiyǒu shíjiān qù.',
            vn: 'Tiểu Lệ muốn lên thảo nguyên ngắm trăng, ăn thịt cừu, nhưng mãi vẫn không có thời gian đi. — 一直: suốt, mãi.' },
          { n: 17, letters: L5, prompt: '我和姐姐都喜欢大海，但是妹妹跟我们不（　），她喜欢草原。', answer: 'B',
            vn: 'Tôi và chị gái đều thích biển, nhưng em gái không giống chúng tôi, em ấy thích thảo nguyên. — 跟……不一样: không giống…' },
          { n: 18, letters: L5, prompt: '我今天不舒服，不想吃这个，还有（　）吗？', answer: 'A',
            vn: 'Hôm nay tôi không khoẻ, không muốn ăn món này, còn món nào khác không? — 别的: cái khác.' },
          { n: 19, letters: L5, prompt: 'A：你要一个人开车去旅游吗？\nB：对，我一个人去，这次（　）没问题。', answer: 'D',
            vn: 'A: Bạn định một mình lái xe đi du lịch à?\nB: Ừ, tôi đi một mình, lần này nhất định không có vấn đề gì. — 一定: nhất định, chắc chắn.' },
          { n: 20, letters: L5, prompt: 'A：昨天住的那家宾馆很（　），服务也很好，你觉得呢？\nB：我也觉得不错，房间又大又舒服。', answer: 'F',
            vn: 'A: Khách sạn hôm qua ở rất đặc biệt, phục vụ cũng tốt, bạn thấy sao?\nB: Tôi cũng thấy được, phòng vừa rộng vừa thoải mái. — 很特别: rất đặc biệt.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '小王要去国外旅游，但是飞机晚点了，他在机场等了六个小时，飞机才起飞。\n★关于小王，可以知道什么？',
            promptPy: 'Xiǎo Wáng yào qù guówài lǚyóu, dànshì fēijī wǎndiǎn le, tā zài jīchǎng děngle liù gè xiǎoshí, fēijī cái qǐfēi.\nGuānyú Xiǎo Wáng, kěyǐ zhīdào shénme?',
            options: [{ key: 'A', text: '要回中国' }, { key: 'B', text: '坐了六小时飞机', py: 'zuòle liù xiǎoshí fēijī' }, { key: 'C', text: '在机场等了六小时', py: 'zài jīchǎng děngle liù xiǎoshí' }], answer: 'C',
            vn: 'Tiểu Vương muốn đi du lịch nước ngoài, nhưng máy bay trễ giờ, anh ấy chờ ở sân bay sáu tiếng máy bay mới cất cánh. — Chờ sáu tiếng ở sân bay → C, không phải ngồi máy bay sáu tiếng (B sai).' },
          { n: 22, prompt: '这个假期我们去中国旅游了，除了北京以外，还去了上海和西安。\n★他们假期：',
            promptPy: 'Zhège jiàqī wǒmen qù Zhōngguó lǚyóu le, chúle Běijīng yǐwài, hái qùle Shànghǎi hé Xī\'ān.\nTāmen jiàqī:',
            options: [{ key: 'A', text: '去了上海', py: 'qùle Shànghǎi' }, { key: 'B', text: '只去了北京', py: 'zhǐ qùle Běijīng' }, { key: 'C', text: '哪儿都没去' }], answer: 'A',
            vn: 'Kỳ nghỉ này chúng tôi đi du lịch Trung Quốc, ngoài Bắc Kinh ra còn đến Thượng Hải và Tây An. — 除了……以外，还…: ngoài… ra còn… → A.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '我们一家人一起旅游的时候，最大的问题就是选宾馆。我觉得住的宾馆一定要去哪儿都方便。我妻子希望房间和床都大一些，休息的时候舒服点儿。儿子和女儿说：“最重要的是宾馆的早饭要好吃。”怎么才能选到大家都满意的宾馆呢？\n★谁希望选一个房间大的宾馆？',
            promptPy: 'Wǒmen yì jiā rén yìqǐ lǚyóu de shíhou, zuì dà de wèntí jiù shì xuǎn bīnguǎn. Wǒ juéde zhù de bīnguǎn yídìng yào qù nǎr dōu fāngbiàn. Wǒ qīzi xīwàng fángjiān hé chuáng dōu dà yìxiē, xiūxi de shíhou shūfu diǎnr. Érzi hé nǚ\'ér shuō: “Zuì zhòngyào de shì bīnguǎn de zǎofàn yào hǎochī.” Zěnme cái néng xuǎndào dàjiā dōu mǎnyì de bīnguǎn ne?\nShéi xīwàng xuǎn yí gè fángjiān dà de bīnguǎn?',
            options: [{ key: 'A', text: '妻子' }, { key: 'B', text: '女儿' }, { key: 'C', text: '儿子' }], answer: 'A',
            vn: 'Khi cả nhà tôi đi du lịch, vấn đề lớn nhất là chọn khách sạn. Tôi thấy khách sạn nhất định phải đi đâu cũng tiện. Vợ tôi muốn phòng và giường đều rộng một chút, nghỉ ngơi cho thoải mái. Con trai và con gái nói: "Quan trọng nhất là bữa sáng của khách sạn phải ngon." Làm sao mới chọn được khách sạn mà ai cũng hài lòng đây? — Người muốn phòng rộng là vợ → A.' },
          { n: 24, prompt: '★儿子和女儿觉得宾馆最重要的是什么？',
            options: [{ key: 'A', text: '舒服的床' }, { key: 'B', text: '大的房间' }, { key: 'C', text: '好吃的早饭' }], answer: 'C',
            vn: '"最重要的是宾馆的早饭要好吃" → C. Giường thoải mái, phòng rộng là mong muốn của người vợ (A, B sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '今天的天气太热了，咱们下午去（ hǎi ）边玩吧。', promptPy: 'Jīntiān de tiānqì tài rè le, zánmen xiàwǔ qù hǎibiān wán ba.', answer: '海',
            vn: 'Hôm nay trời nóng quá, chiều nay chúng mình ra bờ biển chơi nhé. — 海边 hǎibiān: bờ biển.' },
          { n: 26, input: true, maxlength: 2, prompt: '这个假期我一（ dìng ）要去草原骑马。', promptPy: 'Zhège jiàqī wǒ yídìng yào qù cǎoyuán qí mǎ.', answer: '定',
            vn: 'Kỳ nghỉ này tôi nhất định phải lên thảo nguyên cưỡi ngựa. — 一定 yídìng: nhất định.' },
          { n: 27, input: true, maxlength: 2, prompt: '昨天住的那家宾馆很特（ bié ），服务也很好。', promptPy: 'Zuótiān zhù de nà jiā bīnguǎn hěn tèbié, fúwù yě hěn hǎo.', answer: '别',
            vn: 'Khách sạn hôm qua ở rất đặc biệt, phục vụ cũng rất tốt. — 特别 tèbié: đặc biệt.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '特别',
            img: IMG + 'q28.webp', prompt: '特别', promptPy: 'tèbié', placeholder: 'Viết câu có từ 特别…',
            script: '今天天气特别好，爷爷奶奶就带我去公园玩儿。', vn: 'Hôm nay trời đặc biệt đẹp, ông bà liền đưa tôi đi công viên chơi.' },
          { n: 29, free: true, must: '一直', img: IMG + 'q29.webp', prompt: '一直', promptPy: 'yìzhí', placeholder: 'Viết câu có từ 一直…',
            script: '上飞机后，我一直睡觉。', vn: 'Lên máy bay rồi, tôi ngủ suốt.' },
          { n: 30, free: true, must: '先', img: IMG + 'q30.webp', prompt: '先', promptPy: 'xiān', placeholder: 'Viết câu có từ 先…',
            script: '我饿了，我们先选饭馆儿吧。', vn: 'Tôi đói rồi, chúng mình chọn quán ăn trước đã nhé.' }
        ] }
    ] }
  ]
};
