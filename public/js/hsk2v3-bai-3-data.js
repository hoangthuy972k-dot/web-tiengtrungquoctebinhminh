// HSK 2 (3.0 Mới) · Bài 3 · 我想去西安旅游
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 3, trang 019-028.

var vocabData = [
  {
    "n": 1,
    "zh": "回来",
    "py": "huílái",
    "pos": "Động từ",
    "vn": "quay về, trở về",
    "hv": "hồi lai",
    "em": "🏠",
    "img": "/images/hsk2v3-bai-3/huilai.jpg",
    "lesson": 1,
    "ex_zh": "今天回来这么晚啊！",
    "ex_py": "Jīntiān huílái zhème wǎn a!",
    "ex_vn": "Hôm nay anh về muộn thế!",
    "exList": [
      {
        "zh": "今天回来这么晚啊！",
        "py": "Jīntiān huílái zhème wǎn a!",
        "vn": "Hôm nay anh về muộn thế!"
      },
      {
        "zh": "他六点就回来了。",
        "py": "Tā liù diǎn jiù huílái le.",
        "vn": "Sáu giờ anh ấy đã về rồi."
      }
    ],
    "hanzi": [
      {
        "c": "回",
        "p": "huí",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "囗 ngoài → 口 trong",
        "rad": "囗 (vi – bao quanh)",
        "mean": "quay về, trở lại",
        "tip": "Hình vòng xoáy nước — ý quay vòng, trở lại.",
        "cf": "",
        "w": "回来 / 回去 / 回家"
      },
      {
        "c": "来",
        "p": "lái",
        "type": "独体字 · Tượng hình",
        "st": 7,
        "ord": "一→丨→㇏→丿→丶→一",
        "rad": "木 (mộc, biến thể)",
        "mean": "đến, tới",
        "tip": "Hình bông lúa mạch từ xa mang ĐẾN → ĐẾN, TỚI.",
        "cf": "米 (mǐ – \"gạo\")",
        "w": "回来 / 来公司"
      }
    ],
    "colloFull": [
      {
        "zh": "回来了",
        "py": "huílai le",
        "vn": "về rồi"
      },
      {
        "zh": "几点回来",
        "py": "jǐ diǎn huílai",
        "vn": "mấy giờ về"
      },
      {
        "zh": "已经回来了",
        "py": "yǐjīng huílai le",
        "vn": "đã về rồi"
      },
      {
        "zh": "不回来",
        "py": "bù huílai",
        "vn": "không về"
      }
    ],
    "patterns": [
      {
        "s": "几点 + 回来",
        "m": "Mấy giờ quay về"
      },
      {
        "s": "回来 (về chỗ người nói) ↔ 回去 (về chỗ khác)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về?",
        "answer": "你几点回来？",
        "answerPy": "Nǐ jǐ diǎn huílai?",
        "note": "回来 là về chỗ người nói đang đứng.",
        "pair": "几点……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi đã về rồi, bà ấy rất mệt.",
        "answer": "我妈妈已经回来了，她很累。",
        "answerPy": "Wǒ māma yǐjīng huílai le, tā hěn lèi.",
        "note": "已经 đứng trước động từ, 了 đứng cuối câu.",
        "pair": "已经……了"
      }
    ]
  },
  {
    "n": 2,
    "zh": "这么",
    "py": "zhème",
    "pos": "Đại từ",
    "vn": "như vậy, thế này",
    "hv": "giá ma",
    "em": "👀",
    "lesson": 1,
    "ex_zh": "今天回来这么晚啊！",
    "ex_py": "Jīntiān huílái zhème wǎn a!",
    "ex_vn": "Hôm nay về muộn thế!",
    "exList": [
      {
        "zh": "今天回来这么晚啊！",
        "py": "Jīntiān huílái zhème wǎn a!",
        "vn": "Hôm nay về muộn thế!"
      },
      {
        "zh": "这么多东西，你一个人拿得了吗？",
        "py": "Zhème duō dōngxi, nǐ yí ge rén ná de liǎo ma?",
        "vn": "Nhiều đồ thế này, một mình bạn cầm nổi không?"
      }
    ],
    "hanzi": [
      {
        "c": "这",
        "p": "zhè",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "文 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "này, đây",
        "tip": "这么 (thế này) ↔ 那么 (thế kia).",
        "cf": "那么 (nàme)",
        "w": "这么 / 这个 / 这儿"
      },
      {
        "c": "么",
        "p": "me",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丿→㇋→乙 (nét cong xoắn nhỏ, biến thể của 幺)",
        "rad": "丿(phiệt)",
        "mean": "trợ từ/hậu tố không mang nghĩa riêng (什么, 怎么, 那么)",
        "tip": "Hình sợi TƠ nhỏ xoắn lại (biến thể của 幺) → nét chữ đơn giản, dùng làm hậu tố/trợ từ trong 什么, 怎么, 那么.",
        "cf": "幺 (yāo – \"nhỏ, số 1 trong đếm số\", gần như đồng dạng, thêm 1 nét)",
        "w": "这么 / 怎么 / 什么"
      }
    ],
    "colloFull": [
      {
        "zh": "这么累",
        "py": "zhème lèi",
        "vn": "mệt thế này"
      },
      {
        "zh": "这么远",
        "py": "zhème yuǎn",
        "vn": "xa thế này"
      },
      {
        "zh": "这么多",
        "py": "zhème duō",
        "vn": "nhiều thế này"
      },
      {
        "zh": "这么晚",
        "py": "zhème wǎn",
        "vn": "muộn thế này"
      }
    ],
    "patterns": [
      {
        "s": "这么 + tính từ",
        "m": "Đến mức này: 你这么累啊！"
      },
      {
        "s": "这么 (gần, cái đang thấy) ↔ 那么 (xa, cái đã nhắc tới)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sao hôm nay bạn mệt thế?",
        "answer": "你今天为什么这么累？",
        "answerPy": "Nǐ jīntiān wèishénme zhème lèi?",
        "note": "这么 + tính từ — đến mức này.",
        "pair": "为什么……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Muộn thế này rồi, chúng ta bắt taxi về đi.",
        "answer": "这么晚了，我们打车回去吧。",
        "answerPy": "Zhème wǎn le, wǒmen dǎchē huíqu ba.",
        "note": "这么晚 — muộn thế này.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 3,
    "zh": "完",
    "py": "wán",
    "pos": "Động từ",
    "vn": "xong, hết",
    "hv": "hoàn",
    "em": "✔️",
    "img": "/images/hsk2v3-bai-3/wan.jpg",
    "lesson": 1,
    "ex_zh": "下班的时候没做完。",
    "ex_py": "Xiàbān de shíhou méi zuòwán.",
    "ex_vn": "Đến giờ tan làm mà vẫn chưa xong.",
    "exList": [
      {
        "zh": "下班的时候没做完。",
        "py": "Xiàbān de shíhou méi zuòwán.",
        "vn": "Đến giờ tan làm mà vẫn chưa xong."
      },
      {
        "zh": "我吃完饭了。",
        "py": "Wǒ chīwán fàn le.",
        "vn": "Tôi ăn cơm xong rồi."
      }
    ],
    "hanzi": [
      {
        "c": "完",
        "p": "wán",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "宀 → 元",
        "rad": "宀 (miên – mái nhà)",
        "mean": "xong, hoàn thành",
        "tip": "Đứng sau động từ làm bổ ngữ kết quả: 做完、吃完、看完。",
        "cf": "",
        "w": "做完 / 吃完 / 看完"
      }
    ],
    "colloFull": [
      {
        "zh": "吃完",
        "py": "chī wán",
        "vn": "ăn xong"
      },
      {
        "zh": "做完",
        "py": "zuò wán",
        "vn": "làm xong"
      },
      {
        "zh": "洗完",
        "py": "xǐ wán",
        "vn": "rửa xong"
      },
      {
        "zh": "看完了",
        "py": "kàn wán le",
        "vn": "xem xong rồi"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 完",
        "m": "Làm xong việc gì — 完 là kết quả: 吃完饭"
      },
      {
        "s": "完 đứng SAU động từ, không đứng trước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ăn cơm xong tôi rửa bát.",
        "answer": "吃完饭我洗碗。",
        "answerPy": "Chīwán fàn wǒ xǐ wǎn.",
        "note": "完 đứng SAU động từ, là kết quả.",
        "pair": "V + 完"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ phim này tôi xem xong rồi.",
        "answer": "这个电影我看完了。",
        "answerPy": "Zhège diànyǐng wǒ kànwán le.",
        "note": "看完了 — xem xong rồi.",
        "pair": "V + 完 + 了"
      }
    ]
  },
  {
    "n": 4,
    "zh": "一起",
    "py": "yìqǐ",
    "pos": "Phó từ",
    "vn": "cùng, cùng nhau",
    "hv": "nhất khởi",
    "em": "🤝",
    "lesson": 2,
    "ex_zh": "我也很想一起出去玩。",
    "ex_py": "Wǒ yě hěn xiǎng yìqǐ chūqù wán.",
    "ex_vn": "Em cũng rất muốn đi chơi cùng anh.",
    "exList": [
      {
        "zh": "我也很想一起出去玩。",
        "py": "Wǒ yě hěn xiǎng yìqǐ chūqù wán.",
        "vn": "Em cũng rất muốn đi chơi cùng anh."
      },
      {
        "zh": "我们每天一起坐公交车来学校。",
        "py": "Wǒmen měitiān yìqǐ zuò gōngjiāochē lái xuéxiào.",
        "vn": "Ngày nào chúng tôi cũng cùng đi xe buýt đến trường."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yī",
        "type": "独体字 · Chỉ sự",
        "st": 1,
        "ord": "一 (một nét ngang duy nhất)",
        "rad": "一 (nhất – tự thành bộ, số một)",
        "mean": "một, số 1",
        "tip": "Một nét NGANG đơn giản nhất, tượng trưng cho đơn vị ÍT NHẤT → SỐ MỘT. Đọc yī; đứng trước thanh 4 đổi thành yí (一会儿), trước thanh 1, 2, 3 đổi thành yì (一起).",
        "cf": "二 (èr – \"số hai\", thêm một nét ngang thứ hai)",
        "w": "一起 / 一点儿 / 第一"
      },
      {
        "c": "起",
        "p": "qǐ",
        "type": "形声字 · Chữ hình thanh",
        "st": 10,
        "ord": "走 → 己",
        "rad": "走 (tẩu – đi)",
        "mean": "dậy, khởi",
        "tip": "一起 = cùng nhau; 起来 = đứng dậy, bắt đầu.",
        "cf": "",
        "w": "一起 / 起床 / 起来"
      }
    ],
    "colloFull": [
      {
        "zh": "一起去",
        "py": "yìqǐ qù",
        "vn": "cùng đi"
      },
      {
        "zh": "和我一起",
        "py": "hé wǒ yìqǐ",
        "vn": "cùng với tôi"
      },
      {
        "zh": "一起吃饭",
        "py": "yìqǐ chī fàn",
        "vn": "cùng ăn cơm"
      },
      {
        "zh": "一起做",
        "py": "yìqǐ zuò",
        "vn": "cùng làm"
      }
    ],
    "patterns": [
      {
        "s": "和 + ai + 一起 + động từ",
        "m": "Cùng ai làm gì: 和我一起去"
      },
      {
        "s": "一起 đứng TRƯỚC động từ, không đứng cuối câu"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay bạn cùng đi với tôi nhé.",
        "answer": "今天下午你和我一起去吧。",
        "answerPy": "Jīntiān xiàwǔ nǐ hé wǒ yìqǐ qù ba.",
        "note": "一起 đứng trước động từ.",
        "pair": "和……一起……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chúng ta cùng làm bữa tối nhé.",
        "answer": "我们一起做晚饭吧。",
        "answerPy": "Wǒmen yìqǐ zuò wǎnfàn ba.",
        "note": "Không nói 我们做晚饭一起.",
        "pair": "……吧"
      }
    ]
  },
  {
    "n": 5,
    "zh": "出去",
    "py": "chūqù",
    "pos": "Động từ",
    "vn": "đi ra, ra ngoài",
    "hv": "xuất khứ",
    "em": "🚪",
    "img": "/images/hsk2v3-bai-3/chuqu.jpg",
    "lesson": 2,
    "ex_zh": "我也很想一起出去玩。",
    "ex_py": "Wǒ yě hěn xiǎng yìqǐ chūqù wán.",
    "ex_vn": "Mình cũng rất muốn cùng ra ngoài chơi.",
    "exList": [
      {
        "zh": "我也很想一起出去玩。",
        "py": "Wǒ yě hěn xiǎng yìqǐ chūqù wán.",
        "vn": "Mình cũng rất muốn cùng ra ngoài chơi."
      },
      {
        "zh": "下班以后我们出去走走吧。",
        "py": "Xiàbān yǐhòu wǒmen chūqù zǒuzou ba.",
        "vn": "Tan làm rồi chúng ta ra ngoài đi dạo đi."
      }
    ],
    "hanzi": [
      {
        "c": "出",
        "p": "chū",
        "type": "会意字 · Chữ hội ý",
        "st": 5,
        "ord": "凵 → 凵",
        "rad": "凵 (khảm)",
        "mean": "ra, đi ra",
        "tip": "出去 = ra khỏi (xa người nói); 出来 = ra (về phía người nói).",
        "cf": "",
        "w": "出去 / 出来 / 出门"
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
        "w": "出去 / 上去 / 下去"
      }
    ],
    "colloFull": [
      {
        "zh": "出去玩儿",
        "py": "chūqù wánr",
        "vn": "ra ngoài chơi"
      },
      {
        "zh": "出去吃饭",
        "py": "chūqù chī fàn",
        "vn": "ra ngoài ăn"
      },
      {
        "zh": "想出去",
        "py": "xiǎng chūqù",
        "vn": "muốn ra ngoài"
      },
      {
        "zh": "别出去",
        "py": "bié chūqù",
        "vn": "đừng ra ngoài"
      }
    ],
    "patterns": [
      {
        "s": "出去 + động từ",
        "m": "Ra ngoài làm gì: 出去吃饭"
      },
      {
        "s": "出去 (rời khỏi chỗ người nói) ↔ 回来 (quay về chỗ người nói)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối nay chúng ta ra ngoài ăn cơm đi.",
        "answer": "今天晚上我们出去吃饭吧。",
        "answerPy": "Jīntiān wǎnshang wǒmen chūqu chī fàn ba.",
        "note": "出去 + động từ — ra ngoài làm gì.",
        "pair": "出去 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Mưa rồi, đừng ra ngoài nữa.",
        "answer": "下雨了，别出去了。",
        "answerPy": "Xià yǔ le, bié chūqu le.",
        "note": "别 = 不要, ngắn gọn hơn.",
        "pair": "别 + V"
      }
    ]
  },
  {
    "n": 6,
    "zh": "洗",
    "py": "xǐ",
    "pos": "Động từ",
    "vn": "rửa, giặt",
    "hv": "tẩy",
    "em": "🚿",
    "img": "/images/hsk2v3-bai-3/xi.jpg",
    "lesson": 3,
    "ex_zh": "吃个苹果吧，我都洗好了。",
    "ex_py": "Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.",
    "ex_vn": "Ăn quả táo đi, anh đã rửa sạch rồi.",
    "exList": [
      {
        "zh": "吃个苹果吧，我都洗好了。",
        "py": "Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.",
        "vn": "Ăn quả táo đi, anh đã rửa sạch rồi."
      },
      {
        "zh": "我去洗洗手。",
        "py": "Wǒ qù xǐxi shǒu.",
        "vn": "Em đi rửa tay đã."
      }
    ],
    "hanzi": [
      {
        "c": "洗",
        "p": "xǐ",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "氵 → 先",
        "rad": "氵 (thuỷ – nước)",
        "mean": "rửa, giặt",
        "tip": "Bộ 氵 (nước) cho biết việc dùng nước.",
        "cf": "",
        "w": "洗手 / 洗澡 / 洗衣服"
      }
    ],
    "colloFull": [
      {
        "zh": "洗手",
        "py": "xǐ shǒu",
        "vn": "rửa tay"
      },
      {
        "zh": "洗衣服",
        "py": "xǐ yīfu",
        "vn": "giặt quần áo"
      },
      {
        "zh": "洗完",
        "py": "xǐ wán",
        "vn": "rửa xong"
      },
      {
        "zh": "洗一下",
        "py": "xǐ yíxià",
        "vn": "rửa một chút"
      }
    ],
    "patterns": [
      {
        "s": "洗 + đồ vật",
        "m": "Rửa, giặt cái gì: 洗手 · 洗衣服"
      },
      {
        "s": "洗 có bộ 氵 (nước) bên trái — rửa thì cần nước"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trước khi ăn cơm phải rửa tay.",
        "answer": "吃饭前要洗手。",
        "answerPy": "Chī fàn qián yào xǐ shǒu.",
        "note": "洗 có bộ 氵 (nước) bên trái.",
        "pair": "要 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật tôi tự giặt quần áo.",
        "answer": "星期天我自己洗衣服。",
        "answerPy": "Xīngqītiān wǒ zìjǐ xǐ yīfu.",
        "note": "洗衣服 — giặt quần áo.",
        "pair": "自己 + V"
      }
    ]
  },
  {
    "n": 7,
    "zh": "自己",
    "py": "zìjǐ",
    "pos": "Đại từ",
    "vn": "tự, tự mình, bản thân",
    "hv": "tự kỷ",
    "em": "🙋",
    "lesson": 3,
    "ex_zh": "就在桌子上，你自己拿。",
    "ex_py": "Jiù zài zhuōzi shang, nǐ zìjǐ ná.",
    "ex_vn": "Táo để trên bàn, em tự đi lấy nhé.",
    "exList": [
      {
        "zh": "就在桌子上，你自己拿。",
        "py": "Jiù zài zhuōzi shang, nǐ zìjǐ ná.",
        "vn": "Táo để trên bàn, em tự đi lấy nhé."
      },
      {
        "zh": "自己的事情自己做。",
        "py": "Zìjǐ de shìqing zìjǐ zuò.",
        "vn": "Việc của mình thì tự mình làm."
      }
    ],
    "hanzi": [
      {
        "c": "自",
        "p": "zì",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "丿 → 目",
        "rad": "自 (tự)",
        "mean": "tự, mình",
        "tip": "Vốn là hình cái mũi — người Trung Quốc chỉ vào mũi khi nói \"tôi\".",
        "cf": "",
        "w": "自己 / 自行车"
      },
      {
        "c": "己",
        "p": "jǐ",
        "type": "独体字 · Chữ đơn (tượng hình)",
        "st": 3,
        "ord": "nét liền",
        "rad": "己 (kỷ)",
        "mean": "bản thân, mình",
        "tip": "Chữ tượng hình mô phỏng sợi dây cuộn lại tự thân → BẢN THÂN; 自(chính mình)+己(bản thân) = TỰ MÌNH.",
        "cf": "已 (yǐ – \"đã\", hình dáng gần giống\")",
        "w": "自己 / 自己的"
      }
    ],
    "colloFull": [
      {
        "zh": "自己做",
        "py": "zìjǐ zuò",
        "vn": "tự làm"
      },
      {
        "zh": "自己去",
        "py": "zìjǐ qù",
        "vn": "tự đi"
      },
      {
        "zh": "我自己",
        "py": "wǒ zìjǐ",
        "vn": "chính tôi"
      },
      {
        "zh": "自己的东西",
        "py": "zìjǐ de dōngxi",
        "vn": "đồ của mình"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 自己 + động từ",
        "m": "Tự mình làm gì: 我自己做"
      },
      {
        "s": "自己的 + danh từ",
        "m": "Của chính mình: 自己的房间"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bữa tối tôi tự nấu.",
        "answer": "晚饭我自己做。",
        "answerPy": "Wǎnfàn wǒ zìjǐ zuò.",
        "note": "Sub + 自己 + động từ — tự mình làm gì.",
        "pair": "自己 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là đồ của chính tôi.",
        "answer": "这是我自己的东西。",
        "answerPy": "Zhè shì wǒ zìjǐ de dōngxi.",
        "note": "自己的 — của chính mình.",
        "pair": "自己的 + N"
      }
    ]
  },
  {
    "n": 8,
    "zh": "拿",
    "py": "ná",
    "pos": "Động từ",
    "vn": "cầm, lấy",
    "hv": "nã",
    "em": "✋",
    "img": "/images/hsk2v3-bai-3/na.jpg",
    "lesson": 3,
    "ex_zh": "你自己拿。",
    "ex_py": "Nǐ zìjǐ ná.",
    "ex_vn": "Em tự lấy nhé.",
    "exList": [
      {
        "zh": "你自己拿。",
        "py": "Nǐ zìjǐ ná.",
        "vn": "Em tự lấy nhé."
      },
      {
        "zh": "爸爸拿了一些水果给孩子们吃。",
        "py": "Bàba nále yìxiē shuǐguǒ gěi háizimen chī.",
        "vn": "Bố lấy ít hoa quả cho bọn trẻ ăn."
      }
    ],
    "hanzi": [
      {
        "c": "拿",
        "p": "ná",
        "type": "会意字 · Chữ hội ý",
        "st": 10,
        "ord": "人 → 一 → 口 → 手",
        "rad": "手 (thủ – tay)",
        "mean": "cầm, lấy",
        "tip": "合 (hợp) + 手 (tay): khép tay lại để cầm đồ.",
        "cf": "",
        "w": "拿东西 / 拿着 / 拿来"
      }
    ],
    "colloFull": [
      {
        "zh": "拿过来",
        "py": "ná guòlái",
        "vn": "lấy lại đây"
      },
      {
        "zh": "拿一个",
        "py": "ná yí gè",
        "vn": "lấy một cái"
      },
      {
        "zh": "拿给我",
        "py": "ná gěi wǒ",
        "vn": "đưa cho tôi"
      },
      {
        "zh": "拿着",
        "py": "ná zhe",
        "vn": "cầm"
      }
    ],
    "patterns": [
      {
        "s": "拿 + 过来 / 过去",
        "m": "Lấy lại đây, mang ra kia"
      },
      {
        "s": "拿 có bộ 手 (tay) ở dưới — cầm bằng tay"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn lấy quyển sách đó lại đây cho tôi.",
        "answer": "你把那本书拿过来。",
        "answerPy": "Nǐ bǎ nà běn shū ná guòlai.",
        "note": "拿过来 — lấy lại đây.",
        "pair": "V + 过来"
      },
      {
        "promptLang": "vi",
        "prompt": "Đây là đồ của bạn, bạn mang về đi.",
        "answer": "这是你的东西，你拿回去吧。",
        "answerPy": "Zhè shì nǐ de dōngxi, nǐ ná huíqu ba.",
        "note": "拿回去 — mang về.",
        "pair": "V + 回去"
      }
    ]
  },
  {
    "n": 9,
    "zh": "手",
    "py": "shǒu",
    "pos": "Danh từ",
    "vn": "tay",
    "hv": "thủ",
    "em": "🖐️",
    "img": "/images/hsk2v3-bai-3/shou.jpg",
    "lesson": 3,
    "ex_zh": "我去洗洗手。",
    "ex_py": "Wǒ qù xǐxi shǒu.",
    "ex_vn": "Em đi rửa tay đã.",
    "exList": [
      {
        "zh": "我去洗洗手。",
        "py": "Wǒ qù xǐxi shǒu.",
        "vn": "Em đi rửa tay đã."
      },
      {
        "zh": "吃饭以前要洗手。",
        "py": "Chīfàn yǐqián yào xǐshǒu.",
        "vn": "Trước khi ăn cơm phải rửa tay."
      }
    ],
    "hanzi": [
      {
        "c": "手",
        "p": "shǒu",
        "type": "象形字 · Chữ tượng hình",
        "st": 4,
        "ord": "丿 → 二 → 亅",
        "rad": "手 (thủ – tay)",
        "mean": "tay",
        "tip": "Hình bàn tay với các ngón — làm bộ thủ thì viết 扌.",
        "cf": "",
        "w": "手 / 洗手 / 手机"
      }
    ],
    "colloFull": [
      {
        "zh": "洗手",
        "py": "xǐ shǒu",
        "vn": "rửa tay"
      },
      {
        "zh": "两只手",
        "py": "liǎng zhī shǒu",
        "vn": "hai bàn tay"
      },
      {
        "zh": "手上",
        "py": "shǒu shàng",
        "vn": "trên tay"
      },
      {
        "zh": "手里",
        "py": "shǒu li",
        "vn": "trong tay"
      }
    ],
    "patterns": [
      {
        "s": "洗 + 手",
        "m": "Rửa tay — việc phải làm trước khi ăn"
      },
      {
        "s": "手 là chữ tượng hình — các nét là ngón tay và cổ tay"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Rửa tay xong rồi hãy ăn cơm.",
        "answer": "洗完手再吃饭。",
        "answerPy": "Xǐwán shǒu zài chī fàn.",
        "note": "洗手 — việc phải làm trước khi ăn.",
        "pair": "再 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Trên tay bạn cầm cái gì thế?",
        "answer": "你手上拿着什么？",
        "answerPy": "Nǐ shǒu shang názhe shénme?",
        "note": "手上 — trên tay.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "为什么",
    "py": "wèi shénme",
    "pos": "Đại từ nghi vấn",
    "vn": "tại sao, vì sao",
    "hv": "vị thập ma",
    "em": "❓",
    "lesson": 3,
    "ex_zh": "为什么想去西安？",
    "ex_py": "Wèi shénme xiǎng qù Xī’ān?",
    "ex_vn": "Vì sao em muốn đi Tây An?",
    "exList": [
      {
        "zh": "为什么想去西安？",
        "py": "Wèi shénme xiǎng qù Xī’ān?",
        "vn": "Vì sao em muốn đi Tây An?"
      },
      {
        "zh": "已经下班了，你为什么还不回去？",
        "py": "Yǐjīng xiàbān le, nǐ wèi shénme hái bù huíqù?",
        "vn": "Tan làm rồi, sao bạn vẫn chưa về?"
      }
    ],
    "hanzi": [
      {
        "c": "为",
        "p": "wèi",
        "type": "会意字 · Chữ hội ý",
        "st": 4,
        "ord": "丶 → 力 → 丶 → 丶",
        "rad": "丶 (chủ)",
        "mean": "vì, cho",
        "tip": "Đọc wèi khi nghĩa \"vì\"; đọc wéi khi nghĩa \"làm, là\".",
        "cf": "",
        "w": "为什么 / 为了 / 为你"
      },
      {
        "c": "什",
        "p": "shén",
        "type": "左右结构 · Trái-phải",
        "st": 4,
        "ord": "亻(nhân) trái → 十(thập) phải",
        "rad": "亻 (nhân – người)",
        "mean": "gì (dùng trong 什么)",
        "tip": "亻(người) + 十(số mười, nhiều thứ) → hỏi về NGƯỜI/vật trong nhiều khả năng khác nhau = GÌ.",
        "cf": "付 (fù – \"trả tiền\", cũng bộ 亻\")",
        "w": "为什么 / 什么"
      },
      {
        "c": "么",
        "p": "me",
        "type": "独体字 · Chữ đơn",
        "st": 3,
        "ord": "丿→㇋→乙 (nét cong xoắn nhỏ, biến thể của 幺)",
        "rad": "丿(phiệt)",
        "mean": "trợ từ/hậu tố không mang nghĩa riêng (什么, 怎么, 那么)",
        "tip": "Hình sợi TƠ nhỏ xoắn lại (biến thể của 幺) → nét chữ đơn giản, dùng làm hậu tố/trợ từ trong 什么, 怎么, 那么.",
        "cf": "幺 (yāo – \"nhỏ, số 1 trong đếm số\", gần như đồng dạng, thêm 1 nét)",
        "w": "为什么 / 怎么 / 什么"
      }
    ],
    "colloFull": [
      {
        "zh": "为什么不去",
        "py": "wèi shénme bú qù",
        "vn": "sao không đi"
      },
      {
        "zh": "为什么这么累",
        "py": "wèi shénme zhème lèi",
        "vn": "sao mệt thế"
      },
      {
        "zh": "为什么问",
        "py": "wèi shénme wèn",
        "vn": "sao lại hỏi"
      },
      {
        "zh": "你为什么",
        "py": "nǐ wèi shénme",
        "vn": "sao bạn lại"
      }
    ],
    "patterns": [
      {
        "s": "为什么 + động từ",
        "m": "Vì sao lại …: 你为什么不去？"
      },
      {
        "s": "Câu đã có 为什么 thì KHÔNG thêm 吗"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sao hôm nay bạn không đi học?",
        "answer": "你今天为什么不上课？",
        "answerPy": "Nǐ jīntiān wèishénme bú shàngkè?",
        "note": "Câu đã có 为什么 thì không thêm 吗.",
        "pair": "为什么……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Sao bạn lại muốn đi Tây An?",
        "answer": "你为什么想去西安？",
        "answerPy": "Nǐ wèishénme xiǎng qù Xī'ān?",
        "note": "为什么 đứng trước động từ.",
        "pair": "为什么……？"
      }
    ]
  },
  {
    "n": 11,
    "zh": "不错",
    "py": "búcuò",
    "pos": "Tính từ",
    "vn": "không tồi, khá hay",
    "hv": "bất thác",
    "em": "👍",
    "img": "/images/hsk2v3-bai-3/bucuo.jpg",
    "lesson": 3,
    "ex_zh": "这个时候去西安很不错！",
    "ex_py": "Zhège shíhou qù Xī’ān hěn búcuò!",
    "ex_vn": "Thời điểm này đi Tây An rất tuyệt!",
    "exList": [
      {
        "zh": "这个时候去西安很不错！",
        "py": "Zhège shíhou qù Xī’ān hěn búcuò!",
        "vn": "Thời điểm này đi Tây An rất tuyệt!"
      },
      {
        "zh": "这家饭馆儿的菜不错。",
        "py": "Zhè jiā fànguǎnr de cài búcuò.",
        "vn": "Món ăn của quán này khá ngon."
      }
    ],
    "hanzi": [
      {
        "c": "不",
        "p": "bù",
        "type": "独体字 · Chữ đơn",
        "st": 4,
        "ord": "一(ngang) → 丨→ ㇒ → 丶",
        "rad": "一 (nhất)",
        "mean": "không, chẳng, đừng",
        "tip": "Nét ngang trên cùng như một bức tường CHẶN LẠI → mang nghĩa PHỦ ĐỊNH điều phía sau.",
        "cf": "布 (bù – \"vải\")",
        "w": "不错 / 对不起"
      },
      {
        "c": "错",
        "p": "cuò",
        "type": "形声字 · Chữ hình thanh",
        "st": 13,
        "ord": "钅 → 昔",
        "rad": "钅 (kim – kim loại)",
        "mean": "sai, lầm",
        "tip": "不错 nghĩa là \"khá tốt\" chứ không phải \"không sai\".",
        "cf": "",
        "w": "不错 / 错了 / 错误"
      }
    ],
    "colloFull": [
      {
        "zh": "很不错",
        "py": "hěn búcuò",
        "vn": "khá là ổn"
      },
      {
        "zh": "不错的东西",
        "py": "búcuò de dōngxi",
        "vn": "thứ khá tốt"
      },
      {
        "zh": "做得不错",
        "py": "zuò de búcuò",
        "vn": "làm khá tốt"
      },
      {
        "zh": "这个不错",
        "py": "zhège búcuò",
        "vn": "cái này khá ổn"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 不错",
        "m": "Khá tốt, khá ổn — lời khen nhẹ nhàng"
      },
      {
        "s": "不错 KHÔNG phải \"không sai\" mà là \"khá tốt\""
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Món của nhà hàng này khá ổn.",
        "answer": "这个饭店的菜不错。",
        "answerPy": "Zhège fàndiàn de cài búcuò.",
        "note": "不错 nghĩa là khá tốt, không phải không sai.",
        "pair": "……不错"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn làm khá tốt đấy.",
        "answer": "你做得不错。",
        "answerPy": "Nǐ zuò de búcuò.",
        "note": "做得不错 — làm khá tốt.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 12,
    "zh": "送",
    "py": "sòng",
    "pos": "Động từ",
    "vn": "đưa, tiễn, tặng",
    "hv": "tống",
    "em": "🎁",
    "img": "/images/hsk2v3-bai-3/song.jpg",
    "lesson": 4,
    "ex_zh": "刘明开车送孩子去学校。",
    "ex_py": "Liú Míng kāichē sòng háizi qù xuéxiào.",
    "ex_vn": "Lưu Minh lái xe đưa con đi đến trường.",
    "exList": [
      {
        "zh": "刘明开车送孩子去学校。",
        "py": "Liú Míng kāichē sòng háizi qù xuéxiào.",
        "vn": "Lưu Minh lái xe đưa con đi đến trường."
      },
      {
        "zh": "他每天早上都送女朋友去上班。",
        "py": "Tā měitiān zǎoshang dōu sòng nǚpéngyou qù shàngbān.",
        "vn": "Sáng nào anh ấy cũng đưa bạn gái đi làm."
      }
    ],
    "hanzi": [
      {
        "c": "送",
        "p": "sòng",
        "type": "形声字 · Chữ hình thanh",
        "st": 9,
        "ord": "关 → 辶",
        "rad": "辶 (sước – đi)",
        "mean": "đưa, tiễn, tặng",
        "tip": "Bộ 辶 (đi) — đưa người hoặc đồ đến nơi khác.",
        "cf": "",
        "w": "送孩子 / 送礼物 / 送你回家"
      }
    ],
    "colloFull": [
      {
        "zh": "送礼物",
        "py": "sòng lǐwù",
        "vn": "tặng quà"
      },
      {
        "zh": "送给他",
        "py": "sòng gěi tā",
        "vn": "tặng cho anh ấy"
      },
      {
        "zh": "送你回家",
        "py": "sòng nǐ huí jiā",
        "vn": "đưa bạn về nhà"
      },
      {
        "zh": "想送",
        "py": "xiǎng sòng",
        "vn": "muốn tặng"
      }
    ],
    "patterns": [
      {
        "s": "送 + 给 + người",
        "m": "Tặng cho ai: 送给他一本书"
      },
      {
        "s": "送 vừa là tặng, vừa là đưa tiễn: 送你回家"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật chị tôi, tôi muốn tặng chị ấy một món quà.",
        "answer": "我姐姐的生日，我想送给她一个礼物。",
        "answerPy": "Wǒ jiějie de shēngrì, wǒ xiǎng sònggěi tā yí ge lǐwù.",
        "note": "送给 + người — tặng cho ai.",
        "pair": "送给 + người"
      },
      {
        "promptLang": "vi",
        "prompt": "Muộn rồi, để tôi đưa bạn về nhà.",
        "answer": "很晚了，让我送你回家吧。",
        "answerPy": "Hěn wǎn le, ràng wǒ sòng nǐ huí jiā ba.",
        "note": "送 vừa là tặng, vừa là đưa tiễn.",
        "pair": "让 + người + V"
      }
    ]
  },
  {
    "n": 13,
    "zh": "回去",
    "py": "huíqù",
    "pos": "Động từ",
    "vn": "quay về, về",
    "hv": "hồi khứ",
    "em": "↩️",
    "img": "/images/hsk2v3-bai-3/huiqu.jpg",
    "lesson": 4,
    "ex_zh": "医院就来电话了，让他回去上班。",
    "ex_py": "Yīyuàn jiù lái diànhuà le, ràng tā huíqù shàngbān.",
    "ex_vn": "Bệnh viện gọi điện đến, yêu cầu anh ấy quay về làm việc.",
    "exList": [
      {
        "zh": "医院就来电话了，让他回去上班。",
        "py": "Yīyuàn jiù lái diànhuà le, ràng tā huíqù shàngbān.",
        "vn": "Bệnh viện gọi điện đến, yêu cầu anh ấy quay về làm việc."
      },
      {
        "zh": "已经下班了，你为什么还不回去？",
        "py": "Yǐjīng xiàbān le, nǐ wèi shénme hái bù huíqù?",
        "vn": "Tan làm rồi, sao bạn vẫn chưa về?"
      }
    ],
    "hanzi": [
      {
        "c": "回",
        "p": "huí",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "囗 ngoài → 口 trong",
        "rad": "囗 (vi – bao quanh)",
        "mean": "quay về, trở lại",
        "tip": "Hình vòng xoáy nước — ý quay vòng, trở lại.",
        "cf": "",
        "w": "回去 / 回来 / 回家"
      },
      {
        "c": "去",
        "p": "qù",
        "type": "会意字 · Chữ hội ý",
        "st": 5,
        "ord": "土 → 厶",
        "rad": "厶 (khư)",
        "mean": "đi, đến",
        "tip": "回去 = về (xa người nói); 回来 = về (đến chỗ người nói).",
        "cf": "",
        "w": "回去 / 出去 / 去年"
      }
    ],
    "colloFull": [
      {
        "zh": "回去吧",
        "py": "huíqù ba",
        "vn": "về đi"
      },
      {
        "zh": "几点回去",
        "py": "jǐ diǎn huíqù",
        "vn": "mấy giờ về"
      },
      {
        "zh": "拿回去",
        "py": "ná huíqù",
        "vn": "mang về"
      },
      {
        "zh": "不回去",
        "py": "bù huíqù",
        "vn": "không về"
      }
    ],
    "patterns": [
      {
        "s": "động từ + 回去",
        "m": "Mang về, đem về: 拿回去"
      },
      {
        "s": "回去 (về chỗ khác) ↔ 回来 (về chỗ người nói)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Muộn quá rồi, chúng ta về thôi.",
        "answer": "太晚了，我们回去吧。",
        "answerPy": "Tài wǎn le, wǒmen huíqu ba.",
        "note": "回去 là về chỗ khác, không phải chỗ người nói.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về Tây An?",
        "answer": "你几点回去西安？",
        "answerPy": "Nǐ jǐ diǎn huíqu Xī'ān?",
        "note": "回去 + nơi chốn — về nơi nào.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 14,
    "zh": "每",
    "py": "měi",
    "pos": "Đại từ",
    "vn": "mỗi, hàng (ngày, năm…)",
    "hv": "mỗi",
    "em": "📆",
    "lesson": 4,
    "ex_zh": "他这个月每天都很累。",
    "ex_py": "Tā zhège yuè měitiān dōu hěn lèi.",
    "ex_vn": "Tháng này ngày nào anh ấy cũng rất mệt.",
    "exList": [
      {
        "zh": "他这个月每天都很累。",
        "py": "Tā zhège yuè měitiān dōu hěn lèi.",
        "vn": "Tháng này ngày nào anh ấy cũng rất mệt."
      },
      {
        "zh": "我每个星期都去游泳。",
        "py": "Wǒ měi ge xīngqī dōu qù yóuyǒng.",
        "vn": "Tuần nào tôi cũng đi bơi."
      }
    ],
    "hanzi": [
      {
        "c": "每",
        "p": "měi",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "丿 → 乛 → 母",
        "rad": "母 (mẫu – mẹ)",
        "mean": "mỗi, từng",
        "tip": "每 thường đi kèm 都: 每天都、每个人都。",
        "cf": "",
        "w": "每天 / 每个 / 每年"
      }
    ],
    "colloFull": [
      {
        "zh": "每天",
        "py": "měi tiān",
        "vn": "mỗi ngày"
      },
      {
        "zh": "每个人",
        "py": "měi gè rén",
        "vn": "mỗi người"
      },
      {
        "zh": "每次",
        "py": "měi cì",
        "vn": "mỗi lần"
      },
      {
        "zh": "每年",
        "py": "měi nián",
        "vn": "mỗi năm"
      }
    ],
    "patterns": [
      {
        "s": "每 + lượng từ + danh từ",
        "m": "Mỗi …: 每个人 · 每天"
      },
      {
        "s": "每天 · 每年 không cần lượng từ, vì 天 và 年 tự làm lượng từ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mỗi ngày tôi đều dậy lúc sáu giờ.",
        "answer": "每天我都六点起床。",
        "answerPy": "Měi tiān wǒ dōu liù diǎn qǐchuáng.",
        "note": "每 hay đi với 都 ở vế sau.",
        "pair": "每……都……"
      },
      {
        "promptLang": "vi",
        "prompt": "Mỗi người đều có việc của mình.",
        "answer": "每个人都有自己的事。",
        "answerPy": "Měi ge rén dōu yǒu zìjǐ de shì.",
        "note": "每个人 — mỗi người.",
        "pair": "每……都……"
      }
    ]
  },
  {
    "n": 15,
    "zh": "累",
    "py": "lèi",
    "pos": "Tính từ",
    "vn": "mệt",
    "hv": "lụy",
    "em": "😮‍💨",
    "img": "/images/hsk2v3-bai-3/lei.jpg",
    "lesson": 4,
    "ex_zh": "我觉得他这个月每天都很累。",
    "ex_py": "Wǒ juéde tā zhège yuè měitiān dōu hěn lèi.",
    "ex_vn": "Tôi thấy tháng này ngày nào anh ấy cũng rất mệt.",
    "exList": [
      {
        "zh": "我觉得他这个月每天都很累。",
        "py": "Wǒ juéde tā zhège yuè měitiān dōu hěn lèi.",
        "vn": "Tôi thấy tháng này ngày nào anh ấy cũng rất mệt."
      },
      {
        "zh": "我昨天晚上没睡好，今天觉得很累。",
        "py": "Wǒ zuótiān wǎnshang méi shuì hǎo, jīntiān juéde hěn lèi.",
        "vn": "Tối qua tôi ngủ không ngon, hôm nay thấy rất mệt."
      }
    ],
    "hanzi": [
      {
        "c": "累",
        "p": "lèi",
        "type": "会意字 · Chữ hội ý",
        "st": 11,
        "ord": "田 → 幺 → 小",
        "rad": "糸 (mịch – sợi tơ)",
        "mean": "mệt mỏi",
        "tip": "田 (ruộng) + 糸: làm ruộng vất vả nên mệt.",
        "cf": "",
        "w": "很累 / 累了 / 不累"
      }
    ],
    "colloFull": [
      {
        "zh": "很累",
        "py": "hěn lèi",
        "vn": "rất mệt"
      },
      {
        "zh": "这么累",
        "py": "zhème lèi",
        "vn": "mệt thế này"
      },
      {
        "zh": "太累了",
        "py": "tài lèi le",
        "vn": "mệt quá"
      },
      {
        "zh": "不累",
        "py": "bú lèi",
        "vn": "không mệt"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 累 + 了",
        "m": "Rất mệt, mệt quá"
      },
      {
        "s": "累 (mệt vì làm nhiều) khác 病 (mệt vì ốm)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi mệt quá, muốn nghỉ một chút.",
        "answer": "今天我太累了，想休息一下。",
        "answerPy": "Jīntiān wǒ tài lèi le, xiǎng xiūxi yíxià.",
        "note": "累 là mệt vì làm nhiều.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Đi bộ mười phút thôi, không mệt đâu.",
        "answer": "走十分钟，不累。",
        "answerPy": "Zǒu shí fēnzhōng, bú lèi.",
        "note": "Phủ định tính từ thì bỏ 很, dùng 不.",
        "pair": "不 + Adj"
      }
    ]
  },
  {
    "n": 16,
    "zh": "西安",
    "py": "Xī’ān",
    "pos": "Danh từ riêng",
    "vn": "Tây An (thành phố Trung Quốc)",
    "hv": "Tây an",
    "em": "🏯",
    "lesson": 3,
    "ex_zh": "我们去西安旅游，怎么样？",
    "ex_py": "Wǒmen qù Xī’ān lǚyóu, zěnmeyàng?",
    "ex_vn": "Mình đi Tây An du lịch, anh thấy thế nào?",
    "exList": [
      {
        "zh": "我们去西安旅游，怎么样？",
        "py": "Wǒmen qù Xī’ān lǚyóu, zěnmeyàng?",
        "vn": "Mình đi Tây An du lịch, anh thấy thế nào?"
      },
      {
        "zh": "这个时候去西安很不错。",
        "py": "Zhège shíhou qù Xī’ān hěn búcuò.",
        "vn": "Thời điểm này đi Tây An rất tuyệt."
      }
    ],
    "hanzi": [
      {
        "c": "西",
        "p": "xī",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "一 → 冂 → 儿 → 一",
        "rad": "覀 (tây)",
        "mean": "phía tây",
        "tip": "西安 là cố đô nổi tiếng với đội quân đất nung.",
        "cf": "",
        "w": "西安 / 西边 / 东西"
      },
      {
        "c": "安",
        "p": "ān",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "宀(miên) trên → 女(nữ) dưới",
        "rad": "宀 (miên – mái nhà)",
        "mean": "yên ổn, an toàn",
        "tip": "宀(mái nhà) trên + 女(người phụ nữ) dưới → người phụ nữ ở trong NHÀ thì được AN TOÀN, YÊN ỔN.",
        "cf": "案 (àn – \"vụ án, bàn án\", thêm bộ 木 phía dưới)",
        "w": "西安 / 安全 / 平安"
      }
    ],
    "colloFull": [
      {
        "zh": "去西安",
        "py": "qù xī ān",
        "vn": "đi Tây An"
      },
      {
        "zh": "西安的朋友",
        "py": "xī ān de péngyou",
        "vn": "bạn ở Tây An"
      },
      {
        "zh": "从西安回来",
        "py": "cóng xī ān huílai",
        "vn": "từ Tây An về"
      },
      {
        "zh": "西安的东西",
        "py": "xī ān de dōngxi",
        "vn": "đồ ở Tây An"
      }
    ],
    "patterns": [
      {
        "s": "去 / 回 + 西安",
        "m": "Đi, về Tây An"
      },
      {
        "s": "西安 là một thành phố cổ nổi tiếng của Trung Quốc"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua tôi từ Tây An về.",
        "answer": "昨天我从西安回来了。",
        "answerPy": "Zuótiān wǒ cóng Xī'ān huílai le.",
        "note": "从 + nơi chốn + 回来 — từ đâu về.",
        "pair": "从……回来"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ở Tây An của tôi sang năm đến Bắc Kinh.",
        "answer": "我西安的朋友明年来北京。",
        "answerPy": "Wǒ Xī'ān de péngyou míngnián lái Běijīng.",
        "note": "西安的朋友 — bạn ở Tây An.",
        "pair": "……的朋友"
      }
    ]
  }
];

var wuData = [
  { img: '🚿', label: '洗', py: 'xǐ', letter: 'A' },
  { img: '😮‍💨', label: '累', py: 'lèi', letter: 'B' },
  { img: '✋', label: '拿', py: 'ná', letter: 'C' },
  { img: '👍', label: '不错', py: 'búcuò', letter: 'D' },
  { img: '🎁', label: '送', py: 'sòng', letter: 'E' },
  { img: '🤝', label: '一起', py: 'yìqǐ', letter: 'F' }
];

var dialogData = [
  {
    scene: '在家门口 · Ở cửa nhà (Lưu Minh đi làm về muộn)',
    preQuiz: [
      { q: '刘明为什么回来晚了？', opts: ['没做完工作', '去外边吃饭', '在公司休息'], ans: 0 },
      { q: '刘明现在要做什么？', opts: ['吃饭', '喝水', '工作'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '今天回来这么晚啊！', py: 'Jīntiān huílái zhème wǎn a!', vn: 'Hôm nay anh về muộn thế!' },
      { sp: 1, zh: '工作太多了，下班的时候没做完。', py: 'Gōngzuò tài duō le, xiàbān de shíhou méi zuòwán.', vn: 'Anh có nhiều việc quá, đến giờ tan làm mà vẫn chưa xong.' },
      { sp: 0, zh: '菜都做好了，过来吃饭吧。', py: 'Cài dōu zuòhǎo le, guòlái chīfàn ba.', vn: 'Cơm nấu xong rồi. Anh ra ăn cơm nhé.' },
      { sp: 1, zh: '我想休息一下，喝杯水。', py: 'Wǒ xiǎng xiūxi yíxià, hē bēi shuǐ.', vn: 'Anh muốn nghỉ ngơi một lát, uống cốc nước đã.' },
      { sp: 0, zh: '好的。', py: 'Hǎo de.', vn: 'Vâng ạ.' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (bàn chuyện đi du lịch)',
    preQuiz: [
      { q: '刘明想找时间做什么？', opts: ['去吃饭', '去旅游', '买东西'], ans: 1 },
      { q: '刘明让王一雪做什么？', opts: ['去买票', '看一下时间', '想想去哪儿玩'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '我们找个时间去旅游，怎么样？', py: 'Wǒmen zhǎo ge shíjiān qù lǚyóu, zěnmeyàng?', vn: 'Chúng ta sắp xếp thời gian đi du lịch, em thấy thế nào?' },
      { sp: 0, zh: '好啊，我也很想一起出去玩。', py: 'Hǎo a, wǒ yě hěn xiǎng yìqǐ chūqù wán.', vn: 'Nhất trí! Em cũng rất muốn đi chơi cùng anh.' },
      { sp: 1, zh: '你想去哪儿？', py: 'Nǐ xiǎng qù nǎr?', vn: 'Em muốn đi đâu?' },
      { sp: 0, zh: '我还没想好呢。', py: 'Wǒ hái méi xiǎnghǎo ne.', vn: 'Em vẫn chưa nghĩ ra.' },
      { sp: 1, zh: '那你再想一想，你想好了，我来买票。', py: 'Nà nǐ zài xiǎng yi xiǎng, nǐ xiǎnghǎo le, wǒ lái mǎipiào.', vn: 'Vậy em cứ nghĩ thêm nhé. Khi nào em nghĩ xong, anh sẽ mua vé.' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (ăn táo và chọn điểm đến)',
    preQuiz: [
      { q: '刘明让王一雪做什么？', opts: ['洗手', '洗苹果', '吃苹果'], ans: 2 },
      { q: '王一雪想去哪儿旅游？', opts: ['西安', '北京', '上海'], ans: 0 }
    ],
    lines: [
      { sp: 1, zh: '吃个苹果吧，我都洗好了。', py: 'Chī ge píngguǒ ba, wǒ dōu xǐhǎo le.', vn: 'Ăn quả táo đi, anh đã rửa sạch rồi.' },
      { sp: 0, zh: '好的。', py: 'Hǎo de.', vn: 'Vâng ạ.' },
      { sp: 1, zh: '就在桌子上，你自己拿。', py: 'Jiù zài zhuōzi shang, nǐ zìjǐ ná.', vn: 'Táo để trên bàn, em tự đi lấy nhé.' },
      { sp: 0, zh: '我去洗洗手。对了，我们去西安旅游，怎么样？', py: 'Wǒ qù xǐxi shǒu. Duìle, wǒmen qù Xī’ān lǚyóu, zěnmeyàng?', vn: 'Em đi rửa tay đã. À đúng rồi, mình đi Tây An du lịch, anh thấy thế nào?' },
      { sp: 1, zh: '为什么想去西安？', py: 'Wèi shénme xiǎng qù Xī’ān?', vn: 'Vì sao em muốn đi Tây An?' },
      { sp: 0, zh: '我看了看网上的介绍，这个时候去西安很不错！', py: 'Wǒ kànle kàn wǎngshang de jièshào, zhège shíhou qù Xī’ān hěn búcuò!', vn: 'Em có xem qua giới thiệu ở trên mạng. Thời điểm này đi Tây An rất tuyệt!' }
    ]
  },
  {
    scene: '在家里 · Ở nhà (Vương Nhất Tuyết gọi điện cho bạn thân)',
    preQuiz: [
      { q: '刘明是怎么送的孩子？', opts: ['打车', '开车', '坐公交车'], ans: 1 },
      { q: '医院来电话有什么事？', opts: ['让刘明休息', '让刘明去上班', '让刘明去开车'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '早上，刘明开车送孩子去学校，送完孩子回家后，医院就来电话了，让他回去上班。', py: 'Zǎoshang, Liú Míng kāichē sòng háizi qù xuéxiào, sòngwán háizi huí jiā hòu, yīyuàn jiù lái diànhuà le, ràng tā huíqù shàngbān.', vn: 'Buổi sáng, Lưu Minh lái xe đưa con đi đến trường, sau khi đưa con xong quay về nhà thì bệnh viện gọi điện đến, yêu cầu anh ấy quay về bệnh viện làm việc.' },
      { sp: 0, zh: '我觉得他这个月每天都很累，真想让他休息休息。', py: 'Wǒ juéde tā zhège yuè měitiān dōu hěn lèi, zhēn xiǎng ràng tā xiūxi xiūxi.', vn: 'Tôi cảm thấy tháng này ngày nào Lưu Minh cũng đều rất bận, thật muốn anh ấy được nghỉ ngơi một chút.' }
    ]
  }
];

var listenData = [
  {
    audio: '妈妈，我的饭吃完了，我能出去玩吗？',
    questions: [
      { q: 'Bạn nhỏ muốn làm gì?', opts: ['Ăn thêm cơm', 'Ra ngoài chơi', 'Đi ngủ'], ans: 1, exp: '吃完了 = ăn xong rồi; 出去玩 = ra ngoài chơi.' }
    ]
  },
  {
    audio: '你的手机找到了吗？还没找到，你给我打个电话吧。',
    questions: [
      { q: 'Người kia đã tìm thấy điện thoại chưa?', opts: ['Tìm thấy rồi', 'Không bị mất', 'Chưa tìm thấy'], ans: 2, exp: '还没找到 = vẫn chưa tìm thấy; 到 là bổ ngữ kết quả (đạt được).' },
      { q: 'Người đó nhờ làm gì?', opts: ['Gọi vào điện thoại của mình', 'Mua điện thoại mới', 'Cùng đi tìm'], ans: 0, exp: '你给我打个电话吧 = bạn gọi điện cho tôi đi (để nghe chuông).' }
    ]
  },
  {
    audio: '这本书我看了看，觉得很不错，你也看看吧。',
    questions: [
      { q: 'Người nói thấy quyển sách thế nào?', opts: ['Hơi đắt', 'Khó hiểu', 'Khá hay'], ans: 2, exp: '不错 = khá tốt, khá hay; 看了看 = đã xem qua (việc đã xảy ra).' },
      { q: 'Người nói khuyên người kia làm gì?', opts: ['Cũng xem thử', 'Mua một quyển', 'Đừng đọc'], ans: 0, exp: '你也看看吧 = bạn cũng xem thử đi; 看看 = việc chưa làm, xem thử một chút.' }
    ]
  },
  {
    audio: '小雪每天五点就回家了，今天八点还没回来。',
    questions: [
      { q: 'Hôm nay Tiểu Tuyết thế nào?', opts: ['Về sớm hơn mọi ngày', '8 giờ vẫn chưa về', 'Không đi học'], ans: 1, exp: '每天五点就回家了 = ngày nào 5 giờ cũng đã về; 今天八点还没回来 = hôm nay 8 giờ vẫn chưa về.' }
    ]
  },
  {
    audio: '我太累了，想在家休息休息，不和你们一起出去了。',
    questions: [
      { q: 'Người nói sẽ làm gì?', opts: ['Ở nhà nghỉ ngơi', 'Đi chơi cùng mọi người', 'Đi làm'], ans: 0, exp: '休息休息 = nghỉ ngơi một chút; 不和你们一起出去了 = không ra ngoài cùng các bạn nữa.' }
    ]
  },
  {
    audio: '明天我要送爸爸去机场，不能去上课了。',
    questions: [
      { q: 'Ngày mai người nói làm gì?', opts: ['Ra sân bay đón bố', 'Đi máy bay cùng bố', 'Đưa bố ra sân bay'], ans: 2, exp: '送爸爸去机场 = đưa (tiễn) bố ra sân bay; đón là 接.' }
    ]
  }
];

var matchData = [
  { left: '洗', right: '手' },
  { left: '送', right: '孩子去学校' },
  { left: '出去', right: '玩' },
  { left: '这么', right: '晚' },
  { left: '听', right: '见了' },
  { left: '每天', right: '都很累' },
  { left: '为什么', right: '不回来' }
];

var fillData = [
  { pre: 'Bạn hỏi em trai: “这本书你看', blank: '完', post: '了吗？我也想看。”', hint: '(xong — kết quả)', ans: '完', exp: '完 đứng sau động từ chỉ kết quả “xong”: 看完 = đọc xong.' },
  { pre: '“火车票买', blank: '好', post: '了吗？” — “早上就买了，在我手机里。”', hint: '(xong xuôi — kết quả)', ans: '好', exp: '好 sau động từ = làm xong, đâu vào đấy: 买好了 = mua xong rồi.' },
  { pre: '“我的手机呢？” — “我在桌子下边找', blank: '到', post: '了。”', hint: '(được, thấy — kết quả)', ans: '到', exp: '找到 = tìm thấy; 找 chỉ là “tìm”, thêm 到 mới có kết quả.' },
  { pre: '“你听', blank: '见', post: '了吗？外边有人在唱歌。”', hint: '(thấy — kết quả của nghe)', ans: '见', exp: '听见 = nghe thấy; 听 chỉ là hành động nghe.' },
  { pre: '老师说的汉语你都听', blank: '懂', post: '了吗？', hint: '(hiểu — kết quả)', ans: '懂', exp: '听懂 = nghe hiểu; 懂 làm bổ ngữ kết quả cho 听.' },
  { pre: '“我们明天去哪儿玩？” — “我也不知道，让我', blank: '想想', post: '。”', hint: '(nghĩ một chút — việc chưa làm)', ans: '想想', exp: 'Lặp động từ 想想 = nghĩ một chút (việc sắp làm), câu nghe nhẹ nhàng.' },
  { pre: '他', blank: '想了想', post: '，说：“我还是不去了。”', hint: '(nghĩ một lúc — việc đã xảy ra)', ans: '想了想', exp: 'Việc đã xảy ra: V + 了 + V: 想了想 = đã nghĩ một lúc.' },
  { pre: '“姐姐在家吗？” — “她出去了，下午', blank: '回来', post: '。”', hint: '(quay về — hướng về chỗ người nói)', ans: '回来', exp: 'Người nói đang ở nhà nên dùng 回来 (về đây); 回去 là về chỗ khác.' },
  { pre: 'Lần đầu đến nhà bạn, bạn khen: “你的房间', blank: '这么', post: '漂亮啊！”', hint: '(… thế này)', ans: '这么', exp: '这么 + tính từ = … thế này: 这么漂亮 = đẹp thế này.' },
  { pre: '孩子已经六岁了，能', blank: '自己', post: '穿衣服了。', hint: '(tự mình)', ans: '自己', exp: '自己 + động từ = tự mình làm: 自己穿衣服.' },
  { pre: '“小明', blank: '为什么', post: '没来上课？” — “他生病了。”', hint: '(tại sao)', ans: '为什么', exp: '为什么 = tại sao; đã có 为什么 thì không thêm 吗 ở cuối.' },
  { pre: '你去', blank: '拿', post: '一下杯子，我们喝茶吧。', hint: '(cầm, lấy)', ans: '拿', exp: '拿 = cầm, lấy: 拿一下杯子 = lấy cái cốc giúp.' }
];

var sortData = [
  { words: ['下午', '我们', '一起', '出去', '玩', '，', '好吗', '？'], ans: '下午我们一起出去玩，好吗？', audio: '下午我们一起出去玩，好吗？', alt: ['我们下午一起出去玩，好吗？'] },
  { words: ['你', '洗完', '手', '再', '吃', '苹果', '吧', '。'], ans: '你洗完手再吃苹果吧。', audio: '你洗完手再吃苹果吧。' },
  { words: ['我', '每天', '晚上', '都', '给', '妈妈', '打电话', '。'], ans: '我每天晚上都给妈妈打电话。', audio: '我每天晚上都给妈妈打电话。', alt: ['每天晚上我都给妈妈打电话。'] },
  { words: ['我', '找了找', '，', '手机', '不', '在', '房间', '里', '。'], ans: '我找了找，手机不在房间里。', audio: '我找了找，手机不在房间里。' },
  { words: ['你', '给', '大家', '介绍介绍', '北京', '吧', '。'], ans: '你给大家介绍介绍北京吧。', audio: '你给大家介绍介绍北京吧。' },
  { words: ['已经', '十二点', '了', '，', '你', '为什么', '还', '不', '睡觉', '？'], ans: '已经十二点了，你为什么还不睡觉？', audio: '已经十二点了，你为什么还不睡觉？', alt: ['已经十二点了，为什么你还不睡觉？'] },
  { words: ['对不起', '，', '你', '的', '电话', '我', '没', '听见', '。'], ans: '对不起，你的电话我没听见。', audio: '对不起，你的电话我没听见。', alt: ['对不起，我没听见你的电话。'] },
  { words: ['我', '有点儿', '累', '，', '想', '回去', '休息', '了', '。'], ans: '我有点儿累，想回去休息了。', audio: '我有点儿累，想回去休息了。' }
];

var mcData = [
  { q: 'Bạn muốn nói: “Hôm nay tôi chưa viết xong chữ Hán.”', opts: ['我今天的汉字还没写完。', '我今天的汉字还不写完。', '我今天的汉字还没写完了。', '我今天的汉字还没完写。'], ans: 0, exp: 'Phủ định bổ ngữ kết quả: 没 + động từ + 完, bỏ 了; 完 luôn đứng sau động từ.' },
  { q: 'A: “我们去哪儿旅游？想好了没有？” — B chưa quyết định được:', opts: ['我还没想好。', '我还不想好。', '我还没想好了。', '我想不好还。'], ans: 0, exp: 'Chưa có kết quả: 还没 + 想好; không dùng 不, không thêm 了.' },
  { q: 'Bạn tìm cả buổi mà vẫn không thấy con mèo, bạn nói:', opts: ['我还没找到小猫。', '我还没找小猫到。', '我还不找到小猫。', '我没找到了小猫。'], ans: 0, exp: '到 đứng ngay sau động từ, tân ngữ đứng sau cả cụm: 找到小猫; phủ định dùng 没.' },
  { q: 'Câu nào SAI?', opts: ['我昨天看见了一个电影。', '我在超市看见王老师了。', '你听见有人叫你了吗？', '饭我已经吃完了。'], ans: 0, exp: 'Xem phim là 看电影 (hành động có chủ ý); 看见 = nhìn thấy (tình cờ), không dùng với 电影.' },
  { q: 'Bạn mình làm việc vất vả cả tuần, bạn khuyên:', opts: ['你这个星期太忙了，休息休息吧。', '你这个星期太忙了，休息了休息吧。', '你这个星期太忙了，休息一休息吧。', '你这个星期太忙了，休息休息了。'], ans: 0, exp: 'Lời khuyên cho việc chưa làm: lặp ABAB 休息休息 + 吧, không có 了; chỉ động từ một âm tiết mới nói V一V (看一看).' },
  { q: 'Bạn kể lại: “Bài hát đó tôi đã nghe thử một chút, cũng được.”', opts: ['那个歌我听了听，还不错。', '那个歌我听听了，还不错。', '那个歌我听一听了，还不错。', '那个歌我了听听，还不错。'], ans: 0, exp: 'Việc đã xảy ra: V + 了 + V (听了听); không đặt 了 sau cả cụm lặp.' },
  { q: 'A: “这个新手机怎么样？” — B muốn cầm xem thử:', opts: ['你给我看看。', '你给我看了看。', '你给我看看了。', '你看看给我。'], ans: 0, exp: 'Việc chưa làm, đề nghị: lặp 看看, không có 了; 给我 đứng trước động từ.' },
  { q: 'Bạn đang ở nhà, bố đi làm chưa về, bạn hỏi mẹ:', opts: ['爸爸几点回来？', '爸爸几点回去？', '爸爸回来几点？', '爸爸几点回来吗？'], ans: 0, exp: 'Người nói ở nhà, bố về phía mình nên dùng 回来; giờ (几点) đứng trước động từ; có 几 thì không thêm 吗.' },
  { q: 'Bạn của bạn đến nhà chơi, lúc bạn ấy về, bạn nói:', opts: ['我送你去车站吧。', '我送去你车站吧。', '我给你送车站吧。', '我送你车站去吧。'], ans: 0, exp: '送 + người + 去 + nơi chốn = đưa ai đến đâu: 送你去车站.' },
  { q: 'Bạn muốn nói: “Chúng ta cùng đi ăn cơm nhé.”', opts: ['我们一起去吃饭吧。', '一起我们去吃饭吧。', '我们去吃饭一起吧。', '我们去一起吃饭吧。'], ans: 0, exp: '一起 đứng sau chủ ngữ, trước động từ: 我们一起去……; không đặt cuối câu như “đi ăn cùng”.' },
  { q: 'A: “我明天不去学校了。” — B hỏi lý do:', opts: ['你为什么不去？', '你为什么不去吗？', '为什么你不去呢吗？', '你不去为什么？'], ans: 0, exp: 'Câu có 为什么 không thêm 吗; 为什么 đứng trước động từ, không đặt cuối câu như tiếng Việt “sao?”.' },
  { q: 'Câu nào SAI?', opts: ['每天我起床七点。', '我每天都喝牛奶。', '他每个星期都去看爸爸妈妈。', '每个人都自己拿一杯水。'], ans: 0, exp: 'Thời gian (七点) đứng trước động từ: 我每天七点起床; 每 thường đi cùng 都.' }
];

var speakingData = {
  intro: 'Nhấn nút loa nghe câu hỏi / tình huống, rồi tự ghi âm câu trả lời — hãy nói về chính bạn, dùng bổ ngữ kết quả (完/好/到/见/懂) và động từ lặp lại (看看, 休息休息, 看了看).',
  questions: [
    {
      q_zh: '你今天的事都做完了吗？',
      q_vn: 'Việc hôm nay bạn làm xong hết chưa? Còn việc gì chưa xong?',
      hint: '……完了，但……还没……完。',
      sample: '中文书我看完了，但衣服还没洗完。',
      sample_vn: 'Sách tiếng Trung mình đọc xong rồi, nhưng quần áo vẫn chưa giặt xong.',
      note: 'Bổ ngữ kết quả 完; phủ định: 没 + động từ + 完, không có 了.'
    },
    {
      q_zh: '明天不上课，你想做什么？',
      q_vn: 'Ngày mai không có tiết học, bạn muốn làm gì?',
      hint: '我想……看看…… / 玩一玩……',
      sample: '我想在家看看书，下午出去玩一玩。',
      sample_vn: 'Mình muốn ở nhà đọc sách một chút, chiều ra ngoài chơi một lát.',
      note: 'Việc chưa xảy ra: lặp động từ (看看, 玩一玩) cho câu nhẹ nhàng.'
    },
    {
      q_zh: '昨天晚上你做什么了？',
      q_vn: 'Tối qua bạn đã làm gì?',
      hint: '我……了……，……',
      sample: '我看了看电视，十点就睡觉了。',
      sample_vn: 'Mình xem tivi một lúc, 10 giờ là đi ngủ rồi.',
      note: 'Việc đã xảy ra: V + 了 + V (看了看).'
    },
    {
      q_zh: '你每天几点起床？为什么？',
      q_vn: 'Mỗi ngày bạn dậy lúc mấy giờ? Tại sao?',
      hint: '我每天……起床，我要……',
      sample: '我每天六点起床，我要送妹妹去学校。',
      sample_vn: 'Ngày nào mình cũng dậy lúc 6 giờ, mình phải đưa em gái đến trường.',
      note: '每天 + giờ + động từ; 送 + người + 去 + nơi chốn.'
    },
    {
      q_zh: '晚上你想和谁一起吃饭？',
      q_vn: 'Tối nay bạn muốn ăn cơm cùng ai?',
      hint: '我想和……一起……',
      sample: '我想和家人一起吃饭，我自己做菜。',
      sample_vn: 'Mình muốn ăn cơm cùng gia đình, mình tự nấu.',
      note: '和 + người + 一起 + động từ; 自己 + động từ = tự làm.'
    }
  ]
};

var translateData = [
  { vi: 'Tôi đã hỏi thử mẹ, mẹ nói được.', zh: '我问了问妈妈，她说可以。', py: 'Wǒ wènle wèn māma, tā shuō kěyǐ.' },
  { vi: 'Ngày nào bố cũng lái xe đưa tôi đến trường.', zh: '爸爸每天都开车送我去学校。', py: 'Bàba měi tiān dōu kāichē sòng wǒ qù xuéxiào.' },
  { vi: 'Những bộ quần áo này là tôi tự giặt.', zh: '这些衣服是我自己洗的。', py: 'Zhèxiē yīfu shì wǒ zìjǐ xǐ de.' },
  { vi: 'Mệt thì về nhà nghỉ ngơi đi.', zh: '累了就回家休息吧。', py: 'Lèi le jiù huí jiā xiūxi ba.' },
  { vi: 'Muộn thế này rồi, sao anh ấy vẫn chưa về?', zh: '这么晚了，他为什么还没回来？', py: 'Zhème wǎn le, tā wèi shénme hái méi huílái?' }
];

var translateDataRev = [
  { vi: 'Quyển sách bạn muốn mua, tôi tìm thấy rồi.', zh: '你想买的那本书我找到了。', py: 'Nǐ xiǎng mǎi de nà běn shū wǒ zhǎodào le.' },
  { vi: 'Chúng ta cùng ra ngoài ăn tối nhé.', zh: '我们一起出去吃晚饭吧。', py: 'Wǒmen yìqǐ chūqù chī wǎnfàn ba.' },
  { vi: 'Sao hôm nay bạn mệt thế?', zh: '你今天怎么这么累？', py: 'Nǐ jīntiān zěnme zhème lèi?' }
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (新HSK教程2 学练手册, Bài 3: Hán tự + Từ mới + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    { title: 'Hán tự & từ mới', blocks: [
      { type: 'table', caption: 'Bộ thủ (偏旁) — tên gọi và chữ ví dụ', headers: ['Tên gọi', 'Bộ thủ', 'Chữ ví dụ'], rows: [
        ['三点水 sāndiǎnshuǐ', '氵', '汉 hàn (người Hán, tiếng Hán) · 洗 xǐ (rửa, giặt)'],
        ['宝盖头 bǎogàitóu', '宀', '家 jiā (nhà) · 完 wán (xong, hết)']
      ] },
      { type: 'table', caption: 'Tập viết (摹写) — chữ → từ → câu', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['汉 hàn', '汉字 Hànzì — chữ Hán', '我每天都会写写汉字。— Ngày nào tôi cũng viết chữ Hán một chút.'],
        ['洗 xǐ', '洗手 xǐ shǒu — rửa tay', '饭前要洗洗手。— Trước khi ăn phải rửa tay.'],
        ['家 jiā', '在家 zài jiā — ở nhà', '你在家休息休息吧。— Bạn ở nhà nghỉ ngơi đi.'],
        ['完 wán', '做完 zuòwán — làm xong', '我的工作做完了。— Công việc của tôi làm xong rồi.']
      ],
        note: 'Luyện viết tay từng nét theo mẫu trong sách (bấm vào chữ ở phần Từ vựng để xem nét viết).' },
      { type: 'table', caption: 'Từ ghép mới (学一学)', headers: ['Từ đã biết', 'Từ mới', 'Nghĩa'], rows: [
        ['书 · 桌子', '书桌 shūzhuō', 'bàn học, bàn viết'],
        ['洗 · 公交车', '洗车 xǐchē', 'rửa xe'],
        ['回来 · 中国', '回国 huí guó', 'về nước']
      ] },
      { type: 'blankdrill', caption: 'Điền từ mới vào chỗ trống (做一做)', hint: 'Gõ từ mới (chữ Hán) vào ô trống rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '明天有雨，你别去', after: '了。', answer: '洗车' },
          { before: '我的', after: '是在网上买的。', answer: '书桌' },
          { before: '安妮有点儿事，她明天要', after: '。', answer: '回国' }
        ] }
    ]},
    { title: 'Mô phỏng đề thi', audio: '/audio/hsk2v3-bai-3/wb-mocktest.mp3', blocks: [
      { type: 'mocktest',
        listening: [
          { n: 1, part: 'Phần 1 · Nghe một câu, chọn tranh đúng', options: [
            { key: 'A', img: '/images/hsk2v3-bai-3-wb/q1a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-3-wb/q1b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-3-wb/q1c.jpg' }
          ], answer: 'C',
            script: '爸爸回来后和儿子一起看电视。', vn: 'Bố về nhà rồi cùng con trai xem ti vi.' },
          { n: 2, options: [
            { key: 'A', img: '/images/hsk2v3-bai-3-wb/q2a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-3-wb/q2b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-3-wb/q2c.jpg' }
          ], answer: 'B',
            script: '苹果都洗好了，你想吃就自己拿。', vn: 'Táo rửa xong hết rồi, muốn ăn thì bạn tự lấy nhé.' },
          { n: 3, options: [
            { key: 'A', img: '/images/hsk2v3-bai-3-wb/q3a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-3-wb/q3b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-3-wb/q3c.jpg' }
          ], answer: 'A',
            script: '他今天不想出去，想在家休息休息。', vn: 'Hôm nay anh ấy không muốn ra ngoài, muốn ở nhà nghỉ ngơi một chút.' },
          { n: 4, part: 'Phần 2 · Nghe hội thoại, chọn tranh phù hợp', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-3-wb/q4to6_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-3-wb/q4to6_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-3-wb/q4to6_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-3-wb/q4to6_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], answer: 'A',
            script: '女：饭做好了，你过来吃饭吧。\n男：好，我去洗洗手。', vn: 'Nữ: Cơm nấu xong rồi, anh qua ăn cơm đi.\nNam: Ừ, anh đi rửa tay đã.' },
          { n: 5, letters: ['A', 'B', 'C', 'D'], answer: 'B',
            script: '男：星期天你出去玩了吗？\n女：出去了，我和朋友一起去唱歌了。', vn: 'Nam: Chủ nhật bạn có ra ngoài chơi không?\nNữ: Có, mình đi hát với bạn.' },
          { n: 6, letters: ['A', 'B', 'C', 'D'], answer: 'C',
            script: '女：每天都是您送我上学，为什么不让妈妈送我啊？\n男：她工作太忙，没时间。', vn: 'Nữ: Ngày nào cũng là bố đưa con đi học, sao không để mẹ đưa con ạ?\nNam: Mẹ bận việc quá, không có thời gian.' },
          { n: 7, part: 'Phần 3 · Nghe hội thoại, chọn đáp án đúng', options: [
            { key: 'A', text: '书店', py: 'shūdiàn' },
            { key: 'B', text: '教室', py: 'jiàoshì' },
            { key: 'C', text: '家里', py: 'jiā li' }
          ], answer: 'C',
            script: '女：别写了，生病的时候要多休息，别太累。\n男：好的，写完这几个字我就去我房间休息。\n问：他们现在在哪儿？', vn: 'Nữ: Đừng viết nữa, lúc ốm phải nghỉ ngơi nhiều, đừng mệt quá.\nNam: Vâng, viết xong mấy chữ này con sẽ về phòng mình nghỉ.\nHỏi: Bây giờ họ đang ở đâu? → ở nhà (về "phòng của mình").' },
          { n: 8, options: [
            { key: 'A', text: '上课了', py: 'shàngkè le' },
            { key: 'B', text: '听歌了', py: 'tīng gē le' },
            { key: 'C', text: '看电影了', py: 'kàn diànyǐng le' }
          ], answer: 'C',
            script: '男：这个中文电影很不错，你都听懂了吗？\n女：听懂了一点儿。\n问：他们做什么了？', vn: 'Nam: Bộ phim tiếng Trung này hay lắm, bạn nghe hiểu hết không?\nNữ: Hiểu được một chút.\nHỏi: Họ đã làm gì? → xem phim.' },
          { n: 9, options: [
            { key: 'A', text: '鸡蛋', py: 'jīdàn' },
            { key: 'B', text: '包子', py: 'bāozi' },
            { key: 'C', text: '面包', py: 'miànbāo' }
          ], answer: 'B',
            script: '女：昨天晚上睡好了吗？\n男：睡好了。\n女：快来吃早饭吧！有鸡蛋、面包和牛奶。\n男：昨天的包子还有吗？我想吃包子。\n问：男的想吃什么？', vn: 'Nữ: Tối qua ngủ ngon không?\nNam: Ngon ạ.\nNữ: Mau ra ăn sáng đi! Có trứng, bánh mì và sữa.\nNam: Bánh bao hôm qua còn không ạ? Con muốn ăn bánh bao.\nHỏi: Người nam muốn ăn gì?' },
          { n: 10, options: [
            { key: 'A', text: '手里', py: 'shǒu li' },
            { key: 'B', text: '椅子上', py: 'yǐzi shang' },
            { key: 'C', text: '桌子上', py: 'zhuōzi shang' }
          ], answer: 'A',
            script: '男：你看见我的手机了吗？\n女：没看见，没在桌子上吗？\n男：桌子上、椅子上我都找了，没有。\n女：你看看，你手里是什么？\n问：手机在哪儿？', vn: 'Nam: Em có thấy điện thoại của anh không?\nNữ: Không thấy, không ở trên bàn à?\nNam: Trên bàn, trên ghế anh tìm hết rồi, không có.\nNữ: Anh nhìn xem, trong tay anh là cái gì?\nHỏi: Điện thoại ở đâu? → trong tay.' }
        ],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn tranh phù hợp với câu', bank: [
            { key: 'A', img: '/images/hsk2v3-bai-3-wb/q11to13_a.jpg' },
            { key: 'B', img: '/images/hsk2v3-bai-3-wb/q11to13_b.jpg' },
            { key: 'C', img: '/images/hsk2v3-bai-3-wb/q11to13_c.jpg' },
            { key: 'D', img: '/images/hsk2v3-bai-3-wb/q11to13_d.jpg' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '去洗洗手吧，洗完手来吃饭。', promptPy: 'Qù xǐxi shǒu ba, xǐwán shǒu lái chī fàn.', answer: 'B',
            vn: 'Đi rửa tay đi, rửa tay xong thì vào ăn cơm. — Tranh B: đang rửa tay.' },
          { n: 12, letters: ['A', 'B', 'C', 'D'], prompt: '不到五点，她就做完工作了。', promptPy: 'Bú dào wǔ diǎn, tā jiù zuòwán gōngzuò le.', answer: 'A',
            vn: 'Chưa đến 5 giờ cô ấy đã làm xong việc rồi. — Tranh A: cô gái vươn vai bên máy tính, vừa xong việc.' },
          { n: 13, letters: ['A', 'B', 'C', 'D'], prompt: '这家饭店的菜很不错，你看看想吃什么。', promptPy: 'Zhè jiā fàndiàn de cài hěn búcuò, nǐ kànkan xiǎng chī shénme.', answer: 'C',
            vn: 'Món ăn của nhà hàng này rất ngon, bạn xem muốn ăn gì nhé. — Tranh C: hai người xem thực đơn trong nhà hàng.' },
          { n: 14, part: 'Phần 2 · Chọn từ điền vào chỗ trống', bank: [
            { key: 'A', text: '每', py: 'měi' },
            { key: 'B', text: '自己', py: 'zìjǐ' },
            { key: 'C', text: '这么', py: 'zhème' },
            { key: 'D', text: '出去', py: 'chūqù' },
            { key: 'E', text: '完', py: 'wán' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '学校里（　）间教室都有学生在上课。', promptPy: 'Xuéxiào li (　) jiān jiàoshì dōu yǒu xuésheng zài shàngkè.', answer: 'A',
            vn: 'Trong trường, phòng học nào cũng có học sinh đang học. — 每 + lượng từ (间) + danh từ, đi với 都.' },
          { n: 15, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '这几天工作忙，我都是早上七点多（　），晚上八点多回来的。', promptPy: 'Zhè jǐ tiān gōngzuò máng, wǒ dōu shì zǎoshang qī diǎn duō (　), wǎnshang bā diǎn duō huílai de.', answer: 'D',
            vn: 'Mấy hôm nay công việc bận, sáng nào tôi cũng hơn 7 giờ ra khỏi nhà, tối hơn 8 giờ mới về. — 出去 (đi ra ngoài) đối với 回来 (trở về).' },
          { n: 16, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '女：在我们学校，20多块钱就能看个电影。\n男：学校电影院的电影票（　）便宜啊！', promptPy: 'Zài wǒmen xuéxiào, 20 duō kuài qián jiù néng kàn gè diànyǐng. / Xuéxiào diànyǐngyuàn de diànyǐngpiào (　) piányi a!', answer: 'C',
            vn: 'Nữ: Ở trường mình, hơn 20 đồng là xem được một bộ phim.\nNam: Vé xem phim ở rạp của trường rẻ thế cơ à! — 这么 + tính từ: … thế, … như vậy.' },
          { n: 17, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '男：今天接你吗？\n女：今天下班后我（　）回去，你别来接我了。', promptPy: 'Jīntiān jiē nǐ ma? / Jīntiān xiàbān hòu wǒ (　) huíqù, nǐ bié lái jiē wǒ le.', answer: 'B',
            vn: 'Nam: Hôm nay có cần đón em không?\nNữ: Hôm nay tan làm em tự về, anh đừng đến đón em nữa. — 自己回去: tự về, không cần người đón.' },
          { n: 18, part: 'Phần 3 · Ghép câu hỏi với câu trả lời', bank: [
            { key: 'A', text: '她去医院看病了。', py: 'Tā qù yīyuàn kànbìng le.' },
            { key: 'B', text: '我这个星期工作太多了。', py: 'Wǒ zhège xīngqī gōngzuò tài duō le.' },
            { key: 'C', text: '给我吧，我去洗一洗。', py: 'Gěi wǒ ba, wǒ qù xǐ yi xǐ.' },
            { key: 'D', text: '是的，今天的菜非常好吃。', py: 'Shì de, jīntiān de cài fēicháng hǎochī.' },
            { key: 'E', text: '他出去了，一会儿就回来。', py: 'Tā chūqù le, yíhuìr jiù huílai.' }
          ], letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你们都吃好了吗？', promptPy: 'Nǐmen dōu chīhǎole ma?', answer: 'D',
            vn: 'Các bạn đều ăn xong cả chưa? — D: Rồi, món hôm nay rất ngon.' },
          { n: 19, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '家月为什么没有来上课？', promptPy: 'Jiāyuè wèi shénme méiyǒu lái shàngkè?', answer: 'A',
            vn: 'Sao Gia Nguyệt không đến lớp? — A: Bạn ấy đi bệnh viện khám bệnh rồi (hỏi lý do → trả lời lý do; 她 = Gia Nguyệt).' },
          { n: 20, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你看，我今天买了这么多苹果。', promptPy: 'Nǐ kàn, wǒ jīntiān mǎile zhème duō píngguǒ.', answer: 'C',
            vn: 'Nhìn này, hôm nay tôi mua nhiều táo thế này. — C: Đưa tôi, tôi đi rửa một chút.' },
          { n: 21, letters: ['A', 'B', 'C', 'D', 'E'], prompt: '你为什么每天都这么晚回来啊？', promptPy: 'Nǐ wèi shénme měi tiān dōu zhème wǎn huílai a?', answer: 'B',
            vn: 'Sao ngày nào anh cũng về muộn thế? — B: Tuần này anh nhiều việc quá.' },
          { n: 22, part: 'Phần 4 · Đọc đoạn văn, chọn đáp án đúng', prompt: '我这几天看完了一本书。这本书很不错，我想给我的学生们介绍一下，让他们也看看。\n★他想让谁看看那本书？', promptPy: 'Wǒ zhè jǐ tiān kànwánle yì běn shū. Zhè běn shū hěn búcuò, wǒ xiǎng gěi wǒ de xuéshengmen jièshào yíxià, ràng tāmen yě kànkan. / Tā xiǎng ràng shéi kànkan nà běn shū?', options: [
            { key: 'A', text: '朋友', py: 'péngyou' },
            { key: 'B', text: '学生', py: 'xuésheng' },
            { key: 'C', text: '老师', py: 'lǎoshī' }
          ], answer: 'B',
            vn: 'Mấy hôm nay tôi đọc xong một cuốn sách. Cuốn này rất hay, tôi muốn giới thiệu cho học sinh của mình để các em cũng đọc. ★ Anh ấy muốn để ai đọc cuốn sách đó? → học sinh (我的学生们).' },
          { n: 23, prompt: '我买了这个星期六的电影票，想和女朋友一起去看电影，但她公司有事，我就和同学去看电影了。\n★他是和谁一起看的电影？', promptPy: 'Wǒ mǎile zhège Xīngqīliù de diànyǐngpiào, xiǎng hé nǚpéngyou yìqǐ qù kàn diànyǐng, dàn tā gōngsī yǒu shì, wǒ jiù hé tóngxué qù kàn diànyǐng le. / Tā shì hé shéi yìqǐ kàn de diànyǐng?', options: [
            { key: 'A', text: '自己', py: 'zìjǐ' },
            { key: 'B', text: '同学', py: 'tóngxué' },
            { key: 'C', text: '女朋友', py: 'nǚpéngyou' }
          ], answer: 'B',
            vn: 'Tôi mua vé xem phim thứ Bảy này, định đi xem với bạn gái, nhưng công ty cô ấy có việc nên tôi đi xem với bạn học. ★ Anh ấy xem phim với ai? → bạn học (bạn gái bận nên không đi).' },
          { n: 24, prompt: '我是和朋友一起来北京旅游的。昨天我们到北京大学看了看。北京大学很大，人也很多。网上说有三千多名外国学生在这里学习。\n★他到北京大学做什么？', promptPy: 'Wǒ shì hé péngyou yìqǐ lái Běijīng lǚyóu de. Zuótiān wǒmen dào Běijīng Dàxué kànle kàn. Běijīng Dàxué hěn dà, rén yě hěn duō. Wǎngshang shuō yǒu sānqiān duō míng wàiguó xuésheng zài zhèlǐ xuéxí. / Tā dào Běijīng Dàxué zuò shénme?', options: [
            { key: 'A', text: '旅游', py: 'lǚyóu' },
            { key: 'B', text: '学习', py: 'xuéxí' },
            { key: 'C', text: '看朋友', py: 'kàn péngyou' }
          ], answer: 'A',
            vn: 'Tôi cùng bạn đến Bắc Kinh du lịch. Hôm qua chúng tôi đến Đại học Bắc Kinh tham quan. Trường rất rộng, người cũng đông. Trên mạng nói có hơn 3000 sinh viên nước ngoài học ở đây. ★ Anh ấy đến Đại học Bắc Kinh làm gì? → du lịch, tham quan (người học ở đó là sinh viên nước ngoài, không phải anh ấy).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Chọn bộ phận ghép thành chữ', bank: [
            { key: 'A', text: '辶' }, { key: 'B', text: '宀' }, { key: 'C', text: '氵' }, { key: 'D', text: '十' }
          ], letters: ['A', 'B', 'C', 'D'], prompt: '（关）你 — sòng nǐ', answer: 'A', vn: '送 = 辶 + 关 → 送你 (đưa bạn, tiễn bạn)' },
          { n: 26, letters: ['A', 'B', 'C', 'D'], prompt: '（先）手 — xǐ shǒu', answer: 'C', vn: '洗 = 氵 + 先 → 洗手 (rửa tay)' },
          { n: 27, letters: ['A', 'B', 'C', 'D'], prompt: '写（元）— xiě wán', answer: 'B', vn: '完 = 宀 + 元 → 写完 (viết xong)' },
          { n: 28, part: 'Viết · Phần 2 · Viết chữ Hán theo pinyin', input: true, prompt: '你今天（ wèi ）什么来晚了？', promptPy: 'Nǐ jīntiān wèi shénme láiwǎn le?', answer: '为', vn: 'Hôm nay sao bạn đến muộn? — 为什么: tại sao.' },
          { n: 29, input: true, prompt: '外边（ zhè ）么热，我们还是回去吧。', promptPy: 'Wàibian zhème rè, wǒmen háishi huíqù ba.', answer: '这', vn: 'Bên ngoài nóng thế này, chúng ta về thôi. — 这么: thế này.' },
          { n: 30, input: true, prompt: '这个电影很（ bú ）错，你也可以看看。', promptPy: 'Zhège diànyǐng hěn búcuò, nǐ yě kěyǐ kànkan.', answer: '不', vn: 'Bộ phim này rất hay, bạn cũng có thể xem thử. — 不错: hay, khá tốt.' }
        ] }
    ]}
  ]
};
