// ══════════════════════════════════════════
// DATA — HSK1 Bài 8: 我想喝茶
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "想",
    "py": "xiǎng",
    "pos": "Động từ năng nguyện",
    "vn": "muốn, dự định làm gì",
    "hv": "tưởng",
    "em": "💭",
    "lesson": 1,
    "ex_zh": "我想喝茶。",
    "ex_py": "Wǒ xiǎng hē chá.",
    "ex_vn": "Tôi muốn uống trà.",
    "exList": [
      {
        "zh": "我想喝茶。",
        "py": "Wǒ xiǎng hē chá.",
        "vn": "Tôi muốn uống trà."
      },
      {
        "zh": "你想喝什么？",
        "py": "Nǐ xiǎng hē shénme?",
        "vn": "Cô muốn uống gì?"
      }
    ],
    "hanzi": [
      {
        "c": "想",
        "p": "xiǎng",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "相(tương) trên → 心(tâm) dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "muốn, nghĩ, dự định",
        "tip": "相(nhìn nhau, quan sát) + 心(tâm trí) → trong lòng suy nghĩ, mong MUỐN điều gì.",
        "cf": "相 (xiāng – \"lẫn nhau\")",
        "w": "我想 / 你想"
      }
    ],
    "colloFull": [
      {
        "zh": "想吃",
        "py": "xiǎng chī",
        "vn": "muốn ăn"
      },
      {
        "zh": "想喝茶",
        "py": "xiǎng hē chá",
        "vn": "muốn uống trà"
      },
      {
        "zh": "想去中国",
        "py": "xiǎng qù Zhōngguó",
        "vn": "muốn đi Trung Quốc"
      },
      {
        "zh": "不想",
        "py": "bù xiǎng",
        "vn": "không muốn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 想 + động từ",
        "m": "Muốn làm gì: 我想喝茶"
      },
      {
        "s": "想 (muốn) ≠ 会 (biết làm) — 我想说汉语 / 我会说汉语"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống trà Trung Quốc.",
        "answer": "我想喝中国茶。",
        "answerPy": "Wǒ xiǎng hē Zhōngguó chá.",
        "note": "想 + động từ — muốn làm gì.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi không muốn đi cửa hàng.",
        "answer": "今天下午我不想去商店。",
        "answerPy": "Jīntiān xiàwǔ wǒ bù xiǎng qù shāngdiàn.",
        "note": "Phủ định đặt trước 想: 不想去.",
        "pair": "不想 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "喝",
    "py": "hē",
    "pos": "Động từ",
    "vn": "uống",
    "hv": "hát",
    "em": "🥤",
    "lesson": 1,
    "ex_zh": "我想喝茶。",
    "ex_py": "Wǒ xiǎng hē chá.",
    "ex_vn": "Tôi muốn uống trà.",
    "exList": [
      {
        "zh": "我想喝茶。",
        "py": "Wǒ xiǎng hē chá.",
        "vn": "Tôi muốn uống trà."
      }
    ],
    "hanzi": [
      {
        "c": "喝",
        "p": "hē",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "口(khẩu) trái → 曷(hạt) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "uống",
        "tip": "口(miệng) dùng để UỐNG chất lỏng.",
        "cf": "渴 (kě – \"khát\", cũng có 曷\")",
        "w": "喝茶 / 喝水"
      }
    ],
    "colloFull": [
      {
        "zh": "喝茶",
        "py": "hē chá",
        "vn": "uống trà"
      },
      {
        "zh": "想喝",
        "py": "xiǎng hē",
        "vn": "muốn uống"
      },
      {
        "zh": "喝什么",
        "py": "hē shénme",
        "vn": "uống gì"
      },
      {
        "zh": "不喝",
        "py": "bù hē",
        "vn": "không uống"
      }
    ],
    "patterns": [
      {
        "s": "喝 + đồ uống",
        "m": "Uống cái gì: 喝茶"
      },
      {
        "s": "喝 (uống) ≠ 吃 (ăn) — dùng sai là lỗi rất hay gặp"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn uống gì?",
        "answer": "你想喝什么？",
        "answerPy": "Nǐ xiǎng hē shénme?",
        "note": "喝 dùng cho đồ uống, 吃 dùng cho đồ ăn.",
        "pair": "……什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi không uống trà.",
        "answer": "我妈妈不喝茶。",
        "answerPy": "Wǒ māma bù hē chá.",
        "note": "不喝 — không uống.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "茶",
    "py": "chá",
    "pos": "Danh từ",
    "vn": "trà",
    "hv": "trà",
    "em": "🍵",
    "lesson": 1,
    "ex_zh": "我想喝茶。",
    "ex_py": "Wǒ xiǎng hē chá.",
    "ex_vn": "Tôi muốn uống trà.",
    "exList": [
      {
        "zh": "我想喝茶。",
        "py": "Wǒ xiǎng hē chá.",
        "vn": "Tôi muốn uống trà."
      }
    ],
    "hanzi": [
      {
        "c": "茶",
        "p": "chá",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "艹(thảo) trên → 余(biến thể) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "trà",
        "tip": "艹(lá cây) pha thành thức uống → TRÀ.",
        "cf": "茶 dễ nhầm 荼 (tú – \"cỏ đắng\")",
        "w": "喝茶"
      }
    ],
    "colloFull": [
      {
        "zh": "喝茶",
        "py": "hē chá",
        "vn": "uống trà"
      },
      {
        "zh": "中国茶",
        "py": "Zhōngguó chá",
        "vn": "trà Trung Quốc"
      },
      {
        "zh": "喝中国茶",
        "py": "hē Zhōngguó chá",
        "vn": "uống trà Trung Quốc"
      },
      {
        "zh": "想喝茶",
        "py": "xiǎng hē chá",
        "vn": "muốn uống trà"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 茶",
        "m": "Uống trà"
      },
      {
        "s": "茶 có bộ 艹 (cỏ) ở trên — trà làm từ lá cây"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trà Trung Quốc rất ngon.",
        "answer": "中国茶很好喝。",
        "answerPy": "Zhōngguó chá hěn hǎohē.",
        "note": "好喝 ghép giống 好吃: uống thấy ngon.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn có muốn uống trà không?",
        "answer": "今天下午你想喝茶吗？",
        "answerPy": "Jīntiān xiàwǔ nǐ xiǎng hē chá ma?",
        "note": "Từ chỉ thời gian đứng đầu câu.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 4,
    "zh": "吃",
    "py": "chī",
    "pos": "Động từ",
    "vn": "ăn",
    "hv": "ngật",
    "em": "🍽️",
    "lesson": 1,
    "ex_zh": "我想吃米饭。",
    "ex_py": "Wǒ xiǎng chī mǐfàn.",
    "ex_vn": "Tôi muốn ăn cơm.",
    "exList": [
      {
        "zh": "我想吃米饭。",
        "py": "Wǒ xiǎng chī mǐfàn.",
        "vn": "Tôi muốn ăn cơm."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "吃米饭",
        "py": "chī mǐfàn",
        "vn": "ăn cơm"
      },
      {
        "zh": "吃菜",
        "py": "chī cài",
        "vn": "ăn thức ăn"
      },
      {
        "zh": "吃什么",
        "py": "chī shénme",
        "vn": "ăn gì"
      },
      {
        "zh": "想吃",
        "py": "xiǎng chī",
        "vn": "muốn ăn"
      }
    ],
    "patterns": [
      {
        "s": "吃 + đồ ăn",
        "m": "Ăn cái gì: 吃米饭"
      },
      {
        "s": "吃 có bộ 口 (miệng) bên trái — mọi chữ liên quan đến miệng đều có bộ này"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trưa nay tôi muốn ăn cơm.",
        "answer": "今天我想吃米饭。",
        "answerPy": "Jīntiān wǒ xiǎng chī mǐfàn.",
        "note": "吃米饭 — ăn cơm.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn ăn gì?",
        "answer": "你想吃什么？",
        "answerPy": "Nǐ xiǎng chī shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "米饭",
    "py": "mǐfàn",
    "pos": "Danh từ",
    "vn": "cơm",
    "hv": "mễ phạn",
    "em": "🍚",
    "lesson": 1,
    "ex_zh": "我想吃米饭。",
    "ex_py": "Wǒ xiǎng chī mǐfàn.",
    "ex_vn": "Tôi muốn ăn cơm.",
    "exList": [
      {
        "zh": "我想吃米饭。",
        "py": "Wǒ xiǎng chī mǐfàn.",
        "vn": "Tôi muốn ăn cơm."
      }
    ],
    "hanzi": [
      {
        "c": "米",
        "p": "mǐ",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丶→一→丨→㇏→ノ→一",
        "rad": "米 (mễ – tự thành bộ)",
        "mean": "gạo",
        "tip": "Hình hạt gạo tản ra từ bông lúa → GẠO.",
        "cf": "来 (lái – \"đến\")",
        "w": "米饭"
      },
      {
        "c": "饭",
        "p": "fàn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "饣(thực) trái → 反(phản) phải",
        "rad": "饣 (thực – ăn uống)",
        "mean": "cơm",
        "tip": "饣(bộ ăn uống) + 反(lật qua lật lại, xới cơm) → CƠM.",
        "cf": "饱 (bǎo – \"no\")",
        "w": "米饭"
      }
    ],
    "colloFull": [
      {
        "zh": "吃米饭",
        "py": "chī mǐfàn",
        "vn": "ăn cơm"
      },
      {
        "zh": "做米饭",
        "py": "zuò mǐfàn",
        "vn": "nấu cơm"
      },
      {
        "zh": "好吃的米饭",
        "py": "hǎochī de mǐfàn",
        "vn": "cơm ngon"
      },
      {
        "zh": "想吃米饭",
        "py": "xiǎng chī mǐfàn",
        "vn": "muốn ăn cơm"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 米饭",
        "m": "Ăn cơm"
      },
      {
        "s": "米 + 饭",
        "m": "Cơm (饭) nấu từ gạo (米)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cơm mẹ nấu rất ngon.",
        "answer": "妈妈做的米饭很好吃。",
        "answerPy": "Māma zuò de mǐfàn hěn hǎochī.",
        "note": "做的米饭 — cơm do ai đó nấu.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không ăn cơm.",
        "answer": "她不吃米饭。",
        "answerPy": "Tā bù chī mǐfàn.",
        "note": "不吃 — không ăn.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "下午",
    "py": "xiàwǔ",
    "pos": "Danh từ",
    "vn": "buổi chiều",
    "hv": "hạ ngọ",
    "em": "🌇",
    "lesson": 2,
    "ex_zh": "下午你想做什么？",
    "ex_py": "Xiàwǔ nǐ xiǎng zuò shénme?",
    "ex_vn": "Buổi chiều bạn muốn làm gì?",
    "exList": [
      {
        "zh": "下午你想做什么？",
        "py": "Xiàwǔ nǐ xiǎng zuò shénme?",
        "vn": "Buổi chiều bạn muốn làm gì?"
      }
    ],
    "hanzi": [
      {
        "c": "下",
        "p": "xià",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一→丨→丶",
        "rad": "一 (nhất)",
        "mean": "dưới, phía dưới",
        "tip": "Một điểm nằm DƯỚI đường ngang → chỉ vị trí PHÍA DƯỚI.",
        "cf": "卡 (kǎ – \"thẻ\")",
        "w": "下午 / 下面"
      },
      {
        "c": "午",
        "p": "wǔ",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "ノ→一→十(biến thể)",
        "rad": "十 (thập, biến thể)",
        "mean": "buổi trưa",
        "tip": "Hình cái chày giã gạo lúc giữa trưa → BUỔI TRƯA.",
        "cf": "牛 (niú – \"con trâu\")",
        "w": "下午 / 中午"
      }
    ],
    "colloFull": [
      {
        "zh": "下午去",
        "py": "xiàwǔ qù",
        "vn": "chiều đi"
      },
      {
        "zh": "今天下午",
        "py": "jīntiān xiàwǔ",
        "vn": "chiều nay"
      },
      {
        "zh": "明天下午",
        "py": "míngtiān xiàwǔ",
        "vn": "chiều mai"
      },
      {
        "zh": "下午看书",
        "py": "xiàwǔ kàn shū",
        "vn": "chiều đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "ngày + 下午",
        "m": "Ghép với 今天, 明天, 昨天: 今天下午"
      },
      {
        "s": "下 + 午",
        "m": "Sau (下) buổi trưa (午)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều mai tôi đi cửa hàng.",
        "answer": "明天下午我去商店。",
        "answerPy": "Míngtiān xiàwǔ wǒ qù shāngdiàn.",
        "note": "明天下午 — chiều mai.",
        "pair": "……下午……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn có đi học không?",
        "answer": "今天下午你去学校吗？",
        "answerPy": "Jīntiān xiàwǔ nǐ qù xuéxiào ma?",
        "note": "今天下午 đứng đầu câu.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "商店",
    "py": "shāngdiàn",
    "pos": "Danh từ",
    "vn": "cửa hàng, tiệm",
    "hv": "thương điếm",
    "em": "🏪",
    "lesson": 2,
    "ex_zh": "下午我想去商店。",
    "ex_py": "Xiàwǔ wǒ xiǎng qù shāngdiàn.",
    "ex_vn": "Chiều nay mình muốn đến cửa hàng.",
    "exList": [
      {
        "zh": "下午我想去商店。",
        "py": "Xiàwǔ wǒ xiǎng qù shāngdiàn.",
        "vn": "Chiều nay mình muốn đến cửa hàng."
      }
    ],
    "hanzi": [
      {
        "c": "商",
        "p": "shāng",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "立(lập) trên → 冏(biến thể) dưới",
        "rad": "冂 (biến thể)",
        "mean": "buôn bán, thương mại",
        "tip": "Người đứng 立 tính toán trao đổi hàng hoá → THƯƠNG MẠI, BUÔN BÁN.",
        "cf": "裔 (yì – \"hậu duệ\")",
        "w": "商店"
      },
      {
        "c": "店",
        "p": "diàn",
        "type": "半包围结构 · Bán bao vây",
        "st": 8,
        "ord": "广(nghiễm) ngoài → 占(chiếm) trong",
        "rad": "广 (nghiễm – mái hiên)",
        "mean": "cửa hàng, tiệm",
        "tip": "广(mái nhà lớn) + 占(bày bán) → nơi bày bán hàng hoá = CỬA HÀNG.",
        "cf": "点 (diǎn – \"điểm, giờ\")",
        "w": "商店"
      }
    ],
    "colloFull": [
      {
        "zh": "去商店",
        "py": "qù shāngdiàn",
        "vn": "đi cửa hàng"
      },
      {
        "zh": "商店的书",
        "py": "shāngdiàn de shū",
        "vn": "sách của cửa hàng"
      },
      {
        "zh": "这个商店",
        "py": "zhège shāngdiàn",
        "vn": "cửa hàng này"
      },
      {
        "zh": "明天去商店",
        "py": "míngtiān qù shāngdiàn",
        "vn": "mai đi cửa hàng"
      }
    ],
    "patterns": [
      {
        "s": "去 + 商店",
        "m": "Đi cửa hàng"
      },
      {
        "s": "商 + 店",
        "m": "Tiệm (店) buôn bán (商)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa hàng này rất lớn.",
        "answer": "这个商店很大。",
        "answerPy": "Zhège shāngdiàn hěn dà.",
        "note": "这个 + danh từ — cái này.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi muốn đi cửa hàng mua sách.",
        "answer": "今天下午我想去商店买书。",
        "answerPy": "Jīntiān xiàwǔ wǒ xiǎng qù shāngdiàn mǎi shū.",
        "note": "Hai động từ nối nhau: 去商店买书.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "买",
    "py": "mǎi",
    "pos": "Động từ",
    "vn": "mua",
    "hv": "mãi",
    "em": "🛒",
    "lesson": 2,
    "ex_zh": "你想买什么？",
    "ex_py": "Nǐ xiǎng mǎi shénme?",
    "ex_vn": "Bạn muốn mua gì vậy?",
    "exList": [
      {
        "zh": "你想买什么？",
        "py": "Nǐ xiǎng mǎi shénme?",
        "vn": "Bạn muốn mua gì vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "买",
        "p": "mǎi",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "一→フ→大(biến thể)",
        "rad": "大 (đại, biến thể)",
        "mean": "mua",
        "tip": "Hình dáng cầm vật phẩm trao đổi → MUA.",
        "cf": "卖 (mài – \"bán\", thêm nét trên đầu\")",
        "w": "买东西 / 买杯子"
      }
    ],
    "colloFull": [
      {
        "zh": "买书",
        "py": "mǎi shū",
        "vn": "mua sách"
      },
      {
        "zh": "买茶",
        "py": "mǎi chá",
        "vn": "mua trà"
      },
      {
        "zh": "想买",
        "py": "xiǎng mǎi",
        "vn": "muốn mua"
      },
      {
        "zh": "买什么",
        "py": "mǎi shénme",
        "vn": "mua gì"
      }
    ],
    "patterns": [
      {
        "s": "买 + danh từ",
        "m": "Mua cái gì: 买书"
      },
      {
        "s": "买 (mǎi, mua) ≠ 卖 (mài, bán) — chỉ khác một nét ở trên"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một cái cốc.",
        "answer": "我想买一个杯子。",
        "answerPy": "Wǒ xiǎng mǎi yí ge bēizi.",
        "note": "Số + lượng từ + danh từ: 一个杯子.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn mua gì?",
        "answer": "你想买什么？",
        "answerPy": "Nǐ xiǎng mǎi shénme?",
        "note": "买什么 — mua cái gì.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "个",
    "py": "gè",
    "pos": "Lượng từ",
    "vn": "cái, chiếc (lượng từ dùng chung)",
    "hv": "cá",
    "em": "🔘",
    "lesson": 2,
    "ex_zh": "我想买一个杯子。",
    "ex_py": "Wǒ xiǎng mǎi yí ge bēizi.",
    "ex_vn": "Mình muốn mua một cái ly.",
    "exList": [
      {
        "zh": "我想买一个杯子。",
        "py": "Wǒ xiǎng mǎi yí ge bēizi.",
        "vn": "Mình muốn mua một cái ly."
      }
    ],
    "hanzi": [
      {
        "c": "个",
        "p": "gè",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丿→丨→㇏",
        "rad": "人 (nhân, biến thể)",
        "mean": "cái, chiếc",
        "tip": "Hình đơn giản một cá thể đứng riêng lẻ → lượng từ dùng CHUNG cho hầu hết danh từ.",
        "cf": "介 (jiè – \"giới thiệu\")",
        "w": "一个 / 这个 / 那个"
      }
    ],
    "colloFull": [
      {
        "zh": "一个",
        "py": "yí gè",
        "vn": "một cái"
      },
      {
        "zh": "几个",
        "py": "jǐ gè",
        "vn": "mấy cái"
      },
      {
        "zh": "这个",
        "py": "zhège",
        "vn": "cái này"
      },
      {
        "zh": "那个杯子",
        "py": "nàge bēizi",
        "vn": "cái cốc kia"
      }
    ],
    "patterns": [
      {
        "s": "số / chỉ định + 个 + danh từ",
        "m": "Lượng từ dùng được nhiều nhất: 一个杯子"
      },
      {
        "s": "Không nói 一杯子 — giữa số và danh từ BẮT BUỘC có lượng từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có một cái cốc.",
        "answer": "我有一个杯子。",
        "answerPy": "Wǒ yǒu yí ge bēizi.",
        "note": "Giữa số và danh từ bắt buộc có lượng từ.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn mua mấy cái?",
        "answer": "你想买几个？",
        "answerPy": "Nǐ xiǎng mǎi jǐ ge?",
        "note": "几 luôn đi kèm lượng từ.",
        "pair": "几个？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "杯子",
    "py": "bēizi",
    "pos": "Danh từ",
    "vn": "cốc, ly, tách",
    "hv": "bôi tử",
    "em": "☕",
    "lesson": 2,
    "ex_zh": "我想买一个杯子。",
    "ex_py": "Wǒ xiǎng mǎi yí ge bēizi.",
    "ex_vn": "Mình muốn mua một cái ly.",
    "exList": [
      {
        "zh": "我想买一个杯子。",
        "py": "Wǒ xiǎng mǎi yí ge bēizi.",
        "vn": "Mình muốn mua một cái ly."
      }
    ],
    "hanzi": [
      {
        "c": "杯",
        "p": "bēi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "木(mộc) trái → 不(bất) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "cốc, ly, tách",
        "tip": "木(gỗ, vật liệu làm cốc thời xưa) + 不(mượn âm) → CỐC, LY.",
        "cf": "坏 (huài – \"hỏng\")",
        "w": "杯子 / 一杯茶"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "了→一",
        "rad": "子 (tử – tự thành bộ)",
        "mean": "con; hậu tố danh từ",
        "tip": "Hình đứa trẻ mới sinh, tay chân còn quấn tã → CON; dùng làm hậu tố cho nhiều danh từ (杯子, 椅子...).",
        "cf": "孑 (jié – \"cô độc\")",
        "w": "杯子 / 儿子"
      }
    ],
    "colloFull": [
      {
        "zh": "一个杯子",
        "py": "yí gè bēizi",
        "vn": "một cái cốc"
      },
      {
        "zh": "买杯子",
        "py": "mǎi bēizi",
        "vn": "mua cốc"
      },
      {
        "zh": "这个杯子",
        "py": "zhège bēizi",
        "vn": "cái cốc này"
      },
      {
        "zh": "多少钱一个杯子",
        "py": "duōshao qián yí gè bēizi",
        "vn": "cái cốc bao nhiêu tiền"
      }
    ],
    "patterns": [
      {
        "s": "一 + 个 + 杯子",
        "m": "Một cái cốc — lượng từ của 杯子 là 个"
      },
      {
        "s": "杯 + 子",
        "m": "子 ở đây là đuôi từ, đọc nhẹ: bēizi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái cốc này bao nhiêu tiền?",
        "answer": "这个杯子多少钱？",
        "answerPy": "Zhège bēizi duōshao qián?",
        "note": "Khung hỏi giá quen thuộc nhất.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái cốc kia là của thầy.",
        "answer": "那个杯子是老师的。",
        "answerPy": "Nàge bēizi shì lǎoshī de.",
        "note": "老师的 — của thầy, lược bỏ danh từ phía sau.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 11,
    "zh": "这",
    "py": "zhè",
    "pos": "Đại từ",
    "vn": "đây, này",
    "hv": "giá",
    "em": "👇",
    "lesson": 3,
    "ex_zh": "这个杯子多少钱？",
    "ex_py": "Zhège bēizi duōshao qián?",
    "ex_vn": "Cái ly này bao nhiêu tiền?",
    "exList": [
      {
        "zh": "这个杯子多少钱？",
        "py": "Zhège bēizi duōshao qián?",
        "vn": "Cái ly này bao nhiêu tiền?"
      }
    ],
    "hanzi": [
      {
        "c": "这",
        "p": "zhè",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "文(biến thể) → 辶(sước) bao ngoài",
        "rad": "辶 (sước – đi)",
        "mean": "này, đây",
        "tip": "辶(đi tới gần) → chỉ vật/việc GẦN người nói = NÀY, ĐÂY.",
        "cf": "达 (dá – \"đạt tới\")",
        "w": "这个 / 这是"
      }
    ],
    "colloFull": [
      {
        "zh": "这个",
        "py": "zhège",
        "vn": "cái này"
      },
      {
        "zh": "这是",
        "py": "zhè shì",
        "vn": "đây là"
      },
      {
        "zh": "这个杯子",
        "py": "zhège bēizi",
        "vn": "cái cốc này"
      },
      {
        "zh": "这个商店",
        "py": "zhège shāngdiàn",
        "vn": "cửa hàng này"
      }
    ],
    "patterns": [
      {
        "s": "这 + 个 + danh từ",
        "m": "Cái này — giữa 这 và danh từ phải có lượng từ"
      },
      {
        "s": "这 (gần) ↔ 那 (xa) — cặp từ chỉ định cơ bản"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đây là sách tiếng Trung của tôi.",
        "answer": "这是我的汉语书。",
        "answerPy": "Zhè shì wǒ de Hànyǔ shū.",
        "note": "这是 — đây là.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái này bao nhiêu tiền?",
        "answer": "这个多少钱？",
        "answerPy": "Zhège duōshao qián?",
        "note": "这个 dùng khi không nhắc lại tên đồ vật.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 12,
    "zh": "多少",
    "py": "duōshao",
    "pos": "Đại từ",
    "vn": "bao nhiêu (hỏi số lượng thường lớn hơn 10)",
    "hv": "đa thiểu",
    "em": "❔",
    "lesson": 3,
    "ex_zh": "这个杯子多少钱？",
    "ex_py": "Zhège bēizi duōshao qián?",
    "ex_vn": "Cái ly này bao nhiêu tiền?",
    "exList": [
      {
        "zh": "这个杯子多少钱？",
        "py": "Zhège bēizi duōshao qián?",
        "vn": "Cái ly này bao nhiêu tiền?"
      }
    ],
    "hanzi": [
      {
        "c": "少",
        "p": "shǎo",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "小(biến thể) → 丿",
        "rad": "小 (tiểu – nhỏ, biến thể)",
        "mean": "ít",
        "tip": "小(nhỏ) thêm một nét phẩy → càng NHỎ, ÍT hơn nữa; ghép với 多(nhiều) để hỏi SỐ LƯỢNG.",
        "cf": "小 (xiǎo – \"nhỏ\")",
        "w": "多少钱 / 多少人"
      }
    ],
    "colloFull": [
      {
        "zh": "多少钱",
        "py": "duōshao qián",
        "vn": "bao nhiêu tiền"
      },
      {
        "zh": "多少个",
        "py": "duōshao gè",
        "vn": "bao nhiêu cái"
      },
      {
        "zh": "多少人",
        "py": "duōshao rén",
        "vn": "bao nhiêu người"
      },
      {
        "zh": "多少书",
        "py": "duōshao shū",
        "vn": "bao nhiêu sách"
      }
    ],
    "patterns": [
      {
        "s": "多少 + danh từ",
        "m": "Hỏi số lượng BẤT KỲ, có thể rất lớn"
      },
      {
        "s": "多少 không cần lượng từ; 几 thì phải có: 多少人 ✓ / 几个人 ✓"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái cốc này bao nhiêu tiền?",
        "answer": "这个杯子多少钱？",
        "answerPy": "Zhège bēizi duōshao qián?",
        "note": "多少 hỏi số lượng bất kỳ.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Trường bạn có bao nhiêu người?",
        "answer": "你的学校有多少人？",
        "answerPy": "Nǐ de xuéxiào yǒu duōshao rén?",
        "note": "多少 không cần lượng từ phía sau.",
        "pair": "多少 + N？"
      }
    ]
  },
  {
    "n": 13,
    "zh": "钱",
    "py": "qián",
    "pos": "Danh từ",
    "vn": "tiền",
    "hv": "tiền",
    "em": "💰",
    "lesson": 3,
    "ex_zh": "这个杯子多少钱？",
    "ex_py": "Zhège bēizi duōshao qián?",
    "ex_vn": "Cái ly này bao nhiêu tiền?",
    "exList": [
      {
        "zh": "这个杯子多少钱？",
        "py": "Zhège bēizi duōshao qián?",
        "vn": "Cái ly này bao nhiêu tiền?"
      }
    ],
    "hanzi": [
      {
        "c": "钱",
        "p": "qián",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "钅(kim) trái → 戋(biến thể) phải",
        "rad": "钅 (kim – kim loại)",
        "mean": "tiền",
        "tip": "钅(kim loại, đúc tiền xu) → TIỀN.",
        "cf": "浅 (qiǎn – \"nông, cạn\")",
        "w": "多少钱 / 花钱"
      }
    ],
    "colloFull": [
      {
        "zh": "多少钱",
        "py": "duōshao qián",
        "vn": "bao nhiêu tiền"
      },
      {
        "zh": "十块钱",
        "py": "shí kuài qián",
        "vn": "mười đồng"
      },
      {
        "zh": "有钱",
        "py": "yǒu qián",
        "vn": "có tiền"
      },
      {
        "zh": "几块钱",
        "py": "jǐ kuài qián",
        "vn": "mấy đồng"
      }
    ],
    "patterns": [
      {
        "s": "多少 + 钱",
        "m": "Hỏi giá: 这个多少钱？"
      },
      {
        "s": "钱 có bộ 钅 (kim loại) — tiền xưa đúc bằng kim loại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái này mười đồng.",
        "answer": "这个十块钱。",
        "answerPy": "Zhège shí kuài qián.",
        "note": "Nói giá thì không cần động từ 是.",
        "pair": "……块钱"
      },
      {
        "promptLang": "vi",
        "prompt": "Sách tiếng Trung bao nhiêu tiền?",
        "answer": "汉语书多少钱？",
        "answerPy": "Hànyǔ shū duōshao qián?",
        "note": "Đưa tên đồ vật lên đầu câu.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 14,
    "zh": "块",
    "py": "kuài",
    "pos": "Lượng từ",
    "vn": "đồng (đơn vị tiền tệ khẩu ngữ)",
    "hv": "khối",
    "em": "💵",
    "lesson": 3,
    "ex_zh": "28块。",
    "ex_py": "Èrshíbā kuài.",
    "ex_vn": "28 đồng.",
    "exList": [
      {
        "zh": "28块。",
        "py": "Èrshíbā kuài.",
        "vn": "28 đồng."
      }
    ],
    "hanzi": [
      {
        "c": "块",
        "p": "kuài",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "土(thổ) trái → 夬(quyết) phải",
        "rad": "土 (thổ – đất)",
        "mean": "đồng (tiền), cục, miếng",
        "tip": "土(đất nặn thành cục) → mở rộng dùng để đếm ĐỒNG TIỀN, MIẾNG.",
        "cf": "快 (kuài – \"nhanh\", cùng phần 夬\")",
        "w": "28块 / 一块钱"
      }
    ],
    "colloFull": [
      {
        "zh": "五块",
        "py": "wǔ kuài",
        "vn": "năm đồng"
      },
      {
        "zh": "十块钱",
        "py": "shí kuài qián",
        "vn": "mười đồng"
      },
      {
        "zh": "几块钱",
        "py": "jǐ kuài qián",
        "vn": "mấy đồng"
      },
      {
        "zh": "一块",
        "py": "yí kuài",
        "vn": "một đồng"
      }
    ],
    "patterns": [
      {
        "s": "số + 块 + (钱)",
        "m": "Đơn vị tiền trong khẩu ngữ: 十块钱"
      },
      {
        "s": "块 dùng khi nói; văn viết dùng 元"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái cốc này năm đồng.",
        "answer": "这个杯子五块钱。",
        "answerPy": "Zhège bēizi wǔ kuài qián.",
        "note": "块 là đơn vị tiền dùng khi nói.",
        "pair": "……块钱"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái kia mấy đồng?",
        "answer": "那个几块钱？",
        "answerPy": "Nàge jǐ kuài qián?",
        "note": "几块钱 dùng khi đoán giá rẻ, dưới mười đồng.",
        "pair": "几块钱？"
      }
    ]
  },
  {
    "n": 15,
    "zh": "那",
    "py": "nà",
    "pos": "Đại từ",
    "vn": "kia, đó",
    "hv": "na",
    "em": "👉",
    "lesson": 3,
    "ex_zh": "那个杯子18块钱。",
    "ex_py": "Nàge bēizi shíbā kuài qián.",
    "ex_vn": "Ly đó 18 đồng.",
    "exList": [
      {
        "zh": "那个杯子18块钱。",
        "py": "Nàge bēizi shíbā kuài qián.",
        "vn": "Ly đó 18 đồng."
      }
    ],
    "hanzi": [
      {
        "c": "那",
        "p": "nà",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "刀(biến thể) → 阝(ấp) phải",
        "rad": "阝 (ấp – thành ấp, phần phải)",
        "mean": "kia, đó",
        "tip": "阝(vùng đất, thành ấp ở xa) → chỉ vật/việc XA người nói = KIA, ĐÓ.",
        "cf": "哪 (nǎ – \"nào\", đã học Bài 4\")",
        "w": "那个 / 那是"
      }
    ],
    "colloFull": [
      {
        "zh": "那个",
        "py": "nàge",
        "vn": "cái kia"
      },
      {
        "zh": "那是",
        "py": "nà shì",
        "vn": "kia là"
      },
      {
        "zh": "那个杯子",
        "py": "nàge bēizi",
        "vn": "cái cốc kia"
      },
      {
        "zh": "那个商店",
        "py": "nàge shāngdiàn",
        "vn": "cửa hàng kia"
      }
    ],
    "patterns": [
      {
        "s": "那 + 个 + danh từ",
        "m": "Cái kia — vật ở xa người nói"
      },
      {
        "s": "那 (nà, kia) ≠ 哪 (nǎ, nào) — 哪 có thêm bộ 口 bên trái"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Kia là cửa hàng của thầy.",
        "answer": "那是老师的商店。",
        "answerPy": "Nà shì lǎoshī de shāngdiàn.",
        "note": "那是 — kia là, chỉ vật ở xa.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua cái cốc kia.",
        "answer": "我想买那个杯子。",
        "answerPy": "Wǒ xiǎng mǎi nàge bēizi.",
        "note": "那 chỉ vật xa, 这 chỉ vật gần.",
        "pair": "想 + V"
      }
    ]
  }
];

const wuData = [
  {img:'🍵',label:'茶',py:'chá',letter:'A'},
  {img:'🍚',label:'米饭',py:'mǐfàn',letter:'B'},
  {img:'🏪',label:'商店',py:'shāngdiàn',letter:'C'},
  {img:'☕',label:'杯子',py:'bēizi',letter:'D'},
  {img:'💰',label:'钱',py:'qián',letter:'E'},
  {img:'🥤',label:'喝',py:'hē',letter:'F'},
];

var dialogData = [
  {scene:'Ở quán ăn · Gọi đồ uống, món ăn',
   lines:[
     {sp:0,zh:'你想喝什么？',py:'Nǐ xiǎng hē shénme?',vn:'Cô muốn uống gì?'},
     {sp:1,zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
     {sp:0,zh:'你想吃什么？',py:'Nǐ xiǎng chī shénme?',vn:'Cô muốn dùng món gì?'},
     {sp:1,zh:'我想吃米饭。',py:'Wǒ xiǎng chī mǐfàn.',vn:'Tôi muốn ăn cơm.'},
   ]},
  {scene:'Trong phòng khách · Kế hoạch buổi chiều',
   lines:[
     {sp:0,zh:'下午你想做什么？',py:'Xiàwǔ nǐ xiǎng zuò shénme?',vn:'Buổi chiều bạn muốn làm gì?'},
     {sp:1,zh:'下午我想去商店。',py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',vn:'Mình muốn đến cửa hàng.'},
     {sp:0,zh:'你想买什么？',py:'Nǐ xiǎng mǎi shénme?',vn:'Bạn muốn mua gì vậy?'},
     {sp:1,zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
   ]},
  {scene:'Ở cửa hàng · Hỏi giá',
   lines:[
     {sp:0,zh:'你好！这个杯子多少钱？',py:'Nǐ hǎo! Zhège bēizi duōshao qián?',vn:'Chào cô! Cái ly này bao nhiêu tiền?'},
     {sp:1,zh:'28块。',py:'Èrshíbā kuài.',vn:'28 đồng.'},
     {sp:0,zh:'那个杯子多少钱？',py:'Nàge bēizi duōshao qián?',vn:'Còn cái ly đó?'},
     {sp:1,zh:'那个杯子18块钱。',py:'Nàge bēizi shíbā kuài qián.',vn:'Ly đó 18 đồng.'},
   ]},
];

// Điền từ — đổi đối tượng/giá so với bài khoá
var fillData = [
  {pre:'Bạn muốn gọi món uống ở quán: “我',blank:'想',post:'喝茶。”',hint:'(muốn)',ans:'想'},
  {pre:'Bạn hỏi ai đó muốn ăn gì: “你想',blank:'吃',post:'什么？”',hint:'(ăn)',ans:'吃'},
  {pre:'Bạn hỏi giá của cái ly: “这个杯子',blank:'多少',post:'钱？”',hint:'(bao nhiêu — số lớn)',ans:'多少'},
  {pre:'Bạn nói giá mười lăm đồng: “十五',blank:'块',post:'。”',hint:'(đồng — đơn vị tiền khẩu ngữ)',ans:'块'},
  {pre:'Bạn hỏi buổi chiều ai đó định làm gì: “',blank:'下午',post:'你想做什么？”',hint:'(buổi chiều)',ans:'下午'},
  {pre:'Bạn nói mình muốn đi mua sắm: “我想去',blank:'商店',post:'。”',hint:'(cửa hàng)',ans:'商店'},
  {pre:'Chỉ vào vật gần mình: “',blank:'这',post:'是我的杯子。”',hint:'(này, đây)',ans:'这'},
  {pre:'Chỉ vào vật xa mình: “',blank:'那',post:'是你的杯子。”',hint:'(kia, đó)',ans:'那'},
];

// Sắp xếp — đổi giá/đồ vật so với bài khoá
var sortData = [
  {words:['你','想','喝','什么','？'],ans:'你想喝什么？',audio:'你想喝什么？'},
  {words:['我','想','吃','米饭','。'],ans:'我想吃米饭。',audio:'我想吃米饭。'},
  {words:['下午','我','想','去','商店','。'],ans:'下午我想去商店。',audio:'下午我想去商店。'},
  {words:['我','想','买','一','个','杯子','。'],ans:'我想买一个杯子。',audio:'我想买一个杯子。'},
  {words:['这个','杯子','多少','钱','？'],ans:'这个杯子多少钱？',audio:'这个杯子多少钱？'},
  {words:['那个','杯子','十五','块','钱','。'],ans:'那个杯子十五块钱。',audio:'那个杯子十五块钱。'},
];

var matchData = [
  {left:'你想喝什么？',right:'我想喝茶。'},
  {left:'下午你想做什么？',right:'下午我想去商店。'},
  {left:'你想买什么？',right:'我想买一个杯子。'},
  {left:'这个杯子多少钱？',right:'28块。'},
  {left:'那个杯子多少钱？',right:'那个杯子18块钱。'},
];

// Trắc nghiệm — trọng tâm 想/多少/这-那, không audio
var mcData = [
  {q:'我＿＿喝茶。(muốn)',opts:['想','会','是','有'],ans:0},
  {q:'这个杯子＿＿钱？(hỏi số lớn hơn 10)',opts:['多少','几','怎么','什么'],ans:0},
  {q:'"个" là loại từ nào?',opts:['lượng từ dùng chung','danh từ chỉ người','động từ','tính từ'],ans:0},
  {q:'"这" và "那" khác nhau thế nào?',opts:['这 chỉ vật gần, 那 chỉ vật xa','这 chỉ vật xa, 那 chỉ vật gần','cả hai đều chỉ vật gần','cả hai đều chỉ vật xa'],ans:0},
  {q:'Đơn vị tiền tệ khẩu ngữ (nói) là gì?',opts:['块','元','钱','毛'],ans:0},
  {q:'"米饭" nghĩa là gì?',opts:['cơm','trà','nước','bánh'],ans:0},
  {q:'"商店" nghĩa là gì?',opts:['cửa hàng','trường học','ngân hàng','thư viện'],ans:0},
  {q:'"买" nghĩa là gì?',opts:['mua','bán','cho','tặng'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi giá?',opts:['这个杯子多少钱？','这个杯子几钱？','这个杯子多钱？','这个杯子怎么钱？'],ans:0},
  {q:'"喝" nghĩa là gì?',opts:['uống','ăn','nói','đọc'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你想喝什么？',py:'Nǐ xiǎng hē shénme?',vn:'Cô muốn uống gì?'},
      {zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
      {zh:'下午我想去商店。',py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',vn:'Chiều nay mình muốn đến cửa hàng.'},
      {zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
      {zh:'这个杯子多少钱？',py:'Zhège bēizi duōshao qián?',vn:'Cái ly này bao nhiêu tiền?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我想买＿＿。',frame_py:'Wǒ xiǎng mǎi ___.',vn:'Tôi muốn mua ＿＿.',options:['一个杯子','一本书'],samples:['我想买一个杯子。','我想买一本书。']},
      {frame:'这个＿＿多少钱？',frame_py:'Zhège ___ duōshao qián?',vn:'Cái ＿＿ này bao nhiêu tiền?',options:['杯子','书'],samples:['这个杯子多少钱？','这本书多少钱？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'☕ Tình huống 1 — Gọi đồ uống ở quán',
       guide:'Bạn đang ở quán ăn, nhân viên hỏi bạn muốn dùng gì.',
       structure:['你想喝什么？','我想喝＿＿。'],
       sample:'你想喝什么？我想喝茶。',
       sample_vn:'Bạn muốn uống gì? Tôi muốn uống trà.',
       note:'想 dùng để diễn tả MONG MUỐN, nguyện vọng cá nhân — nhẹ nhàng hơn 要 (sẽ học sau) vốn mang tính quyết định dứt khoát hơn.'},
      {role:'🛍️ Tình huống 2 — Lên kế hoạch mua sắm buổi chiều',
       guide:'Bạn định đi mua sắm buổi chiều và nói cho bạn cùng phòng biết kế hoạch của mình.',
       structure:['下午你想做什么？','下午我想去商店买＿＿。'],
       sample:'下午你想做什么？下午我想去商店买杯子。',
       sample_vn:'Buổi chiều bạn muốn làm gì? Chiều nay mình muốn đến cửa hàng mua ly.',
       note:'Có thể ghép nhiều động từ liên tiếp trong một câu (去商店买杯子) để diễn tả một CHUỖI HÀNH ĐỘNG có mục đích, giống câu liên động đã học ở Bài 7.'},
      {role:'💰 Tình huống 3 — Hỏi giá khi mua sắm',
       guide:'Bạn đang ở cửa hàng, muốn hỏi giá của hai món đồ khác nhau để so sánh.',
       structure:['这个杯子多少钱？','那个＿＿多少钱？'],
       sample:'这个杯子多少钱？那个杯子多少钱？',
       sample_vn:'Cái ly này bao nhiêu tiền? Cái ly kia bao nhiêu tiền?',
       note:'多少 dùng khi hỏi số lượng LỚN HƠN 10 (đặc biệt là tiền) — khác với 几 chỉ dùng cho số nhỏ hơn 10 đã học ở Bài 5.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 8 + ôn lại từ bài 1-7
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi muốn uống trà.', zh:'我想喝茶。', py:'Wǒ xiǎng hē chá.'},
  {vi:'Cái cốc này bao nhiêu tiền?', zh:'这个杯子多少钱？', py:'Zhège bēizi duōshao qián?'},
  {vi:'Chiều nay tôi muốn đi cửa hàng mua cốc.', zh:'下午我想去商店买杯子。', py:'Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi bēizi.'},
  {vi:'Năm đồng.', zh:'五块钱。', py:'Wǔ kuài qián.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi muốn uống trà, tôi muốn ăn cơm.', zh:'我想喝茶，我想吃米饭。', py:'Wǒ xiǎng hē chá, wǒ xiǎng chī mǐfàn.'},
  {vi:'Cái cốc này bao nhiêu tiền? Năm đồng.', zh:'这个杯子多少钱？五块钱。', py:'Zhège bēizi duōshao qián? Wǔ kuài qián.'},
  {vi:'Chiều nay tôi muốn đi cửa hàng mua cơm.', zh:'下午我想去商店买米饭。', py:'Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi mǐfàn.'},
  {vi:'Nhà tôi có ba cái cốc.', zh:'我家有三个杯子。', py:'Wǒ jiā yǒu sān ge bēizi.'},
];
