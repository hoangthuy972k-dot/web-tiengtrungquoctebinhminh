// ══════════════════════════════════════════
// DATA — HSK1 Bài 10: 我能坐这儿吗?
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "桌子",
    "py": "zhuōzi",
    "pos": "Danh từ",
    "vn": "cái bàn",
    "hv": "trác tử",
    "em": "🍽️",
    "lesson": 1,
    "ex_zh": "桌子上有什么？",
    "ex_py": "Zhuōzi shang yǒu shénme?",
    "ex_vn": "Trên bàn có gì vậy?",
    "exList": [
      {
        "zh": "桌子上有什么？",
        "py": "Zhuōzi shang yǒu shénme?",
        "vn": "Trên bàn có gì vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "桌",
        "p": "zhuō",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "占(biến thể) trên → 木(mộc) dưới",
        "rad": "木 (mộc – gỗ, phần dưới)",
        "mean": "cái bàn",
        "tip": "占(cao lên) trên 木(gỗ) → vật bằng gỗ có mặt cao để dùng = BÀN.",
        "cf": "桌 dễ nhầm 卓 (zhuó – \"xuất sắc\")",
        "w": "桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "一个桌子",
        "py": "yí gè zhuōzi",
        "vn": "một cái bàn"
      },
      {
        "zh": "桌子上",
        "py": "zhuōzi shàng",
        "vn": "trên bàn"
      },
      {
        "zh": "桌子下面",
        "py": "zhuōzi xiàmiàn",
        "vn": "dưới bàn"
      },
      {
        "zh": "这个桌子",
        "py": "zhège zhuōzi",
        "vn": "cái bàn này"
      }
    ],
    "patterns": [
      {
        "s": "桌子 + 上 / 下面 / 前面",
        "m": "Từ chỉ vị trí đứng SAU danh từ"
      },
      {
        "s": "桌 + 子",
        "m": "子 là đuôi từ đọc nhẹ, giống 椅子 · 杯子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trên bàn có một cái máy tính.",
        "answer": "桌子上有一个电脑。",
        "answerPy": "Zhuōzi shang yǒu yí ge diànnǎo.",
        "note": "Câu tồn tại: nơi chốn đứng đầu, rồi mới đến 有.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Con mèo ở dưới cái bàn này.",
        "answer": "猫在这个桌子下面。",
        "answerPy": "Māo zài zhège zhuōzi xiàmiàn.",
        "note": "桌子下面 — dưới bàn.",
        "pair": "在……下面"
      }
    ]
  },
  {
    "n": 2,
    "zh": "上",
    "py": "shang",
    "pos": "Danh từ",
    "vn": "trên, phía trên",
    "hv": "thượng",
    "em": "⬆️",
    "lesson": 1,
    "ex_zh": "桌子上有什么？",
    "ex_py": "Zhuōzi shang yǒu shénme?",
    "ex_vn": "Trên bàn có gì vậy?",
    "exList": [
      {
        "zh": "桌子上有什么？",
        "py": "Zhuōzi shang yǒu shénme?",
        "vn": "Trên bàn có gì vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "上",
        "p": "shàng",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丨→一→一",
        "rad": "一 (nhất)",
        "mean": "trên, phía trên",
        "tip": "Một điểm nằm TRÊN đường ngang → chỉ vị trí PHÍA TRÊN (ngược với 下 đã học Bài 8).",
        "cf": "下 (xià – \"dưới\", đã học Bài 8\")",
        "w": "桌子上 / 上午"
      }
    ],
    "colloFull": [
      {
        "zh": "桌子上",
        "py": "zhuōzi shàng",
        "vn": "trên bàn"
      },
      {
        "zh": "椅子上",
        "py": "yǐzi shàng",
        "vn": "trên ghế"
      },
      {
        "zh": "书上",
        "py": "shū shàng",
        "vn": "trên sách"
      },
      {
        "zh": "桌子上有",
        "py": "zhuōzi shàng yǒu",
        "vn": "trên bàn có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 上",
        "m": "Trên cái gì: 桌子上"
      },
      {
        "s": "上 ↔ 下面",
        "m": "Trên ↔ dưới — 上 thường đi một mình, không cần 面"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trên bàn có gì?",
        "answer": "桌子上有什么？",
        "answerPy": "Zhuōzi shang yǒu shénme?",
        "note": "上 đứng sau danh từ, không đứng trước.",
        "pair": "……有什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Sách của tôi ở trên ghế.",
        "answer": "我的书在椅子上。",
        "answerPy": "Wǒ de shū zài yǐzi shang.",
        "note": "在椅子上 — ở trên ghế.",
        "pair": "在……上"
      }
    ]
  },
  {
    "n": 3,
    "zh": "电脑",
    "py": "diànnǎo",
    "pos": "Danh từ",
    "vn": "máy vi tính",
    "hv": "điện não",
    "em": "🖥️",
    "lesson": 1,
    "ex_zh": "桌子上有一个电脑和一本书。",
    "ex_py": "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.",
    "ex_vn": "Có một chiếc máy vi tính và một quyển sách.",
    "exList": [
      {
        "zh": "桌子上有一个电脑和一本书。",
        "py": "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.",
        "vn": "Có một chiếc máy vi tính và một quyển sách."
      }
    ],
    "hanzi": [
      {
        "c": "电",
        "p": "diàn",
        "type": "独体字 · Tượng hình",
        "st": 5,
        "ord": "日(biến thể) → 乚",
        "rad": "雨 (vũ, biến thể)",
        "mean": "điện",
        "tip": "Hình tia chớp ngoằn ngoèo trên trời → ĐIỆN.",
        "cf": "甲 (jiǎ – \"giáp, hạng nhất\")",
        "w": "电脑 / 电视 / 电话"
      },
      {
        "c": "脑",
        "p": "nǎo",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "月(nhục) trái → 甾(biến thể) phải",
        "rad": "月 (nhục – thịt, biến thể)",
        "mean": "não, bộ não",
        "tip": "月(bộ phận cơ thể) + phần biểu thị hộp sọ → NÃO BỘ; 电脑 = \"não điện tử\" = MÁY VI TÍNH.",
        "cf": "恼 (nǎo – \"buồn phiền\")",
        "w": "电脑"
      }
    ],
    "colloFull": [
      {
        "zh": "一个电脑",
        "py": "yí gè diànnǎo",
        "vn": "một cái máy tính"
      },
      {
        "zh": "买电脑",
        "py": "mǎi diànnǎo",
        "vn": "mua máy tính"
      },
      {
        "zh": "电脑上",
        "py": "diànnǎo shàng",
        "vn": "trên máy tính"
      },
      {
        "zh": "我的电脑",
        "py": "wǒ de diànnǎo",
        "vn": "máy tính của tôi"
      }
    ],
    "patterns": [
      {
        "s": "桌子上有 + 电脑",
        "m": "Trên bàn có máy tính"
      },
      {
        "s": "电 + 脑",
        "m": "Bộ óc (脑) chạy bằng điện (电)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một cái máy tính.",
        "answer": "我想买一个电脑。",
        "answerPy": "Wǒ xiǎng mǎi yí ge diànnǎo.",
        "note": "一个电脑 — một cái máy tính.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi không có máy tính.",
        "answer": "我家没有电脑。",
        "answerPy": "Wǒ jiā méiyǒu diànnǎo.",
        "note": "Phủ định của 有 là 没有.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 4,
    "zh": "和",
    "py": "hé",
    "pos": "Liên từ",
    "vn": "và",
    "hv": "hòa",
    "em": "➕",
    "lesson": 1,
    "ex_zh": "桌子上有一个电脑和一本书。",
    "ex_py": "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.",
    "ex_vn": "Có một chiếc máy vi tính và một quyển sách.",
    "exList": [
      {
        "zh": "桌子上有一个电脑和一本书。",
        "py": "Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.",
        "vn": "Có một chiếc máy vi tính và một quyển sách."
      }
    ],
    "hanzi": [
      {
        "c": "和",
        "p": "hé",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "禾(hòa) trái → 口(khẩu) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "và",
        "tip": "禾(lúa, no đủ) + 口(miệng ăn) → mọi người hoà thuận, ghép nối các thứ VÀ nhau.",
        "cf": "合 (hé – \"hợp\", nghĩa gần giống\")",
        "w": "电脑和书"
      }
    ],
    "colloFull": [
      {
        "zh": "我和你",
        "py": "wǒ hé nǐ",
        "vn": "tôi và bạn"
      },
      {
        "zh": "书和电脑",
        "py": "shū hé diànnǎo",
        "vn": "sách và máy tính"
      },
      {
        "zh": "爸爸和妈妈",
        "py": "bàba hé māma",
        "vn": "bố và mẹ"
      },
      {
        "zh": "猫和狗",
        "py": "māo hé gǒu",
        "vn": "mèo và chó"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 和 + danh từ",
        "m": "和 chỉ nối DANH TỪ, không nối hai câu"
      },
      {
        "s": "✗ 我很好和他很好 → tiếng Trung không dùng 和 kiểu này"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trên bàn có sách và máy tính.",
        "answer": "桌子上有书和电脑。",
        "answerPy": "Zhuōzi shang yǒu shū hé diànnǎo.",
        "note": "和 chỉ nối danh từ với danh từ.",
        "pair": "A 和 B"
      },
      {
        "promptLang": "vi",
        "prompt": "Bố và mẹ tôi đều làm việc ở bệnh viện.",
        "answer": "我爸爸和妈妈在医院工作。",
        "answerPy": "Wǒ bàba hé māma zài yīyuàn gōngzuò.",
        "note": "Hai chủ ngữ nối bằng 和, động từ chỉ nói một lần.",
        "pair": "A 和 B"
      }
    ]
  },
  {
    "n": 5,
    "zh": "本",
    "py": "běn",
    "pos": "Lượng từ",
    "vn": "cuốn, quyển (lượng từ dùng cho sách, vở)",
    "hv": "bản",
    "em": "📕",
    "lesson": 1,
    "ex_zh": "桌子上有一本书。",
    "ex_py": "Zhuōzi shang yǒu yì běn shū.",
    "ex_vn": "Trên bàn có một quyển sách.",
    "exList": [
      {
        "zh": "桌子上有一本书。",
        "py": "Zhuōzi shang yǒu yì běn shū.",
        "vn": "Trên bàn có một quyển sách."
      }
    ],
    "hanzi": [
      {
        "c": "本",
        "p": "běn",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "木(biến thể) → 一",
        "rad": "木 (mộc – gỗ, biến thể)",
        "mean": "cuốn, quyển; gốc rễ",
        "tip": "木(cây) thêm nét chỉ GỐC RỄ → cuốn sách được ví như \"gốc\" tri thức.",
        "cf": "木 (mù – \"cây, gỗ\")",
        "w": "一本书"
      }
    ],
    "colloFull": [
      {
        "zh": "一本书",
        "py": "yì běn shū",
        "vn": "một quyển sách"
      },
      {
        "zh": "几本书",
        "py": "jǐ běn shū",
        "vn": "mấy quyển sách"
      },
      {
        "zh": "这本书",
        "py": "zhè běn shū",
        "vn": "quyển sách này"
      },
      {
        "zh": "那本汉语书",
        "py": "nà běn Hànyǔ shū",
        "vn": "quyển sách tiếng Trung kia"
      }
    ],
    "patterns": [
      {
        "s": "số / chỉ định + 本 + 书",
        "m": "Lượng từ 本 dùng cho sách vở"
      },
      {
        "s": "✗ 一个书 → ✓ 一本书"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có ba quyển sách tiếng Trung.",
        "answer": "我有三本汉语书。",
        "answerPy": "Wǒ yǒu sān běn Hànyǔ shū.",
        "note": "Sách dùng lượng từ 本, không dùng 个.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Quyển sách này bao nhiêu tiền?",
        "answer": "这本书多少钱？",
        "answerPy": "Zhè běn shū duōshao qián?",
        "note": "这本书 — quyển sách này.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "里",
    "py": "li",
    "pos": "Danh từ",
    "vn": "trong, bên trong",
    "hv": "lí",
    "em": "📦",
    "lesson": 1,
    "ex_zh": "杯子在桌子里。",
    "ex_py": "Bēizi zài zhuōzi li.",
    "ex_vn": "Cái ly ở trong bàn.",
    "exList": [
      {
        "zh": "杯子在桌子里。",
        "py": "Bēizi zài zhuōzi li.",
        "vn": "Cái ly ở trong bàn."
      }
    ],
    "hanzi": [
      {
        "c": "里",
        "p": "lǐ",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "田(biến thể) → 土(biến thể)",
        "rad": "里 (lý – tự thành bộ)",
        "mean": "trong, bên trong",
        "tip": "Hình ruộng 田 trên đất 土 → nơi ở bên trong làng xóm, mở rộng nghĩa \"TRONG\".",
        "cf": "理 (lǐ – \"lý lẽ\")",
        "w": "桌子里"
      }
    ],
    "colloFull": [
      {
        "zh": "家里",
        "py": "jiā li",
        "vn": "trong nhà"
      },
      {
        "zh": "学校里",
        "py": "xuéxiào li",
        "vn": "trong trường"
      },
      {
        "zh": "商店里",
        "py": "shāngdiàn li",
        "vn": "trong cửa hàng"
      },
      {
        "zh": "医院里",
        "py": "yīyuàn li",
        "vn": "trong bệnh viện"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 里",
        "m": "Bên trong cái gì: 家里 · 商店里"
      },
      {
        "s": "里 ↔ 上",
        "m": "Trong ↔ trên — đều đứng sau danh từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con mèo ở trong nhà.",
        "answer": "猫在家里。",
        "answerPy": "Māo zài jiā li.",
        "note": "家里 — trong nhà.",
        "pair": "在……里"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong cửa hàng có rất nhiều người.",
        "answer": "商店里有很多人。",
        "answerPy": "Shāngdiàn li yǒu hěn duō rén.",
        "note": "很多人 — rất nhiều người.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 7,
    "zh": "前面",
    "py": "qiánmiàn",
    "pos": "Danh từ",
    "vn": "phía trước",
    "hv": "tiền diện",
    "em": "👉",
    "lesson": 2,
    "ex_zh": "前面那个人叫什么名字？",
    "ex_py": "Qiánmiàn nàge rén jiào shénme míngzi?",
    "ex_vn": "Người ở phía trước tên gì vậy?",
    "exList": [
      {
        "zh": "前面那个人叫什么名字？",
        "py": "Qiánmiàn nàge rén jiào shénme míngzi?",
        "vn": "Người ở phía trước tên gì vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "前",
        "p": "qián",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "㸚(biến thể) trên → 刖(biến thể) dưới",
        "rad": "⺈ (đao, biến thể)",
        "mean": "trước, phía trước",
        "tip": "Hình chiếc thuyền tiến về phía trước → TRƯỚC, PHÍA TRƯỚC. (面 đã học ở Bài 9)",
        "cf": "煎 (jiān – \"chiên, rán\")",
        "w": "前面 / 以前"
      }
    ],
    "colloFull": [
      {
        "zh": "学校前面",
        "py": "xuéxiào qiánmiàn",
        "vn": "trước trường"
      },
      {
        "zh": "商店前面",
        "py": "shāngdiàn qiánmiàn",
        "vn": "trước cửa hàng"
      },
      {
        "zh": "在前面",
        "py": "zài qiánmiàn",
        "vn": "ở phía trước"
      },
      {
        "zh": "前面有",
        "py": "qiánmiàn yǒu",
        "vn": "phía trước có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 前面",
        "m": "Phía trước cái gì"
      },
      {
        "s": "前面 ↔ 后面",
        "m": "Trước ↔ sau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bệnh viện ở phía trước trường học.",
        "answer": "医院在学校前面。",
        "answerPy": "Yīyuàn zài xuéxiào qiánmiàn.",
        "note": "Từ chỉ vị trí đứng sau danh từ.",
        "pair": "在……前面"
      },
      {
        "promptLang": "vi",
        "prompt": "Phía trước có một cửa hàng.",
        "answer": "前面有一个商店。",
        "answerPy": "Qiánmiàn yǒu yí ge shāngdiàn.",
        "note": "前面有 — phía trước có.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 8,
    "zh": "后面",
    "py": "hòumiàn",
    "pos": "Danh từ",
    "vn": "phía sau",
    "hv": "hậu diện",
    "em": "👈",
    "lesson": 2,
    "ex_zh": "后面那个人呢？",
    "ex_py": "Hòumiàn nàge rén ne?",
    "ex_vn": "Còn người ở phía sau?",
    "exList": [
      {
        "zh": "后面那个人呢？",
        "py": "Hòumiàn nàge rén ne?",
        "vn": "Còn người ở phía sau?"
      }
    ],
    "hanzi": [
      {
        "c": "后",
        "p": "hòu",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "厂(biến thể) → 口(khẩu) trong",
        "rad": "口 (khẩu – miệng)",
        "mean": "sau, phía sau",
        "tip": "Hình người đứng sau ra lệnh → chỉ vị trí PHÍA SAU, thời gian SAU. (面 đã học ở Bài 9)",
        "cf": "厚 (hòu – \"dày\")",
        "w": "后面 / 以后"
      }
    ],
    "colloFull": [
      {
        "zh": "学校后面",
        "py": "xuéxiào hòumiàn",
        "vn": "sau trường"
      },
      {
        "zh": "医院后面",
        "py": "yīyuàn hòumiàn",
        "vn": "sau bệnh viện"
      },
      {
        "zh": "在后面",
        "py": "zài hòumiàn",
        "vn": "ở phía sau"
      },
      {
        "zh": "后面有",
        "py": "hòumiàn yǒu",
        "vn": "phía sau có"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 后面",
        "m": "Phía sau cái gì"
      },
      {
        "s": "前面 · 后面 · 上 · 里 · 下面 — nhóm từ chỉ vị trí, đều đứng SAU danh từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cửa hàng ở phía sau bệnh viện.",
        "answer": "商店在医院后面。",
        "answerPy": "Shāngdiàn zài yīyuàn hòumiàn.",
        "note": "医院后面 — sau bệnh viện.",
        "pair": "在……后面"
      },
      {
        "promptLang": "vi",
        "prompt": "Phía sau trường có gì?",
        "answer": "学校后面有什么？",
        "answerPy": "Xuéxiào hòumiàn yǒu shénme?",
        "note": "Câu hỏi có 什么 thì không thêm 吗.",
        "pair": "……有什么？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "这儿",
    "py": "zhèr",
    "pos": "Đại từ",
    "vn": "chỗ này, ở đây",
    "hv": "giá nhi",
    "em": "📍",
    "lesson": 3,
    "ex_zh": "我能坐这儿吗？",
    "ex_py": "Wǒ néng zuò zhèr ma?",
    "ex_vn": "Tôi có thể ngồi ở đây được không?",
    "exList": [
      {
        "zh": "我能坐这儿吗？",
        "py": "Wǒ néng zuò zhèr ma?",
        "vn": "Tôi có thể ngồi ở đây được không?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "在这儿",
        "py": "zài zhèr",
        "vn": "ở đây"
      },
      {
        "zh": "这儿的人",
        "py": "zhèr de rén",
        "vn": "người ở đây"
      },
      {
        "zh": "这儿有",
        "py": "zhèr yǒu",
        "vn": "ở đây có"
      },
      {
        "zh": "这儿的商店",
        "py": "zhèr de shāngdiàn",
        "vn": "cửa hàng ở đây"
      }
    ],
    "patterns": [
      {
        "s": "在 + 这儿",
        "m": "Ở đây"
      },
      {
        "s": "这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời thầy ngồi đây ạ.",
        "answer": "老师，请坐这儿。",
        "answerPy": "Lǎoshī, qǐng zuò zhèr.",
        "note": "请坐 — mời ngồi, câu lịch sự.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Ở đây không có máy tính.",
        "answer": "这儿没有电脑。",
        "answerPy": "Zhèr méiyǒu diànnǎo.",
        "note": "这儿 — chỗ này, gần người nói.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 10,
    "zh": "没有",
    "py": "méiyǒu",
    "pos": "Phó từ",
    "vn": "không có",
    "hv": "một hữu",
    "em": "🚫",
    "lesson": 3,
    "ex_zh": "这儿有人吗？没有。",
    "ex_py": "Zhèr yǒu rén ma? Méiyǒu.",
    "ex_vn": "Chỗ này có ai ngồi chưa? Chưa.",
    "exList": [
      {
        "zh": "这儿有人吗？没有。",
        "py": "Zhèr yǒu rén ma? Méiyǒu.",
        "vn": "Chỗ này có ai ngồi chưa? Chưa."
      }
    ],
    "hanzi": [
      {
        "c": "没",
        "p": "méi",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "氵(thuỷ) trái → 殳(biến thể) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "không, không có",
        "tip": "氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ. (有 đã học ở Bài 5)",
        "cf": "汉 (hàn – \"Hán\", cũng có bộ 氵\")",
        "w": "没有 / 没关系"
      }
    ],
    "colloFull": [
      {
        "zh": "没有电脑",
        "py": "méiyǒu diànnǎo",
        "vn": "không có máy tính"
      },
      {
        "zh": "没有钱",
        "py": "méiyǒu qián",
        "vn": "không có tiền"
      },
      {
        "zh": "没有人",
        "py": "méiyǒu rén",
        "vn": "không có ai"
      },
      {
        "zh": "家里没有",
        "py": "jiā li méiyǒu",
        "vn": "trong nhà không có"
      }
    ],
    "patterns": [
      {
        "s": "没有 + danh từ",
        "m": "Phủ định của 有 LUÔN là 没有"
      },
      {
        "s": "✗ 不有电脑 → ✓ 没有电脑"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi không có tiền.",
        "answer": "我没有钱。",
        "answerPy": "Wǒ méiyǒu qián.",
        "note": "Không nói 不有, chỉ nói 没有.",
        "pair": "没有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong nhà không có ai.",
        "answer": "家里没有人。",
        "answerPy": "Jiā li méiyǒu rén.",
        "note": "没有人 — không có ai.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 11,
    "zh": "能",
    "py": "néng",
    "pos": "Động từ năng nguyện",
    "vn": "có thể",
    "hv": "năng",
    "em": "✅",
    "lesson": 3,
    "ex_zh": "我能坐这儿吗？",
    "ex_py": "Wǒ néng zuò zhèr ma?",
    "ex_vn": "Tôi có thể ngồi ở đây được không?",
    "exList": [
      {
        "zh": "我能坐这儿吗？",
        "py": "Wǒ néng zuò zhèr ma?",
        "vn": "Tôi có thể ngồi ở đây được không?"
      }
    ],
    "hanzi": [
      {
        "c": "能",
        "p": "néng",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "厶月(biến thể) trái → 匕匕(biến thể) phải",
        "rad": "月 (nhục – thịt, biến thể)",
        "mean": "có thể",
        "tip": "Hình con gấu mạnh mẽ (chữ cổ) → biểu tượng NĂNG LỰC, khả năng làm được việc gì = CÓ THỂ.",
        "cf": "熊 (xióng – \"con gấu\", cùng gốc\")",
        "w": "我能坐这儿吗"
      }
    ],
    "colloFull": [
      {
        "zh": "能坐",
        "py": "néng zuò",
        "vn": "có thể ngồi"
      },
      {
        "zh": "能去",
        "py": "néng qù",
        "vn": "có thể đi"
      },
      {
        "zh": "不能",
        "py": "bù néng",
        "vn": "không thể"
      },
      {
        "zh": "能看书",
        "py": "néng kàn shū",
        "vn": "có thể đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 能 + động từ",
        "m": "Có thể làm gì — do hoàn cảnh cho phép"
      },
      {
        "s": "能 (hoàn cảnh cho phép) ≠ 会 (học rồi nên biết làm)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có thể ngồi đây không?",
        "answer": "我能坐这儿吗？",
        "answerPy": "Wǒ néng zuò zhèr ma?",
        "note": "能 chỉ hoàn cảnh cho phép làm gì.",
        "pair": "能 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi không đi được.",
        "answer": "今天下午我不能去。",
        "answerPy": "Jīntiān xiàwǔ wǒ bù néng qù.",
        "note": "不能 — không thể, do hoàn cảnh không cho phép.",
        "pair": "不能 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "坐",
    "py": "zuò",
    "pos": "Động từ",
    "vn": "ngồi",
    "hv": "tọa",
    "em": "🪑",
    "lesson": 3,
    "ex_zh": "请坐。",
    "ex_py": "Qǐng zuò.",
    "ex_vn": "Mời ngồi.",
    "exList": [
      {
        "zh": "请坐。",
        "py": "Qǐng zuò.",
        "vn": "Mời ngồi."
      }
    ],
    "hanzi": [
      {
        "c": "坐",
        "p": "zuò",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "从(biến thể) trên → 土(thổ) dưới",
        "rad": "土 (thổ – đất)",
        "mean": "ngồi",
        "tip": "从(hai người) ngồi trên 土(đất/ghế) → NGỒI.",
        "cf": "座 (zuò – \"chỗ ngồi\", danh từ tương ứng\")",
        "w": "请坐 / 能坐这儿"
      }
    ],
    "colloFull": [
      {
        "zh": "坐这儿",
        "py": "zuò zhèr",
        "vn": "ngồi đây"
      },
      {
        "zh": "坐椅子",
        "py": "zuò yǐzi",
        "vn": "ngồi ghế"
      },
      {
        "zh": "请坐",
        "py": "qǐng zuò",
        "vn": "mời ngồi"
      },
      {
        "zh": "能坐",
        "py": "néng zuò",
        "vn": "có thể ngồi"
      }
    ],
    "patterns": [
      {
        "s": "请 + 坐",
        "m": "Mời ngồi — câu lịch sự rất hay dùng"
      },
      {
        "s": "坐 gồm hai chữ 人 ngồi trên mặt đất (土)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời ngồi ạ!",
        "answer": "请坐！",
        "answerPy": "Qǐng zuò!",
        "note": "Câu mời khách rất hay dùng.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ấy ngồi phía sau tôi.",
        "answer": "他坐在我后面。",
        "answerPy": "Tā zuò zài wǒ hòumiàn.",
        "note": "坐在 + nơi chốn — ngồi ở đâu.",
        "pair": "坐在……"
      }
    ]
  }
];

const wuData = [
  {img:'🖥️',label:'电脑',py:'diànnǎo',letter:'A'},
  {img:'🍽️',label:'桌子',py:'zhuōzi',letter:'B'},
  {img:'👉',label:'前面',py:'qiánmiàn',letter:'C'},
  {img:'👈',label:'后面',py:'hòumiàn',letter:'D'},
  {img:'🪑',label:'坐',py:'zuò',letter:'E'},
  {img:'📦',label:'里',py:'li',letter:'F'},
];

var dialogData = [
  {scene:'Trong văn phòng · Đồ vật trên bàn',
   lines:[
     {sp:0,zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
     {sp:1,zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
     {sp:0,zh:'杯子在哪儿？',py:'Bēizi zài nǎr?',vn:'Vậy cái ly đâu?'},
     {sp:1,zh:'杯子在桌子里。',py:'Bēizi zài zhuōzi li.',vn:'Ở trong bàn.'},
   ]},
  {scene:'Ở phòng tập thể dục · Hỏi tên người',
   lines:[
     {sp:0,zh:'前面那个人叫什么名字？',py:'Qiánmiàn nàge rén jiào shénme míngzi?',vn:'Người ở phía trước tên gì vậy?'},
     {sp:1,zh:'她叫王方，在医院工作。',py:'Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.',vn:'Cô ấy tên là Vương Phương, làm việc ở bệnh viện.'},
     {sp:0,zh:'后面那个人呢？他叫什么名字？',py:'Hòumiàn nàge rén ne? Tā jiào shénme míngzi?',vn:'Còn người ở phía sau? Anh ấy tên gì?'},
     {sp:1,zh:'他叫谢朋，在商店工作。',py:'Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.',vn:'Anh ấy tên Tạ Bằng, làm việc ở cửa hàng.'},
   ]},
  {scene:'Ở thư viện · Xin phép ngồi',
   lines:[
     {sp:0,zh:'这儿有人吗？',py:'Zhèr yǒu rén ma?',vn:'Chỗ này có ai ngồi chưa?'},
     {sp:1,zh:'没有。',py:'Méiyǒu.',vn:'Chưa.'},
     {sp:0,zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
     {sp:1,zh:'请坐。',py:'Qǐng zuò.',vn:'Mời ngồi.'},
   ]},
];

// Điền từ — đổi đồ vật/địa điểm so với bài khoá
var fillData = [
  {pre:'Bạn hỏi trên bàn có gì: “桌子',blank:'上',post:'有什么？”',hint:'(trên, phía trên)',ans:'上'},
  {pre:'Bạn nói có sách và máy tính: “桌子上有一本书',blank:'和',post:'一个电脑。”',hint:'(và)',ans:'和'},
  {pre:'Bạn nói tiền để trong ngăn bàn: “钱在桌子',blank:'里',post:'。”',hint:'(trong, bên trong)',ans:'里'},
  {pre:'Bạn hỏi tên người đứng phía trước: “',blank:'前面',post:'那个人叫什么名字？”',hint:'(phía trước)',ans:'前面'},
  {pre:'Bạn hỏi tên người đứng phía sau: “',blank:'后面',post:'那个人叫什么名字？”',hint:'(phía sau)',ans:'后面'},
  {pre:'Bạn nói chỗ này chưa có ai: “这儿',blank:'没有',post:'人。”',hint:'(không có)',ans:'没有'},
  {pre:'Bạn xin phép ngồi: “我',blank:'能',post:'坐这儿吗？”',hint:'(có thể)',ans:'能'},
  {pre:'Bạn mời người khác ngồi: “请',blank:'坐',post:'。”',hint:'(ngồi)',ans:'坐'},
];

// Sắp xếp — đổi câu chữ/đồ vật so với bài khoá
var sortData = [
  {words:['桌子','上','有','一','个','电脑','。'],ans:'桌子上有一个电脑。',audio:'桌子上有一个电脑。'},
  {words:['钱','在','桌子','里','。'],ans:'钱在桌子里。',audio:'钱在桌子里。'},
  {words:['前面','那个','人','叫','什么','名字','？'],ans:'前面那个人叫什么名字？',audio:'前面那个人叫什么名字？'},
  {words:['她','在','医院','工作','。'],ans:'她在医院工作。',audio:'她在医院工作。'},
  {words:['这儿','有','人','吗','？'],ans:'这儿有人吗？',audio:'这儿有人吗？'},
  {words:['我','能','坐','这儿','吗','？'],ans:'我能坐这儿吗？',audio:'我能坐这儿吗？'},
];

var matchData = [
  {left:'桌子上有什么？',right:'桌子上有一个电脑和一本书。'},
  {left:'杯子在哪儿？',right:'杯子在桌子里。'},
  {left:'前面那个人叫什么名字？',right:'她叫王方，在医院工作。'},
  {left:'这儿有人吗？',right:'没有。'},
  {left:'我能坐这儿吗？',right:'请坐。'},
];

// Trắc nghiệm — trọng tâm 和/没有/能, không audio
var mcData = [
  {q:'桌子＿＿有什么？',opts:['上','下','里','和'],ans:0},
  {q:'桌子上有一本书＿＿一个电脑。',opts:['和','是','有','在'],ans:0},
  {q:'钱在桌子＿＿。',opts:['里','上','和','能'],ans:0},
  {q:'"能" nghĩa là gì?',opts:['có thể','muốn','biết','cần'],ans:0},
  {q:'"没有" là phủ định của từ nào?',opts:['有','是','在','能'],ans:0},
  {q:'"这儿有人吗？" — trả lời phủ định đúng là?',opts:['没有','不有','不是','没是'],ans:0},
  {q:'"前面" nghĩa là gì?',opts:['phía trước','phía sau','bên trong','bên trên'],ans:0},
  {q:'"后面" nghĩa là gì?',opts:['phía sau','phía trước','bên trong','bên dưới'],ans:0},
  {q:'Xin phép ngồi lịch sự dùng cấu trúc nào?',opts:['能……吗？','要……吗？','是……吗？','有……吗？'],ans:0},
  {q:'"电脑" nghĩa là gì?',opts:['máy vi tính','điện thoại','sách','bàn'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
      {zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
      {zh:'前面那个人叫什么名字？',py:'Qiánmiàn nàge rén jiào shénme míngzi?',vn:'Người ở phía trước tên gì vậy?'},
      {zh:'这儿有人吗？',py:'Zhèr yǒu rén ma?',vn:'Chỗ này có ai ngồi chưa?'},
      {zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'桌子上有一个＿＿。',frame_py:'Zhuōzi shang yǒu yí ge ___.',vn:'Trên bàn có một cái ＿＿.',options:['电脑','杯子'],samples:['桌子上有一个电脑。','桌子上有一个杯子。']},
      {frame:'桌子＿＿有钱。',frame_py:'Zhuōzi ___ yǒu qián.',vn:'＿＿ bàn có tiền.',options:['里','上'],samples:['桌子里有钱。','桌子上有钱。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'💻 Tình huống 1 — Miêu tả đồ vật trên bàn làm việc',
       guide:'Đồng nghiệp hỏi bạn trên bàn làm việc của bạn có những gì.',
       structure:['桌子上有什么？','桌子上有一个＿＿和一本＿＿。'],
       sample:'桌子上有什么？桌子上有一个电脑和一本书。',
       sample_vn:'Trên bàn có gì vậy? Có một chiếc máy vi tính và một quyển sách.',
       note:'Liên từ 和 chỉ dùng để nối DANH TỪ với danh từ (电脑 和 书) — không dùng để nối hai câu hoàn chỉnh như "và" trong tiếng Việt.'},
      {role:'🏋️ Tình huống 2 — Hỏi tên người lạ trong phòng tập',
       guide:'Bạn muốn hỏi tên hai người đang đứng trước và sau bạn trong phòng tập thể dục.',
       structure:['前面那个人叫什么名字？','后面那个人呢？'],
       sample:'前面那个人叫什么名字？后面那个人呢？',
       sample_vn:'Người ở phía trước tên gì vậy? Còn người ở phía sau?',
       note:'前面/后面 + 那个人 là cách chỉ người một cách LỊCH SỰ khi chưa biết tên, thường dùng khi mô tả vị trí tương đối trong đám đông.'},
      {role:'📚 Tình huống 3 — Xin phép ngồi ở thư viện',
       guide:'Bạn vào thư viện và thấy một chỗ trống, hãy hỏi xem có ai ngồi chưa và xin phép ngồi.',
       structure:['这儿有人吗？','我能坐这儿吗？'],
       sample:'这儿有人吗？没有。我能坐这儿吗？请坐。',
       sample_vn:'Chỗ này có ai ngồi chưa? Chưa. Tôi có thể ngồi ở đây được không? Mời ngồi.',
       note:'能……吗？ là cách xin phép LỊCH SỰ rất thông dụng — dùng được trong hầu hết tình huống xin phép hàng ngày, không chỉ riêng việc ngồi.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 10 + ôn lại từ bài 1-9
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trên bàn có một máy tính và một quyển sách.', zh:'桌子上有一个电脑和一本书。', py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.'},
  {vi:'Tôi có thể ngồi đây không?', zh:'我能坐这儿吗？', py:'Wǒ néng zuò zhèr ma?'},
  {vi:'Trong bàn không có tiền.', zh:'桌子里没有钱。', py:'Zhuōzi lǐ méiyǒu qián.'},
  {vi:'Mời ngồi!', zh:'请坐！', py:'Qǐng zuò!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Trên bàn có cốc, trong bàn không có tiền.', zh:'桌子上有杯子，桌子里没有钱。', py:'Zhuōzi shang yǒu bēizi, zhuōzi lǐ méiyǒu qián.'},
  {vi:'Tôi có thể ngồi đây không? Mời ngồi!', zh:'我能坐这儿吗？请坐！', py:'Wǒ néng zuò zhèr ma? Qǐng zuò!'},
  {vi:'Phía trước bệnh viện có cửa hàng máy tính.', zh:'医院前面有电脑商店。', py:'Yīyuàn qiánmiàn yǒu diànnǎo shāngdiàn.'},
  {vi:'Sách và cốc của bạn ở trên bàn.', zh:'你的书和杯子在桌子上。', py:'Nǐ de shū hé bēizi zài zhuōzi shang.'},
];
