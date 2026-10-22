// ══════════════════════════════════════════
// DATA — HSK5 Bài 4: 子路背米 (Tử Lộ vác gạo)
// Unit 2 谈古说今 · Nguồn: HSK标准教程5上 (tr. 38–45) + 练习册 第4课
// ══════════════════════════════════════════

var vocabData = [
  {
    "n": 1,
    "zh": "背",
    "py": "bēi",
    "pos": "Động từ",
    "vn": "cõng, vác, đeo (trên lưng)",
    "hv": "bối",
    "em": "🎒",
    "lesson": 1,
    "explain": [
      "Mang, vác vật hoặc cõng người trên lưng. Chú ý: đọc bēi là động từ “cõng, vác”; đọc bèi là danh từ “lưng” (后背, 背上)."
    ],
    "usage": "背 + người/vật: 背孩子, 背书包. Hay đi với bổ ngữ: 背起来, 背在(后背)上, 背不动.",
    "collo": [
      "背米",
      "背书包",
      "背起来",
      "背不动"
    ],
    "ex_zh": "他买了一袋米，背在后背上。",
    "ex_py": "Tā mǎile yí dài mǐ, bēi zài hòubèi shang.",
    "ex_vn": "Anh ấy mua một bao gạo, vác trên lưng.",
    "exList": [
      {
        "zh": "他买了一袋米，背在后背上。",
        "py": "Tā mǎile yí dài mǐ, bēi zài hòubèi shang.",
        "vn": "Anh ấy mua một bao gạo, vác trên lưng."
      },
      {
        "zh": "昨天打不到车，是他背着我去的医院。",
        "py": "Zuótiān dǎ bu dào chē, shì tā bēizhe wǒ qù de yīyuàn.",
        "vn": "Hôm qua không bắt được xe, chính anh ấy đã cõng tôi đến bệnh viện."
      },
      {
        "zh": "书包太重了，我妹妹根本背不动。",
        "py": "Shūbāo tài zhòng le, wǒ mèimei gēnběn bēi bu dòng.",
        "vn": "Cặp sách nặng quá, em gái tôi hoàn toàn không đeo nổi."
      }
    ],
    "colloFull": [
      {
        "zh": "背米",
        "py": "bēi mǐ",
        "vn": "vác gạo"
      },
      {
        "zh": "背书包",
        "py": "bēi shūbāo",
        "vn": "đeo cặp sách"
      },
      {
        "zh": "背起来",
        "py": "bēi qilai",
        "vn": "vác lên, cõng lên"
      },
      {
        "zh": "背不动",
        "py": "bēi bu dòng",
        "vn": "vác không nổi"
      },
      {
        "zh": "背在后背上",
        "py": "bēi zài hòubèi shang",
        "vn": "vác trên lưng"
      }
    ],
    "patterns": [
      {
        "s": "背 + 起来 / 在……上 / 不动",
        "m": "Vác lên / vác trên … / vác không nổi"
      },
      {
        "s": "背着 + người + V",
        "m": "Cõng ai đi làm gì (是他背着我去的医院)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chính anh trai đã cõng tôi về nhà.",
        "answer": "是哥哥把我背回家的。",
        "answerPy": "Shì gēge bǎ wǒ bēi huí jiā de.",
        "note": "是……的 nhấn mạnh người làm; 把 + tân ngữ + 背 + 回家.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Cặp sách của em trai nặng đến mức ngay cả tôi cũng đeo không nổi.",
        "answer": "弟弟的书包重得连我都背不动。",
        "answerPy": "Dìdi de shūbāo zhòng de lián wǒ dōu bēi bu dòng.",
        "note": "背不动 là bổ ngữ khả năng (V + 不 + 动); 连 + người + 都 để nhấn mạnh.",
        "pair": "连……都……"
      }
    ]
  },
  {
    "n": 2,
    "zh": "从前",
    "py": "cóngqián",
    "pos": "Danh từ",
    "vn": "trước đây, ngày xưa",
    "hv": "tòng tiền",
    "em": "📜",
    "lesson": 1,
    "explain": [
      "Chỉ thời gian đã qua, thường là rất lâu rồi. Hay dùng để mở đầu truyện cổ: 从前，有……"
    ],
    "usage": "Đứng đầu câu hoặc trước động từ: 从前有个人……, 他从前是老师. Khác 以前: 以前 đứng sau từ chỉ thời điểm được (10点以前), 从前 thì không.",
    "collo": [
      "从前有个人",
      "从前的生活",
      "和从前一样"
    ],
    "ex_zh": "从前，有一个人叫子路。",
    "ex_py": "Cóngqián, yǒu yí ge rén jiào Zǐlù.",
    "ex_vn": "Ngày xưa có một người tên là Tử Lộ.",
    "exList": [
      {
        "zh": "从前，有一个人叫子路。",
        "py": "Cóngqián, yǒu yí ge rén jiào Zǐlù.",
        "vn": "Ngày xưa có một người tên là Tử Lộ."
      },
      {
        "zh": "从前有个人叫乐广，他有个好朋友，一有空儿就到他家来聊天儿。",
        "py": "Cóngqián yǒu ge rén jiào Yuè Guǎng, tā yǒu ge hǎo péngyou, yì yǒu kòngr jiù dào tā jiā lái liáotiānr.",
        "vn": "Ngày xưa có người tên Nhạc Quảng, ông có một người bạn thân, hễ rảnh là đến nhà ông tán gẫu."
      },
      {
        "zh": "这里的变化太大了，和从前完全不一样。",
        "py": "Zhèli de biànhuà tài dà le, hé cóngqián wánquán bù yíyàng.",
        "vn": "Nơi này thay đổi nhiều quá, hoàn toàn khác với trước đây."
      }
    ],
    "colloFull": [
      {
        "zh": "从前有个人",
        "py": "cóngqián yǒu ge rén",
        "vn": "ngày xưa có một người"
      },
      {
        "zh": "从前的生活",
        "py": "cóngqián de shēnghuó",
        "vn": "cuộc sống ngày trước"
      },
      {
        "zh": "和从前一样",
        "py": "hé cóngqián yíyàng",
        "vn": "giống như trước đây"
      },
      {
        "zh": "跟从前不同",
        "py": "gēn cóngqián bù tóng",
        "vn": "khác với trước đây"
      }
    ],
    "patterns": [
      {
        "s": "从前，有 + người/vật……",
        "m": "Ngày xưa có … (mở đầu truyện)"
      },
      {
        "s": "和 / 跟 + 从前 + 一样 / 不一样",
        "m": "Giống / khác trước đây"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày xưa hễ gặp chiến tranh là nông dân không có cơm ăn.",
        "answer": "从前一遇到战争，农民就吃不上饭。",
        "answerPy": "Cóngqián yí yùdào zhànzhēng, nóngmín jiù chī bu shàng fàn.",
        "note": "从前 đứng đầu câu; 一……就…… nối hai việc xảy ra liền nhau.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Thị trấn nhỏ này ngày càng khác với trước đây.",
        "answer": "这个小镇跟从前越来越不一样了。",
        "answerPy": "Zhège xiǎo zhèn gēn cóngqián yuè lái yuè bù yíyàng le.",
        "note": "跟从前 + 不一样; 越来越 đặt trước 不一样.",
        "pair": "越来越"
      }
    ]
  },
  {
    "n": 3,
    "zh": "时期",
    "py": "shíqī",
    "pos": "Danh từ",
    "vn": "thời kỳ",
    "hv": "thời kỳ",
    "em": "⏳",
    "lesson": 1,
    "explain": [
      "Một khoảng thời gian dài có đặc điểm riêng (trong lịch sử hoặc trong đời người)."
    ],
    "usage": "Thường có định ngữ phía trước: 春秋时期, 困难时期, 学生时期, 特殊时期.",
    "collo": [
      "春秋时期",
      "困难时期",
      "学生时期",
      "特殊时期"
    ],
    "ex_zh": "子路是春秋时期的人。",
    "ex_py": "Zǐlù shì Chūnqiū shíqī de rén.",
    "ex_vn": "Tử Lộ là người thời Xuân Thu.",
    "exList": [
      {
        "zh": "子路是春秋时期的人。",
        "py": "Zǐlù shì Chūnqiū shíqī de rén.",
        "vn": "Tử Lộ là người thời Xuân Thu."
      },
      {
        "zh": "大概在距今两千五百多年前的春秋时期，有一个人叫子路。",
        "py": "Dàgài zài jù jīn liǎngqiān wǔbǎi duō nián qián de Chūnqiū shíqī, yǒu yí ge rén jiào Zǐlù.",
        "vn": "Vào khoảng thời Xuân Thu cách đây hơn hai nghìn năm trăm năm, có một người tên là Tử Lộ."
      },
      {
        "zh": "高中是人生中最重要的时期之一。",
        "py": "Gāozhōng shì rénshēng zhōng zuì zhòngyào de shíqī zhī yī.",
        "vn": "Cấp ba là một trong những thời kỳ quan trọng nhất của đời người."
      }
    ],
    "colloFull": [
      {
        "zh": "春秋时期",
        "py": "Chūnqiū shíqī",
        "vn": "thời Xuân Thu"
      },
      {
        "zh": "困难时期",
        "py": "kùnnan shíqī",
        "vn": "thời kỳ khó khăn"
      },
      {
        "zh": "学生时期",
        "py": "xuésheng shíqī",
        "vn": "thời học sinh"
      },
      {
        "zh": "特殊时期",
        "py": "tèshū shíqī",
        "vn": "thời kỳ đặc biệt"
      },
      {
        "zh": "战争时期",
        "py": "zhànzhēng shíqī",
        "vn": "thời chiến tranh"
      }
    ],
    "patterns": [
      {
        "s": "……时期",
        "m": "Thời kỳ … (春秋时期, 学生时期)"
      },
      {
        "s": "在……时期",
        "m": "Vào thời kỳ …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thời học sinh, tôi chưa từng rời xa nhà.",
        "answer": "学生时期，我从来没离开过家。",
        "answerPy": "Xuésheng shíqī, wǒ cónglái méi líkāiguo jiā.",
        "note": "学生时期 làm trạng ngữ thời gian ở đầu câu.",
        "pair": "从来没……过"
      },
      {
        "promptLang": "vi",
        "prompt": "Dù là thời kỳ khó khăn nhưng cả nhà rất đoàn kết.",
        "answer": "虽然是困难时期，但是一家人很团结。",
        "answerPy": "Suīrán shì kùnnan shíqī, dànshì yì jiā rén hěn tuánjié.",
        "note": "困难时期 = thời kỳ khó khăn; 一家人 đọc yì jiā rén.",
        "pair": "虽然……但是……"
      }
    ]
  },
  {
    "n": 4,
    "zh": "流传",
    "py": "liúchuán",
    "pos": "Động từ",
    "vn": "lưu truyền",
    "hv": "lưu truyền",
    "em": "📖",
    "lesson": 1,
    "explain": [
      "(Truyện, câu nói, bài hát, phong tục…) được truyền lại qua nhiều đời hoặc lan rộng ra nhiều nơi."
    ],
    "usage": "Chủ ngữ là truyện, câu nói, bài hát, phong tục. Bổ ngữ hay gặp: 流传至今, 流传到……, 流传了一千年.",
    "collo": [
      "流传至今",
      "流传到国外",
      "流传了一千年",
      "民间流传"
    ],
    "ex_zh": "流传至今的“百里背米”讲的就是他孝敬父母的故事。",
    "ex_py": "Liúchuán zhìjīn de “bǎi lǐ bēi mǐ” jiǎng de jiù shì tā xiàojìng fùmǔ de gùshi.",
    "ex_vn": "Câu chuyện “vác gạo trăm dặm” lưu truyền đến nay kể chính về việc ông hiếu kính cha mẹ.",
    "exList": [
      {
        "zh": "流传至今的“百里背米”讲的就是他孝敬父母的故事。",
        "py": "Liúchuán zhìjīn de “bǎi lǐ bēi mǐ” jiǎng de jiù shì tā xiàojìng fùmǔ de gùshi.",
        "vn": "Câu chuyện “vác gạo trăm dặm” lưu truyền đến nay kể chính về việc ông hiếu kính cha mẹ."
      },
      {
        "zh": "这是个在中国流传了近千年的民间故事。",
        "py": "Zhè shì ge zài Zhōngguó liúchuánle jìn qiān nián de mínjiān gùshi.",
        "vn": "Đây là một câu chuyện dân gian đã lưu truyền gần nghìn năm ở Trung Quốc."
      },
      {
        "zh": "这首歌已经流传到了很多国家。",
        "py": "Zhè shǒu gē yǐjīng liúchuán dàole hěn duō guójiā.",
        "vn": "Bài hát này đã lan truyền tới rất nhiều nước."
      }
    ],
    "colloFull": [
      {
        "zh": "流传至今",
        "py": "liúchuán zhìjīn",
        "vn": "lưu truyền đến nay"
      },
      {
        "zh": "流传到国外",
        "py": "liúchuán dào guówài",
        "vn": "lan truyền ra nước ngoài"
      },
      {
        "zh": "流传了一千年",
        "py": "liúchuánle yìqiān nián",
        "vn": "lưu truyền một nghìn năm"
      },
      {
        "zh": "民间流传",
        "py": "mínjiān liúchuán",
        "vn": "lưu truyền trong dân gian"
      },
      {
        "zh": "广泛流传",
        "py": "guǎngfàn liúchuán",
        "vn": "lưu truyền rộng rãi"
      }
    ],
    "patterns": [
      {
        "s": "流传 + 至今 / 到…… / 了 + thời gian",
        "m": "Lưu truyền đến nay / đến … / suốt bao lâu"
      },
      {
        "s": "在 + nơi + 流传",
        "m": "Được lưu truyền ở đâu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Câu chuyện này không những lưu truyền đến nay mà còn lan ra nước ngoài.",
        "answer": "这个故事不仅流传至今，也流传到了国外。",
        "answerPy": "Zhège gùshi bùjǐn liúchuán zhìjīn, yě liúchuán dàole guówài.",
        "note": "流传至今 / 流传到 + nơi — hai kiểu bổ ngữ của 流传.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Câu chuyện này là ông nội kể cho tôi, nghe nói đã lưu truyền mấy trăm năm.",
        "answer": "这个故事是爷爷讲给我听的，听说已经流传了几百年。",
        "answerPy": "Zhège gùshi shì yéye jiǎng gěi wǒ tīng de, tīngshuō yǐjīng liúchuánle jǐ bǎi nián.",
        "note": "流传了 + khoảng thời gian: đã lưu truyền bao lâu.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 5,
    "zh": "至今",
    "py": "zhìjīn",
    "pos": "Phó từ",
    "vn": "đến nay, đến bây giờ",
    "hv": "chí kim",
    "em": "⏱️",
    "lesson": 1,
    "explain": [
      "Cho tới tận bây giờ. Thường đứng đầu phân câu hoặc trước động từ; còn tạo cụm cố định: 从古至今, 流传至今."
    ],
    "usage": "至今 + 还/仍/都 + (没) V: 至今还没……. Không dùng cho tương lai, không thêm 到 phía trước (✗ 到至今).",
    "collo": [
      "至今还没",
      "从古至今",
      "流传至今",
      "至今难忘"
    ],
    "ex_zh": "我在北京出生、长大，至今还没离开过呢。",
    "ex_py": "Wǒ zài Běijīng chūshēng, zhǎngdà, zhìjīn hái méi líkāiguo ne.",
    "ex_vn": "Tôi sinh ra và lớn lên ở Bắc Kinh, đến giờ vẫn chưa rời khỏi đó.",
    "exList": [
      {
        "zh": "我在北京出生、长大，至今还没离开过呢。",
        "py": "Wǒ zài Běijīng chūshēng, zhǎngdà, zhìjīn hái méi líkāiguo ne.",
        "vn": "Tôi sinh ra và lớn lên ở Bắc Kinh, đến giờ vẫn chưa rời khỏi đó."
      },
      {
        "zh": "至今，很多国家并没有规定什么才是健康食品。",
        "py": "Zhìjīn, hěn duō guójiā bìng méiyǒu guīdìng shénme cái shì jiànkāng shípǐn.",
        "vn": "Đến nay nhiều nước vẫn chưa hề quy định thế nào mới là thực phẩm lành mạnh."
      },
      {
        "zh": "那次旅行我至今难忘。",
        "py": "Nà cì lǚxíng wǒ zhìjīn nánwàng.",
        "vn": "Chuyến du lịch lần đó đến giờ tôi vẫn khó quên."
      }
    ],
    "colloFull": [
      {
        "zh": "至今还没",
        "py": "zhìjīn hái méi",
        "vn": "đến nay vẫn chưa"
      },
      {
        "zh": "从古至今",
        "py": "cóng gǔ zhì jīn",
        "vn": "từ xưa đến nay"
      },
      {
        "zh": "流传至今",
        "py": "liúchuán zhìjīn",
        "vn": "lưu truyền đến nay"
      },
      {
        "zh": "至今难忘",
        "py": "zhìjīn nánwàng",
        "vn": "đến nay vẫn khó quên"
      },
      {
        "zh": "至今为止",
        "py": "zhìjīn wéizhǐ",
        "vn": "cho tới nay"
      }
    ],
    "patterns": [
      {
        "s": "至今 + 还 / 仍 / 都 + (没) V",
        "m": "Đến nay vẫn (chưa) …"
      },
      {
        "s": "从古至今 / 流传至今",
        "m": "Cụm cố định: từ xưa đến nay / lưu truyền đến nay"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy chúng tôi quen nhau nhiều năm, nhưng đến nay vẫn chưa từng cãi nhau.",
        "answer": "虽然我们已经认识多年，但是至今还没吵过架。",
        "answerPy": "Suīrán wǒmen yǐjīng rènshi duō nián, dànshì zhìjīn hái méi chǎoguo jià.",
        "note": "至今 + 还没 + V过; ôn 吵架 (bài 1) — 过 chen giữa: 吵过架.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đến nay ngay cả nhà khoa học cũng chưa giải thích được hiện tượng này.",
        "answer": "至今连科学家都没能解释这个现象。",
        "answerPy": "Zhìjīn lián kēxuéjiā dōu méi néng jiěshì zhège xiànxiàng.",
        "note": "至今 đứng đầu câu; 连……都 + 没能 + V.",
        "pair": "连……都……"
      }
    ]
  },
  {
    "n": 6,
    "zh": "孝敬",
    "py": "xiàojìng",
    "pos": "Động từ",
    "vn": "hiếu kính, phụng dưỡng (người trên)",
    "hv": "hiếu kính",
    "em": "🙇",
    "lesson": 1,
    "explain": [
      "Kính trọng và phụng dưỡng người trên (cha mẹ, ông bà); cũng chỉ việc biếu đồ cho người trên để tỏ lòng hiếu."
    ],
    "usage": "孝敬 + người trên: 孝敬父母, 孝敬老人. Còn nói: (拿/用) + vật + 孝敬 + người.",
    "collo": [
      "孝敬父母",
      "孝敬老人",
      "孝敬双亲"
    ],
    "ex_zh": "子路一直想孝敬父母，让他们过上好日子。",
    "ex_py": "Zǐlù yìzhí xiǎng xiàojìng fùmǔ, ràng tāmen guòshang hǎo rìzi.",
    "ex_vn": "Tử Lộ luôn muốn hiếu kính cha mẹ, để họ được sống những ngày tốt đẹp.",
    "exList": [
      {
        "zh": "子路一直想孝敬父母，让他们过上好日子。",
        "py": "Zǐlù yìzhí xiǎng xiàojìng fùmǔ, ràng tāmen guòshang hǎo rìzi.",
        "vn": "Tử Lộ luôn muốn hiếu kính cha mẹ, để họ được sống những ngày tốt đẹp."
      },
      {
        "zh": "即使再想背米百里去孝敬双亲，也不可能了。",
        "py": "Jíshǐ zài xiǎng bēi mǐ bǎi lǐ qù xiàojìng shuāngqīn, yě bù kěnéng le.",
        "vn": "Dù có muốn vác gạo trăm dặm để phụng dưỡng song thân cũng không thể được nữa rồi."
      },
      {
        "zh": "我用第一次打工挣的钱给奶奶买了礼物，孝敬她老人家。",
        "py": "Wǒ yòng dì-yī cì dǎgōng zhèng de qián gěi nǎinai mǎile lǐwù, xiàojìng tā lǎorenjia.",
        "vn": "Tôi dùng số tiền lần đầu đi làm thêm kiếm được mua quà cho bà nội để tỏ lòng hiếu kính."
      }
    ],
    "colloFull": [
      {
        "zh": "孝敬父母",
        "py": "xiàojìng fùmǔ",
        "vn": "hiếu kính cha mẹ"
      },
      {
        "zh": "孝敬老人",
        "py": "xiàojìng lǎorén",
        "vn": "hiếu kính người già"
      },
      {
        "zh": "孝敬双亲",
        "py": "xiàojìng shuāngqīn",
        "vn": "phụng dưỡng song thân"
      },
      {
        "zh": "孝敬长辈",
        "py": "xiàojìng zhǎngbèi",
        "vn": "hiếu kính bậc trên"
      }
    ],
    "patterns": [
      {
        "s": "孝敬 + 父母 / 老人 / 长辈",
        "m": "Hiếu kính cha mẹ / người già / bậc trên"
      },
      {
        "s": "(拿 / 用) + vật + 孝敬 + người",
        "m": "Đem gì biếu để tỏ lòng hiếu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần có thời gian là tôi về quê phụng dưỡng ông bà.",
        "answer": "只要有时间，我就回老家孝敬爷爷奶奶。",
        "answerPy": "Zhǐyào yǒu shíjiān, wǒ jiù huí lǎojiā xiàojìng yéye nǎinai.",
        "note": "孝敬 + người trên (爷爷奶奶); 就 đứng sau chủ ngữ 我.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy đem hết tiền thưởng để biếu cha mẹ.",
        "answer": "他把奖金都拿来孝敬父母了。",
        "answerPy": "Tā bǎ jiǎngjīn dōu nálái xiàojìng fùmǔ le.",
        "note": "把 + vật + 拿来 + 孝敬 + người.",
        "pair": "把"
      }
    ]
  },
  {
    "n": 7,
    "zh": "农民",
    "py": "nóngmín",
    "pos": "Danh từ",
    "vn": "nông dân",
    "hv": "nông dân",
    "em": "👨‍🌾",
    "lesson": 1,
    "explain": [
      "Người sống bằng nghề làm ruộng, trồng trọt, chăn nuôi ở nông thôn."
    ],
    "usage": "Đếm bằng 个/位: 一位农民. Hay gặp: 当农民, 农民的生活.",
    "collo": [
      "当农民",
      "农民的生活",
      "普通农民"
    ],
    "ex_zh": "子路的父母都是农民。",
    "ex_py": "Zǐlù de fùmǔ dōu shì nóngmín.",
    "ex_vn": "Cha mẹ Tử Lộ đều là nông dân.",
    "exList": [
      {
        "zh": "子路的父母都是农民。",
        "py": "Zǐlù de fùmǔ dōu shì nóngmín.",
        "vn": "Cha mẹ Tử Lộ đều là nông dân."
      },
      {
        "zh": "我姥姥姥爷一辈子都在农村当农民。",
        "py": "Wǒ lǎolao lǎoye yíbèizi dōu zài nóngcūn dāng nóngmín.",
        "vn": "Ông bà ngoại tôi cả đời làm nông dân ở nông thôn."
      },
      {
        "zh": "今年雨水好，农民们都高兴得不得了。",
        "py": "Jīnnián yǔshuǐ hǎo, nóngmínmen dōu gāoxìng de bùdéliǎo.",
        "vn": "Năm nay mưa thuận, bà con nông dân ai cũng vui mừng khôn xiết."
      }
    ],
    "colloFull": [
      {
        "zh": "当农民",
        "py": "dāng nóngmín",
        "vn": "làm nông dân"
      },
      {
        "zh": "农民的生活",
        "py": "nóngmín de shēnghuó",
        "vn": "cuộc sống của nông dân"
      },
      {
        "zh": "普通农民",
        "py": "pǔtōng nóngmín",
        "vn": "người nông dân bình thường"
      },
      {
        "zh": "一位农民",
        "py": "yí wèi nóngmín",
        "vn": "một người nông dân"
      }
    ],
    "patterns": [
      {
        "s": "当 / 做 + 农民",
        "m": "Làm nông dân"
      },
      {
        "s": "农民 + 的 + N",
        "m": "… của nông dân (农民的生活, 农民的收入)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy cha mẹ anh ấy là nông dân nhưng rất coi trọng việc học của con.",
        "answer": "虽然他父母是农民，但是非常重视孩子的学习。",
        "answerPy": "Suīrán tā fùmǔ shì nóngmín, dànshì fēicháng zhòngshì háizi de xuéxí.",
        "note": "是 + 农民: nói nghề nghiệp.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Bố mẹ anh ấy là nông dân, chưa từng đi máy bay.",
        "answer": "他父母是农民，从来没坐过飞机。",
        "answerPy": "Tā fùmǔ shì nóngmín, cónglái méi zuòguo fēijī.",
        "note": "从来没 + V + 过: chưa từng bao giờ.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 8,
    "zh": "战争",
    "py": "zhànzhēng",
    "pos": "Danh từ",
    "vn": "chiến tranh",
    "hv": "chiến tranh",
    "em": "⚔️",
    "lesson": 1,
    "explain": [
      "Cuộc xung đột vũ trang giữa các nước hoặc các phe."
    ],
    "usage": "Đếm bằng 场: 一场战争. Hay đi với: 发生/结束 + 战争; 连年的战争.",
    "collo": [
      "一场战争",
      "连年的战争",
      "发生战争",
      "战争结束"
    ],
    "ex_zh": "由于连年的战争，家里生活非常困难。",
    "ex_py": "Yóuyú liánnián de zhànzhēng, jiā li shēnghuó fēicháng kùnnan.",
    "ex_vn": "Vì chiến tranh liên miên nhiều năm, cuộc sống trong nhà vô cùng khó khăn.",
    "exList": [
      {
        "zh": "由于连年的战争，家里生活非常困难。",
        "py": "Yóuyú liánnián de zhànzhēng, jiā li shēnghuó fēicháng kùnnan.",
        "vn": "Vì chiến tranh liên miên nhiều năm, cuộc sống trong nhà vô cùng khó khăn."
      },
      {
        "zh": "这场战争结束以后，很多人回到了自己的家乡。",
        "py": "Zhè chǎng zhànzhēng jiéshù yǐhòu, hěn duō rén huídàole zìjǐ de jiāxiāng.",
        "vn": "Sau khi cuộc chiến tranh này kết thúc, nhiều người đã trở về quê hương."
      },
      {
        "zh": "没有人喜欢战争，大家都希望和平。",
        "py": "Méiyǒu rén xǐhuan zhànzhēng, dàjiā dōu xīwàng hépíng.",
        "vn": "Không ai thích chiến tranh, mọi người đều mong hoà bình."
      }
    ],
    "colloFull": [
      {
        "zh": "一场战争",
        "py": "yì chǎng zhànzhēng",
        "vn": "một cuộc chiến tranh"
      },
      {
        "zh": "连年的战争",
        "py": "liánnián de zhànzhēng",
        "vn": "chiến tranh liên miên"
      },
      {
        "zh": "发生战争",
        "py": "fāshēng zhànzhēng",
        "vn": "xảy ra chiến tranh"
      },
      {
        "zh": "战争结束",
        "py": "zhànzhēng jiéshù",
        "vn": "chiến tranh kết thúc"
      },
      {
        "zh": "战争时期",
        "py": "zhànzhēng shíqī",
        "vn": "thời chiến"
      }
    ],
    "patterns": [
      {
        "s": "一场 + 战争",
        "m": "Một cuộc chiến tranh (lượng từ 场)"
      },
      {
        "s": "由于 + 战争，……",
        "m": "Do chiến tranh mà …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Nhiều ngôi nhà đã bị chiến tranh phá huỷ.",
        "answer": "很多房子被战争破坏了。",
        "answerPy": "Hěn duō fángzi bèi zhànzhēng pòhuài le.",
        "note": "被 + 战争 + 破坏: bị chiến tranh phá huỷ.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Ông nội chưa bao giờ kể với chúng tôi chuyện thời chiến.",
        "answer": "爷爷从来没跟我们讲过战争时期的事。",
        "answerPy": "Yéye cónglái méi gēn wǒmen jiǎngguo zhànzhēng shíqī de shì.",
        "note": "战争时期 = thời chiến; 跟 + người + 讲.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 9,
    "zh": "满足",
    "py": "mǎnzú",
    "pos": "Động từ",
    "vn": "thoả mãn, mãn nguyện; đáp ứng",
    "hv": "mãn túc",
    "em": "😌",
    "lesson": 1,
    "explain": [
      "① Thấy đủ rồi, không đòi hỏi thêm (感到满足). ② Làm cho nhu cầu, yêu cầu được đáp ứng (满足 + 要求/需要)."
    ],
    "usage": "感到/很 + 满足; 满足 + 需要/要求/条件/愿望. Thường KHÔNG làm định ngữ, trạng ngữ (khác 满意).",
    "collo": [
      "感到满足",
      "满足要求",
      "满足需要",
      "满足愿望"
    ],
    "ex_zh": "只要能饱饱地吃上一顿米饭，也就满足啦！",
    "ex_py": "Zhǐyào néng bǎobǎo de chīshang yí dùn mǐfàn, yě jiù mǎnzú la!",
    "ex_vn": "Chỉ cần được ăn một bữa cơm gạo no nê là đã mãn nguyện lắm rồi!",
    "exList": [
      {
        "zh": "只要能饱饱地吃上一顿米饭，也就满足啦！",
        "py": "Zhǐyào néng bǎobǎo de chīshang yí dùn mǐfàn, yě jiù mǎnzú la!",
        "vn": "Chỉ cần được ăn một bữa cơm gạo no nê là đã mãn nguyện lắm rồi!"
      },
      {
        "zh": "父母总是会想办法满足孩子的要求。",
        "py": "Fùmǔ zǒngshì huì xiǎng bànfǎ mǎnzú háizi de yāoqiú.",
        "vn": "Cha mẹ luôn tìm cách đáp ứng yêu cầu của con cái."
      },
      {
        "zh": "你不能仅仅通过考试就满足了，要努力取得最好的成绩。",
        "py": "Nǐ bù néng jǐnjǐn tōngguò kǎoshì jiù mǎnzú le, yào nǔlì qǔdé zuì hǎo de chéngjì.",
        "vn": "Em không thể chỉ qua được kỳ thi là thoả mãn, phải cố gắng đạt thành tích tốt nhất."
      }
    ],
    "colloFull": [
      {
        "zh": "感到满足",
        "py": "gǎndào mǎnzú",
        "vn": "cảm thấy mãn nguyện"
      },
      {
        "zh": "满足要求",
        "py": "mǎnzú yāoqiú",
        "vn": "đáp ứng yêu cầu"
      },
      {
        "zh": "满足需要",
        "py": "mǎnzú xūyào",
        "vn": "đáp ứng nhu cầu"
      },
      {
        "zh": "满足愿望",
        "py": "mǎnzú yuànwàng",
        "vn": "thoả nguyện vọng"
      },
      {
        "zh": "很容易满足",
        "py": "hěn róngyì mǎnzú",
        "vn": "rất dễ thấy đủ"
      }
    ],
    "patterns": [
      {
        "s": "对 + N + 感到满足",
        "m": "Thấy mãn nguyện với …"
      },
      {
        "s": "满足 + 需要 / 要求 / 条件 / 愿望",
        "m": "Đáp ứng nhu cầu / yêu cầu / điều kiện / nguyện vọng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần cả nhà được ở bên nhau là mẹ đã mãn nguyện rồi.",
        "answer": "只要一家人能在一起，妈妈就满足了。",
        "answerPy": "Zhǐyào yì jiā rén néng zài yìqǐ, māma jiù mǎnzú le.",
        "note": "满足 dùng một mình = thấy đủ, không mong gì thêm.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Yêu cầu của học sinh đều đã được thầy đáp ứng.",
        "answer": "学生的要求都被老师满足了。",
        "answerPy": "Xuésheng de yāoqiú dōu bèi lǎoshī mǎnzú le.",
        "note": "满足 + 要求 (mang tân ngữ); ở đây tân ngữ đưa lên đầu câu 被.",
        "pair": "被"
      }
    ]
  },
  {
    "n": 10,
    "zh": "惭愧",
    "py": "cánkuì",
    "pos": "Tính từ",
    "vn": "hổ thẹn, xấu hổ",
    "hv": "tàm quý",
    "em": "😳",
    "lesson": 1,
    "explain": [
      "Thấy xấu hổ vì mình làm chưa tốt, chưa tròn trách nhiệm."
    ],
    "usage": "感到/觉得 + 惭愧; 十分惭愧; 惭愧地 + V. Là tính từ nên KHÔNG mang tân ngữ.",
    "collo": [
      "感到惭愧",
      "十分惭愧",
      "惭愧地低下头"
    ],
    "ex_zh": "子路听了，心里觉得十分惭愧。",
    "ex_py": "Zǐlù tīng le, xīnli juéde shífēn cánkuì.",
    "ex_vn": "Tử Lộ nghe xong, trong lòng thấy vô cùng hổ thẹn.",
    "exList": [
      {
        "zh": "子路听了，心里觉得十分惭愧。",
        "py": "Zǐlù tīng le, xīnli juéde shífēn cánkuì.",
        "vn": "Tử Lộ nghe xong, trong lòng thấy vô cùng hổ thẹn."
      },
      {
        "zh": "作为北京人，我实在有点儿惭愧！",
        "py": "Zuòwéi Běijīngrén, wǒ shízài yǒudiǎnr cánkuì!",
        "vn": "Là người Bắc Kinh, tôi thật có chút hổ thẹn!"
      },
      {
        "zh": "想到妈妈每天那么辛苦，我感到很惭愧。",
        "py": "Xiǎngdào māma měi tiān nàme xīnkǔ, wǒ gǎndào hěn cánkuì.",
        "vn": "Nghĩ đến mẹ ngày nào cũng vất vả như thế, tôi thấy rất hổ thẹn."
      }
    ],
    "colloFull": [
      {
        "zh": "感到惭愧",
        "py": "gǎndào cánkuì",
        "vn": "cảm thấy hổ thẹn"
      },
      {
        "zh": "十分惭愧",
        "py": "shífēn cánkuì",
        "vn": "vô cùng hổ thẹn"
      },
      {
        "zh": "惭愧地低下头",
        "py": "cánkuì de dīxia tóu",
        "vn": "hổ thẹn cúi đầu"
      },
      {
        "zh": "觉得很惭愧",
        "py": "juéde hěn cánkuì",
        "vn": "thấy rất xấu hổ"
      }
    ],
    "patterns": [
      {
        "s": "(对……) 感到 / 觉得 + 惭愧",
        "m": "Thấy hổ thẹn (về …)"
      },
      {
        "s": "惭愧 + 地 + V",
        "m": "Hổ thẹn mà làm gì (惭愧地低下头)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi hễ nghĩ đến chuyện hôm qua là thấy rất hổ thẹn.",
        "answer": "我一想到昨天的事就觉得很惭愧。",
        "answerPy": "Wǒ yì xiǎngdào zuótiān de shì jiù juéde hěn cánkuì.",
        "note": "觉得 + 很惭愧; 惭愧 không mang tân ngữ.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngay cả em gái cũng biết giúp mẹ làm việc nhà, tôi thấy rất hổ thẹn.",
        "answer": "连妹妹都知道帮妈妈做家务，我感到很惭愧。",
        "answerPy": "Lián mèimei dōu zhīdào bāng māma zuò jiāwù, wǒ gǎndào hěn cánkuì.",
        "note": "感到 + 很惭愧.",
        "pair": "连……都……"
      }
    ]
  },
  {
    "n": 11,
    "zh": "决心",
    "py": "juéxīn",
    "pos": "Danh từ / Động từ",
    "vn": "quyết tâm",
    "hv": "quyết tâm",
    "em": "💪",
    "lesson": 1,
    "explain": [
      "Danh từ: ý chí kiên định phải làm bằng được một việc (下决心). Động từ: quyết tâm làm gì (决心 + V)."
    ],
    "usage": "下/有/表示 + 决心; 暗下决心 (thầm hạ quyết tâm). Tiếng Việt “đặt quyết tâm” nhưng tiếng Trung dùng 下, không dùng 做.",
    "collo": [
      "下决心",
      "有决心",
      "表示决心",
      "暗下决心"
    ],
    "ex_zh": "他暗下决心：“一定要让父母吃上米饭！”",
    "ex_py": "Tā àn xià juéxīn: “Yídìng yào ràng fùmǔ chīshang mǐfàn!”",
    "ex_vn": "Ông thầm hạ quyết tâm: “Nhất định phải để cha mẹ được ăn cơm gạo!”",
    "exList": [
      {
        "zh": "他暗下决心：“一定要让父母吃上米饭！”",
        "py": "Tā àn xià juéxīn: “Yídìng yào ràng fùmǔ chīshang mǐfàn!”",
        "vn": "Ông thầm hạ quyết tâm: “Nhất định phải để cha mẹ được ăn cơm gạo!”"
      },
      {
        "zh": "我下决心从明天开始早睡早起，每天锻炼身体。",
        "py": "Wǒ xià juéxīn cóng míngtiān kāishǐ zǎo shuì zǎo qǐ, měi tiān duànliàn shēntǐ.",
        "vn": "Tôi quyết tâm từ ngày mai ngủ sớm dậy sớm, ngày nào cũng tập thể dục."
      },
      {
        "zh": "他决心今年一定要通过HSK五级考试。",
        "py": "Tā juéxīn jīnnián yídìng yào tōngguò HSK wǔ jí kǎoshì.",
        "vn": "Cậu ấy quyết tâm năm nay nhất định phải thi đỗ HSK 5."
      }
    ],
    "colloFull": [
      {
        "zh": "下决心",
        "py": "xià juéxīn",
        "vn": "hạ quyết tâm"
      },
      {
        "zh": "有决心",
        "py": "yǒu juéxīn",
        "vn": "có quyết tâm"
      },
      {
        "zh": "表示决心",
        "py": "biǎoshì juéxīn",
        "vn": "bày tỏ quyết tâm"
      },
      {
        "zh": "暗下决心",
        "py": "àn xià juéxīn",
        "vn": "thầm hạ quyết tâm"
      },
      {
        "zh": "决心很大",
        "py": "juéxīn hěn dà",
        "vn": "quyết tâm rất lớn"
      }
    ],
    "patterns": [
      {
        "s": "下 / 有 / 表示 + 决心",
        "m": "Hạ / có / bày tỏ quyết tâm"
      },
      {
        "s": "决心 + V……",
        "m": "Quyết tâm làm gì"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần có quyết tâm thì việc gì cũng làm được.",
        "answer": "只要有决心，什么事都能做成。",
        "answerPy": "Zhǐyào yǒu juéxīn, shénme shì dōu néng zuòchéng.",
        "note": "有决心 = có quyết tâm (决心 là danh từ).",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đã hạ quyết tâm: không những học tốt tiếng Trung mà cũng phải học tốt tiếng Anh.",
        "answer": "我下了决心，不仅要学好汉语，也要学好英语。",
        "answerPy": "Wǒ xiàle juéxīn, bùjǐn yào xuéhǎo Hànyǔ, yě yào xuéhǎo Yīngyǔ.",
        "note": "下决心 — không nói 做决心.",
        "pair": "不仅……也……"
      }
    ]
  },
  {
    "n": 12,
    "zh": "委屈",
    "py": "wěiqu",
    "pos": "Tính từ / Động từ",
    "vn": "tủi thân; để ai chịu thiệt thòi",
    "hv": "uỷ khuất",
    "em": "😢",
    "lesson": 1,
    "explain": [
      "Tính từ: tủi thân vì bị oan, bị đối xử không công bằng. Động từ: để người khác phải chịu thiệt, chịu khổ (委屈 + người)."
    ],
    "usage": "Tính từ: 很委屈, 委屈地哭了, 受委屈. Động từ: 不能再委屈他们了; 请您先委屈一晚 (lời xin lỗi lịch sự).",
    "collo": [
      "受委屈",
      "委屈地哭",
      "委屈你了",
      "感到委屈"
    ],
    "ex_zh": "一定要让父母吃上米饭，不能再委屈他们了！",
    "ex_py": "Yídìng yào ràng fùmǔ chīshang mǐfàn, bù néng zài wěiqu tāmen le!",
    "ex_vn": "Nhất định phải để cha mẹ được ăn cơm gạo, không thể để họ chịu thiệt thòi nữa!",
    "exList": [
      {
        "zh": "一定要让父母吃上米饭，不能再委屈他们了！",
        "py": "Yídìng yào ràng fùmǔ chīshang mǐfàn, bù néng zài wěiqu tāmen le!",
        "vn": "Nhất định phải để cha mẹ được ăn cơm gạo, không thể để họ chịu thiệt thòi nữa!"
      },
      {
        "zh": "我的坏脾气让她受了不少委屈。",
        "py": "Wǒ de huài píqi ràng tā shòule bù shǎo wěiqu.",
        "vn": "Tính khí xấu của tôi khiến cô ấy phải chịu không ít tủi thân."
      },
      {
        "zh": "请您先在这儿委屈一晚，明天我们就给您换个好的房间。",
        "py": "Qǐng nín xiān zài zhèr wěiqu yì wǎn, míngtiān wǒmen jiù gěi nín huàn ge hǎo de fángjiān.",
        "vn": "Xin quý khách chịu khó ở tạm đây một đêm, mai chúng tôi sẽ đổi phòng tốt hơn."
      }
    ],
    "colloFull": [
      {
        "zh": "受委屈",
        "py": "shòu wěiqu",
        "vn": "chịu oan ức, tủi thân"
      },
      {
        "zh": "委屈地哭",
        "py": "wěiqu de kū",
        "vn": "khóc tủi thân"
      },
      {
        "zh": "委屈你了",
        "py": "wěiqu nǐ le",
        "vn": "để bạn chịu thiệt rồi"
      },
      {
        "zh": "感到委屈",
        "py": "gǎndào wěiqu",
        "vn": "cảm thấy tủi thân"
      },
      {
        "zh": "委屈地说",
        "py": "wěiqu de shuō",
        "vn": "nói giọng tủi thân"
      }
    ],
    "patterns": [
      {
        "s": "委屈 + người",
        "m": "Để ai chịu thiệt (不能再委屈他们了)"
      },
      {
        "s": "受 + 委屈 / 委屈地 + 说 / 哭",
        "m": "Chịu oan ức / tủi thân mà nói, khóc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô bé bị bạn hiểu lầm, tủi thân khóc.",
        "answer": "小女孩被朋友误会了，委屈地哭了。",
        "answerPy": "Xiǎo nǚhái bèi péngyou wùhuì le, wěiqu de kū le.",
        "note": "委屈地 + 哭: tính từ làm trạng ngữ.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Hễ nhắc đến chuyện đó là cô ấy lại thấy tủi thân.",
        "answer": "一提起那件事，她就觉得很委屈。",
        "answerPy": "Yì tíqǐ nà jiàn shì, tā jiù juéde hěn wěiqu.",
        "note": "觉得 + 很委屈 (tính từ).",
        "pair": "一……就……"
      }
    ]
  },
  {
    "n": 13,
    "zh": "打听",
    "py": "dǎting",
    "pos": "Động từ",
    "vn": "hỏi thăm, dò hỏi",
    "hv": "đả thính",
    "em": "👂",
    "lesson": 1,
    "explain": [
      "Hỏi han người khác để biết tin tức, tình hình (thường hỏi khéo, hỏi gián tiếp)."
    ],
    "usage": "打听 + 消息/情况; 打听到 + nội dung; 向/跟 + người + 打听. Có thể lặp: 打听打听, 打听一下.",
    "collo": [
      "打听消息",
      "打听情况",
      "向别人打听",
      "打听到"
    ],
    "ex_zh": "子路打听到百里之外有个有钱人。",
    "ex_py": "Zǐlù dǎtingdào bǎi lǐ zhī wài yǒu ge yǒu qián rén.",
    "ex_vn": "Tử Lộ dò hỏi được rằng cách trăm dặm có một nhà giàu.",
    "exList": [
      {
        "zh": "子路打听到百里之外有个有钱人。",
        "py": "Zǐlù dǎtingdào bǎi lǐ zhī wài yǒu ge yǒu qián rén.",
        "vn": "Tử Lộ dò hỏi được rằng cách trăm dặm có một nhà giàu."
      },
      {
        "zh": "请你暗中打听一下这件事，别让大家都知道。",
        "py": "Qǐng nǐ ànzhōng dǎting yíxià zhè jiàn shì, bié ràng dàjiā dōu zhīdào.",
        "vn": "Nhờ bạn âm thầm dò hỏi chuyện này, đừng để mọi người đều biết."
      },
      {
        "zh": "我向邻居打听了一下，才知道他家已经搬走了。",
        "py": "Wǒ xiàng línjū dǎtingle yíxià, cái zhīdào tā jiā yǐjīng bānzǒu le.",
        "vn": "Tôi hỏi thăm hàng xóm mới biết nhà anh ấy đã chuyển đi rồi."
      }
    ],
    "colloFull": [
      {
        "zh": "打听消息",
        "py": "dǎting xiāoxi",
        "vn": "dò hỏi tin tức"
      },
      {
        "zh": "打听情况",
        "py": "dǎting qíngkuàng",
        "vn": "hỏi thăm tình hình"
      },
      {
        "zh": "向别人打听",
        "py": "xiàng biérén dǎting",
        "vn": "hỏi thăm người khác"
      },
      {
        "zh": "打听到",
        "py": "dǎtingdào",
        "vn": "dò hỏi được"
      },
      {
        "zh": "打听一下",
        "py": "dǎting yíxià",
        "vn": "hỏi thăm một chút"
      }
    ],
    "patterns": [
      {
        "s": "向 / 跟 + người + 打听 + việc",
        "m": "Hỏi thăm ai về việc gì"
      },
      {
        "s": "打听到 + nội dung",
        "m": "Dò hỏi được (có kết quả)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả thầy giáo cũng không hỏi được tin tức của cậu ấy.",
        "answer": "连老师都没打听到他的消息。",
        "answerPy": "Lián lǎoshī dōu méi dǎtingdào tā de xiāoxi.",
        "note": "打听到 = hỏi được (có kết quả); phủ định: 没打听到.",
        "pair": "连……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tin này là tôi hỏi thăm được từ hàng xóm.",
        "answer": "这个消息是我从邻居那儿打听到的。",
        "answerPy": "Zhège xiāoxi shì wǒ cóng línjū nàr dǎtingdào de.",
        "note": "从 + người + 那儿 + 打听到.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 14,
    "zh": "主人",
    "py": "zhǔrén",
    "pos": "Danh từ",
    "vn": "người chủ, chủ nhà",
    "hv": "chủ nhân",
    "em": "🏠",
    "lesson": 1,
    "explain": [
      "Người chủ nhà (tiếp khách), người chủ thuê người làm; cũng là chủ của vật nuôi, đồ vật."
    ],
    "usage": "那家主人, 小狗的主人, 做主人. Đối lập: 主人 — 客人.",
    "collo": [
      "那家主人",
      "小狗的主人",
      "热情的主人"
    ],
    "ex_zh": "那家主人见他身体结实，就留下了他。",
    "ex_py": "Nà jiā zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiale tā.",
    "ex_vn": "Chủ nhà thấy ông khoẻ mạnh, bèn giữ ông lại.",
    "exList": [
      {
        "zh": "那家主人见他身体结实，就留下了他。",
        "py": "Nà jiā zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiale tā.",
        "vn": "Chủ nhà thấy ông khoẻ mạnh, bèn giữ ông lại."
      },
      {
        "zh": "主人笑着说：“孩子，工钱没算错。”",
        "py": "Zhǔrén xiàozhe shuō: “Háizi, gōngqián méi suàncuò.”",
        "vn": "Chủ nhà cười nói: “Con à, tiền công không tính nhầm đâu.”"
      },
      {
        "zh": "这只小狗一直在门口等它的主人回家。",
        "py": "Zhè zhī xiǎo gǒu yìzhí zài ménkǒu děng tā de zhǔrén huí jiā.",
        "vn": "Chú chó nhỏ cứ ở cửa đợi chủ về nhà."
      }
    ],
    "colloFull": [
      {
        "zh": "那家主人",
        "py": "nà jiā zhǔrén",
        "vn": "chủ nhà đó"
      },
      {
        "zh": "小狗的主人",
        "py": "xiǎo gǒu de zhǔrén",
        "vn": "chủ của chú chó"
      },
      {
        "zh": "热情的主人",
        "py": "rèqíng de zhǔrén",
        "vn": "người chủ nhà hiếu khách"
      },
      {
        "zh": "做主人",
        "py": "zuò zhǔrén",
        "vn": "làm chủ nhà"
      },
      {
        "zh": "主人和客人",
        "py": "zhǔrén hé kèrén",
        "vn": "chủ và khách"
      }
    ],
    "patterns": [
      {
        "s": "N + 的 + 主人",
        "m": "Chủ của … (小狗的主人)"
      },
      {
        "s": "主人 ↔ 客人",
        "m": "Chủ nhà ↔ khách"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chủ nhà vừa thấy chúng tôi là nhiệt tình ra đón.",
        "answer": "主人一看到我们就热情地出来欢迎。",
        "answerPy": "Zhǔrén yí kàndào wǒmen jiù rèqíng de chūlai huānyíng.",
        "note": "主人 làm chủ ngữ; 一 + V, 就 + V.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chú chó nhỏ bị chủ bỏ lại ở công viên.",
        "answer": "小狗被主人丢在了公园里。",
        "answerPy": "Xiǎo gǒu bèi zhǔrén diū zài le gōngyuán li.",
        "note": "被 + 主人 + V: bị chủ làm gì.",
        "pair": "被"
      }
    ]
  },
  {
    "n": 15,
    "zh": "结实",
    "py": "jiēshi",
    "pos": "Tính từ",
    "vn": "cường tráng, khoẻ mạnh; chắc chắn",
    "hv": "kết thực",
    "em": "🏋️",
    "lesson": 1,
    "explain": [
      "① (Cơ thể) khoẻ mạnh, rắn chắc. ② (Đồ vật) bền, chắc chắn. Chú ý đọc jiēshi (thanh 1 + thanh nhẹ)."
    ],
    "usage": "身体结实, 结实的箱子, 很结实, 长得结实.",
    "collo": [
      "身体结实",
      "结实的桌子",
      "长得结实",
      "很结实"
    ],
    "ex_zh": "这个小伙子长得又高又结实。",
    "ex_py": "Zhège xiǎohuǒzi zhǎng de yòu gāo yòu jiēshi.",
    "ex_vn": "Chàng trai này vừa cao vừa rắn chắc.",
    "exList": [
      {
        "zh": "这个小伙子长得又高又结实。",
        "py": "Zhège xiǎohuǒzi zhǎng de yòu gāo yòu jiēshi.",
        "vn": "Chàng trai này vừa cao vừa rắn chắc."
      },
      {
        "zh": "那家主人见他身体结实，就留下了他。",
        "py": "Nà jiā zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiale tā.",
        "vn": "Chủ nhà thấy ông khoẻ mạnh, bèn giữ ông lại."
      },
      {
        "zh": "这个箱子很结实，放多少书都没问题。",
        "py": "Zhège xiāngzi hěn jiēshi, fàng duōshao shū dōu méi wèntí.",
        "vn": "Cái thùng này rất chắc, để bao nhiêu sách cũng không sao."
      }
    ],
    "colloFull": [
      {
        "zh": "身体结实",
        "py": "shēntǐ jiēshi",
        "vn": "thân thể khoẻ mạnh"
      },
      {
        "zh": "结实的桌子",
        "py": "jiēshi de zhuōzi",
        "vn": "cái bàn chắc chắn"
      },
      {
        "zh": "长得结实",
        "py": "zhǎng de jiēshi",
        "vn": "lớn lên rắn rỏi"
      },
      {
        "zh": "很结实",
        "py": "hěn jiēshi",
        "vn": "rất chắc"
      },
      {
        "zh": "又高又结实",
        "py": "yòu gāo yòu jiēshi",
        "vn": "vừa cao vừa rắn chắc"
      }
    ],
    "patterns": [
      {
        "s": "身体 / 东西 + 很结实",
        "m": "Người khoẻ mạnh / đồ vật chắc chắn"
      },
      {
        "s": "长得 + 结实",
        "m": "Lớn lên rắn rỏi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Từ khi ngày nào cũng tập thể dục, cơ thể tôi ngày càng khoẻ.",
        "answer": "自从每天锻炼以后，我的身体越来越结实了。",
        "answerPy": "Zìcóng měi tiān duànliàn yǐhòu, wǒ de shēntǐ yuè lái yuè jiēshi le.",
        "note": "身体 + 结实: người khoẻ.",
        "pair": "越来越"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiếc ghế này tuy cũ nhưng rất chắc.",
        "answer": "这把椅子虽然很旧，但是很结实。",
        "answerPy": "Zhè bǎ yǐzi suīrán hěn jiù, dànshì hěn jiēshi.",
        "note": "结实 nói về đồ vật = chắc, bền.",
        "pair": "虽然……但是……"
      }
    ]
  },
  {
    "n": 16,
    "zh": "勤奋",
    "py": "qínfèn",
    "pos": "Tính từ",
    "vn": "siêng năng, cần cù",
    "hv": "cần phấn",
    "em": "📚",
    "lesson": 1,
    "explain": [
      "Chăm chỉ, cố gắng không ngừng trong học tập, làm việc."
    ],
    "usage": "很勤奋, 勤奋(地)学习/工作/干活儿, 勤奋的学生. Thiên về văn viết hơn 勤快.",
    "collo": [
      "勤奋地学习",
      "勤奋地工作",
      "勤奋的学生",
      "十分勤奋"
    ],
    "ex_zh": "子路干起活来十分勤奋，主人很喜欢这个小伙子。",
    "ex_py": "Zǐlù gànqǐ huó lai shífēn qínfèn, zhǔrén hěn xǐhuan zhège xiǎohuǒzi.",
    "ex_vn": "Tử Lộ làm việc vô cùng chăm chỉ, chủ nhà rất quý chàng trai trẻ này.",
    "exList": [
      {
        "zh": "子路干起活来十分勤奋，主人很喜欢这个小伙子。",
        "py": "Zǐlù gànqǐ huó lai shífēn qínfèn, zhǔrén hěn xǐhuan zhège xiǎohuǒzi.",
        "vn": "Tử Lộ làm việc vô cùng chăm chỉ, chủ nhà rất quý chàng trai trẻ này."
      },
      {
        "zh": "她学习非常勤奋，每天都复习到很晚。",
        "py": "Tā xuéxí fēicháng qínfèn, měi tiān dōu fùxí dào hěn wǎn.",
        "vn": "Cô ấy học rất chăm, ngày nào cũng ôn bài đến khuya."
      },
      {
        "zh": "成功的人不一定最聪明，但一定很勤奋。",
        "py": "Chénggōng de rén bù yídìng zuì cōngming, dàn yídìng hěn qínfèn.",
        "vn": "Người thành công chưa chắc thông minh nhất, nhưng nhất định rất chăm chỉ."
      }
    ],
    "colloFull": [
      {
        "zh": "勤奋地学习",
        "py": "qínfèn de xuéxí",
        "vn": "học tập chăm chỉ"
      },
      {
        "zh": "勤奋地工作",
        "py": "qínfèn de gōngzuò",
        "vn": "làm việc chăm chỉ"
      },
      {
        "zh": "勤奋的学生",
        "py": "qínfèn de xuésheng",
        "vn": "học sinh chăm chỉ"
      },
      {
        "zh": "十分勤奋",
        "py": "shífēn qínfèn",
        "vn": "vô cùng chăm chỉ"
      },
      {
        "zh": "勤奋干活儿",
        "py": "qínfèn gàn huór",
        "vn": "chăm chỉ làm việc"
      }
    ],
    "patterns": [
      {
        "s": "勤奋(地) + 学习 / 工作 / 干活儿",
        "m": "Chăm chỉ học / làm việc"
      },
      {
        "s": "V + 起来 + 十分勤奋",
        "m": "Khi làm thì rất chăm (干起活来十分勤奋)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cậu ấy không những thông minh mà cũng rất chăm chỉ.",
        "answer": "他不仅很聪明，也很勤奋。",
        "answerPy": "Tā bùjǐn hěn cōngming, yě hěn qínfèn.",
        "note": "勤奋 là tính từ, đi sau 很.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần chăm chỉ học tập thì nhất định sẽ tiến bộ.",
        "answer": "只要勤奋学习，就一定会进步。",
        "answerPy": "Zhǐyào qínfèn xuéxí, jiù yídìng huì jìnbù.",
        "note": "勤奋 + 学习: tính từ làm trạng ngữ.",
        "pair": "只要……就……"
      }
    ]
  },
  {
    "n": 17,
    "zh": "银子",
    "py": "yínzi",
    "pos": "Danh từ",
    "vn": "bạc (tiền bạc thời xưa)",
    "hv": "ngân (tử)",
    "em": "🪙",
    "lesson": 1,
    "explain": [
      "Bạc (kim loại); thời xưa dùng bạc làm tiền nên 银子 cũng chỉ tiền bạc. Sách ghi 银（子）: 银 là từ gốc, 银子 hay dùng trong khẩu ngữ, truyện cổ."
    ],
    "usage": "Lượng từ 两: 十两银子. Trong truyện cổ: 给银子, 挣银子. Ngày nay nói tiền là 钱.",
    "collo": [
      "十两银子",
      "给银子",
      "挣银子"
    ],
    "ex_zh": "主人给的银子比他应该得到的多了许多。",
    "ex_py": "Zhǔrén gěi de yínzi bǐ tā yīnggāi dédào de duōle xǔduō.",
    "ex_vn": "Số bạc chủ nhà đưa nhiều hơn khá nhiều so với số ông đáng được nhận.",
    "exList": [
      {
        "zh": "主人给的银子比他应该得到的多了许多。",
        "py": "Zhǔrén gěi de yínzi bǐ tā yīnggāi dédào de duōle xǔduō.",
        "vn": "Số bạc chủ nhà đưa nhiều hơn khá nhiều so với số ông đáng được nhận."
      },
      {
        "zh": "古代人买东西常常用银子。",
        "py": "Gǔdài rén mǎi dōngxi chángcháng yòng yínzi.",
        "vn": "Người xưa mua đồ thường dùng bạc."
      },
      {
        "zh": "他在外面干了一年活儿，才挣了十两银子。",
        "py": "Tā zài wàimiàn gànle yì nián huór, cái zhèngle shí liǎng yínzi.",
        "vn": "Anh ấy làm lụng bên ngoài một năm mới kiếm được mười lạng bạc."
      }
    ],
    "colloFull": [
      {
        "zh": "十两银子",
        "py": "shí liǎng yínzi",
        "vn": "mười lạng bạc"
      },
      {
        "zh": "给银子",
        "py": "gěi yínzi",
        "vn": "trả bạc"
      },
      {
        "zh": "挣银子",
        "py": "zhèng yínzi",
        "vn": "kiếm bạc"
      },
      {
        "zh": "银色",
        "py": "yínsè",
        "vn": "màu bạc"
      }
    ],
    "patterns": [
      {
        "s": "Số + 两 + 银子",
        "m": "… lạng bạc (lượng từ 两)"
      },
      {
        "s": "银 + N",
        "m": "Làm bằng bạc / màu bạc (银色, 银行)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Số bạc này là chủ nhà thưởng cho anh ấy.",
        "answer": "这些银子是主人奖励给他的。",
        "answerPy": "Zhèxiē yínzi shì zhǔrén jiǎnglì gěi tā de.",
        "note": "是 + người làm + V + 的: nhấn mạnh ai thưởng.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy đem hết số bạc kiếm được đưa cho cha mẹ.",
        "answer": "他把挣到的银子都交给了父母。",
        "answerPy": "Tā bǎ zhèngdào de yínzi dōu jiāogěile fùmǔ.",
        "note": "把 + 银子 + 交给 + người; ôn 挣 (bài 2).",
        "pair": "把"
      }
    ]
  },
  {
    "n": 18,
    "zh": "老实",
    "py": "lǎoshi",
    "pos": "Tính từ",
    "vn": "thật thà, trung thực; ngoan, yên phận",
    "hv": "lão thực",
    "em": "😇",
    "lesson": 1,
    "explain": [
      "① Thật thà, không nói dối. ② Ngoan, yên phận, không quậy phá (你给我老实点儿！)."
    ],
    "usage": "很老实, 老实人, 老老实实地 + V (lặp AABB làm trạng ngữ). 老实 thiên về tính hiền lành, thật thà; 诚实 nhấn mạnh không nói dối.",
    "collo": [
      "老实人",
      "老老实实地",
      "老实点儿",
      "说老实话"
    ],
    "ex_zh": "子路老老实实地告诉了主人。",
    "ex_py": "Zǐlù lǎolǎoshíshí de gàosule zhǔrén.",
    "ex_vn": "Tử Lộ thật thà nói lại với chủ nhà.",
    "exList": [
      {
        "zh": "子路老老实实地告诉了主人。",
        "py": "Zǐlù lǎolǎoshíshí de gàosule zhǔrén.",
        "vn": "Tử Lộ thật thà nói lại với chủ nhà."
      },
      {
        "zh": "这是在警察局，你给我老实点儿！别乱动！",
        "py": "Zhè shì zài jǐngchájú, nǐ gěi wǒ lǎoshi diǎnr! Bié luàn dòng!",
        "vn": "Đây là đồn cảnh sát, anh ngồi yên cho tôi! Đừng động đậy lung tung!"
      },
      {
        "zh": "说老实话，我不太喜欢这部电影。",
        "py": "Shuō lǎoshi huà, wǒ bú tài xǐhuan zhè bù diànyǐng.",
        "vn": "Nói thật, tôi không thích bộ phim này lắm."
      }
    ],
    "colloFull": [
      {
        "zh": "老实人",
        "py": "lǎoshirén",
        "vn": "người thật thà"
      },
      {
        "zh": "老老实实地",
        "py": "lǎolǎoshíshí de",
        "vn": "một cách thật thà"
      },
      {
        "zh": "老实点儿",
        "py": "lǎoshi diǎnr",
        "vn": "ngoan ngoãn chút, yên chút"
      },
      {
        "zh": "说老实话",
        "py": "shuō lǎoshi huà",
        "vn": "nói thật"
      },
      {
        "zh": "为人老实",
        "py": "wéirén lǎoshi",
        "vn": "tính người thật thà"
      }
    ],
    "patterns": [
      {
        "s": "老老实实地 + V",
        "m": "Thật thà làm gì (lặp AABB làm trạng ngữ)"
      },
      {
        "s": "说老实话，……",
        "m": "Nói thật thì …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cậu ấy thật thà kể với cô giáo chuyện mình làm vỡ cửa kính.",
        "answer": "他老老实实地把打破窗户的事告诉了老师。",
        "answerPy": "Tā lǎolǎoshíshí de bǎ dǎpò chuānghu de shì gàosule lǎoshī.",
        "note": "老老实实地 đứng trước cụm 把.",
        "pair": "把"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy là người thật thà, chưa bao giờ nói dối.",
        "answer": "他是个老实人，从来没说过假话。",
        "answerPy": "Tā shì ge lǎoshirén, cónglái méi shuōguo jiǎhuà.",
        "note": "老实人 = người thật thà.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 19,
    "zh": "镇",
    "py": "zhèn",
    "pos": "Danh từ",
    "vn": "thị trấn",
    "hv": "trấn",
    "em": "🏘️",
    "lesson": 1,
    "explain": [
      "Thị trấn: khu dân cư nhỏ hơn thành phố, lớn hơn làng; cũng là một cấp hành chính ở Trung Quốc (dưới huyện 县)."
    ],
    "usage": "镇上 (trên thị trấn), 小镇, 城镇. Lượng từ 个/座.",
    "collo": [
      "镇上",
      "小镇",
      "路过镇上"
    ],
    "ex_zh": "路过镇上，他买了一袋米、一块肉、两条鱼。",
    "ex_py": "Lùguò zhèn shang, tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú.",
    "ex_vn": "Đi qua thị trấn, ông mua một bao gạo, một miếng thịt, hai con cá.",
    "exList": [
      {
        "zh": "路过镇上，他买了一袋米、一块肉、两条鱼。",
        "py": "Lùguò zhèn shang, tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú.",
        "vn": "Đi qua thị trấn, ông mua một bao gạo, một miếng thịt, hai con cá."
      },
      {
        "zh": "我的老家是一个安静的小镇。",
        "py": "Wǒ de lǎojiā shì yí ge ānjìng de xiǎo zhèn.",
        "vn": "Quê tôi là một thị trấn nhỏ yên tĩnh."
      },
      {
        "zh": "每个周末，姥姥都要去镇上买东西。",
        "py": "Měi ge zhōumò, lǎolao dōu yào qù zhèn shang mǎi dōngxi.",
        "vn": "Cuối tuần nào bà ngoại cũng lên thị trấn mua đồ."
      }
    ],
    "colloFull": [
      {
        "zh": "镇上",
        "py": "zhèn shang",
        "vn": "trên thị trấn"
      },
      {
        "zh": "小镇",
        "py": "xiǎo zhèn",
        "vn": "thị trấn nhỏ"
      },
      {
        "zh": "路过镇上",
        "py": "lùguò zhèn shang",
        "vn": "đi qua thị trấn"
      },
      {
        "zh": "城镇",
        "py": "chéngzhèn",
        "vn": "thành thị và thị trấn"
      },
      {
        "zh": "去镇上",
        "py": "qù zhèn shang",
        "vn": "lên thị trấn"
      }
    ],
    "patterns": [
      {
        "s": "去 / 在 + 镇上",
        "m": "Lên / ở thị trấn"
      },
      {
        "s": "县 > 镇 > 村",
        "m": "Huyện > trấn > làng (cấp hành chính)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thị trấn nhỏ này ngày càng đẹp.",
        "answer": "这个小镇越来越漂亮了。",
        "answerPy": "Zhège xiǎo zhèn yuè lái yuè piàoliang le.",
        "note": "小镇 = thị trấn nhỏ.",
        "pair": "越来越"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa từng đến thị trấn đó.",
        "answer": "我从来没去过那个镇。",
        "answerPy": "Wǒ cónglái méi qùguo nàge zhèn.",
        "note": "去过 + nơi chốn.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 20,
    "zh": "后背",
    "py": "hòubèi",
    "pos": "Danh từ",
    "vn": "lưng (người)",
    "hv": "hậu bối",
    "em": "🧍",
    "lesson": 1,
    "explain": [
      "Phần lưng của cơ thể (phía sau, từ vai đến eo). Chú ý 背 ở đây đọc bèi."
    ],
    "usage": "背在后背上, 后背疼, 拍拍后背.",
    "collo": [
      "后背上",
      "后背疼",
      "拍后背"
    ],
    "ex_zh": "他买了一袋米、一块肉、两条鱼，背在后背上。",
    "ex_py": "Tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú, bēi zài hòubèi shang.",
    "ex_vn": "Ông mua một bao gạo, một miếng thịt, hai con cá, vác trên lưng.",
    "exList": [
      {
        "zh": "他买了一袋米、一块肉、两条鱼，背在后背上。",
        "py": "Tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú, bēi zài hòubèi shang.",
        "vn": "Ông mua một bao gạo, một miếng thịt, hai con cá, vác trên lưng."
      },
      {
        "zh": "我坐了一天电脑，后背疼得不行。",
        "py": "Wǒ zuòle yì tiān diànnǎo, hòubèi téng de bùxíng.",
        "vn": "Tôi ngồi máy tính cả ngày, lưng đau không chịu nổi."
      },
      {
        "zh": "妈妈轻轻地拍了拍我的后背。",
        "py": "Māma qīngqīng de pāile pāi wǒ de hòubèi.",
        "vn": "Mẹ khẽ vỗ vỗ lưng tôi."
      }
    ],
    "colloFull": [
      {
        "zh": "后背上",
        "py": "hòubèi shang",
        "vn": "trên lưng"
      },
      {
        "zh": "后背疼",
        "py": "hòubèi téng",
        "vn": "đau lưng"
      },
      {
        "zh": "拍后背",
        "py": "pāi hòubèi",
        "vn": "vỗ lưng"
      },
      {
        "zh": "背在后背上",
        "py": "bēi zài hòubèi shang",
        "vn": "vác trên lưng"
      }
    ],
    "patterns": [
      {
        "s": "V + 在 + 后背上",
        "m": "Vác / đeo … trên lưng"
      },
      {
        "s": "后背 + 疼 / 出汗",
        "m": "Lưng đau / lưng đổ mồ hôi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lưng tôi bị muỗi đốt mấy nốt.",
        "answer": "我的后背被蚊子叮了好几个包。",
        "answerPy": "Wǒ de hòubèi bèi wénzi dīngle hǎo jǐ ge bāo.",
        "note": "Ôn 蚊子, 叮 (bài 1).",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy đặt con lên lưng, cõng về nhà.",
        "answer": "他把孩子放在后背上，背回了家。",
        "answerPy": "Tā bǎ háizi fàng zài hòubèi shang, bēihuíle jiā.",
        "note": "后背 (bèi, danh từ) và 背 (bēi, động từ) trong cùng một câu.",
        "pair": "把"
      }
    ]
  },
  {
    "n": 21,
    "zh": "滑",
    "py": "huá",
    "pos": "Tính từ / Động từ",
    "vn": "trơn; trượt",
    "hv": "hoạt",
    "em": "⛸️",
    "lesson": 1,
    "explain": [
      "Tính từ: trơn, dễ trượt (雪地很滑). Động từ: trượt, trượt chân (滑了一下); trượt tuyết (滑雪)."
    ],
    "usage": "路很滑, 地滑, 滑了一下, 滑倒, 滑雪.",
    "collo": [
      "路很滑",
      "滑了一下",
      "滑倒",
      "滑雪"
    ],
    "ex_zh": "雪地很滑，子路不小心滑了一下。",
    "ex_py": "Xuědì hěn huá, Zǐlù bù xiǎoxīn huále yí xià.",
    "ex_vn": "Đường tuyết rất trơn, Tử Lộ không cẩn thận trượt một cái.",
    "exList": [
      {
        "zh": "雪地很滑，子路不小心滑了一下。",
        "py": "Xuědì hěn huá, Zǐlù bù xiǎoxīn huále yí xià.",
        "vn": "Đường tuyết rất trơn, Tử Lộ không cẩn thận trượt một cái."
      },
      {
        "zh": "下雨天路很滑，开车一定要慢一点儿。",
        "py": "Xià yǔ tiān lù hěn huá, kāi chē yídìng yào màn yìdiǎnr.",
        "vn": "Ngày mưa đường rất trơn, lái xe nhất định phải chậm lại."
      },
      {
        "zh": "奶奶在洗手间滑倒了，我赶紧把她扶了起来。",
        "py": "Nǎinai zài xǐshǒujiān huádǎo le, wǒ gǎnjǐn bǎ tā fúle qǐlai.",
        "vn": "Bà nội trượt ngã trong nhà vệ sinh, tôi vội đỡ bà dậy."
      }
    ],
    "colloFull": [
      {
        "zh": "路很滑",
        "py": "lù hěn huá",
        "vn": "đường rất trơn"
      },
      {
        "zh": "滑了一下",
        "py": "huále yí xià",
        "vn": "trượt một cái"
      },
      {
        "zh": "滑倒",
        "py": "huádǎo",
        "vn": "trượt ngã"
      },
      {
        "zh": "滑雪",
        "py": "huáxuě",
        "vn": "trượt tuyết"
      },
      {
        "zh": "地滑",
        "py": "dì huá",
        "vn": "sàn trơn"
      }
    ],
    "patterns": [
      {
        "s": "N + 很滑",
        "m": "… rất trơn (tính từ)"
      },
      {
        "s": "滑 + 了一下 / 倒",
        "m": "Trượt một cái / trượt ngã (động từ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đường hễ có tuyết là rất trơn.",
        "answer": "路上一下雪就很滑。",
        "answerPy": "Lù shang yí xià xuě jiù hěn huá.",
        "note": "滑 là tính từ: 很滑.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngay cả người lớn cũng bị trượt ngã.",
        "answer": "连大人都滑倒了。",
        "answerPy": "Lián dàrén dōu huádǎo le.",
        "note": "滑倒 = trượt ngã (động từ + bổ ngữ kết quả).",
        "pair": "连……都……"
      }
    ]
  },
  {
    "n": 22,
    "zh": "甩",
    "py": "shuǎi",
    "pos": "Động từ",
    "vn": "vung, quăng, hất, văng",
    "hv": "suý",
    "em": "🌀",
    "lesson": 1,
    "explain": [
      "Vung mạnh, hất mạnh (tay, tóc…) hoặc quăng, làm văng một vật đi."
    ],
    "usage": "甩手, 甩头发, 被甩出去, 甩掉. Hay dùng với bổ ngữ xu hướng: 甩出去, 甩到…….",
    "collo": [
      "甩出去",
      "甩手",
      "甩头发",
      "甩掉"
    ],
    "ex_zh": "背上的米袋差点儿被甩出去。",
    "ex_py": "Bèi shang de mǐdài chàdiǎnr bèi shuǎi chuqu.",
    "ex_vn": "Bao gạo trên lưng suýt nữa bị văng ra ngoài.",
    "exList": [
      {
        "zh": "背上的米袋差点儿被甩出去。",
        "py": "Bèi shang de mǐdài chàdiǎnr bèi shuǎi chuqu.",
        "vn": "Bao gạo trên lưng suýt nữa bị văng ra ngoài."
      },
      {
        "zh": "她洗完头，甩了甩头发上的水。",
        "py": "Tā xǐwán tóu, shuǎile shuǎi tóufa shang de shuǐ.",
        "vn": "Cô ấy gội đầu xong, hất hất nước trên tóc."
      },
      {
        "zh": "车突然停下来，我手里的书被甩到了地上。",
        "py": "Chē tūrán tíng xialai, wǒ shǒu li de shū bèi shuǎi dàole dì shang.",
        "vn": "Xe đột ngột dừng lại, quyển sách trong tay tôi bị văng xuống đất."
      }
    ],
    "colloFull": [
      {
        "zh": "甩出去",
        "py": "shuǎi chuqu",
        "vn": "văng ra ngoài"
      },
      {
        "zh": "甩手",
        "py": "shuǎi shǒu",
        "vn": "vung tay, hất tay"
      },
      {
        "zh": "甩头发",
        "py": "shuǎi tóufa",
        "vn": "hất tóc"
      },
      {
        "zh": "甩掉",
        "py": "shuǎidiào",
        "vn": "quăng đi, cắt đuôi"
      },
      {
        "zh": "甩到地上",
        "py": "shuǎi dào dì shang",
        "vn": "văng xuống đất"
      }
    ],
    "patterns": [
      {
        "s": "甩 + 出去 / 到……",
        "m": "Văng ra / văng tới …"
      },
      {
        "s": "被 + 甩 + 出去",
        "m": "Bị văng ra (câu bị động)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiếc điện thoại bị văng ra ngoài xe.",
        "answer": "手机被甩出了车外。",
        "answerPy": "Shǒujī bèi shuǎichūle chē wài.",
        "note": "被 + 甩 + 出 + nơi chốn.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Cô ấy hễ tức giận là hất tay bỏ đi.",
        "answer": "她一生气就甩手走了。",
        "answerPy": "Tā yì shēngqì jiù shuǎi shǒu zǒu le.",
        "note": "甩手 = hất tay (tỏ ý bực bội).",
        "pair": "一……就……"
      }
    ]
  },
  {
    "n": 23,
    "zh": "顶",
    "py": "dǐng",
    "pos": "Động từ / Danh từ / Lượng từ",
    "vn": "đội, đi ngược (gió, tuyết); đỉnh; cái (mũ)",
    "hv": "đỉnh",
    "em": "🧢",
    "lesson": 1,
    "explain": [
      "Danh từ: đỉnh, chóp (头顶, 山顶). Động từ: đội, húc bằng đầu (用头顶); đón, chống chọi (顶着大雪, 顶着压力). Lượng từ: dùng cho mũ, ô lớn (一顶帽子)."
    ],
    "usage": "顶着 + 风/雪/雨/压力; 用头顶; 一顶帽子 / 一顶伞; 山顶, 头顶, 屋顶.",
    "collo": [
      "顶着大雪",
      "顶着压力",
      "一顶帽子",
      "山顶"
    ],
    "ex_zh": "天气非常寒冷，子路顶着大雪往前走。",
    "ex_py": "Tiānqì fēicháng hánlěng, Zǐlù dǐngzhe dàxuě wǎng qián zǒu.",
    "ex_vn": "Trời rét buốt, Tử Lộ đội tuyết lớn đi về phía trước.",
    "exList": [
      {
        "zh": "天气非常寒冷，子路顶着大雪往前走。",
        "py": "Tiānqì fēicháng hánlěng, Zǐlù dǐngzhe dàxuě wǎng qián zǒu.",
        "vn": "Trời rét buốt, Tử Lộ đội tuyết lớn đi về phía trước."
      },
      {
        "zh": "您为什么要顶着压力来做这件事呢？",
        "py": "Nín wèi shénme yào dǐngzhe yālì lái zuò zhè jiàn shì ne?",
        "vn": "Vì sao ông lại chịu áp lực để làm việc này?"
      },
      {
        "zh": "我这顶新帽子怎么样？",
        "py": "Wǒ zhè dǐng xīn màozi zěnmeyàng?",
        "vn": "Chiếc mũ mới này của tôi thế nào?"
      }
    ],
    "colloFull": [
      {
        "zh": "顶着大雪",
        "py": "dǐngzhe dàxuě",
        "vn": "đội tuyết lớn"
      },
      {
        "zh": "顶着压力",
        "py": "dǐngzhe yālì",
        "vn": "chịu áp lực"
      },
      {
        "zh": "一顶帽子",
        "py": "yì dǐng màozi",
        "vn": "một chiếc mũ"
      },
      {
        "zh": "山顶",
        "py": "shāndǐng",
        "vn": "đỉnh núi"
      },
      {
        "zh": "头顶",
        "py": "tóudǐng",
        "vn": "đỉnh đầu"
      }
    ],
    "patterns": [
      {
        "s": "顶着 + 风 / 雪 / 雨 / 压力",
        "m": "Đội, chống chọi với gió / tuyết / mưa / áp lực"
      },
      {
        "s": "一顶 + 帽子 / 伞",
        "m": "Một chiếc mũ / ô lớn (lượng từ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy gió rất to nhưng họ vẫn ngược gió leo lên đỉnh núi.",
        "answer": "虽然风很大，但是他们还是顶着大风爬上了山顶。",
        "answerPy": "Suīrán fēng hěn dà, dànshì tāmen háishi dǐngzhe dàfēng páshangle shāndǐng.",
        "note": "顶着 (động từ) và 山顶 (danh từ) trong cùng một câu.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiếc mũ này là mẹ mua cho tôi ở thị trấn.",
        "answer": "这顶帽子是妈妈在镇上给我买的。",
        "answerPy": "Zhè dǐng màozi shì māma zài zhèn shang gěi wǒ mǎi de.",
        "note": "顶 làm lượng từ cho 帽子.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 24,
    "zh": "扶",
    "py": "fú",
    "pos": "Động từ",
    "vn": "đỡ, dìu, vịn",
    "hv": "phù",
    "em": "🤝",
    "lesson": 1,
    "explain": [
      "Dùng tay đỡ, dìu người khác hoặc vịn, giữ vật cho khỏi ngã."
    ],
    "usage": "扶 + người/vật: 扶老人, 扶着墙, 扶起来. Kết hợp số lượng: 扶一下, 扶一把 (giúp một tay).",
    "collo": [
      "扶一下",
      "扶一把",
      "扶着",
      "扶起来"
    ],
    "ex_zh": "扶着米袋的双手冻得不行。",
    "ex_py": "Fúzhe mǐdài de shuāng shǒu dòng de bùxíng.",
    "ex_vn": "Hai bàn tay giữ bao gạo lạnh cóng không chịu nổi.",
    "exList": [
      {
        "zh": "扶着米袋的双手冻得不行。",
        "py": "Fúzhe mǐdài de shuāng shǒu dòng de bùxíng.",
        "vn": "Hai bàn tay giữ bao gạo lạnh cóng không chịu nổi."
      },
      {
        "zh": "他把那位老爷爷扶过了马路。",
        "py": "Tā bǎ nà wèi lǎo yéye fúguòle mǎlù.",
        "vn": "Cậu ấy dìu cụ ông qua đường."
      },
      {
        "zh": "你扶我一把，我的脚有点儿疼。",
        "py": "Nǐ fú wǒ yì bǎ, wǒ de jiǎo yǒudiǎnr téng.",
        "vn": "Bạn đỡ tôi một tay, chân tôi hơi đau."
      }
    ],
    "colloFull": [
      {
        "zh": "扶一下",
        "py": "fú yí xià",
        "vn": "đỡ một chút"
      },
      {
        "zh": "扶一把",
        "py": "fú yì bǎ",
        "vn": "đỡ một tay"
      },
      {
        "zh": "扶着",
        "py": "fúzhe",
        "vn": "vịn, đỡ"
      },
      {
        "zh": "扶起来",
        "py": "fú qilai",
        "vn": "đỡ dậy"
      },
      {
        "zh": "扶老人",
        "py": "fú lǎorén",
        "vn": "dìu người già"
      }
    ],
    "patterns": [
      {
        "s": "扶 + 一下 / 一把",
        "m": "Đỡ một chút / đỡ một tay"
      },
      {
        "s": "把 + người + 扶 + 起来 / 过……",
        "m": "Đỡ ai dậy / dìu ai qua …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bà cụ vừa ngã, tôi liền đỡ bà dậy.",
        "answer": "老奶奶一摔倒，我就把她扶了起来。",
        "answerPy": "Lǎo nǎinai yì shuāidǎo, wǒ jiù bǎ tā fúle qǐlai.",
        "note": "扶 + 起来: đỡ dậy.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi dìu ông nội ngồi xuống ghế.",
        "answer": "我把爷爷扶到了椅子上。",
        "answerPy": "Wǒ bǎ yéye fúdàole yǐzi shang.",
        "note": "把 + người + 扶到 + nơi chốn.",
        "pair": "把"
      }
    ]
  },
  {
    "n": 25,
    "zh": "不行",
    "py": "bùxíng",
    "pos": "Động từ",
    "vn": "(chỉ mức độ) ghê gớm, cực kỳ, không chịu nổi",
    "hv": "bất hành",
    "em": "🥶",
    "lesson": 1,
    "explain": [
      "Ngoài nghĩa quen “không được”, 不行 đứng sau 得 làm bổ ngữ chỉ MỨC ĐỘ rất cao: 冻得不行 = rét cóng không chịu nổi."
    ],
    "usage": "Adj / V tâm lý + 得 + 不行: 冻得不行, 累得不行, 高兴得不行. Gần nghĩa: 得很, 得不得了.",
    "collo": [
      "冻得不行",
      "累得不行",
      "困得不行",
      "高兴得不行"
    ],
    "ex_zh": "扶着米袋的双手冻得不行，就停下来暖暖。",
    "ex_py": "Fúzhe mǐdài de shuāng shǒu dòng de bùxíng, jiù tíng xialai nuǎnnuan.",
    "ex_vn": "Hai tay giữ bao gạo lạnh cóng không chịu nổi, ông bèn dừng lại sưởi cho ấm.",
    "exList": [
      {
        "zh": "扶着米袋的双手冻得不行，就停下来暖暖。",
        "py": "Fúzhe mǐdài de shuāng shǒu dòng de bùxíng, jiù tíng xialai nuǎnnuan.",
        "vn": "Hai tay giữ bao gạo lạnh cóng không chịu nổi, ông bèn dừng lại sưởi cho ấm."
      },
      {
        "zh": "昨天晚上只睡了三个小时，今天我困得不行。",
        "py": "Zuótiān wǎnshang zhǐ shuìle sān ge xiǎoshí, jīntiān wǒ kùn de bùxíng.",
        "vn": "Tối qua chỉ ngủ ba tiếng, hôm nay tôi buồn ngủ kinh khủng."
      },
      {
        "zh": "听说考试通过了，他高兴得不行。",
        "py": "Tīngshuō kǎoshì tōngguò le, tā gāoxìng de bùxíng.",
        "vn": "Nghe tin thi đỗ, cậu ấy vui không tả xiết."
      }
    ],
    "colloFull": [
      {
        "zh": "冻得不行",
        "py": "dòng de bùxíng",
        "vn": "lạnh cóng không chịu nổi"
      },
      {
        "zh": "累得不行",
        "py": "lèi de bùxíng",
        "vn": "mệt kinh khủng"
      },
      {
        "zh": "困得不行",
        "py": "kùn de bùxíng",
        "vn": "buồn ngủ kinh khủng"
      },
      {
        "zh": "高兴得不行",
        "py": "gāoxìng de bùxíng",
        "vn": "vui không tả xiết"
      },
      {
        "zh": "疼得不行",
        "py": "téng de bùxíng",
        "vn": "đau không chịu nổi"
      }
    ],
    "patterns": [
      {
        "s": "Adj + 得 + 不行",
        "m": "… đến mức không chịu nổi (mức độ rất cao)"
      },
      {
        "s": "= Adj + 得很 / 得不得了",
        "m": "Cách nói tương đương"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đi bộ cả ngày, ngay cả cậu em hiếu động cũng mệt rã rời.",
        "answer": "走了一天路，连爱动的弟弟都累得不行了。",
        "answerPy": "Zǒule yì tiān lù, lián ài dòng de dìdi dōu lèi de bùxíng le.",
        "note": "累 + 得 + 不行; không thêm 很 trước 累.",
        "pair": "连……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhà nửa năm không ai dọn, vừa vào cửa đã thấy bẩn kinh khủng.",
        "answer": "家里半年没人收拾，一进门就发现脏得不行。",
        "answerPy": "Jiā li bàn nián méi rén shōushi, yí jìn mén jiù fāxiàn zāng de bùxíng.",
        "note": "脏 + 得 + 不行.",
        "pair": "一……就……"
      }
    ]
  },
  {
    "n": 26,
    "zh": "团圆",
    "py": "tuányuán",
    "pos": "Động từ",
    "vn": "sum họp, đoàn tụ",
    "hv": "đoàn viên",
    "em": "👨‍👩‍👧",
    "lesson": 1,
    "explain": [
      "(Người thân trong gia đình) sau thời gian xa cách lại được ở bên nhau."
    ],
    "usage": "一家人团圆, 团圆饭 (bữa cơm đoàn viên, nhất là đêm giao thừa), 过年团圆. Không mang tân ngữ: 跟家人团圆 (✗ 团圆家人).",
    "collo": [
      "团圆饭",
      "一家人团圆",
      "过年团圆"
    ],
    "ex_zh": "一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。",
    "ex_py": "Yì jiā rén gāogāoxìngxìng de shēng huǒ zuò fàn, bǎobǎo de chīle dùn tuányuánfàn.",
    "ex_vn": "Cả nhà vui vẻ nhóm lửa nấu cơm, ăn một bữa cơm đoàn viên no nê.",
    "exList": [
      {
        "zh": "一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。",
        "py": "Yì jiā rén gāogāoxìngxìng de shēng huǒ zuò fàn, bǎobǎo de chīle dùn tuányuánfàn.",
        "vn": "Cả nhà vui vẻ nhóm lửa nấu cơm, ăn một bữa cơm đoàn viên no nê."
      },
      {
        "zh": "每年春节，在外地打工的人都要回家跟家人团圆。",
        "py": "Měi nián Chūnjié, zài wàidì dǎgōng de rén dōu yào huí jiā gēn jiārén tuányuán.",
        "vn": "Tết năm nào, người đi làm ăn xa cũng về nhà đoàn tụ với gia đình."
      },
      {
        "zh": "中秋节是一个团圆的节日。",
        "py": "Zhōngqiū Jié shì yí ge tuányuán de jiérì.",
        "vn": "Tết Trung thu là ngày lễ đoàn viên."
      }
    ],
    "colloFull": [
      {
        "zh": "团圆饭",
        "py": "tuányuánfàn",
        "vn": "bữa cơm đoàn viên"
      },
      {
        "zh": "一家人团圆",
        "py": "yì jiā rén tuányuán",
        "vn": "cả nhà đoàn tụ"
      },
      {
        "zh": "过年团圆",
        "py": "guònián tuányuán",
        "vn": "đoàn tụ dịp Tết"
      },
      {
        "zh": "跟家人团圆",
        "py": "gēn jiārén tuányuán",
        "vn": "đoàn tụ với gia đình"
      },
      {
        "zh": "团圆的节日",
        "py": "tuányuán de jiérì",
        "vn": "ngày lễ đoàn viên"
      }
    ],
    "patterns": [
      {
        "s": "跟 / 和 + người + 团圆",
        "m": "Đoàn tụ với ai"
      },
      {
        "s": "吃 + 团圆饭",
        "m": "Ăn bữa cơm đoàn viên"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần cả nhà được đoàn tụ thì ăn gì cũng ngon.",
        "answer": "只要一家人能团圆，吃什么都香。",
        "answerPy": "Zhǐyào yì jiā rén néng tuányuán, chī shénme dōu xiāng.",
        "note": "团圆 không mang tân ngữ; chủ ngữ là 一家人.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tết năm nay cả nhà chúng tôi đoàn tụ ở nhà bà ngoại.",
        "answer": "今年春节我们一家人是在姥姥家团圆的。",
        "answerPy": "Jīnnián Chūnjié wǒmen yì jiā rén shì zài lǎolao jiā tuányuán de.",
        "note": "是 + 在 + nơi chốn + 团圆 + 的: nhấn mạnh địa điểm.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 27,
    "zh": "去世",
    "py": "qùshì",
    "pos": "Động từ",
    "vn": "qua đời, từ trần",
    "hv": "khứ thế",
    "em": "🕯️",
    "lesson": 1,
    "explain": [
      "Chết, qua đời — cách nói lịch sự, trang trọng, dùng cho người lớn tuổi, người mình kính trọng."
    ],
    "usage": "Người + 去世了; 在 + thời gian + 去世. Không mang tân ngữ. Lịch sự hơn 死.",
    "collo": [
      "父母去世",
      "因病去世",
      "去世以后"
    ],
    "ex_zh": "后来子路的父母去世了，他也南下到了楚国。",
    "ex_py": "Hòulái Zǐlù de fùmǔ qùshì le, tā yě nánxià dàole Chǔguó.",
    "ex_vn": "Về sau cha mẹ Tử Lộ qua đời, ông cũng xuống phía nam đến nước Sở.",
    "exList": [
      {
        "zh": "后来子路的父母去世了，他也南下到了楚国。",
        "py": "Hòulái Zǐlù de fùmǔ qùshì le, tā yě nánxià dàole Chǔguó.",
        "vn": "Về sau cha mẹ Tử Lộ qua đời, ông cũng xuống phía nam đến nước Sở."
      },
      {
        "zh": "爷爷去世已经三年了，我至今还常常想起他。",
        "py": "Yéye qùshì yǐjīng sān nián le, wǒ zhìjīn hái chángcháng xiǎngqǐ tā.",
        "vn": "Ông nội mất đã ba năm, đến nay tôi vẫn thường nhớ đến ông."
      },
      {
        "zh": "这位作家去世以后，他的书越来越受欢迎。",
        "py": "Zhè wèi zuòjiā qùshì yǐhòu, tā de shū yuè lái yuè shòu huānyíng.",
        "vn": "Sau khi nhà văn này qua đời, sách của ông ngày càng được yêu thích."
      }
    ],
    "colloFull": [
      {
        "zh": "父母去世",
        "py": "fùmǔ qùshì",
        "vn": "cha mẹ qua đời"
      },
      {
        "zh": "因病去世",
        "py": "yīn bìng qùshì",
        "vn": "qua đời vì bệnh"
      },
      {
        "zh": "去世以后",
        "py": "qùshì yǐhòu",
        "vn": "sau khi qua đời"
      },
      {
        "zh": "突然去世",
        "py": "tūrán qùshì",
        "vn": "đột ngột qua đời"
      }
    ],
    "patterns": [
      {
        "s": "Người + (因病) + 去世了",
        "m": "Ai đó qua đời (vì bệnh)"
      },
      {
        "s": "去世 + 已经 + thời gian + 了",
        "m": "Đã mất được bao lâu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy ông ngoại qua đời đã nhiều năm nhưng đến nay tôi vẫn không quên được ông.",
        "answer": "虽然姥爷去世很多年了，但是我至今忘不了他。",
        "answerPy": "Suīrán lǎoye qùshì hěn duō nián le, dànshì wǒ zhìjīn wàng bu liǎo tā.",
        "note": "去世 + khoảng thời gian + 了; ôn 至今.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cụ ông ấy qua đời năm ngoái.",
        "answer": "那位老人是去年去世的。",
        "answerPy": "Nà wèi lǎorén shì qùnián qùshì de.",
        "note": "是 + thời gian + 去世 + 的: nhấn mạnh thời điểm.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 28,
    "zh": "国君",
    "py": "guójūn",
    "pos": "Danh từ",
    "vn": "vua (một nước)",
    "hv": "quốc quân",
    "em": "👑",
    "lesson": 1,
    "explain": [
      "Người đứng đầu một nước thời phong kiến, vua — hay dùng khi nói về các nước thời cổ như thời Xuân Thu."
    ],
    "usage": "楚国国君, 一位国君. Gần nghĩa 国王 (từ trong phần 扩展).",
    "collo": [
      "楚国国君",
      "一位国君",
      "国君和大臣"
    ],
    "ex_zh": "楚国国君觉得他很有本领，是个人才。",
    "ex_py": "Chǔguó guójūn juéde tā hěn yǒu běnlǐng, shì ge réncái.",
    "ex_vn": "Vua nước Sở thấy ông rất có bản lĩnh, là một nhân tài.",
    "exList": [
      {
        "zh": "楚国国君觉得他很有本领，是个人才。",
        "py": "Chǔguó guójūn juéde tā hěn yǒu běnlǐng, shì ge réncái.",
        "vn": "Vua nước Sở thấy ông rất có bản lĩnh, là một nhân tài."
      },
      {
        "zh": "春秋时期有很多小国，每个国家都有自己的国君。",
        "py": "Chūnqiū shíqī yǒu hěn duō xiǎo guó, měi ge guójiā dōu yǒu zìjǐ de guójūn.",
        "vn": "Thời Xuân Thu có rất nhiều nước nhỏ, nước nào cũng có vua của mình."
      },
      {
        "zh": "这位国君很重视人才。",
        "py": "Zhè wèi guójūn hěn zhòngshì réncái.",
        "vn": "Vị vua này rất coi trọng nhân tài."
      }
    ],
    "colloFull": [
      {
        "zh": "楚国国君",
        "py": "Chǔguó guójūn",
        "vn": "vua nước Sở"
      },
      {
        "zh": "一位国君",
        "py": "yí wèi guójūn",
        "vn": "một vị vua"
      },
      {
        "zh": "国君和大臣",
        "py": "guójūn hé dàchén",
        "vn": "vua và các đại thần"
      },
      {
        "zh": "古代的国君",
        "py": "gǔdài de guójūn",
        "vn": "các vị vua thời xưa"
      }
    ],
    "patterns": [
      {
        "s": "Tên nước + 国君",
        "m": "Vua của nước … (楚国国君)"
      },
      {
        "s": "国君 ≈ 国王",
        "m": "Đều là vua; 国君 hay dùng cho các nước thời cổ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tử Lộ được vua nước Sở giữ lại làm quan.",
        "answer": "子路被楚国国君留下来做了官。",
        "answerPy": "Zǐlù bèi Chǔguó guójūn liú xialai zuòle guān.",
        "note": "被 + 国君 + 留下来.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Vị vua này không những coi trọng nhân tài mà cũng rất yêu thương dân chúng.",
        "answer": "这位国君不仅重视人才，也很爱护百姓。",
        "answerPy": "Zhè wèi guójūn bùjǐn zhòngshì réncái, yě hěn àihù bǎixìng.",
        "note": "Ôn 爱护 (bài 1).",
        "pair": "不仅……也……"
      }
    ]
  },
  {
    "n": 29,
    "zh": "本领",
    "py": "běnlǐng",
    "pos": "Danh từ",
    "vn": "bản lĩnh, tài năng, năng lực",
    "hv": "bản lĩnh",
    "em": "🦸",
    "lesson": 1,
    "explain": [
      "Tài năng, kỹ năng, khả năng làm được việc. Khác “bản lĩnh” trong tiếng Việt (vững vàng về tinh thần): 本领 thiên về TÀI, KỸ NĂNG."
    ],
    "usage": "有本领, 很有本领, 学本领, 本领高强, 本领大.",
    "collo": [
      "有本领",
      "学本领",
      "本领高强"
    ],
    "ex_zh": "邻居家有一条本领高强的小狗，能看门，能送报，还能买菜。",
    "ex_py": "Línjū jiā yǒu yì tiáo běnlǐng gāoqiáng de xiǎo gǒu, néng kān mén, néng sòng bào, hái néng mǎi cài.",
    "ex_vn": "Nhà hàng xóm có một chú chó nhỏ rất giỏi, biết giữ nhà, biết đưa báo, lại còn biết đi mua rau.",
    "exList": [
      {
        "zh": "邻居家有一条本领高强的小狗，能看门，能送报，还能买菜。",
        "py": "Línjū jiā yǒu yì tiáo běnlǐng gāoqiáng de xiǎo gǒu, néng kān mén, néng sòng bào, hái néng mǎi cài.",
        "vn": "Nhà hàng xóm có một chú chó nhỏ rất giỏi, biết giữ nhà, biết đưa báo, lại còn biết đi mua rau."
      },
      {
        "zh": "楚国国君觉得他很有本领，是个人才。",
        "py": "Chǔguó guójūn juéde tā hěn yǒu běnlǐng, shì ge réncái.",
        "vn": "Vua nước Sở thấy ông rất có tài, là một nhân tài."
      },
      {
        "zh": "年轻人要多学点儿本领，将来才能找到好工作。",
        "py": "Niánqīngrén yào duō xué diǎnr běnlǐng, jiānglái cái néng zhǎodào hǎo gōngzuò.",
        "vn": "Người trẻ phải học thêm nhiều kỹ năng, sau này mới tìm được việc tốt."
      }
    ],
    "colloFull": [
      {
        "zh": "有本领",
        "py": "yǒu běnlǐng",
        "vn": "có tài"
      },
      {
        "zh": "学本领",
        "py": "xué běnlǐng",
        "vn": "học kỹ năng"
      },
      {
        "zh": "本领高强",
        "py": "běnlǐng gāoqiáng",
        "vn": "tài giỏi hơn người"
      },
      {
        "zh": "很有本领",
        "py": "hěn yǒu běnlǐng",
        "vn": "rất có tài"
      },
      {
        "zh": "本领大",
        "py": "běnlǐng dà",
        "vn": "tài giỏi"
      }
    ],
    "patterns": [
      {
        "s": "(很) 有本领 / 本领很大",
        "m": "Rất có tài"
      },
      {
        "s": "学 / 练 + 本领",
        "m": "Học / rèn kỹ năng"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần có tài thì đi đâu cũng tìm được việc.",
        "answer": "只要有本领，到哪儿都能找到工作。",
        "answerPy": "Zhǐyào yǒu běnlǐng, dào nǎr dōu néng zhǎodào gōngzuò.",
        "note": "有本领 = có tài.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tài của anh ấy ngày càng lớn.",
        "answer": "他的本领越来越大了。",
        "answerPy": "Tā de běnlǐng yuè lái yuè dà le.",
        "note": "本领 + 大: tài giỏi.",
        "pair": "越来越"
      }
    ]
  },
  {
    "n": 30,
    "zh": "人才",
    "py": "réncái",
    "pos": "Danh từ",
    "vn": "nhân tài, người có tài",
    "hv": "nhân tài",
    "em": "🌟",
    "lesson": 1,
    "explain": [
      "Người có tài năng, có đức, có ích cho xã hội."
    ],
    "usage": "是个人才, 培养人才, 重视人才, 人才市场. Lượng từ 个/位.",
    "collo": [
      "是个人才",
      "培养人才",
      "重视人才"
    ],
    "ex_zh": "楚国国君觉得他是个人才，就留他做了官。",
    "ex_py": "Chǔguó guójūn juéde tā shì ge réncái, jiù liú tā zuòle guān.",
    "ex_vn": "Vua nước Sở thấy ông là một nhân tài, bèn giữ ông lại làm quan.",
    "exList": [
      {
        "zh": "楚国国君觉得他是个人才，就留他做了官。",
        "py": "Chǔguó guójūn juéde tā shì ge réncái, jiù liú tā zuòle guān.",
        "vn": "Vua nước Sở thấy ông là một nhân tài, bèn giữ ông lại làm quan."
      },
      {
        "zh": "学校的任务是为国家培养人才。",
        "py": "Xuéxiào de rènwu shì wèi guójiā péiyǎng réncái.",
        "vn": "Nhiệm vụ của nhà trường là đào tạo nhân tài cho đất nước."
      },
      {
        "zh": "这家公司非常重视人才，给员工的待遇很好。",
        "py": "Zhè jiā gōngsī fēicháng zhòngshì réncái, gěi yuángōng de dàiyù hěn hǎo.",
        "vn": "Công ty này rất coi trọng nhân tài, đãi ngộ cho nhân viên rất tốt."
      }
    ],
    "colloFull": [
      {
        "zh": "是个人才",
        "py": "shì ge réncái",
        "vn": "là một nhân tài"
      },
      {
        "zh": "培养人才",
        "py": "péiyǎng réncái",
        "vn": "đào tạo nhân tài"
      },
      {
        "zh": "重视人才",
        "py": "zhòngshì réncái",
        "vn": "coi trọng nhân tài"
      },
      {
        "zh": "优秀人才",
        "py": "yōuxiù réncái",
        "vn": "nhân tài xuất sắc"
      },
      {
        "zh": "人才市场",
        "py": "réncái shìchǎng",
        "vn": "thị trường nhân lực"
      }
    ],
    "patterns": [
      {
        "s": "是个人才",
        "m": "Là một nhân tài (khen ai)"
      },
      {
        "s": "培养 / 重视 / 需要 + 人才",
        "m": "Đào tạo / coi trọng / cần nhân tài"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả công ty nước ngoài cũng muốn mời nhân tài như anh ấy.",
        "answer": "连外国公司都想请他这样的人才。",
        "answerPy": "Lián wàiguó gōngsī dōu xiǎng qǐng tā zhèyàng de réncái.",
        "note": "他这样的人才 = nhân tài như anh ấy.",
        "pair": "连……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Nhân tài mà ngôi trường này đào tạo ngày càng nhiều.",
        "answer": "这所学校培养的人才越来越多。",
        "answerPy": "Zhè suǒ xuéxiào péiyǎng de réncái yuè lái yuè duō.",
        "note": "培养 + 人才.",
        "pair": "越来越"
      }
    ]
  },
  {
    "n": 31,
    "zh": "官",
    "py": "guān",
    "pos": "Danh từ",
    "vn": "quan, quan chức",
    "hv": "quan",
    "em": "🎩",
    "lesson": 1,
    "explain": [
      "Người làm việc cho nhà nước, có chức vụ, quyền lực (nhất là thời xưa: quan lại)."
    ],
    "usage": "做官 / 当官, 大官, 小官. 做了官 = được làm quan.",
    "collo": [
      "做官",
      "当官",
      "大官"
    ],
    "ex_zh": "楚国国君就留他做了官。",
    "ex_py": "Chǔguó guójūn jiù liú tā zuòle guān.",
    "ex_vn": "Vua nước Sở bèn giữ ông lại làm quan.",
    "exList": [
      {
        "zh": "楚国国君就留他做了官。",
        "py": "Chǔguó guójūn jiù liú tā zuòle guān.",
        "vn": "Vua nước Sở bèn giữ ông lại làm quan."
      },
      {
        "zh": "古代有个大官，叫公孙仪，很喜欢吃鱼。",
        "py": "Gǔdài yǒu ge dà guān, jiào Gōngsūn Yí, hěn xǐhuan chī yú.",
        "vn": "Thời xưa có một vị quan lớn tên là Công Tôn Nghi, rất thích ăn cá."
      },
      {
        "zh": "他做官以后，从来不收别人送的东西。",
        "py": "Tā zuò guān yǐhòu, cónglái bù shōu biérén sòng de dōngxi.",
        "vn": "Sau khi làm quan, ông chưa bao giờ nhận đồ người khác biếu."
      }
    ],
    "colloFull": [
      {
        "zh": "做官",
        "py": "zuò guān",
        "vn": "làm quan"
      },
      {
        "zh": "当官",
        "py": "dāng guān",
        "vn": "làm quan"
      },
      {
        "zh": "大官",
        "py": "dà guān",
        "vn": "quan lớn"
      },
      {
        "zh": "小官",
        "py": "xiǎo guān",
        "vn": "quan nhỏ"
      },
      {
        "zh": "一个好官",
        "py": "yí ge hǎo guān",
        "vn": "một vị quan tốt"
      }
    ],
    "patterns": [
      {
        "s": "做 / 当 + 官",
        "m": "Làm quan"
      },
      {
        "s": "大 / 小 + 官",
        "m": "Quan lớn / quan nhỏ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông ấy tuy làm quan lớn nhưng sống rất giản dị.",
        "answer": "他虽然做了大官，但是生活很简单。",
        "answerPy": "Tā suīrán zuòle dà guān, dànshì shēnghuó hěn jiǎndān.",
        "note": "做了 + 大官.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Vị quan này chưa bao giờ nhận quà của người khác.",
        "answer": "这个官从来没收过别人的礼物。",
        "answerPy": "Zhège guān cónglái méi shōuguo biérén de lǐwù.",
        "note": "官 làm chủ ngữ.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 32,
    "zh": "物质",
    "py": "wùzhì",
    "pos": "Danh từ",
    "vn": "vật chất",
    "hv": "vật chất",
    "em": "💰",
    "lesson": 1,
    "explain": [
      "Những thứ cụ thể như tiền bạc, của cải, đồ dùng (đối lập với tinh thần 精神)."
    ],
    "usage": "物质条件, 物质生活, 物质奖励; 物质 ↔ 精神. Thường làm định ngữ.",
    "collo": [
      "物质条件",
      "物质生活",
      "物质和精神"
    ],
    "ex_zh": "但他并没有因为物质条件好而感到欢喜。",
    "ex_py": "Dàn tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ.",
    "ex_vn": "Nhưng ông không hề vì điều kiện vật chất tốt mà thấy vui mừng.",
    "exList": [
      {
        "zh": "但他并没有因为物质条件好而感到欢喜。",
        "py": "Dàn tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ.",
        "vn": "Nhưng ông không hề vì điều kiện vật chất tốt mà thấy vui mừng."
      },
      {
        "zh": "现在人们的物质生活越来越丰富了。",
        "py": "Xiànzài rénmen de wùzhì shēnghuó yuè lái yuè fēngfù le.",
        "vn": "Đời sống vật chất của con người ngày nay ngày càng phong phú."
      },
      {
        "zh": "孩子需要的不仅是物质，更是父母的陪伴。",
        "py": "Háizi xūyào de bùjǐn shì wùzhì, gèng shì fùmǔ de péibàn.",
        "vn": "Điều con cái cần không chỉ là vật chất mà còn là sự bầu bạn của cha mẹ."
      }
    ],
    "colloFull": [
      {
        "zh": "物质条件",
        "py": "wùzhì tiáojiàn",
        "vn": "điều kiện vật chất"
      },
      {
        "zh": "物质生活",
        "py": "wùzhì shēnghuó",
        "vn": "đời sống vật chất"
      },
      {
        "zh": "物质和精神",
        "py": "wùzhì hé jīngshén",
        "vn": "vật chất và tinh thần"
      },
      {
        "zh": "物质奖励",
        "py": "wùzhì jiǎnglì",
        "vn": "phần thưởng vật chất"
      }
    ],
    "patterns": [
      {
        "s": "物质 + 条件 / 生活 / 奖励",
        "m": "Điều kiện / đời sống / phần thưởng vật chất"
      },
      {
        "s": "物质 ↔ 精神",
        "m": "Vật chất ↔ tinh thần"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy điều kiện vật chất không tốt nhưng họ sống rất vui.",
        "answer": "虽然物质条件不好，但是他们生活得很快乐。",
        "answerPy": "Suīrán wùzhì tiáojiàn bù hǎo, dànshì tāmen shēnghuó de hěn kuàilè.",
        "note": "物质 + 条件.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đời sống vật chất của nông dân ngày càng tốt hơn.",
        "answer": "农民的物质生活越来越好了。",
        "answerPy": "Nóngmín de wùzhì shēnghuó yuè lái yuè hǎo le.",
        "note": "物质生活 = đời sống vật chất.",
        "pair": "越来越"
      }
    ]
  },
  {
    "n": 33,
    "zh": "反而",
    "py": "fǎn'ér",
    "pos": "Phó từ",
    "vn": "trái lại, ngược lại",
    "hv": "phản nhi",
    "em": "🔄",
    "lesson": 1,
    "explain": [
      "Dùng ở phân câu sau, biểu thị kết quả NGƯỢC với điều mong đợi hoặc lẽ thường."
    ],
    "usage": "(不但) 不/没……，反而……. 反而 đứng SAU chủ ngữ, trước động từ/tính từ; không đứng trước chủ ngữ.",
    "collo": [
      "反而更",
      "不但不……反而……",
      "反而觉得"
    ],
    "ex_zh": "他没有接受那份优厚的待遇，反而辞职了。",
    "ex_py": "Tā méiyǒu jiēshòu nà fèn yōuhòu de dàiyù, fǎn'ér cízhí le.",
    "ex_vn": "Anh ấy không nhận mức đãi ngộ hậu hĩnh đó, trái lại còn xin nghỉ việc.",
    "exList": [
      {
        "zh": "他没有接受那份优厚的待遇，反而辞职了。",
        "py": "Tā méiyǒu jiēshòu nà fèn yōuhòu de dàiyù, fǎn'ér cízhí le.",
        "vn": "Anh ấy không nhận mức đãi ngộ hậu hĩnh đó, trái lại còn xin nghỉ việc."
      },
      {
        "zh": "他并没有因为物质条件好而感到欢喜，反而常常诚恳地说……",
        "py": "Tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ, fǎn'ér chángcháng chéngkěn de shuō……",
        "vn": "Ông không hề vì điều kiện vật chất tốt mà vui mừng, trái lại thường thành khẩn nói…"
      },
      {
        "zh": "吃了药，他的病不但没好，反而更重了。",
        "py": "Chīle yào, tā de bìng búdàn méi hǎo, fǎn'ér gèng zhòng le.",
        "vn": "Uống thuốc rồi, bệnh anh ấy chẳng những không khỏi mà trái lại còn nặng hơn."
      }
    ],
    "colloFull": [
      {
        "zh": "反而更",
        "py": "fǎn'ér gèng",
        "vn": "trái lại còn … hơn"
      },
      {
        "zh": "不但不……反而……",
        "py": "búdàn bù…… fǎn'ér……",
        "vn": "chẳng những không … trái lại …"
      },
      {
        "zh": "反而觉得",
        "py": "fǎn'ér juéde",
        "vn": "trái lại thấy"
      },
      {
        "zh": "反而更好",
        "py": "fǎn'ér gèng hǎo",
        "vn": "trái lại còn tốt hơn"
      }
    ],
    "patterns": [
      {
        "s": "(不但) 不 / 没 + A，反而 + B",
        "m": "Chẳng những không A, trái lại còn B"
      },
      {
        "s": "Chủ ngữ + 反而 + V / Adj",
        "m": "反而 đứng SAU chủ ngữ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy trời mưa to nhưng người đến trái lại còn đông hơn.",
        "answer": "虽然下着大雨，但是来的人反而更多了。",
        "answerPy": "Suīrán xiàzhe dàyǔ, dànshì lái de rén fǎn'ér gèng duō le.",
        "note": "反而 đứng sau chủ ngữ 来的人.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đã xin lỗi, cô ấy chẳng những không tha thứ mà còn giận hơn.",
        "answer": "我向她道歉了，她不但没原谅我，反而更生气了。",
        "answerPy": "Wǒ xiàng tā dàoqiàn le, tā búdàn méi yuánliàng wǒ, fǎn'ér gèng shēngqì le.",
        "note": "不但没……，反而…… — kết quả ngược mong đợi.",
        "pair": "不但……反而……"
      }
    ]
  },
  {
    "n": 34,
    "zh": "诚恳",
    "py": "chéngkěn",
    "pos": "Tính từ",
    "vn": "thành khẩn, chân thành",
    "hv": "thành khẩn",
    "em": "🙏",
    "lesson": 1,
    "explain": [
      "Thật lòng, chân thành, xuất phát từ đáy lòng (nói về thái độ, lời nói)."
    ],
    "usage": "诚恳的态度, 诚恳地说/道歉, 很诚恳. Làm định ngữ, trạng ngữ, vị ngữ.",
    "collo": [
      "诚恳的态度",
      "诚恳地说",
      "诚恳地道歉"
    ],
    "ex_zh": "他反而常常诚恳地说：“多么希望父母能和我一起过好日子！”",
    "ex_py": "Tā fǎn'ér chángcháng chéngkěn de shuō: “Duōme xīwàng fùmǔ néng hé wǒ yìqǐ guò hǎo rìzi!”",
    "ex_vn": "Trái lại ông thường thành khẩn nói: “Ước gì cha mẹ được cùng tôi sống những ngày tốt đẹp!”",
    "exList": [
      {
        "zh": "他反而常常诚恳地说：“多么希望父母能和我一起过好日子！”",
        "py": "Tā fǎn'ér chángcháng chéngkěn de shuō: “Duōme xīwàng fùmǔ néng hé wǒ yìqǐ guò hǎo rìzi!”",
        "vn": "Trái lại ông thường thành khẩn nói: “Ước gì cha mẹ được cùng tôi sống những ngày tốt đẹp!”"
      },
      {
        "zh": "他诚恳的态度让大家都很感动。",
        "py": "Tā chéngkěn de tàidu ràng dàjiā dōu hěn gǎndòng.",
        "vn": "Thái độ thành khẩn của anh ấy khiến mọi người đều cảm động."
      },
      {
        "zh": "做错了事，就应该诚恳地向别人道歉。",
        "py": "Zuòcuòle shì, jiù yīnggāi chéngkěn de xiàng biérén dàoqiàn.",
        "vn": "Làm sai thì nên thành khẩn xin lỗi người khác."
      }
    ],
    "colloFull": [
      {
        "zh": "诚恳的态度",
        "py": "chéngkěn de tàidu",
        "vn": "thái độ thành khẩn"
      },
      {
        "zh": "诚恳地说",
        "py": "chéngkěn de shuō",
        "vn": "thành khẩn nói"
      },
      {
        "zh": "诚恳地道歉",
        "py": "chéngkěn de dàoqiàn",
        "vn": "thành khẩn xin lỗi"
      },
      {
        "zh": "十分诚恳",
        "py": "shífēn chéngkěn",
        "vn": "vô cùng chân thành"
      },
      {
        "zh": "诚恳的意见",
        "py": "chéngkěn de yìjiàn",
        "vn": "ý kiến chân thành"
      }
    ],
    "patterns": [
      {
        "s": "诚恳 + 地 + 说 / 道歉 / 请求",
        "m": "Thành khẩn nói / xin lỗi / đề nghị"
      },
      {
        "s": "诚恳 + 的 + 态度 / 意见",
        "m": "Thái độ / ý kiến chân thành"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cậu ấy vừa thấy tôi là thành khẩn xin lỗi.",
        "answer": "他一见到我就诚恳地向我道歉。",
        "answerPy": "Tā yí jiàndào wǒ jiù chéngkěn de xiàng wǒ dàoqiàn.",
        "note": "诚恳地 + 向 + người + 道歉.",
        "pair": "一……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi đã bị thái độ thành khẩn của anh ấy làm cảm động.",
        "answer": "我们被他诚恳的态度感动了。",
        "answerPy": "Wǒmen bèi tā chéngkěn de tàidu gǎndòng le.",
        "note": "诚恳的 + 态度.",
        "pair": "被"
      }
    ]
  },
  {
    "n": 35,
    "zh": "成就",
    "py": "chéngjiù",
    "pos": "Danh từ",
    "vn": "thành tựu, thành quả",
    "hv": "thành tựu",
    "em": "🏆",
    "lesson": 1,
    "explain": [
      "Kết quả tốt đẹp đạt được trong sự nghiệp, học tập (thường là việc lớn)."
    ],
    "usage": "取得成就, 有了一点儿成就, 很大的成就. Động từ đi kèm: 取得 / 获得.",
    "collo": [
      "取得成就",
      "很大的成就",
      "有了成就"
    ],
    "ex_zh": "我现在有了一点儿成就，可他们已经不在了。",
    "ex_py": "Wǒ xiànzài yǒule yìdiǎnr chéngjiù, kě tāmen yǐjīng bú zài le.",
    "ex_vn": "Nay tôi đã có chút thành tựu, nhưng cha mẹ không còn nữa.",
    "exList": [
      {
        "zh": "我现在有了一点儿成就，可他们已经不在了。",
        "py": "Wǒ xiànzài yǒule yìdiǎnr chéngjiù, kě tāmen yǐjīng bú zài le.",
        "vn": "Nay tôi đã có chút thành tựu, nhưng cha mẹ không còn nữa."
      },
      {
        "zh": "这位科学家在医学上取得了很大的成就。",
        "py": "Zhè wèi kēxuéjiā zài yīxué shang qǔdéle hěn dà de chéngjiù.",
        "vn": "Nhà khoa học này đã đạt được thành tựu to lớn trong y học."
      },
      {
        "zh": "每个人的成就都离不开自己的努力。",
        "py": "Měi ge rén de chéngjiù dōu lí bu kāi zìjǐ de nǔlì.",
        "vn": "Thành tựu của mỗi người đều không thể tách rời sự nỗ lực của bản thân."
      }
    ],
    "colloFull": [
      {
        "zh": "取得成就",
        "py": "qǔdé chéngjiù",
        "vn": "đạt được thành tựu"
      },
      {
        "zh": "很大的成就",
        "py": "hěn dà de chéngjiù",
        "vn": "thành tựu to lớn"
      },
      {
        "zh": "有了成就",
        "py": "yǒule chéngjiù",
        "vn": "có thành tựu"
      },
      {
        "zh": "获得成就",
        "py": "huòdé chéngjiù",
        "vn": "giành được thành tựu"
      }
    ],
    "patterns": [
      {
        "s": "取得 / 获得 + (很大的) 成就",
        "m": "Đạt được thành tựu (to lớn)"
      },
      {
        "s": "在……上 + 取得成就",
        "m": "Đạt thành tựu trong lĩnh vực …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỉ cần chăm chỉ thì nhất định sẽ đạt được thành tựu.",
        "answer": "只要勤奋，就一定能取得成就。",
        "answerPy": "Zhǐyào qínfèn, jiù yídìng néng qǔdé chéngjiù.",
        "note": "取得 + 成就.",
        "pair": "只要……就……"
      },
      {
        "promptLang": "vi",
        "prompt": "Thành tựu của anh ấy là dựa vào nỗ lực của chính mình mà có.",
        "answer": "他的成就是靠自己的努力得来的。",
        "answerPy": "Tā de chéngjiù shì kào zìjǐ de nǔlì délái de.",
        "note": "Ôn 靠 (bài 1): dựa vào.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 36,
    "zh": "古代",
    "py": "gǔdài",
    "pos": "Danh từ",
    "vn": "ngày xưa, thời cổ đại",
    "hv": "cổ đại",
    "em": "🏯",
    "lesson": 1,
    "explain": [
      "Thời xa xưa trong lịch sử (ở Trung Quốc thường chỉ thời trước năm 1840)."
    ],
    "usage": "中国古代, 古代人, 古代文化, 在古代. Đối lập: 现代.",
    "collo": [
      "中国古代",
      "古代人",
      "古代文化",
      "在古代"
    ],
    "ex_zh": "中国古代有句话叫“百善孝为先”。",
    "ex_py": "Zhōngguó gǔdài yǒu jù huà jiào “bǎi shàn xiào wéi xiān”.",
    "ex_vn": "Trung Quốc thời xưa có câu “bách thiện hiếu vi tiên”.",
    "exList": [
      {
        "zh": "中国古代有句话叫“百善孝为先”。",
        "py": "Zhōngguó gǔdài yǒu jù huà jiào “bǎi shàn xiào wéi xiān”.",
        "vn": "Trung Quốc thời xưa có câu “bách thiện hiếu vi tiên”."
      },
      {
        "zh": "在古代，人们出远门只能走路或者骑马。",
        "py": "Zài gǔdài, rénmen chū yuǎnmén zhǐ néng zǒulù huòzhě qí mǎ.",
        "vn": "Thời xưa, người ta đi xa chỉ có thể đi bộ hoặc cưỡi ngựa."
      },
      {
        "zh": "我对中国古代文化很感兴趣。",
        "py": "Wǒ duì Zhōngguó gǔdài wénhuà hěn gǎn xìngqù.",
        "vn": "Tôi rất hứng thú với văn hoá cổ đại Trung Quốc."
      }
    ],
    "colloFull": [
      {
        "zh": "中国古代",
        "py": "Zhōngguó gǔdài",
        "vn": "Trung Quốc thời xưa"
      },
      {
        "zh": "古代人",
        "py": "gǔdài rén",
        "vn": "người xưa"
      },
      {
        "zh": "古代文化",
        "py": "gǔdài wénhuà",
        "vn": "văn hoá cổ đại"
      },
      {
        "zh": "在古代",
        "py": "zài gǔdài",
        "vn": "vào thời xưa"
      },
      {
        "zh": "古代和现代",
        "py": "gǔdài hé xiàndài",
        "vn": "cổ đại và hiện đại"
      }
    ],
    "patterns": [
      {
        "s": "在古代，……",
        "m": "Vào thời xưa, …"
      },
      {
        "s": "古代 + 文化 / 故事 / 人",
        "m": "Văn hoá / câu chuyện / người thời xưa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Câu chuyện này là do người xưa lưu truyền lại.",
        "answer": "这个故事是古代人流传下来的。",
        "answerPy": "Zhège gùshi shì gǔdài rén liúchuán xialai de.",
        "note": "古代人 + 流传下来.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa từng đọc tiểu thuyết cổ đại Trung Quốc.",
        "answer": "我从来没看过中国古代小说。",
        "answerPy": "Wǒ cónglái méi kànguo Zhōngguó gǔdài xiǎoshuō.",
        "note": "古代 làm định ngữ: 古代小说.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 37,
    "zh": "孝顺",
    "py": "xiàoshùn",
    "pos": "Động từ / Tính từ",
    "vn": "hiếu thảo",
    "hv": "hiếu thuận",
    "em": "🧓",
    "lesson": 1,
    "explain": [
      "Động từ: hết lòng chăm sóc, vâng lời cha mẹ (孝顺父母). Tính từ: có hiếu (很孝顺, 孝顺的孩子)."
    ],
    "usage": "孝顺 + 父母/老人; 很孝顺; 孝顺的儿子. Khác 孝敬: 孝顺 nhấn mạnh vâng lời, chiều lòng; 孝敬 nhấn mạnh kính trọng, biếu dâng.",
    "collo": [
      "孝顺父母",
      "很孝顺",
      "孝顺的孩子"
    ],
    "ex_zh": "孝顺父母是各种美德中占第一位的。",
    "ex_py": "Xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de.",
    "ex_vn": "Hiếu thảo với cha mẹ đứng hàng đầu trong mọi đức tính tốt.",
    "exList": [
      {
        "zh": "孝顺父母是各种美德中占第一位的。",
        "py": "Xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de.",
        "vn": "Hiếu thảo với cha mẹ đứng hàng đầu trong mọi đức tính tốt."
      },
      {
        "zh": "子路是个很孝顺的人。",
        "py": "Zǐlù shì ge hěn xiàoshùn de rén.",
        "vn": "Tử Lộ là người rất hiếu thảo."
      },
      {
        "zh": "他不但不孝顺父母，反而经常跟他们吵架。",
        "py": "Tā búdàn bú xiàoshùn fùmǔ, fǎn'ér jīngcháng gēn tāmen chǎojià.",
        "vn": "Hắn chẳng những không hiếu thảo với cha mẹ, trái lại còn hay cãi nhau với họ."
      }
    ],
    "colloFull": [
      {
        "zh": "孝顺父母",
        "py": "xiàoshùn fùmǔ",
        "vn": "hiếu thảo với cha mẹ"
      },
      {
        "zh": "很孝顺",
        "py": "hěn xiàoshùn",
        "vn": "rất hiếu thảo"
      },
      {
        "zh": "孝顺的孩子",
        "py": "xiàoshùn de háizi",
        "vn": "đứa con hiếu thảo"
      },
      {
        "zh": "孝顺老人",
        "py": "xiàoshùn lǎorén",
        "vn": "hiếu thảo với người già"
      }
    ],
    "patterns": [
      {
        "s": "孝顺 + 父母 / 老人",
        "m": "Hiếu thảo với cha mẹ / người già (động từ, không cần 跟/和)"
      },
      {
        "s": "很 + 孝顺 / 孝顺的 + N",
        "m": "Rất hiếu thảo / … hiếu thảo (tính từ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cô ấy không những học giỏi mà cũng rất hiếu thảo.",
        "answer": "她不仅学习好，也很孝顺。",
        "answerPy": "Tā bùjǐn xuéxí hǎo, yě hěn xiàoshùn.",
        "note": "孝顺 làm tính từ: 很孝顺.",
        "pair": "不仅……也……"
      },
      {
        "promptLang": "vi",
        "prompt": "Anh ấy hễ có thời gian là về quê chăm sóc bố mẹ, ai cũng khen anh hiếu thảo.",
        "answer": "他一有时间就回老家照顾父母，大家都说他很孝顺。",
        "answerPy": "Tā yì yǒu shíjiān jiù huí lǎojiā zhàogù fùmǔ, dàjiā dōu shuō tā hěn xiàoshùn.",
        "note": "很孝顺 = rất hiếu thảo.",
        "pair": "一……就……"
      }
    ]
  },
  {
    "n": 38,
    "zh": "美德",
    "py": "měidé",
    "pos": "Danh từ",
    "vn": "phẩm chất tốt, đức tính tốt",
    "hv": "mỹ đức",
    "em": "🌸",
    "lesson": 1,
    "explain": [
      "Phẩm chất, đức tính tốt đẹp được xã hội coi trọng (như hiếu thảo, trung thực, cần cù)."
    ],
    "usage": "传统美德, 一种美德, 各种美德. Lượng từ 种.",
    "collo": [
      "传统美德",
      "一种美德",
      "各种美德"
    ],
    "ex_zh": "尊敬老人是中国人的传统美德。",
    "ex_py": "Zūnjìng lǎorén shì Zhōngguórén de chuántǒng měidé.",
    "ex_vn": "Kính trọng người già là mỹ đức truyền thống của người Trung Quốc.",
    "exList": [
      {
        "zh": "尊敬老人是中国人的传统美德。",
        "py": "Zūnjìng lǎorén shì Zhōngguórén de chuántǒng měidé.",
        "vn": "Kính trọng người già là mỹ đức truyền thống của người Trung Quốc."
      },
      {
        "zh": "孝顺父母是各种美德中占第一位的。",
        "py": "Xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de.",
        "vn": "Hiếu thảo với cha mẹ đứng hàng đầu trong mọi đức tính tốt."
      },
      {
        "zh": "诚实是一种美德，也是做人的基础。",
        "py": "Chéngshí shì yì zhǒng měidé, yě shì zuòrén de jīchǔ.",
        "vn": "Trung thực là một đức tính tốt, cũng là nền tảng làm người."
      }
    ],
    "colloFull": [
      {
        "zh": "传统美德",
        "py": "chuántǒng měidé",
        "vn": "mỹ đức truyền thống"
      },
      {
        "zh": "一种美德",
        "py": "yì zhǒng měidé",
        "vn": "một đức tính tốt"
      },
      {
        "zh": "各种美德",
        "py": "gè zhǒng měidé",
        "vn": "mọi đức tính tốt"
      },
      {
        "zh": "中华民族的美德",
        "py": "Zhōnghuá mínzú de měidé",
        "vn": "mỹ đức của dân tộc Trung Hoa"
      }
    ],
    "patterns": [
      {
        "s": "……是一种美德",
        "m": "… là một đức tính tốt"
      },
      {
        "s": "传统 + 美德",
        "m": "Mỹ đức truyền thống"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tiết kiệm là một đức tính tốt, ngay cả người giàu cũng nên tiết kiệm.",
        "answer": "节约是一种美德，连有钱人都应该节约。",
        "answerPy": "Jiéyuē shì yì zhǒng měidé, lián yǒu qián rén dōu yīnggāi jiéyuē.",
        "note": "一种 + 美德.",
        "pair": "连……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Đức tính tốt này là do ông bà truyền lại cho chúng tôi.",
        "answer": "这种美德是爷爷奶奶传给我们的。",
        "answerPy": "Zhè zhǒng měidé shì yéye nǎinai chuán gěi wǒmen de.",
        "note": "这种 + 美德.",
        "pair": "是……的"
      }
    ]
  },
  {
    "n": 39,
    "zh": "占",
    "py": "zhàn",
    "pos": "Động từ",
    "vn": "chiếm, giữ (chỗ)",
    "hv": "chiếm",
    "em": "📊",
    "lesson": 1,
    "explain": [
      "① Chiếm một tỉ lệ, vị trí (占一半, 占第一位). ② Giữ chỗ trước (占座位)."
    ],
    "usage": "占 + 一半/多数/百分之…/第一位; 占 + 座位/地方; 占便宜 (được lợi, lợi dụng).",
    "collo": [
      "占一半",
      "占第一位",
      "占座位",
      "占地方"
    ],
    "ex_zh": "你去教室自习的时候，帮我占个座位，好吗？",
    "ex_py": "Nǐ qù jiàoshì zìxí de shíhou, bāng wǒ zhàn ge zuòwèi, hǎo ma?",
    "ex_vn": "Lúc bạn lên lớp tự học, giữ giúp mình một chỗ ngồi nhé?",
    "exList": [
      {
        "zh": "你去教室自习的时候，帮我占个座位，好吗？",
        "py": "Nǐ qù jiàoshì zìxí de shíhou, bāng wǒ zhàn ge zuòwèi, hǎo ma?",
        "vn": "Lúc bạn lên lớp tự học, giữ giúp mình một chỗ ngồi nhé?"
      },
      {
        "zh": "喜欢网上阅读的人只占到8%。",
        "py": "Xǐhuan wǎngshàng yuèdú de rén zhǐ zhàndào bǎi fēn zhī bā.",
        "vn": "Người thích đọc trên mạng chỉ chiếm 8%."
      },
      {
        "zh": "我们班女生占一半多。",
        "py": "Wǒmen bān nǚshēng zhàn yíbàn duō.",
        "vn": "Lớp chúng tôi nữ chiếm hơn một nửa."
      }
    ],
    "colloFull": [
      {
        "zh": "占一半",
        "py": "zhàn yíbàn",
        "vn": "chiếm một nửa"
      },
      {
        "zh": "占第一位",
        "py": "zhàn dì-yī wèi",
        "vn": "đứng hàng đầu"
      },
      {
        "zh": "占座位",
        "py": "zhàn zuòwèi",
        "vn": "giữ chỗ ngồi"
      },
      {
        "zh": "占地方",
        "py": "zhàn dìfang",
        "vn": "chiếm chỗ"
      },
      {
        "zh": "占多数",
        "py": "zhàn duōshù",
        "vn": "chiếm đa số"
      },
      {
        "zh": "占便宜",
        "py": "zhàn piányi",
        "vn": "được lợi, lợi dụng"
      }
    ],
    "patterns": [
      {
        "s": "占 + 一半 / 多数 / 百分之…… / 第一位",
        "m": "Chiếm một nửa / đa số / …% / vị trí số một"
      },
      {
        "s": "(帮 + người) + 占 + 座位 / 地方",
        "m": "Giữ chỗ (cho ai)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chỗ ngồi của tôi bị người khác chiếm rồi.",
        "answer": "我的座位被别人占了。",
        "answerPy": "Wǒ de zuòwèi bèi biérén zhàn le.",
        "note": "占 + 座位 chuyển thành câu bị động.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Cậu ấy hễ đến thư viện là giữ chỗ cho tôi.",
        "answer": "他一到图书馆就帮我占座位。",
        "answerPy": "Tā yí dào túshūguǎn jiù bāng wǒ zhàn zuòwèi.",
        "note": "帮 + người + 占座位.",
        "pair": "一……就……"
      }
    ]
  },
  {
    "n": 40,
    "zh": "食物",
    "py": "shíwù",
    "pos": "Danh từ",
    "vn": "thức ăn, đồ ăn",
    "hv": "thực vật",
    "em": "🍚",
    "lesson": 1,
    "explain": [
      "Những thứ có thể ăn được nói chung (từ bao quát, trang trọng hơn 吃的). BẪY: “thực vật” tiếng Việt là 植物 (cây cỏ)."
    ],
    "usage": "美味的食物, 精美的食物, 健康的食物; 食物 + 坏了.",
    "collo": [
      "美味的食物",
      "精美的食物",
      "健康的食物"
    ],
    "ex_zh": "子路为了让父母吃到较好的食物，不怕辛苦。",
    "ex_py": "Zǐlù wèile ràng fùmǔ chīdào jiào hǎo de shíwù, bú pà xīnkǔ.",
    "ex_vn": "Tử Lộ vì muốn cha mẹ được ăn thức ăn ngon hơn mà không quản vất vả.",
    "exList": [
      {
        "zh": "子路为了让父母吃到较好的食物，不怕辛苦。",
        "py": "Zǐlù wèile ràng fùmǔ chīdào jiào hǎo de shíwù, bú pà xīnkǔ.",
        "vn": "Tử Lộ vì muốn cha mẹ được ăn thức ăn ngon hơn mà không quản vất vả."
      },
      {
        "zh": "这家餐厅的食物又美味又精美。",
        "py": "Zhè jiā cāntīng de shíwù yòu měiwèi yòu jīngměi.",
        "vn": "Đồ ăn ở nhà hàng này vừa ngon vừa đẹp mắt."
      },
      {
        "zh": "天气热的时候，食物很容易坏。",
        "py": "Tiānqì rè de shíhou, shíwù hěn róngyì huài.",
        "vn": "Khi trời nóng, thức ăn rất dễ hỏng."
      }
    ],
    "colloFull": [
      {
        "zh": "美味的食物",
        "py": "měiwèi de shíwù",
        "vn": "thức ăn ngon"
      },
      {
        "zh": "精美的食物",
        "py": "jīngměi de shíwù",
        "vn": "món ăn tinh tế"
      },
      {
        "zh": "健康的食物",
        "py": "jiànkāng de shíwù",
        "vn": "thức ăn lành mạnh"
      },
      {
        "zh": "准备食物",
        "py": "zhǔnbèi shíwù",
        "vn": "chuẩn bị đồ ăn"
      }
    ],
    "patterns": [
      {
        "s": "美味的 / 精美的 / 健康的 + 食物",
        "m": "Thức ăn ngon / tinh tế / lành mạnh"
      },
      {
        "s": "食物 + 坏了 / 不新鲜",
        "m": "Thức ăn hỏng / không tươi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thức ăn trong tủ lạnh đều bị em trai ăn hết rồi.",
        "answer": "冰箱里的食物都被弟弟吃完了。",
        "answerPy": "Bīngxiāng li de shíwù dōu bèi dìdi chīwán le.",
        "note": "食物 làm chủ ngữ câu 被.",
        "pair": "被"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ để dành hết đồ ăn ngon cho ông bà.",
        "answer": "妈妈把好吃的食物都留给了爷爷奶奶。",
        "answerPy": "Māma bǎ hǎochī de shíwù dōu liúgěile yéye nǎinai.",
        "note": "把 + 食物 + 留给 + người.",
        "pair": "把"
      }
    ]
  },
  {
    "n": 41,
    "zh": "子路",
    "py": "Zǐlù",
    "pos": "Danh từ riêng",
    "vn": "Tử Lộ (học trò của Khổng Tử)",
    "hv": "Tử Lộ",
    "em": "🧑‍🎓",
    "lesson": 1,
    "explain": [
      "Tử Lộ, học trò lớn tuổi nhất của Khổng Tử, sống vào thời Xuân Thu, nổi tiếng hiếu thảo với chuyện “vác gạo trăm dặm” (百里背米)."
    ],
    "usage": "Tên riêng; pinyin viết hoa chữ đầu: Zǐlù.",
    "collo": [
      "子路背米",
      "子路的故事",
      "孔子的学生子路"
    ],
    "ex_zh": "子路是孔子最年长的学生。",
    "ex_py": "Zǐlù shì Kǒngzǐ zuì niánzhǎng de xuésheng.",
    "ex_vn": "Tử Lộ là học trò lớn tuổi nhất của Khổng Tử.",
    "exList": [
      {
        "zh": "子路是孔子最年长的学生。",
        "py": "Zǐlù shì Kǒngzǐ zuì niánzhǎng de xuésheng.",
        "vn": "Tử Lộ là học trò lớn tuổi nhất của Khổng Tử."
      },
      {
        "zh": "子路的父母都是农民。",
        "py": "Zǐlù de fùmǔ dōu shì nóngmín.",
        "vn": "Cha mẹ Tử Lộ đều là nông dân."
      },
      {
        "zh": "子路背米的故事，我小时候就听奶奶讲过。",
        "py": "Zǐlù bēi mǐ de gùshi, wǒ xiǎoshíhou jiù tīng nǎinai jiǎngguo.",
        "vn": "Chuyện Tử Lộ vác gạo, hồi nhỏ tôi đã được nghe bà kể."
      }
    ],
    "colloFull": [
      {
        "zh": "子路背米",
        "py": "Zǐlù bēi mǐ",
        "vn": "Tử Lộ vác gạo"
      },
      {
        "zh": "子路的故事",
        "py": "Zǐlù de gùshi",
        "vn": "câu chuyện về Tử Lộ"
      },
      {
        "zh": "孔子的学生子路",
        "py": "Kǒngzǐ de xuésheng Zǐlù",
        "vn": "Tử Lộ, học trò của Khổng Tử"
      }
    ],
    "patterns": [
      {
        "s": "子路背米 / 百里背米",
        "m": "Tên câu chuyện: Tử Lộ vác gạo trăm dặm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Câu chuyện Tử Lộ vác gạo là cô giáo kể cho chúng tôi nghe.",
        "answer": "子路背米的故事是老师讲给我们听的。",
        "answerPy": "Zǐlù bēi mǐ de gùshi shì lǎoshī jiǎng gěi wǒmen tīng de.",
        "note": "讲给 + người + 听.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tử Lộ không những chăm chỉ mà cũng rất thật thà.",
        "answer": "子路不仅很勤奋，也很老实。",
        "answerPy": "Zǐlù bùjǐn hěn qínfèn, yě hěn lǎoshi.",
        "note": "Hai tính từ của bài: 勤奋, 老实.",
        "pair": "不仅……也……"
      }
    ]
  },
  {
    "n": 42,
    "zh": "春秋",
    "py": "Chūnqiū",
    "pos": "Danh từ riêng",
    "vn": "thời Xuân Thu (770 TCN – 476 TCN)",
    "hv": "Xuân Thu",
    "em": "🍂",
    "lesson": 1,
    "explain": [
      "Thời Xuân Thu (770–476 TCN) trong lịch sử Trung Quốc — thời của Khổng Tử và Tử Lộ."
    ],
    "usage": "春秋时期; 春秋战国 (Xuân Thu – Chiến Quốc).",
    "collo": [
      "春秋时期",
      "春秋战国",
      "春秋时代"
    ],
    "ex_zh": "子路生活在春秋时期。",
    "ex_py": "Zǐlù shēnghuó zài Chūnqiū shíqī.",
    "ex_vn": "Tử Lộ sống vào thời Xuân Thu.",
    "exList": [
      {
        "zh": "子路生活在春秋时期。",
        "py": "Zǐlù shēnghuó zài Chūnqiū shíqī.",
        "vn": "Tử Lộ sống vào thời Xuân Thu."
      },
      {
        "zh": "孔子是春秋时期的教育家。",
        "py": "Kǒngzǐ shì Chūnqiū shíqī de jiàoyùjiā.",
        "vn": "Khổng Tử là nhà giáo dục thời Xuân Thu."
      },
      {
        "zh": "春秋时期，中国有很多小国家。",
        "py": "Chūnqiū shíqī, Zhōngguó yǒu hěn duō xiǎo guójiā.",
        "vn": "Thời Xuân Thu, Trung Quốc có rất nhiều nước nhỏ."
      }
    ],
    "colloFull": [
      {
        "zh": "春秋时期",
        "py": "Chūnqiū shíqī",
        "vn": "thời Xuân Thu"
      },
      {
        "zh": "春秋战国",
        "py": "Chūnqiū Zhànguó",
        "vn": "thời Xuân Thu – Chiến Quốc"
      },
      {
        "zh": "春秋时代",
        "py": "Chūnqiū shídài",
        "vn": "thời đại Xuân Thu"
      }
    ],
    "patterns": [
      {
        "s": "春秋 + 时期 / 时代",
        "m": "Thời Xuân Thu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Câu chuyện này xảy ra vào thời Xuân Thu.",
        "answer": "这个故事是在春秋时期发生的。",
        "answerPy": "Zhège gùshi shì zài Chūnqiū shíqī fāshēng de.",
        "note": "是 + 在 + thời gian + V + 的.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa từng đọc sách về thời Xuân Thu.",
        "answer": "我从来没看过关于春秋时期的书。",
        "answerPy": "Wǒ cónglái méi kànguo guānyú Chūnqiū shíqī de shū.",
        "note": "关于 + 春秋时期 + 的书.",
        "pair": "从来没……过"
      }
    ]
  },
  {
    "n": 43,
    "zh": "孔子",
    "py": "Kǒngzǐ",
    "pos": "Danh từ riêng",
    "vn": "Khổng Tử",
    "hv": "Khổng Tử",
    "em": "🎓",
    "lesson": 1,
    "explain": [
      "Khổng Tử (551–479 TCN), nhà tư tưởng, nhà giáo dục lớn thời Xuân Thu, người sáng lập Nho gia (儒家)."
    ],
    "usage": "孔子的学生, 孔子说……; sách 《论语》 ghi lại lời Khổng Tử.",
    "collo": [
      "孔子的学生",
      "孔子说",
      "孔子学院"
    ],
    "ex_zh": "孔子是中国古代著名的教育家。",
    "ex_py": "Kǒngzǐ shì Zhōngguó gǔdài zhùmíng de jiàoyùjiā.",
    "ex_vn": "Khổng Tử là nhà giáo dục nổi tiếng thời cổ đại Trung Quốc.",
    "exList": [
      {
        "zh": "孔子是中国古代著名的教育家。",
        "py": "Kǒngzǐ shì Zhōngguó gǔdài zhùmíng de jiàoyùjiā.",
        "vn": "Khổng Tử là nhà giáo dục nổi tiếng thời cổ đại Trung Quốc."
      },
      {
        "zh": "孔子在《论语》中就提到“孝悌”。",
        "py": "Kǒngzǐ zài 《Lúnyǔ》 zhōng jiù tídào “xiàotì”.",
        "vn": "Khổng Tử trong sách Luận Ngữ đã nhắc đến “hiếu đễ”."
      },
      {
        "zh": "孔子有很多学生，子路是其中最年长的一个。",
        "py": "Kǒngzǐ yǒu hěn duō xuésheng, Zǐlù shì qízhōng zuì niánzhǎng de yí ge.",
        "vn": "Khổng Tử có rất nhiều học trò, Tử Lộ là người lớn tuổi nhất trong số đó."
      }
    ],
    "colloFull": [
      {
        "zh": "孔子的学生",
        "py": "Kǒngzǐ de xuésheng",
        "vn": "học trò của Khổng Tử"
      },
      {
        "zh": "孔子说",
        "py": "Kǒngzǐ shuō",
        "vn": "Khổng Tử nói"
      },
      {
        "zh": "孔子学院",
        "py": "Kǒngzǐ Xuéyuàn",
        "vn": "Viện Khổng Tử"
      }
    ],
    "patterns": [
      {
        "s": "孔子说：“……”",
        "m": "Khổng Tử nói: “…” (dẫn lời)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngay cả người nước ngoài cũng biết Khổng Tử.",
        "answer": "连外国人都知道孔子。",
        "answerPy": "Lián wàiguórén dōu zhīdào Kǒngzǐ.",
        "note": "孔子 làm tân ngữ.",
        "pair": "连……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày càng nhiều người nước ngoài bắt đầu đọc sách của Khổng Tử.",
        "answer": "越来越多的外国人开始读孔子的书。",
        "answerPy": "Yuè lái yuè duō de wàiguórén kāishǐ dú Kǒngzǐ de shū.",
        "note": "越来越多的 + N.",
        "pair": "越来越"
      }
    ]
  },
  {
    "n": 44,
    "zh": "楚国",
    "py": "Chǔguó",
    "pos": "Danh từ riêng",
    "vn": "nước Sở",
    "hv": "Sở quốc",
    "em": "🗺️",
    "lesson": 1,
    "explain": [
      "Nước Sở, một nước lớn ở phía nam Trung Quốc thời Xuân Thu – Chiến Quốc (vùng Hồ Bắc, Hồ Nam ngày nay)."
    ],
    "usage": "楚国国君, 南下到楚国 (南下 = đi xuống phía nam).",
    "collo": [
      "楚国国君",
      "南下到楚国",
      "楚国人"
    ],
    "ex_zh": "他也南下到了楚国。",
    "ex_py": "Tā yě nánxià dàole Chǔguó.",
    "ex_vn": "Ông cũng xuống phía nam đến nước Sở.",
    "exList": [
      {
        "zh": "他也南下到了楚国。",
        "py": "Tā yě nánxià dàole Chǔguó.",
        "vn": "Ông cũng xuống phía nam đến nước Sở."
      },
      {
        "zh": "楚国国君留子路做了官。",
        "py": "Chǔguó guójūn liú Zǐlù zuòle guān.",
        "vn": "Vua nước Sở giữ Tử Lộ lại làm quan."
      },
      {
        "zh": "楚国在春秋时期是南方的一个大国。",
        "py": "Chǔguó zài Chūnqiū shíqī shì nánfāng de yí ge dà guó.",
        "vn": "Nước Sở thời Xuân Thu là một nước lớn ở phương nam."
      }
    ],
    "colloFull": [
      {
        "zh": "楚国国君",
        "py": "Chǔguó guójūn",
        "vn": "vua nước Sở"
      },
      {
        "zh": "南下到楚国",
        "py": "nánxià dào Chǔguó",
        "vn": "xuống phía nam đến nước Sở"
      },
      {
        "zh": "楚国人",
        "py": "Chǔguórén",
        "vn": "người nước Sở"
      }
    ],
    "patterns": [
      {
        "s": "南下 + 到 + nơi chốn",
        "m": "Đi xuống phía nam đến …"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tử Lộ làm quan ở nước Sở.",
        "answer": "子路是在楚国做的官。",
        "answerPy": "Zǐlù shì zài Chǔguó zuò de guān.",
        "note": "是 + 在 + nơi chốn + V + 的 + O: nhấn mạnh địa điểm.",
        "pair": "是……的"
      },
      {
        "promptLang": "vi",
        "prompt": "Tử Lộ vừa đến nước Sở đã được vua coi trọng.",
        "answer": "子路一到楚国就受到了国君的重视。",
        "answerPy": "Zǐlù yí dào Chǔguó jiù shòudàole guójūn de zhòngshì.",
        "note": "一 + 到 + nơi chốn, 就…….",
        "pair": "一……就……"
      }
    ]
  }
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền, mỗi đoạn văn của sách là một dòng
// ══════════════════════════════════════════
var dialogData = [
  {
    "scene": "课文 · 子路背米",
    "preQuiz": [
      {
        "q": "子路是什么时期的人？",
        "opts": [
          "唐朝",
          "春秋时期",
          "明清时期"
        ],
        "ans": 1
      },
      {
        "q": "子路和孔子是什么关系？",
        "opts": [
          "子路是孔子最年长的学生",
          "子路是孔子的儿子",
          "子路是孔子的老师"
        ],
        "ans": 0
      },
      {
        "q": "子路家的生活为什么非常困难？",
        "opts": [
          "父母身体不好",
          "子路不愿意干活儿",
          "连年的战争"
        ],
        "ans": 2
      },
      {
        "q": "父母说，只要能怎么样就满足了？",
        "opts": [
          "天天吃鱼吃肉",
          "饱饱地吃上一顿米饭",
          "住上大房子"
        ],
        "ans": 1
      },
      {
        "q": "子路听到父母的话，心里觉得怎么样？",
        "opts": [
          "很生气",
          "很高兴",
          "十分惭愧"
        ],
        "ans": 2
      },
      {
        "q": "子路为什么去百里之外？",
        "opts": [
          "那儿有个有钱人家缺干活儿的人",
          "他想去楚国做官",
          "他要去跟孔子学习"
        ],
        "ans": 0
      },
      {
        "q": "主人为什么留下了子路？",
        "opts": [
          "见他身体结实",
          "子路认识孔子",
          "子路很有钱"
        ],
        "ans": 0
      },
      {
        "q": "子路发现银子多了以后，是怎么做的？",
        "opts": [
          "悄悄地拿走了",
          "把多的钱送给了别人",
          "老老实实地告诉了主人"
        ],
        "ans": 2
      },
      {
        "q": "银子为什么比应该得到的多？",
        "opts": [
          "主人算错了工钱",
          "主人给他加了奖金",
          "子路多干了半年"
        ],
        "ans": 1
      },
      {
        "q": "回家的路上，子路遇到了什么困难？",
        "opts": [
          "钱被人偷走了",
          "找不到回家的路",
          "天气寒冷，雪地很滑"
        ],
        "ans": 2
      },
      {
        "q": "子路的父母去世后，他怎么样了？",
        "opts": [
          "到楚国做了官",
          "回家当了农民",
          "去国外留学了"
        ],
        "ans": 0
      },
      {
        "q": "“百善孝为先”是什么意思？",
        "opts": [
          "孝顺是最难做到的事",
          "孝顺父母在各种美德中占第一位",
          "一百件好事中只有一件是孝"
        ],
        "ans": 1
      }
    ],
    "lines": [
      {
        "sp": 0,
        "zh": "从前，大概在距今两千五百多年前的春秋时期，有一个人叫子路，他是孔子最年长的学生。流传至今的“百里背米”讲的就是他孝敬父母的故事。",
        "py": "Cóngqián, dàgài zài jù jīn liǎngqiān wǔbǎi duō nián qián de Chūnqiū shíqī, yǒu yí ge rén jiào Zǐlù, tā shì Kǒngzǐ zuì niánzhǎng de xuésheng. Liúchuán zhìjīn de “bǎi lǐ bēi mǐ” jiǎng de jiù shì tā xiàojìng fùmǔ de gùshi.",
        "vn": "Ngày xưa, vào khoảng thời Xuân Thu cách đây hơn hai nghìn năm trăm năm, có một người tên là Tử Lộ, ông là học trò lớn tuổi nhất của Khổng Tử. Câu chuyện “vác gạo trăm dặm” lưu truyền đến nay kể chính về việc ông hiếu kính cha mẹ."
      },
      {
        "sp": 0,
        "zh": "子路的父母都是农民。由于连年的战争，家里生活非常困难。一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说鱼肉，只要能饱饱地吃上一顿米饭，也就满足啦！”子路听了，心里觉得十分惭愧。他暗下决心：“一定要让父母吃上米饭，不能再委屈他们了！”",
        "py": "Zǐlù de fùmǔ dōu shì nóngmín. Yóuyú liánnián de zhànzhēng, jiā li shēnghuó fēicháng kùnnan. Yì tiān, Zǐlù cóng wàimiàn huílai, tīngdào fùmǔ zài wū li shuōhuà: “Huóle dà bànbèizi le, bié shuō yú ròu, zhǐyào néng bǎobǎo de chīshang yí dùn mǐfàn, yě jiù mǎnzú la!” Zǐlù tīng le, xīnli juéde shífēn cánkuì. Tā àn xià juéxīn: “Yídìng yào ràng fùmǔ chīshang mǐfàn, bù néng zài wěiqu tāmen le!”",
        "vn": "Cha mẹ Tử Lộ đều là nông dân. Vì chiến tranh liên miên năm này qua năm khác, cuộc sống trong nhà vô cùng khó khăn. Một hôm, Tử Lộ từ bên ngoài về, nghe thấy cha mẹ nói chuyện trong nhà: “Sống đã quá nửa đời người rồi, đừng nói cá thịt, chỉ cần được ăn một bữa cơm gạo no nê là đã mãn nguyện lắm rồi!” Tử Lộ nghe xong, trong lòng thấy vô cùng hổ thẹn. Ông thầm hạ quyết tâm: “Nhất định phải để cha mẹ được ăn cơm gạo, không thể để cha mẹ chịu thiệt thòi thêm nữa!”"
      },
      {
        "sp": 0,
        "zh": "子路打听到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。那家主人见他身体结实，就留下了他。子路干起活来十分勤奋，主人很喜欢这个小伙子。半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老老实实地告诉了主人。主人笑着说：“孩子，工钱没算错，你做事勤快，这是我给你加的奖金。”",
        "py": "Zǐlù dǎtingdào bǎi lǐ zhī wài yǒu ge yǒu qián rén, jiā li quē gàn huór de rén, juédìng qù shì yi shì. Nà jiā zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiale tā. Zǐlù gànqǐ huó lai shífēn qínfèn, zhǔrén hěn xǐhuan zhège xiǎohuǒzi. Bàn nián hòu, dāng Zǐlù yào huí jiā shí, fāxiàn zhǔrén gěi de yínzi bǐ tā yīnggāi dédào de duōle xǔduō, Zǐlù lǎolǎoshíshí de gàosule zhǔrén. Zhǔrén xiàozhe shuō: “Háizi, gōngqián méi suàncuò, nǐ zuò shì qínkuai, zhè shì wǒ gěi nǐ jiā de jiǎngjīn.”",
        "vn": "Tử Lộ dò hỏi được rằng cách trăm dặm có một nhà giàu đang thiếu người làm, bèn quyết định đi thử. Chủ nhà thấy ông khoẻ mạnh, bèn giữ ông lại. Tử Lộ làm việc vô cùng chăm chỉ, chủ nhà rất quý chàng trai trẻ này. Nửa năm sau, khi Tử Lộ sắp về nhà, ông phát hiện số bạc chủ nhà đưa nhiều hơn khá nhiều so với số mình đáng được nhận, Tử Lộ bèn thật thà nói lại với chủ nhà. Chủ nhà cười nói: “Con à, tiền công không tính nhầm đâu, con làm việc chăm chỉ nhanh nhẹn, đây là tiền thưởng ta thêm cho con.”"
      },
      {
        "sp": 0,
        "zh": "谢过主人，子路高兴地上路了。路过镇上，他买了一袋米、一块肉、两条鱼，背在后背上。天气非常寒冷，雪地很滑，子路不小心滑了一下，背上的米袋差点儿被甩出去。他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。终于到家了，见到父母，子路把给他们买的东西及剩下的工钱都交给了他们。一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。",
        "py": "Xièguo zhǔrén, Zǐlù gāoxìng de shàng lù le. Lùguò zhèn shang, tā mǎile yí dài mǐ, yí kuài ròu, liǎng tiáo yú, bēi zài hòubèi shang. Tiānqì fēicháng hánlěng, xuědì hěn huá, Zǐlù bù xiǎoxīn huále yí xià, bèi shang de mǐdài chàdiǎnr bèi shuǎi chuqu. Tā dǐngzhe dàxuě wǎng qián zǒu, fúzhe mǐdài de shuāng shǒu dòng de bùxíng, jiù tíng xialai nuǎnnuan, zài jìxù gǎnlù. Zhōngyú dào jiā le, jiàndào fùmǔ, Zǐlù bǎ gěi tāmen mǎi de dōngxi jí shèngxia de gōngqián dōu jiāogěile tāmen. Yì jiā rén gāogāoxìngxìng de shēng huǒ zuò fàn, bǎobǎo de chīle dùn tuányuánfàn.",
        "vn": "Cảm ơn chủ nhà xong, Tử Lộ vui vẻ lên đường. Đi qua thị trấn, ông mua một bao gạo, một miếng thịt, hai con cá, vác trên lưng. Trời rét buốt, đường tuyết rất trơn, Tử Lộ không cẩn thận trượt một cái, bao gạo trên lưng suýt nữa bị văng ra ngoài. Ông đội tuyết lớn đi về phía trước, hai bàn tay giữ bao gạo lạnh cóng không chịu nổi, ông bèn dừng lại sưởi cho ấm rồi lại tiếp tục lên đường. Cuối cùng cũng về tới nhà, gặp cha mẹ, Tử Lộ đem những thứ mua cho cha mẹ cùng số tiền công còn lại trao hết cho hai người. Cả nhà vui vẻ nhóm lửa nấu cơm, ăn một bữa cơm đoàn viên no nê."
      },
      {
        "sp": 0,
        "zh": "后来子路的父母去世了，他也南下到了楚国。楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：“多么希望父母能和我一起过好日子！我现在有了一点儿成就，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。”",
        "py": "Hòulái Zǐlù de fùmǔ qùshì le, tā yě nánxià dàole Chǔguó. Chǔguó guójūn juéde tā hěn yǒu běnlǐng, shì ge réncái, jiù liú tā zuòle guān, bìng gěi tā hěn yōuhòu de dàiyù. Dàn tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào huānxǐ, fǎn'ér chángcháng chéngkěn de shuō: “Duōme xīwàng fùmǔ néng hé wǒ yìqǐ guò hǎo rìzi! Wǒ xiànzài yǒule yìdiǎnr chéngjiù, kě tāmen yǐjīng bú zài le, jíshǐ zài xiǎng bēi mǐ bǎi lǐ qù xiàojìng shuāngqīn, yě bù kěnéng le.”",
        "vn": "Về sau cha mẹ Tử Lộ qua đời, ông cũng xuống phía nam đến nước Sở. Vua nước Sở thấy ông rất có bản lĩnh, là một nhân tài, bèn giữ ông lại làm quan và cho ông đãi ngộ rất hậu. Nhưng ông không hề vì điều kiện vật chất tốt mà thấy vui mừng, trái lại thường thành khẩn nói: “Ước gì cha mẹ được cùng tôi sống những ngày tốt đẹp! Nay tôi đã có chút thành tựu, nhưng cha mẹ không còn nữa, dù có muốn vác gạo trăm dặm để phụng dưỡng song thân cũng không thể được nữa rồi.”"
      },
      {
        "sp": 0,
        "zh": "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。子路为了让父母吃到较好的食物，不怕辛苦，这种做法确实值得我们学习。",
        "py": "Zhōngguó gǔdài yǒu jù huà jiào “bǎi shàn xiào wéi xiān”, yìsi shì shuō, xiàoshùn fùmǔ shì gè zhǒng měidé zhōng zhàn dì-yī wèi de. Zǐlù wèile ràng fùmǔ chīdào jiào hǎo de shíwù, bú pà xīnkǔ, zhè zhǒng zuòfǎ quèshí zhíde wǒmen xuéxí.",
        "vn": "Trung Quốc thời xưa có câu “bách thiện hiếu vi tiên” (trăm điều thiện, chữ hiếu đứng đầu), nghĩa là trong mọi đức tính tốt, hiếu thảo với cha mẹ chiếm vị trí số một. Tử Lộ vì muốn cha mẹ được ăn thức ăn ngon hơn mà không quản vất vả, cách làm ấy quả thật đáng để chúng ta học tập."
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — cặp 满足/满意 lấy đúng bảng + 做一做 của sách
// ══════════════════════════════════════════
var synonymData = [
  {
    "pair": "满足 — 满意",
    "same": "Đều là động từ, đều có nghĩa thấy ĐỦ rồi, mong muốn đã thành hiện thực.",
    "sameEx": {
      "zh": "我对现在的生活感到非常满足／满意。",
      "vn": "Tôi cảm thấy rất mãn nguyện / hài lòng với cuộc sống hiện tại."
    },
    "items": [
      {
        "word": "满足",
        "points": [
          "Nhấn mạnh KHÔNG CÒN đòi hỏi gì thêm.",
          "Thường KHÔNG làm định ngữ hay trạng ngữ.",
          "Đi được với tân ngữ 需要, 要求, 条件, 愿望 (= đáp ứng)."
        ],
        "ex": [
          {
            "zh": "只要能饱饱地吃上一顿米饭，也就满足啦！",
            "vn": "Chỉ cần được ăn một bữa cơm gạo no nê là mãn nguyện lắm rồi!"
          },
          {
            "zh": "这个我不想要，它不能满足我们的需要。",
            "vn": "Cái này tôi không muốn lấy, nó không đáp ứng được nhu cầu của chúng tôi."
          }
        ]
      },
      {
        "word": "满意",
        "points": [
          "Nhấn mạnh HỢP Ý mình (đánh giá người/việc là tốt).",
          "Làm được ĐỊNH NGỮ, TRẠNG NGỮ: 满意的工作, 满意地笑了.",
          "Ít khi mang tân ngữ trực tiếp — nói 对……满意."
        ],
        "ex": [
          {
            "zh": "老师说她对我这次的作业非常满意。",
            "vn": "Cô giáo nói cô rất hài lòng với bài tập lần này của tôi."
          },
          {
            "zh": "他找到了一份满意的工作。",
            "vn": "Anh ấy tìm được một công việc ưng ý."
          }
        ]
      }
    ],
    "quiz": [
      {
        "sentence": "我对新公司的工作条件感到很＿＿。",
        "options": [
          "满足",
          "满意"
        ],
        "answer": 1,
        "why": "Đánh giá điều kiện làm việc có HỢP Ý mình không → 满意 (sách đánh dấu ✓ cho 满意, ✗ cho 满足)."
      },
      {
        "sentence": "父母总是会想办法＿＿孩子的要求。",
        "options": [
          "满足",
          "满意"
        ],
        "answer": 0,
        "why": "Có tân ngữ 要求 → 满足 + 要求 (đáp ứng yêu cầu). 满意 không mang tân ngữ kiểu này."
      },
      {
        "sentence": "听到这个消息，他＿＿地笑了。",
        "options": [
          "满足",
          "满意"
        ],
        "answer": 1,
        "why": "Làm TRẠNG NGỮ (……地笑了) → chỉ 满意 làm được."
      },
      {
        "sentence": "你不能仅仅通过考试就＿＿了，要努力取得最好的成绩。",
        "options": [
          "满足",
          "满意"
        ],
        "answer": 0,
        "why": "Ý “đừng thấy thế là ĐỦ, không đòi hỏi thêm” → 满足."
      }
    ],
    "sgk": {
      "chung": {
        "t": "都是动词，都有感到够了、愿望实现的意思。",
        "vn": "Đều là động từ, đều có nghĩa thấy đủ rồi, mong muốn đã thành hiện thực.",
        "vd": "我对现在的生活感到非常满足／满意。",
        "vdVn": "Tôi cảm thấy rất mãn nguyện / hài lòng với cuộc sống hiện tại."
      },
      "khac": [
        {
          "a": {
            "t": "强调没有更多的要求了。",
            "vn": "Nhấn mạnh không còn đòi hỏi gì thêm.",
            "vd": "只要能饱饱地吃上一顿米饭，也就满足啦！",
            "vdVn": "Chỉ cần được ăn một bữa cơm gạo no nê là mãn nguyện lắm rồi!"
          },
          "b": {
            "t": "强调符合自己的心意。",
            "vn": "Nhấn mạnh hợp với ý mình.",
            "vd": "老师说她对我这次的作业非常满意。",
            "vdVn": "Cô giáo nói cô rất hài lòng với bài tập lần này của tôi."
          }
        },
        {
          "a": {
            "t": "一般不能做定语或状语。",
            "vn": "Thường không làm định ngữ hay trạng ngữ."
          },
          "b": {
            "t": "可做定语或状语。",
            "vn": "Làm được định ngữ hoặc trạng ngữ.",
            "vd": "他找到了一份满意的工作。",
            "vdVn": "Anh ấy tìm được một công việc ưng ý."
          }
        },
        {
          "a": {
            "t": "可与“需要、要求、条件、愿望”等词搭配。",
            "vn": "Kết hợp được với 需要, 要求, 条件, 愿望…",
            "vd": "这个我不想要，它不能满足我们的需要。",
            "vdVn": "Cái này tôi không muốn lấy, nó không đáp ứng được nhu cầu của chúng tôi."
          },
          "b": {
            "t": "不常搭配直接宾语。",
            "vn": "Ít khi mang tân ngữ trực tiếp."
          }
        }
      ],
      "lamThu": [
        {
          "s": "我对新公司的工作条件感到很＿＿。",
          "dap": [
            false,
            true
          ],
          "mau": true,
          "giai": "Câu mẫu của sách: đánh giá điều kiện làm việc có hợp ý không → 满意."
        },
        {
          "s": "父母总是会想办法＿＿孩子的要求。",
          "dap": [
            true,
            false
          ],
          "giai": "Có tân ngữ 要求 → 满足 + 要求. 满意 không mang tân ngữ trực tiếp."
        },
        {
          "s": "听到这个消息，他＿＿地笑了。",
          "dap": [
            false,
            true
          ],
          "giai": "Làm trạng ngữ (……地笑) → chỉ 满意; 满足 thường không làm trạng ngữ."
        },
        {
          "s": "你不能仅仅通过考试就＿＿了，要努力取得最好的成绩。",
          "dap": [
            true,
            false
          ],
          "giai": "Ý “đừng thấy thế là đủ, không phấn đấu thêm” → 满足."
        }
      ]
    }
  },
  {
    "pair": "孝顺 — 孝敬",
    "same": "Đều là động từ chỉ lòng hiếu với cha mẹ, người trên; đều mang tân ngữ chỉ người: 孝顺父母 / 孝敬父母.",
    "sameEx": {
      "zh": "我们应该孝顺／孝敬父母。",
      "vn": "Chúng ta nên hiếu thảo với cha mẹ."
    },
    "items": [
      {
        "word": "孝顺",
        "points": [
          "Nhấn mạnh VÂNG LỜI, chiều lòng, làm cha mẹ vui.",
          "Còn là TÍNH TỪ: 很孝顺, 孝顺的孩子.",
          "Không dùng kiểu “đem vật ra biếu”."
        ],
        "ex": [
          {
            "zh": "子路是个很孝顺的人。",
            "vn": "Tử Lộ là người rất hiếu thảo."
          }
        ]
      },
      {
        "word": "孝敬",
        "points": [
          "Nhấn mạnh KÍNH TRỌNG, phụng dưỡng.",
          "Có thể đem đồ vật biếu người trên: 拿/用……孝敬父母.",
          "Chủ yếu là động từ, ít dùng làm tính từ (ít nói 孝敬的孩子)."
        ],
        "ex": [
          {
            "zh": "他用第一个月的工资买了礼物孝敬奶奶。",
            "vn": "Anh ấy dùng tháng lương đầu tiên mua quà biếu bà nội."
          }
        ]
      }
    ],
    "quiz": [
      {
        "sentence": "子路是个很＿＿的人。",
        "options": [
          "孝顺",
          "孝敬"
        ],
        "answer": 0,
        "why": "Sau 很, làm tính từ bổ nghĩa cho 人 → 孝顺."
      },
      {
        "sentence": "他拿第一次打工挣的钱买了件衣服＿＿奶奶。",
        "options": [
          "孝顺",
          "孝敬"
        ],
        "answer": 1,
        "why": "Đem đồ vật biếu người trên → 孝敬."
      },
      {
        "sentence": "我们应该＿＿父母。",
        "options": [
          "孝顺",
          "孝敬"
        ],
        "answer": 0,
        "both": true,
        "why": "Làm động từ mang tân ngữ 父母 → cả hai đều đúng."
      },
      {
        "sentence": "她是个＿＿的女儿，从来不让父母担心。",
        "options": [
          "孝顺",
          "孝敬"
        ],
        "answer": 0,
        "why": "Làm định ngữ tính từ (……的女儿) → 孝顺."
      }
    ]
  },
  {
    "pair": "从前 — 以前",
    "same": "Đều chỉ thời gian đã qua, đứng đầu câu hoặc trước động từ được.",
    "sameEx": {
      "zh": "从前／以前我住在农村。",
      "vn": "Trước đây tôi sống ở nông thôn."
    },
    "items": [
      {
        "word": "从前",
        "points": [
          "Thường chỉ quá khứ XA, hay mở đầu truyện cổ: 从前，有……",
          "Không đứng sau từ chỉ thời điểm / sự việc (✗ 10点从前)."
        ],
        "ex": [
          {
            "zh": "从前，有一个人叫子路。",
            "vn": "Ngày xưa có một người tên là Tử Lộ."
          }
        ]
      },
      {
        "word": "以前",
        "points": [
          "Quá khứ gần hay xa đều được.",
          "Đứng SAU từ chỉ thời điểm / sự việc: 10点以前, 睡觉以前, 三年以前.",
          "Chỉ được cả thời điểm trong TƯƠNG LAI: 明天10点以前."
        ],
        "ex": [
          {
            "zh": "我会在10点以前回家。",
            "vn": "Tôi sẽ về nhà trước 10 giờ."
          }
        ]
      }
    ],
    "quiz": [
      {
        "sentence": "我跟爸爸妈妈说好了，会在10点＿＿回家。",
        "options": [
          "从前",
          "以前"
        ],
        "answer": 1,
        "why": "Đứng sau thời điểm (10点) và chỉ tương lai → chỉ 以前."
      },
      {
        "sentence": "＿＿，有个人叫乐广，他有个好朋友。",
        "options": [
          "从前",
          "以前"
        ],
        "answer": 0,
        "both": true,
        "why": "Cả hai đều đúng; nhưng mở đầu truyện cổ thì 从前 tự nhiên hơn."
      },
      {
        "sentence": "睡觉＿＿别玩手机。",
        "options": [
          "从前",
          "以前"
        ],
        "answer": 1,
        "why": "Đứng sau một sự việc (睡觉) → chỉ 以前."
      },
      {
        "sentence": "三年＿＿，我还不会说汉语。",
        "options": [
          "从前",
          "以前"
        ],
        "answer": 1,
        "why": "Đứng sau khoảng thời gian (三年) → 以前; không nói 三年从前."
      }
    ]
  }
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  "easy": [
    {
      "zh": "农民",
      "hv": "nông dân",
      "vn": "nông dân",
      "note": "Trùng khít — nhớ một lần là xong."
    },
    {
      "zh": "战争",
      "hv": "chiến tranh",
      "vn": "chiến tranh",
      "note": "Trùng khít."
    },
    {
      "zh": "时期",
      "hv": "thời kỳ",
      "vn": "thời kỳ",
      "note": "Trùng khít."
    },
    {
      "zh": "流传",
      "hv": "lưu truyền",
      "vn": "lưu truyền",
      "note": "Trùng khít."
    },
    {
      "zh": "人才",
      "hv": "nhân tài",
      "vn": "nhân tài",
      "note": "Trùng khít."
    },
    {
      "zh": "物质",
      "hv": "vật chất",
      "vn": "vật chất",
      "note": "Trùng khít."
    },
    {
      "zh": "诚恳",
      "hv": "thành khẩn",
      "vn": "thành khẩn, chân thành",
      "note": "Trùng khít."
    },
    {
      "zh": "决心",
      "hv": "quyết tâm",
      "vn": "quyết tâm",
      "note": "Trùng khít — nhưng nhớ nói 下决心, không nói “做决心”."
    },
    {
      "zh": "成就",
      "hv": "thành tựu",
      "vn": "thành tựu",
      "note": "“Tựu” = đạt tới → cái đạt được."
    },
    {
      "zh": "古代",
      "hv": "cổ đại",
      "vn": "thời xưa",
      "note": "Tiếng Việt cũng nói “thời cổ đại”."
    },
    {
      "zh": "孝敬",
      "hv": "hiếu kính",
      "vn": "hiếu kính",
      "note": "Tiếng Việt dùng y nguyên: “hiếu kính cha mẹ”."
    },
    {
      "zh": "孝顺",
      "hv": "hiếu thuận",
      "vn": "hiếu thảo",
      "note": "“Thuận” = thuận theo, vâng lời → hiếu thảo, nghe lời cha mẹ."
    },
    {
      "zh": "团圆",
      "hv": "đoàn viên",
      "vn": "đoàn tụ",
      "note": "“Bữa cơm đoàn viên”, “Trung thu đoàn viên” — tiếng Việt quen dùng."
    },
    {
      "zh": "美德",
      "hv": "mỹ đức",
      "vn": "đức tính tốt",
      "note": "“Mỹ” = đẹp, “đức” = đạo đức → đức tính đẹp."
    },
    {
      "zh": "主人",
      "hv": "chủ nhân",
      "vn": "người chủ",
      "note": "Trùng khít."
    },
    {
      "zh": "至今",
      "hv": "chí kim",
      "vn": "đến nay",
      "note": "“Chí” = đến, “kim” = nay — như trong “từ cổ chí kim”."
    }
  ],
  "idiom": [
    {
      "zh": "百善孝为先",
      "hv": "bách thiện hiếu vi tiên",
      "vn": "trăm điều thiện, chữ hiếu đứng đầu",
      "note": "Câu nói cổ trong bài — tiếng Việt cũng hay nói “trong trăm cái thiện, chữ hiếu đứng đầu”."
    },
    {
      "zh": "从古至今",
      "hv": "tòng cổ chí kim",
      "vn": "từ xưa đến nay",
      "note": "Tiếng Việt nói “từ cổ chí kim”."
    }
  ],
  "trap": [
    {
      "zh": "食物",
      "hv": "thực vật",
      "vn": "thức ăn",
      "warn": "BẪY: “thực vật” tiếng Việt là cây cỏ (tiếng Trung là 植物). 食物 là ĐỒ ĂN (食 = ăn)."
    },
    {
      "zh": "老实",
      "hv": "lão thực",
      "vn": "thật thà",
      "warn": "“Lão” ở đây không phải “già”. 老实 = thật thà, ngoan; trẻ con cũng có thể 很老实."
    },
    {
      "zh": "结实",
      "hv": "kết thực",
      "vn": "khoẻ mạnh, chắc chắn",
      "warn": "Không phải “kết trái”. 结实 (jiēshi) = rắn chắc, bền. Nhớ đọc thanh nhẹ ở chữ sau."
    },
    {
      "zh": "本领",
      "hv": "bản lĩnh",
      "vn": "tài năng, kỹ năng",
      "warn": "“Bản lĩnh” tiếng Việt là vững vàng về tinh thần. 本领 tiếng Trung là TÀI, KỸ NĂNG làm việc (本领高强 = rất giỏi)."
    },
    {
      "zh": "打听",
      "hv": "đả thính",
      "vn": "hỏi thăm, dò hỏi",
      "warn": "打 ở đây không phải “đánh”. 打听 = hỏi han để biết tin."
    }
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của giáo trình
// ══════════════════════════════════════════
var matchData = [
  {
    "left": "下",
    "right": "决心"
  },
  {
    "left": "占",
    "right": "座位"
  },
  {
    "left": "诚恳的",
    "right": "态度"
  },
  {
    "left": "精美的",
    "right": "食物"
  },
  {
    "left": "委屈地",
    "right": "哭"
  },
  {
    "left": "勤奋地",
    "right": "学习"
  },
  {
    "left": "流传",
    "right": "至今"
  },
  {
    "left": "扶",
    "right": "一把"
  },
  {
    "left": "孝敬",
    "right": "父母"
  },
  {
    "left": "打听",
    "right": "消息"
  },
  {
    "left": "满足",
    "right": "孩子的要求"
  },
  {
    "left": "顶着",
    "right": "大雪"
  },
  {
    "left": "背",
    "right": "米袋"
  },
  {
    "left": "身体",
    "right": "结实"
  },
  {
    "left": "有",
    "right": "本领"
  },
  {
    "left": "做",
    "right": "官"
  },
  {
    "left": "取得",
    "right": "成就"
  },
  {
    "left": "物质",
    "right": "条件"
  },
  {
    "left": "雪地",
    "right": "很滑"
  },
  {
    "left": "吃",
    "right": "团圆饭"
  }
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {
    "pre": "书包太重了，我妹妹根本",
    "blank": "背",
    "post": "不动。",
    "hint": "(vác, đeo)",
    "ans": "背"
  },
  {
    "pre": "",
    "blank": "从前",
    "post": "，这里是一个很小的村子，现在已经变成了大城市。",
    "hint": "(trước đây, ngày xưa)",
    "ans": "从前"
  },
  {
    "pre": "高中是人生中最重要的",
    "blank": "时期",
    "post": "之一。",
    "hint": "(thời kỳ)",
    "ans": "时期"
  },
  {
    "pre": "这是个在中国",
    "blank": "流传",
    "post": "了近千年的民间故事。",
    "hint": "(lưu truyền)",
    "ans": "流传"
  },
  {
    "pre": "我在北京出生、长大，",
    "blank": "至今",
    "post": "还没离开过呢。",
    "hint": "(đến nay)",
    "ans": "至今"
  },
  {
    "pre": "我想用打工挣的钱给奶奶买件礼物，",
    "blank": "孝敬",
    "post": "她老人家。",
    "hint": "(hiếu kính)",
    "ans": "孝敬"
  },
  {
    "pre": "我姥姥姥爷一辈子都在农村当",
    "blank": "农民",
    "post": "。",
    "hint": "(nông dân)",
    "ans": "农民"
  },
  {
    "pre": "由于连年的",
    "blank": "战争",
    "post": "，家里生活非常困难。",
    "hint": "(chiến tranh)",
    "ans": "战争"
  },
  {
    "pre": "这个手机太旧了，已经不能",
    "blank": "满足",
    "post": "我学习的需要了。",
    "hint": "(đáp ứng)",
    "ans": "满足"
  },
  {
    "pre": "想到妈妈每天那么辛苦，我感到很",
    "blank": "惭愧",
    "post": "。",
    "hint": "(hổ thẹn)",
    "ans": "惭愧"
  },
  {
    "pre": "他暗下",
    "blank": "决心",
    "post": "：今年一定要通过HSK五级考试。",
    "hint": "(quyết tâm)",
    "ans": "决心"
  },
  {
    "pre": "我的坏脾气让她受了不少",
    "blank": "委屈",
    "post": "。",
    "hint": "(tủi thân, oan ức)",
    "ans": "委屈"
  },
  {
    "pre": "我向邻居",
    "blank": "打听",
    "post": "了一下，才知道他家已经搬走了。",
    "hint": "(hỏi thăm)",
    "ans": "打听"
  },
  {
    "pre": "这只小狗一直在门口等它的",
    "blank": "主人",
    "post": "回家。",
    "hint": "(người chủ)",
    "ans": "主人"
  },
  {
    "pre": "这个箱子很",
    "blank": "结实",
    "post": "，放多少书都没问题。",
    "hint": "(chắc chắn)",
    "ans": "结实"
  },
  {
    "pre": "她学习非常",
    "blank": "勤奋",
    "post": "，每天都复习到很晚。",
    "hint": "(chăm chỉ)",
    "ans": "勤奋"
  },
  {
    "pre": "他在外面干了一年活儿，才挣了十两",
    "blank": "银子",
    "post": "。",
    "hint": "(bạc)",
    "ans": "银子"
  },
  {
    "pre": "说",
    "blank": "老实",
    "post": "话，我不太喜欢这部电影。",
    "hint": "(thật)",
    "ans": "老实"
  },
  {
    "pre": "每个周末，姥姥都要去",
    "blank": "镇",
    "post": "上买东西。",
    "hint": "(thị trấn)",
    "ans": "镇"
  },
  {
    "pre": "我坐了一天电脑，",
    "blank": "后背",
    "post": "疼得不行。",
    "hint": "(lưng)",
    "ans": "后背"
  },
  {
    "pre": "下雨天路很",
    "blank": "滑",
    "post": "，开车一定要慢一点儿。",
    "hint": "(trơn)",
    "ans": "滑"
  },
  {
    "pre": "车突然停下来，我手里的书被",
    "blank": "甩",
    "post": "到了地上。",
    "hint": "(văng)",
    "ans": "甩"
  },
  {
    "pre": "你",
    "blank": "扶",
    "post": "我一把，我的脚有点儿疼。",
    "hint": "(đỡ)",
    "ans": "扶"
  },
  {
    "pre": "每年春节，在外地打工的人都要回家跟家人",
    "blank": "团圆",
    "post": "。",
    "hint": "(đoàn tụ)",
    "ans": "团圆"
  },
  {
    "pre": "爷爷",
    "blank": "去世",
    "post": "已经三年了，我至今还常常想起他。",
    "hint": "(qua đời)",
    "ans": "去世"
  },
  {
    "pre": "春秋时期有很多小国，每个国家都有自己的",
    "blank": "国君",
    "post": "。",
    "hint": "(vua)",
    "ans": "国君"
  },
  {
    "pre": "年轻人要多学点儿",
    "blank": "本领",
    "post": "，将来才能找到好工作。",
    "hint": "(kỹ năng, tài năng)",
    "ans": "本领"
  },
  {
    "pre": "学校的任务是为国家培养",
    "blank": "人才",
    "post": "。",
    "hint": "(nhân tài)",
    "ans": "人才"
  },
  {
    "pre": "古代有个大",
    "blank": "官",
    "post": "，叫公孙仪，很喜欢吃鱼。",
    "hint": "(quan)",
    "ans": "官"
  },
  {
    "pre": "现在人们的",
    "blank": "物质",
    "post": "生活越来越丰富了。",
    "hint": "(vật chất)",
    "ans": "物质"
  },
  {
    "pre": "天气非常寒冷，子路",
    "blank": "顶着",
    "post": "大雪往前走。",
    "hint": "(đội, chống chọi)",
    "ans": "顶着"
  },
  {
    "pre": "他心里烦",
    "blank": "得很",
    "post": "，自言自语地抱怨：“怎么还有那么远啊！”",
    "hint": "(… lắm — bổ ngữ mức độ)",
    "ans": "得很"
  }
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {
    "words": [
      "我在北京",
      "出生、长大",
      "，",
      "至今",
      "还",
      "没离开过",
      "北京",
      "。"
    ],
    "ans": "我在北京出生、长大，至今还没离开过北京。",
    "audio": "我在北京出生、长大，至今还没离开过北京。"
  },
  {
    "words": [
      "流传至今的",
      "“百里背米”",
      "讲的",
      "就是",
      "他孝敬父母",
      "的故事",
      "。"
    ],
    "ans": "流传至今的“百里背米”讲的就是他孝敬父母的故事。",
    "audio": "流传至今的“百里背米”讲的就是他孝敬父母的故事。"
  },
  {
    "words": [
      "子路",
      "顶着",
      "大雪",
      "往前",
      "走",
      "。"
    ],
    "ans": "子路顶着大雪往前走。",
    "audio": "子路顶着大雪往前走。"
  },
  {
    "words": [
      "他",
      "能用头",
      "顶起",
      "20斤重的东西",
      "。"
    ],
    "ans": "他能用头顶起20斤重的东西。",
    "audio": "他能用头顶起20斤重的东西。"
  },
  {
    "words": [
      "扶着米袋的",
      "双手",
      "冻得",
      "不行",
      "。"
    ],
    "ans": "扶着米袋的双手冻得不行。",
    "audio": "扶着米袋的双手冻得不行。"
  },
  {
    "words": [
      "这个地方",
      "这么热闹",
      "，",
      "孩子们",
      "高兴得",
      "不得了",
      "。"
    ],
    "ans": "这个地方这么热闹，孩子们高兴得不得了。",
    "audio": "这个地方这么热闹，孩子们高兴得不得了。"
  },
  {
    "words": [
      "他",
      "不但",
      "不孝顺父母",
      "，",
      "反而",
      "经常跟他们吵架",
      "。"
    ],
    "ans": "他不但不孝顺父母，反而经常跟他们吵架。",
    "audio": "他不但不孝顺父母，反而经常跟他们吵架。"
  },
  {
    "words": [
      "他",
      "没有因为",
      "物质条件好",
      "而感到欢喜",
      "，",
      "反而",
      "更想念父母了",
      "。"
    ],
    "ans": "他没有因为物质条件好而感到欢喜，反而更想念父母了。",
    "audio": "他没有因为物质条件好而感到欢喜，反而更想念父母了。"
  },
  {
    "words": [
      "背上的",
      "米袋",
      "差点儿",
      "被",
      "甩出去",
      "。"
    ],
    "ans": "背上的米袋差点儿被甩出去。",
    "audio": "背上的米袋差点儿被甩出去。"
  },
  {
    "words": [
      "子路",
      "把剩下的工钱",
      "都交给了",
      "父母",
      "。"
    ],
    "ans": "子路把剩下的工钱都交给了父母。",
    "audio": "子路把剩下的工钱都交给了父母。"
  },
  {
    "words": [
      "只要能",
      "饱饱地",
      "吃上一顿米饭",
      "，",
      "也就",
      "满足啦",
      "！"
    ],
    "ans": "只要能饱饱地吃上一顿米饭，也就满足啦！",
    "audio": "只要能饱饱地吃上一顿米饭，也就满足啦！"
  },
  {
    "words": [
      "老师",
      "对我这次的作业",
      "非常",
      "满意",
      "。"
    ],
    "ans": "老师对我这次的作业非常满意。",
    "audio": "老师对我这次的作业非常满意。"
  },
  {
    "words": [
      "子路",
      "发现",
      "银子",
      "比应该得到的",
      "多了许多",
      "。"
    ],
    "ans": "子路发现银子比应该得到的多了许多。",
    "audio": "子路发现银子比应该得到的多了许多。"
  },
  {
    "words": [
      "孝顺父母",
      "是",
      "各种美德中",
      "占第一位的",
      "。"
    ],
    "ans": "孝顺父母是各种美德中占第一位的。",
    "audio": "孝顺父母是各种美德中占第一位的。"
  }
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    "wrong": "他____着大雪往前走，一点儿也不怕冷。",
    "opts": [
      "顶",
      "背",
      "扶",
      "甩"
    ],
    "ans": 0,
    "exp": "顶着大雪 = đội tuyết, ngược tuyết mà đi. 背 là vác trên lưng, 扶 là đỡ, 甩 là quăng — đều không đi với 大雪."
  },
  {
    "wrong": "我这____新帽子怎么样？",
    "opts": [
      "条",
      "顶",
      "块",
      "袋"
    ],
    "ans": 1,
    "exp": "Lượng từ của 帽子 là 顶 (一顶帽子). 条 dùng cho vật dài, 块 cho miếng, 袋 cho bao/túi."
  },
  {
    "wrong": "扶着米袋的双手冻得____，就停下来暖暖。",
    "opts": [
      "不行",
      "不好",
      "不对",
      "不可以"
    ],
    "ans": 0,
    "exp": "Adj + 得 + 不行 chỉ mức độ rất cao (lạnh cóng không chịu nổi). 冻得不好 / 冻得不对 / 冻得不可以 đều không có."
  },
  {
    "wrong": "雨不但没停，____越下越大了。",
    "opts": [
      "而且",
      "反而",
      "所以",
      "并且"
    ],
    "ans": 1,
    "exp": "Kết quả NGƯỢC với mong đợi (mong mưa tạnh) → 反而. 而且 / 并且 chỉ nối thêm ý cùng chiều; 所以 chỉ kết quả."
  },
  {
    "wrong": "他找到了一份____的工作。",
    "opts": [
      "满足",
      "满意",
      "满分",
      "充满"
    ],
    "ans": 1,
    "exp": "Làm ĐỊNH NGỮ (……的工作) → 满意. 满足 thường không làm định ngữ; 满分 là điểm tuyệt đối; 充满 là tràn đầy."
  },
  {
    "wrong": "他____的态度让大家都很感动。",
    "opts": [
      "诚恳",
      "勤奋",
      "结实",
      "滑"
    ],
    "ans": 0,
    "exp": "诚恳的态度 = thái độ thành khẩn. 勤奋 nói về học tập, làm việc; 结实 nói về cơ thể, đồ vật; 滑 là trơn."
  },
  {
    "wrong": "这位科学家在医学上取得了很大的____。",
    "opts": [
      "成就",
      "人才",
      "美德",
      "战争"
    ],
    "ans": 0,
    "exp": "取得 + 成就: đạt được thành tựu. 人才 là người có tài, 美德 là đức tính tốt, 战争 là chiến tranh — không đi với 取得."
  },
  {
    "wrong": "在____，人们出远门只能走路或者骑马。",
    "opts": [
      "古代",
      "现代",
      "至今",
      "将来"
    ],
    "ans": 0,
    "exp": "Chỉ có thể đi bộ, cưỡi ngựa → thời XƯA (古代). 至今 là phó từ, không đứng sau 在."
  },
  {
    "wrong": "他对父母非常____，每天下班都回家陪他们吃饭。",
    "opts": [
      "孝顺",
      "结实",
      "勤奋",
      "满足"
    ],
    "ans": 0,
    "exp": "对父母很孝顺 = rất hiếu thảo với bố mẹ. 结实 là khoẻ/chắc, 勤奋 là chăm chỉ — không nói “对父母勤奋”."
  },
  {
    "wrong": "尊敬老人是中国人的传统____。",
    "opts": [
      "美德",
      "美食",
      "美丽",
      "美好"
    ],
    "ans": 0,
    "exp": "传统美德 = mỹ đức truyền thống. 美食 là món ngon; 美丽, 美好 là tính từ, không làm trung tâm ngữ sau 传统 ở đây."
  },
  {
    "wrong": "我们班女生____一半多。",
    "opts": [
      "占",
      "站",
      "战",
      "点"
    ],
    "ans": 0,
    "exp": "占 (zhàn, chiếm) + 一半 = chiếm một nửa. Coi chừng chữ đồng âm 站 (đứng), 战 (chiến)."
  },
  {
    "wrong": "天气热的时候，____很容易坏。",
    "opts": [
      "食物",
      "植物",
      "动物",
      "人物"
    ],
    "ans": 0,
    "exp": "食物 = đồ ăn (dễ hỏng khi trời nóng). BẪY Hán–Việt: 植物 mới là “thực vật” (cây cỏ)."
  },
  {
    "wrong": "孔子最年长的学生叫____。",
    "opts": [
      "子路",
      "孔子",
      "楚国",
      "春秋"
    ],
    "ans": 0,
    "exp": "Theo bài khoá: 子路是孔子最年长的学生. 楚国 là tên nước, 春秋 là tên thời kỳ."
  },
  {
    "wrong": "孔子和子路都是____时期的人。",
    "opts": [
      "春秋",
      "楚国",
      "国君",
      "食物"
    ],
    "ans": 0,
    "exp": "春秋时期 = thời Xuân Thu (770–476 TCN). 楚国 là tên nước, 国君 là vua."
  },
  {
    "wrong": "____是中国古代著名的教育家，他有很多学生。",
    "opts": [
      "孔子",
      "子路",
      "楚国",
      "国君"
    ],
    "ans": 0,
    "exp": "Nhà giáo dục nổi tiếng thời xưa, có nhiều học trò → 孔子 (Khổng Tử). 子路 là học trò của ông."
  },
  {
    "wrong": "子路的父母去世后，他南下到了____。",
    "opts": [
      "楚国",
      "春秋",
      "孔子",
      "农民"
    ],
    "ans": 0,
    "exp": "南下到 + tên nơi chốn → 楚国 (nước Sở). 春秋 là thời kỳ, không phải nơi chốn."
  },
  {
    "wrong": "只要能饱饱地吃上一顿米饭，也就____啦！",
    "opts": [
      "满意",
      "满足",
      "满分",
      "充满"
    ],
    "ans": 1,
    "exp": "Ý “không đòi hỏi gì thêm nữa” → 满足. 满意 nhấn mạnh HỢP Ý khi đánh giá việc gì."
  },
  {
    "wrong": "这个故事从古____，一直在民间流传。",
    "opts": [
      "至今",
      "从前",
      "以前",
      "现在"
    ],
    "ans": 0,
    "exp": "从古至今 là cụm cố định = từ xưa đến nay."
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy đã tốt nghiệp tiểu học nhiều năm rồi, nhưng những bài thơ cổ học thuộc hồi đó đến giờ tôi vẫn còn nhớ.',zh:'虽然小学毕业已经很多年了，但是那时背的古诗我至今还记得。',py:'Suīrán xiǎoxué bìyè yǐjīng hěn duō nián le, dànshì nà shí bèi de gǔshī wǒ zhìjīn hái jìde.',goiY:['虽然……但是……','背','至今'],giai:'至今 + 还 + V = đến nay vẫn…; không thêm 到 trước 至今. 背 (bèi) ở đây là "học thuộc".'},
  {vi:'Ngoài trời mưa to khủng khiếp, vậy mà em trai tôi vẫn đội mưa đến trường mang ô cho tôi.',zh:'外面的雨大得不行，弟弟却顶着大雨去学校给我送伞。',py:'Wàimiàn de yǔ dà de bùxíng, dìdi què dǐngzhe dàyǔ qù xuéxiào gěi wǒ sòng sǎn.',goiY:['Adj + 得不行','却','顶着'],giai:'Adj + 得不行 = … vô cùng/khủng khiếp (khẩu ngữ); 顶着 + mưa/gió = đội, bất chấp — khi làm kèm động tác khác phải dùng 顶着.'},
  {vi:'Nếu cậu không bằng lòng với thành tích hiện tại thì phải chăm chỉ hơn người khác một chút.',zh:'如果你不满足于现在的成绩，就应该比别人更勤奋一点儿。',py:'Rúguǒ nǐ bù mǎnzú yú xiànzài de chéngjì, jiù yīnggāi bǐ biérén gèng qínfèn yìdiǎnr.',goiY:['如果……就……','满足于','勤奋'],giai:'满足于 + danh từ = hài lòng/bằng lòng với…; câu so sánh 比别人更勤奋 — 更 đứng trước tính từ, không nói 比别人很勤奋.'},
  {vi:'Sau khi tôi thi hỏng, mẹ chẳng những không trách móc câu nào mà ngược lại còn cười an ủi tôi, điều đó khiến tôi càng thấy hổ thẹn.',zh:'我考砸了以后，妈妈不但没有抱怨一句，反而笑着安慰我，这让我心里更加惭愧。',py:'Wǒ kǎozále yǐhòu, māma búdàn méiyǒu bàoyuàn yí jù, fǎn\'ér xiàozhe ānwèi wǒ, zhè ràng wǒ xīnli gèngjiā cánkuì.',goiY:['不但……反而……','抱怨','惭愧'],giai:'不但不/没…，反而… : vế sau trái hẳn với điều người ta chờ đợi; 反而 là phó từ, đứng sau chủ ngữ, trước động từ.'},
  {vi:'Thấy bố mẹ vất vả làm thuê vì mình, tôi thầm quyết tâm: chỉ có thi đỗ một trường đại học tốt mới có thể không để bố mẹ phải chịu thiệt thòi nữa.',zh:'看到父母为了我辛苦打工，我暗下决心：只有考上好大学，才能不让他们再受委屈。',py:'Kàndào fùmǔ wèile wǒ xīnkǔ dǎgōng, wǒ ànxià juéxīn: zhǐyǒu kǎoshang hǎo dàxué, cái néng bú ràng tāmen zài shòu wěiqu.',goiY:['下决心','只有……才……','委屈'],giai:'只有…才… nêu điều kiện duy nhất; 受委屈 = chịu thiệt thòi/tủi thân tuỳ ngữ cảnh — ở đây nói về cha mẹ nên dịch "chịu thiệt thòi".'},
  {vi:'Đã muốn học được bản lĩnh thật sự thì đừng chỉ mải chơi, trước hết hãy đi hỏi thăm xem huấn luyện viên nào nhiều kinh nghiệm nhất.',zh:'既然你想学到真本领，就别只顾着玩儿，先去打听一下哪位教练最有经验吧。',py:'Jìrán nǐ xiǎng xuédào zhēn běnlǐng, jiù bié zhǐ gùzhe wánr, xiān qù dǎting yíxià nǎ wèi jiàoliàn zuì yǒu jīngyàn ba.',goiY:['既然……就……','本领','打听'],giai:'既然…就… : đã có sự thật/quyết định thì nên làm gì; 打听 = hỏi thăm, dò hỏi (tin tức về người/việc), khác 问 (hỏi trực tiếp).'},
  {vi:'Cậu ấy thà thật thà nói với thầy là chưa làm xong bài tập chứ không chịu chép bài của bạn; thái độ thành thật đó khiến thầy rất cảm động.',zh:'他宁可老老实实地告诉老师作业没写完，也不愿意抄同学的，这种诚恳的态度让老师很感动。',py:'Tā nìngkě lǎolǎoshíshí de gàosu lǎoshī zuòyè méi xiěwán, yě bú yuànyì chāo tóngxué de, zhè zhǒng chéngkěn de tàidu ràng lǎoshī hěn gǎndòng.',goiY:['宁可……也不……','老老实实','诚恳'],giai:'宁可 A，也不 B: chấp nhận A (dù thiệt) để tránh B; 老老实实地 là tính từ lặp làm trạng ngữ, đứng trước động từ, dịch "thật thà".'},
  {vi:'Nhiều người cứ tưởng hiếu thảo là đem lại cho cha mẹ sự đầy đủ về vật chất, thật ra điều cha mẹ mong mỏi hơn không phải là tiền, mà là con cái thường xuyên về nhà ăn bữa cơm đoàn tụ.',zh:'很多人以为孝顺就是给父母物质上的满足，其实父母更盼望的不是钱，而是孩子能常回家吃顿团圆饭。',py:'Hěn duō rén yǐwéi xiàoshùn jiù shì gěi fùmǔ wùzhì shang de mǎnzú, qíshí fùmǔ gèng pànwàng de bú shì qián, ér shì háizi néng cháng huí jiā chī dùn tuányuán fàn.',goiY:['以为','物质','不是……而是……','团圆'],giai:'以为 = cứ tưởng (điều hoá ra không đúng), khác 认为; 不是 A 而是 B đặt điều cha mẹ thật sự cần ở vế sau.'},
  {vi:'Tuy người ông cả đời làm nông của tôi đã mất mấy năm rồi, nhưng dáng vẻ cần cù, chất phác của ông đến giờ tôi vẫn nhớ rõ mồn một.',zh:'当了一辈子农民的爷爷尽管已经去世好几年了，但他勤奋、老实的样子，我至今还记得清清楚楚。',py:'Dāngle yíbèizi nóngmín de yéye jǐnguǎn yǐjīng qùshì hǎo jǐ nián le, dàn tā qínfèn, lǎoshi de yàngzi, wǒ zhìjīn hái jì de qīngqīngchǔchǔ.',goiY:['一辈子','尽管……但……','去世','至今'],giai:'尽管…但… nối sự thật đã xảy ra với điều vẫn không đổi; 至今 + 还 + V = đến nay vẫn…; 去世 là cách nói trang trọng của "mất".'},
  {vi:'Chị họ tôi sở dĩ bỏ công việc ổn định ở thành phố lớn về thị trấn làm cô giáo là vì chị cho rằng thành tựu của một đời người không thể chỉ đo bằng vật chất.',zh:'表姐之所以放弃大城市稳定的工作回镇上当老师，是因为她认为人生的成就不能只用物质来衡量。',py:'Biǎojiě zhīsuǒyǐ fàngqì dà chéngshì wěndìng de gōngzuò huí zhèn shang dāng lǎoshī, shì yīnwèi tā rènwéi rénshēng de chéngjiù bù néng zhǐ yòng wùzhì lái héngliáng.',goiY:['之所以……是因为……','稳定','成就','物质'],giai:'之所以 + kết quả, 是因为 + nguyên nhân; 用…来衡量 = đo bằng…; 人生的成就 dịch thoát "thành tựu của một đời người".'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Do chiến tranh liên miên, cha mẹ làm nông của Tử Lộ sống vô cùng khốn khó.',zh:'由于连年的战争，子路那对当农民的父母生活得非常困难。',py:'Yóuyú liánnián de zhànzhēng, Zǐlù nà duì dāng nóngmín de fùmǔ shēnghuó de fēicháng kùnnan.',goiY:['由于 = do','战争 = chiến tranh','农民 = nông dân'],giai:'由于 đứng đầu vế nguyên nhân; 连年 = "liên miên nhiều năm", dịch "chiến tranh liên miên".'},
  {vi:'Nghe cha mẹ nói chỉ cần được ăn một bữa cơm là đã mãn nguyện, Tử Lộ thấy vô cùng hổ thẹn trong lòng.',zh:'听到父母说只要能吃上一顿米饭就满足了，子路心里十分惭愧。',py:'Tīngdào fùmǔ shuō zhǐyào néng chīshang yí dùn mǐfàn jiù mǎnzú le, Zǐlù xīnli shífēn cánkuì.',goiY:['只要……就…… = chỉ cần… là…','满足 = hài lòng, mãn nguyện','惭愧 = hổ thẹn'],giai:'只要…就… nằm trong lời thuật lại của cha mẹ; 惭愧 là xấu hổ vì thấy mình chưa làm tròn trách nhiệm — dịch "hổ thẹn/áy náy".'},
  {vi:'Dù có vất vả đến đâu, Tử Lộ cũng thầm quyết tâm không để cha mẹ phải chịu khổ nữa.',zh:'无论有多辛苦，子路都暗暗下定决心不再让父母受委屈。',py:'Wúlùn yǒu duō xīnkǔ, Zǐlù dōu àn\'àn xiàdìng juéxīn bú zài ràng fùmǔ shòu wěiqu.',goiY:['无论……都…… = dù… cũng…','暗暗 = thầm','委屈 = thiệt thòi, khổ sở'],giai:'无论 + từ để hỏi (多辛苦) + 都 = dù… đến đâu cũng…; 都 đứng sau chủ ngữ 子路.'},
  {vi:'Tử Lộ dò hỏi được rằng ở nơi cách trăm dặm có một nhà đang thiếu người làm, thế là tìm đến; chủ nhà thấy anh khoẻ mạnh rắn rỏi nên giữ anh lại.',zh:'子路打听到百里之外有户人家缺人干活儿，于是赶了过去；主人见他身体结实，就留下了他。',py:'Zǐlù dǎtingdào bǎi lǐ zhī wài yǒu hù rénjiā quē rén gàn huór, yúshì gǎnle guòqu; zhǔrén jiàn tā shēntǐ jiēshi, jiù liúxiàle tā.',goiY:['打听 = dò hỏi','于是 = thế là','结实 = rắn chắc, khoẻ mạnh'],giai:'于是 nối hành động xảy ra ngay sau; 结实 nói về cơ thể dịch "khoẻ mạnh, rắn rỏi" (nói về đồ vật mới là "chắc chắn").'},
  {vi:'Tử Lộ làm lụng rất chăm chỉ; nửa năm sau, anh phát hiện số bạc chủ nhà trả nhiều hơn hẳn, nhưng anh lại thật thà nói với chủ nhà.',zh:'子路干活儿十分勤奋，半年后发现主人给的银子多了许多，他却老老实实地告诉了主人。',py:'Zǐlù gàn huór shífēn qínfèn, bàn nián hòu fāxiàn zhǔrén gěi de yínzi duōle xǔduō, tā què lǎolǎoshíshí de gàosule zhǔrén.',goiY:['勤奋 = chăm chỉ','银子 = bạc (tiền)','却 = lại, nhưng','老老实实 = thật thà'],giai:'却 cho thấy hành động trung thực trái với lẽ thường (có lợi mà không nhận); 多了许多 = nhiều hơn hẳn, không dịch "nhiều nhiều".'},
  {vi:'Nền tuyết rất trơn, Tử Lộ sơ ý trượt chân một cái, suýt nữa thì bao gạo trên lưng văng ra ngoài.',zh:'雪地非常滑，子路不小心滑了一下，结果背上的米袋差点儿被甩出去。',py:'Xuědì fēicháng huá, Zǐlù bù xiǎoxīn huále yíxià, jiéguǒ bèi shang de mǐdài chàdiǎnr bèi shuǎi chuqu.',goiY:['滑 = trơn; trượt','结果 = kết quả là','差点儿 = suýt','甩 = văng, quăng'],giai:'差点儿 + V = suýt nữa thì (việc không xảy ra); 背上 (bèi) là "trên lưng", phân biệt với 被 (bèi) bị động ngay sau.'},
  {vi:'Anh đội tuyết lớn mà đi, đôi tay giữ bao gạo tuy lạnh cóng đến tê dại nhưng anh chỉ dừng lại hơ cho ấm một chút rồi lại tiếp tục lên đường.',zh:'他顶着大雪往前走，扶着米袋的双手虽然冻得不行，但他只停下来暖一暖，又继续赶路。',py:'Tā dǐngzhe dàxuě wǎng qián zǒu, fúzhe mǐdài de shuāngshǒu suīrán dòng de bùxíng, dàn tā zhǐ tíng xialai nuǎn yi nuǎn, yòu jìxù gǎnlù.',goiY:['顶着 = đội, bất chấp','扶 = đỡ, giữ','冻得不行 = lạnh cóng','虽然……但…… = tuy… nhưng…'],giai:'顶着大雪 = đội tuyết/bất chấp tuyết (顶着 + thời tiết); V/Adj + 得不行 chỉ mức độ cực độ — "lạnh cóng đến tê dại".'},
  {vi:'Tử Lộ vác gạo đi trăm dặm chỉ để cha mẹ được ăn một bữa cơm đoàn viên, thảo nào câu chuyện này được lưu truyền từ thời Xuân Thu cho đến tận ngày nay.',zh:'子路背米百里只为让父母吃上一顿团圆饭，难怪这个故事从春秋时期一直流传至今。',py:'Zǐlù bēi mǐ bǎi lǐ zhǐ wèi ràng fùmǔ chīshang yí dùn tuányuán fàn, nánguài zhège gùshi cóng Chūnqiū shíqī yìzhí liúchuán zhìjīn.',goiY:['背 (bēi) = vác, cõng','团圆饭 = bữa cơm đoàn viên','难怪 = thảo nào','流传至今 = lưu truyền đến nay'],giai:'难怪 rút ra điều đã hiểu từ vế trước; 流传至今 là cụm cố định "lưu truyền đến nay" — không thêm 到.'},
  {vi:'Vua nước Sở giữ Tử Lộ lại làm quan, nhưng ông chẳng hề vì điều kiện vật chất sung túc mà vui mừng, ngược lại còn thường xuyên nhớ về cha mẹ đã khuất.',zh:'楚国国君留子路做了官，可是他并没有因为物质条件好而感到高兴，反而常常怀念去世的父母。',py:'Chǔguó guójūn liú Zǐlù zuòle guān, kěshì tā bìng méiyǒu yīnwèi wùzhì tiáojiàn hǎo ér gǎndào gāoxìng, fǎn\'ér chángcháng huáiniàn qùshì de fùmǔ.',goiY:['国君 = vua (một nước)','并没有 = chẳng hề','反而 = ngược lại','去世 = qua đời'],giai:'并没有因为 A 而 B = chẳng hề vì A mà B; 反而 dẫn ra phản ứng ngược với điều người ta nghĩ.'},
  {vi:'Tử Lộ thường thành khẩn nói rằng giờ đây tuy mình đã có chút thành tựu, nhưng cha mẹ đã qua đời, dù có muốn vác gạo trăm dặm về phụng dưỡng hai người thì cũng không thể nữa rồi.',zh:'子路常常诚恳地说，自己虽然有了一点儿成就，可是父母已经去世了，即使再想背米百里去孝敬他们，也不可能了。',py:'Zǐlù chángcháng chéngkěn de shuō, zìjǐ suīrán yǒule yìdiǎnr chéngjiù, kěshì fùmǔ yǐjīng qùshì le, jíshǐ zài xiǎng bēi mǐ bǎi lǐ qù xiàojìng tāmen, yě bù kěnéng le.',goiY:['诚恳 = thành khẩn','虽然……可是…… = tuy… nhưng…','即使……也…… = dù… cũng…','孝敬 = hiếu kính, phụng dưỡng'],giai:'Câu ghép ba tầng: 虽然…可是… (sự thật trái ngược) + 即使…也… (giả thiết không thể thay đổi kết quả); 孝敬 ở đây dịch "phụng dưỡng", không dịch từng chữ "hiếu kính".'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  "words": [
    "孝顺",
    "惭愧",
    "满足",
    "反而",
    "决心"
  ],
  "prompt": "Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về cảm nghĩ của em sau khi đọc chuyện Tử Lộ vác gạo và về cách em đối xử với bố mẹ.",
  "de": "请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你读了《子路背米》以后的想法。",
  "outline": [
    "Câu mở: nhắc lại thật ngắn câu chuyện Tử Lộ vác gạo.",
    "Liên hệ: bố mẹ em mong gì ở em — chỉ cần… là đủ (dùng 满足).",
    "Chuyển: một việc em làm chưa tốt, lẽ ra phải… nhưng em trái lại… (dùng 反而, 惭愧).",
    "Kết: em hạ quyết tâm sẽ hiếu thảo với bố mẹ (dùng 决心, 孝顺)."
  ],
  "model": {
    "zh": "读了《子路背米》，我很受感动。子路为了让父母吃上米饭，不怕辛苦，背米走了一百里。我的父母要求不高，只要我健康快乐，他们就满足了。可是妈妈关心我的时候，我反而常常不耐烦。想到这些，我觉得十分惭愧。我下决心以后要多陪陪他们，做一个孝顺的孩子。",
    "py": "Dúle 《Zǐlù Bēi Mǐ》, wǒ hěn shòu gǎndòng. Zǐlù wèile ràng fùmǔ chīshang mǐfàn, bú pà xīnkǔ, bēi mǐ zǒule yìbǎi lǐ. Wǒ de fùmǔ yāoqiú bù gāo, zhǐyào wǒ jiànkāng kuàilè, tāmen jiù mǎnzú le. Kěshì māma guānxīn wǒ de shíhou, wǒ fǎn'ér chángcháng bú nàifán. Xiǎngdào zhèxiē, wǒ juéde shífēn cánkuì. Wǒ xià juéxīn yǐhòu yào duō péipei tāmen, zuò yí ge xiàoshùn de háizi.",
    "vn": "Đọc xong “Tử Lộ vác gạo”, tôi rất xúc động. Tử Lộ vì muốn cha mẹ được ăn cơm gạo mà không quản vất vả, vác gạo đi cả trăm dặm. Bố mẹ tôi đòi hỏi không cao, chỉ cần tôi khoẻ mạnh vui vẻ là họ đã mãn nguyện rồi. Thế nhưng những lúc mẹ quan tâm tôi, tôi trái lại thường tỏ ra khó chịu. Nghĩ đến những điều đó, tôi thấy vô cùng hổ thẹn. Tôi quyết tâm sau này sẽ dành nhiều thời gian bên bố mẹ hơn, làm một đứa con hiếu thảo."
  },
  "checklist": [
    "Đã dùng đủ cả 5 từ cho sẵn chưa?",
    "Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?",
    "反而 có đứng SAU chủ ngữ và đúng là kết quả NGƯỢC mong đợi không?",
    "Có ít nhất một câu ghép (只要……就 / 虽然……但是 / 不但……反而) chưa?",
    "Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?"
  ],
  "tuDung": [
    {
      "tu": "孝顺",
      "loai": "động từ / tính từ",
      "cach": "孝顺父母 · 很孝顺 · 孝顺的孩子",
      "sai": [
        {
          "re": "孝顺(跟|和|给)(父母|爸妈|妈妈|爸爸|老人)",
          "sua": "孝顺父母 / 对父母很孝顺",
          "giai": "孝顺 mang tân ngữ TRỰC TIẾP: 孝顺父母. Tiếng Việt nói “hiếu thảo VỚI bố mẹ” nên hay thêm 跟/和 — sai."
        }
      ]
    },
    {
      "tu": "惭愧",
      "loai": "tính từ",
      "cach": "感到惭愧 · 觉得十分惭愧 · 惭愧地低下头",
      "sai": [
        {
          "re": "惭愧(我|你|他|她|自己|父母|妈妈|爸爸)",
          "sua": "对……感到惭愧",
          "giai": "惭愧 là TÍNH TỪ, không mang tân ngữ. Muốn nói “hổ thẹn với ai” thì dùng 对 + người + 感到惭愧."
        }
      ]
    },
    {
      "tu": "满足",
      "loai": "động từ",
      "cach": "感到满足 · 就满足了 · 满足……的要求",
      "sai": [
        {
          "re": "满足的(工作|生活|成绩|结果|笑)",
          "sua": "满意的……",
          "giai": "满足 thường KHÔNG làm định ngữ. Muốn nói “công việc ưng ý / kết quả vừa ý” thì dùng 满意的工作, 满意的结果."
        },
        {
          "re": "满足地笑",
          "sua": "满意地笑",
          "giai": "满足 thường không làm trạng ngữ; “cười hài lòng” là 满意地笑.",
          "nhe": true
        }
      ]
    },
    {
      "tu": "反而",
      "loai": "phó từ",
      "cach": "(不但)不/没……，(chủ ngữ) + 反而 + V/Adj",
      "sai": [
        {
          "re": "反而(我|你|他|她|他们|我们|妈妈|爸爸)",
          "sua": "Chủ ngữ + 反而 + V",
          "giai": "反而 là PHÓ TỪ, đứng SAU chủ ngữ: 我反而……, không viết 反而我……."
        }
      ]
    },
    {
      "tu": "决心",
      "loai": "danh từ / động từ",
      "cach": "下决心 · 暗下决心 · 有决心",
      "sai": [
        {
          "re": "(做|作|打|定|放)决心",
          "sua": "下决心",
          "giai": "Tiếng Việt nói “đặt/ra quyết tâm” nên hay dịch thành 做决心 — sai. Động từ đi với 决心 là 下 (下决心) hoặc 有 (有决心)."
        }
      ]
    }
  ],
  "cauTruc": [
    {
      "ten": "为了……，不怕……",
      "nhan": "为了",
      "vd": "子路为了让父母吃上米饭，不怕辛苦。",
      "khi": "Tóm tắt câu chuyện: mục đích + sự hy sinh."
    },
    {
      "ten": "只要……，就……",
      "nhan": "只要",
      "vd": "只要我健康快乐，他们就很满足了。",
      "khi": "Nói điều bố mẹ mong — điều kiện tối thiểu."
    },
    {
      "ten": "(不但)不/没……，反而……",
      "nhan": "反而",
      "vd": "妈妈关心我，我反而不耐烦。",
      "khi": "Kể việc mình làm NGƯỢC với lẽ thường → điểm chuyển để tự kiểm điểm."
    },
    {
      "ten": "想到……，我觉得十分惭愧",
      "nhan": "惭愧",
      "vd": "想到这些，我觉得十分惭愧。",
      "khi": "Câu chuyển từ kể sang cảm nghĩ."
    },
    {
      "ten": "Adj + 得 + 不行 / 很",
      "nhan": "得不行",
      "vd": "子路的双手冻得不行，可他还是往前走。",
      "khi": "Tả mức độ khó khăn để làm nổi bật tấm lòng."
    },
    {
      "ten": "……流传至今",
      "nhan": "至今",
      "vd": "这个故事流传至今，感动了很多人。",
      "khi": "Câu mở khi giới thiệu một câu chuyện cổ."
    },
    {
      "ten": "我下决心(以后)要……",
      "nhan": "下决心",
      "vd": "我下决心以后要多陪陪父母。",
      "khi": "Câu KẾT — nói quyết tâm, hành động cụ thể."
    }
  ],
  "sapXep": [
    {
      "manh": [
        "反而",
        "他的病",
        "更重了",
        "吃了药以后"
      ],
      "dap": "吃了药以后他的病反而更重了。",
      "chap": [
        "他的病吃了药以后反而更重了。"
      ],
      "vn": "Uống thuốc xong, bệnh anh ấy trái lại còn nặng hơn.",
      "giai": "Thời gian 吃了药以后 đứng đầu (hoặc sau chủ ngữ) → chủ ngữ 他的病 → 反而 → vị ngữ 更重了. 反而 luôn đứng SAU chủ ngữ."
    },
    {
      "manh": [
        "至今",
        "这个故事",
        "在民间",
        "流传"
      ],
      "dap": "这个故事在民间流传至今。",
      "vn": "Câu chuyện này lưu truyền trong dân gian đến tận ngày nay.",
      "giai": "流传至今 là cụm cố định (至今 làm bổ ngữ sau 流传); 在民间 là trạng ngữ nơi chốn, đứng trước động từ."
    },
    {
      "manh": [
        "冻得",
        "他的",
        "不行",
        "双手"
      ],
      "dap": "他的双手冻得不行。",
      "vn": "Hai tay anh ấy lạnh cóng không chịu nổi.",
      "giai": "Chủ ngữ 他的双手 → động từ + 得 → bổ ngữ mức độ 不行."
    },
    {
      "manh": [
        "满足",
        "父母",
        "我们的要求",
        "总是想办法"
      ],
      "dap": "父母总是想办法满足我们的要求。",
      "vn": "Bố mẹ luôn tìm cách đáp ứng yêu cầu của chúng ta.",
      "giai": "满足 + tân ngữ 要求. 总是想办法 đứng trước động từ chính 满足."
    },
    {
      "manh": [
        "孝顺父母",
        "各种美德中",
        "是",
        "占第一位的"
      ],
      "dap": "孝顺父母是各种美德中占第一位的。",
      "vn": "Hiếu thảo với cha mẹ đứng hàng đầu trong mọi đức tính tốt.",
      "giai": "Câu 是……的: 孝顺父母 + 是 + (各种美德中 + 占第一位) + 的. 各种美德中 là phạm vi, đứng trước 占."
    },
    {
      "manh": [
        "下决心",
        "我",
        "早睡早起",
        "从明天开始"
      ],
      "dap": "我下决心从明天开始早睡早起。",
      "vn": "Tôi quyết tâm từ ngày mai sẽ ngủ sớm dậy sớm.",
      "giai": "Chủ ngữ 我 → 下决心 → nội dung quyết tâm (从明天开始早睡早起). Thời gian 从明天开始 thuộc về việc sẽ làm nên đứng SAU 下决心."
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 “什么是孝顺？” của sách
// ══════════════════════════════════════════
var speakingData = {
  "intro": "Bốn câu hỏi mở về chủ đề của bài — ba câu đầu là phần 话题讨论 “什么是孝顺？” trong sách. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng được từ mới của bài: 孝顺 · 孝敬 · 满足 · 委屈 · 惭愧 · 反而 · 流传至今.",
  "questions": [
    {
      "q_zh": "中国人说的“孝”是什么意思？",
      "q_vn": "Chữ “hiếu” mà người Trung Quốc nói nghĩa là gì?",
      "hint": "Dùng 我觉得“孝”就是…… + 孝顺 / 孝敬",
      "sample": "我觉得“孝”就是孝顺父母、尊敬老人。不但要让父母吃好、穿好，而且要常常陪他们聊天儿，让他们心情愉快。",
      "sample_vn": "Tôi nghĩ “hiếu” chính là hiếu thảo với cha mẹ, kính trọng người già. Không những phải để cha mẹ ăn ngon mặc đẹp, mà còn phải thường xuyên trò chuyện cùng họ, để họ vui vẻ.",
      "note": "Trả lời câu hỏi “là gì” ở HSKK: nêu định nghĩa trước, rồi thêm 1–2 ví dụ cụ thể."
    },
    {
      "q_zh": "你认为应该如何去关爱你的父母？",
      "q_vn": "Em nghĩ nên quan tâm, yêu thương bố mẹ như thế nào?",
      "hint": "Dùng 我认为…… + 只要……就…… + 满足",
      "sample": "我认为关爱父母不一定要花很多钱。每天跟他们聊聊天儿，帮他们做点儿家务，他们就会很满足。",
      "sample_vn": "Tôi cho rằng yêu thương bố mẹ không nhất thiết phải tốn nhiều tiền. Mỗi ngày trò chuyện với họ, giúp họ làm chút việc nhà, họ sẽ rất mãn nguyện.",
      "note": "Ôn 如何 (bài 1) — câu hỏi dùng 如何 nhưng khi trả lời bằng khẩu ngữ không cần lặp lại 如何."
    },
    {
      "q_zh": "如果有一天，你的父母身体不好了，需要有人照顾时，你会怎么做？",
      "q_vn": "Nếu một ngày bố mẹ em yếu đi, cần người chăm sóc, em sẽ làm gì?",
      "hint": "Dùng 如果……，我会…… + 即使……也…… + 委屈",
      "sample": "如果父母需要照顾，我会尽量留在他们身边。即使工作再忙，我也会常常回家，不能让他们受委屈。",
      "sample_vn": "Nếu bố mẹ cần chăm sóc, tôi sẽ cố gắng ở bên cạnh họ. Dù công việc bận đến đâu, tôi cũng sẽ thường xuyên về nhà, không để họ phải chịu thiệt thòi.",
      "note": "即使……也…… lấy từ chính bài khoá (即使再想……也不可能了) — dùng lại được là điểm cộng."
    },
    {
      "q_zh": "在你们国家，有没有流传很久的关于孝敬父母的故事？",
      "q_vn": "Ở nước em có câu chuyện nào về hiếu kính cha mẹ được lưu truyền lâu đời không?",
      "hint": "Dùng 流传至今 + 意思是说……",
      "sample": "在越南，也有很多流传至今的孝顺故事。越南人常说“父亲的功劳像泰山，母亲的恩情像泉水”，意思是说父母的恩情很大，我们一定要孝敬他们。",
      "sample_vn": "Ở Việt Nam cũng có nhiều câu chuyện về lòng hiếu thảo được lưu truyền đến nay. Người Việt hay nói “Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra”, nghĩa là công ơn cha mẹ rất lớn, chúng ta nhất định phải hiếu kính cha mẹ.",
      "note": "Đây là câu hỏi 热身 2 của sách. 意思是说…… là cách giải thích một câu nói — học từ câu “百善孝为先” trong bài."
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO DẠNG ĐỀ HSK 5 — nguyên văn sách bài tập bài 4 (câu 1–8)
// ══════════════════════════════════════════
var listenExamData = {
  "intro": "Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.",
  "source": "Nguyên văn: 《HSK标准教程5·练习册》第4课 听力",
  "items": [
    {
      "n": 1,
      "lines": [
        {
          "sp": "女",
          "zh": "你记住要从小区的西北门进去，进门右拐第一个楼就是，王总住四单元201。"
        },
        {
          "sp": "男",
          "zh": "好的，不说了不说了，我赶紧的！"
        }
      ],
      "q": "男的最可能是去哪儿？",
      "qvn": "Người đàn ông nhiều khả năng đang đi đâu?",
      "opts": [
        "王总家",
        "公司办公室",
        "小区门口的商店",
        "火车站"
      ],
      "ans": 0,
      "why": "Người phụ nữ chỉ đường vào khu chung cư và nói 王总住四单元201 — anh ấy đang vội đến nhà “sếp Vương”.",
      "words": []
    },
    {
      "n": 2,
      "lines": [
        {
          "sp": "女",
          "zh": "刚才又打雷又闪电，真吓人！怎么这么一会儿雨就停了？"
        },
        {
          "sp": "男",
          "zh": "夏天的雨就是这样，来得快去得也快。"
        }
      ],
      "q": "他们说的雨最可能是下面哪种？",
      "qvn": "Cơn mưa họ nói nhiều khả năng là loại nào?",
      "opts": [
        "毛毛雨",
        "雷阵雨",
        "连阴雨",
        "雨夹雪"
      ],
      "ans": 1,
      "why": "Có sấm (打雷), chớp (闪电), đến nhanh đi nhanh, lại là mùa hè → mưa rào có sấm (雷阵雨).",
      "words": []
    },
    {
      "n": 3,
      "lines": [
        {
          "sp": "男",
          "zh": "你今天怎么总打喷嚏，感冒了吧？"
        },
        {
          "sp": "女",
          "zh": "是有点儿。昨晚和老公去看电影，电影院的冷气开得太凉了。"
        }
      ],
      "q": "女的是怎么感冒的？",
      "qvn": "Người phụ nữ bị cảm như thế nào?",
      "opts": [
        "昨晚被雨淋湿了",
        "电影院的冷气太凉",
        "晚上睡觉没盖被子",
        "跟老公吵架了"
      ],
      "ans": 1,
      "why": "Cô ấy nói 电影院的冷气开得太凉了 — điều hoà rạp chiếu phim lạnh quá.",
      "words": []
    },
    {
      "n": 4,
      "lines": [
        {
          "sp": "男",
          "zh": "我去上班了，你走的时候，记得把窗户关好，天气预报说有雨。"
        },
        {
          "sp": "女",
          "zh": "知道了。儿子上学时没带伞。你回来早的话，给他送一趟吧。"
        }
      ],
      "q": "女的担心什么？",
      "qvn": "Người phụ nữ lo lắng điều gì?",
      "opts": [
        "丈夫上班迟到",
        "窗户没关好",
        "儿子没带伞",
        "天气预报不准"
      ],
      "ans": 2,
      "why": "Cô ấy nói 儿子上学时没带伞 và nhờ chồng mang ô cho con. Việc đóng cửa sổ là chồng dặn cô, không phải điều cô lo.",
      "words": []
    },
    {
      "n": 5,
      "lines": [
        {
          "sp": "男",
          "zh": "您好！中通快递，我在您楼下，家里没人啊？"
        },
        {
          "sp": "女",
          "zh": "我先生在家，您稍等一下，我马上跟他联系，不好意思啊！"
        }
      ],
      "q": "女的接下来会做什么？",
      "qvn": "Tiếp theo người phụ nữ sẽ làm gì?",
      "opts": [
        "下楼取快递",
        "让快递员明天再来",
        "给快递公司打电话",
        "联系她先生"
      ],
      "ans": 3,
      "why": "Cô ấy nói 我马上跟他联系 — liên lạc ngay với chồng (người đang ở nhà).",
      "words": []
    },
    {
      "n": 6,
      "lines": [
        {
          "sp": "女",
          "zh": "看你的黑眼圈，是不是昨晚又熬夜了？"
        },
        {
          "sp": "男",
          "zh": "没错，给欧洲冠军杯决赛做解说，录完节目都快早上五点了。"
        }
      ],
      "q": "男的昨晚为什么熬夜？",
      "qvn": "Vì sao tối qua người đàn ông thức khuya?",
      "opts": [
        "给决赛做解说",
        "看足球比赛",
        "准备考试",
        "坐飞机去欧洲"
      ],
      "ans": 0,
      "why": "Anh ấy làm bình luận (做解说) cho trận chung kết Cúp C1 châu Âu, ghi hình xong gần 5 giờ sáng. Không phải chỉ ngồi xem bóng đá.",
      "words": []
    },
    {
      "n": 7,
      "lines": [
        {
          "sp": "女",
          "zh": "你这次回来怎么买了这么多东西，花了不少钱吧？"
        },
        {
          "sp": "男",
          "zh": "妈，不多。临走时我去领工资，结果发现比应得的多了许多。"
        },
        {
          "sp": "女",
          "zh": "是公司算错了吧？你应该老老实实地还给人家。"
        },
        {
          "sp": "男",
          "zh": "没算错，经理说我做事勤快，这是给我加的奖金。"
        }
      ],
      "q": "关于工资，下列哪项正确？",
      "qvn": "Về tiền lương, điều nào sau đây đúng?",
      "opts": [
        "公司算错了",
        "比应得的多",
        "已经还给公司了",
        "比上个月少"
      ],
      "ans": 1,
      "why": "Con trai nói 比应得的多了许多 — nhiều hơn số đáng được nhận vì được thưởng thêm. “Công ty tính nhầm” là mẹ đoán và đã bị phủ định (没算错). Đoạn này chính là chuyện Tử Lộ kể theo kiểu hiện đại.",
      "words": [
        "老实"
      ]
    },
    {
      "n": 8,
      "lines": [
        {
          "sp": "女",
          "zh": "西安和北京同是古都，但有个很大的不同，就是西安的城墙保存得非常完整。"
        },
        {
          "sp": "男",
          "zh": "北京为了扩建，拆掉了城墙，这一点多少有些遗憾啊！"
        },
        {
          "sp": "女",
          "zh": "西安城墙现在对游人开放。我上去游览过，夜景很美。"
        },
        {
          "sp": "男",
          "zh": "作为北京人，我实在有点儿惭愧！"
        }
      ],
      "q": "男的感到惭愧的原因是什么？",
      "qvn": "Vì sao người đàn ông thấy hổ thẹn?",
      "opts": [
        "没去过西安",
        "北京人太多",
        "西安比北京大",
        "北京的城墙被拆掉了"
      ],
      "ans": 3,
      "why": "Anh ấy nói 北京为了扩建，拆掉了城墙 — Bắc Kinh phá tường thành để mở rộng, nên là người Bắc Kinh anh thấy 惭愧.",
      "words": [
        "惭愧"
      ]
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════
var situationData = {
  "intro": "Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.",
  "items": [
    {
      "scene": "Mẹ gọi điện hỏi thăm em đang ở ký túc xá.",
      "a": {
        "sp": "Mẹ",
        "zh": "你一个人在外面，生活怎么样？",
        "vn": "Con ở ngoài một mình, cuộc sống thế nào?"
      },
      "need": [
        "Dùng 满足 hoặc 满意",
        "Nói để mẹ yên tâm"
      ],
      "sample": "妈，您放心吧，我在这儿吃得好、住得好，对现在的生活很满足。",
      "samplePy": "Mā, nín fàngxīn ba, wǒ zài zhèr chī de hǎo, zhù de hǎo, duì xiànzài de shēnghuó hěn mǎnzú.",
      "sampleVn": "Mẹ yên tâm ạ, con ở đây ăn ngon ở tốt, rất mãn nguyện với cuộc sống hiện tại.",
      "tip": "对……很满足 / 很满意 đều được. Nhưng nếu muốn khen một thứ cụ thể làm định ngữ (满意的宿舍) thì chỉ dùng 满意."
    },
    {
      "scene": "Bạn thấy em về nhà ướt sũng, run cầm cập.",
      "a": {
        "sp": "Bạn",
        "zh": "你怎么这么晚才回来？衣服都湿了！",
        "vn": "Sao muộn thế này cậu mới về? Quần áo ướt hết rồi!"
      },
      "need": [
        "Dùng 顶着",
        "Dùng ……得不行"
      ],
      "sample": "路上突然下大雨，我没带伞，只好顶着大雨走回来，冻得不行。",
      "samplePy": "Lù shang tūrán xià dàyǔ, wǒ méi dài sǎn, zhǐhǎo dǐngzhe dàyǔ zǒu huilai, dòng de bùxíng.",
      "sampleVn": "Trên đường đột nhiên mưa to, tớ không mang ô, đành đội mưa đi về, lạnh cóng không chịu nổi.",
      "tip": "顶着 + 大雨/大雪/大风 phải có 着. Không viết 很冻得不行 — đã có 得不行 thì bỏ 很."
    },
    {
      "scene": "Bạn thân thấy dạo này em học hành chăm hẳn lên.",
      "a": {
        "sp": "Bạn",
        "zh": "你最近学习怎么这么努力？",
        "vn": "Dạo này sao cậu học chăm thế?"
      },
      "need": [
        "Dùng 下决心",
        "Dùng 惭愧"
      ],
      "sample": "上次考得太差了，我觉得很惭愧，就下决心每天多学一个小时。",
      "samplePy": "Shàng cì kǎo de tài chà le, wǒ juéde hěn cánkuì, jiù xià juéxīn měi tiān duō xué yí ge xiǎoshí.",
      "sampleVn": "Lần trước thi kém quá, tớ thấy xấu hổ lắm, nên quyết tâm mỗi ngày học thêm một tiếng.",
      "tip": "Động từ đi với 决心 là 下, không phải 做. 惭愧 là tính từ: 觉得很惭愧."
    },
    {
      "scene": "Cô giáo hỏi cảm nhận của em về nhân vật trong bài.",
      "a": {
        "sp": "Cô",
        "zh": "你觉得子路是个什么样的人？",
        "vn": "Em thấy Tử Lộ là người như thế nào?"
      },
      "need": [
        "Dùng ít nhất 2 từ: 孝顺 / 勤奋 / 老实",
        "Nêu một CHI TIẾT trong bài để chứng minh"
      ],
      "sample": "我觉得子路很孝顺，也很老实。主人多给了他银子，他老老实实地告诉了主人。",
      "samplePy": "Wǒ juéde Zǐlù hěn xiàoshùn, yě hěn lǎoshi. Zhǔrén duō gěile tā yínzi, tā lǎolǎoshíshí de gàosule zhǔrén.",
      "sampleVn": "Em thấy Tử Lộ rất hiếu thảo, cũng rất thật thà. Chủ nhà đưa thừa bạc, ông thật thà nói lại với chủ nhà.",
      "tip": "Nhận xét phải kèm DẪN CHỨNG từ bài — thói quen bắt buộc ở HSK 5, cả phần nói lẫn phần viết."
    },
    {
      "scene": "Trời mưa, bạn ngạc nhiên thấy em vẫn đi chạy bộ.",
      "a": {
        "sp": "Bạn",
        "zh": "下这么大的雨，你还去跑步？不难受吗？",
        "vn": "Mưa to thế này cậu vẫn đi chạy bộ à? Không khó chịu sao?"
      },
      "need": [
        "Dùng 反而",
        "Giải thích lý do"
      ],
      "sample": "下雨天跑步不但不难受，反而很舒服，空气也特别好。",
      "samplePy": "Xià yǔ tiān pǎobù búdàn bù nánshòu, fǎn'ér hěn shūfu, kōngqì yě tèbié hǎo.",
      "sampleVn": "Chạy bộ ngày mưa chẳng những không khó chịu mà trái lại còn rất dễ chịu, không khí cũng cực kỳ trong lành.",
      "tip": "反而 dùng khi kết quả NGƯỢC với điều người kia nghĩ (họ nghĩ “khó chịu” → mình nói “dễ chịu”)."
    }
  ]
};

// ══════════════════════════════════════════
// NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════
var registerData = {
  "intro": "Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.",
  "items": [
    {
      "scene": "Em viết bài văn kể về người ông đã mất để gửi dự thi.",
      "a": "我的爷爷去年去世了。",
      "b": "我的爷爷去年死了。",
      "better": "a",
      "why": "Nói về người thân, người lớn tuổi đã mất phải dùng 去世 — lịch sự, trang trọng. 死 nghe lạnh lùng, thiếu kính trọng."
    },
    {
      "scene": "Lễ tân khách sạn xin lỗi vì chưa có phòng tốt cho khách.",
      "a": "请您先委屈一晚，明天我们就给您换个好的房间。",
      "b": "你先在这儿住一晚吧，明天给你换。",
      "better": "a",
      "why": "Với khách hàng phải dùng 您; 委屈一晚 là lời xin lỗi khéo (“để quý khách chịu thiệt một đêm”). Câu b đúng nhưng cộc lốc."
    },
    {
      "scene": "Em phát biểu trong lễ tri ân thầy cô và cha mẹ ở trường.",
      "a": "中国古代有句话叫“百善孝为先”，孝顺父母是各种美德中占第一位的。",
      "b": "对爸妈好是最重要的事儿。",
      "better": "a",
      "why": "Diễn văn là văn nói TRANG TRỌNG: dẫn câu cổ, dùng 孝顺, 美德, 占第一位. Câu b quá khẩu ngữ (爸妈, 事儿)."
    },
    {
      "scene": "Em nhắn tin nhờ bạn thân giữ chỗ trong thư viện.",
      "a": "你到了帮我占个座儿，好吗？",
      "b": "请您到达以后为我保留一个座位，可以吗？",
      "better": "a",
      "why": "Nhắn cho bạn thân dùng khẩu ngữ: 占个座儿. Câu b khách sáo như văn bản hành chính, nghe xa cách."
    },
    {
      "scene": "Em viết thư xin lỗi chính thức gửi ban giám hiệu vì vi phạm nội quy.",
      "a": "我诚恳地向学校道歉，保证以后不再犯同样的错误。",
      "b": "对不起啦，下次不会了。",
      "better": "a",
      "why": "Thư gửi nhà trường là văn viết trang trọng: 诚恳地道歉, 保证. Câu b chỉ hợp khi xin lỗi bạn bè."
    },
    {
      "scene": "Em kể với bạn cùng phòng chuyện hôm qua đi học về.",
      "a": "昨天我累得不行，一回宿舍就睡了。",
      "b": "昨日本人极度疲劳，归来后即入睡。",
      "better": "a",
      "why": "Kể chuyện thường ngày với bạn: 累得不行 tự nhiên. Câu b dùng lối văn viết cổ (昨日, 本人, 即) — nghe rất buồn cười trong hội thoại."
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI ĐỌC 复述 — bài tập 4 của sách
// ══════════════════════════════════════════
var retellData = {
  "intro": "Đây là bài tập 4 trong sách: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc theo các từ gợi ý, bằng lời của chính em, KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.",
  "outline": [
    {
      "step": "Mở",
      "cue": "从前，在春秋时期，有一个人叫子路……“百里背米”……",
      "words": [
        "从前",
        "春秋",
        "时期",
        "子路",
        "孔子",
        "流传",
        "至今",
        "孝敬"
      ]
    },
    {
      "step": "Tử Lộ từ ngoài về",
      "cue": "父母说：只要能……就满足啦！子路听了……",
      "words": [
        "农民",
        "战争",
        "满足",
        "惭愧",
        "决心",
        "委屈"
      ]
    },
    {
      "step": "Đi làm thuê xa trăm dặm",
      "cue": "子路打听到……那家主人见他……半年后……",
      "words": [
        "打听",
        "主人",
        "结实",
        "勤奋",
        "银子",
        "老实"
      ]
    },
    {
      "step": "Trên đường về nhà",
      "cue": "路过镇上……雪地很滑……双手冻得……",
      "words": [
        "镇",
        "背",
        "后背",
        "滑",
        "甩",
        "顶",
        "扶",
        "不行",
        "团圆"
      ]
    },
    {
      "step": "Xuống nước Sở",
      "cue": "父母去世后……国君觉得他……但他反而……",
      "words": [
        "去世",
        "楚国",
        "国君",
        "本领",
        "人才",
        "官",
        "物质",
        "反而",
        "诚恳",
        "成就"
      ]
    },
    {
      "step": "Kết",
      "cue": "中国古代有句话叫“百善孝为先”……",
      "words": [
        "古代",
        "孝顺",
        "美德",
        "占",
        "食物"
      ]
    }
  ],
  "checklist": [
    "Kể đủ sáu ý trên chưa, hay bỏ mất đoạn nào?",
    "Có dùng được ít nhất 12 từ mới của bài không?",
    "Có dùng đúng 顶着大雪 và 冻得不行 ở đoạn đường về không?",
    "Có dùng 反而 đúng chỗ (đoạn ở nước Sở) không?",
    "Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?"
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 44)
// ══════════════════════════════════════════
var sgkData = [
  {
    "kieu": "kho",
    "de": "选择合适的词语填空",
    "vn": "Chọn từ thích hợp điền vào chỗ trống",
    "tu": [
      "扶",
      "占",
      "从前",
      "本领",
      "决心",
      "委屈"
    ],
    "cau": [
      {
        "s": "＿＿有个人叫乐广，他有个好朋友，一有空儿就到他家来聊天儿。",
        "dap": [
          "从前"
        ]
      },
      {
        "s": "你去教室自习的时候，帮我＿＿个座位，好吗？",
        "dap": [
          "占"
        ]
      },
      {
        "s": "请您先在这儿＿＿一晚，明天我们就给您换个好的房间。",
        "dap": [
          "委屈"
        ]
      },
      {
        "s": "邻居家有一条＿＿高强的小狗，能看门，能送报，还能买菜。",
        "dap": [
          "本领"
        ]
      },
      {
        "s": "他把那位老爷爷＿＿过了马路。",
        "dap": [
          "扶"
        ]
      },
      {
        "s": "我下＿＿从明天开始早睡早起，每天锻炼身体。",
        "dap": [
          "决心"
        ]
      }
    ]
  },
  {
    "kieu": "ab",
    "de": "选择正确答案",
    "vn": "Chọn đáp án đúng",
    "cau": [
      {
        "s": "昨天打不到车，是他＿＿着我去的医院。",
        "opts": [
          "背",
          "后背"
        ],
        "ans": 0,
        "giai": "Cần ĐỘNG TỪ “cõng” (背 bēi) + 着. 后背 là danh từ “lưng”."
      },
      {
        "s": "我跟爸爸妈妈说好了，会在10点＿＿回家。",
        "opts": [
          "从前",
          "以前"
        ],
        "ans": 1,
        "giai": "Đứng sau thời điểm 10点, lại chỉ tương lai → 以前. 从前 chỉ quá khứ xa, không đứng sau thời điểm."
      },
      {
        "s": "这是在警察局，你给我＿＿点！别乱动！",
        "opts": [
          "老实",
          "诚实"
        ],
        "ans": 0,
        "giai": "老实 còn nghĩa “ngoan, yên phận, không quậy” — 老实点儿！ = ngồi yên đó! 诚实 chỉ là “không nói dối”."
      },
      {
        "s": "他没有接受那份优厚的待遇，＿＿辞职了。",
        "opts": [
          "而且",
          "反而"
        ],
        "ans": 1,
        "giai": "Kết quả ngược lẽ thường (không nhận đãi ngộ tốt mà còn xin nghỉ) → 反而. 而且 chỉ nối ý cùng chiều."
      }
    ]
  },
  {
    "kieu": "vitri",
    "de": "给括号里的词选择适当的位置",
    "vn": "Chọn vị trí thích hợp cho từ trong ngoặc",
    "cau": [
      {
        "s": "A这个美丽的B故事一直C到现在D。",
        "tu": "流传",
        "ans": "C",
        "giai": "一直 + 流传 + 到现在: phó từ 一直 đứng trước động từ, 到现在 là bổ ngữ sau động từ."
      },
      {
        "s": "请你A暗中B一下C这件事，别让大家都D知道。",
        "tu": "打听",
        "ans": "B",
        "giai": "暗中 (âm thầm) là trạng ngữ, đứng trước động từ: 暗中打听一下这件事."
      },
      {
        "s": "球A被B那个球员C了D回来。",
        "tu": "顶",
        "ans": "C",
        "giai": "Câu 被: 球 + 被 + 那个球员 + 顶 + 了 + 回来 (cầu thủ đánh đầu đưa bóng trở lại)."
      },
      {
        "s": "这几天A作业B太多了，我累C不得了D。",
        "tu": "得",
        "ans": "C",
        "giai": "Bổ ngữ mức độ: 累 + 得 + 不得了."
      }
    ]
  }
];
