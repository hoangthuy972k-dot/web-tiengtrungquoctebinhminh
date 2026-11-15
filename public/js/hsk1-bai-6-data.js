// ══════════════════════════════════════════
// DATA — HSK1 Bài 6: 我会说汉语
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "会",
    "py": "huì",
    "pos": "Động từ năng nguyện",
    "vn": "biết (qua học tập, rèn luyện)",
    "hv": "hội",
    "em": "🧠",
    "lesson": 1,
    "ex_zh": "我会说汉语。",
    "ex_py": "Wǒ huì shuō Hànyǔ.",
    "ex_vn": "Tôi biết nói tiếng Trung.",
    "exList": [
      {
        "zh": "我会说汉语。",
        "py": "Wǒ huì shuō Hànyǔ.",
        "vn": "Tôi biết nói tiếng Trung."
      },
      {
        "zh": "她不会说。",
        "py": "Tā bú huì shuō.",
        "vn": "Cô ấy thì không biết."
      }
    ],
    "hanzi": [
      {
        "c": "会",
        "p": "huì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "人(biến thể) trên → 云(biến thể) dưới",
        "rad": "人 (nhân, biến thể)",
        "mean": "biết, có thể (qua học tập)",
        "tip": "人(người) hội tụ đủ kiến thức → NGƯỜI đã học và nắm được kỹ năng.",
        "cf": "云 (yún – \"mây\")",
        "w": "我会说汉语"
      }
    ],
    "colloFull": [
      {
        "zh": "会说汉语",
        "py": "huì shuō Hànyǔ",
        "vn": "biết nói tiếng Trung"
      },
      {
        "zh": "会做菜",
        "py": "huì zuò cài",
        "vn": "biết nấu ăn"
      },
      {
        "zh": "会写汉字",
        "py": "huì xiě Hànzì",
        "vn": "biết viết chữ Hán"
      },
      {
        "zh": "不会",
        "py": "bú huì",
        "vn": "không biết"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 会 + động từ",
        "m": "Biết làm gì nhờ học mà có: 我会说汉语"
      },
      {
        "s": "Phủ định là 不会, KHÔNG nói 没会"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi biết nói tiếng Trung.",
        "answer": "我会说汉语。",
        "answerPy": "Wǒ huì shuō Hànyǔ.",
        "note": "会 chỉ khả năng có được nhờ học.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không biết viết chữ Hán.",
        "answer": "她不会写汉字。",
        "answerPy": "Tā bú huì xiě Hànzì.",
        "note": "Phủ định của 会 là 不会.",
        "pair": "不会 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "说",
    "py": "shuō",
    "pos": "Động từ",
    "vn": "nói",
    "hv": "thuyết",
    "em": "🗣️",
    "lesson": 1,
    "ex_zh": "我会说汉语。",
    "ex_py": "Wǒ huì shuō Hànyǔ.",
    "ex_vn": "Tôi biết nói tiếng Trung.",
    "exList": [
      {
        "zh": "我会说汉语。",
        "py": "Wǒ huì shuō Hànyǔ.",
        "vn": "Tôi biết nói tiếng Trung."
      },
      {
        "zh": "我妈妈不会说汉语。",
        "py": "Wǒ māma bú huì shuō Hànyǔ.",
        "vn": "Mẹ tôi không biết nói tiếng Trung."
      }
    ],
    "hanzi": [
      {
        "c": "说",
        "p": "shuō",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "讠(ngôn) trái → 兑(đoài) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "nói",
        "tip": "讠(lời nói) + 兑(trao đổi, vui vẻ) → dùng LỜI để trao đổi, NÓI CHUYỆN.",
        "cf": "脱 (tuō – \"cởi ra\")",
        "w": "说汉语 / 会说"
      }
    ],
    "colloFull": [
      {
        "zh": "说汉语",
        "py": "shuō Hànyǔ",
        "vn": "nói tiếng Trung"
      },
      {
        "zh": "会说",
        "py": "huì shuō",
        "vn": "biết nói"
      },
      {
        "zh": "说什么",
        "py": "shuō shénme",
        "vn": "nói gì"
      },
      {
        "zh": "说的名字",
        "py": "shuō de míngzi",
        "vn": "cái tên đã nói"
      }
    ],
    "patterns": [
      {
        "s": "说 + ngôn ngữ",
        "m": "Nói thứ tiếng nào: 说汉语"
      },
      {
        "s": "说 (nói ra lời) — muốn nói với ai thì cần thêm giới từ, học ở HSK 2"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi biết nói tiếng Trung.",
        "answer": "我妈妈会说汉语。",
        "answerPy": "Wǒ māma huì shuō Hànyǔ.",
        "note": "说汉语 — nói tiếng Trung.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy nói gì thế ạ?",
        "answer": "老师说什么？",
        "answerPy": "Lǎoshī shuō shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "妈妈",
    "py": "māma",
    "pos": "Danh từ",
    "vn": "mẹ",
    "hv": "ma ma",
    "em": "👩‍👦",
    "lesson": 1,
    "ex_zh": "你妈妈会说汉语吗？",
    "ex_py": "Nǐ māma huì shuō Hànyǔ ma?",
    "ex_vn": "Mẹ em biết nói tiếng Trung Quốc không?",
    "exList": [
      {
        "zh": "你妈妈会说汉语吗？",
        "py": "Nǐ māma huì shuō Hànyǔ ma?",
        "vn": "Mẹ em biết nói tiếng Trung Quốc không?"
      },
      {
        "zh": "我妈妈会做中国菜。",
        "py": "Wǒ māma huì zuò Zhōngguó cài.",
        "vn": "Mẹ tôi biết nấu món Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "妈",
        "p": "mā",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 马(mã) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "mẹ",
        "tip": "女(nữ giới) + 马(mượn âm) → tiếng gọi thân thương dành cho MẸ.",
        "cf": "吗 (ma – \"trợ từ hỏi\", cũng mượn âm 马\")",
        "w": "妈妈"
      }
    ],
    "colloFull": [
      {
        "zh": "我妈妈",
        "py": "wǒ māma",
        "vn": "mẹ tôi"
      },
      {
        "zh": "他妈妈",
        "py": "tā māma",
        "vn": "mẹ anh ấy"
      },
      {
        "zh": "妈妈做的菜",
        "py": "māma zuò de cài",
        "vn": "món mẹ nấu"
      },
      {
        "zh": "妈妈会做菜",
        "py": "māma huì zuò cài",
        "vn": "mẹ biết nấu ăn"
      }
    ],
    "patterns": [
      {
        "s": "người + 妈妈",
        "m": "Mẹ của ai — nói 我妈妈, ít khi nói 我的妈妈"
      },
      {
        "s": "妈 = 女 + 马",
        "m": "Bộ 女 chỉ nghĩa, chữ 马 (mǎ) chỉ âm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi biết nấu món Trung Quốc.",
        "answer": "我妈妈会做中国菜。",
        "answerPy": "Wǒ māma huì zuò Zhōngguó cài.",
        "note": "Người thân hay bỏ 的: 我妈妈.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Món mẹ nấu rất ngon.",
        "answer": "妈妈做的菜很好吃。",
        "answerPy": "Māma zuò de cài hěn hǎochī.",
        "note": "做的菜 — món do ai đó nấu.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "菜",
    "py": "cài",
    "pos": "Danh từ",
    "vn": "món ăn, rau, thức ăn",
    "hv": "thái",
    "em": "🥘",
    "lesson": 2,
    "ex_zh": "中国菜很好吃。",
    "ex_py": "Zhōngguó cài hěn hǎochī.",
    "ex_vn": "Món ăn Trung Quốc rất ngon.",
    "exList": [
      {
        "zh": "中国菜很好吃。",
        "py": "Zhōngguó cài hěn hǎochī.",
        "vn": "Món ăn Trung Quốc rất ngon."
      },
      {
        "zh": "这个菜很好吃。",
        "py": "Zhège cài hěn hǎochī.",
        "vn": "Món này rất ngon."
      }
    ],
    "hanzi": [
      {
        "c": "菜",
        "p": "cài",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "艹(thảo) trên → 采(thái) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "món ăn, rau",
        "tip": "艹(cây cỏ) + 采(hái) → RAU CỎ được hái về chế biến thành MÓN ĂN.",
        "cf": "踩 (cǎi – \"giẫm đạp\", cũng có 采\")",
        "w": "中国菜 / 好吃"
      }
    ],
    "colloFull": [
      {
        "zh": "做菜",
        "py": "zuò cài",
        "vn": "nấu ăn"
      },
      {
        "zh": "中国菜",
        "py": "Zhōngguó cài",
        "vn": "món Trung Quốc"
      },
      {
        "zh": "好吃的菜",
        "py": "hǎochī de cài",
        "vn": "món ngon"
      },
      {
        "zh": "妈妈做的菜",
        "py": "māma zuò de cài",
        "vn": "món mẹ nấu"
      }
    ],
    "patterns": [
      {
        "s": "做 + 菜",
        "m": "Nấu ăn — dùng 做, không dùng 写 hay 读"
      },
      {
        "s": "菜 vừa là rau, vừa là món ăn nói chung"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Món Trung Quốc rất ngon.",
        "answer": "中国菜很好吃。",
        "answerPy": "Zhōngguó cài hěn hǎochī.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có biết nấu ăn không?",
        "answer": "你会做菜吗？",
        "answerPy": "Nǐ huì zuò cài ma?",
        "note": "做菜 — nấu ăn, luôn dùng động từ 做.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "很",
    "py": "hěn",
    "pos": "Phó từ",
    "vn": "rất",
    "hv": "ngận",
    "em": "📈",
    "lesson": 2,
    "ex_zh": "中国菜很好吃。",
    "ex_py": "Zhōngguó cài hěn hǎochī.",
    "ex_vn": "Món ăn Trung Quốc rất ngon.",
    "exList": [
      {
        "zh": "中国菜很好吃。",
        "py": "Zhōngguó cài hěn hǎochī.",
        "vn": "Món ăn Trung Quốc rất ngon."
      },
      {
        "zh": "我很好，谢谢！",
        "py": "Wǒ hěn hǎo, xièxie!",
        "vn": "Tôi rất khỏe, cảm ơn!"
      }
    ],
    "hanzi": [
      {
        "c": "很",
        "p": "hěn",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "彳(sách) trái → 艮(cấn) phải",
        "rad": "彳 (sách – bước ngắn)",
        "mean": "rất",
        "tip": "彳(bước đi) + 艮(dừng lại, cứng) → nhấn mạnh mức độ, đi ĐẾN CÙNG = RẤT.",
        "cf": "狠 (hěn – \"hung dữ\", cũng có 艮\")",
        "w": "很好吃 / 很好"
      }
    ],
    "colloFull": [
      {
        "zh": "很好",
        "py": "hěn hǎo",
        "vn": "rất tốt"
      },
      {
        "zh": "很好吃",
        "py": "hěn hǎochī",
        "vn": "rất ngon"
      },
      {
        "zh": "很大",
        "py": "hěn dà",
        "vn": "rất lớn"
      },
      {
        "zh": "很多",
        "py": "hěn duō",
        "vn": "rất nhiều"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 + tính từ",
        "m": "Câu vị ngữ tính từ: 菜很好吃"
      },
      {
        "s": "✗ 菜好吃 → ✓ 菜很好吃",
        "m": "Tính từ làm vị ngữ gần như luôn cần 很"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tiếng Trung của cô ấy rất tốt.",
        "answer": "她的汉语很好。",
        "answerPy": "Tā de Hànyǔ hěn hǎo.",
        "note": "Không nói 她的汉语好 trơ như vậy.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi có rất nhiều bạn người Trung Quốc.",
        "answer": "我有很多中国朋友。",
        "answerPy": "Wǒ yǒu hěn duō Zhōngguó péngyou.",
        "note": "很多 + danh từ — rất nhiều cái gì.",
        "pair": "很多 + N"
      }
    ]
  },
  {
    "n": 6,
    "zh": "好吃",
    "py": "hǎochī",
    "pos": "Tính từ",
    "vn": "ngon",
    "hv": "hảo ngật",
    "em": "😋",
    "lesson": 2,
    "ex_zh": "中国菜很好吃。",
    "ex_py": "Zhōngguó cài hěn hǎochī.",
    "ex_vn": "Món ăn Trung Quốc rất ngon.",
    "exList": [
      {
        "zh": "中国菜很好吃。",
        "py": "Zhōngguó cài hěn hǎochī.",
        "vn": "Món ăn Trung Quốc rất ngon."
      },
      {
        "zh": "中国菜好吃吗？",
        "py": "Zhōngguó cài hǎochī ma?",
        "vn": "Món Trung Quốc có ngon không?"
      }
    ],
    "hanzi": [
      {
        "c": "吃",
        "p": "chī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "口(khẩu) trái → 乞(khất) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "ăn",
        "tip": "口(miệng) + 乞(xin, cầu) → dùng MIỆNG để ĂN, thoả mãn nhu cầu. (好 đã học ở Bài 1)",
        "cf": "吸 (xī – \"hít vào\")",
        "w": "好吃 / 吃饭"
      }
    ],
    "colloFull": [
      {
        "zh": "很好吃",
        "py": "hěn hǎochī",
        "vn": "rất ngon"
      },
      {
        "zh": "好吃的菜",
        "py": "hǎochī de cài",
        "vn": "món ngon"
      },
      {
        "zh": "不好吃",
        "py": "bù hǎochī",
        "vn": "không ngon"
      }
    ],
    "patterns": [
      {
        "s": "很 + 好吃",
        "m": "Rất ngon — nói về đồ ăn"
      },
      {
        "s": "好 + 吃",
        "m": "Ăn (吃) thấy tốt (好) — ghép 好 với động từ là ra tính từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Món anh ấy nấu không ngon.",
        "answer": "他做的菜不好吃。",
        "answerPy": "Tā zuò de cài bù hǎochī.",
        "note": "Phủ định tính từ thì bỏ 很, dùng 不.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Món mẹ tôi nấu rất ngon.",
        "answer": "我妈妈做的菜很好吃。",
        "answerPy": "Wǒ māma zuò de cài hěn hǎochī.",
        "note": "好 + 吃 — ăn thấy tốt, tức là ngon.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 7,
    "zh": "做",
    "py": "zuò",
    "pos": "Động từ",
    "vn": "làm, chế biến, nấu",
    "hv": "tố",
    "em": "👩‍🍳",
    "lesson": 2,
    "ex_zh": "你会做中国菜吗？",
    "ex_py": "Nǐ huì zuò Zhōngguó cài ma?",
    "ex_vn": "Anh có biết nấu món Trung Quốc không?",
    "exList": [
      {
        "zh": "你会做中国菜吗？",
        "py": "Nǐ huì zuò Zhōngguó cài ma?",
        "vn": "Anh có biết nấu món Trung Quốc không?"
      },
      {
        "zh": "你妈妈会做中国菜吗？",
        "py": "Nǐ māma huì zuò Zhōngguó cài ma?",
        "vn": "Mẹ bạn có biết nấu món Trung Quốc không?"
      }
    ],
    "hanzi": [
      {
        "c": "做",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "亻(nhân) trái → 故(biến thể) phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm, chế biến, nấu",
        "tip": "亻(người) đứng ra LÀM một việc gì đó cụ thể.",
        "cf": "作 (zuò – \"làm\", nghĩa gần giống\")",
        "w": "做菜 / 做什么"
      }
    ],
    "colloFull": [
      {
        "zh": "做菜",
        "py": "zuò cài",
        "vn": "nấu ăn"
      },
      {
        "zh": "做什么",
        "py": "zuò shénme",
        "vn": "làm gì"
      },
      {
        "zh": "会做",
        "py": "huì zuò",
        "vn": "biết làm"
      },
      {
        "zh": "妈妈做的",
        "py": "māma zuò de",
        "vn": "do mẹ làm"
      }
    ],
    "patterns": [
      {
        "s": "做 + danh từ",
        "m": "Làm việc gì: 做菜"
      },
      {
        "s": "做 (làm ra một thứ) ≠ 写 (viết) ≠ 读 (đọc)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đang làm gì đấy?",
        "answer": "你做什么？",
        "answerPy": "Nǐ zuò shénme?",
        "note": "做什么 — làm gì.",
        "pair": "……什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy biết nấu món Trung Quốc.",
        "answer": "她会做中国菜。",
        "answerPy": "Tā huì zuò Zhōngguó cài.",
        "note": "做 là làm ra một thứ gì đó.",
        "pair": "会 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "写",
    "py": "xiě",
    "pos": "Động từ",
    "vn": "viết",
    "hv": "tả",
    "em": "✍️",
    "lesson": 3,
    "ex_zh": "你会写汉字吗？",
    "ex_py": "Nǐ huì xiě Hànzì ma?",
    "ex_vn": "Anh có biết viết chữ Hán không?",
    "exList": [
      {
        "zh": "你会写汉字吗？",
        "py": "Nǐ huì xiě Hànzì ma?",
        "vn": "Anh có biết viết chữ Hán không?"
      },
      {
        "zh": "你的名字怎么写？",
        "py": "Nǐ de míngzi zěnme xiě?",
        "vn": "Tên bạn viết thế nào?"
      }
    ],
    "hanzi": [
      {
        "c": "写",
        "p": "xiě",
        "type": "上下结构 · Trên-dưới",
        "st": 5,
        "ord": "冖(mịch) trên → 与(biến thể) dưới",
        "rad": "冖 (mịch – trùm khăn)",
        "mean": "viết",
        "tip": "冖(gói ghém ý tưởng) → dùng bút để VIẾT ra thành chữ.",
        "cf": "冠 (guān – \"vương miện\")",
        "w": "写汉字 / 会写"
      }
    ],
    "colloFull": [
      {
        "zh": "写汉字",
        "py": "xiě Hànzì",
        "vn": "viết chữ Hán"
      },
      {
        "zh": "会写",
        "py": "huì xiě",
        "vn": "biết viết"
      },
      {
        "zh": "写名字",
        "py": "xiě míngzi",
        "vn": "viết tên"
      },
      {
        "zh": "不会写",
        "py": "bú huì xiě",
        "vn": "không biết viết"
      }
    ],
    "patterns": [
      {
        "s": "写 + 汉字 / 名字",
        "m": "Viết chữ, viết tên"
      },
      {
        "s": "写 là viết ra chữ; 说 là nói ra lời"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi biết viết tên tiếng Trung của mình.",
        "answer": "我会写我的汉语名字。",
        "answerPy": "Wǒ huì xiě wǒ de Hànyǔ míngzi.",
        "note": "写 + 名字 — viết tên.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn tôi không biết viết chữ Hán.",
        "answer": "我朋友不会写汉字。",
        "answerPy": "Wǒ péngyou bú huì xiě Hànzì.",
        "note": "我朋友 — bạn tôi, bỏ 的 cho gọn.",
        "pair": "不会 + V"
      }
    ]
  },
  {
    "n": 9,
    "zh": "汉字",
    "py": "Hànzì",
    "pos": "Danh từ",
    "vn": "chữ Hán",
    "hv": "Hán Tự",
    "em": "🈴",
    "lesson": 3,
    "ex_zh": "你会写汉字吗？",
    "ex_py": "Nǐ huì xiě Hànzì ma?",
    "ex_vn": "Anh có biết viết chữ Hán không?",
    "exList": [
      {
        "zh": "你会写汉字吗？",
        "py": "Nǐ huì xiě Hànzì ma?",
        "vn": "Anh có biết viết chữ Hán không?"
      },
      {
        "zh": "我会写汉字。",
        "py": "Wǒ huì xiě Hànzì.",
        "vn": "Tôi biết viết chữ Hán."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "写汉字",
        "py": "xiě Hànzì",
        "vn": "viết chữ Hán"
      },
      {
        "zh": "会写汉字",
        "py": "huì xiě Hànzì",
        "vn": "biết viết chữ Hán"
      },
      {
        "zh": "中国汉字",
        "py": "Zhōngguó Hànzì",
        "vn": "chữ Hán Trung Quốc"
      },
      {
        "zh": "读汉字",
        "py": "dú Hànzì",
        "vn": "đọc chữ Hán"
      }
    ],
    "patterns": [
      {
        "s": "写 / 读 + 汉字",
        "m": "Viết, đọc chữ Hán"
      },
      {
        "s": "汉 + 字",
        "m": "Chữ (字) của người Hán (汉)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chữ Hán rất nhiều.",
        "answer": "汉字很多。",
        "answerPy": "Hànzì hěn duō.",
        "note": "Câu vị ngữ tính từ: danh từ + 很 + tính từ.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Thưa thầy, chữ Hán đọc thế nào ạ?",
        "answer": "老师，汉字怎么读？",
        "answerPy": "Lǎoshī, Hànzì zěnme dú?",
        "note": "怎么读 — đọc như thế nào.",
        "pair": "怎么 + V？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "字",
    "py": "zì",
    "pos": "Danh từ",
    "vn": "chữ, ký tự",
    "hv": "tự",
    "em": "🔤",
    "lesson": 3,
    "ex_zh": "这个字怎么写？",
    "ex_py": "Zhège zì zěnme xiě?",
    "ex_vn": "Vậy chữ này anh viết thế nào?",
    "exList": [
      {
        "zh": "这个字怎么写？",
        "py": "Zhège zì zěnme xiě?",
        "vn": "Vậy chữ này anh viết thế nào?"
      },
      {
        "zh": "这个字我不会读。",
        "py": "Zhège zì wǒ bú huì dú.",
        "vn": "Chữ này tôi không biết đọc."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "汉字",
        "py": "Hànzì",
        "vn": "chữ Hán"
      },
      {
        "zh": "写字",
        "py": "xiě zì",
        "vn": "viết chữ"
      },
      {
        "zh": "名字",
        "py": "míngzi",
        "vn": "tên"
      },
      {
        "zh": "读字",
        "py": "dú zì",
        "vn": "đọc chữ"
      }
    ],
    "patterns": [
      {
        "s": "写 + 字",
        "m": "Viết chữ — 字 là từng con chữ"
      },
      {
        "s": "字 nằm trong nhiều từ đã học: 汉字 · 名字"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy biết viết chữ.",
        "answer": "她会写字。",
        "answerPy": "Tā huì xiě zì.",
        "note": "写字 — viết chữ nói chung.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chữ Hán viết thế nào?",
        "answer": "汉字怎么写？",
        "answerPy": "Hànzì zěnme xiě?",
        "note": "怎么写 — viết như thế nào.",
        "pair": "怎么 + V？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "怎么",
    "py": "zěnme",
    "pos": "Đại từ",
    "vn": "như thế nào (hỏi cách thức)",
    "hv": "chẩm ma",
    "em": "🤔",
    "lesson": 3,
    "ex_zh": "这个字怎么写？",
    "ex_py": "Zhège zì zěnme xiě?",
    "ex_vn": "Vậy chữ này anh viết thế nào?",
    "exList": [
      {
        "zh": "这个字怎么写？",
        "py": "Zhège zì zěnme xiě?",
        "vn": "Vậy chữ này anh viết thế nào?"
      },
      {
        "zh": "这个字怎么读？",
        "py": "Zhège zì zěnme dú?",
        "vn": "Chữ này đọc thế nào?"
      }
    ],
    "hanzi": [
      {
        "c": "怎",
        "p": "zěn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "乍(biến thể) trên → 心(tâm) dưới",
        "rad": "心 (tâm – trái tim, phần dưới)",
        "mean": "như thế nào",
        "tip": "心(tâm trí) băn khoăn không biết làm THẾ NÀO. (么 đã học ở Bài 3)",
        "cf": "作 (zuò – \"làm\", cùng phần 乍\")",
        "w": "怎么写 / 怎么样"
      }
    ],
    "colloFull": [
      {
        "zh": "怎么说",
        "py": "zěnme shuō",
        "vn": "nói thế nào"
      },
      {
        "zh": "怎么写",
        "py": "zěnme xiě",
        "vn": "viết thế nào"
      },
      {
        "zh": "怎么读",
        "py": "zěnme dú",
        "vn": "đọc thế nào"
      }
    ],
    "patterns": [
      {
        "s": "怎么 + động từ",
        "m": "Hỏi cách làm: 这个字怎么读？"
      },
      {
        "s": "Câu đã có 怎么 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tên tiếng Trung của bạn nói thế nào?",
        "answer": "你的汉语名字怎么说？",
        "answerPy": "Nǐ de Hànyǔ míngzi zěnme shuō?",
        "note": "Câu hỏi rất hay dùng trên lớp.",
        "pair": "怎么 + V？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tên của bạn viết thế nào?",
        "answer": "你的名字怎么写？",
        "answerPy": "Nǐ de míngzi zěnme xiě?",
        "note": "怎么 luôn đứng trước động từ.",
        "pair": "怎么 + V？"
      }
    ]
  },
  {
    "n": 12,
    "zh": "读",
    "py": "dú",
    "pos": "Động từ",
    "vn": "đọc",
    "hv": "độc",
    "em": "📖",
    "lesson": 3,
    "ex_zh": "这个字我会读，不会写。",
    "ex_py": "Zhège zì wǒ huì dú, bú huì xiě.",
    "ex_vn": "Chữ này tôi biết đọc chứ không biết viết.",
    "exList": [
      {
        "zh": "这个字我会读，不会写。",
        "py": "Zhège zì wǒ huì dú, bú huì xiě.",
        "vn": "Chữ này tôi biết đọc chứ không biết viết."
      },
      {
        "zh": "你会读这个字吗？",
        "py": "Nǐ huì dú zhège zì ma?",
        "vn": "Bạn có biết đọc chữ này không?"
      }
    ],
    "hanzi": [
      {
        "c": "读",
        "p": "dú",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 卖(biến thể) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "đọc",
        "tip": "讠(lời nói) + 卖(phát ra, bán) → phát ra tiếng từ chữ viết = ĐỌC.",
        "cf": "卖 (mài – \"bán\")",
        "w": "会读 / 读书"
      }
    ],
    "colloFull": [
      {
        "zh": "读汉字",
        "py": "dú Hànzì",
        "vn": "đọc chữ Hán"
      },
      {
        "zh": "怎么读",
        "py": "zěnme dú",
        "vn": "đọc thế nào"
      },
      {
        "zh": "会读",
        "py": "huì dú",
        "vn": "biết đọc"
      },
      {
        "zh": "读名字",
        "py": "dú míngzi",
        "vn": "đọc tên"
      }
    ],
    "patterns": [
      {
        "s": "读 + 汉字 / 字",
        "m": "Đọc chữ — đọc thành tiếng"
      },
      {
        "s": "读 là đọc to thành tiếng cho người khác nghe"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi biết đọc chữ Hán.",
        "answer": "我会读汉字。",
        "answerPy": "Wǒ huì dú Hànzì.",
        "note": "读 là đọc thành tiếng.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn biết đọc chữ Hán không?",
        "answer": "汉字你会读吗？",
        "answerPy": "Hànzì nǐ huì dú ma?",
        "note": "Đưa 汉字 lên đầu câu để nhấn mạnh.",
        "pair": "……吗？"
      }
    ]
  }
];

const wuData = [
  {img:'🗣️',label:'说',py:'shuō',letter:'A'},
  {img:'👩‍👦',label:'妈妈',py:'māma',letter:'B'},
  {img:'🥘',label:'菜',py:'cài',letter:'C'},
  {img:'👩‍🍳',label:'做',py:'zuò',letter:'D'},
  {img:'✍️',label:'写',py:'xiě',letter:'E'},
  {img:'📖',label:'读',py:'dú',letter:'F'},
];

var dialogData = [
  {scene:'Ở trường · Hỏi khả năng nói tiếng Trung',
   lines:[
     {sp:0,zh:'你会说汉语吗？',py:'Nǐ huì shuō Hànyǔ ma?',vn:'Em có biết nói tiếng Trung Quốc không?'},
     {sp:1,zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vn:'Em có biết.'},
     {sp:0,zh:'你妈妈会说汉语吗？',py:'Nǐ māma huì shuō Hànyǔ ma?',vn:'Mẹ em biết nói tiếng Trung Quốc không?'},
     {sp:1,zh:'她不会说。',py:'Tā bú huì shuō.',vn:'Mẹ em thì không.'},
   ]},
  {scene:'Trong nhà bếp · Nấu ăn Trung Quốc',
   lines:[
     {sp:0,zh:'中国菜好吃吗？',py:'Zhōngguó cài hǎochī ma?',vn:'Món ăn Trung Quốc có ngon không?'},
     {sp:1,zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Rất ngon.'},
     {sp:0,zh:'你会做中国菜吗？',py:'Nǐ huì zuò Zhōngguó cài ma?',vn:'Anh có biết nấu món Trung Quốc không?'},
     {sp:1,zh:'我不会做。',py:'Wǒ bú huì zuò.',vn:'Tôi không biết.'},
   ]},
  {scene:'Ở thư viện · Viết chữ Hán',
   lines:[
     {sp:0,zh:'你会写汉字吗？',py:'Nǐ huì xiě Hànzì ma?',vn:'Anh có biết viết chữ Hán không?'},
     {sp:1,zh:'我会写。',py:'Wǒ huì xiě.',vn:'Tôi có biết.'},
     {sp:0,zh:'这个字怎么写？',py:'Zhège zì zěnme xiě?',vn:'Vậy chữ này anh viết thế nào?'},
     {sp:1,zh:'对不起，这个字我会读，不会写。',py:'Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.',vn:'Xin lỗi, chữ này tôi biết đọc chứ không biết viết.'},
   ]},
];

// Điền từ — mỗi câu một tình huống mới; ôn 是/的/呢/谁/几/多大/了 của bài 3–5
var fillData = [
  {pre:'Bạn khoe với cả lớp về người bạn Mỹ học tiếng Trung đã lâu: “我的美国朋友',blank:'会',post:'说汉语！”',hint:'(biết — nhờ học mà có)',ans:'会',exp:'会 + động từ = biết làm gì nhờ học tập: 会说汉语 = biết nói tiếng Trung.'},
  {pre:'A: “你女儿会写字吗？” — B: “她两岁，',blank:'不会',post:'写字。”',hint:'(không biết)',ans:'不会',exp:'Phủ định của 会 là 不会; bé mới hai tuổi nên chưa biết viết.'},
  {pre:'Cô giáo mời cả lớp ăn món cô tự nấu. Bạn khen: “老师，您做的菜',blank:'很',post:'好吃！”',hint:'(rất)',ans:'很',exp:'Tính từ làm vị ngữ thường có 很 đứng trước: 菜很好吃; không nói 菜是好吃.'},
  {pre:'Mẹ bạn vừa học xong lớp nấu ăn kiểu Mỹ, bạn hỏi: “妈妈，美国菜你会',blank:'做',post:'吗？”',hint:'(làm, nấu)',ans:'做',exp:'做菜 = nấu món ăn; 美国菜你会做吗 = món Mỹ mẹ có biết nấu không.'},
  {pre:'Bạn người Mỹ nói tiếng Trung rất tốt nhưng chưa học chữ: “汉语我会说，汉字我不会',blank:'写',post:'。”',hint:'(viết)',ans:'写',exp:'写汉字 = viết chữ Hán: người này nói được nhưng không viết được.'},
  {pre:'Bé năm tuổi nhà hàng xóm cầm tấm thiệp có tên bạn, reo lên: “我会',blank:'读',post:'你的名字！”',hint:'(đọc thành tiếng)',ans:'读',exp:'读 = đọc thành tiếng: bé biết đọc tên của bạn.'},
  {pre:'Cô giáo viết lên bảng “不客气”, bạn quên mất cách đọc: “老师，“不客气”',blank:'怎么',post:'读？”',hint:'(như thế nào — hỏi cách làm)',ans:'怎么',exp:'怎么 + động từ để hỏi cách làm: 怎么读 = đọc thế nào. Không dùng 什么 ở đây.'},
  {pre:'Bạn muốn biết từ “xin lỗi” tiếng Trung nói thế nào, hỏi bạn Trung Quốc: ““xin lỗi”汉语怎么',blank:'说',post:'？”',hint:'(nói)',ans:'说',exp:'汉语怎么说 = tiếng Trung nói thế nào — câu hỏi rất hay dùng khi học từ mới.'},
  {pre:'A: “你',blank:'妈妈',post:'多大了？” — B: “她今年四十八岁了。”',hint:'(mẹ)',ans:'妈妈',exp:'妈妈 = mẹ; với người thân nói 你妈妈, không cần 的.'},
];

// Sắp xếp — câu mới, không chép bài khoá
var sortData = [
  {words:['谁','会','说','汉语','？'],ans:'谁会说汉语？',audio:'谁会说汉语？'},
  {words:['中国','菜','怎么','做','？'],ans:'中国菜怎么做？',audio:'中国菜怎么做？'},
  {words:['李月','的','汉语','老师','很','好','。'],ans:'李月的汉语老师很好。',audio:'李月的汉语老师很好。'},
  {words:['她','会','写','她的','名字','。'],ans:'她会写她的名字。',audio:'她会写她的名字。'},
  {words:['我的','汉字','不','好','，','对不起','。'],ans:'我的汉字不好，对不起。',audio:'我的汉字不好，对不起。'},
  {words:['我朋友','是','老师','，','她','会','写','很多','汉字','。'],ans:'我朋友是老师，她会写很多汉字。',audio:'我朋友是老师，她会写很多汉字。'},
];

// Nối — câu hỏi ↔ câu trả lời
var matchData = [
  {left:'谁会做中国菜？',right:'李月的妈妈。'},
  {left:'你妈妈的菜好吃吗？',right:'很好吃！'},
  {left:'“谢谢”怎么写？',right:'我会读，不会写。'},
  {left:'你朋友会说汉语吗？',right:'不会，她是美国人。'},
  {left:'你会做什么菜？',right:'我会做美国菜。'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp, tìm câu sai
var mcData = [
  {q:'Bạn Trung Quốc hỏi: “你会说汉语吗？” Bạn muốn đáp “Có, tôi biết nói.”',opts:['会，我会说。','有，我会说。','是，我会说。','会，我说会。'],ans:0,exp:'Trả lời “có biết” bằng chính 会, không dùng 有 hay 是; 会 đứng trước động từ.'},
  {q:'Bạn kể với bạn mới quen: “Nhà tôi rất to.”',opts:['我家很大。','我家是大。','我家大很。','我是家很大。'],ans:0,exp:'Chủ ngữ + 很 + tính từ: 我家很大; không chen 是 trước tính từ.'},
  {q:'Bạn muốn hỏi bạn cùng lớp: tên của cô giáo đọc thế nào?',opts:['老师的名字怎么读？','老师的名字什么读？','老师的名字读怎么？','老师的名字怎么读吗？'],ans:0,exp:'Hỏi cách làm: 怎么 + động từ (怎么读); đã có từ để hỏi thì không thêm 吗.'},
  {q:'Bạn muốn nói: “Mẹ tôi biết viết chữ Hán.”',opts:['我妈妈会写汉字。','我妈妈有写汉字。','我妈妈是写汉字。','我妈妈写会汉字。'],ans:0,exp:'“Biết (làm gì)” là 会 + động từ, không dịch “biết/có” thành 有 hay 是.'},
  {q:'Câu nào SAI?',opts:['我会汉语说。','我朋友不会做菜。','李月会读很多汉字。','谁的家很大？'],ans:0,exp:'会 + động từ + tân ngữ: phải nói 我会说汉语, không đưa 汉语 lên trước 说.'},
  {q:'A: “你的汉字很好！” — B đáp lịch sự:',opts:['谢谢！','没关系！','不客气！','对不起！'],ans:0,exp:'Được khen thì cảm ơn 谢谢; 不客气 dùng để đáp lời cảm ơn.'},
  {q:'Bạn ăn thử một món và thấy không ngon, nói nhỏ với bạn:',opts:['菜不好吃。','菜不是好吃。','菜好吃不。','不菜好吃。'],ans:0,exp:'Phủ định tính từ: 不 + tính từ (不好吃), không thêm 是.'},
  {q:'A: “我会做中国菜，你呢？” — B (không biết nấu) đáp:',opts:['我不会。','我不是。','我不有。','我会不。'],ans:0,exp:'Phủ định 会 là 不会; 你呢 hỏi lại đúng ý “bạn có biết nấu không”.'},
  {q:'Bạn muốn hỏi bạn cùng lớp: “Món Mỹ có ngon không?”',opts:['美国菜好吃吗？','美国菜好吃呢？','美国菜好吃什么？','好吃美国菜吗？'],ans:0,exp:'Câu hỏi có/không: thêm 吗 cuối câu (美国菜好吃吗); 呢 không dùng như vậy.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý 会 đọc thanh 4; 不会 đọc là bú huì.',
    models:[
      {zh:'我会说汉语，不会写汉字。',py:'Wǒ huì shuō Hànyǔ, bú huì xiě Hànzì.',vn:'Tôi biết nói tiếng Trung, không biết viết chữ Hán.'},
      {zh:'谁会写汉字？',py:'Shéi huì xiě Hànzì?',vn:'Ai biết viết chữ Hán?'},
      {zh:'我妈妈会做很多菜。',py:'Wǒ māma huì zuò hěn duō cài.',vn:'Mẹ tôi biết nấu rất nhiều món.'},
      {zh:'对不起，我不会读。',py:'Duìbuqǐ, wǒ bú huì dú.',vn:'Xin lỗi, tôi không biết đọc.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你会＿＿吗？',frame_py:'Nǐ huì ___ ma?',vn:'Bạn có biết ＿＿ không?',options:['写你的名字','读老师的名字','做美国菜'],samples:['你会写你的名字吗？','你会读老师的名字吗？','你会做美国菜吗？']},
      {frame:'中国菜＿＿。',frame_py:'Zhōngguó cài ___.',vn:'Món ăn Trung Quốc ＿＿.',options:['很好吃','很多','不好吃'],samples:['中国菜很好吃。','中国菜很多。','中国菜不好吃。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🗣️ Tình huống 1 — Ngày đầu ở lớp tiếng Trung',
       guide:'Cô giáo hỏi bạn biết những gì. Hãy chào cô, rồi nói bạn biết đọc chữ Hán nhưng chưa biết viết.',
       structure:['老师好！','我会＿＿，不会＿＿。'],
       sample:'老师好！我会读汉字，不会写。',
       sample_vn:'Em chào cô ạ! Em biết đọc chữ Hán, nhưng không biết viết.',
       note:'Người Việt hay nói “我有会” hoặc “我是会” vì tiếng Việt nói “có biết”. Trong tiếng Trung chỉ cần 会 + động từ; phủ định là 不会.'},
      {role:'🍜 Tình huống 2 — Ăn cơm nhà bạn Trung Quốc',
       guide:'Mẹ của bạn Trung Quốc nấu cơm mời bạn. Hãy khen món ăn, hỏi ai nấu, rồi cảm ơn bác.',
       structure:['菜很＿＿！','谁＿＿？','谢谢＿＿！'],
       sample:'菜很好吃！谁做的？谢谢您！',
       sample_vn:'Món ăn ngon quá! Ai nấu vậy ạ? Cháu cảm ơn bác ạ!',
       note:'Câu tính từ cần 很: nói 菜很好吃, đừng nói 菜是好吃. Cảm ơn người lớn tuổi thì dùng 您 cho lễ phép.'},
      {role:'✍️ Tình huống 3 — Hỏi cách viết tên bạn mới',
       guide:'Bạn mới quen Lý Nguyệt. Bạn biết đọc tên cô ấy nhưng không biết viết. Hãy hỏi tên cô ấy viết thế nào.',
       structure:['＿＿，你的名字怎么＿＿？'],
       sample:'李月，你的名字怎么写？',
       sample_vn:'Lý Nguyệt, tên bạn viết thế nào?',
       note:'Hỏi cách làm dùng 怎么 + động từ (怎么写, 怎么读, 怎么说). Câu đã có 怎么 thì không thêm 吗 ở cuối.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 6 + ôn lại từ bài 1-5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn tôi là người Mỹ, biết nói tiếng Trung, biết viết chữ Hán.', zh:'我朋友是美国人，会说汉语，会写汉字。', py:'Wǒ péngyou shì Měiguó rén, huì shuō Hànyǔ, huì xiě Hànzì.'},
  {vi:'Con gái của Lý Nguyệt mấy tuổi rồi? Bé có biết đọc chữ Hán không?', zh:'李月的女儿几岁了？会读汉字吗？', py:'Lǐ Yuè de nǚ\'ér jǐ suì le? Huì dú Hànzì ma?'},
  {vi:'Chữ của cô giáo tôi rất đẹp.', zh:'我老师的字很好。', py:'Wǒ lǎoshī de zì hěn hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô giáo dạy tiếng Trung của tôi biết nấu món Trung Quốc, rất ngon.', zh:'我的汉语老师会做中国菜，很好吃。', py:'Wǒ de Hànyǔ lǎoshī huì zuò Zhōngguó cài, hěn hǎochī.'},
  {vi:'Con gái tôi mười tuổi rồi, chữ của cháu rất đẹp.', zh:'我女儿十岁了，她的字很好。', py:'Wǒ nǚ\'ér shí suì le, tā de zì hěn hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'李月的妈妈是美国人，不会说汉语。',
   questions:[
     {q:'Mẹ của Lý Nguyệt thế nào?',opts:['Là người Mỹ, không biết nói tiếng Trung','Là người Trung Quốc, biết nói tiếng Trung','Là người Mỹ, biết nói tiếng Trung'],ans:0,exp:'是美国人 = là người Mỹ; 不会说汉语 = không biết nói tiếng Trung.'},
   ]},
  {audio:'妈妈，“好吃”怎么写？',
   questions:[
     {q:'Người nói đang hỏi ai?',opts:['Cô giáo','Bạn cùng lớp','Mẹ'],ans:2,exp:'Câu mở đầu bằng 妈妈 — người nói đang hỏi mẹ.'},
     {q:'Người nói muốn biết điều gì?',opts:['Cách viết một từ','Cách đọc một từ','Món nào ngon'],ans:0,exp:'怎么写 = viết thế nào: muốn biết cách viết từ 好吃.'},
   ]},
  {audio:'我朋友的女儿八岁，她会做菜！',
   questions:[
     {q:'Con gái của người bạn mấy tuổi?',opts:['Mười tám tuổi','Bốn tuổi','Tám tuổi'],ans:2,exp:'八岁 = tám tuổi.'},
     {q:'Cô bé biết làm gì?',opts:['Viết chữ Hán','Nấu ăn','Nói tiếng Anh'],ans:1,exp:'会做菜 = biết nấu ăn.'},
   ]},
  {audio:'我不会读汉字，李月会。',
   questions:[
     {q:'Ai biết đọc chữ Hán?',opts:['Người nói','Lý Nguyệt','Không ai biết'],ans:1,exp:'我不会读汉字 = tôi không biết đọc chữ Hán; 李月会 = Lý Nguyệt biết.'},
   ]},
  {audio:'我今年十六岁，会说汉语了！',
   questions:[
     {q:'Người nói bao nhiêu tuổi?',opts:['Mười sáu tuổi','Sáu mươi tuổi','Mười tuổi'],ans:0,exp:'十六岁 = mười sáu tuổi; 六十 mới là sáu mươi.'},
     {q:'Bây giờ người nói thế nào?',opts:['Đã biết viết chữ Hán','Đã biết nói tiếng Trung','Đã biết nấu ăn'],ans:1,exp:'会说汉语了 = (bây giờ) đã biết nói tiếng Trung rồi; 了 báo thay đổi.'},
   ]},
];

// Sach bai tap bai 6 (Doc + Chu Han, khong pinyin)
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài viết chữ theo thứ tự nét (Chữ Hán – Phần 2) không chấm được trên máy, hãy luyện viết vào vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-6-wb/q13.jpg', prompt: '说汉语', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '说汉语: nói tiếng Trung. Tranh hai người phụ nữ Trung Quốc đang trò chuyện → Đúng.' },
        { n: 14, img: '/images/hsk1-bai-6-wb/q14.jpg', prompt: '中国菜', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '中国菜: món ăn Trung Quốc. Tranh là đĩa bít tết kiểu Tây → Sai.' },
        { n: 15, img: '/images/hsk1-bai-6-wb/q15.jpg', prompt: '妈妈', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '妈妈: mẹ. Tranh là bố (người đàn ông) và con gái → Sai.' },
        { n: 16, img: '/images/hsk1-bai-6-wb/q16.jpg', prompt: '写汉字', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '写汉字: viết chữ Hán. Tranh cậu bé đang viết chữ Hán lên bảng → Đúng.' },
        { n: 17, img: '/images/hsk1-bai-6-wb/q17.jpg', prompt: '做中国菜', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '做中国菜: nấu món Trung Quốc. Tranh đầu bếp đang xào nấu bằng chảo → Đúng.' },
        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
          { key: 'A', text: '对不起，这个汉字我会读，不会写。' },
          { key: 'B', text: '会，李老师是中国人。' },
          { key: 'C', text: '中国菜很好吃。' },
          { key: 'D', text: '我会说汉语，不会写汉字。' },
          { key: 'E', text: '她不会做。' },
          { key: 'F', text: '好的，谢谢！' }
        ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你妈妈会做中国菜吗？', answer: 'E', vn: 'Mẹ bạn có biết nấu món Trung Quốc không? — E: Bà ấy không biết nấu. (她 thay cho 妈妈, 做 = nấu)' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '这个汉字怎么写？', answer: 'A', vn: 'Chữ Hán này viết thế nào? — A: Xin lỗi, chữ này tôi biết đọc, không biết viết.' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '李老师会说汉语吗？', answer: 'B', vn: 'Thầy Lý có biết nói tiếng Trung không? — B: Có, thầy Lý là người Trung Quốc.' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你会写汉字吗？', answer: 'D', vn: 'Bạn có biết viết chữ Hán không? — D: Tôi biết nói tiếng Trung, không biết viết chữ Hán.' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '中国菜好吃吗？', answer: 'C', vn: 'Món Trung Quốc có ngon không? — C: Món Trung Quốc rất ngon.' },
        { n: 23, part: 'Phần 3 · Chọn từ điền vào chỗ trống', bank: [
          { key: 'A', text: '很' },
          { key: 'B', text: '会' },
          { key: 'C', text: '怎么' },
          { key: 'D', text: '名字' },
          { key: 'E', text: '不' }
        ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我（　）会写我的汉语名字。', answer: 'E', vn: 'Tôi không biết viết tên tiếng Trung của mình. — 不会: không biết (làm gì); 不 đứng trước 会.' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你（　）做中国菜吗？', answer: 'B', vn: 'Bạn có biết nấu món Trung Quốc không? — 会 + động từ: biết (làm gì); câu hỏi với 吗.' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我朋友会说汉语，他的汉语（　）好。', answer: 'A', vn: 'Bạn tôi biết nói tiếng Trung, tiếng Trung của anh ấy rất giỏi. — 很 + tính từ (很好: rất tốt/giỏi).' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '老师，这个汉字（　）读？', answer: 'C', vn: 'Thưa thầy, chữ Hán này đọc thế nào ạ? — 怎么 + động từ: (làm) thế nào; giống 怎么写.' },
        { n: 27, bank: [
          { key: 'F', text: '吗' },
          { key: 'G', text: '呢' },
          { key: 'H', text: '哪' },
          { key: 'I', text: '的' }
        ], letters: ['F', 'G', 'H', 'I'], prompt: '你的中国朋友会做中国菜（　）？', answer: 'F', vn: 'Bạn người Trung Quốc của bạn có biết nấu món Trung Quốc không? — Câu hỏi có/không → thêm 吗 cuối câu.' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '我会说汉语。你（　）？', answer: 'G', vn: 'Tôi biết nói tiếng Trung. Còn bạn? — 你呢: hỏi lại “còn bạn thì sao?”.' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '我妈妈（　）朋友会说汉语。', answer: 'I', vn: 'Bạn của mẹ tôi biết nói tiếng Trung. — 的 nối người sở hữu: 妈妈的朋友 (bạn của mẹ).' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '你同学是（　）国人？', answer: 'H', vn: 'Bạn học của bạn là người nước nào? — 哪国人: người nước nào (như 你是哪国人？ ở bài 4).' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Phần 1 · Chữ nào có nét cho sẵn?', prompt: 'Chữ nào dưới đây có nét phẩy gập 撇折 (㇜)?', options: [{ key: 'A', text: '我' }, { key: 'B', text: '打' }, { key: 'C', text: '去' }, { key: 'D', text: '西' }], answer: 'C', vn: '去 = 土 + 厶; trong 厶 có nét phẩy gập (㇜). 我, 打, 西 không có nét này.' },
        { n: '1b', prompt: 'Chữ nào dưới đây có nét phẩy gập 撇折 (㇜)?', options: [{ key: 'A', text: '东' }, { key: 'B', text: '五' }, { key: 'C', text: '打' }, { key: 'D', text: '我' }], answer: 'A', vn: '东: nét thứ hai là nét phẩy gập (㇜). 五, 打, 我 không có nét này.' },
        { n: '2a', prompt: 'Chữ nào dưới đây có nét móc nghiêng 斜钩 (㇂)?', options: [{ key: 'A', text: '东' }, { key: 'B', text: '我' }, { key: 'C', text: '去' }, { key: 'D', text: '打' }], answer: 'B', vn: '我: nét móc nghiêng (㇂) kéo dài chéo xuống bên phải. 东, 去, 打 không có nét này (东, 打 có móc thẳng 竖钩).' },
        { n: '2b', prompt: 'Chữ nào dưới đây có nét móc nghiêng 斜钩 (㇂)?', options: [{ key: 'A', text: '去' }, { key: 'B', text: '打' }, { key: 'C', text: '西' }, { key: 'D', text: '钱' }], answer: 'D', vn: '钱: phần bên phải (giống 戈) có nét móc nghiêng (㇂). 去, 打, 西 không có nét này.' },
        { n: '3a', prompt: 'Chữ nào dưới đây có nét hất 提 (㇀)?', options: [{ key: 'A', text: '去' }, { key: 'B', text: '东' }, { key: 'C', text: '我' }, { key: 'D', text: '西' }], answer: 'C', vn: '我: nét thứ tư là nét hất (㇀) đi chéo lên bên phải. 去, 东, 西 không có nét này.' },
        { n: '3b', prompt: 'Chữ nào dưới đây có nét hất 提 (㇀)?', options: [{ key: 'A', text: '西' }, { key: 'B', text: '打' }, { key: 'C', text: '东' }, { key: 'D', text: '去' }], answer: 'B', vn: '打: bộ 扌 (tay) có nét hất (㇀) ở cuối. 西, 东, 去 không có nét này.' }
      ]
    }
  ]}
] };
