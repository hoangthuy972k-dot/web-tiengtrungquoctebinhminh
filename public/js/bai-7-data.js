// ══════════════════════════════════════════
// DATA — Bài 7: 你家离公司远吗？
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "教室",
    "py": "jiàoshì",
    "pos": "Danh từ",
    "vn": "phòng học, lớp học",
    "hv": "giáo thất",
    "em": "🏫",
    "lesson": 1,
    "ex_zh": "他还在教室学习呢。",
    "ex_py": "Tā hái zài jiàoshì xuéxí ne.",
    "ex_vn": "Cậu ấy vẫn còn đang học ở trên lớp kìa.",
    "exList": [
      {
        "zh": "他还在教室学习呢。",
        "py": "Tā hái zài jiàoshì xuéxí ne.",
        "vn": "Cậu ấy vẫn còn đang học ở trên lớp kìa."
      },
      {
        "zh": "教室里有很多学生。",
        "py": "Jiàoshì lǐ yǒu hěn duō xuésheng.",
        "vn": "Trong lớp học có rất nhiều học sinh."
      },
      {
        "zh": "老师在教室等你。",
        "py": "Lǎoshī zài jiàoshì děng nǐ.",
        "vn": "Thầy giáo đang đợi bạn ở lớp học."
      }
    ],
    "hanzi": [
      {
        "c": "教",
        "p": "jiào",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "孝 (biến thể) trái → 攵 (phốc) phải",
        "rad": "攵 (phốc – gõ nhẹ)",
        "mean": "dạy học",
        "tip": "攵 (tay cầm roi nhẹ nhắc nhở) + 孝 → hành động DẠY DỖ.",
        "cf": "孝 (xiào, hiếu thảo)",
        "w": "教室 / 教书 / 教你"
      },
      {
        "c": "室",
        "p": "shì",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "宀 (miên) trên → 至 (chí) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "phòng",
        "tip": "Mái nhà 宀 trên 至 (đến, tới) → nơi mọi người tới, một căn PHÒNG.",
        "cf": "到 (dào, sẽ học ở cuối bài này)",
        "w": "教室 / 房室 / 卧室"
      }
    ],
    "colloFull": [
      {
        "zh": "在教室",
        "py": "zài jiàoshì",
        "vn": "ở trong lớp"
      },
      {
        "zh": "去教室",
        "py": "qù jiàoshì",
        "vn": "đến lớp học"
      },
      {
        "zh": "教室里",
        "py": "jiàoshì li",
        "vn": "trong phòng học"
      },
      {
        "zh": "新教室",
        "py": "xīn jiàoshì",
        "vn": "phòng học mới"
      }
    ],
    "patterns": [
      {
        "s": "在 + 教室 + 里",
        "m": "Ở trong phòng học"
      },
      {
        "s": "教 + 室",
        "m": "Căn phòng (室) để dạy (教)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy giáo đang ở trong phòng học.",
        "answer": "老师在教室里。",
        "answerPy": "Lǎoshī zài jiàoshì li.",
        "note": "里 đứng SAU danh từ nơi chốn.",
        "pair": "在……里"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong phòng học có hai mươi cái ghế mới.",
        "answer": "教室里有二十个新椅子。",
        "answerPy": "Jiàoshì li yǒu èrshí ge xīn yǐzi.",
        "note": "Câu tồn tại: nơi chốn đứng đầu câu.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 2,
    "zh": "机场",
    "py": "jīchǎng",
    "pos": "Danh từ",
    "vn": "sân bay",
    "hv": "cơ trường",
    "em": "✈️",
    "lesson": 2,
    "ex_zh": "我在去机场的路上。",
    "ex_py": "Wǒ zài qù jīchǎng de lùshang.",
    "ex_vn": "Tôi đang trên đường ra sân bay.",
    "exList": [
      {
        "zh": "我在去机场的路上。",
        "py": "Wǒ zài qù jīchǎng de lùshang.",
        "vn": "Tôi đang trên đường ra sân bay."
      },
      {
        "zh": "机场离这儿很远。",
        "py": "Jīchǎng lí zhèr hěn yuǎn.",
        "vn": "Sân bay cách đây rất xa."
      },
      {
        "zh": "我们在机场见面吧。",
        "py": "Wǒmen zài jīchǎng jiànmiàn ba.",
        "vn": "Chúng ta gặp nhau ở sân bay nhé."
      }
    ],
    "hanzi": [
      {
        "c": "机",
        "p": "jī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "木 (mộc) trái → 几 (kỷ) phải",
        "rad": "木 (mộc – cây, gỗ)",
        "mean": "máy móc",
        "tip": "Xưa máy móc làm bằng gỗ 木 → nghĩa MÁY. 机场 = sân bãi cho máy bay.",
        "cf": "几 (jǐ, mấy)",
        "w": "机场 / 飞机 / 手机"
      },
      {
        "c": "场",
        "p": "chǎng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "土 (thổ) trái → 场 biến thể phải",
        "rad": "土 (thổ – đất)",
        "mean": "bãi, sân",
        "tip": "Bộ 土 (đất) → khoảnh đất rộng dùng làm SÂN, BÃI.",
        "cf": "汤 (tāng, canh, bộ 氵)",
        "w": "机场 / 操场 / 广场"
      }
    ],
    "colloFull": [
      {
        "zh": "去机场",
        "py": "qù jīchǎng",
        "vn": "ra sân bay"
      },
      {
        "zh": "在机场",
        "py": "zài jīchǎng",
        "vn": "ở sân bay"
      },
      {
        "zh": "到机场",
        "py": "dào jīchǎng",
        "vn": "đến sân bay"
      },
      {
        "zh": "机场很远",
        "py": "jīchǎng hěn yuǎn",
        "vn": "sân bay rất xa"
      }
    ],
    "patterns": [
      {
        "s": "去 / 到 + 机场",
        "m": "Ra sân bay, đến sân bay"
      },
      {
        "s": "机 + 场",
        "m": "Bãi (场) cho máy bay (飞机)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối mai tôi ra sân bay đón chị tôi.",
        "answer": "明天晚上我去机场接我姐姐。",
        "answerPy": "Míngtiān wǎnshang wǒ qù jīchǎng jiē wǒ jiějie.",
        "note": "接 + người — đón ai.",
        "pair": "去 + nơi chốn + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Sân bay cách đây rất xa.",
        "answer": "机场离这儿很远。",
        "answerPy": "Jīchǎng lí zhèr hěn yuǎn.",
        "note": "离 nói khoảng cách giữa hai nơi.",
        "pair": "A 离 B 很远"
      }
    ]
  },
  {
    "n": 3,
    "zh": "路",
    "py": "lù",
    "pos": "Danh từ",
    "vn": "đường, tuyến đường",
    "hv": "lộ",
    "em": "🛣️",
    "lesson": 2,
    "ex_zh": "去机场的路上。",
    "ex_py": "Qù jīchǎng de lùshang.",
    "ex_vn": "Trên đường đi sân bay.",
    "exList": [
      {
        "zh": "去机场的路上。",
        "py": "Qù jīchǎng de lùshang.",
        "vn": "Trên đường đi sân bay."
      },
      {
        "zh": "这条路很长。",
        "py": "Zhè tiáo lù hěn cháng.",
        "vn": "Con đường này rất dài."
      },
      {
        "zh": "路上车太多了。",
        "py": "Lùshang chē tài duō le.",
        "vn": "Trên đường nhiều xe quá."
      }
    ],
    "hanzi": [
      {
        "c": "路",
        "p": "lù",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "⻊(túc) trái → 各 (các) phải",
        "rad": "⻊(túc – chân)",
        "mean": "đường",
        "tip": "Bộ ⻊(chân) → nơi đôi chân đi qua = ĐƯỜNG.",
        "cf": "露 (lù, sương, bộ 雨)",
        "w": "路上 / 走路 / 马路"
      }
    ],
    "colloFull": [
      {
        "zh": "走路",
        "py": "zǒulù",
        "vn": "đi bộ"
      },
      {
        "zh": "这条路",
        "py": "zhè tiáo lù",
        "vn": "con đường này"
      },
      {
        "zh": "路上",
        "py": "lùshang",
        "vn": "trên đường"
      },
      {
        "zh": "路很远",
        "py": "lù hěn yuǎn",
        "vn": "đường rất xa"
      }
    ],
    "patterns": [
      {
        "s": "走 + 路",
        "m": "Đi bộ — 走路 là từ ly hợp"
      },
      {
        "s": "một + 条 + 路",
        "m": "Lượng từ của 路 là 条"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con đường này rất dài, đi bộ mất một tiếng.",
        "answer": "这条路很长，走路要一个小时。",
        "answerPy": "Zhè tiáo lù hěn cháng, zǒulù yào yí ge xiǎoshí.",
        "note": "Lượng từ của 路 là 条.",
        "pair": "要 + thời lượng"
      },
      {
        "promptLang": "vi",
        "prompt": "Trên đường tôi gặp thầy giáo.",
        "answer": "路上我看见了老师。",
        "answerPy": "Lùshang wǒ kànjiànle lǎoshī.",
        "note": "路上 — trên đường đi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 4,
    "zh": "离",
    "py": "lí",
    "pos": "Giới từ",
    "vn": "cách (khoảng cách)",
    "hv": "li",
    "em": "📏",
    "lesson": 3,
    "ex_zh": "你家离公司远吗？",
    "ex_py": "Nǐ jiā lí gōngsī yuǎn ma?",
    "ex_vn": "Nhà bạn cách công ty có xa không?",
    "exList": [
      {
        "zh": "你家离公司远吗？",
        "py": "Nǐ jiā lí gōngsī yuǎn ma?",
        "vn": "Nhà bạn cách công ty có xa không?"
      },
      {
        "zh": "我家离学校很近。",
        "py": "Wǒ jiā lí xuéxiào hěn jìn.",
        "vn": "Nhà tôi cách trường học rất gần."
      },
      {
        "zh": "今天离我的生日还有一个多星期。",
        "py": "Jīntiān lí wǒ de shēngrì hái yǒu yí ge duō xīngqī.",
        "vn": "Hôm nay cách sinh nhật tôi còn hơn một tuần nữa."
      }
    ],
    "hanzi": [
      {
        "c": "离",
        "p": "lí",
        "type": "独体字 · Chữ đơn",
        "st": 10,
        "ord": "亠→凶→凵→𡿨",
        "rad": "离 (li – tự thành bộ)",
        "mean": "cách, rời xa",
        "tip": "Nghĩa gốc là \"chia lìa, rời xa\" → mở rộng thành giới từ chỉ KHOẢNG CÁCH giữa 2 điểm.",
        "cf": "难 (nán, khó)",
        "w": "离公司 / 离家 / 离开"
      }
    ],
    "colloFull": [
      {
        "zh": "离这儿",
        "py": "lí zhèr",
        "vn": "cách đây"
      },
      {
        "zh": "离学校",
        "py": "lí xuéxiào",
        "vn": "cách trường"
      },
      {
        "zh": "离家很远",
        "py": "lí jiā hěn yuǎn",
        "vn": "cách nhà rất xa"
      },
      {
        "zh": "离机场很远",
        "py": "lí jīchǎng hěn yuǎn",
        "vn": "cách sân bay rất xa"
      }
    ],
    "patterns": [
      {
        "s": "A + 离 + B + 远 / 近",
        "m": "A cách B xa hay gần"
      },
      {
        "s": "离 nói KHOẢNG CÁCH; 从 nói ĐIỂM XUẤT PHÁT"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Công ty tôi cách nhà không xa.",
        "answer": "我公司离家不远。",
        "answerPy": "Wǒ gōngsī lí jiā bù yuǎn.",
        "note": "Khung 离 luôn có hai điểm A và B.",
        "pair": "A 离 B 不远"
      },
      {
        "promptLang": "vi",
        "prompt": "Trường học cách bệnh viện bao xa?",
        "answer": "学校离医院远吗？",
        "answerPy": "Xuéxiào lí yīyuàn yuǎn ma?",
        "note": "Hỏi khoảng cách dùng 远吗.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "公司",
    "py": "gōngsī",
    "pos": "Danh từ",
    "vn": "công ty",
    "hv": "công ti",
    "em": "🏢",
    "lesson": 3,
    "ex_zh": "你家离公司远吗？",
    "ex_py": "Nǐ jiā lí gōngsī yuǎn ma?",
    "ex_vn": "Nhà bạn cách công ty có xa không?",
    "exList": [
      {
        "zh": "你家离公司远吗？",
        "py": "Nǐ jiā lí gōngsī yuǎn ma?",
        "vn": "Nhà bạn cách công ty có xa không?"
      },
      {
        "zh": "我在一家大公司工作。",
        "py": "Wǒ zài yì jiā dà gōngsī gōngzuò.",
        "vn": "Tôi làm việc ở một công ty lớn."
      },
      {
        "zh": "这是我们公司。",
        "py": "Zhè shì wǒmen gōngsī.",
        "vn": "Đây là công ty của chúng tôi."
      }
    ],
    "hanzi": [
      {
        "c": "公",
        "p": "gōng",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八 (bát) trên → 厶 (khư) dưới",
        "rad": "八 (bát)",
        "mean": "công, chung",
        "tip": "Đã học ở Bài 6 (公斤) — 公 + 司 = nơi quản lý việc chung = CÔNG TY.",
        "cf": "私 (sī, riêng tư)",
        "w": "公司 / 公斤 / 公园"
      },
      {
        "c": "司",
        "p": "sī",
        "type": "半包围 · Bán bao",
        "st": 5,
        "ord": "⼮ (gập) → 一 → 口",
        "rad": "口 (khẩu)",
        "mean": "quản lý",
        "tip": "Bộ 口 (miệng ra lệnh) → nơi có người QUẢN LÝ, điều hành.",
        "cf": "同 (tóng, giống nhau)",
        "w": "公司 / 司机"
      }
    ],
    "colloFull": [
      {
        "zh": "去公司",
        "py": "qù gōngsī",
        "vn": "đến công ty"
      },
      {
        "zh": "在公司工作",
        "py": "zài gōngsī gōngzuò",
        "vn": "làm việc ở công ty"
      },
      {
        "zh": "公司很远",
        "py": "gōngsī hěn yuǎn",
        "vn": "công ty rất xa"
      },
      {
        "zh": "到公司了",
        "py": "dào gōngsī le",
        "vn": "đã tới công ty"
      }
    ],
    "patterns": [
      {
        "s": "在 + 公司 + 工作",
        "m": "Làm việc ở công ty — nơi chốn trước động từ"
      },
      {
        "s": "公司 · 学校 · 医院 — ba nơi làm việc quen thuộc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chồng tôi làm việc ở một công ty mới.",
        "answer": "我丈夫在一个新公司工作。",
        "answerPy": "Wǒ zhàngfu zài yí ge xīn gōngsī gōngzuò.",
        "note": "Nơi chốn đứng TRƯỚC động từ.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Sáng nào tôi cũng đi xe buýt đến công ty.",
        "answer": "我每天早上都坐公共汽车到公司。",
        "answerPy": "Wǒ měi tiān zǎoshang dōu zuò gōnggòng qìchē dào gōngsī.",
        "note": "Ngồi xe thì 坐, đi xe đạp thì 骑.",
        "pair": "每……都……"
      }
    ]
  },
  {
    "n": 6,
    "zh": "远",
    "py": "yuǎn",
    "pos": "Tính từ",
    "vn": "xa",
    "hv": "viễn",
    "em": "🏞️",
    "lesson": 3,
    "ex_zh": "你家离公司远吗？",
    "ex_py": "Nǐ jiā lí gōngsī yuǎn ma?",
    "ex_vn": "Nhà bạn cách công ty có xa không?",
    "exList": [
      {
        "zh": "你家离公司远吗？",
        "py": "Nǐ jiā lí gōngsī yuǎn ma?",
        "vn": "Nhà bạn cách công ty có xa không?"
      },
      {
        "zh": "机场离这儿很远。",
        "py": "Jīchǎng lí zhèr hěn yuǎn.",
        "vn": "Sân bay cách đây rất xa."
      },
      {
        "zh": "我家不远。",
        "py": "Wǒ jiā bù yuǎn.",
        "vn": "Nhà tôi không xa."
      }
    ],
    "hanzi": [
      {
        "c": "远",
        "p": "yuǎn",
        "type": "半包围 · Bán bao (辶)",
        "st": 7,
        "ord": "元 (nguyên) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "xa",
        "tip": "Bộ 辶 (đi) + 元 → phải đi một quãng dài, xuất phát ban đầu (元) đã lùi XA.",
        "cf": "园 (yuán, vườn, bộ 囗)",
        "w": "远吗 / 很远 / 不远"
      }
    ],
    "colloFull": [
      {
        "zh": "很远",
        "py": "hěn yuǎn",
        "vn": "rất xa"
      },
      {
        "zh": "不远",
        "py": "bù yuǎn",
        "vn": "không xa"
      },
      {
        "zh": "太远了",
        "py": "tài yuǎn le",
        "vn": "xa quá"
      },
      {
        "zh": "离这儿远",
        "py": "lí zhèr yuǎn",
        "vn": "cách đây xa"
      }
    ],
    "patterns": [
      {
        "s": "A + 离 + B + 很远",
        "m": "A cách B rất xa"
      },
      {
        "s": "太……了 phải đủ hai vế: 太远了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sân bay xa quá, chúng ta đi sớm một chút đi.",
        "answer": "机场太远了，我们早一点儿走吧。",
        "answerPy": "Jīchǎng tài yuǎn le, wǒmen zǎo yìdiǎnr zǒu ba.",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi cách trường không xa, tôi thường đi bộ.",
        "answer": "我家离学校不远，我经常走路。",
        "answerPy": "Wǒ jiā lí xuéxiào bù yuǎn, wǒ jīngcháng zǒulù.",
        "note": "走路 là từ ly hợp.",
        "pair": "A 离 B 不远"
      }
    ]
  },
  {
    "n": 7,
    "zh": "公共汽车",
    "py": "gōnggòng qìchē",
    "pos": "Danh từ",
    "vn": "xe buýt công cộng",
    "hv": "công cộng khí xa",
    "em": "🚌",
    "lesson": 3,
    "ex_zh": "坐公共汽车要一个多小时呢。",
    "ex_py": "Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.",
    "ex_vn": "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.",
    "exList": [
      {
        "zh": "坐公共汽车要一个多小时呢。",
        "py": "Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.",
        "vn": "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy."
      },
      {
        "zh": "我每天坐公共汽车上班。",
        "py": "Wǒ měitiān zuò gōnggòng qìchē shàngbān.",
        "vn": "Mỗi ngày tôi đi xe buýt đi làm."
      },
      {
        "zh": "公共汽车来了。",
        "py": "Gōnggòng qìchē lái le.",
        "vn": "Xe buýt đến rồi."
      }
    ],
    "hanzi": [
      {
        "c": "公",
        "p": "gōng",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八→厶",
        "rad": "八 (bát)",
        "mean": "công cộng",
        "tip": "Lặp lại 公 (chung) — 公共 = thuộc về mọi người, CÔNG CỘNG.",
        "cf": "松 (sōng, thông, khác bộ)",
        "w": "公共汽车 / 公共场所"
      },
      {
        "c": "汽",
        "p": "qì",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "氵(thủy) trái → 气 (khí) phải",
        "rad": "氵(thủy – nước)",
        "mean": "hơi nước; ô tô",
        "tip": "Nước 氵 bốc hơi 气 → động cơ hơi nước xưa, nay chỉ chung XE Ô TÔ.",
        "cf": "气 (qì, khí, thiếu bộ 氵)",
        "w": "汽车 / 汽水"
      }
    ],
    "colloFull": [
      {
        "zh": "坐公共汽车",
        "py": "zuò gōnggòngqìchē",
        "vn": "đi xe buýt"
      },
      {
        "zh": "不坐公共汽车",
        "py": "bú zuò gōnggòngqìchē",
        "vn": "không đi xe buýt"
      },
      {
        "zh": "公共汽车很慢",
        "py": "gōnggòngqìchē hěn màn",
        "vn": "xe buýt rất chậm"
      },
      {
        "zh": "坐车去",
        "py": "zuò chē qù",
        "vn": "đi xe đến"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 公共汽车",
        "m": "Ngồi xe thì 坐; xe đạp thì 骑"
      },
      {
        "s": "公共 + 汽车",
        "m": "Xe hơi (汽车) dùng chung (公共)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xe buýt rất chậm, chúng ta đi xe đạp đi.",
        "answer": "公共汽车很慢，我们骑自行车吧。",
        "answerPy": "Gōnggòng qìchē hěn màn, wǒmen qí zìxíngchē ba.",
        "note": "坐 dùng cho xe buýt, 骑 dùng cho xe đạp.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn đi xe buýt đến trường à?",
        "answer": "你坐公共汽车来学校吗？",
        "answerPy": "Nǐ zuò gōnggòng qìchē lái xuéxiào ma?",
        "note": "坐 + phương tiện + 来 — đi bằng gì đến.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "小时",
    "py": "xiǎoshí",
    "pos": "Danh từ",
    "vn": "tiếng đồng hồ",
    "hv": "tiểu thời",
    "em": "⏰",
    "lesson": 3,
    "ex_zh": "坐公共汽车要一个多小时呢。",
    "ex_py": "Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.",
    "ex_vn": "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.",
    "exList": [
      {
        "zh": "坐公共汽车要一个多小时呢。",
        "py": "Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.",
        "vn": "Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy."
      },
      {
        "zh": "我们等了两个小时。",
        "py": "Wǒmen děngle liǎng ge xiǎoshí.",
        "vn": "Chúng tôi đã đợi hai tiếng đồng hồ."
      },
      {
        "zh": "一个小时以后再打给我。",
        "py": "Yí ge xiǎoshí yǐhòu zài dǎ gěi wǒ.",
        "vn": "Một tiếng sau hãy gọi lại cho tôi."
      }
    ],
    "hanzi": [
      {
        "c": "小",
        "p": "xiǎo",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丨→丶→丶",
        "rad": "小 (tiểu – tự thành bộ)",
        "mean": "nhỏ",
        "tip": "Ba nét nhỏ xíu cách điệu → \"NHỎ\". 小 + 时 = một khoảng thời gian nhỏ đơn vị = GIỜ.",
        "cf": "少 (shǎo, ít, thêm nét)",
        "w": "小时 / 小学 / 多小"
      },
      {
        "c": "时",
        "p": "shí",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "日 (nhật) trái → 寸 (thốn) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "giờ, thời gian",
        "tip": "Đã học ở Bài 2 (时间) — 小 + 时 = đơn vị GIỜ.",
        "cf": "待 (dài, chờ đợi)",
        "w": "小时 / 时间 / 有时"
      }
    ],
    "colloFull": [
      {
        "zh": "一个小时",
        "py": "yí gè xiǎoshí",
        "vn": "một tiếng"
      },
      {
        "zh": "两个小时",
        "py": "liǎng gè xiǎoshí",
        "vn": "hai tiếng"
      },
      {
        "zh": "半个小时",
        "py": "bàn gè xiǎoshí",
        "vn": "nửa tiếng"
      },
      {
        "zh": "几个小时",
        "py": "jǐ gè xiǎoshí",
        "vn": "mấy tiếng"
      }
    ],
    "patterns": [
      {
        "s": "số + 个 + 小时",
        "m": "Đếm tiếng đồng hồ — luôn có 个"
      },
      {
        "s": "小时 là ĐỘ DÀI; 点 là MỐC giờ: 两点 ≠ 两个小时"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Từ đây đến sân bay mất hai tiếng.",
        "answer": "这儿到机场要两个小时。",
        "answerPy": "Zhèr dào jīchǎng yào liǎng ge xiǎoshí.",
        "note": "小时 luôn có 个 ở giữa.",
        "pair": "要 + thời lượng"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua tôi chơi bóng rổ nửa tiếng.",
        "answer": "昨天我打了半个小时篮球。",
        "answerPy": "Zuótiān wǒ dǎle bàn ge xiǎoshí lánqiú.",
        "note": "Thời lượng đứng SAU động từ.",
        "pair": "……了 + thời lượng"
      }
    ]
  },
  {
    "n": 9,
    "zh": "慢",
    "py": "màn",
    "pos": "Tính từ",
    "vn": "chậm",
    "hv": "mạn",
    "em": "🐢",
    "lesson": 3,
    "ex_zh": "坐公共汽车太慢了。",
    "ex_py": "Zuò gōnggòng qìchē tài màn le.",
    "ex_vn": "Đi xe buýt chậm quá.",
    "exList": [
      {
        "zh": "坐公共汽车太慢了。",
        "py": "Zuò gōnggòng qìchē tài màn le.",
        "vn": "Đi xe buýt chậm quá."
      },
      {
        "zh": "请你说慢一点儿。",
        "py": "Qǐng nǐ shuō màn yìdiǎnr.",
        "vn": "Làm ơn nói chậm một chút."
      },
      {
        "zh": "这个电脑很慢。",
        "py": "Zhège diànnǎo hěn màn.",
        "vn": "Cái máy tính này rất chậm."
      }
    ],
    "hanzi": [
      {
        "c": "慢",
        "p": "màn",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "忄(tâm) trái → 曼 (mạn) phải",
        "rad": "忄(tâm – trái tim)",
        "mean": "chậm",
        "tip": "Bộ 忄(tâm lý) → tâm trạng thong thả, không vội = CHẬM. Trái nghĩa 快.",
        "cf": "漫 (màn, tràn lan, bộ 氵)",
        "w": "太慢了 / 慢慢 / 走慢"
      }
    ],
    "colloFull": [
      {
        "zh": "很慢",
        "py": "hěn màn",
        "vn": "rất chậm"
      },
      {
        "zh": "太慢了",
        "py": "tài màn le",
        "vn": "chậm quá"
      },
      {
        "zh": "慢慢来",
        "py": "mànmàn lái",
        "vn": "từ từ thôi"
      },
      {
        "zh": "慢一点儿",
        "py": "màn yìdiǎnr",
        "vn": "chậm một chút"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 慢",
        "m": "Rất chậm, chậm quá"
      },
      {
        "s": "慢 ↔ 快 — chậm và nhanh"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy nói chậm một chút được không?",
        "answer": "老师，你说慢一点儿可以吗？",
        "answerPy": "Lǎoshī, nǐ shuō màn yìdiǎnr kěyǐ ma?",
        "note": "一点儿 đứng sau tính từ.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Xe buýt này quá chậm nên tôi không đi.",
        "answer": "因为这个公共汽车太慢了，所以我不坐。",
        "answerPy": "Yīnwèi zhège gōnggòng qìchē tài màn le, suǒyǐ wǒ bú zuò.",
        "note": "太……了 nằm gọn trong vế 因为.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "快",
    "py": "kuài",
    "pos": "Tính từ",
    "vn": "nhanh",
    "hv": "khoái",
    "em": "⚡",
    "lesson": 3,
    "ex_zh": "开车也不快。",
    "ex_py": "Kāi chē yě bú kuài.",
    "ex_vn": "Lái xe cũng chẳng nhanh hơn đâu.",
    "exList": [
      {
        "zh": "开车也不快。",
        "py": "Kāi chē yě bú kuài.",
        "vn": "Lái xe cũng chẳng nhanh hơn đâu."
      },
      {
        "zh": "请快一点儿。",
        "py": "Qǐng kuài yìdiǎnr.",
        "vn": "Làm ơn nhanh lên một chút."
      },
      {
        "zh": "他跑得很快。",
        "py": "Tā pǎo de hěn kuài.",
        "vn": "Anh ấy chạy rất nhanh."
      }
    ],
    "hanzi": [
      {
        "c": "快",
        "p": "kuài",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "忄(tâm) trái → 夬 (quyết) phải",
        "rad": "忄(tâm – trái tim)",
        "mean": "nhanh",
        "tip": "Đã học trong 快乐 ở Bài 4 — 忄(tâm) nhẹ nhõm, dứt khoát = NHANH. Trái nghĩa 慢.",
        "cf": "块 (kuài, đơn vị tiền, bộ 土, Bài 3)",
        "w": "很快 / 快乐 / 快来"
      }
    ],
    "colloFull": [
      {
        "zh": "很快",
        "py": "hěn kuài",
        "vn": "rất nhanh"
      },
      {
        "zh": "快一点儿",
        "py": "kuài yìdiǎnr",
        "vn": "nhanh một chút"
      },
      {
        "zh": "快到了",
        "py": "kuài dào le",
        "vn": "sắp đến rồi"
      },
      {
        "zh": "快走",
        "py": "kuài zǒu",
        "vn": "đi nhanh lên"
      }
    ],
    "patterns": [
      {
        "s": "快 + động từ + 了",
        "m": "Sắp … rồi: 快到了"
      },
      {
        "s": "快 (nhanh) và 快……了 (sắp) — hai cách dùng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhanh lên, đã tám giờ rồi!",
        "answer": "快走吧，已经八点了！",
        "answerPy": "Kuài zǒu ba, yǐjīng bā diǎn le!",
        "note": "已经 và 了 đi cùng nhau.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta sắp đến rồi.",
        "answer": "我们快到了。",
        "answerPy": "Wǒmen kuài dào le.",
        "note": "快……了 — sắp xảy ra.",
        "pair": "快……了"
      }
    ]
  },
  {
    "n": 11,
    "zh": "过",
    "py": "guò",
    "pos": "Động từ",
    "vn": "đón, trải qua (ngày lễ, sinh nhật)",
    "hv": "quá",
    "em": "🎉",
    "lesson": 4,
    "ex_zh": "今天给你过生日。",
    "ex_py": "Jīntiān gěi nǐ guò shēngrì.",
    "ex_vn": "Hôm nay chúc mừng sinh nhật bạn.",
    "exList": [
      {
        "zh": "今天给你过生日。",
        "py": "Jīntiān gěi nǐ guò shēngrì.",
        "vn": "Hôm nay chúc mừng sinh nhật bạn."
      },
      {
        "zh": "我们怎么过春节？",
        "py": "Wǒmen zěnme guò chūnjié?",
        "vn": "Chúng ta đón Tết thế nào?"
      },
      {
        "zh": "时间过得真快。",
        "py": "Shíjiān guò de zhēn kuài.",
        "vn": "Thời gian trôi qua thật nhanh."
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guò",
        "type": "半包围 · Bán bao (辶)",
        "st": 6,
        "ord": "寸 (thốn) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "đi qua, trải qua",
        "tip": "Bộ 辶 (đi) → thời gian/sự việc TRÔI QUA, cũng dùng cho việc \"đón\" một ngày lễ.",
        "cf": "边 (biān, bên, Bài 3)",
        "w": "过生日 / 过年 / 经过"
      }
    ],
    "colloFull": [
      {
        "zh": "走过去",
        "py": "zǒu guòqù",
        "vn": "đi qua"
      },
      {
        "zh": "过来",
        "py": "guòlái",
        "vn": "lại đây"
      },
      {
        "zh": "过来看",
        "py": "guòlái kàn",
        "vn": "qua đây xem"
      },
      {
        "zh": "过十分钟",
        "py": "guo shífēn zhōng",
        "vn": "qua mười phút"
      }
    ],
    "patterns": [
      {
        "s": "过 + nơi chốn",
        "m": "Đi qua chỗ nào: 走过去"
      },
      {
        "s": "过来 (đến chỗ tôi) ↔ 过去 (đi khỏi chỗ tôi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn qua đây một chút, tôi có việc hỏi bạn.",
        "answer": "你过来一下，我要问你。",
        "answerPy": "Nǐ guòlái yíxià, wǒ yào wèn nǐ.",
        "note": "过来 — đến chỗ người nói.",
        "pair": "要 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Đi qua trường học là đến công ty tôi rồi.",
        "answer": "走过学校就到我公司了。",
        "answerPy": "Zǒuguò xuéxiào jiù dào wǒ gōngsī le.",
        "note": "就 nối việc trước với việc sau.",
        "pair": "……就……了"
      }
    ]
  },
  {
    "n": 12,
    "zh": "走",
    "py": "zǒu",
    "pos": "Động từ",
    "vn": "đi, đi bộ",
    "hv": "tẩu",
    "em": "🚶",
    "lesson": 4,
    "ex_zh": "走几分钟就到了。",
    "ex_py": "Zǒu jǐ fēnzhōng jiù dào le.",
    "ex_vn": "Đi bộ vài phút là tới rồi.",
    "exList": [
      {
        "zh": "走几分钟就到了。",
        "py": "Zǒu jǐ fēnzhōng jiù dào le.",
        "vn": "Đi bộ vài phút là tới rồi."
      },
      {
        "zh": "我们走路去吧。",
        "py": "Wǒmen zǒulù qù ba.",
        "vn": "Chúng ta đi bộ đi."
      },
      {
        "zh": "他已经走了。",
        "py": "Tā yǐjīng zǒu le.",
        "vn": "Anh ấy đã đi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "走",
        "p": "zǒu",
        "type": "独体字 · Chữ đơn",
        "st": 7,
        "ord": "土 (biến thể) → 龰 (chỉ – biến thể)",
        "rad": "走 (tẩu – tự thành bộ)",
        "mean": "đi, đi bộ",
        "tip": "Hình người vung tay bước đi cách điệu → \"ĐI\".",
        "cf": "足 (zú, chân)",
        "w": "走路 / 走了 / 快走"
      }
    ],
    "colloFull": [
      {
        "zh": "走路",
        "py": "zǒulù",
        "vn": "đi bộ"
      },
      {
        "zh": "走过去",
        "py": "zǒu guòqù",
        "vn": "đi qua"
      },
      {
        "zh": "慢慢走",
        "py": "mànmàn zǒu",
        "vn": "đi từ từ"
      },
      {
        "zh": "走了",
        "py": "zǒu le",
        "vn": "đi rồi"
      }
    ],
    "patterns": [
      {
        "s": "走 + 路",
        "m": "Đi bộ — không cần phương tiện"
      },
      {
        "s": "走 (đi bộ, rời đi) ≠ 去 (đi đến đâu)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trời mưa rồi, chúng ta đi thôi.",
        "answer": "下雨了，我们走吧。",
        "answerPy": "Xià yǔ le, wǒmen zǒu ba.",
        "note": "走 ở đây là rời đi, không phải đi bộ.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Từ nhà tôi đi bộ đến trường mất nửa tiếng.",
        "answer": "我家走路到学校要半个小时。",
        "answerPy": "Wǒ jiā zǒulù dào xuéxiào yào bàn ge xiǎoshí.",
        "note": "走路 — đi bộ, không dùng phương tiện.",
        "pair": "要 + thời lượng"
      }
    ]
  },
  {
    "n": 13,
    "zh": "到",
    "py": "dào",
    "pos": "Động từ",
    "vn": "đến, tới nơi",
    "hv": "đáo",
    "em": "📍",
    "lesson": 4,
    "ex_zh": "20分钟就到。",
    "ex_py": "Èrshí fēnzhōng jiù dào.",
    "ex_vn": "20 phút nữa là tới liền.",
    "exList": [
      {
        "zh": "20分钟就到。",
        "py": "Èrshí fēnzhōng jiù dào.",
        "vn": "20 phút nữa là tới liền."
      },
      {
        "zh": "你到了吗？",
        "py": "Nǐ dào le ma?",
        "vn": "Bạn đến chưa?"
      },
      {
        "zh": "走几分钟就到了。",
        "py": "Zǒu jǐ fēnzhōng jiù dào le.",
        "vn": "Đi bộ vài phút là tới rồi."
      }
    ],
    "hanzi": [
      {
        "c": "到",
        "p": "dào",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "至 (chí) trái → 刂(đao) phải",
        "rad": "刂(đao – dao)",
        "mean": "đến, tới",
        "tip": "至 (đến nơi) + 刂 → xác định điểm ĐẾN dứt khoát, rõ ràng.",
        "cf": "倒 (dǎo, đổ, ngã, bộ 亻)",
        "w": "到了 / 就到 / 到家"
      }
    ],
    "colloFull": [
      {
        "zh": "到学校",
        "py": "dào xuéxiào",
        "vn": "đến trường"
      },
      {
        "zh": "到了",
        "py": "dào le",
        "vn": "đến rồi"
      },
      {
        "zh": "到公司",
        "py": "dào gōngsī",
        "vn": "đến công ty"
      },
      {
        "zh": "几点到",
        "py": "jǐ diǎn dào",
        "vn": "mấy giờ đến"
      }
    ],
    "patterns": [
      {
        "s": "到 + nơi chốn",
        "m": "Đến nơi nào: 到机场"
      },
      {
        "s": "到 nhấn vào KẾT QUẢ đã tới nơi; 去 chỉ nói hướng đi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn đến sân bay?",
        "answer": "你几点到机场？",
        "answerPy": "Nǐ jǐ diǎn dào jīchǎng?",
        "note": "Câu có 几 thì không thêm 吗.",
        "pair": "几点……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi đã đến công ty rồi.",
        "answer": "我姐姐已经到公司了。",
        "answerPy": "Wǒ jiějie yǐjīng dào gōngsī le.",
        "note": "到 nhấn vào kết quả đã tới nơi.",
        "pair": "已经……了"
      }
    ]
  }
];

const wuData = [
  {img:'🏫',label:'教室',py:'jiàoshì',letter:'A'},
  {img:'✈️',label:'机场',py:'jīchǎng',letter:'B'},
  {img:'🚌',label:'公共汽车',py:'gōnggòng qìchē',letter:'C'},
  {img:'🏢',label:'公司',py:'gōngsī',letter:'D'},
  {img:'🚶',label:'走',py:'zǒu',letter:'E'},
  {img:'⏰',label:'小时',py:'xiǎoshí',letter:'F'},
];

var dialogData = [
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'大卫回来了吗？',opts:['回来了','没回来','不知道'],ans:1},
     {q:'大卫为什么还在学习？',opts:['明天有考试','喜欢学习','老师让他留下'],ans:0},
   ],
   lines:[
     {sp:0,zh:'大卫回来了吗？',py:'Dàwèi huílái le ma?',vn:'David đã về chưa?'},
     {sp:1,zh:'没有，他还在教室学习呢。',py:'Méiyǒu, tā hái zài jiàoshì xuéxí ne.',vn:'Chưa, cậu ấy vẫn còn đang học ở trên lớp kìa.'},
     {sp:0,zh:'已经九点多了，他怎么还在学习？',py:'Yǐjīng jiǔ diǎn duō le, tā zěnme hái zài xuéxí?',vn:'Đã hơn 9 giờ rồi, sao cậu ấy vẫn còn học thế?'},
     {sp:1,zh:'明天有考试，他说今天要好好准备。',py:'Míngtiān yǒu kǎoshì, tā shuō jīntiān yào hǎohǎo zhǔnbèi.',vn:'Ngày mai có bài thi, cậu ấy bảo hôm nay phải chuẩn bị thật tốt.'},
   ]},
  {scene:'去机场的路上 · Trên đường đi sân bay',
   preQuiz:[
     {q:'女的现在在哪儿？',opts:['在去机场的路上','已经到机场了','在飞机上'],ans:0},
     {q:'男的下飞机了吗？',opts:['下了','还没下','不知道'],ans:0},
     {q:'女的还要多久才到？',opts:['10分钟','20分钟','30分钟'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你现在在哪儿呢？',py:'Nǐ xiànzài zài nǎr ne?',vn:'Bây giờ bạn đang ở đâu thế?'},
     {sp:1,zh:'在去机场的路上。你已经到了吗？',py:'Zài qù jīchǎng de lùshang. Nǐ yǐjīng dào le ma?',vn:'Đang trên đường ra sân bay. Bạn đã đến nơi chưa?'},
     {sp:0,zh:'我下飞机了。你还有多长时间能到这儿？',py:'Wǒ xià fēijī le. Nǐ hái yǒu duō cháng shíjiān néng dào zhèr?',vn:'Tôi xuống máy bay rồi. Bạn còn bao lâu nữa thì đến được đây?'},
     {sp:1,zh:'20分钟就到。',py:'Èrshí fēnzhōng jiù dào.',vn:'20 phút nữa là tới liền.'},
   ]},
  {scene:'在健身房 · Trong phòng tập thể dục',
   preQuiz:[
     {q:'女的家离公司远吗？',opts:['很远','不远','不知道'],ans:0},
     {q:'坐公共汽车要多长时间？',opts:['半个小时','一个多小时','两个小时'],ans:1},
     {q:'女的为什么不开车？',opts:['路上车太多','没有车','不会开车'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
     {sp:1,zh:'很远，坐公共汽车要一个多小时呢。',py:'Hěn yuǎn, zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',vn:'Rất xa, đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.'},
     {sp:0,zh:'坐公共汽车太慢了，你怎么不开车？',py:'Zuò gōnggòng qìchē tài màn le, nǐ zěnme bù kāi chē?',vn:'Đi xe buýt chậm quá, sao bạn không tự lái xe đi?'},
     {sp:1,zh:'开车也不快，路上车太多了。',py:'Kāi chē yě bú kuài, lùshang chē tài duō le.',vn:'Lái xe cũng chẳng nhanh hơn đâu, trên đường nhiều xe lắm.'},
   ]},
  {scene:'在路上 · Trên đường đi',
   preQuiz:[
     {q:'女的的生日还有多久到？',opts:['一个多星期','两天','已经过了'],ans:0},
     {q:'男的为什么今天要给她过生日？',opts:['下星期要去北京','忘了具体日期','女的要求'],ans:0},
     {q:'他们打算去哪儿吃饭？',opts:['附近的中国饭馆','女的家里','机场餐厅'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天晚上我们一起吃饭吧，给你过生日。',py:'Jīntiān wǎnshang wǒmen yìqǐ chīfàn ba, gěi nǐ guò shēngrì.',vn:'Tối nay chúng ta cùng đi ăn cơm đi, để chúc mừng sinh nhật bạn.'},
     {sp:1,zh:'今天离我的生日还有一个多星期呢。',py:'Jīntiān lí wǒ de shēngrì hái yǒu yí ge duō xīngqī ne.',vn:'Hôm nay cách ngày sinh nhật của tôi tận hơn một tuần nữa cơ mà.'},
     {sp:0,zh:'下个星期我要去北京，今天过吧。',py:'Xià ge xīngqī wǒ yào qù Běijīng, jīntiān guò ba.',vn:'Tuần sau tôi phải đi Bắc Kinh rồi, hôm nay tổ chức luôn đi.'},
     {sp:1,zh:'好吧，离这儿不远有一个中国饭馆，走几分钟就到了。',py:'Hǎoba, lí zhèr bù yuǎn yǒu yí ge Zhōngguó fànguǎn, zǒu jǐ fēnzhōng jiù dào le.',vn:'Được thôi, cách đây không xa có một nhà hàng Trung Quốc, đi bộ vài phút là tới rồi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'坐',right:'公共汽车'},
  {left:'给朋友过',right:'生日'},
  {left:'一个多',right:'小时'},
  {left:'在去机场的',right:'路上'},
  {left:'公司离这儿',right:'很远'},
  {left:'他还在教室',right:'学习呢'},
  {left:'早上六点就',right:'起床了'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: hỏi đường đến siêu thị/bệnh viện.
// Ôn lại 因为 (Bài 6), 生日 (Bài 4).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-7/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'这是我们的', blank:'新教室', post:'。', py:'Zhè shì wǒmen de xīn jiàoshì.', vn:'Đây là lớp học mới của chúng tôi.'},
    ]},
    {num:2, lines:[
      {pre:'我正在', blank:'去机场的路上呢', post:'。', py:'Wǒ zhèngzài qù jīchǎng de lùshang ne.', vn:'Tôi đang trên đường ra sân bay.'},
    ]},
    {num:3, lines:[
      {pre:'我每天早上', blank:'六点就去跑步了', post:'。', py:'Wǒ měitiān zǎoshang liù diǎn jiù qù pǎobù le.', vn:'Tôi sáng nào cũng 6 giờ là đi chạy bộ rồi.'},
    ]},
    {num:4, lines:[
      {pre:'我家离公司很远，', blank:'所以要坐公共汽车去公司', post:'。', py:'Wǒ jiā lí gōngsī hěn yuǎn, suǒyǐ yào zuò gōnggòngqìchē qù gōngsī.', vn:'Nhà tôi cách công ty rất xa, nên phải đi xe buýt đến công ty.'},
    ]},
    {num:5, lines:[
      {pre:'大夫正', blank:'给他看病呢', post:'。', py:'Dàifu zhèng gěi tā kànbìng ne.', vn:'Bác sĩ đang khám bệnh cho anh ấy.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'大卫', blank:'回来了吗', post:'？', py:'Dàwèi huílai le ma?', vn:'David về chưa?'},
      {speaker:'女', pre:'没有，他还', blank:'在教室学习呢', post:'。', py:'Méiyǒu, tā hái zài jiàoshì xuéxí ne.', vn:'Chưa, cậu ấy vẫn đang học ở lớp học.'},
    ]},
    {num:7, lines:[
      {speaker:'男', pre:'你家离学校', blank:'远吗', post:'？', py:'Nǐ jiā lí xuéxiào yuǎn ma?', vn:'Nhà bạn cách trường xa không?'},
      {speaker:'女', pre:'很远，坐公共汽车', blank:'要一个多小时呢', post:'。', py:'Hěn yuǎn, zuò gōnggòngqìchē yào yí gè duō xiǎoshí ne.', vn:'Rất xa, đi xe buýt mất hơn một tiếng đấy.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'今天晚上一起吃饭吧。', blank:'给你过生日', post:'。', py:'Jīntiān wǎnshang yìqǐ chīfàn ba. Gěi nǐ guò shēngrì.', vn:'Tối nay cùng ăn cơm nhé. Mừng sinh nhật bạn.'},
      {speaker:'女', pre:'好吧，', blank:'七点半怎么样', post:'？', py:'Hǎo ba, qī diǎn bàn zěnmeyàng?', vn:'Được, 7 giờ rưỡi thì sao?'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'在床上看书', blank:'对眼睛不好', post:'。', py:'Zài chuáng shang kàn shū duì yǎnjīng bù hǎo.', vn:'Nằm trên giường đọc sách không tốt cho mắt.'},
      {speaker:'男', pre:'知道了，', blank:'再看一会儿就睡觉', post:'。', py:'Zhīdào le, zài kàn yíhuìr jiù shuìjiào.', vn:'Biết rồi, đọc thêm một chút nữa là ngủ.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'快起床吧。', blank:'八点了', post:'。', py:'Kuài qǐchuáng ba. Bā diǎn le.', vn:'Dậy nhanh đi. 8 giờ rồi.'},
      {speaker:'男', pre:'没关系，我', blank:'再休息十分钟', post:'。', py:'Méi guānxi, wǒ zài xiūxi shí fēnzhōng.', vn:'Không sao, tôi nghỉ thêm 10 phút nữa.'},
    ]},
  ],
  mc: [
    {num:11, options:['睡觉','考试','学习'], ans:2,
     explain:'男：大卫睡觉了吗？女：他还没睡觉呢，他明天有考试。问：大卫在做什么？ → 学习。'},
    {num:12, options:['路上','机场','飞机上'], ans:1,
     explain:'男：你到机场了没有？女：我现在在去机场的路上呢，二十分钟后就到。问：女的想去哪儿？ → 机场。'},
    {num:13, options:['坐公共汽车','自行车','出租车'], ans:0,
     explain:'男：你家离公司远吗？女：我家离公司很远，我每天坐公共汽车去，要一个多小时呢。问：女的每天怎么去公司？ → 坐公共汽车。'},
    {num:14, options:['二月一号','二月七号','二月十四号'], ans:2,
     explain:'男：今天是你的生日吧？女：今天是二月七号，离我的生日还有一个星期呢。问：女的的生日是几号？ → 二月十四号。'},
    {num:15, options:['不远','很远','不太远'], ans:0,
     explain:'男：中午我们一起吃饭吧。女：好。我家前面有一个饭馆，走几分钟就到了。问：女的家离饭馆远吗？ → 不远。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (还 · 就 · 离 · 呢 + từ mới bài 7, ôn bài 1–6 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Bạn sắp bay đi Bắc Kinh, hỏi người nhà: “机场',blank:'离',post:'我们家远不远？” — “不太远，开车四十分钟。”',hint:'(cách)',ans:'离',exp:'A + 离 + B + 远/不远 = A cách B xa/không xa; 离 đứng giữa hai địa điểm.'},
  {pre:'Mười giờ tối mẹ gọi điện: “你怎么',blank:'还',post:'在公司？” — “今天很忙，我还要工作一个小时。”',hint:'(vẫn còn)',ans:'还',exp:'还 + 在 + nơi chốn = vẫn còn ở đó (việc chưa kết thúc); 还 đứng trước động từ.'},
  {pre:'今天我早上五点',blank:'就',post:'起床了，因为要去机场接妈妈。',hint:'(đã … rồi — sớm)',ans:'就',exp:'Thời gian + 就 + động từ + 了 = đã làm từ sớm (sớm hơn bình thường).'},
  {pre:'Bạn kể về bạn mình vừa về nước: “小王下了飞机',blank:'就',post:'给妈妈打电话了。”',hint:'(là … ngay)',ans:'就',exp:'Động từ 1 + 了 + 就 + động từ 2 = vừa … là … ngay.'},
  {pre:'“我是坐公共汽车来的，你',blank:'呢',post:'？” — “我是走路来的。”',hint:'(còn bạn?)',ans:'呢',exp:'Nói về mình xong, hỏi lại người kia cùng câu đó: 你呢？ = còn bạn thì sao?'},
  {pre:'Gọi cho bố đi công tác về: “爸爸，你还在机场',blank:'呢',post:'？” — “不，我已经在出租车上了。”',hint:'(đang — cuối câu)',ans:'呢',exp:'还在 + nơi chốn + 呢？ = vẫn còn đang ở … à? 呢 ở cuối câu hỏi.'},
  {pre:'这个电脑太',blank:'慢',post:'了，我想买一个新的。',hint:'(chậm)',ans:'慢',exp:'太 + tính từ + 了 = quá …: 太慢了 = chậm quá.'},
  {pre:'“',blank:'快',post:'点儿！电影七点开始，还有十分钟。” — “好，我来了！”',hint:'(nhanh)',ans:'快',exp:'快点儿！ = nhanh lên! (giục người khác).'},
  {pre:'“你每天运动多长时间？” — “一个',blank:'小时',post:'，我早上去跑步。”',hint:'(tiếng đồng hồ)',ans:'小时',exp:'一个小时 = một tiếng (phải có 个); 时间 là “thời gian” nói chung.'},
  {pre:'Thứ Bảy là sinh nhật bố: “星期六我们在家给爸爸',blank:'过',post:'生日吧。”',hint:'(tổ chức, đón)',ans:'过',exp:'给 + người + 过生日 = tổ chức sinh nhật cho ai.'},
  {pre:'“你的飞机几点',blank:'到',post:'北京？” — “下午四点。”',hint:'(đến nơi)',ans:'到',exp:'到 + địa điểm = tới nơi; 去 chỉ hướng đi, chưa nói đã tới.'},
  {pre:'“我们坐出租车去吗？” — “不坐了，商店不远，我们',blank:'走',post:'路去吧。”',hint:'(đi bộ)',ans:'走',exp:'走路去 + nơi = đi bộ đến đó.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 还 / 就 / 离 / 呢
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','的','教室','离','学校','门口','不','远','。'],ans:'我们的教室离学校门口不远。',audio:'我们的教室离学校门口不远。'},
  {words:['姐姐','已经','到','机场','了','吗','？'],ans:'姐姐已经到机场了吗？',audio:'姐姐已经到机场了吗？'},
  {words:['我','每天','七','点','就','到','公司','了','。'],ans:'我每天七点就到公司了。',audio:'我每天七点就到公司了。',alt:['每天我七点就到公司了。']},
  {words:['你们','怎么','还','在','外面','？'],ans:'你们怎么还在外面？',audio:'你们怎么还在外面？'},
  {words:['坐','公共汽车','去','机场','要','多','长','时间','？'],ans:'坐公共汽车去机场要多长时间？',audio:'坐公共汽车去机场要多长时间？'},
  {words:['下','个','月','我们','给','姐姐','过','生日','。'],ans:'下个月我们给姐姐过生日。',audio:'下个月我们给姐姐过生日。',alt:['我们下个月给姐姐过生日。']},
  {words:['我','的','手表','快','了','五','分钟','。'],ans:'我的手表快了五分钟。',audio:'我的手表快了五分钟。'},
  {words:['离','考试','还','有','两','个','星期','呢','。'],ans:'离考试还有两个星期呢。',audio:'离考试还有两个星期呢。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (离 sai chỗ, 是 trước tính từ, 还 / 就 sai chỗ, 吗 với từ để hỏi, thời lượng trước động từ, 还没…了...)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我家很远离学校。',
   opts:['我家离学校是很远。','我家离学校很远。','我家离很远学校。','我家很离学校远。'],ans:1,
   exp:'A + 离 + B + 很远: 离 + nơi chốn đứng trước tính từ; không thêm 是 trước tính từ.'},
  {wrong:'十一点多了，爸爸在公司还工作呢。',
   opts:['十一点多了，爸爸在公司工作还呢。','十一点多了，爸爸在还公司工作呢。','十一点多了，爸爸还在公司工作呢。','十一点多了，爸爸还在公司工作了。'],ans:2,
   exp:'还 (vẫn còn) đứng trước 在 + nơi chốn; việc đang tiếp diễn thì cuối câu dùng 呢, không dùng 了.'},
  {wrong:'他八点到学校就了。',
   opts:['他八点就到学校了。','他就八点到学校了。','他八点到就学校了。','他八点就是到学校了。'],ans:0,
   exp:'就 (sớm) đứng sau thời gian, ngay trước động từ: 八点就到了; không thêm 是.'},
  {wrong:'我们都到了，小王怎么还不来吗？',
   opts:['我们都到了，小王怎么不还来呢？','我们都到了，小王还怎么不来呢？','我们都到了，小王怎么是还不来呢？','我们都到了，小王怎么还不来呢？'],ans:3,
   exp:'Câu có 怎么 đã là câu hỏi, không thêm 吗 (muốn hỏi nhẹ thì thêm 呢); trật tự: 怎么 + 还 + 不 + động từ, không thêm 是.'},
  {wrong:'离考试还有两天，我们准备好好吧。',
   opts:['离考试还有两天，我们准备很好吧。','离考试还有两天，我们好好准备吧。','离考试还有两天，我们好好准备吗。','离考试还有两天，我们是好好准备吧。'],ans:1,
   exp:'好好 + động từ = làm cho thật tốt: 好好准备; không đặt 好好 sau động từ như tiếng Việt “chuẩn bị thật tốt”.'},
  {wrong:'我姐姐走路慢很。',
   opts:['我姐姐很慢走路。','我姐姐走路是慢。','我姐姐走路很慢。','我姐姐走路慢了很。'],ans:2,
   exp:'很 đứng TRƯỚC tính từ: 走路很慢 = đi bộ rất chậm; không nói 慢很 (“chậm lắm”), không thêm 是.'},
  {wrong:'他每天一个小时游泳。',
   opts:['他每天游泳一个小时。','他游泳每天一个小时。','他每天游泳一个时间。','他每天是游泳一个小时。'],ans:0,
   exp:'Thời lượng (一个小时) đứng SAU động từ: 游泳一个小时; 小时 = tiếng đồng hồ, 时间 = thời gian.'},
  {wrong:'姐姐还没回家了，你给她打电话吧。',
   opts:['姐姐没还回家呢，你给她打电话吧。','姐姐还没回家呢，你给她打电话吧。','姐姐已经没回家呢，你给她打电话吧。','姐姐还不回家了，你给她打电话吧。'],ans:1,
   exp:'还没 + động từ + 呢 = vẫn chưa …; câu có 还没 không dùng 了 ở cuối.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 7. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Đồng nghiệp mới hỏi đường đi làm của bạn.',
      q_zh: '你每天怎么去公司？你家离那儿远吗？要多长时间？',
      q_py: 'Nǐ měitiān zěnme qù gōngsī? Nǐ jiā lí nàr yuǎn ma? Yào duō cháng shíjiān?',
      q_vn: 'Hằng ngày bạn đến công ty (trường) bằng gì? Nhà bạn cách đó có xa không? Mất bao lâu?',
      grammar: { label: '我家离… + 远 / 不远', any: ['离'] },
      need: [
        { label: 'Nói xa hay không xa', any: ['远', '近', '不远'] },
        { label: 'Nói phương tiện (坐公共汽车 / 开车 / 走路)', any: ['公共汽车', '开车', '走路', '走', '骑', '地铁', '出租车', '坐'] },
        { label: 'Nói thời gian (二十分钟 / 一个多小时)', any: ['小时', '分钟'] }
      ],
      bonus: { label: 'Dùng 就 để nói “chỉ … là tới”', any: ['就'] },
      vocab: ['离', '公司', '远', '公共汽车', '小时'],
      minLen: 14,
      sample: '我家离公司不太远，我每天开车去，二十多分钟就到了。',
      sample_py: 'Wǒ jiā lí gōngsī bú tài yuǎn, wǒ měitiān kāichē qù, èrshí duō fēnzhōng jiù dào le.',
      sample_vn: 'Nhà tôi cách công ty không xa lắm, hằng ngày tôi lái xe đi, hơn hai mươi phút là tới.',
      tip: '离 đứng giữa hai địa điểm: 我家离公司…; thời gian ngắn + 就到了 = chỉ … là tới.'
    },
    {
      situation: 'Một du khách hỏi bạn đường ra sân bay.',
      q_zh: '请问，机场离这儿远吗？怎么去最快？',
      q_py: 'Qǐngwèn, jīchǎng lí zhèr yuǎn ma? Zěnme qù zuì kuài?',
      q_vn: 'Xin hỏi, sân bay cách đây có xa không? Đi thế nào là nhanh nhất?',
      grammar: { label: '机场离这儿… + 坐…最快', any: ['离', '最快', '快'] },
      need: [
        { label: 'Nói xa hay không xa', any: ['远', '近', '不远'] },
        { label: 'Nói phương tiện nên đi', any: ['出租车', '公共汽车', '开车', '地铁', '坐', '走'] },
        { label: 'Nói thời gian đi tới', any: ['分钟', '小时'] }
      ],
      bonus: { label: 'So sánh với phương tiện chậm hơn (慢)', any: ['慢', '太慢', '不快'] },
      vocab: ['机场', '离', '远', '快', '慢'],
      minLen: 12,
      sample: '机场离这儿很远。坐出租车最快，四十分钟就到；坐公共汽车很慢。',
      sample_py: 'Jīchǎng lí zhèr hěn yuǎn. Zuò chūzūchē zuì kuài, sìshí fēnzhōng jiù dào; zuò gōnggòng qìchē hěn màn.',
      sample_vn: 'Sân bay cách đây rất xa. Đi taxi là nhanh nhất, bốn mươi phút là tới; đi xe buýt thì chậm.',
      tip: '最 + 快 = nhanh nhất; 坐 + phương tiện đứng trước: 坐出租车最快.'
    },
    {
      situation: 'Mười giờ tối, mẹ gọi điện hỏi sao bạn chưa về nhà.',
      q_zh: '晚上十点了，你还在外面吗？在做什么呢？',
      q_py: 'Wǎnshang shí diǎn le, nǐ hái zài wàimiàn ma? Zài zuò shénme ne?',
      q_vn: 'Mười giờ tối rồi, con vẫn còn ở ngoài à? Đang làm gì thế?',
      grammar: { label: '我还在… + 呢', any: ['还在', '还要', '还没'] },
      need: [
        { label: 'Nói đang ở đâu', any: ['教室', '公司', '学校', '外面', '路上', '饭店', '商店', '朋友家', '车上'] },
        { label: 'Nói đang làm gì', any: ['学习', '工作', '准备', '看', '写', '吃', '喝', '买', '运动', '游泳'] },
        { label: 'Hẹn giờ về (… 点就回家)', any: ['点', '分钟', '小时'] }
      ],
      bonus: { label: 'Dùng 呢 cuối câu', any: ['呢'] },
      vocab: ['还', '教室', '就'],
      minLen: 12,
      sample: '我还在教室呢。明天有汉语考试，我和同学在一起准备，十一点就回家。',
      sample_py: 'Wǒ hái zài jiàoshì ne. Míngtiān yǒu Hànyǔ kǎoshì, wǒ hé tóngxué zài yìqǐ zhǔnbèi, shíyī diǎn jiù huí jiā.',
      sample_vn: 'Con vẫn còn ở lớp ạ. Mai có bài thi tiếng Trung, con cùng các bạn ôn bài, mười một giờ là con về nhà.',
      tip: '还在 + nơi chốn + 呢 = vẫn còn đang ở …; 还 đứng trước 在.'
    },
    {
      situation: 'Bạn hẹn bạn ở nhà hàng, bạn ấy đến trước và gọi điện cho bạn.',
      q_zh: '我已经到饭店了，你到哪儿了？',
      q_py: 'Wǒ yǐjīng dào fàndiàn le, nǐ dào nǎr le?',
      q_vn: 'Mình đến nhà hàng rồi, bạn đang ở đâu thế?',
      grammar: { label: '我在… + 呢 / 还在…', any: ['呢', '还在'] },
      need: [
        { label: 'Nói vị trí hiện tại', any: ['路上', '车上', '公共汽车', '出租车', '家', '公司', '学校', '门口', '外面', '前面'] },
        { label: 'Nói còn bao lâu nữa tới (… 分钟 / 下了车就到)', any: ['分钟', '小时', '下车', '下了车', '马上', '很快', '前面'] },
        { label: 'Dùng 到 = tới nơi', any: ['到'] }
      ],
      bonus: { label: 'Dùng 就 (… phút là tới)', any: ['就'] },
      vocab: ['到', '路', '公共汽车', '就'],
      minLen: 10,
      sample: '我还在公共汽车上呢，前面就是饭店了，下了车就到。',
      sample_py: 'Wǒ hái zài gōnggòng qìchē shang ne, qiánmiàn jiù shì fàndiàn le, xià le chē jiù dào.',
      sample_vn: 'Mình vẫn đang trên xe buýt, phía trước là nhà hàng rồi, xuống xe là tới ngay.',
      tip: '下了车就到 = xuống xe là tới ngay; 还在…呢 = vẫn còn đang ở ….'
    },
    {
      situation: 'Bạn học hỏi về sinh nhật sắp tới của bạn.',
      q_zh: '离你的生日还有多长时间？你想怎么过生日？',
      q_py: 'Lí nǐ de shēngrì hái yǒu duō cháng shíjiān? Nǐ xiǎng zěnme guò shēngrì?',
      q_vn: 'Còn bao lâu nữa là đến sinh nhật bạn? Bạn muốn tổ chức sinh nhật thế nào?',
      grammar: { label: '离我的生日还有…', any: ['离'] },
      need: [
        { label: 'Nói còn bao lâu (… 天 / 星期 / 月)', any: ['天', '星期', '月', '号', '还有'] },
        { label: 'Dùng 过生日', any: ['过生日', '过'] },
        { label: 'Nói muốn làm gì, với ai', any: ['朋友', '家', '一起', '吃', '去', '旅游', '买', '唱', '看'] }
      ],
      bonus: { label: 'Thêm 呢 cuối câu (còn … nữa cơ)', any: ['呢'] },
      vocab: ['离', '过', '还'],
      minLen: 12,
      sample: '离我的生日还有两个多月呢。我想和朋友一起去北京旅游，在那儿过生日。',
      sample_py: 'Lí wǒ de shēngrì hái yǒu liǎng ge duō yuè ne. Wǒ xiǎng hé péngyou yìqǐ qù Běijīng lǚyóu, zài nàr guò shēngrì.',
      sample_vn: 'Còn hơn hai tháng nữa mới đến sinh nhật tôi. Tôi muốn cùng bạn bè đi Bắc Kinh du lịch, tổ chức sinh nhật ở đó.',
      tip: '离 + mốc thời gian + 还有 + khoảng thời gian = còn … nữa mới đến …'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 7 + ôn bài 1–6 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bệnh viện cách nhà tôi không xa, tôi thường đi bộ đến đó.', zh:'医院离我家不远，我经常走路去那儿。', py:'Yīyuàn lí wǒ jiā bù yuǎn, wǒ jīngcháng zǒulù qù nàr.'},
  {vi:'Bố tôi vẫn còn ở bệnh viện, vẫn chưa về nhà.', zh:'爸爸还在医院，还没回家。', py:'Bàba hái zài yīyuàn, hái méi huí jiā.'},
  {vi:'Tôi muốn ăn mì, còn bạn?', zh:'我想吃面条，你呢？', py:'Wǒ xiǎng chī miàntiáo, nǐ ne?'},
  {vi:'Sáng nay sáu giờ mẹ tôi đã đến công ty rồi.', zh:'今天早上妈妈六点就去公司了。', py:'Jīntiān zǎoshang māma liù diǎn jiù qù gōngsī le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chuyến bay ngày mai là lúc tám giờ sáng, sáu giờ là chúng ta phải đi rồi.', zh:'明天的飞机是早上八点的，我们六点就要走。', py:'Míngtiān de fēijī shì zǎoshang bā diǎn de, wǒmen liù diǎn jiù yào zǒu.'},
  {vi:'Sao bạn vẫn chưa tới? Chúng tôi đã ở cổng rồi.', zh:'你怎么还没到？我们已经在门口了。', py:'Nǐ zěnme hái méi dào? Wǒmen yǐjīng zài ménkǒu le.'},
  {vi:'Tiểu Vương, bạn vẫn đang ôn thi à? — Không, mình đang xem phim.', zh:'小王，你还在准备考试吗？——不，我在看电影呢。', py:'Xiǎo Wáng, nǐ hái zài zhǔnbèi kǎoshì ma? — Bù, wǒ zài kàn diànyǐng ne.'},
];
