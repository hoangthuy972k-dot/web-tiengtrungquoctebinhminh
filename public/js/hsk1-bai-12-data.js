// ══════════════════════════════════════════
// DATA — HSK1 Bài 12: 明天天气怎么样?
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "天气",
    "py": "tiānqì",
    "pos": "Danh từ",
    "vn": "thời tiết",
    "hv": "thiên khí",
    "em": "🌦️",
    "lesson": 1,
    "ex_zh": "今天天气怎么样？",
    "ex_py": "Jīntiān tiānqì zěnmeyàng?",
    "ex_vn": "Hôm nay thời tiết thế nào?",
    "exList": [
      {
        "zh": "今天天气怎么样？",
        "py": "Jīntiān tiānqì zěnmeyàng?",
        "vn": "Hôm nay thời tiết thế nào?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "今天的天气",
        "py": "jīntiān de tiānqì",
        "vn": "thời tiết hôm nay"
      },
      {
        "zh": "天气怎么样",
        "py": "tiānqì zěnmeyàng",
        "vn": "thời tiết thế nào"
      },
      {
        "zh": "中国的天气",
        "py": "Zhōngguó de tiānqì",
        "vn": "thời tiết Trung Quốc"
      },
      {
        "zh": "好天气",
        "py": "hǎo tiānqì",
        "vn": "thời tiết đẹp"
      }
    ],
    "patterns": [
      {
        "s": "天气 + 怎么样？",
        "m": "Hỏi thời tiết: 今天天气怎么样？"
      },
      {
        "s": "天 + 气",
        "m": "Khí trời (气) của bầu trời (天)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thời tiết hôm nay thế nào?",
        "answer": "今天天气怎么样？",
        "answerPy": "Jīntiān tiānqì zěnmeyàng?",
        "note": "Khung hỏi thời tiết quen thuộc nhất.",
        "pair": "怎么样？"
      },
      {
        "promptLang": "vi",
        "prompt": "Thời tiết Trung Quốc rất đẹp.",
        "answer": "中国的天气很好。",
        "answerPy": "Zhōngguó de tiānqì hěn hǎo.",
        "note": "中国的天气 — thời tiết Trung Quốc.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 2,
    "zh": "怎么样",
    "py": "zěnmeyàng",
    "pos": "Đại từ",
    "vn": "thế nào, như thế nào",
    "hv": "chẩm ma dạng",
    "em": "🤔",
    "lesson": 1,
    "ex_zh": "昨天北京的天气怎么样？",
    "ex_py": "Zuótiān Běijīng de tiānqì zěnmeyàng?",
    "ex_vn": "Hôm qua thời tiết ở Bắc Kinh thế nào?",
    "exList": [
      {
        "zh": "昨天北京的天气怎么样？",
        "py": "Zuótiān Běijīng de tiānqì zěnmeyàng?",
        "vn": "Hôm qua thời tiết ở Bắc Kinh thế nào?"
      }
    ],
    "hanzi": [
      {
        "c": "样",
        "p": "yàng",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "木(mộc) trái → 羊(biến thể) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "kiểu, dạng, dáng vẻ",
        "tip": "木(khuôn mẫu bằng gỗ) + 羊(mượn âm) → KIỂU DÁNG, dùng hỏi tình trạng \"như thế nào\". (怎/么 đã học ở Bài 6, Bài 3)",
        "cf": "洋 (yáng – \"đại dương\", cùng phần phải\")",
        "w": "怎么样"
      }
    ],
    "colloFull": [
      {
        "zh": "天气怎么样",
        "py": "tiānqì zěnmeyàng",
        "vn": "thời tiết thế nào"
      },
      {
        "zh": "身体怎么样",
        "py": "shēntǐ zěnmeyàng",
        "vn": "sức khoẻ thế nào"
      },
      {
        "zh": "这个怎么样",
        "py": "zhège zěnmeyàng",
        "vn": "cái này thế nào"
      },
      {
        "zh": "汉语怎么样",
        "py": "Hànyǔ zěnmeyàng",
        "vn": "tiếng Trung thế nào"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 怎么样？",
        "m": "Hỏi tình hình chung: 你身体怎么样？"
      },
      {
        "s": "怎么样 (thế nào, tình hình) ≠ 怎么 (làm thế nào, cách làm)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sức khoẻ bố bạn thế nào?",
        "answer": "你爸爸身体怎么样？",
        "answerPy": "Nǐ bàba shēntǐ zěnmeyàng?",
        "note": "Câu hỏi thăm sức khoẻ rất hay dùng.",
        "pair": "怎么样？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái này thế nào?",
        "answer": "这个怎么样？",
        "answerPy": "Zhège zěnmeyàng?",
        "note": "怎么样 hỏi tình hình, 怎么 hỏi cách làm.",
        "pair": "怎么样？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "太",
    "py": "tài",
    "pos": "Phó từ",
    "vn": "quá, lắm",
    "hv": "thái",
    "em": "❗",
    "lesson": 1,
    "ex_zh": "太热了。",
    "ex_py": "Tài rè le.",
    "ex_vn": "Nóng lắm.",
    "exList": [
      {
        "zh": "太热了。",
        "py": "Tài rè le.",
        "vn": "Nóng lắm."
      }
    ],
    "hanzi": [
      {
        "c": "太",
        "p": "tài",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "大(biến thể) → 丶",
        "rad": "大 (đại – lớn, biến thể)",
        "mean": "quá, lắm",
        "tip": "大(lớn) thêm một chấm nhỏ → LỚN HƠN NỮA, mức độ VƯỢT QUÁ. (大 đã học ở Bài 5)",
        "cf": "大 (dà – \"to, lớn\")",
        "w": "太热了 / 太好了"
      }
    ],
    "colloFull": [
      {
        "zh": "太热了",
        "py": "tài rè le",
        "vn": "nóng quá"
      },
      {
        "zh": "太冷了",
        "py": "tài lěng le",
        "vn": "lạnh quá"
      },
      {
        "zh": "太好了",
        "py": "tài hǎo le",
        "vn": "tốt quá"
      },
      {
        "zh": "太多了",
        "py": "tài duō le",
        "vn": "nhiều quá"
      }
    ],
    "patterns": [
      {
        "s": "太 + tính từ + 了",
        "m": "Quá … — hai vế phải đủ, không nói 太热 trơ"
      },
      {
        "s": "太……了 mang cảm xúc mạnh hơn 很"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay nóng quá!",
        "answer": "今天太热了！",
        "answerPy": "Jīntiān tài rè le!",
        "note": "Phải đủ hai vế 太 … 了, không nói 太热 trơ.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tốt quá! Chúng ta cùng đi xem phim.",
        "answer": "太好了！我们去看电影。",
        "answerPy": "Tài hǎo le! Wǒmen qù kàn diànyǐng.",
        "note": "太好了 là câu cảm thán rất hay dùng.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 4,
    "zh": "热",
    "py": "rè",
    "pos": "Tính từ",
    "vn": "nóng",
    "hv": "nhiệt",
    "em": "🥵",
    "lesson": 1,
    "ex_zh": "太热了。",
    "ex_py": "Tài rè le.",
    "ex_vn": "Nóng lắm.",
    "exList": [
      {
        "zh": "太热了。",
        "py": "Tài rè le.",
        "vn": "Nóng lắm."
      }
    ],
    "hanzi": [
      {
        "c": "热",
        "p": "rè",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "执(biến thể) trên → 灬(hỏa) dưới",
        "rad": "灬 (hỏa – lửa, phần dưới)",
        "mean": "nóng",
        "tip": "执(cầm nắm) + 灬(lửa) → cầm phải vật có lửa → NÓNG.",
        "cf": "势 (shì – \"thế lực\")",
        "w": "太热了 / 天气很热"
      }
    ],
    "colloFull": [
      {
        "zh": "太热了",
        "py": "tài rè le",
        "vn": "nóng quá"
      },
      {
        "zh": "很热",
        "py": "hěn rè",
        "vn": "rất nóng"
      },
      {
        "zh": "不热",
        "py": "bú rè",
        "vn": "không nóng"
      },
      {
        "zh": "热水",
        "py": "rè shuǐ",
        "vn": "nước nóng"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 热",
        "m": "Nóng — nói về thời tiết hoặc đồ vật"
      },
      {
        "s": "热 ↔ 冷",
        "m": "Nóng ↔ lạnh"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trưa nay không nóng.",
        "answer": "今天中午不热。",
        "answerPy": "Jīntiān zhōngwǔ bú rè.",
        "note": "Phủ định tính từ thì bỏ 很, dùng 不.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống một ít nước nóng.",
        "answer": "我想喝一些热水。",
        "answerPy": "Wǒ xiǎng hē yìxiē rèshuǐ.",
        "note": "热水 — nước nóng.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "冷",
    "py": "lěng",
    "pos": "Tính từ",
    "vn": "lạnh",
    "hv": "lãnh",
    "em": "🥶",
    "lesson": 1,
    "ex_zh": "不冷不热。",
    "ex_py": "Bù lěng bú rè.",
    "ex_vn": "Không lạnh cũng không nóng.",
    "exList": [
      {
        "zh": "不冷不热。",
        "py": "Bù lěng bú rè.",
        "vn": "Không lạnh cũng không nóng."
      }
    ],
    "hanzi": [
      {
        "c": "冷",
        "p": "lěng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "冫(băng) trái → 令(lệnh) phải",
        "rad": "冫 (băng – băng giá)",
        "mean": "lạnh",
        "tip": "冫(băng giá) + 令(mượn âm) → LẠNH.",
        "cf": "令 (lìng – \"ra lệnh\")",
        "w": "天气很冷"
      }
    ],
    "colloFull": [
      {
        "zh": "太冷了",
        "py": "tài lěng le",
        "vn": "lạnh quá"
      },
      {
        "zh": "很冷",
        "py": "hěn lěng",
        "vn": "rất lạnh"
      },
      {
        "zh": "不冷",
        "py": "bù lěng",
        "vn": "không lạnh"
      },
      {
        "zh": "冷水",
        "py": "lěng shuǐ",
        "vn": "nước lạnh"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 冷",
        "m": "Lạnh — nói về thời tiết"
      },
      {
        "s": "冷 có bộ 冫 (hai chấm băng) bên trái"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua lạnh quá!",
        "answer": "昨天太冷了！",
        "answerPy": "Zuótiān tài lěng le!",
        "note": "太冷了 — lạnh quá.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Thời tiết Trung Quốc có lạnh không?",
        "answer": "中国的天气冷吗？",
        "answerPy": "Zhōngguó de tiānqì lěng ma?",
        "note": "Câu hỏi có 吗 thì bỏ 很.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "下雨",
    "py": "xià yǔ",
    "pos": "Động từ",
    "vn": "đổ mưa, có mưa",
    "hv": "hạ vũ",
    "em": "🌧️",
    "lesson": 2,
    "ex_zh": "今天会下雨吗？",
    "ex_py": "Jīntiān huì xià yǔ ma?",
    "ex_vn": "Hôm nay có mưa không nhỉ?",
    "exList": [
      {
        "zh": "今天会下雨吗？",
        "py": "Jīntiān huì xià yǔ ma?",
        "vn": "Hôm nay có mưa không nhỉ?"
      }
    ],
    "hanzi": [
      {
        "c": "雨",
        "p": "yǔ",
        "type": "独体字 · Tượng hình",
        "st": 8,
        "ord": "一→冂→丨→丶丶丶丶",
        "rad": "雨 (vũ – tự thành bộ)",
        "mean": "mưa",
        "tip": "Hình những giọt nước rơi từ đám mây → MƯA. (下 đã học ở Bài 8)",
        "cf": "雪 (xuě – \"tuyết\")",
        "w": "下雨"
      }
    ],
    "colloFull": [
      {
        "zh": "今天下雨",
        "py": "jīntiān xià yǔ",
        "vn": "hôm nay mưa"
      },
      {
        "zh": "不下雨",
        "py": "bú xià yǔ",
        "vn": "không mưa"
      },
      {
        "zh": "下雨了",
        "py": "xià yǔ le",
        "vn": "mưa rồi"
      },
      {
        "zh": "明天下雨",
        "py": "míngtiān xià yǔ",
        "vn": "mai mưa"
      }
    ],
    "patterns": [
      {
        "s": "下雨 + 了",
        "m": "Mưa rồi — 了 cho thấy trời vừa đổi"
      },
      {
        "s": "下雨 không cần chủ ngữ: 下雨了 ✓"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mưa rồi, chúng ta về nhà thôi.",
        "answer": "下雨了，我们回家。",
        "answerPy": "Xià yǔ le, wǒmen huí jiā.",
        "note": "下雨 không cần chủ ngữ.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai không mưa.",
        "answer": "明天不下雨。",
        "answerPy": "Míngtiān bú xià yǔ.",
        "note": "不下雨 — không mưa.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "小姐",
    "py": "xiǎojiě",
    "pos": "Danh từ",
    "vn": "cô, tiểu thư",
    "hv": "tiểu thư",
    "em": "👩",
    "lesson": 2,
    "ex_zh": "王小姐今天会来吗？",
    "ex_py": "Wáng xiǎojiě jīntiān huì lái ma?",
    "ex_vn": "Hôm nay cô Vương có đến không nhỉ?",
    "exList": [
      {
        "zh": "王小姐今天会来吗？",
        "py": "Wáng xiǎojiě jīntiān huì lái ma?",
        "vn": "Hôm nay cô Vương có đến không nhỉ?"
      }
    ],
    "hanzi": [
      {
        "c": "姐",
        "p": "jiě",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女(nữ) trái → 且(thả) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "chị, cô",
        "tip": "女(nữ giới) + 且(hơn nữa) → người con gái lớn hơn trong nhà = CHỊ; 小姐 là cách gọi lịch sự phụ nữ trẻ. (小 đã học ở Bài 9)",
        "cf": "组 (zǔ – \"tổ, nhóm\")",
        "w": "小姐"
      }
    ],
    "colloFull": [
      {
        "zh": "王小姐",
        "py": "wáng xiǎojiě",
        "vn": "cô Vương"
      },
      {
        "zh": "小姐的书",
        "py": "xiǎojiě de shū",
        "vn": "sách của cô ấy"
      },
      {
        "zh": "小姐好",
        "py": "xiǎojiě hǎo",
        "vn": "chào cô"
      },
      {
        "zh": "小姐的电脑",
        "py": "xiǎojiě de diànnǎo",
        "vn": "máy tính của cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "họ + 小姐",
        "m": "Cách gọi: 王小姐 — cô Vương"
      },
      {
        "s": "小姐 (cô, phụ nữ trẻ) ↔ 先生 (ông, bài 14)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào cô Vương ạ!",
        "answer": "王小姐好！",
        "answerPy": "Wáng xiǎojiě hǎo!",
        "note": "Họ + 小姐 — cách gọi phụ nữ trẻ.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là bác sĩ của bệnh viện này.",
        "answer": "这个小姐是这个医院的医生。",
        "answerPy": "Zhège xiǎojiě shì zhège yīyuàn de yīshēng.",
        "note": "医院的医生 — bác sĩ của bệnh viện.",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 8,
    "zh": "来",
    "py": "lái",
    "pos": "Động từ",
    "vn": "đến, tới",
    "hv": "lai",
    "em": "🚶‍♀️",
    "lesson": 2,
    "ex_zh": "王小姐今天会来吗？",
    "ex_py": "Wáng xiǎojiě jīntiān huì lái ma?",
    "ex_vn": "Hôm nay cô Vương có đến không nhỉ?",
    "exList": [
      {
        "zh": "王小姐今天会来吗？",
        "py": "Wáng xiǎojiě jīntiān huì lái ma?",
        "vn": "Hôm nay cô Vương có đến không nhỉ?"
      }
    ],
    "hanzi": [
      {
        "c": "来",
        "p": "lái",
        "type": "独体字 · Tượng hình",
        "st": 7,
        "ord": "一→丨→㇏→丿→丶→一",
        "rad": "木 (mộc, biến thể)",
        "mean": "đến, tới",
        "tip": "Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.",
        "cf": "米 (mǐ – \"gạo\", đã học Bài 8\")",
        "w": "今天会来吗"
      }
    ],
    "colloFull": [
      {
        "zh": "来学校",
        "py": "lái xuéxiào",
        "vn": "đến trường"
      },
      {
        "zh": "来我家",
        "py": "lái wǒ jiā",
        "vn": "đến nhà tôi"
      },
      {
        "zh": "不来",
        "py": "bù lái",
        "vn": "không đến"
      },
      {
        "zh": "明天来",
        "py": "míngtiān lái",
        "vn": "mai đến"
      }
    ],
    "patterns": [
      {
        "s": "来 + nơi chốn",
        "m": "Đến đâu — lại gần người nói"
      },
      {
        "s": "来 (lại gần) ↔ 去 (rời xa) — nhìn từ chỗ người nói"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai bạn có đến trường không?",
        "answer": "明天你来学校吗？",
        "answerPy": "Míngtiān nǐ lái xuéxiào ma?",
        "note": "来 là lại gần người nói, 去 là rời xa.",
        "pair": "……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Trưa nay mời thầy đến nhà tôi ăn cơm ạ.",
        "answer": "今天中午请老师来我家吃饭。",
        "answerPy": "Jīntiān zhōngwǔ qǐng lǎoshī lái wǒ jiā chī fàn.",
        "note": "来我家 — đến nhà tôi.",
        "pair": "请 + V"
      }
    ]
  },
  {
    "n": 9,
    "zh": "身体",
    "py": "shēntǐ",
    "pos": "Danh từ",
    "vn": "sức khỏe, cơ thể",
    "hv": "thân thể",
    "em": "🧍",
    "lesson": 3,
    "ex_zh": "你身体怎么样？",
    "ex_py": "Nǐ shēntǐ zěnmeyàng?",
    "ex_vn": "Sức khỏe của anh thế nào?",
    "exList": [
      {
        "zh": "你身体怎么样？",
        "py": "Nǐ shēntǐ zěnmeyàng?",
        "vn": "Sức khỏe của anh thế nào?"
      }
    ],
    "hanzi": [
      {
        "c": "身",
        "p": "shēn",
        "type": "独体字 · Tượng hình",
        "st": 7,
        "ord": "丿→𠃌→一→一→一→一→丨",
        "rad": "身 (thân – tự thành bộ)",
        "mean": "thân thể, cơ thể",
        "tip": "Hình dáng người mang thai bụng to → THÂN THỂ, mở rộng nghĩa \"bản thân, cơ thể\".",
        "cf": "躬 (gōng – \"cúi mình\")",
        "w": "身体"
      },
      {
        "c": "体",
        "p": "tǐ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 本(bổn) phải",
        "rad": "亻 (nhân – người)",
        "mean": "thể, cơ thể",
        "tip": "亻(người) + 本(gốc rễ) → phần gốc của con người = CƠ THỂ. (本 đã học ở Bài 10)",
        "cf": "本 (běn – \"gốc, quyển\")",
        "w": "身体"
      }
    ],
    "colloFull": [
      {
        "zh": "身体怎么样",
        "py": "shēntǐ zěnmeyàng",
        "vn": "sức khoẻ thế nào"
      },
      {
        "zh": "我的身体",
        "py": "wǒ de shēntǐ",
        "vn": "sức khoẻ của tôi"
      },
      {
        "zh": "爸爸的身体",
        "py": "bàba de shēntǐ",
        "vn": "sức khoẻ của bố"
      },
      {
        "zh": "学生的身体",
        "py": "xuésheng de shēntǐ",
        "vn": "sức khoẻ học sinh"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 身体 + 怎么样？",
        "m": "Hỏi thăm sức khoẻ: 你爸爸身体怎么样？"
      },
      {
        "s": "身 + 体",
        "m": "Thân (身) thể (体) — hai chữ cùng nghĩa ghép lại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sức khoẻ của mẹ tôi rất tốt.",
        "answer": "我妈妈的身体很好。",
        "answerPy": "Wǒ māma de shēntǐ hěn hǎo.",
        "note": "……的身体 — sức khoẻ của ai.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Sức khoẻ của bạn thế nào?",
        "answer": "你身体怎么样？",
        "answerPy": "Nǐ shēntǐ zěnmeyàng?",
        "note": "Câu hỏi thăm, không cần 的.",
        "pair": "怎么样？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "爱",
    "py": "ài",
    "pos": "Động từ",
    "vn": "yêu, thích, muốn",
    "hv": "ái",
    "em": "❤️",
    "lesson": 3,
    "ex_zh": "不爱吃饭。",
    "ex_py": "Bú ài chī fàn.",
    "ex_vn": "Chẳng muốn ăn cơm.",
    "exList": [
      {
        "zh": "不爱吃饭。",
        "py": "Bú ài chī fàn.",
        "vn": "Chẳng muốn ăn cơm."
      }
    ],
    "hanzi": [
      {
        "c": "爱",
        "p": "ài",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "爫(biến thể) trên → 友(biến thể) dưới",
        "rad": "爫 (trảo – móng tay, biến thể)",
        "mean": "yêu, thích",
        "tip": "Hình bàn tay ôm lấy trái tim (chữ phồn thể 愛 có 心) → YÊU THƯƠNG.",
        "cf": "受 (shòu – \"nhận, chịu\")",
        "w": "爱吃饭 / 我爱你"
      }
    ],
    "colloFull": [
      {
        "zh": "爱吃水果",
        "py": "ài chī shuǐguǒ",
        "vn": "thích ăn hoa quả"
      },
      {
        "zh": "爱喝茶",
        "py": "ài hē chá",
        "vn": "thích uống trà"
      },
      {
        "zh": "爱看电影",
        "py": "ài kàn diànyǐng",
        "vn": "thích xem phim"
      },
      {
        "zh": "爱看书",
        "py": "ài kàn shū",
        "vn": "thích đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "爱 + động từ",
        "m": "Thích làm gì thành thói quen: 我爱吃水果"
      },
      {
        "s": "爱 (thích đến mức thành thói quen) mạnh hơn 喜欢 (bài 13)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích ăn hoa quả Trung Quốc.",
        "answer": "我很爱吃中国水果。",
        "answerPy": "Wǒ hěn ài chī Zhōngguó shuǐguǒ.",
        "note": "爱 + động từ — thích làm gì thành thói quen.",
        "pair": "爱 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi thích xem phim.",
        "answer": "我的女儿爱看电影。",
        "answerPy": "Wǒ de nǚ'ér ài kàn diànyǐng.",
        "note": "爱看电影 — thích xem phim.",
        "pair": "爱 + V"
      }
    ]
  },
  {
    "n": 11,
    "zh": "些",
    "py": "xiē",
    "pos": "Lượng từ",
    "vn": "một ít, một vài",
    "hv": "ta",
    "em": "➕",
    "lesson": 3,
    "ex_zh": "你多吃些水果。",
    "ex_py": "Nǐ duō chī xiē shuǐguǒ.",
    "ex_vn": "Anh hãy ăn thêm một ít trái cây.",
    "exList": [
      {
        "zh": "你多吃些水果。",
        "py": "Nǐ duō chī xiē shuǐguǒ.",
        "vn": "Anh hãy ăn thêm một ít trái cây."
      }
    ],
    "hanzi": [
      {
        "c": "些",
        "p": "xiē",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "此(thử) trên → 二(biến thể) dưới",
        "rad": "二 (nhị, biến thể)",
        "mean": "một ít, một vài",
        "tip": "此(này) + phần dưới chỉ số lượng nhỏ → MỘT VÀI, MỘT ÍT (cái này).",
        "cf": "此 (cǐ – \"này\")",
        "w": "多吃些水果"
      }
    ],
    "colloFull": [
      {
        "zh": "一些水果",
        "py": "yìxiē shuǐguǒ",
        "vn": "một ít hoa quả"
      },
      {
        "zh": "这些书",
        "py": "zhèxiē shū",
        "vn": "những quyển sách này"
      },
      {
        "zh": "那些人",
        "py": "nàxiē rén",
        "vn": "những người kia"
      },
      {
        "zh": "买一些",
        "py": "mǎi yìxiē",
        "vn": "mua một ít"
      }
    ],
    "patterns": [
      {
        "s": "一 / 这 / 那 + 些 + danh từ",
        "m": "Một vài, những — thay cho số cụ thể"
      },
      {
        "s": "些 đã mang nghĩa nhiều, nên KHÔNG thêm lượng từ nữa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một ít hoa quả.",
        "answer": "我想买一些水果。",
        "answerPy": "Wǒ xiǎng mǎi yìxiē shuǐguǒ.",
        "note": "些 đã mang nghĩa nhiều nên không thêm lượng từ.",
        "pair": "一些 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Những quyển sách này đều là của tôi.",
        "answer": "这些书是我的。",
        "answerPy": "Zhèxiē shū shì wǒ de.",
        "note": "这些 + danh từ — những cái này.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 12,
    "zh": "水果",
    "py": "shuǐguǒ",
    "pos": "Danh từ",
    "vn": "trái cây, hoa quả",
    "hv": "thủy quả",
    "em": "🍎",
    "lesson": 3,
    "ex_zh": "你多吃些水果。",
    "ex_py": "Nǐ duō chī xiē shuǐguǒ.",
    "ex_vn": "Anh hãy ăn thêm một ít trái cây.",
    "exList": [
      {
        "zh": "你多吃些水果。",
        "py": "Nǐ duō chī xiē shuǐguǒ.",
        "vn": "Anh hãy ăn thêm một ít trái cây."
      }
    ],
    "hanzi": [
      {
        "c": "水",
        "p": "shuǐ",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丨→𠃌→丿→㇏",
        "rad": "水 (thuỷ – tự thành bộ)",
        "mean": "nước",
        "tip": "Hình dòng nước chảy uốn lượn → NƯỚC.",
        "cf": "冰 (bīng – \"băng\")",
        "w": "水果 / 喝水"
      },
      {
        "c": "果",
        "p": "guǒ",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "田(biến thể) trên → 木(mộc) dưới",
        "rad": "木 (mộc – gỗ, phần dưới)",
        "mean": "quả, trái cây",
        "tip": "田(hình quả tròn) trên 木(cây) → QUẢ mọc trên cây = TRÁI CÂY.",
        "cf": "课 (kè – \"bài học\")",
        "w": "水果"
      }
    ],
    "colloFull": [
      {
        "zh": "吃水果",
        "py": "chī shuǐguǒ",
        "vn": "ăn hoa quả"
      },
      {
        "zh": "买水果",
        "py": "mǎi shuǐguǒ",
        "vn": "mua hoa quả"
      },
      {
        "zh": "一些水果",
        "py": "yìxiē shuǐguǒ",
        "vn": "một ít hoa quả"
      },
      {
        "zh": "爱吃水果",
        "py": "ài chī shuǐguǒ",
        "vn": "thích ăn hoa quả"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 买 + 水果",
        "m": "Ăn, mua hoa quả"
      },
      {
        "s": "水 + 果",
        "m": "Quả (果) nhiều nước (水)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hoa quả của cửa hàng này rất ngon.",
        "answer": "这个商店的水果很好吃。",
        "answerPy": "Zhège shāngdiàn de shuǐguǒ hěn hǎochī.",
        "note": "商店的水果 — hoa quả của cửa hàng.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi đi mua hoa quả.",
        "answer": "今天下午我去买水果。",
        "answerPy": "Jīntiān xiàwǔ wǒ qù mǎi shuǐguǒ.",
        "note": "去买水果 — đi mua hoa quả.",
        "pair": "去 + V"
      }
    ]
  },
  {
    "n": 13,
    "zh": "水",
    "py": "shuǐ",
    "pos": "Danh từ",
    "vn": "nước",
    "hv": "thủy",
    "em": "💧",
    "lesson": 3,
    "ex_zh": "多喝水。",
    "ex_py": "Duō hē shuǐ.",
    "ex_vn": "Uống thêm nước nhé.",
    "exList": [
      {
        "zh": "多喝水。",
        "py": "Duō hē shuǐ.",
        "vn": "Uống thêm nước nhé."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "喝水",
        "py": "hē shuǐ",
        "vn": "uống nước"
      },
      {
        "zh": "热水",
        "py": "rè shuǐ",
        "vn": "nước nóng"
      },
      {
        "zh": "冷水",
        "py": "lěng shuǐ",
        "vn": "nước lạnh"
      },
      {
        "zh": "一些水",
        "py": "yìxiē shuǐ",
        "vn": "một ít nước"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 水",
        "m": "Uống nước"
      },
      {
        "s": "水 là chữ tượng hình — nét giữa là dòng chảy"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống nước.",
        "answer": "我想喝水。",
        "answerPy": "Wǒ xiǎng hē shuǐ.",
        "note": "喝水 — uống nước.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Nóng quá, bạn uống một ít nước lạnh đi.",
        "answer": "太热了，你喝一些冷水。",
        "answerPy": "Tài rè le, nǐ hē yìxiē lěngshuǐ.",
        "note": "冷水 — nước lạnh.",
        "pair": "太……了"
      }
    ]
  }
];

const wuData = [
  {img:'🥵',label:'热',py:'rè',letter:'A'},
  {img:'🥶',label:'冷',py:'lěng',letter:'B'},
  {img:'🌧️',label:'下雨',py:'xià yǔ',letter:'C'},
  {img:'🍎',label:'水果',py:'shuǐguǒ',letter:'D'},
  {img:'💧',label:'水',py:'shuǐ',letter:'E'},
  {img:'❤️',label:'爱',py:'ài',letter:'F'},
];

var dialogData = [
  {scene:'Trên đường · Hỏi thời tiết',
   lines:[
     {sp:0,zh:'昨天北京的天气怎么样？',py:'Zuótiān Běijīng de tiānqì zěnmeyàng?',vn:'Hôm qua thời tiết ở Bắc Kinh thế nào?'},
     {sp:1,zh:'太热了。',py:'Tài rè le.',vn:'Nóng lắm.'},
     {sp:0,zh:'明天呢？明天天气怎么样？',py:'Míngtiān ne? Míngtiān tiānqì zěnmeyàng?',vn:'Còn ngày mai thì sao? Thời tiết thế nào?'},
     {sp:1,zh:'明天天气很好，不冷不热。',py:'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.',vn:'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.'},
   ]},
  {scene:'Ở phòng tập thể dục · Dự báo mưa',
   lines:[
     {sp:0,zh:'今天会下雨吗？',py:'Jīntiān huì xià yǔ ma?',vn:'Hôm nay có mưa không nhỉ?'},
     {sp:1,zh:'今天不会下雨。',py:'Jīntiān bú huì xià yǔ.',vn:'Hôm nay không mưa đâu.'},
     {sp:0,zh:'王小姐今天会来吗？',py:'Wáng xiǎojiě jīntiān huì lái ma?',vn:'Hôm nay cô Vương có đến không nhỉ?'},
     {sp:1,zh:'不会来，天气太冷了。',py:'Bú huì lái, tiānqì tài lěng le.',vn:'Cô ấy không đến đâu, trời lạnh quá mà.'},
   ]},
  {scene:'Trong phòng bệnh · Thăm sức khỏe',
   lines:[
     {sp:0,zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vn:'Sức khỏe của anh thế nào?'},
     {sp:1,zh:'我身体不太好。天气太热了，不爱吃饭。',py:'Wǒ shēntǐ bú tài hǎo. Tiānqì tài rè le, bú ài chī fàn.',vn:'Tôi không được khỏe lắm. Trời nóng quá, tôi chẳng muốn ăn cơm.'},
     {sp:0,zh:'你多吃些水果，多喝水。',py:'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.',vn:'Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.'},
     {sp:1,zh:'谢谢你，医生。',py:'Xièxie nǐ, yīshēng.',vn:'Cảm ơn bác sĩ.'},
   ]},
];

// Điền từ — đổi tình huống/thời tiết so với bài khoá
var fillData = [
  {pre:'Bạn hỏi thời tiết hôm nay: “今天天气',blank:'怎么样',post:'？”',hint:'(thế nào)',ans:'怎么样'},
  {pre:'Bạn nói trời nóng quá: “今天',blank:'太',post:'热了。”',hint:'(quá, lắm)',ans:'太'},
  {pre:'Bạn nói thời tiết không lạnh cũng không nóng: “今天不冷不',blank:'热',post:'。”',hint:'(nóng)',ans:'热'},
  {pre:'Bạn nói trời lạnh: “今天很',blank:'冷',post:'。”',hint:'(lạnh)',ans:'冷'},
  {pre:'Bạn hỏi ngày mai có mưa không: “明天会',blank:'下雨',post:'吗？”',hint:'(có mưa)',ans:'下雨'},
  {pre:'Bạn hỏi thăm sức khỏe: “你',blank:'身体',post:'怎么样？”',hint:'(sức khỏe, cơ thể)',ans:'身体'},
  {pre:'Bạn khuyên ai đó ăn thêm trái cây: “你多吃',blank:'些',post:'水果。”',hint:'(một ít, một vài)',ans:'些'},
  {pre:'Bạn nói mình không thích ăn cơm khi trời nóng: “天气太热了，我不',blank:'爱',post:'吃饭。”',hint:'(thích, muốn)',ans:'爱'},
];

// Sắp xếp — đổi câu chữ/tình huống so với bài khoá
var sortData = [
  {words:['今天','天气','怎么样','？'],ans:'今天天气怎么样？',audio:'今天天气怎么样？'},
  {words:['今天','很','冷','。'],ans:'今天很冷。',audio:'今天很冷。'},
  {words:['明天','会','下雨','吗','？'],ans:'明天会下雨吗？',audio:'明天会下雨吗？'},
  {words:['你','身体','怎么样','？'],ans:'你身体怎么样？',audio:'你身体怎么样？'},
  {words:['我','不','爱','吃饭','。'],ans:'我不爱吃饭。',audio:'我不爱吃饭。'},
  {words:['你','多','喝','水','。'],ans:'你多喝水。',audio:'你多喝水。'},
];

var matchData = [
  {left:'昨天北京的天气怎么样？',right:'太热了。'},
  {left:'明天天气怎么样？',right:'明天天气很好，不冷不热。'},
  {left:'今天会下雨吗？',right:'今天不会下雨。'},
  {left:'王小姐今天会来吗？',right:'不会来，天气太冷了。'},
  {left:'你身体怎么样？',right:'我身体不太好。'},
];

// Trắc nghiệm — trọng tâm 怎么样/太……了/会 dự đoán, không audio
var mcData = [
  {q:'今天天气＿＿？',opts:['怎么样','什么','怎么','哪儿'],ans:0},
  {q:'今天＿＿热了。',opts:['太','很','不','没'],ans:0},
  {q:'Phủ định của "太……了" (quá) thường dùng cấu trúc nào?',opts:['不太……','没太……','别太……','无太……'],ans:0},
  {q:'明天会＿＿吗？(biểu thị khả năng sẽ xảy ra)',opts:['来','是','有','在'],ans:0},
  {q:'"身体" nghĩa là gì?',opts:['sức khỏe, cơ thể','tâm trạng','tính cách','ngoại hình'],ans:0},
  {q:'"水果" nghĩa là gì?',opts:['trái cây, hoa quả','rau củ','nước uống','đồ ăn'],ans:0},
  {q:'"冷" nghĩa là gì?',opts:['lạnh','nóng','ấm','mát'],ans:0},
  {q:'Câu vị ngữ chủ-vị nào ĐÚNG?',opts:['我身体不太好。','我不太好身体。','身体我不太好。','不太好我身体。'],ans:0},
  {q:'"爱" trong "不爱吃饭" nghĩa là gì?',opts:['thích, muốn','yêu (tình cảm nam nữ)','ghét','sợ'],ans:0},
  {q:'"下雨" nghĩa là gì?',opts:['đổ mưa, có mưa','có nắng','có gió','có tuyết'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
      {zh:'明天天气很好，不冷不热。',py:'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.',vn:'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.'},
      {zh:'今天会下雨吗？',py:'Jīntiān huì xià yǔ ma?',vn:'Hôm nay có mưa không nhỉ?'},
      {zh:'你身体怎么样？',py:'Nǐ shēntǐ zěnmeyàng?',vn:'Sức khỏe của anh thế nào?'},
      {zh:'你多吃些水果，多喝水。',py:'Nǐ duō chī xiē shuǐguǒ, duō hē shuǐ.',vn:'Anh hãy ăn thêm một ít trái cây và uống thêm nước nhé.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'今天天气很＿＿。',frame_py:'Jīntiān tiānqì hěn ___.',vn:'Hôm nay thời tiết rất ＿＿.',options:['冷','热','好'],samples:['今天天气很冷。','今天天气很热。','今天天气很好。']},
      {frame:'你多吃些＿＿。',frame_py:'Nǐ duō chī xiē ___.',vn:'Bạn hãy ăn thêm một ít ＿＿.',options:['水果','米饭'],samples:['你多吃些水果。','你多吃些米饭。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🌤️ Tình huống 1 — Hỏi thăm thời tiết trước khi ra ngoài',
       guide:'Bạn chuẩn bị ra ngoài và muốn biết thời tiết hôm nay và ngày mai thế nào.',
       structure:['今天天气怎么样？','明天呢？明天天气怎么样？'],
       sample:'今天天气怎么样？太热了。明天呢？明天天气很好，不冷不热。',
       sample_vn:'Hôm nay thời tiết thế nào? Nóng lắm. Còn ngày mai? Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.',
       note:'Cấu trúc "不A不B" (不冷不热) rất thông dụng để diễn tả mức độ VỪA PHẢI, ở giữa hai thái cực — không chỉ dùng cho thời tiết mà còn nhiều tình huống khác.'},
      {role:'☔ Tình huống 2 — Dự đoán thời tiết và kế hoạch gặp mặt',
       guide:'Bạn hỏi bạn bè xem hôm nay có mưa không và liệu một người bạn chung có đến không.',
       structure:['今天会下雨吗？','王小姐今天会来吗？'],
       sample:'今天会下雨吗？今天不会下雨。王小姐今天会来吗？不会来，天气太冷了。',
       sample_vn:'Hôm nay có mưa không? Không mưa đâu. Cô Vương hôm nay có đến không? Không đến đâu, trời lạnh quá.',
       note:'会 ở đây dùng để dự đoán KHẢ NĂNG một sự việc sẽ xảy ra trong tương lai — khác với 会 ở Bài 6 biểu thị "biết" qua học tập.'},
      {role:'🍎 Tình huống 3 — Thăm hỏi sức khỏe và đưa lời khuyên',
       guide:'Bạn đến thăm một người ốm, hỏi thăm sức khỏe rồi đưa ra lời khuyên.',
       structure:['你身体怎么样？','你多吃些＿＿，多喝水。'],
       sample:'你身体怎么样？我身体不太好。你多吃些水果，多喝水。',
       sample_vn:'Sức khỏe của anh thế nào? Tôi không được khỏe lắm. Anh hãy ăn thêm trái cây và uống thêm nước nhé.',
       note:'Cấu trúc "多 + Động từ + 些 + Danh từ" (多吃些水果) là cách khuyên nhủ RẤT TỰ NHIÊN và phổ biến khi quan tâm đến sức khỏe người khác.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 12 + ôn lại từ bài 1-11
// ══════════════════════════════════════════
var translateData = [
  {vi:'Thời tiết hôm nay thế nào?', zh:'今天天气怎么样？', py:'Jīntiān tiānqì zěnmeyàng?'},
  {vi:'Hôm nay nóng quá.', zh:'今天太热了。', py:'Jīntiān tài rè le.'},
  {vi:'Sức khỏe tôi không tốt lắm.', zh:'我身体不太好。', py:'Wǒ shēntǐ bú tài hǎo.'},
  {vi:'Mai anh ấy sẽ đến chứ?', zh:'明天他会来吗？', py:'Míngtiān tā huì lái ma?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Thời tiết hôm nay thế nào? Hôm nay lạnh quá.', zh:'今天天气怎么样？今天太冷了。', py:'Jīntiān tiānqì zěnmeyàng? Jīntiān tài lěng le.'},
  {vi:'Sức khỏe tôi không tốt lắm, mai không thể đi học được.', zh:'我身体不太好，明天不能去学校。', py:'Wǒ shēntǐ bú tài hǎo, míngtiān bù néng qù xuéxiào.'},
  {vi:'Anh ấy có đến không? Anh ấy sẽ đến.', zh:'他会来吗？他会来。', py:'Tā huì lái ma? Tā huì lái.'},
  {vi:'Trời mưa rồi, thời tiết không tốt lắm.', zh:'下雨了，天气不太好。', py:'Xià yǔ le, tiānqì bú tài hǎo.'},
];
