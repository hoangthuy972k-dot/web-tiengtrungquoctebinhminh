// ══════════════════════════════════════════
// DATA — HSK1 Bài 9: 你儿子在哪儿工作?
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "小",
    "py": "xiǎo",
    "pos": "Tính từ",
    "vn": "nhỏ, bé",
    "hv": "tiểu",
    "em": "🔹",
    "lesson": 1,
    "ex_zh": "小猫在哪儿？",
    "ex_py": "Xiǎo māo zài nǎr?",
    "ex_vn": "Con mèo đâu rồi?",
    "exList": [
      {
        "zh": "小猫在哪儿？",
        "py": "Xiǎo māo zài nǎr?",
        "vn": "Con mèo đâu rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "小",
        "p": "xiǎo",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "丨→𠂇→丶",
        "rad": "小 (tiểu – tự thành bộ)",
        "mean": "nhỏ, bé",
        "tip": "Hình ba hạt cát nhỏ li ti → NHỎ, BÉ.",
        "cf": "少 (shǎo – \"ít\", đã học Bài 8\")",
        "w": "小猫 / 小狗"
      }
    ],
    "colloFull": [
      {
        "zh": "小猫",
        "py": "xiǎo māo",
        "vn": "mèo con"
      },
      {
        "zh": "小狗",
        "py": "xiǎo gǒu",
        "vn": "chó con"
      },
      {
        "zh": "很小",
        "py": "hěn xiǎo",
        "vn": "rất nhỏ"
      },
      {
        "zh": "小杯子",
        "py": "xiǎo bēizi",
        "vn": "cái cốc nhỏ"
      }
    ],
    "patterns": [
      {
        "s": "小 + danh từ",
        "m": "Nhỏ, bé: 小猫 · 小狗"
      },
      {
        "s": "小 ↔ 大",
        "m": "Nhỏ ↔ lớn — cặp tính từ đối nhau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con mèo của tôi rất nhỏ.",
        "answer": "我的小猫很小。",
        "answerPy": "Wǒ de xiǎo māo hěn xiǎo.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một cái cốc nhỏ.",
        "answer": "我想买一个小杯子。",
        "answerPy": "Wǒ xiǎng mǎi yí ge xiǎo bēizi.",
        "note": "小 đứng trước danh từ làm định ngữ.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "猫",
    "py": "māo",
    "pos": "Danh từ",
    "vn": "con mèo",
    "hv": "miêu",
    "em": "🐱",
    "lesson": 1,
    "ex_zh": "小猫在那儿。",
    "ex_py": "Xiǎo māo zài nàr.",
    "ex_vn": "Con mèo ở đó kìa.",
    "exList": [
      {
        "zh": "小猫在那儿。",
        "py": "Xiǎo māo zài nàr.",
        "vn": "Con mèo ở đó kìa."
      }
    ],
    "hanzi": [
      {
        "c": "猫",
        "p": "māo",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "犭(khuyển) trái → 苗(miêu) phải",
        "rad": "犭 (khuyển – thú vật, biến thể)",
        "mean": "con mèo",
        "tip": "犭(loài thú) + 苗(mượn âm) → CON MÈO.",
        "cf": "描 (miáo – \"miêu tả\")",
        "w": "小猫"
      }
    ],
    "colloFull": [
      {
        "zh": "小猫",
        "py": "xiǎo māo",
        "vn": "mèo con"
      },
      {
        "zh": "我的猫",
        "py": "wǒ de māo",
        "vn": "con mèo của tôi"
      },
      {
        "zh": "看猫",
        "py": "kàn māo",
        "vn": "xem mèo"
      },
      {
        "zh": "她的小猫",
        "py": "tā de xiǎo māo",
        "vn": "mèo con của cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "小 + 猫",
        "m": "Mèo con — 小 đứng trước"
      },
      {
        "s": "猫 có bộ 犭 (thú) bên trái, giống chữ 狗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con mèo của tôi đâu rồi?",
        "answer": "我的猫在哪儿？",
        "answerPy": "Wǒ de māo zài nǎr?",
        "note": "在哪儿 — ở đâu, câu hỏi vị trí.",
        "pair": "在哪儿？"
      },
      {
        "promptLang": "vi",
        "prompt": "Con mèo ở dưới ghế.",
        "answer": "猫在椅子下面。",
        "answerPy": "Māo zài yǐzi xiàmiàn.",
        "note": "在 ở đây là động từ, nghĩa là ở.",
        "pair": "在 + nơi chốn"
      }
    ]
  },
  {
    "n": 3,
    "zh": "在",
    "py": "zài",
    "pos": "Động từ",
    "vn": "ở (ở vị trí nào đó)",
    "hv": "tại",
    "em": "📍",
    "lesson": 1,
    "ex_zh": "小猫在哪儿？",
    "ex_py": "Xiǎo māo zài nǎr?",
    "ex_vn": "Con mèo đâu rồi?",
    "exList": [
      {
        "zh": "小猫在哪儿？",
        "py": "Xiǎo māo zài nǎr?",
        "vn": "Con mèo đâu rồi?"
      },
      {
        "zh": "我朋友在学校。",
        "py": "Wǒ péngyou zài xuéxiào.",
        "vn": "Bạn tôi ở trường."
      }
    ],
    "hanzi": [
      {
        "c": "在",
        "p": "zài",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "ナ(biến thể) → 土(thổ) trong",
        "rad": "土 (thổ – đất)",
        "mean": "ở (tại vị trí nào đó)",
        "tip": "ナ(che chắn) + 土(đất, nơi chốn) → đang tồn tại Ở một vị trí.",
        "cf": "存 (cún – \"tồn tại\", nghĩa gần giống\")",
        "w": "小猫在哪儿 / 我在学校"
      }
    ],
    "colloFull": [
      {
        "zh": "在学校",
        "py": "zài xuéxiào",
        "vn": "ở trường"
      },
      {
        "zh": "在家",
        "py": "zài jiā",
        "vn": "ở nhà"
      },
      {
        "zh": "在商店",
        "py": "zài shāngdiàn",
        "vn": "ở cửa hàng"
      },
      {
        "zh": "在哪儿",
        "py": "zài nǎr",
        "vn": "ở đâu"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 在 + nơi chốn",
        "m": "在 làm ĐỘNG TỪ: 猫在椅子下面"
      },
      {
        "s": "Sub + 在 + nơi chốn + động từ",
        "m": "在 làm GIỚI TỪ: 我在医院工作"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi làm việc ở bệnh viện.",
        "answer": "我爸爸在医院工作。",
        "answerPy": "Wǒ bàba zài yīyuàn gōngzuò.",
        "note": "Nơi chốn đứng TRƯỚC động từ, khác tiếng Việt.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay cô ấy ở nhà.",
        "answer": "今天她在家。",
        "answerPy": "Jīntiān tā zài jiā.",
        "note": "Không có động từ khác thì 在 tự làm vị ngữ.",
        "pair": "在 + nơi chốn"
      }
    ]
  },
  {
    "n": 4,
    "zh": "那儿",
    "py": "nàr",
    "pos": "Đại từ",
    "vn": "đằng kia, ở đó",
    "hv": "na nhi",
    "em": "📌",
    "lesson": 1,
    "ex_zh": "小猫在那儿。",
    "ex_py": "Xiǎo māo zài nàr.",
    "ex_vn": "Con mèo ở đó kìa.",
    "exList": [
      {
        "zh": "小猫在那儿。",
        "py": "Xiǎo māo zài nàr.",
        "vn": "Con mèo ở đó kìa."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "在那儿",
        "py": "zài nàr",
        "vn": "ở đằng kia"
      },
      {
        "zh": "去那儿",
        "py": "qù nàr",
        "vn": "đến đằng kia"
      },
      {
        "zh": "那儿的商店",
        "py": "nàr de shāngdiàn",
        "vn": "cửa hàng đằng kia"
      },
      {
        "zh": "那儿有",
        "py": "nàr yǒu",
        "vn": "đằng kia có"
      }
    ],
    "patterns": [
      {
        "s": "在 / 去 + 那儿",
        "m": "Ở, đi đằng kia"
      },
      {
        "s": "这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu) — bộ ba nơi chốn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa hàng ở đằng kia.",
        "answer": "商店在那儿。",
        "answerPy": "Shāngdiàn zài nàr.",
        "note": "那儿 chỉ nơi xa người nói.",
        "pair": "在 + nơi chốn"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi muốn đến đằng kia.",
        "answer": "今天下午我想去那儿。",
        "answerPy": "Jīntiān xiàwǔ wǒ xiǎng qù nàr.",
        "note": "去那儿 — đi đến chỗ kia.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "狗",
    "py": "gǒu",
    "pos": "Danh từ",
    "vn": "con chó",
    "hv": "cẩu",
    "em": "🐶",
    "lesson": 1,
    "ex_zh": "小狗在椅子下面。",
    "ex_py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
    "ex_vn": "Con chó ở dưới ghế dựa.",
    "exList": [
      {
        "zh": "小狗在椅子下面。",
        "py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
        "vn": "Con chó ở dưới ghế dựa."
      }
    ],
    "hanzi": [
      {
        "c": "狗",
        "p": "gǒu",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "犭(khuyển) trái → 句(cú) phải",
        "rad": "犭 (khuyển – thú vật, biến thể)",
        "mean": "con chó",
        "tip": "犭(loài thú) + 句(mượn âm) → CON CHÓ.",
        "cf": "苟 (gǒu – \"cẩu thả\", cùng phần 句\")",
        "w": "小狗"
      }
    ],
    "colloFull": [
      {
        "zh": "小狗",
        "py": "xiǎo gǒu",
        "vn": "chó con"
      },
      {
        "zh": "我的狗",
        "py": "wǒ de gǒu",
        "vn": "con chó của tôi"
      },
      {
        "zh": "看狗",
        "py": "kàn gǒu",
        "vn": "xem chó"
      },
      {
        "zh": "他的小狗",
        "py": "tā de xiǎo gǒu",
        "vn": "chó con của anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "小 + 狗",
        "m": "Chó con"
      },
      {
        "s": "狗 có bộ 犭 (thú) bên trái — chữ chỉ con vật hay có bộ này"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có chó con.",
        "answer": "我家有小狗。",
        "answerPy": "Wǒ jiā yǒu xiǎo gǒu.",
        "note": "小狗 — chó con.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con chó của bạn đâu?",
        "answer": "你的狗在哪儿？",
        "answerPy": "Nǐ de gǒu zài nǎr?",
        "note": "Câu có 哪儿 thì không thêm 吗.",
        "pair": "在哪儿？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "椅子",
    "py": "yǐzi",
    "pos": "Danh từ",
    "vn": "ghế dựa",
    "hv": "ỷ tử",
    "em": "🪑",
    "lesson": 1,
    "ex_zh": "小狗在椅子下面。",
    "ex_py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
    "ex_vn": "Con chó ở dưới ghế dựa.",
    "exList": [
      {
        "zh": "小狗在椅子下面。",
        "py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
        "vn": "Con chó ở dưới ghế dựa."
      }
    ],
    "hanzi": [
      {
        "c": "椅",
        "p": "yǐ",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "木(mộc) trái → 奇(kỳ) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "ghế tựa",
        "tip": "木(gỗ) + 奇(đặc biệt) → đồ gỗ đặc biệt để ngồi tựa lưng = GHẾ. (子 đã học ở Bài 8)",
        "cf": "倚 (yǐ – \"dựa vào\")",
        "w": "椅子"
      }
    ],
    "colloFull": [
      {
        "zh": "一个椅子",
        "py": "yí gè yǐzi",
        "vn": "một cái ghế"
      },
      {
        "zh": "买椅子",
        "py": "mǎi yǐzi",
        "vn": "mua ghế"
      },
      {
        "zh": "椅子下面",
        "py": "yǐzi xiàmiàn",
        "vn": "dưới ghế"
      },
      {
        "zh": "这个椅子",
        "py": "zhège yǐzi",
        "vn": "cái ghế này"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 椅子",
        "m": "Lượng từ của 椅子 là 个"
      },
      {
        "s": "椅 + 子",
        "m": "子 là đuôi từ đọc nhẹ, giống 杯子 · 儿子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con mèo ở dưới cái ghế này.",
        "answer": "猫在这个椅子下面。",
        "answerPy": "Māo zài zhège yǐzi xiàmiàn.",
        "note": "这个椅子下面 — dưới cái ghế này.",
        "pair": "在……下面"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua ba cái ghế.",
        "answer": "我想买三个椅子。",
        "answerPy": "Wǒ xiǎng mǎi sān ge yǐzi.",
        "note": "Số + 个 + danh từ.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "下面",
    "py": "xiàmiàn",
    "pos": "Danh từ",
    "vn": "bên dưới, phía dưới",
    "hv": "hạ diện",
    "em": "⬇️",
    "lesson": 2,
    "ex_zh": "小狗在椅子下面。",
    "ex_py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
    "ex_vn": "Con chó ở dưới ghế dựa.",
    "exList": [
      {
        "zh": "小狗在椅子下面。",
        "py": "Xiǎo gǒu zài yǐzi xiàmiàn.",
        "vn": "Con chó ở dưới ghế dựa."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Tượng hình",
        "st": 9,
        "ord": "一→丆→㡿(biến thể)",
        "rad": "面 (diện – tự thành bộ)",
        "mean": "mặt, phía, bên",
        "tip": "Hình khuôn mặt người cách điệu → MẶT, mở rộng chỉ PHÍA, BÊN (下面 = phía dưới). (下 đã học ở Bài 8)",
        "cf": "面 dễ nhầm 而 (ér – \"mà\")",
        "w": "下面 / 后面"
      }
    ],
    "colloFull": [
      {
        "zh": "椅子下面",
        "py": "yǐzi xiàmiàn",
        "vn": "dưới ghế"
      },
      {
        "zh": "书下面",
        "py": "shū xiàmiàn",
        "vn": "dưới quyển sách"
      },
      {
        "zh": "在下面",
        "py": "zài xiàmiàn",
        "vn": "ở phía dưới"
      },
      {
        "zh": "下面有",
        "py": "xiàmiàn yǒu",
        "vn": "phía dưới có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 下面",
        "m": "Từ chỉ vị trí đứng SAU danh từ — ngược với tiếng Việt"
      },
      {
        "s": "✗ 下面椅子 → ✓ 椅子下面"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sách của tôi ở dưới cái ghế.",
        "answer": "我的书在椅子下面。",
        "answerPy": "Wǒ de shū zài yǐzi xiàmiàn.",
        "note": "Từ chỉ vị trí đứng SAU danh từ.",
        "pair": "在……下面"
      },
      {
        "promptLang": "vi",
        "prompt": "Dưới ghế có gì?",
        "answer": "椅子下面有什么？",
        "answerPy": "Yǐzi xiàmiàn yǒu shénme?",
        "note": "Câu tồn tại: nơi chốn + 有 + vật.",
        "pair": "……有什么？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "在",
    "py": "zài",
    "pos": "Giới từ",
    "vn": "ở, tại (trước nơi chốn)",
    "hv": "tại",
    "em": "📍",
    "lesson": 2,
    "ex_zh": "我在学校工作。",
    "ex_py": "Wǒ zài xuéxiào gōngzuò.",
    "ex_vn": "Tôi làm việc ở trường học.",
    "exList": [
      {
        "zh": "我在学校工作。",
        "py": "Wǒ zài xuéxiào gōngzuò.",
        "vn": "Tôi làm việc ở trường học."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "在学校",
        "py": "zài xuéxiào",
        "vn": "ở trường"
      },
      {
        "zh": "在家",
        "py": "zài jiā",
        "vn": "ở nhà"
      },
      {
        "zh": "在商店",
        "py": "zài shāngdiàn",
        "vn": "ở cửa hàng"
      },
      {
        "zh": "在哪儿",
        "py": "zài nǎr",
        "vn": "ở đâu"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 在 + nơi chốn",
        "m": "在 làm ĐỘNG TỪ: 猫在椅子下面"
      },
      {
        "s": "Sub + 在 + nơi chốn + động từ",
        "m": "在 làm GIỚI TỪ: 我在医院工作"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi làm việc ở bệnh viện.",
        "answer": "我爸爸在医院工作。",
        "answerPy": "Wǒ bàba zài yīyuàn gōngzuò.",
        "note": "Nơi chốn đứng TRƯỚC động từ, khác tiếng Việt.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay cô ấy ở nhà.",
        "answer": "今天她在家。",
        "answerPy": "Jīntiān tā zài jiā.",
        "note": "Không có động từ khác thì 在 tự làm vị ngữ.",
        "pair": "在 + nơi chốn"
      }
    ]
  },
  {
    "n": 9,
    "zh": "哪儿",
    "py": "nǎr",
    "pos": "Đại từ",
    "vn": "ở đâu, chỗ nào",
    "hv": "na nhi",
    "em": "❓",
    "lesson": 2,
    "ex_zh": "你在哪儿工作？",
    "ex_py": "Nǐ zài nǎr gōngzuò?",
    "ex_vn": "Anh làm việc ở đâu?",
    "exList": [
      {
        "zh": "你在哪儿工作？",
        "py": "Nǐ zài nǎr gōngzuò?",
        "vn": "Anh làm việc ở đâu?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "在哪儿",
        "py": "zài nǎr",
        "vn": "ở đâu"
      },
      {
        "zh": "去哪儿",
        "py": "qù nǎr",
        "vn": "đi đâu"
      },
      {
        "zh": "哪儿的",
        "py": "nǎr de",
        "vn": "của nơi nào"
      },
      {
        "zh": "哪儿有",
        "py": "nǎr yǒu",
        "vn": "ở đâu có"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 在哪儿？",
        "m": "Hỏi vị trí: 你的猫在哪儿？"
      },
      {
        "s": "Câu đã có 哪儿 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn làm việc ở đâu?",
        "answer": "你在哪儿工作？",
        "answerPy": "Nǐ zài nǎr gōngzuò?",
        "note": "在哪儿 đứng trước động từ.",
        "pair": "在哪儿……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn đi đâu?",
        "answer": "今天下午你去哪儿？",
        "answerPy": "Jīntiān xiàwǔ nǐ qù nǎr?",
        "note": "去哪儿 — đi đâu.",
        "pair": "去哪儿？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "工作",
    "py": "gōngzuò",
    "pos": "Động từ / Danh từ",
    "vn": "làm việc; công việc",
    "hv": "công tác",
    "em": "💼",
    "lesson": 2,
    "ex_zh": "我在学校工作。",
    "ex_py": "Wǒ zài xuéxiào gōngzuò.",
    "ex_vn": "Tôi làm việc ở trường học.",
    "exList": [
      {
        "zh": "我在学校工作。",
        "py": "Wǒ zài xuéxiào gōngzuò.",
        "vn": "Tôi làm việc ở trường học."
      }
    ],
    "hanzi": [
      {
        "c": "工",
        "p": "gōng",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "一→丨→一",
        "rad": "工 (công – tự thành bộ)",
        "mean": "công việc, thợ",
        "tip": "Hình cái thước thợ/dụng cụ lao động → CÔNG VIỆC, LAO ĐỘNG.",
        "cf": "土 (tǔ – \"đất\")",
        "w": "工作"
      },
      {
        "c": "作",
        "p": "zuò",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 乍(sạ) phải",
        "rad": "亻 (nhân – người)",
        "mean": "làm",
        "tip": "亻(người) + 乍(vừa mới bắt đầu) → người bắt tay vào LÀM việc.",
        "cf": "做 (zuò – \"làm\", đã học Bài 6, nghĩa gần giống\")",
        "w": "工作"
      }
    ],
    "colloFull": [
      {
        "zh": "在医院工作",
        "py": "zài yīyuàn gōngzuò",
        "vn": "làm việc ở bệnh viện"
      },
      {
        "zh": "我的工作",
        "py": "wǒ de gōngzuò",
        "vn": "công việc của tôi"
      },
      {
        "zh": "去工作",
        "py": "qù gōngzuò",
        "vn": "đi làm"
      },
      {
        "zh": "爸爸的工作",
        "py": "bàba de gōngzuò",
        "vn": "công việc của bố"
      }
    ],
    "patterns": [
      {
        "s": "在 + nơi chốn + 工作",
        "m": "Làm việc ở đâu — nơi chốn đứng TRƯỚC động từ"
      },
      {
        "s": "工作 vừa là động từ (làm việc), vừa là danh từ (công việc)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi làm việc ở cửa hàng.",
        "answer": "我妈妈在商店工作。",
        "answerPy": "Wǒ māma zài shāngdiàn gōngzuò.",
        "note": "在 + nơi chốn + 工作.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Công việc của bố tôi rất tốt.",
        "answer": "我爸爸的工作很好。",
        "answerPy": "Wǒ bàba de gōngzuò hěn hǎo.",
        "note": "Ở đây 工作 là danh từ.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 11,
    "zh": "儿子",
    "py": "érzi",
    "pos": "Danh từ",
    "vn": "con trai",
    "hv": "nhi tử",
    "em": "👦",
    "lesson": 2,
    "ex_zh": "我儿子在医院工作。",
    "ex_py": "Wǒ érzi zài yīyuàn gōngzuò.",
    "ex_vn": "Con trai tôi làm việc ở bệnh viện.",
    "exList": [
      {
        "zh": "我儿子在医院工作。",
        "py": "Wǒ érzi zài yīyuàn gōngzuò.",
        "vn": "Con trai tôi làm việc ở bệnh viện."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "我儿子",
        "py": "wǒ érzi",
        "vn": "con trai tôi"
      },
      {
        "zh": "他的儿子",
        "py": "tā de érzi",
        "vn": "con trai của anh ấy"
      },
      {
        "zh": "有儿子",
        "py": "yǒu érzi",
        "vn": "có con trai"
      },
      {
        "zh": "儿子的书",
        "py": "érzi de shū",
        "vn": "sách của con trai"
      }
    ],
    "patterns": [
      {
        "s": "người + 儿子",
        "m": "Con trai của ai — người thân hay bỏ 的"
      },
      {
        "s": "儿子 (con trai) ↔ 女儿 (con gái)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy có một người con trai.",
        "answer": "老师有一个儿子。",
        "answerPy": "Lǎoshī yǒu yí ge érzi.",
        "note": "儿子 — con trai, đối với 女儿.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con trai của cô ấy năm nay mấy tuổi?",
        "answer": "她的儿子今年几岁？",
        "answerPy": "Tā de érzi jīnnián jǐ suì?",
        "note": "Hỏi tuổi trẻ nhỏ dùng 几岁.",
        "pair": "几岁？"
      }
    ]
  },
  {
    "n": 12,
    "zh": "医院",
    "py": "yīyuàn",
    "pos": "Danh từ",
    "vn": "bệnh viện",
    "hv": "y viện",
    "em": "🏥",
    "lesson": 2,
    "ex_zh": "我儿子在医院工作，他是医生。",
    "ex_py": "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
    "ex_vn": "Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.",
    "exList": [
      {
        "zh": "我儿子在医院工作，他是医生。",
        "py": "Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.",
        "vn": "Con trai tôi làm việc ở bệnh viện, nó là bác sĩ."
      }
    ],
    "hanzi": [
      {
        "c": "医",
        "p": "yī",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "匚(hễ, biến thể) ngoài → 矢(thỉ) trong",
        "rad": "匚 (hễ – hộp đựng, biến thể)",
        "mean": "y tế, chữa bệnh",
        "tip": "匚(hộp đựng dụng cụ) + 矢(mũi tên, dụng cụ y tế cổ) → dụng cụ CHỮA BỆNH = Y TẾ.",
        "cf": "区 (qū – \"khu vực\")",
        "w": "医院 / 医生"
      },
      {
        "c": "院",
        "p": "yuàn",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "阝(phụ) trái → 完(hoàn) phải",
        "rad": "阝 (phụ – gò đất, tường vây)",
        "mean": "viện, sân",
        "tip": "阝(tường bao quanh) + 完(hoàn chỉnh) → khuôn viên có tường bao đầy đủ chức năng = VIỆN.",
        "cf": "完 (wán – \"hoàn thành\")",
        "w": "医院 / 学院"
      }
    ],
    "colloFull": [
      {
        "zh": "去医院",
        "py": "qù yīyuàn",
        "vn": "đi bệnh viện"
      },
      {
        "zh": "在医院",
        "py": "zài yīyuàn",
        "vn": "ở bệnh viện"
      },
      {
        "zh": "医院的医生",
        "py": "yīyuàn de yīshēng",
        "vn": "bác sĩ của bệnh viện"
      },
      {
        "zh": "这个医院",
        "py": "zhège yīyuàn",
        "vn": "bệnh viện này"
      }
    ],
    "patterns": [
      {
        "s": "去 / 在 + 医院",
        "m": "Đi, ở bệnh viện"
      },
      {
        "s": "医 + 院",
        "m": "Khu nhà (院) chữa bệnh (医)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bệnh viện ở đâu ạ?",
        "answer": "请问，医院在哪儿？",
        "answerPy": "Qǐngwèn, yīyuàn zài nǎr?",
        "note": "请问 đặt đầu câu cho lễ phép.",
        "pair": "在哪儿？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều mai tôi đi bệnh viện.",
        "answer": "明天下午我去医院。",
        "answerPy": "Míngtiān xiàwǔ wǒ qù yīyuàn.",
        "note": "去医院 — đi bệnh viện.",
        "pair": "去 + nơi chốn"
      }
    ]
  },
  {
    "n": 13,
    "zh": "医生",
    "py": "yīshēng",
    "pos": "Danh từ",
    "vn": "bác sĩ",
    "hv": "y sinh",
    "em": "👨‍⚕️",
    "lesson": 2,
    "ex_zh": "他是医生。",
    "ex_py": "Tā shì yīshēng.",
    "ex_vn": "Nó là bác sĩ.",
    "exList": [
      {
        "zh": "他是医生。",
        "py": "Tā shì yīshēng.",
        "vn": "Nó là bác sĩ."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "是医生",
        "py": "shì yīshēng",
        "vn": "là bác sĩ"
      },
      {
        "zh": "中国医生",
        "py": "Zhōngguó yīshēng",
        "vn": "bác sĩ Trung Quốc"
      },
      {
        "zh": "医院的医生",
        "py": "yīyuàn de yīshēng",
        "vn": "bác sĩ của bệnh viện"
      },
      {
        "zh": "好医生",
        "py": "hǎo yīshēng",
        "vn": "bác sĩ giỏi"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 是 + 医生",
        "m": "Ai đó là bác sĩ"
      },
      {
        "s": "医生 (bác sĩ) và 医院 (bệnh viện) dùng chung chữ 医"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi là bác sĩ.",
        "answer": "我爸爸是医生。",
        "answerPy": "Wǒ bàba shì yīshēng.",
        "note": "Câu chữ 是 nói nghề nghiệp.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bác sĩ của bệnh viện này rất giỏi.",
        "answer": "这个医院的医生很好。",
        "answerPy": "Zhège yīyuàn de yīshēng hěn hǎo.",
        "note": "医院的医生 — bác sĩ của bệnh viện.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 14,
    "zh": "爸爸",
    "py": "bàba",
    "pos": "Danh từ",
    "vn": "cha, bố",
    "hv": "ba ba",
    "em": "👨",
    "lesson": 3,
    "ex_zh": "你爸爸在家吗？",
    "ex_py": "Nǐ bàba zài jiā ma?",
    "ex_vn": "Cha cô có ở nhà không?",
    "exList": [
      {
        "zh": "你爸爸在家吗？",
        "py": "Nǐ bàba zài jiā ma?",
        "vn": "Cha cô có ở nhà không?"
      }
    ],
    "hanzi": [
      {
        "c": "爸",
        "p": "bà",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "父(phụ) trên → 巴(ba) dưới",
        "rad": "父 (phụ – cha)",
        "mean": "cha, bố",
        "tip": "父(bàn tay cầm roi dạy dỗ, biểu tượng người cha) + 巴(mượn âm) → tiếng gọi CHA, BỐ.",
        "cf": "吧 (ba – \"trợ từ ngữ khí\", cũng mượn âm 巴\")",
        "w": "爸爸"
      }
    ],
    "colloFull": [
      {
        "zh": "我爸爸",
        "py": "wǒ bàba",
        "vn": "bố tôi"
      },
      {
        "zh": "他爸爸",
        "py": "tā bàba",
        "vn": "bố anh ấy"
      },
      {
        "zh": "爸爸的书",
        "py": "bàba de shū",
        "vn": "sách của bố"
      },
      {
        "zh": "爸爸的工作",
        "py": "bàba de gōngzuò",
        "vn": "công việc của bố"
      }
    ],
    "patterns": [
      {
        "s": "người + 爸爸",
        "m": "Bố của ai — nói 我爸爸, ít khi nói 我的爸爸"
      },
      {
        "s": "爸爸 ↔ 妈妈",
        "m": "Hai chữ đều có phần chỉ âm ở dưới: 巴 và 马"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi không phải bác sĩ.",
        "answer": "我爸爸不是医生。",
        "answerPy": "Wǒ bàba bú shì yīshēng.",
        "note": "Người thân hay bỏ 的: 我爸爸.",
        "pair": "不是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bố bạn làm việc ở đâu?",
        "answer": "你爸爸在哪儿工作？",
        "answerPy": "Nǐ bàba zài nǎr gōngzuò?",
        "note": "Khung hỏi nơi làm việc.",
        "pair": "在哪儿……？"
      }
    ]
  }
];

const wuData = [
  {img:'🐱',label:'猫',py:'māo',letter:'A'},
  {img:'🐶',label:'狗',py:'gǒu',letter:'B'},
  {img:'🪑',label:'椅子',py:'yǐzi',letter:'C'},
  {img:'💼',label:'工作',py:'gōngzuò',letter:'D'},
  {img:'🏥',label:'医院',py:'yīyuàn',letter:'E'},
  {img:'👨',label:'爸爸',py:'bàba',letter:'F'},
];

var dialogData = [
  {scene:'Ở nhà · Tìm con mèo, con chó',
   lines:[
     {sp:0,zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
     {sp:1,zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Nó ở đó kìa.'},
     {sp:0,zh:'小狗在哪儿？',py:'Xiǎo gǒu zài nǎr?',vn:'Còn con chó đâu?'},
     {sp:1,zh:'小狗在椅子下面。',py:'Xiǎo gǒu zài yǐzi xiàmiàn.',vn:'Ở dưới ghế dựa.'},
   ]},
  {scene:'Ở bến xe · Hỏi nơi làm việc',
   lines:[
     {sp:0,zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vn:'Anh làm việc ở đâu?'},
     {sp:1,zh:'我在学校工作。',py:'Wǒ zài xuéxiào gōngzuò.',vn:'Tôi làm việc ở trường học.'},
     {sp:0,zh:'你儿子在哪儿工作？',py:'Nǐ érzi zài nǎr gōngzuò?',vn:'Con trai anh làm việc ở đâu?'},
     {sp:1,zh:'我儿子在医院工作，他是医生。',py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.'},
   ]},
  {scene:'Gọi điện thoại · Hỏi thăm cha',
   lines:[
     {sp:0,zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Cha cô có ở nhà không?'},
     {sp:1,zh:'不在家。',py:'Bú zài jiā.',vn:'Không có.'},
     {sp:0,zh:'他在哪儿呢？',py:'Tā zài nǎr ne?',vn:'Ông ấy đâu rồi?'},
     {sp:1,zh:'他在医院。',py:'Tā zài yīyuàn.',vn:'Ông ấy ở bệnh viện.'},
   ]},
];

// Điền từ — đổi con vật/nơi chốn so với bài khoá
var fillData = [
  {pre:'Bạn hỏi con mèo đang ở đâu: “小猫',blank:'在',post:'哪儿？”',hint:'(ở — động từ)',ans:'在'},
  {pre:'Bạn nói con chó ở dưới bàn: “小狗在桌子',blank:'下面',post:'。”',hint:'(bên dưới)',ans:'下面'},
  {pre:'Bạn hỏi ai đó làm việc ở đâu: “你在',blank:'哪儿',post:'工作？”',hint:'(ở đâu)',ans:'哪儿'},
  {pre:'Bạn nói mình làm việc ở bệnh viện: “我在',blank:'医院',post:'工作。”',hint:'(bệnh viện)',ans:'医院'},
  {pre:'Bạn giới thiệu con trai mình là bác sĩ: “我儿子是',blank:'医生',post:'。”',hint:'(bác sĩ)',ans:'医生'},
  {pre:'Bạn hỏi cha có ở nhà không: “你',blank:'爸爸',post:'在家吗？”',hint:'(cha, bố)',ans:'爸爸'},
  {pre:'Bạn phủ định ai đó không có ở nhà: “他不',blank:'在',post:'家。”',hint:'(ở — động từ)',ans:'在'},
  {pre:'Bạn hỏi vị trí một cái ghế: “',blank:'椅',post:'子在哪儿？”',hint:'(ghế)',ans:'椅'},
];

// Sắp xếp — đổi con vật/vị trí so với bài khoá
var sortData = [
  {words:['小','猫','在','哪儿','？'],ans:'小猫在哪儿？',audio:'小猫在哪儿？'},
  {words:['小','狗','在','桌子','下面','。'],ans:'小狗在桌子下面。',audio:'小狗在桌子下面。'},
  {words:['你','在','哪儿','工作','？'],ans:'你在哪儿工作？',audio:'你在哪儿工作？'},
  {words:['我','儿子','在','医院','工作','。'],ans:'我儿子在医院工作。',audio:'我儿子在医院工作。'},
  {words:['你','爸爸','在','家','吗','？'],ans:'你爸爸在家吗？',audio:'你爸爸在家吗？'},
  {words:['他','在','医院','。'],ans:'他在医院。',audio:'他在医院。'},
];

var matchData = [
  {left:'小猫在哪儿？',right:'小猫在那儿。'},
  {left:'小狗在哪儿？',right:'小狗在椅子下面。'},
  {left:'你在哪儿工作？',right:'我在学校工作。'},
  {left:'你儿子在哪儿工作？',right:'我儿子在医院工作，他是医生。'},
  {left:'你爸爸在家吗？',right:'不在家。'},
];

// Trắc nghiệm — trọng tâm 在/哪儿, không audio
var mcData = [
  {q:'小猫＿＿哪儿？',opts:['在','是','有','去'],ans:0},
  {q:'小狗在椅子＿＿。',opts:['下面','上面','里面','外面'],ans:0},
  {q:'你在＿＿工作？',opts:['哪儿','什么','谁','怎么'],ans:0},
  {q:'Giới từ "在" trong câu "我在学校工作" có nghĩa gì?',opts:['ở, tại (nơi chốn xảy ra hành động)','là','có','muốn'],ans:0},
  {q:'"医生" nghĩa là gì?',opts:['bác sĩ','bệnh viện','giáo viên','học sinh'],ans:0},
  {q:'"工作" nghĩa là gì?',opts:['làm việc, công việc','nghỉ ngơi','học tập','đi chơi'],ans:0},
  {q:'"爸爸" nghĩa là gì?',opts:['cha, bố','mẹ','anh trai','ông nội'],ans:0},
  {q:'Câu nào ĐÚNG khi phủ định "在" (không ở đâu đó)?',opts:['不在','没在','不是在','别在'],ans:0},
  {q:'"哪儿" nghĩa là gì?',opts:['ở đâu, chỗ nào','ở đó','ở đây','cái nào'],ans:0},
  {q:'"儿子" nghĩa là gì?',opts:['con trai','con gái','cháu trai','em trai'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
      {zh:'小猫在那儿。',py:'Xiǎo māo zài nàr.',vn:'Nó ở đó kìa.'},
      {zh:'你在哪儿工作？',py:'Nǐ zài nǎr gōngzuò?',vn:'Anh làm việc ở đâu?'},
      {zh:'我儿子在医院工作，他是医生。',py:'Wǒ érzi zài yīyuàn gōngzuò, tā shì yīshēng.',vn:'Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.'},
      {zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Cha cô có ở nhà không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我在＿＿工作。',frame_py:'Wǒ zài ___ gōngzuò.',vn:'Tôi làm việc ở ＿＿.',options:['学校','医院'],samples:['我在学校工作。','我在医院工作。']},
      {frame:'小狗在椅子＿＿。',frame_py:'Xiǎo gǒu zài yǐzi ___.',vn:'Con chó ở ＿＿ ghế dựa.',options:['下面','上面'],samples:['小狗在椅子下面。','小狗在椅子上面。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🐾 Tình huống 1 — Tìm thú cưng trong nhà',
       guide:'Bạn đang tìm con mèo và con chó của mình trong nhà.',
       structure:['小猫在哪儿？','小狗在椅子＿＿。'],
       sample:'小猫在哪儿？小猫在那儿。小狗在椅子下面。',
       sample_vn:'Con mèo đâu rồi? Nó ở đó kìa. Con chó ở dưới ghế dựa.',
       note:'在 + Nơi chốn luôn đặt SAU chủ ngữ và trước vị trí cụ thể — khác với tiếng Việt có thể đảo ngược tự do hơn ("Ở đâu con mèo?").'},
      {role:'💼 Tình huống 2 — Hỏi thăm nơi làm việc của gia đình',
       guide:'Bạn gặp một người quen và hỏi thăm công việc của họ và con cái họ.',
       structure:['你在哪儿工作？','我儿子在＿＿工作，他是＿＿。'],
       sample:'你在哪儿工作？我儿子在医院工作，他是医生。',
       sample_vn:'Anh làm việc ở đâu? Con trai tôi làm việc ở bệnh viện, nó là bác sĩ.',
       note:'Câu "在 + Nơi chốn + 工作" là mẫu câu cực kỳ THỰC DỤNG khi giới thiệu nghề nghiệp bản thân hoặc người thân trong giao tiếp hàng ngày.'},
      {role:'📞 Tình huống 3 — Gọi điện hỏi thăm người thân',
       guide:'Bạn gọi điện cho một người bạn và hỏi thăm xem cha của họ có ở nhà không.',
       structure:['你爸爸在家吗？','不在家，他在＿＿。'],
       sample:'你爸爸在家吗？不在家，他在医院。',
       sample_vn:'Cha bạn có ở nhà không? Không có, ông ấy ở bệnh viện.',
       note:'Khi trả lời phủ định "不在家", người Trung Quốc thường nói THÊM địa điểm thực tế ngay sau đó để câu trả lời đầy đủ, tránh chỉ nói cộc lốc.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 9 + ôn lại từ bài 1-8
// ══════════════════════════════════════════
var translateData = [
  {vi:'Con mèo nhỏ ở đâu?', zh:'小猫在哪儿？', py:'Xiǎo māo zài nǎr?'},
  {vi:'Bố tôi làm việc ở bệnh viện.', zh:'我爸爸在医院工作。', py:'Wǒ bàba zài yīyuàn gōngzuò.'},
  {vi:'Con chó ở dưới ghế.', zh:'狗在椅子下面。', py:'Gǒu zài yǐzi xiàmiàn.'},
  {vi:'Con trai tôi là bác sĩ.', zh:'我儿子是医生。', py:'Wǒ érzi shì yīshēng.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bố tôi là bác sĩ, làm việc ở bệnh viện.', zh:'我爸爸是医生，在医院工作。', py:'Wǒ bàba shì yīshēng, zài yīyuàn gōngzuò.'},
  {vi:'Con chó nhỏ ở đâu? Con chó nhỏ ở dưới ghế.', zh:'小狗在哪儿？小狗在椅子下面。', py:'Xiǎo gǒu zài nǎr? Xiǎo gǒu zài yǐzi xiàmiàn.'},
  {vi:'Con trai tôi có làm việc ở bệnh viện không?', zh:'我儿子在医院工作吗？', py:'Wǒ érzi zài yīyuàn gōngzuò ma?'},
  {vi:'Cái cốc của bố bạn ở đâu?', zh:'你爸爸的杯子在哪儿？', py:'Nǐ bàba de bēizi zài nǎr?'},
];
