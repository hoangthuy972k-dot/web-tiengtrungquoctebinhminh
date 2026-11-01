// ══════════════════════════════════════════
// DATA — HSK1 Bài 4: 她是我的汉语老师。
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "她",
    "py": "tā",
    "pos": "Đại từ",
    "vn": "cô ấy, bà ấy",
    "hv": "tha",
    "em": "👩",
    "lesson": 1,
    "ex_zh": "她是谁？",
    "ex_py": "Tā shì shéi?",
    "ex_vn": "Cô ấy là ai vậy?",
    "exList": [
      {
        "zh": "她是谁？",
        "py": "Tā shì shéi?",
        "vn": "Cô ấy là ai vậy?"
      },
      {
        "zh": "她是我的汉语老师。",
        "py": "Tā shì wǒ de Hànyǔ lǎoshī.",
        "vn": "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "她",
        "p": "tā",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 也(dã) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "cô ấy, bà ấy",
        "tip": "女(nữ giới) + 也(đại từ cổ) → đại từ chỉ NGƯỜI NỮ đang được nhắc đến.",
        "cf": "姐 (jiě – \"chị gái\")",
        "w": "她是我朋友"
      }
    ],
    "colloFull": [
      {
        "zh": "她是",
        "py": "tā shì",
        "vn": "cô ấy là"
      },
      {
        "zh": "她叫",
        "py": "tā jiào",
        "vn": "cô ấy tên là"
      },
      {
        "zh": "她的名字",
        "py": "tā de míngzi",
        "vn": "tên của cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "她 + 是 + danh từ",
        "m": "Cô ấy là …: 她是我的老师"
      },
      {
        "s": "她 (nữ, bộ 女) ≠ 他 (nam, bộ 人) — nói thì giống nhau, viết thì khác"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là giáo viên tiếng Trung của tôi.",
        "answer": "她是我的汉语老师。",
        "answerPy": "Tā shì wǒ de Hànyǔ lǎoshī.",
        "note": "我的 + danh từ — chỉ sở hữu.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không phải bạn cùng lớp của tôi.",
        "answer": "她不是我的同学。",
        "answerPy": "Tā bú shì wǒ de tóngxué.",
        "note": "她 viết bằng bộ 女, dùng cho người nữ.",
        "pair": "不是……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "谁",
    "py": "shéi",
    "pos": "Đại từ",
    "vn": "ai",
    "hv": "thùy",
    "em": "❓",
    "lesson": 1,
    "ex_zh": "她是谁？",
    "ex_py": "Tā shì shéi?",
    "ex_vn": "Cô ấy là ai vậy?",
    "exList": [
      {
        "zh": "她是谁？",
        "py": "Tā shì shéi?",
        "vn": "Cô ấy là ai vậy?"
      },
      {
        "zh": "他是谁？",
        "py": "Tā shì shéi?",
        "vn": "Anh ấy là ai thế?"
      }
    ],
    "hanzi": [
      {
        "c": "谁",
        "p": "shéi",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "讠(ngôn) trái → 隹(chuy) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "ai",
        "tip": "讠(lời nói) dùng để cất tiếng HỎI xem người đó là ai.",
        "cf": "唯 (wéi – \"duy nhất\", cũng có 隹\")",
        "w": "她是谁 / 他是谁"
      }
    ],
    "colloFull": [
      {
        "zh": "是谁",
        "py": "shì shéi",
        "vn": "là ai"
      },
      {
        "zh": "谁的",
        "py": "shéi de",
        "vn": "của ai"
      },
      {
        "zh": "他是谁",
        "py": "tā shì shéi",
        "vn": "anh ấy là ai"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 是 + 谁？",
        "m": "Hỏi người nào: 她是谁？"
      },
      {
        "s": "Câu đã có 谁 thì KHÔNG thêm 吗: ✗ 她是谁吗？"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là ai?",
        "answer": "她是谁？",
        "answerPy": "Tā shì shéi?",
        "note": "Câu đã có 谁 nên không thêm 吗.",
        "pair": "……是谁？"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là bạn cùng lớp của ai?",
        "answer": "他是谁的同学？",
        "answerPy": "Tā shì shéi de tóngxué?",
        "note": "谁的 + danh từ — của ai.",
        "pair": "谁的……？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "的",
    "py": "de",
    "pos": "Trợ từ",
    "vn": "trợ từ kết cấu, biểu thị sở hữu",
    "hv": "đích",
    "em": "🔗",
    "lesson": 1,
    "ex_zh": "她是我的汉语老师。",
    "ex_py": "Tā shì wǒ de Hànyǔ lǎoshī.",
    "ex_vn": "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.",
    "exList": [
      {
        "zh": "她是我的汉语老师。",
        "py": "Tā shì wǒ de Hànyǔ lǎoshī.",
        "vn": "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc."
      },
      {
        "zh": "他是我的老师。",
        "py": "Tā shì wǒ de lǎoshī.",
        "vn": "Anh ấy là thầy giáo của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "的",
        "p": "de",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "白(bạch) trái → 勺(chước) phải",
        "rad": "白 (bạch – trắng)",
        "mean": "trợ từ sở hữu (của)",
        "tip": "白(rõ ràng, sáng tỏ) → làm RÕ mối quan hệ SỞ HỮU giữa hai danh từ.",
        "cf": "白 (bái – \"màu trắng\")",
        "w": "我的 / 你的 / 汉语老师的"
      }
    ],
    "colloFull": [
      {
        "zh": "我的名字",
        "py": "wǒ de míngzi",
        "vn": "tên của tôi"
      },
      {
        "zh": "她的汉语",
        "py": "tā de Hànyǔ",
        "vn": "tiếng Trung của cô ấy"
      },
      {
        "zh": "谁的",
        "py": "shéi de",
        "vn": "của ai"
      },
      {
        "zh": "老师的学生",
        "py": "lǎoshī de xuésheng",
        "vn": "học sinh của thầy"
      }
    ],
    "patterns": [
      {
        "s": "người + 的 + danh từ",
        "m": "Sở hữu: 我的名字 — tên của tôi"
      },
      {
        "s": "Người thân và nhóm gần gũi hay bỏ 的: 我同学, 我朋友"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tên của tôi là Vương Mỹ.",
        "answer": "我的名字叫王美。",
        "answerPy": "Wǒ de míngzi jiào Wáng Měi.",
        "note": "的 nối người sở hữu với vật được sở hữu.",
        "pair": "……的……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là học sinh của thầy.",
        "answer": "他是老师的学生。",
        "answerPy": "Tā shì lǎoshī de xuésheng.",
        "note": "老师的学生 — học sinh của thầy.",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 4,
    "zh": "汉语",
    "py": "Hànyǔ",
    "pos": "Danh từ",
    "vn": "tiếng Trung Quốc",
    "hv": "Hán Ngữ",
    "em": "🈶",
    "lesson": 1,
    "ex_zh": "她是我的汉语老师。",
    "ex_py": "Tā shì wǒ de Hànyǔ lǎoshī.",
    "ex_vn": "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.",
    "exList": [
      {
        "zh": "她是我的汉语老师。",
        "py": "Tā shì wǒ de Hànyǔ lǎoshī.",
        "vn": "Cô ấy là cô giáo dạy tôi tiếng Trung Quốc."
      },
      {
        "zh": "你的汉语老师是谁？",
        "py": "Nǐ de Hànyǔ lǎoshī shì shéi?",
        "vn": "Giáo viên tiếng Trung của bạn là ai?"
      }
    ],
    "hanzi": [
      {
        "c": "汉",
        "p": "hàn",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "氵(thuỷ) trái → 又(biến thể) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "(dân tộc, ngôn ngữ) Hán",
        "tip": "氵(nước, chỉ dòng Hán Thuỷ) → tên gọi dân tộc Hán, ngôn ngữ HÁN.",
        "cf": "双 (shuāng – \"đôi, cặp\")",
        "w": "汉语 / 汉字"
      },
      {
        "c": "语",
        "p": "yǔ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "讠(ngôn) trái → 吾(ngô) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "ngôn ngữ, tiếng nói",
        "tip": "讠(lời nói) + 吾(ta, tôi) → LỜI NÓI của con người = NGÔN NGỮ.",
        "cf": "悟 (wù – \"tỉnh ngộ\")",
        "w": "汉语"
      }
    ],
    "colloFull": [
      {
        "zh": "汉语老师",
        "py": "Hànyǔ lǎoshī",
        "vn": "giáo viên tiếng Trung"
      },
      {
        "zh": "我的汉语",
        "py": "wǒ de Hànyǔ",
        "vn": "tiếng Trung của tôi"
      },
      {
        "zh": "汉语名字",
        "py": "Hànyǔ míngzi",
        "vn": "tên tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "汉语 + 老师 / 名字",
        "m": "Ghép thẳng phía trước danh từ"
      },
      {
        "s": "汉 + 语",
        "m": "Tiếng nói (语) của người Hán (汉)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy ấy là giáo viên tiếng Trung.",
        "answer": "他是汉语老师。",
        "answerPy": "Tā shì Hànyǔ lǎoshī.",
        "note": "汉语老师 ghép thẳng, không cần 的.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tên tiếng Trung của bạn là gì?",
        "answer": "你的汉语名字叫什么？",
        "answerPy": "Nǐ de Hànyǔ míngzi jiào shénme?",
        "note": "汉语名字 — tên tiếng Trung.",
        "pair": "叫什么？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "哪",
    "py": "nǎ",
    "pos": "Đại từ",
    "vn": "nào, cái nào",
    "hv": "na",
    "em": "🧭",
    "lesson": 2,
    "ex_zh": "你是哪国人？",
    "ex_py": "Nǐ shì nǎ guó rén?",
    "ex_vn": "Anh là người nước nào vậy?",
    "exList": [
      {
        "zh": "你是哪国人？",
        "py": "Nǐ shì nǎ guó rén?",
        "vn": "Anh là người nước nào vậy?"
      },
      {
        "zh": "你的朋友是哪国人？",
        "py": "Nǐ de péngyou shì nǎ guó rén?",
        "vn": "Bạn của bạn là người nước nào?"
      }
    ],
    "hanzi": [
      {
        "c": "哪",
        "p": "nǎ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "口(khẩu) trái → 那(na) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "nào, cái nào",
        "tip": "口(miệng hỏi) + 那(kia) → hỏi xem là CÁI NÀO trong số đó.",
        "cf": "那 (nà – \"kia, đó\")",
        "w": "哪国人 / 哪儿"
      }
    ],
    "colloFull": [
      {
        "zh": "哪国人",
        "py": "nǎ guó rén",
        "vn": "người nước nào"
      },
      {
        "zh": "哪国",
        "py": "nǎ guó",
        "vn": "nước nào"
      },
      {
        "zh": "是哪国人",
        "py": "shì nǎ guó rén",
        "vn": "là người nước nào"
      }
    ],
    "patterns": [
      {
        "s": "哪 + 国 + 人",
        "m": "Hỏi quốc tịch: 你是哪国人？"
      },
      {
        "s": "哪 (nǎ, nào) ≠ 那 (nà, kia) — chỉ khác một nét và một dấu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn là người nước nào?",
        "answer": "你是哪国人？",
        "answerPy": "Nǐ shì nǎ guó rén?",
        "note": "Khung hỏi quốc tịch quen thuộc nhất.",
        "pair": "哪国人？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là người nước nào?",
        "answer": "她是哪国人？",
        "answerPy": "Tā shì nǎ guó rén?",
        "note": "哪 (nǎ) khác 那 (nà) — chú ý dấu thanh.",
        "pair": "哪国人？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "呢",
    "py": "ne",
    "pos": "Trợ từ",
    "vn": "đặt cuối câu hỏi tỉnh lược",
    "hv": "ni",
    "em": "↩️",
    "lesson": 2,
    "ex_zh": "我是美国人。你呢？",
    "ex_py": "Wǒ shì Měiguó rén. Nǐ ne?",
    "ex_vn": "Tôi là người Mỹ, còn bạn?",
    "exList": [
      {
        "zh": "我是美国人。你呢？",
        "py": "Wǒ shì Měiguó rén. Nǐ ne?",
        "vn": "Tôi là người Mỹ, còn bạn?"
      },
      {
        "zh": "我叫李月，你呢？",
        "py": "Wǒ jiào Lǐ Yuè, nǐ ne?",
        "vn": "Tôi tên là Lý Nguyệt, còn bạn?"
      }
    ],
    "hanzi": [
      {
        "c": "呢",
        "p": "ne",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "口(khẩu) trái → 尼(ni) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "trợ từ hỏi tỉnh lược",
        "tip": "口(miệng) mượn âm 尼 tạo thành trợ từ hỏi lại \"còn ... thì sao?\".",
        "cf": "尼 (ní – \"ni cô\")",
        "w": "你呢 / 她呢"
      }
    ],
    "colloFull": [
      {
        "zh": "你呢",
        "py": "nǐ ne",
        "vn": "còn bạn thì sao"
      },
      {
        "zh": "我呢",
        "py": "wǒ ne",
        "vn": "còn tôi thì sao"
      },
      {
        "zh": "他呢",
        "py": "tā ne",
        "vn": "còn anh ấy thì sao"
      }
    ],
    "patterns": [
      {
        "s": "danh từ / đại từ + 呢？",
        "m": "Hỏi lại cùng một chuyện: 我是学生，你呢？"
      },
      {
        "s": "呢 giúp khỏi lặp lại cả câu hỏi dài"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi là học sinh, còn bạn?",
        "answer": "我是学生，你呢？",
        "answerPy": "Wǒ shì xuésheng, nǐ ne?",
        "note": "呢 thay cho cả câu hỏi vừa nói.",
        "pair": "……，……呢？"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy là người Trung Quốc, còn anh ấy?",
        "answer": "她是中国人，他呢？",
        "answerPy": "Tā shì Zhōngguó rén, tā ne?",
        "note": "Hỏi lại về người khác mà không phải lặp câu.",
        "pair": "……，……呢？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "他",
    "py": "tā",
    "pos": "Đại từ",
    "vn": "anh ấy, ông ấy",
    "hv": "tha",
    "em": "👨",
    "lesson": 2,
    "ex_zh": "他是谁？",
    "ex_py": "Tā shì shéi?",
    "ex_vn": "Anh ấy là ai thế?",
    "exList": [
      {
        "zh": "他是谁？",
        "py": "Tā shì shéi?",
        "vn": "Anh ấy là ai thế?"
      },
      {
        "zh": "他是我同学。",
        "py": "Tā shì wǒ tóngxué.",
        "vn": "Đó là bạn cùng lớp của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "他",
        "p": "tā",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "亻(nhân) trái → 也(dã) phải",
        "rad": "亻 (nhân – người)",
        "mean": "anh ấy, ông ấy",
        "tip": "亻(người nam) + 也(đại từ cổ) → đại từ chỉ NGƯỜI NAM đang được nhắc đến.",
        "cf": "她 (tā – \"cô ấy\", cùng phần 也\")",
        "w": "他是谁 / 他的"
      }
    ],
    "colloFull": [
      {
        "zh": "他是",
        "py": "tā shì",
        "vn": "anh ấy là"
      },
      {
        "zh": "他叫",
        "py": "tā jiào",
        "vn": "anh ấy tên là"
      },
      {
        "zh": "他的名字",
        "py": "tā de míngzi",
        "vn": "tên của anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "他 + 是 + danh từ",
        "m": "Anh ấy là …: 他是我朋友"
      },
      {
        "s": "他 dùng cho nam; nhắc nhóm có cả nam lẫn nữ cũng dùng 他们"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là bạn của tôi.",
        "answer": "他是我的朋友。",
        "answerPy": "Tā shì wǒ de péngyou.",
        "note": "我的朋友 — bạn của tôi.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy tên là gì?",
        "answer": "他叫什么名字？",
        "answerPy": "Tā jiào shénme míngzi?",
        "note": "Chủ ngữ là ngôi thứ ba vẫn dùng khung này.",
        "pair": "叫什么名字？"
      }
    ]
  },
  {
    "n": 8,
    "zh": "同学",
    "py": "tóngxué",
    "pos": "Danh từ",
    "vn": "bạn cùng lớp",
    "hv": "đồng học",
    "em": "👬",
    "lesson": 2,
    "ex_zh": "他是我同学。",
    "ex_py": "Tā shì wǒ tóngxué.",
    "ex_vn": "Đó là bạn cùng lớp của tôi.",
    "exList": [
      {
        "zh": "他是我同学。",
        "py": "Tā shì wǒ tóngxué.",
        "vn": "Đó là bạn cùng lớp của tôi."
      },
      {
        "zh": "她是你同学吗？",
        "py": "Tā shì nǐ tóngxué ma?",
        "vn": "Cô ấy cũng là bạn cùng lớp của bạn à?"
      }
    ],
    "hanzi": [
      {
        "c": "同",
        "p": "tóng",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "冂 bao ngoài → 一,口 bên trong",
        "rad": "口 (khẩu – phần trong)",
        "mean": "cùng, giống nhau",
        "tip": "Nhiều miệng 口 nói CÙNG một tiếng dưới một mái che → ĐỒNG NHẤT, CÙNG NHAU.",
        "cf": "洞 (dòng – \"hang động\")",
        "w": "同学 / 同事"
      }
    ],
    "colloFull": [
      {
        "zh": "我的同学",
        "py": "wǒ de tóngxué",
        "vn": "bạn cùng lớp của tôi"
      },
      {
        "zh": "中国同学",
        "py": "Zhōngguó tóngxué",
        "vn": "bạn học người Trung Quốc"
      },
      {
        "zh": "同学们",
        "py": "tóngxué men",
        "vn": "các bạn học"
      },
      {
        "zh": "是同学",
        "py": "shì tóngxué",
        "vn": "là bạn cùng lớp"
      }
    ],
    "patterns": [
      {
        "s": "ai + 的 + 同学",
        "m": "Bạn học của ai"
      },
      {
        "s": "同 + 学",
        "m": "Cùng (同) học (学) một lớp"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào các bạn học!",
        "answer": "同学们好！",
        "answerPy": "Tóngxuémen hǎo!",
        "note": "Thầy cô vào lớp hay chào 同学们好.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy có phải bạn cùng lớp của bạn không?",
        "answer": "她是你的同学吗？",
        "answerPy": "Tā shì nǐ de tóngxué ma?",
        "note": "同学 là bạn học cùng lớp, khác 朋友.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "朋友",
    "py": "péngyou",
    "pos": "Danh từ",
    "vn": "bạn bè",
    "hv": "bằng hữu",
    "em": "🧑‍🤝‍🧑",
    "lesson": 2,
    "ex_zh": "她不是我同学，她是我朋友。",
    "ex_py": "Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.",
    "ex_vn": "Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi.",
    "exList": [
      {
        "zh": "她不是我同学，她是我朋友。",
        "py": "Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.",
        "vn": "Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi."
      },
      {
        "zh": "他是我的中国朋友。",
        "py": "Tā shì wǒ de Zhōngguó péngyou.",
        "vn": "Anh ấy là người bạn Trung Quốc của tôi."
      }
    ],
    "hanzi": [
      {
        "c": "朋",
        "p": "péng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月(nguyệt) trái → 月(nguyệt) phải",
        "rad": "月 (nguyệt – mặt trăng)",
        "mean": "bạn bè",
        "tip": "Hai chữ 月 (hình hai miếng ngọc quý xưa dùng làm tiền) đặt cạnh nhau → những người NGANG HÀNG, thân thiết = BẠN.",
        "cf": "明 (míng – \"sáng\", gồm 日+月\")",
        "w": "朋友"
      },
      {
        "c": "友",
        "p": "yǒu",
        "type": "半包围结构 · Bán bao vây",
        "st": 4,
        "ord": "ナ(biến thể) → 又(hựu) dưới",
        "rad": "又 (hựu – bàn tay)",
        "mean": "bạn",
        "tip": "Hai bàn tay 又 nắm lấy nhau → tình BẠN gắn kết.",
        "cf": "反 (fǎn – \"trái lại\")",
        "w": "朋友 / 女朋友"
      }
    ],
    "colloFull": [
      {
        "zh": "我的朋友",
        "py": "wǒ de péngyou",
        "vn": "bạn của tôi"
      },
      {
        "zh": "中国朋友",
        "py": "Zhōngguó péngyou",
        "vn": "bạn người Trung Quốc"
      },
      {
        "zh": "好朋友",
        "py": "hǎo péngyou",
        "vn": "bạn thân"
      },
      {
        "zh": "是朋友",
        "py": "shì péngyou",
        "vn": "là bạn bè"
      }
    ],
    "patterns": [
      {
        "s": "好 + 朋友",
        "m": "Bạn thân — 好 ở đây nghĩa là thân thiết"
      },
      {
        "s": "朋友 (bạn nói chung) ≠ 同学 (bạn cùng lớp)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là bạn thân của tôi.",
        "answer": "他是我的好朋友。",
        "answerPy": "Tā shì wǒ de hǎo péngyou.",
        "note": "好朋友 — bạn thân.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn người Trung Quốc của bạn tên là gì?",
        "answer": "你的中国朋友叫什么名字？",
        "answerPy": "Nǐ de Zhōngguó péngyou jiào shénme míngzi?",
        "note": "中国朋友 — bạn người Trung Quốc.",
        "pair": "叫什么名字？"
      }
    ]
  }
];

const wuData = [
  {img:'👩',label:'她',py:'tā',letter:'A'},
  {img:'👨',label:'他',py:'tā',letter:'B'},
  {img:'🈶',label:'汉语',py:'Hànyǔ',letter:'C'},
  {img:'👬',label:'同学',py:'tóngxué',letter:'D'},
  {img:'🧑‍🤝‍🧑',label:'朋友',py:'péngyou',letter:'E'},
  {img:'❓',label:'谁',py:'shéi',letter:'F'},
];

var dialogData = [
  {scene:'Trong lớp học · Hỏi về người khác',
   lines:[
     {sp:0,zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
     {sp:1,zh:'她是我的汉语老师，她叫李月。',py:'Tā shì wǒ de Hànyǔ lǎoshī, tā jiào Lǐ Yuè.',vn:'Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.'},
   ]},
  {scene:'Ở thư viện · Hỏi quốc tịch (mở)',
   lines:[
     {sp:0,zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Anh là người nước nào vậy?'},
     {sp:1,zh:'我是美国人。你呢？',py:'Wǒ shì Měiguó rén. Nǐ ne?',vn:'Tôi là người Mỹ, còn cô?'},
     {sp:0,zh:'我是中国人。',py:'Wǒ shì Zhōngguó rén.',vn:'Tôi là người Trung Quốc.'},
   ]},
  {scene:'Xem ảnh · Giới thiệu bạn bè',
   lines:[
     {sp:0,zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai thế?'},
     {sp:1,zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
     {sp:0,zh:'她呢？她是你同学吗？',py:'Tā ne? Tā shì nǐ tóngxué ma?',vn:'Còn cô ấy? Cô ấy cũng là bạn cùng lớp của cô à?'},
     {sp:1,zh:'她不是我同学，她是我朋友。',py:'Tā bú shì wǒ tóngxué, tā shì wǒ péngyou.',vn:'Không phải, cô ấy là bạn tôi.'},
   ]},
];

// Điền từ — ngữ cảnh khác bài khoá
var fillData = [
  {pre:'Bạn chỉ vào một người trong ảnh và hỏi: “他是',blank:'谁',post:'？”',hint:'(ai)',ans:'谁',exp:'谁 dùng để hỏi người: 他是谁？'},
  {pre:'Bạn giới thiệu cô ấy là giáo viên dạy tiếng Trung của mình: “她是我',blank:'的',post:'汉语老师。”',hint:'(trợ từ sở hữu)',ans:'的',exp:'的 nối người sở hữu với người/vật được sở hữu: 我的汉语老师.'},
  {pre:'Bạn hỏi bạn mới quen đến từ nước nào: “你是',blank:'哪',post:'国人？”',hint:'(nào)',ans:'哪',exp:'哪国人 hỏi quốc tịch: người nước nào.'},
  {pre:'Sau khi trả lời, bạn hỏi ngược lại đối phương: “我是中国人，你',blank:'呢',post:'？”',hint:'(còn... thì sao?)',ans:'呢',exp:'呢 đặt sau 你 để hỏi lại: "Còn bạn thì sao?"'},
  {pre:'Bạn giới thiệu một người không cùng lớp: “她不是我同学，她是我',blank:'朋友',post:'。”',hint:'(bạn bè)',ans:'朋友',exp:'Không phải bạn cùng lớp mà là bạn bè: 朋友.'},
  {pre:'Bạn khẳng định ai đó là bạn cùng lớp: “他是我',blank:'同学',post:'。”',hint:'(bạn cùng lớp)',ans:'同学',exp:'同学 = bạn học cùng lớp/cùng trường.'},
  {pre:'Bạn nói rõ cô ấy dạy môn gì cho mình: “她是我的',blank:'汉语',post:'老师。”',hint:'(tiếng Trung Quốc)',ans:'汉语',exp:'汉语老师 = giáo viên dạy tiếng Trung.'},
  {pre:'Chỉ vào một người nam và hỏi: “',blank:'他',post:'是谁？”',hint:'(anh ấy)',ans:'他',exp:'他 chỉ người nam ở ngôi thứ ba (anh ấy).'},
];

// Sắp xếp — kèm 1 câu ôn tập kết hợp Bài 3
var sortData = [
  {words:['她','是','我','的','汉语','老师','。'],ans:'她是我的汉语老师。',audio:'她是我的汉语老师。'},
  {words:['你','是','哪','国','人','？'],ans:'你是哪国人？',audio:'你是哪国人？'},
  {words:['我','是','中国','人','，','你','呢','？'],ans:'我是中国人，你呢？',audio:'我是中国人，你呢？'},
  {words:['他','是','我','同学','。'],ans:'他是我同学。',audio:'他是我同学。'},
  {words:['她','不','是','我','同学','，','她','是','我','朋友','。'],ans:'她不是我同学，她是我朋友。',audio:'她不是我同学，她是我朋友。'},
  {words:['我','叫','王芳','，','我','是','中国','人','。'],ans:'我叫王芳，我是中国人。',audio:'我叫王芳，我是中国人。'},
];

var matchData = [
  {left:'她是谁？',right:'她是我的汉语老师。'},
  {left:'你是哪国人？',right:'我是美国人。'},
  {left:'他是谁？',right:'他是我同学。'},
  {left:'她是你同学吗？',right:'她不是我同学，她是我朋友。'},
  {left:'我是中国人，你呢？',right:'我是美国人。'},
];

// Trắc nghiệm — trọng tâm 谁/哪/的/呢, không audio
var mcData = [
  {q:'他是＿＿？(hỏi về người)',opts:['谁','什么','哪','怎么样'],ans:0,exp:'谁 (shéi) dùng để hỏi người: 他是谁？ — Anh ấy là ai?'},
  {q:'你是＿＿国人？',opts:['哪','什么','谁','这'],ans:0,exp:'哪 + 国 + 人 hỏi quốc tịch: 你是哪国人？ — Bạn là người nước nào?'},
  {q:'Trợ từ nào biểu thị quan hệ SỞ HỮU?',opts:['的','了','吗','呢'],ans:0,exp:'的 biểu thị sở hữu: 我的老师 = thầy giáo của tôi. 了, 吗, 呢 không có chức năng này.'},
  {q:'我是中国人，你＿＿？',opts:['呢','吗','吧','啊'],ans:0,exp:'呢 đặt sau đại từ/danh từ để hỏi ngược lại: 你呢？ — Còn bạn thì sao?'},
  {q:'Có thể bỏ "的" (như 我朋友 thay cho 我的朋友) khi danh từ phía sau là:',opts:['người thân, bạn bè thân thiết','đồ vật bất kỳ','tên riêng','số đếm'],ans:0,exp:'Trước danh từ chỉ người thân, bạn bè thân thiết có thể bỏ 的: 我朋友, 我妈妈.'},
  {q:'"汉语" nghĩa là gì?',opts:['tiếng Trung Quốc','người Trung Quốc','nước Trung Quốc','chữ Hán'],ans:0,exp:'汉语 (Hànyǔ) là tiếng Trung (tiếng Hán); 中国人 là người Trung Quốc, 汉字 là chữ Hán.'},
  {q:'"同学" nghĩa là gì?',opts:['bạn cùng lớp','bạn bè nói chung','thầy cô giáo','người nước ngoài'],ans:0,exp:'同学 là bạn cùng lớp/cùng trường; 朋友 mới là bạn bè nói chung.'},
  {q:'Từ nào dùng để chỉ NGƯỜI NỮ đang được nhắc đến (cô ấy)?',opts:['她','他','你','我'],ans:0,exp:'她 có bộ 女 (nữ), chỉ người nữ; 他 chỉ người nam.'},
  {q:'她不是我同学，她是我＿＿。',opts:['朋友','同学','老师','学生'],ans:0,exp:'Vế trước phủ định "không phải bạn cùng lớp", nên vế sau là 朋友 (bạn bè).'},
  {q:'Câu nào SAI ngữ pháp?',opts:['她我是朋友','她是我朋友','她是我的朋友','我是她朋友'],ans:0,exp:'她我是朋友 sai trật tự từ; đúng phải là 她是我(的)朋友 hoặc 我是她朋友.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai vậy?'},
      {zh:'她是我的汉语老师。',py:'Tā shì wǒ de Hànyǔ lǎoshī.',vn:'Cô ấy là cô giáo dạy tôi tiếng Trung Quốc.'},
      {zh:'你是哪国人？',py:'Nǐ shì nǎ guó rén?',vn:'Anh là người nước nào vậy?'},
      {zh:'我是美国人。你呢？',py:'Wǒ shì Měiguó rén. Nǐ ne?',vn:'Tôi là người Mỹ, còn bạn?'},
      {zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Đó là bạn cùng lớp của tôi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'他是我＿＿。',frame_py:'Tā shì wǒ ___.',vn:'Đó là ＿＿ của tôi.',options:['同学','朋友'],samples:['他是我同学。','他是我朋友。']},
      {frame:'我是＿＿人。',frame_py:'Wǒ shì ___ rén.',vn:'Tôi là người ＿＿.',options:['中国','美国'],samples:['我是中国人。','我是美国人。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'📸 Tình huống 1 — Giới thiệu người trong ảnh',
       guide:'Bạn cho bạn bè xem một tấm ảnh có cô giáo dạy tiếng Trung của mình. Hãy giới thiệu cô ấy.',
       structure:['她是谁？','她是我的汉语老师。'],
       sample:'她是谁？她是我的汉语老师，她叫李月。',
       sample_vn:'Cô ấy là ai vậy? Đó là cô giáo dạy tôi tiếng Trung Quốc, cô tên là Lý Nguyệt.',
       note:'Khi giới thiệu mối quan hệ với người quen (giáo viên, bạn bè), vẫn nên giữ 的 để làm rõ nghĩa "của tôi"; càng thân thiết (bạn bè, đồng nghiệp) thì càng dễ lược bỏ 的 hơn.'},
      {role:'🌏 Tình huống 2 — Hỏi quốc tịch và hỏi ngược lại',
       guide:'Bạn gặp một người nước ngoài, hỏi quốc tịch của họ, rồi họ hỏi lại bạn.',
       structure:['你是哪国人？','我是＿＿人。你呢？'],
       sample:'你是哪国人？我是美国人。你呢？我是中国人。',
       sample_vn:'Bạn là người nước nào? Tôi là người Mỹ. Còn bạn? Tôi là người Trung Quốc.',
       note:'呢 là cách hỏi ngược lại NGẮN GỌN nhất — thay vì lặp lại cả câu hỏi đầy đủ, chỉ cần thêm 呢 sau đối tượng để hỏi lại thông tin tương tự.'},
      {role:'👬 Tình huống 3 — Phân biệt bạn cùng lớp và bạn thân',
       guide:'Bạn giới thiệu hai người trong ảnh — một người học cùng lớp, một người chỉ là bạn thân không học cùng lớp.',
       structure:['他是我同学。','她不是我同学，她是我＿＿。'],
       sample:'他是我同学。她不是我同学，她是我朋友。',
       sample_vn:'Đó là bạn cùng lớp của tôi. Cô ấy không phải bạn cùng lớp, cô ấy là bạn tôi.',
       note:'同学 chỉ dùng cho người học CÙNG LỚP/CÙNG TRƯỜNG — nếu chỉ là bạn bè thân thiết nói chung (không cùng học) thì phải dùng 朋友, không dùng 同学.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 4 + ôn lại từ bài 1-3
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô ấy là ai?', zh:'她是谁？', py:'Tā shì shéi?'},
  {vi:'Cô ấy là bạn của tôi.', zh:'她是我的朋友。', py:'Tā shì wǒ de péngyou.'},
  {vi:'Anh ấy là bạn cùng lớp của tôi.', zh:'他是我的同学。', py:'Tā shì wǒ de tóngxué.'},
  {vi:'Tôi là học sinh, còn bạn thì sao?', zh:'我是学生，你呢？', py:'Wǒ shì xuésheng, nǐ ne?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Anh ấy là ai? Anh ấy là bạn cùng lớp của tôi.', zh:'他是谁？他是我的同学。', py:'Tā shì shéi? Tā shì wǒ de tóngxué.'},
  {vi:'Cô ấy là bạn tôi, cô ấy là người Trung Quốc.', zh:'她是我朋友，她是中国人。', py:'Tā shì wǒ péngyou, tā shì Zhōngguó rén.'},
  {vi:'Giáo viên tiếng Trung của bạn là ai?', zh:'你的汉语老师是谁？', py:'Nǐ de Hànyǔ lǎoshī shì shéi?'},
  {vi:'Tôi là giáo viên, còn bạn thì sao?', zh:'我是老师，你呢？', py:'Wǒ shì lǎoshī, nǐ ne?'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'他是谁？他是我的汉语老师，他是中国人。',
   questions:[
     {q:'Người được nhắc đến là ai?',opts:['Bạn cùng lớp','Giáo viên tiếng Trung','Bạn bè'],ans:1},
     {q:'Người đó là người nước nào?',opts:['Mỹ','Trung Quốc','Không nói'],ans:1},
   ]},
  {audio:'你是哪国人？我是美国人。你呢？我是中国人。',
   questions:[
     {q:'Người hỏi đầu tiên là người nước nào?',opts:['Trung Quốc','Mỹ','Không nói'],ans:0},
   ]},
  {audio:'她是你同学吗？她不是我同学，她是我朋友。',
   questions:[
     {q:'Cô ấy là ai của người trả lời?',opts:['Bạn cùng lớp','Bạn bè','Giáo viên'],ans:1},
   ]},
  {audio:'李月是我的同学，她是中国人。她的朋友是美国人。',
   questions:[
     {q:'Lý Nguyệt là ai của người nói?',opts:['Bạn cùng lớp','Giáo viên','Bạn bè'],ans:0},
     {q:'Bạn của Lý Nguyệt là người nước nào?',opts:['Trung Quốc','Mỹ','Không nói'],ans:1},
   ]},
  {audio:'你的老师叫什么名字？她叫李月。她是哪国人？她是中国人。',
   questions:[
     {q:'Giáo viên tên là gì?',opts:['Lý Nguyệt','Vương Phương','Không nói tên'],ans:0},
     {q:'Giáo viên là người nước nào?',opts:['Mỹ','Việt Nam','Trung Quốc'],ans:2},
   ]},
];

// Sach bai tap bai 4 (Doc + Chu Han, khong pinyin)
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài viết chữ theo thứ tự nét (Chữ Hán – Phần 2) không chấm được trên máy, hãy luyện viết vào vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-4-wb/q13.jpg', prompt: '对不起', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '对不起: xin lỗi. Tranh cô gái kéo vali, vẫy tay chào (再见 / 你好), không phải đang xin lỗi → Sai.' },
        { n: 14, img: '/images/hsk1-bai-4-wb/q14.jpg', prompt: '她', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '她: cô ấy (chỉ nữ). Tranh là một người phụ nữ → Đúng.' },
        { n: 15, img: '/images/hsk1-bai-4-wb/q15.jpg', prompt: '美国', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '美国: nước Mỹ. Tranh là lá cờ ba sọc dọc (cờ Pháp), không phải cờ Mỹ (sọc ngang và ngôi sao) → Sai.' },
        { n: 16, img: '/images/hsk1-bai-4-wb/q16.jpg', prompt: '同学', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '同学: bạn học. Tranh là một gia đình nhiều thế hệ (ông bà, bố mẹ, con cái) → Sai.' },
        { n: 17, img: '/images/hsk1-bai-4-wb/q17.jpg', prompt: '他们', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '他们: họ (có nam). Tranh chỉ có ba cô gái → phải dùng 她们 (các cô ấy) → Sai.' },
        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
          { key: 'A', text: '是，他是我的美国朋友。' },
          { key: 'B', text: '她是李月，她是我的中国朋友。' },
          { key: 'C', text: '他是我同学，他叫大卫。' },
          { key: 'D', text: '不是，她是我的汉语老师。' },
          { key: 'E', text: '我是美国人。' },
          { key: 'F', text: '好的，谢谢！' }
        ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你是哪国人？', answer: 'E', vn: 'Bạn là người nước nào? — E: Tôi là người Mỹ. (哪国人 → trả lời tên nước + 人)' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '他是谁？', answer: 'C', vn: 'Anh ấy là ai? — C: Anh ấy là bạn học của tôi, anh ấy tên là David.' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '她是你同学吗？', answer: 'D', vn: 'Cô ấy là bạn học của bạn phải không? — D: Không phải, cô ấy là cô giáo dạy tiếng Trung của tôi.' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '谁是李月？', answer: 'B', vn: 'Ai là Lý Nguyệt? — B: Cô ấy là Lý Nguyệt, cô ấy là bạn người Trung Quốc của tôi.' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '他是你的朋友吗？', answer: 'A', vn: 'Anh ấy là bạn của bạn phải không? — A: Đúng, anh ấy là bạn người Mỹ của tôi. (Câu hỏi 吗 → trả lời 是)' },
        { n: 23, part: 'Phần 3 · Chọn từ điền vào chỗ trống', bank: [
          { key: 'A', text: '哪' },
          { key: 'B', text: '叫' },
          { key: 'C', text: '的' },
          { key: 'D', text: '名字' },
          { key: 'E', text: '呢' }
        ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你妈妈（　）什么？', answer: 'B', vn: 'Mẹ bạn tên là gì? — 叫什么: tên là gì (như 你叫什么名字？ ở bài 3).' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '您是（　）国人？', answer: 'A', vn: 'Ông/bà là người nước nào? — 哪国人: người nước nào.' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '他不是我同学，他是我（　）中国朋友。', answer: 'C', vn: 'Anh ấy không phải bạn học của tôi, anh ấy là bạn người Trung Quốc của tôi. — 我的…朋友: 的 chỉ sở hữu.' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我是美国人。你（　）？', answer: 'E', vn: 'Tôi là người Mỹ. Còn bạn? — 你呢: hỏi lại “còn bạn thì sao?”.' },
        { n: 27, bank: [
          { key: 'F', text: '是' },
          { key: 'G', text: '不' },
          { key: 'H', text: '吗' },
          { key: 'I', text: '谁' }
        ], letters: ['F', 'G', 'H', 'I'], prompt: '他是（　）？', answer: 'I', vn: 'Anh ấy là ai? — 谁: ai (đứng ở vị trí người cần hỏi).' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '我（　）是中国人，我是美国人。', answer: 'G', vn: 'Tôi không phải người Trung Quốc, tôi là người Mỹ. — 不是: không phải.' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '他是你的汉语老师（　）？', answer: 'H', vn: 'Anh ấy là thầy giáo dạy tiếng Trung của bạn phải không? — Câu hỏi có/không → thêm 吗 cuối câu.' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '他不是我同学，他（　）我的好朋友。', answer: 'F', vn: 'Anh ấy không phải bạn học của tôi, anh ấy là bạn thân của tôi. — A 是 B: A là B.' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Phần 1 · Chữ nào có nét cho sẵn?', prompt: 'Chữ nào dưới đây có nét sổ cong móc 竖弯钩 (㇟)?', options: [{ key: 'A', text: '九' }, { key: 'B', text: '七' }, { key: 'C', text: '几' }, { key: 'D', text: '人' }], answer: 'B', vn: '七: nét thứ hai là nét sổ cong móc (㇟), đi xuống rồi cong sang phải và móc lên. 九, 几 có nét ngang gập cong móc (㇈), khác nét này; 人 không có móc.' },
        { n: '1b', prompt: 'Chữ nào dưới đây có nét sổ cong móc 竖弯钩 (㇟)?', options: [{ key: 'A', text: '儿' }, { key: 'B', text: '几' }, { key: 'C', text: '九' }, { key: 'D', text: '人' }], answer: 'A', vn: '儿: nét thứ hai là nét sổ cong móc (㇟). 几, 九 có nét ngang gập cong móc (㇈) – bắt đầu bằng nét ngang; 人 không có móc.' },
        { n: '2a', prompt: 'Chữ nào dưới đây có nét ngang gập cong móc 横折弯钩 (㇈)?', options: [{ key: 'A', text: '七' }, { key: 'B', text: '儿' }, { key: 'C', text: '人' }, { key: 'D', text: '九' }], answer: 'D', vn: '九: nét thứ hai là nét ngang gập cong móc (㇈): ngang → gập xuống → cong → móc lên. 七, 儿 chỉ có nét sổ cong móc (㇟); 人 không có móc.' },
        { n: '2b', prompt: 'Chữ nào dưới đây có nét ngang gập cong móc 横折弯钩 (㇈)?', options: [{ key: 'A', text: '儿' }, { key: 'B', text: '七' }, { key: 'C', text: '几' }, { key: 'D', text: '中' }], answer: 'C', vn: '几: nét thứ hai là nét ngang gập cong móc (㇈) – có nét ngang ở trên. 儿 giống 几 nhưng không có nét ngang (nét sổ cong móc ㇟); 七 cũng là ㇟; 中 không có móc.' }
      ]
    }
  ]}
] };
