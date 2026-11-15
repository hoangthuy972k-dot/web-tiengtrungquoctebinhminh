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
      },
      {
        "zh": "你认识李老师吗？",
        "py": "Nǐ rènshi Lǐ lǎoshī ma?",
        "vn": "Bạn có quen cô Lý không?"
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
      },
      {
        "zh": "我是2015年来北京的。",
        "py": "Wǒ shì èr líng yī wǔ nián lái Běijīng de.",
        "vn": "Tôi đến Bắc Kinh vào năm 2015."
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
      },
      {
        "zh": "你在哪个大学学习？",
        "py": "Nǐ zài nǎge dàxué xuéxí?",
        "vn": "Bạn học ở trường đại học nào?"
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
      },
      {
        "zh": "我们在饭店吃饭吧。",
        "py": "Wǒmen zài fàndiàn chī fàn ba.",
        "vn": "Chúng ta ăn ở nhà hàng nhé."
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
      },
      {
        "zh": "我们坐出租车去吧。",
        "py": "Wǒmen zuò chūzūchē qù ba.",
        "vn": "Chúng ta đi taxi nhé."
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
      },
      {
        "zh": "我们一起去看电影吧！",
        "py": "Wǒmen yìqǐ qù kàn diànyǐng ba!",
        "vn": "Chúng mình cùng đi xem phim nhé!"
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
      },
      {
        "zh": "今天我很高兴。",
        "py": "Jīntiān wǒ hěn gāoxìng.",
        "vn": "Hôm nay tôi rất vui."
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
      },
      {
        "zh": "你听，下雨了。",
        "py": "Nǐ tīng, xià yǔ le.",
        "vn": "Bạn nghe kìa, trời mưa rồi."
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
      },
      {
        "zh": "我是坐飞机来的。",
        "py": "Wǒ shì zuò fēijī lái de.",
        "vn": "Tôi đến bằng máy bay."
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

// Điền từ — mỗi câu một tình huống mới: 是……的 (khi nào / ở đâu / bằng gì / với ai), ngày tháng năm, từ mới
var fillData = [
  {pre:'Ở bữa tiệc, bạn hỏi cô bạn về chàng trai đứng cạnh cô ấy: “你和他是在哪儿',blank:'认识',post:'的？”',hint:'(quen biết)',ans:'认识',exp:'认识 = quen biết (một người); 是 + 在哪儿 + 认识 + 的 hỏi nơi đã quen nhau.'},
  {pre:'Bạn kể chuyện bố mẹ: “爸爸和妈妈是1998',blank:'年',post:'认识的。”',hint:'(năm)',ans:'年',exp:'Số năm + 年: 1998年 = năm 1998 (đọc từng chữ số một); 是…的 nhấn mạnh thời gian.'},
  {pre:'Bạn giới thiệu cô Lý: cô dạy ở Đại học Bắc Kinh. “李老师在北京',blank:'大学',post:'工作。”',hint:'(trường đại học)',ans:'大学',exp:'大学 = trường đại học; 北京大学 = Đại học Bắc Kinh; 在 + nơi chốn đứng trước 工作.'},
  {pre:'Một khách du lịch hỏi đường đến khách sạn: “请问，北京',blank:'饭店',post:'在哪儿？”',hint:'(khách sạn)',ans:'饭店',exp:'饭店 = khách sạn / nhà hàng lớn; 北京饭店 là tên một khách sạn nổi tiếng.'},
  {pre:'Trời mưa to, hai bạn không có ô. Bạn nói: “下雨了，我们坐',blank:'出租车',post:'回家吧。”',hint:'(xe taxi)',ans:'出租车',exp:'坐出租车 = đi taxi; phương tiện (坐出租车) đứng trước động từ 回家.'},
  {pre:'Bạn kể: chiều nào bạn cũng học cùng Lý Nguyệt. “我和李月下午',blank:'一起',post:'学习汉语。”',hint:'(cùng nhau)',ans:'一起',exp:'A 和 B + 一起 + động từ = A cùng B làm gì; 一起 đứng trước động từ, không đặt cuối câu.'},
  {pre:'Gặp lại bạn cũ sau nhiều năm, bạn reo lên: “看见你我太',blank:'高兴',post:'了！”',hint:'(vui mừng)',ans:'高兴',exp:'高兴 = vui; 太高兴了 = vui quá; trước 高兴 không thêm 是.'},
  {pre:'Bạn báo ngày mai trời mưa, bạn hỏi sao bạn biết. Bạn đáp: “我是',blank:'听',post:'王老师说的。”',hint:'(nghe)',ans:'听',exp:'听 + người + 说 = nghe ai nói; 我是听王老师说的 = tôi nghe thầy Vương nói đấy.'},
  {pre:'Bố đang đi công tác ở Bắc Kinh, mẹ nói: “爸爸明天坐',blank:'飞机',post:'回来。”',hint:'(máy bay)',ans:'飞机',exp:'坐飞机 = đi máy bay; 坐飞机回来 = đi máy bay về.'},
  {pre:'Bạn hỏi: bố bạn ấy đến bệnh viện bằng cách nào? “你爸爸',blank:'是',post:'怎么去医院的？”',hint:'(nhấn mạnh việc đã xảy ra)',ans:'是',exp:'Hỏi cách thức của việc đã xảy ra: 是 + 怎么 + động từ + 的.'},
  {pre:'A: “你们是怎么来的？” — B: “我们是开车来',blank:'的',post:'。”',hint:'(cuối câu nhấn mạnh)',ans:'的',exp:'Câu 是…的 phải có 的 sau động từ: 是开车来的; không thay 的 bằng 了.'},
];

// Sắp xếp — câu mới, mỗi câu một kiểu 是……的 / ngày tháng
var sortData = [
  {words:['李月','是','和','爸爸','一起','开车','来','学校','的','。'],ans:'李月是和爸爸一起开车来学校的。',audio:'李月是和爸爸一起开车来学校的。'},
  {words:['我','和','大卫','是','在','北京','大学','认识','的','。'],ans:'我和大卫是在北京大学认识的。',audio:'我和大卫是在北京大学认识的。',alt:['大卫和我是在北京大学认识的。']},
  {words:['你','想','和','我','一起','去','看','电影','吗','？'],ans:'你想和我一起去看电影吗？',audio:'你想和我一起去看电影吗？'},
  {words:['我','不是','坐','飞机','来','的','。'],ans:'我不是坐飞机来的。',audio:'我不是坐飞机来的。'},
  {words:['我','女儿','是','九月','一号','去','大学','的','。'],ans:'我女儿是九月一号去大学的。',audio:'我女儿是九月一号去大学的。'},
  {words:['听','李月','说','，','你','也','认识','他','？'],ans:'听李月说，你也认识他？',audio:'听李月说，你也认识他？'},
];

// Nối — câu hỏi ↔ câu trả lời (mỗi câu trả lời chỉ hợp với một câu hỏi)
var matchData = [
  {left:'你是哪年来中国的？',right:'2019年。'},
  {left:'你们是怎么去饭店的？',right:'坐出租车去的。'},
  {left:'你是一个人来的吗？',right:'不是，我和朋友一起来的。'},
  {left:'你们是在哪儿认识的？',right:'在医院，我们都是医生。'},
  {left:'你听谁说的？',right:'李老师。'},
  {left:'你的衣服是在哪儿买的？',right:'是我妈妈给我买的。'},
];

// Trắc nghiệm — chọn câu đúng tình huống / chọn câu đáp / tìm câu sai
var mcData = [
  {q:'Bạn mới quen đang sống ở Bắc Kinh. Bạn hỏi: “Bạn đến Bắc Kinh khi nào?” (việc đã xảy ra)',opts:['你是什么时候来北京的？','你什么时候是来北京的？','你是来北京什么时候的？','你是什么时候来北京吗？'],ans:0,exp:'Hỏi thời gian của việc đã xảy ra: 是 + 什么时候 + động từ + 的; câu có 什么时候 thì không thêm 吗.'},
  {q:'Câu nào SAI?',opts:['我们是昨天认识了。','谢朋是和妈妈一起来的。','这些苹果是在商店买的。','我不是在北京认识他的。'],ans:0,exp:'Câu 是…的 kết thúc bằng 的, không dùng 了: 我们是昨天认识的.'},
  {q:'A: “你是坐出租车来的吗？” — B (đi máy bay đến) đáp:',opts:['不是，我是坐飞机来的。','没有，我是坐飞机来的。','不，我坐飞机来了的。','不是，我是坐飞机来了。'],ans:0,exp:'Phủ định câu 是…的 dùng 不是 (không dùng 没有); câu khẳng định giữ nguyên 是…的, không đổi 的 thành 了.'},
  {q:'Bạn muốn nói: “Chúng tôi quen nhau ngày 8 tháng 3 năm 2015.”',opts:['我们是2015年3月8号认识的。','我们是8号3月2015年认识的。','我们是2015年8号3月认识的。','我们是认识2015年3月8号的。'],ans:0,exp:'Ngày tháng nói từ lớn đến nhỏ: năm → tháng → ngày (2015年3月8号), ngược tiếng Việt; thời gian đứng trước động từ 认识.'},
  {q:'Bạn thấy cô Vương bước xuống từ một chiếc taxi trước cổng. Bạn nói với bạn mình:',opts:['王小姐是坐出租车来的。','王小姐是来的坐出租车。','王小姐坐出租车是来的。','王小姐是坐出租车来了的。'],ans:0,exp:'Cách thức (坐出租车) đặt giữa 是 và động từ: 是 + 坐出租车 + 来的.'},
  {q:'Bạn muốn giới thiệu Đại Vệ với cô Lý, bạn hỏi cô: “Cô có quen Đại Vệ không ạ?”',opts:['李老师，您认识大卫吗？','李老师，您有认识大卫吗？','李老师，您看见大卫吗？','李老师，您认识大卫呢？'],ans:0,exp:'“có quen … không” = 认识…吗; không dịch chữ “có” thành 有; 看见 là “nhìn thấy”.'},
  {q:'Bạn muốn rủ: “Chúng mình cùng đến nhà hàng ăn cơm nhé.”',opts:['我们一起去饭店吃饭吧。','我们去饭店吃饭一起吧。','一起我们去饭店吃饭吧。','我们去一起饭店吃饭吧。'],ans:0,exp:'一起 đứng sau chủ ngữ, trước động từ: 我们一起去…; không đặt cuối câu như tiếng Việt “ăn cùng nhau”.'},
  {q:'Lần đầu gặp bố của bạn thân, bạn nói:',opts:['您好！很高兴认识您！','您好！我是很高兴认识您！','您好！很高兴是认识您！','您好！很高兴认识您吗？'],ans:0,exp:'高兴 là tính từ nên không thêm 是 trước nó; đây là câu cảm thán, không phải câu hỏi nên không dùng 吗.'},
  {q:'Cô giáo bảo ngày mai trời mưa. Bạn kể lại với bạn cùng phòng:',opts:['听老师说明天下雨。','老师听说明天下雨。','听说老师明天下雨。','听老师说明天下雨吗。'],ans:0,exp:'听 + người + 说 = nghe ai nói; người nói đứng giữa 听 và 说.'},
  {q:'A: “你吃饭了吗？” — B: “吃了。” A muốn hỏi tiếp: “Ăn ở đâu thế?”',opts:['你是在哪儿吃的？','你在哪儿吃了的？','你是吃在哪儿的？','你是在哪儿吃吗？'],ans:0,exp:'Việc đã xảy ra rồi, hỏi chi tiết (ở đâu) thì dùng 是…的: 是在哪儿吃的; nơi chốn đứng trước động từ.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý: năm đọc từng chữ số (2011年 = èr líng yī yī nián); 一起 đọc yìqǐ.',
    models:[
      {zh:'你和李小姐是什么时候认识的？',py:'Nǐ hé Lǐ xiǎojiě shì shénme shíhou rènshi de?',vn:'Bạn và cô Lý quen nhau khi nào thế?'},
      {zh:'认识你我也很高兴！',py:'Rènshi nǐ wǒ yě hěn gāoxìng!',vn:'Quen bạn tôi cũng rất vui!'},
      {zh:'你是几点来学校的？',py:'Nǐ shì jǐ diǎn lái xuéxiào de?',vn:'Bạn đến trường lúc mấy giờ?'},
      {zh:'你们是在哪个大学学习的？',py:'Nǐmen shì zài nǎge dàxué xuéxí de?',vn:'Các bạn học ở trường đại học nào?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'他是＿＿来饭店的。',frame_py:'Tā shì ___ lái fàndiàn de.',vn:'Anh ấy đến khách sạn ＿＿ (nhấn mạnh khi nào / bằng gì / với ai).',options:['昨天上午','开车','和女儿一起'],samples:['他是昨天上午来饭店的。','他是开车来饭店的。','他是和女儿一起来饭店的。']},
      {frame:'我是＿＿去中国的。',frame_py:'Wǒ shì ___ qù Zhōngguó de.',vn:'Tôi đi Trung Quốc vào ＿＿.',options:['2018年3月','2021年7月10号','2024年1月'],samples:['我是2018年3月去中国的。','我是2021年7月10号去中国的。','我是2024年1月去中国的。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🤝 Tình huống 1 — Kể về người bạn thân',
       guide:'Hãy kể bạn quen người bạn thân của mình năm nào và ở đâu.',
       structure:['我和……是……年','在……认识的'],
       sample:'我和谢朋是2019年在大学认识的，他是我的好朋友。',
       sample_vn:'Tôi và Tạ Bằng quen nhau ở trường đại học năm 2019, cậu ấy là bạn thân của tôi.',
       note:'Người Việt hay nói “quen nhau năm 2019” rồi đặt năm ra sau động từ. Trong câu 是…的, thời gian và nơi chốn đều đứng giữa 是 và động từ 认识.'},
      {role:'🚕 Tình huống 2 — Đón bạn ở khách sạn',
       guide:'Bạn ra sảnh khách sạn đón một người bạn mới từ xa đến. Hãy hỏi bạn ấy đến bằng gì và đi cùng ai, rồi đóng vai bạn ấy trả lời.',
       structure:['你是怎么……的？','我是和……一起坐……来的。'],
       sample:'你是怎么来北京的？——我是和同学一起坐飞机来的。',
       sample_vn:'Bạn đến Bắc Kinh bằng gì? — Mình đi máy bay cùng bạn học.',
       note:'Câu 是…的 chỉ dùng cho việc ĐÃ xảy ra. Nếu bạn ấy chưa đến, hãy hỏi bình thường: 你怎么来？'},
      {role:'😄 Tình huống 3 — Tự giới thiệu ở lớp mới',
       guide:'Ngày đầu đến lớp học tiếng Trung ở Bắc Kinh: hãy nói tên và kể ngày tháng năm bạn đến Bắc Kinh, đi cùng ai.',
       structure:['我叫……','……年……月……号，我……'],
       sample:'我叫大卫，2025年9月1号，我和妈妈来北京了。',
       sample_vn:'Mình tên là Đại Vệ, ngày 1 tháng 9 năm 2025 mình cùng mẹ đến Bắc Kinh.',
       note:'Nói ngày tháng theo thứ tự năm → tháng → ngày (2025年9月1号), ngược tiếng Việt. Năm đọc từng chữ số: 2025 = èr líng èr wǔ.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 15 + ôn lại từ bài 1-14
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi quen Vương Phương ở trường đại học.', zh:'我是在大学认识王方的。', py:'Wǒ shì zài dàxué rènshi Wáng Fāng de.'},
  {vi:'Hôm nay là ngày 15 tháng 11 năm 2026.', zh:'今天是2026年11月15号。', py:'Jīntiān shì èr líng èr liù nián shíyī yuè shíwǔ hào.'},
  {vi:'Bố tôi không đến một mình, mẹ tôi cũng đến.', zh:'我爸爸不是一个人来的，妈妈也来了。', py:'Wǒ bàba bú shì yí ge rén lái de, māma yě lái le.'},
  {vi:'Bạn đến cùng với ai?', zh:'你是和谁一起来的？', py:'Nǐ shì hé shéi yìqǐ lái de?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Con gái tôi đi Bắc Kinh bằng máy bay, con bé rất vui.', zh:'我女儿是坐飞机去北京的，她很高兴。', py:'Wǒ nǚ\'ér shì zuò fēijī qù Běijīng de, tā hěn gāoxìng.'},
  {vi:'Cái cốc này mẹ tôi mua ở Bắc Kinh.', zh:'这个杯子是我妈妈在北京买的。', py:'Zhège bēizi shì wǒ māma zài Běijīng mǎi de.'},
  {vi:'Những quyển sách này ai cho bạn thế?', zh:'这些书是谁给你的？', py:'Zhèxiē shū shì shéi gěi nǐ de?'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我和李月是2016年认识的，那年我们都在北京大学学习。',
   questions:[
     {q:'Họ quen nhau năm nào?',opts:['2006','2016','2060'],ans:1,exp:'2016年 = năm 2016 (đọc từng chữ số: hai-không-một-sáu).'},
     {q:'Khi đó họ làm gì?',opts:['Đều học ở Đại học Bắc Kinh','Đều làm ở bệnh viện','Đều dạy học ở Bắc Kinh'],ans:0,exp:'我们都在北京大学学习 = chúng tôi đều học ở Đại học Bắc Kinh.'},
   ]},
  {audio:'张先生是坐飞机来北京的，今天下午坐出租车去饭店。',
   questions:[
     {q:'Ông Trương đến Bắc Kinh bằng gì?',opts:['Máy bay','Taxi','Tự lái xe'],ans:0,exp:'是坐飞机来北京的 = đến Bắc Kinh bằng máy bay.'},
     {q:'Chiều nay ông ấy đi đâu?',opts:['Về nhà','Đến khách sạn','Đến trường đại học'],ans:1,exp:'坐出租车去饭店 = đi taxi đến khách sạn.'},
   ]},
  {audio:'今天是三月八号，我妈妈很高兴，爸爸给她买了衣服。',
   questions:[
     {q:'Hôm nay là ngày nào?',opts:['Ngày 8 tháng 3','Ngày 3 tháng 8','Ngày 8 tháng 8'],ans:0,exp:'三月八号 = ngày 8 tháng 3 (tháng nói trước, ngày nói sau).'},
     {q:'Vì sao mẹ vui?',opts:['Mẹ được đi máy bay','Bố mua quần áo cho mẹ','Mẹ gặp lại bạn cũ'],ans:1,exp:'爸爸给她买了衣服 = bố mua quần áo cho mẹ.'},
   ]},
  {audio:'你听！是谁在说汉语呢？——是大卫，他的汉语很好。',
   questions:[
     {q:'Ai đang nói tiếng Trung?',opts:['Tạ Bằng','Cô Lý','Đại Vệ'],ans:2,exp:'是大卫 = là Đại Vệ; 你听！ = bạn nghe kìa!'},
   ]},
  {audio:'昨天我在饭店吃饭，看见了我的大学同学。',
   questions:[
     {q:'Hôm qua người nói gặp ai ở nhà hàng?',opts:['Cô giáo cũ','Bạn học đại học','Bác sĩ'],ans:1,exp:'我的大学同学 = bạn học đại học của tôi.'},
   ]},
  {audio:'明天我们一起去北京吧，坐飞机去，好吗？——好啊！',
   questions:[
     {q:'Họ định đi Bắc Kinh bằng gì?',opts:['Taxi','Tự lái xe','Máy bay'],ans:2,exp:'坐飞机去 = đi bằng máy bay.'},
   ]},
];

// Sach bai tap (khong pinyin): Doc + Chu Han; Nghe / Ngu am can file nghe nen bo qua
var wbData = {
  sections: [
    { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
      { type: 'mocktest',
        note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài tập viết chữ theo thứ tự nét hãy luyện trực tiếp trong sách.',
        listening: [],
        reading: [
          { n: 16, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-15-wb/q16.jpg', prompt: '开出租车', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '开出租车: lái taxi. Tranh là phi công đang ngồi trong buồng lái máy bay (开飞机) → Sai.' },
          { n: 17, img: '/images/hsk1-bai-15-wb/q17.jpg', prompt: '高兴', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '高兴: vui. Tranh là em bé đang khóc → Sai.' },
          { n: 18, img: '/images/hsk1-bai-15-wb/q18.jpg', prompt: '一起学习', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '一起学习: cùng nhau học. Tranh là nhóm bạn đang ngồi học chung → Đúng.' },
          { n: 19, img: '/images/hsk1-bai-15-wb/q19.jpg', prompt: '开飞机', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '开飞机: lái máy bay. Tranh là hành khách trong khoang máy bay đang với tay lên ngăn hành lý, không phải lái máy bay → Sai.' },
          { n: 20, img: '/images/hsk1-bai-15-wb/q20.jpg', prompt: '大学同学', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '大学同学: bạn học đại học. Tranh là hai bạn mặc lễ phục tốt nghiệp đại học → Đúng.' },
          { n: 21, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
            { key: 'A', text: '我们是大学同学。' },
            { key: 'B', text: '我也很高兴。' },
            { key: 'C', text: '在一个小商店买的。' },
            { key: 'D', text: '明天吧，小王是今天去的。' },
            { key: 'E', text: '我看见他开车回家了。' },
            { key: 'F', text: '好的，谢谢！' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你们是怎么认识的？', answer: 'A', vn: 'Các bạn quen nhau thế nào? — A: Chúng tôi là bạn học đại học.' },
          { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你的衣服是在哪儿买的？', answer: 'C', vn: 'Quần áo của bạn mua ở đâu thế? — C: Mua ở một cửa hàng nhỏ. (是…的 nhấn mạnh nơi chốn.)' },
          { n: 23, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '小王回家了吗？', answer: 'E', vn: 'Tiểu Vương về nhà chưa? — E: Tôi thấy cậu ấy lái xe về nhà rồi.' },
          { n: 24, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我很高兴你来我们学校。', answer: 'B', vn: 'Tôi rất vui vì bạn đến trường chúng tôi. — B: Tôi cũng rất vui.' },
          { n: 25, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你想什么时候去？', answer: 'D', vn: 'Bạn muốn khi nào đi? — D: Ngày mai đi, Tiểu Vương thì đi hôm nay rồi. (是…的 nhấn mạnh thời gian.)' },
          { n: 26, part: 'Phần 3 · Chọn từ thích hợp điền vào chỗ trống', bank: [
            { key: 'A', text: '认识' },
            { key: 'B', text: '坐' },
            { key: 'C', text: '一起' },
            { key: 'D', text: '名字' },
            { key: 'E', text: '高兴' },
            { key: 'F', text: '听' }
          ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '（　）老师说，明天我们去看电影。', answer: 'F', vn: 'Nghe thầy giáo nói, ngày mai chúng ta đi xem phim. — 听…说: nghe … nói.' },
          { n: 27, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我们是在飞机上（　）的。', answer: 'A', vn: 'Chúng tôi quen nhau trên máy bay. — 是 + nơi chốn + 认识的: nhấn mạnh quen nhau ở đâu.' },
          { n: 28, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '我不喜欢（　）出租车，我喜欢开车。', answer: 'B', vn: 'Tôi không thích đi taxi, tôi thích tự lái xe. — 坐出租车: đi taxi.' },
          { n: 29, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你想不想和我们（　）去商店买衣服？', answer: 'C', vn: 'Bạn có muốn cùng chúng tôi đi cửa hàng mua quần áo không? — 和…一起: cùng với…' },
          { n: 30, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '今天天气很好，我很（　）。', answer: 'E', vn: 'Hôm nay thời tiết rất đẹp, tôi rất vui. — 很高兴: rất vui.' }
        ],
        writing: [
          { n: '1a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 艹 (bộ Thảo)?', prompt: '艹', options: [{ key: 'A', text: '家' }, { key: 'B', text: '菜' }, { key: 'C', text: '它' }, { key: 'D', text: '室' }], answer: 'B', vn: '菜 (rau, món ăn) có bộ 艹 (bộ Thảo). Các chữ có bộ 艹 trong bài: 菜, 草, 节, 苹.' },
          { n: '1b', prompt: '艹', options: [{ key: 'A', text: '草' }, { key: 'B', text: '它' }, { key: 'C', text: '室' }, { key: 'D', text: '安' }], answer: 'A', vn: '草 (cỏ) có bộ 艹 (bộ Thảo). Các chữ có bộ 艹 trong bài: 菜, 草, 节, 苹.' },
          { n: '1c', prompt: '艹', options: [{ key: 'A', text: '室' }, { key: 'B', text: '安' }, { key: 'C', text: '家' }, { key: 'D', text: '节' }], answer: 'D', vn: '节 (ngày lễ) có bộ 艹 (bộ Thảo). Các chữ có bộ 艹 trong bài: 菜, 草, 节, 苹.' },
          { n: '1d', prompt: '艹', options: [{ key: 'A', text: '安' }, { key: 'B', text: '家' }, { key: 'C', text: '苹' }, { key: 'D', text: '它' }], answer: 'C', vn: '苹 (苹果: quả táo) có bộ 艹 (bộ Thảo). Các chữ có bộ 艹 trong bài: 菜, 草, 节, 苹.' },
          { n: '2a', part: 'Chữ Hán · Chữ nào dưới đây có bộ 宀 (bộ Miên – mái nhà)?', prompt: '宀', options: [{ key: 'A', text: '菜' }, { key: 'B', text: '家' }, { key: 'C', text: '草' }, { key: 'D', text: '节' }], answer: 'B', vn: '家 (nhà) có bộ 宀 (bộ Miên – mái nhà). Các chữ có bộ 宀 trong bài: 家, 它, 室, 安.' },
          { n: '2b', prompt: '宀', options: [{ key: 'A', text: '它' }, { key: 'B', text: '草' }, { key: 'C', text: '节' }, { key: 'D', text: '苹' }], answer: 'A', vn: '它 (nó) có bộ 宀 (bộ Miên – mái nhà). Các chữ có bộ 宀 trong bài: 家, 它, 室, 安.' },
          { n: '2c', prompt: '宀', options: [{ key: 'A', text: '节' }, { key: 'B', text: '苹' }, { key: 'C', text: '菜' }, { key: 'D', text: '室' }], answer: 'D', vn: '室 (phòng; 教室: lớp học) có bộ 宀 (bộ Miên – mái nhà). Các chữ có bộ 宀 trong bài: 家, 它, 室, 安.' },
          { n: '2d', prompt: '宀', options: [{ key: 'A', text: '苹' }, { key: 'B', text: '菜' }, { key: 'C', text: '安' }, { key: 'D', text: '草' }], answer: 'C', vn: '安 (yên ổn) có bộ 宀 (bộ Miên – mái nhà). Các chữ có bộ 宀 trong bài: 家, 它, 室, 安.' }
        ]
      }
    ] }
  ]
};
