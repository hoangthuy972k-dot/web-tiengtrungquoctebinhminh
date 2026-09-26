// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 4: 我有两个孩子
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "有",
    "py": "yǒu",
    "pos": "Động từ",
    "vn": "có",
    "hv": "hữu",
    "em": "✋",
    "lesson": 1,
    "ex_zh": "她有二十个学生。",
    "ex_py": "Tā yǒu èrshí gè xuésheng.",
    "ex_vn": "Cô ấy có hai mươi học sinh.",
    "exList": [
      {
        "zh": "她有二十个学生。",
        "py": "Tā yǒu èrshí gè xuésheng.",
        "vn": "Cô ấy có hai mươi học sinh."
      },
      {
        "zh": "她有多少个学生？",
        "py": "Tā yǒu duōshao gè xuésheng?",
        "vn": "Cô ấy có bao nhiêu học sinh?"
      }
    ],
    "hanzi": [
      {
        "c": "有",
        "p": "yǒu",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "ナ(biến thể) → 月(nhục)",
        "rad": "月 (nhục – thịt)",
        "mean": "có",
        "tip": "Bàn tay ナ cầm miếng thịt 月 → sở hữu vật gì đó = CÓ.",
        "cf": "冇 (mǎo – phương ngữ \"không có\")",
        "w": "有学生 / 没有"
      }
    ],
    "colloFull": [
      {
        "zh": "有姐姐",
        "py": "yǒu jiějie",
        "vn": "có chị gái"
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
        "zh": "有工作",
        "py": "yǒu gōngzuò",
        "vn": "có việc làm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 有 + danh từ",
        "m": "Câu chữ 有: 我家有五口人"
      },
      {
        "s": "Phủ định LUÔN là 没有, KHÔNG nói 不有"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có năm người.",
        "answer": "我家有五口人。",
        "answerPy": "Wǒ jiā yǒu wǔ kǒu rén.",
        "note": "Câu chữ 有 dùng để nói có cái gì.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có anh trai không?",
        "answer": "你有哥哥吗？",
        "answerPy": "Nǐ yǒu gēge ma?",
        "note": "Phủ định của 有 là 没有.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 2,
    "zh": "多少",
    "py": "duōshao",
    "pos": "Đại từ",
    "vn": "bao nhiêu",
    "hv": "đa thiểu",
    "em": "❓",
    "lesson": 1,
    "ex_zh": "她有多少个学生？",
    "ex_py": "Tā yǒu duōshao gè xuésheng?",
    "ex_vn": "Cô ấy có bao nhiêu học sinh?",
    "exList": [
      {
        "zh": "她有多少个学生？",
        "py": "Tā yǒu duōshao gè xuésheng?",
        "vn": "Cô ấy có bao nhiêu học sinh?"
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
        "mean": "nhiều",
        "tip": "Hai chữ 夕 (buổi tối) chồng lên nhau — trải qua NHIỀU đêm mới thành số lượng lớn = NHIỀU.",
        "cf": "夕 (xī – \"buổi tối\", chỉ bằng một nửa chữ 多\")",
        "w": "多少 / 很多 / 多大"
      },
      {
        "c": "少",
        "p": "shao",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "小(tiểu) → 丿(phẩy thêm)",
        "rad": "小 (tiểu – nhỏ)",
        "mean": "ít",
        "tip": "Từ chữ 小 (nhỏ) thêm một nét phẩy khiến số lượng còn nhỏ hơn nữa → ÍT.",
        "cf": "小 (xiǎo – \"nhỏ\", chỉ khác chữ 少 đúng một nét)",
        "w": "多少 / 不少 / 少了"
      }
    ],
    "colloFull": [
      {
        "zh": "多少人",
        "py": "duōshao rén",
        "vn": "bao nhiêu người"
      },
      {
        "zh": "多少个",
        "py": "duōshao gè",
        "vn": "bao nhiêu cái"
      },
      {
        "zh": "多少学生",
        "py": "duōshao xuésheng",
        "vn": "bao nhiêu học sinh"
      },
      {
        "zh": "有多少",
        "py": "yǒu duōshao",
        "vn": "có bao nhiêu"
      }
    ],
    "patterns": [
      {
        "s": "多少 + danh từ",
        "m": "Hỏi số lượng BẤT KỲ, có thể rất lớn"
      },
      {
        "s": "多少 không cần lượng từ; 几 thì phải có: 多少人 ✓ / 几个人 ✓"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà bạn có bao nhiêu người?",
        "answer": "你家有多少人？",
        "answerPy": "Nǐ jiā yǒu duōshao rén?",
        "note": "多少 không cần lượng từ phía sau.",
        "pair": "多少 + N？"
      },
      {
        "promptLang": "vi",
        "prompt": "Lớp bạn có bao nhiêu học sinh?",
        "answer": "你们有多少学生？",
        "answerPy": "Nǐmen yǒu duōshao xuésheng?",
        "note": "多少 hỏi được cả số rất lớn.",
        "pair": "多少 + N？"
      }
    ]
  },
  {
    "n": 3,
    "zh": "个",
    "py": "gè",
    "pos": "Lượng từ",
    "vn": "(dùng chung cho nhiều danh từ)",
    "hv": "cá",
    "em": "🔢",
    "lesson": 1,
    "ex_zh": "她有二十个学生。",
    "ex_py": "Tā yǒu èrshí gè xuésheng.",
    "ex_vn": "Cô ấy có hai mươi học sinh.",
    "exList": [
      {
        "zh": "她有二十个学生。",
        "py": "Tā yǒu èrshí gè xuésheng.",
        "vn": "Cô ấy có hai mươi học sinh."
      },
      {
        "zh": "我有两个哥哥。",
        "py": "Wǒ yǒu liǎng gè gēge.",
        "vn": "Tôi có hai anh trai."
      }
    ],
    "hanzi": [
      {
        "c": "个",
        "p": "gè",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丿(phẩy) → ㇏(mác) → 丨(sổ)",
        "rad": "人 (nhân – người)",
        "mean": "cái, chiếc (lượng từ chung)",
        "tip": "Hình dáng giống một NGƯỜI 人 đứng thẳng có thêm một nét sổ như cây que đếm — dùng để ĐẾM người, đồ vật chung chung.",
        "cf": "介 (jiè – \"giới thiệu\", phía trên có bộ 八\")",
        "w": "一个 / 几个 / 个子"
      }
    ],
    "colloFull": [
      {
        "zh": "一个",
        "py": "yí gè",
        "vn": "một cái"
      },
      {
        "zh": "几个",
        "py": "jǐ gè",
        "vn": "mấy cái"
      },
      {
        "zh": "两个哥哥",
        "py": "liǎng gè gēge",
        "vn": "hai người anh"
      },
      {
        "zh": "三个孩子",
        "py": "sān gè háizi",
        "vn": "ba đứa trẻ"
      }
    ],
    "patterns": [
      {
        "s": "số + 个 + danh từ",
        "m": "Lượng từ dùng được nhiều nhất: 两个哥哥"
      },
      {
        "s": "Giữa số và danh từ BẮT BUỘC có lượng từ: ✗ 两哥哥 → ✓ 两个哥哥"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi có hai người anh.",
        "answer": "我有两个哥哥。",
        "answerPy": "Wǒ yǒu liǎng ge gēge.",
        "note": "Giữa số và danh từ bắt buộc có lượng từ.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi có ba đứa con.",
        "answer": "我姐姐有三个孩子。",
        "answerPy": "Wǒ jiějie yǒu sān ge háizi.",
        "note": "个 là lượng từ dùng được nhiều nhất.",
        "pair": "……有……"
      }
    ]
  },
  {
    "n": 4,
    "zh": "哥哥",
    "py": "gēge",
    "pos": "Danh từ",
    "vn": "anh trai",
    "hv": "ca ca",
    "em": "👦",
    "lesson": 2,
    "ex_zh": "我有两个哥哥，你呢？",
    "ex_py": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
    "ex_vn": "Chị có hai anh trai, em thì sao?",
    "exList": [
      {
        "zh": "我有两个哥哥，你呢？",
        "py": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
        "vn": "Chị có hai anh trai, em thì sao?"
      },
      {
        "zh": "我没有哥哥。",
        "py": "Wǒ méiyǒu gēge.",
        "vn": "Em không có anh trai."
      }
    ],
    "hanzi": [
      {
        "c": "哥",
        "p": "gē",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "可(khả) trên → 可(khả) dưới",
        "rad": "口 (khẩu – miệng)",
        "mean": "anh trai",
        "tip": "Hai chữ 可 (khả – có thể) xếp chồng lên nhau, như hai MIỆNG 口 gọi nhau, réo nhau — hình ảnh ANH TRAI luôn gọi bảo, chăm em.",
        "cf": "歌 (gē – \"hát\", thêm bộ 欠\" bên phải)",
        "w": "哥哥 / 大哥"
      }
    ],
    "colloFull": [
      {
        "zh": "我哥哥",
        "py": "wǒ gēge",
        "vn": "anh trai tôi"
      },
      {
        "zh": "两个哥哥",
        "py": "liǎng gè gēge",
        "vn": "hai người anh"
      },
      {
        "zh": "哥哥的工作",
        "py": "gēge de gōngzuò",
        "vn": "công việc của anh"
      },
      {
        "zh": "哥哥的名字",
        "py": "gēge de míngzi",
        "vn": "tên của anh"
      }
    ],
    "patterns": [
      {
        "s": "ai + 哥哥",
        "m": "Anh của ai — người thân hay bỏ 的"
      },
      {
        "s": "哥哥 (anh trai) ↔ 姐姐 (chị gái)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh tôi là người Pháp.",
        "answer": "我哥哥是法国人。",
        "answerPy": "Wǒ gēge shì Fǎguó rén.",
        "note": "我哥哥 — anh tôi, bỏ 的 cho gọn.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh bạn năm nay bao nhiêu tuổi?",
        "answer": "你哥哥今年多大？",
        "answerPy": "Nǐ gēge jīnnián duō dà?",
        "note": "Hỏi tuổi người lớn thì dùng 多大.",
        "pair": "多大？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "呢",
    "py": "ne",
    "pos": "Trợ từ",
    "vn": "thì sao (dùng ở cuối câu hỏi)",
    "hv": "ni",
    "em": "❔",
    "lesson": 2,
    "ex_zh": "我有两个哥哥，你呢？",
    "ex_py": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
    "ex_vn": "Chị có hai anh trai, em thì sao?",
    "exList": [
      {
        "zh": "我有两个哥哥，你呢？",
        "py": "Wǒ yǒu liǎng gè gēge, nǐ ne?",
        "vn": "Chị có hai anh trai, em thì sao?"
      },
      {
        "zh": "我叫白家月，你呢？",
        "py": "Wǒ jiào Bái Jiāyuè, nǐ ne?",
        "vn": "Mình tên là Bạch Gia Nguyệt, còn bạn?"
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
        "mean": "trợ từ nghi vấn cuối câu",
        "tip": "Bộ Miệng 口 bên trái + 尼 (âm \"ni\") bên phải — dùng MIỆNG hỏi lại \"còn... thì sao?\" ở cuối câu hỏi.",
        "cf": "尼 (ní – \"ni cô\", thiếu bộ 口\" bên trái)",
        "w": "你呢 / 他呢 / 我呢"
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
      },
      {
        "zh": "你家呢",
        "py": "nǐ jiā ne",
        "vn": "còn nhà bạn thì sao"
      }
    ],
    "patterns": [
      {
        "s": "danh từ / đại từ + 呢？",
        "m": "Hỏi lại cùng một chuyện: 我家有五口人，你呢？"
      },
      {
        "s": "呢 giúp khỏi phải lặp lại cả câu hỏi dài"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có năm người, còn bạn?",
        "answer": "我家有五口人，你呢？",
        "answerPy": "Wǒ jiā yǒu wǔ kǒu rén, nǐ ne?",
        "note": "呢 thay cho cả câu hỏi vừa nói.",
        "pair": "……，……呢？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi là người Trung Quốc, còn anh ấy?",
        "answer": "我是中国人，他呢？",
        "answerPy": "Wǒ shì Zhōngguó rén, tā ne?",
        "note": "Hỏi lại về người khác mà không phải lặp câu.",
        "pair": "……，……呢？"
      }
    ]
  },
  {
    "n": 6,
    "zh": "没有",
    "py": "méiyǒu",
    "pos": "Động từ",
    "vn": "không có",
    "hv": "một hữu",
    "em": "🚫",
    "lesson": 2,
    "ex_zh": "我没有哥哥。",
    "ex_py": "Wǒ méiyǒu gēge.",
    "ex_vn": "Em không có anh trai.",
    "exList": [
      {
        "zh": "我没有哥哥。",
        "py": "Wǒ méiyǒu gēge.",
        "vn": "Em không có anh trai."
      }
    ],
    "hanzi": [
      {
        "c": "没",
        "p": "méi",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "氵(thuỷ) trái → 殳(thù) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "chìm; không có (phủ định của 有)",
        "tip": "Bộ Nước 氵 + 殳 (cây gậy khuấy) — vật bị nước nhấn CHÌM, biến mất khỏi tay → dùng để phủ định \"KHÔNG CÓ\".",
        "cf": "设 (shè – \"thiết lập\", cũng có 殳\" nhưng bộ 讠)",
        "w": "没有 / 没关系 / 没事"
      },
      {
        "c": "有",
        "p": "yǒu",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "ナ(biến thể) → 月(nhục)",
        "rad": "月 (nhục – thịt)",
        "mean": "có",
        "tip": "Bàn tay ナ cầm miếng thịt 月 → sở hữu vật gì đó = CÓ.",
        "cf": "冇 (mǎo – phương ngữ \"không có\")",
        "w": "有学生 / 没有"
      }
    ],
    "colloFull": [
      {
        "zh": "没有哥哥",
        "py": "méiyǒu gēge",
        "vn": "không có anh trai"
      },
      {
        "zh": "没有工作",
        "py": "méiyǒu gōngzuò",
        "vn": "không có việc làm"
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
        "s": "✗ 不有哥哥 → ✓ 没有哥哥"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi không có em gái.",
        "answer": "我没有妹妹。",
        "answerPy": "Wǒ méiyǒu mèimei.",
        "note": "Không nói 不有, chỉ nói 没有.",
        "pair": "没有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi chưa có việc làm.",
        "answer": "我姐姐没有工作。",
        "answerPy": "Wǒ jiějie méiyǒu gōngzuò.",
        "note": "没有工作 — chưa có việc làm.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 7,
    "zh": "家",
    "py": "jiā",
    "pos": "Danh từ",
    "vn": "gia đình, nhà",
    "hv": "gia",
    "em": "🏠",
    "lesson": 2,
    "ex_zh": "你家有几口人？",
    "ex_py": "Nǐ jiā yǒu jǐ kǒu rén?",
    "ex_vn": "Nhà em có mấy người?",
    "exList": [
      {
        "zh": "你家有几口人？",
        "py": "Nǐ jiā yǒu jǐ kǒu rén?",
        "vn": "Nhà em có mấy người?"
      },
      {
        "zh": "我家有四口人。",
        "py": "Wǒ jiā yǒu sì kǒu rén.",
        "vn": "Nhà em có bốn người."
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
        "tip": "Mái nhà 宀 + 豕(con lợn) → thời xưa nuôi lợn dưới nhà là dấu hiệu có một GIA ĐÌNH ổn định.",
        "cf": "豪 (háo – \"hào kiệt\", cũng có 豕\")",
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
        "zh": "我家有",
        "py": "wǒ jiā yǒu",
        "vn": "nhà tôi có"
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
        "prompt": "Nhà anh ấy có mấy người?",
        "answer": "他家有几口人？",
        "answerPy": "Tā jiā yǒu jǐ kǒu rén?",
        "note": "Nói 他家, ít khi nói 他的家.",
        "pair": "有几……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có bố, mẹ và tôi.",
        "answer": "我家有爸爸、妈妈和我。",
        "answerPy": "Wǒ jiā yǒu bàba, māma hé wǒ.",
        "note": "Liệt kê nhiều thứ thì 和 đặt trước cái cuối cùng.",
        "pair": "A 和 B"
      }
    ]
  },
  {
    "n": 8,
    "zh": "几",
    "py": "jǐ",
    "pos": "Đại từ",
    "vn": "mấy",
    "hv": "kỉ",
    "em": "🔟",
    "lesson": 2,
    "ex_zh": "你家有几口人？",
    "ex_py": "Nǐ jiā yǒu jǐ kǒu rén?",
    "ex_vn": "Nhà em có mấy người?",
    "exList": [
      {
        "zh": "你家有几口人？",
        "py": "Nǐ jiā yǒu jǐ kǒu rén?",
        "vn": "Nhà em có mấy người?"
      },
      {
        "zh": "您儿子几岁？",
        "py": "Nín érzi jǐ suì?",
        "vn": "Con trai chị mấy tuổi?"
      }
    ],
    "hanzi": [
      {
        "c": "几",
        "p": "jǐ",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿(phẩy) → 乚(nét cong móc)",
        "rad": "几 (kỷ – tự thành bộ, cái bàn nhỏ)",
        "mean": "mấy, bao nhiêu (số nhỏ)",
        "tip": "Hình dáng giống một CHIẾC BÀN NHỎ có chân cong thời xưa — mượn nghĩa hỏi \"có MẤY cái\", tức hỏi một số lượng nhỏ.",
        "cf": "儿 (ér – \"con\", hai nét khá giống nhưng nét cuối khác hướng)",
        "w": "几口人 / 几岁 / 几个"
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
        "zh": "几个",
        "py": "jǐ gè",
        "vn": "mấy cái"
      },
      {
        "zh": "几个哥哥",
        "py": "jǐ gè gēge",
        "vn": "mấy người anh"
      }
    ],
    "patterns": [
      {
        "s": "几 + lượng từ + danh từ",
        "m": "Hỏi số lượng NHỎ, đoán dưới mười"
      },
      {
        "s": "几 (số nhỏ) ≠ 多少 (số bất kỳ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà bạn có mấy người?",
        "answer": "你家有几口人？",
        "answerPy": "Nǐ jiā yǒu jǐ kǒu rén?",
        "note": "几 luôn đi kèm lượng từ.",
        "pair": "有几……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái bạn năm nay mấy tuổi?",
        "answer": "你女儿今年几岁？",
        "answerPy": "Nǐ nǚ'ér jīnnián jǐ suì?",
        "note": "Hỏi tuổi trẻ nhỏ dùng 几岁.",
        "pair": "几岁？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "口",
    "py": "kǒu",
    "pos": "Lượng từ",
    "vn": "(đếm người trong gia đình)",
    "hv": "khẩu",
    "em": "👪",
    "lesson": 2,
    "ex_zh": "我家有四口人。",
    "ex_py": "Wǒ jiā yǒu sì kǒu rén.",
    "ex_vn": "Nhà em có bốn người.",
    "exList": [
      {
        "zh": "我家有四口人。",
        "py": "Wǒ jiā yǒu sì kǒu rén.",
        "vn": "Nhà em có bốn người."
      }
    ],
    "hanzi": [
      {
        "c": "口",
        "p": "kǒu",
        "type": "全包围结构 · Bao vây toàn phần",
        "st": 3,
        "ord": "丨(sổ trái) → 𠃌(ngang gập) → 一(ngang đáy)",
        "rad": "口 (khẩu – tự thành bộ)",
        "mean": "miệng; (lượng từ đếm người trong gia đình)",
        "tip": "Hình vuông giống hình dạng cái MIỆNG đang mở — mượn nghĩa \"miệng ăn\" trong nhà để đếm số NGƯỜI trong gia đình.",
        "cf": "日 (rì – \"mặt trời, ngày\", có thêm một nét ngang ở giữa)",
        "w": "一口人 / 几口人 / 人口"
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
      },
      {
        "zh": "四口人",
        "py": "sì kǒu rén",
        "vn": "bốn người"
      }
    ],
    "patterns": [
      {
        "s": "số + 口 + 人",
        "m": "Lượng từ 口 chỉ dùng đếm NGƯỜI TRONG NHÀ"
      },
      {
        "s": "口 không dùng để đếm người ở lớp hay ở cơ quan"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhà cô ấy có bốn người.",
        "answer": "她家有四口人。",
        "answerPy": "Tā jiā yǒu sì kǒu rén.",
        "note": "口 chỉ dùng đếm người trong một gia đình.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà thầy có mấy người ạ?",
        "answer": "老师家有几口人？",
        "answerPy": "Lǎoshī jiā yǒu jǐ kǒu rén?",
        "note": "Gọi 老师 trước rồi mới hỏi cho lễ phép.",
        "pair": "有几……？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "爸爸",
    "py": "bàba",
    "pos": "Danh từ",
    "vn": "bố, ba",
    "hv": "ba ba",
    "em": "👨",
    "lesson": 2,
    "ex_zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
    "ex_py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
    "ex_vn": "Nhà em có bốn người: bố, mẹ, em gái và em.",
    "exList": [
      {
        "zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
        "py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
        "vn": "Nhà em có bốn người: bố, mẹ, em gái và em."
      }
    ],
    "hanzi": [
      {
        "c": "爸",
        "p": "bà",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "父(phụ) trên → 巴(ba) dưới",
        "rad": "父 (phụ – cha)",
        "mean": "bố, cha",
        "tip": "Bộ Cha 父 ở trên + 巴 (âm \"ba\") ở dưới — ghép nghĩa CHA với âm đọc \"ba\" tạo thành tiếng gọi thân mật BỐ.",
        "cf": "巴 (bā – \"bám lấy\", thiếu bộ 父\" phía trên)",
        "w": "爸爸 / 爸妈"
      }
    ],
    "colloFull": [
      {
        "zh": "我爸爸",
        "py": "wǒ bàba",
        "vn": "bố tôi"
      },
      {
        "zh": "他爸爸",
        "py": "tā bàba",
        "vn": "bố anh ấy"
      },
      {
        "zh": "爸爸的工作",
        "py": "bàba de gōngzuò",
        "vn": "công việc của bố"
      },
      {
        "zh": "爸爸和妈妈",
        "py": "bàba hé māma",
        "vn": "bố và mẹ"
      }
    ],
    "patterns": [
      {
        "s": "người + 爸爸",
        "m": "Bố của ai — nói 我爸爸, ít khi nói 我的爸爸"
      },
      {
        "s": "爸爸 ↔ 妈妈",
        "m": "Hai chữ đều có phần chỉ âm ở dưới: 巴 và 马"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi rất bận.",
        "answer": "我爸爸很忙。",
        "answerPy": "Wǒ bàba hěn máng.",
        "note": "Tính từ làm vị ngữ cần có 很.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bố bạn năm nay bao nhiêu tuổi?",
        "answer": "你爸爸今年多大？",
        "answerPy": "Nǐ bàba jīnnián duō dà?",
        "note": "Người thân hay bỏ 的: 你爸爸.",
        "pair": "多大？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "妈妈",
    "py": "māma",
    "pos": "Danh từ",
    "vn": "mẹ",
    "hv": "ma ma",
    "em": "👩",
    "lesson": 2,
    "ex_zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
    "ex_py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
    "ex_vn": "Nhà em có bốn người: bố, mẹ, em gái và em.",
    "exList": [
      {
        "zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
        "py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
        "vn": "Nhà em có bốn người: bố, mẹ, em gái và em."
      }
    ],
    "hanzi": [
      {
        "c": "妈",
        "p": "mā",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 马(mã) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "mẹ",
        "tip": "Bộ Nữ 女 (phụ nữ) + 马 (âm gần giống \"ma/má\") — người PHỤ NỮ sinh ra ta, gọi thân mật là MẸ.",
        "cf": "骂 (mà – \"mắng\", cũng có 马\" nhưng thêm 口口 phía trên)",
        "w": "妈妈 / 爸妈"
      }
    ],
    "colloFull": [
      {
        "zh": "我妈妈",
        "py": "wǒ māma",
        "vn": "mẹ tôi"
      },
      {
        "zh": "她妈妈",
        "py": "tā māma",
        "vn": "mẹ cô ấy"
      },
      {
        "zh": "妈妈的工作",
        "py": "māma de gōngzuò",
        "vn": "công việc của mẹ"
      },
      {
        "zh": "爸爸和妈妈",
        "py": "bàba hé māma",
        "vn": "bố và mẹ"
      }
    ],
    "patterns": [
      {
        "s": "người + 妈妈",
        "m": "Mẹ của ai — người thân hay bỏ 的"
      },
      {
        "s": "妈 = 女 + 马",
        "m": "Bộ 女 chỉ nghĩa, chữ 马 (mǎ) chỉ âm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi là giáo viên tiếng Trung.",
        "answer": "我妈妈是中文老师。",
        "answerPy": "Wǒ māma shì Zhōngwén lǎoshī.",
        "note": "中文老师 ghép thẳng, không cần 的.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ cô ấy không có việc làm.",
        "answer": "她妈妈没有工作。",
        "answerPy": "Tā māma méiyǒu gōngzuò.",
        "note": "她妈妈 — mẹ của cô ấy.",
        "pair": "没有 + N"
      }
    ]
  },
  {
    "n": 12,
    "zh": "妹妹",
    "py": "mèimei",
    "pos": "Danh từ",
    "vn": "em gái",
    "hv": "muội muội",
    "em": "👧",
    "lesson": 2,
    "ex_zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
    "ex_py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
    "ex_vn": "Nhà em có bốn người: bố, mẹ, em gái và em.",
    "exList": [
      {
        "zh": "我家有四口人，爸爸、妈妈、妹妹和我。",
        "py": "Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.",
        "vn": "Nhà em có bốn người: bố, mẹ, em gái và em."
      }
    ],
    "hanzi": [
      {
        "c": "妹",
        "p": "mèi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "女(nữ) trái → 未(vị) phải",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "em gái",
        "tip": "Bộ Nữ 女 + 未 (vị – \"chưa tới\") — người con gái CHƯA trưởng thành bằng chị/anh trong nhà = EM GÁI.",
        "cf": "味 (wèi – \"vị, mùi\", cũng có 未\" nhưng bộ 口\")",
        "w": "妹妹 / 姐妹"
      }
    ],
    "colloFull": [
      {
        "zh": "我妹妹",
        "py": "wǒ mèimei",
        "vn": "em gái tôi"
      },
      {
        "zh": "两个妹妹",
        "py": "liǎng gè mèimei",
        "vn": "hai em gái"
      },
      {
        "zh": "妹妹的名字",
        "py": "mèimei de míngzi",
        "vn": "tên của em gái"
      },
      {
        "zh": "妹妹几岁",
        "py": "mèimei jǐ suì",
        "vn": "em gái mấy tuổi"
      }
    ],
    "patterns": [
      {
        "s": "ai + 妹妹",
        "m": "Em gái của ai"
      },
      {
        "s": "姐姐 (chị) ↔ 妹妹 (em gái) — cùng một cặp trên dưới như 哥哥 với em trai"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi năm nay mười tuổi.",
        "answer": "我妹妹今年十岁。",
        "answerPy": "Wǒ mèimei jīnnián shí suì.",
        "note": "Nói tuổi không cần động từ 是.",
        "pair": "……岁"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn có mấy em gái?",
        "answer": "你有几个妹妹？",
        "answerPy": "Nǐ yǒu jǐ ge mèimei?",
        "note": "几个妹妹 — mấy em gái.",
        "pair": "有几……？"
      }
    ]
  },
  {
    "n": 13,
    "zh": "和",
    "py": "hé",
    "pos": "Liên từ",
    "vn": "và",
    "hv": "hòa",
    "em": "➕",
    "lesson": 2,
    "ex_zh": "爸爸、妈妈、妹妹和我。",
    "ex_py": "Bàba, māma, mèimei hé wǒ.",
    "ex_vn": "Bố, mẹ, em gái và em.",
    "exList": [
      {
        "zh": "爸爸、妈妈、妹妹和我。",
        "py": "Bàba, māma, mèimei hé wǒ.",
        "vn": "Bố, mẹ, em gái và em."
      }
    ],
    "hanzi": [
      {
        "c": "和",
        "p": "hé",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "禾(hoà) trái → 口(khẩu) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "và, hoà hợp",
        "tip": "Bộ Lúa 禾 (lương thực) + 口 (miệng, người ăn) — có LÚA để mọi MIỆNG cùng no đủ, sống HOÀ HỢP; dùng để nối các thứ với nhau = VÀ.",
        "cf": "合 (hé – \"hợp lại\", đồng âm nhưng khác chữ, không có bộ 禾\")",
        "w": "和我 / 你和他 / 和平"
      }
    ],
    "colloFull": [
      {
        "zh": "爸爸和妈妈",
        "py": "bàba hé māma",
        "vn": "bố và mẹ"
      },
      {
        "zh": "哥哥和姐姐",
        "py": "gēge hé jiějie",
        "vn": "anh và chị"
      },
      {
        "zh": "我和你",
        "py": "wǒ hé nǐ",
        "vn": "tôi và bạn"
      },
      {
        "zh": "他和她",
        "py": "tā hé tā",
        "vn": "anh ấy và cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 和 + danh từ",
        "m": "和 chỉ nối DANH TỪ, không nối hai câu"
      },
      {
        "s": "✗ 我很忙和他很忙 → tiếng Trung không dùng 和 kiểu này"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố và mẹ tôi đều là người Trung Quốc.",
        "answer": "我爸爸和妈妈是中国人。",
        "answerPy": "Wǒ bàba hé māma shì Zhōngguó rén.",
        "note": "和 chỉ nối danh từ với danh từ.",
        "pair": "A 和 B"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi và bạn gái tôi đều là học sinh.",
        "answer": "我和我女朋友是学生。",
        "answerPy": "Wǒ hé wǒ nǚpéngyou shì xuésheng.",
        "note": "Hai chủ ngữ nối bằng 和, động từ chỉ nói một lần.",
        "pair": "A 和 B"
      }
    ]
  },
  {
    "n": 14,
    "zh": "儿子",
    "py": "érzi",
    "pos": "Danh từ",
    "vn": "con trai",
    "hv": "nhi tử",
    "em": "👦",
    "lesson": 3,
    "ex_zh": "我有两个孩子，一个儿子，一个女儿。",
    "ex_py": "Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ'ér.",
    "ex_vn": "Tôi có hai con, một con trai, một con gái.",
    "exList": [
      {
        "zh": "我有两个孩子，一个儿子，一个女儿。",
        "py": "Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ'ér.",
        "vn": "Tôi có hai con, một con trai, một con gái."
      },
      {
        "zh": "这是您儿子吗？",
        "py": "Zhè shì nín érzi ma?",
        "vn": "Đây là con trai chị phải không?"
      }
    ],
    "hanzi": [
      {
        "c": "儿",
        "p": "ér",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿(phẩy) → 乚(nét cong móc)",
        "rad": "儿 (nhân – tự thành bộ, chân người)",
        "mean": "con, trẻ nhỏ",
        "tip": "Hình dáng giống đôi CHÂN của một đứa trẻ đang đứng, phía trên nối với đầu (khi ghép trong chữ khác) — tượng trưng cho CON, TRẺ NHỎ.",
        "cf": "几 (jǐ – \"mấy\", nét đầu viết theo hướng khác)",
        "w": "儿子 / 女儿 / 儿童"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "了(biến thể) → 一(ngang)",
        "rad": "子 (tử – tự thành bộ, con)",
        "mean": "con (danh từ); hậu tố danh từ",
        "tip": "Hình ảnh một ĐỨA TRẺ sơ sinh quấn tã, hai tay dang ra — gốc nghĩa là CON, sau này dùng làm hậu tố danh từ (儿子, 孩子…).",
        "cf": "孑 (jié – \"cô độc\", thiếu nét ngang bên phải\")",
        "w": "儿子 / 孩子 / 桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "我儿子",
        "py": "wǒ érzi",
        "vn": "con trai tôi"
      },
      {
        "zh": "他的儿子",
        "py": "tā de érzi",
        "vn": "con trai của anh ấy"
      },
      {
        "zh": "有儿子",
        "py": "yǒu érzi",
        "vn": "có con trai"
      },
      {
        "zh": "儿子几岁",
        "py": "érzi jǐ suì",
        "vn": "con trai mấy tuổi"
      }
    ],
    "patterns": [
      {
        "s": "người + 儿子",
        "m": "Con trai của ai"
      },
      {
        "s": "儿子 (con trai) ↔ 女儿 (con gái)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy Vương có một người con trai.",
        "answer": "王老师有一个儿子。",
        "answerPy": "Wáng lǎoshī yǒu yí ge érzi.",
        "note": "儿子 — con trai, đối với 女儿.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con trai bạn mấy tuổi rồi?",
        "answer": "你儿子几岁了？",
        "answerPy": "Nǐ érzi jǐ suì le?",
        "note": "了 cho thấy tuổi vừa thay đổi.",
        "pair": "几岁了？"
      }
    ]
  },
  {
    "n": 15,
    "zh": "孩子",
    "py": "háizi",
    "pos": "Danh từ",
    "vn": "con, trẻ con",
    "hv": "hài tử",
    "em": "🧒",
    "lesson": 3,
    "ex_zh": "我有两个孩子。",
    "ex_py": "Wǒ yǒu liǎng gè háizi.",
    "ex_vn": "Tôi có hai con.",
    "exList": [
      {
        "zh": "我有两个孩子。",
        "py": "Wǒ yǒu liǎng gè háizi.",
        "vn": "Tôi có hai con."
      }
    ],
    "hanzi": [
      {
        "c": "孩",
        "p": "hái",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "子(tử) trái → 亥(hợi) phải",
        "rad": "子 (tử – con)",
        "mean": "trẻ con, con",
        "tip": "Bộ Con 子 + 亥 (âm \"hài\") — ghép hình đứa TRẺ NHỎ 子 với âm đọc tạo thành từ chỉ TRẺ CON.",
        "cf": "该 (gāi – \"nên, phải\", cũng có 亥\" nhưng bộ 讠\")",
        "w": "孩子 / 小孩"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "了(biến thể) → 一(ngang)",
        "rad": "子 (tử – tự thành bộ, con)",
        "mean": "con (danh từ); hậu tố danh từ",
        "tip": "Hình ảnh một ĐỨA TRẺ sơ sinh quấn tã, hai tay dang ra — gốc nghĩa là CON, sau này dùng làm hậu tố danh từ (儿子, 孩子…).",
        "cf": "孑 (jié – \"cô độc\", thiếu nét ngang bên phải\")",
        "w": "孩子 / 儿子 / 桌子"
      }
    ],
    "colloFull": [
      {
        "zh": "几个孩子",
        "py": "jǐ gè háizi",
        "vn": "mấy đứa con"
      },
      {
        "zh": "我的孩子",
        "py": "wǒ de háizi",
        "vn": "con của tôi"
      },
      {
        "zh": "孩子们",
        "py": "háizi men",
        "vn": "bọn trẻ"
      },
      {
        "zh": "孩子几岁",
        "py": "háizi jǐ suì",
        "vn": "đứa bé mấy tuổi"
      }
    ],
    "patterns": [
      {
        "s": "số + 个 + 孩子",
        "m": "Lượng từ của 孩子 là 个"
      },
      {
        "s": "孩子 nói chung cả con trai lẫn con gái"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi có hai đứa con.",
        "answer": "我姐姐有两个孩子。",
        "answerPy": "Wǒ jiějie yǒu liǎng ge háizi.",
        "note": "孩子 nói chung cả con trai lẫn con gái.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bọn trẻ đều rất vui.",
        "answer": "孩子们很高兴。",
        "answerPy": "Háizimen hěn gāoxìng.",
        "note": "孩子们 — bọn trẻ.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 16,
    "zh": "女儿",
    "py": "nǚ'ér",
    "pos": "Danh từ",
    "vn": "con gái",
    "hv": "nữ nhi",
    "em": "👧",
    "lesson": 3,
    "ex_zh": "您女儿多大？",
    "ex_py": "Nín nǚ'ér duō dà?",
    "ex_vn": "Con gái chị bao nhiêu tuổi?",
    "exList": [
      {
        "zh": "您女儿多大？",
        "py": "Nín nǚ'ér duō dà?",
        "vn": "Con gái chị bao nhiêu tuổi?"
      }
    ],
    "hanzi": [
      {
        "c": "女",
        "p": "nǚ",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "㇃(nét cong) → 丿(phẩy) → 一(ngang)",
        "rad": "女 (nữ – tự thành bộ, phụ nữ)",
        "mean": "nữ, con gái, phụ nữ",
        "tip": "Hình dáng một NGƯỜI PHỤ NỮ đang quỳ, khoanh tay dịu dàng theo lối vẽ cổ — tượng trưng cho NỮ GIỚI.",
        "cf": "母 (mǔ – \"mẹ\", thêm hai chấm ở giữa)",
        "w": "女儿 / 女的 / 妇女"
      },
      {
        "c": "儿",
        "p": "ér",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "丿(phẩy) → 乚(nét cong móc)",
        "rad": "儿 (nhân – tự thành bộ, chân người)",
        "mean": "con, trẻ nhỏ",
        "tip": "Hình dáng giống đôi CHÂN của một đứa trẻ đang đứng — tượng trưng cho CON, TRẺ NHỎ.",
        "cf": "几 (jǐ – \"mấy\", nét đầu viết theo hướng khác)",
        "w": "女儿 / 儿子 / 儿童"
      }
    ],
    "colloFull": [
      {
        "zh": "我女儿",
        "py": "wǒ nǚ'ér",
        "vn": "con gái tôi"
      },
      {
        "zh": "她的女儿",
        "py": "tā de nǚ'ér",
        "vn": "con gái của cô ấy"
      },
      {
        "zh": "有女儿",
        "py": "yǒu nǚ'ér",
        "vn": "có con gái"
      },
      {
        "zh": "两个女儿",
        "py": "liǎng gè nǚ'ér",
        "vn": "hai người con gái"
      }
    ],
    "patterns": [
      {
        "s": "người + 女儿",
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
        "prompt": "Tôi có hai người con gái.",
        "answer": "我有两个女儿。",
        "answerPy": "Wǒ yǒu liǎng ge nǚ'ér.",
        "note": "女儿 là con gái ruột trong nhà.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Con gái thầy năm nay mấy tuổi ạ?",
        "answer": "老师的女儿今年几岁？",
        "answerPy": "Lǎoshī de nǚ'ér jīnnián jǐ suì?",
        "note": "老师的女儿 — con gái của thầy.",
        "pair": "几岁？"
      }
    ]
  },
  {
    "n": 17,
    "zh": "岁",
    "py": "suì",
    "pos": "Lượng từ",
    "vn": "tuổi",
    "hv": "tuế",
    "em": "🎂",
    "lesson": 3,
    "ex_zh": "他今年五岁。",
    "ex_py": "Tā jīnnián wǔ suì.",
    "ex_vn": "Cháu năm nay năm tuổi.",
    "exList": [
      {
        "zh": "他今年五岁。",
        "py": "Tā jīnnián wǔ suì.",
        "vn": "Cháu năm nay năm tuổi."
      },
      {
        "zh": "您儿子几岁？",
        "py": "Nín érzi jǐ suì?",
        "vn": "Con trai chị mấy tuổi?"
      }
    ],
    "hanzi": [
      {
        "c": "岁",
        "p": "suì",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "山(biến thể) trên → 夕(tịch) dưới",
        "rad": "山 (sơn – núi)",
        "mean": "tuổi (lượng từ đếm tuổi)",
        "tip": "Phần trên giống hình NÚI 山 vững chãi, phần dưới là 夕 (năm tháng trôi qua) — mỗi năm tháng qua đi tích thành TUỔI như núi cao dần.",
        "cf": "岂 (qǐ – \"lẽ nào\", phần trên cũng giống 山\")",
        "w": "岁 / 几岁 / 多大"
      }
    ],
    "colloFull": [
      {
        "zh": "几岁",
        "py": "jǐ suì",
        "vn": "mấy tuổi"
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
      },
      {
        "zh": "今年几岁",
        "py": "jīnnián jǐ suì",
        "vn": "năm nay mấy tuổi"
      }
    ],
    "patterns": [
      {
        "s": "số + 岁",
        "m": "Bao nhiêu tuổi: 她六岁"
      },
      {
        "s": "岁 tự làm lượng từ: ✗ 六个岁 → ✓ 六岁"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi năm tuổi rồi.",
        "answer": "我妹妹五岁了。",
        "answerPy": "Wǒ mèimei wǔ suì le.",
        "note": "了 ở cuối câu cho thấy tuổi vừa thay đổi.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Đứa bé này mấy tuổi?",
        "answer": "这个孩子几岁？",
        "answerPy": "Zhège háizi jǐ suì?",
        "note": "岁 tự làm lượng từ, không thêm 个.",
        "pair": "几岁？"
      }
    ]
  },
  {
    "n": 18,
    "zh": "他",
    "py": "tā",
    "pos": "Đại từ",
    "vn": "anh ấy, cậu ấy, ông ấy",
    "hv": "tha",
    "em": "👨",
    "lesson": 3,
    "ex_zh": "他今年五岁。",
    "ex_py": "Tā jīnnián wǔ suì.",
    "ex_vn": "Cháu năm nay năm tuổi.",
    "exList": [
      {
        "zh": "他今年五岁。",
        "py": "Tā jīnnián wǔ suì.",
        "vn": "Cháu năm nay năm tuổi."
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
        "mean": "anh ấy, nó (đại từ ngôi ba)",
        "tip": "Bộ Người 亻 + 也 (âm \"dã\", cũng nghĩa \"cũng\") — chỉ một NGƯỜI KHÁC ngoài mình đang được nhắc tới = ANH ẤY.",
        "cf": "她 (tā – \"cô ấy\", cùng âm nhưng đổi bộ 女\")",
        "w": "他是 / 他的 / 他们"
      }
    ],
    "colloFull": [
      {
        "zh": "他是",
        "py": "tā shì",
        "vn": "anh ấy là"
      },
      {
        "zh": "他的名字",
        "py": "tā de míngzi",
        "vn": "tên của anh ấy"
      },
      {
        "zh": "他家",
        "py": "tā jiā",
        "vn": "nhà anh ấy"
      },
      {
        "zh": "他也是",
        "py": "tā yě shì",
        "vn": "anh ấy cũng vậy"
      }
    ],
    "patterns": [
      {
        "s": "他 + 是 + danh từ",
        "m": "Anh ấy là …: 他是我哥哥"
      },
      {
        "s": "他 (nam, bộ 亻) ≠ 她 (nữ, bộ 女) — nói giống nhau, viết khác nhau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là anh trai tôi.",
        "answer": "他是我哥哥。",
        "answerPy": "Tā shì wǒ gēge.",
        "note": "他 viết bằng bộ 亻, dùng cho người nam.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà anh ấy có bao nhiêu người?",
        "answer": "他家有多少人？",
        "answerPy": "Tā jiā yǒu duōshao rén?",
        "note": "他家 — nhà anh ấy.",
        "pair": "多少 + N？"
      }
    ]
  },
  {
    "n": 19,
    "zh": "今年",
    "py": "jīnnián",
    "pos": "Danh từ",
    "vn": "năm nay",
    "hv": "kim niên",
    "em": "📅",
    "lesson": 3,
    "ex_zh": "他今年五岁。",
    "ex_py": "Tā jīnnián wǔ suì.",
    "ex_vn": "Cháu năm nay năm tuổi.",
    "exList": [
      {
        "zh": "他今年五岁。",
        "py": "Tā jīnnián wǔ suì.",
        "vn": "Cháu năm nay năm tuổi."
      },
      {
        "zh": "她今年十二。",
        "py": "Tā jīnnián shí'èr.",
        "vn": "Cháu năm nay mười hai tuổi."
      }
    ],
    "hanzi": [
      {
        "c": "今",
        "p": "jīn",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "人(nhân, biến thể) trên → 一乛(gập) dưới",
        "rad": "人 (nhân – người)",
        "mean": "nay, hiện tại",
        "tip": "Phần trên giống người 人 cúi xuống nhìn ngay thứ trước mắt (phần dưới) — chỉ thời điểm NGAY LÚC NÀY, HIỆN NAY.",
        "cf": "令 (lìng – \"ra lệnh\", thêm một nét chấm ở vị trí khác\")",
        "w": "今年 / 今天"
      },
      {
        "c": "年",
        "p": "nián",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "丿(phẩy) → 一(ngang) → 一(ngang) → 丨(sổ) → 一(ngang) → 一(ngang đáy)",
        "rad": "干 (can)",
        "mean": "năm (đơn vị thời gian)",
        "tip": "Chữ tượng hình cách điệu từ hình ảnh người vác bó lúa — mỗi vụ MÙA LÚA thu hoạch xong tương ứng với một NĂM trôi qua.",
        "cf": "午 (wǔ – \"giữa trưa\", thiếu một nét ngang so với 年\")",
        "w": "今年 / 明年 / 去年"
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
      },
      {
        "zh": "今年很忙",
        "py": "jīnnián hěn máng",
        "vn": "năm nay rất bận"
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
        "prompt": "Năm nay tôi hai mươi tuổi.",
        "answer": "我今年二十岁。",
        "answerPy": "Wǒ jīnnián èrshí suì.",
        "note": "今年 đứng sau chủ ngữ hoặc đầu câu.",
        "pair": "……岁"
      },
      {
        "promptLang": "vi",
        "prompt": "Năm nay anh tôi rất bận.",
        "answer": "今年我哥哥很忙。",
        "answerPy": "Jīnnián wǒ gēge hěn máng.",
        "note": "今年 có thể đứng đầu câu.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 20,
    "zh": "多",
    "py": "duō",
    "pos": "Đại từ",
    "vn": "bao nhiêu (phó từ chỉ mức độ)",
    "hv": "đa",
    "em": "📏",
    "lesson": 3,
    "ex_zh": "您女儿多大？",
    "ex_py": "Nín nǚ'ér duō dà?",
    "ex_vn": "Con gái chị bao nhiêu tuổi?",
    "exList": [
      {
        "zh": "您女儿多大？",
        "py": "Nín nǚ'ér duō dà?",
        "vn": "Con gái chị bao nhiêu tuổi?"
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
        "mean": "nhiều",
        "tip": "Hai chữ 夕 (buổi tối) chồng lên nhau — trải qua NHIỀU đêm mới thành số lượng lớn = NHIỀU.",
        "cf": "夕 (xī – \"buổi tối\", chỉ bằng một nửa chữ 多\")",
        "w": "多大 / 多少 / 很多"
      }
    ],
    "colloFull": [
      {
        "zh": "多大",
        "py": "duō dà",
        "vn": "bao nhiêu tuổi"
      },
      {
        "zh": "多少",
        "py": "duōshao",
        "vn": "bao nhiêu"
      },
      {
        "zh": "很多",
        "py": "hěn duō",
        "vn": "rất nhiều"
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
        "prompt": "Nhà cô ấy có rất nhiều người.",
        "answer": "她家有很多人。",
        "answerPy": "Tā jiā yǒu hěn duō rén.",
        "note": "很多 + danh từ — rất nhiều cái gì.",
        "pair": "很多 + N"
      }
    ]
  },
  {
    "n": 21,
    "zh": "大",
    "py": "dà",
    "pos": "Tính từ",
    "vn": "lớn (chỉ tuổi tác)",
    "hv": "đại",
    "em": "📈",
    "lesson": 3,
    "ex_zh": "您女儿多大？",
    "ex_py": "Nín nǚ'ér duō dà?",
    "ex_vn": "Con gái chị bao nhiêu tuổi?",
    "exList": [
      {
        "zh": "您女儿多大？",
        "py": "Nín nǚ'ér duō dà?",
        "vn": "Con gái chị bao nhiêu tuổi? (dùng 多大 để hỏi tuổi người trên 10 tuổi, khác 几岁 dùng cho trẻ dưới 10 tuổi)"
      }
    ],
    "hanzi": [
      {
        "c": "大",
        "p": "dà",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一(ngang) → 丿(phẩy) → ㇏(mác)",
        "rad": "大 (đại – tự thành bộ, lớn)",
        "mean": "to, lớn",
        "tip": "Hình dáng một NGƯỜI dang rộng hai tay hai chân hết cỡ — tư thế thể hiện sự TO LỚN.",
        "cf": "太 (tài – \"quá\", thêm một chấm nhỏ phía dưới\")",
        "w": "多大 / 大人 / 大家"
      }
    ],
    "colloFull": [
      {
        "zh": "多大",
        "py": "duō dà",
        "vn": "bao nhiêu tuổi"
      },
      {
        "zh": "大学生",
        "py": "dàxuéshēng",
        "vn": "sinh viên"
      },
      {
        "zh": "不大",
        "py": "bú dà",
        "vn": "không lớn"
      },
      {
        "zh": "很大",
        "py": "hěn dà",
        "vn": "rất lớn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 多大？",
        "m": "Hỏi tuổi người lớn: 你今年多大？"
      },
      {
        "s": "大 vừa là lớn về kích thước, vừa là lớn về tuổi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh bạn bao nhiêu tuổi rồi?",
        "answer": "你哥哥多大了？",
        "answerPy": "Nǐ gēge duō dà le?",
        "note": "多大了 nghe tự nhiên hơn 多大 trơ.",
        "pair": "多大了？"
      },
      {
        "promptLang": "vi",
        "prompt": "Con trai tôi không lớn lắm, mới năm tuổi.",
        "answer": "我儿子不大，五岁。",
        "answerPy": "Wǒ érzi bú dà, wǔ suì.",
        "note": "不 đặt trước tính từ để phủ định.",
        "pair": "不 + Adj"
      }
    ]
  }
];

var wuData = [
  {img:'✋',label:'五',py:'wǔ',letter:'A'},
  {img:'👦',label:'哥哥',py:'gēge',letter:'B'},
  {img:'🙋',label:'学生',py:'xuésheng',letter:'C'},
  {img:'👴',label:'六十岁',py:'liùshí suì',letter:'D'},
  {img:'🤱',label:'妈妈',py:'māma',letter:'E'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 4: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-4/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Biến điệu 2 âm tiết thanh 3 liên tiếp (214+214 → 35+214)',
          headers: ['Từ/cụm từ', 'Pinyin'],
          rows: [
            ['你好', 'nǐ + hǎo → ní + hǎo'],
            ['哪里', 'nǎ + lǐ → ná + lǐ'],
            ['可以', 'kě + yǐ → ké + yǐ'],
            ['小语', 'Xiǎo + yǔ → Xiáo + yǔ'],
            ['很好', 'hěn + hǎo → hén + hǎo']
          ],
          note: 'Khi 2 âm tiết thanh 3 (ˇ) đứng liền nhau, âm tiết đầu đọc thành thanh 2, tức 214+214→35+214.' },
        { type: 'wordlist', caption: 'Đọc theo, chú ý biến điệu thanh 3',
          items: ['shuǐguǒ', 'nǐ hǎo', 'kěyǐ', 'nǎlǐ', 'hěn hǎo', 'suǒyǐ', 'qǐng nǐ', 'shǒubiǎo'] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/nihao.jpg', py:'nǐ hǎo', hz:'你好'},
          {img:'/images/hsk1v3-bai-4-wb/nali.jpg', py:'nǎlǐ', hz:'哪里'},
          {img:'/images/hsk1v3-bai-4-wb/xiaoyu.jpg', py:'Xiǎoyǔ', hz:'小语'},
          {img:'/images/hsk1v3-bai-4-wb/shuiguo.jpg', py:'shuǐguǒ', hz:'水果'}
        ] },
        { type: 'table', caption: 'Thanh nhẹ (轻声) — cùng từ nhưng khác nghĩa khi đọc thanh nhẹ',
          headers: ['Từ', 'Có thanh điệu rõ', 'Đọc thanh nhẹ'],
          rows: [
            ['东西', 'dōngxī — phương hướng, đông và tây', 'dōngxi — đồ vật'],
            ['买卖', 'mǎi mài — mua và bán', 'mǎimai — việc buôn bán'],
            ['孙子', 'Sūnzǐ — tên riêng, nhà quân sự cổ đại TQ', 'sūnzi — cháu trai']
          ],
          note: 'Ngoài 4 thanh điệu cơ bản, một số âm tiết tiếng Trung đọc nhẹ và ngắn, gọi là thanh nhẹ (轻声), thường không đánh dấu thanh. Ví dụ: jiǎozi, bàba.' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/mama.jpg', py:'māma', hz:'妈妈'},
          {img:'/images/hsk1v3-bai-4-wb/baba.jpg', py:'bàba', hz:'爸爸'},
          {img:'/images/hsk1v3-bai-4-wb/yizi.jpg', py:'yǐzi', hz:'椅子'},
          {img:'/images/hsk1v3-bai-4-wb/jiaozi.jpg', py:'jiǎozi', hz:'饺子'}
        ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/xiexie.jpg', py:'xièxie', hz:'谢谢'},
          {img:'/images/hsk1v3-bai-4-wb/yifu.jpg', py:'yīfu', hz:'衣服'},
          {img:'/images/hsk1v3-bai-4-wb/piaoliang.jpg', py:'piàoliang', hz:'漂亮'},
          {img:'/images/hsk1v3-bai-4-wb/zaoshang.jpg', py:'zǎoshang', hz:'早上'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-4/wb-tingdu.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Nghe và chọn âm tiết nghe được, đọc to',
          items: [
            {before:'', after:'', answer:'pā', options:['pā','bā']},
            {before:'', after:'', answer:'zì', options:['zì','cì']},
            {before:'', after:'', answer:'láng', options:['náng','láng']},
            {before:'', after:'', answer:'jǔ', options:['jǔ','qǔ']},
            {before:'', after:'', answer:'mén', options:['mén','méng']},
            {before:'', after:'', answer:'rù', options:['rù','lù']},
            {before:'', after:'', answer:'kè', options:['kè','rè']},
            {before:'', after:'', answer:'qǐng', options:['qǐn','qǐng']}
          ] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu thanh 3',
          items: ['nǐ hǎo', 'kěyǐ', 'nǎlǐ', 'shuǐguǒ', 'shǒubiǎo', 'suǒyǐ', 'pěngchǎng', 'hǎojiǔ', 'wǎndiǎn', 'liǎojiě', 'xǐzǎo', 'zhíyóu'] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý phát âm thanh nhẹ',
          items: ['bāozi', 'xièxie', 'piányi', 'dìdi', 'piàoliang', 'méi guānxi', 'duìbuqǐ', 'rènshi'] },
        { type: 'wordlist', caption: 'Nghe và phân biệt thanh nhẹ với không thanh nhẹ, đọc theo',
          items: [['Sūnzǐ', 'sūnzi'], ['dōngxī', 'dōngxi'], ['yùnqi', 'yùnqi'], ['Lǎozǐ', 'lǎozi'], ['dìfāng', 'dìfang'], ['mǎmǎhūhū', 'māhu']] }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-4/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q1c.jpg'}
            ], answer: 'B' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'十人', py:'shí rén'},
              {key:'B', text:'20个', py:'èrshí gè'},
              {key:'C', text:'三口人', py:'sān kǒu rén'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'大', py:'dà'},
              {key:'B', text:'12岁', py:'shí\'èr suì'},
              {key:'C', text:'两千', py:'liǎngqiān'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'中国人', py:'Zhōngguó rén'},
              {key:'B', text:'泰国人', py:'Tàiguó rén'},
              {key:'C', text:'法国人', py:'Fǎguó rén'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'安妮', py:'Ānnī'},
              {key:'B', text:'王一飞', py:'Wáng Yīfēi'},
              {key:'C', text:'白家月', py:'Bái Jiāyuè'}
            ], answer: 'C' }
          ],
          reading: [
            { n: 11, prompt: '老师，您好！', promptPy: 'Lǎoshī, nín hǎo!', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '我家有四口人。', promptPy: 'Wǒ jiā yǒu sì kǒu rén.', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 13, prompt: '我哥哥今年20岁。', promptPy: 'Wǒ gēge jīnnián 20 suì.', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '她是谁？', promptPy: 'Tā shì shéi?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'C' },
            { n: 15, prompt: '你是法国人吗？', promptPy: 'Nǐ shì Fǎguó rén ma?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'D' },
            { n: 16, prompt: '您儿子多大？', promptPy: 'Nín érzi duō dà?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'B' },
            { n: 17, prompt: '她工作很（　）。', promptPy: 'Tā gōngzuò hěn ( ).', options: [
              {key:'A', text:'想', py:'xiǎng'},
              {key:'B', text:'忙', py:'máng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：你们好吗？\n女：很好，我们很（　）你。', promptPy: 'Nǐmen hǎo ma? / Hěn hǎo, wǒmen hěn ( ) nǐ.', options: [
              {key:'A', text:'想', py:'xiǎng'},
              {key:'B', text:'忙', py:'máng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我家有三口人，爸爸、妈妈和我。\n★说话人家里有：', promptPy: 'Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ.', options: [
              {key:'A', text:'姐姐', py:'jiějie'},
              {key:'B', text:'三口人', py:'sān kǒu rén'},
              {key:'C', text:'四口人', py:'sì kǒu rén'}
            ], answer: 'B' },
            { n: 20, prompt: '她是法国人，我不是。\n★"她"是：', promptPy: 'Tā shì Fǎguó rén, wǒ bú shì.', options: [
              {key:'A', text:'法国人', py:'Fǎguó rén'},
              {key:'B', text:'中国人', py:'Zhōngguó rén'},
              {key:'C', text:'泰国人', py:'Tàiguó rén'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi thăm công việc',
   preQuiz:[
     {q:'一飞忙不忙？',opts:['很忙','不忙','不知道'],ans:0},
     {q:'她有多少个学生？',opts:['十个','二十个','三十个'],ans:1},
   ],
   lines:[
     {sp:0,zh:'一飞忙吗？',py:'Yīfēi máng ma?',vn:'Nhất Phi có bận không?'},
     {sp:1,zh:'她很忙。',py:'Tā hěn máng.',vn:'Dì ấy rất bận.'},
     {sp:0,zh:'她有多少个学生？',py:'Tā yǒu duōshao gè xuésheng?',vn:'Dì ấy có bao nhiêu học sinh?'},
     {sp:1,zh:'她有二十个学生。',py:'Tā yǒu èrshí gè xuésheng.',vn:'Dì ấy có hai mươi học sinh.'},
   ]},
  {scene:'王一雪和杨同乐聊家庭 · Hỏi thăm gia đình',
   preQuiz:[
     {q:'杨同乐有哥哥吗？',opts:['没有哥哥','有一个哥哥','有两个哥哥'],ans:0},
     {q:'杨同乐家有几口人？',opts:['三口人','四口人','五口人'],ans:1},
   ],
   lines:[
     {sp:0,zh:'我有两个哥哥，你呢？',py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',vn:'Chị có hai anh trai. Em thì sao?'},
     {sp:1,zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Em không có anh trai.'},
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà em có mấy người?'},
     {sp:1,zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {scene:'杨同乐遇见王一雪母子 · Hỏi thăm con cái',
   preQuiz:[
     {q:'王一雪有几个孩子？',opts:['一个','两个','三个'],ans:1},
     {q:'她儿子今年几岁？',opts:['三岁','五岁','七岁'],ans:1},
     {q:'她女儿今年多大？',opts:['十岁','十二岁','十五岁'],ans:1},
   ],
   lines:[
     {sp:1,zh:'这是您儿子吗？',py:'Zhè shì nín érzi ma?',vn:'Đây là con trai chị phải không?'},
     {sp:0,zh:'是的。我有两个孩子，一个儿子，一个女儿。',py:'Shì de. Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.',vn:'Đúng vậy. Chị có hai con, một con trai và một con gái.'},
     {sp:1,zh:'您儿子几岁？',py:'Nín érzi jǐ suì?',vn:'Con trai chị mấy tuổi rồi?'},
     {sp:0,zh:'他今年五岁。',py:'Tā jīnnián wǔ suì.',vn:'Cháu năm nay năm tuổi.'},
     {sp:1,zh:'您女儿多大？',py:'Nín nǚ\'ér duō dà?',vn:'Con gái chị bao nhiêu tuổi?'},
     {sp:0,zh:'她今年十二。',py:'Tā jīnnián shí\'èr.',vn:'Cháu năm nay mười hai tuổi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'多', right:'少'},
  {left:'没', right:'有'},
  {left:'爸', right:'爸'},
  {left:'儿', right:'子'},
  {left:'女', right:'儿'},
  {left:'今', right:'年'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'王一飞老师有', blank:'二十', post:'个学生。', hint:'(20)', ans:'二十'},
  {pre:'杨同乐家有四', blank:'口', post:'人。', hint:'(lượng từ đếm người)', ans:'口'},
  {pre:'王一雪：我有两个孩子，你', blank:'呢', post:'？ 杨同乐：我', ans:'呢'},
  {pre:'杨同乐：我', blank:'没', post:'孩子。', hint:'(không — phủ định của 有)', ans:'没'},
  {pre:'杨同乐：您女儿今年多', blank:'大', post:'？', hint:'(hỏi tuổi người lớn)', ans:'大'},
  {pre:'您儿子', blank:'几', post:'岁？', hint:'(mấy — hỏi tuổi trẻ em)', ans:'几'},
  {pre:'我家有四口人，爸爸、妈妈、妹妹', blank:'和', post:'我。', hint:'(và)', ans:'和'},
  {pre:'我有两个孩子，一个儿子，一个', blank:'女儿', post:'。', hint:'(con gái)', ans:'女儿'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['她','有','二十','个','学生','。'], ans:'她有二十个学生。', audio:'她有二十个学生。'},
  {words:['我','没有','哥哥','。'], ans:'我没有哥哥。', audio:'我没有哥哥。'},
  {words:['你','家','有','几','口','人','？'], ans:'你家有几口人？', audio:'你家有几口人？'},
  {words:['我','有','两个','孩子','。'], ans:'我有两个孩子。', audio:'我有两个孩子。'},
  {words:['他','今年','五','岁','。'], ans:'他今年五岁。', audio:'他今年五岁。'},
  {words:['您','女儿','多','大','？'], ans:'您女儿多大？', audio:'您女儿多大？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Phủ định của "有" (có) là gì?', opts:['没/没有', '不有', '不是', '没是'], ans:0},
  {q:'"你家有几口人？" — "口" ở đây dùng để làm gì?', opts:['Lượng từ đếm người trong gia đình', 'Lượng từ đếm sách', 'Danh từ chỉ cái miệng', 'Động từ ăn uống'], ans:0},
  {q:'"我有两个哥哥，你呢？" — "呢" dùng để làm gì?', opts:['Hỏi lại về tình huống tương tự đã nêu', 'Phủ định câu trước', 'Kết thúc câu trần thuật', 'Nhấn mạnh số nhiều'], ans:0},
  {q:'Hỏi tuổi một em bé dưới 10 tuổi, dùng cụm từ nào?', opts:['几岁', '多大', '多少岁', '几年'], ans:0},
  {q:'Hỏi tuổi một người trên 10 tuổi, dùng cụm từ nào?', opts:['多大', '几岁', '几年', '多少'], ans:0},
  {q:'Số "2" khi đứng trước lượng từ (như 个) được đọc là gì?', opts:['两 (liǎng)', '二 (èr)', 'Cả hai đều được, không phân biệt', '贰 (đại tự)'], ans:0},
  {q:'"我家有四口人，爸爸、妈妈、妹妹和我" — có bao nhiêu người trong câu?', opts:['4', '3', '5', '2'], ans:0},
  {q:'"孩子" và "儿子" khác nhau thế nào?', opts:['孩子 = con nói chung, 儿子 = con trai cụ thể', 'Không khác gì cả', '孩子 chỉ dùng cho con gái', '儿子 chỉ dùng số nhiều'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你家有几口人？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Nhà bạn có mấy người?" Bạn trả lời thế nào?',
     hint: '我家有……口人。', sample: '我家有四口人，爸爸、妈妈、妹妹和我。', sample_vn: 'Nhà tôi có bốn người: bố, mẹ, em gái và tôi.',
     note: 'Cấu trúc "我家有 + số + 口人" dùng để nói số thành viên trong gia đình.'},
    {q_zh: '朋友问你有没有哥哥/姐姐，你怎么回答？', q_vn: 'Bạn của bạn hỏi bạn có anh/chị không, bạn trả lời thế nào?',
     hint: '我有/没有……', sample: '我没有哥哥，我有一个姐姐。', sample_vn: 'Tôi không có anh trai, tôi có một chị gái.',
     note: '没有 là dạng phủ định của 有, dùng để nói "không có".'},
    {q_zh: '有人问你孩子多大了，你怎么回答？', q_vn: 'Có người hỏi con bạn bao nhiêu tuổi rồi, bạn trả lời thế nào?',
     hint: '他/她今年……岁。', sample: '我儿子今年五岁，我女儿今年十二岁。', sample_vn: 'Con trai tôi năm nay năm tuổi, con gái tôi năm nay mười hai tuổi.',
     note: 'Trẻ dưới 10 tuổi hỏi 几岁, trên 10 tuổi hỏi 多大.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô ấy có bao nhiêu học sinh? — Cô ấy có hai mươi học sinh.', zh:'她有多少个学生？——她有二十个学生。', py:'Tā yǒu duōshao gè xuésheng? — Tā yǒu èrshí gè xuésheng.'},
  {vi:'Nhà em có mấy người? — Nhà em có bốn người: bố, mẹ, em gái và em.', zh:'你家有几口人？——我家有四口人，爸爸、妈妈、妹妹和我。', py:'Nǐ jiā yǒu jǐ kǒu rén? — Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.'},
  {vi:'Tôi có hai con, một con trai, một con gái.', zh:'我有两个孩子，一个儿子，一个女儿。', py:'Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.'},
  {vi:'Con trai chị mấy tuổi rồi? — Cháu năm nay năm tuổi.', zh:'您儿子几岁？——他今年五岁。', py:'Nín érzi jǐ suì? — Tā jīnnián wǔ suì.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi có một anh trai, tôi không có em gái.', zh:'我有一个哥哥，我没有妹妹。', py:'Wǒ yǒu yí gè gēge, wǒ méiyǒu mèimei.'},
  {vi:'Giáo viên của tôi có bao nhiêu học sinh, bạn biết không?', zh:'我老师有多少个学生，你知道吗？', py:'Wǒ lǎoshī yǒu duōshao gè xuésheng, nǐ zhīdào ma?'},
  {vi:'Con gái chị bao nhiêu tuổi rồi? — Cháu năm nay mười hai tuổi.', zh:'您女儿多大了？——她今年十二。', py:'Nín nǚ\'ér duō dà le? — Tā jīnnián shí\'èr.'},
  {vi:'Nhà tôi có ba người: bố, mẹ và tôi, không có anh chị em.', zh:'我家有三口人，爸爸、妈妈和我，没有哥哥姐姐。', py:'Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ, méiyǒu gēge jiějie.'},
];
