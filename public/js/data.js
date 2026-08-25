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
   * Lo trinh bai hoc HSK2, bam sat cau truc 11 bai hoc (chu de + ngu phap trong tam).
   * Tu vung / cau vi du / bai tap la noi dung bien soan rieng, khong sao chep nguyen van giao trinh.
   */
  lessons: {
    hsk2: [
      {
        id: 'hsk2-l1',
        number: 1,
        title: 'Dự định đi chơi, mốc thời gian',
        grammar: [
          { term: '要 (yào)', note: 'Trợ động từ diễn tả ý định, dự định sắp làm gì. VD: 我要去北京。' },
          { term: '最 (zuì)', note: 'Phó từ chỉ mức độ cao nhất, đứng trước tính từ/động từ.' },
          { term: '几 / 多 + tính từ', note: 'Dùng hỏi số lượng hoặc mức độ ước chừng, ví dụ 几个, 多大.' }
        ],
        vocab: [
          { id: 'l1-1', hanzi: '打算', pinyin: 'dǎ suàn', meaning: 'dự định' },
          { id: 'l1-2', hanzi: '最好', pinyin: 'zuì hǎo', meaning: 'tốt nhất' },
          { id: 'l1-3', hanzi: '出发', pinyin: 'chū fā', meaning: 'xuất phát' },
          { id: 'l1-4', hanzi: '一定', pinyin: 'yí dìng', meaning: 'nhất định' },
          { id: 'l1-5', hanzi: '天气', pinyin: 'tiān qì', meaning: 'thời tiết' },
          { id: 'l1-6', hanzi: '计划', pinyin: 'jì huà', meaning: 'kế hoạch' }
        ],
        fillBlank: [
          { id: 'l1-fb1', sentence: '我 ___ 九月去北京旅游。', answer: '打算', options: ['打算', '已经', '觉得', '希望'] }
        ],
        sentenceBuild: [
          { id: 'l1-sb1', tokens: ['我', '打算', '六月', '出发'], translation: 'Tôi dự định xuất phát vào tháng sáu.' }
        ]
      },
      {
        id: 'hsk2-l2',
        number: 2,
        title: 'Giờ giấc sinh hoạt hàng ngày',
        grammar: [
          { term: '是不是', note: 'Chèn vào giữa câu để hỏi xác nhận, tương đương "có phải... không".' },
          { term: '每', note: 'Đại từ chỉ "mỗi", luôn đi cùng danh từ hoặc lượng từ, ví dụ 每天, 每个人.' },
          { term: '多 + tính từ', note: 'Cấu trúc hỏi mức độ, ví dụ 多大, 多高.' }
        ],
        vocab: [
          { id: 'l2-1', hanzi: '起床', pinyin: 'qǐ chuáng', meaning: 'thức dậy' },
          { id: 'l2-2', hanzi: '每天', pinyin: 'měi tiān', meaning: 'mỗi ngày' },
          { id: 'l2-3', hanzi: '睡觉', pinyin: 'shuì jiào', meaning: 'ngủ' },
          { id: 'l2-4', hanzi: '上班', pinyin: 'shàng bān', meaning: 'đi làm' },
          { id: 'l2-5', hanzi: '早上', pinyin: 'zǎo shang', meaning: 'buổi sáng' },
          { id: 'l2-6', hanzi: '晚上', pinyin: 'wǎn shang', meaning: 'buổi tối' }
        ],
        fillBlank: [
          { id: 'l2-fb1', sentence: '你 ___ 六点起床？', answer: '是不是', options: ['是不是', '因为', '已经', '一定'] }
        ],
        sentenceBuild: [
          { id: 'l2-sb1', tokens: ['我', '每天', '七点', '起床'], translation: 'Mỗi ngày tôi thức dậy lúc bảy giờ.' }
        ]
      },
      {
        id: 'hsk2-l3',
        number: 3,
        title: 'Miêu tả đồ vật, màu sắc',
        grammar: [
          { term: 'Cụm từ có 的', note: 'Tạo danh ngữ mô tả đặc điểm sự vật, ví dụ 红色的(那个).' },
          { term: '一下', note: 'Đặt sau động từ để giảm nhẹ hành động, mang nghĩa "thử một chút".' },
          { term: '真', note: 'Phó từ ngữ khí nhấn mạnh cảm xúc thật sự, đứng trước tính từ.' }
        ],
        vocab: [
          { id: 'l3-1', hanzi: '颜色', pinyin: 'yán sè', meaning: 'màu sắc' },
          { id: 'l3-2', hanzi: '左边', pinyin: 'zuǒ biān', meaning: 'bên trái' },
          { id: 'l3-3', hanzi: '右边', pinyin: 'yòu biān', meaning: 'bên phải' },
          { id: 'l3-4', hanzi: '杯子', pinyin: 'bēi zi', meaning: 'cái cốc' },
          { id: 'l3-5', hanzi: '真', pinyin: 'zhēn', meaning: 'thật là' },
          { id: 'l3-6', hanzi: '好看', pinyin: 'hǎo kàn', meaning: 'đẹp' }
        ],
        fillBlank: [
          { id: 'l3-fb1', sentence: '这个颜色 ___ 好看。', answer: '真', options: ['真', '一下', '就', '别'] }
        ],
        sentenceBuild: [
          { id: 'l3-sb1', tokens: ['这个', '颜色', '真', '好看'], translation: 'Màu này thật đẹp.' }
        ]
      },
      {
        id: 'hsk2-l4',
        number: 4,
        title: 'Công việc và nhờ giúp đỡ',
        grammar: [
          { term: '是...的', note: 'Nhấn mạnh thời gian, địa điểm hoặc cách thức của việc đã xảy ra.' },
          { term: '...的时候', note: 'Chỉ thời điểm xảy ra hành động, tương đương "khi...".' },
          { term: '已经', note: 'Phó từ chỉ hành động đã hoàn thành, thường đi cùng 了.' }
        ],
        vocab: [
          { id: 'l4-1', hanzi: '介绍', pinyin: 'jiè shào', meaning: 'giới thiệu' },
          { id: 'l4-2', hanzi: '帮忙', pinyin: 'bāng máng', meaning: 'giúp đỡ' },
          { id: 'l4-3', hanzi: '工作', pinyin: 'gōng zuò', meaning: 'công việc' },
          { id: 'l4-4', hanzi: '面试', pinyin: 'miàn shì', meaning: 'phỏng vấn' },
          { id: 'l4-5', hanzi: '顺利', pinyin: 'shùn lì', meaning: 'thuận lợi' },
          { id: 'l4-6', hanzi: '已经', pinyin: 'yǐ jīng', meaning: 'đã' }
        ],
        fillBlank: [
          { id: 'l4-fb1', sentence: '这份工作 ___ 他帮我介绍的。', answer: '是', options: ['是', '在', '从', '对'] }
        ],
        sentenceBuild: [
          { id: 'l4-sb1', tokens: ['面试', '已经', '结束', '了'], translation: 'Buổi phỏng vấn đã kết thúc rồi.' }
        ]
      },
      {
        id: 'hsk2-l5',
        number: 5,
        title: 'Mua sắm, chọn đồ',
        grammar: [
          { term: '就', note: 'Phó từ nhấn mạnh tính khẳng định, dứt khoát của quyết định.' },
          { term: '还', note: 'Ngữ khí phó từ mang sắc thái "vẫn, vẫn còn" trong câu trần thuật.' },
          { term: '有点儿', note: 'Phó từ chỉ mức độ nhẹ, thường mang nghĩa tiêu cực, đứng trước tính từ.' }
        ],
        vocab: [
          { id: 'l5-1', hanzi: '衣服', pinyin: 'yī fu', meaning: 'quần áo' },
          { id: 'l5-2', hanzi: '试穿', pinyin: 'shì chuān', meaning: 'mặc thử' },
          { id: 'l5-3', hanzi: '价钱', pinyin: 'jià qián', meaning: 'giá cả' },
          { id: 'l5-4', hanzi: '便宜', pinyin: 'pián yi', meaning: 'rẻ' },
          { id: 'l5-5', hanzi: '有点儿', pinyin: 'yǒu diǎnr', meaning: 'hơi' },
          { id: 'l5-6', hanzi: '就', pinyin: 'jiù', meaning: 'thì, liền' }
        ],
        fillBlank: [
          { id: 'l5-fb1', sentence: '这件衣服 ___ 贵。', answer: '有点儿', options: ['有点儿', '最', '再', '别'] }
        ],
        sentenceBuild: [
          { id: 'l5-sb1', tokens: ['我', '就', '买', '这件'], translation: 'Tôi mua chiếc này luôn.' }
        ]
      },
      {
        id: 'hsk2-l6',
        number: 6,
        title: 'Hỏi lý do, chuyện ăn uống',
        grammar: [
          { term: '怎么', note: 'Đại từ nghi vấn dùng hỏi nguyên nhân hoặc cách thức.' },
          { term: 'Lặp lượng từ', note: 'Lặp lại lượng từ để diễn đạt nghĩa "mỗi, từng cái một".' },
          { term: '因为...所以...', note: 'Cặp liên từ nêu nguyên nhân - kết quả.' }
        ],
        vocab: [
          { id: 'l6-1', hanzi: '面条', pinyin: 'miàn tiáo', meaning: 'mì sợi' },
          { id: 'l6-2', hanzi: '羊肉', pinyin: 'yáng ròu', meaning: 'thịt cừu' },
          { id: 'l6-3', hanzi: '好吃', pinyin: 'hǎo chī', meaning: 'ngon' },
          { id: 'l6-4', hanzi: '骑自行车', pinyin: 'qí zì xíng chē', meaning: 'đi xe đạp' },
          { id: 'l6-5', hanzi: '因为', pinyin: 'yīn wèi', meaning: 'bởi vì' },
          { id: 'l6-6', hanzi: '所以', pinyin: 'suǒ yǐ', meaning: 'cho nên' }
        ],
        fillBlank: [
          { id: 'l6-fb1', sentence: '我 ___ 生病了，所以没去上班。', answer: '因为', options: ['因为', '所以', '怎么', '从'] }
        ],
        sentenceBuild: [
          { id: 'l6-sb1', tokens: ['羊肉', '面条', '很', '好吃'], translation: 'Mì thịt cừu rất ngon.' }
        ]
      },
      {
        id: 'hsk2-l7',
        number: 7,
        title: 'Khoảng cách và phương tiện đi lại',
        grammar: [
          { term: '还 (2)', note: 'Mang nghĩa "vẫn còn", biểu thị trạng thái tiếp diễn.' },
          { term: '离', note: 'Giới từ chỉ khoảng cách giữa hai địa điểm, ví dụ 离公司远吗？' },
          { term: '呢', note: 'Trợ từ ngữ khí dùng ở cuối câu hỏi rút gọn hoặc duy trì trạng thái.' }
        ],
        vocab: [
          { id: 'l7-1', hanzi: '公司', pinyin: 'gōng sī', meaning: 'công ty' },
          { id: 'l7-2', hanzi: '公共汽车', pinyin: 'gōng gòng qì chē', meaning: 'xe buýt' },
          { id: 'l7-3', hanzi: '机场', pinyin: 'jī chǎng', meaning: 'sân bay' },
          { id: 'l7-4', hanzi: '走路', pinyin: 'zǒu lù', meaning: 'đi bộ' },
          { id: 'l7-5', hanzi: '离', pinyin: 'lí', meaning: 'cách' },
          { id: 'l7-6', hanzi: '近', pinyin: 'jìn', meaning: 'gần' }
        ],
        fillBlank: [
          { id: 'l7-fb1', sentence: '你家 ___ 公司远吗？', answer: '离', options: ['离', '从', '对', '比'] }
        ],
        sentenceBuild: [
          { id: 'l7-sb1', tokens: ['我', '走路', '去', '公司'], translation: 'Tôi đi bộ đến công ty.' }
        ]
      },
      {
        id: 'hsk2-l8',
        number: 8,
        title: 'Nhờ vả và hẹn việc',
        grammar: [
          { term: '...，好吗？', note: 'Cấu trúc hỏi ý kiến, đề nghị ở cuối câu.' },
          { term: '再', note: 'Phó từ chỉ hành động sẽ lặp lại trong tương lai.' },
          { term: 'Câu kiêm ngữ', note: 'Một từ vừa làm tân ngữ của động từ trước, vừa làm chủ ngữ của động từ sau (như 让, 请).' }
        ],
        vocab: [
          { id: 'l8-1', hanzi: '服务员', pinyin: 'fú wù yuán', meaning: 'nhân viên phục vụ' },
          { id: 'l8-2', hanzi: '再', pinyin: 'zài', meaning: 'lại, thêm nữa' },
          { id: 'l8-3', hanzi: '告诉', pinyin: 'gào su', meaning: 'nói cho biết' },
          { id: 'l8-4', hanzi: '事情', pinyin: 'shì qing', meaning: 'việc, chuyện' },
          { id: 'l8-5', hanzi: '等', pinyin: 'děng', meaning: 'đợi' },
          { id: 'l8-6', hanzi: '找', pinyin: 'zhǎo', meaning: 'tìm' }
        ],
        fillBlank: [
          { id: 'l8-fb1', sentence: '服务员，___ 给我一杯水，好吗？', answer: '再', options: ['再', '别', '就', '已经'] }
        ],
        sentenceBuild: [
          { id: 'l8-sb1', tokens: ['等', '一下', '服务员', '就', '来'], translation: 'Đợi một chút, nhân viên phục vụ sẽ đến ngay.' }
        ]
      },
      {
        id: 'hsk2-l9',
        number: 9,
        title: 'Kết quả và thứ tự công việc',
        grammar: [
          { term: 'Bổ ngữ kết quả', note: 'Đứng sau động từ để chỉ kết quả của hành động, ví dụ 做完, 听懂.' },
          { term: '从', note: 'Giới từ chỉ điểm bắt đầu về thời gian hoặc không gian.' },
          { term: '第~', note: 'Tiền tố tạo số thứ tự, ví dụ 第一, 第二.' }
        ],
        vocab: [
          { id: 'l9-1', hanzi: '问题', pinyin: 'wèn tí', meaning: 'câu hỏi, vấn đề' },
          { id: 'l9-2', hanzi: '完', pinyin: 'wán', meaning: 'xong' },
          { id: 'l9-3', hanzi: '希望', pinyin: 'xī wàng', meaning: 'hy vọng' },
          { id: 'l9-4', hanzi: '从', pinyin: 'cóng', meaning: 'từ' },
          { id: 'l9-5', hanzi: '第一', pinyin: 'dì yī', meaning: 'thứ nhất' },
          { id: 'l9-6', hanzi: '懂', pinyin: 'dǒng', meaning: 'hiểu' }
        ],
        fillBlank: [
          { id: 'l9-fb1', sentence: '你的问题我还没做 ___。', answer: '完', options: ['完', '懂', '从', '第'] }
        ],
        sentenceBuild: [
          { id: 'l9-sb1', tokens: ['我', '已经', '做', '完', '作业'], translation: 'Tôi đã làm xong bài tập rồi.' }
        ]
      },
      {
        id: 'hsk2-l10',
        number: 10,
        title: 'Đồ thất lạc, câu cầu khiến',
        grammar: [
          { term: '不要...了 / 别...了', note: 'Cấu trúc câu cầu khiến mang nghĩa "đừng làm... nữa".' },
          { term: '对', note: 'Giới từ chỉ đối tượng chịu tác động, tương đương "đối với".' }
        ],
        vocab: [
          { id: 'l10-1', hanzi: '手机', pinyin: 'shǒu jī', meaning: 'điện thoại di động' },
          { id: 'l10-2', hanzi: '别', pinyin: 'bié', meaning: 'đừng' },
          { id: 'l10-3', hanzi: '帮助', pinyin: 'bāng zhù', meaning: 'giúp đỡ' },
          { id: 'l10-4', hanzi: '桌子', pinyin: 'zhuō zi', meaning: 'cái bàn' },
          { id: 'l10-5', hanzi: '对', pinyin: 'duì', meaning: 'đối với' },
          { id: 'l10-6', hanzi: '正在', pinyin: 'zhèng zài', meaning: 'đang' }
        ],
        fillBlank: [
          { id: 'l10-fb1', sentence: '别找 ___，手机在桌子上呢。', answer: '了', options: ['了', '呢', '吗', '过'] }
        ],
        sentenceBuild: [
          { id: 'l10-sb1', tokens: ['手机', '在', '桌子', '上'], translation: 'Điện thoại ở trên bàn.' }
        ]
      },
      {
        id: 'hsk2-l11',
        number: 11,
        title: 'So sánh tuổi tác, khả năng',
        grammar: [
          { term: 'Động từ làm định ngữ', note: 'Dùng cụm động từ để bổ nghĩa cho danh từ đứng sau, kèm 的.' },
          { term: '比 (câu chữ 比)', note: 'Cấu trúc so sánh hơn kém giữa hai đối tượng, ví dụ A 比 B 大。' },
          { term: '可能', note: 'Trợ động từ / phó từ chỉ khả năng có thể xảy ra.' }
        ],
        vocab: [
          { id: 'l11-1', hanzi: '唱歌', pinyin: 'chàng gē', meaning: 'hát' },
          { id: 'l11-2', hanzi: '跳舞', pinyin: 'tiào wǔ', meaning: 'nhảy múa' },
          { id: 'l11-3', hanzi: '比', pinyin: 'bǐ', meaning: 'so với' },
          { id: 'l11-4', hanzi: '岁', pinyin: 'suì', meaning: 'tuổi' },
          { id: 'l11-5', hanzi: '可能', pinyin: 'kě néng', meaning: 'có thể' },
          { id: 'l11-6', hanzi: '姓', pinyin: 'xìng', meaning: 'họ (tên)' }
        ],
        fillBlank: [
          { id: 'l11-fb1', sentence: '他 ___ 我大三岁。', answer: '比', options: ['比', '从', '对', '跟'] }
        ],
        sentenceBuild: [
          { id: 'l11-sb1', tokens: ['妹妹', '比', '我', '小'], translation: 'Em gái nhỏ tuổi hơn tôi.' }
        ]
      }
    ]
  }
};
