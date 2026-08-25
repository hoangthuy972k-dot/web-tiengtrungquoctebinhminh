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
  }
};
