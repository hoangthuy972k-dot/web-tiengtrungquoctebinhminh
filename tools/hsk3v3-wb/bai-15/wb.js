// Bai 15 — 我是半个南京人. Sach bai tap trang 130–138 = PDF trang 135–143.
// Dap an: HSK3--学练手册(习题答案).pdf trang 15 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 130–131) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1A 2B 3C 4C 5C 6B 7B 8C 9A 10B).
// Bang tap viet 形近字 trong sach ghi 不怕 va 拍照 moi tu hai lan — o day chi ghi mot lan.
const IMG = '/images/hsk3v3-bai-15-wb/';
const B_GHEP = [
  { key: 'A', text: '对，我去过中国十个以上的城市。', py: 'Duì, wǒ qùguo Zhōngguó shí gè yǐshàng de chéngshì.' },
  { key: 'B', text: '我不太了解他，只跟他见过几次。', py: 'Wǒ bú tài liǎojiě tā, zhǐ gēn tā jiànguo jǐ cì.' },
  { key: 'C', text: '我知道有一位老人很了解那里。', py: 'Wǒ zhīdào yǒu yí wèi lǎorén hěn liǎojiě nàli.' },
  { key: 'D', text: '不是的，昨晚看足球比赛，睡得太晚了。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '我明天要去南京旅游，把它放到朋友家了。' }
];
const B_TU = [
  { key: 'A', text: '了解' }, { key: 'B', text: '游客' }, { key: 'C', text: '根据' },
  { key: 'D', text: '遇见' }, { key: 'E', text: '鞋' }, { key: 'F', text: '附近' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我是半个南京人',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 怕 và 拍', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['怕 pà<br>忄 + 白', '不怕 bú pà — không sợ', '我还有很多时间，不怕干不完。<br>Tôi vẫn còn nhiều thời gian, không sợ làm không xong.'],
        ['拍 pāi<br>扌 + 白', '拍照 pāizhào — chụp ảnh', '你能帮我们拍张照吗？<br>Bạn chụp giúp chúng tôi một tấm ảnh được không?']
      ],
        note: 'Hai chữ đều có 白 bên phải: 怕 có bộ 忄 (tâm đứng — tâm trạng: sợ), 拍 có bộ 扌 (tay — động tác: vỗ, chụp). Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 了', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['为了', 'wèile — để, vì', '为了早点儿出去玩，孩子不一会儿就把作业写完了。<br>Để được ra ngoài chơi sớm, đứa trẻ loáng một cái đã làm xong bài tập.'],
        ['了解', 'liǎojiě — hiểu, biết rõ', '根据我对他的了解，他一定会想办法帮助你的。<br>Theo những gì tôi biết về anh ấy, anh ấy nhất định sẽ tìm cách giúp bạn.']
      ],
        note: '了 đọc nhẹ <b>le</b> khi là trợ từ (写完了) và trong 为了 wèile; đọc <b>liǎo</b> trong 了解 và trong bổ ngữ khả năng: 吃不了 chī bu liǎo (ăn không hết).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Khu dân cư & phương hướng<br>社区与方位', '小区 xiǎoqū (khu dân cư, khu chung cư) · 附近 fùjìn (gần, lân cận) · 马路 mǎlù (đường cái) · 经过 jīngguò (đi qua, ngang qua) · 花园 huāyuán (vườn hoa) · 公园 gōngyuán (công viên) · 路边 lùbiān (ven đường)<br>' +
          '东 dōng (đông) · 南 nán (nam) · 西 xī (tây) · 北 běi (bắc) · 西北 xīběi (tây bắc) · 西南 xīnán (tây nam) · 东北 dōngběi (đông bắc) · 东南 dōngnán (đông nam)'],
        ['Du lịch & cảnh quan<br>旅行与景观', '旅游 lǚyóu (du lịch) · 游客 yóukè (du khách) · 景点 jǐngdiǎn (điểm tham quan) · 外地 wàidì (nơi khác, tỉnh khác) · 山 shān (núi) · 河 hé (sông) · 海 hǎi (biển) · 黄河 Huáng Hé (sông Hoàng Hà) · 南京 Nánjīng (Nam Kinh) · 有名 yǒumíng (nổi tiếng) · 草地 cǎodì (bãi cỏ)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['路边 lùbiān<br>ven đường', '站在路边 — đứng ở ven đường<br>我把自行车放在路边了。<br>Tôi để xe đạp ở ven đường rồi.', 'A：我还没看见你，你在哪儿？<br>B：我站在路边，穿着一件黄色的衣服。<br>A: Tôi vẫn chưa thấy bạn, bạn ở đâu? — B: Tôi đứng ở ven đường, mặc một chiếc áo màu vàng.'],
        ['西南 xīnán<br>tây nam', '西南风 — gió tây nam<br>中国的西南有很多高山。<br>Vùng tây nam Trung Quốc có nhiều núi cao.', 'A：你去过中国的西南吗？<br>B：没去过，我只去过上海。<br>A: Bạn đã đến vùng tây nam Trung Quốc chưa? — B: Chưa, tôi mới đến Thượng Hải thôi.'],
        ['东北 dōngběi<br>đông bắc', '东北人 — người vùng Đông Bắc<br>冬天的时候，中国的东北特别冷。<br>Vào mùa đông, vùng đông bắc Trung Quốc đặc biệt lạnh.', 'A：明天刮东北风，你多穿点儿。<br>B：好，我会多穿一件衣服的。<br>A: Mai có gió đông bắc, bạn mặc thêm áo vào. — B: Vâng, tôi sẽ mặc thêm một chiếc áo.'],
        ['东南 dōngnán<br>đông nam', '东南方 — hướng đông nam<br>这个小区在城市的东南边。<br>Khu dân cư này ở phía đông nam thành phố.', 'A：这个假期你打算去哪儿旅游？<br>B：我打算往东南走，那边有很多旅游城市。<br>A: Kỳ nghỉ này bạn định đi du lịch đâu? — B: Tôi định đi về phía đông nam, bên đó có nhiều thành phố du lịch.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['小区附近<br>xiǎoqū fùjìn — gần khu dân cư', '过马路<br>guò mǎlù — qua đường'],
        ['经过超市<br>jīngguò chāoshì — đi ngang qua siêu thị', '东北人<br>dōngběirén — người vùng Đông Bắc'],
        ['西北风<br>xīběifēng — gió tây bắc', '外地人<br>wàidìrén — người nơi khác'],
        ['外地游客<br>wàidì yóukè — du khách nơi khác', '旅游景点<br>lǚyóu jǐngdiǎn — điểm du lịch'],
        ['有名的景点<br>yǒumíng de jǐngdiǎn — điểm tham quan nổi tiếng', '高山<br>gāoshān — núi cao'],
        ['一条大河<br>yì tiáo dà hé — một con sông lớn', '蓝蓝的海<br>lánlán de hǎi — biển xanh biếc']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 一条有名的大河; (2) 过马路; (3) 去了哪些景点;
      // (4) 绿绿的草地 + 过去坐一会儿; (5) 小区附近有好几家超市.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '黄河是中国一条', after: '的大河。', answer: '有名' },
          { before: '你过', after: '后再走200米就到了。', answer: '马路' },
          { before: '听说你去南京了？你去了哪些', after: '？', answer: '景点' },
          { before: '你看，前面是绿绿的', after: '，我们过去坐一会儿吧。', answer: '草地' },
          { before: '我住的小区', after: '有好几家超市，买东西方便极了。', answer: '附近' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你和小王的关系怎么样？', answer: 'B',
            vn: 'Bạn với Tiểu Vương quan hệ thế nào? — B: Tôi không hiểu rõ anh ấy lắm, mới gặp anh ấy vài lần.' },
          { n: 12, letters: L5, prompt: '你平时也是十点多才起床吗？', promptPy: 'Nǐ píngshí yě shì shí diǎn duō cái qǐchuáng ma?', answer: 'D',
            vn: 'Bình thường bạn cũng hơn mười giờ mới dậy à? — D: Không phải, tối qua xem bóng đá nên ngủ muộn quá.' },
          { n: 13, letters: L5, prompt: '听说你对中国文化特别感兴趣？', promptPy: 'Tīngshuō nǐ duì Zhōngguó wénhuà tèbié gǎn xìngqù?', answer: 'A',
            vn: 'Nghe nói bạn đặc biệt hứng thú với văn hóa Trung Quốc? — A: Đúng vậy, tôi đã đến hơn mười thành phố của Trung Quốc.' },
          { n: 14, letters: L5, prompt: '我记得你养了一条狗，怎么不见了？', promptPy: 'Wǒ jìde nǐ yǎngle yì tiáo gǒu, zěnme bú jiàn le?', answer: 'F',
            vn: 'Tôi nhớ bạn có nuôi một con chó, sao không thấy đâu? — F: Mai tôi đi du lịch Nam Kinh nên gửi nó ở nhà bạn rồi.' },
          { n: 15, letters: L5, prompt: '我想找个人给我讲讲那个城市的历史。', promptPy: 'Wǒ xiǎng zhǎo ge rén gěi wǒ jiǎngjiang nàge chéngshì de lìshǐ.', answer: 'C',
            vn: 'Tôi muốn tìm một người kể cho tôi nghe về lịch sử thành phố đó. — C: Tôi biết có một cụ già rất hiểu về nơi đó.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '大家可以（　）自己的需要选择要买的东西。', answer: 'C',
            vn: 'Mọi người có thể dựa vào nhu cầu của mình để chọn đồ cần mua. — 根据……需要: dựa vào nhu cầu.' },
          { n: 17, letters: L5, prompt: '这些（　）不一会儿就把要送人的礼物买好了。', answer: 'B',
            vn: 'Những du khách này loáng một cái đã mua xong quà để tặng người khác. — 这些游客: những du khách này.' },
          { n: 18, letters: L5, prompt: '我家（　）有个公园，我经常去公园的草地上看书。', answer: 'F',
            promptPy: 'Wǒ jiā (　) yǒu gè gōngyuán, wǒ jīngcháng qù gōngyuán de cǎodì shang kàn shū.',
            vn: 'Gần nhà tôi có một công viên, tôi thường ra bãi cỏ trong công viên đọc sách. — 我家附近: gần nhà tôi.' },
          { n: 19, letters: L5, prompt: 'A：你（　）黄河的历史吗？\nB：当然，我们上课的时候学过。', answer: 'A',
            promptPy: 'A: Nǐ (　) Huáng Hé de lìshǐ ma?\nB: Dāngrán, wǒmen shàngkè de shíhou xuéguo.',
            vn: 'A: Bạn có biết về lịch sử sông Hoàng Hà không?\nB: Tất nhiên, chúng tôi học trên lớp rồi. — 了解历史: hiểu biết về lịch sử.' },
          { n: 20, letters: L5, prompt: 'A：你今天怎么回来这么晚？\nB：我在路上（　）了一个老朋友，跟他聊了好久。', answer: 'D',
            promptPy: 'A: Nǐ jīntiān zěnme huílai zhème wǎn?\nB: Wǒ zài lùshang (　) le yí gè lǎo péngyou, gēn tā liáole hǎo jiǔ.',
            vn: 'A: Sao hôm nay bạn về muộn thế?\nB: Trên đường tôi gặp một người bạn cũ, nói chuyện với anh ấy lâu lắm. — 遇见: tình cờ gặp.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '你看课文的时候别着急，一段一段地看，一个词一个词地看，一定能看懂的。\n★看课文的时候应该怎么做？',
            promptPy: 'Nǐ kàn kèwén de shíhou bié zháojí, yí duàn yí duàn de kàn, yí gè cí yí gè cí de kàn, yídìng néng kàndǒng de.\nKàn kèwén de shíhou yīnggāi zěnme zuò?',
            options: [{ key: 'A', text: '慢慢看' }, { key: 'B', text: '越看越快' }, { key: 'C', text: '边写边看' }], answer: 'A',
            vn: 'Khi đọc bài khóa bạn đừng vội, đọc từng đoạn một, từng từ một, nhất định sẽ đọc hiểu được. — "别着急，一段一段地看" → đọc chậm thôi → A.' },
          { n: 22, prompt: '他爸爸是音乐学校的校长，妈妈是有名的音乐老师，可是他对音乐没什么兴趣。他想以后做个医生，帮助那些生病的人。\n★他以后想做什么工作？',
            options: [{ key: 'A', text: '校长' }, { key: 'B', text: '医生' }, { key: 'C', text: '音乐老师' }], answer: 'B',
            vn: 'Bố cậu ấy là hiệu trưởng trường âm nhạc, mẹ là giáo viên âm nhạc nổi tiếng, nhưng cậu ấy không mấy hứng thú với âm nhạc. Cậu ấy muốn sau này làm bác sĩ, giúp đỡ những người bị bệnh. — B. Hiệu trưởng là bố, giáo viên âm nhạc là mẹ (A, C sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '我每天都刷牙，而且每次都刷三分钟以上，可是没想到还是牙疼。可能是因为最近一段时间，我吃了太多甜的东西。以后我应该少吃点儿甜的，有时间还要再去医院检查一下。\n★他为什么会牙疼？',
            promptPy: 'Wǒ měitiān dōu shuāyá, érqiě měi cì dōu shuā sān fēnzhōng yǐshàng, kěshì méi xiǎngdào háishi yá téng. Kěnéng shì yīnwèi zuìjìn yí duàn shíjiān, wǒ chīle tài duō tián de dōngxi. Yǐhòu wǒ yīnggāi shǎo chī diǎnr tián de, yǒu shíjiān hái yào zài qù yīyuàn jiǎnchá yíxià.\nTā wèishénme huì yá téng?',
            options: [{ key: 'A', text: '不是每天刷牙' }, { key: 'B', text: '吃了太多甜的', py: 'chīle tài duō tián de' }, { key: 'C', text: '刷牙时间太短了' }], answer: 'B',
            vn: 'Ngày nào tôi cũng đánh răng, mà lần nào cũng đánh hơn ba phút, không ngờ vẫn bị đau răng. Có lẽ vì dạo gần đây tôi ăn quá nhiều đồ ngọt. Sau này tôi nên ăn ít đồ ngọt thôi, có thời gian còn phải đi bệnh viện kiểm tra lại. — B. Ngày nào cũng đánh răng (A sai), mỗi lần hơn ba phút (C sai).' },
          { n: 24, prompt: '★他要做什么？',
            options: [{ key: 'A', text: '多刷牙' }, { key: 'B', text: '少吃东西' }, { key: 'C', text: '去医院检查' }], answer: 'C',
            vn: '"有时间还要再去医院检查一下" → C. Anh ấy định ăn ít đồ ngọt, không phải ăn ít đi nói chung (B sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '这（ duàn ）时间，我一直住在朋友家里。', promptPy: 'Zhè duàn shíjiān, wǒ yìzhí zhù zài péngyou jiā li.', answer: '段',
            vn: 'Khoảng thời gian này, tôi vẫn ở nhà bạn. — 这段时间: khoảng thời gian này.' },
          { n: 26, input: true, maxlength: 2, prompt: '中国银行在（ mǎ ）路的北边还是南边？', promptPy: 'Zhōngguó Yínháng zài mǎlù de běibian háishi nánbian?', answer: '马',
            vn: 'Ngân hàng Trung Quốc ở phía bắc hay phía nam đường cái? — 马路 mǎlù: đường cái.' },
          { n: 27, input: true, maxlength: 2, prompt: '我家门前有一条小（ hé ），我常去游泳。', promptPy: 'Wǒ jiā mén qián yǒu yì tiáo xiǎo hé, wǒ cháng qù yóuyǒng.', answer: '河',
            vn: 'Trước cửa nhà tôi có một con sông nhỏ, tôi hay ra đó bơi. — 河 hé: sông.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '聊',
            img: IMG + 'q28.webp', prompt: '聊', promptPy: 'liáo', placeholder: 'Viết câu có từ 聊…',
            script: '他们一边喝咖啡，一边聊天。', vn: 'Họ vừa uống cà phê vừa trò chuyện.' },
          { n: 29, free: true, must: '经过', img: IMG + 'q29.webp', prompt: '经过', promptPy: 'jīngguò', placeholder: 'Viết câu có từ 经过…',
            script: '经过这家商场时，她们进去买了很多东西。', vn: 'Khi đi ngang qua trung tâm thương mại này, họ vào mua rất nhiều đồ.' },
          { n: 30, free: true, must: '放学', img: IMG + 'q30.webp', prompt: '放学', promptPy: 'fàngxué', placeholder: 'Viết câu có từ 放学…',
            script: '孩子放学以后，爸爸妈妈来接他回家。', vn: 'Sau khi con tan học, bố mẹ đến đón cháu về nhà.' }
        ] }
    ] }
  ]
};
