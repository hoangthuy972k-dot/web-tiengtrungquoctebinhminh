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
      },
      {
        "zh": "现在我在家看书。",
        "py": "Xiànzài wǒ zài jiā kàn shū.",
        "vn": "Bây giờ tôi đang ở nhà đọc sách."
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
      },
      {
        "zh": "我下午三点去商店。",
        "py": "Wǒ xiàwǔ sān diǎn qù shāngdiàn.",
        "vn": "Ba giờ chiều tôi đi cửa hàng."
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
      },
      {
        "zh": "现在十二点十分。",
        "py": "Xiànzài shí'èr diǎn shí fēn.",
        "vn": "Bây giờ là 12 giờ 10 phút."
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
      },
      {
        "zh": "中午你想吃什么？",
        "py": "Zhōngwǔ nǐ xiǎng chī shénme?",
        "vn": "Buổi trưa bạn muốn ăn gì?"
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
      },
      {
        "zh": "你想几点吃饭？",
        "py": "Nǐ xiǎng jǐ diǎn chī fàn?",
        "vn": "Bạn muốn mấy giờ ăn cơm?"
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
      },
      {
        "zh": "你什么时候去北京？",
        "py": "Nǐ shénme shíhou qù Běijīng?",
        "vn": "Khi nào bạn đi Bắc Kinh?"
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
      },
      {
        "zh": "我下午五点回家。",
        "py": "Wǒ xiàwǔ wǔ diǎn huí jiā.",
        "vn": "Năm giờ chiều tôi về nhà."
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
      },
      {
        "zh": "我们是同学。",
        "py": "Wǒmen shì tóngxué.",
        "vn": "Chúng tôi là bạn cùng lớp."
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
      },
      {
        "zh": "我想看中国电影。",
        "py": "Wǒ xiǎng kàn Zhōngguó diànyǐng.",
        "vn": "Tôi muốn xem phim Trung Quốc."
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
      },
      {
        "zh": "你住在哪儿？",
        "py": "Nǐ zhù zài nǎr?",
        "vn": "Bạn sống ở đâu?"
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
      },
      {
        "zh": "十二点前我能回家。",
        "py": "Shí'èr diǎn qián wǒ néng huí jiā.",
        "vn": "Trước 12 giờ tôi có thể về nhà."
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

// Điền từ — mỗi câu một tình huống mới; ôn 在 + nơi chốn (bài 9), 后面 (bài 10), 想/去 + V (bài 7–8), ngày tháng (bài 7)
var fillData = [
  {pre:'Bạn gọi cho mẹ: “妈妈，你',blank:'现在',post:'在哪儿？” — “在商店。”',hint:'(bây giờ)',ans:'现在',exp:'现在 (bây giờ) là trạng ngữ thời gian, đứng trước động từ: 你现在在哪儿？'},
  {pre:'“你几点去医院？” — “下午两',blank:'点',post:'。”',hint:'(giờ)',ans:'点',exp:'Nói giờ: số + 点; 2 giờ là 两点, không nói 二点.'},
  {pre:'Đồng hồ chỉ 8:05. Bạn nói: “现在八点零五',blank:'分',post:'。”',hint:'(phút)',ans:'分',exp:'Số + 分 = số phút; phút từ 1–9 thường thêm 零: 八点零五分.'},
  {pre:'“你',blank:'中午',post:'在哪儿吃饭？” — “在学校。”',hint:'(buổi trưa)',ans:'中午',exp:'中午 = buổi trưa; thời gian đứng trước 在 + nơi chốn + động từ.'},
  {pre:'Mẹ gọi cả nhà: “十二点了，',blank:'吃饭',post:'了！”',hint:'(ăn cơm)',ans:'吃饭',exp:'吃饭 = ăn cơm (bữa ăn nói chung); 吃饭了 = ăn cơm thôi.'},
  {pre:'“你朋友什么',blank:'时候',post:'去中国？” — “九月。”',hint:'(lúc, khi)',ans:'时候',exp:'什么时候 = khi nào, hỏi thời điểm; trả lời bằng thời gian (九月).'},
  {pre:'Đồng nghiệp hỏi: “你今天几点',blank:'回',post:'家？” — “六点。”',hint:'(trở về)',ans:'回',exp:'回家 = về nhà; 回 = trở về nơi của mình.'},
  {pre:'Gặp hai bạn mới, bạn giới thiệu nhóm mình: “',blank:'我们',post:'是中国人，你们呢？”',hint:'(chúng tôi)',ans:'我们',exp:'我们 = chúng tôi (có cả người nói); 你们 = các bạn (không có người nói).'},
  {pre:'“明天下午你想做什么？” — “我想去看',blank:'电影',post:'。”',hint:'(phim)',ans:'电影',exp:'看电影 = xem phim; 去 + 看电影 = đi xem phim.'},
  {pre:'Bạn mới chuyển nhà, kể với bạn cùng lớp: “我现在',blank:'住',post:'在医院后面。”',hint:'(ở, sống)',ans:'住',exp:'住在 + nơi chốn = sống ở …: 住在医院后面.'},
  {pre:'Cô giáo dặn: “星期四',blank:'前',post:'，请写一百个汉字。”',hint:'(trước — sau mốc thời gian)',ans:'前',exp:'Mốc thời gian + 前 = trước mốc đó: 星期四前 = trước thứ Năm (前 đứng SAU mốc, ngược tiếng Việt).'},
];

// Sắp xếp — thời gian đứng trước động từ, từ lớn đến nhỏ; mỗi câu một mẫu khác
var sortData = [
  {words:['我','明天','下午','三','点','去','医院','。'],ans:'我明天下午三点去医院。',audio:'我明天下午三点去医院。'},
  {words:['我们','中午','在','学校','吃饭','。'],ans:'我们中午在学校吃饭。',audio:'我们中午在学校吃饭。'},
  {words:['你','什么','时候','回','中国','？'],ans:'你什么时候回中国？',audio:'你什么时候回中国？'},
  {words:['谢朋','的','爸爸','住','在','北京','。'],ans:'谢朋的爸爸住在北京。',audio:'谢朋的爸爸住在北京。'},
  {words:['十','月','五','号','前','我','想','去','北京','。'],ans:'十月五号前我想去北京。',audio:'十月五号前我想去北京。'},
  {words:['妈妈','什么','时候','去','医院','？'],ans:'妈妈什么时候去医院？',audio:'妈妈什么时候去医院？'},
  {words:['爸爸','今天','中午','不','回家','吃饭','。'],ans:'爸爸今天中午不回家吃饭。',audio:'爸爸今天中午不回家吃饭。'},
];

// Nối — câu hỏi ↔ câu trả lời (đáp án mỗi cặp chỉ hợp một câu hỏi)
var matchData = [
  {left:'电影几点？',right:'下午三点十分。'},
  {left:'你什么时候去北京？',right:'九月一号。'},
  {left:'你们中午回家吃饭吗？',right:'不回家，在学校吃饭。'},
  {left:'你住在哪儿？',right:'在北京。'},
  {left:'星期三前你能回家吗？',right:'能，星期二回家。'},
  {left:'现在十点吗？',right:'不是，九点五十分。'},
];

// Trắc nghiệm — chọn câu đúng tình huống / câu đáp / câu sai; không hỏi lý thuyết
var mcData = [
  {q:'Bạn muốn nói: “Chiều nay 4 giờ tôi đi xem phim.”',opts:['我今天下午四点去看电影。','我去看电影今天下午四点。','我今天四点下午去看电影。','今天下午我去看电影四点。'],ans:0,exp:'Thời gian đứng TRƯỚC động từ và đi từ lớn đến nhỏ: 今天 → 下午 → 四点.'},
  {q:'Đồng hồ chỉ 2:15. Bạn nói:',opts:['现在两点十五分。','现在二点十五分。','现在十五分两点。','现在两个点十五分。'],ans:0,exp:'2 giờ là 两点 (không nói 二点), không thêm 个; giờ trước, phút sau.'},
  {q:'Câu nào SAI?',opts:['我去学校八点。','我八点去学校。','李月九月去北京。','你今天能回家吗？'],ans:0,exp:'Thời gian phải đứng TRƯỚC động từ: 我八点去学校; không đặt cuối câu như tiếng Việt “tôi đi học lúc 8 giờ”.'},
  {q:'A: “王方什么时候回北京？” — B đáp:',opts:['星期五回。','她是医生。','在商店后面。','她有一个女儿。'],ans:0,exp:'什么时候 hỏi thời điểm nên trả lời bằng thời gian (星期五); các câu khác trả lời cho “là ai / ở đâu / có gì”.'},
  {q:'Bạn muốn hỏi bạn mình: “Mấy giờ chúng ta đi?”',opts:['我们几点去？','我们去几点？','我们几点去吗？','我们多少点去？'],ans:0,exp:'几点 đứng trước động từ; câu đã có 几 thì không thêm 吗; hỏi giờ dùng 几, không dùng 多少.'},
  {q:'Câu nào SAI?',opts:['前星期五我回家。','星期五前我回家。','三点前我能回学校。','明天中午前我去医院。'],ans:0,exp:'前 đứng SAU mốc thời gian: 星期五前 = trước thứ Sáu; không nói 前星期五.'},
  {q:'Bạn muốn nói: “Con gái tôi sống ở Bắc Kinh.”',opts:['我女儿住在北京。','我女儿北京住在。','我女儿在住北京。','我女儿住在北京里。'],ans:0,exp:'住在 + nơi chốn; tên thành phố, đất nước không thêm 里 (không nói 北京里).'},
  {q:'Bạn nói với cô giáo về cả nhóm (có bạn): “Cô ơi, ngày mai chúng em không đến trường được.”',opts:['老师，我们明天不能去学校。','老师，你们明天不能去学校。','老师，我们不能去学校明天。','老师，我们明天没有去学校。'],ans:0,exp:'我们 = chúng em (có người nói), 你们 = các bạn; 明天 đứng trước động từ; “không thể” là 不能.'},
  {q:'Câu nào SAI?',opts:['我在商店下午工作。','我下午在商店工作。','她今天在家吃饭。','明天李月在学校吗？'],ans:0,exp:'Thứ tự: chủ ngữ + thời gian + 在 nơi chốn + động từ: 我下午在商店工作.'},
  {q:'Bạn muốn nói: “Bây giờ mẹ tôi làm việc ở Bắc Kinh.”',opts:['我妈妈现在在北京工作。','我妈妈在北京工作现在。','我妈妈现在工作在北京。','现在我妈妈北京在工作。'],ans:0,exp:'现在 đứng trước động từ (hoặc đầu câu); 在 + nơi chốn cũng đứng trước động từ 工作.'},
  {q:'Bạn muốn nói: “Trước ngày 3 tháng 5 tôi về Trung Quốc.”',opts:['五月三号前我回中国。','前五月三号我回中国。','三号五月前我回中国。','五月三号我前回中国。'],ans:0,exp:'Ngày tháng: 月 trước, 号 sau (五月三号); 前 đứng ngay sau mốc: 五月三号前.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý: 点 (diǎn) thanh 3, 分 (fēn) thanh 1; 2 giờ đọc 两点 (liǎng diǎn).',
    models:[
      {zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ là mấy giờ?'},
      {zh:'现在十点十分。',py:'Xiànzài shí diǎn shí fēn.',vn:'Bây giờ là 10 giờ 10 phút.'},
      {zh:'我星期一去北京。',py:'Wǒ xīngqīyī qù Běijīng.',vn:'Thứ Hai tôi đi Bắc Kinh.'},
      {zh:'我们下午五点回学校。',py:'Wǒmen xiàwǔ wǔ diǎn huí xuéxiào.',vn:'5 giờ chiều chúng tôi về trường.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng cụm thời gian trong ô gợi ý. Nhớ: thời gian đứng TRƯỚC động từ. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我朋友＿＿去北京。',frame_py:'Wǒ péngyou ___ qù Běijīng.',vn:'Bạn tôi ＿＿ đi Bắc Kinh.',options:['明天中午','七月八号','下午两点'],samples:['我朋友明天中午去北京。','我朋友七月八号去北京。','我朋友下午两点去北京。']},
      {frame:'我们＿＿吃饭。',frame_py:'Wǒmen ___ chī fàn.',vn:'Chúng tôi ăn cơm lúc ＿＿.',options:['十二点','十一点五十分','一点十分'],samples:['我们十二点吃饭。','我们十一点五十分吃饭。','我们一点十分吃饭。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'⏰ Tình huống 1 — Kể một ngày của bạn',
       guide:'Một người bạn Trung Quốc hỏi về một ngày của bạn: mấy giờ đi học / đi làm, trưa ăn cơm ở đâu, mấy giờ về nhà.',
       structure:['我＿＿点去＿＿。','中午在＿＿吃饭。','下午＿＿回家。'],
       sample:'我八点去医院工作，中午在医院吃饭，下午五点十分回家。',
       sample_vn:'Tôi 8 giờ đi làm ở bệnh viện, trưa ăn cơm ở bệnh viện, 5 giờ 10 chiều về nhà.',
       note:'Người Việt hay nói “tôi đi làm lúc 8 giờ” rồi dịch thành 我去工作八点 — sai. Thời gian luôn đứng TRƯỚC động từ: 我八点去工作.'},
      {role:'🎬 Tình huống 2 — Hẹn bạn đi xem phim',
       guide:'Bạn rủ bạn cùng lớp đi xem phim: hỏi ngày nào, đề nghị giờ, bạn kia đồng ý.',
       structure:['我们星期几去看电影？','＿＿下午＿＿点，好吗？'],
       sample:'我们星期几去看电影？——星期六下午三点，好吗？——好！',
       sample_vn:'Thứ mấy chúng mình đi xem phim? — Ba giờ chiều thứ Bảy, được không? — Được!',
       note:'Đề nghị một giờ hẹn, thêm ……，好吗？ ở cuối câu cho lịch sự. Thứ tự: ngày (星期六) → buổi (下午) → giờ (三点).'},
      {role:'✈️ Tình huống 3 — Báo lịch đi Bắc Kinh',
       guide:'Bạn sắp đi Bắc Kinh. Nói với đồng nghiệp ngày đi, bạn ở đâu và về trước ngày nào (dùng 前).',
       structure:['我＿＿去北京。','住在＿＿。','＿＿前回家。'],
       sample:'我九月三号去北京，住在朋友家，十号前回家。',
       sample_vn:'Ngày 3 tháng 9 tôi đi Bắc Kinh, ở nhà bạn, trước ngày 10 về nhà.',
       note:'Mốc thời gian + 前 (十号前 = trước ngày 10): 前 đứng SAU mốc, ngược với tiếng Việt “trước ngày 10”.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 11 + ôn lại từ bài 1-10
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngày mai tôi về nhà lúc 4 giờ 20 chiều.', zh:'我明天下午四点二十分回家。', py:'Wǒ míngtiān xiàwǔ sì diǎn èrshí fēn huí jiā.'},
  {vi:'Chúng tôi sống ở phía sau trường học.', zh:'我们住在学校后面。', py:'Wǒmen zhù zài xuéxiào hòumiàn.'},
  {vi:'Trước 8 giờ tôi có thể đến trường.', zh:'八点前我能去学校。', py:'Bā diǎn qián wǒ néng qù xuéxiào.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Buổi trưa chúng tôi ra phía trước trường ăn cơm.', zh:'中午我们去学校前面吃饭。', py:'Zhōngwǔ wǒmen qù xuéxiào qiánmiàn chī fàn.'},
  {vi:'Thứ Sáu Tạ Bằng đi Bắc Kinh thăm mẹ.', zh:'谢朋星期五去北京看他妈妈。', py:'Xiè Péng xīngqīwǔ qù Běijīng kàn tā māma.'},
  {vi:'Trước khi về nhà, tôi đi cửa hàng mua hai cái cốc.', zh:'回家前，我去商店买两个杯子。', py:'Huí jiā qián, wǒ qù shāngdiàn mǎi liǎng ge bēizi.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'现在三点四十分，电影四点。',
   questions:[
     {q:'Còn bao lâu nữa thì phim bắt đầu?',opts:['40 phút','20 phút','1 tiếng'],ans:1,exp:'Bây giờ 三点四十分, phim lúc 四点 → còn 20 phút.'},
   ]},
  {audio:'李月的爸爸是医生，他中午不回家，下午六点回家。',
   questions:[
     {q:'Bố của Lý Nguyệt về nhà lúc mấy giờ?',opts:['12 giờ trưa','4 giờ chiều','6 giờ chiều'],ans:2,exp:'中午不回家 = trưa không về; 下午六点回家 = 6 giờ chiều về nhà.'},
   ]},
  {audio:'李月住在学校里，王方住在商店后面。',
   questions:[
     {q:'Ai sống trong trường?',opts:['Lý Nguyệt','Vương Phương','Cả hai người'],ans:0,exp:'李月住在学校里 = Lý Nguyệt sống trong trường.'},
     {q:'Vương Phương sống ở đâu?',opts:['Phía trước cửa hàng','Phía sau cửa hàng','Trong trường'],ans:1,exp:'商店后面 = phía sau cửa hàng.'},
   ]},
  {audio:'我们星期六去北京，星期二回家。',
   questions:[
     {q:'Họ về nhà vào thứ mấy?',opts:['Thứ Bảy','Thứ Ba','Thứ Hai'],ans:1,exp:'星期二回家 = thứ Ba về nhà; 星期六 là ngày đi.'},
   ]},
  {audio:'今天是九月八号，星期四。我朋友九月十号回美国。',
   questions:[
     {q:'Bạn của người nói về Mỹ vào thứ mấy?',opts:['Thứ Năm','Thứ Sáu','Thứ Bảy'],ans:2,exp:'Hôm nay 8/9 là thứ Năm; 10/9 là hai ngày sau → thứ Bảy.'},
   ]},
  {audio:'妈妈，现在一点了，我想吃饭！',
   questions:[
     {q:'Bây giờ là mấy giờ?',opts:['1 giờ','7 giờ','11 giờ'],ans:0,exp:'一点 = 1 giờ; chú ý phân biệt yī (一) và qī (七).'},
   ]},
];

// ===== Sach bai tap (phan Doc + Chu Han, khong pinyin) =====
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài tập chép chữ theo thứ tự nét (午, 电) hãy luyện trong vở.',
      listening: [],
      reading: [
        { n: 16, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-11-wb/q16.jpg', prompt: '我们',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '我们: chúng tôi, chúng ta. Tranh là một nhóm bạn đứng chụm vào nhau → Đúng.' },
        { n: 17, img: '/images/hsk1-bai-11-wb/q17.jpg', prompt: '米饭',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '米饭 là cơm (gạo trắng nấu chín). Tranh là một đĩa thức ăn chiên (món mặn), không phải cơm trắng → Sai.' },
        { n: 18, img: '/images/hsk1-bai-11-wb/q18.jpg', prompt: '中午',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A',
          vn: '中午: buổi trưa. Tranh là hai đồng hồ đều chỉ 12 giờ, đồng hồ bên phải có mặt trời → 12 giờ trưa → Đúng.' },
        { n: 19, img: '/images/hsk1-bai-11-wb/q19.jpg', prompt: '工作',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '工作: làm việc. Tranh là mấy ông cụ đang ngồi chơi bài, không phải đang làm việc → Sai.' },
        { n: 20, img: '/images/hsk1-bai-11-wb/q20.jpg', prompt: '电影',
          options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B',
          vn: '电影 là phim (điện ảnh). Tranh là một cái máy tính xách tay (电脑) → Sai.' },

        { n: 21, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
            { key: 'A', text: '不去学校，我在家。' },
            { key: 'B', text: '我不去，没有时间。' },
            { key: 'C', text: '不工作，你12点来吧。' },
            { key: 'D', text: '星期五前。' },
            { key: 'E', text: '他不想去。' },
            { key: 'F', text: '好的，谢谢！' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '下午三点你去学校吗？', answer: 'A',
          vn: '3 giờ chiều bạn có đến trường không? → A: Không đến trường, tôi ở nhà.' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你什么时候回北京？', answer: 'D',
          vn: 'Khi nào bạn về Bắc Kinh? → D: Trước thứ Sáu. (什么时候 hỏi thời gian → trả lời bằng mốc thời gian)' },
        { n: 23, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '中午你工作吗？', answer: 'C',
          vn: 'Buổi trưa bạn có làm việc không? → C: Không làm việc, 12 giờ bạn đến nhé.' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你中午去吃饭吗？', answer: 'B',
          vn: 'Trưa nay bạn có đi ăn cơm không? → B: Tôi không đi, không có thời gian.' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '大卫去看电影吗？', answer: 'E',
          vn: 'David có đi xem phim không? → E: Cậu ấy không muốn đi. (hỏi về 大卫 → trả lời bằng 他)' },

        { n: 26, part: 'Phần 3 · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'A', text: '点' },
            { key: 'B', text: '分' },
            { key: 'C', text: '时候' },
            { key: 'D', text: '名字' },
            { key: 'E', text: '前' },
            { key: 'F', text: '住' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我在王方家（　）一个星期，星期六回家。', answer: 'F',
          vn: 'Tôi ở nhà Vương Phương một tuần, thứ Bảy về nhà. — 住: ở, lưu trú; 住 + khoảng thời gian.' },
        { n: 27, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你什么（　）有时间？我们去看电影。', answer: 'C',
          vn: 'Khi nào bạn có thời gian? Chúng ta đi xem phim. — 什么时候: khi nào.' },
        { n: 28, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '现在中午十二（　），你去吃饭吗？', answer: 'A',
          vn: 'Bây giờ là 12 giờ trưa, bạn có đi ăn cơm không? — 十二点: 12 giờ.' },
        { n: 29, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我现在工作，十二点十（　）去吃饭。', answer: 'B',
          vn: 'Bây giờ tôi đang làm việc, 12 giờ 10 phút đi ăn cơm. — 十二点十分: 12 giờ 10 phút.' },
        { n: 30, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我八点（　）在家。', answer: 'E',
          vn: 'Trước 8 giờ tôi ở nhà. — mốc thời gian + 前: trước…' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 阝?', prompt: 'Chữ nào có bộ 阝?', options: [
            { key: 'A', text: '你' }, { key: 'B', text: '院' }, { key: 'C', text: '他' }, { key: 'D', text: '们' }
          ], answer: 'B', vn: '院 (viện – 医院) có bộ 阝 bên trái (bộ phụ – gò đất). 你, 他, 们 đều có bộ 亻.' },
        { n: '1b', prompt: 'Chữ nào có bộ 阝?', options: [
            { key: 'A', text: '阳' }, { key: 'B', text: '住' }, { key: 'C', text: '你' }, { key: 'D', text: '他' }
          ], answer: 'A', vn: '阳 (mặt trời, dương) có bộ 阝. 住, 你, 他 đều có bộ 亻.' },
        { n: '1c', prompt: 'Chữ nào có bộ 阝?', options: [
            { key: 'A', text: '们' }, { key: 'B', text: '他' }, { key: 'C', text: '阴' }, { key: 'D', text: '住' }
          ], answer: 'C', vn: '阴 (râm, âm u) có bộ 阝. 们, 他, 住 đều có bộ 亻.' },
        { n: '1d', prompt: 'Chữ nào có bộ 阝?', options: [
            { key: 'A', text: '住' }, { key: 'B', text: '们' }, { key: 'C', text: '你' }, { key: 'D', text: '阵' }
          ], answer: 'D', vn: '阵 (trận, đợt) có bộ 阝. → Các chữ có bộ 阝: 院, 阵, 阴, 阳.' },
        { n: '2a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 亻?', prompt: 'Chữ nào có bộ 亻?', options: [
            { key: 'A', text: '院' }, { key: 'B', text: '阵' }, { key: 'C', text: '你' }, { key: 'D', text: '阳' }
          ], answer: 'C', vn: '你 (bạn) có bộ 亻 (nhân đứng – người). 院, 阵, 阳 có bộ 阝.' },
        { n: '2b', prompt: 'Chữ nào có bộ 亻?', options: [
            { key: 'A', text: '他' }, { key: 'B', text: '阴' }, { key: 'C', text: '阳' }, { key: 'D', text: '院' }
          ], answer: 'A', vn: '他 (anh ấy) có bộ 亻. 阴, 阳, 院 có bộ 阝.' },
        { n: '2c', prompt: 'Chữ nào có bộ 亻?', options: [
            { key: 'A', text: '阵' }, { key: 'B', text: '们' }, { key: 'C', text: '院' }, { key: 'D', text: '阴' }
          ], answer: 'B', vn: '们 (chỉ số nhiều – 我们) có bộ 亻. 阵, 院, 阴 có bộ 阝.' },
        { n: '2d', prompt: 'Chữ nào có bộ 亻?', options: [
            { key: 'A', text: '阳' }, { key: 'B', text: '阴' }, { key: 'C', text: '阵' }, { key: 'D', text: '住' }
          ], answer: 'D', vn: '住 (ở, sống) có bộ 亻. → Các chữ có bộ 亻: 你, 他, 们, 住.' }
      ] }
  ] }
] };
