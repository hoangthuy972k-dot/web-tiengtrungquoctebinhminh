// ══════════════════════════════════════════
// DATA — Bài 5: 就买这件吧
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "外面",
    "py": "wàimiàn",
    "pos": "Danh từ",
    "vn": "bên ngoài",
    "hv": "ngoại diện",
    "em": "🌳",
    "lesson": 1,
    "ex_zh": "我不想去外面吃。",
    "ex_py": "Wǒ bù xiǎng qù wàimian chī.",
    "ex_vn": "Tôi không muốn ra ngoài ăn.",
    "exList": [
      {
        "zh": "我不想去外面吃。",
        "py": "Wǒ bù xiǎng qù wàimian chī.",
        "vn": "Tôi không muốn ra ngoài ăn."
      },
      {
        "zh": "外面在下雨。",
        "py": "Wàimian zài xià yǔ.",
        "vn": "Bên ngoài đang mưa."
      },
      {
        "zh": "孩子在外面玩儿。",
        "py": "Háizi zài wàimian wánr.",
        "vn": "Bọn trẻ đang chơi bên ngoài."
      }
    ],
    "hanzi": [
      {
        "c": "外",
        "p": "wài",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "夕 (tịch) trái → 卜 (bốc) phải",
        "rad": "夕 (tịch – buổi tối)",
        "mean": "ngoài, bên ngoài",
        "tip": "Đã học ở Bài 6 dạng đơn (门外) — 外 ghép với 面 (mặt) = phía mặt ngoài.",
        "cf": "处 (chù – \"nơi chốn\")",
        "w": "外面 / 外国 / 门外"
      },
      {
        "c": "面",
        "p": "miàn",
        "type": "独体字 · Chữ đơn",
        "st": 9,
        "ord": "一→フ→丨→ 三 ngang giữa",
        "rad": "面 (diện – tự thành bộ)",
        "mean": "mặt, mặt phẳng; mì",
        "tip": "Hình khuôn mặt cách điệu → nghĩa \"MẶT, bề mặt\". 外 + 面 = mặt phía ngoài.",
        "cf": "画 (huà – \"vẽ\")",
        "w": "外面 / 里面 / 面条"
      }
    ],
    "colloFull": [
      {
        "zh": "外面很冷",
        "py": "wàimian hěn lěng",
        "vn": "bên ngoài rất lạnh"
      },
      {
        "zh": "在外面",
        "py": "zài wàimian",
        "vn": "ở bên ngoài"
      },
      {
        "zh": "外面下雨",
        "py": "wàimian xià yǔ",
        "vn": "bên ngoài mưa"
      },
      {
        "zh": "到外面去",
        "py": "dào wàimian qù",
        "vn": "ra bên ngoài"
      }
    ],
    "patterns": [
      {
        "s": "在 + 外面",
        "m": "Ở bên ngoài: 他在外面"
      },
      {
        "s": "外面 ↔ 里面 — ngoài và trong"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài rất lạnh, bạn ở nhà nghỉ đi.",
        "answer": "外面很冷，你在家休息吧。",
        "answerPy": "Wàimiàn hěn lěng, nǐ zài jiā xiūxi ba.",
        "note": "外面 ↔ 里面 — ngoài và trong.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài mưa rồi, tối nay tôi không ra ngoài.",
        "answer": "外面下雨了，今天晚上我不去外面。",
        "answerPy": "Wàimiàn xià yǔ le, jīntiān wǎnshang wǒ bú qù wàimiàn.",
        "note": "了 cuối câu báo tình hình đã đổi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 2,
    "zh": "准备",
    "py": "zhǔnbèi",
    "pos": "Động từ",
    "vn": "chuẩn bị",
    "hv": "chuẩn bị",
    "em": "📝",
    "lesson": 1,
    "ex_zh": "你准备做什么呢？",
    "ex_py": "Nǐ zhǔnbèi zuò shénme ne?",
    "ex_vn": "Bạn chuẩn bị làm gì vậy?",
    "exList": [
      {
        "zh": "你准备做什么呢？",
        "py": "Nǐ zhǔnbèi zuò shénme ne?",
        "vn": "Bạn chuẩn bị làm gì vậy?"
      },
      {
        "zh": "我准备去北京旅游。",
        "py": "Wǒ zhǔnbèi qù Běijīng lǚyóu.",
        "vn": "Tôi định đi Bắc Kinh du lịch."
      },
      {
        "zh": "她正在准备晚饭。",
        "py": "Tā zhèngzài zhǔnbèi wǎnfàn.",
        "vn": "Cô ấy đang chuẩn bị bữa tối."
      }
    ],
    "hanzi": [
      {
        "c": "准",
        "p": "zhǔn",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "冫(băng) trái → 隹 (chuy) phải",
        "rad": "冫(băng – nước đá)",
        "mean": "chuẩn, cho phép",
        "tip": "Liên quan tới sự \"chuẩn xác, sẵn sàng\" cho việc gì đó.",
        "cf": "淮 (huái – \"sông Hoài\", bộ 氵)",
        "w": "准备 / 准时 / 标准"
      },
      {
        "c": "备",
        "p": "bèi",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "夂→田→丨",
        "rad": "夂",
        "mean": "chuẩn bị, đầy đủ",
        "tip": "准 (chuẩn xác) + 备 (đầy đủ) = sắp xếp đầy đủ, sẵn sàng = CHUẨN BỊ.",
        "cf": "各 (gè – \"mỗi\")",
        "w": "准备 / 设备 / 备用"
      }
    ],
    "colloFull": [
      {
        "zh": "准备考试",
        "py": "zhǔnbèi kǎoshì",
        "vn": "chuẩn bị thi"
      },
      {
        "zh": "准备好了",
        "py": "zhǔnbèi hǎo le",
        "vn": "chuẩn bị xong rồi"
      },
      {
        "zh": "准备做菜",
        "py": "zhǔnbèi zuò cài",
        "vn": "chuẩn bị nấu ăn"
      },
      {
        "zh": "准备一下",
        "py": "zhǔnbèi yíxià",
        "vn": "chuẩn bị một chút"
      }
    ],
    "patterns": [
      {
        "s": "准备 + động từ",
        "m": "Chuẩn bị làm gì: 准备考试"
      },
      {
        "s": "准备 vừa là chuẩn bị, vừa là dự định: 我准备明天去"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đang chuẩn bị kỳ thi tiếng Trung.",
        "answer": "我在准备汉语考试。",
        "answerPy": "Wǒ zài zhǔnbèi Hànyǔ kǎoshì.",
        "note": "在 + động từ — đang làm việc gì.",
        "pair": "在 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ chuẩn bị nấu ăn rồi.",
        "answer": "妈妈准备做菜了。",
        "answerPy": "Māma zhǔnbèi zuò cài le.",
        "note": "准备 vừa là chuẩn bị, vừa là dự định.",
        "pair": "准备 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "就",
    "py": "jiù",
    "pos": "Phó từ",
    "vn": "thì, liền, chính",
    "hv": "tựu",
    "em": "👉",
    "lesson": 1,
    "ex_zh": "就做你爱吃的鱼吧。",
    "ex_py": "Jiù zuò nǐ ài chī de yú ba.",
    "ex_vn": "Vậy thì làm món cá anh thích ăn nhất đi.",
    "exList": [
      {
        "zh": "就做你爱吃的鱼吧。",
        "py": "Jiù zuò nǐ ài chī de yú ba.",
        "vn": "Vậy thì làm món cá anh thích ăn nhất đi."
      },
      {
        "zh": "我就住在这儿。",
        "py": "Wǒ jiù zhù zài zhèr.",
        "vn": "Tôi ở ngay đây thôi."
      },
      {
        "zh": "他一说我就明白了。",
        "py": "Tā yì shuō wǒ jiù míngbai le.",
        "vn": "Anh ấy vừa nói là tôi hiểu ngay."
      }
    ],
    "hanzi": [
      {
        "c": "就",
        "p": "jiù",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "京 (kinh) trái → 尤 (vưu) phải",
        "rad": "尤 (vưu)",
        "mean": "thì, liền; đến gần",
        "tip": "京 (nơi cao lớn) + 尤 (đặc biệt) → tiến gần tới, hoàn thành NGAY, dùng để nối ý quyết định nhanh.",
        "cf": "鹫 (jiù – \"chim ưng\")",
        "w": "就是 / 就去 / 那就"
      }
    ],
    "colloFull": [
      {
        "zh": "就来",
        "py": "jiù lái",
        "vn": "đến ngay"
      },
      {
        "zh": "就在这儿",
        "py": "jiù zài zhèr",
        "vn": "ngay ở đây"
      },
      {
        "zh": "吃了就去",
        "py": "chī le jiù qù",
        "vn": "ăn xong là đi"
      },
      {
        "zh": "就是他",
        "py": "jiù shì tā",
        "vn": "chính là anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 就 + động từ",
        "m": "Làm ngay, làm sớm: 我就来"
      },
      {
        "s": "就 (sớm hơn nghĩ) — 他五点就来了 = anh ấy đến sớm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ăn cơm xong là tôi đi học ngay.",
        "answer": "我吃了饭就去学校。",
        "answerPy": "Wǒ chīle fàn jiù qù xuéxiào.",
        "note": "Việc trước xong, việc sau làm ngay.",
        "pair": "V了……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy năm giờ đã đến rồi.",
        "answer": "他五点就来了。",
        "answerPy": "Tā wǔ diǎn jiù lái le.",
        "note": "就 = sớm hơn mình nghĩ.",
        "pair": "就……了"
      }
    ]
  },
  {
    "n": 4,
    "zh": "鱼",
    "py": "yú",
    "pos": "Danh từ",
    "vn": "cá",
    "hv": "ngư",
    "em": "🐟",
    "lesson": 1,
    "ex_zh": "我最喜欢吃鱼。",
    "ex_py": "Wǒ zuì xǐhuan chī yú.",
    "ex_vn": "Tôi thích ăn cá nhất.",
    "exList": [
      {
        "zh": "我最喜欢吃鱼。",
        "py": "Wǒ zuì xǐhuan chī yú.",
        "vn": "Tôi thích ăn cá nhất."
      },
      {
        "zh": "这条鱼很新鲜。",
        "py": "Zhè tiáo yú hěn xīnxiān.",
        "vn": "Con cá này rất tươi."
      },
      {
        "zh": "他不喜欢吃鱼。",
        "py": "Tā bù xǐhuan chī yú.",
        "vn": "Anh ấy không thích ăn cá."
      }
    ],
    "hanzi": [
      {
        "c": "鱼",
        "p": "yú",
        "type": "独体字 · Tượng hình",
        "st": 8,
        "ord": "ク→田→一→一→灬 (biến thể)",
        "rad": "鱼 (ngư – tự thành bộ)",
        "mean": "cá",
        "tip": "Hình con cá với đầu, thân vảy và đuôi cách điệu → \"CÁ\".",
        "cf": "渔 (yú – \"đánh cá\", thêm bộ 氵)",
        "w": "吃鱼 / 鱼肉 / 金鱼"
      }
    ],
    "colloFull": [
      {
        "zh": "吃鱼",
        "py": "chī yú",
        "vn": "ăn cá"
      },
      {
        "zh": "买鱼",
        "py": "mǎi yú",
        "vn": "mua cá"
      },
      {
        "zh": "一条鱼",
        "py": "yì tiáo yú",
        "vn": "một con cá"
      },
      {
        "zh": "做鱼",
        "py": "zuò yú",
        "vn": "làm món cá"
      }
    ],
    "patterns": [
      {
        "s": "một + 条 + 鱼",
        "m": "Lượng từ của 鱼 là 条"
      },
      {
        "s": "鱼 là chữ tượng hình — vẽ hình con cá"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con cá này là chồng tôi mua.",
        "answer": "这条鱼是我丈夫买的。",
        "answerPy": "Zhè tiáo yú shì wǒ zhàngfu mǎi de.",
        "note": "Lượng từ của 鱼 là 条.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi cực kỳ thích ăn cá.",
        "answer": "我非常喜欢吃鱼。",
        "answerPy": "Wǒ fēicháng xǐhuan chī yú.",
        "note": "非常 mạnh hơn 很.",
        "pair": "非常 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "件",
    "py": "jiàn",
    "pos": "Lượng từ",
    "vn": "chiếc, cái, kiện (quần áo)",
    "hv": "kiện",
    "em": "👕",
    "lesson": 2,
    "ex_zh": "这件衣服很漂亮。",
    "ex_py": "Zhè jiàn yīfu hěn piàoliang.",
    "ex_vn": "Chiếc áo này rất đẹp.",
    "exList": [
      {
        "zh": "这件衣服很漂亮。",
        "py": "Zhè jiàn yīfu hěn piàoliang.",
        "vn": "Chiếc áo này rất đẹp."
      },
      {
        "zh": "那件小的怎么样？",
        "py": "Nà jiàn xiǎo de zěnmeyàng?",
        "vn": "Chiếc nhỏ hơn kia thì sao?"
      },
      {
        "zh": "我要买两件衣服。",
        "py": "Wǒ yào mǎi liǎng jiàn yīfu.",
        "vn": "Tôi muốn mua hai chiếc áo."
      }
    ],
    "hanzi": [
      {
        "c": "件",
        "p": "jiàn",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "亻(nhân) trái → 牛 (ngưu) phải",
        "rad": "亻(nhân – người)",
        "mean": "chiếc, kiện, việc",
        "tip": "Người 亻 đứng cạnh con bò 牛 (vật có giá trị) → đơn vị đếm từng \"KIỆN, CHIẾC\" riêng lẻ.",
        "cf": "伴 (bàn – \"bạn đồng hành\")",
        "w": "一件 / 这件 / 件件"
      }
    ],
    "colloFull": [
      {
        "zh": "一件衣服",
        "py": "yí jiàn yīfu",
        "vn": "một bộ quần áo"
      },
      {
        "zh": "两件事",
        "py": "liǎng jiàn shì",
        "vn": "hai việc"
      },
      {
        "zh": "这件",
        "py": "zhè jiàn",
        "vn": "cái này"
      },
      {
        "zh": "那件新的",
        "py": "nà jiàn xīn de",
        "vn": "cái mới kia"
      }
    ],
    "patterns": [
      {
        "s": "số + 件 + danh từ",
        "m": "Lượng từ của quần áo và sự việc"
      },
      {
        "s": "件 dùng cho 衣服 · 事; 个 dùng cho người và đồ vật thường"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái áo này bao nhiêu tiền?",
        "answer": "这件衣服多少钱？",
        "answerPy": "Zhè jiàn yīfu duōshao qián?",
        "note": "Lượng từ của 衣服 là 件.",
        "pair": "多少钱？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua hai bộ quần áo mới.",
        "answer": "我想买两件新衣服。",
        "answerPy": "Wǒ xiǎng mǎi liǎng jiàn xīn yīfu.",
        "note": "Đếm số lượng dùng 两, không dùng 二.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "还",
    "py": "hái",
    "pos": "Phó từ",
    "vn": "vẫn, còn; tạm được",
    "hv": "hoàn",
    "em": "👌",
    "lesson": 2,
    "ex_zh": "颜色还可以。",
    "ex_py": "Yánsè hái kěyǐ.",
    "ex_vn": "Màu sắc cũng được.",
    "exList": [
      {
        "zh": "颜色还可以。",
        "py": "Yánsè hái kěyǐ.",
        "vn": "Màu sắc cũng được."
      },
      {
        "zh": "他还没回家。",
        "py": "Tā hái méi huí jiā.",
        "vn": "Anh ấy vẫn chưa về nhà."
      },
      {
        "zh": "你还想吃什么？",
        "py": "Nǐ hái xiǎng chī shénme?",
        "vn": "Bạn còn muốn ăn gì nữa không?"
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "hái / huán",
        "type": "半包围 · Bán bao (辶)",
        "st": 7,
        "ord": "不 (bất) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "vẫn, còn (hái); trả lại (huán)",
        "tip": "Bộ 辶 (đi) + 不 → ý \"đi mà chưa dứt hẳn\" = VẪN CÒN tiếp diễn.",
        "cf": "环 (huán – \"vòng\", bộ 王)",
        "w": "还可以 / 还是 / 还有"
      }
    ],
    "colloFull": [
      {
        "zh": "还有",
        "py": "hái yǒu",
        "vn": "còn có"
      },
      {
        "zh": "还没有",
        "py": "hái méiyǒu",
        "vn": "vẫn chưa có"
      },
      {
        "zh": "还在休息",
        "py": "hái zài xiūxi",
        "vn": "vẫn đang nghỉ"
      },
      {
        "zh": "还要",
        "py": "hái yào",
        "vn": "còn muốn"
      }
    ],
    "patterns": [
      {
        "s": "还 + động từ",
        "m": "Vẫn còn, còn thêm: 我还要一个"
      },
      {
        "s": "还没 + động từ",
        "m": "Vẫn chưa làm: 他还没来"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy vẫn chưa đến.",
        "answer": "老师还没来。",
        "answerPy": "Lǎoshī hái méi lái.",
        "note": "还没 — việc chưa xảy ra, có thể sắp xảy ra.",
        "pair": "还没 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi còn muốn một cốc cà phê nữa.",
        "answer": "我还要一杯咖啡。",
        "answerPy": "Wǒ hái yào yì bēi kāfēi.",
        "note": "还要 — còn muốn thêm.",
        "pair": "还 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "可以",
    "py": "kěyǐ",
    "pos": "Tính từ / Trợ động từ",
    "vn": "tạm được, có thể",
    "hv": "khả dĩ",
    "em": "👍",
    "lesson": 2,
    "ex_zh": "听和说还可以。",
    "ex_py": "Tīng hé shuō hái kěyǐ.",
    "ex_vn": "Nghe và nói cũng tạm được.",
    "exList": [
      {
        "zh": "听和说还可以。",
        "py": "Tīng hé shuō hái kěyǐ.",
        "vn": "Nghe và nói cũng tạm được."
      },
      {
        "zh": "这里可以吃饭吗？",
        "py": "Zhèlǐ kěyǐ chīfàn ma?",
        "vn": "Ở đây có thể ăn cơm không?"
      },
      {
        "zh": "你可以帮我一下吗？",
        "py": "Nǐ kěyǐ bāng wǒ yíxià ma?",
        "vn": "Bạn có thể giúp tôi một chút không?"
      }
    ],
    "hanzi": [
      {
        "c": "可",
        "p": "kě",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "一→丨→乛→一→亅",
        "rad": "口 (khẩu)",
        "mean": "có thể, được",
        "tip": "Miệng 口 phát ra lời chấp thuận → biểu thị sự CHO PHÉP, ĐƯỢC.",
        "cf": "河 (hé – \"sông\", thêm bộ 氵)",
        "w": "可以 / 可能 / 可是"
      },
      {
        "c": "以",
        "p": "yǐ",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "丶→フ→丿→乀",
        "rad": "人 (nhân – biến thể)",
        "mean": "lấy, dùng để",
        "tip": "可 (được phép) + 以 (dùng để) = được phép DÙNG ĐỂ làm gì = CÓ THỂ.",
        "cf": "已 (yǐ – \"đã\", đã học ở Bài 4)",
        "w": "可以 / 以后 / 以前"
      }
    ],
    "colloFull": [
      {
        "zh": "可以吃",
        "py": "kěyǐ chī",
        "vn": "có thể ăn"
      },
      {
        "zh": "可以去",
        "py": "kěyǐ qù",
        "vn": "có thể đi"
      },
      {
        "zh": "不可以",
        "py": "bù kěyǐ",
        "vn": "không được"
      },
      {
        "zh": "可以吗",
        "py": "kěyǐ ma",
        "vn": "được không"
      }
    ],
    "patterns": [
      {
        "s": "可以 + động từ",
        "m": "Được phép làm gì: 我可以问一下吗？"
      },
      {
        "s": "可以 (được phép) ≠ 会 (biết làm) ≠ 能 (đủ sức làm)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi hỏi thầy một chút được không?",
        "answer": "我可以问一下老师吗？",
        "answerPy": "Wǒ kěyǐ wèn yíxià lǎoshī ma?",
        "note": "可以 là xin phép, 会 là biết làm.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ốm rồi, không được uống cà phê.",
        "answer": "你生病了，不可以喝咖啡。",
        "answerPy": "Nǐ shēngbìng le, bù kěyǐ hē kāfēi.",
        "note": "不可以 — không được phép.",
        "pair": "不可以 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "不错",
    "py": "búcuò",
    "pos": "Tính từ",
    "vn": "không tồi, khá tốt",
    "hv": "bất thác",
    "em": "👏",
    "lesson": 2,
    "ex_zh": "这件不错，就买这件吧。",
    "ex_py": "Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.",
    "ex_vn": "Chiếc này đẹp đấy, quyết định mua chiếc này đi.",
    "exList": [
      {
        "zh": "这件不错，就买这件吧。",
        "py": "Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.",
        "vn": "Chiếc này đẹp đấy, quyết định mua chiếc này đi."
      },
      {
        "zh": "这个主意不错。",
        "py": "Zhège zhǔyi búcuò.",
        "vn": "Ý này không tồi đấy."
      },
      {
        "zh": "今天天气不错。",
        "py": "Jīntiān tiānqì búcuò.",
        "vn": "Thời tiết hôm nay khá đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "不",
        "p": "bù",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一→丨→丿→丶",
        "rad": "一 (nhất)",
        "mean": "không",
        "tip": "Từ phủ định cơ bản nhất trong tiếng Trung.",
        "cf": "布 (bù – \"vải\", thêm bộ 巾)",
        "w": "不错 / 不是 / 不去"
      },
      {
        "c": "错",
        "p": "cuò",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "钅(kim) trái → 昔 (tích) phải",
        "rad": "钅(kim – kim loại)",
        "mean": "sai, nhầm",
        "tip": "不 (không) + 错 (sai) = KHÔNG SAI = khá tốt, không tồi.",
        "cf": "措 (cuò – \"biện pháp\", bộ 扌)",
        "w": "不错 / 错了 / 对错"
      }
    ],
    "colloFull": [
      {
        "zh": "很不错",
        "py": "hěn búcuò",
        "vn": "khá tốt"
      },
      {
        "zh": "菜不错",
        "py": "cài búcuò",
        "vn": "món ăn ngon"
      },
      {
        "zh": "身体不错",
        "py": "shēntǐ búcuò",
        "vn": "sức khoẻ tốt"
      },
      {
        "zh": "考试不错",
        "py": "kǎoshì búcuò",
        "vn": "thi khá tốt"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 不错",
        "m": "Cách khen nhẹ nhàng: 这个菜不错"
      },
      {
        "s": "不错 = không tệ = khá tốt — là lời khen, không phải chê"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Con cá này khá ngon.",
        "answer": "这条鱼不错。",
        "answerPy": "Zhè tiáo yú búcuò.",
        "note": "不错 là lời khen, không phải chê.",
        "pair": "Sub + 不错"
      },
      {
        "promptLang": "vi",
        "prompt": "Sức khoẻ bố tôi khá tốt.",
        "answer": "我爸爸的身体不错。",
        "answerPy": "Wǒ bàba de shēntǐ búcuò.",
        "note": "身体不错 — sức khoẻ khá.",
        "pair": "Sub + 不错"
      }
    ]
  },
  {
    "n": 9,
    "zh": "考试",
    "py": "kǎoshì",
    "pos": "Danh từ / Động từ",
    "vn": "kỳ thi, thi",
    "hv": "khảo thí",
    "em": "📝",
    "lesson": 3,
    "ex_zh": "是在想昨天的考试吗？",
    "ex_py": "Shì zài xiǎng zuótiān de kǎoshì ma?",
    "ex_vn": "Có phải đang nghĩ về kỳ thi hôm qua không?",
    "exList": [
      {
        "zh": "是在想昨天的考试吗？",
        "py": "Shì zài xiǎng zuótiān de kǎoshì ma?",
        "vn": "Có phải đang nghĩ về kỳ thi hôm qua không?"
      },
      {
        "zh": "明天有一个汉语考试。",
        "py": "Míngtiān yǒu yí ge Hànyǔ kǎoshì.",
        "vn": "Ngày mai có một kỳ thi tiếng Hán."
      },
      {
        "zh": "这次考试很难。",
        "py": "Zhècì kǎoshì hěn nán.",
        "vn": "Kỳ thi lần này rất khó."
      }
    ],
    "hanzi": [
      {
        "c": "考",
        "p": "kǎo",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "土→ 一 →耂 (biến thể)",
        "rad": "耂 (lão – biến thể)",
        "mean": "thi, kiểm tra",
        "tip": "Liên quan tới việc người lớn tuổi/có kinh nghiệm ra đề kiểm tra kiến thức.",
        "cf": "老 (lǎo – \"già\", cùng bộ 耂)",
        "w": "考试 / 考虑 / 高考"
      },
      {
        "c": "试",
        "p": "shì",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "讠(ngôn) trái → 式 (thức) phải",
        "rad": "讠(ngôn – lời nói)",
        "mean": "thử, thi",
        "tip": "考 (kiểm tra) + 试 (thử) = kiểm tra thử năng lực = THI.",
        "cf": "式 (shì – \"kiểu, thức\")",
        "w": "考试 / 试一下 / 试穿"
      }
    ],
    "colloFull": [
      {
        "zh": "准备考试",
        "py": "zhǔnbèi kǎoshì",
        "vn": "chuẩn bị thi"
      },
      {
        "zh": "汉语考试",
        "py": "Hànyǔ kǎoshì",
        "vn": "kỳ thi tiếng Trung"
      },
      {
        "zh": "考试的时候",
        "py": "kǎoshì de shíhou",
        "vn": "lúc thi"
      },
      {
        "zh": "考试了",
        "py": "kǎoshì le",
        "vn": "thi rồi"
      }
    ],
    "patterns": [
      {
        "s": "准备 + 考试",
        "m": "Chuẩn bị cho kỳ thi"
      },
      {
        "s": "考 + 试",
        "m": "Khảo (考) sát bằng cách thử (试)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai bắt đầu thi rồi.",
        "answer": "明天开始考试了。",
        "answerPy": "Míngtiān kāishǐ kǎoshì le.",
        "note": "开始 + động từ — bắt đầu làm gì.",
        "pair": "开始 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Sau kỳ thi tôi muốn đi Bắc Kinh du lịch.",
        "answer": "考试以后我要去北京旅游。",
        "answerPy": "Kǎoshì yǐhòu wǒ yào qù Běijīng lǚyóu.",
        "note": "以后 đứng SAU mốc thời gian.",
        "pair": "……以后"
      }
    ]
  },
  {
    "n": 10,
    "zh": "意思",
    "py": "yìsi",
    "pos": "Danh từ",
    "vn": "ý nghĩa, ý tứ",
    "hv": "ý tư",
    "em": "💭",
    "lesson": 3,
    "ex_zh": "很多字我都不知道是什么意思。",
    "ex_py": "Hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.",
    "ex_vn": "Nhiều chữ tôi còn chẳng biết nghĩa là gì.",
    "exList": [
      {
        "zh": "很多字我都不知道是什么意思。",
        "py": "Hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.",
        "vn": "Nhiều chữ tôi còn chẳng biết nghĩa là gì."
      },
      {
        "zh": "这个词是什么意思？",
        "py": "Zhège cí shì shénme yìsi?",
        "vn": "Từ này nghĩa là gì?"
      },
      {
        "zh": "我明白你的意思了。",
        "py": "Wǒ míngbai nǐ de yìsi le.",
        "vn": "Tôi hiểu ý của bạn rồi."
      }
    ],
    "hanzi": [
      {
        "c": "意",
        "p": "yì",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "立→日→心",
        "rad": "心 (tâm – trái tim)",
        "mean": "ý, ý định",
        "tip": "Âm thanh 音 phát ra từ tâm 心 → điều trong lòng muốn nói = Ý.",
        "cf": "音 (yīn – \"âm thanh\")",
        "w": "意思 / 同意 / 意见"
      },
      {
        "c": "思",
        "p": "sī",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "田→心",
        "rad": "心 (tâm – trái tim)",
        "mean": "suy nghĩ",
        "tip": "田 (ruộng, đầu óc) trên 心 (tim) → dùng đầu và tim để SUY NGHĨ.",
        "cf": "田 (tián – \"ruộng\")",
        "w": "意思 / 思考 / 意思意思"
      }
    ],
    "colloFull": [
      {
        "zh": "什么意思",
        "py": "shénme yìsi",
        "vn": "nghĩa là gì"
      },
      {
        "zh": "这个意思",
        "py": "zhège yìsi",
        "vn": "ý này"
      },
      {
        "zh": "有意思",
        "py": "yǒuyìsi",
        "vn": "thú vị"
      },
      {
        "zh": "不好意思",
        "py": "bù hǎoyìsi",
        "vn": "ngại quá"
      }
    ],
    "patterns": [
      {
        "s": "什么 + 意思？",
        "m": "Hỏi nghĩa: 这个字是什么意思？"
      },
      {
        "s": "不好意思 — câu nói khi ngại, khi làm phiền người khác"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chữ này nghĩa là gì?",
        "answer": "这个字是什么意思？",
        "answerPy": "Zhège zì shì shénme yìsi?",
        "note": "Khung hỏi nghĩa quen thuộc nhất.",
        "pair": "是什么意思？"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngại quá, tôi đến muộn rồi.",
        "answer": "不好意思，我来晚了。",
        "answerPy": "Bù hǎoyìsi, wǒ lái wǎn le.",
        "note": "不好意思 — nói khi ngại, khi làm phiền người khác.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 11,
    "zh": "咖啡",
    "py": "kāfēi",
    "pos": "Danh từ",
    "vn": "cà phê",
    "hv": "ca phê",
    "em": "☕",
    "lesson": 4,
    "ex_zh": "喝咖啡吗？",
    "ex_py": "Hē kāfēi ma?",
    "ex_vn": "Bạn uống cà phê không?",
    "exList": [
      {
        "zh": "喝咖啡吗？",
        "py": "Hē kāfēi ma?",
        "vn": "Bạn uống cà phê không?"
      },
      {
        "zh": "我每天早上喝一杯咖啡。",
        "py": "Wǒ měitiān zǎoshang hē yì bēi kāfēi.",
        "vn": "Mỗi sáng tôi uống một ly cà phê."
      },
      {
        "zh": "这杯咖啡有点儿苦。",
        "py": "Zhè bēi kāfēi yǒudiǎnr kǔ.",
        "vn": "Ly cà phê này hơi đắng."
      }
    ],
    "hanzi": [
      {
        "c": "咖",
        "p": "kā",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "口 (khẩu) trái → 加 (gia) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "(phiên âm)",
        "tip": "Bộ 口 (miệng) — chữ mượn âm để phiên âm từ nước ngoài \"coffee\", không mang nghĩa gốc.",
        "cf": "加 (jiā – \"thêm vào\")",
        "w": "咖啡 / 咖喱"
      },
      {
        "c": "啡",
        "p": "fēi",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "口 (khẩu) trái → 非 (phi) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "(phiên âm)",
        "tip": "咖 + 啡 = phiên âm mượn từ \"coffee\" — cả hai đều có bộ 口 vì liên quan tới miệng (uống).",
        "cf": "非 (fēi – đã học ở Bài 4: 非常)",
        "w": "咖啡"
      }
    ],
    "colloFull": [
      {
        "zh": "喝咖啡",
        "py": "hē kāfēi",
        "vn": "uống cà phê"
      },
      {
        "zh": "一杯咖啡",
        "py": "yì bēi kāfēi",
        "vn": "một cốc cà phê"
      },
      {
        "zh": "买咖啡",
        "py": "mǎi kāfēi",
        "vn": "mua cà phê"
      },
      {
        "zh": "热咖啡",
        "py": "rè kāfēi",
        "vn": "cà phê nóng"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 咖啡",
        "m": "Uống cà phê — 喝 dùng cho mọi đồ uống"
      },
      {
        "s": "咖啡 là từ mượn — cả hai chữ đều có bộ 口"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sáng nào tôi cũng uống một cốc cà phê.",
        "answer": "我每天早上都喝一杯咖啡。",
        "answerPy": "Wǒ měi tiān zǎoshang dōu hē yì bēi kāfēi.",
        "note": "每 đi với 都 thành một cặp.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn mua giúp tôi một cốc cà phê nóng nhé.",
        "answer": "你帮我买一杯热咖啡吧。",
        "answerPy": "Nǐ bāng wǒ mǎi yì bēi rè kāfēi ba.",
        "note": "帮我 + động từ — làm giúp tôi.",
        "pair": "帮 + người + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "对",
    "py": "duì",
    "pos": "Giới từ",
    "vn": "đối với",
    "hv": "đối",
    "em": "🎯",
    "lesson": 4,
    "ex_zh": "咖啡喝多了对身体不好。",
    "ex_py": "Kāfēi hē duō le duì shēntǐ bù hǎo.",
    "ex_vn": "Uống nhiều cà phê không tốt cho sức khỏe.",
    "exList": [
      {
        "zh": "咖啡喝多了对身体不好。",
        "py": "Kāfēi hē duō le duì shēntǐ bù hǎo.",
        "vn": "Uống nhiều cà phê không tốt cho sức khỏe."
      },
      {
        "zh": "运动对身体很好。",
        "py": "Yùndòng duì shēntǐ hěn hǎo.",
        "vn": "Vận động rất tốt cho sức khỏe."
      },
      {
        "zh": "他对我很好。",
        "py": "Tā duì wǒ hěn hǎo.",
        "vn": "Anh ấy đối xử với tôi rất tốt."
      }
    ],
    "hanzi": [
      {
        "c": "对",
        "p": "duì",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "又 → 寸",
        "rad": "寸 (thốn – tấc)",
        "mean": "đúng; đối với",
        "tip": "Hai nửa đối xứng ghép khớp với nhau → nghĩa \"ĐÚNG, phù hợp, hướng về phía\".",
        "cf": "又 (yòu – \"lại, và\")",
        "w": "对不对 / 对身体好 / 对不起"
      }
    ],
    "colloFull": [
      {
        "zh": "对了",
        "py": "duì le",
        "vn": "đúng rồi"
      },
      {
        "zh": "不对",
        "py": "bú duì",
        "vn": "không đúng"
      },
      {
        "zh": "对我说",
        "py": "duì wǒ shuō",
        "vn": "nói với tôi"
      },
      {
        "zh": "对身体好",
        "py": "duì shēntǐ hǎo",
        "vn": "tốt cho sức khoẻ"
      }
    ],
    "patterns": [
      {
        "s": "对 + người + 说",
        "m": "Nói với ai: 他对我说"
      },
      {
        "s": "对 (đúng) và 对 (hướng về ai) — cùng chữ, hai nghĩa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chữ này không đúng.",
        "answer": "这个字不对。",
        "answerPy": "Zhège zì bú duì.",
        "note": "对 ↔ 不对 — đúng và không đúng.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy nói với tôi, tối nay anh ấy đến đón tôi.",
        "answer": "他对我说，今天晚上他来接我。",
        "answerPy": "Tā duì wǒ shuō, jīntiān wǎnshang tā lái jiē wǒ.",
        "note": "对我说 — nói với tôi.",
        "pair": "对 + người + 说"
      }
    ]
  },
  {
    "n": 13,
    "zh": "以后",
    "py": "yǐhòu",
    "pos": "Danh từ chỉ thời gian",
    "vn": "sau này, sau khi",
    "hv": "dĩ hậu",
    "em": "⏭️",
    "lesson": 4,
    "ex_zh": "以后我少喝一点儿。",
    "ex_py": "Yǐhòu wǒ shǎo hē yìdiǎnr.",
    "ex_vn": "Sau này tôi sẽ uống ít lại.",
    "exList": [
      {
        "zh": "以后我少喝一点儿。",
        "py": "Yǐhòu wǒ shǎo hē yìdiǎnr.",
        "vn": "Sau này tôi sẽ uống ít lại."
      },
      {
        "zh": "下课以后我们去踢足球。",
        "py": "Xiàkè yǐhòu wǒmen qù tī zúqiú.",
        "vn": "Sau khi tan học chúng ta đi đá bóng."
      },
      {
        "zh": "以后有时间再聊。",
        "py": "Yǐhòu yǒu shíjiān zài liáo.",
        "vn": "Sau này có thời gian nói chuyện tiếp."
      }
    ],
    "hanzi": [
      {
        "c": "以",
        "p": "yǐ",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "丶→フ→丿→乀",
        "rad": "人 (nhân – biến thể)",
        "mean": "lấy, từ",
        "tip": "Đã học ở trên (可以) — kết hợp 后 (sau) tạo mốc thời gian \"TỪ SAU đó\".",
        "cf": "已 (yǐ)",
        "w": "以后 / 以前 / 可以"
      },
      {
        "c": "后",
        "p": "hòu",
        "type": "半包围 · Bán bao",
        "st": 6,
        "ord": "⺈→𠃌→口",
        "rad": "⼑ (đao – biến thể)",
        "mean": "sau, phía sau",
        "tip": "Trái nghĩa với 前 (trước) — chỉ vị trí/thời gian ở phía SAU.",
        "cf": "厚 (hòu – \"dày\")",
        "w": "以后 / 后面 / 最后"
      }
    ],
    "colloFull": [
      {
        "zh": "以后再说",
        "py": "yǐhòu zài shuō",
        "vn": "sau này nói tiếp"
      },
      {
        "zh": "吃了以后",
        "py": "chī le yǐhòu",
        "vn": "sau khi ăn"
      },
      {
        "zh": "考试以后",
        "py": "kǎoshì yǐhòu",
        "vn": "sau kỳ thi"
      },
      {
        "zh": "以后见",
        "py": "yǐhòu jiàn",
        "vn": "sau này gặp lại"
      }
    ],
    "patterns": [
      {
        "s": "việc gì + 以后",
        "m": "Sau khi làm gì: 考试以后我去旅游"
      },
      {
        "s": "以后 đứng SAU mốc thời gian, khác tiếng Việt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sau khi ăn cơm tôi đi chạy bộ.",
        "answer": "吃了饭以后我去跑步。",
        "answerPy": "Chīle fàn yǐhòu wǒ qù pǎobù.",
        "note": "Việc nào trước thì nói trước.",
        "pair": "V了……以后"
      },
      {
        "promptLang": "vi",
        "prompt": "Sau này tôi muốn làm bác sĩ.",
        "answer": "以后我想做医生。",
        "answerPy": "Yǐhòu wǒ xiǎng zuò yīshēng.",
        "note": "以后 đứng đầu câu khi nói về tương lai.",
        "pair": "想 + V"
      }
    ]
  }
];

const wuData = [
  {img:'🐟',label:'鱼',py:'yú',letter:'A'},
  {img:'☕',label:'咖啡',py:'kāfēi',letter:'B'},
  {img:'👕',label:'件',py:'jiàn',letter:'C'},
  {img:'📝',label:'考试',py:'kǎoshì',letter:'D'},
  {img:'🌳',label:'外面',py:'wàimiàn',letter:'E'},
  {img:'📝',label:'准备',py:'zhǔnbèi',letter:'F'},
];

var dialogData = [
  {scene:'在家里 · Ở nhà',
   preQuiz:[
     {q:'女的想在哪儿吃饭？',opts:['饭馆','家里','公司'],ans:1},
     {q:'女的准备做什么菜？',opts:['鱼','面条','米饭'],ans:0},
   ],
   lines:[
     {sp:0,zh:'晚上我们去饭馆吃饭怎么样？',py:'Wǎnshang wǒmen qù fànguǎn chīfàn zěnmeyàng?',vn:'Tối nay chúng ta ra nhà hàng ăn cơm nhé?'},
     {sp:1,zh:'我不想去外面吃，我想在家吃。',py:'Wǒ bù xiǎng qù wàimian chī, wǒ xiǎng zài jiā chī.',vn:'Em không muốn ra ngoài ăn đâu, em muốn ăn ở nhà.'},
     {sp:0,zh:'那你准备做什么呢？',py:'Nà nǐ zhǔnbèi zuò shénme ne?',vn:'Thế em chuẩn bị nấu món gì nào?'},
     {sp:1,zh:'就做你爱吃的鱼吧。',py:'Jiù zuò nǐ ài chī de yú ba.',vn:'Vậy thì làm món cá anh thích ăn nhất đi.'},
   ]},
  {scene:'在商店 · Trong cửa hàng',
   preQuiz:[
     {q:'第一件衣服有什么问题？',opts:['颜色不好','有点儿大','太贵'],ans:1},
     {q:'最后买了哪件衣服？',opts:['大的','小的','都没买'],ans:1},
   ],
   lines:[
     {sp:0,zh:'帮我看一下这件衣服怎么样？',py:'Bāng wǒ kàn yíxià zhè jiàn yīfu zěnmeyàng?',vn:'Xem giúp tôi chiếc áo này thế nào?'},
     {sp:1,zh:'颜色还可以，就是有点儿大。',py:'Yánsè hái kěyǐ, jiùshì yǒudiǎnr dà.',vn:'Màu sắc cũng được, chỉ có điều hơi rộng một chút.'},
     {sp:0,zh:'这件小的怎么样？',py:'Zhè jiàn xiǎo de zěnmeyàng?',vn:'Chiếc nhỏ hơn này thì sao?'},
     {sp:1,zh:'这件不错，就买这件吧。',py:'Zhè jiàn búcuò, jiù mǎi zhè jiàn ba.',vn:'Chiếc này đẹp đấy, quyết định mua chiếc này đi.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'男的今天为什么不去打球？',opts:['有点儿累','下雨','没时间'],ans:0},
     {q:'男的觉得自己哪方面不好？',opts:['听和说','读和写','都不好'],ans:1},
     {q:'男的在想什么事？',opts:['昨天的考试','明天的比赛','晚饭吃什么'],ans:0},
   ],
   lines:[
     {sp:0,zh:'今天去不去打球？',py:'Jīntiān qù bú qù dǎqiú?',vn:'Hôm nay có đi chơi bóng không?'},
     {sp:1,zh:'这两天有点儿累，不去打球了。',py:'Zhè liǎng tiān yǒudiǎnr lèi, bú qù dǎqiú le.',vn:'Hai ngày nay tôi hơi mệt, không đi chơi bóng nữa đâu.'},
     {sp:0,zh:'你在做什么呢？是在想昨天的考试吗？',py:'Nǐ zài zuò shénme ne? Shì zài xiǎng zuótiān de kǎoshì ma?',vn:'Bạn đang làm gì thế? Có phải đang nghĩ về kỳ thi hôm qua không?'},
     {sp:1,zh:'是啊，我觉得听和说还可以，读和写不好，很多字我都不知道是什么意思。',py:'Shì a, wǒ juéde tīng hé shuō hái kěyǐ, dú hé xiě bù hǎo, hěn duō zì wǒ dōu bù zhīdào shì shénme yìsi.',vn:'Đúng vậy, tôi thấy phần nghe và nói còn tạm được, còn đọc và viết thì rất tệ, nhiều chữ tôi còn chẳng biết nghĩa là gì.'},
   ]},
  {scene:'在公司 · Ở công ty',
   preQuiz:[
     {q:'男的已经喝了几杯咖啡？',opts:['一杯','两杯','三杯'],ans:1},
     {q:'以后男的打算每天喝几杯咖啡？',opts:['一杯','两杯','不喝了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'休息一下吧，喝咖啡吗？',py:'Xiūxi yíxià ba, hē kāfēi ma?',vn:'Nghỉ tay chút đi, bạn uống cà phê không?'},
     {sp:1,zh:'不喝了，我已经喝两杯了。',py:'Bù hē le, wǒ yǐjīng hē liǎng bēi le.',vn:'Không uống nữa đâu, tôi đã uống hai ly rồi.'},
     {sp:0,zh:'是呀，咖啡喝多了对身体不好。',py:'Shì ya, kāfēi hē duō le duì shēntǐ bù hǎo.',vn:'Đúng thế, uống nhiều cà phê không tốt cho sức khỏe đâu.'},
     {sp:1,zh:'以后我少喝一点儿，每天喝一杯。',py:'Yǐhòu wǒ shǎo hē yìdiǎnr, měitiān hē yì bēi.',vn:'Sau này tôi sẽ uống ít lại, mỗi ngày chỉ uống một ly thôi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'喝',right:'咖啡'},
  {left:'准备',right:'考试'},
  {left:'这件衣服',right:'有点儿大'},
  {left:'这是什么',right:'意思？'},
  {left:'多运动',right:'对身体好'},
  {left:'他就是',right:'我的中国朋友'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: chuẩn bị thi, mua áo, hẹn uống cà phê.
// Ôn lại 颜色/觉得 (Bài 1, 3).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-5/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'我今天有点儿累，', blank:'去外面吃晚饭吧', post:'。', py:'Wǒ jīntiān yǒudiǎnr lèi, qù wàimian chī wǎnfàn ba.', vn:'Hôm nay tôi hơi mệt, ra ngoài ăn tối đi.'},
    ]},
    {num:2, lines:[
      {pre:'他们都', blank:'在准备下午的考试呢', post:'。', py:'Tāmen dōu zài zhǔnbèi xiàwǔ de kǎoshì ne.', vn:'Họ đều đang chuẩn bị cho kỳ thi chiều nay.'},
    ]},
    {num:3, lines:[
      {pre:'医生说', blank:'喝茶对身体很好', post:'。', py:'Yīshēng shuō hē chá duì shēntǐ hěn hǎo.', vn:'Bác sĩ nói uống trà rất tốt cho sức khỏe.'},
    ]},
    {num:4, lines:[
      {pre:'我准备了', blank:'你爱吃的鱼', post:'。', py:'Wǒ zhǔnbèi le nǐ ài chī de yú.', vn:'Tôi đã chuẩn bị con cá mà bạn thích ăn.'},
    ]},
    {num:5, lines:[
      {pre:'这件衣服还不错，', blank:'你喜欢就买吧', post:'。', py:'Zhè jiàn yīfu hái búcuò, nǐ xǐhuan jiù mǎi ba.', vn:'Bộ quần áo này khá ổn, nếu bạn thích thì mua đi.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'今天晚上你想', blank:'吃什么', post:'？', py:'Jīntiān wǎnshang nǐ xiǎng chī shénme?', vn:'Tối nay bạn muốn ăn gì?'},
      {speaker:'女', pre:'我们在家吃吧，', blank:'就做你爱吃的', post:'。', py:'Wǒmen zài jiā chī ba, jiù zuò nǐ ài chī de.', vn:'Chúng ta ăn ở nhà đi, cứ nấu món bạn thích ăn.'},
    ]},
    {num:7, lines:[
      {speaker:'男', pre:'你', blank:'想不想去看电影', post:'？', py:'Nǐ xiǎng bu xiǎng qù kàn diànyǐng?', vn:'Bạn có muốn đi xem phim không?'},
      {speaker:'女', pre:'我有点儿累，', blank:'在家看电视吧', post:'。', py:'Wǒ yǒudiǎnr lèi, zài jiā kàn diànshì ba.', vn:'Tôi hơi mệt, ở nhà xem tivi thôi.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'你和小明', blank:'在做什么呢', post:'？', py:'Nǐ hé Xiǎomíng zài zuò shénme ne?', vn:'Bạn và Tiểu Minh đang làm gì vậy?'},
      {speaker:'女', pre:'我们', blank:'在准备明天的考试呢', post:'。', py:'Wǒmen zài zhǔnbèi míngtiān de kǎoshì ne.', vn:'Chúng tôi đang chuẩn bị cho kỳ thi ngày mai.'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'医生说每天', blank:'喝咖啡对身体不好', post:'。', py:'Yīshēng shuō měitiān hē kāfēi duì shēntǐ bù hǎo.', vn:'Bác sĩ nói uống cà phê mỗi ngày không tốt cho sức khỏe.'},
      {speaker:'男', pre:'以后我', blank:'不喝咖啡了，喝茶', post:'。', py:'Yǐhòu wǒ bù hē kāfēi le, hē chá.', vn:'Sau này tôi không uống cà phê nữa, uống trà.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'你看看，这件衣服', blank:'怎么样', post:'？', py:'Nǐ kànkan, zhè jiàn yīfu zěnmeyàng?', vn:'Bạn xem thử, bộ quần áo này thế nào?'},
      {speaker:'男', pre:'我觉得有点儿大，', blank:'那件还不错', post:'。', py:'Wǒ juéde yǒudiǎnr dà, nà jiàn hái búcuò.', vn:'Tôi thấy hơi to, cái kia khá ổn.'},
    ]},
  ],
  mc: [
    {num:11, options:['外面','咖啡馆','书店'], ans:1,
     explain:'女：外面有点儿冷！男：是啊，我们就在咖啡馆看书吧。问：他们在哪儿看书？ → 咖啡馆。'},
    {num:12, options:['鱼','都爱吃','晚饭'], ans:0,
     explain:'男：我去准备晚饭。你们爱吃什么？女：我丈夫和我都爱吃鱼。问：她丈夫最爱吃什么？ → 鱼。'},
    {num:13, options:['他儿子不喜欢','椅子有点儿高','一百块钱'], ans:1,
     explain:'女：这个椅子怎么样？男：我儿子不到一米，这个有点儿高。问：男的为什么不买这个椅子？ → 椅子有点儿高。'},
    {num:14, options:['读和写还不错','说和写还不错','听和说还不错'], ans:2,
     explain:'女：你昨天的考试怎么样？男：听和说还不错。问：男的昨天的考试怎么样？ → 听和说还不错。'},
    {num:15, options:['一个','不吃','很多'], ans:2,
     explain:'女：吃苹果对身体好，但是也不能吃太多。男：我以后少吃一点儿，每天吃一个。问：男的以前每天吃几个苹果？ → 很多（比一个多）。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (就 · 还 · 有点儿 + từ mới bài 5, ôn bài 1–4 và HSK1)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Thử áo ở cửa hàng, bạn thấy hơi chật: “这件衣服',blank:'有点儿',post:'小，有大的吗？”',hint:'(hơi — không như ý)',ans:'有点儿',exp:'有点儿 + tính từ = hơi …, mang ý không hài lòng: 有点儿小 = hơi chật.'},
  {pre:'“今天外面冷吗？” — “',blank:'有点儿',post:'冷，你喝一杯热茶吧。”',hint:'(hơi)',ans:'有点儿',exp:'有点儿 đứng TRƯỚC tính từ: 有点儿冷 (không nói 冷有点儿 như “lạnh một chút”).'},
  {pre:'“你觉得这个饭店的菜怎么样？” — “',blank:'还',post:'可以，这儿的鱼很好吃。”',hint:'(cũng, tạm)',ans:'还',exp:'还可以 = tạm được, cũng được (không xuất sắc nhưng không tệ).'},
  {pre:'“你中午吃了什么？” — “吃了米饭，',blank:'还',post:'吃了鱼。”',hint:'(còn, thêm)',ans:'还',exp:'还 + động từ = còn … nữa (bổ sung thêm việc khác); 还 đứng trước động từ.'},
  {pre:'Có người hỏi bạn: “你认识李月吗？” — “认识，我',blank:'就',post:'是李月！”',hint:'(chính)',ans:'就',exp:'就是 = chính là, nhấn mạnh: 我就是李月 = tôi chính là Lý Nguyệt.'},
  {pre:'“请问，商店在哪儿？” — “',blank:'就',post:'在前面，医院旁边。”',hint:'(ngay)',ans:'就',exp:'就在 + nơi = ở ngay …, nhấn mạnh rất gần: 就在前面.'},
  {pre:'Tối nay có bạn đến nhà ăn cơm: “晚上朋友来我家吃饭，我要',blank:'准备',post:'很多菜。”',hint:'(chuẩn bị)',ans:'准备',exp:'准备 + việc / đồ = chuẩn bị …: 准备很多菜; 要 ở đây = phải.'},
  {pre:'“你买了几',blank:'件',post:'衣服？” — “三件，都很漂亮。”',hint:'(chiếc — lượng từ của áo)',ans:'件',exp:'Quần áo dùng lượng từ 件: 一件衣服, 几件衣服 (không dùng 个).'},
  {pre:'“你的汉语',blank:'不错',post:'！” — “谢谢，我每天都学习。”',hint:'(khá tốt)',ans:'不错',exp:'不错 = khá tốt, được đấy — lời khen nhẹ nhàng; trước 不错 không cần 是.'},
  {pre:'“明天有',blank:'考试',post:'，晚上我在家学习。”',hint:'(kỳ thi, bài thi)',ans:'考试',exp:'考试 vừa là danh từ (有考试 = có bài thi) vừa là động từ (明天考试 = mai thi).'},
  {pre:'“你为什么不喝咖啡？” — “我觉得喝咖啡',blank:'对',post:'身体不好。”',hint:'(đối với)',ans:'对',exp:'对 + đối tượng + 好 / 不好 = tốt / không tốt cho …: 对身体不好.'},
  {pre:'“你什么时候给妈妈打电话？” — “晚上回家',blank:'以后',post:'打。”',hint:'(sau khi)',ans:'以后',exp:'Sự việc + 以后 = sau khi …: 回家以后; 以后 đứng SAU sự việc (khác tiếng Việt).'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 就 / 还 / 有点儿
// ══════════════════════════════════════════
var sortData = [
  {words:['他','就','在','外面','，','你','去','看','一下','吧','。'],ans:'他就在外面，你去看一下吧。',audio:'他就在外面，你去看一下吧。'},
  {words:['这','个','房间','有点儿','热','，','我们','去','外面','吧','。'],ans:'这个房间有点儿热，我们去外面吧。',audio:'这个房间有点儿热，我们去外面吧。'},
  {words:['那','我们','就','星期六','去','吧','。'],ans:'那我们就星期六去吧。',audio:'那我们就星期六去吧。'},
  {words:['我','觉得','这','件','衣服','还','可以','。'],ans:'我觉得这件衣服还可以。',audio:'我觉得这件衣服还可以。'},
  {words:['多','吃','水果','对','身体','好','。'],ans:'多吃水果对身体好。',audio:'多吃水果对身体好。'},
  {words:['我','准备','明天','下午','去','买','鱼','。'],ans:'我准备明天下午去买鱼。',audio:'我准备明天下午去买鱼。',alt:['明天下午我准备去买鱼。']},
  {words:['你','说','的','是','什么','意思','？'],ans:'你说的是什么意思？',audio:'你说的是什么意思？'},
  {words:['我','可以','在','这儿','喝','咖啡','吗','？'],ans:'我可以在这儿喝咖啡吗？',audio:'我可以在这儿喝咖啡吗？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (有点儿 đặt sau / dùng với ý tốt, 还可以 đảo, 还 đặt sai, 就是 / 就在 đặt sai, 对…好 đặt sau, 以后 đặt trước, lượng từ 件)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我的房间小有点儿。',
   opts:['我的房间有点儿小。','我的房间一点儿小。','我的房间很有点儿小。','我的房间小一点儿有。'],ans:0,
   exp:'有点儿 đứng TRƯỚC tính từ: 有点儿小; 一点儿 không đứng trước tính từ, 有点儿 không đi cùng 很.'},
  {wrong:'今天天气有点儿好。（ý: hôm nay trời khá đẹp）',
   opts:['今天天气不错一点儿。','今天天气还不错。','今天天气好有点儿。','今天天气有点儿不错。'],ans:1,
   exp:'有点儿 chỉ dùng cho điều KHÔNG như ý (有点儿冷, 有点儿累); khen nhẹ thì dùng 还不错 / 还可以.'},
  {wrong:'这儿的咖啡可以还。',
   opts:['这儿的咖啡很还可以。','还这儿的咖啡可以。','这儿的咖啡还可以。','这儿的咖啡还很可以。'],ans:2,
   exp:'还可以 = tạm được, 还 luôn đứng TRƯỚC 可以 và không thêm 很.'},
  {wrong:'我买了苹果，买了还牛奶。',
   opts:['我还买了苹果，牛奶。','还我买了苹果，买了牛奶。','我买了苹果，买了牛奶还。','我买了苹果，还买了牛奶。'],ans:3,
   exp:'“Còn mua thêm …” = 还 + động từ: 还买了牛奶; 还 đứng trước động từ, không đứng sau.'},
  {wrong:'那个高高的人是就我丈夫。',
   opts:['那个高高的人就是我丈夫。','就那个高高的人是我丈夫。','那个高高的人是我丈夫就。','那个高高的人就我丈夫是。'],ans:0,
   exp:'“Chính là” = 就是, 就 đứng TRƯỚC 是: 那个人就是我丈夫.'},
  {wrong:'我家在就医院旁边。',
   opts:['我家在医院就旁边。','我家就在医院旁边。','就我家在医院旁边。','我家在医院旁边就。'],ans:1,
   exp:'“Ở ngay cạnh …” = 就在 + nơi: 就 đứng TRƯỚC 在, không chen vào giữa 在 và nơi chốn.'},
  {wrong:'每天跑步好对身体。',
   opts:['每天跑步身体对很好。','每天跑步对很好身体。','每天跑步对身体很好。','对身体每天跑步很好。'],ans:2,
   exp:'“Tốt cho sức khoẻ” = 对身体很好: 对 + đối tượng đứng TRƯỚC tính từ, không đặt sau như tiếng Việt.'},
  {wrong:'以后吃饭，我们去看电影吧。（ý: ăn cơm xong）',
   opts:['吃饭的以后，我们去看电影吧。','我们以后吃饭去看电影吧。','以后吃饭了，我们去看电影吧。','吃饭以后，我们去看电影吧。'],ans:3,
   exp:'“Sau khi ăn” = 吃饭以后: sự việc đứng TRƯỚC, 以后 đứng SAU; không thêm 的 như 的时候.'},
  {wrong:'我买了两个衣服。',
   opts:['我买了两件衣服。','我买了二件衣服。','我买了衣服两件。','我买了两件的衣服。'],ans:0,
   exp:'Quần áo dùng lượng từ 件; trước lượng từ dùng 两 (không dùng 二); số + lượng từ đứng trước danh từ, không thêm 的.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 5. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Buổi tối, người nhà hỏi bạn muốn ra ngoài ăn hay ăn ở nhà.',
      q_zh: '晚上我们去外面吃饭吗？你想吃什么？',
      q_py: 'Wǎnshang wǒmen qù wàimiàn chīfàn ma? Nǐ xiǎng chī shénme?',
      q_vn: 'Tối nay mình ra ngoài ăn không? Bạn muốn ăn gì?',
      grammar: { label: '就 + quyết định (就在家吃吧 / 就吃鱼吧)', any: ['就'] },
      need: [
        { label: 'Nói ăn ở đâu (外面 / 在家 / 饭店)', any: ['外面', '在家', '家里', '饭店', '饭馆'] },
        { label: 'Nói món muốn ăn', any: ['鱼', '菜', '米饭', '面', '水果', '肉', '饺子', '鸡'] },
        { label: 'Nêu lý do (有点儿累 / 有点儿冷…)', any: ['有点儿', '累', '冷', '热', '忙', '下雨', '因为'] }
      ],
      bonus: { label: 'Dùng 准备', any: ['准备'] },
      vocab: ['外面', '就', '鱼', '有点儿'],
      minLen: 12,
      sample: '我今天有点儿累，不想去外面吃。我们就在家吃鱼吧。',
      sample_py: 'Wǒ jīntiān yǒudiǎnr lèi, bù xiǎng qù wàimiàn chī. Wǒmen jiù zài jiā chī yú ba.',
      sample_vn: 'Hôm nay mình hơi mệt, không muốn ra ngoài ăn. Mình cứ ăn cá ở nhà đi.',
      tip: '就…吧 dùng để chốt nhanh một phương án; 有点儿 + tính từ để nêu lý do không như ý.'
    },
    {
      situation: 'Trong cửa hàng, bạn của bạn thử áo và hỏi ý kiến bạn.',
      q_zh: '你看，这件衣服怎么样？',
      q_py: 'Nǐ kàn, zhè jiàn yīfu zěnmeyàng?',
      q_vn: 'Bạn xem, chiếc áo này thế nào?',
      grammar: { label: '有点儿 + tính từ / 还可以 / 不错', any: ['有点儿', '还可以', '不错'] },
      need: [
        { label: 'Nhận xét màu sắc hoặc kiểu áo', any: ['颜色', '漂亮', '好看', '不错', '还可以'] },
        { label: 'Nói điểm chưa ổn (有点儿大 / 有点儿长…)', any: ['有点儿', '大', '小', '长'] },
        { label: 'Gợi ý (看看… / 买… / 那件…)', any: ['看', '买', '那件', '这件', '试'] }
      ],
      bonus: { label: 'Chốt: 就买这件吧 / 就…', any: ['就'] },
      vocab: ['件', '不错', '有点儿', '颜色'],
      minLen: 12,
      sample: '这件衣服不错，我觉得有点儿长，你看一下那件吧。',
      sample_py: 'Zhè jiàn yīfu búcuò, wǒ juéde yǒudiǎnr cháng, nǐ kàn yíxià nà jiàn ba.',
      sample_vn: 'Chiếc áo này được đấy, mình thấy hơi dài, bạn xem thử chiếc kia đi.',
      tip: '有点儿 + tính từ mang ý chê nhẹ: 有点儿长, 有点儿大; khen nhẹ: 不错, 还可以.'
    },
    {
      situation: 'Sau kỳ thi, bạn học hỏi bạn làm bài thế nào.',
      q_zh: '昨天的考试你觉得怎么样？',
      q_py: 'Zuótiān de kǎoshì nǐ juéde zěnmeyàng?',
      q_vn: 'Bạn thấy bài thi hôm qua thế nào?',
      grammar: { label: '还可以 / 不错 / 有点儿…', any: ['还可以', '还', '不错', '有点儿'] },
      need: [
        { label: 'Đánh giá chung về bài thi', any: ['考试', '还可以', '不错', '好', '不好'] },
        { label: 'Nói phần nào tốt / chưa tốt (听 / 说 / 读 / 写)', any: ['听', '说', '读', '写', '汉字', '字'] },
        { label: 'Dùng 意思 / 知道', any: ['意思', '知道', '认识'] }
      ],
      bonus: { label: 'Nói dự định 以后 (以后要多…)', any: ['以后', '要多', '多'] },
      vocab: ['考试', '还', '意思'],
      minLen: 14,
      sample: '我觉得考试还可以，听和说不错，有几个字我不知道是什么意思。',
      sample_py: 'Wǒ juéde kǎoshì hái kěyǐ, tīng hé shuō búcuò, yǒu jǐ ge zì wǒ bù zhīdào shì shénme yìsi.',
      sample_vn: 'Mình thấy bài thi tạm được, nghe và nói khá tốt, có mấy chữ mình không biết nghĩa là gì.',
      tip: '还可以 = tạm được; 不知道是什么意思 = không biết nghĩa là gì.'
    },
    {
      situation: 'Giờ nghỉ, đồng nghiệp hỏi thói quen uống cà phê của bạn.',
      q_zh: '你每天喝咖啡吗？喝几杯？什么时候喝？',
      q_py: 'Nǐ měi tiān hē kāfēi ma? Hē jǐ bēi? Shénme shíhou hē?',
      q_vn: 'Bạn có uống cà phê hằng ngày không? Uống mấy cốc? Uống lúc nào?',
      grammar: { label: 'số + 杯 + 咖啡 / 对身体…', any: ['杯', '对'] },
      need: [
        { label: 'Nói có uống hay không (喝 / 不喝)', any: ['喝', '不喝'] },
        { label: 'Nói thời gian uống', any: ['早上', '上午', '下午', '中午', '晚上', '每天', '时候'] },
        { label: 'Nói ảnh hưởng (对身体 / 睡觉…)', any: ['对', '身体', '睡觉', '不好', '好'] }
      ],
      bonus: { label: 'Dùng 以后 để nói dự định', any: ['以后'] },
      vocab: ['咖啡', '对', '以后'],
      minLen: 12,
      sample: '我每天早上喝一杯咖啡，下午不喝，喝了晚上不能睡觉。',
      sample_py: 'Wǒ měi tiān zǎoshang hē yì bēi kāfēi, xiàwǔ bù hē, hēle wǎnshang bù néng shuìjiào.',
      sample_vn: 'Mỗi sáng tôi uống một cốc cà phê, buổi chiều thì không uống, uống vào tối không ngủ được.',
      tip: 'Cốc cà phê dùng lượng từ 杯: 一杯咖啡; “tốt / không tốt cho …” = 对 + … + 好 / 不好.'
    },
    {
      situation: 'Bạn bè hỏi kế hoạch của bạn sau kỳ thi.',
      q_zh: '考试以后你准备做什么？',
      q_py: 'Kǎoshì yǐhòu nǐ zhǔnbèi zuò shénme?',
      q_vn: 'Thi xong bạn định làm gì?',
      grammar: { label: '……以后，我准备……', any: ['以后', '准备'] },
      need: [
        { label: 'Nói việc định làm', any: ['去', '买', '看', '旅游', '运动', '休息', '吃', '踢', '跑步', '睡觉'] },
        { label: 'Nói làm cùng ai / ở đâu', any: ['和', '一起', '朋友', '家', '北京', '外面', '在'] },
        { label: 'Dùng 还 để nói thêm việc khác', any: ['还'] }
      ],
      bonus: { label: 'Dùng 就 / 有点儿', any: ['就', '有点儿'] },
      vocab: ['考试', '以后', '准备', '还'],
      minLen: 14,
      sample: '考试以后我准备和朋友去北京旅游，还想买几件新衣服。',
      sample_py: 'Kǎoshì yǐhòu wǒ zhǔnbèi hé péngyou qù Běijīng lǚyóu, hái xiǎng mǎi jǐ jiàn xīn yīfu.',
      sample_vn: 'Thi xong tôi định cùng bạn đi Bắc Kinh du lịch, còn muốn mua mấy chiếc áo mới.',
      tip: 'Sự việc + 以后 = sau khi …; 还 + động từ để thêm một việc nữa.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 5 + ôn bài 1–4 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay trời hơi nóng, tôi không muốn đi đá bóng.', zh:'今天有点儿热，我不想去踢足球。', py:'Jīntiān yǒudiǎnr rè, wǒ bù xiǎng qù tī zúqiú.'},
  {vi:'Thầy Vương chính là thầy dạy tiếng Trung của tôi.', zh:'王老师就是我的汉语老师。', py:'Wáng lǎoshī jiù shì wǒ de Hànyǔ lǎoshī.'},
  {vi:'Sau này tôi muốn làm việc ở Trung Quốc.', zh:'以后我想在中国工作。', py:'Yǐhòu wǒ xiǎng zài Zhōngguó gōngzuò.'},
  {vi:'Cá bạn nấu khá ngon, tôi còn muốn ăn thêm một chút.', zh:'你做的鱼不错，我还想吃一点儿。', py:'Nǐ zuò de yú búcuò, wǒ hái xiǎng chī yìdiǎnr.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi đã chuẩn bị rất nhiều hoa quả, các bạn đến ăn đi.', zh:'我准备了很多水果，你们来吃吧。', py:'Wǒ zhǔnbèile hěn duō shuǐguǒ, nǐmen lái chī ba.'},
  {vi:'Tôi không biết nghĩa của chữ này, chúng ta hỏi thầy giáo một chút đi.', zh:'这个字的意思我不知道，我们问一下老师吧。', py:'Zhège zì de yìsi wǒ bù zhīdào, wǒmen wèn yíxià lǎoshī ba.'},
  {vi:'Bên ngoài mưa rồi, bạn có thể đi taxi về.', zh:'外面下雨了，你可以坐出租车回去。', py:'Wàimiàn xià yǔ le, nǐ kěyǐ zuò chūzūchē huíqu.'},
];
