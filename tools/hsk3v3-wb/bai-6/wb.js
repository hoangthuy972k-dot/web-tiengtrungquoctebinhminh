// Bai 6 — 高铁上还可以点外卖. Sach bai tap trang 047–056 = PDF trang 52–61.
// Dap an: HSK3--学练手册(习题答案).pdf trang 6 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 047–049) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2B 3C 4C 5A 6A 7C 8B 9C 10C).
const IMG = '/images/hsk3v3-bai-6-wb/';
const B_GHEP = [
  { key: 'A', text: '好的，我会慢慢开的。' },
  { key: 'B', text: '妈妈说她要带我去海边。' },
  { key: 'C', text: '不会，从这儿走过去只要十分钟。' },
  { key: 'D', text: '爸爸让我晚上九点以前必须回家。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '从这儿往前走，到了第一个路口，往右走就是。', py: 'Cóng zhèr wǎng qián zǒu, dàole dì-yī gè lùkǒu, wǎng yòu zǒu jiù shì.' }
];
const B_TU = [
  { key: 'A', text: '选择' }, { key: 'B', text: '高铁' }, { key: 'C', text: '小心' },
  { key: 'D', text: '电梯' }, { key: 'E', text: '鞋' }, { key: 'F', text: '检票' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '高铁上还可以点外卖',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 心 và 必', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['心 xīn', '小心 xiǎoxīn — cẩn thận', '小心，前面有车！<br>Cẩn thận, phía trước có xe!'],
        ['必 bì', '必须 bìxū — nhất định phải', '这个工作今天必须做完。<br>Việc này hôm nay nhất định phải làm xong.']
      ],
        note: '必 = 心 thêm một nét phẩy (丿) cắt chéo qua. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 过', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['去过', 'qùguo — đã từng đi', '如果你去过北京，咱们就去西安。<br>Nếu bạn đã từng đi Bắc Kinh rồi thì chúng ta đi Tây An.'],
        ['难过', 'nánguò — buồn', '听完后，我觉得越来越难过。<br>Nghe xong, tôi thấy càng ngày càng buồn.']
      ],
        note: '过 đọc thanh nhẹ <b>guo</b> khi đứng sau động từ chỉ trải nghiệm (去过, 看过); đọc <b>guò</b> khi là động từ / trong từ như 难过, 过去.' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Đi lại, giao thông<br>交通出行', '飞机 fēijī (máy bay) · 高铁 gāotiě (tàu cao tốc) · 火车 huǒchē (tàu hỏa) · 地铁 dìtiě (tàu điện ngầm) · 汽车 qìchē (ô tô) · 出租车 chūzūchē (taxi) · 公交车 gōngjiāochē (xe buýt) · 自行车 zìxíngchē (xe đạp) · 走路 zǒulù (đi bộ)<br>' +
          '车站 chēzhàn (bến xe, ga) · 机场 jīchǎng (sân bay) · 机票 jīpiào (vé máy bay) · 起飞 qǐfēi (cất cánh) · 晚点 wǎndiǎn (trễ giờ) · 检票 jiǎnpiào (soát vé) · 路上 lùshang (trên đường) · 路 lù (đường) · 路口 lùkǒu (ngã tư, giao lộ) · 红绿灯 hónglǜdēng (đèn giao thông) · 等 děng (đợi) · 刷 shuā (quẹt, quét thẻ)'],
        ['Phương hướng, vị trí<br>方位方向', '东 dōng (đông) · 南 nán (nam) · 西 xī (tây) · 北 běi (bắc) · 前 qián (trước) · 后 hòu (sau) · 左 zuǒ (trái) · 右 yòu (phải) · 上 shàng (trên) · 下 xià (dưới) · 里 lǐ (trong) · 外 wài (ngoài)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['汽车 qìchē<br>ô tô', '一辆汽车 — một chiếc ô tô<br>他开的是一辆黑色的汽车。<br>Anh ấy lái một chiếc ô tô màu đen.', 'A：听说你们家买了新汽车？<br>B：是的，买了汽车后出门方便多了。<br>A: Nghe nói nhà bạn mua ô tô mới à? — B: Đúng vậy, mua ô tô rồi ra ngoài tiện hơn nhiều.'],
        ['东 dōng<br>phía đông', '东边 — phía đông<br>银行在东边。<br>Ngân hàng ở phía đông.', 'A：请问，医院在哪儿？<br>B：从这儿一直往东走，你就能看到。<br>A: Xin hỏi, bệnh viện ở đâu? — B: Từ đây cứ đi thẳng về phía đông là bạn sẽ thấy.'],
        ['南 nán<br>phía nam', '南边 — phía nam<br>书店在银行南边。<br>Hiệu sách ở phía nam ngân hàng.', 'A：请问，太阳花园怎么走？<br>B：往前走，地铁站南边就是太阳花园。<br>A: Xin hỏi, đến Thái Dương Hoa Viên đi thế nào? — B: Đi thẳng, phía nam ga tàu điện ngầm chính là Thái Dương Hoa Viên.'],
        ['西 xī<br>phía tây', '西边 — phía tây<br>高铁站在路西边。<br>Ga tàu cao tốc ở phía tây con đường.', 'A：请问，398路公交车站在哪儿？<br>B：往前走，到了路口再往西走。<br>A: Xin hỏi, bến xe buýt tuyến 398 ở đâu? — B: Đi thẳng, đến ngã tư thì rẽ về phía tây.'],
        ['北 běi<br>phía bắc', '北边 — phía bắc<br>北边的那个楼里有一家不错的咖啡馆。<br>Trong tòa nhà phía bắc kia có một quán cà phê khá ngon.', 'A：您坐错了。您下一站下车，到路的北边坐车。<br>B：好的，谢谢您。<br>A: Ông đi nhầm xe rồi. Ông xuống ở trạm sau, sang phía bắc con đường mà bắt xe. — B: Vâng, cảm ơn anh.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['坐高铁<br>zuò gāotiě — đi tàu cao tốc', '高铁票<br>gāotiě piào — vé tàu cao tốc'],
        ['公交车站<br>gōngjiāochē zhàn — bến xe buýt', '检票口<br>jiǎnpiàokǒu — cửa soát vé'],
        ['打/叫出租车<br>dǎ / jiào chūzūchē — gọi taxi', '骑自行车<br>qí zìxíngchē — đi xe đạp'],
        ['前面的路口<br>qiánmiàn de lùkǒu — ngã tư phía trước', '等红灯<br>děng hóngdēng — chờ đèn đỏ'],
        ['飞机起飞<br>fēijī qǐfēi — máy bay cất cánh', '火车晚点<br>huǒchē wǎndiǎn — tàu hỏa trễ giờ'],
        ['刷护照<br>shuā hùzhào — quét hộ chiếu', '去机场的路上<br>qù jīchǎng de lùshang — trên đường ra sân bay']
      ] },
      // TU GIAI (file dap an khong co phan nay). (2) 路上的汽车 (xe co tren duong; 出租车 cung tam duoc nhung 汽车 la tu chung);
      // (3) "也很快就能到" -> 高铁 (nhanh, thay cho may bay); (5) 在路口等红灯.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '他们的火车', after: '了，咱们还要再等两个小时。', answer: '晚点' },
          { before: '现在都晚上十点多了，路上的', after: '还这么多。', answer: '汽车', accept: ['出租车'] },
          { before: '如果你不想坐飞机，咱们就坐', after: '，也很快就能到。', answer: '高铁' },
          { before: '我已经到机场了，还有一个多小时，飞机就', after: '了。', answer: '起飞' },
          { before: '请您往前开，我们在路口等', after: '，马上就能过去了。', answer: '红绿灯' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '就要放假了，你打算做什么？', answer: 'B',
            vn: 'Sắp được nghỉ rồi, bạn định làm gì? — B: Mẹ nói sẽ đưa tôi đi biển.' },
          { n: 12, letters: L5, prompt: '下雪了，你路上一定要小心。', answer: 'A',
            vn: 'Tuyết rơi rồi, đi đường nhất định phải cẩn thận nhé. — A: Vâng, tôi sẽ lái thật chậm.' },
          { n: 13, letters: L5, prompt: '不好意思，请问地铁站怎么走？', answer: 'F',
            vn: 'Xin lỗi, cho hỏi đến ga tàu điện ngầm đi thế nào? — F: Từ đây đi thẳng, đến ngã tư đầu tiên rẽ phải là tới.' },
          { n: 14, letters: L5, prompt: '你一直看手表，有什么急事吗？', answer: 'D',
            vn: 'Bạn cứ nhìn đồng hồ mãi, có việc gì gấp à? — D: Bố bắt tôi phải về nhà trước 9 giờ tối.' },
          { n: 15, letters: L5, prompt: '还有30分钟电影就开始了，咱们会迟到吗？', answer: 'C',
            vn: 'Còn 30 phút nữa là phim bắt đầu, chúng ta có bị muộn không? — C: Không đâu, từ đây đi bộ qua chỉ mất mười phút.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '该（　）了。拿好票，我们现在就过去吧。', answer: 'F',
            vn: 'Đến giờ soát vé rồi. Cầm vé cẩn thận, chúng ta qua đó ngay thôi. — 该检票了: đến lúc soát vé rồi.' },
          { n: 17, letters: L5, prompt: '路上（　）点儿，到了那儿就给我打电话。', promptPy: 'Lùshang (　) diǎnr, dàole nàr jiù gěi wǒ dǎ diànhuà.', answer: 'C',
            vn: 'Đi đường cẩn thận nhé, đến nơi thì gọi điện cho tôi. — 小心点儿: cẩn thận một chút.' },
          { n: 18, letters: L5, prompt: '你可以（　）这家宾馆，就在火车站旁边，方便得很。', answer: 'A',
            vn: 'Bạn có thể chọn khách sạn này, ngay cạnh ga tàu hỏa, tiện lắm. — 选择: chọn, lựa chọn.' },
          { n: 19, letters: L5, prompt: 'A：你怎么还没到？大家都在等你。\nB：不好意思，我已经到楼下了，马上就坐（　）上去。', answer: 'D',
            vn: 'A: Sao bạn vẫn chưa đến? Mọi người đều đang đợi bạn.\nB: Xin lỗi, tôi đến dưới tòa nhà rồi, đi thang máy lên ngay đây. — 坐电梯: đi thang máy.' },
          { n: 20, letters: L5, prompt: 'A：我们这次旅游还坐（　），怎么样？\nB：行，又快又舒服，也比坐飞机方便。', answer: 'B',
            vn: 'A: Chuyến du lịch lần này chúng ta vẫn đi tàu cao tốc nhé, thế nào?\nB: Được, vừa nhanh vừa thoải mái, lại tiện hơn đi máy bay. — 坐高铁: đi tàu cao tốc.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '我爱人对现在住的房子比较满意。房子虽然不大，但很干净，也很安静，住着很舒服。\n★他现在的房子怎么样？',
            promptPy: 'Wǒ àiren duì xiànzài zhù de fángzi bǐjiào mǎnyì. Fángzi suīrán bú dà, dàn hěn gānjìng, yě hěn ānjìng, zhùzhe hěn shūfu.\nTā xiànzài de fángzi zěnmeyàng?',
            options: [{ key: 'A', text: '很大' }, { key: 'B', text: '很舒服' }, { key: 'C', text: '不太安静' }], answer: 'B',
            vn: 'Vợ (chồng) tôi khá hài lòng với căn nhà đang ở. Nhà tuy không rộng nhưng rất sạch, cũng rất yên tĩnh, ở rất thoải mái. — "住着很舒服" → B. Nhà không rộng (A sai), rất yên tĩnh (C sai).' },
          { n: 22, prompt: '乐乐，你从酒店出来后往西走，到第一个红绿灯再往北走，就能看到咖啡馆了，我就在那儿等你。\n★他在哪儿等乐乐？',
            promptPy: 'Lèle, nǐ cóng jiǔdiàn chūlai hòu wǎng xī zǒu, dào dì-yī gè hónglǜdēng zài wǎng běi zǒu, jiù néng kàndào kāfēiguǎn le, wǒ jiù zài nàr děng nǐ.\nTā zài nǎr děng Lèle?',
            options: [{ key: 'A', text: '酒店' }, { key: 'B', text: '咖啡馆' }, { key: 'C', text: '红绿灯路口' }], answer: 'B',
            vn: 'Lạc Lạc, con ra khỏi khách sạn thì đi về phía tây, đến cột đèn giao thông đầu tiên thì rẽ về phía bắc là thấy quán cà phê, bố (mẹ) đợi con ở đó. — "我就在那儿等你": "那儿" là quán cà phê → B.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '明天我是这么打算的：如果天气好，咱们就去爬山，在外面拍拍照、吃吃东西。这几天天气越来越热了，咱们早点儿去，下午就回来。如果明天下雨，咱们就在家里看电影吧。\n★如果明天不下雨，他打算做什么？',
            promptPy: 'Míngtiān wǒ shì zhème dǎsuàn de: rúguǒ tiānqì hǎo, zánmen jiù qù páshān, zài wàimian pāipai zhào, chīchi dōngxi. Zhè jǐ tiān tiānqì yuèláiyuè rè le, zánmen zǎo diǎnr qù, xiàwǔ jiù huílai. Rúguǒ míngtiān xiàyǔ, zánmen jiù zài jiāli kàn diànyǐng ba.\nRúguǒ míngtiān bú xiàyǔ, tā dǎsuàn zuò shénme?',
            options: [{ key: 'A', text: '去外面爬山' }, { key: 'B', text: '在家看电影' }, { key: 'C', text: '去超市买东西' }], answer: 'A',
            vn: 'Ngày mai tôi định thế này: nếu trời đẹp thì chúng ta đi leo núi, chụp ảnh, ăn uống ở ngoài. Mấy hôm nay trời càng ngày càng nóng, chúng ta đi sớm một chút, buổi chiều thì về. Nếu mai trời mưa thì chúng ta ở nhà xem phim nhé. — Trời không mưa (trời đẹp) → đi leo núi → A. Xem phim ở nhà là khi trời mưa (B sai).' },
          { n: 24, prompt: '★他为什么想下午回来？',
            options: [{ key: 'A', text: '天气热' }, { key: 'B', text: '下午会下雨' }, { key: 'C', text: '想看个电影' }], answer: 'A',
            vn: '"这几天天气越来越热了，咱们早点儿去，下午就回来" — vì trời nóng nên đi sớm về sớm → A.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '你用（ ěr ）机听音乐吧，我要学习了。', promptPy: 'Nǐ yòng ěrjī tīng yīnyuè ba, wǒ yào xuéxí le.', answer: '耳',
            vn: 'Bạn dùng tai nghe mà nghe nhạc nhé, tôi phải học bài rồi. — 耳机 ěrjī: tai nghe.' },
          { n: 26, input: true, maxlength: 2, prompt: '（ rú ）果您想换本书，就告诉我，我帮您拿。', promptPy: 'Rúguǒ nín xiǎng huàn běn shū, jiù gàosu wǒ, wǒ bāng nín ná.', answer: '如',
            vn: 'Nếu ông (bà) muốn đổi cuốn sách khác thì cứ nói với tôi, tôi lấy giúp. — 如果 rúguǒ: nếu.' },
          { n: 27, input: true, maxlength: 2, prompt: '你再检（ chá ）一下，护照和机票都带好了吗？', promptPy: 'Nǐ zài jiǎnchá yíxià, hùzhào hé jīpiào dōu dàihǎo le ma?', answer: '查',
            vn: 'Bạn kiểm tra lại một chút xem, hộ chiếu và vé máy bay đã mang đủ chưa? — 检查 jiǎnchá: kiểm tra.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '电梯',
            img: IMG + 'q28.webp', prompt: '电梯', promptPy: 'diàntī', placeholder: 'Viết câu có từ 电梯…',
            script: '电梯里的人太多了。', vn: 'Trong thang máy đông người quá.' },
          { n: 29, free: true, must: '安静', img: IMG + 'q29.webp', prompt: '安静', promptPy: 'ānjìng', placeholder: 'Viết câu có từ 安静…',
            script: '他喜欢安静的地方。', vn: 'Anh ấy thích những nơi yên tĩnh.' },
          { n: 30, free: true, must: '检查', img: IMG + 'q30.webp', prompt: '检查', promptPy: 'jiǎnchá', placeholder: 'Viết câu có từ 检查…',
            script: '我今天要带女儿去医院检查。', vn: 'Hôm nay tôi phải đưa con gái đến bệnh viện khám.' }
        ] }
    ] }
  ]
};
