// ══════════════════════════════════════════
// DATA — HSK1 Bài 11: 现在几点?
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "现在",
    "py": "xiànzài",
    "pos": "Danh từ",
    "vn": "bây giờ, hiện nay",
    "hv": "hiện tại",
    "em": "⏰",
    "lesson": 1,
    "ex_zh": "现在几点？",
    "ex_py": "Xiànzài jǐ diǎn?",
    "ex_vn": "Bây giờ là mấy giờ rồi?",
    "exList": [
      {
        "zh": "现在几点？",
        "py": "Xiànzài jǐ diǎn?",
        "vn": "Bây giờ là mấy giờ rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "现",
        "p": "xiàn",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "王(vương) trái → 见(kiến) phải",
        "rad": "王 (vương – ngọc)",
        "mean": "hiện tại, bây giờ",
        "tip": "王(ngọc quý) + 见(nhìn thấy) → thứ nhìn thấy được ngay trước mắt = HIỆN TẠI.",
        "cf": "规 (guī – \"quy tắc\")",
        "w": "现在"
      }
    ],
    "colloFull": [
      {
        "zh": "现在几点",
        "py": "xiànzài jǐ diǎn",
        "vn": "bây giờ mấy giờ"
      },
      {
        "zh": "现在去",
        "py": "xiànzài qù",
        "vn": "bây giờ đi"
      },
      {
        "zh": "现在在家",
        "py": "xiànzài zài jiā",
        "vn": "bây giờ ở nhà"
      },
      {
        "zh": "现在吃饭",
        "py": "xiànzài chī fàn",
        "vn": "bây giờ ăn cơm"
      }
    ],
    "patterns": [
      {
        "s": "现在 + Sub + động từ",
        "m": "Từ chỉ thời gian đứng đầu câu hoặc sau chủ ngữ"
      },
      {
        "s": "现 + 在",
        "m": "Ngay (在) lúc này (现)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ mấy giờ rồi?",
        "answer": "现在几点？",
        "answerPy": "Xiànzài jǐ diǎn?",
        "note": "Nói giờ không cần động từ 是.",
        "pair": "几点？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bây giờ mẹ tôi ở nhà.",
        "answer": "现在我妈妈在家。",
        "answerPy": "Xiànzài wǒ māma zài jiā.",
        "note": "现在 đứng đầu câu.",
        "pair": "在 + nơi chốn"
      }
    ]
  },
  {
    "n": 2,
    "zh": "点",
    "py": "diǎn",
    "pos": "Lượng từ",
    "vn": "giờ",
    "hv": "điểm",
    "em": "🕐",
    "lesson": 1,
    "ex_zh": "现在十点十分。",
    "ex_py": "Xiànzài shí diǎn shí fēn.",
    "ex_vn": "Bây giờ là 10 giờ 10 phút.",
    "exList": [
      {
        "zh": "现在十点十分。",
        "py": "Xiànzài shí diǎn shí fēn.",
        "vn": "Bây giờ là 10 giờ 10 phút."
      }
    ],
    "hanzi": [
      {
        "c": "点",
        "p": "diǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "占(chiếm) trên → 灬(hỏa) dưới",
        "rad": "灬 (hỏa – lửa, phần dưới)",
        "mean": "giờ, điểm, chấm",
        "tip": "占(vị trí xác định) + 灬(lửa, ánh sáng nhỏ) → một ĐIỂM cụ thể, mở rộng dùng đếm GIỜ.",
        "cf": "店 (diàn – \"cửa hàng\", đã học Bài 8\")",
        "w": "十点 / 几点"
      }
    ],
    "colloFull": [
      {
        "zh": "几点",
        "py": "jǐ diǎn",
        "vn": "mấy giờ"
      },
      {
        "zh": "六点",
        "py": "liù diǎn",
        "vn": "sáu giờ"
      },
      {
        "zh": "十点",
        "py": "shí diǎn",
        "vn": "mười giờ"
      },
      {
        "zh": "现在几点",
        "py": "xiànzài jǐ diǎn",
        "vn": "bây giờ mấy giờ"
      }
    ],
    "patterns": [
      {
        "s": "số + 点",
        "m": "Mấy giờ: 六点 — sáu giờ"
      },
      {
        "s": "Nói giờ thì không cần động từ 是: 现在六点"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ sáu giờ.",
        "answer": "现在六点。",
        "answerPy": "Xiànzài liù diǎn.",
        "note": "六点 — sáu giờ.",
        "pair": "……点"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về nhà?",
        "answer": "你几点回家？",
        "answerPy": "Nǐ jǐ diǎn huí jiā?",
        "note": "Thời gian đứng TRƯỚC động từ.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "分",
    "py": "fēn",
    "pos": "Lượng từ",
    "vn": "phút",
    "hv": "phân",
    "em": "⏱️",
    "lesson": 1,
    "ex_zh": "现在十点十分。",
    "ex_py": "Xiànzài shí diǎn shí fēn.",
    "ex_vn": "Bây giờ là 10 giờ 10 phút.",
    "exList": [
      {
        "zh": "现在十点十分。",
        "py": "Xiànzài shí diǎn shí fēn.",
        "vn": "Bây giờ là 10 giờ 10 phút."
      }
    ],
    "hanzi": [
      {
        "c": "分",
        "p": "fēn",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八(bát) trên → 刀(biến thể) dưới",
        "rad": "刀 (đao – dao, biến thể)",
        "mean": "phút, chia",
        "tip": "八(chia ra) + 刀(dao cắt) → chia nhỏ ra, dùng đếm PHÚT (đơn vị nhỏ của giờ).",
        "cf": "份 (fèn – \"phần\")",
        "w": "十分 / 分钟"
      }
    ],
    "colloFull": [
      {
        "zh": "十分",
        "py": "shífēn",
        "vn": "mười phút"
      },
      {
        "zh": "六点十分",
        "py": "liù diǎn shífēn",
        "vn": "sáu giờ mười"
      },
      {
        "zh": "几点几分",
        "py": "jǐ diǎn jǐ fēn",
        "vn": "mấy giờ mấy phút"
      },
      {
        "zh": "五分",
        "py": "wǔ fēn",
        "vn": "năm phút"
      }
    ],
    "patterns": [
      {
        "s": "số + 点 + số + 分",
        "m": "Giờ trước, phút sau: 六点十分"
      },
      {
        "s": "分 (phút trong đồng hồ) khác 分钟 (thời lượng, bài 14)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ sáu giờ mười phút.",
        "answer": "现在六点十分。",
        "answerPy": "Xiànzài liù diǎn shí fēn.",
        "note": "Giờ nói trước, phút nói sau.",
        "pair": "……点……分"
      },
      {
        "promptLang": "vi",
        "prompt": "Bây giờ mấy giờ mấy phút rồi?",
        "answer": "现在几点几分？",
        "answerPy": "Xiànzài jǐ diǎn jǐ fēn?",
        "note": "Hỏi cả giờ lẫn phút trong một câu.",
        "pair": "几点几分？"
      }
    ]
  },
  {
    "n": 4,
    "zh": "中午",
    "py": "zhōngwǔ",
    "pos": "Danh từ",
    "vn": "buổi trưa",
    "hv": "trung ngọ",
    "em": "🌞",
    "lesson": 1,
    "ex_zh": "中午几点吃饭？",
    "ex_py": "Zhōngwǔ jǐ diǎn chī fàn?",
    "ex_vn": "Mấy giờ thì ăn cơm trưa vậy?",
    "exList": [
      {
        "zh": "中午几点吃饭？",
        "py": "Zhōngwǔ jǐ diǎn chī fàn?",
        "vn": "Mấy giờ thì ăn cơm trưa vậy?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "中午吃饭",
        "py": "zhōngwǔ chī fàn",
        "vn": "trưa ăn cơm"
      },
      {
        "zh": "今天中午",
        "py": "jīntiān zhōngwǔ",
        "vn": "trưa nay"
      },
      {
        "zh": "明天中午",
        "py": "míngtiān zhōngwǔ",
        "vn": "trưa mai"
      },
      {
        "zh": "中午回家",
        "py": "zhōngwǔ huí jiā",
        "vn": "trưa về nhà"
      }
    ],
    "patterns": [
      {
        "s": "ngày + 中午",
        "m": "Ghép với 今天, 明天: 今天中午"
      },
      {
        "s": "中 + 午",
        "m": "Chính (中) giữa trưa (午)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trưa nay tôi ăn cơm ở nhà.",
        "answer": "今天中午我在家吃饭。",
        "answerPy": "Jīntiān zhōngwǔ wǒ zài jiā chī fàn.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……吃饭"
      },
      {
        "promptLang": "vi",
        "prompt": "Trưa mai bạn có về nhà không?",
        "answer": "明天中午你回家吗？",
        "answerPy": "Míngtiān zhōngwǔ nǐ huí jiā ma?",
        "note": "回家 — về nhà.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "吃饭",
    "py": "chī fàn",
    "pos": "Động từ",
    "vn": "ăn cơm",
    "hv": "ngật phạn",
    "em": "🍚",
    "lesson": 1,
    "ex_zh": "十二点吃饭。",
    "ex_py": "Shí'èr diǎn chī fàn.",
    "ex_vn": "12 giờ ăn cơm.",
    "exList": [
      {
        "zh": "十二点吃饭。",
        "py": "Shí'èr diǎn chī fàn.",
        "vn": "12 giờ ăn cơm."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "去吃饭",
        "py": "qù chī fàn",
        "vn": "đi ăn cơm"
      },
      {
        "zh": "中午吃饭",
        "py": "zhōngwǔ chī fàn",
        "vn": "trưa ăn cơm"
      },
      {
        "zh": "在家吃饭",
        "py": "zài jiā chī fàn",
        "vn": "ăn cơm ở nhà"
      },
      {
        "zh": "想吃饭",
        "py": "xiǎng chī fàn",
        "vn": "muốn ăn cơm"
      }
    ],
    "patterns": [
      {
        "s": "在 + nơi chốn + 吃饭",
        "m": "Ăn cơm ở đâu"
      },
      {
        "s": "吃饭 là ăn bữa nói chung; 吃米饭 là ăn đúng món cơm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta đi ăn cơm đi.",
        "answer": "我们去吃饭。",
        "answerPy": "Wǒmen qù chī fàn.",
        "note": "去吃饭 — đi ăn cơm, hai động từ nối nhau.",
        "pair": "我们……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn ăn cơm?",
        "answer": "你几点吃饭？",
        "answerPy": "Nǐ jǐ diǎn chī fàn?",
        "note": "吃饭 là ăn bữa nói chung.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "时候",
    "py": "shíhou",
    "pos": "Danh từ",
    "vn": "thời gian, lúc, khi",
    "hv": "thời hậu",
    "em": "⏳",
    "lesson": 2,
    "ex_zh": "爸爸什么时候回家？",
    "ex_py": "Bàba shénme shíhou huí jiā?",
    "ex_vn": "Chừng nào cha mới về đến nhà?",
    "exList": [
      {
        "zh": "爸爸什么时候回家？",
        "py": "Bàba shénme shíhou huí jiā?",
        "vn": "Chừng nào cha mới về đến nhà?"
      }
    ],
    "hanzi": [
      {
        "c": "时",
        "p": "shí",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "日(nhật) trái → 寺(biến thể) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "thời gian, lúc, giờ",
        "tip": "日(mặt trời, chỉ thời gian) + 寺(nơi đo giờ trang nghiêm) → THỜI GIAN, LÚC.",
        "cf": "诗 (shī – \"thơ\")",
        "w": "时候 / 小时"
      },
      {
        "c": "候",
        "p": "hòu",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "亻(nhân) trái → 侯(biến thể) phải",
        "rad": "亻 (nhân – người)",
        "mean": "chờ đợi; lúc, khi",
        "tip": "亻(người) đứng chờ, đo THỜI GIAN trôi qua.",
        "cf": "猴 (hóu – \"con khỉ\")",
        "w": "时候 / 等候"
      }
    ],
    "colloFull": [
      {
        "zh": "什么时候",
        "py": "shénme shíhou",
        "vn": "khi nào"
      },
      {
        "zh": "吃饭的时候",
        "py": "chī fàn de shíhou",
        "vn": "lúc ăn cơm"
      },
      {
        "zh": "看书的时候",
        "py": "kàn shū de shíhou",
        "vn": "lúc đọc sách"
      },
      {
        "zh": "工作的时候",
        "py": "gōngzuò de shíhou",
        "vn": "lúc làm việc"
      }
    ],
    "patterns": [
      {
        "s": "什么时候 + động từ",
        "m": "Hỏi thời điểm: 你什么时候回家？"
      },
      {
        "s": "động từ + 的时候",
        "m": "Lúc làm gì: 吃饭的时候"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Khi nào bạn về Trung Quốc?",
        "answer": "你什么时候回中国？",
        "answerPy": "Nǐ shénme shíhou huí Zhōngguó?",
        "note": "什么时候 đứng trước động từ.",
        "pair": "什么时候……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc ăn cơm tôi không xem phim.",
        "answer": "吃饭的时候我不看电影。",
        "answerPy": "Chī fàn de shíhou wǒ bú kàn diànyǐng.",
        "note": "động từ + 的时候 — lúc làm gì.",
        "pair": "……的时候"
      }
    ]
  },
  {
    "n": 7,
    "zh": "回",
    "py": "huí",
    "pos": "Động từ",
    "vn": "trở về, về",
    "hv": "hồi",
    "em": "🔙",
    "lesson": 2,
    "ex_zh": "爸爸什么时候回家？",
    "ex_py": "Bàba shénme shíhou huí jiā?",
    "ex_vn": "Chừng nào cha mới về đến nhà?",
    "exList": [
      {
        "zh": "爸爸什么时候回家？",
        "py": "Bàba shénme shíhou huí jiā?",
        "vn": "Chừng nào cha mới về đến nhà?"
      }
    ],
    "hanzi": [
      {
        "c": "回",
        "p": "huí",
        "type": "全包围结构 · Bao vây hoàn toàn",
        "st": 6,
        "ord": "囗(vi) ngoài → 口(khẩu) trong",
        "rad": "囗 (vi – vây quanh)",
        "mean": "trở về, về",
        "tip": "Hình vòng xoáy đi rồi lại vòng về điểm cũ → TRỞ VỀ.",
        "cf": "回 dễ nhầm 囘 (dị thể cổ)",
        "w": "回家 / 回来"
      }
    ],
    "colloFull": [
      {
        "zh": "回家",
        "py": "huí jiā",
        "vn": "về nhà"
      },
      {
        "zh": "回学校",
        "py": "huí xuéxiào",
        "vn": "về trường"
      },
      {
        "zh": "回中国",
        "py": "huí Zhōngguó",
        "vn": "về Trung Quốc"
      },
      {
        "zh": "什么时候回",
        "py": "shénme shíhou huí",
        "vn": "khi nào về"
      }
    ],
    "patterns": [
      {
        "s": "回 + nơi chốn",
        "m": "Về đâu: 回家 — không cần thêm giới từ"
      },
      {
        "s": "回 (về chỗ cũ) ≠ 去 (đi đến một nơi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi về nhà.",
        "answer": "今天下午我回家。",
        "answerPy": "Jīntiān xiàwǔ wǒ huí jiā.",
        "note": "回家 không cần giới từ.",
        "pair": "回 + nơi chốn"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ thầy về ạ?",
        "answer": "老师几点回？",
        "answerPy": "Lǎoshī jǐ diǎn huí?",
        "note": "Câu ngắn, lược bỏ nơi đến.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "我们",
    "py": "wǒmen",
    "pos": "Đại từ",
    "vn": "chúng tôi, chúng ta",
    "hv": "ngã môn",
    "em": "👥",
    "lesson": 2,
    "ex_zh": "我们什么时候去看电影？",
    "ex_py": "Wǒmen shénme shíhou qù kàn diànyǐng?",
    "ex_vn": "Khi nào chúng ta đi xem phim?",
    "exList": [
      {
        "zh": "我们什么时候去看电影？",
        "py": "Wǒmen shénme shíhou qù kàn diànyǐng?",
        "vn": "Khi nào chúng ta đi xem phim?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "我们的老师",
        "py": "wǒmen de lǎoshī",
        "vn": "giáo viên của chúng tôi"
      },
      {
        "zh": "我们家",
        "py": "wǒmen jiā",
        "vn": "nhà chúng tôi"
      },
      {
        "zh": "我们去",
        "py": "wǒmen qù",
        "vn": "chúng ta đi"
      },
      {
        "zh": "我们的学校",
        "py": "wǒmen de xuéxiào",
        "vn": "trường của chúng tôi"
      }
    ],
    "patterns": [
      {
        "s": "我 + 们",
        "m": "们 là đuôi số nhiều: 我们 · 你们"
      },
      {
        "s": "我们 · 你们 · 他们 — bộ ba đại từ số nhiều"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Giáo viên của chúng tôi là người Trung Quốc.",
        "answer": "我们的老师是中国人。",
        "answerPy": "Wǒmen de lǎoshī shì Zhōngguó rén.",
        "note": "我们的 + danh từ — của chúng tôi.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trưa nay chúng ta đi ăn cơm nhé.",
        "answer": "今天中午我们去吃饭。",
        "answerPy": "Jīntiān zhōngwǔ wǒmen qù chī fàn.",
        "note": "我们 vừa là chúng tôi, vừa là chúng ta.",
        "pair": "我们……"
      }
    ]
  },
  {
    "n": 9,
    "zh": "电影",
    "py": "diànyǐng",
    "pos": "Danh từ",
    "vn": "phim, điện ảnh",
    "hv": "điện ảnh",
    "em": "🎬",
    "lesson": 2,
    "ex_zh": "我们什么时候去看电影？",
    "ex_py": "Wǒmen shénme shíhou qù kàn diànyǐng?",
    "ex_vn": "Khi nào chúng ta đi xem phim?",
    "exList": [
      {
        "zh": "我们什么时候去看电影？",
        "py": "Wǒmen shénme shíhou qù kàn diànyǐng?",
        "vn": "Khi nào chúng ta đi xem phim?"
      }
    ],
    "hanzi": [
      {
        "c": "影",
        "p": "yǐng",
        "type": "左右结构 · Trái-phải",
        "st": 15,
        "ord": "景(cảnh) trái → 彡(sam) phải",
        "rad": "彡 (sam – nét vẽ, tia sáng)",
        "mean": "bóng, hình ảnh",
        "tip": "景(phong cảnh, ánh sáng) + 彡(những tia sáng) → BÓNG, HÌNH ẢNH do ánh sáng chiếu ra = PHIM ẢNH.",
        "cf": "景 (jǐng – \"cảnh\")",
        "w": "电影"
      }
    ],
    "colloFull": [
      {
        "zh": "看电影",
        "py": "kàn diànyǐng",
        "vn": "xem phim"
      },
      {
        "zh": "中国电影",
        "py": "Zhōngguó diànyǐng",
        "vn": "phim Trung Quốc"
      },
      {
        "zh": "好看的电影",
        "py": "hǎokàn de diànyǐng",
        "vn": "bộ phim hay"
      },
      {
        "zh": "想看电影",
        "py": "xiǎng kàn diànyǐng",
        "vn": "muốn xem phim"
      }
    ],
    "patterns": [
      {
        "s": "看 + 电影",
        "m": "Xem phim — dùng động từ 看"
      },
      {
        "s": "电影 và 电脑 đều bắt đầu bằng chữ 电"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi rất muốn xem phim Trung Quốc.",
        "answer": "我很想看中国电影。",
        "answerPy": "Wǒ hěn xiǎng kàn Zhōngguó diànyǐng.",
        "note": "看电影 — xem phim, dùng 看.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ phim này rất hay.",
        "answer": "这个电影很好看。",
        "answerPy": "Zhège diànyǐng hěn hǎokàn.",
        "note": "好看 ghép giống 好吃: nhìn thấy hay.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 10,
    "zh": "住",
    "py": "zhù",
    "pos": "Động từ",
    "vn": "ở, trú ngụ",
    "hv": "trú",
    "em": "🏠",
    "lesson": 3,
    "ex_zh": "你想在北京住几天？",
    "ex_py": "Nǐ xiǎng zài Běijīng zhù jǐ tiān?",
    "ex_vn": "Anh định ở Bắc Kinh mấy ngày?",
    "exList": [
      {
        "zh": "你想在北京住几天？",
        "py": "Nǐ xiǎng zài Běijīng zhù jǐ tiān?",
        "vn": "Anh định ở Bắc Kinh mấy ngày?"
      }
    ],
    "hanzi": [
      {
        "c": "住",
        "p": "zhù",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 主(chủ) phải",
        "rad": "亻 (nhân – người)",
        "mean": "ở, trú ngụ",
        "tip": "亻(người) + 主(làm chủ) → người làm chủ một nơi để Ở, TRÚ NGỤ.",
        "cf": "往 (wǎng – \"hướng về\", cùng phần phải\")",
        "w": "住三天 / 住在"
      }
    ],
    "colloFull": [
      {
        "zh": "住在中国",
        "py": "zhù zài Zhōngguó",
        "vn": "sống ở Trung Quốc"
      },
      {
        "zh": "住这儿",
        "py": "zhù zhèr",
        "vn": "ở đây"
      },
      {
        "zh": "住在学校",
        "py": "zhù zài xuéxiào",
        "vn": "ở trong trường"
      },
      {
        "zh": "住哪儿",
        "py": "zhù nǎr",
        "vn": "ở chỗ nào"
      }
    ],
    "patterns": [
      {
        "s": "住 + 在 + nơi chốn",
        "m": "Ở tại đâu — chỗ sinh sống lâu dài: 住在中国"
      },
      {
        "s": "住 (sống lâu dài) ≠ 在 (có mặt lúc này)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi sống ở Trung Quốc.",
        "answer": "我住在中国。",
        "answerPy": "Wǒ zhù zài Zhōngguó.",
        "note": "住在 + nơi chốn — sống ở đâu.",
        "pair": "住在……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn sống ở đâu?",
        "answer": "你住在哪儿？",
        "answerPy": "Nǐ zhù zài nǎr?",
        "note": "Câu có 哪儿 thì không thêm 吗.",
        "pair": "在哪儿？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "前",
    "py": "qián",
    "pos": "Danh từ",
    "vn": "trước, trước khi",
    "hv": "tiền",
    "em": "⏮️",
    "lesson": 3,
    "ex_zh": "星期五前能回家吗？",
    "ex_py": "Xīngqī wǔ qián néng huí jiā ma?",
    "ex_vn": "Anh có thể về nhà trước thứ sáu được không?",
    "exList": [
      {
        "zh": "星期五前能回家吗？",
        "py": "Xīngqī wǔ qián néng huí jiā ma?",
        "vn": "Anh có thể về nhà trước thứ sáu được không?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "吃饭前",
        "py": "chī fàn qián",
        "vn": "trước khi ăn"
      },
      {
        "zh": "回家前",
        "py": "huí jiā qián",
        "vn": "trước khi về nhà"
      },
      {
        "zh": "工作前",
        "py": "gōngzuò qián",
        "vn": "trước khi làm việc"
      },
      {
        "zh": "六点前",
        "py": "liù diǎn qián",
        "vn": "trước sáu giờ"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 前",
        "m": "Trước khi làm gì: 吃饭前"
      },
      {
        "s": "前 (trước khi, thời gian) và 前面 (phía trước, nơi chốn)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi ăn cơm tôi không uống trà.",
        "answer": "吃饭前我不喝茶。",
        "answerPy": "Chī fàn qián wǒ bù hē chá.",
        "note": "động từ + 前 — trước khi làm gì.",
        "pair": "……前"
      },
      {
        "promptLang": "vi",
        "prompt": "Trước sáu giờ tôi về nhà.",
        "answer": "六点前我回家。",
        "answerPy": "Liù diǎn qián wǒ huí jiā.",
        "note": "giờ + 前 — trước mấy giờ.",
        "pair": "……前"
      }
    ]
  }
];

const wuData = [
  {img:'⏰',label:'现在',py:'xiànzài',letter:'A'},
  {img:'🎬',label:'电影',py:'diànyǐng',letter:'B'},
  {img:'🔙',label:'回',py:'huí',letter:'C'},
  {img:'🏠',label:'住',py:'zhù',letter:'D'},
  {img:'⏳',label:'时候',py:'shíhou',letter:'E'},
  {img:'🍚',label:'吃饭',py:'chī fàn',letter:'F'},
];

var dialogData = [
  {scene:'Ở thư viện · Hỏi giờ',
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ rồi?'},
     {sp:1,zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
     {sp:0,zh:'中午几点吃饭？',py:'Zhōngwǔ jǐ diǎn chī fàn?',vn:'Mấy giờ thì ăn cơm trưa vậy?'},
     {sp:1,zh:'十二点吃饭。',py:'Shí\'èr diǎn chī fàn.',vn:'12 giờ.'},
   ]},
  {scene:'Ở nhà · Hỏi giờ về nhà',
   lines:[
     {sp:0,zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
     {sp:1,zh:'下午五点。',py:'Xiàwǔ wǔ diǎn.',vn:'5 giờ chiều.'},
     {sp:0,zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
     {sp:1,zh:'六点三十分。',py:'Liù diǎn sānshí fēn.',vn:'6 giờ rưỡi.'},
   ]},
  {scene:'Ở nhà · Kế hoạch đi Bắc Kinh',
   lines:[
     {sp:0,zh:'我星期一去北京。',py:'Wǒ xīngqī yī qù Běijīng.',vn:'Thứ hai anh sẽ đi Bắc Kinh.'},
     {sp:1,zh:'你想在北京住几天？',py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',vn:'Anh định ở Bắc Kinh mấy ngày?'},
     {sp:0,zh:'住三天。',py:'Zhù sān tiān.',vn:'Ba ngày.'},
     {sp:1,zh:'星期五前能回家吗？',py:'Xīngqī wǔ qián néng huí jiā ma?',vn:'Anh có thể về nhà trước thứ sáu được không?'},
     {sp:0,zh:'能。',py:'Néng.',vn:'Chắc là được.'},
   ]},
];

// Điền từ — đổi giờ/số ngày so với bài khoá
var fillData = [
  {pre:'Bạn hỏi giờ hiện tại: “',blank:'现在',post:'几点？”',hint:'(bây giờ)',ans:'现在'},
  {pre:'Bạn nói bây giờ là 3 giờ 20 phút: “现在三点二十',blank:'分',post:'。”',hint:'(phút)',ans:'分'},
  {pre:'Bạn hỏi khi nào mẹ về nhà: “妈妈什么',blank:'时候',post:'回家？”',hint:'(khi nào, lúc nào)',ans:'时候'},
  {pre:'Bạn nói mình sẽ về nhà lúc 7 giờ chiều: “下午七',blank:'点',post:'回家。”',hint:'(giờ)',ans:'点'},
  {pre:'Bạn hỏi khi nào đi xem phim: “我们什么时候去看',blank:'电影',post:'？”',hint:'(phim)',ans:'电影'},
  {pre:'Bạn hỏi bạn định ở lại mấy ngày: “你想',blank:'住',post:'几天？”',hint:'(ở, trú ngụ)',ans:'住'},
  {pre:'Bạn hỏi có thể về nhà trước thứ ba không: “星期二',blank:'前',post:'能回家吗？”',hint:'(trước — mốc thời gian)',ans:'前'},
  {pre:'Bạn khẳng định có thể về nhà đúng hẹn: “你能回家吗？',blank:'能',post:'。”',hint:'(có thể)',ans:'能'},
];

// Sắp xếp — đổi giờ/số ngày so với bài khoá
var sortData = [
  {words:['现在','几','点','？'],ans:'现在几点？',audio:'现在几点？'},
  {words:['现在','十','点','十','分','。'],ans:'现在十点十分。',audio:'现在十点十分。'},
  {words:['爸爸','什么','时候','回家','？'],ans:'爸爸什么时候回家？',audio:'爸爸什么时候回家？'},
  {words:['我们','什么','时候','去','看','电影','？'],ans:'我们什么时候去看电影？',audio:'我们什么时候去看电影？'},
  {words:['你','想','在','北京','住','几','天','？'],ans:'你想在北京住几天？',audio:'你想在北京住几天？'},
  {words:['星期','五','前','能','回家','吗','？'],ans:'星期五前能回家吗？',audio:'星期五前能回家吗？'},
];

var matchData = [
  {left:'现在几点？',right:'现在十点十分。'},
  {left:'中午几点吃饭？',right:'十二点吃饭。'},
  {left:'爸爸什么时候回家？',right:'下午五点。'},
  {left:'你想在北京住几天？',right:'住三天。'},
  {left:'星期五前能回家吗？',right:'能。'},
];

// Trắc nghiệm — trọng tâm cách nói giờ & trạng ngữ thời gian, không audio
var mcData = [
  {q:'＿＿几点？',opts:['现在','什么','怎么','哪儿'],ans:0},
  {q:'Số "2 giờ" nói thế nào (không dùng 二)?',opts:['两点','二点','两个点','二个点'],ans:0},
  {q:'Trạng ngữ chỉ thời gian thường đứng ở đâu trong câu?',opts:['trước hoặc ngay sau chủ ngữ','luôn ở cuối câu','luôn tách biệt hoàn toàn ở đầu câu','sau động từ'],ans:0},
  {q:'"前" trong "星期五前" nghĩa là gì?',opts:['trước (một mốc thời gian)','sau','trong','ngoài'],ans:0},
  {q:'"时候" nghĩa là gì?',opts:['thời gian, lúc, khi','giờ','phút','ngày'],ans:0},
  {q:'"回" nghĩa là gì?',opts:['trở về, về','đi','ở','đến'],ans:0},
  {q:'"电影" nghĩa là gì?',opts:['phim, điện ảnh','tivi','điện thoại','máy tính'],ans:0},
  {q:'"住" nghĩa là gì?',opts:['ở, trú ngụ','đi','về','đến'],ans:0},
  {q:'Câu hỏi giờ ĐÚNG ngữ pháp là?',opts:['现在几点？','现在几点钟的？','几点现在？','点几现在？'],ans:0},
  {q:'"我们" nghĩa là gì?',opts:['chúng tôi, chúng ta','các bạn','họ','bạn và tôi'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ rồi?'},
      {zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
      {zh:'爸爸什么时候回家？',py:'Bàba shénme shíhou huí jiā?',vn:'Chừng nào cha mới về đến nhà?'},
      {zh:'我们什么时候去看电影？',py:'Wǒmen shénme shíhou qù kàn diànyǐng?',vn:'Khi nào chúng ta đi xem phim?'},
      {zh:'你想在北京住几天？',py:'Nǐ xiǎng zài Běijīng zhù jǐ tiān?',vn:'Anh định ở Bắc Kinh mấy ngày?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng số trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'现在＿＿点。',frame_py:'Xiànzài ___ diǎn.',vn:'Bây giờ là ＿＿ giờ.',options:['十','十二','六'],samples:['现在十点。','现在十二点。','现在六点。']},
      {frame:'我们＿＿点去看电影。',frame_py:'Wǒmen ___ diǎn qù kàn diànyǐng.',vn:'Chúng ta ＿＿ giờ đi xem phim.',options:['六','七','八'],samples:['我们六点去看电影。','我们七点去看电影。','我们八点去看电影。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'⏰ Tình huống 1 — Hỏi giờ ngoài đường',
       guide:'Bạn không mang đồng hồ và muốn hỏi giờ một người lạ ngoài đường.',
       structure:['现在几点？','现在＿＿点＿＿分。'],
       sample:'现在几点？现在十点十分。',
       sample_vn:'Bây giờ là mấy giờ? Bây giờ là 10 giờ 10 phút.',
       note:'Khi nói giờ, số "2" phải đọc là 两 (liǎng) chứ không phải 二 (èr) — ví dụ 两点 chứ không nói 二点.'},
      {role:'🏠 Tình huống 2 — Hẹn giờ về nhà với người thân',
       guide:'Bạn gọi điện hỏi cha mấy giờ về nhà, và hẹn giờ đi xem phim cùng gia đình.',
       structure:['爸爸什么时候回家？','我们什么时候去看电影？'],
       sample:'爸爸什么时候回家？我们什么时候去看电影？',
       sample_vn:'Chừng nào cha về nhà? Khi nào chúng ta đi xem phim?',
       note:'Trạng ngữ chỉ thời gian (下午五点, 六点三十分) luôn đứng TRƯỚC động từ trong câu tiếng Trung — không đặt ở cuối câu như tiếng Việt hay làm.'},
      {role:'✈️ Tình huống 3 — Báo lịch trình đi công tác',
       guide:'Bạn báo cho gia đình biết kế hoạch đi Bắc Kinh của mình và hẹn ngày về.',
       structure:['我星期一去北京。','星期五前能回家吗？'],
       sample:'我星期一去北京。你想在北京住几天？住三天。星期五前能回家吗？能。',
       sample_vn:'Thứ hai anh sẽ đi Bắc Kinh. Anh định ở mấy ngày? Ba ngày. Anh có thể về trước thứ sáu không? Được.',
       note:'前 sau một mốc thời gian cụ thể (星期五前) nghĩa là "trước mốc đó" — rất hữu ích khi đặt deadline hoặc hẹn lịch trong công việc thực tế.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 11 + ôn lại từ bài 1-10
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bây giờ là mười giờ mười phút.', zh:'现在十点十分。', py:'Xiànzài shí diǎn shí fēn.'},
  {vi:'Chúng tôi mấy giờ ăn cơm?', zh:'我们几点吃饭？', py:'Wǒmen jǐ diǎn chī fàn?'},
  {vi:'Lúc nào bạn về nhà?', zh:'你什么时候回家？', py:'Nǐ shénme shíhou huí jiā?'},
  {vi:'Trước thứ Sáu, tôi muốn đọc quyển sách này.', zh:'星期五前，我想看这本书。', py:'Xīngqīwǔ qián, wǒ xiǎng kàn zhè běn shū.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bây giờ mấy giờ? Bây giờ mười hai giờ, chúng ta ăn cơm đi.', zh:'现在几点？现在十二点，我们吃饭吧。', py:'Xiànzài jǐ diǎn? Xiànzài shí\'èr diǎn, wǒmen chī fàn ba.'},
  {vi:'Khi nào bạn về nhà? Tôi sáu giờ về nhà.', zh:'你什么时候回家？我六点回家。', py:'Nǐ shénme shíhou huí jiā? Wǒ liù diǎn huí jiā.'},
  {vi:'Trước thứ Sáu, tôi muốn đọc quyển sách này và quyển sách kia.', zh:'星期五前，我想看这本书和那本书。', py:'Xīngqīwǔ qián, wǒ xiǎng kàn zhè běn shū hé nà běn shū.'},
  {vi:'Bây giờ mấy giờ rồi?', zh:'现在几点了？', py:'Xiànzài jǐ diǎn le?'},
];
