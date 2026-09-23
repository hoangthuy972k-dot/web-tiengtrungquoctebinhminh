// ══════════════════════════════════════════
// DATA — HSK1 Bài 15: 我是坐飞机来的。
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "认识",
    "py": "rènshi",
    "pos": "Động từ",
    "vn": "quen biết, hiểu biết",
    "hv": "nhận thức",
    "em": "🤝",
    "lesson": 1,
    "ex_zh": "你和李小姐是什么时候认识的？",
    "ex_py": "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?",
    "ex_vn": "Cô và cô Lý quen nhau khi nào vậy?",
    "exList": [
      {
        "zh": "你和李小姐是什么时候认识的？",
        "py": "Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?",
        "vn": "Cô và cô Lý quen nhau khi nào vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "认",
        "p": "rèn",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "讠(ngôn) trái → 人(nhân, biến thể) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "nhận, nhận biết",
        "tip": "讠(lời nói) + 人(người) → dùng lời NHẬN RA, xác NHẬN một người.",
        "cf": "队 (duì – \"đội, hàng\")",
        "w": "认识"
      },
      {
        "c": "识",
        "p": "shí",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "讠(ngôn) trái → 只(biến thể) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "biết, hiểu biết",
        "tip": "讠(lời nói) + 只(phân biệt) → dùng lời PHÂN BIỆT, HIỂU BIẾT về sự vật.",
        "cf": "职 (zhí – \"chức vụ\")",
        "w": "认识"
      }
    ],
    "colloFull": [
      {
        "zh": "认识你",
        "py": "rènshi nǐ",
        "vn": "quen biết bạn"
      },
      {
        "zh": "认识这个字",
        "py": "rènshi zhège zì",
        "vn": "biết chữ này"
      },
      {
        "zh": "不认识",
        "py": "bú rènshi",
        "vn": "không quen, không biết"
      },
      {
        "zh": "认识一年了",
        "py": "rènshi yì nián le",
        "vn": "quen nhau một năm rồi"
      }
    ],
    "patterns": [
      {
        "s": "认识 + người / chữ",
        "m": "Quen ai, biết mặt chữ nào"
      },
      {
        "s": "认识 (biết mặt, quen) khác 会 (học rồi nên làm được)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Rất vui được làm quen với bạn!",
        "answer": "很高兴认识你！",
        "answerPy": "Hěn gāoxìng rènshi nǐ!",
        "note": "Câu làm quen kinh điển, học thuộc cả câu.",
        "pair": "很高兴认识你！"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không biết chữ Hán này.",
        "answer": "我不认识这个汉字。",
        "answerPy": "Wǒ bú rènshi zhège Hànzì.",
        "note": "认识 là biết mặt chữ, khác 会 là biết viết.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 2,
    "zh": "年",
    "py": "nián",
    "pos": "Danh từ",
    "vn": "năm",
    "hv": "niên",
    "em": "📅",
    "lesson": 1,
    "ex_zh": "我们是2011年9月认识的。",
    "ex_py": "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
    "ex_vn": "Chúng tôi quen nhau vào tháng 9 năm 2011.",
    "exList": [
      {
        "zh": "我们是2011年9月认识的。",
        "py": "Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.",
        "vn": "Chúng tôi quen nhau vào tháng 9 năm 2011."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "一年",
        "py": "yì nián",
        "vn": "một năm"
      },
      {
        "zh": "今年",
        "py": "jīnnián",
        "vn": "năm nay"
      },
      {
        "zh": "三年",
        "py": "sān nián",
        "vn": "ba năm"
      },
      {
        "zh": "学了一年",
        "py": "xué le yì nián",
        "vn": "học được một năm"
      }
    ],
    "patterns": [
      {
        "s": "số + 年",
        "m": "Bao nhiêu năm: 一年 — 年 tự làm lượng từ"
      },
      {
        "s": "✗ 一个年 → ✓ 一年",
        "m": "年 · 天 · 岁 đều không cần thêm 个"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi học tiếng Trung được một năm rồi.",
        "answer": "我学习汉语一年了。",
        "answerPy": "Wǒ xuéxí Hànyǔ yì nián le.",
        "note": "年 tự làm lượng từ, không thêm 个.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm nay tôi hai mươi tuổi.",
        "answer": "今年我二十岁。",
        "answerPy": "Jīnnián wǒ èrshí suì.",
        "note": "今年 — năm nay.",
        "pair": "……岁"
      }
    ]
  },
  {
    "n": 3,
    "zh": "大学",
    "py": "dàxué",
    "pos": "Danh từ",
    "vn": "trường đại học",
    "hv": "đại học",
    "em": "🎓",
    "lesson": 1,
    "ex_zh": "她是我大学同学。",
    "ex_py": "Tā shì wǒ dàxué tóngxué.",
    "ex_vn": "Cô ấy là bạn học cùng lớp đại học của tôi.",
    "exList": [
      {
        "zh": "她是我大学同学。",
        "py": "Tā shì wǒ dàxué tóngxué.",
        "vn": "Cô ấy là bạn học cùng lớp đại học của tôi."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "上大学",
        "py": "shàng dàxué",
        "vn": "học đại học"
      },
      {
        "zh": "去大学",
        "py": "qù dàxué",
        "vn": "đến trường đại học"
      },
      {
        "zh": "大学的老师",
        "py": "dàxué de lǎoshī",
        "vn": "giảng viên đại học"
      },
      {
        "zh": "中国大学",
        "py": "Zhōngguó dàxué",
        "vn": "đại học Trung Quốc"
      }
    ],
    "patterns": [
      {
        "s": "去 / 上 + 大学",
        "m": "Đi, học ở trường đại học"
      },
      {
        "s": "大 + 学",
        "m": "Trường (学) bậc lớn (大) — khác 学校 nói chung"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi học đại học ở Trung Quốc.",
        "answer": "我的女儿在中国上大学。",
        "answerPy": "Wǒ de nǚ'ér zài Zhōngguó shàng dàxué.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……上大学"
      },
      {
        "promptLang": "vi",
        "prompt": "Giảng viên đại học của chúng tôi đều rất tốt.",
        "answer": "我们大学的老师都很好。",
        "answerPy": "Wǒmen dàxué de lǎoshī dōu hěn hǎo.",
        "note": "都 đứng sau chủ ngữ số nhiều.",
        "pair": "都 + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "饭店",
    "py": "fàndiàn",
    "pos": "Danh từ",
    "vn": "khách sạn, nhà hàng ăn uống",
    "hv": "phạn điếm",
    "em": "🏨",
    "lesson": 2,
    "ex_zh": "你们是怎么来饭店的？",
    "ex_py": "Nǐmen shì zěnme lái fàndiàn de?",
    "ex_vn": "Anh chị đến khách sạn bằng cách nào?",
    "exList": [
      {
        "zh": "你们是怎么来饭店的？",
        "py": "Nǐmen shì zěnme lái fàndiàn de?",
        "vn": "Anh chị đến khách sạn bằng cách nào?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "去饭店",
        "py": "qù fàndiàn",
        "vn": "đến nhà hàng"
      },
      {
        "zh": "在饭店吃饭",
        "py": "zài fàndiàn chī fàn",
        "vn": "ăn cơm ở nhà hàng"
      },
      {
        "zh": "这个饭店",
        "py": "zhège fàndiàn",
        "vn": "nhà hàng này"
      },
      {
        "zh": "饭店的菜",
        "py": "fàndiàn de cài",
        "vn": "món của nhà hàng"
      }
    ],
    "patterns": [
      {
        "s": "在 + 饭店 + 吃饭",
        "m": "Ăn cơm ở nhà hàng"
      },
      {
        "s": "饭 + 店",
        "m": "Tiệm (店) cơm (饭) — cùng kiểu với 商店"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trưa nay chúng ta ăn cơm ở nhà hàng nhé.",
        "answer": "今天中午我们在饭店吃饭吧。",
        "answerPy": "Jīntiān zhōngwǔ wǒmen zài fàndiàn chī fàn ba.",
        "note": "在饭店吃饭 — ăn cơm ở nhà hàng.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Món của nhà hàng này rất ngon.",
        "answer": "这个饭店的菜很好吃。",
        "answerPy": "Zhège fàndiàn de cài hěn hǎochī.",
        "note": "饭店的菜 — món của nhà hàng.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 5,
    "zh": "出租车",
    "py": "chūzūchē",
    "pos": "Danh từ",
    "vn": "xe taxi",
    "hv": "xuất tô xa",
    "em": "🚕",
    "lesson": 2,
    "ex_zh": "我们是坐出租车来的。",
    "ex_py": "Wǒmen shì zuò chūzūchē lái de.",
    "ex_vn": "Chúng tôi đi xe taxi đến.",
    "exList": [
      {
        "zh": "我们是坐出租车来的。",
        "py": "Wǒmen shì zuò chūzūchē lái de.",
        "vn": "Chúng tôi đi xe taxi đến."
      }
    ],
    "hanzi": [
      {
        "c": "出",
        "p": "chū",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "山(biến thể) → 山(biến thể)",
        "rad": "凵 (khảm, biến thể)",
        "mean": "ra, đi ra",
        "tip": "Hình bàn chân bước RA khỏi hang động → RA, ĐI RA.",
        "cf": "击 (jī – \"đánh\")",
        "w": "出租车 / 出去"
      },
      {
        "c": "租",
        "p": "zū",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "禾(hòa) trái → 且(thả) phải",
        "rad": "禾 (hòa – lúa)",
        "mean": "thuê, cho thuê",
        "tip": "禾(lúa, hoa màu nộp tô) + 且(hơn nữa) → nộp lúa để THUÊ đất, mở rộng nghĩa THUÊ, CHO THUÊ. (车 đã học ở Bài 14)",
        "cf": "祖 (zǔ – \"tổ tiên\")",
        "w": "出租车"
      }
    ],
    "colloFull": [
      {
        "zh": "坐出租车",
        "py": "zuò chūzūchē",
        "vn": "đi taxi"
      },
      {
        "zh": "开出租车",
        "py": "kāi chūzūchē",
        "vn": "lái taxi"
      },
      {
        "zh": "一个出租车",
        "py": "yí gè chūzūchē",
        "vn": "một chiếc taxi"
      },
      {
        "zh": "出租车上",
        "py": "chūzūchē shàng",
        "vn": "trên taxi"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 出租车",
        "m": "Đi taxi — dùng 坐 như 坐车"
      },
      {
        "s": "出租 + 车",
        "m": "Xe (车) cho thuê (出租)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta đi taxi đến trường đại học nhé.",
        "answer": "我们坐出租车去大学吧。",
        "answerPy": "Wǒmen zuò chūzūchē qù dàxué ba.",
        "note": "坐出租车 — đi taxi.",
        "pair": "坐 + phương tiện"
      },
      {
        "promptLang": "vi",
        "prompt": "Bố tôi lái taxi.",
        "answer": "我爸爸开出租车。",
        "answerPy": "Wǒ bàba kāi chūzūchē.",
        "note": "开 dùng cho người cầm lái.",
        "pair": "开 + phương tiện"
      }
    ]
  },
  {
    "n": 6,
    "zh": "一起",
    "py": "yìqǐ",
    "pos": "Phó từ",
    "vn": "cùng nhau, đồng hành",
    "hv": "nhất khởi",
    "em": "🧑‍🤝‍🧑",
    "lesson": 2,
    "ex_zh": "他是和朋友一起开车来的。",
    "ex_py": "Tā shì hé péngyou yìqǐ kāi chē lái de.",
    "ex_vn": "Cậu ấy lái xe cùng với bạn đến đây.",
    "exList": [
      {
        "zh": "他是和朋友一起开车来的。",
        "py": "Tā shì hé péngyou yìqǐ kāi chē lái de.",
        "vn": "Cậu ấy lái xe cùng với bạn đến đây."
      }
    ],
    "hanzi": [
      {
        "c": "起",
        "p": "qǐ",
        "type": "半包围结构 · Bán bao vây",
        "st": 10,
        "ord": "走(biến thể) bao ngoài → 己(kỷ) bên trong",
        "rad": "走 (tẩu – đi, biến thể)",
        "mean": "dậy, bắt đầu; cùng (trong 一起)",
        "tip": "走(đi) + 己(bản thân) → tự mình đứng dậy đi; ghép với 一 thành CÙNG NHAU.",
        "cf": "己 (jǐ – \"bản thân\")",
        "w": "一起 / 起来"
      }
    ],
    "colloFull": [
      {
        "zh": "一起去",
        "py": "yìqǐ qù",
        "vn": "cùng đi"
      },
      {
        "zh": "一起吃饭",
        "py": "yìqǐ chī fàn",
        "vn": "cùng ăn cơm"
      },
      {
        "zh": "和我一起",
        "py": "hé wǒ yìqǐ",
        "vn": "cùng với tôi"
      },
      {
        "zh": "一起学习",
        "py": "yìqǐ xuéxí",
        "vn": "cùng học"
      }
    ],
    "patterns": [
      {
        "s": "和 + ai + 一起 + động từ",
        "m": "Cùng ai làm gì: 和我一起去"
      },
      {
        "s": "一起 đứng TRƯỚC động từ, không đứng cuối câu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn cùng đi mua đồ với tôi nhé.",
        "answer": "今天下午你和我一起去买东西吧。",
        "answerPy": "Jīntiān xiàwǔ nǐ hé wǒ yìqǐ qù mǎi dōngxi ba.",
        "note": "一起 đứng trước động từ.",
        "pair": "和……一起……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta cùng học tiếng Trung.",
        "answer": "我们一起学习汉语。",
        "answerPy": "Wǒmen yìqǐ xuéxí Hànyǔ.",
        "note": "Không nói 我们学习汉语一起.",
        "pair": "一起 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "高兴",
    "py": "gāoxìng",
    "pos": "Tính từ",
    "vn": "vui mừng, phấn khởi",
    "hv": "cao hứng",
    "em": "😄",
    "lesson": 3,
    "ex_zh": "很高兴认识您！",
    "ex_py": "Hěn gāoxìng rènshi nín!",
    "ex_vn": "Rất vui được biết ngài!",
    "exList": [
      {
        "zh": "很高兴认识您！",
        "py": "Hěn gāoxìng rènshi nín!",
        "vn": "Rất vui được biết ngài!"
      }
    ],
    "hanzi": [
      {
        "c": "高",
        "p": "gāo",
        "type": "独体字 · Tượng hình",
        "st": 10,
        "ord": "亠→口→冂→口",
        "rad": "高 (cao – tự thành bộ)",
        "mean": "cao",
        "tip": "Hình một tòa lầu nhiều tầng cao vút → CAO; 高兴 = \"hứng thú dâng cao\" = VUI MỪNG.",
        "cf": "亭 (tíng – \"cái đình\")",
        "w": "高兴 / 很高"
      },
      {
        "c": "兴",
        "p": "xìng",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "丷(biến thể) → 一→八(biến thể)",
        "rad": "八 (bát, biến thể)",
        "mean": "hứng thú, phấn chấn",
        "tip": "Hình nhiều bàn tay cùng nâng một vật lên → cùng nhau PHẤN KHỞI, HỨNG THÚ.",
        "cf": "共 (gòng – \"cùng\")",
        "w": "高兴"
      }
    ],
    "colloFull": [
      {
        "zh": "很高兴",
        "py": "hěn gāoxìng",
        "vn": "rất vui"
      },
      {
        "zh": "太高兴了",
        "py": "tài gāoxìng le",
        "vn": "vui quá"
      },
      {
        "zh": "不高兴",
        "py": "bù gāoxìng",
        "vn": "không vui"
      },
      {
        "zh": "都很高兴",
        "py": "dōu hěn gāoxìng",
        "vn": "đều rất vui"
      }
    ],
    "patterns": [
      {
        "s": "很高兴 + 认识你",
        "m": "Rất vui được làm quen — câu chào hỏi kinh điển"
      },
      {
        "s": "高 + 兴",
        "m": "Hứng (兴) lên cao (高)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay mẹ tôi rất vui.",
        "answer": "今天我妈妈很高兴。",
        "answerPy": "Jīntiān wǒ māma hěn gāoxìng.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không vui, vì trời mưa rồi.",
        "answer": "她不高兴，下雨了。",
        "answerPy": "Tā bù gāoxìng, xià yǔ le.",
        "note": "Hai vế đặt cạnh nhau, chưa cần liên từ.",
        "pair": "不 + Adj"
      }
    ]
  },
  {
    "n": 8,
    "zh": "听",
    "py": "tīng",
    "pos": "Động từ",
    "vn": "nghe, nghe thấy",
    "hv": "thính",
    "em": "👂",
    "lesson": 3,
    "ex_zh": "听张先生说，您是坐飞机来北京的？",
    "ex_py": "Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?",
    "ex_vn": "Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?",
    "exList": [
      {
        "zh": "听张先生说，您是坐飞机来北京的？",
        "py": "Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?",
        "vn": "Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?"
      }
    ],
    "hanzi": [
      {
        "c": "听",
        "p": "tīng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "口(khẩu) trái → 斤(biến thể) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "nghe, nghe thấy",
        "tip": "口(miệng nói) được tai TIẾP NHẬN → NGHE.",
        "cf": "厅 (tīng – \"sảnh, phòng\")",
        "w": "听说 / 听音乐"
      }
    ],
    "colloFull": [
      {
        "zh": "听老师说",
        "py": "tīng lǎoshī shuō",
        "vn": "nghe thầy nói"
      },
      {
        "zh": "听电话",
        "py": "tīng diànhuà",
        "vn": "nghe điện thoại"
      },
      {
        "zh": "不听",
        "py": "bù tīng",
        "vn": "không nghe"
      },
      {
        "zh": "听一听",
        "py": "tīng yì tīng",
        "vn": "nghe thử"
      }
    ],
    "patterns": [
      {
        "s": "听 + người + 说",
        "m": "Nghe ai nói"
      },
      {
        "s": "听 (nghe bằng tai) ≠ 看 (nhìn bằng mắt)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trên lớp các bạn học đều nghe thầy nói.",
        "answer": "同学们都听老师说。",
        "answerPy": "Tóngxuémen dōu tīng lǎoshī shuō.",
        "note": "听 + người + 说 — nghe ai nói.",
        "pair": "都 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn nghe thử xem, đây là tiếng Trung.",
        "answer": "你听一听，这是汉语。",
        "answerPy": "Nǐ tīng yi tīng, zhè shì Hànyǔ.",
        "note": "Dạng lặp động từ làm ngữ khí nhẹ đi.",
        "pair": "V + 一 + V"
      }
    ]
  },
  {
    "n": 9,
    "zh": "飞机",
    "py": "fēijī",
    "pos": "Danh từ",
    "vn": "máy bay",
    "hv": "phi cơ",
    "em": "✈️",
    "lesson": 3,
    "ex_zh": "您是坐飞机来北京的？",
    "ex_py": "Nín shì zuò fēijī lái Běijīng de?",
    "ex_vn": "Cô đáp máy bay đến Bắc Kinh phải không?",
    "exList": [
      {
        "zh": "您是坐飞机来北京的？",
        "py": "Nín shì zuò fēijī lái Běijīng de?",
        "vn": "Cô đáp máy bay đến Bắc Kinh phải không?"
      }
    ],
    "hanzi": [
      {
        "c": "飞",
        "p": "fēi",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "飞(biến thể, 3 nét)",
        "rad": "飞 (phi – tự thành bộ)",
        "mean": "bay",
        "tip": "Hình con chim đang dang cánh bay → BAY.",
        "cf": "见 (jiàn – \"nhìn thấy\", đã học Bài 2\")",
        "w": "飞机"
      },
      {
        "c": "机",
        "p": "jī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "木(mộc) trái → 几(kỷ) phải",
        "rad": "木 (mộc – gỗ)",
        "mean": "máy móc",
        "tip": "木(gỗ, vật liệu chế tạo máy móc thời xưa) + 几(mượn âm) → MÁY MÓC; 飞机 = \"máy biết bay\" = MÁY BAY.",
        "cf": "几 (jǐ – \"mấy\", đã học Bài 5\")",
        "w": "飞机"
      }
    ],
    "colloFull": [
      {
        "zh": "坐飞机",
        "py": "zuò fēijī",
        "vn": "đi máy bay"
      },
      {
        "zh": "一个飞机",
        "py": "yí gè fēijī",
        "vn": "một chiếc máy bay"
      },
      {
        "zh": "飞机上",
        "py": "fēijī shàng",
        "vn": "trên máy bay"
      },
      {
        "zh": "坐飞机回中国",
        "py": "zuò fēijī huí Zhōngguó",
        "vn": "đi máy bay về Trung Quốc"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 飞机",
        "m": "Đi máy bay — cũng dùng 坐"
      },
      {
        "s": "飞 + 机",
        "m": "Cỗ máy (机) biết bay (飞)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai tôi đi máy bay về Trung Quốc.",
        "answer": "明天我坐飞机回中国。",
        "answerPy": "Míngtiān wǒ zuò fēijī huí Zhōngguó.",
        "note": "坐飞机 — đi máy bay, cũng dùng 坐.",
        "pair": "坐 + phương tiện"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ máy bay đến?",
        "answer": "飞机几点来？",
        "answerPy": "Fēijī jǐ diǎn lái?",
        "note": "Thời gian đứng trước động từ.",
        "pair": "几点……？"
      }
    ]
  }
];

const wuData = [
  {img:'🤝',label:'认识',py:'rènshi',letter:'A'},
  {img:'🎓',label:'大学',py:'dàxué',letter:'B'},
  {img:'🏨',label:'饭店',py:'fàndiàn',letter:'C'},
  {img:'🚕',label:'出租车',py:'chūzūchē',letter:'D'},
  {img:'✈️',label:'飞机',py:'fēijī',letter:'E'},
  {img:'😄',label:'高兴',py:'gāoxìng',letter:'F'},
];

var dialogData = [
  {scene:'Ở bàn ăn · Hỏi thăm quen biết',
   lines:[
     {sp:0,zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Cô và cô Lý quen nhau khi nào vậy?'},
     {sp:1,zh:'我们是2011年9月认识的。',py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.'},
     {sp:0,zh:'你们在哪儿认识的？',py:'Nǐmen zài nǎr rènshi de?',vn:'Thế các cô quen nhau ở đâu?'},
     {sp:1,zh:'我们是在学校认识的，她是我大学同学。',py:'Wǒmen shì zài xuéxiào rènshi de, tā shì wǒ dàxué tóngxué.',vn:'Chúng tôi quen nhau ở trường học. Cô ấy là bạn học cùng lớp đại học của tôi.'},
   ]},
  {scene:'Trước khách sạn · Hỏi phương tiện đến',
   lines:[
     {sp:0,zh:'你们是怎么来饭店的？',py:'Nǐmen shì zěnme lái fàndiàn de?',vn:'Anh chị đến khách sạn bằng cách nào?'},
     {sp:1,zh:'我们是坐出租车来的。',py:'Wǒmen shì zuò chūzūchē lái de.',vn:'Chúng tôi đi xe taxi đến.'},
     {sp:0,zh:'李先生呢？',py:'Lǐ xiānsheng ne?',vn:'Còn ông Lý thì sao?'},
     {sp:1,zh:'他是和朋友一起开车来的。',py:'Tā shì hé péngyou yìqǐ kāi chē lái de.',vn:'Cậu ấy lái xe cùng với bạn đến đây.'},
   ]},
  {scene:'Trong công ty · Làm quen mới',
   lines:[
     {sp:0,zh:'很高兴认识您！李小姐。',py:'Hěn gāoxìng rènshi nín! Lǐ xiǎojiě.',vn:'Rất vui được biết cô Lý!'},
     {sp:1,zh:'认识你我也很高兴！',py:'Rènshi nǐ wǒ yě hěn gāoxìng!',vn:'Rất vui được quen anh!'},
     {sp:0,zh:'听张先生说，您是坐飞机来北京的？',py:'Tīng Zhāng xiānsheng shuō, nín shì zuò fēijī lái Běijīng de?',vn:'Nghe ông Trương nói cô đáp máy bay đến Bắc Kinh, có phải không?'},
     {sp:1,zh:'是的。',py:'Shì de.',vn:'Đúng thế.'},
   ]},
];

// Điền từ — đổi năm/địa điểm/phương tiện so với bài khoá
var fillData = [
  {pre:'Bạn hỏi ai đó quen bạn mình khi nào: “你是什么时候',blank:'认识',post:'他的？”',hint:'(quen biết)',ans:'认识'},
  {pre:'Bạn nói mình quen bạn ấy năm 2015: “我是2015',blank:'年',post:'认识他的。”',hint:'(năm)',ans:'年'},
  {pre:'Bạn giới thiệu bạn học cùng đại học: “她是我',blank:'大学',post:'同学。”',hint:'(trường đại học)',ans:'大学'},
  {pre:'Bạn hỏi ai đó đến khách sạn bằng gì: “你们是怎么来',blank:'饭店',post:'的？”',hint:'(khách sạn)',ans:'饭店'},
  {pre:'Bạn nói mình đi taxi đến: “我们是坐',blank:'出租车',post:'来的。”',hint:'(xe taxi)',ans:'出租车'},
  {pre:'Bạn nói rất vui được quen ai đó: “很',blank:'高兴',post:'认识您！”',hint:'(vui mừng)',ans:'高兴'},
  {pre:'Bạn nói nghe ai đó kể lại: “',blank:'听',post:'张先生说……”',hint:'(nghe)',ans:'听'},
  {pre:'Bạn nói mình đến bằng máy bay: “我是坐',blank:'飞机',post:'来的。”',hint:'(máy bay)',ans:'飞机'},
];

// Sắp xếp — đổi năm/địa điểm/phương tiện so với bài khoá
var sortData = [
  {words:['你','是','什么','时候','认识','他','的','？'],ans:'你是什么时候认识他的？',audio:'你是什么时候认识他的？'},
  {words:['我们','是','在','公司','认识','的','。'],ans:'我们是在公司认识的。',audio:'我们是在公司认识的。'},
  {words:['你们','是','怎么','来','的','？'],ans:'你们是怎么来的？',audio:'你们是怎么来的？'},
  {words:['我们','是','坐','飞机','来','的','。'],ans:'我们是坐飞机来的。',audio:'我们是坐飞机来的。'},
  {words:['很','高兴','认识','你','！'],ans:'很高兴认识你！',audio:'很高兴认识你！'},
  {words:['听','她','说','，','你','要','去','北京','。'],ans:'听她说，你要去北京。',audio:'听她说，你要去北京。'},
];

var matchData = [
  {left:'你和李小姐是什么时候认识的？',right:'我们是2011年9月认识的。'},
  {left:'你们在哪儿认识的？',right:'我们是在学校认识的。'},
  {left:'你们是怎么来饭店的？',right:'我们是坐出租车来的。'},
  {left:'很高兴认识您！',right:'认识你我也很高兴！'},
  {left:'您是坐飞机来北京的？',right:'是的。'},
];

// Trắc nghiệm — trọng tâm 是……的, không audio
var mcData = [
  {q:'你是什么时候＿＿他的？',opts:['认识','知道','看见','听'],ans:0},
  {q:'我们是2011年9月＿＿的。',opts:['认识','是','有','在'],ans:0},
  {q:'Cấu trúc nhấn mạnh "是……的" dùng để nhấn mạnh điều gì?',opts:['thời gian, địa điểm, cách thức của hành động đã xảy ra','hành động đang diễn ra','hành động sắp xảy ra','số lượng của sự vật'],ans:0},
  {q:'Thể phủ định của "是……的" bắt buộc phải giữ từ nào?',opts:['不是……的','没是……的','别是……的','无是……的'],ans:0},
  {q:'"大学" nghĩa là gì?',opts:['trường đại học','trường tiểu học','trường trung học','nhà trẻ'],ans:0},
  {q:'"出租车" nghĩa là gì?',opts:['xe taxi','xe buýt','xe máy','xe đạp'],ans:0},
  {q:'"飞机" nghĩa là gì?',opts:['máy bay','tàu hoả','tàu thuyền','ô tô'],ans:0},
  {q:'"高兴" nghĩa là gì?',opts:['vui mừng, phấn khởi','buồn bã','tức giận','lo lắng'],ans:0},
  {q:'Cách nói năm tháng đúng thứ tự là?',opts:['Năm → Tháng → Ngày','Ngày → Tháng → Năm','Tháng → Năm → Ngày','Ngày → Năm → Tháng'],ans:0},
  {q:'"听" nghĩa là gì?',opts:['nghe, nghe thấy','nói','xem','đọc'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Cô và cô Lý quen nhau khi nào vậy?'},
      {zh:'我们是2011年9月认识的。',py:'Wǒmen shì èr líng yī yī nián jiǔ yuè rènshi de.',vn:'Chúng tôi quen nhau vào tháng 9 năm 2011.'},
      {zh:'你们是怎么来饭店的？',py:'Nǐmen shì zěnme lái fàndiàn de?',vn:'Anh chị đến khách sạn bằng cách nào?'},
      {zh:'我们是坐出租车来的。',py:'Wǒmen shì zuò chūzūchē lái de.',vn:'Chúng tôi đi xe taxi đến.'},
      {zh:'很高兴认识您！',py:'Hěn gāoxìng rènshi nín!',vn:'Rất vui được biết ngài!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我们是坐＿＿来的。',frame_py:'Wǒmen shì zuò ___ lái de.',vn:'Chúng tôi đi ＿＿ đến.',options:['出租车','飞机'],samples:['我们是坐出租车来的。','我们是坐飞机来的。']},
      {frame:'我们是在＿＿认识的。',frame_py:'Wǒmen shì zài ___ rènshi de.',vn:'Chúng tôi quen nhau ở ＿＿.',options:['学校','公司'],samples:['我们是在学校认识的。','我们是在公司认识的。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🤝 Tình huống 1 — Làm quen và hỏi thăm mối quan hệ',
       guide:'Bạn gặp một người mới và tò mò muốn biết họ quen một người bạn chung của mình từ khi nào, ở đâu.',
       structure:['你和他是什么时候认识的？','我们是在＿＿认识的。'],
       sample:'你和他是什么时候认识的？我们是2011年9月认识的。我们是在学校认识的。',
       sample_vn:'Bạn quen anh ấy khi nào vậy? Chúng tôi quen nhau vào tháng 9 năm 2011. Chúng tôi quen nhau ở trường học.',
       note:'Cấu trúc "是……的" dùng để nhấn mạnh CHI TIẾT của một việc đã xảy ra rồi (thời gian, địa điểm, cách thức) — không dùng để hỏi việc chưa xảy ra.'},
      {role:'🚕 Tình huống 2 — Hỏi thăm phương tiện di chuyển',
       guide:'Bạn đón khách tại khách sạn và hỏi họ đã đến bằng phương tiện gì.',
       structure:['你们是怎么来的？','我们是坐＿＿来的。'],
       sample:'你们是怎么来的？我们是坐出租车来的。',
       sample_vn:'Các bạn đến bằng gì vậy? Chúng tôi đi xe taxi đến.',
       note:'Phương tiện di chuyển luôn được đặt giữa "是" và "来的" (是坐出租车来的) — đây là điểm ngữ pháp học sinh Việt hay đặt sai vị trí do ảnh hưởng từ tiếng Việt.'},
      {role:'😄 Tình huống 3 — Làm quen lịch sự trong công việc',
       guide:'Bạn được giới thiệu với một đối tác mới trong buổi họp và muốn bày tỏ sự vui mừng khi được quen biết.',
       structure:['很高兴认识您！','认识你我也很高兴！'],
       sample:'很高兴认识您！认识你我也很高兴！',
       sample_vn:'Rất vui được biết ngài! Rất vui được quen anh!',
       note:'很高兴认识您 là câu xã giao BẮT BUỘC phải thuộc lòng khi làm quen trong môi trường công việc trang trọng ở Trung Quốc.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 15 + ôn lại từ bài 1-14
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi đến vào hôm qua.', zh:'我是昨天来的。', py:'Wǒ shì zuótiān lái de.'},
  {vi:'Rất vui được quen biết bạn.', zh:'很高兴认识你。', py:'Hěn gāoxìng rènshi nǐ.'},
  {vi:'Chúng tôi không phải đi taxi đến.', zh:'我们不是坐出租车来的。', py:'Wǒmen bú shì zuò chūzūchē lái de.'},
  {vi:'Anh ấy học ở Đại học Bắc Kinh.', zh:'他在北京大学学习。', py:'Tā zài Běijīng Dàxué xuéxí.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Rất vui được quen biết bạn, tôi đến vào hôm qua.', zh:'很高兴认识你，我是昨天来的。', py:'Hěn gāoxìng rènshi nǐ, wǒ shì zuótiān lái de.'},
  {vi:'Chúng tôi đến bằng taxi, không phải đến bằng máy bay.', zh:'我们是坐出租车来的，不是坐飞机来的。', py:'Wǒmen shì zuò chūzūchē lái de, bú shì zuò fēijī lái de.'},
  {vi:'Anh ấy học tiếng Trung ở Đại học Bắc Kinh.', zh:'他在北京大学学习汉语。', py:'Tā zài Běijīng Dàxué xuéxí Hànyǔ.'},
  {vi:'Quen biết bạn, tôi rất vui.', zh:'认识你，我很高兴。', py:'Rènshi nǐ, wǒ hěn gāoxìng.'},
];
