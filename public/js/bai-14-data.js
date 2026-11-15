// ══════════════════════════════════════════
// DATA — Bài 14: 你看过那个电影吗？
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "过",
    "py": "guo",
    "pos": "Trợ từ động thái",
    "vn": "đã từng (kinh nghiệm)",
    "hv": "quá",
    "em": "✅",
    "lesson": 1,
    "ex_zh": "你看过那个电影吗？",
    "ex_py": "Nǐ kànguo nàge diànyǐng ma?",
    "ex_vn": "Bạn đã từng xem bộ phim đó chưa?",
    "exList": [
      {
        "zh": "你看过那个电影吗？",
        "py": "Nǐ kànguo nàge diànyǐng ma?",
        "vn": "Bạn đã từng xem bộ phim đó chưa?"
      },
      {
        "zh": "我去过中国。",
        "py": "Wǒ qùguo Zhōngguó.",
        "vn": "Tôi đã từng đến Trung Quốc."
      },
      {
        "zh": "她没吃过中国菜。",
        "py": "Tā méi chīguo Zhōngguó cài.",
        "vn": "Cô ấy chưa từng ăn món Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "过",
        "p": "guo / guò",
        "type": "半包围结构 · Bán bao vây",
        "st": 6,
        "ord": "辶 (sước) → 寸 (biến thể)",
        "rad": "辶 (sước – đi)",
        "mean": "đã từng; đi qua",
        "tip": "Bộ 辶(đi) → đã ĐI QUA một việc gì đó = có kinh nghiệm về việc đó. Đã gặp nghĩa \"đi qua\" ở Bài 7 (走过).",
        "cf": "边 (biān – \"bên cạnh\")",
        "w": "看过 / 去过 / 吃过"
      }
    ],
    "colloFull": [
      {
        "zh": "去过",
        "py": "qù guo",
        "vn": "đã từng đi"
      },
      {
        "zh": "吃过",
        "py": "chī guo",
        "vn": "đã từng ăn"
      },
      {
        "zh": "看过",
        "py": "kàn guo",
        "vn": "đã từng xem"
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
        "m": "Đã từng làm: 我去过北京"
      },
      {
        "s": "没 + động từ + 过",
        "m": "Chưa từng làm: 我没去过 — KHÔNG bỏ 过"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã từng đi Bắc Kinh du lịch.",
        "answer": "我去过北京旅游。",
        "answerPy": "Wǒ qùguo Běijīng lǚyóu.",
        "note": "过 nói kinh nghiệm đã từng.",
        "pair": "V + 过"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chưa từng ăn thịt cừu.",
        "answer": "我没吃过羊肉。",
        "answerPy": "Wǒ méi chīguo yángròu.",
        "note": "Phủ định dùng 没, KHÔNG bỏ 过.",
        "pair": "没 + V + 过"
      }
    ]
  },
  {
    "n": 2,
    "zh": "有意思",
    "py": "yǒuyìsi",
    "pos": "Tính từ",
    "vn": "thú vị, hay",
    "hv": "hữu ý tư",
    "em": "😊",
    "lesson": 1,
    "ex_zh": "看过，很有意思。",
    "ex_py": "Kànguo, hěn yǒuyìsi.",
    "ex_vn": "Đã xem rồi, rất thú vị.",
    "exList": [
      {
        "zh": "看过，很有意思。",
        "py": "Kànguo, hěn yǒuyìsi.",
        "vn": "Đã xem rồi, rất thú vị."
      },
      {
        "zh": "写汉字很有意思。",
        "py": "Xiě Hànzì hěn yǒuyìsi.",
        "vn": "Viết chữ Hán rất thú vị."
      },
      {
        "zh": "这本书很有意思。",
        "py": "Zhè běn shū hěn yǒuyìsi.",
        "vn": "Quyển sách này rất thú vị."
      }
    ],
    "hanzi": [
      {
        "c": "意",
        "p": "yì",
        "type": "上下结构 · Trên-dưới",
        "st": 13,
        "ord": "立 → 日 → 心",
        "rad": "心 (tâm – trái tim)",
        "mean": "ý, ý nghĩ",
        "tip": "立(đứng) trên 日(mặt trời) trên 心(tim) → đứng suy nghĩ trong lòng = Ý NGHĨ.",
        "cf": "音 (yīn – \"âm thanh\")",
        "w": "意思 / 同意 / 意见"
      },
      {
        "c": "思",
        "p": "sī",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "田 → 心",
        "rad": "心 (tâm – trái tim)",
        "mean": "suy nghĩ",
        "tip": "田(ruộng, tượng trưng đầu óc) trên 心(tim) → SUY NGHĨ bằng cả đầu và tim.",
        "cf": "田 (tián – \"ruộng\")",
        "w": "意思 / 思考 / 有意思"
      }
    ],
    "colloFull": [
      {
        "zh": "很有意思",
        "py": "hěn yǒuyìsi",
        "vn": "rất thú vị"
      },
      {
        "zh": "没有意思",
        "py": "méiyǒu yìsi",
        "vn": "không thú vị"
      },
      {
        "zh": "有意思的书",
        "py": "yǒuyìsi de shū",
        "vn": "quyển sách hay"
      },
      {
        "zh": "最有意思",
        "py": "zuì yǒuyìsi",
        "vn": "thú vị nhất"
      }
    ],
    "patterns": [
      {
        "s": "很 + 有意思",
        "m": "Rất thú vị — 有意思 là một cụm cố định"
      },
      {
        "s": "有意思 (thú vị) ≠ 意思 (ý nghĩa): 什么意思？"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Quyển sách này rất hay, bạn xem thử đi.",
        "answer": "这本书很有意思，你看一下吧。",
        "answerPy": "Zhè běn shū hěn yǒu yìsi, nǐ kàn yíxià ba.",
        "note": "有意思 là một cụm cố định.",
        "pair": "很 + 有意思"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy tiết học này dài nhưng rất thú vị.",
        "answer": "虽然这节课很长，但是很有意思。",
        "answerPy": "Suīrán zhè jié kè hěn cháng, dànshì hěn yǒu yìsi.",
        "note": "Tiếng Trung phải đủ cả hai vế.",
        "pair": "虽然……但是……"
      }
    ]
  },
  {
    "n": 3,
    "zh": "但是",
    "py": "dànshì",
    "pos": "Liên từ",
    "vn": "nhưng",
    "hv": "đãn thị",
    "em": "🔀",
    "lesson": 2,
    "ex_zh": "可以，但是我女朋友也想一起去。",
    "ex_py": "Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.",
    "ex_vn": "Được, nhưng bạn gái tôi cũng muốn đi cùng.",
    "exList": [
      {
        "zh": "可以，但是我女朋友也想一起去。",
        "py": "Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.",
        "vn": "Được, nhưng bạn gái tôi cũng muốn đi cùng."
      },
      {
        "zh": "我想去，但是没有时间。",
        "py": "Wǒ xiǎng qù, dànshì méiyǒu shíjiān.",
        "vn": "Tôi muốn đi, nhưng không có thời gian."
      },
      {
        "zh": "他很忙，但是他每天都去打球。",
        "py": "Tā hěn máng, dànshì tā měitiān dōu qù dǎqiú.",
        "vn": "Anh ấy rất bận, nhưng ngày nào cũng đi chơi bóng."
      }
    ],
    "hanzi": [
      {
        "c": "但",
        "p": "dàn",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "亻(nhân) trái → 旦 (đán) phải",
        "rad": "亻(nhân – người)",
        "mean": "nhưng, chỉ",
        "tip": "亻(người) + 旦(bình minh) → người đứng lúc bình minh chỉ có MỘT MÌNH, ý \"chỉ, nhưng\".",
        "cf": "担 (dān – \"gánh vác\")",
        "w": "但是 / 不但"
      }
    ],
    "colloFull": [
      {
        "zh": "但是很贵",
        "py": "dànshì hěn guì",
        "vn": "nhưng rất đắt"
      },
      {
        "zh": "但是没去",
        "py": "dànshì méi qù",
        "vn": "nhưng đã không đi"
      },
      {
        "zh": "但是不懂",
        "py": "dànshì bù dǒng",
        "vn": "nhưng không hiểu"
      },
      {
        "zh": "但是很累",
        "py": "dànshì hěn lèi",
        "vn": "nhưng rất mệt"
      }
    ],
    "patterns": [
      {
        "s": "虽然……，但是……",
        "m": "Tuy … nhưng … — dùng CẢ HAI vế"
      },
      {
        "s": "但是 đứng đầu vế sau, nói điều ngược lại"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái điện thoại này đắt nhưng rất tốt.",
        "answer": "这个手机很贵，但是很好。",
        "answerPy": "Zhège shǒujī hěn guì, dànshì hěn hǎo.",
        "note": "但是 đứng đầu vế sau.",
        "pair": "……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đã học tiếng Trung hai năm nhưng nói vẫn không nhanh.",
        "answer": "我学了两年汉语，但是说得不快。",
        "answerPy": "Wǒ xuéle liǎng nián Hànyǔ, dànshì shuō de bú kuài.",
        "note": "Sau 得 nói mức độ làm việc đó.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "虽然",
    "py": "suīrán",
    "pos": "Liên từ",
    "vn": "mặc dù, tuy",
    "hv": "tuy nhiên",
    "em": "⚖️",
    "lesson": 2,
    "ex_zh": "虽然北京很远，但是你一定要去看看。",
    "ex_py": "Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.",
    "ex_vn": "Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.",
    "exList": [
      {
        "zh": "虽然北京很远，但是你一定要去看看。",
        "py": "Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.",
        "vn": "Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử."
      },
      {
        "zh": "虽然汉字很难，但是我很喜欢写汉字。",
        "py": "Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.",
        "vn": "Mặc dù chữ Hán khó, nhưng tôi rất thích viết chữ Hán."
      },
      {
        "zh": "虽然下雨，但是他还是去了。",
        "py": "Suīrán xiàyǔ, dànshì tā háishi qù le.",
        "vn": "Mặc dù trời mưa, nhưng anh ấy vẫn đi."
      }
    ],
    "hanzi": [
      {
        "c": "虽",
        "p": "suī",
        "type": "左右结构 · Trái-phải",
        "st": 9,
        "ord": "虫 (trùng) → 口 phía trên",
        "rad": "虫 (trùng – côn trùng)",
        "mean": "tuy, mặc dù",
        "tip": "口(miệng) trên 虫(côn trùng) → chỉ mang nghĩa ngữ pháp \"TUY\", không liên quan nghĩa gốc.",
        "cf": "虫 (chóng – \"côn trùng\")",
        "w": "虽然 / 虽说"
      },
      {
        "c": "然",
        "p": "rán",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "月(biến thể) → 犬(biến thể) → 灬",
        "rad": "灬(hỏa – lửa)",
        "mean": "vậy, như thế",
        "tip": "Kết hợp thịt 月 + chó 犬 + lửa 灬 (nướng) → nghĩa gốc \"đốt\", nay dùng làm hậu tố \"NHƯ VẬY\".",
        "cf": "燃 (rán – \"đốt cháy\")",
        "w": "虽然 / 当然 / 自然"
      }
    ],
    "colloFull": [
      {
        "zh": "虽然很贵",
        "py": "suīrán hěn guì",
        "vn": "tuy rất đắt"
      },
      {
        "zh": "虽然很累",
        "py": "suīrán hěn lèi",
        "vn": "tuy rất mệt"
      },
      {
        "zh": "虽然下雨",
        "py": "suīrán xià yǔ",
        "vn": "tuy trời mưa"
      },
      {
        "zh": "虽然很远",
        "py": "suīrán hěn yuǎn",
        "vn": "tuy rất xa"
      }
    ],
    "patterns": [
      {
        "s": "虽然 + vế 1，但是 + vế 2",
        "m": "Tuy … nhưng …"
      },
      {
        "s": "Tiếng Việt chỉ cần một vế, tiếng Trung phải đủ hai"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuy hôm nay mưa nhưng chúng tôi vẫn đi chơi.",
        "answer": "虽然今天下雨，但是我们还去玩儿。",
        "answerPy": "Suīrán jīntiān xià yǔ, dànshì wǒmen hái qù wánr.",
        "note": "还 — vẫn, dù sao cũng.",
        "pair": "虽然……但是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tuy khách sạn này xa nhưng rẻ hơn khách sạn kia.",
        "answer": "虽然这个宾馆很远，但是比那个便宜。",
        "answerPy": "Suīrán zhège bīnguǎn hěn yuǎn, dànshì bǐ nàge piányi.",
        "note": "Sau 比 KHÔNG dùng 很.",
        "pair": "A 比 B + Adj"
      }
    ]
  },
  {
    "n": 5,
    "zh": "次",
    "py": "cì",
    "pos": "Lượng từ",
    "vn": "lần, lượt",
    "hv": "thứ",
    "em": "🔢",
    "lesson": 2,
    "ex_zh": "我们今天晚上再去看一次，怎么样？",
    "ex_py": "Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?",
    "ex_vn": "Tối nay chúng ta đi xem thêm một lần nữa, được không?",
    "exList": [
      {
        "zh": "我们今天晚上再去看一次，怎么样？",
        "py": "Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?",
        "vn": "Tối nay chúng ta đi xem thêm một lần nữa, được không?"
      },
      {
        "zh": "我去过一次中国。",
        "py": "Wǒ qùguo yí cì Zhōngguó.",
        "vn": "Tôi đã từng đến Trung Quốc một lần."
      },
      {
        "zh": "这是我第一次吃中国菜。",
        "py": "Zhè shì wǒ dì-yī cì chī Zhōngguó cài.",
        "vn": "Đây là lần đầu tiên tôi ăn món Trung Quốc."
      }
    ],
    "hanzi": [
      {
        "c": "次",
        "p": "cì",
        "type": "左右结构 · Trái-phải",
        "st": 6,
        "ord": "冫(băng) trái → 欠 (khiếm) phải",
        "rad": "冫(băng – băng giá)",
        "mean": "lần, lượt",
        "tip": "Bộ 冫(băng) + 欠(thiếu, ngáp) → dùng đếm số LẦN lặp lại của một hành động.",
        "cf": "冷 (lěng – \"lạnh\")",
        "w": "一次 / 再次 / 这次"
      }
    ],
    "colloFull": [
      {
        "zh": "一次",
        "py": "yí cì",
        "vn": "một lần"
      },
      {
        "zh": "第一次",
        "py": "dì yí cì",
        "vn": "lần đầu tiên"
      },
      {
        "zh": "去过两次",
        "py": "qù guo liǎng cì",
        "vn": "đã đi hai lần"
      },
      {
        "zh": "几次",
        "py": "jǐ cì",
        "vn": "mấy lần"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 过 + số + 次",
        "m": "Đã làm mấy lần: 我去过两次"
      },
      {
        "s": "次 đếm SỐ LẦN; 个 đếm sự vật"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã đến Bắc Kinh hai lần rồi.",
        "answer": "我去过两次北京。",
        "answerPy": "Wǒ qùguo liǎng cì Běijīng.",
        "note": "次 đếm số lần, 个 đếm sự vật.",
        "pair": "V过 + số + 次"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là lần đầu tiên tôi ngồi máy bay.",
        "answer": "这是我第一次坐飞机。",
        "answerPy": "Zhè shì wǒ dì-yī cì zuò fēijī.",
        "note": "第一次 — lần đầu tiên.",
        "pair": "第 + số + M"
      }
    ]
  },
  {
    "n": 6,
    "zh": "玩儿",
    "py": "wánr",
    "pos": "Động từ",
    "vn": "chơi, chơi đùa",
    "hv": "ngoạn nhi",
    "em": "🎮",
    "lesson": 3,
    "ex_zh": "我想去公园玩儿。",
    "ex_py": "Wǒ xiǎng qù gōngyuán wánr.",
    "ex_vn": "Tôi muốn đi công viên chơi.",
    "exList": [
      {
        "zh": "我想去公园玩儿。",
        "py": "Wǒ xiǎng qù gōngyuán wánr.",
        "vn": "Tôi muốn đi công viên chơi."
      },
      {
        "zh": "孩子们在外面玩儿。",
        "py": "Háizimen zài wàimian wánr.",
        "vn": "Bọn trẻ đang chơi ở bên ngoài."
      },
      {
        "zh": "周末我们一起去玩儿吧。",
        "py": "Zhōumò wǒmen yìqǐ qù wánr ba.",
        "vn": "Cuối tuần chúng ta cùng đi chơi nhé."
      }
    ],
    "hanzi": [
      {
        "c": "玩",
        "p": "wán",
        "type": "左右结构 · Trái-phải",
        "st": 8,
        "ord": "王 (vương) trái → 元 (nguyên) phải",
        "rad": "王 (vương – ngọc)",
        "mean": "chơi, chơi đùa",
        "tip": "Bộ 王(ngọc) + 元(gốc, ban đầu) → thời xưa nghịch ngọc quý để giải trí = CHƠI.",
        "cf": "现 (xiàn – \"hiện tại\", cũng bộ 王\")",
        "w": "玩儿 / 好玩儿"
      }
    ],
    "colloFull": [
      {
        "zh": "去玩儿",
        "py": "qù wánr",
        "vn": "đi chơi"
      },
      {
        "zh": "玩儿得很快乐",
        "py": "wánr de hěn kuàilè",
        "vn": "chơi rất vui"
      },
      {
        "zh": "来我家玩儿",
        "py": "lái wǒ jiā wánr",
        "vn": "đến nhà tôi chơi"
      },
      {
        "zh": "玩儿一天",
        "py": "wánr yì tiān",
        "vn": "chơi một ngày"
      }
    ],
    "patterns": [
      {
        "s": "来 / 去 + nơi chốn + 玩儿",
        "m": "Đến đâu chơi: 欢迎你来我家玩儿"
      },
      {
        "s": "玩儿 (chơi, giải trí) — khẩu ngữ luôn có 儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chào mừng bạn đến nhà tôi chơi.",
        "answer": "欢迎你来我家玩儿。",
        "answerPy": "Huānyíng nǐ lái wǒ jiā wánr.",
        "note": "玩儿 trong khẩu ngữ luôn có 儿.",
        "pair": "来……玩儿"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm qua bọn trẻ chơi rất vui.",
        "answer": "昨天孩子们玩儿得很快乐。",
        "answerPy": "Zuótiān háizimen wánr de hěn kuàilè.",
        "note": "Sau 得 vẫn phải có 很.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 7,
    "zh": "晴",
    "py": "qíng",
    "pos": "Tính từ",
    "vn": "trời quang, nắng đẹp",
    "hv": "tình",
    "em": "☀️",
    "lesson": 3,
    "ex_zh": "今天天气很晴。",
    "ex_py": "Jīntiān tiānqì hěn qíng.",
    "ex_vn": "Hôm nay trời rất quang đãng.",
    "exList": [
      {
        "zh": "今天天气很晴。",
        "py": "Jīntiān tiānqì hěn qíng.",
        "vn": "Hôm nay trời rất quang đãng."
      },
      {
        "zh": "明天是晴天。",
        "py": "Míngtiān shì qíngtiān.",
        "vn": "Ngày mai là trời nắng."
      },
      {
        "zh": "今天从阴天变成晴天了。",
        "py": "Jīntiān cóng yīntiān biànchéng qíngtiān le.",
        "vn": "Hôm nay từ trời âm u chuyển thành trời quang."
      }
    ],
    "hanzi": [
      {
        "c": "晴",
        "p": "qíng",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "日 (nhật) trái → 青 (thanh) phải",
        "rad": "日 (nhật – mặt trời)",
        "mean": "trời quang, nắng",
        "tip": "Bộ 日(mặt trời) + 青(xanh trong) → bầu trời XANH TRONG có nắng = QUANG ĐÃNG.",
        "cf": "情 (qíng – \"tình cảm\", bộ 忄\")",
        "w": "晴天 / 天晴了"
      }
    ],
    "colloFull": [
      {
        "zh": "晴天",
        "py": "qíng tiān",
        "vn": "trời nắng"
      },
      {
        "zh": "天晴了",
        "py": "tiān qíng le",
        "vn": "trời hửng rồi"
      },
      {
        "zh": "今天很晴",
        "py": "jīntiān hěn qíng",
        "vn": "hôm nay trời quang"
      },
      {
        "zh": "晴天去玩儿",
        "py": "qíng tiān qù wánr",
        "vn": "ngày nắng đi chơi"
      }
    ],
    "patterns": [
      {
        "s": "天 + 晴 + 了",
        "m": "Trời hửng rồi — tình hình đã đổi"
      },
      {
        "s": "晴 có bộ 日 (mặt trời) — có nắng thì trời quang"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trời hửng rồi, chúng ta đi chơi thôi.",
        "answer": "天晴了，我们去玩儿吧。",
        "answerPy": "Tiān qíng le, wǒmen qù wánr ba.",
        "note": "了 cuối câu báo tình hình đã đổi.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai trời nắng, tôi muốn đi bơi.",
        "answer": "明天是晴天，我要去游泳。",
        "answerPy": "Míngtiān shì qíngtiān, wǒ yào qù yóuyǒng.",
        "note": "晴 có bộ 日 — có nắng thì trời quang.",
        "pair": "要 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "百",
    "py": "bǎi",
    "pos": "Số từ",
    "vn": "trăm",
    "hv": "bách",
    "em": "💯",
    "lesson": 3,
    "ex_zh": "我学了大概一百个小时了。",
    "ex_py": "Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.",
    "ex_vn": "Tôi đã học được khoảng một trăm tiếng rồi.",
    "exList": [
      {
        "zh": "我学了大概一百个小时了。",
        "py": "Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.",
        "vn": "Tôi đã học được khoảng một trăm tiếng rồi."
      },
      {
        "zh": "这本书有三百页。",
        "py": "Zhè běn shū yǒu sānbǎi yè.",
        "vn": "Quyển sách này có ba trăm trang."
      },
      {
        "zh": "这件衣服一百块钱。",
        "py": "Zhè jiàn yīfu yìbǎi kuài qián.",
        "vn": "Chiếc áo này giá một trăm tệ."
      }
    ],
    "hanzi": [
      {
        "c": "百",
        "p": "bǎi",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "一 → 白",
        "rad": "白 (bạch – trắng)",
        "mean": "trăm",
        "tip": "一(một) trên 白(trăm cũng gần âm bạch) → số đếm TRĂM.",
        "cf": "白 (bái – \"màu trắng\")",
        "w": "一百 / 几百 / 百分之"
      }
    ],
    "colloFull": [
      {
        "zh": "一百",
        "py": "yìbǎi",
        "vn": "một trăm"
      },
      {
        "zh": "两百",
        "py": "liǎngbǎi",
        "vn": "hai trăm"
      },
      {
        "zh": "一百块",
        "py": "yìbǎi kuài",
        "vn": "một trăm đồng"
      },
      {
        "zh": "几百",
        "py": "jǐ bǎi",
        "vn": "mấy trăm"
      }
    ],
    "patterns": [
      {
        "s": "số + 百",
        "m": "Đếm hàng trăm: 一百 · 两百"
      },
      {
        "s": "一百 chứ không nói 百 trơ — trước 百 luôn có số"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái áo này một trăm đồng, không đắt.",
        "answer": "这件衣服一百块钱，不贵。",
        "answerPy": "Zhè jiàn yīfu yìbǎi kuài qián, bú guì.",
        "note": "Nói giá thì không cần động từ 是.",
        "pair": "……块钱"
      },
      {
        "promptLang": "vi",
        "prompt": "Trường chúng tôi có hai trăm học sinh.",
        "answer": "我们学校有两百个学生。",
        "answerPy": "Wǒmen xuéxiào yǒu liǎngbǎi ge xuésheng.",
        "note": "Trước 百 luôn có số.",
        "pair": "有 + số + M + N"
      }
    ]
  }
];

const wuData = [
  {img:'✅',label:'过',py:'guo',letter:'A'},
  {img:'🎮',label:'玩儿',py:'wánr',letter:'B'},
  {img:'☀️',label:'晴',py:'qíng',letter:'C'},
  {img:'💯',label:'百',py:'bǎi',letter:'D'},
  {img:'🔢',label:'次',py:'cì',letter:'E'},
  {img:'😊',label:'有意思',py:'yǒuyìsi',letter:'F'},
];

var dialogData = [
  {scene:'议看电影 · Rủ nhau xem phim',
   preQuiz:[
     {q:'女的看过那个电影吗？',opts:['看过','没看过','忘了'],ans:0},
     {q:'除了他们俩，还有谁想一起去看？',opts:['女的的女朋友','男的的女朋友','没有别人'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你看过那个电影吗？',py:'Nǐ kànguo nàge diànyǐng ma?',vn:'Bạn đã từng xem bộ phim đó chưa?'},
     {sp:1,zh:'看过，很有意思。',py:'Kànguo, hěn yǒuyìsi.',vn:'Xem rồi, rất thú vị.'},
     {sp:0,zh:'我们今天晚上再去看一次，怎么样？',py:'Wǒmen jīntiān wǎnshang zài qù kàn yí cì, zěnmeyàng?',vn:'Tối nay chúng ta đi xem thêm một lần nữa, được không?'},
     {sp:1,zh:'可以，但是我女朋友也想一起去。',py:'Kěyǐ, dànshì wǒ nǚpéngyou yě xiǎng yìqǐ qù.',vn:'Được, nhưng bạn gái tôi cũng muốn đi cùng.'},
   ]},
  {scene:'谈论中国旅行 · Nói về chuyến đi Trung Quốc',
   preQuiz:[
     {q:'女的去过中国吗？',opts:['去过一次','没去过','去过很多次'],ans:0},
     {q:'女的去过北京吗？',opts:['去过','还没去过','不知道'],ans:1},
     {q:'男的建议她怎么做？',opts:['一定要去北京看看','不用去北京','等以后再说'],ans:0},
   ],
   lines:[
     {sp:0,zh:'听说你去过中国，还想再去吗？',py:'Tīngshuō nǐ qùguo Zhōngguó, hái xiǎng zài qù ma?',vn:'Nghe nói bạn đã từng đến Trung Quốc, vẫn muốn đi nữa không?'},
     {sp:1,zh:'想啊，我去过一次，但是还没去过北京。',py:'Xiǎng a, wǒ qùguo yí cì, dànshì hái méi qùguo Běijīng.',vn:'Muốn chứ, tôi đã đi một lần rồi, nhưng vẫn chưa đến Bắc Kinh.'},
     {sp:0,zh:'虽然北京很远，但是你一定要去看看。',py:'Suīrán Běijīng hěn yuǎn, dànshì nǐ yídìng yào qù kànkan.',vn:'Mặc dù Bắc Kinh xa, nhưng bạn nhất định phải đến xem thử.'},
     {sp:1,zh:'好，下次有机会我一定去。',py:'Hǎo, xiàcì yǒu jīhuì wǒ yídìng qù.',vn:'Được, lần sau có cơ hội tôi nhất định sẽ đi.'},
   ]},
  {scene:'周末计划 · Kế hoạch cuối tuần',
   preQuiz:[
     {q:'女的周末想做什么？',opts:['去公园玩儿','在家休息','去上班'],ans:0},
     {q:'男的会一起去吗？',opts:['会一起去','不去，还有事','也想去但没空'],ans:1},
   ],
   lines:[
     {sp:0,zh:'周末你想做什么？',py:'Zhōumò nǐ xiǎng zuò shénme?',vn:'Cuối tuần bạn muốn làm gì?'},
     {sp:1,zh:'我想去公园玩儿，今天天气很晴。',py:'Wǒ xiǎng qù gōngyuán wánr, jīntiān tiānqì hěn qíng.',vn:'Tôi muốn đi công viên chơi, hôm nay trời rất quang đãng.'},
     {sp:0,zh:'可以，但是你自己去吧，我还有很多事情要做。',py:'Kěyǐ, dànshì nǐ zìjǐ qù ba, wǒ hái yǒu hěn duō shìqing yào zuò.',vn:'Được, nhưng bạn tự đi nhé, tôi vẫn còn nhiều việc phải làm.'},
     {sp:1,zh:'好吧，那我自己去。',py:'Hǎo ba, nà wǒ zìjǐ qù.',vn:'Được thôi, vậy tôi tự đi vậy.'},
   ]},
  {scene:'学中文经验 · Kinh nghiệm học tiếng Trung',
   preQuiz:[
     {q:'女的学了大概多长时间的汉语？',opts:['十个小时','一百个小时','一千个小时'],ans:1},
     {q:'男的觉得汉字怎么样？',opts:['难，但很喜欢写','简单','不喜欢'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你学了几年汉语了？',py:'Nǐ xuéle jǐ nián Hànyǔ le?',vn:'Bạn đã học tiếng Trung được mấy năm rồi?'},
     {sp:1,zh:'我学了大概一百个小时了。',py:'Wǒ xuéle dàgài yìbǎi ge xiǎoshí le.',vn:'Tôi đã học được khoảng một trăm tiếng rồi.'},
     {sp:0,zh:'虽然汉字很难，但是我很喜欢写汉字。',py:'Suīrán Hànzì hěn nán, dànshì wǒ hěn xǐhuan xiě Hànzì.',vn:'Mặc dù chữ Hán khó, nhưng tôi rất thích viết chữ Hán.'},
     {sp:1,zh:'我也是，写汉字很有意思。',py:'Wǒ yě shì, xiě Hànzì hěn yǒuyìsi.',vn:'Tôi cũng vậy, viết chữ Hán rất thú vị.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation) — ghép hai nửa thành cụm dùng được ngay
// Không copy câu bài khoá — chỉ ghép CỤM TỪ để phản xạ collocation.
// ══════════════════════════════════════════
var matchData = [
  {left:'坐过',right:'飞机'},
  {left:'去公园',right:'玩儿'},
  {left:'明天是',right:'晴天'},
  {left:'一百多',right:'块钱'},
  {left:'这个电影',right:'很有意思'},
  {left:'虽然很累',right:'但是很高兴'},
  {left:'一次也',right:'没去过'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: rủ nhau đi ăn nhà hàng Tứ Xuyên mới mở.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-14/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'下个星期我要和女朋友', blank:'去看一次电影', post:'。', py:'Xià gè xīngqī wǒ yào hé nǚpéngyou qù kàn yí cì diànyǐng.', vn:'Tuần tới tôi sẽ cùng bạn gái đi xem một buổi phim.'},
    ]},
    {num:2, lines:[
      {pre:'虽然工作很忙，', blank:'但是我每天都游泳', post:'。', py:'Suīrán gōngzuò hěn máng, dànshì wǒ měitiān dōu yóuyǒng.', vn:'Dù công việc rất bận, nhưng tôi ngày nào cũng đi bơi.'},
    ]},
    {num:3, lines:[
      {pre:'你自己去跑步吧，', blank:'我还有事情要做呢', post:'。', py:'Nǐ zìjǐ qù pǎobù ba, wǒ hái yǒu shìqing yào zuò ne.', vn:'Bạn tự đi chạy bộ đi, tôi còn việc phải làm.'},
    ]},
    {num:4, lines:[
      {pre:'这本书我', blank:'看过很多次了，真的很有意思', post:'。', py:'Zhè běn shū wǒ kànguo hěn duō cì le, zhēn de hěn yǒu yìsi.', vn:'Quyển sách này tôi đã đọc nhiều lần rồi, thật sự rất thú vị.'},
    ]},
    {num:5, lines:[
      {pre:'长时间玩电脑对眼睛不好，', blank:'但是儿子非常喜欢', post:'。', py:'Chángshíjiān wán diànnǎo duì yǎnjīng bù hǎo, dànshì érzi fēicháng xǐhuan.', vn:'Chơi máy tính lâu không tốt cho mắt, nhưng con trai lại rất thích.'},
    ]},
    {num:6, lines:[
      {speaker:'女', pre:'爸爸，您看过这个电影吗？', blank:'我同学说很有意思', post:'。', py:'Bàba, nín kànguo zhège diànyǐng ma? Wǒ tóngxué shuō hěn yǒu yìsi.', vn:'Bố ơi, bố xem phim này chưa? Bạn con nói rất hay.'},
      {speaker:'男', pre:'没看过，', blank:'下星期我们一起去看吧', post:'。', py:'Méi kànguo, xià xīngqī wǒmen yìqǐ qù kàn ba.', vn:'Chưa xem, tuần sau chúng ta cùng đi xem đi.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'虽然是晴天，', blank:'但是天气很冷', post:'。', py:'Suīrán shì qíngtiān, dànshì tiānqì hěn lěng.', vn:'Dù trời nắng, nhưng thời tiết rất lạnh.'},
      {speaker:'男', pre:'没关系，我还要', blank:'和同学们一起打篮球呢', post:'。', py:'Méi guānxi, wǒ hái yào hé tóngxuémen yìqǐ dǎ lánqiú ne.', vn:'Không sao, tôi còn phải chơi bóng rổ cùng các bạn nữa.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'一起', blank:'吃早饭吧', post:'。', py:'Yìqǐ chī zǎofàn ba.', vn:'Cùng ăn sáng đi.'},
      {speaker:'女', pre:'我已经吃过了，', blank:'你自己吃吧', post:'。', py:'Wǒ yǐjīng chīguo le, nǐ zìjǐ chī ba.', vn:'Tôi ăn rồi, bạn tự ăn đi.'},
    ]},
    {num:9, lines:[
      {speaker:'男', pre:'这次考试', blank:'怎么样', post:'？', py:'Zhè cì kǎoshì zěnmeyàng?', vn:'Bài thi lần này thế nào?'},
      {speaker:'女', pre:'别说了，', blank:'很多学过的汉字我都不会写了', post:'。', py:'Bié shuō le, hěn duō xuéguo de Hànzì wǒ dōu bú huì xiě le.', vn:'Đừng nhắc nữa, nhiều chữ Hán đã học tôi đều quên viết rồi.'},
    ]},
    {num:10, lines:[
      {speaker:'男', pre:'别买衣服了，', blank:'我没有那么多钱', post:'。', py:'Bié mǎi yīfu le, wǒ méiyǒu nàme duō qián.', vn:'Đừng mua quần áo nữa, tôi không có nhiều tiền vậy đâu.'},
      {speaker:'女', pre:'没关系，', blank:'我这儿有钱', post:'。', py:'Méi guānxi, wǒ zhèr yǒu qián.', vn:'Không sao, tôi có tiền đây.'},
    ]},
  ],
  mc: [
    {num:11, options:['一次','两次','三次'], ans:1,
     explain:'男：您是第一次来我们这儿吗？女：不是，去年九月我来过一次。问：女的来过这里几次？ → 两次（去年一次+这次）。'},
    {num:12, options:['东西好，便宜','东西不好，便宜','东西好，不便宜'], ans:2,
     explain:'男：你在这个商店买过东西没有？女：买过一次，这儿的东西还可以，就是不便宜。问：女的是什么意思？ → 东西好，不便宜。'},
    {num:13, options:['太忙','太累','不喜欢跑步'], ans:0,
     explain:'女：明天一起去跑步吧。男：你自己去吧，我还有很多工作要做呢。问：男的为什么不去跑步？ → 太忙。'},
    {num:14, options:['前天的','今天的','昨天的'], ans:2,
     explain:'男：今天的报纸你看过了没有？女：没有，我在看昨天的报纸呢。问：女的看的是哪天的报纸？ → 昨天的。'},
    {num:15, options:['不想让女的买','想让女的买','两百多块太贵了'], ans:1,
     explain:'女：这件衣服不错，就是有点儿贵。男：两百多块还可以，喜欢就买吧。问：男的想让女的买这件衣服吗？ → 想让女的买。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — mỗi câu một tình huống mới (过 · 虽然……但是…… · bổ ngữ động lượng + từ mới bài 14, ôn bài trước)
// ══════════════════════════════════════════
var fillData = [
  {pre:'Bạn kể với bạn học về món ăn: “羊肉面条我吃',blank:'过',post:'两次，很好吃。”',hint:'(đã từng)',ans:'过',exp:'Động từ + 过 = đã từng làm; số lần đặt sau 过: 吃过两次.'},
  {pre:'“你见过王老师的儿子吗？” — “我',blank:'没',post:'见过，听说他很高。”',hint:'(chưa)',ans:'没',exp:'Phủ định của 过 là 没 + động từ + 过: 没见过; không nói 不见过.'},
  {pre:'“你学过游泳吗？” — “学',blank:'过',post:'，但是现在很少去游泳。”',hint:'(đã từng)',ans:'过',exp:'Trả lời câu hỏi …过…吗？ bằng chính động từ + 过: 学过 = có học rồi.'},
  {pre:'那家饭店的鱼很好吃，下个星期我们再去吃一',blank:'次',post:'吧。',hint:'(lần)',ans:'次',exp:'Số + 次 đứng sau động từ để đếm số lần: 再去吃一次 = đi ăn thêm một lần.'},
  {pre:'“下雨了，你还去打篮球吗？” — “去！',blank:'虽然',post:'下雨了，但是我和同学说好了。”',hint:'(mặc dù)',ans:'虽然',exp:'虽然 mở đầu vế nhượng bộ, vế sau dùng 但是: 虽然下雨了，但是….'},
  {pre:'Bạn khen chiếc đồng hồ mới của bạn: “这块手表虽然不便宜，',blank:'但是',post:'非常漂亮。”',hint:'(nhưng)',ans:'但是',exp:'但是 đứng ĐẦU vế sau, trước chủ ngữ / vị ngữ: …，但是非常漂亮.'},
  {pre:'“昨天的汉语课怎么样？” — “很',blank:'有意思',post:'，老师和我们一起唱歌了。”',hint:'(thú vị, hay)',ans:'有意思',exp:'有意思 là tính từ, đứng sau 很: 很有意思; không nói 很意思 hay 是有意思.'},
  {pre:'Bạn mời bạn cùng lớp: “星期天来我家',blank:'玩儿',post:'吧，我妈妈会做很多好吃的菜。”',hint:'(chơi)',ans:'玩儿',exp:'来 / 去 + nơi chốn + 玩儿 = đến … chơi; nơi chốn đứng TRƯỚC 玩儿.'},
  {pre:'“明天会下雪吗？” — “不会，明天是',blank:'晴',post:'天，可以去公园跑步。”',hint:'(trời quang, nắng)',ans:'晴',exp:'晴天 = ngày nắng ráo; 天晴了 = trời tạnh, nắng lên rồi.'},
  {pre:'我们学校很大，有两',blank:'百',post:'多个老师。',hint:'(trăm)',ans:'百',exp:'Số + 百 + 多 + lượng từ: 两百多个 = hơn hai trăm (người).'},
  {pre:'“你哥哥帮你洗衣服吗？” — “不，我的衣服都是我',blank:'自己',post:'洗。”',hint:'(tự mình)',ans:'自己',exp:'Chủ ngữ + 自己 + động từ = tự làm lấy: 我自己洗.'},
  {pre:'Bạn dặn bạn sắp đi Bắc Kinh: “到了北京，',blank:'一定',post:'要给我打电话啊！”',hint:'(nhất định)',ans:'一定',exp:'一定要 + động từ = nhất định phải làm; 一定 đứng trước 要.'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP — câu MỚI, dùng 过 / 虽然……但是…… / 次 / 晴 / 百
// ══════════════════════════════════════════
var sortData = [
  {words:['我','没','吃','过','这个','水果','。'],ans:'我没吃过这个水果。',audio:'我没吃过这个水果。'},
  {words:['虽然','天气','不','好','，','但是','孩子','都','想','去','外面','玩儿','。'],ans:'虽然天气不好，但是孩子都想去外面玩儿。',audio:'虽然天气不好，但是孩子都想去外面玩儿。'},
  {words:['他','去年','来','过','我们','家','一次','。'],ans:'他去年来过我们家一次。',audio:'他去年来过我们家一次。',alt:['去年他来过我们家一次。','他去年来过一次我们家。','去年他来过一次我们家。']},
  {words:['这个','电影','我','看','了','三','次','。'],ans:'这个电影我看了三次。',audio:'这个电影我看了三次。'},
  {words:['下午','天','晴','了','，','我们','去','踢','足球','吧','。'],ans:'下午天晴了，我们去踢足球吧。',audio:'下午天晴了，我们去踢足球吧。'},
  {words:['这儿','离','我','家','有','一百','多','米','。'],ans:'这儿离我家有一百多米。',audio:'这儿离我家有一百多米。'},
  {words:['我','很','想','去','，','但是','明天','要','上班','。'],ans:'我很想去，但是明天要上班。',audio:'我很想去，但是明天要上班。'},
  {words:['王老师','上课','很','有意思','。'],ans:'王老师上课很有意思。',audio:'王老师上课很有意思。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI — lỗi học sinh Việt hay mắc
// (过 đặt sai chỗ / 有+V+过 / 不…过, số lần trước động từ, 他 + 一次, 但是 sau chủ ngữ, 虽然…所以, 去玩儿公园, 是 + tính từ)
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'这个菜我过吃，非常好吃。',
   opts:['这个菜我吃了过，非常好吃。','这个菜我吃过，非常好吃。','这个菜我有吃过，非常好吃。','这个菜我过吃了，非常好吃。'],ans:1,
   exp:'过 đứng NGAY SAU động từ: 吃过; không thêm 了 hay 有 trước động từ như “có ăn qua”.'},
  {wrong:'我不去过北京。（ý: tôi chưa từng đi Bắc Kinh）',
   opts:['我没去过北京。','我没去北京过。','我不去北京过。','我没有去过了北京。'],ans:0,
   exp:'Phủ định kinh nghiệm: 没 + động từ + 过 + nơi chốn (没去过北京); không dùng 不, không thêm 了.'},
  {wrong:'虽然他很忙，所以他每天都跑步。',
   opts:['虽然他很忙，他但是每天都跑步。','虽然他很忙，但是他都每天跑步。','因为他很忙，但是他每天都跑步。','虽然他很忙，但是他每天都跑步。'],ans:3,
   exp:'虽然 đi với 但是 (tuy… nhưng…), không đi với 所以; 但是 đứng đầu vế sau, 都 đứng sau 每天.'},
  {wrong:'我见过一次他，他很高。',
   opts:['我一次见过他，他很高。','我见过他一次，他很高。','我见过他一次，他是很高。','我见一次过他，他很高。'],ans:1,
   exp:'Tân ngữ là đại từ (他) thì đặt trước số lần: 见过他一次; 过 sát động từ; trước tính từ không thêm 是.'},
  {wrong:'这个电影我两次看过了。',
   opts:['这个电影我看两次过了。','这个电影我看过两个次了。','这个电影我看过两次了。','这个电影我看过二次了。'],ans:2,
   exp:'Số lần đứng SAU động từ + 过: 看过两次; 次 đã là lượng từ nên không thêm 个; đếm lần dùng 两, không dùng 二.'},
  {wrong:'虽然北京很冷，我但是很喜欢那儿。',
   opts:['虽然北京很冷，但是我很喜欢那儿。','虽然北京是很冷，但是我很喜欢那儿。','虽然北京很冷，但是我那儿很喜欢。','虽然北京很冷，但是很喜欢我那儿。'],ans:0,
   exp:'但是 đứng đầu vế sau, TRƯỚC chủ ngữ: 但是我很喜欢…; trước tính từ không thêm 是.'},
  {wrong:'星期六我们去玩儿公园吧。',
   opts:['星期六我们玩儿去公园吧。','星期六我们去玩儿在公园吧。','星期六我们去公园玩儿吗。','星期六我们去公园玩儿吧。'],ans:3,
   exp:'Nơi chốn đứng giữa 去 và 玩儿: 去公园玩儿 (không dịch từng chữ “đi chơi công viên”); rủ rê dùng 吧.'},
  {wrong:'这本书一百块多，太贵了。',
   opts:['这本书多一百块，太贵了。','这本书一百多块，太贵了。','这本书一百多块，是太贵了。','这本书一百多个块，太贵了。'],ans:1,
   exp:'Số tròn trăm + 多 + lượng từ: 一百多块; 块 đã là lượng từ nên không thêm 个; không thêm 是 trước 太贵了.'},
  {wrong:'这个电影是很有意思，你去看看吧。',
   opts:['这个电影很意思，你去看看吧。','这个电影有很意思，你去看看吧。','这个电影很有意思，你去看看吧。','这个电影很有意思，你去看看吗。'],ans:2,
   exp:'有意思 là một tính từ: 很有意思 (không bỏ 有, không chen 很 vào giữa); không thêm 是 trước tính từ.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm thật + chấm điểm AI)
// ══════════════════════════════════════════
// Luyen noi voi AI (mode 'ai-speak'): moi cau hoi la mot tinh huong doi song
// lien quan den bai khoa; hoc sinh tu ghi am cau tra loi, AI nghe lai (nhan
// dien giong noi tieng Trung) roi cham diem theo 4 tieu chi va nhan xet.
var speakingData = {
  mode: 'ai-speak',
  intro: 'Mỗi câu hỏi là một tình huống thật trong đời sống, dùng đúng từ vựng và mẫu câu của Bài 14. Bấm 🎙️ rồi trả lời bằng tiếng Trung — AI sẽ nghe, ghi lại câu bạn nói và chấm điểm theo Nội dung · Mẫu câu · Từ vựng · Độ trôi chảy. Nên tự trả lời trước rồi mới mở “Câu mẫu” để đối chiếu.',
  tasks: [
    {
      situation: 'Giờ ra chơi, bạn học hỏi bạn về phim đã xem gần đây.',
      q_zh: '最近你看过什么好看的电影？你看了几次？',
      q_py: 'Zuìjìn nǐ kànguo shénme hǎokàn de diànyǐng? Nǐ kànle jǐ cì?',
      q_vn: 'Gần đây bạn đã xem bộ phim nào hay? Bạn xem mấy lần rồi?',
      grammar: { label: 'Động từ + 过 (đã từng xem)', any: ['过'] },
      need: [
        { label: 'Nói số lần (一次 / 两次…)', any: ['次'] },
        { label: 'Nhận xét bộ phim', any: ['有意思', '好看', '不错', '没意思', '喜欢', '好'] },
        { label: 'Nói tên / loại phim', any: ['电影', '中国', '美国', '这个', '那个'] }
      ],
      bonus: { label: 'Rủ bạn cùng xem (我们一起…吧)', any: ['一起', '吧', '再'] },
      vocab: ['过', '有意思', '次'],
      minLen: 12,
      sample: '上个月我看过一个中国电影，觉得很不错，我看了两次。',
      sample_py: 'Shàng ge yuè wǒ kànguo yí ge Zhōngguó diànyǐng, juéde hěn búcuò, wǒ kànle liǎng cì.',
      sample_vn: 'Tháng trước tôi đã xem một bộ phim Trung Quốc, thấy rất hay, tôi xem hai lần.',
      tip: '过 đứng ngay sau động từ: 看过; số lần đứng sau động từ: 看了两次.'
    },
    {
      situation: 'Bạn mới quen hỏi bạn đã từng đi du lịch ở đâu.',
      q_zh: '你去过哪儿旅游？你还想再去吗？',
      q_py: 'Nǐ qùguo nǎr lǚyóu? Nǐ hái xiǎng zài qù ma?',
      q_vn: 'Bạn đã từng đi du lịch ở đâu? Bạn còn muốn đi lại nữa không?',
      grammar: { label: '我去过… / 没去过…', any: ['过'] },
      need: [
        { label: 'Nói nơi đã đi', any: ['北京', '中国', '美国', '上海', '那儿', '这儿', '河内', '旅游'] },
        { label: 'Dùng 虽然…但是… hoặc 但是', any: ['但是', '虽然'] },
        { label: 'Nói có muốn đi lại không (再去 / 一次)', any: ['再', '次', '想', '不想'] }
      ],
      bonus: { label: 'Nêu lý do (漂亮 / 好吃 / 贵 / 远)', any: ['漂亮', '好吃', '贵', '远', '有意思', '便宜'] },
      vocab: ['过', '虽然', '但是', '次'],
      minLen: 14,
      sample: '我去过北京旅游，那儿很漂亮。虽然东西有点儿贵，但是我还想再去一次。',
      sample_py: 'Wǒ qùguo Běijīng lǚyóu, nàr hěn piàoliang. Suīrán dōngxi yǒudiǎnr guì, dànshì wǒ hái xiǎng zài qù yí cì.',
      sample_vn: 'Tôi từng đi du lịch Bắc Kinh, ở đó rất đẹp. Tuy đồ hơi đắt nhưng tôi vẫn muốn đi lại một lần nữa.',
      tip: 'Phủ định của 过 là 没 + động từ + 过: 没去过. Đi lại lần nữa = 再去一次.'
    },
    {
      situation: 'Chiều thứ Sáu, bạn cùng phòng hỏi kế hoạch cuối tuần.',
      q_zh: '这个周末你想去哪儿玩儿？天气怎么样？',
      q_py: 'Zhège zhōumò nǐ xiǎng qù nǎr wánr? Tiānqì zěnmeyàng?',
      q_vn: 'Cuối tuần này bạn muốn đi đâu chơi? Thời tiết thế nào?',
      grammar: { label: '去 + nơi chốn + 玩儿', any: ['玩儿', '玩'] },
      need: [
        { label: 'Nói nơi muốn đi', any: ['公园', '商店', '饭店', '朋友家', '学校', '外面', '家'] },
        { label: 'Nói về thời tiết (晴 / 下雨 / 冷 / 热)', any: ['晴', '下雨', '天气', '冷', '热', '下雪'] },
        { label: 'Nói đi cùng ai hoặc làm gì', any: ['和', '跟', '一起', '自己', '踢', '跑步', '看', '吃'] }
      ],
      bonus: { label: 'Dùng 虽然…但是…', any: ['但是', '虽然'] },
      vocab: ['玩儿', '晴', '周末', '公园'],
      minLen: 12,
      sample: '这个周末我想和姐姐去公园玩儿。听说星期六是晴天，我们想在那儿踢足球。',
      sample_py: 'Zhège zhōumò wǒ xiǎng hé jiějie qù gōngyuán wánr. Tīngshuō xīngqīliù shì qíngtiān, wǒmen xiǎng zài nàr tī zúqiú.',
      sample_vn: 'Cuối tuần này tôi muốn cùng chị gái ra công viên chơi. Nghe nói thứ Bảy trời nắng, chúng tôi muốn đá bóng ở đó.',
      tip: 'Nơi chốn đặt giữa 去 và 玩儿: 去公园玩儿, không nói 去玩儿公园.'
    },
    {
      situation: 'Giáo viên hỏi cảm nhận của bạn về việc học tiếng Trung.',
      q_zh: '你学汉语多长时间了？你觉得汉语难吗？',
      q_py: 'Nǐ xué Hànyǔ duō cháng shíjiān le? Nǐ juéde Hànyǔ nán ma?',
      q_vn: 'Bạn học tiếng Trung bao lâu rồi? Bạn thấy tiếng Trung có khó không?',
      grammar: { label: '虽然…，但是…', any: ['虽然', '但是'] },
      need: [
        { label: 'Nói thời gian đã học', any: ['年', '月', '小时', '百', '星期'] },
        { label: 'Nhận xét: khó / thú vị', any: ['难', '有意思', '喜欢', '不难', '容易'] },
        { label: 'Nói việc bạn làm để học', any: ['写', '听', '说', '看', '读', '上课', '学习'] }
      ],
      bonus: { label: 'Dùng 百 (一百多个小时)', any: ['百'] },
      vocab: ['虽然', '但是', '有意思', '百', '难'],
      minLen: 14,
      sample: '我学了一百多个小时了。虽然说汉语有点儿难，但是我很喜欢上汉语课。',
      sample_py: 'Wǒ xuéle yìbǎi duō ge xiǎoshí le. Suīrán shuō Hànyǔ yǒudiǎnr nán, dànshì wǒ hěn xǐhuan shàng Hànyǔ kè.',
      sample_vn: 'Tôi học được hơn một trăm giờ rồi. Tuy nói tiếng Trung hơi khó nhưng tôi rất thích học giờ tiếng Trung.',
      tip: 'Tiếng Trung dùng đủ cặp 虽然…，但是…; 但是 đứng đầu vế sau.'
    },
    {
      situation: 'Bạn được bạn người Trung Quốc hỏi về món ăn Trung Quốc.',
      q_zh: '你吃过中国菜吗？哪个菜你吃过很多次？',
      q_py: 'Nǐ chīguo Zhōngguó cài ma? Nǎge cài nǐ chīguo hěn duō cì?',
      q_vn: 'Bạn từng ăn món Trung Quốc chưa? Món nào bạn đã ăn nhiều lần?',
      grammar: { label: 'Động từ + 过 + số lần', any: ['过'] },
      need: [
        { label: 'Nói tên món (羊肉 / 面条 / 鱼…)', any: ['羊肉', '面条', '鱼', '米饭', '菜', '鸡蛋', '饺子'] },
        { label: 'Dùng 次 để nói số lần', any: ['次'] },
        { label: 'Nhận xét / nói ai nấu', any: ['好吃', '不错', '喜欢', '做', '自己'] }
      ],
      bonus: { label: 'Dùng 虽然…但是…', any: ['虽然', '但是'] },
      vocab: ['过', '次', '自己'],
      minLen: 12,
      sample: '吃过，鱼我吃过很多次。虽然我自己不会做，但是我妻子做得很好。',
      sample_py: 'Chīguo, yú wǒ chīguo hěn duō cì. Suīrán wǒ zìjǐ bú huì zuò, dànshì wǒ qīzi zuò de hěn hǎo.',
      sample_vn: 'Ăn rồi, cá thì tôi ăn nhiều lần rồi. Tuy tự tôi không biết nấu nhưng vợ tôi nấu rất ngon.',
      tip: 'Số lần đặt sau động từ + 过: 吃过很多次、去过两次.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu mới, dùng từ bài 14 + ôn bài trước và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi chưa từng gặp em trai anh ấy.', zh:'我没见过他弟弟。', py:'Wǒ méi jiànguo tā dìdi.'},
  {vi:'Tuy nhà tôi cách công ty rất xa, nhưng ngày nào tôi cũng đi bộ đi làm.', zh:'虽然我家离公司很远，但是我每天都走路去上班。', py:'Suīrán wǒ jiā lí gōngsī hěn yuǎn, dànshì wǒ měi tiān dōu zǒulù qù shàngbān.'},
  {vi:'Năm ngoái tôi đi Trung Quốc hai lần.', zh:'我去年去了两次中国。', py:'Wǒ qùnián qùle liǎng cì Zhōngguó.'},
  {vi:'Món cá này là tự bạn nấu à? Bạn nấu ngon thật!', zh:'这个鱼是你自己做的吗？你做得真好！', py:'Zhège yú shì nǐ zìjǐ zuò de ma? Nǐ zuò de zhēn hǎo!'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Công viên này tuy không lớn nhưng buổi sáng có rất nhiều người đến chạy bộ.', zh:'这个公园虽然不大，但是早上来跑步的人很多。', py:'Zhège gōngyuán suīrán bú dà, dànshì zǎoshang lái pǎobù de rén hěn duō.'},
  {vi:'Tôi đã gọi cho anh ấy ba lần, lần nào anh ấy cũng không nghe máy.', zh:'我给他打过三次电话，他都没接。', py:'Wǒ gěi tā dǎguo sān cì diànhuà, tā dōu méi jiē.'},
  {vi:'Ông ấy hơn một trăm tuổi rồi, nhưng sức khoẻ vẫn rất tốt.', zh:'他一百多岁了，但是身体还很好。', py:'Tā yìbǎi duō suì le, dànshì shēntǐ hái hěn hǎo.'},
];
