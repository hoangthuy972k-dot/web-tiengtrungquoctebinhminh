// HSK 2 (3.0 Mới) · Bài 10 · 就要考试了
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 10, trang 084-093.

var vocabData = [
  {
    n: 1, zh: '开学', py: 'kāixué', pos: 'Động từ', vn: 'khai giảng, vào năm học', em: '🏫', img: '/images/hsk2v3-bai-10/kaixue.jpg', lesson: 1,
    ex_zh: '小明，你们明天开学，你准备好了吗？', ex_py: 'Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?', ex_vn: 'Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?',
    exList: [
      { zh: '小明，你们明天开学，你准备好了吗？', py: 'Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?', vn: 'Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?' },
      { zh: '快要开学了，爸爸帮弟弟准备书包。', py: 'Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo.', vn: 'Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách.' }
    ],
    hanzi: [{ c: '学', p: 'xué', type: '会意字 · Chữ hội ý', st: 8, ord: '⺍ → 冖 → 子', rad: '子 (tử – con)', mean: 'học', tip: '开学 = mở đầu năm học; 上学 = đi học.', cf: '', w: '开学 / 上学 / 学生' }]
  },
  {
    n: 2, zh: '门', py: 'mén', pos: 'Danh từ', vn: 'cửa', em: '🚪', img: '/images/hsk2v3-bai-10/men.jpg', lesson: 1,
    ex_zh: '书包在门后面。', ex_py: 'Shūbāo zài mén hòumiàn.', ex_vn: 'Nó ở phía sau cửa.',
    exList: [
      { zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.', vn: 'Nó ở phía sau cửa.' },
      { zh: '门口有家奶茶店。', py: 'Ménkǒu yǒu jiā nǎichádiàn.', vn: 'Trước cửa có quán trà sữa.' }
    ],
    hanzi: [{ c: '门', p: 'mén', type: '象形字 · Chữ tượng hình', st: 3, ord: '丶 → 丨 → 乛', rad: '门 (môn – cửa)', mean: 'cửa', tip: 'Ôn lại 门口 (bài 9): chỗ cửa ra vào.', cf: '', w: '门 / 门口 / 开门' }]
  },
  {
    n: 3, zh: '后面', py: 'hòumiàn', pos: 'Danh từ', vn: 'phía sau, đằng sau', em: '⬇️', img: '/images/hsk2v3-bai-10/houmian.jpg', lesson: 1,
    ex_zh: '书包在门后面。', ex_py: 'Shūbāo zài mén hòumiàn.', ex_vn: 'Cặp sách ở phía sau cửa.',
    exList: [
      { zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.', vn: 'Cặp sách ở phía sau cửa.' },
      { zh: '我们公司后面有一个商店。', py: 'Wǒmen gōngsī hòumiàn yǒu yí ge shāngdiàn.', vn: 'Phía sau công ty chúng tôi có một cửa hàng.' }
    ],
    hanzi: [{ c: '后', p: 'hòu', type: '会意字 · Chữ hội ý', st: 6, ord: '厂 → 一 → 口', rad: '口 (khẩu)', mean: 'sau', tip: 'Cùng nhóm phương vị với 旁边 (bài 9), 左边/右边 (bài 8).', cf: '前面 (qiánmiàn – phía trước)', w: '后面 / 以后 / 后边' }]
  },
  {
    n: 4, zh: '笔', py: 'bǐ', pos: 'Danh từ', vn: 'bút, cây viết', em: '🖊️', img: '/images/hsk2v3-bai-10/bi.jpg', lesson: 1,
    ex_zh: '书在床上，笔在桌子上。', ex_py: 'Shū zài chuáng shang, bǐ zài zhuōzi shang.', ex_vn: 'Sách ở trên giường, bút ở trên bàn.',
    exList: [
      { zh: '书在床上，笔在桌子上。', py: 'Shū zài chuáng shang, bǐ zài zhuōzi shang.', vn: 'Sách ở trên giường, bút ở trên bàn.' },
      { zh: '爸爸帮弟弟准备书包、本子和笔。', py: 'Bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.', vn: 'Bố giúp em trai chuẩn bị cặp sách, vở và bút.' }
    ],
    hanzi: [{ c: '笔', p: 'bǐ', type: '会意字 · Chữ hội ý', st: 10, ord: '⺮ → 毛', rad: '⺮ (trúc – tre)', mean: 'bút', tip: 'Ôn lại 画笔 (bài 6) — bút vẽ.', cf: '', w: '笔 / 画笔 / 铅笔' }]
  },
  {
    n: 5, zh: '帮', py: 'bāng', pos: 'Động từ', vn: 'giúp, giúp đỡ', em: '🤝', img: '/images/hsk2v3-bai-10/bang.jpg', lesson: 1,
    ex_zh: '这次爸爸帮你，下次你自己准备，好不好？', ex_py: 'Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?', ex_vn: 'Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?',
    exList: [
      { zh: '这次爸爸帮你，下次你自己准备，好不好？', py: 'Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?', vn: 'Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?' },
      { zh: '你能帮我叫一下白家月吗？', py: 'Nǐ néng bāng wǒ jiào yíxià Bái Jiāyuè ma?', vn: 'Bạn có thể giúp mình gọi Bạch Gia Nguyệt một chút không?' }
    ],
    hanzi: [{ c: '帮', p: 'bāng', type: '形声字 · Chữ hình thanh', st: 9, ord: '邦 → 巾', rad: '巾 (cân – khăn)', mean: 'giúp đỡ', tip: '帮 + người + làm việc gì: 帮我买、帮他准备.', cf: '', w: '帮 / 帮我 / 帮助' }]
  },
  {
    n: 6, zh: '考试', py: 'kǎoshì', pos: 'Động từ / Danh từ', vn: 'thi, kiểm tra; kỳ thi', em: '📝', img: '/images/hsk2v3-bai-10/kaoshi.jpg', lesson: 2,
    ex_zh: '明天考试，我在看书呢。', ex_py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.', ex_vn: 'Ngày mai con thi, nên con đang học bài.',
    exList: [
      { zh: '明天考试，我在看书呢。', py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.', vn: 'Ngày mai con thi, nên con đang học bài.' },
      { zh: '我们下星期就要考试了。', py: 'Wǒmen xià xīngqī jiù yào kǎoshì le.', vn: 'Tuần sau chúng tôi sắp thi rồi.' }
    ],
    hanzi: [{ c: '试', p: 'shì', type: '形声字 · Chữ hình thanh', st: 8, ord: '讠 → 式', rad: '讠 (ngôn – lời nói)', mean: 'thử; thi', tip: '考试 vừa là động từ vừa là danh từ; 试 cũng có trong 试试 (thử).', cf: '', w: '考试 / 准备考试 / 试试' }]
  },
  {
    n: 7, zh: '词', py: 'cí', pos: 'Danh từ', vn: 'từ (từ vựng)', em: '🔤', img: '/images/hsk2v3-bai-10/ci.jpg', lesson: 2,
    ex_zh: '这些词要好好看看。', ex_py: 'Zhèxiē cí yào hǎohāo kànkan.', ex_vn: 'Con nên xem lại những từ này thật kỹ nhé.',
    exList: [
      { zh: '这些词要好好看看。', py: 'Zhèxiē cí yào hǎohāo kànkan.', vn: 'Con nên xem lại những từ này thật kỹ nhé.' },
      { zh: '这些词的意思我都懂了。', py: 'Zhèxiē cí de yìsi wǒ dōu dǒng le.', vn: 'Nghĩa của những từ này con đều hiểu hết rồi.' }
    ],
    hanzi: [{ c: '词', p: 'cí', type: '形声字 · Chữ hình thanh', st: 7, ord: '讠 → 司', rad: '讠 (ngôn – lời nói)', mean: 'từ, lời', tip: '生词 = từ mới — chính là phần 生词 trong sách.', cf: '', w: '词 / 生词 / 词语' }]
  },
  {
    n: 8, zh: '本子', py: 'běnzi', pos: 'Danh từ', vn: 'vở, tập ghi chép', em: '📓', img: '/images/hsk2v3-bai-10/benzi.jpg', lesson: 2,
    ex_zh: '你的本子呢？本子上做错的题也要看一看。', ex_py: 'Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', ex_vn: 'Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé.',
    exList: [
      { zh: '你的本子呢？本子上做错的题也要看一看。', py: 'Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', vn: 'Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé.' },
      { zh: '爸爸帮弟弟准备书包、本子和笔。', py: 'Bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.', vn: 'Bố giúp em trai chuẩn bị cặp sách, vở và bút.' }
    ],
    hanzi: [{ c: '本', p: 'běn', type: '指事字 · Chữ chỉ sự', st: 5, ord: '木 → 一', rad: '木 (mộc – cây)', mean: 'gốc; quyển', tip: '本 cũng là lượng từ của sách: 一本书.', cf: '', w: '本子 / 一本书 / 课本' }]
  },
  {
    n: 9, zh: '错', py: 'cuò', pos: 'Tính từ', vn: 'sai, nhầm', em: '❌', img: '/images/hsk2v3-bai-10/cuo.jpg', lesson: 2,
    ex_zh: '本子上做错的题也要看一看。', ex_py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', ex_vn: 'Những câu làm sai trong vở cũng cần xem lại.',
    exList: [
      { zh: '本子上做错的题也要看一看。', py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', vn: 'Những câu làm sai trong vở cũng cần xem lại.' },
      { zh: '这个字写错了，左边是“口”，不是“日”。', py: 'Zhège zì xiěcuò le, zuǒbian shì “kǒu”, bú shì “rì”.', vn: 'Chữ này viết sai rồi, bên trái là “口”, không phải “日”.' }
    ],
    hanzi: [{ c: '错', p: 'cuò', type: '形声字 · Chữ hình thanh', st: 13, ord: '钅 → 昔', rad: '钅 (kim – kim loại)', mean: 'sai, nhầm', tip: '不错 nghĩa là "khá tốt", không phải "không sai".', cf: '对 (duì – đúng)', w: '错 / 做错 / 写错 / 不错' }]
  },
  {
    n: 10, zh: '题', py: 'tí', pos: 'Danh từ', vn: 'câu hỏi, bài tập, đề', em: '❓', img: '/images/hsk2v3-bai-10/ti.jpg', lesson: 2,
    ex_zh: '本子上做错的题也要看一看。', ex_py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', ex_vn: 'Những câu làm sai trong vở cũng cần xem lại.',
    exList: [
      { zh: '本子上做错的题也要看一看。', py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', vn: 'Những câu làm sai trong vở cũng cần xem lại.' },
      { zh: '妈妈让我看书、看做错的题。', py: 'Māma ràng wǒ kàn shū, kàn zuòcuò de tí.', vn: 'Mẹ bảo tôi học bài và xem lại những câu làm sai.' }
    ],
    hanzi: [{ c: '题', p: 'tí', type: '形声字 · Chữ hình thanh', st: 15, ord: '是 → 页', rad: '页 (hiệt – đầu)', mean: 'đề, câu hỏi', tip: '做题 = làm bài tập; 做错题 = làm sai bài.', cf: '', w: '题 / 做题 / 问题' }]
  },
  {
    n: 11, zh: '还是', py: 'háishi', pos: 'Liên từ', vn: 'hay, hay là (trong câu hỏi lựa chọn)', em: '🔀', lesson: 2,
    ex_zh: '妈妈，是您准备考试还是我准备考试？', ex_py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?', ex_vn: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?',
    exList: [
      { zh: '妈妈，是您准备考试还是我准备考试？', py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?', vn: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?' },
      { zh: '我们什么时候去看电影？今天还是明天？', py: 'Wǒmen shénme shíhou qù kàn diànyǐng? Jīntiān háishi míngtiān?', vn: 'Khi nào chúng ta đi xem phim? Hôm nay hay ngày mai?' }
    ],
    hanzi: [{ c: '还', p: 'hái', type: '形声字 · Chữ hình thanh', st: 7, ord: '不 → 辶', rad: '辶 (sước – đi)', mean: 'còn, vẫn; hay là', tip: '还是 trong câu hỏi = "hay là"; trong câu trần thuật = "vẫn nên".', cf: '或者 (huòzhě – hoặc, dùng trong câu trần thuật)', w: '还是 / A还是B / 还有' }]
  },
  {
    n: 12, zh: '考', py: 'kǎo', pos: 'Động từ', vn: 'thi, kiểm tra', em: '✏️', img: '/images/hsk2v3-bai-10/kao.jpg', lesson: 3,
    ex_zh: '今天考试考得怎么样？', ex_py: 'Jīntiān kǎoshì kǎo de zěnmeyàng?', ex_vn: 'Hôm nay con thi thế nào?',
    exList: [
      { zh: '今天考试考得怎么样？', py: 'Jīntiān kǎoshì kǎo de zěnmeyàng?', vn: 'Hôm nay con thi thế nào?' },
      { zh: '我觉得比上次好。', py: 'Wǒ juéde bǐ shàng cì hǎo.', vn: 'Con thấy tốt hơn lần trước.' }
    ],
    hanzi: [{ c: '考', p: 'kǎo', type: '形声字 · Chữ hình thanh', st: 6, ord: '土 → 丿 → 万', rad: '耂 (lão)', mean: 'thi, khảo', tip: '考试 là từ li hợp: 考试考得怎么样 (ôn bài 7).', cf: '', w: '考 / 考试 / 考得好' }]
  },
  {
    n: 13, zh: '快要', py: 'kuàiyào', pos: 'Phó từ', vn: 'sắp, chuẩn bị', em: '⏳', lesson: 3,
    ex_zh: '饭菜快要做好了。', ex_py: 'Fàncài kuàiyào zuòhǎo le.', ex_vn: 'Cơm sắp nấu xong rồi.',
    exList: [
      { zh: '饭菜快要做好了。', py: 'Fàncài kuàiyào zuòhǎo le.', vn: 'Cơm sắp nấu xong rồi.' },
      { zh: '快要开学了，爸爸帮弟弟准备书包。', py: 'Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo.', vn: 'Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách.' }
    ],
    hanzi: [{ c: '快', p: 'kuài', type: '形声字 · Chữ hình thanh', st: 7, ord: '忄 → 夬', rad: '忄 (tâm)', mean: 'nhanh; sắp', tip: '快要……了 / 就要……了 — luôn có 了 ở cuối câu.', cf: '就要 (jiù yào)', w: '快要 / 快要……了 / 很快' }]
  },
  {
    n: 14, zh: '笑', py: 'xiào', pos: 'Động từ', vn: 'cười', em: '😄', img: '/images/hsk2v3-bai-10/xiao.jpg', lesson: 4,
    ex_zh: '我问完，他们都笑了。', ex_py: 'Wǒ wènwán, tāmen dōu xiào le.', ex_vn: 'Tôi hỏi xong, cả hai đều bật cười.',
    exList: [
      { zh: '我问完，他们都笑了。', py: 'Wǒ wènwán, tāmen dōu xiào le.', vn: 'Tôi hỏi xong, cả hai đều bật cười.' },
      { zh: '看到生日礼物，儿子高兴地笑了。', py: 'Kàndào shēngrì lǐwù, érzi gāoxìng de xiào le.', vn: 'Nhìn thấy quà sinh nhật, con trai vui vẻ bật cười.' }
    ],
    hanzi: [{ c: '笑', p: 'xiào', type: '会意字 · Chữ hội ý', st: 10, ord: '⺮ → 夭', rad: '⺮ (trúc – tre)', mean: 'cười', tip: 'Ôn lại trợ từ 地 (bài 6): 高兴地笑了.', cf: '哭 (kū – khóc)', w: '笑 / 笑了 / 开玩笑' }]
  }
];

var wuData = [
  { img: '📝', label: '考试', py: 'kǎoshì', letter: 'A' },
  { img: '📓', label: '本子', py: 'běnzi', letter: 'B' },
  { img: '🖊️', label: '笔', py: 'bǐ', letter: 'C' },
  { img: '❌', label: '错', py: 'cuò', letter: 'D' },
  { img: '🚪', label: '门', py: 'mén', letter: 'E' },
  { img: '😄', label: '笑', py: 'xiào', letter: 'F' }
];

var dialogData = [
  {
    scene: '在房间 · Trong phòng (chuẩn bị đồ đi học)',
    preQuiz: [
      { q: '书包在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 2 },
      { q: '笔在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '小明，你们明天开学，你准备好了吗？', py: 'Xiǎomíng, nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?', vn: 'Tiểu Minh, ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?' },
      { sp: 1, zh: '明天就开学啊？爸爸，我的书包你看见了吗？', py: 'Míngtiān jiù kāixué a? Bàba, wǒ de shūbāo nǐ kànjiàn le ma?', vn: 'Ngày mai khai giảng ạ? Bố ơi, bố có thấy cặp sách của con không?' },
      { sp: 0, zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.', vn: 'Nó ở phía sau cửa.' },
      { sp: 1, zh: '书在哪儿呢？笔呢？', py: 'Shū zài nǎr ne? Bǐ ne?', vn: 'Sách ở đâu nhỉ? Cả bút nữa?' },
      { sp: 0, zh: '书在床上，笔在桌子上。', py: 'Shū zài chuáng shang, bǐ zài zhuōzi shang.', vn: 'Sách ở trên giường, bút ở trên bàn.' },
      { sp: 1, zh: '太好了！现在都准备好了。', py: 'Tài hǎo le! Xiànzài dōu zhǔnbèi hǎo le.', vn: 'May quá! Bây giờ đã chuẩn bị xong rồi.' },
      { sp: 0, zh: '这次爸爸帮你，下次你自己准备，好不好？', py: 'Zhè cì bàba bāng nǐ, xià cì nǐ zìjǐ zhǔnbèi, hǎo bu hǎo?', vn: 'Lần này bố đã giúp con. Lần sau con phải tự chuẩn bị nhé, được không?' },
      { sp: 1, zh: '好！', py: 'Hǎo!', vn: 'Vâng ạ!' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (ôn bài trước kỳ thi)',
    preQuiz: [
      { q: '刘小雪在做什么？', opts: ['看书', '考试', '找本子'], ans: 0 },
      { q: '做错的题在哪儿？', opts: ['书上', '本子上', '书包里'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '小雪，你在做什么呢？', py: 'Xiǎoxuě, nǐ zài zuò shénme ne?', vn: 'Tiểu Tuyết, con đang làm gì vậy?' },
      { sp: 1, zh: '明天考试，我在看书呢。', py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.', vn: 'Ngày mai con thi, nên con đang học bài.' },
      { sp: 0, zh: '这些词要好好看看。', py: 'Zhèxiē cí yào hǎohāo kànkan.', vn: 'Con nên xem lại những từ này thật kỹ nhé.' },
      { sp: 1, zh: '我看过了，意思也都懂了。', py: 'Wǒ kànguo le, yìsi yě dōu dǒng le.', vn: 'Con đã xem rồi, cũng đã hiểu hết nghĩa của chúng rồi.' },
      { sp: 0, zh: '你的本子呢？本子上做错的题也要看一看。', py: 'Nǐ de běnzi ne? Běnzi shang zuòcuò de tí yě yào kàn yi kàn.', vn: 'Vở của con đâu? Những câu làm sai trong vở con cũng cần xem lại nhé.' },
      { sp: 1, zh: '妈妈，是您准备考试还是我准备考试？', py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?', vn: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (sau khi thi về)',
    preQuiz: [
      { q: '刘小雪考试考得怎么样？', opts: ['很不好', '没上次好', '比上次好'], ans: 2 },
      { q: '王一雪正在做什么？', opts: ['考试', '做菜', '洗手'], ans: 1 }
    ],
    lines: [
      { sp: 1, zh: '妈妈，我回来了！', py: 'Māma, wǒ huílái le!', vn: 'Mẹ ơi, con về rồi!' },
      { sp: 0, zh: '我买了奶茶，就在桌子上，自己去拿吧。', py: 'Wǒ mǎile nǎichá, jiù zài zhuōzi shang, zìjǐ qù ná ba.', vn: 'Mẹ đã mua trà sữa, để ngay trên bàn, con tự đi lấy nhé.' },
      { sp: 1, zh: '谢谢妈妈！', py: 'Xièxie māma!', vn: 'Cảm ơn mẹ!' },
      { sp: 0, zh: '今天考试考得怎么样？', py: 'Jīntiān kǎoshì kǎo de zěnmeyàng?', vn: 'Hôm nay con thi thế nào?' },
      { sp: 1, zh: '我觉得比上次好。', py: 'Wǒ juéde bǐ shàng cì hǎo.', vn: 'Con thấy tốt hơn lần trước.' },
      { sp: 0, zh: '真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。', py: 'Zhēn búcuò! Fàncài kuàiyào zuòhǎo le, nǐ jiào dìdi yìqǐ qù xǐshǒu ba.', vn: 'Thật tuyệt! Cơm sắp nấu xong rồi, con gọi em trai cùng đi rửa tay nhé.' },
      { sp: 2, zh: '妈妈，我是第一名，姐姐还没洗完呢。', py: 'Māma, wǒ shì dì-yī míng, jiějie hái méi xǐwán ne.', vn: 'Mẹ ơi, con xong nhanh nhất, chị vẫn chưa rửa tay xong.' },
      { sp: 0, zh: '你洗得真快啊！', py: 'Nǐ xǐ de zhēn kuài a!', vn: 'Con rửa tay nhanh thật đấy!' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lưu Tiểu Tuyết viết nhật ký)',
    preQuiz: [
      { q: '爸爸为什么帮弟弟准备书包、本子和笔？', opts: ['快要上课了', '快要开学了', '快要考试了'], ans: 1 },
      { q: '爸爸、妈妈为什么笑了？', opts: ['孩子们去上学了', '孩子们考得很好', '孩子上学，他们比孩子还忙'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '快要开学了，爸爸帮弟弟准备书包、本子和笔。', py: 'Kuàiyào kāixué le, bàba bāng dìdi zhǔnbèi shūbāo, běnzi hé bǐ.', vn: 'Sắp khai giảng rồi, bố giúp em trai chuẩn bị cặp sách, vở và bút.' },
      { sp: 0, zh: '我就要考试了，妈妈让我看书、看做错的题。', py: 'Wǒ jiù yào kǎoshì le, māma ràng wǒ kàn shū, kàn zuòcuò de tí.', vn: 'Tôi sắp thi, mẹ bảo tôi học bài và xem lại những câu làm sai.' },
      { sp: 0, zh: '我们上学，爸爸、妈妈比我们还忙。', py: 'Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.', vn: 'Chúng tôi đi học, nhưng bố mẹ còn bận hơn cả chúng tôi.' },
      { sp: 0, zh: '我问他们：“是我和弟弟上学还是你们上学？”我问完，他们都笑了。', py: 'Wǒ wèn tāmen: “Shì wǒ hé dìdi shàngxué háishi nǐmen shàngxué?” Wǒ wènwán, tāmen dōu xiào le.', vn: 'Tôi hỏi bố mẹ rằng: “Là em trai và con đi học hay là bố mẹ đi học vậy?” Tôi hỏi xong, cả hai đều bật cười.' }
    ]
  }
];

var listenData = [
  {
    audio: '小明，你们明天开学，你准备好了吗？爸爸，我的书包你看见了吗？书包在门后面。书在哪儿呢？笔呢？书在床上，笔在桌子上。',
    questions: [
      { q: '书包在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 2 },
      { q: '笔在哪儿？', opts: ['床上', '桌子上', '门后面'], ans: 1 }
    ]
  },
  {
    audio: '小雪，你在做什么呢？明天考试，我在看书呢。这些词要好好看看。你的本子呢？本子上做错的题也要看一看。',
    questions: [
      { q: '刘小雪在做什么？', opts: ['看书', '考试', '找本子'], ans: 0 },
      { q: '妈妈让她看什么？', opts: ['词和做错的题', '电影', '奶茶'], ans: 0 }
    ]
  },
  {
    audio: '今天考试考得怎么样？我觉得比上次好。真不错！饭菜快要做好了，你叫弟弟一起去洗手吧。',
    questions: [
      { q: '她考得怎么样？', opts: ['很不好', '没上次好', '比上次好'], ans: 2 },
      { q: '饭菜怎么样了？', opts: ['快要做好了', '还没开始做', '已经吃完了'], ans: 0 }
    ]
  },
  {
    audio: '快要开学了，爸爸帮弟弟准备书包、本子和笔。我就要考试了，妈妈让我看书、看做错的题。我们上学，爸爸、妈妈比我们还忙。',
    questions: [
      { q: '爸爸帮弟弟准备什么？', opts: ['书包、本子和笔', '奶茶和蛋糕', '衣服和裤子'], ans: 0 },
      { q: '谁更忙？', opts: ['爸爸妈妈', '孩子们', '一样忙'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '快要', right: '开学了' },
  { left: '就要', right: '考试了' },
  { left: '书包在', right: '门后面' },
  { left: '做错', right: '的题' },
  { left: '爸爸', right: '帮弟弟准备书包' },
  { left: '是你上学', right: '还是我上学？' }
];

var fillData = [
  { pre: '小雪，你们什么时候', blank: '开学', post: '？你准备好了吗？', hint: '(khai giảng)', ans: '开学' },
  { pre: '我们公司', blank: '后面', post: '有一个商店。', hint: '(phía sau)', ans: '后面' },
  { pre: '不好意思，你能', blank: '帮', post: '我叫一下白家月吗？', hint: '(giúp)', ans: '帮' },
  { pre: '这个字写', blank: '错', post: '了，左边是“口”，不是“日”。', hint: '(sai)', ans: '错' },
  { pre: '看到生日礼物，儿子高兴地', blank: '笑', post: '了。', hint: '(cười)', ans: '笑' },
  { pre: '明天', blank: '考试', post: '，我在看书呢。', hint: '(thi)', ans: '考试' },
  { pre: '饭菜', blank: '快要', post: '做好了。', hint: '(sắp)', ans: '快要' },
  { pre: '是您准备考试', blank: '还是', post: '我准备考试？', hint: '(hay là)', ans: '还是' }
];

var sortData = [
  { words: ['我', '的', '书包', '你', '看见', '了', '吗', '？'], ans: '我的书包你看见了吗？', audio: '我的书包你看见了吗？' },
  { words: ['书包', '在', '门', '后面', '。'], ans: '书包在门后面。', audio: '书包在门后面。' },
  { words: ['饭菜', '快要', '做', '好', '了', '。'], ans: '饭菜快要做好了。', audio: '饭菜快要做好了。' },
  { words: ['我们', '下', '星期', '就要', '考试', '了', '。'], ans: '我们下星期就要考试了。', audio: '我们下星期就要考试了。' },
  { words: ['是', '您', '准备', '考试', '还是', '我', '准备', '考试', '？'], ans: '是您准备考试还是我准备考试？', audio: '是您准备考试还是我准备考试？' },
  { words: ['爸爸', '妈妈', '比', '我们', '还', '忙', '。'], ans: '爸爸妈妈比我们还忙。', audio: '爸爸妈妈比我们还忙。' }
];

var mcData = [
  { q: '看到生日礼物，儿子高兴地＿＿了。', opts: ['笑', '帮', '考', '错'], ans: 0 },
  { q: '这个字写＿＿了，左边是“口”，不是“日”。', opts: ['错', '好', '完', '对'], ans: 0 },
  { q: '火车＿＿开了。', opts: ['快要', '很要', '太要', '真要'], ans: 0 },
  { q: '我们下星期＿＿考试了。', opts: ['就要', '快要', '要快', '就快'], ans: 0 },
  { q: 'Câu nào là câu hỏi lựa chọn?', opts: ['你喝奶茶还是喝咖啡？', '你喝奶茶吗？', '你喝不喝奶茶？', '你喝什么？'], ans: 0 },
  { q: '“弟弟手很小。” là loại câu gì?', opts: ['Câu có cụm chủ vị làm vị ngữ', 'Câu so sánh', 'Câu hỏi lựa chọn', 'Câu chữ 把'], ans: 0 },
  { q: 'Khi trong câu có trạng ngữ chỉ thời gian (下星期) thì thường dùng cấu trúc nào?', opts: ['就要……了', '快要……了', '快……了', '要……了'], ans: 0 },
  { q: '“不错” nghĩa là gì?', opts: ['Khá tốt', 'Không sai', 'Rất tệ', 'Không biết'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你们什么时候开学？你准备好了吗？',
      q_vn: 'Khi nào các bạn khai giảng? Bạn đã chuẩn bị xong chưa?',
      hint: '快要开学了，我准备了……',
      sample: '快要开学了，我准备好了书包、本子和笔，这次是我自己准备的。',
      sample_vn: 'Sắp khai giảng rồi, tôi đã chuẩn bị xong cặp sách, vở và bút, lần này là tôi tự chuẩn bị.',
      note: '快要……了 dùng khi việc gì đó sắp xảy ra.'
    },
    {
      q_zh: '考试以前你会做什么准备？',
      q_vn: 'Trước kỳ thi bạn chuẩn bị thế nào?',
      hint: '我要看……，还要看做错的题。',
      sample: '就要考试了，我要好好看看这些词，本子上做错的题也要看一看。',
      sample_vn: 'Sắp thi rồi, tôi phải xem kỹ những từ này, những câu làm sai trong vở cũng phải xem lại.',
      note: '就要……了 dùng khi có mốc thời gian cụ thể.'
    },
    {
      q_zh: '你今天考试考得怎么样？',
      q_vn: 'Hôm nay bạn thi thế nào?',
      hint: '我考得……，比上次……',
      sample: '我觉得考得还可以，比上次好，虽然有几个题做错了，但是词我都懂了。',
      sample_vn: 'Tôi thấy thi cũng tàm tạm, tốt hơn lần trước, tuy có vài câu làm sai nhưng các từ tôi đều hiểu.',
      note: 'Ôn bổ ngữ trạng thái (bài 7) và 虽然……但是…… (bài 8).'
    },
    {
      q_zh: '你更喜欢打篮球、踢足球还是游泳？',
      q_vn: 'Bạn thích chơi bóng rổ, đá bóng hay bơi hơn?',
      hint: '我更喜欢……，因为……',
      sample: '我更喜欢游泳，因为游泳比打篮球有意思，也没有踢足球那么累。',
      sample_vn: 'Tôi thích bơi hơn, vì bơi thú vị hơn chơi bóng rổ, cũng không mệt bằng đá bóng.',
      note: 'Câu hỏi lựa chọn A 还是 B; trả lời dùng 比 và 没有 (bài 8, 9).'
    },
    {
      q_zh: '在你家，谁帮你准备上学的东西？',
      q_vn: 'Ở nhà bạn, ai giúp bạn chuẩn bị đồ đi học?',
      hint: '……帮我准备……，下次我自己……',
      sample: '以前爸爸帮我准备书包和本子，现在我自己准备，爸爸妈妈比我还忙。',
      sample_vn: 'Trước đây bố giúp tôi chuẩn bị cặp và vở, bây giờ tôi tự chuẩn bị, bố mẹ còn bận hơn cả tôi.',
      note: '帮 + người + việc; 比……还 nhấn mức độ cao hơn.'
    }
  ]
};

var translateData = [
  { vi: 'Cặp sách ở phía sau cửa.', zh: '书包在门后面。', py: 'Shūbāo zài mén hòumiàn.' },
  { vi: 'Ngày mai con thi, nên con đang học bài.', zh: '明天考试，我在看书呢。', py: 'Míngtiān kǎoshì, wǒ zài kàn shū ne.' },
  { vi: 'Mẹ ơi, là mẹ chuẩn bị thi hay là con chuẩn bị thi vậy?', zh: '妈妈，是您准备考试还是我准备考试？', py: 'Māma, shì nín zhǔnbèi kǎoshì háishi wǒ zhǔnbèi kǎoshì?' },
  { vi: 'Cơm sắp nấu xong rồi.', zh: '饭菜快要做好了。', py: 'Fàncài kuàiyào zuòhǎo le.' },
  { vi: 'Chúng tôi đi học, nhưng bố mẹ còn bận hơn cả chúng tôi.', zh: '我们上学，爸爸、妈妈比我们还忙。', py: 'Wǒmen shàngxué, bàba, māma bǐ wǒmen hái máng.' }
];

var translateDataRev = [
  { vi: 'Ngày mai khai giảng rồi, con đã chuẩn bị xong chưa?', zh: '你们明天开学，你准备好了吗？', py: 'Nǐmen míngtiān kāixué, nǐ zhǔnbèi hǎo le ma?' },
  { vi: 'Con nên xem lại những từ này thật kỹ nhé.', zh: '这些词要好好看看。', py: 'Zhèxiē cí yào hǎohāo kànkan.' },
  { vi: 'Những câu làm sai trong vở cũng cần xem lại.', zh: '本子上做错的题也要看一看。', py: 'Běnzi shang zuòcuò de tí yě yào kàn yi kàn.' },
  { vi: 'Con thấy tốt hơn lần trước.', zh: '我觉得比上次好。', py: 'Wǒ juéde bǐ shàng cì hǎo.' },
  { vi: 'Tôi hỏi xong, cả hai đều bật cười.', zh: '我问完，他们都笑了。', py: 'Wǒ wènwán, tāmen dōu xiào le.' }
];
