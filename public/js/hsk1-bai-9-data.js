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
      },
      {
        "zh": "这个杯子很小。",
        "py": "Zhège bēizi hěn xiǎo.",
        "vn": "Cái cốc này rất nhỏ."
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
      },
      {
        "zh": "你家有猫吗？",
        "py": "Nǐ jiā yǒu māo ma?",
        "vn": "Nhà bạn có mèo không?"
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
      },
      {
        "zh": "我的书在那儿。",
        "py": "Wǒ de shū zài nàr.",
        "vn": "Sách của tôi ở đằng kia."
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
      },
      {
        "zh": "你的狗在哪儿？",
        "py": "Nǐ de gǒu zài nǎr?",
        "vn": "Con chó của bạn đâu rồi?"
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
      },
      {
        "zh": "那个椅子多少钱？",
        "py": "Nàge yǐzi duōshao qián?",
        "vn": "Cái ghế kia bao nhiêu tiền?"
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
      },
      {
        "zh": "我的杯子在椅子下面。",
        "py": "Wǒ de bēizi zài yǐzi xiàmiàn.",
        "vn": "Cốc của tôi ở dưới ghế."
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
      },
      {
        "zh": "我妈妈在商店工作。",
        "py": "Wǒ māma zài shāngdiàn gōngzuò.",
        "vn": "Mẹ tôi làm việc ở cửa hàng."
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
      },
      {
        "zh": "你去哪儿？",
        "py": "Nǐ qù nǎr?",
        "vn": "Bạn đi đâu đấy?"
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
      },
      {
        "zh": "你爸爸在哪儿工作？",
        "py": "Nǐ bàba zài nǎr gōngzuò?",
        "vn": "Bố bạn làm việc ở đâu?"
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
      },
      {
        "zh": "你儿子几岁了？",
        "py": "Nǐ érzi jǐ suì le?",
        "vn": "Con trai anh mấy tuổi rồi?"
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
      },
      {
        "zh": "明天我去医院。",
        "py": "Míngtiān wǒ qù yīyuàn.",
        "vn": "Ngày mai tôi đi bệnh viện."
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
      },
      {
        "zh": "我爸爸是医生。",
        "py": "Wǒ bàba shì yīshēng.",
        "vn": "Bố tôi là bác sĩ."
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
      },
      {
        "zh": "爸爸在家看书。",
        "py": "Bàba zài jiā kàn shū.",
        "vn": "Bố đọc sách ở nhà."
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

// Điền từ — 在 (động từ / giới từ), 哪儿, 那儿, 呢; ôn 想/买/个/这/多少钱/去+nơi chốn/有/很
var fillData = [
  {pre:'Bạn mới quen Lý Nguyệt và muốn biết trường của cô ấy ở chỗ nào: “李月，你的学校',blank:'在',post:'哪儿？”',hint:'(ở — chỉ vị trí)',ans:'在',exp:'Người/vật + 在 + 哪儿 = … ở đâu; 在 ở đây là động từ “ở”.'},
  {pre:'A: “妈妈，我的书呢？” — B: “在我的椅子',blank:'下面',post:'。”',hint:'(bên dưới)',ans:'下面',exp:'在 + nơi + 下面 = ở dưới …; 我的书呢 = sách của con đâu rồi?'},
  {pre:'Bạn rủ bạn đi chơi ngày mai: “明天你想去',blank:'哪儿',post:'？”',hint:'(đâu, chỗ nào)',ans:'哪儿',exp:'去哪儿 = đi đâu; 哪儿 hỏi nơi chốn, không thêm 吗.'},
  {pre:'Bạn hỏi người bán cốc để ở đâu, người bán chỉ về góc xa: “',blank:'那儿',post:'有很多杯子。”',hint:'(chỗ kia, đằng kia)',ans:'那儿',exp:'那儿 = đằng kia (chỗ ở xa); 哪儿 mới là “ở đâu”.'},
  {pre:'Bạn kể về mẹ: “我妈妈在商店',blank:'工作',post:'。”',hint:'(làm việc)',ans:'工作',exp:'在 + nơi chốn + 工作 = làm việc ở đâu; nơi chốn đứng trước động từ.'},
  {pre:'Bạn kể về các con: “我有一个女儿，两个',blank:'儿子',post:'。”',hint:'(con trai)',ans:'儿子',exp:'儿子 = con trai, 女儿 = con gái; 两个儿子 = hai con trai.'},
  {pre:'A: “你爸爸今天去哪儿？” — B: “他去',blank:'医院',post:'看朋友。”',hint:'(bệnh viện)',ans:'医院',exp:'医院 = bệnh viện (nơi chốn); 去医院看朋友 = đến bệnh viện thăm bạn.'},
  {pre:'A: “你女儿想做什么工作？” — B: “她想做',blank:'医生',post:'。”',hint:'(bác sĩ)',ans:'医生',exp:'医生 = bác sĩ (người, nghề nghiệp) — khác 医院 là bệnh viện.'},
  {pre:'Con mèo không chịu ăn cơm bạn cho: “我的小',blank:'猫',post:'不吃米饭。”',hint:'(con mèo)',ans:'猫',exp:'小猫 = con mèo nhỏ; 不吃米饭 = không ăn cơm.'},
  {pre:'Bạn hỏi người bạn mới: “你家有',blank:'狗',post:'吗？”',hint:'(con chó)',ans:'狗',exp:'狗 = con chó; 你家有狗吗 = nhà bạn có chó không.'},
  {pre:'Ở cửa hàng, bạn chỉ vào chiếc ghế ngay trước mặt: “这个',blank:'椅子',post:'多少钱？”',hint:'(cái ghế)',ans:'椅子',exp:'椅子 = cái ghế (có tựa); 这个椅子 = cái ghế này.'},
  {pre:'Bạn cầm thử chiếc cốc, thấy nó bé quá: “这个杯子很',blank:'小',post:'。”',hint:'(nhỏ)',ans:'小',exp:'Tính từ làm vị ngữ có 很 đứng trước: 很小 = rất nhỏ.'},
];

// Sắp xếp — nơi chốn đứng TRƯỚC động từ
var sortData = [
  {words:['我朋友','在','那儿','喝','茶','。'],ans:'我朋友在那儿喝茶。',audio:'我朋友在那儿喝茶。'},
  {words:['你','在','哪儿','买','杯子','？'],ans:'你在哪儿买杯子？',audio:'你在哪儿买杯子？'},
  {words:['我爸爸','的','朋友','是','医生','。'],ans:'我爸爸的朋友是医生。',audio:'我爸爸的朋友是医生。'},
  {words:['星期六','我爸爸','不','在','家','。'],ans:'星期六我爸爸不在家。',audio:'星期六我爸爸不在家。'},
  {words:['那','个','小','椅子','是','我女儿','的','。'],ans:'那个小椅子是我女儿的。',audio:'那个小椅子是我女儿的。'},
  {words:['我儿子','想','去','医院','看','他的','老师','。'],ans:'我儿子想去医院看他的老师。',audio:'我儿子想去医院看他的老师。'},
];

// Nối — câu hỏi ↔ câu trả lời
var matchData = [
  {left:'你女儿在哪儿？',right:'她在朋友家。'},
  {left:'你想在哪儿吃米饭？',right:'在家吃。'},
  {left:'你爸爸是医生吗？',right:'不是，他是老师。'},
  {left:'你儿子多大了？',right:'他十岁了。'},
  {left:'你明天去医院吗？',right:'去，我去看我爸爸。'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp, tìm câu sai
var mcData = [
  {q:'Bạn muốn nói: “Bố tôi làm việc ở trường học.”',opts:['我爸爸在学校工作。','我爸爸工作在学校。','我爸爸在工作学校。','我爸爸学校在工作。'],ans:0,exp:'在 + nơi chốn đứng TRƯỚC động từ: 在学校工作; không nói 工作在学校 theo kiểu tiếng Việt.'},
  {q:'Bạn muốn nói: “Lý Nguyệt đang ở nhà.”',opts:['李月在家。','李月是家。','李月有家。','李月家在。'],ans:0,exp:'“Ở (đâu)” là 在 + nơi chốn; 是 = là, 有 = có.'},
  {q:'A: “你儿子在学校吗？” — B (con trai đang ở bệnh viện):',opts:['不在，他在医院。','不是，他是医院。','不在，他医院在。','不有，他在医院。'],ans:0,exp:'Phủ định của 在 là 不在; “ở bệnh viện” là 在医院.'},
  {q:'Bạn muốn hỏi bạn: “Ngày mai bạn đọc sách ở đâu?”',opts:['明天你在哪儿看书？','明天你看书在哪儿？','明天你在哪儿看书吗？','明天你在那儿看书？'],ans:0,exp:'在哪儿 đứng trước động từ; 哪儿 = ở đâu, 那儿 = ở đó; có 哪儿 thì không thêm 吗.'},
  {q:'Về đến nhà không thấy con mèo, bạn hỏi mẹ: “Con mèo đâu rồi ạ?”',opts:['妈妈，小猫呢？','妈妈，小猫吗？','妈妈，小猫哪儿？','妈妈，呢小猫？'],ans:0,exp:'Danh từ + 呢？ = … đâu rồi? (hỏi vị trí); nói đủ phải là 小猫在哪儿.'},
  {q:'Câu nào SAI?',opts:['我儿子在医生工作。','她在家喝茶。','李月的爸爸是老师。','你的狗在那儿。'],ans:0,exp:'医生 là bác sĩ (người); nơi làm việc phải là 医院: 我儿子在医院工作.'},
  {q:'Bạn tìm thấy con mèo, nói với mẹ: “Con mèo ở dưới ghế.”',opts:['小猫在椅子下面。','小猫是椅子下面。','小猫在下面椅子。','椅子下面在小猫。'],ans:0,exp:'在 + đồ vật + 下面: 在椅子下面 (dưới ghế) — 下面 đứng SAU 椅子, ngược tiếng Việt.'},
  {q:'A: “请问，李老师在哪儿？” — B (chỉ tay ra phía xa):',opts:['她在那儿。','她在哪儿。','她是那儿。','那儿她在。'],ans:0,exp:'Trả lời vị trí ở xa: 在那儿; 哪儿 chỉ dùng để hỏi.'},
  {q:'A: “你女儿想去哪儿工作？” — B đáp:',opts:['她想去美国工作。','她想美国工作去。','她去想美国工作。','她想是美国工作。'],ans:0,exp:'想 + 去 + nơi chốn + việc làm: 想去美国工作; 想 đứng trước 去.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Phân biệt 哪儿 nǎr (thanh 3, hỏi “ở đâu”) và 那儿 nàr (thanh 4, “ở đó”).',
    models:[
      {zh:'小猫在哪儿？',py:'Xiǎo māo zài nǎr?',vn:'Con mèo đâu rồi?'},
      {zh:'李月的爸爸在哪儿呢？',py:'Lǐ Yuè de bàba zài nǎr ne?',vn:'Bố của Lý Nguyệt đâu rồi?'},
      {zh:'你爸爸在家吗？',py:'Nǐ bàba zài jiā ma?',vn:'Bố bạn có ở nhà không?'},
      {zh:'我想在中国工作。',py:'Wǒ xiǎng zài Zhōngguó gōngzuò.',vn:'Tôi muốn làm việc ở Trung Quốc.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng cụm từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'＿＿在哪儿？',frame_py:'___ zài nǎr?',vn:'＿＿ ở đâu?',options:['你爸爸的医院','李月的小狗','那个商店'],samples:['你爸爸的医院在哪儿？','李月的小狗在哪儿？','那个商店在哪儿？']},
      {frame:'我在家，＿＿呢？',frame_py:'Wǒ zài jiā, ___ ne?',vn:'Tôi ở nhà, còn ＿＿ thì sao / đâu?',options:['你','你爸爸','李月'],samples:['我在家，你呢？','我在家，你爸爸呢？','我在家，李月呢？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📞 Tình huống 1 — Gọi điện cho bố',
       guide:'Bạn về nhà không thấy bố. Hãy gọi điện hỏi bố đang ở đâu, nói bạn đang ở trường, rồi hỏi lại.',
       structure:['爸爸，你在＿＿呢？','我在＿＿，你呢？'],
       sample:'爸爸，你在哪儿呢？我在学校，你呢？',
       sample_vn:'Bố ơi, bố đang ở đâu thế? Con ở trường, còn bố?',
       note:'Thêm 呢 vào cuối câu hỏi 在哪儿 làm câu nghe mềm, thân mật hơn. Đã có 哪儿 thì không dùng 吗.'},
      {role:'🏥 Tình huống 2 — Giới thiệu nghề nghiệp',
       guide:'Ở buổi họp phụ huynh, một người hỏi bạn làm nghề gì. Hãy nói bạn là bác sĩ, làm ở bệnh viện, rồi hỏi lại người đó làm việc ở đâu.',
       structure:['我是＿＿，在＿＿工作。','你在＿＿工作？'],
       sample:'我是医生，在医院工作。你在哪儿工作？',
       sample_vn:'Tôi là bác sĩ, làm việc ở bệnh viện. Anh làm việc ở đâu?',
       note:'Người Việt hay nói “我工作在医院” theo thứ tự tiếng Việt. Tiếng Trung: 在 + nơi chốn đứng TRƯỚC động từ — 在医院工作.'},
      {role:'🐱 Tình huống 3 — Tìm mèo con',
       guide:'Con mèo nhỏ của bạn biến mất. Hãy hỏi mẹ mèo ở đâu, rồi đóng vai mẹ chỉ tay về phía xa trả lời.',
       structure:['妈妈，我的小猫在＿＿？','——在＿＿呢！'],
       sample:'妈妈，我的小猫在哪儿？——在那儿呢！',
       sample_vn:'Mẹ ơi, mèo con của con đâu rồi? — Ở đằng kia kìa!',
       note:'哪儿 (nǎr, thanh 3) để hỏi, 那儿 (nàr, thanh 4) để chỉ chỗ ở xa — viết khác nhau (哪 có bộ khẩu 口), đọc chỉ khác thanh điệu.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 9 + ôn lại từ bài 1-8
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngày mai bố tôi không đến bệnh viện.', zh:'明天我爸爸不去医院。', py:'Míngtiān wǒ bàba bú qù yīyuàn.'},
  {vi:'Cái ghế nhỏ kia 60 đồng.', zh:'那个小椅子六十块。', py:'Nà ge xiǎo yǐzi liùshí kuài.'},
  {vi:'Chiều nay mẹ tôi ở nhà nấu ăn.', zh:'今天下午我妈妈在家做菜。', py:'Jīntiān xiàwǔ wǒ māma zài jiā zuò cài.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Con gái tôi ở trường, con trai tôi ở nhà.', zh:'我女儿在学校，我儿子在家。', py:'Wǒ nǚ\'ér zài xuéxiào, wǒ érzi zài jiā.'},
  {vi:'Xin hỏi, bệnh viện của các anh có bao nhiêu bác sĩ?', zh:'请问，你们医院有多少医生？', py:'Qǐngwèn, nǐmen yīyuàn yǒu duōshao yīshēng?'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我爸爸是医生，他在美国工作。',
   questions:[
     {q:'Bố người nói làm nghề gì, ở đâu?',opts:['Giáo viên, ở Mỹ','Bác sĩ, ở Mỹ','Bác sĩ, ở Trung Quốc'],ans:1,exp:'是医生 = là bác sĩ; 在美国工作 = làm việc ở Mỹ.'},
   ]},
  {audio:'小狗不在家，在李月家。',
   questions:[
     {q:'Con chó đang ở đâu?',opts:['Ở nhà','Dưới ghế','Ở nhà Lý Nguyệt'],ans:2,exp:'不在家 = không ở nhà; 在李月家 = ở nhà Lý Nguyệt.'},
   ]},
  {audio:'我在商店买茶，一百块。',
   questions:[
     {q:'Người nói đang ở đâu?',opts:['Ở nhà','Ở cửa hàng','Ở trường'],ans:1,exp:'在商店买茶 = đang mua trà ở cửa hàng.'},
     {q:'Trà bao nhiêu tiền?',opts:['100 đồng','10 đồng','1000 đồng'],ans:0,exp:'一百块 = 100 đồng.'},
   ]},
  {audio:'李月的儿子是医生，他今年三十岁。',
   questions:[
     {q:'Con trai Lý Nguyệt làm nghề gì?',opts:['Bác sĩ','Giáo viên','Học sinh'],ans:0,exp:'是医生 = là bác sĩ.'},
     {q:'Anh ấy bao nhiêu tuổi?',opts:['13 tuổi','30 tuổi','33 tuổi'],ans:1,exp:'三十岁 = 30 tuổi; 13 là 十三.'},
   ]},
  {audio:'下午你在家吗？我想去你家喝茶。',
   questions:[
     {q:'Người nói muốn làm gì?',opts:['Mời người kia đến nhà mình','Đi mua trà','Đến nhà người kia uống trà'],ans:2,exp:'想去你家喝茶 = muốn đến nhà bạn uống trà.'},
   ]},
];

// ===== Sach bai tap (phan Doc + Chu Han, khong pinyin) =====
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài tập chép chữ theo thứ tự nét (在, 子, 工) hãy luyện trong vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-9-wb/q13.jpg', prompt: '茶',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '茶 là trà. Tranh là một cốc nước cam (bên cạnh quả cam), không phải trà → Sai.' },
        { n: 14, img: '/images/hsk1-bai-9-wb/q14.jpg', prompt: '老师',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '老师 là thầy/cô giáo. Tranh là nữ bác sĩ đeo ống nghe (医生), không phải giáo viên → Sai.' },
        { n: 15, img: '/images/hsk1-bai-9-wb/q15.jpg', prompt: '在医院',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '在医院: ở bệnh viện. Tranh là y tá chăm sóc bệnh nhân nằm trên giường bệnh → Đúng.' },
        { n: 16, img: '/images/hsk1-bai-9-wb/q16.jpg', prompt: '爸爸、儿子',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '爸爸、儿子: bố và con trai. Tranh là người bố cõng cậu con trai nhỏ → Đúng.' },
        { n: 17, img: '/images/hsk1-bai-9-wb/q17.jpg', prompt: '杯子',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '杯子 là cái cốc. Tranh là cái ghế (椅子) → Sai.' },

        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
            { key: 'A', text: '我是学生，我不工作。' },
            { key: 'B', text: '不在，李老师在医院。' },
            { key: 'C', text: '在那儿，椅子下面。' },
            { key: 'D', text: '她是老师，在学校工作。' },
            { key: 'E', text: '杯子在这儿。' },
            { key: 'F', text: '好的，谢谢！' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你在哪儿工作？', answer: 'A',
          vn: 'Bạn làm việc ở đâu? → A: Tôi là học sinh, tôi không đi làm.' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我的小狗在哪儿？', answer: 'C',
          vn: 'Con chó nhỏ của tôi ở đâu? → C: Ở đằng kia, dưới cái ghế. (hỏi vị trí 在哪儿 → trả lời 在那儿 + vị trí)' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我的杯子呢？', answer: 'E',
          vn: 'Cái cốc của tôi đâu? → E: Cái cốc ở đây. (danh từ + 呢？ hỏi đồ vật ở đâu)' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你女儿在哪儿工作？', answer: 'D',
          vn: 'Con gái bạn làm việc ở đâu? → D: Nó là giáo viên, làm việc ở trường học. (女儿 → dùng 她)' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '请问，李老师在吗？', answer: 'B',
          vn: 'Xin hỏi, thầy Lý có ở đây không? → B: Không có ở đây, thầy Lý ở bệnh viện.' },

        { n: 23, part: 'Phần 3 · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'A', text: '在' },
            { key: 'B', text: '哪儿' },
            { key: 'C', text: '呢' },
            { key: 'D', text: '名字' },
            { key: 'E', text: '什么' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你爸爸做（　）工作？', answer: 'E',
          vn: 'Bố bạn làm công việc gì? — 做什么工作: làm nghề gì.' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你好，请问王老师在（　）？', answer: 'B',
          vn: 'Chào bạn, xin hỏi thầy Vương ở đâu? — 在哪儿: ở đâu.' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我儿子是医生，（　）医院工作。', answer: 'A',
          vn: 'Con trai tôi là bác sĩ, làm việc ở bệnh viện. — 在 + nơi chốn + 工作: làm việc ở đâu.' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你的猫（　）？', answer: 'C',
          vn: 'Con mèo của bạn đâu? — danh từ + 呢？: hỏi người/vật đang ở đâu.' },
        { n: 27, part: 'Phần 3 (tiếp) · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'F', text: '家' },
            { key: 'G', text: '学校' },
            { key: 'H', text: '医院' },
            { key: 'I', text: '商店' }
          ], letters: ['F', 'G', 'H', 'I'], prompt: '你（　）有几口人？', answer: 'F',
          vn: 'Nhà bạn có mấy người? — 你家有几口人？' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '我想去（　）买一个杯子。', answer: 'I',
          vn: 'Tôi muốn đến cửa hàng mua một cái cốc. — mua đồ thì đến 商店 (cửa hàng).' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '明天下午我想去（　）看书。', answer: 'G',
          vn: 'Chiều mai tôi muốn đến trường đọc sách. — 去学校看书.' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '他爸爸是医生，在（　）工作。', answer: 'H',
          vn: 'Bố anh ấy là bác sĩ, làm việc ở bệnh viện. — 医生 → 医院.' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 辶?', prompt: 'Chữ nào có bộ 辶?', options: [
            { key: 'A', text: '问' }, { key: 'B', text: '道' }, { key: 'C', text: '闪' }, { key: 'D', text: '间' }
          ], answer: 'B', vn: '道 (con đường) có bộ 辶 (bộ sước – liên quan đến đi lại). 问, 闪, 间 đều có bộ 门.' },
        { n: '1b', prompt: 'Chữ nào có bộ 辶?', options: [
            { key: 'A', text: '边' }, { key: 'B', text: '闷' }, { key: 'C', text: '问' }, { key: 'D', text: '闪' }
          ], answer: 'A', vn: '边 (bên, cạnh) có bộ 辶. 闷, 问, 闪 đều có bộ 门.' },
        { n: '1c', prompt: 'Chữ nào có bộ 辶?', options: [
            { key: 'A', text: '间' }, { key: 'B', text: '闪' }, { key: 'C', text: '送' }, { key: 'D', text: '闷' }
          ], answer: 'C', vn: '送 (tặng, tiễn) có bộ 辶. 间, 闪, 闷 đều có bộ 门.' },
        { n: '1d', prompt: 'Chữ nào có bộ 辶?', options: [
            { key: 'A', text: '闷' }, { key: 'B', text: '间' }, { key: 'C', text: '问' }, { key: 'D', text: '这' }
          ], answer: 'D', vn: '这 (này, đây) có bộ 辶. 闷, 间, 问 đều có bộ 门. → Các chữ có bộ 辶: 道, 边, 送, 这.' },
        { n: '2a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 门?', prompt: 'Chữ nào có bộ 门?', options: [
            { key: 'A', text: '道' }, { key: 'B', text: '这' }, { key: 'C', text: '问' }, { key: 'D', text: '送' }
          ], answer: 'C', vn: '问 (hỏi – 请问) có bộ 门 (bộ môn – cái cửa) bao bên ngoài. 道, 这, 送 có bộ 辶.' },
        { n: '2b', prompt: 'Chữ nào có bộ 门?', options: [
            { key: 'A', text: '闪' }, { key: 'B', text: '边' }, { key: 'C', text: '送' }, { key: 'D', text: '道' }
          ], answer: 'A', vn: '闪 (lóe, chớp) có bộ 门. 边, 送, 道 có bộ 辶.' },
        { n: '2c', prompt: 'Chữ nào có bộ 门?', options: [
            { key: 'A', text: '这' }, { key: 'B', text: '间' }, { key: 'C', text: '道' }, { key: 'D', text: '边' }
          ], answer: 'B', vn: '间 (gian, khoảng) có bộ 门. 这, 道, 边 có bộ 辶.' },
        { n: '2d', prompt: 'Chữ nào có bộ 门?', options: [
            { key: 'A', text: '送' }, { key: 'B', text: '边' }, { key: 'C', text: '这' }, { key: 'D', text: '闷' }
          ], answer: 'D', vn: '闷 (ngột ngạt, buồn bực) có bộ 门. → Các chữ có bộ 门: 问, 闪, 间, 闷.' }
      ] }
  ] }
] };
