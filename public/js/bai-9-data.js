// ══════════════════════════════════════════
// DATA — Bài 9: 题太多，我没做完
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "错",
    "py": "cuò",
    "pos": "Tính từ",
    "vn": "sai, nhầm",
    "hv": "thác",
    "em": "❌",
    "lesson": 1,
    "ex_zh": "你打错了。",
    "ex_py": "Nǐ dǎ cuò le.",
    "ex_vn": "Bạn gọi nhầm số rồi.",
    "exList": [
      {
        "zh": "你打错了。",
        "py": "Nǐ dǎ cuò le.",
        "vn": "Bạn gọi nhầm số rồi."
      },
      {
        "zh": "对不起，我说错了。",
        "py": "Duìbuqǐ, wǒ shuō cuò le.",
        "vn": "Xin lỗi, tôi nói sai rồi."
      },
      {
        "zh": "这个字你写错了。",
        "py": "Zhège zì nǐ xiě cuò le.",
        "vn": "Chữ này bạn viết sai rồi."
      }
    ],
    "hanzi": [
      {
        "c": "错",
        "p": "cuò",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "钅(kim) trái → 昔 (tích) phải",
        "rad": "钅(kim – kim loại)",
        "mean": "sai, nhầm",
        "tip": "Đã gặp trong 不错 (Bài 5) — 钅 xưa liên quan tới việc mài giũa, sai lệch trong chế tác kim loại.",
        "cf": "措 (cuò – \"biện pháp\")",
        "w": "打错 / 不错 / 错了"
      }
    ],
    "colloFull": [
      {
        "zh": "错了",
        "py": "cuò le",
        "vn": "sai rồi"
      },
      {
        "zh": "写错了",
        "py": "xiě cuò le",
        "vn": "viết sai rồi"
      },
      {
        "zh": "说错",
        "py": "shuō cuò",
        "vn": "nói sai"
      },
      {
        "zh": "不错",
        "py": "búcuò",
        "vn": "khá tốt"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 错 + 了",
        "m": "Làm sai rồi: 我写错了"
      },
      {
        "s": "错 (sai) nhưng 不错 lại là KHEN — chú ý đừng nhầm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chữ này tôi viết sai rồi.",
        "answer": "这个字我写错了。",
        "answerPy": "Zhège zì wǒ xiěcuò le.",
        "note": "错 đứng SAU động từ, nói kết quả.",
        "pair": "V + 错了"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi, tôi nói sai rồi.",
        "answer": "对不起，我说错了。",
        "answerPy": "Duìbuqǐ, wǒ shuōcuò le.",
        "note": "错 (sai) nhưng 不错 lại là lời khen.",
        "pair": "V + 错了"
      }
    ]
  },
  {
    "n": 2,
    "zh": "从",
    "py": "cóng",
    "pos": "Giới từ",
    "vn": "từ (mốc thời gian, địa điểm)",
    "hv": "tòng",
    "em": "🚩",
    "lesson": 2,
    "ex_zh": "从什么时候开始？",
    "ex_py": "Cóng shénme shíhou kāishǐ?",
    "ex_vn": "Bắt đầu từ khi nào?",
    "exList": [
      {
        "zh": "从什么时候开始？",
        "py": "Cóng shénme shíhou kāishǐ?",
        "vn": "Bắt đầu từ khi nào?"
      },
      {
        "zh": "我从北京来。",
        "py": "Wǒ cóng Běijīng lái.",
        "vn": "Tôi đến từ Bắc Kinh."
      },
      {
        "zh": "从这儿到学校很近。",
        "py": "Cóng zhèr dào xuéxiào hěn jìn.",
        "vn": "Từ đây đến trường rất gần."
      }
    ],
    "hanzi": [
      {
        "c": "从",
        "p": "cóng",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "人→人 (hai người nối tiếp)",
        "rad": "人 (nhân – người)",
        "mean": "từ, theo",
        "tip": "Hình hai người nối đuôi nhau đi cùng hướng → nghĩa \"ĐI THEO, xuất phát TỪ\".",
        "cf": "丛 (cóng – \"bụi cây\", thêm nét dưới)",
        "w": "从…开始 / 从来 / 自从"
      }
    ],
    "colloFull": [
      {
        "zh": "从这儿",
        "py": "cóng zhèr",
        "vn": "từ đây"
      },
      {
        "zh": "从家到公司",
        "py": "cóng jiā dào gōngsī",
        "vn": "từ nhà đến công ty"
      },
      {
        "zh": "从八点",
        "py": "cóng bā diǎn",
        "vn": "từ tám giờ"
      },
      {
        "zh": "从学校来",
        "py": "cóng xuéxiào lái",
        "vn": "từ trường đến"
      }
    ],
    "patterns": [
      {
        "s": "从 + A + 到 + B",
        "m": "Từ A đến B: 从家到公司"
      },
      {
        "s": "从 nói ĐIỂM XUẤT PHÁT; 离 nói KHOẢNG CÁCH"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Từ nhà tôi đến công ty mất nửa tiếng.",
        "answer": "从我家到公司要半个小时。",
        "answerPy": "Cóng wǒ jiā dào gōngsī yào bàn ge xiǎoshí.",
        "note": "从 nói điểm xuất phát, 到 nói điểm đến.",
        "pair": "从……到……"
      },
      {
        "promptLang": "vi",
        "prompt": "Hàng ngày tôi làm việc từ tám giờ đến năm giờ.",
        "answer": "我每天从八点到五点上班。",
        "answerPy": "Wǒ měi tiān cóng bā diǎn dào wǔ diǎn shàngbān.",
        "note": "从……到…… dùng được cho cả thời gian và nơi chốn.",
        "pair": "从……到……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "跳舞",
    "py": "tiàowǔ",
    "pos": "Động từ",
    "vn": "nhảy múa, khiêu vũ",
    "hv": "khiêu vũ",
    "em": "💃",
    "lesson": 2,
    "ex_zh": "我第一次跳舞是在七岁的时候。",
    "ex_py": "Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.",
    "ex_vn": "Lần đầu tiên tôi múa là lúc 7 tuổi.",
    "exList": [
      {
        "zh": "我第一次跳舞是在七岁的时候。",
        "py": "Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.",
        "vn": "Lần đầu tiên tôi múa là lúc 7 tuổi."
      },
      {
        "zh": "她跳舞跳得很好。",
        "py": "Tā tiàowǔ tiào de hěn hǎo.",
        "vn": "Cô ấy múa rất đẹp."
      },
      {
        "zh": "晚上我们去跳舞吧。",
        "py": "Wǎnshang wǒmen qù tiàowǔ ba.",
        "vn": "Tối nay chúng ta đi khiêu vũ đi."
      }
    ],
    "hanzi": [
      {
        "c": "跳",
        "p": "tiào",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "足 (túc) trái → 兆 (triệu) phải",
        "rad": "足 (túc – chân)",
        "mean": "nhảy",
        "tip": "Bộ 足 (chân, đã gặp ở 跑 Bài 2) → dùng chân bật lên = NHẢY.",
        "cf": "桃 (táo – \"quả đào\", bộ 木)",
        "w": "跳舞 / 跳高 / 心跳"
      },
      {
        "c": "舞",
        "p": "wǔ",
        "type": "独体字 · Chữ đơn",
        "st": 14,
        "ord": "一→一→夕→丨丨丨→一→丿→丨→一",
        "rad": "舛 (suyễn)",
        "mean": "múa",
        "tip": "Hình người dang tay múa với dải lụa cách điệu → \"MÚA\".",
        "cf": "午 (wǔ – \"buổi trưa\", ít nét hơn)",
        "w": "跳舞 / 舞蹈"
      }
    ],
    "colloFull": [
      {
        "zh": "去跳舞",
        "py": "qù tiàowǔ",
        "vn": "đi khiêu vũ"
      },
      {
        "zh": "喜欢跳舞",
        "py": "xǐhuan tiàowǔ",
        "vn": "thích múa"
      },
      {
        "zh": "会跳舞",
        "py": "huì tiàowǔ",
        "vn": "biết múa"
      },
      {
        "zh": "一起跳舞",
        "py": "yìqǐ tiàowǔ",
        "vn": "cùng nhau múa"
      }
    ],
    "patterns": [
      {
        "s": "会 + 跳舞",
        "m": "Biết múa — 会 là kỹ năng học được"
      },
      {
        "s": "跳舞 là từ ly hợp: 跳了一个小时舞"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi biết múa, tôi không biết múa.",
        "answer": "我姐姐会跳舞，我不会跳舞。",
        "answerPy": "Wǒ jiějie huì tiàowǔ, wǒ bú huì tiàowǔ.",
        "note": "跳舞 là từ ly hợp.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tối nay chúng ta cùng đi khiêu vũ nhé.",
        "answer": "今天晚上我们一起去跳舞吧。",
        "answerPy": "Jīntiān wǎnshang wǒmen yìqǐ qù tiàowǔ ba.",
        "note": "吧 dùng khi rủ rê.",
        "pair": "一起 + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "第一",
    "py": "dì-yī",
    "pos": "Số từ",
    "vn": "đầu tiên, thứ nhất",
    "hv": "đệ nhất",
    "em": "🥇",
    "lesson": 2,
    "ex_zh": "这是他的第一个工作。",
    "ex_py": "Zhè shì tā de dì yī ge gōngzuò.",
    "ex_vn": "Đây là công việc đầu tiên của cậu ấy.",
    "exList": [
      {
        "zh": "这是他的第一个工作。",
        "py": "Zhè shì tā de dì yī ge gōngzuò.",
        "vn": "Đây là công việc đầu tiên của cậu ấy."
      },
      {
        "zh": "这是我第一次来中国。",
        "py": "Zhè shì wǒ dì yī cì lái Zhōngguó.",
        "vn": "Đây là lần đầu tiên tôi đến Trung Quốc."
      },
      {
        "zh": "他考了第一名。",
        "py": "Tā kǎole dì yī míng.",
        "vn": "Cậu ấy thi được hạng nhất."
      }
    ],
    "hanzi": [
      {
        "c": "第",
        "p": "dì",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "⺮ (trúc) → 弟 (đệ)",
        "rad": "⺮ (trúc – tre)",
        "mean": "thứ (số thứ tự)",
        "tip": "Xưa khắc thứ tự lên thẻ tre 竹 → 第 + số = biểu thị THỨ TỰ.",
        "cf": "弟 (dì – \"em trai\", thiếu bộ 竹)",
        "w": "第一 / 第二 / 第几"
      }
    ],
    "colloFull": [
      {
        "zh": "第一个",
        "py": "dì yí gè",
        "vn": "cái thứ nhất"
      },
      {
        "zh": "第一天",
        "py": "dì yì tiān",
        "vn": "ngày đầu tiên"
      },
      {
        "zh": "第一个问题",
        "py": "dì yí gè wèntí",
        "vn": "câu hỏi thứ nhất"
      },
      {
        "zh": "第一题",
        "py": "dì yì tí",
        "vn": "câu thứ nhất"
      }
    ],
    "patterns": [
      {
        "s": "第 + số + lượng từ",
        "m": "Thứ tự: 第一个 · 第二天"
      },
      {
        "s": "第一 (thứ nhất) ≠ 一个 (một cái) — 第 là chữ chỉ thứ tự"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là ngày đầu tiên tôi đi làm.",
        "answer": "今天是我上班的第一天。",
        "answerPy": "Jīntiān shì wǒ shàngbān de dì-yī tiān.",
        "note": "第 + số + lượng từ — chỉ thứ tự.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Câu thứ nhất tôi làm sai rồi.",
        "answer": "第一题我做错了。",
        "answerPy": "Dì-yī tí wǒ zuòcuò le.",
        "note": "第一题 — câu thứ nhất trong bài.",
        "pair": "V + 错了"
      }
    ]
  },
  {
    "n": 5,
    "zh": "希望",
    "py": "xīwàng",
    "pos": "Động từ",
    "vn": "hy vọng",
    "hv": "hi vọng",
    "em": "🌠",
    "lesson": 3,
    "ex_zh": "希望他能喜欢。",
    "ex_py": "Xīwàng tā néng xǐhuan.",
    "ex_vn": "Hy vọng cậu ấy sẽ thích nó.",
    "exList": [
      {
        "zh": "希望他能喜欢。",
        "py": "Xīwàng tā néng xǐhuan.",
        "vn": "Hy vọng cậu ấy sẽ thích nó."
      },
      {
        "zh": "我希望明天天气好。",
        "py": "Wǒ xīwàng míngtiān tiānqì hǎo.",
        "vn": "Tôi hy vọng ngày mai thời tiết đẹp."
      },
      {
        "zh": "希望你早点儿回来。",
        "py": "Xīwàng nǐ zǎodiǎnr huílái.",
        "vn": "Hy vọng bạn về sớm một chút."
      }
    ],
    "hanzi": [
      {
        "c": "希",
        "p": "xī",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "㐅→巾",
        "rad": "巾 (cân – khăn)",
        "mean": "mong, hiếm",
        "tip": "Nghĩa gốc liên quan tới sự \"hiếm, ít gặp\" → mong muốn điều hiếm có = HY VỌNG.",
        "cf": "稀 (xī – \"hiếm\", thêm bộ 禾)",
        "w": "希望 / 希奇"
      },
      {
        "c": "望",
        "p": "wàng",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "亡→月→王",
        "rad": "月 (nguyệt – mặt trăng)",
        "mean": "trông mong, nhìn xa",
        "tip": "Người đứng nhìn 月 (trăng) từ xa → ánh mắt TRÔNG MONG, hy vọng.",
        "cf": "忘 (wàng – \"quên\", bộ 心)",
        "w": "希望 / 看望 / 望远镜"
      }
    ],
    "colloFull": [
      {
        "zh": "希望你来",
        "py": "xīwàng nǐ lái",
        "vn": "mong bạn đến"
      },
      {
        "zh": "希望好",
        "py": "xīwàng hǎo",
        "vn": "mong tốt"
      },
      {
        "zh": "我希望",
        "py": "wǒ xīwàng",
        "vn": "tôi mong"
      },
      {
        "zh": "希望明天",
        "py": "xīwàng míngtiān",
        "vn": "mong ngày mai"
      }
    ],
    "patterns": [
      {
        "s": "希望 + một câu",
        "m": "Mong điều gì: 我希望你身体好"
      },
      {
        "s": "希望 (mong, còn xa) — mạnh hơn 想 (muốn, gần hơn)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi mong sức khoẻ bố mẹ tốt.",
        "answer": "我希望爸爸妈妈身体好。",
        "answerPy": "Wǒ xīwàng bàba māma shēntǐ hǎo.",
        "note": "Sau 希望 là cả một câu.",
        "pair": "希望 + câu"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi mong bạn ngày mai đến sớm một chút.",
        "answer": "我们希望你明天早一点儿来。",
        "answerPy": "Wǒmen xīwàng nǐ míngtiān zǎo yìdiǎnr lái.",
        "note": "希望 mong điều còn ở phía trước.",
        "pair": "希望 + câu"
      }
    ]
  },
  {
    "n": 6,
    "zh": "问题",
    "py": "wèntí",
    "pos": "Danh từ",
    "vn": "câu hỏi, vấn đề",
    "hv": "vấn đề",
    "em": "❓",
    "lesson": 3,
    "ex_zh": "没问题！",
    "ex_py": "Méi wèntí!",
    "ex_vn": "Không thành vấn đề!",
    "exList": [
      {
        "zh": "没问题！",
        "py": "Méi wèntí!",
        "vn": "Không thành vấn đề!"
      },
      {
        "zh": "我有一个问题想问你。",
        "py": "Wǒ yǒu yí ge wèntí xiǎng wèn nǐ.",
        "vn": "Tôi có một câu hỏi muốn hỏi bạn."
      },
      {
        "zh": "这是一个大问题。",
        "py": "Zhè shì yí ge dà wèntí.",
        "vn": "Đây là một vấn đề lớn."
      }
    ],
    "hanzi": [
      {
        "c": "问",
        "p": "wèn",
        "type": "半包围 · Bán bao (门)",
        "st": 6,
        "ord": "门 (môn) bao ngoài → 口 (khẩu) bên trong",
        "rad": "门 (môn – cửa)",
        "mean": "hỏi",
        "tip": "Đã học ở Bài 4 — miệng 口 đứng ở cửa 门 cất tiếng HỎI.",
        "cf": "间 (jiān)",
        "w": "问题 / 问一下 / 请问"
      },
      {
        "c": "题",
        "p": "tí",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "是 (thị) trái → 页 (hiệt) phải",
        "rad": "页 (hiệt – đầu, trang)",
        "mean": "đề bài, chủ đề",
        "tip": "Bộ 页 (trang giấy/tiêu đề) → phần đầu trang nêu ra ĐỀ BÀI, chủ đề.",
        "cf": "提 (tí – \"đề xuất\", bộ 扌)",
        "w": "问题 / 题目 / 考题"
      }
    ],
    "colloFull": [
      {
        "zh": "一个问题",
        "py": "yí gè wèntí",
        "vn": "một câu hỏi"
      },
      {
        "zh": "问问题",
        "py": "wèn wèntí",
        "vn": "đặt câu hỏi"
      },
      {
        "zh": "什么问题",
        "py": "shénme wèntí",
        "vn": "vấn đề gì"
      },
      {
        "zh": "没问题",
        "py": "méi wèntí",
        "vn": "không vấn đề gì"
      }
    ],
    "patterns": [
      {
        "s": "问 + 问题",
        "m": "Đặt câu hỏi — hai chữ 问 liền nhau"
      },
      {
        "s": "没问题 — câu trả lời khi nhận lời giúp ai"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn hỏi thầy một câu hỏi.",
        "answer": "我想问老师一个问题。",
        "answerPy": "Wǒ xiǎng wèn lǎoshī yí ge wèntí.",
        "note": "问问题 — đặt câu hỏi.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Không vấn đề gì, để tôi giúp bạn làm.",
        "answer": "没问题，让我帮你做吧。",
        "answerPy": "Méi wèntí, ràng wǒ bāng nǐ zuò ba.",
        "note": "没问题 — câu nói khi nhận lời giúp.",
        "pair": "让 + người + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "欢迎",
    "py": "huānyíng",
    "pos": "Động từ",
    "vn": "chào mừng, hoan nghênh",
    "hv": "hoan nghênh",
    "em": "🎉",
    "lesson": 3,
    "ex_zh": "非常欢迎。",
    "ex_py": "Fēicháng huānyíng.",
    "ex_vn": "Vô cùng hoan nghênh.",
    "exList": [
      {
        "zh": "非常欢迎。",
        "py": "Fēicháng huānyíng.",
        "vn": "Vô cùng hoan nghênh."
      },
      {
        "zh": "欢迎来中国！",
        "py": "Huānyíng lái Zhōngguó!",
        "vn": "Chào mừng đến Trung Quốc!"
      },
      {
        "zh": "我们都很欢迎他。",
        "py": "Wǒmen dōu hěn huānyíng tā.",
        "vn": "Chúng tôi đều rất hoan nghênh anh ấy."
      }
    ],
    "hanzi": [
      {
        "c": "欢",
        "p": "huān",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "又 (hựu) trái → 欠 (khiếm) phải",
        "rad": "又 (hựu)",
        "mean": "vui mừng",
        "tip": "Nghĩa liên quan tới cảm xúc VUI MỪNG, phấn khởi khi gặp gỡ.",
        "cf": "次 (cì – \"lần\", bộ khác trái)",
        "w": "欢迎 / 喜欢 / 欢乐"
      },
      {
        "c": "迎",
        "p": "yíng",
        "type": "半包围 · Bán bao (辶)",
        "st": 7,
        "ord": "卬 → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "đón, nghênh",
        "tip": "Bộ 辶 (đi) → ra tận nơi để ĐÓN CHÀO ai đó.",
        "cf": "仰 (yǎng – \"ngửa lên\")",
        "w": "欢迎 / 迎接"
      }
    ],
    "colloFull": [
      {
        "zh": "欢迎你",
        "py": "huānyíng nǐ",
        "vn": "hoan nghênh bạn"
      },
      {
        "zh": "欢迎来",
        "py": "huānyíng lái",
        "vn": "chào mừng đến"
      },
      {
        "zh": "欢迎欢迎",
        "py": "huānyíng huānyíng",
        "vn": "hoan nghênh hoan nghênh"
      },
      {
        "zh": "欢迎你们",
        "py": "huānyíng nǐmen",
        "vn": "chào mừng các bạn"
      }
    ],
    "patterns": [
      {
        "s": "欢迎 + người + động từ",
        "m": "Chào mừng ai làm gì: 欢迎你来我家"
      },
      {
        "s": "欢迎 nói khi có khách đến — nói hai lần cho thân mật"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào mừng bạn đến nhà tôi chơi.",
        "answer": "欢迎你来我家。",
        "answerPy": "Huānyíng nǐ lái wǒ jiā.",
        "note": "欢迎 nói khi có khách đến.",
        "pair": "欢迎 + người + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhân viên nhà hàng này rất nhiệt tình chào khách.",
        "answer": "这个饭店的服务员非常欢迎你们。",
        "answerPy": "Zhège fàndiàn de fúwùyuán fēicháng huānyíng nǐmen.",
        "note": "欢迎 vừa là lời chào, vừa là động từ.",
        "pair": "非常 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "上班",
    "py": "shàngbān",
    "pos": "Động từ",
    "vn": "đi làm, vào ca",
    "hv": "thượng ban",
    "em": "💼",
    "lesson": 3,
    "ex_zh": "他从下个星期一开始上班。",
    "ex_py": "Tā cóng xià ge xīngqīyī kāishǐ shàngbān.",
    "ex_vn": "Cậu ấy bắt đầu đi làm từ thứ Hai tuần sau.",
    "exList": [
      {
        "zh": "他从下个星期一开始上班。",
        "py": "Tā cóng xià ge xīngqīyī kāishǐ shàngbān.",
        "vn": "Cậu ấy bắt đầu đi làm từ thứ Hai tuần sau."
      },
      {
        "zh": "我每天九点上班。",
        "py": "Wǒ měitiān jiǔ diǎn shàngbān.",
        "vn": "Mỗi ngày tôi đi làm lúc 9 giờ."
      },
      {
        "zh": "爸爸已经去上班了。",
        "py": "Bàba yǐjīng qù shàngbān le.",
        "vn": "Bố đã đi làm rồi."
      }
    ],
    "hanzi": [
      {
        "c": "上",
        "p": "shàng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一→丨→一",
        "rad": "一 (nhất)",
        "mean": "trên, lên",
        "tip": "Đã học ở Bài 3/4 (早上, 晚上) — nét ngắn trên nét ngang dài = hướng lên.",
        "cf": "下 (xià)",
        "w": "上班 / 上课 / 早上"
      },
      {
        "c": "班",
        "p": "bān",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "王 (vương) trái → 刂 (đao) giữa → 王 phải",
        "rad": "王 (vương – ngọc)",
        "mean": "ca làm, nhóm, lớp",
        "tip": "Hai miếng ngọc 王 được tách ra bởi dao 刂 → phân chia thành từng NHÓM/CA làm việc.",
        "cf": "斑 (bān – \"vết đốm\")",
        "w": "上班 / 班长 / 一班"
      }
    ],
    "colloFull": [
      {
        "zh": "去上班",
        "py": "qù shàngbān",
        "vn": "đi làm"
      },
      {
        "zh": "几点上班",
        "py": "jǐ diǎn shàngbān",
        "vn": "mấy giờ đi làm"
      },
      {
        "zh": "开始上班",
        "py": "kāishǐ shàngbān",
        "vn": "bắt đầu làm việc"
      },
      {
        "zh": "不上班",
        "py": "bù shàngbān",
        "vn": "không đi làm"
      }
    ],
    "patterns": [
      {
        "s": "去 + 上班",
        "m": "Đi làm — 上班 là từ ly hợp"
      },
      {
        "s": "上班 (đi làm) · 上课 (đi học) — cùng chữ 上"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào chồng tôi cũng đi làm bằng xe buýt.",
        "answer": "我丈夫每天早上都坐公共汽车去上班。",
        "answerPy": "Wǒ zhàngfu měi tiān zǎoshang dōu zuò gōnggòng qìchē qù shàngbān.",
        "note": "上班 là từ ly hợp.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật tôi không đi làm, tôi ở nhà nghỉ.",
        "answer": "星期天我不上班，我在家休息。",
        "answerPy": "Xīngqītiān wǒ bú shàngbān, wǒ zài jiā xiūxi.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……休息"
      }
    ]
  },
  {
    "n": 9,
    "zh": "懂",
    "py": "dǒng",
    "pos": "Động từ",
    "vn": "hiểu",
    "hv": "đổng",
    "em": "💡",
    "lesson": 4,
    "ex_zh": "你听懂了吗？",
    "ex_py": "Nǐ tīng dǒng le ma?",
    "ex_vn": "Bạn nghe có hiểu không?",
    "exList": [
      {
        "zh": "你听懂了吗？",
        "py": "Nǐ tīng dǒng le ma?",
        "vn": "Bạn nghe có hiểu không?"
      },
      {
        "zh": "我看懂了这本书。",
        "py": "Wǒ kàn dǒngle zhè běn shū.",
        "vn": "Tôi đọc hiểu quyển sách này rồi."
      },
      {
        "zh": "这个问题我不懂。",
        "py": "Zhège wèntí wǒ bù dǒng.",
        "vn": "Vấn đề này tôi không hiểu."
      }
    ],
    "hanzi": [
      {
        "c": "懂",
        "p": "dǒng",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "忄(tâm) trái → 董 (đổng) phải",
        "rad": "忄(tâm – trái tim)",
        "mean": "hiểu",
        "tip": "Bộ 忄(tâm/trí) → dùng đầu óc nắm rõ được ý nghĩa = HIỂU.",
        "cf": "董 (dǒng – \"giám sát\", thiếu bộ 忄)",
        "w": "听懂 / 看懂 / 不懂"
      }
    ],
    "colloFull": [
      {
        "zh": "听懂",
        "py": "tīng dǒng",
        "vn": "nghe hiểu"
      },
      {
        "zh": "看懂",
        "py": "kàn dǒng",
        "vn": "đọc hiểu"
      },
      {
        "zh": "懂了",
        "py": "dǒng le",
        "vn": "hiểu rồi"
      },
      {
        "zh": "不懂",
        "py": "bù dǒng",
        "vn": "không hiểu"
      }
    ],
    "patterns": [
      {
        "s": "听 / 看 + 懂",
        "m": "Nghe hiểu, đọc hiểu — 懂 nói KẾT QUẢ"
      },
      {
        "s": "懂 (hiểu rõ) ≠ 知道 (nghe nói qua thì biết)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy nói chậm một chút, tôi nghe không hiểu.",
        "answer": "老师说慢一点儿，我没听懂。",
        "answerPy": "Lǎoshī shuō màn yìdiǎnr, wǒ méi tīngdǒng.",
        "note": "听懂 — nghe rồi hiểu được.",
        "pair": "没 + V + 懂"
      },
      {
        "promptLang": "vi",
        "prompt": "Câu này tôi hiểu rồi, cảm ơn thầy.",
        "answer": "这个题我懂了，谢谢老师。",
        "answerPy": "Zhège tí wǒ dǒng le, xièxie lǎoshī.",
        "note": "懂了 — đã hiểu, tình hình đã đổi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 10,
    "zh": "完",
    "py": "wán",
    "pos": "Động từ",
    "vn": "xong, hết",
    "hv": "hoàn",
    "em": "✅",
    "lesson": 4,
    "ex_zh": "题太多，我没做完。",
    "ex_py": "Tí tài duō, wǒ méi zuò wán.",
    "ex_vn": "Đề nhiều quá, tôi làm chưa xong.",
    "exList": [
      {
        "zh": "题太多，我没做完。",
        "py": "Tí tài duō, wǒ méi zuò wán.",
        "vn": "Đề nhiều quá, tôi làm chưa xong."
      },
      {
        "zh": "我吃完饭了。",
        "py": "Wǒ chī wán fàn le.",
        "vn": "Tôi ăn xong cơm rồi."
      },
      {
        "zh": "电影已经完了。",
        "py": "Diànyǐng yǐjīng wán le.",
        "vn": "Bộ phim đã kết thúc rồi."
      }
    ],
    "hanzi": [
      {
        "c": "完",
        "p": "wán",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "宀 (miên) → 元 (nguyên)",
        "rad": "宀 (miên – mái nhà)",
        "mean": "hoàn thành, hết",
        "tip": "Mái nhà 宀 che kín trọn vẹn 元 (đầu tiên/vẹn toàn) → mọi thứ đã trọn vẹn = XONG, HẾT.",
        "cf": "院 (yuàn – đã học ở Bài 2, khác bộ)",
        "w": "做完 / 吃完 / 用完"
      }
    ],
    "colloFull": [
      {
        "zh": "做完",
        "py": "zuò wán",
        "vn": "làm xong"
      },
      {
        "zh": "吃完",
        "py": "chī wán",
        "vn": "ăn xong"
      },
      {
        "zh": "写完了",
        "py": "xiě wán le",
        "vn": "viết xong rồi"
      },
      {
        "zh": "看完",
        "py": "kàn wán",
        "vn": "xem xong"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 完 + 了",
        "m": "Làm xong rồi: 我做完了"
      },
      {
        "s": "完 nói VIỆC ĐÃ HẾT; 懂 nói ĐÃ HIỂU"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi làm xong việc rồi mới đi ăn cơm.",
        "answer": "我做完事情就去吃饭。",
        "answerPy": "Wǒ zuòwán shìqing jiù qù chīfàn.",
        "note": "完 đứng SAU động từ, nói việc đã hết.",
        "pair": "V完……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ăn xong chưa?",
        "answer": "你吃完了吗？",
        "answerPy": "Nǐ chīwán le ma?",
        "note": "Hỏi việc đã xong hay chưa.",
        "pair": "V完了吗？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "题",
    "py": "tí",
    "pos": "Danh từ",
    "vn": "câu hỏi, đề bài",
    "hv": "đề",
    "em": "📄",
    "lesson": 4,
    "ex_zh": "昨天的考试题很难。",
    "ex_py": "Zuótiān de kǎoshì tí hěn nán.",
    "ex_vn": "Đề thi hôm qua rất khó.",
    "exList": [
      {
        "zh": "昨天的考试题很难。",
        "py": "Zuótiān de kǎoshì tí hěn nán.",
        "vn": "Đề thi hôm qua rất khó."
      },
      {
        "zh": "这道题我不会。",
        "py": "Zhè dào tí wǒ bú huì.",
        "vn": "Câu hỏi này tôi không biết làm."
      },
      {
        "zh": "今天的题太多了。",
        "py": "Jīntiān de tí tài duō le.",
        "vn": "Đề bài hôm nay nhiều quá."
      }
    ],
    "hanzi": [
      {
        "c": "题",
        "p": "tí",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "是 (thị) trái → 页 (hiệt) phải",
        "rad": "页 (hiệt – đầu, trang)",
        "mean": "đề bài, câu hỏi",
        "tip": "Ôn lại: 页 (trang) → phần nêu ra ĐỀ/CÂU HỎI cần trả lời.",
        "cf": "提 (tí – \"đề xuất\")",
        "w": "问题 / 考题 / 题目"
      }
    ],
    "colloFull": [
      {
        "zh": "第一题",
        "py": "dì yì tí",
        "vn": "câu thứ nhất"
      },
      {
        "zh": "做题",
        "py": "zuò tí",
        "vn": "làm bài"
      },
      {
        "zh": "这个题",
        "py": "zhège tí",
        "vn": "câu này"
      },
      {
        "zh": "很多题",
        "py": "hěn duō tí",
        "vn": "rất nhiều câu"
      }
    ],
    "patterns": [
      {
        "s": "số + 题",
        "m": "Đếm câu hỏi: 第一题 · 十个题"
      },
      {
        "s": "题 (câu hỏi trong bài) — 问题 là vấn đề, câu hỏi nói ra"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi làm xong hai mươi câu rồi.",
        "answer": "今天我做完二十个题了。",
        "answerPy": "Jīntiān wǒ zuòwán èrshí ge tí le.",
        "note": "做题 — làm bài tập.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Câu thứ nhất tôi không hiểu, bạn giúp tôi xem một chút.",
        "answer": "第一题我不懂，你帮我看一下。",
        "answerPy": "Dì-yī tí wǒ bù dǒng, nǐ bāng wǒ kàn yíxià.",
        "note": "帮我 + động từ — làm giúp tôi.",
        "pair": "帮 + người + V"
      }
    ]
  }
];

const wuData = [
  {img:'💃',label:'跳舞',py:'tiàowǔ',letter:'A'},
  {img:'💼',label:'上班',py:'shàngbān',letter:'B'},
  {img:'❓',label:'问题',py:'wèntí',letter:'C'},
  {img:'🎉',label:'欢迎',py:'huānyíng',letter:'D'},
  {img:'✅',label:'完',py:'wán',letter:'E'},
  {img:'💡',label:'懂',py:'dǒng',letter:'F'},
];

var dialogData = [
  {scene:'打电话 · Gọi điện thoại',
   preQuiz:[
     {q:'男的要找谁？',opts:['张欢','张老师','李欢'],ans:0},
     {q:'结果怎么样？',opts:['打错电话了','张欢不在','张欢生病了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你好，请问张欢在吗？',py:'Nǐ hǎo, qǐngwèn Zhāng Huān zài ma?',vn:'Xin chào, cho hỏi có Trương Hoan ở đó không ạ?'},
     {sp:1,zh:'你打错了，我们这儿没有叫张欢的。',py:'Nǐ dǎ cuò le, wǒmen zhèr méiyǒu jiào Zhāng Huān de.',vn:'Bạn gọi nhầm số rồi, ở đây chúng tôi không có ai tên là Trương Hoan cả.'},
     {sp:0,zh:'对不起。',py:'Duìbùqǐ.',vn:'Xin lỗi nhé.'},
   ]},
  {scene:'在学校 · Ở trường học',
   preQuiz:[
     {q:'女老师第一次跳舞是几岁？',opts:['五岁','七岁','九岁'],ans:1},
     {q:'男的想让谁跟老师学跳舞？',opts:['自己','女儿','儿子'],ans:1},
     {q:'老师同意教吗？',opts:['同意','不同意','要考虑'],ans:0},
   ],
   lines:[
     {sp:0,zh:'您从几岁开始学习跳舞？',py:'Nín cóng jǐ suì kāishǐ xuéxí tiàowǔ?',vn:'Cô bắt đầu học khiêu vũ/múa từ năm mấy tuổi vậy ạ?'},
     {sp:1,zh:'我第一次跳舞是在七岁的时候。',py:'Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.',vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
     {sp:0,zh:'我女儿今年也七岁了，我希望她能跟您学跳舞，可以吗？',py:'Wǒ nǚ\'ér jīnnián yě qī suì le, wǒ xīwàng tā néng gēn nín xué tiàowǔ, kěyǐ ma?',vn:'Con gái tôi năm nay cũng 7 tuổi rồi, tôi hy vọng cháu có thể học múa với cô, được không ạ?'},
     {sp:1,zh:'没问题，非常欢迎。',py:'Méi wèntí, fēicháng huānyíng.',vn:'Không thành vấn đề, vô cùng hoan nghênh cháu.'},
   ]},
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'大卫怎么了？',opts:['找到工作了','生病了','要搬家了'],ans:0},
     {q:'大卫什么时候开始上班？',opts:['明天','下星期一','下个月'],ans:1},
     {q:'这是大卫第几个工作？',opts:['第一个','第二个','第三个'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你知道吗？大卫找到工作了。',py:'Nǐ zhīdào ma? Dàwèi zhǎodào gōngzuò le.',vn:'Bạn biết tin gì chưa? David tìm được việc làm rồi đấy.'},
     {sp:1,zh:'太好了！他从什么时候开始上班？',py:'Tài hǎo le! Tā cóng shénme shíhou kāishǐ shàngbān?',vn:'Tuyệt vời quá! Cậu ấy bắt đầu đi làm từ khi nào thế?'},
     {sp:0,zh:'从下个星期一开始。这是他的第一个工作，希望他能喜欢。',py:'Cóng xià ge xīngqīyī kāishǐ. Zhè shì tā de dì yī ge gōngzuò, xīwàng tā néng xǐhuan.',vn:'Bắt đầu từ thứ Hai tuần sau. Đây là công việc đầu tiên của cậu ấy, hy vọng cậu ấy sẽ thích nó.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'女的昨天的考试听懂了吗？',opts:['听懂了','没听懂','听懂一半'],ans:0},
     {q:'女的题都做完了吗？',opts:['做完了','没做完，题太多','忘了做'],ans:1},
   ],
   lines:[
     {sp:0,zh:'昨天的考试怎么样？你都听懂了吗？',py:'Zuótiān de kǎoshì zěnmeyàng? Nǐ dōu tīng dǒng le ma?',vn:'Bài thi hôm qua thế nào? Bạn nghe có hiểu hết không?'},
     {sp:1,zh:'听懂了。',py:'Tīng dǒng le.',vn:'Tôi nghe hiểu hết.'},
     {sp:0,zh:'你都做完了没有？',py:'Nǐ dōu zuò wán le méiyǒu?',vn:'Thế bạn đã làm xong hết chưa?'},
     {sp:1,zh:'题太多，我没做完。',py:'Tí tài duō, wǒ méi zuò wán.',vn:'Đề nhiều quá, tôi làm chưa xong.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'打错',right:'电话了'},
  {left:'看懂',right:'这些汉字'},
  {left:'做完',right:'今天的工作'},
  {left:'从早上八点',right:'开始上班'},
  {left:'第一次',right:'坐飞机'},
  {left:'我希望',right:'你们喜欢'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: ngày đầu đi làm, kiểm tra hiểu bài.
// Ôn lại 已经 (Bài 4).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-9/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'我第一次跳舞', blank:'是在七岁的时候', post:'。', py:'Wǒ dì-yī cì tiàowǔ shì zài qī suì de shíhou.', vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
    ]},
    {num:2, lines:[
      {pre:'这是她的第一个工作，', blank:'她非常喜欢', post:'。', py:'Zhè shì tā de dì-yī gè gōngzuò, tā fēicháng xǐhuan.', vn:'Đây là công việc đầu tiên của cô ấy, cô ấy rất thích.'},
    ]},
    {num:3, lines:[
      {pre:'今天的汉语课我', blank:'都听懂了', post:'。', py:'Jīntiān de Hànyǔ kè wǒ dōu tīngdǒng le.', vn:'Bài học tiếng Trung hôm nay tôi đều nghe hiểu hết.'},
    ]},
    {num:4, lines:[
      {pre:'你看，衣服', blank:'都洗完了', post:'。', py:'Nǐ kàn, yīfu dōu xǐwán le.', vn:'Bạn xem, quần áo giặt xong hết rồi.'},
    ]},
    {num:5, lines:[
      {pre:'考试的题太多了，', blank:'我没有做完', post:'。', py:'Kǎoshì de tí tài duō le, wǒ méiyǒu zuòwán.', vn:'Đề thi nhiều quá, tôi chưa làm xong.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'你从几岁', blank:'开始学跳舞', post:'？', py:'Nǐ cóng jǐ suì kāishǐ xué tiàowǔ?', vn:'Bạn học múa từ mấy tuổi?'},
      {speaker:'女', pre:'我第一次跳舞', blank:'是在七岁的时候', post:'。', py:'Wǒ dì-yī cì tiàowǔ shì zài qī suì de shíhou.', vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'今天的考试', blank:'怎么样', post:'？', py:'Jīntiān de kǎoshì zěnmeyàng?', vn:'Bài thi hôm nay thế nào?'},
      {speaker:'男', pre:'不太好，', blank:'有几个题没做完', post:'。', py:'Bú tài hǎo, yǒu jǐ gè tí méi zuòwán.', vn:'Không tốt lắm, có vài câu chưa làm xong.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'你看见我的', blank:'手机了吗', post:'？', py:'Nǐ kànjiàn wǒ de shǒujī le ma?', vn:'Bạn có thấy điện thoại của tôi không?'},
      {speaker:'女', pre:'就在', blank:'桌子上面，你看见了没有', post:'？', py:'Jiù zài zhuōzi shàngmian, nǐ kànjiàn le méiyǒu?', vn:'Ở ngay trên bàn kìa, bạn thấy chưa?'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'这么多的衣服，你一个人', blank:'能洗完吗', post:'？', py:'Zhème duō de yīfu, nǐ yí gè rén néng xǐwán ma?', vn:'Nhiều quần áo thế này, một mình bạn giặt xong được không?'},
      {speaker:'男', pre:'你现在有时间吗？', blank:'帮我一起洗吧', post:'。', py:'Nǐ xiànzài yǒu shíjiān ma? Bāng wǒ yìqǐ xǐ ba.', vn:'Bạn có thời gian không? Giúp tôi giặt cùng đi.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'这是我第一次去大医院，', blank:'医院里人真多啊', post:'。', py:'Zhè shì wǒ dì-yī cì qù dà yīyuàn, yīyuàn lǐ rén zhēn duō a.', vn:'Đây là lần đầu tôi đến bệnh viện lớn, trong bệnh viện đông người thật.'},
      {speaker:'男', pre:'', blank:'是啊', post:'。', py:'Shì a.', vn:'Đúng vậy.'},
    ]},
  ],
  mc: [
    {num:11, options:['想找女的','想找张欢','想去看看张欢'], ans:1,
     explain:'男：您好，请问张欢在吗？女：对不起，我们这儿没有张欢，你打错电话了。问：男的为什么要打电话？ → 想找张欢。'},
    {num:12, options:['昨天','今天','明天'], ans:2,
     explain:'男：买到电影票了没有？今天晚上的。女：买到了，是明天的。今天的都卖完了。问：他们什么时候去看电影？ → 明天。'},
    {num:13, options:['医院','学校','公司'], ans:0,
     explain:'女：你真的认识去医院的路？是不是走错了？男：没错，就在那个公司的前面，学校的后面。问：他们想去哪儿？ → 医院。'},
    {num:14, options:['没看见','看见了','没有报纸'], ans:0,
     explain:'男：看见了没有？报纸就在电视的左边。女：等一下，你这儿的东西太多了。问：女的看见报纸了没有？ → 没看见。'},
    {num:15, options:['没听懂','不会做','没做完'], ans:2,
     explain:'男：昨天的考试怎么样？都做完了没有？女：题太多，我没做完。问：她昨天的考试怎么样？ → 没做完。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (bổ ngữ kết quả · 从 · 第一 + từ mới bài 9, ôn bài 1–8 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'“这本书你看',blank:'完',post:'了吗？” — “看完了，很好看，给你吧。”',hint:'(xong, hết)',ans:'完',exp:'Động từ + 完 = làm xong: 看完 = đọc xong.'},
  {pre:'“老师的问题你听',blank:'懂',post:'了吗？” — “没有，他说汉语说太快了。”',hint:'(hiểu)',ans:'懂',exp:'听懂 = nghe hiểu; phủ định là 没听懂, không nói 不听懂.'},
  {pre:'对不起，我写',blank:'错',post:'了你的名字。',hint:'(sai, nhầm)',ans:'错',exp:'Động từ + 错 = làm sai: 写错 = viết sai.'},
  {pre:'“你买',blank:'到',post:'那本书了吗？” — “没有，商店里没有了。”',hint:'(được — đạt mục đích)',ans:'到',exp:'Động từ + 到 = làm được, đạt mục đích; 没买到 = không mua được.'},
  {pre:'“明天的考试你准备',blank:'好',post:'了吗？” — “还没呢，今天晚上我再看看书。”',hint:'(xong xuôi, sẵn sàng)',ans:'好',exp:'Động từ + 好 = làm xong xuôi, sẵn sàng: 准备好了 = chuẩn bị xong rồi.'},
  {pre:'我在公共汽车上',blank:'看见',post:'你的老师了。',hint:'(nhìn thấy)',ans:'看见',exp:'看见 = nhìn thấy (kết quả của 看); 看 chỉ là nhìn, xem.'},
  {pre:'“',blank:'从',post:'这儿到机场要多长时间？” — “坐出租车一个小时。”',hint:'(từ)',ans:'从',exp:'从 A 到 B = từ A đến B (nơi chốn hoặc thời gian).'},
  {pre:'我',blank:'从',post:'上个月开始学跳舞，现在会跳舞了。',hint:'(từ — mốc thời gian)',ans:'从',exp:'从 + thời điểm + 开始 + động từ = bắt đầu làm gì từ lúc ….'},
  {pre:'今天是我',blank:'第一',post:'天上班，我八点就到公司了。',hint:'(thứ nhất, đầu tiên)',ans:'第一',exp:'第一 + lượng từ / 天 / 次 = … đầu tiên: 第一天 = ngày đầu tiên.'},
  {pre:'明天我们去旅游，我',blank:'希望',post:'明天不下雨。',hint:'(hy vọng, mong)',ans:'希望',exp:'希望 + cả một câu = mong rằng …: 希望明天不下雨.'},
  {pre:'Khách đến nhà, bạn ra mở cửa: “',blank:'欢迎',post:'你们来我家！请坐，请喝茶。”',hint:'(hoan nghênh, chào mừng)',ans:'欢迎',exp:'欢迎 + người + 来 + nơi = chào mừng ai đến ….'},
  {pre:'“老师，我有一个',blank:'问题',post:'。” — “好，你说吧。”',hint:'(câu hỏi, vấn đề)',ans:'问题',exp:'有问题 = có câu hỏi / có vấn đề; 没问题 = không vấn đề gì.'},
  {pre:'“你爸爸每天几点去',blank:'上班',post:'？” — “八点，他坐公共汽车去。”',hint:'(đi làm)',ans:'上班',exp:'去上班 = đi làm; 上班 đã là động từ, không thêm 工作 phía sau.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng bổ ngữ kết quả / 从 / 第一
// ══════════════════════════════════════════
var sortData = [
  {words:['你','的','问题','我','没','听','懂','。'],ans:'你的问题我没听懂。',audio:'你的问题我没听懂。',alt:['我没听懂你的问题。']},
  {words:['我','女儿','从','五','岁','开始','学','跳舞','。'],ans:'我女儿从五岁开始学跳舞。',audio:'我女儿从五岁开始学跳舞。'},
  {words:['这','是','我','第一','次','吃','羊肉','面条','。'],ans:'这是我第一次吃羊肉面条。',audio:'这是我第一次吃羊肉面条。'},
  {words:['你','写','错','了','两','个','字','。'],ans:'你写错了两个字。',audio:'你写错了两个字。'},
  {words:['同学','都','很','欢迎','我','。'],ans:'同学都很欢迎我。',audio:'同学都很欢迎我。'},
  {words:['希望','你','的','病','快','点儿','好','。'],ans:'希望你的病快点儿好。',audio:'希望你的病快点儿好。'},
  {words:['姐姐','在','北京','找','到','了','新','工作','。'],ans:'姐姐在北京找到了新工作。',audio:'姐姐在北京找到了新工作。'},
  {words:['这','些','汉字','你','都','写','对','了','吗','？'],ans:'这些汉字你都写对了吗？',audio:'这些汉字你都写对了吗？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (不/没 với bổ ngữ kết quả, tân ngữ chen giữa V và 完, 从 + thời gian đặt sau động từ, thiếu 次, 吗 sai chỗ...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'昨天的考试我不做完。',
   opts:['昨天的考试我做没完。','昨天的考试我做完没。','昨天的考试我没做完。','昨天的考试我不做完了。'],ans:2,
   exp:'Phủ định bổ ngữ kết quả (việc đã qua) dùng 没 + động từ + 完: 没做完; không dùng 不, không tách 做 với 完.'},
  {wrong:'我看书完了，我们去跑步吧。',
   opts:['我完看书了，我们去跑步吧。','我看完书了，我们去跑步吧。','我已经看书完，我们去跑步吧。','我看了书完，我们去跑步吧。'],ans:1,
   exp:'完 đứng ngay sau động từ, tân ngữ đứng sau: 看完书了 (không nói 看书完 như “đọc sách xong”).'},
  {wrong:'这个题你看懂吗了？',
   opts:['这个题你看懂了吗？','这个题你看了懂吗？','这个题你懂看了吗？','这个题你看懂没了吗？'],ans:0,
   exp:'Động từ + 懂 + 了吗？ = đã … hiểu chưa?; 了 đứng trước 吗, không chen giữa 看 và 懂.'},
  {wrong:'我开始上班从下个月。',
   opts:['我下个月从开始上班。','我从下个月上班开始。','我从下个月是开始上班。','我从下个月开始上班。'],ans:3,
   exp:'从 + thời gian đứng TRƯỚC động từ: 从下个月开始上班; không đặt 从… cuối câu như tiếng Việt.'},
  {wrong:'我第一来北京，什么都不知道。',
   opts:['我来北京第一次，什么都不知道。','我第一个次来北京，什么都不知道。','我第一次来北京，什么都不知道。','我一次来北京，什么都不知道。'],ans:2,
   exp:'Lần đầu tiên = 第一次 + động từ (đứng trước động từ); 次 đã là lượng từ, không thêm 个.'},
  {wrong:'对不起，我错打了电话。',
   opts:['对不起，我打了错电话。','对不起，我打错电话了。','对不起，我没打错电话了。','对不起，我很打错电话了。'],ans:1,
   exp:'错 là bổ ngữ đứng ngay sau động từ: 打错电话了 = gọi nhầm số; 没 không đi với 了 ở cuối.'},
  {wrong:'明天的事情我已经准备了好。',
   opts:['明天的事情我已经好准备了。','明天的事情我已经准备很好了。','明天的事情我已经没准备好了。','明天的事情我已经准备好了。'],ans:3,
   exp:'Động từ + 好 + 了 = đã làm xong xuôi: 准备好了; 了 đứng sau bổ ngữ, không thêm 很.'},
  {wrong:'我没找我的手表到。',
   opts:['我没找到我的手表。','我找没到我的手表。','我不找到我的手表。','我没找到我的手表了。'],ans:0,
   exp:'找到 không tách rời, tân ngữ đứng sau: 没找到我的手表; phủ định dùng 没, không thêm 了.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 9. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn mới quen hỏi về việc học tiếng Trung của bạn.',
      q_zh: '你是从什么时候开始学习汉语的？第一天学习的时候怎么样？',
      q_py: 'Nǐ shì cóng shénme shíhou kāishǐ xuéxí Hànyǔ de? Dì yī tiān xuéxí de shíhou zěnmeyàng?',
      q_vn: 'Bạn bắt đầu học tiếng Trung từ khi nào? Ngày học đầu tiên thế nào?',
      grammar: { label: '我是从… 开始学习汉语的', any: ['从'] },
      need: [
        { label: 'Nói mốc thời gian', any: ['月', '年', '岁', '星期', '时候', '号'] },
        { label: 'Dùng 第一 (第一次 / 第一天)', any: ['第一'] },
        { label: 'Dùng bổ ngữ kết quả (听懂 / 做完 / 说错…)', any: ['懂', '完', '错', '到', '好', '会'] }
      ],
      bonus: { label: 'Dùng 是……的 nhấn thời gian', any: ['是从', '的'] },
      vocab: ['从', '第一', '懂', '问题'],
      minLen: 14,
      sample: '我是从今年三月开始学习汉语的。第一天，老师的问题我都没听懂。',
      sample_py: 'Wǒ shì cóng jīnnián sān yuè kāishǐ xuéxí Hànyǔ de. Dì yī tiān, lǎoshī de wèntí wǒ dōu méi tīngdǒng.',
      sample_vn: 'Tôi bắt đầu học tiếng Trung từ tháng Ba năm nay. Ngày đầu tiên, câu hỏi của thầy tôi đều nghe không hiểu.',
      tip: '从 + thời gian + 开始 + động từ; phủ định bổ ngữ kết quả: 没听懂.'
    },
    {
      situation: 'Vừa ra khỏi phòng thi, bạn của bạn hỏi bài làm thế nào.',
      q_zh: '考试的时候，你都做完了吗？有没有做错的题？',
      q_py: 'Kǎoshì de shíhou, nǐ dōu zuòwán le ma? Yǒu méiyǒu zuò cuò de tí?',
      q_vn: 'Lúc thi bạn làm xong hết chưa? Có câu nào làm sai không?',
      grammar: { label: 'Động từ + 完 / 错 / 懂', any: ['完', '错', '懂', '好'] },
      need: [
        { label: 'Nói có làm xong không', any: ['做完', '没做完', '写完', '完'] },
        { label: 'Nói về câu sai / câu khó', any: ['错', '题', '问题', '不懂', '没懂'] },
        { label: 'Thêm thời gian hoặc số lượng', any: ['分钟', '小时', '个', '多', '两', '一'] }
      ],
      bonus: { label: 'Dùng 就 (… phút là xong)', any: ['就'] },
      vocab: ['完', '错', '题'],
      minLen: 12,
      sample: '题不太多，我四十分钟就做完了。有一个字我写错了。',
      sample_py: 'Tí bú tài duō, wǒ sìshí fēnzhōng jiù zuòwán le. Yǒu yí ge zì wǒ xiě cuò le.',
      sample_vn: 'Đề không nhiều lắm, bốn mươi phút là tôi làm xong. Có một chữ tôi viết sai.',
      tip: '做完了 = làm xong rồi; 写错了 = viết sai rồi — bổ ngữ đứng ngay sau động từ.'
    },
    {
      situation: 'Một người bạn báo tin vừa tìm được việc làm mới.',
      q_zh: '我找到新工作了！星期一就去上班。',
      q_py: 'Wǒ zhǎodào xīn gōngzuò le! Xīngqīyī jiù qù shàngbān.',
      q_vn: 'Mình tìm được việc mới rồi! Thứ Hai là đi làm luôn.',
      grammar: { label: '希望 + câu (mong …)', any: ['希望'] },
      need: [
        { label: 'Chúc mừng (太好了 / 祝…)', any: ['太好了', '祝', '高兴', '恭喜', '真好', '不错'] },
        { label: 'Hỏi thêm về công việc (哪儿 / 什么 / 几点上班)', any: ['哪儿', '什么', '几点', '公司', '上班', '远'] },
        { label: 'Nói về công việc (工作 / 公司)', any: ['工作', '公司', '上班'] }
      ],
      bonus: { label: 'Dùng 从…开始', any: ['从'] },
      vocab: ['希望', '上班', '找'],
      minLen: 12,
      sample: '太好了！你在哪个公司上班？希望你喜欢这个新工作。',
      sample_py: 'Tài hǎo le! Nǐ zài nǎge gōngsī shàngbān? Xīwàng nǐ xǐhuan zhège xīn gōngzuò.',
      sample_vn: 'Tuyệt quá! Bạn làm ở công ty nào? Mong là bạn thích công việc mới này.',
      tip: '希望 + cả một câu: 希望你喜欢… = mong bạn thích ….'
    },
    {
      situation: 'Một bạn học mới đến trường ngày đầu tiên, bạn ra chào.',
      q_zh: '一个新同学第一天来学校，你想对他说什么？',
      q_py: 'Yí ge xīn tóngxué dì yī tiān lái xuéxiào, nǐ xiǎng duì tā shuō shénme?',
      q_vn: 'Một bạn học mới đến trường ngày đầu tiên, bạn muốn nói gì với bạn ấy?',
      grammar: { label: '欢迎你来…！', any: ['欢迎'] },
      need: [
        { label: 'Giới thiệu bản thân', any: ['我叫', '我是', '叫'] },
        { label: 'Đề nghị giúp đỡ', any: ['问题', '问我', '帮', '可以', '告诉', '打电话'] },
        { label: 'Nói về trường / lớp', any: ['学校', '教室', '老师', '同学', '我们'] }
      ],
      bonus: { label: 'Dùng 希望', any: ['希望'] },
      vocab: ['欢迎', '问题', '第一'],
      minLen: 12,
      sample: '欢迎你来我们学校！我叫小王。你有什么问题，可以给我打电话。',
      sample_py: 'Huānyíng nǐ lái wǒmen xuéxiào! Wǒ jiào Xiǎo Wáng. Nǐ yǒu shénme wèntí, kěyǐ gěi wǒ dǎ diànhuà.',
      sample_vn: 'Chào mừng bạn đến trường chúng mình! Mình là Tiểu Vương. Bạn có thắc mắc gì thì cứ gọi điện cho mình.',
      tip: '欢迎 + người + 来 + nơi; 有什么问题 = có thắc mắc gì.'
    },
    {
      situation: 'Bạn bè hỏi về sở thích nhảy múa và dự định học thêm.',
      q_zh: '你会跳舞吗？你希望学什么？',
      q_py: 'Nǐ huì tiàowǔ ma? Nǐ xīwàng xué shénme?',
      q_vn: 'Bạn biết nhảy không? Bạn mong được học gì?',
      grammar: { label: '我希望从… 开始学…', any: ['希望'] },
      need: [
        { label: 'Trả lời biết / không biết nhảy', any: ['会跳舞', '不会', '会', '跳舞'] },
        { label: 'Nói muốn học gì', any: ['学', '跳舞', '游泳', '汉语', '打篮球', '踢足球', '做菜'] },
        { label: 'Nói khi nào bắt đầu (从…开始)', any: ['从', '开始', '下个', '明天', '星期'] }
      ],
      bonus: { label: 'Nói học với ai / bao lâu một lần', any: ['跟', '和', '次', '每'] },
      vocab: ['跳舞', '希望', '从'],
      minLen: 12,
      sample: '我不会跳舞。我希望从下个月开始跟朋友学跳舞，每个星期六去一次。',
      sample_py: 'Wǒ bú huì tiàowǔ. Wǒ xīwàng cóng xià ge yuè kāishǐ gēn péngyou xué tiàowǔ, měi ge xīngqīliù qù yí cì.',
      sample_vn: 'Tôi không biết nhảy. Tôi mong từ tháng sau bắt đầu học nhảy với bạn, mỗi thứ Bảy đi một lần.',
      tip: '跟 + người + 学 + môn = học … với ai; 从 + thời gian + 开始.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 9 + ôn bài 1–8 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bộ phim này tôi xem không hiểu, dài quá.', zh:'这个电影我没看懂，太长了。', py:'Zhège diànyǐng wǒ méi kàndǒng, tài cháng le.'},
  {vi:'Từ nhà tôi đến công ty mất bốn mươi phút.', zh:'从我家到公司要四十分钟。', py:'Cóng wǒ jiā dào gōngsī yào sìshí fēnzhōng.'},
  {vi:'Tôi hy vọng ngày mai bạn có thể đến nhà tôi.', zh:'我希望你明天能来我家。', py:'Wǒ xīwàng nǐ míngtiān néng lái wǒ jiā.'},
  {vi:'Bạn nói sai rồi, hôm nay là thứ Năm.', zh:'你说错了，今天是星期四。', py:'Nǐ shuō cuò le, jīntiān shì xīngqīsì.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Từ sáng đến giờ tôi chưa ăn gì cả.', zh:'我从早上到现在都没吃东西。', py:'Wǒ cóng zǎoshang dào xiànzài dōu méi chī dōngxi.'},
  {vi:'Cảm ơn các bạn đến thăm tôi, tuần sau lại đến nhé!', zh:'谢谢你们来看我，欢迎你们下个星期再来！', py:'Xièxie nǐmen lái kàn wǒ, huānyíng nǐmen xià ge xīngqī zài lái!'},
  {vi:'Cuốn sách đó tôi mua được rồi, mai đưa bạn.', zh:'那本书我买到了，明天给你。', py:'Nà běn shū wǒ mǎidào le, míngtiān gěi nǐ.'},
];
