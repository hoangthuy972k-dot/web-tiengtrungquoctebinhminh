// HSK 2 (3.0 Mới) · Bài 6 · 小雪，生日快乐！
// Nguồn: Giáo trình New HSK 2 (bản Trung - Việt), bài 6, trang 046-055.

var vocabData = [
  {
    "n": 1,
    "zh": "生日",
    "py": "shēngrì",
    "pos": "Danh từ",
    "vn": "sinh nhật",
    "hv": "sinh nhật",
    "em": "🎂",
    "img": "/images/hsk2v3-bai-6/shengri.jpg",
    "lesson": 1,
    "ex_zh": "明天就是女儿的生日了。",
    "ex_py": "Míngtiān jiù shì nǚ’ér de shēngrì le.",
    "ex_vn": "Ngày mai là sinh nhật con gái rồi.",
    "exList": [
      {
        "zh": "明天就是女儿的生日了。",
        "py": "Míngtiān jiù shì nǚ’ér de shēngrì le.",
        "vn": "Ngày mai là sinh nhật con gái rồi."
      },
      {
        "zh": "小雪，生日快乐！",
        "py": "Xiǎoxuě, shēngrì kuàilè!",
        "vn": "Tiểu Tuyết, chúc mừng sinh nhật!"
      }
    ],
    "hanzi": [
      {
        "c": "生",
        "p": "shēng",
        "type": "象形字 · Chữ tượng hình",
        "st": 5,
        "ord": "丿 → 一 → 一 → 丨 → 一",
        "rad": "生 (sinh)",
        "mean": "sinh, sống",
        "tip": "Hình cây non mọc lên khỏi mặt đất — nghĩa \"sinh ra\".",
        "cf": "",
        "w": "生日 / 学生 / 生病"
      }
    ],
    "colloFull": [
      {
        "zh": "过生日",
        "py": "guo shēngrì",
        "vn": "mừng sinh nhật"
      },
      {
        "zh": "生日快乐",
        "py": "shēngrì kuàilè",
        "vn": "chúc mừng sinh nhật"
      },
      {
        "zh": "生日礼物",
        "py": "shēngrì lǐwù",
        "vn": "quà sinh nhật"
      },
      {
        "zh": "生日蛋糕",
        "py": "shēngrì dàngāo",
        "vn": "bánh sinh nhật"
      }
    ],
    "patterns": [
      {
        "s": "过 + 生日",
        "m": "Mừng sinh nhật — dùng động từ 过"
      },
      {
        "s": "生日快乐！là câu chúc quen thuộc nhất"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là sinh nhật em gái tôi.",
        "answer": "今天是我妹妹的生日。",
        "answerPy": "Jīntiān shì wǒ mèimei de shēngrì.",
        "note": "生日 — sinh nhật.",
        "pair": "是……"
      },
      {
        "promptLang": "vi",
        "prompt": "Chủ nhật chúng tôi mừng sinh nhật bà.",
        "answer": "星期天我们给奶奶过生日。",
        "answerPy": "Xīngqītiān wǒmen gěi nǎinai guò shēngrì.",
        "note": "过生日 — mừng sinh nhật, dùng động từ 过.",
        "pair": "给……过生日"
      }
    ]
  },
  {
    "n": 2,
    "zh": "忘",
    "py": "wàng",
    "pos": "Động từ",
    "vn": "quên",
    "hv": "vong",
    "em": "🤦",
    "img": "/images/hsk2v3-bai-6/wang.jpg",
    "lesson": 1,
    "ex_zh": "你不说，我还真忘了。",
    "ex_py": "Nǐ bù shuō, wǒ hái zhēn wàng le.",
    "ex_vn": "Nếu em không nhắc thì anh đã quên mất rồi.",
    "exList": [
      {
        "zh": "你不说，我还真忘了。",
        "py": "Nǐ bù shuō, wǒ hái zhēn wàng le.",
        "vn": "Nếu em không nhắc thì anh đã quên mất rồi."
      },
      {
        "zh": "别忘了带礼物。",
        "py": "Bié wàngle dài lǐwù.",
        "vn": "Đừng quên mang quà nhé."
      }
    ],
    "hanzi": [
      {
        "c": "忘",
        "p": "wàng",
        "type": "形声字 · Chữ hình thanh",
        "st": 7,
        "ord": "亡 → 心",
        "rad": "心 (tâm – trái tim)",
        "mean": "quên",
        "tip": "亡 (mất) + 心 (tim): điều rơi khỏi trái tim — tức là quên.",
        "cf": "",
        "w": "忘了 / 别忘 / 忘记"
      }
    ],
    "colloFull": [
      {
        "zh": "别忘了",
        "py": "bié wàng le",
        "vn": "đừng quên"
      },
      {
        "zh": "忘了",
        "py": "wàng le",
        "vn": "quên rồi"
      },
      {
        "zh": "忘了带",
        "py": "wàng le dài",
        "vn": "quên mang"
      },
      {
        "zh": "我忘了",
        "py": "wǒ wàng le",
        "vn": "tôi quên rồi"
      }
    ],
    "patterns": [
      {
        "s": "忘 + 了",
        "m": "Quên rồi — 了 cho thấy việc vừa xảy ra"
      },
      {
        "s": "别忘了 + việc",
        "m": "Đừng quên việc gì: 别忘了带礼物"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Đừng quên mang quà sinh nhật nhé.",
        "answer": "别忘了带生日礼物。",
        "answerPy": "Bié wàng le dài shēngrì lǐwù.",
        "note": "别忘了 + việc — đừng quên việc gì.",
        "pair": "别忘了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Xin lỗi, tôi quên mất rồi.",
        "answer": "对不起，我忘了。",
        "answerPy": "Duìbuqǐ, wǒ wàng le.",
        "note": "了 cho thấy việc vừa xảy ra.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 3,
    "zh": "画",
    "py": "huà",
    "pos": "Động từ / Danh từ",
    "vn": "vẽ; bức tranh",
    "hv": "họa",
    "em": "🎨",
    "img": "/images/hsk2v3-bai-6/hua.jpg",
    "lesson": 1,
    "ex_zh": "她喜欢画画。",
    "ex_py": "Tā xǐhuan huà huà.",
    "ex_vn": "Con bé thích vẽ tranh.",
    "exList": [
      {
        "zh": "她喜欢画画。",
        "py": "Tā xǐhuan huà huà.",
        "vn": "Con bé thích vẽ tranh."
      },
      {
        "zh": "我要画一个穿白色衣服的姐姐。",
        "py": "Wǒ yào huà yí ge chuān báisè yīfu de jiějie.",
        "vn": "Em muốn vẽ một chị gái mặc quần áo màu trắng."
      }
    ],
    "hanzi": [
      {
        "c": "画",
        "p": "huà",
        "type": "会意字 · Chữ hội ý",
        "st": 8,
        "ord": "一 → 田 → 凵",
        "rad": "田 (điền – ruộng)",
        "mean": "vẽ, tranh",
        "tip": "Vốn là hình cây bút vạch ranh giới thửa ruộng.",
        "cf": "",
        "w": "画画 / 画笔 / 一张画"
      }
    ],
    "colloFull": [
      {
        "zh": "画画儿",
        "py": "huàhuà ér",
        "vn": "vẽ tranh"
      },
      {
        "zh": "喜欢画",
        "py": "xǐhuan huà",
        "vn": "thích vẽ"
      },
      {
        "zh": "画得很好",
        "py": "huà de hěn hǎo",
        "vn": "vẽ rất đẹp"
      },
      {
        "zh": "一张画儿",
        "py": "yì zhāng huà ér",
        "vn": "một bức tranh"
      }
    ],
    "patterns": [
      {
        "s": "画 + 画儿",
        "m": "Vẽ tranh — 画 vừa là động từ vừa là danh từ"
      },
      {
        "s": "画得 + Adj",
        "m": "Vẽ thế nào: 画得很好"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi rất thích vẽ tranh.",
        "answer": "我妹妹很喜欢画画儿。",
        "answerPy": "Wǒ mèimei hěn xǐhuan huà huàr.",
        "note": "画画儿 — vẽ tranh.",
        "pair": "喜欢 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bức tranh này bạn vẽ đẹp thật.",
        "answer": "这张画儿你画得真好。",
        "answerPy": "Zhè zhāng huàr nǐ huà de zhēn hǎo.",
        "note": "画得很好 — vẽ rất đẹp.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 4,
    "zh": "画笔",
    "py": "huàbǐ",
    "pos": "Danh từ",
    "vn": "bút vẽ, bút màu",
    "hv": "họa bút",
    "em": "🖍️",
    "img": "/images/hsk2v3-bai-6/huabi.jpg",
    "lesson": 1,
    "ex_zh": "你觉得画笔怎么样？",
    "ex_py": "Nǐ juéde huàbǐ zěnmeyàng?",
    "ex_vn": "Anh thấy tặng bút vẽ màu có được không?",
    "exList": [
      {
        "zh": "你觉得画笔怎么样？",
        "py": "Nǐ juéde huàbǐ zěnmeyàng?",
        "vn": "Anh thấy tặng bút vẽ màu có được không?"
      },
      {
        "zh": "画笔！我很喜欢！",
        "py": "Huàbǐ! Wǒ hěn xǐhuan!",
        "vn": "Bút vẽ à, con rất thích ạ!"
      }
    ],
    "hanzi": [
      {
        "c": "笔",
        "p": "bǐ",
        "type": "会意字 · Chữ hội ý",
        "st": 10,
        "ord": "⺮ → 毛",
        "rad": "⺮ (trúc – tre)",
        "mean": "bút",
        "tip": "竹 (tre) + 毛 (lông): bút lông cán tre.",
        "cf": "",
        "w": "画笔 / 铅笔 / 笔记本"
      }
    ],
    "colloFull": [
      {
        "zh": "我的画笔",
        "py": "wǒ de huàbǐ",
        "vn": "cọ vẽ của tôi"
      },
      {
        "zh": "买画笔",
        "py": "mǎi huàbǐ",
        "vn": "mua cọ vẽ"
      },
      {
        "zh": "用画笔画",
        "py": "yòng huàbǐ huà",
        "vn": "dùng cọ để vẽ"
      },
      {
        "zh": "画笔和书包",
        "py": "huàbǐ hé shūbāo",
        "vn": "cọ vẽ và cặp sách"
      }
    ],
    "patterns": [
      {
        "s": "画 + 笔",
        "m": "Cây bút (笔) để vẽ (画)"
      },
      {
        "s": "画 + 笔 — cùng chữ 笔 với các loại bút khác"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua cho em gái một bộ cọ vẽ.",
        "answer": "我想给妹妹买画笔。",
        "answerPy": "Wǒ xiǎng gěi mèimei mǎi huàbǐ.",
        "note": "画 + 笔 — cây bút để vẽ.",
        "pair": "给……买"
      },
      {
        "promptLang": "vi",
        "prompt": "Em ấy dùng cọ vẽ tranh.",
        "answer": "她用画笔画画儿。",
        "answerPy": "Tā yòng huàbǐ huà huàr.",
        "note": "用 + công cụ + động từ.",
        "pair": "用……V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "蛋糕",
    "py": "dàngāo",
    "pos": "Danh từ",
    "vn": "bánh kem, bánh ga tô",
    "hv": "đản cao",
    "em": "🍰",
    "img": "/images/hsk2v3-bai-6/dangao.jpg",
    "lesson": 1,
    "ex_zh": "我再给她买个大大的生日蛋糕。",
    "ex_py": "Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.",
    "ex_vn": "Anh cũng sẽ mua thêm cho con một chiếc bánh sinh nhật to.",
    "exList": [
      {
        "zh": "我再给她买个大大的生日蛋糕。",
        "py": "Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.",
        "vn": "Anh cũng sẽ mua thêm cho con một chiếc bánh sinh nhật to."
      },
      {
        "zh": "长长的面条儿，大大的蛋糕。",
        "py": "Chángcháng de miàntiáor, dàdà de dàngāo.",
        "vn": "Mì sợi dài và chiếc bánh ga tô lớn."
      }
    ],
    "hanzi": [
      {
        "c": "蛋",
        "p": "dàn",
        "type": "形声字 · Chữ hình thanh",
        "st": 11,
        "ord": "疋 → 虫",
        "rad": "虫 (trùng)",
        "mean": "trứng",
        "tip": "蛋糕 = bánh làm từ trứng.",
        "cf": "",
        "w": "蛋糕 / 鸡蛋"
      }
    ],
    "colloFull": [
      {
        "zh": "生日蛋糕",
        "py": "shēngrì dàngāo",
        "vn": "bánh sinh nhật"
      },
      {
        "zh": "吃蛋糕",
        "py": "chī dàngāo",
        "vn": "ăn bánh ga-tô"
      },
      {
        "zh": "做蛋糕",
        "py": "zuò dàngāo",
        "vn": "làm bánh"
      },
      {
        "zh": "一个蛋糕",
        "py": "yí gè dàngāo",
        "vn": "một cái bánh"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 做 + 蛋糕",
        "m": "Ăn, làm bánh ga-tô"
      },
      {
        "s": "蛋 + 糕",
        "m": "Bánh (糕) làm từ trứng (蛋) — cùng chữ 蛋 với 鸡蛋"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mẹ tôi làm một cái bánh sinh nhật.",
        "answer": "我妈妈做了一个生日蛋糕。",
        "answerPy": "Wǒ māma zuòle yí ge shēngrì dàngāo.",
        "note": "生日蛋糕 — bánh sinh nhật.",
        "pair": "……了……"
      },
      {
        "promptLang": "vi",
        "prompt": "Cái bánh này cực kỳ ngon.",
        "answer": "这个蛋糕非常好吃。",
        "answerPy": "Zhège dàngāo fēicháng hǎochī.",
        "note": "蛋 + 糕 — bánh làm từ trứng.",
        "pair": "非常 + Adj"
      }
    ]
  },
  {
    "n": 6,
    "zh": "快乐",
    "py": "kuàilè",
    "pos": "Tính từ",
    "vn": "vui vẻ",
    "hv": "khoái lạc",
    "em": "😄",
    "img": "/images/hsk2v3-bai-6/kuaile.jpg",
    "lesson": 2,
    "ex_zh": "小雪，生日快乐！",
    "ex_py": "Xiǎoxuě, shēngrì kuàilè!",
    "ex_vn": "Tiểu Tuyết, chúc mừng sinh nhật!",
    "exList": [
      {
        "zh": "小雪，生日快乐！",
        "py": "Xiǎoxuě, shēngrì kuàilè!",
        "vn": "Tiểu Tuyết, chúc mừng sinh nhật!"
      },
      {
        "zh": "这是很忙、很累，但很快乐的一天。",
        "py": "Zhè shì hěn máng, hěn lèi, dàn hěn kuàilè de yì tiān.",
        "vn": "Hôm nay là một ngày rất bận rộn và rất mệt, nhưng cũng rất vui."
      }
    ],
    "hanzi": [
      {
        "c": "乐",
        "p": "lè",
        "type": "象形字 · Chữ tượng hình",
        "st": 5,
        "ord": "丿 → 乛 → 小",
        "rad": "丿 (phiệt)",
        "mean": "vui; (yuè) nhạc",
        "tip": "Đọc lè = vui; đọc yuè = âm nhạc (音乐).",
        "cf": "",
        "w": "快乐 / 生日快乐 / 音乐 (yuè)"
      }
    ],
    "colloFull": [
      {
        "zh": "生日快乐",
        "py": "shēngrì kuàilè",
        "vn": "sinh nhật vui vẻ"
      },
      {
        "zh": "很快乐",
        "py": "hěn kuàilè",
        "vn": "rất vui"
      },
      {
        "zh": "快乐的一天",
        "py": "kuàilè de yì tiān",
        "vn": "một ngày vui vẻ"
      },
      {
        "zh": "不快乐",
        "py": "bú kuàilè",
        "vn": "không vui"
      }
    ],
    "patterns": [
      {
        "s": "生日快乐！",
        "m": "Chúc mừng sinh nhật — câu chúc quen thuộc nhất"
      },
      {
        "s": "快乐 (vui, hạnh phúc) và 高兴 (vui trong lúc này)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chúc mừng sinh nhật!",
        "answer": "生日快乐！",
        "answerPy": "Shēngrì kuàilè!",
        "note": "Câu chúc quen thuộc nhất.",
        "pair": "生日快乐！"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay là một ngày rất vui.",
        "answer": "今天是很快乐的一天。",
        "answerPy": "Jīntiān shì hěn kuàilè de yì tiān.",
        "note": "快乐 (hạnh phúc) và 高兴 (vui trong lúc này).",
        "pair": "是……"
      }
    ]
  },
  {
    "n": 7,
    "zh": "打开",
    "py": "dǎkāi",
    "pos": "Động từ",
    "vn": "mở ra, bóc ra",
    "hv": "đả khai",
    "em": "📂",
    "img": "/images/hsk2v3-bai-6/dakai.jpg",
    "lesson": 2,
    "ex_zh": "你打开看看喜欢不喜欢。",
    "ex_py": "Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.",
    "ex_vn": "Con mở ra xem có thích không.",
    "exList": [
      {
        "zh": "你打开看看喜欢不喜欢。",
        "py": "Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.",
        "vn": "Con mở ra xem có thích không."
      },
      {
        "zh": "请打开书，我们看第一课。",
        "py": "Qǐng dǎkāi shū, wǒmen kàn dì-yī kè.",
        "vn": "Mời mở sách ra, chúng ta xem bài 1."
      }
    ],
    "hanzi": [
      {
        "c": "开",
        "p": "kāi",
        "type": "会意字 · Chữ hội ý",
        "st": 4,
        "ord": "一 → 丌",
        "rad": "廾 (củng)",
        "mean": "mở; lái; bật",
        "tip": "打开 = mở ra (hộp, sách, cửa, đèn).",
        "cf": "关 (guān – đóng, tắt)",
        "w": "打开 / 开门 / 开车"
      }
    ],
    "colloFull": [
      {
        "zh": "打开礼物",
        "py": "dǎkāi lǐwù",
        "vn": "mở quà"
      },
      {
        "zh": "打开门",
        "py": "dǎkāi mén",
        "vn": "mở cửa"
      },
      {
        "zh": "打开电脑",
        "py": "dǎkāi diànnǎo",
        "vn": "mở máy tính"
      },
      {
        "zh": "打开书",
        "py": "dǎkāi shū",
        "vn": "mở sách"
      }
    ],
    "patterns": [
      {
        "s": "打开 + đồ vật",
        "m": "Mở cái gì ra: 打开礼物"
      },
      {
        "s": "打 + 开",
        "m": "Dùng tay (打) làm cho mở ra (开)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn mở món quà ra xem đi.",
        "answer": "你打开礼物看看吧。",
        "answerPy": "Nǐ dǎkāi lǐwù kànkan ba.",
        "note": "打开 + đồ vật — mở cái gì ra.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Trời nóng quá, bạn mở cửa ra đi.",
        "answer": "太热了，你打开门吧。",
        "answerPy": "Tài rè le, nǐ dǎkāi mén ba.",
        "note": "打开门 — mở cửa.",
        "pair": "太……了"
      }
    ]
  },
  {
    "n": 8,
    "zh": "长",
    "py": "cháng",
    "pos": "Tính từ",
    "vn": "dài",
    "hv": "trường",
    "em": "📏",
    "img": "/images/hsk2v3-bai-6/chang.jpg",
    "lesson": 3,
    "ex_zh": "长长的面条儿。",
    "ex_py": "Chángcháng de miàntiáor.",
    "ex_vn": "Mì sợi dài.",
    "exList": [
      {
        "zh": "长长的面条儿。",
        "py": "Chángcháng de miàntiáor.",
        "vn": "Mì sợi dài."
      },
      {
        "zh": "因为面条儿长长的，寓意“长寿”。",
        "py": "Yīnwèi miàntiáor chángcháng de, yùyì “chángshòu”.",
        "vn": "Vì mì sợi dài nên có ngụ ý \"trường thọ\"."
      }
    ],
    "hanzi": [
      {
        "c": "长",
        "p": "cháng",
        "type": "象形字 · Chữ tượng hình",
        "st": 4,
        "ord": "丿 → 一 → 丨 → 乀",
        "rad": "长 (trường)",
        "mean": "dài; (zhǎng) lớn lên",
        "tip": "Đọc cháng = dài; đọc zhǎng = lớn lên, trưởng (校长).",
        "cf": "短 (duǎn – ngắn)",
        "w": "长长的 / 很长 / 校长 (zhǎng)"
      }
    ],
    "colloFull": [
      {
        "zh": "很长",
        "py": "hěn zhǎng",
        "vn": "rất dài"
      },
      {
        "zh": "长裤子",
        "py": "zhǎng kùzi",
        "vn": "quần dài"
      },
      {
        "zh": "长时间",
        "py": "zhǎng shíjiān",
        "vn": "thời gian dài"
      },
      {
        "zh": "不长",
        "py": "bù zhǎng",
        "vn": "không dài"
      }
    ],
    "patterns": [
      {
        "s": "很 + 长",
        "m": "Rất dài — nói về vật, về thời gian"
      },
      {
        "s": "长 ↔ 短",
        "m": "Dài ↔ ngắn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái quần này hơi dài.",
        "answer": "这条裤子有点儿长。",
        "answerPy": "Zhè tiáo kùzi yǒudiǎnr cháng.",
        "note": "有点儿 mang ý không hài lòng.",
        "pair": "有点儿 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Vì đường quá dài nên chúng tôi bắt taxi.",
        "answer": "因为路很长，所以我们打车。",
        "answerPy": "Yīnwèi lù hěn cháng, suǒyǐ wǒmen dǎchē.",
        "note": "长 ↔ 短 — dài và ngắn.",
        "pair": "因为……所以……"
      }
    ]
  },
  {
    "n": 9,
    "zh": "鱼",
    "py": "yú",
    "pos": "Danh từ",
    "vn": "cá",
    "hv": "ngư",
    "em": "🐟",
    "img": "/images/hsk2v3-bai-6/yu.jpg",
    "lesson": 3,
    "ex_zh": "你看，还有鱼啊肉啊什么的。",
    "ex_py": "Nǐ kàn, hái yǒu yú a ròu a shénmede.",
    "ex_vn": "Con nhìn xem, còn có cá, thịt và những món khác nữa.",
    "exList": [
      {
        "zh": "你看，还有鱼啊肉啊什么的。",
        "py": "Nǐ kàn, hái yǒu yú a ròu a shénmede.",
        "vn": "Con nhìn xem, còn có cá, thịt và những món khác nữa."
      },
      {
        "zh": "我们做了鱼啊肉啊什么的。",
        "py": "Wǒmen zuòle yú a ròu a shénmede.",
        "vn": "Chúng tôi làm các món như cá, thịt…"
      }
    ],
    "hanzi": [
      {
        "c": "鱼",
        "p": "yú",
        "type": "象形字 · Chữ tượng hình",
        "st": 8,
        "ord": "⺈ → 田 → 一",
        "rad": "鱼 (ngư – cá)",
        "mean": "cá",
        "tip": "Vốn là hình con cá với đầu, thân, đuôi.",
        "cf": "",
        "w": "鱼 / 吃鱼 / 小鱼"
      }
    ],
    "colloFull": [
      {
        "zh": "一条鱼",
        "py": "yì tiáo yú",
        "vn": "một con cá"
      },
      {
        "zh": "吃鱼",
        "py": "chī yú",
        "vn": "ăn cá"
      },
      {
        "zh": "买鱼",
        "py": "mǎi yú",
        "vn": "mua cá"
      },
      {
        "zh": "做鱼",
        "py": "zuò yú",
        "vn": "nấu cá"
      }
    ],
    "patterns": [
      {
        "s": "một + 条 + 鱼",
        "m": "Lượng từ của 鱼 là 条"
      },
      {
        "s": "鱼 là chữ tượng hình — bốn chấm dưới là đuôi cá"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối nay mẹ tôi nấu cá.",
        "answer": "今天晚上我妈妈做鱼。",
        "answerPy": "Jīntiān wǎnshang wǒ māma zuò yú.",
        "note": "Lượng từ của 鱼 là 条.",
        "pair": "做 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn mua hai con cá.",
        "answer": "我想买两条鱼。",
        "answerPy": "Wǒ xiǎng mǎi liǎng tiáo yú.",
        "note": "一条鱼 — một con cá.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 10,
    "zh": "肉",
    "py": "ròu",
    "pos": "Danh từ",
    "vn": "thịt",
    "hv": "nhục",
    "em": "🥩",
    "img": "/images/hsk2v3-bai-6/rou.jpg",
    "lesson": 3,
    "ex_zh": "还有鱼啊肉啊什么的。",
    "ex_py": "Hái yǒu yú a ròu a shénmede.",
    "ex_vn": "Còn có cá, thịt và những món khác.",
    "exList": [
      {
        "zh": "还有鱼啊肉啊什么的。",
        "py": "Hái yǒu yú a ròu a shénmede.",
        "vn": "Còn có cá, thịt và những món khác."
      },
      {
        "zh": "这些都是你喜欢吃的。",
        "py": "Zhèxiē dōu shì nǐ xǐhuan chī de.",
        "vn": "Tất cả đều là những món con thích ăn."
      }
    ],
    "hanzi": [
      {
        "c": "肉",
        "p": "ròu",
        "type": "象形字 · Chữ tượng hình",
        "st": 6,
        "ord": "冂 → 人 → 人",
        "rad": "肉 (nhục – thịt)",
        "mean": "thịt",
        "tip": "Làm bộ thủ thường viết 月 (nguyệt thịt): 脸、脚、胖.",
        "cf": "",
        "w": "肉 / 羊肉 / 牛肉"
      }
    ],
    "colloFull": [
      {
        "zh": "吃肉",
        "py": "chī ròu",
        "vn": "ăn thịt"
      },
      {
        "zh": "买肉",
        "py": "mǎi ròu",
        "vn": "mua thịt"
      },
      {
        "zh": "鱼和肉",
        "py": "yú hé ròu",
        "vn": "cá và thịt"
      },
      {
        "zh": "不吃肉",
        "py": "bù chī ròu",
        "vn": "không ăn thịt"
      }
    ],
    "patterns": [
      {
        "s": "吃 / 买 + 肉",
        "m": "Ăn, mua thịt"
      },
      {
        "s": "肉 là chữ tượng hình — các nét là thớ thịt"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em gái tôi không ăn thịt.",
        "answer": "我妹妹不吃肉。",
        "answerPy": "Wǒ mèimei bù chī ròu.",
        "note": "吃肉 — ăn thịt.",
        "pair": "不 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Món này có cả cá và thịt.",
        "answer": "这个菜有鱼和肉。",
        "answerPy": "Zhège cài yǒu yú hé ròu.",
        "note": "和 chỉ nối danh từ với danh từ.",
        "pair": "A 和 B"
      }
    ]
  },
  {
    "n": 11,
    "zh": "过",
    "py": "guò",
    "pos": "Động từ",
    "vn": "trải qua, đón (sinh nhật, Tết)",
    "hv": "quá",
    "em": "🎉",
    "img": "/images/hsk2v3-bai-6/guo.jpg",
    "lesson": 3,
    "ex_zh": "过生日真好啊！",
    "ex_py": "Guò shēngrì zhēn hǎo a!",
    "ex_vn": "Sinh nhật thật tuyệt!",
    "exList": [
      {
        "zh": "过生日真好啊！",
        "py": "Guò shēngrì zhēn hǎo a!",
        "vn": "Sinh nhật thật tuyệt!"
      },
      {
        "zh": "中国人过生日的时候一般要吃面条儿。",
        "py": "Zhōngguó rén guò shēngrì de shíhou yìbān yào chī miàntiáor.",
        "vn": "Khi tổ chức sinh nhật, người Trung Quốc thường ăn mì sợi."
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
        "mean": "qua; đón, trải qua",
        "tip": "过生日 = đón sinh nhật; 过年 = đón năm mới.",
        "cf": "",
        "w": "过生日 / 过年 / 过去"
      }
    ],
    "colloFull": [
      {
        "zh": "过生日",
        "py": "guo shēngrì",
        "vn": "mừng sinh nhật"
      },
      {
        "zh": "过新年",
        "py": "guo xīnnián",
        "vn": "đón năm mới"
      },
      {
        "zh": "过得很好",
        "py": "guo de hěn hǎo",
        "vn": "sống rất tốt"
      },
      {
        "zh": "过一天",
        "py": "guo yì tiān",
        "vn": "qua một ngày"
      }
    ],
    "patterns": [
      {
        "s": "过 + 生日 / 新年",
        "m": "Mừng, đón một dịp — 过 là ĐỘNG TỪ ở đây"
      },
      {
        "s": "过 (guò, trải qua) khác 过 (guo, đã từng — bài 4)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Sinh nhật bạn ăn mừng ở đâu?",
        "answer": "你的生日在哪里过？",
        "answerPy": "Nǐ de shēngrì zài nǎli guò?",
        "note": "过 ở đây là động từ, nghĩa là trải qua, ăn mừng.",
        "pair": "在哪里……？"
      },
      {
        "promptLang": "vi",
        "prompt": "Dạo này ông bà tôi sống rất tốt.",
        "answer": "我爷爷奶奶过得很好。",
        "answerPy": "Wǒ yéye nǎinai guò de hěn hǎo.",
        "note": "过得很好 — sống rất tốt.",
        "pair": "V + 得 + Adj"
      }
    ]
  },
  {
    "n": 12,
    "zh": "地",
    "py": "de",
    "pos": "Trợ từ",
    "vn": "trợ từ nối trạng ngữ với động từ",
    "hv": "địa",
    "em": "🔗",
    "lesson": 3,
    "ex_zh": "还要高高兴兴地玩。",
    "ex_py": "Hái yào gāogāoxìngxìng de wán.",
    "ex_vn": "Còn phải chơi thật vui nữa.",
    "exList": [
      {
        "zh": "还要高高兴兴地玩。",
        "py": "Hái yào gāogāoxìngxìng de wán.",
        "vn": "Còn phải chơi thật vui nữa."
      },
      {
        "zh": "爸爸很快地吃完早饭，就去上班了。",
        "py": "Bàba hěn kuài de chīwán zǎofàn, jiù qù shàngbān le.",
        "vn": "Bố ăn sáng rất nhanh rồi đi làm."
      }
    ],
    "hanzi": [
      {
        "c": "地",
        "p": "de",
        "type": "形声字 · Chữ hình thanh",
        "st": 6,
        "ord": "土 → 也",
        "rad": "土 (thổ – đất)",
        "mean": "đất; (de) trợ từ",
        "tip": "Đọc dì = đất (地方); đọc de khi làm trợ từ trạng ngữ.",
        "cf": "的 (de) · 得 (de)",
        "w": "高兴地玩 / 早早地到 / 地方 (dì)"
      }
    ],
    "colloFull": [
      {
        "zh": "高兴地说",
        "py": "gāoxìng de shuō",
        "vn": "vui vẻ nói"
      },
      {
        "zh": "快快地走",
        "py": "kuàikuài de zǒu",
        "vn": "đi thật nhanh"
      },
      {
        "zh": "慢慢地吃",
        "py": "mànmàn de chī",
        "vn": "ăn từ từ"
      },
      {
        "zh": "认真地画",
        "py": "rènzhēn de huà",
        "vn": "vẽ một cách nghiêm túc"
      }
    ],
    "patterns": [
      {
        "s": "tính từ + 地 + động từ",
        "m": "Trạng ngữ cách thức: 高兴地说"
      },
      {
        "s": "的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Em ấy vui vẻ nói: cảm ơn mọi người!",
        "answer": "她高兴地说：谢谢大家！",
        "answerPy": "Tā gāoxìng de shuō: xièxie dàjiā!",
        "note": "tính từ + 地 + động từ — trạng ngữ cách thức.",
        "pair": "Adj + 地 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn ăn từ từ thôi, đừng vội.",
        "answer": "你慢慢地吃，别快。",
        "answerPy": "Nǐ mànmàn de chī, bié kuài.",
        "note": "的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ).",
        "pair": "Adj + 地 + V"
      }
    ]
  },
  {
    "n": 13,
    "zh": "床",
    "py": "chuáng",
    "pos": "Danh từ",
    "vn": "giường",
    "hv": "sàng",
    "em": "🛏️",
    "img": "/images/hsk2v3-bai-6/chuang.jpg",
    "lesson": 4,
    "ex_zh": "孩子们早早地就上床了。",
    "ex_py": "Háizimen zǎozǎo de jiù shàng chuáng le.",
    "ex_vn": "Bọn trẻ đi ngủ sớm.",
    "exList": [
      {
        "zh": "孩子们早早地就上床了。",
        "py": "Háizimen zǎozǎo de jiù shàng chuáng le.",
        "vn": "Bọn trẻ đi ngủ sớm."
      },
      {
        "zh": "让我们晚点儿叫他们起床。",
        "py": "Ràng wǒmen wǎn diǎnr jiào tāmen qǐchuáng.",
        "vn": "Bảo chúng tôi gọi chúng dậy muộn hơn một chút."
      }
    ],
    "hanzi": [
      {
        "c": "床",
        "p": "chuáng",
        "type": "会意字 · Chữ hội ý",
        "st": 7,
        "ord": "广 → 木",
        "rad": "广 (nghiễm – mái nhà)",
        "mean": "giường",
        "tip": "广 (mái nhà) + 木 (gỗ): đồ gỗ trong nhà để nằm.",
        "cf": "",
        "w": "床 / 上床 / 起床"
      }
    ],
    "colloFull": [
      {
        "zh": "一张床",
        "py": "yì zhāng chuáng",
        "vn": "một cái giường"
      },
      {
        "zh": "床上",
        "py": "chuáng shàng",
        "vn": "trên giường"
      },
      {
        "zh": "起床",
        "py": "qǐchuáng",
        "vn": "ngủ dậy"
      },
      {
        "zh": "床下面",
        "py": "chuáng xiàmiàn",
        "vn": "dưới giường"
      }
    ],
    "patterns": [
      {
        "s": "một + 张 + 床",
        "m": "Lượng từ của 床 là 张"
      },
      {
        "s": "起 + 床",
        "m": "Rời (起) khỏi giường (床) — tức là ngủ dậy"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trong phòng tôi có một cái giường.",
        "answer": "我的房间里有一张床。",
        "answerPy": "Wǒ de fángjiān li yǒu yì zhāng chuáng.",
        "note": "Lượng từ của 床 là 张.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Cặp sách của tôi ở dưới giường.",
        "answer": "我的书包在床下面。",
        "answerPy": "Wǒ de shūbāo zài chuáng xiàmiàn.",
        "note": "起 + 床 — rời khỏi giường, tức là ngủ dậy.",
        "pair": "在……下面"
      }
    ]
  },
  {
    "n": 14,
    "zh": "舒服",
    "py": "shūfu",
    "pos": "Tính từ",
    "vn": "thoải mái, dễ chịu",
    "hv": "thư phục",
    "em": "😌",
    "img": "/images/hsk2v3-bai-6/shufu.jpg",
    "lesson": 4,
    "ex_zh": "他们说要舒舒服服地睡一觉。",
    "ex_py": "Tāmen shuō yào shūshūfúfú de shuì yí jiào.",
    "ex_vn": "Chúng nói muốn ngủ một giấc thật thoải mái.",
    "exList": [
      {
        "zh": "他们说要舒舒服服地睡一觉。",
        "py": "Tāmen shuō yào shūshūfúfú de shuì yí jiào.",
        "vn": "Chúng nói muốn ngủ một giấc thật thoải mái."
      },
      {
        "zh": "这个床很舒服。",
        "py": "Zhège chuáng hěn shūfu.",
        "vn": "Chiếc giường này rất thoải mái."
      }
    ],
    "hanzi": [
      {
        "c": "舒",
        "p": "shū",
        "type": "会意字 · Chữ hội ý",
        "st": 12,
        "ord": "舍 → 予",
        "rad": "舌 (thiệt – lưỡi)",
        "mean": "thư thái, duỗi ra",
        "tip": "舒服 tả cảm giác dễ chịu của cơ thể hoặc tinh thần.",
        "cf": "",
        "w": "舒服 / 不舒服 / 舒舒服服"
      }
    ],
    "colloFull": [
      {
        "zh": "很舒服",
        "py": "hěn shūfu",
        "vn": "rất dễ chịu"
      },
      {
        "zh": "不舒服",
        "py": "bù shūfu",
        "vn": "khó chịu, mệt"
      },
      {
        "zh": "很不舒服",
        "py": "hěn bù shūfu",
        "vn": "rất khó chịu"
      },
      {
        "zh": "舒服的床",
        "py": "shūfu de chuáng",
        "vn": "cái giường êm"
      }
    ],
    "patterns": [
      {
        "s": "很 + 舒服",
        "m": "Rất dễ chịu, rất thoải mái"
      },
      {
        "s": "不舒服 thường có nghĩa là trong người khó chịu, hơi ốm"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Cái giường này rất êm.",
        "answer": "这张床很舒服。",
        "answerPy": "Zhè zhāng chuáng hěn shūfu.",
        "note": "很 + 舒服 — rất dễ chịu.",
        "pair": "很 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi hơi khó chịu, muốn nghỉ một lát.",
        "answer": "今天我有点儿不舒服，想休息一会儿。",
        "answerPy": "Jīntiān wǒ yǒudiǎnr bù shūfu, xiǎng xiūxi yíhuìr.",
        "note": "不舒服 thường nghĩa là trong người khó chịu, hơi ốm.",
        "pair": "有点儿 + Adj"
      }
    ]
  }
];

var wuData = [
  { img: '🎂', label: '生日', py: 'shēngrì', letter: 'A' },
  { img: '🖍️', label: '画笔', py: 'huàbǐ', letter: 'B' },
  { img: '🍰', label: '蛋糕', py: 'dàngāo', letter: 'C' },
  { img: '🐟', label: '鱼', py: 'yú', letter: 'D' },
  { img: '🛏️', label: '床', py: 'chuáng', letter: 'E' },
  { img: '😌', label: '舒服', py: 'shūfu', letter: 'F' }
];

var dialogData = [
  {
    scene: '在家里 · Ở nhà (bàn chuyện quà sinh nhật)',
    preQuiz: [
      { q: '王一雪和刘明要准备什么礼物？', opts: ['画', '衣服', '画笔'], ans: 2 },
      { q: '王一雪什么时候去买礼物？', opts: ['明天早上', '明天上午', '明天晚上'], ans: 1 }
    ],
    lines: [
      { sp: 0, zh: '明天就是女儿的生日了。', py: 'Míngtiān jiù shì nǚ’ér de shēngrì le.', vn: 'Ngày mai là sinh nhật con gái rồi.' },
      { sp: 1, zh: '你不说，我还真忘了。我们给她准备个什么礼物呢？', py: 'Nǐ bù shuō, wǒ hái zhēn wàng le. Wǒmen gěi tā zhǔnbèi ge shénme lǐwù ne?', vn: 'Nếu em không nhắc thì anh đã quên mất rồi. Chúng ta nên chuẩn bị quà gì cho con nhỉ?' },
      { sp: 0, zh: '她喜欢画画，你觉得画笔怎么样？', py: 'Tā xǐhuan huà huà, nǐ juéde huàbǐ zěnmeyàng?', vn: 'Con thích vẽ tranh. Anh thấy tặng con bút vẽ màu có được không?' },
      { sp: 1, zh: '就送画笔吧！', py: 'Jiù sòng huàbǐ ba!', vn: 'Thế thì tặng bút màu nhé!' },
      { sp: 0, zh: '那我明天上午就去买。', py: 'Nà wǒ míngtiān shàngwǔ jiù qù mǎi.', vn: 'Vậy thì sáng mai em sẽ đi mua.' },
      { sp: 1, zh: '好的！我再给她买个大大的生日蛋糕。', py: 'Hǎo de! Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.', vn: 'Được! Anh cũng sẽ mua thêm cho con một chiếc bánh sinh nhật to.' }
    ]
  },
  {
    scene: '在客厅 · Trong phòng khách (mở quà sinh nhật)',
    preQuiz: [
      { q: '刘小雪想画什么？', opts: ['黑色的狗', '黑色的猫', '白色的衣服'], ans: 0 },
      { q: '刘小明想画什么？', opts: ['爸爸', '妈妈', '姐姐'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '小雪，生日快乐！', py: 'Xiǎoxuě, shēngrì kuàilè!', vn: 'Chúc mừng sinh nhật Tiểu Tuyết!' },
      { sp: 2, zh: '姐姐，生日快乐！', py: 'Jiějie, shēngrì kuàilè!', vn: 'Chúc mừng sinh nhật chị!' },
      { sp: 0, zh: '小雪，这是爸爸、妈妈送你的礼物。', py: 'Xiǎoxuě, zhè shì bàba, māma sòng nǐ de lǐwù.', vn: 'Tiểu Tuyết, đây là quà bố mẹ tặng con.' },
      { sp: 1, zh: '你打开看看喜欢不喜欢。', py: 'Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.', vn: 'Con mở ra xem có thích không.' },
      { sp: 3, zh: '画笔！我很喜欢！', py: 'Huàbǐ! Wǒ hěn xǐhuan!', vn: 'Bút vẽ à, con rất thích ạ!' },
      { sp: 0, zh: '那你想画点儿什么？', py: 'Nà nǐ xiǎng huà diǎnr shénme?', vn: 'Thế con muốn vẽ gì đây?' },
      { sp: 3, zh: '画我们的家！有爸爸、妈妈、弟弟，还有黑色的狗、白色的猫什么的。', py: 'Huà wǒmen de jiā! Yǒu bàba, māma, dìdi, hái yǒu hēisè de gǒu, báisè de māo shénmede.', vn: 'Vẽ cả gia đình mình. Có bố, mẹ, em trai, có thêm con chó màu đen, con mèo màu trắng…' },
      { sp: 2, zh: '那我要画一个穿白色衣服的姐姐。', py: 'Nà wǒ yào huà yí ge chuān báisè yīfu de jiějie.', vn: 'Vậy em muốn vẽ một chị gái mặc quần áo màu trắng.' }
    ]
  },
  {
    scene: '在客厅 · Bữa tiệc sinh nhật',
    preQuiz: [
      { q: '今天的东西都是谁爱吃的？', opts: ['爸爸', '妈妈', '小雪'], ans: 2 },
      { q: '他们吃完饭要做什么？', opts: ['休息', '买蛋糕', '出去玩'], ans: 2 }
    ],
    lines: [
      { sp: 1, zh: '小雪，看看今天有什么好吃的。', py: 'Xiǎoxuě, kànkan jīntiān yǒu shénme hǎochī de.', vn: 'Tiểu Tuyết, con nhìn xem hôm nay có những món gì ngon nào.' },
      { sp: 3, zh: '长长的面条儿，大大的蛋糕。', py: 'Chángcháng de miàntiáor, dàdà de dàngāo.', vn: 'Mì sợi dài và chiếc bánh ga tô lớn.' },
      { sp: 1, zh: '你看，还有鱼啊肉啊什么的，都是你喜欢吃的。', py: 'Nǐ kàn, hái yǒu yú a ròu a shénmede, dōu shì nǐ xǐhuan chī de.', vn: 'Con nhìn xem, còn có cá, thịt và những món khác nữa. Tất cả đều là những món con thích ăn.' },
      { sp: 3, zh: '谢谢爸爸、妈妈！', py: 'Xièxie bàba, māma!', vn: 'Cảm ơn bố mẹ ạ!' },
      { sp: 0, zh: '快去叫弟弟过来吃饭吧，吃完饭我们还要出去玩呢。', py: 'Kuài qù jiào dìdi guòlái chīfàn ba, chīwán fàn wǒmen hái yào chūqù wán ne.', vn: 'Mau gọi em trai con ra ăn cơm đi. Ăn xong chúng ta sẽ đi chơi nhé.' },
      { sp: 3, zh: '过生日真好啊！', py: 'Guò shēngrì zhēn hǎo a!', vn: 'Sinh nhật thật tuyệt!' },
      { sp: 0, zh: '是的，过生日就要吃好吃的，还要高高兴兴地玩。', py: 'Shì de, guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.', vn: 'Đúng vậy, sinh nhật thì phải ăn món ngon, còn phải chơi vui nữa.' }
    ]
  },
  {
    scene: '在房间 · Trong phòng (Vương Nhất Tuyết viết nhật ký)',
    preQuiz: [
      { q: '女儿学会做面条儿了吗？', opts: ['学会了', '没有，是家人做的', '不知道'], ans: 1 },
      { q: '孩子们为什么早早地上床了？', opts: ['明天不上学，想舒服地睡一觉', '生病了', '不喜欢玩'], ans: 0 }
    ],
    lines: [
      { sp: 0, zh: '今天是女儿的生日。我们买了蛋糕，做了面条儿，还做了鱼啊肉啊什么的。', py: 'Jīntiān shì nǚ’ér de shēngrì. Wǒmen mǎile dàngāo, zuòle miàntiáor, hái zuòle yú a ròu a shénmede.', vn: 'Hôm nay là sinh nhật con gái. Chúng tôi đã mua một chiếc bánh ga tô, nấu mì sợi, còn làm các món như cá, thịt…' },
      { sp: 0, zh: '吃完晚饭，一家人去看了个电影。回家后，孩子们早早地就上床了。', py: 'Chīwán wǎnfàn, yì jiā rén qù kànle ge diànyǐng. Huí jiā hòu, háizimen zǎozǎo de jiù shàng chuáng le.', vn: 'Sau khi ăn tối xong, cả gia đình chúng tôi đã đi xem phim. Sau khi về nhà, bọn trẻ đi ngủ sớm.' },
      { sp: 0, zh: '明天不上学，他们说要舒舒服服地睡一觉，让我们晚点儿叫他们起床。', py: 'Míngtiān bú shàngxué, tāmen shuō yào shūshūfúfú de shuì yí jiào, ràng wǒmen wǎn diǎnr jiào tāmen qǐchuáng.', vn: 'Ngày mai không phải đi học, chúng nói muốn ngủ một giấc thật thoải mái, bảo chúng tôi gọi chúng dậy muộn hơn một chút.' },
      { sp: 0, zh: '这是很忙、很累，但很快乐的一天。', py: 'Zhè shì hěn máng, hěn lèi, dàn hěn kuàilè de yì tiān.', vn: 'Hôm nay là một ngày rất bận rộn và rất mệt, nhưng cũng là một ngày rất vui.' }
    ]
  }
];

var listenData = [
  {
    audio: '明天就是女儿的生日了。你不说，我还真忘了。她喜欢画画，你觉得画笔怎么样？就送画笔吧！',
    questions: [
      { q: '他们要准备什么礼物？', opts: ['画', '衣服', '画笔'], ans: 2 },
      { q: '女儿喜欢做什么？', opts: ['画画', '唱歌', '跑步'], ans: 0 }
    ]
  },
  {
    audio: '小雪，生日快乐！这是爸爸、妈妈送你的礼物。你打开看看喜欢不喜欢。画笔！我很喜欢！',
    questions: [
      { q: '小雪收到了什么礼物？', opts: ['画笔', '蛋糕', '衣服'], ans: 0 },
      { q: '小雪喜欢这个礼物吗？', opts: ['很喜欢', '不喜欢', '没说'], ans: 0 }
    ]
  },
  {
    audio: '小雪，看看今天有什么好吃的。长长的面条儿，大大的蛋糕。还有鱼啊肉啊什么的，都是你喜欢吃的。',
    questions: [
      { q: '今天有什么吃的？', opts: ['面条儿和蛋糕', '只有蛋糕', '只有面条儿'], ans: 0 },
      { q: '这些东西都是谁爱吃的？', opts: ['爸爸', '妈妈', '小雪'], ans: 2 }
    ]
  },
  {
    audio: '今天是女儿的生日。吃完晚饭，一家人去看了个电影。回家后，孩子们早早地就上床了。这是很忙、很累，但很快乐的一天。',
    questions: [
      { q: '吃完晚饭他们做什么了？', opts: ['看电影', '买蛋糕', '画画'], ans: 0 },
      { q: '今天是怎样的一天？', opts: ['很忙很累但很快乐', '很没意思', '很安静'], ans: 0 }
    ]
  }
];

var matchData = [
  { left: '生日', right: '快乐' },
  { left: '打开', right: '礼物' },
  { left: '长长的', right: '面条儿' },
  { left: '大大的', right: '蛋糕' },
  { left: '高高兴兴地', right: '玩' },
  { left: '舒舒服服地', right: '睡一觉' }
];

var fillData = [
  { pre: '明天就是女儿的', blank: '生日', post: '了。', hint: '(sinh nhật)', ans: '生日' },
  { pre: '你不说，我还真', blank: '忘', post: '了。', hint: '(quên)', ans: '忘' },
  { pre: '她喜欢', blank: '画画', post: '，你觉得画笔怎么样？', hint: '(vẽ tranh)', ans: '画画' },
  { pre: '小雪，生日', blank: '快乐', post: '！', hint: '(vui vẻ)', ans: '快乐' },
  { pre: '你', blank: '打开', post: '看看喜欢不喜欢。', hint: '(mở ra)', ans: '打开' },
  { pre: '还有鱼啊肉啊', blank: '什么的', post: '。', hint: '(vân vân)', ans: '什么的' },
  { pre: '还要高高兴兴', blank: '地', post: '玩。', hint: '(trợ từ trạng ngữ)', ans: '地' },
  { pre: '他们说要舒舒服服地睡一觉，早早地上', blank: '床', post: '了。', hint: '(giường)', ans: '床' }
];

var sortData = [
  { words: ['明天', '就', '是', '女儿', '的', '生日', '了', '。'], ans: '明天就是女儿的生日了。', audio: '明天就是女儿的生日了。' },
  { words: ['小雪', '，', '生日', '快乐', '！'], ans: '小雪，生日快乐！', audio: '小雪，生日快乐！' },
  { words: ['你', '打开', '看看', '喜欢', '不', '喜欢', '。'], ans: '你打开看看喜欢不喜欢。', audio: '你打开看看喜欢不喜欢。' },
  { words: ['我', '再', '给', '她', '买', '个', '大大的', '生日蛋糕', '。'], ans: '我再给她买个大大的生日蛋糕。', audio: '我再给她买个大大的生日蛋糕。' },
  { words: ['还有', '鱼', '啊', '肉', '啊', '什么的', '。'], ans: '还有鱼啊肉啊什么的。', audio: '还有鱼啊肉啊什么的。' },
  { words: ['过', '生日', '就', '要', '高高兴兴', '地', '玩', '。'], ans: '过生日就要高高兴兴地玩。', audio: '过生日就要高高兴兴地玩。' }
];

var mcData = [
  { q: '今天买的苹果＿＿，我吃了一个，很好吃。', opts: ['大大的', '大的大', '很大大', '大大得'], ans: 0 },
  { q: '桌子上有电脑、杯子、书和画笔＿＿。', opts: ['什么的', '怎么的', '那么的', '这么的'], ans: 0 },
  { q: '爸爸很快＿＿吃完早饭，就去上班了。', opts: ['地', '的', '得', '了'], ans: 0 },
  { q: '中国人过生日一般要吃什么？', opts: ['面条儿', '饺子', '米饭', '面包'], ans: 0 },
  { q: 'Hình thức lặp của tính từ hai âm tiết 高兴 là gì?', opts: ['高高兴兴', '高兴高兴', '高兴兴高', '高高兴'], ans: 0 },
  { q: '“什么的” dùng để làm gì?', opts: ['Liệt kê chưa đầy đủ (vân vân)', 'Hỏi cái gì', 'Phủ định', 'Nhấn mạnh thời gian'], ans: 0 },
  { q: 'Trợ từ nào nối trạng ngữ với động từ?', opts: ['地', '的', '得', '了'], ans: 0 },
  { q: '“过生日” nghĩa là gì?', opts: ['Đón sinh nhật', 'Đã từng sinh nhật', 'Qua ngày sinh nhật', 'Quên sinh nhật'], ans: 0 }
];

var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá.',
  questions: [
    {
      q_zh: '你想给朋友准备个什么生日礼物？为什么？',
      q_vn: 'Bạn muốn chuẩn bị quà sinh nhật gì cho bạn mình? Vì sao?',
      hint: '我想送……，因为他喜欢……',
      sample: '我想送他画笔，因为他很喜欢画画，我再给他买个大大的生日蛋糕。',
      sample_vn: 'Tôi muốn tặng bạn ấy bút vẽ, vì bạn ấy rất thích vẽ tranh, tôi sẽ mua thêm một chiếc bánh sinh nhật to.',
      note: 'Tính từ lặp 大大的 làm câu sinh động và thân mật hơn.'
    },
    {
      q_zh: '你收到礼物的时候会说什么？',
      q_vn: 'Khi nhận được quà bạn sẽ nói gì?',
      hint: '谢谢！我很喜欢！',
      sample: '我打开看看，然后说：谢谢你！画笔我很喜欢！',
      sample_vn: 'Tôi mở ra xem, rồi nói: Cảm ơn bạn! Bút vẽ tôi rất thích!',
      note: '打开 + 看看 là cách nói tự nhiên khi nhận quà.'
    },
    {
      q_zh: '过生日的时候，你们家一般吃什么？',
      q_vn: 'Khi sinh nhật, nhà bạn thường ăn gì?',
      hint: '我们一般吃……什么的。',
      sample: '我们一般吃长长的面条儿、大大的蛋糕，还有鱼啊肉啊什么的。',
      sample_vn: 'Nhà tôi thường ăn mì sợi dài, bánh ga tô to, còn có cá, thịt… nữa.',
      note: '什么的 đặt cuối danh sách để nói "vân vân".'
    },
    {
      q_zh: '生日那天你们一家人做了什么？',
      q_vn: 'Ngày sinh nhật cả nhà bạn đã làm gì?',
      hint: '吃完饭我们……地……',
      sample: '吃完晚饭，一家人高高兴兴地去看了个电影，回家后孩子们早早地就上床了。',
      sample_vn: 'Ăn tối xong, cả nhà vui vẻ đi xem phim, về nhà bọn trẻ đi ngủ sớm.',
      note: 'Tính từ + 地 + động từ: 高高兴兴地玩、早早地上床。'
    },
    {
      q_zh: '你觉得什么样的一天是快乐的一天？',
      q_vn: 'Bạn thấy một ngày như thế nào là một ngày vui?',
      hint: '很忙、很累，但很快乐。',
      sample: '跟家人一起过生日的那天，虽然很忙、很累，但是很快乐。',
      sample_vn: 'Ngày đón sinh nhật cùng gia đình, tuy rất bận, rất mệt nhưng lại rất vui.',
      note: '很忙、很累，但很快乐 — cách nối các tính từ để tả một ngày.'
    }
  ]
};

var translateData = [
  { vi: 'Ngày mai là sinh nhật con gái rồi.', zh: '明天就是女儿的生日了。', py: 'Míngtiān jiù shì nǚ’ér de shēngrì le.' },
  { vi: 'Con mở ra xem có thích không.', zh: '你打开看看喜欢不喜欢。', py: 'Nǐ dǎkāi kànkan xǐhuan bu xǐhuan.' },
  { vi: 'Còn có cá, thịt và những món khác nữa.', zh: '还有鱼啊肉啊什么的。', py: 'Hái yǒu yú a ròu a shénmede.' },
  { vi: 'Sinh nhật thì phải ăn món ngon, còn phải chơi vui nữa.', zh: '过生日就要吃好吃的，还要高高兴兴地玩。', py: 'Guò shēngrì jiù yào chī hǎochī de, hái yào gāogāoxìngxìng de wán.' },
  { vi: 'Hôm nay là một ngày rất bận, rất mệt nhưng rất vui.', zh: '这是很忙、很累，但很快乐的一天。', py: 'Zhè shì hěn máng, hěn lèi, dàn hěn kuàilè de yì tiān.' }
];

var translateDataRev = [
  { vi: 'Nếu em không nhắc thì anh đã quên mất rồi.', zh: '你不说，我还真忘了。', py: 'Nǐ bù shuō, wǒ hái zhēn wàng le.' },
  { vi: 'Anh cũng sẽ mua thêm cho con một chiếc bánh sinh nhật to.', zh: '我再给她买个大大的生日蛋糕。', py: 'Wǒ zài gěi tā mǎi ge dàdà de shēngrì dàngāo.' },
  { vi: 'Vẽ cả gia đình mình!', zh: '画我们的家！', py: 'Huà wǒmen de jiā!' },
  { vi: 'Mau gọi em trai con ra ăn cơm đi.', zh: '快去叫弟弟过来吃饭吧。', py: 'Kuài qù jiào dìdi guòlái chīfàn ba.' },
  { vi: 'Chúng nói muốn ngủ một giấc thật thoải mái.', zh: '他们说要舒舒服服地睡一觉。', py: 'Tāmen shuō yào shūshūfúfú de shuì yí jiào.' }
];
