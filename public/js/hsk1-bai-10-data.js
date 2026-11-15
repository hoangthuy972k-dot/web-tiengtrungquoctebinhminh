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
      },
      {
        "zh": "我的书在桌子上。",
        "py": "Wǒ de shū zài zhuōzi shang.",
        "vn": "Sách của tôi ở trên bàn."
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
      },
      {
        "zh": "桌子上有一个杯子。",
        "py": "Zhuōzi shang yǒu yí ge bēizi.",
        "vn": "Trên bàn có một cái cốc."
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
      },
      {
        "zh": "我想买一个电脑。",
        "py": "Wǒ xiǎng mǎi yí ge diànnǎo.",
        "vn": "Tôi muốn mua một cái máy tính."
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
      },
      {
        "zh": "我和妈妈去商店。",
        "py": "Wǒ hé māma qù shāngdiàn.",
        "vn": "Tôi và mẹ đi cửa hàng."
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
      },
      {
        "zh": "我想买三本书。",
        "py": "Wǒ xiǎng mǎi sān běn shū.",
        "vn": "Tôi muốn mua ba quyển sách."
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
      },
      {
        "zh": "小猫在家里。",
        "py": "Xiǎo māo zài jiā li.",
        "vn": "Con mèo ở trong nhà."
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
      },
      {
        "zh": "学校前面有一个商店。",
        "py": "Xuéxiào qiánmiàn yǒu yí ge shāngdiàn.",
        "vn": "Phía trước trường có một cửa hàng."
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
      },
      {
        "zh": "小狗在我后面。",
        "py": "Xiǎo gǒu zài wǒ hòumiàn.",
        "vn": "Con chó nhỏ ở phía sau tôi."
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
      },
      {
        "zh": "你的杯子在这儿。",
        "py": "Nǐ de bēizi zài zhèr.",
        "vn": "Cốc của bạn ở đây."
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
      },
      {
        "zh": "桌子上没有书。",
        "py": "Zhuōzi shang méiyǒu shū.",
        "vn": "Trên bàn không có sách."
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
      },
      {
        "zh": "我能看看你的书吗？",
        "py": "Wǒ néng kànkan nǐ de shū ma?",
        "vn": "Tôi xem sách của bạn một chút được không?"
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
      },
      {
        "zh": "请坐，请喝茶。",
        "py": "Qǐng zuò, qǐng hē chá.",
        "vn": "Mời ngồi, mời uống trà."
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

// Điền từ — mỗi câu một tình huống mới; ôn 在/哪儿/下面 (bài 9), 几/有 (bài 5), 多少钱/这个 (bài 8)
var fillData = [
  {pre:'“妈妈，小猫呢？” — “你看，小猫在电脑',blank:'上',post:'！”',hint:'(trên, phía trên)',ans:'上',exp:'电脑上 = trên máy tính; danh từ + 上 = trên …, ngược với 下面 (bài 9).'},
  {pre:'Anh Vương giới thiệu các con: “我有一个儿子',blank:'和',post:'一个女儿。”',hint:'(và)',ans:'和',exp:'和 nối hai danh từ: 一个儿子和一个女儿.'},
  {pre:'Mới vào trường, bạn hỏi anh khóa trên: “学校',blank:'里',post:'有商店吗？”',hint:'(trong, bên trong)',ans:'里',exp:'学校里 = trong trường; nơi chốn + 里 + 有 + vật = trong … có ….'},
  {pre:'Ở hiệu sách, bạn hỏi bạn mình: “你想买几',blank:'本',post:'书？”',hint:'(lượng từ của sách)',ans:'本',exp:'Sách dùng lượng từ 本, không dùng 个: 几本书.'},
  {pre:'Bạn hỏi: “你家有猫吗？” — Nhà bạn ấy chỉ nuôi chó: “',blank:'没有',post:'，我家有狗。”',hint:'(không có)',ans:'没有',exp:'Phủ định của 有 là 没有, không nói 不有.'},
  {pre:'Bạn thấy mệt, xin phép cô giáo: “老师，我',blank:'能',post:'去医院吗？”',hint:'(có thể, được phép)',ans:'能',exp:'Xin phép dùng 能 + động từ + 吗？; 会 là biết làm (kỹ năng), không dùng để xin phép.'},
  {pre:'Vào phòng máy, bạn của bạn hỏi: “你想坐哪儿？” — “我想',blank:'坐',post:'那儿，电脑前面。”',hint:'(ngồi)',ans:'坐',exp:'坐 + nơi chốn = ngồi ở …: 坐那儿 = ngồi chỗ kia.'},
  {pre:'Người lạ hỏi đường, bạn chỉ tay: “商店在医院',blank:'前面',post:'。”',hint:'(phía trước)',ans:'前面',exp:'Nơi chốn + 前面 = phía trước …; 医院前面 = phía trước bệnh viện (từ chỉ hướng đứng sau).'},
  {pre:'Trong lớp, bạn chỉ người ngồi sau lưng bạn mình: “你',blank:'后面',post:'那个学生是谁？” — “她是我的同学李月。”',hint:'(phía sau)',ans:'后面',exp:'你后面 = phía sau bạn; không nói 后面你 theo kiểu tiếng Việt.'},
  {pre:'Ở cửa hàng, bạn chỉ chiếc máy tính: “这个',blank:'电脑',post:'多少钱？”',hint:'(máy vi tính)',ans:'电脑',exp:'电脑 = máy vi tính; hỏi giá: 这个 + đồ vật + 多少钱？'},
  {pre:'“爸爸，我的汉语书在哪儿？” — “',blank:'桌子',post:'里没有吗？”',hint:'(cái bàn)',ans:'桌子',exp:'桌子里 = trong ngăn bàn; đồ vật + 里/上 mới thành nơi chốn.'},
  {pre:'Bạn đến quán trước, vẫy tay gọi bạn mình: “李月，我在',blank:'这儿',post:'！”',hint:'(ở đây, chỗ này)',ans:'这儿',exp:'这儿 = chỗ này, ở đây; 那儿 = chỗ kia.'},
];

// Sắp xếp — mỗi câu một mẫu khác: 有 tồn tại, 和, 能 + 在 nơi chốn, 请, 的, 不能
var sortData = [
  {words:['医院','里','有','很','多','人','。'],ans:'医院里有很多人。',audio:'医院里有很多人。'},
  {words:['我','想','买','一个','杯子','和','两','本','书','。'],ans:'我想买一个杯子和两本书。',audio:'我想买一个杯子和两本书。'},
  {words:['我','能','在','这儿','写','汉字','吗','？'],ans:'我能在这儿写汉字吗？',audio:'我能在这儿写汉字吗？'},
  {words:['桌子','前面','没有','椅子','。'],ans:'桌子前面没有椅子。',audio:'桌子前面没有椅子。'},
  {words:['李老师','，','请','看','这儿','。'],ans:'李老师，请看这儿。',audio:'李老师，请看这儿。'},
  {words:['桌子','上','的','电脑','是','谁','的','？'],ans:'桌子上的电脑是谁的？',audio:'桌子上的电脑是谁的？'},
  {words:['星期三','下午','我','不能','去','学校','。'],ans:'星期三下午我不能去学校。',audio:'星期三下午我不能去学校。'},
];

// Nối — câu hỏi ↔ câu trả lời (không trùng câu ở các phần khác)
var matchData = [
  {left:'你家有几口人？',right:'三口人：爸爸、妈妈和我。'},
  {left:'你的狗在哪儿？',right:'在我爸爸那儿。'},
  {left:'这儿能坐吗？',right:'能，请坐。'},
  {left:'桌子里有什么？',right:'两本书和一个杯子。'},
  {left:'那个人是谁？',right:'我的汉语老师。'},
  {left:'椅子多少钱？',right:'九十块。'},
];

// Trắc nghiệm — chọn câu đúng tình huống / câu đáp / câu sai; không hỏi lý thuyết
var mcData = [
  {q:'Bạn muốn nói: “Trên bàn có hai quyển sách.”',opts:['桌子上有两本书。','桌子上有二本书。','两本书有桌子上。','桌子上是两个书。'],ans:0,exp:'Nơi chốn + 有 + số + lượng từ + vật; số 2 trước lượng từ là 两; sách dùng 本.'},
  {q:'Câu nào SAI?',opts:['他家不有电脑。','我没有汉语书。','这儿没有人。','猫在桌子下面。'],ans:0,exp:'Phủ định của 有 luôn là 没有, không bao giờ dùng 不有: 他家没有电脑.'},
  {q:'Bạn muốn nói: “Bố và mẹ tôi làm việc ở bệnh viện.”',opts:['我爸爸和妈妈在医院工作。','我爸爸和妈妈工作在医院。','我爸爸妈妈和在医院工作。','我爸爸在医院工作和妈妈。'],ans:0,exp:'和 đứng giữa hai danh từ (爸爸和妈妈); 在 + nơi chốn đặt trước động từ 工作.'},
  {q:'Bạn khát nước, thấy trên bàn có trà của bạn cùng phòng. Bạn hỏi:',opts:['我能喝你的茶吗？','我会喝你的茶吗？','我能喝你的茶呢？','我喝能你的茶吗？'],ans:0,exp:'Xin phép: 能 + động từ + 吗？; 会 là biết làm (kỹ năng); câu hỏi có/không dùng 吗, không dùng 呢.'},
  {q:'A: “你有汉语书吗？” — B không có sách, B đáp:',opts:['没有。我想买一本。','不有。我想买一本。','没有。我想买一个。','不是。我想买一本。'],ans:0,exp:'Trả lời phủ định câu hỏi với 有 dùng 没有 (không dùng 不有/不是); sách dùng lượng từ 本.'},
  {q:'“你的书在哪儿？” — Sách nằm trong ngăn bàn. Bạn đáp:',opts:['在桌子里。','在桌子。','有桌子里。','桌子里在。'],ans:0,exp:'Đồ vật (桌子) phải thêm 里/上 mới thành nơi chốn: 在桌子里; “ở” là 在, không phải 有.'},
  {q:'Câu nào SAI?',opts:['桌子上在一个杯子。','我的杯子在桌子上。','桌子上有一个杯子。','这个杯子是我妈妈的。'],ans:0,exp:'Nơi chốn + 有 + vật (桌子上有一个杯子); vật + 在 + nơi chốn (杯子在桌子上). Không nói 桌子上在….'},
  {q:'Bạn muốn nói: “Con chó ở phía sau ghế.”',opts:['狗在椅子后面。','狗在后面椅子。','狗有椅子后面。','椅子后面在狗。'],ans:0,exp:'Vật + 在 + nơi chốn; từ chỉ hướng (后面) đứng SAU danh từ: 椅子后面 = phía sau ghế (ngược tiếng Việt).'},
  {q:'Thầy giáo đến chơi, bạn mời thầy ngồi và uống trà:',opts:['老师，请坐，请喝茶。','老师，坐请，喝茶请。','老师，我能坐，我能喝茶。','老师，对不起，请坐。'],ans:0,exp:'Mời ai làm gì: 请 + động từ (请坐、请喝茶), 请 đứng TRƯỚC động từ; 能 là xin phép cho mình; không có lỗi gì thì không cần 对不起.'},
  {q:'Cô giáo hỏi: “明天你能去学校吗？” — Ngày mai bạn phải đi bệnh viện. Bạn đáp:',opts:['不能，明天我去医院。','没有，明天我去医院。','不会，明天我去医院。','能不，明天我去医院。'],ans:0,exp:'Phủ định của 能 là 不能; 不会 = không biết (kỹ năng); 没有 là phủ định của 有.'},
  {q:'Câu nào SAI?',opts:['我会说汉语和我会写汉字。','我有一个中国朋友和一个美国朋友。','她的猫和狗在家里。','这儿有茶和米饭。'],ans:0,exp:'和 chỉ nối danh từ với danh từ, không nối hai câu như chữ “và” tiếng Việt; nối hai câu chỉ cần dấu phẩy: 我会说汉语，会写汉字.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý: 上 và 里 sau danh từ đọc nhẹ (zhuōzi shang, bēizi li).',
    models:[
      {zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Trên bàn có một chiếc máy vi tính và một quyển sách.'},
      {zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi ngồi đây được không?'},
      {zh:'我朋友家没有电脑。',py:'Wǒ péngyou jiā méiyǒu diànnǎo.',vn:'Nhà bạn tôi không có máy vi tính.'},
      {zh:'请写你的名字。',py:'Qǐng xiě nǐ de míngzi.',vn:'Mời bạn viết tên của mình.'},
      {zh:'你的杯子在电脑前面。',py:'Nǐ de bēizi zài diànnǎo qiánmiàn.',vn:'Cái cốc của bạn ở phía trước máy tính.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'商店里没有＿＿。',frame_py:'Shāngdiàn li méiyǒu ___.',vn:'Trong cửa hàng không có ＿＿.',options:['杯子','电脑','茶'],samples:['商店里没有杯子。','商店里没有电脑。','商店里没有茶。']},
      {frame:'我能＿＿吗？',frame_py:'Wǒ néng ___ ma?',vn:'Tôi ＿＿ được không? (xin phép)',options:['看看你的猫','写这个字','买这个杯子'],samples:['我能看看你的猫吗？','我能写这个字吗？','我能买这个杯子吗？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🖥️ Tình huống 1 — Tả bàn học của bạn',
       guide:'Một người bạn gọi video và hỏi trên bàn học của bạn có gì. Hãy kể 2–3 đồ vật, dùng 有 và 和.',
       structure:['桌子上有＿＿和＿＿。','桌子里有＿＿。'],
       sample:'我的桌子上有电脑和杯子，桌子里有汉语书。',
       sample_vn:'Trên bàn tôi có máy tính và cái cốc, trong ngăn bàn có sách tiếng Trung.',
       note:'Người Việt hay nói “có một cái máy tính trên bàn” rồi dịch thành 有一个电脑桌子上 — sai. Tiếng Trung đặt nơi chốn LÊN ĐẦU: 桌子上有…….'},
      {role:'🏠 Tình huống 2 — Đến nhà bạn chơi',
       guide:'Bạn đến nhà một người bạn Trung Quốc. Hãy xin phép xem một quyển sách, rồi đóng vai chủ nhà trả lời và mời.',
       structure:['我能＿＿吗？','能，请＿＿。'],
       sample:'我能看看这本汉语书吗？——能，请看。',
       sample_vn:'Mình xem quyển sách tiếng Trung này được không? — Được, cậu xem đi.',
       note:'Trả lời câu hỏi 能……吗？ chỉ cần 能 hoặc 不能; muốn mời người khác thì dùng 请 + động từ.'},
      {role:'🧑‍🤝‍🧑 Tình huống 3 — Giới thiệu bạn ngồi trước, sau bạn',
       guide:'Trong lớp tiếng Trung, hãy giới thiệu người ngồi phía trước và phía sau bạn (tên, nghề nghiệp hoặc quốc tịch).',
       structure:['我前面是＿＿。','我后面＿＿。'],
       sample:'我前面是王方，她是医生。我后面没有人。',
       sample_vn:'Phía trước tôi là Vương Phương, cô ấy là bác sĩ. Phía sau tôi không có ai.',
       note:'前面/后面 đứng SAU người hoặc vật làm mốc: 我前面 = phía trước tôi (không nói 前面我).'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 10 + ôn lại từ bài 1-9
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trong cốc có trà, mời bạn uống.', zh:'杯子里有茶，请喝。', py:'Bēizi li yǒu chá, qǐng hē.'},
  {vi:'Phía sau nhà tôi không có cửa hàng.', zh:'我家后面没有商店。', py:'Wǒ jiā hòumiàn méiyǒu shāngdiàn.'},
  {vi:'Ngày mai tôi không thể đi làm.', zh:'明天我不能去工作。', py:'Míngtiān wǒ bù néng qù gōngzuò.'},
  {vi:'Trên bàn có máy tính và cốc của bố tôi.', zh:'桌子上有我爸爸的电脑和杯子。', py:'Zhuōzi shang yǒu wǒ bàba de diànnǎo hé bēizi.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Trên ghế có một quyển sách, của ai vậy?', zh:'椅子上有一本书，是谁的？', py:'Yǐzi shang yǒu yì běn shū, shì shéi de?'},
  {vi:'Xin lỗi, hôm nay tớ không đến nhà cậu được.', zh:'对不起，我今天不能去你家。', py:'Duìbuqǐ, wǒ jīntiān bù néng qù nǐ jiā.'},
  {vi:'Máy tính của tôi ở đằng kia, phía sau cái cốc.', zh:'我的电脑在那儿，在杯子后面。', py:'Wǒ de diànnǎo zài nàr, zài bēizi hòumiàn.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我家有五个椅子，桌子前面有三个，后面有两个。',
   questions:[
     {q:'Phía trước bàn có mấy cái ghế?',opts:['Hai cái','Năm cái','Ba cái'],ans:2,exp:'桌子前面有三个 = phía trước bàn có ba cái; năm cái là tổng số ghế.'},
   ]},
  {audio:'请问，我能坐你前面吗？——对不起，那儿有人。',
   questions:[
     {q:'Người kia trả lời thế nào?',opts:['Mời ngồi','Không được, chỗ đó có người rồi','Không được, vì không quen'],ans:1,exp:'那儿有人 = chỗ đó có người rồi; 对不起 mở đầu lời từ chối lịch sự.'},
   ]},
  {audio:'医院前面有一个小商店，那儿有小猫和小狗。',
   questions:[
     {q:'Cửa hàng nhỏ ở đâu?',opts:['Phía trước bệnh viện','Phía sau bệnh viện','Trong trường học'],ans:0,exp:'医院前面 = phía trước bệnh viện.'},
     {q:'Ở cửa hàng có gì?',opts:['Sách và máy tính','Cốc và trà','Mèo con và chó con'],ans:2,exp:'小猫和小狗 = mèo con và chó con.'},
   ]},
  {audio:'妈妈，我能去李月家吗？——今天不能，明天能。',
   questions:[
     {q:'Khi nào bạn ấy được đến nhà Lý Nguyệt?',opts:['Hôm nay','Ngày mai','Hôm qua'],ans:1,exp:'今天不能，明天能 = hôm nay không được, ngày mai được.'},
   ]},
  {audio:'你的杯子不在桌子上，在椅子下面。',
   questions:[
     {q:'Cái cốc ở đâu?',opts:['Dưới ghế','Trên bàn','Trong ngăn bàn'],ans:0,exp:'不在桌子上 = không ở trên bàn; 在椅子下面 = ở dưới ghế.'},
   ]},
  {audio:'前面那个人是我爸爸，后面那个人是我爸爸的同学。',
   questions:[
     {q:'Người đứng phía sau là ai?',opts:['Bố của người nói','Bạn học của người nói','Bạn học của bố'],ans:2,exp:'后面那个人是我爸爸的同学 = người phía sau là bạn học của bố tôi.'},
   ]},
];

// ===== Sach bai tap (phan Doc + Chu Han, khong pinyin) =====
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài tập chép chữ theo thứ tự nét (上, 下, 本, 末) hãy luyện trong vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-10-wb/q13.jpg', prompt: '工作',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '工作: làm việc. Tranh là nhân viên cửa hàng mặc đồng phục, đeo bảng tên đang làm việc (nhận thẻ của khách) → Đúng.' },
        { n: 14, img: '/images/hsk1-bai-10-wb/q14.jpg', prompt: '电脑',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '电脑 là máy tính. Tranh là một quyển sách (书) → Sai.' },
        { n: 15, img: '/images/hsk1-bai-10-wb/q15.jpg', prompt: '请喝茶',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '请喝茶: mời uống trà. Tranh là ấm trà và hai chén trà đã rót sẵn → Đúng.' },
        { n: 16, img: '/images/hsk1-bai-10-wb/q16.jpg', prompt: '在学校',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '在学校: ở trường học. Tranh là cô gái đứng giữa các kệ hàng trong siêu thị/cửa hàng (商店) → Sai.' },
        { n: 17, img: '/images/hsk1-bai-10-wb/q17.jpg', prompt: '桌子上',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '桌子上: trên bàn. Tranh là cốc, máy tính bảng, giấy và bút đặt trên mặt bàn → Đúng.' },

        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
            { key: 'A', text: '在那儿，桌子里面。' },
            { key: 'B', text: '好，请坐。' },
            { key: 'C', text: '一个电脑和一本书。' },
            { key: 'D', text: '她叫李月，是我的汉语老师。' },
            { key: 'E', text: '不是，我后面那个人是李朋。' },
            { key: 'F', text: '好的，谢谢！' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你好，我能坐这儿吗？', answer: 'B',
          vn: 'Chào bạn, tôi có thể ngồi đây không? → B: Được, mời ngồi.' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你的杯子呢？', answer: 'A',
          vn: 'Cái cốc của bạn đâu? → A: Ở đằng kia, trong cái bàn.' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你的桌子上有什么？', answer: 'C',
          vn: 'Trên bàn của bạn có gì? → C: Một cái máy tính và một quyển sách. (nơi chốn + 有 + vật)' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你后面那个人是谁？', answer: 'D',
          vn: 'Người phía sau bạn là ai? → D: Cô ấy tên là Lý Nguyệt, là cô giáo tiếng Trung của tôi.' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你前面那个人是李朋吗？', answer: 'E',
          vn: 'Người phía trước bạn là Lý Bằng phải không? → E: Không phải, người phía sau tôi mới là Lý Bằng. (câu hỏi 吗 → trả lời 不是…)' },

        { n: 23, part: 'Phần 3 · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'A', text: '有' },
            { key: 'B', text: '在' },
            { key: 'C', text: '请' },
            { key: 'D', text: '名字' },
            { key: 'E', text: '能' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我（　）看看你的汉语书吗？', answer: 'E',
          vn: 'Tôi có thể xem sách tiếng Trung của bạn không? — 能 + động từ: có thể (xin phép).' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我爸爸今天不（　）家。', answer: 'B',
          vn: 'Hôm nay bố tôi không ở nhà. — 在家: ở nhà; phủ định 不在家.' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '您好，（　）喝茶。', answer: 'C',
          vn: 'Chào ông/bà, mời uống trà. — 请 + động từ: mời (làm gì).' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '学校里（　）一个商店。', answer: 'A',
          vn: 'Trong trường có một cửa hàng. — nơi chốn + 有 + số lượng + vật: ở đâu có cái gì.' },
        { n: 27, part: 'Phần 3 (tiếp) · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'F', text: '不' },
            { key: 'G', text: '没' },
            { key: 'H', text: '很' },
            { key: 'I', text: '多' }
          ], letters: ['F', 'G', 'H', 'I'], prompt: '你爸爸今年（　）大了？', answer: 'I',
          vn: 'Năm nay bố bạn bao nhiêu tuổi rồi? — 多大: bao nhiêu tuổi (hỏi người lớn).' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '请坐，这儿的中国菜（　）好吃。', answer: 'H',
          vn: 'Mời ngồi, món Trung Quốc ở đây rất ngon. — 很 + tính từ: rất…' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '他（　）是学生，他是老师。', answer: 'F',
          vn: 'Anh ấy không phải là học sinh, anh ấy là giáo viên. — 是 phủ định bằng 不: 不是.' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '我的桌子上（　）有电脑。', answer: 'G',
          vn: 'Trên bàn của tôi không có máy tính. — 有 phủ định bằng 没: 没有 (không dùng 不有).' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 囗?', prompt: 'Chữ nào có bộ 囗?', options: [
            { key: 'A', text: '视' }, { key: 'B', text: '团' }, { key: 'C', text: '祝' }, { key: 'D', text: '礼' }
          ], answer: 'B', vn: '团 (đoàn) có bộ 囗 (bộ vi – khung vây kín bốn phía). 视, 祝, 礼 đều có bộ 礻.' },
        { n: '1b', prompt: 'Chữ nào có bộ 囗?', options: [
            { key: 'A', text: '园' }, { key: 'B', text: '祥' }, { key: 'C', text: '视' }, { key: 'D', text: '祝' }
          ], answer: 'A', vn: '园 (vườn) có bộ 囗. 祥, 视, 祝 đều có bộ 礻.' },
        { n: '1c', prompt: 'Chữ nào có bộ 囗?', options: [
            { key: 'A', text: '礼' }, { key: 'B', text: '祝' }, { key: 'C', text: '因' }, { key: 'D', text: '祥' }
          ], answer: 'C', vn: '因 (vì, nguyên nhân) có bộ 囗. 礼, 祝, 祥 đều có bộ 礻.' },
        { n: '1d', prompt: 'Chữ nào có bộ 囗?', options: [
            { key: 'A', text: '祥' }, { key: 'B', text: '礼' }, { key: 'C', text: '视' }, { key: 'D', text: '国' }
          ], answer: 'D', vn: '国 (nước – 中国) có bộ 囗. → Các chữ có bộ 囗: 团, 园, 因, 国.' },
        { n: '2a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 礻?', prompt: 'Chữ nào có bộ 礻?', options: [
            { key: 'A', text: '团' }, { key: 'B', text: '国' }, { key: 'C', text: '视' }, { key: 'D', text: '园' }
          ], answer: 'C', vn: '视 (nhìn – trong 电视) có bộ 礻 (bộ thị) bên trái. 团, 国, 园 có bộ 囗.' },
        { n: '2b', prompt: 'Chữ nào có bộ 礻?', options: [
            { key: 'A', text: '祝' }, { key: 'B', text: '因' }, { key: 'C', text: '园' }, { key: 'D', text: '团' }
          ], answer: 'A', vn: '祝 (chúc) có bộ 礻. 因, 园, 团 có bộ 囗.' },
        { n: '2c', prompt: 'Chữ nào có bộ 礻?', options: [
            { key: 'A', text: '国' }, { key: 'B', text: '礼' }, { key: 'C', text: '团' }, { key: 'D', text: '因' }
          ], answer: 'B', vn: '礼 (lễ, quà – 礼物) có bộ 礻. 国, 团, 因 có bộ 囗.' },
        { n: '2d', prompt: 'Chữ nào có bộ 礻?', options: [
            { key: 'A', text: '因' }, { key: 'B', text: '园' }, { key: 'C', text: '国' }, { key: 'D', text: '祥' }
          ], answer: 'D', vn: '祥 (tốt lành, may mắn) có bộ 礻. → Các chữ có bộ 礻: 视, 祝, 礼, 祥.' }
      ] }
  ] }
] };
