// Bai 16 — 我听说有的熊猫出国了. Sach bai tap trang 139–147 = PDF trang 144–152.
// Dap an: HSK3--学练手册(习题答案).pdf trang 16 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 139–140) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2B 3A 4C 5B 6A 7B 8A 9B 10B).
const IMG = '/images/hsk3v3-bai-16-wb/';
const B_GHEP = [
  { key: 'A', text: '一般来说，它吃饱了的话就睡觉了。' },
  { key: 'B', text: '医院就在前面那条街上，带它去看看吧。', py: 'Yīyuàn jiù zài qiánmian nà tiáo jiē shang, dài tā qù kànkan ba.' },
  { key: 'C', text: '不是，这是我去中国西南看大熊猫的时候照的。' },
  { key: 'D', text: '它一边动一边听，它能听见我们听不见的声音。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '公园和动物园我都想去。' }
];
const B_TU = [
  { key: 'A', text: '其实' }, { key: 'B', text: '好像' }, { key: 'C', text: '关于' },
  { key: 'D', text: '认得' }, { key: 'E', text: '鞋' }, { key: 'F', text: '身边' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我听说有的熊猫出国了',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 能 và 熊', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['能 néng', '只能 zhǐ néng — chỉ có thể<br>不能 bù néng — không thể', '今天关门了，只能明天再去。<br>Hôm nay đóng cửa rồi, chỉ có thể mai đi lại.'],
        ['熊 xióng<br>能 + 灬', '熊猫 xióngmāo — gấu trúc', '大熊猫可爱极了。<br>Gấu trúc lớn đáng yêu vô cùng.']
      ],
        note: '熊 chính là 能 thêm bộ 灬 (bốn chấm) ở dưới. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 长', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['校长', 'xiàozhǎng — hiệu trưởng', '校长给新生讲了一个关于野生动物的故事，大家听得很认真。<br>Thầy hiệu trưởng kể cho học sinh mới một câu chuyện về động vật hoang dã, mọi người nghe rất chăm chú.'],
        ['很长', 'hěn cháng — rất dài', '夏天白天很长，所以有的动物园比冬天晚关门一个小时。<br>Mùa hè ban ngày rất dài, nên có vườn thú đóng cửa muộn hơn mùa đông một tiếng.']
      ],
        note: '长 đọc <b>zhǎng</b> khi chỉ người đứng đầu hoặc "lớn lên" (校长, 长大); đọc <b>cháng</b> khi nghĩa là "dài".' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Động vật và sự vật liên quan<br>动物和相关事物', '大熊猫 dàxióngmāo (gấu trúc lớn) · 牛 niú (bò) · 羊 yáng (dê, cừu) · 鸡 jī (gà) · 狗 gǒu (chó) · 猫 māo (mèo) · 鸟 niǎo (chim) · ' +
          '动物 dòngwù (động vật) · 动物园 dòngwùyuán (vườn thú) · 国宝 guóbǎo (báu vật quốc gia) · 头 tóu (con — lượng từ cho bò, dê…)'],
        ['Trạng thái và đặc điểm<br>动物状态和特点', '可爱 kě\'ài (đáng yêu) · 脏 zāng (bẩn) · 饱 bǎo (no) · 野生 yěshēng (hoang dã) · 奇怪 qíguài (kỳ lạ)'],
        ['Cơ thể và động tác<br>身体及动作', '嘴 zuǐ (miệng) · 脸 liǎn (mặt) · 脚 jiǎo (bàn chân) · 眼睛 yǎnjing (mắt) · 养 yǎng (nuôi) · 张 zhāng (há, mở) · ' +
          '照顾 zhàogù (chăm sóc) · 喜爱 xǐ\'ài (yêu thích) · 认得 rènde (nhận ra, quen biết)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['头 tóu<br>con (lượng từ cho bò, dê…)', '一头牛 — một con bò<br>那头小牛真可爱。<br>Con bê kia thật đáng yêu.', 'A：草地上有什么？<br>B：草地上有一头牛和一头羊。<br>A: Trên bãi cỏ có gì? — B: Trên bãi cỏ có một con bò và một con dê.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['国宝大熊猫<br>guóbǎo dàxióngmāo — gấu trúc, báu vật quốc gia', '喜爱小动物<br>xǐ\'ài xiǎo dòngwù — yêu thích động vật nhỏ'],
        ['野生动物<br>yěshēng dòngwù — động vật hoang dã', '养猫<br>yǎng māo — nuôi mèo'],
        ['一只猫<br>yì zhī māo — một con mèo', '一头牛<br>yì tóu niú — một con bò'],
        ['一只/条狗<br>yì zhī / tiáo gǒu — một con chó', '一只大熊猫<br>yì zhī dàxióngmāo — một con gấu trúc'],
        ['张嘴<br>zhāng zuǐ — há miệng', '脸上很脏<br>liǎn shang hěn zāng — mặt rất bẩn'],
        ['黄牛<br>huángniú — bò vàng', '可爱的小鸡<br>kě\'ài de xiǎo jī — chú gà con đáng yêu']
      ] },
      // TU GIAI (file dap an khong co phan nay).
      // (1) "那些（ ）在草地上吃草" — 牛 va 羊 deu hop; engine chi cham mot dap an -> lay 牛 (co 一头牛/黄牛 trong bai), ghi ro trong hint.
      // (2) 可爱的动物 (动物园里…); (3) 脸 (变红); (4) 养 (养小猫); (5) 脚 (dat ban -> rua chan cho cho).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu. Câu 1 điền 羊 cũng hợp nghĩa, ở đây lấy 牛.', maxlength: 4,
        items: [
          { before: '你看，那些', after: '在草地上吃草呢。', answer: '牛', accept: ['羊'] },
          { before: '动物园里有很多可爱的', after: '。', answer: '动物' },
          { before: '听见我们的话，他的', after: '马上变红了。', answer: '脸' },
          { before: '虽然', after: '小猫有点儿难，但是我还是想试试。', answer: '养' },
          { before: '外面下雨了，地上挺脏的，你给小狗洗洗', after: '吧。', answer: '脚' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '这张照片是在北京动物园照的吗？', answer: 'C',
            vn: 'Bức ảnh này chụp ở vườn thú Bắc Kinh à? — C: Không phải, đây là ảnh tôi chụp khi đi miền Tây Nam Trung Quốc xem gấu trúc.' },
          { n: 12, letters: L5, prompt: '你怎么知道它还想吃东西？', answer: 'A',
            vn: 'Sao bạn biết nó vẫn còn muốn ăn? — A: Thường thì nó ăn no rồi là đi ngủ.' },
          { n: 13, letters: L5, prompt: '它看上去有点儿奇怪，半天没动了。', answer: 'B',
            vn: 'Trông nó hơi lạ, cả buổi không nhúc nhích. — B: Bệnh viện ở ngay con phố phía trước, đưa nó đi khám xem.' },
          { n: 14, letters: L5, prompt: '这个周末你想去哪儿玩？', answer: 'F',
            vn: 'Cuối tuần này bạn muốn đi đâu chơi? — F: Công viên và vườn thú tôi đều muốn đi.' },
          { n: 15, letters: L5, prompt: '这只小狗真可爱，它的耳朵为什么一直动？', answer: 'D',
            vn: 'Chú chó con này dễ thương quá, sao tai nó cứ động đậy mãi thế? — D: Nó vừa động tai vừa nghe, nó nghe được những âm thanh mà chúng ta không nghe thấy.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '大家都以为他的工作不累，（　）他每天早上五点多就起床，去照顾这些小动物。', answer: 'A',
            promptPy: 'Dàjiā dōu yǐwéi tā de gōngzuò bú lèi, (　) tā měitiān zǎoshang wǔ diǎn duō jiù qǐchuáng, qù zhàogù zhèxiē xiǎo dòngwù.',
            vn: 'Mọi người đều tưởng công việc của anh ấy không mệt, thật ra mỗi sáng hơn năm giờ anh ấy đã dậy đi chăm sóc những con vật nhỏ này. — 以为…，其实…: cứ tưởng…, thật ra…' },
          { n: 17, letters: L5, prompt: '我看了一个（　）大熊猫的节目，现在非常想去动物园看大熊猫。', answer: 'C',
            promptPy: 'Wǒ kànle yí gè (　) dàxióngmāo de jiémù, xiànzài fēicháng xiǎng qù dòngwùyuán kàn dàxióngmāo.',
            vn: 'Tôi đã xem một chương trình về gấu trúc, giờ rất muốn đến vườn thú xem gấu trúc. — 关于大熊猫的节目: chương trình về gấu trúc.' },
          { n: 18, letters: L5, prompt: '虽然我不能每天在它（　），但是一有时间我就回家看它。', answer: 'F',
            vn: 'Tuy tôi không thể ngày nào cũng ở bên nó, nhưng hễ có thời gian là tôi về nhà thăm nó. — 在它身边: ở bên cạnh nó.' },
          { n: 19, letters: L5, prompt: 'A：前面那只猫（　）你家的猫。\nB：不是，那是我邻居的猫。', answer: 'B',
            vn: 'A: Con mèo phía trước hình như là mèo nhà bạn.\nB: Không phải, đó là mèo nhà hàng xóm tôi. — 好像: hình như.' },
          { n: 20, letters: L5, prompt: 'A：你家的狗看见你以后为什么一直叫？\nB：我离开家时间太久了，它已经不（　）我了。', answer: 'D',
            vn: 'A: Sao chó nhà bạn thấy bạn lại cứ sủa mãi vậy?\nB: Tôi xa nhà lâu quá, nó không còn nhận ra tôi nữa. — 认得: nhận ra, quen biết.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '这几只小鸟现在什么都不会做，只会张着嘴等吃的，差不多一个星期以后才能用眼睛看这个世界。\n★小鸟现在怎么样？',
            promptPy: 'Zhè jǐ zhī xiǎoniǎo xiànzài shénme dōu bú huì zuò, zhǐ huì zhāngzhe zuǐ děng chī de, chàbuduō yí gè xīngqī yǐhòu cái néng yòng yǎnjing kàn zhège shìjiè.\nXiǎoniǎo xiànzài zěnmeyàng?',
            options: [{ key: 'A', text: '会自己找吃的' }, { key: 'B', text: '能看清楚东西' }, { key: 'C', text: '只会等着吃东西', py: 'zhǐ huì děngzhe chī dōngxi' }], answer: 'C',
            vn: 'Mấy chú chim non này bây giờ chưa biết làm gì cả, chỉ biết há miệng chờ ăn, khoảng một tuần nữa mới mở mắt nhìn thế giới này được. — "只会张着嘴等吃的" → C. Một tuần sau mới nhìn được (B sai).' },
          { n: 22, prompt: '这种鱼很奇怪，嘴像鸟一样，长长的，还有两只大大的眼睛，它在水里游的时候，一会儿快一会儿慢，好像在做游戏。\n★这种鱼：',
            promptPy: 'Zhè zhǒng yú hěn qíguài, zuǐ xiàng niǎo yíyàng, chángcháng de, hái yǒu liǎng zhī dàdà de yǎnjing, tā zài shuǐ li yóu de shíhou, yíhuìr kuài yíhuìr màn, hǎoxiàng zài zuò yóuxì.\nZhè zhǒng yú:',
            options: [{ key: 'A', text: '喜欢做游戏' }, { key: 'B', text: '游得一直很快', py: 'yóu de yìzhí hěn kuài' }, { key: 'C', text: '看起来很奇怪' }], answer: 'C',
            vn: 'Loài cá này rất lạ, miệng dài giống như mỏ chim, còn có hai con mắt to, khi bơi dưới nước lúc nhanh lúc chậm, giống như đang chơi trò chơi. — "这种鱼很奇怪" → C. "好像在做游戏" chỉ là so sánh (A sai), lúc nhanh lúc chậm (B sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '丽丽发现她的小猫好像生病了，它一直在沙发上，不吃东西也不愿意动。丽丽很担心，决定带它去家附近的动物医院看看。到了医院门口，她才知道医院冬天比夏天早关门一个小时，现在医生都下班了。丽丽只能先把小猫带回家照顾，明天早上再带它去看医生。\n★丽丽带小猫去医院时，发现：',
            promptPy: 'Lìlì fāxiàn tā de xiǎomāo hǎoxiàng shēngbìng le, tā yìzhí zài shāfā shang, bù chī dōngxi yě bú yuànyì dòng. Lìlì hěn dānxīn, juédìng dài tā qù jiā fùjìn de dòngwù yīyuàn kànkan. Dàole yīyuàn ménkǒu, tā cái zhīdao yīyuàn dōngtiān bǐ xiàtiān zǎo guānmén yí gè xiǎoshí, xiànzài yīshēng dōu xiàbān le. Lìlì zhǐ néng xiān bǎ xiǎomāo dài huí jiā zhàogù, míngtiān zǎoshang zài dài tā qù kàn yīshēng.\nLìlì dài xiǎomāo qù yīyuàn shí, fāxiàn:',
            options: [{ key: 'A', text: '医生很忙' }, { key: 'B', text: '小猫病好了' }, { key: 'C', text: '医院关门了' }], answer: 'C',
            vn: 'Lệ Lệ phát hiện mèo con của mình hình như bị ốm, nó cứ nằm trên ghế sô-pha, không ăn cũng không chịu động đậy. Lệ Lệ rất lo, quyết định đưa nó đến bệnh viện thú y gần nhà. Đến cổng bệnh viện cô mới biết mùa đông bệnh viện đóng cửa sớm hơn mùa hè một tiếng, giờ bác sĩ đều tan làm rồi. Lệ Lệ đành đưa mèo về nhà chăm sóc trước, sáng mai lại đưa nó đi khám. — Bệnh viện đã đóng cửa, bác sĩ tan làm → C.' },
          { n: 24, prompt: '★丽丽什么时候再带小猫去医院？', promptPy: 'Lìlì shénme shíhou zài dài xiǎomāo qù yīyuàn?',
            options: [{ key: 'A', text: '今天晚上' }, { key: 'B', text: '明天早上' }, { key: 'C', text: '明天中午' }], answer: 'B',
            vn: '"明天早上再带它去看医生" — sáng mai lại đưa nó đi khám → B.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '它已经吃（ bǎo ）了，现在在我脚边睡觉呢。', promptPy: 'Tā yǐjīng chībǎo le, xiànzài zài wǒ jiǎo biān shuìjiào ne.', answer: '饱',
            vn: 'Nó ăn no rồi, giờ đang ngủ bên chân tôi. — 吃饱 chī bǎo: ăn no.' },
          { n: 26, input: true, maxlength: 2, prompt: '我妹妹从小就喜欢小动（ wù ），她一直想养一条小狗。', answer: '物',
            promptPy: 'Wǒ mèimei cóng xiǎo jiù xǐhuan xiǎo dòngwù, tā yìzhí xiǎng yǎng yì tiáo xiǎogǒu.',
            vn: 'Em gái tôi từ nhỏ đã thích động vật nhỏ, em ấy luôn muốn nuôi một chú chó con. — 动物 dòngwù: động vật.' },
          { n: 27, input: true, maxlength: 2, prompt: '这只小鸟一直（ zhāng ）着嘴，等着吃东西。', promptPy: 'Zhè zhī xiǎoniǎo yìzhí zhāngzhe zuǐ, děngzhe chī dōngxi.', answer: '张',
            vn: 'Chú chim non này cứ há miệng chờ ăn. — 张嘴 zhāng zuǐ: há miệng.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '脏',
            img: IMG + 'q28.webp', prompt: '脏', promptPy: 'zāng', placeholder: 'Viết câu có từ 脏…',
            script: '男孩的衣服被小狗弄脏了。', vn: 'Quần áo của cậu bé bị chú chó làm bẩn rồi.' },
          { n: 29, free: true, must: '脸', img: IMG + 'q29.webp', prompt: '脸', promptPy: 'liǎn', placeholder: 'Viết câu có từ 脸…',
            script: '他每天早上都会洗脸。', vn: 'Sáng nào anh ấy cũng rửa mặt.' },
          { n: 30, free: true, must: '照顾', img: IMG + 'q30.webp', prompt: '照顾', promptPy: 'zhàogù', placeholder: 'Viết câu có từ 照顾…',
            script: '她正在照顾这些小狗。', vn: 'Cô ấy đang chăm sóc những chú chó con này.' }
        ] }
    ] }
  ]
};
