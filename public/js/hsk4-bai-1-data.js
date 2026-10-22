// ══════════════════════════════════════════
// DATA — HSK4 Bài 1: 简单的爱情 (Tình yêu đơn giản)
// Nguồn: HSK标准教程4上 (Giáo trình chuẩn HSK 4 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "法律",
    "py": "fǎlǜ",
    "pos": "Danh từ",
    "vn": "pháp luật, luật",
    "hv": "pháp luật",
    "em": "⚖️",
    "lesson": 1,
    "explain": [
      "Hệ thống quy tắc do nhà nước ban hành, mọi người phải tuân theo."
    ],
    "usage": "Danh từ; thường đi với động từ 学/懂/了解: 学法律, 懂法律.",
    "collo": [
      "学法律",
      "懂法律",
      "法律专业"
    ],
    "ex_zh": "他学的是新闻，我学的是法律。",
    "ex_py": "Tā xué de shì xīnwén, wǒ xué de shì fǎlǜ.",
    "ex_vn": "Anh ấy học báo chí, tôi học luật.",
    "exList": [
      {
        "zh": "他学的是新闻，我学的是法律，我和他不是一个班。",
        "py": "Tā xué de shì xīnwén, wǒ xué de shì fǎlǜ, wǒ hé tā bú shì yí ge bān.",
        "vn": "Anh ấy học báo chí, tôi học luật, tôi và anh ấy không cùng lớp."
      },
      {
        "zh": "你家里怎么有这么多关于法律的书？",
        "py": "Nǐ jiā li zěnme yǒu zhème duō guānyú fǎlǜ de shū?",
        "vn": "Sao nhà bạn có nhiều sách về pháp luật vậy?"
      },
      {
        "zh": "我最近对法律特别感兴趣。",
        "py": "Wǒ zuìjìn duì fǎlǜ tèbié gǎn xìngqù.",
        "vn": "Gần đây tôi rất hứng thú với pháp luật."
      }
    ],
    "hanzi": [
      {
        "c": "律",
        "p": "lǜ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "彳 (xích) trái → 聿 (duật) phải",
        "rad": "彳 (xích – bước chân nhỏ)",
        "mean": "luật lệ, quy tắc",
        "tip": "Bộ 彳 (đi, hành động) + 聿 (cây bút, ghi chép) → những điều được VIẾT RA để mọi người phải THEO đó mà hành động = LUẬT.",
        "cf": "律 dễ nhầm với 津 (jīn – bến đò, cũng có nét tương tự bên phải)",
        "w": "法律 / 规律 / 律师"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không những học giỏi mà tính cách cũng rất tốt.",
        "answer": "她不仅学习好，性格也很好。",
        "answerPy": "Tā bùjǐn xuéxí hǎo, xìnggé yě hěn hǎo.",
        "note": "不仅……也…… — không những … mà còn ….",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái tôi học không phải báo chí, mà là luật.",
        "answer": "我学的不是新闻，而是法律。",
        "answerPy": "Wǒ xué de bú shì xīnwén, ér shì fǎlǜ.",
        "note": "不是 A，而是 B — phủ định A rồi khẳng định B, không phải \"vừa… vừa…\".",
        "pair": "不是……而是……"
      }
    ],
    "note": "法 = pháp, 律 = luật. Hệ thống quy tắc do nhà nước đặt ra.",
    "colloFull": [
      {
        "zh": "学法律",
        "py": "xué fǎlǜ",
        "vn": "học luật"
      },
      {
        "zh": "懂法律",
        "py": "dǒng fǎlǜ",
        "vn": "hiểu luật"
      },
      {
        "zh": "法律专业",
        "py": "fǎlǜ zhuānyè",
        "vn": "chuyên ngành luật"
      },
      {
        "zh": "遵守法律",
        "py": "zūnshǒu fǎlǜ",
        "vn": "tuân thủ pháp luật"
      },
      {
        "zh": "法律问题",
        "py": "fǎlǜ wèntí",
        "vn": "vấn đề pháp lý"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 学 / 懂 + 法律",
        "m": "Ai đó học / hiểu luật"
      },
      {
        "s": "……的是法律",
        "m": "Cái mà … học là luật"
      }
    ]
  },
  {
    "n": 2,
    "zh": "俩",
    "py": "liǎ",
    "pos": "Số từ",
    "vn": "hai (người)",
    "hv": "lưỡng",
    "em": "👫",
    "lesson": 1,
    "explain": [
      "= 两个, thường đi kèm đại từ nhân xưng (我们俩, 你们俩, 他们俩), không dùng thêm lượng từ 个 sau nó."
    ],
    "usage": "Đại từ + 俩: 我们俩, 你们俩, 他们俩 — KHÔNG nói 我们俩个.",
    "collo": [
      "我们俩",
      "你们俩",
      "他们俩"
    ],
    "ex_zh": "那你们俩是怎么认识的？",
    "ex_py": "Nà nǐmen liǎ shì zěnme rènshi de?",
    "ex_vn": "Vậy hai bạn quen nhau thế nào?",
    "exList": [
      {
        "zh": "那你们俩是怎么认识的？",
        "py": "Nà nǐmen liǎ shì zěnme rènshi de?",
        "vn": "Vậy hai bạn quen nhau thế nào?"
      },
      {
        "zh": "我们俩有很多共同的爱好。",
        "py": "Wǒmen liǎ yǒu hěn duō gòngtóng de àihào.",
        "vn": "Hai chúng tôi có nhiều sở thích chung."
      },
      {
        "zh": "他们俩几乎没因为什么事红过脸。",
        "py": "Tāmen liǎ jīhū méi yīnwèi shénme shì hóngguo liǎn.",
        "vn": "Hai người họ hầu như chưa từng cãi nhau vì chuyện gì."
      }
    ],
    "hanzi": [
      {
        "c": "俩",
        "p": "liǎ",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "亻 (nhân) trái → 两 (lưỡng) phải",
        "rad": "亻 (nhân – người)",
        "mean": "hai người",
        "tip": "Bộ người 亻 + 两 (hai) → chỉ HAI NGƯỜI, đã có sẵn nghĩa \"hai\" nên không cần thêm lượng từ 个 phía sau nữa.",
        "cf": "俩 khác 两 ở chỗ 俩 luôn đi với đại từ nhân xưng, không đứng trước danh từ trực tiếp",
        "w": "我们俩 / 你们俩 / 哥俩"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hai chúng tôi tuy mới quen, nhưng đã thân như bạn cũ rồi.",
        "answer": "我们俩虽然刚认识，但是已经像老朋友一样了。",
        "answerPy": "Wǒmen liǎ suīrán gāng rènshi, dànshì yǐjīng xiàng lǎo péngyou yíyàng le.",
        "note": "像……一样 — so sánh ngang bằng; sau 俩 không dùng thêm lượng từ.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Hai người họ không những chưa bao giờ cãi nhau, mà tính cách cũng rất hợp.",
        "answer": "他们俩不但从来没吵过架，而且性格也很合适。",
        "answerPy": "Tāmen liǎ búdàn cónglái méi chǎoguo jià, érqiě xìnggé yě hěn héshì.",
        "note": "吵架 là từ ly hợp: 吵过架 chứ không phải 吵架过.",
        "pair": "不但……而且……"
      }
    ],
    "note": "= 两个. Đã có sẵn nghĩa \"hai\" nên KHÔNG thêm 个 phía sau.",
    "colloFull": [
      {
        "zh": "我们俩",
        "py": "wǒmen liǎ",
        "vn": "hai chúng tôi"
      },
      {
        "zh": "你们俩",
        "py": "nǐmen liǎ",
        "vn": "hai bạn"
      },
      {
        "zh": "他们俩",
        "py": "tāmen liǎ",
        "vn": "hai người họ"
      },
      {
        "zh": "咱们俩",
        "py": "zánmen liǎ",
        "vn": "hai ta"
      }
    ],
    "patterns": [
      {
        "s": "Đại từ + 俩 + V",
        "m": "Hai người ai đó làm gì"
      },
      {
        "s": "✗ 我们俩个 → ✓ 我们俩",
        "m": "Không thêm 个 sau 俩"
      }
    ]
  },
  {
    "n": 3,
    "zh": "印象",
    "py": "yìnxiàng",
    "pos": "Danh từ",
    "vn": "ấn tượng",
    "hv": "ấn tượng",
    "em": "💭",
    "lesson": 1,
    "explain": [
      "Cảm nhận, hình ảnh còn đọng lại trong đầu về một người/sự việc sau khi tiếp xúc."
    ],
    "usage": "Danh từ; thường đi với 对…印象(很)深/好/不错: 对他印象很深.",
    "collo": [
      "印象很深",
      "第一印象",
      "对……印象不错"
    ],
    "ex_zh": "我对他印象很深。",
    "ex_py": "Wǒ duì tā yìnxiàng hěn shēn.",
    "ex_vn": "Tôi có ấn tượng rất sâu sắc về anh ấy.",
    "exList": [
      {
        "zh": "他一个人踢进两个球，我对他印象很深。",
        "py": "Tā yí ge rén tījìn liǎng ge qiú, wǒ duì tā yìnxiàng hěn shēn.",
        "vn": "Anh ấy một mình đá lọt hai bàn, tôi có ấn tượng rất sâu sắc về anh ấy."
      },
      {
        "zh": "经理对我印象不错。",
        "py": "Jīnglǐ duì wǒ yìnxiàng búcuò.",
        "vn": "Giám đốc có ấn tượng khá tốt về tôi."
      },
      {
        "zh": "第一印象很难改变。",
        "py": "Dì-yī yìnxiàng hěn nán gǎibiàn.",
        "vn": "Ấn tượng ban đầu rất khó thay đổi."
      }
    ],
    "hanzi": [
      {
        "c": "印",
        "p": "yìn",
        "type": "左右结构 · Trái-phải",
        "st": 5,
        "ord": "爫 trên trái → 卩 dưới phải",
        "rad": "卩 (tiết – dấu triện, đầu gối quỳ)",
        "mean": "in, dấu ấn",
        "tip": "Hình tượng bàn tay 爫 ấn con dấu 卩 xuống → để lại DẤU VẾT, mở rộng thành ẤN TƯỢNG (dấu vết trong tâm trí).",
        "cf": "却 (què – cũng có bộ 卩 bên phải)",
        "w": "印象 / 打印 / 印章"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Anh ấy không những đá bóng giỏi, mà tính cách cũng rất tốt, nên tôi có ấn tượng rất sâu sắc.",
        "answer": "他不仅足球踢得好，性格也很好，所以我对他印象很深。",
        "answerPy": "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě hěn hǎo, suǒyǐ wǒ duì tā yìnxiàng hěn shēn.",
        "note": "不仅……也…… kết hợp với 所以 nêu kết quả.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngay từ lần đầu gặp mặt, cô ấy đã để lại cho tôi một ấn tượng rất tốt.",
        "answer": "第一次见面，她就给我留下了很好的印象。",
        "answerPy": "Dì-yī cì jiànmiàn, tā jiù gěi wǒ liúxiàle hěn hǎo de yìnxiàng.",
        "note": "给……留下印象 — để lại ấn tượng cho ai.",
        "pair": "一……就……"
      }
    ],
    "note": "Hình ảnh còn đọng lại trong đầu sau khi tiếp xúc.",
    "colloFull": [
      {
        "zh": "印象很深",
        "py": "yìnxiàng hěn shēn",
        "vn": "ấn tượng rất sâu"
      },
      {
        "zh": "第一印象",
        "py": "dì-yī yìnxiàng",
        "vn": "ấn tượng đầu tiên"
      },
      {
        "zh": "留下印象",
        "py": "liúxià yìnxiàng",
        "vn": "để lại ấn tượng"
      },
      {
        "zh": "印象不错",
        "py": "yìnxiàng búcuò",
        "vn": "ấn tượng khá tốt"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 对 + O + 印象 + 很深 / 不错",
        "m": "Ai đó có ấn tượng … về ai/cái gì"
      },
      {
        "s": "给 + người + 留下 + … 的印象",
        "m": "Để lại cho ai ấn tượng …"
      }
    ]
  },
  {
    "n": 4,
    "zh": "深",
    "py": "shēn",
    "pos": "Tính từ",
    "vn": "sâu sắc",
    "hv": "thâm",
    "em": "🌊",
    "lesson": 1,
    "explain": [
      "Mức độ lớn, mạnh của cảm xúc/ấn tượng; nghĩa gốc chỉ độ sâu vật lý."
    ],
    "usage": "Tính từ; thường đi sau 很/印象: 印象很深, 爱得很深.",
    "collo": [
      "印象很深",
      "很深的感情",
      "水很深"
    ],
    "ex_zh": "我对他印象很深。",
    "ex_py": "Wǒ duì tā yìnxiàng hěn shēn.",
    "ex_vn": "Tôi có ấn tượng rất sâu sắc về anh ấy.",
    "exList": [
      {
        "zh": "我对他印象很深。",
        "py": "Wǒ duì tā yìnxiàng hěn shēn.",
        "vn": "Tôi có ấn tượng rất sâu sắc về anh ấy."
      },
      {
        "zh": "这条河很深，你别下去游泳。",
        "py": "Zhè tiáo hé hěn shēn, nǐ bié xiàqu yóuyǒng.",
        "vn": "Con sông này sâu lắm, bạn đừng xuống bơi."
      },
      {
        "zh": "他们俩的感情很深。",
        "py": "Tāmen liǎ de gǎnqíng hěn shēn.",
        "vn": "Tình cảm của hai người họ rất sâu đậm."
      }
    ],
    "hanzi": [
      {
        "c": "深",
        "p": "shēn",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "氵 (thủy) trái → 罙 phải",
        "rad": "氵 (thủy – nước)",
        "mean": "sâu",
        "tip": "Bộ nước 氵 + phần biểu âm 罙 → chỉ mực NƯỚC SÂU, mở rộng nghĩa thành SÂU SẮC (tình cảm, ấn tượng).",
        "cf": "探 (tàn – \"thăm dò\", cũng có phần bên phải gần giống)",
        "w": "很深 / 深夜 / 加深"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả khi thất bại, ấn tượng sâu sắc mà cô ấy để lại vẫn khiến mọi người ngưỡng mộ.",
        "answer": "即使失败了，她留下的深刻印象也让人羡慕。",
        "answerPy": "Jíshǐ shībài le, tā liúxià de shēnkè yìnxiàng yě ràng rén xiànmù.",
        "note": "即使……也…… — cho dù … thì vẫn ….",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trận bóng đá đó không những rất hay, mà còn để lại trong lòng tôi một ấn tượng rất sâu.",
        "answer": "那场足球比赛不仅很精彩，而且在我心里留下了很深的印象。",
        "answerPy": "Nà chǎng zúqiú bǐsài bùjǐn hěn jīngcǎi, érqiě zài wǒ xīnli liúxiàle hěn shēn de yìnxiàng.",
        "note": "留下……印象 — kết hợp cố định; 深 dùng cho ấn tượng, không dùng 高.",
        "pair": "不仅……而且……"
      }
    ],
    "note": "Nghĩa gốc: sâu (nước, hố). Nghĩa mở rộng: sâu sắc (tình cảm, ấn tượng).",
    "colloFull": [
      {
        "zh": "印象很深",
        "py": "yìnxiàng hěn shēn",
        "vn": "ấn tượng rất sâu"
      },
      {
        "zh": "很深的感情",
        "py": "hěn shēn de gǎnqíng",
        "vn": "tình cảm sâu đậm"
      },
      {
        "zh": "水很深",
        "py": "shuǐ hěn shēn",
        "vn": "nước rất sâu"
      },
      {
        "zh": "深刻",
        "py": "shēnkè",
        "vn": "sâu sắc"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 特别 + 深",
        "m": "… rất sâu / sâu sắc"
      },
      {
        "s": "很深的 + N",
        "m": "… sâu đậm (làm định ngữ)"
      }
    ]
  },
  {
    "n": 5,
    "zh": "熟悉",
    "py": "shúxi",
    "pos": "Động từ",
    "vn": "hiểu rõ",
    "hv": "thục tất",
    "em": "🤝",
    "lesson": 1,
    "explain": [
      "Biết rõ, quen thuộc với một người/sự việc/nơi chốn do đã tiếp xúc nhiều lần."
    ],
    "usage": "Động từ; có thể dùng làm tính từ bổ nghĩa: 熟悉 + Đối tượng, hoặc 对……很熟悉.",
    "collo": [
      "慢慢熟悉",
      "对环境熟悉",
      "熟悉起来"
    ],
    "ex_zh": "后来就慢慢熟悉了。",
    "ex_py": "Hòulái jiù mànman shúxi le.",
    "ex_vn": "Sau đó thì dần dần quen thân.",
    "exList": [
      {
        "zh": "后来就慢慢熟悉了。",
        "py": "Hòulái jiù mànman shúxi le.",
        "vn": "Sau đó thì dần dần quen thân."
      },
      {
        "zh": "我对这儿的环境还不太熟悉。",
        "py": "Wǒ duì zhèr de huánjìng hái bú tài shúxi.",
        "vn": "Tôi vẫn chưa quen lắm với môi trường ở đây."
      },
      {
        "zh": "你对这个城市熟悉吗？",
        "py": "Nǐ duì zhège chéngshì shúxi ma?",
        "vn": "Bạn có quen thuộc với thành phố này không?"
      }
    ],
    "hanzi": [
      {
        "c": "悉",
        "p": "xī",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "釆 trên → 心 dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "biết rõ, tường tận",
        "tip": "Bộ tâm 心 (suy nghĩ, để tâm) ở dưới + 釆 (phân biệt từng chi tiết) → ĐỂ TÂM phân biệt kỹ từng chi tiết = HIỂU RÕ, TƯỜNG TẬN.",
        "cf": "恶 (è – \"xấu\", cũng có bộ 心\" nhưng nghĩa khác hẳn)",
        "w": "熟悉 / 悉心 / 获悉"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì chúng tôi mới chuyển đến được một tuần, nên chưa quen lắm với môi trường xung quanh.",
        "answer": "因为我们刚搬来一个星期，所以对周围的环境还不太熟悉。",
        "answerPy": "Yīnwèi wǒmen gāng bānlái yí gè xīngqī, suǒyǐ duì zhōuwéi de huánjìng hái bú tài shúxi.",
        "note": "对 + N + 熟悉 — quen thuộc với cái gì.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Dù đã sống ở đây hai mươi năm, anh ấy vẫn chưa quen hết mọi con đường.",
        "answer": "即使在这儿住了二十年，他也没熟悉所有的路。",
        "answerPy": "Jíshǐ zài zhèr zhùle èrshí nián, tā yě méi shúxi suǒyǒu de lù.",
        "note": "即使……也…… — nhấn mạnh việc dù điều kiện lớn (20 năm) vẫn chưa đạt kết quả.",
        "pair": "即使……也……"
      }
    ],
    "note": "Biết rõ do đã tiếp xúc nhiều — người, đường sá, môi trường.",
    "colloFull": [
      {
        "zh": "慢慢熟悉",
        "py": "mànmàn shúxi",
        "vn": "dần dần quen"
      },
      {
        "zh": "对环境熟悉",
        "py": "duì huánjìng shúxi",
        "vn": "quen với môi trường"
      },
      {
        "zh": "熟悉起来",
        "py": "shúxi qǐlái",
        "vn": "quen dần lên"
      },
      {
        "zh": "不太熟悉",
        "py": "bú tài shúxi",
        "vn": "chưa quen lắm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 对 + O + (不太) 熟悉",
        "m": "Ai đó (chưa) quen với cái gì"
      },
      {
        "s": "Sub + 熟悉 + O",
        "m": "Ai đó hiểu rõ cái gì"
      }
    ]
  },
  {
    "n": 6,
    "zh": "不仅",
    "py": "bùjǐn",
    "pos": "Liên từ",
    "vn": "không những, chẳng những",
    "hv": "bất cận",
    "em": "➕",
    "lesson": 1,
    "explain": [
      "Liên từ dùng ở vế câu thứ nhất, vế câu thứ hai thường dùng 也/还/而且 hô ứng, diễn tả ngoài điều vừa nêu còn có thêm ý khác."
    ],
    "usage": "Khi chủ ngữ hai vế giống nhau: Chủ ngữ + 不仅 + VP1，也/还/而且 + VP2. Khi chủ ngữ khác nhau: 不仅 đứng trước chủ ngữ.",
    "collo": [
      "不仅……也……",
      "不仅……还……",
      "不仅……而且……"
    ],
    "ex_zh": "他不仅足球踢得好，性格也不错。",
    "ex_py": "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
    "ex_vn": "Anh ấy không những đá bóng giỏi, tính cách cũng tốt.",
    "exList": [
      {
        "zh": "他不仅足球踢得好，性格也不错。",
        "py": "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
        "vn": "Anh ấy không những đá bóng giỏi, tính cách cũng tốt."
      },
      {
        "zh": "两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。",
        "py": "Liǎng ge rén gòngtóng shēnghuó, bùjǐn xūyào làngmàn de àiqíng, gèng xūyào xìnggé shang hùxiāng xīyǐn.",
        "vn": "Hai người sống chung, không những cần tình yêu lãng mạn, mà càng cần sự thu hút lẫn nhau về tính cách."
      },
      {
        "zh": "他不仅身体健康，还成了一名长跑运动员。",
        "py": "Tā bùjǐn shēntǐ jiànkāng, hái chéngle yì míng chángpǎo yùndòngyuán.",
        "vn": "Anh ấy không những cơ thể khỏe mạnh, còn trở thành một vận động viên chạy đường dài."
      }
    ],
    "hanzi": [
      {
        "c": "仅",
        "p": "jǐn",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "亻 (nhân) trái → 又 (hựu) phải",
        "rad": "亻 (nhân – người)",
        "mean": "chỉ, chỉ có",
        "tip": "Bộ người 亻 + 又 (thêm một lần nữa, ít ỏi) → CHỈ CÓ (một người, một chút), kết hợp với 不 thành 不仅 = KHÔNG CHỈ (có nhiêu đó).",
        "cf": "仅 dễ nhầm với 仪 (yí – \"nghi thức\")",
        "w": "不仅 / 仅仅 / 仅有"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không những xinh đẹp, mà còn rất thông minh.",
        "answer": "她不仅长得漂亮，也很聪明。",
        "answerPy": "Tā bùjǐn zhǎng de piàoliang, yě hěn cōngming.",
        "note": "不仅……也…… — chủ ngữ giống nhau, 不仅 đứng sau chủ ngữ.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Không những tôi thích xem phim, mà bạn tôi cũng thích.",
        "answer": "不仅我喜欢看电影，我朋友也喜欢。",
        "answerPy": "Bùjǐn wǒ xǐhuan kàn diànyǐng, wǒ péngyou yě xǐhuan.",
        "note": "不仅……也…… — chủ ngữ khác nhau, 不仅 đứng trước chủ ngữ của vế 1.",
        "pair": "不仅……也……"
      }
    ],
    "note": "Liên từ. Vế sau hô ứng bằng 也 / 还 / 而且 — KHÔNG đi với 但是.",
    "colloFull": [
      {
        "zh": "不仅……也……",
        "py": "bùjǐn… yě…",
        "vn": "không những… mà cũng…"
      },
      {
        "zh": "不仅……还……",
        "py": "bùjǐn… hái…",
        "vn": "không những… mà còn…"
      },
      {
        "zh": "不仅……而且……",
        "py": "bùjǐn… érqiě…",
        "vn": "không những… hơn nữa…"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 不仅 + VP1，也 / 还 + VP2",
        "m": "Cùng chủ ngữ: 不仅 đứng SAU chủ ngữ"
      },
      {
        "s": "不仅 + Sub1 + VP1，Sub2 + 也 + VP2",
        "m": "Khác chủ ngữ: 不仅 đứng TRƯỚC chủ ngữ"
      }
    ]
  },
  {
    "n": 7,
    "zh": "性格",
    "py": "xìnggé",
    "pos": "Danh từ",
    "vn": "tính cách, tính nết",
    "hv": "tính cách",
    "em": "🧩",
    "lesson": 1,
    "explain": [
      "Đặc điểm tâm lý ổn định của một người, thể hiện qua cách ứng xử, suy nghĩ."
    ],
    "usage": "Danh từ; thường đi với 好/不错/合得来: 性格好, 性格上互相吸引.",
    "collo": [
      "性格好",
      "性格上",
      "性格合得来"
    ],
    "ex_zh": "他不仅足球踢得好，性格也不错。",
    "ex_py": "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
    "ex_vn": "Anh ấy không những đá bóng giỏi, tính cách cũng tốt.",
    "exList": [
      {
        "zh": "他不仅足球踢得好，性格也不错。",
        "py": "Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.",
        "vn": "Anh ấy không những đá bóng giỏi, tính cách cũng tốt."
      },
      {
        "zh": "更需要性格上互相吸引。",
        "py": "Gèng xūyào xìnggé shang hùxiāng xīyǐn.",
        "vn": "Càng cần sự thu hút lẫn nhau về tính cách."
      },
      {
        "zh": "我们俩性格很像。",
        "py": "Wǒmen liǎ xìnggé hěn xiàng.",
        "vn": "Tính cách hai chúng tôi rất giống nhau."
      }
    ],
    "hanzi": [
      {
        "c": "格",
        "p": "gé",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "木 (mộc) trái → 各 (các) phải",
        "rad": "木 (mộc – cây, gỗ)",
        "mean": "tiêu chuẩn, khuôn phép",
        "tip": "Bộ gỗ 木 (khung, cây thước) + 各 (mỗi, riêng biệt) → mỗi thứ có KHUÔN KHỔ riêng, mở rộng thành TÍNH CÁCH (khuôn mẫu riêng của mỗi người).",
        "cf": "恪 (kè – \"cẩn thận\", có bộ 忄 khác)",
        "w": "性格 / 格式 / 合格"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hai người sống chung với nhau, không những cần tính cách hút nhau, mà còn phải hiểu cho nhau.",
        "answer": "两个人共同生活，不但需要性格上互相吸引，而且要互相理解。",
        "answerPy": "Liǎng gè rén gòngtóng shēnghuó, búdàn xūyào xìnggé shang hùxiāng xīyǐn, érqiě yào hùxiāng lǐjiě.",
        "note": "性格上 — về mặt tính cách; 互相 + động từ hai âm tiết.",
        "pair": "不但……而且……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tính cách anh ấy xưa nay đều rất tốt, ở cùng ai anh ấy cũng chưa từng nổi giận.",
        "answer": "他性格从来都很好，不管跟谁在一起都没生过气。",
        "answerPy": "Tā xìnggé cónglái dōu hěn hǎo, bùguǎn gēn shéi zài yìqǐ dōu méi shēngguo qì.",
        "note": "不管 + 谁 (từ nghi vấn phiếm chỉ)，都…… — với ai cũng vậy.",
        "pair": "不管……都……"
      }
    ],
    "note": "Tính nết vốn có của một người.",
    "colloFull": [
      {
        "zh": "性格好",
        "py": "xìnggé hǎo",
        "vn": "tính cách tốt"
      },
      {
        "zh": "性格上",
        "py": "xìnggé shang",
        "vn": "về mặt tính cách"
      },
      {
        "zh": "性格合得来",
        "py": "xìnggé hédelái",
        "vn": "hợp tính nhau"
      },
      {
        "zh": "性格不同",
        "py": "xìnggé bùtóng",
        "vn": "tính cách khác nhau"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 性格 + 好 / 不错",
        "m": "Tính cách của ai đó tốt"
      },
      {
        "s": "在性格上 + …",
        "m": "Về mặt tính cách thì …"
      }
    ]
  },
  {
    "n": 8,
    "zh": "开玩笑",
    "py": "kāi wánxiào",
    "pos": "Cụm động từ",
    "vn": "nói đùa, đùa",
    "hv": "khai ngoạn tiếu",
    "em": "😄",
    "lesson": 1,
    "explain": [
      "Nói/làm gì đó không nghiêm túc, cho vui, không có ý thật."
    ],
    "usage": "Cụm động từ; thường ở dạng nghi vấn 是不是/是在开玩笑吧, hoặc phủ định 别跟我开玩笑.",
    "collo": [
      "开玩笑吧",
      "跟……开玩笑",
      "爱开玩笑"
    ],
    "ex_zh": "你是在开玩笑吧？",
    "ex_py": "Nǐ shì zài kāi wánxiào ba?",
    "ex_vn": "Bạn đang đùa đấy à?",
    "exList": [
      {
        "zh": "你是在开玩笑吧？你们不是才认识一个月？",
        "py": "Nǐ shì zài kāi wánxiào ba? Nǐmen bú shì cái rènshi yí ge yuè?",
        "vn": "Bạn đang đùa đấy à? Chẳng phải các bạn mới quen nhau một tháng thôi sao?"
      },
      {
        "zh": "你还是这么爱开玩笑。",
        "py": "Nǐ háishi zhème ài kāi wánxiào.",
        "vn": "Bạn vẫn hay đùa như vậy."
      },
      {
        "zh": "你别跟我开玩笑了。",
        "py": "Nǐ bié gēn wǒ kāi wánxiào le.",
        "vn": "Bạn đừng đùa với tôi nữa."
      }
    ],
    "hanzi": [
      {
        "c": "玩",
        "p": "wán",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "王 (vương) trái → 元 (nguyên) phải",
        "rad": "王 (vương – bộ ngọc)",
        "mean": "chơi, đùa",
        "tip": "Bộ ngọc 王 (đồ chơi quý) + 元 → cầm ĐỒ QUÝ để CHƠI ĐÙA, mở rộng thành mọi hoạt động vui chơi, nói đùa.",
        "cf": "顽 (wán – \"ngoan cố\", cũng đọc gần giống\")",
        "w": "玩笑 / 玩儿 / 好玩"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy tôi mới quen anh ấy một tháng, nhưng bạn đừng đùa, chúng tôi chưa cưới đâu.",
        "answer": "虽然我跟他才认识一个月，但是你别开玩笑，我们还没结婚呢。",
        "answerPy": "Suīrán wǒ gēn tā cái rènshi yí gè yuè, dànshì nǐ bié kāi wánxiào, wǒmen hái méi jiéhūn ne.",
        "note": "开玩笑 là từ ly hợp: 开了一个玩笑, 别开玩笑.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù đang nói đùa, anh ấy cũng không nên nói những lời như vậy.",
        "answer": "即使是在开玩笑，他也不应该说那样的话。",
        "answerPy": "Jíshǐ shì zài kāi wánxiào, tā yě bù yīnggāi shuō nàyàng de huà.",
        "note": "即使……也…… — cho dù … cũng không nên ….",
        "pair": "即使……也……"
      }
    ],
    "note": "LY HỢP TỪ: 开了个玩笑, 开过玩笑. Không nói 开玩笑他.",
    "colloFull": [
      {
        "zh": "开玩笑吧",
        "py": "kāi wánxiào ba",
        "vn": "đùa đấy à"
      },
      {
        "zh": "跟……开玩笑",
        "py": "gēn… kāi wánxiào",
        "vn": "đùa với ai"
      },
      {
        "zh": "爱开玩笑",
        "py": "ài kāi wánxiào",
        "vn": "thích đùa"
      },
      {
        "zh": "开个玩笑",
        "py": "kāi ge wánxiào",
        "vn": "đùa một câu"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 跟 + người + 开玩笑",
        "m": "Ai đó đùa với ai"
      },
      {
        "s": "你是在开玩笑吧？",
        "m": "Bạn đùa đấy à?"
      }
    ]
  },
  {
    "n": 9,
    "zh": "从来",
    "py": "cónglái",
    "pos": "Phó từ",
    "vn": "từ trước đến nay, từ trước đến giờ",
    "hv": "tòng lai",
    "em": "⏳",
    "lesson": 1,
    "explain": [
      "Diễn tả từ quá khứ đến hiện tại luôn luôn như vậy, thường dùng trong câu phủ định."
    ],
    "usage": "Phó từ; đứng trước 不/没: 从来不……, 从来没……过.",
    "collo": [
      "从来不",
      "从来没……过",
      "从来都"
    ],
    "ex_zh": "我从来没这么快乐过。",
    "ex_py": "Wǒ cónglái méi zhème kuàilèguo.",
    "ex_vn": "Từ trước đến giờ tôi chưa bao giờ vui như vậy.",
    "exList": [
      {
        "zh": "我从来没这么快乐过。",
        "py": "Wǒ cónglái méi zhème kuàilèguo.",
        "vn": "Từ trước đến giờ tôi chưa bao giờ vui như vậy."
      },
      {
        "zh": "老张这个人开会从来不迟到。",
        "py": "Lǎo Zhāng zhège rén kāihuì cónglái bù chídào.",
        "vn": "Ông Trương này họp hành từ trước đến giờ chưa bao giờ đến muộn."
      },
      {
        "zh": "这家面馆从来只卖一种东西。",
        "py": "Zhè jiā miànguǎn cónglái zhǐ mài yì zhǒng dōngxi.",
        "vn": "Quán mì này từ trước đến giờ chỉ bán một loại."
      }
    ],
    "hanzi": [
      {
        "c": "从",
        "p": "cóng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 4,
        "ord": "人 trái → 人 phải",
        "rad": "人 (nhân – người)",
        "mean": "từ, theo",
        "tip": "Hai chữ 人 nối tiếp nhau → người này ĐI THEO người kia, mở rộng thành TỪ (một mốc thời gian/nơi chốn) đến nay.",
        "cf": "丛 (cóng – \"bụi cây\", hình gần giống nhưng bộ khác\")",
        "w": "从来 / 从……到…… / 自从"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy chúng tôi quen nhau chưa lâu, nhưng tôi từ trước đến giờ chưa từng vui như vậy.",
        "answer": "虽然我们认识的时间不长，但我从来没这么快乐过。",
        "answerPy": "Suīrán wǒmen rènshi de shíjiān bù cháng, dàn wǒ cónglái méi zhème kuàilèguo.",
        "note": "虽然……但…… ôn lại từ HSK3, kết hợp với 从来没……过.",
        "pair": "虽然……但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy từ trước đến giờ đều rất đúng giờ, hôm nay sao lại đến muộn vậy?",
        "answer": "他从来都很准时，今天怎么迟到了？",
        "answerPy": "Tā cónglái dōu hěn zhǔnshí, jīntiān zěnme chídào le?",
        "note": "从来都 + tính từ — nhấn mạnh tính ổn định lâu dài.",
        "pair": "从……到……"
      }
    ],
    "note": "Luôn đi với phủ định: 从来不 (thói quen) / 从来没…过 (kinh nghiệm).",
    "colloFull": [
      {
        "zh": "从来不",
        "py": "cónglái bù",
        "vn": "chưa bao giờ (thói quen)"
      },
      {
        "zh": "从来没……过",
        "py": "cónglái méi… guo",
        "vn": "từ trước đến giờ chưa từng"
      },
      {
        "zh": "从来都",
        "py": "cónglái dōu",
        "vn": "từ trước đến nay đều"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 从来不 + V",
        "m": "Ai đó chưa bao giờ làm gì (thói quen)"
      },
      {
        "s": "Sub + 从来没 + V + 过",
        "m": "Ai đó chưa từng làm gì (kinh nghiệm)"
      }
    ]
  },
  {
    "n": 10,
    "zh": "最好",
    "py": "zuìhǎo",
    "pos": "Phó từ",
    "vn": "tốt nhất",
    "hv": "tối hảo",
    "em": "👍",
    "lesson": 1,
    "explain": [
      "Diễn tả lựa chọn/đề nghị tốt nhất trong hoàn cảnh hiện tại, thường dùng để khuyên nhủ."
    ],
    "usage": "Phó từ; đứng đầu câu hoặc trước động từ: 最好 + V, mang tính đề nghị nhẹ nhàng.",
    "collo": [
      "最好能……",
      "最好先……",
      "最好去医院"
    ],
    "ex_zh": "两个人在一起，最好能有共同的兴趣和爱好。",
    "ex_py": "Liǎng ge rén zài yìqǐ, zuìhǎo néng yǒu gòngtóng de xìngqù hé àihào.",
    "ex_vn": "Hai người ở bên nhau, tốt nhất là nên có sở thích chung.",
    "exList": [
      {
        "zh": "两个人在一起，最好能有共同的兴趣和爱好。",
        "py": "Liǎng ge rén zài yìqǐ, zuìhǎo néng yǒu gòngtóng de xìngqù hé àihào.",
        "vn": "Hai người ở bên nhau, tốt nhất là nên có sở thích chung."
      },
      {
        "zh": "你最好去医院看一下。",
        "py": "Nǐ zuìhǎo qù yīyuàn kàn yíxià.",
        "vn": "Bạn tốt nhất nên đi bệnh viện khám một chút."
      },
      {
        "zh": "这件事你最好先问一下李老师。",
        "py": "Zhè jiàn shì nǐ zuìhǎo xiān wènyíxià Lǐ lǎoshī.",
        "vn": "Việc này bạn tốt nhất nên hỏi cô Lý trước."
      }
    ],
    "hanzi": [
      {
        "c": "最",
        "p": "zuì",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "曰 trên → 取 dưới",
        "rad": "曰 (viết – nói)",
        "mean": "nhất",
        "tip": "Phần trên 曰 (nói ra) + 取 (lấy, chọn) → CHỌN RA điều được nói đến nhiều nhất/hàng đầu → NHẤT.",
        "cf": "冣 (dạng cổ, ít dùng)",
        "w": "最好 / 最近 / 最喜欢"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho dù bận đến mấy, bạn cũng tốt nhất nên dành thời gian nghỉ ngơi.",
        "answer": "即使再忙，你也最好留点儿时间休息。",
        "answerPy": "Jíshǐ zài máng, nǐ yě zuìhǎo liú diǎnr shíjiān xiūxi.",
        "note": "即使……也…… kết hợp với 最好 nêu lời khuyên.",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu muốn giải quyết chuyện này thì hai người tốt nhất nên hiểu cho nhau.",
        "answer": "如果想解决这件事，两个人就最好互相理解。",
        "answerPy": "Rúguǒ xiǎng jiějué zhè jiàn shì, liǎng gè rén jiù zuìhǎo hùxiāng lǐjiě.",
        "note": "最好 ở đây là phó từ khuyên nhủ: \"tốt nhất là nên…\".",
        "pair": "如果……就……"
      }
    ],
    "note": "Phó từ nêu lời khuyên, không phải \"tốt nhất\" so sánh.",
    "colloFull": [
      {
        "zh": "最好能……",
        "py": "zuìhǎo néng…",
        "vn": "tốt nhất là có thể…"
      },
      {
        "zh": "最好先……",
        "py": "zuìhǎo xiān…",
        "vn": "tốt nhất là trước hết…"
      },
      {
        "zh": "最好去医院",
        "py": "zuìhǎo qù yīyuàn",
        "vn": "tốt nhất nên đi bệnh viện"
      }
    ],
    "patterns": [
      {
        "s": "(Sub +) 最好 + V",
        "m": "Tốt nhất là nên làm gì"
      },
      {
        "s": "最好 + 别 / 不要 + V",
        "m": "Tốt nhất là đừng làm gì"
      }
    ]
  },
  {
    "n": 11,
    "zh": "共同",
    "py": "gòngtóng",
    "pos": "Tính từ",
    "vn": "chung, cùng",
    "hv": "cộng đồng",
    "em": "🤲",
    "lesson": 1,
    "explain": [
      "Cùng nhau có/làm, thuộc về nhiều người/vật cùng lúc, không của riêng ai."
    ],
    "usage": "Tính từ, thường làm định ngữ: 共同的爱好, 共同生活, 共同努力.",
    "collo": [
      "共同的爱好",
      "共同生活",
      "共同努力"
    ],
    "ex_zh": "我们有很多共同的爱好。",
    "ex_py": "Wǒmen yǒu hěn duō gòngtóng de àihào.",
    "ex_vn": "Chúng tôi có rất nhiều sở thích chung.",
    "exList": [
      {
        "zh": "我们有很多共同的爱好，经常一起打球、唱歌、做菜。",
        "py": "Wǒmen yǒu hěn duō gòngtóng de àihào, jīngcháng yìqǐ dǎqiú, chàng gē, zuò cài.",
        "vn": "Chúng tôi có rất nhiều sở thích chung, thường cùng nhau chơi thể thao, hát, nấu ăn."
      },
      {
        "zh": "两个人共同生活，不仅需要浪漫的爱情。",
        "py": "Liǎng ge rén gòngtóng shēnghuó, bùjǐn xūyào làngmàn de àiqíng.",
        "vn": "Hai người sống chung, không những cần tình yêu lãng mạn."
      },
      {
        "zh": "他们两个人共同努力，终于完成了工作。",
        "py": "Tāmen liǎng ge rén gòngtóng nǔlì, zhōngyú wánchéngle gōngzuò.",
        "vn": "Hai người họ cùng nhau cố gắng, cuối cùng đã hoàn thành công việc."
      }
    ],
    "hanzi": [
      {
        "c": "共",
        "p": "gòng",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "廿 trên → 八 dưới",
        "rad": "八 (bát – chia)",
        "mean": "cùng, chung",
        "tip": "Hình tượng nhiều tay CÙNG NÂNG một vật → CÙNG NHAU, CHUNG.",
        "cf": "共 dễ nhầm với 兵 (bīng – \"binh lính\")",
        "w": "共同 / 一共 / 公共"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi không những có sở thích chung, mà tính cách cũng rất hợp nhau.",
        "answer": "我们不仅有共同的爱好，性格也很合得来。",
        "answerPy": "Wǒmen bùjǐn yǒu gòngtóng de àihào, xìnggé yě hěn hédelái.",
        "note": "不仅……也…… — không những … mà còn ….",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy công việc rất bận, nhưng chúng tôi vẫn luôn cùng nhau cố gắng.",
        "answer": "虽然工作很忙，但是我们一直共同努力。",
        "answerPy": "Suīrán gōngzuò hěn máng, dànshì wǒmen yìzhí gòngtóng nǔlì.",
        "note": "共同 + V — cùng nhau làm gì, thiên văn viết hơn 一起.",
        "pair": "虽然……但是……"
      }
    ],
    "note": "Làm định ngữ hoặc trạng ngữ, không làm vị ngữ (không nói 我们很共同).",
    "colloFull": [
      {
        "zh": "共同的爱好",
        "py": "gòngtóng de àihào",
        "vn": "sở thích chung"
      },
      {
        "zh": "共同生活",
        "py": "gòngtóng shēnghuó",
        "vn": "sống chung"
      },
      {
        "zh": "共同努力",
        "py": "gòngtóng nǔlì",
        "vn": "cùng nhau cố gắng"
      },
      {
        "zh": "共同语言",
        "py": "gòngtóng yǔyán",
        "vn": "tiếng nói chung"
      }
    ],
    "patterns": [
      {
        "s": "共同的 + N",
        "m": "… chung (làm định ngữ)"
      },
      {
        "s": "Sub + 共同 + V",
        "m": "Cùng nhau làm gì"
      }
    ]
  },
  {
    "n": 12,
    "zh": "适合",
    "py": "shìhé",
    "pos": "Động từ",
    "vn": "phù hợp",
    "hv": "thích hợp",
    "em": "✅",
    "lesson": 1,
    "explain": [
      "Phù hợp, thích hợp với điều kiện/hoàn cảnh/con người nào đó."
    ],
    "usage": "Động từ, có thể trực tiếp mang tân ngữ: 适合 + Đối tượng, không cần giới từ.",
    "collo": [
      "适合你的人",
      "适合自己",
      "适合工作"
    ],
    "ex_zh": "看来你真的找到适合你的人了。",
    "ex_py": "Kànlái nǐ zhēn de zhǎodào shìhé nǐ de rén le.",
    "ex_vn": "Xem ra bạn thật sự đã tìm được người phù hợp với mình rồi.",
    "exList": [
      {
        "zh": "看来你真的找到适合你的人了。",
        "py": "Kànlái nǐ zhēn de zhǎodào shìhé nǐ de rén le.",
        "vn": "Xem ra bạn thật sự đã tìm được người phù hợp với mình rồi."
      },
      {
        "zh": "怎么样才能找到适合自己的人？",
        "py": "Zěnmeyàng cái néng zhǎodào shìhé zìjǐ de rén?",
        "vn": "Làm thế nào mới có thể tìm được người phù hợp với mình?"
      },
      {
        "zh": "这份工作很适合他。",
        "py": "Zhè fèn gōngzuò hěn shìhé tā.",
        "vn": "Công việc này rất phù hợp với anh ấy."
      }
    ],
    "hanzi": [
      {
        "c": "适",
        "p": "shì",
        "type": "半包围结构 · Bán bao vây (giản thể)",
        "st": 9,
        "ord": "辶 bao ngoài → 舌 trong",
        "rad": "辶 (sước – đi, chạy)",
        "mean": "vừa, hợp",
        "tip": "Bộ 辶 (đi tới) + 舌 (biểu âm) → ĐI ĐẾN ĐÚNG chỗ, mở rộng thành VỪA VẶN, PHÙ HỢP.",
        "cf": "话 (huà – \"lời nói\", cũng có 舌\")",
        "w": "适合 / 适应 / 合适"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần hai người phù hợp với nhau về tính cách, thì sẽ dễ dàng sống hạnh phúc.",
        "answer": "只要两个人性格上适合，就容易幸福地生活。",
        "answerPy": "Zhǐyào liǎng ge rén xìnggé shang shìhé, jiù róngyì xìngfú de shēnghuó.",
        "note": "只要……就…… ôn lại từ HSK3, kết hợp 在……上.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy từ trước đến giờ chưa tìm được công việc phù hợp với mình.",
        "answer": "她从来没找到适合自己的工作。",
        "answerPy": "Tā cónglái méi zhǎodào shìhé zìjǐ de gōngzuò.",
        "note": "从来 + 没……过/没 — chưa từng.",
        "pair": "从……到……"
      }
    ],
    "note": "Không dùng 很适合了; muốn nhấn mạnh thì 很适合 / 非常适合.",
    "colloFull": [
      {
        "zh": "适合自己",
        "py": "shìhé zìjǐ",
        "vn": "phù hợp với bản thân"
      },
      {
        "zh": "适合你的人",
        "py": "shìhé nǐ de rén",
        "vn": "người phù hợp với bạn"
      },
      {
        "zh": "适合工作",
        "py": "shìhé gōngzuò",
        "vn": "phù hợp để làm việc"
      },
      {
        "zh": "不适合",
        "py": "bú shìhé",
        "vn": "không phù hợp"
      }
    ],
    "patterns": [
      {
        "s": "A + 适合 + B",
        "m": "A phù hợp với B"
      },
      {
        "s": "适合 + V 的 + N",
        "m": "… phù hợp để làm gì"
      }
    ]
  },
  {
    "n": 13,
    "zh": "幸福",
    "py": "xìngfú",
    "pos": "Tính từ",
    "vn": "hạnh phúc",
    "hv": "hạnh phúc",
    "em": "💖",
    "lesson": 1,
    "explain": [
      "Trạng thái cảm thấy hài lòng, vui vẻ, mãn nguyện trong cuộc sống."
    ],
    "usage": "Tính từ, có thể làm vị ngữ hoặc danh từ: 祝你们幸福！, 幸福的生活.",
    "collo": [
      "祝你们幸福",
      "幸福的生活",
      "觉得很幸福"
    ],
    "ex_zh": "祝你们幸福！",
    "ex_py": "Zhù nǐmen xìngfú!",
    "ex_vn": "Chúc hai bạn hạnh phúc!",
    "exList": [
      {
        "zh": "看来你真的找到适合你的人了。祝你们幸福！",
        "py": "Kànlái nǐ zhēn de zhǎodào shìhé nǐ de rén le. Zhù nǐmen xìngfú!",
        "vn": "Xem ra bạn thật sự đã tìm được người phù hợp với mình rồi. Chúc hai bạn hạnh phúc!"
      },
      {
        "zh": "我们的生活一直挺幸福的。",
        "py": "Wǒmen de shēnghuó yìzhí tǐng xìngfú de.",
        "vn": "Cuộc sống của chúng tôi luôn khá hạnh phúc."
      },
      {
        "zh": "有时候，简单就是最大的幸福。",
        "py": "Yǒu shíhou, jiǎndān jiù shì zuì dà de xìngfú.",
        "vn": "Có lúc, đơn giản chính là hạnh phúc lớn nhất."
      }
    ],
    "hanzi": [
      {
        "c": "福",
        "p": "fú",
        "type": "左右结构 · Trái-phải",
        "st": 13,
        "ord": "礻 (kỳ) trái → 畐 phải",
        "rad": "礻 (kỳ – thần linh, cúng tế)",
        "mean": "phúc, may mắn",
        "tip": "Bộ 礻 (thần linh phù hộ) + 畐 (đầy đủ, sung túc) → được THẦN PHÙ HỘ cho ĐẦY ĐỦ, sung túc = PHÚC, HẠNH PHÚC.",
        "cf": "副 (fù – \"phó, phụ\", cũng có 畐\" nhưng bộ khác)",
        "w": "幸福 / 福气 / 祝福"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả khi không giàu có, họ vẫn cảm thấy rất hạnh phúc.",
        "answer": "即使不富有，他们也觉得很幸福。",
        "answerPy": "Jíshǐ bú fùyǒu, tāmen yě juéde hěn xìngfú.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Về mặt tình cảm, chỉ cần hai người hiểu cho nhau là sẽ thấy rất hạnh phúc.",
        "answer": "在感情上，只要两个人互相理解，就会觉得很幸福。",
        "answerPy": "Zài gǎnqíng shang, zhǐyào liǎng gè rén hùxiāng lǐjiě, jiù huì juéde hěn xìngfú.",
        "note": "在……上 — về mặt nào đó.",
        "pair": "只要……就……"
      }
    ],
    "note": "Tính từ, cũng làm danh từ: 幸福的生活 / 什么是幸福？",
    "colloFull": [
      {
        "zh": "祝你们幸福",
        "py": "zhù nǐmen xìngfú",
        "vn": "chúc hai bạn hạnh phúc"
      },
      {
        "zh": "幸福的生活",
        "py": "xìngfú de shēnghuó",
        "vn": "cuộc sống hạnh phúc"
      },
      {
        "zh": "觉得很幸福",
        "py": "juéde hěn xìngfú",
        "vn": "cảm thấy rất hạnh phúc"
      },
      {
        "zh": "幸福的家庭",
        "py": "xìngfú de jiātíng",
        "vn": "gia đình hạnh phúc"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 觉得 / 感到 + 很幸福",
        "m": "Ai đó thấy rất hạnh phúc"
      },
      {
        "s": "祝 + người + 幸福",
        "m": "Chúc ai hạnh phúc"
      }
    ]
  },
  {
    "n": 14,
    "zh": "生活",
    "py": "shēnghuó",
    "pos": "Danh từ/Động từ",
    "vn": "cuộc sống; sống",
    "hv": "sinh hoạt",
    "em": "🏡",
    "lesson": 1,
    "explain": [
      "1. (Danh từ) Toàn bộ những hoạt động, sinh hoạt hằng ngày của con người.",
      "2. (Động từ) Sinh sống, tồn tại theo một cách nào đó."
    ],
    "usage": "Khi làm động từ: 生活 + trạng ngữ (共同生活, 幸福地生活); khi làm danh từ: 我们的生活.",
    "collo": [
      "我们的生活",
      "共同生活",
      "生活得怎么样"
    ],
    "ex_zh": "我们的生活一直挺幸福的。",
    "ex_py": "Wǒmen de shēnghuó yìzhí tǐng xìngfú de.",
    "ex_vn": "Cuộc sống của chúng tôi luôn khá hạnh phúc.",
    "exList": [
      {
        "zh": "我们的生活一直挺幸福的。",
        "py": "Wǒmen de shēnghuó yìzhí tǐng xìngfú de.",
        "vn": "Cuộc sống của chúng tôi luôn khá hạnh phúc."
      },
      {
        "zh": "两个人共同生活，只有浪漫和新鲜感是不够的。",
        "py": "Liǎng ge rén gòngtóng shēnghuó, zhǐyǒu làngmàn hé xīnxiāngǎn shì bú gòu de.",
        "vn": "Hai người sống chung, chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ."
      },
      {
        "zh": "两个人在一起时间长了，就会有很多问题，只有接受了他的缺点，你们才能更好地一起生活。",
        "py": "Liǎng ge rén zài yìqǐ shíjiān cháng le, jiù huì yǒu hěn duō wèntí, zhǐyǒu jiēshòule tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.",
        "vn": "Hai người ở bên nhau lâu, sẽ nảy sinh nhiều vấn đề, chỉ khi chấp nhận khuyết điểm của đối phương, hai bạn mới có thể sống cùng nhau tốt hơn."
      }
    ],
    "hanzi": [
      {
        "c": "活",
        "p": "huó",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "氵 (thủy) trái → 舌 (thiệt) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "sống, hoạt động",
        "tip": "Bộ nước 氵 (nguồn sống) + 舌 (lưỡi, biểu âm) → có NƯỚC để duy trì sự SỐNG, mở rộng thành SINH HOẠT, CUỘC SỐNG.",
        "cf": "话 (huà – \"lời nói\", cũng có 舌\" nhưng bộ 讠 khác)",
        "w": "生活 / 活动 / 干活"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có tình yêu lãng mạn thôi thì không đủ, hai người còn cần hiểu nhau mới sống hạnh phúc được.",
        "answer": "只有浪漫的爱情是不够的，两个人还需要互相理解才能幸福地生活。",
        "answerPy": "Zhǐyǒu làngmàn de àiqíng shì bú gòu de, liǎng ge rén hái xūyào hùxiāng lǐjiě cái néng xìngfú de shēnghuó.",
        "note": "只有……才…… — chỉ có … mới ….",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trong cuộc sống, chúng tôi không những giúp đỡ nhau, mà còn chưa bao giờ cãi vã.",
        "answer": "在生活上，我们不但互相帮助，而且从来没吵过架。",
        "answerPy": "Zài shēnghuó shang, wǒmen búdàn hùxiāng bāngzhù, érqiě cónglái méi chǎoguo jià.",
        "note": "从来没 + V + 过 — chưa từng bao giờ.",
        "pair": "不但……而且……"
      }
    ],
    "note": "Vừa là danh từ (cuộc sống) vừa là động từ (sinh sống).",
    "colloFull": [
      {
        "zh": "我们的生活",
        "py": "wǒmen de shēnghuó",
        "vn": "cuộc sống của chúng tôi"
      },
      {
        "zh": "共同生活",
        "py": "gòngtóng shēnghuó",
        "vn": "sống chung"
      },
      {
        "zh": "生活得怎么样",
        "py": "shēnghuó de zěnmeyàng",
        "vn": "sống thế nào"
      },
      {
        "zh": "生活习惯",
        "py": "shēnghuó xíguàn",
        "vn": "thói quen sinh hoạt"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 在 + nơi chốn + 生活",
        "m": "Ai đó sống ở đâu"
      },
      {
        "s": "……的生活 + Adj",
        "m": "Cuộc sống của … thì thế nào"
      }
    ]
  },
  {
    "n": 15,
    "zh": "刚",
    "py": "gāng",
    "pos": "Phó từ",
    "vn": "vừa, vừa mới",
    "hv": "cương",
    "em": "🕐",
    "lesson": 1,
    "explain": [
      "Diễn tả hành động/tình huống xảy ra cách đây không lâu, đứng sau chủ ngữ, trước động từ."
    ],
    "usage": "Phó từ: Chủ ngữ + 刚 + Động từ. So với 刚才 (danh từ chỉ thời gian): 刚 KHÔNG thể đứng đầu câu, không dùng phủ định phía sau, có thể có thời lượng phía sau động từ.",
    "collo": [
      "刚认识",
      "刚结婚",
      "刚搬来"
    ],
    "ex_zh": "我和丈夫刚结婚的时候，每天都觉得很新鲜。",
    "ex_py": "Wǒ hé zhàngfu gāng jié hūn de shíhou, měitiān dōu juéde hěn xīnxiān.",
    "ex_vn": "Lúc tôi và chồng vừa mới kết hôn, ngày nào cũng cảm thấy mới mẻ.",
    "exList": [
      {
        "zh": "我和丈夫刚结婚的时候，每天都觉得很新鲜。",
        "py": "Wǒ hé zhàngfu gāng jié hūn de shíhou, měitiān dōu juéde hěn xīnxiān.",
        "vn": "Lúc tôi và chồng vừa mới kết hôn, ngày nào cũng cảm thấy mới mẻ."
      },
      {
        "zh": "我上午刚借的那本书，怎么找不到了？",
        "py": "Wǒ shàngwǔ gāng jiè de nà běn shū, zěnme zhǎo bú dào le?",
        "vn": "Quyển sách tôi vừa mượn sáng nay sao lại không tìm thấy?"
      },
      {
        "zh": "我刚从会议室过来，怎么一个人也没有？",
        "py": "Wǒ gāng cóng huìyìshì guòlai, zěnme yí ge rén yě méiyǒu?",
        "vn": "Tôi vừa từ phòng họp qua đây, sao chẳng có ai vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "刚",
        "p": "gāng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "冈 trái → 刂 (đao) phải",
        "rad": "刂 (đao – dao)",
        "mean": "vừa mới; cứng",
        "tip": "Bộ dao 刂 + 冈 (núi cứng) → hành động vừa mới XẢY RA, còn \"SẮC/MỚI\" như lưỡi dao vừa mài.",
        "cf": "刚 dễ nhầm với 冈 (gāng – \"núi, gò\", không có bộ 刂\")",
        "w": "刚才 / 刚刚 / 刚好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mặc dù chúng tôi mới quen nhau, nhưng tôi chưa bao giờ vui đến thế.",
        "answer": "尽管我们刚认识，但我从来没这么快乐过。",
        "answerPy": "Jǐnguǎn wǒmen gāng rènshi, dàn wǒ cónglái méi zhème kuàilè guo.",
        "note": "刚 + V — vừa mới làm gì, không dùng với khoảng thời gian dài.",
        "pair": "尽管……但……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù vừa mới quen nhau, hai người họ vẫn có rất nhiều sở thích chung.",
        "answer": "即使刚认识，他们俩也有很多共同的爱好。",
        "answerPy": "Jíshǐ gāng rènshi, tāmen liǎ yě yǒu hěn duō gòngtóng de àihào.",
        "note": "即使……也…… kết hợp với 刚.",
        "pair": "即使……也……"
      }
    ],
    "note": "Phó từ chỉ việc VỪA xảy ra. Khác 刚才 (danh từ chỉ thời điểm).",
    "colloFull": [
      {
        "zh": "刚认识",
        "py": "gāng rènshi",
        "vn": "vừa mới quen"
      },
      {
        "zh": "刚结婚",
        "py": "gāng jiéhūn",
        "vn": "vừa mới cưới"
      },
      {
        "zh": "刚搬来",
        "py": "gāng bānlái",
        "vn": "vừa chuyển đến"
      },
      {
        "zh": "刚下课",
        "py": "gāng xiàkè",
        "vn": "vừa tan học"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 刚 + V",
        "m": "Ai đó vừa mới làm gì"
      },
      {
        "s": "刚 + V + 了 + thời lượng",
        "m": "Vừa làm gì được bao lâu"
      }
    ]
  },
  {
    "n": 16,
    "zh": "浪漫",
    "py": "làngmàn",
    "pos": "Tính từ",
    "vn": "lãng mạn",
    "hv": "lãng mạn",
    "em": "🌹",
    "lesson": 1,
    "explain": [
      "Đầy cảm xúc, mộng mơ, khác biệt với sự thực dụng thông thường."
    ],
    "usage": "Tính từ; thường đi với 爱情/生活: 浪漫的爱情.",
    "collo": [
      "浪漫的爱情",
      "很浪漫",
      "羨慕浪漫"
    ],
    "ex_zh": "很多女孩子羡慕浪漫的爱情。",
    "ex_py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
    "ex_vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn.",
    "exList": [
      {
        "zh": "很多女孩子羡慕浪漫的爱情。",
        "py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
        "vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn."
      },
      {
        "zh": "只有浪漫和新鲜感是不够的。",
        "py": "Zhǐyǒu làngmàn hé xīnxiāngǎn shì bú gòu de.",
        "vn": "Chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ."
      },
      {
        "zh": "这个电影讲了一个爱情故事，很浪漫。",
        "py": "Zhège diànyǐng jiǎngle yí ge àiqíng gùshi, hěn làngmàn.",
        "vn": "Bộ phim này kể một câu chuyện tình yêu, rất lãng mạn."
      }
    ],
    "hanzi": [
      {
        "c": "漫",
        "p": "màn",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "氵 (thủy) trái → 曼 (mạn) phải",
        "rad": "氵 (thủy – nước)",
        "mean": "tràn lan, mênh mông",
        "tip": "Bộ nước 氵 (lan tràn khắp nơi) + 曼 (kéo dài) → nước TRÀN LAN không giới hạn, mở rộng thành cảm xúc BAY BỔNG, LÃNG MẠN.",
        "cf": "慢 (màn – \"chậm\", bộ 忄 khác)",
        "w": "浪漫 / 漫画 / 弥漫"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không những cô ấy ngưỡng mộ tình yêu lãng mạn, mà còn rất thích xem phim tình cảm.",
        "answer": "她不仅羡慕浪漫的爱情，还很喜欢看爱情电影。",
        "answerPy": "Tā bùjǐn xiànmù làngmàn de àiqíng, hái hěn xǐhuan kàn àiqíng diànyǐng.",
        "note": "不仅……还…… — không những … mà còn ….",
        "pair": "不仅……还……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù công việc bận rộn, anh ấy cũng vẫn nhớ những ngày lãng mạn đó.",
        "answer": "即使工作很忙，他也一直记得那些浪漫的日子。",
        "answerPy": "Jíshǐ gōngzuò hěn máng, tā yě yìzhí jìde nàxiē làngmàn de rìzi.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Từ mượn âm (romantic). Tính từ.",
    "colloFull": [
      {
        "zh": "浪漫的爱情",
        "py": "làngmàn de àiqíng",
        "vn": "tình yêu lãng mạn"
      },
      {
        "zh": "很浪漫",
        "py": "hěn làngmàn",
        "vn": "rất lãng mạn"
      },
      {
        "zh": "浪漫的地方",
        "py": "làngmàn de dìfang",
        "vn": "nơi lãng mạn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 非常 + 浪漫",
        "m": "… rất lãng mạn"
      },
      {
        "s": "浪漫的 + N",
        "m": "… lãng mạn (làm định ngữ)"
      }
    ]
  },
  {
    "n": 17,
    "zh": "够",
    "py": "gòu",
    "pos": "Động từ",
    "vn": "đủ",
    "hv": "cú",
    "em": "🆗",
    "lesson": 1,
    "explain": [
      "Đạt đến mức cần thiết, không thiếu."
    ],
    "usage": "Động từ, thường dùng với 不够 (không đủ): 是不够的.",
    "collo": [
      "不够的",
      "够了",
      "够用"
    ],
    "ex_zh": "只有浪漫和新鲜感是不够的。",
    "ex_py": "Zhǐyǒu làngmàn hé xīnxiāngǎn shì bú gòu de.",
    "ex_vn": "Chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ.",
    "exList": [
      {
        "zh": "只有浪漫和新鲜感是不够的。",
        "py": "Zhǐyǒu làngmàn hé xīnxiāngǎn shì bú gòu de.",
        "vn": "Chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ."
      },
      {
        "zh": "这些钱够不够？",
        "py": "Zhèxiē qián gòu bu gòu?",
        "vn": "Số tiền này có đủ không?"
      },
      {
        "zh": "只知道理论是不够的，还要多练习。",
        "py": "Zhǐ zhīdào lǐlùn shì bú gòu de, hái yào duō liànxí.",
        "vn": "Chỉ biết lý thuyết thôi thì không đủ, còn phải luyện tập nhiều."
      }
    ],
    "hanzi": [
      {
        "c": "够",
        "p": "gòu",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 11,
        "ord": "夕 trái → 多 phải (biến thể)",
        "rad": "夕 (tịch – buổi tối)",
        "mean": "đủ",
        "tip": "Chữ giản thể mô phỏng số lượng ĐÃ ĐẠT MỨC cần có, mở rộng nghĩa từ \"nhiều\" (多) thành ĐỦ, KHÔNG THIẾU.",
        "cf": "够 dễ nhầm với 岁 (suì – \"tuổi\")",
        "w": "不够 / 够用 / 能够"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có tình yêu thôi thì không đủ, còn cần phải hiểu nhau nữa.",
        "answer": "只有爱情是不够的，还需要互相理解。",
        "answerPy": "Zhǐyǒu àiqíng shì bú gòu de, hái xūyào hùxiāng lǐjiě.",
        "note": "只有……(是不够的)，还…… — chỉ có … thì không đủ, còn cần ….",
        "pair": "只有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy về tiền bạc hiện giờ vẫn chưa đủ mua nhà, nhưng chúng tôi sẽ cùng nhau cố gắng.",
        "answer": "虽然在钱上现在还不够买房子，但是我们会一起努力。",
        "answerPy": "Suīrán zài qián shang xiànzài hái bú gòu mǎi fángzi, dànshì wǒmen huì yìqǐ nǔlì.",
        "note": "不够 + V — không đủ để làm gì.",
        "pair": "虽然……但是……"
      }
    ],
    "note": "Động từ chỉ mức đủ. 够 + N hoặc Adj + 够.",
    "colloFull": [
      {
        "zh": "够了",
        "py": "gòu le",
        "vn": "đủ rồi"
      },
      {
        "zh": "不够",
        "py": "bú gòu",
        "vn": "không đủ"
      },
      {
        "zh": "够用",
        "py": "gòu yòng",
        "vn": "đủ dùng"
      },
      {
        "zh": "时间不够",
        "py": "shíjiān bú gòu",
        "vn": "không đủ thời gian"
      }
    ],
    "patterns": [
      {
        "s": "N + 够 / 不够",
        "m": "Cái gì đủ / không đủ"
      },
      {
        "s": "够 + V",
        "m": "Đủ để làm gì"
      }
    ]
  },
  {
    "n": 18,
    "zh": "缺点",
    "py": "quēdiǎn",
    "pos": "Danh từ",
    "vn": "khuyết điểm, thiếu sót",
    "hv": "khuyết điểm",
    "em": "⚠️",
    "lesson": 1,
    "explain": [
      "Điểm chưa tốt, hạn chế của một người/sự vật, trái nghĩa với 优点."
    ],
    "usage": "Danh từ; thường đi với 接受/看到: 接受他的缺点.",
    "collo": [
      "他的缺点",
      "接受缺点",
      "看到缺点"
    ],
    "ex_zh": "我现在每天看到的都是他的缺点。",
    "ex_py": "Wǒ xiànzài měitiān kàndào de dōu shì tā de quēdiǎn.",
    "ex_vn": "Bây giờ mỗi ngày tôi nhìn thấy đều là khuyết điểm của anh ấy.",
    "exList": [
      {
        "zh": "我现在每天看到的都是他的缺点。",
        "py": "Wǒ xiànzài měitiān kàndào de dōu shì tā de quēdiǎn.",
        "vn": "Bây giờ mỗi ngày tôi nhìn thấy đều là khuyết điểm của anh ấy."
      },
      {
        "zh": "只有接受了他的缺点，你们才能更好地一起生活。",
        "py": "Zhǐyǒu jiēshòule tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.",
        "vn": "Chỉ khi chấp nhận khuyết điểm của anh ấy, hai bạn mới có thể sống cùng nhau tốt hơn."
      },
      {
        "zh": "每个人都有缺点。",
        "py": "Měi ge rén dōu yǒu quēdiǎn.",
        "vn": "Ai cũng có khuyết điểm."
      }
    ],
    "hanzi": [
      {
        "c": "缺",
        "p": "quē",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "缶 (phẫu) trái → 夬 (quải) phải",
        "rad": "缶 (phẫu – đồ sành sứ)",
        "mean": "thiếu, khuyết",
        "tip": "Bộ 缶 (đồ gốm) bị 夬 (cắt, khuyết một góc) → đồ gốm bị SỨT MẺ, mở rộng thành THIẾU, KHUYẾT.",
        "cf": "缺 dễ nhầm với 铁 (tiě – \"sắt\", bộ kim loại khác)",
        "w": "缺点 / 缺少 / 缺席"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ai cũng có khuyết điểm, chỉ cần biết cách chấp nhận là được.",
        "answer": "谁都有缺点，只要知道怎么接受就行了。",
        "answerPy": "Shéi dōu yǒu quēdiǎn, zhǐyào zhīdào zěnme jiēshòu jiù xíng le.",
        "note": "只要……就…… ôn lại từ HSK3.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy không những chưa bao giờ phê bình khuyết điểm của tôi, mà còn luôn động viên tôi.",
        "answer": "他不但从来没批评过我的缺点，而且总是鼓励我。",
        "answerPy": "Tā búdàn cónglái méi pīpíngguo wǒ de quēdiǎn, érqiě zǒngshì gǔlì wǒ.",
        "note": "缺点 ↔ 优点 — cặp từ trái nghĩa hay đi cùng nhau.",
        "pair": "不但……而且……"
      }
    ],
    "note": "Trái nghĩa với 优点 (ưu điểm).",
    "colloFull": [
      {
        "zh": "他的缺点",
        "py": "tā de quēdiǎn",
        "vn": "khuyết điểm của anh ấy"
      },
      {
        "zh": "接受缺点",
        "py": "jiēshòu quēdiǎn",
        "vn": "chấp nhận khuyết điểm"
      },
      {
        "zh": "看到缺点",
        "py": "kàndào quēdiǎn",
        "vn": "nhìn ra khuyết điểm"
      },
      {
        "zh": "优点和缺点",
        "py": "yōudiǎn hé quēdiǎn",
        "vn": "ưu điểm và khuyết điểm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 接受 + người + 的缺点",
        "m": "Chấp nhận khuyết điểm của ai"
      },
      {
        "s": "每个人都有缺点",
        "m": "Ai cũng có khuyết điểm"
      }
    ]
  },
  {
    "n": 19,
    "zh": "接受",
    "py": "jiēshòu",
    "pos": "Động từ",
    "vn": "chấp nhận",
    "hv": "tiếp thụ",
    "em": "🤗",
    "lesson": 1,
    "explain": [
      "Đồng ý nhận lấy, thừa nhận điều gì đó (thường là điều không hoàn hảo hoặc khó khăn)."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 接受 + Đối tượng (接受缺点, 接受意见).",
    "collo": [
      "接受缺点",
      "接受意见",
      "不能接受"
    ],
    "ex_zh": "只有接受了他的缺点，你们才能更好地一起生活。",
    "ex_py": "Zhǐyǒu jiēshòule tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.",
    "ex_vn": "Chỉ khi chấp nhận khuyết điểm của anh ấy, hai bạn mới có thể sống cùng nhau tốt hơn.",
    "exList": [
      {
        "zh": "只有接受了他的缺点，你们才能更好地一起生活。",
        "py": "Zhǐyǒu jiēshòule tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.",
        "vn": "Chỉ khi chấp nhận khuyết điểm của anh ấy, hai bạn mới có thể sống cùng nhau tốt hơn."
      },
      {
        "zh": "我是一个南方人，很难接受每天吃面条。",
        "py": "Wǒ shì yí ge nánfāngrén, hěn nán jiēshòu měitiān chī miàntiáo.",
        "vn": "Tôi là người miền Nam, rất khó chấp nhận việc ngày nào cũng ăn mì."
      },
      {
        "zh": "他不能接受这个结果。",
        "py": "Tā bù néng jiēshòu zhège jiéguǒ.",
        "vn": "Anh ấy không thể chấp nhận kết quả này."
      }
    ],
    "hanzi": [
      {
        "c": "受",
        "p": "shòu",
        "type": "独体字 · Chữ đơn",
        "st": 8,
        "ord": "爫 trên → 又 dưới",
        "rad": "又 (hựu – lại, tay)",
        "mean": "nhận, chịu",
        "tip": "Hình tượng hai tay 爫/又 trao và nhận một vật ở giữa → hành động TRAO NHẬN, mở rộng thành CHẤP NHẬN, CHỊU ĐỰNG.",
        "cf": "爱 (ài – \"yêu\", phần trên cũng có nét tương tự)",
        "w": "接受 / 感受 / 受到"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có chấp nhận khuyết điểm của đối phương, hai người mới có thể sống hạnh phúc cùng nhau.",
        "answer": "只有接受对方的缺点，两个人才能幸福地生活在一起。",
        "answerPy": "Zhǐyǒu jiēshòu duìfāng de quēdiǎn, liǎng ge rén cái néng xìngfú de shēnghuó zài yìqǐ.",
        "note": "只有……才…… — chỉ có … mới ….",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù rất khó, cô ấy cũng chấp nhận rồi.",
        "answer": "即使很难，她也接受了。",
        "answerPy": "Jíshǐ hěn nán, tā yě jiēshòu le.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Nhận và đồng ý — khác 收到 (nhận được về mặt vật chất).",
    "colloFull": [
      {
        "zh": "接受缺点",
        "py": "jiēshòu quēdiǎn",
        "vn": "chấp nhận khuyết điểm"
      },
      {
        "zh": "接受意见",
        "py": "jiēshòu yìjiàn",
        "vn": "tiếp thu ý kiến"
      },
      {
        "zh": "不能接受",
        "py": "bù néng jiēshòu",
        "vn": "không thể chấp nhận"
      },
      {
        "zh": "接受邀请",
        "py": "jiēshòu yāoqǐng",
        "vn": "nhận lời mời"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 接受 + O",
        "m": "Ai đó chấp nhận cái gì"
      },
      {
        "s": "Sub + 不能 / 无法 + 接受 + O",
        "m": "Ai đó không thể chấp nhận cái gì"
      }
    ]
  },
  {
    "n": 20,
    "zh": "羡慕",
    "py": "xiànmù",
    "pos": "Động từ",
    "vn": "ước ao, ngưỡng mộ",
    "hv": "tiện mộ",
    "em": "😍",
    "lesson": 2,
    "explain": [
      "Mong muốn có được điều tốt đẹp mà người khác đang có."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 羡慕 + Đối tượng/Người.",
    "collo": [
      "羡慕浪漫的爱情",
      "很羡慕",
      "让人羡慕"
    ],
    "ex_zh": "很多女孩子羡慕浪漫的爱情。",
    "ex_py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
    "ex_vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn.",
    "exList": [
      {
        "zh": "很多女孩子羡慕浪漫的爱情。",
        "py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
        "vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn."
      },
      {
        "zh": "很多人都特别羡慕我们。",
        "py": "Hěn duō rén dōu tèbié xiànmù wǒmen.",
        "vn": "Rất nhiều người đặc biệt ngưỡng mộ chúng tôi."
      },
      {
        "zh": "我们总是羡慕别人有个好工作。",
        "py": "Wǒmen zǒngshì xiànmù biéren yǒu ge hǎo gōngzuò.",
        "vn": "Chúng ta luôn ngưỡng mộ người khác có công việc tốt."
      }
    ],
    "hanzi": [
      {
        "c": "慕",
        "p": "mù",
        "type": "上下结构 · Trên-dưới",
        "st": 14,
        "ord": "莫 trên → 心 dưới",
        "rad": "心 (tâm – trái tim)",
        "mean": "ngưỡng mộ, mến mộ",
        "tip": "Bộ tâm 心 (trong lòng) ở dưới + 莫 (không gì bằng) → trong lòng cho rằng KHÔNG GÌ BẰNG điều đó, mở rộng thành NGƯỠNG MỘ.",
        "cf": "幕 (mù – \"màn che\", cũng có 莫\" trên nhưng bộ 巾 dưới)",
        "w": "羡慕 / 慕名 / 爱慕"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng lúc nào cũng ngưỡng mộ người khác, mà quên mất hạnh phúc mình đang có.",
        "answer": "不要总是羡慕别人，而忘记了自己已经有的幸福。",
        "answerPy": "Búyào zǒngshì xiànmù biéren, ér wàngjìle zìjǐ yǐjīng yǒu de xìngfú.",
        "note": "不要……而…… — đừng … mà (lại) ….",
        "pair": "总是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì họ chưa bao giờ cãi nhau, nên rất nhiều người ngưỡng mộ hai vợ chồng họ.",
        "answer": "因为他们从来不吵架，所以很多人都羡慕他们两口子。",
        "answerPy": "Yīnwèi tāmen cónglái bù chǎojià, suǒyǐ hěn duō rén dōu xiànmù tāmen liǎngkǒuzi.",
        "note": "羡慕 mang nghĩa tích cực, khác 嫉妒 (ghen tị).",
        "pair": "因为……所以……"
      }
    ],
    "note": "Ngưỡng mộ mà mong mình cũng được như vậy — sắc thái tích cực.",
    "colloFull": [
      {
        "zh": "很羡慕",
        "py": "hěn xiànmù",
        "vn": "rất ngưỡng mộ"
      },
      {
        "zh": "让人羡慕",
        "py": "ràng rén xiànmù",
        "vn": "khiến người ta ước ao"
      },
      {
        "zh": "羡慕别人",
        "py": "xiànmù biéren",
        "vn": "ước ao như người khác"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 羡慕 + O",
        "m": "Ai đó ngưỡng mộ ai/cái gì"
      },
      {
        "s": "……让人羡慕",
        "m": "… khiến người ta phải ước ao"
      }
    ]
  },
  {
    "n": 21,
    "zh": "爱情",
    "py": "àiqíng",
    "pos": "Danh từ",
    "vn": "tình yêu (giữa nam và nữ)",
    "hv": "ái tình",
    "em": "❤️",
    "lesson": 2,
    "explain": [
      "Tình cảm yêu thương sâu sắc giữa hai người yêu nhau, khác với 爱 (yêu nói chung) và 友谊 (tình bạn)."
    ],
    "usage": "Danh từ; thường đi với 浪漫的爱情, 简单的爱情, 爱情故事.",
    "collo": [
      "浪漫的爱情",
      "简单的爱情",
      "爱情故事"
    ],
    "ex_zh": "很多女孩子羡慕浪漫的爱情。",
    "ex_py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
    "ex_vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn.",
    "exList": [
      {
        "zh": "很多女孩子羡慕浪漫的爱情。",
        "py": "Hěn duō nǚháizi xiànmù làngmàn de àiqíng.",
        "vn": "Nhiều cô gái ngưỡng mộ tình yêu lãng mạn."
      },
      {
        "zh": "让我们感动的，就是生活中简单的爱情。",
        "py": "Ràng wǒmen gǎndòng de, jiù shì shēnghuó zhōng jiǎndān de àiqíng.",
        "vn": "Điều khiến chúng ta cảm động, chính là tình yêu đơn giản trong cuộc sống."
      },
      {
        "zh": "爱情是结婚的重要原因。",
        "py": "Àiqíng shì jié hūn de zhòngyào yuányīn.",
        "vn": "Tình yêu là nguyên nhân quan trọng của việc kết hôn."
      }
    ],
    "hanzi": [
      {
        "c": "情",
        "p": "qíng",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "忄 (tâm) trái → 青 (thanh) phải",
        "rad": "忄 (tâm – trái tim, đứng)",
        "mean": "tình cảm",
        "tip": "Bộ tâm 忄 (cảm xúc trong lòng) + 青 (trong trẻo, biểu âm) → cảm xúc TRONG SÁNG, CHÂN THẬT trong lòng = TÌNH CẢM.",
        "cf": "请 (qǐng – \"mời\", cũng có 青\" nhưng bộ 讠 khác)",
        "w": "爱情 / 感情 / 心情"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không những cần tình yêu lãng mạn, mà càng cần sự thu hút lẫn nhau về tính cách.",
        "answer": "不仅需要浪漫的爱情，更需要性格上互相吸引。",
        "answerPy": "Bùjǐn xūyào làngmàn de àiqíng, gèng xūyào xìnggé shang hùxiāng xīyǐn.",
        "note": "不仅……更…… — không những … mà càng ….",
        "pair": "不仅……更……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngay cả khi tình yêu rất bình thường, nó cũng có thể khiến người ta cảm động.",
        "answer": "即使爱情很普通，它也能让人感动。",
        "answerPy": "Jíshǐ àiqíng hěn pǔtōng, tā yě néng ràng rén gǎndòng.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "CHỈ dùng cho tình yêu nam nữ. Tình cảm gia đình là 亲情, bạn bè là 友情.",
    "colloFull": [
      {
        "zh": "浪漫的爱情",
        "py": "làngmàn de àiqíng",
        "vn": "tình yêu lãng mạn"
      },
      {
        "zh": "简单的爱情",
        "py": "jiǎndān de àiqíng",
        "vn": "tình yêu giản dị"
      },
      {
        "zh": "爱情故事",
        "py": "àiqíng gùshi",
        "vn": "chuyện tình"
      },
      {
        "zh": "相信爱情",
        "py": "xiāngxìn àiqíng",
        "vn": "tin vào tình yêu"
      }
    ],
    "patterns": [
      {
        "s": "Adj + 的爱情",
        "m": "Tình yêu … (làm định ngữ)"
      },
      {
        "s": "Sub + 相信 + 爱情",
        "m": "Ai đó tin vào tình yêu"
      }
    ]
  },
  {
    "n": 22,
    "zh": "星星",
    "py": "xīngxing",
    "pos": "Danh từ",
    "vn": "ngôi sao",
    "hv": "tinh tinh",
    "em": "⭐",
    "lesson": 2,
    "explain": [
      "Thiên thể phát sáng trên bầu trời đêm; trong bài dùng ẩn dụ cho món quà xa vời, không thực tế."
    ],
    "usage": "Danh từ; thường xuất hiện trong thành ngữ, câu ví von: 想要月亮/星星.",
    "collo": [
      "想要星星",
      "天上的星星",
      "数星星"
    ],
    "ex_zh": "她想要月亮时，你不会给她星星。",
    "ex_py": "Tā xiǎng yào yuèliang shí, nǐ bú huì gěi tā xīngxing.",
    "ex_vn": "Khi cô ấy muốn mặt trăng, bạn sẽ không đưa cho cô ấy ngôi sao.",
    "exList": [
      {
        "zh": "浪漫是她想要月亮时，你不会给她星星。",
        "py": "Làngmàn shì tā xiǎng yào yuèliang shí, nǐ bú huì gěi tā xīngxing.",
        "vn": "Lãng mạn là khi cô ấy muốn mặt trăng, bạn sẽ không đưa cho cô ấy ngôi sao."
      },
      {
        "zh": "晚上天上有很多星星。",
        "py": "Wǎnshang tiānshang yǒu hěn duō xīngxing.",
        "vn": "Buổi tối trên trời có rất nhiều ngôi sao."
      },
      {
        "zh": "孩子们喜欢在院子里数星星。",
        "py": "Háizimen xǐhuan zài yuànzi li shǔ xīngxing.",
        "vn": "Bọn trẻ thích đếm sao ở trong sân."
      }
    ],
    "hanzi": [
      {
        "c": "星",
        "p": "xīng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "日 trên → 生 dưới",
        "rad": "日 (nhật – mặt trời)",
        "mean": "ngôi sao",
        "tip": "Bộ 日 (vật thể phát sáng) + 生 (sinh ra, biểu âm) → vật thể SÁNG xuất hiện trên trời = NGÔI SAO.",
        "cf": "猩 (xīng – \"tinh tinh\", cũng có phần 星\" nhưng thêm bộ 犭)",
        "w": "星星 / 明星 / 星期"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả khi trời tối, những ngôi sao đó vẫn tỏa sáng.",
        "answer": "即使天黑了，那些星星也还亮着。",
        "answerPy": "Jíshǐ tiān hēi le, nàxiē xīngxing yě hái liàngzhe.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bất kể là ngắm sao hay xem phim, mỗi người hiểu về sự lãng mạn một khác.",
        "answer": "不管是看星星还是看电影，每个人对浪漫的理解都不一样。",
        "answerPy": "Bùguǎn shì kàn xīngxing háishi kàn diànyǐng, měi gè rén duì làngmàn de lǐjiě dōu bù yíyàng.",
        "note": "不管是 A 还是 B，都…… — nêu hai khả năng, kết quả vẫn như nhau.",
        "pair": "不管是……还是……"
      }
    ],
    "note": "Từ lặp âm, đọc nhẹ âm thứ hai: xīngxing.",
    "colloFull": [
      {
        "zh": "天上的星星",
        "py": "tiān shàng de xīngxing",
        "vn": "ngôi sao trên trời"
      },
      {
        "zh": "数星星",
        "py": "shǔ xīngxing",
        "vn": "đếm sao"
      },
      {
        "zh": "星星很亮",
        "py": "xīngxing hěn liàng",
        "vn": "sao rất sáng"
      }
    ],
    "patterns": [
      {
        "s": "天上的星星 + Adj",
        "m": "Sao trên trời thì thế nào"
      },
      {
        "s": "Sub + 想要 + 星星",
        "m": "Ai đó đòi cả ngôi sao (ví von)"
      }
    ]
  },
  {
    "n": 23,
    "zh": "即使",
    "py": "jíshǐ",
    "pos": "Liên từ",
    "vn": "cho dù",
    "hv": "tức sử",
    "em": "🔀",
    "lesson": 2,
    "explain": [
      "Liên từ dùng ở vế câu thứ nhất, vế câu thứ hai thường dùng 也 hô ứng, diễn tả quan hệ nhượng bộ giả thiết hoặc điều đã xảy ra/tồn tại."
    ],
    "usage": "即使 có thể đứng trước hoặc sau chủ ngữ của vế câu thứ nhất: 即使 + Chủ ngữ + VP1，Chủ ngữ + 也 + VP2.",
    "collo": [
      "即使……也……",
      "即使只是……",
      "即使晚上……也……"
    ],
    "ex_zh": "浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。",
    "ex_py": "Làngmàn shì jíshǐ wǎnshang jiābān dào língdiǎn, dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng.",
    "ex_vn": "Lãng mạn là cho dù buổi tối tăng ca đến 0 giờ, khi về đến nhà, đèn nhà mình vẫn còn sáng.",
    "exList": [
      {
        "zh": "浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。",
        "py": "Làngmàn shì jíshǐ wǎnshang jiābān dào língdiǎn, dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng.",
        "vn": "Lãng mạn là cho dù buổi tối tăng ca đến 0 giờ, khi về đến nhà, đèn nhà mình vẫn còn sáng."
      },
      {
        "zh": "即使只是跟他们吃吃饭、聊聊天，他们也会觉得很幸福。",
        "py": "Jíshǐ zhǐshì gēn tāmen chīchi fàn, liáoliao tiān, tāmen yě huì juéde hěn xìngfú.",
        "vn": "Cho dù chỉ là ăn cơm, trò chuyện với họ, họ cũng sẽ cảm thấy rất hạnh phúc."
      },
      {
        "zh": "即使我们认识的时间不长，我从来没这么快乐过。",
        "py": "Jíshǐ wǒmen rènshi de shíjiān bù cháng, wǒ cónglái méi zhème kuàilèguo.",
        "vn": "Cho dù chúng tôi quen nhau chưa lâu, tôi từ trước đến giờ chưa từng vui như vậy."
      }
    ],
    "hanzi": [
      {
        "c": "即",
        "p": "jí",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "皀 trái → 卩 phải",
        "rad": "卩 (tiết – quỳ gối)",
        "mean": "liền, ngay",
        "tip": "Hình tượng người 卩 quỳ NGAY bên mâm thức ăn 皀 để ăn → hành động xảy ra NGAY LẬP TỨC, mở rộng thành LIÊN TỪ nhượng bộ \"cho dù ngay cả khi\".",
        "cf": "既 (jì – \"đã\", hình gần giống nhưng nghĩa khác hẳn)",
        "w": "即使 / 立即 / 即将"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho dù mỗi ngày đều tăng ca, anh ấy cũng không hề than phiền.",
        "answer": "即使每天都加班，他也从来不抱怨。",
        "answerPy": "Jíshǐ měitiān dōu jiābān, tā yě cónglái bù bàoyuàn.",
        "note": "即使……也…… kết hợp với 从来不.",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù mọi việc rất bình thường, chúng cũng có thể khiến người ta cảm động.",
        "answer": "即使事情很普通，它们也能让人感动。",
        "answerPy": "Jíshǐ shìqing hěn pǔtōng, tāmen yě néng ràng rén gǎndòng.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Giả thiết nhượng bộ — việc CHƯA xảy ra. Vế sau bắt buộc có 也.",
    "colloFull": [
      {
        "zh": "即使……也……",
        "py": "jíshǐ… yě…",
        "vn": "cho dù… thì vẫn…"
      },
      {
        "zh": "即使这样",
        "py": "jíshǐ zhèyàng",
        "vn": "cho dù vậy"
      },
      {
        "zh": "即使很忙",
        "py": "jíshǐ hěn máng",
        "vn": "cho dù rất bận"
      }
    ],
    "patterns": [
      {
        "s": "即使 + mệnh đề 1，Sub + 也 + VP2",
        "m": "Cho dù … thì vẫn …"
      },
      {
        "s": "✗ 即使……但是…… → ✓ 即使……也……",
        "m": "Không hô ứng với 但是"
      }
    ]
  },
  {
    "n": 24,
    "zh": "加班",
    "py": "jiā bān",
    "pos": "Cụm động từ",
    "vn": "tăng ca, làm thêm giờ",
    "hv": "gia ban",
    "em": "💼",
    "lesson": 2,
    "explain": [
      "Làm việc thêm ngoài giờ quy định."
    ],
    "usage": "Cụm động từ ly hợp (离合词): có thể chèn thời lượng/bổ ngữ ở giữa 加 và 班: 加了一天班.",
    "collo": [
      "晚上加班",
      "加班到……",
      "不用加班"
    ],
    "ex_zh": "浪漫是即使晚上加班到零点。",
    "ex_py": "Làngmàn shì jíshǐ wǎnshang jiābān dào língdiǎn.",
    "ex_vn": "Lãng mạn là cho dù buổi tối tăng ca đến 0 giờ.",
    "exList": [
      {
        "zh": "浪漫是即使晚上加班到零点。",
        "py": "Làngmàn shì jíshǐ wǎnshang jiābān dào língdiǎn.",
        "vn": "Lãng mạn là cho dù buổi tối tăng ca đến 0 giờ."
      },
      {
        "zh": "今天晚上大家要加班。",
        "py": "Jīntiān wǎnshang dàjiā yào jiābān.",
        "vn": "Tối nay mọi người phải tăng ca."
      },
      {
        "zh": "他不会又要加班吧？",
        "py": "Tā bú huì yòu yào jiābān ba?",
        "vn": "Anh ấy sẽ không lại phải tăng ca chứ?"
      }
    ],
    "hanzi": [
      {
        "c": "班",
        "p": "bān",
        "type": "左右结构 · Trái-phải",
        "st": 10,
        "ord": "王 trái → 刂 → 王 (biến thể lặp)",
        "rad": "王 (vương – bộ ngọc)",
        "mean": "ca làm việc, lớp",
        "tip": "Hai bộ 王 (ngọc) được 刂 (dao) CHIA thành từng phần đều nhau → chia thành từng NHÓM, từng CA làm việc.",
        "cf": "班 dễ nhầm với 斑 (bān – \"đốm, vằn\")",
        "w": "加班 / 上班 / 班级"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho dù phải tăng ca đến nửa đêm, anh ấy cũng vẫn gọi điện cho tôi mỗi ngày.",
        "answer": "即使要加班到半夜，他也每天都给我打电话。",
        "answerPy": "Jíshǐ yào jiābān dào bànyè, tā yě měitiān dōu gěi wǒ dǎ diànhuà.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy dạo này chúng tôi thường phải tăng ca, nhưng cuối tuần vẫn cùng nhau đi xem phim.",
        "answer": "虽然我们最近经常要加班，但是周末还是会一起去看电影。",
        "answerPy": "Suīrán wǒmen zuìjìn jīngcháng yào jiābān, dànshì zhōumò háishi huì yìqǐ qù kàn diànyǐng.",
        "note": "加班 là từ ly hợp: 加了三个小时的班.",
        "pair": "虽然……但是……"
      }
    ],
    "note": "LY HỢP TỪ: 加了两个小时班. Không nói 加班两个小时.",
    "colloFull": [
      {
        "zh": "晚上加班",
        "py": "wǎnshang jiābān",
        "vn": "tăng ca buổi tối"
      },
      {
        "zh": "不用加班",
        "py": "búyòng jiābān",
        "vn": "không phải tăng ca"
      },
      {
        "zh": "经常加班",
        "py": "jīngcháng jiābān",
        "vn": "thường xuyên tăng ca"
      },
      {
        "zh": "加了三个小时班",
        "py": "jiāle sān ge xiǎoshí bān",
        "vn": "đã tăng ca ba tiếng"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 加班",
        "m": "Ai đó tăng ca"
      },
      {
        "s": "Sub + 加了 + thời lượng + 班",
        "m": "Ai đó đã tăng ca bao lâu"
      }
    ]
  },
  {
    "n": 25,
    "zh": "亮",
    "py": "liàng",
    "pos": "Động từ",
    "vn": "chiếu sáng, tỏa sáng",
    "hv": "lượng",
    "em": "💡",
    "lesson": 2,
    "explain": [
      "Phát ra ánh sáng; cũng dùng làm tính từ chỉ độ sáng."
    ],
    "usage": "Động từ/Tính từ: 灯还亮着 (đèn vẫn đang sáng), 天亮了 (trời sáng rồi).",
    "collo": [
      "灯亮着",
      "天亮了",
      "很亮"
    ],
    "ex_zh": "到家时，自己家里也还亮着灯。",
    "ex_py": "Dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng.",
    "ex_vn": "Khi về đến nhà, đèn nhà mình vẫn còn sáng.",
    "exList": [
      {
        "zh": "到家时，自己家里也还亮着灯。",
        "py": "Dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng.",
        "vn": "Khi về đến nhà, đèn nhà mình vẫn còn sáng."
      },
      {
        "zh": "天还没亮，他就起床了。",
        "py": "Tiān hái méi liàng, tā jiù qǐchuáng le.",
        "vn": "Trời còn chưa sáng, anh ấy đã dậy rồi."
      },
      {
        "zh": "这个房间很亮。",
        "py": "Zhège fángjiān hěn liàng.",
        "vn": "Căn phòng này rất sáng."
      }
    ],
    "hanzi": [
      {
        "c": "亮",
        "p": "liàng",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "亠 trên → 冖+几 dưới",
        "rad": "亠 (đầu – nắp)",
        "mean": "sáng",
        "tip": "Hình tượng ánh sáng phát ra từ trên cao chiếu xuống → SÁNG, TỎA SÁNG.",
        "cf": "亮 dễ nhầm với 京 (jīng – \"kinh đô\", phần trên giống nhau)",
        "w": "亮 / 明亮 / 天亮"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cho dù về nhà rất muộn, đèn phòng khách vẫn luôn sáng để đợi anh ấy.",
        "answer": "即使回家很晚，客厅的灯也一直亮着等他。",
        "answerPy": "Jíshǐ huí jiā hěn wǎn, kètīng de dēng yě yìzhí liàngzhe děng tā.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Từ trước đến giờ, đèn nhà tôi vào buổi tối luôn sáng đến rất muộn.",
        "answer": "从来，我家的灯晚上都亮到很晚。",
        "answerPy": "Cónglái, wǒ jiā de dēng wǎnshang dōu liàngdào hěn wǎn.",
        "note": "从来 — từ trước đến nay (nhấn mạnh thói quen lâu dài).",
        "pair": "从……到……"
      }
    ],
    "note": "Vừa là tính từ (sáng) vừa là động từ (bật sáng, hửng sáng).",
    "colloFull": [
      {
        "zh": "灯亮着",
        "py": "dēng liàngzhe",
        "vn": "đèn đang sáng"
      },
      {
        "zh": "天亮了",
        "py": "tiān liàng le",
        "vn": "trời sáng rồi"
      },
      {
        "zh": "很亮",
        "py": "hěn liàng",
        "vn": "rất sáng"
      },
      {
        "zh": "眼睛一亮",
        "py": "yǎnjing yí liàng",
        "vn": "mắt sáng lên"
      }
    ],
    "patterns": [
      {
        "s": "N + 亮着",
        "m": "Cái gì đang sáng"
      },
      {
        "s": "天 + 亮 + 了",
        "m": "Trời đã sáng"
      }
    ]
  },
  {
    "n": 26,
    "zh": "感动",
    "py": "gǎndòng",
    "pos": "Động từ",
    "vn": "cảm động, làm xúc động",
    "hv": "cảm động",
    "em": "🥹",
    "lesson": 2,
    "explain": [
      "Cảm xúc dâng trào, xúc động khi tiếp xúc với điều gì đó tốt đẹp/ý nghĩa."
    ],
    "usage": "Động từ; có thể dùng bị động 被……感动, hoặc làm 让/使 người khác cảm động.",
    "collo": [
      "让人感动",
      "很感动",
      "被……感动"
    ],
    "ex_zh": "让我们感动的，就是生活中简单的爱情。",
    "ex_py": "Ràng wǒmen gǎndòng de, jiù shì shēnghuó zhōng jiǎndān de àiqíng.",
    "ex_vn": "Điều khiến chúng ta cảm động, chính là tình yêu đơn giản trong cuộc sống.",
    "exList": [
      {
        "zh": "让我们感动的，就是生活中简单的爱情。",
        "py": "Ràng wǒmen gǎndòng de, jiù shì shēnghuó zhōng jiǎndān de àiqíng.",
        "vn": "Điều khiến chúng ta cảm động, chính là tình yêu đơn giản trong cuộc sống."
      },
      {
        "zh": "这个电影很浪漫，让人特别感动。",
        "py": "Zhège diànyǐng hěn làngmàn, ràng rén tèbié gǎndòng.",
        "vn": "Bộ phim này rất lãng mạn, khiến người ta đặc biệt cảm động."
      },
      {
        "zh": "虽然不长，但是让我很感动。",
        "py": "Suīrán bù cháng, dànshì ràng wǒ hěn gǎndòng.",
        "vn": "Tuy không dài, nhưng khiến tôi rất cảm động."
      }
    ],
    "hanzi": [
      {
        "c": "动",
        "p": "dòng",
        "type": "左右结构 · Trái-phải (giản thể)",
        "st": 6,
        "ord": "云 trái → 力 phải",
        "rad": "力 (lực – sức mạnh)",
        "mean": "động, xúc động",
        "tip": "Bộ lực 力 (sức mạnh, tác động) → chịu tác động mà THAY ĐỔI trạng thái, mở rộng thành CẢM ĐỘNG (cảm xúc bị lay động).",
        "cf": "动 dễ nhầm với 云 (yún – \"mây\", chỉ khác bộ 力\")",
        "w": "感动 / 运动 / 动作"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không những khiến tôi cảm động, mà còn khiến tôi hiểu ra nhiều điều.",
        "answer": "不仅让我感动，还让我明白了很多道理。",
        "answerPy": "Bùjǐn ràng wǒ gǎndòng, hái ràng wǒ míngbaile hěn duō dàolǐ.",
        "note": "不仅……还…… — không những … mà còn ….",
        "pair": "不仅……还……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù chỉ là một chuyện nhỏ bình thường, nó cũng có thể khiến người ta cảm động.",
        "answer": "即使只是一件普通的小事，它也能让人感动。",
        "answerPy": "Jíshǐ zhǐshì yí jiàn pǔtōng de xiǎo shì, tā yě néng ràng rén gǎndòng.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Bị lay động tình cảm. Câu bị động hay gặp: 被……感动.",
    "colloFull": [
      {
        "zh": "很感动",
        "py": "hěn gǎndòng",
        "vn": "rất cảm động"
      },
      {
        "zh": "让人感动",
        "py": "ràng rén gǎndòng",
        "vn": "khiến người ta cảm động"
      },
      {
        "zh": "被……感动",
        "py": "bèi… gǎndòng",
        "vn": "bị/được … làm cảm động"
      },
      {
        "zh": "感动得哭了",
        "py": "gǎndòng de kū le",
        "vn": "cảm động đến phát khóc"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 非常 + 感动",
        "m": "Ai đó rất cảm động"
      },
      {
        "s": "……让 / 使 + người + 感动",
        "m": "… khiến ai cảm động"
      }
    ]
  },
  {
    "n": 27,
    "zh": "自然",
    "py": "zìrán",
    "pos": "Phó từ",
    "vn": "đương nhiên, hiển nhiên",
    "hv": "tự nhiên",
    "em": "🌿",
    "lesson": 2,
    "explain": [
      "Diễn tả điều xảy ra một cách hợp lý, không cần cố gắng, đương nhiên là vậy."
    ],
    "usage": "Phó từ, đứng trước động từ: 会很自然地 + V.",
    "collo": [
      "很自然地",
      "自然想起",
      "大自然"
    ],
    "ex_zh": "说到结婚，人们就会很自然地想起爱情。",
    "ex_py": "Shuōdào jié hūn, rénmen jiù huì hěn zìrán de xiǎngqǐ àiqíng.",
    "ex_vn": "Nói đến kết hôn, người ta sẽ tự nhiên nghĩ đến tình yêu.",
    "exList": [
      {
        "zh": "说到结婚，人们就会很自然地想起爱情。",
        "py": "Shuōdào jié hūn, rénmen jiù huì hěn zìrán de xiǎngqǐ àiqíng.",
        "vn": "Nói đến kết hôn, người ta sẽ tự nhiên nghĩ đến tình yêu."
      },
      {
        "zh": "两个人熟悉了以后，说话就自然多了。",
        "py": "Liǎng ge rén shúxile yǐhòu, shuōhuà jiù zìrán duō le.",
        "vn": "Sau khi hai người quen nhau, nói chuyện tự nhiên hơn nhiều."
      },
      {
        "zh": "他喜欢周末去大自然里走走。",
        "py": "Tā xǐhuan zhōumò qù dàzìrán li zǒuzou.",
        "vn": "Anh ấy thích cuối tuần đi dạo trong thiên nhiên."
      }
    ],
    "hanzi": [
      {
        "c": "然",
        "p": "rán",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "月+犬 trên → 灬 dưới",
        "rad": "灬 (hỏa – lửa)",
        "mean": "như vậy, đúng vậy",
        "tip": "Bộ lửa 灬 (đốt thịt 月+犬) vốn nghĩa gốc là \"đốt cháy\", mượn âm để chỉ Ý NHƯ VẬY, ĐÚNG LÀ VẬY, mở rộng thành TỰ NHIÊN.",
        "cf": "燃 (rán – \"cháy\", thêm bộ 火\" bên trái, giữ nghĩa gốc)",
        "w": "自然 / 然后 / 突然"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vừa mới nói đến kỳ nghỉ, mọi người tự nhiên nghĩ ngay đến việc đi du lịch.",
        "answer": "刚说到放假，大家就自然想到了去旅游。",
        "answerPy": "Gāng shuōdào fàngjià, dàjiā jiù zìrán xiǎngdàole qù lǚyóu.",
        "note": "刚 — vừa mới, ôn lại điểm ngữ pháp của bài.",
        "pair": "刚……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Về mặt cách nói chuyện, cô ấy ngày càng tự nhiên hơn.",
        "answer": "在说话上，她越来越自然了。",
        "answerPy": "Zài shuōhuà shang, tā yuè lái yuè zìrán le.",
        "note": "在……上 — về phương diện.",
        "pair": "越……越……"
      }
    ],
    "note": "Ở bài này là PHÓ TỪ (đương nhiên). Còn 大自然 là danh từ (thiên nhiên).",
    "colloFull": [
      {
        "zh": "很自然地",
        "py": "hěn zìrán de",
        "vn": "một cách rất tự nhiên"
      },
      {
        "zh": "自然想起",
        "py": "zìrán xiǎngqǐ",
        "vn": "tự nhiên nhớ tới"
      },
      {
        "zh": "大自然",
        "py": "dà zìrán",
        "vn": "thiên nhiên"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 自然 + 会 / 就 + V",
        "m": "Ai đó đương nhiên sẽ làm gì"
      },
      {
        "s": "很自然地 + V",
        "m": "Làm gì một cách rất tự nhiên"
      }
    ]
  },
  {
    "n": 28,
    "zh": "原因",
    "py": "yuányīn",
    "pos": "Danh từ",
    "vn": "nguyên nhân",
    "hv": "nguyên nhân",
    "em": "❓",
    "lesson": 2,
    "explain": [
      "Điều dẫn đến một kết quả, sự việc nào đó."
    ],
    "usage": "Danh từ; thường đi với 重要原因, 主要原因.",
    "collo": [
      "重要原因",
      "主要原因",
      "原因是……"
    ],
    "ex_zh": "爱情是结婚的重要原因。",
    "ex_py": "Àiqíng shì jié hūn de zhòngyào yuányīn.",
    "ex_vn": "Tình yêu là nguyên nhân quan trọng của việc kết hôn.",
    "exList": [
      {
        "zh": "爱情是结婚的重要原因，但只有爱情是不够的。",
        "py": "Àiqíng shì jié hūn de zhòngyào yuányīn, dàn zhǐyǒu àiqíng shì bú gòu de.",
        "vn": "Tình yêu là nguyên nhân quan trọng của việc kết hôn, nhưng chỉ có tình yêu thôi thì không đủ."
      },
      {
        "zh": "他没告诉我原因。",
        "py": "Tā méi gàosu wǒ yuányīn.",
        "vn": "Anh ấy không nói cho tôi biết nguyên nhân."
      },
      {
        "zh": "这就是他离开的主要原因。",
        "py": "Zhè jiù shì tā líkāi de zhǔyào yuányīn.",
        "vn": "Đây chính là nguyên nhân chính khiến anh ấy rời đi."
      }
    ],
    "hanzi": [
      {
        "c": "原",
        "p": "yuán",
        "type": "半包围结构 · Bán bao vây",
        "st": 10,
        "ord": "厂 bao ngoài → 白+小 trong",
        "rad": "厂 (hán – vách núi)",
        "mean": "nguồn gốc, ban đầu",
        "tip": "Hình tượng dòng nước chảy ra từ khe núi 厂 → NGUỒN GỐC, mở rộng thành NGUYÊN NHÂN (nguồn gốc của sự việc).",
        "cf": "源 (yuán – \"nguồn\", thêm bộ 氵\" giữ nghĩa gốc \"nguồn nước\")",
        "w": "原因 / 原来 / 原谅"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có hiểu rõ nguyên nhân, chúng ta mới có thể giải quyết vấn đề.",
        "answer": "只有弄清楚原因，我们才能解决问题。",
        "answerPy": "Zhǐyǒu nòngqīngchu yuányīn, wǒmen cái néng jiějué wèntí.",
        "note": "只有……才…… — chỉ có … mới ….",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù nguyên nhân rất đơn giản, kết quả cũng rất nghiêm trọng.",
        "answer": "即使原因很简单，结果也很严重。",
        "answerPy": "Jíshǐ yuányīn hěn jiǎndān, jiéguǒ yě hěn yánzhòng.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Trái nghĩa: 结果 (kết quả). 原因是…… nêu lý do.",
    "colloFull": [
      {
        "zh": "重要原因",
        "py": "zhòngyào yuányīn",
        "vn": "nguyên nhân quan trọng"
      },
      {
        "zh": "主要原因",
        "py": "zhǔyào yuányīn",
        "vn": "nguyên nhân chủ yếu"
      },
      {
        "zh": "原因是……",
        "py": "yuányīn shì…",
        "vn": "nguyên nhân là…"
      },
      {
        "zh": "找出原因",
        "py": "zhǎochū yuányīn",
        "vn": "tìm ra nguyên nhân"
      }
    ],
    "patterns": [
      {
        "s": "……的原因是……",
        "m": "Nguyên nhân của … là …"
      },
      {
        "s": "因为 + nguyên nhân，所以 + kết quả",
        "m": "Vì … nên …"
      }
    ]
  },
  {
    "n": 29,
    "zh": "互相",
    "py": "hùxiāng",
    "pos": "Phó từ",
    "vn": "lẫn nhau, qua lại",
    "hv": "hỗ tương",
    "em": "🔄",
    "lesson": 2,
    "explain": [
      "Diễn tả hành động qua lại giữa hai bên, cả hai bên cùng làm với nhau."
    ],
    "usage": "Phó từ, đứng trước động từ: 互相 + V (互相理解, 互相关心, 互相吸引).",
    "collo": [
      "互相理解",
      "互相关心",
      "互相吸引"
    ],
    "ex_zh": "两个人还应该互相理解、互相关心。",
    "ex_py": "Liǎng ge rén hái yīnggāi hùxiāng lǐjiě, hùxiāng guānxīn.",
    "ex_vn": "Hai người còn nên hiểu nhau, quan tâm lẫn nhau.",
    "exList": [
      {
        "zh": "两个人还应该互相理解、互相关心，只有这样才能很好地生活在一起。",
        "py": "Liǎng ge rén hái yīnggāi hùxiāng lǐjiě, hùxiāng guānxīn, zhǐyǒu zhèyàng cái néng hěn hǎo de shēnghuó zài yìqǐ.",
        "vn": "Hai người còn nên hiểu nhau, quan tâm lẫn nhau, chỉ có như vậy mới có thể sống tốt cùng nhau."
      },
      {
        "zh": "更需要性格上互相吸引。",
        "py": "Gèng xūyào xìnggé shang hùxiāng xīyǐn.",
        "vn": "Càng cần sự thu hút lẫn nhau về tính cách."
      },
      {
        "zh": "朋友之间要互相帮助。",
        "py": "Péngyou zhījiān yào hùxiāng bāngzhù.",
        "vn": "Bạn bè với nhau phải giúp đỡ lẫn nhau."
      }
    ],
    "hanzi": [
      {
        "c": "互",
        "p": "hù",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "nét liền, hình sợi dây tết chéo",
        "rad": "一 (nhất)",
        "mean": "lẫn nhau, qua lại",
        "tip": "Hình tượng cổ mô phỏng một dụng cụ đan XEN KẼ qua lại → mở rộng nghĩa thành LẪN NHAU.",
        "cf": "瓦 (wǎ – \"ngói\", hình gần giống nhưng không liên quan nghĩa)",
        "w": "互相 / 相互 / 互联网"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ có hiểu nhau, hai người mới có thể sống hạnh phúc cùng nhau.",
        "answer": "只有互相理解，两个人才能幸福地生活在一起。",
        "answerPy": "Zhǐyǒu hùxiāng lǐjiě, liǎng ge rén cái néng xìngfú de shēnghuó zài yìqǐ.",
        "note": "只有……才…… — chỉ có … mới ….",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Hai người ở bên nhau, không những tính cách phải hút nhau, mà còn phải hiểu cho nhau.",
        "answer": "两个人在一起，不仅性格要互相吸引，也要互相理解。",
        "answerPy": "Liǎng gè rén zài yìqǐ, bùjǐn xìnggé yào hùxiāng xīyǐn, yě yào hùxiāng lǐjiě.",
        "note": "互相 chỉ đi với động từ hai âm tiết: 互相理解 ✓, 互相帮 ✗.",
        "pair": "不仅……也……"
      }
    ],
    "note": "Phó từ, đứng TRƯỚC động từ hai âm tiết: 互相帮助 (không nói 互相帮).",
    "colloFull": [
      {
        "zh": "互相理解",
        "py": "hùxiāng lǐjiě",
        "vn": "hiểu nhau"
      },
      {
        "zh": "互相关心",
        "py": "hùxiāng guānxīn",
        "vn": "quan tâm lẫn nhau"
      },
      {
        "zh": "互相吸引",
        "py": "hùxiāng xīyǐn",
        "vn": "thu hút lẫn nhau"
      },
      {
        "zh": "互相帮助",
        "py": "hùxiāng bāngzhù",
        "vn": "giúp đỡ lẫn nhau"
      }
    ],
    "patterns": [
      {
        "s": "Sub (số nhiều) + 互相 + V (2 âm tiết)",
        "m": "Họ … lẫn nhau"
      },
      {
        "s": "只有互相……，才能……",
        "m": "Chỉ có … lẫn nhau mới có thể …"
      }
    ]
  },
  {
    "n": 30,
    "zh": "吸引",
    "py": "xīyǐn",
    "pos": "Động từ",
    "vn": "hấp dẫn, thu hút",
    "hv": "hấp dẫn",
    "em": "🧲",
    "lesson": 2,
    "explain": [
      "Làm cho người khác chú ý đến, muốn tiếp cận vì có sức hút."
    ],
    "usage": "Động từ, mang tân ngữ trực tiếp: 吸引 + Đối tượng.",
    "collo": [
      "互相吸引",
      "很吸引人",
      "吸引游客"
    ],
    "ex_zh": "更需要性格上互相吸引。",
    "ex_py": "Gèng xūyào xìnggé shang hùxiāng xīyǐn.",
    "ex_vn": "Càng cần sự thu hút lẫn nhau về tính cách.",
    "exList": [
      {
        "zh": "更需要性格上互相吸引。",
        "py": "Gèng xūyào xìnggé shang hùxiāng xīyǐn.",
        "vn": "Càng cần sự thu hút lẫn nhau về tính cách."
      },
      {
        "zh": "那个地方特别漂亮，每年都会吸引很多国内外的游客。",
        "py": "Nàge dìfang tèbié piàoliang, měinián dōu huì xīyǐn hěn duō guónèiwài de yóukè.",
        "vn": "Nơi đó rất đẹp, mỗi năm đều thu hút nhiều du khách trong và ngoài nước."
      },
      {
        "zh": "她的幽默很吸引我。",
        "py": "Tā de yōumò hěn xīyǐn wǒ.",
        "vn": "Sự hài hước của cô ấy rất thu hút tôi."
      }
    ],
    "hanzi": [
      {
        "c": "吸",
        "p": "xī",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "口 (khẩu) trái → 及 (cập) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "hút vào",
        "tip": "Bộ miệng 口 (hít thở) + 及 (đạt tới, kéo tới) → dùng MIỆNG kéo không khí vào = HÍT, mở rộng thành THU HÚT.",
        "cf": "吸 dễ nhầm với 极 (jí – \"cực kỳ\", bộ khác)",
        "w": "吸引 / 呼吸 / 吸烟"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không những phong cảnh ở đó đẹp, mà văn hóa cũng rất thu hút du khách.",
        "answer": "那儿不仅风景漂亮，文化也很吸引游客。",
        "answerPy": "Nàr bùjǐn fēngjǐng piàoliang, wénhuà yě hěn xīyǐn yóukè.",
        "note": "不仅……也…… — không những … mà còn ….",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù đã quen nhau lâu rồi, anh ấy vẫn luôn bị cô ấy thu hút.",
        "answer": "即使认识很久了，他也一直被她吸引。",
        "answerPy": "Jíshǐ rènshi hěn jiǔ le, tā yě yìzhí bèi tā xīyǐn.",
        "note": "即使……也…… kết hợp với câu bị động 被.",
        "pair": "即使……也……"
      }
    ],
    "note": "Làm cho người khác chú ý và muốn đến gần.",
    "colloFull": [
      {
        "zh": "互相吸引",
        "py": "hùxiāng xīyǐn",
        "vn": "thu hút lẫn nhau"
      },
      {
        "zh": "很吸引人",
        "py": "hěn xīyǐn rén",
        "vn": "rất hấp dẫn"
      },
      {
        "zh": "吸引游客",
        "py": "xīyǐn yóukè",
        "vn": "thu hút du khách"
      },
      {
        "zh": "吸引注意",
        "py": "xīyǐn zhùyì",
        "vn": "thu hút sự chú ý"
      }
    ],
    "patterns": [
      {
        "s": "A + 吸引 + B",
        "m": "A thu hút B"
      },
      {
        "s": "……很吸引人",
        "m": "… rất hấp dẫn"
      }
    ]
  },
  {
    "n": 31,
    "zh": "幽默",
    "py": "yōumò",
    "pos": "Tính từ",
    "vn": "hóm hỉnh, khôi hài",
    "hv": "u mặc",
    "em": "😂",
    "lesson": 2,
    "explain": [
      "Có khả năng nói/làm cho người khác thấy vui, buồn cười một cách nhẹ nhàng, thông minh."
    ],
    "usage": "Tính từ; thường đi với 很幽默的人, 幽默感.",
    "collo": [
      "很幽默",
      "幽默的人",
      "有幽默感"
    ],
    "ex_zh": "我丈夫是个很幽默的人。",
    "ex_py": "Wǒ zhàngfu shì ge hěn yōumò de rén.",
    "ex_vn": "Chồng tôi là một người rất hóm hỉnh.",
    "exList": [
      {
        "zh": "我丈夫是个很幽默的人。",
        "py": "Wǒ zhàngfu shì ge hěn yōumò de rén.",
        "vn": "Chồng tôi là một người rất hóm hỉnh."
      },
      {
        "zh": "每个人都希望自己有幽默感。",
        "py": "Měi ge rén dōu xīwàng zìjǐ yǒu yōumògǎn.",
        "vn": "Ai cũng mong mình có khiếu hài hước."
      },
      {
        "zh": "幽默能帮助人们打开友谊的大门。",
        "py": "Yōumò néng bāngzhù rénmen dǎkāi yǒuyì de dàmén.",
        "vn": "Sự hóm hỉnh có thể giúp người ta mở cánh cửa tình bạn."
      }
    ],
    "hanzi": [
      {
        "c": "幽",
        "p": "yōu",
        "type": "半包围结构 · Bán bao vây",
        "st": 9,
        "ord": "山 bao ngoài → 幺+幺 trong",
        "rad": "山 (sơn – núi)",
        "mean": "sâu kín, u tịch",
        "tip": "Bộ núi 山 bao quanh hai sợi tơ nhỏ 幺幺 (mờ nhạt) → nơi SÂU KÍN trong núi, mượn âm để phiên âm từ \"humor\" thành 幽默.",
        "cf": "幽 dễ nhầm với 幼 (yòu – \"trẻ nhỏ\", bộ 力 khác)",
        "w": "幽默 / 幽静 / 幽会"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không những anh ấy hóm hỉnh, mà tính cách cũng rất tốt.",
        "answer": "他不仅很幽默，性格也很好。",
        "answerPy": "Tā bùjǐn hěn yōumò, xìnggé yě hěn hǎo.",
        "note": "不仅……也…… — không những … mà còn ….",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù chuyện rất bình thường, anh ấy nói ra cũng rất hài hước.",
        "answer": "即使是很普通的事情，他说出来也很幽默。",
        "answerPy": "Jíshǐ shì hěn pǔtōng de shìqing, tā shuō chulai yě hěn yōumò.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "Từ mượn âm (humour). Danh từ hoá: 幽默感 (khiếu hài hước).",
    "colloFull": [
      {
        "zh": "很幽默",
        "py": "hěn yōumò",
        "vn": "rất hóm hỉnh"
      },
      {
        "zh": "幽默的人",
        "py": "yōumò de rén",
        "vn": "người hài hước"
      },
      {
        "zh": "有幽默感",
        "py": "yǒu yōumògǎn",
        "vn": "có khiếu hài hước"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 很 / 特别 + 幽默",
        "m": "Ai đó rất hóm hỉnh"
      },
      {
        "s": "Sub + 很有幽默感",
        "m": "Ai đó rất có khiếu hài hước"
      }
    ]
  },
  {
    "n": 32,
    "zh": "脾气",
    "py": "píqi",
    "pos": "Danh từ",
    "vn": "tính tình, tính khí",
    "hv": "tì khí",
    "em": "😤",
    "lesson": 2,
    "explain": [
      "Tính cách, thói quen phản ứng cảm xúc của một người, đặc biệt là dễ/khó nổi giận."
    ],
    "usage": "Danh từ; thường đi với 脾气好/不错/大: 脾气也不错.",
    "collo": [
      "脾气不错",
      "发脾气",
      "脾气好"
    ],
    "ex_zh": "而且他的脾气也不错。",
    "ex_py": "Érqiě tā de píqi yě búcuò.",
    "ex_vn": "Hơn nữa tính tình anh ấy cũng khá tốt.",
    "exList": [
      {
        "zh": "而且他的脾气也不错，结婚快十年了，我们俩几乎没因为什么事红过脸。",
        "py": "Érqiě tā de píqi yě búcuò, jié hūn kuài shí nián le, wǒmen liǎ jīhū méi yīnwèi shénme shì hóngguo liǎn.",
        "vn": "Hơn nữa tính tình anh ấy cũng khá tốt, kết hôn gần mười năm rồi, hai chúng tôi hầu như chưa từng cãi nhau vì chuyện gì."
      },
      {
        "zh": "他虽然脾气很大，但工作很认真。",
        "py": "Tā suīrán píqi hěn dà, dàn gōngzuò hěn rènzhēn.",
        "vn": "Tuy anh ấy tính khí hơi nóng nảy, nhưng làm việc rất nghiêm túc."
      },
      {
        "zh": "孩子为什么喜欢发脾气呢？",
        "py": "Háizi wèishénme xǐhuan fā píqi ne?",
        "vn": "Vì sao trẻ con thích nổi cáu vậy?"
      }
    ],
    "hanzi": [
      {
        "c": "脾",
        "p": "pí",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "月 (nhục) trái → 卑 (ti) phải",
        "rad": "月 (nhục – thịt, bộ phận cơ thể)",
        "mean": "lá lách",
        "tip": "Bộ thịt 月 (bộ phận cơ thể) + 卑 (biểu âm) → LÁ LÁCH, theo y học cổ truyền lá lách liên quan đến tính khí, mở rộng thành TÍNH TÌNH.",
        "cf": "脾 dễ nhầm với 啤 (pí – \"bia\", bộ 口 khác)",
        "w": "脾气 / 脾胃"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tính khí anh ấy xưa nay đều rất tốt, gặp chuyện gì cũng chưa từng nổi nóng.",
        "answer": "他脾气从来都很好，不管遇到什么事都没发过脾气。",
        "answerPy": "Tā píqi cónglái dōu hěn hǎo, bùguǎn yùdào shénme shì dōu méi fāguo píqi.",
        "note": "发脾气 là từ ly hợp: 发过脾气, 发了一次脾气.",
        "pair": "不管……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cho dù tính tình anh ấy không tốt lắm, tôi vẫn rất thích anh ấy.",
        "answer": "即使他脾气不太好，我也还是很喜欢他。",
        "answerPy": "Jíshǐ tā píqi bú tài hǎo, wǒ yě háishi hěn xǐhuan tā.",
        "note": "即使……也…… — cho dù … vẫn ….",
        "pair": "即使……也……"
      }
    ],
    "note": "发脾气 = nổi nóng (ly hợp từ: 发了脾气).",
    "colloFull": [
      {
        "zh": "脾气好",
        "py": "píqi hǎo",
        "vn": "tính tình tốt"
      },
      {
        "zh": "脾气不错",
        "py": "píqi búcuò",
        "vn": "tính nết khá"
      },
      {
        "zh": "发脾气",
        "py": "fā píqi",
        "vn": "nổi nóng"
      },
      {
        "zh": "脾气不好",
        "py": "píqi bù hǎo",
        "vn": "tính khí không tốt"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 脾气 + 好 / 不好",
        "m": "Tính tình của ai đó thế nào"
      },
      {
        "s": "Sub + 对 + người + 发脾气",
        "m": "Ai đó nổi nóng với ai"
      }
    ]
  },
  {
    "n": 33,
    "zh": "孙月",
    "py": "Sūn Yuè",
    "pos": "Danh từ riêng",
    "vn": "Tôn Nguyệt (tên người)",
    "hv": "Tôn Nguyệt",
    "em": "👩",
    "lesson": 1,
    "explain": [
      "Tên riêng của một nhân vật nữ trong bài hội thoại 1."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "孙月说",
      "跟孙月聊天"
    ],
    "ex_zh": "孙月：听说你男朋友李进跟你是一个学校的，是你同学吗？",
    "ex_py": "Sūn Yuè: Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de, shì nǐ tóngxué ma?",
    "ex_vn": "Tôn Nguyệt: Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu, có phải là bạn học của cậu không?",
    "exList": [
      {
        "zh": "孙月：听说你男朋友李进跟你是一个学校的，是你同学吗？",
        "py": "Sūn Yuè: Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de, shì nǐ tóngxué ma?",
        "vn": "Tôn Nguyệt: Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu, có phải là bạn học của cậu không?"
      }
    ],
    "note": "Tên người: họ 孙 (Tôn) + tên 月 (Nguyệt)."
  },
  {
    "n": 34,
    "zh": "王静",
    "py": "Wáng Jìng",
    "pos": "Danh từ riêng",
    "vn": "Vương Tịnh (tên người)",
    "hv": "Vương Tĩnh",
    "em": "👩",
    "lesson": 1,
    "explain": [
      "Tên riêng của nhân vật nữ chính, xuất hiện xuyên suốt cả 3 đoạn hội thoại của bài."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "王静说",
      "王静跟李进"
    ],
    "ex_zh": "王静：是的，他学的是新闻，我学的是法律。",
    "ex_py": "Wáng Jìng: Shì de, tā xué de shì xīnwén, wǒ xué de shì fǎlǜ.",
    "ex_vn": "Vương Tịnh: Đúng vậy, anh ấy học báo chí, mình học luật.",
    "exList": [
      {
        "zh": "王静：是的，他学的是新闻，我学的是法律。",
        "py": "Wáng Jìng: Shì de, tā xué de shì xīnwén, wǒ xué de shì fǎlǜ.",
        "vn": "Vương Tịnh: Đúng vậy, anh ấy học báo chí, mình học luật."
      }
    ],
    "note": "Tên người: họ 王 (Vương) + tên 静 (Tịnh)."
  },
  {
    "n": 35,
    "zh": "李进",
    "py": "Lǐ Jìn",
    "pos": "Danh từ riêng",
    "vn": "Lý Tiến (tên người)",
    "hv": "Lý Tiến",
    "em": "🧑",
    "lesson": 1,
    "explain": [
      "Tên riêng của bạn trai Vương Tịnh, nhân vật được nhắc đến trong hội thoại 1 và 2."
    ],
    "usage": "Danh từ riêng chỉ tên người.",
    "collo": [
      "李进跟你",
      "认识李进"
    ],
    "ex_zh": "听说你男朋友李进跟你是一个学校的。",
    "ex_py": "Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de.",
    "ex_vn": "Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu.",
    "exList": [
      {
        "zh": "听说你男朋友李进跟你是一个学校的。",
        "py": "Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de.",
        "vn": "Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu."
      }
    ],
    "note": "Tên người: họ 李 (Lý) + tên 进 (Tiến)."
  },
  {
    "n": 36,
    "zh": "李",
    "py": "Lǐ",
    "pos": "Danh từ riêng",
    "vn": "Lý (họ)",
    "hv": "Lý",
    "em": "🧑‍🏫",
    "lesson": 1,
    "explain": [
      "Họ của giáo viên (李老师) và cũng của李进; trong bài dùng làm 李老师 — cô/thầy giáo Lý."
    ],
    "usage": "Danh từ riêng chỉ họ người, thường ghép với 老师 thành 李老师.",
    "collo": [
      "李老师",
      "李老师说"
    ],
    "ex_zh": "王静跟李老师聊她要结婚的事情。",
    "ex_py": "Wáng Jìng gēn Lǐ lǎoshī liáo tā yào jié hūn de shìqing.",
    "ex_vn": "Vương Tịnh nói chuyện với cô Lý về việc mình sắp kết hôn.",
    "exList": [
      {
        "zh": "王静跟李老师聊她要结婚的事情。",
        "py": "Wáng Jìng gēn Lǐ lǎoshī liáo tā yào jié hūn de shìqing.",
        "vn": "Vương Tịnh nói chuyện với cô Lý về việc mình sắp kết hôn."
      }
    ],
    "note": "Một trong những họ phổ biến nhất Trung Quốc. 李老师 = thầy/cô Lý."
  },
  {
    "n": 37,
    "zh": "高",
    "py": "Gāo",
    "pos": "Danh từ riêng",
    "vn": "Cao (họ)",
    "hv": "Cao",
    "em": "🧑‍🏫",
    "lesson": 1,
    "explain": [
      "Họ của nhân vật 高老师 trong hội thoại 3, nói chuyện với 李老师 về cuộc sống sau khi kết hôn."
    ],
    "usage": "Danh từ riêng chỉ họ người, thường ghép với 老师 thành 高老师.",
    "collo": [
      "高老师",
      "高老师问"
    ],
    "ex_zh": "高老师：听说您跟妻子结婚快二十年了？",
    "ex_py": "Gāo lǎoshī: Tīngshuō nín gēn qīzi jié hūn kuài èrshí nián le?",
    "ex_vn": "Thầy Cao: Nghe nói thầy kết hôn với vợ đã gần hai mươi năm rồi?",
    "exList": [
      {
        "zh": "高老师：听说您跟妻子结婚快二十年了？",
        "py": "Gāo lǎoshī: Tīngshuō nín gēn qīzi jié hūn kuài èrshí nián le?",
        "vn": "Thầy Cao: Nghe nói thầy kết hôn với vợ đã gần hai mươi năm rồi?"
      }
    ],
    "note": "Vừa là họ (Cao) vừa là tính từ 高 = cao."
  }
];

var dialogData = [
  {scene:'孙月和王静聊王静的男朋友 · Tôn Nguyệt hỏi Vương Tịnh về bạn trai',
   preQuiz:[
     {q:'王静学的是什么专业？',opts:['法律','新闻','历史'],ans:0},
     {q:'王静和李进是怎么认识的？',opts:['在一次足球比赛中认识的','是同学介绍的','在网上认识的'],ans:0},
     {q:'王静为什么喜欢李进？',opts:['他不仅足球踢得好，性格也不错','他很有钱','他长得很帅'],ans:0},
   ],
   lines:[
     {sp:1,zh:'听说你男朋友李进跟你是一个学校的，是你同学吗？',py:'Tīngshuō nǐ nánpéngyou Lǐ Jìn gēn nǐ shì yí ge xuéxiào de, shì nǐ tóngxué ma?',vn:'Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu, có phải là bạn học của cậu không?'},
     {sp:0,zh:'是的，他学的是新闻，我学的是法律，我和他不是一个班。',py:'Shì de, tā xué de shì xīnwén, wǒ xué de shì fǎlǜ, wǒ hé tā bú shì yí ge bān.',vn:'Đúng vậy, anh ấy học báo chí, mình học luật, mình và anh ấy không cùng lớp.'},
     {sp:1,zh:'那你们俩是怎么认识的？',py:'Nà nǐmen liǎ shì zěnme rènshi de?',vn:'Vậy hai người quen nhau thế nào?'},
     {sp:0,zh:'我们是在一次足球比赛中认识的。我们班跟他们班比赛，他一个人踢进两个球，我对他印象很深，后来就慢慢熟悉了。',py:'Wǒmen shì zài yí cì zúqiú bǐsài zhōng rènshi de. Wǒmen bān gēn tāmen bān bǐsài, tā yí ge rén tījìn liǎng ge qiú, wǒ duì tā yìnxiàng hěn shēn, hòulái jiù mànman shúxi le.',vn:'Bọn mình quen nhau trong một trận đấu bóng đá. Lớp mình đấu với lớp anh ấy, anh ấy một mình đá lọt hai bàn, mình có ấn tượng rất sâu sắc về anh ấy, sau đó thì dần dần quen thân.'},
     {sp:1,zh:'你为什么喜欢他？',py:'Nǐ wèi shénme xǐhuan tā?',vn:'Cậu vì sao thích anh ấy?'},
     {sp:0,zh:'他不仅足球踢得好，性格也不错。',py:'Tā bùjǐn zúqiú tī de hǎo, xìnggé yě búcuò.',vn:'Anh ấy không những đá bóng giỏi, tính cách cũng tốt.'},
   ]},
  {scene:'王静跟李老师聊她要结婚的事情 · Vương Tịnh báo tin sắp kết hôn với cô Lý',
   preQuiz:[
     {q:'王静下个月几号结婚？',opts:['5号','9号','10号'],ans:0},
     {q:'王静和李进认识多长时间了？',opts:['一个月','半年','一年'],ans:0},
     {q:'王静和李进有哪些共同的爱好？',opts:['打球、唱歌、做菜','看电影、旅游','运动、读书'],ans:0},
   ],
   lines:[
     {sp:0,zh:'李老师，我下个月5号就要结婚了。',py:'Lǐ lǎoshī, wǒ xià ge yuè wǔ hào jiù yào jié hūn le.',vn:'Cô Lý ơi, tháng sau ngày 5 con sắp kết hôn rồi.'},
     {sp:1,zh:'你是在开玩笑吧？你们不是才认识一个月？',py:'Nǐ shì zài kāi wánxiào ba? Nǐmen bú shì cái rènshi yí ge yuè?',vn:'Con đang đùa đấy à? Các con chẳng phải mới quen nhau một tháng sao?'},
     {sp:0,zh:'虽然我们认识的时间不长，但我从来没这么快乐过。',py:'Suīrán wǒmen rènshi de shíjiān bù cháng, dàn wǒ cónglái méi zhème kuàilèguo.',vn:'Tuy chúng con quen nhau chưa lâu, nhưng con từ trước đến giờ chưa từng vui như vậy.'},
     {sp:1,zh:'两个人在一起，最好能有共同的兴趣和爱好。',py:'Liǎng ge rén zài yìqǐ, zuìhǎo néng yǒu gòngtóng de xìngqù hé àihào.',vn:'Hai người ở bên nhau, tốt nhất là nên có sở thích chung.'},
     {sp:0,zh:'我们有很多共同的爱好，经常一起打球、唱歌、做菜。',py:'Wǒmen yǒu hěn duō gòngtóng de àihào, jīngcháng yìqǐ dǎqiú, chàng gē, zuò cài.',vn:'Chúng con có rất nhiều sở thích chung, thường cùng nhau chơi thể thao, hát, nấu ăn.'},
     {sp:1,zh:'看来你真的找到适合你的人了。祝你们幸福！',py:'Kànlái nǐ zhēn de zhǎodào shìhé nǐ de rén le. Zhù nǐmen xìngfú!',vn:'Xem ra con thật sự đã tìm được người phù hợp với mình rồi. Chúc hai con hạnh phúc!'},
   ]},
  {scene:'高老师和李老师聊结婚后的生活 · Thầy Cao và cô Lý nói về cuộc sống sau khi kết hôn',
   preQuiz:[
     {q:'李老师和妻子结婚多少年了？',opts:['快二十年','十年','五年'],ans:0},
     {q:'高老师和丈夫刚结婚时感觉怎么样？',opts:['每天都觉得很新鲜','觉得很无聊','觉得很累'],ans:0},
     {q:'李老师说两个人怎样才能更好地一起生活？',opts:['接受对方的缺点','每天都很浪漫','不要在一起太多时间'],ans:0},
   ],
   lines:[
     {sp:0,zh:'听说您跟妻子结婚快二十年了？',py:'Tīngshuō nín gēn qīzi jié hūn kuài èrshí nián le?',vn:'Nghe nói thầy kết hôn với vợ đã gần hai mươi năm rồi?'},
     {sp:1,zh:'到6月9号，我们就结婚二十年了。这么多年，我们的生活一直挺幸福的。',py:'Dào liùyuè jiǔ hào, wǒmen jiù jié hūn èrshí nián le. Zhème duō nián, wǒmen de shēnghuó yìzhí tǐng xìngfú de.',vn:'Đến ngày 9 tháng 6, chúng tôi sẽ kết hôn được hai mươi năm. Bấy nhiêu năm nay, cuộc sống của chúng tôi luôn khá hạnh phúc.'},
     {sp:0,zh:'我和丈夫刚结婚的时候，每天都觉得很新鲜，在一起有说不完的话。但是现在……',py:'Wǒ hé zhàngfu gāng jié hūn de shíhou, měitiān dōu juéde hěn xīnxiān, zài yìqǐ yǒu shuō bu wán de huà. Dànshì xiànzài……',vn:'Tôi và chồng lúc vừa mới kết hôn, ngày nào cũng cảm thấy mới mẻ, ở bên nhau nói chuyện mãi không hết. Nhưng bây giờ……'},
     {sp:1,zh:'两个人共同生活，只有浪漫和新鲜感是不够的。',py:'Liǎng ge rén gòngtóng shēnghuó, zhǐ yǒu làngmàn hé xīnxiāngǎn shì bú gòu de.',vn:'Hai người sống chung, chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ.'},
     {sp:0,zh:'您说得对！我现在每天看到的都是他的缺点。',py:'Nín shuō de duì! Wǒ xiànzài měitiān kàndào de dōu shì tā de quēdiǎn.',vn:'Thầy nói đúng đấy! Bây giờ mỗi ngày tôi nhìn thấy đều là khuyết điểm của anh ấy.'},
     {sp:1,zh:'两个人在一起时间长了，就会有很多问题。只有接受了他的缺点，你们才能更好地一起生活。',py:'Liǎng ge rén zài yìqǐ shíjiān cháng le, jiù huì yǒu hěn duō wèntí. Zhǐyǒu jiēshòule tā de quēdiǎn, nǐmen cái néng gèng hǎo de yìqǐ shēnghuó.',vn:'Hai người ở bên nhau lâu, sẽ nảy sinh nhiều vấn đề. Chỉ khi chấp nhận khuyết điểm của anh ấy, hai người mới có thể sống cùng nhau tốt hơn.'},
   ]},
  {scene:'短文 · 什么是浪漫？ (bài đọc — mỗi câu một dòng của người kể)',
   preQuiz:[
     {q:'年轻人觉得浪漫是什么？',opts:['她想要月亮时，你不会给她星星','有很多钱','天天送礼物'],ans:0},
     {q:'中年人觉得浪漫是什么？',opts:['即使加班到零点，家里也还亮着灯','每天都要说我爱你','每年过生日都要庆祝'],ans:0},
     {q:'作者认为真正让人感动的是什么？',opts:['生活中简单的爱情','浪漫的旅行','贵重的礼物'],ans:0},
   ],
   lines:[
     {sp:0,zh:'很多女孩子羡慕浪漫的爱情。那什么是浪漫呢？',py:'Hěn duō nǚháizi xiànmù làngmàn de àiqíng. Nà shénme shì làngmàn ne?',vn:'Nhiều cô gái ngưỡng mộ tình yêu lãng mạn. Vậy lãng mạn là gì?'},
     {sp:0,zh:'年轻人说：浪漫是她想要月亮时，你不会给她星星；',py:'Niánqīng rén shuō: Làngmàn shì tā xiǎng yào yuèliang shí, nǐ bú huì gěi tā xīngxing;',vn:'Người trẻ nói: lãng mạn là khi cô ấy muốn mặt trăng, bạn sẽ không đưa cho cô ấy ngôi sao;'},
     {sp:0,zh:'中年人说：浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯；',py:'Zhōngnián rén shuō: Làngmàn shì jíshǐ wǎnshang jiābān dào língdiǎn, dào jiā shí, zìjǐ jiā li yě hái liàngzhe dēng;',vn:'Người trung niên nói: lãng mạn là cho dù buổi tối tăng ca đến 0 giờ, khi về đến nhà, đèn nhà mình vẫn còn sáng;'},
     {sp:0,zh:'老年人说：浪漫其实就像歌中唱的那样，"我能想到最浪漫的事，就是和你一起慢慢变老。"',py:'Lǎonián rén shuō: Làngmàn qíshí jiù xiàng gē zhōng chàng de nàyàng, "Wǒ néng xiǎngdào zuì làngmàn de shì, jiù shì hé nǐ yìqǐ mànman biàn lǎo."',vn:'Người già nói: lãng mạn thật ra giống như trong bài hát, "Điều lãng mạn nhất tôi có thể nghĩ đến, chính là cùng em từ từ già đi."'},
     {sp:0,zh:'其实，让我们感动的，就是生活中简单的爱情。有时候，简单就是最大的幸福。',py:'Qíshí, ràng wǒmen gǎndòng de, jiù shì shēnghuó zhōng jiǎndān de àiqíng. Yǒu shíhou, jiǎndān jiù shì zuì dà de xìngfú.',vn:'Thực ra, điều khiến chúng ta cảm động, chính là tình yêu đơn giản trong cuộc sống. Có lúc, đơn giản chính là hạnh phúc lớn nhất.'},
   ]},
  {scene:'短文 · 我丈夫是个幽默的人 (bài đọc — lời kể của người vợ)',
   preQuiz:[
     {q:'两个人共同生活，除了浪漫的爱情，更需要什么？',opts:['性格上互相吸引','很多钱','漂亮的房子'],ans:0},
     {q:'"我"的丈夫是个什么样的人？',opts:['很幽默，脾气也不错','很严肃，不爱说话','很有钱，但很忙'],ans:0},
     {q:'"我们俩"结婚多少年了？',opts:['快十年','二十年','五年'],ans:0},
   ],
   lines:[
     {sp:0,zh:'说到结婚，人们就会很自然地想起爱情。爱情是结婚的重要原因，但两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。',py:'Shuōdào jié hūn, rénmen jiù huì hěn zìrán de xiǎngqǐ àiqíng. Àiqíng shì jié hūn de zhòngyào yuányīn, dàn liǎng ge rén gòngtóng shēnghuó, bùjǐn xūyào làngmàn de àiqíng, gèng xūyào xìnggé shang hùxiāng xīyǐn.',vn:'Nói đến kết hôn, người ta sẽ tự nhiên nghĩ đến tình yêu. Tình yêu là nguyên nhân quan trọng của việc kết hôn, nhưng hai người sống chung, không những cần tình yêu lãng mạn, mà càng cần sự thu hút lẫn nhau về tính cách.'},
     {sp:0,zh:'我丈夫是个很幽默的人。即使是很普通的事情，从他嘴里说出来也会变得很有意思。',py:'Wǒ zhàngfu shì ge hěn yōumò de rén. Jíshǐ shì hěn pǔtōng de shìqing, cóng tā zuǐ li shuō chulai yě huì biàn de hěn yǒu yìsi.',vn:'Chồng tôi là một người rất hóm hỉnh. Cho dù là chuyện rất bình thường, từ miệng anh ấy nói ra cũng trở nên rất thú vị.'},
     {sp:0,zh:'在我难过的时候，他总是有办法让我高兴起来。而且他的脾气也不错，结婚快十年了，我们俩几乎没因为什么事红过脸，很多人都特别羡慕我们。',py:'Zài wǒ nánguò de shíhou, tā zǒngshì yǒu bànfǎ ràng wǒ gāoxìng qilai. Érqiě tā de píqi yě búcuò, jié hūn kuài shí nián le, wǒmen liǎ jīhū méi yīnwèi shénme shì hóngguo liǎn, hěn duō rén dōu tèbié xiànmù wǒmen.',vn:'Lúc tôi buồn, anh ấy luôn có cách làm tôi vui lên. Hơn nữa tính tình anh ấy cũng khá tốt, kết hôn gần mười năm rồi, hai chúng tôi hầu như chưa từng cãi nhau vì chuyện gì, rất nhiều người đặc biệt ngưỡng mộ chúng tôi.'},
   ]},
];


// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'开',right:'玩笑'},
  {left:'留下很深的',right:'印象'},
  {left:'共同的',right:'爱好'},
  {left:'找到适合自己的',right:'人'},
  {left:'接受他的',right:'缺点'},
  {left:'互相',right:'理解'},
  {left:'性格上互相',right:'吸引'},
  {left:'不仅性格好，',right:'也很幽默。'},
  {left:'从来',right:'不迟到。'},
  {left:'即使很忙，',right:'也会给家人打电话。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'他',blank:'不仅',post:'性格好，长得也很帅。',hint:'(không những)',ans:'不仅'},
  {pre:'我们是',blank:'刚',post:'认识的，还不太熟悉。',hint:'(vừa mới)',ans:'刚'},
  {pre:'他工作很努力，',blank:'从来',post:'不迟到。',hint:'(từ trước đến nay)',ans:'从来'},
  {pre:'即使工作很忙，他',blank:'也',post:'会每天给妈妈打电话。',hint:'(cũng)',ans:'也'},
  {pre:'两个人在性格',blank:'上',post:'很像，所以很聊得来。',hint:'(về phương diện)',ans:'上'},
  {pre:'他一个人踢进两个球，我对他',blank:'印象',post:'很深。',hint:'(ấn tượng)',ans:'印象'},
  {pre:'我们刚搬来这儿，对环境还不太',blank:'熟悉',post:'。',hint:'(hiểu rõ, quen thuộc)',ans:'熟悉'},
  {pre:'两个人在一起，最好能有',blank:'共同',post:'的爱好。',hint:'(chung)',ans:'共同'},
  {pre:'看来你真的找到',blank:'适合',post:'你的人了。',hint:'(phù hợp)',ans:'适合'},
  {pre:'祝你们',blank:'幸福',post:'！',hint:'(hạnh phúc)',ans:'幸福'},
  {pre:'很多女孩子',blank:'羡慕',post:'浪漫的爱情。',hint:'(ngưỡng mộ)',ans:'羡慕'},
  {pre:'只有接受了他的',blank:'缺点',post:'，你们才能更好地一起生活。',hint:'(khuyết điểm)',ans:'缺点'},
  {pre:'这部电影讲了一个',blank:'爱情',post:'故事，很浪漫。',hint:'(tình yêu)',ans:'爱情'},
  {pre:'更需要性格上互相',blank:'吸引',post:'。',hint:'(thu hút)',ans:'吸引'},
  {pre:'我丈夫是个很',blank:'幽默',post:'的人。',hint:'(hóm hỉnh)',ans:'幽默'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['他','不仅','足球','踢','得','好','，','性格','也','不错','。'],ans:'他不仅足球踢得好，性格也不错。',audio:'他不仅足球踢得好，性格也不错。'},
  {words:['我','从来','没','这么','快乐','过','。'],ans:'我从来没这么快乐过。',audio:'我从来没这么快乐过。'},
  {words:['我们','刚','搬来','一个','星期','，','对','环境','还','不太','熟悉','。'],ans:'我们刚搬来一个星期，对环境还不太熟悉。',audio:'我们刚搬来一个星期，对环境还不太熟悉。'},
  {words:['即使','工作','很','忙','，','他','也','每天','给','家人','打电话','。'],ans:'即使工作很忙，他也每天给家人打电话。',audio:'即使工作很忙，他也每天给家人打电话。'},
  {words:['两个','人','共同','生活','，','需要','性格','上','互相','吸引','。'],ans:'两个人共同生活，需要性格上互相吸引。',audio:'两个人共同生活，需要性格上互相吸引。'},
  {words:['只要','两个','人','互相','理解','，','就','容易','幸福','。'],ans:'只要两个人互相理解，就容易幸福。',audio:'只要两个人互相理解，就容易幸福。'},
  {words:['虽然','我们','认识','的','时间','不长','，','但','我','很','快乐','。'],ans:'虽然我们认识的时间不长，但我很快乐。',audio:'虽然我们认识的时间不长，但我很快乐。'},
  {words:['只有','接受','对方','的','缺点','，','才','能','幸福','地','生活','。'],ans:'只有接受对方的缺点，才能幸福地生活。',audio:'只有接受对方的缺点，才能幸福地生活。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · CHỌN TỪ THÍCH HỢP ĐIỀN VÀO CHỖ TRỐNG
// Nguyên bài 练习2 thật từ SGK (课本 练习 phần 2), giữ đúng 10 câu + 2 nhóm
// 5 từ ngân hàng từ gốc; chuyển thành trắc nghiệm 4 lựa chọn (đáp án đúng +
// 3 từ nhiễu lấy trong cùng ngân hàng từ của bài, đúng tinh thần đề gốc).
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice'; // bài này dùng đúng nội dung SGK (chọn từ thích hợp), không phải sửa lỗi sai
var errorFixData = [
  {wrong:'他们两个人____努力，终于完成了工作。',
   opts:['共同','吸引','接受','熟悉'],ans:0,
   exp:'共同 (chung, cùng) làm định ngữ cho 努力: 共同努力 = cùng nhau cố gắng. 吸引 (thu hút) và 接受 (chấp nhận) không phù hợp nghĩa; 熟悉 (quen thuộc) không đi với 卖力.'},
  {wrong:'那个地方特别漂亮，每年都会____很多国内外的游客。',
   opts:['吸引','共同','熟悉','感动'],ans:0,
   exp:'吸引 (thu hút) + tân ngữ 游客: nơi đẹp THU HÚT du khách. 共同/熟悉/感动 đều không mang được tân ngữ 游客 theo nghĩa này.'},
  {wrong:'在我的____中，他一直是个很幽默的人。',
   opts:['印象','缺点','脾气','原因'],ans:0,
   exp:'在我的印象中 = trong ấn tượng của tôi — cụm cố định. 缺点/脾气/原因 đều không phù hợp với cấu trúc 在……中.'},
  {wrong:'我是一个南方人，很难____每天吃面条。',
   opts:['接受','羡慕','感动','适合'],ans:0,
   exp:'接受 (chấp nhận) + V (吃面条): khó CHẤP NHẬN việc ăn mì mỗi ngày. 羡慕/感动/适合 không hợp nghĩa trong câu này.'},
  {wrong:'这个事你最好先问一下李老师，这方面他比我____。',
   opts:['熟悉','印象','幸福','幽默'],ans:0,
   exp:'熟悉 (thông thạo, hiểu rõ) dùng để so sánh mức độ am hiểu: 他比我熟悉 = anh ấy am hiểu hơn tôi. 印象/幸福/幽默 không hợp ngữ cảnh so sánh này.'},
  {wrong:'A：下个星期的游泳比赛你参加吗？ B：你别跟我____了，我没学过游泳，怎么参加比赛啊？',
   opts:['开玩笑','感动','羡慕','从来'],ans:0,
   exp:'别跟我开玩笑了 = đừng đùa với tôi nữa — cụm cố định phản bác lời đề nghị. 感动/羡慕 là động từ chỉ cảm xúc không hợp; 从来 là phó từ không thể đứng sau 跟我.'},
  {wrong:'A：小李这个人怎么样？ B：他虽然____很大，但工作很认真。',
   opts:['脾气','熟悉','印象','共同'],ans:0,
   exp:'脾气很大 = tính khí nóng nảy — cụm cố định đi với 大/好. 熟悉/印象/共同 không kết hợp được với 很大 theo nghĩa này.'},
  {wrong:'A：真____你，找了个那么漂亮的女朋友！ B：她不仅长得漂亮，也很聪明。',
   opts:['羡慕','感动','接受','吸引'],ans:0,
   exp:'真羡慕你 = ghen tị/ngưỡng mộ bạn thật đấy — cách nói cảm thán quen thuộc. 感动/接受/吸引 không dùng trong lời cảm thán ngưỡng mộ này.'},
  {wrong:'A：都这么晚了，他怎么还没到？ B：他以前____不迟到，今天是怎么了？',
   opts:['从来','脾气','开玩笑','原因'],ans:0,
   exp:'从来不迟到 = từ trước đến giờ không đến muộn — 从来 (phó từ) đứng trước 不/没. 脾气/开玩笑/原因 đều là danh từ/cụm động từ, không thể đứng ở vị trí phó từ này.'},
  {wrong:'A：这个电影讲了一个爱情故事，很浪漫，让人特别____。 B：你们女孩子就是喜欢看这种电影。',
   opts:['感动','熟悉','共同','吸引'],ans:0,
   exp:'让人特别感动 = khiến người ta đặc biệt cảm động — 感动 làm bổ ngữ sau 让人. 熟悉/共同/吸引 không tạo được nghĩa hợp lý ở vị trí này (吸引 cần tân ngữ trực tiếp, không dùng được sau 让人特别).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 1. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Bạn giới thiệu một người thân thiết với nhóm bạn mới.',
      q_zh: '说一说你的一个好朋友或者家人，他是个什么样的人？',
      q_py: 'Shuō yi shuō nǐ de yí ge hǎo péngyou huòzhě jiārén, tā shì ge shénme yàng de rén?',
      q_vn: 'Hãy kể về một người bạn thân hoặc người nhà của bạn, người đó thế nào?',
      grammar: { label: '不仅……也/还…… (không những… mà còn…)', any: ['不仅', '不但'] },
      need: [
        { label: 'Dùng 不仅……也/还……', any: ['不仅', '不但'] },
        { label: 'Tả tính cách', any: ['幽默', '脾气', '性格', '热情', '认真', '聪明'] }
      ],
      bonus: { label: 'Dùng 从来 nói điều chưa từng xảy ra', any: ['从来'] },
      vocab: ['幽默', '脾气', '从来', '性格'],
      minLen: 22,
      sample: '我的好朋友不仅很幽默，脾气也特别好。我们认识五年了，几乎从来没生过气，有什么事都可以互相说。',
      sample_py: 'Wǒ de hǎo péngyou bùjǐn hěn yōumò, píqi yě tèbié hǎo. Wǒmen rènshi wǔ nián le, jīhū cónglái méi shēng guo qì, yǒu shénme shì dōu kěyǐ hùxiāng shuō.',
      sample_vn: 'Bạn thân của tôi không những hóm hỉnh mà tính tình cũng rất tốt. Chúng tôi quen nhau năm năm, gần như chưa từng giận nhau, có chuyện gì cũng nói được với nhau.',
      tip: '不仅……也…… nối hai ưu điểm: 他不仅会说汉语，还会说法语。'
    },
    {
      situation: 'Đồng nghiệp tò mò về cách bạn quen người bạn thân nhất.',
      q_zh: '你跟最好的朋友是怎么认识的？第一次见面印象怎么样？',
      q_py: 'Nǐ gēn zuì hǎo de péngyou shì zěnme rènshi de? Dì yī cì jiànmiàn yìnxiàng zěnmeyàng?',
      q_vn: 'Bạn quen người bạn thân nhất thế nào? Lần đầu gặp ấn tượng ra sao?',
      grammar: { label: '对……印象很深 / 是在……认识的', any: ['印象', '是在'] },
      need: [
        { label: 'Kể hoàn cảnh quen nhau', any: ['认识', '比赛', '学校', '公司', '图书馆', '朋友', '网上'] },
        { label: 'Dùng 印象 nói cảm nhận đầu tiên', any: ['印象'] }
      ],
      bonus: { label: 'Dùng 熟悉 nói sự thân quen hiện nay', any: ['熟悉'] },
      vocab: ['印象', '深', '熟悉'],
      minLen: 22,
      sample: '我们是在一次足球比赛中认识的。那天他一个人踢进了两个球，我对他的印象很深。现在我们已经非常熟悉了。',
      sample_py: 'Wǒmen shì zài yí cì zúqiú bǐsài zhōng rènshi de. Nà tiān tā yí ge rén tī jìn le liǎng ge qiú, wǒ duì tā de yìnxiàng hěn shēn. Xiànzài wǒmen yǐjīng fēicháng shúxi le.',
      sample_vn: 'Chúng tôi quen nhau trong một trận bóng đá. Hôm đó anh ấy một mình ghi hai bàn, tôi ấn tượng rất sâu. Giờ chúng tôi đã rất thân.',
      tip: '对……印象深 = ấn tượng sâu về ai: 我对那个城市印象很深。'
    },
    {
      situation: 'Trong buổi trò chuyện về hôn nhân, mọi người nêu quan điểm của mình.',
      q_zh: '你觉得两个人共同生活，最需要的是什么？',
      q_py: 'Nǐ juéde liǎng ge rén gòngtóng shēnghuó, zuì xūyào de shì shénme?',
      q_vn: 'Bạn thấy hai người sống chung, điều cần nhất là gì?',
      grammar: { label: '只有……是不够的，还要……', any: ['不够', '还要', '还得'] },
      need: [
        { label: 'Nêu điều cần nhất', any: ['理解', '接受', '共同', '幸福', '性格', '互相'] },
        { label: 'Nói thêm điều kiện thứ hai', any: ['还', '也', '另外', '除了'] }
      ],
      bonus: { label: 'Nhắc đến khuyết điểm bằng 缺点', any: ['缺点'] },
      vocab: ['共同', '接受', '缺点', '幸福'],
      minLen: 22,
      sample: '我觉得只有浪漫是不够的，还要互相理解，接受对方的缺点。有共同的爱好和目标，生活才会幸福。',
      sample_py: 'Wǒ juéde zhǐyǒu làngmàn shì bú gòu de, hái yào hùxiāng lǐjiě, jiēshòu duì fāng de quēdiǎn. Yǒu gòngtóng de àihào hé mù biāo, shēnghuó cái huì xìngfú.',
      sample_vn: 'Tôi thấy chỉ có lãng mạn thì chưa đủ, còn phải hiểu nhau, chấp nhận khuyết điểm của đối phương. Có sở thích và mục tiêu chung thì cuộc sống mới hạnh phúc.',
      tip: '只有……是不够的 dùng để nói một điều kiện chưa đủ.'
    },
    {
      situation: 'Bạn bè tranh luận xem thế nào mới gọi là lãng mạn.',
      q_zh: '在你看来，什么是浪漫？请举个例子。',
      q_py: 'Zài nǐ kàn lái, shénme shì làngmàn? Qǐng jǔ ge lì zǐ.',
      q_vn: 'Theo bạn, thế nào là lãng mạn? Hãy nêu một ví dụ.',
      grammar: { label: '即使……也…… (cho dù… thì vẫn…)', any: ['即使'] },
      need: [
        { label: 'Nêu quan điểm của bạn về 浪漫', any: ['浪漫', '我觉得', '我认为', '对我来说'] },
        { label: 'Đưa một ví dụ cụ thể', any: ['加班', '灯', '星星', '月亮', '一起', '生活', '花'] }
      ],
      bonus: { label: 'Dùng 即使……也…… trong ví dụ', any: ['即使'] },
      vocab: ['即使', '加班', '亮', '浪漫'],
      minLen: 22,
      sample: '对我来说，即使加班到很晚，回家的时候家里还亮着一盏灯，有人等我吃饭，这就是浪漫。',
      sample_py: 'Duì wǒ lái shuō, jíshǐ jiābān dào hěn wǎn, huí jiā de shíhou jiā lǐ hái liàng zhe yì zhǎn dēng, yǒu rén děng wǒ chīfàn, zhè jiù shì làngmàn.',
      sample_vn: 'Với tôi, dù tăng ca đến rất khuya, về đến nhà vẫn còn một ngọn đèn sáng, có người đợi mình ăn cơm, đó chính là lãng mạn.',
      tip: '即使……也…… giả thiết nhượng bộ: 即使下雨，我也去。'
    },
    {
      situation: 'Lớp học đang thảo luận vì sao người ta thích nhau.',
      q_zh: '什么样的人容易互相吸引？为什么？',
      q_py: 'Shénme yàng de rén róngyì hùxiāng xīyǐn? Wèishénme?',
      q_vn: 'Người thế nào dễ hấp dẫn lẫn nhau? Vì sao?',
      grammar: { label: '互相 + động từ (吸引 / 学习 / 帮助)', any: ['互相'] },
      need: [
        { label: 'Dùng 互相', any: ['互相'] },
        { label: 'Nêu lý do liên quan tính cách hoặc sở thích', any: ['性格', '爱好', '共同', '一样', '不同', '原因'] }
      ],
      bonus: { label: 'Dùng 吸引 nói sức hút', any: ['吸引'] },
      vocab: ['性格', '互相', '吸引', '共同'],
      minLen: 22,
      sample: '我认为性格不同的人也能互相吸引，因为他们可以互相学习。不过最重要的原因还是有共同的爱好和想法。',
      sample_py: 'Wǒ rènwéi xìnggé bù tóng de rén yě néng hùxiāng xīyǐn, yīnwèi tāmen kěyǐ hùxiāng xuéxí. Búguò zuì zhòngyào de yuányīn háishi yǒu gòngtóng de àihào hé xiǎng fǎ.',
      sample_vn: 'Tôi cho rằng người tính cách khác nhau cũng có thể hút nhau, vì họ học được ở nhau. Nhưng nguyên nhân quan trọng nhất vẫn là có sở thích và suy nghĩ chung.',
      tip: '互相 chỉ dùng trước động từ hai âm tiết: 互相帮助、互相理解。'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh ấy không những học giỏi, mà tính cách cũng rất tốt.', zh:'他不仅学习好，性格也很好。', py:'Tā bùjǐn xuéxí hǎo, xìnggé yě hěn hǎo.'},
  {vi:'Chúng tôi vừa mới quen nhau, vẫn chưa hiểu rõ về nhau lắm.', zh:'我们刚认识，还不太熟悉。', py:'Wǒmen gāng rènshi, hái bú tài shúxi.'},
  {vi:'Anh ấy từ trước đến giờ chưa từng nói dối tôi.', zh:'他从来没骗过我。', py:'Tā cónglái méi piànguo wǒ.'},
  {vi:'Cho dù rất bận, mẹ tôi cũng luôn dành thời gian cho gia đình.', zh:'即使很忙，我妈妈也一直留时间给家人。', py:'Jíshǐ hěn máng, wǒ māma yě yìzhí liú shíjiān gěi jiārén.'},
  {vi:'Về phương diện tính cách, chúng tôi rất giống nhau.', zh:'在性格上，我们很像。', py:'Zài xìnggé shang, wǒmen hěn xiàng.'},
  {vi:'Chỉ có hiểu nhau, hai người mới có thể sống hạnh phúc.', zh:'只有互相理解，两个人才能幸福地生活。', py:'Zhǐyǒu hùxiāng lǐjiě, liǎng ge rén cái néng xìngfú de shēnghuó.'},
  {vi:'Tôi hy vọng có thể tìm được một người phù hợp với mình.', zh:'我希望能找到一个适合自己的人。', py:'Wǒ xīwàng néng zhǎodào yí ge shìhé zìjǐ de rén.'},
  {vi:'Cô ấy là một người rất hóm hỉnh, ai cũng thích ở bên cô ấy.', zh:'她是个很幽默的人，谁都喜欢跟她在一起。', py:'Tā shì ge hěn yōumò de rén, shéi dōu xǐhuan gēn tā zài yìqǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tuy tính tình anh ấy không tốt lắm, nhưng công việc lại rất nghiêm túc.', zh:'虽然他脾气不太好，但工作很认真。', py:'Suīrán tā píqi bú tài hǎo, dàn gōngzuò hěn rènzhēn.'},
  {vi:'Ngay cả khi thất bại, sự cố gắng của cô ấy cũng khiến mọi người cảm động.', zh:'即使失败了，她的努力也让大家感动。', py:'Jíshǐ shībài le, tā de nǔlì yě ràng dàjiā gǎndòng.'},
  {vi:'Trong lòng tôi, anh ấy luôn là người bạn tốt nhất.', zh:'在我心里，他一直是最好的朋友。', py:'Zài wǒ xīnli, tā yìzhí shì zuì hǎo de péngyou.'},
  {vi:'Chỉ cần hai người thu hút lẫn nhau về tính cách, sẽ dễ dàng hòa hợp.', zh:'只要两个人性格上互相吸引，就容易合得来。', py:'Zhǐyào liǎng ge rén xìnggé shang hùxiāng xīyǐn, jiù róngyì hédelái.'},
  {vi:'Cô ấy vừa mới tìm được công việc phù hợp với mình.', zh:'她刚找到适合自己的工作。', py:'Tā gāng zhǎodào shìhé zìjǐ de gōngzuò.'},
  {vi:'Từ trước đến giờ anh ấy đều rất quan tâm đến cảm nhận của người khác.', zh:'他从来都很关心别人的感受。', py:'Tā cónglái dōu hěn guānxīn biéren de gǎnshòu.'},
  {vi:'Nguyên nhân khiến anh ấy đến muộn là vì xe hỏng giữa đường.', zh:'他迟到的原因是车在路上坏了。', py:'Tā chídào de yuányīn shì chē zài lùshang huài le.'},
  {vi:'Không những cô ấy xinh đẹp, mà nụ cười cũng rất thu hút người khác.', zh:'她不仅长得漂亮，笑容也很吸引人。', py:'Tā bùjǐn zhǎng de piàoliang, xiàoróng yě hěn xīyǐn rén.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程4上 练习册 Bài 1 (第一课 简单的爱情)
// Văn bản băng ghi âm + đáp án đúng lấy từ SBT gốc; đáp án nhiễu (options) và
// điểm điền-khi-nghe (blank) do người biên soạn thiết kế thêm để luyện tập.
//  - Phần 1 (câu 1-5, gốc: nghe đoạn văn rồi phán đoán đúng/sai) → 5 câu ĐIỀN
//    CHÍNH TẢ, mỗi câu giữ nguyên đoạn văn gốc, khoanh 1 cụm từ mấu chốt làm chỗ trống.
//  - Phần 2 (câu 6-12, gốc: nghe hội thoại 2 lượt lời) + Phần 3 (câu 13-22, gốc:
//    nghe hội thoại 2-4 lượt lời, có 2 đoạn văn ngắn 19-20 và 21-22) → 17 câu
//    TRẮC NGHIỆM, kèm nghe-điền-cụm-từ trước khi chọn đáp án.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audioParts: [
    { src: "/audio/hsk4-bai-1/listen-1.mp3", from: 1, to: 5 },
    { src: "/audio/hsk4-bai-1/listen-2.mp3", from: 6, to: 12 },
    { src: "/audio/hsk4-bai-1/listen-3.mp3", from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:"他们俩是在公司认识的。", judge:false, lines:[
      {pre:"我和他是", blank:"在朋友家里认识的", post:"，虽然第一次见面的时候没怎么聊天儿，但是他给我的印象很深。后来我们进了同一家公司，才慢慢熟悉起来。",
       py:"Wǒ hé tā shì zài péngyou jiā li rènshi de, suīrán dì-yī cì jiànmiàn de shíhou méi zěnme liáotiānr, dànshì tā gěi wǒ de yìnxiàng hěn shēn. Hòulái wǒmen jìnle tóng yì jiā gōngsī, cái mànman shúxi qilai.",
       vn:"Tôi và anh ấy quen nhau ở nhà bạn, tuy lần đầu gặp mặt không nói chuyện nhiều, nhưng anh ấy để lại ấn tượng rất sâu sắc trong tôi. Sau đó chúng tôi vào cùng một công ty, mới dần dần quen thân."}]},
    {num:2, stmt:"妻子希望丈夫天天送她礼物。", judge:false, lines:[
      {pre:"妻子们大多都希望自己的丈夫能记住他们是哪天结婚的，而且能", blank:"在每年的那一天看到丈夫送她的礼物", post:"。",
       py:"Qīzimen dàduō dōu xīwàng zìjǐ de zhàngfu néng jìzhu tāmen shì nǎ tiān jié hūn de, érqiě néng zài měinián de nà yì tiān kàndào zhàngfu sòng tā de lǐwù.",
       vn:"Phần lớn các bà vợ đều mong chồng mình nhớ ngày họ kết hôn, và mong mỗi năm vào ngày đó đều thấy chồng tặng quà cho mình."}]},
    {num:3, stmt:"踢足球需要球员们一起努力。", judge:true, lines:[
      {pre:"踢足球不是一个人的运动，即使你踢得很好，", blank:"没有其他球员的努力，比赛也不会好看", post:"。",
       py:"Tī zúqiú bú shì yí ge rén de yùndòng, jíshǐ nǐ tī de hěn hǎo, méiyǒu qítā qiúyuán de nǔlì, bǐsài yě bú huì hǎokàn.",
       vn:"Đá bóng không phải môn thể thao của một người, cho dù bạn đá giỏi đến đâu, nếu không có sự cố gắng của các cầu thủ khác thì trận đấu cũng không hay được."}]},
    {num:4, stmt:"爱情不需要浪漫。", judge:false, lines:[
      {pre:"两个人共同生活，不仅需要浪漫的爱情，", blank:"更需要性格上互相吸引", post:"，最重要的是，两个人都要想着好好照顾家人。",
       py:"Liǎng ge rén gòngtóng shēnghuó, bùjǐn xūyào làngmàn de àiqíng, gèng xūyào xìnggé shang hùxiāng xīyǐn, zuì zhòngyào de shì, liǎng ge rén dōu yào xiǎngzhe hǎohāo zhàogù jiārén.",
       vn:"Hai người sống chung, không những cần tình yêu lãng mạn, mà càng cần sự thu hút lẫn nhau về tính cách, quan trọng nhất là cả hai đều phải nghĩ đến việc chăm sóc tốt cho gia đình."}]},
    {num:5, stmt:"不要总是羡慕别人。", judge:true, lines:[
      {pre:"我们总是羡慕别人有个好工作、有个好妻子，但是常常", blank:"忘记了自己已经有的幸福", post:"。",
       py:"Wǒmen zǒngshì xiànmù biéren yǒu ge hǎo gōngzuò, yǒu ge hǎo qīzi, dànshì chángcháng wàngjìle zìjǐ yǐjīng yǒu de xìngfú.",
       vn:"Chúng ta luôn ngưỡng mộ người khác có công việc tốt, có người vợ tốt, nhưng lại thường quên mất hạnh phúc mình đã có."}]}
  ],
  mc: [
    {num:6, options:["丈夫和妻子","妈妈和儿子","爸爸和女儿","姐姐和弟弟"], ans:3, q:"说话人是什么关系？",
     lines:[
      {speaker:"女", pre:"什么时候让我们", blank:"见见你的女朋友", post:"？",
       py:"Shénme shíhou ràng wǒmen jiànjian nǐ de nǚpéngyou?",
       vn:"Khi nào cho chúng tôi gặp bạn gái em vậy?"},
      {speaker:"男", pre:"没问题。姐，我们正想下个周末", blank:"请家里人一起吃个饭", post:"呢。",
       py:"Méi wèntí. Jiě, wǒmen zhèng xiǎng xià ge zhōumò qǐng jiālǐrén yìqǐ chī ge fàn ne.",
       vn:"Không thành vấn đề. Chị ơi, bọn em đang định cuối tuần sau mời cả nhà ăn cơm cùng đấy."}
     ],
     explain:"女：什么时候让我们见见你的女朋友？男：没问题。姐，我们正想下个周末请家里人一起吃个饭呢。问：说话人是什么关系？ → Người nói gọi nhau là 姐 (chị) nên là quan hệ chị em (姐弟)."},
    {num:7, options:["很感动","很突然","很高兴","很满意"], ans:1, q:"女的觉得怎么样？",
     lines:[
      {speaker:"男", pre:"王老师，我下个月十号", blank:"就要结婚了", post:"。",
       py:"Wáng lǎoshī, wǒ xià ge yuè shí hào jiù yào jié hūn le.",
       vn:"Cô Vương ơi, tháng sau ngày mùng 10 em sắp kết hôn rồi."},
      {speaker:"女", pre:"你不是在开玩笑吧？", blank:"你们才认识一个月呀", post:"。",
       py:"Nǐ bú shì zài kāi wánxiào ba? Nǐmen cái rènshi yí ge yuè ya.",
       vn:"Em không đùa đấy chứ? Các em mới quen nhau một tháng thôi mà."}
     ],
     explain:"男：王老师，我下个月十号就要结婚了。女：你不是在开玩笑吧？你们才认识一个月呀。问：女的觉得怎么样？ → 女的觉得时间太快了，很惊讶。"},
    {num:8, options:["很幽默","很难过","很奇怪","很简单"], ans:0, q:"根据对话，可以知道男的怎么样？",
     lines:[
      {speaker:"女", pre:"我希望我的男朋友又高又帅，", blank:"还要非常幽默", post:"。",
       py:"Wǒ xīwàng wǒ de nánpéngyou yòu gāo yòu shuài, hái yào fēicháng yōumò.",
       vn:"Em mong bạn trai mình vừa cao vừa đẹp trai, còn phải rất hóm hỉnh nữa."},
      {speaker:"男", pre:"你说的", blank:"是我吗", post:"？",
       py:"Nǐ shuō de shì wǒ ma?",
       vn:"Em đang nói về anh đấy à?"}
     ],
     explain:"女：我希望我的男朋友又高又帅，还要非常幽默。男：你说的是我吗？问：根据对话，可以知道男的怎么样？ → 男的暗示自己又高又帅，很幽默。"},
    {num:9, options:["聪明","爱干净","可爱","漂亮"], ans:2, q:"男的觉得哪种女孩子比较好？",
     lines:[
      {speaker:"女", pre:"小李，我给你介绍个女朋友吧，", blank:"说说你有什么要求", post:"。",
       py:"Xiǎo Lǐ, wǒ gěi nǐ jièshào ge nǚpéngyou ba, shuōshuo nǐ yǒu shénme yāoqiú.",
       vn:"Tiểu Lý, để tôi giới thiệu bạn gái cho cậu nhé, nói xem cậu có yêu cầu gì."},
      {speaker:"男", pre:"我啊，喜欢可爱的女孩子，", blank:"漂亮不漂亮没关系", post:"。",
       py:"Wǒ a, xǐhuan kě’ài de nǚháizi, piàoliang bu piàoliang méi guānxi.",
       vn:"Tôi á, thích con gái dễ thương, đẹp hay không thì không quan trọng."}
     ],
     explain:"女：小李，我给你介绍个女朋友吧，说说你有什么要求。男：我啊，喜欢可爱的女孩子，漂亮不漂亮没关系。问：男的觉得哪种女孩子比较好？ → 可爱的女孩子。"},
    {num:10, options:["性格","爱情","电影","工作"], ans:2, q:"他们在说什么？",
     lines:[
      {speaker:"女", pre:"这个电影讲了一个爱情故事，很浪漫，", blank:"特别让人感动", post:"。",
       py:"Zhège diànyǐng jiǎngle yí ge àiqíng gùshi, hěn làngmàn, tèbié ràng rén gǎndòng.",
       vn:"Bộ phim này kể một câu chuyện tình yêu, rất lãng mạn, đặc biệt khiến người ta cảm động."},
      {speaker:"男", pre:"你们女孩子", blank:"就是喜欢看这种电影", post:"。",
       py:"Nǐmen nǚháizi jiùshì xǐhuan kàn zhè zhǒng diànyǐng.",
       vn:"Con gái các cậu đúng là thích xem loại phim này."}
     ],
     explain:"女：这个电影讲了一个爱情故事，很浪漫，特别让人感动。男：你们女孩子就是喜欢看这种电影。问：他们在说什么？ → 女孩子喜欢看爱情电影。"},
    {num:11, options:["更瘦了","更黑了","更热情了","更好看了"], ans:3, q:"男的觉得女的怎么样？",
     lines:[
      {speaker:"女", pre:"好几年没见，你还是这么", blank:"爱开玩笑", post:"。",
       py:"Hǎo jǐ nián méi jiàn, nǐ háishi zhème ài kāi wánxiào.",
       vn:"Bao nhiêu năm không gặp, cậu vẫn hay đùa như vậy."},
      {speaker:"男", pre:"没有，我说的是真的，你真的", blank:"比以前更年轻、更漂亮了", post:"。",
       py:"Méiyǒu, wǒ shuō de shì zhēn de, nǐ zhēn de bǐ yǐqián gèng niánqīng, gèng piàoliang le.",
       vn:"Không đâu, tôi nói thật đấy, cậu thật sự trẻ hơn, đẹp hơn trước rồi."}
     ],
     explain:"女：好几年没见，你还是这么爱开玩笑。男：没有，我说的是真的，你真的比以前更年轻、更漂亮了。问：男的觉得女的怎么样？ → 比以前更年轻、更漂亮了。"},
    {num:12, options:["旅游","体育","法律","数学"], ans:3, q:"女的上大学时是学什么的？",
     lines:[
      {speaker:"男", pre:"你家里怎么有这么多关于法律的书？", blank:"你大学学的就是法律吗", post:"？",
       py:"Nǐ jiā li zěnme yǒu zhème duō guānyú fǎlǜ de shū? Nǐ dàxué xué de jiùshì fǎlǜ ma?",
       vn:"Sao nhà bạn có nhiều sách về pháp luật vậy? Bạn học đại học chuyên ngành luật à?"},
      {speaker:"女", pre:"哪儿啊？我大学读的是数学，只是我最近", blank:"对法律特别感兴趣", post:"。",
       py:"Nǎr a? Wǒ dàxué dú de shì shùxué, zhǐshì wǒ zuìjìn duì fǎlǜ tèbié gǎn xìngqù.",
       vn:"Đâu có? Tôi học đại học chuyên ngành toán, chỉ là gần đây tôi rất hứng thú với pháp luật thôi."}
     ],
     explain:"男：你家里怎么有这么多关于法律的书？你大学学的就是法律吗？女：哪儿啊？我大学读的是数学，只是我最近对法律特别感兴趣。问：女的上大学时是学什么的？ → 数学。"},
    {num:13, options:["看电影","买票","去学校","见朋友"], ans:0, q:"明天晚上他们要去干什么？",
     lines:[
      {speaker:"女", pre:"明天的电影你想不想看？我朋友多给了我一张，", blank:"那到时候一起去吧", post:"。",
       py:"Míngtiān de diànyǐng nǐ xiǎng bu xiǎng kàn? Wǒ péngyou duō gěile wǒ yì zhāng, nà dàoshíhou yìqǐ qù ba.",
       vn:"Phim ngày mai bạn có muốn xem không? Bạn tôi cho dư một vé, vậy lúc đó mình đi cùng nhé."},
      {speaker:"男", pre:"真的吗？你不是", blank:"在开玩笑吧", post:"？",
       py:"Zhēn de ma? Nǐ bú shì zài kāi wánxiào ba?",
       vn:"Thật à? Bạn không đùa đấy chứ?"}
     ],
     explain:"女：明天的电影你想不想看？我朋友多给了我一张，那到时候一起去吧。男：真的吗？你不是在开玩笑吧？问：明天晚上他们要去干什么？ → 一起去看电影。"},
    {num:14, options:["今天","7号","星期六","10号"], ans:2, q:"男的哪天有时间？",
     lines:[
      {speaker:"女", pre:"你最近忙吗？", blank:"哪天有时间", post:"？",
       py:"Nǐ zuìjìn máng ma? Nǎ tiān yǒu shíjiān?",
       vn:"Gần đây bạn có bận không? Hôm nào rảnh vậy?"},
      {speaker:"男", pre:"怎么了？又想让我陪你", blank:"吃饭呀", post:"？",
       py:"Zěnme le? Yòu xiǎng ràng wǒ péi nǐ chīfàn ya?",
       vn:"Sao vậy? Lại muốn tôi đi ăn cùng à?"},
      {speaker:"女", pre:"我的笔记本电脑太旧了，", blank:"我想买个新的", post:"。",
       py:"Wǒ de bǐjìběn diànnǎo tài jiù le, wǒ xiǎng mǎi ge xīn de.",
       vn:"Laptop của tôi cũ quá rồi, tôi muốn mua cái mới."},
      {speaker:"男", pre:"那十七号周六", blank:"我和你去看看", post:"。",
       py:"Nà shíqī hào zhōuliù wǒ hé nǐ qù kànkan.",
       vn:"Vậy thứ Bảy ngày 17 tôi đi xem cùng bạn."}
     ],
     explain:"女：你最近忙吗？哪天有时间？男：怎么了？又想让我陪你吃饭呀？女：我的笔记本电脑太旧了，我想买个新的。男：那十七号周六我和你去看看。问：男的哪天有时间？ → 十七号周六。"},
    {num:15, options:["要加班","感冒了","要去游泳","要去银行"], ans:0, q:"男的今天为什么去不了？",
     lines:[
      {speaker:"男", pre:"今天我去不了了，", blank:"我明天晚上去吧", post:"。",
       py:"Jīntiān wǒ qù bu liǎo le, wǒ míngtiān wǎnshang qù ba.",
       vn:"Hôm nay tôi không đi được nữa rồi, mai tối tôi đi vậy."},
      {speaker:"女", pre:"不会又要", blank:"加班吧", post:"？",
       py:"Bú huì yòu yào jiābān ba?",
       vn:"Sẽ không phải lại tăng ca chứ?"},
      {speaker:"男", pre:"没办法，", blank:"同事们都在公司忙呢", post:"。",
       py:"Méi bànfǎ, tóngshìmen dōu zài gōngsī máng ne.",
       vn:"Không còn cách nào, đồng nghiệp đều đang bận ở công ty cả."}
     ],
     explain:"男：今天我去不了了，我明天晚上去吧。女：不会又要加班吧？男：没办法，同事们都在公司忙呢。问：男的今天为什么去不了？ → 同事们都在忙（要加班）。"},
    {num:16, options:["很满意","生气了","忘带钱了","衬衫需要洗"], ans:3, q:"关于男的，下列哪个正确？",
     lines:[
      {speaker:"女", pre:"您的衬衫……对不起，", blank:"真对不起", post:"。",
       py:"Nín de chènshān…… duìbuqǐ, zhēn duìbuqǐ.",
       vn:"Áo sơ mi của anh…… xin lỗi, thật xin lỗi."},
      {speaker:"男", pre:"没关系，", blank:"我去洗洗就好了", post:"。",
       py:"Méi guānxi, wǒ qù xǐxi jiù hǎo le.",
       vn:"Không sao, tôi đi giặt là được rồi."}
     ],
     explain:"女：您的衬衫……对不起，真对不起。男：没关系，我去洗洗就好了。问：关于男的，下列哪个正确？ → 女的把咖啡（饮料）洒到他衬衫上了。"},
    {num:17, options:["还没结婚","正准备结婚","结婚三年了","结婚没多久"], ans:3, q:"关于女的，下列哪个正确？",
     lines:[
      {speaker:"女", pre:"我们三年没见了吧？", blank:"你过得怎么样", post:"？",
       py:"Wǒmen sān nián méi jiàn le ba? Nǐ guò de zěnmeyàng?",
       vn:"Chúng ta ba năm không gặp rồi nhỉ? Bạn sống thế nào?"},
      {speaker:"男", pre:"我？还是老样子。", blank:"你呢", post:"？",
       py:"Wǒ? Háishi lǎoyàngzi. Nǐ ne?",
       vn:"Tôi á? Vẫn như cũ. Còn bạn thì sao?"},
      {speaker:"女", pre:"我上个月刚结婚，正准备", blank:"和我先生一起出去旅游", post:"。",
       py:"Wǒ shàng ge yuè gāng jié hūn, zhèng zhǔnbèi hé wǒ xiānsheng yìqǐ chūqu lǚyóu.",
       vn:"Tháng trước tôi vừa kết hôn, đang chuẩn bị cùng chồng đi du lịch."}
     ],
     explain:"女：我们三年没见了吧？你过得怎么样？男：我？还是老样子。你呢？女：我上个月刚结婚，正准备和我先生一起出去旅游。问：关于女的，下列哪个正确？ → 她刚结婚。"},
    {num:18, options:["丈夫和妻子","老师和学生","司机和客人","哥哥和妹妹"], ans:0, q:"他们是什么关系？",
     lines:[
      {speaker:"女", pre:"我今天整理房间的时候", blank:"找到个好东西", post:"。",
       py:"Wǒ jīntiān zhěnglǐ fángjiān de shíhou zhǎodào ge hǎo dōngxi.",
       vn:"Hôm nay lúc dọn phòng tôi tìm thấy một thứ hay lắm."},
      {speaker:"男", pre:"找到什么了？", blank:"是钱吗", post:"？",
       py:"Zhǎodào shénme le? Shì qián ma?",
       vn:"Tìm thấy gì vậy? Là tiền à?"},
      {speaker:"女", pre:"不是，是我们", blank:"结婚时的一张照片", post:"。",
       py:"Bú shì, shì wǒmen jié hūn shí de yì zhāng zhàopiàn.",
       vn:"Không phải, là một tấm ảnh lúc chúng ta kết hôn."}
     ],
     explain:"女：我今天整理房间的时候找到个好东西。男：找到什么了？是钱吗？女：不是，是我们结婚时的一张照片。问：他们是什么关系？ → 夫妻（结婚时的照片说明是夫妻）。"},
    {num:19, options:["感动","爱情","一个人没意思","两个人适合"], ans:1, q:"说话人觉得结婚的最重要原因是什么？",
     lines:[
      {speaker:"旁白", pre:"说到结婚，人们会很自然地想起爱情。", blank:"爱情是结婚的最重要原因", post:"，但是只有爱情是不够的。",
       py:"Shuōdào jié hūn, rénmen huì hěn zìrán de xiǎngqǐ àiqíng. Àiqíng shì jié hūn de zuì zhòngyào yuányīn, dànshì zhǐyǒu àiqíng shì bú gòu de.",
       vn:"Nói đến kết hôn, người ta sẽ tự nhiên nghĩ đến tình yêu. Tình yêu là nguyên nhân quan trọng nhất của việc kết hôn, nhưng chỉ có tình yêu thôi thì không đủ."}
     ],
     explain:"说话人觉得结婚的最重要原因是什么？ → 爱情。"},
    {num:20, options:["相信自己","不要生气","早点儿回家","互相关心"], ans:3, q:"夫妻两个人怎样才能很好地一起生活？",
     lines:[
      {speaker:"旁白", pre:"两个人还应该互相理解、互相关心，", blank:"只有这样才能很好地生活在一起", post:"。",
       py:"Liǎng ge rén hái yīnggāi hùxiāng lǐjiě, hùxiāng guānxīn, zhǐyǒu zhèyàng cái néng hěn hǎo de shēnghuó zài yìqǐ.",
       vn:"Hai người còn nên hiểu nhau, quan tâm lẫn nhau, chỉ có như vậy mới có thể sống tốt cùng nhau."}
     ],
     explain:"夫妻两个人怎样才能很好地在一起生活？ → 互相理解、互相关心。"},
    {num:21, options:["很自然","很普通","会开玩笑","没意思"], ans:2, q:"幽默的人怎么样？",
     lines:[
      {speaker:"旁白", pre:"一个有幽默感的人走到哪里，都会给别人带去快乐，", blank:"所以总是受到大家的欢迎", post:"。",
       py:"Yí ge yǒu yōumògǎn de rén zǒudào nǎli, dōu huì gěi biéren dàiqu kuàilè, suǒyǐ zǒngshì shòudào dàjiā de huānyíng.",
       vn:"Người có khiếu hài hước đi đến đâu cũng mang niềm vui cho người khác, nên luôn được mọi người yêu mến."}
     ],
     explain:"幽默的人怎么样？ → 总是受到大家的欢迎。"},
    {num:22, options:["让人快乐","特别客气","做事认真","没有缺点"], ans:0, q:"人们为什么都喜欢幽默的人？",
     lines:[
      {speaker:"旁白", pre:"幽默的人能在很多事情中发现有意思的东西，", blank:"让人笑得肚子疼", post:"。",
       py:"Yōumò de rén néng zài hěn duō shìqing zhōng fāxiàn yǒu yìsi de dōngxi, ràng rén xiào de dùzi téng.",
       vn:"Người hóm hỉnh có thể tìm ra điều thú vị trong nhiều việc, khiến người ta cười đau cả bụng."}
     ],
     explain:"人们为什么都喜欢幽默的人？ → 因为他们给大家带来快乐。"}
  ]
};
