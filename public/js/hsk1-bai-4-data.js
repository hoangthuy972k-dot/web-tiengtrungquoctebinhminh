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

// Điền từ — mỗi câu một tình huống: 谁, 的, 呢, 他/她, 同学/朋友/汉语; ôn 什么/是/吗/您 bài 1–3
var fillData = [
  {pre:'Một chàng trai lạ đứng nói chuyện với cô giáo. Bạn hỏi nhỏ bạn bên cạnh: “',blank:'他',post:'是谁？”',hint:'(anh ấy)',ans:'他',exp:'Chỉ người nam dùng 他; người nữ dùng 她 — hai chữ đọc giống nhau.'},
  {pre:'Bạn giới thiệu thầy Lý với bố: “李老师是我',blank:'的',post:'汉语老师。”',hint:'(của)',ans:'的',exp:'Sở hữu: 我的 + danh từ (của tôi đứng TRƯỚC, ngược với tiếng Việt).'},
  {pre:'Ở bữa tiệc, bạn nói: “我是李月的朋友。” rồi quay sang hỏi lại người mới quen: “你',blank:'呢',post:'？”',hint:'(còn … thì sao?)',ans:'呢',exp:'Hỏi lại cùng một ý mà không lặp cả câu: 你呢？ = còn bạn?'},
  {pre:'A: “他是你同学吗？” — B: “不是，他是我',blank:'朋友',post:'。”',hint:'(bạn bè — không học cùng lớp)',ans:'朋友',exp:'朋友 = bạn bè nói chung; 同学 chỉ người học cùng lớp, cùng trường.'},
  {pre:'Học sinh mới hỏi bạn: “谁是你们的',blank:'汉语',post:'老师？”',hint:'(tiếng Trung)',ans:'汉语',exp:'汉语老师 = giáo viên tiếng Trung; 汉语 đứng trước 老师.'},
  {pre:'A: “你朋友叫',blank:'什么',post:'？” — B: “李月。”',hint:'(gì)',ans:'什么',exp:'Hỏi tên dùng 什么; hỏi người là ai mới dùng 谁.'},
  {pre:'Bạn muốn biết thầy Lý người nước nào. A: “李老师是',blank:'哪国',post:'人？” — B: “中国人。”',hint:'(nước nào)',ans:'哪国',exp:'Hỏi quốc tịch: 哪国人 = người nước nào; dùng 哪, không dùng 什么.'},
  {pre:'Bạn muốn biết cô gái đứng cạnh thầy Lý là bạn của ai: “她是',blank:'谁',post:'的朋友？”',hint:'(ai)',ans:'谁',exp:'Hỏi người: 谁 đặt đúng chỗ thông tin cần hỏi; câu có 谁 không thêm 吗.'},
];

// Sắp xếp — ghép câu có 的 / 谁 / 吗
var sortData = [
  {words:['我','的','汉语','老师','是','美国','人','。'],ans:'我的汉语老师是美国人。',audio:'我的汉语老师是美国人。'},
  {words:['谁','是','李月','的','朋友','？'],ans:'谁是李月的朋友？',audio:'谁是李月的朋友？'},
  {words:['他','是','我','的','中国','朋友','。'],ans:'他是我的中国朋友。',audio:'他是我的中国朋友。'},
  {words:['你','是','她','的','同学','吗','？'],ans:'你是她的同学吗？',audio:'你是她的同学吗？'},
];

// Nối — câu hỏi ↔ câu trả lời
var matchData = [
  {left:'他是谁？',right:'他是我同学。'},
  {left:'她叫什么名字？',right:'她叫李月。'},
  {left:'我是学生，你呢？',right:'我是老师。'},
  {left:'谁是你们的汉语老师？',right:'李老师。'},
  {left:'谢谢你，朋友！',right:'不客气！'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp, tìm câu sai
var mcData = [
  {q:'Bạn muốn nói: “Cô ấy là bạn của tôi.”',opts:['她是我的朋友。','她是朋友的我。','她的我是朋友。','她是我朋友的。'],ans:0,exp:'Người sở hữu + 的 + vật / người: 我的朋友 (ngược với tiếng Việt “bạn của tôi”).'},
  {q:'A: “李月是谁？” — B (Lý Nguyệt học cùng lớp với B) đáp:',opts:['她是我同学。','他是我同学。','她是同学我。','她是谁同学。'],ans:0,exp:'李月 là nữ nên dùng 她; 我同学 = bạn cùng lớp của tôi (người thân quen có thể bỏ 的).'},
  {q:'Câu nào SAI?',opts:['她是谁吗？','谁是美国人？','你的朋友呢？','他不是我朋友。'],ans:0,exp:'Câu đã có 谁 là câu hỏi rồi, không thêm 吗.'},
  {q:'Một người đoán bạn là người Mỹ. Bạn nói không phải, rồi hỏi lại người đó (không lặp cả câu):',opts:['我不是美国人，你呢？','我不是美国人，你吗？','我不是美国人，呢你？','我不是美国人，你呢吗？'],ans:0,exp:'Hỏi lại ngắn: danh từ / đại từ + 呢; không dùng 吗 sau một mình 你, không dùng cả 呢 lẫn 吗.'},
  {q:'Bạn muốn hỏi: “Ai là giáo viên tiếng Trung?”',opts:['谁是汉语老师？','什么是汉语老师？','谁是汉语老师吗？','汉语老师是哪？'],ans:0,exp:'Hỏi người dùng 谁 (không dùng 什么, cũng không dùng 哪 = nào); có 谁 thì không thêm 吗.'},
  {q:'Bạn thấy một cô gái đứng cạnh Lý Nguyệt, bạn hỏi Lý Nguyệt: “Cô ấy là bạn của cậu à?”',opts:['她是你的朋友吗？','她是你的朋友呢？','她是朋友的你吗？','他是你的朋友吗？'],ans:0,exp:'Câu hỏi Có / Không dùng 吗 (không dùng 呢); 你的朋友 đúng trật tự; cô gái thì dùng 她.'},
  {q:'Thầy giáo mới vào lớp, bạn muốn hỏi thầy là người nước nào:',opts:['老师，您是哪国人？','老师，您是哪国人吗？','老师，哪国人是您？','老师，您是人哪国？'],ans:0,exp:'Hỏi quốc tịch: 是 + 哪国人; câu có 哪 không thêm 吗; không đặt 人 lên trước như tiếng Việt “người nước nào”, chủ ngữ 您 đứng đầu câu.'},
  {q:'Bạn muốn nói: “Bạn của Lý Nguyệt là người Mỹ.”',opts:['李月的朋友是美国人。','朋友的李月是美国人。','李月朋友的是美国人。','李月的朋友是人美国。'],ans:0,exp:'李月的朋友 = bạn của Lý Nguyệt (người sở hữu đứng trước 的).'},
  {q:'A: “他是谁的同学？” — B đáp ngắn:',opts:['李月的。','是李月吗？','的李月。','李月呢？'],ans:0,exp:'谁的同学 = bạn cùng lớp của ai → đáp 李月的 (của Lý Nguyệt), 的 đứng sau tên.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. 他 và 她 đọc giống nhau (tā); 的 và 呢 đọc nhẹ, ngắn.',
    models:[
      {zh:'她是谁？',py:'Tā shì shéi?',vn:'Cô ấy là ai?'},
      {zh:'我是中国人，你呢？',py:'Wǒ shì Zhōngguó rén, nǐ ne?',vn:'Tôi là người Trung Quốc, còn bạn?'},
      {zh:'你好，同学！',py:'Nǐ hǎo, tóngxué!',vn:'Chào bạn (cùng lớp)!'},
      {zh:'谢谢你，朋友！',py:'Xièxie nǐ, péngyou!',vn:'Cảm ơn bạn nhé, bạn tôi!'},
    ],
  },
  t2:{
    intro:'Thay phần gạch chân bằng từ trong ô gợi ý để nói ai là người thế nào với bạn. Nhấn nút loa để nghe rồi nói to.',
    drills:[
      {frame:'你是＿＿的朋友吗？',frame_py:'Nǐ shì ___ de péngyou ma?',vn:'Bạn là bạn của ＿＿ phải không?',options:['李月','他','李老师'],samples:['你是李月的朋友吗？','你是他的朋友吗？','你是李老师的朋友吗？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp về chính bạn.',
    tasks:[
      {role:'📸 Tình huống 1 — Giới thiệu ảnh lớp',
       guide:'Bạn cho bạn mới xem ảnh lớp tiếng Trung. Bạn ấy chỉ vào một cô gái và hỏi cô ấy là ai. Hãy trả lời: cô ấy là bạn cùng lớp, tên là gì, là người nước nào.',
       structure:['她叫＿＿，','是我＿＿，','是＿＿人。'],
       sample:'她叫李月，是我同学，是中国人。',
       sample_vn:'Bạn ấy tên là Lý Nguyệt, là bạn cùng lớp của mình, là người Trung Quốc.',
       note:'Người Việt hay nói “同学我” theo kiểu “bạn cùng lớp (của) tôi”. Người sở hữu luôn đứng trước: 我同学 / 我的同学.'},
      {role:'🗣️ Tình huống 2 — Hỏi lại cho nhanh',
       guide:'Một bạn mới hỏi bạn có phải bạn cùng lớp của Lý Nguyệt không. Bạn không phải — hãy nói bạn là bạn (朋友) của Lý Nguyệt, rồi hỏi lại bạn ấy, không lặp cả câu.',
       structure:['不是，我是她＿＿。','你呢？'],
       sample:'不是，我是她朋友。你呢？',
       sample_vn:'Không, mình là bạn của bạn ấy. Còn bạn?',
       note:'呢 dùng để hỏi lại cùng ý vừa nói. Đừng thêm 吗 sau 呢 (你呢吗 là sai).'},
      {role:'🧑‍🏫 Tình huống 3 — Hỏi về thầy cô',
       guide:'Bạn mới chuyển đến trường. Hãy hỏi một bạn trong lớp xem ai là giáo viên tiếng Trung của lớp và thầy cô ấy có phải người Trung Quốc không.',
       structure:['＿＿是谁？','他 / 她是＿＿吗？'],
       sample:'你们的汉语老师是谁？他是中国人吗？',
       sample_vn:'Giáo viên tiếng Trung của các bạn là ai? Thầy ấy là người Trung Quốc phải không?',
       note:'Câu có 谁 không thêm 吗; câu hỏi Có / Không mới thêm 吗. 你们的汉语老师 = giáo viên tiếng Trung của các bạn.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 4 + ôn lại từ bài 1-3
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô ấy không phải bạn cùng lớp của tôi, cô ấy là bạn tôi.', zh:'她不是我同学，是我朋友。', py:'Tā bú shì wǒ tóngxué, shì wǒ péngyou.'},
  {vi:'Bạn cùng lớp của bạn tên là gì?', zh:'你同学叫什么名字？', py:'Nǐ tóngxué jiào shénme míngzi?'},
  {vi:'Tôi là bạn cùng lớp của anh ấy, còn bạn?', zh:'我是他的同学，你呢？', py:'Wǒ shì tā de tóngxué, nǐ ne?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Còn thầy Lý? Thầy ấy là giáo viên người Mỹ à?', zh:'李老师呢？他是美国老师吗？', py:'Lǐ lǎoshī ne? Tā shì Měiguó lǎoshī ma?'},
  {vi:'Cảm ơn thầy! Bạn cùng lớp của em tên là Lý Nguyệt.', zh:'谢谢您！我同学叫李月。', py:'Xièxie nín! Wǒ tóngxué jiào Lǐ Yuè.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我朋友是汉语老师，她是美国人。',
   questions:[
     {q:'Bạn của người nói làm nghề gì?',opts:['Học sinh','Giáo viên tiếng Trung','Giáo viên tiếng Anh'],ans:1,exp:'汉语老师 = giáo viên tiếng Trung.'},
     {q:'Người bạn đó là người nước nào?',opts:['Người Mỹ','Người Trung Quốc','Không nói'],ans:0,exp:'她是美国人 = cô ấy là người Mỹ.'},
   ]},
  {audio:'李月是你的同学吗？——不是，她是我朋友的同学。',
   questions:[
     {q:'Lý Nguyệt là ai đối với người trả lời?',opts:['Bạn cùng lớp của anh ấy','Bạn thân của anh ấy','Bạn cùng lớp của bạn anh ấy'],ans:2,exp:'我朋友的同学 = bạn cùng lớp của bạn tôi.'},
   ]},
  {audio:'你朋友是哪国人？——美国人。',
   questions:[
     {q:'Bạn của người trả lời là người nước nào?',opts:['Người Trung Quốc','Người Mỹ','Không nói'],ans:1,exp:'哪国人 = người nước nào; 美国人 = người Mỹ.'},
   ]},
  {audio:'谁是你朋友？——他。',
   questions:[
     {q:'Người trả lời giới thiệu ai?',opts:['Một cô gái','Một chàng trai','Cô giáo'],ans:1,exp:'他 = anh ấy (nam); 她 mới là cô ấy (nữ).'},
   ]},
  {audio:'她呢？她是中国学生吗？——不是，她是老师。',
   questions:[
     {q:'Cô gái được hỏi là ai?',opts:['Học sinh người Trung Quốc','Bạn cùng lớp','Giáo viên'],ans:2,exp:'不是 = không phải học sinh Trung Quốc; 她是老师 = cô ấy là giáo viên.'},
   ]},
  {audio:'您好！您是李月的汉语老师吗？',
   questions:[
     {q:'Người nói đang hỏi gì?',opts:['Người kia có phải thầy dạy tiếng Trung của Lý Nguyệt không','Người kia tên là gì','Người kia là người nước nào'],ans:0,exp:'李月的汉语老师 = giáo viên tiếng Trung của Lý Nguyệt; 吗 = có phải không.'},
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
