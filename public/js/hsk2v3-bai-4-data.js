// HSK 2 (3.0 Mới) · Bài 4 · 你穿红色的很好看
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 4, trang 029-036.

var vocabData = [
  {
    "n": 1,
    "zh": "过",
    "py": "guo",
    "pos": "Trợ từ",
    "vn": "đã từng",
    "hv": "quá",
    "em": "🕰️",
    "lesson": 1,
    "ex_zh": "我们来过这家商场吗？",
    "ex_py": "Wǒmen láiguo zhè jiā shāngchǎng ma?",
    "ex_vn": "Chúng ta đã từng đến trung tâm mua sắm này chưa?",
    "exList": [
      {
        "zh": "我们来过这家商场吗？",
        "py": "Wǒmen láiguo zhè jiā shāngchǎng ma?",
        "vn": "Chúng ta đã từng đến trung tâm mua sắm này chưa?"
      },
      {
        "zh": "她去过中国。",
        "py": "Tā qùguo Zhōngguó.",
        "vn": "Cô ấy từng đến Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guò",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "寸 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "qua; từng",
        "tip": "Đọc nhẹ \"guo\" khi làm trợ từ động thái: 吃过、去过。",
        "cf": "",
        "w": "来过 / 去过 / 吃过"
      }
    ],
    "colloFull": [
      {
        "zh": "去过北京",
        "py": "qù guo Běijīng",
        "vn": "đã từng đi Bắc Kinh"
      },
      {
        "zh": "吃过",
        "py": "chī guo",
        "vn": "đã từng ăn"
      },
      {
        "zh": "看过这个电影",
        "py": "kàn guo zhège diànyǐng",
        "vn": "đã xem bộ phim này"
      },
      {
        "zh": "没去过",
        "py": "méi qù guo",
        "vn": "chưa từng đi"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 过",
        "m": "Đã TỪNG làm gì — kinh nghiệm: 我去过北京"
      },
      {
        "s": "Phủ định là 没 + V + 过: 我没去过北京"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã từng đi Bắc Kinh một lần.",
        "answer": "我去过一次北京。",
        "answerPy": "Wǒ qùguo yí cì Běijīng.",
        "note": "过 chỉ kinh nghiệm đã từng làm.",
        "pair": "V + 过"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa từng ăn vịt quay Bắc Kinh.",
        "answer": "我没吃过北京烤鸭。",
        "answerPy": "Wǒ méi chīguo Běijīng kǎoyā.",
        "note": "Phủ định của 过 là 没 + V + 过.",
        "pair": "没 + V + 过"
      }
    ]
  },
  {
    "n": 2,
    "zh": "商场",
    "py": "shāngchǎng",
    "pos": "Danh từ",
    "vn": "trung tâm thương mại",
    "hv": "thương trường",
    "em": "🏬",
    "img": "/images/hsk2v3-bai-4/shangchang.jpg",
    "lesson": 1,
    "ex_zh": "我和妈妈去了一家商场。",
    "ex_py": "Wǒ hé māma qùle yì jiā shāngchǎng.",
    "ex_vn": "Mình đã đi đến một trung tâm thương mại với mẹ.",
    "exList": [
      {
        "zh": "我和妈妈去了一家商场。",
        "py": "Wǒ hé māma qùle yì jiā shāngchǎng.",
        "vn": "Mình đã đi đến một trung tâm thương mại với mẹ."
      },
      {
        "zh": "商场里的东西很便宜。",
        "py": "Shāngchǎng li de dōngxi hěn piányi.",
        "vn": "Đồ trong trung tâm thương mại rất rẻ."
      }
    ],
    "hanzi": [
      {
        "c": "商",
        "p": "shāng",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "亠 → 丷 → 冂 → 八 → 口",
        "rad": "口 (khẩu – miệng)",
        "mean": "buôn bán, thương mại",
        "tip": "商场 = nơi buôn bán lớn; 商店 = cửa hàng.",
        "cf": "",
        "w": "商场 / 商店 / 商量"
      },
      {
        "c": "场",
        "p": "chǎng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "土(thổ) trái → 𠃌(biến thể giản thể của 昜) phải",
        "rad": "土 (thổ – đất)",
        "mean": "bãi, sân, trường (nơi diễn ra hoạt động)",
        "tip": "Bộ Đất 土(mặt đất bằng phẳng) + phần bên phải (biến thể của 昜, chỉ ánh nắng rực rỡ) → khoảng ĐẤT trống rộng lớn, BÃI, SÂN, TRƯỜNG.",
        "cf": "扬 (yáng – \"giương lên\", bộ 扌 nhưng phần phải giống hệt\")",
        "w": "商场 / 机场 / 场地"
      }
    ],
    "colloFull": [
      {
        "zh": "去商场",
        "py": "qù shāngchǎng",
        "vn": "đi trung tâm thương mại"
      },
      {
        "zh": "在商场",
        "py": "zài shāngchǎng",
        "vn": "ở trung tâm thương mại"
      },
      {
        "zh": "商场里",
        "py": "shāngchǎng li",
        "vn": "trong trung tâm thương mại"
      },
      {
        "zh": "商场的东西",
        "py": "shāngchǎng de dōngxi",
        "vn": "đồ của trung tâm thương mại"
      }
    ],
    "patterns": [
      {
        "s": "去 / 在 + 商场",
        "m": "Đi, ở trung tâm thương mại"
      },
      {
        "s": "商场 lớn hơn 商店 — 商场 có nhiều gian hàng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi muốn đi trung tâm thương mại mua quần áo.",
        "answer": "今天下午我想去商场买衣服。",
        "answerPy": "Jīntiān xiàwǔ wǒ xiǎng qù shāngchǎng mǎi yīfu.",
        "note": "商场 lớn hơn 商店.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong trung tâm thương mại có rất nhiều người.",
        "answer": "商场里有很多人。",
        "answerPy": "Shāngchǎng li yǒu hěn duō rén.",
        "note": "商场里 — trong trung tâm thương mại.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 3,
    "zh": "进去",
    "py": "jìnqù",
    "pos": "Động từ",
    "vn": "đi vào",
    "hv": "tiến khứ",
    "em": "🚪",
    "img": "/images/hsk2v3-bai-4/jinqu.jpg",
    "lesson": 1,
    "ex_zh": "我们进去看看吧。",
    "ex_py": "Wǒmen jìnqù kànkan ba.",
    "ex_vn": "Chúng ta đi vào xem một chút nhé.",
    "exList": [
      {
        "zh": "我们进去看看吧。",
        "py": "Wǒmen jìnqù kànkan ba.",
        "vn": "Chúng ta đi vào xem một chút nhé."
      },
      {
        "zh": "我看见老师在教室里，你进去找她吧。",
        "py": "Wǒ kànjiàn lǎoshī zài jiàoshì li, nǐ jìnqù zhǎo tā ba.",
        "vn": "Tôi thấy cô giáo ở trong lớp, bạn vào tìm cô ấy đi."
      }
    ],
    "hanzi": [
      {
        "c": "进",
        "p": "jìn",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "井 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "vào, tiến vào",
        "tip": "进去 = vào (xa người nói); 进来 = vào (về phía người nói).",
        "cf": "",
        "w": "进去 / 进来 / 进步"
      },
      {
        "c": "去",
        "p": "qù",
        "type": "会意字 · Chữ hội ý",
        "st": 5,
        "ord": "土 → 厶",
        "rad": "厶 (khư)",
        "mean": "đi, đến",
        "tip": "动词 + 去 = đi xa chỗ người nói: 上去、下去、进去、出去。",
        "cf": "来 (lái)",
        "w": "进去 / 上去 / 下去"
      }
    ],
    "colloFull": [
      {
        "zh": "进去看看",
        "py": "jìnqù kànkàn",
        "vn": "vào xem thử"
      },
      {
        "zh": "走进去",
        "py": "zǒu jìnqù",
        "vn": "đi vào"
      },
      {
        "zh": "进去吧",
        "py": "jìnqù ba",
        "vn": "vào đi"
      },
      {
        "zh": "别进去",
        "py": "bié jìnqù",
        "vn": "đừng vào"
      }
    ],
    "patterns": [
      {
        "s": "进去 + động từ",
        "m": "Vào trong làm gì: 进去看看"
      },
      {
        "s": "进去 (vào, xa người nói) ↔ 进来 (vào, gần người nói)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta vào xem thử đi.",
        "answer": "我们进去看看吧。",
        "answerPy": "Wǒmen jìnqu kànkan ba.",
        "note": "进去 + động từ — vào trong làm gì.",
        "pair": "进去 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy đang trong tiết học, đừng vào.",
        "answer": "老师正在上课，别进去。",
        "answerPy": "Lǎoshī zhèngzài shàngkè, bié jìnqu.",
        "note": "进去 (xa người nói) ↔ 进来 (gần người nói).",
        "pair": "别 + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "条",
    "py": "tiáo",
    "pos": "Lượng từ",
    "vn": "cái, chiếc (quần, váy, cá, sông…)",
    "hv": "điều",
    "em": "👖",
    "lesson": 1,
    "ex_zh": "我想买条裤子。",
    "ex_py": "Wǒ xiǎng mǎi tiáo kùzi.",
    "ex_vn": "Con muốn mua chiếc quần.",
    "exList": [
      {
        "zh": "我想买条裤子。",
        "py": "Wǒ xiǎng mǎi tiáo kùzi.",
        "vn": "Con muốn mua chiếc quần."
      },
      {
        "zh": "你已经有一条黑色的裤子了。",
        "py": "Nǐ yǐjīng yǒu yì tiáo hēisè de kùzi le.",
        "vn": "Con đã có một chiếc quần đen rồi."
      }
    ],
    "hanzi": [
      {
        "c": "条",
        "p": "tiáo",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "夂 → 木",
        "rad": "木 (mộc – cây)",
        "mean": "sợi, chiếc (vật dài)",
        "tip": "Dùng cho vật dài: 一条裤子、一条鱼、一条路。",
        "cf": "",
        "w": "一条裤子 / 一条鱼 / 一条街"
      }
    ],
    "colloFull": [
      {
        "zh": "一条裤子",
        "py": "yì tiáo kùzi",
        "vn": "một cái quần"
      },
      {
        "zh": "两条鱼",
        "py": "liǎng tiáo yú",
        "vn": "hai con cá"
      },
      {
        "zh": "这条裤子",
        "py": "zhè tiáo kùzi",
        "vn": "cái quần này"
      },
      {
        "zh": "几条",
        "py": "jǐ tiáo",
        "vn": "mấy cái"
      }
    ],
    "patterns": [
      {
        "s": "số + 条 + vật dài",
        "m": "Lượng từ 条 cho vật dài: 裤子 · 鱼 · 路"
      },
      {
        "s": "✗ 一个裤子 → ✓ 一条裤子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua hai cái quần.",
        "answer": "我想买两条裤子。",
        "answerPy": "Wǒ xiǎng mǎi liǎng tiáo kùzi.",
        "note": "✗ 一个裤子 → ✓ 一条裤子.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái quần này bao nhiêu tiền?",
        "answer": "这条裤子多少钱？",
        "answerPy": "Zhè tiáo kùzi duōshao qián?",
        "note": "条 dùng cho vật dài: 裤子 · 鱼 · 路.",
        "pair": "多少钱？"
      }
    ]
  },
  {
    "n": 5,
    "zh": "裤子",
    "py": "kùzi",
    "pos": "Danh từ",
    "vn": "quần",
    "hv": "khố tử",
    "em": "👖",
    "img": "/images/hsk2v3-bai-4/kuzi.jpg",
    "lesson": 1,
    "ex_zh": "我想买这条白色的裤子。",
    "ex_py": "Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.",
    "ex_vn": "Con muốn mua chiếc quần màu trắng này.",
    "exList": [
      {
        "zh": "我想买这条白色的裤子。",
        "py": "Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.",
        "vn": "Con muốn mua chiếc quần màu trắng này."
      },
      {
        "zh": "我没穿过红色的裤子。",
        "py": "Wǒ méi chuānguo hóngsè de kùzi.",
        "vn": "Con chưa từng mặc quần màu đỏ."
      }
    ],
    "hanzi": [
      {
        "c": "裤",
        "p": "kù",
        "type": "形声字 · Chữ hình thanh",
        "st": 12,
        "ord": "衤 → 广 → 车",
        "rad": "衤 (y – áo)",
        "mean": "quần",
        "tip": "Bộ 衤 (áo quần) cho biết chữ liên quan đến trang phục.",
        "cf": "",
        "w": "裤子 / 短裤"
      },
      {
        "c": "子",
        "p": "zi",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "𠃉(đầu, tay) → 一(chân quấn tã)",
        "rad": "子 (tử – tự thành bộ, con)",
        "mean": "con; hậu tố danh từ không mang nghĩa riêng",
        "tip": "Hình đứa TRẺ sơ sinh đầu to, hai tay đưa lên, chân quấn tã → CON; khi đọc nhẹ (zi) thường làm hậu tố danh từ như 杯子, 桌子.",
        "cf": "孑 (jié – \"cô độc, lẻ loi\", thiếu nét móc dưới)",
        "w": "裤子 / 儿子 / 杯子"
      }
    ],
    "colloFull": [
      {
        "zh": "一条裤子",
        "py": "yì tiáo kùzi",
        "vn": "một cái quần"
      },
      {
        "zh": "买裤子",
        "py": "mǎi kùzi",
        "vn": "mua quần"
      },
      {
        "zh": "穿裤子",
        "py": "chuān kùzi",
        "vn": "mặc quần"
      },
      {
        "zh": "黑色的裤子",
        "py": "hēisè de kùzi",
        "vn": "cái quần màu đen"
      }
    ],
    "patterns": [
      {
        "s": "穿 + 裤子",
        "m": "Mặc quần — dùng 穿 như 穿衣服"
      },
      {
        "s": "裤 + 子",
        "m": "子 là đuôi từ đọc nhẹ, giống 桌子 · 包子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thích mặc quần màu đen.",
        "answer": "我喜欢穿黑色的裤子。",
        "answerPy": "Wǒ xǐhuan chuān hēisè de kùzi.",
        "note": "穿裤子 — mặc quần, dùng 穿.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì cái quần này quá đắt nên tôi đã không mua.",
        "answer": "因为这条裤子太贵，所以我没买。",
        "answerPy": "Yīnwèi zhè tiáo kùzi tài guì, suǒyǐ wǒ méi mǎi.",
        "note": "Tiếng Trung dùng cả hai vế 因为 và 所以.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 6,
    "zh": "白色",
    "py": "báisè",
    "pos": "Danh từ",
    "vn": "màu trắng",
    "hv": "bạch sắc",
    "em": "⚪",
    "img": "/images/hsk2v3-bai-4/baise.jpg",
    "lesson": 2,
    "ex_zh": "你有很多白色的衣服。",
    "ex_py": "Nǐ yǒu hěn duō báisè de yīfu.",
    "ex_vn": "Con đã có rất nhiều quần áo màu trắng rồi.",
    "exList": [
      {
        "zh": "你有很多白色的衣服。",
        "py": "Nǐ yǒu hěn duō báisè de yīfu.",
        "vn": "Con đã có rất nhiều quần áo màu trắng rồi."
      },
      {
        "zh": "我觉得这条白色的不太好看。",
        "py": "Wǒ juéde zhè tiáo báisè de bú tài hǎokàn.",
        "vn": "Mẹ thấy chiếc màu trắng này không đẹp lắm."
      }
    ],
    "hanzi": [
      {
        "c": "白",
        "p": "bái",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿(phẩy) trên → 日(nhật, biến thể) dưới",
        "rad": "白 (bạch – tự thành bộ)",
        "mean": "trắng, sáng rõ; ban ngày",
        "tip": "Như chữ 日(mặt trời) thêm một nét phẩy phía trên tượng trưng ÁNH SÁNG chiếu ra → nghĩa TRẮNG, SÁNG RÕ; có ánh sáng mặt trời nên 白天 = BAN NGÀY.",
        "cf": "百 (bǎi – \"trăm\", thêm nét ngang trên đầu\")",
        "w": "白色 / 白天 / 明白"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "⺈ → 巴",
        "rad": "色 (sắc)",
        "mean": "màu sắc",
        "tip": "Ghép với màu: 白色、红色、绿色、黑色。",
        "cf": "",
        "w": "白色 / 红色 / 颜色"
      }
    ],
    "colloFull": [
      {
        "zh": "白色的衣服",
        "py": "báisè de yīfu",
        "vn": "quần áo màu trắng"
      },
      {
        "zh": "白色的裤子",
        "py": "báisè de kùzi",
        "vn": "quần màu trắng"
      },
      {
        "zh": "喜欢白色",
        "py": "xǐhuan báisè",
        "vn": "thích màu trắng"
      },
      {
        "zh": "白色的书包",
        "py": "báisè de shūbāo",
        "vn": "cặp sách màu trắng"
      }
    ],
    "patterns": [
      {
        "s": "白色 + 的 + danh từ",
        "m": "Cái gì màu trắng"
      },
      {
        "s": "白色 · 红色 · 绿色 · 黑色 — đều ghép với 色"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn thử cái áo màu trắng kia.",
        "answer": "我想试一下那件白色的衣服。",
        "answerPy": "Wǒ xiǎng shì yíxià nà jiàn báisè de yīfu.",
        "note": "白色 + 的 + danh từ.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì tôi thích màu trắng nên tôi mua cái cặp màu trắng.",
        "answer": "因为我喜欢白色，所以我买了白色的书包。",
        "answerPy": "Yīnwèi wǒ xǐhuan báisè, suǒyǐ wǒ mǎile báisè de shūbāo.",
        "note": "白色 · 红色 · 绿色 · 黑色 đều ghép với 色.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 7,
    "zh": "因为",
    "py": "yīnwèi",
    "pos": "Liên từ",
    "vn": "bởi vì, vì",
    "hv": "nhân vị",
    "em": "🔗",
    "lesson": 2,
    "ex_zh": "因为我喜欢白色啊！",
    "ex_py": "Yīnwèi wǒ xǐhuan báisè a!",
    "ex_vn": "Vì con thích màu trắng ạ.",
    "exList": [
      {
        "zh": "因为我喜欢白色啊！",
        "py": "Yīnwèi wǒ xǐhuan báisè a!",
        "vn": "Vì con thích màu trắng ạ."
      },
      {
        "zh": "因为我生病了，今天没去上班。",
        "py": "Yīnwèi wǒ shēngbìng le, jīntiān méi qù shàngbān.",
        "vn": "Vì tôi bị ốm nên hôm nay không đi làm."
      }
    ],
    "hanzi": [
      {
        "c": "因",
        "p": "yīn",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "囗 → 大",
        "rad": "囗 (vi – bao quanh)",
        "mean": "nguyên nhân",
        "tip": "因为 thường đi cặp với 所以.",
        "cf": "",
        "w": "因为 / 原因"
      },
      {
        "c": "为",
        "p": "wèi",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 4,
        "ord": "nét liền",
        "rad": "丶 (chủ)",
        "mean": "vì, để",
        "tip": "Chữ giản thể đơn giản hóa từ hình bàn tay LÀM VIỆC gì đó → mở rộng nghĩa \"làm VÌ mục đích\" = VÌ, ĐỂ.",
        "cf": "办 (bàn – \"làm\", có 力 thay vì 丶\")",
        "w": "因为 / 为了"
      }
    ],
    "colloFull": [
      {
        "zh": "因为下雨",
        "py": "yīnwèi xià yǔ",
        "vn": "vì trời mưa"
      },
      {
        "zh": "因为很忙",
        "py": "yīnwèi hěn máng",
        "vn": "vì rất bận"
      },
      {
        "zh": "因为太贵",
        "py": "yīnwèi tài guì",
        "vn": "vì quá đắt"
      },
      {
        "zh": "因为……所以……",
        "py": "yīnwèi suǒyǐ",
        "vn": "vì… nên…"
      }
    ],
    "patterns": [
      {
        "s": "因为 A，所以 B",
        "m": "Vì A nên B — cặp liên từ nhân quả đầu tiên"
      },
      {
        "s": "Tiếng Trung dùng CẢ HAI vế 因为 và 所以, khác tiếng Việt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì trời mưa nên chúng tôi không ra ngoài.",
        "answer": "因为下雨，所以我们没出去。",
        "answerPy": "Yīnwèi xià yǔ, suǒyǐ wǒmen méi chūqu.",
        "note": "Cặp liên từ nhân quả đầu tiên các em học.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì hôm nay rất bận nên tôi không đi trung tâm thương mại.",
        "answer": "因为今天很忙，所以我不去商场。",
        "answerPy": "Yīnwèi jīntiān hěn máng, suǒyǐ wǒ bú qù shāngchǎng.",
        "note": "因为 mở đầu vế nguyên nhân.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 8,
    "zh": "试",
    "py": "shì",
    "pos": "Động từ",
    "vn": "thử",
    "hv": "thí",
    "em": "🧪",
    "img": "/images/hsk2v3-bai-4/shi.jpg",
    "lesson": 2,
    "ex_zh": "你试试那条红色的吧。",
    "ex_py": "Nǐ shìshi nà tiáo hóngsè de ba.",
    "ex_vn": "Con thử chiếc màu đỏ kia xem sao.",
    "exList": [
      {
        "zh": "你试试那条红色的吧。",
        "py": "Nǐ shìshi nà tiáo hóngsè de ba.",
        "vn": "Con thử chiếc màu đỏ kia xem sao."
      },
      {
        "zh": "妈妈让我试了试。",
        "py": "Māma ràng wǒ shìle shì.",
        "vn": "Mẹ đã bảo mình thử xem."
      }
    ],
    "hanzi": [
      {
        "c": "试",
        "p": "shì",
        "type": "形声字 · Chữ hình thanh",
        "st": 8,
        "ord": "讠 → 式",
        "rad": "讠 (ngôn – lời nói)",
        "mean": "thử, thi",
        "tip": "试试 (thử một chút) là dạng lặp của động từ đơn âm tiết.",
        "cf": "",
        "w": "试试 / 考试 / 试衣服"
      }
    ],
    "colloFull": [
      {
        "zh": "试一下",
        "py": "shì yíxià",
        "vn": "thử một chút"
      },
      {
        "zh": "试试",
        "py": "shìshì",
        "vn": "thử xem"
      },
      {
        "zh": "试试这条",
        "py": "shìshì zhè tiáo",
        "vn": "thử cái này"
      },
      {
        "zh": "想试",
        "py": "xiǎng shì",
        "vn": "muốn thử"
      }
    ],
    "patterns": [
      {
        "s": "试 + 一下 / 试试",
        "m": "Thử một chút — dạng lặp làm ngữ khí nhẹ đi"
      },
      {
        "s": "试 hay dùng khi mua quần áo: 我可以试一下吗？"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thử cái quần này được không ạ?",
        "answer": "我可以试一下这条裤子吗？",
        "answerPy": "Wǒ kěyǐ shì yíxià zhè tiáo kùzi ma?",
        "note": "Câu rất hay dùng khi mua quần áo.",
        "pair": "可以……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn thử cái màu đỏ xem.",
        "answer": "你试试红色的吧。",
        "answerPy": "Nǐ shìshi hóngsè de ba.",
        "note": "试试 — dạng lặp làm ngữ khí nhẹ đi.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 9,
    "zh": "红色",
    "py": "hóngsè",
    "pos": "Danh từ",
    "vn": "màu đỏ",
    "hv": "hồng sắc",
    "em": "🔴",
    "img": "/images/hsk2v3-bai-4/hongse.jpg",
    "lesson": 2,
    "ex_zh": "我没穿过红色的。",
    "ex_py": "Wǒ méi chuānguo hóngsè de.",
    "ex_vn": "Con chưa từng mặc màu đỏ.",
    "exList": [
      {
        "zh": "我没穿过红色的。",
        "py": "Wǒ méi chuānguo hóngsè de.",
        "vn": "Con chưa từng mặc màu đỏ."
      },
      {
        "zh": "你穿红色的很好看。",
        "py": "Nǐ chuān hóngsè de hěn hǎokàn.",
        "vn": "Con mặc đồ màu đỏ rất đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "红",
        "p": "hóng",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "纟 → 工",
        "rad": "纟 (mịch – sợi tơ)",
        "mean": "màu đỏ",
        "tip": "Bộ 纟 vì ngày xưa màu sắc gắn với việc nhuộm vải.",
        "cf": "",
        "w": "红色 / 红茶 / 很红"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "⺈ → 巴",
        "rad": "色 (sắc)",
        "mean": "màu sắc",
        "tip": "Ghép với màu: 白色、红色、绿色、黑色。",
        "cf": "",
        "w": "红色 / 白色 / 颜色"
      }
    ],
    "colloFull": [
      {
        "zh": "红色的衣服",
        "py": "hóngsè de yīfu",
        "vn": "quần áo màu đỏ"
      },
      {
        "zh": "红色的书包",
        "py": "hóngsè de shūbāo",
        "vn": "cặp sách màu đỏ"
      },
      {
        "zh": "喜欢红色",
        "py": "xǐhuan hóngsè",
        "vn": "thích màu đỏ"
      },
      {
        "zh": "红色的裤子",
        "py": "hóngsè de kùzi",
        "vn": "quần màu đỏ"
      }
    ],
    "patterns": [
      {
        "s": "红色 + 的 + danh từ",
        "m": "Cái gì màu đỏ"
      },
      {
        "s": "红色 là màu may mắn trong văn hoá Trung Quốc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái cặp màu đỏ này đẹp hơn.",
        "answer": "这个红色的书包更漂亮。",
        "answerPy": "Zhège hóngsè de shūbāo gèng piàoliang.",
        "note": "更 đứng trước tính từ.",
        "pair": "更 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì màu đỏ là màu may mắn nên rất nhiều người Trung Quốc thích màu đỏ.",
        "answer": "因为红色很好，所以很多中国人喜欢红色。",
        "answerPy": "Yīnwèi hóngsè hěn hǎo, suǒyǐ hěn duō Zhōngguó rén xǐhuan hóngsè.",
        "note": "红色 là màu may mắn trong văn hoá Trung Quốc.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "所以",
    "py": "suǒyǐ",
    "pos": "Liên từ",
    "vn": "cho nên, nên",
    "hv": "sở dĩ",
    "em": "➡️",
    "lesson": 2,
    "ex_zh": "就是因为没穿过，所以要试试啊！",
    "ex_py": "Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!",
    "ex_vn": "Chính là vì chưa từng mặc nên cần phải thử xem.",
    "exList": [
      {
        "zh": "就是因为没穿过，所以要试试啊！",
        "py": "Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!",
        "vn": "Chính là vì chưa từng mặc nên cần phải thử xem."
      },
      {
        "zh": "因为是新开的，所以这几天东西很便宜。",
        "py": "Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.",
        "vn": "Vì mới khai trương nên mấy hôm nay đồ rất rẻ."
      }
    ],
    "hanzi": [
      {
        "c": "所",
        "p": "suǒ",
        "type": "形声字 · Chữ hình thanh",
        "st": 8,
        "ord": "户 → 斤",
        "rad": "户 (hộ – cửa)",
        "mean": "nơi; (kết cấu)",
        "tip": "所以 = vì vậy, đứng ở vế kết quả.",
        "cf": "",
        "w": "所以 / 所有 / 厕所"
      },
      {
        "c": "以",
        "p": "yǐ",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "㇒㇙(chấm-phẩy) trái → 人(nhân) phải",
        "rad": "人 (nhân – người)",
        "mean": "dùng, bằng, để; (trong 可以: có thể)",
        "tip": "亻(người) cầm công cụ (nét chấm-phẩy bên trái) để làm việc gì → nghĩa DÙNG, mở rộng thành ĐỂ, BẰNG.",
        "cf": "似 (sì – \"giống như\", chính là 亻 + 以 ghép lại\")",
        "w": "所以 / 可以 / 以为"
      }
    ],
    "colloFull": [
      {
        "zh": "所以我不去",
        "py": "suǒyǐ wǒ bú qù",
        "vn": "nên tôi không đi"
      },
      {
        "zh": "所以很累",
        "py": "suǒyǐ hěn lèi",
        "vn": "nên rất mệt"
      },
      {
        "zh": "所以没买",
        "py": "suǒyǐ méi mǎi",
        "vn": "nên đã không mua"
      },
      {
        "zh": "因为……所以……",
        "py": "yīnwèi suǒyǐ",
        "vn": "vì… nên…"
      }
    ],
    "patterns": [
      {
        "s": "因为 A，所以 B",
        "m": "Vì A nên B — 所以 mở đầu vế kết quả"
      },
      {
        "s": "所以 luôn đứng ĐẦU vế thứ hai"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì hôm qua rất mệt nên tôi đã ngủ sớm.",
        "answer": "因为昨天很累，所以我很早就睡觉了。",
        "answerPy": "Yīnwèi zuótiān hěn lèi, suǒyǐ wǒ hěn zǎo jiù shuìjiào le.",
        "note": "所以 luôn đứng đầu vế thứ hai.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì chỗ đó xa quá nên chúng tôi bắt taxi đi.",
        "answer": "因为那里太远了，所以我们打车去。",
        "answerPy": "Yīnwèi nàli tài yuǎn le, suǒyǐ wǒmen dǎchē qù.",
        "note": "所以 mở đầu vế kết quả.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 11,
    "zh": "书包",
    "py": "shūbāo",
    "pos": "Danh từ",
    "vn": "cặp sách",
    "hv": "thư bao",
    "em": "🎒",
    "img": "/images/hsk2v3-bai-4/shubao.jpg",
    "lesson": 3,
    "ex_zh": "妈妈，我想买个新书包。",
    "ex_py": "Māma, wǒ xiǎng mǎi ge xīn shūbāo.",
    "ex_vn": "Mẹ ơi, con muốn mua cặp sách mới ạ.",
    "exList": [
      {
        "zh": "妈妈，我想买个新书包。",
        "py": "Māma, wǒ xiǎng mǎi ge xīn shūbāo.",
        "vn": "Mẹ ơi, con muốn mua cặp sách mới ạ."
      },
      {
        "zh": "这么多漂亮的书包！",
        "py": "Zhème duō piàoliang de shūbāo!",
        "vn": "Bao nhiêu là cặp sách đẹp!"
      }
    ],
    "hanzi": [
      {
        "c": "书",
        "p": "shū",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "𠃌 (biến thể) → 一 → 乙 nét cong móc",
        "rad": "乙 (ất – biến thể, nét uốn)",
        "mean": "sách; viết, thư",
        "tip": "Hình cuộn giấy có nét bút cong lượn ghi chép chữ nghĩa lên trên → SÁCH, VIẾT, THƯ.",
        "cf": "己 (jǐ – \"bản thân, mình\", nét cong có hình dáng gần giống)",
        "w": "书包 / 书店 / 看书"
      },
      {
        "c": "包",
        "p": "bāo",
        "type": "象形字 · Chữ tượng hình",
        "st": 5,
        "ord": "⺈ → 巳",
        "rad": "勹 (bao)",
        "mean": "túi, bọc",
        "tip": "书包 = túi đựng sách; 面包 = bánh mì.",
        "cf": "",
        "w": "书包 / 面包 / 包子"
      }
    ],
    "colloFull": [
      {
        "zh": "一个书包",
        "py": "yí gè shūbāo",
        "vn": "một cái cặp sách"
      },
      {
        "zh": "买书包",
        "py": "mǎi shūbāo",
        "vn": "mua cặp sách"
      },
      {
        "zh": "红色的书包",
        "py": "hóngsè de shūbāo",
        "vn": "cặp sách màu đỏ"
      },
      {
        "zh": "书包里",
        "py": "shūbāo li",
        "vn": "trong cặp sách"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 书包",
        "m": "Lượng từ của 书包 là 个"
      },
      {
        "s": "书 + 包",
        "m": "Túi (包) đựng sách (书)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong cặp sách của tôi có ba quyển sách.",
        "answer": "我的书包里有三本书。",
        "answerPy": "Wǒ de shūbāo li yǒu sān běn shū.",
        "note": "书包里 — trong cặp sách.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một cái cặp sách màu xanh lá.",
        "answer": "我想买一个绿色的书包。",
        "answerPy": "Wǒ xiǎng mǎi yí ge lǜsè de shūbāo.",
        "note": "Lượng từ của 书包 là 个.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "过去",
    "py": "guòqù",
    "pos": "Động từ",
    "vn": "sang, đi sang",
    "hv": "quá khứ",
    "em": "➡️",
    "img": "/images/hsk2v3-bai-4/guoqu.jpg",
    "lesson": 3,
    "ex_zh": "那边卖书包，我们过去看看吧。",
    "ex_py": "Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.",
    "ex_vn": "Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.",
    "exList": [
      {
        "zh": "那边卖书包，我们过去看看吧。",
        "py": "Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.",
        "vn": "Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé."
      },
      {
        "zh": "你过去拿一下，好吗？",
        "py": "Nǐ guòqù ná yíxià, hǎo ma?",
        "vn": "Bạn sang lấy giúp một chút được không?"
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guò",
        "type": "半包围 · Bán bao (辶)",
        "st": 6,
        "ord": "寸 (thốn) → 辶 (viết sau cùng)",
        "rad": "辶 (sước – đi)",
        "mean": "đi qua, trải qua",
        "tip": "Bộ 辶 (đi) → thời gian/sự việc TRÔI QUA, cũng dùng cho việc \"đón\" một ngày lễ.",
        "cf": "边 (biān, bên, Bài 3)",
        "w": "过去 / 过生日 / 过年"
      },
      {
        "c": "去",
        "p": "qù",
        "type": "会意字 · Chữ hội ý",
        "st": 5,
        "ord": "土 → 厶",
        "rad": "厶 (khư)",
        "mean": "đi, đến",
        "tip": "过去 (sang đó) ↔ 过来 (sang đây).",
        "cf": "过来 (guòlái)",
        "w": "过去 / 过来 / 出去"
      }
    ],
    "colloFull": [
      {
        "zh": "走过去",
        "py": "zǒu guòqù",
        "vn": "đi qua đó"
      },
      {
        "zh": "拿过去",
        "py": "ná guòqù",
        "vn": "mang qua đó"
      },
      {
        "zh": "过去看看",
        "py": "guòqù kànkàn",
        "vn": "qua đó xem"
      },
      {
        "zh": "过去吧",
        "py": "guòqù ba",
        "vn": "qua đó đi"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 过去",
        "m": "Đi ra xa người nói: 走过去"
      },
      {
        "s": "过去 (ra xa mình) ↔ 过来 (lại gần mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đi qua đó xem một chút.",
        "answer": "你走过去看一下。",
        "answerPy": "Nǐ zǒu guòqu kàn yíxià.",
        "note": "过去 — đi ra xa người nói.",
        "pair": "V + 过去"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái này bạn mang qua đó cho thầy nhé.",
        "answer": "这个你拿过去给老师吧。",
        "answerPy": "Zhège nǐ ná guòqu gěi lǎoshī ba.",
        "note": "过去 (ra xa) ↔ 过来 (lại gần).",
        "pair": "V + 过去"
      }
    ]
  },
  {
    "n": 13,
    "zh": "绿色",
    "py": "lǜsè",
    "pos": "Danh từ",
    "vn": "màu xanh lá cây",
    "hv": "lục sắc",
    "em": "🟢",
    "img": "/images/hsk2v3-bai-4/luse.jpg",
    "lesson": 3,
    "ex_zh": "我也觉得绿色的更好看。",
    "ex_py": "Wǒ yě juéde lǜsè de gèng hǎokàn.",
    "ex_vn": "Mẹ cũng thấy cái màu xanh lá cây đẹp hơn.",
    "exList": [
      {
        "zh": "我也觉得绿色的更好看。",
        "py": "Wǒ yě juéde lǜsè de gèng hǎokàn.",
        "vn": "Mẹ cũng thấy cái màu xanh lá cây đẹp hơn."
      },
      {
        "zh": "绿色的书包在那边。",
        "py": "Lǜsè de shūbāo zài nàbiān.",
        "vn": "Cặp sách màu xanh lá ở đằng kia."
      }
    ],
    "hanzi": [
      {
        "c": "绿",
        "p": "lǜ",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "纟 → 录",
        "rad": "纟 (mịch – sợi tơ)",
        "mean": "màu xanh lá",
        "tip": "绿 (xanh lá) khác 蓝 (xanh lam).",
        "cf": "蓝 (lán – xanh lam)",
        "w": "绿色 / 绿茶 / 很绿"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "⺈ → 巴",
        "rad": "色 (sắc)",
        "mean": "màu sắc",
        "tip": "Ghép với màu: 白色、红色、绿色、黑色。",
        "cf": "",
        "w": "绿色 / 白色 / 红色"
      }
    ],
    "colloFull": [
      {
        "zh": "绿色的衣服",
        "py": "lǜsè de yīfu",
        "vn": "quần áo màu xanh lá"
      },
      {
        "zh": "绿色的裤子",
        "py": "lǜsè de kùzi",
        "vn": "quần màu xanh lá"
      },
      {
        "zh": "喜欢绿色",
        "py": "xǐhuan lǜsè",
        "vn": "thích màu xanh lá"
      },
      {
        "zh": "绿色的书包",
        "py": "lǜsè de shūbāo",
        "vn": "cặp sách màu xanh lá"
      }
    ],
    "patterns": [
      {
        "s": "绿色 + 的 + danh từ",
        "m": "Cái gì màu xanh lá"
      },
      {
        "s": "绿 có bộ 纟 (sợi tơ) — màu vốn nói về màu vải nhuộm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái quần màu xanh lá này không đắt.",
        "answer": "这条绿色的裤子不贵。",
        "answerPy": "Zhè tiáo lǜsè de kùzi bú guì.",
        "note": "绿色 + 的 + danh từ.",
        "pair": "不 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn thích màu xanh lá hay màu đen?",
        "answer": "你喜欢绿色还是黑色？",
        "answerPy": "Nǐ xǐhuan lǜsè háishi hēisè?",
        "note": "Câu hỏi lựa chọn không thêm 吗.",
        "pair": "A 还是 B？"
      }
    ]
  },
  {
    "n": 14,
    "zh": "黑色",
    "py": "hēisè",
    "pos": "Danh từ",
    "vn": "màu đen",
    "hv": "hắc sắc",
    "em": "⚫",
    "img": "/images/hsk2v3-bai-4/heise.jpg",
    "lesson": 3,
    "ex_zh": "红色的、绿色的、黑色的，你想买哪个？",
    "ex_py": "Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?",
    "ex_vn": "Cái màu đỏ, màu xanh lá, màu đen, con muốn mua cái nào?",
    "exList": [
      {
        "zh": "红色的、绿色的、黑色的，你想买哪个？",
        "py": "Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?",
        "vn": "Cái màu đỏ, màu xanh lá, màu đen, con muốn mua cái nào?"
      },
      {
        "zh": "你已经有一条黑色的裤子了。",
        "py": "Nǐ yǐjīng yǒu yì tiáo hēisè de kùzi le.",
        "vn": "Con đã có một chiếc quần màu đen rồi."
      }
    ],
    "hanzi": [
      {
        "c": "黑",
        "p": "hēi",
        "type": "会意字 · Chữ hội ý",
        "st": 12,
        "ord": "口 → 土 → 灬",
        "rad": "黑 (hắc)",
        "mean": "đen",
        "tip": "Phần dưới là bộ 灬 (lửa) — khói lửa làm ám đen.",
        "cf": "",
        "w": "黑色 / 黑板 / 天黑了"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "⺈ → 巴",
        "rad": "色 (sắc)",
        "mean": "màu sắc",
        "tip": "Ghép với màu: 白色、红色、绿色、黑色。",
        "cf": "",
        "w": "黑色 / 白色 / 红色"
      }
    ],
    "colloFull": [
      {
        "zh": "黑色的裤子",
        "py": "hēisè de kùzi",
        "vn": "quần màu đen"
      },
      {
        "zh": "黑色的衣服",
        "py": "hēisè de yīfu",
        "vn": "quần áo màu đen"
      },
      {
        "zh": "喜欢黑色",
        "py": "xǐhuan hēisè",
        "vn": "thích màu đen"
      },
      {
        "zh": "黑色的书包",
        "py": "hēisè de shūbāo",
        "vn": "cặp sách màu đen"
      }
    ],
    "patterns": [
      {
        "s": "黑色 + 的 + danh từ",
        "m": "Cái gì màu đen"
      },
      {
        "s": "黑色 ↔ 白色",
        "m": "Đen ↔ trắng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố tôi thích mặc quần áo màu đen.",
        "answer": "我爸爸喜欢穿黑色的衣服。",
        "answerPy": "Wǒ bàba xǐhuan chuān hēisè de yīfu.",
        "note": "黑色 ↔ 白色 — đen và trắng.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái cặp màu đen này tôi đã mua ở trung tâm thương mại.",
        "answer": "这个黑色的书包我在商场买的。",
        "answerPy": "Zhège hēisè de shūbāo wǒ zài shāngchǎng mǎi de.",
        "note": "在 + nơi chốn + động từ.",
        "pair": "在……买"
      }
    ]
  },
  {
    "n": 15,
    "zh": "更",
    "py": "gèng",
    "pos": "Phó từ",
    "vn": "càng, hơn",
    "hv": "cánh",
    "em": "⬆️",
    "lesson": 3,
    "ex_zh": "我也觉得绿色的更好看。",
    "ex_py": "Wǒ yě juéde lǜsè de gèng hǎokàn.",
    "ex_vn": "Mình cũng thấy cái màu xanh lá đẹp hơn.",
    "exList": [
      {
        "zh": "我也觉得绿色的更好看。",
        "py": "Wǒ yě juéde lǜsè de gèng hǎokàn.",
        "vn": "Mình cũng thấy cái màu xanh lá đẹp hơn."
      },
      {
        "zh": "我更喜欢吃妈妈做的。",
        "py": "Wǒ gèng xǐhuan chī māma zuò de.",
        "vn": "Tôi thích ăn món mẹ nấu hơn."
      }
    ],
    "hanzi": [
      {
        "c": "更",
        "p": "gèng",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "一 → 日 → 乂",
        "rad": "一 (nhất)",
        "mean": "càng, hơn",
        "tip": "更 + tính từ: 更好、更漂亮、更便宜。",
        "cf": "",
        "w": "更好看 / 更便宜 / 更喜欢"
      }
    ],
    "colloFull": [
      {
        "zh": "更好",
        "py": "gèng hǎo",
        "vn": "tốt hơn"
      },
      {
        "zh": "更贵",
        "py": "gèng guì",
        "vn": "đắt hơn"
      },
      {
        "zh": "更喜欢",
        "py": "gèng xǐhuan",
        "vn": "thích hơn"
      },
      {
        "zh": "更漂亮",
        "py": "gèng piàoliang",
        "vn": "đẹp hơn"
      }
    ],
    "patterns": [
      {
        "s": "更 + tính từ",
        "m": "Hơn — so với cái vừa nhắc: 这条更好"
      },
      {
        "s": "更 đứng TRƯỚC tính từ, không đứng sau"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái quần này đẹp hơn, nhưng cũng đắt hơn.",
        "answer": "这条裤子更漂亮，但也更贵。",
        "answerPy": "Zhè tiáo kùzi gèng piàoliang, dàn yě gèng guì.",
        "note": "更 đứng trước tính từ.",
        "pair": "……但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi thích màu trắng hơn.",
        "answer": "我更喜欢白色。",
        "answerPy": "Wǒ gèng xǐhuan báisè.",
        "note": "更 cũng dùng được trước động từ chỉ cảm xúc.",
        "pair": "更 + V"
      }
    ]
  },
  {
    "n": 16,
    "zh": "颜色",
    "py": "yánsè",
    "pos": "Danh từ",
    "vn": "màu sắc",
    "hv": "nhan sắc",
    "em": "🎨",
    "img": "/images/hsk2v3-bai-4/yanse.jpg",
    "lesson": 4,
    "ex_zh": "商场里的衣服颜色很多。",
    "ex_py": "Shāngchǎng li de yīfu yánsè hěn duō.",
    "ex_vn": "Quần áo trong trung tâm thương mại có rất nhiều màu sắc.",
    "exList": [
      {
        "zh": "商场里的衣服颜色很多。",
        "py": "Shāngchǎng li de yīfu yánsè hěn duō.",
        "vn": "Quần áo trong trung tâm thương mại có rất nhiều màu sắc."
      },
      {
        "zh": "你喜欢什么颜色？",
        "py": "Nǐ xǐhuan shénme yánsè?",
        "vn": "Bạn thích màu gì?"
      }
    ],
    "hanzi": [
      {
        "c": "颜",
        "p": "yán",
        "type": "形声字 · Chữ hình thanh",
        "st": 15,
        "ord": "立 → 厂 → 彡 → 页",
        "rad": "页 (hiệt – đầu)",
        "mean": "sắc mặt, màu",
        "tip": "Vốn chỉ sắc mặt, sau mở rộng thành \"màu sắc\".",
        "cf": "",
        "w": "颜色 / 什么颜色"
      },
      {
        "c": "色",
        "p": "sè",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "⺈ → 巴",
        "rad": "色 (sắc)",
        "mean": "màu sắc",
        "tip": "Ghép với màu: 白色、红色、绿色、黑色。",
        "cf": "",
        "w": "颜色 / 白色 / 红色"
      }
    ],
    "colloFull": [
      {
        "zh": "什么颜色",
        "py": "shénme yánsè",
        "vn": "màu gì"
      },
      {
        "zh": "喜欢的颜色",
        "py": "xǐhuan de yánsè",
        "vn": "màu yêu thích"
      },
      {
        "zh": "这个颜色",
        "py": "zhège yánsè",
        "vn": "màu này"
      },
      {
        "zh": "几种颜色",
        "py": "jǐ zhǒng yánsè",
        "vn": "mấy màu"
      }
    ],
    "patterns": [
      {
        "s": "什么 + 颜色？",
        "m": "Màu gì: 你喜欢什么颜色？"
      },
      {
        "s": "颜 + 色",
        "m": "Sắc (色) diện (颜) — hai chữ cùng nghĩa ghép lại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn thích màu gì?",
        "answer": "你喜欢什么颜色？",
        "answerPy": "Nǐ xǐhuan shénme yánsè?",
        "note": "Câu đã có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      },
      {
        "promptLang": "vi",
        "prompt": "Màu này rất đẹp, tôi muốn thử một chút.",
        "answer": "这个颜色很漂亮，我想试一下。",
        "answerPy": "Zhège yánsè hěn piàoliang, wǒ xiǎng shì yíxià.",
        "note": "颜 + 色 — hai chữ cùng nghĩa ghép lại.",
        "pair": "想 + V"
      }
    ]
  }
];

var wuData = [
  { img: '👖', label: '裤子', py: 'kùzi', letter: 'A' },
  { img: '🎒', label: '书包', py: 'shūbāo', letter: 'B' },
  { img: '🕰️', label: '过去', py: 'guòqù', letter: 'C' },
  { img: '🎨', label: '颜色', py: 'yánsè', letter: 'D' },
  { img: '🏬', label: '商场', py: 'shāngchǎng', letter: 'E' },
  { img: '🔴', label: '红色', py: 'hóngsè', letter: 'F' }
];

var dialogData = [
  {
    scene: '在商场门口 · Trước cửa trung tâm thương mại',
    preQuiz: [
      { q: '王一雪和刘小雪要去哪儿看看？', opts: ['商场', '超市', '学校'], ans: 0 },
      { q: '刘小雪为什么要进去看看？', opts: ['想买条裤子', '妈妈让她进去', '想给妈妈买衣服'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我们来过这家商场吗？', py: 'Māma, wǒmen láiguo zhè jiā shāngchǎng ma?', vn: 'Mẹ ơi, chúng ta đã từng đến trung tâm mua sắm này chưa ạ?' },
      { sp: 1, zh: '没来过，这是新开的。', py: 'Méi láiguo, zhè shì xīn kāi de.', vn: 'Chưa con ạ, đây là trung tâm mua sắm mới mở.' },
      { sp: 0, zh: '我们进去看看吧。', py: 'Wǒmen jìnqù kànkan ba.', vn: 'Chúng ta đi vào xem một chút nhé.' },
      { sp: 1, zh: '好啊！你想买点儿什么？', py: 'Hǎo a! Nǐ xiǎng mǎi diǎnr shénme?', vn: 'Được thôi. Con muốn mua chút gì không?' },
      { sp: 0, zh: '我想买条裤子。', py: 'Wǒ xiǎng mǎi tiáo kùzi.', vn: 'Con muốn mua chiếc quần.' },
      { sp: 1, zh: '没问题。', py: 'Méi wèntí.', vn: 'Được nhé.' }
    ]
  },
  {
    scene: '在商场 · Xem quần áo trong trung tâm thương mại',
    preQuiz: [
      { q: '刘小雪想买什么？', opts: ['白色的衣服', '红色的衣服', '白色的裤子'], ans: 2 },
      { q: '王一雪让刘小雪试试什么？', opts: ['白色的衣服', '红色的衣服', '红色的裤子'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我想买这条白色的裤子。', py: 'Māma, wǒ xiǎng mǎi zhè tiáo báisè de kùzi.', vn: 'Mẹ ơi, con muốn mua chiếc quần màu trắng này.' },
      { sp: 1, zh: '你有很多白色的衣服，为什么还买白色的？', py: 'Nǐ yǒu hěn duō báisè de yīfu, wèi shénme hái mǎi báisè de?', vn: 'Con đã có rất nhiều quần áo màu trắng rồi, sao vẫn còn mua màu trắng nữa?' },
      { sp: 0, zh: '因为我喜欢白色啊！', py: 'Yīnwèi wǒ xǐhuan báisè a!', vn: 'Vì con thích màu trắng ạ.' },
      { sp: 1, zh: '我觉得这条白色的不太好看，你试试那条红色的吧。', py: 'Wǒ juéde zhè tiáo báisè de bú tài hǎokàn, nǐ shìshi nà tiáo hóngsè de ba.', vn: 'Mẹ thấy chiếc quần màu trắng này không được đẹp lắm, con thử chiếc màu đỏ kia xem sao.' },
      { sp: 0, zh: '我没穿过红色的，红色的好看吗？', py: 'Wǒ méi chuānguo hóngsè de, hóngsè de hǎokàn ma?', vn: 'Con chưa từng mặc quần màu đỏ, quần màu đỏ có đẹp không mẹ?' },
      { sp: 1, zh: '就是因为没穿过，所以要试试啊！', py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!', vn: 'Chính là vì chưa từng mặc nên cần phải thử xem.' }
    ]
  },
  {
    scene: '在商场 · Chọn cặp sách',
    preQuiz: [
      { q: '刘小雪想买什么？', opts: ['新书', '书包', '衣服'], ans: 1 },
      { q: '王一雪和刘小雪觉得哪个好看？', opts: ['红色的', '绿色的', '黑色的'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '妈妈，我想买个新书包。', py: 'Māma, wǒ xiǎng mǎi ge xīn shūbāo.', vn: 'Mẹ ơi, con muốn mua cặp sách mới ạ.' },
      { sp: 1, zh: '好，那边卖书包，我们过去看看吧。', py: 'Hǎo, nàbiān mài shūbāo, wǒmen guòqù kànkan ba.', vn: 'Được, đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.' },
      { sp: 0, zh: '这么多漂亮的书包！', py: 'Zhème duō piàoliang de shūbāo!', vn: 'Bao nhiêu là cặp sách đẹp!' },
      { sp: 1, zh: '红色的、绿色的、黑色的，你想买哪个？', py: 'Hóngsè de, lǜsè de, hēisè de, nǐ xiǎng mǎi nǎge?', vn: 'Cái màu đỏ, cái màu xanh lá cây, cái màu đen, con muốn mua cái nào?' },
      { sp: 0, zh: '绿色的吧。', py: 'Lǜsè de ba.', vn: 'Cái màu xanh lá cây ạ.' },
      { sp: 1, zh: '不错，我也觉得绿色的更好看。', py: 'Búcuò, wǒ yě juéde lǜsè de gèng hǎokàn.', vn: 'Đẹp đấy, mẹ cũng thấy cặp sách màu xanh lá cây đẹp hơn.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Lưu Tiểu Tuyết viết nhật ký)',
    preQuiz: [
      { q: '刘小雪和妈妈去了哪里？', opts: ['商场', '超市', '饭店'], ans: 0 },
      { q: '商场里衣服的颜色怎么样？', opts: ['很少', '很多', '不漂亮'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。', py: 'Wǒ hé māma qùle yì jiā shāngchǎng. Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.', vn: 'Mình đã đi đến một trung tâm thương mại với mẹ. Vì trung tâm thương mại vừa mới khai trương, nên mấy hôm nay đồ rất rẻ.' },
      { sp: 0, zh: '商场里的衣服颜色很多。我没穿过红色的裤子，妈妈让我试了试。', py: 'Shāngchǎng li de yīfu yánsè hěn duō. Wǒ méi chuānguo hóngsè de kùzi, māma ràng wǒ shìle shì.', vn: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc. Mình chưa từng mặc quần màu đỏ, mẹ đã bảo mình thử xem.' },
      { sp: 0, zh: '我觉得我穿红色的也很好看。', py: 'Wǒ juéde wǒ chuān hóngsè de yě hěn hǎokàn.', vn: 'Mình nghĩ mình mặc quần màu đỏ cũng rất đẹp.' }
    ]
  }
];

var listenData = [
  {
    audio: '妈妈，我们来过这家商场吗？没来过，这是新开的。我们进去看看吧。好啊！你想买点儿什么？我想买条裤子。',
    questions: [
      { q: '她们要去哪儿看看？', opts: ['商场', '超市', '学校'], ans: 0 },
      { q: '刘小雪想买什么？', opts: ['裤子', '书包', '衣服'], ans: 0 }
    ]
  },
  {
    audio: '妈妈，我想买这条白色的裤子。你有很多白色的衣服，为什么还买白色的？因为我喜欢白色啊！你试试那条红色的吧。',
    questions: [
      { q: '刘小雪想买什么颜色的裤子？', opts: ['白色的', '红色的', '黑色的'], ans: 0 },
      { q: '妈妈让她试什么？', opts: ['白色的衣服', '红色的裤子', '绿色的书包'], ans: 1 }
    ]
  },
  {
    audio: '妈妈，我想买个新书包。好，那边卖书包，我们过去看看吧。红色的、绿色的、黑色的，你想买哪个？绿色的吧。',
    questions: [
      { q: '刘小雪想买什么？', opts: ['新书', '书包', '衣服'], ans: 1 },
      { q: '她们觉得哪个好看？', opts: ['红色的', '绿色的', '黑色的'], ans: 1 }
    ]
  },
  {
    audio: '我和妈妈去了一家商场。因为是新开的，所以这几天东西很便宜。商场里的衣服颜色很多。',
    questions: [
      { q: '商场的东西为什么便宜？', opts: ['因为是新开的', '因为过节', '因为东西不好'], ans: 0 },
      { q: '商场里衣服的颜色怎么样？', opts: ['很少', '很多', '不漂亮'], ans: 1 }
    ]
  }
];

var matchData = [
  { left: '来', right: '过' },
  { left: '一条', right: '裤子' },
  { left: '白色', right: '的衣服' },
  { left: '因为……', right: '所以……' },
  { left: '过去', right: '看看' },
  { left: '更', right: '好看' }
];

var fillData = [
  { pre: '我们来', blank: '过', post: '这家商场吗？', hint: '(đã từng)', ans: '过' },
  { pre: '我们', blank: '进去', post: '看看吧。', hint: '(đi vào)', ans: '进去' },
  { pre: '我想买', blank: '条', post: '裤子。', hint: '(lượng từ cho quần)', ans: '条' },
  { pre: '', blank: '因为', post: '我喜欢白色啊！', hint: '(bởi vì)', ans: '因为' },
  { pre: '就是因为没穿过，', blank: '所以', post: '要试试啊！', hint: '(cho nên)', ans: '所以' },
  { pre: '那边卖书包，我们', blank: '过去', post: '看看吧。', hint: '(sang đó)', ans: '过去' },
  { pre: '我也觉得绿色的', blank: '更', post: '好看。', hint: '(hơn)', ans: '更' },
  { pre: '商场里的衣服', blank: '颜色', post: '很多。', hint: '(màu sắc)', ans: '颜色' }
];

var sortData = [
  { words: ['我们', '来', '过', '这家', '商场', '吗', '？'], ans: '我们来过这家商场吗？', audio: '我们来过这家商场吗？' },
  { words: ['我', '想', '买', '条', '裤子', '。'], ans: '我想买条裤子。', audio: '我想买条裤子。' },
  { words: ['因为', '我', '喜欢', '白色', '啊', '！'], ans: '因为我喜欢白色啊！', audio: '因为我喜欢白色啊！' },
  { words: ['我', '没', '穿', '过', '红色', '的', '。'], ans: '我没穿过红色的。', audio: '我没穿过红色的。' },
  { words: ['我', '也', '觉得', '绿色的', '更', '好看', '。'], ans: '我也觉得绿色的更好看。', audio: '我也觉得绿色的更好看。' },
  { words: ['商场', '里', '的', '衣服', '颜色', '很', '多', '。'], ans: '商场里的衣服颜色很多。', audio: '商场里的衣服颜色很多。' }
];

var mcData = [
  { q: '我看见老师在教室里，你＿＿找她吧。', opts: ['进去', '书包', '颜色', '条'], ans: 0 },
  { q: '你已经有一＿＿黑色的裤子了，别买了。', opts: ['个', '间', '条', '名'], ans: 2 },
  { q: '商场里衣服的＿＿很多。', opts: ['书包', '颜色', '商场', '进去'], ans: 1 },
  { q: '"她去过中国" nghĩa là gì?', opts: ['Cô ấy từng đến Trung Quốc', 'Cô ấy đang ở Trung Quốc', 'Cô ấy sẽ đi Trung Quốc', 'Cô ấy không đến Trung Quốc'], ans: 0 },
  { q: 'Phủ định của "她去过中国" là câu nào?', opts: ['她没去过中国。', '她不去过中国。', '她去过没中国。', '她没有去中国过。'], ans: 0 },
  { q: '"红色的、绿色的、黑色的" ở đây thay cho cụm nào?', opts: ['红色的书包…', '红色的人…', '红色的天…', '红色的时间…'], ans: 0 },
  { q: 'Cặp liên từ nào chỉ quan hệ nguyên nhân – kết quả?', opts: ['因为……所以……', '还是……吧', '虽然……也……', '一……就……'], ans: 0 },
  { q: '"我觉得绿色的更好看" — 「更」nghĩa là gì?', opts: ['càng, hơn', 'rất', 'không', 'lại'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你去过中国吗？去过哪些城市？',
      q_vn: 'Bạn từng đến Trung Quốc chưa? Từng đến những thành phố nào?',
      hint: '我去过…… / 我没去过……',
      sample: '我去过中国，去过北京和西安，可是我没去过上海。',
      sample_vn: 'Tôi từng đến Trung Quốc, từng đến Bắc Kinh và Tây An, nhưng tôi chưa từng đến Thượng Hải.',
      note: '过 đặt sau động từ để nói việc đã từng xảy ra; phủ định dùng 没.'
    },
    {
      q_zh: '你喜欢什么颜色的衣服？为什么？',
      q_vn: 'Bạn thích quần áo màu gì? Vì sao?',
      hint: '我喜欢……色的，因为……',
      sample: '我喜欢白色的衣服，因为白色很干净，我也有很多白色的裤子。',
      sample_vn: 'Tôi thích quần áo màu trắng, vì màu trắng rất sạch sẽ, tôi cũng có nhiều quần màu trắng.',
      note: 'Cụm chữ 的: 白色的 = cái/bộ màu trắng, không cần nhắc lại danh từ.'
    },
    {
      q_zh: '今天你为什么没去上班？',
      q_vn: 'Hôm nay vì sao bạn không đi làm?',
      hint: '因为……，所以……',
      sample: '因为我生病了，所以今天没去上班。',
      sample_vn: 'Vì tôi bị ốm nên hôm nay không đi làm.',
      note: '因为……所以…… có thể dùng cả cặp hoặc chỉ dùng một vế.'
    },
    {
      q_zh: '买衣服的时候，你会试一试吗？',
      q_vn: 'Khi mua quần áo bạn có thử không?',
      hint: '我会试试……',
      sample: '会，我一定要试试。没穿过的颜色，我更要试一试。',
      sample_vn: 'Có, tôi nhất định phải thử. Màu chưa từng mặc thì tôi càng phải thử.',
      note: '试试 / 试一试 là dạng lặp của động từ, nghe nhẹ nhàng hơn.'
    },
    {
      q_zh: '商场里有很多书包，你想买哪个？',
      q_vn: 'Trong trung tâm thương mại có nhiều cặp sách, bạn muốn mua cái nào?',
      hint: '我想买……的，因为……更……',
      sample: '我想买绿色的，因为我觉得绿色的比黑色的更好看。',
      sample_vn: 'Tôi muốn mua cái màu xanh lá, vì tôi thấy cái màu xanh lá đẹp hơn cái màu đen.',
      note: '更 + tính từ dùng để so sánh: 更好看、更便宜。'
    }
  ]
};

var translateData = [
  { vi: 'Chúng ta đã từng đến trung tâm mua sắm này chưa ạ?', zh: '我们来过这家商场吗？', py: 'Wǒmen láiguo zhè jiā shāngchǎng ma?' },
  { vi: 'Con muốn mua chiếc quần màu trắng này.', zh: '我想买这条白色的裤子。', py: 'Wǒ xiǎng mǎi zhè tiáo báisè de kùzi.' },
  { vi: 'Chính là vì chưa từng mặc nên cần phải thử xem.', zh: '就是因为没穿过，所以要试试啊！', py: 'Jiù shì yīnwèi méi chuānguo, suǒyǐ yào shìshi a!' },
  { vi: 'Mẹ cũng thấy cặp sách màu xanh lá cây đẹp hơn.', zh: '我也觉得绿色的更好看。', py: 'Wǒ yě juéde lǜsè de gèng hǎokàn.' },
  { vi: 'Quần áo trong trung tâm thương mại có rất nhiều màu sắc.', zh: '商场里的衣服颜色很多。', py: 'Shāngchǎng li de yīfu yánsè hěn duō.' }
];

var translateDataRev = [
  { vi: 'Chưa con ạ, đây là trung tâm mua sắm mới mở.', zh: '没来过，这是新开的。', py: 'Méi láiguo, zhè shì xīn kāi de.' },
  { vi: 'Vì con thích màu trắng ạ.', zh: '因为我喜欢白色啊！', py: 'Yīnwèi wǒ xǐhuan báisè a!' },
  { vi: 'Đằng kia có bán cặp sách, chúng ta sang đó xem thử nhé.', zh: '那边卖书包，我们过去看看吧。', py: 'Nàbiān mài shūbāo, wǒmen guòqù kànkan ba.' },
  { vi: 'Vì mới khai trương nên mấy hôm nay đồ rất rẻ.', zh: '因为是新开的，所以这几天东西很便宜。', py: 'Yīnwèi shì xīn kāi de, suǒyǐ zhè jǐ tiān dōngxi hěn piányi.' },
  { vi: 'Mình nghĩ mình mặc quần màu đỏ cũng rất đẹp.', zh: '我觉得我穿红色的也很好看。', py: 'Wǒ juéde wǒ chuān hóngsè de yě hěn hǎokàn.' }
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (新HSK教程2 学练手册, Bài 4: Hán tự + Từ mới + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    { title: 'Hán tự & từ mới', blocks: [
      { type: 'table', caption: 'Bộ thủ (偏旁) — tên gọi và chữ ví dụ', headers: ['Tên gọi', 'Bộ thủ', 'Chữ ví dụ'], rows: [
        ['绞丝旁 jiǎosīpáng', '纟', '红 hóng (đỏ) · 绿 lǜ (xanh lá)'],
        ['提土旁 títǔpáng', '土', '场 chǎng (nơi, bãi) · 块 kuài (đồng, miếng)']
      ] },
      { type: 'table', caption: 'Tập viết (摹写) — chữ → từ → câu', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['红 hóng', '红色 hóngsè — màu đỏ', '我没买过红色的。— Mình chưa mua cái màu đỏ bao giờ.'],
        ['绿 lǜ', '绿色 lǜsè — màu xanh lá', '绿色的书包很好看。— Chiếc cặp sách màu xanh lá rất đẹp.'],
        ['场 chǎng', '商场 shāngchǎng — trung tâm thương mại', '你去没去过那家商场？— Bạn đã đến trung tâm thương mại đó chưa?'],
        ['块 kuài', '十块钱 shí kuài qián — mười đồng', '还是买那个十块钱的吧。— Thôi mua cái mười đồng ấy đi.']
      ],
        note: 'Luyện viết tay từng nét theo mẫu trong sách (bấm vào chữ ở phần Từ vựng để xem nét viết).' },
      { type: 'table', caption: 'Từ ghép mới (学一学)', headers: ['Từ đã biết', 'Từ mới', 'Nghĩa'], rows: [
        ['休息 · 教室', '休息室 xiūxishì', 'phòng nghỉ'],
        ['米饭 · 菜', '饭菜 fàncài', 'cơm canh, món ăn (bữa cơm)'],
        ['白色 · 猫', '白猫 bái māo', 'mèo trắng']
      ] },
      { type: 'blankdrill', caption: 'Điền từ mới vào chỗ trống (做一做)', hint: 'Gõ từ mới (chữ Hán) vào ô trống rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '我很喜欢吃你做的', after: '。', answer: '饭菜' },
          { before: '小明家有一只黑猫，我家的那只是', after: '。', answer: '白猫' },
          { before: '这是一间', after: '，工作累了可以来休息休息。', answer: '休息室' }
        ] }
    ]},
    { title: 'Mô phỏng đề thi', audio: '/audio/hsk2v3-bai-4/wb-mocktest.mp3', blocks: [
      { type: 'mocktest',
        listening: [
          { n: 1, part: 'Phần 1 · Nghe một câu, chọn tranh đúng', options: [
            { key: 'A', img: '/images/hsk2v3-bai-4-wb/q1a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-4-wb/q1b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-4-wb/q1c.jpg' }
          ], answer: 'C',
            script: '我给你拿了点儿吃的、喝的。', vn: 'Mình lấy cho bạn ít đồ ăn, đồ uống rồi đây.' },
          { n: 2, options: [
            { key: 'A', img: '/images/hsk2v3-bai-4-wb/q2a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-4-wb/q2b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-4-wb/q2c.jpg' }
          ], answer: 'C',
            script: '我们没去过北京，这次想去那儿玩玩。', vn: 'Chúng tôi chưa từng đến Bắc Kinh, lần này muốn đến đó chơi. (Tranh C: Thiên Đàn, Bắc Kinh)' },
          { n: 3, options: [
            { key: 'A', img: '/images/hsk2v3-bai-4-wb/q3a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-4-wb/q3b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-4-wb/q3c.jpg' }
          ], answer: 'B',
            script: '因为黑色的裤子都卖完了，所以我就买了一条红色的。', vn: 'Vì quần màu đen bán hết rồi nên tôi mua một chiếc màu đỏ.' },
          { n: 4, part: 'Phần 2 · Nghe hội thoại, chọn tranh phù hợp', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-4-wb/q4to6_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-4-wb/q4to6_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-4-wb/q4to6_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-4-wb/q4to6_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], answer: 'C',
            script: '女：你为什么不喜欢哥哥送的新书包？\n男：因为我不喜欢那个颜色。', vn: 'Nữ: Sao em không thích chiếc cặp sách mới anh trai tặng?\nNam: Vì em không thích màu đó.' },
          { n: 5, letters: ['A', 'B', 'C', 'D'], answer: 'A',
            script: '男：你喜不喜欢这条白色的裤子？\n女：喜欢，但我不想每天洗衣服，还是买黑色的吧。', vn: 'Nam: Em có thích chiếc quần trắng này không?\nNữ: Thích, nhưng em không muốn ngày nào cũng giặt đồ, thôi mua màu đen đi. (Đang chọn đồ ở cửa hàng quần áo)' },
          { n: 6, letters: ['A', 'B', 'C', 'D'], answer: 'B',
            script: '女：你吃了二十多个饺子啊！\n男：那是因为我没吃午饭。', vn: 'Nữ: Anh ăn hơn hai mươi cái sủi cảo cơ à!\nNam: Đó là vì anh chưa ăn trưa.' },
          { n: 7, part: 'Phần 3 · Nghe hội thoại, chọn đáp án đúng', options: [
            { key: 'A', text: '超市', py: 'chāoshì' },
            { key: 'B', text: '家里', py: 'jiā li' },
            { key: 'C', text: '水果店', py: 'shuǐguǒdiàn' }
          ], answer: 'B',
            script: '女：桌子上的苹果都洗过了吧？\n男：没有，那是我新买的，你洗一下再吃。\n问：他们现在在哪儿？', vn: 'Nữ: Táo trên bàn rửa hết rồi chứ?\nNam: Chưa, đó là táo anh mới mua, em rửa rồi hãy ăn.\nHỏi: Bây giờ họ đang ở đâu? → Ở nhà (táo mới mua về để trên bàn).' },
          { n: 8, options: [
            { key: 'A', text: '很贵', py: 'hěn guì' },
            { key: 'B', text: '很漂亮', py: 'hěn piàoliang' },
            { key: 'C', text: '颜色不好看', py: 'yánsè bù hǎokàn' }
          ], answer: 'A',
            script: '男：你穿红色的好看，我们过去看看那件红色的。\n女：这件吗？太贵了吧，三千八百多呢。\n问：女的觉得那件衣服怎么样？', vn: 'Nam: Em mặc màu đỏ đẹp đấy, mình qua xem chiếc màu đỏ kia đi.\nNữ: Chiếc này á? Đắt quá, hơn 3.800 đồng đấy.\nHỏi: Cô gái thấy chiếc áo đó thế nào? → Rất đắt.' },
          { n: 9, options: [
            { key: 'A', text: '白色', py: 'báisè' },
            { key: 'B', text: '黑色', py: 'hēisè' },
            { key: 'C', text: '绿色', py: 'lǜsè' }
          ], answer: 'C',
            script: '女：这条裤子很不错，但颜色不太好。\n男：我们还有白色、黑色和绿色的，您要不要再看看？\n女：给我拿条绿色的试试吧。\n男：好，我找一下。\n问：女的想买什么颜色的裤子？', vn: 'Nữ: Chiếc quần này khá đẹp, nhưng màu không đẹp lắm.\nNam: Chúng tôi còn màu trắng, đen và xanh lá, chị có muốn xem thêm không?\nNữ: Lấy cho tôi chiếc màu xanh lá thử xem.\nNam: Vâng, để tôi tìm.\nHỏi: Cô gái muốn mua quần màu gì? → Xanh lá.' },
          { n: 10, options: [
            { key: 'A', text: '米饭', py: 'mǐfàn' },
            { key: 'B', text: '饺子', py: 'jiǎozi' },
            { key: 'C', text: '包子', py: 'bāozi' }
          ], answer: 'C',
            script: '男：你来过这家饭店吗？\n女：没有。我下班后都回家吃饭。\n男：这儿的包子不错，饺子也很好吃。\n女：吃包子吧。\n问：他们今天吃什么？', vn: 'Nam: Em đến nhà hàng này bao giờ chưa?\nNữ: Chưa. Tan làm em đều về nhà ăn cơm.\nNam: Bánh bao ở đây ngon, sủi cảo cũng rất ngon.\nNữ: Ăn bánh bao đi.\nHỏi: Hôm nay họ ăn gì? → Bánh bao.' }
        ],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn tranh phù hợp với câu', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-4-wb/q11to13_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-4-wb/q11to13_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-4-wb/q11to13_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-4-wb/q11to13_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '孩子是和妈妈一起去的商场。', promptPy: 'Háizi shì hé māma yìqǐ qù de shāngchǎng.', answer: 'A',
            vn: 'Đứa trẻ đi trung tâm thương mại cùng với mẹ. — tranh A: mua sắm quần áo trong trung tâm thương mại.' },
          { n: 12, letters: ['A', 'B', 'C', 'D'], prompt: '我觉得这个杯子的颜色很好看。', promptPy: 'Wǒ juéde zhège bēizi de yánsè hěn hǎokàn.', answer: 'C',
            vn: 'Mình thấy màu của chiếc cốc này rất đẹp. — tranh C: chiếc cốc.' },
          { n: 13, letters: ['A', 'B', 'C', 'D'], prompt: '我吃过烤鸭，但我不知道烤鸭是怎么做的。', promptPy: 'Wǒ chīguo kǎoyā, dàn wǒ bù zhīdào kǎoyā shì zěnme zuò de.', answer: 'B',
            vn: 'Mình từng ăn vịt quay rồi, nhưng không biết vịt quay làm thế nào. — tranh B: vịt quay Bắc Kinh.' },
          { n: 14, part: 'Phần 2 · Chọn từ điền vào chỗ trống', bank: [
            { key: 'A', text: '条', py: 'tiáo' },
            { key: 'B', text: '因为', py: 'yīnwèi' },
            { key: 'C', text: '过去', py: 'guòqù' },
            { key: 'D', text: '书包', py: 'shūbāo' },
            { key: 'E', text: '完', py: 'wán' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '我想给孩子买（　）裤子。', promptPy: 'Wǒ xiǎng gěi háizi mǎi (　) kùzi.', answer: 'A',
            vn: 'Mình muốn mua cho con một chiếc quần. — 条: lượng từ của quần (一条裤子, "一" có thể lược).' },
          { n: 15, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '前边有一家商场，我们（　）看看吧。', promptPy: 'Qiánbian yǒu yì jiā shāngchǎng, wǒmen (　) kànkan ba.', answer: 'C',
            vn: 'Phía trước có một trung tâm thương mại, chúng ta qua đó xem thử đi. — 过去: đi qua đó.' },
          { n: 16, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '女：这是你的（　）吗？\n男：不是，我的是黑色的。', promptPy: 'Zhè shì nǐ de (　) ma? / Bú shì, wǒ de shì hēisè de.', answer: 'D',
            vn: 'Nữ: Đây là cặp sách của cậu à? Nam: Không, của mình màu đen. — cần danh từ chỉ đồ vật: 书包.' },
          { n: 17, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '男：你们是坐公交车来的吗？\n女：我们是打车过来的，（　）公交站有点儿远。', promptPy: 'Nǐmen shì zuò gōngjiāochē lái de ma? / Wǒmen shì dǎchē guòlái de, (　) gōngjiāozhàn yǒudiǎnr yuǎn.', answer: 'B',
            vn: 'Nam: Các bạn đến bằng xe buýt à? Nữ: Bọn mình bắt taxi đến, vì bến xe buýt hơi xa. — 因为: nêu lý do.' },
          { n: 18, part: 'Phần 3 · Ghép câu hỏi với câu trả lời', bank: [
            { key: 'A', text: '因为工作太累了，我想休息休息。', py: 'Yīnwèi gōngzuò tài lèi le, wǒ xiǎng xiūxi xiūxi.' },
            { key: 'B', text: '有几个包子，还有点儿饺子，你想吃什么？', py: 'Yǒu jǐ gè bāozi, hái yǒu diǎnr jiǎozi, nǐ xiǎng chī shénme?' },
            { key: 'C', text: '去过，学校很漂亮，人也很多。', py: 'Qùguo, xuéxiào hěn piàoliang, rén yě hěn duō.' },
            { key: 'D', text: '我不喜欢这个颜色。', py: 'Wǒ bù xǐhuan zhège yánsè.' },
            { key: 'E', text: '他出去了，一会儿就回来。', py: 'Tā chūqù le, yíhuìr jiù huílái.' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '家里还有吃的吗？', promptPy: 'Jiā li hái yǒu chī de ma?', answer: 'B',
            vn: 'Ở nhà còn gì ăn không? — B: Có mấy cái bánh bao, còn ít sủi cảo nữa, bạn muốn ăn gì?' },
          { n: 19, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你去过北京大学吗？', promptPy: 'Nǐ qùguo Běijīng Dàxué ma?', answer: 'C',
            vn: 'Bạn đến Đại học Bắc Kinh bao giờ chưa? — C: Đến rồi, trường rất đẹp, người cũng rất đông.' },
          { n: 20, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你为什么想出去旅游？', promptPy: 'Nǐ wèi shénme xiǎng chūqù lǚyóu?', answer: 'A',
            vn: 'Sao bạn muốn đi du lịch? — A: Vì công việc mệt quá, mình muốn nghỉ ngơi một chút (hỏi 为什么 → đáp 因为).' },
          { n: 21, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你看这件怎么样？', promptPy: 'Nǐ kàn zhè jiàn zěnmeyàng?', answer: 'D',
            vn: 'Bạn thấy chiếc (áo) này thế nào? — D: Mình không thích màu này.' },
          { n: 22, part: 'Phần 4 · Đọc đoạn văn, chọn đáp án đúng', prompt: '因为饭店的菜很好吃，也很便宜，所以店里的人非常多。我和朋友要了饺子，还要了两个菜，不到80块钱。\n★饭店里为什么人很多？', promptPy: 'Yīnwèi fàndiàn de cài hěn hǎochī, yě hěn piányi, suǒyǐ diàn li de rén fēicháng duō. Wǒ hé péngyou yàole jiǎozi, hái yàole liǎng gè cài, bú dào 80 kuài qián.\nFàndiàn li wèi shénme rén hěn duō?', options: [
            { key: 'A', text: '饭菜好吃', py: 'fàncài hǎochī' },
            { key: 'B', text: '饺子不要钱', py: 'jiǎozi bú yào qián' },
            { key: 'C', text: '能认识新朋友', py: 'néng rènshi xīn péngyou' }
          ], answer: 'A',
            vn: 'Vì món ăn ở nhà hàng rất ngon, lại rẻ nên trong quán rất đông người. Tôi và bạn gọi sủi cảo, thêm hai món nữa, chưa đến 80 đồng. — Câu đầu nói rõ lý do: 菜很好吃 (và rẻ) → A.' },
          { n: 23, prompt: '王老师生病了，我和家月去超市买了牛奶和一些好吃的，想去看看她。但我们没去过她家，不知道怎么坐车。\n★他们要去哪儿看王老师？', promptPy: 'Wáng lǎoshī shēngbìng le, wǒ hé Jiāyuè qù chāoshì mǎile niúnǎi hé yìxiē hǎochī de, xiǎng qù kànkan tā. Dàn wǒmen méi qùguo tā jiā, bù zhīdào zěnme zuò chē.\nTāmen yào qù nǎr kàn Wáng lǎoshī?', options: [
            { key: 'A', text: '超市', py: 'chāoshì' },
            { key: 'B', text: '医院', py: 'yīyuàn' },
            { key: 'C', text: '王老师家', py: 'Wáng lǎoshī jiā' }
          ], answer: 'C',
            vn: 'Cô Vương bị ốm, tôi và Gia Nguyệt đi siêu thị mua sữa và ít đồ ăn ngon, muốn đến thăm cô. Nhưng chúng tôi chưa đến nhà cô bao giờ, không biết đi xe thế nào. — "没去过她家，不知道怎么坐车" → họ định đến nhà cô Vương (siêu thị chỉ là nơi mua đồ).' },
          { n: 24, prompt: '小王给我介绍了一家新开的商场。商场里卖的衣服颜色很多，也很漂亮。我想买一条红色的裤子，但朋友说白色的好看，所以我就买了白色的。\n★朋友觉得哪个颜色的裤子好看？', promptPy: 'Xiǎo Wáng gěi wǒ jièshàole yì jiā xīn kāi de shāngchǎng. Shāngchǎng li mài de yīfu yánsè hěn duō, yě hěn piàoliang. Wǒ xiǎng mǎi yì tiáo hóngsè de kùzi, dàn péngyou shuō báisè de hǎokàn, suǒyǐ wǒ jiù mǎile báisè de.\nPéngyou juéde nǎ gè yánsè de kùzi hǎokàn?', options: [
            { key: 'A', text: '黑色', py: 'hēisè' },
            { key: 'B', text: '白色', py: 'báisè' },
            { key: 'C', text: '红色', py: 'hóngsè' }
          ], answer: 'B',
            vn: 'Tiểu Vương giới thiệu cho tôi một trung tâm thương mại mới mở. Quần áo ở đó nhiều màu, lại rất đẹp. Tôi muốn mua một chiếc quần màu đỏ, nhưng bạn tôi nói màu trắng đẹp, nên tôi mua màu trắng. — 红色 là màu "tôi" muốn, bạn thấy 白色 đẹp → B.' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Chọn bộ phận ghép thành chữ', bank: [
            { key: 'A', text: '纟' }, { key: 'B', text: '衤' }, { key: 'C', text: '辶' }, { key: 'D', text: '十' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '（井）去 — jìn qù', answer: 'C', vn: '进 = 辶 + 井 → 进去 (đi vào)' },
          { n: 26, letters: ['A', 'B', 'C', 'D'], prompt: '（库）子 — kù zi', answer: 'B', vn: '裤 = 衤 + 库 → 裤子 (cái quần; bộ y 衤 liên quan đến quần áo)' },
          { n: 27, letters: ['A', 'B', 'C', 'D'], prompt: '（工）色 — hóng sè', answer: 'A', vn: '红 = 纟 + 工 → 红色 (màu đỏ)' },
          { n: 28, part: 'Viết · Phần 2 · Viết chữ Hán theo pinyin', input: true, prompt: '她没买（ guo ）绿色的衣服。', promptPy: 'Tā méi mǎi guo lǜsè de yīfu.', answer: '过', vn: 'Cô ấy chưa từng mua quần áo màu xanh lá. — 没 + V + 过: chưa từng làm gì.' },
          { n: 29, input: true, prompt: '这家商（ chǎng ）是新开的，我想去看看。', promptPy: 'Zhè jiā shāngchǎng shì xīn kāi de, wǒ xiǎng qù kànkan.', answer: '场', vn: 'Trung tâm thương mại này mới mở, tôi muốn đến xem thử. — 商场 (bộ 土).' },
          { n: 30, input: true, prompt: '因为明天不上班，所（ yǐ ）今天可以晚点儿睡。', promptPy: 'Yīnwèi míngtiān bú shàngbān, suǒyǐ jīntiān kěyǐ wǎn diǎnr shuì.', answer: '以', vn: 'Vì mai không đi làm nên hôm nay có thể ngủ muộn một chút. — 因为……所以…….' }
        ] }
    ]}
  ]
};
