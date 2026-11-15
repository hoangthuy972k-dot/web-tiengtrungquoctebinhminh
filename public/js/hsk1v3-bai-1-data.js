// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 1: AI小语，你好！
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "你好",
    "py": "nǐ hǎo",
    "pos": "",
    "vn": "xin chào, chào bạn",
    "hv": "nhĩ hảo",
    "em": "👋",
    "lesson": 1,
    "ex_zh": "AI小语，你好！",
    "ex_py": "AI Xiǎoyǔ, nǐ hǎo!",
    "ex_vn": "Chào cậu, AI Tiểu Ngữ!",
    "exList": [
      {
        "zh": "AI小语，你好！",
        "py": "AI Xiǎoyǔ, nǐ hǎo!",
        "vn": "Chào cậu, AI Tiểu Ngữ!"
      },
      {
        "zh": "王老师，你好！",
        "py": "Wáng lǎoshī, nǐ hǎo!",
        "vn": "Chào cô Vương!"
      }
    ],
    "hanzi": [
      {
        "c": "你",
        "p": "nǐ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 尔(biến thể) phải",
        "rad": "亻(nhân – người)",
        "mean": "anh, chị, bạn (ngôi thứ 2)",
        "tip": "亻(người) đứng cạnh 尔(âm cổ chỉ \"ngươi\") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.",
        "cf": "休 (xiū – \"nghỉ ngơi\", cũng có bộ 亻)",
        "w": "你好 / 你们 / 你是"
      },
      {
        "c": "好",
        "p": "hǎo",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 子(tử) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "tốt, khoẻ",
        "tip": "女(mẹ) + 子(con) → mẹ bồng con là hình ảnh TỐT ĐẸP nhất → nghĩa TỐT.",
        "cf": "她 (tā – \"cô ấy\", cũng bộ 女\")",
        "w": "你好 / 好吗 / 很好"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "你 + 好",
        "m": "Lời chào cơ bản nhất, dùng được với hầu hết mọi người"
      },
      {
        "s": "你好 —— 你好",
        "m": "Người nghe đáp lại cũng bằng 你好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào bạn!",
        "answer": "你好！",
        "answerPy": "Nǐ hǎo!",
        "note": "你好 dùng được với hầu hết mọi người.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Chào bạn! — Chào bạn!",
        "answer": "你好！——你好！",
        "answerPy": "Nǐ hǎo! —— Nǐ hǎo!",
        "note": "Người nghe đáp lại cũng bằng 你好.",
        "pair": "你好 —— 你好"
      }
    ]
  },
  {
    "n": 2,
    "zh": "大家",
    "py": "dàjiā",
    "pos": "Đại từ",
    "vn": "mọi người",
    "hv": "đại gia",
    "em": "👥",
    "lesson": 1,
    "ex_zh": "大家好！",
    "ex_py": "Dàjiā hǎo!",
    "ex_vn": "Chào mọi người!",
    "exList": [
      {
        "zh": "大家好！",
        "py": "Dàjiā hǎo!",
        "vn": "Chào mọi người!"
      }
    ],
    "hanzi": [
      {
        "c": "大",
        "p": "dà",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "一→ノ→乀",
        "rad": "大 (đại)",
        "mean": "to, lớn",
        "tip": "Hình người dang rộng hai tay hai chân → biểu thị sự TO LỚN.",
        "cf": "太 (tài – \"quá\", thêm 1 chấm)",
        "w": "大家 / 大学"
      },
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
        "zh": "大家好",
        "py": "dàjiā hǎo",
        "vn": "chào mọi người"
      },
      {
        "zh": "谢谢大家",
        "py": "xièxie dàjiā",
        "vn": "cảm ơn mọi người"
      }
    ],
    "patterns": [
      {
        "s": "大家 + 好",
        "m": "Chào cả nhóm: 大家好！"
      },
      {
        "s": "大 + 家",
        "m": "Cả (大) nhà (家) — nghĩa mở rộng thành mọi người"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào mọi người!",
        "answer": "大家好！",
        "answerPy": "Dàjiā hǎo!",
        "note": "Chào cả nhóm thì dùng 大家.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn mọi người!",
        "answer": "谢谢大家！",
        "answerPy": "Xièxie dàjiā!",
        "note": "谢谢大家 — cảm ơn mọi người.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 3,
    "zh": "好",
    "py": "hǎo",
    "pos": "Tính từ",
    "vn": "tốt, khoẻ",
    "hv": "hảo",
    "em": "👍",
    "lesson": 1,
    "ex_zh": "老师，您好！",
    "ex_py": "Lǎoshī, nín hǎo!",
    "ex_vn": "Chào cô ạ!",
    "exList": [
      {
        "zh": "老师，您好！",
        "py": "Lǎoshī, nín hǎo!",
        "vn": "Chào cô ạ!"
      },
      {
        "zh": "你们好！",
        "py": "Nǐmen hǎo!",
        "vn": "Chào các bạn!"
      }
    ],
    "hanzi": [
      {
        "c": "好",
        "p": "hǎo",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女(nữ) trái → 子(tử) phải",
        "rad": "女 (nữ – con gái)",
        "mean": "tốt, khoẻ",
        "tip": "女(mẹ) + 子(con) → mẹ bồng con là hình ảnh TỐT ĐẸP nhất → nghĩa TỐT.",
        "cf": "她 (tā – \"cô ấy\", cũng bộ 女\")",
        "w": "你好 / 好吗 / 很好"
      }
    ],
    "colloFull": [
      {
        "zh": "你好",
        "py": "nǐ hǎo",
        "vn": "chào bạn"
      },
      {
        "zh": "大家好",
        "py": "dàjiā hǎo",
        "vn": "chào mọi người"
      },
      {
        "zh": "您好",
        "py": "nín hǎo",
        "vn": "chào ngài"
      },
      {
        "zh": "老师好",
        "py": "lǎoshī hǎo",
        "vn": "chào thầy cô"
      },
      {
        "zh": "你们好",
        "py": "nǐmen hǎo",
        "vn": "chào các bạn"
      }
    ],
    "patterns": [
      {
        "s": "đại từ / cách xưng hô + 好",
        "m": "Đổi phần trước là đổi người được chào"
      },
      {
        "s": "好 nghĩa gốc là tốt, khoẻ; 你好 nghĩa đen là \"bạn khoẻ chứ\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào thầy cô ạ!",
        "answer": "老师好！",
        "answerPy": "Lǎoshī hǎo!",
        "note": "Học sinh Trung Quốc chào thầy cô bằng 老师好.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Chào các bạn!",
        "answer": "你们好！",
        "answerPy": "Nǐmen hǎo!",
        "note": "Đổi phần trước là đổi người được chào.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 4,
    "zh": "学生",
    "py": "xuésheng",
    "pos": "Danh từ",
    "vn": "học sinh, sinh viên",
    "hv": "học sinh",
    "em": "🎓",
    "lesson": 2,
    "ex_zh": "学生们学习打招呼用语。",
    "ex_py": "Xuéshengmen xuéxí dǎzhāohu yòngyǔ.",
    "ex_vn": "Các bạn học sinh học cách chào hỏi.",
    "exList": [
      {
        "zh": "学生们学习打招呼用语。",
        "py": "Xuéshengmen xuéxí dǎzhāohu yòngyǔ.",
        "vn": "Các bạn học sinh học cách chào hỏi."
      }
    ],
    "hanzi": [
      {
        "c": "学",
        "p": "xué",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 8,
        "ord": "⺍ → 冖 → 子",
        "rad": "子 (tử – con)",
        "mean": "học",
        "tip": "Đứa trẻ 子 ngồi dưới mái nhà 冖 để tiếp thu kiến thức → HỌC.",
        "cf": "字 (zì – \"chữ\", cũng có 子\")",
        "w": "学生 / 学习"
      },
      {
        "c": "生",
        "p": "shēng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿→𠂉→⼀→土(biến thể)",
        "rad": "生 (sinh – tự thành bộ)",
        "mean": "sinh ra, sống",
        "tip": "Hình cây cỏ mọc lên khỏi mặt đất → SINH RA, SỐNG; 学生 nghĩa là người đang \"sinh trưởng\" tri thức.",
        "cf": "姓 (xìng – \"họ\")",
        "w": "学生 / 医生 / 先生"
      }
    ],
    "colloFull": [
      {
        "zh": "学生们",
        "py": "xuésheng men",
        "vn": "các học sinh"
      },
      {
        "zh": "好学生",
        "py": "hǎo xuésheng",
        "vn": "học sinh giỏi"
      },
      {
        "zh": "我是学生",
        "py": "wǒ shì xuésheng",
        "vn": "tôi là học sinh"
      }
    ],
    "patterns": [
      {
        "s": "学生 + 们",
        "m": "Thêm 们 thành số nhiều"
      },
      {
        "s": "学 + 生",
        "m": "Người (生) đi học (学)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi là học sinh.",
        "answer": "我是学生。",
        "answerPy": "Wǒ shì xuésheng.",
        "note": "学生 — người đi học.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chào các em học sinh!",
        "answer": "学生们好！",
        "answerPy": "Xuéshengmen hǎo!",
        "note": "学生们 — các học sinh.",
        "pair": "……好！"
      }
    ]
  },
  {
    "n": 5,
    "zh": "们",
    "py": "men",
    "pos": "Hậu tố",
    "vn": "(dùng sau đại từ/danh từ chỉ số nhiều)",
    "hv": "môn",
    "em": "👨‍👩‍👧‍👦",
    "lesson": 2,
    "ex_zh": "学生们",
    "ex_py": "xuéshengmen",
    "ex_vn": "các bạn học sinh",
    "exList": [
      {
        "zh": "学生们",
        "py": "xuéshengmen",
        "vn": "các bạn học sinh"
      },
      {
        "zh": "老师们",
        "py": "lǎoshīmen",
        "vn": "các thầy cô giáo"
      }
    ],
    "hanzi": [
      {
        "c": "们",
        "p": "men",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "亻(nhân) trái → 门(môn) phải",
        "rad": "亻 (nhân – người)",
        "mean": "hậu tố số nhiều (chỉ người)",
        "tip": "亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.",
        "cf": "门 (mén – \"cửa\")",
        "w": "你们好"
      }
    ],
    "colloFull": [
      {
        "zh": "学生们",
        "py": "xuésheng men",
        "vn": "các học sinh"
      },
      {
        "zh": "老师们",
        "py": "lǎoshī men",
        "vn": "các thầy cô"
      },
      {
        "zh": "同学们",
        "py": "tóngxué men",
        "vn": "các bạn học"
      },
      {
        "zh": "你们",
        "py": "nǐmen",
        "vn": "các bạn"
      }
    ],
    "patterns": [
      {
        "s": "danh từ / đại từ chỉ NGƯỜI + 们",
        "m": "Đuôi số nhiều: 学生们 · 同学们"
      },
      {
        "s": "们 chỉ gắn với danh từ chỉ NGƯỜI, không gắn với đồ vật"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào các thầy cô ạ!",
        "answer": "老师们好！",
        "answerPy": "Lǎoshīmen hǎo!",
        "note": "们 gắn sau danh từ chỉ người để thành số nhiều.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn các bạn học!",
        "answer": "谢谢同学们！",
        "answerPy": "Xièxie tóngxuémen!",
        "note": "同学们 — các bạn cùng lớp.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 6,
    "zh": "老师",
    "py": "lǎoshī",
    "pos": "Danh từ",
    "vn": "thầy giáo, cô giáo, giáo viên",
    "hv": "lão sư",
    "em": "🧑‍🏫",
    "lesson": 2,
    "ex_zh": "老师，您好！",
    "ex_py": "Lǎoshī, nín hǎo!",
    "ex_vn": "Chào cô ạ!",
    "exList": [
      {
        "zh": "老师，您好！",
        "py": "Lǎoshī, nín hǎo!",
        "vn": "Chào cô ạ!"
      },
      {
        "zh": "同学们，再见！",
        "py": "Tóngxuémen, zàijiàn!",
        "vn": "Tạm biệt các em!"
      }
    ],
    "hanzi": [
      {
        "c": "老",
        "p": "lǎo",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "土→耂→匕(biến thể)",
        "rad": "老 (lão – tự thành bộ)",
        "mean": "già, lão",
        "tip": "Hình dáng người già chống gậy, tóc dài → GIÀ; 老师 nghĩa là người thầy đáng kính trọng.",
        "cf": "考 (kǎo – \"thi cử\")",
        "w": "老师"
      },
      {
        "c": "师",
        "p": "shī",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "丿→ 帀",
        "rad": "巾 (cân)",
        "mean": "thầy, người dạy",
        "tip": "Hình ảnh người truyền đạt kiến thức một cách có hệ thống → THẦY, SƯ PHỤ.",
        "cf": "帅 (shuài – \"đẹp trai\")",
        "w": "老师 / 律师"
      }
    ],
    "colloFull": [
      {
        "zh": "王老师",
        "py": "Wáng lǎoshī",
        "vn": "thầy Vương"
      },
      {
        "zh": "老师好",
        "py": "lǎoshī hǎo",
        "vn": "chào thầy cô"
      },
      {
        "zh": "老师们",
        "py": "lǎoshī men",
        "vn": "các thầy cô"
      },
      {
        "zh": "谢谢老师",
        "py": "xièxie lǎoshī",
        "vn": "cảm ơn thầy"
      }
    ],
    "patterns": [
      {
        "s": "họ + 老师",
        "m": "Cách gọi thầy cô: 王老师"
      },
      {
        "s": "老 + 师",
        "m": "老 ở đây không mang nghĩa già, chỉ là tiếng đệm kính trọng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào thầy Vương ạ!",
        "answer": "王老师好！",
        "answerPy": "Wáng lǎoshī hǎo!",
        "note": "Họ đứng trước chức danh: 王老师.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn thầy ạ!",
        "answer": "谢谢老师！",
        "answerPy": "Xièxie lǎoshī!",
        "note": "Người được cảm ơn đứng ngay sau 谢谢.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 7,
    "zh": "您",
    "py": "nín",
    "pos": "Đại từ",
    "vn": "ngài, ông, bà (kính ngữ)",
    "hv": "nâm",
    "em": "🙇",
    "lesson": 2,
    "ex_zh": "老师，您好！",
    "ex_py": "Lǎoshī, nín hǎo!",
    "ex_vn": "Chào cô ạ!",
    "exList": [
      {
        "zh": "老师，您好！",
        "py": "Lǎoshī, nín hǎo!",
        "vn": "Chào cô ạ!"
      }
    ],
    "hanzi": [
      {
        "c": "您",
        "p": "nín",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "你(biến thể) trên → 心(tâm) dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "ngài, ông, bà",
        "tip": "你(bạn) trên 心(tấm lòng) → dùng cả TẤM LÒNG kính trọng khi xưng hô = kính ngữ NGÀI.",
        "cf": "你 (nǐ – \"bạn\", không trang trọng)",
        "w": "您好 / 您们(ít dùng)"
      }
    ],
    "colloFull": [
      {
        "zh": "您好",
        "py": "nín hǎo",
        "vn": "chào ngài"
      },
      {
        "zh": "谢谢您",
        "py": "xièxie nín",
        "vn": "cảm ơn ngài"
      }
    ],
    "patterns": [
      {
        "s": "您 + 好",
        "m": "Chào người lớn tuổi, thầy cô, khách"
      },
      {
        "s": "您 = 你 + 心 — thêm bộ Tâm (心) ở dưới cho lễ phép"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào bác ạ!",
        "answer": "您好！",
        "answerPy": "Nín hǎo!",
        "note": "您 mang sắc thái kính trọng.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn ngài ạ!",
        "answer": "谢谢您！",
        "answerPy": "Xièxie nín!",
        "note": "Với người trên thì dùng 您 thay cho 你.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 8,
    "zh": "你们",
    "py": "nǐmen",
    "pos": "Đại từ",
    "vn": "các bạn, các anh, các chị",
    "hv": "nhĩ môn",
    "em": "🫂",
    "lesson": 2,
    "ex_zh": "你们好！",
    "ex_py": "Nǐmen hǎo!",
    "ex_vn": "Chào các bạn!",
    "exList": [
      {
        "zh": "你们好！",
        "py": "Nǐmen hǎo!",
        "vn": "Chào các bạn!"
      },
      {
        "zh": "你好，小语！",
        "py": "Nǐ hǎo, Xiǎoyǔ!",
        "vn": "Chào Tiểu Ngữ!"
      }
    ],
    "hanzi": [
      {
        "c": "你",
        "p": "nǐ",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 尔(biến thể) phải",
        "rad": "亻(nhân – người)",
        "mean": "anh, chị, bạn (ngôi thứ 2)",
        "tip": "亻(người) đứng cạnh 尔(âm cổ chỉ \"ngươi\") → dùng để gọi NGƯỜI ĐANG NÓI CHUYỆN với mình.",
        "cf": "休 (xiū – \"nghỉ ngơi\", cũng có bộ 亻)",
        "w": "你好 / 你们 / 你是"
      },
      {
        "c": "们",
        "p": "men",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "亻(nhân) trái → 门(môn) phải",
        "rad": "亻 (nhân – người)",
        "mean": "hậu tố số nhiều (chỉ người)",
        "tip": "亻(người) đứng cạnh 门(cửa) → nhiều người cùng qua MỘT CÁNH CỬA = biểu thị SỐ NHIỀU.",
        "cf": "门 (mén – \"cửa\")",
        "w": "你们好"
      }
    ],
    "colloFull": [
      {
        "zh": "你们好",
        "py": "nǐmen hǎo",
        "vn": "chào các bạn"
      },
      {
        "zh": "谢谢你们",
        "py": "xièxie nǐmen",
        "vn": "cảm ơn các bạn"
      }
    ],
    "patterns": [
      {
        "s": "你 + 们",
        "m": "Số nhiều của 你"
      },
      {
        "s": "Không có dạng 您们 — chào nhiều người lớn vẫn nói 你们好 hoặc 大家好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào các bạn!",
        "answer": "你们好！",
        "answerPy": "Nǐmen hǎo!",
        "note": "你们 — số nhiều của 你.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn các bạn!",
        "answer": "谢谢你们！",
        "answerPy": "Xièxie nǐmen!",
        "note": "Không có dạng 您们.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 9,
    "zh": "谢谢",
    "py": "xièxie",
    "pos": "Động từ",
    "vn": "cảm ơn",
    "hv": "tạ tạ",
    "em": "🙏",
    "lesson": 3,
    "ex_zh": "谢谢！",
    "ex_py": "Xièxie!",
    "ex_vn": "Cảm ơn!",
    "exList": [
      {
        "zh": "谢谢！",
        "py": "Xièxie!",
        "vn": "Cảm ơn!"
      }
    ],
    "hanzi": [
      {
        "c": "谢",
        "p": "xiè",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "讠(ngôn) trái → 射(xạ) phải",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "cảm ơn, tạ ơn",
        "tip": "讠(lời nói) + 射(bắn ra) → LỜI NÓI bày tỏ lòng biết ơn được gửi ra ngoài.",
        "cf": "榭 (xiè – \"nhà thuỷ tạ\")",
        "w": "谢谢 / 不谢"
      }
    ],
    "colloFull": [
      {
        "zh": "谢谢你",
        "py": "xièxie nǐ",
        "vn": "cảm ơn bạn"
      },
      {
        "zh": "谢谢您",
        "py": "xièxie nín",
        "vn": "cảm ơn ngài"
      },
      {
        "zh": "谢谢大家",
        "py": "xièxie dàjiā",
        "vn": "cảm ơn mọi người"
      },
      {
        "zh": "谢谢老师",
        "py": "xièxie lǎoshī",
        "vn": "cảm ơn thầy"
      }
    ],
    "patterns": [
      {
        "s": "谢谢 + người",
        "m": "Cảm ơn ai — người nhận đứng ngay sau"
      },
      {
        "s": "谢谢 —— 不客气",
        "m": "Cặp đối đáp: cảm ơn — không có gì"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn bạn!",
        "answer": "谢谢你！",
        "answerPy": "Xièxie nǐ!",
        "note": "Cảm ơn ai thì đặt người đó ngay sau 谢谢.",
        "pair": "谢谢 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "— Cảm ơn thầy ạ! — Không có gì!",
        "answer": "谢谢老师！——不客气！",
        "answerPy": "Xièxie lǎoshī! —— Bú kèqi!",
        "note": "Cặp đối đáp quen thuộc.",
        "pair": "谢谢 —— 不客气"
      }
    ]
  },
  {
    "n": 10,
    "zh": "不客气",
    "py": "bú kèqi",
    "pos": "Cụm từ",
    "vn": "đừng khách sáo, không cần khách khí",
    "hv": "bất khách khí",
    "em": "😊",
    "lesson": 3,
    "ex_zh": "不客气！",
    "ex_py": "Bú kèqi!",
    "ex_vn": "Đừng khách sáo!",
    "exList": [
      {
        "zh": "不客气！",
        "py": "Bú kèqi!",
        "vn": "Đừng khách sáo!"
      }
    ],
    "hanzi": [
      {
        "c": "不",
        "p": "bù",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一(ngang) → 丨→ ㇒ → 丶",
        "rad": "一 (nhất)",
        "mean": "không, chẳng, đừng",
        "tip": "Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH điều phía sau.",
        "cf": "布 (bù – \"vải\")",
        "w": "对不起"
      },
      {
        "c": "客",
        "p": "kè",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "宀(miên) trên → 各(các) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "khách",
        "tip": "宀(mái nhà) + 各(mỗi người, mỗi nơi) → người từ nhiều nơi đến ở tạm dưới MỘT MÁI NHÀ = KHÁCH.",
        "cf": "各 (gè – \"mỗi\")",
        "w": "客气 / 不客气"
      },
      {
        "c": "气",
        "p": "qì",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "ノ→一→㇕→一",
        "rad": "气 (khí – tự thành bộ)",
        "mean": "khí, hơi",
        "tip": "Hình dáng luồng khí đang bay lượn → KHÍ; ghép với 客 thành \"khách khí\" nghĩa là giữ ý tứ, khách sáo.",
        "cf": "汽 (qì – \"hơi nước\", thêm bộ 氵\")",
        "w": "客气 / 不客气"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "—— 不客气",
        "m": "Câu đáp khi người khác nói 谢谢"
      },
      {
        "s": "不客气 nghĩa đen: đừng (不) khách sáo (客气)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không có gì!",
        "answer": "不客气！",
        "answerPy": "Bú kèqi!",
        "note": "Câu đáp khi ai đó nói 谢谢 với mình.",
        "pair": "不客气！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Cảm ơn mọi người! — Không có gì!",
        "answer": "谢谢大家！——不客气！",
        "answerPy": "Xièxie dàjiā! —— Bú kèqi!",
        "note": "不客气 nghĩa đen là đừng khách sáo.",
        "pair": "谢谢 —— 不客气"
      }
    ]
  },
  {
    "n": 11,
    "zh": "同学",
    "py": "tóngxué",
    "pos": "Danh từ",
    "vn": "bạn học",
    "hv": "đồng học",
    "em": "🧑‍🎓",
    "lesson": 3,
    "ex_zh": "同学们，再见！",
    "ex_py": "Tóngxuémen, zàijiàn!",
    "ex_vn": "Tạm biệt các em!",
    "exList": [
      {
        "zh": "同学们，再见！",
        "py": "Tóngxuémen, zàijiàn!",
        "vn": "Tạm biệt các em!"
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
      },
      {
        "c": "学",
        "p": "xué",
        "type": "上下结构 · Trên-dưới (giản thể)",
        "st": 8,
        "ord": "⺍ → 冖 → 子",
        "rad": "子 (tử – con)",
        "mean": "học",
        "tip": "Đứa trẻ 子 ngồi dưới mái nhà 冖 để tiếp thu kiến thức → HỌC.",
        "cf": "字 (zì – \"chữ\", cũng có 子\")",
        "w": "学生 / 学习"
      }
    ],
    "colloFull": [
      {
        "zh": "同学们",
        "py": "tóngxué men",
        "vn": "các bạn học"
      },
      {
        "zh": "同学们好",
        "py": "tóngxué men hǎo",
        "vn": "chào các bạn"
      },
      {
        "zh": "好同学",
        "py": "hǎo tóngxué",
        "vn": "bạn học tốt"
      },
      {
        "zh": "我同学",
        "py": "wǒ tóngxué",
        "vn": "bạn cùng lớp của tôi"
      }
    ],
    "patterns": [
      {
        "s": "同学 + 们 + 好",
        "m": "Thầy cô vào lớp hay chào 同学们好"
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
        "prompt": "Cảm ơn bạn cùng lớp của tôi!",
        "answer": "谢谢我同学！",
        "answerPy": "Xièxie wǒ tóngxué!",
        "note": "我同学 — bạn cùng lớp của tôi, lược bỏ 的.",
        "pair": "谢谢 + người"
      }
    ]
  },
  {
    "n": 12,
    "zh": "再见",
    "py": "zàijiàn",
    "pos": "Động từ",
    "vn": "tạm biệt",
    "hv": "tái kiến",
    "em": "👋",
    "lesson": 3,
    "ex_zh": "老师，再见！",
    "ex_py": "Lǎoshī, zàijiàn!",
    "ex_vn": "Tạm biệt cô ạ!",
    "exList": [
      {
        "zh": "老师，再见！",
        "py": "Lǎoshī, zàijiàn!",
        "vn": "Tạm biệt cô ạ!"
      }
    ],
    "hanzi": [
      {
        "c": "再",
        "p": "zài",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "一→冂→土(biến thể)",
        "rad": "冂 (biến thể)",
        "mean": "lại, lần nữa",
        "tip": "Hình ảnh một vật được xếp CHỒNG THÊM một lần nữa lên trên → LẶP LẠI, LẦN NỮA.",
        "cf": "冉 (rǎn – yếu tố Hán cổ)",
        "w": "再见"
      },
      {
        "c": "见",
        "p": "jiàn",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "冂→ㇾ→儿(biến thể)",
        "rad": "见 (kiến – tự thành bộ)",
        "mean": "gặp, nhìn thấy",
        "tip": "Hình con mắt trên đôi chân đang bước tới → NHÌN THẤY, GẶP GỠ.",
        "cf": "贝 (bèi – \"vật báu\")",
        "w": "再见"
      }
    ],
    "colloFull": [],
    "patterns": [
      {
        "s": "再 + 见",
        "m": "Nghĩa đen: gặp (见) lại (再)"
      },
      {
        "s": "再见 —— 再见",
        "m": "Chia tay thì cả hai bên đều nói 再见"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tạm biệt!",
        "answer": "再见！",
        "answerPy": "Zàijiàn!",
        "note": "Dùng khi chia tay, không phân biệt thân sơ.",
        "pair": "再见！"
      },
      {
        "promptLang": "vi",
        "prompt": "— Tạm biệt thầy ạ! — Tạm biệt!",
        "answer": "老师再见！——再见！",
        "answerPy": "Lǎoshī zàijiàn! —— Zàijiàn!",
        "note": "Cả hai bên đều nói 再见.",
        "pair": "再见 —— 再见"
      }
    ]
  },
  {
    "n": 13,
    "zh": "王老师",
    "py": "Wáng lǎoshī",
    "pos": "Danh từ riêng",
    "vn": "cô/thầy Vương",
    "hv": "Vương lão sư",
    "em": "🧑‍🏫",
    "lesson": 1,
    "ex_zh": "AI小语，你好！——王老师，你好！",
    "ex_py": "AI Xiǎoyǔ, nǐ hǎo! — Wáng lǎoshī, nǐ hǎo!",
    "ex_vn": "Chào cậu, AI Tiểu Ngữ! — Chào cô Vương!",
    "exList": [
      {
        "zh": "AI小语，你好！——王老师，你好！",
        "py": "AI Xiǎoyǔ, nǐ hǎo! — Wáng lǎoshī, nǐ hǎo!",
        "vn": "Chào cậu, AI Tiểu Ngữ! — Chào cô Vương!"
      }
    ],
    "hanzi": [
      {
        "c": "王",
        "p": "wáng",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一→一→丨→一",
        "rad": "王 (vương/ngọc – tự thành bộ)",
        "mean": "họ Vương; vua",
        "tip": "Ba nét ngang (trời-người-đất) nối liền bởi một nét sổ → người đứng giữa nối liền cả ba = VUA; cũng dùng làm HỌ Vương.",
        "cf": "玉 (yù – \"ngọc\", thêm 1 chấm)",
        "w": "王老师 / 王先生"
      },
      {
        "c": "老",
        "p": "lǎo",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "土→耂→匕(biến thể)",
        "rad": "老 (lão – tự thành bộ)",
        "mean": "già, lão",
        "tip": "Hình dáng người già chống gậy, tóc dài → GIÀ; 老师 nghĩa là người thầy đáng kính trọng.",
        "cf": "考 (kǎo – \"thi cử\")",
        "w": "老师"
      },
      {
        "c": "师",
        "p": "shī",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "丿→ 帀",
        "rad": "巾 (cân)",
        "mean": "thầy, người dạy",
        "tip": "Hình ảnh người truyền đạt kiến thức một cách có hệ thống → THẦY, SƯ PHỤ.",
        "cf": "帅 (shuài – \"đẹp trai\")",
        "w": "老师 / 律师"
      }
    ],
    "colloFull": [
      {
        "zh": "王老师好",
        "py": "Wáng lǎoshī hǎo",
        "vn": "chào thầy Vương"
      },
      {
        "zh": "谢谢王老师",
        "py": "xièxie Wáng lǎoshī",
        "vn": "cảm ơn thầy Vương"
      }
    ],
    "patterns": [
      {
        "s": "王 + 老师",
        "m": "Họ đứng trước chức danh — ngược với tiếng Việt"
      },
      {
        "s": "王 là một trong những họ phổ biến nhất ở Trung Quốc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào thầy Vương ạ!",
        "answer": "王老师好！",
        "answerPy": "Wáng lǎoshī hǎo!",
        "note": "Họ đứng trước chức danh, ngược với tiếng Việt.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Cảm ơn thầy Vương ạ!",
        "answer": "谢谢王老师！",
        "answerPy": "Xièxie Wáng lǎoshī!",
        "note": "王 là một họ rất phổ biến ở Trung Quốc.",
        "pair": "谢谢 + người"
      }
    ]
  }
];

var wuData = [
  {img:'👋',label:'你好',py:'nǐ hǎo',letter:'A'},
  {img:'🙏',label:'谢谢',py:'xièxie',letter:'B'},
  {img:'😊',label:'不客气',py:'bú kèqi',letter:'C'},
  {img:'👋',label:'再见',py:'zàijiàn',letter:'D'},
  {img:'🧑‍🏫',label:'老师',py:'lǎoshī',letter:'E'},
  {img:'🧑‍🎓',label:'同学',py:'tóngxué',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 1: Ngữ âm)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-1/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Âm tiết tiếng Trung — ví dụ ghép vần',
          headers: ['Thanh mẫu', 'Vận mẫu', 'Thanh điệu', 'Âm tiết', 'Chữ ví dụ'],
          rows: [
            ['b', 'a', '1', 'bā', '八'],
            ['b', 'a', '2', 'bá', '拔'],
            ['b', 'a', '3', 'bǎ', '把'],
            ['b', 'a', '4', 'bà', '爸'],
            ['', 'a', '1', 'ā', '阿'],
            ['', 'a', '2', 'á', '啊']
          ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-1-wb/cha.jpg', py:'chá', hz:'茶'},
          {img:'/images/hsk1v3-bai-1-wb/gou.jpg', py:'gǒu', hz:'狗'},
          {img:'/images/hsk1v3-bai-1-wb/mao.jpg', py:'māo', hz:'猫'},
          {img:'/images/hsk1v3-bai-1-wb/cai.jpg', py:'cài', hz:'菜'},
          {img:'/images/hsk1v3-bai-1-wb/beizi.jpg', py:'bēizi', hz:'杯子'},
          {img:'/images/hsk1v3-bai-1-wb/xuesheng.jpg', py:'xuésheng', hz:'学生'},
          {img:'/images/hsk1v3-bai-1-wb/laoshi.jpg', py:'lǎoshī', hz:'老师'},
          {img:'/images/hsk1v3-bai-1-wb/jidan.jpg', py:'jīdàn', hz:'鸡蛋'}
        ] },
        { type: 'table', caption: 'Thanh mẫu và vận mẫu (1)',
          headers: ['Thanh mẫu (声母)', 'Vận mẫu ghép được (韵母)'],
          rows: [
            ['b, p, m, f', 'a, o, e, i, u, er'],
            ['d, t, n, l', 'ai, ei, ao, ou'],
            ['g, k, h', 'an, en'],
            ['', 'ang, eng, ong']
          ],
          note: 'Lưu ý: chỉ n và l ghép được với vận mẫu "ü"/các vần bắt đầu bằng "ü". Thanh mẫu b, p, f không ghép với "e". Thanh mẫu f, g, k, h không ghép với "i". Vận mẫu "er" luôn đứng riêng một mình, không ghép với thanh mẫu nào.' },
        { type: 'tones' },
        { type: 'table', caption: 'Luyện đọc theo 4 thanh điệu',
          headers: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'],
          rows: [
            ['ā', 'á', 'ǎ', 'à'],
            ['ē', 'é', 'ě', 'è'],
            ['', 'ér', 'ěr', 'èr'],
            ['dā', 'dá', 'dǎ', 'dà'],
            ['kē', 'ké', 'kě', 'kè']
          ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-1-wb/kou.jpg', py:'kǒu', hz:'口'},
          {img:'/images/hsk1v3-bai-1-wb/fan.jpg', py:'fàn', hz:'饭'},
          {img:'/images/hsk1v3-bai-1-wb/he.jpg', py:'hē', hz:'喝'},
          {img:'/images/hsk1v3-bai-1-wb/er.jpg', py:'èr', hz:'二'},
          {img:'/images/hsk1v3-bai-1-wb/nihao.jpg', py:'nǐ hǎo', hz:'你好'},
          {img:'/images/hsk1v3-bai-1-wb/pengyou.jpg', py:'péngyou', hz:'朋友'},
          {img:'/images/hsk1v3-bai-1-wb/mianbao.jpg', py:'miànbāo', hz:'面包'},
          {img:'/images/hsk1v3-bai-1-wb/meimei.jpg', py:'mèimei', hz:'妹妹'},
          {img:'/images/hsk1v3-bai-1-wb/fangjian.jpg', py:'fángjiān', hz:'房间'},
          {img:'/images/hsk1v3-bai-1-wb/baitian.jpg', py:'báitiān', hz:'白天'},
          {img:'/images/hsk1v3-bai-1-wb/fandian.jpg', py:'fàndiàn', hz:'饭店'},
          {img:'/images/hsk1v3-bai-1-wb/diannao.jpg', py:'diànnǎo', hz:'电脑'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-1/wb-tingdu.mp3',
      blocks: [
        { type: 'table', caption: 'Luyện đọc âm tiết theo 4 thanh điệu',
          headers: ['Thanh 1', 'Thanh 2', 'Thanh 3', 'Thanh 4'],
          rows: [
            ['mō', 'mó', 'mǒ', 'mò'],
            ['lōu', 'lóu', 'lǒu', 'lòu'],
            ['fū', 'fú', 'fǔ', 'fù'],
            ['hān', 'hán', 'hǎn', 'hàn'],
            ['dī', 'dí', 'dǐ', 'dì'],
            ['pāng', 'páng', 'pǎng', 'pàng'],
            ['tāo', 'táo', 'tǎo', 'tào'],
            ['gēn', 'gén', 'gěn', 'gèn']
          ] },
        { type: 'blankdrill', caption: 'Nghe và điền thanh mẫu còn thiếu',
          items: [
            {before:'', after:' + à', answer:'d'}, {before:'', after:' + ěi', answer:'g'}, {before:'', after:' + án', answer:'p'}, {before:'', after:' + ù', answer:'b'}, {before:'', after:' + ǎi', answer:'m'},
            {before:'', after:' + ěng', answer:'l'}, {before:'', after:' + ó', answer:'f'}, {before:'', after:' + ǎo', answer:'h'}, {before:'', after:' + óng', answer:'t'}, {before:'', after:' + ěn', answer:'h'},
            {before:'', after:' + ān', answer:'b'}, {before:'', after:' + ōu', answer:'d'}, {before:'', after:' + è', answer:'k'}, {before:'', after:' + ǐ', answer:'n'}, {before:'', after:' + áng', answer:'m'}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn vận mẫu đúng',
          items: [
            {before:'t + ', after:'', answer:'ā', options:['ā','á','ǎ','à']}, {before:'h + ', after:'', answer:'ěn', options:['ēn','én','ěn','èn']}, {before:'m + ', after:'', answer:'āo', options:['āo','áo','ǎo','ào']},
            {before:'d + ', after:'', answer:'ì', options:['ī','í','ǐ','ì']}, {before:'f + ', after:'', answer:'áng', options:['āng','áng','ǎng','àng']}, {before:'d + ', after:'', answer:'ōng', options:['ōng','óng','ǒng','òng']},
            {before:'h + ', after:'', answer:'àn', options:['ān','án','ǎn','àn']}, {before:'g + ', after:'', answer:'ǒu', options:['ōu','óu','ǒu','òu']}, {before:'p + ', after:'', answer:'éng', options:['ēng','éng','ěng','èng']},
            {before:'g + ', after:'', answer:'ē', options:['ē','é','ě','è']}, {before:'k + ', after:'', answer:'āi', options:['āi','ái','ǎi','ài']}, {before:'f + ', after:'', answer:'ēi', options:['ēi','éi','ěi','èi']},
            {before:'n + ', after:'', answer:'ù', options:['ū','ú','ǔ','ù']}, {before:'l + ', after:'', answer:'ěng', options:['ēng','éng','ěng','èng']}, {before:'b + ', after:'', answer:'ō', options:['ō','ó','ǒ','ò']}
          ] },
        { type: 'tonemc', caption: 'Nghe và chọn thanh điệu đúng',
          items: [
            {before:'lao → ', after:'', answer:'lǎo', options:['lāo','láo','lǎo','lào']}, {before:'neng → ', after:'', answer:'néng', options:['nēng','néng','něng','nèng']},
            {before:'ge → ', after:'', answer:'gè', options:['gē','gé','gě','gè']}, {before:'ba → ', after:'', answer:'bā', options:['bā','bá','bǎ','bà']},
            {before:'fen → ', after:'', answer:'fēn', options:['fēn','fén','fěn','fèn']}, {before:'kan → ', after:'', answer:'kàn', options:['kān','kán','kǎn','kàn']},
            {before:'bai → ', after:'', answer:'bái', options:['bāi','bái','bǎi','bài']}, {before:'li → ', after:'', answer:'lǐ', options:['lī','lí','lǐ','lì']},
            {before:'gong → ', after:'', answer:'gōng', options:['gōng','góng','gǒng','gòng']}, {before:'mang → ', after:'', answer:'máng', options:['māng','máng','mǎng','màng']},
            {before:'gou → ', after:'', answer:'gǒu', options:['gōu','góu','gǒu','gòu']}, {before:'hou → ', after:'', answer:'hòu', options:['hōu','hóu','hǒu','hòu']}
          ] },
        { type: 'dialoguepics', caption: 'Xem hình, đọc đúng lời hội thoại',
          items: [
            {img:'/images/hsk1v3-bai-1-wb/dlg1_qianti.jpg', lines:['A: 你好！', 'B: 你好！']},
            {img:'/images/hsk1v3-bai-1-wb/dlg2_babing.jpg', lines:['A: 你好！', 'B: 你们好！']},
            {img:'/images/hsk1v3-bai-1-wb/dlg3_xiexie.jpg', lines:['A: 谢谢！', 'B: 不客气！']}
          ] }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一飞与AI小语打招呼 · Chào hỏi trợ giảng AI',
   preQuiz:[
     {q:'王老师对AI小语说了什么？',opts:['你好','再见','谢谢'],ans:0},
   ],
   lines:[
     {sp:0,zh:'AI小语，你好！',py:'AI Xiǎoyǔ, nǐ hǎo!',vn:'Chào cậu, AI Tiểu Ngữ!'},
     {sp:1,zh:'王老师，你好！',py:'Wáng lǎoshī, nǐ hǎo!',vn:'Chào cô Vương!'},
   ]},
  {scene:'Chào cả lớp trong giờ học',
   preQuiz:[
     {q:'老师怎么和全班打招呼？',opts:['大家好','你们好','同学们好'],ans:0},
     {q:'学生怎么恭敬地向老师问好？',opts:['您好','你好','嗨'],ans:0},
   ],
   lines:[
     {sp:0,zh:'大家好！',py:'Dàjiā hǎo!',vn:'Chào mọi người!'},
     {sp:1,zh:'老师，您好！',py:'Lǎoshī, nín hǎo!',vn:'Chào cô ạ!'},
     {sp:2,zh:'你们好！',py:'Nǐmen hǎo!',vn:'Chào các bạn!'},
     {sp:1,zh:'你好，小语！',py:'Nǐ hǎo, Xiǎoyǔ!',vn:'Chào Tiểu Ngữ!'},
   ]},
  {scene:'Cảm ơn và tạm biệt cuối giờ',
   preQuiz:[
     {q:'别人帮忙后，应该说什么？',opts:['谢谢','你好','再见'],ans:0},
     {q:'怎么回答别人说的"谢谢"？',opts:['不客气','再见','你好'],ans:0},
     {q:'老师最后怎么和大家说再见？',opts:['同学们，再见','大家再见','明天见'],ans:0},
   ],
   lines:[
     {sp:1,zh:'谢谢！',py:'Xièxie!',vn:'Cảm ơn!'},
     {sp:2,zh:'不客气！',py:'Bú kèqi!',vn:'Đừng khách sáo!'},
     {sp:0,zh:'同学们，再见！',py:'Tóngxuémen, zàijiàn!',vn:'Tạm biệt các em!'},
     {sp:1,zh:'老师，再见！',py:'Lǎoshī, zàijiàn!',vn:'Tạm biệt cô ạ!'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'你', right:'好'},
  {left:'大家', right:'好'},
  {left:'谢', right:'谢'},
  {left:'不', right:'客气'},
  {left:'同', right:'学'},
  {left:'再', right:'见'},
  {left:'学', right:'生'},
  {left:'老', right:'师'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — nghe câu (giọng đọc máy) → chọn đáp án
// ══════════════════════════════════════════
var listenData = [
  {audio:'王老师好！',
   questions:[
     {q:'Người nói đang làm gì?', opts:['Cảm ơn cô Vương', 'Chào cô Vương', 'Tạm biệt cô Vương'], ans:1, exp:'Tên người + 好 là câu chào: 王老师好 = chào cô Vương ạ.'},
   ]},
  {audio:'同学们好！——老师好！',
   questions:[
     {q:'Ai nói câu đầu tiên?', opts:['Một học sinh', 'Cô giáo', 'Tiểu Ngữ'], ans:1, exp:'同学们好 = chào các em — cô giáo chào học sinh.'},
     {q:'Học sinh đáp lại thế nào?', opts:['Tạm biệt cô ạ', 'Cảm ơn cô ạ', 'Chào cô ạ'], ans:2, exp:'老师好 = chào cô ạ.'},
   ]},
  {audio:'小语，谢谢！——不客气！',
   questions:[
     {q:'Ai nói “不客气”?', opts:['Tiểu Ngữ', 'Cô giáo', 'Cả lớp'], ans:0, exp:'Người được cảm ơn (小语) đáp lại 不客气.'},
   ]},
  {audio:'大家再见！',
   questions:[
     {q:'Người nói đang làm gì?', opts:['Chào tạm biệt mọi người', 'Chào mọi người khi mới đến', 'Cảm ơn mọi người'], ans:0, exp:'大家 = mọi người; 再见 = tạm biệt.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'Gặp ba người bạn cùng lúc, bạn chào: “', blank:'你们', post:'好！”', hint:'(các bạn — số nhiều)', ans:'你们', exp:'Chào nhiều người bạn dùng 你们好; 你好 chỉ để chào một người.'},
  {pre:'Bước vào lớp, thầy giáo chào cả lớp: “', blank:'大家', post:'好！”', hint:'(mọi người)', ans:'大家', exp:'大家 = mọi người, dùng khi chào cả nhóm, cả lớp.'},
  {pre:'Thầy giáo trả lại vở cho bạn, bạn nói: “谢谢', blank:'老师', post:'！”', hint:'(thầy giáo)', ans:'老师', exp:'谢谢 + người được cảm ơn: 谢谢老师！'},
  {pre:'Cô giáo chào các em học sinh: “学生', blank:'们', post:'好！”', hint:'(số nhiều)', ans:'们', exp:'Thêm 们 sau danh từ chỉ người để chỉ nhiều người: 学生们.'},
  {pre:'Tan học, bạn chào tạm biệt các thầy cô: “', blank:'老师们', post:'，再见！”', hint:'(các thầy cô)', ans:'老师们', exp:'Nhiều thầy cô thì nói 老师们; một thầy/cô thì chỉ nói 老师.'},
  {pre:'Bà của Nhất Phi cho bạn kẹo, bạn cảm ơn lễ phép: “谢谢', blank:'您', post:'！”', hint:'(dạng kính trọng)', ans:'您', exp:'Với người lớn tuổi dùng 您 (kính trọng) thay cho dạng thường.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['谢谢','王老师','！'], ans:'谢谢王老师！', audio:'谢谢王老师！'},
  {words:['老师','，','您','好','！'], ans:'老师，您好！', audio:'老师，您好！', alt:['您好，老师！']},
  {words:['一飞','，','你好','！'], ans:'一飞，你好！', audio:'一飞，你好！', alt:['你好，一飞！']},
  {words:['小语','，','再见','！'], ans:'小语，再见！', audio:'小语，再见！', alt:['再见，小语！']},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM (HSK1 dùng mc thay cho sửa lỗi sai)
// ══════════════════════════════════════════
var mcData = [
  {q:'Gặp một người bạn mới quen, bạn chào thế nào?', opts:['你好！', '再见！', '谢谢！', '不客气！'], ans:0, exp:'你好 là câu chào khi gặp ai đó; 再见 là tạm biệt, 谢谢 là cảm ơn.'},
  {q:'Bạn học cho bạn mượn bút. Bạn nói:', opts:['谢谢！', '不客气！', '你好！', '老师好！'], ans:0, exp:'Được giúp thì nói 谢谢; 不客气 là câu của người được cảm ơn.'},
  {q:'Nhất Phi nói với bạn: “谢谢！” Bạn đáp:', opts:['不客气！', '谢谢！', '您好！', '再见！'], ans:0, exp:'Đáp lời cảm ơn bằng 不客气; nói lại 谢谢 là sai tình huống — lỗi hay gặp.'},
  {q:'Bạn gặp ông hiệu trưởng lớn tuổi. Câu chào lễ phép nhất là:', opts:['您好！', '你们好！', '大家好！', '好您！'], ans:0, exp:'Một người lớn tuổi → dùng 您 (kính trọng); người được chào đứng trước 好.'},
  {q:'Câu nào SAI?', opts:['大家们好！', '你们好！', '同学们好！', '老师们好！'], ans:0, exp:'大家 đã có nghĩa là “mọi người” nên không thêm 们 — lỗi rất hay gặp.'},
  {q:'Bạn muốn nói “Chào thầy ạ!” với một thầy giáo. Câu đúng là:', opts:['老师好！', '好老师！', '老师们好！', '好老师们！'], ans:0, exp:'Người được chào đứng TRƯỚC 好: 老师好. Nói theo tiếng Việt “chào thầy” thành 好老师 là sai trật tự.'},
  {q:'Hết giờ học, cô giáo nói: “同学们，再见！” Bạn đáp:', opts:['老师，再见！', '老师，你好！', '不客气！', '再见，同学们！'], ans:0, exp:'Người khác chào tạm biệt thì mình đáp 再见, gọi người nghe là 老师.'},
  {q:'Tiểu Ngữ và Nhất Phi cùng giúp bạn. Bạn cảm ơn cả hai:', opts:['谢谢你们！', '谢谢大家们！', '你们谢谢！', '谢谢您们！'], ans:0, exp:'Hai người trở lên → 你们; người được cảm ơn đứng SAU 谢谢.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn nút loa nghe câu người kia nói, rồi tự ghi âm câu đáp của bạn.',
  questions: [
    {q_zh: '谢谢大家！', q_vn: 'Thầy giáo cảm ơn cả lớp đã giúp thầy. Bạn thay mặt cả lớp đáp lại.',
     hint: '（đáp lời cảm ơn）', sample: '不客气！', sample_vn: 'Không có gì ạ!',
     note: 'Dù người cảm ơn là thầy cô, câu đáp vẫn là 不客气.'},
    {q_zh: '你好！', q_vn: 'Bạn gặp cô Vương ở sân trường, cô chào bạn trước. Hãy chào lại thật lễ phép.',
     hint: '王老师，……！', sample: '王老师，您好！', sample_vn: 'Chào cô Vương ạ!',
     note: 'Với thầy cô dùng 您 (kính trọng); thầy cô chào học sinh thì dùng 你好.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chào Tiểu Ngữ! — Chào cậu!', zh:'小语，你好！——你好！', py:'Xiǎoyǔ, nǐ hǎo! — Nǐ hǎo!'},
  {vi:'Chào các em! — Chào thầy ạ!', zh:'你们好！——老师好！', py:'Nǐmen hǎo! — Lǎoshī hǎo!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Em cảm ơn cô ạ! — Không có gì!', zh:'老师，谢谢！——不客气！', py:'Lǎoshī, xièxie! — Bú kèqi!'},
  {vi:'Chào ông ạ! — Chào cháu!', zh:'您好！——你好！', py:'Nín hǎo! — Nǐ hǎo!'},
];
