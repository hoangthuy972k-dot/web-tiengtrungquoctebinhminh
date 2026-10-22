// ══════════════════════════════════════════
// DATA — HSK3 Bài 14: 你把水果拿过来 (Cậu hãy mang trái cây đến đây)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "打扫",
    "py": "dǎsǎo",
    "pos": "Động từ",
    "vn": "quét dọn",
    "hv": "đả tảo",
    "em": "🧹",
    "lesson": 1,
    "explain": [
      "Làm cho một nơi trở nên sạch sẽ, gọn gàng bằng cách quét, lau chùi."
    ],
    "usage": "Động từ, mang tân ngữ là danh từ chỉ nơi chốn: 打扫 + [phòng/nhà].",
    "collo": [
      "打扫房间",
      "打扫办公室",
      "打扫干净"
    ],
    "ex_zh": "你怎么还不打扫房间啊？",
    "ex_py": "Nǐ zěnme hái bù dǎsǎo fángjiān a?",
    "ex_vn": "Sao anh vẫn chưa dọn phòng vậy?",
    "exList": [
      {
        "zh": "客人就要来了，你怎么还不打扫房间啊？",
        "py": "Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?",
        "vn": "Khách sắp đến rồi, sao anh vẫn chưa dọn phòng vậy?"
      },
      {
        "zh": "她每天都要先把办公室打扫干净，然后才回家。",
        "py": "Tā měi tiān dōu yào xiān bǎ bàngōngshì dǎsǎo gānjìng, ránhòu cái huí jiā.",
        "vn": "Cô ấy ngày nào cũng phải dọn sạch văn phòng trước, rồi mới về nhà."
      },
      {
        "zh": "你先把盘子洗一下，再打扫房间。",
        "py": "Nǐ xiān bǎ pánzi xǐ yíxià, zài dǎsǎo fángjiān.",
        "vn": "Bạn rửa bát trước đã, rồi dọn phòng."
      }
    ],
    "hanzi": [
      {
        "c": "扫",
        "p": "sǎo",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "扌 trái → 彐 phải",
        "rad": "扌 (thủ – tay)",
        "mean": "quét",
        "tip": "扌(tay) + 彐(hình cái chổi giản thể) → dùng TAY cầm chổi để QUÉT.",
        "cf": "归 (guī – \"trở về\", có cách ghép khác\")",
        "w": "打扫 / 扫地"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy lau tủ lạnh cho sạch trước, sau đó mới dọn bếp.",
        "answer": "他先把冰箱擦干净，然后再打扫厨房。",
        "answerPy": "Tā xiān bǎ bīngxiāng cā gānjìng, ránhòu zài dǎsǎo chúfáng.",
        "note": "V + 干净 — 干净 là bổ ngữ kết quả: lau đến chỗ sạch.",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu khách sắp đến thì chúng ta nên dọn phòng ngay.",
        "answer": "如果客人快来了，我们就应该马上打扫房间。",
        "answerPy": "Rúguǒ kèrén kuài lái le, wǒmen jiù yīnggāi mǎshàng dǎsǎo fángjiān.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại 应该 đã học ở Bài 13).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "打扫房间",
        "py": "dǎsǎo fángjiān",
        "vn": "dọn phòng"
      },
      {
        "zh": "打扫干净",
        "py": "dǎsǎo gānjìng",
        "vn": "dọn cho sạch"
      },
      {
        "zh": "打扫办公室",
        "py": "dǎsǎo bàngōngshì",
        "vn": "dọn văn phòng"
      },
      {
        "zh": "打扫厨房",
        "py": "dǎsǎo chúfáng",
        "vn": "dọn bếp"
      },
      {
        "zh": "帮忙打扫",
        "py": "bāngmáng dǎsǎo",
        "vn": "giúp dọn dẹp"
      }
    ],
    "patterns": [
      {
        "s": "把 + nơi chốn + 打扫干净",
        "m": "Dọn chỗ nào cho sạch"
      },
      {
        "s": "打 + 扫",
        "m": "Quét (扫) dọn — 打 ở đây không có nghĩa \"đánh\""
      }
    ]
  },
  {
    "n": 2,
    "zh": "干净",
    "py": "gānjìng",
    "pos": "Tính từ",
    "vn": "sạch sẽ",
    "hv": "can tịnh",
    "em": "✨",
    "lesson": 1,
    "explain": [
      "Không có bụi bẩn, gọn gàng, trong sạch."
    ],
    "usage": "Tính từ; thường làm bổ ngữ kết quả sau động từ: 打扫干净, 洗干净.",
    "collo": [
      "打扫干净",
      "洗干净",
      "很干净"
    ],
    "ex_zh": "他们会把房间打扫干净。",
    "ex_py": "Tāmen huì bǎ fángjiān dǎsǎo gānjìng.",
    "ex_vn": "Chúng sẽ dọn phòng sạch sẽ.",
    "exList": [
      {
        "zh": "客人来的时候，他们会把房间打扫干净。",
        "py": "Kèrén lái de shíhou, tāmen huì bǎ fángjiān dǎsǎo gānjìng.",
        "vn": "Lúc khách đến, chúng sẽ dọn phòng sạch sẽ."
      },
      {
        "zh": "我把衣服洗干净了。",
        "py": "Wǒ bǎ yīfu xǐ gānjìng le.",
        "vn": "Tôi giặt quần áo sạch sẽ rồi."
      },
      {
        "zh": "这个房间真干净。",
        "py": "Zhège fángjiān zhēn gānjìng.",
        "vn": "Căn phòng này thật sạch sẽ."
      }
    ],
    "hanzi": [
      {
        "c": "净",
        "p": "jìng",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "冫 trái → 争 phải",
        "rad": "冫 (băng – nước đá)",
        "mean": "sạch sẽ",
        "tip": "冫(nước trong, băng giá) + 争(tranh giành, ý chỉ loại bỏ tạp chất) → làm cho trong SẠCH, không còn bụi bẩn.",
        "cf": "静 (jìng – \"yên tĩnh\", có bộ 青\")",
        "w": "干净 / 洗干净"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em trai không những tự rửa sạch đĩa của mình, mà còn giúp mẹ dọn bếp.",
        "answer": "弟弟不但把自己的盘子洗干净了，而且还帮妈妈打扫了厨房。",
        "answerPy": "Dìdi búdàn bǎ zìjǐ de pánzi xǐ gānjìng le, érqiě hái bāng māma dǎsǎole chúfáng.",
        "note": "自己 là từ bài 12; câu chữ 把 + bổ ngữ kết quả.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn dọn phòng sạch sẽ thì mẹ sẽ vui.",
        "answer": "只要你把房间打扫干净，妈妈就会高兴。",
        "answerPy": "Zhǐyào nǐ bǎ fángjiān dǎsǎo gānjìng, māma jiù huì gāoxìng.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "很干净",
        "py": "hěn gānjìng",
        "vn": "rất sạch"
      },
      {
        "zh": "打扫干净",
        "py": "dǎsǎo gānjìng",
        "vn": "dọn cho sạch"
      },
      {
        "zh": "洗干净",
        "py": "xǐ gānjìng",
        "vn": "rửa sạch"
      },
      {
        "zh": "擦干净",
        "py": "cā gānjìng",
        "vn": "lau sạch"
      },
      {
        "zh": "不干净",
        "py": "bù gānjìng",
        "vn": "không sạch"
      }
    ],
    "patterns": [
      {
        "s": "V + 干净",
        "m": "Làm gì cho sạch — 干净 là bổ ngữ kết quả"
      },
      {
        "s": "干净 ↔ 脏",
        "m": "Sạch ↔ bẩn"
      }
    ]
  },
  {
    "n": 3,
    "zh": "然后",
    "py": "ránhòu",
    "pos": "Liên từ",
    "vn": "sau đó",
    "hv": "nhiên hậu",
    "em": "➡️",
    "lesson": 1,
    "explain": [
      "Nối hai hành động, diễn tả hành động thứ hai xảy ra sau hành động thứ nhất."
    ],
    "usage": "Liên từ, thường đi cùng 先: 先……，然后……",
    "collo": [
      "先……然后……",
      "然后再",
      "然后才"
    ],
    "ex_zh": "先把茶和杯子放好，然后把冰箱里的西瓜拿出来。",
    "ex_py": "Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.",
    "ex_vn": "Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.",
    "exList": [
      {
        "zh": "先把茶和杯子放好，然后把冰箱里的西瓜拿出来。",
        "py": "Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.",
        "vn": "Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra."
      },
      {
        "zh": "你先把电视节目看完吧，然后再给我回电话。",
        "py": "Nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.",
        "vn": "Bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi."
      },
      {
        "zh": "回家以后，我先做作业，然后吃饭。",
        "py": "Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.",
        "vn": "Về nhà xong, tôi làm bài tập trước, sau đó ăn cơm."
      }
    ],
    "hanzi": [
      {
        "c": "然",
        "p": "rán",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "肰 trên → 灬 dưới",
        "rad": "灬 (hỏa – lửa)",
        "mean": "như vậy, sau đó",
        "tip": "肰(thịt) + 灬(lửa, nướng) → thịt nướng cháy, mở rộng nghĩa \"đúng NHƯ VẬY\"; 然后 = tiếp theo NHƯ VẬY.",
        "cf": "燃 (rán – \"đốt cháy\", có thêm bộ 火\")",
        "w": "然后 / 突然 / 虽然"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sau khi khách về, tôi rửa sạch đĩa trước, sau đó dọn phòng.",
        "answer": "客人走了以后，我先把盘子洗干净，然后打扫房间。",
        "answerPy": "Kèrén zǒule yǐhòu, wǒ xiān bǎ pánzi xǐ gānjìng, ránhòu dǎsǎo fángjiān.",
        "note": "先……然后…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy làm cơm trái cây rất đơn giản nhưng nhiều người chưa từng ăn.",
        "answer": "虽然做水果饭很简单，但是很多人没吃过。",
        "answerPy": "Suīrán zuò shuǐguǒ fàn hěn jiǎndān, dànshì hěn duō rén méi chīguo.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "先……然后……",
        "py": "xiān ránhòu",
        "vn": "trước… sau đó…"
      },
      {
        "zh": "然后再",
        "py": "ránhòu zài",
        "vn": "sau đó lại"
      },
      {
        "zh": "然后才",
        "py": "ránhòu cái",
        "vn": "rồi mới"
      },
      {
        "zh": "然后去",
        "py": "ránhòu qù",
        "vn": "sau đó đi"
      },
      {
        "zh": "吃完饭然后休息",
        "py": "chī wán fàn ránhòu xiūxi",
        "vn": "ăn xong rồi nghỉ"
      }
    ],
    "patterns": [
      {
        "s": "先 + V1，然后 + V2",
        "m": "Làm A trước, sau đó làm B"
      },
      {
        "s": "然后 (sau đó, kể thứ tự) ≠ 以后 (sau khi)"
      }
    ]
  },
  {
    "n": 4,
    "zh": "冰箱",
    "py": "bīngxiāng",
    "pos": "Danh từ",
    "vn": "tủ lạnh",
    "hv": "băng tương",
    "em": "❄️",
    "lesson": 1,
    "explain": [
      "Thiết bị dùng để bảo quản thực phẩm ở nhiệt độ thấp."
    ],
    "usage": "Danh từ; đi cùng giới từ 从/在: 从冰箱里, 在冰箱里.",
    "collo": [
      "冰箱里",
      "从冰箱里拿出来",
      "打开冰箱"
    ],
    "ex_zh": "然后把冰箱里的西瓜拿出来。",
    "ex_py": "Ránhòu bǎ bīngxiāng li de xīguā ná chulai.",
    "ex_vn": "Sau đó lấy dưa hấu trong tủ lạnh ra.",
    "exList": [
      {
        "zh": "先把茶和杯子放好，然后把冰箱里的西瓜拿出来。",
        "py": "Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.",
        "vn": "Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra."
      },
      {
        "zh": "你怎么把冰箱里的东西都吃完了？",
        "py": "Nǐ zěnme bǎ bīngxiāng li de dōngxi dōu chīwán le?",
        "vn": "Sao bạn ăn hết đồ trong tủ lạnh vậy?"
      },
      {
        "zh": "再从冰箱里把香蕉、苹果拿出来放好。",
        "py": "Zài cóng bīngxiāng li bǎ xiāngjiāo, píngguǒ ná chulai fànghǎo.",
        "vn": "Lại lấy chuối, táo từ tủ lạnh ra để gọn gàng."
      }
    ],
    "hanzi": [
      {
        "c": "箱",
        "p": "xiāng",
        "type": "上下结构 · Trên-dưới",
        "st": 15,
        "ord": "⺮ trên → 相 dưới",
        "rad": "⺮ (trúc – tre)",
        "mean": "hòm, tủ",
        "tip": "⺮(tre, vật đan) + 相(cùng nhau) → vật đan ghép lại thành HÒM, TỦ; 冰(băng)+箱(tủ) = TỦ LẠNH.",
        "cf": "相 (xiāng – \"lẫn nhau\", không có bộ ⺮\")",
        "w": "冰箱 / 箱子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sao em trai lại ăn hết dưa hấu trong tủ lạnh rồi? Nếu muốn ăn thì phải hỏi một tiếng chứ.",
        "answer": "弟弟怎么又把冰箱里的西瓜吃完了？如果想吃，就应该先问一下。",
        "answerPy": "Dìdi zěnme yòu bǎ bīngxiāng li de xīguā chī wán le? Rúguǒ xiǎng chī, jiù yīnggāi xiān wèn yíxià.",
        "note": "又 là từ bài 8 — việc đã lặp lại; 应该 là từ bài 13.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu tủ lạnh không có trái cây thì chúng ta đi mua thêm đi.",
        "answer": "如果冰箱里没有水果，我们就去买点儿吧。",
        "answerPy": "Rúguǒ bīngxiāng li méiyǒu shuǐguǒ, wǒmen jiù qù mǎi diǎnr ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "冰箱里",
        "py": "bīngxiāng li",
        "vn": "trong tủ lạnh"
      },
      {
        "zh": "打开冰箱",
        "py": "dǎkāi bīngxiāng",
        "vn": "mở tủ lạnh"
      },
      {
        "zh": "从冰箱里拿出来",
        "py": "cóng bīngxiāng li ná chū lái",
        "vn": "lấy ra từ tủ lạnh"
      },
      {
        "zh": "冰箱坏了",
        "py": "bīngxiāng huài le",
        "vn": "tủ lạnh hỏng"
      },
      {
        "zh": "放进冰箱",
        "py": "fàng jìn bīngxiāng",
        "vn": "cho vào tủ lạnh"
      }
    ],
    "patterns": [
      {
        "s": "从 + 冰箱 + 里 + 拿出来",
        "m": "Lấy ra từ trong tủ lạnh"
      },
      {
        "s": "冰 + 箱",
        "m": "Hòm (箱) lạnh (冰)"
      }
    ]
  },
  {
    "n": 5,
    "zh": "洗澡",
    "py": "xǐzǎo",
    "pos": "Động từ",
    "vn": "tắm, tắm rửa",
    "hv": "tẩy tảo",
    "em": "🚿",
    "lesson": 2,
    "explain": [
      "Rửa sạch cơ thể bằng nước."
    ],
    "usage": "Động từ ly hợp; có thể chèn thành phần khác vào giữa: 洗了个澡.",
    "collo": [
      "洗澡",
      "洗了个澡",
      "去洗澡"
    ],
    "ex_zh": "我刚洗了个澡，没听见。",
    "ex_py": "Wǒ gāng xǐle ge zǎo, méi tīngjiàn.",
    "ex_vn": "Tôi vừa tắm xong, không nghe thấy.",
    "exList": [
      {
        "zh": "对不起，我刚洗了个澡，没听见。",
        "py": "Duìbuqǐ, wǒ gāng xǐle ge zǎo, méi tīngjiàn.",
        "vn": "Xin lỗi, tôi vừa tắm xong, không nghe thấy."
      },
      {
        "zh": "他每天晚上都洗澡。",
        "py": "Tā měi tiān wǎnshang dōu xǐzǎo.",
        "vn": "Tối nào anh ấy cũng tắm."
      },
      {
        "zh": "你先去洗澡，然后我们再吃饭。",
        "py": "Nǐ xiān qù xǐzǎo, ránhòu wǒmen zài chī fàn.",
        "vn": "Bạn đi tắm trước đã, sau đó chúng ta ăn cơm."
      }
    ],
    "hanzi": [
      {
        "c": "澡",
        "p": "zǎo",
        "type": "左右结构 · Trái-phải",
        "st": 16,
        "ord": "氵 trái → 喿 phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "tắm",
        "tip": "氵(nước) + 喿(tiếng chim kêu ồn ào, ý chỉ nhiều động tác) → dùng NƯỚC để TẮM RỬA.",
        "cf": "燥 (zào – \"khô ráo\", có bộ 火\")",
        "w": "洗澡 / 澡堂"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái đi tắm trước đã, sau đó xem chương trình tivi.",
        "answer": "妹妹先去洗澡，然后再看电视节目。",
        "answerPy": "Mèimei xiān qù xǐzǎo, ránhòu zài kàn diànshì jiémù.",
        "note": "先……然后…… diễn tả trình tự hành động (ôn lại đã học trong bài này).",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn tắm xong rồi thì chúng ta ra ngoài đi.",
        "answer": "如果你洗完澡了，我们就出去吧。",
        "answerPy": "Rúguǒ nǐ xǐwán zǎo le, wǒmen jiù chūqu ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "去洗澡",
        "py": "qù xǐzǎo",
        "vn": "đi tắm"
      },
      {
        "zh": "洗了个澡",
        "py": "xǐ le gè zǎo",
        "vn": "tắm một cái"
      },
      {
        "zh": "洗完澡",
        "py": "xǐ wán zǎo",
        "vn": "tắm xong"
      },
      {
        "zh": "洗个热水澡",
        "py": "xǐ gè rè shuǐ zǎo",
        "vn": "tắm nước nóng"
      },
      {
        "zh": "每天洗澡",
        "py": "měi tiān xǐzǎo",
        "vn": "ngày nào cũng tắm"
      }
    ],
    "patterns": [
      {
        "s": "洗 + 个 + 澡",
        "m": "洗澡 là từ ly hợp: 洗了个澡 ✓ / 洗澡了一次 ✗"
      },
      {
        "s": "洗 + 澡",
        "m": "Rửa (洗) toàn thân (澡)"
      }
    ]
  },
  {
    "n": 6,
    "zh": "节目",
    "py": "jiémù",
    "pos": "Danh từ",
    "vn": "chương trình (truyền hình)",
    "hv": "tiết mục",
    "em": "📺",
    "lesson": 2,
    "explain": [
      "Nội dung được phát sóng trên tivi, đài phát thanh."
    ],
    "usage": "Danh từ; đi cùng động từ 看: 看节目.",
    "collo": [
      "电视节目",
      "看节目",
      "节目开始"
    ],
    "ex_zh": "你先把电视节目看完吧。",
    "ex_py": "Nǐ xiān bǎ diànshì jiémù kànwán ba.",
    "ex_vn": "Bạn xem xong chương trình tivi đã.",
    "exList": [
      {
        "zh": "没关系，你先把电视节目看完吧，然后再给我回电话。",
        "py": "Méi guānxi, nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.",
        "vn": "Không sao, bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi."
      },
      {
        "zh": "方叔叔爱看教做饭的节目。",
        "py": "Fāng shūshu ài kàn jiāo zuò fàn de jiémù.",
        "vn": "Chú Phương thích xem chương trình dạy nấu ăn."
      },
      {
        "zh": "这个节目里的小猫小狗特别有意思。",
        "py": "Zhège jiémù li de xiǎomāo xiǎogǒu tèbié yǒuyìsi.",
        "vn": "Mèo con chó con trong chương trình này thú vị lắm."
      }
    ],
    "hanzi": [
      {
        "c": "目",
        "p": "mù",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 5,
        "ord": "nét liền, hình con mắt",
        "rad": "目 (mục – mắt)",
        "mean": "mắt, mục",
        "tip": "Chữ tượng hình mô phỏng hình CON MẮT → MẮT; 节(tiết mục)+目(mục lục) = CHƯƠNG TRÌNH được liệt kê ra để xem.",
        "cf": "自 (zì – \"tự mình\", hình dáng gần giống\")",
        "w": "节目 / 目的"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần có chương trình dạy nấu ăn thì chú Phương chắc chắn sẽ xem.",
        "answer": "只要有教做饭的节目，方叔叔就一定会看。",
        "answerPy": "Zhǐyào yǒu jiāo zuò fàn de jiémù, Fāng shūshu jiù yídìng huì kàn.",
        "note": "叔叔 sẽ học ngay bên dưới trong bài này.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu chương trình hay thì tôi sẽ xem hết.",
        "answer": "如果节目很好看，我就会看完。",
        "answerPy": "Rúguǒ jiémù hěn hǎokàn, wǒ jiù huì kànwán.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "电视节目",
        "py": "diànshì jiémù",
        "vn": "chương trình tivi"
      },
      {
        "zh": "看节目",
        "py": "kàn jiémù",
        "vn": "xem chương trình"
      },
      {
        "zh": "节目开始",
        "py": "jiémù kāishǐ",
        "vn": "chương trình bắt đầu"
      },
      {
        "zh": "好看的节目",
        "py": "hǎokàn de jiémù",
        "vn": "chương trình hay"
      },
      {
        "zh": "一个节目",
        "py": "yí gè jiémù",
        "vn": "một chương trình"
      }
    ],
    "patterns": [
      {
        "s": "看 + 节目",
        "m": "Xem chương trình"
      },
      {
        "s": "节目 (chương trình) ≠ 节日 (ngày lễ) — chỉ khác một chữ"
      }
    ]
  },
  {
    "n": 7,
    "zh": "月亮",
    "py": "yuèliang",
    "pos": "Danh từ",
    "vn": "mặt trăng",
    "hv": "nguyệt lượng",
    "em": "🌙",
    "lesson": 3,
    "explain": [
      "Vệ tinh tự nhiên của Trái Đất, xuất hiện vào ban đêm."
    ],
    "usage": "Danh từ; thường làm chủ ngữ hoặc tân ngữ: 看月亮.",
    "collo": [
      "看月亮",
      "今晚的月亮",
      "月亮真漂亮"
    ],
    "ex_zh": "今晚的月亮真漂亮。",
    "ex_py": "Jīn wǎn de yuèliang zhēn piàoliang.",
    "ex_vn": "Trăng tối nay đẹp thật.",
    "exList": [
      {
        "zh": "今晚的月亮真漂亮，像白色的盘子一样。",
        "py": "Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.",
        "vn": "Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy."
      },
      {
        "zh": "我们坐在外边一边看月亮一边吃东西。",
        "py": "Wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi.",
        "vn": "Chúng ta ngồi ở ngoài vừa ngắm trăng vừa ăn đồ."
      },
      {
        "zh": "今天晚上没有月亮。",
        "py": "Jīntiān wǎnshang méiyǒu yuèliang.",
        "vn": "Tối nay không có trăng."
      }
    ],
    "hanzi": [
      {
        "c": "亮",
        "p": "liàng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "亠 trên → 儿 dưới",
        "rad": "亠 (đầu)",
        "mean": "sáng",
        "tip": "亠(mái nhà) + 儿(người) → ánh SÁNG chiếu từ trên cao xuống; 月(trăng)+亮(sáng) = MẶT TRĂNG.",
        "cf": "京 (jīng – \"kinh đô\", có 小 thay vì 儿\")",
        "w": "月亮 / 漂亮 / 天亮"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bà thích vừa ngắm trăng vừa kể chuyện.",
        "answer": "奶奶喜欢一边看月亮一边讲故事。",
        "answerPy": "Nǎinai xǐhuan yìbiān kàn yuèliang yìbiān jiǎng gùshi.",
        "note": "一边……一边…… diễn tả hai hành động cùng lúc (ôn lại đã học ở Bài 13).",
        "pair": "一边……一边……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì hôm nay không có trăng nên chúng ta không ra ngoài ngắm trăng nữa.",
        "answer": "因为今天没有月亮，所以我们不出去看月亮了。",
        "answerPy": "Yīnwèi jīntiān méiyǒu yuèliang, suǒyǐ wǒmen bù chūqu kàn yuèliang le.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "看月亮",
        "py": "kàn yuèliang",
        "vn": "ngắm trăng"
      },
      {
        "zh": "今晚的月亮",
        "py": "jīn wǎn de yuèliang",
        "vn": "trăng tối nay"
      },
      {
        "zh": "月亮真漂亮",
        "py": "yuèliang zhēn piàoliang",
        "vn": "trăng đẹp thật"
      },
      {
        "zh": "月亮出来了",
        "py": "yuèliang chū lái le",
        "vn": "trăng lên rồi"
      },
      {
        "zh": "圆月亮",
        "py": "yuán yuèliang",
        "vn": "trăng tròn"
      }
    ],
    "patterns": [
      {
        "s": "月亮 + 出来了",
        "m": "Trăng đã lên — như 太阳出来了 (bài 12)"
      },
      {
        "s": "月 + 亮",
        "m": "Vầng sáng (亮) ban đêm (月)"
      }
    ]
  },
  {
    "n": 8,
    "zh": "像",
    "py": "xiàng",
    "pos": "Động từ",
    "vn": "giống",
    "hv": "tượng",
    "em": "🪞",
    "lesson": 3,
    "explain": [
      "Diễn tả sự giống nhau về hình dáng, tính cách giữa hai đối tượng."
    ],
    "usage": "Động từ, thường đi cùng 一样: A + 像 + B + 一样.",
    "collo": [
      "像……一样",
      "很像",
      "长得像"
    ],
    "ex_zh": "像白色的盘子一样。",
    "ex_py": "Xiàng báisè de pánzi yíyàng.",
    "ex_vn": "Giống như cái đĩa trắng vậy.",
    "exList": [
      {
        "zh": "今晚的月亮真漂亮，像白色的盘子一样。",
        "py": "Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.",
        "vn": "Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy."
      },
      {
        "zh": "你的熊猫画得真好，像真的一样。",
        "py": "Nǐ de xióngmāo huà de zhēn hǎo, xiàng zhēn de yíyàng.",
        "vn": "Bạn vẽ con gấu trúc đẹp thật, giống như thật vậy."
      },
      {
        "zh": "小时候像我，现在越来越像她爸爸了。",
        "py": "Xiǎoshíhou xiàng wǒ, xiànzài yuè lái yuè xiàng tā bàba le.",
        "vn": "Lúc nhỏ giống tôi, giờ ngày càng giống bố nó rồi."
      }
    ],
    "hanzi": [
      {
        "c": "像",
        "p": "xiàng",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "亻 trái → 象 phải",
        "rad": "亻 (nhân – người)",
        "mean": "giống",
        "tip": "亻(người) + 象(con voi, hình tượng) → người có HÌNH TƯỢNG tương tự = GIỐNG.",
        "cf": "象 (xiàng – \"con voi\", không có bộ 亻\")",
        "w": "像 / 好像 / 图像"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Quả chuối này ngọt thật, giống như đường vậy.",
        "answer": "这个香蕉很甜，像糖一样。",
        "answerPy": "Zhège xiāngjiāo hěn tián, xiàng táng yíyàng.",
        "note": "像……一样 diễn tả sự giống nhau (ôn lại 画 đã học ở Bài 12).",
        "pair": "像……一样……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy con giống mẹ nhưng tính cách lại giống bố hơn.",
        "answer": "虽然孩子像妈妈，但是性格更像爸爸。",
        "answerPy": "Suīrán háizi xiàng māma, dànshì xìnggé gèng xiàng bàba.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "像……一样",
        "py": "xiàng yíyàng",
        "vn": "giống như…"
      },
      {
        "zh": "很像",
        "py": "hěn xiàng",
        "vn": "rất giống"
      },
      {
        "zh": "长得像",
        "py": "zhǎng de xiàng",
        "vn": "trông giống"
      },
      {
        "zh": "像妈妈",
        "py": "xiàng māma",
        "vn": "giống mẹ"
      },
      {
        "zh": "一点儿也不像",
        "py": "yìdiǎnr yě bú xiàng",
        "vn": "chẳng giống chút nào"
      }
    ],
    "patterns": [
      {
        "s": "像 + N + 一样 + Adj",
        "m": "Giống như … vậy"
      },
      {
        "s": "像 (giống) ≠ 一样 (như nhau, bài 9): 像他一样高"
      }
    ]
  },
  {
    "n": 9,
    "zh": "盘子",
    "py": "pánzi",
    "pos": "Danh từ",
    "vn": "đĩa, mâm",
    "hv": "bàn tử",
    "em": "🍽️",
    "lesson": 3,
    "explain": [
      "Vật dụng hình tròn, phẳng dùng để đựng thức ăn."
    ],
    "usage": "Danh từ; đi cùng động từ 洗: 洗盘子.",
    "collo": [
      "洗盘子",
      "一个盘子",
      "白色的盘子"
    ],
    "ex_zh": "像白色的盘子一样。",
    "ex_py": "Xiàng báisè de pánzi yíyàng.",
    "ex_vn": "Giống như cái đĩa trắng vậy.",
    "exList": [
      {
        "zh": "今晚的月亮真漂亮，像白色的盘子一样。",
        "py": "Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.",
        "vn": "Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy."
      },
      {
        "zh": "小常，这些盘子都要洗干净。",
        "py": "Xiǎo Cháng, zhèxiē pánzi dōu yào xǐ gānjìng.",
        "vn": "Tiểu Thường, những cái đĩa này đều phải rửa sạch."
      },
      {
        "zh": "我在洗盘子呢，你把电视声音开大一点儿。",
        "py": "Wǒ zài xǐ pánzi ne, nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.",
        "vn": "Tôi đang rửa đĩa đây, bạn vặn to tiếng tivi lên một chút."
      }
    ],
    "hanzi": [
      {
        "c": "盘",
        "p": "pán",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "舟 trên (giản thể) → 皿 dưới",
        "rad": "皿 (mãnh – đồ đựng)",
        "mean": "đĩa, mâm",
        "tip": "皿(đồ đựng, hình cái bát) + phần trên (giản thể chỉ hình tròn xoay) → vật ĐỰNG hình tròn = ĐĨA, MÂM.",
        "cf": "血 (xuè – \"máu\", cũng có bộ 皿\")",
        "w": "盘子 / 一盘菜"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần con rửa sạch đĩa thì mẹ sẽ đưa con đi mua chuối.",
        "answer": "只要你把盘子洗干净，我就带你去买香蕉。",
        "answerPy": "Zhǐyào nǐ bǎ pánzi xǐ gānjìng, wǒ jiù dài nǐ qù mǎi xiāngjiāo.",
        "note": "洗干净 = bổ ngữ kết quả (ôn lại 干净 đã học trong bài này).",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi rửa cốc xong trước, sau đó mới rửa đĩa.",
        "answer": "我先把杯子洗完，然后再洗盘子。",
        "answerPy": "Wǒ xiān bǎ bēizi xǐwán, ránhòu zài xǐ pánzi.",
        "note": "先……然后再…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).",
        "pair": "先……然后……"
      }
    ],
    "colloFull": [
      {
        "zh": "洗盘子",
        "py": "xǐ pánzi",
        "vn": "rửa đĩa"
      },
      {
        "zh": "一个盘子",
        "py": "yí gè pánzi",
        "vn": "một cái đĩa"
      },
      {
        "zh": "白色的盘子",
        "py": "báisè de pánzi",
        "vn": "đĩa màu trắng"
      },
      {
        "zh": "把盘子放好",
        "py": "bǎ pánzi fàng hǎo",
        "vn": "xếp đĩa cho gọn"
      },
      {
        "zh": "盘子里",
        "py": "pánzi li",
        "vn": "trong đĩa"
      }
    ],
    "patterns": [
      {
        "s": "把 + 盘子 + 洗干净",
        "m": "Rửa đĩa cho sạch"
      },
      {
        "s": "一 + 盘 + 菜 (lượng từ) / 一 + 个 + 盘子 (danh từ)"
      }
    ]
  },
  {
    "n": 10,
    "zh": "刮风",
    "py": "guā fēng",
    "pos": "Động từ",
    "vn": "nổi gió",
    "hv": "quát phong",
    "em": "💨",
    "lesson": 3,
    "explain": [
      "Diễn tả hiện tượng gió thổi mạnh."
    ],
    "usage": "Động từ ly hợp: 刮 + 风; có thể thêm mức độ: 刮大风.",
    "collo": [
      "刮风",
      "刮大风",
      "不刮风"
    ],
    "ex_zh": "外边也不刮风。",
    "ex_py": "Wàibian yě bù guā fēng.",
    "ex_vn": "Bên ngoài cũng không có gió.",
    "exList": [
      {
        "zh": "是啊，外边也不刮风，我们坐在外边吃东西吧。",
        "py": "Shì a, wàibian yě bù guā fēng, wǒmen zuò zài wàibian chī dōngxi ba.",
        "vn": "Đúng vậy, bên ngoài cũng không có gió, chúng ta ngồi ở ngoài ăn đồ đi."
      },
      {
        "zh": "怎么突然刮大风了，把伞都刮跑了！",
        "py": "Zěnmeūrán guā dà fēng le, bǎ sǎn dōu guā pǎo le!",
        "vn": "Sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!"
      },
      {
        "zh": "刮这么大的风，伞没有用。",
        "py": "Guā zhème dà de fēng, sǎn méiyǒu yòng.",
        "vn": "Gió to thế này, ô cũng vô dụng thôi."
      }
    ],
    "hanzi": [
      {
        "c": "刮",
        "p": "guā",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "舌 trái → 刂 phải",
        "rad": "刂 (đao – dao)",
        "mean": "cạo, thổi (gió)",
        "tip": "舌(lưỡi) + 刂(dao) → dùng dao CẠO nhẹ như lưỡi liếm; mở rộng nghĩa gió THỔI lướt qua bề mặt.",
        "cf": "活 (huó – \"sống\", có bộ 氵\")",
        "w": "刮风 / 刮胡子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài gió to quá, thổi bay cả thực đơn trên bàn.",
        "answer": "因为外边刮大风，所以把桌子上的菜单都刮跑了。",
        "answerPy": "Yīnwèi wàibian guā dà fēng, suǒyǐ bǎ zhuōzi shang de càidān dōu guā pǎo le.",
        "note": "刮风 là từ ly hợp: 刮了一夜风.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu ngoài trời không có gió thì chúng ta ra ngoài ngồi đi.",
        "answer": "如果外边不刮风，我们就出去坐坐吧。",
        "answerPy": "Rúguǒ wàibian bù guā fēng, wǒmen jiù chūqu zuòzuo ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "刮风了",
        "py": "guā fēng le",
        "vn": "nổi gió rồi"
      },
      {
        "zh": "刮大风",
        "py": "guā dà fēng",
        "vn": "gió to"
      },
      {
        "zh": "不刮风",
        "py": "bù guā fēng",
        "vn": "không có gió"
      },
      {
        "zh": "刮了一夜风",
        "py": "guā le yí yè fēng",
        "vn": "gió thổi cả đêm"
      },
      {
        "zh": "外边刮风",
        "py": "wàibian guā fēng",
        "vn": "bên ngoài nổi gió"
      }
    ],
    "patterns": [
      {
        "s": "刮 + 了 + thời lượng + 风",
        "m": "刮风 là từ ly hợp"
      },
      {
        "s": "刮风 · 下雨 · 下雪 — nhóm từ chỉ thời tiết"
      }
    ]
  },
  {
    "n": 11,
    "zh": "叔叔",
    "py": "shūshu",
    "pos": "Danh từ",
    "vn": "chú",
    "hv": "thúc thúc",
    "em": "👨",
    "lesson": 3,
    "explain": [
      "Cách gọi em trai của cha, hoặc người đàn ông trẻ hơn cha mẹ."
    ],
    "usage": "Danh từ xưng hô; thường đi cùng 阿姨 thành cặp.",
    "collo": [
      "叔叔阿姨",
      "方叔叔",
      "听叔叔讲故事"
    ],
    "ex_zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
    "ex_py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
    "ex_vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.",
    "exList": [
      {
        "zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
        "py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
        "vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ."
      },
      {
        "zh": "方叔叔爱看教做饭的节目。",
        "py": "Fāng shūshu ài kàn jiāo zuò fàn de jiémù.",
        "vn": "Chú Phương thích xem chương trình dạy nấu ăn."
      },
      {
        "zh": "叔叔和阿姨第一次来我们家。",
        "py": "Shūshu hé āyí dì-yī cì lái wǒmen jiā.",
        "vn": "Chú và cô lần đầu đến nhà chúng tôi."
      }
    ],
    "hanzi": [
      {
        "c": "叔",
        "p": "shū",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "上 trái → 又 phải",
        "rad": "又 (hựu – lại)",
        "mean": "chú",
        "tip": "Hình ảnh người nhặt lượm (thu hoạch) đơn giản, mở rộng nghĩa người em trai của cha = CHÚ.",
        "cf": "椒 (jiāo – \"hạt tiêu\", có bộ 木\")",
        "w": "叔叔 / 大叔"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy chú bận công việc nhưng chú vẫn thường đến nhà chúng tôi.",
        "answer": "虽然叔叔工作很忙，但是他常常来我们家。",
        "answerPy": "Suīrán shūshu gōngzuò hěn máng, dànshì tā chángcháng lái wǒmen jiā.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần chú kể chuyện thì các em nhỏ đều thích nghe.",
        "answer": "只要叔叔讲故事，孩子们就都愿意听。",
        "answerPy": "Zhǐyào shūshu jiǎng gùshi, háizimen jiù dōu yuànyì tīng.",
        "note": "只要……就…… diễn tả điều kiện đủ (ôn lại 愿意 đã học ở Bài 13).",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "叔叔阿姨",
        "py": "shūshu āyí",
        "vn": "chú và cô"
      },
      {
        "zh": "方叔叔",
        "py": "fāng shūshu",
        "vn": "chú Phương"
      },
      {
        "zh": "听叔叔讲故事",
        "py": "tīng shūshu jiǎng gùshi",
        "vn": "nghe chú kể chuyện"
      },
      {
        "zh": "我叔叔",
        "py": "wǒ shūshu",
        "vn": "chú tôi"
      },
      {
        "zh": "叔叔来了",
        "py": "shūshu lái le",
        "vn": "chú đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "họ + 叔叔",
        "m": "Cách gọi: chú Phương…"
      },
      {
        "s": "叔叔 (chú) / 阿姨 (cô, dì) — cách trẻ em gọi người lớn"
      }
    ]
  },
  {
    "n": 12,
    "zh": "阿姨",
    "py": "āyí",
    "pos": "Danh từ",
    "vn": "dì, cô",
    "hv": "a di",
    "em": "👩",
    "lesson": 3,
    "explain": [
      "Cách gọi em/chị gái của mẹ, hoặc người phụ nữ trẻ hơn cha mẹ."
    ],
    "usage": "Danh từ xưng hô; thường đi cùng 叔叔 thành cặp.",
    "collo": [
      "叔叔阿姨",
      "常阿姨",
      "白阿姨"
    ],
    "ex_zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
    "ex_py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
    "ex_vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.",
    "exList": [
      {
        "zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
        "py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
        "vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ."
      },
      {
        "zh": "常阿姨住在我家楼下。",
        "py": "Cháng āyí zhù zài wǒ jiā lóuxià.",
        "vn": "Cô Thường sống ở tầng dưới nhà tôi."
      },
      {
        "zh": "方叔叔和白阿姨特别热情。",
        "py": "Fāng shūshu hé Bái āyí tèbié rèqíng.",
        "vn": "Chú Phương và cô Bạch rất nhiệt tình."
      }
    ],
    "hanzi": [
      {
        "c": "姨",
        "p": "yí",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "女 trái → 夷 phải",
        "rad": "女 (nữ)",
        "mean": "dì, cô",
        "tip": "女(nữ) + 夷(bằng phẳng, ngang hàng) → người phụ nữ NGANG HÀNG với mẹ = DÌ.",
        "cf": "姑 (gū – \"cô\", có 古 thay vì 夷\")",
        "w": "阿姨 / 姨妈"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu cô Thường ở nhà thì chúng ta sẽ đến tìm cô ấy trò chuyện.",
        "answer": "如果常阿姨在家，我们就去找她聊天。",
        "answerPy": "Rúguǒ Cháng āyí zài jiā, wǒmen jiù qù zhǎo tā liáotiān.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì cô ấy rất nhiệt tình nên mọi người đều thích cô ấy.",
        "answer": "因为阿姨很热情，所以大家都喜欢她。",
        "answerPy": "Yīnwèi āyí hěn rèqíng, suǒyǐ dàjiā dōu xǐhuan tā.",
        "note": "因为……所以…… nêu nguyên nhân — kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "叔叔阿姨",
        "py": "shūshu āyí",
        "vn": "chú và cô"
      },
      {
        "zh": "常阿姨",
        "py": "cháng āyí",
        "vn": "cô Thường"
      },
      {
        "zh": "谢谢阿姨",
        "py": "xièxie āyí",
        "vn": "cảm ơn cô"
      },
      {
        "zh": "阿姨做的菜",
        "py": "āyí zuò de cài",
        "vn": "món cô nấu"
      },
      {
        "zh": "问阿姨好",
        "py": "wèn āyí hǎo",
        "vn": "gửi lời hỏi thăm cô"
      }
    ],
    "patterns": [
      {
        "s": "họ + 阿姨",
        "m": "Cách gọi: cô Thường…"
      },
      {
        "s": "阿姨 cũng dùng gọi người giúp việc, người phục vụ nữ lớn tuổi"
      }
    ]
  },
  {
    "n": 13,
    "zh": "故事",
    "py": "gùshi",
    "pos": "Danh từ",
    "vn": "truyện, câu chuyện",
    "hv": "cố sự",
    "em": "📖",
    "lesson": 3,
    "explain": [
      "Một chuỗi sự việc được kể lại, có tính giải trí hoặc giáo dục."
    ],
    "usage": "Danh từ; đi cùng động từ 讲/听: 讲故事, 听故事.",
    "collo": [
      "讲故事",
      "听故事",
      "年轻时候的故事"
    ],
    "ex_zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
    "ex_py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
    "ex_vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ.",
    "exList": [
      {
        "zh": "我们听叔叔阿姨讲讲他们年轻时候的故事。",
        "py": "Wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.",
        "vn": "Chúng ta nghe chú và cô kể chuyện thời trẻ của họ."
      },
      {
        "zh": "爷爷奶奶，今天我来给你们讲故事。",
        "py": "Yéye nǎinai, jīntiān wǒ lái gěi nǐmen jiǎng gùshi.",
        "vn": "Ông bà ơi, hôm nay cháu kể chuyện cho ông bà nghe nhé."
      },
      {
        "zh": "爷爷奶奶最喜欢听你讲故事了。",
        "py": "Yéye nǎinai zuì xǐhuan tīng nǐ jiǎng gùshi le.",
        "vn": "Ông bà thích nhất nghe con kể chuyện đấy."
      }
    ],
    "hanzi": [
      {
        "c": "故",
        "p": "gù",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "古 trái → 攵 phải",
        "rad": "攵 (phốc – gõ nhẹ)",
        "mean": "chuyện cũ, lý do",
        "tip": "古(xưa cũ) + 攵(tác động, kể lại) → kể lại chuyện XƯA CŨ = CÂU CHUYỆN.",
        "cf": "古 (gǔ – \"xưa\", không có bộ 攵\")",
        "w": "故事 / 故乡"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần ông bà rảnh rỗi, cháu sẽ kể chuyện cho ông bà nghe.",
        "answer": "只要爷爷奶奶有空，我就给他们讲故事。",
        "answerPy": "Zhǐyào yéye nǎinai yǒu kòng, wǒ jiù gěi tāmen jiǎng gùshi.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn kể chuyện thì tôi rất muốn nghe.",
        "answer": "如果你讲故事，我就很想听。",
        "answerPy": "Rúguǒ nǐ jiǎng gùshi, wǒ jiù hěn xiǎng tīng.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "讲故事",
        "py": "jiǎng gùshi",
        "vn": "kể chuyện"
      },
      {
        "zh": "听故事",
        "py": "tīng gùshi",
        "vn": "nghe kể chuyện"
      },
      {
        "zh": "一个故事",
        "py": "yí gè gùshi",
        "vn": "một câu chuyện"
      },
      {
        "zh": "有意思的故事",
        "py": "yǒuyìsi de gùshi",
        "vn": "câu chuyện thú vị"
      },
      {
        "zh": "年轻时候的故事",
        "py": "niánqīng shíhou de gùshi",
        "vn": "chuyện thời trẻ"
      }
    ],
    "patterns": [
      {
        "s": "讲 + 故事",
        "m": "Kể chuyện — dùng 讲 (bài 6), không dùng 说"
      },
      {
        "s": "故 + 事",
        "m": "Chuyện (事) đã qua (故)"
      }
    ]
  },
  {
    "n": 14,
    "zh": "声音",
    "py": "shēngyīn",
    "pos": "Danh từ",
    "vn": "âm thanh, tiếng",
    "hv": "thanh âm",
    "em": "🔊",
    "lesson": 3,
    "explain": [
      "Âm phát ra mà tai người có thể nghe được."
    ],
    "usage": "Danh từ; đi cùng động từ 听/开: 听声音, 把声音开大.",
    "collo": [
      "声音很大",
      "把声音开大",
      "听外边的声音"
    ],
    "ex_zh": "你听外边的声音，一定是大山。",
    "ex_py": "Nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.",
    "ex_vn": "Bạn nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi.",
    "exList": [
      {
        "zh": "不用打了，你听外边的声音，一定是大山。",
        "py": "Búyòng dǎ le, nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.",
        "vn": "Không cần gọi nữa đâu, bạn nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi."
      },
      {
        "zh": "我很喜欢她的声音。",
        "py": "Wǒ hěn xǐhuan tā de shēngyīn.",
        "vn": "Tôi rất thích giọng nói của cô ấy."
      },
      {
        "zh": "你把电视声音开大一点儿。",
        "py": "Nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.",
        "vn": "Bạn vặn to tiếng tivi lên một chút."
      }
    ],
    "hanzi": [
      {
        "c": "音",
        "p": "yīn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "立 trên → 日 dưới",
        "rad": "音 (âm)",
        "mean": "âm thanh",
        "tip": "立(đứng, phát ra) + 曰(nói) → lời nói phát ra thành ÂM THANH; 声(tiếng)+音(âm) = ÂM THANH.",
        "cf": "章 (zhāng – \"chương\", có 早 thay vì 曰\")",
        "w": "声音 / 音乐"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ bảo tôi vặn nhỏ tiếng nhạc lại, vì em trai đang ngủ.",
        "answer": "妈妈让我把音乐声音开小一点儿，因为弟弟在睡觉。",
        "answerPy": "Māma ràng wǒ bǎ yīnyuè shēngyīn kāi xiǎo yìdiǎnr, yīnwèi dìdi zài shuìjiào.",
        "note": "把 + 声音 + 开大 / 开小 — vặn to, vặn nhỏ.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi rất thích giọng nói của cô ấy, giống như hát vậy.",
        "answer": "我很喜欢她的声音，像唱歌一样。",
        "answerPy": "Wǒ hěn xǐhuan tā de shēngyīn, xiàng chànggē yíyàng.",
        "note": "像……一样 diễn tả sự giống nhau (ôn lại đã học trong bài này).",
        "pair": "像……一样……"
      }
    ],
    "colloFull": [
      {
        "zh": "声音很大",
        "py": "shēngyīn hěn dà",
        "vn": "tiếng rất to"
      },
      {
        "zh": "把声音开大",
        "py": "bǎ shēngyīn kāi dà",
        "vn": "vặn to tiếng"
      },
      {
        "zh": "声音很好听",
        "py": "shēngyīn hěn hǎotīng",
        "vn": "giọng rất hay"
      },
      {
        "zh": "听到声音",
        "py": "tīng dào shēngyīn",
        "vn": "nghe thấy tiếng"
      },
      {
        "zh": "小点儿声音",
        "py": "xiǎo diǎn ér shēngyīn",
        "vn": "nhỏ tiếng chút"
      }
    ],
    "patterns": [
      {
        "s": "把 + 声音 + 开大 / 开小",
        "m": "Vặn to / nhỏ tiếng"
      },
      {
        "s": "声音 + 大 / 小",
        "m": "Tiếng to / nhỏ — không nói 声音高"
      }
    ]
  },
  {
    "n": 15,
    "zh": "菜单",
    "py": "càidān",
    "pos": "Danh từ",
    "vn": "thực đơn",
    "hv": "thái đơn",
    "em": "📋",
    "lesson": 4,
    "explain": [
      "Danh sách các món ăn có trong nhà hàng."
    ],
    "usage": "Danh từ; đi cùng động từ 看: 看菜单.",
    "collo": [
      "看菜单",
      "菜单上",
      "点菜单"
    ],
    "ex_zh": "你在饭馆儿的菜单上见过水果饭吗？",
    "ex_py": "Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma?",
    "ex_vn": "Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa?",
    "exList": [
      {
        "zh": "你在饭馆儿的菜单上见过水果饭吗？",
        "py": "Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma?",
        "vn": "Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa?"
      },
      {
        "zh": "我们先看看菜单，然后再点菜，好吗？",
        "py": "Wǒmen xiān kànkan càidān, ránhòu zài diǎn cài, hǎo ma?",
        "vn": "Chúng ta xem thực đơn trước đã, sau đó gọi món, được không?"
      },
      {
        "zh": "这是今天的菜单。",
        "py": "Zhè shì jīntiān de càidān.",
        "vn": "Đây là thực đơn hôm nay."
      }
    ],
    "hanzi": [
      {
        "c": "单",
        "p": "dān",
        "type": "独体字 · Chữ đơn (giản thể)",
        "st": 8,
        "ord": "nét liền",
        "rad": "丷 (bát)",
        "mean": "đơn, danh sách",
        "tip": "Chữ giản thể mô phỏng hình một tờ giấy ĐƠN LẺ ghi danh sách; 菜(món ăn)+单(danh sách) = THỰC ĐƠN.",
        "cf": "佳 (jiā – \"tốt đẹp\", có bộ 亻\")",
        "w": "菜单 / 简单 / 单词"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhân viên phục vụ mang thực đơn đến trước, sau đó giúp chúng tôi gọi món.",
        "answer": "服务员先把菜单拿过来，然后再帮我们点菜。",
        "answerPy": "Fúwùyuán xiān bǎ càidān ná guolai, ránhòu zài bāng wǒmen diǎn cài.",
        "note": "先……然后再…… diễn tả trình tự hành động (điểm ngữ pháp trọng tâm bài này).",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu thực đơn có cơm trái cây thì tôi muốn thử một lần.",
        "answer": "如果菜单上有水果饭，我就想试一次。",
        "answerPy": "Rúguǒ càidān shang yǒu shuǐguǒ fàn, wǒ jiù xiǎng shì yí cì.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "看菜单",
        "py": "kàn càidān",
        "vn": "xem thực đơn"
      },
      {
        "zh": "菜单上",
        "py": "càidān shàng",
        "vn": "trên thực đơn"
      },
      {
        "zh": "给我菜单",
        "py": "gěi wǒ càidān",
        "vn": "cho tôi thực đơn"
      },
      {
        "zh": "一张菜单",
        "py": "yì zhāng càidān",
        "vn": "một tờ thực đơn"
      },
      {
        "zh": "中文菜单",
        "py": "Zhōngwén càidān",
        "vn": "thực đơn tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "看 + 菜单",
        "m": "Xem thực đơn"
      },
      {
        "s": "菜 + 单",
        "m": "Tờ (单) ghi món ăn (菜)"
      }
    ]
  },
  {
    "n": 16,
    "zh": "简单",
    "py": "jiǎndān",
    "pos": "Tính từ",
    "vn": "đơn giản",
    "hv": "giản đơn",
    "em": "✅",
    "lesson": 4,
    "explain": [
      "Không phức tạp, dễ hiểu, dễ làm."
    ],
    "usage": "Tính từ; đứng làm vị ngữ hoặc định ngữ: 很简单.",
    "collo": [
      "很简单",
      "简单的问题",
      "做起来简单"
    ],
    "ex_zh": "其实做水果饭很简单。",
    "ex_py": "Qíshí zuò shuǐguǒ fàn hěn jiǎndān.",
    "ex_vn": "Thực ra làm cơm trái cây rất đơn giản.",
    "exList": [
      {
        "zh": "其实做水果饭很简单，先把米饭做好，然后再把新鲜的水果放进去。",
        "py": "Qíshí zuò shuǐguǒ fàn hěn jiǎndān, xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ xīnxiān de shuǐguǒ fàng jinqu.",
        "vn": "Thực ra làm cơm trái cây rất đơn giản, trước tiên nấu cơm xong, sau đó cho trái cây tươi vào."
      },
      {
        "zh": "这个问题很简单。",
        "py": "Zhège wèntí hěn jiǎndān.",
        "vn": "Vấn đề này rất đơn giản."
      },
      {
        "zh": "这不是时间的问题，主要是要有兴趣。",
        "py": "Zhè bú shì shíjiān de wèntí, zhǔyào shì yào yǒu xìngqù.",
        "vn": "Đây không phải vấn đề thời gian, chủ yếu là phải có hứng thú."
      }
    ],
    "hanzi": [
      {
        "c": "简",
        "p": "jiǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "⺮ trên → 间 dưới",
        "rad": "⺮ (trúc – tre)",
        "mean": "đơn giản",
        "tip": "⺮(thẻ tre dùng viết chữ thời xưa) + 间(khoảng giữa, ít) → viết trên ÍT thẻ tre = ĐƠN GIẢN.",
        "cf": "间 (jiān – \"giữa, khoảng\", không có bộ ⺮\")",
        "w": "简单 / 简体字"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Kỳ thi lần này tuy đơn giản, nhưng vẫn có mấy câu tôi làm không được.",
        "answer": "这次的考试虽然很简单，但是还有几个题我不会做。",
        "answerPy": "Zhè cì de kǎoshì suīrán hěn jiǎndān, dànshì hái yǒu jǐ ge tí wǒ bú huì zuò.",
        "note": "简单 ↔ 难 (bài 2).",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy vấn đề này rất đơn giản nhưng tôi vẫn hỏi chú.",
        "answer": "虽然这个问题很简单，但是我还是问了叔叔。",
        "answerPy": "Suīrán zhège wèntí hěn jiǎndān, dànshì wǒ háishi wènle shūshu.",
        "note": "虽然……但是…… diễn tả sự tương phản.",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "很简单",
        "py": "hěn jiǎndān",
        "vn": "rất đơn giản"
      },
      {
        "zh": "简单的问题",
        "py": "jiǎndān de wèntí",
        "vn": "câu hỏi đơn giản"
      },
      {
        "zh": "做起来简单",
        "py": "zuò qǐlai jiǎndān",
        "vn": "làm thì đơn giản"
      },
      {
        "zh": "不太简单",
        "py": "bú tài jiǎndān",
        "vn": "không đơn giản lắm"
      },
      {
        "zh": "简单点儿",
        "py": "jiǎndān diǎn ér",
        "vn": "đơn giản chút"
      }
    ],
    "patterns": [
      {
        "s": "N + 很 + 简单",
        "m": "Cái gì đó rất đơn giản"
      },
      {
        "s": "简单 ↔ 复杂 / 难",
        "m": "Đơn giản ↔ phức tạp, khó"
      }
    ]
  },
  {
    "n": 17,
    "zh": "香蕉",
    "py": "xiāngjiāo",
    "pos": "Danh từ",
    "vn": "chuối tiêu",
    "hv": "hương tiêu",
    "em": "🍌",
    "lesson": 4,
    "explain": [
      "Một loại trái cây có vỏ vàng, hình cong dài."
    ],
    "usage": "Danh từ; đi cùng động từ 买/吃: 买香蕉, 香蕉饭.",
    "collo": [
      "买香蕉",
      "香蕉饭",
      "新鲜的香蕉"
    ],
    "ex_zh": "你可以做苹果饭、香蕉饭。",
    "ex_py": "Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn.",
    "ex_vn": "Bạn có thể làm cơm táo, cơm chuối.",
    "exList": [
      {
        "zh": "你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。",
        "py": "Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn, yàoshi nǐ yuànyì, hái kěyǐ zuò xīguā fàn.",
        "vn": "Bạn có thể làm cơm táo, cơm chuối, nếu bạn muốn, còn có thể làm cơm dưa hấu."
      },
      {
        "zh": "我们买点儿香蕉吧，家里没有水果了。",
        "py": "Wǒmen mǎi diǎnr xiāngjiāo ba, jiā li méiyǒu shuǐguǒ le.",
        "vn": "Chúng ta mua ít chuối đi, nhà không còn trái cây nữa."
      },
      {
        "zh": "这些香蕉像是放了很久了。",
        "py": "Zhèxiē xiāngjiāo xiàng shì fàngle hěn jiǔ le.",
        "vn": "Mấy quả chuối này có vẻ để lâu rồi."
      }
    ],
    "hanzi": [
      {
        "c": "蕉",
        "p": "jiāo",
        "type": "上下结构 · Trên-dưới",
        "st": 15,
        "ord": "艹 trên → 焦 dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "chuối",
        "tip": "艹(thực vật) + 焦(cháy, ý chỉ màu vàng) → cây có quả màu VÀNG = CHUỐI.",
        "cf": "焦 (jiāo – \"cháy khét\", không có bộ 艹\")",
        "w": "香蕉 / 蕉叶"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn muốn ăn chuối, tôi sẽ xuống lầu mua một ít.",
        "answer": "只要你想吃香蕉，我就去楼下买一点儿。",
        "answerPy": "Zhǐyào nǐ xiǎng chī xiāngjiāo, wǒ jiù qù lóuxià mǎi yìdiǎnr.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn thích ăn chuối thì tôi mua một ít cho bạn.",
        "answer": "如果你喜欢吃香蕉，我就给你买一点儿。",
        "answerPy": "Rúguǒ nǐ xǐhuan chī xiāngjiāo, wǒ jiù gěi nǐ mǎi yìdiǎnr.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "买香蕉",
        "py": "mǎi xiāngjiāo",
        "vn": "mua chuối"
      },
      {
        "zh": "吃香蕉",
        "py": "chī xiāngjiāo",
        "vn": "ăn chuối"
      },
      {
        "zh": "新鲜的香蕉",
        "py": "xīnxiān de xiāngjiāo",
        "vn": "chuối tươi"
      },
      {
        "zh": "一个香蕉",
        "py": "yí gè xiāngjiāo",
        "vn": "một quả chuối"
      },
      {
        "zh": "香蕉很甜",
        "py": "xiāngjiāo hěn tián",
        "vn": "chuối rất ngọt"
      }
    ],
    "patterns": [
      {
        "s": "một + 个 + 香蕉",
        "m": "Một quả chuối"
      },
      {
        "s": "香 + 蕉",
        "m": "Quả chuối (蕉) thơm (香)"
      }
    ]
  }
];

const wuData = [
  {img:'🧹',label:'打扫',py:'dǎsǎo',letter:'A'},
  {img:'❄️',label:'冰箱',py:'bīngxiāng',letter:'B'},
  {img:'🍌',label:'香蕉',py:'xiāngjiāo',letter:'C'},
  {img:'🌙',label:'月亮',py:'yuèliang',letter:'D'},
  {img:'🍽️',label:'盘子',py:'pánzi',letter:'E'},
  {img:'📋',label:'菜单',py:'càidān',letter:'F'},
];

var dialogData = [
  {scene:'在家 · Ở nhà (khách sắp đến)',
   preQuiz:[
     {q:'周太太让周明先做什么？',opts:['先把茶和杯子放好','先看电视','先睡觉'],ans:0},
     {q:'谁会打扫房间？',opts:['孩子们','周太太自己','客人'],ans:0},
     {q:'周明最后决定先做什么？',opts:['先把空调打开','先拿西瓜','先看电视'],ans:0},
   ],
   lines:[
     {sp:1,zh:'客人就要来了，你怎么还不打扫房间啊？',py:'Kèrén jiù yào lái le, nǐ zěnme hái bù dǎsǎo fángjiān a?',vn:'Khách sắp đến rồi, sao anh vẫn chưa dọn phòng vậy?'},
     {sp:0,zh:'别着急，我让孩子们打扫呢，客人来的时候，他们会把房间打扫干净。',py:'Bié zháojí, wǒ ràng háizimen dǎsǎo ne, kèrén lái de shíhou, tāmen huì bǎ fángjiān dǎsǎo gānjìng.',vn:'Đừng vội, anh bảo bọn trẻ dọn rồi, lúc khách đến, chúng sẽ dọn phòng sạch sẽ.'},
     {sp:1,zh:'那你也不能看电视啊。',py:'Nà nǐ yě bù néng kàn diànshì a.',vn:'Vậy anh cũng không được xem tivi đâu nhé.'},
     {sp:0,zh:'你让我做什么？',py:'Nǐ ràng wǒ zuò shénme?',vn:'Vậy em bảo anh làm gì?'},
     {sp:1,zh:'先把茶和杯子放好，然后把冰箱里的西瓜拿出来。',py:'Xiān bǎ chá hé bēizi fànghǎo, ránhòu bǎ bīngxiāng li de xīguā ná chulai.',vn:'Trước tiên để trà và cốc gọn gàng, sau đó lấy dưa hấu trong tủ lạnh ra.'},
     {sp:0,zh:'太热了，我还是先把空调打开吧。',py:'Tài rè le, wǒ háishi xiān bǎ kōngtiáo dǎ kāi ba.',vn:'Nóng quá, anh bật điều hòa trước đã.'},
   ]},
  {scene:'在打电话 · Nói chuyện qua điện thoại',
   preQuiz:[
     {q:'小刚为什么没接电话？',opts:['刚洗了个澡，没听见','手机没电了','在开会'],ans:0},
     {q:'同事想问小刚什么？',opts:['公司里的一些事情','天气怎么样','周末的安排'],ans:0},
     {q:'同事让小刚先做什么？',opts:['先把节目看完','马上回电话','先关电视'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你在忙什么呢？刚才打你的手机你也不接。',py:'Nǐ zài máng shénme ne? Gāngcái dǎ nǐ de shǒujī nǐ yě bù jiē.',vn:'Bạn đang bận gì thế? Vừa nãy gọi điện thoại bạn cũng không nghe máy.'},
     {sp:0,zh:'对不起，我刚洗了个澡，没听见。有什么事吗？',py:'Duìbuqǐ, wǒ gāng xǐle ge zǎo, méi tīngjiàn. Yǒu shénme shì ma?',vn:'Xin lỗi, tôi vừa tắm xong, không nghe thấy. Có việc gì vậy?'},
     {sp:1,zh:'我想问问你公司里的一些事情。',py:'Wǒ xiǎng wènwen nǐ gōngsī li de yìxiē shìqing.',vn:'Tôi muốn hỏi bạn một số việc trong công ty.'},
     {sp:0,zh:'你先等一下，我去把电视关了。',py:'Nǐ xiān děng yíxià, wǒ qù bǎ diànshì guān le.',vn:'Bạn đợi một chút, tôi tắt tivi đã.'},
     {sp:1,zh:'没关系，你先把电视节目看完吧，然后再给我回电话。',py:'Méi guānxi, nǐ xiān bǎ diànshì jiémù kànwán ba, ránhòu zài gěi wǒ huí diànhuà.',vn:'Không sao, bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi.'},
   ]},
  {scene:'在小明家 · Tại nhà bạn Minh',
   preQuiz:[
     {q:'今晚的月亮怎么样？',opts:['真漂亮，像白色的盘子一样','不圆','看不见'],ans:0},
     {q:'他们打算怎么过今晚？',opts:['坐在外边看月亮吃东西','去看电影','去饭馆吃饭'],ans:0},
     {q:'外边的声音是谁？',opts:['大山','邻居','风声'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今晚的月亮真漂亮，像白色的盘子一样。',py:'Jīn wǎn de yuèliang zhēn piàoliang, xiàng báisè de pánzi yíyàng.',vn:'Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.'},
     {sp:0,zh:'是啊，外边也不刮风，我们坐在外边一边看月亮一边吃东西，怎么样？',py:'Shì a, wàibian yě bù guā fēng, wǒmen zuò zài wàibian yìbiān kàn yuèliang yìbiān chī dōngxi, zěnme yàng?',vn:'Đúng vậy, bên ngoài cũng không có gió, chúng ta ngồi ngoài đó vừa ngắm trăng vừa ăn đồ, thế nào?'},
     {sp:1,zh:'好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听叔叔阿姨讲讲他们年轻时候的故事。',py:'Hǎo a, wǒ xiān bǎ zhuōyǐ bān chuqu, ránhòu nǐ bǎ shuǐguǒ ná guolai, wǒmen tīng shūshu āyí jiǎngjiang tāmen niánqīng shíhou de gùshi.',vn:'Được đấy, mình mang bàn ghế ra ngoài trước, sau đó cậu mang trái cây đến, chúng ta nghe chú và cô kể chuyện thời trẻ của họ.'},
     {sp:0,zh:'太好了！记得给大山打个电话，让他马上过来。',py:'Tài hǎo le! Jìde gěi Dàshān dǎ ge diànhuà, ràng tā mǎshàng guòlai.',vn:'Tuyệt quá! Nhớ gọi điện cho Đại Sơn, bảo cậu ấy đến ngay nhé.'},
     {sp:1,zh:'不用打了，你听外边的声音，一定是大山。',py:'Búyòng dǎ le, nǐ tīng wàibian de shēngyīn, yídìng shì Dàshān.',vn:'Không cần gọi nữa đâu, cậu nghe âm thanh bên ngoài đi, chắc chắn là Đại Sơn rồi.'},
   ]},
  {scene:'独白 · Tự thuật (giới thiệu cách làm cơm trái cây)',
   preQuiz:[
     {q:'做水果饭难吗？',opts:['很简单','很难','要很长时间'],ans:0},
     {q:'做水果饭的第一步是什么？',opts:['先把米饭做好','先切水果','先买水果'],ans:0},
     {q:'文中提到可以做哪些水果饭？',opts:['苹果饭、香蕉饭、西瓜饭','橙子饭','葡萄饭'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你吃过水果饭吗？你在饭馆儿的菜单上见过水果饭吗？你想学着做水果饭吗？',py:'Nǐ chī guo shuǐguǒ fàn ma? Nǐ zài fànguǎnr de càidān shang jiàn guo shuǐguǒ fàn ma? Nǐ xiǎng xuézhe zuò shuǐguǒ fàn ma?',vn:'Bạn đã từng ăn cơm trái cây chưa? Bạn đã từng thấy cơm trái cây trên thực đơn nhà hàng chưa? Bạn có muốn học cách làm cơm trái cây không?'},
     {sp:0,zh:'其实做水果饭很简单，先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。',py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān, xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ yí kuàikuài xīnxiān de shuǐguǒ fàng jinqu, shuǐguǒ fàn jiù zuòhǎo le.',vn:'Thực ra làm cơm trái cây rất đơn giản, trước tiên nấu cơm xong, sau đó cho từng miếng trái cây tươi vào, cơm trái cây là xong.'},
     {sp:0,zh:'你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。',py:'Nǐ kěyǐ zuò píngguǒ fàn, xiāngjiāo fàn, yàoshi nǐ yuànyì, hái kěyǐ zuò xīguā fàn.',vn:'Bạn có thể làm cơm táo, cơm chuối, nếu bạn muốn, còn có thể làm cơm dưa hấu.'},
     {sp:0,zh:'多吃新鲜水果对身体好。',py:'Duō chī xīnxiān shuǐguǒ duì shēntǐ hǎo.',vn:'Ăn nhiều trái cây tươi tốt cho sức khỏe.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'打扫',right:'房间'},
  {left:'洗',right:'干净'},
  {left:'看',right:'节目'},
  {left:'像',right:'白色的盘子'},
  {left:'外边',right:'刮风'},
  {left:'讲',right:'故事'},
  {left:'看',right:'菜单'},
  {left:'因为客人要来了，',right:'所以我们打扫房间。'},
  {left:'虽然买香蕉很简单，',right:'但是很多人没吃过。'},
  {left:'如果你愿意，',right:'我们就一起打扫房间。'},
  {left:'先把盘子洗干净，',right:'然后再把香蕉放进冰箱。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你怎么还不',blank:'打扫',post:'房间啊？',hint:'(quét dọn)',ans:'打扫'},
  {pre:'他们会把房间打扫',blank:'干净',post:'。',hint:'(sạch sẽ)',ans:'干净'},
  {pre:'我们先把桌子打扫干净，',blank:'然后',post:'把西瓜拿出来吃。',hint:'(sau đó)',ans:'然后'},
  {pre:'我还是先把',blank:'冰箱',post:'里的西瓜拿出来吧。',hint:'(tủ lạnh)',ans:'冰箱'},
  {pre:'弟弟每天早上起床以后都要',blank:'洗澡',post:'，然后才去上班。',hint:'(tắm, tắm rửa)',ans:'洗澡'},
  {pre:'你先把这个',blank:'节目',post:'看完吧。',hint:'(chương trình truyền hình)',ans:'节目'},
  {pre:'今晚的',blank:'月亮',post:'真漂亮。',hint:'(mặt trăng)',ans:'月亮'},
  {pre:'',blank:'像',post:'白色的盘子一样。',hint:'(giống)',ans:'像'},
  {pre:'这两个',blank:'盘子',post:'都要洗干净。',hint:'(đĩa, mâm)',ans:'盘子'},
  {pre:'外边也不',blank:'刮风',post:'。',hint:'(nổi gió)',ans:'刮风'},
  {pre:'我们听',blank:'叔叔',post:'阿姨讲故事。',hint:'(chú)',ans:'叔叔'},
  {pre:'方叔叔和白',blank:'阿姨',post:'常常给我们讲故事。',hint:'(dì, cô)',ans:'阿姨'},
  {pre:'他们过去的',blank:'故事',post:'。',hint:'(truyện, câu chuyện)',ans:'故事'},
  {pre:'你听外边的',blank:'声音',post:'，一定是大山。',hint:'(âm thanh, tiếng)',ans:'声音'},
  {pre:'服务员告诉我们，',blank:'菜单',post:'上有很多好吃的水果。',hint:'(thực đơn)',ans:'菜单'},
  {pre:'打扫房间很',blank:'简单',post:'。',hint:'(đơn giản)',ans:'简单'},
  {pre:'你可以买西瓜、',blank:'香蕉',post:'。',hint:'(chuối tiêu)',ans:'香蕉'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['因为','客人','快','到','了','，','所以','他','马上','把','房间','打扫','干净','。'],ans:'因为客人快到了，所以他马上把房间打扫干净。',audio:'因为客人快到了，所以他马上把房间打扫干净。'},
  {words:['妈妈','先','把','香蕉','放进','冰箱','，','然后','打扫','客厅','。'],ans:'妈妈先把香蕉放进冰箱，然后打扫客厅。',audio:'妈妈先把香蕉放进冰箱，然后打扫客厅。'},
  {words:['你','先','把','这个','节目','看完','，','然后','再','去','洗澡','吧','。'],ans:'你先把这个节目看完，然后再去洗澡吧。',audio:'你先把这个节目看完，然后再去洗澡吧。'},
  {words:['他','买','的','香蕉','真','好吃','，','像','超市','里','卖','的','一样','。'],ans:'他买的香蕉真好吃，像超市里卖的一样。',audio:'他买的香蕉真好吃，像超市里卖的一样。'},
  {words:['因为','客人','要','来','了','，','所以','我们','打扫','房间','。'],ans:'因为客人要来了，所以我们打扫房间。',audio:'因为客人要来了，所以我们打扫房间。'},
  {words:['虽然','外边','刮风','，','但是','月亮','还是','那么','漂亮','。'],ans:'虽然外边刮风，但是月亮还是那么漂亮。',audio:'虽然外边刮风，但是月亮还是那么漂亮。'},
  {words:['如果','你','愿意','，','我们','就','一起','打扫','房间','。'],ans:'如果你愿意，我们就一起打扫房间。',audio:'如果你愿意，我们就一起打扫房间。'},
  {words:['先','把','盘子','洗','干净','，','然后','再','把','一块块','新鲜','的','水果','放进去','。'],ans:'先把盘子洗干净，然后再把一块块新鲜的水果放进去。',audio:'先把盘子洗干净，然后再把一块块新鲜的水果放进去。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'妈妈把房间打扫。',
   opts:['妈妈把房间打扫干净了。','妈妈把房间打扫。','妈妈房间把打扫干净了。','妈妈把打扫房间干净了。'],ans:0,
   exp:'Câu 把字句3 cần có bổ ngữ kết quả/xu hướng SAU động từ, không thể chỉ có động từ đơn thuần.'},
  {wrong:'请同学们拿把铅笔出来。',
   opts:['请同学们把铅笔拿出来。','请同学们拿把铅笔出来。','请同学们铅笔把拿出来。','请把同学们铅笔拿出来。'],ans:0,
   exp:'把 phải đứng NGAY TRƯỚC B(铅笔), không đặt sau động từ.'},
  {wrong:'你水果把拿过来。',
   opts:['你把水果拿过来。','你水果把拿过来。','你把拿水果过来。','水果你把拿过来。'],ans:0,
   exp:'Thứ tự đúng là A+把+B+động từ+bổ ngữ, không đảo 把 ra sau B(水果).'},
  {wrong:'看完节目以后，我又洗澡，然后休息。',
   opts:['看完节目以后，我先洗澡，然后休息。','看完节目以后，我又洗澡，然后休息。','看完节目以后，我然后洗澡，先休息。','看完节目以后，我洗澡又，然后休息。'],ans:0,
   exp:'先……然后…… diễn tả trình tự dự định; 又 chỉ dùng cho hành động ĐÃ xảy ra, không phù hợp ở đây.'},
  {wrong:'我先坐了一个小时公共汽车，再坐了一会儿地铁才到小刚家。',
   opts:['我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。','我先坐了一个小时公共汽车，再坐了一会儿地铁才到小刚家。','我又坐了一个小时公共汽车，先坐了一会儿地铁才到小刚家。','我先坐了一个小时公共汽车，然后坐再一会儿地铁才到小刚家。'],ans:0,
   exp:'又 diễn tả hành động ĐÃ xảy ra (quá khứ); 再 chỉ dùng cho hành động CHƯA xảy ra.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 14. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Cuối tuần bạn tổng vệ sinh căn phòng của mình.',
      q_zh: '周末你怎么打扫房间？先做什么，然后做什么？',
      q_py: 'Zhōumò nǐ zěnme dǎsǎo fángjiān? Xiān zuò shénme, ránhòu zuò shénme?',
      q_vn: 'Cuối tuần bạn dọn phòng thế nào? Làm gì trước, rồi làm gì?',
      grammar: { label: '先……，然后……，最后…… + 把……打扫干净', any: ['先', '然后', '最后', '把'] },
      need: [
        { label: 'Dùng 先……然后…… nói thứ tự', any: ['先', '然后', '最后'] },
        { label: 'Dùng 把 + việc dọn dẹp', any: ['把', '打扫', '洗', '干净'] }
      ],
      bonus: { label: 'Nói việc thư giãn sau khi dọn xong', any: ['洗澡', '节目', '电视', '休息', '音乐'] },
      vocab: ['打扫', '干净', '然后', '盘子'],
      minLen: 20,
      sample: '周末我先把房间打扫干净，然后把盘子和碗洗好，最后洗个澡，看看喜欢的节目。',
      sample_py: 'Zhōumò wǒ xiān bǎ fángjiān dǎsǎo gānjìng, ránhòu bǎ pánzi hé wǎn xǐ hǎo, zuìhòu xǐ ge zǎo, kànkan xǐhuan de jiémù.',
      sample_vn: 'Cuối tuần tôi dọn phòng sạch sẽ trước, rồi rửa đĩa bát, cuối cùng tắm một cái và xem chương trình mình thích.',
      tip: '把 + đồ vật + động từ + bổ ngữ kết quả: 把房间打扫干净、把衣服洗干净。'
    },
    {
      situation: 'Bạn vừa đi siêu thị về và đang cất đồ.',
      q_zh: '买回来的东西你一般怎么放？',
      q_py: 'Mǎi huílai de dōngxi nǐ yìbān zěnme fàng?',
      q_vn: 'Đồ mua về bạn thường cất thế nào?',
      grammar: { label: '把 + đồ vật + 拿出来 / 放到……里', any: ['把', '拿出来', '放到'] },
      need: [
        { label: 'Dùng 把 + động từ + bổ ngữ xu hướng', any: ['拿出来', '放进去', '放到', '拿回来'] },
        { label: 'Nhắc đến tủ lạnh hoặc chỗ cất', any: ['冰箱', '厨房', '桌子', '柜子'] }
      ],
      bonus: { label: 'Nói lý do làm vậy', any: ['坏', '新鲜', '简单', '方便'] },
      vocab: ['冰箱', '香蕉', '简单'],
      minLen: 20,
      sample: '我一般先把水果和香蕉拿出来放在桌子上，再把牛奶和菜放到冰箱里。这样很简单，东西也不容易坏。',
      sample_py: 'Wǒ yìbān xiān bǎ shuǐguǒ hé xiāngjiāo ná chū lái fàng zài zhuōzi shàng, zài bǎ niúnǎi hé cài fàng dào bīngxiāng lǐ. Zhè yàng hěn jiǎndān, dōngxi yě bù róngyì huài.',
      sample_vn: 'Tôi thường lấy hoa quả và chuối ra để lên bàn trước, rồi cho sữa và rau vào tủ lạnh. Như vậy rất đơn giản, đồ cũng không dễ hỏng.',
      tip: '把……拿出来 / 放进去: động từ + bổ ngữ xu hướng đứng sau tân ngữ của 把.'
    },
    {
      situation: 'Tối trung thu, bạn ra ngoài ngắm trăng cùng bạn bè.',
      q_zh: '说一说今天晚上的天气：月亮怎么样？外面刮风吗？',
      q_py: 'Shuō yi shuō jīntiān wǎnshang de tiānqì: yuèliang zěnmeyàng? Wàimian guāfēng ma?',
      q_vn: 'Hãy kể thời tiết tối nay: mặt trăng thế nào? Bên ngoài có gió không?',
      grammar: { label: '像 + danh từ (giống như…)', any: ['像'] },
      need: [
        { label: 'Tả mặt trăng', any: ['月亮', '大', '圆', '亮'] },
        { label: 'Nói về gió hoặc thời tiết', any: ['刮风', '风', '冷', '舒服', '天气'] }
      ],
      bonus: { label: 'Dùng 像 để so sánh', any: ['像'] },
      vocab: ['月亮', '像', '刮风', '盘子'],
      minLen: 18,
      sample: '今天晚上的月亮又大又亮，像一个白色的盘子。外面有点儿刮风，可是一点儿也不冷，很舒服。',
      sample_py: 'Jīntiān wǎnshang de yuèliang yòu dà yòu liàng, xiàng yí ge bái sè de pánzi. Wàimian yǒudiǎnr guāfēng, kěshì yìdiǎnr yě bù lěng, hěn shūfu.',
      sample_vn: 'Mặt trăng tối nay vừa to vừa sáng, giống như một cái đĩa trắng. Bên ngoài hơi có gió, nhưng không lạnh chút nào, rất dễ chịu.',
      tip: '像 + danh từ = giống như: 他像他爸爸。'
    },
    {
      situation: 'Bạn kể kỷ niệm tuổi thơ cho lớp nghe.',
      q_zh: '小时候谁给你讲故事？讲的是什么故事？',
      q_py: 'Xiǎoshí hòu shéi gěi nǐ jiǎng gùshi? Jiǎng de shì shénme gùshi?',
      q_vn: 'Hồi nhỏ ai kể chuyện cho bạn? Kể chuyện gì?',
      grammar: { label: '给 + người + 讲故事', any: ['讲', '给'] },
      need: [
        { label: 'Nói ai kể chuyện', any: ['叔叔', '阿姨', '妈妈', '爸爸', '爷爷', '奶奶', '老师'] },
        { label: 'Nói nội dung câu chuyện', any: ['故事', '动物', '月亮', '小鸟', '书'] }
      ],
      bonus: { label: 'Tả giọng kể bằng 声音', any: ['声音'] },
      vocab: ['叔叔', '故事', '声音'],
      minLen: 20,
      sample: '小时候我叔叔常常给我讲故事，他的声音很好听。我最喜欢听他讲小动物的故事，听完以后我才愿意睡觉。',
      sample_py: 'Xiǎoshí hòu wǒ shūshu chángcháng gěi wǒ jiǎng gùshi, tā de shēngyīn hěn hǎotīng. Wǒ zuì xǐhuan tīng tā jiǎng xiǎo dòngwù de gùshi, tīng wán yǐhòu wǒ cái yuànyì shuìjiào.',
      sample_vn: 'Hồi nhỏ chú hay kể chuyện cho tôi, giọng chú rất dễ nghe. Tôi thích nhất nghe chú kể chuyện về các con vật nhỏ, nghe xong mới chịu đi ngủ.',
      tip: '讲 = kể, giảng: 讲故事、老师讲语法。'
    },
    {
      situation: 'Bạn dẫn bạn bè vào một quán ăn mới.',
      q_zh: '在饭馆儿点菜的时候，你一般先做什么？',
      q_py: 'Zài fàn guǎn ér diǎn cài de shíhou, nǐ yìbān xiān zuò shénme?',
      q_vn: 'Khi gọi món ở quán, bạn thường làm gì trước?',
      grammar: { label: '先……，然后……，最后……', any: ['先', '然后', '最后'] },
      need: [
        { label: 'Nói xem thực đơn', any: ['菜单', '看'] },
        { label: 'Nói hỏi nhân viên hoặc chọn món', any: ['服务员', '问', '点', '菜'] }
      ],
      bonus: { label: 'Nói chọn món đơn giản bằng 简单', any: ['简单', '新鲜', '不太贵'] },
      vocab: ['菜单', '简单', '然后'],
      minLen: 20,
      sample: '我一般先看看菜单，然后问问服务员今天什么菜新鲜，最后点两三个简单的菜和一个汤。',
      sample_py: 'Wǒ yìbān xiān kànkan càidān, ránhòu wènwen fúwùyuán jīntiān shénme cài xīnxiān, zuìhòu diǎn liǎng sān ge jiǎndān de cài hé yí ge tāng.',
      sample_vn: 'Tôi thường xem thực đơn trước, rồi hỏi nhân viên hôm nay món gì tươi, cuối cùng gọi hai ba món đơn giản và một bát canh.',
      tip: '先……然后……最后…… giúp câu trả lời có thứ tự rõ ràng.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì em trai cứ xem chương trình mãi, nên vẫn chưa dọn phòng.', zh:'因为弟弟一直在看节目，所以还没打扫房间。', py:'Yīnwèi dìdi yìzhí zài kàn jiémù, suǒyǐ hái méi dǎsǎo fángjiān.'},
  {vi:'Tôi lau sạch bàn trước, sau đó để chuối lên đĩa.', zh:'我先把桌子擦干净，然后把香蕉放在盘子里。', py:'Wǒ xiān bǎ zhuōzi cā gānjìng, ránhòu bǎ xiāngjiāo fàng zài pánzi li.'},
  {vi:'Bạn rửa đĩa xong trước đã, sau đó xem chương trình tivi tiếp nhé.', zh:'你先把盘子洗好，然后再看电视节目吧。', py:'Nǐ xiān bǎ pánzi xǐhǎo, ránhòu zài kàn diànshì jiémù ba.'},
  {vi:'Trăng cô ấy vẽ đẹp thật, giống như thật vậy.', zh:'她画的月亮真好看，像真的一样。', py:'Tā huà de yuèliang zhēn hǎokàn, xiàng zhēn de yíyàng.'},
  {vi:'Vì chú và cô thường đến nhà chúng tôi, nên chúng tôi đều rất muốn nghe họ kể chuyện.', zh:'因为叔叔阿姨常常来我们家，所以我们都很想听他们讲故事。', py:'Yīnwèi shūshu āyí chángcháng lái wǒmen jiā, suǒyǐ wǒmen dōu hěn xiǎng tīng tāmen jiǎng gùshi.'},
  {vi:'Bạn đã từng ăn cơm trái cây chưa?', zh:'你吃过水果饭吗？', py:'Nǐ chī guo shuǐguǒ fàn ma?'},
  {vi:'Thực ra làm cơm trái cây rất đơn giản.', zh:'其实做水果饭很简单。', py:'Qíshí zuò shuǐguǒ fàn hěn jiǎndān.'},
  {vi:'Ăn nhiều trái cây tươi tốt cho sức khỏe.', zh:'多吃新鲜水果对身体好。', py:'Duō chī xīnxiān shuǐguǒ duì shēntǐ hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì thực đơn không có cơm trái cây, nên chúng tôi không gọi món đó.', zh:'因为菜单上没有水果饭，所以我们没有点。', py:'Yīnwèi càidān shang méiyǒu shuǐguǒ fàn, suǒyǐ wǒmen méiyǒu diǎn.'},
  {vi:'Tuy tối nay không có trăng nhưng bên ngoài không hề có gió.', zh:'虽然今晚没有月亮，但是外边一点儿也不刮风。', py:'Suīrán jīnwǎn méiyǒu yuèliang, dànshì wàibian yìdiǎnr yě bù guā fēng.'},
  {vi:'Nếu tủ lạnh có trái cây tươi, chúng ta sẽ cùng làm cơm trái cây.', zh:'如果冰箱里有新鲜的水果，我们就一起做水果饭。', py:'Rúguǒ bīngxiāng li yǒu xīnxiān de shuǐguǒ, wǒmen jiù yìqǐ zuò shuǐguǒ fàn.'},
  {vi:'Trước tiên nấu cơm xong, sau đó cho trái cây tươi vào.', zh:'先把米饭做好，然后再把新鲜的水果放进去。', py:'Xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ xīnxiān de shuǐguǒ fàng jinqu.'},
  {vi:'Tôi xem nửa tiếng chương trình trước, lại dọn phòng một lúc mới ra ngoài.', zh:'我先看了半个小时的节目，又打扫了一会儿房间才出门。', py:'Wǒ xiān kànle bàn ge xiǎoshí de jiémù, yòu dǎsǎole yíhuìr fángjiān cái chūmén.'},
  {vi:'Chúng tôi đi ăn ở nhà hàng trước, sau đó cùng nhau đi ngắm trăng.', zh:'我们先去饭馆吃饭，然后一起去看月亮。', py:'Wǒmen xiān qù fànguǎn chī fàn, ránhòu yìqǐ qù kàn yuèliang.'},
  {vi:'Xin đừng vừa lái xe vừa gọi điện thoại.', zh:'请别一边开车一边打电话。', py:'Qǐng bié yìbiān kāichē yìbiān dǎ diànhuà.'},
  {vi:'Các bạn học sinh đều chạy ra khỏi lớp học rồi.', zh:'同学们都跑出教室去了。', py:'Tóngxuémen dōu pǎo chū jiàoshì qu le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 14)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-14/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"我的伞，我的伞", post:"！",
       py:"Wǒ de sǎn, wǒ de sǎn!",
       vn:"Ô của tôi, ô của tôi!"},
      {speaker:"男", pre:"", blank:"怎么突然刮大风了，把伞都刮跑了", post:"！",
       py:"Zěnme rán guā dà fēng le, bǎ sǎn dōu guā pǎo le!",
       vn:"Sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!"}]},
    {num:2, lines:[
      {speaker:"女", pre:"", blank:"你怎么把冰箱里的东西都吃完了？我们今晚吃什么啊", post:"？",
       py:"Nǐ zěnme bǎ bīngxiāng li de dōngxi dōu chīwán le? Wǒmen jīnwǎn chī shénme a?",
       vn:"Sao bạn ăn hết đồ trong tủ lạnh vậy? Tối nay chúng ta ăn gì đây?"},
      {speaker:"男", pre:"", blank:"你不在家这几天，我一直没出去", post:"。",
       py:"Nǐ bú zài jiā zhè jǐ tiān, wǒ yìzhí méi chūqu.",
       vn:"Mấy ngày bạn không có nhà, tôi cứ ở nhà không ra ngoài."}]},
    {num:3, lines:[
      {speaker:"男", pre:"小常，", blank:"这些盘子都要洗干净", post:"。",
       py:"Xiǎo Cháng, zhèxiē pánzi dōu yào xǐ gānjìng.",
       vn:"Tiểu Thường, những cái đĩa này đều phải rửa sạch."},
      {speaker:"女", pre:"好，", blank:"我先把杯子洗完，然后再洗盘子", post:"。",
       py:"Hǎo, wǒ xiān bǎ bēizi xǐwán, ránhòu zài xǐ pánzi.",
       vn:"Được, tôi rửa cốc trước, sau đó mới rửa đĩa."}]},
    {num:4, lines:[
      {speaker:"男", pre:"先生，今天的鱼很新鲜，", blank:"您要不要来一条", post:"？",
       py:"Xiānsheng, jīntiān de yú hěn xīnxiān, nín yào bu yào lái yì tiáo?",
       vn:"Thưa anh, hôm nay cá rất tươi, anh có muốn dùng một con không?"},
      {speaker:"女", pre:"", blank:"我们先看看菜单，然后再点菜，好吗", post:"？",
       py:"Wǒmen xiān kànkan càidān, ránhòu zài diǎn cài, hǎo ma?",
       vn:"Chúng ta xem thực đơn trước đã, sau đó gọi món, được không?"}]},
    {num:5, lines:[
      {speaker:"男", pre:"爷爷奶奶，你们别说话，", blank:"今天我来给你们讲故事", post:"。",
       py:"Yéye nǎinai, nǐmen bié shuōhuà, jīntiān wǒ lái gěi nǐmen jiǎng gùshi.",
       vn:"Ông bà ơi, ông bà đừng nói chuyện nữa, hôm nay cháu kể chuyện cho ông bà nghe."},
      {speaker:"女", pre:"好啊，", blank:"爷爷奶奶最喜欢听你讲故事了", post:"。",
       py:"Hǎo a, yéye nǎinai zuì xǐhuan tīng nǐ jiǎng gùshi le.",
       vn:"Được đấy, ông bà thích nhất nghe con kể chuyện đấy."}]},
    {num:6, stmt:"他今天坐地铁去上课。", judge:false, lines:[
      {pre:"今天早上我妻子把车开出去了，要很晚才回来。", blank:"儿子9点要去学校上课，我只好带他坐地铁", post:"。",
       py:"Jīntiān zǎoshang wǒ qīzi bǎ chē kāi chuqu le, yào hěn wǎn cái huílai. Érzi jiǔ diǎn yào qù xuéxiào shàngkè, wǒ zhǐhǎo dài tā zuò dìtiě.",
       vn:"Sáng nay vợ tôi lái xe đi rồi, phải rất muộn mới về. Con trai 9 giờ phải đến trường học, tôi đành đưa con đi tàu điện ngầm."}]},
    {num:7, stmt:"常阿姨的声音很大。", judge:false, lines:[
      {pre:"常阿姨住在我家楼下，她经常把我叫下去听她唱歌。", blank:"我很喜欢她的声音。有时候我还和她一起唱呢", post:"。",
       py:"Cháng āyí zhù zài wǒ jiā lóuxià, tā jīngcháng bǎ wǒ jiào xiaqu tīng tā chànggē. Wǒ hěn xǐhuan tā de shēngyīn. Yǒushíhou wǒ hái hé tā yìqǐ chàng ne.",
       vn:"Cô Thường sống ở tầng dưới nhà tôi, cô ấy thường gọi tôi xuống nghe cô hát. Tôi rất thích giọng của cô ấy. Có lúc tôi còn hát cùng cô ấy nữa."}]},
    {num:8, stmt:"方叔叔喜欢做饭。", judge:true, lines:[
      {pre:"方叔叔爱看教做饭的节目。每天晚上不到七点半，都坐在电视前等着节目开始。", blank:"看完了他马上就开始做，做好了饭就请大家来吃", post:"。",
       py:"Fāng shūshu ài kàn jiāo zuò fàn de jiémù. Měi tiān wǎnshang bú dào qī diǎn bàn, dōu zuò zài diànshì qián děngzhe jiémù kāishǐ. Kànwánle tā mǎshàng jiù kāishǐ zuò, zuòhǎole fàn jiù qǐng dàjiā lái chī.",
       vn:"Chú Phương thích xem chương trình dạy nấu ăn. Tối nào chưa đến 7 giờ rưỡi, chú đã ngồi trước tivi chờ chương trình bắt đầu. Xem xong là chú bắt tay nấu ngay, nấu xong là mời mọi người đến ăn."}]},
    {num:9, stmt:"小周回家以前要打扫办公室。", judge:true, lines:[
      {pre:"一天的工作结束后，小周总是最后一个离开公司的。", blank:"她每天都要先把办公室打扫干净，然后才回家", post:"。",
       py:"Yì tiān de gōngzuò jiéshù hòu, Xiǎo Zhōu zǒngshì zuìhòu yí ge líkāi gōngsī de. Tā měi tiān dōu yào xiān bǎ bàngōngshì dǎsǎo gānjìng, ránhòu cái huí jiā.",
       vn:"Sau khi kết thúc công việc mỗi ngày, Tiểu Chu luôn là người rời công ty cuối cùng. Ngày nào cô ấy cũng phải dọn sạch văn phòng trước, rồi mới về nhà."}]},
    {num:10, stmt:"去方叔叔家时，我要带很多东西去。", judge:false, lines:[
      {pre:"方叔叔和白阿姨特别热情，每次我去他们家做客，都要从冰箱里拿出很多吃的、喝的来。", blank:"吃完饭还让我把饮料、水果带回家", post:"。",
       py:"Fāng shūshu hé Bái āyí tèbié rèqíng, měi cì wǒ qù tāmen jiā zuòkè, dōu yào cóng bīngxiāng li ná chū hěn duō chī de, hē de lái. Chīwán fàn hái ràng wǒ bǎ yǐnliào, shuǐguǒ dài huí jiā.",
       vn:"Chú Phương và cô Bạch rất nhiệt tình, mỗi lần tôi đến nhà họ chơi, đều lấy ra rất nhiều đồ ăn đồ uống từ tủ lạnh. Ăn xong còn bảo tôi mang nước uống, trái cây về nhà."}]}
  ],
  mc: [
    {num:11, options:["不新鲜","太贵了","很新鲜"], ans:0, q:"女的觉得香蕉怎么样？",
     lines:[
      {speaker:"男", pre:"我们买点儿香蕉吧，", blank:"家里没有水果了", post:"。",
       py:"Wǒmen mǎi diǎnr xiāngjiāo ba, jiā li méiyǒu shuǐguǒ le.",
       vn:"Chúng ta mua ít chuối đi, nhà không còn trái cây nữa."},
      {speaker:"女", pre:"买西瓜吧，", blank:"这些香蕉像是放了很久了", post:"。",
       py:"Mǎi xīguā ba, zhèxiē xiāngjiāo xiàng shì fàngle hěn jiǔ le.",
       vn:"Mua dưa hấu đi, mấy quả chuối này có vẻ để lâu rồi."}
     ],
     explain:"男：我们买点儿香蕉吧，家里没有水果了。女：买西瓜吧，这些香蕉像是放了很久了。问：女的觉得香蕉怎么样？ → 不新鲜。"},
    {num:12, options:["画了很长时间","画得很像","画得不好看"], ans:1, q:"女的画熊猫画得怎么样？",
     lines:[
      {speaker:"男", pre:"你的熊猫画得真好，", blank:"像真的一样。我要多久才可以像你一样", post:"？",
       py:"Nǐ de xióngmāo huà de zhēn hǎo, xiàng zhēn de yíyàng. Wǒ yào duōjiǔ cái kěyǐ xiàng nǐ yíyàng?",
       vn:"Bạn vẽ con gấu trúc đẹp thật, giống như thật vậy. Tôi phải mất bao lâu mới được như bạn?"},
      {speaker:"女", pre:"这不是时间的问题，", blank:"主要是要有兴趣", post:"。",
       py:"Zhè bú shì shíjiān de wèntí, zhǔyào shì yào yǒu xìngqù.",
       vn:"Đây không phải vấn đề thời gian, chủ yếu là phải có hứng thú."}
     ],
     explain:"男：你的熊猫画得真好，像真的一样。我要多久才可以像你一样？女：这不是时间的问题，主要是要有兴趣。问：女的画熊猫画得怎么样？ → 画得很像。"},
    {num:13, options:["以前像妈妈","以前像爸爸","现在像妈妈"], ans:0, q:"关于女儿，可以知道什么？",
     lines:[
      {speaker:"男", pre:"你女儿像谁？", blank:"你还是她爸爸", post:"？",
       py:"Nǐ nǚ'ér xiàng shéi? Nǐ háishi tā bàba?",
       vn:"Con gái bạn giống ai? Bạn hay bố nó?"},
      {speaker:"女", pre:"小时候像我，", blank:"现在越来越像她爸爸了", post:"。",
       py:"Xiǎoshíhou xiàng wǒ, xiànzài yuè lái yuè xiàng tā bàba le.",
       vn:"Lúc nhỏ giống tôi, giờ ngày càng giống bố nó rồi."}
     ],
     explain:"男：你女儿像谁？你还是她爸爸？女：小时候像我，现在越来越像她爸爸了。问：关于女儿，可以知道什么？ → 以前像妈妈。"},
    {num:14, options:["词典在哪儿","这个字怎么写","这个字怎么读"], ans:2, q:"他们想知道什么？",
     lines:[
      {speaker:"男", pre:"这个字有几个读音？", blank:"我记得只有一个", post:"。",
       py:"Zhège zì yǒu jǐ ge dúyīn? Wǒ jìde zhǐyǒu yí ge.",
       vn:"Chữ này có mấy âm đọc? Tôi nhớ chỉ có một thôi."},
      {speaker:"女", pre:"我记得有两个。你帮我把词典拿过来，", blank:"我们一起看看", post:"。",
       py:"Wǒ jìde yǒu liǎng ge. Nǐ bāng wǒ bǎ cídiǎn ná guolai, wǒmen yìqǐ kànkan.",
       vn:"Tôi nhớ có hai. Bạn giúp tôi lấy từ điển đến, chúng ta cùng xem."}
     ],
     explain:"男：这个字有几个读音？我记得只有一个。女：我记得有两个。你帮我把词典拿过来，我们一起看看。问：他们想知道什么？ → 这个字怎么读。"},
    {num:15, options:["洗盘子","看节目","把声音开大"], ans:2, q:"女的想让男的做什么？",
     lines:[
      {speaker:"男", pre:"快来看啊，", blank:"这个节目太有意思了", post:"。",
       py:"Kuài lái kàn a, zhège jiémù tài yǒuyìsi le.",
       vn:"Mau lại xem đi, chương trình này thú vị lắm."},
      {speaker:"女", pre:"我在洗盘子呢，", blank:"你把电视声音开大一点儿", post:"。",
       py:"Wǒ zài xǐ pánzi ne, nǐ bǎ diànshì shēngyīn kāi dà yìdiǎnr.",
       vn:"Tôi đang rửa đĩa đây, bạn vặn to tiếng tivi lên một chút."}
     ],
     explain:"男：快来看啊，这个节目太有意思了。女：我在洗盘子呢，你把电视声音开大一点儿。问：女的想让男的做什么？ → 把声音开大。"},
    {num:16, options:["洗盘子","买水果","下楼"], ans:2, q:"他们现在要做什么？",
     lines:[
      {speaker:"男", pre:"叔叔和阿姨第一次来我们家，是不是走错路了？", blank:"已经三点零五了", post:"。",
       py:"Shūshu hé āyí dì-yī cì lái wǒmen jiā, shì bu shì zǒu cuò lù le? Yǐjīng sān diǎn líng wǔ le.",
       vn:"Chú và cô lần đầu đến nhà chúng ta, có phải đi lạc đường không? Đã 3 giờ 5 phút rồi."},
      {speaker:"女", pre:"你先把盘子洗一下，再从冰箱里把香蕉、苹果、饮料拿出来放好，", blank:"然后我们下楼去等他们", post:"。",
       py:"Nǐ xiān bǎ pánzi xǐ yíxià, zài cóng bīngxiāng li bǎ xiāngjiāo, píngguǒ, yǐnliào ná chulai fànghǎo, ránhòu wǒmen xiàlóu qù děng tāmen.",
       vn:"Anh rửa đĩa trước đã, rồi lấy chuối, táo, nước uống từ tủ lạnh ra xếp gọn, sau đó chúng ta xuống lầu đợi họ."},
      {speaker:"男", pre:"这些我早就准备好了。", blank:"这些水果少不少？要不要再买点儿", post:"？",
       py:"Zhèxiē wǒ zǎo jiù zhǔnbèi hǎo le. Zhèxiē shuǐguǒ shǎo bu shǎo? Yào bu yào zài mǎi diǎnr?",
       vn:"Mấy thứ này anh chuẩn bị xong lâu rồi. Trái cây thế này có ít không? Có cần mua thêm không?"},
      {speaker:"女", pre:"不少。快把衣服穿好，", blank:"我们下去吧", post:"。",
       py:"Bù shǎo. Kuài bǎ yīfu chuānhǎo, wǒmen xiàqu ba.",
       vn:"Không ít đâu. Mau mặc đồ xong đi, chúng ta xuống thôi."}
     ],
     explain:"男：叔叔和阿姨第一次来我们家，是不是走错路了？已经三点零五了。女：你先把盘子洗一下，再从冰箱里把香蕉、苹果、饮料拿出来放好，然后我们下楼去等他们。男：这些我早就准备好了。这些水果少不少？要不要再买点儿？女：不少。快把衣服穿好，我们下去吧。问：他们现在要做什么？ → 下楼。"},
    {num:17, options:["开车","买伞","跑步"], ans:0, q:"男的现在要做什么？",
     lines:[
      {speaker:"女", pre:"雨下得真大。你的车放哪儿了？", blank:"我们快点儿跑过去", post:"。",
       py:"Yǔ xià de zhēn dà. Nǐ de chē fàng nǎr le? Wǒmen kuài diǎnr pǎo guoqu.",
       vn:"Mưa to thật. Xe bạn để đâu vậy? Chúng ta chạy nhanh qua đó đi."},
      {speaker:"男", pre:"你就在这儿等，我先过去把车开过来，", blank:"然后你再上车", post:"。",
       py:"Nǐ jiù zài zhèr děng, wǒ xiān guòqu bǎ chē kāi guolai, ránhòu nǐ zài shàng chē.",
       vn:"Bạn cứ đợi ở đây, tôi qua đó lái xe đến trước, sau đó bạn lên xe."},
      {speaker:"女", pre:"那我把伞给你，", blank:"你拿着伞走过去", post:"。",
       py:"Nà wǒ bǎ sǎn gěi nǐ, nǐ názhe sǎn zǒu guoqu.",
       vn:"Vậy tôi đưa ô cho bạn, bạn cầm ô đi qua đó."},
      {speaker:"男", pre:"刮这么大的风，", blank:"伞没有用", post:"。",
       py:"Guā zhème dà de fēng, sǎn méiyǒu yòng.",
       vn:"Gió to thế này, ô cũng vô dụng thôi."}
     ],
     explain:"女：雨下得真大。你的车放哪儿了？我们快点儿跑过去。男：你就在这儿等，我先过去把车开过来，然后你再上车。女：那我把伞给你，你拿着伞走过去。男：刮这么大的风，伞没有用。问：男的现在要做什么？ → 开车。"},
    {num:18, options:["把电视声音关小","把房间打扫干净","过来看电视节目"], ans:2, q:"男的现在要让女的做什么？",
     lines:[
      {speaker:"女", pre:"", blank:"你在看什么呢？一直笑", post:"。",
       py:"Nǐ zài kàn shénme ne? Yìzhí xiào.",
       vn:"Bạn đang xem gì thế? Cứ cười mãi."},
      {speaker:"男", pre:"这个节目里的小猫小狗特别有意思，你先过来看，", blank:"一会儿再打扫房间", post:"。",
       py:"Zhège jiémù li de xiǎomāo xiǎogǒu tèbié yǒuyìsi, nǐ xiān guòlai kàn, yíhuìr zài dǎsǎo fángjiān.",
       vn:"Mèo con chó con trong chương trình này thú vị lắm, bạn lại đây xem trước đã, lát nữa dọn phòng cũng được."},
      {speaker:"女", pre:"把电视声音关小点儿，儿子明天考试，正复习呢，", blank:"别影响他", post:"。",
       py:"Bǎ diànshì shēngyīn guān xiǎo diǎnr, érzi míngtiān kǎoshì, zhèng fùxí ne, bié yǐngxiǎng tā.",
       vn:"Vặn nhỏ tiếng tivi lại, con trai mai thi, đang ôn bài đấy, đừng làm ảnh hưởng nó."},
      {speaker:"男", pre:"好，", blank:"你快过来吧", post:"。",
       py:"Hǎo, nǐ kuài guòlai ba.",
       vn:"Được, bạn mau lại đây đi."}
     ],
     explain:"女：你在看什么呢？一直笑。男：这个节目里的小猫小狗特别有意思，你先过来看，一会儿再打扫房间。女：把电视声音关小点儿，儿子明天考试，正复习呢，别影响他。男：好，你快过来吧。问：男的现在要让女的做什么？ → 过来看电视节目。"},
    {num:19, options:["看房子","买桌椅","找饭馆"], ans:1, q:"他们在做什么？",
     lines:[
      {speaker:"女", pre:"这椅子有点儿矮，", blank:"坐着不舒服", post:"。",
       py:"Zhè yǐzi yǒudiǎnr ǎi, zuòzhe bù shūfu.",
       vn:"Cái ghế này hơi thấp, ngồi không thoải mái."},
      {speaker:"男", pre:"没关系，我们去那边看看，", blank:"那儿也有", post:"。",
       py:"Méi guānxi, wǒmen qù nàbian kànkan, nàr yě yǒu.",
       vn:"Không sao, chúng ta qua bên kia xem thử, chỗ đó cũng có."},
      {speaker:"女", pre:"这层有桌子吗？今天把桌子、", blank:"椅子都一起换了吧", post:"。",
       py:"Zhè céng yǒu zhuōzi ma? Jīntiān bǎ zhuōzi, yǐzi dōu yìqǐ huàn le ba.",
       vn:"Tầng này có bàn không? Hôm nay đổi luôn cả bàn lẫn ghế đi."},
      {speaker:"男", pre:"好，我们先看椅子，再看桌子，", blank:"然后去吃饭", post:"。",
       py:"Hǎo, wǒmen xiān kàn yǐzi, zài kàn zhuōzi, ránhòu qù chī fàn.",
       vn:"Được, chúng ta xem ghế trước, rồi xem bàn, sau đó đi ăn cơm."}
     ],
     explain:"女：这椅子有点儿矮，坐着不舒服。男：没关系，我们去那边看看，那儿也有。女：这层有桌子吗？今天把桌子、椅子都一起换了吧。男：好，我们先看椅子，再看桌子，然后去吃饭。问：他们在做什么？ → 买桌椅。"},
    {num:20, options:["爸爸回来了","她要唱歌","她想安静一会儿"], ans:2, q:"女的为什么让男的把声音关小？",
     lines:[
      {speaker:"男", pre:"姐，你听，外边是谁的声音？", blank:"是不是爸爸回来了", post:"？",
       py:"Jiě, nǐ tīng, wàibian shì shéi de shēngyīn? Shì bu shì bàba huílai le?",
       vn:"Chị ơi, chị nghe xem, tiếng ai ở ngoài thế? Có phải bố về không?"},
      {speaker:"女", pre:"我听不见啊，", blank:"你把音乐声音关小些", post:"。",
       py:"Wǒ tīng bu jiàn a, nǐ bǎ yīnyuè shēngyīn guān xiǎo xiē.",
       vn:"Chị không nghe thấy đâu, em vặn nhỏ tiếng nhạc lại đi."},
      {speaker:"男", pre:"不是爸爸，", blank:"是楼上的周叔叔在说话。那我听歌了啊", post:"。",
       py:"Bú shì bàba, shì lóushàng de Zhōu shūshu zài shuōhuà. Nà wǒ tīng gē le a.",
       vn:"Không phải bố, là chú Chu trên lầu đang nói chuyện. Vậy em nghe nhạc tiếp nhé."},
      {speaker:"女", pre:"你别把声音开那么大，", blank:"我想安静一会儿", post:"。",
       py:"Nǐ bié bǎ shēngyīn kāi nàme dà, wǒ xiǎng ānjìng yíhuìr.",
       vn:"Em đừng mở nhạc to thế, chị muốn yên tĩnh một lát."}
     ],
     explain:"男：姐，你听，外边是谁的声音？是不是爸爸回来了？女：我听不见啊，你把音乐声音关小些。男：不是爸爸，是楼上的周叔叔在说话。那我听歌了啊。女：你别把声音开那么大，我想安静一会儿。问：女的为什么让男的把声音关小？ → 她想安静一会儿。"}
  ]
};
