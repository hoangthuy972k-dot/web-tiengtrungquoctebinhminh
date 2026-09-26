// HSK 2 (3.0 Mới) · Bài 2 · 还是打车去北大吧
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 2, trang 010-018.

var vocabData = [
  {
    "n": 1,
    "zh": "公交车",
    "py": "gōngjiāochē",
    "pos": "Danh từ",
    "vn": "xe buýt",
    "hv": "công giao xa",
    "em": "🚌",
    "img": "/images/hsk2v3-bai-2/gongjiaoche.jpg",
    "lesson": 1,
    "ex_zh": "这儿有到北京大学的公交车吗？",
    "ex_py": "Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
    "ex_vn": "Ở đây có xe buýt đi đến Đại học Bắc Kinh không?",
    "exList": [
      {
        "zh": "这儿有到北京大学的公交车吗？",
        "py": "Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
        "vn": "Ở đây có xe buýt đi đến Đại học Bắc Kinh không?"
      },
      {
        "zh": "我每天坐公交车上班。",
        "py": "Wǒ měitiān zuò gōngjiāochē shàngbān.",
        "vn": "Ngày nào tôi cũng đi làm bằng xe buýt."
      }
    ],
    "hanzi": [
      {
        "c": "交",
        "p": "jiāo",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "亠 → 父 phần dưới",
        "rad": "亠 (đầu)",
        "mean": "giao, qua lại",
        "tip": "公交车 = 公共交通车 (xe giao thông công cộng) nói tắt.",
        "cf": "",
        "w": "公交车 / 交通"
      }
    ],
    "colloFull": [
      {
        "zh": "坐公交车",
        "py": "zuò gōngjiāochē",
        "vn": "đi xe buýt"
      },
      {
        "zh": "公交车站",
        "py": "gōngjiāochē zhàn",
        "vn": "bến xe buýt"
      },
      {
        "zh": "公交车上",
        "py": "gōngjiāochē shàng",
        "vn": "trên xe buýt"
      },
      {
        "zh": "等公交车",
        "py": "děng gōngjiāochē",
        "vn": "đợi xe buýt"
      }
    ],
    "patterns": [
      {
        "s": "坐 + 公交车",
        "m": "Đi xe buýt — dùng 坐"
      },
      {
        "s": "公交 + 车",
        "m": "Xe (车) công cộng (公交)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đi xe buýt đến trường.",
        "answer": "我坐公交车去学校。",
        "answerPy": "Wǒ zuò gōngjiāochē qù xuéxiào.",
        "note": "坐公交车 — đi xe buýt.",
        "pair": "坐 + phương tiện"
      },
      {
        "promptLang": "vi",
        "prompt": "Trên xe buýt có rất nhiều người.",
        "answer": "公交车上有很多人。",
        "answerPy": "Gōngjiāochē shang yǒu hěn duō rén.",
        "note": "公交车上 — trên xe buýt.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 2,
    "zh": "但",
    "py": "dàn",
    "pos": "Liên từ",
    "vn": "nhưng, nhưng mà",
    "hv": "đãn",
    "em": "↔️",
    "lesson": 1,
    "ex_zh": "有，但车站有点儿远。",
    "ex_py": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
    "ex_vn": "Có đấy, nhưng bến xe buýt hơi xa.",
    "exList": [
      {
        "zh": "有，但车站有点儿远。",
        "py": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
        "vn": "Có đấy, nhưng bến xe buýt hơi xa."
      },
      {
        "zh": "李文让我去接他的朋友，但我太忙了。",
        "py": "Lǐ Wén ràng wǒ qù jiē tā de péngyou, dàn wǒ tài máng le.",
        "vn": "Lý Văn nhờ tôi đi đón bạn của cậu ấy, nhưng tôi bận quá."
      }
    ],
    "hanzi": [
      {
        "c": "但",
        "p": "dàn",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "亻 → 日 → 一",
        "rad": "亻 (nhân đứng)",
        "mean": "nhưng, chỉ",
        "tip": "但 = 但是 dạng ngắn, hay dùng trong văn viết và khẩu ngữ nhanh.",
        "cf": "",
        "w": "但 / 但是"
      }
    ],
    "colloFull": [
      {
        "zh": "但是",
        "py": "dànshì",
        "vn": "nhưng mà"
      },
      {
        "zh": "远但方便",
        "py": "yuǎn dàn fāngbiàn",
        "vn": "xa nhưng tiện"
      },
      {
        "zh": "但不贵",
        "py": "dàn bú guì",
        "vn": "nhưng không đắt"
      },
      {
        "zh": "但我不去",
        "py": "dàn wǒ bú qù",
        "vn": "nhưng tôi không đi"
      }
    ],
    "patterns": [
      {
        "s": "câu 1，但 + câu 2",
        "m": "Nhưng — nối hai vế trái ngược nhau"
      },
      {
        "s": "但 = 但是 — 但 ngắn gọn hơn, hay dùng khi nói"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỗ đó rất xa, nhưng đi xe buýt rất tiện.",
        "answer": "那里很远，但坐公交车很方便。",
        "answerPy": "Nàli hěn yuǎn, dàn zuò gōngjiāochē hěn fāngbiàn.",
        "note": "但 nối hai vế trái ngược nhau.",
        "pair": "……但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ quần áo này đẹp, nhưng không đắt.",
        "answer": "这件衣服很漂亮，但不贵。",
        "answerPy": "Zhè jiàn yīfu hěn piàoliang, dàn bú guì.",
        "note": "但 = 但是, 但 ngắn gọn hơn.",
        "pair": "……但……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "车站",
    "py": "chēzhàn",
    "pos": "Danh từ",
    "vn": "bến xe, trạm xe",
    "hv": "xa trạm",
    "em": "🚏",
    "img": "/images/hsk2v3-bai-2/chezhan.jpg",
    "lesson": 1,
    "ex_zh": "去北京大学的车站在哪儿？",
    "ex_py": "Qù Běijīng Dàxué de chēzhàn zài nǎr?",
    "ex_vn": "Bến xe đi Đại học Bắc Kinh ở đâu?",
    "exList": [
      {
        "zh": "去北京大学的车站在哪儿？",
        "py": "Qù Běijīng Dàxué de chēzhàn zài nǎr?",
        "vn": "Bến xe đi Đại học Bắc Kinh ở đâu?"
      },
      {
        "zh": "车站有点儿远。",
        "py": "Chēzhàn yǒudiǎnr yuǎn.",
        "vn": "Bến xe hơi xa."
      }
    ],
    "hanzi": [
      {
        "c": "站",
        "p": "zhàn",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "立 → 占",
        "rad": "立 (lập – đứng)",
        "mean": "đứng; ga, bến",
        "tip": "Bộ 立 (đứng) — chỗ xe dừng cho người đứng đợi.",
        "cf": "",
        "w": "车站 / 站起来"
      }
    ],
    "colloFull": [
      {
        "zh": "公交车站",
        "py": "gōngjiāochē zhàn",
        "vn": "bến xe buýt"
      },
      {
        "zh": "在车站等",
        "py": "zài chēzhàn děng",
        "vn": "đợi ở bến xe"
      },
      {
        "zh": "去车站",
        "py": "qù chēzhàn",
        "vn": "ra bến xe"
      },
      {
        "zh": "车站前面",
        "py": "chēzhàn qiánmiàn",
        "vn": "trước bến xe"
      }
    ],
    "patterns": [
      {
        "s": "在 / 去 + 车站",
        "m": "Ở bến xe, ra bến xe"
      },
      {
        "s": "车 + 站",
        "m": "Chỗ dừng (站) của xe (车)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin hỏi, bến xe buýt ở đâu ạ?",
        "answer": "请问，公交车站在哪里？",
        "answerPy": "Qǐngwèn, gōngjiāo chēzhàn zài nǎli?",
        "note": "请问 đặt đầu câu cho lễ phép.",
        "pair": "在哪里？"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đợi bạn ở bến xe nhé.",
        "answer": "我在车站等你吧。",
        "answerPy": "Wǒ zài chēzhàn děng nǐ ba.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……等"
      }
    ]
  },
  {
    "n": 4,
    "zh": "远",
    "py": "yuǎn",
    "pos": "Tính từ",
    "vn": "xa",
    "hv": "viễn",
    "em": "📏",
    "img": "/images/hsk2v3-bai-2/yuan.jpg",
    "lesson": 1,
    "ex_zh": "你家太远了。",
    "ex_py": "Nǐ jiā tài yuǎn le.",
    "ex_vn": "Nhà bạn xa quá.",
    "exList": [
      {
        "zh": "你家太远了。",
        "py": "Nǐ jiā tài yuǎn le.",
        "vn": "Nhà bạn xa quá."
      },
      {
        "zh": "就在前边，不远。",
        "py": "Jiù zài qiánbian, bù yuǎn.",
        "vn": "Ngay phía trước thôi, không xa."
      }
    ],
    "hanzi": [
      {
        "c": "远",
        "p": "yuǎn",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "元 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "xa",
        "tip": "Bộ 辶 (bước đi) — phải đi lâu tức là xa. Trái nghĩa: 近 (gần).",
        "cf": "近 (jìn – gần)",
        "w": "远 / 不远 / 远方"
      }
    ],
    "colloFull": [
      {
        "zh": "很远",
        "py": "hěn yuǎn",
        "vn": "rất xa"
      },
      {
        "zh": "不远",
        "py": "bù yuǎn",
        "vn": "không xa"
      },
      {
        "zh": "太远了",
        "py": "tài yuǎn le",
        "vn": "xa quá"
      },
      {
        "zh": "离这里很远",
        "py": "lí zhèlǐ hěn yuǎn",
        "vn": "cách đây rất xa"
      }
    ],
    "patterns": [
      {
        "s": "离 + nơi chốn + 很远",
        "m": "Cách nơi nào đó rất xa"
      },
      {
        "s": "远 ↔ 近",
        "m": "Xa ↔ gần"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sân bay cách đây rất xa.",
        "answer": "机场离这里很远。",
        "answerPy": "Jīchǎng lí zhèli hěn yuǎn.",
        "note": "离 + nơi chốn + 很远 — cách nơi nào rất xa.",
        "pair": "离……很远"
      },
      {
        "promptLang": "vi",
        "prompt": "Trường học không xa, đi bộ mười phút là đến.",
        "answer": "学校不远，走十分钟就到。",
        "answerPy": "Xuéxiào bù yuǎn, zǒu shí fēnzhōng jiù dào.",
        "note": "就 nhấn ý là đến ngay.",
        "pair": "就 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "打车",
    "py": "dǎchē",
    "pos": "Động từ (ly hợp)",
    "vn": "gọi taxi, bắt xe",
    "hv": "đả xa",
    "em": "🚕",
    "img": "/images/hsk2v3-bai-2/dache.jpg",
    "lesson": 1,
    "ex_zh": "我们还是打车去吧。",
    "ex_py": "Wǒmen háishi dǎchē qù ba.",
    "ex_vn": "Chúng ta vẫn nên gọi taxi đi thôi.",
    "exList": [
      {
        "zh": "我们还是打车去吧。",
        "py": "Wǒmen háishi dǎchē qù ba.",
        "vn": "Chúng ta vẫn nên gọi taxi đi thôi."
      },
      {
        "zh": "这儿好打车吗？",
        "py": "Zhèr hǎo dǎchē ma?",
        "vn": "Ở đây gọi taxi có dễ không?"
      }
    ],
    "hanzi": [
      {
        "c": "打",
        "p": "dǎ",
        "type": "形声字 · Chữ hình thanh",
        "st": 5,
        "ord": "扌 → 丁",
        "rad": "扌 (thủ – tay)",
        "mean": "đánh; làm (nhiều nghĩa)",
        "tip": "打 ghép rất nhiều từ: 打车, 打电话, 打球.",
        "cf": "",
        "w": "打车 / 打电话 / 打篮球"
      }
    ],
    "colloFull": [
      {
        "zh": "打车去",
        "py": "dǎchē qù",
        "vn": "bắt taxi đi"
      },
      {
        "zh": "打车来",
        "py": "dǎchē lái",
        "vn": "bắt taxi đến"
      },
      {
        "zh": "想打车",
        "py": "xiǎng dǎchē",
        "vn": "muốn bắt taxi"
      },
      {
        "zh": "打车很快",
        "py": "dǎchē hěn kuài",
        "vn": "bắt taxi rất nhanh"
      }
    ],
    "patterns": [
      {
        "s": "打车 + 去 / 来 + nơi chốn",
        "m": "Bắt taxi đi đâu"
      },
      {
        "s": "打车 = 坐出租车 — 打车 là cách nói khẩu ngữ, ngắn hơn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Muộn rồi, chúng ta bắt taxi đi thôi.",
        "answer": "已经很晚了，我们打车去吧。",
        "answerPy": "Yǐjīng hěn wǎn le, wǒmen dǎchē qù ba.",
        "note": "打车 = 坐出租车, cách nói khẩu ngữ.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi không muốn bắt taxi, tôi muốn đi xe buýt.",
        "answer": "我不想打车，我想坐公交车。",
        "answerPy": "Wǒ bù xiǎng dǎchē, wǒ xiǎng zuò gōngjiāochē.",
        "note": "Phủ định đặt trước 想.",
        "pair": "不想 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "还是",
    "py": "háishi",
    "pos": "Phó từ",
    "vn": "vẫn, tốt hơn là…",
    "hv": "hoàn thị",
    "em": "👍",
    "lesson": 1,
    "ex_zh": "还是别看电影了。",
    "ex_py": "Háishi bié kàn diànyǐng le.",
    "ex_vn": "Thôi đừng xem phim nữa.",
    "exList": [
      {
        "zh": "还是别看电影了。",
        "py": "Háishi bié kàn diànyǐng le.",
        "vn": "Thôi đừng xem phim nữa."
      },
      {
        "zh": "明天有雨，我们还是今天去吧。",
        "py": "Míngtiān yǒu yǔ, wǒmen háishi jīntiān qù ba.",
        "vn": "Mai có mưa, chúng ta vẫn nên đi hôm nay thì hơn."
      }
    ],
    "hanzi": [
      {
        "c": "还",
        "p": "hái",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "不 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "còn, vẫn",
        "tip": "Đọc hái nghĩa \"còn, vẫn\"; đọc huán nghĩa \"trả lại\".",
        "cf": "",
        "w": "还是 / 还有 / 还书 (huán)"
      }
    ],
    "colloFull": [
      {
        "zh": "坐公交车还是打车",
        "py": "zuò gōngjiāochē háishi dǎchē",
        "vn": "đi buýt hay bắt taxi"
      },
      {
        "zh": "你还是我",
        "py": "nǐ háishi wǒ",
        "vn": "bạn hay tôi"
      },
      {
        "zh": "今天还是明天",
        "py": "jīntiān háishi míngtiān",
        "vn": "hôm nay hay ngày mai"
      },
      {
        "zh": "还是这个好",
        "py": "háishi zhège hǎo",
        "vn": "vẫn là cái này tốt hơn"
      }
    ],
    "patterns": [
      {
        "s": "A 还是 B？",
        "m": "Câu hỏi lựa chọn: 你坐公交车还是打车？"
      },
      {
        "s": "Câu đã có 还是 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đi xe buýt hay bắt taxi?",
        "answer": "你坐公交车还是打车？",
        "answerPy": "Nǐ zuò gōngjiāochē háishi dǎchē?",
        "note": "Câu đã có 还是 thì không thêm 吗.",
        "pair": "A 还是 B？"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta đi hôm nay hay ngày mai?",
        "answer": "我们今天去还是明天去？",
        "answerPy": "Wǒmen jīntiān qù háishi míngtiān qù?",
        "note": "Câu hỏi lựa chọn hai khả năng.",
        "pair": "A 还是 B？"
      }
    ]
  },
  {
    "n": 7,
    "zh": "啊",
    "py": "a",
    "pos": "Trợ từ",
    "vn": "à, nhỉ, thế (trợ từ ngữ khí)",
    "hv": "a",
    "em": "❗",
    "lesson": 2,
    "ex_zh": "学校里人真多啊！",
    "ex_py": "Xuéxiào li rén zhēn duō a!",
    "ex_vn": "Trường đông người quá!",
    "exList": [
      {
        "zh": "学校里人真多啊！",
        "py": "Xuéxiào li rén zhēn duō a!",
        "vn": "Trường đông người quá!"
      },
      {
        "zh": "天啊！有的还不到二十块钱。",
        "py": "Tiān a! Yǒude hái bú dào èrshí kuài qián.",
        "vn": "Trời ơi! Có vé còn chưa tới 20 tệ."
      }
    ],
    "hanzi": [
      {
        "c": "啊",
        "p": "a",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "口 → 阝 → 可",
        "rad": "口 (khẩu – miệng)",
        "mean": "trợ từ cảm thán",
        "tip": "Bộ 口 cho biết đây là tiếng thốt ra, dùng cuối câu cảm thán.",
        "cf": "",
        "w": "真多啊 / 天啊"
      }
    ],
    "colloFull": [
      {
        "zh": "好啊",
        "py": "hǎo a",
        "vn": "được đấy"
      },
      {
        "zh": "是啊",
        "py": "shì a",
        "vn": "đúng vậy"
      },
      {
        "zh": "太远了啊",
        "py": "tài yuǎn le a",
        "vn": "xa quá đi"
      },
      {
        "zh": "你来了啊",
        "py": "nǐ lái le a",
        "vn": "bạn đến rồi à"
      }
    ],
    "patterns": [
      {
        "s": "câu + 啊",
        "m": "Trợ từ cuối câu, nghe thân mật hơn"
      },
      {
        "s": "好啊 · 是啊 — hai câu đáp đồng tình rất hay dùng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Được đấy! Vậy thì chiều nay chúng ta đi nhé.",
        "answer": "好啊！那今天下午我们去吧。",
        "answerPy": "Hǎo a! Nà jīntiān xiàwǔ wǒmen qù ba.",
        "note": "好啊 là câu đáp đồng tình.",
        "pair": "好啊！"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn đến rồi à! Mời ngồi.",
        "answer": "你来了啊！请坐。",
        "answerPy": "Nǐ lái le a! Qǐng zuò.",
        "note": "啊 cuối câu nghe thân mật hơn.",
        "pair": "……啊"
      }
    ]
  },
  {
    "n": 8,
    "zh": "万",
    "py": "wàn",
    "pos": "Số từ",
    "vn": "vạn (mười nghìn)",
    "hv": "vạn",
    "em": "🔟",
    "lesson": 2,
    "ex_zh": "北京大学有四万多名学生。",
    "ex_py": "Běijīng Dàxué yǒu sìwàn duō míng xuésheng.",
    "ex_vn": "Đại học Bắc Kinh có hơn bốn vạn sinh viên.",
    "exList": [
      {
        "zh": "北京大学有四万多名学生。",
        "py": "Běijīng Dàxué yǒu sìwàn duō míng xuésheng.",
        "vn": "Đại học Bắc Kinh có hơn bốn vạn sinh viên."
      },
      {
        "zh": "这个体育馆能坐两万人。",
        "py": "Zhège tǐyùguǎn néng zuò liǎngwàn rén.",
        "vn": "Nhà thi đấu này chứa được hai vạn người."
      }
    ],
    "hanzi": [
      {
        "c": "万",
        "p": "wàn",
        "type": "象形字 · Chữ tượng hình",
        "st": 3,
        "ord": "一 → 𠃌 → 丿",
        "rad": "一 (nhất)",
        "mean": "vạn, mười nghìn",
        "tip": "一万 = 10 000; 四万多 = hơn bốn vạn (hơn 40 000).",
        "cf": "方 (fāng)",
        "w": "一万 / 四万多 / 千万"
      }
    ],
    "colloFull": [
      {
        "zh": "一万",
        "py": "yíwàn",
        "vn": "một vạn"
      },
      {
        "zh": "两万",
        "py": "liǎngwàn",
        "vn": "hai vạn"
      },
      {
        "zh": "一万块钱",
        "py": "yíwàn kuài qián",
        "vn": "một vạn tệ"
      },
      {
        "zh": "三万名学生",
        "py": "sānwàn míng xuésheng",
        "vn": "ba vạn học sinh"
      }
    ],
    "patterns": [
      {
        "s": "số + 万",
        "m": "Bao nhiêu vạn: 一万 = 10.000"
      },
      {
        "s": "百 → 千 → 万",
        "m": "Tiếng Trung đếm theo vạn, không theo \"chục nghìn\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái máy tính này một vạn tệ.",
        "answer": "这个电脑一万块钱。",
        "answerPy": "Zhège diànnǎo yí wàn kuài qián.",
        "note": "一万 = 10.000.",
        "pair": "……块钱"
      },
      {
        "promptLang": "vi",
        "prompt": "Đại học Bắc Kinh có ba vạn sinh viên.",
        "answer": "北京大学有三万名学生。",
        "answerPy": "Běijīng Dàxué yǒu sān wàn míng xuésheng.",
        "note": "Người Trung Quốc đếm theo vạn.",
        "pair": "……有……"
      }
    ]
  },
  {
    "n": 9,
    "zh": "名",
    "py": "míng",
    "pos": "Lượng từ / Danh từ",
    "vn": "(lượng từ chỉ người); tên, thứ hạng",
    "hv": "danh",
    "em": "🧑‍🎓",
    "img": "/images/hsk2v3-bai-2/ming.jpg",
    "lesson": 2,
    "ex_zh": "北京大学有三千多名外国学生。",
    "ex_py": "Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
    "ex_vn": "Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài.",
    "exList": [
      {
        "zh": "北京大学有三千多名外国学生。",
        "py": "Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
        "vn": "Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài."
      },
      {
        "zh": "他考试得了第一名。",
        "py": "Tā kǎoshì déle dì-yī míng.",
        "vn": "Cậu ấy thi được hạng nhất."
      }
    ],
    "hanzi": [
      {
        "c": "名",
        "p": "míng",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "夕 → 口",
        "rad": "口 (khẩu – miệng)",
        "mean": "tên; lượng từ chỉ người",
        "tip": "夕 (tối) + 口 (miệng): trời tối phải xưng tên để nhận ra nhau.",
        "cf": "",
        "w": "一名学生 / 名字 / 第一名"
      }
    ],
    "colloFull": [
      {
        "zh": "一名学生",
        "py": "yì míng xuésheng",
        "vn": "một học sinh"
      },
      {
        "zh": "三万名学生",
        "py": "sānwàn míng xuésheng",
        "vn": "ba vạn học sinh"
      },
      {
        "zh": "几名老师",
        "py": "jǐ míng lǎoshī",
        "vn": "mấy giáo viên"
      },
      {
        "zh": "一名医生",
        "py": "yì míng yīshēng",
        "vn": "một bác sĩ"
      }
    ],
    "patterns": [
      {
        "s": "số + 名 + người",
        "m": "Lượng từ 名 dùng cho người, trang trọng hơn 个"
      },
      {
        "s": "名 (lượng từ) và 名字 (tên) — cùng chữ 名"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lớp chúng tôi có hai mươi học sinh.",
        "answer": "我们班有二十名学生。",
        "answerPy": "Wǒmen bān yǒu èrshí míng xuésheng.",
        "note": "名 trang trọng hơn 个 khi đếm người.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chị tôi là một bác sĩ.",
        "answer": "我姐姐是一名医生。",
        "answerPy": "Wǒ jiějie shì yì míng yīshēng.",
        "note": "名 (lượng từ) và 名字 (tên) — cùng chữ 名.",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 10,
    "zh": "网上",
    "py": "wǎngshang",
    "pos": "Danh từ",
    "vn": "trên mạng",
    "hv": "võng thượng",
    "em": "🌐",
    "img": "/images/hsk2v3-bai-2/wangshang.jpg",
    "lesson": 2,
    "ex_zh": "是网上说的。",
    "ex_py": "Shì wǎngshang shuō de.",
    "ex_vn": "Là thông tin trên mạng nói vậy.",
    "exList": [
      {
        "zh": "是网上说的。",
        "py": "Shì wǎngshang shuō de.",
        "vn": "Là thông tin trên mạng nói vậy."
      },
      {
        "zh": "我喜欢在网上买东西。",
        "py": "Wǒ xǐhuan zài wǎngshang mǎi dōngxi.",
        "vn": "Tôi thích mua đồ trên mạng."
      }
    ],
    "hanzi": [
      {
        "c": "网",
        "p": "wǎng",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "冂 → 㐅 → 㐅",
        "rad": "冂 (quynh)",
        "mean": "lưới, mạng",
        "tip": "Hình cái lưới đan — ngày nay chỉ mạng Internet.",
        "cf": "",
        "w": "网上 / 上网 / 网站"
      }
    ],
    "colloFull": [
      {
        "zh": "在网上",
        "py": "zài wǎngshang",
        "vn": "trên mạng"
      },
      {
        "zh": "网上买票",
        "py": "wǎngshang mǎi piào",
        "vn": "mua vé trên mạng"
      },
      {
        "zh": "网上的东西",
        "py": "wǎngshang de dōngxi",
        "vn": "đồ trên mạng"
      },
      {
        "zh": "网上看电影",
        "py": "wǎngshang kàn diànyǐng",
        "vn": "xem phim trên mạng"
      }
    ],
    "patterns": [
      {
        "s": "在 + 网上 + động từ",
        "m": "Làm gì trên mạng: 在网上买票"
      },
      {
        "s": "网 + 上",
        "m": "Trên (上) mạng (网) — 上 đứng sau như 桌子上"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi mua vé máy bay trên mạng.",
        "answer": "我在网上买飞机票。",
        "answerPy": "Wǒ zài wǎngshàng mǎi fēijī piào.",
        "note": "在网上 + động từ — làm gì trên mạng.",
        "pair": "在……买"
      },
      {
        "promptLang": "vi",
        "prompt": "Buổi tối tôi thích xem phim trên mạng.",
        "answer": "晚上我喜欢在网上看电影。",
        "answerPy": "Wǎnshang wǒ xǐhuan zài wǎngshàng kàn diànyǐng.",
        "note": "网 + 上 — 上 đứng sau như 桌子上.",
        "pair": "在……看"
      }
    ]
  },
  {
    "n": 11,
    "zh": "外国",
    "py": "wàiguó",
    "pos": "Danh từ",
    "vn": "nước ngoài",
    "hv": "ngoại quốc",
    "em": "🌍",
    "img": "/images/hsk2v3-bai-2/waiguo.jpg",
    "lesson": 2,
    "ex_zh": "北京大学有很多外国学生。",
    "ex_py": "Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.",
    "ex_vn": "Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài.",
    "exList": [
      {
        "zh": "北京大学有很多外国学生。",
        "py": "Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.",
        "vn": "Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài."
      },
      {
        "zh": "我有一个外国朋友。",
        "py": "Wǒ yǒu yí ge wàiguó péngyou.",
        "vn": "Tôi có một người bạn nước ngoài."
      }
    ],
    "hanzi": [
      {
        "c": "外",
        "p": "wài",
        "type": "会意字 · Chữ hội ý",
        "st": 5,
        "ord": "夕 → 卜",
        "rad": "夕 (tịch – chiều tối)",
        "mean": "ngoài",
        "tip": "Trái nghĩa với 里 (trong), 内 (nội).",
        "cf": "",
        "w": "外国 / 外边 / 外面"
      }
    ],
    "colloFull": [
      {
        "zh": "外国人",
        "py": "wàiguó rén",
        "vn": "người nước ngoài"
      },
      {
        "zh": "外国学生",
        "py": "wàiguó xuésheng",
        "vn": "học sinh nước ngoài"
      },
      {
        "zh": "去外国",
        "py": "qù wàiguó",
        "vn": "ra nước ngoài"
      },
      {
        "zh": "外国的东西",
        "py": "wàiguó de dōngxi",
        "vn": "đồ nước ngoài"
      }
    ],
    "patterns": [
      {
        "s": "外国 + 人 / 学生",
        "m": "Người, học sinh nước ngoài"
      },
      {
        "s": "外 + 国",
        "m": "Nước (国) bên ngoài (外)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lớp chúng tôi có mấy học sinh nước ngoài.",
        "answer": "我们班有几名外国学生。",
        "answerPy": "Wǒmen bān yǒu jǐ míng wàiguó xuésheng.",
        "note": "外国学生 — học sinh nước ngoài.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Sang năm tôi muốn ra nước ngoài du lịch.",
        "answer": "明年我想去外国旅游。",
        "answerPy": "Míngnián wǒ xiǎng qù wàiguó lǚyóu.",
        "note": "外 + 国 — nước bên ngoài.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "间",
    "py": "jiān",
    "pos": "Lượng từ",
    "vn": "gian, căn (phòng)",
    "hv": "gian",
    "em": "🚪",
    "lesson": 2,
    "ex_zh": "那边就有一间教室。",
    "ex_py": "Nàbiān jiù yǒu yì jiān jiàoshì.",
    "ex_vn": "Đằng kia có một phòng học.",
    "exList": [
      {
        "zh": "那边就有一间教室。",
        "py": "Nàbiān jiù yǒu yì jiān jiàoshì.",
        "vn": "Đằng kia có một phòng học."
      },
      {
        "zh": "那是一间大教室。",
        "py": "Nà shì yì jiān dà jiàoshì.",
        "vn": "Đó là một phòng học lớn."
      }
    ],
    "hanzi": [
      {
        "c": "间",
        "p": "jiān",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "门 → 日",
        "rad": "门 (môn – cửa)",
        "mean": "khoảng, gian phòng",
        "tip": "门 (cửa) + 日 (mặt trời): ánh nắng lọt qua khe cửa — nghĩa \"khoảng giữa\".",
        "cf": "",
        "w": "一间教室 / 房间 / 时间"
      }
    ],
    "colloFull": [
      {
        "zh": "一间教室",
        "py": "yì jiān jiàoshì",
        "vn": "một phòng học"
      },
      {
        "zh": "两间房间",
        "py": "liǎng jiān fángjiān",
        "vn": "hai căn phòng"
      },
      {
        "zh": "几间",
        "py": "jǐ jiān",
        "vn": "mấy gian"
      },
      {
        "zh": "这间教室",
        "py": "zhè jiān jiàoshì",
        "vn": "phòng học này"
      }
    ],
    "patterns": [
      {
        "s": "số + 间 + phòng",
        "m": "Lượng từ 间 dùng cho phòng ốc"
      },
      {
        "s": "✗ 一个教室 → ✓ 一间教室"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trường chúng tôi có ba mươi phòng học.",
        "answer": "我们学校有三十间教室。",
        "answerPy": "Wǒmen xuéxiào yǒu sānshí jiān jiàoshì.",
        "note": "✗ 一个教室 → ✓ 一间教室.",
        "pair": "……有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà tôi có ba căn phòng.",
        "answer": "我家有三间房间。",
        "answerPy": "Wǒ jiā yǒu sān jiān fángjiān.",
        "note": "间 dùng cho phòng ốc.",
        "pair": "……有……"
      }
    ]
  },
  {
    "n": 13,
    "zh": "教室",
    "py": "jiàoshì",
    "pos": "Danh từ",
    "vn": "phòng học, lớp học",
    "hv": "giáo thất",
    "em": "🏫",
    "img": "/images/hsk2v3-bai-2/jiaoshi.jpg",
    "lesson": 2,
    "ex_zh": "教室里有二十多个学生。",
    "ex_py": "Jiàoshì li yǒu èrshí duō ge xuésheng.",
    "ex_vn": "Trong phòng học có hơn hai mươi học sinh.",
    "exList": [
      {
        "zh": "教室里有二十多个学生。",
        "py": "Jiàoshì li yǒu èrshí duō ge xuésheng.",
        "vn": "Trong phòng học có hơn hai mươi học sinh."
      },
      {
        "zh": "我们明天要去那儿上课。",
        "py": "Wǒmen míngtiān yào qù nàr shàngkè.",
        "vn": "Ngày mai chúng tôi sẽ đến đó học."
      }
    ],
    "hanzi": [
      {
        "c": "室",
        "p": "shì",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "宀 → 至",
        "rad": "宀 (miên – mái nhà)",
        "mean": "phòng, buồng",
        "tip": "Bộ 宀 (mái nhà) cho biết chữ chỉ một căn phòng.",
        "cf": "",
        "w": "教室 / 办公室 / 洗手间"
      }
    ],
    "colloFull": [
      {
        "zh": "一间教室",
        "py": "yì jiān jiàoshì",
        "vn": "một phòng học"
      },
      {
        "zh": "在教室",
        "py": "zài jiàoshì",
        "vn": "ở phòng học"
      },
      {
        "zh": "教室里",
        "py": "jiàoshì li",
        "vn": "trong phòng học"
      },
      {
        "zh": "去教室",
        "py": "qù jiàoshì",
        "vn": "đến phòng học"
      }
    ],
    "patterns": [
      {
        "s": "在 + 教室 + 里",
        "m": "Ở trong phòng học"
      },
      {
        "s": "教 + 室",
        "m": "Phòng (室) dạy học (教)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thầy đang ở trong phòng học.",
        "answer": "老师正在教室里。",
        "answerPy": "Lǎoshī zhèngzài jiàoshì li.",
        "note": "教室里 — trong phòng học.",
        "pair": "在……里"
      },
      {
        "promptLang": "vi",
        "prompt": "Phòng học này rất lớn, có năm mươi cái ghế.",
        "answer": "这间教室很大，有五十个椅子。",
        "answerPy": "Zhè jiān jiàoshì hěn dà, yǒu wǔshí ge yǐzi.",
        "note": "这间教室 — phòng học này.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 14,
    "zh": "票",
    "py": "piào",
    "pos": "Danh từ",
    "vn": "vé",
    "hv": "phiếu",
    "em": "🎟️",
    "img": "/images/hsk2v3-bai-2/piao.jpg",
    "lesson": 3,
    "ex_zh": "他们卖的电影票也很便宜。",
    "ex_py": "Tāmen mài de diànyǐngpiào yě hěn piányi.",
    "ex_vn": "Vé xem phim họ bán cũng rất rẻ.",
    "exList": [
      {
        "zh": "他们卖的电影票也很便宜。",
        "py": "Tāmen mài de diànyǐngpiào yě hěn piányi.",
        "vn": "Vé xem phim họ bán cũng rất rẻ."
      },
      {
        "zh": "有的电影票还不到二十块钱。",
        "py": "Yǒude diànyǐngpiào hái bú dào èrshí kuài qián.",
        "vn": "Có vé xem phim còn chưa tới hai mươi tệ."
      }
    ],
    "hanzi": [
      {
        "c": "票",
        "p": "piào",
        "type": "会意字 · Chữ hội ý",
        "st": 11,
        "ord": "覀 → 示",
        "rad": "示 (kỳ)",
        "mean": "vé, phiếu",
        "tip": "Ghép với loại vé: 电影票, 车票, 机票.",
        "cf": "",
        "w": "电影票 / 车票 / 门票"
      }
    ],
    "colloFull": [
      {
        "zh": "买票",
        "py": "mǎi piào",
        "vn": "mua vé"
      },
      {
        "zh": "网上买票",
        "py": "wǎngshang mǎi piào",
        "vn": "mua vé trên mạng"
      },
      {
        "zh": "一张票",
        "py": "yì zhāng piào",
        "vn": "một cái vé"
      },
      {
        "zh": "飞机票",
        "py": "fēijī piào",
        "vn": "vé máy bay"
      }
    ],
    "patterns": [
      {
        "s": "một + 张 + 票",
        "m": "Lượng từ của 票 là 张"
      },
      {
        "s": "买 + 票",
        "m": "Mua vé — 飞机票 · 火车票 đều ghép với 票"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua hai vé máy bay.",
        "answer": "我想买两张飞机票。",
        "answerPy": "Wǒ xiǎng mǎi liǎng zhāng fēijī piào.",
        "note": "Lượng từ của 票 là 张.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Vé mua trên mạng rẻ hơn một chút.",
        "answer": "在网上买的票便宜一点儿。",
        "answerPy": "Zài wǎngshàng mǎi de piào piányi yìdiǎnr.",
        "note": "在网上买的票 — vé mua trên mạng.",
        "pair": "Adj + 一点儿"
      }
    ]
  },
  {
    "n": 15,
    "zh": "别",
    "py": "bié",
    "pos": "Phó từ",
    "vn": "đừng",
    "hv": "biệt",
    "em": "🚫",
    "lesson": 3,
    "ex_zh": "还是别看电影了。",
    "ex_py": "Háishi bié kàn diànyǐng le.",
    "ex_vn": "Thôi đừng xem phim nữa.",
    "exList": [
      {
        "zh": "还是别看电影了。",
        "py": "Háishi bié kàn diànyǐng le.",
        "vn": "Thôi đừng xem phim nữa."
      },
      {
        "zh": "别忘了带护照。",
        "py": "Bié wàngle dài hùzhào.",
        "vn": "Đừng quên mang hộ chiếu."
      }
    ],
    "hanzi": [
      {
        "c": "别",
        "p": "bié",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "口 → 力 → 刂",
        "rad": "刂 (đao – dao)",
        "mean": "khác; đừng",
        "tip": "别 + động từ = đừng làm gì: 别说话、别走。",
        "cf": "",
        "w": "别看 / 别的 / 别人"
      }
    ],
    "colloFull": [
      {
        "zh": "别去",
        "py": "bié qù",
        "vn": "đừng đi"
      },
      {
        "zh": "别说话",
        "py": "bié shuōhuà",
        "vn": "đừng nói chuyện"
      },
      {
        "zh": "别忘了",
        "py": "bié wàng le",
        "vn": "đừng quên"
      },
      {
        "zh": "别打车",
        "py": "bié dǎchē",
        "vn": "đừng bắt taxi"
      }
    ],
    "patterns": [
      {
        "s": "别 + động từ",
        "m": "Đừng làm gì — câu khuyên, ngăn lại"
      },
      {
        "s": "别 = 不要 — 别 ngắn gọn hơn, hay dùng khi nói"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong tiết học đừng nói chuyện.",
        "answer": "上课的时候别说话。",
        "answerPy": "Shàngkè de shíhou bié shuōhuà.",
        "note": "别 = 不要, 别 ngắn gọn hơn.",
        "pair": "别 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Đừng quên mang vé nhé.",
        "answer": "别忘了票。",
        "answerPy": "Bié wàng le piào.",
        "note": "别忘了 — đừng quên.",
        "pair": "别 + V"
      }
    ]
  },
  {
    "n": 16,
    "zh": "过来",
    "py": "guòlái",
    "pos": "Động từ",
    "vn": "đến, đến đây, qua đây",
    "hv": "quá lai",
    "em": "➡️",
    "img": "/images/hsk2v3-bai-2/guolai.jpg",
    "lesson": 4,
    "ex_zh": "我们有时间还想再过来看个电影。",
    "ex_py": "Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.",
    "ex_vn": "Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim.",
    "exList": [
      {
        "zh": "我们有时间还想再过来看个电影。",
        "py": "Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.",
        "vn": "Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim."
      },
      {
        "zh": "你家太远了，我们是打车过来的。",
        "py": "Nǐ jiā tài yuǎn le, wǒmen shì dǎchē guòlái de.",
        "vn": "Nhà bạn xa quá, chúng tôi bắt taxi qua đây đấy."
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
        "mean": "qua, vượt qua",
        "tip": "过来 = đi về phía người nói; 过去 = đi xa người nói.",
        "cf": "",
        "w": "过来 / 过去 / 经过"
      }
    ],
    "colloFull": [
      {
        "zh": "过来看",
        "py": "guòlái kàn",
        "vn": "lại đây xem"
      },
      {
        "zh": "走过来",
        "py": "zǒu guòlái",
        "vn": "đi lại đây"
      },
      {
        "zh": "请过来",
        "py": "qǐng guòlái",
        "vn": "mời lại đây"
      },
      {
        "zh": "过来吧",
        "py": "guòlái ba",
        "vn": "lại đây nào"
      }
    ],
    "patterns": [
      {
        "s": "V + 过来",
        "m": "Tiến về phía người nói: 走过来"
      },
      {
        "s": "过来 (lại gần mình) ↔ 过去 (đi ra xa mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn lại đây xem một chút.",
        "answer": "你过来看一下。",
        "answerPy": "Nǐ guòlai kàn yíxià.",
        "note": "过来 — tiến về phía người nói.",
        "pair": "V + 过来"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy ơi, mời thầy lại đây ạ.",
        "answer": "老师，请过来吧。",
        "answerPy": "Lǎoshī, qǐng guòlai ba.",
        "note": "过来 (lại gần) ↔ 过去 (ra xa).",
        "pair": "请 + V"
      }
    ]
  },
  {
    "n": 17,
    "zh": "北京大学",
    "py": "Běijīng Dàxué",
    "pos": "Danh từ riêng",
    "vn": "Đại học Bắc Kinh",
    "hv": "Bắc Kinh Đại Học",
    "em": "🎓",
    "lesson": 1,
    "ex_zh": "这儿有到北京大学的公交车吗？",
    "ex_py": "Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
    "ex_vn": "Ở đây có xe buýt đi Đại học Bắc Kinh không?",
    "exList": [
      {
        "zh": "这儿有到北京大学的公交车吗？",
        "py": "Zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
        "vn": "Ở đây có xe buýt đi Đại học Bắc Kinh không?"
      },
      {
        "zh": "北京大学很大，也很漂亮。",
        "py": "Běijīng Dàxué hěn dà, yě hěn piàoliang.",
        "vn": "Đại học Bắc Kinh rất lớn và cũng rất đẹp."
      }
    ],
    "hanzi": [
      {
        "c": "学",
        "p": "xué",
        "type": "会意字 · Chữ hội ý",
        "st": 8,
        "ord": "⺍ → 冖 → 子",
        "rad": "子 (tử – con)",
        "mean": "học",
        "tip": "北大 là cách gọi tắt của 北京大学 trong khẩu ngữ.",
        "cf": "",
        "w": "大学 / 学生 / 学校"
      }
    ],
    "colloFull": [
      {
        "zh": "去北京大学",
        "py": "qù Běijīng Dàxué",
        "vn": "đến Đại học Bắc Kinh"
      },
      {
        "zh": "在北京大学",
        "py": "zài Běijīng Dàxué",
        "vn": "ở Đại học Bắc Kinh"
      },
      {
        "zh": "北京大学的学生",
        "py": "Běijīng Dàxué de xuésheng",
        "vn": "sinh viên Đại học Bắc Kinh"
      },
      {
        "zh": "上北京大学",
        "py": "shàng Běijīng Dàxué",
        "vn": "học Đại học Bắc Kinh"
      }
    ],
    "patterns": [
      {
        "s": "上 / 去 + 北京大学",
        "m": "Học ở, đi đến Đại học Bắc Kinh"
      },
      {
        "s": "北京大学 hay gọi tắt là 北大 — trường đại học nổi tiếng nhất Trung Quốc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sang năm em trai tôi học Đại học Bắc Kinh.",
        "answer": "明年我弟弟上北京大学。",
        "answerPy": "Míngnián wǒ dìdi shàng Běijīng Dàxué.",
        "note": "北京大学 hay gọi tắt là 北大.",
        "pair": "上 + trường"
      },
      {
        "promptLang": "vi",
        "prompt": "Đại học Bắc Kinh cách đây có xa không?",
        "answer": "北京大学离这里远吗？",
        "answerPy": "Běijīng Dàxué lí zhèli yuǎn ma?",
        "note": "离 + nơi chốn + 远吗 — hỏi xa hay gần.",
        "pair": "……吗？"
      }
    ]
  }
];

var wuData = [
  { img: '🎟️', label: '票', py: 'piào', letter: 'A' },
  { img: '🏫', label: '教室', py: 'jiàoshì', letter: 'B' },
  { img: '🚕', label: '打车', py: 'dǎchē', letter: 'C' },
  { img: '🚌', label: '公交车', py: 'gōngjiāochē', letter: 'D' },
  { img: '🚏', label: '车站', py: 'chēzhàn', letter: 'E' },
  { img: '🌐', label: '网上', py: 'wǎngshang', letter: 'F' }
];

var dialogData = [
  {
    scene: '在宾馆前台 · Ở quầy lễ tân khách sạn',
    preQuiz: [
      { q: '白家月和安妮想去哪儿？', opts: ['饭店', '车站', '北京大学'], ans: 2 },
      { q: '白家月和安妮怎么去那儿？', opts: ['开车', '坐出租车', '坐公交车'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '请问，这儿有到北京大学的公交车吗？', py: 'Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?', vn: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?' },
      { sp: 1, zh: '有，但车站有点儿远。', py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.', vn: 'Có đấy, nhưng bến xe buýt hơi xa.' },
      { sp: 0, zh: '这儿好打车吗？', py: 'Zhèr hǎo dǎchē ma?', vn: 'Ở đây gọi xe taxi có dễ không vậy?' },
      { sp: 1, zh: '好打车。', py: 'Hǎo dǎchē.', vn: 'Dễ gọi.' },
      { sp: 0, zh: '谢谢。安妮，我们还是打车去吧。', py: 'Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.', vn: 'Cảm ơn! Annie, chúng ta vẫn nên gọi xe taxi đi thôi.' },
      { sp: 2, zh: '好，没问题。', py: 'Hǎo, méi wèntí.', vn: 'Được, không vấn đề gì cả.' }
    ]
  },
  {
    scene: '在北京大学 · Tham quan khuôn viên Đại học Bắc Kinh',
    preQuiz: [
      { q: '北京大学有多少学生？', opts: ['三千多', '四万多', '十万多'], ans: 1 },
      { q: '白家月想在北京大学做什么？', opts: ['玩', '学习', '找教室'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '学校里人真多啊！', py: 'Xuéxiào li rén zhēn duō a!', vn: 'Trường học đông người quá!' },
      { sp: 2, zh: '是啊，北京大学有四万多名学生呢！', py: 'Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuésheng ne!', vn: 'Đúng vậy, Đại học Bắc Kinh có hơn 40 000 sinh viên.' },
      { sp: 0, zh: '你是怎么知道的？', py: 'Nǐ shì zěnme zhīdào de?', vn: 'Làm sao bạn biết được thế?' },
      { sp: 2, zh: '是网上说的，网上还说北京大学有三千多名外国学生。', py: 'Shì wǎngshang shuō de, wǎngshang hái shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.', vn: 'Là thông tin trên mạng nói vậy, trên mạng còn cho biết Đại học Bắc Kinh có hơn 3 000 sinh viên nước ngoài.' },
      { sp: 0, zh: '我也想来这儿学习。', py: 'Wǒ yě xiǎng lái zhèr xuéxí.', vn: 'Mình cũng muốn đến đây học tập.' },
      { sp: 2, zh: '那边就有一间教室，我们去看一下吧。', py: 'Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.', vn: 'Đằng kia có một phòng học, chúng ta đến xem đi.' }
    ]
  },
  {
    scene: '在校园里 · Trong khuôn viên trường (rạp chiếu phim)',
    preQuiz: [
      { q: '安妮说北京大学里有什么？', opts: ['银行', '电影院', '公交车站'], ans: 1 },
      { q: '有的电影票还不到多少钱？', opts: ['十块钱', '二十块钱', '三十块钱'], ans: 1 }
    ],
    lines: [
      { sp: 2, zh: '家月，你看，学校里有家电影院！', py: 'Jiāyuè, nǐ kàn, xuéxiào li yǒu jiā diànyǐngyuàn!', vn: 'Gia Nguyệt, bạn nhìn kìa, trong trường có rạp chiếu phim đấy.' },
      { sp: 0, zh: '是啊，电影院还不小。', py: 'Shì a, diànyǐngyuàn hái bù xiǎo.', vn: 'Đúng rồi, rạp chiếu phim cũng không nhỏ.' },
      { sp: 2, zh: '他们卖的电影票也很便宜。', py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.', vn: 'Họ bán vé xem phim cũng rất rẻ nhé.' },
      { sp: 0, zh: '天啊！有的还不到二十块钱。', py: 'Tiān a! Yǒude hái bú dào èrshí kuài qián.', vn: 'Trời, có loại vé còn không đến 20 đồng kìa.' },
      { sp: 2, zh: '那你想不想去看个电影？', py: 'Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?', vn: 'Thế bạn có muốn đi xem phim không?' },
      { sp: 0, zh: '还是别看电影了，北京大学就很好看！', py: 'Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!', vn: 'Thôi đừng xem phim nữa, Đại học Bắc Kinh đã rất đẹp rồi.' }
    ]
  },
  {
    scene: '在北京大学门口 · Trước cổng trường (nhắn tin cho Trần Thiên Trung)',
    preQuiz: [
      { q: '北京大学怎么样？', opts: ['人不多', '很漂亮', '东西很贵'], ans: 1 },
      { q: '白家月和安妮有时间还想再来北京大学做什么？', opts: ['看学生', '学中文', '看电影'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '北京大学很大，有四万多名学生。', py: 'Běijīng Dàxué hěn dà, yǒu sìwàn duō míng xuésheng.', vn: 'Đại học Bắc Kinh rất lớn, có hơn 40 000 sinh viên.' },
      { sp: 0, zh: '学校很漂亮，里边还有家电影院，电影票也不贵。', py: 'Xuéxiào hěn piàoliang, lǐbian hái yǒu jiā diànyǐngyuàn, diànyǐngpiào yě bú guì.', vn: 'Trường rất đẹp, trong trường còn có rạp chiếu phim, vé xem phim cũng không đắt.' },
      { sp: 0, zh: '我们有时间还想再过来看个电影。', py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.', vn: 'Chúng tôi vẫn muốn quay lại để xem phim nếu có thời gian.' }
    ]
  }
];

var listenData = [
  {
    audio: '请问，这儿有到北京大学的公交车吗？有，但车站有点儿远。这儿好打车吗？好打车。安妮，我们还是打车去吧。',
    questions: [
      { q: '白家月和安妮想去哪儿？', opts: ['饭店', '车站', '北京大学'], ans: 2 },
      { q: '她们怎么去那儿？', opts: ['开车', '坐出租车', '坐公交车'], ans: 1 }
    ]
  },
  {
    audio: '学校里人真多啊！是啊，北京大学有四万多名学生呢！你是怎么知道的？是网上说的，网上还说北京大学有三千多名外国学生。',
    questions: [
      { q: '北京大学有多少学生？', opts: ['三千多', '四万多', '十万多'], ans: 1 },
      { q: '安妮是怎么知道的？', opts: ['网上说的', '老师说的', '书上写的'], ans: 0 }
    ]
  },
  {
    audio: '家月，你看，学校里有家电影院！是啊，电影院还不小。他们卖的电影票也很便宜。天啊！有的还不到二十块钱。',
    questions: [
      { q: '学校里有什么？', opts: ['银行', '电影院', '公交车站'], ans: 1 },
      { q: '有的电影票还不到多少钱？', opts: ['十块钱', '二十块钱', '三十块钱'], ans: 1 }
    ]
  },
  {
    audio: '北京大学很大，有四万多名学生。学校很漂亮，里边还有家电影院，电影票也不贵，我们有时间还想再过来看个电影。',
    questions: [
      { q: '北京大学怎么样？', opts: ['人不多', '很漂亮', '东西很贵'], ans: 1 },
      { q: '她们有时间还想再来做什么？', opts: ['看学生', '学中文', '看电影'], ans: 2 }
    ]
  }
];

var matchData = [
  { left: '公交', right: '车' },
  { left: '一间', right: '教室' },
  { left: '四万多', right: '名学生' },
  { left: '电影', right: '票' },
  { left: '还是', right: '打车去吧' },
  { left: '外国', right: '学生' }
];

var fillData = [
  { pre: '这儿有到北京大学的', blank: '公交车', post: '吗？', hint: '(xe buýt)', ans: '公交车' },
  { pre: '有，', blank: '但', post: '车站有点儿远。', hint: '(nhưng)', ans: '但' },
  { pre: '我们', blank: '还是', post: '打车去吧。', hint: '(vẫn nên)', ans: '还是' },
  { pre: '北京大学有四万', blank: '多', post: '名学生。', hint: '(hơn, có lẻ)', ans: '多' },
  { pre: '那边就有一', blank: '间', post: '教室。', hint: '(lượng từ: gian phòng)', ans: '间' },
  { pre: '是', blank: '网上', post: '说的。', hint: '(trên mạng)', ans: '网上' },
  { pre: '还是', blank: '别', post: '看电影了。', hint: '(đừng)', ans: '别' },
  { pre: '我们有时间还想再', blank: '过来', post: '看个电影。', hint: '(qua đây)', ans: '过来' }
];

var sortData = [
  { words: ['这儿', '有', '到', '北京大学', '的', '公交车', '吗', '？'], ans: '这儿有到北京大学的公交车吗？', audio: '这儿有到北京大学的公交车吗？' },
  { words: ['我们', '还是', '打车', '去', '吧', '。'], ans: '我们还是打车去吧。', audio: '我们还是打车去吧。' },
  { words: ['北京大学', '有', '四万多', '名', '学生', '。'], ans: '北京大学有四万多名学生。', audio: '北京大学有四万多名学生。' },
  { words: ['他们', '卖', '的', '电影票', '也', '很', '便宜', '。'], ans: '他们卖的电影票也很便宜。', audio: '他们卖的电影票也很便宜。' },
  { words: ['那边', '就', '有', '一间', '教室', '。'], ans: '那边就有一间教室。', audio: '那边就有一间教室。' },
  { words: ['还是', '别', '看', '电影', '了', '。'], ans: '还是别看电影了。', audio: '还是别看电影了。' }
];

var mcData = [
  { q: '你家太远了，我们是＿＿过来的。', opts: ['打车', '车站', '间', '但'], ans: 0 },
  { q: '那是一＿＿大教室，我们明天要去那儿上课。', opts: ['名', '间', '票', '万'], ans: 1 },
  { q: '李文让我去接他的朋友，＿＿我太忙了，没时间。', opts: ['还是', '但', '别', '过来'], ans: 1 },
  { q: '请问，去北京大学的＿＿在哪儿？', opts: ['教室', '网上', '车站', '电影院'], ans: 2 },
  { q: '“北京大学有四万多名学生” nghĩa là gì?', opts: ['Hơn 40 000 sinh viên', 'Đúng 40 000 sinh viên', 'Gần 4 000 sinh viên', 'Hơn 400 sinh viên'], ans: 0 },
  { q: '“还是……吧” dùng để làm gì?', opts: ['Nêu lựa chọn thiên về một hướng', 'Hỏi thời gian', 'Phủ định hoàn toàn', 'Nhấn mạnh quá khứ'], ans: 0 },
  { q: 'Câu nào có cụm động từ làm định ngữ?', opts: ['他们卖的电影票很便宜。', '他们很便宜卖电影票。', '电影票他们卖很便宜。', '便宜的他们卖电影票。'], ans: 0 },
  { q: '“二十多个学生” và “二十个多学生”, câu nào đúng?', opts: ['二十多个学生', '二十个多学生', 'Cả hai đều đúng', 'Cả hai đều sai'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你想问服务员这儿有没有到大学的公交车，你怎么问？',
      q_vn: 'Bạn muốn hỏi nhân viên ở đây có xe buýt đi đến trường đại học không, bạn hỏi thế nào?',
      hint: '请问，这儿有到……的公交车吗？',
      sample: '请问，这儿有到北京大学的公交车吗？',
      sample_vn: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?',
      note: '请问 mở đầu câu hỏi lịch sự; 到……的公交车 = xe buýt đi đến…'
    },
    {
      q_zh: '车站有点儿远，你建议朋友怎么去？',
      q_vn: 'Bến xe hơi xa, bạn khuyên bạn mình đi bằng cách nào?',
      hint: '我们还是……吧。',
      sample: '车站有点儿远，我们还是打车去吧。',
      sample_vn: 'Bến xe hơi xa, chúng ta vẫn nên bắt taxi đi thôi.',
      note: 'Cấu trúc 还是……吧 dùng khi chọn phương án mình thấy tốt hơn.'
    },
    {
      q_zh: '你们学校有多少学生？',
      q_vn: 'Trường bạn có bao nhiêu sinh viên?',
      hint: '我们学校有……多名学生。',
      sample: '我们学校有两万多名学生。',
      sample_vn: 'Trường tôi có hơn hai vạn sinh viên.',
      note: '多 đặt sau số tròn chục/trăm/nghìn để chỉ số lẻ: 四万多名。'
    },
    {
      q_zh: '你是怎么知道这个消息的？',
      q_vn: 'Bạn biết tin này bằng cách nào?',
      hint: '是……说的。',
      sample: '是网上说的，网上还说学校有很多外国学生。',
      sample_vn: 'Là trên mạng nói vậy, trên mạng còn nói trường có rất nhiều sinh viên nước ngoài.',
      note: 'Câu “是……的” dùng để nhấn mạnh cách thức, nguồn tin.'
    },
    {
      q_zh: '朋友想去看电影，可是你觉得不用去，你怎么说？',
      q_vn: 'Bạn của bạn muốn đi xem phim, nhưng bạn thấy không cần, bạn nói thế nào?',
      hint: '还是别……了。',
      sample: '还是别看电影了，学校里就很好看。',
      sample_vn: 'Thôi đừng xem phim nữa, trong trường đã rất đẹp rồi.',
      note: '还是别……了 là cách từ chối nhẹ nhàng, lịch sự.'
    }
  ]
};

var translateData = [
  { vi: 'Xin hỏi, ở đây có xe buýt đi đến Đại học Bắc Kinh không?', zh: '请问，这儿有到北京大学的公交车吗？', py: 'Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?' },
  { vi: 'Có đấy, nhưng bến xe buýt hơi xa.', zh: '有，但车站有点儿远。', py: 'Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.' },
  { vi: 'Chúng ta vẫn nên gọi taxi đi thôi.', zh: '我们还是打车去吧。', py: 'Wǒmen háishi dǎchē qù ba.' },
  { vi: 'Đại học Bắc Kinh có hơn 40 000 sinh viên.', zh: '北京大学有四万多名学生。', py: 'Běijīng Dàxué yǒu sìwàn duō míng xuésheng.' },
  { vi: 'Thôi đừng xem phim nữa, Đại học Bắc Kinh đã rất đẹp rồi.', zh: '还是别看电影了，北京大学就很好看！', py: 'Háishi bié kàn diànyǐng le, Běijīng Dàxué jiù hěn hǎokàn!' }
];

var translateDataRev = [
  { vi: 'Trường học đông người quá!', zh: '学校里人真多啊！', py: 'Xuéxiào li rén zhēn duō a!' },
  { vi: 'Là thông tin trên mạng nói vậy.', zh: '是网上说的。', py: 'Shì wǎngshang shuō de.' },
  { vi: 'Đằng kia có một phòng học, chúng ta đến xem đi.', zh: '那边就有一间教室，我们去看一下吧。', py: 'Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.' },
  { vi: 'Vé xem phim họ bán cũng rất rẻ.', zh: '他们卖的电影票也很便宜。', py: 'Tāmen mài de diànyǐngpiào yě hěn piányi.' },
  { vi: 'Nếu có thời gian chúng tôi vẫn muốn quay lại xem phim.', zh: '我们有时间还想再过来看个电影。', py: 'Wǒmen yǒu shíjiān hái xiǎng zài guòlái kàn ge diànyǐng.' }
];
