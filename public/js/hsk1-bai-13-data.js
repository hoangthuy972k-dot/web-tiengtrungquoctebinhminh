// ══════════════════════════════════════════
// DATA — HSK1 Bài 13: 他在学做中国菜呢。
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "喂",
    "py": "wèi",
    "pos": "Cảm thán từ",
    "vn": "a lô, này",
    "hv": "úy",
    "em": "📞",
    "lesson": 1,
    "ex_zh": "喂，你在做什么呢？",
    "ex_py": "Wèi, nǐ zài zuò shénme ne?",
    "ex_vn": "A lô, anh đang làm gì vậy?",
    "exList": [
      {
        "zh": "喂，你在做什么呢？",
        "py": "Wèi, nǐ zài zuò shénme ne?",
        "vn": "A lô, anh đang làm gì vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "喂",
        "p": "wèi",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "口(khẩu) trái → 畏(biến thể) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "a lô (đầu dây điện thoại)",
        "tip": "口(miệng) mượn âm 畏 → thán từ dùng để GỌI, đặc biệt khi nghe điện thoại.",
        "cf": "畏 (wèi – \"sợ hãi\")",
        "w": "喂，你好"
      }
    ],
    "colloFull": [
      {
        "zh": "喂，你好",
        "py": "wèi nǐ hǎo",
        "vn": "a lô, xin chào"
      },
      {
        "zh": "喂，是王小姐吗",
        "py": "wèi shì wáng xiǎojiě ma",
        "vn": "a lô, cô Vương phải không"
      },
      {
        "zh": "喂，老师",
        "py": "wèi lǎoshī",
        "vn": "a lô, thầy ạ"
      }
    ],
    "patterns": [
      {
        "s": "喂 + lời chào",
        "m": "Câu mở đầu khi nghe điện thoại: 喂，你好！"
      },
      {
        "s": "喂 chỉ dùng trong điện thoại, không dùng khi gặp mặt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "A lô, chào bạn! Tôi là Vương Phương.",
        "answer": "喂，你好！我是王方。",
        "answerPy": "Wèi, nǐ hǎo! Wǒ shì Wáng Fāng.",
        "note": "喂 chỉ dùng khi nghe điện thoại.",
        "pair": "喂，……"
      },
      {
        "promptLang": "vi",
        "prompt": "A lô, thầy ạ, bây giờ thầy ở đâu ạ?",
        "answer": "喂，老师，您现在在哪儿？",
        "answerPy": "Wèi, lǎoshī, nín xiànzài zài nǎr?",
        "note": "Gọi người ta trước rồi mới hỏi.",
        "pair": "在哪儿？"
      }
    ]
  },
  {
    "n": 2,
    "zh": "也",
    "py": "yě",
    "pos": "Phó từ",
    "vn": "cũng",
    "hv": "dã",
    "em": "➕",
    "lesson": 1,
    "ex_zh": "大卫也在看书吗？",
    "ex_py": "Dàwèi yě zài kàn shū ma?",
    "ex_vn": "David cũng đang đọc sách à?",
    "exList": [
      {
        "zh": "大卫也在看书吗？",
        "py": "Dàwèi yě zài kàn shū ma?",
        "vn": "David cũng đang đọc sách à?"
      }
    ],
    "hanzi": [
      {
        "c": "也",
        "p": "yě",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "乛→𠃊→乙",
        "rad": "乙 (ất)",
        "mean": "cũng",
        "tip": "Chữ cổ vốn chỉ hình cái bình đựng nước, nay dùng làm phó từ \"CŨNG\".",
        "cf": "心 (xīn – \"tim\")",
        "w": "也在看书 / 我也是"
      }
    ],
    "colloFull": [
      {
        "zh": "也是",
        "py": "yě shì",
        "vn": "cũng là"
      },
      {
        "zh": "也去",
        "py": "yě qù",
        "vn": "cũng đi"
      },
      {
        "zh": "也很好",
        "py": "yě hěn hǎo",
        "vn": "cũng rất tốt"
      },
      {
        "zh": "也喜欢",
        "py": "yě xǐhuan",
        "vn": "cũng thích"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 也 + động từ / tính từ",
        "m": "也 đứng TRƯỚC động từ, SAU chủ ngữ"
      },
      {
        "s": "✗ 也我去 → ✓ 我也去"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi cũng là học sinh.",
        "answer": "我也是学生。",
        "answerPy": "Wǒ yě shì xuésheng.",
        "note": "也 đứng sau chủ ngữ, trước động từ.",
        "pair": "也 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy cũng thích xem tivi.",
        "answer": "她也喜欢看电视。",
        "answerPy": "Tā yě xǐhuan kàn diànshì.",
        "note": "Không nói 也她喜欢.",
        "pair": "也 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "学习",
    "py": "xuéxí",
    "pos": "Động từ",
    "vn": "học, học tập",
    "hv": "học tập",
    "em": "📖",
    "lesson": 1,
    "ex_zh": "我在学习汉语。",
    "ex_py": "Wǒ zài xuéxí Hànyǔ.",
    "ex_vn": "Tôi đang học tiếng Trung.",
    "exList": [
      {
        "zh": "我在学习汉语。",
        "py": "Wǒ zài xuéxí Hànyǔ.",
        "vn": "Tôi đang học tiếng Trung."
      }
    ],
    "hanzi": [
      {
        "c": "习",
        "p": "xí",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "𠃌→乙→丨(biến thể)",
        "rad": "乙 (ất, biến thể)",
        "mean": "học tập, luyện tập",
        "tip": "Hình đôi cánh chim non tập bay lặp đi lặp lại → LUYỆN TẬP, HỌC TẬP. (学 đã học ở Bài 3)",
        "cf": "羽 (yǔ – \"lông vũ\", chữ gốc\")",
        "w": "学习汉语"
      }
    ],
    "colloFull": [
      {
        "zh": "学习汉语",
        "py": "xuéxí Hànyǔ",
        "vn": "học tiếng Trung"
      },
      {
        "zh": "在学校学习",
        "py": "zài xuéxiào xuéxí",
        "vn": "học ở trường"
      },
      {
        "zh": "学习汉字",
        "py": "xuéxí Hànzì",
        "vn": "học chữ Hán"
      },
      {
        "zh": "喜欢学习",
        "py": "xǐhuan xuéxí",
        "vn": "thích học"
      }
    ],
    "patterns": [
      {
        "s": "学习 + môn học",
        "m": "Học cái gì: 学习汉语"
      },
      {
        "s": "学 + 习",
        "m": "Học (学) rồi ôn đi ôn lại (习)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi học tiếng Trung ở trường.",
        "answer": "我在学校学习汉语。",
        "answerPy": "Wǒ zài xuéxiào xuéxí Hànyǔ.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……学习"
      },
      {
        "promptLang": "vi",
        "prompt": "Sáng nay bạn học gì?",
        "answer": "今天上午你学习什么？",
        "answerPy": "Jīntiān shàngwǔ nǐ xuéxí shénme?",
        "note": "今天上午 đứng đầu câu.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 4,
    "zh": "上午",
    "py": "shàngwǔ",
    "pos": "Danh từ",
    "vn": "buổi sáng",
    "hv": "thượng ngọ",
    "em": "🌅",
    "lesson": 1,
    "ex_zh": "昨天上午你在做什么呢？",
    "ex_py": "Zuótiān shàngwǔ nǐ zài zuò shénme ne?",
    "ex_vn": "Chị làm gì vào sáng hôm qua vậy?",
    "exList": [
      {
        "zh": "昨天上午你在做什么呢？",
        "py": "Zuótiān shàngwǔ nǐ zài zuò shénme ne?",
        "vn": "Chị làm gì vào sáng hôm qua vậy?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "今天上午",
        "py": "jīntiān shàngwǔ",
        "vn": "sáng nay"
      },
      {
        "zh": "明天上午",
        "py": "míngtiān shàngwǔ",
        "vn": "sáng mai"
      },
      {
        "zh": "上午学习",
        "py": "shàngwǔ xuéxí",
        "vn": "sáng học bài"
      },
      {
        "zh": "上午十点",
        "py": "shàngwǔ shí diǎn",
        "vn": "mười giờ sáng"
      }
    ],
    "patterns": [
      {
        "s": "ngày + 上午",
        "m": "Ghép với 今天, 明天, 昨天"
      },
      {
        "s": "上午 · 中午 · 下午 — ba buổi trong ngày"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng mai tôi đi bệnh viện.",
        "answer": "明天上午我去医院。",
        "answerPy": "Míngtiān shàngwǔ wǒ qù yīyuàn.",
        "note": "明天上午 — sáng mai.",
        "pair": "……上午……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mười giờ sáng tôi gọi điện cho bạn.",
        "answer": "上午十点我给你打电话。",
        "answerPy": "Shàngwǔ shí diǎn wǒ gěi nǐ dǎ diànhuà.",
        "note": "Thời gian đứng đầu, rồi mới đến 给.",
        "pair": "给……打电话"
      }
    ]
  },
  {
    "n": 5,
    "zh": "睡觉",
    "py": "shuì jiào",
    "pos": "Động từ",
    "vn": "ngủ",
    "hv": "thụy giác",
    "em": "😴",
    "lesson": 2,
    "ex_zh": "我在睡觉呢。",
    "ex_py": "Wǒ zài shuì jiào ne.",
    "ex_vn": "Tôi đang ngủ.",
    "exList": [
      {
        "zh": "我在睡觉呢。",
        "py": "Wǒ zài shuì jiào ne.",
        "vn": "Tôi đang ngủ."
      }
    ],
    "hanzi": [
      {
        "c": "睡",
        "p": "shuì",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "目(mục) trái → 垂(thùy) phải",
        "rad": "目 (mục – mắt)",
        "mean": "ngủ",
        "tip": "目(mắt) + 垂(rủ xuống) → mắt rủ xuống khép lại = NGỦ.",
        "cf": "垂 (chuí – \"rủ xuống\")",
        "w": "睡觉"
      },
      {
        "c": "觉",
        "p": "jiào",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "冖 trên → 见(kiến) dưới",
        "rad": "见 (kiến – nhìn thấy)",
        "mean": "ngủ (trong 睡觉)",
        "tip": "冖(nhắm mắt che lại) + 见(nhìn) → khi ngủ mắt nhắm lại không còn nhìn thấy gì.",
        "cf": "学 (xué – \"học\", đã học Bài 3, phần trên gần giống\")",
        "w": "睡觉"
      }
    ],
    "colloFull": [
      {
        "zh": "去睡觉",
        "py": "qù shuì jiào",
        "vn": "đi ngủ"
      },
      {
        "zh": "睡觉前",
        "py": "shuì jiào qián",
        "vn": "trước khi ngủ"
      },
      {
        "zh": "想睡觉",
        "py": "xiǎng shuì jiào",
        "vn": "muốn ngủ"
      },
      {
        "zh": "几点睡觉",
        "py": "jǐ diǎn shuì jiào",
        "vn": "mấy giờ ngủ"
      }
    ],
    "patterns": [
      {
        "s": "几点 + 睡觉",
        "m": "Mấy giờ đi ngủ"
      },
      {
        "s": "睡 + 觉",
        "m": "睡觉 gồm hai chữ, nghĩa là ngủ một giấc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn đi ngủ?",
        "answer": "你几点睡觉？",
        "answerPy": "Nǐ jǐ diǎn shuì jiào?",
        "note": "睡觉 — đi ngủ.",
        "pair": "几点……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Trước khi ngủ tôi thích đọc sách.",
        "answer": "睡觉前我喜欢看书。",
        "answerPy": "Shuì jiào qián wǒ xǐhuan kàn shū.",
        "note": "động từ + 前 — trước khi làm gì.",
        "pair": "……前"
      }
    ]
  },
  {
    "n": 6,
    "zh": "电视",
    "py": "diànshì",
    "pos": "Danh từ",
    "vn": "tivi",
    "hv": "điện thị",
    "em": "📺",
    "lesson": 2,
    "ex_zh": "我在家看电视呢。",
    "ex_py": "Wǒ zài jiā kàn diànshì ne.",
    "ex_vn": "Tôi xem tivi ở nhà.",
    "exList": [
      {
        "zh": "我在家看电视呢。",
        "py": "Wǒ zài jiā kàn diànshì ne.",
        "vn": "Tôi xem tivi ở nhà."
      }
    ],
    "hanzi": [
      {
        "c": "视",
        "p": "shì",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "礻(biến thể) trái → 见(kiến) phải",
        "rad": "见 (kiến – nhìn thấy)",
        "mean": "xem, nhìn",
        "tip": "礻(biểu thị điều thiêng liêng) + 见(nhìn) → chăm chú NHÌN, XEM. (电 đã học ở Bài 10)",
        "cf": "现 (xiàn – \"hiện tại\", đã học Bài 11\")",
        "w": "电视 / 看电视"
      }
    ],
    "colloFull": [
      {
        "zh": "看电视",
        "py": "kàn diànshì",
        "vn": "xem tivi"
      },
      {
        "zh": "一个电视",
        "py": "yí gè diànshì",
        "vn": "một cái tivi"
      },
      {
        "zh": "电视里",
        "py": "diànshì li",
        "vn": "trong tivi"
      },
      {
        "zh": "喜欢看电视",
        "py": "xǐhuan kàn diànshì",
        "vn": "thích xem tivi"
      }
    ],
    "patterns": [
      {
        "s": "看 + 电视",
        "m": "Xem tivi — dùng 看"
      },
      {
        "s": "电视 · 电影 · 电脑 — ba từ đều bắt đầu bằng 电"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi không xem tivi.",
        "answer": "今天我不看电视。",
        "answerPy": "Jīntiān wǒ bú kàn diànshì.",
        "note": "看电视 — xem tivi.",
        "pair": "不 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Con trai tôi rất thích xem tivi.",
        "answer": "我儿子很喜欢看电视。",
        "answerPy": "Wǒ érzi hěn xǐhuan kàn diànshì.",
        "note": "喜欢 + động từ — thích làm gì.",
        "pair": "喜欢 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "喜欢",
    "py": "xǐhuan",
    "pos": "Động từ",
    "vn": "thích, ưa thích",
    "hv": "hỉ hoan",
    "em": "😊",
    "lesson": 2,
    "ex_zh": "你喜欢看电视吗？",
    "ex_py": "Nǐ xǐhuan kàn diànshì ma?",
    "ex_vn": "Chị có thích xem tivi không?",
    "exList": [
      {
        "zh": "你喜欢看电视吗？",
        "py": "Nǐ xǐhuan kàn diànshì ma?",
        "vn": "Chị có thích xem tivi không?"
      }
    ],
    "hanzi": [
      {
        "c": "喜",
        "p": "xǐ",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "壴(biến thể) trên → 口(khẩu) dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "vui, thích",
        "tip": "壴(trống nhạc) + 口(miệng cười) → nghe nhạc vui miệng cười = VUI THÍCH.",
        "cf": "嘉 (jiā – \"tốt đẹp\")",
        "w": "喜欢"
      },
      {
        "c": "欢",
        "p": "huān",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "又(biến thể) trái → 欠(khiếm) phải",
        "rad": "欠 (khiếm – thiếu, ngáp)",
        "mean": "vui mừng",
        "tip": "又(bàn tay, lặp lại) + 欠(mở miệng) → cười nói VUI VẺ.",
        "cf": "次 (cì – \"lần\")",
        "w": "喜欢"
      }
    ],
    "colloFull": [
      {
        "zh": "喜欢学习",
        "py": "xǐhuan xuéxí",
        "vn": "thích học"
      },
      {
        "zh": "喜欢看电视",
        "py": "xǐhuan kàn diànshì",
        "vn": "thích xem tivi"
      },
      {
        "zh": "很喜欢",
        "py": "hěn xǐhuan",
        "vn": "rất thích"
      },
      {
        "zh": "不喜欢",
        "py": "bù xǐhuan",
        "vn": "không thích"
      }
    ],
    "patterns": [
      {
        "s": "喜欢 + danh từ / động từ",
        "m": "Thích cái gì, thích làm gì"
      },
      {
        "s": "喜欢 (thích) nhẹ hơn 爱 (yêu, thành thói quen — bài 12)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thích học tiếng Trung.",
        "answer": "我喜欢学习汉语。",
        "answerPy": "Wǒ xǐhuan xuéxí Hànyǔ.",
        "note": "喜欢 nhẹ hơn 爱.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không thích uống trà.",
        "answer": "她不喜欢喝茶。",
        "answerPy": "Tā bù xǐhuan hē chá.",
        "note": "不喜欢 — không thích.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "给",
    "py": "gěi",
    "pos": "Giới từ",
    "vn": "cho, hướng về",
    "hv": "cấp",
    "em": "🎁",
    "lesson": 3,
    "ex_zh": "我现在给她打电话。",
    "ex_py": "Wǒ xiànzài gěi tā dǎ diànhuà.",
    "ex_vn": "Bây giờ tôi gọi điện cho cô ấy đây.",
    "exList": [
      {
        "zh": "我现在给她打电话。",
        "py": "Wǒ xiànzài gěi tā dǎ diànhuà.",
        "vn": "Bây giờ tôi gọi điện cho cô ấy đây."
      }
    ],
    "hanzi": [
      {
        "c": "给",
        "p": "gěi",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "纟(mịch) trái → 合(hợp) phải",
        "rad": "纟 (mịch – tơ, sợi)",
        "mean": "cho, hướng về",
        "tip": "纟(sợi tơ, buộc quà) + 合(hợp lại, trao) → trao CHO, dành CHO ai đó.",
        "cf": "合 (hé – \"hợp\")",
        "w": "给她打电话"
      }
    ],
    "colloFull": [
      {
        "zh": "给我打电话",
        "py": "gěi wǒ dǎ diànhuà",
        "vn": "gọi điện cho tôi"
      },
      {
        "zh": "给妈妈打电话",
        "py": "gěi māma dǎ diànhuà",
        "vn": "gọi điện cho mẹ"
      },
      {
        "zh": "给你",
        "py": "gěi nǐ",
        "vn": "cho bạn"
      },
      {
        "zh": "给老师",
        "py": "gěi lǎoshī",
        "vn": "cho thầy"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + động từ",
        "m": "Làm gì cho ai — 给 đứng TRƯỚC động từ"
      },
      {
        "s": "✗ 打电话给我 → ✓ 给我打电话"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Buổi trưa mẹ tôi gọi điện cho tôi.",
        "answer": "中午我妈妈给我打电话。",
        "answerPy": "Zhōngwǔ wǒ māma gěi wǒ dǎ diànhuà.",
        "note": "给 đứng trước động từ, không đứng sau.",
        "pair": "给……打电话"
      },
      {
        "promptLang": "vi",
        "prompt": "Quyển sách này cho bạn.",
        "answer": "这本书给你。",
        "answerPy": "Zhè běn shū gěi nǐ.",
        "note": "Ở đây 给 mang nghĩa đưa cho.",
        "pair": "给 + người"
      }
    ]
  },
  {
    "n": 9,
    "zh": "打电话",
    "py": "dǎ diànhuà",
    "pos": "Động từ",
    "vn": "gọi điện thoại",
    "hv": "đả điện thoại",
    "em": "☎️",
    "lesson": 3,
    "ex_zh": "我现在给她打电话。",
    "ex_py": "Wǒ xiànzài gěi tā dǎ diànhuà.",
    "ex_vn": "Bây giờ tôi gọi điện cho cô ấy đây.",
    "exList": [
      {
        "zh": "我现在给她打电话。",
        "py": "Wǒ xiànzài gěi tā dǎ diànhuà.",
        "vn": "Bây giờ tôi gọi điện cho cô ấy đây."
      }
    ],
    "hanzi": [
      {
        "c": "打",
        "p": "dǎ",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "扌(thủ) trái → 丁(đinh) phải",
        "rad": "扌 (thủ – tay, biến thể)",
        "mean": "đánh, gọi (điện thoại)",
        "tip": "扌(tay) + 丁(cái đinh) → dùng tay tác động vào vật → mở rộng \"打电话\" = bấm máy GỌI ĐIỆN.",
        "cf": "订 (dìng – \"đặt hàng\")",
        "w": "打电话"
      },
      {
        "c": "话",
        "p": "huà",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "讠(ngôn) trái → 舌(thiệt) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "lời nói, chuyện",
        "tip": "讠(lời nói) + 舌(lưỡi, cơ quan phát âm) → LỜI NÓI, câu CHUYỆN.",
        "cf": "活 (huó – \"sống\")",
        "w": "电话 / 打电话"
      }
    ],
    "colloFull": [
      {
        "zh": "给我打电话",
        "py": "gěi wǒ dǎ diànhuà",
        "vn": "gọi điện cho tôi"
      },
      {
        "zh": "打电话回家",
        "py": "dǎ diànhuà huí jiā",
        "vn": "gọi điện về nhà"
      },
      {
        "zh": "想打电话",
        "py": "xiǎng dǎ diànhuà",
        "vn": "muốn gọi điện"
      },
      {
        "zh": "几点打电话",
        "py": "jǐ diǎn dǎ diànhuà",
        "vn": "mấy giờ gọi điện"
      }
    ],
    "patterns": [
      {
        "s": "给 + người + 打电话",
        "m": "Gọi điện cho ai"
      },
      {
        "s": "打 + 电话",
        "m": "Gọi điện dùng động từ 打, không dùng 做"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn gọi điện cho thầy.",
        "answer": "我想给老师打电话。",
        "answerPy": "Wǒ xiǎng gěi lǎoshī dǎ diànhuà.",
        "note": "Gọi điện dùng động từ 打.",
        "pair": "给……打电话"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn gọi điện về nhà?",
        "answer": "你几点打电话回家？",
        "answerPy": "Nǐ jǐ diǎn dǎ diànhuà huí jiā?",
        "note": "打电话回家 — gọi điện về nhà.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "吧",
    "py": "ba",
    "pos": "Trợ từ",
    "vn": "trợ từ ngữ khí (làm dịu giọng, đề nghị)",
    "hv": "ba",
    "em": "💬",
    "lesson": 3,
    "ex_zh": "你下午打吧。",
    "ex_py": "Nǐ xiàwǔ dǎ ba.",
    "ex_vn": "Buổi chiều anh hãy gọi.",
    "exList": [
      {
        "zh": "你下午打吧。",
        "py": "Nǐ xiàwǔ dǎ ba.",
        "vn": "Buổi chiều anh hãy gọi."
      }
    ],
    "hanzi": [
      {
        "c": "吧",
        "p": "ba",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "口(khẩu) trái → 巴(ba) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "trợ từ ngữ khí",
        "tip": "口(miệng) mượn âm 巴 → trợ từ đặt cuối câu làm giọng nói nhẹ nhàng hơn, mang tính đề nghị.",
        "cf": "爸 (bà – \"cha\", đã học Bài 9, cũng mượn âm 巴\")",
        "w": "你下午打吧"
      }
    ],
    "colloFull": [
      {
        "zh": "我们去吧",
        "py": "wǒmen qù ba",
        "vn": "chúng ta đi nhé"
      },
      {
        "zh": "你说吧",
        "py": "nǐ shuō ba",
        "vn": "bạn nói đi"
      },
      {
        "zh": "好吧",
        "py": "hǎo ba",
        "vn": "thôi được"
      },
      {
        "zh": "回家吧",
        "py": "huí jiā ba",
        "vn": "về nhà thôi"
      }
    ],
    "patterns": [
      {
        "s": "câu + 吧",
        "m": "Làm dịu giọng, thành lời đề nghị: 我们去吧"
      },
      {
        "s": "吧 (đề nghị nhẹ nhàng) ≠ 吗 (câu hỏi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta cùng đi xem phim nhé.",
        "answer": "我们去看电影吧。",
        "answerPy": "Wǒmen qù kàn diànyǐng ba.",
        "note": "吧 làm lời đề nghị nghe nhẹ nhàng hơn.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Mưa rồi, về nhà thôi.",
        "answer": "下雨了，回家吧。",
        "answerPy": "Xià yǔ le, huí jiā ba.",
        "note": "吧 khác 吗: 吧 là đề nghị, 吗 là câu hỏi.",
        "pair": "……吧"
      }
    ]
  }
];

const wuData = [
  {img:'📞',label:'喂',py:'wèi',letter:'A'},
  {img:'😴',label:'睡觉',py:'shuì jiào',letter:'B'},
  {img:'📺',label:'电视',py:'diànshì',letter:'C'},
  {img:'😊',label:'喜欢',py:'xǐhuan',letter:'D'},
  {img:'☎️',label:'打电话',py:'dǎ diànhuà',letter:'E'},
  {img:'📖',label:'学习',py:'xuéxí',letter:'F'},
];

var dialogData = [
  {scene:'Gọi điện thoại · Hỏi đang làm gì',
   lines:[
     {sp:0,zh:'喂，你在做什么呢？',py:'Wèi, nǐ zài zuò shénme ne?',vn:'A lô, anh đang làm gì vậy?'},
     {sp:1,zh:'我在看书呢。',py:'Wǒ zài kàn shū ne.',vn:'Tôi đang đọc sách.'},
     {sp:0,zh:'大卫也在看书吗？',py:'Dàwèi yě zài kàn shū ma?',vn:'David cũng đang đọc sách à?'},
     {sp:1,zh:'他没看书，他在学做中国菜呢。',py:'Tā méi kàn shū, tā zài xué zuò Zhōngguó cài ne.',vn:'Không phải, anh ấy đang học nấu món ăn Trung Quốc.'},
   ]},
  {scene:'Ở quán cà phê · Hoạt động hôm qua',
   lines:[
     {sp:0,zh:'昨天上午你在做什么呢？',py:'Zuótiān shàngwǔ nǐ zài zuò shénme ne?',vn:'Chị làm gì vào sáng hôm qua vậy?'},
     {sp:1,zh:'我在睡觉呢。你呢？',py:'Wǒ zài shuì jiào ne. Nǐ ne?',vn:'Tôi ngủ. Còn cô thì sao?'},
     {sp:0,zh:'我在家看电视呢。你喜欢看电视吗？',py:'Wǒ zài jiā kàn diànshì ne. Nǐ xǐhuan kàn diànshì ma?',vn:'Tôi xem tivi ở nhà. Chị có thích xem tivi không?'},
     {sp:1,zh:'我不喜欢看电视，我喜欢看电影。',py:'Wǒ bù xǐhuan kàn diànshì, wǒ xǐhuan kàn diànyǐng.',vn:'Không, tôi thích xem phim.'},
   ]},
  {scene:'Trong văn phòng của trường · Gọi điện tìm cô giáo',
   lines:[
     {sp:0,zh:'82304155，这是李老师的电话吗？',py:'Bā èr sān líng sì yāo wǔ wǔ, zhè shì Lǐ lǎoshī de diànhuà ma?',vn:'82304155, đây là số điện thoại của cô Lý phải không?'},
     {sp:1,zh:'不是。她的电话是82304156。',py:'Bú shì. Tā de diànhuà shì bā èr sān líng sì yāo wǔ liù.',vn:'Không phải. Số của cô ấy là 82304156.'},
     {sp:0,zh:'好，我现在给她打电话。',py:'Hǎo, wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Được, bây giờ tôi gọi điện cho cô ấy đây.'},
     {sp:1,zh:'她在工作呢，你下午打吧。',py:'Tā zài gōngzuò ne, nǐ xiàwǔ dǎ ba.',vn:'Cô ấy đang làm việc, buổi chiều anh hãy gọi.'},
   ]},
];

// Điền từ — đổi hoạt động so với bài khoá
var fillData = [
  {pre:'Nghe điện thoại reo, bạn bắt máy nói: “',blank:'喂',post:'，你好！”',hint:'(a lô)',ans:'喂'},
  {pre:'Bạn nói mình cũng đang đọc sách: “我',blank:'也',post:'在看书。”',hint:'(cũng)',ans:'也'},
  {pre:'Bạn nói mình đang ngủ: “我在',blank:'睡觉',post:'。”',hint:'(ngủ)',ans:'睡觉'},
  {pre:'Bạn hỏi ai đó có thích xem phim không: “你',blank:'喜欢',post:'看电影吗？”',hint:'(thích)',ans:'喜欢'},
  {pre:'Bạn nói mình đang xem tivi: “我在看',blank:'电视',post:'。”',hint:'(tivi)',ans:'电视'},
  {pre:'Bạn nói sẽ gọi điện cho ai đó: “我',blank:'给',post:'她打电话。”',hint:'(cho, hướng về)',ans:'给'},
  {pre:'Bạn đề nghị nhẹ nhàng ai đó gọi vào buổi chiều: “你下午打',blank:'吧',post:'。”',hint:'(trợ từ đề nghị)',ans:'吧'},
  {pre:'Bạn nói mình đang học tiếng Trung: “我在',blank:'学习',post:'汉语。”',hint:'(học, học tập)',ans:'学习'},
];

// Sắp xếp — đổi hoạt động so với bài khoá
var sortData = [
  {words:['喂','，','你','在','做','什么','呢','？'],ans:'喂，你在做什么呢？',audio:'喂，你在做什么呢？'},
  {words:['我','在','看','书','呢','。'],ans:'我在看书呢。',audio:'我在看书呢。'},
  {words:['我','在','睡觉','呢','。'],ans:'我在睡觉呢。',audio:'我在睡觉呢。'},
  {words:['你','喜欢','看','电视','吗','？'],ans:'你喜欢看电视吗？',audio:'你喜欢看电视吗？'},
  {words:['我','不','喜欢','看','电视','。'],ans:'我不喜欢看电视。',audio:'我不喜欢看电视。'},
  {words:['我','现在','给','她','打电话','。'],ans:'我现在给她打电话。',audio:'我现在给她打电话。'},
];

var matchData = [
  {left:'喂，你在做什么呢？',right:'我在看书呢。'},
  {left:'大卫也在看书吗？',right:'他没看书，他在学做中国菜呢。'},
  {left:'昨天上午你在做什么呢？',right:'我在睡觉呢。'},
  {left:'你喜欢看电视吗？',right:'我不喜欢看电视，我喜欢看电影。'},
  {left:'这是李老师的电话吗？',right:'不是。她的电话是82304156。'},
];

// Trắc nghiệm — trọng tâm 在……呢 (đang tiếp diễn), 吧, số điện thoại, không audio
var mcData = [
  {q:'喂，你在做什么＿＿？',opts:['呢','吗','吧','了'],ans:0},
  {q:'我在睡觉＿＿。(diễn tả hành động đang tiếp diễn)',opts:['呢','吗','吧','了'],ans:0},
  {q:'Phủ định của hành động đang tiếp diễn dùng cấu trúc nào?',opts:['没(在) + Động từ','不 + Động từ','别 + Động từ','无 + Động từ'],ans:0},
  {q:'Số điện thoại "1" đọc như thế nào trong tiếng Trung?',opts:['yāo','yī','yì','yí'],ans:0},
  {q:'"喜欢" nghĩa là gì?',opts:['thích, ưa thích','ghét','sợ','buồn'],ans:0},
  {q:'"睡觉" nghĩa là gì?',opts:['ngủ','thức dậy','ăn cơm','đọc sách'],ans:0},
  {q:'"打电话" nghĩa là gì?',opts:['gọi điện thoại','xem tivi','nghe nhạc','chơi game'],ans:0},
  {q:'Trợ từ nào đặt cuối câu để làm dịu giọng, đưa ra lời khuyên?',opts:['吧','呢','吗','了'],ans:0},
  {q:'"电视" nghĩa là gì?',opts:['tivi','điện thoại','máy tính','radio'],ans:0},
  {q:'"给" trong "给她打电话" nghĩa là gì?',opts:['cho, hướng về (đối tượng)','và','ở','là'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'喂，你在做什么呢？',py:'Wèi, nǐ zài zuò shénme ne?',vn:'A lô, anh đang làm gì vậy?'},
      {zh:'我在看书呢。',py:'Wǒ zài kàn shū ne.',vn:'Tôi đang đọc sách.'},
      {zh:'我在睡觉呢。',py:'Wǒ zài shuì jiào ne.',vn:'Tôi đang ngủ.'},
      {zh:'你喜欢看电视吗？',py:'Nǐ xǐhuan kàn diànshì ma?',vn:'Chị có thích xem tivi không?'},
      {zh:'我现在给她打电话。',py:'Wǒ xiànzài gěi tā dǎ diànhuà.',vn:'Bây giờ tôi gọi điện cho cô ấy đây.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我在＿＿呢。',frame_py:'Wǒ zài ___ ne.',vn:'Tôi đang ＿＿.',options:['看书','睡觉','看电视'],samples:['我在看书呢。','我在睡觉呢。','我在看电视呢。']},
      {frame:'我喜欢＿＿。',frame_py:'Wǒ xǐhuan ___.',vn:'Tôi thích ＿＿.',options:['看电视','看电影'],samples:['我喜欢看电视。','我喜欢看电影。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📞 Tình huống 1 — Gọi điện hỏi thăm bạn bè',
       guide:'Bạn gọi điện cho bạn và hỏi họ đang làm gì.',
       structure:['喂，你在做什么呢？','我在＿＿呢。'],
       sample:'喂，你在做什么呢？我在看书呢。',
       sample_vn:'A lô, bạn đang làm gì vậy? Tôi đang đọc sách.',
       note:'喂 CHỈ dùng khi bắt đầu cuộc gọi điện thoại — không dùng để chào hỏi trực tiếp mặt đối mặt như 你好.'},
      {role:'📺 Tình huống 2 — Chia sẻ sở thích giải trí',
       guide:'Bạn trò chuyện với bạn bè về việc hôm qua đã làm gì và sở thích xem tivi hay phim.',
       structure:['昨天上午你在做什么呢？','你喜欢看电视吗？'],
       sample:'昨天上午你在做什么呢？我在睡觉呢。你喜欢看电视吗？我不喜欢看电视，我喜欢看电影。',
       sample_vn:'Sáng hôm qua bạn làm gì vậy? Tôi ngủ. Bạn có thích xem tivi không? Tôi không thích xem tivi, tôi thích xem phim.',
       note:'Có thể trả lời phủ định kèm bổ sung ngay ý đối lập trong cùng câu (不喜欢A，喜欢B) — cách nói rất tự nhiên và thường gặp trong giao tiếp.'},
      {role:'☎️ Tình huống 3 — Gọi điện tìm người, xử lý khi không tiện',
       guide:'Bạn gọi điện cho ai đó nhưng người nghe máy báo rằng người bạn cần đang bận, hãy xử lý tình huống lịch sự.',
       structure:['我现在给她打电话。','她在工作呢，你下午打吧。'],
       sample:'我现在给她打电话。她在工作呢，你下午打吧。',
       sample_vn:'Bây giờ tôi gọi điện cho cô ấy đây. Cô ấy đang làm việc, buổi chiều anh hãy gọi.',
       note:'Trợ từ 吧 ở cuối câu làm cho lời đề nghị "bạn hãy gọi lại vào buổi chiều" nghe NHẸ NHÀNG, thân thiện hơn thay vì ra lệnh cộc lốc.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 13 + ôn lại từ bài 1-12
// ══════════════════════════════════════════
var translateData = [
  {vi:'A lô, bạn đang làm gì vậy?', zh:'喂，你在做什么呢？', py:'Wèi, nǐ zài zuò shénme ne?'},
  {vi:'Tôi đang ngủ đây.', zh:'我在睡觉呢。', py:'Wǒ zài shuìjiào ne.'},
  {vi:'Tôi cũng thích xem tivi.', zh:'我也喜欢看电视。', py:'Wǒ yě xǐhuan kàn diànshì.'},
  {vi:'Chiều nay bạn gọi điện cho tôi nhé.', zh:'你下午给我打电话吧。', py:'Nǐ xiàwǔ gěi wǒ dǎ diànhuà ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'A lô, bạn có ở nhà không? Tôi đang ngủ đây.', zh:'喂，你在家吗？我在睡觉呢。', py:'Wèi, nǐ zài jiā ma? Wǒ zài shuìjiào ne.'},
  {vi:'Tôi thích xem tivi, cũng thích đọc sách.', zh:'我喜欢看电视，也喜欢看书。', py:'Wǒ xǐhuan kàn diànshì, yě xǐhuan kàn shū.'},
  {vi:'Chiều nay bạn gọi điện cho tôi nhé, được không?', zh:'你下午给我打电话，好吗？', py:'Nǐ xiàwǔ gěi wǒ dǎ diànhuà, hǎoma?'},
  {vi:'Anh ấy cũng là bạn cùng lớp của tôi.', zh:'他也是我的同学。', py:'Tā yě shì wǒ de tóngxué.'},
];
