// ══════════════════════════════════════════
// DATA — HSK1 Bài 14: 她买了不少衣服。
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "东西",
    "py": "dōngxi",
    "pos": "Danh từ",
    "vn": "đồ đạc, đồ dùng, hàng hóa",
    "hv": "đông tây",
    "em": "🛍️",
    "lesson": 1,
    "ex_zh": "我去商店买东西了。",
    "ex_py": "Wǒ qù shāngdiàn mǎi dōngxi le.",
    "ex_vn": "Mình đến cửa hàng để mua đồ.",
    "exList": [
      {
        "zh": "我去商店买东西了。",
        "py": "Wǒ qù shāngdiàn mǎi dōngxi le.",
        "vn": "Mình đến cửa hàng để mua đồ."
      }
    ],
    "hanzi": [
      {
        "c": "东",
        "p": "dōng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "一→丨→𠃌→丶丶",
        "rad": "木 (mộc, biến thể)",
        "mean": "phía đông; đồ vật (trong 东西)",
        "tip": "Mặt trời 日 mọc sau lũy tre 木 → hướng ĐÔNG; ghép với 西 thành \"đông tây\" mở rộng nghĩa ĐỒ VẬT.",
        "cf": "柬 (jiǎn – \"thiệp mời\")",
        "w": "东西 / 买东西"
      },
      {
        "c": "西",
        "p": "xī",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "一→口(biến thể)",
        "rad": "襾 (biến thể)",
        "mean": "phía tây",
        "tip": "Hình cái tổ chim lúc mặt trời lặn phía Tây → HƯỚNG TÂY.",
        "cf": "酉 (yǒu – \"chi dậu\")",
        "w": "东西"
      }
    ],
    "colloFull": [
      {
        "zh": "买东西",
        "py": "mǎi dōngxi",
        "vn": "mua đồ"
      },
      {
        "zh": "好东西",
        "py": "hǎo dōngxi",
        "vn": "đồ tốt"
      },
      {
        "zh": "这些东西",
        "py": "zhèxiē dōngxi",
        "vn": "những thứ này"
      },
      {
        "zh": "很多东西",
        "py": "hěn duō dōngxi",
        "vn": "rất nhiều đồ"
      }
    ],
    "patterns": [
      {
        "s": "买 + 东西",
        "m": "Mua đồ, đi chợ — cụm cố định"
      },
      {
        "s": "东 + 西",
        "m": "Đông và tây ghép lại thành nghĩa đồ đạc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi đi cửa hàng mua đồ.",
        "answer": "今天下午我去商店买东西。",
        "answerPy": "Jīntiān xiàwǔ wǒ qù shāngdiàn mǎi dōngxi.",
        "note": "买东西 — mua đồ, cụm cố định.",
        "pair": "去 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Những thứ này đều là của cô ấy.",
        "answer": "这些东西都是她的。",
        "answerPy": "Zhèxiē dōngxi dōu shì tā de.",
        "note": "都 đứng sau cái nó bao quát.",
        "pair": "都是……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "一点儿",
    "py": "yìdiǎnr",
    "pos": "Số lượng từ",
    "vn": "một ít, một chút",
    "hv": "nhất điểm nhi",
    "em": "🤏",
    "lesson": 1,
    "ex_zh": "我买了一点儿苹果。",
    "ex_py": "Wǒ mǎile yìdiǎnr píngguǒ.",
    "ex_vn": "Mình mua một ít táo.",
    "exList": [
      {
        "zh": "我买了一点儿苹果。",
        "py": "Wǒ mǎile yìdiǎnr píngguǒ.",
        "vn": "Mình mua một ít táo."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "一点儿水",
        "py": "yìdiǎnr shuǐ",
        "vn": "một chút nước"
      },
      {
        "zh": "吃一点儿",
        "py": "chī yìdiǎnr",
        "vn": "ăn một chút"
      },
      {
        "zh": "买一点儿",
        "py": "mǎi yìdiǎnr",
        "vn": "mua một ít"
      },
      {
        "zh": "冷一点儿",
        "py": "lěng yìdiǎnr",
        "vn": "lạnh hơn chút"
      }
    ],
    "patterns": [
      {
        "s": "一点儿 + danh từ",
        "m": "Một chút cái gì: 一点儿水"
      },
      {
        "s": "tính từ + 一点儿",
        "m": "Hơn một chút: 冷一点儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống một chút nước nóng.",
        "answer": "我想喝一点儿热水。",
        "answerPy": "Wǒ xiǎng hē yìdiǎnr rèshuǐ.",
        "note": "一点儿 + danh từ — một chút cái gì.",
        "pair": "一点儿 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay lạnh hơn một chút.",
        "answer": "今天冷一点儿。",
        "answerPy": "Jīntiān lěng yìdiǎnr.",
        "note": "tính từ + 一点儿 — hơn một chút.",
        "pair": "Adj + 一点儿"
      }
    ]
  },
  {
    "n": 3,
    "zh": "苹果",
    "py": "píngguǒ",
    "pos": "Danh từ",
    "vn": "quả táo",
    "hv": "bình quả",
    "em": "🍎",
    "lesson": 1,
    "ex_zh": "我买了一点儿苹果。",
    "ex_py": "Wǒ mǎile yìdiǎnr píngguǒ.",
    "ex_vn": "Mình mua một ít táo.",
    "exList": [
      {
        "zh": "我买了一点儿苹果。",
        "py": "Wǒ mǎile yìdiǎnr píngguǒ.",
        "vn": "Mình mua một ít táo."
      }
    ],
    "hanzi": [
      {
        "c": "苹",
        "p": "píng",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "艹(thảo) trên → 平(bình) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "táo (trong 苹果)",
        "tip": "艹(cây) + 平(mượn âm) → chỉ dùng riêng trong từ TÁO. (果 đã học ở Bài 12)",
        "cf": "平 (píng – \"bằng phẳng\")",
        "w": "苹果"
      }
    ],
    "colloFull": [
      {
        "zh": "买苹果",
        "py": "mǎi píngguǒ",
        "vn": "mua táo"
      },
      {
        "zh": "吃苹果",
        "py": "chī píngguǒ",
        "vn": "ăn táo"
      },
      {
        "zh": "一个苹果",
        "py": "yí gè píngguǒ",
        "vn": "một quả táo"
      },
      {
        "zh": "这些苹果",
        "py": "zhèxiē píngguǒ",
        "vn": "những quả táo này"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 苹果",
        "m": "Lượng từ của 苹果 là 个"
      },
      {
        "s": "苹果 là một loại 水果 (bài 12)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua ba quả táo.",
        "answer": "我想买三个苹果。",
        "answerPy": "Wǒ xiǎng mǎi sān ge píngguǒ.",
        "note": "Lượng từ của 苹果 là 个.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Những quả táo này rất ngon.",
        "answer": "这些苹果很好吃。",
        "answerPy": "Zhèxiē píngguǒ hěn hǎochī.",
        "note": "这些 + danh từ, không thêm lượng từ nữa.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "看见",
    "py": "kànjiàn",
    "pos": "Động từ",
    "vn": "nhìn thấy, trông thấy",
    "hv": "khán kiến",
    "em": "👁️",
    "lesson": 1,
    "ex_zh": "你看见张先生了吗？",
    "ex_py": "Nǐ kànjiàn Zhāng xiānsheng le ma?",
    "ex_vn": "Anh có thấy ông Trương không?",
    "exList": [
      {
        "zh": "你看见张先生了吗？",
        "py": "Nǐ kànjiàn Zhāng xiānsheng le ma?",
        "vn": "Anh có thấy ông Trương không?"
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "看见他",
        "py": "kànjiàn tā",
        "vn": "nhìn thấy anh ấy"
      },
      {
        "zh": "没看见",
        "py": "méi kànjiàn",
        "vn": "không nhìn thấy"
      },
      {
        "zh": "看见车",
        "py": "kànjiàn chē",
        "vn": "nhìn thấy xe"
      },
      {
        "zh": "看见先生",
        "py": "kànjiàn xiānsheng",
        "vn": "nhìn thấy ông ấy"
      }
    ],
    "patterns": [
      {
        "s": "看见 + đối tượng",
        "m": "Nhìn và THẤY được — 见 là kết quả của 看"
      },
      {
        "s": "看 (nhìn) là hành động; 看见 (thấy) là kết quả"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nay tôi nhìn thấy ông Vương.",
        "answer": "今天上午我看见王先生了。",
        "answerPy": "Jīntiān shàngwǔ wǒ kànjiàn Wáng xiānsheng le.",
        "note": "看见 là kết quả của 看.",
        "pair": "看见……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không nhìn thấy con mèo của bạn.",
        "answer": "我没看见你的猫。",
        "answerPy": "Wǒ méi kànjiàn nǐ de māo.",
        "note": "Việc đã qua mà không xảy ra thì dùng 没.",
        "pair": "没 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "先生",
    "py": "xiānsheng",
    "pos": "Danh từ",
    "vn": "ông, ngài",
    "hv": "tiên sinh",
    "em": "🤵",
    "lesson": 2,
    "ex_zh": "你看见张先生了吗？",
    "ex_py": "Nǐ kànjiàn Zhāng xiānsheng le ma?",
    "ex_vn": "Anh có thấy ông Trương không?",
    "exList": [
      {
        "zh": "你看见张先生了吗？",
        "py": "Nǐ kànjiàn Zhāng xiānsheng le ma?",
        "vn": "Anh có thấy ông Trương không?"
      }
    ],
    "hanzi": [
      {
        "c": "先",
        "p": "xiān",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "丿(biến thể) trên → 儿(nhân) dưới",
        "rad": "儿 (nhân – người, biến thể)",
        "mean": "trước, đầu tiên; ông (kính ngữ)",
        "tip": "Hình người bước ra TRƯỚC tiên → ĐẦU TIÊN; 先生 vốn nghĩa \"người sinh ra trước\", dùng gọi ÔNG một cách kính trọng.",
        "cf": "洗 (xǐ – \"rửa\")",
        "w": "先生 / 首先"
      }
    ],
    "colloFull": [
      {
        "zh": "王先生",
        "py": "wáng xiānsheng",
        "vn": "ông Vương"
      },
      {
        "zh": "先生好",
        "py": "xiānsheng hǎo",
        "vn": "chào ông"
      },
      {
        "zh": "先生的车",
        "py": "xiānsheng de chē",
        "vn": "xe của ông ấy"
      },
      {
        "zh": "这个先生",
        "py": "zhège xiānsheng",
        "vn": "ông này"
      }
    ],
    "patterns": [
      {
        "s": "họ + 先生",
        "m": "Cách gọi: 王先生 — ông Vương"
      },
      {
        "s": "先生 (ông) ↔ 小姐 (cô, bài 12)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào ông Vương ạ!",
        "answer": "王先生好！",
        "answerPy": "Wáng xiānsheng hǎo!",
        "note": "Họ + 先生 — cách gọi nam giới.",
        "pair": "……好！"
      },
      {
        "promptLang": "vi",
        "prompt": "Ông ấy biết lái xe.",
        "answer": "这个先生会开车。",
        "answerPy": "Zhège xiānsheng huì kāichē.",
        "note": "会开车 — biết lái xe.",
        "pair": "会 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "开",
    "py": "kāi",
    "pos": "Động từ",
    "vn": "lái (xe), mở, vận hành",
    "hv": "khai",
    "em": "🚦",
    "lesson": 2,
    "ex_zh": "他去学开车了。",
    "ex_py": "Tā qù xué kāi chē le.",
    "ex_vn": "Ông ấy đi học lái xe rồi.",
    "exList": [
      {
        "zh": "他去学开车了。",
        "py": "Tā qù xué kāi chē le.",
        "vn": "Ông ấy đi học lái xe rồi."
      }
    ],
    "hanzi": [
      {
        "c": "开",
        "p": "kāi",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一→廾(biến thể)",
        "rad": "廾 (củng – hai tay, biến thể)",
        "mean": "mở, lái, vận hành",
        "tip": "Hình hai tay 廾 kéo then cửa → MỞ; mở rộng nghĩa \"vận hành, lái (xe)\".",
        "cf": "关 (guān – \"đóng, liên quan\", đã học Bài 1\")",
        "w": "开车"
      }
    ],
    "colloFull": [
      {
        "zh": "开车",
        "py": "kāichē",
        "vn": "lái xe"
      },
      {
        "zh": "开电脑",
        "py": "kāi diànnǎo",
        "vn": "mở máy tính"
      },
      {
        "zh": "开电视",
        "py": "kāi diànshì",
        "vn": "bật tivi"
      },
      {
        "zh": "会开车",
        "py": "huì kāichē",
        "vn": "biết lái xe"
      }
    ],
    "patterns": [
      {
        "s": "开 + 车",
        "m": "Lái xe — cụm cố định"
      },
      {
        "s": "开 vừa là lái, vừa là mở, bật: 开电视"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi biết lái xe.",
        "answer": "我爸爸会开车。",
        "answerPy": "Wǒ bàba huì kāichē.",
        "note": "开车 — lái xe, cụm cố định.",
        "pair": "会 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn bật tivi lên đi.",
        "answer": "你开电视吧。",
        "answerPy": "Nǐ kāi diànshì ba.",
        "note": "开 cũng nghĩa là mở, bật.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 7,
    "zh": "车",
    "py": "chē",
    "pos": "Danh từ",
    "vn": "xe, phương tiện giao thông đường bộ",
    "hv": "xa",
    "em": "🚗",
    "lesson": 2,
    "ex_zh": "他去学开车了。",
    "ex_py": "Tā qù xué kāi chē le.",
    "ex_vn": "Ông ấy đi học lái xe rồi.",
    "exList": [
      {
        "zh": "他去学开车了。",
        "py": "Tā qù xué kāi chē le.",
        "vn": "Ông ấy đi học lái xe rồi."
      }
    ],
    "hanzi": [
      {
        "c": "车",
        "p": "chē",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "一→𠃌→丨",
        "rad": "车 (xa – tự thành bộ)",
        "mean": "xe",
        "tip": "Hình bánh xe nhìn từ trên xuống → XE.",
        "cf": "东 (dōng – \"phía đông\", hình dạng gần giống\")",
        "w": "开车 / 汽车"
      }
    ],
    "colloFull": [
      {
        "zh": "开车",
        "py": "kāichē",
        "vn": "lái xe"
      },
      {
        "zh": "坐车",
        "py": "zuò chē",
        "vn": "đi xe"
      },
      {
        "zh": "我的车",
        "py": "wǒ de chē",
        "vn": "xe của tôi"
      },
      {
        "zh": "车上",
        "py": "chē shàng",
        "vn": "trên xe"
      }
    ],
    "patterns": [
      {
        "s": "坐 / 开 + 车",
        "m": "Ngồi xe, lái xe"
      },
      {
        "s": "车 là chữ tượng hình — nét ngang là trục và bánh xe"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xe của thầy ở phía trước trường.",
        "answer": "老师的车在学校前面。",
        "answerPy": "Lǎoshī de chē zài xuéxiào qiánmiàn.",
        "note": "在 + nơi chốn + 前面.",
        "pair": "在……前面"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta cùng đi xe đến bệnh viện nhé.",
        "answer": "我们坐车去医院吧。",
        "answerPy": "Wǒmen zuò chē qù yīyuàn ba.",
        "note": "坐车 — đi xe.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 8,
    "zh": "回来",
    "py": "huílai",
    "pos": "Động từ",
    "vn": "quay về, trở lại",
    "hv": "hồi lai",
    "em": "↩️",
    "lesson": 2,
    "ex_zh": "40分钟后回来。",
    "ex_py": "Sìshí fēnzhōng hòu huílai.",
    "ex_vn": "40 phút nữa quay lại.",
    "exList": [
      {
        "zh": "40分钟后回来。",
        "py": "Sìshí fēnzhōng hòu huílai.",
        "vn": "40 phút nữa quay lại."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "回来了",
        "py": "huílai le",
        "vn": "về rồi"
      },
      {
        "zh": "几点回来",
        "py": "jǐ diǎn huílai",
        "vn": "mấy giờ về"
      },
      {
        "zh": "不回来",
        "py": "bù huílai",
        "vn": "không về"
      },
      {
        "zh": "明天回来",
        "py": "míngtiān huílai",
        "vn": "mai về"
      }
    ],
    "patterns": [
      {
        "s": "几点 + 回来",
        "m": "Mấy giờ quay về"
      },
      {
        "s": "回来 (về chỗ người nói) ≠ 回去 (về chỗ khác)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về?",
        "answer": "你几点回来？",
        "answerPy": "Nǐ jǐ diǎn huílai?",
        "note": "回来 là về chỗ người nói đang đứng.",
        "pair": "几点……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi về rồi.",
        "answer": "我妈妈回来了。",
        "answerPy": "Wǒ māma huílai le.",
        "note": "了 cho thấy việc vừa xảy ra.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 9,
    "zh": "分钟",
    "py": "fēnzhōng",
    "pos": "Danh từ",
    "vn": "phút (thời lượng)",
    "hv": "phân chung",
    "em": "⏱️",
    "lesson": 2,
    "ex_zh": "40分钟后回来。",
    "ex_py": "Sìshí fēnzhōng hòu huílai.",
    "ex_vn": "40 phút nữa quay lại.",
    "exList": [
      {
        "zh": "40分钟后回来。",
        "py": "Sìshí fēnzhōng hòu huílai.",
        "vn": "40 phút nữa quay lại."
      }
    ],
    "hanzi": [
      {
        "c": "钟",
        "p": "zhōng",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "钅(kim) trái → 中(trung) phải",
        "rad": "钅 (kim – kim loại)",
        "mean": "đồng hồ, phút (thời lượng)",
        "tip": "钅(kim loại, làm chuông đồng hồ) + 中(đúng giờ) → ĐỒNG HỒ, đếm THỜI LƯỢNG. (分 đã học ở Bài 11)",
        "cf": "种 (zhǒng – \"loại, giống\")",
        "w": "分钟 / 钟表"
      }
    ],
    "colloFull": [
      {
        "zh": "十分钟",
        "py": "shífēn zhōng",
        "vn": "mười phút"
      },
      {
        "zh": "几分钟",
        "py": "jǐ fēnzhōng",
        "vn": "mấy phút"
      },
      {
        "zh": "五分钟",
        "py": "wǔ fēnzhōng",
        "vn": "năm phút"
      },
      {
        "zh": "十分钟后",
        "py": "shífēn zhōng hòu",
        "vn": "mười phút sau"
      }
    ],
    "patterns": [
      {
        "s": "số + 分钟",
        "m": "Thời lượng bao nhiêu phút: 十分钟"
      },
      {
        "s": "分钟 (thời lượng) ≠ 分 (điểm phút trên đồng hồ, bài 11)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mười phút sau tôi gọi điện cho bạn.",
        "answer": "十分钟后我给你打电话。",
        "answerPy": "Shí fēnzhōng hòu wǒ gěi nǐ dǎ diànhuà.",
        "note": "分钟 là thời lượng, khác 分 trên đồng hồ.",
        "pair": "……后"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy phút nữa bạn về?",
        "answer": "你几分钟回来？",
        "answerPy": "Nǐ jǐ fēnzhōng huílai?",
        "note": "几分钟 — mấy phút.",
        "pair": "几……？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "后",
    "py": "hòu",
    "pos": "Danh từ",
    "vn": "sau, sau khi",
    "hv": "hậu",
    "em": "⏭️",
    "lesson": 2,
    "ex_zh": "40分钟后回来。",
    "ex_py": "Sìshí fēnzhōng hòu huílai.",
    "ex_vn": "40 phút nữa quay lại.",
    "exList": [
      {
        "zh": "40分钟后回来。",
        "py": "Sìshí fēnzhōng hòu huílai.",
        "vn": "40 phút nữa quay lại."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "十分钟后",
        "py": "shífēn zhōng hòu",
        "vn": "mười phút sau"
      },
      {
        "zh": "吃饭后",
        "py": "chī fàn hòu",
        "vn": "sau khi ăn"
      },
      {
        "zh": "睡觉后",
        "py": "shuì jiào hòu",
        "vn": "sau khi ngủ"
      },
      {
        "zh": "六点后",
        "py": "liù diǎn hòu",
        "vn": "sau sáu giờ"
      }
    ],
    "patterns": [
      {
        "s": "thời gian / động từ + 后",
        "m": "Sau khi …: 吃饭后"
      },
      {
        "s": "前 (trước) ↔ 后 (sau) — cả hai đều đứng SAU"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sau khi ăn cơm tôi thích đọc sách.",
        "answer": "吃饭后我喜欢看书。",
        "answerPy": "Chī fàn hòu wǒ xǐhuan kàn shū.",
        "note": "động từ + 后 — sau khi làm gì.",
        "pair": "……后"
      },
      {
        "promptLang": "vi",
        "prompt": "Sau sáu giờ tôi không làm việc.",
        "answer": "六点后我不工作。",
        "answerPy": "Liù diǎn hòu wǒ bù gōngzuò.",
        "note": "giờ + 后 — sau mấy giờ.",
        "pair": "……后"
      }
    ]
  },
  {
    "n": 11,
    "zh": "衣服",
    "py": "yīfu",
    "pos": "Danh từ",
    "vn": "quần áo",
    "hv": "y phục",
    "em": "👗",
    "lesson": 3,
    "ex_zh": "王方的衣服太漂亮了！",
    "ex_py": "Wáng Fāng de yīfu tài piàoliang le!",
    "ex_vn": "Quần áo của Vương Phương đẹp quá!",
    "exList": [
      {
        "zh": "王方的衣服太漂亮了！",
        "py": "Wáng Fāng de yīfu tài piàoliang le!",
        "vn": "Quần áo của Vương Phương đẹp quá!"
      }
    ],
    "hanzi": [
      {
        "c": "衣",
        "p": "yī",
        "type": "独体字 · Tượng hình",
        "st": 6,
        "ord": "亠→𧘇(biến thể)",
        "rad": "衣 (y – tự thành bộ)",
        "mean": "áo, quần áo",
        "tip": "Hình chiếc áo có cổ và hai vạt xòe ra → ÁO, QUẦN ÁO.",
        "cf": "农 (nóng – \"nông nghiệp\")",
        "w": "衣服"
      },
      {
        "c": "服",
        "p": "fú",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "月(nhục) trái → 𠬝(biến thể) phải",
        "rad": "月 (nhục – thịt, biến thể)",
        "mean": "quần áo; phục vụ",
        "tip": "月(thân thể) + phần biểu thị \"khoác vào\" → thứ khoác lên thân thể = QUẦN ÁO.",
        "cf": "报 (bào – \"báo cáo\")",
        "w": "衣服"
      }
    ],
    "colloFull": [
      {
        "zh": "买衣服",
        "py": "mǎi yīfu",
        "vn": "mua quần áo"
      },
      {
        "zh": "漂亮的衣服",
        "py": "piàoliang de yīfu",
        "vn": "quần áo đẹp"
      },
      {
        "zh": "这些衣服",
        "py": "zhèxiē yīfu",
        "vn": "những bộ quần áo này"
      },
      {
        "zh": "一些衣服",
        "py": "yìxiē yīfu",
        "vn": "một ít quần áo"
      }
    ],
    "patterns": [
      {
        "s": "买 + 衣服",
        "m": "Mua quần áo"
      },
      {
        "s": "衣 + 服",
        "m": "Hai chữ đều nghĩa là áo quần, ghép lại cho đủ từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bộ quần áo này rất đẹp.",
        "answer": "这些衣服很漂亮。",
        "answerPy": "Zhèxiē yīfu hěn piàoliang.",
        "note": "漂亮 nói về quần áo và người.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều mai tôi đi mua quần áo.",
        "answer": "明天下午我去买衣服。",
        "answerPy": "Míngtiān xiàwǔ wǒ qù mǎi yīfu.",
        "note": "买衣服 — mua quần áo.",
        "pair": "去 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "漂亮",
    "py": "piàoliang",
    "pos": "Tính từ",
    "vn": "đẹp, xinh đẹp",
    "hv": "phiêu lượng",
    "em": "✨",
    "lesson": 3,
    "ex_zh": "王方的衣服太漂亮了！",
    "ex_py": "Wáng Fāng de yīfu tài piàoliang le!",
    "ex_vn": "Quần áo của Vương Phương đẹp quá!",
    "exList": [
      {
        "zh": "王方的衣服太漂亮了！",
        "py": "Wáng Fāng de yīfu tài piàoliang le!",
        "vn": "Quần áo của Vương Phương đẹp quá!"
      }
    ],
    "hanzi": [
      {
        "c": "漂",
        "p": "piào",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "氵(thuỷ) trái → 票(phiếu) phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "đẹp (trong 漂亮)",
        "tip": "氵(nước) + 票(nhẹ, bay) → trôi nổi nhẹ nhàng trên nước, mở rộng nghĩa ĐẸP, thanh thoát.",
        "cf": "票 (piào – \"vé\")",
        "w": "漂亮"
      },
      {
        "c": "亮",
        "p": "liàng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "亠(đầu) trên → 冗(biến thể) dưới",
        "rad": "亠 (đầu, biến thể)",
        "mean": "sáng, sáng sủa",
        "tip": "Hình ánh sáng toả ra từ trên cao → SÁNG SỦA, đẹp rạng ngời.",
        "cf": "京 (jīng – \"kinh đô\", đã học Bài 11\")",
        "w": "漂亮"
      }
    ],
    "colloFull": [
      {
        "zh": "很漂亮",
        "py": "hěn piàoliang",
        "vn": "rất đẹp"
      },
      {
        "zh": "太漂亮了",
        "py": "tài piàoliang le",
        "vn": "đẹp quá"
      },
      {
        "zh": "漂亮的衣服",
        "py": "piàoliang de yīfu",
        "vn": "quần áo đẹp"
      },
      {
        "zh": "不漂亮",
        "py": "bú piàoliang",
        "vn": "không đẹp"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 漂亮 + 了",
        "m": "Rất đẹp, đẹp quá"
      },
      {
        "s": "漂亮 nói về người và đồ vật; 好看 nói về cả phim và sách"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con gái cô ấy xinh quá!",
        "answer": "她的女儿太漂亮了！",
        "answerPy": "Tā de nǚ'ér tài piàoliang le!",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ quần áo này không đẹp lắm.",
        "answer": "这些衣服不漂亮。",
        "answerPy": "Zhèxiē yīfu bú piàoliang.",
        "note": "Phủ định tính từ thì bỏ 很.",
        "pair": "不 + Adj"
      }
    ]
  },
  {
    "n": 13,
    "zh": "啊",
    "py": "a",
    "pos": "Trợ từ",
    "vn": "trợ từ ngữ khí cuối câu để khẳng định",
    "hv": "a",
    "em": "💬",
    "lesson": 3,
    "ex_zh": "是啊，她买了不少衣服。",
    "ex_py": "Shì a, tā mǎile bùshǎo yīfu.",
    "ex_vn": "Đúng vậy. Cô ấy mua nhiều quần áo lắm.",
    "exList": [
      {
        "zh": "是啊，她买了不少衣服。",
        "py": "Shì a, tā mǎile bùshǎo yīfu.",
        "vn": "Đúng vậy. Cô ấy mua nhiều quần áo lắm."
      }
    ],
    "hanzi": [
      {
        "c": "啊",
        "p": "a",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "口(khẩu) trái → 阿(biến thể) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "trợ từ khẳng định",
        "tip": "口(miệng) mượn âm 阿 → tiếng thốt ra cuối câu để tăng cảm xúc, khẳng định.",
        "cf": "阿 (ā – \"tiền tố thân mật\")",
        "w": "是啊 / 好啊"
      }
    ],
    "colloFull": [
      {
        "zh": "太漂亮了啊",
        "py": "tài piàoliang le a",
        "vn": "đẹp quá đi"
      },
      {
        "zh": "是啊",
        "py": "shì a",
        "vn": "đúng vậy"
      },
      {
        "zh": "好啊",
        "py": "hǎo a",
        "vn": "được đấy"
      },
      {
        "zh": "是他啊",
        "py": "shì tā a",
        "vn": "hoá ra là anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "câu + 啊",
        "m": "Trợ từ cuối câu, nghe thân mật hơn"
      },
      {
        "s": "是啊 là câu đáp đồng tình rất hay dùng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đúng vậy! Thời tiết hôm nay đẹp quá.",
        "answer": "是啊！今天天气太好了。",
        "answerPy": "Shì a! Jīntiān tiānqì tài hǎo le.",
        "note": "是啊 là câu đáp đồng tình.",
        "pair": "是啊！"
      },
      {
        "promptLang": "vi",
        "prompt": "Hoá ra là thầy ạ!",
        "answer": "是老师啊！",
        "answerPy": "Shì lǎoshī a!",
        "note": "啊 cuối câu nghe thân mật hơn.",
        "pair": "……啊"
      }
    ]
  },
  {
    "n": 14,
    "zh": "少",
    "py": "shǎo",
    "pos": "Tính từ",
    "vn": "ít (不少: nhiều, khá nhiều)",
    "hv": "thiểu",
    "em": "➖",
    "lesson": 3,
    "ex_zh": "她买了不少衣服。",
    "ex_py": "Tā mǎile bùshǎo yīfu.",
    "ex_vn": "Cô ấy mua nhiều quần áo lắm.",
    "exList": [
      {
        "zh": "她买了不少衣服。",
        "py": "Tā mǎile bùshǎo yīfu.",
        "vn": "Cô ấy mua nhiều quần áo lắm."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "很少",
        "py": "hěn shǎo",
        "vn": "rất ít"
      },
      {
        "zh": "不少",
        "py": "bù shǎo",
        "vn": "không ít, khá nhiều"
      },
      {
        "zh": "少一点儿",
        "py": "shǎo yìdiǎnr",
        "vn": "ít đi một chút"
      },
      {
        "zh": "少吃",
        "py": "shǎo chī",
        "vn": "ăn ít lại"
      }
    ],
    "patterns": [
      {
        "s": "不 + 少",
        "m": "不少 KHÔNG phải \"không ít\" cho đủ, mà là \"khá nhiều\""
      },
      {
        "s": "少 ↔ 多",
        "m": "Ít ↔ nhiều"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong nhà tôi có khá nhiều sách tiếng Trung.",
        "answer": "我家有不少汉语书。",
        "answerPy": "Wǒ jiā yǒu bù shǎo Hànyǔ shū.",
        "note": "不少 nghĩa là khá nhiều, không phải không ít.",
        "pair": "不少 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ăn ít lại một chút đi.",
        "answer": "你少吃一点儿吧。",
        "answerPy": "Nǐ shǎo chī yìdiǎnr ba.",
        "note": "少 + động từ — làm ít lại.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 15,
    "zh": "这些",
    "py": "zhèxiē",
    "pos": "Đại từ",
    "vn": "những cái này, những thứ này",
    "hv": "giá ta",
    "em": "📦",
    "lesson": 3,
    "ex_zh": "这些都是王方的东西。",
    "ex_py": "Zhèxiē dōu shì Wáng Fāng de dōngxi.",
    "ex_vn": "Những thứ này đều là đồ của Vương Phương.",
    "exList": [
      {
        "zh": "这些都是王方的东西。",
        "py": "Zhèxiē dōu shì Wáng Fāng de dōngxi.",
        "vn": "Những thứ này đều là đồ của Vương Phương."
      }
    ],
    "hanzi": [],
    "colloFull": [
      {
        "zh": "这些东西",
        "py": "zhèxiē dōngxi",
        "vn": "những thứ này"
      },
      {
        "zh": "这些衣服",
        "py": "zhèxiē yīfu",
        "vn": "những bộ đồ này"
      },
      {
        "zh": "这些人",
        "py": "zhèxiē rén",
        "vn": "những người này"
      },
      {
        "zh": "这些苹果",
        "py": "zhèxiē píngguǒ",
        "vn": "những quả táo này"
      }
    ],
    "patterns": [
      {
        "s": "这些 + danh từ",
        "m": "Những cái này — KHÔNG thêm lượng từ nữa"
      },
      {
        "s": "这些 (những cái này) ↔ 那些 (những cái kia)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Những quyển sách này đều là của thầy.",
        "answer": "这些书都是老师的。",
        "answerPy": "Zhèxiē shū dōu shì lǎoshī de.",
        "note": "这些 + danh từ, không thêm lượng từ.",
        "pair": "都是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Những thứ này bao nhiêu tiền?",
        "answer": "这些东西多少钱？",
        "answerPy": "Zhèxiē dōngxi duōshao qián?",
        "note": "这些东西 — những thứ này.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 16,
    "zh": "都",
    "py": "dōu",
    "pos": "Phó từ",
    "vn": "đều",
    "hv": "đô",
    "em": "🟰",
    "lesson": 3,
    "ex_zh": "这些都是王方的东西。",
    "ex_py": "Zhèxiē dōu shì Wáng Fāng de dōngxi.",
    "ex_vn": "Những thứ này đều là đồ của Vương Phương.",
    "exList": [
      {
        "zh": "这些都是王方的东西。",
        "py": "Zhèxiē dōu shì Wáng Fāng de dōngxi.",
        "vn": "Những thứ này đều là đồ của Vương Phương."
      }
    ],
    "hanzi": [
      {
        "c": "都",
        "p": "dōu",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "者(giả) trái → 阝(ấp) phải",
        "rad": "阝 (ấp – thành ấp, phần phải)",
        "mean": "đều",
        "tip": "者(nhiều người) + 阝(cùng một vùng đất) → mọi người trong một nơi ĐỀU như nhau.",
        "cf": "着 (zhe – \"trợ từ động thái\")",
        "w": "这些都是"
      }
    ],
    "colloFull": [
      {
        "zh": "都是",
        "py": "dōu shì",
        "vn": "đều là"
      },
      {
        "zh": "都很好",
        "py": "dōu hěn hǎo",
        "vn": "đều rất tốt"
      },
      {
        "zh": "都去",
        "py": "dōu qù",
        "vn": "đều đi"
      },
      {
        "zh": "都不是",
        "py": "dōu bú shì",
        "vn": "đều không phải"
      }
    ],
    "patterns": [
      {
        "s": "Sub (số nhiều) + 都 + động từ",
        "m": "都 đứng SAU cái nó bao quát"
      },
      {
        "s": "✗ 都这些书是我的 → ✓ 这些书都是我的"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi đều là học sinh.",
        "answer": "我们都是学生。",
        "answerPy": "Wǒmen dōu shì xuésheng.",
        "note": "都 đứng sau chủ ngữ số nhiều.",
        "pair": "都是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Những bộ quần áo này đều không đẹp.",
        "answer": "这些衣服都不漂亮。",
        "answerPy": "Zhèxiē yīfu dōu bú piàoliang.",
        "note": "都不 — đều không, phủ định toàn bộ.",
        "pair": "都不……"
      }
    ]
  }
];

const wuData = [
  {img:'🍎',label:'苹果',py:'píngguǒ',letter:'A'},
  {img:'🚗',label:'车',py:'chē',letter:'B'},
  {img:'👗',label:'衣服',py:'yīfu',letter:'C'},
  {img:'✨',label:'漂亮',py:'piàoliang',letter:'D'},
  {img:'🛍️',label:'东西',py:'dōngxi',letter:'E'},
  {img:'🤵',label:'先生',py:'xiānsheng',letter:'F'},
];

var dialogData = [
  {scene:'Ở ký túc xá · Đi mua đồ',
   lines:[
     {sp:0,zh:'昨天上午你去哪儿了？',py:'Zuótiān shàngwù nǐ qù nǎr le?',vn:'Sáng hôm qua bạn đi đâu vậy?'},
     {sp:1,zh:'我去商店买东西了。',py:'Wǒ qù shāngdiàn mǎi dōngxi le.',vn:'Mình đến cửa hàng để mua đồ.'},
     {sp:0,zh:'你买什么了？',py:'Nǐ mǎi shénme le?',vn:'Bạn mua gì vậy?'},
     {sp:1,zh:'我买了一点儿苹果。',py:'Wǒ mǎile yìdiǎnr píngguǒ.',vn:'Mình mua một ít táo.'},
   ]},
  {scene:'Trong công ty · Hỏi thăm đồng nghiệp',
   lines:[
     {sp:0,zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
     {sp:1,zh:'看见了，他去学开车了。',py:'Kànjiàn le, tā qù xué kāi chē le.',vn:'Có, ông ấy đi học lái xe rồi.'},
     {sp:0,zh:'他什么时候能回来？',py:'Tā shénme shíhou néng huílai?',vn:'Khi nào ông ấy quay lại?'},
     {sp:1,zh:'40分钟后回来。',py:'Sìshí fēnzhōng hòu huílai.',vn:'40 phút nữa.'},
   ]},
  {scene:'Trước cửa hàng · Khen quần áo',
   lines:[
     {sp:0,zh:'王方的衣服太漂亮了！',py:'Wáng Fāng de yīfu tài piàoliang le!',vn:'Quần áo của Vương Phương đẹp quá!'},
     {sp:1,zh:'是啊，她买了不少衣服。',py:'Shì a, tā mǎile bùshǎo yīfu.',vn:'Đúng vậy. Cô ấy mua nhiều quần áo lắm.'},
     {sp:0,zh:'你买什么了？',py:'Nǐ mǎi shénme le?',vn:'Còn bạn mua những gì?'},
     {sp:1,zh:'我没买，这些都是王方的东西。',py:'Wǒ méi mǎi, zhèxiē dōu shì Wáng Fāng de dōngxi.',vn:'Mình không mua gì cả, những thứ này đều là đồ của Vương Phương.'},
   ]},
];

// Điền từ — đổi đồ vật/tình huống so với bài khoá
var fillData = [
  {pre:'Bạn hỏi hôm qua ai đó đi đâu: “昨天你去',blank:'哪儿',post:'了？”',hint:'(đâu, chỗ nào)',ans:'哪儿'},
  {pre:'Bạn nói mình đi mua đồ: “我去商店买',blank:'东西',post:'了。”',hint:'(đồ đạc, đồ dùng)',ans:'东西'},
  {pre:'Bạn nói mình mua một ít táo: “我买了一点儿',blank:'苹果',post:'。”',hint:'(táo)',ans:'苹果'},
  {pre:'Bạn nói có thấy ai đó: “我',blank:'看见',post:'他了。”',hint:'(nhìn thấy)',ans:'看见'},
  {pre:'Bạn hỏi khi nào ai đó quay lại: “他什么时候',blank:'回来',post:'？”',hint:'(quay về)',ans:'回来'},
  {pre:'Bạn khen quần áo ai đó đẹp: “你的衣服太',blank:'漂亮',post:'了！”',hint:'(đẹp)',ans:'漂亮'},
  {pre:'Bạn nói mua khá nhiều đồ: “我买了不',blank:'少',post:'东西。”',hint:'(不少 = nhiều)',ans:'少'},
  {pre:'Bạn nói những thứ này đều là của mình: “这些',blank:'都',post:'是我的。”',hint:'(đều)',ans:'都'},
];

// Sắp xếp — đổi đồ vật/tình huống so với bài khoá
var sortData = [
  {words:['你','去','商店','买','东西','了','。'],ans:'你去商店买东西了。',audio:'你去商店买东西了。'},
  {words:['我','买','了','一点儿','苹果','。'],ans:'我买了一点儿苹果。',audio:'我买了一点儿苹果。'},
  {words:['我','看见','他','了','。'],ans:'我看见他了。',audio:'我看见他了。'},
  {words:['他','去','学','开车','了','。'],ans:'他去学开车了。',audio:'他去学开车了。'},
  {words:['你','的','衣服','太','漂亮','了','！'],ans:'你的衣服太漂亮了！',audio:'你的衣服太漂亮了！'},
  {words:['这些','都','是','我','的','。'],ans:'这些都是我的。',audio:'这些都是我的。'},
];

var matchData = [
  {left:'昨天上午你去哪儿了？',right:'我去商店买东西了。'},
  {left:'你买什么了？',right:'我买了一点儿苹果。'},
  {left:'你看见张先生了吗？',right:'看见了，他去学开车了。'},
  {left:'他什么时候能回来？',right:'40分钟后回来。'},
  {left:'王方的衣服太漂亮了！',right:'是啊，她买了不少衣服。'},
];

// Trắc nghiệm — trọng tâm 了 (hoàn thành), 都, 不少, không audio
var mcData = [
  {q:'我去商店买东西＿＿。(hành động đã hoàn thành)',opts:['了','吗','呢','吧'],ans:0},
  {q:'我买＿＿一点儿苹果。',opts:['了','吗','呢','吧'],ans:0},
  {q:'Phủ định của "了" (đã làm gì) dùng cấu trúc nào?',opts:['没 + Động từ (bỏ 了)','不 + Động từ + 了','没 + Động từ + 了','别 + Động từ + 了'],ans:0},
  {q:'"40分钟后" nghĩa là gì?',opts:['sau 40 phút','trước 40 phút','trong 40 phút','mỗi 40 phút'],ans:0},
  {q:'"漂亮" nghĩa là gì?',opts:['đẹp, xinh đẹp','xấu','to lớn','nhỏ bé'],ans:0},
  {q:'"不少" nghĩa là gì?',opts:['nhiều, khá nhiều','ít','không có','một ít'],ans:0},
  {q:'"都" nghĩa là gì?',opts:['đều','cũng','rất','quá'],ans:0},
  {q:'"东西" nghĩa là gì?',opts:['đồ đạc, đồ dùng','phương hướng','quần áo','thức ăn'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Anh ấy đi học lái xe rồi"?',opts:['他去学开车了。','他学去开车了。','他开车去学了。','他了去学开车。'],ans:0},
  {q:'"衣服" nghĩa là gì?',opts:['quần áo','giày dép','túi xách','mũ nón'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'昨天上午你去哪儿了？',py:'Zuótiān shàngwù nǐ qù nǎr le?',vn:'Sáng hôm qua bạn đi đâu vậy?'},
      {zh:'我去商店买东西了。',py:'Wǒ qù shāngdiàn mǎi dōngxi le.',vn:'Mình đến cửa hàng để mua đồ.'},
      {zh:'你看见张先生了吗？',py:'Nǐ kànjiàn Zhāng xiānsheng le ma?',vn:'Anh có thấy ông Trương không?'},
      {zh:'他去学开车了。',py:'Tā qù xué kāi chē le.',vn:'Ông ấy đi học lái xe rồi.'},
      {zh:'你的衣服太漂亮了！',py:'Nǐ de yīfu tài piàoliang le!',vn:'Quần áo của bạn đẹp quá!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我买了一点儿＿＿。',frame_py:'Wǒ mǎile yìdiǎnr ___.',vn:'Tôi mua một ít ＿＿.',options:['苹果','水果'],samples:['我买了一点儿苹果。','我买了一点儿水果。']},
      {frame:'我去商店买＿＿了。',frame_py:'Wǒ qù shāngdiàn mǎi ___ le.',vn:'Tôi đến cửa hàng mua ＿＿.',options:['东西','衣服'],samples:['我去商店买东西了。','我去商店买衣服了。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🛍️ Tình huống 1 — Kể lại việc đã làm hôm qua',
       guide:'Bạn kể cho bạn cùng phòng nghe hôm qua mình đã đi đâu và mua gì.',
       structure:['昨天上午你去哪儿了？','我去商店买＿＿了。'],
       sample:'昨天上午你去哪儿了？我去商店买东西了。我买了一点儿苹果。',
       sample_vn:'Sáng hôm qua bạn đi đâu vậy? Mình đến cửa hàng mua đồ. Mình mua một ít táo.',
       note:'了 đặt sau động từ (买了) đánh dấu hành động ĐÃ HOÀN THÀNH — khác với 了 cuối câu ở Bài 5 biểu thị sự THAY ĐỔI tình huống.'},
      {role:'🏢 Tình huống 2 — Hỏi thăm đồng nghiệp vắng mặt',
       guide:'Bạn hỏi đồng nghiệp có thấy một người nào đó không và khi nào họ quay lại.',
       structure:['你看见张先生了吗？','他什么时候能回来？'],
       sample:'你看见张先生了吗？看见了，他去学开车了。他什么时候能回来？40分钟后回来。',
       sample_vn:'Anh có thấy ông Trương không? Có, ông ấy đi học lái xe rồi. Khi nào ông ấy quay lại? 40 phút nữa.',
       note:'"看见了" (đã nhìn thấy) là cách trả lời NGẮN GỌN rất tự nhiên — chỉ cần lặp lại động từ + 了 mà không cần nhắc lại cả câu hỏi.'},
      {role:'✨ Tình huống 3 — Khen ngợi và làm rõ chủ sở hữu',
       guide:'Bạn khen quần áo đẹp của một người bạn, rồi làm rõ rằng những món đồ đó không phải của mình.',
       structure:['你的衣服太漂亮了！','这些都是＿＿的东西。'],
       sample:'你的衣服太漂亮了！是啊，她买了不少衣服。这些都是王方的东西。',
       sample_vn:'Quần áo của bạn đẹp quá! Đúng vậy, cô ấy mua nhiều quần áo lắm. Những thứ này đều là đồ của Vương Phương.',
       note:'"太……了" dùng để KHEN NGỢI với cảm xúc mạnh mẽ — thể hiện sự ngạc nhiên, thán phục, phổ biến hơn "很" khi giao tiếp thân mật.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 14 + ôn lại từ bài 1-13
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi đã mua khá nhiều quần áo.', zh:'我买了不少衣服。', py:'Wǒ mǎile bùshǎo yīfu.'},
  {vi:'Bốn mươi phút sau tôi sẽ về.', zh:'四十分钟后我回来。', py:'Sìshí fēnzhōng hòu wǒ huílái.'},
  {vi:'Những bộ quần áo này đều rất đẹp.', zh:'这些衣服都很漂亮。', py:'Zhèxiē yīfu dōu hěn piàoliang.'},
  {vi:'Những thứ này đều là của bạn tôi.', zh:'这些东西都是我朋友的。', py:'Zhèxiē dōngxi dōu shì wǒ péngyou de.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Những bộ quần áo này đều rất đẹp, tôi đã mua khá nhiều.', zh:'这些衣服都很漂亮，我买了不少。', py:'Zhèxiē yīfu dōu hěn piàoliang, wǒ mǎile bùshǎo.'},
  {vi:'Bốn mươi phút sau, anh ấy đã về.', zh:'四十分钟后，他回来了。', py:'Sìshí fēnzhōng hòu, tā huílái le.'},
  {vi:'Những thứ này đều rất ít, đều là của tôi.', zh:'这些东西都很少，都是我的。', py:'Zhèxiē dōngxi dōu hěn shǎo, dōu shì wǒ de.'},
  {vi:'Ôi! Những bộ quần áo này đều đẹp quá!', zh:'啊！这些衣服都很漂亮！', py:'A! Zhèxiē yīfu dōu hěn piàoliang!'},
];
