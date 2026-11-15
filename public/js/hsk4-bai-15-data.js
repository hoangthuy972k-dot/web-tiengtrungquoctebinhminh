// ══════════════════════════════════════════
// DATA — HSK4 Bài 15: 教育孩子的艺术 (Nghệ thuật giáo dục con cái)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "弹钢琴",
    "py": "tán gāngqín",
    "pos": "Cụm động từ",
    "vn": "chơi đàn dương cầm",
    "hv": "đàn cương cầm",
    "em": "🎹",
    "lesson": 1,
    "explain": [
      "弹 = gảy, chơi (nhạc cụ dây/phím); 钢琴 = piano. 弹吉他 = chơi ghi-ta."
    ],
    "usage": "弹钢琴, 练习弹钢琴, 一边弹钢琴一边唱歌.",
    "collo": [
      "一边弹钢琴一边唱歌",
      "练习弹钢琴",
      "弹得很好"
    ],
    "ex_zh": "那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！",
    "ex_py": "Nàge yìbiān tán gāngqín yìbiān chàng gē de nán háizi shì shéi? Biǎoyǎn de zhēn bàng!",
    "ex_vn": "Cậu bé vừa chơi piano vừa hát kia là ai? Biểu diễn hay thật!",
    "exList": [
      {
        "zh": "那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！",
        "py": "Nàge yìbiān tán gāngqín yìbiān chàng gē de nán háizi shì shéi? Biǎoyǎn de zhēn bàng!",
        "vn": "Cậu bé vừa chơi piano vừa hát kia là ai? Biểu diễn hay thật!"
      },
      {
        "zh": "现在他每天都自己练习弹钢琴。",
        "py": "Xiànzài tā měi tiān dōu zìjǐ liànxí tán gāngqín.",
        "vn": "Bây giờ ngày nào cậu ấy cũng tự luyện chơi piano."
      },
      {
        "zh": "她从五岁开始学弹钢琴，已经坚持了十年了。",
        "py": "Tā cóng wǔ suì kāishǐ xué tán gāngqín, yǐjīng jiānchíle shí nián le.",
        "vn": "Cô ấy học piano từ năm 5 tuổi, đã kiên trì được mười năm rồi."
      }
    ],
    "hanzi": [
      {
        "c": "弹",
        "p": "tán",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "弓 trái → 单 phải",
        "rad": "弓 (cung)",
        "mean": "gảy, bật",
        "tip": "Bộ cung 弓 + 单 → dây cung BẬT ra → GẢY đàn (tán). Đọc dàn = đạn (子弹).",
        "cf": "单 (dān – đơn)",
        "w": "弹钢琴 / 弹吉他"
      },
      {
        "c": "琴",
        "p": "qín",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "玨 trên → 今 dưới",
        "rad": "王 (ngọc)",
        "mean": "đàn",
        "tip": "Hai chữ 王 (dây đàn) + 今(biểu âm) → ĐÀN. 钢琴 = đàn thép = piano.",
        "cf": "今 (jīn – nay)",
        "w": "钢琴 / 小提琴"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cậu bé vừa chơi piano vừa hát kia là ai? Biểu diễn hay thật!",
        "answer": "那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！",
        "answerPy": "Nàge yìbiān tán gāngqín yìbiān chàng gē de nán háizi shì shéi? Biǎoyǎn de zhēn bàng!",
        "note": "一边……一边 ôn lại Bài 2, 表演 (Bài 13).",
        "pair": "一边……一边……"
      }
    ],
    "colloFull": [
      {
        "zh": "练习弹钢琴",
        "py": "liànxí tán gāngqín",
        "vn": "luyện đàn dương cầm"
      },
      {
        "zh": "弹得很好",
        "py": "tán de hěn hǎo",
        "vn": "đàn rất hay"
      },
      {
        "zh": "一边弹钢琴一边唱歌",
        "py": "yìbiān tán gāngqín yìbiān chàng gē",
        "vn": "vừa đàn vừa hát"
      },
      {
        "zh": "学弹钢琴",
        "py": "xué tán gāngqín",
        "vn": "học đàn piano"
      },
      {
        "zh": "弹了一个小时钢琴",
        "py": "tán le yí gè xiǎoshí gāngqín",
        "vn": "đàn một tiếng"
      }
    ],
    "patterns": [
      {
        "s": "弹 + 了 + thời lượng + 钢琴",
        "m": "弹钢琴 là từ ly hợp: 弹了一小时钢琴 ✓"
      },
      {
        "s": "弹 (đàn dây) ≠ 打 (đánh bóng) ≠ 吹 (thổi sáo)"
      }
    ]
  },
  {
    "n": 2,
    "zh": "棒",
    "py": "bàng",
    "pos": "Tính từ",
    "vn": "xuất sắc, hay, giỏi",
    "hv": "bổng",
    "em": "👍",
    "lesson": 1,
    "explain": [
      "Khẩu ngữ khen ngợi: giỏi, tuyệt (= 好, 优秀). 真棒, 太棒了, 表演得真棒."
    ],
    "usage": "真棒, 太棒了, 唱得真棒.",
    "collo": [
      "表演得真棒",
      "太棒了",
      "你真棒"
    ],
    "ex_zh": "表演得真棒！",
    "ex_py": "Biǎoyǎn de zhēn bàng!",
    "ex_vn": "Biểu diễn hay thật!",
    "exList": [
      {
        "zh": "那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！",
        "py": "Nàge yìbiān tán gāngqín yìbiān chàng gē de nán háizi shì shéi? Biǎoyǎn de zhēn bàng!",
        "vn": "Cậu bé vừa chơi piano vừa hát kia là ai? Biểu diễn hay thật!"
      },
      {
        "zh": "太棒了！既然明天不用加班，我们去看电影吧。",
        "py": "Tài bàng le! Jìrán míngtiān búyòng jiā bān, wǒmen qù kàn diànyǐng ba.",
        "vn": "Tuyệt quá! Đã là mai không phải tăng ca, chúng ta đi xem phim đi."
      },
      {
        "zh": "你的汉语说得真棒，跟中国人差不多。",
        "py": "Nǐ de Hànyǔ shuō de zhēn bàng, gēn Zhōngguó rén chàbuduō.",
        "vn": "Tiếng Trung của bạn nói giỏi thật, gần như người Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "棒",
        "p": "bàng",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "木 trái → 奉 phải",
        "rad": "木 (mộc)",
        "mean": "gậy; giỏi",
        "tip": "Gỗ 木 + 奉 → cây GẬY; khẩu ngữ mở rộng thành GIỎI, TUYỆT (như tiếng Việt \"đỉnh\").",
        "cf": "捧 (pěng – bưng)",
        "w": "真棒 / 太棒了 / 棒球"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuyệt quá! Đã là mai không phải tăng ca thì chúng ta đi xem phim đi.",
        "answer": "太棒了！既然明天不用加班，我们就去看电影吧。",
        "answerPy": "Tài bàng le! Jìrán míngtiān búyòng jiābān, wǒmen jiù qù kàn diànyǐng ba.",
        "note": "加班 là từ bài 1; 既然 nêu điều cả hai đã biết.",
        "pair": "既然……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "太棒了",
        "py": "tài bàng le",
        "vn": "tuyệt quá"
      },
      {
        "zh": "你真棒",
        "py": "nǐ zhēn bàng",
        "vn": "bạn giỏi thật"
      },
      {
        "zh": "表演得真棒",
        "py": "biǎoyǎn de zhēn bàng",
        "vn": "diễn hay thật"
      },
      {
        "zh": "棒极了",
        "py": "bàng jí le",
        "vn": "tuyệt cực"
      },
      {
        "zh": "成绩很棒",
        "py": "chéngjì hěn bàng",
        "vn": "thành tích rất tốt"
      }
    ],
    "patterns": [
      {
        "s": "太 + 棒 + 了",
        "m": "Tuyệt quá — lời khen khẩu ngữ"
      },
      {
        "s": "棒 ≈ 好 / 厉害 (bài 11)",
        "m": "棒 thiên khẩu ngữ, dùng khi khen"
      }
    ]
  },
  {
    "n": 3,
    "zh": "孙子",
    "py": "sūnzi",
    "pos": "Danh từ",
    "vn": "cháu nội trai",
    "hv": "tôn tử",
    "em": "👦",
    "lesson": 1,
    "explain": [
      "Con trai của con trai. 孙女 = cháu nội gái; 外孙 = cháu ngoại."
    ],
    "usage": "我孙子, 爷爷的孙子, 孙子和孙女.",
    "collo": [
      "我孙子",
      "两个孙子",
      "孙子孙女"
    ],
    "ex_zh": "是我孙子。去年寒假前的新年晚会他也表演过一次。",
    "ex_py": "Shì wǒ sūnzi. Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.",
    "ex_vn": "Là cháu nội tôi. Đêm hội năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần.",
    "exList": [
      {
        "zh": "是我孙子。去年寒假前的新年晚会他也表演过一次。",
        "py": "Shì wǒ sūnzi. Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.",
        "vn": "Là cháu nội tôi. Đêm hội năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần."
      },
      {
        "zh": "我孙子这么优秀都是因为他父母教育得好。",
        "py": "Wǒ sūnzi zhème yōuxiù dōu shì yīnwèi tā fùmǔ jiàoyù de hǎo.",
        "vn": "Cháu tôi xuất sắc như vậy đều là vì bố mẹ nó dạy dỗ tốt."
      },
      {
        "zh": "爷爷最喜欢给孙子讲京剧里的历史故事。",
        "py": "Yéye zuì xǐhuan gěi sūnzi jiǎng jīngjù li de lìshǐ gùshi.",
        "vn": "Ông thích nhất là kể cho cháu nghe chuyện lịch sử trong Kinh kịch."
      }
    ],
    "hanzi": [
      {
        "c": "孙",
        "p": "sūn",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "子 trái → 小 phải",
        "rad": "子 (tử)",
        "mean": "cháu",
        "tip": "子(con) + 小(nhỏ) → con của con, thế hệ nhỏ hơn → CHÁU. Cũng là họ Tôn (孙月).",
        "cf": "孩 (hái – trẻ)",
        "w": "孙子 / 孙女 / 孙中山"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cháu tôi xuất sắc như vậy đều là vì bố mẹ nó dạy dỗ tốt.",
        "answer": "我孙子这么优秀都是因为他父母教育得好。",
        "answerPy": "Wǒ sūnzi zhème yōuxiù dōu shì yīnwèi tā fùmǔ jiàoyù de hǎo.",
        "note": "优秀 (Bài 10), 教育 (Bài 12), bổ ngữ trạng thái 得.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "我孙子",
        "py": "wǒ sūnzi",
        "vn": "cháu nội tôi"
      },
      {
        "zh": "两个孙子",
        "py": "liǎng gè sūnzi",
        "vn": "hai đứa cháu trai"
      },
      {
        "zh": "孙子孙女",
        "py": "sūnzi sūnnǚ",
        "vn": "cháu trai cháu gái"
      },
      {
        "zh": "带孙子",
        "py": "dài sūnzi",
        "vn": "trông cháu"
      },
      {
        "zh": "孙子很可爱",
        "py": "sūnzi hěn kě'ài",
        "vn": "cháu rất đáng yêu"
      }
    ],
    "patterns": [
      {
        "s": "孙子 (cháu nội trai) / 孙女 (cháu nội gái)"
      },
      {
        "s": "带 + 孙子",
        "m": "Trông cháu — việc của ông bà"
      }
    ]
  },
  {
    "n": 4,
    "zh": "寒假",
    "py": "hánjià",
    "pos": "Danh từ",
    "vn": "kỳ nghỉ đông",
    "hv": "hàn giá",
    "em": "❄️",
    "lesson": 1,
    "explain": [
      "Kỳ nghỉ mùa đông (quanh Tết). 暑假 = nghỉ hè (Bài 1). 放寒假 = được nghỉ đông."
    ],
    "usage": "放寒假, 寒假去旅行, 寒假前.",
    "collo": [
      "放寒假了",
      "寒假去旅行",
      "寒假前的晚会"
    ],
    "ex_zh": "去年寒假前的新年晚会他也表演过一次。",
    "ex_py": "Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.",
    "ex_vn": "Đêm hội năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần.",
    "exList": [
      {
        "zh": "去年寒假前的新年晚会他也表演过一次。",
        "py": "Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.",
        "vn": "Đêm hội năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần."
      },
      {
        "zh": "已经放寒假了，去打球的人肯定不多，星期天我们去学校的体育馆打网球吧。",
        "py": "Yǐjīng fàng hánjià le, qù dǎ qiú de rén kěndìng bù duō, xīngqītiān wǒmen qù xuéxiào de tǐyùguǎn dǎ wǎngqiú ba.",
        "vn": "Đã nghỉ đông rồi, người đi chơi bóng chắc chắn không nhiều, chủ nhật chúng ta đến nhà thi đấu của trường chơi tennis đi."
      },
      {
        "zh": "大家都同意寒假去旅行，于是我们开始讨论去哪里。",
        "py": "Dàjiā dōu tóngyì hánjià qù lǚxíng, yúshì wǒmen kāishǐ tǎolùn qù nǎlǐ.",
        "vn": "Mọi người đều đồng ý nghỉ đông đi du lịch, thế là chúng tôi bắt đầu thảo luận đi đâu."
      }
    ],
    "hanzi": [
      {
        "c": "寒",
        "p": "hán",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "宀 → 井 → 一 → 冫",
        "rad": "宀 (miên)",
        "mean": "lạnh",
        "tip": "Mái nhà 宀 + người nằm trong cỏ + băng 冫 bên dưới → LẠNH (hàn). 寒假 = kỳ nghỉ lạnh = nghỉ đông.",
        "cf": "塞 (sāi – nhét)",
        "w": "寒假 / 寒冷"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì đã nghỉ đông rồi, nên người đi chơi bóng chắc chắn không nhiều.",
        "answer": "因为已经放寒假了，所以去打球的人肯定不多。",
        "answerPy": "Yīnwèi yǐjīng fàng hánjià le, suǒyǐ qù dǎqiú de rén kěndìng bù duō.",
        "note": "肯定 là từ bài 5 — ở đây là phó từ.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "放寒假",
        "py": "fàng hánjià",
        "vn": "bắt đầu nghỉ đông"
      },
      {
        "zh": "寒假去旅行",
        "py": "hánjià qù lǚxíng",
        "vn": "nghỉ đông đi du lịch"
      },
      {
        "zh": "寒假作业",
        "py": "hánjià zuòyè",
        "vn": "bài tập nghỉ đông"
      },
      {
        "zh": "寒假前",
        "py": "hánjià qián",
        "vn": "trước kỳ nghỉ đông"
      },
      {
        "zh": "过寒假",
        "py": "guo hánjià",
        "vn": "trải qua kỳ nghỉ đông"
      }
    ],
    "patterns": [
      {
        "s": "放 + 寒假 / 暑假",
        "m": "Nghỉ đông / nghỉ hè"
      },
      {
        "s": "寒 + 假",
        "m": "Kỳ nghỉ (假) mùa lạnh (寒)"
      }
    ]
  },
  {
    "n": 5,
    "zh": "父亲",
    "py": "fùqīn",
    "pos": "Danh từ",
    "vn": "cha, bố",
    "hv": "phụ thân",
    "em": "👨",
    "lesson": 1,
    "explain": [
      "Cách gọi trang trọng của 爸爸. 母亲 = mẹ. 父母 = cha mẹ."
    ],
    "usage": "优秀的父亲, 我父亲, 父亲或者母亲.",
    "collo": [
      "一位优秀的父亲",
      "我父亲",
      "父亲和母亲"
    ],
    "ex_zh": "如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。",
    "ex_py": "Rúguǒ xīwàng yǒu yí ge yōuxiù de háizi, nǐ jiù yào xiān chéngwéi yí wèi yōuxiù de fùqīn huòzhě mǔqīn.",
    "ex_vn": "Nếu mong có một đứa con xuất sắc, bạn phải trở thành một người cha hoặc người mẹ xuất sắc trước.",
    "exList": [
      {
        "zh": "如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。",
        "py": "Rúguǒ xīwàng yǒu yí ge yōuxiù de háizi, nǐ jiù yào xiān chéngwéi yí wèi yōuxiù de fùqīn huòzhě mǔqīn.",
        "vn": "Nếu mong có một đứa con xuất sắc, bạn phải trở thành một người cha hoặc người mẹ xuất sắc trước."
      },
      {
        "zh": "他三岁跟父亲母亲一起来到这儿，就再也没离开过这里。",
        "py": "Tā sān suì gēn fùqīn mǔqīn yìqǐ láidào zhèr, jiù zài yě méi líkāiguo zhèlǐ.",
        "vn": "Anh ấy 3 tuổi cùng cha mẹ đến đây, rồi không bao giờ rời đi."
      },
      {
        "zh": "我父亲是一位医生，工作很忙，但每天都抽时间陪我。",
        "py": "Wǒ fùqīn shì yí wèi yīshēng, gōngzuò hěn máng, dàn měi tiān dōu chōu shíjiān péi wǒ.",
        "vn": "Bố tôi là bác sĩ, công việc rất bận, nhưng ngày nào cũng dành thời gian ở bên tôi."
      }
    ],
    "hanzi": [
      {
        "c": "父",
        "p": "fù",
        "type": "独体字 · Chữ đơn thể",
        "st": 4,
        "ord": "丿 → 丶 → 丿 → 乀",
        "rad": "父 (phụ)",
        "mean": "cha",
        "tip": "Tượng hình bàn tay cầm rìu (người cha lao động) → CHA (phụ). 爸 = 父 + 巴.",
        "cf": "交 (jiāo – giao)",
        "w": "父亲 / 父母 / 爸爸"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu mong có một đứa con xuất sắc, bạn phải trở thành một người cha hoặc mẹ xuất sắc trước.",
        "answer": "如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。",
        "answerPy": "Rúguǒ xīwàng yǒu yí ge yōuxiù de háizi, nǐ jiù yào xiān chéngwéi yí wèi yōuxiù de fùqīn huòzhě mǔqīn.",
        "note": "如果……就 (Bài 1), 成为 (Bài 8), 优秀 (Bài 10).",
        "pair": "如果……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "我父亲",
        "py": "wǒ fùqīn",
        "vn": "cha tôi"
      },
      {
        "zh": "父亲和母亲",
        "py": "fùqīn hé mǔqīn",
        "vn": "cha và mẹ"
      },
      {
        "zh": "一位优秀的父亲",
        "py": "yí wèi yōuxiù de fùqīn",
        "vn": "một người cha xuất sắc"
      },
      {
        "zh": "父亲节",
        "py": "fùqīnjié",
        "vn": "ngày của cha"
      },
      {
        "zh": "像父亲一样",
        "py": "xiàng fùqīn yíyàng",
        "vn": "giống như cha"
      }
    ],
    "patterns": [
      {
        "s": "父亲 ≈ 爸爸",
        "m": "父亲 trang trọng, dùng khi viết; 母亲 là từ bài 10"
      },
      {
        "s": "优秀 + 的 + 父亲",
        "m": "Người cha xuất sắc — 优秀 là từ bài 10"
      }
    ]
  },
  {
    "n": 6,
    "zh": "闹钟",
    "py": "nàozhōng",
    "pos": "Danh từ",
    "vn": "đồng hồ báo thức",
    "hv": "náo chung",
    "em": "⏰",
    "lesson": 2,
    "explain": [
      "Đồng hồ kêu để đánh thức. 闹钟响了 = chuông báo thức reo. 定闹钟 = đặt báo thức."
    ],
    "usage": "闹钟响了, 定闹钟, 关闹钟.",
    "collo": [
      "闹钟响了",
      "定一个闹钟",
      "听不见闹钟"
    ],
    "ex_zh": "比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。",
    "ex_py": "Bǐrú zǎoshang nàozhōng xiǎngle tā bù xǐng, wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ.",
    "ex_vn": "Ví dụ sáng chuông báo thức reo nó không dậy, tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh.",
    "exList": [
      {
        "zh": "比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。",
        "py": "Bǐrú zǎoshang nàozhōng xiǎngle tā bù xǐng, wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ.",
        "vn": "Ví dụ sáng chuông báo thức reo nó không dậy, tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh."
      },
      {
        "zh": "为了不迟到，我每天定三个闹钟。",
        "py": "Wèile bù chídào, wǒ měi tiān dìng sān ge nàozhōng.",
        "vn": "Để không đi muộn, ngày nào tôi cũng đặt ba cái báo thức."
      },
      {
        "zh": "昨晚睡得太晚，早上闹钟响了好几遍我都没听见。",
        "py": "Zuó wǎn shuì de tài wǎn, zǎoshang nàozhōng xiǎngle hǎo jǐ biàn wǒ dōu méi tīngjiàn.",
        "vn": "Tối qua ngủ muộn quá, sáng báo thức reo mấy lần tôi đều không nghe thấy."
      }
    ],
    "hanzi": [
      {
        "c": "闹",
        "p": "nào",
        "type": "半包围结构 · Nửa bao quanh",
        "st": 8,
        "ord": "门 bao → 市 trong",
        "rad": "门 (môn)",
        "mean": "ồn ào",
        "tip": "Cửa 门 + chợ 市 → chợ ở cửa → ỒN ÀO, NÁO. 闹钟 = đồng hồ ồn = báo thức; 热闹 = náo nhiệt.",
        "cf": "闻 (wén – nghe, ngửi)",
        "w": "闹钟 / 热闹"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì tối qua ngủ quá muộn, nên sáng nay báo thức reo mấy lượt tôi đều không nghe thấy.",
        "answer": "因为昨晚睡得太晚，所以早上闹钟响了好几遍我都没听见。",
        "answerPy": "Yīnwèi zuówǎn shuì de tài wǎn, suǒyǐ zǎoshang nàozhōng xiǎngle hǎojǐ biàn wǒ dōu méi tīngjiàn.",
        "note": "遍 là từ bài 13 — đếm trọn một lượt.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "闹钟响了",
        "py": "nàozhōng xiǎng le",
        "vn": "báo thức reo"
      },
      {
        "zh": "定一个闹钟",
        "py": "dìng yí gè nàozhōng",
        "vn": "đặt báo thức"
      },
      {
        "zh": "听不见闹钟",
        "py": "tīng bú jiàn nàozhōng",
        "vn": "không nghe thấy báo thức"
      },
      {
        "zh": "关掉闹钟",
        "py": "guān diào nàozhōng",
        "vn": "tắt báo thức"
      },
      {
        "zh": "早上的闹钟",
        "py": "zǎoshang de nàozhōng",
        "vn": "báo thức buổi sáng"
      }
    ],
    "patterns": [
      {
        "s": "定 / 关 + 闹钟",
        "m": "Đặt / tắt báo thức"
      },
      {
        "s": "闹 + 钟",
        "m": "Đồng hồ (钟) kêu (闹)"
      }
    ]
  },
  {
    "n": 7,
    "zh": "响",
    "py": "xiǎng",
    "pos": "Động từ",
    "vn": "reo, vang lên",
    "hv": "hưởng",
    "em": "🔔",
    "lesson": 2,
    "explain": [
      "Phát ra âm thanh: chuông, điện thoại, sấm… Cũng là tính từ: 声音很响 (to, vang)."
    ],
    "usage": "闹钟响了, 手机一直在响, 声音很响.",
    "collo": [
      "闹钟响了",
      "电话响了",
      "一直在响"
    ],
    "ex_zh": "早上闹钟响了她不醒。",
    "ex_py": "Zǎoshang nàozhōng xiǎngle tā bù xǐng.",
    "ex_vn": "Sáng chuông báo thức reo nó không dậy.",
    "exList": [
      {
        "zh": "早上闹钟响了她不醒。",
        "py": "Zǎoshang nàozhōng xiǎngle tā bù xǐng.",
        "vn": "Sáng chuông báo thức reo nó không dậy."
      },
      {
        "zh": "A：桌子上那个一直在响的手机是谁的？可能找他有什么急事。B：那是张经理的，他在会议室开会呢。",
        "py": "A: Zhuōzi shang nàge yìzhí zài xiǎng de shǒujī shì shéi de? Kěnéng zhǎo tā yǒu shénme jíshì. B: Nà shì Zhāng jīnglǐ de, tā zài huìyìshì kāi huì ne.",
        "vn": "A: Điện thoại cứ reo mãi trên bàn là của ai? Có lẽ có việc gấp tìm anh ấy. B: Của giám đốc Trương, anh ấy đang họp trong phòng họp."
      },
      {
        "zh": "上课的时候手机千万别响，否则会影响别人。",
        "py": "Shàng kè de shíhou shǒujī qiānwàn bié xiǎng, fǒuzé huì yǐngxiǎng biérén.",
        "vn": "Lúc học điện thoại tuyệt đối đừng để reo, nếu không sẽ ảnh hưởng người khác."
      }
    ],
    "hanzi": [
      {
        "c": "响",
        "p": "xiǎng",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "口 trái → 向 phải",
        "rad": "口 (khẩu)",
        "mean": "vang",
        "tip": "Miệng 口 + 向(hướng, biểu âm) → tiếng phát ra → VANG, REO. 影响 = ảnh hưởng (Bài 4) cũng có 响.",
        "cf": "向 (xiàng – hướng)",
        "w": "响 / 影响 / 响亮"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Điện thoại cứ reo mãi trên bàn là của ai vậy? Chắc là có việc gấp tìm anh ấy.",
        "answer": "桌子上那个一直在响的手机是谁的呀？大概是有什么急事找他吧。",
        "answerPy": "Zhuōzi shang nàge yìzhí zài xiǎng de shǒujī shì shéi de ya? Dàgài shì yǒu shénme jíshì zhǎo tā ba.",
        "note": "在 + V + 的 — định ngữ chỉ việc đang diễn ra.",
        "pair": "大概……"
      }
    ],
    "colloFull": [
      {
        "zh": "闹钟响了",
        "py": "nàozhōng xiǎng le",
        "vn": "báo thức reo"
      },
      {
        "zh": "电话响了",
        "py": "diànhuà xiǎng le",
        "vn": "điện thoại reo"
      },
      {
        "zh": "一直在响",
        "py": "yīzhí zài xiǎng",
        "vn": "cứ reo mãi"
      },
      {
        "zh": "响了好几遍",
        "py": "xiǎng le hǎo jǐ biàn",
        "vn": "reo mấy lượt"
      },
      {
        "zh": "声音很响",
        "py": "shēngyīn hěn xiǎng",
        "vn": "tiếng rất to"
      }
    ],
    "patterns": [
      {
        "s": "N + 响 + 了",
        "m": "Cái gì đó reo lên"
      },
      {
        "s": "响 dùng cho tiếng chuông, điện thoại — không dùng cho người"
      }
    ]
  },
  {
    "n": 8,
    "zh": "醒",
    "py": "xǐng",
    "pos": "Động từ",
    "vn": "thức dậy, tỉnh dậy",
    "hv": "tỉnh",
    "em": "🌅",
    "lesson": 2,
    "explain": [
      "Tỉnh giấc, hết mê. 睡醒 = ngủ dậy; 醒来 = tỉnh dậy; 叫醒 = gọi dậy."
    ],
    "usage": "醒了, 叫醒, 睡醒.",
    "collo": [
      "闹钟响了她不醒",
      "把他叫醒",
      "刚睡醒"
    ],
    "ex_zh": "早上闹钟响了她不醒。",
    "ex_py": "Zǎoshang nàozhōng xiǎngle tā bù xǐng.",
    "ex_vn": "Sáng chuông báo thức reo nó không dậy.",
    "exList": [
      {
        "zh": "早上闹钟响了她不醒。",
        "py": "Zǎoshang nàozhōng xiǎngle tā bù xǐng.",
        "vn": "Sáng chuông báo thức reo nó không dậy."
      },
      {
        "zh": "明天早上六点你把我叫醒，我得赶飞机。",
        "py": "Míngtiān zǎoshang liù diǎn nǐ bǎ wǒ jiàoxǐng, wǒ děi gǎn fēijī.",
        "vn": "Sáng mai 6 giờ gọi tôi dậy nhé, tôi phải kịp chuyến bay."
      },
      {
        "zh": "他刚睡醒，脸色不太好，好像昨晚没休息好。",
        "py": "Tā gāng shuìxǐng, liǎnsè bú tài hǎo, hǎoxiàng zuó wǎn méi xiūxi hǎo.",
        "vn": "Anh ấy vừa ngủ dậy, sắc mặt không tốt lắm, hình như tối qua không nghỉ ngơi tốt."
      }
    ],
    "hanzi": [
      {
        "c": "醒",
        "p": "xǐng",
        "type": "左右结构 · Trái-phải",
        "st": 16,
        "ord": "酉 trái → 星 phải",
        "rad": "酉 (dậu)",
        "mean": "tỉnh",
        "tip": "Bộ 酉 (rượu) + 星 → hết say rượu → TỈNH, THỨC. 提醒 (Bài 4) = nhắc nhở.",
        "cf": "星 (xīng – sao)",
        "w": "醒 / 叫醒 / 提醒"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Vì mai tôi phải cho kịp chuyến bay, nên sáu giờ sáng bạn gọi tôi dậy nhé.",
        "answer": "因为明天我得赶飞机，所以早上六点你就把我叫醒吧。",
        "answerPy": "Yīnwèi míngtiān wǒ děi gǎn fēijī, suǒyǐ zǎoshang liù diǎn nǐ jiù bǎ wǒ jiàoxǐng ba.",
        "note": "把 + ai + 叫醒 — 醒 làm bổ ngữ kết quả.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "睡醒",
        "py": "shuì xǐng",
        "vn": "ngủ dậy"
      },
      {
        "zh": "把他叫醒",
        "py": "bǎ tā jiào xǐng",
        "vn": "gọi anh ấy dậy"
      },
      {
        "zh": "醒得很早",
        "py": "xǐng de hěn zǎo",
        "vn": "tỉnh rất sớm"
      },
      {
        "zh": "还没醒",
        "py": "hái méi xǐng",
        "vn": "chưa tỉnh"
      },
      {
        "zh": "醒过来",
        "py": "xǐng guòlái",
        "vn": "tỉnh lại"
      }
    ],
    "patterns": [
      {
        "s": "把 + ai + 叫醒",
        "m": "Gọi ai dậy — 醒 là bổ ngữ kết quả"
      },
      {
        "s": "醒 ↔ 睡",
        "m": "Tỉnh ↔ ngủ"
      }
    ]
  },
  {
    "n": 9,
    "zh": "赶",
    "py": "gǎn",
    "pos": "Động từ",
    "vn": "vội, gấp rút; đuổi kịp",
    "hv": "cản",
    "em": "🏃",
    "lesson": 2,
    "explain": [
      "(1) Vội vàng làm kịp: 赶时间, 赶飞机, 赶火车. (2) Đuổi theo, kịp: 赶上, 赶回来."
    ],
    "usage": "赶时间, 赶飞机, 赶回来.",
    "collo": [
      "赶时间",
      "赶飞机",
      "专门赶回来"
    ],
    "ex_zh": "我赶时间送她上学，她又急着上厕所。",
    "ex_py": "Wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ.",
    "ex_vn": "Tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh.",
    "exList": [
      {
        "zh": "我赶时间送她上学，她又急着上厕所。",
        "py": "Wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ.",
        "vn": "Tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh."
      },
      {
        "zh": "A：这次大学同学聚会你联系得怎么样了？能来多少人？B：大约有一半吧，李进还专门从国外赶回来呢。",
        "py": "A: Zhè cì dàxué tóngxué jùhuì nǐ liánxì de zěnmeyàng le? Néng lái duōshao rén? B: Dàyuē yǒu yíbàn ba, Lǐ Jìn hái zhuānmén cóng guówài gǎn huílai ne.",
        "vn": "A: Họp lớp đại học lần này bạn liên lạc thế nào rồi? Được bao nhiêu người? B: Khoảng một nửa, Lý Tiến còn đặc biệt từ nước ngoài về kịp."
      },
      {
        "zh": "别着急，还有一个小时呢，来得及赶上火车。",
        "py": "Bié zháojí, hái yǒu yí ge xiǎoshí ne, láidejí gǎnshàng huǒchē.",
        "vn": "Đừng vội, còn một tiếng nữa, kịp bắt tàu."
      }
    ],
    "hanzi": [
      {
        "c": "赶",
        "p": "gǎn",
        "type": "半包围结构 · Nửa bao quanh",
        "st": 10,
        "ord": "走 bao → 干 trong",
        "rad": "走 (tẩu)",
        "mean": "đuổi, vội",
        "tip": "Bộ chạy 走 + 干 → chạy ĐUỔI theo → VỘI, KỊP. 赶时间 = chạy đua với thời gian.",
        "cf": "起 (qǐ – dậy, cũng bộ 走)",
        "w": "赶 / 赶时间 / 赶上 / 赶快"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Khoảng một nửa thôi, nhưng Lý Tiến còn đặc biệt từ nước ngoài bay về cho kịp.",
        "answer": "大约有一半吧，不过李进还专门从国外赶回来呢。",
        "answerPy": "Dàyuē yǒu yíbàn ba, búguò Lǐ Jìn hái zhuānmén cóng guówài gǎn huilai ne.",
        "note": "大约 là từ bài 13, 专门 là từ bài 2.",
        "pair": "……，不过……"
      }
    ],
    "colloFull": [
      {
        "zh": "赶时间",
        "py": "gǎn shíjiān",
        "vn": "gấp thời gian"
      },
      {
        "zh": "赶飞机",
        "py": "gǎn fēijī",
        "vn": "kịp chuyến bay"
      },
      {
        "zh": "赶回来",
        "py": "gǎn huílai",
        "vn": "về kịp"
      },
      {
        "zh": "赶不上",
        "py": "gǎn bú shàng",
        "vn": "không kịp"
      },
      {
        "zh": "赶作业",
        "py": "gǎn zuòyè",
        "vn": "chạy đua làm bài"
      }
    ],
    "patterns": [
      {
        "s": "赶 + 飞机 / 火车",
        "m": "Cho kịp chuyến bay, chuyến tàu"
      },
      {
        "s": "赶得上 / 赶不上",
        "m": "Kịp / không kịp — bổ ngữ khả năng"
      }
    ]
  },
  {
    "n": 10,
    "zh": "厕所",
    "py": "cèsuǒ",
    "pos": "Danh từ",
    "vn": "nhà vệ sinh",
    "hv": "xí sở",
    "em": "🚽",
    "lesson": 2,
    "explain": [
      "Nhà vệ sinh (khẩu ngữ hơn 卫生间 Bài 14). 上厕所 = đi vệ sinh."
    ],
    "usage": "上厕所, 公共厕所, 厕所在哪儿.",
    "collo": [
      "急着上厕所",
      "公共厕所",
      "找厕所"
    ],
    "ex_zh": "她又急着上厕所。",
    "ex_py": "Tā yòu jízhe shàng cèsuǒ.",
    "ex_vn": "Nó lại cuống lên đi vệ sinh.",
    "exList": [
      {
        "zh": "我赶时间送她上学，她又急着上厕所。",
        "py": "Wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ.",
        "vn": "Tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh."
      },
      {
        "zh": "请问，这附近有公共厕所吗？",
        "py": "Qǐngwèn, zhè fùjìn yǒu gōnggòng cèsuǒ ma?",
        "vn": "Xin hỏi, gần đây có nhà vệ sinh công cộng không?"
      },
      {
        "zh": "出发前先去一下厕所，路上要开三个小时呢。",
        "py": "Chūfā qián xiān qù yíxià cèsuǒ, lùshang yào kāi sān ge xiǎoshí ne.",
        "vn": "Trước khi xuất phát đi vệ sinh trước, trên đường phải lái ba tiếng đấy."
      }
    ],
    "hanzi": [
      {
        "c": "厕",
        "p": "cè",
        "type": "半包围结构 · Nửa bao quanh",
        "st": 8,
        "ord": "厂 bao → 则 trong",
        "rad": "厂 (hán)",
        "mean": "nhà xí",
        "tip": "Mái 厂 + 则 → nơi có mái che ở góc nhà → NHÀ VỆ SINH. 厕所 = trắc sở.",
        "cf": "则 (zé – thì, quy tắc)",
        "w": "厕所 / 公共厕所"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi xuất phát đi vệ sinh đã, vì trên đường phải chạy ba tiếng đấy.",
        "answer": "出发前先去一下厕所，因为路上要开三个小时呢。",
        "answerPy": "Chūfā qián xiān qù yíxià cèsuǒ, yīnwèi lù shang yào kāi sān ge xiǎoshí ne.",
        "note": "上厕所 dùng động từ 上; 卫生间 (bài 14) lịch sự hơn.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "上厕所",
        "py": "shàng cèsuǒ",
        "vn": "đi vệ sinh"
      },
      {
        "zh": "公共厕所",
        "py": "gōng gòng cèsuǒ",
        "vn": "nhà vệ sinh công cộng"
      },
      {
        "zh": "找厕所",
        "py": "zhǎo cèsuǒ",
        "vn": "tìm nhà vệ sinh"
      },
      {
        "zh": "厕所在哪儿",
        "py": "cèsuǒ zài nǎr",
        "vn": "nhà vệ sinh ở đâu"
      },
      {
        "zh": "急着上厕所",
        "py": "jí zhe shàng cèsuǒ",
        "vn": "mót đi vệ sinh"
      }
    ],
    "patterns": [
      {
        "s": "上 + 厕所",
        "m": "Đi vệ sinh — dùng động từ 上"
      },
      {
        "s": "厕所 ≈ 卫生间 (bài 14)",
        "m": "卫生间 lịch sự hơn, dùng ở nhà và nơi sang"
      }
    ]
  },
  {
    "n": 11,
    "zh": "批评",
    "py": "pīpíng",
    "pos": "Động từ",
    "vn": "phê bình",
    "hv": "phê bình",
    "em": "😠",
    "lesson": 2,
    "explain": [
      "Chỉ ra lỗi sai, trách mắng. Trái nghĩa: 表扬 (khen ngợi). 受到批评 = bị phê bình."
    ],
    "usage": "批评孩子, 受到批评, 不得不批评.",
    "collo": [
      "因为小事批评她",
      "受到批评",
      "不要用……批评他"
    ],
    "ex_zh": "每天因为这些小事批评她，弄得我俩心情都不好。",
    "ex_py": "Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòng de wǒ liǎ xīnqíng dōu bù hǎo.",
    "ex_vn": "Ngày nào cũng vì những việc nhỏ này mà phê bình nó, khiến cả hai mẹ con tâm trạng đều không tốt.",
    "exList": [
      {
        "zh": "每天因为这些小事批评她，弄得我俩心情都不好。",
        "py": "Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòng de wǒ liǎ xīnqíng dōu bù hǎo.",
        "vn": "Ngày nào cũng vì những việc nhỏ này mà phê bình nó, khiến cả hai mẹ con tâm trạng đều không tốt."
      },
      {
        "zh": "当孩子不明白时，应该多鼓励他，不要用\"懒\"\"笨\"\"粗心\"这种词批评他。",
        "py": "Dāng háizi bù míngbai shí, yīnggāi duō gǔlì tā, búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā.",
        "vn": "Khi trẻ không hiểu, nên khuyến khích nhiều hơn, đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình."
      },
      {
        "zh": "如果遇到不得不批评别人的时候，态度要友好一点儿，不要让别人听了心里不舒服。",
        "py": "Rúguǒ yùdào bùdébù pīpíng biérén de shíhou, tàidu yào yǒuhǎo yìdiǎnr, búyào ràng biérén tīngle xīnli bù shūfu.",
        "vn": "Nếu gặp lúc buộc phải phê bình người khác, thái độ nên thân thiện một chút, đừng để người ta nghe xong khó chịu."
      }
    ],
    "hanzi": [
      {
        "c": "批",
        "p": "pī",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "扌 trái → 比 phải",
        "rad": "扌 (thủ)",
        "mean": "phê",
        "tip": "Tay 扌 + 比(so sánh) → dùng tay chỉ ra chỗ sai → PHÊ. 批评 = phê bình.",
        "cf": "比 (bǐ – so sánh)",
        "w": "批评 / 批准"
      },
      {
        "c": "评",
        "p": "píng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "讠 trái → 平 phải",
        "rad": "讠 (ngôn)",
        "mean": "bình luận",
        "tip": "Lời nói 讠 + 平(công bằng) → nói lời công bằng → BÌNH, đánh giá.",
        "cf": "平 (píng – bằng)",
        "w": "批评 / 评价"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nếu gặp lúc buộc phải phê bình người khác, thái độ nên thân thiện một chút.",
        "answer": "如果遇到不得不批评别人的时候，态度要友好一点儿。",
        "answerPy": "Rúguǒ yùdào bùdébù pīpíng biérén de shíhou, tàidu yào yǒuhǎo yìdiǎnr.",
        "note": "不得不 (Bài 10), 态度 (Bài 8), 友好 (Bài 12).",
        "pair": "如果……"
      }
    ],
    "colloFull": [
      {
        "zh": "受到批评",
        "py": "shòudào pīpíng",
        "vn": "bị phê bình"
      },
      {
        "zh": "批评他",
        "py": "pīpíng tā",
        "vn": "phê bình anh ấy"
      },
      {
        "zh": "因为小事批评",
        "py": "yīnwèi xiǎo shì pīpíng",
        "vn": "vì việc nhỏ mà phê bình"
      },
      {
        "zh": "批评和表扬",
        "py": "pīpíng hé biǎoyáng",
        "vn": "phê bình và khen ngợi"
      },
      {
        "zh": "别批评孩子",
        "py": "bié pīpíng háizi",
        "vn": "đừng mắng con"
      }
    ],
    "patterns": [
      {
        "s": "批评 + ai",
        "m": "Phê bình ai"
      },
      {
        "s": "批评 ↔ 表扬",
        "m": "Phê bình ↔ khen ngợi"
      }
    ]
  },
  {
    "n": 12,
    "zh": "弄",
    "py": "nòng",
    "pos": "Động từ",
    "vn": "làm",
    "hv": "lộng",
    "em": "🔨",
    "lesson": 2,
    "explain": [
      "Động từ khẩu ngữ nghĩa \"làm\", thay thế nhiều động từ khác (准备, 碰, 批评…). 弄好 = làm xong; 弄坏 = làm hỏng; 弄得……= khiến cho…."
    ],
    "usage": "弄好了, 弄坏了, 弄得……, 弄清楚.",
    "collo": [
      "弄得心情不好",
      "别弄坏了",
      "弄清楚"
    ],
    "ex_zh": "每天因为这些小事批评她，弄得我俩心情都不好。",
    "ex_py": "Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòng de wǒ liǎ xīnqíng dōu bù hǎo.",
    "ex_vn": "Ngày nào cũng vì những việc nhỏ này mà phê bình nó, khiến cả hai mẹ con tâm trạng đều không tốt.",
    "exList": [
      {
        "zh": "每天因为这些小事批评她，弄得我俩心情都不好。",
        "py": "Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòng de wǒ liǎ xīnqíng dōu bù hǎo.",
        "vn": "Ngày nào cũng vì những việc nhỏ này mà phê bình nó, khiến cả hai mẹ con tâm trạng đều không tốt."
      },
      {
        "zh": "A：关于那个新闻的材料你准备好了吗？我们开会时要用。B：都弄好了，马上给您送过去。",
        "py": "A: Guānyú nàge xīnwén de cáiliào nǐ zhǔnbèi hǎo le ma? Wǒmen kāi huì shí yào yòng. B: Dōu nòng hǎo le, mǎshàng gěi nín sòng guòqu.",
        "vn": "A: Tài liệu về tin tức đó bạn chuẩn bị xong chưa? Lúc họp cần dùng. B: Đều làm xong rồi, mang sang cho anh ngay."
      },
      {
        "zh": "一会儿搬沙发的时候要小心点儿，别弄坏了。",
        "py": "Yíhuìr bān shāfā de shíhou yào xiǎoxīn diǎnr, bié nòng huài le.",
        "vn": "Lát nữa khiêng sofa cẩn thận một chút, đừng làm hỏng."
      }
    ],
    "hanzi": [
      {
        "c": "弄",
        "p": "nòng",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "王 trên → 廾 dưới",
        "rad": "廾 (củng)",
        "mean": "làm, nghịch",
        "tip": "Ngọc 王 + hai tay 廾 → hai tay cầm ngọc NGHỊCH → LÀM, xử lý. Chữ khẩu ngữ \"vạn năng\".",
        "cf": "开 (kāi – mở)",
        "w": "弄 / 弄好 / 弄坏 / 弄清楚"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lát nữa khiêng sô pha thì cẩn thận một chút, nếu không lại làm hỏng mất.",
        "answer": "一会儿搬沙发的时候要小心点儿，不然就弄坏了。",
        "answerPy": "Yíhuìr bān shāfā de shíhou yào xiǎoxīn diǎnr, bùrán jiù nòng huài le.",
        "note": "沙发 là từ bài 5; 弄 + bổ ngữ kết quả: 弄坏 / 弄脏.",
        "pair": "不然……"
      }
    ],
    "colloFull": [
      {
        "zh": "弄坏了",
        "py": "nòng huài le",
        "vn": "làm hỏng rồi"
      },
      {
        "zh": "弄清楚",
        "py": "nòng qīngchu",
        "vn": "làm cho rõ"
      },
      {
        "zh": "弄脏了",
        "py": "nòng zāng le",
        "vn": "làm bẩn rồi"
      },
      {
        "zh": "弄得心情不好",
        "py": "nòng de xīnqíng bù hǎo",
        "vn": "làm cho tâm trạng xấu đi"
      },
      {
        "zh": "别乱弄",
        "py": "bié luàn nòng",
        "vn": "đừng nghịch bừa"
      }
    ],
    "patterns": [
      {
        "s": "弄 + bổ ngữ kết quả",
        "m": "弄坏, 弄脏 (bài 14), 弄清楚"
      },
      {
        "s": "弄 thay được cho nhiều động từ cụ thể trong khẩu ngữ"
      }
    ]
  },
  {
    "n": 13,
    "zh": "管理",
    "py": "guǎnlǐ",
    "pos": "Động từ",
    "vn": "quản lý",
    "hv": "quản lý",
    "em": "📋",
    "lesson": 2,
    "explain": [
      "Sắp xếp, điều hành (thời gian, công ty, con người). 管理时间, 管理公司."
    ],
    "usage": "管理时间, 学会管理, 管理公司.",
    "collo": [
      "学会管理时间",
      "管理公司",
      "管理专业"
    ],
    "ex_zh": "孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。",
    "ex_py": "Háizi zuò shì màn, wǎngwǎng shì yīnwèi tāmen bú huì ānpái zìjǐ de shíjiān. Nǐ yīnggāi ràng háizi xuéhuì guǎnlǐ shíjiān.",
    "ex_vn": "Trẻ làm việc chậm thường vì chúng không biết sắp xếp thời gian. Bạn nên để con học cách quản lý thời gian.",
    "exList": [
      {
        "zh": "孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。",
        "py": "Háizi zuò shì màn, wǎngwǎng shì yīnwèi tāmen bú huì ānpái zìjǐ de shíjiān. Nǐ yīnggāi ràng háizi xuéhuì guǎnlǐ shíjiān.",
        "vn": "Trẻ làm việc chậm thường vì chúng không biết sắp xếp thời gian. Bạn nên để con học cách quản lý thời gian."
      },
      {
        "zh": "这个招聘会主要是为经济和管理专业的学生举办的，所以没几个合适的。",
        "py": "Zhège zhāopìnhuì zhǔyào shì wèi jīngjì hé guǎnlǐ zhuānyè de xuésheng jǔbàn de, suǒyǐ méi jǐ ge héshì de.",
        "vn": "Hội chợ tuyển dụng này chủ yếu tổ chức cho sinh viên ngành kinh tế và quản lý, nên không có mấy chỗ phù hợp."
      },
      {
        "zh": "他毕业后进了一家公司，现在已经管理一个二十人的部门了。",
        "py": "Tā bìyè hòu jìnle yì jiā gōngsī, xiànzài yǐjīng guǎnlǐ yí ge èrshí rén de bùmén le.",
        "vn": "Sau khi tốt nghiệp anh ấy vào một công ty, giờ đã quản lý một bộ phận hai mươi người."
      }
    ],
    "hanzi": [
      {
        "c": "管",
        "p": "guǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 14,
        "ord": "⺮ trên → 官 dưới",
        "rad": "⺮ (trúc)",
        "mean": "ống; quản",
        "tip": "Trúc ⺮ + 官(quan) → ống trúc; quan cầm ống → QUẢN LÝ. 不管 (Bài 3) = bất kể.",
        "cf": "官 (guān – quan)",
        "w": "管理 / 不管 / 管"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn nên để con học cách quản lý thời gian, vì tự quản được thì mới tiến bộ.",
        "answer": "你应该让孩子学会管理时间，因为只有自己管好，他才会进步。",
        "answerPy": "Nǐ yīnggāi ràng háizi xuéhuì guǎnlǐ shíjiān, yīnwèi zhǐyǒu zìjǐ guǎn hǎo, tā cái huì jìnbù.",
        "note": "让 + ai + V — câu kiêm ngữ.",
        "pair": "只有……才……"
      }
    ],
    "colloFull": [
      {
        "zh": "管理时间",
        "py": "guǎnlǐ shíjiān",
        "vn": "quản lý thời gian"
      },
      {
        "zh": "管理公司",
        "py": "guǎnlǐ gōngsī",
        "vn": "quản lý công ty"
      },
      {
        "zh": "管理专业",
        "py": "guǎnlǐ zhuānyè",
        "vn": "chuyên ngành quản trị"
      },
      {
        "zh": "学会管理",
        "py": "xué huì guǎnlǐ",
        "vn": "học cách quản lý"
      },
      {
        "zh": "管理得很好",
        "py": "guǎnlǐ de hěn hǎo",
        "vn": "quản lý rất tốt"
      }
    ],
    "patterns": [
      {
        "s": "管理 + N",
        "m": "Quản lý cái gì"
      },
      {
        "s": "学会 + 管理 + 时间",
        "m": "Học cách quản lý thời gian"
      }
    ]
  },
  {
    "n": 14,
    "zh": "打针",
    "py": "dǎ zhēn",
    "pos": "Động từ",
    "vn": "tiêm, chích",
    "hv": "đả châm",
    "em": "💉",
    "lesson": 3,
    "explain": [
      "Tiêm thuốc. Động từ ly hợp: 打了一针, 打过针. 怕打针 = sợ tiêm."
    ],
    "usage": "去医院打针, 怕打针, 打了一针.",
    "collo": [
      "去医院打针",
      "害怕打针",
      "不怕打针"
    ],
    "ex_zh": "明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。",
    "ex_py": "Míngtiān yòu yào dài wǒ érzi qù yīyuàn dǎ zhēn, xiǎngxiang wǒ jiù tóu téng. Tā jiù pà dǎ zhēn, měi cì dǎ zhēn dōu kū de tèbié lìhai.",
    "ex_vn": "Mai lại phải đưa con trai đi bệnh viện tiêm, nghĩ đến là tôi đau đầu. Nó sợ nhất là tiêm, lần nào tiêm cũng khóc dữ dội.",
    "exList": [
      {
        "zh": "明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。",
        "py": "Míngtiān yòu yào dài wǒ érzi qù yīyuàn dǎ zhēn, xiǎngxiang wǒ jiù tóu téng. Tā jiù pà dǎ zhēn, měi cì dǎ zhēn dōu kū de tèbié lìhai.",
        "vn": "Mai lại phải đưa con trai đi bệnh viện tiêm, nghĩ đến là tôi đau đầu. Nó sợ nhất là tiêm, lần nào tiêm cũng khóc dữ dội."
      },
      {
        "zh": "我就小声地和护士说我女儿很勇敢，一点儿也不怕打针，女儿听了以后马上就不哭了。",
        "py": "Wǒ jiù xiǎoshēng de hé hùshi shuō wǒ nǚ'ér hěn yǒnggǎn, yìdiǎnr yě bú pà dǎ zhēn, nǚ'ér tīngle yǐhòu mǎshàng jiù bù kū le.",
        "vn": "Tôi khẽ nói với y tá rằng con gái tôi rất dũng cảm, không sợ tiêm chút nào, con gái nghe xong lập tức nín khóc."
      },
      {
        "zh": "爸爸说我小时候特别害怕打针，一看见医生就哭。",
        "py": "Bàba shuō wǒ xiǎoshíhou tèbié hàipà dǎ zhēn, yí kànjiàn yīshēng jiù kū.",
        "vn": "Bố nói hồi nhỏ tôi rất sợ tiêm, vừa thấy bác sĩ là khóc."
      }
    ],
    "hanzi": [
      {
        "c": "针",
        "p": "zhēn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "钅 trái → 十 phải",
        "rad": "钅 (kim)",
        "mean": "kim",
        "tip": "Kim loại 钅 + 十 (hình cây kim) → KIM. 打针 = đánh kim = tiêm.",
        "cf": "什 (shí – gì)",
        "w": "打针 / 针 / 方针"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bố nói hồi nhỏ tôi rất sợ tiêm, vừa thấy bác sĩ là khóc.",
        "answer": "爸爸说我小时候特别害怕打针，一看见医生就哭。",
        "answerPy": "Bàba shuō wǒ xiǎoshíhou tèbié hàipà dǎ zhēn, yí kànjiàn yīshēng jiù kū.",
        "note": "一……就 (Bài 2), 害怕 (Bài 9).",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "去医院打针",
        "py": "qù yīyuàn dǎ zhēn",
        "vn": "đến bệnh viện tiêm"
      },
      {
        "zh": "害怕打针",
        "py": "hàipà dǎ zhēn",
        "vn": "sợ tiêm"
      },
      {
        "zh": "不怕打针",
        "py": "bú pà dǎ zhēn",
        "vn": "không sợ tiêm"
      },
      {
        "zh": "打了一针",
        "py": "dǎ le yì zhēn",
        "vn": "tiêm một mũi"
      },
      {
        "zh": "给孩子打针",
        "py": "gěi háizi dǎ zhēn",
        "vn": "tiêm cho trẻ"
      }
    ],
    "patterns": [
      {
        "s": "打 + 了 + số + 针",
        "m": "打针 là từ ly hợp: 打了一针 ✓"
      },
      {
        "s": "害怕 + 打针",
        "m": "Sợ tiêm"
      }
    ]
  },
  {
    "n": 15,
    "zh": "护士",
    "py": "hùshi",
    "pos": "Danh từ",
    "vn": "y tá",
    "hv": "hộ sĩ",
    "em": "👩‍⚕️",
    "lesson": 3,
    "explain": [
      "Người chăm sóc bệnh nhân trong bệnh viện. 护 còn trong 护照 (Bài 4), 保护 (Bài 12)."
    ],
    "usage": "一位护士, 和护士说, 当护士.",
    "collo": [
      "和护士说",
      "一名护士",
      "护士和医生"
    ],
    "ex_zh": "我就小声地和护士说我女儿很勇敢。",
    "ex_py": "Wǒ jiù xiǎoshēng de hé hùshi shuō wǒ nǚ'ér hěn yǒnggǎn.",
    "ex_vn": "Tôi khẽ nói với y tá rằng con gái tôi rất dũng cảm.",
    "exList": [
      {
        "zh": "我就小声地和护士说我女儿很勇敢，一点儿也不怕打针。",
        "py": "Wǒ jiù xiǎoshēng de hé hùshi shuō wǒ nǚ'ér hěn yǒnggǎn, yìdiǎnr yě bú pà dǎ zhēn.",
        "vn": "Tôi khẽ nói với y tá rằng con gái tôi rất dũng cảm, không sợ tiêm chút nào."
      },
      {
        "zh": "这本小说的作者是医院的一位护士，她通过小说告诉我们发生在医院里的许多有趣的故事。",
        "py": "Zhè běn xiǎoshuō de zuòzhě shì yīyuàn de yí wèi hùshi, tā tōngguò xiǎoshuō gàosu wǒmen fāshēng zài yīyuàn li de xǔduō yǒuqù de gùshi.",
        "vn": "Tác giả cuốn tiểu thuyết này là một y tá bệnh viện, qua tiểu thuyết cô kể cho chúng ta nhiều chuyện thú vị xảy ra trong bệnh viện."
      },
      {
        "zh": "他怎么都没想到，我长大后竟然会成为一名护士。",
        "py": "Tā zěnme dōu méi xiǎngdào, wǒ zhǎngdà hòu jìngrán huì chéngwéi yì míng hùshi.",
        "vn": "Ông không thể ngờ, tôi lớn lên lại trở thành một y tá."
      }
    ],
    "hanzi": [
      {
        "c": "护",
        "p": "hù",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "扌 trái → 户 phải",
        "rad": "扌 (thủ)",
        "mean": "bảo vệ",
        "tip": "Tay 扌 + 户(cửa) → tay giữ cửa → BẢO VỆ, HỘ. 护士 = người hộ lý = y tá; 护照 = hộ chiếu; 保护 = bảo hộ.",
        "cf": "户 (hù – hộ, cửa)",
        "w": "护士 / 护照 / 保护"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông cứ tưởng lớn lên tôi sẽ làm giáo viên, ai ngờ tôi lại trở thành y tá.",
        "answer": "他以为我长大后会当老师，没想到我竟然成为了一名护士。",
        "answerPy": "Tā yǐwéi wǒ zhǎngdà hòu huì dāng lǎoshī, méi xiǎngdào wǒ jìngrán chéngwéile yì míng hùshi.",
        "note": "成为 là từ bài 8, 竟然 là từ bài 6.",
        "pair": "以为……没想到……"
      }
    ],
    "colloFull": [
      {
        "zh": "一名护士",
        "py": "yì míng hùshi",
        "vn": "một y tá"
      },
      {
        "zh": "护士和医生",
        "py": "hùshi hé yīshēng",
        "vn": "y tá và bác sĩ"
      },
      {
        "zh": "当护士",
        "py": "dāng hùshi",
        "vn": "làm y tá"
      },
      {
        "zh": "成为护士",
        "py": "chéngwéi hùshi",
        "vn": "trở thành y tá"
      },
      {
        "zh": "和护士说",
        "py": "hé hùshi shuō",
        "vn": "nói với y tá"
      }
    ],
    "patterns": [
      {
        "s": "một + 名 + 护士",
        "m": "Lượng từ 名 cho người có nghề nghiệp"
      },
      {
        "s": "当 / 成为 + 护士",
        "m": "Làm / trở thành y tá — 成为 là từ bài 8"
      }
    ]
  },
  {
    "n": 16,
    "zh": "表扬",
    "py": "biǎoyáng",
    "pos": "Động từ",
    "vn": "khen ngợi, biểu dương",
    "hv": "biểu dương",
    "em": "🌟",
    "lesson": 3,
    "explain": [
      "Khen ngợi công khai. Trái nghĩa: 批评. 受到表扬 = được khen. Cũng làm danh từ: 过多的表扬."
    ],
    "usage": "表扬孩子, 受到表扬, 表扬要及时.",
    "collo": [
      "鼓励和表扬",
      "受到表扬",
      "过多的表扬"
    ],
    "ex_zh": "原来鼓励和表扬对小孩儿挺有用的，下次我也试试。",
    "ex_py": "Yuánlái gǔlì hé biǎoyáng duì xiǎoháir tǐng yǒuyòng de, xià cì wǒ yě shìshi.",
    "ex_vn": "Hóa ra khuyến khích và khen ngợi khá có ích với trẻ nhỏ, lần sau tôi cũng thử.",
    "exList": [
      {
        "zh": "原来鼓励和表扬对小孩儿挺有用的，下次我也试试。",
        "py": "Yuánlái gǔlì hé biǎoyáng duì xiǎoháir tǐng yǒuyòng de, xià cì wǒ yě shìshi.",
        "vn": "Hóa ra khuyến khích và khen ngợi khá có ích với trẻ nhỏ, lần sau tôi cũng thử."
      },
      {
        "zh": "不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。",
        "py": "Búguò biǎoyáng yě shì yì mén yìshù, biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì.",
        "vn": "Nhưng khen ngợi cũng là một nghệ thuật, khen tuyệt đối đừng quá nhiều, khen quá nhiều có thể mang lại áp lực cho trẻ."
      },
      {
        "zh": "孩子在受到表扬时，往往会对自己更有信心，对学习的兴趣也会更大，成绩当然会提高。",
        "py": "Háizi zài shòudào biǎoyáng shí, wǎngwǎng huì duì zìjǐ gèng yǒu xìnxīn, duì xuéxí de xìngqù yě huì gèng dà, chéngjì dāngrán huì tígāo.",
        "vn": "Khi được khen, trẻ thường tự tin hơn, hứng thú học tập cũng lớn hơn, thành tích đương nhiên nâng cao."
      }
    ],
    "hanzi": [
      {
        "c": "扬",
        "p": "yáng",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "扌 trái → 𠃓 phải",
        "rad": "扌 (thủ)",
        "mean": "giương lên",
        "tip": "Tay 扌 + 𠃓 → giơ tay GIƯƠNG lên → biểu DƯƠNG, khen. 表扬 = biểu dương.",
        "cf": "场 (chǎng – sân)",
        "w": "表扬 / 扬州"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hoá ra động viên và khen ngợi khá có ích với trẻ, nên lần sau tôi cũng thử xem.",
        "answer": "原来鼓励和表扬对小孩儿挺有用的，所以下次我也试试。",
        "answerPy": "Yuánlái gǔlì hé biǎoyáng duì xiǎoháir tǐng yǒuyòng de, suǒyǐ xià cì wǒ yě shìshi.",
        "note": "原来 là từ bài 4, 鼓励 là từ bài 14.",
        "pair": "因为……所以……"
      },
      {
        "promptLang": "vi",
        "prompt": "Trẻ càng được khen thì càng tự tin và càng hứng thú với việc học.",
        "answer": "孩子受到的表扬越多，就越对自己有信心，对学习的兴趣也越大。",
        "answerPy": "Háizi shòudào de biǎoyáng yuè duō, jiù yuè duì zìjǐ yǒu xìnxīn, duì xuéxí de xìngqù yě yuè dà.",
        "note": "信心 là từ bài 3 — 对自己有信心.",
        "pair": "越……越……"
      }
    ],
    "colloFull": [
      {
        "zh": "受到表扬",
        "py": "shòudào biǎoyáng",
        "vn": "được khen"
      },
      {
        "zh": "表扬孩子",
        "py": "biǎoyáng háizi",
        "vn": "khen con"
      },
      {
        "zh": "鼓励和表扬",
        "py": "gǔlì hé biǎoyáng",
        "vn": "động viên và khen ngợi"
      },
      {
        "zh": "过多的表扬",
        "py": "guo duō de biǎoyáng",
        "vn": "khen quá nhiều"
      },
      {
        "zh": "表扬了他",
        "py": "biǎoyáng le tā",
        "vn": "đã khen anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "表扬 + ai (động từ)",
        "m": "Khen ngợi ai"
      },
      {
        "s": "受到 + 表扬 (danh từ)",
        "m": "Được khen — 受到 là từ bài 5"
      }
    ]
  },
  {
    "n": 17,
    "zh": "千万",
    "py": "qiānwàn",
    "pos": "Phó từ",
    "vn": "nhất thiết phải, tuyệt đối",
    "hv": "thiên vạn",
    "em": "⚠️",
    "lesson": 3,
    "explain": [
      "Nhấn mạnh dặn dò (务必, 一定), thường đi với phủ định: 千万别, 千万不要, 千万不能. Ngữ pháp trọng tâm."
    ],
    "usage": "千万别……, 千万不要……, 千万不能……",
    "collo": [
      "千万不要太多",
      "千万别告诉她",
      "千万别喝酒"
    ],
    "ex_zh": "不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。",
    "ex_py": "Búguò biǎoyáng yě shì yì mén yìshù, biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì.",
    "ex_vn": "Nhưng khen ngợi cũng là một nghệ thuật, khen tuyệt đối đừng quá nhiều, khen quá nhiều có thể mang lại áp lực cho trẻ.",
    "exList": [
      {
        "zh": "不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。",
        "py": "Búguò biǎoyáng yě shì yì mén yìshù, biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì.",
        "vn": "Nhưng khen ngợi cũng là một nghệ thuật, khen tuyệt đối đừng quá nhiều, khen quá nhiều có thể mang lại áp lực cho trẻ."
      },
      {
        "zh": "我要等她生日那天再送给她这个礼物，你现在千万别告诉她。",
        "py": "Wǒ yào děng tā shēngrì nà tiān zài sònggěi tā zhège lǐwù, nǐ xiànzài qiānwàn bié gàosu tā.",
        "vn": "Tôi muốn đợi đến sinh nhật cô ấy mới tặng món quà này, bây giờ bạn tuyệt đối đừng nói cho cô ấy."
      },
      {
        "zh": "每个人都应该记住这句话：\"开车千万别喝酒，喝酒千万别开车。\"",
        "py": "Měi ge rén dōu yīnggāi jìzhu zhè jù huà: \"Kāi chē qiānwàn bié hē jiǔ, hē jiǔ qiānwàn bié kāi chē.\"",
        "vn": "Mỗi người đều nên nhớ câu này: \"Lái xe tuyệt đối đừng uống rượu, uống rượu tuyệt đối đừng lái xe.\""
      }
    ],
    "hanzi": [
      {
        "c": "万",
        "p": "wàn",
        "type": "独体字 · Chữ đơn thể",
        "st": 3,
        "ord": "一 → 𠃌 → 丿",
        "rad": "一 (nhất)",
        "mean": "vạn",
        "tip": "Giản thể của 萬 (con bọ cạp) → số VẠN (10.000). 千万 = nghìn vạn → rất nhiều → nhấn mạnh \"nhất định\".",
        "cf": "方 (fāng – vuông, 4 nét)",
        "w": "千万 / 万 / 万一"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bây giờ bạn tuyệt đối đừng nói cho cô ấy, nếu không cô ấy sẽ buồn lắm.",
        "answer": "你现在千万别告诉她，不然她会很伤心的。",
        "answerPy": "Nǐ xiànzài qiānwàn bié gàosu tā, bùrán tā huì hěn shāngxīn de.",
        "note": "伤心 là từ bài 8; 千万 hầu như chỉ dùng trong lời dặn phủ định.",
        "pair": "不然……"
      },
      {
        "promptLang": "vi",
        "prompt": "Có những việc phải kiên trì mới thấy hy vọng, cho nên bạn tuyệt đối đừng bỏ cuộc.",
        "answer": "有些事情只有坚持了，才会看到希望，所以你千万不要放弃。",
        "answerPy": "Yǒuxiē shìqing zhǐyǒu jiānchí le, cái huì kàndào xīwàng, suǒyǐ nǐ qiānwàn búyào fàngqì.",
        "note": "坚持 và 放弃 đều là từ bài 9 — cặp trái nghĩa.",
        "pair": "只有……才……"
      }
    ],
    "colloFull": [
      {
        "zh": "千万别",
        "py": "qiānwàn bié",
        "vn": "tuyệt đối đừng"
      },
      {
        "zh": "千万不要",
        "py": "qiānwàn búyào",
        "vn": "nhất thiết đừng"
      },
      {
        "zh": "千万小心",
        "py": "qiānwàn xiǎoxīn",
        "vn": "nhất định phải cẩn thận"
      },
      {
        "zh": "千万记住",
        "py": "qiānwàn jì zhù",
        "vn": "nhớ cho kỹ"
      },
      {
        "zh": "千万别告诉她",
        "py": "qiānwàn bié gàosu tā",
        "vn": "tuyệt đối đừng nói cho cô ấy"
      }
    ],
    "patterns": [
      {
        "s": "千万 + 别 / 不要 + V",
        "m": "Tuyệt đối đừng làm gì — lời dặn khẩn thiết"
      },
      {
        "s": "✗ 千万去吧 → ✓ 千万别去",
        "m": "千万 hầu như chỉ dùng trong câu phủ định, dặn dò"
      }
    ]
  },
  {
    "n": 18,
    "zh": "怀疑",
    "py": "huáiyí",
    "pos": "Động từ",
    "vn": "nghi ngờ, hoài nghi",
    "hv": "hoài nghi",
    "em": "🤔",
    "lesson": 3,
    "explain": [
      "Không tin, ngờ vực. 怀疑自己的能力 = nghi ngờ năng lực bản thân. 毫不怀疑 = không chút nghi ngờ."
    ],
    "usage": "怀疑自己, 怀疑……的能力, 让人怀疑.",
    "collo": [
      "怀疑自己的能力",
      "让孩子怀疑",
      "不要怀疑"
    ],
    "ex_zh": "不仅起不到鼓励的作用，还可能让孩子怀疑自己的能力，变得没有信心。",
    "ex_py": "Bùjǐn qǐbudào gǔlì de zuòyòng, hái kěnéng ràng háizi huáiyí zìjǐ de nénglì, biàn de méiyǒu xìnxīn.",
    "ex_vn": "Không những không có tác dụng khuyến khích, còn có thể khiến trẻ nghi ngờ năng lực bản thân, trở nên thiếu tự tin.",
    "exList": [
      {
        "zh": "不仅起不到鼓励的作用，还可能让孩子怀疑自己的能力，变得没有信心。",
        "py": "Bùjǐn qǐbudào gǔlì de zuòyòng, hái kěnéng ràng háizi huáiyí zìjǐ de nénglì, biàn de méiyǒu xìnxīn.",
        "vn": "Không những không có tác dụng khuyến khích, còn có thể khiến trẻ nghi ngờ năng lực bản thân, trở nên thiếu tự tin."
      },
      {
        "zh": "失败的时候不要怀疑自己，坚持下去就一定能成功。",
        "py": "Shībài de shíhou búyào huáiyí zìjǐ, jiānchí xiàqu jiù yídìng néng chénggōng.",
        "vn": "Lúc thất bại đừng nghi ngờ bản thân, kiên trì tiếp thì nhất định thành công."
      },
      {
        "zh": "他说的话前后不一样，我有点儿怀疑他在骗我们。",
        "py": "Tā shuō de huà qiánhòu bù yíyàng, wǒ yǒudiǎnr huáiyí tā zài piàn wǒmen.",
        "vn": "Lời anh ấy nói trước sau không giống nhau, tôi hơi nghi anh ấy đang lừa chúng ta."
      }
    ],
    "hanzi": [
      {
        "c": "疑",
        "p": "yí",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "匕矢 trái → 龴疋 phải",
        "rad": "疋 (thất)",
        "mean": "nghi",
        "tip": "Hình người chống gậy ngoái nhìn, do dự không biết đi đâu → NGHI NGỜ. 怀疑 = ôm mối nghi trong lòng.",
        "cf": "凝 (níng – đông lại)",
        "w": "怀疑 / 疑问"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lúc thất bại đừng nghi ngờ bản thân, chỉ cần kiên trì là nhất định sẽ thành công.",
        "answer": "失败的时候不要怀疑自己，只要坚持下去，就一定能成功。",
        "answerPy": "Shībài de shíhou búyào huáiyí zìjǐ, zhǐyào jiānchí xiàqu, jiù yídìng néng chénggōng.",
        "note": "失败 là từ bài 9; 坚持下去 — bổ ngữ xu hướng 下去.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "怀疑自己",
        "py": "huáiyí zìjǐ",
        "vn": "nghi ngờ bản thân"
      },
      {
        "zh": "怀疑自己的能力",
        "py": "huáiyí zìjǐ de nénglì",
        "vn": "nghi ngờ năng lực mình"
      },
      {
        "zh": "不要怀疑",
        "py": "búyào huáiyí",
        "vn": "đừng nghi ngờ"
      },
      {
        "zh": "让人怀疑",
        "py": "ràng rén huáiyí",
        "vn": "khiến người ta nghi ngờ"
      },
      {
        "zh": "怀疑他说的话",
        "py": "huáiyí tā shuō de huà",
        "vn": "nghi lời anh ta nói"
      }
    ],
    "patterns": [
      {
        "s": "怀疑 + N / mệnh đề",
        "m": "Nghi ngờ cái gì / rằng…"
      },
      {
        "s": "怀疑 ↔ 相信",
        "m": "Nghi ngờ ↔ tin tưởng"
      }
    ]
  },
  {
    "n": 19,
    "zh": "故意",
    "py": "gùyì",
    "pos": "Phó từ",
    "vn": "cố tình, cố ý",
    "hv": "cố ý",
    "em": "😈",
    "lesson": 4,
    "explain": [
      "Làm có chủ ý, cố tình. 故意敲打, 故意迟到, 不是故意的."
    ],
    "usage": "故意敲打, 不是故意的, 故意不说.",
    "collo": [
      "故意敲打",
      "不是故意的",
      "故意让他生气"
    ],
    "ex_zh": "有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。",
    "ex_py": "Yǒude háizi zài débudào zìjǐ xiǎng yào de dōngxi de shíhou, huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì.",
    "ex_vn": "Có đứa trẻ khi không được thứ mình muốn, sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ.",
    "exList": [
      {
        "zh": "有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。",
        "py": "Yǒude háizi zài débudào zìjǐ xiǎng yào de dōngxi de shíhou, huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì.",
        "vn": "Có đứa trẻ khi không được thứ mình muốn, sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ."
      },
      {
        "zh": "A：因为那件事，她特别生我的气。B：放心吧，你也不是故意的，去跟她解释一下，她会理解的。",
        "py": "A: Yīnwèi nà jiàn shì, tā tèbié shēng wǒ de qì. B: Fàng xīn ba, nǐ yě bú shì gùyì de, qù gēn tā jiěshì yíxià, tā huì lǐjiě de.",
        "vn": "A: Vì chuyện đó, cô ấy rất giận tôi. B: Yên tâm, bạn cũng đâu cố ý, đi giải thích với cô ấy, cô ấy sẽ hiểu."
      },
      {
        "zh": "他故意把闹钟定早了半个小时，以免迟到。",
        "py": "Tā gùyì bǎ nàozhōng dìng zǎole bàn ge xiǎoshí, yǐmiǎn chídào.",
        "vn": "Anh ấy cố tình đặt báo thức sớm nửa tiếng, để khỏi đi muộn."
      }
    ],
    "hanzi": [
      {
        "c": "故",
        "p": "gù",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "古 trái → 攵 phải",
        "rad": "攵 (phộc)",
        "mean": "cũ; cố",
        "tip": "古(xưa) + 攵(đánh) → nguyên cớ xưa → CỐ (nguyên nhân, cũ). 故意 = có ý từ trước; 故事 = chuyện xưa.",
        "cf": "做 (zuò – làm)",
        "w": "故意 / 故事 / 故乡"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Yên tâm đi, bạn đâu có cố ý; chỉ cần đi giải thích với cô ấy là cô ấy sẽ hiểu thôi.",
        "answer": "放心吧，你也不是故意的，只要去跟她解释一下，她就会理解的。",
        "answerPy": "Fàngxīn ba, nǐ yě bú shì gùyì de, zhǐyào qù gēn tā jiěshì yíxià, tā jiù huì lǐjiě de.",
        "note": "解释 là từ bài 12, 理解 là từ bài 2 — hai từ dễ nhầm.",
        "pair": "只要……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "不是故意的",
        "py": "bú shì gùyì de",
        "vn": "không phải cố ý"
      },
      {
        "zh": "故意让他生气",
        "py": "gùyì ràng tā shēngqì",
        "vn": "cố tình chọc anh ấy giận"
      },
      {
        "zh": "故意敲打",
        "py": "gùyì qiāo dǎ",
        "vn": "cố tình gõ"
      },
      {
        "zh": "故意不说",
        "py": "gùyì bù shuō",
        "vn": "cố tình không nói"
      },
      {
        "zh": "故意的",
        "py": "gùyì de",
        "vn": "cố ý đấy"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 故意 + V",
        "m": "Ai đó cố tình làm gì"
      },
      {
        "s": "不是故意的",
        "m": "Không phải cố ý — câu xin lỗi thường dùng"
      }
    ]
  },
  {
    "n": 20,
    "zh": "敲",
    "py": "qiāo",
    "pos": "Động từ",
    "vn": "gõ, khua",
    "hv": "xao",
    "em": "🚪",
    "lesson": 4,
    "explain": [
      "Gõ (cửa), đập. 敲门 = gõ cửa; 敲打 = gõ đập."
    ],
    "usage": "敲门, 敲打, 敲桌子.",
    "collo": [
      "敲门",
      "故意敲打",
      "敲了三下"
    ],
    "ex_zh": "会通过哭、扔东西或者故意敲打来引起父母的注意。",
    "ex_py": "Huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì.",
    "ex_vn": "Sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ.",
    "exList": [
      {
        "zh": "会通过哭、扔东西或者故意敲打来引起父母的注意。",
        "py": "Huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì.",
        "vn": "Sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ."
      },
      {
        "zh": "进别人的房间之前，应该先敲门，这是最基本的礼貌。",
        "py": "Jìn biérén de fángjiān zhīqián, yīnggāi xiān qiāo mén, zhè shì zuì jīběn de lǐmào.",
        "vn": "Trước khi vào phòng người khác nên gõ cửa trước, đây là phép lịch sự cơ bản nhất."
      },
      {
        "zh": "有人在敲门，你去开一下吧。",
        "py": "Yǒu rén zài qiāo mén, nǐ qù kāi yíxià ba.",
        "vn": "Có người đang gõ cửa, bạn ra mở đi."
      }
    ],
    "hanzi": [
      {
        "c": "敲",
        "p": "qiāo",
        "type": "左右结构 · Trái-phải",
        "st": 14,
        "ord": "高 trái → 攴 phải",
        "rad": "攴 (phộc)",
        "mean": "gõ",
        "tip": "高(cao) + 攴(tay cầm gậy đánh) → giơ cao tay GÕ. Chú ý bên phải là 攴, không phải 攵.",
        "cf": "高 (gāo – cao)",
        "w": "敲 / 敲门 / 敲打"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi vào phòng người khác thì phải gõ cửa, vì đó là phép lịch sự cơ bản nhất.",
        "answer": "进别人的房间之前应该先敲门，因为这是最基本的礼貌。",
        "answerPy": "Jìn biéren de fángjiān zhīqián yīnggāi xiān qiāo mén, yīnwèi zhè shì zuì jīběn de lǐmào.",
        "note": "敲门 — 敲 + 了 + số + 下 khi đếm số cái gõ.",
        "pair": "因为……"
      }
    ],
    "colloFull": [
      {
        "zh": "敲门",
        "py": "qiāo mén",
        "vn": "gõ cửa"
      },
      {
        "zh": "敲了三下",
        "py": "qiāo le sān xià",
        "vn": "gõ ba cái"
      },
      {
        "zh": "故意敲打",
        "py": "gùyì qiāo dǎ",
        "vn": "cố tình gõ"
      },
      {
        "zh": "轻轻地敲",
        "py": "qīngqīng de qiāo",
        "vn": "gõ khẽ"
      },
      {
        "zh": "有人敲门",
        "py": "yǒu rén qiāo mén",
        "vn": "có người gõ cửa"
      }
    ],
    "patterns": [
      {
        "s": "敲 + 门",
        "m": "Gõ cửa"
      },
      {
        "s": "敲 + 了 + số + 下",
        "m": "Gõ mấy cái — 下 là lượng từ động tác"
      }
    ]
  },
  {
    "n": 21,
    "zh": "整理",
    "py": "zhěnglǐ",
    "pos": "Động từ",
    "vn": "thu dọn, dọn dẹp, sắp xếp",
    "hv": "chỉnh lý",
    "em": "🧺",
    "lesson": 4,
    "explain": [
      "Sắp xếp cho gọn gàng: 整理东西, 整理房间, 整理材料 (tài liệu)."
    ],
    "usage": "整理东西, 整理房间, 整理材料.",
    "collo": [
      "整理整理东西",
      "整理房间",
      "整理材料"
    ],
    "ex_zh": "建议父母先不要生气，应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。",
    "ex_py": "Jiànyì fùmǔ xiān búyào shēng qì, yīnggāi tíngxià shǒu zhōng de shìqing, péi háizi zhěnglǐ zhěnglǐ dōngxi, hé tāmen liáoliao tiānr, nòng qīngchu tāmen de wèntí.",
    "ex_vn": "Khuyên cha mẹ trước hết đừng nổi giận, nên dừng việc đang làm, cùng con dọn dẹp đồ đạc, trò chuyện với con, làm rõ vấn đề của con.",
    "exList": [
      {
        "zh": "应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。",
        "py": "Yīnggāi tíngxià shǒu zhōng de shìqing, péi háizi zhěnglǐ zhěnglǐ dōngxi, hé tāmen liáoliao tiānr, nòng qīngchu tāmen de wèntí.",
        "vn": "Nên dừng việc đang làm, cùng con dọn dẹp đồ đạc, trò chuyện với con, làm rõ vấn đề của con."
      },
      {
        "zh": "这些只有三分之一吧，还有很多东西没来得及整理呢，下周再搬。",
        "py": "Zhèxiē zhǐyǒu sānfēnzhī yī ba, hái yǒu hěn duō dōngxi méi láidejí zhěnglǐ ne, xià zhōu zài bān.",
        "vn": "Chỗ này chỉ khoảng một phần ba, còn nhiều đồ chưa kịp dọn, tuần sau chuyển tiếp."
      },
      {
        "zh": "回国后，他用一年的时间整理材料，于是就有了这本关于亚洲美食的书。",
        "py": "Huí guó hòu, tā yòng yì nián de shíjiān zhěnglǐ cáiliào, yúshì jiù yǒule zhè běn guānyú Yàzhōu měishí de shū.",
        "vn": "Về nước, anh dùng một năm sắp xếp tài liệu, thế là có cuốn sách về ẩm thực châu Á này."
      }
    ],
    "hanzi": [
      {
        "c": "整",
        "p": "zhěng",
        "type": "上下结构 · Trên-dưới",
        "st": 16,
        "ord": "敕 trên → 正 dưới",
        "rad": "攵 (phộc)",
        "mean": "chỉnh",
        "tip": "束(bó) + 攵(đánh) + 正(ngay ngắn) → bó lại cho NGAY NGẮN → CHỈNH, dọn. 整理 = chỉnh lý.",
        "cf": "正 (zhèng – ngay)",
        "w": "整理 / 整齐 / 整个"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỗ này chỉ khoảng một phần ba, còn nhiều đồ chưa kịp dọn, tuần sau chuyển tiếp.",
        "answer": "这些只有三分之一吧，还有很多东西没来得及整理呢，下周再搬。",
        "answerPy": "Zhèxiē zhǐyǒu sānfēnzhī yī ba, hái yǒu hěn duō dōngxi méi láidejí zhěnglǐ ne, xià zhōu zài bān.",
        "note": "分之 (Bài 6), 来得及 (Bài 4).",
        "pair": "只有……"
      }
    ],
    "colloFull": [
      {
        "zh": "整理房间",
        "py": "zhěnglǐ fángjiān",
        "vn": "dọn phòng"
      },
      {
        "zh": "整理材料",
        "py": "zhěnglǐ cáiliào",
        "vn": "sắp xếp tài liệu"
      },
      {
        "zh": "整理东西",
        "py": "zhěnglǐ dōngxi",
        "vn": "dọn đồ"
      },
      {
        "zh": "整理整理",
        "py": "zhěnglǐ zhěnglǐ",
        "vn": "dọn dẹp một chút"
      },
      {
        "zh": "整理得很干净",
        "py": "zhěnglǐ de hěn gānjìng",
        "vn": "dọn rất sạch"
      }
    ],
    "patterns": [
      {
        "s": "整理 + N",
        "m": "Dọn dẹp, sắp xếp cái gì"
      },
      {
        "s": "整理整理",
        "m": "Dạng lặp ABAB — làm nhẹ đi, thân mật hơn"
      }
    ]
  },
  {
    "n": 22,
    "zh": "合适",
    "py": "héshì",
    "pos": "Tính từ",
    "vn": "thích hợp",
    "hv": "hợp thích",
    "em": "✅",
    "lesson": 4,
    "explain": [
      "Phù hợp với yêu cầu/tình huống. 合适的方法, 合适的公司. Phân biệt 适合 (động từ, Bài 8): 适合我 / 对我很合适."
    ],
    "usage": "合适的教育方法, 找到合适的公司, 很合适.",
    "collo": [
      "合适的教育方法",
      "合适的公司",
      "不太合适"
    ],
    "ex_zh": "教育孩子应该选择合适的教育方法。",
    "ex_py": "Jiàoyù háizi yīnggāi xuǎnzé héshì de jiàoyù fāngfǎ.",
    "ex_vn": "Giáo dục con cái nên chọn phương pháp giáo dục thích hợp.",
    "exList": [
      {
        "zh": "教育孩子应该选择合适的教育方法，最好不要为了解决问题而骗孩子。",
        "py": "Jiàoyù háizi yīnggāi xuǎnzé héshì de jiàoyù fāngfǎ, zuìhǎo búyào wèile jiějué wèntí ér piàn háizi.",
        "vn": "Giáo dục con cái nên chọn phương pháp thích hợp, tốt nhất đừng vì giải quyết vấn đề mà lừa con."
      },
      {
        "zh": "听说昨天那个招聘会提供了很多工作机会，你找到合适的公司了吗？",
        "py": "Tīngshuō zuótiān nàge zhāopìnhuì tígōngle hěn duō gōngzuò jīhuì, nǐ zhǎodào héshì de gōngsī le ma?",
        "vn": "Nghe nói hội chợ tuyển dụng hôm qua có nhiều cơ hội việc làm, bạn tìm được công ty phù hợp chưa?"
      },
      {
        "zh": "这件衣服的颜色很合适你，就买这件吧。",
        "py": "Zhè jiàn yīfu de yánsè hěn héshì nǐ, jiù mǎi zhè jiàn ba.",
        "vn": "Màu chiếc áo này rất hợp với bạn, mua chiếc này đi."
      }
    ],
    "hanzi": [
      {
        "c": "合",
        "p": "hé",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "人 → 一 → 口",
        "rad": "口 (khẩu)",
        "mean": "hợp",
        "tip": "Cái nắp 亼 đậy lên miệng 口 → KHỚP, HỢP. 合适 = hợp và thích đáng; 适合 (Bài 8) đảo ngược = động từ.",
        "cf": "含 (hán – ngậm)",
        "w": "合适 / 适合 / 合作 / 合格"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nghe nói hội chợ tuyển dụng hôm qua nhiều cơ hội lắm, bạn tìm được công ty phù hợp chưa?",
        "answer": "听说昨天那个招聘会提供了很多工作机会，那你找到合适的公司了吗？",
        "answerPy": "Tīngshuō zuótiān nàge zhāopìnhuì tígōngle hěn duō gōngzuò jīhuì, nà nǐ zhǎodào héshì de gōngsī le ma?",
        "note": "招聘会 và 提供 đều là từ bài 3.",
        "pair": "既然……那……"
      }
    ],
    "colloFull": [
      {
        "zh": "合适的公司",
        "py": "héshì de gōngsī",
        "vn": "công ty phù hợp"
      },
      {
        "zh": "不太合适",
        "py": "bú tài héshì",
        "vn": "không hợp lắm"
      },
      {
        "zh": "合适的方法",
        "py": "héshì de fāngfǎ",
        "vn": "cách làm phù hợp"
      },
      {
        "zh": "大小合适",
        "py": "dà xiǎo héshì",
        "vn": "vừa cỡ"
      },
      {
        "zh": "很合适",
        "py": "hěn héshì",
        "vn": "rất hợp"
      }
    ],
    "patterns": [
      {
        "s": "N + 对 + ai + 合适",
        "m": "Cái gì hợp với ai"
      },
      {
        "s": "合适 ≠ 适合",
        "m": "合适 là tính từ (很合适); 适合 là động từ (适合我)"
      }
    ]
  },
  {
    "n": 23,
    "zh": "骗",
    "py": "piàn",
    "pos": "Động từ",
    "vn": "lừa gạt",
    "hv": "biển",
    "em": "🤥",
    "lesson": 4,
    "explain": [
      "Nói dối để lừa. 骗人 = lừa người; 骗孩子; 被骗 = bị lừa."
    ],
    "usage": "骗孩子, 骗人, 被骗了.",
    "collo": [
      "骗孩子",
      "看到父母骗人",
      "别骗我"
    ],
    "ex_zh": "最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
    "ex_py": "Zuìhǎo búyào wèile jiějué wèntí ér piàn háizi, zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
    "ex_vn": "Tốt nhất đừng vì giải quyết vấn đề mà lừa con, vì trẻ em thiếu năng lực phán đoán, thấy cha mẹ lừa người, chúng cũng học nói dối.",
    "exList": [
      {
        "zh": "最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
        "py": "Zuìhǎo búyào wèile jiějué wèntí ér piàn háizi, zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
        "vn": "Tốt nhất đừng vì giải quyết vấn đề mà lừa con, vì trẻ em thiếu năng lực phán đoán, thấy cha mẹ lừa người, chúng cũng học nói dối."
      },
      {
        "zh": "他说的话前后不一样，我怀疑他在骗我们。",
        "py": "Tā shuō de huà qiánhòu bù yíyàng, wǒ huáiyí tā zài piàn wǒmen.",
        "vn": "Lời anh ấy nói trước sau không giống nhau, tôi nghi anh ấy đang lừa chúng ta."
      },
      {
        "zh": "网上购物要小心，千万别被骗了。",
        "py": "Wǎngshàng gòuwù yào xiǎoxīn, qiānwàn bié bèi piàn le.",
        "vn": "Mua sắm trên mạng phải cẩn thận, tuyệt đối đừng để bị lừa."
      }
    ],
    "hanzi": [
      {
        "c": "骗",
        "p": "piàn",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "马 trái → 扁 phải",
        "rad": "马 (mã)",
        "mean": "lừa",
        "tip": "Ngựa 马 + 扁 → nghĩa gốc là nhảy lên ngựa, mượn âm thành LỪA GẠT. 骗子 = kẻ lừa đảo.",
        "cf": "遍 (biàn – lượt, Bài 13)",
        "w": "骗 / 骗人 / 骗子"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mua sắm trên mạng phải cẩn thận, nếu không thì rất dễ bị lừa.",
        "answer": "网上购物要小心，不然很容易被骗。",
        "answerPy": "Wǎngshang gòuwù yào xiǎoxīn, bùrán hěn róngyì bèi piàn.",
        "note": "购物 là từ bài 5; 被 + 骗 — câu bị động.",
        "pair": "不然……"
      }
    ],
    "colloFull": [
      {
        "zh": "骗人",
        "py": "piàn rén",
        "vn": "lừa người"
      },
      {
        "zh": "别骗我",
        "py": "bié piàn wǒ",
        "vn": "đừng lừa tôi"
      },
      {
        "zh": "骗孩子",
        "py": "piàn háizi",
        "vn": "lừa trẻ con"
      },
      {
        "zh": "被骗了",
        "py": "bèi piàn le",
        "vn": "bị lừa"
      },
      {
        "zh": "骗钱",
        "py": "piàn qián",
        "vn": "lừa tiền"
      }
    ],
    "patterns": [
      {
        "s": "骗 + ai",
        "m": "Lừa ai"
      },
      {
        "s": "被 + 骗 + 了",
        "m": "Bị lừa — câu bị động"
      }
    ]
  },
  {
    "n": 24,
    "zh": "儿童",
    "py": "értóng",
    "pos": "Danh từ",
    "vn": "trẻ em",
    "hv": "nhi đồng",
    "em": "🧒",
    "lesson": 4,
    "explain": [
      "Trẻ em nói chung (văn viết, trang trọng hơn 孩子). 儿童节 = Tết thiếu nhi."
    ],
    "usage": "儿童缺少……, 七岁左右的儿童, 教儿童的老师.",
    "collo": [
      "儿童缺少判断能力",
      "七岁左右的儿童",
      "儿童节"
    ],
    "ex_zh": "这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
    "ex_py": "Zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
    "ex_vn": "Vì trẻ em thiếu năng lực phán đoán, thấy cha mẹ lừa người, chúng cũng học nói dối.",
    "exList": [
      {
        "zh": "这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
        "py": "Zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
        "vn": "Vì trẻ em thiếu năng lực phán đoán, thấy cha mẹ lừa người, chúng cũng học nói dối."
      },
      {
        "zh": "七岁左右的儿童普遍好动，坐不住。",
        "py": "Qī suì zuǒyòu de értóng pǔbiàn hào dòng, zuòbuzhù.",
        "vn": "Trẻ em khoảng bảy tuổi thường hiếu động, không ngồi yên được."
      },
      {
        "zh": "对教儿童的老师来说，怎么做才能让他们安静地学习？",
        "py": "Duì jiāo értóng de lǎoshī lái shuō, zěnme zuò cái néng ràng tāmen ānjìng de xuéxí?",
        "vn": "Đối với giáo viên dạy trẻ em, làm thế nào mới khiến chúng yên tĩnh học tập?"
      }
    ],
    "hanzi": [
      {
        "c": "童",
        "p": "tóng",
        "type": "上下结构 · Trên-dưới",
        "st": 12,
        "ord": "立 trên → 里 dưới",
        "rad": "立 (lập)",
        "mean": "trẻ",
        "tip": "立 + 里 → nghĩa cổ là nô lệ trẻ, nay chỉ TRẺ EM (đồng). 儿童 = nhi đồng.",
        "cf": "重 (zhòng – nặng, Bài 14)",
        "w": "儿童 / 童话 / 童年"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trẻ khoảng bảy tuổi không những hiếu động, mà còn ngồi không yên.",
        "answer": "七岁左右的儿童不但普遍好动，而且坐不住。",
        "answerPy": "Qī suì zuǒyòu de értóng búdàn pǔbiàn hàodòng, érqiě zuò bu zhù.",
        "note": "普遍 là từ bài 13; V + 不住 — không giữ được.",
        "pair": "不但……而且……"
      }
    ],
    "colloFull": [
      {
        "zh": "七岁左右的儿童",
        "py": "qī suì zuǒyòu de értóng",
        "vn": "trẻ khoảng bảy tuổi"
      },
      {
        "zh": "儿童节",
        "py": "értóngjié",
        "vn": "ngày thiếu nhi"
      },
      {
        "zh": "儿童缺少判断能力",
        "py": "értóng quēshǎo pànduàn nénglì",
        "vn": "trẻ thiếu năng lực phán đoán"
      },
      {
        "zh": "儿童读物",
        "py": "értóng dúwù",
        "vn": "sách thiếu nhi"
      },
      {
        "zh": "儿童教育",
        "py": "értóng jiàoyù",
        "vn": "giáo dục trẻ em"
      }
    ],
    "patterns": [
      {
        "s": "儿童 ≈ 孩子",
        "m": "儿童 trang trọng, dùng trong văn viết và tên gọi chính thức"
      },
      {
        "s": "儿童 + 节 / 教育",
        "m": "Ngày thiếu nhi, giáo dục trẻ em"
      }
    ]
  },
  {
    "n": 25,
    "zh": "假",
    "py": "jiǎ",
    "pos": "Tính từ",
    "vn": "giả dối, không thật",
    "hv": "giả",
    "em": "🎭",
    "lesson": 4,
    "explain": [
      "Không thật. 假话 = lời nói dối; 假的 = đồ giả. Trái nghĩa: 真. Chú ý đọc jià = kỳ nghỉ (寒假, 暑假)."
    ],
    "usage": "说假话, 假的, 真假.",
    "collo": [
      "说假话",
      "是假的",
      "真的还是假的"
    ],
    "ex_zh": "看到父母骗人，他们也会学着说假话。",
    "ex_py": "Kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
    "ex_vn": "Thấy cha mẹ lừa người, chúng cũng học nói dối.",
    "exList": [
      {
        "zh": "看到父母骗人，他们也会学着说假话。",
        "py": "Kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.",
        "vn": "Thấy cha mẹ lừa người, chúng cũng học nói dối."
      },
      {
        "zh": "这个消息是假的，你千万别相信。",
        "py": "Zhège xiāoxi shì jiǎ de, nǐ qiānwàn bié xiāngxìn.",
        "vn": "Tin này là giả, bạn tuyệt đối đừng tin."
      },
      {
        "zh": "网上买的东西真真假假，很难判断质量好坏。",
        "py": "Wǎngshàng mǎi de dōngxi zhēnzhēn jiǎjiǎ, hěn nán pànduàn zhìliàng hǎo huài.",
        "vn": "Đồ mua trên mạng thật giả lẫn lộn, rất khó phán đoán chất lượng tốt xấu."
      }
    ],
    "hanzi": [
      {
        "c": "假",
        "p": "jiǎ",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "亻 trái → 叚 phải",
        "rad": "亻 (nhân)",
        "mean": "giả; nghỉ",
        "tip": "Người 亻 + 叚(mượn) → mượn, không phải thật → GIẢ (jiǎ). Đọc jià = kỳ nghỉ: 寒假, 暑假, 请假.",
        "cf": "段 (duàn – đoạn)",
        "w": "假话 / 假的 / 寒假 (jià) / 请假 (jià)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tin này là giả, cho nên bạn tuyệt đối đừng tin.",
        "answer": "这个消息是假的，所以你千万别相信。",
        "answerPy": "Zhège xiāoxi shì jiǎ de, suǒyǐ nǐ qiānwàn bié xiāngxìn.",
        "note": "消息 là từ bài 4; 假 (jiǎ) khác 假 (jià) trong 寒假.",
        "pair": "因为……所以……"
      }
    ],
    "colloFull": [
      {
        "zh": "说假话",
        "py": "shuō jià huà",
        "vn": "nói dối"
      },
      {
        "zh": "是假的",
        "py": "shì jià de",
        "vn": "là giả"
      },
      {
        "zh": "真的还是假的",
        "py": "zhēn de háishi jià de",
        "vn": "thật hay giả"
      },
      {
        "zh": "假消息",
        "py": "jià xiāoxi",
        "vn": "tin giả"
      },
      {
        "zh": "假笑",
        "py": "jià xiào",
        "vn": "cười giả tạo"
      }
    ],
    "patterns": [
      {
        "s": "假 (jiǎ, giả) ↔ 真 (thật)"
      },
      {
        "s": "假 (jiǎ, giả) ≠ 假 (jià, kỳ nghỉ — 寒假)"
      }
    ]
  },
  {
    "n": 26,
    "zh": "左右",
    "py": "zuǒyòu",
    "pos": "Danh từ",
    "vn": "khoảng, khoảng chừng",
    "hv": "tả hữu",
    "em": "↔️",
    "lesson": 5,
    "explain": [
      "Đứng sau số lượng, chỉ \"khoảng, xấp xỉ\" (nhiều hơn hoặc ít hơn chút). 三天左右, 七岁左右, 500米左右. Ngữ pháp trọng tâm."
    ],
    "usage": "Số lượng + 左右",
    "collo": [
      "七岁左右",
      "三天左右",
      "500米左右"
    ],
    "ex_zh": "七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。",
    "ex_py": "Qī suì zuǒyòu de értóng pǔbiàn hào dòng, zuòbuzhù, suǒyǐ lǎoshī zài jiāo zhège niánlíng duàn de háizi shí, yídìng yào xiǎng bànfǎ yǐnqǐ tāmen de xìngqù.",
    "ex_vn": "Trẻ em khoảng bảy tuổi thường hiếu động, không ngồi yên, nên giáo viên khi dạy lứa tuổi này nhất định phải nghĩ cách khơi dậy hứng thú của chúng.",
    "exList": [
      {
        "zh": "七岁左右的儿童普遍好动，坐不住。",
        "py": "Qī suì zuǒyòu de értóng pǔbiàn hào dòng, zuòbuzhù.",
        "vn": "Trẻ em khoảng bảy tuổi thường hiếu động, không ngồi yên được."
      },
      {
        "zh": "网上买的那本书估计三天左右就能到，你收到了记得给我打个电话说一声。",
        "py": "Wǎngshàng mǎi de nà běn shū gūjì sān tiān zuǒyòu jiù néng dào, nǐ shōudàole jìde gěi wǒ dǎ ge diànhuà shuō yì shēng.",
        "vn": "Cuốn sách mua trên mạng ước chừng ba ngày là đến, bạn nhận được nhớ gọi điện báo tôi."
      },
      {
        "zh": "这儿不能停车，前方500米左右有个免费停车场，您可以把车停到那儿。",
        "py": "Zhèr bù néng tíng chē, qiánfāng wǔbǎi mǐ zuǒyòu yǒu ge miǎnfèi tíngchēchǎng, nín kěyǐ bǎ chē tíngdào nàr.",
        "vn": "Ở đây không được đỗ xe, phía trước khoảng 500 mét có bãi đỗ miễn phí, ngài có thể đỗ ở đó."
      }
    ],
    "hanzi": [
      {
        "c": "左",
        "p": "zuǒ",
        "type": "半包围结构 · Nửa bao quanh",
        "st": 5,
        "ord": "一 → 丿 → 工",
        "rad": "工 (công)",
        "mean": "trái",
        "tip": "Bàn tay 𠂇 + 工 (dụng cụ) → tay TRÁI cầm dụng cụ phụ. 右 = tay phải đưa lên miệng 口. 左右 = trái phải → xấp xỉ.",
        "cf": "右 (yòu – phải)",
        "w": "左右 / 左边 / 左手"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cuốn sách mua trên mạng ước chừng ba ngày là tới, nếu chưa tới thì gọi cho họ.",
        "answer": "网上买的那本书估计三天左右就能到，要是没到，就给他们打电话。",
        "answerPy": "Wǎngshang mǎi de nà běn shū gūjì sān tiān zuǒyòu jiù néng dào, yàoshi méi dào, jiù gěi tāmen dǎ diànhuà.",
        "note": "估计 là từ bài 7; 左右 đứng SAU số lượng.",
        "pair": "要是……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Giám đốc Mã cuối tháng 7 đi Bắc Kinh công tác, khoảng một tuần thì về.",
        "answer": "马经理7月底去北京出差，大约一个星期左右就回来。",
        "answerPy": "Mǎ jīnglǐ 7 yuèdǐ qù Běijīng chūchāi, dàyuē yí ge xīngqī zuǒyòu jiù huílai.",
        "note": "出差 là từ bài 14 — 去 + nơi chốn + 出差.",
        "pair": "大约……"
      }
    ],
    "colloFull": [
      {
        "zh": "七岁左右",
        "py": "qī suì zuǒyòu",
        "vn": "khoảng bảy tuổi"
      },
      {
        "zh": "三天左右",
        "py": "sān tiān zuǒyòu",
        "vn": "khoảng ba ngày"
      },
      {
        "zh": "500米左右",
        "py": "mǐ zuǒyòu",
        "vn": "khoảng 500 mét"
      },
      {
        "zh": "一个星期左右",
        "py": "yí gè xīngqī zuǒyòu",
        "vn": "chừng một tuần"
      },
      {
        "zh": "十点左右",
        "py": "shí diǎn zuǒyòu",
        "vn": "khoảng mười giờ"
      }
    ],
    "patterns": [
      {
        "s": "số lượng + 左右",
        "m": "Khoảng chừng — 左右 đứng SAU số lượng"
      },
      {
        "s": "✗ 左右三天 → ✓ 三天左右",
        "m": "Ngược với 大约 / 大概 đứng trước"
      }
    ]
  },
  {
    "n": 27,
    "zh": "懒",
    "py": "lǎn",
    "pos": "Tính từ",
    "vn": "lười, lười nhác",
    "hv": "lãn",
    "em": "😴",
    "lesson": 5,
    "explain": [
      "Không thích làm việc, lười biếng. 太懒了, 懒得 + động từ = lười (làm gì)."
    ],
    "usage": "很懒, 太懒了, 懒得出门.",
    "collo": [
      "用\"懒\"批评他",
      "太懒了",
      "懒得做饭"
    ],
    "ex_zh": "当孩子不明白时，应该多鼓励他，不要用\"懒\"\"笨\"\"粗心\"这种词批评他。",
    "ex_py": "Dāng háizi bù míngbai shí, yīnggāi duō gǔlì tā, búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā.",
    "ex_vn": "Khi trẻ không hiểu, nên khuyến khích nhiều hơn, đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình.",
    "exList": [
      {
        "zh": "当孩子不明白时，应该多鼓励他，不要用\"懒\"\"笨\"\"粗心\"这种词批评他。",
        "py": "Dāng háizi bù míngbai shí, yīnggāi duō gǔlì tā, búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā.",
        "vn": "Khi trẻ không hiểu, nên khuyến khích nhiều hơn, đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình."
      },
      {
        "zh": "周末他太懒了，中午十二点才醒。",
        "py": "Zhōumò tā tài lǎn le, zhōngwǔ shí'èr diǎn cái xǐng.",
        "vn": "Cuối tuần anh ấy lười quá, trưa 12 giờ mới dậy."
      },
      {
        "zh": "天气太热，我懒得出门，就在家看电视。",
        "py": "Tiānqì tài rè, wǒ lǎnde chū mén, jiù zài jiā kàn diànshì.",
        "vn": "Trời nóng quá, tôi lười ra ngoài, ở nhà xem TV."
      }
    ],
    "hanzi": [
      {
        "c": "懒",
        "p": "lǎn",
        "type": "左右结构 · Trái-phải",
        "st": 16,
        "ord": "忄 trái → 赖 phải",
        "rad": "忄 (tâm)",
        "mean": "lười",
        "tip": "Tâm 忄 + 赖(ỷ lại) → trong lòng ỷ lại → LƯỜI. 懒得 = lười (làm gì).",
        "cf": "赖 (lài – ỷ lại)",
        "w": "懒 / 懒得 / 懒人"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cuối tuần anh ấy lười quá, trưa 12 giờ mới dậy.",
        "answer": "周末他太懒了，中午十二点才醒。",
        "answerPy": "Zhōumò tā tài lǎn le, zhōngwǔ shí'èr diǎn cái xǐng.",
        "note": "才 (Bài 3) + 醒 (từ mới).",
        "pair": "……，才……"
      }
    ],
    "colloFull": [
      {
        "zh": "太懒了",
        "py": "tài lǎn le",
        "vn": "lười quá"
      },
      {
        "zh": "懒得做饭",
        "py": "lǎn de zuò fàn",
        "vn": "lười nấu cơm"
      },
      {
        "zh": "很懒",
        "py": "hěn lǎn",
        "vn": "rất lười"
      },
      {
        "zh": "别懒",
        "py": "bié lǎn",
        "vn": "đừng lười"
      },
      {
        "zh": "用\"懒\"批评他",
        "py": "yòng lǎn pīpíng tā",
        "vn": "lấy chữ \"lười\" mà mắng cậu ấy"
      }
    ],
    "patterns": [
      {
        "s": "懒得 + V",
        "m": "Lười không muốn làm gì"
      },
      {
        "s": "懒 ↔ 努力",
        "m": "Lười ↔ chăm chỉ"
      }
    ]
  },
  {
    "n": 28,
    "zh": "笨",
    "py": "bèn",
    "pos": "Tính từ",
    "vn": "đần, ngốc",
    "hv": "bổn",
    "em": "🙈",
    "lesson": 5,
    "explain": [
      "Kém thông minh, chậm hiểu. Trái nghĩa: 聪明. 笨蛋 = đồ ngốc (xúc phạm)."
    ],
    "usage": "太笨了, 不笨, 笨办法.",
    "collo": [
      "用\"笨\"批评他",
      "并不笨",
      "笨办法"
    ],
    "ex_zh": "不要用\"懒\"\"笨\"\"粗心\"这种词批评他，这样对他们的正常发展不好。",
    "ex_py": "Búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā, zhèyàng duì tāmen de zhèngcháng fāzhǎn bù hǎo.",
    "ex_vn": "Đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình trẻ, như vậy không tốt cho sự phát triển bình thường của chúng.",
    "exList": [
      {
        "zh": "不要用\"懒\"\"笨\"\"粗心\"这种词批评他，这样对他们的正常发展不好。",
        "py": "Búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā, zhèyàng duì tāmen de zhèngcháng fāzhǎn bù hǎo.",
        "vn": "Đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình trẻ, như vậy không tốt cho sự phát triển bình thường của chúng."
      },
      {
        "zh": "他并不笨，只是学习方法不对，所以事倍功半。",
        "py": "Tā bìng bú bèn, zhǐshì xuéxí fāngfǎ bú duì, suǒyǐ shìbèigōngbàn.",
        "vn": "Cậu ấy không hề ngốc, chỉ là phương pháp học không đúng, nên tốn công mà ít hiệu quả."
      },
      {
        "zh": "一遍一遍地练习虽然是个笨办法，但是很有效果。",
        "py": "Yí biàn yí biàn de liànxí suīrán shì ge bèn bànfǎ, dànshì hěn yǒu xiàoguǒ.",
        "vn": "Luyện đi luyện lại tuy là cách \"ngốc\", nhưng rất hiệu quả."
      }
    ],
    "hanzi": [
      {
        "c": "笨",
        "p": "bèn",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "⺮ trên → 本 dưới",
        "rad": "⺮ (trúc)",
        "mean": "ngốc",
        "tip": "Trúc ⺮ + 本(gốc) → gốc tre thô cứng → THÔ, NGỐC. Đối lập với 聪明.",
        "cf": "本 (běn – gốc)",
        "w": "笨 / 笨蛋 / 笨办法"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cậu ấy không hề ngốc, chỉ là phương pháp học chưa đúng thôi.",
        "answer": "他并不笨，只是学习方法不对而已。",
        "answerPy": "Tā bìng bú bèn, zhǐshì xuéxí fāngfǎ bú duì éryǐ.",
        "note": "并不 là từ bài 4, 方法 là từ bài 4.",
        "pair": "不是……而是……"
      }
    ],
    "colloFull": [
      {
        "zh": "并不笨",
        "py": "bìng bú bèn",
        "vn": "không hề ngốc"
      },
      {
        "zh": "笨办法",
        "py": "bèn bànfǎ",
        "vn": "cách vụng"
      },
      {
        "zh": "太笨了",
        "py": "tài bèn le",
        "vn": "ngốc quá"
      },
      {
        "zh": "觉得自己笨",
        "py": "juéde zìjǐ bèn",
        "vn": "thấy mình dốt"
      },
      {
        "zh": "笨孩子",
        "py": "bèn háizi",
        "vn": "đứa trẻ chậm"
      }
    ],
    "patterns": [
      {
        "s": "并不 + 笨",
        "m": "Không hề ngốc — 并不 là từ bài 4"
      },
      {
        "s": "笨 ↔ 聪明",
        "m": "Ngốc ↔ thông minh — tránh dùng để mắng trẻ"
      }
    ]
  },
  {
    "n": 29,
    "zh": "粗心",
    "py": "cūxīn",
    "pos": "Tính từ",
    "vn": "cẩu thả",
    "hv": "thô tâm",
    "em": "🙄",
    "lesson": 5,
    "explain": [
      "Không cẩn thận, bất cẩn. Trái nghĩa: 仔细/细心 (Bài 12). 太粗心了, 粗心大意."
    ],
    "usage": "太粗心了, 粗心的人, 因为粗心.",
    "collo": [
      "用\"粗心\"批评他",
      "太粗心了",
      "粗心大意"
    ],
    "ex_zh": "不要用\"懒\"\"笨\"\"粗心\"这种词批评他。",
    "ex_py": "Búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā.",
    "ex_vn": "Đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình trẻ.",
    "exList": [
      {
        "zh": "不要用\"懒\"\"笨\"\"粗心\"这种词批评他。",
        "py": "Búyào yòng \"lǎn\" \"bèn\" \"cūxīn\" zhè zhǒng cí pīpíng tā.",
        "vn": "Đừng dùng những từ như \"lười\", \"ngốc\", \"cẩu thả\" để phê bình trẻ."
      },
      {
        "zh": "他的优点是有礼貌、诚实，能吃苦，就是太粗心了，不适合我们这儿的工作。",
        "py": "Tā de yōudiǎn shì yǒu lǐmào, chéngshí, néng chī kǔ, jiù shì tài cūxīn le, bú shìhé wǒmen zhèr de gōngzuò.",
        "vn": "Ưu điểm của anh ấy là lễ phép, thành thật, chịu khổ được, chỉ là quá cẩu thả, không hợp công việc ở chỗ chúng tôi."
      },
      {
        "zh": "这次考试因为粗心丢了十分，太可惜了。",
        "py": "Zhè cì kǎoshì yīnwèi cūxīn diūle shí fēn, tài kěxī le.",
        "vn": "Kỳ thi này vì cẩu thả mất mười điểm, tiếc quá."
      }
    ],
    "hanzi": [
      {
        "c": "粗",
        "p": "cū",
        "type": "左右结构 · Trái-phải",
        "st": 11,
        "ord": "米 trái → 且 phải",
        "rad": "米 (mễ)",
        "mean": "thô",
        "tip": "Gạo 米 + 且 → gạo THÔ chưa xay kỹ → THÔ, không tinh. 粗心 = tâm thô = cẩu thả.",
        "cf": "组 (zǔ – tổ, nhóm)",
        "w": "粗心 / 粗 / 粗糙"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ưu điểm của anh ấy là lễ phép và thành thật, nhưng quá cẩu thả nên không hợp với công việc ở đây.",
        "answer": "他的优点虽然是有礼貌、诚实，但是太粗心了，所以不适合这儿的工作。",
        "answerPy": "Tā de yōudiǎn suīrán shì yǒu lǐmào, chéngshí, dànshì tài cūxīn le, suǒyǐ bú shìhé zhèr de gōngzuò.",
        "note": "优点 là từ bài 5, 诚实 là từ bài 3; 粗心 ↔ 仔细 (bài 12).",
        "pair": "虽然……但是……"
      }
    ],
    "colloFull": [
      {
        "zh": "太粗心了",
        "py": "tài cūxīn le",
        "vn": "cẩu thả quá"
      },
      {
        "zh": "粗心大意",
        "py": "cūxīn-dàyì",
        "vn": "cẩu thả đại khái"
      },
      {
        "zh": "做事粗心",
        "py": "zuò shì cūxīn",
        "vn": "làm việc cẩu thả"
      },
      {
        "zh": "因为粗心出错",
        "py": "yīnwèi cūxīn chū cuò",
        "vn": "sai vì cẩu thả"
      },
      {
        "zh": "别这么粗心",
        "py": "bié zhème cūxīn",
        "vn": "đừng cẩu thả thế"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 太 + 粗心 + 了",
        "m": "Ai đó quá cẩu thả"
      },
      {
        "s": "粗心 ↔ 仔细 (bài 12)",
        "m": "Cẩu thả ↔ tỉ mỉ"
      }
    ]
  },
  {
    "n": 30,
    "zh": "骄傲",
    "py": "jiāo'ào",
    "pos": "Tính từ",
    "vn": "kiêu ngạo",
    "hv": "kiêu ngạo",
    "em": "😤",
    "lesson": 5,
    "explain": [
      "(1) Tự cao, coi thường người khác (nghĩa xấu). (2) Tự hào (为……骄傲, nghĩa tốt)."
    ],
    "usage": "比较骄傲, 别骄傲, 为……感到骄傲.",
    "collo": [
      "孩子比较骄傲",
      "取得成绩别骄傲",
      "为你骄傲"
    ],
    "ex_zh": "如果孩子比较骄傲，应该让他明白还有很多知识需要学习。",
    "ex_py": "Rúguǒ háizi bǐjiào jiāo'ào, yīnggāi ràng tā míngbai hái yǒu hěn duō zhīshi xūyào xuéxí.",
    "ex_vn": "Nếu trẻ khá kiêu ngạo, nên để nó hiểu còn nhiều kiến thức cần học.",
    "exList": [
      {
        "zh": "如果孩子比较骄傲，应该让他明白还有很多知识需要学习。",
        "py": "Rúguǒ háizi bǐjiào jiāo'ào, yīnggāi ràng tā míngbai hái yǒu hěn duō zhīshi xūyào xuéxí.",
        "vn": "Nếu trẻ khá kiêu ngạo, nên để nó hiểu còn nhiều kiến thức cần học."
      },
      {
        "zh": "取得了一点儿成绩千万别骄傲，否则很快就会落后。",
        "py": "Qǔdéle yìdiǎnr chéngjì qiānwàn bié jiāo'ào, fǒuzé hěn kuài jiù huì luòhòu.",
        "vn": "Đạt được chút thành tích tuyệt đối đừng kiêu ngạo, nếu không sẽ nhanh chóng tụt lại."
      },
      {
        "zh": "儿子考上了大学，父母都为他感到骄傲。",
        "py": "Érzi kǎoshàngle dàxué, fùmǔ dōu wèi tā gǎndào jiāo'ào.",
        "vn": "Con trai đỗ đại học, cha mẹ đều tự hào về nó."
      }
    ],
    "hanzi": [
      {
        "c": "骄",
        "p": "jiāo",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "马 trái → 乔 phải",
        "rad": "马 (mã)",
        "mean": "kiêu",
        "tip": "Ngựa 马 + 乔(cao) → ngựa cao ngẩng đầu → KIÊU. 骄傲 = kiêu ngạo / tự hào.",
        "cf": "桥 (qiáo – cầu)",
        "w": "骄傲"
      },
      {
        "c": "傲",
        "p": "ào",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "亻 trái → 敖 phải",
        "rad": "亻 (nhân)",
        "mean": "ngạo",
        "tip": "Người 亻 + 敖 → người tự cao → NGẠO.",
        "cf": "熬 (áo – hầm, ninh)",
        "w": "骄傲 / 傲慢"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đạt được chút thành tích tuyệt đối đừng kiêu ngạo, nếu không sẽ nhanh chóng tụt lại.",
        "answer": "取得了一点儿成绩千万别骄傲，否则很快就会落后。",
        "answerPy": "Qǔdéle yìdiǎnr chéngjì qiānwàn bié jiāo'ào, fǒuzé hěn kuài jiù huì luòhòu.",
        "note": "取得 (Bài 9), 否则 (Bài 11), 千万别.",
        "pair": "一……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "为你骄傲",
        "py": "wèi nǐ jiāo'ào",
        "vn": "tự hào về bạn"
      },
      {
        "zh": "别骄傲",
        "py": "bié jiāo'ào",
        "vn": "đừng kiêu"
      },
      {
        "zh": "比较骄傲",
        "py": "bǐjiào jiāo'ào",
        "vn": "khá kiêu ngạo"
      },
      {
        "zh": "取得成绩别骄傲",
        "py": "qǔdé chéngjì bié jiāo'ào",
        "vn": "có thành tích đừng kiêu"
      },
      {
        "zh": "骄傲的样子",
        "py": "jiāo'ào de yàngzi",
        "vn": "vẻ kiêu ngạo"
      }
    ],
    "patterns": [
      {
        "s": "为 + ai + 骄傲 (nghĩa tốt)",
        "m": "Tự hào về ai"
      },
      {
        "s": "Sub + 很 + 骄傲 (nghĩa xấu)",
        "m": "Ai đó kiêu ngạo — hai nghĩa trái nhau"
      }
    ]
  },
  {
    "n": 31,
    "zh": "害羞",
    "py": "hàixiū",
    "pos": "Động từ",
    "vn": "ngượng ngùng, thẹn thùng",
    "hv": "hại tu",
    "em": "😳",
    "lesson": 5,
    "explain": [
      "Xấu hổ, e thẹn khi gặp người lạ hoặc bị chú ý. 有点儿害羞, 性格害羞."
    ],
    "usage": "有点儿害羞, 性格有些害羞, 害羞得脸红.",
    "collo": [
      "性格有些害羞",
      "有点儿害羞",
      "害羞的孩子"
    ],
    "ex_zh": "要是孩子性格有些害羞，就要经常鼓励他说出自己的看法，这样才能让每一个孩子都健康地发展。",
    "ex_py": "Yàoshi háizi xìnggé yǒuxiē hàixiū, jiù yào jīngcháng gǔlì tā shuōchū zìjǐ de kànfǎ, zhèyàng cái néng ràng měi yí ge háizi dōu jiànkāng de fāzhǎn.",
    "ex_vn": "Nếu trẻ có tính cách hơi nhút nhát, phải thường xuyên khuyến khích nó nói ra ý kiến của mình, như vậy mới khiến mỗi đứa trẻ phát triển lành mạnh.",
    "exList": [
      {
        "zh": "要是孩子性格有些害羞，就要经常鼓励他说出自己的看法。",
        "py": "Yàoshi háizi xìnggé yǒuxiē hàixiū, jiù yào jīngcháng gǔlì tā shuōchū zìjǐ de kànfǎ.",
        "vn": "Nếu trẻ có tính cách hơi nhút nhát, phải thường xuyên khuyến khích nó nói ra ý kiến của mình."
      },
      {
        "zh": "A：你妹妹很可爱，但是好像不太爱说话。B：她只是有点儿害羞，等跟大家熟悉了就好了。",
        "py": "A: Nǐ mèimei hěn kě'ài, dànshì hǎoxiàng bú tài ài shuō huà. B: Tā zhǐshì yǒudiǎnr hàixiū, děng gēn dàjiā shúxī le jiù hǎo le.",
        "vn": "A: Em gái bạn rất đáng yêu, nhưng hình như không thích nói chuyện. B: Nó chỉ hơi ngượng thôi, quen với mọi người rồi là ổn."
      },
      {
        "zh": "第一次上台表演，她害羞得脸都红了。",
        "py": "Dì-yī cì shàng tái biǎoyǎn, tā hàixiū de liǎn dōu hóng le.",
        "vn": "Lần đầu lên sân khấu biểu diễn, cô ấy ngượng đến đỏ cả mặt."
      }
    ],
    "hanzi": [
      {
        "c": "羞",
        "p": "xiū",
        "type": "半包围结构 · Nửa bao quanh",
        "st": 10,
        "ord": "𦍌 trên → 丑 dưới",
        "rad": "羊 (dương)",
        "mean": "thẹn",
        "tip": "Dê 羊 + 丑(xấu) → dâng dê lên mà thấy xấu hổ → THẸN. 害羞 = mắc cỡ.",
        "cf": "着 (zhe – trợ từ)",
        "w": "害羞 / 羞"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nó chỉ hơi ngượng thôi, quen với mọi người rồi là ổn.",
        "answer": "她只是有点儿害羞，等跟大家熟悉了就好了。",
        "answerPy": "Tā zhǐshì yǒudiǎnr hàixiū, děng gēn dàjiā shúxī le jiù hǎo le.",
        "note": "只是 (Bài 6), 熟悉 (Bài 9).",
        "pair": "等……就……"
      }
    ],
    "colloFull": [
      {
        "zh": "有点儿害羞",
        "py": "yǒudiǎnr hàixiū",
        "vn": "hơi ngượng"
      },
      {
        "zh": "害羞的孩子",
        "py": "hàixiū de háizi",
        "vn": "đứa trẻ nhút nhát"
      },
      {
        "zh": "别害羞",
        "py": "bié hàixiū",
        "vn": "đừng ngại"
      },
      {
        "zh": "性格害羞",
        "py": "xìnggé hàixiū",
        "vn": "tính cách rụt rè"
      },
      {
        "zh": "害羞地笑",
        "py": "hàixiū de xiào",
        "vn": "cười ngượng nghịu"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 有点儿 + 害羞",
        "m": "Ai đó hơi ngượng ngùng"
      },
      {
        "s": "害 + 羞",
        "m": "Mắc (害) thẹn (羞) — ghép nghĩa dễ nhớ"
      }
    ]
  }
];

var wuData = [
  {img:'🏃',label:'赶时间',py:'gǎn shíjiān',letter:'A'},
  {img:'😳',label:'害羞',py:'hàixiū',letter:'B'},
  {img:'💉',label:'打针',py:'dǎ zhēn',letter:'C'},
  {img:'⏰',label:'闹钟',py:'nàozhōng',letter:'D'},
  {img:'🚪',label:'敲门',py:'qiāo mén',letter:'E'},
  {img:'🎹',label:'弹钢琴',py:'tán gāngqín',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 李老师建议王静让孩子养成好习惯',
   preQuiz:[{q:'李老师的孙子为什么这么优秀？',opts:['因为他很聪明','因为他父母教育得好，帮他养成了好习惯','因为他上了很好的学校'],ans:1},{q:'那个男孩子在晚会上表演了什么？',opts:['一边弹钢琴一边唱歌','跳舞','说笑话'],ans:0},{q:'李老师认为孩子最重要的老师是谁？',opts:['父母','学校老师','同学'],ans:0}],
   lines:[
     {sp:0,zh:'那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！',py:'Nàge yìbiān tán gāngqín yìbiān chàng gē de nán háizi shì shéi? Biǎoyǎn de zhēn bàng!',vn:'Cậu bé vừa chơi piano vừa hát kia là ai? Biểu diễn hay thật!'},
     {sp:1,zh:'是我孙子。去年寒假前的新年晚会他也表演过一次。',py:'Shì wǒ sūnzi. Qùnián hánjià qián de xīnnián wǎnhuì tā yě biǎoyǎnguo yí cì.',vn:'Là cháu nội tôi. Đêm hội năm mới trước kỳ nghỉ đông năm ngoái nó cũng biểu diễn một lần.'},
     {sp:0,zh:'我想起来了，这孩子又聪明又可爱，你们教育得真好！',py:'Wǒ xiǎng qilai le, zhè háizi yòu cōngming yòu kě\'ài, nǐmen jiàoyù de zhēn hǎo!',vn:'Tôi nhớ ra rồi, đứa bé này vừa thông minh vừa đáng yêu, nhà thầy dạy dỗ tốt thật!'},
     {sp:1,zh:'是他父母教育得好。父母是孩子最重要的老师。他父母不仅教他知识，而且还花了很长时间帮助他养成了非常好的习惯，现在他每天都自己练习弹钢琴。',py:'Shì tā fùmǔ jiàoyù de hǎo. Fùmǔ shì háizi zuì zhòngyào de lǎoshī. Tā fùmǔ bùjǐn jiāo tā zhīshi, érqiě hái huāle hěn cháng shíjiān bāngzhù tā yǎngchéngle fēicháng hǎo de xíguàn, xiànzài tā měi tiān dōu zìjǐ liànxí tán gāngqín.',vn:'Là bố mẹ nó dạy tốt. Cha mẹ là người thầy quan trọng nhất của con. Bố mẹ nó không chỉ dạy kiến thức, mà còn dành rất nhiều thời gian giúp nó hình thành thói quen rất tốt, giờ ngày nào nó cũng tự luyện piano.'},
     {sp:0,zh:'让孩子养成一个好习惯实在太重要了，看来我得向他父母好好儿学习。',py:'Ràng háizi yǎngchéng yí ge hǎo xíguàn shízài tài zhòngyào le, kànlái wǒ děi xiàng tā fùmǔ hǎohāor xuéxí.',vn:'Để con hình thành thói quen tốt thực sự quá quan trọng, xem ra tôi phải học hỏi bố mẹ cháu.'},
     {sp:1,zh:'对。如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。',py:'Duì. Rúguǒ xīwàng yǒu yí ge yōuxiù de háizi, nǐ jiù yào xiān chéngwéi yí wèi yōuxiù de fùqīn huòzhě mǔqīn.',vn:'Đúng. Nếu mong có một đứa con xuất sắc, bạn phải trở thành người cha hoặc mẹ xuất sắc trước.'},
   ]},
  {scene:'课文2 · 王静建议孙月教育孩子学会安排时间',
   preQuiz:[{q:'王静认为孩子做事慢往往是因为什么？',opts:['因为孩子太懒','因为孩子不会安排自己的时间','因为作业太多'],ans:1},{q:'孙月的女儿昨晚做作业做到几点？',opts:['9点','11点','12点'],ans:1},{q:'孙月以后打算怎么做？',opts:['让女儿学会安排时间，自己的事情自己做','替女儿做所有的事','让女儿不做作业'],ans:0}],
   lines:[
     {sp:0,zh:'看你脸色不太好，是不是昨晚没休息好？',py:'Kàn nǐ liǎnsè bú tài hǎo, shì bu shì zuó wǎn méi xiūxi hǎo?',vn:'Thấy sắc mặt bạn không tốt lắm, có phải tối qua không nghỉ ngơi tốt?'},
     {sp:1,zh:'别提了。我女儿昨晚做作业又做到11点。',py:'Bié tí le. Wǒ nǚ\'ér zuó wǎn zuò zuòyè yòu zuòdào shíyī diǎn.',vn:'Đừng nhắc nữa. Con gái tôi tối qua làm bài tập lại đến 11 giờ.'},
     {sp:0,zh:'睡觉太晚对孩子的身体没有好处。最近孩子作业是不是太多了？',py:'Shuì jiào tài wǎn duì háizi de shēntǐ méiyǒu hǎochù. Zuìjìn háizi zuòyè shì bu shì tài duō le?',vn:'Ngủ muộn quá không tốt cho sức khỏe của trẻ. Dạo này bài tập của bọn trẻ có phải nhiều quá không?'},
     {sp:1,zh:'主要是她做事情比较慢，比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。每天因为这些小事批评她，弄得我俩心情都不好。',py:'Zhǔyào shì tā zuò shìqing bǐjiào màn, bǐrú zǎoshang nàozhōng xiǎngle tā bù xǐng, wǒ gǎn shíjiān sòng tā shàng xué, tā yòu jízhe shàng cèsuǒ. Měi tiān yīnwèi zhèxiē xiǎo shì pīpíng tā, nòng de wǒ liǎ xīnqíng dōu bù hǎo.',vn:'Chủ yếu là nó làm việc khá chậm, ví dụ sáng báo thức reo nó không dậy, tôi vội đưa nó đi học, nó lại cuống lên đi vệ sinh. Ngày nào cũng vì việc nhỏ này mà phê bình nó, khiến hai mẹ con đều không vui.'},
     {sp:0,zh:'孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。',py:'Háizi zuò shì màn, wǎngwǎng shì yīnwèi tāmen bú huì ānpái zìjǐ de shíjiān. Nǐ yīnggāi ràng háizi xuéhuì guǎnlǐ shíjiān.',vn:'Trẻ làm việc chậm thường vì chúng không biết sắp xếp thời gian. Bạn nên để con học cách quản lý thời gian.'},
     {sp:1,zh:'看来还是我的教育方法有问题。平时看她做事情慢，总想替她做，以后得让她学会安排时间，自己的事情自己做。',py:'Kànlái háishi wǒ de jiàoyù fāngfǎ yǒu wèntí. Píngshí kàn tā zuò shìqing màn, zǒng xiǎng tì tā zuò, yǐhòu děi ràng tā xuéhuì ānpái shíjiān, zìjǐ de shìqing zìjǐ zuò.',vn:'Xem ra vẫn là phương pháp giáo dục của tôi có vấn đề. Bình thường thấy nó làm chậm, cứ muốn làm thay, sau này phải để nó học sắp xếp thời gian, việc của mình tự làm.'},
   ]},
  {scene:'课文3 · 王静和孙月讨论表扬孩子的方法',
   preQuiz:[{q:'孙月认为怎么表扬孩子才更有效果？',opts:['表扬越多越好','表扬要及时，不仅看结果，更要看过程','只表扬结果'],ans:1},{q:'张远的儿子怕什么？',opts:['打针','吃药','看医生'],ans:0},{q:'过多的表扬可能会给孩子带来什么？',opts:['压力','信心','快乐'],ans:0}],
   lines:[
     {sp:0,zh:'明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。',py:'Míngtiān yòu yào dài wǒ érzi qù yīyuàn dǎ zhēn, xiǎngxiang wǒ jiù tóu téng. Tā jiù pà dǎ zhēn, měi cì dǎ zhēn dōu kū de tèbié lìhai.',vn:'Mai lại phải đưa con trai đi bệnh viện tiêm, nghĩ đến là tôi đau đầu. Nó sợ nhất là tiêm, lần nào tiêm cũng khóc dữ dội.'},
     {sp:1,zh:'记得我女儿小时候，带她去医院打针，刚开始，她害怕得要哭。我就小声地和护士说我女儿很勇敢，一点儿也不怕打针，女儿听了以后马上就不哭了。',py:'Jìde wǒ nǚ\'ér xiǎoshíhou, dài tā qù yīyuàn dǎ zhēn, gāng kāishǐ, tā hàipà de yào kū. Wǒ jiù xiǎoshēng de hé hùshi shuō wǒ nǚ\'ér hěn yǒnggǎn, yìdiǎnr yě bú pà dǎ zhēn, nǚ\'ér tīngle yǐhòu mǎshàng jiù bù kū le.',vn:'Nhớ hồi con gái tôi còn nhỏ, đưa đi tiêm, lúc đầu nó sợ đến sắp khóc. Tôi khẽ nói với y tá rằng con gái tôi rất dũng cảm, không sợ tiêm chút nào, con bé nghe xong lập tức nín.'},
     {sp:0,zh:'原来鼓励和表扬对小孩儿挺有用的，下次我也试试。',py:'Yuánlái gǔlì hé biǎoyáng duì xiǎoháir tǐng yǒuyòng de, xià cì wǒ yě shìshi.',vn:'Hóa ra khuyến khích và khen ngợi khá có ích với trẻ nhỏ, lần sau tôi cũng thử.'},
     {sp:1,zh:'不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。不仅起不到鼓励的作用，还可能让孩子怀疑自己的能力，变得没有信心。',py:'Búguò biǎoyáng yě shì yì mén yìshù, biǎoyáng qiānwàn búyào tài duō, guò duō de biǎoyáng kěnéng huì gěi háizi dàilái yālì. Bùjǐn qǐbudào gǔlì de zuòyòng, hái kěnéng ràng háizi huáiyí zìjǐ de nénglì, biàn de méiyǒu xìnxīn.',vn:'Nhưng khen ngợi cũng là một nghệ thuật, khen tuyệt đối đừng quá nhiều, khen quá nhiều có thể gây áp lực cho trẻ. Không những không có tác dụng khuyến khích, còn khiến trẻ nghi ngờ năng lực bản thân, mất tự tin.'},
     {sp:0,zh:'那怎么表扬孩子才会更有效果呢？',py:'Nà zěnme biǎoyáng háizi cái huì gèng yǒu xiàoguǒ ne?',vn:'Vậy khen trẻ thế nào mới hiệu quả hơn?'},
     {sp:1,zh:'我认为表扬要及时，而且表扬不仅仅要看结果，更要看过程，这样才能鼓励他的积极性，让他变得勇敢，不怕困难。',py:'Wǒ rènwéi biǎoyáng yào jíshí, érqiě biǎoyáng bù jǐnjǐn yào kàn jiéguǒ, gèng yào kàn guòchéng, zhèyàng cái néng gǔlì tā de jījíxìng, ràng tā biàn de yǒnggǎn, bú pà kùnnan.',vn:'Tôi cho rằng khen phải kịp thời, hơn nữa khen không chỉ nhìn kết quả, mà còn nhìn quá trình, như vậy mới khích lệ sự tích cực, khiến trẻ dũng cảm, không sợ khó khăn.'},
   ]},
  {scene:'课文4 · Khi trẻ cố tình gây chú ý',
   preQuiz:[{q:'为什么不应该为了解决问题而骗孩子？',opts:['因为儿童缺少判断能力，会学着说假话','因为孩子会哭','因为孩子不相信'],ans:0},{q:'有的孩子得不到想要的东西时会怎么做？',opts:['哭、扔东西或者故意敲打','安静地睡觉','自己去买'],ans:0},{q:'这种情况下，建议父母怎么做？',opts:['先不要生气，陪孩子聊聊天儿，弄清楚问题','马上批评孩子','不理孩子'],ans:0}],
   lines:[
     {sp:0,zh:'有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。',py:'Yǒude háizi zài débudào zìjǐ xiǎng yào de dōngxi de shíhou, huì tōngguò kū, rēng dōngxi huòzhě gùyì qiāodǎ lái yǐnqǐ fùmǔ de zhùyì.',vn:'Có đứa trẻ khi không được thứ mình muốn, sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ.'},
     {sp:0,zh:'在这种情况下，建议父母先不要生气，应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。父母的关心，可以让孩子心情愉快起来。',py:'Zài zhè zhǒng qíngkuàng xià, jiànyì fùmǔ xiān búyào shēng qì, yīnggāi tíngxià shǒu zhōng de shìqing, péi háizi zhěnglǐ zhěnglǐ dōngxi, hé tāmen liáoliao tiānr, nòng qīngchu tāmen de wèntí. Fùmǔ de guānxīn, kěyǐ ràng háizi xīnqíng yúkuài qilai.',vn:'Trong tình huống này, khuyên cha mẹ trước hết đừng giận, nên dừng việc đang làm, cùng con dọn dẹp, trò chuyện, làm rõ vấn đề của con. Sự quan tâm của cha mẹ có thể khiến tâm trạng trẻ vui lên.'},
     {sp:0,zh:'教育孩子应该选择合适的教育方法，最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。',py:'Jiàoyù háizi yīnggāi xuǎnzé héshì de jiàoyù fāngfǎ, zuìhǎo búyào wèile jiějué wèntí ér piàn háizi, zhè shì yīnwèi értóng quēshǎo pànduàn nénglì, kàndào fùmǔ piàn rén, tāmen yě huì xuézhe shuō jiǎhuà.',vn:'Giáo dục con nên chọn phương pháp thích hợp, tốt nhất đừng vì giải quyết vấn đề mà lừa con, vì trẻ thiếu năng lực phán đoán, thấy cha mẹ lừa người, chúng cũng học nói dối.'},
   ]},
  {scene:'课文5 · Dạy trẻ theo tính cách',
   preQuiz:[{q:'对性格害羞的孩子应该怎么做？',opts:['经常鼓励他说出自己的看法','不管他','批评他'],ans:0},{q:'七岁左右的儿童有什么特点？',opts:['好动，坐不住','很安静','喜欢读书'],ans:0},{q:'孩子不明白时，不应该怎么做？',opts:['用“懒”“笨”“粗心”批评他','鼓励他','再讲一遍'],ans:0}],
   lines:[
     {sp:0,zh:'七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。只有让他们觉得你教的内容有趣，他们才会愿意努力学习。',py:'Qī suì zuǒyòu de értóng pǔbiàn hào dòng, zuòbuzhù, suǒyǐ lǎoshī zài jiāo zhège niánlíng duàn de háizi shí, yídìng yào xiǎng bànfǎ yǐnqǐ tāmen de xìngqù. Zhǐyǒu ràng tāmen juéde nǐ jiāo de nèiróng yǒuqù, tāmen cái huì yuànyì nǔlì xuéxí.',vn:'Trẻ khoảng bảy tuổi thường hiếu động, không ngồi yên, nên giáo viên dạy lứa tuổi này nhất định phải nghĩ cách khơi dậy hứng thú. Chỉ khi trẻ thấy nội dung thú vị, chúng mới chịu nỗ lực học.'},
     {sp:0,zh:'当孩子不明白时，应该多鼓励他，不要用"懒""笨""粗心"这种词批评他，这样对他们的正常发展不好。',py:'Dāng háizi bù míngbai shí, yīnggāi duō gǔlì tā, búyào yòng "lǎn" "bèn" "cūxīn" zhè zhǒng cí pīpíng tā, zhèyàng duì tāmen de zhèngcháng fāzhǎn bù hǎo.',vn:'Khi trẻ không hiểu, nên khuyến khích nhiều hơn, đừng dùng những từ như "lười", "ngốc", "cẩu thả" phê bình, như vậy không tốt cho sự phát triển bình thường.'},
     {sp:0,zh:'而且，对不同性格的孩子要使用不同的教育方法。如果孩子比较骄傲，应该让他明白还有很多知识需要学习；要是孩子性格有些害羞，就要经常鼓励他说出自己的看法，这样才能让每一个孩子都健康地发展。',py:'Érqiě, duì bù tóng xìnggé de háizi yào shǐyòng bù tóng de jiàoyù fāngfǎ. Rúguǒ háizi bǐjiào jiāo\'ào, yīnggāi ràng tā míngbai hái yǒu hěn duō zhīshi xūyào xuéxí; yàoshi háizi xìnggé yǒuxiē hàixiū, jiù yào jīngcháng gǔlì tā shuōchū zìjǐ de kànfǎ, zhèyàng cái néng ràng měi yí ge háizi dōu jiànkāng de fāzhǎn.',vn:'Hơn nữa, với trẻ tính cách khác nhau phải dùng phương pháp khác nhau. Nếu trẻ khá kiêu ngạo, nên để nó hiểu còn nhiều kiến thức cần học; nếu trẻ nhút nhát, phải thường xuyên khuyến khích nói ra ý kiến, như vậy mới khiến mỗi trẻ phát triển lành mạnh.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'敲',right:'门'},
  {left:'闹钟',right:'响了'},
  {left:'整理',right:'房间'},
  {left:'管理',right:'时间'},
  {left:'护士',right:'给孩子打针'},
  {left:'说',right:'假话'},
  {left:'这件衣服大小',right:'很合适'},
  {left:'他不是故意的，',right:'你别生气了'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'A：你还记得那个新同事叫什么名字吗？ B：等一下……我',blank:'想起来',post:'她叫什么了，她姓王。',hint:'(nhớ ra)',ans:'想起来',exp:'想起来 = nhớ ra điều đã quên; 想出来 = nghĩ ra cái mới (办法、主意).'},
  {pre:'对不起，我把你的书',blank:'弄',post:'脏了。',hint:'(làm)',ans:'弄',exp:'弄 thay cho động từ cụ thể trong khẩu ngữ, thường kèm kết quả: 弄脏 (làm bẩn), 弄坏 (làm hỏng), 弄清楚.'},
  {pre:'邻居家的孩子一直敲桌子，',blank:'弄',post:'得我睡不着。',hint:'(làm cho)',ans:'弄',exp:'弄得 + người + kết quả = làm cho ai đó …: 弄得我睡不着 (khiến tôi không ngủ được).'},
  {pre:'路上车多，过马路的时候你',blank:'千万',post:'要小心！',hint:'(nhất thiết, tuyệt đối)',ans:'千万',exp:'千万 dùng khi dặn dò người khác, đi với 要/别/不要: 千万要小心, 千万别迟到.'},
  {pre:'A：明天的会议很重要，你千万别迟到啊！ B：放心，我',blank:'一定',post:'准时到。',hint:'(nhất định)',ans:'一定',exp:'Nói quyết tâm của chính mình → 一定; 千万 chỉ dùng để dặn người khác, không nói 我千万准时到.'},
  {pre:'A：这么多碗，要洗到什么时候啊？ B：你去休息吧，我',blank:'来',post:'洗。',hint:'(để tôi)',ans:'来',exp:'我来 + V = để tôi làm (chủ động nhận việc); 来 đứng trước động từ chính.'},
  {pre:'我们可以用做游戏的方法',blank:'来',post:'提高儿童学习的兴趣。',hint:'(để)',ans:'来',exp:'用/通过 A 来 B = dùng A để làm B: 用做游戏的方法来提高兴趣.'},
  {pre:'从我家到公司，开车要二十分钟',blank:'左右',post:'。',hint:'(khoảng)',ans:'左右',exp:'左右 đứng SAU số lượng: 二十分钟左右; 大约/差不多 đứng TRƯỚC: 大约二十分钟.'},
  {pre:'A：你儿子今天怎么这么高兴？ B：老师在班上',blank:'表扬',post:'他了，说他作业写得很认真。',hint:'(khen ngợi)',ans:'表扬',exp:'表扬 + người = khen ai (trước mọi người); trái nghĩa 批评.'},
  {pre:'他说他一个人做完了所有的工作，我有点儿',blank:'怀疑',post:'。',hint:'(nghi ngờ)',ans:'怀疑',exp:'怀疑 = nghi ngờ, không tin hẳn; có thể mang tân ngữ: 怀疑他的话.'},
  {pre:'我不会',blank:'骗',post:'你的，我说的都是真的。',hint:'(lừa)',ans:'骗',exp:'骗 + người = lừa ai; 骗人 = lừa người khác. Trái với 说真话.'},
  {pre:'这次考试成绩好也别',blank:'骄傲',post:'，下次还要努力。',hint:'(kiêu ngạo)',ans:'骄傲',exp:'骄傲 ở đây là kiêu ngạo (nghĩa xấu); 为……骄傲 lại là tự hào: 为父母骄傲.'},
  {pre:'电影马上开始了，我得先去一下',blank:'厕所',post:'。',hint:'(nhà vệ sinh)',ans:'厕所',exp:'厕所 = nhà vệ sinh (khẩu ngữ, nơi công cộng); 卫生间 (Bài 14) lịch sự hơn: 去厕所 / 上厕所.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['闹钟','响','了','三次','，','他','才','醒','。'],ans:'闹钟响了三次，他才醒。',audio:'闹钟响了三次，他才醒。'},
  {words:['今年','寒假','我','打算','带','孩子','回','老家','看看','。'],ans:'今年寒假我打算带孩子回老家看看。',audio:'今年寒假我打算带孩子回老家看看。',alt:['我今年寒假打算带孩子回老家看看。']},
  {words:['听说','你','父亲','弹钢琴','特别','棒','，','是','真的','吗','？'],ans:'听说你父亲弹钢琴特别棒，是真的吗？',audio:'听说你父亲弹钢琴特别棒，是真的吗？'},
  {words:['这个','电影','适合','十岁','左右','的','儿童','看','。'],ans:'这个电影适合十岁左右的儿童看。',audio:'这个电影适合十岁左右的儿童看。'},
  {words:['别','总是','批评','孩子','懒','，','要','多','鼓励','他','。'],ans:'别总是批评孩子懒，要多鼓励他。',audio:'别总是批评孩子懒，要多鼓励他。'},
  {words:['我','不是','故意','弄坏','你','的','杯子','的','。'],ans:'我不是故意弄坏你的杯子的。',audio:'我不是故意弄坏你的杯子的。'},
  {words:['快','点儿','吧','，','我们','要','赶','最后','一','班','地铁','。'],ans:'快点儿吧，我们要赶最后一班地铁。',audio:'快点儿吧，我们要赶最后一班地铁。'},
  {words:['小孙子','第一次','见','我','，','害羞','得','不','说话','。'],ans:'小孙子第一次见我，害羞得不说话。',audio:'小孙子第一次见我，害羞得不说话。'},
  {words:['谁','说','你','笨','？','你','只是','还','没','找到','好','方法','。'],ans:'谁说你笨？你只是还没找到好方法。',audio:'谁说你笨？你只是还没找到好方法。'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'已经放____了，去打球的人肯定不多，星期天我们去学校的体育馆打网球吧。',
   opts:['粗心','寒假','表扬','批评'],ans:1,
   exp:'寒假 (kỳ nghỉ đông) — 放寒假. Câu có 肯定 (Bài 5), 网球 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'这些只有三分之一吧，还有很多东西没来得及____呢，下周再搬。',
   opts:['粗心','表扬','整理','批评'],ans:2,
   exp:'整理 (dọn dẹp) — 整理东西. Câu có 分之 (Bài 6), 来得及 (Bài 11). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'如果遇到不得不____别人的时候，态度要友好一点儿，不要让别人听了心里不舒服。',
   opts:['寒假','整理','批评','表扬'],ans:2,
   exp:'批评 (phê bình) — 批评别人 khiến người ta khó chịu. Câu có 不得不 (Bài 4), 态度 (Bài 8), 友好 (Bài 12). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'他的优点是有礼貌、诚实，能吃苦，就是太____了，不适合我们这儿的工作。',
   opts:['粗心','寒假','整理','批评'],ans:0,
   exp:'粗心 (cẩu thả) — 太粗心了. Câu có 优点 (Bài 5), 诚实 (Bài 3), 吃苦 (Bài 13). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'孩子在受到____时，往往会对自己更有信心，对学习的兴趣也会更大，成绩当然会提高。',
   opts:['粗心','表扬','整理','寒假'],ans:1,
   exp:'表扬 (khen ngợi) — 受到表扬. Câu có 受到 (Bài 5), 往往 (Bài 8), 信心 (Bài 3). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：因为那件事，她特别生我的气。B：放心吧，你也不是____的，去跟她解释一下，她会理解的。',
   opts:['响','管理','故意','赶'],ans:2,
   exp:'故意 (cố ý) — 不是故意的. Câu có 生气, 解释 (Bài 12), 理解 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你妹妹很可爱，但是好像不太爱说话。B：她只是有点儿____，等跟大家熟悉了就好了。',
   opts:['响','管理','害羞','赶'],ans:2,
   exp:'害羞 (nhút nhát) — 有点儿害羞. Câu có 好像 (Bài 2), 只是, 熟悉 (Bài 1). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：这次大学同学聚会你联系得怎么样了？能来多少人？B：大约有一半吧，李进还专门从国外____回来呢。',
   opts:['响','害羞','故意','赶'],ans:3,
   exp:'赶 (vội về kịp) — 赶回来. Câu có 聚会 (Bài 2), 联系 (Bài 2), 大约 (Bài 13), 专门 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：桌子上那个一直在____的手机是谁的？可能找他有什么急事。B：那是张经理的，他在会议室开会呢，你快把手机给他拿过去吧。',
   opts:['响','管理','故意','害羞'],ans:0,
   exp:'响 (reo) — 一直在响的手机. Câu có 一直, câu chữ 把. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：听说昨天那个招聘会提供了很多工作机会，你找到合适的公司了吗？B：这个招聘会主要是为经济和____专业的学生举办的，所以没几个合适的。',
   opts:['害羞','管理','故意','赶'],ans:1,
   exp:'管理 (quản lý) — 管理专业. Câu có 招聘 (Bài 3), 提供 (Bài 3), 经济 (Bài 10), 举办 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật, nói về chính bạn bằng từ và mẫu câu của Bài 15. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Một người bạn lần đầu đến thành phố của bạn, bạn dặn dò họ.',
      q_zh: '朋友第一次来你的城市，你会提醒他什么？',
      q_py: 'Péngyou dì yī cì lái nǐ de chéngshì, nǐ huì tíxǐng tā shénme?',
      q_vn: 'Bạn bè lần đầu đến thành phố của bạn, bạn sẽ nhắc họ điều gì?',
      grammar: { label: '千万 + 要/别 (nhất thiết / tuyệt đối đừng)', any: ['千万'] },
      need: [
        { label: 'Dùng 千万要 hoặc 千万别', any: ['千万要', '千万别', '千万不要'] },
        { label: 'Nói lời nhắc cụ thể', any: ['伞', '小心', '下雨', '假', '车', '晚上'] }
      ],
      bonus: { label: 'Dùng 假 hoặc 骗', any: ['假', '骗'] },
      vocab: ['千万', '假', '骗'],
      minLen: 20,
      sample: '我们这儿经常下雨，你千万别忘记带伞。买东西的时候也要小心，有的东西是假的，千万别被骗了。',
      sample_py: 'Wǒmen zhèr jīngcháng xià yǔ, nǐ qiānwàn bié wàngjì dài sǎn. Mǎi dōngxi de shíhou yě yào xiǎoxīn, yǒu de dōngxi shì jiǎ de, qiānwàn bié bèi piàn le.',
      sample_vn: 'Chỗ chúng tôi hay mưa, bạn tuyệt đối đừng quên mang ô. Mua đồ cũng phải cẩn thận, có đồ là đồ giả, đừng để bị lừa nhé.',
      tip: '千万 chỉ dùng khi dặn người khác; nói về bản thân thì dùng 一定: 我一定去.'
    },
    {
      situation: 'Bạn kể về buổi sáng thường ngày của mình.',
      q_zh: '你早上一般几点起床？做些什么？',
      q_py: 'Nǐ zǎoshang yìbān jǐ diǎn qǐchuáng? Zuò xiē shénme?',
      q_vn: 'Buổi sáng bạn thường dậy lúc mấy giờ? Làm những gì?',
      grammar: { label: 'Số lượng + 左右 (khoảng)', any: ['左右'] },
      need: [
        { label: 'Dùng 左右 sau thời gian/số lượng', any: ['左右'] },
        { label: 'Dùng 闹钟 hoặc 醒', any: ['闹钟', '醒'] }
      ],
      bonus: { label: 'Dùng 整理 hoặc 赶', any: ['整理', '赶'] },
      vocab: ['左右', '闹钟', '醒', '整理'],
      minLen: 20,
      sample: '我每天六点半左右起床。闹钟响了以后我一般不能马上醒，还要再躺五分钟左右。起床以后我先整理房间，再吃早饭。',
      sample_py: 'Wǒ měi tiān liù diǎn bàn zuǒyòu qǐchuáng. Nàozhōng xiǎng le yǐhòu wǒ yìbān bù néng mǎshàng xǐng, hái yào zài tǎng wǔ fēnzhōng zuǒyòu. Qǐchuáng yǐhòu wǒ xiān zhěnglǐ fángjiān, zài chī zǎofàn.',
      sample_vn: 'Mỗi ngày tôi dậy khoảng sáu rưỡi. Báo thức reo xong tôi thường không tỉnh ngay được, còn nằm thêm khoảng năm phút. Dậy rồi tôi dọn phòng trước, sau đó ăn sáng.',
      tip: '左右 đứng sau con số: 六点半左右, 五分钟左右; không nói 左右六点.'
    },
    {
      situation: 'Bạn bè kể chuyện tuổi thơ, đến lượt bạn.',
      q_zh: '说一说你小时候学过的一样东西。',
      q_py: 'Shuō yi shuō nǐ xiǎoshíhou xué guo de yí yàng dōngxi.',
      q_vn: 'Hãy kể về một thứ bạn từng học hồi nhỏ.',
      grammar: { label: '想起来 (nhớ ra / nhớ lại)', any: ['想起来', '想起'] },
      need: [
        { label: 'Dùng 想起来', any: ['想起来', '想起'] },
        { label: 'Kể việc đã học', any: ['弹钢琴', '游泳', '画', '跳舞', '唱歌', '汉字'] }
      ],
      bonus: { label: 'Dùng 懒 hoặc 批评', any: ['懒', '批评'] },
      vocab: ['想起来', '弹钢琴', '懒', '批评'],
      minLen: 22,
      sample: '一说到小时候，我就想起来学弹钢琴的事。那时候我很懒，不想练习，父亲就批评我。现在想起来，我真应该感谢他。',
      sample_py: 'Yì shuō dào xiǎoshíhou, wǒ jiù xiǎng qilai xué tán gāngqín de shì. Nà shíhou wǒ hěn lǎn, bù xiǎng liànxí, fùqīn jiù pīpíng wǒ. Xiànzài xiǎng qilai, wǒ zhēn yīnggāi gǎnxiè tā.',
      sample_vn: 'Cứ nói đến hồi nhỏ là tôi lại nhớ ra chuyện học đàn piano. Hồi đó tôi rất lười, không muốn tập, bố liền phê bình tôi. Bây giờ nhớ lại, tôi thật nên cảm ơn bố.',
      tip: '想起来 = nhớ ra điều đã quên; 现在想起来 = giờ nghĩ lại.'
    },
    {
      situation: 'Bạn cùng lớp hỏi bí quyết học từ mới của bạn.',
      q_zh: '你用什么方法来学汉字？',
      q_py: 'Nǐ yòng shénme fāngfǎ lái xué Hànzì?',
      q_vn: 'Bạn dùng cách gì để học chữ Hán?',
      grammar: { label: '用 A 来 B (dùng A để B)', any: ['来'] },
      need: [
        { label: 'Dùng 用……来……', any: ['用'] },
        { label: 'Nói cách học cụ thể', any: ['句子', '写', '手机', '游戏', '电影', '每天'] }
      ],
      bonus: { label: 'Dùng 左右 hoặc 合适', any: ['左右', '合适'] },
      vocab: ['来', '合适', '左右'],
      minLen: 22,
      sample: '我一般用写句子的方法来学汉字，每学一个新的汉字，就用它写两个句子。我也用手机上的游戏来复习，每天玩儿十分钟左右。',
      sample_py: 'Wǒ yìbān yòng xiě jùzi de fāngfǎ lái xué Hànzì, měi xué yí ge xīn de Hànzì, jiù yòng tā xiě liǎng ge jùzi. Wǒ yě yòng shǒujī shang de yóuxì lái fùxí, měi tiān wánr shí fēnzhōng zuǒyòu.',
      sample_vn: 'Tôi thường dùng cách viết câu để học chữ Hán, mỗi lần học một chữ mới thì dùng nó viết hai câu. Tôi cũng dùng trò chơi trên điện thoại để ôn, mỗi ngày chơi khoảng mười phút.',
      tip: '用 A 来 B: A là cách/công cụ, B là mục đích; 来 có thể lược bỏ nhưng thêm vào câu tự nhiên hơn.'
    },
    {
      situation: 'Bạn kể một lần làm hỏng đồ của người khác.',
      q_zh: '你有没有弄坏过别人的东西？后来怎么样了？',
      q_py: 'Nǐ yǒu méiyǒu nòng huài guo biéren de dōngxi? Hòulái zěnmeyàng le?',
      q_vn: 'Bạn đã từng làm hỏng đồ của người khác chưa? Sau đó thế nào?',
      grammar: { label: '弄 + kết quả (弄坏 / 弄脏 …)', any: ['弄'] },
      need: [
        { label: 'Dùng 弄坏 / 弄脏 / 弄丢', any: ['弄坏', '弄脏', '弄丢'] },
        { label: 'Kể phản ứng của người kia', any: ['批评', '生气', '没关系', '原谅', '表扬'] }
      ],
      bonus: { label: 'Dùng 故意', any: ['故意'] },
      vocab: ['弄', '故意', '批评'],
      minLen: 22,
      sample: '有一次我把妈妈的手机弄坏了，我很害怕。我跟妈妈说我不是故意的，妈妈没有批评我，只是让我以后小心一点儿。',
      sample_py: 'Yǒu yí cì wǒ bǎ māma de shǒujī nòng huài le, wǒ hěn hàipà. Wǒ gēn māma shuō wǒ bú shì gùyì de, māma méiyǒu pīpíng wǒ, zhǐshì ràng wǒ yǐhòu xiǎoxīn yìdiǎnr.',
      sample_vn: 'Có lần tôi làm hỏng điện thoại của mẹ, tôi rất sợ. Tôi nói với mẹ là con không cố ý, mẹ không phê bình tôi, chỉ bảo sau này cẩn thận hơn.',
      tip: '弄 + bổ ngữ kết quả: 弄坏, 弄脏, 弄丢; câu chữ 把: 把手机弄坏了.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chuyện này tuyệt đối đừng nói với mẹ tôi.', zh:'这件事千万别告诉我妈妈。', py:'Zhè jiàn shì qiānwàn bié gàosu wǒ māma.'},
  {vi:'Để tôi giới thiệu với mọi người đồng nghiệp mới của tôi.', zh:'我来给大家介绍一下我的新同事。', py:'Wǒ lái gěi dàjiā jièshào yíxià wǒ de xīn tóngshì.'},
  {vi:'Tôi chợt nhớ ra hôm nay là sinh nhật mẹ.', zh:'我突然想起来今天是妈妈的生日。', py:'Wǒ tūrán xiǎng qilai jīntiān shì māma de shēngrì.'},
  {vi:'Cô y tá đó rất kiên nhẫn với trẻ con.', zh:'那个护士对孩子很有耐心。', py:'Nàge hùshi duì háizi hěn yǒu nàixīn.'},
  {vi:'Đồ giả tuy rẻ nhưng chất lượng không tốt.', zh:'假的东西虽然便宜，但是质量不好。', py:'Jiǎ de dōngxi suīrán piányi, dànshì zhìliàng bù hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cái quần này hơi dài, không vừa lắm.', zh:'这条裤子有点儿长，不太合适。', py:'Zhè tiáo kùzi yǒudiǎnr cháng, bú tài héshì.'},
  {vi:'Bạn đừng sốt ruột, chúng ta cùng nghĩ cách.', zh:'你别着急，我们来想想办法。', py:'Nǐ bié zháojí, wǒmen lái xiǎngxiang bànfǎ.'},
  {vi:'Lời khen của bố mẹ có thể khiến con cái tự tin hơn.', zh:'父母的表扬能让孩子更有信心。', py:'Fùmǔ de biǎoyáng néng ràng háizi gèng yǒu xìnxīn.'},
  {vi:'Lúc làm bài thi anh ấy quá cẩu thả, viết sai mấy chữ liền.', zh:'他考试的时候太粗心了，写错了好几个字。', py:'Tā kǎoshì de shíhou tài cūxīn le, xiě cuò le hǎo jǐ ge zì.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-15/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-15/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-15/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'他做事比过去仔细了。', judge:true, lines:[
      {pre:'经历过那次失败后，他改变了许多，', blank:'不再像以前那么粗心了', post:'，大家都说他现在做事仔细多了。',
       py:'Jīnglìguo nà cì shībài hòu, tā gǎibiànle xǔduō, bú zài xiàng yǐqián nàme cūxīn le, dàjiā dōu shuō tā xiànzài zuòshì zǐxì duō le.',
       vn:'Sau lần thất bại đó, anh ấy thay đổi nhiều, không còn cẩu thả như trước nữa, mọi người đều nói giờ anh ấy làm việc cẩn thận hơn nhiều.'}]},
    {num:2, stmt:'沙发上的袜子是旧的。', judge:false, lines:[
      {pre:'你的那双袜子破了，我把它扔掉了。', blank:'我给你买了一双新的，放在沙发上了', post:'，你试一下，看看合适不合适。',
       py:'Nǐ de nà shuāng wàzi pò le, wǒ bǎ tā rēngdiào le. Wǒ gěi nǐ mǎile yì shuāng xīn de, fàng zài shāfā shang le, nǐ shì yíxià, kànkan héshì bu héshì.',
       vn:'Đôi tất kia của anh rách rồi, em vứt đi rồi. Em mua cho anh một đôi mới, để trên sofa, anh thử xem có vừa không.'}]},
    {num:3, stmt:'他今天六点就起床了。', judge:false, lines:[
      {pre:'昨天晚上我一直工作到很晚才睡，', blank:'结果今天早上手机响我完全没听到', post:'，醒的时候已经九点了。',
       py:'Zuótiān wǎnshang wǒ yìzhí gōngzuò dào hěn wǎn cái shuì, jiéguǒ jīntiān zǎoshang shǒujī xiǎng wǒ wánquán méi tīngdào, xǐng de shíhou yǐjīng jiǔ diǎn le.',
       vn:'Tối qua tôi làm việc đến rất khuya mới ngủ, kết quả sáng nay điện thoại reo tôi hoàn toàn không nghe thấy, lúc tỉnh dậy đã chín giờ.'}]},
    {num:4, stmt:'孩子更容易获得快乐。', judge:true, lines:[
      {pre:'大人有时会羡慕孩子，', blank:'因为孩子的世界没有那么复杂', post:'，所以他们总是很快乐。同时，孩子也是最诚实的，不会怀疑别人，更不会去骗人。',
       py:'Dàren yǒushí huì xiànmù háizi, yīnwèi háizi de shìjiè méiyǒu nàme fùzá, suǒyǐ tāmen zǒngshì hěn kuàilè. Tóngshí, háizi yě shì zuì chéngshí de, bú huì huáiyí biérén, gèng bú huì qù piàn rén.',
       vn:'Người lớn đôi khi ngưỡng mộ trẻ con, vì thế giới của trẻ không phức tạp như vậy nên chúng luôn rất vui vẻ. Đồng thời, trẻ con cũng thật thà nhất, không nghi ngờ người khác, càng không lừa ai.'}]},
    {num:5, stmt:'父母对孩子要讲信用。', judge:true, lines:[
      {pre:'父母对孩子必须做到言而有信，', blank:'一定要说到做到', post:'。如果实在做不到，就应向孩子说对不起，并解释原因，否则孩子会认为你在骗他。',
       py:'Fùmǔ duì háizi bìxū zuòdào yán ér yǒu xìn, yídìng yào shuōdào zuòdào. Rúguǒ shízài zuòbudào, jiù yīng xiàng háizi shuō duìbuqǐ, bìng jiěshì yuányīn, fǒuzé háizi huì rènwéi nǐ zài piàn tā.',
       vn:'Cha mẹ với con cái phải giữ lời, nói là phải làm. Nếu thật sự không làm được thì nên xin lỗi con và giải thích lý do, nếu không con sẽ nghĩ bạn đang lừa nó.'}]}
  ],
  mc: [
    {num:6, options:['饿了','困了','累了','病了'], ans:3, q:'男的怎么了？',
     lines:[
       {speaker:'女', pre:'你怎么', blank:'咳嗽得越来越厉害了', post:'？吃药了吗？', py:'Nǐ zěnme késou de yuè lái yuè lìhai le? Chī yào le ma?', vn:'Sao anh ho ngày càng nặng thế? Uống thuốc chưa?'},
       {speaker:'男', pre:'吃了，好像不太管用，', blank:'我明天还是去医院打针吧', post:'。', py:'Chī le, hǎoxiàng bú tài guǎnyòng, wǒ míngtiān háishi qù yīyuàn dǎzhēn ba.', vn:'Uống rồi, hình như không hiệu quả lắm, mai anh đi bệnh viện tiêm vậy.'}
     ],
     explain:'问：男的怎么了？ Ho nặng, uống thuốc, đi tiêm → D 病了.'},
    {num:7, options:['力气很大','调查完了','拒绝帮助','在搬东西'], ans:3, q:'关于女的，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'我发现', blank:'你的东西没多少啊', post:'。', py:'Wǒ fāxiàn nǐ de dōngxi méi duōshao a.', vn:'Tôi thấy đồ của cậu chẳng có bao nhiêu.'},
       {speaker:'女', pre:'这些只是三分之一，', blank:'还有很多还没来得及整理呢', post:'，下周再搬。', py:'Zhèxiē zhǐshì sān fēn zhī yī, hái yǒu hěn duō hái méi láidejí zhěnglǐ ne, xià zhōu zài bān.', vn:'Đây mới là một phần ba, còn nhiều thứ chưa kịp thu dọn, tuần sau chuyển tiếp.'}
     ],
     explain:'问：关于女的，下列哪个正确？ "还没来得及整理…下周再搬" → cô ấy đang chuyển đồ, đáp án D 在搬东西.'},
    {num:8, options:['护士','教师','经理','服务员'], ans:1, q:'男的最可能是做什么的？',
     lines:[
       {speaker:'女', pre:'如果再让我来选择一次，肯定不选现在的工作。', blank:'真羡慕你每年都有一个寒假和一个暑假', post:'。', py:'Rúguǒ zài ràng wǒ lái xuǎnzé yí cì, kěndìng bù xuǎn xiànzài de gōngzuò. Zhēn xiànmù nǐ měi nián dōu yǒu yí ge hánjià hé yí ge shǔjià.', vn:'Nếu được chọn lại lần nữa, chắc chắn tôi không chọn công việc hiện tại. Thật ngưỡng mộ anh mỗi năm có một kỳ nghỉ đông và một kỳ nghỉ hè.'},
       {speaker:'男', pre:'我当时选择这个职业时可没考虑这个，', blank:'只是因为喜欢和孩子们在一起', post:'。', py:'Wǒ dāngshí xuǎnzé zhège zhíyè shí kě méi kǎolǜ zhège, zhǐshì yīnwèi xǐhuan hé háizimen zài yìqǐ.', vn:'Lúc chọn nghề này tôi chẳng nghĩ đến điều đó, chỉ vì thích ở cùng bọn trẻ.'}
     ],
     explain:'问：男的最可能是做什么的？ Có nghỉ đông, nghỉ hè và "喜欢和孩子们在一起" → B 教师.'},
    {num:9, options:['60元','70元','30元','免费'], ans:0, q:'男的的票多少钱一张？',
     lines:[
       {speaker:'男', pre:'小姐，', blank:'请问多少钱一张票', post:'？', py:'Xiǎojiě, qǐngwèn duōshao qián yì zhāng piào?', vn:'Cô ơi, xin hỏi bao nhiêu tiền một vé?'},
       {speaker:'女', pre:'您好，', blank:'您的六十', post:'，70岁以上老人免费，您孩子买儿童票，半价。', py:'Nín hǎo, nín de liùshí, qīshí suì yǐshàng lǎorén miǎnfèi, nín háizi mǎi értóng piào, bànjià.', vn:'Chào anh, vé của anh sáu mươi, người già trên 70 tuổi miễn phí, con anh mua vé trẻ em, nửa giá.'}
     ],
     explain:'问：男的的票多少钱一张？ "您的六十" → A 60元. 30 là vé trẻ em, 70 là tuổi miễn phí — bẫy số liệu.'},
    {num:10, options:['迟到了','发烧了','眼睛疼','口渴了'], ans:2, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'你真是太懒了，', blank:'再不起床就要迟到了', post:'。', py:'Nǐ zhēn shì tài lǎn le, zài bù qǐchuáng jiù yào chídào le.', vn:'Em lười quá đi, không dậy nữa là muộn đấy.'},
       {speaker:'女', pre:'', blank:'我眼睛有点儿疼', post:'，让我再躺一会儿吧。', py:'Wǒ yǎnjing yǒudiǎnr téng, ràng wǒ zài tǎng yíhuìr ba.', vn:'Mắt em hơi đau, cho em nằm thêm một lát.'}
     ],
     explain:'问：女的怎么了？ "我眼睛有点儿疼" → C 眼睛疼. A sai vì mới "要迟到" (sắp), chưa muộn.'},
    {num:11, options:['教育','艺术','科学','自然'], ans:0, q:'他们在谈论什么？',
     lines:[
       {speaker:'男', pre:'很多学者认为，', blank:'父母应该经常表扬孩子，鼓励他们', post:'。', py:'Hěn duō xuézhě rènwéi, fùmǔ yīnggāi jīngcháng biǎoyáng háizi, gǔlì tāmen.', vn:'Nhiều học giả cho rằng cha mẹ nên thường xuyên khen ngợi, khích lệ con cái.'},
       {speaker:'女', pre:'没错，', blank:'批评对孩子的发展没什么好处', post:'。', py:'Méi cuò, pīpíng duì háizi de fāzhǎn méi shénme hǎochù.', vn:'Đúng vậy, phê bình chẳng có lợi gì cho sự phát triển của trẻ.'}
     ],
     explain:'问：他们在谈论什么？ Nói về 表扬/批评 con cái → A 教育.'},
    {num:12, options:['伤心','粗心','害羞','病了'], ans:2, q:'王教授的孙女今天怎么了？',
     lines:[
       {speaker:'男', pre:'王教授，您的小孙女真可爱，', blank:'但是好像不太爱说话', post:'。', py:'Wáng jiàoshòu, nín de xiǎo sūnnǚ zhēn kě\'ài, dànshì hǎoxiàng bú tài ài shuōhuà.', vn:'Giáo sư Vương, cháu gái nhỏ của bà thật đáng yêu, nhưng hình như không thích nói chuyện lắm.'},
       {speaker:'女', pre:'也许是因为第一次跟你见面，还不太熟，', blank:'有些害羞', post:'。她平时不是这样的，话特别多。', py:'Yěxǔ shì yīnwèi dì-yī cì gēn nǐ jiànmiàn, hái bú tài shú, yǒuxiē hàixiū. Tā píngshí bú shì zhèyàng de, huà tèbié duō.', vn:'Có lẽ vì lần đầu gặp cậu, chưa quen nên hơi ngại. Bình thường nó không thế đâu, nói nhiều lắm.'}
     ],
     explain:'问：王教授的孙女今天怎么了？ "有些害羞" → C 害羞.'},
    {num:13, options:['会跳舞','羡慕女的','从小弹钢琴','喜欢打篮球'], ans:2, q:'关于男的，下列哪个正确？',
     lines:[
       {speaker:'女', pre:'没想到', blank:'你钢琴弹得这么好', post:'，真让人羡慕。', py:'Méi xiǎngdào nǐ gāngqín tán de zhème hǎo, zhēn ràng rén xiànmù.', vn:'Không ngờ anh chơi piano giỏi thế, thật đáng ngưỡng mộ.'},
       {speaker:'男', pre:'', blank:'我从六岁开始学', post:'，养成了每天练琴的习惯。', py:'Wǒ cóng liù suì kāishǐ xué, yǎngchéngle měi tiān liàn qín de xíguàn.', vn:'Tôi học từ năm sáu tuổi, tạo được thói quen luyện đàn mỗi ngày.'},
       {speaker:'女', pre:'', blank:'一开始学琴的时候很苦', post:'吧？', py:'Yì kāishǐ xué qín de shíhou hěn kǔ ba?', vn:'Lúc mới học đàn chắc khổ lắm nhỉ?'},
       {speaker:'男', pre:'是，万事开头难，', blank:'后来慢慢就好了', post:'。', py:'Shì, wànshì kāitóu nán, hòulái mànman jiù hǎo le.', vn:'Ừ, vạn sự khởi đầu nan, sau dần dần ổn.'}
     ],
     explain:'问：关于男的，下列哪个正确？ "我从六岁开始学（钢琴）" → C 从小弹钢琴. B ngược: người nữ ngưỡng mộ anh ấy.'},
    {num:14, options:['一个月了','喜欢照相','在叫爸妈','刚会说话'], ans:3, q:'关于张阿姨的孙子，可以知道什么？',
     lines:[
       {speaker:'男', pre:'张阿姨，', blank:'这是您孙子的照片', post:'？', py:'Zhāng āyí, zhè shì nín sūnzi de zhàopiàn?', vn:'Dì Trương, đây là ảnh cháu trai dì à?'},
       {speaker:'女', pre:'对，这是他刚一个月时的照片，', blank:'现在一岁零四个月了', post:'。', py:'Duì, zhè shì tā gāng yí ge yuè shí de zhàopiàn, xiànzài yí suì líng sì ge yuè le.', vn:'Đúng, đây là ảnh lúc nó mới một tháng, giờ được một tuổi bốn tháng rồi.'},
       {speaker:'男', pre:'真可爱，', blank:'会说话了吗', post:'？', py:'Zhēn kě\'ài, huì shuōhuà le ma?', vn:'Đáng yêu thật, biết nói chưa?'},
       {speaker:'女', pre:'会叫爸爸妈妈了，', blank:'也能说一些简单的词', post:'。', py:'Huì jiào bàba māma le, yě néng shuō yìxiē jiǎndān de cí.', vn:'Biết gọi bố mẹ rồi, cũng nói được vài từ đơn giản.'}
     ],
     explain:'问：关于张阿姨的孙子，可以知道什么？ "会叫爸爸妈妈了，也能说一些简单的词" → D 刚会说话. A sai: ảnh chụp lúc một tháng, giờ đã 1 tuổi 4 tháng.'},
    {num:15, options:['开车很快','去机场接人','担心时间不够','已经迟到了'], ans:2, q:'关于女的，可以知道什么？',
     lines:[
       {speaker:'女', pre:'师傅，去机场。我赶飞机，', blank:'麻烦您开快点儿', post:'。', py:'Shīfu, qù jīchǎng. Wǒ gǎn fēijī, máfan nín kāi kuài diǎnr.', vn:'Bác tài, đi sân bay. Tôi phải kịp chuyến bay, phiền bác lái nhanh chút.'},
       {speaker:'男', pre:'好的，', blank:'您几点的飞机', post:'？', py:'Hǎo de, nín jǐ diǎn de fēijī?', vn:'Được, chuyến bay mấy giờ vậy?'},
       {speaker:'女', pre:'两点，', blank:'来得及吗', post:'？', py:'Liǎng diǎn, láidejí ma?', vn:'Hai giờ, kịp không?'},
       {speaker:'男', pre:'没问题，', blank:'保证一点之前就把您送到', post:'。', py:'Méi wèntí, bǎozhèng yì diǎn zhīqián jiù bǎ nín sòngdào.', vn:'Không vấn đề, đảm bảo trước một giờ đưa chị đến nơi.'}
     ],
     explain:'问：关于女的，可以知道什么？ "麻烦您开快点儿…来得及吗" → C 担心时间不够. B sai: cô ấy đi máy bay, không phải đón người.'},
    {num:16, options:['很懒','工作没做完','提前回家了','正在谈生意'], ans:2, q:'关于男的，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'喂，你在哪儿？我敲了半天门，', blank:'怎么没人在家', post:'？', py:'Wèi, nǐ zài nǎr? Wǒ qiāole bàntiān mén, zěnme méi rén zài jiā?', vn:'Alô, em ở đâu? Anh gõ cửa mãi, sao không có ai ở nhà?'},
       {speaker:'女', pre:'我和孩子在花园里玩儿呢，', blank:'你不是说要到九点才回来吗', post:'？', py:'Wǒ hé háizi zài huāyuán li wánr ne, nǐ bú shì shuō yào dào jiǔ diǎn cái huílai ma?', vn:'Em và con đang chơi trong vườn hoa, anh chẳng phải nói chín giờ mới về sao?'},
       {speaker:'男', pre:'', blank:'工作提前做完了', post:'。你们什么时候回来？', py:'Gōngzuò tíqián zuòwán le. Nǐmen shénme shíhou huílai?', vn:'Công việc xong sớm. Hai mẹ con bao giờ về?'},
       {speaker:'女', pre:'这就回去，', blank:'你再等一会儿', post:'。', py:'Zhè jiù huíqu, nǐ zài děng yíhuìr.', vn:'Về ngay đây, anh đợi một lát.'}
     ],
     explain:'问：关于男的，下列哪个正确？ "工作提前做完了" nên về trước chín giờ → C 提前回家了.'},
    {num:17, options:['脏了','丢了','掉色了','被女的扔了'], ans:0, q:'那件衬衫怎么了？',
     lines:[
       {speaker:'女', pre:'', blank:'你的衬衫怎么了', post:'？', py:'Nǐ de chènshān zěnme le?', vn:'Áo sơ mi của anh sao thế?'},
       {speaker:'男', pre:'喝咖啡时', blank:'不小心弄脏了', post:'。', py:'Hē kāfēi shí bù xiǎoxīn nòngzāng le.', vn:'Lúc uống cà phê không cẩn thận làm bẩn rồi.'},
       {speaker:'女', pre:'我正好要洗衣服，', blank:'你脱下来一起洗了吧', post:'。', py:'Wǒ zhènghǎo yào xǐ yīfu, nǐ tuō xiàlai yìqǐ xǐ le ba.', vn:'Em đang định giặt đồ, anh cởi ra giặt luôn nhé.'},
       {speaker:'男', pre:'', blank:'好的', post:'。', py:'Hǎo de.', vn:'Được.'}
     ],
     explain:'问：那件衬衫怎么了？ "不小心弄脏了" → A 脏了.'},
    {num:18, options:['取材料','开证明','还杂志','整理房间'], ans:0, q:'女的找李老师做什么？',
     lines:[
       {speaker:'女', pre:'打扰一下，', blank:'请问您是李老师吗', post:'？', py:'Dǎrǎo yíxià, qǐngwèn nín shì Lǐ lǎoshī ma?', vn:'Làm phiền chút, xin hỏi thầy là thầy Lý phải không?'},
       {speaker:'男', pre:'对，', blank:'你是', post:'……', py:'Duì, nǐ shì……', vn:'Đúng, em là…'},
       {speaker:'女', pre:'您好，我是谢教授的学生，', blank:'他让我过来取材料', post:'。', py:'Nín hǎo, wǒ shì Xiè jiàoshòu de xuésheng, tā ràng wǒ guòlai qǔ cáiliào.', vn:'Chào thầy, em là học trò của giáo sư Tạ, thầy ấy bảo em qua lấy tài liệu.'},
       {speaker:'男', pre:'你先坐一下，等几分钟，', blank:'我马上就整理完了', post:'。', py:'Nǐ xiān zuò yíxià, děng jǐ fēnzhōng, wǒ mǎshàng jiù zhěnglǐ wán le.', vn:'Em ngồi một lát, đợi vài phút, thầy sắp sắp xếp xong rồi.'}
     ],
     explain:'问：女的找李老师做什么？ "他让我过来取材料" → A 取材料.'},
    {num:19, options:['一直很节约','比以前懂事了','参加工作了','自己管理工资'], ans:0, q:'关于女儿，下列哪个不正确？',
     lines:[
       {speaker:'旁白', pre:'', blank:'女儿过去花钱很随便', post:'，但从她开始工作、知道赚钱的辛苦后，就变得懂事多了，', py:'Nǚ\'ér guòqù huā qián hěn suíbiàn, dàn cóng tā kāishǐ gōngzuò, zhīdào zhuàn qián de xīnkǔ hòu, jiù biàn de dǒngshì duō le,', vn:'Con gái trước đây tiêu tiền rất tuỳ tiện, nhưng từ khi đi làm, biết kiếm tiền vất vả, nó trở nên hiểu chuyện hơn nhiều,'},
       {speaker:'旁白', pre:'她开始学着管理自己的工资，', blank:'把每天花的钱都记下来', post:'，提醒自己要节约，还对我说以后再也不乱花钱了。', py:'tā kāishǐ xuézhe guǎnlǐ zìjǐ de gōngzī, bǎ měi tiān huā de qián dōu jì xiàlai, tíxǐng zìjǐ yào jiéyuē, hái duì wǒ shuō yǐhòu zài yě bú luàn huā qián le.', vn:'nó bắt đầu học cách quản lý lương của mình, ghi lại số tiền tiêu mỗi ngày, nhắc mình phải tiết kiệm, còn nói với tôi sau này không tiêu tiền bừa bãi nữa.'}
     ],
     explain:'问：关于女儿，下列哪个不正确？ "过去花钱很随便" → không phải luôn tiết kiệm, đáp án A. Chú ý câu hỏi phủ định.'},
    {num:20, options:['更漂亮了','更勇敢了','不乱花钱了','不怕打针了'], ans:2, q:'女儿有什么变化？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）她开始学着管理自己的工资…提醒自己要节约，', blank:'还对我说以后再也不乱花钱了', post:'。', py:'(Tóng yí duàn huà) Tā kāishǐ xuézhe guǎnlǐ zìjǐ de gōngzī … tíxǐng zìjǐ yào jiéyuē, hái duì wǒ shuō yǐhòu zài yě bú luàn huā qián le.', vn:'(Cùng đoạn văn) Nó bắt đầu học cách quản lý lương … nhắc mình tiết kiệm, còn nói với tôi sau này không tiêu tiền bừa bãi nữa.'}
     ],
     explain:'问：女儿有什么变化？ "再也不乱花钱了" → C 不乱花钱了.'},
    {num:21, options:['性格','兴趣','健康','年龄'], ans:0, q:'根据这段话，教育孩子要考虑哪方面的不同？',
     lines:[
       {speaker:'旁白', pre:'', blank:'教育不同性格的孩子要使用不同的办法', post:'：对那些活泼的孩子要经常告诉他们哪些事情不能做；', py:'Jiàoyù bùtóng xìnggé de háizi yào shǐyòng bùtóng de bànfǎ: duì nàxiē huópo de háizi yào jīngcháng gàosu tāmen nǎxiē shìqing bù néng zuò;', vn:'Giáo dục trẻ có tính cách khác nhau phải dùng cách khác nhau: với những trẻ hiếu động phải thường xuyên nói cho chúng biết việc gì không được làm;'},
       {speaker:'旁白', pre:'对那些害羞的孩子要经常鼓励他们说出自己的看法，当他们这样做了以后，', blank:'要表扬他们', post:'，这样才能让每一个孩子都健康地发展。', py:'duì nàxiē hàixiū de háizi yào jīngcháng gǔlì tāmen shuōchū zìjǐ de kànfǎ, dāng tāmen zhèyàng zuòle yǐhòu, yào biǎoyáng tāmen, zhèyàng cái néng ràng měi yí ge háizi dōu jiànkāng de fāzhǎn.', vn:'với những trẻ nhút nhát phải thường xuyên khích lệ chúng nói ra ý kiến của mình, khi chúng làm được thì phải khen, như vậy mới giúp mỗi đứa trẻ phát triển lành mạnh.'}
     ],
     explain:'问：教育孩子要考虑哪方面的不同？ "教育不同性格的孩子要使用不同的办法" → A 性格.'},
    {num:22, options:['孩子的性格','教育的方法','怎么鼓励孩子','表扬很重要'], ans:1, q:'这段话主要谈什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'教育不同性格的孩子要使用不同的办法', post:'…这样才能让每一个孩子都健康地发展。', py:'(Tóng yí duàn huà) Jiàoyù bùtóng xìnggé de háizi yào shǐyòng bùtóng de bànfǎ … zhèyàng cái néng ràng měi yí ge háizi dōu jiànkāng de fāzhǎn.', vn:'(Cùng đoạn văn) Giáo dục trẻ có tính cách khác nhau phải dùng cách khác nhau … như vậy mới giúp mỗi đứa trẻ phát triển lành mạnh.'}
     ],
     explain:'问：这段话主要谈什么？ Chủ đề là cách giáo dục theo từng tính cách → B 教育的方法. A chỉ là yếu tố để chọn cách, C/D là chi tiết.'}
  ]
};
