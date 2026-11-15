// ══════════════════════════════════════════
// DATA — HSK1 Bài 5: 她女儿今年二十岁。
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "家",
    "py": "jiā",
    "pos": "Danh từ",
    "vn": "nhà, gia đình",
    "hv": "gia",
    "em": "🏠",
    "lesson": 1,
    "ex_zh": "你家有几口人？",
    "ex_py": "Nǐ jiā yǒu jǐ kǒu rén?",
    "ex_vn": "Nhà anh có mấy người vậy?",
    "exList": [
      {
        "zh": "你家有几口人？",
        "py": "Nǐ jiā yǒu jǐ kǒu rén?",
        "vn": "Nhà anh có mấy người vậy?"
      },
      {
        "zh": "我家有三口人。",
        "py": "Wǒ jiā yǒu sān kǒu rén.",
        "vn": "Nhà tôi có ba người."
      }
    ],
    "hanzi": [
      {
        "c": "家",
        "p": "jiā",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "宀(miên) trên → 豕(thỉ) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "nhà, gia đình",
        "tip": "宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ.",
        "cf": "豪 (háo – \"hào hiệp\")",
        "w": "我家 / 家人"
      }
    ],
    "colloFull": [
      {
        "zh": "我家",
        "py": "wǒ jiā",
        "vn": "nhà tôi"
      },
      {
        "zh": "他家",
        "py": "tā jiā",
        "vn": "nhà anh ấy"
      },
      {
        "zh": "老师家",
        "py": "lǎoshī jiā",
        "vn": "nhà thầy"
      },
      {
        "zh": "她家",
        "py": "tā jiā",
        "vn": "nhà cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "người + 家",
        "m": "Nhà của ai — nói 我家, ít khi nói 我的家"
      },
      {
        "s": "家 vừa là ngôi nhà, vừa là gia đình"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có năm người.",
        "answer": "我家有五口人。",
        "answerPy": "Wǒ jiā yǒu wǔ kǒu rén.",
        "note": "Nói 我家, người Trung Quốc ít khi nói 我的家.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà bạn có mấy người?",
        "answer": "你家有几口人？",
        "answerPy": "Nǐ jiā yǒu jǐ kǒu rén?",
        "note": "Khung hỏi số người trong nhà, học thuộc cả câu.",
        "pair": "有几……？"
      }
    ]
  },
  {
    "n": 2,
    "zh": "有",
    "py": "yǒu",
    "pos": "Động từ",
    "vn": "có",
    "hv": "hữu",
    "em": "✅",
    "lesson": 1,
    "ex_zh": "我家有三口人。",
    "ex_py": "Wǒ jiā yǒu sān kǒu rén.",
    "ex_vn": "Nhà tôi có ba người.",
    "exList": [
      {
        "zh": "我家有三口人。",
        "py": "Wǒ jiā yǒu sān kǒu rén.",
        "vn": "Nhà tôi có ba người."
      },
      {
        "zh": "你有中国朋友吗？",
        "py": "Nǐ yǒu Zhōngguó péngyou ma?",
        "vn": "Bạn có bạn người Trung Quốc không?"
      }
    ],
    "hanzi": [
      {
        "c": "有",
        "p": "yǒu",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "ナ(biến thể) → 月(nguyệt) trong",
        "rad": "月 (nguyệt – thịt/trăng)",
        "mean": "có",
        "tip": "Bàn tay (ナ) cầm miếng thịt (月) → sở hữu, CÓ trong tay.",
        "cf": "肯 (kěn – \"bằng lòng\")",
        "w": "我家有 / 有没有"
      }
    ],
    "colloFull": [
      {
        "zh": "有女儿",
        "py": "yǒu nǚ'ér",
        "vn": "có con gái"
      },
      {
        "zh": "有几口人",
        "py": "yǒu jǐ kǒu rén",
        "vn": "có mấy người"
      },
      {
        "zh": "有中国朋友",
        "py": "yǒu Zhōngguó péngyou",
        "vn": "có bạn người Trung Quốc"
      },
      {
        "zh": "有汉语老师",
        "py": "yǒu Hànyǔ lǎoshī",
        "vn": "có giáo viên tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 有 + danh từ",
        "m": "Câu chữ 有: 我家有五口人"
      },
      {
        "s": "有 chỉ sở hữu; phủ định dùng 没有, KHÔNG dùng 不有"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có bạn người Trung Quốc.",
        "answer": "我有中国朋友。",
        "answerPy": "Wǒ yǒu Zhōngguó péngyou.",
        "note": "Câu chữ 有 dùng để nói mình có cái gì.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy có con gái không ạ?",
        "answer": "老师有女儿吗？",
        "answerPy": "Lǎoshī yǒu nǚ'ér ma?",
        "note": "Phủ định của 有 là 没有, không nói 不有.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "口",
    "py": "kǒu",
    "pos": "Lượng từ",
    "vn": "lượng từ chỉ số thành viên gia đình",
    "hv": "khẩu",
    "em": "👄",
    "lesson": 1,
    "ex_zh": "我家有三口人。",
    "ex_py": "Wǒ jiā yǒu sān kǒu rén.",
    "ex_vn": "Nhà tôi có ba người.",
    "exList": [
      {
        "zh": "我家有三口人。",
        "py": "Wǒ jiā yǒu sān kǒu rén.",
        "vn": "Nhà tôi có ba người."
      },
      {
        "zh": "她家有四口人。",
        "py": "Tā jiā yǒu sì kǒu rén.",
        "vn": "Nhà cô ấy có bốn người."
      }
    ],
    "hanzi": [
      {
        "c": "口",
        "p": "kǒu",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "丨→𠃌→一",
        "rad": "口 (khẩu – tự thành bộ)",
        "mean": "miệng; lượng từ đếm người trong nhà",
        "tip": "Hình cái miệng cách điệu → MIỆNG; dùng làm lượng từ đếm số người ăn chung một nhà (khẩu phần).",
        "cf": "日 (rì – \"mặt trời\")",
        "w": "三口人"
      }
    ],
    "colloFull": [
      {
        "zh": "几口人",
        "py": "jǐ kǒu rén",
        "vn": "mấy người"
      },
      {
        "zh": "五口人",
        "py": "wǔ kǒu rén",
        "vn": "năm người"
      },
      {
        "zh": "三口人",
        "py": "sān kǒu rén",
        "vn": "ba người"
      }
    ],
    "patterns": [
      {
        "s": "số + 口 + 人",
        "m": "Lượng từ 口 chỉ dùng để đếm NGƯỜI TRONG NHÀ"
      },
      {
        "s": "口 chỉ đếm người trong gia đình, không dùng để đếm người ở lớp hay ở cơ quan"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà cô ấy có ba người.",
        "answer": "她家有三口人。",
        "answerPy": "Tā jiā yǒu sān kǒu rén.",
        "note": "口 chỉ dùng để đếm người trong một gia đình.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà thầy có mấy người ạ?",
        "answer": "老师家有几口人？",
        "answerPy": "Lǎoshī jiā yǒu jǐ kǒu rén?",
        "note": "Hỏi lễ phép thì gọi 老师 trước rồi mới hỏi.",
        "pair": "有几……？"
      }
    ]
  },
  {
    "n": 4,
    "zh": "女儿",
    "py": "nǚ'ér",
    "pos": "Danh từ",
    "vn": "con gái",
    "hv": "nữ nhi",
    "em": "👧",
    "lesson": 1,
    "ex_zh": "你女儿几岁了？",
    "ex_py": "Nǐ nǚ'ér jǐ suì le?",
    "ex_vn": "Con gái của cô mấy tuổi rồi?",
    "exList": [
      {
        "zh": "你女儿几岁了？",
        "py": "Nǐ nǚ'ér jǐ suì le?",
        "vn": "Con gái của cô mấy tuổi rồi?"
      },
      {
        "zh": "我女儿今年三岁了。",
        "py": "Wǒ nǚ'ér jīnnián sān suì le.",
        "vn": "Con gái tôi năm nay ba tuổi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "㇃→一→一",
        "rad": "女 (nữ – tự thành bộ)",
        "mean": "con gái, nữ giới",
        "tip": "Hình người phụ nữ quỳ khoanh tay → biểu tượng NỮ GIỚI.",
        "cf": "安 (ān – \"an toàn\", có bộ 女\")",
        "w": "女儿 / 女朋友"
      },
      {
        "c": "儿",
        "p": "ér",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿→乚",
        "rad": "儿 (nhân, biến thể – tự thành bộ)",
        "mean": "con, trẻ con",
        "tip": "Hình đứa trẻ với đôi chân còn yếu → CON, TRẺ NHỎ.",
        "cf": "几 (jǐ – \"mấy\", dễ nhầm hình dạng\")",
        "w": "女儿 / 儿子"
      }
    ],
    "colloFull": [
      {
        "zh": "我的女儿",
        "py": "wǒ de nǚ'ér",
        "vn": "con gái tôi"
      },
      {
        "zh": "有女儿",
        "py": "yǒu nǚ'ér",
        "vn": "có con gái"
      },
      {
        "zh": "她的女儿",
        "py": "tā de nǚ'ér",
        "vn": "con gái của cô ấy"
      },
      {
        "zh": "老师的女儿",
        "py": "lǎoshī de nǚ'ér",
        "vn": "con gái của thầy"
      }
    ],
    "patterns": [
      {
        "s": "ai + 的 + 女儿",
        "m": "Con gái của ai"
      },
      {
        "s": "女 + 儿",
        "m": "Đứa con (儿) là nữ (女)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy có con gái.",
        "answer": "她有女儿。",
        "answerPy": "Tā yǒu nǚ'ér.",
        "note": "女儿 là con gái ruột trong nhà.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái của thầy năm nay mấy tuổi ạ?",
        "answer": "老师的女儿今年几岁？",
        "answerPy": "Lǎoshī de nǚ'ér jīnnián jǐ suì?",
        "note": "Hỏi tuổi trẻ nhỏ dùng 几岁.",
        "pair": "几岁？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "几",
    "py": "jǐ",
    "pos": "Đại từ",
    "vn": "mấy (hỏi số lượng dưới 10)",
    "hv": "kỉ",
    "em": "🔢",
    "lesson": 2,
    "ex_zh": "你女儿几岁了？",
    "ex_py": "Nǐ nǚ'ér jǐ suì le?",
    "ex_vn": "Con gái của cô mấy tuổi rồi?",
    "exList": [
      {
        "zh": "你女儿几岁了？",
        "py": "Nǐ nǚ'ér jǐ suì le?",
        "vn": "Con gái của cô mấy tuổi rồi?"
      },
      {
        "zh": "她女儿几岁了？",
        "py": "Tā nǚ'ér jǐ suì le?",
        "vn": "Con gái cô ấy mấy tuổi rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "几",
        "p": "jǐ",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "ノ→乚",
        "rad": "几 (kỷ – tự thành bộ)",
        "mean": "mấy (hỏi số lượng dưới 10)",
        "tip": "Hình cái ghế nhỏ/bàn thấp thời cổ, mượn âm làm từ hỏi số lượng ÍT, dưới 10.",
        "cf": "儿 (ér – \"con\", dễ nhầm hình dạng\")",
        "w": "几岁 / 几口人"
      }
    ],
    "colloFull": [
      {
        "zh": "几口人",
        "py": "jǐ kǒu rén",
        "vn": "mấy người"
      },
      {
        "zh": "几岁",
        "py": "jǐ suì",
        "vn": "mấy tuổi"
      },
      {
        "zh": "今年几岁",
        "py": "jīnnián jǐ suì",
        "vn": "năm nay mấy tuổi"
      }
    ],
    "patterns": [
      {
        "s": "几 + lượng từ + danh từ",
        "m": "Hỏi số lượng NHỎ, đoán dưới mười"
      },
      {
        "s": "几 (số nhỏ) ≠ 多少 (số bất kỳ, bài 8)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái bạn năm nay mấy tuổi?",
        "answer": "你的女儿今年几岁？",
        "answerPy": "Nǐ de nǚ'ér jīnnián jǐ suì?",
        "note": "几 đoán số nhỏ, thường dưới mười.",
        "pair": "几岁？"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà các bạn có mấy người?",
        "answer": "你们家有几口人？",
        "answerPy": "Nǐmen jiā yǒu jǐ kǒu rén?",
        "note": "几 luôn đi kèm lượng từ: 几口人, 几岁.",
        "pair": "有几……？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "岁",
    "py": "suì",
    "pos": "Lượng từ",
    "vn": "tuổi",
    "hv": "tuế",
    "em": "🎂",
    "lesson": 2,
    "ex_zh": "她今年四岁了。",
    "ex_py": "Tā jīnnián sì suì le.",
    "ex_vn": "Năm nay cháu được bốn tuổi rồi.",
    "exList": [
      {
        "zh": "她今年四岁了。",
        "py": "Tā jīnnián sì suì le.",
        "vn": "Năm nay cháu được bốn tuổi rồi."
      },
      {
        "zh": "她今年50岁了。",
        "py": "Tā jīnnián wǔshí suì le.",
        "vn": "Năm nay cô ấy 50 tuổi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "岁",
        "p": "suì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "山(biến thể) trên → 夕(tịch) dưới",
        "rad": "山 (sơn – núi, biến thể)",
        "mean": "tuổi",
        "tip": "Xưa dùng để đếm số mùa/năm đã trải qua như ngọn núi tích tuổi theo thời gian → TUỔI.",
        "cf": "出 (chū – \"ra\")",
        "w": "几岁 / 二十岁"
      }
    ],
    "colloFull": [
      {
        "zh": "几岁",
        "py": "jǐ suì",
        "vn": "mấy tuổi"
      },
      {
        "zh": "六岁",
        "py": "liù suì",
        "vn": "sáu tuổi"
      },
      {
        "zh": "五岁",
        "py": "wǔ suì",
        "vn": "năm tuổi"
      },
      {
        "zh": "十岁",
        "py": "shí suì",
        "vn": "mười tuổi"
      }
    ],
    "patterns": [
      {
        "s": "số + 岁",
        "m": "Bao nhiêu tuổi: 她六岁"
      },
      {
        "s": "Hỏi trẻ con dùng 几岁, hỏi người lớn dùng 多大"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô bé sáu tuổi rồi.",
        "answer": "她六岁了。",
        "answerPy": "Tā liù suì le.",
        "note": "了 ở cuối câu cho thấy tuổi vừa thay đổi.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ấy không phải mười tuổi.",
        "answer": "他不是十岁。",
        "answerPy": "Tā bú shì shí suì.",
        "note": "Muốn phủ định con số thì dùng 不是.",
        "pair": "不是……"
      }
    ]
  },
  {
    "n": 7,
    "zh": "了",
    "py": "le",
    "pos": "Trợ từ",
    "vn": "trợ từ biểu thị sự thay đổi hoặc tình huống mới",
    "hv": "liễu",
    "em": "🔄",
    "lesson": 2,
    "ex_zh": "她今年50岁了。",
    "ex_py": "Tā jīnnián wǔshí suì le.",
    "ex_vn": "Năm nay cô ấy 50 tuổi rồi.",
    "exList": [
      {
        "zh": "她今年50岁了。",
        "py": "Tā jīnnián wǔshí suì le.",
        "vn": "Năm nay cô ấy 50 tuổi rồi."
      },
      {
        "zh": "李老师的女儿今年20岁了。",
        "py": "Lǐ lǎoshī de nǚ'ér jīnnián èrshí suì le.",
        "vn": "Con gái cô Lý năm nay 20 tuổi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "了",
        "p": "le",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "𠃋→乚",
        "rad": "乙 (ất, biến thể)",
        "mean": "trợ từ biểu thị thay đổi/hoàn thành",
        "tip": "Hình dáng đơn giản như một cái móc, biểu thị việc vừa \"chốt xong\" — một sự thay đổi hoặc kết thúc.",
        "cf": "子 (zǐ – \"con\", nét cuối tương tự\")",
        "w": "50岁了 / 我吃了"
      }
    ],
    "colloFull": [
      {
        "zh": "十岁了",
        "py": "shí suì le",
        "vn": "mười tuổi rồi"
      },
      {
        "zh": "大了",
        "py": "dà le",
        "vn": "lớn rồi"
      },
      {
        "zh": "是学生了",
        "py": "shì xuésheng le",
        "vn": "đã là học sinh rồi"
      }
    ],
    "patterns": [
      {
        "s": "câu + 了",
        "m": "Chỉ sự thay đổi: 她六岁了 — cô bé đã sáu tuổi"
      },
      {
        "s": "了 đặt CUỐI câu, mang nghĩa trước chưa vậy nay đã vậy"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái tôi mười tuổi rồi.",
        "answer": "我的女儿十岁了。",
        "answerPy": "Wǒ de nǚ'ér shí suì le.",
        "note": "了 đứng cuối câu, nghĩa là trước chưa vậy nay đã vậy.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy đã là học sinh rồi.",
        "answer": "她是学生了。",
        "answerPy": "Tā shì xuésheng le.",
        "note": "Câu chữ 是 thêm 了 cũng mang nghĩa thay đổi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 8,
    "zh": "今年",
    "py": "jīnnián",
    "pos": "Danh từ",
    "vn": "năm nay",
    "hv": "kim niên",
    "em": "📅",
    "lesson": 2,
    "ex_zh": "她女儿今年20岁。",
    "ex_py": "Tā nǚ'ér jīnnián èrshí suì.",
    "ex_vn": "Con gái cô ấy năm nay 20 tuổi.",
    "exList": [
      {
        "zh": "她女儿今年20岁。",
        "py": "Tā nǚ'ér jīnnián èrshí suì.",
        "vn": "Con gái cô ấy năm nay 20 tuổi."
      },
      {
        "zh": "你今年多大了？",
        "py": "Nǐ jīnnián duō dà le?",
        "vn": "Năm nay bạn bao nhiêu tuổi rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "今",
        "p": "jīn",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "人(biến thể) trên → 一,乛 dưới",
        "rad": "人 (nhân, biến thể)",
        "mean": "nay, hiện tại",
        "tip": "Hình miệng đang ngậm lại, chỉ thời điểm HIỆN TẠI, ngay lúc này.",
        "cf": "令 (lìng – \"ra lệnh\")",
        "w": "今年 / 今天"
      },
      {
        "c": "年",
        "p": "nián",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "丿→丨→一→丨→一→一",
        "rad": "干 (can, biến thể)",
        "mean": "năm",
        "tip": "Hình người vác bó lúa sau vụ mùa → mỗi vụ mùa là một chu kỳ = NĂM.",
        "cf": "午 (wǔ – \"buổi trưa\")",
        "w": "今年 / 去年 / 明年"
      }
    ],
    "colloFull": [
      {
        "zh": "今年几岁",
        "py": "jīnnián jǐ suì",
        "vn": "năm nay mấy tuổi"
      },
      {
        "zh": "今年多大",
        "py": "jīnnián duō dà",
        "vn": "năm nay bao nhiêu tuổi"
      },
      {
        "zh": "今年十岁",
        "py": "jīnnián shí suì",
        "vn": "năm nay mười tuổi"
      }
    ],
    "patterns": [
      {
        "s": "今年 + Sub + …",
        "m": "Từ chỉ thời gian đứng ĐẦU câu hoặc sau chủ ngữ"
      },
      {
        "s": "今 + 年",
        "m": "Năm (年) này (今)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Năm nay bạn bao nhiêu tuổi?",
        "answer": "你今年多大？",
        "answerPy": "Nǐ jīnnián duō dà?",
        "note": "Từ chỉ thời gian 今年 đứng sau chủ ngữ.",
        "pair": "多大？"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm nay con gái cô ấy năm tuổi.",
        "answer": "她的女儿今年五岁。",
        "answerPy": "Tā de nǚ'ér jīnnián wǔ suì.",
        "note": "今年 cũng có thể đứng đầu câu: 今年她五岁.",
        "pair": "今年……"
      }
    ]
  },
  {
    "n": 9,
    "zh": "多",
    "py": "duō",
    "pos": "Phó từ",
    "vn": "bao nhiêu (chỉ mức độ)",
    "hv": "đa",
    "em": "❔",
    "lesson": 2,
    "ex_zh": "李老师多大了？",
    "ex_py": "Lǐ lǎoshī duō dà le?",
    "ex_vn": "Cô Lý bao nhiêu tuổi rồi?",
    "exList": [
      {
        "zh": "李老师多大了？",
        "py": "Lǐ lǎoshī duō dà le?",
        "vn": "Cô Lý bao nhiêu tuổi rồi?"
      },
      {
        "zh": "您今年多大了？",
        "py": "Nín jīnnián duō dà le?",
        "vn": "Năm nay bác bao nhiêu tuổi ạ?"
      }
    ],
    "hanzi": [
      {
        "c": "多",
        "p": "duō",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "夕(tịch) trên → 夕(tịch) dưới",
        "rad": "夕 (tịch – buổi tối)",
        "mean": "nhiều, bao nhiêu",
        "tip": "Hai chữ 夕(buổi tối) chồng lên nhau → NHIỀU đêm trôi qua = NHIỀU, BAO NHIÊU.",
        "cf": "夜 (yè – \"đêm\")",
        "w": "多大 / 多少"
      }
    ],
    "colloFull": [
      {
        "zh": "多大",
        "py": "duō dà",
        "vn": "bao nhiêu tuổi"
      },
      {
        "zh": "多大了",
        "py": "duō dà le",
        "vn": "bao nhiêu tuổi rồi"
      }
    ],
    "patterns": [
      {
        "s": "多 + tính từ",
        "m": "Hỏi mức độ: 多大 — lớn chừng nào"
      },
      {
        "s": "多大 hỏi tuổi người lớn; trẻ nhỏ thì hỏi 几岁"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thưa thầy, năm nay thầy bao nhiêu tuổi ạ?",
        "answer": "老师，您今年多大？",
        "answerPy": "Lǎoshī, nín jīnnián duō dà?",
        "note": "Hỏi người lớn thì dùng 多大, không dùng 几岁.",
        "pair": "多大？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn cùng lớp của bạn bao nhiêu tuổi rồi?",
        "answer": "你的同学多大了？",
        "answerPy": "Nǐ de tóngxué duō dà le?",
        "note": "多大了 nghe tự nhiên hơn 多大 trơ.",
        "pair": "多大了？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "大",
    "py": "dà",
    "pos": "Tính từ",
    "vn": "lớn, to",
    "hv": "đại",
    "em": "📏",
    "lesson": 2,
    "ex_zh": "李老师多大了？",
    "ex_py": "Lǐ lǎoshī duō dà le?",
    "ex_vn": "Cô Lý bao nhiêu tuổi rồi?",
    "exList": [
      {
        "zh": "李老师多大了？",
        "py": "Lǐ lǎoshī duō dà le?",
        "vn": "Cô Lý bao nhiêu tuổi rồi?"
      },
      {
        "zh": "你朋友多大了？",
        "py": "Nǐ péngyou duō dà le?",
        "vn": "Bạn của bạn bao nhiêu tuổi rồi?"
      }
    ],
    "hanzi": [
      {
        "c": "大",
        "p": "dà",
        "type": "独体字 · Tượng hình",
        "st": 3,
        "ord": "一→ノ→㇏",
        "rad": "大 (đại – tự thành bộ)",
        "mean": "to, lớn",
        "tip": "Hình người dang rộng tay chân → TO LỚN.",
        "cf": "太 (tài – \"quá\")",
        "w": "多大 / 大学"
      }
    ],
    "colloFull": [
      {
        "zh": "多大",
        "py": "duō dà",
        "vn": "bao nhiêu tuổi"
      },
      {
        "zh": "大了",
        "py": "dà le",
        "vn": "lớn rồi"
      },
      {
        "zh": "不大",
        "py": "bú dà",
        "vn": "không lớn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 多大？",
        "m": "Hỏi tuổi: 你今年多大？"
      },
      {
        "s": "大 vừa là lớn về kích thước, vừa là lớn về tuổi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy lớn rồi.",
        "answer": "她大了。",
        "answerPy": "Tā dà le.",
        "note": "大 ở đây nói về tuổi, không nói về kích thước.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái bạn không lớn lắm.",
        "answer": "你的女儿不大。",
        "answerPy": "Nǐ de nǚ'ér bú dà.",
        "note": "不 đặt trước tính từ để phủ định.",
        "pair": "不 + Adj"
      }
    ]
  }
];

const wuData = [
  {img:'🏠',label:'家',py:'jiā',letter:'A'},
  {img:'👄',label:'口',py:'kǒu',letter:'B'},
  {img:'👧',label:'女儿',py:"nǚ'ér",letter:'C'},
  {img:'🎂',label:'岁',py:'suì',letter:'D'},
  {img:'📅',label:'今年',py:'jīnnián',letter:'E'},
  {img:'📏',label:'大',py:'dà',letter:'F'},
];

var dialogData = [
  {scene:'Ở trường · Hỏi số người trong nhà',
   lines:[
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà anh có mấy người vậy?'},
     {sp:1,zh:'我家有三口人。',py:'Wǒ jiā yǒu sān kǒu rén.',vn:'Nhà tôi có ba người.'},
   ]},
  {scene:'Trong văn phòng · Hỏi tuổi con',
   lines:[
     {sp:0,zh:'你女儿几岁了？',py:"Nǐ nǚ'ér jǐ suì le?",vn:'Con gái của cô mấy tuổi rồi?'},
     {sp:1,zh:'她今年四岁了。',py:'Tā jīnnián sì suì le.',vn:'Năm nay cháu được bốn tuổi rồi.'},
   ]},
  {scene:'Trong văn phòng · Hỏi tuổi người lớn',
   lines:[
     {sp:0,zh:'李老师多大了？',py:'Lǐ lǎoshī duō dà le?',vn:'Cô Lý bao nhiêu tuổi rồi?'},
     {sp:1,zh:'她今年50岁了。',py:'Tā jīnnián wǔshí suì le.',vn:'Năm nay cô ấy 50 tuổi rồi.'},
     {sp:0,zh:'她女儿呢？',py:"Tā nǚ'ér ne?",vn:'Còn con gái cô ấy?'},
     {sp:1,zh:'她女儿今年20岁。',py:"Tā nǚ'ér jīnnián èrshí suì.",vn:'Con gái cô ấy năm nay 20 tuổi.'},
   ]},
];

// Điền từ — mỗi câu một tình huống: 几 / 多大 / 口 / 了 / số đếm; ôn 的, 呢, 谁, 是, 吗, 您 bài 1–4
var fillData = [
  {pre:'Đồng nghiệp mới khoe ảnh cô con gái nhỏ. Bạn hỏi: “你女儿',blank:'几',post:'岁了？”',hint:'(mấy — số nhỏ)',ans:'几',exp:'Hỏi tuổi trẻ nhỏ (dưới 10 tuổi): 几岁; cuối câu có 了.'},
  {pre:'Bạn kể về cô hàng xóm: cô sống với một cô con gái nhỏ. “她家有两',blank:'口',post:'人。”',hint:'(lượng từ đếm người trong nhà)',ans:'口',exp:'Đếm người trong gia đình: số + 口 + 人; hai người là 两口人, không nói 二口人.'},
  {pre:'Bạn hỏi bạn cùng lớp về cô giáo mới (trông còn rất trẻ): “李老师今年',blank:'多',post:'大？”',hint:'(bao nhiêu — đi với 大)',ans:'多',exp:'Hỏi tuổi người lớn: 多大; 几岁 chỉ hỏi trẻ nhỏ.'},
  {pre:'Hôm nay là sinh nhật con gái bạn, bé tròn sáu tuổi. Bạn khoe với bạn bè: “我女儿今年六岁',blank:'了',post:'！”',hint:'(trợ từ báo sự thay đổi)',ans:'了',exp:'了 cuối câu báo tình huống mới: bé đã lên sáu tuổi rồi.'},
  {pre:'A: “李月家有几口人？” — B: “',blank:'有',post:'五口人。”',hint:'(có)',ans:'有',exp:'Nhà có mấy người: (ai) 家 + 有 + số + 口人.'},
  {pre:'A: “你朋友多大了？” — B: “他',blank:'今年',post:'二十八岁。”',hint:'(năm nay)',ans:'今年',exp:'今年 đứng trước số tuổi: 今年二十八岁 (không đặt cuối câu như “28 tuổi năm nay”).'},
  {pre:'Bạn muốn biết thầy Lý đã có con gái chưa: “李老师有',blank:'女儿',post:'吗？”',hint:'(con gái)',ans:'女儿',exp:'女儿 = con gái; câu hỏi Có / Không thêm 吗.'},
];

// Sắp xếp — câu mới, không chép bài khoá
var sortData = [
  {words:['李老师','的','女儿','今年','八','岁','了','。'],ans:'李老师的女儿今年八岁了。',audio:'李老师的女儿今年八岁了。'},
  {words:['我','的','汉语','老师','今年','四十','岁','。'],ans:'我的汉语老师今年四十岁。',audio:'我的汉语老师今年四十岁。'},
  {words:['我','有','汉语','老师','。'],ans:'我有汉语老师。',audio:'我有汉语老师。'},
];

// Nối — câu hỏi ↔ câu trả lời
var matchData = [
  {left:'你家有几口人？',right:'三口。'},
  {left:'你女儿几岁了？',right:'四岁了。'},
  {left:'李老师多大了？',right:'五十岁了。'},
  {left:'她是谁？',right:'李老师的女儿。'},
  {left:'你有汉语老师吗？',right:'有，她是中国人。'},
];

// Trắc nghiệm — chọn câu đúng tình huống, chọn câu đáp, tìm câu sai
var mcData = [
  {q:'Bạn muốn hỏi một bé gái đang chơi ở công viên: “Cháu mấy tuổi rồi?”',opts:['你几岁了？','你几岁了吗？','你多岁了？','你岁几了？'],ans:0,exp:'Hỏi trẻ nhỏ: 几岁了; có 几 thì không thêm 吗; không nói 多岁.'},
  {q:'Bạn muốn hỏi tuổi ông giám đốc một cách lễ phép:',opts:['您多大了？','您几岁了？','您多岁了？','您几大了？'],ans:0,exp:'Người lớn tuổi: 您 + 多大了; hỏi 几岁 nghe như hỏi trẻ con; 多岁 / 几大 đều sai.'},
  {q:'Bạn muốn nói: “Nhà thầy Lý có bốn người.”',opts:['李老师家有四口人。','李老师家有四人。','李老师家四口人有。','李老师家有口四人。'],ans:0,exp:'Số + lượng từ 口 + 人, đặt sau 有: 有四口人.'},
  {q:'A: “李月的女儿多大了？” — B (bé 5 tuổi) đáp:',opts:['她五岁了。','她是五岁了。','她了五岁。','她五了岁。'],ans:0,exp:'Nói tuổi không cần 是; 了 đứng cuối câu.'},
  {q:'Câu nào SAI?',opts:['我家有二口人。','我朋友二十二岁。','李月今年十二岁。','我十岁了。'],ans:0,exp:'Đếm người với lượng từ dùng 两: 两口人; còn khi đọc số (二十二, 十二) vẫn dùng 二.'},
  {q:'Bạn muốn hỏi bạn mới quen: “Bạn có bạn người Mỹ không?”',opts:['你有美国朋友吗？','你是美国朋友吗？','你有朋友美国吗？','你有美国朋友几？'],ans:0,exp:'“Có” là 有 (không phải 是); 美国朋友 (nước đứng trước).'},
  {q:'Hôm nay là sinh nhật, bạn vừa tròn mười tám tuổi. Bạn nói:',opts:['我十八岁了！','我了十八岁！','我是十八岁了！','我十八了岁！'],ans:0,exp:'了 cuối câu báo sự thay đổi (vừa sang tuổi mới); không chen 是.'},
  {q:'A: “李老师多大了？” — B (cô 45 tuổi) đáp:',opts:['她四十五岁了。','她五十四岁了。','她四五岁了。','她十四五岁了。'],ans:0,exp:'45 = 四十五 (bốn – mười – lăm, giống thứ tự tiếng Việt “bốn mươi lăm”).'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý 了 cuối câu đọc nhẹ “le”; 一 và 不 biến điệu như đã học.',
    models:[
      {zh:'她女儿呢？——她女儿今年二十岁。',py:'Tā nǚ\'ér ne? — Tā nǚ\'ér jīnnián èrshí suì.',vn:'Còn con gái cô ấy? — Con gái cô ấy năm nay hai mươi tuổi.'},
      {zh:'她今年四岁了。',py:'Tā jīnnián sì suì le.',vn:'Năm nay bé bốn tuổi rồi.'},
      {zh:'你朋友呢？',py:'Nǐ péngyou ne?',vn:'Còn bạn của bạn?'},
      {zh:'我朋友的女儿十一岁。',py:'Wǒ péngyou de nǚ\'ér shíyī suì.',vn:'Con gái của bạn tôi mười một tuổi.'},
    ],
  },
  t2:{
    intro:'Thay phần gạch chân bằng số trong ô gợi ý. Chú ý: 2 tuổi nói 两岁, nhưng 12 tuổi vẫn là 十二岁.',
    drills:[
      {frame:'她女儿今年＿＿岁了。',frame_py:'Tā nǚ\'ér jīnnián ___ suì le.',vn:'Con gái cô ấy năm nay ＿＿ tuổi rồi.',options:['两','九','十二'],samples:['她女儿今年两岁了。','她女儿今年九岁了。','她女儿今年十二岁了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp về chính bạn.',
    tasks:[
      {role:'👨‍👩‍👧 Tình huống 1 — Kể về gia đình',
       guide:'Bạn mới hỏi nhà bạn có mấy người. Hãy trả lời theo gia đình thật của bạn, rồi hỏi lại bạn ấy.',
       structure:['我家有＿＿口人。','你家呢？'],
       sample:'我家有六口人。你家呢？',
       sample_vn:'Nhà mình có sáu người. Còn nhà bạn?',
       note:'Đếm người trong nhà phải có 口: 六口人. Người Việt hay quên 口 (我家有六人) vì tiếng Việt chỉ nói “sáu người”.'},
      {role:'🎂 Tình huống 2 — Hỏi tuổi đúng người',
       guide:'Ở bữa tiệc, bạn gặp bà của bạn thân và bé con gái của chị họ bạn ấy. Hãy hỏi tuổi bé, rồi lễ phép hỏi tuổi bà.',
       structure:['你＿＿岁了？','您＿＿大了？'],
       sample:'你几岁？您今年多大了？',
       sample_vn:'Cháu mấy tuổi? Bà năm nay bao nhiêu tuổi rồi ạ?',
       note:'Trẻ nhỏ: 几岁; người lớn: 多大, với người lớn tuổi thêm 您 cho lễ phép. Hỏi người lớn bằng 几岁 nghe như hỏi trẻ con.'},
      {role:'🥳 Tình huống 3 — Sinh nhật',
       guide:'Hôm nay là sinh nhật bạn. Hãy nói với cả lớp năm nay bạn bao nhiêu tuổi rồi, và cảm ơn mọi người.',
       structure:['我今年＿＿岁了！','谢谢！'],
       sample:'我今年二十一岁了！谢谢！',
       sample_vn:'Năm nay mình hai mươi mốt tuổi rồi! Cảm ơn các bạn!',
       note:'了 cuối câu cho biết bạn vừa bước sang tuổi mới. Không nói 我是二十一岁 — nói tuổi không dùng 是.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 5 + ôn lại từ bài 1-4
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bạn của bạn năm nay bao nhiêu tuổi?', zh:'你朋友今年多大？', py:'Nǐ péngyou jīnnián duō dà?'},
  {vi:'Tôi có bạn người Mỹ, cô ấy năm nay ba mươi tuổi.', zh:'我有美国朋友，她今年三十岁。', py:'Wǒ yǒu Měiguó péngyou, tā jīnnián sānshí suì.'},
  {vi:'Nhà bạn của tôi có chín người!', zh:'我朋友家有九口人！', py:'Wǒ péngyou jiā yǒu jiǔ kǒu rén!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chị có con gái không? Bé năm nay mấy tuổi?', zh:'你有女儿吗？她今年几岁？', py:'Nǐ yǒu nǚ\'ér ma? Tā jīnnián jǐ suì?'},
  {vi:'Lý Nguyệt hai mươi tuổi rồi, còn bạn?', zh:'李月二十岁了，你呢？', py:'Lǐ Yuè èrshí suì le, nǐ ne?'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — nghe câu → chọn đáp án (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'李月家有七口人。',
   questions:[
     {q:'Nhà Lý Nguyệt có mấy người?',opts:['4 người','7 người','10 người'],ans:1,exp:'七口人 = bảy người.'},
   ]},
  {audio:'我的同学今年十九岁。',
   questions:[
     {q:'Bạn cùng lớp của người nói bao nhiêu tuổi?',opts:['19 tuổi','9 tuổi','90 tuổi'],ans:0,exp:'十九 = mười chín (十 trước, 九 sau).'},
   ]},
  {audio:'李月的老师今年八十八岁了。',
   questions:[
     {q:'Thầy giáo của Lý Nguyệt bao nhiêu tuổi?',opts:['18 tuổi','80 tuổi','88 tuổi'],ans:2,exp:'八十八 = tám mươi tám.'},
   ]},
  {audio:'他今年十七岁，他的朋友今年七十岁。',
   questions:[
     {q:'Anh ấy bao nhiêu tuổi?',opts:['70 tuổi','17 tuổi','71 tuổi'],ans:1,exp:'十七 = mười bảy; 七十 = bảy mươi.'},
     {q:'Bạn của anh ấy bao nhiêu tuổi?',opts:['17 tuổi','71 tuổi','70 tuổi'],ans:2,exp:'他的朋友今年七十岁 = bạn anh ấy năm nay bảy mươi tuổi.'},
   ]},
  {audio:'谁是你的汉语老师？——李老师，她三十二岁。',
   questions:[
     {q:'Cô Lý bao nhiêu tuổi?',opts:['23 tuổi','32 tuổi','30 tuổi'],ans:1,exp:'三十二 = ba mươi hai.'},
   ]},
];

// Sach bai tap bai 5 (Doc + Chu Han, khong pinyin)
var wbData = { sections: [
  { title: 'Sách bài tập · Đọc & Chữ Hán', blocks: [
    { type: 'mocktest',
      note: 'Phần Nghe và Ngữ âm của sách cần file nghe nên chưa có ở đây. Bài viết chữ theo thứ tự nét (Chữ Hán – Phần 2) không chấm được trên máy, hãy luyện viết vào vở.',
      listening: [],
      reading: [
        { n: 13, part: 'Phần 1 · Nhìn tranh: từ dưới tranh đúng hay sai?', img: '/images/hsk1-bai-5-wb/q13.jpg', prompt: '七十岁', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '七十岁: 70 tuổi. Tranh là một người đàn ông trung niên mặc vest đang gọi điện thoại, chưa đến 70 tuổi → Sai.' },
        { n: 14, img: '/images/hsk1-bai-5-wb/q14.jpg', prompt: '女儿', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '女儿: con gái. Tranh một bé gái đang ngồi viết bài → Đúng.' },
        { n: 15, img: '/images/hsk1-bai-5-wb/q15.jpg', prompt: '三口人', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '三口人: ba người (trong gia đình). Tranh chỉ có hai người: cô gái ôm người mẹ → Sai.' },
        { n: 16, img: '/images/hsk1-bai-5-wb/q16.jpg', prompt: '她们', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'A', vn: '她们: các cô ấy (toàn nữ). Tranh ba cô gái cầm túi mua sắm → Đúng.' },
        { n: 17, img: '/images/hsk1-bai-5-wb/q17.jpg', prompt: '五口人', options: [{ key: 'A', text: '✓ Đúng' }, { key: 'B', text: '✗ Sai' }], answer: 'B', vn: '五口人: năm người. Đếm trong tranh có sáu người (ông, bà, bố, mẹ và hai con) → Sai.' },
        { n: 18, part: 'Phần 2 · Đọc câu hỏi, chọn câu trả lời đúng', bank: [
          { key: 'A', text: '她今年七岁了。' },
          { key: 'B', text: '不是，他是学生，他今年21岁。' },
          { key: 'C', text: '他是中国人。' },
          { key: 'D', text: '我今年38岁了。' },
          { key: 'E', text: '我家有四口人。' },
          { key: 'F', text: '好的，谢谢！' }
        ], letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你家有几口人？', answer: 'E', vn: 'Nhà bạn có mấy người? — E: Nhà tôi có bốn người. (几口人 → số + 口人)' },
        { n: 19, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '李老师的女儿几岁了？', answer: 'A', vn: 'Con gái của cô giáo Lý mấy tuổi rồi? — A: Cô bé năm nay 7 tuổi rồi. (几岁 hỏi tuổi trẻ nhỏ; 她 thay cho 女儿)' },
        { n: 20, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '他是老师吗？', answer: 'B', vn: 'Anh ấy là giáo viên phải không? — B: Không phải, anh ấy là học sinh, năm nay 21 tuổi.' },
        { n: 21, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你今年多大了？', answer: 'D', vn: 'Năm nay bạn bao nhiêu tuổi? — D: Năm nay tôi 38 tuổi rồi. (多大 hỏi tuổi người lớn; trả lời bằng 我…)' },
        { n: 22, letters: ['A', 'B', 'C', 'D', 'E', 'F'], prompt: '你的汉语老师是哪国人？', answer: 'C', vn: 'Giáo viên tiếng Trung của bạn là người nước nào? — C: Thầy ấy là người Trung Quốc. (哪国人 ở bài 4)' },
        { n: 23, part: 'Phần 3 · Chọn từ điền vào chỗ trống', bank: [
          { key: 'A', text: '大' },
          { key: 'B', text: '几' },
          { key: 'C', text: '岁' },
          { key: 'D', text: '名字' },
          { key: 'E', text: '口' }
        ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我的中国朋友家有三（　）人。', answer: 'E', vn: 'Nhà người bạn Trung Quốc của tôi có ba người. — Đếm người trong gia đình dùng lượng từ 口: 三口人.' },
        { n: 24, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你们老师今年多（　）？', answer: 'A', vn: 'Năm nay thầy/cô của các bạn bao nhiêu tuổi? — 多大: bao nhiêu tuổi (hỏi người lớn).' },
        { n: 25, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我是美国人，我是学生，我19（　）。', answer: 'C', vn: 'Tôi là người Mỹ, tôi là học sinh, tôi 19 tuổi. — Số + 岁: … tuổi.' },
        { n: 26, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你家有（　）口人？', answer: 'B', vn: 'Nhà bạn có mấy người? — 几: mấy (hỏi số lượng nhỏ), 几口人.' },
        { n: 27, bank: [
          { key: 'F', text: '呢' },
          { key: 'G', text: '了' },
          { key: 'H', text: '吗' },
          { key: 'I', text: '哪' }
        ], letters: ['F', 'G', 'H', 'I'], prompt: '他是（　）国人？', answer: 'I', vn: 'Anh ấy là người nước nào? — 哪国人: người nước nào.' },
        { n: 28, letters: ['F', 'G', 'H', 'I'], prompt: '我今年29岁。你（　）？', answer: 'F', vn: 'Năm nay tôi 29 tuổi. Còn bạn? — 你呢: hỏi lại “còn bạn thì sao?”.' },
        { n: 29, letters: ['F', 'G', 'H', 'I'], prompt: '这是你女儿（　）？', answer: 'H', vn: 'Đây là con gái của bạn phải không? — Câu hỏi có/không → thêm 吗 cuối câu.' },
        { n: 30, letters: ['F', 'G', 'H', 'I'], prompt: '他是我的好朋友，他今年30岁（　）。', answer: 'G', vn: 'Anh ấy là bạn thân của tôi, năm nay anh ấy 30 tuổi rồi. — … 岁了: (đã) … tuổi rồi, 了 ở cuối câu.' }
      ],
      writing: [
        { n: '1a', part: 'Chữ Hán · Phần 1 · Chữ nào có nét cho sẵn?', prompt: 'Chữ nào dưới đây có nét ngang phẩy 横撇 (㇇)?', options: [{ key: 'A', text: '大' }, { key: 'B', text: '女' }, { key: 'C', text: '水' }, { key: 'D', text: '人' }], answer: 'C', vn: '水: nét thứ hai (bên trái) là nét ngang phẩy (㇇): đi ngang rồi gập chéo xuống trái. 大, 女, 人 không có nét này.' },
        { n: '1b', prompt: 'Chữ nào dưới đây có nét ngang phẩy 横撇 (㇇)?', options: [{ key: 'A', text: '又' }, { key: 'B', text: '大' }, { key: 'C', text: '儿' }, { key: 'D', text: '中' }], answer: 'A', vn: '又: nét đầu tiên là nét ngang phẩy (㇇), sau đó là nét mác. 大, 儿, 中 không có nét này.' },
        { n: '2a', prompt: 'Chữ nào dưới đây có nét phẩy chấm 撇点 (㇛)?', options: [{ key: 'A', text: '大' }, { key: 'B', text: '女' }, { key: 'C', text: '水' }, { key: 'D', text: '又' }], answer: 'B', vn: '女: nét đầu tiên là nét phẩy chấm (㇛): phẩy xuống trái rồi gập sang phải. 大, 水, 又 không có nét này.' },
        { n: '2b', prompt: 'Chữ nào dưới đây có nét phẩy chấm 撇点 (㇛)?', options: [{ key: 'A', text: '你' }, { key: 'B', text: '他' }, { key: 'C', text: '们' }, { key: 'D', text: '好' }], answer: 'D', vn: '好 = 女 + 子; bộ 女 bên trái có nét phẩy chấm (㇛). 你, 他, 们 không có nét này.' }
      ]
    }
  ]}
] };
