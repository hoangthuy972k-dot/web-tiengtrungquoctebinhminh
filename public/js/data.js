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

  /**
   * Danh sach bai hoc HSK2 - moi bai la mot trang doc lap day du
   * (public/lessons/bai-N.html), thẻ ở đây chỉ hiển thị tóm tắt và dẫn thẳng tới đó.
   */
  lessons: {
    hsk2: [
      {
        id: 'hsk2-l2',
        number: 2,
        title: 'Mỗi ngày tôi đều thức dậy lúc 6 giờ',
        titleHanzi: '我每天六点起床',
        titlePinyin: 'Wǒ měitiān liù diǎn qǐchuáng',
        topic: 'Sinh hoạt hàng ngày & Sức khỏe',
        vocabCount: 15,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-2.html'
      },
      {
        id: 'hsk2-l3',
        number: 3,
        title: 'Cái màu đỏ ở bên trái là của tôi',
        titleHanzi: '左边那个红色的是我的',
        titlePinyin: 'Zuǒbiān nàge hóngsè de shì wǒ de',
        topic: 'Đồ vật & Phòng ốc trong nhà',
        vocabCount: 15,
        dialogueCount: 3,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-3.html'
      },
      {
        id: 'hsk2-l4',
        number: 4,
        title: 'Công việc này là do anh ấy giới thiệu cho tôi',
        titleHanzi: '这个工作是他帮我介绍的',
        titlePinyin: 'Zhège gōngzuò shì tā bāng wǒ jièshào de',
        topic: 'Công việc & Sở thích cá nhân',
        vocabCount: 13,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-4.html'
      },
      {
        id: 'hsk2-l5',
        number: 5,
        title: 'Mua chiếc áo này đi',
        titleHanzi: '就买这件吧',
        titlePinyin: 'Jiù mǎi zhè jiàn ba',
        topic: 'Mua sắm & Đời sống hàng ngày',
        vocabCount: 13,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-5.html'
      },
      {
        id: 'hsk2-l6',
        number: 6,
        title: 'Sao bạn không ăn nữa?',
        titleHanzi: '你怎么不吃了？',
        titlePinyin: 'Nǐ zěnme bù chī le?',
        topic: 'Ăn uống, Thể thao & Lý do',
        vocabCount: 13,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-6.html'
      },
      {
        id: 'hsk2-l7',
        number: 7,
        title: 'Nhà bạn cách công ty có xa không?',
        titleHanzi: '你家离公司远吗？',
        titlePinyin: 'Nǐ jiā lí gōngsī yuǎn ma?',
        topic: 'Khoảng cách & Phương tiện đi lại',
        vocabCount: 13,
        dialogueCount: 4,
        grammarCount: 4,
        fullPageUrl: '/lessons/bai-7.html'
      },
      {
        id: 'hsk2-l8',
        number: 8,
        title: 'Để tôi suy nghĩ rồi nói cho bạn biết',
        titleHanzi: '让我想想再告诉你',
        titlePinyin: 'Ràng wǒ xiǎngxiang zài gàosu nǐ',
        topic: 'Nhờ vả, Dịch vụ & Mua sắm',
        vocabCount: 9,
        dialogueCount: 4,
        grammarCount: 4,
        fullPageUrl: '/lessons/bai-8.html'
      },
      {
        id: 'hsk2-l9',
        number: 9,
        title: 'Đề nhiều quá, tôi chưa làm xong',
        titleHanzi: '题太多，我没做完',
        titlePinyin: 'Tí tài duō, wǒ méi zuò wán',
        topic: 'Điện thoại, Học tập & Công việc mới',
        vocabCount: 11,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-9.html'
      },
      {
        id: 'hsk2-l10',
        number: 10,
        title: 'Đừng tìm nữa, điện thoại ở trên bàn kìa',
        titleHanzi: '别找了，手机在桌子上呢',
        titlePinyin: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne',
        topic: 'Sinh hoạt gia đình & Lời khuyên',
        vocabCount: 9,
        dialogueCount: 4,
        grammarCount: 2,
        fullPageUrl: '/lessons/bai-10.html'
      },
      {
        id: 'hsk2-l11',
        number: 11,
        title: 'Anh ấy lớn hơn tôi ba tuổi',
        titleHanzi: '他比我大三岁',
        titlePinyin: 'Tā bǐ wǒ dà sān suì',
        topic: 'So sánh & Người quen',
        vocabCount: 11,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-11.html'
      },
      {
        id: 'hsk2-l12',
        number: 12,
        title: 'Bạn mặc ít quá',
        titleHanzi: '你穿得太少了',
        titlePinyin: 'Nǐ chuān de tài shǎo le',
        topic: 'Sinh hoạt, Thời tiết & Gia đình',
        vocabCount: 9,
        dialogueCount: 4,
        grammarCount: 2,
        fullPageUrl: '/lessons/bai-12.html'
      },
      {
        id: 'hsk2-l13',
        number: 13,
        title: 'Cửa đang mở đấy',
        titleHanzi: '门开着呢',
        titlePinyin: 'Mén kāizhe ne',
        topic: 'Miêu tả trạng thái & Hỏi đường',
        vocabCount: 11,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-13.html'
      },
      {
        id: 'hsk2-l14',
        number: 14,
        title: 'Bạn đã từng xem bộ phim đó chưa?',
        titleHanzi: '你看过那个电影吗？',
        titlePinyin: 'Nǐ kànguo nàge diànyǐng ma?',
        topic: 'Kinh nghiệm, Sở thích & Thời tiết',
        vocabCount: 8,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-14.html'
      },
      {
        id: 'hsk2-l15',
        number: 15,
        title: 'Năm mới sắp đến rồi',
        titleHanzi: '新年就要到了',
        titlePinyin: 'Xīnnián jiùyào dào le',
        topic: 'Năm mới, Thời tiết & Gia đình',
        vocabCount: 8,
        dialogueCount: 4,
        grammarCount: 3,
        fullPageUrl: '/lessons/bai-15.html'
      }
    ]
  }
};
