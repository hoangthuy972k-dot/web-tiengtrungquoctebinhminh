/**
 * Du lieu mau (placeholder) cho website hoc tieng Trung.
 * Thay the / bo sung noi dung that tai day khi trien khai chinh thuc.
 */
const APP_DATA = {
  levels: [
    {
      id: 'hsk1',
      name: 'HSK 1',
      subtitle: 'Nhập môn',
      description: 'Làm quen với 150 từ vựng cơ bản, cấu trúc câu đơn giản nhất.',
      totalLessons: 12,
      totalVocab: 150,
      color: 'red'
    },
    {
      id: 'hsk2',
      name: 'HSK 2',
      subtitle: 'Sơ cấp',
      description: 'Mở rộng vốn từ giao tiếp hàng ngày, ngữ pháp cơ bản.',
      totalLessons: 15,
      totalVocab: 300,
      color: 'gold'
    },
    {
      id: 'hsk3',
      name: 'HSK 3',
      subtitle: 'Trung cấp 1',
      description: 'Giao tiếp trong học tập, công việc và sinh hoạt thường ngày.',
      totalLessons: 18,
      totalVocab: 600,
      color: 'red'
    },
    {
      id: 'hsk4',
      name: 'HSK 4',
      subtitle: 'Trung cấp 2',
      description: 'Thảo luận chủ đề rộng hơn, diễn đạt ý kiến cá nhân tự nhiên.',
      totalLessons: 20,
      totalVocab: 1200,
      color: 'gold'
    },
    {
      id: 'yct',
      name: 'YCT - Thiếu nhi',
      subtitle: 'Dành cho trẻ em',
      description: 'Chương trình tiếng Trung vui nhộn, hình ảnh sinh động cho trẻ.',
      totalLessons: 10,
      totalVocab: 80,
      color: 'red'
    }
  ],

  vocab: {
    hsk1: [
      { id: 'h1-1', hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào' },
      { id: 'h1-2', hanzi: '谢谢', pinyin: 'xiè xie', meaning: 'cảm ơn' },
      { id: 'h1-3', hanzi: '再见', pinyin: 'zài jiàn', meaning: 'tạm biệt' },
      { id: 'h1-4', hanzi: '爸爸', pinyin: 'bà ba', meaning: 'bố' },
      { id: 'h1-5', hanzi: '妈妈', pinyin: 'mā ma', meaning: 'mẹ' },
      { id: 'h1-6', hanzi: '学生', pinyin: 'xué shēng', meaning: 'học sinh' },
      { id: 'h1-7', hanzi: '老师', pinyin: 'lǎo shī', meaning: 'giáo viên' },
      { id: 'h1-8', hanzi: '喜欢', pinyin: 'xǐ huan', meaning: 'thích' },
      { id: 'h1-9', hanzi: '吃饭', pinyin: 'chī fàn', meaning: 'ăn cơm' },
      { id: 'h1-10', hanzi: '朋友', pinyin: 'péng you', meaning: 'bạn bè' }
    ],
    hsk2: [
      { id: 'h2-1', hanzi: '时候', pinyin: 'shí hou', meaning: 'lúc, thời điểm' },
      { id: 'h2-2', hanzi: '因为', pinyin: 'yīn wèi', meaning: 'bởi vì' },
      { id: 'h2-3', hanzi: '所以', pinyin: 'suǒ yǐ', meaning: 'cho nên' },
      { id: 'h2-4', hanzi: '已经', pinyin: 'yǐ jīng', meaning: 'đã' },
      { id: 'h2-5', hanzi: '觉得', pinyin: 'jué de', meaning: 'cảm thấy' },
      { id: 'h2-6', hanzi: '开始', pinyin: 'kāi shǐ', meaning: 'bắt đầu' },
      { id: 'h2-7', hanzi: '知道', pinyin: 'zhī dào', meaning: 'biết' },
      { id: 'h2-8', hanzi: '如果', pinyin: 'rú guǒ', meaning: 'nếu như' },
      { id: 'h2-9', hanzi: '容易', pinyin: 'róng yì', meaning: 'dễ dàng' },
      { id: 'h2-10', hanzi: '旅游', pinyin: 'lǚ yóu', meaning: 'du lịch' }
    ],
    hsk3: [
      { id: 'h3-1', hanzi: '经验', pinyin: 'jīng yàn', meaning: 'kinh nghiệm' },
      { id: 'h3-2', hanzi: '压力', pinyin: 'yā lì', meaning: 'áp lực' },
      { id: 'h3-3', hanzi: '习惯', pinyin: 'xí guàn', meaning: 'thói quen' },
      { id: 'h3-4', hanzi: '联系', pinyin: 'lián xì', meaning: 'liên hệ' },
      { id: 'h3-5', hanzi: '打算', pinyin: 'dǎ suàn', meaning: 'dự định' },
      { id: 'h3-6', hanzi: '解决', pinyin: 'jiě jué', meaning: 'giải quyết' },
      { id: 'h3-7', hanzi: '环境', pinyin: 'huán jìng', meaning: 'môi trường' },
      { id: 'h3-8', hanzi: '负责', pinyin: 'fù zé', meaning: 'phụ trách' },
      { id: 'h3-9', hanzi: '适合', pinyin: 'shì hé', meaning: 'phù hợp' },
      { id: 'h3-10', hanzi: '坚持', pinyin: 'jiān chí', meaning: 'kiên trì' }
    ],
    hsk4: [
      { id: 'h4-1', hanzi: '竞争', pinyin: 'jìng zhēng', meaning: 'cạnh tranh' },
      { id: 'h4-2', hanzi: '合作', pinyin: 'hé zuò', meaning: 'hợp tác' },
      { id: 'h4-3', hanzi: '态度', pinyin: 'tài dù', meaning: 'thái độ' },
      { id: 'h4-4', hanzi: '批评', pinyin: 'pī píng', meaning: 'phê bình' },
      { id: 'h4-5', hanzi: '管理', pinyin: 'guǎn lǐ', meaning: 'quản lý' },
      { id: 'h4-6', hanzi: '投资', pinyin: 'tóu zī', meaning: 'đầu tư' },
      { id: 'h4-7', hanzi: '效率', pinyin: 'xiào lǜ', meaning: 'hiệu suất' },
      { id: 'h4-8', hanzi: '资源', pinyin: 'zī yuán', meaning: 'tài nguyên' },
      { id: 'h4-9', hanzi: '挑战', pinyin: 'tiǎo zhàn', meaning: 'thử thách' },
      { id: 'h4-10', hanzi: '责任', pinyin: 'zé rèn', meaning: 'trách nhiệm' }
    ],
    yct: [
      { id: 'y-1', hanzi: '猫', pinyin: 'māo', meaning: 'con mèo' },
      { id: 'y-2', hanzi: '狗', pinyin: 'gǒu', meaning: 'con chó' },
      { id: 'y-3', hanzi: '苹果', pinyin: 'píng guǒ', meaning: 'quả táo' },
      { id: 'y-4', hanzi: '红色', pinyin: 'hóng sè', meaning: 'màu đỏ' },
      { id: 'y-5', hanzi: '大', pinyin: 'dà', meaning: 'to, lớn' },
      { id: 'y-6', hanzi: '小', pinyin: 'xiǎo', meaning: 'nhỏ' },
      { id: 'y-7', hanzi: '玩', pinyin: 'wán', meaning: 'chơi' },
      { id: 'y-8', hanzi: '气球', pinyin: 'qì qiú', meaning: 'bóng bay' },
      { id: 'y-9', hanzi: '太阳', pinyin: 'tài yáng', meaning: 'mặt trời' },
      { id: 'y-10', hanzi: '月亮', pinyin: 'yuè liang', meaning: 'mặt trăng' }
    ]
  },

  fillBlank: {
    hsk1: [
      { id: 'fb1-1', sentence: '我 ___ 学生。', answer: '是', options: ['是', '不', '有', '在'] },
      { id: 'fb1-2', sentence: '这 ___ 我的爸爸。', answer: '是', options: ['是', '很', '和', '去'] },
      { id: 'fb1-3', sentence: '谢谢你的 ___。', answer: '帮助', options: ['帮助', '再见', '喜欢', '吃饭'] }
    ],
    hsk2: [
      { id: 'fb2-1', sentence: '我 ___ 去过北京。', answer: '已经', options: ['已经', '因为', '容易', '知道'] },
      { id: 'fb2-2', sentence: '___ 下雨，我们不能出去。', answer: '因为', options: ['因为', '所以', '如果', '觉得'] }
    ],
    hsk3: [
      { id: 'fb3-1', sentence: '这件事我需要 ___ 一下。', answer: '解决', options: ['解决', '联系', '打算', '习惯'] },
      { id: 'fb3-2', sentence: '工作压力让我很不 ___。', answer: '适合', options: ['适合', '负责', '坚持', '经验'] }
    ],
    hsk4: [
      { id: 'fb4-1', sentence: '公司之间的 ___ 越来越激烈。', answer: '竞争', options: ['竞争', '合作', '投资', '效率'] },
      { id: 'fb4-2', sentence: '每个人都要对自己的行为负 ___。', answer: '责任', options: ['责任', '挑战', '资源', '态度'] }
    ],
    yct: [
      { id: 'fby-1', sentence: '我喜欢 ___ 苹果。', answer: '吃', options: ['吃', '玩', '大', '红色'] },
      { id: 'fby-2', sentence: '晚上有 ___，白天有太阳。', answer: '月亮', options: ['月亮', '气球', '小', '狗'] }
    ]
  },

  sentenceBuild: {
    hsk1: [
      { id: 'sb1-1', tokens: ['我', '是', '学生'], translation: 'Tôi là học sinh.' },
      { id: 'sb1-2', tokens: ['他', '喜欢', '吃饭'], translation: 'Anh ấy thích ăn cơm.' }
    ],
    hsk2: [
      { id: 'sb2-1', tokens: ['我', '已经', '知道', '了'], translation: 'Tôi đã biết rồi.' },
      { id: 'sb2-2', tokens: ['因为', '下雨', '所以', '我', '没去'], translation: 'Vì trời mưa nên tôi đã không đi.' }
    ],
    hsk3: [
      { id: 'sb3-1', tokens: ['他', '负责', '这个', '项目'], translation: 'Anh ấy phụ trách dự án này.' },
      { id: 'sb3-2', tokens: ['我们', '需要', '解决', '这个', '问题'], translation: 'Chúng ta cần giải quyết vấn đề này.' }
    ],
    hsk4: [
      { id: 'sb4-1', tokens: ['公司', '需要', '提高', '效率'], translation: 'Công ty cần nâng cao hiệu suất.' },
      { id: 'sb4-2', tokens: ['这是', '一个', '很大的', '挑战'], translation: 'Đây là một thử thách rất lớn.' }
    ],
    yct: [
      { id: 'sby-1', tokens: ['我', '有', '一只', '猫'], translation: 'Tôi có một con mèo.' },
      { id: 'sby-2', tokens: ['太阳', '很', '大'], translation: 'Mặt trời rất to.' }
    ]
  },

  /**
   * Lo trinh bai hoc HSK2 - hien tai dang thu nghiem voi Bai 2 (ban day du: hoi thoai,
   * tu vung co tu loai, ngu phap chi tiet, va 4 dang bai tap). Cac bai khac se duoc
   * bo sung sau khi ban duyet noi dung nay.
   */
  lessons: {
    hsk2: [
      {
        id: 'hsk2-l2',
        number: 2,
        title: 'Mỗi ngày tôi đều thức dậy lúc 6 giờ',
        titleHanzi: '我每天六点起床',
        titlePinyin: 'Wǒ měitiān liù diǎn qǐchuáng',

        dialogues: [
          {
            id: 'd1',
            place: '在运动场 (Trên sân vận động)',
            lines: [
              { speaker: 'A', hanzi: '你很少生病，是不是喜欢运动？', pinyin: 'Nǐ hěn shǎo shēngbìng, shìbushì xǐhuan yùndòng?', vi: 'Bạn rất ít khi bị bệnh, có phải là vì thích vận động không?' },
              { speaker: 'B', hanzi: '是啊，我每天早上都要出去跑步。', pinyin: 'Shì a, wǒ měitiān zǎoshang dōu yào chūqu pǎobù.', vi: 'Đúng vậy, mỗi sáng tôi đều phải ra ngoài chạy bộ.' },
              { speaker: 'A', hanzi: '你每天几点起床？', pinyin: 'Nǐ měitiān jǐ diǎn qǐchuáng?', vi: 'Mỗi ngày bạn thức dậy lúc mấy giờ?' },
              { speaker: 'B', hanzi: '我每天6点起床。', pinyin: 'Wǒ měitiān liù diǎn qǐchuáng.', vi: 'Mỗi ngày tôi thức dậy lúc 6 giờ.' }
            ]
          },
          {
            id: 'd2',
            place: '在医院 (Trong bệnh viện)',
            lines: [
              { speaker: 'A', hanzi: '吃药了吗？现在身体怎么样？', pinyin: 'Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?', vi: 'Bạn uống thuốc chưa? Bây giờ sức khỏe thế nào rồi?' },
              { speaker: 'B', hanzi: '吃了。现在好多了。', pinyin: 'Chī le. Xiànzài hǎo duō le.', vi: 'Uống rồi. Bây giờ tốt hơn nhiều rồi.' },
              { speaker: 'A', hanzi: '什么时候能出院？', pinyin: 'Shénme shíhou néng chūyuàn?', vi: 'Khi nào thì có thể xuất viện?' },
              { speaker: 'B', hanzi: '医生说下个星期。', pinyin: 'Yīshēng shuō xià ge xīngqī.', vi: 'Bác sĩ nói là tuần sau.' }
            ]
          },
          {
            id: 'd3',
            place: '在操场 (Trên sân tập)',
            lines: [
              { speaker: 'A', hanzi: '大卫今年多大？', pinyin: 'Dàwèi jīnnián duō dà?', vi: 'David năm nay bao nhiêu tuổi?' },
              { speaker: 'B', hanzi: '20多岁。', pinyin: 'Èrshí duō suì.', vi: 'Hơn 20 tuổi.' },
              { speaker: 'A', hanzi: '他多高？', pinyin: 'Tā duō gāo?', vi: 'Anh ấy cao bao nhiêu?' },
              { speaker: 'B', hanzi: '一米8几。', pinyin: 'Yī mǐ bā jǐ.', vi: 'Hơn 1 mét 8.' },
              { speaker: 'A', hanzi: '你怎么知道这么多呀？', pinyin: 'Nǐ zěnme zhīdào zhème duō ya?', vi: 'Sao bạn lại biết nhiều chuyện về anh ấy thế?' },
              { speaker: 'B', hanzi: '他是我同学。', pinyin: 'Tā shì wǒ tóngxué.', vi: 'Anh ấy là bạn học của tôi.' }
            ]
          },
          {
            id: 'd4',
            place: '在房间 (Trong phòng)',
            lines: [
              { speaker: 'A', hanzi: '张老师星期六也不休息啊。', pinyin: 'Zhāng lǎoshī xīngqīliù yě bù xiūxi a.', vi: 'Thầy Trương thứ Bảy cũng không nghỉ ngơi à.' },
              { speaker: 'B', hanzi: '是啊，他这几天很忙，没有时间休息。', pinyin: 'Shì a, tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.', vi: 'Đúng vậy, mấy ngày nay thầy ấy rất bận, không có thời gian nghỉ ngơi.' },
              { speaker: 'A', hanzi: '那会很累吧。', pinyin: 'Nà huì hěn lèi ba.', vi: 'Như thế thì mệt lắm nhỉ.' },
              { speaker: 'B', hanzi: '他每天回来都很累。', pinyin: 'Tā měitiān huílái dōu hěn lèi.', vi: 'Mỗi ngày thầy ấy về nhà đều rất mệt.' }
            ]
          }
        ],

        vocab: [
          { id: 'l2-1', hanzi: '生病', pinyin: 'shēngbìng', pos: 'Động từ', meaning: 'bị bệnh, sinh bệnh', example: '他生病了，今天没有去上班。' },
          { id: 'l2-2', hanzi: '每', pinyin: 'měi', pos: 'Đại từ', meaning: 'mỗi', example: '我每天都学习中文。' },
          { id: 'l2-3', hanzi: '早上', pinyin: 'zǎoshang', pos: 'Danh từ', meaning: 'buổi sáng', example: '早上的天气很冷。' },
          { id: 'l2-4', hanzi: '跑步', pinyin: 'pǎobù', pos: 'Động từ', meaning: 'chạy bộ', example: '我常常去公园跑步。' },
          { id: 'l2-5', hanzi: '起床', pinyin: 'qǐchuáng', pos: 'Động từ', meaning: 'thức dậy', example: '你每天几点起床？' },
          { id: 'l2-6', hanzi: '药', pinyin: 'yào', pos: 'Danh từ', meaning: 'thuốc', example: '吃药以后要喝水。' },
          { id: 'l2-7', hanzi: '身体', pinyin: 'shēntǐ', pos: 'Danh từ', meaning: 'cơ thể, sức khỏe', example: '爸爸的身体很好。' },
          { id: 'l2-8', hanzi: '出院', pinyin: 'chūyuàn', pos: 'Động từ', meaning: 'xuất viện', example: '他明天就可以出院了。' },
          { id: 'l2-9', hanzi: '高', pinyin: 'gāo', pos: 'Tính từ', meaning: 'cao', example: '他比我高一点儿。' },
          { id: 'l2-10', hanzi: '米', pinyin: 'mǐ', pos: 'Lượng từ', meaning: 'mét', example: '他高一米八。' },
          { id: 'l2-11', hanzi: '知道', pinyin: 'zhīdào', pos: 'Động từ', meaning: 'biết', example: '我知道这件事。' },
          { id: 'l2-12', hanzi: '休息', pinyin: 'xiūxi', pos: 'Động từ', meaning: 'nghỉ ngơi', example: '累了就休息一下吧。' },
          { id: 'l2-13', hanzi: '忙', pinyin: 'máng', pos: 'Tính từ', meaning: 'bận', example: '老师最近很忙。' },
          { id: 'l2-14', hanzi: '时间', pinyin: 'shíjiān', pos: 'Danh từ', meaning: 'thời gian', example: '我没有时间去玩。' },
          { id: 'l2-15', hanzi: '累', pinyin: 'lèi', pos: 'Tính từ', meaning: 'mệt', example: '工作一天，我很累。' }
        ],

        grammar: [
          {
            term: '是不是（Có phải... không?）',
            note: 'Dùng khi người nói đã có phỏng đoán khá chắc chắn về một sự việc, muốn hỏi lại để xác nhận. 是不是 có thể đứng đầu câu, giữa câu (trước vị ngữ) hoặc cuối câu.',
            formula: null,
            examples: [
              { hanzi: '你很少生病，是不是喜欢运动？', pinyin: 'Nǐ hěn shǎo shēngbìng, shìbushì xǐhuan yùndòng?', vi: 'Bạn rất ít khi bị bệnh, có phải là vì thích vận động không?' },
              { hanzi: '是不是明天爸爸休息？', pinyin: 'Shìbushì míngtiān bàba xiūxi?', vi: 'Có phải ngày mai bố được nghỉ không?' },
              { hanzi: '我们星期一去北京，是不是？', pinyin: 'Wǒmen xīngqīyī qù Běijīng, shìbushì?', vi: 'Chúng ta thứ Hai đi Bắc Kinh, đúng không?' }
            ]
          },
          {
            term: '每（Mỗi）',
            note: '每 đặt trước lượng từ + danh từ để chỉ một cá thể/nhóm bất kỳ trong tổng thể, không loại trừ ai. Thường kết hợp với phó từ 都 phía sau để nhấn mạnh "mỗi... đều...".',
            formula: '每 + Lượng từ + Danh từ + 都 + Động từ / Tính từ',
            examples: [
              { hanzi: '我每天六点起床。', pinyin: 'Wǒ měitiān liù diǎn qǐchuáng.', vi: 'Mỗi ngày tôi đều thức dậy lúc 6 giờ.' },
              { hanzi: '山姆每年都去中国旅游。', pinyin: 'Shānmǔ měinián dōu qù Zhōngguó lǚyóu.', vi: 'Sam mỗi năm đều đi Trung Quốc du lịch.' },
              { hanzi: '你每个星期六都工作吗？', pinyin: 'Nǐ měige xīngqīliù dōu gōngzuò ma?', vi: 'Mỗi thứ Bảy bạn đều phải làm việc à?' }
            ]
          },
          {
            term: '多 + Tính từ（Bao nhiêu? / Như thế nào?）',
            note: 'Đại từ nghi vấn 多 đứng trước một tính từ (高, 大...) để hỏi về mức độ: chiều cao, tuổi tác... Khi trả lời phải nêu con số cụ thể.',
            formula: 'Chủ ngữ + 多 + Tính từ？',
            qaExamples: [
              { q: { hanzi: '你多大？', pinyin: 'Nǐ duō dà?' }, a: { hanzi: '我16岁。', pinyin: 'Wǒ shíliù suì.' }, vi: 'Bạn bao nhiêu tuổi? – Tôi 16 tuổi.' },
              { q: { hanzi: '大卫多高？', pinyin: 'Dàwèi duō gāo?' }, a: { hanzi: '一米八。', pinyin: 'Yī mǐ bā.' }, vi: 'David cao bao nhiêu? – Cậu ấy cao 1m8.' },
              { q: { hanzi: '他多高？', pinyin: 'Tā duō gāo?' }, a: { hanzi: '一米八几。', pinyin: 'Yī mǐ bā jǐ.' }, vi: 'Anh ấy cao thế nào? – Cao hơn 1 mét 8 một chút.' }
            ]
          }
        ],

        fillBlank: [
          { id: 'l2-fb1', sentence: '你很少生病，___ 喜欢运动？', answer: '是不是', options: ['是不是', '每', '多', '都'] },
          { id: 'l2-fb2', sentence: '我 ___ 天早上都要出去跑步。', answer: '每', options: ['每', '是', '多', '都'] },
          { id: 'l2-fb3', sentence: '你 ___ 大？', answer: '多', options: ['多', '每', '是', '几'] },
          { id: 'l2-fb4', sentence: '他这几天很忙，没有 ___ 休息。', answer: '时间', options: ['时间', '身体', '起床', '知道'] },
          { id: 'l2-fb5', sentence: '工作一天，我很 ___。', answer: '累', options: ['累', '忙', '高', '早上'] }
        ],

        sentenceBuild: [
          { id: 'l2-sb1', tokens: ['我', '每天', '六点', '起床'], translation: 'Mỗi ngày tôi đều thức dậy lúc 6 giờ.' },
          { id: 'l2-sb2', tokens: ['我', '每天', '早上', '都要', '出去', '跑步'], translation: 'Mỗi sáng tôi đều phải ra ngoài chạy bộ.' },
          { id: 'l2-sb3', tokens: ['他', '这几天', '很忙'], translation: 'Mấy ngày nay anh ấy rất bận.' },
          { id: 'l2-sb4', tokens: ['你', '每天', '几点', '起床'], translation: 'Mỗi ngày bạn thức dậy lúc mấy giờ?' }
        ],

        dialogueQA: [
          { id: 'l2-qa1', dialogueId: 'd1', question: 'Trong hội thoại "Trên sân vận động", B thức dậy lúc mấy giờ mỗi ngày?', options: ['5 giờ', '6 giờ', '7 giờ', '8 giờ'], answer: '6 giờ' },
          { id: 'l2-qa2', dialogueId: 'd2', question: 'Theo lời bác sĩ, khi nào B có thể xuất viện?', options: ['Ngày mai', 'Tuần sau', 'Tháng sau', 'Hôm nay'], answer: 'Tuần sau' },
          { id: 'l2-qa3', dialogueId: 'd3', question: 'David cao khoảng bao nhiêu?', options: ['Hơn 1m7', 'Hơn 1m8', 'Đúng 1m8', 'Hơn 1m9'], answer: 'Hơn 1m8' },
          { id: 'l2-qa4', dialogueId: 'd4', question: 'Vì sao thầy Trương rất mệt mỗi khi về nhà?', options: ['Vì thầy bị bệnh', 'Vì thầy bận, không có thời gian nghỉ ngơi', 'Vì thầy phải đi xa', 'Vì thầy dậy sớm'], answer: 'Vì thầy bận, không có thời gian nghỉ ngơi' }
        ]
      }
    ]
  }
};
