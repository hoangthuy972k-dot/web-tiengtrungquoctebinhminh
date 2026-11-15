// ══════════════════════════════════════════
// DATA — HSK3 Bài 17: 谁都有办法看好你的"病" (Ai cũng có cách chữa khỏi "bệnh" của em)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "请假",
    "py": "qǐng jià",
    "pos": "Động từ",
    "vn": "xin nghỉ phép",
    "hv": "thỉnh giá",
    "em": "📝",
    "lesson": 1,
    "explain": [
      "Xin phép nghỉ, không đi làm hoặc đi học trong một khoảng thời gian."
    ],
    "usage": "Động từ ly hợp: 请 + 假; đi cùng số ngày: 请几天假.",
    "collo": [
      "请几天假",
      "请病假",
      "请事假"
    ],
    "ex_zh": "下个星期我可以请几天假吗？",
    "ex_py": "Xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?",
    "ex_vn": "Tuần sau em xin nghỉ mấy ngày được không ạ?",
    "exList": [
      {
        "zh": "周经理，下个星期我可以请几天假吗？",
        "py": "Zhōu jīnglǐ, xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?",
        "vn": "Giám đốc Chu, tuần sau em xin nghỉ mấy ngày được không ạ?"
      },
      {
        "zh": "老师，我可以请几天假吗？",
        "py": "Lǎoshī, wǒ kěyǐ qǐng jǐ tiān jià ma?",
        "vn": "Thầy ơi, em xin nghỉ mấy ngày được không ạ?"
      },
      {
        "zh": "这个月你已经请了两个星期假了，不能再请了。",
        "py": "Zhège yuè nǐ yǐjīng qǐngle liǎng ge xīngqī jià le, bù néng zài qǐng le.",
        "vn": "Tháng này bạn đã xin nghỉ hai tuần rồi, không thể xin nữa đâu."
      }
    ],
    "hanzi": [
      {
        "c": "假",
        "p": "jià",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "亻 trái → 段 phải (giản thể)",
        "rad": "亻 (nhân – người)",
        "mean": "kỳ nghỉ; giả",
        "tip": "亻(người) + 段(một đoạn, thời gian) → khoảng thời gian NGƯỜI được nghỉ; khi đọc jiǎ nghĩa là GIẢ, KHÔNG THẬT.",
        "cf": "暇 (xiá – \"rảnh rỗi\", có bộ 日\")",
        "w": "请假 / 假期"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tháng này tôi đã xin nghỉ ba ngày rồi, nên tuần sau không thể xin nữa.",
        "answer": "因为这个月我已经请了三天假了，所以下个星期不能再请了。",
        "answerPy": "Yīnwèi zhège yuè wǒ yǐjīng qǐngle sān tiān jià le, suǒyǐ xià ge xīngqī bù néng zài qǐng le.",
        "note": "请假 là từ ly hợp: 请了三天假 ✓ / 请假了三天 ✗.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không khỏe thì cứ xin nghỉ đi.",
        "answer": "如果你不舒服，就请假吧。",
        "answerPy": "Rúguǒ nǐ bù shūfu, jiù qǐngjià ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "请几天假",
        "py": "qǐng jǐ tiān jià",
        "vn": "xin nghỉ mấy ngày"
      },
      {
        "zh": "请病假",
        "py": "qǐng bìng jià",
        "vn": "xin nghỉ ốm"
      },
      {
        "zh": "请事假",
        "py": "qǐng shì jià",
        "vn": "xin nghỉ việc riêng"
      },
      {
        "zh": "请了三天假",
        "py": "qǐng le sān tiān jià",
        "vn": "đã xin nghỉ ba ngày"
      },
      {
        "zh": "跟老师请假",
        "py": "gēn lǎoshī qǐng jià",
        "vn": "xin phép thầy"
      }
    ],
    "patterns": [
      {
        "s": "请 + thời lượng + 假",
        "m": "请假 là từ ly hợp: 请了三天假 ✓ / 请假了三天 ✗"
      },
      {
        "s": "跟 + ai + 请假",
        "m": "Xin phép ai"
      }
    ]
  },
  {
    "n": 2,
    "zh": "一共",
    "py": "yígòng",
    "pos": "Phó từ",
    "vn": "tổng cộng",
    "hv": "nhất cộng",
    "em": "🔢",
    "lesson": 1,
    "explain": [
      "Diễn tả tổng số lượng khi cộng gộp lại."
    ],
    "usage": "Phó từ, đứng trước động từ hoặc số lượng: 一共 + [số lượng/động từ].",
    "collo": [
      "一共想请几天",
      "一共21个学生",
      "一共写100个"
    ],
    "ex_zh": "你一共想请几天假？",
    "ex_py": "Nǐ yígòng xiǎng qǐng jǐ tiān jià?",
    "ex_vn": "Em muốn xin nghỉ tổng cộng mấy ngày?",
    "exList": [
      {
        "zh": "你一共想请几天假？",
        "py": "Nǐ yígòng xiǎng qǐng jǐ tiān jià?",
        "vn": "Em muốn xin nghỉ tổng cộng mấy ngày?"
      },
      {
        "zh": "这个学期我们班新来了2个同学，一共21个学生。",
        "py": "Zhège xuéqī wǒmen bān xīn láile liǎng ge tóngxué, yígòng èrshíyī ge xuésheng.",
        "vn": "Học kỳ này lớp chúng tôi có thêm 2 bạn mới, tổng cộng 21 học sinh."
      },
      {
        "zh": "比赛是根据要求写汉字，一共写100个。",
        "py": "Bǐsài shì gēnjù yāoqiú xiě hànzì, yígòng xiě yìbǎi ge.",
        "vn": "Cuộc thi là viết chữ Hán theo yêu cầu, tổng cộng viết 100 chữ."
      }
    ],
    "hanzi": [
      {
        "c": "共",
        "p": "gòng",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "廿 trên → 八 dưới",
        "rad": "八 (bát)",
        "mean": "cùng, chung",
        "tip": "廿(hai mươi, số nhiều) + 八(chia ra) → nhiều người CÙNG CHUNG một việc; 一(một)+共(chung) = TỔNG CỘNG.",
        "cf": "具 (jù – \"dụng cụ\", có 目 thay vì 廿\")",
        "w": "一共 / 共同"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tháng trước tổ tôi có thêm ba đồng nghiệp mới, nên bây giờ tổng cộng mười hai người.",
        "answer": "因为上个月我们组新来了3个同事，所以现在一共12个人。",
        "answerPy": "Yīnwèi shàng ge yuè wǒmen zǔ xīn láile 3 ge tóngshì, suǒyǐ xiànzài yígòng 12 ge rén.",
        "note": "同事 là từ bài 7; 一共 đếm tổng số.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu tổng cộng có 21 học sinh thì phòng học đủ chỗ không?",
        "answer": "如果一共有21个学生，教室就够坐吗？",
        "answerPy": "Rúguǒ yígòng yǒu èrshíyī ge xuésheng, jiàoshì jiù gòu zuò ma?",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "一共12个人",
        "py": "yígòng gè rén",
        "vn": "tổng cộng 12 người"
      },
      {
        "zh": "一共多少钱",
        "py": "yígòng duōshao qián",
        "vn": "tổng cộng bao nhiêu tiền"
      },
      {
        "zh": "一共写100个",
        "py": "yígòng xiě gè",
        "vn": "viết tổng cộng 100 chữ"
      },
      {
        "zh": "一共三天",
        "py": "yígòng sān tiān",
        "vn": "tổng cộng ba ngày"
      },
      {
        "zh": "一共有",
        "py": "yígòng yǒu",
        "vn": "tổng cộng có"
      }
    ],
    "patterns": [
      {
        "s": "一共 + số lượng",
        "m": "Tổng cộng bao nhiêu"
      },
      {
        "s": "一共 (tổng số) ≠ 都 (đều) — 一共 đếm, 都 nói về từng cái"
      }
    ]
  },
  {
    "n": 3,
    "zh": "邻居",
    "py": "línjū",
    "pos": "Danh từ",
    "vn": "láng giềng",
    "hv": "lân cư",
    "em": "🏘️",
    "lesson": 2,
    "explain": [
      "Người sống gần nhà, cùng khu vực."
    ],
    "usage": "Danh từ; đi cùng động từ 是: 是邻居.",
    "collo": [
      "是邻居",
      "新邻居",
      "过去是邻居"
    ],
    "ex_zh": "我们过去是邻居，后来是大学同学。",
    "ex_py": "Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué.",
    "ex_vn": "Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học.",
    "exList": [
      {
        "zh": "我们过去是邻居，后来是大学同学，关系一直很不错。",
        "py": "Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.",
        "vn": "Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt."
      },
      {
        "zh": "我们是你们的新邻居，昨天刚搬过来。",
        "py": "Wǒmen shì nǐmen de xīn línjū, zuótiān gāng bān guolai.",
        "vn": "Chúng tôi là hàng xóm mới của các bạn, hôm qua vừa chuyển đến."
      },
      {
        "zh": "我们在这儿住了五年了，对这儿很了解。",
        "py": "Wǒmen zài zhèr zhùle wǔ nián le, duì zhèr hěn liǎojiě.",
        "vn": "Chúng tôi sống ở đây năm năm rồi, rất hiểu rõ nơi này."
      }
    ],
    "hanzi": [
      {
        "c": "邻",
        "p": "lín",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "令 trái → 阝 phải (giản thể)",
        "rad": "阝 (ấp – khu dân cư)",
        "mean": "láng giềng",
        "tip": "令(ra lệnh, gần gũi) + 阝(khu dân cư) → những nhà gần nhau trong cùng khu = LÁNG GIỀNG.",
        "cf": "冷 (lěng – \"lạnh\", có bộ 冫\")",
        "w": "邻居 / 邻近"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Họ là hàng xóm mới ở đối diện, tuần trước vừa chuyển đến nên chúng tôi chưa quen lắm.",
        "answer": "他们是我们对面的新邻居，上个星期刚搬过来，所以我们还不太熟。",
        "answerPy": "Tāmen shì wǒmen duìmiàn de xīn línjū, shàng ge xīngqī gāng bān guolai, suǒyǐ wǒmen hái bú tài shú.",
        "note": "搬 là từ bài 1; 刚 — vừa mới.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có vấn đề gì thì có thể đến hỏi hàng xóm.",
        "answer": "如果你有什么问题，就可以来问邻居。",
        "answerPy": "Rúguǒ nǐ yǒu shénme wèntí, jiù kěyǐ lái wèn línjū.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "新邻居",
        "py": "xīn línjū",
        "vn": "hàng xóm mới"
      },
      {
        "zh": "是邻居",
        "py": "shì línjū",
        "vn": "là hàng xóm"
      },
      {
        "zh": "邻居家",
        "py": "línjū jiā",
        "vn": "nhà hàng xóm"
      },
      {
        "zh": "对面的邻居",
        "py": "duìmiàn de línjū",
        "vn": "hàng xóm đối diện"
      },
      {
        "zh": "跟邻居聊天儿",
        "py": "gēn línjū liáo tiān ér",
        "vn": "trò chuyện với hàng xóm"
      }
    ],
    "patterns": [
      {
        "s": "对面的 + 邻居",
        "m": "Hàng xóm đối diện"
      },
      {
        "s": "邻 + 居",
        "m": "Ở (居) gần bên (邻)"
      }
    ]
  },
  {
    "n": 4,
    "zh": "后来",
    "py": "hòulái",
    "pos": "Danh từ",
    "vn": "sau này, sau đó",
    "hv": "hậu lai",
    "em": "⏭️",
    "lesson": 2,
    "explain": [
      "Chỉ khoảng thời gian tiếp theo sau một sự việc đã xảy ra."
    ],
    "usage": "Danh từ chỉ thời gian, thường đứng đầu câu hoặc sau chủ ngữ.",
    "collo": [
      "后来是",
      "后来发现",
      "后来儿子生病了"
    ],
    "ex_zh": "我们过去是邻居，后来是大学同学。",
    "ex_py": "Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué.",
    "ex_vn": "Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học.",
    "exList": [
      {
        "zh": "我们过去是邻居，后来是大学同学，关系一直很不错。",
        "py": "Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.",
        "vn": "Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt."
      },
      {
        "zh": "后来发现没带钱包，只好都放回去了。",
        "py": "Hòulái fāxiàn méi dài qiánbāo, zhǐhǎo dōu fàng huiqu le.",
        "vn": "Sau đó phát hiện không mang ví tiền, đành phải để lại hết."
      },
      {
        "zh": "后来儿子生病了，为了照顾他，哪儿都没去。",
        "py": "Hòulái érzi shēngbìng le, wèile zhàogù tā, nǎr dōu méi qù.",
        "vn": "Sau đó con trai bị bệnh, để chăm sóc con, chẳng đi đâu cả."
      }
    ],
    "hanzi": [
      {
        "c": "后",
        "p": "hòu",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "尸 ngoài → 口 trong (giản thể)",
        "rad": "尸 (thi)",
        "mean": "sau, phía sau",
        "tip": "Chữ giản thể mô phỏng hình người bước CHẬM lại phía SAU đoàn người → SAU, PHÍA SAU; 后(sau)+来(đến) = SAU NÀY.",
        "cf": "厚 (hòu – \"dày\", có 厂 thay vì 尸\")",
        "w": "后来 / 以后 / 后边"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sau đó con gái phải thi, để cho con yên tâm ôn tập, cả nhà chúng tôi chẳng đi chơi đâu cả.",
        "answer": "后来女儿要考试了，为了让她安心复习，我们哪儿都没去玩儿。",
        "answerPy": "Hòulái nǚ'ér yào kǎoshì le, wèile ràng tā ānxīn fùxí, wǒmen nǎr dōu méi qù wánr.",
        "note": "哪儿都 + phủ định diễn tả toàn bộ không ngoại lệ (điểm ngữ pháp trọng tâm bài này).",
        "pair": "为了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu sau này bạn hiểu rõ hơn thì hãy nói cho tôi biết.",
        "answer": "如果后来你更了解了，就告诉我吧。",
        "answerPy": "Rúguǒ hòulái nǐ gèng liǎojiě le, jiù gàosu wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "后来发现",
        "py": "hòulái fāxiàn",
        "vn": "sau đó phát hiện"
      },
      {
        "zh": "后来是",
        "py": "hòulái shì",
        "vn": "về sau là"
      },
      {
        "zh": "后来怎么样了",
        "py": "hòulái zěnmeyàng le",
        "vn": "sau đó thế nào"
      },
      {
        "zh": "以前……后来……",
        "py": "yǐqián hòulái",
        "vn": "trước đây… về sau…"
      },
      {
        "zh": "后来就搬走了",
        "py": "hòulái jiù bān zǒu le",
        "vn": "sau đó thì chuyển đi"
      }
    ],
    "patterns": [
      {
        "s": "以前……，后来……",
        "m": "Trước đây …, về sau …"
      },
      {
        "s": "后来 chỉ dùng cho việc ĐÃ QUA; việc sắp tới dùng 以后"
      }
    ]
  },
  {
    "n": 5,
    "zh": "爱好",
    "py": "àihào",
    "pos": "Danh từ",
    "vn": "sở thích",
    "hv": "ái hiếu",
    "em": "❤️",
    "lesson": 2,
    "explain": [
      "Điều mà một người thích làm, quan tâm thường xuyên."
    ],
    "usage": "Danh từ; đi cùng động từ 有: 有很多爱好.",
    "collo": [
      "很多爱好",
      "我的爱好",
      "有兴趣的爱好"
    ],
    "ex_zh": "他有很多爱好，什么都会。",
    "ex_py": "Tā yǒu hěn duō àihào, shénme dōu huì.",
    "ex_vn": "Anh ấy có nhiều sở thích, cái gì cũng biết.",
    "exList": [
      {
        "zh": "他有很多爱好，唱歌、画画儿、踢足球，什么都会。",
        "py": "Tā yǒu hěn duō àihào, chànggē, huà huàr, tī zúqiú, shénme dōu huì.",
        "vn": "Anh ấy có nhiều sở thích, hát, vẽ tranh, đá bóng, cái gì cũng biết."
      },
      {
        "zh": "我的爱好是游泳。",
        "py": "Wǒ de àihào shì yóuyǒng.",
        "vn": "Sở thích của tôi là bơi lội."
      },
      {
        "zh": "我的爱好跟你的不一样，我更喜欢游泳。",
        "py": "Wǒ de àihào gēn nǐ de bù yíyàng, wǒ gèng xǐhuan yóuyǒng.",
        "vn": "Sở thích của tôi khác với của bạn, tôi thích bơi lội hơn."
      }
    ],
    "hanzi": [
      {
        "c": "好",
        "p": "hào",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "女 trái → 子 phải",
        "rad": "女 (nữ)",
        "mean": "thích; tốt (đa âm)",
        "tip": "女(nữ) + 子(con cái) → mẹ ôm con thể hiện tình yêu THÍCH THÚ; khi đọc hǎo nghĩa là TỐT, khi đọc hào nghĩa là THÍCH.",
        "cf": "子 (zǐ – \"con\", không có bộ 女\")",
        "w": "爱好 / 好奇"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sở thích của em trai tôi khác với tôi, nó thích đá bóng hơn.",
        "answer": "我弟弟的爱好跟我的不一样，他更喜欢踢足球。",
        "answerPy": "Wǒ dìdi de àihào gēn wǒ de bù yíyàng, tā gèng xǐhuan tī zúqiú.",
        "note": "跟……不一样 diễn tả sự khác biệt.",
        "pair": "跟……一样……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn có sở thích chung thì các bạn sẽ trở thành bạn tốt.",
        "answer": "只要你们有共同的爱好，就会成为好朋友。",
        "answerPy": "Zhǐyào nǐmen yǒu gòngtóng de àihào, jiù huì chéngwéi hǎo péngyou.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "我的爱好",
        "py": "wǒ de àihào",
        "vn": "sở thích của tôi"
      },
      {
        "zh": "很多爱好",
        "py": "hěn duō àihào",
        "vn": "nhiều sở thích"
      },
      {
        "zh": "一个爱好",
        "py": "yí gè àihào",
        "vn": "một sở thích"
      },
      {
        "zh": "适合自己的爱好",
        "py": "shìhé zìjǐ de àihào",
        "vn": "sở thích hợp với mình"
      },
      {
        "zh": "爱好是看书",
        "py": "àihào shì kàn shū",
        "vn": "sở thích là đọc sách"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 的爱好 + 是 + …",
        "m": "Sở thích của ai là gì"
      },
      {
        "s": "爱好 (danh từ, sở thích) — khác 喜欢 (động từ, thích)"
      }
    ]
  },
  {
    "n": 6,
    "zh": "办法",
    "py": "bànfǎ",
    "pos": "Danh từ",
    "vn": "cách, biện pháp",
    "hv": "biện pháp",
    "em": "💡",
    "lesson": 3,
    "explain": [
      "Cách thức, phương pháp để giải quyết một việc."
    ],
    "usage": "Danh từ; đi cùng động từ 有/想: 有办法, 想办法.",
    "collo": [
      "有办法",
      "想办法",
      "没办法"
    ],
    "ex_zh": "谁都有办法看好你的\"病\"。",
    "ex_py": "Shéi dōu yǒu bànfǎ kànhǎo nǐ de \"bìng\".",
    "ex_vn": "Ai cũng có cách chữa khỏi \"bệnh\" của em.",
    "exList": [
      {
        "zh": "不用去医院，谁都有办法看好你的\"病\"。",
        "py": "Búyòng qù yīyuàn, shéi dōu yǒu bànfǎ kànhǎo nǐ de \"bìng\".",
        "vn": "Không cần đi bệnh viện đâu, ai cũng có cách chữa khỏi \"bệnh\" của em."
      },
      {
        "zh": "有些事情必须要自己来做选择和决定，不能什么都请别人帮忙。",
        "py": "Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng, bù néng shénme dōu qǐng biéren bāngmáng.",
        "vn": "Có những việc phải tự mình lựa chọn và quyết định, không thể việc gì cũng nhờ người khác giúp."
      },
      {
        "zh": "没办法，为了瘦一点儿，我必须少吃。",
        "py": "Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.",
        "vn": "Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại."
      }
    ],
    "hanzi": [
      {
        "c": "法",
        "p": "fǎ",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "氵 trái → 去 phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "phương pháp, luật",
        "tip": "氵(nước, công bằng như mặt nước) + 去(đi qua) → quy tắc PHÁP LUẬT áp dụng công bằng; 办(làm)+法(phương pháp) = CÁCH LÀM.",
        "cf": "去 (qù – \"đi\", không có bộ 氵\")",
        "w": "办法 / 法律"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Không còn cách nào khác, để qua được kỳ thi, tôi phải ôn tập thêm hai tiếng mỗi ngày.",
        "answer": "没办法，为了通过考试，我必须每天多复习两个小时。",
        "answerPy": "Méi bànfǎ, wèile tōngguò kǎoshì, wǒ bìxū měitiān duō fùxí liǎng ge xiǎoshí.",
        "note": "为了 diễn tả mục đích (sẽ học ngay bên dưới trong bài này).",
        "pair": "为了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn có cách hay thì hãy nói cho tôi biết.",
        "answer": "如果你有好办法，就告诉我吧。",
        "answerPy": "Rúguǒ nǐ yǒu hǎo bànfǎ, jiù gàosu wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "有办法",
        "py": "yǒu bànfǎ",
        "vn": "có cách"
      },
      {
        "zh": "想办法",
        "py": "xiǎng bànfǎ",
        "vn": "nghĩ cách"
      },
      {
        "zh": "没办法",
        "py": "méi bànfǎ",
        "vn": "không còn cách nào"
      },
      {
        "zh": "好办法",
        "py": "hǎo bànfǎ",
        "vn": "cách hay"
      },
      {
        "zh": "这个办法不错",
        "py": "zhège bànfǎ búcuò",
        "vn": "cách này khá ổn"
      }
    ],
    "patterns": [
      {
        "s": "想 + 办法",
        "m": "Nghĩ cách — dùng 想, không dùng 做"
      },
      {
        "s": "没办法 + V",
        "m": "Không có cách nào làm được gì"
      }
    ]
  },
  {
    "n": 7,
    "zh": "饱",
    "py": "bǎo",
    "pos": "Tính từ",
    "vn": "no",
    "hv": "bão",
    "em": "🍚",
    "lesson": 3,
    "explain": [
      "Trạng thái ăn đủ, không còn đói."
    ],
    "usage": "Tính từ, làm bổ ngữ sau động từ 吃: 吃饱了.",
    "collo": [
      "吃饱",
      "吃不饱",
      "吃饱了就睡"
    ],
    "ex_zh": "你吃饱了就睡。",
    "ex_py": "Nǐ chībǎole jiù shuì.",
    "ex_vn": "Em ăn no là ngủ.",
    "exList": [
      {
        "zh": "谁都知道运动对身体好。但是你吃饱了就睡。",
        "py": "Shéi dōu zhīdào yùndòng duì shēntǐ hǎo. Dànshì nǐ chībǎole jiù shuì.",
        "vn": "Ai cũng biết vận động tốt cho sức khỏe. Nhưng em ăn no là ngủ."
      },
      {
        "zh": "你的早饭只有一杯咖啡和一小块蛋糕，吃不饱。",
        "py": "Nǐ de zǎofàn zhǐyǒu yì bēi kāfēi hé yì xiǎo kuài dàngāo, chī bu bǎo.",
        "vn": "Bữa sáng của bạn chỉ có một cốc cà phê và một miếng bánh nhỏ, ăn không no đâu."
      },
      {
        "zh": "我吃饱了，谢谢。",
        "py": "Wǒ chībǎo le, xièxie.",
        "vn": "Tôi ăn no rồi, cảm ơn."
      }
    ],
    "hanzi": [
      {
        "c": "饱",
        "p": "bǎo",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "饣 trái → 包 phải",
        "rad": "饣 (thực – ăn)",
        "mean": "no",
        "tip": "饣(ăn) + 包(gói tròn, đầy) → ăn đến khi bụng ĐẦY, TRÒN như cái gói = NO.",
        "cf": "抱 (bào – \"ôm\", có bộ 扌\")",
        "w": "吃饱 / 饱了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bữa trưa của bạn chỉ có một bát cơm và một chút rau xanh, ăn không no đâu.",
        "answer": "你的午饭只有一碗米饭和一点儿青菜，吃不饱。",
        "answerPy": "Nǐ de wǔfàn zhǐyǒu yì wǎn mǐfàn hé yìdiǎnr qīngcài, chī bu bǎo.",
        "note": "吃不饱 diễn tả khả năng phủ định (không thể no).",
        "pair": "只有……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn ăn no rồi thì đừng đi ngủ ngay.",
        "answer": "如果你吃饱了，就别马上去睡觉。",
        "answerPy": "Rúguǒ nǐ chībǎo le, jiù bié mǎshàng qù shuìjiào.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "吃饱",
        "py": "chī bǎo",
        "vn": "ăn no"
      },
      {
        "zh": "吃不饱",
        "py": "chī bù bǎo",
        "vn": "ăn không no"
      },
      {
        "zh": "吃饱了",
        "py": "chī bǎo le",
        "vn": "no rồi"
      },
      {
        "zh": "很饱",
        "py": "hěn bǎo",
        "vn": "rất no"
      },
      {
        "zh": "吃饱了就睡",
        "py": "chī bǎo le jiù shuì",
        "vn": "ăn no là ngủ"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 饱",
        "m": "Ăn no — 饱 là bổ ngữ kết quả"
      },
      {
        "s": "饱 ↔ 饿",
        "m": "No ↔ đói (bài 4)"
      }
    ]
  },
  {
    "n": 8,
    "zh": "为了",
    "py": "wèile",
    "pos": "Giới từ",
    "vn": "để, vì",
    "hv": "vị liễu",
    "em": "🎯",
    "lesson": 3,
    "explain": [
      "Nêu mục đích của một hành động."
    ],
    "usage": "为了 + [mục đích]，[hành động].",
    "collo": [
      "为了健康",
      "为了瘦一点儿",
      "为了照顾他"
    ],
    "ex_zh": "为了健康，我真应该多锻炼锻炼了。",
    "ex_py": "Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le.",
    "ex_vn": "Vì sức khỏe, em thật sự nên tập luyện nhiều hơn.",
    "exList": [
      {
        "zh": "为了健康，我真应该多锻炼锻炼了。",
        "py": "Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le.",
        "vn": "Vì sức khỏe, em thật sự nên tập luyện nhiều hơn."
      },
      {
        "zh": "没办法，为了瘦一点儿，我必须少吃。",
        "py": "Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.",
        "vn": "Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại."
      },
      {
        "zh": "为了照顾他，哪儿都没去。",
        "py": "Wèile zhàogù tā, nǎr dōu méi qù.",
        "vn": "Để chăm sóc con, chẳng đi đâu cả."
      }
    ],
    "hanzi": [
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
        "w": "为了 / 因为"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Để chăm sóc mẹ bị ốm, tuần này tôi chẳng đi đâu cả.",
        "answer": "为了照顾生病的妈妈，这个星期我哪儿都没去。",
        "answerPy": "Wèile zhàogù shēngbìng de māma, zhège xīngqī wǒ nǎr dōu méi qù.",
        "note": "为了 nêu mục đích, đứng đầu câu.",
        "pair": "为了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì muốn nâng cao trình độ tiếng Trung, tôi quyết định mỗi ngày đọc sách.",
        "answer": "为了提高汉语水平，我决定每天看书。",
        "answerPy": "Wèile tígāo Hànyǔ shuǐpíng, wǒ juédìng měitiān kàn shū.",
        "note": "为了 + mục đích, 决定 + hành động (ôn lại 提高/水平 đã học ở Bài 15).",
        "pair": "为了……"
      }
    ],
    "colloFull": [
      {
        "zh": "为了健康",
        "py": "wèile jiànkāng",
        "vn": "vì sức khoẻ"
      },
      {
        "zh": "为了瘦一点儿",
        "py": "wèile shòu yìdiǎnr",
        "vn": "để gầy hơn chút"
      },
      {
        "zh": "为了照顾他",
        "py": "wèile zhàogù tā",
        "vn": "để chăm sóc anh ấy"
      },
      {
        "zh": "为了考试",
        "py": "wèile kǎoshì",
        "vn": "vì kỳ thi"
      },
      {
        "zh": "为了学好汉语",
        "py": "wèile xué hǎo Hànyǔ",
        "vn": "để học tốt tiếng Trung"
      }
    ],
    "patterns": [
      {
        "s": "为了 + mục đích，Sub + V",
        "m": "Vì, để … mà làm gì"
      },
      {
        "s": "为了 (mục đích) ≠ 因为 (nguyên nhân)"
      }
    ]
  },
  {
    "n": 9,
    "zh": "决定",
    "py": "juédìng",
    "pos": "Động từ",
    "vn": "quyết định",
    "hv": "quyết định",
    "em": "✅",
    "lesson": 3,
    "explain": [
      "Đưa ra lựa chọn cuối cùng sau khi suy nghĩ."
    ],
    "usage": "Động từ, mang tân ngữ là mệnh đề: 决定 + [việc].",
    "collo": [
      "决定每天",
      "做决定",
      "自己决定"
    ],
    "ex_zh": "从明天起，我决定每天去长跑。",
    "ex_py": "Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.",
    "ex_vn": "Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài.",
    "exList": [
      {
        "zh": "为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。",
        "py": "Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le. Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.",
        "vn": "Vì sức khỏe, em thật sự nên tập luyện nhiều hơn. Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài."
      },
      {
        "zh": "有些事情必须要自己来做选择和决定。",
        "py": "Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.",
        "vn": "Có những việc phải tự mình lựa chọn và quyết định."
      },
      {
        "zh": "我还没决定呢。",
        "py": "Wǒ hái méi juédìng ne.",
        "vn": "Tôi vẫn chưa quyết định đâu."
      }
    ],
    "hanzi": [
      {
        "c": "定",
        "p": "dìng",
        "type": "上下结构 · Trên-dưới",
        "st": 8,
        "ord": "宀 trên → 定 dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "quyết định, ổn định",
        "tip": "宀(mái nhà) + 疋(bàn chân đứng vững) → đứng vững dưới MÁI NHÀ, không lung lay = ỔN ĐỊNH, mở rộng QUYẾT ĐỊNH.",
        "cf": "空 (kōng – \"trống rỗng\", có 工 thay vì 疋\")",
        "w": "决定 / 一定 / 定"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cuối tuần này có đi leo núi không thì tôi vẫn chưa quyết, vì còn phải xem thời tiết.",
        "answer": "这个周末去不去爬山，我还没决定呢，因为还要看天气。",
        "answerPy": "Zhège zhōumò qù bu qù páshān, wǒ hái méi juédìng ne, yīnwèi hái yào kàn tiānqì.",
        "note": "爬山 là từ bài 3; 决定 + V — quyết định làm gì.",
        "pair": "因为……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn quyết định đi thì tôi sẽ đi cùng bạn.",
        "answer": "如果你决定去，我就跟你一起去。",
        "answerPy": "Rúguǒ nǐ juédìng qù, wǒ jiù gēn nǐ yìqǐ qù.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "做决定",
        "py": "zuò juédìng",
        "vn": "đưa ra quyết định"
      },
      {
        "zh": "自己决定",
        "py": "zìjǐ juédìng",
        "vn": "tự quyết định"
      },
      {
        "zh": "决定每天跑步",
        "py": "juédìng měi tiān pǎobù",
        "vn": "quyết định chạy bộ mỗi ngày"
      },
      {
        "zh": "还没决定",
        "py": "hái méi juédìng",
        "vn": "vẫn chưa quyết"
      },
      {
        "zh": "决定去",
        "py": "juédìng qù",
        "vn": "quyết định đi"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 决定 + V (động từ)",
        "m": "Ai đó quyết định làm gì"
      },
      {
        "s": "做 + 决定 (danh từ)",
        "m": "Đưa ra quyết định"
      }
    ]
  },
  {
    "n": 10,
    "zh": "选择",
    "py": "xuǎnzé",
    "pos": "Động từ",
    "vn": "lựa chọn",
    "hv": "tuyển trạch",
    "em": "☑️",
    "lesson": 4,
    "explain": [
      "Chọn ra một trong nhiều khả năng."
    ],
    "usage": "Động từ, mang tân ngữ: 选择 + [đối tượng].",
    "collo": [
      "选择时间",
      "选择地点",
      "做选择"
    ],
    "ex_zh": "第一，要选择\"对\"的时间。",
    "ex_py": "Dì yī, yào xuǎnzé \"duì\" de shíjiān.",
    "ex_vn": "Thứ nhất, phải chọn thời gian \"đúng\".",
    "exList": [
      {
        "zh": "第一，要选择\"对\"的时间。",
        "py": "Dì yī, yào xuǎnzé \"duì\" de shíjiān.",
        "vn": "Thứ nhất, phải chọn thời gian \"đúng\"."
      },
      {
        "zh": "第二，要选择\"对\"的地点。",
        "py": "Dì èr, yào xuǎnzé \"duì\" de dìdiǎn.",
        "vn": "Thứ hai, phải chọn địa điểm \"đúng\"."
      },
      {
        "zh": "有些事情必须要自己来做选择和决定。",
        "py": "Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.",
        "vn": "Có những việc phải tự mình lựa chọn và quyết định."
      }
    ],
    "hanzi": [
      {
        "c": "选",
        "p": "xuǎn",
        "type": "半包围结构 · Bán bao vây",
        "st": 9,
        "ord": "辶 ngoài → 先 trong",
        "rad": "辶 (sước – đi)",
        "mean": "lựa chọn",
        "tip": "辶(đi) + 先(trước tiên) → đi TRƯỚC để CHỌN LỰA cái tốt nhất = LỰA CHỌN.",
        "cf": "洗 (xǐ – \"rửa\", có bộ 氵\")",
        "w": "选择 / 选举"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thứ hai, phải chọn sở thích hợp với mình, như vậy mới giữ được lâu.",
        "answer": "第二，要选择适合自己的爱好，这样才能坚持下去。",
        "answerPy": "Dì-èr, yào xuǎnzé shìhé zìjǐ de àihào, zhèyàng cái néng jiānchí xiàqu.",
        "note": "自己 là từ bài 12; 选择 + N — lựa chọn cái gì.",
        "pair": "只有……才……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn không biết chọn cái nào thì hỏi tôi đi.",
        "answer": "如果你不知道选择哪个，就问我吧。",
        "answerPy": "Rúguǒ nǐ bù zhīdào xuǎnzé nǎge, jiù wèn wǒ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "选择时间",
        "py": "xuǎnzé shíjiān",
        "vn": "chọn thời gian"
      },
      {
        "zh": "选择地点",
        "py": "xuǎnzé dìdiǎn",
        "vn": "chọn địa điểm"
      },
      {
        "zh": "做选择",
        "py": "zuò xuǎnzé",
        "vn": "đưa ra lựa chọn"
      },
      {
        "zh": "选择适合自己的",
        "py": "xuǎnzé shìhé zìjǐ de",
        "vn": "chọn cái hợp với mình"
      },
      {
        "zh": "很难选择",
        "py": "hěn nán xuǎnzé",
        "vn": "rất khó chọn"
      }
    ],
    "patterns": [
      {
        "s": "选择 + N (động từ)",
        "m": "Lựa chọn cái gì"
      },
      {
        "s": "做 + 选择 (danh từ)",
        "m": "Đưa ra sự lựa chọn"
      }
    ]
  },
  {
    "n": 11,
    "zh": "冬(天)",
    "py": "dōng(tiān)",
    "pos": "Danh từ",
    "vn": "(mùa) đông",
    "hv": "đông thiên",
    "em": "❄️",
    "lesson": 4,
    "explain": [
      "Mùa lạnh nhất trong năm."
    ],
    "usage": "Danh từ chỉ mùa; đi cùng động từ 要: 冬天要再晚一些.",
    "collo": [
      "冬天",
      "今年冬天",
      "冬天特别长"
    ],
    "ex_zh": "冬天要再晚一些。",
    "ex_py": "Dōngtiān yào zài wǎn yìxiē.",
    "ex_vn": "Mùa đông thì phải muộn hơn một chút.",
    "exList": [
      {
        "zh": "一般来说，早上9点是最好的时间，冬天要再晚一些。",
        "py": "Yìbān lái shuō, zǎoshang jiǔ diǎn shì zuì hǎo de shíjiān, dōngtiān yào zài wǎn yìxiē.",
        "vn": "Nói chung, 9 giờ sáng là thời gian tốt nhất, mùa đông thì phải muộn hơn một chút."
      },
      {
        "zh": "雪下得真大，谁都没想到今年冬天能下这么大的雪。",
        "py": "Xuě xià de zhēn dà, shéi dōu méi xiǎngdào jīnnián dōngtiān néng xià zhème dà de xuě.",
        "vn": "Tuyết rơi to thật, ai cũng không ngờ mùa đông năm nay lại có tuyết to thế."
      },
      {
        "zh": "冬天特别长，从11月到第二年3月都比较冷。",
        "py": "Dōngtiān tèbié cháng, cóng shíyī yuè dào dì-èr nián sān yuè dōu bǐjiào lěng.",
        "vn": "Mùa đông đặc biệt dài, từ tháng 11 đến tháng 3 năm sau đều khá lạnh."
      }
    ],
    "hanzi": [
      {
        "c": "冬",
        "p": "dōng",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 5,
        "ord": "nét liền",
        "rad": "冫 (băng – nước đá)",
        "mean": "mùa đông",
        "tip": "冫(băng giá) + 夂(bước chân chậm chạp vì lạnh) → mùa lạnh khiến bước đi CHẬM CHẠP = MÙA ĐÔNG.",
        "cf": "各 (gè – \"mỗi\", hình dáng phần trên gần giống\")",
        "w": "冬天 / 冬季"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mùa đông ở đây rất ngắn, từ tháng 12 đến tháng 1 năm sau mới khá lạnh.",
        "answer": "这里的冬天很短，从12月到第二年1月才比较冷。",
        "answerPy": "Zhèli de dōngtiān hěn duǎn, cóng shí'èr yuè dào dì-èr nián yī yuè cái bǐjiào lěng.",
        "note": "从……到…… diễn tả khoảng thời gian.",
        "pair": "从……到……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu mùa đông ở đây quá lạnh thì tôi sẽ không quen được.",
        "answer": "如果这里的冬天太冷，我就不会习惯。",
        "answerPy": "Rúguǒ zhèli de dōngtiān tài lěng, wǒ jiù bú huì xíguàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "冬天很冷",
        "py": "dōng tiān hěn lěng",
        "vn": "mùa đông rất lạnh"
      },
      {
        "zh": "今年冬天",
        "py": "jīnnián dōng tiān",
        "vn": "mùa đông năm nay"
      },
      {
        "zh": "冬天特别长",
        "py": "dōng tiān tèbié zhǎng",
        "vn": "mùa đông đặc biệt dài"
      },
      {
        "zh": "过冬天",
        "py": "guo dōng tiān",
        "vn": "trải qua mùa đông"
      },
      {
        "zh": "冬天的衣服",
        "py": "dōng tiān de yīfu",
        "vn": "quần áo mùa đông"
      }
    ],
    "patterns": [
      {
        "s": "冬天 ↔ 夏天 (bài 5)",
        "m": "Mùa đông ↔ mùa hè"
      },
      {
        "s": "春 · 夏 · 秋 · 冬 — bốn mùa đều thêm 天"
      }
    ]
  },
  {
    "n": 12,
    "zh": "必须",
    "py": "bìxū",
    "pos": "Phó từ",
    "vn": "cần phải",
    "hv": "tất tu",
    "em": "❗",
    "lesson": 4,
    "explain": [
      "Diễn tả sự bắt buộc, không thể thiếu."
    ],
    "usage": "Phó từ, đứng trước động từ: 必须 + V.",
    "collo": [
      "必须要",
      "必须少吃",
      "必须根据"
    ],
    "ex_zh": "第三，必须要根据自己的健康情况运动。",
    "ex_py": "Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
    "ex_vn": "Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân.",
    "exList": [
      {
        "zh": "第三，必须要根据自己的健康情况运动。",
        "py": "Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
        "vn": "Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân."
      },
      {
        "zh": "没办法，为了瘦一点儿，我必须少吃。",
        "py": "Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.",
        "vn": "Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại."
      },
      {
        "zh": "有些事情必须要自己来做选择和决定。",
        "py": "Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.",
        "vn": "Có những việc phải tự mình lựa chọn và quyết định."
      }
    ],
    "hanzi": [
      {
        "c": "须",
        "p": "xū",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "彡 trái → 页 phải",
        "rad": "页 (hiệt – đầu)",
        "mean": "cần phải; râu",
        "tip": "彡(sợi lông) + 页(đầu, mặt) → sợi lông mọc trên MẶT = RÂU; mở rộng nghĩa \"điều tất yếu phải có\" = CẦN PHẢI.",
        "cf": "颈 (jǐng – \"cổ\", có 圣 thay vì 彡\")",
        "w": "必须 / 须要"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Có những việc bắt buộc phải do chính giáo viên tự chọn và tự quyết định.",
        "answer": "有些问题必须由老师自己来做选择和决定。",
        "answerPy": "Yǒuxiē wèntí bìxū yóu lǎoshī zìjǐ lái zuò xuǎnzé hé juédìng.",
        "note": "由 + ai + V (bài 13 HSK4) — do ai làm; 必须 mạnh hơn 应该.",
        "pair": "必须……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn muốn khỏe mạnh thì phải tập thể dục thường xuyên.",
        "answer": "如果你想健康，就必须经常锻炼。",
        "answerPy": "Rúguǒ nǐ xiǎng jiànkāng, jiù bìxū jīngcháng duànliàn.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "必须要",
        "py": "bìxū yào",
        "vn": "nhất định phải"
      },
      {
        "zh": "必须少吃",
        "py": "bìxū shǎo chī",
        "vn": "buộc phải ăn ít"
      },
      {
        "zh": "必须根据情况",
        "py": "bìxū gēnjù qíngkuàng",
        "vn": "phải căn cứ tình hình"
      },
      {
        "zh": "必须做完",
        "py": "bìxū zuò wán",
        "vn": "phải làm xong"
      },
      {
        "zh": "不必须",
        "py": "bù bìxū",
        "vn": "không bắt buộc"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 必须 + V",
        "m": "Ai đó bắt buộc phải làm gì"
      },
      {
        "s": "必须 (yêu cầu khách quan) ≠ 应该 (nên, bài 13)"
      }
    ]
  },
  {
    "n": 13,
    "zh": "根据",
    "py": "gēnjù",
    "pos": "Giới từ",
    "vn": "căn cứ vào, dựa vào",
    "hv": "căn cứ",
    "em": "📊",
    "lesson": 4,
    "explain": [
      "Nêu cơ sở, căn cứ để làm một việc gì đó."
    ],
    "usage": "根据 + [căn cứ]，[hành động].",
    "collo": [
      "根据情况",
      "根据要求",
      "根据自己的健康"
    ],
    "ex_zh": "必须要根据自己的健康情况运动。",
    "ex_py": "Bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
    "ex_vn": "Phải vận động dựa theo tình trạng sức khỏe của bản thân.",
    "exList": [
      {
        "zh": "第三，必须要根据自己的健康情况运动。",
        "py": "Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
        "vn": "Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân."
      },
      {
        "zh": "比赛是根据要求写汉字。",
        "py": "Bǐsài shì gēnjù yāoqiú xiě hànzì.",
        "vn": "Cuộc thi là viết chữ Hán theo yêu cầu."
      },
      {
        "zh": "请根据自己的情况选择。",
        "py": "Qǐng gēnjù zìjǐ de qíngkuàng xuǎnzé.",
        "vn": "Xin hãy chọn dựa theo tình trạng của bản thân."
      }
    ],
    "hanzi": [
      {
        "c": "据",
        "p": "jù",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "扌 trái → 居 phải",
        "rad": "扌 (thủ – tay)",
        "mean": "căn cứ, dựa vào",
        "tip": "扌(tay) + 居(ở, dựa vào) → dùng TAY nắm giữ làm chỗ DỰA VÀO = CĂN CỨ.",
        "cf": "居 (jū – \"ở\", không có bộ 扌\")",
        "w": "根据 / 数据"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Xin hãy chọn quần áo phù hợp dựa theo tình hình thời tiết.",
        "answer": "请根据天气的情况选择合适的衣服。",
        "answerPy": "Qǐng gēnjù tiānqì de qíngkuàng xuǎnzé héshì de yīfu.",
        "note": "根据 + căn cứ, mệnh đề sau nêu hành động (ôn lại 选择/情况 sẽ học trong bài này).",
        "pair": "根据……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn dựa theo yêu cầu để làm thì sẽ không sai.",
        "answer": "如果你根据要求做，就不会错。",
        "answerPy": "Rúguǒ nǐ gēnjù yāoqiú zuò, jiù bú huì cuò.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "根据情况",
        "py": "gēnjù qíngkuàng",
        "vn": "căn cứ tình hình"
      },
      {
        "zh": "根据要求",
        "py": "gēnjù yāoqiú",
        "vn": "theo yêu cầu"
      },
      {
        "zh": "根据自己的健康",
        "py": "gēnjù zìjǐ de jiànkāng",
        "vn": "dựa vào sức khoẻ của mình"
      },
      {
        "zh": "根据老师说的",
        "py": "gēnjù lǎoshī shuō de",
        "vn": "theo lời thầy nói"
      },
      {
        "zh": "根据天气",
        "py": "gēnjù tiānqì",
        "vn": "tuỳ thời tiết"
      }
    ],
    "patterns": [
      {
        "s": "根据 + N，Sub + V",
        "m": "Căn cứ vào cái gì mà làm gì"
      },
      {
        "s": "根据 dẫn CĂN CỨ, không dẫn người: ✗ 根据他笑"
      }
    ]
  },
  {
    "n": 14,
    "zh": "情况",
    "py": "qíngkuàng",
    "pos": "Danh từ",
    "vn": "tình hình, tình trạng",
    "hv": "tình huống",
    "em": "📋",
    "lesson": 4,
    "explain": [
      "Trạng thái, hoàn cảnh của một sự việc tại một thời điểm."
    ],
    "usage": "Danh từ; đi cùng tính từ sở hữu: 健康情况.",
    "collo": [
      "健康情况",
      "根据情况",
      "生活情况"
    ],
    "ex_zh": "必须要根据自己的健康情况运动。",
    "ex_py": "Bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
    "ex_vn": "Phải vận động dựa theo tình trạng sức khỏe của bản thân.",
    "exList": [
      {
        "zh": "第三，必须要根据自己的健康情况运动。",
        "py": "Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.",
        "vn": "Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân."
      },
      {
        "zh": "你在国外留学这几年怎么样？那里的生活情况习惯了吗？",
        "py": "Nǐ zài guówài liú xué zhè jǐ nián zěnme yàng? Nàli de shēnghuó qíngkuàng xíguàn le ma?",
        "vn": "Mấy năm du học nước ngoài của bạn thế nào? Tình hình sinh hoạt ở đó quen chưa?"
      },
      {
        "zh": "请了解一下这个地方的情况。",
        "py": "Qǐng liǎojiě yíxià zhège dìfang de qíngkuàng.",
        "vn": "Xin hãy tìm hiểu tình hình của nơi này."
      }
    ],
    "hanzi": [
      {
        "c": "况",
        "p": "kuàng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "冫 trái → 兄 phải",
        "rad": "冫 (băng – nước đá)",
        "mean": "tình huống",
        "tip": "冫(nước) + 兄(anh trai, so sánh) → so sánh dòng nước chảy để biết TÌNH HÌNH; 情(cảm xúc)+况(tình huống) = TÌNH TRẠNG.",
        "cf": "兄 (xiōng – \"anh trai\", không có bộ 冫\")",
        "w": "情况 / 何况"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi đi phỏng vấn, bạn nên tìm hiểu tình hình của công ty này một chút.",
        "answer": "去面试以前，你应该先了解一下这家公司的情况。",
        "answerPy": "Qù miànshì yǐqián, nǐ yīnggāi xiān liǎojiě yíxià zhè jiā gōngsī de qíngkuàng.",
        "note": "V + 以前 — trước khi làm gì; 了解 là từ bài 9.",
        "pair": "……以前……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần bạn dựa theo tình hình sức khỏe để vận động thì cơ thể sẽ khỏe hơn.",
        "answer": "只要你根据健康情况运动，身体就会更健康。",
        "answerPy": "Zhǐyào nǐ gēnjù jiànkāng qíngkuàng yùndòng, shēntǐ jiù huì gèng jiànkāng.",
        "note": "只要……就…… diễn tả điều kiện đủ.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "健康情况",
        "py": "jiànkāng qíngkuàng",
        "vn": "tình hình sức khoẻ"
      },
      {
        "zh": "根据情况",
        "py": "gēnjù qíngkuàng",
        "vn": "tuỳ tình hình"
      },
      {
        "zh": "生活情况",
        "py": "shēnghuó qíngkuàng",
        "vn": "tình hình sinh hoạt"
      },
      {
        "zh": "了解情况",
        "py": "liǎojiě qíngkuàng",
        "vn": "nắm tình hình"
      },
      {
        "zh": "情况不太好",
        "py": "qíngkuàng bú tài hǎo",
        "vn": "tình hình không tốt lắm"
      }
    ],
    "patterns": [
      {
        "s": "了解 + 情况",
        "m": "Tìm hiểu tình hình — 了解 là từ bài 9"
      },
      {
        "s": "情 + 况",
        "m": "Tình (情) hình (况)"
      }
    ]
  },
  {
    "n": 15,
    "zh": "口",
    "py": "kǒu",
    "pos": "Danh từ",
    "vn": "miệng",
    "hv": "khẩu",
    "em": "👄",
    "lesson": 4,
    "explain": [
      "Bộ phận trên cơ thể dùng để ăn, nói."
    ],
    "usage": "Danh từ; thường ghép với tính từ: 口渴.",
    "collo": [
      "口渴",
      "刚运动完口渴",
      "一口"
    ],
    "ex_zh": "还要记得刚运动完口渴的时候，不要马上喝水。",
    "ex_py": "Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.",
    "ex_vn": "Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.",
    "exList": [
      {
        "zh": "还要记得刚运动完口渴的时候，不要马上喝水。",
        "py": "Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.",
        "vn": "Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay."
      },
      {
        "zh": "你先喝一口水吧。",
        "py": "Nǐ xiān hē yì kǒu shuǐ ba.",
        "vn": "Bạn uống một ngụm nước trước đã."
      },
      {
        "zh": "这个人的口很大。",
        "py": "Zhège rén de kǒu hěn dà.",
        "vn": "Miệng người này to lắm."
      }
    ],
    "hanzi": [
      {
        "c": "口",
        "p": "kǒu",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 3,
        "ord": "nét liền",
        "rad": "口 (khẩu)",
        "mean": "miệng",
        "tip": "Chữ tượng hình mô phỏng hình dạng cái MIỆNG đang mở → MIỆNG.",
        "cf": "囗 (wéi – \"bao vây\", chữ tương tự nhưng nghĩa khác\")",
        "w": "口 / 口渴 / 人口"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn uống một ngụm trà trước đã, rồi hãy nói tiếp.",
        "answer": "你先喝一口茶，然后再说吧。",
        "answerPy": "Nǐ xiān hē yì kǒu chá, ránhòu zài shuō ba.",
        "note": "V + 一口 — làm gì một ngụm (bài 11).",
        "pair": "先……然后……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu miệng bạn khát thì uống chút nước đi.",
        "answer": "如果你口渴了，就喝点儿水吧。",
        "answerPy": "Rúguǒ nǐ kǒu kě le, jiù hē diǎnr shuǐ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "口渴",
        "py": "kǒu kě",
        "vn": "khát nước"
      },
      {
        "zh": "一口水",
        "py": "yì kǒu shuǐ",
        "vn": "một ngụm nước"
      },
      {
        "zh": "喝一口",
        "py": "hē yì kǒu",
        "vn": "uống một ngụm"
      },
      {
        "zh": "张开口",
        "py": "zhāng kāi kǒu",
        "vn": "há miệng"
      },
      {
        "zh": "口很干",
        "py": "kǒu hěn gān",
        "vn": "miệng rất khô"
      }
    ],
    "patterns": [
      {
        "s": "口 + 渴",
        "m": "Khát — nghĩa đen là miệng khát"
      },
      {
        "s": "口 (cái miệng, danh từ) và 口 (ngụm, lượng từ — bài 11)"
      }
    ]
  },
  {
    "n": 16,
    "zh": "渴",
    "py": "kě",
    "pos": "Tính từ",
    "vn": "khát",
    "hv": "khát",
    "em": "🥤",
    "lesson": 4,
    "explain": [
      "Trạng thái muốn uống nước do thiếu nước."
    ],
    "usage": "Tính từ; thường ghép với 口: 口渴, hoặc đứng độc lập: 渴了.",
    "collo": [
      "口渴",
      "渴了",
      "很渴"
    ],
    "ex_zh": "还要记得刚运动完口渴的时候，不要马上喝水。",
    "ex_py": "Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.",
    "ex_vn": "Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.",
    "exList": [
      {
        "zh": "还要记得刚运动完口渴的时候，不要马上喝水。",
        "py": "Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.",
        "vn": "Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay."
      },
      {
        "zh": "玩儿了这么长时间，渴了吧？",
        "py": "Wánrle zhème cháng shíjiān, kě le ba?",
        "vn": "Chơi lâu thế này, khát rồi phải không?"
      },
      {
        "zh": "我不渴，你喝吧。",
        "py": "Wǒ bù kě, nǐ hē ba.",
        "vn": "Tôi không khát, bạn uống đi."
      }
    ],
    "hanzi": [
      {
        "c": "渴",
        "p": "kě",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "氵 trái → 曷 phải",
        "rad": "氵 (thuỷ – nước)",
        "mean": "khát",
        "tip": "氵(nước) + 曷(cầu xin, mong muốn) → mong muốn có NƯỚC uống = KHÁT.",
        "cf": "喝 (hē – \"uống\", có bộ 口\")",
        "w": "口渴 / 渴了"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chạy lâu thế này chắc khát rồi phải không? Nếu khát thì uống chút nước đi.",
        "answer": "跑了这么长时间，渴了吧？如果渴了，就喝点儿水吧。",
        "answerPy": "Pǎole zhème cháng shíjiān, kě le ba? Rúguǒ kě le, jiù hē diǎnr shuǐ ba.",
        "note": "口渴 — khát; 渴 uống nước, 饿 thì ăn.",
        "pair": "如果……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nếu bạn khát thì uống chút nước đi.",
        "answer": "如果你渴了，就喝点儿水吧。",
        "answerPy": "Rúguǒ nǐ kě le, jiù hē diǎnr shuǐ ba.",
        "note": "如果……就…… diễn tả giả thiết — kết quả.",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "口渴",
        "py": "kǒu kě",
        "vn": "khát nước"
      },
      {
        "zh": "渴了",
        "py": "kě le",
        "vn": "khát rồi"
      },
      {
        "zh": "很渴",
        "py": "hěn kě",
        "vn": "rất khát"
      },
      {
        "zh": "不渴",
        "py": "bù kě",
        "vn": "không khát"
      },
      {
        "zh": "渴得很",
        "py": "kě de hěn",
        "vn": "khát lắm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 渴 + 了",
        "m": "Ai đó khát rồi"
      },
      {
        "s": "渴 (khát) ≠ 饿 (đói) — 渴 uống, 饿 ăn"
      }
    ]
  }
];

const wuData = [
  {img:'🏘️',label:'邻居',py:'línjū',letter:'A'},
  {img:'❤️',label:'爱好',py:'àihào',letter:'B'},
  {img:'☑️',label:'选择',py:'xuǎnzé',letter:'C'},
  {img:'🍚',label:'饱',py:'bǎo',letter:'D'},
  {img:'🥤',label:'渴',py:'kě',letter:'E'},
  {img:'❄️',label:'冬天',py:'dōngtiān',letter:'F'},
];

var dialogData = [
  {scene:'在公司 · Trong công ty (xin nghỉ phép)',
   preQuiz:[
     {q:'小丽为什么请假？',opts:['老朋友结婚','想去旅游','身体不舒服'],ans:0},
     {q:'小丽一共想请几天假？',opts:['三天','一天','一个星期'],ans:0},
     {q:'小丽和那个老朋友多久没见了？',opts:['两年','一年','三年'],ans:0},
   ],
   lines:[
     {sp:0,zh:'周经理，下个星期我可以请几天假吗？',py:'Zhōu jīnglǐ, xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?',vn:'Giám đốc Chu, tuần sau em xin nghỉ mấy ngày được không ạ?'},
     {sp:1,zh:'你有什么事？',py:'Nǐ yǒu shénme shì?',vn:'Em có việc gì vậy?'},
     {sp:0,zh:'我的一个老朋友结婚，我跟他两年没见了。',py:'Wǒ de yí ge lǎo péngyou jié hūn, wǒ gēn tā liǎng nián méi jiàn le.',vn:'Một người bạn cũ của em kết hôn, em với anh ấy hai năm không gặp rồi.'},
     {sp:1,zh:'你一共想请几天假？',py:'Nǐ yígòng xiǎng qǐng jǐ tiān jià?',vn:'Em muốn xin nghỉ tổng cộng mấy ngày?'},
     {sp:0,zh:'三天。',py:'Sān tiān.',vn:'Ba ngày ạ.'},
   ]},
  {scene:'在公司 · Trong công ty (nói về chồng)',
   preQuiz:[
     {q:'小丽和那个男人是怎么认识的？',opts:['过去是邻居，后来是大学同学','在公司认识的','是小学同学'],ans:0},
     {q:'他有什么爱好？',opts:['唱歌、画画儿、踢足球','看书、写字','做饭、买东西'],ans:0},
     {q:'那个男人是谁？',opts:['小丽的丈夫','小丽的同事','小丽的哥哥'],ans:0},
   ],
   lines:[
     {sp:1,zh:'小丽，那个高高的男人是你们公司的吗？你对他了解吗？',py:'Xiǎolì, nàge gāogāo de nánrén shì nǐmen gōngsī de ma? Nǐ duì tā liǎojiě ma?',vn:'Tiểu Lệ, người đàn ông cao cao đó là người công ty bạn à? Bạn hiểu rõ anh ấy không?'},
     {sp:0,zh:'我们过去是邻居，后来是大学同学，关系一直很不错。',py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.',vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt.'},
     {sp:1,zh:'他一般喜欢做什么？',py:'Tā yìbān xǐhuan zuò shénme?',vn:'Anh ấy thường thích làm gì?'},
     {sp:0,zh:'他有很多爱好，唱歌、画画儿、踢足球，什么都会。',py:'Tā yǒu hěn duō àihào, chànggē, huà huàr, tī zúqiú, shénme dōu huì.',vn:'Anh ấy có nhiều sở thích, hát, vẽ tranh, đá bóng, cái gì cũng biết.'},
     {sp:1,zh:'真的？那你介绍我们认识认识吧。',py:'Zhēn de? Nà nǐ jièshào wǒmen rènshi rènshi ba.',vn:'Thật á? Vậy bạn giới thiệu chúng tôi làm quen đi.'},
     {sp:0,zh:'不行，现在他是我丈夫。',py:'Bù xíng, xiànzài tā shì wǒ zhàngfu.',vn:'Không được đâu, bây giờ anh ấy là chồng tôi rồi.'},
   ]},
  {scene:'在家 · Ở nhà (bàn về vận động)',
   preQuiz:[
     {q:'周太太最近觉得怎么样？',opts:['哪儿都不舒服','身体特别好','非常高兴'],ans:0},
     {q:'周太太多久没运动了？',opts:['三年','一年','一个月'],ans:0},
     {q:'从明天起周太太决定做什么？',opts:['每天去长跑','少吃一点儿','早点儿睡觉'],ans:0},
   ],
   lines:[
     {sp:1,zh:'最近我觉得哪儿都不舒服，你带我去医院检查检查吧。',py:'Zuìjìn wǒ juéde nǎr dōu bù shūfu, nǐ dài wǒ qù yīyuàn jiǎnchá jiǎncha ba.',vn:'Gần đây em thấy chỗ nào cũng khó chịu, anh đưa em đi bệnh viện khám thử đi.'},
     {sp:0,zh:'不用去医院，谁都有办法看好你的"病"。我问你，你多久没运动了？',py:'Búyòng qù yīyuàn, shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng". Wǒ wèn nǐ, nǐ duō jiǔ méi yùndòng le?',vn:'Không cần đi bệnh viện đâu, ai cũng có cách chữa khỏi "bệnh" của em. Anh hỏi em, em bao lâu không vận động rồi?'},
     {sp:1,zh:'我三年没运动了。',py:'Wǒ sān nián méi yùndòng le.',vn:'Em ba năm không vận động rồi.'},
     {sp:0,zh:'谁都知道运动对身体好。但是你吃饱了就睡。',py:'Shéi dōu zhīdào yùndòng duì shēntǐ hǎo. Dànshì nǐ chībǎole jiù shuì.',vn:'Ai cũng biết vận động tốt cho sức khỏe. Nhưng em ăn no là ngủ.'},
     {sp:1,zh:'为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。',py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le. Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.',vn:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn. Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài.'},
   ]},
  {scene:'独白 · Tự thuật (cách vận động đúng)',
   preQuiz:[
     {q:'什么时候运动最好？',opts:['早上9点，冬天要再晚一些','晚上睡觉以前','中午吃饭以后'],ans:0},
     {q:'在哪些地方可以运动？',opts:['公园、山上、游泳馆','房间里','超市里'],ans:0},
     {q:'刚运动完口渴的时候应该怎么做？',opts:['不要马上喝水','马上喝很多水','吃点儿甜的'],ans:0},
   ],
   lines:[
     {sp:0,zh:'"运动很重要"这句话谁都懂。但是你知道怎么运动吗？第一，要选择"对"的时间。',py:'"Yùndòng hěn zhòngyào" zhè jù huà shéi dōu dǒng. Dànshì nǐ zhīdào zěnme yùndòng ma? Dì yī, yào xuǎnzé "duì" de shíjiān.',vn:'Câu "vận động rất quan trọng" ai cũng hiểu. Nhưng bạn có biết vận động thế nào không? Thứ nhất, phải chọn thời gian "đúng".'},
     {sp:0,zh:'一般来说，早上9点是最好的时间，冬天要再晚一些。',py:'Yìbān lái shuō, zǎoshang jiǔ diǎn shì zuì hǎo de shíjiān, dōngtiān yào zài wǎn yìxiē.',vn:'Nói chung, 9 giờ sáng là thời gian tốt nhất, mùa đông thì phải muộn hơn một chút.'},
     {sp:0,zh:'第二，要选择"对"的地点，公园、山上、游泳馆，这些地方都可以运动。',py:'Dì èr, yào xuǎnzé "duì" de dìdiǎn, gōngyuán, shānshang, yóuyǒngguǎn, zhèxiē dìfang dōu kěyǐ yùndòng.',vn:'Thứ hai, phải chọn địa điểm "đúng", công viên, trên núi, bể bơi, những nơi này đều có thể vận động.'},
     {sp:0,zh:'第三，必须要根据自己的健康情况运动。如果你很久没爬山或者游泳了，运动一会儿就一定要休息休息。',py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng. Rúguǒ nǐ hěn jiǔ méi pá shān huòzhě yóu yǒng le, yùndòng yíhuìr jiù yídìng yào xiūxi xiūxi.',vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân. Nếu bạn lâu rồi không leo núi hoặc bơi lội, vận động một lát là phải nghỉ ngơi ngay.'},
     {sp:0,zh:'还要记得刚运动完口渴的时候，不要马上喝水。',py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'谢谢，不用了，我已经吃', right:'饱'},
  {left:'他喜欢唱歌、画画儿，有很多', right:'爱好'},
  {left:'住在我家楼上的是我们的', right:'邻居'},
  {left:'这件事情太难了，我们一起想想', right:'办法'},
  {left:'踢了一个小时足球，我口', right:'渴'},
  {left:'苹果和香蕉一共', right:'多少钱'},
  {left:'医生会根据你的身体', right:'情况'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：小王今天怎么没来上班？B：他发烧了，早上给经理打电话', blank:'请假', post:'了。', hint:'(xin nghỉ)', ans:'请假', exp:'给 + người + 打电话请假 = gọi điện xin nghỉ; ôn 给 + người + động từ.'},
  {pre:'我们班', blank:'一共', post:'有二十个学生，今天来了十八个。', hint:'(tổng cộng)', ans:'一共', exp:'一共 đứng TRƯỚC động từ/số lượng: 一共有二十个 = tổng cộng có hai mươi.'},
  {pre:'我们的', blank:'邻居', post:'很热情，经常给我们送水果。', hint:'(hàng xóm)', ans:'邻居', exp:'邻居 = hàng xóm; ôn 热情 (bài 4), 经常 = thường xuyên.'},
  {pre:'第一次来中国的时候，我一个汉字也不认识，', blank:'后来', post:'每天练习，现在能看懂报纸了。', hint:'(về sau)', ans:'后来', exp:'后来 = về sau (chuyện đã xảy ra); ôn 一……也不 (bài 1) và bổ ngữ 看懂.'},
  {pre:'A：你有什么', blank:'爱好', post:'？B：我最喜欢足球，周末经常跟朋友去踢。', hint:'(sở thích)', ans:'爱好', exp:'有什么爱好 = có sở thích gì; 跟 + người + 去 + V (bài 1).'},
  {pre:'电脑突然坏了，我一点儿', blank:'办法', post:'也没有，你能来帮帮我吗？', hint:'(cách, biện pháp)', ans:'办法', exp:'一点儿办法也没有 = chẳng có cách nào; ôn 突然 (bài 6), 坏 (bài 13).'},
  {pre:'中午我吃得太', blank:'饱', post:'了，现在一点儿也不饿。', hint:'(no)', ans:'饱', exp:'吃得太饱 = ăn no quá (bổ ngữ trạng thái với 得, bài 16); 饿 = đói, ngược nghĩa.'},
  {pre:'', blank:'为了', post:'提高汉语水平，他每天都和中国朋友聊天。', hint:'(để, vì)', ans:'为了', exp:'为了 + mục đích đứng đầu câu, vế sau nói việc làm; ôn 提高/水平 (bài 15).'},
  {pre:'想了很久，我', blank:'决定', post:'下个月去北京留学。', hint:'(quyết định)', ans:'决定', exp:'决定 + việc sẽ làm = quyết định làm gì; ôn 留学 (bài 15).'},
  {pre:'这两件衣服都很漂亮，我不知道应该', blank:'选择', post:'哪一件。', hint:'(lựa chọn)', ans:'选择', exp:'选择 + 哪 + lượng từ = chọn cái nào; ôn 应该 (bài 13).'},
  {pre:'北京的', blank:'冬天', post:'经常下雪，比我们这儿冷多了。', hint:'(mùa đông)', ans:'冬天', exp:'冬天 = mùa đông; ôn câu 比 + tính từ + 多了.'},
  {pre:'后天就要考试了，今天晚上我', blank:'必须', post:'把这些词语都复习好。', hint:'(nhất định phải)', ans:'必须', exp:'必须 + động từ = bắt buộc phải; ôn 就要……了, câu 把 (bài 14), 词语 (bài 16).'},
  {pre:'我们应该', blank:'根据', post:'天气情况决定明天去不去爬山。', hint:'(dựa vào)', ans:'根据', exp:'根据 + căn cứ + động từ = dựa vào … để …; 去不去 = có đi hay không.'},
  {pre:'踢完足球，我', blank:'渴', post:'极了，先喝一杯水吧。', hint:'(khát)', ans:'渴', exp:'渴极了 = khát vô cùng (ôn 极了, bài 15).'},
  {pre:'你累了一天了，坐下来', blank:'休息休息', post:'吧。', hint:'(nghỉ ngơi một chút)', ans:'休息休息', exp:'Động từ hai âm tiết lặp ABAB (休息休息) = làm một chút, giọng nhẹ nhàng, hay dùng khi khuyên.'},
  {pre:'A：晚上你想吃什么？B：我', blank:'什么', post:'都可以，你决定吧。', hint:'(gì cũng)', ans:'什么', exp:'Đại từ nghi vấn + 都 = bất kỳ … cũng: 什么都可以 = gì cũng được.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['这个','问题','谁','都','不','知道','怎么','回答','。'], ans:'这个问题谁都不知道怎么回答。', audio:'这个问题谁都不知道怎么回答。'},
  {words:['周末','我','哪儿','也','不','想','去','，','就','想','在','家','睡觉','。'], ans:'周末我哪儿也不想去，就想在家睡觉。', audio:'周末我哪儿也不想去，就想在家睡觉。'},
  {words:['你','帮','我','检查','检查','这个','句子','对','不','对','。'], ans:'你帮我检查检查这个句子对不对。', audio:'你帮我检查检查这个句子对不对。'},
  {words:['为了','不','迟到','，','他','每天','早上','六点','就','起床','了','。'], ans:'为了不迟到，他每天早上六点就起床了。', audio:'为了不迟到，他每天早上六点就起床了。'},
  {words:['这个','蛋糕','很','好吃','，','你','吃','一','口','吧','。'], ans:'这个蛋糕很好吃，你吃一口吧。', audio:'这个蛋糕很好吃，你吃一口吧。'},
  {words:['我们','是','在','图书馆','认识','的','，','后来','经常','一起','复习','。'], ans:'我们是在图书馆认识的，后来经常一起复习。', audio:'我们是在图书馆认识的，后来经常一起复习。'},
  {words:['这件','事情','你','必须','先','告诉','经理','。'], ans:'这件事情你必须先告诉经理。', audio:'这件事情你必须先告诉经理。'},
  {words:['我们','一共','花','了','三百','块','钱','。'], ans:'我们一共花了三百块钱。', audio:'我们一共花了三百块钱。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你给我们介绍一介绍你的家吧。',
   opts:['你给我们介绍介绍你的家吧。','你给我们介绍介绍了你的家吧。','你介绍介绍给我们你的家吧。','你给我们介绍你的家介绍吧。'], ans:0,
   exp:'Động từ hai âm tiết lặp theo kiểu ABAB (介绍介绍), không chèn 一, không thêm 了 sau cụm lặp khi khuyên/đề nghị; 给我们 đứng trước động từ.'},
  {wrong:'这件事情知道谁都。',
   opts:['这件事情都谁知道。','谁这件事情知道都。','这件事情谁都知道。','这件事情谁知道都。'], ans:2,
   exp:'谁 + 都 + động từ = ai cũng …; 都 đứng ngay sau 谁, trước động từ 知道.'},
  {wrong:'他今天都什么没吃。',
   opts:['他今天什么没都吃。','他今天什么都没吃了。','他今天没什么都吃。','他今天什么都没吃。'], ans:3,
   exp:'什么 + 都 + 没 + động từ = chẳng … gì cả; có 没 thì không thêm 了.'},
  {wrong:'他每天早上跑步了为了健康。',
   opts:['为了健康，他每天早上都去跑步。','健康为了，他每天早上都去跑步。','他每天早上为了跑步了健康。','为了健康了，他每天早上去跑步了。'], ans:0,
   exp:'为了 + mục đích đứng ĐẦU câu (hoặc trước động từ); việc làm hằng ngày (每天) không thêm 了.'},
  {wrong:'我想请假跟经理。',
   opts:['我跟想经理请假。','我想跟经理请假。','我想请假经理跟。','我想跟请假经理。'], ans:1,
   exp:'跟 + người đứng TRƯỚC động từ: 跟经理请假 = xin nghỉ với giám đốc; 想 đứng trước cả cụm.'},
  {wrong:'这些东西多少钱一共？',
   opts:['这些东西多少一共钱？','这些东西一共钱多少？','这些东西一共多少钱？','一共这些东西钱多少？'], ans:2,
   exp:'一共 là phó từ, đứng TRƯỚC 多少钱 — không đặt cuối câu như tiếng Việt “tổng cộng”.'},
  {wrong:'我吃了饱。',
   opts:['我饱吃了。','我吃得饱了得。','我吃饱得了。','我吃饱了。'], ans:3,
   exp:'饱 là bổ ngữ kết quả đứng ngay sau 吃: 吃饱了; 了 đứng sau cả cụm.'},
  {wrong:'明天我先去银行，后来去商店。',
   opts:['我明天后来去银行，先去商店。','明天我先去银行，然后去商店。','明天我先去银行，去然后商店。','明天我然后去银行，先去商店。'], ans:1,
   exp:'后来 chỉ dùng cho chuyện ĐÃ qua; kế hoạch sắp làm (明天) dùng 先……，然后…… (bài 14).'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu là một tình huống thật, trả lời về chính bạn bằng từ và mẫu câu của Bài 17 (động từ hai âm tiết lặp ABAB; 谁/什么/哪儿 + 都/也 chỉ “bất kỳ”). Bấm 🎙️ rồi nói bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Ngày mai bạn có việc không đến lớp được. Bạn gọi điện cho cô giáo.',
      q_zh: '明天你不能来上课，怎么跟老师说？',
      q_py: 'Míngtiān nǐ bù néng lái shàngkè, zěnme gēn lǎoshī shuō?',
      q_vn: 'Ngày mai bạn không đến lớp được, bạn nói với cô giáo thế nào?',
      grammar: { label: '跟 + người + 请假', any: ['请假'] },
      need: [
        { label: 'Nêu lý do nghỉ', any: ['医院', '检查', '生病', '事情', '发烧', '接'] },
        { label: 'Hứa làm bài / học bù', any: ['作业', '完成', '复习', '练习'] }
      ],
      bonus: { label: 'Dùng 根据 / 要求', any: ['根据', '要求'] },
      vocab: ['请假', '根据'],
      minLen: 18,
      sample: '老师，您好！明天上午我要去医院检查身体，想跟您请假。作业我会根据您的要求完成。',
      sample_py: 'Lǎoshī, nín hǎo! Míngtiān shàngwǔ wǒ yào qù yīyuàn jiǎnchá shēntǐ, xiǎng gēn nín qǐngjià. Zuòyè wǒ huì gēnjù nín de yāoqiú wánchéng.',
      sample_vn: 'Em chào cô! Sáng mai em phải đi bệnh viện khám sức khoẻ, em muốn xin cô cho nghỉ. Bài tập em sẽ làm theo yêu cầu của cô.',
      tip: '跟 + người + 请假 = xin ai cho nghỉ; nói với thầy cô dùng 您.'
    },
    {
      situation: 'Bạn thân than cả tuần làm việc mệt quá, hỏi cuối tuần nên làm gì.',
      q_zh: '这个星期我工作太累了，周末应该做什么？',
      q_py: 'Zhège xīngqī wǒ gōngzuò tài lèi le, zhōumò yīnggāi zuò shénme?',
      q_vn: 'Tuần này mình làm việc mệt quá, cuối tuần nên làm gì nhỉ?',
      grammar: { label: 'Động từ hai âm tiết lặp ABAB', any: ['休息休息', '运动运动', '锻炼锻炼', '打扫打扫', '准备准备', '复习复习', '了解了解'] },
      need: [
        { label: 'Khuyên nghỉ ngơi', any: ['休息', '睡觉', '在家'] },
        { label: 'Gợi ý một hoạt động', any: ['公园', '运动', '锻炼', '游泳', '爬山', '朋友', '电影'] }
      ],
      bonus: { label: 'Dùng 为了 nêu mục đích', any: ['为了'] },
      vocab: ['爱好'],
      minLen: 16,
      sample: '你应该在家好好儿休息休息，下午再去公园运动运动，做一点儿自己的爱好。',
      sample_py: 'Nǐ yīnggāi zài jiā hǎohāor xiūxi xiūxi, xiàwǔ zài qù gōngyuán yùndòng yùndòng, zuò yìdiǎnr zìjǐ de àihào.',
      sample_vn: 'Bạn nên ở nhà nghỉ ngơi cho đã, chiều lại ra công viên vận động một chút, làm chút việc mình thích.',
      tip: 'Động từ hai âm tiết lặp nguyên cả từ (ABAB): 休息休息、运动运动 — giữa hai lần lặp không chèn 一.'
    },
    {
      situation: 'Bạn mới chuyển nhà. Bạn bè hỏi hàng xóm của bạn thế nào.',
      q_zh: '你的邻居怎么样？你认识吗？',
      q_py: 'Nǐ de línjū zěnmeyàng? Nǐ rènshi ma?',
      q_vn: 'Hàng xóm của bạn thế nào? Bạn có quen không?',
      grammar: { label: '谁/什么/哪儿 + 都/也', any: ['谁都', '什么都', '哪儿都', '谁也', '什么也', '哪儿也'] },
      need: [
        { label: 'Tả hàng xóm', any: ['奶奶', '爷爷', '叔叔', '阿姨', '热情', '年轻'] },
        { label: 'Kể một việc hàng xóm làm', any: ['帮', '送', '照顾', '问', '聊天'] }
      ],
      bonus: { label: 'Nói quen nhau từ khi nào (后来)', any: ['后来', '以前', '过去'] },
      vocab: ['邻居'],
      minLen: 18,
      sample: '我家旁边住着一个老奶奶，她非常热情，谁都喜欢她。我有什么问题，都可以去问她。',
      sample_py: 'Wǒ jiā pángbiān zhùzhe yí ge lǎo nǎinai, tā fēicháng rèqíng, shéi dōu xǐhuan tā. Wǒ yǒu shénme wèntí, dōu kěyǐ qù wèn tā.',
      sample_vn: 'Cạnh nhà tôi có một bà cụ, bà rất nhiệt tình, ai cũng quý bà. Tôi có vấn đề gì cũng có thể sang hỏi bà.',
      tip: '谁都 + động từ = ai cũng …; 都 luôn đứng ngay trước động từ.'
    },
    {
      situation: 'Đi khám sức khoẻ xong, bác sĩ khuyên bạn nên vận động nhiều hơn.',
      q_zh: '为了身体健康，你决定以后怎么做？',
      q_py: 'Wèile shēntǐ jiànkāng, nǐ juédìng yǐhòu zěnme zuò?',
      q_vn: 'Vì sức khoẻ, bạn quyết định sau này sẽ làm thế nào?',
      grammar: { label: '为了 + mục đích', any: ['为了'] },
      need: [
        { label: 'Nói quyết định cụ thể', any: ['决定', '每天', '跑步', '游泳', '锻炼', '公园'] },
        { label: 'Nói thời gian/tần suất', any: ['每天', '周末', '分钟', '小时', '早上', '下班'] }
      ],
      bonus: { label: 'Dùng 必须', any: ['必须'] },
      vocab: ['为了', '决定', '必须'],
      minLen: 18,
      sample: '为了身体健康，我决定每天下班以后去公园跑步，周末必须去游泳。',
      sample_py: 'Wèile shēntǐ jiànkāng, wǒ juédìng měi tiān xiàbān yǐhòu qù gōngyuán pǎobù, zhōumò bìxū qù yóuyǒng.',
      sample_vn: 'Vì sức khoẻ, tôi quyết định mỗi ngày tan làm sẽ ra công viên chạy bộ, cuối tuần nhất định phải đi bơi.',
      tip: '为了 + mục đích đặt đầu câu, sau đó mới nói việc làm: 为了健康，我……'
    },
    {
      situation: 'Bạn mới quen hỏi về sở thích du lịch của bạn.',
      q_zh: '你喜欢旅游吗？想去哪儿？',
      q_py: 'Nǐ xǐhuan lǚyóu ma? Xiǎng qù nǎr?',
      q_vn: 'Bạn có thích du lịch không? Muốn đi đâu?',
      grammar: { label: 'Đại từ nghi vấn + 都 (đâu cũng …)', any: ['哪儿都', '什么都', '哪儿也', '什么也'] },
      need: [
        { label: 'Nói sở thích', any: ['爱好', '喜欢', '旅游'] },
        { label: 'Nêu lý do', any: ['文化', '东西', '吃', '有意思', '漂亮', '了解'] }
      ],
      bonus: { label: 'Nói mùa muốn đi', any: ['冬天', '夏天', '春天'] },
      vocab: ['爱好', '冬天', '选择'],
      minLen: 18,
      sample: '旅游是我最大的爱好，去哪儿都可以。我想冬天去北京，因为可以看到雪，还能了解那儿的文化。',
      sample_py: 'Lǚyóu shì wǒ zuì dà de àihào, qù nǎr dōu kěyǐ. Wǒ xiǎng dōngtiān qù Běijīng, yīnwèi kěyǐ kàndào xuě, hái néng liǎojiě nàr de wénhuà.',
      sample_vn: 'Du lịch là sở thích lớn nhất của tôi, đi đâu cũng được. Tôi muốn mùa đông đi Bắc Kinh, vì có thể ngắm tuyết, còn tìm hiểu được văn hoá ở đó.',
      tip: 'V + 哪儿 + 都可以 = đi đâu cũng được; 都 đứng sau đại từ nghi vấn.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Câu hỏi này rất dễ, ai cũng trả lời được.', zh:'这个问题很容易，谁都能回答。', py:'Zhège wèntí hěn róngyì, shéi dōu néng huídá.'},
  {vi:'Hồi nhỏ tôi rất sợ bơi, về sau bố dạy tôi biết bơi.', zh:'我小时候很害怕游泳，后来爸爸教会了我。', py:'Wǒ xiǎoshíhou hěn hàipà yóuyǒng, hòulái bàba jiāohuìle wǒ.'},
  {vi:'Mùa đông ở đây không lạnh lắm, nhưng hay mưa.', zh:'这儿的冬天不太冷，但是经常下雨。', py:'Zhèr de dōngtiān bú tài lěng, dànshì jīngcháng xià yǔ.'},
  {vi:'Khách sắp đến rồi, chúng ta dọn phòng một chút đi.', zh:'客人快来了，我们打扫打扫房间吧。', py:'Kèrén kuài lái le, wǒmen dǎsǎo dǎsǎo fángjiān ba.'},
  {vi:'Bạn phải dựa vào tình hình của mình để lựa chọn.', zh:'你必须根据自己的情况来选择。', py:'Nǐ bìxū gēnjù zìjǐ de qíngkuàng lái xuǎnzé.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi khát nước rồi, ở đây có chỗ nào bán nước không?', zh:'我口渴了，这儿有没有卖水的地方？', py:'Wǒ kǒu kě le, zhèr yǒu méiyǒu mài shuǐ de dìfang?'},
  {vi:'Chuyện này tôi nghĩ rất lâu mà vẫn không biết chọn thế nào.', zh:'这件事情我想了很久，还是不知道怎么选择。', py:'Zhè jiàn shìqing wǒ xiǎngle hěn jiǔ, háishi bù zhīdào zěnme xuǎnzé.'},
  {vi:'Chúng tôi đi tổng cộng ba tiếng, ai cũng mệt đến mức không muốn nói.', zh:'我们一共走了三个小时，大家都累得不想说话了。', py:'Wǒmen yígòng zǒule sān ge xiǎoshí, dàjiā dōu lèi de bù xiǎng shuōhuà le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 17)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: "/audio/hsk3-bai-17/listen-full.mp3",
  dictation: [
    {num:1, lines:[
      {speaker:"女", pre:"", blank:"你的早饭只有一杯咖啡和一小块蛋糕，吃不饱。要不要再来一个鸡蛋或者水果", post:"？",
       py:"Nǐ de zǎofàn zhǐyǒu yì bēi kāfēi hé yì xiǎo kuài dàngāo, chī bu bǎo. Yào bu yào zài lái yí ge jīdàn huòzhě shuǐguǒ?",
       vn:"Bữa sáng của bạn chỉ có một cốc cà phê và một miếng bánh nhỏ, ăn không no đâu. Có muốn ăn thêm quả trứng hoặc trái cây không?"},
      {speaker:"男", pre:"", blank:"没办法，为了瘦一点儿，我必须少吃", post:"。",
       py:"Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.",
       vn:"Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại."}]},
    {num:2, lines:[
      {speaker:"男", pre:"", blank:"雪下得真大，谁都没想到今年冬天能下这么大的雪", post:"。",
       py:"Xuě xià de zhēn dà, shéi dōu méi xiǎngdào jīnnián dōngtiān néng xià zhème dà de xuě.",
       vn:"Tuyết rơi to thật, ai cũng không ngờ mùa đông năm nay lại có tuyết to thế."},
      {speaker:"女", pre:"是啊，", blank:"你看孩子们玩儿得多高兴", post:"。",
       py:"Shì a, nǐ kàn háizimen wánr de duō gāoxìng.",
       vn:"Đúng vậy, bạn xem bọn trẻ chơi vui biết bao."}]},
    {num:3, lines:[
      {speaker:"男1", pre:"经理，", blank:"下个星期我想请三天假，可以吗", post:"？",
       py:"Jīnglǐ, xià ge xīngqī wǒ xiǎng qǐng sān tiān jià, kěyǐ ma?",
       vn:"Giám đốc, tuần sau tôi muốn xin nghỉ ba ngày, được không ạ?"},
      {speaker:"男2", pre:"", blank:"这个月你已经请了两个星期假了，不能再请了", post:"。",
       py:"Zhège yuè nǐ yǐjīng qǐngle liǎng ge xīngqī jià le, bù néng zài qǐng le.",
       vn:"Tháng này bạn đã xin nghỉ hai tuần rồi, không thể xin nữa đâu."}]},
    {num:4, lines:[
      {speaker:"男", pre:"你们好，", blank:"我是你们的新邻居，昨天刚搬过来。这是我妻子", post:"。",
       py:"Nǐmen hǎo, wǒ shì nǐmen de xīn línjū, zuótiān gāng bān guolai. Zhè shì wǒ qīzi.",
       vn:"Chào các bạn, tôi là hàng xóm mới của các bạn, hôm qua vừa chuyển đến. Đây là vợ tôi."},
      {speaker:"女", pre:"欢迎你们！这是我丈夫。", blank:"我们在这儿住了五年了，对这儿很了解，以后有什么问题都可以来找我们", post:"。",
       py:"Huānyíng nǐmen! Zhè shì wǒ zhàngfu. Wǒmen zài zhèr zhùle wǔ nián le, duì zhèr hěn liǎojiě, yǐhòu yǒu shénme wèntí dōu kěyǐ lái zhǎo wǒmen.",
       vn:"Chào mừng các bạn! Đây là chồng tôi. Chúng tôi sống ở đây năm năm rồi, rất hiểu rõ nơi này, sau này có vấn đề gì đều có thể đến tìm chúng tôi."}]},
    {num:5, lines:[
      {speaker:"女", pre:"", blank:"玩儿了这么长时间，渴了吧？快坐下来休息休息，你想喝点儿什么", post:"？",
       py:"Wánrle zhème cháng shíjiān, kě le ba? Kuài zuò xialai xiūxi xiūxi, nǐ xiǎng hē diǎnr shénme?",
       vn:"Chơi lâu thế này, khát rồi phải không? Mau ngồi xuống nghỉ ngơi, bạn muốn uống gì?"},
      {speaker:"男", pre:"喝什么都行，", blank:"先来杯冰水，然后再看看这儿有什么好喝的饮料", post:"。",
       py:"Hē shénme dōu xíng, xiān lái bēi bīngshuǐ, ránhòu zài kànkan zhèr yǒu shénme hǎohē de yǐnliào.",
       vn:"Uống gì cũng được, trước tiên cho một ly nước đá, sau đó xem thử ở đây có đồ uống gì ngon."}]},
    {num:6, stmt:"明天早上有一个重要的会议。", judge:true, lines:[
      {pre:"明天早上请大家8点以前到公司会议室，做好开会的准备。", blank:"明天的会议非常重要，谁都不能迟到，也不能请假", post:"。",
       py:"Míngtiān zǎoshang qǐng dàjiā bā diǎn yǐqián dào gōngsī huìyìshì, zuòhǎo kāihuì de zhǔnbèi. Míngtiān de huìyì fēicháng zhòngyào, shéi dōu bù néng chídào, yě bù néng qǐngjià.",
       vn:"Sáng mai mời mọi người đến phòng họp công ty trước 8 giờ, chuẩn bị sẵn sàng họp. Cuộc họp ngày mai rất quan trọng, ai cũng không được đến muộn, cũng không được xin nghỉ."}]},
    {num:7, stmt:"那家药店晚上不能买药。", judge:false, lines:[
      {pre:"为了方便大家，楼下新开了一家药店，24小时不休息，", blank:"什么时候去都能买到药，几点去都有人工作", post:"。",
       py:"Wèile fāngbiàn dàjiā, lóuxià xīn kāile yì jiā yàodiàn, èrshísì xiǎoshí bù xiūxi, shénme shíhou qù dōu néng mǎidào yào, jǐ diǎn qù dōu yǒu rén gōngzuò.",
       vn:"Để tiện cho mọi người, dưới lầu mới mở một tiệm thuốc, mở cửa 24 tiếng không nghỉ, lúc nào đến cũng mua được thuốc, giờ nào đến cũng có người làm việc."}]},
    {num:8, stmt:"有问题时，我们应该自己想办法。", judge:true, lines:[
      {pre:"我们在生活中遇到问题时，不能什么事情都请别人帮忙，", blank:"因为有些事情必须要自己来做选择和决定", post:"。",
       py:"Wǒmen zài shēnghuó zhōng yùdào wèntí shí, bù néng shénme shìqing dōu qǐng biéren bāngmáng, yīnwèi yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.",
       vn:"Khi gặp vấn đề trong cuộc sống, chúng ta không thể việc gì cũng nhờ người khác giúp, vì có những việc phải tự mình lựa chọn và quyết định."}]},
    {num:9, stmt:"汉字比赛时写什么都可以。", judge:false, lines:[
      {pre:"学校这个学期要举行一次汉字比赛，比赛是根据要求写汉字，一共写100个，", blank:"谁有兴趣都可以参加", post:"。",
       py:"Xuéxiào zhège xuéqī yào jǔxíng yí cì hànzì bǐsài, bǐsài shì gēnjù yāoqiú xiě hànzì, yígòng xiě yìbǎi ge, shéi yǒu xìngqù dōu kěyǐ cānjiā.",
       vn:"Học kỳ này trường tổ chức một cuộc thi viết chữ Hán, thi viết chữ Hán theo yêu cầu, tổng cộng viết 100 chữ, ai có hứng thú đều có thể tham gia."}]},
    {num:10, stmt:"有3个同学要介绍自己。", judge:false, lines:[
      {pre:"大家好，这个学期我们班新来了2个同学，一共21个学生。", blank:"现在，请新同学给大家介绍介绍自己，大家欢迎", post:"。",
       py:"Dàjiā hǎo, zhège xuéqī wǒmen bān xīn láile liǎng ge tóngxué, yígòng èrshíyī ge xuésheng. Xiànzài, qǐng xīn tóngxué gěi dàjiā jièshào jièshào zìjǐ, dàjiā huānyíng.",
       vn:"Chào mọi người, học kỳ này lớp chúng ta có thêm 2 bạn mới, tổng cộng 21 học sinh. Bây giờ, mời các bạn mới giới thiệu bản thân với mọi người, mọi người hoan nghênh nào."}]}
  ],
  mc: [
    {num:11, options:["两瓶牛奶","一条鱼","什么都没买"], ans:2, q:"女的买什么回来了？",
     lines:[
      {speaker:"男", pre:"你不是去超市吗？", blank:"怎么什么都没买", post:"？",
       py:"Nǐ bú shì qù chāoshì ma? Zěnme shénme dōu méi mǎi?",
       vn:"Bạn không phải đi siêu thị à? Sao chẳng mua gì cả?"},
      {speaker:"女", pre:"我在超市里拿了两瓶牛奶，三个面包，还拿了条鱼。后来发现没带钱包，", blank:"只好都放回去了", post:"。",
       py:"Wǒ zài chāoshì li nále liǎng píng niúnǎi, sān ge miànbāo, hái nále tiáo yú. Hòulái fāxiàn méi dài qiánbāo, zhǐhǎo dōu fàng huiqu le.",
       vn:"Tôi trong siêu thị lấy hai chai sữa, ba ổ bánh mì, còn lấy một con cá. Sau đó phát hiện không mang ví tiền, đành phải để lại hết."}
     ],
     explain:"男：你不是去超市吗？怎么什么都没买？女：我在超市里拿了两瓶牛奶，三个面包，还拿了条鱼。后来发现没带钱包，只好都放回去了。问：女的买什么回来了？ → 什么都没买。"},
    {num:12, options:["口渴","什么都不想喝","不想喝冰水"], ans:0, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"走了这么长时间，渴了吧？快坐下来休息休息，", blank:"你想喝点儿什么", post:"？",
       py:"Zǒule zhème cháng shíjiān, kě le ba? Kuài zuò xialai xiūxi xiūxi, nǐ xiǎng hē diǎnr shénme?",
       vn:"Đi bộ lâu thế này, khát rồi phải không? Mau ngồi xuống nghỉ ngơi, bạn muốn uống gì?"},
      {speaker:"男", pre:"喝什么都行，", blank:"先来杯冰水，然后再看看这儿有什么好喝的饮料", post:"。",
       py:"Hē shénme dōu xíng, xiān lái bēi bīngshuǐ, ránhòu zài kànkan zhèr yǒu shénme hǎohē de yǐnliào.",
       vn:"Uống gì cũng được, trước tiên cho một ly nước đá, sau đó xem thử ở đây có đồ uống gì ngon."}
     ],
     explain:"女：走了这么长时间，渴了吧？快坐下来休息休息，你想喝点儿什么？男：喝什么都行，先来杯冰水，然后再看看这儿有什么好喝的饮料。问：关于男的，可以知道什么？ → 口渴。"},
    {num:13, options:["国外","很多城市","什么地方都没去"], ans:2, q:"女的去哪儿旅游了？",
     lines:[
      {speaker:"男", pre:"听说你和丈夫去旅游了？", blank:"去了哪些地方？怎么样", post:"？",
       py:"Tīngshuō nǐ hé zhàngfu qù lǚyóu le? Qùle nǎxiē dìfang? Zěnme yàng?",
       vn:"Nghe nói bạn và chồng đi du lịch à? Đi những nơi nào? Thế nào?"},
      {speaker:"女", pre:"我们打算坐飞机去国外，找个安静的城市，好好休息休息，", blank:"后来儿子生病了，为了照顾他，哪儿都没去", post:"。",
       py:"Wǒmen dǎsuàn zuò fēijī qù guówài, zhǎo ge ānjìng de chéngshì, hǎohāo xiūxi xiūxi, hòulái érzi shēngbìng le, wèile zhàogù tā, nǎr dōu méi qù.",
       vn:"Chúng tôi định đi máy bay ra nước ngoài, tìm một thành phố yên tĩnh, nghỉ ngơi thật tốt, sau đó con trai bị bệnh, để chăm sóc con, chẳng đi đâu cả."}
     ],
     explain:"男：听说你和丈夫去旅游了？去了哪些地方？怎么样？女：我们打算坐飞机去国外，找个安静的城市，好好休息休息，后来儿子生病了，为了照顾他，哪儿都没去。问：女的去哪儿旅游了？ → 什么地方都没去。"},
    {num:14, options:["觉得考试不容易","写得很慢","题都检查过了"], ans:2, q:"关于冬冬，可以知道什么？",
     lines:[
      {speaker:"女", pre:"冬冬，", blank:"你怎么这么快就考完了？做完题应该检查检查，看看有没有写错的字", post:"。",
       py:"Dōngdōng, nǐ zěnme zhème kuài jiù kǎowán le? Zuòwán tí yīnggāi jiǎnchá jiǎncha, kànkan yǒu méiyǒu xiěcuò de zì.",
       vn:"Đông Đông, sao con thi xong nhanh thế? Làm xong đề phải kiểm tra lại chứ, xem có chữ nào viết sai không."},
      {speaker:"男", pre:"我已经检查过了，今天的考试题特别简单，", blank:"所以很快就做完了", post:"。",
       py:"Wǒ yǐjīng jiǎncháguo le, jīntiān de kǎoshì tí tèbié jiǎndān, suǒyǐ hěn kuài jiù zuòwán le.",
       vn:"Con đã kiểm tra rồi ạ, đề thi hôm nay đặc biệt đơn giản, nên làm xong rất nhanh."}
     ],
     explain:"女：冬冬，你怎么这么快就考完了？做完题应该检查检查，看看有没有写错的字。男：我已经检查过了，今天的考试题特别简单，所以很快就做完了。问：关于冬冬，可以知道什么？ → 题都检查过了。"},
    {num:15, options:["经理和秘书","医生和病人","丈夫和妻子"], ans:1, q:"他们可能是什么关系？",
     lines:[
      {speaker:"男", pre:"我昨天跑完步以后就一直腿疼，请您帮我检查检查，", blank:"看看用不用吃点儿药", post:"。",
       py:"Wǒ zuótiān pǎowán bù yǐhòu jiù yìzhí tuǐ téng, qǐng nín bāng wǒ jiǎnchá jiǎncha, kànkan yòng bu yòng chī diǎnr yào.",
       vn:"Hôm qua tôi chạy bộ xong là cứ đau chân mãi, mời chị khám thử giúp tôi, xem có cần uống thuốc gì không."},
      {speaker:"女", pre:"你太久没运动了，所以腿疼。以后多出去运动运动，", blank:"不用吃药", post:"。",
       py:"Nǐ tài jiǔ méi yùndòng le, suǒyǐ tuǐ téng. Yǐhòu duō chūqu yùndòng yùndòng, búyòng chī yào.",
       vn:"Bạn lâu quá không vận động rồi, nên mới đau chân. Sau này ra ngoài vận động nhiều hơn đi, không cần uống thuốc."}
     ],
     explain:"男：我昨天跑完步以后就一直腿疼，请您帮我检查检查，看看用不用吃点儿药。女：你太久没运动了，所以腿疼。以后多出去运动运动，不用吃药。问：他们可能是什么关系？ → 医生和病人。"},
    {num:16, options:["经常不来上课","什么都听得懂","没请过假"], ans:0, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"老师，", blank:"我可以请几天假吗", post:"？",
       py:"Lǎoshī, wǒ kěyǐ qǐng jǐ tiān jià ma?",
       vn:"Thầy ơi, em xin nghỉ mấy ngày được không ạ?"},
      {speaker:"女", pre:"小雨，", blank:"你看看，这个学期你都请了几次假了", post:"？",
       py:"Xiǎoyǔ, nǐ kànkan, zhège xuéqī nǐ dōu qǐngle jǐ cì jià le?",
       vn:"Tiểu Vũ, em xem lại xem, học kỳ này em đã xin nghỉ mấy lần rồi?"},
      {speaker:"男", pre:"老师，对不起，", blank:"上个月是我妈妈来北京，我带她在中国旅游，然后是我姐姐来，前几天是我病了，下个星期我女朋友要来看我", post:"。",
       py:"Lǎoshī, duìbuqǐ, shàng ge yuè shì wǒ māma lái Běijīng, wǒ dài tā zài Zhōngguó lǚyóu, ránhòu shì wǒ jiějie lái, qián jǐ tiān shì wǒ bìng le, xià ge xīngqī wǒ nǚpéngyou yào lái kàn wǒ.",
       vn:"Thầy ơi, xin lỗi, tháng trước là mẹ em đến Bắc Kinh, em đưa mẹ đi du lịch Trung Quốc, sau đó là chị gái em đến, mấy hôm trước là em bị bệnh, tuần sau bạn gái em sẽ đến thăm em."},
      {speaker:"女", pre:"小雨，", blank:"如果你再不来上课，就什么都听不懂了", post:"。",
       py:"Xiǎoyǔ, rúguǒ nǐ zài bù lái shàngkè, jiù shénme dōu tīng bu dǒng le.",
       vn:"Tiểu Vũ, nếu em cứ không đến lớp nữa thì sẽ chẳng nghe hiểu gì cả đâu."}
     ],
     explain:"男：老师，我可以请几天假吗？女：小雨，你看看，这个学期你都请了几次假了？男：老师，对不起，上个月是我妈妈来北京，我带她在中国旅游，然后是我姐姐来，前几天是我病了，下个星期我女朋友要来看我。女：小雨，如果你再不来上课，就什么都听不懂了。问：关于男的，可以知道什么？ → 经常不来上课。"},
    {num:17, options:["天气很好","喜欢新闻","准备考试"], ans:2, q:"男的为什么听新闻？",
     lines:[
      {speaker:"女", pre:"你在听新闻？", blank:"太阳从西边出来了", post:"？",
       py:"Nǐ zài tīng xīnwén? Tàiyáng cóng xībian chūlai le?",
       vn:"Bạn đang nghe tin tức à? Mặt trời mọc từ hướng tây rồi à?"},
      {speaker:"男", pre:"我对新闻没兴趣，", blank:"主要是想提高提高我的汉语水平", post:"。",
       py:"Wǒ duì xīnwén méi xìngqù, zhǔyào shì xiǎng tígāo tígāo wǒ de Hànyǔ shuǐpíng.",
       vn:"Tôi không hứng thú với tin tức, chủ yếu là muốn nâng cao trình độ tiếng Trung của mình."},
      {speaker:"女", pre:"你一个学期都没认真学习了，", blank:"现在才开始努力", post:"？",
       py:"Nǐ yí ge xuéqī dōu méi rènzhēn xuéxí le, xiànzài cái kāishǐ nǔlì?",
       vn:"Bạn cả học kỳ không học nghiêm túc, giờ mới bắt đầu cố gắng à?"},
      {speaker:"男", pre:"明天就要考试了，", blank:"我要复习复习", post:"。",
       py:"Míngtiān jiù yào kǎoshì le, wǒ yào fùxí fùxí.",
       vn:"Mai là thi rồi, tôi phải ôn tập chút."}
     ],
     explain:"女：你在听新闻？太阳从西边出来了？男：我对新闻没兴趣，主要是想提高提高我的汉语水平。女：你一个学期都没认真学习了，现在才开始努力？男：明天就要考试了，我要复习复习。问：男的为什么听新闻？ → 准备考试。"},
    {num:18, options:["想去饭馆吃","不想吃牛肉","什么都喜欢吃"], ans:2, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"我有点儿饿了，", blank:"我们出去找个人少点儿的饭馆吃饭吧", post:"。",
       py:"Wǒ yǒudiǎnr è le, wǒmen chūqu zhǎo ge rén shǎo diǎnr de fànguǎn chī fàn ba.",
       vn:"Tôi hơi đói rồi, chúng ta ra ngoài tìm nhà hàng ít người ăn cơm đi."},
      {speaker:"男", pre:"这个时间，哪个饭馆人都多，", blank:"我们在家吃吧，自己做", post:"。",
       py:"Zhège shíjiān, nǎge fànguǎn rén dōu duō, wǒmen zài jiā chī ba, zìjǐ zuò.",
       vn:"Giờ này, quán nào cũng đông người, chúng ta ăn ở nhà đi, tự nấu."},
      {speaker:"女", pre:"好，家里有鱼，有鸡蛋，还有牛肉。", blank:"牛肉你想怎么吃？跟鸡蛋一起做还是跟别的菜一起做", post:"？",
       py:"Hǎo, jiā li yǒu yú, yǒu jīdàn, hái yǒu niúròu. Niúròu nǐ xiǎng zěnme chī? Gēn jīdàn yìqǐ zuò háishi gēn biéde cài yìqǐ zuò?",
       vn:"Được, nhà có cá, có trứng, còn có thịt bò. Thịt bò anh muốn ăn kiểu gì? Nấu cùng trứng hay nấu cùng món khác?"},
      {speaker:"男", pre:"怎么做都行，", blank:"我什么都爱吃。需要我帮忙吗", post:"？",
       py:"Zěnme zuò dōu xíng, wǒ shénme dōu ài chī. Xūyào wǒ bāngmáng ma?",
       vn:"Nấu kiểu gì cũng được, tôi cái gì cũng thích ăn. Cần tôi giúp không?"}
     ],
     explain:"女：我有点儿饿了，我们出去找个人少点儿的饭馆吃饭吧。男：这个时间，哪个饭馆人都多，我们在家吃吧，自己做。女：好，家里有鱼，有鸡蛋，还有牛肉。牛肉你想怎么吃？跟鸡蛋一起做还是跟别的菜一起做？男：怎么做都行，我什么都爱吃。需要我帮忙吗？问：关于男的，可以知道什么？ → 什么都喜欢吃。"},
    {num:19, options:["喜欢那里的冬天","不喜欢那里的学习环境","不习惯那里的天气"], ans:2, q:"关于男的，可以知道什么？",
     lines:[
      {speaker:"女", pre:"你在国外留学这几年怎么样？", blank:"那里的生活习惯了吗", post:"？",
       py:"Nǐ zài guówài liú xué zhè jǐ nián zěnme yàng? Nàli de shēnghuó xíguàn le ma?",
       vn:"Mấy năm du học nước ngoài của bạn thế nào? Cuộc sống ở đó quen chưa?"},
      {speaker:"男", pre:"那个地方的人很热情，学习环境也不错，学校里有两个图书馆。", blank:"但是天气我还不太习惯", post:"。",
       py:"Nàge dìfang de rén hěn rèqíng, xuéxí huánjìng yě búcuò, xuéxiào li yǒu liǎng ge túshūguǎn. Dànshì tiānqì wǒ hái bú tài xíguàn.",
       vn:"Người ở nơi đó rất nhiệt tình, môi trường học tập cũng không tệ, trường có hai thư viện. Nhưng thời tiết tôi vẫn chưa quen lắm."},
      {speaker:"女", pre:"怎么？", blank:"那儿的天气跟我们这儿不一样吗", post:"？",
       py:"Zěnme? Nàr de tiānqì gēn wǒmen zhèr bù yíyàng ma?",
       vn:"Sao thế? Thời tiết ở đó khác chỗ chúng ta à?"},
      {speaker:"男", pre:"冬天特别长，从11月到第二年3月都比较冷。下大雪的时候，哪儿都不能去，", blank:"只能在房间里看书", post:"。",
       py:"Dōngtiān tèbié cháng, cóng shíyī yuè dào dì-èr nián sān yuè dōu bǐjiào lěng. Xià dàxuě de shíhou, nǎr dōu bù néng qù, zhǐ néng zài fángjiān li kàn shū.",
       vn:"Mùa đông đặc biệt dài, từ tháng 11 đến tháng 3 năm sau đều khá lạnh. Lúc tuyết rơi to, chẳng đi đâu được, chỉ có thể đọc sách trong phòng."}
     ],
     explain:"女：你在国外留学这几年怎么样？那里的生活习惯了吗？男：那个地方的人很热情，学习环境也不错，学校里有两个图书馆。但是天气我还不太习惯。女：怎么？那儿的天气跟我们这儿不一样吗？男：冬天特别长，从11月到第二年3月都比较冷。下大雪的时候，哪儿都不能去，只能在房间里看书。问：关于男的，可以知道什么？ → 不习惯那里的天气。"},
    {num:20, options:["坐着上课","是老师","什么地方都想去"], ans:1, q:"关于女的，可以知道什么？",
     lines:[
      {speaker:"男", pre:"你在椅子上坐了一个多小时了，", blank:"一句话都不说，怎么了", post:"？",
       py:"Nǐ zài yǐzi shang zuòle yí ge duō xiǎoshí le, yí jù huà dōu bù shuō, zěnme le?",
       vn:"Bạn ngồi trên ghế hơn một tiếng rồi, một câu cũng không nói, sao thế?"},
      {speaker:"女", pre:"我上了一天课，给学生讲中国历史，", blank:"现在什么都不想说", post:"。",
       py:"Wǒ shàngle yì tiān kè, gěi xuésheng jiǎng Zhōngguó lìshǐ, xiànzài shénme dōu bù xiǎng shuō.",
       vn:"Tôi dạy cả ngày, giảng lịch sử Trung Quốc cho học sinh, bây giờ chẳng muốn nói gì cả."},
      {speaker:"男", pre:"那你先休息休息，", blank:"一会儿我带你出去吃饭", post:"。",
       py:"Nà nǐ xiān xiūxi xiūxi, yíhuìr wǒ dài nǐ chūqu chī fàn.",
       vn:"Vậy bạn nghỉ ngơi trước đi, lát nữa tôi đưa bạn ra ngoài ăn cơm."},
      {speaker:"女", pre:"我现在哪儿都不想去，", blank:"就想在家睡觉。我们晚点儿再吃饭吧", post:"。",
       py:"Wǒ xiànzài nǎr dōu bù xiǎng qù, jiù xiǎng zài jiā shuìjiào. Wǒmen wǎn diǎnr zài chī fàn ba.",
       vn:"Bây giờ tôi chẳng muốn đi đâu cả, chỉ muốn ngủ ở nhà. Chúng ta ăn cơm muộn hơn chút đi."}
     ],
     explain:"男：你在椅子上坐了一个多小时了，一句话都不说，怎么了？女：我上了一天课，给学生讲中国历史，现在什么都不想说。男：那你先休息休息，一会儿我带你出去吃饭。女：我现在哪儿都不想去，就想在家睡觉。我们晚点儿再吃饭吧。问：关于女的，可以知道什么？ → 是老师。"}
  ]
};
