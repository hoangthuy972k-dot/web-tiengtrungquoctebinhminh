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
      },
      {
        "zh": "北京的天气很好。",
        "py": "Běijīng de tiānqì hěn hǎo.",
        "vn": "Thời tiết ở Bắc Kinh rất đẹp."
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
      },
      {
        "zh": "这个菜怎么样？",
        "py": "Zhège cài zěnmeyàng?",
        "vn": "Món này thế nào?"
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
      },
      {
        "zh": "这个杯子太小了。",
        "py": "Zhège bēizi tài xiǎo le.",
        "vn": "Cái cốc này nhỏ quá."
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
      },
      {
        "zh": "今天很热。",
        "py": "Jīntiān hěn rè.",
        "vn": "Hôm nay trời nóng."
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
      },
      {
        "zh": "昨天太冷了。",
        "py": "Zuótiān tài lěng le.",
        "vn": "Hôm qua lạnh quá."
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
      },
      {
        "zh": "下雨了！",
        "py": "Xià yǔ le!",
        "vn": "Trời mưa rồi!"
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
      },
      {
        "zh": "李小姐是我的朋友。",
        "py": "Lǐ xiǎojiě shì wǒ de péngyou.",
        "vn": "Cô Lý là bạn của tôi."
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
      },
      {
        "zh": "你什么时候来北京？",
        "py": "Nǐ shénme shíhou lái Běijīng?",
        "vn": "Khi nào bạn đến Bắc Kinh?"
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
      },
      {
        "zh": "我妈妈身体很好。",
        "py": "Wǒ māma shēntǐ hěn hǎo.",
        "vn": "Mẹ tôi sức khỏe rất tốt."
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
      },
      {
        "zh": "我爱吃中国菜。",
        "py": "Wǒ ài chī Zhōngguó cài.",
        "vn": "Tôi rất thích ăn món Trung Quốc."
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
      },
      {
        "zh": "我想买些水果。",
        "py": "Wǒ xiǎng mǎi xiē shuǐguǒ.",
        "vn": "Tôi muốn mua ít hoa quả."
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
      },
      {
        "zh": "你爱吃什么水果？",
        "py": "Nǐ ài chī shénme shuǐguǒ?",
        "vn": "Bạn thích ăn hoa quả gì?"
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
      },
      {
        "zh": "我想喝水。",
        "py": "Wǒ xiǎng hē shuǐ.",
        "vn": "Tôi muốn uống nước."
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

// Điền từ — mỗi câu một tình huống mới; ôn 做的菜/好吃 (bài 6), 多少钱 (bài 8), 什么时候/点 (bài 11), 想 (bài 8)
var fillData = [
  {pre:'Bạn mới mua một cái cốc, hỏi bạn mình: “这个杯子',blank:'怎么样',post:'？” — “太小了，我想买那个。”',hint:'(thế nào)',ans:'怎么样',exp:'Xin nhận xét về người/vật: … + 怎么样？; 怎么 là hỏi cách làm, không hỏi tình trạng.'},
  {pre:'Bạn ăn món mẹ nấu và khen: “妈妈做的菜',blank:'太',post:'好吃了！”',hint:'(quá)',ans:'太',exp:'太 + tính từ + 了 = … quá (cảm thán); nhớ có 了 ở cuối.'},
  {pre:'“北京七月天气怎么样？” — “很',blank:'热',post:'。”',hint:'(nóng)',ans:'热',exp:'热 = nóng; câu khẳng định với tính từ thường thêm 很: 很热.'},
  {pre:'Tháng một ở Bắc Kinh, bạn run cầm cập: “我很',blank:'冷',post:'，我想回家。”',hint:'(lạnh)',ans:'冷',exp:'冷 = lạnh, trái nghĩa với 热 (nóng).'},
  {pre:'Trời âm u, bạn nhắc bạn mình: “明天中午会',blank:'下雨',post:'。”',hint:'(mưa)',ans:'下雨',exp:'会 + động từ = sẽ (dự đoán): 会下雨 = sẽ mưa.'},
  {pre:'Gặp lại cô giáo cũ, bạn hỏi thăm: “老师，您',blank:'身体',post:'好吗？”',hint:'(sức khỏe)',ans:'身体',exp:'您身体好吗？ = sức khỏe cô có tốt không; câu chủ–vị: 您 + 身体好.'},
  {pre:'“李月今天会',blank:'来',post:'学校吗？” — “不会，她今天在家。”',hint:'(đến)',ans:'来',exp:'来 = đến (về phía người nói); 去 = đi (rời khỏi người nói).'},
  {pre:'“你儿子爱吃什么？” — “他',blank:'爱',post:'吃水果，不爱吃米饭。”',hint:'(thích)',ans:'爱',exp:'爱 + động từ = thích (làm gì): 爱吃水果; phủ định: 不爱.'},
  {pre:'Khách đến lớp, cô giáo mời: “请喝',blank:'些',post:'水。”',hint:'(một ít)',ans:'些',exp:'(一)些 = một ít: 喝些水 = uống chút nước.'},
  {pre:'Sau giờ thể dục, bạn khát quá: “我想喝',blank:'水',post:'，这儿有吗？”',hint:'(nước)',ans:'水',exp:'水 = nước; 喝水 = uống nước.'},
  {pre:'Ở cửa hàng, bạn gọi cô nhân viên trẻ: “',blank:'小姐',post:'，这个多少钱？”',hint:'(cô — gọi phụ nữ trẻ)',ans:'小姐',exp:'小姐 = cô (gọi phụ nữ trẻ một cách lịch sự); 王小姐 = cô Vương.'},
  {pre:'Bạn gọi cho mẹ ở Bắc Kinh: “妈妈，北京',blank:'天气',post:'冷吗？”',hint:'(thời tiết)',ans:'天气',exp:'Câu chủ–vị: 北京 + 天气冷 (thời tiết Bắc Kinh lạnh).'},
];

// Sắp xếp — 怎么样 đề nghị, câu chủ–vị, 不会太, 太……了, 不爱, 来
var sortData = [
  {words:['我们','星期六','去','看','电影','怎么样','？'],ans:'我们星期六去看电影怎么样？',audio:'我们星期六去看电影怎么样？'},
  {words:['这个','医院','医生','很','多','。'],ans:'这个医院医生很多。',audio:'这个医院医生很多。'},
  {words:['明天','不会','太','冷','。'],ans:'明天不会太冷。',audio:'明天不会太冷。'},
  {words:['今天','太','冷','了','，','我','不','想','去','学校','。'],ans:'今天太冷了，我不想去学校。',audio:'今天太冷了，我不想去学校。'},
  {words:['我','女儿','不','爱','吃','水果','。'],ans:'我女儿不爱吃水果。',audio:'我女儿不爱吃水果。'},
  {words:['王','小姐','几','点','来','？'],ans:'王小姐几点来？',audio:'王小姐几点来？'},
  {words:['星期三','会','下雨','，','我们','星期四','去','。'],ans:'星期三会下雨，我们星期四去。',audio:'星期三会下雨，我们星期四去。'},
];

// Nối — câu hỏi ↔ câu trả lời (đáp án mỗi cặp chỉ hợp một câu hỏi)
var matchData = [
  {left:'你的汉语怎么样？',right:'不太好，汉字太多了！'},
  {left:'这个菜怎么样？',right:'很好吃，我爱吃！'},
  {left:'你冷吗？',right:'不冷，今天天气很好。'},
  {left:'你想喝什么？',right:'水，谢谢。'},
  {left:'北京现在热吗？',right:'不热，现在很冷。'},
];

// Trắc nghiệm — chọn câu đúng tình huống / câu đáp / câu sai; không hỏi lý thuyết
var mcData = [
  {q:'Bạn mình vừa từ Mỹ về. Bạn hỏi: “Thời tiết ở Mỹ thế nào?”',opts:['美国的天气怎么样？','美国的天气怎么样吗？','美国的天气怎么？','怎么样美国的天气？'],ans:0,exp:'怎么样 đứng cuối câu hỏi; đã có 怎么样 thì không thêm 吗; 怎么 hỏi cách làm, không hỏi tình trạng.'},
  {q:'Câu nào SAI?',opts:['今天天气是很冷。','今天天气很冷。','谢朋的汉语很好。','这儿的水果很多。'],ans:0,exp:'Tính từ làm vị ngữ không cần 是: 天气很冷 (không nói 天气是很冷).'},
  {q:'Bạn muốn nói: “Hôm nay không lạnh lắm.”',opts:['今天不太冷。','今天太不冷。','今天不冷太。','今天太冷了。'],ans:0,exp:'不太 + tính từ = không … lắm; 太冷了 = lạnh quá (nghĩa ngược lại).'},
  {q:'Ly trà vừa rót còn rất nóng. Bạn nói:',opts:['这个茶太热了！','这个茶太热！','这个茶热太了！','这个茶是太热了！'],ans:0,exp:'Cảm thán “… quá”: 太 + tính từ + 了; 太 đứng trước tính từ, không thêm 是.'},
  {q:'A: “明天谢朋会来吗？” — B biết anh ấy không đến. B đáp:',opts:['不会，他明天去北京。','没有，他明天去北京。','不是，他明天去北京。','不太，他明天去北京。'],ans:0,exp:'Câu hỏi 会……吗？ trả lời phủ định bằng 不会 (sẽ không); 没有 phủ định 有, 不是 phủ định 是.'},
  {q:'Bạn rủ bạn: “Chiều nay chúng mình đi uống trà, thế nào?”',opts:['今天下午我们去喝茶怎么样？','今天下午我们去喝茶怎么？','我们去喝茶今天下午怎么样？','今天下午我们去喝茶怎么样吗？'],ans:0,exp:'Đề nghị rồi hỏi ý kiến: thêm 怎么样？ sau lời đề nghị; thời gian đứng trước động từ; không thêm 吗.'},
  {q:'Bạn muốn nói: “Tháng 12 thời tiết Bắc Kinh rất lạnh.”',opts:['北京十二月天气很冷。','北京十二月很冷天气。','北京天气十二月冷很。','北京十二月是天气很冷。'],ans:0,exp:'Câu chủ–vị: 北京十二月 + 天气很冷; 很 đứng trước tính từ, tính từ đứng cuối.'},
  {q:'Bà ngoại bạn đang ốm. Bạn hỏi thăm bà:',opts:['您身体怎么样？','您身体怎么？','您怎么样身体？','您是身体怎么样？'],ans:0,exp:'Hỏi thăm sức khỏe: 您 + 身体 + 怎么样？; dùng 您 với người lớn tuổi.'},
  {q:'Câu nào SAI?',opts:['明天能下雨吗？','这个月会很冷。','我儿子会写很多汉字。','老师，我能回家吗？'],ans:0,exp:'Dự đoán thời tiết dùng 会 (sẽ), không dùng 能 (có thể / được phép): 明天会下雨吗？'},
  {q:'A: “你爱喝茶吗？” — B không thích trà, B đáp:',opts:['不爱，我爱喝热水。','不是，我是喝热水。','不会，我会喝热水。','不太，我爱喝热水。'],ans:0,exp:'Hỏi bằng 爱 thì trả lời 爱 / 不爱; 不会 = không biết / sẽ không, không hợp ở đây.'},
  {q:'Bạn của bạn gầy quá. Bạn khuyên:',opts:['你多吃些米饭。','你吃多些米饭。','你些多吃米饭。','你多吃米饭些。'],ans:0,exp:'Khuyên “ăn thêm”: 多 + động từ + 些 + danh từ; 多 đứng TRƯỚC động từ (ngược tiếng Việt “ăn nhiều”).'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý: 不 trước thanh 4 đọc thành bú (bú rè, bú tài); 热 (rè) thanh 4, 冷 (lěng) thanh 3.',
    models:[
      {zh:'昨天北京的天气怎么样？',py:'Zuótiān Běijīng de tiānqì zěnmeyàng?',vn:'Hôm qua thời tiết ở Bắc Kinh thế nào?'},
      {zh:'明天天气很好，不冷不热。',py:'Míngtiān tiānqì hěn hǎo, bù lěng bú rè.',vn:'Ngày mai thời tiết rất đẹp, không lạnh cũng không nóng.'},
      {zh:'这儿的天气太好了！',py:'Zhèr de tiānqì tài hǎo le!',vn:'Thời tiết ở đây đẹp quá!'},
      {zh:'明天会很冷吗？',py:'Míngtiān huì hěn lěng ma?',vn:'Ngày mai có lạnh lắm không?'},
      {zh:'我妈妈爱做中国菜。',py:'Wǒ māma ài zuò Zhōngguó cài.',vn:'Mẹ tôi thích nấu món Trung Quốc.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'这个杯子太＿＿了！',frame_py:'Zhège bēizi tài ___ le!',vn:'Cái cốc này ＿＿ quá!',options:['小','大','好'],samples:['这个杯子太小了！','这个杯子太大了！','这个杯子太好了！']},
      {frame:'＿＿天气怎么样？',frame_py:'___ tiānqì zěnmeyàng?',vn:'Thời tiết ＿＿ thế nào?',options:['今天','明天下午','星期六'],samples:['今天天气怎么样？','明天下午天气怎么样？','星期六天气怎么样？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🌤️ Tình huống 1 — Kể thời tiết cho bạn ở xa',
       guide:'Một người bạn ở Bắc Kinh gọi điện hỏi thời tiết chỗ bạn hôm nay và dự đoán ngày mai.',
       structure:['我这儿今天＿＿。','＿＿会＿＿。'],
       sample:'我这儿今天下雨，星期五会很热。',
       sample_vn:'Chỗ mình hôm nay mưa, thứ Sáu sẽ rất nóng.',
       note:'Tính từ làm vị ngữ không cần 是: 今天很热 (không nói 今天是很热). Câu khẳng định thường thêm 很.'},
      {role:'🏥 Tình huống 2 — Hỏi thăm bạn ốm',
       guide:'Bạn cùng lớp bị ốm nghỉ học. Bạn gọi hỏi thăm sức khỏe và khuyên bạn ấy.',
       structure:['你现在怎么样？','多＿＿些＿＿。'],
       sample:'你现在怎么样？——不太好。——你多喝茶，多吃些水果。',
       sample_vn:'Bây giờ cậu thấy trong người thế nào? — Không khỏe lắm. — Cậu uống nhiều trà, ăn thêm trái cây nhé.',
       note:'Người Việt hay nói “ăn nhiều trái cây” rồi dịch thành 吃多水果 — sai. Tiếng Trung đặt 多 TRƯỚC động từ: 多吃些水果, 多喝水.'},
      {role:'🛍️ Tình huống 3 — Rủ bạn đi mua trái cây',
       guide:'Bạn rủ bạn đi mua trái cây vào thứ Bảy, hỏi ý kiến bằng 怎么样; bạn kia đồng ý và đoán thời tiết bằng 会.',
       structure:['＿＿我们去＿＿怎么样？','好，＿＿不会下雨。'],
       sample:'星期六我们去商店买水果怎么样？——好，星期六不会下雨。',
       sample_vn:'Thứ Bảy mình đi cửa hàng mua trái cây nhé, thế nào? — Được, thứ Bảy sẽ không mưa đâu.',
       note:'……怎么样？ đặt sau một lời đề nghị để hỏi ý kiến; 会 dùng để dự đoán: 不会下雨 = sẽ không mưa.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 12 + ôn lại từ bài 1-11
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngày mai trời sẽ không mưa đâu.', zh:'明天不会下雨。', py:'Míngtiān bú huì xià yǔ.'},
  {vi:'Cô Vương thích ăn trái cây.', zh:'王小姐爱吃水果。', py:'Wáng xiǎojiě ài chī shuǐguǒ.'},
  {vi:'Tháng tám Bắc Kinh nóng quá!', zh:'北京八月太热了！', py:'Běijīng bā yuè tài rè le!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô gái kia là ai? Cô ấy là cô giáo tiếng Trung của chúng tôi.', zh:'那个小姐是谁？她是我们的汉语老师。', py:'Nàge xiǎojiě shì shéi? Tā shì wǒmen de Hànyǔ lǎoshī.'},
  {vi:'Ở đây tháng 7 rất nóng, tháng 8 không nóng lắm.', zh:'这儿七月很热，八月不太热。', py:'Zhèr qī yuè hěn rè, bā yuè bú tài rè.'},
  {vi:'Khi nào bạn đến? — Tôi có thể đến trước 10 giờ.', zh:'你什么时候来？——我十点前能来。', py:'Nǐ shénme shíhou lái? — Wǒ shí diǎn qián néng lái.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'北京昨天很冷，今天很热。',
   questions:[
     {q:'Hôm qua ở Bắc Kinh thời tiết thế nào?',opts:['Nóng','Lạnh','Có mưa'],ans:1,exp:'昨天很冷 = hôm qua rất lạnh.'},
     {q:'Còn hôm nay thì sao?',opts:['Rất nóng','Không nóng không lạnh','Có mưa'],ans:0,exp:'今天很热 = hôm nay rất nóng.'},
   ]},
  {audio:'王小姐今天不会来，她身体不太好。',
   questions:[
     {q:'Vì sao cô Vương không đến?',opts:['Trời mưa','Cô ấy bận đi làm','Cô ấy không khỏe'],ans:2,exp:'身体不太好 = sức khỏe không tốt lắm.'},
   ]},
  {audio:'现在十二点，天气很热，我们三点去商店怎么样？',
   questions:[
     {q:'Người nói đề nghị mấy giờ đi cửa hàng?',opts:['12 giờ','3 giờ','Ngay bây giờ'],ans:1,exp:'我们三点去商店 = 3 giờ chúng ta đi cửa hàng.'},
     {q:'Vì sao không đi bây giờ?',opts:['Trời đang nóng','Trời mưa','Cửa hàng chưa mở'],ans:0,exp:'天气很热 = trời rất nóng.'},
   ]},
  {audio:'小姐，我想买些水果，多少钱？——二十八块。',
   questions:[
     {q:'Hết bao nhiêu tiền?',opts:['18 tệ','28 tệ','82 tệ'],ans:1,exp:'二十八块 = 28 tệ.'},
   ]},
  {audio:'我爸爸今年六十岁，爱喝茶，不爱喝水。',
   questions:[
     {q:'Bố của người nói thích uống gì?',opts:['Trà','Nước','Cả nước và trà'],ans:0,exp:'爱喝茶，不爱喝水 = thích uống trà, không thích uống nước.'},
   ]},
  {audio:'你几点来我家？——下午四点怎么样？',
   questions:[
     {q:'Người kia đề nghị đến lúc mấy giờ?',opts:['10 giờ trưa','2 giờ chiều','4 giờ chiều'],ans:2,exp:'下午四点 = 4 giờ chiều.'},
   ]},
];

// Sach bai tap (khong pinyin): Doc + Chu Han; Nghe / Ngu am can file nghe nen bo qua
var wbData = {
  sections: [
    { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
      { type: 'mocktest',
        note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài tập viết chữ theo thứ tự nét và so sánh chữ gần giống hãy luyện trực tiếp trong sách.',
        listening: [],
        reading: [
          { n: 16, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-12-wb/q16.jpg', prompt: '水', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '水: nước. Tranh là một cốc nước → Đúng.' },
          { n: 17, img: '/images/hsk1-bai-12-wb/q17.jpg', prompt: '下雨', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '下雨: trời mưa. Tranh là cảnh trời đang mưa → Đúng.' },
          { n: 18, img: '/images/hsk1-bai-12-wb/q18.jpg', prompt: '水果', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '水果: hoa quả. Tranh là một giỏ hoa quả (nho, táo, anh đào…) → Đúng.' },
          { n: 19, img: '/images/hsk1-bai-12-wb/q19.jpg', prompt: '小姐', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '小姐: cô (dùng gọi phụ nữ trẻ). Tranh là một người đàn ông → Sai.' },
          { n: 20, img: '/images/hsk1-bai-12-wb/q20.jpg', prompt: '医生', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '医生: bác sĩ. Tranh là người mặc áo blouse, đeo ống nghe → Đúng.' },
          { n: 21, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
            { key: 'A', text: '不会。' },
            { key: 'B', text: '多喝水，多吃水果。' },
            { key: 'C', text: '她很好，谢谢。' },
            { key: 'D', text: '太热了，我一会儿去。' },
            { key: 'E', text: '不冷不热。' },
            { key: 'F', text: '好的，谢谢！' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '下午会不会下雨？', answer: 'A', vn: 'Chiều nay có mưa không? — A: Không đâu. (Hỏi 会不会 thì trả lời 会 / 不会.)' },
          { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '昨天天气怎么样？', answer: 'E', vn: 'Thời tiết hôm qua thế nào? — E: Không lạnh cũng không nóng.' },
          { n: 23, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '王小姐身体怎么样？', answer: 'C', vn: 'Sức khỏe cô Vương thế nào? — C: Cô ấy rất khỏe, cảm ơn.' },
          { n: 24, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你什么时候去学校？', answer: 'D', vn: 'Khi nào bạn đến trường? — D: Nóng quá, lát nữa tôi đi. (一会儿 trả lời cho 什么时候.)' },
          { n: 25, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '医生说什么？', answer: 'B', vn: 'Bác sĩ nói gì? — B: Uống nhiều nước, ăn nhiều hoa quả.' },
          { n: 26, part: 'Phần 3 · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'A', text: '太……了' },
            { key: 'B', text: '多' },
            { key: 'C', text: '爱' },
            { key: 'D', text: '名字' },
            { key: 'E', text: '些' },
            { key: 'F', text: '怎么样' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '北京的天气（　）？', answer: 'F', vn: 'Thời tiết Bắc Kinh thế nào? — 怎么样: thế nào (hỏi tình hình, đứng cuối câu).' },
          { n: 27, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你（　）喝水，天气太热了。', answer: 'B', vn: 'Bạn uống nhiều nước vào, trời nóng quá. — 多 + động từ: (làm gì) nhiều hơn.' },
          { n: 28, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '他们不想住这儿，这儿（　）冷（　）。', answer: 'A', vn: 'Họ không muốn ở đây, ở đây lạnh quá. — 太 + tính từ + 了: quá…' },
          { n: 29, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '这个星期我身体不太好，不（　）吃饭。', answer: 'C', vn: 'Tuần này tôi không khỏe lắm, không thích ăn. — 不爱 + động từ: không thích làm gì.' },
          { n: 30, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '天气很热，你多吃（　）水果。', answer: 'E', vn: 'Trời rất nóng, bạn ăn thêm ít hoa quả nhé. — 多吃些: ăn nhiều thêm một chút (些: một ít).' }
        ],
        writing: [
          { n: '2a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 女 (bộ Nữ)?', prompt: '女', options: [{ key: 'A', text: '饮' }, { key: 'B', text: '妈' }, { key: 'C', text: '饭' }, { key: 'D', text: '饿' }], answer: 'B', vn: '妈 (mẹ) có bộ 女 (bộ Nữ). Các chữ có bộ 女 trong bài: 妈, 她, 好, 姐.' },
          { n: '2b', prompt: '女', options: [{ key: 'A', text: '她' }, { key: 'B', text: '饭' }, { key: 'C', text: '饿' }, { key: 'D', text: '饥' }], answer: 'A', vn: '她 (cô ấy) có bộ 女 (bộ Nữ). Các chữ có bộ 女 trong bài: 妈, 她, 好, 姐.' },
          { n: '2c', prompt: '女', options: [{ key: 'A', text: '饿' }, { key: 'B', text: '饥' }, { key: 'C', text: '饮' }, { key: 'D', text: '好' }], answer: 'D', vn: '好 (tốt) có bộ 女 (bộ Nữ). Các chữ có bộ 女 trong bài: 妈, 她, 好, 姐.' },
          { n: '2d', prompt: '女', options: [{ key: 'A', text: '饥' }, { key: 'B', text: '饮' }, { key: 'C', text: '姐' }, { key: 'D', text: '饭' }], answer: 'C', vn: '姐 (chị) có bộ 女 (bộ Nữ). Các chữ có bộ 女 trong bài: 妈, 她, 好, 姐.' },
          { n: '3a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 饣 (bộ Thực)?', prompt: '饣', options: [{ key: 'A', text: '妈' }, { key: 'B', text: '饮' }, { key: 'C', text: '她' }, { key: 'D', text: '好' }], answer: 'B', vn: '饮 (uống) có bộ 饣 (bộ Thực). Các chữ có bộ 饣 trong bài: 饮, 饭, 饿, 饥.' },
          { n: '3b', prompt: '饣', options: [{ key: 'A', text: '饭' }, { key: 'B', text: '她' }, { key: 'C', text: '好' }, { key: 'D', text: '姐' }], answer: 'A', vn: '饭 (cơm) có bộ 饣 (bộ Thực). Các chữ có bộ 饣 trong bài: 饮, 饭, 饿, 饥.' },
          { n: '3c', prompt: '饣', options: [{ key: 'A', text: '好' }, { key: 'B', text: '姐' }, { key: 'C', text: '妈' }, { key: 'D', text: '饿' }], answer: 'D', vn: '饿 (đói) có bộ 饣 (bộ Thực). Các chữ có bộ 饣 trong bài: 饮, 饭, 饿, 饥.' },
          { n: '3d', prompt: '饣', options: [{ key: 'A', text: '姐' }, { key: 'B', text: '妈' }, { key: 'C', text: '饥' }, { key: 'D', text: '她' }], answer: 'C', vn: '饥 (đói) có bộ 饣 (bộ Thực). Các chữ có bộ 饣 trong bài: 饮, 饭, 饿, 饥.' }
        ]
      }
    ] }
  ]
};
