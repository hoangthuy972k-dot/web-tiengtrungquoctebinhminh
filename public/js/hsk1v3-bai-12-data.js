// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 12: 昨天下雪了
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {
    "n": 1,
    "zh": "天气",
    "py": "tiānqì",
    "pos": "Danh từ",
    "vn": "thời tiết",
    "hv": "thiên khí",
    "em": "🌦️",
    "lesson": 1,
    "ex_zh": "今天天气怎么样？",
    "ex_py": "Jīntiān tiānqì zěnmeyàng?",
    "ex_vn": "Hôm nay thời tiết thế nào?",
    "exList": [
      {
        "zh": "今天天气怎么样？",
        "py": "Jīntiān tiānqì zěnmeyàng?",
        "vn": "Hôm nay thời tiết thế nào?"
      }
    ],
    "hanzi": [
      {
        "c": "天",
        "p": "tiān",
        "type": "独体字 · Chỉ sự",
        "st": 4,
        "ord": "一→一→丿→㇏",
        "rad": "大 (đại – to lớn)",
        "mean": "trời, bầu trời, ngày",
        "tip": "Nét ngang phía trên tượng trưng bầu TRỜI, đặt trên chữ 大(người dang tay đứng) → khoảng không cao nhất phía trên đầu người → TRỜI.",
        "cf": "太 (tài – \"quá, thái\", cũng từ 大 thêm dấu chấm)",
        "w": "天气 / 今天 / 明天"
      },
      {
        "c": "气",
        "p": "qì",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丿→一→一→乙",
        "rad": "气 (khí – tự thành bộ)",
        "mean": "khí, hơi, không khí",
        "tip": "Hình những làn hơi/mây bốc lên uốn lượn trong không trung → KHÍ, HƠI.",
        "cf": "汽 (qì – \"hơi nước, xe hơi\", thêm bộ 氵\")",
        "w": "天气 / 空气 / 客气"
      }
    ],
    "colloFull": [
      {
        "zh": "今天的天气",
        "py": "jīntiān de tiānqì",
        "vn": "thời tiết hôm nay"
      },
      {
        "zh": "天气怎么样",
        "py": "tiānqì zěnmeyàng",
        "vn": "thời tiết thế nào"
      },
      {
        "zh": "这里的天气",
        "py": "zhèlǐ de tiānqì",
        "vn": "thời tiết ở đây"
      },
      {
        "zh": "好天气",
        "py": "hǎo tiānqì",
        "vn": "thời tiết đẹp"
      }
    ],
    "patterns": [
      {
        "s": "天气 + 怎么样？",
        "m": "Hỏi thời tiết: 今天天气怎么样？"
      },
      {
        "s": "天 + 气",
        "m": "Khí trời (气) của bầu trời (天)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Thời tiết hôm nay thế nào?",
        "answer": "今天天气怎么样？",
        "answerPy": "Jīntiān tiānqì zěnmeyàng?",
        "note": "Khung hỏi thời tiết quen thuộc nhất.",
        "pair": "怎么样？"
      },
      {
        "promptLang": "vi",
        "prompt": "Thời tiết ở đây rất đẹp.",
        "answer": "这里的天气很好。",
        "answerPy": "Zhèli de tiānqì hěn hǎo.",
        "note": "这里的天气 — thời tiết ở đây.",
        "pair": "很 + Adj"
      }
    ]
  },
  {
    "n": 2,
    "zh": "这里",
    "py": "zhèlǐ",
    "pos": "Đại từ",
    "vn": "ở đây, chỗ này",
    "hv": "giá lí",
    "em": "📍",
    "lesson": 1,
    "ex_zh": "这里的天不太好，下雨了。",
    "ex_py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
    "ex_vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ.",
    "exList": [
      {
        "zh": "这里的天不太好，下雨了。",
        "py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
        "vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ."
      }
    ],
    "hanzi": [
      {
        "c": "这",
        "p": "zhè",
        "type": "半包围结构 · Bán bao vây",
        "st": 7,
        "ord": "文(văn) trong → 辶(sước) bao ngoài dưới-trái",
        "rad": "辶 (sước – đi, chuyển động)",
        "mean": "này, đây",
        "tip": "Bộ 辶(đi, tiến đến gần) bao lấy 文(dấu hiệu, sự vật) → chỉ sự vật đang ở NGAY GẦN, TRƯỚC MẮT → NÀY, ĐÂY.",
        "cf": "那 (nà – \"kia, đó\", đối lập vị trí xa-gần với 这)",
        "w": "这里 / 这个 / 这是"
      },
      {
        "c": "里",
        "p": "lǐ",
        "type": "上下结构 · Trên-dưới",
        "st": 7,
        "ord": "田(điền) trên → 土(thổ) dưới",
        "rad": "里 (lý – tự thành bộ)",
        "mean": "bên trong, dặm (đơn vị đo)",
        "tip": "田(ruộng) ở trên 土(đất) → nơi con người sinh sống, quây quần BÊN TRONG làng xóm → BÊN TRONG.",
        "cf": "理 (lǐ – \"lý lẽ, đạo lý\", thêm bộ 王 bên trái)",
        "w": "这里 / 哪里 / 里边"
      }
    ],
    "colloFull": [
      {
        "zh": "在这里",
        "py": "zài zhèlǐ",
        "vn": "ở đây"
      },
      {
        "zh": "这里的天气",
        "py": "zhèlǐ de tiānqì",
        "vn": "thời tiết ở đây"
      },
      {
        "zh": "来这里",
        "py": "lái zhèlǐ",
        "vn": "đến đây"
      },
      {
        "zh": "这里有",
        "py": "zhèlǐ yǒu",
        "vn": "ở đây có"
      }
    ],
    "patterns": [
      {
        "s": "在 / 来 + 这里",
        "m": "Ở đây, đến đây"
      },
      {
        "s": "这里 = 这儿 — 这里 thiên văn viết hơn"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ở đây có một hiệu thuốc.",
        "answer": "这里有一个药店。",
        "answerPy": "Zhèli yǒu yí ge yàodiàn.",
        "note": "这里 = 这儿.",
        "pair": "nơi chốn + 有 + N"
      },
      {
        "promptLang": "vi",
        "prompt": "Mời bạn đến đây.",
        "answer": "请你来这里。",
        "answerPy": "Qǐng nǐ lái zhèli.",
        "note": "来这里 — đến đây.",
        "pair": "请 + V"
      }
    ]
  },
  {
    "n": 3,
    "zh": "天",
    "py": "tiān",
    "pos": "Danh từ",
    "vn": "thời tiết, trời",
    "hv": "thiên",
    "em": "☁️",
    "lesson": 1,
    "ex_zh": "这里的天不太好，下雨了。",
    "ex_py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
    "ex_vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ.",
    "exList": [
      {
        "zh": "这里的天不太好，下雨了。",
        "py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
        "vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ."
      }
    ],
    "hanzi": [
      {
        "c": "天",
        "p": "tiān",
        "type": "独体字 · Chỉ sự",
        "st": 4,
        "ord": "一→一→丿→㇏",
        "rad": "大 (đại – to lớn)",
        "mean": "trời, bầu trời, thời tiết",
        "tip": "Nét ngang trên cùng tượng trưng bầu TRỜI, đặt trên 大(người dang tay) → khoảng không cao nhất trên đầu người → TRỜI, THỜI TIẾT (trời như thế nào).",
        "cf": "太 (tài – \"quá, thái\", cũng từ 大 thêm dấu chấm)",
        "w": "天气 / 今天天不好 / 明天"
      }
    ],
    "colloFull": [
      {
        "zh": "三天",
        "py": "sān tiān",
        "vn": "ba ngày"
      },
      {
        "zh": "几天",
        "py": "jǐ tiān",
        "vn": "mấy ngày"
      },
      {
        "zh": "一天",
        "py": "yì tiān",
        "vn": "một ngày"
      },
      {
        "zh": "两天",
        "py": "liǎng tiān",
        "vn": "hai ngày"
      }
    ],
    "patterns": [
      {
        "s": "số + 天",
        "m": "Bao nhiêu ngày: 三天 — 天 tự làm lượng từ"
      },
      {
        "s": "✗ 三个天 → ✓ 三天",
        "m": "天 · 年 · 岁 đều không cần thêm 个"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi ốm ba ngày rồi.",
        "answer": "我生病三天了。",
        "answerPy": "Wǒ shēngbìng sān tiān le.",
        "note": "天 tự làm lượng từ, không thêm 个.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy ngày nay trời đều mưa.",
        "answer": "这几天都下雨。",
        "answerPy": "Zhè jǐ tiān dōu xià yǔ.",
        "note": "几天 — mấy ngày.",
        "pair": "都 + V"
      }
    ]
  },
  {
    "n": 4,
    "zh": "下雨",
    "py": "xià yǔ",
    "pos": "Động từ",
    "vn": "mưa, mưa rơi",
    "hv": "hạ vũ",
    "em": "🌧️",
    "lesson": 1,
    "ex_zh": "这里的天不太好，下雨了。",
    "ex_py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
    "ex_vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ.",
    "exList": [
      {
        "zh": "这里的天不太好，下雨了。",
        "py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
        "vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ."
      }
    ],
    "hanzi": [
      {
        "c": "雨",
        "p": "yǔ",
        "type": "独体字 · Tượng hình",
        "st": 8,
        "ord": "一→冂→丨→丶丶丶丶",
        "rad": "雨 (vũ – tự thành bộ)",
        "mean": "mưa",
        "tip": "Hình những giọt nước rơi từ đám mây → MƯA.",
        "cf": "雪 (xuě – \"tuyết\")",
        "w": "下雨"
      },
      {
        "c": "下",
        "p": "xià",
        "type": "独体字 · Chỉ sự",
        "st": 3,
        "ord": "一(ngang, mốc) → 丨(sổ) → 丶(chấm dưới)",
        "rad": "一 (nhất – nét ngang, chỉ vị trí)",
        "mean": "dưới, xuống, rơi xuống",
        "tip": "Một nét ngắn nằm DƯỚI một đường ngang dài → chỉ vị trí ở phía DƯỚI → DƯỚI, RƠI XUỐNG.",
        "cf": "上 (shàng – \"trên\", đối lập vị trí với 下)",
        "w": "下雨 / 下雪 / 下班"
      }
    ],
    "colloFull": [
      {
        "zh": "今天下雨",
        "py": "jīntiān xià yǔ",
        "vn": "hôm nay mưa"
      },
      {
        "zh": "不下雨",
        "py": "bú xià yǔ",
        "vn": "không mưa"
      },
      {
        "zh": "下雨了",
        "py": "xià yǔ le",
        "vn": "mưa rồi"
      },
      {
        "zh": "明天下雨",
        "py": "míngtiān xià yǔ",
        "vn": "mai mưa"
      }
    ],
    "patterns": [
      {
        "s": "下雨 + 了",
        "m": "Mưa rồi — 了 cho thấy trời vừa đổi"
      },
      {
        "s": "下雨 không cần chủ ngữ: 下雨了 ✓"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mưa rồi, chúng ta về nhà thôi.",
        "answer": "下雨了，我们回家吧。",
        "answerPy": "Xià yǔ le, wǒmen huí jiā ba.",
        "note": "下雨 không cần chủ ngữ.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai không mưa.",
        "answer": "明天不下雨。",
        "answerPy": "Míngtiān bú xià yǔ.",
        "note": "不下雨 — không mưa.",
        "pair": "不 + V"
      }
    ]
  },
  {
    "n": 5,
    "zh": "了",
    "py": "le",
    "pos": "Trợ từ",
    "vn": "(dùng cuối câu chỉ sự thay đổi tình hình hoặc trạng thái)",
    "hv": "liễu",
    "em": "❕",
    "lesson": 1,
    "ex_zh": "这里的天不太好，下雨了。",
    "ex_py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
    "ex_vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ.",
    "exList": [
      {
        "zh": "这里的天不太好，下雨了。",
        "py": "Zhèlǐ de tiān bú tài hǎo, xià yǔ le.",
        "vn": "Thời tiết ở đây không ổn lắm, mưa rồi ạ."
      }
    ],
    "hanzi": [
      {
        "c": "了",
        "p": "le",
        "type": "独体字 · Chữ đơn",
        "st": 2,
        "ord": "乛(ngang gập) → 亅(sổ móc)",
        "rad": "乙 (ất – nét cong, quy ước)",
        "mean": "trợ từ chỉ sự hoàn thành/thay đổi",
        "tip": "Hình dáng đơn giản như đứa trẻ mới sinh co tay chân (gốc tượng hình) → mượn âm làm TRỢ TỪ đặt cuối câu để báo hiệu việc đã XONG hoặc vừa THAY ĐỔI.",
        "cf": "子 (zǐ – \"con, con cái\", cùng gốc hình đứa trẻ)",
        "w": "下雨了 / 太冷了 / 好了"
      }
    ],
    "colloFull": [
      {
        "zh": "下雨了",
        "py": "xià yǔ le",
        "vn": "mưa rồi"
      },
      {
        "zh": "冷了",
        "py": "lěng le",
        "vn": "lạnh rồi"
      },
      {
        "zh": "生病了",
        "py": "shēngbìng le",
        "vn": "ốm rồi"
      },
      {
        "zh": "来了",
        "py": "lái le",
        "vn": "đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "câu + 了",
        "m": "Chỉ sự thay đổi: 下雨了 — trước chưa mưa, nay mưa rồi"
      },
      {
        "s": "了 đặt CUỐI câu, mang nghĩa trước chưa vậy nay đã vậy"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Trời lạnh rồi, bạn mặc thêm quần áo đi.",
        "answer": "冷了，你穿衣服吧。",
        "answerPy": "Lěng le, nǐ chuān yīfu ba.",
        "note": "了 ở cuối câu chỉ sự thay đổi.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Em trai tôi ốm rồi.",
        "answer": "我弟弟生病了。",
        "answerPy": "Wǒ dìdi shēngbìng le.",
        "note": "Trước chưa ốm, nay ốm rồi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 6,
    "zh": "雨",
    "py": "yǔ",
    "pos": "Danh từ",
    "vn": "mưa",
    "hv": "vũ",
    "em": "☔",
    "lesson": 1,
    "ex_zh": "雨大吗？",
    "ex_py": "Yǔ dà ma?",
    "ex_vn": "Mưa to không?",
    "exList": [
      {
        "zh": "雨大吗？",
        "py": "Yǔ dà ma?",
        "vn": "Mưa to không?"
      }
    ],
    "hanzi": [
      {
        "c": "雨",
        "p": "yǔ",
        "type": "独体字 · Tượng hình",
        "st": 8,
        "ord": "一→冂→丨→丶丶丶丶",
        "rad": "雨 (vũ – tự thành bộ)",
        "mean": "mưa",
        "tip": "Hình những giọt nước rơi từ đám mây → MƯA.",
        "cf": "雪 (xuě – \"tuyết\")",
        "w": "下雨 / 大雨 / 小雨"
      }
    ],
    "colloFull": [
      {
        "zh": "下雨",
        "py": "xià yǔ",
        "vn": "mưa"
      },
      {
        "zh": "大雨",
        "py": "dà yǔ",
        "vn": "mưa to"
      },
      {
        "zh": "小雨",
        "py": "Xiǎoyǔ",
        "vn": "mưa nhỏ"
      },
      {
        "zh": "下大雨",
        "py": "xià dà yǔ",
        "vn": "trời mưa to"
      }
    ],
    "patterns": [
      {
        "s": "下 + 雨",
        "m": "Trời mưa — dùng động từ 下"
      },
      {
        "s": "雨 là chữ tượng hình — bốn chấm là hạt mưa rơi"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay mưa to quá!",
        "answer": "今天雨太大了！",
        "answerPy": "Jīntiān yǔ tài dà le!",
        "note": "大雨 — mưa to.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Chiều nay trời mưa to.",
        "answer": "今天下午下大雨。",
        "answerPy": "Jīntiān xiàwǔ xià dà yǔ.",
        "note": "Trời mưa dùng động từ 下.",
        "pair": "下 + N"
      }
    ]
  },
  {
    "n": 7,
    "zh": "有点儿",
    "py": "yǒudiǎnr",
    "pos": "Phó từ",
    "vn": "hơi, hơi... một chút",
    "hv": "hữu điểm nhi",
    "em": "📏",
    "lesson": 1,
    "ex_zh": "有点儿大，我觉得很冷。",
    "ex_py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
    "ex_vn": "Hơi to ạ, em cảm thấy rất lạnh.",
    "exList": [
      {
        "zh": "有点儿大，我觉得很冷。",
        "py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
        "vn": "Hơi to ạ, em cảm thấy rất lạnh."
      }
    ],
    "hanzi": [
      {
        "c": "有",
        "p": "yǒu",
        "type": "上下结构 · Trên-dưới",
        "st": 6,
        "ord": "𠂇(tay, biến thể) trên → 月(nguyệt/thịt) dưới",
        "rad": "月 (nguyệt – thịt/tháng)",
        "mean": "có",
        "tip": "𠂇(bàn tay) cầm nắm lấy 月(miếng thịt) → cầm được vật trong tay → CÓ.",
        "cf": "右 (yòu – \"bên phải\", cùng phần trên nhưng dưới là 口 không phải 月)",
        "w": "有点儿 / 没有 / 有的"
      },
      {
        "c": "点",
        "p": "diǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "占(chiêm) trên → 灬(hỏa) dưới",
        "rad": "灬 (hỏa – lửa, biến thể 4 chấm)",
        "mean": "chấm, điểm, một chút; giờ",
        "tip": "Bộ 灬(4 chấm nhỏ tượng trưng đốm lửa) → nghĩa mở rộng thành CHẤM nhỏ, MỘT CHÚT, ĐIỂM.",
        "cf": "店 (diàn – \"cửa hàng\", cũng có 占 nhưng thêm bộ 广\")",
        "w": "有点儿 / 一点儿 / 几点"
      },
      {
        "c": "儿",
        "p": "r",
        "type": "独体字 · Tượng hình",
        "st": 2,
        "ord": "丿(phẩy) → 乚(sổ cong)",
        "rad": "儿 (nhi – tự thành bộ, người)",
        "mean": "con, trẻ nhỏ; hậu tố uốn lưỡi (儿化音)",
        "tip": "Hình người đang bước đi bằng hai chân (biến thể của 人) → dùng chỉ CON, TRẺ NHỎ; khi đứng sau âm tiết khác thì đọc lướt thành âm \"-r\".",
        "cf": "几 (jǐ – \"mấy, bao nhiêu\", hình dáng gần giống)",
        "w": "有点儿 / 一点儿 / 儿子"
      }
    ],
    "colloFull": [
      {
        "zh": "有点儿冷",
        "py": "yǒudiǎnr lěng",
        "vn": "hơi lạnh"
      },
      {
        "zh": "有点儿热",
        "py": "yǒudiǎnr rè",
        "vn": "hơi nóng"
      },
      {
        "zh": "有点儿贵",
        "py": "yǒudiǎnr guì",
        "vn": "hơi đắt"
      },
      {
        "zh": "有点儿忙",
        "py": "yǒudiǎnr máng",
        "vn": "hơi bận"
      }
    ],
    "patterns": [
      {
        "s": "有点儿 + tính từ",
        "m": "Hơi … — mang ý KHÔNG hài lòng: 有点儿冷"
      },
      {
        "s": "有点儿 đứng TRƯỚC tính từ; 一点儿 đứng SAU: 有点儿冷 / 冷一点儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi thấy hơi lạnh.",
        "answer": "今天我觉得有点儿冷。",
        "answerPy": "Jīntiān wǒ juéde yǒudiǎnr lěng.",
        "note": "有点儿 mang ý không hài lòng.",
        "pair": "有点儿 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Bộ quần áo này hơi đắt.",
        "answer": "这件衣服有点儿贵。",
        "answerPy": "Zhè jiàn yīfu yǒudiǎnr guì.",
        "note": "有点儿 đứng TRƯỚC tính từ.",
        "pair": "有点儿 + Adj"
      }
    ]
  },
  {
    "n": 8,
    "zh": "觉得",
    "py": "juéde",
    "pos": "Động từ",
    "vn": "cảm thấy",
    "hv": "giác đắc",
    "em": "💭",
    "lesson": 1,
    "ex_zh": "有点儿大，我觉得很冷。",
    "ex_py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
    "ex_vn": "Hơi to ạ, em cảm thấy rất lạnh.",
    "exList": [
      {
        "zh": "有点儿大，我觉得很冷。",
        "py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
        "vn": "Hơi to ạ, em cảm thấy rất lạnh."
      }
    ],
    "hanzi": [
      {
        "c": "觉",
        "p": "jué",
        "type": "上中下结构 · Trên-giữa-dưới",
        "st": 9,
        "ord": "⺍(nét nhỏ) trên → 冖(che phủ) giữa → 见(kiến) dưới",
        "rad": "见 (kiến – nhìn, thấy)",
        "mean": "cảm thấy, nhận ra; ngủ (giấc)",
        "tip": "⺍(ánh sáng/ý nghĩ) + 冖(che trong đầu) ở trên, 见(nhìn thấy) ở dưới → đầu óc NHẬN RA điều gì đó qua những gì nhìn/cảm được → CẢM THẤY.",
        "cf": "学 (xué – \"học\", cũng có phần trên ⺍冖 giống nhưng dưới là 子\")",
        "w": "觉得 / 睡觉 / 感觉"
      },
      {
        "c": "得",
        "p": "de",
        "type": "左中右结构 · Trái-giữa-phải",
        "st": 11,
        "ord": "彳(xích) trái → 日+一 giữa → 寸(thốn) phải",
        "rad": "彳 (xích – bước chân nhỏ, đi lại)",
        "mean": "được, đạt được; (trong \"觉得\" mang nghĩa \"cảm thấy\")",
        "tip": "彳(bước chân đi tìm) + 寸(bàn tay, nắm giữ/đo lường) → đi tìm và NẮM ĐƯỢC điều mình muốn → ĐƯỢC, ĐẠT ĐƯỢC.",
        "cf": "待 (dài – \"chờ, đợi\", cũng có bộ 彳 bên trái)",
        "w": "觉得 / 得到 / 记得"
      }
    ],
    "colloFull": [
      {
        "zh": "觉得冷",
        "py": "juéde lěng",
        "vn": "thấy lạnh"
      },
      {
        "zh": "觉得好",
        "py": "juéde hǎo",
        "vn": "thấy tốt"
      },
      {
        "zh": "我觉得",
        "py": "wǒ juéde",
        "vn": "tôi thấy rằng"
      },
      {
        "zh": "不觉得",
        "py": "bù juéde",
        "vn": "không thấy"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 觉得 + mệnh đề",
        "m": "Ai đó cảm thấy …: 我觉得有点儿冷"
      },
      {
        "s": "觉得 dùng để nêu cảm nhận, ý kiến của mình"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi thấy món của nhà hàng này rất ngon.",
        "answer": "我觉得这个饭店的菜很好吃。",
        "answerPy": "Wǒ juéde zhège fàndiàn de cài hěn hǎochī.",
        "note": "觉得 dùng để nêu cảm nhận.",
        "pair": "觉得 + mệnh đề"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn thấy thời tiết ở đây thế nào?",
        "answer": "你觉得这里的天气怎么样？",
        "answerPy": "Nǐ juéde zhèli de tiānqì zěnmeyàng?",
        "note": "Câu hỏi ý kiến rất hay dùng.",
        "pair": "怎么样？"
      }
    ]
  },
  {
    "n": 9,
    "zh": "冷",
    "py": "lěng",
    "pos": "Tính từ",
    "vn": "lạnh",
    "hv": "lãnh",
    "em": "🥶",
    "lesson": 1,
    "ex_zh": "有点儿大，我觉得很冷。",
    "ex_py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
    "ex_vn": "Hơi to ạ, em cảm thấy rất lạnh.",
    "exList": [
      {
        "zh": "有点儿大，我觉得很冷。",
        "py": "Yǒudiǎnr dà, wǒ juéde hěn lěng.",
        "vn": "Hơi to ạ, em cảm thấy rất lạnh."
      },
      {
        "zh": "是的，太冷了。",
        "py": "Shì de, tài lěng le.",
        "vn": "Đúng vậy, trời lạnh quá."
      }
    ],
    "hanzi": [
      {
        "c": "冷",
        "p": "lěng",
        "type": "左右结构 · Trái-phải",
        "st": 7,
        "ord": "冫(băng) trái → 令(lệnh) phải",
        "rad": "冫 (băng – băng giá)",
        "mean": "lạnh",
        "tip": "冫(băng giá) + 令(mượn âm) → LẠNH.",
        "cf": "令 (lìng – \"ra lệnh\")",
        "w": "太冷了 / 很冷"
      }
    ],
    "colloFull": [
      {
        "zh": "很冷",
        "py": "hěn lěng",
        "vn": "rất lạnh"
      },
      {
        "zh": "有点儿冷",
        "py": "yǒudiǎnr lěng",
        "vn": "hơi lạnh"
      },
      {
        "zh": "太冷了",
        "py": "tài lěng le",
        "vn": "lạnh quá"
      },
      {
        "zh": "不冷",
        "py": "bù lěng",
        "vn": "không lạnh"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 冷",
        "m": "Lạnh — nói về thời tiết"
      },
      {
        "s": "冷 có bộ 冫 (hai chấm băng) bên trái"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm qua lạnh quá!",
        "answer": "昨天太冷了！",
        "answerPy": "Zuótiān tài lěng le!",
        "note": "太……了 phải đủ hai vế.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Thời tiết ở đây có lạnh không?",
        "answer": "这里的天气冷吗？",
        "answerPy": "Zhèli de tiānqì lěng ma?",
        "note": "Câu hỏi có 吗 thì bỏ 很.",
        "pair": "……吗？"
      }
    ]
  },
  {
    "n": 10,
    "zh": "下",
    "py": "xià",
    "pos": "Động từ",
    "vn": "(mưa, tuyết...) rơi",
    "hv": "hạ",
    "em": "🌨️",
    "lesson": 2,
    "ex_zh": "昨天下雪了。",
    "ex_py": "Zuótiān xià xuě le.",
    "ex_vn": "Hôm qua tuyết rơi rồi.",
    "exList": [
      {
        "zh": "昨天下雪了。",
        "py": "Zuótiān xià xuě le.",
        "vn": "Hôm qua tuyết rơi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "下",
        "p": "xià",
        "type": "独体字 · Chỉ sự",
        "st": 3,
        "ord": "一(ngang, mốc) → 丨(sổ) → 丶(chấm dưới)",
        "rad": "一 (nhất – nét ngang, chỉ vị trí)",
        "mean": "dưới, xuống, (mưa/tuyết) rơi",
        "tip": "Một nét ngắn nằm DƯỚI đường ngang dài → chỉ vị trí ở phía DƯỚI, sự vật từ trên RƠI XUỐNG dưới → DƯỚI, RƠI.",
        "cf": "上 (shàng – \"trên\", đối lập vị trí với 下)",
        "w": "下雪 / 下雨 / 下班"
      }
    ],
    "colloFull": [
      {
        "zh": "下雨",
        "py": "xià yǔ",
        "vn": "mưa"
      },
      {
        "zh": "下雪",
        "py": "xià xuě",
        "vn": "tuyết rơi"
      },
      {
        "zh": "桌子下",
        "py": "zhuōzi xià",
        "vn": "dưới bàn"
      },
      {
        "zh": "下课",
        "py": "xiàkè",
        "vn": "tan học"
      }
    ],
    "patterns": [
      {
        "s": "下 + 雨 / 雪",
        "m": "Trời mưa, trời tuyết"
      },
      {
        "s": "下 vừa là rơi xuống, vừa là phía dưới"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tối qua trời đổ tuyết.",
        "answer": "昨天晚上下雪了。",
        "answerPy": "Zuótiān wǎnshang xià xuě le.",
        "note": "下雨 · 下雪 — cùng một cách nói.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Con mèo ở dưới bàn.",
        "answer": "猫在桌子下。",
        "answerPy": "Māo zài zhuōzi xià.",
        "note": "下 vừa là rơi xuống, vừa là phía dưới.",
        "pair": "在……下"
      }
    ]
  },
  {
    "n": 11,
    "zh": "雪",
    "py": "xuě",
    "pos": "Danh từ",
    "vn": "tuyết",
    "hv": "tuyết",
    "em": "❄️",
    "lesson": 2,
    "ex_zh": "昨天下雪了。",
    "ex_py": "Zuótiān xià xuě le.",
    "ex_vn": "Hôm qua tuyết rơi rồi.",
    "exList": [
      {
        "zh": "昨天下雪了。",
        "py": "Zuótiān xià xuě le.",
        "vn": "Hôm qua tuyết rơi rồi."
      }
    ],
    "hanzi": [
      {
        "c": "雪",
        "p": "xuě",
        "type": "上下结构 · Trên-dưới",
        "st": 11,
        "ord": "雨(vũ) trên → 彐 dưới",
        "rad": "雨 (vũ – mưa)",
        "mean": "tuyết",
        "tip": "Bộ 雨(mưa) ở trên → trời lạnh khiến mưa đóng băng thành TUYẾT.",
        "cf": "雨 (yǔ – \"mưa\", thiếu phần dưới)",
        "w": "下雪"
      }
    ],
    "colloFull": [
      {
        "zh": "下雪",
        "py": "xià xuě",
        "vn": "tuyết rơi"
      },
      {
        "zh": "大雪",
        "py": "dà xuě",
        "vn": "tuyết lớn"
      },
      {
        "zh": "下雪了",
        "py": "xià xuě le",
        "vn": "tuyết rơi rồi"
      },
      {
        "zh": "看雪",
        "py": "kàn xuě",
        "vn": "ngắm tuyết"
      }
    ],
    "patterns": [
      {
        "s": "下 + 雪",
        "m": "Trời đổ tuyết — dùng động từ 下"
      },
      {
        "s": "下雨 · 下雪 — cùng một cách nói về thời tiết"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tuyết rơi rồi, các em nhỏ đều rất vui.",
        "answer": "下雪了，小朋友们很高兴。",
        "answerPy": "Xià xuě le, xiǎopéngyoumen hěn gāoxìng.",
        "note": "下雪 dùng động từ 下.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn đi Trung Quốc ngắm tuyết.",
        "answer": "我想去中国看雪。",
        "answerPy": "Wǒ xiǎng qù Zhōngguó kàn xuě.",
        "note": "看雪 — ngắm tuyết.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 12,
    "zh": "来",
    "py": "lái",
    "pos": "Động từ",
    "vn": "đến",
    "hv": "lai",
    "em": "🚶",
    "lesson": 2,
    "ex_zh": "你昨天没来公司，生病了？",
    "ex_py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
    "ex_vn": "Hôm qua bạn không đến công ty, bị ốm à?",
    "exList": [
      {
        "zh": "你昨天没来公司，生病了？",
        "py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
        "vn": "Hôm qua bạn không đến công ty, bị ốm à?"
      }
    ],
    "hanzi": [
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
        "w": "来公司 / 回来"
      }
    ],
    "colloFull": [
      {
        "zh": "来这里",
        "py": "lái zhèlǐ",
        "vn": "đến đây"
      },
      {
        "zh": "来公司",
        "py": "lái gōngsī",
        "vn": "tới công ty"
      },
      {
        "zh": "不来",
        "py": "bù lái",
        "vn": "không đến"
      },
      {
        "zh": "来了",
        "py": "lái le",
        "vn": "đến rồi"
      }
    ],
    "patterns": [
      {
        "s": "来 + nơi chốn",
        "m": "Đến đâu — lại gần người nói"
      },
      {
        "s": "来 (lại gần) ↔ 去 (rời xa) — nhìn từ chỗ người nói"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Ngày mai bạn có đến công ty không?",
        "answer": "明天你来公司吗？",
        "answerPy": "Míngtiān nǐ lái gōngsī ma?",
        "note": "来 là lại gần người nói, 去 là rời xa.",
        "pair": "……吗？"
      },
      {
        "promptLang": "vi",
        "prompt": "Thầy đến rồi.",
        "answer": "老师来了。",
        "answerPy": "Lǎoshī lái le.",
        "note": "来了 — đến rồi.",
        "pair": "……了"
      }
    ]
  },
  {
    "n": 13,
    "zh": "公司",
    "py": "gōngsī",
    "pos": "Danh từ",
    "vn": "công ty",
    "hv": "công ti",
    "em": "🏢",
    "lesson": 2,
    "ex_zh": "你昨天没来公司，生病了？",
    "ex_py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
    "ex_vn": "Hôm qua bạn không đến công ty, bị ốm à?",
    "exList": [
      {
        "zh": "你昨天没来公司，生病了？",
        "py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
        "vn": "Hôm qua bạn không đến công ty, bị ốm à?"
      }
    ],
    "hanzi": [
      {
        "c": "公",
        "p": "gōng",
        "type": "上下结构 · Trên-dưới",
        "st": 4,
        "ord": "八(bát) trên → 厶(khư) dưới",
        "rad": "八 (bát – chia, tách ra)",
        "mean": "công cộng, công bằng; ông (kính xưng)",
        "tip": "八(chia đều làm hai) đặt trên 厶(cái riêng tư, cá nhân) → chia sẻ CÁI RIÊNG thành CHUNG → CÔNG CỘNG, CÔNG BẰNG.",
        "cf": "分 (fēn – \"chia, phút\", cũng có bộ 八 ở trên)",
        "w": "公司 / 公园 / 老公"
      },
      {
        "c": "司",
        "p": "sī",
        "type": "半包围结构 · Bán bao vây",
        "st": 5,
        "ord": "𠃌(bao trên-trái) → 一 → 口(khẩu) bên trong",
        "rad": "口 (khẩu – miệng)",
        "mean": "ty, ban, cơ quan quản lý; điều hành",
        "tip": "Hình người đứng trên cao dùng 口(miệng) ra lệnh, điều hành công việc → QUẢN LÝ, ĐIỀU HÀNH; ghép với 公 thành \"công ty\" – nơi được điều hành chung.",
        "cf": "同 (tóng – \"giống nhau\", khung ngoài gần giống nhưng khác phần trong\")",
        "w": "公司 / 司机 / 上司"
      }
    ],
    "colloFull": [
      {
        "zh": "去公司",
        "py": "qù gōngsī",
        "vn": "đến công ty"
      },
      {
        "zh": "在公司",
        "py": "zài gōngsī",
        "vn": "ở công ty"
      },
      {
        "zh": "公司的人",
        "py": "gōngsī de rén",
        "vn": "người của công ty"
      },
      {
        "zh": "来公司",
        "py": "lái gōngsī",
        "vn": "tới công ty"
      }
    ],
    "patterns": [
      {
        "s": "去 / 在 + 公司",
        "m": "Đi công ty, ở công ty"
      },
      {
        "s": "公 + 司",
        "m": "Nơi làm việc chung — cùng kiểu với 商店 · 书店"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chị tôi làm việc ở công ty này.",
        "answer": "我姐姐在这个公司工作。",
        "answerPy": "Wǒ jiějie zài zhège gōngsī gōngzuò.",
        "note": "Nơi chốn đứng trước động từ.",
        "pair": "在……工作"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về công ty?",
        "answer": "你几点回公司？",
        "answerPy": "Nǐ jǐ diǎn huí gōngsī?",
        "note": "回公司 — về công ty.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 14,
    "zh": "生病",
    "py": "shēngbìng",
    "pos": "Động từ",
    "vn": "ốm, bị ốm, bị bệnh",
    "hv": "sinh bệnh",
    "em": "🤒",
    "lesson": 2,
    "ex_zh": "你昨天没来公司，生病了？",
    "ex_py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
    "ex_vn": "Hôm qua bạn không đến công ty, bị ốm à?",
    "exList": [
      {
        "zh": "你昨天没来公司，生病了？",
        "py": "Nǐ zuótiān méi lái gōngsī, shēngbìng le?",
        "vn": "Hôm qua bạn không đến công ty, bị ốm à?"
      }
    ],
    "hanzi": [
      {
        "c": "病",
        "p": "bìng",
        "type": "半包围 · Bán bao (疒)",
        "st": 10,
        "ord": "疒(bộ bệnh) → 丙 bên trong",
        "rad": "疒 (nạch – bệnh tật)",
        "mean": "bệnh, ốm",
        "tip": "Bộ 疒 = hình người nằm trên giường bệnh. Thấy 疒 → nghĩ ngay tới ỐM ĐAU.",
        "cf": "痛 (tòng – cùng bộ 疒)",
        "w": "生病 / 看病"
      },
      {
        "c": "生",
        "p": "shēng",
        "type": "独体字 · Chữ đơn",
        "st": 5,
        "ord": "丿→一→丨→一→一",
        "rad": "生 (sinh – tự thành bộ)",
        "mean": "sinh ra, sống, mọc lên; (sinh) bệnh",
        "tip": "Hình mầm cây (屮) đang mọc lên khỏi mặt đất (一) → SINH RA, SỐNG, MỌC LÊN; \"生病\" nghĩa là \"sinh ra bệnh\" → bị ốm.",
        "cf": "牛 (niú – \"con bò\", hình dáng gần giống nhưng thiếu nét ngang trên đầu)",
        "w": "生病 / 学生 / 先生"
      }
    ],
    "colloFull": [
      {
        "zh": "生病了",
        "py": "shēngbìng le",
        "vn": "ốm rồi"
      },
      {
        "zh": "没生病",
        "py": "méi shēngbìng",
        "vn": "không ốm"
      },
      {
        "zh": "生病的孩子",
        "py": "shēngbìng de háizi",
        "vn": "đứa trẻ bị ốm"
      },
      {
        "zh": "生病的时候",
        "py": "shēngbìng de shíhou",
        "vn": "lúc bị ốm"
      }
    ],
    "patterns": [
      {
        "s": "Sub + 生病 + 了",
        "m": "Ai đó bị ốm rồi"
      },
      {
        "s": "生病 (bị ốm) → 看病 (đi khám) → 吃药 (uống thuốc)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay tôi ốm rồi, không đi làm được.",
        "answer": "今天我生病了，不能上班。",
        "answerPy": "Jīntiān wǒ shēngbìng le, bù néng shàngbān.",
        "note": "不能 — không thể, do hoàn cảnh không cho phép.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Lúc bị ốm bạn nên uống nhiều nước nóng.",
        "answer": "生病的时候你要多喝热水。",
        "answerPy": "Shēngbìng de shíhou nǐ yào duō hē rèshuǐ.",
        "note": "生病的时候 — lúc bị ốm.",
        "pair": "要 + V"
      }
    ]
  },
  {
    "n": 15,
    "zh": "看病",
    "py": "kànbìng",
    "pos": "Động từ",
    "vn": "khám bệnh",
    "hv": "khán bệnh",
    "em": "🏥",
    "lesson": 2,
    "ex_zh": "对，我昨天去医院看病了。",
    "ex_py": "Duì, wǒ zuótiān qù yīyuàn kànbìng le.",
    "ex_vn": "Đúng vậy, hôm qua em đi bệnh viện khám bệnh.",
    "exList": [
      {
        "zh": "对，我昨天去医院看病了。",
        "py": "Duì, wǒ zuótiān qù yīyuàn kànbìng le.",
        "vn": "Đúng vậy, hôm qua em đi bệnh viện khám bệnh."
      }
    ],
    "hanzi": [
      {
        "c": "看",
        "p": "kàn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "手(thủ, biến thể) trên → 目(mục) dưới",
        "rad": "目 (mục – mắt)",
        "mean": "xem, nhìn; khám (bệnh)",
        "tip": "Bàn 手(tay) che lên trên 目(mắt) như đang nhìn ra xa cho rõ → XEM, NHÌN; dùng với bệnh viện/bác sĩ → KHÁM (bệnh).",
        "cf": "着 (zhe/zháo – cũng có 目 ở dưới nhưng phần trên là 羊\")",
        "w": "看病 / 看书 / 看电视"
      },
      {
        "c": "病",
        "p": "bìng",
        "type": "半包围 · Bán bao (疒)",
        "st": 10,
        "ord": "疒(bộ bệnh) → 丙 bên trong",
        "rad": "疒 (nạch – bệnh tật)",
        "mean": "bệnh, ốm",
        "tip": "Bộ 疒 = hình người nằm trên giường bệnh. Thấy 疒 → nghĩ ngay tới ỐM ĐAU.",
        "cf": "痛 (tòng – cùng bộ 疒)",
        "w": "看病 / 生病 / 看医生"
      }
    ],
    "colloFull": [
      {
        "zh": "去医院看病",
        "py": "qù yīyuàn kànbìng",
        "vn": "đi bệnh viện khám"
      },
      {
        "zh": "看病的人",
        "py": "kànbìng de rén",
        "vn": "người đi khám"
      },
      {
        "zh": "给他看病",
        "py": "gěi tā kànbìng",
        "vn": "khám cho anh ấy"
      },
      {
        "zh": "来看病",
        "py": "lái kànbìng",
        "vn": "đến khám"
      }
    ],
    "patterns": [
      {
        "s": "去 + 医院 + 看病",
        "m": "Đi bệnh viện khám bệnh"
      },
      {
        "s": "看病 dùng cho cả người bệnh lẫn bác sĩ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Chiều nay tôi đi bệnh viện khám bệnh.",
        "answer": "今天下午我去医院看病。",
        "answerPy": "Jīntiān xiàwǔ wǒ qù yīyuàn kànbìng.",
        "note": "去医院看病 — đi bệnh viện khám.",
        "pair": "去 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bác sĩ đang khám cho anh ấy.",
        "answer": "医生正在给他看病。",
        "answerPy": "Yīshēng zhèngzài gěi tā kànbìng.",
        "note": "给 + người + động từ — làm gì cho ai.",
        "pair": "正在 + V"
      }
    ]
  },
  {
    "n": 16,
    "zh": "病",
    "py": "bìng",
    "pos": "Động từ",
    "vn": "ốm, bị ốm, bị bệnh",
    "hv": "bệnh",
    "em": "🤢",
    "lesson": 3,
    "ex_zh": "医生，我病了。",
    "ex_py": "Yīshēng, wǒ bìng le.",
    "ex_vn": "Thưa bác sĩ, tôi bị ốm rồi.",
    "exList": [
      {
        "zh": "医生，我病了。",
        "py": "Yīshēng, wǒ bìng le.",
        "vn": "Thưa bác sĩ, tôi bị ốm rồi."
      }
    ],
    "hanzi": [
      {
        "c": "病",
        "p": "bìng",
        "type": "半包围 · Bán bao (疒)",
        "st": 10,
        "ord": "疒(bộ bệnh) → 丙 bên trong",
        "rad": "疒 (nạch – bệnh tật)",
        "mean": "bệnh, ốm",
        "tip": "Bộ 疒 = hình người nằm trên giường bệnh. Thấy 疒 → nghĩ ngay tới ỐM ĐAU.",
        "cf": "痛 (tòng – cùng bộ 疒)",
        "w": "病了 / 生病 / 看病"
      }
    ],
    "colloFull": [
      {
        "zh": "生病",
        "py": "shēngbìng",
        "vn": "bị ốm"
      },
      {
        "zh": "看病",
        "py": "kànbìng",
        "vn": "khám bệnh"
      },
      {
        "zh": "病人",
        "py": "bìngrén",
        "vn": "bệnh nhân"
      },
      {
        "zh": "他的病",
        "py": "tā de bìng",
        "vn": "bệnh của anh ấy"
      }
    ],
    "patterns": [
      {
        "s": "生 / 看 + 病",
        "m": "Bị ốm, khám bệnh"
      },
      {
        "s": "病 nằm trong 生病 · 看病 · 病人 — cùng một gốc nghĩa"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bệnh của anh ấy không nặng lắm.",
        "answer": "他的病不太大。",
        "answerPy": "Tā de bìng bú tài dà.",
        "note": "不太 — không … lắm.",
        "pair": "不太 + Adj"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay bệnh viện có rất nhiều người đi khám.",
        "answer": "今天医院有很多看病的人。",
        "answerPy": "Jīntiān yīyuàn yǒu hěn duō kànbìng de rén.",
        "note": "看病的人 — người đi khám.",
        "pair": "……有……"
      }
    ]
  },
  {
    "n": 17,
    "zh": "一点儿",
    "py": "yìdiǎnr",
    "pos": "Số lượng từ",
    "vn": "một chút, một ít",
    "hv": "nhất điểm nhi",
    "em": "🤏",
    "lesson": 3,
    "ex_zh": "好的，吃一点儿药，今天休息半天吧。",
    "ex_py": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
    "ex_vn": "Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.",
    "exList": [
      {
        "zh": "好的，吃一点儿药，今天休息半天吧。",
        "py": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
        "vn": "Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé."
      }
    ],
    "hanzi": [
      {
        "c": "一",
        "p": "yì",
        "type": "独体字 · Chỉ sự",
        "st": 1,
        "ord": "一 (một nét ngang duy nhất)",
        "rad": "一 (nhất – tự thành bộ, số một)",
        "mean": "một, số 1",
        "tip": "Một nét NGANG đơn giản nhất, tượng trưng cho đơn vị ÍT NHẤT, MỘT → SỐ MỘT. (Ở đây đọc biến điệu thành \"yì\" vì đứng trước 点 mang thanh 3.)",
        "cf": "二 (èr – \"số hai\", thêm một nét ngang thứ hai)",
        "w": "一点儿 / 一起 / 第一"
      },
      {
        "c": "点",
        "p": "diǎn",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "占(chiêm) trên → 灬(hỏa) dưới",
        "rad": "灬 (hỏa – lửa, biến thể 4 chấm)",
        "mean": "chấm, điểm, một chút; giờ",
        "tip": "Bộ 灬(4 chấm nhỏ tượng trưng đốm lửa) → nghĩa mở rộng thành CHẤM nhỏ, MỘT CHÚT, ĐIỂM.",
        "cf": "店 (diàn – \"cửa hàng\", cũng có 占 nhưng thêm bộ 广\")",
        "w": "一点儿 / 有点儿 / 几点"
      },
      {
        "c": "儿",
        "p": "r",
        "type": "独体字 · Tượng hình",
        "st": 2,
        "ord": "丿(phẩy) → 乚(sổ cong)",
        "rad": "儿 (nhi – tự thành bộ, người)",
        "mean": "con, trẻ nhỏ; hậu tố uốn lưỡi (儿化音)",
        "tip": "Hình người đang bước đi bằng hai chân (biến thể của 人) → dùng chỉ CON, TRẺ NHỎ; khi đứng sau âm tiết khác thì đọc lướt thành âm \"-r\".",
        "cf": "几 (jǐ – \"mấy, bao nhiêu\", hình dáng gần giống)",
        "w": "一点儿 / 有点儿 / 儿子"
      }
    ],
    "colloFull": [
      {
        "zh": "一点儿水",
        "py": "yìdiǎnr shuǐ",
        "vn": "một chút nước"
      },
      {
        "zh": "吃一点儿",
        "py": "chī yìdiǎnr",
        "vn": "ăn một chút"
      },
      {
        "zh": "冷一点儿",
        "py": "lěng yìdiǎnr",
        "vn": "lạnh hơn chút"
      },
      {
        "zh": "喝一点儿热水",
        "py": "hē yìdiǎnr rè shuǐ",
        "vn": "uống chút nước nóng"
      }
    ],
    "patterns": [
      {
        "s": "一点儿 + danh từ",
        "m": "Một chút cái gì: 一点儿水"
      },
      {
        "s": "tính từ + 一点儿",
        "m": "Hơn một chút: 冷一点儿"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn uống một chút nước nóng đi.",
        "answer": "你喝一点儿热水吧。",
        "answerPy": "Nǐ hē yìdiǎnr rèshuǐ ba.",
        "note": "一点儿 + danh từ — một chút cái gì.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Hôm nay lạnh hơn một chút.",
        "answer": "今天冷一点儿。",
        "answerPy": "Jīntiān lěng yìdiǎnr.",
        "note": "tính từ + 一点儿 — hơn một chút.",
        "pair": "Adj + 一点儿"
      }
    ]
  },
  {
    "n": 18,
    "zh": "药",
    "py": "yào",
    "pos": "Danh từ",
    "vn": "thuốc",
    "hv": "dược",
    "em": "💊",
    "lesson": 3,
    "ex_zh": "好的，吃一点儿药，今天休息半天吧。",
    "ex_py": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
    "ex_vn": "Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.",
    "exList": [
      {
        "zh": "好的，吃一点儿药，今天休息半天吧。",
        "py": "Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.",
        "vn": "Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé."
      }
    ],
    "hanzi": [
      {
        "c": "药",
        "p": "yào",
        "type": "上下结构 · Trên-dưới",
        "st": 9,
        "ord": "艹(thảo đầu) trên → 约(ước) dưới",
        "rad": "艹 (thảo – cỏ cây)",
        "mean": "thuốc",
        "tip": "Bộ 艹(cỏ) ở trên → thuốc xưa làm từ cây cỏ, thảo dược.",
        "cf": "约 (yuē – \"hẹn\", thiếu 艹)",
        "w": "吃药 / 一点儿药"
      }
    ],
    "colloFull": [
      {
        "zh": "吃药",
        "py": "chī yào",
        "vn": "uống thuốc"
      },
      {
        "zh": "买药",
        "py": "mǎi yào",
        "vn": "mua thuốc"
      },
      {
        "zh": "一些药",
        "py": "yìxiē yào",
        "vn": "một ít thuốc"
      },
      {
        "zh": "医生的药",
        "py": "yīshēng de yào",
        "vn": "thuốc của bác sĩ"
      }
    ],
    "patterns": [
      {
        "s": "吃 + 药",
        "m": "Uống thuốc — tiếng Trung nói 吃药, không nói 喝药"
      },
      {
        "s": "药 có bộ 艹 (cỏ) ở trên — thuốc xưa làm từ cây cỏ"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Uống thuốc rồi bạn đi ngủ đi.",
        "answer": "吃药后你去睡觉吧。",
        "answerPy": "Chī yào hòu nǐ qù shuìjiào ba.",
        "note": "Tiếng Trung nói 吃药, không nói 喝药.",
        "pair": "……后"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn đi mua một ít thuốc.",
        "answer": "我想去买一些药。",
        "answerPy": "Wǒ xiǎng qù mǎi yìxiē yào.",
        "note": "一些药 — một ít thuốc.",
        "pair": "想 + V"
      }
    ]
  },
  {
    "n": 19,
    "zh": "天",
    "py": "tiān",
    "pos": "Lượng từ",
    "vn": "ngày",
    "hv": "thiên",
    "em": "📆",
    "lesson": 3,
    "ex_zh": "今天休息半天吧。",
    "ex_py": "Jīntiān xiūxi bàn tiān ba.",
    "ex_vn": "Hôm nay nghỉ ngơi nửa ngày nhé.",
    "exList": [
      {
        "zh": "今天休息半天吧。",
        "py": "Jīntiān xiūxi bàn tiān ba.",
        "vn": "Hôm nay nghỉ ngơi nửa ngày nhé."
      }
    ],
    "hanzi": [
      {
        "c": "天",
        "p": "tiān",
        "type": "独体字 · Chỉ sự",
        "st": 4,
        "ord": "一→一→丿→㇏",
        "rad": "大 (đại – to lớn)",
        "mean": "ngày, trời",
        "tip": "Nét ngang trên cùng tượng trưng bầu TRỜI, đặt trên 大(người dang tay) → một vòng mặt trời mọc-lặn trên bầu trời tính là một NGÀY.",
        "cf": "太 (tài – \"quá, thái\", cũng từ 大 thêm dấu chấm)",
        "w": "半天 / 今天 / 明天"
      }
    ],
    "colloFull": [
      {
        "zh": "三天",
        "py": "sān tiān",
        "vn": "ba ngày"
      },
      {
        "zh": "几天",
        "py": "jǐ tiān",
        "vn": "mấy ngày"
      },
      {
        "zh": "一天",
        "py": "yì tiān",
        "vn": "một ngày"
      },
      {
        "zh": "两天",
        "py": "liǎng tiān",
        "vn": "hai ngày"
      }
    ],
    "patterns": [
      {
        "s": "số + 天",
        "m": "Bao nhiêu ngày: 三天 — 天 tự làm lượng từ"
      },
      {
        "s": "✗ 三个天 → ✓ 三天",
        "m": "天 · 年 · 岁 đều không cần thêm 个"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi ốm ba ngày rồi.",
        "answer": "我生病三天了。",
        "answerPy": "Wǒ shēngbìng sān tiān le.",
        "note": "天 tự làm lượng từ, không thêm 个.",
        "pair": "……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy ngày nay trời đều mưa.",
        "answer": "这几天都下雨。",
        "answerPy": "Zhè jǐ tiān dōu xià yǔ.",
        "note": "几天 — mấy ngày.",
        "pair": "都 + V"
      }
    ]
  },
  {
    "n": 20,
    "zh": "回",
    "py": "huí",
    "pos": "Động từ",
    "vn": "về, quay về",
    "hv": "hồi",
    "em": "🏠",
    "lesson": 3,
    "ex_zh": "回家后再喝些热水。",
    "ex_py": "Huí jiā hòu zài hē xiē rè shuǐ.",
    "ex_vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé.",
    "exList": [
      {
        "zh": "回家后再喝些热水。",
        "py": "Huí jiā hòu zài hē xiē rè shuǐ.",
        "vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé."
      }
    ],
    "hanzi": [
      {
        "c": "回",
        "p": "huí",
        "type": "全包围结构 · Bao vây hoàn toàn",
        "st": 6,
        "ord": "囗(vi) ngoài → 口(khẩu) trong",
        "rad": "囗 (vi – vây quanh)",
        "mean": "trở về, về",
        "tip": "Hình vòng xoáy đi rồi lại vòng về điểm cũ → TRỞ VỀ.",
        "cf": "回 dễ nhầm 囘 (dị thể cổ)",
        "w": "回家 / 回来"
      }
    ],
    "colloFull": [
      {
        "zh": "回家",
        "py": "huí jiā",
        "vn": "về nhà"
      },
      {
        "zh": "回公司",
        "py": "huí gōngsī",
        "vn": "về công ty"
      },
      {
        "zh": "回学校",
        "py": "huí xuéxiào",
        "vn": "về trường"
      },
      {
        "zh": "回来",
        "py": "huílai",
        "vn": "quay về"
      }
    ],
    "patterns": [
      {
        "s": "回 + nơi chốn",
        "m": "Về đâu: 回家 — không cần giới từ"
      },
      {
        "s": "回 (về chỗ cũ) ≠ 去 (đi đến một nơi)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Mưa rồi, chúng ta về nhà thôi.",
        "answer": "下雨了，我们回家吧。",
        "answerPy": "Xià yǔ le, wǒmen huí jiā ba.",
        "note": "回家 không cần giới từ.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Mấy giờ bạn về trường?",
        "answer": "你几点回学校？",
        "answerPy": "Nǐ jǐ diǎn huí xuéxiào?",
        "note": "回 là về chỗ cũ, 去 là đi đến một nơi.",
        "pair": "几点……？"
      }
    ]
  },
  {
    "n": 21,
    "zh": "再",
    "py": "zài",
    "pos": "Phó từ",
    "vn": "sau đó, mới (chỉ trình tự)",
    "hv": "tái",
    "em": "➡️",
    "lesson": 3,
    "ex_zh": "回家后再喝些热水。",
    "ex_py": "Huí jiā hòu zài hē xiē rè shuǐ.",
    "ex_vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé.",
    "exList": [
      {
        "zh": "回家后再喝些热水。",
        "py": "Huí jiā hòu zài hē xiē rè shuǐ.",
        "vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé."
      }
    ],
    "hanzi": [
      {
        "c": "再",
        "p": "zài",
        "type": "独体字 · Chữ đơn",
        "st": 6,
        "ord": "一(trên) → 冂(khung bao) → 二(hai nét ngang bên trong)",
        "rad": "冂 (quynh – khung bao ngoài)",
        "mean": "lại, thêm lần nữa, sau đó",
        "tip": "Một lớp KHUNG 冂 bao thêm bên ngoài, bên trong lại có thêm nét → ý LẶP LẠI, THÊM MỘT LẦN NỮA → LẠI, SAU ĐÓ.",
        "cf": "冉 (rǎn – \"dần dần\", thiếu nét ngang trên cùng so với 再\")",
        "w": "再见 / 再来 / 回家后再"
      }
    ],
    "colloFull": [
      {
        "zh": "再来",
        "py": "zài lái",
        "vn": "lại đến"
      },
      {
        "zh": "再说",
        "py": "zài shuō",
        "vn": "nói lại"
      },
      {
        "zh": "再见",
        "py": "zàijiàn",
        "vn": "tạm biệt"
      },
      {
        "zh": "再吃一点儿",
        "py": "zài chī yìdiǎnr",
        "vn": "ăn thêm một chút"
      }
    ],
    "patterns": [
      {
        "s": "再 + động từ",
        "m": "Làm lại lần nữa: 再来 · 再说"
      },
      {
        "s": "再见 nghĩa đen là gặp (见) lại (再)"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Bạn ăn thêm một chút đi.",
        "answer": "你再吃一点儿吧。",
        "answerPy": "Nǐ zài chī yìdiǎnr ba.",
        "note": "再 + động từ — làm thêm lần nữa.",
        "pair": "……吧"
      },
      {
        "promptLang": "vi",
        "prompt": "Ngày mai mời bạn lại đến nhé.",
        "answer": "明天请你再来吧。",
        "answerPy": "Míngtiān qǐng nǐ zài lái ba.",
        "note": "再来 — lại đến.",
        "pair": "请 + V"
      }
    ]
  },
  {
    "n": 22,
    "zh": "喝",
    "py": "hē",
    "pos": "Động từ",
    "vn": "uống",
    "hv": "hát",
    "em": "🥤",
    "lesson": 3,
    "ex_zh": "回家后再喝些热水。",
    "ex_py": "Huí jiā hòu zài hē xiē rè shuǐ.",
    "ex_vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé.",
    "exList": [
      {
        "zh": "回家后再喝些热水。",
        "py": "Huí jiā hòu zài hē xiē rè shuǐ.",
        "vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé."
      }
    ],
    "hanzi": [
      {
        "c": "喝",
        "p": "hē",
        "type": "左右结构 · Trái-phải",
        "st": 12,
        "ord": "口(khẩu) trái → 曷(hạt) phải",
        "rad": "口 (khẩu – miệng)",
        "mean": "uống",
        "tip": "口(miệng) dùng để UỐNG chất lỏng.",
        "cf": "渴 (kě – \"khát\", cũng có 曷\")",
        "w": "喝水 / 喝热水"
      }
    ],
    "colloFull": [
      {
        "zh": "喝水",
        "py": "hē shuǐ",
        "vn": "uống nước"
      },
      {
        "zh": "喝热水",
        "py": "hē rè shuǐ",
        "vn": "uống nước nóng"
      },
      {
        "zh": "喝牛奶",
        "py": "hē niúnǎi",
        "vn": "uống sữa"
      },
      {
        "zh": "想喝",
        "py": "xiǎng hē",
        "vn": "muốn uống"
      }
    ],
    "patterns": [
      {
        "s": "喝 + đồ uống",
        "m": "Uống cái gì: 喝水"
      },
      {
        "s": "喝 (uống) ≠ 吃 (ăn) — nhưng thuốc thì nói 吃药"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Lúc bị ốm phải uống nhiều nước nóng.",
        "answer": "生病的时候要多喝热水。",
        "answerPy": "Shēngbìng de shíhou yào duō hē rèshuǐ.",
        "note": "喝热水 — uống nước nóng.",
        "pair": "要 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Bạn muốn uống gì?",
        "answer": "你想喝什么？",
        "answerPy": "Nǐ xiǎng hē shénme?",
        "note": "Câu có 什么 thì không thêm 吗.",
        "pair": "……什么？"
      }
    ]
  },
  {
    "n": 23,
    "zh": "热",
    "py": "rè",
    "pos": "Tính từ",
    "vn": "nóng, ấm",
    "hv": "nhiệt",
    "em": "🔥",
    "lesson": 3,
    "ex_zh": "回家后再喝些热水。",
    "ex_py": "Huí jiā hòu zài hē xiē rè shuǐ.",
    "ex_vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé.",
    "exList": [
      {
        "zh": "回家后再喝些热水。",
        "py": "Huí jiā hòu zài hē xiē rè shuǐ.",
        "vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé."
      }
    ],
    "hanzi": [
      {
        "c": "热",
        "p": "rè",
        "type": "上下结构 · Trên-dưới",
        "st": 10,
        "ord": "执(biến thể) trên → 灬(hỏa) dưới",
        "rad": "灬 (hỏa – lửa, phần dưới)",
        "mean": "nóng",
        "tip": "执(cầm nắm) + 灬(lửa) → cầm phải vật có lửa → NÓNG.",
        "cf": "势 (shì – \"thế lực\")",
        "w": "热水 / 太热了"
      }
    ],
    "colloFull": [
      {
        "zh": "很热",
        "py": "hěn rè",
        "vn": "rất nóng"
      },
      {
        "zh": "有点儿热",
        "py": "yǒudiǎnr rè",
        "vn": "hơi nóng"
      },
      {
        "zh": "热水",
        "py": "rè shuǐ",
        "vn": "nước nóng"
      },
      {
        "zh": "太热了",
        "py": "tài rè le",
        "vn": "nóng quá"
      }
    ],
    "patterns": [
      {
        "s": "很 / 太 + 热",
        "m": "Nóng — nói về thời tiết hoặc đồ vật"
      },
      {
        "s": "热 ↔ 冷",
        "m": "Nóng ↔ lạnh"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Hôm nay nóng quá!",
        "answer": "今天太热了！",
        "answerPy": "Jīntiān tài rè le!",
        "note": "热 ↔ 冷 — nóng và lạnh.",
        "pair": "太……了"
      },
      {
        "promptLang": "vi",
        "prompt": "Tôi thấy hôm nay hơi nóng.",
        "answer": "我觉得今天有点儿热。",
        "answerPy": "Wǒ juéde jīntiān yǒudiǎnr rè.",
        "note": "有点儿 mang ý không hài lòng.",
        "pair": "有点儿 + Adj"
      }
    ]
  },
  {
    "n": 24,
    "zh": "水",
    "py": "shuǐ",
    "pos": "Danh từ",
    "vn": "nước",
    "hv": "thủy",
    "em": "💧",
    "lesson": 3,
    "ex_zh": "回家后再喝些热水。",
    "ex_py": "Huí jiā hòu zài hē xiē rè shuǐ.",
    "ex_vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé.",
    "exList": [
      {
        "zh": "回家后再喝些热水。",
        "py": "Huí jiā hòu zài hē xiē rè shuǐ.",
        "vn": "Sau khi về nhà nhớ uống thêm ít nước ấm nhé."
      }
    ],
    "hanzi": [
      {
        "c": "水",
        "p": "shuǐ",
        "type": "独体字 · Tượng hình",
        "st": 4,
        "ord": "丨→𠃌→丿→㇏",
        "rad": "水 (thuỷ – tự thành bộ)",
        "mean": "nước",
        "tip": "Hình dòng nước chảy uốn lượn → NƯỚC.",
        "cf": "冰 (bīng – \"băng\")",
        "w": "热水 / 喝水"
      }
    ],
    "colloFull": [
      {
        "zh": "喝水",
        "py": "hē shuǐ",
        "vn": "uống nước"
      },
      {
        "zh": "热水",
        "py": "rè shuǐ",
        "vn": "nước nóng"
      },
      {
        "zh": "一点儿水",
        "py": "yìdiǎnr shuǐ",
        "vn": "một chút nước"
      },
      {
        "zh": "一杯水",
        "py": "yì bēi shuǐ",
        "vn": "một cốc nước"
      }
    ],
    "patterns": [
      {
        "s": "喝 + 水",
        "m": "Uống nước"
      },
      {
        "s": "水 là chữ tượng hình — nét giữa là dòng chảy"
      }
    ],
    "checkList": [
      {
        "promptLang": "vi",
        "prompt": "Tôi muốn uống một chút nước.",
        "answer": "我想喝一点儿水。",
        "answerPy": "Wǒ xiǎng hē yìdiǎnr shuǐ.",
        "note": "喝水 — uống nước.",
        "pair": "想 + V"
      },
      {
        "promptLang": "vi",
        "prompt": "Trên bàn có một cốc nước nóng.",
        "answer": "桌子上有一杯热水。",
        "answerPy": "Zhuōzi shang yǒu yì bēi rèshuǐ.",
        "note": "一杯水 — một cốc nước.",
        "pair": "nơi chốn + 有 + N"
      }
    ]
  }
];

var wuData = [
  {img:'/images/hsk1v3-bai-12/xiayu.jpg',label:'下雨',py:'xià yǔ',letter:'A'},
  {img:'/images/hsk1v3-bai-12/leng.jpg',label:'冷',py:'lěng',letter:'B'},
  {img:'/images/hsk1v3-bai-12/shengbing.jpg',label:'生病',py:'shēngbìng',letter:'C'},
  {img:'/images/hsk1v3-bai-12/kanbing.jpg',label:'看病',py:'kànbìng',letter:'D'},
  {img:'/images/hsk1v3-bai-12/xue.jpg',label:'雪',py:'xuě',letter:'E'},
  {img:'/images/hsk1v3-bai-12/shui.jpg',label:'水',py:'shuǐ',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 12: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-12/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'shuì', options:['shuǐ','shuì','hěn']},
            {before:'', after:'', answer:'wèntí', options:['wèntí','kànbìng','diànshì']},
            {before:'', after:'', answer:'fēicháng', options:['gāoxìng','fēicháng','zhīdào']},
            {before:'', after:'', answer:'duìbuqǐ', options:['qù chāoshì','zài shāngdiàn','duìbuqǐ']}
          ] },
        { type: 'pymatch', caption: 'Nghe âm tiết, ghép với từ đúng',
          items: [{py:'nǐ hǎo', hz:'你好'}, {py:'míngzi', hz:'名字'}, {py:'Zhōngguó', hz:'中国'}, {py:'lǎoshī', hz:'老师'}, {py:'háizi', hz:'孩子'}, {py:'xièxie', hz:'谢谢'}] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận (tiếp)',
          rows: [
            ['Nét mới', '横折钩 héngzhégōu (ngang-gập-móc), 竖弯钩 shùwāngōu (sổ-cong-móc), 横折弯钩 héngzhéwāngōu (ngang-gập-cong-móc), 竖折折钩 shùzhézhégōu (sổ-gập-gập-móc)'],
            ['Quy tắc bút thuận', '先中间后两边 (giữa trước hai bên sau) — ví dụ: 水'],
            ['Ví dụ luyện viết', '书 (shū) → 读书 (dúshū); 几 (jǐ) → 几岁 (jǐ suì); 吃 (chī) → 吃饭 (chīfàn); 妈 (mā) → 妈妈 (māma); 少 (shǎo) → 多少 (duōshao)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-12/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q1c.jpg'}
            ], answer: 'A' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'在吃药', py:'zài chī yào'},
              {key:'B', text:'有点儿', py:'yǒudiǎnr'},
              {key:'C', text:'不太好', py:'bú tài hǎo'}
            ], answer: 'C' },
            { n: 5, options: [
              {key:'A', text:'下雪了', py:'xià xuě le'},
              {key:'B', text:'太热了', py:'tài rè le'},
              {key:'C', text:'不喝水', py:'bù hē shuǐ'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'看医生', py:'kàn yīshēng'},
              {key:'B', text:'看朋友', py:'kàn péngyou'},
              {key:'C', text:'看病人', py:'kàn bìngrén'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'工作', py:'gōngzuò'},
              {key:'B', text:'休息', py:'xiūxi'},
              {key:'C', text:'读书', py:'dúshū'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '我女儿生病了。', promptPy: 'Wǒ nǚ\'ér shēngbìng le.', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '今天天不太好，下雪了。', promptPy: 'Jīntiān tiān bú tài hǎo, xià xuě le.', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '12:00了，你们怎么还在看电视？', promptPy: '12:00 le, nǐmen zěnme hái zài kàn diànshì?', options: [
              {key:'A', img:'/images/hsk1v3-bai-12-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-12-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-12-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-12-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '你怎么了？', promptPy: 'Nǐ zěnme le?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 15, prompt: '你想喝点儿什么？', promptPy: 'Nǐ xiǎng hē diǎnr shénme?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你开车了？', promptPy: 'Nǐ kāichē le?', options: [
              {key:'A', text:'热水。', py:'Rè shuǐ.'},
              {key:'B', text:'我病了。', py:'Wǒ bìng le.'},
              {key:'C', text:'对。', py:'Duì.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 17, prompt: '他（　）了，没来上班。', promptPy: 'Tā ( ) le, méi lái shàngbān.', options: [
              {key:'A', text:'冷', py:'lěng'},
              {key:'B', text:'生病', py:'shēngbìng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：外边雨大吗？\n女：很大，我觉得有点儿（　）。', promptPy: 'Wàibian yǔ dà ma? / Hěn dà, wǒ juéde yǒudiǎnr ( ).', options: [
              {key:'A', text:'冷', py:'lěng'},
              {key:'B', text:'生病', py:'shēngbìng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '昨天的天气很好，我和朋友们去外边玩了。\n★说话人觉得昨天：', promptPy: 'Zuótiān de tiānqì hěn hǎo, wǒ hé péngyoumen qù wàibian wán le.', options: [
              {key:'A', text:'天气好', py:'tiānqì hǎo'},
              {key:'B', text:'雨不大', py:'yǔ bú dà'},
              {key:'C', text:'有点儿冷', py:'yǒudiǎnr lěng'}
            ], answer: 'A' },
            { n: 20, prompt: '老张去看病，医生说他要吃三天药。\n★医生说老张：', promptPy: 'Lǎo Zhāng qù kànbìng, yīshēng shuō tā yào chī sān tiān yào.', options: [
              {key:'A', text:'要吃药', py:'yào chī yào'},
              {key:'B', text:'要多睡觉', py:'yào duō shuìjiào'},
              {key:'C', text:'要多喝水', py:'yào duō hē shuǐ'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一雪打电话给王一飞询问天气 · Hỏi thăm thời tiết',
   preQuiz:[
     {q:'王一飞那儿的天气（　）。',opts:['很好','很不好','不太好'],ans:2},
     {q:'王一飞觉得（　）。',opts:['不冷','很冷','有点儿冷'],ans:1},
   ],
   lines:[
     {sp:0,zh:'今天天气怎么样？',py:'Jīntiān tiānqì zěnmeyàng?',vn:'Hôm nay thời tiết thế nào?'},
     {sp:1,zh:'这里的天不太好，下雨了。',py:'Zhèlǐ de tiān bú tài hǎo, xià yǔ le.',vn:'Thời tiết ở đây không ổn lắm, mưa rồi ạ.'},
     {sp:0,zh:'雨大吗？',py:'Yǔ dà ma?',vn:'Mưa to không?'},
     {sp:1,zh:'有点儿大，我觉得很冷。',py:'Yǒudiǎnr dà, wǒ juéde hěn lěng.',vn:'Hơi to ạ, em cảm thấy rất lạnh.'},
   ]},
  {scene:'王一雪和杨同乐在公司电梯里聊天儿 · Hôm qua bị ốm',
   preQuiz:[
     {q:'杨同乐昨天（　）了。',opts:['生病','上班','去公司'],ans:0},
     {q:'杨同乐今天（　）了。',opts:['在家里','去医院','来公司'],ans:2},
   ],
   lines:[
     {sp:0,zh:'昨天下雪了。',py:'Zuótiān xià xuě le.',vn:'Hôm qua tuyết rơi rồi.'},
     {sp:1,zh:'是的，太冷了。',py:'Shì de, tài lěng le.',vn:'Đúng vậy, trời lạnh quá.'},
     {sp:0,zh:'你昨天没来公司，生病了？',py:'Nǐ zuótiān méi lái gōngsī, shēngbìng le?',vn:'Hôm qua bạn không đến công ty, bị ốm à?'},
     {sp:1,zh:'对，我昨天去医院看病了。',py:'Duì, wǒ zuótiān qù yīyuàn kànbìng le.',vn:'Đúng vậy, hôm qua em đi bệnh viện khám bệnh.'},
   ]},
  {scene:'医生给杨同乐看病 · Khám bệnh',
   preQuiz:[
     {q:'杨同乐觉得（　）。',opts:['很热','很冷','有点儿冷'],ans:1},
     {q:'医生对杨同乐说："今天（　）吧。"',opts:['上班','下班','休息半天'],ans:2},
   ],
   lines:[
     {sp:0,zh:'医生，我病了。',py:'Yīshēng, wǒ bìng le.',vn:'Thưa bác sĩ, tôi bị ốm rồi.'},
     {sp:1,zh:'我看看。你觉得怎么样？',py:'Wǒ kànkan. Nǐ juéde zěnmeyàng?',vn:'Để tôi khám xem. Anh cảm thấy thế nào?'},
     {sp:0,zh:'我很冷。',py:'Wǒ hěn lěng.',vn:'Tôi rất lạnh.'},
     {sp:1,zh:'好的，吃一点儿药，今天休息半天吧。',py:'Hǎo de, chī yìdiǎnr yào, jīntiān xiūxi bàn tiān ba.',vn:'Được rồi, uống một ít thuốc nhé, hôm nay nghỉ ngơi nửa ngày nhé.'},
     {sp:0,zh:'好的。',py:'Hǎo de.',vn:'Vâng.'},
     {sp:1,zh:'回家后再喝些热水。',py:'Huí jiā hòu zài hē xiē rè shuǐ.',vn:'Sau khi về nhà nhớ uống thêm ít nước ấm nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'天', right:'气'},
  {left:'下', right:'雨'},
  {left:'下', right:'雪'},
  {left:'生', right:'病'},
  {left:'看', right:'病'},
  {left:'公', right:'司'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'', blank:'今天天气', post:'怎么样？', hint:'(thời tiết hôm nay)', ans:'今天天气'},
  {pre:'这里的天不太好，', blank:'下雨了', post:'。', hint:'(mưa rồi)', ans:'下雨了'},
  {pre:'有点儿大，我', blank:'觉得很冷', post:'。', hint:'(cảm thấy rất lạnh)', ans:'觉得很冷'},
  {pre:'', blank:'昨天下雪了', post:'。', hint:'(hôm qua tuyết rơi)', ans:'昨天下雪了'},
  {pre:'你昨天没来公司，', blank:'生病了', post:'？', hint:'(bị ốm)', ans:'生病了'},
  {pre:'对，我昨天去医院', blank:'看病了', post:'。', hint:'(khám bệnh)', ans:'看病了'},
  {pre:'好的，吃一点儿药，今天', blank:'休息半天', post:'吧。', hint:'(nghỉ nửa ngày)', ans:'休息半天'},
  {pre:'回家后再', blank:'喝些热水', post:'。', hint:'(uống ít nước ấm)', ans:'喝些热水'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','天气','怎么样','？'], ans:'今天天气怎么样？', audio:'今天天气怎么样？'},
  {words:['这里','的','天','不太好','，','下雨','了','。'], ans:'这里的天不太好，下雨了。', audio:'这里的天不太好，下雨了。'},
  {words:['昨天','下雪','了','。'], ans:'昨天下雪了。', audio:'昨天下雪了。'},
  {words:['你','昨天','没','来','公司','，','生病','了','？'], ans:'你昨天没来公司，生病了？', audio:'你昨天没来公司，生病了？'},
  {words:['医生','，','我','病','了','。'], ans:'医生，我病了。', audio:'医生，我病了。'},
  {words:['回家','后','再','喝','些','热水','。'], ans:'回家后再喝些热水。', audio:'回家后再喝些热水。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"今天天气怎么样？" nghĩa là gì?', opts:['Hôm nay thời tiết thế nào?', 'Hôm nay thứ mấy?', 'Hôm nay bạn đi đâu?', 'Hôm nay mấy giờ rồi?'], ans:0},
  {q:'"下雨了" nghĩa là gì?', opts:['Trời mưa rồi', 'Trời nắng rồi', 'Trời tuyết rồi', 'Trời lạnh rồi'], ans:0},
  {q:'Trợ từ ngữ khí "了(1)" dùng để biểu thị điều gì?', opts:['sự thay đổi hoặc xuất hiện tình huống mới', 'sự phủ định', 'câu hỏi', 'mệnh lệnh'], ans:0},
  {q:'"你昨天没来公司，生病了？" nghĩa là gì?', opts:['Hôm qua bạn không đến công ty, bị ốm à?', 'Hôm qua bạn đến công ty làm việc.', 'Hôm nay bạn không đến công ty.', 'Bạn thích công ty này không?'], ans:0},
  {q:'"太冷了！" thuộc cấu trúc nào?', opts:['太……了 (cảm thán mức độ cao)', '正反问', '存现句', '疑问代词'], ans:0},
  {q:'"我很冷。" — "冷" thuộc từ loại gì?', opts:['tính từ', 'danh từ', 'động từ', 'phó từ'], ans:0},
  {q:'"回家后再喝些热水。" nghĩa là gì?', opts:['Sau khi về nhà nhớ uống thêm ít nước ấm.', 'Trước khi về nhà hãy uống nước.', 'Đừng uống nước khi về nhà.', 'Về nhà rồi mới nấu nước.'], ans:0},
  {q:'Câu phi chủ vị (非主谓句) thường dùng khi nào?', opts:['trong khẩu ngữ, câu ngắn không rõ chủ-vị', 'chỉ dùng trong văn viết trang trọng', 'chỉ dùng khi hỏi', 'chỉ dùng khi phủ định'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："今天天气怎么样？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Hôm nay thời tiết thế nào?" Bạn trả lời thế nào?',
     hint: '今天……，有点儿……', sample: '今天下雨了，有点儿冷。', sample_vn: 'Hôm nay trời mưa rồi, hơi lạnh.',
     note: 'Trợ từ "了" đặt cuối câu để nói về một tình huống mới xảy ra.'},
    {q_zh: '同事问你昨天为什么没来公司，你怎么回答？', q_vn: 'Đồng nghiệp hỏi vì sao hôm qua bạn không đến công ty, bạn trả lời thế nào?',
     hint: '我昨天……了。', sample: '我昨天生病了，去医院看病了。', sample_vn: 'Hôm qua tôi bị ốm, đã đi bệnh viện khám bệnh.',
     note: '"生病了" và "看病了" đều dùng "了" để nói về việc đã xảy ra.'},
    {q_zh: '医生问你："你觉得怎么样？" 你怎么回答？', q_vn: 'Bác sĩ hỏi bạn: "Anh/chị cảm thấy thế nào?" Bạn trả lời thế nào?',
     hint: '我觉得……', sample: '我觉得很冷。', sample_vn: 'Tôi cảm thấy rất lạnh.',
     note: '"觉得" + tính từ dùng để miêu tả cảm giác của bản thân.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay thời tiết thế nào?', zh:'今天天气怎么样？', py:'Jīntiān tiānqì zěnmeyàng?'},
  {vi:'Hôm qua tuyết rơi rồi, trời lạnh quá.', zh:'昨天下雪了，太冷了。', py:'Zuótiān xià xuě le, tài lěng le.'},
  {vi:'Thưa bác sĩ, tôi bị ốm rồi.', zh:'医生，我病了。', py:'Yīshēng, wǒ bìng le.'},
  {vi:'Sau khi về nhà nhớ uống thêm ít nước ấm.', zh:'回家后再喝些热水。', py:'Huí jiā hòu zài hē xiē rè shuǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Mưa to không?', zh:'雨大吗？', py:'Yǔ dà ma?'},
  {vi:'Hôm qua bạn không đến công ty à?', zh:'你昨天没来公司吗？', py:'Nǐ zuótiān méi lái gōngsī ma?'},
  {vi:'Để tôi khám xem.', zh:'我看看。', py:'Wǒ kànkan.'},
  {vi:'Hôm nay nghỉ ngơi nửa ngày nhé.', zh:'今天休息半天吧。', py:'Jīntiān xiūxi bàn tiān ba.'},
];
