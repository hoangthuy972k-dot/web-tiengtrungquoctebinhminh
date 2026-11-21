// Bai 2 — 你们想吃什么就点什么. Sach bai tap trang 011–019 = PDF trang 16–24.
// Dap an: HSK3--学练手册(习题答案).pdf trang 2 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 011–012) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2C 3B 4B 5C 6A 7C 8B 9C 10A).
const IMG = '/images/hsk3v3-bai-2-wb/';
const B_GHEP = [
  { key: 'A', text: '别着急，现在是午饭时间，所以有点儿慢。' },
  { key: 'B', text: '没有，但是每个菜都有一张照片，您可以看照片点菜。' },
  { key: 'C', text: '没问题，我什么都会做。' },
  { key: 'D', text: '我妈妈做的鸡肉面，谁吃了都说好吃。', py: 'Wǒ māma zuò de jīròu miàn, shéi chīle dōu shuō hǎochī.' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '我家只有筷子，用筷子吃吧。' }
];
const B_TU = [
  { key: 'A', text: '好久' }, { key: 'B', text: '尝' }, { key: 'C', text: '记' },
  { key: 'D', text: '马上' }, { key: 'E', text: '鞋' }, { key: 'F', text: '简单' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '你们想吃什么就点什么',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 喝 và 渴', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['喝 hē<br>口 + 曷', '喝茶 hē chá — uống trà<br>喝水 hē shuǐ — uống nước', '你喝茶还是喝咖啡？<br>Bạn uống trà hay uống cà phê?'],
        ['渴 kě<br>氵 + 曷', '很渴 hěn kě — rất khát<br>口渴 kǒu kě — khát nước', '我很渴，想喝水。<br>Tôi khát lắm, muốn uống nước.']
      ],
        note: 'Hai chữ có chung phần bên phải 曷: 喝 có bộ 口 (cái miệng → uống), 渴 có bộ 氵 (nước → khát nước). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 便', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['便宜', 'piányi — rẻ', '这里的饭菜又好吃又便宜。<br>Cơm nước ở đây vừa ngon vừa rẻ.'],
        ['方便', 'fāngbiàn — thuận tiện', '怎么去方便，咱们就怎么去。<br>Đi thế nào tiện thì chúng ta đi thế ấy.']
      ],
        note: '便 đọc <b>pián</b> trong 便宜 (rẻ); đọc <b>biàn</b> trong 方便 và 方便面.' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Đồ ăn và đồ uống<br>食物和饮品', '鸡肉 jīròu (thịt gà) · 包子 bāozi (bánh bao) · 饺子 jiǎozi (sủi cảo) · 面条儿 miàntiáor (mì sợi) · 糖 táng (kẹo, đường) · 方便面 fāngbiànmiàn (mì ăn liền) · 冰激凌 bīngjīlíng (kem) · 蛋糕 dàngāo (bánh ngọt, bánh kem)<br>' +
          '饮料 yǐnliào (đồ uống) · 咖啡 kāfēi (cà phê) · 奶茶 nǎichá (trà sữa) · 绿茶 lǜchá (trà xanh) · 红茶 hóngchá (hồng trà) · 酒 jiǔ (rượu) · 红酒 hóngjiǔ (rượu vang đỏ)'],
        ['Nhà hàng và ăn uống<br>餐厅和用餐', '菜单 càidān (thực đơn) · 点 diǎn (gọi món) · 服务员 fúwùyuán (nhân viên phục vụ) · 尝 cháng (nếm thử) · 渴 kě (khát) · 饿 è (đói) · 外卖 wàimài (đồ ăn giao tận nơi)<br>' +
          '碗 wǎn (bát) · 瓶 píng (chai — lượng từ) · 筷子 kuàizi (đũa) · 勺子 sháozi (thìa) · 杯子 bēizi (cốc) · 瓶子 píngzi (cái chai)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['糖 táng<br>kẹo; đường', '一块糖 — một viên kẹo<br>我吃了两块糖。<br>Tôi đã ăn hai viên kẹo.', 'A：妹妹最喜欢吃什么？<br>B：她最喜欢吃糖。<br>A: Em gái thích ăn gì nhất? — B: Em ấy thích ăn kẹo nhất.'],
        ['冰激凌 bīngjīlíng<br>kem', '吃冰激凌 — ăn kem<br>我的生日蛋糕是冰激凌蛋糕。<br>Bánh sinh nhật của tôi là bánh kem lạnh.', 'A：天气太热了，我想吃冰激凌。<br>B：前面有一家超市，我们去看看。<br>A: Trời nóng quá, tôi muốn ăn kem. — B: Phía trước có một siêu thị, chúng mình vào xem thử.'],
        ['瓶子 píngzi<br>cái chai', '一个瓶子 — một cái chai<br>桌子上有两个瓶子。<br>Trên bàn có hai cái chai.', 'A：这些瓶子里是饮料吗？<br>B：不是，这些瓶子里都是水。<br>A: Trong mấy cái chai này là đồ uống à? — B: Không, trong mấy cái chai này toàn là nước.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['包饺子<br>bāo jiǎozi — gói sủi cảo', '喝饮料<br>hē yǐnliào — uống đồ uống'],
        ['又渴又饿<br>yòu kě yòu è — vừa khát vừa đói', '点外卖<br>diǎn wàimài — đặt đồ ăn giao tận nơi'],
        ['看菜单<br>kàn càidān — xem thực đơn', '点菜<br>diǎn cài — gọi món'],
        ['一碗方便面<br>yì wǎn fāngbiànmiàn — một bát mì ăn liền', '一块蛋糕<br>yí kuài dàngāo — một miếng bánh ngọt'],
        ['一个碗<br>yí gè wǎn — một cái bát', '一双筷子<br>yì shuāng kuàizi — một đôi đũa'],
        ['两个勺子<br>liǎng gè sháozi — hai cái thìa', '一瓶酒<br>yì píng jiǔ — một chai rượu']
      ] },
      // TU GIAI (file dap an khong co phan nay). Moi cau chi mot tu trong bang hop:
      // (1) 一碗面条儿; (2) 尝一下; (3) 筷子 (doi lai voi 勺子); (4) 喝什么饮料; (5) 看菜单 (roi 点菜).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '中午我吃了一', after: '面条儿。', answer: '碗' },
          { before: '这个蛋糕太好吃了，你要不要', after: '一下？', answer: '尝' },
          { before: '她不太会用', after: '，吃饭时喜欢用勺子。', answer: '筷子' },
          { before: '我点了两杯茶，你看看孩子们喝什么', after: '。', answer: '饮料' },
          { before: '服务员说在手机上可以看', after: '，也可以点菜。', answer: '菜单' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '我们用什么吃蛋糕？', answer: 'F',
            vn: 'Chúng ta ăn bánh bằng gì? — F: Nhà tôi chỉ có đũa, ăn bằng đũa nhé.' },
          { n: 12, letters: L5, prompt: '你吃过的最好吃的菜是什么？', promptPy: 'Nǐ chīguo de zuì hǎochī de cài shì shénme?', answer: 'D',
            vn: 'Món ngon nhất bạn từng ăn là món gì? — D: Mì gà mẹ tôi nấu, ai ăn cũng khen ngon.' },
          { n: 13, letters: L5, prompt: '外卖怎么还没送到？', answer: 'A',
            vn: 'Sao đồ ăn đặt vẫn chưa giao tới? — A: Đừng sốt ruột, bây giờ là giờ ăn trưa nên hơi chậm.' },
          { n: 14, letters: L5, prompt: '你可以教我做中国菜吗？', promptPy: 'Nǐ kěyǐ jiāo wǒ zuò Zhōngguó cài ma?', answer: 'C',
            vn: 'Bạn dạy tôi nấu món Trung Quốc được không? — C: Không vấn đề gì, món gì tôi cũng biết nấu.' },
          { n: 15, letters: L5, prompt: '服务员，请问有英文（Yīngwén, English）菜单吗？', promptPy: 'Fúwùyuán, qǐngwèn yǒu Yīngwén càidān ma?', answer: 'B',
            vn: 'Anh ơi, cho hỏi có thực đơn tiếng Anh không? — B: Không có, nhưng món nào cũng có ảnh, anh có thể xem ảnh để gọi món.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '蛋糕已经卖完了，您可以（　）一下我们的面包。', answer: 'B',
            vn: 'Bánh kem đã bán hết rồi, anh có thể nếm thử bánh mì của chúng tôi. — 尝一下: nếm thử.' },
          { n: 17, letters: L5, prompt: '今天的服务员很热情，但是我没（　）住她的名字。', answer: 'C',
            vn: 'Cô phục vụ hôm nay rất nhiệt tình, nhưng tôi không nhớ được tên cô ấy. — 记住: nhớ được, nhớ kỹ.' },
          { n: 18, letters: L5, prompt: '用筷子吃面条儿很（　），我来教你吧。', promptPy: 'Yòng kuàizi chī miàntiáor hěn (　), wǒ lái jiāo nǐ ba.', answer: 'F',
            vn: 'Ăn mì bằng đũa rất đơn giản, để tôi dạy bạn. — 很简单: rất đơn giản.' },
          { n: 19, letters: L5, prompt: 'A：我们（　）没一起吃饭了，明天你有时间吗？\nB：好啊，明天中午怎么样？', answer: 'A',
            vn: 'A: Lâu lắm rồi chúng mình chưa ăn cơm cùng nhau, mai bạn có rảnh không?\nB: Được đấy, trưa mai nhé? — 好久没…了: lâu lắm rồi không…' },
          { n: 20, letters: L5, prompt: 'A：你饿不饿？我（　）去给你做晚饭。\nB：不用做，我吃完晚饭了。', answer: 'D',
            vn: 'A: Con có đói không? Mẹ đi nấu cơm tối cho con ngay.\nB: Không cần nấu đâu, con ăn tối rồi. — 马上: ngay lập tức.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '学校门口新开了一家饭馆，同学们说那里的菜又好吃又便宜，我明天中午想去尝一尝。\n★他想什么时候去那家饭馆？',
            promptPy: 'Xuéxiào ménkǒu xīn kāile yì jiā fànguǎn, tóngxuémen shuō nàli de cài yòu hǎochī yòu piányi, wǒ míngtiān zhōngwǔ xiǎng qù cháng yi cháng.\nTā xiǎng shénme shíhou qù nà jiā fànguǎn?',
            options: [{ key: 'A', text: '马上' }, { key: 'B', text: '今天' }, { key: 'C', text: '明天中午' }], answer: 'C',
            vn: 'Trước cổng trường mới mở một quán ăn, các bạn nói món ở đó vừa ngon vừa rẻ, trưa mai tôi muốn đến ăn thử. — "我明天中午想去尝一尝" → C.' },
          { n: 22, prompt: '我爱吃中国菜，但是我不会用筷子。李老师让我下课后去他家吃饭，他要教我用筷子，我太高兴了。\n★他高兴是因为：',
            promptPy: 'Wǒ ài chī Zhōngguó cài, dànshì wǒ bú huì yòng kuàizi. Lǐ lǎoshī ràng wǒ xià kè hòu qù tā jiā chīfàn, tā yào jiāo wǒ yòng kuàizi, wǒ tài gāoxìng le.\nTā gāoxìng shì yīnwèi:',
            options: [{ key: 'A', text: '学做中国菜' }, { key: 'B', text: '去饭馆吃饭' }, { key: 'C', text: '老师教他用筷子' }], answer: 'C',
            vn: 'Tôi thích ăn món Trung Quốc nhưng không biết dùng đũa. Thầy Lý bảo tan học đến nhà thầy ăn cơm, thầy sẽ dạy tôi dùng đũa, tôi vui quá. — Vui vì thầy dạy dùng đũa → C. Đến nhà thầy chứ không phải quán ăn (B sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '今天天气非常热，我和小王又渴又累，看到一家冰激凌店就走进去了。服务员介绍了几个卖得很好的冰激凌，我买了水果冰激凌，但是小王不知道选什么。服务员对他说：“您尝一尝绿茶冰激凌，谁吃了都说好吃。”\n★小王：',
            promptPy: 'Jīntiān tiānqì fēicháng rè, wǒ hé Xiǎo Wáng yòu kě yòu lèi, kàndào yì jiā bīngjīlíng diàn jiù zǒu jìnqu le. Fúwùyuán jièshàole jǐ gè mài de hěn hǎo de bīngjīlíng, wǒ mǎile shuǐguǒ bīngjīlíng, dànshì Xiǎo Wáng bù zhīdào xuǎn shénme. Fúwùyuán duì tā shuō: “Nín cháng yi cháng lǜchá bīngjīlíng, shéi chīle dōu shuō hǎochī.”\nXiǎo Wáng:',
            options: [{ key: 'A', text: '想吃水果' }, { key: 'B', text: '不知道选什么' }, { key: 'C', text: '想吃绿茶冰激凌' }], answer: 'B',
            vn: 'Hôm nay trời rất nóng, tôi và Tiểu Vương vừa khát vừa mệt, thấy một tiệm kem liền đi vào. Nhân viên giới thiệu mấy loại kem bán chạy, tôi mua kem hoa quả, nhưng Tiểu Vương không biết chọn gì. Nhân viên nói với cậu ấy: "Anh ăn thử kem trà xanh đi, ai ăn cũng khen ngon." — "小王不知道选什么" → B.' },
          { n: 24, prompt: '★服务员为什么让小王尝尝绿茶冰激凌？',
            options: [{ key: 'A', text: '只有这个' }, { key: 'B', text: '很多人都说好吃' }, { key: 'C', text: '小王不爱吃水果', py: 'Xiǎo Wáng bú ài chī shuǐguǒ' }], answer: 'B',
            vn: '"谁吃了都说好吃" — ai ăn cũng khen ngon → B. Tiệm có nhiều loại kem (A sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '我太（ kě ）了，请给我一杯水。', promptPy: 'Wǒ tài kě le, qǐng gěi wǒ yì bēi shuǐ.', answer: '渴',
            vn: 'Tôi khát quá, cho tôi một cốc nước. — 渴 kě: khát.' },
          { n: 26, input: true, maxlength: 2, prompt: '你想喝什么（ yǐn ）料？', promptPy: 'Nǐ xiǎng hē shénme yǐnliào?', answer: '饮',
            vn: 'Bạn muốn uống gì? — 饮料 yǐnliào: đồ uống.' },
          { n: 27, input: true, maxlength: 2, prompt: '这是我们的菜（ dān ），请您看看。', promptPy: 'Zhè shì wǒmen de càidān, qǐng nín kànkan.', answer: '单',
            vn: 'Đây là thực đơn của chúng tôi, mời anh xem. — 菜单 càidān: thực đơn.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '马上',
            img: IMG + 'q28.webp', prompt: '马上', promptPy: 'mǎshàng', placeholder: 'Viết câu có từ 马上…',
            script: '请您稍等，外卖马上送到。', vn: 'Xin chờ một chút, đồ ăn sẽ được giao tới ngay.' },
          { n: 29, free: true, must: '热情', img: IMG + 'q29.webp', prompt: '热情', promptPy: 'rèqíng', placeholder: 'Viết câu có từ 热情…',
            script: '这家饭店的服务员特别热情。', vn: 'Nhân viên của nhà hàng này đặc biệt nhiệt tình.' },
          { n: 30, free: true, must: '选', img: IMG + 'q30.webp', prompt: '选', promptPy: 'xuǎn', placeholder: 'Viết câu có từ 选…',
            script: '你喜欢什么就选什么吧。', vn: 'Bạn thích gì thì chọn nấy nhé.' }
        ] }
    ] }
  ]
};
