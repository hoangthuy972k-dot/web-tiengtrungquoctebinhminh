// HSK 2 (3.0 Mới) · Bài 5 · 第一次去中国朋友家
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 5, trang 037-045.

var vocabData = [
  {
    "n": 1,
    "zh": "快",
    "py": "kuài",
    "pos": "Phó từ / Tính từ",
    "vn": "mau, nhanh",
    "hv": "khoái",
    "em": "⚡",
    "img": "/images/hsk2v3-bai-5/kuai.jpg",
    "lesson": 1,
    "ex_zh": "家月，快下来吧。",
    "ex_py": "Jiāyuè, kuài xiàlái ba.",
    "ex_vn": "Gia Nguyệt, mau xuống nhé.",
    "exList": [
      {
        "zh": "家月，快下来吧。",
        "py": "Jiāyuè, kuài xiàlái ba.",
        "vn": "Gia Nguyệt, mau xuống nhé."
      },
      {
        "zh": "你快点儿吧。",
        "py": "Nǐ kuài diǎnr ba.",
        "vn": "Bạn nhanh lên một chút nhé."
      }
    ],
    "hanzi": [
      {
        "c": "快",
        "p": "kuài",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "忄 → 夬",
        "rad": "忄 (tâm đứng – trái tim)",
        "mean": "nhanh; vui",
        "tip": "快 + động từ = mau làm gì: 快来、快走、快吃。",
        "cf": "慢 (màn – chậm)",
        "w": "快点儿 / 很快 / 快来"
      }
    ],
    "colloFull": [
      {
        "zh": "很快",
        "py": "hěn kuài",
        "vn": "rất nhanh"
      },
      {
        "zh": "快一点儿",
        "py": "kuài yìdiǎnr",
        "vn": "nhanh lên chút"
      },
      {
        "zh": "快来",
        "py": "kuài lái",
        "vn": "mau đến đây"
      },
      {
        "zh": "跑得很快",
        "py": "pǎo de hěn kuài",
        "vn": "chạy rất nhanh"
      }
    ],
    "patterns": [
      {
        "s": "快 + động từ",
        "m": "Mau lên, giục ai đó: 快来！"
      },
      {
        "s": "快 ↔ 慢",
        "m": "Nhanh ↔ chậm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mau lên, tàu sắp chạy rồi.",
        "answer": "快一点儿，火车开了。",
        "answerPy": "Kuài yìdiǎnr, huǒchē kāi le.",
        "note": "快 dùng để giục ai đó.",
        "pair": "快 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Em trai tôi chạy rất nhanh.",
        "answer": "我弟弟跑得很快。",
        "answerPy": "Wǒ dìdi pǎo de hěn kuài.",
        "note": "快 ↔ 慢 — nhanh và chậm.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 2,
    "zh": "下来",
    "py": "xiàlái",
    "pos": "Động từ",
    "vn": "xuống, xuống đây",
    "hv": "hạ lai",
    "em": "⬇️",
    "img": "/images/hsk2v3-bai-5/xialai.jpg",
    "lesson": 1,
    "ex_zh": "家月，快下来吧。",
    "ex_py": "Jiāyuè, kuài xiàlái ba.",
    "ex_vn": "Gia Nguyệt, mau xuống đây nhé.",
    "exList": [
      {
        "zh": "家月，快下来吧。",
        "py": "Jiāyuè, kuài xiàlái ba.",
        "vn": "Gia Nguyệt, mau xuống đây nhé."
      },
      {
        "zh": "你下来，我在楼下等你。",
        "py": "Nǐ xiàlái, wǒ zài lóuxià děng nǐ.",
        "vn": "Bạn xuống đi, tôi đợi bạn ở dưới nhà."
      }
    ],
    "hanzi": [
      {
        "c": "来",
        "p": "lái",
        "type": "象形字 · Chữ tượng hình",
        "st": 7,
        "ord": "一 → 丷 → 十 → 八",
        "rad": "木 (mộc)",
        "mean": "đến, lại",
        "tip": "来 = hướng về phía người nói; 去 = rời xa người nói.",
        "cf": "去 (qù)",
        "w": "下来 / 上来 / 进来 / 过来"
      }
    ],
    "colloFull": [
      {
        "zh": "走下来",
        "py": "zǒu xiàlái",
        "vn": "đi xuống đây"
      },
      {
        "zh": "拿下来",
        "py": "ná xiàlái",
        "vn": "lấy xuống"
      },
      {
        "zh": "下来吧",
        "py": "xiàlái ba",
        "vn": "xuống đây đi"
      },
      {
        "zh": "快下来",
        "py": "kuài xiàlái",
        "vn": "mau xuống đây"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 下来",
        "m": "Từ trên xuống, về phía người nói: 走下来"
      },
      {
        "s": "下来 (xuống, gần mình) ↔ 下去 (xuống, xa mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn xuống đây một chút.",
        "answer": "你下来一下。",
        "answerPy": "Nǐ xiàlai yíxià.",
        "note": "下来 — xuống, về phía người nói.",
        "pair": "V + 下来"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn lấy quyển sách trên bàn xuống cho tôi.",
        "answer": "你把桌子上的书拿下来。",
        "answerPy": "Nǐ bǎ zhuōzi shang de shū ná xiàlai.",
        "note": "拿下来 — lấy xuống.",
        "pair": "V + 下来"
      }
    ]
  },
  {
    "n": 3,
    "zh": "上来",
    "py": "shànglái",
    "pos": "Động từ",
    "vn": "lên, lên đây",
    "hv": "thượng lai",
    "em": "⬆️",
    "img": "/images/hsk2v3-bai-5/shanglai.jpg",
    "lesson": 1,
    "ex_zh": "还有时间，你上来吧。",
    "ex_py": "Hái yǒu shíjiān, nǐ shànglái ba.",
    "ex_vn": "Vẫn còn thời gian, bạn lên đây đi.",
    "exList": [
      {
        "zh": "还有时间，你上来吧。",
        "py": "Hái yǒu shíjiān, nǐ shànglái ba.",
        "vn": "Vẫn còn thời gian, bạn lên đây đi."
      },
      {
        "zh": "他从楼下走上来了。",
        "py": "Tā cóng lóuxià zǒu shànglái le.",
        "vn": "Anh ấy đi bộ từ dưới nhà lên."
      }
    ],
    "hanzi": [
      {
        "c": "上",
        "p": "shàng",
        "type": "指事字 · Chữ chỉ sự",
        "st": 3,
        "ord": "丨 → 一 → 一",
        "rad": "一 (nhất)",
        "mean": "trên, lên",
        "tip": "上来 = lên chỗ người nói; 上去 = lên chỗ khác.",
        "cf": "下 (xià)",
        "w": "上来 / 上去 / 上班"
      }
    ],
    "colloFull": [
      {
        "zh": "走上来",
        "py": "zǒu shànglái",
        "vn": "đi lên đây"
      },
      {
        "zh": "拿上来",
        "py": "ná shànglái",
        "vn": "mang lên đây"
      },
      {
        "zh": "上来吧",
        "py": "shànglái ba",
        "vn": "lên đây đi"
      },
      {
        "zh": "快上来",
        "py": "kuài shànglái",
        "vn": "mau lên đây"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 上来",
        "m": "Từ dưới lên, về phía người nói: 走上来"
      },
      {
        "s": "上来 (lên, gần mình) ↔ 上去 (lên, xa mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ông ơi, ông lên đây đi ạ.",
        "answer": "爷爷，你上来吧。",
        "answerPy": "Yéye, nǐ shànglai ba.",
        "note": "上来 — lên, về phía người nói.",
        "pair": "V + 上来"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn mang trà sữa lên đây nhé.",
        "answer": "你把奶茶拿上来吧。",
        "answerPy": "Nǐ bǎ nǎichá ná shànglai ba.",
        "note": "拿上来 — mang lên đây.",
        "pair": "V + 上来"
      }
    ]
  },
  {
    "n": 4,
    "zh": "上去",
    "py": "shàngqù",
    "pos": "Động từ",
    "vn": "lên, đi lên",
    "hv": "thượng khứ",
    "em": "🔼",
    "img": "/images/hsk2v3-bai-5/shangqu.jpg",
    "lesson": 1,
    "ex_zh": "我不上去了，就在下面等你。",
    "ex_py": "Wǒ bú shàngqù le, jiù zài xiàmiàn děng nǐ.",
    "ex_vn": "Mình không lên nữa, đợi bạn ở dưới này thôi.",
    "exList": [
      {
        "zh": "我不上去了，就在下面等你。",
        "py": "Wǒ bú shàngqù le, jiù zài xiàmiàn děng nǐ.",
        "vn": "Mình không lên nữa, đợi bạn ở dưới này thôi."
      },
      {
        "zh": "电梯来了，我们上去吧。",
        "py": "Diàntī lái le, wǒmen shàngqù ba.",
        "vn": "Thang máy đến rồi, chúng ta lên thôi."
      }
    ],
    "hanzi": [
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
        "w": "上去 / 下去 / 出去"
      }
    ],
    "colloFull": [
      {
        "zh": "走上去",
        "py": "zǒu shàngqù",
        "vn": "đi lên đó"
      },
      {
        "zh": "拿上去",
        "py": "ná shàngqù",
        "vn": "mang lên đó"
      },
      {
        "zh": "上去看看",
        "py": "shàngqù kànkàn",
        "vn": "lên đó xem"
      },
      {
        "zh": "上去吧",
        "py": "shàngqù ba",
        "vn": "lên đó đi"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 上去",
        "m": "Từ dưới lên, ra xa người nói: 走上去"
      },
      {
        "s": "上来 · 上去 · 下来 · 下去 — bốn hướng cơ bản"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta lên đó xem một chút.",
        "answer": "我们上去看看吧。",
        "answerPy": "Wǒmen shàngqu kànkan ba.",
        "note": "上去 — lên, ra xa người nói.",
        "pair": "V + 上去"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn mang món quà này lên đó cho bà nhé.",
        "answer": "你把这个礼物拿上去给奶奶吧。",
        "answerPy": "Nǐ bǎ zhège lǐwù ná shàngqu gěi nǎinai ba.",
        "note": "上来 · 上去 · 下来 · 下去 — bốn hướng cơ bản.",
        "pair": "V + 上去"
      }
    ]
  },
  {
    "n": 5,
    "zh": "下面",
    "py": "xiàmiàn",
    "pos": "Danh từ",
    "vn": "phía dưới, bên dưới",
    "hv": "hạ diện",
    "em": "👇",
    "img": "/images/hsk2v3-bai-5/xiamian.jpg",
    "lesson": 1,
    "ex_zh": "就在下面等你。",
    "ex_py": "Jiù zài xiàmiàn děng nǐ.",
    "ex_vn": "Đợi bạn ở dưới này thôi.",
    "exList": [
      {
        "zh": "就在下面等你。",
        "py": "Jiù zài xiàmiàn děng nǐ.",
        "vn": "Đợi bạn ở dưới này thôi."
      },
      {
        "zh": "书在桌子下面。",
        "py": "Shū zài zhuōzi xiàmiàn.",
        "vn": "Sách ở dưới bàn."
      }
    ],
    "hanzi": [
      {
        "c": "面",
        "p": "miàn",
        "type": "象形字 · Chữ tượng hình",
        "st": 9,
        "ord": "一 → 丿 → 囗 → 二",
        "rad": "面 (diện)",
        "mean": "mặt; phía",
        "tip": "面 là hình thái tố chỉ phía: 下面、上面、里面、外面。",
        "cf": "",
        "w": "下面 / 上面 / 里面"
      }
    ],
    "colloFull": [
      {
        "zh": "桌子下面",
        "py": "zhuōzi xiàmiàn",
        "vn": "dưới bàn"
      },
      {
        "zh": "在下面",
        "py": "zài xiàmiàn",
        "vn": "ở phía dưới"
      },
      {
        "zh": "下面有",
        "py": "xiàmiàn yǒu",
        "vn": "phía dưới có"
      },
      {
        "zh": "楼下面",
        "py": "lóu xiàmiàn",
        "vn": "dưới nhà"
      }
    ],
    "patterns": [
      {
        "s": "danh từ + 下面",
        "m": "Phía dưới cái gì: 桌子下面"
      },
      {
        "s": "下面 ↔ 上面",
        "m": "Dưới ↔ trên — đều đứng SAU danh từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cặp sách của tôi ở dưới bàn.",
        "answer": "我的书包在桌子下面。",
        "answerPy": "Wǒ de shūbāo zài zhuōzi xiàmiàn.",
        "note": "下面 đứng SAU danh từ.",
        "pair": "在……下面"
      },
      {
        "promptLang": "vi",
        "prompt": "Dưới nhà có một quán trà sữa.",
        "answer": "楼下面有一个奶茶店。",
        "answerPy": "Lóu xiàmiàn yǒu yí ge nǎichá diàn.",
        "note": "下面 ↔ 上面 — dưới và trên.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  },
  {
    "n": 6,
    "zh": "等",
    "py": "děng",
    "pos": "Động từ",
    "vn": "đợi, chờ",
    "hv": "đẳng",
    "em": "⏳",
    "img": "/images/hsk2v3-bai-5/deng.jpg",
    "lesson": 1,
    "ex_zh": "我们都在下面等你呢。",
    "ex_py": "Wǒmen dōu zài xiàmiàn děng nǐ ne.",
    "ex_vn": "Chúng tôi đều đang đợi bạn ở dưới này.",
    "exList": [
      {
        "zh": "我们都在下面等你呢。",
        "py": "Wǒmen dōu zài xiàmiàn děng nǐ ne.",
        "vn": "Chúng tôi đều đang đợi bạn ở dưới này."
      },
      {
        "zh": "你等我一会儿。",
        "py": "Nǐ děng wǒ yíhuìr.",
        "vn": "Bạn đợi tôi một lát."
      }
    ],
    "hanzi": [
      {
        "c": "等",
        "p": "děng",
        "type": "形声字 · Chữ hình thanh",
        "st": 12,
        "ord": "⺮ → 寺",
        "rad": "⺮ (trúc – tre)",
        "mean": "đợi; hạng, v.v.",
        "tip": "Bộ 竹 vì xưa dùng thẻ tre xếp hạng, xếp thứ tự.",
        "cf": "",
        "w": "等你 / 等一会儿 / 等等"
      }
    ],
    "colloFull": [
      {
        "zh": "等一下",
        "py": "děng yíxià",
        "vn": "đợi một chút"
      },
      {
        "zh": "等一会儿",
        "py": "děng yíhuìr",
        "vn": "đợi một lát"
      },
      {
        "zh": "在车站等",
        "py": "zài chēzhàn děng",
        "vn": "đợi ở bến xe"
      },
      {
        "zh": "等你",
        "py": "děng nǐ",
        "vn": "đợi bạn"
      }
    ],
    "patterns": [
      {
        "s": "等 + 一下 / 一会儿",
        "m": "Đợi một chút, đợi một lát"
      },
      {
        "s": "等 + người",
        "m": "Đợi ai: 我等你"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đợi một chút, tôi đến ngay.",
        "answer": "你等一下，我就来。",
        "answerPy": "Nǐ děng yíxià, wǒ jiù lái.",
        "note": "就 nhấn ý ngay lập tức.",
        "pair": "就 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi đợi bạn ở trước khách sạn nhé.",
        "answer": "我在酒店前面等你吧。",
        "answerPy": "Wǒ zài jiǔdiàn qiánmiàn děng nǐ ba.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……等"
      }
    ]
  },
  {
    "n": 7,
    "zh": "一会儿",
    "py": "yíhuìr",
    "pos": "Số lượng từ",
    "vn": "một lát, một chút",
    "hv": "nhất hội nhi",
    "em": "⏱️",
    "lesson": 1,
    "ex_zh": "那我一会儿就下去。",
    "ex_py": "Nà wǒ yíhuìr jiù xiàqù.",
    "ex_vn": "Vậy thì một lát nữa mình sẽ xuống.",
    "exList": [
      {
        "zh": "那我一会儿就下去。",
        "py": "Nà wǒ yíhuìr jiù xiàqù.",
        "vn": "Vậy thì một lát nữa mình sẽ xuống."
      },
      {
        "zh": "我想休息一会儿。",
        "py": "Wǒ xiǎng xiūxi yíhuìr.",
        "vn": "Tôi muốn nghỉ một lát."
      }
    ],
    "hanzi": [
      {
        "c": "会",
        "p": "huì",
        "type": "会意字 · Chữ hội ý",
        "st": 6,
        "ord": "人 → 二 → 厶",
        "rad": "人 (nhân – người)",
        "mean": "hội; biết; lát",
        "tip": "Trong 一会儿 đọc là huìr, nghĩa \"khoảng thời gian ngắn\".",
        "cf": "",
        "w": "一会儿 / 会议 / 会说"
      }
    ],
    "colloFull": [
      {
        "zh": "等一会儿",
        "py": "děng yíhuìr",
        "vn": "đợi một lát"
      },
      {
        "zh": "一会儿见",
        "py": "yíhuìr jiàn",
        "vn": "lát nữa gặp"
      },
      {
        "zh": "休息一会儿",
        "py": "xiūxi yíhuìr",
        "vn": "nghỉ một lát"
      },
      {
        "zh": "看一会儿",
        "py": "kàn yíhuìr",
        "vn": "xem một lát"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 一会儿",
        "m": "Làm gì một lát — thời gian ngắn"
      },
      {
        "s": "一会儿 đứng SAU động từ, không đứng trước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn đợi một lát, thầy đang nghe điện thoại.",
        "answer": "你等一会儿，老师正在接电话。",
        "answerPy": "Nǐ děng yíhuìr, lǎoshī zhèngzài jiē diànhuà.",
        "note": "一会儿 đứng SAU động từ.",
        "pair": "正在 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi mệt quá, muốn nghỉ một lát.",
        "answer": "我太累了，想休息一会儿。",
        "answerPy": "Wǒ tài lèi le, xiǎng xiūxi yíhuìr.",
        "note": "休息一会儿 — nghỉ một lát.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 8,
    "zh": "下去",
    "py": "xiàqù",
    "pos": "Động từ",
    "vn": "xuống, đi xuống",
    "hv": "hạ khứ",
    "em": "🔽",
    "img": "/images/hsk2v3-bai-5/xiaqu.jpg",
    "lesson": 1,
    "ex_zh": "那我一会儿就下去。",
    "ex_py": "Nà wǒ yíhuìr jiù xiàqù.",
    "ex_vn": "Vậy một lát nữa mình xuống.",
    "exList": [
      {
        "zh": "那我一会儿就下去。",
        "py": "Nà wǒ yíhuìr jiù xiàqù.",
        "vn": "Vậy một lát nữa mình xuống."
      },
      {
        "zh": "家月到下边了，你下去接她吧。",
        "py": "Jiāyuè dào xiàbian le, nǐ xiàqù jiē tā ba.",
        "vn": "Gia Nguyệt xuống dưới rồi, bạn xuống đón bạn ấy đi."
      }
    ],
    "hanzi": [
      {
        "c": "下",
        "p": "xià",
        "type": "指事字 · Chữ chỉ sự",
        "st": 3,
        "ord": "一 → 丨 → 丶",
        "rad": "一 (nhất)",
        "mean": "dưới, xuống",
        "tip": "下去 = xuống chỗ khác; 下来 = xuống chỗ người nói.",
        "cf": "上 (shàng)",
        "w": "下去 / 下来 / 下面"
      }
    ],
    "colloFull": [
      {
        "zh": "走下去",
        "py": "zǒu xiàqù",
        "vn": "đi xuống đó"
      },
      {
        "zh": "拿下去",
        "py": "ná xiàqù",
        "vn": "mang xuống đó"
      },
      {
        "zh": "下去看看",
        "py": "xiàqù kànkàn",
        "vn": "xuống đó xem"
      },
      {
        "zh": "下去吧",
        "py": "xiàqù ba",
        "vn": "xuống đó đi"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 下去",
        "m": "Từ trên xuống, ra xa người nói: 走下去"
      },
      {
        "s": "下去 (xuống, xa mình) ↔ 下来 (xuống, gần mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng ta xuống đó xem một chút.",
        "answer": "我们下去看看吧。",
        "answerPy": "Wǒmen xiàqu kànkan ba.",
        "note": "下去 — xuống, ra xa người nói.",
        "pair": "V + 下去"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn mang cốc trà sữa này xuống đó nhé.",
        "answer": "你把这杯奶茶拿下去吧。",
        "answerPy": "Nǐ bǎ zhè bēi nǎichá ná xiàqu ba.",
        "note": "下去 (xa mình) ↔ 下来 (gần mình).",
        "pair": "V + 下去"
      }
    ]
  },
  {
    "n": 9,
    "zh": "进来",
    "py": "jìnlái",
    "pos": "Động từ",
    "vn": "vào, vào đây",
    "hv": "tiến lai",
    "em": "🚪",
    "img": "/images/hsk2v3-bai-5/jinlai.jpg",
    "lesson": 2,
    "ex_zh": "家月、安妮，快进来！",
    "ex_py": "Jiāyuè, Ānnī, kuài jìnlái!",
    "ex_vn": "Gia Nguyệt, Annie, mau vào đi!",
    "exList": [
      {
        "zh": "家月、安妮，快进来！",
        "py": "Jiāyuè, Ānnī, kuài jìnlái!",
        "vn": "Gia Nguyệt, Annie, mau vào đi!"
      },
      {
        "zh": "上课了，你们快进教室来吧。",
        "py": "Shàngkè le, nǐmen kuài jìn jiàoshì lái ba.",
        "vn": "Vào học rồi, các em mau vào lớp đi."
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
        "mean": "vào",
        "tip": "Khi có tân ngữ chỉ nơi chốn: 进教室来 (không nói 进来教室).",
        "cf": "",
        "w": "进来 / 进去 / 进教室"
      }
    ],
    "colloFull": [
      {
        "zh": "进来吧",
        "py": "jìnlái ba",
        "vn": "vào đi"
      },
      {
        "zh": "走进来",
        "py": "zǒu jìnlái",
        "vn": "đi vào đây"
      },
      {
        "zh": "请进来",
        "py": "qǐng jìnlái",
        "vn": "mời vào"
      },
      {
        "zh": "快进来",
        "py": "kuài jìnlái",
        "vn": "mau vào đi"
      }
    ],
    "patterns": [
      {
        "s": "请 + 进来",
        "m": "Mời vào — câu lịch sự khi đón khách"
      },
      {
        "s": "进来 (vào, gần mình) ↔ 进去 (vào, xa mình)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mời vào ạ, mời ngồi.",
        "answer": "请进来，请坐。",
        "answerPy": "Qǐng jìnlai, qǐng zuò.",
        "note": "Câu lịch sự khi đón khách.",
        "pair": "请 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bên ngoài lạnh quá, bạn mau vào đi.",
        "answer": "外面太冷了，你快进来吧。",
        "answerPy": "Wàimiàn tài lěng le, nǐ kuài jìnlai ba.",
        "note": "进来 (gần mình) ↔ 进去 (xa mình).",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 10,
    "zh": "爷爷",
    "py": "yéye",
    "pos": "Danh từ",
    "vn": "ông nội",
    "hv": "gia gia",
    "em": "👴",
    "img": "/images/hsk2v3-bai-5/yeye.jpg",
    "lesson": 2,
    "ex_zh": "这是孩子们的爷爷、奶奶。",
    "ex_py": "Zhè shì háizimen de yéye, nǎinai.",
    "ex_vn": "Đây là ông nội và bà nội của các con chị.",
    "exList": [
      {
        "zh": "这是孩子们的爷爷、奶奶。",
        "py": "Zhè shì háizimen de yéye, nǎinai.",
        "vn": "Đây là ông nội và bà nội của các con chị."
      },
      {
        "zh": "奶茶是爷爷买的。",
        "py": "Nǎichá shì yéye mǎi de.",
        "vn": "Trà sữa là ông nội mua."
      }
    ],
    "hanzi": [
      {
        "c": "爷",
        "p": "yé",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "父 → 卩",
        "rad": "父 (phụ – cha)",
        "mean": "ông, cụ",
        "tip": "Bộ 父 cho biết chữ chỉ người bề trên trong nhà.",
        "cf": "",
        "w": "爷爷 / 老爷爷"
      }
    ],
    "colloFull": [
      {
        "zh": "我爷爷",
        "py": "wǒ yéye",
        "vn": "ông nội tôi"
      },
      {
        "zh": "爷爷奶奶",
        "py": "yéye nǎinai",
        "vn": "ông bà nội"
      },
      {
        "zh": "给爷爷的礼物",
        "py": "gěi yéye de lǐwù",
        "vn": "quà cho ông"
      },
      {
        "zh": "爷爷来了",
        "py": "yéye lái le",
        "vn": "ông đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "ai + 爷爷",
        "m": "Ông của ai — người thân hay bỏ 的"
      },
      {
        "s": "爷爷 (ông nội) và 奶奶 (bà nội) — hay đi thành cặp"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sang năm ông bà tôi đến Bắc Kinh.",
        "answer": "明年我爷爷奶奶来北京。",
        "answerPy": "Míngnián wǒ yéye nǎinai lái Běijīng.",
        "note": "爷爷奶奶 — ông bà nội, hay đi thành cặp.",
        "pair": "……来……"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi chuẩn bị một món quà cho ông.",
        "answer": "我给爷爷准备了一个礼物。",
        "answerPy": "Wǒ gěi yéye zhǔnbèile yí ge lǐwù.",
        "note": "给 + người + động từ.",
        "pair": "给……准备"
      }
    ]
  },
  {
    "n": 11,
    "zh": "奶奶",
    "py": "nǎinai",
    "pos": "Danh từ",
    "vn": "bà nội",
    "hv": "nãi nãi",
    "em": "👵",
    "img": "/images/hsk2v3-bai-5/nainai.jpg",
    "lesson": 2,
    "ex_zh": "这是孩子们的奶奶。",
    "ex_py": "Zhè shì háizimen de nǎinai.",
    "ex_vn": "Đây là bà nội của các cháu.",
    "exList": [
      {
        "zh": "这是孩子们的奶奶。",
        "py": "Zhè shì háizimen de nǎinai.",
        "vn": "Đây là bà nội của các cháu."
      },
      {
        "zh": "奶奶做的菜很好吃。",
        "py": "Nǎinai zuò de cài hěn hǎochī.",
        "vn": "Món bà nội nấu rất ngon."
      }
    ],
    "hanzi": [
      {
        "c": "奶",
        "p": "nǎi",
        "type": "形声字 · Chữ hình thanh",
        "st": 5,
        "ord": "女 → 乃",
        "rad": "女 (nữ – phụ nữ)",
        "mean": "bà; sữa",
        "tip": "奶 còn nghĩa là sữa: 牛奶、奶茶。",
        "cf": "",
        "w": "奶奶 / 牛奶 / 奶茶"
      }
    ],
    "colloFull": [
      {
        "zh": "我奶奶",
        "py": "wǒ nǎinai",
        "vn": "bà nội tôi"
      },
      {
        "zh": "爷爷奶奶",
        "py": "yéye nǎinai",
        "vn": "ông bà nội"
      },
      {
        "zh": "奶奶做的菜",
        "py": "nǎinai zuò de cài",
        "vn": "món bà nấu"
      },
      {
        "zh": "给奶奶打电话",
        "py": "gěi nǎinai dǎ diànhuà",
        "vn": "gọi điện cho bà"
      }
    ],
    "patterns": [
      {
        "s": "ai + 奶奶",
        "m": "Bà của ai — người thân hay bỏ 的"
      },
      {
        "s": "奶奶 + 做的 + N",
        "m": "Món bà làm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Món bà nấu cực kỳ ngon.",
        "answer": "奶奶做的菜非常好吃。",
        "answerPy": "Nǎinai zuò de cài fēicháng hǎochī.",
        "note": "奶奶做的菜 — món bà nấu.",
        "pair": "非常 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Tối nay tôi định gọi điện cho bà.",
        "answer": "今天晚上我要给奶奶打电话。",
        "answerPy": "Jīntiān wǎnshang wǒ yào gěi nǎinai dǎ diànhuà.",
        "note": "给 đứng trước động từ.",
        "pair": "给……打电话"
      }
    ]
  },
  {
    "n": 12,
    "zh": "礼物",
    "py": "lǐwù",
    "pos": "Danh từ",
    "vn": "quà, quà tặng",
    "hv": "lễ vật",
    "em": "🎁",
    "img": "/images/hsk2v3-bai-5/liwu.jpg",
    "lesson": 2,
    "ex_zh": "这是送你们的礼物。",
    "ex_py": "Zhè shì sòng nǐmen de lǐwù.",
    "ex_vn": "Đây là chút quà chúng cháu biếu hai bác ạ.",
    "exList": [
      {
        "zh": "这是送你们的礼物。",
        "py": "Zhè shì sòng nǐmen de lǐwù.",
        "vn": "Đây là chút quà chúng cháu biếu hai bác ạ."
      },
      {
        "zh": "这是给孩子们准备的礼物。",
        "py": "Zhè shì gěi háizimen zhǔnbèi de lǐwù.",
        "vn": "Đây là quà chuẩn bị cho các em nhỏ."
      }
    ],
    "hanzi": [
      {
        "c": "礼",
        "p": "lǐ",
        "type": "形声字 · Chữ hình thanh",
        "st": 5,
        "ord": "礻 → 乚",
        "rad": "礻 (kỳ – thờ cúng)",
        "mean": "lễ, lễ vật",
        "tip": "Bộ 礻 liên quan lễ nghi, cúng tế.",
        "cf": "",
        "w": "礼物 / 礼貌 / 送礼"
      }
    ],
    "colloFull": [
      {
        "zh": "送礼物",
        "py": "sòng lǐwù",
        "vn": "tặng quà"
      },
      {
        "zh": "买礼物",
        "py": "mǎi lǐwù",
        "vn": "mua quà"
      },
      {
        "zh": "一个礼物",
        "py": "yí gè lǐwù",
        "vn": "một món quà"
      },
      {
        "zh": "生日礼物",
        "py": "shēngrì lǐwù",
        "vn": "quà sinh nhật"
      }
    ],
    "patterns": [
      {
        "s": "送 + 给 + người + 礼物",
        "m": "Tặng quà cho ai"
      },
      {
        "s": "礼 + 物",
        "m": "Đồ vật (物) dùng làm lễ (礼)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua một món quà sinh nhật cho em gái.",
        "answer": "我想给妹妹买一个生日礼物。",
        "answerPy": "Wǒ xiǎng gěi mèimei mǎi yí ge shēngrì lǐwù.",
        "note": "给 + người + động từ.",
        "pair": "给……买"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì hôm nay là sinh nhật bà nên tôi tặng bà một món quà.",
        "answer": "因为今天是奶奶的生日，所以我送给她一个礼物。",
        "answerPy": "Yīnwèi jīntiān shì nǎinai de shēngrì, suǒyǐ wǒ sònggěi tā yí ge lǐwù.",
        "note": "送给 + người — tặng cho ai.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 13,
    "zh": "准备",
    "py": "zhǔnbèi",
    "pos": "Động từ",
    "vn": "chuẩn bị",
    "hv": "chuẩn bị",
    "em": "📦",
    "img": "/images/hsk2v3-bai-5/zhunbei.jpg",
    "lesson": 2,
    "ex_zh": "这是给孩子们准备的礼物。",
    "ex_py": "Zhè shì gěi háizimen zhǔnbèi de lǐwù.",
    "ex_vn": "Đây là quà em chuẩn bị cho các cháu.",
    "exList": [
      {
        "zh": "这是给孩子们准备的礼物。",
        "py": "Zhè shì gěi háizimen zhǔnbèi de lǐwù.",
        "vn": "Đây là quà em chuẩn bị cho các cháu."
      },
      {
        "zh": "刘爷爷还准备了奶茶。",
        "py": "Liú yéye hái zhǔnbèile nǎichá.",
        "vn": "Bác Lưu còn chuẩn bị cả trà sữa nữa."
      }
    ],
    "hanzi": [
      {
        "c": "准",
        "p": "zhǔn",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "冫 → 隹",
        "rad": "冫 (băng)",
        "mean": "chuẩn, chính xác",
        "tip": "准备 = sắp sẵn trước; 准时 = đúng giờ.",
        "cf": "",
        "w": "准备 / 准时"
      }
    ],
    "colloFull": [
      {
        "zh": "准备礼物",
        "py": "zhǔnbèi lǐwù",
        "vn": "chuẩn bị quà"
      },
      {
        "zh": "准备好了",
        "py": "zhǔnbèi hǎo le",
        "vn": "chuẩn bị xong rồi"
      },
      {
        "zh": "准备考试",
        "py": "zhǔnbèi kǎoshì",
        "vn": "ôn thi"
      },
      {
        "zh": "准备一下",
        "py": "zhǔnbèi yíxià",
        "vn": "chuẩn bị một chút"
      }
    ],
    "patterns": [
      {
        "s": "准备 + danh từ",
        "m": "Chuẩn bị cái gì: 准备礼物"
      },
      {
        "s": "准备 + động từ",
        "m": "Định làm gì: 我准备去北京"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi đã chuẩn bị xong quà rồi.",
        "answer": "我已经准备好礼物了。",
        "answerPy": "Wǒ yǐjīng zhǔnbèi hǎo lǐwù le.",
        "note": "准备好 — chuẩn bị xong.",
        "pair": "已经……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Sang năm tôi định đi Bắc Kinh học đại học.",
        "answer": "明年我准备去北京上大学。",
        "answerPy": "Míngnián wǒ zhǔnbèi qù Běijīng shàng dàxué.",
        "note": "准备 + động từ — định làm gì.",
        "pair": "准备 + V"
      }
    ]
  },
  {
    "n": 14,
    "zh": "奶茶",
    "py": "nǎichá",
    "pos": "Danh từ",
    "vn": "trà sữa",
    "hv": "nãi trà",
    "em": "🧋",
    "img": "/images/hsk2v3-bai-5/naicha.jpg",
    "lesson": 3,
    "ex_zh": "奶茶也很好喝。",
    "ex_py": "Nǎichá yě hěn hǎohē.",
    "ex_vn": "Trà sữa cũng rất ngon.",
    "exList": [
      {
        "zh": "奶茶也很好喝。",
        "py": "Nǎichá yě hěn hǎohē.",
        "vn": "Trà sữa cũng rất ngon."
      },
      {
        "zh": "我还没喝过这么好喝的奶茶。",
        "py": "Wǒ hái méi hēguo zhème hǎohē de nǎichá.",
        "vn": "Em chưa từng uống trà sữa ngon như thế này."
      }
    ],
    "hanzi": [
      {
        "c": "茶",
        "p": "chá",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "艹 → 人 → 木",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "trà",
        "tip": "Bộ 艹 vì trà là lá cây.",
        "cf": "",
        "w": "奶茶 / 绿茶 / 喝茶"
      }
    ],
    "colloFull": [
      {
        "zh": "喝奶茶",
        "py": "hē nǎichá",
        "vn": "uống trà sữa"
      },
      {
        "zh": "一杯奶茶",
        "py": "yì bēi nǎichá",
        "vn": "một cốc trà sữa"
      },
      {
        "zh": "买奶茶",
        "py": "mǎi nǎichá",
        "vn": "mua trà sữa"
      },
      {
        "zh": "好喝的奶茶",
        "py": "hǎo hē de nǎichá",
        "vn": "trà sữa ngon"
      }
    ],
    "patterns": [
      {
        "s": "một + 杯 + 奶茶",
        "m": "Lượng từ 杯 cho đồ uống"
      },
      {
        "s": "奶 + 茶",
        "m": "Trà (茶) pha sữa (奶)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống một cốc trà sữa.",
        "answer": "我想喝一杯奶茶。",
        "answerPy": "Wǒ xiǎng hē yì bēi nǎichá.",
        "note": "Lượng từ 杯 cho đồ uống.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Trà sữa của quán này rất ngon.",
        "answer": "这家店的奶茶很好喝。",
        "answerPy": "Zhè jiā diàn de nǎichá hěn hǎohē.",
        "note": "奶 + 茶 — trà pha sữa.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 15,
    "zh": "跟",
    "py": "gēn",
    "pos": "Giới từ / Liên từ",
    "vn": "với, cùng, và",
    "hv": "cân",
    "em": "👥",
    "lesson": 3,
    "ex_zh": "吃完饭你们可以跟我去看看。",
    "ex_py": "Chīwán fàn nǐmen kěyǐ gēn wǒ qù kànkan.",
    "ex_vn": "Ăn xong các em có thể cùng chị đi xem.",
    "exList": [
      {
        "zh": "吃完饭你们可以跟我去看看。",
        "py": "Chīwán fàn nǐmen kěyǐ gēn wǒ qù kànkan.",
        "vn": "Ăn xong các em có thể cùng chị đi xem."
      },
      {
        "zh": "我跟朋友一起去旅游。",
        "py": "Wǒ gēn péngyou yìqǐ qù lǚyóu.",
        "vn": "Tôi đi du lịch cùng bạn."
      }
    ],
    "hanzi": [
      {
        "c": "跟",
        "p": "gēn",
        "type": "形声字 · Chữ hình thanh",
        "st": 13,
        "ord": "足 → 艮",
        "rad": "足 (túc – chân)",
        "mean": "theo, cùng",
        "tip": "Bộ 足 (chân) — nghĩa gốc là \"đi theo sau\".",
        "cf": "",
        "w": "跟我去 / 跟他说 / 跟……一样"
      }
    ],
    "colloFull": [
      {
        "zh": "跟我一起",
        "py": "gēn wǒ yìqǐ",
        "vn": "cùng với tôi"
      },
      {
        "zh": "跟他说",
        "py": "gēn tā shuō",
        "vn": "nói với anh ấy"
      },
      {
        "zh": "跟朋友去",
        "py": "gēn péngyou qù",
        "vn": "đi với bạn"
      },
      {
        "zh": "跟爷爷学",
        "py": "gēn yéye xué",
        "vn": "học từ ông"
      }
    ],
    "patterns": [
      {
        "s": "跟 + ai + 一起 + động từ",
        "m": "Cùng ai làm gì: 跟我一起去"
      },
      {
        "s": "跟 = 和 — 跟 thiên khẩu ngữ hơn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật tôi cùng bạn đi trung tâm thương mại.",
        "answer": "星期天我跟朋友一起去商场。",
        "answerPy": "Xīngqītiān wǒ gēn péngyou yìqǐ qù shāngchǎng.",
        "note": "跟 = 和, 跟 thiên khẩu ngữ hơn.",
        "pair": "跟……一起……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chuyện này bạn nói với thầy đi.",
        "answer": "这件事你跟老师说吧。",
        "answerPy": "Zhè jiàn shì nǐ gēn lǎoshī shuō ba.",
        "note": "跟 + ai + 说 — nói với ai.",
        "pair": "跟……说"
      }
    ]
  },
  {
    "n": 16,
    "zh": "走",
    "py": "zǒu",
    "pos": "Động từ",
    "vn": "đi bộ, đi",
    "hv": "tẩu",
    "em": "🚶",
    "img": "/images/hsk2v3-bai-5/zou.jpg",
    "lesson": 4,
    "ex_zh": "我们吃完饭是走回酒店的。",
    "ex_py": "Wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.",
    "ex_vn": "Sau bữa ăn chúng tôi đã đi bộ về khách sạn.",
    "exList": [
      {
        "zh": "我们吃完饭是走回酒店的。",
        "py": "Wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.",
        "vn": "Sau bữa ăn chúng tôi đã đi bộ về khách sạn."
      },
      {
        "zh": "我看见他走进书店了。",
        "py": "Wǒ kànjiàn tā zǒujìn shūdiàn le.",
        "vn": "Tôi thấy anh ấy đi vào hiệu sách rồi."
      }
    ],
    "hanzi": [
      {
        "c": "走",
        "p": "zǒu",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "土 → 疋",
        "rad": "走 (tẩu – đi)",
        "mean": "đi, bước đi",
        "tip": "走 trong tiếng Trung hiện đại là \"đi bộ\", không phải \"chạy\".",
        "cf": "跑 (pǎo – chạy)",
        "w": "走回 / 走路 / 我们走吧"
      }
    ],
    "colloFull": [
      {
        "zh": "走路",
        "py": "zǒulù",
        "vn": "đi bộ"
      },
      {
        "zh": "快走",
        "py": "kuài zǒu",
        "vn": "đi nhanh lên"
      },
      {
        "zh": "走过来",
        "py": "zǒu guòlái",
        "vn": "đi lại đây"
      },
      {
        "zh": "走吧",
        "py": "zǒu ba",
        "vn": "đi thôi"
      }
    ],
    "patterns": [
      {
        "s": "走 + 过来 / 过去 / 上来 / 下去",
        "m": "Đi theo hướng nào"
      },
      {
        "s": "走 (đi bộ, rời đi) khác 去 (đi đến một nơi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Muộn rồi, chúng ta đi thôi.",
        "answer": "很晚了，我们走吧。",
        "answerPy": "Hěn wǎn le, wǒmen zǒu ba.",
        "note": "走 là rời đi, khác 去 là đi đến một nơi.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Từ đây đi bộ mười phút là đến khách sạn.",
        "answer": "从这里走十分钟就到酒店。",
        "answerPy": "Cóng zhèli zǒu shí fēnzhōng jiù dào jiǔdiàn.",
        "note": "走路 — đi bộ.",
        "pair": "就 + V"
      }
    ]
  },
  {
    "n": 17,
    "zh": "酒店",
    "py": "jiǔdiàn",
    "pos": "Danh từ",
    "vn": "khách sạn",
    "hv": "tửu điếm",
    "em": "🏨",
    "img": "/images/hsk2v3-bai-5/jiudian.jpg",
    "lesson": 4,
    "ex_zh": "我们吃完饭是走回酒店的。",
    "ex_py": "Wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.",
    "ex_vn": "Ăn xong chúng tôi đi bộ về khách sạn.",
    "exList": [
      {
        "zh": "我们吃完饭是走回酒店的。",
        "py": "Wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.",
        "vn": "Ăn xong chúng tôi đi bộ về khách sạn."
      },
      {
        "zh": "他住在那家酒店。",
        "py": "Tā zhù zài nà jiā jiǔdiàn.",
        "vn": "Anh ấy ở khách sạn kia."
      }
    ],
    "hanzi": [
      {
        "c": "酒",
        "p": "jiǔ",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "氵 → 酉",
        "rad": "氵 (thuỷ – nước)",
        "mean": "rượu",
        "tip": "酒店 nghĩa hiện đại là khách sạn, không chỉ là quán rượu.",
        "cf": "",
        "w": "酒店 / 啤酒 / 红酒"
      }
    ],
    "colloFull": [
      {
        "zh": "住酒店",
        "py": "zhù jiǔdiàn",
        "vn": "ở khách sạn"
      },
      {
        "zh": "去酒店",
        "py": "qù jiǔdiàn",
        "vn": "đến khách sạn"
      },
      {
        "zh": "酒店里",
        "py": "jiǔdiàn li",
        "vn": "trong khách sạn"
      },
      {
        "zh": "这家酒店",
        "py": "zhè jiā jiǔdiàn",
        "vn": "khách sạn này"
      }
    ],
    "patterns": [
      {
        "s": "住 / 去 + 酒店",
        "m": "Ở, đến khách sạn"
      },
      {
        "s": "酒 + 店",
        "m": "Tiệm (店) rượu (酒) — nay mang nghĩa khách sạn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúng tôi ở khách sạn này ba ngày.",
        "answer": "我们在这家酒店住三天。",
        "answerPy": "Wǒmen zài zhè jiā jiǔdiàn zhù sān tiān.",
        "note": "住酒店 — ở khách sạn.",
        "pair": "在……住"
      },
      {
        "promptLang": "vi",
        "prompt": "Khách sạn cách sân bay không xa.",
        "answer": "酒店离机场不远。",
        "answerPy": "Jiǔdiàn lí jīchǎng bù yuǎn.",
        "note": "离 + nơi chốn + 不远.",
        "pair": "离……不远"
      }
    ]
  }
];

var wuData = [
  { img: '👴', label: '爷爷', py: 'yéye', letter: 'A' },
  { img: '👵', label: '奶奶', py: 'nǎinai', letter: 'B' },
  { img: '🎁', label: '礼物', py: 'lǐwù', letter: 'C' },
  { img: '🏨', label: '酒店', py: 'jiǔdiàn', letter: 'D' },
  { img: '🧋', label: '奶茶', py: 'nǎichá', letter: 'E' },
  { img: '⏳', label: '等', py: 'děng', letter: 'F' }
];

var dialogData = [
  {
    scene: '在宾馆楼下 · Dưới sảnh khách sạn (Annie gọi cho Bạch Gia Nguyệt)',
    preQuiz: [
      { q: '白家月要去哪儿？', opts: ['安妮家', '男朋友家', '中国朋友家'], ans: 2 },
      { q: '王一雪让她们什么时候到？', opts: ['1点前', '10点前', '11点前'], ans: 2 }
    ],
    lines: [
      { sp: 0, zh: '家月，快下来吧，第一次去中国朋友家，别晚了。', py: 'Jiāyuè, kuài xiàlái ba, dì-yī cì qù Zhōngguó péngyou jiā, bié wǎn le.', vn: 'Gia Nguyệt, mau xuống nhé, lần đầu đến thăm nhà bạn người Trung Quốc, đừng đến muộn nhé.' },
      { sp: 1, zh: '还有时间，你上来吧。', py: 'Hái yǒu shíjiān, nǐ shànglái ba.', vn: 'Vẫn còn thời gian, bạn lên đây đi.' },
      { sp: 0, zh: '我不上去了，就在下面等你。', py: 'Wǒ bú shàngqù le, jiù zài xiàmiàn děng nǐ.', vn: 'Mình không lên nữa, đợi bạn ở dưới này thôi.' },
      { sp: 1, zh: '那我一会儿就下去。', py: 'Nà wǒ yíhuìr jiù xiàqù.', vn: 'Vậy thì một lát nữa mình sẽ xuống.' },
      { sp: 0, zh: '你快点儿吧。', py: 'Nǐ kuài diǎnr ba.', vn: 'Bạn nhanh lên một chút nhé.' },
      { sp: 1, zh: '没事，一雪姐说11点前到就可以。', py: 'Méishì, Yīxuě jiě shuō shíyī diǎn qián dào jiù kěyǐ.', vn: 'Không sao đâu, chị Nhất Tuyết bảo chúng ta đến trước 11 giờ là được.' }
    ]
  },
  {
    scene: '在王一雪家 · Đến chơi nhà Vương Nhất Tuyết',
    preQuiz: [
      { q: '王一雪给白家月和安妮介绍谁了？', opts: ['她的孩子们', '孩子们的爸爸', '孩子们的爷爷和奶奶'], ans: 2 },
      { q: '王一雪觉得白家月和安妮怎么样？', opts: ['很漂亮', '很客气', '很不好意思'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '家月、安妮，快进来！我给你们介绍一下，这是孩子们的爷爷、奶奶。', py: 'Jiāyuè, Ānnī, kuài jìnlái! Wǒ gěi nǐmen jièshào yíxià, zhè shì háizimen de yéye, nǎinai.', vn: 'Gia Nguyệt, Annie, mau vào đi! Để chị giới thiệu một chút nhé, đây là ông nội và bà nội của các con chị.' },
      { sp: 1, zh: '你们好！', py: 'Nǐmen hǎo!', vn: 'Chúng cháu chào hai bác!' },
      { sp: 0, zh: '爸，妈，这是白家月，这是安妮。她们都是一飞的学生。', py: 'Bà, mā, zhè shì Bái Jiāyuè, zhè shì Ānnī. Tāmen dōu shì Yīfēi de xuésheng.', vn: 'Bố mẹ ơi, đây là Bạch Gia Nguyệt, còn đây là Annie. Các em ấy đều là học sinh của Nhất Phi.' },
      { sp: 2, zh: '家月、安妮，你们好！', py: 'Jiāyuè, Ānnī, nǐmen hǎo!', vn: 'Chào Gia Nguyệt! Chào Annie!' },
      { sp: 1, zh: '这是送你们的礼物。', py: 'Zhè shì sòng nǐmen de lǐwù.', vn: 'Đây là chút quà chúng cháu biếu hai bác ạ.' },
      { sp: 2, zh: '你们太客气了，还拿这么多礼物来！', py: 'Nǐmen tài kèqi le, hái ná zhème duō lǐwù lái!', vn: 'Các cháu thật chu đáo, còn mang nhiều quà đến như vậy.' },
      { sp: 1, zh: '一雪姐，这是给孩子们准备的礼物。', py: 'Yīxuě jiě, zhè shì gěi háizimen zhǔnbèi de lǐwù.', vn: 'Chị Nhất Tuyết, đây là quà mà chúng em chuẩn bị cho các em nhỏ.' },
      { sp: 0, zh: '谢谢！你们别客气，快坐吧！', py: 'Xièxie! Nǐmen bié kèqi, kuài zuò ba!', vn: 'Cảm ơn rất nhiều! Các em đừng khách sáo, mau ngồi xuống đi!' }
    ]
  },
  {
    scene: '在王一雪家 · Bữa cơm ở nhà Vương Nhất Tuyết',
    preQuiz: [
      { q: '今天的菜是谁做的？', opts: ['爷爷', '奶奶', '王一雪'], ans: 2 },
      { q: '爷爷买什么了？', opts: ['奶茶', '绿茶', '牛奶'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '都12点了，我们吃饭吧。', py: 'Dōu shí’èr diǎn le, wǒmen chīfàn ba.', vn: 'Đã 12 giờ rồi, chúng ta ăn cơm thôi.' },
      { sp: 1, zh: '这么多好吃的，您太客气了！', py: 'Zhème duō hǎochī de, nín tài kèqi le!', vn: 'Nhiều món ngon quá ạ. Chị chu đáo quá!' },
      { sp: 0, zh: '都是我自己做的，你们多吃点儿。', py: 'Dōu shì wǒ zìjǐ zuò de, nǐmen duō chī diǎnr.', vn: 'Tất cả những món này đều là chị nấu cả đấy. Các em ăn nhiều một chút nhé.' },
      { sp: 1, zh: '奶茶也很好喝，是您自己做的吗？', py: 'Nǎichá yě hěn hǎohē, shì nín zìjǐ zuò de ma?', vn: 'Trà sữa cũng rất ngon. Chị tự làm à?' },
      { sp: 0, zh: '不是，奶茶是爷爷买的。', py: 'Bú shì, nǎichá shì yéye mǎi de.', vn: 'Không, trà sữa là ông nội bọn trẻ mua.' },
      { sp: 1, zh: '在哪儿买的？我还没喝过这么好喝的奶茶。', py: 'Zài nǎr mǎi de? Wǒ hái méi hēguo zhème hǎohē de nǎichá.', vn: 'Ông mua ở đâu vậy ạ? Em chưa từng uống trà sữa ngon như thế này ạ.' },
      { sp: 0, zh: '就在前边的商场，吃完饭你们可以跟我去看看。', py: 'Jiù zài qiánbian de shāngchǎng, chīwán fàn nǐmen kěyǐ gēn wǒ qù kànkan.', vn: 'Ở trung tâm thương mại phía trước. Ăn xong các em có thể cùng chị xem qua.' }
    ]
  },
  {
    scene: '在宾馆 · Ở khách sạn (Bạch Gia Nguyệt nhắn tin cho Lý Văn)',
    preQuiz: [
      { q: '他们到王一雪家的时候，饭菜怎么样了？', opts: ['还没做', '都做好了', '在饭店吃'], ans: 1 },
      { q: '吃完饭他们是怎么回酒店的？', opts: ['打车', '走回去', '坐公交车'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '回国前一天，我们去一雪姐家了。到她家的时候，饭菜都做好了。', py: 'Huí guó qián yì tiān, wǒmen qù Yīxuě jiě jiā le. Dào tā jiā de shíhou, fàncài dōu zuòhǎo le.', vn: 'Một ngày trước khi về nước, chúng tôi đã đi thăm nhà chị Nhất Tuyết. Khi chúng tôi đến nơi, đồ ăn đã sẵn sàng.' },
      { sp: 0, zh: '刘爷爷还准备了奶茶。', py: 'Liú yéye hái zhǔnbèile nǎichá.', vn: 'Bác Lưu còn chuẩn bị cả trà sữa nữa.' },
      { sp: 0, zh: '因为吃了太多东西，我们吃完饭是走回酒店的。', py: 'Yīnwèi chīle tài duō dōngxi, wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.', vn: 'Vì ăn quá nhiều món, nên sau bữa ăn chúng tôi đã đi bộ về khách sạn.' }
    ]
  }
];

var listenData = [
  {
    audio: '家月，快下来吧，第一次去中国朋友家，别晚了。还有时间，你上来吧。我不上去了，就在下面等你。',
    questions: [
      { q: '白家月要去哪儿？', opts: ['安妮家', '男朋友家', '中国朋友家'], ans: 2 },
      { q: '安妮在哪儿等白家月？', opts: ['下面', '上面', '酒店里'], ans: 0 }
    ]
  },
  {
    audio: '家月、安妮，快进来！我给你们介绍一下，这是孩子们的爷爷、奶奶。这是送你们的礼物。你们太客气了！',
    questions: [
      { q: '王一雪介绍谁了？', opts: ['她的孩子们', '孩子们的爸爸', '孩子们的爷爷和奶奶'], ans: 2 },
      { q: '白家月她们带了什么？', opts: ['礼物', '奶茶', '水果'], ans: 0 }
    ]
  },
  {
    audio: '都12点了，我们吃饭吧。都是我自己做的，你们多吃点儿。奶茶是爷爷买的，就在前边的商场。',
    questions: [
      { q: '今天的菜是谁做的？', opts: ['爷爷', '奶奶', '王一雪'], ans: 2 },
      { q: '奶茶是在哪儿买的？', opts: ['前边的商场', '学校旁边', '酒店里'], ans: 0 }
    ]
  },
  {
    audio: '回国前一天，我们去一雪姐家了。到她家的时候，饭菜都做好了。因为吃了太多东西，我们吃完饭是走回酒店的。',
    questions: [
      { q: '他们什么时候去一雪姐家？', opts: ['回国前一天', '回国后', '第一天'], ans: 0 },
      { q: '吃完饭他们怎么回酒店？', opts: ['打车', '走回去', '坐地铁'], ans: 1 }
    ]
  }
];

var matchData = [
  { left: '快', right: '下来' },
  { left: '在下面', right: '等你' },
  { left: '一会儿', right: '就下去' },
  { left: '送你们', right: '的礼物' },
  { left: '准备', right: '奶茶' },
  { left: '走回', right: '酒店' }
];

var fillData = [
  { pre: '家月，快', blank: '下来', post: '吧。', hint: '(xuống đây)', ans: '下来' },
  { pre: '我不', blank: '上去', post: '了，就在下面等你。', hint: '(lên trên)', ans: '上去' },
  { pre: '那我', blank: '一会儿', post: '就下去。', hint: '(một lát)', ans: '一会儿' },
  { pre: '家月、安妮，快', blank: '进来', post: '！', hint: '(vào đây)', ans: '进来' },
  { pre: '这是送你们的', blank: '礼物', post: '。', hint: '(quà)', ans: '礼物' },
  { pre: '这是给孩子们', blank: '准备', post: '的礼物。', hint: '(chuẩn bị)', ans: '准备' },
  { pre: '吃完饭你们可以', blank: '跟', post: '我去看看。', hint: '(cùng, với)', ans: '跟' },
  { pre: '我们吃完饭是', blank: '走', post: '回酒店的。', hint: '(đi bộ)', ans: '走' }
];

var sortData = [
  { words: ['家月', '，', '快', '下来', '吧', '。'], ans: '家月，快下来吧。', audio: '家月，快下来吧。' },
  { words: ['我', '不', '上去', '了', '，', '就', '在', '下面', '等', '你', '。'], ans: '我不上去了，就在下面等你。', audio: '我不上去了，就在下面等你。' },
  { words: ['这', '是', '送', '你们', '的', '礼物', '。'], ans: '这是送你们的礼物。', audio: '这是送你们的礼物。' },
  { words: ['都', '12点', '了', '，', '我们', '吃饭', '吧', '。'], ans: '都12点了，我们吃饭吧。', audio: '都十二点了，我们吃饭吧。' },
  { words: ['奶茶', '是', '爷爷', '买', '的', '。'], ans: '奶茶是爷爷买的。', audio: '奶茶是爷爷买的。' },
  { words: ['我们', '吃完饭', '是', '走', '回', '酒店', '的', '。'], ans: '我们吃完饭是走回酒店的。', audio: '我们吃完饭是走回酒店的。' }
];

var mcData = [
  { q: '这就是我家，＿＿看看吧。', opts: ['进来', '上去', '下去', '出去'], ans: 0 },
  { q: '我在楼上，你＿＿吧。', opts: ['上来', '下来', '过去', '回去'], ans: 0 },
  { q: '＿＿12点了，我们吃饭吧。', opts: ['都', '还', '就', '才'], ans: 0 },
  { q: '这是给孩子们＿＿的礼物。', opts: ['准备', '等', '走', '跟'], ans: 0 },
  { q: '“我不上去了，就在下面等你” — người nói đang ở đâu?', opts: ['Ở dưới', 'Ở trên', 'Ở ngoài', 'Ở trong'], ans: 0 },
  { q: 'Câu nào đúng khi tân ngữ là nơi chốn?', opts: ['你们快进教室来吧。', '你们快进来教室吧。', '你们快来进教室吧。', '你们教室快进来吧。'], ans: 0 },
  { q: '“都……了” diễn đạt sắc thái gì?', opts: ['Nhấn mạnh, đôi khi sốt ruột', 'Nghi vấn', 'Phủ định', 'Cầu khiến nhẹ nhàng'], ans: 0 },
  { q: '“奶茶是爷爷买的” nhấn mạnh điều gì?', opts: ['Ai mua trà sữa', 'Khi nào mua', 'Mua bao nhiêu', 'Mua ở đâu'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '朋友在楼下等你，你还在房间里，你会怎么说？',
      q_vn: 'Bạn của bạn đợi ở dưới nhà, bạn vẫn ở trong phòng, bạn sẽ nói gì?',
      hint: '我一会儿就下去。',
      sample: '还有时间，我一会儿就下去，你在下面等我一下。',
      sample_vn: 'Vẫn còn thời gian, một lát nữa mình xuống, bạn đợi mình ở dưới một chút nhé.',
      note: '下去 (xuống chỗ khác) / 下来 (xuống chỗ người nói) — chú ý hướng.'
    },
    {
      q_zh: '第一次去中国朋友家，你会带什么礼物？',
      q_vn: 'Lần đầu đến nhà bạn người Trung Quốc, bạn sẽ mang quà gì?',
      hint: '我会准备……的礼物。',
      sample: '我会给他们准备一些礼物，比如水果和茶，也会给孩子们准备小礼物。',
      sample_vn: 'Tôi sẽ chuẩn bị chút quà cho họ, ví dụ hoa quả và trà, cũng chuẩn bị quà nhỏ cho bọn trẻ.',
      note: '给 + người + 准备 + 礼物 là mẫu câu rất hay dùng khi đi làm khách.'
    },
    {
      q_zh: '客人来你家，你会怎么请他进来、坐下？',
      q_vn: 'Khách đến nhà bạn, bạn sẽ mời họ vào và ngồi thế nào?',
      hint: '快进来！/ 你们别客气，快坐吧！',
      sample: '快进来！我给你们介绍一下，这是我的家人。你们别客气，快坐吧！',
      sample_vn: 'Mau vào đi! Để tôi giới thiệu một chút, đây là người nhà tôi. Các bạn đừng khách sáo, ngồi xuống đi!',
      note: '别客气 / 快坐吧 là lời mời quen thuộc của chủ nhà.'
    },
    {
      q_zh: '已经12点了，你想请大家吃饭，你会怎么说？',
      q_vn: 'Đã 12 giờ rồi, bạn muốn mời mọi người ăn cơm, bạn nói thế nào?',
      hint: '都……了，我们……吧。',
      sample: '都12点了，我们吃饭吧，菜都做好了，你们多吃点儿。',
      sample_vn: 'Đã 12 giờ rồi, chúng ta ăn cơm thôi, món đã nấu xong cả rồi, mọi người ăn nhiều nhé.',
      note: '都……了 nhấn mạnh thời gian đã muộn/đã đạt đến mức nào đó.'
    },
    {
      q_zh: '你吃完饭是怎么回家的？',
      q_vn: 'Ăn cơm xong bạn về nhà bằng cách nào?',
      hint: '我是……回家的。',
      sample: '因为吃了太多东西，我们吃完饭是走回酒店的。',
      sample_vn: 'Vì ăn quá nhiều nên ăn xong chúng tôi đi bộ về khách sạn.',
      note: 'Câu 是……的 nhấn mạnh phương thức: 是走回去的、是打车回去的。'
    }
  ]
};

var translateData = [
  { vi: 'Gia Nguyệt, mau xuống nhé, đừng đến muộn.', zh: '家月，快下来吧，别晚了。', py: 'Jiāyuè, kuài xiàlái ba, bié wǎn le.' },
  { vi: 'Mình không lên nữa, đợi bạn ở dưới này thôi.', zh: '我不上去了，就在下面等你。', py: 'Wǒ bú shàngqù le, jiù zài xiàmiàn děng nǐ.' },
  { vi: 'Đây là chút quà chúng cháu biếu hai bác ạ.', zh: '这是送你们的礼物。', py: 'Zhè shì sòng nǐmen de lǐwù.' },
  { vi: 'Đã 12 giờ rồi, chúng ta ăn cơm thôi.', zh: '都12点了，我们吃饭吧。', py: 'Dōu shí’èr diǎn le, wǒmen chīfàn ba.' },
  { vi: 'Sau bữa ăn chúng tôi đã đi bộ về khách sạn.', zh: '我们吃完饭是走回酒店的。', py: 'Wǒmen chīwán fàn shì zǒu huí jiǔdiàn de.' }
];

var translateDataRev = [
  { vi: 'Vẫn còn thời gian, bạn lên đây đi.', zh: '还有时间，你上来吧。', py: 'Hái yǒu shíjiān, nǐ shànglái ba.' },
  { vi: 'Mau vào đi! Để chị giới thiệu một chút.', zh: '快进来！我给你们介绍一下。', py: 'Kuài jìnlái! Wǒ gěi nǐmen jièshào yíxià.' },
  { vi: 'Các cháu thật chu đáo, còn mang nhiều quà đến như vậy.', zh: '你们太客气了，还拿这么多礼物来！', py: 'Nǐmen tài kèqi le, hái ná zhème duō lǐwù lái!' },
  { vi: 'Trà sữa là ông nội mua.', zh: '奶茶是爷爷买的。', py: 'Nǎichá shì yéye mǎi de.' },
  { vi: 'Ăn xong các em có thể cùng chị đi xem.', zh: '吃完饭你们可以跟我去看看。', py: 'Chīwán fàn nǐmen kěyǐ gēn wǒ qù kànkan.' }
];
